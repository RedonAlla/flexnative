import React from "react";

import Avatar from '@flexnative/avatar';
import { Block } from "@flexnative/layout";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";
import { LOGO_PATH } from "../constants";


export default class Radius extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Radius'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          <Avatar source={LOGO_PATH} radius='none' />
          <Avatar source={LOGO_PATH} radius='small' />
          <Avatar source={LOGO_PATH} radius='medium' />
          <Avatar source={LOGO_PATH} radius='large' />
          <Avatar source={LOGO_PATH} radius='full' />
          <Avatar source={LOGO_PATH} radius={15} />
        </Block>
      </DemoBlock>
    );
  }
}