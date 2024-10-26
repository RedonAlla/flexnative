import React from 'react';
import { View, StyleSheet, Pressable, ColorValue } from 'react-native';
import Icon from '@flexnative/icons';

import { DARK_OVERLAY, IPrimaryColors, LIGHT_OVERLAY } from '@/constants/colors';
import FalsyComponent from '@/components/atoms/FalsyComponent';

const ICON_SIZE = 42;
const WRAPPER_SIZE = 70;

type PrimaryColorsProps = {
  key: keyof IPrimaryColors;
  value: string;
}

type OverlayProps = {
  isDark: boolean;
}

interface ColorItemProps {
  isDark: boolean;
  isSelected: boolean;
  item: PrimaryColorsProps;
  onSelect: (theme: keyof IPrimaryColors) => void;
}

export default (props: ColorItemProps) => {
  return (
    <Pressable style={[styles.container, { borderColor: props.isSelected ? props.item.value : 'transparent' }]}
               onPress={() => props.onSelect(props.item.key)}>
      {({ pressed }) => (
        <>
          <FalsyComponent style={[ styles.overlay, overlayColor(props.isDark) ]} component={pressed ? <View /> : undefined} />
          <View style={[styles.itemColor, { backgroundColor: props.item.value }]}>
            <FalsyComponent component={props.isSelected ? <Icon size={ICON_SIZE} name='check' color='white' /> : undefined} />
          </View>
        </>
      )}
    </Pressable>
  );
}

const overlayColor = (isDark: boolean): {backgroundColor: ColorValue} =>
  ({ backgroundColor: isDark ? LIGHT_OVERLAY : DARK_OVERLAY })


const styles = StyleSheet.create({
  overlay: {
    opacity: 0.12,
  },
  container: {
    margin: 8,
    padding: 4,
    borderRadius: 38,
    width: WRAPPER_SIZE,
    height: WRAPPER_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 2,
    backgroundColor: 'transparent'
  },
  itemColor: {
    width: '100%',
    height: '100%',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WRAPPER_SIZE / 2,
  }
});