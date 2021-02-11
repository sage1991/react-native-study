// import libraries for making a component
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// make a component
export const Header = (props) => {
  const {view, header} = styles;
  return (
    <View style={view}>
      <Text style={header}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  header: {
    fontSize: 20,
  },
});
