import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


interface ButtonProps {
  onPress: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const { button, text } = styles;
  return (
    <TouchableOpacity style={button} onPress={props.onPress}>
      <Text style={text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginHorizontal: 5,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
  },
});
