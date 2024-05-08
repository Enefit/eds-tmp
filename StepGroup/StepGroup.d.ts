import React from 'react';
export interface StepGroupProps extends Omit<React.HTMLAttributes<HTMLUListElement>, 'className'> {
    children: React.ReactNode;
}
declare const StepGroup: ({ children, ...listProps }: StepGroupProps) => React.JSX.Element;
export default StepGroup;
