import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BlogContext } from "../context/BlogContext";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { EvilIcons } from "@expo/vector-icons";


export const ShowScreen: NavigationStackScreenComponent = (props) => {
  const { navigation } = props;
  const { state } = useContext(BlogContext);
  const post = state.find((_post) => _post.id === navigation.getParam("id"));

  return (
    <View>
      <Text>{ post?.title }</Text>
      <Text>{ post?.content }</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("Edit", { id: navigation.getParam("id") })}>
          <EvilIcons style={styles.headerRight} name="pencil" size={30} />
        </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 10,
    fontSize: 30
  }
})