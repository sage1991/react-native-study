import React, { useCallback } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const navigateToComponents = useCallback(() => navigate("Components"), [ navigate ]);
  const navigateToList = useCallback(() => navigate("List"), [ navigate ]);
  const navigateToImages = useCallback(() => navigate("Images"), [ navigate ]);

  return (
    <View>
      <Text style={styles.text}>hi there!!</Text>
      <Button
        title="Go to Component Demo"
        onPress={navigateToComponents} />
      <Button
        title="Go to List Demo"
        onPress={navigateToList} />
      <Button
        title="Go to Image Demo"
        onPress={navigateToImages} />
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
