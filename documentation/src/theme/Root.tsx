import React from 'react';
import { IconProvider, createIconSetFromIcoMoon } from '@flexnative/icons';
import selection from '../../static/fonts/icons-selection.json'; 

const icons = createIconSetFromIcoMoon(selection);

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <IconProvider icons={icons}>
      {children}
    </IconProvider>
  );
}