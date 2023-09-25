import { View } from "react-native";
export const handleErrors = (
  name: string,
  description: string,
  condition: string,
  price: number | undefined,
  quantity: number | undefined,
  weight: string,
  material: string[],
  category: string[],
  productLocation: string,
  homePickup: boolean,
  setErrorName: React.Dispatch<React.SetStateAction<string>>,
  setErrorDescription: React.Dispatch<React.SetStateAction<string>>,
  setErrorCondition: React.Dispatch<React.SetStateAction<string>>,
  setErrorPrice: React.Dispatch<React.SetStateAction<string>>,
  setErrorQuantity: React.Dispatch<React.SetStateAction<string>>,
  setErrorWeight: React.Dispatch<React.SetStateAction<string>>,
  setErrorMaterial: React.Dispatch<React.SetStateAction<string>>,
  setErrorCategory: React.Dispatch<React.SetStateAction<string>>,
  setErrorProductLocation: React.Dispatch<React.SetStateAction<string>>,
  nameRef: React.RefObject<any>,
  descriptionRef: React.RefObject<any>,
  priceRef: React.RefObject<any>,
  quantityRef: React.RefObject<any>,
  conditionRef: React.RefObject<any>,
  weightRef: React.RefObject<any>,
  materialRef: React.RefObject<any>,
  categoryRef: React.RefObject<any>,
  homePickupRef: React.RefObject<any>,
  productLocationRef: React.RefObject<any>,
  scrollToRef: (ref: React.RefObject<View>) => void
): boolean => {
  let isValid = true;

  //Name errors
  console.log("scrollToRef in handleErrors", scrollToRef);
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
    setErrorCondition("Champs requis");
    isValid = false;
  } else {
    setErrorCondition("");
  }

  //Price errors
  if (price !== undefined) {
    // Vérifiez d'abord si price a une valeur
    if (price < 1) {
      setErrorPrice("Le prix ne peut pas être inférieur à 1€");
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
  //Quantity errors
  if (quantity !== undefined) {
    // Vérifiez d'abord si price a une valeur
    if (quantity < 1) {
      setErrorQuantity("minimum 1");
      isValid = false;
    } else {
      setErrorQuantity("");
    }
  } else {
    setErrorQuantity("Veuillez entrer une quantité valide");
    isValid = false;
  }
  //Weight errors
  if (!weight) {
    setErrorWeight("Champs requis");
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
  if (homePickup === true) {
    if (!productLocation) {
      setErrorProductLocation("Champs requis");
      isValid = false;
    } else if (productLocation.length > 45) {
      setErrorProductLocation("45 caractères maximum");
      isValid = false;
    } else {
      setErrorProductLocation("");
    }
  }
  // ... Add vérifications here

  //if multiple errors we put focus on the first field from top to bottom
  if (!name) {
    //nameRef.current?.focus();
    scrollToRef(nameRef);
  } else if (name && name.length > 45) {
    scrollToRef(nameRef);
  } else if (!description) {
    scrollToRef(descriptionRef);
  } else if (description && description.length > 300) {
    scrollToRef(descriptionRef);
  } else if (!price) {
    scrollToRef(priceRef);
  } else if (!quantity) {
    scrollToRef(quantityRef);
  } else if (!condition) {
    scrollToRef(conditionRef);
  } else if (!weight) {
    scrollToRef(weightRef);
  } else if (!material) {
    scrollToRef(materialRef);
  } else if (!category) {
    scrollToRef(categoryRef);
  } else if (!homePickup) {
    scrollToRef(homePickupRef);
  } else if (!productLocation) {
    scrollToRef(productLocationRef);
  }
  // else if (!productLocation) {
  //   productLocationRef.current?.focus();
  // }
  return isValid;
};
