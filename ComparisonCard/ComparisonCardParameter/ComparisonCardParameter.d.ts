import React from 'react';
export interface ComparisonCardParameterProps {
    type: string;
    title?: string;
    value?: string;
    infoHint?: React.ReactNode;
}
export declare const ComparisonCardParameter: React.FC<ComparisonCardParameterProps>;
