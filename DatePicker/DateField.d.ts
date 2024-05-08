import React, { DOMAttributes } from 'react';
import { AriaDateFieldProps } from 'react-aria';
import { DateValue } from '@react-types/calendar';
interface DateFieldProps extends AriaDateFieldProps<DateValue> {
    classname?: string;
    hoverProps: DOMAttributes<HTMLDivElement>;
    focusWithinProps: DOMAttributes<HTMLDivElement>;
    isHovered: boolean;
    isFocused: boolean;
}
declare const DateField: (props: DateFieldProps) => React.JSX.Element;
export default DateField;
