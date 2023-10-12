import React from "react";
import { Modal, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import ChutesColors from "../../../styles/colors";
import Spacer from "../../../utils/Spacer";
const colors = ChutesColors();
import displays from "../../../styles/display";
import { LinearGradient } from "expo-linear-gradient";

interface ModalProps {
  title: string;
  message: string;
  modalErrorsVisibility: boolean;
  setModalErrorsVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCreate: React.FC<ModalProps> = ({
  title,
  message,
  modalErrorsVisibility,
  setModalErrorsVisibility,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalErrorsVisibility}
      onRequestClose={() => {
        setModalErrorsVisibility(!modalErrorsVisibility);
      }}
    >
      <LinearGradient
        colors={[colors.white, colors.lightAccent, colors.white]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0, 0.5, 1]}
        style={displays.linearModal}
      />
      <View style={[displays.w100, styles.centeredView]}>
        <View style={[displays.w80, styles.modalView]}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              letterSpacing: 0.3,
              color: colors.tertiary,
              textTransform: "uppercase",
            }}
          >
            {title}
          </Text>
          <Spacer height={15} />
          <Text
            style={{ fontSize: 14, color: colors.tertiary, lineHeight: 20 }}
          >
            {message}
          </Text>
          <Spacer height={20} />
          <View style={[{ width: "100%", alignItems: "flex-end" }]}>
            <TouchableOpacity
              style={[styles.openButton]}
              onPress={() => setModalErrorsVisibility(false)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </TouchableOpacity>
          </View>
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
    // backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.white,
    borderColor: colors.lightAccent2,
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    shadowColor: colors.tertiary2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    backgroundColor: colors.white,
    borderRadius: 3,
    padding: 10,
    elevation: 2,
    borderColor: colors.lightAccent,
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 14,
    color: colors.tertiary2,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default ModalCreate;
