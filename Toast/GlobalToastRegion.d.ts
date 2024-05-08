import React from 'react';
import { AriaToastRegionProps } from '@react-aria/toast';
import { ToastQueue } from '@react-stately/toast';
import type { RegionPosition, ToastSettings } from './types';
export interface GlobalToastRegionProps<T extends ToastSettings = ToastSettings> extends AriaToastRegionProps {
    queue: ToastQueue<T>;
    className?: string;
    position?: RegionPosition;
}
declare const GlobalToastRegion: <T extends ToastSettings = ToastSettings>({ queue, className, position, ...props }: GlobalToastRegionProps<T>) => React.ReactPortal | null;
export default GlobalToastRegion;
