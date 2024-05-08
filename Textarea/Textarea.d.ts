import React from 'react';
import { AriaTextFieldProps } from 'react-aria';
import type { DescriptionSeverity } from '../types';
export interface TextareaProps extends Omit<AriaTextFieldProps, 'errorMessage'> {
    errorMessage?: string;
    descriptionSeverity?: DescriptionSeverity;
    labelSuffix?: string;
    tooltipTrigger?: React.ReactNode;
    rows?: number;
    title?: string;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
