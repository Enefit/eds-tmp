import React, { ReactElement, ReactNode } from 'react';
import { type AriaModalOverlayProps } from 'react-aria';
import { type OverlayTriggerProps } from 'react-stately';
import { ButtonProps } from '../Button/Button';
export interface ModalTriggerProps extends Omit<ButtonProps, 'children'>, OverlayTriggerProps, AriaModalOverlayProps {
    label?: ReactNode;
    children: (close: () => void) => ReactElement;
    customTrigger?: boolean;
}
declare const ModalTrigger: ({ label, children, customTrigger, ...props }: ModalTriggerProps) => React.JSX.Element;
export default ModalTrigger;
