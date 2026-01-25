import React from "react";


type ExampleStateProps = {
  items: Array<boolean>;
}


/**
 * ExampleContainer component that manages a list of CheckBoxes and handles their state changes.
 * 
 * @extends {React.Component<{}, ExampleStateProps>}
 * 
 * @state {Array<boolean>} items - An array representing the state of each Check Box.
 * 
 * @method handleChange - Toggles the state of an item at a given index.
 * @param {number} index - The index of the item to toggle.
 * 
 * @method render - Renders the component.
 */
export default class extends React.Component<{}, ExampleStateProps> {
  constructor(props: {}) {
    super(props);

    this.state = {
      items: []
    }
    
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(index: number) {
    const items = this.state.items;
    items[index] = !items[index]
    this.setState({ items });
  }

  public render() {
    return (
      <>
      </>
    );
  }
}