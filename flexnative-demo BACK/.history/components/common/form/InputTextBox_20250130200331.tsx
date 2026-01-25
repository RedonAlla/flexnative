import React, { FC } from "react";
import { FieldProps } from "formik";
import { TextBox } from '@flexnative/inputs';
import { BaseInputProps } from "@flexnative/inputs/dist/input.props";

interface InputTextBoxProps extends BaseInputProps, FieldProps {
  
}

const InputTextBox: FC<BaseInputProps & FieldProps> = ({
   field, // { name, value, onChange, onBlur }
   form,//: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
   ...props
 }) => {
  console.log('field', field);
  console.log('form', form);
  console.log('props', props);
  return (
      <TextBox {...props} />
      {/* {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>} */}
  )
 };

export default InputTextBox;