import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';


type Props = {
  children: React.ReactNode;
  codeExample: string;
}

export default class extends React.PureComponent<Props, {}> {
  render() {
    return (
      <Tabs className='demo-tabs'>
        <TabItem value="preview" label="Preview" default>
          {this.props.children}
        </TabItem>

        <TabItem value="code" label="Code">
          <CodeBlock showLineNumbers={true} language="jsx">{this.props.codeExample}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}