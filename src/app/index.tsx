import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header/Header";
import ToDoCard from "../components/ToDo/ToDoCard";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ padding: 20, gap: 2 }}>
        <ToDoCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default Home;
