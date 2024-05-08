import React from 'react';
import { AriaDatePickerProps } from 'react-aria';
import { DateValue } from '@react-types/calendar';
import { DescriptionSeverity } from '../types';
export interface DatePickerProps extends AriaDatePickerProps<DateValue> {
    errorMessage?: string;
    descriptionSeverity?: DescriptionSeverity;
    labelSuffix?: string;
    tooltipTrigger?: React.ReactNode;
}
declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLDivElement>>;
export default DatePicker;
