import React from 'react';
import Chat from '../packages/navigation/screens/Chat';
import ModalScreen from '../packages/navigation/screens/ModalScreen';
import { withFancyDrawer } from '../packages/navigation/src/with-fancy-drawer';

function App() {
  return (
    <ModalScreen />
  );
}

export default withFancyDrawer(App);