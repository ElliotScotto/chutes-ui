import React, { FC, useState } from "react";
import { View, Text } from "react-native";
//packages
import { TextInput } from "react-native-paper";
//styles
import ChutesColors from "../../../styles/colors";
const colors = ChutesColors();
import scrapCreation from "../../../styles/scrapCreation";
//types
import { NameSelectedProps } from "../../../types/inputProps";
//functions
import { CreateFocusNextInput } from "../functions/CreateFocusNextInput";

const NameSelected: FC<NameSelectedProps> = ({
  name,
  setName,
  errorName,
  counterPressed,
  nameRef,
  nameFocusRef,
  isNameFocused,
  setIsNameFocused,
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
}) => {
  return (
    <View ref={nameFocusRef} style={{ width: "100%" }}>
      <TextInput
        ref={nameRef}
        mode="outlined"
        label="Nom*"
        placeholder="ex: Lot 10 Planches stratifié L.120x18 ep.12mm"
        placeholderTextColor={colors.silver}
        multiline={false}
        textColor={colors.tertiary2}
        cursorColor={colors.tertiary2}
        returnKeyType="next"
        textAlignVertical="top"
        textAlign="left"
        value={name}
        outlineColor={
          errorName && counterPressed !== 0 ? colors.error : colors.tertiary
        }
        activeOutlineColor={
          errorName && counterPressed !== 0 ? colors.error : colors.tertiary2
        }
        style={[scrapCreation.inputs.name]}
        theme={{
          colors: {
            primary: errorName ? colors.error : colors.tertiary,
          },
        }}
        onFocus={() => setIsNameFocused(true)}
        onBlur={() => setIsNameFocused(false)}
        onChangeText={setName}
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
            "description"
          );
        }}
      />
      <View style={scrapCreation.errors}>
        {errorName && !name && counterPressed !== 0 && (
          <Text
            style={{
              color: colors.error,
            }}
          >
            {errorName}
          </Text>
        )}
      </View>
    </View>
  );
};
export default NameSelected;
