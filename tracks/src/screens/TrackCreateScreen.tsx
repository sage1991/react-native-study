import React, { FC, useCallback, useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Map } from "../components/Map";
import { Text } from "react-native-elements";
import { LocationContext } from "../context/LocationContext";
import { useLocation } from "../hooks/useLocation";
import { NavigationBottomTabScreenComponent } from "react-navigation-tabs";
import { TrackForm } from "../components/TrackForm";
import { LocationObject } from "expo-location";
import { FontAwesome } from "@expo/vector-icons";
import "../_mockLocation";



export const TrackCreateScreen: NavigationBottomTabScreenComponent = (props) => {
  const { navigation } = props;
  const { actions, state: { recording } } = useContext(LocationContext);
  const onPositionChange = useCallback((location: LocationObject) => {
    actions.addLocation(location, recording);
  }, [ recording ]);

  const [ error ] = useLocation(navigation.isFocused() || recording, onPositionChange);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Track Create Screen</Text>
      <Map />
      { error && <Text>Please enable location services</Text> }
      <TrackForm />
    </SafeAreaView>
  );
}

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />
}

const styles = StyleSheet.create({

});