import React, { FC } from "react";
import { CardSection } from "./CardSection";
import { Button } from "./Button";
import { Modal, StyleSheet, Text, View } from "react-native";


interface ConfirmProps {
  onConfirm?: () => void;
  onDismiss?: () => void;
  children: string;
  visible: boolean;
  close: () => void;
}

export const Confirm: FC<ConfirmProps> = (props) => {
  const { onConfirm, onDismiss, children, visible, close } = props;
  const { text, container, section, button } = styles;

  const onConfirmButtonPress = () => {
    onConfirm && onConfirm();
    close();
  }

  const onDismissButtonPress = () => {
    onDismiss && onDismiss();
    close();
  }

  return (
    <Modal transparent
           animationType="fade"
           visible={visible}>
      <View style={container}>
        <CardSection style={section}>
          <Text style={text}>{ children }</Text>
        </CardSection>
        <CardSection>
          11<Button style={button} onPress={onConfirmButtonPress}>
            Confirm
          </Button>
          <Button style={button} onPress={onDismissButtonPress}>
            Dismiss
          </Button>
        </CardSection>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  section: {
    justifyContent: "center"
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 40
  },
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "relative",
    flex: 1,
    justifyContent: "center",
  },
  button: {
    flex: 1
  }
});
