import React, { useContext, useEffect } from "react";
import { NavigationSwitchScreenComponent } from "react-navigation";
import { AuthContext } from "../context/AuthContext";


export const IntroScreen: NavigationSwitchScreenComponent = (props) => {
  const { actions } = useContext(AuthContext);
  useEffect(() => { actions.tryLocalSignin(); }, []);
  return null;
}