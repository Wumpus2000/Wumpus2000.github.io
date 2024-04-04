var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => entry_server_default
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_cache = __toESM(require("@emotion/cache")), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3, handleRequest = (request, responseStatusCode, responseHeaders, remixContext) => handleBrowserRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
), entry_server_default = handleRequest, handleBrowserRequest = (request, responseStatusCode, responseHeaders, remixContext) => new Promise((resolve, reject) => {
  let didError = !1, emotionCache = (0, import_cache.default)({ key: "css" }), { pipe, abort } = (0, import_server.renderToPipeableStream)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, { value: emotionCache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    {
      onShellReady: () => {
        let reactBody = new import_stream.PassThrough(), bodyWithStyles = (0, import_create_instance.default)(emotionCache).renderStylesToNodeStream();
        reactBody.pipe(bodyWithStyles), responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(bodyWithStyles, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(reactBody);
      },
      onShellError: (error) => {
        reject(error);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    }
  );
  setTimeout(abort, ABORT_DELAY);
});

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react25 = require("@chakra-ui/react"), import_node2 = require("@remix-run/node"), import_react26 = require("@remix-run/react");

// app/components/layout/Layout.tsx
var import_react17 = require("@chakra-ui/react");

// app/components/layout/Header/Header.tsx
var import_react12 = require("@chakra-ui/react");

// app/components/layout/Header/ToggleTheme.tsx
var import_icons = require("@chakra-ui/icons"), import_react4 = require("@chakra-ui/react"), import_framer_motion = require("framer-motion");

// app/components/utils/helpers/hooks/useActionKey.ts
var import_react3 = require("react");
function useActionKey() {
  let [actionKey, setActionKey] = (0, import_react3.useState)("Ctrl");
  return (0, import_react3.useEffect)(() => {
    if (typeof navigator > "u")
      return;
    /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) && setActionKey("\u2318");
  }, []), actionKey;
}

// app/components/layout/Header/ToggleTheme.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function ThemeToggle() {
  let color = (0, import_react4.useColorModeValue)("purple.800", "yellow.400"), bgColor = (0, import_react4.useColorModeValue)(
    "rgba(68, 51, 122, .1)",
    "rgba(236, 201, 75,.1)"
  ), bgColorActive = (0, import_react4.useColorModeValue)(
    "rgba(68, 51, 122, .2)",
    "rgba(236, 201, 75,.2)"
  ), { colorMode, toggleColorMode } = (0, import_react4.useColorMode)();
  (0, import_react4.useEventListener)("keydown", (event) => {
    var _a;
    let hotkey = /(Mac|iPhone|iPod|iPad)/i.test(navigator == null ? void 0 : navigator.platform) ? "metaKey" : "ctrlKey";
    ((_a = event == null ? void 0 : event.key) == null ? void 0 : _a.toLowerCase()) === "i" && event[hotkey] && (event.preventDefault(), toggleColorMode());
  });
  let actionKey = useActionKey();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_framer_motion.AnimatePresence, { mode: "wait", initial: !1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    import_framer_motion.motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.01 },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_react4.Tooltip,
        {
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Text, { alignItems: "center", children: [
            "Toggle ",
            colorMode == "light" ? "Dark" : "Light",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.DarkMode, { children: [
              "(",
              actionKey,
              " + i)"
            ] }, void 0, !0, {
              fileName: "app/components/layout/Header/ToggleTheme.tsx",
              lineNumber: 50,
              columnNumber: 8
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/layout/Header/ToggleTheme.tsx",
            lineNumber: 48,
            columnNumber: 7
          }, this),
          openDelay: 1e3,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react4.IconButton,
            {
              role: "group",
              _hover: { bg: bgColor, color },
              _active: { bg: bgColorActive, scale: 0.9 },
              rounded: "xl",
              bg: "transparent",
              transform: "auto-gpu",
              icon: colorMode == "light" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                import_icons.MoonIcon,
                {
                  _groupHover: { rotate: "-100deg" },
                  transition: "transform .4s, background .2s",
                  transform: "auto"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/layout/Header/ToggleTheme.tsx",
                  lineNumber: 64,
                  columnNumber: 9
                },
                this
              ) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                import_icons.SunIcon,
                {
                  _groupHover: {
                    rotate: "50deg",
                    scale: 1.05
                  },
                  transition: "transform .4s, background .2s",
                  transform: "auto"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/layout/Header/ToggleTheme.tsx",
                  lineNumber: 70,
                  columnNumber: 9
                },
                this
              ),
              "aria-label": "Toggle color mode",
              onClick: toggleColorMode
            },
            void 0,
            !1,
            {
              fileName: "app/components/layout/Header/ToggleTheme.tsx",
              lineNumber: 55,
              columnNumber: 6
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/layout/Header/ToggleTheme.tsx",
          lineNumber: 46,
          columnNumber: 5
        },
        this
      )
    },
    colorMode,
    !1,
    {
      fileName: "app/components/layout/Header/ToggleTheme.tsx",
      lineNumber: 39,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/layout/Header/ToggleTheme.tsx",
    lineNumber: 38,
    columnNumber: 3
  }, this);
}

// app/components/layout/Header/InviteButton.tsx
var import_react6 = require("@chakra-ui/react");

