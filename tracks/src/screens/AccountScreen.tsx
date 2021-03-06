import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationBottomTabScreenComponent } from "react-navigation-tabs";
import { AuthContext } from "../context/AuthContext";
import { Button } from "react-native-elements";
import { Spacer } from "../components/Spacer";
import { SafeAreaView } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";


export const AccountScreen: NavigationBottomTabScreenComponent = (props) => {
  const { actions } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>Account Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={actions.signout} />
      </Spacer>
    </SafeAreaView>
  );
}


AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} />
}

const styles = StyleSheet.create({

});