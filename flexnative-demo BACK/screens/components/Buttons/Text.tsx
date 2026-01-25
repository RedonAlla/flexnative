import React from "react";

import Button from '@flexnative/buttons';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Text'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} style={{width: '100%'}} >

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Button text='default' color='primary' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Button color='primary' text={{value: 'Custom colors', color: '#072541', activeColor: '#FFCD4B'}} />
          </Block>
          
        </Block>
      </DemoBlock>
    );
  }
}