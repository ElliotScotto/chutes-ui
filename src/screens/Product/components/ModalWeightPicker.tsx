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
import displays from "../../../styles/display";
import modals from "../../../styles/modals";
import ChutesColors from "../../../styles/colors";
const colors = ChutesColors();
//types
import { WEIGHTS } from "../../../types/dataTypes";
//packages
import { LinearGradient } from "expo-linear-gradient";
const OPTIONS = Object.values(WEIGHTS);
const WIDTH = Dimensions.get("window").width;

interface ModalWeightPickerProps {
  isModalWeightsVisible: boolean;
  setIsModalWeightsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setData: (option: string) => void;
  title: string;
}

const ModalWeightPicker: FC<ModalWeightPickerProps> = ({
  isModalWeightsVisible,
  setIsModalWeightsVisible,
  setData,
  title,
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
      transparent={true}
      animationType="none"
      visible={isModalWeightsVisible}
      onRequestClose={() => {
        setIsModalWeightsVisible(false);
      }}
    >
      <LinearGradient
        colors={[colors.white, colors.lightAccent, colors.white]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0, 0.5, 1]}
        style={modals.linear}
      />
      <View style={[displays.w100, modals.centeredView]}>
        <View style={[modals.modalView]}>
          <View style={{ alignSelf: "flex-start", margin: 20, width: "100%" }}>
            <Text
              style={{
                fontSize: 18,
                color: colors.tertiary2,
                fontWeight: "500",
                paddingLeft: 8,
                letterSpacing: 0.4,
              }}
            >
              {title}
            </Text>
          </View>

          <TouchableOpacity onPress={() => setIsModalWeightsVisible(false)}>
            <View style={[modals.modal, { width: WIDTH - 20, height: "auto" }]}>
              <ScrollView>{option}</ScrollView>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default ModalWeightPicker;
