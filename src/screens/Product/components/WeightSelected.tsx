import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
//styles
import scrapCreation from "../../../styles/scrapCreation";
import ChutesColors from "../../../styles/colors";
const colors = ChutesColors();
import fonts from "../../../styles/fonts";
//icons
import ChevronDown from "react-native-vector-icons/MaterialCommunityIcons";
//utils
import Spacer from "../../../utils/Spacer";
//components
import ModalWeightPicker from "./ModalWeightPicker";
//types
import { WeightSelectedProps } from "../../../types/inputProps";
//packages
import { Shadow } from "react-native-shadow-2";

const WeightSelected: FC<WeightSelectedProps> = ({
  weight,
  setWeight,
  isModalWeightsVisible,
  setIsModalWeightsVisible,
  errorWeight,
  counterPressed,
  weightRef,
}) => {
  let weightDefaultValue = "Choisir dans la liste";
  return (
    <View ref={weightRef} style={{ width: "100%" }}>
      <View style={scrapCreation.weightTitle}>
        <Text style={scrapCreation.weightTitleFont}>Poids*</Text>
      </View>
      <Spacer height={10} />
      <Shadow
        distance={2}
        offset={[0, 0]}
        paintInside={false}
        sides={{ top: true, bottom: true, start: true, end: true }}
        corners={{
          topStart: true,
          topEnd: true,
          bottomStart: true,
          bottomEnd: true,
        }}
        startColor={colors.lightAccent2}
        endColor={colors.white}
        style={{ width: "100%" }}
      >
        <TouchableOpacity
          ref={weightRef}
          style={[
            scrapCreation.modalPress,
            {
              borderColor:
                errorWeight && !weight && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary2,
            },
          ]}
          onPress={() => {
            setIsModalWeightsVisible(true);
          }}
        >
          <Text style={fonts.weights}>
            {weight ? weight : weightDefaultValue}
          </Text>
          <ChevronDown name="chevron-down" size={25} color={colors.secondary} />
        </TouchableOpacity>
      </Shadow>
      <ModalWeightPicker
        isModalWeightsVisible={isModalWeightsVisible}
        setIsModalWeightsVisible={setIsModalWeightsVisible}
        setData={setWeight}
        title={weightDefaultValue}
      />
      <View style={scrapCreation.errors}>
        {errorWeight && !weight && counterPressed !== 0 && (
          <Text style={{ color: colors.error }}>{errorWeight}</Text>
        )}
      </View>
    </View>
  );
};
export default WeightSelected;
