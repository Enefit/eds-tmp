import React, { ReactElement } from 'react';
import { AriaBreadcrumbsProps } from 'react-aria';
export interface BreadcrumbsProps extends AriaBreadcrumbsProps {
    className?: string;
    children: ReactElement | ReactElement[];
}
declare const Breadcrumbs: (props: BreadcrumbsProps) => React.JSX.Element;
export default Breadcrumbs;
