import React, { FC } from "react";
import { View, Text } from "react-native";
//packages
import { TextInput } from "react-native-paper";
//styles
import ChutesColors from "../../../styles/colors";
const color = ChutesColors();
import scrapCreation from "../../../styles/scrapCreation";

interface DescriptionSelectedProps {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  errorDescription: string;
  counterPressed: number;
  descriptionRef: React.RefObject<any>;
}

const DescriptionSelected: FC<DescriptionSelectedProps> = ({
  description,
  setDescription,
  errorDescription,
  counterPressed,
  descriptionRef,
}) => {
  return (
    <View ref={descriptionRef} style={{ width: "100%" }}>
      <TextInput
        mode="outlined"
        label="Description*"
        placeholder="Ecrivez une description : dimensions, couleurs, usage..."
        multiline={true}
        textAlignVertical="top"
        value={description}
        style={{ width: "100%", height: 150, backgroundColor: color.white }}
        theme={{
          colors: {
            primary: description
              ? description.length <= 300
                ? color.tertiary
                : color.error
              : errorDescription && counterPressed !== 0
              ? color.error
              : color.tertiary,
          },
        }}
        onChangeText={setDescription}
      />
      <View style={scrapCreation.errors}>
        {errorDescription && !description && counterPressed !== 0 && (
          <Text
            style={{
              color: color.error,
            }}
          >
            {errorDescription}
          </Text>
        )}
      </View>
    </View>
  );
};
export default DescriptionSelected;
