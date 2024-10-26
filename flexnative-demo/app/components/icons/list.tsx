import React from 'react';
import { StyleSheet, View, Text, ColorValue, ListRenderItem, FlatList, Platform } from 'react-native';

import Icon, { IconName, icons } from '@flexnative/icons';
import ThemeContext from '@flexnative/theme-context';
import { formatData } from '@flexnative/utilities';

import { WEB_MAX_SCREEN_WIDTH } from '@/components/app/constants';
import { HEADER_HEIGHT, PADDING, TAB_NAV_HEIGHT } from '@/constants/sizes';


type IconItemProps = {
  icon?: keyof IconName | '',
  color: ColorValue;
  backgroundColor: ColorValue;
}

const ICON_SIZE = 32;
const COLUMN_NUMBER = Platform.OS === 'web' ? 5 : 2;

export default class extends React.PureComponent<{}, {}> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;
  
  public render() {
    const data = Object.keys(icons).map(icon => ({
      icon: icon!,
      color: this.context.colors.text,
      backgroundColor: this.context.colors.card
    })) as IconItemProps[];

    return (
      <FlatList contentContainerStyle={styles.contentStyle}
                data={formatData(data, COLUMN_NUMBER, '')}
                numColumns={COLUMN_NUMBER}
                renderItem={IconItem}
                keyExtractor={(item, index) => index.toString()}/>
    )
  }
}

const IconItem: ListRenderItem<IconItemProps> = ({ item }) => {
  if(item!.icon === '')
    return <View style={[styles.emptyItem]} />

  return (
    <View style={[styles.itemContent, { backgroundColor: item.backgroundColor}]}>
      <Icon name={item.icon!} size={ICON_SIZE} color={item.color}/>
      <Text style={[styles.text, {color: item.color}]}>{item.icon}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contentStyle: {
    width: '100%',
    marginHorizontal: "auto",
    paddingTop: HEADER_HEIGHT,
    paddingBottom: TAB_NAV_HEIGHT,
    paddingHorizontal: PADDING,
    backgroundColor: 'transparent',
    maxWidth: WEB_MAX_SCREEN_WIDTH,
  },
  itemContent: {
    margin: 6,
    padding: 16,
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyItem: {
    flex: 1,
    margin: 8,
    backgroundColor: 'transparent',
  },
  text: {
    paddingTop: 13,
    fontFamily: 'Italic',
    fontSize: 13
  }
});