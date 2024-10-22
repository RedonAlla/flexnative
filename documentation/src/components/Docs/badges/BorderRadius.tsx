import React from "react";

// highlight-next-line
import Badge from '@flexnative/badges';
import Button from '@flexnative/buttons';


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className='example-block'>
        <Badge text='10' color='primary' radius='none' >
          <Button text="none"/>
        </Badge>
        <Badge text='10' color='primary' radius='small' >
          <Button text="small"/>
        </Badge>
        <Badge text='10' color='primary' radius='medium' >
          <Button text="medium"/>
        </Badge>
        <Badge text='10' color='primary' radius='large' >
          <Button text="large"/>
        </Badge>
        <Badge text='10' color='primary' radius='full' >
          <Button text="full (default)"/>
        </Badge>
        <Badge text='10' color='primary' radius={5} >
          <Button text="5"/>
        </Badge>
      </div>
    );
  }
}