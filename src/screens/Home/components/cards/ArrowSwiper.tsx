import React, { FC } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
//utils
import Spacer from "../../../../utils/Spacer";
//styles
import ChutesColors from "../../../../styles/colors";
const colors = ChutesColors();
import displays from "../../../../styles/display";
interface ArrowSwiperProps {
  title: string;
}

const ArrowSwiper: FC<ArrowSwiperProps> = ({ title }) => {
  const arrowFont =
    title === "Caractéristiques" || title === "Détails"
      ? colors.secondary
      : colors.white;
  const arrowColor =
    title === "Caractéristiques" || title === "Détails"
      ? colors.secondary
      : colors.white;

  return (
    <View style={[displays.ArrowContainer, { borderBottomColor: arrowColor }]}>
      <View>
        <Text style={{ color: arrowFont }}>{title}</Text>
      </View>
      <Spacer width={5} />
      <View style={displays.arrowLine}>
        <View
          style={[
            displays.arrowContainerTop,
            {
              borderBottomColor: arrowColor,
            },
          ]}
        />
        <View
          style={[
            displays.arrowContainerBottom,
            {
              borderTopColor: arrowColor,
            },
          ]}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Icon
          style={displays.arrow}
          name="arrow-right"
          size={18}
          color={arrowColor}
        />
      </View>
    </View>
  );
};

export default ArrowSwiper;
