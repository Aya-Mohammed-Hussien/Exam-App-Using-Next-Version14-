export const transformedPhone = (phone: string) => {
  if (phone.startsWith("+20")) {
    return "0" + phone.slice(3);
  }
  return phone;
};
