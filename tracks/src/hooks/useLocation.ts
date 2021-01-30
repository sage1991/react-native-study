import { useEffect, useState } from "react";
import {
  Accuracy,
  getCurrentPositionAsync,
  LocationAccuracy,
  LocationObject,
  requestPermissionsAsync,
  watchPositionAsync
} from "expo-location";


type PositionChangeListener = (location: LocationObject) => void;

export const useLocation = (shouldTrack: boolean, onPositionChange: PositionChangeListener): [ boolean ] => {
  const [ error, setError ] = useState<boolean>(false);

  useEffect(() => {
    let remove: (() => void) | undefined;

    const startWatching = async () => {
      try {
        const { granted } = await requestPermissionsAsync();
        setError(!granted);
        if (!granted) return;

        const location = await getCurrentPositionAsync({ accuracy: Accuracy.BestForNavigation });
        onPositionChange(location);

        const subscriber = await watchPositionAsync({
          accuracy: LocationAccuracy.BestForNavigation,
          timeInterval: 2000,
          distanceInterval: 10
        }, (location) => {
          onPositionChange(location);
        });
        remove = subscriber.remove;
      } catch (e) {
        console.log(e);
        setError(true);
      }
    }

    if (shouldTrack) {
      startWatching();
    } else {
      remove && remove();
    }

    return () => {
      remove && remove();
    }
  }, [ shouldTrack, onPositionChange ]);



  return [ error ];
}