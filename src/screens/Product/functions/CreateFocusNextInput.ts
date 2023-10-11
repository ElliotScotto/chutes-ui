import React from "react";
import { View, TouchableOpacity, TextInput as RNTextInput } from "react-native";
import { scrollToRef } from "./scrollToRef";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const checkRemainingStates = (
  value: string,
  description: string,
  descriptionRef: React.RefObject<RNTextInput | null>,
  price: number | undefined,
  priceRef: React.RefObject<RNTextInput | null>,
  condition: string,
  weight: string,
  material: string[],
  category: string[],
  setIsModalConditionsVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setIsModalWeightsVisible: React.Dispatch<React.SetStateAction<boolean>>,
  materialRef: React.RefObject<View>,
  categoryRef: React.RefObject<View>,
  publishButtonRef: React.RefObject<TouchableOpacity>,
  scrollViewRef: React.RefObject<KeyboardAwareScrollView>
) => {
  switch (value) {
    case "description":
      if (!description) {
        descriptionRef.current?.focus();
        return;
      }
    case "price":
      if (!price) {
        priceRef.current?.focus();
        return;
      }
    case "condition":
      if (!condition) {
        setIsModalConditionsVisible(true);
        return;
      }
    case "weight":
      if (!weight) {
        setIsModalWeightsVisible(true);
        return;
      }
    case "material":
      if (!material.length) {
        scrollToRef(scrollViewRef, materialRef, -10, "material", false);
        return;
      }
    case "category":
      if (!category.length) {
        scrollToRef(scrollViewRef, categoryRef, -10, "category", false);
        return;
      }
      break;
    default:
      break;
  }

  if (
    description &&
    price &&
    condition &&
    weight &&
    material.length &&
    category.length
  ) {
    publishButtonRef.current?.focus();
    scrollToRef(scrollViewRef, publishButtonRef, 0, "publish", false);
  }
};
const CreateFocusNextInput = (
  description: string,
  descriptionRef: React.RefObject<RNTextInput | null>,
  price: number | undefined,
  priceRef: React.RefObject<RNTextInput | null>,
  condition: string,
  setIsModalConditionsVisible: React.Dispatch<React.SetStateAction<boolean>>,
  weight: string,
  setIsModalWeightsVisible: React.Dispatch<React.SetStateAction<boolean>>,
  material: string[],
  materialRef: React.RefObject<View>,
  category: string[],
  categoryRef: React.RefObject<View>,
  publishButtonRef: React.RefObject<TouchableOpacity>,
  scrollViewRef: React.RefObject<KeyboardAwareScrollView>,
  value: string
) => {
  checkRemainingStates(
    value,
    description,
    descriptionRef,
    price,
    priceRef,
    condition,
    weight,
    material,
    category,
    setIsModalConditionsVisible,
    setIsModalWeightsVisible,
    materialRef,
    categoryRef,
    publishButtonRef,
    scrollViewRef
  );
};
export { CreateFocusNextInput };
