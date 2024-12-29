import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import { Spinner } from "@flexnative/icons";
import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


type State = {
  isLoading: boolean;
}

export default class extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isLoading: false
    }
    
    this.setLoading = this.setLoading.bind(this);
  }

  private setLoading() {
    this.setState({isLoading: true});
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 2000);
  }

  public render() {
    return (
      <DemoBlock title='Render Children'>
        <Block gap={DEMO_COMPONENT_GAP}>
          <Button color='primary' text='Custom Loader' onPress={this.setLoading} loading={this.state.isLoading} renderLoading={<Spinner name="star" />} />
        </Block>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    columnGap: DEMO_COMPONENT_GAP,
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 12,
    fontFamily: 'Bold',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center'
  }
});