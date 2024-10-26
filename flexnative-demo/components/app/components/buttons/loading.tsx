import React from "react";
import { View, StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import { Spinner } from "@flexnative/icons";
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "../../constants";


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
      <DemoBlock title='Loading'>
        <View style={styles.row}>
          <View style={styles.column}>

            <View style={styles.icons}>
              <Button color='primary'
                      iconLeft='star'
                      loading={this.state.isLoading}
                      onPress={this.setLoading}
              />
              <Button color='primary'
                      radius='full'
                      iconLeft='star'
                      loading={this.state.isLoading}
                      onPress={this.setLoading}
              />
            </View>
            
            <Button text='text'
                      color='primary'
                      type='text'
                      loading={this.state.isLoading}
                      onPress={this.setLoading}
              />
              <Button text='ghost'
                      color='primary'
                      type='ghost'
                      loading={this.state.isLoading}
                      onPress={this.setLoading}
              />
            
          </View>
          <View style={styles.column}>
            
            <View style={styles.icons}>
              <Button color='primary'
                      iconRight='star'
                      loading={this.state.isLoading}
                      onPress={this.setLoading}
              />
              <Button color='primary'
                      radius='full'
                      iconRight='star'
                      loading={this.state.isLoading}
                      onPress={this.setLoading}
              />
            </View>
              
            <Button text='link'
                    color='primary'
                    type='link'
                    loading={this.state.isLoading}
                    onPress={this.setLoading}
            />
            <Button text='inverse'
                    color='primary'
                    type='inverse'
                    loading={this.state.isLoading}
                    onPress={this.setLoading}
            />
              
          </View>
        </View>

        <View style={styles.row}>
          <View style={{flex: 1, marginTop: GAP}}>
            <Button text='default'
                    color='primary'
                    loading={this.state.isLoading}
                    renderLoading={<Spinner name="spinner"/>}
                    onPress={this.setLoading}
            />
          </View>
        </View>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  row: {
    columnGap: GAP,
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'transparent'
  },
  column: {
    flex: 1,
    rowGap: GAP,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent'
  }
});