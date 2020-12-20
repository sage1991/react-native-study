import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { BlogContext } from "../context/BlogContext";


export const EditScreen: NavigationStackScreenComponent = (props) => {
  const { navigation } = props;
  const { state, actions } = useContext(BlogContext);
  const post = state.find((_post) => _post.id === navigation.getParam("id"))!;
  const [ title, setTitle ] = useState(post.title);
  const [ content, setContent ] = useState(post.content);

  const onChangeTitle = (text: string) => setTitle(text);
  const onChangeContent = (text: string) => setContent(text);

  const updatePost = () => {
    const _post = { ...post, title: title, content: content };
    actions.updatePost(_post);
  }

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={onChangeTitle} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={onChangeContent} />
      <Button title="Edit Blog Post" onPress={updatePost} />
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#000000",
    marginBottom: 15,
    padding: 5,
    paddingHorizontal: 10,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});