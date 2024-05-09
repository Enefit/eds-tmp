declare const useExcludeFirstRenderEffect: (effect: () => void | (() => void | undefined) | undefined, dependency: boolean | string | number | null | undefined) => void;
export default useExcludeFirstRenderEffect;
