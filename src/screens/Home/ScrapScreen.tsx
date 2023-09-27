import React, { FC, useState } from "react";
import { Text, StyleSheet, View, Pressable, ScrollView } from "react-native";
//packages
import { Shadow } from "react-native-shadow-2";
// import { LinearGradient } from "expo-linear-gradient";
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
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import IconFe from "react-native-vector-icons/Feather";
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
  //Style Publish Button
  const [shadowButton, setShadowButton] = useState<boolean>(true);
  const handlePressIn = () => {
    setShadowButton(false);
  };
  const handlePressOut = () => {
    setShadowButton(true);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          displays.flex,
          displays.white,
          displays.w100,
          displays.aliC,
          displays.bord1,
        ]}
      >
        <ScrollView>
          <View style={styles.container}>
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
              <View style={{ flex: 1, alignItems: "flex-end", paddingTop: 20 }}>
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
            <ScrollView showsVerticalScrollIndicator={true}>
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
          </View>

          <View style={{ width: "100%", marginVertical: 15 }}>
            <DeliveryDetails item={item} />
          </View>
          <View style={styles.container}>
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
            <Spacer height={30} />
            <View style={displays.aliC}>
              <Shadow
                distance={shadowButton ? 4 : 0}
                offset={[0, 0]}
                paintInside={false}
                sides={{ top: true, bottom: true, start: true, end: true }}
                corners={{
                  topStart: true,
                  topEnd: true,
                  bottomStart: true,
                  bottomEnd: true,
                }}
                startColor={colors.gainsboro}
                style={{ borderRadius: 50 }}
              >
                <Pressable
                  onPress={() => {
                    navigation.navigate("Tabs");
                  }}
                  style={[
                    buttons.primary,
                    { backgroundColor: colors.secondary },
                  ]}
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                >
                  <Text
                    style={{
                      color: colors.white,
                      textTransform: "uppercase",
                    }}
                  >
                    CONTACTER
                  </Text>
                </Pressable>
              </Shadow>
            </View>
          </View>
          <Spacer height={30} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
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
