import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import React from "react";

const AddTodo = ({isActive} : {isActive:boolean}) => {
  return (
    <Modal isVisible={isActive} style={styles.modal}>
      <View style={styles.container}>
        <Text style={styles.title}> Add Todo</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Todo"
        ></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
  container: {
    padding: 20,
    backgroundColor: "white",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    gap: 20,
  },
  title: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    padding: 10,
    color: "black",
    borderColor: "black",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText:{
    textAlign: "center",
    fontSize: 18,
    fontWeight: 700,
    color: "white",
    textTransform: "capitalize",
  }
});

export default AddTodo;
