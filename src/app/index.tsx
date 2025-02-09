import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header/Header";
import ToDoCard from "../components/ToDo/ToDoCard";
import Button from "../components/AddTodo/Button";
import AddTodo from "../components/AddTodo/AddTodo";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type TTodoData = {
  title: string;
  time: string;
  isCompleted: boolean;
};

const Home = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<TTodoData[]>([]);
  const [todo, setTodo] = useState("");


  // Load todo from async Storage
  useEffect(() => {
    const loadTodo = async () =>{
      try {
        const savedTodo = await AsyncStorage.getItem("todos")
        if(savedTodo){
          setData(JSON.parse(savedTodo))
        }
      }catch (error){
        console.error("Failed to load", error)
      }
    }
    loadTodo()
  }, [])

  // save to to async storage
  const saveTodos = async (todos : TTodoData[]) => {
    try {
      await AsyncStorage.setItem("todos", JSON.stringify(todos))
    }catch(error){
      console.error("Failed to saved todo", error)
    }
  }

  const handleSubmit = () => {
    if (!todo) {
      Alert.alert("Please enter a todo");
      return;
    }
    let finalData = {
      title: todo,
      isCompleted: false,
      time: new Date().toLocaleTimeString(),
    };
    // console.log("debugging", finalData);
    const updatedTodos = [...data, finalData]

    setData(updatedTodos);
    saveTodos(updatedTodos) // save to local storage
    setOpen(false);
    setTodo("");
  };

  const handleDelete = (index: number) => {
    let tempData = [...data];
    tempData.splice(index, 1);
    setData(tempData);

    // another way to delete
    // setData(data.filter((_, i) => i !== index));

    // ?The callback function ( _, i ) => i !== index keeps all elements except the one at the given index.
    //? _ (underscore) is used when we don’t need the first argument (item) in .filter(), and i represents the index.
    //? If i !== index, the item remains in the array; otherwise, it’s removed.
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
            onDelete={() => handleDelete(index)}
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
