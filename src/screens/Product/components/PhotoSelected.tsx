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
  const [photos, setPhotos] = useState<PhotosType[]>([]);
  const [photoCount, setPhotoCount] = useState<number>(2); //total of photos
  const [photoNumber, setPhotoNumber] = useState<number>(2); //number of a new photo
  const pickImage = async (
    setPhoto: React.Dispatch<React.SetStateAction<ImageInfo | null>>
  ) => {
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
      setPhoto({ uri: result.assets[0].uri });
    }
  };

  const captureImage = async (
    setPhoto: React.Dispatch<React.SetStateAction<ImageInfo | null>>
  ) => {
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
      setPhoto({ uri: result.assets[0].uri });
    }
  };
  const addPhoto = () => {
    const newPhotos = { id: photoCount, title: `Photo ${photoNumber}` };
    setPhotos([...photos, newPhotos]);
    setPhotoCount(photoCount + 1);
    setPhotoNumber(photoCount + 1);
  };
  const deletePhoto = (id: number) => {
    setPhotoCount(photoCount - 1);
    setPhotoNumber(photoCount - 1);
    const newPhotos = photos.filter((elem) => elem.id !== id);
    setPhotos(newPhotos);
    setPhotoCount(photoCount - 1);
    setPhotoNumber(photoCount - 1);
  };
  console.log("photos : ", photos);
  return (
    <View ref={photoRef} style={[displays.flex, displays.center, displays.w90]}>
      <PhotoCard1
        pickImage={pickImage}
        captureImage={captureImage}
        setPhoto1={setPhoto1}
      />
      {photos.map((item, index) => (
        <PhotoCard
          key={index}
          id={item.id}
          pickImage={pickImage}
          captureImage={captureImage}
          deletePhoto={deletePhoto}
          photoNumber={photoNumber}
          photos={photos}
        />
      ))}
      {photos[3] ? null : (
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 6,
            marginTop: 24,
            alignSelf: "flex-start",
          }}
          onPress={() => {
            addPhoto();
          }}
        >
          <Text
            style={{
              textDecorationLine: "underline",
              color: colors.tertiary,
              fontSize: 14,
              fontWeight: "500",
            }}
          >
            Ajouter une photo
          </Text>
        </TouchableOpacity>
      )}

      {/* 
      <Button
        title="Sélectionnez une photo 2"
        onPress={() => pickImage(setPhoto2)}
      />
      {/* {photo2 && (
        <Image
          source={{ uri: photo2.uri }}
          style={{ width: 200, height: 200 }}
        />
      )} 

      <Button
        title="Sélectionnez une photo 3"
        onPress={() => pickImage(setPhoto3)}
      />
       {photo3 && (
        <Image
          source={{ uri: photo3.uri }}
          style={{ width: 200, height: 200 }}
        />
      )} 
...
      */}
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
    </View>
  );
};

export default PhotoSelected;
