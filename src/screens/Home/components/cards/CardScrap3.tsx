//Card model for all scrap listed
import React, { FC } from "react";
import { View, Text, Pressable } from "react-native";
//icons
import Icon from "react-native-vector-icons/EvilIcons";
//packages
import { Shadow } from "react-native-shadow-2";
//utils
import Spacer from "../../../../utils/Spacer";
//style
import ChutesColors from "../../../../styles/colors";
const colors = ChutesColors();
import displays from "../../../../styles/display";
import fonts from "../../../../styles/fonts";
//components
import ArrowSwiper from "./ArrowSwiper";
//types
import { ScrapData } from "../../../../types/dataTypes";
interface CardScrap3Props {
  data: ScrapData;
}
const CardScrap3: FC<CardScrap3Props> = ({ data }) => {
  return (
    <View style={displays.card}>
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
        startColor={colors.lightAccent}
      >
        <View style={displays.scrapCard3}>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <View style={displays.scrapCard3Left}>
              <View style={displays.scrapCard3LeftTitle}>
                <Text style={fonts.contact}>Contact</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                }}
              >
                <View style={[displays.scrapCard3LeftContentLeft]}>
                  <Icon name={"user"} size={50} color={colors.primary} />
                </View>
                <View style={[displays.scrapCard3LeftContentRight]}>
                  <Text numberOfLines={1} style={fonts.contactDetails}>
                    {data.owner_detail.username}
                  </Text>
                  <Text numberOfLines={1} style={fonts.contactDetails}>
                    {data.owner_detail.phone_number}
                  </Text>
                  <Text numberOfLines={1} style={fonts.contactEmail}>
                    {data.owner_detail.email}
                  </Text>
                  <Text numberOfLines={1} style={fonts.contactDetails}>
                    {data.owner_detail.city}
                  </Text>
                </View>
              </View>
            </View>
            <View style={displays.scrapCardBottom}>
              <ArrowSwiper title={"Détails"} />
            </View>
          </View>
        </View>
      </Shadow>
    </View>
  );
};
export default CardScrap3;
