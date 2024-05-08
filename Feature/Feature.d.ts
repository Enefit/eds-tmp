import React, { ReactNode } from 'react';
export interface FeatureProps {
    title: string;
    description: string;
    icon: ReactNode;
}
export declare const Feature: React.FC<FeatureProps>;
