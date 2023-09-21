import React, { FC } from "react";
import { View, Text, Pressable } from "react-native";
//styles
import scrapCreation from "../../../styles/scrapCreation";
import ChutesColors from "../../../styles/colors";
const color = ChutesColors();
import fonts from "../../../styles/fonts";
//utils
import Spacer from "../../../utils/Spacer";
//components
import ModalWeightPicker from "./ModalWeightPicker";
//icons
import ChevronDown from "react-native-vector-icons/MaterialCommunityIcons";
interface WeightSelectedProps {
  weight: string;
  setWeight: React.Dispatch<React.SetStateAction<string>>;
  isModalWeightsVisible: boolean;
  setIsModalWeightsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  errorWeight: string;
}

const WeightSelected: FC<WeightSelectedProps> = ({
  weight,
  setWeight,
  isModalWeightsVisible,
  setIsModalWeightsVisible,
  errorWeight,
}) => {
  return (
    <>
      <View style={scrapCreation.weightTitle}>
        <Text style={scrapCreation.weightTitleFont}>Quel est son poids ?*</Text>
      </View>
      <Spacer height={5} />
      <Pressable
        style={scrapCreation.modalWeights}
        onPress={() => {
          setIsModalWeightsVisible(true);
        }}
      >
        <Text style={fonts.weights}>{weight}</Text>
        <ChevronDown name="chevron-down" size={25} color={color.secondary} />
      </Pressable>
      <ModalWeightPicker
        isModalWeightsVisible={isModalWeightsVisible}
        setIsModalWeightsVisible={setIsModalWeightsVisible}
        setData={setWeight}
      />
      <View style={{ marginTop: 6, alignSelf: "flex-end" }}>
        {errorWeight && (
          <Text style={{ color: color.error }}>*{errorWeight}</Text>
        )}
      </View>
    </>
  );
};
export default WeightSelected;
