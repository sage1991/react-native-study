import React, { FC } from "react";
import { Spacer } from "./Spacer";
import { Text } from "react-native-elements";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationScreenProp, withNavigation } from "react-navigation";

interface NavLinkProps {
  navigation: NavigationScreenProp<any>;
  text: string;
  route: string;
}

const NavLink: FC<NavLinkProps> = (props) => {
  const { navigation, route, text } = props;
  return (
    <TouchableOpacity onPress={() => navigation.navigate(route)}>
      <Spacer>
        <Text style={styles.link}>{ text }</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 14
  },
});

const NavLinkWithNavigation = withNavigation(NavLink);
export { NavLinkWithNavigation as NavLink };