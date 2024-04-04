import {
  CacheProvider,
  RemixBrowser,
  __commonJS,
  __toESM,
  emotion_cache_browser_esm_default,
  require_jsx_dev_runtime,
  require_react,
  require_react_dom
} from "/build/_shared/chunk-HJ5DXMPP.js";

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// app/entry.client.tsx
var import_react3 = __toESM(require_react());
var import_client = __toESM(require_client());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var hydrate = () => {
  const emotionCache = emotion_cache_browser_esm_default({ key: "css" });
  (0, import_react3.startTransition)(() => {
    (0, import_client.hydrateRoot)(
      document,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CacheProvider, { value: emotionCache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    );
  });
};
if (typeof requestIdleCallback === "function") {
  requestIdleCallback(hydrate);
} else {
  setTimeout(hydrate, 1);
}
//# sourceMappingURL=/build/entry.client-4IELSTZ4.js.map
