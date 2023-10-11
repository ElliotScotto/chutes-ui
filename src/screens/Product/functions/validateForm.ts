import { ImageInfo } from "../../../types/inputProps";

export const handleErrorsScrap = (
  photo1: ImageInfo | null,
  name: string,
  description: string,
  condition: string,
  price: number | undefined,
  weight: string,
  material: string[],
  category: string[],
  homePickup: boolean,
  sending: boolean,
  productLocation: string,
  setErrorPhoto: React.Dispatch<React.SetStateAction<string>>,
  setErrorName: React.Dispatch<React.SetStateAction<string>>,
  setErrorDescription: React.Dispatch<React.SetStateAction<string>>,
  setErrorCondition: React.Dispatch<React.SetStateAction<string>>,
  setErrorPrice: React.Dispatch<React.SetStateAction<string>>,
  setErrorWeight: React.Dispatch<React.SetStateAction<string>>,
  setErrorMaterial: React.Dispatch<React.SetStateAction<string>>,
  setErrorCategory: React.Dispatch<React.SetStateAction<string>>,
  setErrorProductLocation: React.Dispatch<React.SetStateAction<string>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
): boolean => {
  let isValid = true;
  //Photo errors
  if (!photo1) {
    setErrorPhoto("Ajoutez au moins 1 photo");
    isValid = false;
  } else {
    setErrorPhoto("");
  }
  //Name errors
  if (!name) {
    setErrorName("Champs requis");
    isValid = false;
  } else if (name.length > 40) {
    setErrorName("40 caractères maximum");
    isValid = false;
  } else {
    setErrorName("");
  }
  //Description errors
  if (!description) {
    setErrorDescription("Champs requis");
    isValid = false;
  } else if (description && description.length > 300) {
    setErrorDescription("300 caractères maximum");
    isValid = false;
  } else {
    setErrorDescription("");
  }
  //Condition errors
  if (!condition) {
    setErrorCondition("Choisissez un état dans la liste");
    isValid = false;
  } else {
    setErrorCondition("");
  }
  //Price errors
  if (price !== undefined) {
    // Vérifiez d'abord si price a une valeur
    if (price < 0) {
      setErrorPrice("Le prix ne peut pas être inférieur à 0€");
      isValid = false;
    } else if (price > 14000) {
      setErrorPrice("Le prix ne peut pas être supérieur à 14000€");
      isValid = false;
    } else {
      setErrorPrice("");
    }
  } else {
    setErrorPrice("Veuillez entrer un prix");
    isValid = false;
  }
  //Weight errors
  if (!weight) {
    setErrorWeight("Choisissez un poids dans la liste");
    isValid = false;
  } else {
    setErrorWeight("");
  }
  //Material errors
  if (!material || material.length === 0) {
    setErrorMaterial("Sélectionnez au moins 1 matière");
    isValid = false;
  } else {
    setErrorMaterial("");
  }
  //Category errors
  if (!category || category.length === 0) {
    setErrorCategory("Sélectionnez au moins 1 catégorie");
    isValid = false;
  } else {
    setErrorCategory("");
  }
  //HomePickup errors And ProductLocation errors
  if (homePickup === false && sending === false) {
    if (!productLocation) {
      setErrorProductLocation("Champs requis");
      isValid = false;
    } else if (productLocation.length > 40) {
      setErrorProductLocation("40 caractères maximum");
      isValid = false;
    } else {
      setErrorProductLocation("");
    }
  }
  // ... Add vérifications here
  if (isValid === false) {
    setErrorMessage("Veuillez remplir tous les champs");
  } else {
    setErrorMessage("");
  }
  return isValid;
};
