export { g as getAssetPath, s as setAssetPath, a as setNonce, b as setPlatformOptions } from './index2.js';

const globalScripts = () => {};

function format(first, middle, last) {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

/**
 * @fileoverview entry point for your component library
 *
 * This is the entry point for your component library. Use this file to export utilities,
 * constants or data structure that accompany your components.
 *
 * DO NOT use this file to export your components. Instead, use the recommended approaches
 * to consume components of this package as outlined in the `README.md`.
 */

globalScripts();

export { format };

//# sourceMappingURL=index.js.map