import React from 'react';
export type CardIconProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    actions?: React.ReactNode;
    className?: string;
    grow?: boolean;
};
export declare const CardIcon: React.FC<CardIconProps>;
