import React, { FC, ReactNode } from 'react';
export declare const AnalyticsGroupIdContext: React.Context<string | null>;
export interface AnalyticsGroupProviderProps {
    id: string;
    children: ReactNode;
}
declare const AnalyticsGroupProvider: FC<AnalyticsGroupProviderProps>;
export default AnalyticsGroupProvider;
