import React from "react";
import { Text, View, StyleSheet } from "react-native";


export const BoxScreen = () => {
  return (
    <View>
      <View style={styles.view}>
        <Text style={{ ...styles.text, ...styles.textOne }}>Child #1</Text>
        <Text style={{ ...styles.text, ...styles.textTwo }}>Child #2</Text>
        <Text style={{ ...styles.text, ...styles.textThree }}>Child #3</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.red} />
        <View style={styles.green} />
        <View style={styles.purple} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    borderWidth: 3,
    borderColor: "#000000",
    height: 200,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  text: {
    borderWidth: 3,
    borderColor: "#ff0000"
  },
  textOne: {
    flex: 1
  },
  textTwo: {
    flex: 2,
    ...StyleSheet.absoluteFillObject
  },
  textThree: {
    flex: 3,
    alignSelf: "center"
  },
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: 200,
    borderWidth: 1,
  },
  red: {
    height: 100,
    width: 100,
    backgroundColor: "red"
  },
  green: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    alignSelf: "flex-end"
  },
  purple: {
    height: 100,
    width: 100,
    backgroundColor: "purple"
  }
});