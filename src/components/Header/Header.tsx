import React from "react";
import { StatusBar, Text, View } from "react-native";
import { styles } from "./Header.styles";

const Header = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={"blue"}/>
      <Text style={styles.title}>My To Do</Text>
    </View>
  );
};

export default Header;
