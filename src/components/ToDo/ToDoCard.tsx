import React from "react";
import { Text, View } from "react-native";
import { toDoStyles } from "./ToDoCard.styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ToDoCard = ({ isActive }: { isActive: boolean }) => {
  return (
    <View style={toDoStyles.container}>
      <View style={toDoStyles.todoContainer}>
        <MaterialIcons
          name={isActive ? "radio-button-checked" : "radio-button-unchecked"}
          size={24}
          color="black"
        />
        <Text style={toDoStyles.title}>To Do</Text>
      </View>
      <Text style={toDoStyles.time}>6.00 am</Text>
    </View>
  );
};

export default ToDoCard;
