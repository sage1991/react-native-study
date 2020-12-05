import React, { useState } from "react";
import { View,  Text, StyleSheet, Button} from "react-native";


export const CounterScreen = () => {
  const [ counter, setCounter ] = useState(0);
  const increase = () => setCounter((prev) => prev + 1);
  const decrease = () => setCounter((prev) => prev - 1);

  return (
    <View>
      <Button title="increase" onPress={increase} />
      <Button title="decrease" onPress={decrease} />
      <Text>{ `current count: ${counter}` }</Text>
    </View>
  );
}