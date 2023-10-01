import React, { useState, useRef } from "react";
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
    let isValidForm = true;
    if (username) {
      if (username.length > 35) {
        setErrorUsername("35 caractères maximum");
        isValidForm = false;
      } else {
        setErrorUsername("");
      }
    } else {
      setErrorUsername("Champs requis");
      isValidForm = false;
    }
    if (email) {
      setErrorEmail("");
    } else {
      setErrorEmail("Champs requis");
      isValidForm = false;
    }
    if (password) {
      if (password.length < 10) {
        setErrorPassword(
          "Votre mot de passe doit comporter au moins 10 caractères"
        );
        isValidForm = false;
      } else {
        setErrorPassword("");
      }
    } else {
      setErrorPassword("Champs requis");
      isValidForm = false;
    }

    if (phoneNumber) {
      setPhoneNumber("");
    } else {
      setPhoneNumber("Champs requis");
      isValidForm = false;
    }
    if (address) {
      setErrorAddress("");
    } else {
      setErrorAddress("Champs requis");
      isValidForm = false;
    }
    if (city) {
      setErrorCity("");
    } else {
      setErrorCity("Champs requis");
      isValidForm = false;
    }
    return isValidForm;
  };
  const handleFocusOnNextInput = (value: string) => {
    if (value === "email") {
      emailRef.current?.focus();
    }
    if (value === "password1") {
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
            <Spacer height={10} />
            <Text style={fonts.createTitle}>Crée un compte</Text>
            <Spacer height={10} />
            <TextInput
              ref={usernameRef}
              mode="outlined"
              label="Nom d'utilisateur"
              value={username}
              onChangeText={setUsername}
              error={errorUsername ? true : false}
              multiline={false}
              textAlign="left"
              style={{
                width: "100%",
                backgroundColor: colors.white,
              }}
              theme={{
                colors: {
                  primary: username
                    ? username.length <= 30
                      ? colors.tertiary
                      : colors.error
                    : errorUsername && counterPressed !== 0
                    ? colors.error
                    : colors.tertiary,
                },
              }}
              onSubmitEditing={() => {
                handleFocusOnNextInput("email");
              }}
            />
            <View style={signup.errors}>
              {errorUsername && !username && counterPressed !== 0 && (
                <Text style={fonts.errors}>{errorUsername}</Text>
              )}
            </View>
            <TextInput
              ref={emailRef}
              mode="outlined"
              label="Email"
              value={email}
              onChangeText={setEmail}
              style={{
                width: "100%",
                backgroundColor: colors.white,
              }}
              theme={{
                colors: {
                  primary: email
                    ? email.length <= 30
                      ? colors.tertiary
                      : colors.error
                    : errorEmail && counterPressed !== 0
                    ? colors.error
                    : colors.tertiary,
                },
              }}
              onSubmitEditing={() => {
                handleFocusOnNextInput("password1");
              }}
            />
            <View style={signup.errors}>
              {errorEmail && !email && counterPressed !== 0 && (
                <Text style={fonts.errors}>{errorEmail}</Text>
              )}
            </View>
            <TextInput
              ref={passwordRef}
              mode="outlined"
              label="Mot de passe"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={{
                width: "100%",
                backgroundColor: colors.white,
              }}
              theme={{
                colors: {
                  primary: password
                    ? password.length <= 30
                      ? colors.tertiary
                      : colors.error
                    : errorPassword && counterPressed !== 0
                    ? colors.error
                    : colors.tertiary,
                },
              }}
              onSubmitEditing={() => {
                handleFocusOnNextInput("phoneNumber");
              }}
            />
            <View style={signup.errors}>
              {errorPassword && !password && counterPressed !== 0 && (
                <Text style={fonts.errors}>{errorPassword}</Text>
              )}
            </View>
            <TextInput
              ref={phoneNumberRef}
              mode="outlined"
              label="Numéro de téléphone"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              style={{
                width: "100%",
                backgroundColor: colors.white,
              }}
              theme={{
                colors: {
                  primary: phoneNumber
                    ? phoneNumber.length <= 30
                      ? colors.tertiary
                      : colors.error
                    : errorPhoneNumber && counterPressed !== 0
                    ? colors.error
                    : colors.tertiary,
                },
              }}
              onSubmitEditing={() => {
                handleFocusOnNextInput("address");
              }}
            />
            <View style={signup.errors}>
              {errorPhoneNumber && !phoneNumber && counterPressed !== 0 && (
                <Text style={fonts.errors}>{errorPhoneNumber}</Text>
              )}
            </View>
            <TextInput
              ref={addressRef}
              mode="outlined"
              label="Adresse"
              value={address}
              onChangeText={setAddress}
              style={{
                width: "100%",
                backgroundColor: colors.white,
              }}
              theme={{
                colors: {
                  primary: address
                    ? address.length <= 30
                      ? colors.tertiary
                      : colors.error
                    : errorAddress && counterPressed !== 0
                    ? colors.error
                    : colors.tertiary,
                },
              }}
              onSubmitEditing={() => {
                handleFocusOnNextInput("city");
              }}
            />
            <View style={signup.errors}>
              {errorAddress && !address && counterPressed !== 0 && (
                <Text style={fonts.errors}>{errorAddress}</Text>
              )}
            </View>
            <TextInput
              ref={cityRef}
              mode="outlined"
              label="Ville"
              value={city}
              onChangeText={setCity}
              style={{
                width: "100%",
                backgroundColor: colors.white,
              }}
              theme={{
                colors: {
                  primary: city
                    ? city.length <= 30
                      ? colors.tertiary
                      : colors.error
                    : errorCity && counterPressed !== 0
                    ? colors.error
                    : colors.tertiary,
                },
              }}
            />
            <View style={signup.errors}>
              {errorCity && !city && counterPressed !== 0 && (
                <Text style={fonts.errors}>{errorCity}</Text>
              )}
            </View>
            <Spacer height={30} />
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
                onPress={handleSubmit}
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
