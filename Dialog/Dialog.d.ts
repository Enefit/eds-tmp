import React, { ReactNode } from 'react';
import { AriaDialogProps } from 'react-aria';
export interface DialogProps extends AriaDialogProps {
    className?: string;
    children: ReactNode;
}
declare const Dialog: ({ children, className, ...props }: DialogProps) => React.JSX.Element;
export default Dialog;
