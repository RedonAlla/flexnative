import React from "react";
import { StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
// highlight-next-line
import BottomSheet from "@flexnative/bottom-sheet";

import MockContainer from "./MockContainer";
import { OPEN_TIME_OUT } from "./constants";


type State = {
  minClosingHeight: number;
}


export default class extends React.PureComponent<{}, State> {
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

  public render() {
    return (
      <div className='example-block'>
        <Button style={styles.button} text='0 (default)' color='primary' onPress={() => this.open(0)}/>
        <Button style={styles.button} text='200' color='primary' onPress={() => this.open(200)}/>
        <Button style={styles.button} text='400' color='primary' onPress={() => this.open(400)}/>
              
        <BottomSheet ref={this.refBottomSheet} minClosingHeight={this.state.minClosingHeight!} closeOnDragDown >
          <MockContainer close={this.close} />
        </BottomSheet>
      </div>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    flex: 1
  },
});