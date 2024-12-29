import React from "react";
import { StyleSheet } from "react-native";
import { Check, CheckList } from "@flexnative/inputs";
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


type StateProp = {
  default: string | Array<string>;
  primary: string | Array<string>;
  secondary: string | Array<string>;
  light: string | Array<string>;
  dark: string | Array<string>;
  info: string | Array<string>;
  success: string | Array<string>;
  warning: string | Array<string>;
  error: string | Array<string>;
  crimson: string | Array<string>;
  rgb: string | Array<string>;
  hex: string | Array<string>;
  rgba: string | Array<string>;
  custom: string | Array<string>;
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

  public handleDefaultChange(selectedItems: string | Array<string>): void {
    this.setState({default: selectedItems as Array<string>});
  }

  public handlePrimaryChange(selectedItems: string | Array<string>) {
    this.setState({primary: selectedItems as Array<string>});
  }

  public handleSecondaryChange(selectedItems: string | Array<string>) {
    this.setState({secondary: selectedItems as Array<string>});
  }

  public handelLightChange(selectedItems: string | Array<string>) {
    this.setState({light: selectedItems as Array<string>});
  }

  public handleDarkChange(selectedItems: string | Array<string>) {
    this.setState({dark: selectedItems as Array<string>});
  }

  public handleInfoChange(selectedItems: string | Array<string>) {
    this.setState({info: selectedItems as Array<string>});
  }

  public handleSuccessChange(selectedItems: string | Array<string>) {
    this.setState({success: selectedItems as Array<string>});
  }

  public handleWarningChange(selectedItems: string | Array<string>) {
    this.setState({warning: selectedItems as Array<string>});
  }

  public handleErrorChange(selectedItems: string | Array<string>) {
    this.setState({error: selectedItems as Array<string>});
  }

  public handleCrimsonChange(selectedItems: string | Array<string>) {
    this.setState({crimson: selectedItems as Array<string>});
  }

  public handleRgbChange(selectedItems: string | Array<string>) {
    this.setState({rgb: selectedItems as Array<string>});
  }

  public handleRgbaChange(selectedItems: string | Array<string>) {
    this.setState({rgba: selectedItems as Array<string>});
  }

  public handleHexChange(selectedItems: string | Array<string>) {
    this.setState({hex: selectedItems as Array<string>});
  }

  public handleCustomChange(selectedItems: string | Array<string>) {
    this.setState({custom: selectedItems as Array<string>});
  }

  public render() {
    return (
      <DemoBlock title='Colors'>
        
        <Block flex={1} row style={styles.grid}>
          <CheckList material label='Label' color="default" value={this.state.default} onValueChange={this.handleDefaultChange}>
            <Check value='default' label='default' />
            <Check value='default1' label='default' />
            <Check value='default2' label='default' />
          </CheckList>

          <CheckList material label='Label' color="primary" value={this.state.primary} onValueChange={this.handlePrimaryChange}>
            <Check value='primary' label='primary' />
            <Check value='primary1' label='primary' />
            <Check value='primary2' label='primary' />
          </CheckList>
        </Block>

        <Block flex={1} row style={styles.grid}>
          <CheckList material label='Label' color="secondary" value={this.state.secondary} onValueChange={this.handleSecondaryChange}>
            <Check value='secondary' label='secondary' />
            <Check value='secondary1' label='secondary' />
            <Check value='secondary2' label='secondary' />
          </CheckList>

          <CheckList material label='Label' color="light" value={this.state.light} onValueChange={this.handelLightChange}>
            <Check value='light' label='light' />
            <Check value='light1' label='light' />
            <Check value='light2' label='light' />
          </CheckList>
        </Block>

        <Block flex={1} row style={styles.grid}>
          <CheckList material label='Label' color='dark' value={this.state.dark} onValueChange={this.handleDarkChange}>
            <Check value='dark' label='dark' />
            <Check value='dark1' label='dark' />
            <Check value='dark2' label='dark' />
          </CheckList>
          
          <CheckList material label='Label' color='info' value={this.state.info} onValueChange={this.handleInfoChange}>
            <Check value='info' label='info' />
            <Check value='info1' label='info' />
            <Check value='info2' label='info' />
          </CheckList>
        </Block>

        <Block flex={1} row style={styles.grid}>
          <CheckList material label='Label' color="success" value={this.state.success} onValueChange={this.handleSuccessChange}>
            <Check value='success' label='success' />
            <Check value='success1' label='success' />
            <Check value='success2' label='success' />
          </CheckList>
          
          <CheckList material label='Label' color="warning" value={this.state.warning} onValueChange={this.handleWarningChange}>
            <Check value='warning' label='warning' />
            <Check value='warning1' label='warning' />
            <Check value='warning2' label='warning' />
          </CheckList>
        </Block>

        <Block flex={1} row style={styles.grid}>
          <CheckList material label='Label' color="error" value={this.state.error} onValueChange={this.handleErrorChange}>
            <Check value='error' label='error' />
            <Check value='error1' label='error' />
            <Check value='error2' label='error' />
          </CheckList>
          
          <CheckList material label='Label' color="crimson" value={this.state.crimson} onValueChange={this.handleCrimsonChange}>
            <Check value='crimson' label='crimson' />
            <Check value='crimson1' label='crimson' />
            <Check value='crimson2' label='crimson' />
          </CheckList>
        </Block>

        <Block flex={1} row style={styles.grid}>
          <CheckList material label='Label' color="rgb(237, 20, 61)" value={this.state.rgb} onValueChange={this.handleRgbChange}>
            <Check value='rgb' label='rgb(237, 20, 61)' />
            <Check value='rgb1' label='rgb(237, 20, 61)' />
            <Check value='rgb2' label='rgb(237, 20, 61)' />
          </CheckList>
          
          <CheckList material label='Label' color="#ed143d" value={this.state.hex} onValueChange={this.handleHexChange}>
            <Check value='hex' label='#ed143d' />
            <Check value='hex1' label='#ed143d' />
            <Check value='hex2' label='#ed143d' />
          </CheckList>
        </Block>

        <Block flex={1} row gap={DEMO_COMPONENT_GAP}>
          <CheckList material label='Label' color="rgba(237, 20, 61, 0.5)" value={this.state.rgba} onValueChange={this.handleRgbaChange}>
            <Check value='rgba' label='rgba(237, 20, 61, 0.5)' />
            <Check value='rgba1' label='rgba(237, 20, 61, 0.5)' />
            <Check value='rgba2' label='rgba(237, 20, 61, 0.5)' />
          </CheckList>

          <CheckList material label='Label' color="rgba(237, 20, 61, 0.5)" value={this.state.custom} onValueChange={this.handleCustomChange}>
            <Check value='custom' label='primary' color='primary' />
            <Check value='custom1' label='info' color='info' />
            <Check value='custom2' label='success' color='success' />
          </CheckList>
        </Block>

      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    gap: DEMO_COMPONENT_GAP,
    marginBottom: DEMO_COMPONENT_GAP
  }
});