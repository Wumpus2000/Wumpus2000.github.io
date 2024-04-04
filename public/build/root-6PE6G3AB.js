import {
  DiscordIcon,
  config
} from "/build/_shared/chunk-UYUDCE6N.js";
import {
  AddIcon,
  ArrowBackIcon,
  Link_default,
  MoonIcon,
  SunIcon
} from "/build/_shared/chunk-WCX52NEA.js";
import {
  AnimatePresence,
  Box,
  Button,
  ChakraBaseProvider,
  DarkMode,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  Tooltip,
  VStack,
  cookieStorageManager,
  cookieStorageManagerSSR,
  extendBaseTheme,
  mergeThemeOverride,
  mode,
  motion,
  theme,
  useColorMode,
  useColorModeValue,
  useConst,
  useEventListener
} from "/build/_shared/chunk-KPIUAXEP.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  __toESM,
  init_dist,
  require_jsx_dev_runtime,
  require_react,
  useCatch,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-HJ5DXMPP.js";

// app/components/utils/helpers/hooks/useActionKey.ts
var import_react = __toESM(require_react());
function useActionKey() {
  const [actionKey, setActionKey] = (0, import_react.useState)("Ctrl");
  (0, import_react.useEffect)(() => {
    if (typeof navigator === "undefined")
      return;
    const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
    if (isMac) {
      setActionKey("\u2318");
    }
  }, []);
  return actionKey;
}

// app/components/layout/Header/ToggleTheme.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ThemeToggle() {
  const color = useColorModeValue("purple.800", "yellow.400");
  const bgColor = useColorModeValue(
    "rgba(68, 51, 122, .1)",
    "rgba(236, 201, 75,.1)"
  );
  const bgColorActive = useColorModeValue(
    "rgba(68, 51, 122, .2)",
    "rgba(236, 201, 75,.2)"
  );
  const { colorMode, toggleColorMode } = useColorMode();
  useEventListener("keydown", (event) => {
    var _a;
    const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator == null ? void 0 : navigator.platform);
    const hotkey = isMac ? "metaKey" : "ctrlKey";
    if (((_a = event == null ? void 0 : event.key) == null ? void 0 : _a.toLowerCase()) === "i" && event[hotkey]) {
      event.preventDefault();
      toggleColorMode();
    }
  });
  const actionKey = useActionKey();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.01 },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Tooltip,
        {
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { alignItems: "center", children: [
            "Toggle ",
            colorMode == "light" ? "Dark" : "Light",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DarkMode, { children: [
              "(",
              actionKey,
              " + i)"
            ] }, void 0, true, {
              fileName: "app/components/layout/Header/ToggleTheme.tsx",
              lineNumber: 50,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/layout/Header/ToggleTheme.tsx",
            lineNumber: 48,
            columnNumber: 7
          }, this),
          openDelay: 1e3,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            IconButton,
            {
              role: "group",
              _hover: { bg: bgColor, color },
              _active: { bg: bgColorActive, scale: 0.9 },
              rounded: "xl",
              bg: "transparent",
              transform: "auto-gpu",
              icon: colorMode == "light" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                MoonIcon,
                {
                  _groupHover: { rotate: "-100deg" },
                  transition: "transform .4s, background .2s",
                  transform: "auto"
                },
                void 0,
                false,
                {
                  fileName: "app/components/layout/Header/ToggleTheme.tsx",
                  lineNumber: 64,
                  columnNumber: 9
                },
                this
              ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                SunIcon,
                {
                  _groupHover: {
                    rotate: "50deg",
                    scale: 1.05
                  },
                  transition: "transform .4s, background .2s",
                  transform: "auto"
                },
                void 0,
                false,
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
            false,
            {
              fileName: "app/components/layout/Header/ToggleTheme.tsx",
              lineNumber: 55,
              columnNumber: 6
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/layout/Header/ToggleTheme.tsx",
          lineNumber: 46,
          columnNumber: 5
        },
        this
      )
    },
    colorMode,
    false,
    {
      fileName: "app/components/layout/Header/ToggleTheme.tsx",
      lineNumber: 39,
      columnNumber: 4
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/layout/Header/ToggleTheme.tsx",
    lineNumber: 38,
    columnNumber: 3
  }, this);
}

