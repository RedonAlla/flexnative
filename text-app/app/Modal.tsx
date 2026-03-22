import React from 'react';
import { Text } from 'react-native';
import Icon, { AnimatedIcon, BounceIcon, HeartbeatIcon, IconProvider, Spinner } from '@flexnative/icons';

import config from '../assets/fonts/selection.json';
import createIconSetFromIcoMoon from '../../npm-packages/src/packages/components/icons/dist/utilities';

function App() {
  const icons = createIconSetFromIcoMoon(config);

  console.log('ICONS: ', icons);
  const androidIconCode = 59687;
  const unicodeChar = String.fromCodePoint(androidIconCode);
  
  return (
    // <ModalScreen />
    <IconProvider icons={icons}>
      <Icon name="star" />
      <Spinner name="star" size={180} />

      <Text>TEST</Text>

      <HeartbeatIcon name="star" pulseColor="#ff0000"  size={180}/>
      <BounceIcon name='star' size={180} />

      <AnimatedIcon 
        name="star" 
        animation="heartbeat" 
        color="error" 
        duration={1200} 
         size={180}
      />

    </IconProvider>
  );
}

export default App;