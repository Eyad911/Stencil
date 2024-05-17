'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-97cdd873.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.18.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('firststencil.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["ey-items-card.cjs",[[1,"ey-items-card",{"arrayData":[1,"array-data"]},null,{"arrayData":["arrayDataWatcher"]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=firststencil.cjs.js.map