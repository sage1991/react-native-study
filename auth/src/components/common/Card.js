import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Card = (props) => {
  const { container } = styles;
  return <View style={container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#dddddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginHorizontal: 5,
    marginTop: 10,
  },
});
