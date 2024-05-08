import React from 'react';
import { type AriaButtonProps } from 'react-aria';
export interface CustomTriggerProps extends AriaButtonProps {
    className?: string;
}
declare const CustomTrigger: (props: CustomTriggerProps) => React.JSX.Element;
export default CustomTrigger;
