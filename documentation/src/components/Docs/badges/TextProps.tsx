import React from 'react';
import { Alert, Platform } from 'react-native';

// highlight-next-line
import Badge from '@flexnative/badges';
import Button from '@flexnative/buttons';


export default class extends React.PureComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.openAlert = this.openAlert.bind(this);
  }

  openAlert = () => {
    if (Platform.OS === 'web') {
      alert("Badge clicked...")
    } else {
        Alert.alert("Badge", "Badge clicked...")
    }
  }

  render() {
    return (
      <div className='example-block'>
        <Badge text='10' type='default' color='primary' onPress={this.openAlert} allowFontScaling={true}>
          <Button text="default"/>
        </Badge>
      </div>
    );
  }
}