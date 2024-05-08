import React, { MutableRefObject } from 'react';
import { AriaButtonProps } from 'react-aria';
interface SelectButtonProps extends AriaButtonProps {
    buttonRef: MutableRefObject<HTMLButtonElement>;
    className: string;
}
declare const SelectButton: (props: SelectButtonProps) => React.JSX.Element;
export default SelectButton;
