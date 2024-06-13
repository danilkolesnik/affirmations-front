import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider, useAuth } from "./provider/auth"; // Ensure this path is correct

import Auth from "./components/Auth/Auth";
import GreetingsScreen from "./components/Introduction/Greetings";
import GetNameScreen from "./components/Introduction/GetName";
import NotificationsScreen from "./components/Introduction/NotificationScreen";
import { supabase } from "./lib/supabase";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { user, login } = useAuth();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      login(session);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        login(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <View style={styles.screenWrapper}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {user ? (
            <>
              <Stack.Screen name="Greetings" component={GreetingsScreen} />
              <Stack.Screen name="GetName" component={GetNameScreen} />
              <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="Auth" component={Auth} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

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

export { AppNavigator };
