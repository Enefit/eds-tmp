import React from 'react';
import { AriaSliderProps } from 'react-aria';
import type { DescriptionSeverity } from '../types';
export interface InputSliderProps extends AriaSliderProps {
    description?: string;
    descriptionSeverity?: DescriptionSeverity;
    formatOptions?: Intl.NumberFormatOptions;
    tooltipTrigger?: React.ReactNode;
    scale?: boolean;
    name?: string;
}
declare const InputSlider: (props: InputSliderProps) => React.JSX.Element;
export default InputSlider;
