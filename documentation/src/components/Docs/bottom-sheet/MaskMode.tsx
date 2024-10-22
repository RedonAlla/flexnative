import React from "react";
import { BlurTint } from "expo-blur";
import { StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
// highlight-next-line
import BottomSheet from "@flexnative/bottom-sheet";

import MockContainer from "./MockContainer";
import { OPEN_TIME_OUT } from "./constants";


type State = {
  maskMode?: BlurTint;
}


export default class extends React.PureComponent<{}, State> {
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
      <div className='example-block'>
        <Button style={styles.button} text='default' color='primary' onPress={() => this.open('default')}/>
        <Button style={styles.button} text='light' color='primary' onPress={() => this.open('light')}/>
        <Button style={styles.button} text='dark' color='primary' onPress={() => this.open('dark')}/>
        <Button style={styles.button} text='regular' color='primary' onPress={() => this.open('regular')}/>
        <Button style={styles.button} text='prominent' color='primary' onPress={() => this.open('prominent')}/>
        
        <BottomSheet ref={this.refBottomSheet} maskMode={this.state.maskMode!} >
          <MockContainer close={this.close} />
        </BottomSheet>
      </div>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    flex: 1
  }
});