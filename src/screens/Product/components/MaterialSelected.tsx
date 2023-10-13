import React, { FC } from "react";
import { View, Text, Pressable } from "react-native";
import { Checkbox } from "react-native-paper";
//styles
import scrapCreation from "../../../styles/scrapCreation";
import ChutesColors from "../../../styles/colors";
const colors = ChutesColors();
//utils
import Spacer from "../../../utils/Spacer";
//types
import { MATERIALS } from "../../../types/dataTypes";
import { MaterialSelectedProps } from "../../../types/inputProps";
//packages
import { Shadow } from "react-native-shadow-2";
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
            Matière(s) principale(s)
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
              <Shadow
                distance={material.includes(key) ? 3 : 0}
                offset={[0, 0]}
                paintInside={false}
                sides={{ top: true, bottom: true, start: true, end: true }}
                corners={{
                  topStart: true,
                  topEnd: true,
                  bottomStart: true,
                  bottomEnd: true,
                }}
                startColor={colors.gainsboro}
                endColor={colors.white}
                style={{ borderRadius: 50 }}
              >
                <View
                  style={[
                    scrapCreation.itemMaterial,
                    {
                      backgroundColor: material.includes(key)
                        ? colors.tertiary2
                        : colors.white,
                      opacity:
                        material.length >= 2 && !material.includes(key)
                          ? 0.3
                          : 1,
                    },
                  ]}
                >
                  <Text
                    style={[
                      scrapCreation.materialItemFont,
                      {
                        color: !material.includes(key)
                          ? colors.tertiary2
                          : colors.white,
                      },
                    ]}
                  >
                    {key}
                  </Text>
                  <Checkbox.IOS
                    color={colors.white}
                    status={material.includes(key) ? "checked" : "unchecked"}
                    onPress={() => toggleMaterial(key)}
                    disabled={material.length >= 2 && !material.includes(key)}
                  />
                </View>
              </Shadow>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={scrapCreation.errors}>
        {errorMaterial && material.length < 1 && counterPressed !== 0 && (
          <Text style={{ color: colors.error }}>{errorMaterial}</Text>
        )}
      </View>
    </View>
  );
};
export default MaterialSelected;
