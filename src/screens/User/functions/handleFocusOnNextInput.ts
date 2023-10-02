import React from "react";
import { TextInput as RNTextInput } from "react-native";

const handleFocusOnNextInput = (
  emailRef: React.RefObject<RNTextInput | null>,
  passwordRef: React.RefObject<RNTextInput | null>,
  phoneNumberRef: React.RefObject<RNTextInput | null>,
  addressRef: React.RefObject<RNTextInput | null>,
  cityRef: React.RefObject<RNTextInput | null>,
  value: string
) => {
  if (value === "email") {
    emailRef.current?.focus();
  }
  if (value === "password") {
    passwordRef.current?.focus();
  }
  if (value === "phoneNumber") {
    phoneNumberRef.current?.focus();
  }
  if (value === "address") {
    addressRef.current?.focus();
  }
  if (value === "city") {
    cityRef.current?.focus();
  }
};
export { handleFocusOnNextInput };
