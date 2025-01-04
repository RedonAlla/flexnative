import React from "react";
import Message from "@flexnative/messages";
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import { messageTemplate } from "./utilities";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Block row gap={DEMO_COMPONENT_GAP}>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Message color='info' text={messageTemplate('`default`')}/>
            <Message color='info' size='small' text={messageTemplate('`small`')} />
            <Message color='info' size='medium' text={messageTemplate('`medium`')}  />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Message color='info' size='large' text={messageTemplate('`large`')} />
            <Message color='info' size={5} text={messageTemplate('5')} />
          </Block>
          
        </Block>
      </DemoBlock>
    );
  }
}