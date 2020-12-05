import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";


export const ColorScreen = () => {
  const [ colors, setColors ] = useState([]);
  const addColor = () => setColors((prev) => [ ...prev, generateRgb() ]);

  return (
    <View>
      <Button title="Add a color" onPress={addColor} />
      <FlatList
        data={colors}
        renderItem={({ item }) => <View style={{ ...style.colorBox, backgroundColor: item }} />}
        keyExtractor={item => item} />
    </View>
  )
}

const generateRgb = () => {
  const colors = [];
  while (colors.length < 3) {
    colors.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${colors.join(", ")})`;
}

const style = StyleSheet.create({
  colorBox: {
    height: 100,
    width: 100
  }
});