import React, { useState } from "react";
import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

type PhotoSelectedProps = {
  photo1: ImageInfo | null;
  setPhoto1: React.Dispatch<React.SetStateAction<ImageInfo | null>>;
  photo2: ImageInfo | null;
  setPhoto2: React.Dispatch<React.SetStateAction<ImageInfo | null>>;
  photo3: ImageInfo | null;
  setPhoto3: React.Dispatch<React.SetStateAction<ImageInfo | null>>;
  photo4: ImageInfo | null;
  setPhoto4: React.Dispatch<React.SetStateAction<ImageInfo | null>>;
  photo5: ImageInfo | null;
  setPhoto5: React.Dispatch<React.SetStateAction<ImageInfo | null>>;
};
type ImageInfo = { uri: string };

const PhotoSelected: React.FC<PhotoSelectedProps> = ({
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
      {photo2 && (
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
      {photo4 && (
        <Image
          source={{ uri: photo4.uri }}
          style={{ width: 200, height: 200 }}
        />
      )}

      <Button
        title="Sélectionnez une photo 5"
        onPress={() => pickImage(setPhoto5)}
      />
      {photo5 && (
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
      />
    </View>
  );
};

export default PhotoSelected;
