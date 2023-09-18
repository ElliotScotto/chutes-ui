const getIconCondition = (condition: string): string[] => {
  switch (condition) {
    case "Très abîmé":
      return [
        "wrench",
        "wrench-outline",
        "wrench-outline",
        "wrench-outline",
        "wrench-outline",
      ];
    case "Abîmé":
      return [
        "wrench",
        "wrench",
        "wrench-outline",
        "wrench-outline",
        "wrench-outline",
      ];
    case "Correct":
      return ["wrench", "wrench", "wrench", "wrench-outline", "wrench-outline"];
    case "Très bon état":
      return ["wrench", "wrench", "wrench", "wrench", "wrench-outline"];
    case "Comme neuf":
      return ["wrench", "wrench", "wrench", "wrench", "wrench"];
    default:
      return [];
  }
};
export { getIconCondition };
