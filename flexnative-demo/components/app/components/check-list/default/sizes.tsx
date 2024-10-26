import React from "react";

import { Check, CheckList } from "@flexnative/inputs";
import { Block, ExampleContainer } from "../../check-boxes/example-container";


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

  public handleDefaultChange(selectedItems: Array<string>): void {
    this.setState({default: selectedItems});
  }

  public handleSmallChange(selectedItems: Array<string>) {
    this.setState({small: selectedItems});
  }

  public handleMediumChange(selectedItems: Array<string>) {
    this.setState({medium: selectedItems});
  }

  public handelLargeChange(selectedItems: Array<string>) {
    this.setState({large: selectedItems});
  }
  
  public render() {
    return (
      <ExampleContainer title='Sizes' shouldRender={true}>
        
        <Block direction='row'>
          <CheckList size="default" value={this.state.default} onValueChange={this.handleDefaultChange}>
            <Check value='default' label='default' />
            <Check value='default1' label='default' />
            <Check value='default2' label='default' />
          </CheckList>

          <CheckList size="small" value={this.state.small} onValueChange={this.handleSmallChange}>
            <Check value='small' label='small' />
            <Check value='small1' label='small' />
            <Check value='small2' label='small' />
          </CheckList>
        </Block>

        <Block direction='row'>
          <CheckList size="medium" value={this.state.medium} onValueChange={this.handleMediumChange}>
            <Check value='medium' label='medium' />
            <Check value='medium1' label='medium' />
            <Check value='medium2' label='medium' />
          </CheckList>

          <CheckList size="large" value={this.state.large} onValueChange={this.handelLargeChange}>
            <Check value='large' label='large' />
            <Check value='large1' label='large' />
            <Check value='large2' label='large' />
          </CheckList>
        </Block>
          
      </ExampleContainer>
    );
  }
}