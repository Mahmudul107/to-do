import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header/Header";
import ToDoCard from "../components/ToDo/ToDoCard";
import Button from "../components/AddTodo/Button";
import AddTodo from "../components/AddTodo/AddTodo";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ padding: 20, gap: 2 }}>
        <ToDoCard />
      </View>
      <AddTodo isActive={open}/>
      <Button onPress={()=> setOpen(true)}/>
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
