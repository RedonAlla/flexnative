import React, { FC } from "react";
import { FieldProps, useFormik,  } from "formik";
import { useField } from "formik";
import { TextBox } from '@flexnative/inputs';
import { BaseInputProps } from "@flexnative/inputs/dist/input.props";

interface FieldTextBoxProps extends BaseInputProps {
  name: string;
}

const FieldTextBox: FC<FieldTextBoxProps & FieldProps> = ({
   //field, // { name, value, onChange, onBlur }
   //form,//: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
   ...props
 }) => {

  //const [field, setFieldValue] = useField('email');
  const [field, setFieldValue] = useFormik();

  //console.log('field', field);
  console.log('field', field);
  console.log('form', form);
  //console.log('meta', meta);
  //console.log('props', props);
  return (
    <>
      <TextBox {...props} onChangeText={value => form.setFieldValue('email', value)} />
      {/* {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>} */}
        </>
  )
 };

export default FieldTextBox;