import React, { FC } from "react";
import { View, Text, Pressable } from "react-native";
import { Checkbox } from "react-native-paper";
import scrapCreation from "../../../styles/scrapCreation";
import ChutesColors from "../../../styles/colors";
const color = ChutesColors();
import Spacer from "../../../utils/Spacer";
import { MATERIALS } from "../../../types/dataTypes";
import displays from "../../../styles/display";

interface MaterialSelectedProps {
  material: string[];
  setMaterial: React.Dispatch<React.SetStateAction<string[]>>;
  errorMaterial: string;
  counterPressed: number;
  materialRef: React.RefObject<any>;
}

const MaterialSelected: FC<MaterialSelectedProps> = ({
  material,
  setMaterial,
  errorMaterial,
  counterPressed,
  materialRef,
}) => {
  // Management of material selection change
  const toggleMaterial = (mat: string) => {
    if (material.includes(mat)) {
      setMaterial((prev) => prev.filter((item) => item !== mat));
    } else {
      setMaterial((prev) => [...prev, mat]);
    }
  };
  return (
    <View ref={materialRef} style={{ width: "100%" }}>
      <View style={scrapCreation.materialContainer}>
        <View style={scrapCreation.materialTitle}>
          <Text style={scrapCreation.materialTitleFont}>
            Matière(s) principale(s)... (2 max.)
          </Text>
        </View>
        <Spacer height={10} />
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
                      material.length >= 2 && !material.includes(key) ? 0.3 : 1,
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
      <View style={scrapCreation.errors}>
        {errorMaterial && material.length < 1 && counterPressed !== 0 && (
          <Text style={{ color: color.error }}>{errorMaterial}</Text>
        )}
      </View>
    </View>
  );
};
export default MaterialSelected;
