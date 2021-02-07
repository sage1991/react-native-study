import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardSection = (props) => {
  const {container} = styles;
  return <View style={container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#dddddd',
    position: 'relative',
  },
});

export default CardSection;
