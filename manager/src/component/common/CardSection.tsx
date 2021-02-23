import React, { FC } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';


interface CardSectionProps {
  style?: ViewStyle;
}

export const CardSection: FC<CardSectionProps> = ({ style, children }) => {
  const { container } = styles;
  return (
    <View style={{ ...container, ...style }}>
      { children }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: "center",
    flexDirection: 'row',
    borderColor: '#dddddd',
  },
});
