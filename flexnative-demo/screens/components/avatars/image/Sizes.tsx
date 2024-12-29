import React from "react";

import Avatar from '@flexnative/avatar';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";
import { LOGO_PATH } from "../constants";


export default class Sizes extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          <Avatar source={LOGO_PATH} size='small' />
          <Avatar source={LOGO_PATH} size='medium' />
          <Avatar source={LOGO_PATH} size='large' />
          <Avatar source={LOGO_PATH} size={120} />
        </Block>
      </DemoBlock>
    );
  }
}