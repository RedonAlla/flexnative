import React from 'react';
import { StyleSheet, Pressable, View, Text, Switch, ColorValue, FlatList } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import { MY_PRIMARY_COLOR } from './constants';
import ThemeContext, { BaseColors, BaseTheme, defaultTheme } from '@flexnative/theme-context';
import PostIcon from '../../components/icons/Post';
import CustomThemeProvider from './custom-theme-provider';

const ICON_SIZE = 42;
const WRAPPER_SIZE = 70;

type MyColorsKeys = keyof typeof MY_PRIMARY_COLOR;

type ColorItemProps = {
  color: MyColorsKeys
  overlay: ColorValue;
  isSelected: boolean;
  currentTheme: string;
  onSelect: (theme: MyColorsKeys) => void;
}

export default class TestThemeChange extends React.Component {
  render() {
    return (
      <CustomThemeProvider theme={defaultTheme()}>
        <ThemeChange />
      </CustomThemeProvider>
    );
  }
}

const ColorItem = (props: ColorItemProps) => {
  const itemColor = MY_PRIMARY_COLOR[props.color];
  return (
    <Pressable style={[styles.colorItemContainer, { borderColor: props.isSelected ? itemColor : 'transparent' }]}
               onPress={() => props.onSelect(props.color)}>
      {({ pressed }) => (
        <>
          { pressed && <View style={{ opacity: 0.12, backgroundColor: props.overlay }} /> }
          <View style={[styles.itemColor, { backgroundColor: itemColor }]}>
            { props.isSelected && <AntDesign name="check" size={ICON_SIZE} color="white" /> }
          </View>
        </>
      )}
    </Pressable>
  );
}

class ThemeChange extends React.PureComponent<{}, {currentTheme: ColorValue}> {

  constructor(props: {}) {
    super(props);
    this.state = {
      currentTheme: MY_PRIMARY_COLOR.red
    }
  }

  public render() {
    console.log('currentTheme: ', this.state.currentTheme);
    return (
      <ThemeContext.Consumer>
        {value =>
          <View style={[styles.container, { backgroundColor: value.colors.background }]}>
            <PostIcon
              viewBox='0 0 586 390'
              width={'100%'}
              height={390}
              text={value.colors.text}
              primary={value.colors.primary}
              borders={value.colors.secondary}
              background={value.colors.card} />

            <Switch
              style={styles.switch}
              trackColor={{false: value.colors.secondary, true: value.colors.secondary}}
              thumbColor={value.scheme === 'dark' ? value.colors.light : value.colors.dark}
              value={value.scheme === 'dark'}
              onValueChange={() => value.setColorScheme!(value.scheme === 'dark' ? 'light' : 'dark')}
            />

            <FlatList
              data={Object.keys(MY_PRIMARY_COLOR)}
              horizontal={false}
              numColumns={4}
              renderItem={({item}) => 
                <ColorItem color={item as MyColorsKeys}
                          overlay={value.colors.overlay}
                          currentTheme={this.state.currentTheme as string}
                          isSelected={value.colors.primary === MY_PRIMARY_COLOR[item as MyColorsKeys]}
                          onSelect={() => value.setTheme!(updatePrimaryColor(value, item as MyColorsKeys))}/>
              }
            />
          
          </View>
        }
      </ThemeContext.Consumer>
    );
  }
}

function updatePrimaryColor(theme: BaseTheme<BaseColors>, color: MyColorsKeys) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary: MY_PRIMARY_COLOR[color]
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorItemContainer: {
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
  },
  switch: {
    width: WRAPPER_SIZE,
    height: WRAPPER_SIZE,
    marginVertical: 8
  }
});