// app/components/layout/Header/InviteButton.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function InviteButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    Link,
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
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HStack, { h: "100%", alignItems: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DiscordIcon, {}, void 0, false, {
          fileName: "app/components/layout/Header/InviteButton.tsx",
          lineNumber: 22,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: "Invite bot" }, void 0, false, {
          fileName: "app/components/layout/Header/InviteButton.tsx",
          lineNumber: 23,
          columnNumber: 5
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout/Header/InviteButton.tsx",
        lineNumber: 21,
        columnNumber: 4
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/layout/Header/InviteButton.tsx",
      lineNumber: 7,
      columnNumber: 3
    },
    this
  );
}

// app/components/layout/Header/Header.tsx
var import_react8 = __toESM(require_react());

// app/components/layout/Header/VoteButton.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function VoteButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    Button,
    {
      as: Link,
      href: config.topggVote,
      _hover: { textDecor: "none", bg: "alpha" },
      transform: "auto-gpu",
      _active: { bg: "alpha100", scale: 0.9 },
      rounded: "xl",
      bg: "transparent",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { flexDir: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HStack, { spacing: 2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Image, { src: "/topgg.svg", h: "19px", alt: "top.gg logo" }, void 0, false, {
          fileName: "app/components/layout/Header/VoteButton.tsx",
          lineNumber: 17,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { fontWeight: 600, children: "Vote" }, void 0, false, {
          fileName: "app/components/layout/Header/VoteButton.tsx",
          lineNumber: 18,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout/Header/VoteButton.tsx",
        lineNumber: 16,
        columnNumber: 5
      }, this) }, void 0, false, {
        fileName: "app/components/layout/Header/VoteButton.tsx",
        lineNumber: 15,
        columnNumber: 4
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/layout/Header/VoteButton.tsx",
      lineNumber: 6,
      columnNumber: 3
    },
    this
  );
}

