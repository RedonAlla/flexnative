import React from "react";
import { Check, CheckList } from "@flexnative/inputs";
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


type StateType = {
  nameValues: Array<string>,
  rgbValues: Array<string>,
  hexValues: Array<string>,
  rgbaValues: Array<string>,
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      nameValues: ['crimson'],
      rgbValues: ['rgb(237, 20, 61)'],
      hexValues: ['#ed143d'],
      rgbaValues: ['rgba(237, 20, 61, 0.5)'],
    }
    
    this.handleNameValueChange = this.handleNameValueChange.bind(this);
    this.handleRgbValueChange = this.handleRgbValueChange.bind(this);
    this.handleHexValueChange = this.handleHexValueChange.bind(this);
    this.handleRgbaValueChange = this.handleRgbaValueChange.bind(this);
  }

  public handleNameValueChange(value: string | Array<string>) {
    this.setState({nameValues: Array.isArray(value) ? value : [value]});
  }

  public handleRgbValueChange(value: string | Array<string>) {
    this.setState({rgbValues: Array.isArray(value) ? value : [value]});
  }

  public handleHexValueChange(value: string | Array<string>) {
    this.setState({hexValues: Array.isArray(value) ? value : [value]});
  }

  public handleRgbaValueChange(value: string | Array<string>) {
    this.setState({rgbaValues: Array.isArray(value) ? value : [value]});
  }

  public render() {
    return (
      <DemoBlock title='Border Color'>
        <Block row gap={DEMO_COMPONENT_GAP}>
        
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <CheckList material label='Label' borderColor="crimson" value={this.state.nameValues} onValueChange={this.handleNameValueChange}>
              <Check value='crimson' label='crimson' />
              <Check value='blue' label='blue' />
              <Check value='red' label='red' />
            </CheckList>

            <CheckList material label='Label' borderColor="rgb(237, 20, 61)" value={this.state.rgbValues} onValueChange={this.handleRgbValueChange}>
              <Check value='rgb(237, 20, 61)' label='rgb(237, 20, 61)' />
              <Check value='rgb(191, 112, 204)' label='rgb(191, 112, 204)' />
              <Check value='rgb(40, 61, 158)' label='rgb(40, 61, 158)' />
            </CheckList>
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <CheckList material label='Label' borderColor="#ed143d" value={this.state.hexValues} onValueChange={this.handleHexValueChange}>
              <Check value='#ed143d' label='#ed143d' />
              <Check value='#ce04d1' label='#ce04d1' />
              <Check value='#343deb' label='#343deb' />
            </CheckList>

            <CheckList material label='Label' borderColor="rgba(237, 20, 61, 0.5)" value={this.state.rgbaValues} onValueChange={this.handleRgbaValueChange}>
              <Check value='rgba(237, 20, 61, 0.5)' label='rgba(237, 20, 61, 0.5)' />
              <Check value='rgba(191, 112, 204, 0.5)' label='rgba(191, 112, 204, 0.5)' />
              <Check value='rgba(40, 61, 158, 0.5)' label='rgba(40, 61, 158, 0.5)' />
            </CheckList>
          </Block>

        </Block>
      </DemoBlock>
    );
  }
}