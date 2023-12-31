import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
//utils
import ChutesColors from "../../../styles/colors";
const colors = ChutesColors();
//styles
import displays from "../../../styles/display";
//icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
interface SearchBarProps {
  filtersVisible: boolean;
  setFiltersVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  filtersVisible,
  setFiltersVisible,
}) => {
  const toggleFilters = () => {
    setFiltersVisible((prevState) => !prevState);
  };
  return (
    <View style={[displays.center, displays.w95]}>
      <View style={displays.searchBar}>
        <View style={displays.searchItem}>
          <Text>
            <AntDesign name={"search1"} size={20} color={colors.tertiary} />
          </Text>
        </View>
        <View style={displays.searchInputItem}>
          <TextInput
            selectionColor={colors.gainsboro}
            cursorColor={colors.tertiary2}
            placeholder="Rechercher..."
            autoCapitalize="none"
            returnKeyType="search"
            style={displays.searchInputStyle}
          />
        </View>
        <Pressable style={displays.searchItem} onPress={toggleFilters}>
          <MaterialCommunityIcons
            name={filtersVisible ? "filter-outline" : "filter"}
            size={24}
            color={colors.tertiary}
          />
        </Pressable>
      </View>
    </View>
  );
};
export default SearchBar;
