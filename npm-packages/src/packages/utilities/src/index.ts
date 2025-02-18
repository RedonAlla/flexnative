/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-11-21 22:34:36
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-02-18 22:36:41
 * @ Description: The provided code is responsible for organizing and re-exporting packages methods. This practice is often used in modular development to streamline and clean up import statements across the codebase.
 */

export {
  formatData
} from './list.utilities';

export * from './list.utilities';
export * from './uid';

export { default as Storage } from './local-storage';