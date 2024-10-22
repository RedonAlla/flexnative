import React from 'react';

// highlight-next-line
import Button from '@flexnative/buttons';
import { Spinner } from '@flexnative/icons';

type State = {
  isLoading: boolean;
}

export default class extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isLoading: false
    }
    
    this.setLoading = this.setLoading.bind(this);
  }

  private setLoading() {
    this.setState({isLoading: true});
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 2000);
  }

  render() {
    return (
      <div className='example-block'>
        <Button color='primary'
                radius='full'
                iconRight='star'
                loading={this.state.isLoading}
                onPress={this.setLoading}
                renderLoading={<Spinner name="star" />}
        />
        
        <Button color='primary'
                text='Custom Loader'
                onPress={this.setLoading}
                loading={this.state.isLoading}
                renderLoading={<Spinner name="star" />} />
      </div>
    );
  }
}