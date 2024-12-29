import React from "react";

import Button from '@flexnative/buttons';
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
      <DemoBlock title='Loading'>
        <Block gap={DEMO_COMPONENT_GAP} style={{marginBottom: DEMO_COMPONENT_GAP * 2}}>

          <Block row gap={DEMO_COMPONENT_GAP}>

            <Block flex={1} gap={DEMO_COMPONENT_GAP}>
              <Block row gap={DEMO_COMPONENT_GAP} justifyContent="space-between">
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
              </Block>

              <Button loading={this.state.isLoading} text='text' color='primary' type='text' onPress={this.setLoading} />
              <Button loading={this.state.isLoading} text='ghost' color='primary' type='ghost' onPress={this.setLoading} />
            </Block>

            <Block flex={1} gap={DEMO_COMPONENT_GAP}>
              <Button loading={this.state.isLoading} text='link' color='primary' type='link' onPress={this.setLoading} />
              <Button loading={this.state.isLoading} text='inverse' color='primary' type='inverse' onPress={this.setLoading} />
              <Button loading={this.state.isLoading} text='default' color='primary' onPress={this.setLoading} />
            </Block>

          </Block>

        </Block>
      </DemoBlock>
    );
  }
}