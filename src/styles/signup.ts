import { StyleSheet, Dimensions } from "react-native";
const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;
import ChutesColors from "../styles/colors";
const colors = ChutesColors();
const signup = StyleSheet.create({
  container: { backgroundColor: colors.white },
  //errors
  errors: {
    height: 20,
    width: "100%",
    paddingLeft: 8,
    alignSelf: "flex-start",
  },
});
export default signup;
