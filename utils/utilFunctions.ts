import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { GestureResponderEvent, ToastAndroid } from 'react-native';

type CustomDebounceProps = ((event: GestureResponderEvent | number) => void)

export enum Storage {
    FAVOURITE = 'favourite'
}
/*
Function To create debounce functionality
I will use it to optimize diffrent parts of the application and make the quotes more efficient
* */
export const customDebounce = (fn: Function, timer: number): CustomDebounceProps => {
    if (typeof fn !== 'function') return
    let timeoutID: NodeJS.Timeout;
    return (...args: unknown[]) => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            fn(...args);
        }, timer);
    };
};

export const getRandomID = (): string | number[] => uuid.v4();

export const SaveToLocalStorage = (key: string, value: string) => {
    try {
        AsyncStorage.setItem(key, value)
    }
    catch (error) {
        console.error(error)
    }
}

export const showToast = (message: string) => ToastAndroid.show(message, ToastAndroid.SHORT);