import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import colors from "./colors";
import { Ionicons } from "@expo/vector-icons";
//
export default function FilterButton({ label, value, onPress }) {
  const [isChecked, setIsChecked] = useState(value);

  const handlePress = () => {
    setIsChecked(!isChecked);
    onPress(!isChecked);
  };

  return (
    <Pressable onPress={handlePress}>
      <View
        style={{
          backgroundColor: isChecked ? colors.scrapFirstColor : "#fff",
          borderColor: colors.scrapFirstColor,
          borderWidth: 1,
          borderRadius: 10,
          paddingVertical: 5,
          paddingHorizontal: 10,
          margin: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: isChecked ? "#fff" : colors.lightBlack,
            fontSize: 16,
          }}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}
