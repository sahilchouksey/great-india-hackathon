import { props } from "cypress/types/bluebird";
import { Form } from "react-bootstrap";
export default function Input({
  containerClasses,
  labelClasses,
  inputClasses,
  label,
  type,
  placeholder,
  value,
  onChange,
  ...props
}) {
  return (
    <Form.Group className={containerClasses}>
      {label && <Form.Label className={labelClasses}>{label}</Form.Label>}
      <Form.Control
        className={inputClasses}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </Form.Group>
  );
}
