import { InputHTMLAttributes, LabelHTMLAttributes, RefObject } from 'react';
import { RadioGroupState } from '@react-stately/radio';
import { AriaRadioProps } from '@react-types/radio';
export interface RadioAria {
    labelProps: LabelHTMLAttributes<HTMLLabelElement>;
    inputProps: InputHTMLAttributes<HTMLInputElement>;
    isDisabled: boolean;
    isSelected: boolean;
    isPressed: boolean;
}
export declare function useRadio(props: AriaRadioProps, state: RadioGroupState, ref: RefObject<HTMLInputElement>): RadioAria;
