import React from 'react';
export interface ComparisonCardOfferProps {
    type: string;
    title?: string;
    description?: string;
    infoHint?: React.ReactNode;
}
export declare const ComparisonCardOffer: React.ForwardRefExoticComponent<ComparisonCardOfferProps & React.RefAttributes<HTMLDivElement>>;
