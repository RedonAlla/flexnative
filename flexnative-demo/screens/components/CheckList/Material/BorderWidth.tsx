import React from "react";
import { Check, CheckList } from "@flexnative/inputs";
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


type StateType = {
  none: Array<string>,
  hairline: Array<string>,
  base: Array<string>,
  thin: Array<string>,
  thick: Array<string>,
  number: Array<string>,
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      none: ['none'],
      hairline: ['hairline'],
      base: ['base'],
      thin: ['thin'],
      thick: ['thick'],
      number: ['number'],
    }
    
    this.handleChangeNone = this.handleChangeNone.bind(this);
    this.handleChangeHairline = this.handleChangeHairline.bind(this);
    this.handleChangeBase = this.handleChangeBase.bind(this);
    this.handleChangeThin = this.handleChangeThin.bind(this);
    this.handleChangeThick = this.handleChangeThick.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
  }

  public handleChangeNone(selectedItems: string | Array<string>) {
    this.setState({none: selectedItems as Array<string>});
  }

  public handleChangeHairline(selectedItems: string | Array<string>) {
    this.setState({hairline: selectedItems as Array<string>});
  }

  public handleChangeBase(selectedItems: string | Array<string>) {
    this.setState({base: selectedItems as Array<string>});
  }

  public handleChangeThin(selectedItems: string | Array<string>) {
    this.setState({thin: selectedItems as Array<string>});
  }

  public handleChangeThick(selectedItems: string | Array<string>) {
    this.setState({thick: selectedItems as Array<string>});
  }

  public handleChangeNumber(selectedItems: string | Array<string>) {
    this.setState({number: selectedItems as Array<string>});
  }

  public render() {
    return (
      <DemoBlock title='Border Width'>
        <Block row gap={DEMO_COMPONENT_GAP}>
        
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <CheckList material label='Label' borderWidth="none" value={this.state.none} onValueChange={this.handleChangeNone}>
              <Check value='none' label='none' />
              <Check value='none1' label='none' />
              <Check value='none2' label='none' />
            </CheckList>
            
            <CheckList material label='Label' borderWidth="hairline" value={this.state.hairline} onValueChange={this.handleChangeHairline}>
              <Check value='hairline' label='hairline' />
              <Check value='hairline1' label='hairline' />
              <Check value='hairline2' label='hairline' />
            </CheckList>
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <CheckList material label='Label' borderWidth="thin" value={this.state.thin} onValueChange={this.handleChangeThin}>
              <Check value='thin' label='thin' />
              <Check value='thin1' label='thin' />
              <Check value='thin2' label='thin' />
            </CheckList>
            
            <CheckList material label='Label' borderWidth="base" value={this.state.base} onValueChange={this.handleChangeBase}>
              <Check value='base' label='base' />
              <Check value='base1' label='base' />
              <Check value='base2' label='base' />
            </CheckList>
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <CheckList material label='Label' borderWidth="thick" value={this.state.thick} onValueChange={this.handleChangeThick}>
              <Check value='thick' label='thick' />
              <Check value='thick1' label='thick' />
              <Check value='thick2' label='thick' />
            </CheckList>
            
            <CheckList material label='Label' borderWidth={3} value={this.state.number} onValueChange={this.handleChangeNumber}>
              <Check value='number' label='3' />
              <Check value='number1' label='3' />
              <Check value='number2' label='3' />
            </CheckList>
          </Block>

        </Block>
      </DemoBlock>
    );
  }
}