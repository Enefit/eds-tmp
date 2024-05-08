import React, { ReactNode } from 'react';
import { AriaDialogProps } from 'react-aria';
import { ButtonProps } from '../Button/Button';
import type { HeadingProps } from '../Typography/types';
export interface ModalDialogProps extends AriaDialogProps {
    title?: string;
    close?: () => void;
    children: ReactNode;
    footer?: ReactNode;
    className?: string;
    hasInnerScroll?: boolean;
    closeButtonAriaLabel?: string;
    closeButtonTooltipLabel?: ButtonProps['tooltipLabel'];
    titleAs?: HeadingProps['as'];
    titleVariant?: HeadingProps['variant'];
}
declare const ModalDialog: ({ title, close, children, footer, className, hasInnerScroll, closeButtonAriaLabel, closeButtonTooltipLabel, titleAs, titleVariant, ...props }: ModalDialogProps) => React.JSX.Element;
export default ModalDialog;
