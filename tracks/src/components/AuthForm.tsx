import React, { FC, useState } from "react";
import { StyleSheet } from "react-native";
import { Spacer } from "./Spacer";
import { Button, Input, Text } from "react-native-elements";


interface AuthFormProps {
  header: string;
  submitText: string;
  onSubmit: (email: string, password: string) => void;
  error?: string;
}


export const AuthForm: FC<AuthFormProps> = (props) => {
  const { header, submitText, onSubmit, error } = props;
  const [ email, setEmail ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");
  const onPress = () => onSubmit(email, password);

  return (
    <>
      <Spacer>
        <Text h3>{ header }</Text>
      </Spacer>
      <Input
        keyboardType="email-address"
        label="Email"
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false} />
      <Input
        label="Password"
        secureTextEntry
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false} />
      { error ? <Text style={styles.error}>{ error }</Text> : null }
      <Spacer>
        <Button title={submitText} onPress={onPress} />
      </Spacer>
    </>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "#ff4800",
    fontSize: 16,
    paddingHorizontal: 10,
  },
});