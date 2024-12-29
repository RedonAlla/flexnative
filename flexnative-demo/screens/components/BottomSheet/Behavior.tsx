import React from "react";
import { StyleSheet, TextInput, Text } from "react-native";

import Button from '@flexnative/buttons';
import { Block } from "@flexnative/layout";
import BottomSheet from "@flexnative/bottom-sheet";
import Message from "@flexnative/messages";

import DemoBlock from "@/components/common/DemoBlock";
import MockContainer from "./MockContainer";
import { OPEN_TIME_OUT } from "./constants";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import ThemeContext from "@flexnative/theme-context";


type State = {
  behavior?: "height" | "padding" | "position";
}

export default class extends React.PureComponent<{}, State> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  private refBottomSheet: React.RefObject<BottomSheet>;

  constructor(props: {}) {
    super(props);

    this.state = {
      behavior: 'padding'
    };

    this.refBottomSheet = React.createRef();
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  private open(behavior: "height" | "padding" | "position") {
    this.setState({behavior})
    setTimeout(() => {
      this.refBottomSheet?.current?.open();
    }, OPEN_TIME_OUT);
  }

  private close() {
    this.refBottomSheet?.current?.close();
  };

  private textColor = () => {
    if(this.context.scheme === 'dark')
      return { color: this.context.colors.warning };

    return { color: 'rgb(156 119 7)' };
  }

  public render() {
    return (
      <>
        <DemoBlock title='Behavior'>
          <Block row gap={DEMO_COMPONENT_GAP} wrap="wrap" style={{marginBottom: DEMO_COMPONENT_GAP}}>
            <Button style={styles.button} text='padding (default)' color='primary' onPress={() => this.open('padding')}/>
            <Button style={styles.button} text='height' color='primary' onPress={() => this.open('height')}/>
            <Button style={styles.button} text='position' color='primary' onPress={() => this.open('position')}/>
          </Block>
          <Message color="warning">
            <Text style={{color: this.context.colors.warning}}>
              <Text style={[styles.code, this.textColor()]}>behavior</Text> prop is used to determine the behavior of the bottom sheet when the keyboard is
              displayed. <Text style={[styles.code, this.textColor()]}>behavior</Text> has effect only when <Text style={[styles.code, this.textColor()]}>keyboardAvoidingViewEnabled</Text>
               it is <Text style={[styles.code, this.textColor()]}>true</Text>.
            </Text>
          </Message>
        </DemoBlock>
        <BottomSheet ref={this.refBottomSheet} keyboardAvoidingViewEnabled={true} behavior={this.state.behavior!} >
          <MockContainer close={this.close}>
            <TextInput style={styles.input} />
          </MockContainer>
        </BottomSheet>
      </>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  code: {
    backgroundColor: 'rgba(255, 193, 7, 0.25)',
    paddingHorizontal: 5,
    lineHeight: 20,
    borderRadius: 3,
    fontFamily: 'Italic',
  }
});