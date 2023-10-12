import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
//utils
import Spacer from "../../../../utils/Spacer";
//styles
import ChutesColors from "../../../../styles/colors";
const colors = ChutesColors();
import scrapCreation from "../../../../styles/scrapCreation";
import fonts from "../../../../styles/fonts";
//icons
import AddIcon from "react-native-vector-icons/Ionicons";

//types
import { PhotoCard1Props } from "../../../../types/inputProps";
const PhotoCard1: FC<PhotoCard1Props> = ({
  pickImage,
  captureImage,
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
      </View>
    </View>
  );
};
export default PhotoCard1;
