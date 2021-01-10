import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { AuthContext } from "../context/AuthContext";
import { AuthForm } from "../components/AuthForm";
import { NavLink } from "../components/NavLink";
import { NavigationEvents } from "react-navigation";


export const SignupScreen: NavigationStackScreenComponent = (props) => {
  const { state, actions } = useContext(AuthContext);
  const onSignup = (email: string, password: string) => actions.signup({ email, password });

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={actions.clearError} />
      <AuthForm
        header="Sign Up for Tracker"
        submitText="Sign Up"
        onSubmit={onSignup}
        error={state.error} />
      <NavLink route="Signin" text="Already have an account? Sign in instead!" />
    </View>
  )
}

SignupScreen.navigationOptions = () => {
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