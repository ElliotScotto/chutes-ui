import React, { FC, SetStateAction, useState } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from "react-native";

interface SignUpErrorsPropsType {
  message: string;
  modalErrorsVisibility: boolean;
  setModalErrorsVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalErrorSignUp: FC<SignUpErrorsPropsType> = ({
  message,
  modalErrorsVisibility,
  setModalErrorsVisibility,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalErrorsVisibility}
      onRequestClose={() => {
        setModalErrorsVisibility(!modalErrorsVisibility);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>{message}</Text>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={() => setModalErrorsVisibility(false)}
          >
            <Text style={styles.textStyle}>OK</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default ModalErrorSignUp;
