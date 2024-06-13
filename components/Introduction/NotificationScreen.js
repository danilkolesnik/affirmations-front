import React from "react";
import { ImageBackground, View, Text, Pressable, Image } from "react-native";

export default function NotificationsScreen({ navigation }) {

  const [notificationValue, setNotificationValue] = React.useState(2);

  return (
    <ImageBackground
      source={require("../../assets/images/notifications-bg.png")}
      style={{ flex: 1, width: null, height: null }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            padding: "20px",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text />

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "30px",
            }}
          >
            <Text style={{ color: "#FFF", fontSize: "32px", fontWeight: 600 }}>
              Уведомления
            </Text>
            <Text
              style={{
                color: "#FFF",
                fontSize: "16px",
                fontWeight: 600,
                marginTop: "20px",
              }}
            >
              С ежедневными уведомлениями твоя мотивация достигнет предела!
            </Text>

            <View style={{ marginTop: "25px" }}>
              <View
                style={{
                  // padding: "5px",
                  backgroundColor: "#161616",
                  height: "55px",
                  marginTop: "10px",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    lineHeight: "56px",
                    color: "#FFF",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginLeft: "18px",
                  }}
                >
                  Начало в
                </Text>

                <View
                  style={{
                    marginRight: "18px",
                    backgroundColor: "#0C0C0C",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    width: "110px",
                    borderRadius: "10px",
                  }}
                >
                  <Text
                    style={{
                      color: "#636363",
                      fontSize: "17px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    7:00
                  </Text>
                </View>
              </View>

              <View
                style={{
                  // padding: "5px",
                  backgroundColor: "#161616",
                  height: "55px",
                  marginTop: "10px",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    lineHeight: "56px",
                    color: "#FFF",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginLeft: "18px",
                  }}
                >
                  Количество
                </Text>

                <View
                  style={{
                    marginRight: "18px",
                    backgroundColor: "#0C0C0C",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    width: "110px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    onPress={() => {
                      if (notificationValue >= 2) {
                        setNotificationValue(notificationValue - 1);
                      }
                    }}
                  >
                    <Image
                      source={require("../../assets/icons/minus.svg")}
                    ></Image>
                  </Pressable>
                  <Text
                    style={{
                      color: "#636363",
                      fontSize: "17px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    {notificationValue}
                  </Text>

                  <Pressable
                    onPress={() => setNotificationValue(notificationValue + 1)}
                  >
                    <Image
                      source={require("../../assets/icons/plus.svg")}
                    ></Image>
                  </Pressable>
                </View>
              </View>

              <View
                style={{
                  // padding: "5px",
                  backgroundColor: "#161616",
                  height: "55px",
                  marginTop: "10px",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    lineHeight: "56px",
                    color: "#FFF",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginLeft: "18px",
                  }}
                >
                  Конец в
                </Text>

                <View
                  style={{
                    marginRight: "18px",
                    backgroundColor: "#0C0C0C",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    width: "110px",
                    borderRadius: "10px",
                  }}
                >
                  <Text
                    style={{
                      color: "#636363",
                      fontSize: "17px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    17:00
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <Pressable
            color="#131313"
            style={{
              height: "55px",
              backgroundColor: "#131313",
              borderRadius: "20px",
            }}
            title="Продолжить"
            onPress={() => navigation.navigate("GetName")}
          >
            <Text
              style={{
                textAlign: "center",
                lineHeight: "51px",
                fontSize: "16px",
                fontWeight: "600",
                color: "#FFFFFF",
              }}
            >
              Продолжить
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}
