import { StyleSheet, DimensionValue, ViewStyle } from "react-native";
import ChutesColors from "../styles/colors";
const colors = ChutesColors();
const modals = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: colors.white,
    borderColor: colors.lightAccent2,
    borderWidth: 1,
    paddingVertical: 50,

    width: "100%",
    alignItems: "center",
    shadowColor: colors.tertiary2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  modal: {
    backgroundColor: colors.white,
  },
  option: {
    backgroundColor: colors.lightTertiary,
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: colors.scrapBord,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    margin: 10,
    flexDirection: "row",
  },
  text: { fontSize: 16, color: colors.tertiary2 },
  linear: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%" as DimensionValue,
    opacity: 0.95,
  } as ViewStyle,
});
export default modals;
