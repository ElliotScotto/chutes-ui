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
}

const DescriptionSelected: FC<DescriptionSelectedProps> = ({
  description,
  setDescription,
  errorDescription,
}) => {
  return (
    <>
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
              : errorDescription
              ? color.error
              : color.tertiary,
          },
        }}
        onChangeText={setDescription}
      />
      <View style={scrapCreation.errors}>
        {errorDescription && !description && (
          <Text
            style={{
              color: color.error,
            }}
          >
            {errorDescription}
          </Text>
        )}
      </View>
    </>
  );
};
export default DescriptionSelected;
