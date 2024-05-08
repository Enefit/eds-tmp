import React, { Dispatch, ReactNode, SetStateAction } from 'react';
export interface AccordionGroupProps {
    mode?: 'single' | 'multiple';
    selectedKeys?: string[];
    children: ReactNode;
    className?: string;
}
export interface AccordionGroupState {
    mode: AccordionGroupProps['mode'];
    selectedKeys: AccordionGroupProps['selectedKeys'];
    setSelectedKeys: Dispatch<SetStateAction<string[]>>;
}
export declare const AccordionContext: React.Context<AccordionGroupState | null>;
declare const AccordionGroup: (props: AccordionGroupProps) => React.JSX.Element;
export default AccordionGroup;
