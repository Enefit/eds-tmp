import React from 'react';
import { AriaSwitchProps } from 'react-aria';
import { DescriptionSeverity } from '../types';
export interface SwitchProps extends AriaSwitchProps {
    description?: string;
    descriptionSeverity?: DescriptionSeverity;
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export default Switch;
