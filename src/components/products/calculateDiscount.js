export const calculateDiscount = (price, discount) =>
  (price * (1 - discount / 100)).toFixed(0);
