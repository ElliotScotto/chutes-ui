//Create configurable horizontal and vertical spaces in rendering.
import React, { FC } from "react";
import { View } from "react-native";
interface SpacerProps {
  height?: number;
  width?: number;
}
const Spacer: FC<SpacerProps> = ({ height = 0, width = 0 }) => {
  return <View testID="spacer" style={{ height, width }} />;
};

export default Spacer;
