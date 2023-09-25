import React, { FC } from "react";
import { View, Text } from "react-native";
//packages
import { TextInput } from "react-native-paper";
//styles
import ChutesColors from "../../../styles/colors";
const color = ChutesColors();
import scrapCreation from "../../../styles/scrapCreation";
import Spacer from "../../../utils/Spacer";
import fonts from "../../../styles/fonts";

interface ProductLocationSelectedProps {
  productLocation: string;
  setProductLocation: React.Dispatch<React.SetStateAction<string>>;
  errorProductLocation: string;
  setErrorProductLocation: React.Dispatch<React.SetStateAction<string>>;
  sellerDelivers: boolean;
  counterPressed: number;
  productLocationRef: React.RefObject<any>;
}

const ProductLocationSelected: FC<ProductLocationSelectedProps> = ({
  productLocation,
  setProductLocation,
  errorProductLocation,
  setErrorProductLocation,
  sellerDelivers,
  counterPressed,
  productLocationRef,
}) => {
  return sellerDelivers ? null : (
    <View ref={productLocationRef} style={{ width: "100%" }}>
      <Spacer height={20} />
      <View style={scrapCreation.productLocationTitle}>
        <Text style={fonts.productLocation}>Lieu de vente ?*</Text>
      </View>
      <Spacer height={10} />
      <TextInput
        ref={productLocationRef}
        mode="outlined"
        label="Ville*"
        placeholder="ex: Rosny-sur-Seine"
        multiline={false}
        textAlignVertical="top"
        value={productLocation}
        style={{ width: "100%", backgroundColor: color.white }}
        theme={{
          colors: {
            primary: productLocation
              ? productLocation.length <= 45
                ? color.tertiary
                : color.error
              : errorProductLocation && counterPressed !== 0
              ? color.error
              : color.tertiary,
          },
        }}
        onChangeText={setProductLocation}
      />
      <View style={scrapCreation.errors}>
        {errorProductLocation && !productLocation && counterPressed !== 0 && (
          <Text
            style={{
              color: color.error,
            }}
          >
            {errorProductLocation}
          </Text>
        )}
      </View>
    </View>
  );
};
export default ProductLocationSelected;
