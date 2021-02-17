import React, { FC, useEffect } from "react";
import { LibraryState } from "../reducers/LibraryReducer";
import { CardSection } from "./common";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";


interface ListItemProps {
  library: LibraryState;
  onPress: (id: number) => void;
  expanded: boolean
}

export const LibraryListItem: FC<ListItemProps> = (props) => {
  const {
    library: { id, title, description },
    onPress,
    expanded
  } = props;

  useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  }, [ expanded ]);

  return (
    <TouchableWithoutFeedback onPress={() => onPress(id)}>
      <View>
        <CardSection>
          <Text style={styles.title}>{ title }</Text>
        </CardSection>
        {
          expanded &&
          <CardSection style={styles.description}>
            <Text>{ description }</Text>
          </CardSection>
        }
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15
  },
  description: {
    padding: 20
  }
})
