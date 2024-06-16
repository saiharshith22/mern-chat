export const nameValidator = (value) =>
  /^[a-zA-Z0-9_]+$/.test(value) || "must not contain special characters";

export const passwordValidator = (value) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/.test(
    value
  ) ||
  "must be at least 5 characters, a number, a special character, uppercase & lowercase letters";
