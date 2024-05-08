import React, { ReactNode } from 'react';
import { AriaCheckboxGroupProps } from 'react-aria';
import { CheckboxGroupState } from 'react-stately';
export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, 'errorMessage'> {
    children: ReactNode;
    errorMessage?: string;
    labelSuffix?: string;
    tooltipTrigger?: React.ReactNode;
}
export declare const CheckboxGroupContext: React.Context<CheckboxGroupState | null>;
declare const CheckboxGroup: (props: CheckboxGroupProps) => React.JSX.Element;
export default CheckboxGroup;
