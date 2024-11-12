/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-28 19:37:05
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-12 22:25:40
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


/**
 * Determines the mask mode based on the provided parameters.
 *
 * @param {boolean} isDark - Indicates if the dark mode is enabled.
 * @param {BlurTint} [mode] - Optional parameter to explicitly set the blur tint mode.
 * @returns {BlurTint} - Returns the blur tint mode. If `mode` is provided, it returns `mode`.
 *                        Otherwise, it returns 'dark' if `isDark` is true, and 'light' if `isDark` is false.
 */
const getMasKMode = (isDark: boolean, mode?: BlurTint): BlurTint => {
  return Boolean(mode)
    ? mode!
    : isDark
      ? 'dark'
      : 'light';
}

/**
 * BottomSheet component provides a customizable modal that slides up from the bottom of the screen.
 * It supports drag-to-close functionality and can be configured with various props.
 *
 * @component
 * @extends React.PureComponent
 * @prop {boolean} modalVisible - Indicates whether the modal is visible.
 * @prop {Animated.Value} animatedHeight - Animated value for the height of the modal.
 * @prop {Animated.ValueXY} pan - Animated value for the pan gesture.
 * @prop {boolean} closeOnDragDown - If true, allows the modal to be closed by dragging down.
 * @prop {boolean} closeOnPressBack - If true, allows the modal to be closed by pressing the back button.
 * @prop {boolean} closeOnPressMask - If true, allows the modal to be closed by pressing the mask.
 * @prop {number} height - Height of the modal.
 * @prop {number} minClosingHeight - Minimum height of the modal when closing.
 * @prop {number} openDuration - Duration of the opening animation.
 * @prop {number} closeDuration - Duration of the closing animation.
 * @prop {function} onClose - Callback function to be called when the modal is closed.
 * @prop {function} onOpen - Callback function to be called when the modal is opened.
 * @prop {string} animationType - Type of animation for the modal.
 * @prop {boolean} dragFromTopOnly - If true, allows dragging only from the top of the modal.
 * @prop {React.ReactNode} children - Content to be rendered inside the modal.
 * @prop {string} behavior - Behavior of the KeyboardAvoidingView.
 * @prop {object} wrapperStyle - Custom styles for the wrapper.
 * @prop {object} containerStyle - Custom styles for the container.
 * @prop {object} draggableIconStyle - Custom styles for the draggable icon.
 * @prop {boolean} keyboardAvoidingViewEnabled - If true, enables the KeyboardAvoidingView.
 * @prop {string} maskMode - Mode of the mask.
 * @prop {object} context - Context from the ThemeContext.
 *
 * @method setModalVisible - Sets the visibility of the modal.
 * @method createPanResponder - Creates the pan responder for drag-to-close functionality.
 * @method open - Opens the modal.
 * @method close - Closes the modal.
 * @method onRequestClose - Handles the request to close the modal.
 * @method closeOnPressMask - Handles the press on the mask to close the modal.
 * @method render - Renders the BottomSheet component.
 */
class BottomSheet extends React.PureComponent<BottomSheetProps, BottomSheetStateProps> {
  /**
   * A PanResponder instance that handles gesture interactions.
   * 
   * @type {any}
   */
  private panResponder: any;
  /**
   * Default properties for the BottomSheet component.
   * These properties will be used if no other values are provided.
   */
  static defaultProps: BottomSheetProps;

  /**
   * Specifies the context type that will be used to access the current theme context.
   * This allows the component to subscribe to the nearest ThemeContext provider.
   * 
   * @type {React.Context<ThemeContextType>}
   */
  static contextType = ThemeContext;

  /**
   * Declares a context variable of the type inferred from the ThemeContext.
   * This is used to provide type safety and autocompletion for the context value.
   */
  declare context: React.ContextType<typeof ThemeContext>;

  constructor(props: BottomSheetProps) {
    super(props);
    this.state = {
      modalVisible: false,
      animatedHeight: new Animated.Value(0),
      pan: new Animated.ValueXY()
    };

    this.createPanResponder({ props });
  }

  /**
   * Sets the visibility of the modal and triggers the appropriate animations.
   * 
   * @param {boolean} visible - Determines whether the modal should be visible or not.
   * 
   * If `visible` is true, the modal will be shown with an animation to the specified height.
   * If `visible` is false, the modal will be hidden with an animation to the minimum closing height.
   * 
   * The function also calls the `onOpen` and `onClose` callbacks if they are provided in the props.
   * 
   * @prop {number} height - The height to which the modal should expand when opened.
   * @prop {number} minClosingHeight - The height to which the modal should shrink when closed.
   * @prop {number} openDuration - The duration of the opening animation.
   * @prop {number} closeDuration - The duration of the closing animation.
   * @prop {Function} onClose - Callback function to be called when the modal is closed.
   * @prop {Function} onOpen - Callback function to be called when the modal is opened.
   * 
   * @state {Animated.Value} animatedHeight - The animated value representing the height of the modal.
   * @state {Animated.ValueXY} pan - The animated value representing the pan gesture state.
   */
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

  /**
   * Creates a PanResponder for handling drag gestures on the bottom sheet.
   *
   * @param {Object} params - The parameters for creating the PanResponder.
   * @param {BottomSheetProps} params.props - The properties of the BottomSheet.
   * @param {boolean} params.props.closeOnDragDown - Determines if the bottom sheet should close when dragged down.
   * @param {number} params.props.height - The height of the bottom sheet.
   *
   * @returns {void}
   */
  createPanResponder({ props }: { props: BottomSheetProps; }) {
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
          <Background maskMode={getMasKMode(this.context.scheme === 'dark', maskMode)!} onPress={this.closeOnPressMask} />
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