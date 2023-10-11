import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Switch } from "react-native-paper";
//styles
import ChutesColors from "../../../styles/colors";
const colors = ChutesColors();
import scrapCreation from "../../../styles/scrapCreation";
//types
import { PriceSelectedProps } from "../../../types/inputProps";
//functions
import { CreateFocusNextInput } from "../functions/CreateFocusNextInput";
import displays from "../../../styles/display";

const PriceSelected: React.FC<PriceSelectedProps> = ({
  description,
  descriptionRef,
  price,
  setPrice,
  free,
  setFree,
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
  const [lastNonFreePrice, setLastNonFreePrice] = useState<string>("");
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
      const normalizedValue = text.replace(",", ".");
      setInputValue(normalizedValue);
      if (normalizedValue) {
        setPrice(parseFloat(normalizedValue));
        // Si le prix est supérieur à zéro, le stocker comme dernier prix non gratuit
        if (parseFloat(normalizedValue) > 0) {
          setLastNonFreePrice(normalizedValue);
        }
      } else {
        setPrice(undefined);
      }
      const numericValue = parseFloat(normalizedValue);
      // La condition n'a plus besoin de vérifier que numericValue est >= 1
      if (numericValue <= 14000) {
        setInputValue(normalizedValue);
        setPrice(numericValue);
      } else {
        setPrice(undefined);
      }
    }
  };
  // Gestionnaire pour mettre à jour free et potentiellement restaurer le dernier prix non gratuit
  const handleFreeChange = (newValue: boolean) => {
    setFree(newValue);

    if (!newValue && lastNonFreePrice) {
      setInputValue(lastNonFreePrice);
      setPrice(parseFloat(lastNonFreePrice));
    } else if (newValue) {
      setInputValue("0");
      setPrice(0);
    }
  };
  return (
    <View ref={priceFocusRef} style={[{ width: "100%" }, displays.col]}>
      <View style={[{ width: "100%" }, displays.row]}>
        <View style={[displays.center, { flex: 1.5 }]}>
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
                textStyle={{
                  color: price !== 0 ? colors.tertiary : colors.disabledLight,
                  fontSize: 20,
                }}
              />
            }
            outlineColor={
              errorPrice && counterPressed !== 0
                ? colors.error
                : colors.tertiary
            }
            activeOutlineColor={
              errorPrice && counterPressed !== 0
                ? colors.error
                : colors.tertiary2
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
            editable={free ? false : true}
            disabled={free ? true : false}
          />
        </View>
        <View style={[displays.flex, displays.center, displays.col]}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: free ? colors.tertiary2 : colors.silver,
            }}
          >
            Gratuit
          </Text>
          <Switch
            color={colors.tertiary2}
            value={free}
            onValueChange={handleFreeChange}
            style={{ transform: [{ scale: 1.2 }] }}
          />
        </View>
      </View>
      <View style={scrapCreation.errors}>
        {errorPrice && !price && counterPressed !== 0 && (
          <Text style={{ color: colors.error }}>{errorPrice}</Text>
        )}
      </View>
    </View>
  );
};

export default PriceSelected;
