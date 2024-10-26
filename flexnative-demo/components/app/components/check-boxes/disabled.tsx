import React from "react";

import { Check } from "@flexnative/inputs";
import Example, { ExampleContainer } from "./example-container";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <ExampleContainer title='Disabled' shouldRender={true}>
        <Check value={true} type='outlined' label='outlined' disabled />
        <Check value={false} type='outlined' label='outlined' disabled />
        
        <Check value={true} type='solid' label='solid' disabled />
        <Check value={false} type='solid' label='solid' disabled />

        <Check value={true} type='inverse' label='inverse' disabled />
        <Check value={false} type='inverse' label='inverse' disabled />
      </ExampleContainer>
    );
  }
}