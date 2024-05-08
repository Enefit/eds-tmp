import React, { ReactNode } from 'react';
import { AriaLinkOptions } from 'react-aria';
export interface LinkProps extends AriaLinkOptions {
    className?: string;
    children?: ReactNode;
    href?: string;
    target?: string;
}
declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
export default Link;
