import React, { useState, useEffect } from "react";
import { Text, Pressable } from "react-native";
import { Shadow } from "react-native-shadow-2";
//styles
import buttons from "../../../styles/buttons";
import ChutesColors from "../../../styles/colors";
const colors = ChutesColors();
//functions
import { handleErrorsScrap } from "../functions/validateForm";
//types
import { PostScrapButtonProps } from "../../../types/inputProps";
import fonts from "../../../styles/fonts";

const PostScrapButton: React.FC<PostScrapButtonProps> = ({
  shadowButton,
  setShadowButton,
  isButtonEnabled,
  setIsButtonEnabled,
  handleSubmit,
  photo1,
  name,
  description,
  condition,
  price,
  weight,
  material,
  category,
  productLocation,
  homePickup,
  sending,
  counterPressed,
  setErrorPhoto,
  setErrorName,
  setErrorDescription,
  setErrorCondition,
  setErrorPrice,
  setErrorWeight,
  setErrorMaterial,
  setErrorCategory,
  setErrorProductLocation,
  setErrorMessage,
  setCounterPressed,
}) => {
  const [textColor, setTextColor] = useState<string>(`${colors.secondary}`);

  console.log("counterPressed : ", counterPressed);
  //Style Publish Button
  const handlePressIn = () => {
    setShadowButton(false);
    setTextColor(colors.white);
  };
  const handlePressOut = () => {
    setShadowButton(true);
    setTextColor(colors.secondary);
  };
  useEffect(() => {
    setIsButtonEnabled(
      handleErrorsScrap(
        photo1,
        name,
        description,
        condition,
        price,
        weight,
        material,
        category,
        homePickup,
        sending,
        productLocation,
        setErrorPhoto,
        setErrorName,
        setErrorDescription,
        setErrorCondition,
        setErrorPrice,
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
      startColor={colors.lightAccent2}
      endColor={colors.white}
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
              pressed || isButtonEnabled ? colors.secondary : colors.white,
          },
        ]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text
          style={[
            fonts.postButton,
            { color: isButtonEnabled ? colors.white : textColor },
          ]}
        >
          PUBLIER
        </Text>
      </Pressable>
    </Shadow>
  );
};
export default PostScrapButton;
