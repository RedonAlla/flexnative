import React from 'react';
import { Animated, Text, FlatList, ListRenderItem, Platform, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import { IconName, icons } from '@flexnative/icons';
import { useThemeContext } from '@flexnative/theme-context';

import { HEADER_HEIGHT, PADDING } from '@/constants/sizes';
import componentsList from '@/constants/components-screens';
import { WEB_MAX_SCREEN_WIDTH } from '@/components/app/constants';


const ICON_SIZE = 42;
const ANIMATION_DURATION = 300;
const COLUMN_NUMBER = Platform.OS === 'web' ? 4 : 2;

interface ItemProps {
  href: string;
  title: string;
  icon: keyof IconName;
}

const animation = (toValue: number) => ({
  toValue: toValue,
  duration: ANIMATION_DURATION,
  useNativeDriver: false //TODO
});

export default class extends React.Component<{}, {}> {
  public render() {
    return (
      <FlatList contentContainerStyle={styles.container}
                data={componentsList}
                numColumns={COLUMN_NUMBER}
                renderItem={(item) => <ListItem {...item} />}
                keyExtractor={(item, index) => index.toString()}/>
    )
  }
}


const ListItem: ListRenderItem<ItemProps> = ({ item }) => {
  const zoomAnim = React.useRef(new Animated.Value(1)).current;
  const theme = useThemeContext();

  const zoomIn = (): void => 
    Animated.timing(zoomAnim, animation(1.3)).start();

  const zoomOut = (): void =>
    Animated.timing(zoomAnim, animation(1)).start();

  return (
    <Link href={item.href} asChild  style={[styles.linkContainer, {backgroundColor: theme.colors.card}]}>
      <Pressable onPressIn={zoomIn} onPressOut={zoomOut} >
        <Animated.Text style={[styles.icon, { color: theme?.colors?.text }, { transform: [{scale: zoomAnim}] }]}>
          {icons[item.icon]}
        </Animated.Text>
        <Text style={[styles.title, { color: theme?.colors?.text }]}>
          {item.title}
        </Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: WEB_MAX_SCREEN_WIDTH,
    display: 'flex',
    paddingHorizontal: PADDING,
    backgroundColor: 'transparent',
    paddingVertical: HEADER_HEIGHT,
    marginHorizontal: "auto"
  },
  linkContainer: {
    flex: 1,
    margin: 6,
    borderRadius: 10,
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: ICON_SIZE,
    fontFamily: 'Icons'
  },
  title: {
    paddingTop: 6,
    fontFamily: 'Italic',
    fontSize: 13
  }
});