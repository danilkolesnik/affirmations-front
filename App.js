import { StyleSheet, View } from "react-native";
import Main from "./components/Introduction/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
