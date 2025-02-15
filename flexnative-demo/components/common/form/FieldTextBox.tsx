import React, { FC } from "react";
import { Text, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import { TextBox } from '@flexnative/inputs';
import { BaseInputProps } from "@flexnative/inputs/dist/input.props";
import { FontSize, Sizes, useThemeContext } from "@flexnative/theme-context";

import { FormFieldValues } from "./Field.props";
import { TEXT_HELPER_MARGIN_TOP_MULTIPLIER, TEXT_HELPER_MULTIPLIER } from "./Filed.constants";


interface FieldTextBoxProps extends BaseInputProps {
  name: string;
}


const FieldTextBox: FC<FieldTextBoxProps> = ({name, size, ...props}) => {
    
  const theme = useThemeContext();
  const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext<FormFieldValues>();
  const isError = Boolean(errors[name] && touched[name]);

  const styles = createStyles({size, fontSize: theme.fontSize});
  
  return (
    <>
      <TextBox
        {...props}
        isError={isError}
        onBlur={() => setFieldTouched(name)}
        onChangeText={value => setFieldValue(name, value)}
        value={values[name] as string}
      />
      {isError && <Text style={[styles.errorMessage, {color: theme.colors.error}]}>{errors[name]}</Text>}
    </>
  )
};

export default FieldTextBox;

type StylesProps = {
  size?: Sizes;
  fontSize: Record<FontSize, number>
}

function createStyles(props: StylesProps) {
  const fontSize = props.fontSize[props.size!] ?? props.fontSize.default;

  return StyleSheet.create({
    errorMessage: {
      fontStyle: 'italic',
      marginTop: TEXT_HELPER_MARGIN_TOP_MULTIPLIER * fontSize,
      fontSize: TEXT_HELPER_MULTIPLIER * fontSize,
    },
  });
}