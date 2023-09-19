import { StyleSheet, Dimensions } from "react-native";
const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;
import ChutesColors from "../styles/colors";
const colors = ChutesColors();
const scrapCreation = StyleSheet.create({
  //Condition
  conditionTitle: { alignSelf: "flex-start" },
  conditionTitleFont: {
    fontSize: 16,
    color: colors.secondary,
  },
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
  },
  modalWeights: {
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 2,
    flexDirection: "row",
  },
  //Materials
  materialContainer: {
    flexDirection: "column",
  },
  materialTitle: {},
  materialTitleFont: {
    fontSize: 16,
    color: colors.secondary,
  },
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
    borderColor: colors.tertiary,
    borderWidth: 1,
    borderRadius: 20,
    margin: 6,
    paddingVertical: "auto",
    paddingHorizontal: 10,
  },
});
export default scrapCreation;
