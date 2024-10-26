import React from "react";
import { View, StyleSheet } from "react-native";

import { Spinner } from "@flexnative/icons";
import Button from '@flexnative/buttons';
import DemoBlock from "@/components/app/DemoBlock";


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
      <DemoBlock title='Render Loading' contentStyle={styles.block}>
        <Button color='primary' radius='full' iconRight='star' loading={this.state.isLoading} onPress={this.setLoading} renderLoading={<Spinner name="star" />} />
        <View style={styles.row}>
          <Button color='primary' text='Custom Loader' onPress={this.setLoading} loading={this.state.isLoading} renderLoading={<Spinner name="star" />} />
        </View>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  block: {
    rowGap: 10,
    columnGap: 6,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flex: 1
  }
});