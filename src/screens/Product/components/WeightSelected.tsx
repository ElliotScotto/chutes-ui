import React, { FC } from "react";
import { View, Text, Pressable } from "react-native";
//packages
import { TextInput } from "react-native-paper";
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
  counterPressed: number;
  weightRef: React.RefObject<any>;
}

const WeightSelected: FC<WeightSelectedProps> = ({
  weight,
  setWeight,
  isModalWeightsVisible,
  setIsModalWeightsVisible,
  errorWeight,
  counterPressed,
  weightRef,
}) => {
  return (
    <View ref={weightRef} style={{ width: "100%" }}>
      <View style={scrapCreation.weightTitle}>
        <Text style={scrapCreation.weightTitleFont}>Quel est son poids ?*</Text>
      </View>
      <Spacer height={10} />
      <Pressable
        ref={weightRef}
        style={[
          scrapCreation.modalWeights,
          {
            borderColor:
              errorWeight && !weight && counterPressed !== 0
                ? color.error
                : color.tertiary2,
          },
        ]}
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
      <View style={scrapCreation.errors}>
        {errorWeight && !weight && counterPressed !== 0 && (
          <Text style={{ color: color.error }}>{errorWeight}</Text>
        )}
      </View>
    </View>
  );
};
export default WeightSelected;
