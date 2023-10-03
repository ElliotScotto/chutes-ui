import ChutesColors from "../../../styles/colors";
const colors = ChutesColors();
const handleIconColor = (
  field: number,
  status: string,
  setFirstEyeColor: React.Dispatch<React.SetStateAction<string>>,
  setSecondEyeColor: React.Dispatch<React.SetStateAction<string>>
) => {
  if (field === 1) {
    if (status === "focus") {
      setFirstEyeColor(colors.tertiary2);
    } else {
      setFirstEyeColor(colors.disabledDark);
    }
  } else {
    if (status === "focus") {
      setSecondEyeColor(colors.tertiary2);
    } else {
      setSecondEyeColor(colors.disabledDark);
    }
  }
};
export { handleIconColor };
