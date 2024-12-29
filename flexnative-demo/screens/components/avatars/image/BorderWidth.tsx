import React from "react";

import Avatar from '@flexnative/avatar';
import { Block } from "@flexnative/layout";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";
import { LOGO_PATH } from "../constants";


export default class BorderWidth extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Width'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          <Avatar source={LOGO_PATH} color='primary' fillMode='ghost' borderWidth='none'/>
          <Avatar source={LOGO_PATH} color='primary' fillMode='ghost' borderWidth='hairline'/>
          <Avatar source={LOGO_PATH} color='primary' fillMode='ghost' borderWidth='thin'/>
          <Avatar source={LOGO_PATH} color='primary' fillMode='ghost' borderWidth='base'/>
          <Avatar source={LOGO_PATH} color='primary' fillMode='ghost' borderWidth='thick'/>
          <Avatar source={LOGO_PATH} color='primary' fillMode='ghost' borderWidth={2}/>
        </Block>
      </DemoBlock>
    );
  }
}