import React from "react";
import { Block } from "@flexnative/layout";
import { Check, CheckList } from "@flexnative/inputs";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


type StateProp = {
  default: Array<string>;
  small: Array<string>;
  medium: Array<string>;
  large: Array<string>;
}

export default class extends React.Component<{}, StateProp> {
  constructor(props: {}) {
    super(props);

    this.state = {
      default: ['default'],
      small: ['small'],
      medium: ['medium'],
      large: ['large']
    }
    
    this.handleDefaultChange = this.handleDefaultChange.bind(this);
    this.handleSmallChange = this.handleSmallChange.bind(this);
    this.handleMediumChange = this.handleMediumChange.bind(this);
    this.handelLargeChange = this.handelLargeChange.bind(this);
  }

  public handleDefaultChange(selectedItems: string | Array<string>): void {
    this.setState({default: selectedItems as Array<string>});
  }

  public handleSmallChange(selectedItems: string | Array<string>) {
    this.setState({small: selectedItems as Array<string>});
  }

  public handleMediumChange(selectedItems: string | Array<string>) {
    this.setState({medium: selectedItems as Array<string>});
  }

  public handelLargeChange(selectedItems: string | Array<string>) {
    this.setState({large: selectedItems as Array<string>});
  }

  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Block row gap={DEMO_COMPONENT_GAP} style={{ marginBottom: DEMO_COMPONENT_GAP }}>
          <CheckList material label='Label' value={this.state.default} onValueChange={this.handleDefaultChange}>
            <Check value='default' label='default' />
            <Check value='default1' label='default' />
            <Check value='default2' label='default' />
          </CheckList>

          <CheckList material label='Label' size="small" value={this.state.small} onValueChange={this.handleSmallChange}>
            <Check value='small' label='small' />
            <Check value='small1' label='small' />
            <Check value='small2' label='small' />
          </CheckList>
        </Block>

        <Block row gap={DEMO_COMPONENT_GAP}>
          <CheckList material label='Label' size="medium" value={this.state.medium} onValueChange={this.handleMediumChange}>
            <Check value='medium' label='medium' />
            <Check value='medium1' label='medium' />
            <Check value='medium2' label='medium' />
          </CheckList>

          <CheckList material label='Label' size="large" value={this.state.large} onValueChange={this.handelLargeChange}>
            <Check value='large' label='large' />
            <Check value='large1' label='large' />
            <Check value='large2' label='large' />
          </CheckList>
        </Block>
      </DemoBlock>
    );
  }
}