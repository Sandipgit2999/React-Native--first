import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Home from "./src/Components/Home";

export default function App() {
  return (
    <View>
      <Text>hello sandip!</Text>
      <Image
        style={styles.Imagestyle}
        source={{
          uri: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        }}
      />

      <StatusBar style="auto" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Imagestyle: {
    width: 200,
    height: 200,
  },
});
