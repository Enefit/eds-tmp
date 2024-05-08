import React, { ReactNode } from 'react';
import { AriaCheckboxProps } from 'react-aria';
export interface ChoiceToggleProps extends AriaCheckboxProps {
    children?: ReactNode;
    label: string;
    description?: string;
    layout?: 'row' | 'column';
}
declare const ChoiceToggle: React.ForwardRefExoticComponent<ChoiceToggleProps & React.RefAttributes<HTMLInputElement>>;
export default ChoiceToggle;
