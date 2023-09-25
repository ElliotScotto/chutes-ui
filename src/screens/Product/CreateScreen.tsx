import React, { useState, useRef } from "react";
import { View, Text, ScrollView } from "react-native";
//packages
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
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
type RefType = React.RefObject<View>;

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
  const nameRef = useRef<View | null>(null);
  const descriptionRef = useRef<View | null>(null);
  const priceRef = useRef<View | null>(null);
  const quantityRef = useRef<View | null>(null);
  const conditionRef = useRef<View | null>(null);
  const weightRef = useRef<View | null>(null);
  const materialRef = useRef<View | null>(null);
  const categoryRef = useRef<View | null>(null);
  const homePickupRef = useRef<View | null>(null);
  const productLocationRef = useRef<View | null>(null);
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
  //Focus
  const scrollToRef = (ref: RefType) => {
    if (ref.current && scrollViewRef.current) {
      (ref.current as any).measureLayout(
        scrollViewRef.current as any,
        (_: number, y: number, width: number, height: number) => {
          console.log("Position Y:", y);
          let offset = y - 20; // Ajout d'une marge de 50 pixels pour décaler vers le haut
          scrollViewRef.current?.scrollTo({
            x: 0,
            y: offset,
            animated: true,
          });
        }
      );
    }
  };
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
      productLocation,
      homePickup,
      setErrorName,
      setErrorDescription,
      setErrorCondition,
      setErrorPrice,
      setErrorQuantity,
      setErrorWeight,
      setErrorMaterial,
      setErrorCategory,
      setErrorProductLocation,
      nameRef,
      descriptionRef,
      priceRef,
      quantityRef,
      conditionRef,
      weightRef,
      materialRef,
      categoryRef,
      homePickupRef,
      productLocationRef,
      scrollToRef
    );
    if (isValidForm) {
      setIsButtonEnabled(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Veuillez remplir tous les champs");
      setIsButtonEnabled(false);
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
              errorMaterial={errorMaterial}
              toggleMaterial={toggleMaterial}
              counterPressed={counterPressed}
              materialRef={materialRef}
            />
            <Spacer height={20} />
            <CategorySelected
              category={category}
              errorCategory={errorCategory}
              toggleCategory={toggleCategory}
              counterPressed={counterPressed}
              categoryRef={categoryRef}
            />
            <Spacer height={20} />
            <DeliverySelected
              homePickup={homePickup}
              setHomePickup={setHomePickup}
              setSellerDelivers={setSellerDelivers}
              homePickupRef={homePickupRef}
            />
            <ProductLocationSelected
              productLocation={productLocation}
              setProductLocation={setProductLocation}
              errorProductLocation={errorProductLocation}
              setErrorProductLocation={setErrorProductLocation}
              sellerDelivers={sellerDelivers}
              counterPressed={counterPressed}
              productLocationRef={productLocationRef}
            />
            <Spacer height={50} />
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
            <Spacer height={10} />
            {scrollToRef && (
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
                nameRef={nameRef}
                descriptionRef={descriptionRef}
                priceRef={priceRef}
                quantityRef={quantityRef}
                conditionRef={conditionRef}
                weightRef={weightRef}
                materialRef={materialRef}
                categoryRef={categoryRef}
                homePickupRef={homePickupRef}
                productLocationRef={productLocationRef}
                scrollToRef={scrollToRef}
              />
            )}
            <Spacer height={20} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default CreateScreen;
