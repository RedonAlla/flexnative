/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-04 22:18:34
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-05 00:43:44
 * @ Description: Example of Message component rendering custom component.
 */


import React from "react";
import { StyleSheet, Text } from "react-native";

import Message from "@flexnative/messages";
import { useThemeContext } from "@flexnative/theme-context";


export default function Children() {
  const theme = useThemeContext();

  const codeStyle = () => {
    return {
      color: theme.colors.text,
      backgroundColor: theme.colors.warning
    }
  }

  return (
    <div className='example-block'>
      <Message>
        <Text style={{color: theme.colors.warning}}>
          Using prop <Text style={[styles.code, codeStyle()]}>children</Text> to render
          custom <Text style={[styles.code, codeStyle()]}>
            React Element 
          </Text> in <Text style={[styles.code, codeStyle()]}>Message</Text> component.
        </Text>
      </Message>
    </div>
  );
}

const styles = StyleSheet.create({
  code: {
    paddingHorizontal: 5,
    lineHeight: 20,
    borderRadius: 3,
    fontFamily: 'Italic',
  }
});