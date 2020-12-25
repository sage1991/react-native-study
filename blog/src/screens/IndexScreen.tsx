import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { NavigationStackScreenComponent } from "react-navigation-stack";


export const IndexScreen: NavigationStackScreenComponent = (props) => {
  const { navigation } = props;
  const { state, actions } = useContext(BlogContext);
  const { deletePost, fetchPost } = actions;

  useEffect(() => {
    fetchPost();
    const listener = navigation.addListener("didFocus", () => {
      fetchPost();
    });

    return () => listener.remove()
  }, [ fetchPost ]);

  const navigate = (id: number) => props.navigation.navigate("Show", { id });

  return (
    <>
      <Text>Index Screen</Text>
      <FlatList
        data={state}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={navigate.bind(null, item.id)}>
            <View style={styles.listItem}>
              <Text style={styles.postTitle}>{ item.title } - { item.id }</Text>
              <TouchableOpacity onPress={deletePost.bind(actions, item.id)}>
                <Feather name="trash" style={styles.trashIcon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )} />
    </>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather style={styles.headerRight} name="plus" />
      </TouchableOpacity>
    );
  }
});

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
  },
  headerRight: {
    marginRight: 10,
    fontSize: 30
  }
});