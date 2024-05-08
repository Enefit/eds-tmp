import React from 'react';
import type { AriaToastRegionProps } from '@react-aria/toast';
import type { ToastState } from '@react-stately/toast';
import type { RegionPosition, ToastSettings } from './types';
interface ToastRegionProps<T> extends AriaToastRegionProps {
    className?: string;
    state: ToastState<T>;
    position: RegionPosition;
}
declare const ToastRegion: <T extends ToastSettings>({ className, state, position, ...props }: ToastRegionProps<T>) => React.JSX.Element;
export default ToastRegion;
