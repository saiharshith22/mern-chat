import { useState } from "react";

const useInputValidator = (validators, field) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // Determine if the field is empty and should show the 'empty' error message
  const isEmpty = enteredValue.trim() === "";
  const emptyError = isEmpty ? `* ${field} must not be empty` : "";

  // Run all validators if the field is not empty
  const validationResults = isEmpty
    ? [true]
    : validators.map((validator) => validator(enteredValue));

  const firstErrorMessage = validationResults.find((result) => result !== true);

  // Use the empty error message if present, otherwise use the first validation error
  const errorMessage = emptyError
    ? emptyError
    : firstErrorMessage
    ? `* ${field} ${firstErrorMessage}`
    : "";

  const isValid = !errorMessage;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid,
    hasError: isTouched && !isValid,
    errorMessage,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInputValidator;
