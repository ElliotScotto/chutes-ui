import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
//packages
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
//styles
import ChutesColors from "../../styles/colors";
const color = ChutesColors();
import displays from "../../styles/display";
import scrapCreation from "../../styles/scrapCreation";
import buttons from "../../styles/buttons";
import fonts from "../../styles/fonts";
//components
import Spacer from "../../utils/Spacer";
import ModalConditionPicker from "./components/ModalConditionPicker";
//types
import { ScrapDataCreation, MATERIALS } from "../../types/dataTypes";
//icons
import ChevronDown from "react-native-vector-icons/MaterialCommunityIcons";

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
  const [material, setMaterial] = useState<string[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  // = useState([
  //   "Choisissez une catégorie... (2 max.)",
  // ]);
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

  //Form validation
  const handleErrors = () => {
    let isValid = true;
    //Name errors
    if (!name) {
      setErrorName("Champs requis");
      isValid = false;
    } else {
      setErrorName("");
    }
    //Description errors
    if (!description) {
      setErrorDescription("Champs requis");
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
    //Quantity errors
    if (quantity < 1) {
      setErrorQuantity("minimum 1");
      isValid = false;
    } else {
      setErrorQuantity("");
    }
    //Price errors
    if (price < 1) {
      setErrorPrice("Le prix ne peut être inférieur à 1€");
      isValid = false;
    } else {
      setErrorPrice("");
    }
    //Weight errors
    if (!weight) {
      setErrorWeight("Champs requis");
      isValid = false;
    } else {
      setErrorWeight("");
    }
    //Material errors
    if (!material || material.length < 1) {
      setErrorMaterial("Sélectionnez au moins 1 matière");
      isValid = false;
    } else if (material.length > 2) {
      setErrorMaterial("Un maximum de 2 matières est autorisé");
      isValid = false;
    } else {
      setErrorMaterial("");
    }
    //Category errors
    if (!category || category.length < 1) {
      setErrorCategory("Sélectionnez au moins 1 catégorie");
      isValid = false;
    } else if (category.length > 2) {
      setErrorCategory("2 catégories max. sont autorisées");
      isValid = false;
    } else {
      setErrorCategory("");
    }
    //ProductLocation errors
    if (!productLocation) {
      setErrorProductLocation("Champs requis");
      isValid = false;
    } else {
      setErrorProductLocation("");
    }
    //HomePickup errors
    if (!homePickup) {
      setErrorHomePickup("Champs requis");
      isValid = false;
    } else {
      setErrorHomePickup("");
    }
    //Sending errors
    if (!sending) {
      setErrorSending("Champs requis");
      isValid = false;
    } else {
      setErrorSending("");
    }
    return isValid;
  };
  const handleSubmit = () => {
    if (handleErrors()) {
      console.log("Super! il n'y a pas d'erreurs.");
    } else {
      console.log("Il y a au moins une erreur de saisie dans le formulaire.");
    }
  };
  // Fonction pour gérer le changement de sélection de matériaux
  const toggleMaterial = (mat: string) => {
    if (material.includes(mat)) {
      setMaterial((prev) => prev.filter((item) => item !== mat));
    } else {
      setMaterial((prev) => [...prev, mat]);
    }
  };
  console.log("######################################");
  console.log("name : ", name);
  console.log("description : ", description);
  console.log("condition : ", condition);
  console.log("quantity : ", quantity);
  console.log("price : ", price);
  console.log("material : ", material);
  console.log("weight : ", weight);
  console.log("category : ", category);
  console.log("productLocation : ", productLocation);
  console.log("homePickup : ", homePickup);
  console.log("sending : ", sending);
  console.log("######################################");
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[displays.flex, displays.white, displays.w100, displays.aliC]}
      >
        <View style={[displays.aliC, displays.w95]}>
          <TextInput
            mode="outlined"
            label="Titre*"
            value={name}
            style={{ width: "100%" }}
            onChangeText={setName}
          />
          <View style={{ marginTop: 6, alignSelf: "flex-end" }}>
            {errorName && (
              <Text
                style={{
                  color: color.error,
                }}
              >
                *{errorName}
              </Text>
            )}
          </View>
          <Spacer height={20} />
          <TextInput
            mode="outlined"
            label="Description*"
            placeholder="Décrivez votre chute : Dimensions, couleurs... (300 caractères maximum)"
            dense={true}
            multiline={true}
            style={{
              justifyContent: "flex-start",
              textAlign: "left",
              height: 150,
              width: "100%",
            }}
            value={description}
            onChangeText={setDescription}
          />
          <View style={{ marginTop: 6, alignSelf: "flex-end" }}>
            {errorDescription && (
              <Text style={{ color: color.error }}>*{errorDescription}</Text>
            )}
          </View>
          <Spacer height={20} />
          <View style={scrapCreation.conditionTitle}>
            <Text style={scrapCreation.conditionTitleFont}>
              Quel est l'état de votre chute ?...
            </Text>
          </View>
          <Spacer height={5} />
          <Pressable
            style={scrapCreation.modalConditions}
            onPress={() => {
              setIsModalConditionsVisible(true);
            }}
          >
            <Text style={fonts.conditions}>{condition}</Text>
            <ChevronDown
              name="chevron-down"
              size={25}
              color={color.secondary}
            />
          </Pressable>
          <Modal
            transparent={true}
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
          <View style={{ marginTop: 6, alignSelf: "flex-end" }}>
            {errorCondition && (
              <Text style={{ color: color.error }}>*{errorCondition}</Text>
            )}
          </View>
          <Spacer height={20} />
          <View style={scrapCreation.materialContainer}>
            <View style={scrapCreation.materialTitle}>
              <Text style={scrapCreation.materialTitleFont}>
                Matière(s) principale(s)... (2 max.)
              </Text>
            </View>
            <Spacer height={5} />
            <View style={scrapCreation.materialItemContainer}>
              {Object.values(MATERIALS).map((key) => (
                <Pressable
                  key={key}
                  style={scrapCreation.materialCheckButton}
                  onPress={() => toggleMaterial(key)}
                >
                  <View style={scrapCreation.itemMaterial}>
                    <Text style={scrapCreation.materialTitleFont}>{key}</Text>
                    <Checkbox
                      status={material.includes(key) ? "checked" : "unchecked"}
                      onPress={() => toggleMaterial(key)}
                    />
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
          <View style={{ marginTop: 6, alignSelf: "flex-end" }}>
            {errorMaterial && (
              <Text style={{ color: color.error }}>*{errorMaterial}</Text>
            )}
          </View>
          <Spacer height={20} />
          <Spacer height={100} />
          <Pressable onPress={handleSubmit} style={buttons.primary}>
            <Text style={fonts.primary}>Publier</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default CreateScreen;
