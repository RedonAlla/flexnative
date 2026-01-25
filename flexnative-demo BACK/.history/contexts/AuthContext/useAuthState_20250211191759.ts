/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-02-10 23:37:59
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-02-11 19:17:59
 * @ Description: The following code snippet is a basic hook that persists tokens securely on native with `expo-secure-store` and in local storage on web.
 */

import  { useEffect, useCallback, useReducer } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';


/**
 * Type definition for the useState hook.
 * @template T - The type of the state value.
 */
type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

const isWeb = Platform.OS === 'web';

/**
 * Custom hook to manage asynchronous state.
 * @template T - The type of the state value.
 * @param { [boolean, T | null] } [initialValue=[true, null]] - The initial state value.
 * @returns { UseStateHook<T> } - The state and the state updater function.
 */
function useAsyncState<T>(
  initialValue: [boolean, T | null] = [true, null],
): UseStateHook<T> {
  return useReducer(
    (state: [boolean, T | null], action: T | null = null): [boolean, T | null] => [false, action],
    initialValue
  ) as UseStateHook<T>;
}

/**
 * Asynchronously sets an item in storage.
 * @param { string } key - The key of the item to set.
 * @param { string | null } value - The value of the item to set. If null, the item is removed.
 * @returns { Promise<void> } - A promise that resolves when the operation is complete.
 */
export async function setStorageItemAsync(key: string, value: string | null) {
  if (isWeb) {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      console.error('Local storage is unavailable:', e);
    }
  } else {
    if (value == null) {
      await SecureStore.deleteItemAsync(key);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  }
}

/**
 * Custom hook to manage authentication state.
 * @param { string } key - The key of the authentication state item.
 * @returns { UseStateHook<string> } - The authentication state and the state updater function.
 */
export function useAuthState(key: string): UseStateHook<string> {
  const [state, setState] = useAsyncState<string>();

  useEffect(() => {
    if (isWeb) {
      try {
        if (typeof localStorage !== 'undefined') {
          setState(localStorage.getItem(key));
        }
      } catch (e) {
        console.error('Local storage is unavailable:', e);
      }
    } else {
      SecureStore.getItemAsync(key).then(value => {
        setState(value);
      });
    }
  }, [key]);
  
  const setValue = useCallback(
    (value: string | null) => {
      setState(value);
      setStorageItemAsync(key, value);
    },
    [key]
  );

  return [state, setValue];
}