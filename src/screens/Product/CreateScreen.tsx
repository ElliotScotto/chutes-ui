import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
import * as Yup from "yup";
//packages
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
//styles
import ChutesColors from "../../styles/colors";
const color = ChutesColors();
import displays from "../../styles/display";
//components
import Spacer from "../../utils/Spacer";
import ModalConditionPicker from "./components/ModalConditionPicker";
//types
import { ScrapDataCreation, Material, MATERIALS } from "../../types/dataTypes";
interface ValidationError extends Error {
  inner: Array<Error & { path?: string }>;
}

const validateFormValues = (values: ScrapDataCreation) => {
  let errors: any = {};

  if (!values.name) {
    errors.title = "Obligatoire";
  }
  if (!values.description) {
    errors.description = "Champs requis";
  }
  if (
    !values.condition ||
    values.condition === "Dans quel état est votre chute ? "
  ) {
    errors.condition = "Obligatoire";
  }
  if (values.quantity < 1) {
    errors.quantity = "minimum 1";
  }
  if (values.price < 1) {
    errors.price = "Le prix ne peut être inférieur à 1€";
  }
  if (!values.weight) {
    errors.weight = "Obligatoire";
  }
  if (values.material.length < 1 || values.material.length > 2) {
    errors.material =
      values.material.length < 1
        ? "Sélectionnez au moins 1 matière"
        : "Un maximum de 2 matières est autorisé";
  }
  if (values.category.length < 1 || values.category.length > 2) {
    errors.category =
      values.category.length < 1
        ? "Sélectionnez au moins 1 catégorie"
        : "2 catégories max. sont autorisé";
  }
  if (!values.productLocation) {
    errors.productLocation = "Champs requis";
  }

  return errors;
};

const CreateScreen = () => {
  //product states
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState(
    "Dans quel état est votre chute ? "
  );
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState("");
  const [material, setMaterial] = useState([
    "Matière(s) principale(s)... (2 max.)",
  ]);
  const [category, setCategory] = useState([
    "Choisissez une catégorie... (2 max.)",
  ]);
  const [productLocation, setProductLocation] = useState("");
  const [homePickup, setHomePickup] = useState(true);
  const [sending, setSending] = useState(false);

  const [isModalConditionsVisible, setIsModalConditionsVisible] =
    useState(false);
  //errors
  const [errorName, setErrorName] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorCondition, setErrorCondition] = useState("");
  const [errorQuantity, setErrorQuantity] = useState("");
  const [errorPrice, setErrorPrice] = useState("");
  const [errorWeight, setErrorWeight] = useState("");
  const [errorMaterial, setErrorMaterial] = useState("");
  const [errorCategory, setErrorCategory] = useState("");
  const [errorProductLocation, setErrorProductLocation] = useState("");
  const [errorHomePickup, setErrorHomePickup] = useState("");
  const [errorSending, setErrorSending] = useState("");
  const isValidationError = (error: any): error is ValidationError => {
    return error && Array.isArray(error.inner);
  };
  //Form validation
  const handleSubmit = () => {
    const formValues: ScrapDataCreation = {
      name,
      description,
      condition,
      quantity,
      price,
      weight,
      material,
      category,
      productLocation,
      homePickup,
      sending,
    };

    const errors = validateFormValues(formValues);

    // Reset all errors
    setErrorName("");
    setErrorDescription("");
    setErrorCondition("");
    setErrorQuantity("");
    setErrorPrice("");
    setErrorWeight("");
    setErrorMaterial("");
    setErrorCategory("");
    setErrorProductLocation("");
    setErrorHomePickup("");
    setErrorSending("");

    // Set the specific errors
    if (errors.title) setErrorName(errors.title);
    if (errors.description) setErrorDescription(errors.description);
    if (errors.condition) setErrorCondition(errors.condition);
    if (errors.quantity) setErrorQuantity(errors.quantity);
    if (errors.price) setErrorPrice(errors.price);
    if (errors.weight) setErrorWeight(errors.weight);
    if (errors.material) setErrorMaterial(errors.material);
    if (errors.category) setErrorCategory(errors.category);
    if (errors.productLocation) setErrorProductLocation(errors.productLocation);
    if (errors.homePickup) setErrorHomePickup(errors.homePickup);
    if (errors.sending) setErrorSending(errors.sending);
  };
  // Fonction pour gérer le changement de sélection de matériaux
  const toggleMaterial = (mat: string) => {
    if (material.includes(mat)) {
      setMaterial((prev) => prev.filter((item) => item !== mat));
    } else {
      setMaterial((prev) => [...prev, mat]);
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[displays.flex, displays.white, displays.w100, displays.aliC]}
      >
        <View style={[styles.container, displays.w95]}>
          <TextInput
            mode="outlined"
            label="Titre*"
            value={name}
            style={{ width: "100%" }}
            onChangeText={setName}
          />
          {errorName && (
            <Text style={{ color: color.error, paddingLeft: 18 }}>
              {errorName}
            </Text>
          )}
          <Spacer height={20} />
          <TextInput
            dense={true}
            multiline={true}
            style={{
              justifyContent: "flex-start",
              textAlign: "left",
              height: 150,
              width: "100%",
            }}
            mode="outlined"
            label="Description*"
            placeholder="Décrivez votre chute : Dimensions, couleurs... (300 caractères maximum)"
            value={description}
            onChangeText={setDescription}
          />
          {errorDescription && (
            <Text style={{ color: color.error, paddingLeft: 18 }}>
              {errorDescription}
            </Text>
          )}
          <Spacer height={20} />
          <Pressable
            style={styles.pressable}
            onPress={() => {
              setIsModalConditionsVisible(true);
            }}
          >
            <Text style={styles.text}>{condition}</Text>
          </Pressable>
          <Modal
            transparent={false}
            animationType="fade"
            visible={isModalConditionsVisible}
            onRequestClose={() => {
              setIsModalConditionsVisible(false);
            }}
          >
            <ModalConditionPicker
              changeModalVisibility={setIsModalConditionsVisible}
              setData={setCondition}
            />
          </Modal>
          {errorCondition && (
            <Text style={{ color: color.error, paddingHorizontal: 18 }}>
              {errorCondition}
            </Text>
          )}
          <View style={styles.materialContainer}>
            {Object.keys(MATERIALS).map((key) => (
              <Pressable
                key={key}
                style={styles.materialCheckButton}
                onPress={() => toggleMaterial(key)}
              >
                <View style={styles.itemMaterial}>
                  <Text style={styles.materialItemFont}>{key}</Text>
                  <Checkbox
                    status={material.includes(key) ? "checked" : "unchecked"}
                    onPress={() => toggleMaterial(key)}
                  />
                </View>
              </Pressable>
            ))}
          </View>
          <Spacer height={20} />
          <Spacer height={100} />
          <Pressable onPress={handleSubmit}>
            <Text>Publier</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  pressable: {
    alignSelf: "stretch",
    paddingHorizontal: 20,
  },
  text: { marginVertical: 10, fontSize: 16, color: color.secondary },
  //Materials
  materialContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  materialItemFont: {
    fontSize: 16,
    color: color.secondary,
  },
  materialCheckButton: {
    flexDirection: "row",
  },
  itemMaterial: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: color.tertiary,
    borderWidth: 1,
    borderRadius: 20,
    margin: 6,
    paddingVertical: "auto",
    paddingHorizontal: 10,
  },
});
export default CreateScreen;
