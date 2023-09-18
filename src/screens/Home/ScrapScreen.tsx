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
//functions
import { getIconCondition } from "./functions/getIconCondition";
import { changeFavIcon } from "./functions/changeFavIcon";
type ScrapScreenRouteParams = RouteProp<MyStackParamList, "Scrap">;

const ScrapScreen: FC<ScrapScreenProps> = ({ navigation }) => {
  const route = useRoute<ScrapScreenRouteParams>();
  const item = route.params.item;
  const iconContionNames = getIconCondition(item.condition);
  const [save, setSave] = useState(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[displays.flex, displays.white, displays.w100, displays.aliC]}
      >
        <ScrollView>
          <Spacer height={20} />
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
            <ScrollView
              showsVerticalScrollIndicator={true}
              style={{ height: 70 }}
            >
              {/* <Text style={styles.description}>{item.description}</Text> */}
              <Text style={styles.description}>
                Chute de matériaux de construction idéale pour les petits
                projets ou les réparations. Provenant d'un surplus de
                production, cette chute est en excellent état. Son origine
                garantit sa qualité, et elle est adaptée pour une variété
                d'usages en construction. Une opportunité à ne pas manquer pour
                obtenir des matériaux fiables à un prix réduit. Idéal pour les
                artisans et bricoleurs.XXXXXXXXXXXXXXXXXXXXXX
              </Text>
            </ScrollView>
            <Spacer height={10} />
            <View style={styles.detailCondition}>
              {iconContionNames.map((iconName, index) => (
                <IconMCI
                  key={index}
                  name={iconName}
                  size={20}
                  color={colors.tertiary2}
                />
              ))}
              <Text style={styles.detail2}>({item.condition})</Text>
            </View>
            <View style={styles.bothDetails}>
              <View style={styles.detailRow}>
                <IconO name="stack" size={20} color={colors.tertiary2} />
                <Text style={styles.detail}>Quantité : {item.quantity}</Text>
              </View>
              <View style={styles.detailRow}>
                <IconMCI name="tag" size={20} color={colors.tertiary2} />
                {item.is_free ? (
                  <Text style={styles.detail}>Gratuit</Text>
                ) : item.price ? (
                  <Text style={styles.detail}>{item.price} €</Text>
                ) : (
                  <Text>N/C</Text>
                )}
              </View>
              <View style={styles.detailRow}>
                <IconMCI name="weight" size={20} color={colors.tertiary2} />
                <Text style={styles.detail}>{item.weight} kg</Text>
              </View>
            </View>
            <View style={styles.detailRow}>
              <IconMCI name="details" size={20} color={colors.tertiary2} />
              <Text style={styles.detail}>{item.material}</Text>
            </View>
            <View style={styles.detailRow}>
              <IconSLI name="folder-alt" size={20} color={colors.tertiary2} />
              <Text style={styles.detail}>{item.category}</Text>
            </View>
            <Text style={styles.separator} />
            {item.home_pickup ? (
              <View style={styles.detailRow}>
                <IconMCI
                  name="home-export-outline"
                  size={20}
                  color={colors.tertiary2}
                />
                <Text style={styles.detail2}>Recupérable à domicile</Text>
              </View>
            ) : (
              <View style={styles.detailRow}>
                <IconE name="location" size={20} color={colors.tertiary2} />
                <Text style={styles.detail2}>
                  Lieu du produit si différent domicile A DEFINIR EN BDD
                </Text>
              </View>
            )}
            {!item.sending ? null : (
              <View style={styles.detailRow}>
                <IconFA5
                  name="shipping-fast"
                  size={20}
                  color={colors.tertiary2}
                />
                <Text style={styles.detail2}>
                  Envoi possible par {item.owner.username}
                </Text>
              </View>
            )}
            <Text style={styles.separator} />
            <Text style={styles.ownerTitle}>Propriétaire</Text>
            <View style={styles.detailRow}>
              <IconFe name="user" size={20} color={colors.tertiary2} />
              <Text style={styles.detail2}>{item.owner.username}</Text>
            </View>
            <View style={styles.detailRow}>
              <IconFe name="mail" size={20} color={colors.tertiary2} />
              <Text style={styles.mail}>{item.owner.email}</Text>
            </View>
            <View style={styles.detailRow}>
              <IconFe name="smartphone" size={20} color={colors.tertiary2} />
              <Text style={styles.detail}>{item.owner.phone_number}</Text>
            </View>
            <View style={styles.detailRow}>
              <IconFe name="map-pin" size={20} color={colors.tertiary2} />
              <Text style={styles.detail}>{item.owner.city}</Text>
            </View>
          </View>
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
    borderColor: colors.tertiary2,
    borderRadius: 15,
    backgroundColor: colors.white,
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
  },
  description: {
    fontSize: 16,
    alignItems: "flex-start",
    overflow: "scroll",
    color: colors.secondary,
  },
  mail: {
    fontSize: 16,
    marginVertical: 5,
    textTransform: "lowercase",
    paddingLeft: 5,
    color: colors.secondary,
  },
  detail: {
    fontSize: 16,
    marginVertical: 5,
    textTransform: "capitalize",
    paddingLeft: 5,
    color: colors.secondary,
  },
  detail2: {
    fontSize: 16,
    marginVertical: 5,
    paddingLeft: 5,
    color: colors.secondary,
  },
  separator: {
    height: 2,
    backgroundColor: colors.tertiary2,
    marginVertical: 10,
  },
  ownerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.secondary,
  },
});
export default ScrapScreen;
