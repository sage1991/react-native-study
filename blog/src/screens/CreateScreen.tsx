import React, { FC, useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { BlogContext, Post } from "../context/BlogContext";
import { NavigationStackScreenComponent } from "react-navigation-stack";



export const CreateScreen: NavigationStackScreenComponent = (props) => {
  const { navigation } = props;
  const { actions } = useContext(BlogContext);
  const [ title, setTitle ] = useState("");
  const [ content, setContent ] = useState("");

  const onChangeTitle = (text: string) => setTitle(text);
  const onChangeContent = (text: string) => setContent(text);

  const addPost = () => {
    const post: Post = { id: Date.now(), title: title, content: content };
    actions.addPost(post, () => navigation.navigate("Index"));
  }

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={onChangeTitle} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={onChangeContent} />
      <Button title="Add Blog Post" onPress={addPost} />
    </View>
  )
}

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
})