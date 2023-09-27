import React from "react";
import { View, Text, StyleSheet } from "react-native";
//packages
import { Shadow } from "react-native-shadow-2";
//icons
import IconFA5 from "react-native-vector-icons/FontAwesome5";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import IconFe from "react-native-vector-icons/Feather";
//style
import ChutesColors from "../../../styles/colors";
const colors = ChutesColors();
import displays from "../../../styles/display";
//type
import { ScrapData } from "../../../types/dataTypes";
import fonts from "../../../styles/fonts";

type DeliveryDetailsProps = {
  item: ScrapData;
};
const DeliveryDetails: React.FC<DeliveryDetailsProps> = ({ item }) => {
  return (
    <View style={[{ flex: 1, width: "100%" }]}>
      <Shadow
        distance={5}
        offset={[0, 0]}
        paintInside={true}
        sides={{ top: true, bottom: true, start: true, end: true }}
        startColor={colors.gainsboro}
        style={[displays.aliC, { flex: 1, width: "100%" }]}
      >
        <View
          style={[
            {
              flex: 1,
              width: "100%",
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: colors.tertiary,
            },
          ]}
        >
          {item.home_pickup === true ? (
            <View>
              <View style={styles.detailRow}>
                <IconMCI
                  name="home-export-outline"
                  size={20}
                  color={colors.lightAccent}
                />
                <Text style={fonts.detailDelivery}>Recupérable à domicile</Text>
              </View>
              <View style={styles.detailRow}>
                <IconFe name="map-pin" size={20} color={colors.lightAccent} />
                <Text style={fonts.detailDelivery}>
                  {item.owner_detail.city}
                </Text>
              </View>
            </View>
          ) : (
            <View style={styles.detailRow}>
              <IconFe name="map-pin" size={20} color={colors.lightAccent} />
              <Text style={fonts.detailDelivery}>{item.product_location}</Text>
            </View>
          )}
          {!item.sending ? null : (
            <View style={styles.detailRow}>
              <IconFA5
                name="shipping-fast"
                size={20}
                color={colors.lightAccent}
              />
              <Text style={fonts.detailDelivery}>
                Envoi possible par {item.owner_detail.username}
              </Text>
            </View>
          )}
        </View>
      </Shadow>
    </View>
  );
};
const styles = StyleSheet.create({
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  detail: {
    fontSize: 16,
    marginVertical: 5,
    paddingLeft: 5,
    color: colors.secondary,
  },
});
export default DeliveryDetails;
