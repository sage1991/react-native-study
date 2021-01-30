import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { SignupScreen } from "./src/screens/SignupScreen";
import { SigninScreen } from "./src/screens/SigninScreen";
import { TrackCreateScreen } from "./src/screens/TrackCreateScreen";
import { AccountScreen } from "./src/screens/AccountScreen";
import { TrackListScreen } from "./src/screens/TrackListScreen";
import { TrackDetailScreen } from "./src/screens/TrackDetailScreen";
import { AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import { IntroScreen } from "./src/screens/IntroScreen";
import { LocationProvider } from "./src/context/LocationContext";
import { TrackProvider } from "./src/context/TrackContext";
import { FontAwesome } from "@expo/vector-icons";



const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});

trackListFlow.navigationOptions = {
  title: "Tracks",
  tabBarIcon: <FontAwesome name="th-list" size={20} />
}

const switchNavigator = createSwitchNavigator({
  Intro: IntroScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => setNavigator(navigator!)}/>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
}
