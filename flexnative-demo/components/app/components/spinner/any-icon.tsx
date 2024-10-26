import React from "react";
import { Spinner } from "@flexnative/icons";
import DemoBlock from "@/components/app/DemoBlock";


const ICON_SIZE = 32;

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Any Icon'>
        <Spinner name='sun' size={ICON_SIZE} />
        <Spinner name='star' size={ICON_SIZE} />
        <Spinner name='moon' size={ICON_SIZE} />
        <Spinner name='trash' size={ICON_SIZE} />
        <Spinner name='grid' size={ICON_SIZE} />
        <Spinner name='file-excel' size={ICON_SIZE} />
      </DemoBlock>
    );
  }
}