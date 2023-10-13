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
import { CATEGORIES } from "../../../types/dataTypes";
import { CategorySelectedProps } from "../../../types/inputProps";
//packages
import { Shadow } from "react-native-shadow-2";
const CategorySelected: FC<CategorySelectedProps> = ({
  category,
  setCategory,
  errorCategory,
  counterPressed,
  categoryRef,
}) => {
  // Management of category selection change
  const toggleCategory = (cat: string) => {
    if (category.includes(cat)) {
      setCategory((prev) => prev.filter((item) => item !== cat));
    } else {
      setCategory((prev) => [...prev, cat]);
    }
  };
  return (
    <View ref={categoryRef} style={{ width: "100%" }}>
      <View style={scrapCreation.categoryContainer}>
        <View style={scrapCreation.categoryTitle}>
          <Text style={scrapCreation.categoryTitleFont}>
            Catégorie(s) principale(s)
          </Text>
        </View>
        <Spacer height={10} />
        <View style={scrapCreation.categoryItemContainer}>
          {Object.values(CATEGORIES).map((key) => (
            <Pressable
              key={key}
              style={scrapCreation.categoryCheckButton}
              onPress={() => toggleCategory(key)}
              disabled={category.length >= 2 && !category.includes(key)}
            >
              <Shadow
                distance={category.includes(key) ? 3 : 0}
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
                style={{ borderRadius: 5 }}
              >
                <View
                  style={[
                    scrapCreation.itemCategory,
                    {
                      justifyContent: "space-between",
                      backgroundColor: category.includes(key)
                        ? colors.peru
                        : colors.white,
                      opacity:
                        category.length >= 2 && !category.includes(key)
                          ? 0.3
                          : 1,
                    },
                  ]}
                >
                  <View>
                    <Text
                      style={[
                        scrapCreation.categoryItemFont,
                        {
                          color: !category.includes(key)
                            ? colors.peru
                            : colors.white,
                        },
                      ]}
                    >
                      {key}
                    </Text>
                  </View>
                  <Spacer width={5} />
                  <View>
                    <Checkbox.IOS
                      color={colors.white}
                      status={category.includes(key) ? "checked" : "unchecked"}
                      onPress={() => toggleCategory(key)}
                      disabled={category.length >= 2 && !category.includes(key)}
                    />
                  </View>
                </View>
              </Shadow>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={scrapCreation.errors}>
        {errorCategory && category.length < 1 && counterPressed !== 0 && (
          <Text style={{ color: colors.error }}>{errorCategory}</Text>
        )}
      </View>
    </View>
  );
};
export default CategorySelected;
