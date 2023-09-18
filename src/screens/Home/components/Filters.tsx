import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
//Packages
import Checkbox from "expo-checkbox";
//Utils
import ChutesColors from "../../../styles/colors";
const colors = ChutesColors();
import FilterButton from "./FilterButton";
type FilterValues = {
  search: string;
  condition: {
    perfect: boolean;
    good: boolean;
    acceptable: boolean;
    damaged: boolean;
    ruined: boolean;
  };
  freeScrap: boolean;
  category: {
    quincaillerie: boolean;
    outils: boolean;
    peinture: boolean;
    sol: boolean;
    electricite: boolean;
    plomberie: boolean;
    toiture: boolean;
    menuiserie: boolean;
    grosOeuvre: boolean;
    jardin: boolean;
    divers: boolean;
  };
};

interface FiltersProps {
  filter: FilterValues;
  handleFilter: (key: string, value: boolean) => void;
  ascending: boolean;
  descending: boolean;
  handleAscendingChange: (value: boolean) => void;
  handleDescendingChange: (value: boolean) => void;
}
const Filters: React.FC<FiltersProps> = ({
  filter,
  handleFilter,
  ascending,
  descending,
  handleAscendingChange,
  handleDescendingChange,
}) => {
  //Condition
  // const [perfect, setPerfect] = useState(false);
  // const [good, setGood] = useState(false);
  // const [acceptable, setAcceptable] = useState(false);
  // const [damaged, setDamaged] = useState(false);
  // const [ruined, setRuined] = useState(false);
  // const [freePrice, setFreePrice] = useState(false);
  //Sort Price
  // const [isAsc, setIsAsc] = useState(false);
  // const [isDesc, setIsDesc] = useState(false);
  type ConditionKey = "perfect" | "good" | "acceptable" | "damaged" | "ruined";
  const conditions: { key: ConditionKey; label: string }[] = [
    { key: "perfect", label: "Comme Neuf" },
    { key: "good", label: "Très bon état" },
    { key: "acceptable", label: "Correct" },
    { key: "damaged", label: "Abîmé" },
    { key: "ruined", label: "Très abîmé" },
    // Add more conditions here if needed
  ];

  return (
    <View style={styles.mainContainerFilters}>
      <View style={styles.mBot}>
        <Text style={[styles.fontFilters, styles.titleFilter]}>état</Text>
        <View style={styles.pad}>
          {conditions.map((condition) => (
            <View key={condition.key} style={styles.inputBox}>
              <Checkbox
                style={styles.checkbox3}
                value={filter.condition[condition.key]}
                onValueChange={(value) => handleFilter(condition.key, value)}
                color={
                  filter.condition[condition.key]
                    ? colors.primary
                    : colors.black
                }
              />
              <View>
                <Text style={styles.fontFilters}>{condition.label}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      {/* Similar map approach can be applied for categories and other sections */}
      {/* ... */}
    </View>
  );
};
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  mainContainerFilters: {
    width: widthScreen * 0.95,
    borderColor: colors.primary,
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: "auto",
    padding: 10,
  },
  row: { flexDirection: "row" },
  wrap: { flexWrap: "wrap" },
  pad: { paddingLeft: 10, paddingRight: 10 },
  mBot: { marginBottom: 15 },
  spaceA: { justifyContent: "space-around" },
  spaceB: { justifyContent: "space-between" },
  spaceE: { justifyContent: "space-evenly" },
  titleFilter: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginLeft: 5,
    letterSpacing: 1,
    marginBottom: 10,
  },
  fontSecondTitle: {
    borderColor: colors.black,
    borderBottomWidth: 1,
    marginTop: 5,
    fontSize: 13,
  },
  fontFilters: {
    color: colors.black,
    textTransform: "capitalize",
    fontSize: 16,
  },
  sectionSort: {
    marginTop: 15,
    borderTopColor: colors.white,
    borderTopWidth: 1,
  },
  //Condition
  inputBox: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  checkbox3: {
    marginRight: 5,
    borderColor: colors.black,
    width: 20,
    height: 20,
    borderWidth: 1,
  },
});
export default Filters;
