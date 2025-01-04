import React from "react";
import Message from "@flexnative/messages";
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import { messageTemplate } from "./utilities";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Color'>
        <Block row gap={DEMO_COMPONENT_GAP}>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Message borderColor='crimson' borderWidth='hairline' text={messageTemplate('`crimson`')}  />
            <Message borderColor={'#ed143d'} borderWidth='hairline' text={messageTemplate('#ed143d')} />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Message borderColor={'rgb(237, 20, 61)'} borderWidth='hairline' text={messageTemplate('rgb(237, 20, 61)')}/>
            <Message borderColor={'rgba(237, 20, 61, 0.5)'} borderWidth='hairline' text={messageTemplate('rgba(237, 20, 61, 0.5)')} />
          </Block>
          
        </Block>
      </DemoBlock>
    );
  }
}
