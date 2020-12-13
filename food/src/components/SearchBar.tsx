import React, { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from '@expo/vector-icons';


interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  onSubmit: () => void;
}

export const SearchBar: FC<SearchBarProps> = (props) => {
  const { query, onQueryChange, onSubmit } = props;

  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={onQueryChange}
        value={query}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#e4e4e4",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
    margin: 15
  },
  icon: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 10
  },
  input: {
    flex: 1,
    fontSize: 18
  }
});