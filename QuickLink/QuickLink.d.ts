import React from 'react';
import { AriaLinkOptions } from 'react-aria';
export interface QuickLinkProps extends AriaLinkOptions {
    title: string;
    description: string;
    href?: string;
    target?: string;
    className?: string;
}
export declare const QuickLink: React.ForwardRefExoticComponent<QuickLinkProps & React.RefAttributes<HTMLAnchorElement>>;
