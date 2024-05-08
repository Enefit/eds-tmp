import { MarginValue } from '../types';
export declare const marginValueToCss: (value: MarginValue) => string;
export declare const getMarginStyles: ({ mt, mb, my, }: {
    mt?: MarginValue | undefined;
    mb?: MarginValue | undefined;
    my?: MarginValue | undefined;
}) => {
    marginTop: string | undefined;
    marginBottom: string | undefined;
};
