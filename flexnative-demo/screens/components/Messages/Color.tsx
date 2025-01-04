import React from "react";
import Message from "@flexnative/messages";
import { Block } from "@flexnative/layout";
import { Color } from "@flexnative/theme-context";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import { frameworkColors } from "@/constants/colors";
import { messageTemplate } from "./utilities";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Color'>
        <Block gap={DEMO_COMPONENT_GAP} style={{ marginBottom: DEMO_COMPONENT_GAP }}>
          {
            frameworkColors.map((color, index) =>
              <Message key={index} text={messageTemplate(color as string)} color={color as Color} />
            )
          }

          <Message text={messageTemplate('crimson')} color={'crimson'} />
          <Message text={messageTemplate('#ed143d')} color={'#ed143d'} />
          <Message text={messageTemplate('rgb(237, 20, 61)')} color={'rgb(237, 20, 61)'} />
          <Message text={messageTemplate('rgba(237, 20, 61, 0.5)')} color={'rgba(237, 20, 61, 0.5)'} />
        </Block>
      </DemoBlock>
    );
  }
}