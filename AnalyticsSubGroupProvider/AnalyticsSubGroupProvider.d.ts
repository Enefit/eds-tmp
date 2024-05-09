import React, { FC, ReactNode } from 'react';
export declare const AnalyticsSubGroupIdContext: React.Context<string | null>;
export interface AnalyticsSubGroupProviderProps {
    id: string;
    children: ReactNode;
}
declare const AnalyticsSubGroupProvider: FC<AnalyticsSubGroupProviderProps>;
export default AnalyticsSubGroupProvider;
