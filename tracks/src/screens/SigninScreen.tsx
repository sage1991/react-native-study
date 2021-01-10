import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { AuthForm } from "../components/AuthForm";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "../components/NavLink";
import { NavigationEvents } from "react-navigation";


export const SigninScreen: NavigationStackScreenComponent = (props) => {
  const { state, actions } = useContext(AuthContext);
  const onSignin = (email: string, password: string) => actions.signin({ email, password });

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={actions.clearError}/>
      <AuthForm
        header="Sign In for Tracker"
        submitText="Sign In"
        onSubmit={onSignin}
        error={state.error} />
      <NavLink route="Signup" text="Don't have an account? Sign up instead!" />
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return { header: () => false }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    marginBottom: 200
  },
});