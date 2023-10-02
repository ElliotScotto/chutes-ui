const isValidUsername = (username: string): boolean => {
  let isValid = true;
  if (username.length < 3 || username.length >= 25) {
    isValid = false;
  }
  return isValid;
};
export { isValidUsername };
