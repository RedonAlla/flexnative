import React, { FC } from "react";
import { FieldProps } from "formik";
import { TextBox } from '@flexnative/inputs';
import { BaseInputProps } from "@flexnative/inputs/dist/input.props";

interface FieldTextBoxProps extends BaseInputProps, FieldProps {
  
}

const FieldTextBox: FC<BaseInputProps & FieldProps> = ({
   field, // { name, value, onChange, onBlur }
   form,//: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
   ...props
 }) => {
  //console.log('field', field);
  console.log('form', form);
  //console.log('props', props);
  return (
    <>
      <TextBox {...field} {...props} />
      {/* {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>} */}
        </>
  )
 };

export default FieldTextBox;