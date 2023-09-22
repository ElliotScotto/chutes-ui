export const handleErrors = (
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  description: string,
  condition: string,
  price: number | undefined,
  quantity: number | undefined,
  weight: string,
  material: string[],
  category: string[],
  productLocation: string,
  homePickup: boolean,
  sending: boolean,
  setErrorName: React.Dispatch<React.SetStateAction<string>>,
  setErrorDescription: React.Dispatch<React.SetStateAction<string>>,
  setErrorCondition: React.Dispatch<React.SetStateAction<string>>,
  setErrorPrice: React.Dispatch<React.SetStateAction<string>>,
  setErrorQuantity: React.Dispatch<React.SetStateAction<string>>,
  setErrorWeight: React.Dispatch<React.SetStateAction<string>>,
  setErrorMaterial: React.Dispatch<React.SetStateAction<string>>,
  setErrorCategory: React.Dispatch<React.SetStateAction<string>>,
  setErrorProductLocation: React.Dispatch<React.SetStateAction<string>>,
  setErrorHomePickup: React.Dispatch<React.SetStateAction<string>>,
  setErrorSending: React.Dispatch<React.SetStateAction<string>>
): boolean => {
  let isValid = true;

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
    setErrorPrice("Veuillez entrer un prix valide");
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
  //ProductLocation errors
  // if (!productLocation) {
  //   setErrorProductLocation("Champs requis");
  //   isValid = false;
  // } else {
  //   setErrorProductLocation("");
  // }
  //HomePickup errors
  // if (homePickup) {
  //   setErrorHomePickup("Champs requis");
  //   isValid = false;
  // } else {
  //   setErrorHomePickup("");
  // }
  //Sending errors
  // if (!sending) {
  //   setErrorSending("Champs requis");
  //   isValid = false;
  // } else {
  //   setErrorSending("");
  // }
  // ... Add vérifications here
  return isValid;
};
