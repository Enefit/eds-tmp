import { RefObject } from 'react';
declare function useClickOutside<E extends HTMLDivElement>(innerRef: RefObject<E>, callback?: (event: {
    target: E;
}) => void): void;
export default useClickOutside;
