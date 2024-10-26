import React from "react";

import { Spinner } from "@flexnative/icons";
import DemoBlock from "@/components/app/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Spinner name='spinner' />
        <Spinner name='spinner' size={16} />
        <Spinner name='spinner' size={18} />
        <Spinner name='spinner' size={24} />
        <Spinner name='spinner' size={32} />
        <Spinner name='spinner' size={64} />
      </DemoBlock>
    );
  }
}