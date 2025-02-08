import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header/Header";
import ToDoCard from "../components/ToDo/ToDoCard";
import Button from "../components/AddTodo/Button";
import AddTodo from "../components/AddTodo/AddTodo";

export type TTodoData = {
  title: string;
  time: string;
  isCompleted: boolean;
};

const Home = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<TTodoData[]>([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = () => {
    if (!todo) {
      Alert.alert("Please enter a todo");
      return
    }
    let finalData = {
      title: todo,
      isCompleted: false,
      time: new Date().toLocaleTimeString(),
    };
    console.log("debugging", finalData);
    setData([...data, finalData]);
    setOpen(false);
    setTodo("");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={{ padding: 20, gap: 2 }}>
        {data.map((item, index) => (
          <ToDoCard
            key={index}
            title={item.title}
            time={item.time}
            isCompleted={item.isCompleted}
          />
        ))}
      </View>
      <AddTodo
        onClose={() => setOpen(false)}
        isActive={open}
        value={todo}
        onChangeText={(e: any) => setTodo(e)}
        handleSubmit={handleSubmit}
      />
      <Button onPress={() => setOpen(true)} />
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
