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


const FieldTextBox: FC<FieldTextBoxProps> = ({
  name,
  color,
  type, radius, borderWidth,
  ...props }) => {
    
  const theme = useThemeContext();
  const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext<FormFieldValues>();
  const isError = Boolean(errors[name] && touched[name]);
  
  return (
    <>
      <TextBox
        {...props}
        color={color}
        //color={isError ? 'error' : color}
        onPointerLeave={() => console.log('onPointerLeave...')}
        onBlur={() => console.log('onBlur...')}//setFieldTouched(name)}
        onEndEditing={() => console.log('onEndEditing...')}
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
 };

export default FieldTextBox;