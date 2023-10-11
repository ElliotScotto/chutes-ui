import React, { FC } from "react";
import { View, Text } from "react-native";
//packages
import { TextInput } from "react-native-paper";
//styles
import ChutesColors from "../../../styles/colors";
const colors = ChutesColors();
import scrapCreation from "../../../styles/scrapCreation";
//types
import { DescriptionSelectedProps } from "../../../types/inputProps";
//functions
import { CreateFocusNextInput } from "../functions/CreateFocusNextInput";

const DescriptionSelected: FC<DescriptionSelectedProps> = ({
  description,
  setDescription,
  errorDescription,
  counterPressed,
  descriptionRef,
  descriptionFocusRef,
  isDescriptionFocused,
  setIsDescriptionFocused,
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
}) => {
  return (
    <View ref={descriptionFocusRef} style={{ width: "100%" }}>
      <TextInput
        ref={descriptionRef}
        mode="outlined"
        label="Description*"
        placeholder="Renseignez la quantité, dimensions, couleurs, usage..."
        placeholderTextColor={colors.silver}
        multiline={true}
        textAlignVertical="top"
        value={description}
        textColor={colors.tertiary2}
        cursorColor={colors.tertiary2}
        returnKeyType="next"
        outlineColor={
          errorDescription && counterPressed !== 0
            ? colors.error
            : colors.tertiary
        }
        activeOutlineColor={
          errorDescription && counterPressed !== 0
            ? colors.error
            : colors.tertiary2
        }
        theme={{
          colors: {
            primary: errorDescription ? colors.error : colors.tertiary,
          },
        }}
        style={[scrapCreation.inputs.description]}
        onFocus={() => setIsDescriptionFocused(true)}
        onBlur={() => setIsDescriptionFocused(false)}
        onChangeText={setDescription}
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
            "price"
          );
        }}
      />
      <View style={scrapCreation.errors}>
        {errorDescription && !description && counterPressed !== 0 && (
          <Text
            style={{
              color: colors.error,
            }}
          >
            {errorDescription}
          </Text>
        )}
      </View>
    </View>
  );
};
export default DescriptionSelected;
