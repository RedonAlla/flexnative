import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { HEADER_HEIGHT, PADDING, TAB_NAV_HEIGHT } from '@/constants/sizes';
import { WEB_MAX_SCREEN_WIDTH } from '@/components/app/constants';
import {
  DemoCheckListValue,
  DemoCheckListType,
  DemoCheckListColor,
  DemoCheckListBorderColor,
  DemoCheckListBorderWidth,
  DemoCheckListBackgroundColor,
  DemoCheckListHelperText,
  DemoCheckListLabel,
  DemoCheckListLabelStyle,
  DemoCheckListCustomItems,
  DemoCheckListRadio,
  DemoCheckListValueField,
  DemoCheckListSizes,
  DemoDisabled,
  DemoDirection
} from '@/components/app/components/check-list/default';


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <DemoCheckListCustomItems />
        <DemoCheckListValue />
        <DemoCheckListValueField />
        <DemoCheckListRadio />
        <DemoCheckListType />
        <DemoCheckListSizes />
        <DemoDisabled />
        <DemoDirection />
        <DemoCheckListBorderWidth />
        <DemoCheckListBorderColor />
        <DemoCheckListBackgroundColor />
        <DemoCheckListHelperText />
        <DemoCheckListColor />
        <DemoCheckListLabel />
        <DemoCheckListLabelStyle />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  content: {
    width: '100%',
    marginHorizontal: "auto",
    paddingTop: HEADER_HEIGHT,
    paddingBottom: TAB_NAV_HEIGHT,
    paddingHorizontal: PADDING,
    backgroundColor: 'transparent',
    maxWidth: WEB_MAX_SCREEN_WIDTH,
  },
});