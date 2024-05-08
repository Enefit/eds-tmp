import React, { ReactNode } from 'react';
import { AriaToastRegionProps } from '@react-aria/toast';
import { ToastState } from '@react-stately/toast';
import type { RegionPosition, ToastSettings } from './types';
export interface ToastProviderProps<T extends ToastSettings = ToastSettings> extends AriaToastRegionProps {
    className?: string;
    maxVisibleToasts?: number;
    hasExitAnimation?: boolean;
    position?: RegionPosition;
    children: (state: ToastState<T>) => ReactNode;
}
declare const ToastProvider: <T extends ToastSettings = ToastSettings>({ className, maxVisibleToasts, hasExitAnimation, position, children, ...props }: ToastProviderProps<T>) => React.JSX.Element;
export default ToastProvider;
