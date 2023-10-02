import { isValidUsername } from "./validateUsername";
import { isValidEmail } from "./validateEmail";
import { isValidPhoneNumber } from "./validatePhoneNumber";
const handleErrorsAccount = (
  username: string,
  email: string,
  password: string,
  phoneNumber: string,
  address: string,
  city: string,
  setErrorUsername: React.Dispatch<React.SetStateAction<string>>,
  setErrorEmail: React.Dispatch<React.SetStateAction<string>>,
  setErrorPassword: React.Dispatch<React.SetStateAction<string>>,
  setErrorPhoneNumber: React.Dispatch<React.SetStateAction<string>>,
  setErrorAddress: React.Dispatch<React.SetStateAction<string>>,
  setErrorCity: React.Dispatch<React.SetStateAction<string>>
): boolean => {
  let isValidForm = true;
  if (username) {
    if (!isValidUsername(username)) {
      setErrorUsername(
        "Saisissez un nom d'utilisateur entre 3 et 25 caractères maximum"
      );
      isValidForm = false;
    } else {
      setErrorUsername("");
    }
  } else {
    setErrorUsername("Champs requis");
    isValidForm = false;
  }
  if (!email) {
    setErrorEmail("Veuillez entrer une adresse email");
    isValidForm = false;
  }
  if (email && !isValidEmail(email)) {
    setErrorEmail("Veuillez entrer une adresse valide");
    isValidForm = false;
  }
  if (isValidEmail(email)) {
    setErrorEmail("");
  }
  if (password) {
    if (password.length < 12) {
      setErrorPassword("12 caractères minimum");
      isValidForm = false;
    } else {
      setErrorPassword("");
    }
  } else {
    setErrorPassword("Champs requis");
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
    setErrorPhoneNumber("Veuillez entrer un numéro de téléphone");
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
