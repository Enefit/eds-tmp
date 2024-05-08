import React from 'react';
import type { HeadingProps } from '../Typography/types';
export interface StepProps {
    index: number;
    title: string;
    description?: string;
    children?: React.ReactNode;
    inverted?: boolean;
    titleAs?: HeadingProps['as'];
}
declare const Step: ({ index, title, description, children, inverted, titleAs, }: StepProps) => React.JSX.Element;
export default Step;
