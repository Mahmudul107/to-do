import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { toDoStyles } from "./ToDoCard.styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TTodoData } from "@/src/app";

const ToDoCard = ({
  title,
  time,
  isCompleted,
  onDelete,
}: TTodoData & { onDelete: () => void }) => {
  const [isActive, setIsActive] = useState(isCompleted);

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
          color={isActive ? "#7A7777" : "black"}
        />
        <Text style={[isActive ? toDoStyles.activeTitles : toDoStyles.title]}>
          {title}
        </Text>
      </View>
      <Text style={[toDoStyles.time, isActive && { color: "#7A7777" }]}>
        {time?.toString()}
      </Text>
      <TouchableOpacity onPress={onDelete}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ToDoCard;
