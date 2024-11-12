/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-28 19:37:05
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-12 22:30:40
 * @ Description: Bottom Sheet props.
 */

import { BlurTint } from 'expo-blur';
import { StyleProp, ViewStyle } from 'react-native';


/*Props for the BottomSheet component.*/
export type BottomSheetProps = {
  /**
   * Animation type when BottomSheet it is open.
   * 
   * @default 'fade'
   */
  animationType: 'none' | 'slide' | 'fade';

  /**
   * BottomSheet height.
   * 
   * @default 260
   */
  height: number;

  /**
   * Min height value to close the BottomSheet when drag down. 
   * minClosingHeight has effect only when closeOnDragDown it is true.
   * 
   * @default 0
  */
  minClosingHeight: number;

  /**
   * Animation duration on open ButtonSheet.
   */
  openDuration: number;

  /**
   * Animation duration on close ButtonSheet.
   * 
   * @default 200
   */
  closeDuration: number;

  /**
   * Boolean value indicating whether to close or not the BottomSheet on OnDragDown.
   * 
   * @default false
   */
  closeOnDragDown: boolean;

  /**
   * Boolean value indicating whether to close or not the BottomSheet on OnPressMask (background overlay).
   * 
   * @default true
   */
  closeOnPressMask: boolean;

  /**
   * Boolean value indicating whether to Drag FromTopOnly.
   * 
   * @default false
   */
  dragFromTopOnly: boolean;

  /**
   * Boolean value indicating whether to close or not the BottomSheet on background overlay.
   * 
   * @default true
   */
  closeOnPressBack: boolean;

  /**
   * A tint mode which will be applied to background overlay.
   * 
   * @default isDark ? `dark` : `light`
   */
  maskMode?: BlurTint;


  /**
   * behavior for KeyboardAvoidingView.
   * 
   * @default 'padding'
   */
  behavior?: "height" | "padding" | "position";

  /**
   * Enables or disables the KeyboardAvoidingView.
   *
   * Default is true of iOS
   */
  keyboardAvoidingViewEnabled: boolean;

  /**
   * function to call on close event.
   * 
   * @returns 
   */
  onClose?: () => void;

  /**
   * function to call on onOpen event.
   * 
   * @returns 
   */
  onOpen?: () => void;

  /**
   * React.ReactNode to render on BottomSheet.
   */
  children: React.ReactNode;

  /**
   * ViewStyle to apply on BottomSheet wrapper.
   */
  wrapperStyle?: StyleProp<ViewStyle> | undefined;

  /**
   * ViewStyle to apply on BottomSheet container.
   */
  containerStyle?: StyleProp<ViewStyle> | undefined;

  /**
   * ViewStyle to apply on draggable icon.
   */
  draggableIconStyle?: StyleProp<ViewStyle> | undefined;
}

export type BottomSheetStateProps = {
  modalVisible: boolean;
  animatedHeight: any;
  pan: any;
}

/**
 * An array of supported screen orientations for the application.
 * 
 * The supported orientations include:
 * - 'portrait': The device is in a portrait orientation with the home button at the bottom.
 * - 'portrait-upside-down': The device is in a portrait orientation with the home button at the top.
 * - 'landscape': The device is in a landscape orientation with the home button on the right.
 * - 'landscape-left': The device is in a landscape orientation with the home button on the left.
 * - 'landscape-right': The device is in a landscape orientation with the home button on the right.
 */
export const SUPPORTED_ORIENTATIONS: Array<'portrait' | 'portrait-upside-down' | 'landscape' | 'landscape-left' | 'landscape-right'>
  = [
    'portrait',
    'portrait-upside-down',
    'landscape',
    'landscape-left',
    'landscape-right'
  ];
