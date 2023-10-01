import React, { useState, useRef } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";
import { Shadow } from "react-native-shadow-2";
import ChutesColors from "../../styles/colors";
const colors = ChutesColors();
import buttons from "../../styles/buttons";
import { HOST } from "@env";
//navigation
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import displays from "../../styles/display";

type MyStackParamList = {
  Profil: undefined;
};

const SignUpScreen: React.FC = () => {
  //navigation
  const navigation =
    useNavigation<NativeStackNavigationProp<MyStackParamList, "Profil">>();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  //Focus & ref
  //   const scrollViewRef = useRef<ScrollView>(null);
  const usernameRef = useRef<View>(null);
  const emailRef = useRef<View>(null);
  const password1Ref = useRef<View>(null);
  const password2Ref = useRef<View>(null);
  const phoneNumberRef = useRef<View>(null);
  const addressRef = useRef<View>(null);
  const cityRef = useRef<View>(null);
  //errors
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword1, setErrorPassword1] = useState("");
  const [errorPassword2, setErrorPassword2] = useState("");
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
        password: password2,
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
    if (password1) {
      if (password1.length < 10) {
        setErrorPassword1(
          "Votre mot de passe doit comporter au moins 10 caractères"
        );
        isValidForm = false;
      } else {
        setErrorPassword1("");
      }
    } else {
      setErrorPassword1("Champs requis");
      isValidForm = false;
    }
    if (password2) {
      if (password2 !== password1) {
        setErrorPassword2("Les mots de passes doivent être identiques");
        isValidForm = false;
      } else {
        setErrorPassword2("");
      }
    } else {
      setErrorPassword2("Champs requis");
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
  return (
    <View style={[displays.w100, displays.aliC, displays.bord1, displays.flex]}>
      <SafeAreaProvider>
        <SafeAreaView>
          <View
            style={[displays.w95, displays.aliC, displays.bord2, displays.flex]}
          >
            <View
              style={[
                {
                  height: 70,
                  width: "100%",
                  flexDirection: "row",
                },
                displays.bord3,
              ]}
            >
              <View
                style={[
                  { alignItems: "flex-start", justifyContent: "center" },
                  displays.bord2,
                ]}
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

            <TextInput
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
            />
            <TextInput
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
            />
            <TextInput
              mode="outlined"
              label="Mot de passe"
              secureTextEntry
              value={password1}
              onChangeText={setPassword1}
              style={{
                width: "100%",
                backgroundColor: colors.white,
              }}
              theme={{
                colors: {
                  primary: password1
                    ? password1.length <= 30
                      ? colors.tertiary
                      : colors.error
                    : errorPassword1 && counterPressed !== 0
                    ? colors.error
                    : colors.tertiary,
                },
              }}
            />
            <TextInput
              mode="outlined"
              label="Confirmez le mot de passe"
              secureTextEntry
              value={password2}
              onChangeText={setPassword2}
              style={{
                width: "100%",
                backgroundColor: colors.white,
              }}
              theme={{
                colors: {
                  primary: password2
                    ? password2.length <= 30
                      ? colors.tertiary
                      : colors.error
                    : errorPassword2 && counterPressed !== 0
                    ? colors.error
                    : colors.tertiary,
                },
              }}
            />
            <TextInput
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
            />
            <TextInput
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
            />
            <TextInput
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

            {/* Bouton d'inscription */}
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
              style={{ borderRadius: 50, marginTop: 20 }}
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
    </View>
  );
};

export default SignUpScreen;
