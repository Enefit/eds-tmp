import React, { LiHTMLAttributes, ReactNode } from 'react';
export interface ProcessStepProps extends LiHTMLAttributes<HTMLLIElement> {
    children: ReactNode;
    status: 'current' | 'upcoming' | 'complete';
}
export declare const ProcessStep: ({ children, status, className, ...props }: ProcessStepProps) => React.JSX.Element;
