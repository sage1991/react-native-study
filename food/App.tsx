import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { SearchScreen } from "./src/screens/SearchScreen";
import { BusinessShowScreen } from "./src/screens/BusinessShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Show: BusinessShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);


export default createAppContainer(navigator);