import React from 'react';
import { AriaCalendarCellProps } from 'react-aria';
import { CalendarState } from 'react-stately';
interface CalendarCellProps extends AriaCalendarCellProps {
    state: CalendarState;
    gaName?: string;
}
declare const CalendarCell: ({ state, date }: CalendarCellProps) => React.JSX.Element;
export default CalendarCell;
