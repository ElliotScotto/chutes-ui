import { StyleSheet, Dimensions } from "react-native";
import ChutesColors from "../styles/colors";
const colors = ChutesColors();
const fonts = StyleSheet.create({
  //card1
  scrapName: {
    color: colors.primary,
    fontSize: 16,
    letterSpacing: 0.4,
  },
  scrapDetails: {
    color: colors.primary,
    fontSize: 14,
    textTransform: "capitalize",
    letterSpacing: 0.3,
  },
  //card2
  dimensions: {
    color: colors.white,
    fontSize: 16,
    letterSpacing: 0.4,
  },
  dimensionsDetails: {
    color: colors.white,
    fontSize: 14,
    textTransform: "capitalize",
  },
  //card3
  contact: {
    color: colors.primary,
    fontSize: 16,
    letterSpacing: 0.4,
  },
  contactDetails: {
    color: colors.primary,
    fontSize: 14,
    textTransform: "capitalize",
  },
  //card4
  details: {
    color: colors.white,
    fontSize: 14,
    letterSpacing: 0.3,
  },
  save: {
    color: colors.white,
    fontSize: 14,
    letterSpacing: 0.3,
  },
  buy: {
    color: colors.white,
    fontSize: 14,
    letterSpacing: 0.3,
  },
});
export default fonts;
