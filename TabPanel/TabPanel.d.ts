import React, { ReactNode } from 'react';
export interface TabPanelProps {
    id: string;
    children: ReactNode;
}
declare const TabPanel: ({ id, children }: TabPanelProps) => React.JSX.Element;
export default TabPanel;
