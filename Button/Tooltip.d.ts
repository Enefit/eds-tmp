import React, { ReactNode } from 'react';
import { type AriaTooltipProps } from 'react-aria';
import type { TooltipTriggerState } from 'react-stately';
interface TooltipProps extends AriaTooltipProps {
    state: TooltipTriggerState;
    children: ReactNode;
}
declare const Tooltip: ({ state, ...props }: TooltipProps) => React.JSX.Element | null;
export default Tooltip;
