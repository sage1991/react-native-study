import React, { FC, useContext } from "react";
import { Button, Input } from "react-native-elements";
import { Spacer } from "./Spacer";
import { LocationContext } from "../context/LocationContext";
import { useSaveTrack } from "../hooks/useSaveTrack";


export const TrackForm: FC = (props) => {
  const {
    actions: { stopRecording, startRecording, changeName },
    state: { name, recording, locations }
  } = useContext(LocationContext);
  const [ saveTrack ] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="enter name" />
      </Spacer>
      <Spacer>
        {
          recording
          ? <Button title="Stop Recording" onPress={stopRecording} />
          : <Button title="Start Recording" onPress={startRecording} />
        }
      </Spacer>
      <Spacer>
        {
          !recording && locations.length
          ? <Button title="Save Recording" onPress={saveTrack} />
          : null
        }
      </Spacer>
    </>
  )
}