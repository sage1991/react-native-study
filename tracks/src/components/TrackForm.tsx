import React, { FC } from "react";
import { Button, Input } from "react-native-elements";
import { Spacer } from "./Spacer";


export const TrackForm: FC = (props) => {
  return (
    <>
      <Spacer>
        <Input />
      </Spacer>
      <Button title="Start Recording" />
    </>
  )
}