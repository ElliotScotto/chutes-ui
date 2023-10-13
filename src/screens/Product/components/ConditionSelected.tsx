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
import ModalConditionPicker from "./ModalConditionPicker";
//types
import { ConditionSelectedProps } from "../../../types/inputProps";
//packages
import { Shadow } from "react-native-shadow-2";

const ConditionSelected: FC<ConditionSelectedProps> = ({
  condition,
  setCondition,
  isModalConditionsVisible,
  setIsModalConditionsVisible,
  errorCondition,
  counterPressed,
  conditionRef,
}) => {
  let conditionDefaultValue = "Choisir dans la liste";
  return (
    <View ref={conditionRef} style={{ width: "100%" }}>
      <View style={scrapCreation.conditionTitle}>
        <Text style={scrapCreation.conditionTitleFont}>Etat*</Text>
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
          style={[
            scrapCreation.modalPress,
            {
              borderColor:
                errorCondition && !condition && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary2,
            },
          ]}
          onPress={() => {
            setIsModalConditionsVisible(true);
          }}
        >
          <Text
            style={
              condition ? fonts.conditionsFilled : fonts.conditionsUnfilled
            }
          >
            {condition ? condition : conditionDefaultValue}
          </Text>
          <ChevronDown name="chevron-down" size={25} color={colors.secondary} />
        </TouchableOpacity>
      </Shadow>
      <ModalConditionPicker
        isModalConditionsVisible={isModalConditionsVisible}
        setIsModalConditionsVisible={setIsModalConditionsVisible}
        setData={setCondition}
        title={conditionDefaultValue}
      />
      <View style={scrapCreation.errors}>
        {errorCondition && !condition && counterPressed !== 0 && (
          <Text style={{ color: colors.error }}>{errorCondition}</Text>
        )}
      </View>
    </View>
  );
};
export default ConditionSelected;
