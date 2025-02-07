import { StyleSheet } from "react-native";

export const toDoStyles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(32,31,31, 0.2)",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    borderRadius: 10,
  },
  todoContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    color: "black",
  },
  time: {
    fontSize: 12,
    fontWeight: 400,
    color: "black",
  },

  activeTitles: {
    fontSize: 18,
    fontWeight: 300,
    color: "black",
    textDecorationLine: "line-through",
  },
});
