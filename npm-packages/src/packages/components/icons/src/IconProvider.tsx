import React, { createContext, useContext, useMemo } from 'react';
import { IconContextValue, IconProviderProps } from './types';


export const IconContext = createContext<IconContextValue | undefined>(undefined);

/**
 * `IconProvider` acts as the central store for your application's icon set.
 * It uses the React Context API to make icons available to all child components
 * without the need for prop drilling.
 *
 * You must wrap your application (or the part of the tree that uses icons) with this provider
 * and pass your generated icon configuration to the `icons` prop.
 *
 * @component
 * @example
 * ```tsx
 * import { IconProvider } from '@flexnative/icons';
 * import config from './path/to/selection.json';
 * import createIconSetFromIcoMoon from '@flexnative/icons/dist/utilities';
 *
 * const icons = createIconSetFromIcoMoon(config);
 *
 * function App() {
 *   return (
 *     <IconProvider icons={icons}>
 *       <YourAppComponents />
 *     </IconProvider>
 *   );
 * }
 * ```
 * @param {IconProviderProps} props - The component props.
 */
export const IconProvider: React.FC<IconProviderProps> = ({ 
  children, 
  icons
}) => {
  const value = useMemo(() => ({ icons }), [icons]);

  return (
    <IconContext.Provider value={value}>
      {children}
    </IconContext.Provider>
  );
};

/**
 * A custom hook to retrieve the definition of a specific icon by its name.
 * This hook must be used within a component that is a descendant of `IconProvider`.
 *
 * @param {string} name - The name of the icon to retrieve.
 * @returns {object} The icon definition object (paths, viewBox, etc.) from the configuration.
 * @throws {Error} If used outside of an `IconProvider`.
 *
 * @example
 * ```tsx
 * const iconData = useIcon('home');
 * ```
 */
export function useIcon(name: string) {
  const context = useContext(IconContext);
  
  if (!context) {
    throw new Error('useIcon must be used within an IconProvider');
  }

  return context.icons![name];
}