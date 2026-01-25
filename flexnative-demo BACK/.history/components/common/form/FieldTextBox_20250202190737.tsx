import React, { FC } from "react";
import { Text } from "react-native";
import { useFormikContext } from "formik";

import { TextBox } from '@flexnative/inputs';
import { BaseInputProps } from "@flexnative/inputs/dist/input.props";
import { useThemeContext } from "@flexnative/theme-context";

import { FormFieldValues } from "./Field.props";


interface FieldTextBoxProps extends BaseInputProps {
  name: string;
}

export type Ref = TextBox;


const FieldTextBox = ((props: FieldTextBoxProps) => {

  const { name, color, ...rest } = props;
    
  const theme = useThemeContext();
  const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext<FormFieldValues>();
  const isError = Boolean(errors[name] && touched[name]);

  const handleBlur = () => {
    console.log('handleBlur...');
    ref?.current?.handleBlur();
    setFieldTouched(name);
  }
  
  return (
    <>
      <TextBox
      ref={ref}
        {...rest}
        //color={_color}
        onBlur={handleBlur}
        onSubmitEditing={() => console.log('onSubmitEditing...')}
        onChangeText={value => setFieldValue(name, value)}
        value={values[name] as string}
      />
      <Text>{errors[name]} {isError?.toString()}</Text>
      

      {/* <FieldWrapper name={name}
      component={() => <TextBox {...props} onChangeText={value => setFieldValue(name, value)} />}
      />
      {/* {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>} */}
        </>
  )
 });

export default FieldTextBox;