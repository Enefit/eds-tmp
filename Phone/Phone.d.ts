import React from 'react';
import { type AriaTextFieldProps } from 'react-aria';
import type { DescriptionSeverity } from '../types';
type AreaCode = {
    code: string;
    country: string;
    key: string;
};
export interface PhoneProps extends Omit<AriaTextFieldProps, 'errorMessage'> {
    errorMessage?: string;
    descriptionSeverity?: DescriptionSeverity;
    labelSuffix?: string;
    tooltipTrigger?: React.ReactNode;
    selectItems: AreaCode[];
    selectName?: string;
    selectPlaceholder?: string;
    selectDefaultSelectedKey?: string;
    isNonModal?: boolean;
}
declare const Phone: (props: PhoneProps) => React.JSX.Element;
export default Phone;
