import {
  DiscordIcon,
  config
} from "/build/_shared/chunk-UYUDCE6N.js";
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  motion,
  useColorModeValue
} from "/build/_shared/chunk-KPIUAXEP.js";
import {
  Await,
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-HJ5DXMPP.js";

// app/components/layout/StrokeHeading.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function StrokeHeading({
  children,
  ...props
}) {
  const color = useColorModeValue("#5865F2", "#5865F2");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Heading,
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
    false,
    {
      fileName: "app/components/layout/StrokeHeading.tsx",
      lineNumber: 16,
      columnNumber: 4
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/layout/StrokeHeading.tsx",
    lineNumber: 15,
    columnNumber: 3
  }, this);
}

// app/components/routes/index/About.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { px: 4, pos: "relative", w: "100%", flexDir: "column", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VStack, { w: "100%", alignItems: "start", spacing: 10, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VStack, { spacing: 3, alignItems: "start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { fontSize: "xl", fontWeight: 600, children: "Hi, I'm bot to help you improve your english skills or to correct others!" }, void 0, false, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 20,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: "I've been designed to easily check grammar, spelling, or anything else without the need to copy and paste text into Google. So, let's get started by showing you some of my functionalities." }, void 0, false, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 24,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/routes/index/About.tsx",
        lineNumber: 19,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, {}, void 0, false, {
        fileName: "app/components/routes/index/About.tsx",
        lineNumber: 32,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VStack, { spacing: 3, alignItems: "start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { fontSize: "xl", fontWeight: 600, children: "Context Menu" }, void 0, false, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 37,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: [
          "You can check the spelling and grammar right clicking on message, then ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("b", { children: "Apps" }, void 0, false, {
            fileName: "app/components/routes/index/About.tsx",
            lineNumber: 42,
            columnNumber: 21
          }, this),
          " ",
          ">",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("b", { children: "Check spelling/grammar" }, void 0, false, {
            fileName: "app/components/routes/index/About.tsx",
            lineNumber: 43,
            columnNumber: 7
          }, this),
          "."
        ] }, void 0, true, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 40,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { as: "video", rounded: "md", controls: true, autoPlay: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("source", { src: "/discord.mp4", type: "video/mp4" }, void 0, false, {
            fileName: "app/components/routes/index/About.tsx",
            lineNumber: 46,
            columnNumber: 7
          }, this),
          "Your browser does not support videos lmao"
        ] }, void 0, true, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 45,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/routes/index/About.tsx",
        lineNumber: 36,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, {}, void 0, false, {
        fileName: "app/components/routes/index/About.tsx",
        lineNumber: 51,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VStack, { spacing: 3, alignItems: "start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { fontSize: "xl", fontWeight: 600, children: "Slash commands" }, void 0, false, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 56,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: "Bot contains total of 5 commands." }, void 0, false, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 59,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Badge, { children: "/grammarcheck" }, void 0, false, {
            fileName: "app/components/routes/index/About.tsx",
            lineNumber: 62,
            columnNumber: 7
          }, this),
          " - utilizes ChatGPT, a highly accurate and reliable language model, to analyze and provide feedback on the grammar of any given text. With this feature, users can quickly and easily ensure that their written communications are error-free and professional. ChatGPT's extensive training on vast amounts of text data enables it to identify even subtle errors in grammar, punctuation, and syntax, and provide helpful suggestions for how to correct them."
        ] }, void 0, true, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 61,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Badge, { children: "/spellcheck" }, void 0, false, {
            fileName: "app/components/routes/index/About.tsx",
            lineNumber: 74,
            columnNumber: 7
          }, this),
          " - useful tool for ensuring that written communications are free of spelling errors. Powered by advanced algorithms, this feature checks the spelling of any given text and generates buttons below the embed with suggested words for correction. This makes it easy for users to quickly and easily correct any spelling mistakes and produce error-free written content."
        ] }, void 0, true, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 73,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Badge, { children: "/definition" }, void 0, false, {
            fileName: "app/components/routes/index/About.tsx",
            lineNumber: 85,
            columnNumber: 7
          }, this),
          " - allows users to easily check the definition of any word. When a word is entered, this feature generates a definition and part of speech, providing users with a comprehensive understanding of the word's meaning and usage."
        ] }, void 0, true, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 84,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Badge, { children: "/synonyms " }, void 0, false, {
            fileName: "app/components/routes/index/About.tsx",
            lineNumber: 93,
            columnNumber: 7
          }, this),
          " - provides a comprehensive list of all possible synonyms for any word you enter."
        ] }, void 0, true, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 92,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Badge, { children: "/help " }, void 0, false, {
            fileName: "app/components/routes/index/About.tsx",
            lineNumber: 98,
            columnNumber: 7
          }, this),
          " - help command that gives some help if you get stuck."
        ] }, void 0, true, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 97,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/routes/index/About.tsx",
        lineNumber: 55,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/routes/index/About.tsx",
      lineNumber: 16,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      motion.div,
      {
        style: {
          display: "flex",
          justifyContent: "center",
          marginTop: "64px"
        },
        initial: { y: -80, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { ease: config.ease, duration: 1 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StrokeHeading, { textTransform: "none", children: "INVITE ME ^3^" }, void 0, false, {
          fileName: "app/components/routes/index/About.tsx",
          lineNumber: 115,
          columnNumber: 5
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/routes/index/About.tsx",
        lineNumber: 104,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/routes/index/About.tsx",
    lineNumber: 15,
    columnNumber: 3
  }, this);
}

// node_modules/react-icons/lib/esm/iconBase.js
var import_react4 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
var import_react3 = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react3.default.createContext && import_react3.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react4.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react4.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react4.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react4.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react4.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/bs/index.esm.js
function BsFillPeopleFill(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" } }] })(props);
}

// app/components/routes/index/Main.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Main() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    Flex,
    {
      px: 4,
      pos: "relative",
      minH: "calc(100vh - 140px)",
      justifyContent: "center",
      alignItems: "center",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Stack, { direction: { base: "column", md: "row" }, spacing: 10, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(VStack, { w: "100%", alignItems: "start", spacing: 5, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Heading, { fontSize: "5xl", children: "Wampas" }, void 0, false, {
              fileName: "app/components/routes/index/Main.tsx",
              lineNumber: 32,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { lineHeight: "170%", children: "Welcome to Wampas Games Bot, your go-to companion for endless fun and excitement on Discord! This free and user-friendly bot is designed with simplicity in mind, ensuring that everyone can join in on the entertainment." }, void 0, false, {
              fileName: "app/components/routes/index/Main.tsx",
              lineNumber: 33,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Wrap, { spacing: 3, w: "100%", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                Button,
                {
                  as: Link,
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
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HStack, { h: "100%", alignItems: "center", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DiscordIcon, {}, void 0, false, {
                      fileName: "app/components/routes/index/Main.tsx",
                      lineNumber: 57,
                      columnNumber: 10
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { children: "Invite bot to your server" }, void 0, false, {
                      fileName: "app/components/routes/index/Main.tsx",
                      lineNumber: 58,
                      columnNumber: 10
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/routes/index/Main.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/routes/index/Main.tsx",
                  lineNumber: 40,
                  columnNumber: 8
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/routes/index/Main.tsx",
                lineNumber: 39,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                Button,
                {
                  as: Link,
                  rounded: "xl",
                  bg: "alpha",
                  href: config.discordServerInvite,
                  variant: "solid",
                  transform: "auto-gpu",
                  _active: { scale: 0.9 },
                  _hover: { textDecor: "none", bg: "alpha100" },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HStack, { spacing: 2, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { as: BsFillPeopleFill }, void 0, false, {
                      fileName: "app/components/routes/index/Main.tsx",
                      lineNumber: 74,
                      columnNumber: 10
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { fontWeight: 600, children: "Need help?" }, void 0, false, {
                      fileName: "app/components/routes/index/Main.tsx",
                      lineNumber: 75,
                      columnNumber: 10
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/routes/index/Main.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/routes/index/Main.tsx",
                  lineNumber: 63,
                  columnNumber: 8
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/routes/index/Main.tsx",
                lineNumber: 62,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                Button,
                {
                  as: Link,
                  rounded: "xl",
                  bg: "alpha",
                  transform: "auto-gpu",
                  _active: { scale: 0.9 },
                  href: config.topggVote,
                  variant: "solid",
                  _hover: { textDecor: "none", bg: "alpha100" },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HStack, { spacing: 2, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                      Image,
                      {
                        src: "/topgg.svg",
                        h: "19px",
                        alt: "top.gg logo"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/routes/index/Main.tsx",
                        lineNumber: 91,
                        columnNumber: 10
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { fontWeight: 600, children: "Vote" }, void 0, false, {
                      fileName: "app/components/routes/index/Main.tsx",
                      lineNumber: 96,
                      columnNumber: 10
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/routes/index/Main.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/routes/index/Main.tsx",
                  lineNumber: 80,
                  columnNumber: 8
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/routes/index/Main.tsx",
                lineNumber: 79,
                columnNumber: 7
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/routes/index/Main.tsx",
              lineNumber: 38,
              columnNumber: 6
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/routes/index/Main.tsx",
            lineNumber: 31,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            Image,
            {
              h: "250px",
              src: "/wampas.svg",
              draggable: false,
              alt: "Wampas logo"
            },
            void 0,
            false,
            {
              fileName: "app/components/routes/index/Main.tsx",
              lineNumber: 102,
              columnNumber: 5
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/routes/index/Main.tsx",
          lineNumber: 30,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          motion.div,
          {
            style: { bottom: "-50px", position: "absolute" },
            initial: { y: 80, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: true },
            transition: { ease: config.ease, duration: 1 },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(StrokeHeading, { children: "Explore" }, void 0, false, {
              fileName: "app/components/routes/index/Main.tsx",
              lineNumber: 116,
              columnNumber: 5
            }, this)
          },
          void 0,
          false,
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
    true,
    {
      fileName: "app/components/routes/index/Main.tsx",
      lineNumber: 23,
      columnNumber: 3
    },
    this
  );
}

// app/components/routes/index/Stats.tsx
var import_react10 = __toESM(require_react());

// app/components/routes/index/defer/Error.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function ErrorDeferElement() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    Flex,
    {
      rounded: "xl",
      border: "2px solid rgba(200, 59, 101, 0.2)",
      bg: "rgba(200, 59, 101, 0.2)",
      p: 5,
      w: "100%",
      justifyContent: "center",
      alignItems: "center",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { fontWeight: 600, children: [
        "Failed to load bot stats ",
        ">_<"
      ] }, void 0, true, {
        fileName: "app/components/routes/index/defer/Error.tsx",
        lineNumber: 14,
        columnNumber: 4
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/routes/index/defer/Error.tsx",
      lineNumber: 5,
      columnNumber: 3
    },
    this
  );
}

// app/components/routes/index/Stats.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Stats() {
  const { stats } = useLoaderData();
  const items = [
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
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    VStack,
    {
      spacing: 5,
      pt: 10,
      px: 4,
      pos: "relative",
      justifyContent: "center",
      alignItems: "center",
      w: "100%",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Heading, { alignSelf: "start", ml: 2, children: "Bot statistics" }, void 0, false, {
          fileName: "app/components/routes/index/Stats.tsx",
          lineNumber: 42,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Stack, { direction: { base: "column", md: "row" }, w: "100%", children: items.map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Flex, { flexDir: "row", w: "100%", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Flex, { h: "100%", w: "3px", bg: "text", opacity: 0.15 }, void 0, false, {
            fileName: "app/components/routes/index/Stats.tsx",
            lineNumber: 53,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(VStack, { alignItems: "start", w: "100%", p: 3, spacing: 2, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react10.Suspense,
              {
                fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Flex, { w: "100px", h: "24px", bg: "alpha100" }, void 0, false, {
                  fileName: "app/components/routes/index/Stats.tsx",
                  lineNumber: 57,
                  columnNumber: 10
                }, this),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  Await,
                  {
                    resolve: stats,
                    errorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ErrorDeferElement, {}, void 0, false, {
                      fileName: "app/components/routes/index/Stats.tsx",
                      lineNumber: 62,
                      columnNumber: 24
                    }, this),
                    children: (stats2) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Heading, { fontSize: "xl", children: [
                      stats2[i.stat],
                      "+"
                    ] }, void 0, true, {
                      fileName: "app/components/routes/index/Stats.tsx",
                      lineNumber: 65,
                      columnNumber: 11
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/routes/index/Stats.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/routes/index/Stats.tsx",
                lineNumber: 55,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { fontWeight: 300, color: "textSec", children: i.title }, void 0, false, {
              fileName: "app/components/routes/index/Stats.tsx",
              lineNumber: 71,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/routes/index/Stats.tsx",
            lineNumber: 54,
            columnNumber: 7
          }, this)
        ] }, i.id, true, {
          fileName: "app/components/routes/index/Stats.tsx",
          lineNumber: 52,
          columnNumber: 6
        }, this)) }, void 0, false, {
          fileName: "app/components/routes/index/Stats.tsx",
          lineNumber: 50,
          columnNumber: 4
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/routes/index/Stats.tsx",
      lineNumber: 33,
      columnNumber: 3
    },
    this
  );
}

// app/routes/index.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    VStack,
    {
      spacing: "16",
      maxW: "1000px",
      w: "100%",
      mx: "auto",
      alignItems: "start",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Main, {}, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 27,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Stats, {}, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 29,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Flex, { px: 4, w: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Divider, { px: 4 }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 32,
          columnNumber: 5
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 31,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(About, {}, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 35,
          columnNumber: 4
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/index.tsx",
      lineNumber: 20,
      columnNumber: 3
    },
    this
  );
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-ULHPX24E.js.map
