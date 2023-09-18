import React, { FC, useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
//packages
import Swiper from "react-native-swiper";
import axios from "axios";
import Constants from "expo-constants";
const deviceName = Constants.deviceName;
//navigation
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
//components
import CardScrap1 from "./components/cards/CardScrap1";
import CardScrap2 from "./components/cards/CardScrap2";
import CardScrap3 from "./components/cards/CardScrap3";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import Filters from "./components/Filters";
//styles
import displays from "../../styles/display";
//utils
import Spacer from "../../utils/Spacer";
//types
import { ScrapData } from "../../types/dataTypes";
//screens
import CardScrap4 from "./components/cards/CardScrap4";

type MyStackParamList = {
  Scrap: { item: ScrapData[] };
};

const HomeScreen: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MyStackParamList, "Scrap">>();
  const [data, setData] = useState<ScrapData[]>([]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [ascending, setAscending] = useState(false);
  const [descending, setDescending] = useState(false);
  const [sortDirection, setSortDirection] = useState("");
  const handleAscendingChange = () => {
    if (!ascending) {
      setAscending(true);
      setDescending(false);
      setSortDirection("price-asc");
    } else {
      setAscending(false);
      setSortDirection("");
    }
  };
  const handleDescendingChange = () => {
    if (!descending) {
      setDescending(true);
      setAscending(false);
      setSortDirection("price-desc");
    } else {
      setDescending(false);
      setSortDirection("");
    }
  };
  const [filter, setFilter] = useState({
    search: "",
    condition: {
      perfect: false,
      good: false,
      acceptable: false,
      damaged: false,
      ruined: false,
    },
    freeScrap: false,
    category: {
      quincaillerie: false,
      outils: false,
      peinture: false,
      sol: false,
      electricite: false,
      plomberie: false,
      toiture: false,
      menuiserie: false,
      grosOeuvre: false,
      jardin: false,
      divers: false,
    },
  });
  const handleSearch = (text: string) => {
    setFilter({ ...filter, search: text });
  };
  const handleFilter = (name: string, value: boolean) => {
    if (name in filter.condition) {
      setFilter((prev) => ({
        ...prev,
        condition: {
          ...prev.condition,
          [name]: value,
        },
      }));
    }
  };

  const fetchData = async (currentHost: string) => {
    await axios
      .get(`http://${currentHost}:8000/api/scraps/`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  };
  useEffect(() => {
    let currentHost;
    if (deviceName === "LYA-L29") {
      currentHost = "192.168.1.38";
    } else {
      currentHost = "localhost";
    }
    fetchData(currentHost);
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={displays.safeContainer}>
        <View style={displays.mainContainer}>
          <SearchBar
            filtersVisible={filtersVisible}
            setFiltersVisible={setFiltersVisible}
          />
          {filtersVisible && (
            <Filters
              filter={filter}
              handleFilter={handleFilter}
              ascending={ascending}
              descending={descending}
              handleAscendingChange={handleAscendingChange}
              handleDescendingChange={handleDescendingChange}
            />
          )}
          <Spacer height={10} />
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <>
                  <Swiper
                    style={displays.wrapper}
                    key={index}
                    horizontal={true}
                    showsButtons={false}
                    loop={false}
                    autoplay={false}
                    showsPagination={false}
                  >
                    <CardScrap1 data={item} />
                    <CardScrap2 data={item} />
                    <CardScrap3 data={item} />
                    <CardScrap4 data={item} />
                  </Swiper>
                </>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default HomeScreen;
