import React, { FC } from "react";
import { Button, Card, CardSection, Header, Input, Spinner } from "./common";
import { connect } from "react-redux";
import { StoreState } from "../store/reducers";
import { changeEmail, changePassword, login, LoginRequest } from "../store/actions";
import { StyleSheet, Text, View } from "react-native";


interface LoginFormProps {
  email: string;
  password: string;
  error: string;
  loading: boolean;
  changeEmail: (email: string) => void;
  changePassword: (password: string) => void;
  login: (request: LoginRequest) => void;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const {
    changeEmail,
    changePassword,
    login,
    email,
    password,
    error,
    loading
  } = props;

  const onLoginButtonPress = () => login({ email, password });

  return (
    <Card>
      <CardSection>
        <Input label="email"
               value={email}
               placeholder="email@domain.com"
               onChangeText={changeEmail} />
      </CardSection>
      <CardSection>
        <Input secureTextEntry
               label="password"
               value={password}
               placeholder="enter your password"
               onChangeText={changePassword} />
      </CardSection>
      <CardSection style={styles.buttonSection}>
        {
          error !== "" &&
          <View style={styles.errorWrap}>
            <Text style={styles.error}>{ error }</Text>
          </View>
        }
        {
          loading
          ? <Spinner />
          : <Button onPress={onLoginButtonPress}>
              Login
            </Button>
        }
      </CardSection>
    </Card>
  );
}


const mapStateToProps = (state: StoreState) => {
  const { auth } = state;
  return {
    email: auth.email,
    password: auth.password,
    error: auth.error,
    loading: auth.loading
  }
}
const actions = { changeEmail, changePassword, login };
const ConnectedLoginForm = connect(mapStateToProps, actions)(LoginForm);


const styles = StyleSheet.create({
  buttonSection: {
    flexDirection: "column",
  },
  errorWrap: {
    backgroundColor: "#ffffff"
  },
  error: {
    fontSize: 20,
    alignSelf: "center",
    color: "#ff0000",
    marginBottom: 5
  }
})



export { ConnectedLoginForm as LoginForm };
