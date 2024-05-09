import React from 'react';
import { AriaRadioProps } from 'react-aria';
export interface RadioButtonProps extends AriaRadioProps {
    className?: string;
    gaName?: string;
}
declare const RadioButton: React.ForwardRefExoticComponent<RadioButtonProps & React.RefAttributes<HTMLInputElement>>;
export default RadioButton;
