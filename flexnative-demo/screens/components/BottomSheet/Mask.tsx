import React from "react";
import { StyleSheet, Text } from "react-native";
import { BlurTint } from "expo-blur";

import Button from '@flexnative/buttons';
import { Block } from "@flexnative/layout";
import BottomSheet from "@flexnative/bottom-sheet";
import Message from "@flexnative/messages";
import ThemeContext from "@flexnative/theme-context";

import DemoBlock from "@/components/common/DemoBlock";
import MockContainer from "./MockContainer";
import { OPEN_TIME_OUT } from "./constants";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


type State = {
  maskMode?: BlurTint;
}

export default class extends React.PureComponent<{}, State> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;
  private refBottomSheet: React.RefObject<BottomSheet>;

  constructor(props: {}) {
    super(props);

    this.state = {
      maskMode: 'light'
    };

    this.refBottomSheet = React.createRef();
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  private open(maskMode: BlurTint) {
    this.setState({maskMode})
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
        <DemoBlock title='Mask Mode'>
          <Block row gap={DEMO_COMPONENT_GAP} wrap="wrap" style={{marginBottom: DEMO_COMPONENT_GAP}}>
            <Button style={styles.button} text='default' color='primary' onPress={() => this.open('default')}/>
            <Button style={styles.button} text='light' color='primary' onPress={() => this.open('light')}/>
            <Button style={styles.button} text='dark' color='primary' onPress={() => this.open('dark')}/>
            <Button style={styles.button} text='regular' color='primary' onPress={() => this.open('regular')}/>
            <Button style={styles.button} text='prominent' color='primary' onPress={() => this.open('prominent')}/>
          </Block>
          <Message color="warning">
            <Text style={{color: this.context.colors.warning}}>
              <Text style={[styles.code, this.textColor()]}>maskMode</Text> it is the same as <Text style={[styles.code, this.textColor()]}>
                BlurTint 
              </Text> from <Text style={[styles.code, this.textColor()]}>expo-blur</Text>.
            </Text>
          </Message>
        </DemoBlock>
        <BottomSheet ref={this.refBottomSheet} maskMode={this.state.maskMode!} >
          <MockContainer close={this.close} />
        </BottomSheet>
      </>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1
  },
  code: {
    backgroundColor: 'rgba(255, 193, 7, 0.25)',
    paddingHorizontal: 5,
    lineHeight: 20,
    borderRadius: 3,
    fontFamily: 'Italic',
  }
});