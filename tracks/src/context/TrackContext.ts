import { ActionBuilder, createDataContext } from "./createDataContext";
import { Dispatch } from "react";
import { LocationObject } from "expo-location";
import { tracker } from "../api/tracker";


type TrackAction = FetchTrackAction;

interface FetchTrackAction {
  type: ActionType.FETCH_TRACK,
  payload: Track[]
}

enum ActionType {
  FETCH_TRACK,
}


type TrackState = Track[];

interface Track {
  _id: string;
  name: string;
  userId: string;
  locations: LocationObject[];
}


const reducer = (state: TrackState, action: TrackAction) => {
  switch (action.type) {
    case ActionType.FETCH_TRACK:
      return action.payload;
    default:
      return state;
  }
}

class TrackActionBuilder implements ActionBuilder<TrackAction> {
  constructor(public dispatch: Dispatch<TrackAction>) {}

  fetchTracks = async () => {
    const { data } = await tracker.get("/tracks");
    this.dispatch({ type: ActionType.FETCH_TRACK, payload: data });
  }

  createTracks = async (name: string, locations: LocationObject[]) => {
    console.log(name, locations.length);
    await tracker.post("/tracks", { name, locations });
  }


}


const { Context, Provider } = createDataContext(reducer, TrackActionBuilder, []);
export { Context as TrackContext, Provider as TrackProvider };