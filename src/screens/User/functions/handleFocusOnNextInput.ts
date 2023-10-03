import React from "react";
import { TextInput as RNTextInput, TouchableOpacity } from "react-native";

const handleFocusOnNextInput = (
  username: string,
  email: string,
  password1: string,
  password2: string,
  phoneNumber: string,
  address: string,
  city: string,
  emailRef: React.RefObject<RNTextInput | null>,
  password1Ref: React.RefObject<RNTextInput | null>,
  password2Ref: React.RefObject<RNTextInput | null>,
  phoneNumberRef: React.RefObject<RNTextInput | null>,
  addressRef: React.RefObject<RNTextInput | null>,
  cityRef: React.RefObject<RNTextInput | null>,
  signupButtonRef: React.RefObject<TouchableOpacity>,
  value: string
) => {
  if (
    !username ||
    !email ||
    !password1 ||
    !password2 ||
    !phoneNumber ||
    !address ||
    !city
  ) {
    if (value === "email") {
      emailRef.current?.focus();
    }
    if (value === "password1") {
      password1Ref.current?.focus();
    }
    if (value === "password2") {
      password2Ref.current?.focus();
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
  } else if (
    username &&
    email &&
    password1 &&
    password2 &&
    phoneNumber &&
    address &&
    city
  ) {
    signupButtonRef.current?.focus();
  }
};
export { handleFocusOnNextInput };
