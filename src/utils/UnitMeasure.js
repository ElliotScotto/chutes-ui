export default function UnitMeasure({ unit }) {
  let arrayUnitMeasure = ["mm", "cm", "M"];
  if (unit === "rond" || "Rond") {
    arrayUnitMeasure = [];
  }
  if (unit === "Carré") {
    arrayUnitMeasure = [];
  }
  if (unit === "Rectangle") {
    arrayUnitMeasure = [];
  }

  return arrayUnitMeasure;
}
