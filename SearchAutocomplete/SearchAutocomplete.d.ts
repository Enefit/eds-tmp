import React from 'react';
import type { AriaComboBoxProps } from '@react-types/combobox';
import { DescriptionSeverity } from '../types';
export interface SearchAutocompleteProps<T> extends AriaComboBoxProps<T> {
    errorMessage?: string;
    descriptionSeverity?: DescriptionSeverity;
    labelSuffix?: string;
    tooltipTrigger?: React.ReactNode;
}
declare const SearchAutocomplete: <T extends object>(props: SearchAutocompleteProps<T>) => React.JSX.Element;
export default SearchAutocomplete;
