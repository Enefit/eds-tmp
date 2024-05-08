import React, { HTMLAttributes, ReactNode } from 'react';
export interface HeroProps extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
    image: ReactNode | string;
    heading: string;
    description: string;
    children?: ReactNode;
    className?: string;
}
export declare const Hero: React.FC<HeroProps>;
export default Hero;
