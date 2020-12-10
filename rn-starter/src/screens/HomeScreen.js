import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  const navigateTo = (route) => () => navigate(route);

  return (
    <View>
      <Text style={styles.text}>hi there!!</Text>
      <Button
        title="Go to Component Demo"
        onPress={navigateTo("Components")} />
      <Button
        title="Go to List Demo"
        onPress={navigateTo("List")} />
      <Button
        title="Go to Image Demo"
        onPress={navigateTo("Images")} />
      <Button
        title="Go to Counter Demo"
        onPress={navigateTo("Counter")} />
      <Button
        title="Go to Color Demo"
        onPress={navigateTo("Color")} />
      <Button
        title="Go to Square Demo"
        onPress={navigateTo("Square")} />
      <Button
        title="Go to Text Demo"
        onPress={navigateTo("Text")} />
      {/*<TouchableOpacity onPress={onTouchableOpacityPress}>*/}
      {/*  <Text>Go to List Demo</Text>*/}
      {/*</TouchableOpacity>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
