import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
//packages
import * as ImagePicker from "expo-image-picker";
//styles
import scrapCreation from "../../../styles/scrapCreation";
import ChutesColors from "../../../styles/colors";
import displays from "../../../styles/display";
const colors = ChutesColors();
//icons
import AddIcon from "react-native-vector-icons/Ionicons";
import CheckIcon from "react-native-vector-icons/AntDesign";
//utils
import Spacer from "../../../utils/Spacer";
//types
import { ImageInfo, PhotoSelectedProps } from "../../../types/inputProps";

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

  return (
    <View ref={photoRef} style={[displays.flex, displays.center, displays.w90]}>
      <View style={[displays.flex, displays.w90, { borderRadius: 5 }]}>
        <Text
          style={{
            fontSize: 16,
            color: colors.tertiary,
            paddingLeft: 15,
            paddingBottom: 10,
          }}
        >
          Photo 1*
        </Text>
        <View
          style={[
            displays.row,
            displays.aliC,
            { justifyContent: "space-between" },
          ]}
        >
          <TouchableOpacity
            style={[
              displays.flex,
              displays.center,
              displays.row,
              {
                paddingVertical: 8,
                paddingHorizontal: 1,
                backgroundColor: colors.white,
                borderColor: colors.disabledDark,
                borderWidth: 1,
                borderRadius: 4,
              },
            ]}
            onPress={() => pickImage(setPhoto1)}
          >
            <AddIcon name="add" size={25} color={colors.tertiary2} />
            <Text style={{ color: colors.tertiary }}>Depuis la galerie</Text>
          </TouchableOpacity>
          <Spacer width={10} />
          <TouchableOpacity
            style={[
              displays.flex,
              displays.center,
              displays.row,
              {
                paddingVertical: 8,
                paddingHorizontal: 1,
                backgroundColor: colors.white,
                borderColor: colors.disabledDark,
                borderWidth: 1,
                borderRadius: 4,
              },
            ]}
            onPress={() => captureImage(setPhoto1)}
          >
            <AddIcon name="add" size={25} color={colors.tertiary2} />

            <Text style={{ color: colors.tertiary }}>Prendre une photo</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* 
      <Button
        title="Sélectionnez une photo 1"
        onPress={() => pickImage(setPhoto1)}
      />
      {photo1 && (
        <Image
          source={{ uri: photo1.uri }}
          style={{ width: 200, height: 200 }}
        />
      )} 

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

      <Button
        title="Sélectionnez une photo 4"
        onPress={() => pickImage(setPhoto4)}
      />
      {/* {photo4 && (
        <Image
          source={{ uri: photo4.uri }}
          style={{ width: 200, height: 200 }}
        />
      )} 

      <Button
        title="Sélectionnez une photo 5"
        onPress={() => pickImage(setPhoto5)}
      />
      {/* {photo5 && (
        <Image
          source={{ uri: photo5.uri }}
          style={{ width: 200, height: 200 }}
        />
      )} 

      <Button
        title="Prendre une photo 1"
        onPress={() => captureImage(setPhoto1)}
      />
      <Button
        title="Prendre une photo 2"
        onPress={() => captureImage(setPhoto2)}
      />
      <Button
        title="Prendre une photo 3"
        onPress={() => captureImage(setPhoto3)}
      />
      <Button
        title="Prendre une photo 4"
        onPress={() => captureImage(setPhoto4)}
      />
      <Button
        title="Prendre une photo 5"
        onPress={() => captureImage(setPhoto5)}
      />*/}
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
