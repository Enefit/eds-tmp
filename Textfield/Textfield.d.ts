import React from 'react';
import { AriaTextFieldProps } from 'react-aria';
import type { DescriptionSeverity } from '../types';
export interface TextfieldProps extends Omit<AriaTextFieldProps, 'errorMessage'> {
    inputStart?: React.ReactNode;
    inputEnd?: React.ReactNode;
    errorMessage?: string;
    descriptionSeverity?: DescriptionSeverity;
    labelSuffix?: string;
    tooltipTrigger?: React.ReactNode;
    showPasswordToggle?: boolean;
    passwordToggleAriaLabel?: string;
    title?: string;
    linkTitle?: string;
    linkUrl?: string;
}
export declare const Textfield: React.ForwardRefExoticComponent<TextfieldProps & React.RefAttributes<HTMLInputElement>>;
export default Textfield;
