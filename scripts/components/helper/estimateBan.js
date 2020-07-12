export const estimateBananos = (PPD) => {
  return (2.4 * (PPD / 2) ** 0.44).toFixed(2);
};
