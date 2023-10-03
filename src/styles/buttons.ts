import { StyleSheet, Dimensions } from "react-native";
import ChutesColors from "./colors";
const colors = ChutesColors();
import displays from "./display";
const widthScreen = Dimensions.get("window").width;
const buttons = StyleSheet.create({
  //Main BUTTONS "Démarrez", "Publier"
  primary: {
    width: widthScreen * 0.8,
    justifyContent: "center",
    borderRadius: 50,
    alignItems: "center",
    paddingVertical: 10,
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  secondary: {
    width: widthScreen * 0.8,
    justifyContent: "center",
    borderRadius: 50,
    alignItems: "center",
    paddingVertical: 10,
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  primaryDisabled: {
    width: widthScreen * 0.8,
    justifyContent: "center",
    borderRadius: 50,
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderColor: colors.secondary,
    borderWidth: 1,
  },

  //HomeScreen
  scrapAction: {
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 5,
    borderColor: colors.white,
    borderWidth: 1,
    flex: 1,
    margin: 5,
    flexDirection: "column",
    height: "100%",
  },
  scrapScreenClose: {
    paddingRight: 10,
    paddingVertical: 10,
  },
  //CreateScreen
  //Signup
  signupBack: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
export default buttons;
