import { useState } from "react";

export default function useInput(initialValue, validator) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  function handleChange(e) {
    const newValue = e.target.value;
    setValue(newValue);

    if (validator) {
      const validationError = validator(newValue);
      setError(validationError);
    }
  }

  function handleBlur() {
    if (validator) {
      const validationError = validator(value);
      setError(validationError);
    }
  }

  return [value, handleChange, error, handleBlur];
}
