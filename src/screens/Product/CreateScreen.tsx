import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
//packages
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
//styles
import displays from "../../styles/display";
import buttons from "../../styles/buttons";
import fonts from "../../styles/fonts";
//components
import Spacer from "../../utils/Spacer";
import NameSelected from "./components/NameSelected";
import DescriptionSelected from "./components/DescriptionSelected";
import PriceSelected from "./components/PriceSelected";
import QuantitySelected from "./components/QuantitySelected";
import ConditionSelected from "./components/ConditionSelected";
import WeightSelected from "./components/WeightSelected";
import MaterialSelected from "./components/MaterialSelected";
import CategorySelected from "./components/CategorySelected";
import ProductLocationSelected from "./components/ProductLocationSelected";
import DeliverySelected from "./components/DeliverySelected";
//functions
import { handleErrors } from "./functions/validateForm";
const CreateScreen = () => {
  //product states
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  const [quantity, setQuantity] = useState<number | undefined>();
  const [price, setPrice] = useState<number | undefined>();
  const [weight, setWeight] = useState<string>("");
  const [material, setMaterial] = useState<string[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [productLocation, setProductLocation] = useState<string>("");
  const [homePickup, setHomePickup] = useState<boolean>(true);
  const [sending, setSending] = useState<boolean>(false);
  //Modal visibility
  const [isModalConditionsVisible, setIsModalConditionsVisible] =
    useState(false);
  const [isModalWeightsVisible, setIsModalWeightsVisible] = useState(false);
  const [isModalCategoriesVisible, setIsModalCategoriesVisible] =
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
  const [sellerDelivers, setSellerDelivers] = useState(false);
  const [errorSending, setErrorSending] = useState("");

  //Form validation
  const handleSubmit = () => {
    const isValidForm = handleErrors(
      name,
      setName,
      description,
      condition,
      price,
      quantity,
      weight,
      material,
      category,
      productLocation,
      homePickup,
      sending,
      setErrorName,
      setErrorDescription,
      setErrorCondition,
      setErrorPrice,
      setErrorQuantity,
      setErrorWeight,
      setErrorMaterial,
      setErrorCategory,
      setErrorProductLocation,
      setErrorHomePickup,
      setErrorSending
    );
    if (isValidForm) {
      console.log("Super! il n'y a pas d'erreurs.");
    } else {
      console.log("Il y a au moins une erreur de saisie dans le formulaire.");
    }
  };
  // Gestion changement de sélection de matériaux
  const toggleMaterial = (mat: string) => {
    if (material.includes(mat)) {
      setMaterial((prev) => prev.filter((item) => item !== mat));
    } else {
      setMaterial((prev) => [...prev, mat]);
    }
  };
  // Gestion changement de sélection de catégorie
  const toggleCategory = (cat: string) => {
    if (category.includes(cat)) {
      setCategory((prev) => prev.filter((item) => item !== cat));
    } else {
      setCategory((prev) => [...prev, cat]);
    }
  };
  console.log("######################################");
  console.log("name : ", name);
  console.log("name.length : ", name.length);
  console.log("description : ", description);
  console.log("condition : ", condition);
  console.log("quantity : ", quantity);
  console.log(`price : ${price} (${typeof price})`);
  console.log("material : ", material);
  console.log("weight : ", weight);
  console.log("category : ", category);
  console.log("productLocation : ", productLocation);
  console.log("homePickup : ", homePickup);
  console.log("sellerDelivers : ", sellerDelivers);
  console.log("sending : ", sending);
  console.log("######################################");
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[displays.flex, displays.white, displays.w100, displays.aliC]}
      >
        <ScrollView>
          <View style={[displays.aliC, displays.w90]}>
            <Spacer height={20} />
            <NameSelected name={name} setName={setName} errorName={errorName} />
            <Spacer height={20} />
            <DescriptionSelected
              description={description}
              setDescription={setDescription}
              errorDescription={errorDescription}
            />
            <Spacer height={20} />
            <PriceSelected
              price={price}
              setPrice={setPrice}
              errorPrice={errorPrice}
            />
            <Spacer height={20} />
            <QuantitySelected
              quantity={quantity}
              setQuantity={setQuantity}
              errorQuantity={errorQuantity}
            />
            <Spacer height={20} />
            <ConditionSelected
              condition={condition}
              setCondition={setCondition}
              isModalConditionsVisible={isModalConditionsVisible}
              setIsModalConditionsVisible={setIsModalConditionsVisible}
              errorCondition={errorCondition}
            />
            <Spacer height={20} />
            <WeightSelected
              weight={weight}
              setWeight={setWeight}
              isModalWeightsVisible={isModalWeightsVisible}
              setIsModalWeightsVisible={setIsModalWeightsVisible}
              errorWeight={errorWeight}
            />

            <Spacer height={20} />
            <MaterialSelected
              material={material}
              errorMaterial={errorMaterial}
              toggleMaterial={toggleMaterial}
            />
            <Spacer height={20} />
            <CategorySelected
              category={category}
              errorCategory={errorCategory}
              toggleCategory={toggleCategory}
            />
            <Spacer height={20} />
            <DeliverySelected
              homePickup={homePickup}
              setHomePickup={setHomePickup}
              errorHomePickup={errorHomePickup}
              setErrorHomePickup={setErrorHomePickup}
              setSellerDelivers={setSellerDelivers}
            />
            <ProductLocationSelected
              productLocation={productLocation}
              setProductLocation={setProductLocation}
              errorProductLocation={errorProductLocation}
              setErrorProductLocation={setErrorProductLocation}
              sellerDelivers={sellerDelivers}
            />
            <Spacer height={50} />
            <View style={displays.aliC}>
              <Pressable onPress={handleSubmit} style={buttons.primary}>
                <Text style={fonts.primary}>Publier</Text>
              </Pressable>
            </View>
            <Spacer height={20} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default CreateScreen;
