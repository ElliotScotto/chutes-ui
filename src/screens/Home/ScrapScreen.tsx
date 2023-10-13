import React, { FC, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
//env
import { HOST } from "@env";
//packages
import { Shadow } from "react-native-shadow-2";
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
import IconFA5 from "react-native-vector-icons/FontAwesome5";
//styles
import displays from "../../styles/display";
import ChutesColors from "../../styles/colors";
import buttons from "../../styles/buttons";
import Spacer from "../../utils/Spacer";
const colors = ChutesColors();
//components

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
            <View style={[displays.center, displays.row, { height: 150 }]}>
              <View
                style={[
                  {
                    flex: 2,
                    borderRightColor: colors.white,
                    borderRightWidth: 4,
                  },
                ]}
              >
                <Image
                  source={{ uri: HOST + item.photo1_url }}
                  style={{ height: "100%" }}
                  resizeMode="cover"
                />
              </View>
              <View style={[{ flex: 1 }, displays.col]}>
                <View
                  style={{
                    flex: 1,
                    borderBottomWidth: 2,
                    borderBottomColor: colors.white,
                  }}
                >
                  <Image
                    source={{ uri: HOST + item.photo1_url }}
                    style={{ height: "100%" }}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    borderTopWidth: 2,
                    borderTopColor: colors.white,
                  }}
                >
                  <Image
                    source={{ uri: HOST + item.photo1_url }}
                    style={{ height: "100%" }}
                    resizeMode="cover"
                  />
                </View>
              </View>
              {/* <Image
                source={{ uri: HOST + item.photo1_url }}
                style={{ height: "100%", width: 100 }}
                resizeMode="cover"
              />
              <Image
                source={{ uri: HOST + item.photo1_url }}
                style={{ height: "100%", width: 100 }}
                resizeMode="cover"
              /> */}
            </View>
            <Spacer height={10} />
            <ScrollView showsVerticalScrollIndicator={true}>
              <Text style={styles.description}>{item.description}</Text>
            </ScrollView>

            <Spacer height={25} />
            <Text style={fonts.section}>Caractéristiques</Text>
            <View style={styles.detailRow}>
              {item.price === 0 ? (
                <Text style={styles.detail}>Gratuit</Text>
              ) : (
                <>
                  <IconMCI name="tag" size={20} color={colors.tertiary2} />
                  <Text style={styles.detail}>
                    {item.price < 14000 ? item.price : "--"} €
                  </Text>
                </>
              )}
            </View>
            <View style={styles.detailRow}>
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
              <Text style={styles.detail}>{item.condition}</Text>
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
            <Spacer height={25} />
            <Text style={fonts.section}>Délivrance</Text>
            {!item.homePickup ? null : (
              <View style={styles.detailRow}>
                <IconMCI
                  name="home-export-outline"
                  size={20}
                  color={colors.tertiary2}
                />
                <Text style={styles.detail}>Retrait à domicile</Text>
              </View>
            )}
            {!item.sending ? null : (
              <View style={styles.detailRow}>
                <IconFA5
                  name="shipping-fast"
                  size={20}
                  color={colors.tertiary2}
                />
                <Text style={styles.detail}>Transport proposé</Text>
              </View>
            )}
            <Spacer height={25} />
            <Text style={fonts.section}>Propriétaire</Text>
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
            {item.homePickup ? (
              <View style={styles.detailRow}>
                <IconFe name="map-pin" size={20} color={colors.tertiary2} />
                <Text style={[styles.detail, fonts.cap]}>
                  {item.owner_detail.city}
                </Text>
              </View>
            ) : null}

            <Spacer height={30} />
            <View style={displays.aliC}>
              <Shadow
                distance={shadowButton ? 3 : 0}
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
                endColor={colors.white}
                style={{ borderRadius: 50 }}
              >
                <Pressable
                  onPress={() => {
                    navigation.navigate("Tabs");
                  }}
                  style={[
                    buttons.primary,
                    { backgroundColor: colors.tertiary },
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
});
export default ScrapScreen;
