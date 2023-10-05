import { Dimensions, ViewStyle, TextStyle } from "react-native";
const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;
import ChutesColors from "./colors";
const colors = ChutesColors();
type StyleDictionary = {
  [key: string]: ViewStyle | TextStyle;
};
const displays: StyleDictionary = {
  center: { alignItems: "center", justifyContent: "center" },
  aliC: { alignItems: "center" },
  flex: { flex: 1 },
  row: { flexDirection: "row" },
  col: { flexDirection: "column" },
  w100: { width: widthScreen * 1 },
  w95L: { width: widthScreen * 0.95 + 1.5 },
  w95: { width: widthScreen * 0.95 },
  w90: { width: widthScreen * 0.9 },
  w80: { width: widthScreen * 0.8 },
  w75: { width: widthScreen * 0.75 },
  white: { backgroundColor: colors.white },
  bot100: { position: "absolute", bottom: 100 },
  bot20: { position: "absolute", bottom: 20 },
  searchBar: {
    height: 60,
    width: "100%",
    backgroundColor: colors.white,
    borderColor: colors.tertiary,
    borderWidth: 1,
    flexDirection: "row",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  searchItem: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  searchInputItem: {
    flex: 1,
    height: "95%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.tertiary,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  searchInputStyle: {
    textAlign: "left",
    width: "100%",
    paddingHorizontal: 5,
    fontSize: 16,
    color: colors.tertiary,
  },
  bordPrimary: { borderWidth: 1, borderColor: colors.primary },
  bordlightAccent: {
    borderWidth: 1,
    borderColor: colors.lightAccent,
    borderTopLeftRadius: 5,
  },
  bord1: { borderWidth: 1, borderColor: "black" },
  bord2: { borderWidth: 1, borderColor: "red" },
  bord3: { borderWidth: 1, borderColor: "green" },
  bord4: { borderWidth: 1, borderColor: "blue" },
  bord5: { borderWidth: 1, borderColor: "goldenrod" },
  //HOMESCREEN
  safeContainer: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
  },
  mainContainer: {
    alignItems: "center",
    height: "100%",
    width: widthScreen * 0.95,
  },
  //wrapper
  wrapper: {
    height: 110 + 6,
  },
  //Scrap Card list
  card: {
    width: widthScreen * 0.95,
    height: 110 + 4,
    overflow: "hidden",
    alignItems: "center",
  },
  //card1
  scrapCard: {
    height: 110,
    width: widthScreen * 0.95,
    flexDirection: "column",
    borderWidth: 1,
    borderColor: colors.scrapBord,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    overflow: "hidden",
  },
  scrapCardTop: { flexDirection: "row", flex: 1 },
  scrapCardLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 5,
  },
  scrapCardRight: { flex: 4, flexDirection: "column" },
  scrapCardRightContent: { flex: 1 },
  scrapCardRightContentTop: { flex: 1, justifyContent: "center" },
  scrapCardRightContentMiddle: {
    flex: 2,
    flexDirection: "row",
    paddingLeft: 3,
  },
  scrapCardRightContentMiddleLeft: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  //card2
  scrapCard2: {
    height: 110,
    width: widthScreen * 0.95,
    flexDirection: "column",
    backgroundColor: colors.secondary,
    overflow: "hidden",
  },
  scrapCard2Title: {
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  scrapCard2Content: { flexDirection: "row", flex: 1, paddingTop: 5 },
  scrapCard2ContentLeft: {
    flex: 1,
    paddingLeft: 70,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    // borderColor: colors.white,
    // borderWidth: 1,
  },
  scrapCard2ContentRight: {
    // flex: 1,
    // paddingLeft: 10,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  //card3
  scrapCard3: {
    height: 110,
    width: widthScreen * 0.95,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.scrapBord,
    overflow: "hidden",
  },
  scrapCard3Left: {
    flex: 2,
    justifyContent: "center",
  },
  scrapCard3LeftTitle: {
    alignItems: "flex-start",
    paddingTop: 2,
    paddingLeft: 8,
  },
  scrapCard3LeftContentLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrapCard3LeftContentRight: {
    flex: 3,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  scrapCard3Right: {
    flex: 1,
    justifyContent: "space-between",
    padding: 5,
  },
  //card4
  scrapCard4: {
    height: 110,
    width: widthScreen * 0.95,
    flexDirection: "row",
    backgroundColor: colors.tertiary,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
  },
  //arrowSlide
  scrapCardBottom: {
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  ArrowContainer: {
    width: "100%",
    position: "relative",
    height: 22,
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  arrowContainerTop: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 0.5,
  },
  arrowContainerBottom: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderTopWidth: 0.5,
  },

  arrowLine: { justifyContent: "center", flex: 1, flexDirection: "column" },
  arrow: { position: "absolute", right: -6 },
  //SCRAPSCREEN
  scrapScreenContainer: {
    width: widthScreen * 0.95,
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
  },
  displayDetailsProduct: { flexDirection: "row" },
  fontTitle: { fontWeight: "bold", marginRight: 5 },
  picturesScrap: { width: 250, height: 250 },
  linearModal: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    opacity: 0.7,
  },
};
export default displays;
