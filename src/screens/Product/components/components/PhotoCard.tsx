import React, { FC, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
//utils
import Spacer from "../../../../utils/Spacer";
//styles
import ChutesColors from "../../../../styles/colors";
const colors = ChutesColors();
import scrapCreation from "../../../../styles/scrapCreation";
import fonts from "../../../../styles/fonts";
import displays from "../../../../styles/display";
//icons
import AddIcon from "react-native-vector-icons/Ionicons";
import TrashIcon from "react-native-vector-icons/Ionicons";
//types
import { PhotoCardProps, PhotosType } from "../../../../types/inputProps";
const PhotoCard: FC<PhotoCardProps> = ({
  id,
  pickImage,
  captureImage,
  photo2,
  setPhoto2,
  photo3,
  setPhoto3,
  photo4,
  setPhoto4,
  photo5,
  setPhoto5,
  deletePhoto,
  photoNumber,
  photos,
}) => {
  const handlePickImage = () => {
    if (!photo2) {
      pickImage(setPhoto2);
      return;
    }
    if (!photo3) {
      pickImage(setPhoto3);
      return;
    }
    if (!photo4) {
      pickImage(setPhoto4);
      return;
    }
    if (!photo5) {
      pickImage(setPhoto5);
      return;
    }
  };
  const handleCaptureImage = () => {
    if (!photo2) {
      captureImage(setPhoto2);
      return;
    }
    if (!photo3) {
      captureImage(setPhoto3);
      return;
    }
    if (!photo4) {
      captureImage(setPhoto4);
      return;
    }
    if (!photo5) {
      captureImage(setPhoto5);
      return;
    }
  };
  return (
    <View
      style={[
        scrapCreation.photo.secondary,
        // displays.bord2,
      ]}
    >
      <Text style={fonts.photo.label}>Photo {id}</Text>
      <View style={scrapCreation.photo.container}>
        <TouchableOpacity
          style={scrapCreation.photo.buttons}
          onPress={() => handlePickImage()}
        >
          <AddIcon name="add" size={25} color={colors.tertiary2} />
          <Text style={fonts.photo.item}>Galerie</Text>
        </TouchableOpacity>
        <Spacer width={10} />
        <TouchableOpacity
          style={scrapCreation.photo.buttons}
          onPress={() => handleCaptureImage()}
        >
          <AddIcon name="add" size={25} color={colors.tertiary2} />
          <Text style={fonts.photo.item}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={scrapCreation.photo.removeButton}
          onPress={() => {
            deletePhoto(id);
          }}
        >
          <TrashIcon name="trash-outline" size={25} color={colors.error} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PhotoCard;
