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
                iconLeft='star'
                loading={this.state.isLoading}
                onPress={this.setLoading}
        />
        <Button color='primary'
                radius='full'
                iconLeft='star'
                loading={this.state.isLoading}
                onPress={this.setLoading}
        />
        <Button text='text'
                color='primary'
                type='text'
                loading={this.state.isLoading}
                onPress={this.setLoading}
        />
        <Button text='ghost'
                color='primary'
                type='ghost'
                loading={this.state.isLoading}
                onPress={this.setLoading}
        />
        <Button color='primary'
                iconRight='star'
                loading={this.state.isLoading}
                onPress={this.setLoading}
        />
        <Button color='primary'
                radius='full'
                iconLeft='star'
                text='Left icon'
                loading={this.state.isLoading}
                onPress={this.setLoading}
        />
        <Button color='primary'
                radius='full'
                iconRight='star'
                text='Right icon'
                loading={this.state.isLoading}
                onPress={this.setLoading}
        />
        <Button color='primary'
                radius='full'
                iconRight='star'
                loading={this.state.isLoading}
                onPress={this.setLoading}
        />

        <Button text='link'
                  color='primary'
                  type='link'
                  loading={this.state.isLoading}
                  onPress={this.setLoading}
          />
          <Button text='inverse'
                  color='primary'
                  type='inverse'
                  loading={this.state.isLoading}
                  onPress={this.setLoading}
          />
          <Button text='default'
                  color='primary'
                  loading={this.state.isLoading}
                  renderLoading={<Spinner name="spinner"/>}
                  onPress={this.setLoading}
          />
      </div>
    );
  }
}