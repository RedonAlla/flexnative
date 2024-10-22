import React from "react";
import { StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
// highlight-next-line
import BottomSheet from "@flexnative/bottom-sheet";

import MockContainer from "./MockContainer";
import { OPEN_TIME_OUT } from "./constants";


type State = {
  closeOnDragDown: boolean;
}

export default class extends React.PureComponent<{}, State> {
  private refBottomSheet: React.RefObject<BottomSheet>;

  constructor(props: {}) {
    super(props);

    this.state = {
      closeOnDragDown: false
    };

    this.refBottomSheet = React.createRef();
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  private open(closeOnDragDown: boolean) {
    this.setState({closeOnDragDown})
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
          <Button style={styles.button} text='false (default)' color='primary' onPress={() => this.open(false)}/>
          <Button style={styles.button} text='true' color='primary' onPress={() => this.open(true)}/>
        
        <BottomSheet ref={this.refBottomSheet} closeOnDragDown={this.state.closeOnDragDown!} >
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