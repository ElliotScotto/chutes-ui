export interface UserCustom {
  username: string;
  email: string;
  phone_number: string;
  address: string;
  city: string;
}

export interface ScrapData {
  name: string;
  description: string;
  condition: string;
  quantity: number;
  price: number;
  weight: number;
  material: string;
  category: string;
  is_free: boolean;
  is_for_sell: boolean;
  city: string;
  home_pickup: boolean;
  sending: boolean;
  owner: UserCustom;
}
// CreateScreen
export type ScrapDataCreation = {
  name: string;
  description: string;
  condition: string;
  quantity: number;
  price: number;
  weight: string;
  material: string[];
  category: string[];
  productLocation: string;
  homePickup: boolean;
  sending: boolean;
};

export interface Conditions {
  commeNeuf: string;
  TresBonEtat: string;
  correct: string;
  abime: string;
  tresAbime: string;
}
export const CONDITIONS: Conditions = {
  commeNeuf: "Comme Neuf",
  TresBonEtat: "Très bon état",
  correct: "Correct",
  abime: "Abîmé",
  tresAbime: "Très abîmé",
};
export interface Category {
  Quincaillerie: string;
  Outils: string;
  Peinture: string;
  Sol: string;
  Electricité: string;
  Plomberie: string;
  Toiture: string;
  Menuiserie: string;
  Grosoeuvre: string;
  Jardin: string;
  Divers: string;
}
export const CATEGORIES: Category = {
  Quincaillerie: "Quincaillerie",
  Outils: "Outils",
  Peinture: "Peinture",
  Sol: "Sol",
  Electricité: "Electricité",
  Plomberie: "Plomberie",
  Toiture: "Toiture",
  Menuiserie: "Menuiserie",
  Grosoeuvre: "Gros-œuvre",
  Jardin: "Jardin",
  Divers: "Divers",
};
export interface Material {
  Metal: string;
  Plastic: string;
  Wood: string;
  Glass: string;
  Liquid: string;
  Powders: string;
  Stones: string;
  Others: string;
}
export const MATERIALS: Material = {
  Metal: "Métal",
  Plastic: "Plastique",
  Wood: "Bois",
  Glass: "Verre",
  Liquid: "Liquide",
  Powders: "Poudre",
  Stones: "Pierre",
  Others: "Autres",
};
export interface Weight {
  lessOne: string;
  oneToFive: string;
  fiveToTen: string;
  tenToTwenty: string;
  twentyToFifty: string;
  fiftyToHundred: string;
  moreHundred: string;
}
export const WEIGHTS: Weight = {
  lessOne: "Moins de 1kg",
  oneToFive: "Entre 1kg et 5kg",
  fiveToTen: "Entre 5kg et 10kg",
  tenToTwenty: "Entre 10kg et 20kg",
  twentyToFifty: "Entre 20kg et 50kg",
  fiftyToHundred: "Entre 50kg et 100kg",
  moreHundred: "Plus de 100kg",
};
