import React from "react";

import Button from '@flexnative/buttons';
import { Block } from "@flexnative/layout";
import BottomSheet from "@flexnative/bottom-sheet";

import DemoBlock from "@/components/common/DemoBlock";
import MockContainer from "./MockContainer";
import { OPEN_TIME_OUT } from "./constants";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


type State = {
  animationType: 'none' | 'fade' | 'slide'
}

export default class extends React.PureComponent<{}, State> {
  private refBottomSheet: React.RefObject<BottomSheet>;

  constructor(props: {}) {
    super(props);

    this.state = {
      animationType: 'fade'
    };

    this.refBottomSheet = React.createRef();
    this.close = this.close.bind(this);
    this.animationTypeFade = this.animationTypeFade.bind(this);
    this.animationTypeNone = this.animationTypeNone.bind(this);
    this.animationTypeSlide = this.animationTypeSlide.bind(this);
  }

  private animationTypeNone() {
    this.setState({animationType: 'none'})
    setTimeout(() => {
      this.refBottomSheet?.current?.open();
    }, OPEN_TIME_OUT);
  }

  private animationTypeFade() {
    this.setState({animationType: 'fade'})
    setTimeout(() => {
      this.refBottomSheet?.current?.open();
    }, OPEN_TIME_OUT);
  }

  private animationTypeSlide() {
    this.setState({animationType: 'slide'})
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
        <DemoBlock title='Animation Type'>
          <Block row gap={DEMO_COMPONENT_GAP} wrap="wrap">
            <Button style={{flex: 1}} color='primary' text='none (default)' onPress={this.animationTypeNone}/>
            <Button style={{flex: 1}} text='slide' color='primary' onPress={this.animationTypeSlide}/>
            <Button style={{flex: 1}} text='fade' color='primary' onPress={this.animationTypeFade}/>
          </Block>
        </DemoBlock>
        <BottomSheet ref={this.refBottomSheet} animationType={this.state.animationType!} >
          <MockContainer close={this.close} />
        </BottomSheet>
      </>
    );
  }
}