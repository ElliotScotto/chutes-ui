//Card model for all scrap listed
import React, { FC } from "react";
import { View, Text, Image } from "react-native";
//packages
import { Shadow } from "react-native-shadow-2";
//utils
import Spacer from "../../../../utils/Spacer";
//icons
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
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
const CardScrap1: React.FC<CardScrap1Props> = ({ data }) => {
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
                {/* <Icon name={"lightbulb-fluorescent-tube-outline"} size={50} /> */}
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
                    <Text style={fonts.scrapDetails}>
                      {data.category.length === 2
                        ? `${data.category[0]}, ${data.category[1]}`
                        : data.category}
                    </Text>
                    <View style={[displays.row, { marginVertical: 6 }]}>
                      {iconContionNames.map((iconName, index) => (
                        <Icon
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
                    <Text style={fonts.scrapDetails}>{data.price} €</Text>
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
