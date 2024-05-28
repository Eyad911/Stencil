'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3bfe736f.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["ey-items-card.cjs",[[1,"ey-items-card",{"arrayData":[1,"array-data"]},null,{"arrayData":["arrayDataWatcher"]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map