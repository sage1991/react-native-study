import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";


export const TrackListScreen: NavigationStackScreenComponent = (props) => {
  const { navigation } = props;
  return (
    <>
      <Text>Track List Screen</Text>
      <Button title="go to track detail" onPress={() => navigation.navigate("TrackDetail")} />
    </>
  )
}

const styles = StyleSheet.create({

});