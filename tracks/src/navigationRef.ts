import { NavigationContainerComponent, NavigationActions, NavigationParams } from "react-navigation";

let navigator: NavigationContainerComponent;

export const setNavigator = (_navigator: NavigationContainerComponent) => navigator = _navigator;

export const navigate = (route: string, params?: NavigationParams) => {
  navigator.dispatch(NavigationActions.navigate({
    routeName: route,
    params: params
  }));
}