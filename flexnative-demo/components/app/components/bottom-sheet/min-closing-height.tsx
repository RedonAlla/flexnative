import React from "react";
import { View, StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import BottomSheet from "@flexnative/bottom-sheet";

import DemoBlock from "@/components/app/DemoBlock";

import MockContainer from "./mock-container";
import { MARGIN_BLOCK, OPEN_TIME_OUT } from "./constants";
import Alert from "../../Alert";
import { GAP } from "../../constants";


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
      <>
        <DemoBlock title='Min ClosingHeight' contentStyle={styles.container}>
          <View style={styles.row}>
            <Button style={styles.button} text='0 (default)' color='primary' onPress={() => this.open(0)}/>
            <Button style={styles.button} text='200' color='primary' onPress={() => this.open(200)}/>
            <Button style={styles.button} text='400' color='primary' onPress={() => this.open(400)}/>
          </View>
          <Alert message="minClosingHeight has effect only when closeOnDragDown it is true." type="warning"/>
        </DemoBlock>
        <BottomSheet ref={this.refBottomSheet} minClosingHeight={this.state.minClosingHeight!} closeOnDragDown >
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
});