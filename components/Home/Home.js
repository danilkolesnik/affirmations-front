import React from "react";
import { View, Text, Image, FlatList } from "react-native";

export default function Home({ navigation }) {
  const data = [
    {
      quote:
        "Многие жалуются на свою внешность, но на мозги не жалуется никто.",
    },
    {
      quote: "Превосходство — это когда есть на что насрать, и есть чем.",
    },
    {
      quote: "Есть такая штука как «Двигаться дальше». Попробуйте, поможет.",
    },
    {
      quote:
        "Теория – это когда вы знаете все, но ничего не работает. Практика – это когда все работает, но никто не знает почему. Мы совмещаем теорию и практику – ничего не работает и никто не знает почему!",
    },
  ];
  return (
    <View
      style={{
        height: "100%",
        padding: 12,
        paddingTop: 80,
        backgroundColor: "#1B1B1B",
      }}
    >
      <Image
        source={require("../../assets/images/giga-round.png")}
        style={{ width: 80, height: 80, alignSelf: "center" }}
      ></Image>
      <Image
        source={require("../../assets/icons/quote.png")}
        style={{
          width: 45,
          height: 45,
          alignSelf: "center",
          marginRight: "20%",
        }}
      ></Image>
      {/* <Text>Home</Text> */}
      <FlatList data={data}></FlatList>
    </View>
  );
}
