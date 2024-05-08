import React from 'react';
import type { Background } from '../types';
export interface PageTitleProps {
    children: React.ReactNode;
    className?: string;
    background?: Background;
    imageUrl?: string;
}
export declare const PageTitle: ({ children, className, background, imageUrl, ...rest }: PageTitleProps) => React.JSX.Element;
