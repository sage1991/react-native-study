import React, { FC } from "react";
import { StyleSheet, View } from "react-native";


export const Spacer: FC = ({ children }) => {
  return (
    <View style={styles.spacer}>
      { children}
    </View>
  )
}

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  }
});