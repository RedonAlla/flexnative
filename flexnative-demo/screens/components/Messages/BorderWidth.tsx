import React from "react";
import Message from "@flexnative/messages";
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import { messageTemplate } from "./utilities";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Width'>
        <Block row gap={DEMO_COMPONENT_GAP}>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Message color='primary' borderWidth='none' text={messageTemplate('`none`')}/>
            <Message color='primary' borderWidth='hairline' text={messageTemplate('`hairline`')} />
            <Message color='primary' borderWidth='thin' text={messageTemplate('`thin`')}  />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Message color='primary' borderWidth='base' text={messageTemplate('`base`')} />
            <Message color='primary' borderWidth='thick' text={messageTemplate('`thick`')} />
            <Message color='primary' borderWidth={5} text={messageTemplate('5')} />
          </Block>
          
        </Block>
      </DemoBlock>
    );
  }
}