import React, { FC, useState } from "react";
import { View, Text, Pressable } from "react-native";
//icons
import File from "react-native-vector-icons/Fontisto";
import Heart from "react-native-vector-icons/MaterialCommunityIcons";
import Shop from "react-native-vector-icons/Feather";
//navigation
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
//packages
import { Shadow } from "react-native-shadow-2";
//style
import ChutesColors from "../../../../styles/colors";
const colors = ChutesColors();
import displays from "../../../../styles/display";
import fonts from "../../../../styles/fonts";
import buttons from "../../../../styles/buttons";
//types
import { ScrapData } from "../../../../types/dataTypes";
//functions
import { changeFavIcon } from "../../functions/changeFavIcon";
interface CardScrap4Props {
  data: ScrapData;
}
type MyStackParamList = {
  Scrap: { item: ScrapData };
};
const CardScrap4: FC<CardScrap4Props> = ({ data }) => {
  const [save, setSave] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<MyStackParamList, "Scrap">>();
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
        <View style={displays.scrapCard4}>
          <Pressable
            style={buttons.scrapAction}
            onPress={() => {
              navigation.navigate("Scrap", { item: data });
            }}
          >
            <File name={"file-2"} size={30} color={colors.white} />

            <Text style={fonts.details}>Détails</Text>
          </Pressable>
          <Pressable
            style={buttons.scrapAction}
            onPress={() => {
              setSave(!save);
            }}
          >
            <Heart name={changeFavIcon(save)} size={30} color={colors.white} />

            <Text style={fonts.save}>Sauvegarder</Text>
          </Pressable>
          <Pressable style={buttons.scrapAction}>
            <Shop name={"shopping-cart"} size={30} color={colors.white} />

            <Text style={fonts.buy}>Acheter</Text>
          </Pressable>
        </View>
      </Shadow>
    </View>
  );
};
export default CardScrap4;
