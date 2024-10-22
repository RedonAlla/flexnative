import React from "react";

import Button from '@flexnative/buttons';
// highlight-next-line
import BottomSheet from "@flexnative/bottom-sheet";

import MockContainer from "./MockContainer";
import { OPEN_TIME_OUT } from "./constants";
import { Alert, Platform } from "react-native";


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
    if (Platform.OS === 'web') {
      alert(content)
    } else {
      Alert.alert(title, content)
    }
  }

  public render() {
    return (
      <div className='example-block'>
        <Button color='primary' text='With actions' onPress={this.open}/>
          
        <BottomSheet ref={this.refBottomSheet}
                    onOpen={() => this.showAlert('Modal Open', 'Modal is opened.')}
                    onClose={() => this.showAlert('Modal Closed', 'Modal is closed.')} >
          <MockContainer close={this.close} />
        </BottomSheet>
      </div>
    );
  }
}