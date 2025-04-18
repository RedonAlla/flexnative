import React from "react";
import Message from "@flexnative/messages";
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import { messageTemplate } from "./utilities";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Radius'>
        <Block row gap={DEMO_COMPONENT_GAP}>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Message color='primary' radius='none' text={messageTemplate('`none`')}/>
            <Message color='primary' radius='small' text={messageTemplate('`small`')} />
            <Message color='primary' radius='medium' text={messageTemplate('`medium`')}  />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Message color='primary' radius='large' text={messageTemplate('`large`')} />
            <Message color='primary' radius='full' text={messageTemplate('`full`')} />
            <Message color='primary' radius={12} text={messageTemplate('12')} />
          </Block>
          
        </Block>
      </DemoBlock>
    );
  }
}