import { StyleSheet, View } from "react-native";
import Introduction from "./components/Introduction";

export default function App() {
  return (
    <View style={styles.container}>
      <Introduction />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
