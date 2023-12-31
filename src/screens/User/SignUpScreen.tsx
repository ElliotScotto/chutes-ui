import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput as RNTextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";
import { Shadow } from "react-native-shadow-2";
import { HOST } from "@env";
//navigation
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
//utils
import Spacer from "../../utils/Spacer";
//functions
import { setInputFocusErrors } from "./functions/setInputFocusErrors";
import { handleErrorsAccount } from "./functions/handleErrorsAccount";
import { handleFocusOnNextInput } from "./functions/handleFocusOnNextInput";
import { handleIconColor } from "./functions/handleIconColor";
//styles
import ChutesColors from "../../styles/colors";
const colors = ChutesColors();
import buttons from "../../styles/buttons";
import displays from "../../styles/display";
import signup from "../../styles/signup";
import fonts from "../../styles/fonts";
import ModalSignUp from "./components/ModalSignUp";

type MyStackParamList = {
  Profil: undefined;
  Home: undefined;
};

const SignUpScreen: React.FC = () => {
  //navigation
  const navigation =
    useNavigation<NativeStackNavigationProp<MyStackParamList>>();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  //Focus & ref
  const usernameRef = useRef<RNTextInput | null>(null);
  const emailRef = useRef<RNTextInput | null>(null);
  const password1Ref = useRef<RNTextInput | null>(null);
  const password2Ref = useRef<RNTextInput | null>(null);
  const phoneNumberRef = useRef<RNTextInput | null>(null);
  const addressRef = useRef<RNTextInput | null>(null);
  const cityRef = useRef<RNTextInput | null>(null);
  const signupButtonRef = useRef<TouchableOpacity>(null);
  //errors
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword1, setErrorPassword1] = useState("");
  const [errorPassword2, setErrorPassword2] = useState("");
  const [errorPhoneNumber, setErrorPhoneNumber] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [errorCity, setErrorCity] = useState("");
  //Form
  const [securePassword1, setSecurePassword1] = useState<boolean>(true);
  const [securePassword2, setSecurePassword2] = useState<boolean>(true);
  const [counterPressed, setCounterPressed] = useState<number>(0);
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);
  const [shadowButton, setShadowButton] = useState<boolean>(true);
  const [firstEyeColor, setFirstEyeColor] = useState<string>(
    colors.disabledDark
  );
  const [secondEyeColor, setSecondEyeColor] = useState<string>(
    colors.disabledDark
  );
  //Modal
  const [modalErrorsVisibility, setModalErrorsVisibility] =
    useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalMessage, setModalMessage] = useState<string>("");

  const register = async () => {
    try {
      const response = await axios.post(`${HOST}/api/signup/`, {
        username: username,
        email: email,
        password1: password1,
        password2: password2,
        phone_number: phoneNumber,
        address: address,
        city: city,
      });
      setModalTitle(`Bravo ${username} !`);
      setModalMessage(`${response.data.message}`);
      setModalErrorsVisibility(true);
    } catch (error) {
      if ((error as any).response) {
        // Message received from server
        const errorDetails = (error as any).response.data;
        if (typeof errorDetails === "object" && errorDetails !== null) {
          let firstErrorKey = null;
          let errorMessage = "";
          let errorCount = 0;
          for (const [key, value] of Object.entries(errorDetails)) {
            if (Array.isArray(value)) {
              errorMessage += `⟿ ${value.join("\n")}\n`;
              errorCount += value.length;
              if (!firstErrorKey) {
                firstErrorKey = key;
              }
            }
          }
          const errorCountMessage = `${errorCount} ${
            errorCount === 1 ? "erreur" : "erreurs"
          } à corriger`;
          setModalTitle(errorCountMessage);
          setModalMessage(errorMessage);
          setModalErrorsVisibility(true);
        }
      }
    }
  };
  const handleSubmit = () => {
    const isValidForm = handleErrorsAccount(
      username,
      email,
      password1,
      password2,
      phoneNumber,
      address,
      city,
      setErrorUsername,
      setErrorEmail,
      setErrorPassword1,
      setErrorPassword2,
      setErrorPhoneNumber,
      setErrorAddress,
      setErrorCity
    );
    setInputFocusErrors(
      username,
      email,
      password1,
      password2,
      phoneNumber,
      address,
      city,
      usernameRef,
      emailRef,
      password1Ref,
      password2Ref,
      phoneNumberRef,
      addressRef,
      cityRef
    );
    if (isValidForm) {
      register();
    }
  };
  useFocusEffect(
    useCallback(() => {
      if (
        counterPressed === 0 &&
        !username &&
        !email &&
        !password1 &&
        !password2 &&
        !phoneNumber &&
        !address &&
        !city
      ) {
        usernameRef.current?.focus();
      }
    }, [])
  );
  //Signup Button
  const handlePressIn = () => {
    setShadowButton(false);
  };
  const handlePressOut = () => {
    setShadowButton(true);
  };
  useEffect(() => {
    setIsButtonEnabled(
      handleErrorsAccount(
        username,
        email,
        password1,
        password2,
        phoneNumber,
        address,
        city,
        setErrorUsername,
        setErrorEmail,
        setErrorPassword1,
        setErrorPassword2,
        setErrorPhoneNumber,
        setErrorAddress,
        setErrorCity
      )
    );
  });
  return (
    <KeyboardAwareScrollView style={[displays.white]}>
      <SafeAreaProvider>
        <SafeAreaView style={[displays.w100, displays.aliC]}>
          <ModalSignUp
            title={modalTitle}
            message={modalMessage}
            modalErrorsVisibility={modalErrorsVisibility}
            setModalErrorsVisibility={setModalErrorsVisibility}
          />
          <View style={[displays.w90, displays.flex, displays.aliC]}>
            <View
              style={{
                height: 40,
                width: "100%",
                flexDirection: "row",
              }}
            >
              <View
                style={{ alignItems: "flex-start", justifyContent: "center" }}
              >
                <Pressable
                  style={[buttons.signupBack]}
                  onPress={() => {
                    navigation.navigate("Profil");
                  }}
                >
                  <IconMCI
                    name="keyboard-backspace"
                    size={40}
                    color={colors.tertiary2}
                  />
                </Pressable>
              </View>
            </View>

            <Text style={fonts.titleScreen}>Crée un compte</Text>
            <Spacer height={25} />
            <TextInput
              ref={usernameRef}
              mode="outlined"
              label="Nom d'utilisateur"
              textColor={colors.tertiary2}
              cursorColor={colors.tertiary2}
              placeholder=" ex: Cédric89"
              placeholderTextColor={colors.silver}
              value={username}
              onChangeText={setUsername}
              outlineColor={
                errorUsername && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary
              }
              activeOutlineColor={
                errorUsername && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary2
              }
              multiline={false}
              maxLength={25}
              textAlign="left"
              style={{
                width: "100%",
                backgroundColor: colors.white,
              }}
              theme={{
                colors: {
                  primary: errorUsername ? colors.error : colors.tertiary,
                },
              }}
              onSubmitEditing={() => {
                handleFocusOnNextInput(
                  username,
                  email,
                  password1,
                  password2,
                  phoneNumber,
                  address,
                  city,
                  emailRef,
                  password1Ref,
                  password2Ref,
                  phoneNumberRef,
                  addressRef,
                  cityRef,
                  signupButtonRef,
                  "email"
                );
              }}
            />
            <View style={signup.errors}>
              {errorUsername && counterPressed !== 0 && (
                <Text style={fonts.errors}>{errorUsername}</Text>
              )}
            </View>
            <TextInput
              ref={emailRef}
              mode="outlined"
              label="Email"
              textColor={colors.tertiary2}
              cursorColor={colors.tertiary2}
              placeholder=" ex: cedric.dupont@gmail.com"
              placeholderTextColor={colors.silver}
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              outlineColor={
                errorEmail && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary
              }
              activeOutlineColor={
                errorEmail && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary2
              }
              style={{
                width: "100%",
                backgroundColor: colors.white,
              }}
              theme={{
                colors: {
                  primary: errorEmail ? colors.error : colors.tertiary,
                },
              }}
              onSubmitEditing={() => {
                handleFocusOnNextInput(
                  username,
                  email,
                  password1,
                  password2,
                  phoneNumber,
                  address,
                  city,
                  emailRef,
                  password1Ref,
                  password2Ref,
                  phoneNumberRef,
                  addressRef,
                  cityRef,
                  signupButtonRef,
                  "password1"
                );
              }}
            />
            <View style={signup.errors}>
              {errorEmail && counterPressed !== 0 && (
                <Text style={fonts.errors}>{errorEmail}</Text>
              )}
            </View>
            <TextInput
              ref={password1Ref}
              mode="outlined"
              label="Mot de passe"
              textColor={colors.tertiary2}
              cursorColor={colors.tertiary2}
              placeholder=" 12 caractères minimum"
              placeholderTextColor={colors.silver}
              autoCapitalize="none"
              secureTextEntry={securePassword1}
              value={password1}
              onChangeText={setPassword1}
              outlineColor={
                errorPassword1 && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary
              }
              activeOutlineColor={
                errorPassword1 && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary2
              }
              onFocus={() => {
                handleIconColor(
                  1,
                  "focus",
                  setFirstEyeColor,
                  setSecondEyeColor
                );
              }}
              onBlur={() => {
                handleIconColor(1, "blur", setFirstEyeColor, setSecondEyeColor);
                if (!securePassword1 && !securePassword2) {
                  setSecurePassword1(true);
                  setSecurePassword2(true);
                }
              }}
              right={
                <TextInput.Icon
                  icon={() => (
                    <IconMCI
                      name={securePassword1 ? "eye-off" : "eye"}
                      size={25}
                      color={
                        errorPassword1 && counterPressed !== 0
                          ? colors.error
                          : firstEyeColor
                      }
                    />
                  )}
                  onPress={() => {
                    setSecurePassword1(!securePassword1);
                  }}
                />
              }
              style={{
                width: "100%",
                backgroundColor: colors.white,
              }}
              theme={{
                colors: {
                  primary: errorPassword1 ? colors.error : colors.tertiary,
                },
              }}
              onSubmitEditing={() => {
                handleFocusOnNextInput(
                  username,
                  email,
                  password1,
                  password2,
                  phoneNumber,
                  address,
                  city,
                  emailRef,
                  password1Ref,
                  password2Ref,
                  phoneNumberRef,
                  addressRef,
                  cityRef,
                  signupButtonRef,
                  "password2"
                );
              }}
            />
            <View style={signup.errors}>
              {errorPassword1 && counterPressed !== 0 && (
                <Text style={fonts.errors}>{errorPassword1}</Text>
              )}
            </View>
            <TextInput
              ref={password2Ref}
              mode="outlined"
              label="Confirmation"
              textColor={colors.tertiary2}
              cursorColor={colors.tertiary2}
              placeholder=" Confirmez votre mot de passe"
              placeholderTextColor={colors.silver}
              autoCapitalize="none"
              secureTextEntry={securePassword2}
              value={password2}
              onChangeText={setPassword2}
              outlineColor={
                errorPassword2 && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary
              }
              activeOutlineColor={
                errorPassword2 && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary2
              }
              onFocus={() => {
                handleIconColor(
                  2,
                  "focus",
                  setFirstEyeColor,
                  setSecondEyeColor
                );
              }}
              onBlur={() => {
                handleIconColor(2, "blur", setFirstEyeColor, setSecondEyeColor);
                if (!securePassword1 && !securePassword2) {
                  setSecurePassword1(true);
                  setSecurePassword2(true);
                }
              }}
              right={
                <TextInput.Icon
                  icon={() => (
                    <IconMCI
                      name={securePassword2 ? "eye-off" : "eye"}
                      size={25}
                      color={
                        errorPassword2 && counterPressed !== 0
                          ? colors.error
                          : secondEyeColor
                      }
                    />
                  )}
                  onPress={() => {
                    setSecurePassword2(!securePassword2);
                  }}
                />
              }
              style={{
                width: "100%",
                backgroundColor: colors.white,
              }}
              theme={{
                colors: {
                  primary: errorPassword2 ? colors.error : colors.tertiary,
                },
              }}
              onSubmitEditing={() => {
                handleFocusOnNextInput(
                  username,
                  email,
                  password1,
                  password2,
                  phoneNumber,
                  address,
                  city,
                  emailRef,
                  password1Ref,
                  password2Ref,
                  phoneNumberRef,
                  addressRef,
                  cityRef,
                  signupButtonRef,
                  "phoneNumber"
                );
              }}
            />
            <View style={signup.errors}>
              {errorPassword2 && counterPressed !== 0 && (
                <Text style={fonts.errors}>{errorPassword2}</Text>
              )}
            </View>
            <TextInput
              ref={phoneNumberRef}
              mode="outlined"
              label="Numéro de téléphone"
              keyboardType="phone-pad"
              inputMode="tel"
              textColor={colors.tertiary2}
              cursorColor={colors.tertiary2}
              placeholder=" ex: 0753122743"
              placeholderTextColor={colors.silver}
              value={phoneNumber}
              multiline={false}
              maxLength={10}
              onChangeText={setPhoneNumber}
              outlineColor={
                errorPhoneNumber && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary
              }
              activeOutlineColor={
                errorPhoneNumber && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary2
              }
              style={{
                width: "100%",
                backgroundColor: colors.white,
              }}
              theme={{
                colors: {
                  primary: errorPhoneNumber ? colors.error : colors.tertiary,
                },
              }}
              onSubmitEditing={() => {
                handleFocusOnNextInput(
                  username,
                  email,
                  password1,
                  password2,
                  phoneNumber,
                  address,
                  city,
                  emailRef,
                  password1Ref,
                  password2Ref,
                  phoneNumberRef,
                  addressRef,
                  cityRef,
                  signupButtonRef,
                  "address"
                );
              }}
            />
            <View style={signup.errors}>
              {errorPhoneNumber && counterPressed !== 0 && (
                <Text style={fonts.errors}>{errorPhoneNumber}</Text>
              )}
            </View>
            <TextInput
              ref={addressRef}
              mode="outlined"
              label="Adresse"
              textColor={colors.tertiary2}
              cursorColor={colors.tertiary2}
              placeholder=" ex: 10 Rue Léon Blum"
              placeholderTextColor={colors.silver}
              value={address}
              onChangeText={setAddress}
              outlineColor={
                errorAddress && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary
              }
              activeOutlineColor={
                errorAddress && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary2
              }
              style={{
                width: "100%",
                backgroundColor: colors.white,
              }}
              theme={{
                colors: {
                  primary: errorAddress ? colors.error : colors.tertiary,
                },
              }}
              onSubmitEditing={() => {
                handleFocusOnNextInput(
                  username,
                  email,
                  password1,
                  password2,
                  phoneNumber,
                  address,
                  city,
                  emailRef,
                  password1Ref,
                  password2Ref,
                  phoneNumberRef,
                  addressRef,
                  cityRef,
                  signupButtonRef,
                  "city"
                );
              }}
            />
            <View style={signup.errors}>
              {errorAddress && counterPressed !== 0 && (
                <Text style={fonts.errors}>{errorAddress}</Text>
              )}
            </View>
            <TextInput
              ref={cityRef}
              mode="outlined"
              label="Ville"
              textColor={colors.tertiary2}
              cursorColor={colors.tertiary2}
              placeholder=" ex: Rosny-sur-Seine"
              placeholderTextColor={colors.silver}
              value={city}
              onChangeText={setCity}
              outlineColor={
                errorCity && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary
              }
              activeOutlineColor={
                errorCity && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary2
              }
              style={{
                width: "100%",
                backgroundColor: colors.white,
              }}
              theme={{
                colors: {
                  primary: errorCity ? colors.error : colors.tertiary,
                },
              }}
            />
            <View style={signup.errors}>
              {errorCity && counterPressed !== 0 && (
                <Text style={fonts.errors}>{errorCity}</Text>
              )}
            </View>
            <Spacer height={15} />
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
                ref={signupButtonRef}
                onPress={() => {
                  handleSubmit();
                  setCounterPressed(counterPressed + 1);
                }}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                style={[
                  buttons.primary,
                  {
                    backgroundColor: isButtonEnabled
                      ? colors.tertiary
                      : colors.white,
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
                  S'INSCRIRE
                </Text>
              </TouchableOpacity>
            </Shadow>
            <Spacer height={15} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;
