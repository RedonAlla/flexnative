/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-28 19:37:05
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-20 12:56:06
 * @ Description: Bottom sheets show secondary content anchored to the bottom of the screen.
 */

import React from 'react';
import {
  View,
  Modal,
  Animated,
  PanResponder,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { BlurTint } from 'expo-blur';

import ThemeContext from '@flexnative/theme-context';

import createStyleSheet from './style';
import { BottomSheetProps, BottomSheetStateProps, SUPPORTED_ORIENTATIONS } from './types';
import { Background } from './overlay';


const getMasKMode = (isDark: boolean, mode?: BlurTint): BlurTint => {
  return Boolean(mode)
    ? mode!
    : isDark
      ? 'dark'
      : 'light';
}

class BottomSheet extends React.PureComponent<BottomSheetProps, BottomSheetStateProps> {
  private panResponder: any;
  static defaultProps: BottomSheetProps;
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  constructor(props: BottomSheetProps) {
    super(props);
    this.state = {
      modalVisible: false,
      animatedHeight: new Animated.Value(0),
      pan: new Animated.ValueXY()
    };

    this.createPanResponder(props);
  }

  setModalVisible(visible: boolean) {
    const { height, minClosingHeight, openDuration, closeDuration, onClose, onOpen } = this.props;
    const { animatedHeight, pan } = this.state;
    if (visible) {
      this.setState({ modalVisible: visible });

      if (typeof onOpen === 'function')
        onOpen();

      Animated.timing(animatedHeight, {
        useNativeDriver: false,
        toValue: height,
        duration: openDuration
      }).start();
    } else {
      Animated.timing(animatedHeight, {
        useNativeDriver: false,
        toValue: minClosingHeight,
        duration: closeDuration
      }).start(() => {
        pan.setValue({ x: 0, y: 0 });
        this.setState({
          modalVisible: visible,
          animatedHeight: new Animated.Value(0)
        });

        if (typeof onClose === 'function')
          onClose();
      });
    }
  }

  createPanResponder(props: BottomSheetProps) {
    const { closeOnDragDown, height } = props;
    const { pan } = this.state;
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => closeOnDragDown,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          Animated.event([null, { dy: pan.y }], { useNativeDriver: false })(e, gestureState);
        }
      },
      onPanResponderRelease: (_e, gestureState) => {
        if (height / 4 - gestureState.dy < 0) {
          this.setModalVisible(false);
        } else {
          Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
        }
      }
    });
  }

  open() {
    this.setModalVisible(true);
  }

  close() {
    this.setModalVisible(false);
  }

  onRequestClose = () => {
    if (this.props.closeOnPressBack)
      this.setModalVisible(false);
  }

  closeOnPressMask = () => {
    if (this.props.closeOnPressMask)
      this.close();
  }

  render() {
    const {
      animationType,
      closeOnDragDown,
      dragFromTopOnly,
      children,
      behavior,
      wrapperStyle,
      containerStyle,
      draggableIconStyle,
      keyboardAvoidingViewEnabled,
      maskMode
    } = this.props;
    const { animatedHeight, pan, modalVisible } = this.state;

    const styles = createStyleSheet(this.context.colors);

    return (
      <Modal
        transparent
        animationType={animationType}
        visible={modalVisible}
        supportedOrientations={SUPPORTED_ORIENTATIONS}
        onRequestClose={this.onRequestClose}
      >
        <KeyboardAvoidingView
          behavior={behavior}
          enabled={keyboardAvoidingViewEnabled}
          style={[styles.wrapper, wrapperStyle]}
        >
          <Background maskMode={getMasKMode(this.context.colorScheme === 'dark', maskMode)!} onPress={this.closeOnPressMask} />
          <Animated.View
            {...(!dragFromTopOnly && this.panResponder.panHandlers)}
            style={[styles.container, { transform: pan.getTranslateTransform() }, { height: animatedHeight }, containerStyle]}
          >
            {closeOnDragDown && (
              <View style={styles.draggableContainer} {...(dragFromTopOnly && this.panResponder.panHandlers)} >
                <View style={[styles.draggableIcon, draggableIconStyle]} />
              </View>
            )}
            {children}
          </Animated.View>
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}

BottomSheet.defaultProps = {
  animationType: 'fade',
  height: 260,
  minClosingHeight: 0,
  openDuration: 300,
  closeDuration: 200,
  closeOnDragDown: false,
  dragFromTopOnly: false,
  closeOnPressMask: true,
  closeOnPressBack: true,
  behavior: 'padding',
  keyboardAvoidingViewEnabled: Platform.OS === 'ios',
  children: <View />
};

export default BottomSheet;