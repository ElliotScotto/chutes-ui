const changeFavIcon = (save: boolean): string => {
  switch (save) {
    case true:
      return "heart";
    case false:
      return "heart-outline";
    default:
      return "heart-outline";
  }
};
export { changeFavIcon };
