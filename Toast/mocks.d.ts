import type { QueuedToast, ToastOptions, ToastState } from '@react-stately/toast';
import type { RegionPosition, ToastSettings, Variant } from './types';
export declare const variants: Variant[];
export declare const regionPositions: RegionPosition[];
export declare const toastConfig: ToastSettings;
export declare const toastOptions: ToastOptions;
export declare const toast: QueuedToast<ToastSettings>;
export declare const state: ToastState<ToastSettings>;
