import React from 'react';
import type { AriaToastProps } from '@react-aria/toast';
import type { QueuedToast, ToastState } from '@react-stately/toast';
import type { ToastSettings } from './types';
interface ToastProps<T> extends AriaToastProps<T> {
    state: ToastState<T>;
    toast: QueuedToast<T>;
}
declare const Toast: <T extends ToastSettings>({ state, ...props }: ToastProps<T>) => React.JSX.Element;
export default Toast;
