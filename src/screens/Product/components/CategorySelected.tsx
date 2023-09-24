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
  errorCategory: string;
  toggleCategory: (key: string) => void;
}

const MaterialSelected: FC<CategorySelectedProps> = ({
  category,
  errorCategory,
  toggleCategory,
}) => {
  return (
    <>
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
                    backgroundColor: category.includes(key)
                      ? color.orange2
                      : color.white,
                    opacity:
                      category.length >= 2 && !category.includes(key) ? 0.5 : 1,
                  },
                ]}
              >
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
                <Checkbox.IOS
                  color={color.white}
                  status={category.includes(key) ? "checked" : "unchecked"}
                  onPress={() => toggleCategory(key)}
                  disabled={category.length >= 2 && !category.includes(key)}
                />
              </View>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={scrapCreation.errors}>
        {errorCategory && category.length < 1 && (
          <Text style={{ color: color.error }}>{errorCategory}</Text>
        )}
      </View>
    </>
  );
};
export default MaterialSelected;
