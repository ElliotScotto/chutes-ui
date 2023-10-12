import React, { FC } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
//utils
import Spacer from "../../../../utils/Spacer";
//styles
import ChutesColors from "../../../../styles/colors";
const colors = ChutesColors();
import scrapCreation from "../../../../styles/scrapCreation";
import fonts from "../../../../styles/fonts";
//icons
import AddIcon from "react-native-vector-icons/Ionicons";
import TrashIcon from "react-native-vector-icons/Ionicons";

//types
import { PhotoCard1Props } from "../../../../types/inputProps";
import displays from "../../../../styles/display";
const PhotoCard1: FC<PhotoCard1Props> = ({
  pickImage,
  captureImage,
  photo,
  deletePhoto,
  errorPhoto,
  counterPressed,
}) => {
  const handlePickImage = () => {
    pickImage();
  };

  const handleCaptureImage = () => {
    captureImage();
  };
  return (
    <View style={scrapCreation.photo.main}>
      <Text style={fonts.photo.label}>Photo 1*</Text>

      <View style={scrapCreation.photo.container}>
        <TouchableOpacity
          style={[
            scrapCreation.photo.buttons,
            {
              borderColor:
                errorPhoto && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary2,
            },
          ]}
          onPress={handlePickImage}
        >
          <AddIcon name="add" size={25} color={colors.tertiary2} />
          <Text style={fonts.photo.item}>Galerie</Text>
        </TouchableOpacity>
        <Spacer width={10} />
        <TouchableOpacity
          style={[
            scrapCreation.photo.buttons,
            {
              borderColor:
                errorPhoto && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary2,
            },
          ]}
          onPress={handleCaptureImage}
        >
          <AddIcon name="add" size={25} color={colors.tertiary2} />
          <Text style={fonts.photo.item}>Photo</Text>
        </TouchableOpacity>
        <Spacer width={10} />

        {!photo ? null : (
          <View style={[scrapCreation.photo.thumbnail, displays.row]}>
            <Image
              source={{ uri: photo.uri }}
              style={{ width: 40, height: 40 }}
            />
            <TouchableOpacity
              style={scrapCreation.photo.removeButton}
              onPress={() => {
                deletePhoto(0);
              }}
            >
              <TrashIcon name="trash-outline" size={25} color={colors.error} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
export default PhotoCard1;
