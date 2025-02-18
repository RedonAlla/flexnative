/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-11-21 22:34:36
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-02-18 22:41:36
 * @ Description:
 */

/**
 * This function generates a somewhat unique alphanumeric string every time it is called.
 */
export default (): string => Math.random().toString(36).substring(6);