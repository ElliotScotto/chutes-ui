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
import ChutesColors from "../../../styles/colors";
const colors = ChutesColors();
//icons
import WrenchIcon from "react-native-vector-icons/MaterialCommunityIcons";
//types
import { CONDITIONS } from "../../../types/dataTypes";
import displays from "../../../styles/display";
//packages
import { LinearGradient } from "expo-linear-gradient";
//functions
import { getIconCondition } from "../../Home/functions/getIconCondition";
const OPTIONS = Object.values(CONDITIONS);
const WIDTH = Dimensions.get("window").width;

interface ModalConditionPickerProps {
  isModalConditionsVisible: boolean;
  setIsModalConditionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setData: (option: string) => void;
  title: string;
}

const ModalConditionPicker: FC<ModalConditionPickerProps> = ({
  isModalConditionsVisible,
  setIsModalConditionsVisible,
  setData,
  title,
}) => {
  const handlePick = (option: string) => {
    setIsModalConditionsVisible(false);
    setData(option);
  };

  const option = OPTIONS.map((item, index) => {
    const iconContionNames = getIconCondition(item);
    return (
      <TouchableOpacity
        style={modals.option}
        key={index}
        onPress={() => {
          handlePick(item);
        }}
      >
        <View style={[displays.flex]}>
          <Text style={modals.text}>{item}</Text>
        </View>
        <View
          style={[displays.flex, displays.row, { justifyContent: "center" }]}
        >
          {iconContionNames.map((iconName, index) => (
            <WrenchIcon
              key={index}
              name={iconName}
              size={20}
              color={colors.tertiary2}
              style={{
                opacity: iconName === "wrench-outline" ? 0.3 : 1,
              }}
            />
          ))}
        </View>
      </TouchableOpacity>
    );
  });
  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={isModalConditionsVisible}
      onRequestClose={() => {
        setIsModalConditionsVisible(false);
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
          <TouchableOpacity onPress={() => setIsModalConditionsVisible(false)}>
            <View style={[modals.modal, { width: WIDTH - 20, height: "auto" }]}>
              <ScrollView>{option}</ScrollView>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default ModalConditionPicker;
