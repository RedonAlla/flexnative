import React from 'react';

// highlight-next-line
import Button from '@flexnative/buttons';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Button text='none' color='primary' radius='none'/>
        <Button text='medium' color='primary' radius='medium'/>
        <Button text='full radius' color='primary' radius='full'/>
        <Button text='small' color='primary' radius='small'/>
        <Button text='large' color='primary' radius='large' />
        <Button text='12' color='primary' radius={12} />
      </div>
    );
  }
}