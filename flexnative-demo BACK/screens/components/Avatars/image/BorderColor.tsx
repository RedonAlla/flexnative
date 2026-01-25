import React from "react";

import Avatar from '@flexnative/avatar';
import { Block } from "@flexnative/layout";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";
import { LOGO_PATH } from "../constants";


export default class BorderColor extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Color'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP}>
          <Avatar source={LOGO_PATH} color='primary' borderWidth='thin' fillMode='ghost' borderColor='crimson'/>
          <Avatar source={LOGO_PATH} color='primary' borderWidth='thin' fillMode='ghost' borderColor='#ed143d'/>
          <Avatar source={LOGO_PATH} color='primary' borderWidth='thin' fillMode='ghost' borderColor='rgb(237, 20, 61)'/>
          <Avatar source={LOGO_PATH} color='primary' borderWidth='thin' fillMode='ghost' borderColor='rgba(237, 20, 61, 0.5)'/>
        </Block>
      </DemoBlock>
    );
  }
}