import React, { useContext } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { BlogContext, Post } from "../context/BlogContext";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { BlogPostForm } from "../components/BlogPostForm";



export const CreateScreen: NavigationStackScreenComponent = (props) => {
  const { navigation } = props;
  const { actions } = useContext(BlogContext);

  const addPost = (title: string, content: string) => {
    actions.addPost(title, content, () => navigation.navigate("Index"));
  }

  return <BlogPostForm onSubmit={addPost} />
}

const styles = StyleSheet.create({

});