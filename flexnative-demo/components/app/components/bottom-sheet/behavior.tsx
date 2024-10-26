import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import Button from '@flexnative/buttons';
import BottomSheet from "@flexnative/bottom-sheet";

import DemoBlock from "@/components/app/DemoBlock";

import MockContainer from "./mock-container";
import { OPEN_TIME_OUT } from "./constants";
import Alert from "../../Alert";
import { GAP } from "../../constants";


type State = {
  behavior?: "height" | "padding" | "position";
}

export default class extends React.PureComponent<{}, State> {
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

  public render() {
    return (
      <>
        <DemoBlock title='Behavior' contentStyle={styles.container}>
          <View style={styles.row}>
            <Button style={styles.button} text='padding (default)' color='primary' onPress={() => this.open('padding')}/>
            <Button style={styles.button} text='height' color='primary' onPress={() => this.open('height')}/>
            <Button style={styles.button} text='position' color='primary' onPress={() => this.open('position')}/>
          </View>
          <Alert message="behavior has effect only when keyboardAvoidingViewEnabled it is true." type="warning"/>
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
  container: {
    rowGap: GAP,
    width: '100%',
    flexDirection: "column",
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});