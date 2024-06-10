import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Button,
  View,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function GreetingsScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/images/greetings-bg.png")}
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

function GetNameScreen({ navigation }) {
  const [value, onChangeText] = React.useState("Твоё имя");

  return (
    <ImageBackground
      source={require("../assets/images/getname-bg.png")}
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
                paddingLeft: "15px",
                color: "#B1B1B1",
                backgroundColor: "#161616",
                fontWeight: "400",
                height: "47px",
                marginTop: "20px",
                borderRadius: "20px",
                lineHeight: "47px",
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

function NotificationsScreen({ navigation }) {
  const [value, onChangeText] = React.useState("Твоё имя");

  return (
    <ImageBackground
      source={require("../assets/images/notifications-bg.png")}
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
                  }}
                >
                  Начало в
                </Text>

                <View stl>

                </View>
              </View>

              <View
                style={{
                  // padding: "5px",
                  color: "#B1B1B1",
                  backgroundColor: "#161616",
                  fontWeight: "400",
                  height: "55px",
                  marginTop: "10px",
                  borderRadius: "20px",
                  lineHeight: "56px",
                }}
              ></View>

              <View
                style={{
                  // padding: "5px",
                  color: "#B1B1B1",
                  backgroundColor: "#161616",
                  fontWeight: "400",
                  height: "55px",
                  marginTop: "10px",
                  borderRadius: "20px",
                  lineHeight: "56px",
                }}
              ></View>
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

// function GetNameScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function Notifications({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Button title="Notifications" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

export default function Introduction() {
  return (
    <View style={styles.screenWrapper}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Greetings" component={GreetingsScreen} />
          <Stack.Screen name="GetName" component={GetNameScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: "stretch",
    width: null,
  },
  screenWrapper: {
    height: "100%",
    width: "100%",
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "red",
  },
});
