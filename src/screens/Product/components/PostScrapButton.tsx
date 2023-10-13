import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
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
  publishButtonRef,
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
  setErrorMessage,
  setCounterPressed,
}) => {
  //Style Publish Button
  const handlePressIn = () => {
    setShadowButton(false);
  };
  const handlePressOut = () => {
    setShadowButton(true);
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
        setErrorPhoto,
        setErrorName,
        setErrorDescription,
        setErrorCondition,
        setErrorPrice,
        setErrorWeight,
        setErrorMaterial,
        setErrorCategory,
        setErrorMessage
      )
    );
  });
  return (
    <Shadow
      distance={shadowButton ? 3 : 0}
      offset={[0, 0]}
      paintInside={false}
      sides={{ top: true, bottom: true, start: true, end: true }}
      corners={{
        topStart: true,
        topEnd: true,
        bottomStart: true,
        bottomEnd: true,
      }}
      startColor={colors.gainsboro}
      endColor={colors.white}
      style={{ borderRadius: 50 }}
    >
      <TouchableOpacity
        ref={publishButtonRef}
        onPress={() => {
          handleSubmit();
          setCounterPressed(counterPressed + 1);
        }}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[
          buttons.primary,
          {
            backgroundColor: isButtonEnabled ? colors.tertiary : colors.white,
          },
        ]}
      >
        <Text
          style={{
            color: isButtonEnabled ? colors.white : colors.tertiary,
            textTransform: "uppercase",
            letterSpacing: 0.4,
          }}
        >
          PUBLIER
        </Text>
      </TouchableOpacity>
    </Shadow>
  );
};
export default PostScrapButton;
