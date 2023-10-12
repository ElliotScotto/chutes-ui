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
import PhotoIcon from "react-native-vector-icons/AntDesign";
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
  const handlePickOrCaptureImage = (action: "pick" | "capture") => {
    if (action === "pick") {
      pickImage();
    } else {
      captureImage();
    }
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
                  : colors.tertiary,
            },
          ]}
          onPress={() => handlePickOrCaptureImage("pick")}
        >
          <PhotoIcon name="picture" size={35} color={colors.tertiary} />
        </TouchableOpacity>
        <Spacer width={10} />
        <TouchableOpacity
          style={[
            scrapCreation.photo.buttons,
            {
              borderColor:
                errorPhoto && counterPressed !== 0
                  ? colors.error
                  : colors.tertiary,
            },
          ]}
          onPress={() => handlePickOrCaptureImage("capture")}
        >
          <PhotoIcon
            name="camerao"
            size={35}
            color={colors.tertiary}
            style={{ position: "absolute" }}
          />
        </TouchableOpacity>
        {!photo ? null : (
          <>
            <Spacer width={10} />
            <View style={[scrapCreation.photo.thumbnail, displays.row]}>
              <Image
                source={{ uri: photo.uri }}
                style={scrapCreation.photo.image}
                resizeMode="cover"
              />
              <TouchableOpacity
                style={scrapCreation.photo.removeButton}
                onPress={() => {
                  deletePhoto(0);
                }}
              >
                <TrashIcon
                  name="trash-outline"
                  size={25}
                  color={colors.error}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};
export default PhotoCard1;
