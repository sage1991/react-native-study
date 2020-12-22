import React, { FC, useState } from "react";
import { Button, NativeSyntheticEvent, NativeTouchEvent, StyleSheet, Text, TextInput, View } from "react-native";


interface BlogPostFormProps {
  title?: string;
  content?: string;
  onSubmit: (title: string, content: string) => void;
}

export const BlogPostForm: FC<BlogPostFormProps> = (props) => {
  const { onSubmit } = props;
  const [ title, setTitle ] = useState(props.title ?? "");
  const [ content, setContent ] = useState(props.content ?? "");

  const onChangeTitle = (text: string) => setTitle(text);
  const onChangeContent = (text: string) => setContent(text);

  const onPress = () => onSubmit(title, content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={onChangeTitle} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={onChangeContent} />
      <Button title="Save Blog Post" onPress={onPress} />
    </View>
  )
}

// BlogPostForm.defaultProps = {
//   title: "",
//   content: ""
// }

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