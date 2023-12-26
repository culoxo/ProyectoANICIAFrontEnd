import { Label, FormFeedback, FormText } from "reactstrap";

export const FormInput = ({ id, required, name, label, action, type, step, value, defaultValue, register, className, placeholder, messageError, invalid, message, readOnly, disabled, onBlur, labelCustomClass }) => {

  return (<div className={`form-floating ${className}`}>
    <input type={type}
      step={step}
      name={name}
      required={required}
      {...register}
      defaultValue={defaultValue}
      onInput={(e) => {
        if (action) {
          action(e)
        }
      }}
      value={value}
      placeholder={" "}
      id={id}
      invalid={invalid}
      autoComplete="new-password"
      readOnly={readOnly}
      disabled={disabled}
      className="form-control"
      onBlur={onBlur}
    />
    <Label for={id} className='input-label'>{label}</Label>
    <FormFeedback className={messageError ? 'd-block' : ''}>
      {messageError}
    </FormFeedback>
    <FormText>{message}</FormText>
  </div>)
};
