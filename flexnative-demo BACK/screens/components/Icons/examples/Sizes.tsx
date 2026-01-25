/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-16 23:47:03
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-17 00:07:42
 * @ Description: Example use case of `Icon´ component with custom sizes.
 */

import React from "react";

import Icon from "@flexnative/icons";
import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Block row justifyContent='space-between' alignItems='center'>
          <Icon name='star' />
          <Icon name='star' size={16} />
          <Icon name='star' size={18} />
          <Icon name='star' size={24} />
          <Icon name='star' size={32} />
          <Icon name='star' size={64} />
        </Block>
      </DemoBlock>
    );
  }
}