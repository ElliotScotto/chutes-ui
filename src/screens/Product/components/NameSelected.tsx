import React, { FC } from "react";
import { View, Text } from "react-native";
//packages
import { TextInput } from "react-native-paper";
//styles
import ChutesColors from "../../../styles/colors";
const color = ChutesColors();
import scrapCreation from "../../../styles/scrapCreation";
interface NameSelectedProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  errorName: string;
}

const NameSelected: FC<NameSelectedProps> = ({ name, setName, errorName }) => {
  return (
    <>
      <TextInput
        mode="outlined"
        label="Nom*"
        placeholder="Saisissez le nom de votre chute ex:Planches stratifié L.120x18 ep.12mm"
        multiline={true}
        textAlignVertical="top"
        value={name}
        style={{ width: "100%", height: 80, backgroundColor: color.white }}
        theme={{
          colors: {
            primary: name
              ? name.length <= 40
                ? color.tertiary
                : color.error
              : errorName
              ? color.error
              : color.tertiary,
          },
        }}
        onChangeText={setName}
      />
      <View style={scrapCreation.errors}>
        {errorName && !name && (
          <Text
            style={{
              color: color.error,
            }}
          >
            {errorName}
          </Text>
        )}
      </View>
    </>
  );
};
export default NameSelected;
