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
import PhotoIcon from "react-native-vector-icons/AntDesign";
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
          <PhotoIcon name="picture" size={35} color={colors.tertiary} />
        </TouchableOpacity>
        <Spacer width={10} />
        <TouchableOpacity
          style={scrapCreation.photo.buttons}
          onPress={() => handlePickOrCaptureImage("capture")}
        >
          <PhotoIcon
            name="camerao"
            size={35}
            color={colors.tertiary}
            style={{ position: "absolute" }}
          />
        </TouchableOpacity>
        <Spacer width={10} />
        {photo ? (
          <View style={[scrapCreation.photo.thumbnail, displays.row]}>
            <Image
              source={{ uri: photo.uri }}
              style={scrapCreation.photo.image}
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
