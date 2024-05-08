import React from 'react';
export interface CardHeaderProps {
    title: string;
    className?: string;
    date?: string;
    children?: React.ReactNode;
}
export declare const CardHeader: React.FC<CardHeaderProps>;
