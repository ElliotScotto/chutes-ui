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
      borderColor: colors.disabledDark,
      borderWidth: 1,
      borderRadius: 4,
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
  conditionTitle: { alignSelf: "flex-start" },
  conditionTitleFont: {
    fontSize: 16,
    color: colors.secondary,
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
  },
  //Weight
  weightTitle: { alignSelf: "flex-start" },
  weightTitleFont: {
    fontSize: 16,
    color: colors.secondary,
  } as TextStyle,
  modalWeights: {
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 2,
    flexDirection: "row",
  },
  //Materials
  materialContainer: {
    flexDirection: "column",
    height: 230,
  },
  materialTitle: {},
  materialTitleFont: {
    fontSize: 16,
  } as TextStyle,
  materialItemContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  materialCheckButton: {
    flexDirection: "row",
  },
  itemMaterial: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.tertiary2,
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
    paddingHorizontal: 8,
  },
  //Categories
  categoryContainer: {
    flexDirection: "column",
  },
  categoryTitle: {},
  categoryTitleFont: {
    fontSize: 16,
  } as TextStyle,
  categoryItemContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  categoryCheckButton: {
    flexDirection: "row",
  },
  itemCategory: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.orange2,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    paddingHorizontal: 8,
  },
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
