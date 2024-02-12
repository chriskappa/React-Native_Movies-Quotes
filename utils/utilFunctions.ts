
type CustomDebounceProps = ((event: GestureResponderEvent | number) => void)


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
