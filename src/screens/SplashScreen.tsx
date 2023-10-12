import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Shadow } from "react-native-shadow-2";
import { Text, View, TouchableOpacity, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { version } from "../../package.json";
//images
import logo from "../../assets/images/chutes_logo_v5-colors.png";
//styles
import buttons from "../styles/buttons";
import displays from "../styles/display";
import fonts from "../styles/fonts";
import ChutesColors from "../styles/colors";
import Spacer from "../utils/Spacer";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const colors = ChutesColors();

type MyStackParamList = {
  Splash: undefined;
  Tabs: undefined;
};
const SplashScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MyStackParamList, "Splash">>();
  //Style Publish Button
  const [shadowButton, setShadowButton] = useState<boolean>(true);
  const handlePressIn = () => {
    setShadowButton(false);
  };
  const handlePressOut = () => {
    setShadowButton(true);
  };
  return (
    <SafeAreaProvider style={[displays.flex, displays.aliC, displays.white]}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <View style={[displays.w90, displays.flex, displays.center]}>
          <Image
            source={logo}
            style={[displays.w80, { height: 200, opacity: 0.8 }]}
            resizeMode="contain"
          />
        </View>
        <View style={[displays.w90, displays.center]}>
          <View style={[displays.w75, displays.aliC]}>
            <Text
              style={{
                textAlign: "center",
                color: colors.tertiary2,
                letterSpacing: 0.4,
                textTransform: "uppercase",
                fontSize: 20,
                fontWeight: "700",
              }}
            >
              BIENVENUE
            </Text>
          </View>
          <Spacer height={25} />
          <View style={[displays.w75, displays.aliC]}>
            <Text
              style={{
                textAlign: "center",
                lineHeight: 22,
                color: colors.silver,
                letterSpacing: 0.4,
              }}
            >
              Débarassez-vous de vos surplus de bricolage
            </Text>
          </View>
        </View>
        <View style={[displays.w90, displays.flex, displays.center]}>
          <TouchableOpacity style={[buttons.secondary]}>
            <Text
              style={{
                color: colors.secondary,
                textTransform: "uppercase",
                letterSpacing: 0.4,
              }}
            >
              EXPLORER
            </Text>
          </TouchableOpacity>
          <Spacer height={20} />
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
                navigation.navigate("Tabs");
              }}
              style={[buttons.primary, { backgroundColor: colors.secondary }]}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
            >
              <Text
                style={{
                  color: colors.white,
                  textTransform: "uppercase",
                  letterSpacing: 0.4,
                }}
              >
                DÉMARRER
              </Text>
            </Pressable>
          </Shadow>
        </View>
        <View style={displays.center}>
          <View style={[displays.bot20, { width: "100%" }]}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                color: colors.silver,
                letterSpacing: 0.4,
              }}
            >
              {version}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default SplashScreen;
