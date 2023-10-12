import React, { FC, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
//packages
import * as ImagePicker from "expo-image-picker";
//styles
import scrapCreation from "../../../styles/scrapCreation";
import ChutesColors from "../../../styles/colors";
import displays from "../../../styles/display";
import fonts from "../../../styles/fonts";
const colors = ChutesColors();
//icons
import AddIcon from "react-native-vector-icons/Ionicons";
import CheckIcon from "react-native-vector-icons/AntDesign";
//utils
import Spacer from "../../../utils/Spacer";
//types
import {
  ImageInfo,
  PhotoSelectedProps,
  PhotosType,
  AddPhotoProps,
} from "../../../types/inputProps";
//components
import PhotoCard1 from "./components/PhotoCard1";
import PhotoCard from "./components/PhotoCard";
const PhotoSelected: FC<PhotoSelectedProps> = ({
  photo1,
  setPhoto1,
  photo2,
  setPhoto2,
  photo3,
  setPhoto3,
  photo4,
  setPhoto4,
  photo5,
  setPhoto5,
  errorPhoto,
  counterPressed,
  photoRef,
}) => {
  // const [photos, setPhotos] = useState<PhotosType[]>([]);
  const [photos, setPhotos] = useState<Array<ImageInfo | null>>([
    null,
    null,
    null,
    null,
    null,
  ]);

  const [photoCount, setPhotoCount] = useState<number>(2); //total of photos
  const [photoNumber, setPhotoNumber] = useState<number>(2); //number of a new photo
  const pickImage = async (index: number) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (
      !result.canceled &&
      result.assets &&
      result.assets[0] &&
      result.assets[0].uri
    ) {
      const updatedPhotos = [...photos];
      updatedPhotos[index] = { uri: result.assets[0].uri };
      setPhotos(updatedPhotos);
      //setPhoto({ uri: result.assets[0].uri });
    }
  };
  const captureImage = async (index: number) => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (
      !result.canceled &&
      result.assets &&
      result.assets[0] &&
      result.assets[0].uri
    ) {
      const updatedPhotos = [...photos];
      updatedPhotos[index] = { uri: result.assets[0].uri };
      setPhotos(updatedPhotos);
    }
  };
  const addPhoto = () => {
    if (photos.length < 5) {
      setPhotos([...photos, null]);
      setPhotoCount(photoCount + 1);
      setPhotoNumber(photoCount + 1);
    }
  };
  const deletePhoto = (id: number) => {
    if (id === 0) return; // on ne supprime pas le premier élément

    const newPhotos = photos.filter((_, index) => index !== id);
    setPhotos(newPhotos);
    setPhotoCount(photoCount - 1);
    setPhotoNumber(photoCount - 1);
  };
  console.log("photoNumber : ", photoNumber);
  console.log(photos.length);
  console.log("photos[0]", photos[0]);
  console.log("photos[1]", photos[1]);
  console.log("photos[2]", photos[2]);
  console.log("photos[3]", photos[3]);
  console.log("photos[4]", photos[4]);
  return (
    <View
      ref={photoRef}
      style={[displays.flex, displays.center, { width: "100%" }]}
    >
      <PhotoCard1
        pickImage={() => pickImage(0)}
        captureImage={() => captureImage(0)}
        photo={photos[0]}
        setPhoto={(newPhoto) => {
          setPhotos((prevPhotos) => {
            const updatedPhotos = [...prevPhotos];
            updatedPhotos[0] = newPhoto;
            return updatedPhotos;
          });
        }}
        errorPhoto={errorPhoto}
        counterPressed={counterPressed}
      />
      <View style={scrapCreation.errors}>
        {errorPhoto && !photo1 && counterPressed !== 0 && (
          <Text
            style={{
              color: colors.error,
            }}
          >
            {errorPhoto}
          </Text>
        )}
      </View>
      {photos.slice(1).map((item, index) => (
        <PhotoCard
          key={index + 1}
          index={index + 1}
          pickImage={() => pickImage(index + 1)}
          captureImage={() => captureImage(index + 1)}
          photo={photos[index + 1]}
          setPhoto={(photo) => {
            setPhotos((prevPhotos) => {
              const updatedPhotos = [...prevPhotos];
              updatedPhotos[index + 1] = photo;
              return updatedPhotos;
            });
          }}
          deletePhoto={deletePhoto}
          photoNumber={photoNumber}
        />
      ))}
      {photos.length < 5 ? (
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 6,
            alignSelf: "flex-start",
          }}
          onPress={addPhoto}
        >
          <Text
            style={{
              textDecorationLine: "underline",
              color: colors.tertiary,
              fontSize: 14,
              fontWeight: "500",
            }}
          >
            Ajouter une photo (5 max.)
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default PhotoSelected;
