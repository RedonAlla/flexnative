import React from "react";
import { StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
// highlight-next-line
import BottomSheet from "@flexnative/bottom-sheet";

import MockContainer from "./MockContainer";
import { OPEN_TIME_OUT } from "./constants";


type State = {
  height: number;
}

export default class extends React.PureComponent<{}, State> {
  private refBottomSheet: React.RefObject<BottomSheet>;

  constructor(props: {}) {
    super(props);

    this.state = {
      height: 260
    };

    this.refBottomSheet = React.createRef();
    this.close = this.close.bind(this);
    this.setHeight = this.setHeight.bind(this);
  }

  private setHeight(height: number) {
    this.setState({height})
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
        <Button style={styles.button} text='260 (default)' color='primary' onPress={() => this.setHeight(260)}/>
        <Button style={styles.button} text='350' color='primary' onPress={() => this.setHeight(350)}/>
        <Button style={styles.button} text='650' color='primary' onPress={() => this.setHeight(650)}/>
            
        <BottomSheet ref={this.refBottomSheet} closeOnDragDown={true} height={this.state.height!} >
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