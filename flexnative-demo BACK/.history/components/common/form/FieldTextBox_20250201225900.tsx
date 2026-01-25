import React, { FC } from "react";
import { Text } from "react-native";
import { FieldProps, FormikContextType, useFormik, useFormikContext,  } from "formik";
import { TextBox } from '@flexnative/inputs';
import { BaseInputProps } from "@flexnative/inputs/dist/input.props";
import { useThemeContext } from "@flexnative/theme-context";

interface FieldTextBoxProps extends BaseInputProps {
  name: string;
}

const FieldTextBox: FC<FieldTextBoxProps> = ({ name, color, ...props }) => {

  //const [field, setFieldValue] = useField('email');
  const theme = useThemeContext();
  const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext<FormikContextType<any>>();
  const isError = errors[name] && touched[name];
  
  //console.log('field', field);
  //console.log('form', form);
  //console.log('meta', meta);
  //console.log('props', props);
  return (
    <>
      <TextBox
        {...props}
        color={isError ? 'error' : color}
        onBlur={() => setFieldTouched(name)}
        onChangeText={value => setFieldValue(name, value)}
        value={values[name] as string}
      />
      <Text>{errors[name]} {isError.toString()}</Text>
      

      {/* <FieldWrapper name={name}
      component={() => <TextBox {...props} onChangeText={value => setFieldValue(name, value)} />}
      />
      {/* {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>} */}
        </>
  )
 };

export default FieldTextBox;