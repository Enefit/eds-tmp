import { RadioGroupState } from '@react-stately/radio';
import { AriaRadioGroupProps } from '@react-types/radio';
import { DOMAttributes, ValidationResult } from '@react-types/shared';
export interface RadioGroupAria extends ValidationResult {
    radioGroupProps: DOMAttributes;
    labelProps: DOMAttributes;
    descriptionProps: DOMAttributes;
    errorMessageProps: DOMAttributes;
}
export declare function useRadioGroup(props: AriaRadioGroupProps, state: RadioGroupState): RadioGroupAria;
