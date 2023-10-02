import React, { useState, useRef, useEffect } from "react";
import { View, Text, Pressable, TextInput as RNTextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";
import { Shadow } from "react-native-shadow-2";
import { HOST } from "@env";
//navigation
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
//utils
import Spacer from "../../utils/Spacer";
//functions
import { isValidEmail } from "./functions/validateEmail";
import { isValidUsername } from "./functions/validateUsername";
import { isValidPhoneNumber } from "./functions/validatePhoneNumber";
import { setInputFocusErrors } from "./functions/setInputFocusErrors";
//styles
import ChutesColors from "../../styles/colors";
const colors = ChutesColors();
import buttons from "../../styles/buttons";
import displays from "../../styles/display";
import signup from "../../styles/signup";
import fonts from "../../styles/fonts";
import { handleErrorsAccount } from "./functions/handleErrorsAccount";

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
  //   const scrollViewRef = useRef<ScrollView>(null);
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

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${HOST}/api/scraps/`, {
        username: username,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
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
  };
  useEffect(() => {
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
  });
  const handleFocusOnNextInput = (value: string) => {
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
              value={username}
              error={errorUsername ? true : false}
              onChangeText={setUsername}
              outlineColor={errorUsername ? colors.error : colors.tertiary}
              activeOutlineColor={
                errorUsername ? colors.error : colors.tertiary2
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
                handleFocusOnNextInput("email");
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
              autoCapitalize="none"
              value={email}
              error={errorEmail ? true : false}
              onChangeText={setEmail}
              outlineColor={errorEmail ? colors.error : colors.tertiary}
              activeOutlineColor={errorEmail ? colors.error : colors.tertiary2}
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
                handleFocusOnNextInput("password");
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
              secureTextEntry={securePassword}
              value={password}
              error={errorPassword ? true : false}
              onChangeText={setPassword}
              outlineColor={errorPassword ? colors.error : colors.tertiary}
              activeOutlineColor={
                errorPassword ? colors.error : colors.tertiary2
              }
              right={
                <TextInput.Icon
                  icon={() => (
                    <IconMCI
                      name={securePassword ? "eye-off" : "eye"}
                      size={25}
                      color={colors.tertiary2}
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
                handleFocusOnNextInput("phoneNumber");
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
              keyboardType="phone-pad"
              value={phoneNumber}
              multiline={false}
              maxLength={10}
              error={errorPhoneNumber ? true : false}
              onChangeText={setPhoneNumber}
              outlineColor={errorPhoneNumber ? colors.error : colors.tertiary}
              activeOutlineColor={
                errorPhoneNumber ? colors.error : colors.tertiary2
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
                handleFocusOnNextInput("address");
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
              value={address}
              error={errorAddress ? true : false}
              onChangeText={setAddress}
              outlineColor={errorAddress ? colors.error : colors.tertiary}
              activeOutlineColor={
                errorAddress ? colors.error : colors.tertiary2
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
                handleFocusOnNextInput("city");
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
              value={city}
              error={errorCity ? true : false}
              onChangeText={setCity}
              outlineColor={errorCity ? colors.error : colors.tertiary}
              activeOutlineColor={errorCity ? colors.error : colors.tertiary2}
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
              distance={4}
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
            >
              <Pressable
                onPress={() => {
                  handleSubmit();
                  setCounterPressed(counterPressed + 1);
                }}
                style={[buttons.primary, { backgroundColor: colors.secondary }]}
              >
                <Text
                  style={{ color: colors.white, textTransform: "uppercase" }}
                >
                  S'INSCRIRE
                </Text>
              </Pressable>
            </Shadow>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;