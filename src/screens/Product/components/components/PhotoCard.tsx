import React, { FC } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
//utils
import Spacer from "../../../../utils/Spacer";
//styles
import ChutesColors from "../../../../styles/colors";
const colors = ChutesColors();
import displays from "../../../../styles/display";
import scrapCreation from "../../../../styles/scrapCreation";
import fonts from "../../../../styles/fonts";
//icons
import AddIcon from "react-native-vector-icons/Ionicons";
import TrashIcon from "react-native-vector-icons/Ionicons";
//types
import { PhotoCardProps } from "../../../../types/inputProps";
const PhotoCard: FC<PhotoCardProps> = ({
  index,
  pickImage,
  captureImage,
  photo,
  deletePhoto,
}) => {
  const handlePickOrCaptureImage = (action: "pick" | "capture") => {
    if (action === "pick") {
      pickImage();
    } else {
      captureImage();
    }
  };
  return (
    <View style={[scrapCreation.photo.secondary]}>
      <Text style={fonts.photo.label}>Photo {index + 1}</Text>
      <View style={scrapCreation.photo.container}>
        <TouchableOpacity
          style={scrapCreation.photo.buttons}
          onPress={() => handlePickOrCaptureImage("pick")}
        >
          <AddIcon name="add" size={25} color={colors.tertiary2} />
          <Text style={fonts.photo.item}>Galerie</Text>
        </TouchableOpacity>
        <Spacer width={10} />
        <TouchableOpacity
          style={scrapCreation.photo.buttons}
          onPress={() => handlePickOrCaptureImage("capture")}
        >
          <AddIcon name="add" size={25} color={colors.tertiary2} />
          <Text style={fonts.photo.item}>Photo</Text>
        </TouchableOpacity>
        <Spacer width={10} />
        {photo ? (
          <View style={[scrapCreation.photo.thumbnail, displays.row]}>
            <Image
              source={{ uri: photo.uri }}
              style={{ width: 40, height: 40 }}
            />
            <TouchableOpacity
              style={scrapCreation.photo.removeButton}
              onPress={() => {
                deletePhoto(index);
              }}
            >
              <TrashIcon name="trash-outline" size={25} color={colors.error} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={scrapCreation.photo.removeButton}
            onPress={() => {
              deletePhoto(index);
            }}
          >
            <TrashIcon name="trash-outline" size={25} color={colors.error} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default PhotoCard;
