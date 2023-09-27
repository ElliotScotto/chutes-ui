import React, { useState, useRef } from "react";
import { View, Text, ScrollView } from "react-native";
//packages
import axios from "axios";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Constants from "expo-constants";
const deviceName = Constants.deviceName;
//styles
import displays from "../../styles/display";
import fonts from "../../styles/fonts";
import ChutesColors from "../../styles/colors";
const color = ChutesColors();
//utils
import Spacer from "../../utils/Spacer";
//components
import NameSelected from "./components/NameSelected";
import DescriptionSelected from "./components/DescriptionSelected";
import PriceSelected from "./components/PriceSelected";
import QuantitySelected from "./components/QuantitySelected";
import ConditionSelected from "./components/ConditionSelected";
import WeightSelected from "./components/WeightSelected";
import MaterialSelected from "./components/MaterialSelected";
import CategorySelected from "./components/CategorySelected";
import DeliverySelected from "./components/DeliverySelected";
import ProductLocationSelected from "./components/ProductLocationSelected";
import PostScrapButton from "./components/PostScrapButton";
//functions
import { handleErrors } from "./functions/validateForm";
import { scrollToRef } from "./functions/handleFocus";

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
  const [homePickup, setHomePickup] = useState<boolean>(true);
  const [productLocation, setProductLocation] = useState<string>("");
  const [sellerDelivers, setSellerDelivers] = useState<boolean>(false);
  //Focus & ref
  const scrollViewRef = useRef<ScrollView>(null);
  const nameRef = useRef<View>(null);
  const descriptionRef = useRef<View>(null);
  const priceRef = useRef<View>(null);
  const quantityRef = useRef<View>(null);
  const conditionRef = useRef<View>(null);
  const weightRef = useRef<View>(null);
  const materialRef = useRef<View>(null);
  const categoryRef = useRef<View>(null);
  const productLocationRef = useRef<View>(null);
  //Modal visibility
  const [isModalConditionsVisible, setIsModalConditionsVisible] =
    useState(false);
  const [isModalWeightsVisible, setIsModalWeightsVisible] = useState(false);
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
  const [errorMessage, setErrorMessage] = useState("");
  //Button
  const [counterPressed, setCounterPressed] = useState<number>(0);
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);
  const [shadowButton, setShadowButton] = useState<boolean>(true);
  //Form validation
  const handleSubmit = () => {
    const isValidForm = handleErrors(
      name,
      description,
      condition,
      price,
      quantity,
      weight,
      material,
      category,
      homePickup,
      productLocation,
      setErrorName,
      setErrorDescription,
      setErrorCondition,
      setErrorPrice,
      setErrorQuantity,
      setErrorWeight,
      setErrorMaterial,
      setErrorCategory,
      setErrorProductLocation,
      setErrorMessage
    );
    if (isValidForm) {
      setIsButtonEnabled(true);
      let currentHost;
      if (deviceName === "LYA-L29") {
        currentHost = "192.168.1.38";
      } else {
        currentHost = "localhost";
      }
      postScrapData(currentHost);
    } else {
      setIsButtonEnabled(false);
      //if multiple errors focus set on the first area from top to bottom
      if (!name) {
        scrollToRef(scrollViewRef, nameRef);
      } else if (name && name.length > 45) {
        scrollToRef(scrollViewRef, nameRef);
      } else if (!description) {
        scrollToRef(scrollViewRef, descriptionRef);
      } else if (description && description.length > 300) {
        scrollToRef(scrollViewRef, descriptionRef);
      } else if (!price) {
        scrollToRef(scrollViewRef, priceRef);
      } else if (!quantity) {
        scrollToRef(scrollViewRef, quantityRef);
      } else if (!condition) {
        scrollToRef(scrollViewRef, conditionRef);
      } else if (!weight) {
        scrollToRef(scrollViewRef, weightRef, -30);
      } else if (!material || material.length === 0) {
        scrollToRef(scrollViewRef, materialRef);
      } else if (!category || category.length === 0) {
        scrollToRef(scrollViewRef, categoryRef, -15);
      } else if (homePickup === true && !productLocation) {
        scrollToRef(scrollViewRef, productLocationRef);
      }
    }
  };
  const postScrapData = async (currentHost: string) => {
    try {
      const response = await axios.post(
        `http://${currentHost}:8000/api/scraps/`,
        {
          owner: 3, //dev mode
          name,
          description,
          condition,
          price,
          quantity,
          weight,
          material,
          category,
          homePickup,
          productLocation,
        }
      );
      console.log("response.data : ", response);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
      if ((error as any).response) {
        console.error("Détails de l’erreur:", (error as any).response.data);
      }
    }
  };
  console.log("######################################");
  console.log("name : ", name);
  console.log("description : ", description);
  console.log("condition : ", condition);
  console.log("quantity : ", quantity);
  console.log("price :", price);
  console.log("material : ", material);
  console.log("weight : ", weight);
  console.log("category : ", category);
  console.log("productLocation : ", productLocation);
  console.log("homePickup : ", homePickup);
  console.log("sellerDelivers : ", sellerDelivers);
  console.log("isButtonEnabled : ", isButtonEnabled);
  console.log("######################################");
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[displays.flex, displays.white, displays.w100, displays.aliC]}
      >
        <ScrollView ref={scrollViewRef}>
          <View style={[displays.aliC, displays.w90]}>
            <Spacer height={20} />
            <Text style={fonts.createTitle}>Publie ta chute</Text>
            <Spacer height={20} />
            <NameSelected
              name={name}
              setName={setName}
              errorName={errorName}
              counterPressed={counterPressed}
              nameRef={nameRef}
            />
            <Spacer height={20} />
            <DescriptionSelected
              description={description}
              setDescription={setDescription}
              errorDescription={errorDescription}
              counterPressed={counterPressed}
              descriptionRef={descriptionRef}
            />
            <Spacer height={20} />
            <PriceSelected
              price={price}
              setPrice={setPrice}
              errorPrice={errorPrice}
              counterPressed={counterPressed}
              priceRef={priceRef}
            />
            <Spacer height={20} />
            <QuantitySelected
              quantity={quantity}
              setQuantity={setQuantity}
              errorQuantity={errorQuantity}
              counterPressed={counterPressed}
              quantityRef={quantityRef}
            />
            <Spacer height={20} />
            <ConditionSelected
              condition={condition}
              setCondition={setCondition}
              isModalConditionsVisible={isModalConditionsVisible}
              setIsModalConditionsVisible={setIsModalConditionsVisible}
              errorCondition={errorCondition}
              counterPressed={counterPressed}
              conditionRef={conditionRef}
            />
            <Spacer height={20} />
            <WeightSelected
              weight={weight}
              setWeight={setWeight}
              isModalWeightsVisible={isModalWeightsVisible}
              setIsModalWeightsVisible={setIsModalWeightsVisible}
              errorWeight={errorWeight}
              counterPressed={counterPressed}
              weightRef={weightRef}
            />
            <Spacer height={20} />
            <MaterialSelected
              material={material}
              setMaterial={setMaterial}
              errorMaterial={errorMaterial}
              counterPressed={counterPressed}
              materialRef={materialRef}
            />
            <Spacer height={20} />
            <CategorySelected
              category={category}
              setCategory={setCategory}
              errorCategory={errorCategory}
              counterPressed={counterPressed}
              categoryRef={categoryRef}
            />

            <Spacer height={20} />
            <DeliverySelected
              homePickup={homePickup}
              setHomePickup={setHomePickup}
              setSellerDelivers={setSellerDelivers}
            />
            <ProductLocationSelected
              productLocation={productLocation}
              setProductLocation={setProductLocation}
              errorProductLocation={errorProductLocation}
              sellerDelivers={sellerDelivers}
              counterPressed={counterPressed}
            />
            <Spacer height={10} />
            <View style={[{ height: 30, width: "100%" }, displays.center]}>
              {errorMessage && counterPressed !== 0 && (
                <Text
                  style={{
                    color: color.error,
                    fontSize: 16,
                  }}
                >
                  {errorMessage}
                </Text>
              )}
            </View>
            <Spacer height={40} />
            <PostScrapButton
              shadowButton={shadowButton}
              setShadowButton={setShadowButton}
              isButtonEnabled={isButtonEnabled}
              setIsButtonEnabled={setIsButtonEnabled}
              handleSubmit={handleSubmit}
              name={name}
              description={description}
              condition={condition}
              price={price}
              quantity={quantity}
              weight={weight}
              material={material}
              category={category}
              productLocation={productLocation}
              homePickup={homePickup}
              setErrorName={setErrorName}
              setErrorDescription={setErrorDescription}
              setErrorCondition={setErrorCondition}
              setErrorPrice={setErrorPrice}
              setErrorQuantity={setErrorQuantity}
              setErrorWeight={setErrorWeight}
              setErrorMaterial={setErrorMaterial}
              setErrorCategory={setErrorCategory}
              setErrorProductLocation={setErrorProductLocation}
              setErrorMessage={setErrorMessage}
              counterPressed={counterPressed}
              setCounterPressed={setCounterPressed}
            />
            <Spacer height={40} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default CreateScreen;
