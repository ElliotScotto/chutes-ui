import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from "react-native";
import ChutesColors from "../../../styles/colors";
const colors = ChutesColors();
const Loading: React.FC = () => (
  <View style={styles.container}>
    <ActivityIndicator size="small" color={colors.secondary} />
  </View>
);
const heightScreen = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    height: heightScreen / 2,
    justifyContent: "center",
  },
});

export default Loading;
