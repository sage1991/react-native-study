import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";


export const TextScreen = () => {
  const [ name, setName ] = useState("");
  const [ valid, setValid ] = useState(false);

  const onTextChange = (text) => {
    console.log(text);
    setName(text);
    setValid(text.length >= 2);
  }

  return (
    <View>
      <Text>Enter Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={onTextChange}
      />
      <Text>{ `My Name is ${name}` }</Text>
      { !valid && <Text style={styles.error}>name must be 2 characters.</Text> }
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#000000",
    borderWidth: 1,
    fontSize: 15
  },
  error: {
    color: "#ff4800"
  }
})