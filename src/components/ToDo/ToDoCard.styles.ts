import { StyleSheet } from "react-native";

export const toDoStyles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(32,31,31, 0.2)",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
  },
  todoContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  time: {
    fontSize: 12,
    fontWeight: 400,
    color: "black",
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    color: "black",
  },
  activeTitles: {
    fontSize: 18,
    fontWeight: 300,
    color: "#7A7777",
    textDecorationLine: "line-through",
  },
  // status: {
  //   fontSize: 14,
  //   color: isCompleted ? "green" : "red", // Dynamic color based on status
  // },
});
