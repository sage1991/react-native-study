import { useContext } from "react";
import { TrackContext } from "../context/TrackContext";
import { LocationContext } from "../context/LocationContext";
import { navigate } from "../navigationRef";


export const useSaveTrack = () => {
  const { actions: { createTracks } } = useContext(TrackContext);
  const {
    state: { locations, name },
    actions: { clean }
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTracks(name, locations);
    clean();
    navigate("TrackList");
  }

  return [ saveTrack ];
}