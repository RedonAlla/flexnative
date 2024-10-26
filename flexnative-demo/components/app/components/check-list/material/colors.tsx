import React from "react";

import { Check, CheckList } from "@flexnative/inputs";
import { Block, ExampleContainer } from "../../check-boxes/example-container";


type StateProp = {
  default: Array<string>;
  primary: Array<string>;
  secondary: Array<string>;
  light: Array<string>;
  dark: Array<string>;
  info: Array<string>;
  success: Array<string>;
  warning: Array<string>;
  error: Array<string>;
  crimson: Array<string>;
  rgb: Array<string>;
  hex: Array<string>;
  rgba: Array<string>;
  custom: Array<string>;
}

export default class extends React.Component<{}, StateProp> {
  constructor(props: {}) {
    super(props);

    this.state = {
      default: ['default'],
      primary: ['primary'],
      secondary: ['secondary'],
      light: ['light'],
      dark: ['dark'],
      info: ['info'],
      success: ['success'],
      warning: ['warning'],
      error: ['error'],
      crimson: ['crimson'],
      rgb: ['rgb'],
      hex: ['hex'],
      rgba: ['rgba'],
      custom: ['custom']
    }
    
    this.handleDefaultChange = this.handleDefaultChange.bind(this);
    this.handlePrimaryChange = this.handlePrimaryChange.bind(this);
    this.handleSecondaryChange = this.handleSecondaryChange.bind(this);
    this.handelLightChange = this.handelLightChange.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);
    this.handleSuccessChange = this.handleSuccessChange.bind(this);
    this.handleWarningChange = this.handleWarningChange.bind(this);
    this.handleErrorChange = this.handleErrorChange.bind(this);
    this.handleCrimsonChange = this.handleCrimsonChange.bind(this);
    this.handleRgbChange = this.handleRgbChange.bind(this);
    this.handleRgbaChange = this.handleRgbaChange.bind(this);
    this.handleHexChange = this.handleHexChange.bind(this);
    this.handleCustomChange = this.handleCustomChange.bind(this);
    this.handleDarkChange = this.handleDarkChange.bind(this);
  }

  public handleDefaultChange(selectedItems: Array<string>) {
    this.setState({default: selectedItems});
  }

  public handlePrimaryChange(selectedItems: Array<string>) {
    this.setState({primary: selectedItems});
  }

  public handleSecondaryChange(selectedItems: Array<string>) {
    this.setState({secondary: selectedItems});
  }

  public handelLightChange(selectedItems: Array<string>) {
    this.setState({light: selectedItems});
  }

  public handleDarkChange(selectedItems: Array<string>) {
    this.setState({dark: selectedItems});
  }

  public handleInfoChange(selectedItems: Array<string>) {
    this.setState({info: selectedItems});
  }

  public handleSuccessChange(selectedItems: Array<string>) {
    this.setState({success: selectedItems});
  }

  public handleWarningChange(selectedItems: Array<string>) {
    this.setState({warning: selectedItems});
  }

  public handleErrorChange(selectedItems: Array<string>) {
    this.setState({error: selectedItems});
  }

  public handleCrimsonChange(selectedItems: Array<string>) {
    this.setState({crimson: selectedItems});
  }

  public handleRgbChange(selectedItems: Array<string>) {
    this.setState({rgb: selectedItems});
  }

  public handleRgbaChange(selectedItems: Array<string>) {
    this.setState({rgba: selectedItems});
  }

  public handleHexChange(selectedItems: Array<string>) {
    this.setState({hex: selectedItems});
  }

  public handleCustomChange(selectedItems: Array<string>) {
    this.setState({custom: selectedItems});
  }
  
  public render() {
    return (
      <ExampleContainer title='Colors' shouldRender={true}>
        
        <Block direction='row'>
          <CheckList material color="default" label='default' value={this.state.default} onValueChange={this.handleDefaultChange}>
            <Check value='default' label='default' />
            <Check value='default1' label='default' />
            <Check value='default2' label='default' />
          </CheckList>

          <CheckList material color="primary" label='primary' value={this.state.primary} onValueChange={this.handlePrimaryChange}>
            <Check value='primary' label='primary' />
            <Check value='primary1' label='primary' />
            <Check value='primary2' label='primary' />
          </CheckList>
        </Block>

        <Block direction='row'>
          <CheckList material color="secondary" label='secondary' value={this.state.secondary} onValueChange={this.handleSecondaryChange}>
            <Check value='secondary' label='secondary' />
            <Check value='secondary1' label='secondary' />
            <Check value='secondary2' label='secondary' />
          </CheckList>

          <CheckList material color="light" label='light' value={this.state.light} onValueChange={this.handelLightChange}>
            <Check value='light' label='light' />
            <Check value='light1' label='light' />
            <Check value='light2' label='light' />
          </CheckList>
        </Block>

        <Block direction='row'>
          <CheckList material color='dark' label='dark' value={this.state.dark} onValueChange={this.handleDarkChange}>
            <Check value='dark' label='dark' />
            <Check value='dark1' label='dark' />
            <Check value='dark2' label='dark' />
          </CheckList>
          
          <CheckList material color='info' label='info' value={this.state.info} onValueChange={this.handleInfoChange}>
            <Check value='info' label='info' />
            <Check value='info1' label='info' />
            <Check value='info2' label='info' />
          </CheckList>
        </Block>

        <Block direction='row'>
          <CheckList material color="success" label='success' value={this.state.success} onValueChange={this.handleSuccessChange}>
            <Check value='success' label='success' />
            <Check value='success1' label='success' />
            <Check value='success2' label='success' />
          </CheckList>
          
          <CheckList material color="warning" label='warning' value={this.state.warning} onValueChange={this.handleWarningChange}>
            <Check value='warning' label='warning' />
            <Check value='warning1' label='warning' />
            <Check value='warning2' label='warning' />
          </CheckList>
        </Block>

        <Block direction='row'>
          <CheckList material color="error" label='error' value={this.state.error} onValueChange={this.handleErrorChange}>
            <Check value='error' label='error' />
            <Check value='error1' label='error' />
            <Check value='error2' label='error' />
          </CheckList>
          
          <CheckList material color="crimson" label='crimson' value={this.state.crimson} onValueChange={this.handleCrimsonChange}>
            <Check value='crimson' label='crimson' />
            <Check value='crimson1' label='crimson' />
            <Check value='crimson2' label='crimson' />
          </CheckList>
        </Block>

        <Block direction='row'>
          <CheckList material color="rgb(237, 20, 61)" label='rgb(237, 20, 61)' value={this.state.rgb} onValueChange={this.handleRgbChange}>
            <Check value='rgb' label='rgb(237, 20, 61)' />
            <Check value='rgb1' label='rgb(237, 20, 61)' />
            <Check value='rgb2' label='rgb(237, 20, 61)' />
          </CheckList>
          
          <CheckList material color="#ed143d" label='#ed143d' value={this.state.hex} onValueChange={this.handleHexChange}>
            <Check value='hex' label='#ed143d' />
            <Check value='hex1' label='#ed143d' />
            <Check value='hex2' label='#ed143d' />
          </CheckList>
        </Block>

        <Block direction='row'>
          <CheckList material color="rgba(237, 20, 61, 0.5)" label='rgba(237, 20, 61, 0.5)' value={this.state.rgba} onValueChange={this.handleRgbaChange}>
            <Check value='rgba' label='rgba(237, 20, 61, 0.5)' />
            <Check value='rgba1' label='rgba(237, 20, 61, 0.5)' />
            <Check value='rgba2' label='rgba(237, 20, 61, 0.5)' />
          </CheckList>

          <CheckList material color="rgba(237, 20, 61, 0.5)" label='rgba(237, 20, 61, 0.5)' value={this.state.custom} onValueChange={this.handleCustomChange}>
            <Check value='custom' label='primary' color='primary' />
            <Check value='custom1' label='info' color='info' />
            <Check value='custom2' label='success' color='success' />
          </CheckList>
        </Block>
        
      </ExampleContainer>
    );
  }
}