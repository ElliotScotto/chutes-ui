//Card model for all scrap listed
import React, { FC } from "react";
import { View, Text } from "react-native";
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

interface CardScrap1Props {
  data: ScrapData;
}
const CardScrap1: React.FC<CardScrap1Props> = ({ data }) => {
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
                <Icon name={"lightbulb-fluorescent-tube-outline"} size={50} />
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
                    <Text style={fonts.scrapDetails}>{data.category}</Text>
                    <Text style={fonts.scrapDetails}>{data.condition}</Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={fonts.scrapDetails}>{data.price}€</Text>
                      <Text> | </Text>
                      <Text style={fonts.scrapDetails}>
                        Quantité : {data.quantity}
                      </Text>
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
