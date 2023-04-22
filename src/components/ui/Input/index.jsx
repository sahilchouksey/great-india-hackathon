import { props } from "cypress/types/bluebird";
import { Form } from "react-bootstrap";
export default function Input({
  containerClasses,
  labelClasses,
  inputClasses,
  label,
  type,
  placeholder,
  initialValue,
  onChange,
  validater,
  ...props
}) {
  // using custom useInput hook

  const [value, handleChange, error, handleBlur] = useInput(
    initialValue,
    (value) => {
      validater(value);
    }
  );
  return (
    <Form.Group className={containerClasses}>
      {label && (
        <Form.Label className={`${error ? "text-danger" : ""}${labelClasses}`}>
          {label}
        </Form.Label>
      )}
      <Form.Control
        className={inputClasses}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          handleChange(e);
          onChange(e);
        }}
        onBlur={handleBlur}
        {...props}
      />
    </Form.Group>
  );
}
