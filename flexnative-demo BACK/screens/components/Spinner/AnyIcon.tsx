import React from "react";
import { Spinner } from "@flexnative/icons";
import DemoBlock from "@/components/common/DemoBlock";
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";


const ICON_SIZE = 32;

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Any Icon'>
        <Block row gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          <Spinner name='sun' size={ICON_SIZE} />
          <Spinner name='star' size={ICON_SIZE} />
          <Spinner name='moon' size={ICON_SIZE} />
          <Spinner name='trash' size={ICON_SIZE} />
          <Spinner name='grid' size={ICON_SIZE} />
          <Spinner name='file-excel' size={ICON_SIZE} />
        </Block>  
      </DemoBlock>
    );
  }
}