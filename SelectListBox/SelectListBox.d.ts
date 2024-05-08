import React, { MutableRefObject } from 'react';
import { AriaListBoxOptions } from 'react-aria';
import { ListState } from 'react-stately';
import type { CollectionChildren } from '@react-types/shared';
export interface SelectListBoxProps<V extends object> extends AriaListBoxOptions<V> {
    state: ListState<V>;
    children?: CollectionChildren<V>;
    listBoxRef?: MutableRefObject<null>;
}
declare const SelectListBox: <V extends object>(props: SelectListBoxProps<V>) => React.JSX.Element;
export default SelectListBox;
