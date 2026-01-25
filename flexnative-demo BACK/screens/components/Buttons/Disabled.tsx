import React from "react";

import Button from '@flexnative/buttons';
import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Disabled'>
        <Block gap={DEMO_COMPONENT_GAP} style={{marginBottom: DEMO_COMPONENT_GAP * 2}}>

          <Block row gap={DEMO_COMPONENT_GAP}>

            <Block flex={1} gap={DEMO_COMPONENT_GAP}>
              <Button disabled text='text' color='primary' type='text' />
              <Button disabled text='ghost' color='primary' type='ghost' />
            </Block>

            <Block flex={1} gap={DEMO_COMPONENT_GAP}>
              <Button disabled text='link' color='primary' type='link' />
              <Button disabled text='inverse' color='primary' type='inverse' />
            </Block>

          </Block>

          <Block flex={1} rowGap={DEMO_COMPONENT_GAP}>
            <Button disabled text='default' color='primary' />
          </Block>

        </Block>
      </DemoBlock>
    );
  }
}