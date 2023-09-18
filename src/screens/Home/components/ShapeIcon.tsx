import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
type Shape =
  | "rond"
  | "Rond"
  | "Carré"
  | "Rectangle"
  | "Triangle"
  | "Plat"
  | "Ovoïde"
  | "Pentagone"
  | "Hexagone"
  | "Octagone";

interface ShapeIconProps {
  shape: Shape;
}

const SHAPE_ICONS: Record<
  Shape,
  { icon: string; component?: typeof MaterialCommunityIcons | typeof Ionicons }
> = {
  rond: { icon: "circle-outline" },
  Rond: { icon: "circle-outline" },
  Carré: { icon: "square-outline" },
  Rectangle: { icon: "rectangle-outline" },
  Triangle: { icon: "triangle-outline" },
  Plat: { icon: "remove-outline", component: Ionicons },
  Ovoïde: { icon: "egg-outline" },
  Pentagone: { icon: "pentagon-outline" },
  Hexagone: { icon: "hexagon-outline" },
  Octagone: { icon: "octagon-outline" },
};

type IconType = React.ComponentType<{
  name: string;
  size: number;
  color: string;
}>;

const ShapeIcon: React.FC<ShapeIconProps> = ({ shape }) => {
  const shapeData = SHAPE_ICONS[shape];
  const IconComponent =
    (shapeData.component as IconType) || MaterialCommunityIcons;

  return <IconComponent name={shapeData.icon} size={40} color="#fff" />;
};

export default ShapeIcon;
