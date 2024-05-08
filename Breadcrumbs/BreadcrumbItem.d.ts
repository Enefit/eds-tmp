import React from 'react';
import { AriaBreadcrumbItemProps } from 'react-aria';
export interface BreadcrumbItemProps extends AriaBreadcrumbItemProps {
    className?: string;
    href?: string;
    gaName?: string;
}
declare const BreadcrumbItem: React.ForwardRefExoticComponent<BreadcrumbItemProps & React.RefAttributes<HTMLAnchorElement>>;
export default BreadcrumbItem;
