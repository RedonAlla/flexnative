import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// highlight-next-line
import Button from '@flexnative/buttons';
import Icon from '@flexnative/icons';

export default class extends React.PureComponent<{}> {
  render() {
    return (
      <div className='example-block'>
        <Button color='primary' text='Custom Loader'>
          <View style={styles.row}>
            <Icon name='star' size={22} />
            <Text style={styles.text}>Custom Children Render</Text>
          </View>
        </Button>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    columnGap: 10,
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 12,
    fontFamily: 'Bold',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center'
  }
});