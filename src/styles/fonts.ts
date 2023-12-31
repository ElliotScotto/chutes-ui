import { ViewStyle, TextStyle } from "react-native";
//styles
import ChutesColors from "../styles/colors";
const colors = ChutesColors();
//types
import { PhotoStyles } from "../types/inputProps";
const fonts = {
  //BUTTONS : "démarrer", "publier"
  primary: {
    // color: colors.white,
    fontWeight: "500",
    letterSpacing: 0.4,
    textTransform: "uppercase",
  } as TextStyle,
  primaryDisabled: {
    // color: colors.secondary,
    fontWeight: "500",
    letterSpacing: 0.4,
    textTransform: "uppercase",
  } as TextStyle,
  low: { textTransform: "lowercase" } as TextStyle,
  cap: { textTransform: "capitalize" } as TextStyle,
  up: { textTransform: "uppercase" } as TextStyle,
  //card1
  scrapName: {
    color: colors.primary,
    fontSize: 16,
    letterSpacing: 0.3,
    fontWeight: "500",
  } as TextStyle,
  scrapDetails: {
    color: colors.tertiary2,
    fontSize: 14,
    letterSpacing: 0.3,
  } as TextStyle,
  //card2
  scrapDetails2: {
    color: colors.white,
    fontSize: 14,
    letterSpacing: 0.3,
  } as TextStyle,
  dimensions: {
    color: colors.white,
    fontSize: 16,
    letterSpacing: 0.4,
  } as TextStyle,
  dimensionsDetails: {
    color: colors.white,
    fontSize: 14,
    textTransform: "capitalize",
  } as TextStyle,
  //card3
  contact: {
    color: colors.primary,
    fontSize: 16,
    letterSpacing: 0.4,
  } as TextStyle,
  contactDetails: {
    color: colors.primary,
    fontSize: 14,
    textTransform: "capitalize",
  } as TextStyle,
  contactEmail: {
    color: colors.primary,
    fontSize: 14,
    textTransform: "lowercase",
  } as TextStyle,
  //card4
  details: {
    color: colors.white,
    fontSize: 14,
    letterSpacing: 0.3,
  } as TextStyle,
  save: {
    color: colors.white,
    fontSize: 14,
    letterSpacing: 0.3,
  } as TextStyle,
  buy: {
    color: colors.white,
    fontSize: 14,
    letterSpacing: 0.3,
  } as TextStyle,
  //ScrapScreen
  section: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.secondary,
  } as TextStyle,
  //CreateScreen
  titleScreen: {
    fontSize: 20,
    color: colors.tertiary,
    textTransform: "uppercase",
    fontWeight: "500",
  } as TextStyle,
  photo: {
    label: {
      fontSize: 16,
      color: colors.tertiary,
      paddingLeft: 15,
      paddingBottom: 10,
    } as TextStyle,
    item: { fontSize: 14, color: colors.tertiary },
  } as PhotoStyles,
  conditionsUnfilled: {
    marginVertical: 10,
    fontSize: 15,
    color: colors.disabledDark,
  } as TextStyle,
  conditionsFilled: {
    marginVertical: 10,
    fontSize: 16,
    color: colors.tertiary2,
  } as TextStyle,
  weightsUnfilled: {
    marginVertical: 10,
    fontSize: 15,
    color: colors.disabledDark,
  } as TextStyle,
  weightsFilled: {
    marginVertical: 10,
    fontSize: 16,
    color: colors.tertiary2,
  } as TextStyle,
  categories: {
    marginVertical: 10,
    fontSize: 16,
    color: colors.secondary,
  } as TextStyle,
  homePickup: { fontSize: 16, color: colors.secondary },
  productLocation: {
    fontSize: 16,
    color: colors.tertiary2,
  } as TextStyle,
  detailDelivery: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.tertiary2,
    opacity: 1,
    textAlign: "center",
  } as TextStyle,
  postButton: {
    textTransform: "uppercase",
    letterSpacing: 0.4,
  } as TextStyle,
  //signup
  errors: {
    color: colors.error,
    fontSize: 12,
    letterSpacing: 0.4,
  } as TextStyle,
};
export default fonts;
