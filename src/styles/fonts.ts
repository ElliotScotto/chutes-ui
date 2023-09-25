import { StyleSheet, Dimensions } from "react-native";
import ChutesColors from "../styles/colors";
const colors = ChutesColors();
const fonts = StyleSheet.create({
  //BUTTONS : "démarrer", "publier"
  primary: {
    // color: colors.white,
    fontWeight: "500",
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },
  primaryDisabled: {
    // color: colors.secondary,
    fontWeight: "500",
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },
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
  //CreateScreen
  createTitle: {
    fontSize: 20,
    color: colors.tertiary,
    textTransform: "uppercase",
    fontWeight: "500",
  },
  conditions: { marginVertical: 10, fontSize: 16, color: colors.secondary },
  weights: { marginVertical: 10, fontSize: 16, color: colors.secondary },
  categories: { marginVertical: 10, fontSize: 16, color: colors.secondary },
  homePickup: { fontSize: 16, color: colors.secondary },
  productLocation: {
    fontSize: 16,
    color: colors.tertiary2,
  },
});
export default fonts;
