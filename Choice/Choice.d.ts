import React, { ReactNode } from 'react';
import { AriaRadioProps } from 'react-aria';
export interface ChoiceProps extends AriaRadioProps {
    children?: ReactNode;
    label: string;
    description?: string;
    choiceType?: 'simple' | 'complex';
    layout?: 'row' | 'column';
}
declare const Choice: React.ForwardRefExoticComponent<ChoiceProps & React.RefAttributes<HTMLInputElement>>;
export default Choice;
