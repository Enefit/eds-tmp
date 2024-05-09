import React from 'react';
import { AriaListBoxOptions, AriaOptionProps } from 'react-aria';
import { ListState } from 'react-stately';
import type { Node } from '@react-types/shared';
interface OptionProps<V extends object> extends AriaOptionProps {
    item: Node<V>;
    state: ListState<V>;
    variant?: 'dropdown' | 'select';
    gaName?: string;
    selectionMode?: AriaListBoxOptions<V>['selectionMode'];
}
declare const Option: <V extends object = never>({ item, state, variant, }: OptionProps<V>) => React.JSX.Element;
export default Option;
