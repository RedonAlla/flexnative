import React from 'react';
import Chat from '../packages/navigation/screens/Chat';
import { withFancyDrawer } from '../packages/navigation/src/with-fancy-drawer';

import MessageText from '../tests/components/messages/border-color';

function App() {
  return (
    // <Chat />
   <MessageText />
  );
}

export default withFancyDrawer(App);