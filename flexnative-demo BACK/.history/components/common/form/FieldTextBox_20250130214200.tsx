import React, { FC } from "react";
import { FieldProps } from "formik";
import { useField } from "formik";
import { TextBox } from '@flexnative/inputs';
import { BaseInputProps } from "@flexnative/inputs/dist/input.props";

interface FieldTextBoxProps extends BaseInputProps {
  
}

const FieldTextBox: FC<FieldTextBoxProps> = ({
   //field, // { name, value, onChange, onBlur }
   //form,//: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
   ...props
 }) => {

  const [field, meta] = useField('email');

  //console.log('field', field);
  console.log('field', field);
  console.log('meta', meta);
  //console.log('props', props);
  return (
    <>
      <TextBox {...props} value={field.value} />
      {/* {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>} */}
        </>
  )
 };

export default FieldTextBox;