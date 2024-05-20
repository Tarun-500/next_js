import { FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";

export default function TextInput({
  label, 
  value,
  placeholder,
  type, 
  className,
  onChange,
  name,
  error,
  readOnly,
  autoComplete,
  defaultValue,
  id,
  disabled,
  minLength,
  maxLength, 
  inputClass
}) {

 
  return (
    
    <FormGroup className={className}>
      {label && <Label className="fw-semibold mb-1 ms-2">{label}</Label>}
      <div className="position-relative">
        <Input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disabled}
          autoComplete={autoComplete}
          minLength={minLength}
          maxLength={maxLength}
          className={`profileInput ${inputClass || ''} ${error && "is-invalid"}`}
        /> 
      </div>
      {error && <div className="error text-danger">{error}</div>}
    </FormGroup>
  );
}

TextInput.propTypes = {
  label: PropTypes.string, 
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  type: PropTypes.string, 
  className: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  autoComplete: PropTypes.string,
  defaultValue: PropTypes.string,
  inputClass: PropTypes.string,
  id: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  uppercase: PropTypes.bool
};
