const isValidEmail = (email: string): boolean => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const domainRegex =
    /\.(com|fr|net|uk|ca|org|de|edu|info|biz|fm|me|gouv.fr)$/i;
  return emailRegex.test(email) && domainRegex.test(email);
};

export { isValidEmail };
