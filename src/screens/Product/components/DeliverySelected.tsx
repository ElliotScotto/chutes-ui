import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native-paper";
import ChutesColors from "../../../styles/colors";
const color = ChutesColors();
import Spacer from "../../../utils/Spacer";
import displays from "../../../styles/display";
import fonts from "../../../styles/fonts";

interface DeliverySelectedProps {
  homePickup: boolean;
  setHomePickup: React.Dispatch<React.SetStateAction<boolean>>;
  sending: boolean;
  setSending: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeliverySelected: React.FC<DeliverySelectedProps> = ({
  homePickup,
  setHomePickup,
  sending,
  setSending,
}) => {
  const handleToggleSwitchSending = (value: boolean) => {
    if (homePickup === false) {
      setSending(true);
    } else {
      setSending(value);
    }
  };
  const handleToggleSwitchHome = (value: boolean) => {
    if (sending === false) {
      setHomePickup(true);
    } else {
      setHomePickup(value);
    }
  };

  return (
    <View
      style={{ width: "100%", flexDirection: "column", alignItems: "center" }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Switch
            color={color.tertiary2}
            value={sending}
            onValueChange={handleToggleSwitchSending}
          />
        </View>
        <Spacer width={5} />
        <View style={displays.flex}>
          <Text style={fonts.homePickup}>
            {sending
              ? "Je peux livrer chez le client"
              : "Je refuse de livrer chez le client"}
          </Text>
        </View>
      </View>
      <Spacer height={5} />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Switch
            color={color.tertiary2}
            value={homePickup}
            onValueChange={handleToggleSwitchHome}
          />
        </View>
        <Spacer width={5} />
        <View style={displays.flex}>
          <Text style={fonts.homePickup}>
            {homePickup
              ? "J'accepte le retrait à domicile"
              : "Je refuse le retrait à domicile"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DeliverySelected;
