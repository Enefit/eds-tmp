import React from 'react';
export interface ListProps {
    format: 'ordered' | 'unordered';
    children: React.ReactNode;
    inverted?: boolean;
    className?: string;
}
export declare const List: React.FC<ListProps>;
