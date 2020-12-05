import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


export const ColorControl = ({ color, increase, decrease }) => {
  return (
    <View>
      <Text>{ color }</Text>
      <Button title="increase" onPress={increase} />
      <Button title="decrease" onPress={decrease} />
    </View>
  );
}
