import React from 'react';
import type { AriaComboBoxProps } from '@react-types/combobox';
import { DescriptionSeverity } from '../types';
export interface AutocompleteProps<T> extends AriaComboBoxProps<T> {
    errorMessage?: string;
    descriptionSeverity?: DescriptionSeverity;
    labelSuffix?: string;
    tooltipTrigger?: React.ReactNode;
    clearButtonAriaLabel?: string;
    isOpen?: boolean;
    isNonModal?: boolean;
}
declare const Autocomplete: <T extends object>(props: AutocompleteProps<T>) => React.JSX.Element;
export default Autocomplete;
