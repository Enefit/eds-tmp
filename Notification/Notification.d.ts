import React, { ReactNode } from 'react';
import { ButtonProps } from '../Button/Button';
export interface NotificationProps {
    type?: 'full-width' | 'inline';
    severity?: 'notify' | 'alert' | 'warning' | 'success';
    icon?: ReactNode;
    title?: string;
    description?: string;
    close?: boolean;
    closeButtonAriaLabel?: string;
    closeButtonTooltipLabel?: ButtonProps['tooltipLabel'];
    children?: ReactNode;
}
export declare const Notification: ({ type, severity, icon, title, description, close, closeButtonAriaLabel, closeButtonTooltipLabel, children, }: NotificationProps) => React.JSX.Element | null;
