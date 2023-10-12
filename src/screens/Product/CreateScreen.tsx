import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  TextInput as RNTextInput,
} from "react-native";
//packages
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
const deviceName = Constants.deviceName;
//styles
import displays from "../../styles/display";
import fonts from "../../styles/fonts";
import ChutesColors from "../../styles/colors";
const colors = ChutesColors();
//utils
import Spacer from "../../utils/Spacer";
//components
import PhotoSelected from "./components/PhotoSelected";
import NameSelected from "./components/NameSelected";
import DescriptionSelected from "./components/DescriptionSelected";
import PriceSelected from "./components/PriceSelected";
import ConditionSelected from "./components/ConditionSelected";
import WeightSelected from "./components/WeightSelected";
import MaterialSelected from "./components/MaterialSelected";
import CategorySelected from "./components/CategorySelected";
import DeliverySelected from "./components/DeliverySelected";
import PostScrapButton from "./components/PostScrapButton";
//functions
import { handleErrorsScrap } from "./functions/validateForm";
import { scrollToRef } from "./functions/scrollToRef";

//types
type ImageInfo = { uri: string };
const CreateScreen = () => {
  //product states
  const [photo1, setPhoto1] = useState<ImageInfo | null>(null);
  const [photos, setPhotos] = useState<Array<ImageInfo | null>>([null]);
  const [owner, setOwner] = useState<number>(3);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  const [price, setPrice] = useState<number | undefined>();
  const [free, setFree] = useState<boolean>(false);
  const [weight, setWeight] = useState<string>("");
  const [material, setMaterial] = useState<string[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [homePickup, setHomePickup] = useState<boolean>(true);
  const [sending, setSending] = useState<boolean>(false);
  //Focus & ref
  const scrollViewRef = useRef<KeyboardAwareScrollView>(null);
  const photoRef = useRef<View>(null);
  const nameRef = useRef<RNTextInput>(null);
  const [isNameFocused, setIsNameFocused] = useState<boolean>(false);
  const nameFocusRef = useRef<View>(null);
  const descriptionRef = useRef<RNTextInput>(null);
  const [isDescriptionFocused, setIsDescriptionFocused] =
    useState<boolean>(false);
  const descriptionFocusRef = useRef<View>(null);
  const priceRef = useRef<RNTextInput>(null);
  const [isPriceFocused, setIsPriceFocused] = useState<boolean>(false);
  const priceFocusRef = useRef<View>(null);
  const conditionRef = useRef<View>(null);
  const weightRef = useRef<View>(null);
  const materialRef = useRef<View>(null);
  const categoryRef = useRef<View>(null);
  const publishButtonRef = useRef<TouchableOpacity>(null);
  //Modal visibility
  const [isModalConditionsVisible, setIsModalConditionsVisible] =
    useState(false);
  const [isModalWeightsVisible, setIsModalWeightsVisible] = useState(false);
  //errors
  const [errorPhoto, setErrorPhoto] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorCondition, setErrorCondition] = useState("");
  const [errorPrice, setErrorPrice] = useState("");
  const [errorWeight, setErrorWeight] = useState("");
  const [errorMaterial, setErrorMaterial] = useState("");
  const [errorCategory, setErrorCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //Button
  const [counterPressed, setCounterPressed] = useState<number>(0);
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);
  const [shadowButton, setShadowButton] = useState<boolean>(true);
  //Request
  const postScrapData = async (currentHost: string) => {
    try {
      if (!photos[0] || !photos[0].uri) {
        console.error("photo1 n'est pas défini");
        return;
      }
      let photo = {
        uri:
          Platform.OS === "android"
            ? photos[0].uri
            : photos[0].uri.replace("file://", ""),
        name: "photo1.jpg",
        type: "image/jpeg",
      };
      let type = photos[0].uri.substring(photos[0].uri.lastIndexOf(".") + 1);
      const formData = new FormData();
      formData.append("owner", String(owner));
      formData.append("photo1", {
        uri: photo.uri,
        name: photo.name,
        type: `image/${type}`,
      } as any);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("condition", condition);
      formData.append("price", String(price));
      formData.append("free", free ? "true" : "false");
      formData.append("weight", weight);
      material.forEach((m) => formData.append("material", m));
      category.forEach((c) => formData.append("category", c));
      formData.append("homePickup", homePickup ? "true" : "false");
      formData.append("sending", sending ? "true" : "false");
      const response = await axios.post(
        `http://${currentHost}:8000/api/scraps/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("response.data : ", response.data);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
      if ((error as any).response) {
        console.error("Détails de l’erreur:", (error as any).response.data);
      }
    }
  };
  //Form validation
  const handleSubmit = () => {
    const isValidForm = handleErrorsScrap(
      photos[0],
      name,
      description,
      condition,
      price,
      weight,
      material,
      category,
      homePickup,
      sending,
      setErrorPhoto,
      setErrorName,
      setErrorDescription,
      setErrorCondition,
      setErrorPrice,
      setErrorWeight,
      setErrorMaterial,
      setErrorCategory,
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
      if (!photos[0]) {
        scrollToRef(scrollViewRef, photoRef, -20, "photo1", false);
      } else if (!name || (name && name.length > 45)) {
        setIsNameFocused(true);
        scrollToRef(scrollViewRef, nameFocusRef, -10, "name", true);
        nameRef.current?.focus();
      } else if (!description || (description && description.length > 300)) {
        setIsDescriptionFocused(true);
        scrollToRef(
          scrollViewRef,
          descriptionFocusRef,
          -10,
          "description",
          true
        );
        descriptionRef.current?.focus();
      } else if (!price) {
        setIsPriceFocused(true);
        scrollToRef(scrollViewRef, priceFocusRef, -10, "price", true);
        priceRef.current?.focus();
      } else if (!condition) {
        scrollToRef(scrollViewRef, conditionRef, -10, "condition", false);
      } else if (!weight) {
        scrollToRef(scrollViewRef, weightRef, -40, "weight", false);
      } else if (!material || material.length === 0) {
        scrollToRef(scrollViewRef, materialRef, -10, "material", false);
      } else if (!category || category.length === 0) {
        scrollToRef(scrollViewRef, categoryRef, -10, "category", false);
      }
    }
  };
  return (
    <SafeAreaProvider style={[displays.w100]}>
      <KeyboardAwareScrollView ref={scrollViewRef}>
        <>
          <StatusBar style="auto" />
          <SafeAreaView style={[displays.white, displays.aliC]}>
            <View style={[displays.w95, displays.aliC]}>
              <Spacer height={20} />
              <View>
                <Text style={fonts.createTitle}>Publie ta chute</Text>
              </View>
              <Spacer height={10} />
              <PhotoSelected
                photos={photos}
                setPhotos={setPhotos}
                errorPhoto={errorPhoto}
                counterPressed={counterPressed}
                photoRef={photoRef}
              />
              <Spacer height={20} />
              <NameSelected
                name={name}
                setName={setName}
                errorName={errorName}
                counterPressed={counterPressed}
                nameFocusRef={nameFocusRef}
                nameRef={nameRef}
                isNameFocused={isNameFocused}
                setIsNameFocused={setIsNameFocused}
                description={description}
                descriptionRef={descriptionRef}
                price={price}
                priceRef={priceRef}
                condition={condition}
                setIsModalConditionsVisible={setIsModalConditionsVisible}
                weight={weight}
                setIsModalWeightsVisible={setIsModalWeightsVisible}
                material={material}
                materialRef={materialRef}
                category={category}
                categoryRef={categoryRef}
                publishButtonRef={publishButtonRef}
                scrollViewRef={scrollViewRef}
              />
              <Spacer height={10} />
              <DescriptionSelected
                description={description}
                setDescription={setDescription}
                errorDescription={errorDescription}
                counterPressed={counterPressed}
                descriptionRef={descriptionRef}
                descriptionFocusRef={descriptionFocusRef}
                isDescriptionFocused={isDescriptionFocused}
                setIsDescriptionFocused={setIsDescriptionFocused}
                price={price}
                priceRef={priceRef}
                condition={condition}
                setIsModalConditionsVisible={setIsModalConditionsVisible}
                weight={weight}
                setIsModalWeightsVisible={setIsModalWeightsVisible}
                material={material}
                materialRef={materialRef}
                category={category}
                categoryRef={categoryRef}
                publishButtonRef={publishButtonRef}
                scrollViewRef={scrollViewRef}
              />
              <Spacer height={10} />
              <PriceSelected
                description={description}
                descriptionRef={descriptionRef}
                price={price}
                setPrice={setPrice}
                free={free}
                setFree={setFree}
                errorPrice={errorPrice}
                counterPressed={counterPressed}
                priceRef={priceRef}
                priceFocusRef={priceFocusRef}
                isPriceFocused={isPriceFocused}
                setIsPriceFocused={setIsPriceFocused}
                condition={condition}
                setIsModalConditionsVisible={setIsModalConditionsVisible}
                weight={weight}
                setIsModalWeightsVisible={setIsModalWeightsVisible}
                material={material}
                materialRef={materialRef}
                category={category}
                categoryRef={categoryRef}
                publishButtonRef={publishButtonRef}
                scrollViewRef={scrollViewRef}
              />
              <Spacer height={10} />
              <ConditionSelected
                condition={condition}
                setCondition={setCondition}
                isModalConditionsVisible={isModalConditionsVisible}
                setIsModalConditionsVisible={setIsModalConditionsVisible}
                errorCondition={errorCondition}
                counterPressed={counterPressed}
                conditionRef={conditionRef}
              />
              <Spacer height={10} />
              <WeightSelected
                weight={weight}
                setWeight={setWeight}
                isModalWeightsVisible={isModalWeightsVisible}
                setIsModalWeightsVisible={setIsModalWeightsVisible}
                errorWeight={errorWeight}
                counterPressed={counterPressed}
                weightRef={weightRef}
              />
              <Spacer height={10} />
              <MaterialSelected
                material={material}
                setMaterial={setMaterial}
                errorMaterial={errorMaterial}
                counterPressed={counterPressed}
                materialRef={materialRef}
              />
              <Spacer height={10} />
              <CategorySelected
                category={category}
                setCategory={setCategory}
                errorCategory={errorCategory}
                counterPressed={counterPressed}
                categoryRef={categoryRef}
              />
              <Spacer height={10} />
              <DeliverySelected
                homePickup={homePickup}
                setHomePickup={setHomePickup}
                sending={sending}
                setSending={setSending}
              />
              <Spacer height={30} />
              <PostScrapButton
                publishButtonRef={publishButtonRef}
                shadowButton={shadowButton}
                setShadowButton={setShadowButton}
                isButtonEnabled={isButtonEnabled}
                setIsButtonEnabled={setIsButtonEnabled}
                handleSubmit={handleSubmit}
                photo1={photos[0]}
                name={name}
                description={description}
                condition={condition}
                price={price}
                weight={weight}
                material={material}
                category={category}
                homePickup={homePickup}
                sending={sending}
                setErrorPhoto={setErrorPhoto}
                setErrorName={setErrorName}
                setErrorDescription={setErrorDescription}
                setErrorCondition={setErrorCondition}
                setErrorPrice={setErrorPrice}
                setErrorWeight={setErrorWeight}
                setErrorMaterial={setErrorMaterial}
                setErrorCategory={setErrorCategory}
                setErrorMessage={setErrorMessage}
                counterPressed={counterPressed}
                setCounterPressed={setCounterPressed}
              />
              <Spacer height={50} />
            </View>
          </SafeAreaView>
        </>
      </KeyboardAwareScrollView>
    </SafeAreaProvider>
  );
};
export default CreateScreen;
