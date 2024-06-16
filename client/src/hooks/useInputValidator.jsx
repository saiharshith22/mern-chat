import { useState } from "react";

const useInputValidator = (validators, field) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let validationResults = null;

  let firstErrorMessage = null;

  const reset = () => {
    setEnteredValue("");
    setErrorMessage("");
  };

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    const isEmpty = event.target.value.trim() === "";
    const emptyError = isEmpty ? `* ${field} must not be empty` : "";
    validationResults = isEmpty
      ? [true]
      : validators.map((validator) => validator(event.target.value));
    firstErrorMessage = validationResults.find((result) => result !== true);
    let errMssg = emptyError
      ? emptyError
      : firstErrorMessage
      ? `* ${field} ${firstErrorMessage}`
      : "";
    setErrorMessage(errMssg);
    setIsValid(!errMssg);
  };

  return {
    value: enteredValue,
    isValid,
    hasError: !isValid,
    errorMessage,
    valueChangeHandler,
    reset,
  };
};

export default useInputValidator;
