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
  validater,
  onBlur,
  ...props
}) {
  // using custom useInput hook

  return (
    <Form.Group className={containerClasses}>
      {label && <Form.Label className={`${labelClasses}`}>{label}</Form.Label>}
      <Form.Control
        className={inputClasses}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        onBlur={onBlur}
        {...props}
      />
    </Form.Group>
  );
}
