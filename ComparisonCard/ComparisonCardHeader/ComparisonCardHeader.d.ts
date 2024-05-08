import React, { ReactNode } from 'react';
import type { Background } from '../../types';
export interface ComparisonCardHeaderProps {
    type: 'product' | 'service';
    icon?: ReactNode;
    overline?: string;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    background?: Background;
}
export declare const ComparisonCardHeader: React.FC<ComparisonCardHeaderProps>;
