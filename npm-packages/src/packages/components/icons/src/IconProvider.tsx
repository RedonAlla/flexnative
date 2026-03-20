import React, { createContext, useContext } from 'react';
import { IconContextValue, IconProviderProps } from './types';


export const IconContext = createContext<IconContextValue | undefined>(undefined);

export const IconProvider: React.FC<IconProviderProps> = ({ 
  children, 
  icons
}) => {

  return (
    <IconContext.Provider value={{ icons }}>
      {children}
    </IconContext.Provider>
  );
};

export function useIcon(name: string) {
  const context = useContext(IconContext);
  
  if (!context) {
    throw new Error('useIcon must be used within an IconProvider');
  }

  return context.icons![name];
}