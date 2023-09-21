import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import ChutesColors from "../../../styles/colors";
const color = ChutesColors();

export interface PriceSelectedProps {
  setPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  errorPrice: string;
}

const PriceSelected: React.FC<PriceSelectedProps> = ({
  setPrice,
  errorPrice,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleValueChange = (text: string) => {
    // Si l'entrée commence par un point ou une virgule et que c'est la seule entrée
    if ((text.startsWith(".") || text.startsWith(",")) && text.length === 1) {
      return; // Ne fait rien, n'accepte pas cette entrée
    }

    // Vérification des caractères valides (uniquement des chiffres et éventuellement un point ou une virgule)
    const containsOnlyValidChars = /^\d*([.,]\d{0,2})?$/.test(text);

    // Vérifie qu'il n'y a pas plus d'un point ou d'une virgule
    const dotCount = (text.match(/\./g) || []).length;
    const commaCount = (text.match(/,/g) || []).length;

    if (containsOnlyValidChars && dotCount <= 1 && commaCount <= 1) {
      const normalizedValue = text.replace(",", "."); // Remplacer la virgule par un point
      setInputValue(normalizedValue);
      if (normalizedValue) {
        setPrice(parseFloat(normalizedValue));
      } else {
        setPrice(undefined);
      }
      const numericValue = parseFloat(normalizedValue);
      if (numericValue >= 1 && numericValue <= 14000) {
        setInputValue(normalizedValue);
        setPrice(numericValue);
      } else {
        // Alert.alert(
        //   "Vous ne pouvez pas vendre un produit à un prix inférieur à 1€ ou supérieur à 14000€."
        // );
        setPrice(1);
      }
    }
  };

  return (
    <>
      <TextInput
        mode="outlined"
        label="Prix*"
        value={inputValue}
        onChangeText={handleValueChange}
        keyboardType="default"
        style={{ width: "100%", backgroundColor: color.white }}
        placeholder="Saisissez le prix"
      />
      <View style={{ marginTop: 6, alignSelf: "flex-end" }}>
        {errorPrice && (
          <Text style={{ color: color.error }}>*{errorPrice}</Text>
        )}
      </View>
    </>
  );
};

export default PriceSelected;
