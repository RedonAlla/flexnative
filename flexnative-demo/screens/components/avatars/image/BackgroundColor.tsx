import React from "react";

import Avatar from '@flexnative/avatar';
import { Block } from "@flexnative/layout";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";
import { LOGO_PATH } from "../constants";


export default class BackgroundColor extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Background Color'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          <Avatar source={LOGO_PATH} backgroundColor='crimson'/>
          <Avatar source={LOGO_PATH} backgroundColor='#ed143d'/>
          <Avatar source={LOGO_PATH} backgroundColor='rgb(237, 20, 61)'/>
          <Avatar source={LOGO_PATH} backgroundColor='rgba(237, 20, 61, 0.5)'/>
        </Block>
      </DemoBlock>
    );
  }
}