import React, { FC, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
//packages
import { Shadow } from "react-native-shadow-2";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
//navigation
import { useRoute, RouteProp } from "@react-navigation/native";
//types
import {
  MyStackParamList,
  ScrapScreenProps,
} from "../../types/navigationTypes";
//icons
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
import IconFA5 from "react-native-vector-icons/FontAwesome5";
import IconO from "react-native-vector-icons/Octicons";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import IconFe from "react-native-vector-icons/Feather";
import IconE from "react-native-vector-icons/Entypo";
//styles
import displays from "../../styles/display";
import ChutesColors from "../../styles/colors";
import buttons from "../../styles/buttons";
import Spacer from "../../utils/Spacer";
const colors = ChutesColors();
//components
import DeliveryDetails from "./components/DeliveryDetails";
//functions
import { getIconCondition } from "./functions/getIconCondition";
import { changeFavIcon } from "./functions/changeFavIcon";
import fonts from "../../styles/fonts";
type ScrapScreenRouteParams = RouteProp<MyStackParamList, "Scrap">;

const ScrapScreen: FC<ScrapScreenProps> = ({ navigation }) => {
  const route = useRoute<ScrapScreenRouteParams>();
  const item = route.params.item;
  const iconContionNames = getIconCondition(item.condition);
  const [save, setSave] = useState(false);
  {
    console.log(item);
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[displays.flex, displays.white, displays.w100, displays.aliC]}
      >
        <ScrollView>
          <Spacer height={20} />
          <Shadow
            distance={4}
            offset={[0, 0]}
            paintInside={false}
            sides={{ top: false, bottom: true, start: true, end: true }}
            corners={{
              topStart: false,
              topEnd: false,
              bottomStart: true,
              bottomEnd: true,
            }}
            startColor={colors.gainsboro}
            style={[displays.aliC, displays.w95, { borderRadius: 10 }]}
          >
            <LinearGradient
              colors={[colors.lightTertiary, colors.white]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              locations={[0, 1]}
              style={displays.linear}
            />
            <View style={[styles.container, displays.w95]}>
              <View
                style={{
                  height: 80,
                  width: "100%",
                  flexDirection: "row",
                }}
              >
                <View style={{ alignItems: "flex-start" }}>
                  <Pressable
                    style={[buttons.scrapScreenClose]}
                    onPress={() => {
                      navigation.navigate("Home");
                    }}
                  >
                    <IconMCI
                      name="keyboard-backspace"
                      size={40}
                      color={colors.tertiary2}
                    />
                  </Pressable>
                </View>
                <View
                  style={{ flex: 1, alignItems: "flex-end", paddingTop: 20 }}
                >
                  <Pressable
                    onPress={() => {
                      setSave(!save);
                    }}
                  >
                    <IconMCI
                      name={changeFavIcon(save)}
                      size={40}
                      color={colors.tertiary2}
                    />
                  </Pressable>
                </View>
              </View>
              <View style={styles.header}>
                <Text style={styles.title} numberOfLines={2}>
                  {item.name}
                </Text>
              </View>
              <Spacer height={10} />
              <ScrollView
                showsVerticalScrollIndicator={true}
                style={{ flex: 1 }}
              >
                <Text style={styles.description}>{item.description}</Text>
              </ScrollView>
              <Spacer height={10} />
              <View style={styles.detailCondition}>
                {iconContionNames.map((iconName, index) => (
                  <IconMCI
                    key={index}
                    name={iconName}
                    size={20}
                    color={colors.tertiary2}
                    style={{
                      opacity: iconName === "wrench-outline" ? 0.3 : 1,
                    }}
                  />
                ))}
                <Text style={styles.detail}>({item.condition})</Text>
              </View>
              <View style={styles.detailRow}>
                <IconMCI name="tag" size={20} color={colors.tertiary2} />
                <Text style={styles.detail}>
                  {item.price < 14000 ? item.price : "--"} €
                </Text>
              </View>
              <View style={styles.detailRow}>
                <IconMCI name="weight" size={20} color={colors.tertiary2} />
                <Text style={styles.detail}>{item.weight}</Text>
              </View>
              <View style={styles.detailRow}>
                <IconMCI name="details" size={20} color={colors.tertiary2} />
                <Text style={styles.detail}>
                  {item.material.length === 2
                    ? `${item.material[0]}, ${item.material[1]}`
                    : item.material}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <IconSLI name="folder-alt" size={20} color={colors.tertiary2} />
                <Text style={styles.detail}>
                  {item.category.length === 2
                    ? `${item.category[0]}, ${item.category[1]}`
                    : item.category}
                </Text>
              </View>
              <DeliveryDetails item={item} />
              <Text style={styles.ownerTitle}>Propriétaire</Text>
              <View style={styles.detailRow}>
                <IconFe name="user" size={20} color={colors.tertiary2} />
                <Text style={styles.detail}>{item.owner_detail.username}</Text>
              </View>
              <View style={styles.detailRow}>
                <IconFe name="mail" size={20} color={colors.tertiary2} />
                <Text style={[styles.detail, fonts.low]}>
                  {item.owner_detail.email}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <IconFe name="smartphone" size={20} color={colors.tertiary2} />
                <Text style={styles.detail}>
                  {item.owner_detail.phone_number}
                </Text>
              </View>
            </View>
          </Shadow>
          <Spacer height={20} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: colors.tertiary,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    width: "100%",
    color: colors.secondary,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  detailCondition: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    justifyContent: "space-evenly",
  },
  bothDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    justifyContent: "space-evenly",
    overflow: "hidden",
  },
  description: {
    fontSize: 16,
    alignItems: "flex-start",
    overflow: "scroll",
    color: colors.secondary,
  },
  detail: {
    fontSize: 16,
    marginVertical: 5,
    paddingLeft: 5,
    color: colors.secondary,
  },
  ownerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.secondary,
  },
});
export default ScrapScreen;
