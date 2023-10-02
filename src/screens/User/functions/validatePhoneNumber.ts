const isValidPhoneNumber = (phoneNumber: string): boolean => {
  return /^0\d{9}$/.test(phoneNumber);
};
export { isValidPhoneNumber };
