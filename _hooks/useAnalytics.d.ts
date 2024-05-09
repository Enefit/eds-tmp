declare const useAnalytics: () => {
    trackFormInteractionEvent: (gaName: string | undefined, elementType: string | undefined, interactionType: string | undefined) => void;
    trackContentInteractionEvent: (gaName: string | undefined, elementType: string | undefined, gaConversion?: boolean | undefined) => void;
    trackSubmitEvent: (id: string | undefined, name: string | undefined, submitType: string | undefined) => void;
};
export default useAnalytics;
