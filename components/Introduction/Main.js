import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Button,
  View,
  Text,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GreetingsScreen from "./Greetings";
import GetNameScreen from "./GetName";
import NotificationsScreen from "./NotificationScreen";

const Stack = createNativeStackNavigator();

export default function Main() {
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
