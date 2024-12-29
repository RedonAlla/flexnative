/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-12 22:46:13
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-19 00:47:06
 * @ Description: This code provides a structured and type-safe way to manage component routes and associated icons within a project that leverages TypeScript's capabilities.
 */

import { IconName } from "@flexnative/icons";

/**
 * This code provides a structured and type-safe way to manage component routes and associated icons within a project that leverages TypeScript's capabilities.
 */
export default [
  {
    href: '/components/buttons',
    title: 'Buttons',
    icon: 'button' as keyof IconName
  },
  {
    href: '/components/text-boxes',
    title: 'Text Box',
    icon: 'text-box' as keyof IconName
  },
  {
    href: '/components/number-text-boxes',
    title: 'Number Text Boxes',
    icon: 'number-input' as keyof IconName
  },
  {
    href: '/components/check-boxes',
    title: 'Check Boxes',
    icon: 'checkbox' as keyof IconName
  },
  {
    href: '/components/check-list',
    title: 'Check List',
    icon: 'check-list' as keyof IconName
  },
  {
    href: '/components/avatar',
    title: 'Avatar',
    icon: 'avatar' as keyof IconName
  },
  {
    href: '/components/tags',
    title: 'Tags',
    icon: 'label' as keyof IconName
  },
  {
    href: '/components/badges',
    title: 'Badges',
    icon: 'badge' as keyof IconName
  },
  {
    href: '/components/icons',
    title: 'Icons',
    icon: 'star' as keyof IconName
  },
  {
    href: '/components/spinner',
    title: 'Spinner',
    icon: 'spinner' as keyof IconName
  },
  {
    href: '/components/bottom-sheet',
    title: 'Bottom Sheet',
    icon: 'popup' as keyof IconName
  },
  {
    href: '/components/skeleton-loader',
    title: 'Skeleton Loader',
    icon: 'text-block' as keyof IconName
  }
];