import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  SafeAreaView,
} from "react-native";
import { supabase } from "../../lib/supabase";
import { Button, Input } from "@rneui/themed";
import { AppleAuth } from "./AppleAuth";
import { adapty } from "react-native-adapty";
import { createPaywallView } from "@adapty/react-native-ui";
import SubscriptionScreen from "../Common/subscriptionButton";
import SubscriptionNotifyScreen from "../Common/subscriptionNotify";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/giga-round.png")}
        style={{ width: 80, height: 80, alignSelf: "center" }}
      ></Image>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          style={{ color: "#FFF", paddingLeft: 9 }}
          label="Электронная почта"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          style={{ color: "#FFF", paddingLeft: 9 }}
          label="Пароль"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Пароль"
          autoCapitalize={"none"}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Pressable
          style={{ backgroundColor: "#000", height: 50, borderRadius: 15 }}
          title="Войти"
          disabled={loading}
          onPress={() => signInWithEmail()}
        >
          <Text
            style={{
              color: "#FFF",
              textAlign: "center",
              fontSize: 18,
              fontWeight: 600,
              lineHeight: 51,
            }}
          >
            Войти
          </Text>
        </Pressable>
      </View>
      <View style={styles.verticallySpaced}>
        <Pressable
          style={{ backgroundColor: "#000", height: 50, borderRadius: 15 }}
          title="Зарегистрироваться"
          disabled={loading}
          onPress={() => signUpWithEmail()}
        >
          <Text
            style={{
              color: "#FFF",
              textAlign: "center",
              fontSize: 18,
              fontWeight: 600,
              lineHeight: 51,
            }}
          >
            Зарегистрироваться
          </Text>
        </Pressable>
        <SafeAreaView style={{ flex: 1 }}>
          {/* TODO: move this components */}
          <SubscriptionScreen customerId={'5'} />
          <SubscriptionNotifyScreen customerId={'5'} />
        </SafeAreaView>
      </View>
      <Text
        style={{
          textAlign: "center",
          color: "#FFF",
          padding: 10,
          fontWeight: 600,
        }}
      >
        Или
      </Text>
      <View
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <AppleAuth />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 12,
    paddingTop: 80,
    backgroundColor: "#1B1B1B",
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
    overflow: "hidden",
  },
});
