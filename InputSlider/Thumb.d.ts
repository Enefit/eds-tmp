import React, { RefObject } from 'react';
import { type AriaSliderThumbOptions } from 'react-aria';
import { SliderState } from 'react-stately';
interface SliderThumbProps extends Omit<AriaSliderThumbOptions, 'inputRef'> {
    state: SliderState;
    trackRef: RefObject<Element>;
    index: number;
}
declare const Thumb: (props: SliderThumbProps) => React.JSX.Element;
export default Thumb;
