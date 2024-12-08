import { useNavigationContainerRef } from 'expo-router';

/**
 * @return The root `<NavigationContainer />` ref for the app. The `ref.current` may be `null`
 * if the `<NavigationContainer />` hasn't mounted yet.
 */
//export const navigationRef = useNavigationContainerRef()//createNavigationContainerRef();

/**
 * @return The root `Drawer.screenOptions`.
 * This requires to set the `<NavigationContainer />`
 * if the `<NavigationContainer />` hasn't mounted yet
 * or `navigationRef.isReady()` is `false` it returns `undefined`.
 */
export function getOptions(): any | undefined {
  return useNavigationContainerRef().getCurrentOptions();
}