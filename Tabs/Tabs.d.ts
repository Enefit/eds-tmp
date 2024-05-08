import React from 'react';
import { TabProps } from '../Tab/Tab';
export interface TabsProps {
    children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
    onChange?: (value: string) => void;
    defaultId?: string;
}
declare const Tabs: ({ children, onChange, defaultId }: TabsProps) => React.JSX.Element;
export declare const useTabsContext: () => {
    activeTab: string;
    setActiveTab: (id: string) => void;
};
export default Tabs;
