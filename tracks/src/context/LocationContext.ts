import { ActionBuilder, createDataContext } from "./createDataContext";
import { Dispatch } from "react";
import { LocationObject } from "expo-location";


type LocationActions = SetAction | AddAction | StartRecordingAction
                      | StopRecordingAction | ChangeNameAction | CleanAction;


interface SetAction {
  type: LocationAction.SET_LOCATION;
  payload: LocationObject;
}

interface AddAction {
  type: LocationAction.ADD_LOCATION;
  payload: LocationObject;
}

interface StartRecordingAction {
  type: LocationAction.START_RECORDING;
}

interface StopRecordingAction {
  type: LocationAction.STOP_RECORDING;
}

interface ChangeNameAction {
  type: LocationAction.CHANGE_NAME;
  payload: string;
}

interface CleanAction {
  type: LocationAction.CLEAN
}


enum LocationAction {
  SET_LOCATION = "/LocationAction/SET_LOCATION",
  ADD_LOCATION = "/LocationAction/ADD_LOCATION",
  START_RECORDING = "/LocationAction/START_RECORDING",
  STOP_RECORDING = "/LocationAction/STOP_RECORDING",
  CHANGE_NAME = "/LocationAction/CHANGE_NAME",
  CLEAN = "/LocationAction/CLEAN",
}


type LocationState = {
  recording: boolean;
  locations: LocationObject[];
  currentLocation: LocationObject | null;
  name: string;
};


const reducer = (state: LocationState, action: LocationActions) => {
  switch (action.type) {
    case LocationAction.SET_LOCATION:
      return { ...state, currentLocation: action.payload };
    case LocationAction.ADD_LOCATION:
      return { ...state, locations: [ ...state.locations, action.payload ] };
    case LocationAction.START_RECORDING:
      return { ...state, recording: true };
    case LocationAction.STOP_RECORDING:
      return { ...state, recording: false };
    case LocationAction.CHANGE_NAME:
      return { ...state, name: action.payload };
    case LocationAction.CLEAN:
      return { ...state, name: "", locations: [] }
    default:
      return state;
  }
}

class LocationActionBuilder implements ActionBuilder<LocationActions> {
  constructor(public dispatch: Dispatch<LocationActions>) {}

  changeName = (name: string) => this.dispatch({ type: LocationAction.CHANGE_NAME, payload: name });

  startRecording = () => this.dispatch({ type: LocationAction.START_RECORDING });

  stopRecording = () => this.dispatch({ type: LocationAction.STOP_RECORDING });

  addLocation = (location: LocationObject, recording?: boolean) => {
    this.dispatch({ type: LocationAction.SET_LOCATION, payload: location });

    if (recording) {
      this.dispatch({ type: LocationAction.ADD_LOCATION, payload: location });
    }
  }

  clean = () => this.dispatch({ type: LocationAction.CLEAN });
}

const { Context, Provider } = createDataContext(reducer, LocationActionBuilder, {
  recording: false,
  locations: [],
  currentLocation: null,
  name: ""
});

export { Context as LocationContext, Provider as LocationProvider };