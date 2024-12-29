import React from "react";

import Button from '@flexnative/buttons';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Colors'>
        <Block gap={DEMO_COMPONENT_GAP}>

          <Block row gap={DEMO_COMPONENT_GAP}>

            <Block flex={1} gap={DEMO_COMPONENT_GAP}>
              <Button text='primary' color='primary'/>
              <Button text='dark' color='dark'/>
              <Button text='info' color='info'/>
              <Button text='warning' color='warning' />
              <Button text='default' color='default'/>
              <Button text='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
            </Block>

            <Block flex={1} gap={DEMO_COMPONENT_GAP}>
              <Button text='secondary' color='secondary'/>
              <Button text='light' color='light'/>
              <Button text='success' color='success'/>
              <Button text='error' color='error'/>
              <Button text='crimson' color='crimson'/>
              <Button text='#ed143d' color='#ed143d'/>
            </Block>

          </Block>

          <Block flex={1} rowGap={DEMO_COMPONENT_GAP}>
            <Button text='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
          </Block>

        </Block>
      </DemoBlock>
    );
  }
}