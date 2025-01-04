import React from "react";
import { StyleSheet, Text } from "react-native";

import Message from "@flexnative/messages";
import ThemeContext from "@flexnative/theme-context";

import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  private codeStyle = () => {
    return {
      color: this.context.colors.text,
      backgroundColor: this.context.colors.warning
    }
  }

  public render() {
    return (
      <DemoBlock title='Children'>
        <Message>
          <Text style={{color: this.context.colors.warning}}>
            Using prop <Text style={[styles.code, this.codeStyle()]}>children</Text> to render
            custom <Text style={[styles.code, this.codeStyle()]}>
              React Element 
            </Text> in <Text style={[styles.code, this.codeStyle()]}>Message</Text> component.
          </Text>
        </Message>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  code: {
    paddingHorizontal: 5,
    lineHeight: 20,
    borderRadius: 3,
    fontFamily: 'Italic',
  }
});