import React from 'react';
import { AriaOptionProps } from 'react-aria';
import { ListState } from 'react-stately';
import type { Node } from '@react-types/shared';
interface OptionProps<V extends object> extends AriaOptionProps {
    item: Node<V>;
    state: ListState<V>;
}
declare const Option: <V extends object = never>({ item, state }: OptionProps<V>) => React.JSX.Element;
export default Option;
