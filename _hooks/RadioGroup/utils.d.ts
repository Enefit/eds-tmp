import { FocusManagerOptions } from 'react-aria';
import { RadioGroupState } from '@react-stately/radio';
interface RadioGroupData {
    name: string;
    descriptionId: string | undefined;
    errorMessageId: string | undefined;
    validationBehavior: 'aria' | 'native';
}
export declare const radioGroupData: WeakMap<RadioGroupState, RadioGroupData>;
export declare function getFocusableTreeWalker(root: Element, opts?: FocusManagerOptions): TreeWalker;
export {};
