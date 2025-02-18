import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
  /**
   * This function retrieves an item from local storage using a specified key.
   * 
   * If the item is not found, it returns a default value.
   * In case of an error during the retrieval process, it logs the error and also returns the default value.
   * 
   * @template T - The type of the value to retrieve from storage.
   * @param key - The key witch the item it is stored.
   * @param defaultValue - The default value to return if the value it is not found on the storage.
   * @returns { Promise<T> } - A promise that resolves when the operation is complete.
   */
  static getItem = async <T>(key: string, defaultValue: T): Promise<T> => {
    try {
      const result = await AsyncStorage.getItem(key);

      if(result === null)
        return defaultValue;

      return JSON.parse(result) as T;
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  }

  /**
   * This function retrieves an item of type string from local storage using a specified key.
   * 
   * If the value is not found, it returns a default value.
   * In case of an error during the retrieval process, it logs the error and also returns the default value.
   * 
   * @param key - The key witch the item it is stored.
   * @param defaultValue - The default value to return if the value it is not found on the storage.
   * @returns { Promise<T> } - A promise that resolves when the operation is complete.
   */
  static getString = async (key: string, defaultValue: string): Promise<string> => {
    try {
      const result = await AsyncStorage.getItem(key);

      if(result === null)
        return defaultValue;

      return result;
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  }

  /**
   * Static method to asynchronously save an item of type T to AsyncStorage.
   * 
   * @template T - The type of the value to retrieve from storage.
   * @param { string } key - The key of the item to set.
   * @param { T } value - The value of the item to set.
   * @returns { Promise<boolean> } - A promise that resolves when the operation is complete.
   */
  static saveItem = async <T>(key: string, value: T): Promise<boolean> => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  /**
   * Static method to asynchronously save an string in to Storage.
   * 
   * @param { string } key - The key of the item to set.
   * @param { string } value - The value of the item to set.
   * @returns { Promise<boolean> } - A promise that resolves when the operation is complete.
   */
  static saveString = async (key: string, value: string): Promise<boolean> => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  /**
   * Static method to asynchronously delete an item from Storage.
   * 
   * @param { string } key - The key of the item to remove from storage.
   * @returns { Promise<boolean> } - A promise that resolves when the operation is complete.
   */
  static deleteItem = async (key: string): Promise<boolean> => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}