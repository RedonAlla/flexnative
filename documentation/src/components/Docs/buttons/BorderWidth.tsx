import React from 'react';

// highlight-next-line
import Button from '@flexnative/buttons';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Button text='none (default)' color='primary' type='text' borderWidth='none' />
        <Button text='hairline' color='primary' type='text' borderWidth='hairline' />
        <Button text='thin' color='primary' type='text' borderWidth='thin' />
        <Button text='3' color='primary' type='text' borderWidth={3}/>
        <Button text='thin' color='primary' type='text' borderWidth='thin' />
        <Button text='base' color='primary' type='text' borderWidth='base' />
        <Button text='thick' color='primary' type='text' borderWidth='thick' />
        <Button text='5' color='primary' type='text' borderWidth={5} />
      </div>
    );
  }
}