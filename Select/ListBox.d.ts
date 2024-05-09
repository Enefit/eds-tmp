import React from 'react';
import { AriaListBoxOptions } from 'react-aria';
import { ListState } from 'react-stately';
import type { CollectionChildren } from '@react-types/shared';
export interface ListBoxProps<V extends object> extends AriaListBoxOptions<V> {
    state: ListState<V>;
    children?: CollectionChildren<V>;
}
declare const ListBox: <V extends object>(props: ListBoxProps<V>) => React.JSX.Element;
export default ListBox;
