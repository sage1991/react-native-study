import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment: number) => {
  return {
    timestamp: Date.now(),
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      latitude: 37.461498 + increment * tenMetersWithDegrees,
      longitude: 126.910656 + increment * tenMetersWithDegrees
    }
  };
}

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 5000);