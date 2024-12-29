import React from "react";

import Button from '@flexnative/buttons';
import { Block } from "@flexnative/layout";
import BottomSheet from "@flexnative/bottom-sheet";

import DemoBlock from "@/components/common/DemoBlock";
import MockContainer from "./MockContainer";
import { OPEN_TIME_OUT } from "./constants";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


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
      <>
        <DemoBlock title='Close OnDragDown'>
          <Block row gap={DEMO_COMPONENT_GAP} wrap="wrap">
            <Button style={{flex: 1}} text='false (default)' color='primary' onPress={() => this.open(false)}/>
            <Button style={{flex: 1}} text='true' color='primary' onPress={() => this.open(true)}/>
          </Block>
        </DemoBlock>
        <BottomSheet ref={this.refBottomSheet} closeOnDragDown={this.state.closeOnDragDown!} >
          <MockContainer close={this.close} />
        </BottomSheet>
      </>
    );
  }
}