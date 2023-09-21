import React, { FC } from "react";
import { View, Text, Pressable } from "react-native";
import { Checkbox } from "react-native-paper";
import scrapCreation from "../../../styles/scrapCreation";
import ChutesColors from "../../../styles/colors";
const color = ChutesColors();
import Spacer from "../../../utils/Spacer";
import { MATERIALS } from "../../../types/dataTypes";

interface MaterialSelectedProps {
  material: string[];
  errorMaterial: string;
  toggleMaterial: (key: string) => void;
}

const MaterialSelected: FC<MaterialSelectedProps> = ({
  material,
  errorMaterial,
  toggleMaterial,
}) => {
  return (
    <>
      <View style={scrapCreation.materialContainer}>
        <View style={scrapCreation.materialTitle}>
          <Text style={scrapCreation.materialTitleFont}>
            Matière(s) principale(s)... (2 max.)
          </Text>
        </View>
        <Spacer height={5} />
        <View style={scrapCreation.materialItemContainer}>
          {Object.values(MATERIALS).map((key) => (
            <Pressable
              key={key}
              style={scrapCreation.materialCheckButton}
              onPress={() => toggleMaterial(key)}
              disabled={material.length >= 2 && !material.includes(key)}
            >
              <View
                style={[
                  scrapCreation.itemMaterial,
                  {
                    backgroundColor: material.includes(key)
                      ? color.tertiary2
                      : color.white,
                    opacity:
                      material.length >= 2 && !material.includes(key) ? 0.5 : 1,
                  },
                ]}
              >
                <Text
                  style={[
                    scrapCreation.materialTitleFont,
                    {
                      color: !material.includes(key)
                        ? color.tertiary2
                        : color.white,
                    },
                  ]}
                >
                  {key}
                </Text>
                <Checkbox.IOS
                  color={color.white}
                  status={material.includes(key) ? "checked" : "unchecked"}
                  onPress={() => toggleMaterial(key)}
                  disabled={material.length >= 2 && !material.includes(key)}
                />
              </View>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={{ marginTop: 6, alignSelf: "flex-end" }}>
        {errorMaterial && (
          <Text style={{ color: color.error }}>*{errorMaterial}</Text>
        )}
      </View>
    </>
  );
};
export default MaterialSelected;
