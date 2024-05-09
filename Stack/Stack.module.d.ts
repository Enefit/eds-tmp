import React from 'react';
interface StackProps {
    direction?: {
        xsmall?: 'row' | 'column';
        small?: 'row' | 'column';
        medium?: 'row' | 'column';
        large?: 'row' | 'column';
    };
    gap?: {
        xsmall?: number;
        small?: number;
        medium?: number;
        large?: number;
    };
    children: React.ReactNode;
}
export declare const StackModule: React.FC<StackProps>;
export {};
