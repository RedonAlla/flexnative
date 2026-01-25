import React, { FC } from "react";
import { FieldProps, useFormik, useFormikContext,  } from "formik";
import { useField } from "formik";
import { TextBox } from '@flexnative/inputs';
import { BaseInputProps } from "@flexnative/inputs/dist/input.props";
import FieldWrapper from "./FieldWrapper";

interface FieldTextBoxProps extends BaseInputProps {
  name: string;
}

const FieldTextBox: FC<FieldTextBoxProps> = ({ name, ...props }) => {

  //const [field, setFieldValue] = useField('email');
  const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext();
  
  //console.log('field', field);
  //console.log('form', form);
  //console.log('meta', meta);
  //console.log('props', props);
  return (
    <>
      <TextBox
        {...props}
        onBlur={() => setFieldTouched(name)}
        onChangeText={value => setFieldValue(name, value)}
        value={values[name]}
      />
      

      {/* <FieldWrapper name={name}
      component={() => <TextBox {...props} onChangeText={value => setFieldValue(name, value)} />}
      />
      {/* {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>} */}
        </>
  )
 };

export default FieldTextBox;