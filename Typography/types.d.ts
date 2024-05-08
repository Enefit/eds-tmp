import React from 'react';
export type HeadingVariant = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'leadtext' | 'subheadline';
export type TextVariant = 'p' | 'line' | 'list';
export type TextSize = 'tiny' | 'small' | 'default' | 'large';
export type LabelSize = 'tiny' | 'small' | 'default' | 'large';
export type TypographySettings = {
    fontFamily: string;
    fontWeight: string | number;
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;
    paragraphSpacing: string;
    textTransform: string;
    textDecoration: string;
};
export type HeadingProps = {
    id?: string;
    variant: HeadingVariant;
    children?: React.ReactNode;
    as?: React.ElementType;
    className?: string;
    italic?: boolean;
    underline?: boolean;
    weight?: '400' | '600';
    uppercase?: boolean;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    };
};
export type TextProps = {
    children?: React.ReactNode;
    variant?: TextVariant;
    size?: TextSize;
    as?: React.ElementType;
    className?: string;
    id?: string;
    italic?: boolean;
    underline?: boolean;
    weight?: '400' | '600';
    uppercase?: boolean;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    };
};
export type LabelProps = {
    id?: string;
    size?: LabelSize;
    children: React.ReactNode;
    className?: string;
    italic?: boolean;
    underline?: boolean;
    weight?: '400' | '600';
    uppercase?: boolean;
};
export type TypographyType = HeadingProps & TextProps & LabelProps;
