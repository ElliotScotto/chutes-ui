import { ViewStyle, TextStyle, Dimensions, DimensionValue } from "react-native";
const widthScreen = Dimensions.get("window").height;
//styles
import ChutesColors from "../styles/colors";
const colors = ChutesColors();
//types
import { TextInputStyles, PhotoStyles } from "../types/inputProps";

const scrapCreation = {
  photo: {
    main: { flex: 1, width: "100%" as DimensionValue },
    secondary: { flex: 1, width: "100%" as DimensionValue, marginTop: 12 },
    container: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    buttons: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      paddingVertical: 8,
      paddingHorizontal: 4,
      backgroundColor: colors.white,
      borderWidth: 1,
      borderRadius: 4,
      overflow: "hidden",
    },
    thumbnail: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      backgroundColor: colors.white,
      // borderWidth: 1,
      // borderRadius: 4,
      overflow: "hidden",
    },
    removeButton: {
      height: "100%" as DimensionValue,
      width: 40 as DimensionValue,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      marginLeft: 5,
      backgroundColor: colors.white,
    },
  } as PhotoStyles,
  inputs: {
    name: {
      width: "100%",
      backgroundColor: colors.white,
    },
    description: {
      width: "100%",
      height: 150,
      backgroundColor: colors.white,
    },
    price: { width: "100%", backgroundColor: colors.white },
  } as TextInputStyles,
  //Condition
  conditionTitle: { alignSelf: "flex-start", paddingLeft: 15 } as ViewStyle,
  conditionTitleFont: {
    fontSize: 16,
    color: colors.tertiary,
    fontWeight: "500",
  } as TextStyle,
  modalConditions: {
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 2,
    flexDirection: "row",
  } as ViewStyle,
  //Weight
  weightTitle: {
    alignSelf: "flex-start",
    paddingLeft: 15,
    fontWeight: "500",
  } as ViewStyle,
  weightTitleFont: {
    color: colors.tertiary,
    fontSize: 16,
    fontWeight: "500",
  } as TextStyle,
  modalWeights: {
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 2,
    flexDirection: "row",
  } as ViewStyle,
  //Materials
  materialContainer: {
    flexDirection: "column",
  } as ViewStyle,
  materialTitle: { paddingLeft: 15 },
  materialTitleFont: {
    color: colors.tertiary,
    fontSize: 16,
    fontWeight: "500",
  } as TextStyle,
  materialItemContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  } as ViewStyle,
  materialItemFont: {
    fontSize: 16,
  } as TextStyle,
  materialCheckButton: {
    flexDirection: "row",
  } as ViewStyle,
  itemMaterial: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.tertiary2,
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
    paddingHorizontal: 8,
  } as ViewStyle,
  //Categories
  categoryContainer: {
    flexDirection: "column",
  } as ViewStyle,
  categoryTitle: { paddingLeft: 15 },
  categoryTitleFont: {
    color: colors.tertiary,
    fontSize: 16,
    fontWeight: "500",
  } as TextStyle,
  categoryItemContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  } as ViewStyle,
  categoryItemFont: {
    fontSize: 16,
  } as TextStyle,
  categoryCheckButton: {
    flexDirection: "row",
  } as ViewStyle,
  itemCategory: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.orange2,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    paddingHorizontal: 8,
  } as ViewStyle,
  //Product Location
  productLocationTitle: { alignSelf: "flex-start" },
  //errors
  errors: {
    height: 18,
    width: "100%",
    marginTop: 2,
    paddingLeft: 8,
    alignSelf: "flex-start",
  } as ViewStyle,
};
export default scrapCreation;
