import React, { ReactNode } from 'react';
import type { Background } from '../../types';
export interface ComparisonCardDetailsProps {
    label?: string;
    children?: ReactNode;
    background?: Background;
}
export declare const ComparisonCardDetails: React.FC<ComparisonCardDetailsProps>;
