import React, { useState, useRef, useEffect, useCallback } from "react";
import { View, Text, Pressable, TextInput as RNTextInput } from "react-native";
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
//styles
import ChutesColors from "../../styles/colors";
const colors = ChutesColors();
import buttons from "../../styles/buttons";
import displays from "../../styles/display";
import signup from "../../styles/signup";
import fonts from "../../styles/fonts";

type MyStackParamList = {
  Profil: undefined;
};

const SignUpScreen: React.FC = () => {
  //navigation
  const navigation =
    useNavigation<NativeStackNavigationProp<MyStackParamList, "Profil">>();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  //Focus & ref
  const usernameRef = useRef<RNTextInput | null>(null);
  const emailRef = useRef<RNTextInput | null>(null);
  const passwordRef = useRef<RNTextInput | null>(null);
  const phoneNumberRef = useRef<RNTextInput | null>(null);
  const addressRef = useRef<RNTextInput | null>(null);
  const cityRef = useRef<RNTextInput | null>(null);
  //errors
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPhoneNumber, setErrorPhoneNumber] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [errorCity, setErrorCity] = useState("");
  //Form
  const [securePassword, setSecurePassword] = useState<boolean>(true);
  const [counterPressed, setCounterPressed] = useState<number>(0);
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);
  const [shadowButton, setShadowButton] = useState<boolean>(true);
  const [iconColor, setIconColor] = useState<string>(colors.disabledDark);

  const register = async () => {
    try {
      const response = await axios.post(`${HOST}/api/scraps/`, {
        username: username,
        email: email,
        password1: password,
        password2: password,
        phone_number: phoneNumber,
        address: address,
        city: city,
      });
      console.log("response.data : ", response.data);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
      if ((error as any).response) {
        console.error("Détails de l’erreur:", (error as any).response.data);
      }
    }
  };
  const handleSubmit = () => {
    const isValidForm = handleErrorsAccount(
      username,
      email,
      password,
      phoneNumber,
      address,
      city,
      setErrorUsername,
      setErrorEmail,
      setErrorPassword,
      setErrorPhoneNumber,
      setErrorAddress,
      setErrorCity
    );
    setInputFocusErrors(
      username,
      email,
      password,
      phoneNumber,
      address,
      city,
      usernameRef,
      emailRef,
      passwordRef,
      phoneNumberRef,
      addressRef,
      cityRef
    );
    if (isValidForm) {
      register;
    }
  };
  useFocusEffect(
    useCallback(() => {
      if (
        counterPressed === 0 &&
        !username &&
        !email &&
        !password &&
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
  const handleIconColor = (status: string) => {
    if (status === "focus") {
      setIconColor(colors.tertiary2);
    } else {
      setIconColor(colors.disabledDark);
    }
  };
  useEffect(() => {
    setIsButtonEnabled(
      handleErrorsAccount(
        username,
        email,
        password,
        phoneNumber,
        address,
        city,
        setErrorUsername,
        setErrorEmail,
        setErrorPassword,
        setErrorPhoneNumber,
        setErrorAddress,
        setErrorCity
      )
    );
  });
  console.log("###########################");
  console.log(username, typeof username);
  console.log(email, typeof email);
  console.log(password, typeof password);
  console.log(phoneNumber, typeof phoneNumber);
  console.log(address, typeof address);
  console.log(city, typeof city);
  console.log(counterPressed);
  console.log("###########################");
  return (
    <KeyboardAwareScrollView style={[displays.white]}>
      <SafeAreaProvider>
        <SafeAreaView style={[displays.w100, displays.aliC]}>
          <View style={[displays.w90, displays.flex, displays.aliC]}>
            <View
              style={{
                height: 50,
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
            <Spacer height={5} />
            <Text style={fonts.createTitle}>Crée un compte</Text>
            <Spacer height={15} />
            <TextInput
              ref={usernameRef}
              mode="outlined"
              label="Nom d'utilisateur"
              textColor={colors.tertiary2}
              cursorColor={colors.tertiary2}
              placeholder=" ex: Cédric89"
              placeholderTextColor={colors.silver}
              value={username}
              // error={errorUsername && counterPressed !== 0 ? true : false}
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
                  emailRef,
                  passwordRef,
                  phoneNumberRef,
                  addressRef,
                  cityRef,
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
              // error={errorEmail ? true : false}
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
                  emailRef,
                  passwordRef,
                  phoneNumberRef,
                  addressRef,
                  cityRef,
                  "password"
                );
              }}
            />
            <View style={signup.errors}>
              {errorEmail && counterPressed !== 0 && (
                <Text style={fonts.errors}>{errorEmail}</Text>
              )}
            </View>
            <TextInput
              ref={passwordRef}
              mode="outlined"
              label="Mot de passe"
              textColor={colors.tertiary2}
              cursorColor={colors.tertiary2}
              placeholder=" 12 caractères minimum"
              placeholderTextColor={colors.silver}
              autoCapitalize="none"
              secureTextEntry={securePassword}
              value={password}
              // error={errorPassword ? true : false}
              onChangeText={setPassword}
              outlineColor={
                errorPassword && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary
              }
              activeOutlineColor={
                errorPassword && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary2
              }
              onFocus={() => handleIconColor("focus")}
              onBlur={() => handleIconColor("blur")}
              right={
                <TextInput.Icon
                  icon={() => (
                    <IconMCI
                      name={securePassword ? "eye-off" : "eye"}
                      size={25}
                      color={
                        errorPassword && counterPressed !== 0
                          ? colors.error
                          : iconColor
                      }
                    />
                  )}
                  onPress={() => {
                    setSecurePassword(!securePassword);
                  }}
                />
              }
              style={{
                width: "100%",
                backgroundColor: colors.white,
              }}
              theme={{
                colors: {
                  primary: errorPassword ? colors.error : colors.tertiary,
                },
              }}
              onSubmitEditing={() => {
                handleFocusOnNextInput(
                  emailRef,
                  passwordRef,
                  phoneNumberRef,
                  addressRef,
                  cityRef,
                  "phoneNumber"
                );
              }}
            />
            <View style={signup.errors}>
              {errorPassword && counterPressed !== 0 && (
                <Text style={fonts.errors}>{errorPassword}</Text>
              )}
            </View>
            <TextInput
              ref={phoneNumberRef}
              mode="outlined"
              label="Numéro de téléphone"
              textColor={colors.tertiary2}
              cursorColor={colors.tertiary2}
              placeholder=" ex: 0753122743"
              placeholderTextColor={colors.silver}
              keyboardType="phone-pad"
              value={phoneNumber}
              multiline={false}
              maxLength={10}
              // error={errorPhoneNumber ? true : false}
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
                  emailRef,
                  passwordRef,
                  phoneNumberRef,
                  addressRef,
                  cityRef,
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
              // error={errorAddress ? true : false}
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
                  emailRef,
                  passwordRef,
                  phoneNumberRef,
                  addressRef,
                  cityRef,
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
              // error={errorCity ? true : false}
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
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                style={({ pressed }) => [
                  buttons.primary,
                  {
                    backgroundColor: pressed
                      ? isButtonEnabled
                        ? colors.tertiary2
                        : colors.white
                      : colors.white,
                  },
                ]}
              >
                <Text
                  style={{
                    color: isButtonEnabled ? colors.white : colors.secondary,
                    textTransform: "uppercase",
                    letterSpacing: 0.4,
                  }}
                >
                  S'INSCRIRE
                </Text>
              </Pressable>
            </Shadow>
            <Spacer height={15} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;
