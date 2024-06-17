import React from "react";
import {
  ImageBackground,
  View,
  Text,
  Pressable,
  TextInput,
} from "react-native";

export default function GetNameScreen({ navigation }) {
  const [value, onChangeText] = React.useState("Твоё имя...");

  return (
    <ImageBackground
      source={require("../../assets/images/getname-bg.png")}
      style={{ flex: 1, width: null, height: null }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            padding: 20,
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
              gap: 12,
              marginTop: "30px",
            }}
          >
            <Text style={{ color: "#FFF", fontSize: "32px", fontWeight: 600 }}>
              Как тебя зовут?
            </Text>
            <Text
              style={{
                color: "#FFF",
                fontSize: "16px",
                fontWeight: 600,
                marginTop: "20px",
              }}
            >
              Твоё имя будет указываться в аффирмациях для большей мотивации!
            </Text>
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              style={{
                // padding: "5px",
                paddingLeft: 15,
                color: "#B1B1B1",
                backgroundColor: "#161616",
                fontWeight: "400",
                borderRadius: "20px",
                // height: 15,
                paddingTop: 17,
                paddingBottom: 17,
              }}
            />
          </View>

          <Pressable
            color="#131313"
            style={{
              height: "55px",
              backgroundColor: "#131313",
              borderRadius: "20px",
            }}
            title="Продолжить"
            onPress={() => navigation.navigate("Notifications")}
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
