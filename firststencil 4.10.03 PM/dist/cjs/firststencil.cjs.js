'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3bfe736f.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.18.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  if (index.BUILD.isDev && !index.BUILD.isTesting) {
    index.consoleDevInfo("Running in development mode.");
  }
  if (index.BUILD.cloneNodeFix) {
    patchCloneNodeFix(index.H.prototype);
  }
  const scriptElm = index.BUILD.scriptDataOpts ? Array.from(index.doc.querySelectorAll("script")).find(
    (s) => new RegExp(`/${index.NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === index.NAMESPACE
  ) : null;
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('firststencil.cjs.js', document.baseURI).href));
  const opts = index.BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["ey-items-card.cjs",[[1,"ey-items-card",{"arrayData":[1,"array-data"]},null,{"arrayData":["arrayDataWatcher"]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=firststencil.cjs.js.map