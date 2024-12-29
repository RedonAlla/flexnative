import React from "react";

import Button from '@flexnative/buttons';
import Block from "@flexnative/layout/dist/block";

import DemoBlock from "@/components/common/DemoBlock";
import GhostTypeMessage from "@/components/common/Demo/GhostTypeMessage";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Types'>
        <Block gap={DEMO_COMPONENT_GAP} style={{marginBottom: DEMO_COMPONENT_GAP * 2}}>

          <Block row gap={DEMO_COMPONENT_GAP}>

            <Block flex={1} gap={DEMO_COMPONENT_GAP}>
              <Button text='text' color='primary' type='text' />
              <Button text='ghost' color='primary' type='ghost' />
            </Block>

            <Block flex={1} gap={DEMO_COMPONENT_GAP}>
              <Button text='link' color='primary' type='link' />
              <Button text='inverse' color='primary' type='inverse' />
            </Block>

          </Block>

          <Block flex={1} rowGap={DEMO_COMPONENT_GAP}>
            <Button text='default' color='primary' />
          </Block>

        </Block>

        <GhostTypeMessage />
      </DemoBlock>
    );
  }
}