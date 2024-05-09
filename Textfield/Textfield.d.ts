import React, { ReactNode } from 'react';
import { AriaTextFieldProps } from 'react-aria';
import type { DescriptionSeverity } from '../types';
export interface TextfieldProps extends Omit<AriaTextFieldProps, 'errorMessage'> {
    inputStart?: ReactNode;
    inputEnd?: ReactNode;
    errorMessage?: string;
    descriptionSeverity?: DescriptionSeverity;
    labelSuffix?: string;
    tooltipTrigger?: ReactNode;
    showPasswordToggle?: boolean;
    passwordToggleAriaLabel?: string;
    title?: string;
    link?: ReactNode;
}
export declare const Textfield: React.ForwardRefExoticComponent<TextfieldProps & React.RefAttributes<HTMLInputElement>>;
export default Textfield;
