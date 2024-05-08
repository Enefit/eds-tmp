import React from 'react';
import { Background } from '../../types';
export interface PageTitleTextProps {
    background?: Background;
    className?: string;
    text: string;
}
export declare const PageTitleText: React.FC<PageTitleTextProps>;
