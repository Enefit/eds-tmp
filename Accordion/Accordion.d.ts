import React, { ReactNode } from 'react';
export interface AccordionProps {
    id?: string;
    title: ReactNode;
    isOpen?: boolean;
    children: ReactNode;
    className?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
}
declare const Accordion: (props: AccordionProps) => React.JSX.Element;
export default Accordion;
