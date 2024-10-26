import React from "react";
import { StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import BottomSheet from "@flexnative/bottom-sheet";

import DemoBlock from "@/components/app/DemoBlock";
import MockContainer from "./mock-container";
import { OPEN_TIME_OUT } from "./constants";
import { GAP } from "../../constants";


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
        <DemoBlock title='Animation Type' contentStyle={styles.container}>
          <Button style={styles.button} color='primary' text='none (default)' onPress={this.animationTypeNone}/>
          <Button style={styles.button} text='slide' color='primary' onPress={this.animationTypeSlide}/>
          <Button style={styles.button} text='fade' color='primary' onPress={this.animationTypeFade}/>
        </DemoBlock>
        <BottomSheet ref={this.refBottomSheet} animationType={this.state.animationType!} >
          <MockContainer close={this.close} />
        </BottomSheet>
      </>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    columnGap: GAP,
    flexDirection: "row",
    backgroundColor: 'transparent'
  },
  button: {
    flex: 1
  },
});