// app/components/layout/icons/DiscordIcon.tsx
var import_react5 = require("@chakra-ui/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function DiscordIcon({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Icon, { h: "24px", fill: "white", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 127.14 96.36", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("style", { children: [
      ".cls-1",
      "fill:#57F287"
    ] }, void 0, !0, {
      fileName: "app/components/layout/icons/DiscordIcon.tsx",
      lineNumber: 8,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/components/layout/icons/DiscordIcon.tsx",
      lineNumber: 7,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("g", { id: "\u56FE\u5C42_2", "data-name": "\u56FE\u5C42 2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("g", { id: "Discord_Logos", "data-name": "Discord Logos", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "g",
      {
        id: "Discord_Logo_-_Large_-_White",
        "data-name": "Discord Logo - Large - White",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "path",
          {
            className: "cls-1",
            d: "M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
          },
          void 0,
          !1,
          {
            fileName: "app/components/layout/icons/DiscordIcon.tsx",
            lineNumber: 16,
            columnNumber: 8
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/layout/icons/DiscordIcon.tsx",
        lineNumber: 12,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/layout/icons/DiscordIcon.tsx",
      lineNumber: 11,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/components/layout/icons/DiscordIcon.tsx",
      lineNumber: 10,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layout/icons/DiscordIcon.tsx",
    lineNumber: 6,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/layout/icons/DiscordIcon.tsx",
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

// app/components/config/config.ts
var config = {
  discordBotInvite: "https://discord.com/oauth2/authorize?client_id=973946557764349992",
  discordServerInvite: "https://discord.gg/eu7tYBZYnY",
  topggVote: "https://top.gg/bot/973946557764349992/vote",
  color: "#5865F2",
  ease: [0.25, 0.1, 0.25, 1]
};

// app/components/layout/Header/InviteButton.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function InviteButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    import_react6.Link,
    {
      _hover: { textDecoration: "none", bg: "discord.900" },
      h: "40px",
      px: 4,
      fontWeight: 500,
      bg: "discord.100",
      rounded: "xl",
      color: "white",
      alignItems: "center",
      userSelect: "none",
      transform: "auto-gpu",
      _active: { scale: 0.9 },
      href: config.discordBotInvite,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.HStack, { h: "100%", alignItems: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DiscordIcon, {}, void 0, !1, {
          fileName: "app/components/layout/Header/InviteButton.tsx",
          lineNumber: 22,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Text, { children: "Invite bot" }, void 0, !1, {
          fileName: "app/components/layout/Header/InviteButton.tsx",
          lineNumber: 23,
          columnNumber: 5
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout/Header/InviteButton.tsx",
        lineNumber: 21,
        columnNumber: 4
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/layout/Header/InviteButton.tsx",
      lineNumber: 7,
      columnNumber: 3
    },
    this
  );
}

// app/components/layout/Header/Header.tsx
var import_react13 = require("react");

// app/components/layout/Header/VoteButton.tsx
var import_react7 = require("@chakra-ui/react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function VoteButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react7.Button,
    {
      as: import_react7.Link,
      href: config.topggVote,
      _hover: { textDecor: "none", bg: "alpha" },
      transform: "auto-gpu",
      _active: { bg: "alpha100", scale: 0.9 },
      rounded: "xl",
      bg: "transparent",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react7.Flex, { flexDir: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react7.HStack, { spacing: 2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react7.Image, { src: "/topgg.svg", h: "19px", alt: "top.gg logo" }, void 0, !1, {
          fileName: "app/components/layout/Header/VoteButton.tsx",
          lineNumber: 17,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react7.Text, { fontWeight: 600, children: "Vote" }, void 0, !1, {
          fileName: "app/components/layout/Header/VoteButton.tsx",
          lineNumber: 18,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout/Header/VoteButton.tsx",
        lineNumber: 16,
        columnNumber: 5
      }, this) }, void 0, !1, {
        fileName: "app/components/layout/Header/VoteButton.tsx",
        lineNumber: 15,
        columnNumber: 4
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/layout/Header/VoteButton.tsx",
      lineNumber: 6,
      columnNumber: 3
    },
    this
  );
}

// app/components/layout/Header/Logo.tsx
var import_react10 = require("@chakra-ui/react");

// app/components/utils/Link.tsx
var import_react8 = require("@remix-run/react"), import_react9 = require("@chakra-ui/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Link3({ to, children, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_react9.Link,
    {
      prefetch: "intent",
      transition: ".1s",
      as: import_react8.Link,
      to,
      ...rest,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/utils/Link.tsx",
      lineNumber: 10,
      columnNumber: 3
    },
    this
  );
}
var Link_default = Link3;

// app/components/layout/Header/Logo.tsx
var import_react11 = require("react"), import_framer_motion2 = require("framer-motion"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Logo() {
  let [hovered, setHovered] = (0, import_react11.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    Link_default,
    {
      "aria-label": "Homepage",
      to: "/",
      alignItems: "center",
      _hover: { textDecor: "none" },
      role: "group",
      onMouseEnter: () => setHovered(!0),
      onMouseLeave: () => setHovered(!1),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react10.Heading, { as: "h1", fontSize: "2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react10.HStack, { spacing: 3, alignItems: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react10.Flex, { flexDir: "column", alignItems: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react10.Image,
            {
              src: "/Wampas.svg",
              h: "25px",
              w: "40px",
              alt: "Wampas keyboard logo"
            },
            void 0,
            !1,
            {
              fileName: "app/components/layout/Header/Logo.tsx",
              lineNumber: 22,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_framer_motion2.AnimatePresence, { mode: "wait", children: hovered && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_framer_motion2.motion.div,
            {
              style: {
                display: "flex",
                overflow: "hidden",
                margin: 0,
                padding: 0,
                maxHeight: "20px"
              },
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: {
                ease: [0.25, 0.1, 0.25, 1]
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react10.Icon, { h: "15px", w: "10px", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "svg",
                  {
                    id: "Layer_1",
                    "data-name": "Layer 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 180.82 120.7",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                        "clipPath",
                        {
                          id: "clip-path",
                          transform: "translate(-241.44 -482.56)",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                            "rect",
                            {
                              width: "663.69",
                              height: "633.52",
                              style: {
                                fill: "none"
                              }
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/layout/Header/Logo.tsx",
                              lineNumber: 57,
                              columnNumber: 14
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/layout/Header/Logo.tsx",
                          lineNumber: 53,
                          columnNumber: 13
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/components/layout/Header/Logo.tsx",
                        lineNumber: 52,
                        columnNumber: 12
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                        "g",
                        {
                          style: {
                            clipPath: "url(#clip-path)"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                            "path",
                            {
                              d: "M353.3,491.4a30.44,30.44,0,0,0-42.9,0l-60.33,60.34A30.33,30.33,0,0,0,293,594.63l38.89-39.24,38.89,39.24a30.33,30.33,0,0,0,42.89-42.89Z",
                              transform: "translate(-241.44 -482.56)",
                              style: {
                                fill: "#5865F2"
                              }
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/layout/Header/Logo.tsx",
                              lineNumber: 71,
                              columnNumber: 13
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/layout/Header/Logo.tsx",
                          lineNumber: 66,
                          columnNumber: 12
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/layout/Header/Logo.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "svg",
                  {
                    id: "Layer_1",
                    "data-name": "Layer 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 180.82 120.7",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                        "clipPath",
                        {
                          id: "clip-path",
                          transform: "translate(-241.44 -482.56)",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                            "rect",
                            {
                              width: "663.69",
                              height: "633.52",
                              style: {
                                fill: "none"
                              }
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/layout/Header/Logo.tsx",
                              lineNumber: 91,
                              columnNumber: 14
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/layout/Header/Logo.tsx",
                          lineNumber: 87,
                          columnNumber: 13
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/components/layout/Header/Logo.tsx",
                        lineNumber: 86,
                        columnNumber: 12
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                        "g",
                        {
                          style: {
                            clipPath: "url(#clip-path)"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                            "path",
                            {
                              d: "M353.3,491.4a30.44,30.44,0,0,0-42.9,0l-60.33,60.34A30.33,30.33,0,0,0,293,594.63l38.89-39.24,38.89,39.24a30.33,30.33,0,0,0,42.89-42.89Z",
                              transform: "translate(-241.44 -482.56)",
                              style: {
                                fill: "#5865F2"
                              }
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/layout/Header/Logo.tsx",
                              lineNumber: 105,
                              columnNumber: 13
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/layout/Header/Logo.tsx",
                          lineNumber: 100,
                          columnNumber: 12
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/layout/Header/Logo.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/layout/Header/Logo.tsx",
                lineNumber: 45,
                columnNumber: 10
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/layout/Header/Logo.tsx",
              lineNumber: 30,
              columnNumber: 9
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/layout/Header/Logo.tsx",
            lineNumber: 28,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout/Header/Logo.tsx",
          lineNumber: 21,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react10.Text, { children: "Wampas" }, void 0, !1, {
          fileName: "app/components/layout/Header/Logo.tsx",
          lineNumber: 119,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout/Header/Logo.tsx",
        lineNumber: 20,
        columnNumber: 5
      }, this) }, void 0, !1, {
        fileName: "app/components/layout/Header/Logo.tsx",
        lineNumber: 19,
        columnNumber: 4
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/layout/Header/Logo.tsx",
      lineNumber: 10,
      columnNumber: 3
    },
    this
  );
}

// app/components/layout/Header/Header.tsx
var import_icons2 = require("@chakra-ui/icons"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Header() {
  (0, import_react12.useEventListener)("keydown", (event) => {
    var _a;
    let hotkey = /(Mac|iPhone|iPod|iPad)/i.test(navigator == null ? void 0 : navigator.platform) ? "metaKey" : "ctrlKey";
    ((_a = event == null ? void 0 : event.key) == null ? void 0 : _a.toLowerCase()) === "i" && event[hotkey] && (event.preventDefault(), toggleColorMode());
  });
  let { toggleColorMode } = (0, import_react12.useColorMode)(), [scrollPosition, setScrollPosition] = (0, import_react13.useState)(0), handleScroll = () => {
    let position = window.pageYOffset;
    setScrollPosition(position);
  };
  return (0, import_react13.useEffect)(() => (window.addEventListener("scroll", handleScroll, { passive: !0 }), handleScroll(), () => {
    window.removeEventListener("scroll", handleScroll);
  }), []), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_react12.Flex,
    {
      as: "header",
      w: "100%",
      h: { base: "60px", md: "70px" },
      pos: "sticky",
      top: 0,
      backdropFilter: scrollPosition < 0 ? "none" : "blur(20px)",
      zIndex: 1799,
      borderBottom: "1px",
      borderBottomColor: scrollPosition > 0 ? "alpha" : "transparent",
      transition: "all .2s",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_react12.Flex,
        {
          w: "100%",
          maxW: "1300px",
          px: 4,
          alignItems: "center",
          h: "100%",
          mx: "auto",
          justifyContent: "space-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react12.HStack, { spacing: 5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Logo, {}, void 0, !1, {
              fileName: "app/components/layout/Header/Header.tsx",
              lineNumber: 67,
              columnNumber: 6
            }, this) }, void 0, !1, {
              fileName: "app/components/layout/Header/Header.tsx",
              lineNumber: 66,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react12.HStack, { spacing: 3, display: { base: "none", sm: "flex" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ThemeToggle, {}, void 0, !1, {
                fileName: "app/components/layout/Header/Header.tsx",
                lineNumber: 71,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(VoteButton, {}, void 0, !1, {
                fileName: "app/components/layout/Header/Header.tsx",
                lineNumber: 72,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(InviteButton, {}, void 0, !1, {
                fileName: "app/components/layout/Header/Header.tsx",
                lineNumber: 73,
                columnNumber: 6
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/layout/Header/Header.tsx",
              lineNumber: 70,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react12.HStack, { spacing: 5, display: { base: "flex", sm: "none" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ThemeToggle, {}, void 0, !1, {
                fileName: "app/components/layout/Header/Header.tsx",
                lineNumber: 77,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                import_react12.Link,
                {
                  href: config.topggVote,
                  boxSize: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                    import_react12.Image,
                    {
                      src: "/topgg.svg",
                      boxSize: "8",
                      alt: "top.gg logo"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/layout/Header/Header.tsx",
                      lineNumber: 85,
                      columnNumber: 7
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/layout/Header/Header.tsx",
                  lineNumber: 78,
                  columnNumber: 6
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                import_react12.Link,
                {
                  href: config.discordBotInvite,
                  boxSize: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_icons2.AddIcon, {}, void 0, !1, {
                    fileName: "app/components/layout/Header/Header.tsx",
                    lineNumber: 98,
                    columnNumber: 7
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/layout/Header/Header.tsx",
                  lineNumber: 91,
                  columnNumber: 6
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/layout/Header/Header.tsx",
              lineNumber: 76,
              columnNumber: 5
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/layout/Header/Header.tsx",
          lineNumber: 57,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/layout/Header/Header.tsx",
      lineNumber: 45,
      columnNumber: 3
    },
    this
  );
}

// app/components/layout/BackgroundUtils.tsx
var import_react14 = require("@chakra-ui/react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function BackgroundUtils() {
  let { colorMode } = (0, import_react14.useColorMode)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react14.Flex, { pos: "absolute", zIndex: -1, maxH: "100vh", w: "100%", h: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      import_react14.Flex,
      {
        w: "100%",
        h: "100%",
        justifyContent: "center",
        alignItems: "center",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          import_react14.Image,
          {
            h: "400px",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.2,
            filter: "blur(5px)",
            src: "/Wampas.svg",
            alt: "text tune logo"
          },
          void 0,
          !1,
          {
            fileName: "app/components/layout/BackgroundUtils.tsx",
            lineNumber: 16,
            columnNumber: 6
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/layout/BackgroundUtils.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/layout/BackgroundUtils.tsx",
      lineNumber: 9,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react14.Flex, { pos: "absolute", zIndex: -1, w: "100%", h: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      import_react14.Flex,
      {
        w: "100%",
        h: "100%",
        bgGradient: `linear(170deg, ${config.color}, transparent)`,
        opacity: colorMode === "light" ? 0.3 : 0.1
      },
      void 0,
      !1,
      {
        fileName: "app/components/layout/BackgroundUtils.tsx",
        lineNumber: 28,
        columnNumber: 5
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/layout/BackgroundUtils.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layout/BackgroundUtils.tsx",
    lineNumber: 8,
    columnNumber: 3
  }, this);
}

// app/components/layout/Footer.tsx
var import_react15 = require("@chakra-ui/react"), import_react16 = require("@remix-run/react");

// package.json
var package_default = {
  private: !0,
  sideEffects: !1,
  version: "1.2.0",
  scripts: {
    build: "remix build",
    dev: 'npm-run-all build --parallel "dev:*"',
    "dev:node": "cross-env NODE_ENV=development nodemon --require dotenv/config ./server.js --watch ./server.js",
    "dev:remix": "remix watch",
    start: "cross-env NODE_ENV=production node ./server.js",
    typecheck: "tsc"
  },
  dependencies: {
    "@chakra-ui/icons": "^2.0.17",
    "@chakra-ui/react": "^2.5.3",
    "@emotion/react": "^11.10.4",
    "@emotion/server": "^11.10.0",
    "@emotion/styled": "^11.10.4",
    "@remix-run/express": "^1.14.3",
    "@remix-run/node": "^1.14.3",
    "@remix-run/react": "^1.14.3",
    compression: "^1.7.4",
    "cross-env": "^7.0.3",
    express: "^4.18.2",
    "framer-motion": "^10.8.5",
    morgan: "^1.10.0",
    react: "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.8.0"
  },
  devDependencies: {
    "@remix-run/dev": "^1.14.3",
    "@remix-run/eslint-config": "^1.14.3",
    "@types/react": "^18.0.25",
    "@types/react-dom": "^18.0.11",
    dotenv: "^16.0.3",
    eslint: "^8.27.0",
    nodemon: "^2.0.20",
    "npm-run-all": "^4.1.5",
    typescript: "^4.8.4"
  },
  engines: {
    node: ">=14"
  }
};

// app/components/layout/Footer.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Footer() {
  let navigate = (0, import_react16.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.Box, { h: "auto", as: "footer", mt: 10, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    import_react15.Stack,
    {
      py: { base: 10, md: "unset" },
      rounded: "3xl",
      mt: 15,
      spacing: [7, 10, 20],
      direction: { base: "column", md: "row" },
      justifyContent: "center",
      maxW: "800px",
      alignItems: { base: "center", md: "start" },
      mx: "auto",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.Box, { pb: 5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.VStack, { align: { base: "center", md: "start" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.Flex, { flexDir: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            import_react15.Text,
            {
              fontWeight: "bold",
              fontSize: "18px",
              fontStyle: "",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.Box, { as: "span", color: "brand", children: "W" }, void 0, !1, {
                  fileName: "app/components/layout/Footer.tsx",
                  lineNumber: 37,
                  columnNumber: 9
                }, this),
                "ampas",
                " ",
                "v",
                package_default.version
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/layout/Footer.tsx",
              lineNumber: 32,
              columnNumber: 8
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/layout/Footer.tsx",
            lineNumber: 31,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.Text, { color: "textSec", fontWeight: "600", children: [
            "Followe us",
            ":) ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react15.Link,
              {
                href: "https://x.com/wampas",
                target: "_blank",
                textDecor: "underline",
                variant: "link",
                children: "twitter"
              },
              void 0,
              !1,
              {
                fileName: "app/components/layout/Footer.tsx",
                lineNumber: 48,
                columnNumber: 8
              },
              this
            ),
            " "
          ] }, void 0, !0, {
            fileName: "app/components/layout/Footer.tsx",
            lineNumber: 46,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.Text, { color: "textSec", fontWeight: 600, children: [
            "Made with ",
            "<3",
            " by",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react15.Link,
              {
                target: "_blank",
                textDecor: "underline",
                variant: "link",
                href: "https://github.com/ImExoOdeex/",
                children: "imexoodeex"
              },
              void 0,
              !1,
              {
                fileName: "app/components/layout/Footer.tsx",
                lineNumber: 59,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/layout/Footer.tsx",
            lineNumber: 57,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout/Footer.tsx",
          lineNumber: 30,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/components/layout/Footer.tsx",
          lineNumber: 29,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.Stack, { direction: "row", spacing: { base: "70px", md: 20 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.VStack, { align: "start", fontWeight: "600", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.Text, { fontWeight: "700", children: "Availability" }, void 0, !1, {
              fileName: "app/components/layout/Footer.tsx",
              lineNumber: 73,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react15.Text,
              {
                color: "textSec",
                transition: "color .2s",
                _hover: { color: "text" },
                cursor: "pointer",
                onClick: () => window.scrollTo(0, 0),
                userSelect: "none",
                children: "Go to the top"
              },
              void 0,
              !1,
              {
                fileName: "app/components/layout/Footer.tsx",
                lineNumber: 74,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react15.Text,
              {
                color: "textSec",
                transition: "color .2s",
                _hover: { color: "text" },
                cursor: "pointer",
                onClick: () => navigate(-1),
                userSelect: "none",
                children: "Go back"
              },
              void 0,
              !1,
              {
                fileName: "app/components/layout/Footer.tsx",
                lineNumber: 84,
                columnNumber: 7
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/layout/Footer.tsx",
            lineNumber: 72,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.VStack, { align: "start", fontWeight: "600", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.Text, { fontWeight: "700", children: "Other" }, void 0, !1, {
              fileName: "app/components/layout/Footer.tsx",
              lineNumber: 97,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.Text, { color: "textSec", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react15.Link,
              {
                transition: "color .2s",
                _hover: { color: "text", textDecor: "none" },
                as: Link_default,
                prefetch: "intent",
                to: "/tos",
                children: "Terms of service"
              },
              void 0,
              !1,
              {
                fileName: "app/components/layout/Footer.tsx",
                lineNumber: 99,
                columnNumber: 8
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/layout/Footer.tsx",
              lineNumber: 98,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.Text, { color: "textSec", fontWeight: "600", children: [
              "Copyright \xA9 ",
              new Date().getFullYear()
            ] }, void 0, !0, {
              fileName: "app/components/layout/Footer.tsx",
              lineNumber: 109,
              columnNumber: 7
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/layout/Footer.tsx",
            lineNumber: 96,
            columnNumber: 6
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout/Footer.tsx",
          lineNumber: 71,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/layout/Footer.tsx",
      lineNumber: 18,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/layout/Footer.tsx",
    lineNumber: 17,
    columnNumber: 3
  }, this);
}

// app/components/layout/Layout.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(BackgroundUtils, {}, void 0, !1, {
      fileName: "app/components/layout/Layout.tsx",
      lineNumber: 9,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/components/layout/Layout.tsx",
      lineNumber: 11,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react17.Flex, { w: "100%", minH: "calc(100vh - 111px)", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react17.Flex, { flexDir: "column", w: "100%", children }, void 0, !1, {
      fileName: "app/components/layout/Layout.tsx",
      lineNumber: 13,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/components/layout/Layout.tsx",
      lineNumber: 12,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/components/layout/Layout.tsx",
      lineNumber: 17,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layout/Layout.tsx",
    lineNumber: 8,
    columnNumber: 3
  }, this);
}

// app/components/utils/theme.ts
var import_react18 = require("@chakra-ui/react"), import_theme_tools = require("@chakra-ui/theme-tools"), config2 = {
  initialColorMode: "system",
  useSystemColorMode: !0
}, styles = {
  global: (props) => ({
    body: {
      minH: "100vh",
      bg: (0, import_theme_tools.mode)("bg.100", "bg.900")(props),
      overflowY: "scroll",
      "-webkit-tap-highlight-color": "transparent"
    },
    th: {
      color: (0, import_theme_tools.mode)("#393942cc!important", "#dedef1be!important")(props)
    },
    html: {
      "scroll-behavior": "smooth",
      "*::selection": {
        backgroundColor: "#5865F2",
        color: "white"
      }
    }
  })
}, colors = {
  brand: {
    50: "#EFEDF7",
    100: "#5865F2",
    200: "#B5ADDB",
    300: "#978DCD",
    400: "#7A6DC0",
    500: "#5D4DB2",
    600: "#5D4DB2",
    700: "#5D4DB2",
    800: "#5D4DB2",
    900: "#3C4497"
  },
  bg: {
    100: "#FDF9F6",
    900: "#1D1F36"
  },
  sec: {
    100: "#93b8e9",
    900: "#0078D7"
  },
  discord: {
    100: "#5865F2",
    900: "#3C4497"
  }
}, { Button: Button2, Link: Link5, Heading: Heading2, Tooltip: Tooltip2, Badge, Divider } = import_react18.theme.components, theme = (0, import_react18.extendBaseTheme)({
  colors,
  config: config2,
  styles,
  fonts: {
    body: '"Poppins", sans-serif',
    heading: '"Outfit", "Poppins", sans-serif'
  },
  semanticTokens: {
    colors: {
      brand: {
        default: "brand.900",
        _dark: "brand.100"
      },
      sec: {
        default: "#0078D7",
        _dark: "#93b8e9"
      },
      text: {
        default: "blackAlpha.900",
        _dark: "whiteAlpha.900"
      },
      textSec: {
        default: "blackAlpha.800",
        _dark: "whiteAlpha.800"
      },
      gold: {
        default: "orange.300",
        _dark: "orange.200"
      },
      inv: {
        default: "white",
        _dark: "black"
      },
      invNormal: {
        default: "bg.900",
        _dark: "bg.100"
      },
      red: {
        default: "red.500",
        _dark: "red.400"
      },
      green: {
        default: "green.600",
        _dark: "green.400"
      },
      bg: {
        default: "bg.100",
        _dark: "bg.900"
      },
      alpha: {
        default: "blackAlpha.50",
        _dark: "whiteAlpha.50"
      },
      alpha100: {
        default: "blackAlpha.100",
        _dark: "whiteAlpha.100"
      },
      alpha200: {
        default: "blackAlpha.200",
        _dark: "whiteAlpha.200"
      },
      raisedBg: {
        default: "#f6f6ff",
        _dark: "#18181b"
      }
    }
  },
  components: {
    Button: Button2,
    Heading: Heading2,
    Badge,
    Divider,
    Tooltip: (0, import_react18.mergeThemeOverride)(Tooltip2, {
      baseStyle: {
        bg: "#1d1d22",
        "--tooltip-bg": "#1d1d22",
        _dark: {
          "--tooltip-bg": "#fff",
          bg: "bg.100"
        }
      }
    }),
    Link: (0, import_react18.mergeThemeOverride)(Link5, {
      variants: {
        link: {
          color: "sec",
          transition: "color .2s",
          _hover: {
            color: "#005395"
          },
          _dark: {
            _hover: {
              color: "#278adb"
            }
          },
          textDecor: "underline",
          fontWeight: 600
        }
      }
    })
  }
}), theme_default = theme;

// app/components/utils/helpers/functions/cookiesHelpers.ts
function getCookieWithoutDocument(cname, cookies) {
  let name = cname + "=", ca = decodeURIComponent(cookies).split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    for (; c.charAt(0) == " "; )
      c = c.substring(1);
    if (c.indexOf(name) == 0)
      return c.substring(name.length, c.length);
  }
  return "";
}

// app/Document.tsx
var import_react19 = require("@remix-run/react"), import_react20 = require("react"), import_react_router_dom = require("react-router-dom"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Document({
  children
}) {
  function getColorMode(cookies2) {
    return getCookieWithoutDocument(CHAKRA_COOKIE_COLOR_KEY, cookies2);
  }
  let DEFAULT_COLOR_MODE = "dark", CHAKRA_COOKIE_COLOR_KEY = "chakra-ui-color-mode", { cookies } = (0, import_react19.useLoaderData)();
  typeof document < "u" && (cookies = document.cookie);
  let colorMode = (0, import_react20.useMemo)(() => {
    let color = getColorMode(cookies);
    return !color && DEFAULT_COLOR_MODE && (cookies += ` ${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`, color = DEFAULT_COLOR_MODE), color;
  }, [cookies]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "html",
    {
      lang: "en",
      ...colorMode && {
        "data-theme": colorMode,
        style: { colorScheme: colorMode }
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("head", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.Meta, {}, void 0, !1, {
            fileName: "app/Document.tsx",
            lineNumber: 50,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.Links, {}, void 0, !1, {
            fileName: "app/Document.tsx",
            lineNumber: 51,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/Document.tsx",
          lineNumber: 49,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "body",
          {
            ...colorMode && {
              className: `chakra-ui-${colorMode}`
            },
            children: [
              children,
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_router_dom.ScrollRestoration, {}, void 0, !1, {
                fileName: "app/Document.tsx",
                lineNumber: 59,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.Scripts, {}, void 0, !1, {
                fileName: "app/Document.tsx",
                lineNumber: 60,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.LiveReload, {}, void 0, !1, {
                fileName: "app/Document.tsx",
                lineNumber: 61,
                columnNumber: 5
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/Document.tsx",
            lineNumber: 53,
            columnNumber: 4
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/Document.tsx",
      lineNumber: 42,
      columnNumber: 3
    },
    this
  );
}
function DocumentWoLoader({
  children
}) {
  function getColorMode(cookies2) {
    return getCookieWithoutDocument(CHAKRA_COOKIE_COLOR_KEY, cookies2);
  }
  let DEFAULT_COLOR_MODE = "dark", CHAKRA_COOKIE_COLOR_KEY = "chakra-ui-color-mode", [cookies, setCookies] = (0, import_react20.useState)("");
  (0, import_react20.useEffect)(() => {
    setCookies(document.cookie);
  }, []);
  let colorMode = (0, import_react20.useMemo)(() => {
    let color = getColorMode(cookies);
    return !color && DEFAULT_COLOR_MODE && (setCookies(`${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`), color = DEFAULT_COLOR_MODE), color;
  }, [cookies]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "html",
    {
      lang: "en",
      ...colorMode && {
        "data-theme": colorMode,
        style: { colorScheme: colorMode }
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("head", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.Meta, {}, void 0, !1, {
            fileName: "app/Document.tsx",
            lineNumber: 107,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.Links, {}, void 0, !1, {
            fileName: "app/Document.tsx",
            lineNumber: 108,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/Document.tsx",
          lineNumber: 106,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "body",
          {
            ...colorMode && {
              className: `chakra-ui-${colorMode}`
            },
            children: [
              children,
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_router_dom.ScrollRestoration, {}, void 0, !1, {
                fileName: "app/Document.tsx",
                lineNumber: 116,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.Scripts, {}, void 0, !1, {
                fileName: "app/Document.tsx",
                lineNumber: 117,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.LiveReload, {}, void 0, !1, {
                fileName: "app/Document.tsx",
                lineNumber: 118,
                columnNumber: 5
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/Document.tsx",
            lineNumber: 110,
            columnNumber: 4
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/Document.tsx",
      lineNumber: 99,
      columnNumber: 3
    },
    this
  );
}

// app/components/layout/boundaries/Catch.tsx
var import_react21 = require("@remix-run/react"), import_react22 = require("@chakra-ui/react");
var import_icons3 = require("@chakra-ui/icons"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Catch() {
  let caught = (0, import_react21.useCatch)(), navigate = (0, import_react21.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    import_react22.VStack,
    {
      spacing: 5,
      w: "100%",
      alignItems: "center",
      justifyContent: "center",
      minH: "calc(100vh - 140px)",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react22.Heading, { as: "h1", fontSize: "3xl", children: [
          caught.statusText,
          " ",
          caught.status
        ] }, void 0, !0, {
          fileName: "app/components/layout/boundaries/Catch.tsx",
          lineNumber: 20,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react22.HStack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            import_react22.Button,
            {
              onClick: () => navigate(-1),
              bg: "alpha",
              _hover: { bg: "alpha200" },
              rounded: "xl",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react22.HStack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_icons3.ArrowBackIcon, {}, void 0, !1, {
                  fileName: "app/components/layout/boundaries/Catch.tsx",
                  lineNumber: 31,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react22.Text, { children: "Go back" }, void 0, !1, {
                  fileName: "app/components/layout/boundaries/Catch.tsx",
                  lineNumber: 32,
                  columnNumber: 8
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/layout/boundaries/Catch.tsx",
                lineNumber: 30,
                columnNumber: 7
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/layout/boundaries/Catch.tsx",
              lineNumber: 24,
              columnNumber: 6
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            import_react22.Button,
            {
              as: Link_default,
              to: "/",
              _hover: { textDecor: "none", bg: "alpha200" },
              bg: "alpha",
              rounded: "xl",
              children: "Go home"
            },
            void 0,
            !1,
            {
              fileName: "app/components/layout/boundaries/Catch.tsx",
              lineNumber: 35,
              columnNumber: 6
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/layout/boundaries/Catch.tsx",
          lineNumber: 23,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/layout/boundaries/Catch.tsx",
      lineNumber: 13,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/layout/boundaries/Catch.tsx",
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

// app/components/layout/boundaries/Error.tsx
var import_react23 = require("@remix-run/react"), import_react24 = require("@chakra-ui/react");
var import_icons4 = require("@chakra-ui/icons"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Error2({ error }) {
  let navigate = (0, import_react23.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    import_react24.VStack,
    {
      spacing: 5,
      w: "100%",
      alignItems: "center",
      justifyContent: "center",
      minH: "calc(100vh - 140px)",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react24.Heading, { as: "h1", fontSize: "3xl", children: error.name }, void 0, !1, {
          fileName: "app/components/layout/boundaries/Error.tsx",
          lineNumber: 19,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react24.Text, { children: error.message }, void 0, !1, {
          fileName: "app/components/layout/boundaries/Error.tsx",
          lineNumber: 22,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react24.HStack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            import_react24.Button,
            {
              onClick: () => navigate(-1),
              bg: "alpha",
              _hover: { bg: "alpha200" },
              rounded: "xl",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react24.HStack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_icons4.ArrowBackIcon, {}, void 0, !1, {
                  fileName: "app/components/layout/boundaries/Error.tsx",
                  lineNumber: 31,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react24.Text, { children: "Go back" }, void 0, !1, {
                  fileName: "app/components/layout/boundaries/Error.tsx",
                  lineNumber: 32,
                  columnNumber: 8
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/layout/boundaries/Error.tsx",
                lineNumber: 30,
                columnNumber: 7
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/layout/boundaries/Error.tsx",
              lineNumber: 24,
              columnNumber: 6
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            import_react24.Button,
            {
              as: Link_default,
              to: "/",
              _hover: { textDecor: "none", bg: "alpha200" },
              bg: "alpha",
              rounded: "xl",
              children: "Go home"
            },
            void 0,
            !1,
            {
              fileName: "app/components/layout/boundaries/Error.tsx",
              lineNumber: 35,
              columnNumber: 6
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/layout/boundaries/Error.tsx",
          lineNumber: 23,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/layout/boundaries/Error.tsx",
      lineNumber: 12,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/layout/boundaries/Error.tsx",
    lineNumber: 11,
    columnNumber: 3
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), meta = () => ({
  title: "Wampas | Discord Bot",
  robots: "all",
  description: "Wampas discord bot. Spellcheck, grammarcheck, definition, synonyms and more. invite Wampas now to your discord server!",
  keywords: "discord bot, discord, bot, Wampas, Wumpus, fun bot, fun discord bot, Wumpus bot, Wumpus discord bot, Wampas discord bot, Wampas bot, word synonyms, definition, synonyms, slash commands",
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  author: "Wumpus"
}), links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&&family=Outfit:wght@700;800;900&display=swap"
  }
];
function App() {
  let { cookies } = (0, import_react26.useLoaderData)(), manager = (0, import_react25.useConst)((0, import_react25.cookieStorageManagerSSR)(cookies));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    import_react25.ChakraBaseProvider,
    {
      resetCSS: !0,
      colorModeManager: manager,
      theme: theme_default,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react26.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 6
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 5
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/root.tsx",
      lineNumber: 59,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 58,
    columnNumber: 3
  }, this);
}
var loader = async ({ request }) => (0, import_node2.json)({ cookies: request.headers.get("cookie") ?? "" });
function CatchBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DocumentWoLoader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    import_react25.ChakraBaseProvider,
    {
      theme: theme_default,
      resetCSS: !0,
      colorModeManager: import_react25.cookieStorageManager,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Catch, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 88,
        columnNumber: 5
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/root.tsx",
      lineNumber: 83,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 82,
    columnNumber: 3
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DocumentWoLoader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    import_react25.ChakraBaseProvider,
    {
      theme: theme_default,
      resetCSS: !0,
      colorModeManager: import_react25.cookieStorageManager,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Error2, { error }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 104,
        columnNumber: 5
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/root.tsx",
      lineNumber: 99,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 98,
    columnNumber: 3
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader2
});
var import_react35 = require("@chakra-ui/react"), import_node3 = require("@remix-run/node");

// app/components/routes/index/About.tsx
var import_react28 = require("@chakra-ui/react");

// app/components/layout/StrokeHeading.tsx
var import_react27 = require("@chakra-ui/react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function StrokeHeading({
  children,
  ...props
}) {
  let color = (0, import_react27.useColorModeValue)("#5865F2", "#5865F2");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    import_react27.Heading,
    {
      as: "h1",
      textAlign: "center",
      fontSize: { base: "5xl", md: "8xl" },
      letterSpacing: { base: "10px", md: "20px" },
      color: "transparent",
      fontFamily: "body",
      textTransform: "uppercase",
      fontWeight: "black",
      sx: { WebkitTextStroke: `0.5px ${color}` },
      opacity: 0.6,
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/layout/StrokeHeading.tsx",
      lineNumber: 16,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/layout/StrokeHeading.tsx",
    lineNumber: 15,
    columnNumber: 3
  }, this);
}

// app/components/routes/index/About.tsx
var import_framer_motion3 = require("framer-motion");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Flex, { px: 4, pos: "relative", w: "100%", flexDir: "column", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.VStack, { w: "100%", alignItems: "start", spacing: 10, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.VStack, { spacing: 3, alignItems: "start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Heading, { fontSize: "xl", fontWeight: 600, children: "Hi, I'm bot to help you improve your english skills or to correct others!" }, void 0, !1, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 20,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Text, { children: "I've been designed to easily check grammar, spelling, or anything else without the need to copy and paste text into Google. So, let's get started by showing you some of my functionalities." }, void 0, !1, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 24,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/routes/index/About.tsx",
        lineNumber: 19,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Divider, {}, void 0, !1, {
        fileName: "app/components/routes/index/About.tsx",
        lineNumber: 32,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.VStack, { spacing: 3, alignItems: "start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Heading, { fontSize: "xl", fontWeight: 600, children: "Context Menu" }, void 0, !1, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 37,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Text, { children: [
          "You can check the spelling and grammar right clicking on message, then ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("b", { children: "Apps" }, void 0, !1, {
            fileName: "app/components/routes/index/About.tsx",
            lineNumber: 42,
            columnNumber: 21
          }, this),
          " ",
          ">",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("b", { children: "Check spelling/grammar" }, void 0, !1, {
            fileName: "app/components/routes/index/About.tsx",
            lineNumber: 43,
            columnNumber: 7
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 40,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Box, { as: "video", rounded: "md", controls: !0, autoPlay: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("source", { src: "/discord.mp4", type: "video/mp4" }, void 0, !1, {
            fileName: "app/components/routes/index/About.tsx",
            lineNumber: 46,
            columnNumber: 7
          }, this),
          "Your browser does not support videos lmao"
        ] }, void 0, !0, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 45,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/routes/index/About.tsx",
        lineNumber: 36,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Divider, {}, void 0, !1, {
        fileName: "app/components/routes/index/About.tsx",
        lineNumber: 51,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.VStack, { spacing: 3, alignItems: "start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Heading, { fontSize: "xl", fontWeight: 600, children: "Slash commands" }, void 0, !1, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 56,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Text, { children: "Bot contains total of 5 commands." }, void 0, !1, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 59,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Text, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Badge, { children: "/grammarcheck" }, void 0, !1, {
            fileName: "app/components/routes/index/About.tsx",
            lineNumber: 62,
            columnNumber: 7
          }, this),
          " - utilizes ChatGPT, a highly accurate and reliable language model, to analyze and provide feedback on the grammar of any given text. With this feature, users can quickly and easily ensure that their written communications are error-free and professional. ChatGPT's extensive training on vast amounts of text data enables it to identify even subtle errors in grammar, punctuation, and syntax, and provide helpful suggestions for how to correct them."
        ] }, void 0, !0, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 61,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Text, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Badge, { children: "/spellcheck" }, void 0, !1, {
            fileName: "app/components/routes/index/About.tsx",
            lineNumber: 74,
            columnNumber: 7
          }, this),
          " - useful tool for ensuring that written communications are free of spelling errors. Powered by advanced algorithms, this feature checks the spelling of any given text and generates buttons below the embed with suggested words for correction. This makes it easy for users to quickly and easily correct any spelling mistakes and produce error-free written content."
        ] }, void 0, !0, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 73,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Text, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Badge, { children: "/definition" }, void 0, !1, {
            fileName: "app/components/routes/index/About.tsx",
            lineNumber: 85,
            columnNumber: 7
          }, this),
          " - allows users to easily check the definition of any word. When a word is entered, this feature generates a definition and part of speech, providing users with a comprehensive understanding of the word's meaning and usage."
        ] }, void 0, !0, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 84,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Text, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Badge, { children: "/synonyms " }, void 0, !1, {
            fileName: "app/components/routes/index/About.tsx",
            lineNumber: 93,
            columnNumber: 7
          }, this),
          " - provides a comprehensive list of all possible synonyms for any word you enter."
        ] }, void 0, !0, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 92,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Text, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react28.Badge, { children: "/help " }, void 0, !1, {
            fileName: "app/components/routes/index/About.tsx",
            lineNumber: 98,
            columnNumber: 7
          }, this),
          " - help command that gives some help if you get stuck."
        ] }, void 0, !0, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 97,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/routes/index/About.tsx",
        lineNumber: 55,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/routes/index/About.tsx",
      lineNumber: 16,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      import_framer_motion3.motion.div,
      {
        style: {
          display: "flex",
          justifyContent: "center",
          marginTop: "64px"
        },
        initial: { y: -80, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: !0 },
        transition: { ease: config.ease, duration: 1 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(StrokeHeading, { textTransform: "none", children: "INVITE ME ^3^" }, void 0, !1, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 115,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/routes/index/About.tsx",
        lineNumber: 104,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/routes/index/About.tsx",
    lineNumber: 15,
    columnNumber: 3
  }, this);
}

// app/components/routes/index/Main.tsx
var import_react29 = require("@chakra-ui/react");
var import_framer_motion4 = require("framer-motion"), import_react30 = require("@chakra-ui/react"), import_bs = require("react-icons/bs"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function Main() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    import_react29.Flex,
    {
      px: 4,
      pos: "relative",
      minH: "calc(100vh - 140px)",
      justifyContent: "center",
      alignItems: "center",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react29.Stack, { direction: { base: "column", md: "row" }, spacing: 10, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react29.VStack, { w: "100%", alignItems: "start", spacing: 5, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react29.Heading, { fontSize: "5xl", children: "Wampas" }, void 0, !1, {
              fileName: "app/components/routes/index/Main.tsx",
              lineNumber: 32,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react29.Text, { lineHeight: "170%", children: "Welcome to Wampas Games Bot, your go-to companion for endless fun and excitement on Discord! This free and user-friendly bot is designed with simplicity in mind, ensuring that everyone can join in on the entertainment." }, void 0, !1, {
              fileName: "app/components/routes/index/Main.tsx",
              lineNumber: 33,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react29.Wrap, { spacing: 3, w: "100%", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react29.WrapItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                import_react29.Button,
                {
                  as: import_react29.Link,
                  _hover: {
                    textDecoration: "none",
                    bg: "discord.900"
                  },
                  h: "40px",
                  px: 4,
                  fontWeight: 500,
                  bg: "discord.100",
                  color: "white",
                  transform: "auto-gpu",
                  _active: { scale: 0.9 },
                  rounded: "xl",
                  href: config.discordBotInvite,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react29.HStack, { h: "100%", alignItems: "center", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(DiscordIcon, {}, void 0, !1, {
                      fileName: "app/components/routes/index/Main.tsx",
                      lineNumber: 57,
                      columnNumber: 10
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react29.Text, { children: "Invite bot to your server" }, void 0, !1, {
                      fileName: "app/components/routes/index/Main.tsx",
                      lineNumber: 58,
                      columnNumber: 10
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/routes/index/Main.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/routes/index/Main.tsx",
                  lineNumber: 40,
                  columnNumber: 8
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/routes/index/Main.tsx",
                lineNumber: 39,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react29.WrapItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                import_react29.Button,
                {
                  as: import_react29.Link,
                  rounded: "xl",
                  bg: "alpha",
                  href: config.discordServerInvite,
                  variant: "solid",
                  transform: "auto-gpu",
                  _active: { scale: 0.9 },
                  _hover: { textDecor: "none", bg: "alpha100" },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react29.HStack, { spacing: 2, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react30.Icon, { as: import_bs.BsFillPeopleFill }, void 0, !1, {
                      fileName: "app/components/routes/index/Main.tsx",
                      lineNumber: 74,
                      columnNumber: 10
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react29.Text, { fontWeight: 600, children: "Need help?" }, void 0, !1, {
                      fileName: "app/components/routes/index/Main.tsx",
                      lineNumber: 75,
                      columnNumber: 10
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/routes/index/Main.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/routes/index/Main.tsx",
                  lineNumber: 63,
                  columnNumber: 8
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/routes/index/Main.tsx",
                lineNumber: 62,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react29.WrapItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                import_react29.Button,
                {
                  as: import_react29.Link,
                  rounded: "xl",
                  bg: "alpha",
                  transform: "auto-gpu",
                  _active: { scale: 0.9 },
                  href: config.topggVote,
                  variant: "solid",
                  _hover: { textDecor: "none", bg: "alpha100" },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react29.HStack, { spacing: 2, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                      import_react29.Image,
                      {
                        src: "/topgg.svg",
                        h: "19px",
                        alt: "top.gg logo"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/routes/index/Main.tsx",
                        lineNumber: 91,
                        columnNumber: 10
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react29.Text, { fontWeight: 600, children: "Vote" }, void 0, !1, {
                      fileName: "app/components/routes/index/Main.tsx",
                      lineNumber: 96,
                      columnNumber: 10
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/routes/index/Main.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/routes/index/Main.tsx",
                  lineNumber: 80,
                  columnNumber: 8
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/routes/index/Main.tsx",
                lineNumber: 79,
                columnNumber: 7
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/routes/index/Main.tsx",
              lineNumber: 38,
              columnNumber: 6
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/routes/index/Main.tsx",
            lineNumber: 31,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            import_react29.Image,
            {
              h: "250px",
              src: "/wampas.svg",
              draggable: !1,
              alt: "Wampas logo"
            },
            void 0,
            !1,
            {
              fileName: "app/components/routes/index/Main.tsx",
              lineNumber: 102,
              columnNumber: 5
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/routes/index/Main.tsx",
          lineNumber: 30,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          import_framer_motion4.motion.div,
          {
            style: { bottom: "-50px", position: "absolute" },
            initial: { y: 80, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            transition: { ease: config.ease, duration: 1 },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(StrokeHeading, { children: "Explore" }, void 0, !1, {
              fileName: "app/components/routes/index/Main.tsx",
              lineNumber: 116,
              columnNumber: 5
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/routes/index/Main.tsx",
            lineNumber: 109,
            columnNumber: 4
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/routes/index/Main.tsx",
      lineNumber: 23,
      columnNumber: 3
    },
    this
  );
}

// app/components/routes/index/Stats.tsx
var import_react32 = require("@chakra-ui/react"), import_react33 = require("@remix-run/react"), import_react34 = require("react");

// app/components/routes/index/defer/Error.tsx
var import_react31 = require("@chakra-ui/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function ErrorDeferElement() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    import_react31.Flex,
    {
      rounded: "xl",
      border: "2px solid rgba(200, 59, 101, 0.2)",
      bg: "rgba(200, 59, 101, 0.2)",
      p: 5,
      w: "100%",
      justifyContent: "center",
      alignItems: "center",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react31.Text, { fontWeight: 600, children: [
        "Failed to load bot stats ",
        ">_<"
      ] }, void 0, !0, {
        fileName: "app/components/routes/index/defer/Error.tsx",
        lineNumber: 14,
        columnNumber: 4
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/routes/index/defer/Error.tsx",
      lineNumber: 5,
      columnNumber: 3
    },
    this
  );
}

// app/components/routes/index/Stats.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function Stats() {
  let { stats } = (0, import_react33.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    import_react32.VStack,
    {
      spacing: 5,
      pt: 10,
      px: 4,
      pos: "relative",
      justifyContent: "center",
      alignItems: "center",
      w: "100%",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react32.Heading, { alignSelf: "start", ml: 2, children: "Bot statistics" }, void 0, !1, {
          fileName: "app/components/routes/index/Stats.tsx",
          lineNumber: 42,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react32.Stack, { direction: { base: "column", md: "row" }, w: "100%", children: [
          {
            id: 0,
            title: "Server count",
            stat: "server_count"
          },
          {
            id: 1,
            title: "Total interactions made",
            stat: "totalChecks"
          },
          {
            id: 2,
            title: "Total chars checked",
            stat: "totalChars"
          },
          {
            id: 3,
            title: "Total words checked",
            stat: "totalWords"
          }
        ].map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react32.Flex, { flexDir: "row", w: "100%", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react32.Flex, { h: "100%", w: "3px", bg: "text", opacity: 0.15 }, void 0, !1, {
            fileName: "app/components/routes/index/Stats.tsx",
            lineNumber: 53,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react32.VStack, { alignItems: "start", w: "100%", p: 3, spacing: 2, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              import_react34.Suspense,
              {
                fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react32.Flex, { w: "100px", h: "24px", bg: "alpha100" }, void 0, !1, {
                  fileName: "app/components/routes/index/Stats.tsx",
                  lineNumber: 57,
                  columnNumber: 10
                }, this),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                  import_react33.Await,
                  {
                    resolve: stats,
                    errorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ErrorDeferElement, {}, void 0, !1, {
                      fileName: "app/components/routes/index/Stats.tsx",
                      lineNumber: 62,
                      columnNumber: 24
                    }, this),
                    children: (stats2) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react32.Heading, { fontSize: "xl", children: [
                      stats2[i.stat],
                      "+"
                    ] }, void 0, !0, {
                      fileName: "app/components/routes/index/Stats.tsx",
                      lineNumber: 65,
                      columnNumber: 11
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/routes/index/Stats.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/routes/index/Stats.tsx",
                lineNumber: 55,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react32.Text, { fontWeight: 300, color: "textSec", children: i.title }, void 0, !1, {
              fileName: "app/components/routes/index/Stats.tsx",
              lineNumber: 71,
              columnNumber: 8
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/routes/index/Stats.tsx",
            lineNumber: 54,
            columnNumber: 7
          }, this)
        ] }, i.id, !0, {
          fileName: "app/components/routes/index/Stats.tsx",
          lineNumber: 52,
          columnNumber: 6
        }, this)) }, void 0, !1, {
          fileName: "app/components/routes/index/Stats.tsx",
          lineNumber: 50,
          columnNumber: 4
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/routes/index/Stats.tsx",
      lineNumber: 33,
      columnNumber: 3
    },
    this
  );
}

// app/routes/index.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
async function loader2() {
  let stats = (0, import_node3.fetch)("http://localhost:3006").then((res) => res.json());
  return (0, import_node3.defer)({ stats });
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    import_react35.VStack,
    {
      spacing: "16",
      maxW: "1000px",
      w: "100%",
      mx: "auto",
      alignItems: "start",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Main, {}, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 27,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Stats, {}, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 29,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react35.Flex, { px: 4, w: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react35.Divider, { px: 4 }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 32,
          columnNumber: 5
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 31,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(About, {}, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 35,
          columnNumber: 4
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/index.tsx",
      lineNumber: 20,
      columnNumber: 3
    },
    this
  );
}

// app/routes/tos.tsx
var tos_exports = {};
__export(tos_exports, {
  default: () => tos
});
var import_icons5 = require("@chakra-ui/icons"), import_react36 = require("@chakra-ui/react");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function tos() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    import_react36.VStack,
    {
      px: 4,
      spacing: "10",
      maxW: "1000px",
      w: "100%",
      mx: "auto",
      alignItems: "start",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          import_react36.Button,
          {
            as: Link_default,
            to: "/",
            rounded: "xl",
            variant: "ghost",
            bg: "alpha",
            _hover: { bg: "alpha200", textDecor: "none" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.HStack, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_icons5.ArrowBackIcon, {}, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 31,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Text, { fontWeight: 500, children: "Go back" }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 32,
                columnNumber: 6
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/tos.tsx",
              lineNumber: 30,
              columnNumber: 5
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/tos.tsx",
            lineNumber: 22,
            columnNumber: 4
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Heading, { as: "h1", children: "Terms of service" }, void 0, !1, {
          fileName: "app/routes/tos.tsx",
          lineNumber: 35,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          import_react36.VStack,
          {
            spacing: 5,
            alignItems: "start",
            sx: {
              "> h2": {
                fontSize: "xl"
              },
              "> p": {
                fontSize: "0.9rem"
              }
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Heading, { children: "Website" }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 49,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Divider, {}, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 50,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Heading, { children: "Acceptance of Terms" }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 51,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Text, { children: "By accessing and using our website, you agree to be bound by these terms and conditions. If you do not agree to these terms, you should not use our website." }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 52,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Heading, { children: "Use of Our Website" }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 58,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Text, { children: "Our website is intended for informational purposes only. You may use our website for personal, non-commercial purposes only. You may not use our website for any illegal or unauthorized purpose." }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 59,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Heading, { children: "Limitations of Liability" }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 66,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Text, { children: "We are not liable for any damages or losses arising out of or in connection with the use of our website. We do not warrant that our website will be uninterrupted or error-free." }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 67,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Heading, { children: "Ownership and Copyright" }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 74,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Text, { children: "All content on our website is owned by us or our licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content on our website without our prior written consent." }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 75,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Heading, { children: "Privacy Policy" }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 83,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Text, { children: "We take your privacy seriously and have a separate privacy policy that governs how we collect, use, and protect your personal information. Please refer to our privacy policy for more information." }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 84,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Heading, { children: "Changes to Terms of Service" }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 91,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Text, { children: "We may update these terms of service from time to time. By continuing to use our website after any such changes, you agree to be bound by the updated terms of service." }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 92,
                columnNumber: 5
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/tos.tsx",
            lineNumber: 37,
            columnNumber: 4
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          import_react36.VStack,
          {
            spacing: 5,
            alignItems: "start",
            sx: {
              "> h2": {
                fontSize: "xl"
              },
              "> p": {
                fontSize: "0.9rem"
              }
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Heading, { children: [
                "Bot ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("i", { children: "Text Tune" }, void 0, !1, {
                  fileName: "app/routes/tos.tsx",
                  lineNumber: 112,
                  columnNumber: 10
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 111,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Divider, {}, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 114,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Heading, { children: "Limitations" }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 115,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Text, { children: "Bot has daily limits of one guild per day. Exacly: 25 spell check, 15 grammar check, 500 definitions, 500 synonyms. Do not spam bot interactions." }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 116,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Heading, { children: "Privacy" }, void 0, !1, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 121,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Text, { children: [
                "Bot ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("b", { children: "does not" }, void 0, !1, {
                  fileName: "app/routes/tos.tsx",
                  lineNumber: 123,
                  columnNumber: 10
                }, this),
                " store message content. Instead of this, it stores text or word length. According to this, as you can see, we store every interaction due to limitations of APIs, which we use. We need to limit guild usage to protect from spammers and other bugs."
              ] }, void 0, !0, {
                fileName: "app/routes/tos.tsx",
                lineNumber: 122,
                columnNumber: 5
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/tos.tsx",
            lineNumber: 99,
            columnNumber: 4
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/tos.tsx",
      lineNumber: 14,
      columnNumber: 3
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "b4c284c3", entry: { module: "/build/entry.client-4IELSTZ4.js", imports: ["/build/_shared/chunk-HJ5DXMPP.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-6PE6G3AB.js", imports: ["/build/_shared/chunk-UYUDCE6N.js", "/build/_shared/chunk-WCX52NEA.js", "/build/_shared/chunk-KPIUAXEP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-ULHPX24E.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tos": { id: "routes/tos", parentId: "root", path: "tos", index: void 0, caseSensitive: void 0, module: "/build/routes/tos-KOCU5VSQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-B4C284C3.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/tos": {
    id: "routes/tos",
    parentId: "root",
    path: "tos",
    index: void 0,
    caseSensitive: void 0,
    module: tos_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
