import React, { FC } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';


interface SpinnerProps {
  size?: number | 'small' | 'large';
}

export const Spinner: FC<SpinnerProps> = (props) => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size={props.size ?? 'large'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
