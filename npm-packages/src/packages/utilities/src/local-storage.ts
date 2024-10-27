import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
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

  static saveItem = async <T>(key: string, value: T): Promise<boolean> => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static saveString = async (key: string, value: string): Promise<boolean> => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

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