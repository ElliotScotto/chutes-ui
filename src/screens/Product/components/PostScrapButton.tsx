import React, { useState, useEffect } from "react";
import { Text, Pressable } from "react-native";
import { Shadow } from "react-native-shadow-2";
import buttons from "../../../styles/buttons";
import ChutesColors from "../../../styles/colors";
const color = ChutesColors();
import { handleErrors } from "../functions/validateForm";

export interface PostScrapButtonProps {
  shadowButton: boolean;
  setShadowButton: React.Dispatch<React.SetStateAction<boolean>>;
  isButtonEnabled: boolean;
  setIsButtonEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: () => void;
  name: string;
  description: string;
  condition: string;
  price: number | undefined;
  quantity: number | undefined;
  weight: string;
  material: string[];
  category: string[];
  productLocation: string;
  homePickup: boolean;
  counterPressed: number;
  setErrorName: React.Dispatch<React.SetStateAction<string>>;
  setErrorDescription: React.Dispatch<React.SetStateAction<string>>;
  setErrorCondition: React.Dispatch<React.SetStateAction<string>>;
  setErrorPrice: React.Dispatch<React.SetStateAction<string>>;
  setErrorQuantity: React.Dispatch<React.SetStateAction<string>>;
  setErrorWeight: React.Dispatch<React.SetStateAction<string>>;
  setErrorMaterial: React.Dispatch<React.SetStateAction<string>>;
  setErrorCategory: React.Dispatch<React.SetStateAction<string>>;
  setErrorProductLocation: React.Dispatch<React.SetStateAction<string>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setCounterPressed: React.Dispatch<React.SetStateAction<number>>;
}

const PostScrapButton: React.FC<PostScrapButtonProps> = ({
  shadowButton,
  setShadowButton,
  isButtonEnabled,
  setIsButtonEnabled,
  handleSubmit,
  name,
  description,
  condition,
  price,
  quantity,
  weight,
  material,
  category,
  productLocation,
  homePickup,
  counterPressed,
  setErrorName,
  setErrorDescription,
  setErrorCondition,
  setErrorPrice,
  setErrorQuantity,
  setErrorWeight,
  setErrorMaterial,
  setErrorCategory,
  setErrorProductLocation,
  setErrorMessage,
  setCounterPressed,
}) => {
  const [textColor, setTextColor] = useState<string>(`${color.secondary}`);

  console.log("counterPressed : ", counterPressed);
  //Style Publish Button
  const handlePressIn = () => {
    setShadowButton(false);
    setTextColor(color.white);
  };
  const handlePressOut = () => {
    setShadowButton(true);
    setTextColor(color.secondary);
  };
  useEffect(() => {
    setIsButtonEnabled(
      handleErrors(
        name,
        description,
        condition,
        price,
        quantity,
        weight,
        material,
        category,
        productLocation,
        homePickup,
        setErrorName,
        setErrorDescription,
        setErrorCondition,
        setErrorPrice,
        setErrorQuantity,
        setErrorWeight,
        setErrorMaterial,
        setErrorCategory,
        setErrorProductLocation,
        setErrorMessage
      )
    );
  });
  return (
    <Shadow
      distance={shadowButton ? 4 : 0}
      offset={[0, 0]}
      paintInside={false}
      sides={{ top: true, bottom: true, start: true, end: true }}
      corners={{
        topStart: true,
        topEnd: true,
        bottomStart: true,
        bottomEnd: true,
      }}
      startColor={color.lightAccent}
      style={{ borderRadius: 50 }}
    >
      <Pressable
        onPress={() => {
          handleSubmit();
          setCounterPressed(counterPressed + 1);
        }}
        style={({ pressed }) => [
          buttons.primary,
          {
            backgroundColor:
              pressed || isButtonEnabled ? color.secondary : color.white,
          },
        ]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text
          style={{
            color: isButtonEnabled ? color.white : textColor,
            textTransform: "uppercase",
          }}
        >
          PUBLIER
        </Text>
      </Pressable>
    </Shadow>
  );
};
export default PostScrapButton;
