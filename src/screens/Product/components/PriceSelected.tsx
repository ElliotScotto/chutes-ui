import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
//styles
import ChutesColors from "../../../styles/colors";
const colors = ChutesColors();
import scrapCreation from "../../../styles/scrapCreation";
//types
import { PriceSelectedProps } from "../../../types/inputProps";
//functions
import { CreateFocusNextInput } from "../functions/CreateFocusNextInput";

const PriceSelected: React.FC<PriceSelectedProps> = ({
  description,
  descriptionRef,
  price,
  setPrice,
  errorPrice,
  counterPressed,
  priceRef,
  priceFocusRef,
  isPriceFocused,
  setIsPriceFocused,
  condition,
  setIsModalConditionsVisible,
  weight,
  setIsModalWeightsVisible,
  material,
  materialRef,
  category,
  categoryRef,
  publishButtonRef,
  scrollViewRef,
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
        setPrice(undefined);
      }
    }
  };

  return (
    <View ref={priceFocusRef} style={{ width: "100%" }}>
      <TextInput
        ref={priceRef}
        mode="outlined"
        label="Prix*"
        value={inputValue}
        placeholder="Saisissez le prix"
        placeholderTextColor={colors.silver}
        keyboardType="number-pad"
        returnKeyType="next"
        style={scrapCreation.inputs.price}
        right={
          <TextInput.Affix
            text="€"
            textStyle={{ color: colors.tertiary, fontSize: 20 }}
          />
        }
        outlineColor={
          errorPrice && counterPressed !== 0 ? colors.error : colors.tertiary
        }
        activeOutlineColor={
          errorPrice && counterPressed !== 0 ? colors.error : colors.tertiary2
        }
        theme={{
          colors: {
            primary: errorPrice ? colors.error : colors.tertiary,
          },
        }}
        onFocus={() => setIsPriceFocused(true)}
        onBlur={() => setIsPriceFocused(false)}
        onChangeText={handleValueChange}
        onSubmitEditing={() => {
          CreateFocusNextInput(
            description,
            descriptionRef,
            price,
            priceRef,
            condition,
            setIsModalConditionsVisible,
            weight,
            setIsModalWeightsVisible,
            material,
            materialRef,
            category,
            categoryRef,
            publishButtonRef,
            scrollViewRef,
            "condition"
          );
        }}
      />
      <View style={scrapCreation.errors}>
        {errorPrice && !price && counterPressed !== 0 && (
          <Text style={{ color: colors.error }}>{errorPrice}</Text>
        )}
      </View>
    </View>
  );
};

export default PriceSelected;
