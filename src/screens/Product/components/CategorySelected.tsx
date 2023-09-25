import React, { FC } from "react";
import { View, Text, Pressable } from "react-native";
import { Checkbox } from "react-native-paper";
import scrapCreation from "../../../styles/scrapCreation";
import ChutesColors from "../../../styles/colors";
const color = ChutesColors();
import Spacer from "../../../utils/Spacer";
import { CATEGORIES } from "../../../types/dataTypes";

interface CategorySelectedProps {
  category: string[];
  setCategory: React.Dispatch<React.SetStateAction<string[]>>;
  errorCategory: string;
  counterPressed: number;
  categoryRef: React.RefObject<any>;
}

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
            Catégorie(s) principale(s)... (2 max.)
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
              <View
                style={[
                  scrapCreation.itemCategory,
                  {
                    justifyContent: "space-between",
                    backgroundColor: category.includes(key)
                      ? color.orange2
                      : color.white,
                    opacity:
                      category.length >= 2 && !category.includes(key) ? 0.3 : 1,
                  },
                ]}
              >
                <View>
                  <Text
                    style={[
                      scrapCreation.categoryTitleFont,
                      {
                        color: !category.includes(key)
                          ? color.orange2
                          : color.white,
                      },
                    ]}
                  >
                    {key}
                  </Text>
                </View>
                <Spacer width={5} />
                <View>
                  <Checkbox.IOS
                    color={color.white}
                    status={category.includes(key) ? "checked" : "unchecked"}
                    onPress={() => toggleCategory(key)}
                    disabled={category.length >= 2 && !category.includes(key)}
                  />
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={scrapCreation.errors}>
        {errorCategory && category.length < 1 && counterPressed !== 0 && (
          <Text style={{ color: color.error }}>{errorCategory}</Text>
        )}
      </View>
    </View>
  );
};
export default CategorySelected;
