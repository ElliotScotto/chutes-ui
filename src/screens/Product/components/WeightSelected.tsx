import React, { FC } from "react";
import { View, Text, Pressable } from "react-native";
//styles
import scrapCreation from "../../../styles/scrapCreation";
import ChutesColors from "../../../styles/colors";
const color = ChutesColors();
import fonts from "../../../styles/fonts";
//icons
import ChevronDown from "react-native-vector-icons/MaterialCommunityIcons";
//utils
import Spacer from "../../../utils/Spacer";
//components
import ModalWeightPicker from "./ModalWeightPicker";
//types
import { WeightSelectedProps } from "../../../types/inputProps";

const WeightSelected: FC<WeightSelectedProps> = ({
  weight,
  setWeight,
  isModalWeightsVisible,
  setIsModalWeightsVisible,
  errorWeight,
  counterPressed,
  weightRef,
}) => {
  let title = "Quel est le poids ?";
  return (
    <View ref={weightRef} style={{ width: "100%" }}>
      <View style={scrapCreation.weightTitle}>
        <Text style={scrapCreation.weightTitleFont}>{title}*</Text>
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
        title={title}
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
