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
}) {
  return (
    // create a react input component using react bootstrap

    <Form.Group className={containerClasses}>
      {label && <Form.Label className={labelClasses}>{label}</Form.Label>}
      <Form.Control
        className={inputClasses}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
}
