import { StyleSheet, Dimensions } from "react-native";
import ChutesColors from "./colors";
const colors = ChutesColors();
import displays from "./display";
const widthScreen = Dimensions.get("window").width;
const buttons = StyleSheet.create({
  primary: {
    width: widthScreen * 0.8,
    justifyContent: "center",
    borderRadius: 3,
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: colors.primary,
  },
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
});
export default buttons;
