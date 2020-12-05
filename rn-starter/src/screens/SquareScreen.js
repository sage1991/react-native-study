import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ColorControl } from "../components/ColorControl";

const INCREMENT = 5;

const reducer = (state, action) => {
  let value;
  switch (action.type) {
    case "increase":
      value = state[action.color] + INCREMENT <= 255
              ? state[action.color] + INCREMENT
              : 255;
      return { ...state, [action.color]: value  };
    case "decrease":
      value = state[action.color] - INCREMENT >= 0
              ? state[action.color] - INCREMENT
              : 0;
      return { ...state, [action.color]: value  };
    default:
      return state;
  }
}

export const SquareScreen = () => {
  const [ state, dispatch ] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  const increaseRed = () => dispatch({ type: "increase", color: "red" });
  const decreaseRed = () => dispatch({ type: "decrease", color: "red" });
  const increaseGreen = () => dispatch({ type: "increase", color: "green" });
  const decreaseGreen = () => dispatch({ type: "decrease", color: "green" });
  const increaseBlue = () => dispatch({ type: "increase", color: "blue" });
  const decreaseBlue = () => dispatch({ type: "decrease", color: "blue" });

  return (
    <View>
      <Text>Square Screen</Text>
      <ColorControl color="red" increase={increaseRed} decrease={decreaseRed} />
      <ColorControl color="green" increase={increaseGreen} decrease={decreaseGreen} />
      <ColorControl color="blue" increase={increaseBlue} decrease={decreaseBlue} />
      <View style={{ ...style.square, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
      <Text>{ `rgb(${state.red}, ${state.green}, ${state.blue})` }</Text>
    </View>
  )
}

const style = StyleSheet.create({
  square: { width: 100, height: 100 }
})