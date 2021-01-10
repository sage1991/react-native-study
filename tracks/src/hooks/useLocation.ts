import { useEffect, useState } from "react";
import { Accuracy, LocationObject, requestPermissionsAsync, watchPositionAsync } from "expo-location";


type PositionChangeListener = (location: LocationObject) => void;

export const useLocation = (shouldTrack: boolean, onPositionChange: PositionChangeListener): [ boolean ] => {
  const [ error, setError ] = useState<boolean>(false);
  const [ remove, setRemove ] = useState<() => void>();

  useEffect(() => {
    if (shouldTrack) {
      startWatching().then(_remove => setRemove(_remove));
    } else if (remove) {
      remove();
    }
  }, [ shouldTrack ]);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      setError(!granted);
      if (!granted) return;

      const { remove } = await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      }, (location) => {
        console.log(location);
        onPositionChange(location);
      });

      return remove;
    } catch (e) {
      console.log(e);
      setError(true);
    }
  }

  return [ error ];
}