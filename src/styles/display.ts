import { Dimensions, ViewStyle, TextStyle, DimensionValue } from "react-native";
const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;
import ChutesColors from "./colors";
const colors = ChutesColors();
type StyleDictionary = {
  [key: string]: ViewStyle | TextStyle;
};
const displays = {
  center: { alignItems: "center", justifyContent: "center" } as ViewStyle,
  aliC: { alignItems: "center" } as ViewStyle,
  flex: { flex: 1 },
  row: { flexDirection: "row" } as ViewStyle,
  col: { flexDirection: "column" } as ViewStyle,
  w100: { width: widthScreen * 1 },
  w95L: { width: widthScreen * 0.95 + 1.5 },
  w95: { width: widthScreen * 0.95 },
  w90: { width: widthScreen * 0.9 },
  w80: { width: widthScreen * 0.8 },
  w75: { width: widthScreen * 0.75 } as ViewStyle,
  white: { backgroundColor: colors.white },
  peru: { backgroundColor: colors.peru },
  bot100: { position: "absolute", bottom: 100 } as ViewStyle,
  bot20: { position: "absolute", bottom: 20 } as ViewStyle,
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
  } as ViewStyle,
  mainContainer: {
    alignItems: "center",
    height: "100%",
    width: widthScreen * 0.95,
  } as ViewStyle,
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
  } as ViewStyle,
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
  } as ViewStyle,
  scrapCardTop: { flexDirection: "row", flex: 1 } as ViewStyle,
  scrapCardLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 5,
  } as ViewStyle,
  scrapCardRight: { flex: 4, flexDirection: "column" } as ViewStyle,
  scrapCardRightContent: { flex: 1 } as ViewStyle,
  scrapCardRightContentTop: { flex: 1, justifyContent: "center" } as ViewStyle,
  scrapCardRightContentMiddle: {
    flex: 2,
    flexDirection: "row",
    paddingLeft: 3,
  } as ViewStyle,
  scrapCardRightContentMiddleLeft: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-evenly",
  } as ViewStyle,
  //card2
  scrapCard2: {
    height: 110,
    width: widthScreen * 0.95,
    flexDirection: "column",
    backgroundColor: colors.secondary,
    overflow: "hidden",
  } as ViewStyle,
  scrapCard2Title: {
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  } as ViewStyle,
  scrapCard2Content: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 5,
  } as ViewStyle,
  scrapCard2ContentLeft: {
    flex: 1,
    paddingLeft: 70,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    // borderColor: colors.white,
    // borderWidth: 1,
  } as ViewStyle,
  scrapCard2ContentRight: {
    // flex: 1,
    // paddingLeft: 10,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  } as ViewStyle,
  //card3
  scrapCard3: {
    height: 110,
    width: widthScreen * 0.95,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.scrapBord,
    overflow: "hidden",
  } as ViewStyle,
  scrapCard3Left: {
    flex: 2,
    justifyContent: "center",
  } as ViewStyle,
  scrapCard3LeftTitle: {
    alignItems: "flex-start",
    paddingTop: 2,
    paddingLeft: 8,
  } as ViewStyle,
  scrapCard3LeftContentLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  scrapCard3LeftContentRight: {
    flex: 3,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingLeft: 5,
  } as ViewStyle,
  scrapCard3Right: {
    flex: 1,
    justifyContent: "space-between",
    padding: 5,
  } as ViewStyle,
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
  } as ViewStyle,
  //arrowSlide
  scrapCardBottom: {
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
  } as ViewStyle,
  ArrowContainer: {
    width: "100%",
    position: "relative",
    height: 22,
    flexDirection: "row",
    paddingHorizontal: 5,
  } as ViewStyle,
  arrowContainerTop: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 0.5,
  } as ViewStyle,
  arrowContainerBottom: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderTopWidth: 0.5,
  } as ViewStyle,

  arrowLine: {
    justifyContent: "center",
    flex: 1,
    flexDirection: "column",
  } as ViewStyle,
  arrow: { position: "absolute", right: -6 } as ViewStyle,
  //SCRAPSCREEN
  scrapScreenContainer: {
    width: widthScreen * 0.95,
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
  } as ViewStyle,
  displayDetailsProduct: { flexDirection: "row" } as ViewStyle,
  fontTitle: { fontWeight: "bold", marginRight: 5 } as TextStyle,
  picturesScrap: { width: 250, height: 250 },
  linearModal: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%" as DimensionValue,
    opacity: 0.7,
  } as ViewStyle,
};
export default displays;
