import React, { ReactNode } from 'react';
import { AriaModalOverlayProps } from 'react-aria';
import { OverlayTriggerState } from 'react-stately';
interface ModalProps extends AriaModalOverlayProps {
    state: OverlayTriggerState;
    children: ReactNode;
    visible: boolean;
    exitDelay: number;
}
declare const Modal: ({ state, children, visible, exitDelay, ...props }: ModalProps) => React.JSX.Element | null;
export default Modal;
