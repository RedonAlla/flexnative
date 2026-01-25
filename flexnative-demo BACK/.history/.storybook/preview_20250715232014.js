import { useEffect } from 'react';
import { addParameters, addDecorator } from '@storybook/react-native';
import { SafeAreaView } from 'react-native';

addParameters({
  layout: 'fullscreen',
});

const CenterDecorator = (storyFn) => (
  <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    {storyFn()}
  </SafeAreaView>
);

addDecorator(CenterDecorator);