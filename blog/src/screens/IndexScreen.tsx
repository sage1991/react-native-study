import React, { FC, useContext } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

export const IndexScreen: FC = () => {
  const { state, actions } = useContext(BlogContext);
  const { addPost, deletePost } = actions;

  const _addPost = () => {
    const post = { title: `Post #${state.length + 1}`, id: Date.now() };
    addPost(post);
  }

  return (
    <>
      <Text>Index Screen</Text>
      <Button title="add post" onPress={_addPost} />
      <FlatList
        data={state}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.postTitle}>{ item.title } - { item.id }</Text>
            <TouchableOpacity onPress={deletePost.bind(actions, item.id)}>
              <Feather name="trash" style={styles.trashIcon} />
            </TouchableOpacity>
          </View>
        )} />
    </>
  )
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#cccccc"
  },
  postTitle: {
    fontSize: 18
  },
  trashIcon: {
    fontSize: 18
  }
});