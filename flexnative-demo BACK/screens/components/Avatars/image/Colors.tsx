import React from "react";

import Avatar from "@flexnative/avatar";
import { Block } from "@flexnative/layout";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";
import { LOGO_PATH } from "../constants";


export default class Colors extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Colors'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          <Avatar source={LOGO_PATH} color='primary'/>
          <Avatar source={LOGO_PATH} color='secondary'/>
          <Avatar source={LOGO_PATH} color='success'/>
          <Avatar source={LOGO_PATH} color='info'/>
          <Avatar source={LOGO_PATH} color='warning' />
          <Avatar source={LOGO_PATH} color='error'/>
          <Avatar source={LOGO_PATH} color='default'/>
          <Avatar source={LOGO_PATH} color='dark'/>
          <Avatar source={LOGO_PATH} color='light'/>

          <Avatar source={LOGO_PATH} color='crimson'/>
          <Avatar source={LOGO_PATH} color='#ed143d'/>
          <Avatar source={LOGO_PATH} color='rgb(237, 20, 61)'/>
          <Avatar source={LOGO_PATH} color='rgba(237, 20, 61, 0.5)'/>
        </Block>
      </DemoBlock>
    );
  }
}