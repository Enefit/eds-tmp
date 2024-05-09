import React, { ReactNode } from 'react';
export interface PopoverTriggerProps {
    children?: ReactNode | ReactNode[];
}
declare const PopoverTrigger: ({ children, ...props }: PopoverTriggerProps) => React.JSX.Element;
export default PopoverTrigger;
