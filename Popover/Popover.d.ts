import React, { ReactNode, RefObject } from 'react';
import type { AriaPopoverProps } from 'react-aria';
import { OverlayTriggerState } from 'react-stately';
export interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
    className?: string;
    children: ReactNode;
    state: OverlayTriggerState;
    portalContainer?: Element | null;
    popoverRef?: RefObject<HTMLDivElement>;
}
declare const Popover: ({ state, children, className, portalContainer, ...props }: PopoverProps) => React.JSX.Element;
export default Popover;
