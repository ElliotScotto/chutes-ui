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
  low: { textTransform: "lowercase" },
  //card1
  scrapName: {
    color: colors.primary,
    fontSize: 16,
    letterSpacing: 0.3,
    fontWeight: "500",
  },
  scrapDetails: {
    color: colors.tertiary2,
    fontSize: 14,
    letterSpacing: 0.3,
  },
  //card2
  scrapDetails2: {
    color: colors.white,
    fontSize: 14,
    letterSpacing: 0.3,
  },
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
  contactEmail: {
    color: colors.primary,
    fontSize: 14,
    textTransform: "lowercase",
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
  detailDelivery: {
    fontSize: 16,
    marginVertical: 5,
    paddingLeft: 5,
    color: colors.lightAccent,
    letterSpacing: 0.3,
  },
  //signup
  errors: { color: colors.error, fontSize: 12, letterSpacing: 0.4 },
});
export default fonts;
