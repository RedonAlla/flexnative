/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-12 23:52:35
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:27:17
 * @ Description: Examples of Check component in disabled state.
 */

import React from "react";
import ExampleContainer from "./ExampleContainer";

// highlight-next-line
import { Check } from '@flexnative/inputs';


const items: Array<boolean> = [
  false,
  false,
  false,
  false,
  false,
  false
];

export default class extends ExampleContainer {
  constructor(props: {}) {
    super(props);

    this.state = {
      items: items
    }
  }

  public render() {
    return (
      <div className='example-block'>
        <Check value={true} type='outlined' label='outlined' disabled />
        <Check value={false} type='outlined' label='outlined' disabled />
        
        <Check value={true} type='solid' label='solid' disabled />
        <Check value={false} type='solid' label='solid' disabled />

        <Check value={true} type='inverse' label='inverse' disabled />
        <Check value={false} type='inverse' label='inverse' disabled />
      </div>
    );
  }
}