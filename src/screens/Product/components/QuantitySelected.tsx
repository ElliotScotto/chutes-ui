import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import ChutesColors from "../../../styles/colors";
import scrapCreation from "../../../styles/scrapCreation";
const color = ChutesColors();

export interface QuantitySelectedProps {
  quantity: number | undefined;
  setQuantity: React.Dispatch<React.SetStateAction<number | undefined>>;
  errorQuantity: string;
  counterPressed: number;
  quantityRef: React.RefObject<any>;
}

const QuantitySelected: React.FC<QuantitySelectedProps> = ({
  quantity,
  setQuantity,
  errorQuantity,
  counterPressed,
  quantityRef,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleValueChange = (text: string) => {
    const isOnlyDigitsOrEmpty = text === "" || /^\d+$/.test(text);

    if (isOnlyDigitsOrEmpty) {
      setInputValue(text);
      if (text !== "") {
        setQuantity(parseInt(text, 10));
      } else {
        setQuantity(undefined);
      }
    }
  };

  return (
    <View ref={quantityRef} style={{ width: "100%" }}>
      <TextInput
        mode="outlined"
        label="Quantité*"
        value={inputValue}
        onChangeText={handleValueChange}
        keyboardType="number-pad"
        style={{ width: "100%", backgroundColor: color.white }}
        theme={{
          colors: {
            primary: quantity
              ? color.tertiary
              : errorQuantity && counterPressed !== 0
              ? color.error
              : color.tertiary,
          },
        }}
        placeholder="Saisissez la quantité"
      />
      <View style={scrapCreation.errors}>
        {errorQuantity && !quantity && counterPressed !== 0 && (
          <Text style={{ color: color.error }}>{errorQuantity}</Text>
        )}
      </View>
    </View>
  );
};

export default QuantitySelected;
