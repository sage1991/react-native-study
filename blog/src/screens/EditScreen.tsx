import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { BlogContext, Post } from "../context/BlogContext";
import { BlogPostForm } from "../components/BlogPostForm";


export const EditScreen: NavigationStackScreenComponent = (props) => {
  const { navigation } = props;
  const { state, actions } = useContext(BlogContext);
  const post = state.find((_post) => _post.id === navigation.getParam("id"))!;

  const updatePost = (title: string, content: string) => {
    const _post = { ...post, title: title, content: content };
    actions.updatePost(_post, () => navigation.pop());
  }

  return <BlogPostForm title={post.title} content={post.content} onSubmit={updatePost} />
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