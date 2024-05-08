import React, { ReactNode } from 'react';
export interface SkipToContentProps {
    className?: string;
    children?: ReactNode;
    targetId: string;
    ariaLabel?: string;
    gaName?: string;
}
declare const SkipToContent: ({ className, children, targetId, ariaLabel, }: SkipToContentProps) => React.JSX.Element;
export default SkipToContent;
