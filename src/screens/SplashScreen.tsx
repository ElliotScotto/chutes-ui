import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Shadow } from "react-native-shadow-2";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
const widthScreen = Dimensions.get("window").width;
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
//images
import logo from "../../assets/images/chutes_logo_v5-colors.png";
//styles
import buttons from "../styles/buttons";
import displays from "../styles/display";
import fonts from "../styles/fonts";
import ChutesColors from "../styles/colors";
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
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={logo}
        style={{ width: widthScreen * 0.75, height: 200, opacity: 0.8 }}
        resizeMode="contain"
      />
      <View style={displays.bot100}>
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
          startColor={colors.gainsboro}
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SplashScreen;
