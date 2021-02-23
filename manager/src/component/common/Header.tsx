import React, { FC } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';


interface HeaderProps {
  children: string;
}

export const Header: FC = (props) => {
  const { view, header } = styles;
  return (
    <View style={view}>
      <SafeAreaView>
        <Text style={header}>{props.children}</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingBottom: 15,
  },
});
