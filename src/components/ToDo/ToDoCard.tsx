import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { toDoStyles } from "./ToDoCard.styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ToDoCard = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <TouchableOpacity
      style={toDoStyles.container}
      activeOpacity={0.8}
      onPress={() => setIsActive(!isActive)}
    >
      <View style={toDoStyles.todoContainer}>
        <MaterialIcons
          name={isActive ? "radio-button-checked" : "radio-button-unchecked"}
          size={24}
          color="black"
        />
        <Text style={[isActive ? toDoStyles.activeTitles : toDoStyles.title]}>
          To Do
        </Text>
      </View>
      <Text style={toDoStyles.time}>6.00 am</Text>
    </TouchableOpacity>
  );
};

export default ToDoCard;
