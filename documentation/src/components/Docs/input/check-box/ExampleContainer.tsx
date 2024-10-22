/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-12 23:28:27
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:28:20
 * @ Description: Example Container component demos of Check component.
 */

import React from "react";
  
type StateProps = {
  items: Array<boolean>;
}


export default class extends React.Component<{}, StateProps> {
  constructor(props: {}) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(index: number) {
    const items = this.state.items;
    items[index] = !items[index]
    this.setState({ items });
  }
}