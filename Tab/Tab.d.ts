import React from 'react';
export interface TabProps {
    id: string;
    label: string;
    description?: string;
}
declare const Tab: ({ label, description, id }: TabProps) => React.JSX.Element;
export default Tab;
