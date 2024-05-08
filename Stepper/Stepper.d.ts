import React, { type OlHTMLAttributes } from 'react';
export interface StepperProps extends OlHTMLAttributes<HTMLOListElement> {
    children: React.ReactNode;
    className?: string;
    currentStepTitle?: string;
    currentStepLabel?: string;
    nextStepTitle?: string;
    nextStepLabel?: string;
}
export declare const Stepper: ({ children, className, currentStepTitle, currentStepLabel, nextStepTitle, nextStepLabel, ...props }: StepperProps) => React.JSX.Element;
