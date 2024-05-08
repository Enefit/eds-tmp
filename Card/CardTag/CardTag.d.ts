import React from 'react';
import { ButtonProps } from '../../Button';
export interface CardTagProps {
    className?: string;
    children: React.ReactNode;
}
export declare const CardTag: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
