import React, { FC, useContext } from "react";
import { StyleSheet } from "react-native";
import { NavigationFocusInjectedProps, SafeAreaView, withNavigationFocus } from "react-navigation";
import { Map } from "../components/Map";
import { Text } from "react-native-elements";
import { LocationContext } from "../context/LocationContext";
import { useLocation } from "../hooks/useLocation";
import { NavigationBottomTabScreenComponent } from "react-navigation-tabs";
import { TrackForm } from "../components/TrackForm";
import "../_mockLocation";


type TrackCreateScreenProps = NavigationBottomTabScreenComponent & NavigationFocusInjectedProps;

const TrackCreateScreen: FC<TrackCreateScreenProps> = (props) => {
  const { isFocused } = props;
  const { actions } = useContext(LocationContext);
  const [ error ] = useLocation(isFocused, actions.addLocation);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Track Create Screen</Text>
      <Map />
      { error && <Text>Please enable location services</Text> }
      <TrackForm />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

});

const TrackCreateScreenWithNavigationFocus = withNavigationFocus(TrackCreateScreen);
export { TrackCreateScreenWithNavigationFocus as TrackCreateScreen };