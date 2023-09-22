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
import ModalConditionPicker from "./ModalConditionPicker";
//icons
import ChevronDown from "react-native-vector-icons/MaterialCommunityIcons";
interface ConditionSelectedProps {
  condition: string;
  setCondition: React.Dispatch<React.SetStateAction<string>>;
  isModalConditionsVisible: boolean;
  setIsModalConditionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  errorCondition: string;
}

const ConditionSelected: FC<ConditionSelectedProps> = ({
  condition,
  setCondition,
  isModalConditionsVisible,
  setIsModalConditionsVisible,
  errorCondition,
}) => {
  return (
    <>
      <View style={scrapCreation.conditionTitle}>
        <Text style={scrapCreation.conditionTitleFont}>
          Quel est l'état de votre chute ?*
        </Text>
      </View>
      <Spacer height={5} />
      <Pressable
        style={scrapCreation.modalConditions}
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
        {errorCondition && !condition && (
          <Text style={{ color: color.error }}>{errorCondition}</Text>
        )}
      </View>
    </>
  );
};
export default ConditionSelected;
