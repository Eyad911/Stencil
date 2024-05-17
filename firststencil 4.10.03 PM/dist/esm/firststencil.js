import { p as promiseResolve, b as bootstrapLazy } from './index-5f90d6f2.js';
export { s as setNonce } from './index-5f90d6f2.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.18.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["ey-items-card",[[1,"ey-items-card",{"arrayData":[1,"array-data"]},null,{"arrayData":["arrayDataWatcher"]}]]]], options);
});

//# sourceMappingURL=firststencil.js.map