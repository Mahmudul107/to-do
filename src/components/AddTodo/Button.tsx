import { TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { buttonStyles } from "./Button.styles";

const Button = ({ onPress }: { onPress: any }) => {
  return (
    <TouchableOpacity
      style={buttonStyles.button}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <MaterialIcons
        style={buttonStyles.icon}
        name="add"
        size={24}
        color="black"
      />
    </TouchableOpacity>
  );
};

export default Button;
