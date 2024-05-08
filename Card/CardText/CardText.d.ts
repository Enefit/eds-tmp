import React from 'react';
import { MarginProps } from '../../types';
export interface CardTextProps {
    className?: string;
    variant?: 'supportive' | 'descriptive';
    text: string;
}
export declare const CardText: React.FC<CardTextProps & MarginProps>;
