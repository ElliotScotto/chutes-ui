import React, { FC } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Modal,
} from "react-native";
//styles
import modals from "../../../styles/modals";
//types
import { CONDITIONS } from "../../../types/dataTypes";

const OPTIONS = Object.values(CONDITIONS);
const WIDTH = Dimensions.get("window").width;

interface ModalConditionPickerProps {
  isModalConditionsVisible: boolean;
  setIsModalConditionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setData: (option: string) => void;
}

const ModalWeightPicker: FC<ModalConditionPickerProps> = ({
  isModalConditionsVisible,
  setIsModalConditionsVisible,
  setData,
}) => {
  const handlePick = (option: string) => {
    setIsModalConditionsVisible(false);
    setData(option);
  };

  const option = OPTIONS.map((item, index) => {
    return (
      <TouchableOpacity
        style={modals.option}
        key={index}
        onPress={() => {
          handlePick(item);
        }}
      >
        <Text style={modals.text}>{item}</Text>
      </TouchableOpacity>
    );
  });
  return (
    <Modal
      transparent={false}
      animationType="none"
      visible={isModalConditionsVisible}
      onRequestClose={() => {
        setIsModalConditionsVisible(false);
      }}
    >
      <TouchableOpacity
        onPress={() => setIsModalConditionsVisible(false)}
        style={modals.container}
      >
        <View style={[modals.modal, { width: WIDTH - 20, height: "auto" }]}>
          <ScrollView>{option}</ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
export default ModalWeightPicker;
