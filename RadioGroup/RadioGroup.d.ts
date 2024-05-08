import React, { ReactNode } from 'react';
import { AriaRadioGroupProps } from 'react-aria';
import { RadioGroupState } from 'react-stately';
export interface RadioGroupProps extends Omit<AriaRadioGroupProps, 'errorMessage'> {
    children: ReactNode;
    errorMessage?: string;
    labelSuffix?: string;
    tooltipTrigger?: React.ReactNode;
}
export declare const RadioContext: React.Context<RadioGroupState | null>;
declare const RadioGroup: (props: RadioGroupProps) => React.JSX.Element;
export default RadioGroup;
