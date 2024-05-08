import React, { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { AriaButtonProps } from 'react-aria';
interface SelectButtonProps extends AriaButtonProps {
    buttonRef: MutableRefObject<HTMLButtonElement>;
    className: string;
    setIsSelectFocused: Dispatch<SetStateAction<boolean>>;
}
declare const SelectButton: (props: SelectButtonProps) => React.JSX.Element;
export default SelectButton;
