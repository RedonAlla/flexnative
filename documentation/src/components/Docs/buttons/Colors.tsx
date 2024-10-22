import React from 'react';

// highlight-next-line
import Button from '@flexnative/buttons';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Button text='primary' color='primary'/>
        <Button text='info' color='info'/>
        <Button text='warning' color='warning'/>
        <Button text='default' color='default'/>
        <Button text='secondary' color='secondary'/>
        <Button text='success' color='success'/>
        <Button text='error' color='error'/>
        <Button text='light' color='light'/>
        <Button text='dark' color='dark'/>

        <Button text='crimson' color='crimson'/>
        <Button text='#ed143d' color='#ed143d'/>
        <Button text='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
        <Button text='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}