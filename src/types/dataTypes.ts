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
  Quincaillerie: "",
  Outils: "",
  Peinture: "",
  Sol: "",
  Electricité: "",
  Plomberie: "",
  Toiture: "",
  Menuiserie: "",
  Grosoeuvre: "",
  Jardin: "",
  Divers: "",
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
