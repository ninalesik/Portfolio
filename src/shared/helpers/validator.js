export const isValidValue = (value) => {
  switch (value.name) {
    case "name":
      return /^[a-zA-Z]{2,}$/.test(value.value);
    case "email":
      return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/.test(
        value.value
      );
    default:
      return true;
  }
};
