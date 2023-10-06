import { TextStyle, ViewStyle } from "react-native";
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
  photoRef: React.RefObject<any>;
}
export interface PhotoCard1Props {
  setPhoto1: React.Dispatch<React.SetStateAction<ImageInfo | null>>;
  pickImage: (
    setPhoto: React.Dispatch<React.SetStateAction<ImageInfo | null>>
  ) => void;
  captureImage: (
    setPhoto: React.Dispatch<React.SetStateAction<ImageInfo | null>>
  ) => void;
}
export interface PhotoCardProps {
  // setPhoto1: React.Dispatch<React.SetStateAction<ImageInfo | null>>;
  id: number;
  pickImage: (
    setPhoto: React.Dispatch<React.SetStateAction<ImageInfo | null>>
  ) => void;
  captureImage: (
    setPhoto: React.Dispatch<React.SetStateAction<ImageInfo | null>>
  ) => void;
  deletePhoto: (id: number) => void;
  photoNumber: number;
  photos: PhotosType[];
}
export interface NameSelectedProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  errorName: string;
  counterPressed: number;
  nameRef: React.RefObject<any>;
}
export interface DescriptionSelectedProps {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  errorDescription: string;
  counterPressed: number;
  descriptionRef: React.RefObject<any>;
}
export interface PriceSelectedProps {
  price: number | undefined;
  setPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  errorPrice: string;
  counterPressed: number;
  priceRef: React.RefObject<any>;
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
  materialRef: React.RefObject<any>;
}
export interface CategorySelectedProps {
  category: string[];
  setCategory: React.Dispatch<React.SetStateAction<string[]>>;
  errorCategory: string;
  counterPressed: number;
  categoryRef: React.RefObject<any>;
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
  productLocation: string;
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
  setErrorProductLocation: React.Dispatch<React.SetStateAction<string>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setCounterPressed: React.Dispatch<React.SetStateAction<number>>;
}
