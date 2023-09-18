import React, { useState } from "react";
import { Pressable, Text, View, TextStyle, ViewStyle } from "react-native";
import ChutesColors from "../../../styles/colors";

const colors = ChutesColors();

type FilterButtonProps = {
  label: string;
  value: boolean;
  onPress: (value: boolean) => void;
};
export default function FilterButton({
  label,
  value,
  onPress,
}: FilterButtonProps) {
  const [isChecked, setIsChecked] = useState<boolean>(value);
  const handlePress = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    onPress(newState);
  };
  const buttonStyle: ViewStyle = {
    backgroundColor: isChecked ? colors.primary : "#fff",
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
  };
  const textStyle: TextStyle = {
    color: isChecked ? colors.white : colors.black,
    fontSize: 16,
  };
  return (
    <Pressable onPress={handlePress}>
      <View style={buttonStyle}>
        <Text style={textStyle}>{label}</Text>
      </View>
    </Pressable>
  );
}
