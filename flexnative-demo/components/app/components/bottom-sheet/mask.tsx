import React from "react";
import { BlurTint } from "expo-blur";
import { View, Text, StyleSheet, ColorValue } from "react-native";

import Button from '@flexnative/buttons';
import BottomSheet from "@flexnative/bottom-sheet";

import DemoBlock from "@/components/app/DemoBlock";

import MockContainer from "./mock-container";
import { OPEN_TIME_OUT } from "./constants";
import Alert from "../../Alert";
import ThemeContext from "@flexnative/theme-context";
import { GAP } from "../../constants";


const MESSAGE_TEXT_SIZE = 12;

type State = {
  maskMode?: BlurTint;
}

export const Message = (props: {textColor: ColorValue}) => (
  <Text style={[styles.alert, { color: props.textColor }]}>
    maskMode it is the same as <Text style={[styles.alertBold, { color: props.textColor }]}>
      BlurTint 
    </Text> from <Text style={[styles.alertBold, { color: props.textColor }]}>expo-blur</Text>
  </Text>
);

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

  public render() {
    return (
      <>
        <DemoBlock title='Mask Mode' contentStyle={styles.container}>
          <View style={styles.row}>
            <Button style={styles.button} text='default' color='primary' onPress={() => this.open('default')}/>
            <Button style={styles.button} text='light' color='primary' onPress={() => this.open('light')}/>
            <Button style={styles.button} text='dark' color='primary' onPress={() => this.open('dark')}/>
          </View>
          <View style={styles.row}>
            <Button style={styles.button} text='regular' color='primary' onPress={() => this.open('regular')}/>
            <Button style={styles.button} text='prominent' color='primary' onPress={() => this.open('prominent')}/>
          </View>
          <Alert type="warning" message={<Message textColor={this.context.colors.warning} />} />
        </DemoBlock>
        <BottomSheet ref={this.refBottomSheet} maskMode={this.state.maskMode!} >
          <MockContainer close={this.close} />
        </BottomSheet>
      </>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: '100%',
    rowGap: GAP,
    backgroundColor: 'transparent'
  },
  row: {
    width: '100%',
    columnGap: GAP,
    flexDirection: "row",
    backgroundColor: 'transparent'
  },
  button: {
    flex: 1
  },
  alert: {
    fontStyle: 'italic',
    fontSize: MESSAGE_TEXT_SIZE,
  },
  alertBold: {
    paddingHorizontal: 4,
    fontSize: MESSAGE_TEXT_SIZE + 1,
    fontFamily: 'ItalicSemiBold',
  }
});