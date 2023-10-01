//Card model for all scrap listed
import React, { FC } from "react";
import { View, Text, Image } from "react-native";
//packages
import { Shadow } from "react-native-shadow-2";
//utils
import Spacer from "../../../../utils/Spacer";
//icons
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import IconFA5 from "react-native-vector-icons/FontAwesome5";
//components
import ArrowSwiper from "./ArrowSwiper";
//style
import ChutesColors from "../../../../styles/colors";
const colors = ChutesColors();
import displays from "../../../../styles/display";
import fonts from "../../../../styles/fonts";
//types
import { ScrapData } from "../../../../types/dataTypes";
//functions
import { getIconCondition } from "../../functions/getIconCondition";
//env
import { HOST } from "@env";

interface CardScrap1Props {
  data: ScrapData;
}
const CardScrap1: FC<CardScrap1Props> = ({ data }) => {
  const iconContionNames = getIconCondition(data.condition);

  return (
    <>
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
          <View style={displays.scrapCard}>
            <View style={[displays.scrapCardTop]}>
              <View style={[displays.scrapCardLeft]}>
                <Image
                  source={{ uri: `${HOST}${data.photo1_url}` }}
                  style={[
                    displays.bordlightAccent,
                    displays.flex,
                    { height: 60, width: "100%" },
                  ]}
                  resizeMode="cover"
                />
              </View>
              <Spacer width={5} />
              <View style={[displays.scrapCardRight]}>
                <View style={[displays.scrapCardRightContentTop]}>
                  <Text style={fonts.scrapName} numberOfLines={1}>
                    {data.name}
                  </Text>
                </View>
                <View style={displays.scrapCardRightContentMiddle}>
                  <View style={[displays.scrapCardRightContentMiddleLeft]}>
                    <View style={[displays.row, { marginVertical: 6 }]}>
                      {iconContionNames.map((iconName, index) => (
                        <IconMCI
                          key={index}
                          name={iconName}
                          size={16}
                          color={colors.tertiary2}
                          style={{
                            opacity: iconName === "wrench-outline" ? 0.3 : 1,
                          }}
                        />
                      ))}
                    </View>
                    <View style={[displays.row, displays.aliC]}>
                      <IconMCI name="tag" size={16} color={colors.tertiary2} />
                      <Spacer width={3} />
                      <Text style={fonts.scrapDetails}>{data.price} €</Text>
                      <Spacer width={10} />
                      <Text style={fonts.scrapDetails}>|</Text>
                      <Spacer width={10} />
                      <IconFA5
                        name="shipping-fast"
                        size={16}
                        color={colors.tertiary2}
                        style={{ opacity: data.sending === true ? 1 : 0.2 }}
                      />
                      <Spacer width={5} />
                      <IconMCI
                        name="home-export-outline"
                        size={20}
                        color={colors.tertiary2}
                        style={{ opacity: data.home_pickup === true ? 1 : 0.2 }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={displays.scrapCardBottom}>
              <ArrowSwiper title={"Caractéristiques"} />
            </View>
          </View>
        </Shadow>
      </View>
    </>
  );
};

export default CardScrap1;
