import React from "react";

import Button from '@flexnative/buttons';
import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Icon'>
        <Block gap={DEMO_COMPONENT_GAP} style={{marginBottom: DEMO_COMPONENT_GAP * 2}}>

          <Block row gap={DEMO_COMPONENT_GAP}>

            <Block flex={1} gap={DEMO_COMPONENT_GAP}>
              <Block row gap={DEMO_COMPONENT_GAP} justifyContent="space-between">
                <Button color='primary' iconLeft='star' />
                <Button color='primary' radius='full' iconLeft='star' />
              </Block>

              <Button text='default' color='primary' iconLeft='star' />
              <Button text='Custom colors' color='primary' iconLeft={{name: 'star', color: '#072541', activeColor: '#FFAE10'}} size='large' />
            </Block>

            <Block flex={1} gap={DEMO_COMPONENT_GAP}>
              <Block row gap={DEMO_COMPONENT_GAP} justifyContent="space-between">
                <Button color='primary' iconRight='star' />
                <Button color='primary' radius='full' iconRight='star' />
              </Block>

              <Button text='default' color='primary' iconRight='star' />
              <Button text='Custom colors' color='primary' iconRight={{name: 'star', color: '#072541', activeColor: '#FFAE10'}} size='large' />
            </Block>

          </Block>

        </Block>
      </DemoBlock>
    );
  }
}