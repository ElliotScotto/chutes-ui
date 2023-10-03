const isValidEmail = (email: string): boolean => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const domainRegex =
    /\.(com|fr|net|uk|ca|org|de|edu|info|biz|fm|me|gouv.fr)$/i;
  // Regex used to check domains which we want to block
  const forbiddenGmailDomainsRegex = /@(gmail|googlemail)\.(?!com\b).+$/i;
  const forbiddenBouyguesDomainRegex = /@bbox\.(?!fr\b).+$/i;
  const forbiddenOrangeDomainRegex = /@orange\.(?!fr\b).+$/i;
  const forbiddenFreeDomainRegex = /@free\.(?!fr\b).+$/i;
  const forbiddenSFRDomainRegex = /@sfr\.(?!fr\b).+$/i;
  const forbiddenAppleDomainRegex = /@icloud\.(?!com\b).+$/i;
  const forbiddenOutlookDomainRegex = /@outlook\.(?!fr\b).+$/i;
  const forbiddenLaPosteDomainRegex = /@laposte\.(?!net\b).+$/i;

  return (
    emailRegex.test(email) &&
    domainRegex.test(email) &&
    !forbiddenGmailDomainsRegex.test(email) &&
    !forbiddenBouyguesDomainRegex.test(email) &&
    !forbiddenOrangeDomainRegex.test(email) &&
    !forbiddenFreeDomainRegex.test(email) &&
    !forbiddenSFRDomainRegex.test(email) &&
    !forbiddenAppleDomainRegex.test(email) &&
    !forbiddenOutlookDomainRegex.test(email) &&
    !forbiddenLaPosteDomainRegex.test(email)
  );
};
export { isValidEmail };
