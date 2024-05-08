import React from 'react';
import type { DateFieldState, DateSegment } from 'react-stately';
type DateSegmentProps = {
    segment: DateSegment;
    state: DateFieldState;
    isHovered: boolean;
    isFocused: boolean;
};
declare const DateSegment: ({ segment, state, isFocused, isHovered, }: DateSegmentProps) => React.JSX.Element;
export default DateSegment;
