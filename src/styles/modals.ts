import { StyleSheet, Dimensions } from "react-native";
import ChutesColors from "../styles/colors";
const colors = ChutesColors();
const modals = StyleSheet.create({
  //ModalConditionPicker
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: colors.white,
  },
  option: {
    alignItems: "flex-start",
    borderColor: colors.tertiary,
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  text: { fontSize: 16, color: colors.secondary },
});
export default modals;
