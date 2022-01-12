export const convertToKilograms = (value: string) => {
  const tempValue = parseFloat(value) / 10;
  return `${tempValue} kg`.replace('.', ',');
};

export const convertToMeters = (value: string) => {
  const tempValue = parseFloat(value) / 10;
  return `${tempValue} m`.replace('.', ',');
};
