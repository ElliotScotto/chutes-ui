import React from "react";
import {
  View,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  TextInput as RNTextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//CREATESCREEN
export type PhotoStyles = {
  main: ViewStyle;
  secondary: ViewStyle;
  container: ViewStyle;
  buttons: ViewStyle;
  label: TextStyle;
  item: TextStyle;
  removeButton: ViewStyle;
};
export interface PhotosType {
  id: number;
  title: string;
}
export interface AddPhotoProps {
  photos: PhotosType[];
  setPhotos: React.Dispatch<React.SetStateAction<PhotosType[]>>;
}
export type TextInputStyles = {
  name: ViewStyle;
  description: ViewStyle;
  price: ViewStyle;
};
export type ImageInfo = { uri: string };
export interface PhotoSelectedProps {
  photo1: ImageInfo | null;
  setPhoto1: React.Dispatch<React.SetStateAction<ImageInfo | null>>;
  photo2: ImageInfo | null;
  setPhoto2: React.Dispatch<React.SetStateAction<ImageInfo | null>>;
  photo3: ImageInfo | null;
  setPhoto3: React.Dispatch<React.SetStateAction<ImageInfo | null>>;
  photo4: ImageInfo | null;
  setPhoto4: React.Dispatch<React.SetStateAction<ImageInfo | null>>;
  photo5: ImageInfo | null;
  setPhoto5: React.Dispatch<React.SetStateAction<ImageInfo | null>>;
  errorPhoto: string;
  counterPressed: number;
  photoRef: React.RefObject<View>;
}
export interface PhotoCard1Props {
  pickImage: () => void;
  captureImage: () => void;
  photo: ImageInfo | null;
  setPhoto: (photo: ImageInfo | null) => void;
  errorPhoto: string;
  counterPressed: number;
}
export interface PhotoCardProps {
  index: number;
  pickImage: () => void;
  captureImage: () => void;
  photo: ImageInfo | null;
  setPhoto: (photo: ImageInfo | null) => void;
  deletePhoto: (id: number) => void;
  photoNumber: number;
}
export interface NameSelectedProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  errorName: string;
  counterPressed: number;
  nameRef: React.RefObject<RNTextInput>;
  nameFocusRef: React.RefObject<View>;
  isNameFocused: boolean;
  setIsNameFocused: React.Dispatch<React.SetStateAction<boolean>>;
  description: string;
  descriptionRef: React.RefObject<RNTextInput>;
  price: number | undefined;
  priceRef: React.RefObject<RNTextInput>;
  condition: string;
  setIsModalConditionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  weight: string;
  setIsModalWeightsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  material: string[];
  materialRef: React.RefObject<View>;
  category: string[];
  categoryRef: React.RefObject<View>;
  publishButtonRef: React.RefObject<TouchableOpacity>;
  scrollViewRef: React.RefObject<KeyboardAwareScrollView>;
}
export interface DescriptionSelectedProps {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  errorDescription: string;
  counterPressed: number;
  descriptionRef: React.RefObject<RNTextInput>;
  descriptionFocusRef: React.RefObject<View>;
  isDescriptionFocused: boolean;
  setIsDescriptionFocused: React.Dispatch<React.SetStateAction<boolean>>;
  price: number | undefined;
  priceRef: React.RefObject<RNTextInput>;
  condition: string;
  setIsModalConditionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  weight: string;
  setIsModalWeightsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  material: string[];
  materialRef: React.RefObject<View>;
  category: string[];
  categoryRef: React.RefObject<View>;
  publishButtonRef: React.RefObject<TouchableOpacity>;
  scrollViewRef: React.RefObject<KeyboardAwareScrollView>;
}
export interface PriceSelectedProps {
  price: number | undefined;
  setPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  free: boolean;
  setFree: React.Dispatch<React.SetStateAction<boolean>>;
  errorPrice: string;
  counterPressed: number;
  priceRef: React.RefObject<RNTextInput>;
  priceFocusRef: React.RefObject<View>;
  isPriceFocused: boolean;
  setIsPriceFocused: React.Dispatch<React.SetStateAction<boolean>>;
  description: string;
  descriptionRef: React.RefObject<RNTextInput>;
  condition: string;
  setIsModalConditionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  weight: string;
  setIsModalWeightsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  material: string[];
  materialRef: React.RefObject<View>;
  category: string[];
  categoryRef: React.RefObject<View>;
  publishButtonRef: React.RefObject<TouchableOpacity>;
  scrollViewRef: React.RefObject<KeyboardAwareScrollView>;
}
export interface ConditionSelectedProps {
  condition: string;
  setCondition: React.Dispatch<React.SetStateAction<string>>;
  isModalConditionsVisible: boolean;
  setIsModalConditionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  errorCondition: string;
  counterPressed: number;
  conditionRef: React.RefObject<any>;
}
export interface WeightSelectedProps {
  weight: string;
  setWeight: React.Dispatch<React.SetStateAction<string>>;
  isModalWeightsVisible: boolean;
  setIsModalWeightsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  errorWeight: string;
  counterPressed: number;
  weightRef: React.RefObject<any>;
}
export interface MaterialSelectedProps {
  material: string[];
  setMaterial: React.Dispatch<React.SetStateAction<string[]>>;
  errorMaterial: string;
  counterPressed: number;
  materialRef: React.RefObject<View>;
}
export interface CategorySelectedProps {
  category: string[];
  setCategory: React.Dispatch<React.SetStateAction<string[]>>;
  errorCategory: string;
  counterPressed: number;
  categoryRef: React.RefObject<View>;
}
export interface DeliverySelectedProps {
  homePickup: boolean;
  setHomePickup: React.Dispatch<React.SetStateAction<boolean>>;
  sending: boolean;
  setSending: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ProductLocationSelectedProps {
  homePickup: boolean;
  sending: boolean;
  productLocation: string;
  setProductLocation: React.Dispatch<React.SetStateAction<string>>;
  errorProductLocation: string;
  counterPressed: number;
}
export interface PostScrapButtonProps {
  publishButtonRef: React.RefObject<TouchableOpacity>;
  shadowButton: boolean;
  setShadowButton: React.Dispatch<React.SetStateAction<boolean>>;
  isButtonEnabled: boolean;
  setIsButtonEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: () => void;
  photo1: ImageInfo | null;
  name: string;
  description: string;
  condition: string;
  price: number | undefined;
  weight: string;
  material: string[];
  category: string[];
  homePickup: boolean;
  sending: boolean;
  counterPressed: number;
  setErrorPhoto: React.Dispatch<React.SetStateAction<string>>;
  setErrorName: React.Dispatch<React.SetStateAction<string>>;
  setErrorDescription: React.Dispatch<React.SetStateAction<string>>;
  setErrorCondition: React.Dispatch<React.SetStateAction<string>>;
  setErrorPrice: React.Dispatch<React.SetStateAction<string>>;
  setErrorWeight: React.Dispatch<React.SetStateAction<string>>;
  setErrorMaterial: React.Dispatch<React.SetStateAction<string>>;
  setErrorCategory: React.Dispatch<React.SetStateAction<string>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setCounterPressed: React.Dispatch<React.SetStateAction<number>>;
}
