import { b as bootstrapLazy } from './index-9d830c3b.js';
export { s as setNonce } from './index-9d830c3b.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["ey-items-card",[[1,"ey-items-card",{"arrayData":[1,"array-data"]},null,{"arrayData":["arrayDataWatcher"]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map