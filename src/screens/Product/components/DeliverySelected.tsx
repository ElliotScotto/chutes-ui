import React from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native-paper";
import ChutesColors from "../../../styles/colors";
const color = ChutesColors();
import scrapCreation from "../../../styles/scrapCreation";
import displays from "../../../styles/display";
import fonts from "../../../styles/fonts";
interface DeliverySelectedProps {
  homePickup: boolean;
  setHomePickup: React.Dispatch<React.SetStateAction<boolean>>;
  setSellerDelivers: React.Dispatch<React.SetStateAction<boolean>>;
  homePickupRef: React.RefObject<any>;
}

const DeliverySelected: React.FC<DeliverySelectedProps> = ({
  homePickup,
  setHomePickup,
  setSellerDelivers,
  homePickupRef,
}) => {
  const handleToggleSwitch = (value: boolean) => {
    setHomePickup(value);
    if (value === true) {
      setSellerDelivers(false);
    } else {
      setSellerDelivers(true);
    }
  };

  return (
    <View
      ref={homePickupRef}
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={displays.flex}>
        <Text style={fonts.homePickup}>
          {homePickup
            ? "J'autorise le retrait à domicile"
            : "Je l'apporte chez le client"}
        </Text>
      </View>
      <View>
        <Switch
          color={color.tertiary2}
          value={homePickup}
          onValueChange={handleToggleSwitch}
        />
      </View>
    </View>
  );
};

export default DeliverySelected;
