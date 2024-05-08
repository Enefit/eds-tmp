import React, { Dispatch, SetStateAction } from 'react';
import { AriaSelectOptions } from 'react-aria';
import type { CollectionChildren } from '@react-types/shared';
export interface SelectProps extends AriaSelectOptions<object> {
    children?: CollectionChildren<object>;
    setIsSelectFocused: Dispatch<SetStateAction<boolean>>;
    isNonModal?: boolean;
}
declare const Select: {
    (props: SelectProps): React.JSX.Element;
    displayName: string;
};
export default Select;
