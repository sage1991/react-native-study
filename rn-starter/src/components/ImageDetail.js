import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


export const ImageDetail = ({ title, image, score }) => {
  return (
    <View>
      <Image source={image} />
      <Text>{ title }</Text>
      <Text>{ `image score - ${score}` }</Text>
    </View>
  );
}

const style = StyleSheet.create({});