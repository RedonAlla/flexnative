import React from "react";
import { Alert } from "react-native";

import Button from '@flexnative/buttons';
import BottomSheet from "@flexnative/bottom-sheet";

import DemoBlock from "@/components/app/DemoBlock";
import MockContainer from "./mock-container";
import { OPEN_TIME_OUT } from "./constants";


export default class extends React.PureComponent<{}, {}> {
  private refBottomSheet: React.RefObject<BottomSheet>;

  constructor(props: {}) {
    super(props);

    this.refBottomSheet = React.createRef();
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  private open() {
    setTimeout(() => {
      this.refBottomSheet?.current?.open();
    }, OPEN_TIME_OUT);
  }

  private close() {
    this.refBottomSheet?.current?.close();
  };

  private showAlert(title: string, content: string) {  
    Alert.alert(  
      title,  
      content,  
      [  
        {  
          text: 'Cancel',  
          style: 'cancel',  
        },  
        { text: 'OK' },  
      ]  
    );  
  }

  public render() {
    return (
      <>
        <DemoBlock title='BottomSheet With action onOpen & onClose'>
          <Button color='primary' text='With actions' onPress={this.open}/>
        </DemoBlock>
        <BottomSheet ref={this.refBottomSheet}
                    onOpen={() => this.showAlert('Modal Open', 'Modal is opened')}
                    onClose={() => this.showAlert('Modal Closed', 'Modal is closed')} >
          <MockContainer close={this.close} />
        </BottomSheet>
      </>
    );
  }
}