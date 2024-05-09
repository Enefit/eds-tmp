import React, { FC, ReactNode } from 'react';
export interface AnalyticsFormProviderProps {
    id: string;
    name: string;
    submitType: 'generate_lead' | 'form_submit' | 'subscribed_newsletter';
    children: ReactNode;
    isSubmitSuccessful?: boolean;
}
export declare const AnalyticsFormContext: React.Context<Omit<AnalyticsFormProviderProps, "children"> | null>;
declare const AnalyticsFormProvider: FC<AnalyticsFormProviderProps>;
export default AnalyticsFormProvider;
