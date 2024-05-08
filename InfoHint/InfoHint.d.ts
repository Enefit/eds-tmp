import React, { ReactNode } from 'react';
export interface InfoHintProps {
    children?: ReactNode | ReactNode[];
    inverted?: boolean;
    triggerAriaLabel?: string;
    isNonModal?: boolean;
}
export declare const InfoHint: ({ children, inverted, ...props }: InfoHintProps) => React.JSX.Element;
