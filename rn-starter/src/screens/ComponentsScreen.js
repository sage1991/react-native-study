import React from "react";
import { Text, StyleSheet, View } from "react-native";


const ComponentsScreen = () => {
  const name = "Kim"

  return (
    <View>
      <Text style={styles.headerStyle}>Getting started with react native!</Text>
      <Text style={styles.subHeaderStyle}>{ `My Name is ${name}.` }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export { ComponentsScreen };