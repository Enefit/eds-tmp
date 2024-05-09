import React from 'react';
import type { DateFieldState, DateSegment } from 'react-stately';
type DateSegmentProps = {
    segment: DateSegment;
    state: DateFieldState;
};
declare const DateSegmentButton: ({ segment, state }: DateSegmentProps) => React.JSX.Element;
export default DateSegmentButton;
