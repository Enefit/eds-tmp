import React, { ReactNode } from 'react';
import type { Background } from '../types';
export interface SubmissionMessageProps {
    title: string;
    description?: string;
    icon?: ReactNode;
    children?: ReactNode;
    background?: Background;
    warning?: boolean;
}
export declare const SubmissionMessage: React.FC<SubmissionMessageProps>;
