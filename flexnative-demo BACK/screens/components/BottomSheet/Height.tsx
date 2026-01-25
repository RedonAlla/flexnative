import React from "react";

import Button from '@flexnative/buttons';
import { Block } from "@flexnative/layout";
import BottomSheet from "@flexnative/bottom-sheet";

import DemoBlock from "@/components/common/DemoBlock";
import MockContainer from "./MockContainer";
import { OPEN_TIME_OUT } from "./constants";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


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
      <>
        <DemoBlock title='Height'>
          <Block row gap={DEMO_COMPONENT_GAP} wrap="wrap">
            <Button style={{flex: 1}} text='260 (default)' color='primary' onPress={() => this.setHeight(260)}/>
            <Button style={{flex: 1}} text='350' color='primary' onPress={() => this.setHeight(350)}/>
            <Button style={{flex: 1}} text='650' color='primary' onPress={() => this.setHeight(650)}/>
          </Block>
        </DemoBlock>
        <BottomSheet ref={this.refBottomSheet} closeOnDragDown={true} height={this.state.height!} >
          <MockContainer close={this.close} />
        </BottomSheet>
      </>
    );
  }
}