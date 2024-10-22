import React from "react";
import { StyleSheet, TextInput } from "react-native";

import Button from '@flexnative/buttons';
// highlight-next-line
import BottomSheet from "@flexnative/bottom-sheet";

import MockContainer from "./MockContainer";
import { OPEN_TIME_OUT } from "./constants";


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
      <div className='example-block'>
        <Button style={styles.button} text='padding (default)' color='primary' onPress={() => this.open('padding')}/>
        <Button style={styles.button} text='height' color='primary' onPress={() => this.open('height')}/>
        <Button style={styles.button} text='position' color='primary' onPress={() => this.open('position')}/>
          
        <BottomSheet ref={this.refBottomSheet} keyboardAvoidingViewEnabled={true} behavior={this.state.behavior!} >
          <MockContainer close={this.close}>
            <TextInput style={styles.input} />
          </MockContainer>
        </BottomSheet>
      </div>
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
});