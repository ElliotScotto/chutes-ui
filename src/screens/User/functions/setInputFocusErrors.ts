import React from "react";
import { TextInput as RNTextInput } from "react-native";
import { isValidUsername } from "./validateUsername";
import { isValidEmail } from "./validateEmail";
import { isValidPhoneNumber } from "./validatePhoneNumber";

const setInputFocusErrors = (
  username: string,
  email: string,
  password1: string,
  password2: string,
  phoneNumber: string,
  address: string,
  city: string,
  usernameRef: React.RefObject<RNTextInput | null>,
  emailRef: React.RefObject<RNTextInput | null>,
  password1Ref: React.RefObject<RNTextInput | null>,
  password2Ref: React.RefObject<RNTextInput | null>,
  phoneNumberRef: React.RefObject<RNTextInput | null>,
  addressRef: React.RefObject<RNTextInput | null>,
  cityRef: React.RefObject<RNTextInput | null>
) => {
  if (!username) {
    usernameRef.current?.focus();
  } else if (username && !isValidUsername(username)) {
    usernameRef.current?.focus();
  } else if (!email) {
    emailRef.current?.focus();
  } else if (email && !isValidEmail(email)) {
    emailRef.current?.focus();
  } else if (!password1) {
    password1Ref.current?.focus();
  } else if (password1 && password1.length < 12) {
    password1Ref.current?.focus();
  } else if (!phoneNumber) {
    phoneNumberRef.current?.focus();
  } else if (phoneNumber && !isValidPhoneNumber(phoneNumber)) {
    phoneNumberRef.current?.focus();
  } else if (!address) {
    addressRef.current?.focus();
  } else if (!city) {
    cityRef.current?.focus();
  }
};
export { setInputFocusErrors };
