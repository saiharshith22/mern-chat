export const nameValidator = (value) =>
  /^[a-zA-Z0-9_]+$/.test(value) || "must not contain special characters";
