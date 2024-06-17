import React, { useEffect, useState } from "react";
import { ImageBackground, View, Text, Pressable } from "react-native";
import axios from "axios";

export default function ChooseTopics({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // TODO: refactor to useQuery, create function similar useSubscription
  const getTopics = () => {
    const url = `https://sigma.slan.studio/api/themes`;
    axios
      .get(url, null, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res.data.docs);
        setData(res.data.docs);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/images/choosetopics-bg.png")}
      style={{ flex: 1, width: null, height: null }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            padding: 20,
            paddingBottom: 30,
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <>
              <Text
                style={{ color: "#FFF", fontSize: "32px", fontWeight: 600 }}
              >
                Выбери свою тему:
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 18,
                  marginTop: 30,
                }}
              >
                {data &&
                  data.map((item) => {
                    return (
                      <Pressable
                        key={item.id}
                        style={{
                          backgroundColor: "#131313",
                          height: 83,
                          borderRadius: 20,
                          position: "relative",
                        }}
                        onPress={() => navigation.navigate("Home")}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://sigma.slan.studio" +
                              item.Background?.url,
                          }}
                          style={{
                            opacity: "0.1",
                            height: "100%",
                          }}
                        ></ImageBackground>
                        <Text
                          style={{
                            lineHeight: 83,
                            marginLeft: 25,
                            color: "#FFF",
                            fontSize: 16,
                            fontWeight: 600,
                            position: "absolute",
                          }}
                        >
                          {item.topicName}
                        </Text>
                      </Pressable>
                    );
                  })}
              </View>
            </>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}
