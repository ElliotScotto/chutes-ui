import { isValidUsername } from "./validateUsername";
import { isValidEmail } from "./validateEmail";
import { isValidPhoneNumber } from "./validatePhoneNumber";
const handleErrorsAccount = (
  username: string,
  email: string,
  password1: string,
  password2: string,
  phoneNumber: string,
  address: string,
  city: string,
  setErrorUsername: React.Dispatch<React.SetStateAction<string>>,
  setErrorEmail: React.Dispatch<React.SetStateAction<string>>,
  setErrorPassword1: React.Dispatch<React.SetStateAction<string>>,
  setErrorPassword2: React.Dispatch<React.SetStateAction<string>>,
  setErrorPhoneNumber: React.Dispatch<React.SetStateAction<string>>,
  setErrorAddress: React.Dispatch<React.SetStateAction<string>>,
  setErrorCity: React.Dispatch<React.SetStateAction<string>>
): boolean => {
  let isValidForm = true;
  if (username) {
    if (!isValidUsername(username)) {
      setErrorUsername("Saisissez 3 à 25 caractères maximum");
      isValidForm = false;
    } else {
      setErrorUsername("");
    }
  } else {
    setErrorUsername("Saisissez un nom d'utilisateur");
    isValidForm = false;
  }
  if (!email) {
    setErrorEmail("Saisissez votre adresse email");
    isValidForm = false;
  }
  if (email && !isValidEmail(email)) {
    setErrorEmail("Veuillez entrer une adresse valide");
    isValidForm = false;
  }
  if (isValidEmail(email)) {
    setErrorEmail("");
  }
  if (password1) {
    if (password1.length < 12) {
      setErrorPassword1("12 caractères minimum");
      isValidForm = false;
    } else {
      setErrorPassword1("");
    }
  } else {
    setErrorPassword1("Champs requis");
    isValidForm = false;
  }
  if (password2) {
    if (password2 !== password1) {
      setErrorPassword2("Les mots de passe doivent être identiques");
      isValidForm = false;
    } else {
      setErrorPassword2("");
    }
  } else {
    setErrorPassword2("Champs requis");
    isValidForm = false;
  }
  if (phoneNumber) {
    if (!isValidPhoneNumber(phoneNumber)) {
      setErrorPhoneNumber("Veuillez entrer un numéro de téléphone valide");
      isValidForm = false;
    } else {
      setErrorPhoneNumber("");
    }
  } else {
    setErrorPhoneNumber("Saisissez un numéro de téléphone");
    isValidForm = false;
  }
  if (address) {
    setErrorAddress("");
  } else {
    setErrorAddress("Saisissez votre n° et rue de domicile");
    isValidForm = false;
  }
  if (city) {
    setErrorCity("");
  } else {
    setErrorCity("Saisissez votre ville de domicile");
    isValidForm = false;
  }
  return isValidForm;
};
export { handleErrorsAccount };