// app/components/layout/Header/Logo.tsx
var import_react6 = __toESM(require_react());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function Logo() {
  const [hovered, setHovered] = (0, import_react6.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    Link_default,
    {
      "aria-label": "Homepage",
      to: "/",
      alignItems: "center",
      _hover: { textDecor: "none" },
      role: "group",
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Heading, { as: "h1", fontSize: "2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HStack, { spacing: 3, alignItems: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { flexDir: "column", alignItems: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            Image,
            {
              src: "/Wampas.svg",
              h: "25px",
              w: "40px",
              alt: "Wampas keyboard logo"
            },
            void 0,
            false,
            {
              fileName: "app/components/layout/Header/Logo.tsx",
              lineNumber: 22,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AnimatePresence, { mode: "wait", children: hovered && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            motion.div,
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
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { h: "15px", w: "10px", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  "svg",
                  {
                    id: "Layer_1",
                    "data-name": "Layer 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 180.82 120.7",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                        "clipPath",
                        {
                          id: "clip-path",
                          transform: "translate(-241.44 -482.56)",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                            "rect",
                            {
                              width: "663.69",
                              height: "633.52",
                              style: {
                                fill: "none"
                              }
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/layout/Header/Logo.tsx",
                              lineNumber: 57,
                              columnNumber: 14
                            },
                            this
                          )
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/layout/Header/Logo.tsx",
                          lineNumber: 53,
                          columnNumber: 13
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/components/layout/Header/Logo.tsx",
                        lineNumber: 52,
                        columnNumber: 12
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                        "g",
                        {
                          style: {
                            clipPath: "url(#clip-path)"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                            "path",
                            {
                              d: "M353.3,491.4a30.44,30.44,0,0,0-42.9,0l-60.33,60.34A30.33,30.33,0,0,0,293,594.63l38.89-39.24,38.89,39.24a30.33,30.33,0,0,0,42.89-42.89Z",
                              transform: "translate(-241.44 -482.56)",
                              style: {
                                fill: "#5865F2"
                              }
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/layout/Header/Logo.tsx",
                              lineNumber: 71,
                              columnNumber: 13
                            },
                            this
                          )
                        },
                        void 0,
                        false,
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
                  true,
                  {
                    fileName: "app/components/layout/Header/Logo.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  "svg",
                  {
                    id: "Layer_1",
                    "data-name": "Layer 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 180.82 120.7",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                        "clipPath",
                        {
                          id: "clip-path",
                          transform: "translate(-241.44 -482.56)",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                            "rect",
                            {
                              width: "663.69",
                              height: "633.52",
                              style: {
                                fill: "none"
                              }
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/layout/Header/Logo.tsx",
                              lineNumber: 91,
                              columnNumber: 14
                            },
                            this
                          )
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/layout/Header/Logo.tsx",
                          lineNumber: 87,
                          columnNumber: 13
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/components/layout/Header/Logo.tsx",
                        lineNumber: 86,
                        columnNumber: 12
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                        "g",
                        {
                          style: {
                            clipPath: "url(#clip-path)"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                            "path",
                            {
                              d: "M353.3,491.4a30.44,30.44,0,0,0-42.9,0l-60.33,60.34A30.33,30.33,0,0,0,293,594.63l38.89-39.24,38.89,39.24a30.33,30.33,0,0,0,42.89-42.89Z",
                              transform: "translate(-241.44 -482.56)",
                              style: {
                                fill: "#5865F2"
                              }
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/layout/Header/Logo.tsx",
                              lineNumber: 105,
                              columnNumber: 13
                            },
                            this
                          )
                        },
                        void 0,
                        false,
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
                  true,
                  {
                    fileName: "app/components/layout/Header/Logo.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/components/layout/Header/Logo.tsx",
                lineNumber: 45,
                columnNumber: 10
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/layout/Header/Logo.tsx",
              lineNumber: 30,
              columnNumber: 9
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/layout/Header/Logo.tsx",
            lineNumber: 28,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/layout/Header/Logo.tsx",
          lineNumber: 21,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { children: "Wampas" }, void 0, false, {
          fileName: "app/components/layout/Header/Logo.tsx",
          lineNumber: 119,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout/Header/Logo.tsx",
        lineNumber: 20,
        columnNumber: 5
      }, this) }, void 0, false, {
        fileName: "app/components/layout/Header/Logo.tsx",
        lineNumber: 19,
        columnNumber: 4
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/layout/Header/Logo.tsx",
      lineNumber: 10,
      columnNumber: 3
    },
    this
  );
}

// app/components/layout/Header/Header.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Header() {
  useEventListener("keydown", (event) => {
    var _a;
    const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator == null ? void 0 : navigator.platform);
    const hotkey = isMac ? "metaKey" : "ctrlKey";
    if (((_a = event == null ? void 0 : event.key) == null ? void 0 : _a.toLowerCase()) === "i" && event[hotkey]) {
      event.preventDefault();
      toggleColorMode();
    }
  });
  const { toggleColorMode } = useColorMode();
  const [scrollPosition, setScrollPosition] = (0, import_react8.useState)(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  (0, import_react8.useEffect)(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    Flex,
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
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        Flex,
        {
          w: "100%",
          maxW: "1300px",
          px: 4,
          alignItems: "center",
          h: "100%",
          mx: "auto",
          justifyContent: "space-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HStack, { spacing: 5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Logo, {}, void 0, false, {
              fileName: "app/components/layout/Header/Header.tsx",
              lineNumber: 67,
              columnNumber: 6
            }, this) }, void 0, false, {
              fileName: "app/components/layout/Header/Header.tsx",
              lineNumber: 66,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HStack, { spacing: 3, display: { base: "none", sm: "flex" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ThemeToggle, {}, void 0, false, {
                fileName: "app/components/layout/Header/Header.tsx",
                lineNumber: 71,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(VoteButton, {}, void 0, false, {
                fileName: "app/components/layout/Header/Header.tsx",
                lineNumber: 72,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(InviteButton, {}, void 0, false, {
                fileName: "app/components/layout/Header/Header.tsx",
                lineNumber: 73,
                columnNumber: 6
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/layout/Header/Header.tsx",
              lineNumber: 70,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HStack, { spacing: 5, display: { base: "flex", sm: "none" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ThemeToggle, {}, void 0, false, {
                fileName: "app/components/layout/Header/Header.tsx",
                lineNumber: 77,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                Link,
                {
                  href: config.topggVote,
                  boxSize: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    Image,
                    {
                      src: "/topgg.svg",
                      boxSize: "8",
                      alt: "top.gg logo"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/layout/Header/Header.tsx",
                      lineNumber: 85,
                      columnNumber: 7
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/components/layout/Header/Header.tsx",
                  lineNumber: 78,
                  columnNumber: 6
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                Link,
                {
                  href: config.discordBotInvite,
                  boxSize: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AddIcon, {}, void 0, false, {
                    fileName: "app/components/layout/Header/Header.tsx",
                    lineNumber: 98,
                    columnNumber: 7
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/layout/Header/Header.tsx",
                  lineNumber: 91,
                  columnNumber: 6
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/layout/Header/Header.tsx",
              lineNumber: 76,
              columnNumber: 5
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/layout/Header/Header.tsx",
          lineNumber: 57,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/components/layout/Header/Header.tsx",
      lineNumber: 45,
      columnNumber: 3
    },
    this
  );
}

// app/components/layout/BackgroundUtils.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function BackgroundUtils() {
  const { colorMode } = useColorMode();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Flex, { pos: "absolute", zIndex: -1, maxH: "100vh", w: "100%", h: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      Flex,
      {
        w: "100%",
        h: "100%",
        justifyContent: "center",
        alignItems: "center",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          Image,
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
          false,
          {
            fileName: "app/components/layout/BackgroundUtils.tsx",
            lineNumber: 16,
            columnNumber: 6
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/layout/BackgroundUtils.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/layout/BackgroundUtils.tsx",
      lineNumber: 9,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Flex, { pos: "absolute", zIndex: -1, w: "100%", h: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      Flex,
      {
        w: "100%",
        h: "100%",
        bgGradient: `linear(170deg, ${config.color}, transparent)`,
        opacity: colorMode === "light" ? 0.3 : 0.1
      },
      void 0,
      false,
      {
        fileName: "app/components/layout/BackgroundUtils.tsx",
        lineNumber: 28,
        columnNumber: 5
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/layout/BackgroundUtils.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/BackgroundUtils.tsx",
    lineNumber: 8,
    columnNumber: 3
  }, this);
}

// package.json
var package_default = {
  private: true,
  sideEffects: false,
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
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function Footer() {
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Box, { h: "auto", as: "footer", mt: 10, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    Stack,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Box, { pb: 5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(VStack, { align: { base: "center", md: "start" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Flex, { flexDir: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            Text,
            {
              fontWeight: "bold",
              fontSize: "18px",
              fontStyle: "",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Box, { as: "span", color: "brand", children: "W" }, void 0, false, {
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
            true,
            {
              fileName: "app/components/layout/Footer.tsx",
              lineNumber: 32,
              columnNumber: 8
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/layout/Footer.tsx",
            lineNumber: 31,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { color: "textSec", fontWeight: "600", children: [
            "Followe us",
            ":) ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              Link,
              {
                href: "https://x.com/wampas",
                target: "_blank",
                textDecor: "underline",
                variant: "link",
                children: "twitter"
              },
              void 0,
              false,
              {
                fileName: "app/components/layout/Footer.tsx",
                lineNumber: 48,
                columnNumber: 8
              },
              this
            ),
            " "
          ] }, void 0, true, {
            fileName: "app/components/layout/Footer.tsx",
            lineNumber: 46,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { color: "textSec", fontWeight: 600, children: [
            "Made with ",
            `<3`,
            " by",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              Link,
              {
                target: "_blank",
                textDecor: "underline",
                variant: "link",
                href: "https://github.com/ImExoOdeex/",
                children: "imexoodeex"
              },
              void 0,
              false,
              {
                fileName: "app/components/layout/Footer.tsx",
                lineNumber: 59,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/layout/Footer.tsx",
            lineNumber: 57,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/layout/Footer.tsx",
          lineNumber: 30,
          columnNumber: 6
        }, this) }, void 0, false, {
          fileName: "app/components/layout/Footer.tsx",
          lineNumber: 29,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Stack, { direction: "row", spacing: { base: "70px", md: 20 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(VStack, { align: "start", fontWeight: "600", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { fontWeight: "700", children: "Availability" }, void 0, false, {
              fileName: "app/components/layout/Footer.tsx",
              lineNumber: 73,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              Text,
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
              false,
              {
                fileName: "app/components/layout/Footer.tsx",
                lineNumber: 74,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              Text,
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
              false,
              {
                fileName: "app/components/layout/Footer.tsx",
                lineNumber: 84,
                columnNumber: 7
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/layout/Footer.tsx",
            lineNumber: 72,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(VStack, { align: "start", fontWeight: "600", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { fontWeight: "700", children: "Other" }, void 0, false, {
              fileName: "app/components/layout/Footer.tsx",
              lineNumber: 97,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { color: "textSec", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              Link,
              {
                transition: "color .2s",
                _hover: { color: "text", textDecor: "none" },
                as: Link_default,
                prefetch: "intent",
                to: "/tos",
                children: "Terms of service"
              },
              void 0,
              false,
              {
                fileName: "app/components/layout/Footer.tsx",
                lineNumber: 99,
                columnNumber: 8
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/layout/Footer.tsx",
              lineNumber: 98,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { color: "textSec", fontWeight: "600", children: [
              "Copyright \xA9 ",
              new Date().getFullYear()
            ] }, void 0, true, {
              fileName: "app/components/layout/Footer.tsx",
              lineNumber: 109,
              columnNumber: 7
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/layout/Footer.tsx",
            lineNumber: 96,
            columnNumber: 6
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/layout/Footer.tsx",
          lineNumber: 71,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/layout/Footer.tsx",
      lineNumber: 18,
      columnNumber: 4
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/layout/Footer.tsx",
    lineNumber: 17,
    columnNumber: 3
  }, this);
}

// app/components/layout/Layout.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(BackgroundUtils, {}, void 0, false, {
      fileName: "app/components/layout/Layout.tsx",
      lineNumber: 9,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Header, {}, void 0, false, {
      fileName: "app/components/layout/Layout.tsx",
      lineNumber: 11,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Flex, { w: "100%", minH: "calc(100vh - 111px)", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Flex, { flexDir: "column", w: "100%", children }, void 0, false, {
      fileName: "app/components/layout/Layout.tsx",
      lineNumber: 13,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/components/layout/Layout.tsx",
      lineNumber: 12,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/components/layout/Layout.tsx",
      lineNumber: 17,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/Layout.tsx",
    lineNumber: 8,
    columnNumber: 3
  }, this);
}

// app/components/utils/theme.ts
var config2 = {
  initialColorMode: "system",
  useSystemColorMode: true
};
var styles = {
  global: (props) => ({
    body: {
      minH: "100vh",
      bg: mode("bg.100", "bg.900")(props),
      overflowY: "scroll",
      "-webkit-tap-highlight-color": "transparent"
    },
    th: {
      color: mode("#393942cc!important", "#dedef1be!important")(props)
    },
    html: {
      "scroll-behavior": "smooth",
      "*::selection": {
        backgroundColor: "#5865F2",
        color: "white"
      }
    }
  })
};
var colors = {
  brand: {
    "50": "#EFEDF7",
    "100": "#5865F2",
    "200": "#B5ADDB",
    "300": "#978DCD",
    "400": "#7A6DC0",
    "500": "#5D4DB2",
    "600": "#5D4DB2",
    "700": "#5D4DB2",
    "800": "#5D4DB2",
    "900": "#3C4497"
  },
  bg: {
    100: "#FDF9F6",
    900: `#1D1F36`
  },
  sec: {
    100: "#93b8e9",
    900: "#0078D7"
  },
  discord: {
    100: "#5865F2",
    900: "#3C4497"
  }
};
var { Button: Button2, Link: Link2, Heading: Heading2, Tooltip: Tooltip2, Badge, Divider } = theme.components;
var theme2 = extendBaseTheme({
  colors,
  config: config2,
  styles,
  fonts: {
    body: `"Poppins", sans-serif`,
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
    Tooltip: mergeThemeOverride(Tooltip2, {
      baseStyle: {
        bg: "#1d1d22",
        "--tooltip-bg": "#1d1d22",
        _dark: {
          "--tooltip-bg": "#fff",
          bg: "bg.100"
        }
      }
    }),
    Link: mergeThemeOverride(Link2, {
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
});
var theme_default = theme2;

// app/components/utils/helpers/functions/cookiesHelpers.ts
function getCookieWithoutDocument(cname, cookies) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(cookies);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// app/Document.tsx
var import_react15 = __toESM(require_react());
init_dist();
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
function Document({
  children
}) {
  function getColorMode(cookies2) {
    return getCookieWithoutDocument(CHAKRA_COOKIE_COLOR_KEY, cookies2);
  }
  const DEFAULT_COLOR_MODE = "dark";
  const CHAKRA_COOKIE_COLOR_KEY = "chakra-ui-color-mode";
  let { cookies } = useLoaderData();
  if (typeof document !== "undefined") {
    cookies = document.cookie;
  }
  const colorMode = (0, import_react15.useMemo)(() => {
    let color = getColorMode(cookies);
    if (!color && DEFAULT_COLOR_MODE) {
      cookies += ` ${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`;
      color = DEFAULT_COLOR_MODE;
    }
    return color;
  }, [cookies]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "html",
    {
      lang: "en",
      ...colorMode && {
        "data-theme": colorMode,
        style: { colorScheme: colorMode }
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("head", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/Document.tsx",
            lineNumber: 50,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/Document.tsx",
            lineNumber: 51,
            columnNumber: 5
          }, this)
        ] }, void 0, true, {
          fileName: "app/Document.tsx",
          lineNumber: 49,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "body",
          {
            ...colorMode && {
              className: `chakra-ui-${colorMode}`
            },
            children: [
              children,
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ScrollRestoration, {}, void 0, false, {
                fileName: "app/Document.tsx",
                lineNumber: 59,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Scripts, {}, void 0, false, {
                fileName: "app/Document.tsx",
                lineNumber: 60,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(LiveReload, {}, void 0, false, {
                fileName: "app/Document.tsx",
                lineNumber: 61,
                columnNumber: 5
              }, this)
            ]
          },
          void 0,
          true,
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
    true,
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
  const DEFAULT_COLOR_MODE = "dark";
  const CHAKRA_COOKIE_COLOR_KEY = "chakra-ui-color-mode";
  const [cookies, setCookies] = (0, import_react15.useState)("");
  (0, import_react15.useEffect)(() => {
    setCookies(document.cookie);
  }, []);
  const colorMode = (0, import_react15.useMemo)(() => {
    let color = getColorMode(cookies);
    if (!color && DEFAULT_COLOR_MODE) {
      setCookies(`${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`);
      color = DEFAULT_COLOR_MODE;
    }
    return color;
  }, [cookies]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "html",
    {
      lang: "en",
      ...colorMode && {
        "data-theme": colorMode,
        style: { colorScheme: colorMode }
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("head", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/Document.tsx",
            lineNumber: 107,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/Document.tsx",
            lineNumber: 108,
            columnNumber: 5
          }, this)
        ] }, void 0, true, {
          fileName: "app/Document.tsx",
          lineNumber: 106,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "body",
          {
            ...colorMode && {
              className: `chakra-ui-${colorMode}`
            },
            children: [
              children,
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ScrollRestoration, {}, void 0, false, {
                fileName: "app/Document.tsx",
                lineNumber: 116,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Scripts, {}, void 0, false, {
                fileName: "app/Document.tsx",
                lineNumber: 117,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(LiveReload, {}, void 0, false, {
                fileName: "app/Document.tsx",
                lineNumber: 118,
                columnNumber: 5
              }, this)
            ]
          },
          void 0,
          true,
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
    true,
    {
      fileName: "app/Document.tsx",
      lineNumber: 99,
      columnNumber: 3
    },
    this
  );
}

// app/components/layout/boundaries/Catch.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
function Catch() {
  const caught = useCatch();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    VStack,
    {
      spacing: 5,
      w: "100%",
      alignItems: "center",
      justifyContent: "center",
      minH: "calc(100vh - 140px)",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Heading, { as: "h1", fontSize: "3xl", children: [
          caught.statusText,
          " ",
          caught.status
        ] }, void 0, true, {
          fileName: "app/components/layout/boundaries/Catch.tsx",
          lineNumber: 20,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HStack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            Button,
            {
              onClick: () => navigate(-1),
              bg: "alpha",
              _hover: { bg: "alpha200" },
              rounded: "xl",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HStack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ArrowBackIcon, {}, void 0, false, {
                  fileName: "app/components/layout/boundaries/Catch.tsx",
                  lineNumber: 31,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Text, { children: "Go back" }, void 0, false, {
                  fileName: "app/components/layout/boundaries/Catch.tsx",
                  lineNumber: 32,
                  columnNumber: 8
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/layout/boundaries/Catch.tsx",
                lineNumber: 30,
                columnNumber: 7
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/layout/boundaries/Catch.tsx",
              lineNumber: 24,
              columnNumber: 6
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            Button,
            {
              as: Link_default,
              to: "/",
              _hover: { textDecor: "none", bg: "alpha200" },
              bg: "alpha",
              rounded: "xl",
              children: "Go home"
            },
            void 0,
            false,
            {
              fileName: "app/components/layout/boundaries/Catch.tsx",
              lineNumber: 35,
              columnNumber: 6
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/layout/boundaries/Catch.tsx",
          lineNumber: 23,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/layout/boundaries/Catch.tsx",
      lineNumber: 13,
      columnNumber: 4
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/layout/boundaries/Catch.tsx",
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

// app/components/layout/boundaries/Error.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
function Error({ error }) {
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    VStack,
    {
      spacing: 5,
      w: "100%",
      alignItems: "center",
      justifyContent: "center",
      minH: "calc(100vh - 140px)",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Heading, { as: "h1", fontSize: "3xl", children: error.name }, void 0, false, {
          fileName: "app/components/layout/boundaries/Error.tsx",
          lineNumber: 19,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { children: error.message }, void 0, false, {
          fileName: "app/components/layout/boundaries/Error.tsx",
          lineNumber: 22,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(HStack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            Button,
            {
              onClick: () => navigate(-1),
              bg: "alpha",
              _hover: { bg: "alpha200" },
              rounded: "xl",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(HStack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ArrowBackIcon, {}, void 0, false, {
                  fileName: "app/components/layout/boundaries/Error.tsx",
                  lineNumber: 31,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { children: "Go back" }, void 0, false, {
                  fileName: "app/components/layout/boundaries/Error.tsx",
                  lineNumber: 32,
                  columnNumber: 8
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/layout/boundaries/Error.tsx",
                lineNumber: 30,
                columnNumber: 7
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/layout/boundaries/Error.tsx",
              lineNumber: 24,
              columnNumber: 6
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            Button,
            {
              as: Link_default,
              to: "/",
              _hover: { textDecor: "none", bg: "alpha200" },
              bg: "alpha",
              rounded: "xl",
              children: "Go home"
            },
            void 0,
            false,
            {
              fileName: "app/components/layout/boundaries/Error.tsx",
              lineNumber: 35,
              columnNumber: 6
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/layout/boundaries/Error.tsx",
          lineNumber: 23,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/layout/boundaries/Error.tsx",
      lineNumber: 12,
      columnNumber: 4
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/layout/boundaries/Error.tsx",
    lineNumber: 11,
    columnNumber: 3
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  title: "Wampas | Discord Bot",
  robots: "all",
  description: "Wampas discord bot. Spellcheck, grammarcheck, definition, synonyms and more. invite Wampas now to your discord server!",
  keywords: "discord bot, discord, bot, Wampas, Wumpus, fun bot, fun discord bot, Wumpus bot, Wumpus discord bot, Wampas discord bot, Wampas bot, word synonyms, definition, synonyms, slash commands",
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  author: "Wumpus"
});
var links = () => {
  return [
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
};
function App() {
  const { cookies } = useLoaderData();
  const manager = useConst(cookieStorageManagerSSR(cookies));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    ChakraBaseProvider,
    {
      resetCSS: true,
      colorModeManager: manager,
      theme: theme_default,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 5
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/root.tsx",
      lineNumber: 59,
      columnNumber: 4
    },
    this
  ) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 58,
    columnNumber: 3
  }, this);
}
function CatchBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DocumentWoLoader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    ChakraBaseProvider,
    {
      theme: theme_default,
      resetCSS: true,
      colorModeManager: cookieStorageManager,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Catch, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 88,
        columnNumber: 5
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/root.tsx",
      lineNumber: 83,
      columnNumber: 4
    },
    this
  ) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 82,
    columnNumber: 3
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DocumentWoLoader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    ChakraBaseProvider,
    {
      theme: theme_default,
      resetCSS: true,
      colorModeManager: cookieStorageManager,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Error, { error }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 104,
        columnNumber: 5
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/root.tsx",
      lineNumber: 99,
      columnNumber: 4
    },
    this
  ) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 98,
    columnNumber: 3
  }, this);
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-6PE6G3AB.js.map
