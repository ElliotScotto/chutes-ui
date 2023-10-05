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
import ModalConditionPicker from "./ModalConditionPicker";
//types
import { ConditionSelectedProps } from "../../../types/inputProps";

const ConditionSelected: FC<ConditionSelectedProps> = ({
  condition,
  setCondition,
  isModalConditionsVisible,
  setIsModalConditionsVisible,
  errorCondition,
  counterPressed,
  conditionRef,
}) => {
  return (
    <View ref={conditionRef} style={{ width: "100%" }}>
      <View style={scrapCreation.conditionTitle}>
        <Text style={scrapCreation.conditionTitleFont}>
          Quel est l'état de votre chute ?*
        </Text>
      </View>
      <Spacer height={10} />
      <Pressable
        style={[
          scrapCreation.modalConditions,
          {
            borderColor:
              errorCondition && !condition && counterPressed !== 0
                ? color.error
                : color.tertiary2,
          },
        ]}
        onPress={() => {
          setIsModalConditionsVisible(true);
        }}
      >
        <Text style={fonts.conditions}>{condition}</Text>
        <ChevronDown name="chevron-down" size={25} color={color.secondary} />
      </Pressable>
      <ModalConditionPicker
        isModalConditionsVisible={isModalConditionsVisible}
        setIsModalConditionsVisible={setIsModalConditionsVisible}
        setData={setCondition}
      />
      <View style={scrapCreation.errors}>
        {errorCondition && !condition && counterPressed !== 0 && (
          <Text style={{ color: color.error }}>{errorCondition}</Text>
        )}
      </View>
    </View>
  );
};
export default ConditionSelected;
