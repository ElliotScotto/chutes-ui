//Card model for all scrap listed
import React, { FC } from "react";
import { View, Text } from "react-native";
//packages
import { Shadow } from "react-native-shadow-2";
//utils
import Spacer from "../../../../utils/Spacer";
//icons
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
//components
import ArrowSwiper from "./ArrowSwiper";
//style
import ChutesColors from "../../../../styles/colors";
const colors = ChutesColors();
import displays from "../../../../styles/display";
import fonts from "../../../../styles/fonts";
//types
import { ScrapData } from "../../../../types/dataTypes";

interface CardScrap2Props {
  data: ScrapData;
}
const CardScrap2: FC<CardScrap2Props> = ({ data }) => {
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
        <View style={displays.scrapCard2}>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <View style={displays.scrapCard2Content}>
              <View style={displays.scrapCard2ContentLeft}>
                <View style={[displays.row, displays.aliC]}>
                  <IconMCI name="details" size={20} color={colors.white} />
                  <Spacer width={10} />
                  <Text style={fonts.scrapDetails2}>
                    {data.material.length === 2
                      ? `${data.material[0]}, ${data.material[1]}`
                      : data.material}
                  </Text>
                </View>
                <View style={[displays.row, displays.aliC]}>
                  <IconMCI name="weight" size={20} color={colors.white} />
                  <Spacer width={10} />
                  <Text style={fonts.scrapDetails2}>{data.weight}</Text>
                </View>
                <View style={[displays.row, displays.aliC]}>
                  <IconSLI name="folder-alt" size={20} color={colors.white} />
                  <Spacer width={10} />
                  <Text style={fonts.scrapDetails2}>
                    {data.category.length === 2
                      ? `${data.category[0]}, ${data.category[1]}`
                      : data.category}
                  </Text>
                </View>
              </View>
              {/* <View style={displays.scrapCard2ContentRight}>
                <Text style={fonts.dimensionsDetails}>details</Text>
                <Text style={fonts.dimensionsDetails}>details</Text>
                <Text style={fonts.dimensionsDetails}>details</Text>
              </View> */}
            </View>
            <View style={displays.scrapCardBottom}>
              <ArrowSwiper title={"Contact"} />
            </View>
          </View>
        </View>
      </Shadow>
    </View>
  );
};

export default CardScrap2;
