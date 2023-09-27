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
  counterPressed: number;
  nameRef: React.RefObject<any>;
}

const NameSelected: FC<NameSelectedProps> = ({
  name,
  setName,
  errorName,
  counterPressed,
  nameRef,
}) => {
  return (
    <View
      ref={nameRef}
      style={{ width: "100%" }}
      onLayout={(event) => {
        const layout = event.nativeEvent.layout;
        console.log("y:", layout.y);
      }}
    >
      <TextInput
        mode="outlined"
        label="Nom*"
        placeholder="ex: Lot 10 Planches stratifié L.120x18 ep.12mm"
        multiline={true}
        textAlignVertical="top"
        textAlign="left"
        value={name}
        style={{
          width: "100%",
          height: 80,
          backgroundColor: color.white,
        }}
        theme={{
          colors: {
            primary: name
              ? name.length <= 40
                ? color.tertiary
                : color.error
              : errorName && counterPressed !== 0
              ? color.error
              : color.tertiary,
          },
        }}
        onChangeText={setName}
      />
      <View style={scrapCreation.errors}>
        {errorName && !name && counterPressed !== 0 && (
          <Text
            style={{
              color: color.error,
            }}
          >
            {errorName}
          </Text>
        )}
      </View>
    </View>
  );
};
export default NameSelected;
