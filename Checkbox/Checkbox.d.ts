import React, { ReactNode } from 'react';
import { AriaCheckboxProps } from 'react-aria';
export interface CheckboxProps extends AriaCheckboxProps {
    value?: string;
    description?: string;
    errorMessage?: string;
    children: ReactNode;
    descriptionSeverity?: 'regular' | 'warning';
    suffix?: string;
    link?: ReactNode;
    infoHint?: ReactNode;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
