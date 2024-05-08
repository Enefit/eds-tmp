import React, { ReactNode } from 'react';
export type IconProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: string;
    className?: string;
    children?: ReactNode | ReactNode[];
};
export default function SvgWrapper({ size, color, className, children, ...props }: IconProps): React.JSX.Element;
