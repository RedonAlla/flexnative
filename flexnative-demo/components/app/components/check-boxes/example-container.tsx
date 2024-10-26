import React from "react";
import { StyleSheet, View } from "react-native";

import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "../../constants";


type Props = {
  title: string;
  shouldRender: boolean;
  children: React.ReactNode | React.ReactElement;
}

type ExampleStateProps = {
  items: Array<boolean>;
}


export default class extends React.Component<{}, ExampleStateProps> {
  constructor(props: Props) {
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
      <></>
    );
  }
}

export class ExampleContainer extends React.Component<Props, {}> {
  public render() {
    return (
      <DemoBlock title={this.props.title} contentStyle={styles.block}>
        { this.props.shouldRender && this.props.children }
      </DemoBlock>
    );
  }
}

export class Block extends React.Component<{direction: 'row' | 'column', children: React.ReactNode }, {}> {
  public render() {
    return (
      <View style={[styles.block, {flexDirection: this.props.direction}]}>
        { this.props.children }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  block: {
    rowGap: GAP,
    columnGap: GAP,
    width: '100%',
    height: 'auto',
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
  }
});