import React, { HTMLAttributes } from 'react';
import { Background } from '../types';
export interface ImageSectionProps extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
    children: React.ReactNode;
    direction?: 'row' | 'row-reverse';
    layout?: 'half' | 'imageTwoThirds' | 'contentTwoThirds';
    background?: Background;
}
export declare const ImageSection: React.FC<ImageSectionProps>;
export declare const ImageSectionImage: React.FC<{
    children: React.ReactNode;
}>;
export declare const ImageSectionContent: React.FC<{
    children: React.ReactNode;
}>;
