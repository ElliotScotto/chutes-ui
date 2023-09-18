import React, { FC, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
//styles
import ChutesColors from "../../../styles/colors";
//types
import { CONDITIONS } from "../../../types/dataTypes";
const color = ChutesColors();
const OPTIONS = Object.values(CONDITIONS);
const WIDTH = Dimensions.get("window").width;

interface ModalConditionPickerProps {
  changeModalVisibility: (visibility: boolean) => void;
  setData: (option: string) => void;
}

const ModalConditionPicker: FC<ModalConditionPickerProps> = (props) => {
  const onPressItem = (option: string) => {
    props.changeModalVisibility(false);
    props.setData(option);
  };

  const option = OPTIONS.map((item, index) => {
    return (
      <TouchableOpacity
        style={styles.option}
        key={index}
        onPress={() => {
          onPressItem(item);
        }}
      >
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  });
  return (
    <TouchableOpacity
      onPress={() => props.changeModalVisibility(false)}
      style={styles.container}
    >
      <View style={[styles.modal, { width: WIDTH - 20, height: "auto" }]}>
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: color.white,
    borderRadius: 2,
    borderColor: color.lightAccent,
    borderWidth: 1,
  },
  option: {
    alignItems: "flex-start",
    borderColor: color.lightAccent,
    borderWidth: 1,
    padding: 10,
  },
  text: { fontSize: 16, color: color.secondary },
});
export default ModalConditionPicker;
