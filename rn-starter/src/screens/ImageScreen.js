import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ImageDetail } from "../components/ImageDetail";
import beachImage from "../../assets/beach.jpg";
import forestImage from "../../assets/forest.jpg";
import mountainImage from "../../assets/mountain.jpg";


export const ImageScreen = () => {
  return (
    <View>
      <Text>This is Image Screen</Text>
      <ImageDetail title="forest" image={forestImage} score={2} />
      <ImageDetail title="beach" image={beachImage} score={5} />
      <ImageDetail title="mountain" image={mountainImage} score={4} />
    </View>
  )
}

const style = StyleSheet.create({});