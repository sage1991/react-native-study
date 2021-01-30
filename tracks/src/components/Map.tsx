import React, { FC, useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Circle, Polyline } from "react-native-maps";
import { LocationContext } from "../context/LocationContext";


export const Map: FC = (props) => {
  const {
    state: { currentLocation, locations }
  } = useContext(LocationContext);
  if (!currentLocation) return <ActivityIndicator size="large" style={styles.indicator} />;

  return (
    <MapView
      style={styles.map}
      region={{
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
      }}
      initialRegion={{
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
      }}
    >
      <Circle center={currentLocation.coords} radius={100} strokeColor="rgba(158, 158, 255, 1.0)" fillColor="rgba(158, 158, 255, 0.3)" />
      <Circle center={currentLocation.coords} radius={10} strokeColor="rgba(0, 0, 255, 1.0)" fillColor="rgba(0, 0, 255, 1.0)" />
      <Polyline coordinates={locations.map(location => location.coords)} />
    </MapView>
  )
}

const styles = StyleSheet.create({
  indicator: {
    marginTop: 200,
    width: 20,
    height: 20,
    borderColor: "red",
    borderWidth: 2
  },
  map: {
    height: 300,
  }
});