import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";


export const TrackDetailScreen: NavigationStackScreenComponent = (props) => {
  const { navigation } = props;
  const _id = navigation.getParam("_id");
  const { state } = useContext(TrackContext);
  const track = state.find((track) => track._id === _id)!;
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text>{ track.name }</Text>
      <MapView initialRegion={{
                 ...initialCoords,
                 longitudeDelta: 0.01,
                 latitudeDelta: 0.01,
               }}
               style={styles.map}>
        <Polyline coordinates={track.locations.map((location) => location.coords)} />
      </MapView>
    </>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});