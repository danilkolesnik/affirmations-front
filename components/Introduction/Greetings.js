import React from "react";
import { ImageBackground, View, Text, Pressable } from "react-native";

export default function GreetingsScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/images/greetings-bg.png")}
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
              Здравствуй, путник!
            </Text>
            <Text
              style={{
                color: "#C9C9C9",
                fontSize: "16px",
                fontWeight: 600,
                marginTop: "20px",
              }}
            >
              Готов погрузиться в мир аффирмаций и стать лучшей версией себя?
            </Text>
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
