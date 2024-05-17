import type { Components, JSX } from "../types/components";

interface EyItemsCard extends Components.EyItemsCard, HTMLElement {}
export const EyItemsCard: {
    prototype: EyItemsCard;
    new (): EyItemsCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
