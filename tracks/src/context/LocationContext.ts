import { ActionBuilder, createDataContext } from "./createDataContext";
import { Dispatch } from "react";
import { LocationObject } from "expo-location";


type LocationActions = AddLocationAction;

interface AddLocationAction {
  type: LocationAction.ADD_LOCATION;
  payload: LocationObject;
}

enum LocationAction {
  ADD_LOCATION= "/LocationAction/ADD_LOCATION",
}

type LocationState = {
  recording: boolean;
  locations: LocationObject[];
  currentLocation: LocationObject | null;
};

const reducer = (state: LocationState, action: LocationActions) => {
  switch (action.type) {
    case LocationAction.ADD_LOCATION:
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
}

class LocationActionBuilder implements ActionBuilder<LocationActions> {
  constructor(public dispatch: Dispatch<LocationActions>) {}

  startRecording = () => {

  }

  stopRecording = () => {

  }

  addLocation = (location: LocationObject) => {
    console.log(location);
    this.dispatch({ type: LocationAction.ADD_LOCATION, payload: location });
  }
}

const { Context, Provider } = createDataContext(reducer, LocationActionBuilder, {
  recording: false,
  locations: [],
  currentLocation: null
});

export { Context as LocationContext, Provider as LocationProvider };