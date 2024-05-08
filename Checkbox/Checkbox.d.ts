import React from 'react';
import { AriaCheckboxProps } from 'react-aria';
export interface CheckboxProps extends AriaCheckboxProps {
    value?: string;
    description?: string;
    errorMessage?: string;
    children: React.ReactNode;
    descriptionSeverity?: 'regular' | 'warning';
    suffix?: string;
    linkTitle?: string;
    linkUrl?: string;
    infoHint?: React.ReactNode;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
