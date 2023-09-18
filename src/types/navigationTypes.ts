import { ScrapData } from "./dataTypes";

export type MyStackParamList = { Scrap: { item: ScrapData } };

export interface ScrapScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}
