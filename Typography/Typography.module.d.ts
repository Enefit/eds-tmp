import React from 'react';
import { MarginProps } from '../types';
import { HeadingProps, LabelProps, TextProps } from './types';
export declare const Text: {
    Heading: React.FC<MarginProps & HeadingProps>;
    Body: React.FC<MarginProps & TextProps>;
    Label: React.FC<LabelProps>;
};
