import React from "react";
import { StyleSheet, Text } from "react-native";

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
  minClosingHeight: number;
}

export default class extends React.PureComponent<{}, State> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;
  private refBottomSheet: React.RefObject<BottomSheet>;

  constructor(props: {}) {
    super(props);

    this.state = {
      minClosingHeight: 0
    };

    this.refBottomSheet = React.createRef();
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  private open(minClosingHeight: number) {
    this.setState({minClosingHeight})
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
        <DemoBlock title='Min ClosingHeight'>
          <Block row gap={DEMO_COMPONENT_GAP} wrap="wrap" style={{marginBottom: DEMO_COMPONENT_GAP}}>
            <Button style={styles.button} text='0 (default)' color='primary' onPress={() => this.open(0)}/>
            <Button style={styles.button} text='200' color='primary' onPress={() => this.open(200)}/>
            <Button style={styles.button} text='400' color='primary' onPress={() => this.open(400)}/>
          </Block>
          <Message color="warning">
            <Text style={{color: this.context.colors.warning}}>
              <Text style={[styles.code, this.textColor()]}>minClosingHeight</Text> has effect only
              when <Text style={[styles.code, this.textColor()]}>closeOnDragDown</Text>
              it is <Text style={[styles.code, this.textColor()]}>true</Text>.
            </Text>
          </Message>
        </DemoBlock>
        <BottomSheet ref={this.refBottomSheet} minClosingHeight={this.state.minClosingHeight!} closeOnDragDown >
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