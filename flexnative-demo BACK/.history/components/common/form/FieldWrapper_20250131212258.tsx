import React, { FC } from "react";
import { Field, FieldProps, useFormik,  } from "formik";
import { useField } from "formik";
import { TextBox } from '@flexnative/inputs';
import { BaseInputProps } from "@flexnative/inputs/dist/input.props";

interface FieldTextBoxProps {
  name: string;
  component?: string | React.ComponentType | React.ForwardRefExoticComponent<any>;
}

const FieldWrapper: FC<FieldTextBoxProps & FieldProps> = ({
  name,
  component,
   field: { value },
   form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
   ...props
 }) => {

  //const [field, setFieldValue] = useField('email');

  console.log('value', value);
  //console.log('field', field);
  //console.log('form', form);
  //console.log('meta', meta);
  //console.log('props', props);
  return (
    <>
      <Field name="email" component={component}/>
      {/* {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>} */}
        </>
  )
 };

export default FieldWrapper;