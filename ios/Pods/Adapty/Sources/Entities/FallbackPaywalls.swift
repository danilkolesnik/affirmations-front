//
//  FallbackPaywalls.swift
//  AdaptySDK
//
//  Created by Aleksei Valiano on 30.09.2022.
//

import Foundation

struct FallbackPaywalls {
    fileprivate static var currentFormatVersion = 5

    private let fileURL: URL
    private let head: Head
    var formatVersion: Int { head.formatVersion }
    var version: Int64 { head.version }

    init(fileURL url: URL) throws {
        guard url.isFileURL else {
            throw AdaptyError.isNotFileUrl()
        }
        let decoder = FallbackPaywalls.decoder()
        head = try decoder.decode(Head.self, from: Data(contentsOf: url))
        fileURL = url
    }

    func contains(placmentId id: String) -> Bool? {
        head.placementIds?.contains(id)
    }

    func getPaywall(byPlacmentId id: String, profileId: String) -> AdaptyPaywallChosen? {
        guard contains(placmentId: id) ?? true else { return nil }
        
        let decoder = FallbackPaywalls.decoder(profileId: profileId, placmentId: id)
        let chosen: AdaptyPaywallChosen?
        do {
            chosen = try decoder.decode(Body.self, from: Data(contentsOf: fileURL)).chosen
        } catch {
            Log.error(error.localizedDescription)
            chosen = nil
        }

        return chosen.map {
            var v = $0
            v.value.version = version
            return v
        }
    }
}

extension FallbackPaywalls {
    private enum CodingKeys: String, CodingKey {
        case data
        case meta
        case formatVersion = "version"
        case version = "response_created_at"
        case placementIds = "developer_ids"
    }

    struct Head: Decodable {
        let placementIds: Set<String>?
        let version: Int64
        let formatVersion: Int

        init(from decoder: any Decoder) throws {
            let container = try decoder
                .container(keyedBy: CodingKeys.self)
                .nestedContainer(keyedBy: CodingKeys.self, forKey: .meta)

            formatVersion = try container.decode(Int.self, forKey: .formatVersion)

            guard formatVersion == FallbackPaywalls.currentFormatVersion else {
                let error = formatVersion < FallbackPaywalls.currentFormatVersion
                    ? "The fallback paywalls version is not correct. Download a new one from the Adapty Dashboard."
                    : "The fallback paywalls version is not correct. Please update the AdaptySDK."
                Log.error(error)

                Adapty.logSystemEvent(AdaptyInternalEventParameters(eventName: "fallback_wrong_version", params: [
                    "in_version": .value(formatVersion),
                    "expected_version": .value(FallbackPaywalls.currentFormatVersion),
                ]))

                throw AdaptyError.wrongVersionFallback(error)
            }

            version = try container.decode(Int64.self, forKey: .version)
            placementIds = try container.decodeIfPresent(Set<String>.self, forKey: .placementIds)
        }
    }

    struct Body: Decodable {
        let chosen: AdaptyPaywallChosen?
        init(from decoder: any Decoder) throws {
            let placmentId = try CustomCodingKeys(decoder.userInfo.placmentId)
            let container = try decoder
                .container(keyedBy: CodingKeys.self)
                .nestedContainer(keyedBy: FallbackPaywalls.CustomCodingKeys.self, forKey: .data)
            
            guard container.contains(placmentId) else {
                chosen = nil
                return
            }

            if let string = try? container.decode(String.self, forKey: placmentId) {
                let decoder = try FallbackPaywalls.decoder(profileId: decoder.userInfo.profileId)
                let data = string.data(using: .utf8) ?? Data()
                chosen = try decoder.decode(AdaptyPaywallChosen.self, from: data)
            } else {
                chosen = try container.decodeIfPresent(AdaptyPaywallChosen.self, forKey: placmentId)
            }
        }
    }
}

extension FallbackPaywalls {
    static let placmentIdUserInfoKey = CodingUserInfoKey(rawValue: "adapty_placment_id")!

    static func decoder() -> JSONDecoder {
        let decoder = JSONDecoder()
        Backend.configure(decoder: decoder)
        return decoder
    }

    static func decoder(profileId: String) -> JSONDecoder {
        let decoder = decoder()
        decoder.setProfileId(profileId)
        return decoder
    }

    static func decoder(profileId: String, placmentId: String) -> JSONDecoder {
        let decoder = decoder(profileId: profileId)
        decoder.userInfo[FallbackPaywalls.placmentIdUserInfoKey] = placmentId
        return decoder
    }

    struct CustomCodingKeys: CodingKey {
        let stringValue: String
        let intValue: Int?
        init?(stringValue: String) {
            self.stringValue = stringValue
            intValue = nil
        }

        init(_ value: String) {
            stringValue = value
            intValue = nil
        }

        init?(intValue _: Int) {
            nil
        }
    }
}

private extension [CodingUserInfoKey: Any] {
    var placmentId: String {
        get throws {
            if let value = self[FallbackPaywalls.placmentIdUserInfoKey] as? String {
                return value
            }

            throw DecodingError.dataCorrupted(DecodingError.Context(codingPath: [], debugDescription: "The decoder does not have the \(FallbackPaywalls.placmentIdUserInfoKey) parameter"))
        }
    }
}
