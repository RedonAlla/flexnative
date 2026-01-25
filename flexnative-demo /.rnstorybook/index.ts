import AsyncStorage from '@react-native-async-storage/async-storage';
import { view } from './storybook.requires';
import { lightTheme, darkTheme } from './theme';


const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
  //theme: darkTheme,
});

export default StorybookUIRoot;
