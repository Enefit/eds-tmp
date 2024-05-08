export type Variant = 'success' | 'notice' | 'error';
export interface ToastSettings {
    title: string;
    description?: string;
    variant?: Variant;
    className?: string;
}
export type RegionPosition = 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
