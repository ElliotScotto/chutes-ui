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
import { WEIGHTS } from "../../../types/dataTypes";

const OPTIONS = Object.values(WEIGHTS);
const WIDTH = Dimensions.get("window").width;

interface ModalWeightPickerProps {
  isModalWeightsVisible: boolean;
  setIsModalWeightsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setData: (option: string) => void;
}

const ModalWeightPicker: FC<ModalWeightPickerProps> = ({
  isModalWeightsVisible,
  setIsModalWeightsVisible,
  setData,
}) => {
  const handlePick = (option: string) => {
    setIsModalWeightsVisible(false);
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
      animationType="fade"
      visible={isModalWeightsVisible}
      onRequestClose={() => {
        setIsModalWeightsVisible(false);
      }}
    >
      <TouchableOpacity
        onPress={() => setIsModalWeightsVisible(false)}
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
