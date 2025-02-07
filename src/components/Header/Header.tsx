import React from "react";
import { StatusBar, Text, View } from "react-native";
import { headerStyles } from "./Header.styles";

const Header = () => {
  return (
    <View style={headerStyles.container}>
        <StatusBar backgroundColor={"blue"} barStyle={"light-content"}/>
      <Text style={headerStyles.title}>My To Do</Text>
    </View>
  );
};

export default Header;
