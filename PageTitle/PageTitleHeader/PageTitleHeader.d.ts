import React from 'react';
import { Background } from '../../types';
export interface PageTitleHeaderProps {
    background?: Background;
    className?: string;
    title: string;
}
export declare const PageTitleHeader: React.FC<PageTitleHeaderProps>;
