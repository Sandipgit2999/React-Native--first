import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View>
      <Text style={styles.textcolor}>Sandip sur</Text>
    </View>
  )
};

export default Home;

const styles = StyleSheet.create({
  textcolor: {
    fontSize: 20,
    color: "red",
  },
});
