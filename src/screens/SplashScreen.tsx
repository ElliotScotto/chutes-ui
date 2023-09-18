import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
const widthScreen = Dimensions.get("window").width;
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
//images
import logo from "../../assets/images/chutes_logo_v5-colors.png";
//styles
import ChutesColors from "../styles/colors";
const colors = ChutesColors();
import buttons from "../styles/buttons";
import displays from "../styles/display";
interface SplashScreenProps {
  title?: string;
  slogan?: string;
}
type MyStackParamList = {
  Splash: undefined;
  Tabs: undefined;
};
export default function SplashScreen({
  title = "CHUTES",
  slogan = "Faites le ménage sur votre établi.",
}: SplashScreenProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<MyStackParamList, "Splash">>();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={logo}
        style={{ width: widthScreen * 0.75, height: 200, opacity: 0.8 }}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={[buttons.primary, displays.bot100]}
        onPress={() => {
          navigation.navigate("Tabs");
        }}
      >
        <Text
          style={{
            color: colors.white,
            fontWeight: "500",
            letterSpacing: 0.4,
            textTransform: "uppercase",
          }}
        >
          Démarrer
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
