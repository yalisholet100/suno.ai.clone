(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    72156: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.unstable_createTheme = void 0),
        (t.unstable_createTheme = (e) => ({
          ...e,
          __type: "prebuilt_appearance",
        }));
    },
    18720: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let r = n(50044);
      r.__exportStar(n(72156), t), r.__exportStar(n(71318), t);
    },
    86677: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.dark = void 0);
      let r = n(72156);
      t.dark = (0, r.unstable_createTheme)({
        variables: {
          colorBackground: "#19191A",
          colorInputBackground: "#19191A",
          colorAlphaShade: "white",
          colorText: "white",
          colorInputText: "white",
          colorShimmer: "rgba(255,255,255,0.36)",
          shadowShimmer: "1px 1px 2px rgba(0,0,0,0.36)",
        },
        elements: {
          providerIcon__apple: { filter: "invert(1)" },
          providerIcon__github: { filter: "invert(1)" },
          activeDeviceIcon: {
            "--cl-chassis-bottom": "#d2d2d2",
            "--cl-chassis-back": "#e6e6e6",
            "--cl-chassis-screen": "#e6e6e6",
            "--cl-screen": "#111111",
          },
        },
      });
    },
    71318: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let r = n(50044);
      r.__exportStar(n(86677), t),
        r.__exportStar(n(14134), t),
        r.__exportStar(n(46183), t);
    },
    46183: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.neobrutalism = void 0);
      let r = n(72156),
        o = {
          boxShadow: "3px 3px 0px #000",
          border: "2px solid #000",
          "&:focus": {
            boxShadow: "4px 4px 0px #000",
            border: "2px solid #000",
            transform: "scale(1.01)",
          },
          "&:active": {
            boxShadow: "2px 2px 0px #000",
            transform: "translate(1px)",
          },
        };
      t.neobrutalism = (0, r.unstable_createTheme)({
        variables: {
          colorPrimary: "#DF1B1B",
          colorTextSecondary: "#000",
          fontWeight: { normal: 500, medium: 600, bold: 700 },
          colorShimmer: "rgba(255,255,255,0.64)",
          shadowShimmer: "2px 2px 0px #000",
        },
        elements: {
          card: { boxShadow: "7px 7px 0px #000", border: "3px solid #000" },
          alternativeMethodsBlockButton: o,
          socialButtonsIconButton: { ...o },
          socialButtonsBlockButton: o,
          profileSectionPrimaryButton: o,
          formButtonPrimary: o,
          navbarButton: o,
          formFieldInput: {
            boxShadow: "3px 3px 0px #000",
            border: "2px solid #000",
            transition: "all 0.2s ease-in-out",
            "&:focus": {
              boxShadow: "4px 4px 0px #000",
              border: "2px solid #000",
              transform: "scale(1.01)",
            },
          },
          dividerLine: { background: "#000" },
          footerActionLink: {
            fontWeight: "600",
            borderBottom: "2px solid",
            "&:focus": { boxShadow: "none" },
          },
        },
      });
    },
    14134: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.shadesOfPurple = void 0);
      let r = n(72156),
        o = n(86677);
      t.shadesOfPurple = (0, r.unstable_createTheme)({
        baseTheme: o.dark,
        variables: {
          colorBackground: "#3f3c77",
          colorPrimary: "#f8d80d",
          colorTextOnPrimaryBackground: "#38375f",
          colorInputText: "#a1fdfe",
          colorShimmer: "rgba(161,253,254,0.36)",
          shadowShimmer: "1px 1px 2px rgba(0,0,0,0.36)",
        },
      });
    },
    96443: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 18085)),
        Promise.resolve().then(n.bind(n, 63530)),
        Promise.resolve().then(n.bind(n, 11507)),
        Promise.resolve().then(n.bind(n, 61726)),
        Promise.resolve().then(n.t.bind(n, 69191, 23)),
        Promise.resolve().then(n.bind(n, 53305)),
        Promise.resolve().then(n.bind(n, 29203)),
        Promise.resolve().then(n.t.bind(n, 54036, 23));
    },
    29203: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return B;
          },
        });
      var r = n(57437),
        o = n(21100),
        i = n(2265),
        a = n(26621),
        l = n(66876),
        c = n(53159),
        s = n(58910),
        u = n(839),
        d = n(44007),
        f = n(83109),
        p = n(66721),
        h = n(98045),
        m = n(53305),
        y = n(25031);
      function x() {
        return (x = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var v = ["shift", "alt", "meta", "mod", "ctrl"],
        b = {
          esc: "escape",
          return: "enter",
          ".": "period",
          ",": "comma",
          "-": "slash",
          " ": "space",
          "`": "backquote",
          "#": "backslash",
          "+": "bracketright",
          ShiftLeft: "shift",
          ShiftRight: "shift",
          AltLeft: "alt",
          AltRight: "alt",
          MetaLeft: "meta",
          MetaRight: "meta",
          OSLeft: "meta",
          OSRight: "meta",
          ControlLeft: "ctrl",
          ControlRight: "ctrl",
        };
      function g(e) {
        return (b[e] || e)
          .trim()
          .toLowerCase()
          .replace(/key|digit|numpad|arrow/, "");
      }
      function j(e, t) {
        return void 0 === t && (t = ","), e.split(t);
      }
      function w(e, t, n) {
        void 0 === t && (t = "+");
        var r = e
            .toLocaleLowerCase()
            .split(t)
            .map(function (e) {
              return g(e);
            }),
          o = {
            alt: r.includes("alt"),
            ctrl: r.includes("ctrl") || r.includes("control"),
            shift: r.includes("shift"),
            meta: r.includes("meta"),
            mod: r.includes("mod"),
          },
          i = r.filter(function (e) {
            return !v.includes(e);
          });
        return x({}, o, { keys: i, description: n });
      }
      "undefined" != typeof document &&
        (document.addEventListener("keydown", function (e) {
          void 0 !== e.key && S([g(e.key), g(e.code)]);
        }),
        document.addEventListener("keyup", function (e) {
          void 0 !== e.key && C([g(e.key), g(e.code)]);
        })),
        "undefined" != typeof window &&
          window.addEventListener("blur", function () {
            _.clear();
          });
      var _ = new Set();
      function k(e) {
        return Array.isArray(e);
      }
      function S(e) {
        var t = Array.isArray(e) ? e : [e];
        _.has("meta") &&
          _.forEach(function (e) {
            return !v.includes(e) && _.delete(e.toLowerCase());
          }),
          t.forEach(function (e) {
            return _.add(e.toLowerCase());
          });
      }
      function C(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e
          ? _.clear()
          : t.forEach(function (e) {
              return _.delete(e.toLowerCase());
            });
      }
      function O(e, t) {
        var n = e.target;
        void 0 === t && (t = !1);
        var r = n && n.tagName;
        return k(t)
          ? !!(
              r &&
              t &&
              t.some(function (e) {
                return e.toLowerCase() === r.toLowerCase();
              })
            )
          : !!(r && t && !0 === t);
      }
      var P = function (e, t, n) {
          void 0 === n && (n = !1);
          var r,
            o = t.alt,
            i = t.meta,
            a = t.mod,
            l = t.shift,
            c = t.ctrl,
            s = t.keys,
            u = e.key,
            d = e.code,
            f = e.ctrlKey,
            p = e.metaKey,
            h = e.shiftKey,
            m = e.altKey,
            y = g(d),
            x = u.toLowerCase();
          if (!n) {
            if ((!m === o && "alt" !== x) || (!h === l && "shift" !== x))
              return !1;
            if (a) {
              if (!p && !f) return !1;
            } else if (
              (!p === i && "meta" !== x && "os" !== x) ||
              (!f === c && "ctrl" !== x && "control" !== x)
            )
              return !1;
          }
          return (
            !!(s && 1 === s.length && (s.includes(x) || s.includes(y))) ||
            (s
              ? (void 0 === r && (r = ","),
                (k(s) ? s : s.split(r)).every(function (e) {
                  return _.has(e.trim().toLowerCase());
                }))
              : !s)
          );
        },
        E = (0, i.createContext)(void 0),
        I = (0, i.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function () {},
          enableScope: function () {},
          disableScope: function () {},
        }),
        L = function (e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation();
        },
        A = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
        z = n(33890),
        D = n(10180);
      function T(e) {
        let t = Math.round(e),
          n = t % 60;
        return ""
          .concat(Math.floor(t / 60), ":")
          .concat(n < 10 ? "0" : "")
          .concat(n);
      }
      let R = (0, o.Pi)(() => {
          let e = (0, m.useStores)().playbar,
            [t, n] = i.useState(null);
          return (0, r.jsxs)(a.k, {
            width: "100%",
            maxWidth: ["100%", "100%", "550px"],
            alignItems: "center",
            children: [
              (0, r.jsx)(u.x, {
                fontSize: "xs",
                color: "gray.400",
                children: T(e.currentTime),
              }),
              (0, r.jsxs)(d.iR, {
                isDisabled: null == e.clipId,
                flex: "1",
                mx: 4,
                colorScheme: "orange",
                "aria-label": "playtime",
                focusThumbOnChange: !1,
                value: null != t ? t : 100 * e.progress,
                onChange: (e) => n(e),
                onChangeEnd: (t) => {
                  e.userSetCurrentProgress(t), n(null);
                },
                children: [
                  (0, r.jsx)(d.Uj, { children: (0, r.jsx)(d.Ms, {}) }),
                  (0, r.jsx)(d.gs, {}),
                ],
              }),
              (0, r.jsx)(u.x, {
                fontSize: "xs",
                color: "gray.400",
                children: e.loadingDuration
                  ? (0, r.jsx)(f.$, { size: "sm" })
                  : T(e.duration),
              }),
              (0, r.jsxs)(p.K, {
                direction: "row",
                spacing: 0,
                children: [
                  (0, r.jsx)(l.h, {
                    onClick: e.toggleAutoplay,
                    colorScheme: e.autoplay ? "orange" : void 0,
                    variant: "ghost",
                    "aria-label": "Toggle Autoplay",
                    icon: (0, r.jsx)(s.Zi6, {}),
                    size: "sm",
                  }),
                  (0, r.jsx)(l.h, {
                    onClick: e.toggleRepeat,
                    colorScheme: e.repeat ? "orange" : void 0,
                    variant: "ghost",
                    "aria-label": "Toggle Repeat One",
                    icon: (0, r.jsx)(s.u9p, {}),
                    size: "sm",
                  }),
                ],
              }),
            ],
          });
        }),
        M = (0, o.Pi)((e) => {
          var t, n, o, s, d, x, v, b, _, T, M, K, B, F, W, N, q;
          let U = i.useRef(null),
            H = (0, m.useStores)(),
            $ = H.playbar;
          (o = "space"),
            (s = (e) => {
              $.togglePlay(), e.preventDefault();
            }),
            (d = []),
            (v = (0, i.useRef)(null)),
            (b = (0, i.useRef)(!1)),
            (_ = d instanceof Array ? (x instanceof Array ? void 0 : x) : d),
            (T = k(o) ? o.join(null == _ ? void 0 : _.splitKey) : o),
            (M = d instanceof Array ? d : x instanceof Array ? x : void 0),
            (K = (0, i.useCallback)(s, null != M ? M : [])),
            (B = (0, i.useRef)(K)),
            M ? (B.current = K) : (B.current = s),
            !(function e(t, n) {
              return t && n && "object" == typeof t && "object" == typeof n
                ? Object.keys(t).length === Object.keys(n).length &&
                    Object.keys(t).reduce(function (r, o) {
                      return r && e(t[o], n[o]);
                    }, !0)
                : t === n;
            })((F = (0, i.useRef)(void 0)).current, _) && (F.current = _),
            (W = F.current),
            (N = (0, i.useContext)(I).enabledScopes),
            (q = (0, i.useContext)(E)),
            A(
              function () {
                if (
                  (null == W ? void 0 : W.enabled) !== !1 &&
                  ((e = null == W ? void 0 : W.scopes),
                  0 === N.length && e
                    ? (console.warn(
                        'A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'
                      ),
                      !0)
                    : !!(
                        !e ||
                        N.some(function (t) {
                          return e.includes(t);
                        }) ||
                        N.includes("*")
                      ))
                ) {
                  var e,
                    t = function (e, t) {
                      var n;
                      if (
                        (void 0 === t && (t = !1),
                        !(
                          (O(e, ["input", "textarea", "select"]) &&
                            !O(e, null == W ? void 0 : W.enableOnFormTags)) ||
                          (null != W &&
                            null != W.ignoreEventWhen &&
                            W.ignoreEventWhen(e))
                        ))
                      ) {
                        if (
                          null !== v.current &&
                          document.activeElement !== v.current &&
                          !v.current.contains(document.activeElement)
                        ) {
                          L(e);
                          return;
                        }
                        (null == (n = e.target) ||
                          !n.isContentEditable ||
                          (null != W && W.enableOnContentEditable)) &&
                          j(T, null == W ? void 0 : W.splitKey).forEach(
                            function (n) {
                              var r,
                                o,
                                i,
                                a = w(n, null == W ? void 0 : W.combinationKey);
                              if (
                                P(
                                  e,
                                  a,
                                  null == W ? void 0 : W.ignoreModifiers
                                ) ||
                                (null != (i = a.keys) && i.includes("*"))
                              ) {
                                if (t && b.current) return;
                                if (
                                  ((("function" ==
                                    typeof (r =
                                      null == W ? void 0 : W.preventDefault) &&
                                    r(e, a)) ||
                                    !0 === r) &&
                                    e.preventDefault(),
                                  "function" ==
                                  typeof (o = null == W ? void 0 : W.enabled)
                                    ? !o(e, a)
                                    : !0 !== o && void 0 !== o)
                                ) {
                                  L(e);
                                  return;
                                }
                                B.current(e, a), t || (b.current = !0);
                              }
                            }
                          );
                      }
                    },
                    n = function (e) {
                      void 0 !== e.key &&
                        (S(g(e.code)),
                        (((null == W ? void 0 : W.keydown) === void 0 &&
                          (null == W ? void 0 : W.keyup) !== !0) ||
                          (null != W && W.keydown)) &&
                          t(e));
                    },
                    r = function (e) {
                      void 0 !== e.key &&
                        (C(g(e.code)),
                        (b.current = !1),
                        null != W && W.keyup && t(e, !0));
                    },
                    o =
                      v.current ||
                      (null == _ ? void 0 : _.document) ||
                      document;
                  return (
                    o.addEventListener("keyup", r),
                    o.addEventListener("keydown", n),
                    q &&
                      j(T, null == W ? void 0 : W.splitKey).forEach(function (
                        e
                      ) {
                        return q.addHotkey(
                          w(
                            e,
                            null == W ? void 0 : W.combinationKey,
                            null == W ? void 0 : W.description
                          )
                        );
                      }),
                    function () {
                      o.removeEventListener("keyup", r),
                        o.removeEventListener("keydown", n),
                        q &&
                          j(T, null == W ? void 0 : W.splitKey).forEach(
                            function (e) {
                              return q.removeHotkey(
                                w(
                                  e,
                                  null == W ? void 0 : W.combinationKey,
                                  null == W ? void 0 : W.description
                                )
                              );
                            }
                          );
                    }
                  );
                }
              },
              [T, W, N]
            ),
            (0, i.useLayoutEffect)(() => {
              U.current && $.setAudioElement(U.current);
            }, [U.current]);
          let G = $.clipId ? H.clips.clipById[$.clipId] : null;
          return (0, r.jsxs)(p.K, {
            alignItems: ["stretch", "stretch", "center"],
            height: "100%",
            width: "100%",
            py: [2, 2, 6],
            px: [4, 4, 6],
            spacing: [2, 2, 0],
            backgroundColor: "#161616",
            flexDirection: ["column", "column", "row"],
            children: [
              (0, r.jsx)(a.k, {
                flex: ["0", "0", "0", "0 0 400px", "0 0 450px"],
                children: G
                  ? (0, r.jsxs)(p.K, {
                      direction: "row",
                      alignItems: "center",
                      width: "100%",
                      children: [
                        (0, r.jsx)(h.E, {
                          height: "50px",
                          p: 2,
                          src: (null == G ? void 0 : G.image_url) || void 0,
                        }),
                        (0, r.jsxs)(p.K, {
                          spacing: 1,
                          flex: ["1", "1", 0],
                          children: [
                            (0, r.jsx)(z.r, {
                              href: "/song/".concat(G.id),
                              children: (0, r.jsx)(u.x, {
                                fontWeight: 600,
                                fontSize: "xs",
                                minWidth: 150,
                                children:
                                  null === (t = (0, D.M8)(G)) || void 0 === t
                                    ? void 0
                                    : t.slice(0, 20),
                              }),
                            }),
                            (0, r.jsx)(u.x, {
                              fontSize: "xs",
                              children:
                                null === (n = G.metadata.tags) || void 0 === n
                                  ? void 0
                                  : n.slice(0, 25),
                            }),
                          ],
                        }),
                        (0, r.jsx)(a.k, {
                          alignItems: "center",
                          flex: [0, 0, 1],
                          children: (0, r.jsx)(y.Z, { clip: G }),
                        }),
                      ],
                    })
                  : null,
              }),
              (0, r.jsxs)(a.k, {
                alignItems: "center",
                flex: "1",
                justifyContent: "center",
                children: [
                  (0, r.jsx)("audio", { ref: U, src: void 0 }),
                  (0, r.jsxs)(a.k, {
                    mr: 6,
                    children: [
                      (0, r.jsx)(l.h, {
                        "aria-label": "Back",
                        borderRadius: "50%",
                        size: "sm",
                        icon: (0, r.jsx)(c.qSR, {}),
                        onClick: $.stepBackward,
                      }),
                      (0, r.jsx)(l.h, {
                        colorScheme: "orange",
                        "aria-label": $.loadingStream
                          ? "Loading"
                          : $.isPlaying
                          ? "Pause"
                          : "Play",
                        borderRadius: "50%",
                        size: "sm",
                        icon: $.loadingStream
                          ? (0, r.jsx)(f.$, {})
                          : $.isPlaying
                          ? (0, r.jsx)(c.Wh, {})
                          : (0, r.jsx)(c.gmG, { style: { marginLeft: "2px" } }),
                        onClick: $.togglePlay,
                      }),
                      (0, r.jsx)(l.h, {
                        "aria-label": "Next",
                        borderRadius: "50%",
                        size: "sm",
                        icon: (0, r.jsx)(c.Nqc, {}),
                        onClick: $.stepForward,
                      }),
                    ],
                  }),
                  (0, r.jsx)(R, {}),
                ],
              }),
              (0, r.jsx)(a.k, {
                display: ["none", "none", "flex"],
                flex: ["0 0 60px", "0 0 240px"],
                justifyContent: "flex-end",
              }),
            ],
          });
        });
      var K = n(54600),
        B = (e) => {
          let { children: t } = e;
          return (0, r.jsxs)(a.k, {
            width: "100%",
            height: "100%",
            flexDirection: "column",
            children: [
              (0, r.jsxs)(a.k, {
                flex: "1",
                width: "100%",
                flexDirection: ["column", "column", "row"],
                overflowY: "auto",
                children: [
                  (0, r.jsx)(K.ZP, {}),
                  (0, r.jsx)(a.k, {
                    background: "black",
                    flex: "1",
                    height: "100%",
                    overflowY: "auto",
                    flexDirection: "column",
                    children: (0, r.jsx)(a.k, {
                      flex: "1",
                      overflowY: "auto",
                      children: t,
                    }),
                  }),
                ],
              }),
              (0, r.jsx)(a.k, {
                alignItems: "center",
                height: [null, null, "70px"],
                borderTop: "1px solid #222222",
                children: (0, r.jsx)(M, {}),
              }),
              (0, r.jsx)(K.zM, {}),
              (0, r.jsx)(K.XF, {}),
            ],
          });
        };
    },
    54600: function (e, t, n) {
      "use strict";
      n.d(t, {
        zv: function () {
          return P;
        },
        XF: function () {
          return E;
        },
        zM: function () {
          return I;
        },
        ZP: function () {
          return L;
        },
      });
      var r = n(57437),
        o = n(65567),
        i = n(18720),
        a = () => {
          let { isLoaded: e, isSignedIn: t, getToken: n } = (0, o.aC)();
          return (0, r.jsxs)("div", {
            children: [
              e && !t ? (0, r.jsx)(o.gX, { mode: "modal" }) : null,
              (0, r.jsx)(o.l8, {
                appearance: { baseTheme: i.dark },
                afterSignOutUrl: "/",
              }),
            ],
          });
        },
        l = n(16691),
        c = n.n(l),
        s = n(33890),
        u = n(66721),
        d = n(26621),
        f = n(839),
        p = n(99690),
        h = n(13621),
        m = n(49441),
        y = n(45310);
      n(54036);
      var x = n(53305),
        v = n(21100),
        b = n(10128),
        g = n(26501),
        j = n(59316),
        w = n(66876),
        _ = n(1992),
        k = n(48060),
        S = n(24033),
        C = n(53159);
      let O = () => {
          let { signOut: e } = (0, o.aC)(),
            t = (0, S.useRouter)(),
            [n] = (0, b.a)("(min-width: 768px)");
          return (0, r.jsx)(u.K, {
            fontFamily: "body",
            direction: "row",
            alignItems: "center",
            width: "100%",
            p: 2,
            children: (0, r.jsxs)(g.v, {
              children: [
                (0, r.jsx)(j.j, {
                  display: ["flex", "flex", "none"],
                  size: ["xs", "sm"],
                  as: w.h,
                  icon: (0, r.jsx)(C.Fm7, {}),
                }),
                (0, r.jsxs)(_.q, {
                  children: [
                    (0, r.jsx)(k.s, {
                      as: s.r,
                      href: "/account/",
                      children: "Subscription",
                    }),
                    (0, r.jsx)(k.s, {
                      as: s.r,
                      href: "/user/",
                      children: "Account Settings",
                    }),
                    (0, r.jsx)(k.s, {
                      as: s.r,
                      href: "https://suno.ai/docs/faqs",
                      children: "Help / FAQs",
                    }),
                    (0, r.jsx)(k.s, {
                      as: s.r,
                      href: "https://discord.gg/suno-ai",
                      children: "Discord",
                    }),
                    (0, r.jsx)(k.s, {
                      onClick: () => e(() => t.push("/")),
                      children: "Sign Out",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        P = (0, v.Pi)(() => {
          var e;
          let { session: t } = (0, x.useStores)(),
            { isSignedIn: n } = (0, o.aC)();
          return (0, r.jsxs)(u.K, {
            py: [1, 1, 6],
            px: [3, 3, 0],
            direction: ["row", "row", "column"],
            alignItems: ["center", "center", "flex-start"],
            justifyContent: ["flex-end", "flex-end", "flex-start"],
            children: [
              n && t.isCreditsLoaded
                ? (0, r.jsx)(d.k, {
                    alignItems: "center",
                    children: (0, r.jsxs)(f.x, {
                      fontSize: "sm",
                      children: [t.credits, " credits left"],
                    }),
                  })
                : (0, r.jsx)(p.N, { noOfLines: 1 }),
              t.isSubLoaded
                ? (0, r.jsx)(s.r, {
                    fontWeight: 500,
                    fontSize: "sm",
                    href: "/account",
                    children: (
                      null === (e = t.sub) || void 0 === e ? void 0 : e.plan
                    )
                      ? "Subscription"
                      : "Subscribe",
                  })
                : null,
            ],
          });
        }),
        E = (0, v.Pi)(() => {
          let { session: e } = (0, x.useStores)();
          return e.maintenanceState.isMaintenance
            ? (0, r.jsx)(d.k, {
                width: "100%",
                py: 3,
                backgroundColor: "orange.700",
                justifyContent: "center",
                children:
                  "We are currently performing routine maintenance, but will be back live soon.",
              })
            : null;
        }),
        I = () => {
          let { isSignedIn: e } = (0, o.aC)();
          return (0, r.jsxs)(u.K, {
            display: ["flex", "flex", "none"],
            as: "nav",
            minWidth: 200,
            backgroundColor: "#121213",
            direction: ["row", "row", "column"],
            alignItems: ["center", "center", "flex-start"],
            children: [
              (0, r.jsx)(s.r, {
                href: "/",
                p: [4, 4, 6],
                children: (0, r.jsx)(c(), {
                  src: "/logo2.svg",
                  alt: "Suno Logo",
                  width: 30,
                  height: 30,
                  priority: !0,
                }),
              }),
              (0, r.jsxs)(u.K, {
                flex: "1",
                justifyContent: "center",
                alignItems: ["center", "center", "flex-start"],
                fontWeight: 500,
                direction: ["row", "row", "column"],
                color: "gray.100",
                children: [
                  (0, r.jsx)(s.r, {
                    px: [2, 2, 6],
                    href: "/",
                    children: "Explore",
                  }),
                  (0, r.jsx)(s.r, {
                    px: [2, 2, 6],
                    href: "/create",
                    children: "Create",
                  }),
                  (0, r.jsx)(s.r, {
                    px: [2, 2, 6],
                    href: "/me",
                    children: "Library",
                  }),
                ],
              }),
              (0, r.jsx)(h.xu, {
                p: [3, 3, 6],
                children: e ? (0, r.jsx)(O, {}) : (0, r.jsx)(a, {}),
              }),
            ],
          });
        };
      (0, v.Pi)(() => {
        let e = (0, o.ll)(),
          t = (0, o.aC)();
        return (0, r.jsx)(m.z, {
          height: ["100%", "100%", "48px"],
          px: 2,
          backgroundImage:
            "url(/snow.gif),repeating-linear-gradient(\n        45deg,\n        #05750c,\n        #d6e3e345 10px,\n        #af4545 10px,\n        #469869 20px\n      )",
          as: s.r,
          href: "/create/holiday/",
          _hover: {
            backgroundImage:
              "url(/snow.gif),repeating-linear-gradient(\n          45deg,\n          #1ca023,\n          #d6e3e345 10px,\n          #ff0000 10px,\n          #469869 20px\n        )",
          },
          onClick: (n) => {
            t.isSignedIn ||
              (e.openSignUp({ redirectUrl: "/create/holiday/" }),
              n.preventDefault());
          },
          fontSize: "sm",
          whiteSpace: "normal",
          maxWidth: [null, null, 120],
          children: "Make a Holiday Song",
        });
      });
      var L = () => {
        let e = (0, o.ll)(),
          t = (0, o.aC)();
        return (0, r.jsxs)(u.K, {
          display: ["none", "none", "flex"],
          as: "nav",
          minWidth: 130,
          backgroundColor: "#121213",
          direction: ["row", "row", "column"],
          alignItems: ["center", "center", "flex-start"],
          children: [
            (0, r.jsx)(s.r, {
              href: "/",
              p: [2, 2, 6],
              children: (0, r.jsx)(c(), {
                src: "/logo2.svg",
                alt: "Suno Logo",
                width: 30,
                height: 30,
                priority: !0,
              }),
            }),
            (0, r.jsxs)(u.K, {
              alignItems: ["center", "center", "flex-start"],
              fontWeight: 500,
              direction: ["row", "row", "column"],
              color: "gray.100",
              children: [
                (0, r.jsx)(s.r, {
                  px: [2, 2, 6],
                  href: "/",
                  children: "Explore",
                }),
                (0, r.jsx)(s.r, {
                  px: [2, 2, 6],
                  onClick: (n) => {
                    t.isSignedIn ||
                      (e.openSignUp({ redirectUrl: "/create/" }),
                      n.preventDefault());
                  },
                  href: "/create",
                  children: "Create",
                }),
                (0, r.jsx)(s.r, {
                  px: [2, 2, 6],
                  onClick: (n) => {
                    t.isSignedIn ||
                      (e.openSignUp({ redirectUrl: "/me/" }),
                      n.preventDefault());
                  },
                  href: "/me",
                  children: "Library",
                }),
              ],
            }),
            (0, r.jsx)(y.L, {}),
            (0, r.jsxs)(h.xu, {
              p: [3, 3, 6],
              children: [
                (0, r.jsx)(P, {}),
                (0, r.jsxs)(u.K, {
                  py: 2,
                  children: [
                    (0, r.jsx)(s.r, {
                      fontWeight: 500,
                      fontSize: "sm",
                      href: "https://suno-ai.notion.site/FAQs-b72601b96de44e5cacd2cd6baa985448",
                      children: "Help / FAQs",
                    }),
                    (0, r.jsx)(s.r, {
                      fontWeight: 500,
                      fontSize: "sm",
                      href: "https://discord.gg/suno-ai",
                      children: "Discord Community",
                    }),
                  ],
                }),
                (0, r.jsx)(a, {}),
              ],
            }),
          ],
        });
      };
    },
    25031: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return L;
        },
      });
      var r = n(57437),
        o = n(64763),
        i = n(48060),
        a = n(83109),
        l = n(99629),
        c = n(31228),
        s = n(66721),
        u = n(49441),
        d = n(16248),
        f = n(839),
        p = n(66876),
        h = n(26501),
        m = n(59316),
        y = n(1992),
        x = n(53159),
        v = n(53305),
        b = n(21100),
        g = n(24033),
        j = n(2390),
        w = n.n(j),
        _ = n(10180);
      function k() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      }
      async function S(e, t) {
        let n = { url: e, title: "Suno" };
        if (k() && window.navigator.canShare && navigator.canShare(n)) {
          try {
            navigator.share(n);
          } catch (e) {}
          return;
        }
        !(function (e, t) {
          var n;
          let r =
            t ||
            (null === (n = e.split("\\").pop()) || void 0 === n
              ? void 0
              : n.split("/").pop()) ||
            "suno";
          fetch(e, {
            headers: new Headers({ Origin: location.origin }),
            mode: "cors",
          })
            .then((e) => e.blob())
            .then((e) => {
              var t, n;
              (t = window.URL.createObjectURL(e)),
                ((n = document.createElement("a")).download = r),
                (n.href = t),
                document.body.appendChild(n),
                n.click(),
                n.remove();
            })
            .catch((e) => console.error(e));
        })(e, t);
      }
      async function C(e) {
        if (e.video_url) return S(e.video_url, "".concat((0, _.M8)(e), ".mp4"));
      }
      async function O(e) {
        if (e.audio_url) return S(e.audio_url, "".concat((0, _.M8)(e), ".mp3"));
      }
      let P = (e) => "".concat(window.location.origin, "/song/").concat(e.id),
        E = (e) => {
          let t = {
            url: P(e),
            title: "".concat((0, _.M8)(e), " | Suno!"),
            text: "Listen to ".concat((0, _.M8)(e), " on Suno! \uD83C\uDFB5"),
          };
          if (k() && window.navigator.canShare && navigator.canShare(t)) {
            try {
              navigator.share(t);
            } catch (e) {}
            return;
          }
          w()("".concat(window.location.origin, "/song/").concat(e.id)),
            (0, v.toast)({
              title: "Copied link to clipboard",
              status: "success",
              duration: 2e3,
              isClosable: !0,
            });
        },
        I = (0, b.Pi)((e) => {
          var t, n;
          let { clip: o } = e,
            s = "v2" === o.major_model_version,
            { genForm: u, clips: d, session: f } = (0, v.useStores)(),
            p = (0, g.useRouter)(),
            h = "complete" === o.status;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(i.s, {
                onClick: () => {
                  u.reuseClip(o), p.push("/create/");
                },
                children: "Remix",
              }),
              s &&
                (0, r.jsxs)(i.s, {
                  onClick: () => {
                    u.setContinueClipId(o.id), p.push("/create/");
                  },
                  isDisabled: !h,
                  children: [
                    h ? null : (0, r.jsx)(a.$, { mr: 2, size: "sm" }),
                    "Continue From This Clip",
                  ],
                }),
              s &&
              (null === (t = o.metadata) || void 0 === t
                ? void 0
                : t.history) &&
              "complete" === o.status
                ? (0, r.jsx)(i.s, {
                    onClick: () => {
                      d.runConcat(o.id);
                    },
                    children: "Get Whole Song",
                  })
                : null,
              (null === (n = f.user) || void 0 === n ? void 0 : n.id) ===
              o.user_id
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(l.R, {}),
                      (0, r.jsxs)(c.k, {
                        title: "Sharing",
                        children: [
                          (0, r.jsx)(i.s, {
                            icon: (0, r.jsx)(x.gjK, {}),
                            background: o.is_public ? void 0 : "blue.600",
                            onClick: () => {
                              d.setClipVisibility(o.id, !1);
                            },
                            children: "Link Only",
                          }),
                          (0, r.jsx)(i.s, {
                            background: o.is_public ? "blue.600" : void 0,
                            icon: (0, r.jsx)(x.ssk, {}),
                            onClick: () => {
                              d.setClipVisibility(o.id, !0);
                            },
                            children: "Public",
                          }),
                        ],
                      }),
                    ],
                  })
                : null,
              (0, r.jsx)(l.R, {}),
              (0, r.jsxs)(c.k, {
                title: "Downloads",
                children: [
                  (0, r.jsxs)(i.s, {
                    isDisabled: !o.video_url,
                    onClick: () => {
                      C(o);
                    },
                    children: [
                      o.video_url
                        ? null
                        : (0, r.jsx)(a.$, { mr: 2, size: "sm" }),
                      "Download Video",
                    ],
                  }),
                  (0, r.jsxs)(i.s, {
                    isDisabled: "complete" !== o.status,
                    onClick: () => {
                      O(o);
                    },
                    children: [
                      "complete" !== o.status
                        ? (0, r.jsx)(a.$, { mr: 2, size: "sm" })
                        : null,
                      "Download Audio",
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(l.R, {}),
              (0, r.jsxs)(c.k, {
                title: "Report",
                children: [
                  (0, r.jsx)(i.s, {
                    onClick: () => {
                      d.flagClip(o.id, "Preset: Bug");
                    },
                    children: "Report Bug",
                  }),
                  (0, r.jsx)(i.s, {
                    onClick: () => {
                      d.flagClip(o.id, "Preset: Inappropriate");
                    },
                    children: "Report Inappropriate",
                  }),
                ],
              }),
            ],
          });
        });
      var L = (0, b.Pi)((e) => {
        let {
            clip: t,
            showStats: n = !1,
            size: i = "sm",
            trendingMode: a = !1,
          } = e,
          { playbar: l, clips: c } = (0, v.useStores)();
        return (0, r.jsxs)(s.K, {
          spacing: 0,
          direction: "row",
          alignItems: "center",
          children: [
            (0, r.jsxs)(s.K, {
              direction: "row",
              spacing: 0,
              alignItems: "center",
              children: [
                a
                  ? (0, r.jsx)(u.z, {
                      size: i,
                      leftIcon: (0, r.jsx)(d.J, { as: x.gmG, boxSize: "12px" }),
                      onClick: () => l.playClip(t),
                      variant: "ghost",
                      color: "gray.600",
                      "aria-label": "Play Count",
                      textAlign: "left",
                      iconSpacing: 3,
                      children: (0, r.jsx)(f.x, {
                        color: "gray.200",
                        fontSize: "lg" === i ? "sm" : "xs",
                        width: "40px",
                        children: t.play_count,
                      }),
                    })
                  : null,
                n
                  ? (0, r.jsx)(u.z, {
                      size: i,
                      leftIcon: (0, r.jsx)(x.spm, {}),
                      onClick: () => c.likeClip(t.id, !(0, o.ip)(t)),
                      colorScheme: (0, o.ip)(t) ? "orange" : void 0,
                      variant: "ghost",
                      color: (0, o.ip)(t) ? void 0 : "gray.600",
                      "aria-label": "Like",
                      textAlign: "left",
                      iconSpacing: 3,
                      children: (0, r.jsx)(f.x, {
                        fontSize: "lg" === i ? "sm" : "xs",
                        width: "20px",
                        color: (0, o.ip)(t) ? "orange" : "gray.200",
                        children: t.upvote_count,
                      }),
                    })
                  : (0, r.jsx)(p.h, {
                      size: i,
                      icon: (0, r.jsx)(x.spm, {}),
                      onClick: () => c.likeClip(t.id, !(0, o.ip)(t)),
                      colorScheme: (0, o.ip)(t) ? "orange" : void 0,
                      color: (0, o.ip)(t) ? void 0 : "gray.600",
                      variant: "ghost",
                      "aria-label": "Like",
                    }),
                a
                  ? null
                  : (0, r.jsx)(p.h, {
                      size: i,
                      icon: (0, r.jsx)(x.bGJ, {}),
                      onClick: () => c.dislikeClip(t.id, !(0, o.de)(t)),
                      colorScheme: (0, o.de)(t) ? "orange" : void 0,
                      variant: "ghost",
                      color: (0, o.de)(t) ? void 0 : "gray.600",
                      "aria-label": "Dislike",
                    }),
              ],
            }),
            "lg" === i
              ? (0, r.jsx)(u.z, {
                  size: i,
                  onClick: () => E(t),
                  leftIcon: (0, r.jsx)(x.ZH2, {}),
                  variant: "ghost",
                  "aria-label": "Share",
                  children: "Share",
                })
              : (0, r.jsx)(p.h, {
                  size: i,
                  onClick: () => E(t),
                  icon: (0, r.jsx)(x.ZH2, {}),
                  variant: "ghost",
                  "aria-label": "Share",
                }),
            (0, r.jsxs)(h.v, {
              children: [
                (0, r.jsx)(m.j, {
                  size: i,
                  "aria-label": "More Actions",
                  as: p.h,
                  icon: (0, r.jsx)(x.LCi, { size: "12px" }),
                  variant: "ghost",
                }),
                (0, r.jsx)(y.q, { children: (0, r.jsx)(I, { clip: t }) }),
              ],
            }),
          ],
        });
      });
    },
    54036: function () {},
    69191: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",
          fontStyle: "normal",
        },
        className: "__className_e66fe9",
      };
    },
    45310: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var r = (0, n(83032).m)("div", {
        baseStyle: { flex: 1, justifySelf: "stretch", alignSelf: "stretch" },
      });
      r.displayName = "Spacer";
    },
    10128: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return i;
        },
      });
      var r = n(52733),
        o = n(2265);
      function i(e, t = {}) {
        let { ssr: n = !0, fallback: i } = t,
          { getWindow: a } = (0, r.O)(),
          l = Array.isArray(e) ? e : [e],
          c = Array.isArray(i) ? i : [i];
        c = c.filter((e) => null != e);
        let [s, u] = (0, o.useState)(() =>
          l.map((e, t) => ({
            media: e,
            matches: n ? !!c[t] : a().matchMedia(e).matches,
          }))
        );
        return (
          (0, o.useEffect)(() => {
            let e = a();
            u(l.map((t) => ({ media: t, matches: e.matchMedia(t).matches })));
            let t = l.map((t) => e.matchMedia(t)),
              n = (e) => {
                u((t) =>
                  t
                    .slice()
                    .map((t) =>
                      t.media === e.media ? { ...t, matches: e.matches } : t
                    )
                );
              };
            return (
              t.forEach((e) => {
                "function" == typeof e.addListener
                  ? e.addListener(n)
                  : e.addEventListener("change", n);
              }),
              () => {
                t.forEach((e) => {
                  "function" == typeof e.removeListener
                    ? e.removeListener(n)
                    : e.removeEventListener("change", n);
                });
              }
            );
          }, [a]),
          s.map((e) => e.matches)
        );
      }
    },
    84748: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return x;
        },
      });
      var r = n(2265),
        o = n(16465),
        i = n(83032),
        a = n(50446),
        l = n(99538),
        c = n(58250),
        s = n(89839),
        u = n(12704),
        d = n(57437),
        f = (0, i.m)("div", {
          baseStyle: {
            boxShadow: "none",
            backgroundClip: "padding-box",
            cursor: "default",
            color: "transparent",
            pointerEvents: "none",
            userSelect: "none",
            "&::before, &::after, *": { visibility: "hidden" },
          },
        }),
        p = (0, a.gJ)("skeleton-start-color"),
        h = (0, a.gJ)("skeleton-end-color"),
        m = (0, l.F4)({ from: { opacity: 0 }, to: { opacity: 1 } }),
        y = (0, l.F4)({
          from: { borderColor: p.reference, background: p.reference },
          to: { borderColor: h.reference, background: h.reference },
        }),
        x = (0, c.G)((e, t) => {
          let n = {
              ...e,
              fadeDuration:
                "number" == typeof e.fadeDuration ? e.fadeDuration : 0.4,
              speed: "number" == typeof e.speed ? e.speed : 0.8,
            },
            l = (0, s.mq)("Skeleton", n),
            c = (function () {
              let e = (0, r.useRef)(!0);
              return (
                (0, r.useEffect)(() => {
                  e.current = !1;
                }, []),
                e.current
              );
            })(),
            {
              startColor: x = "",
              endColor: v = "",
              isLoaded: b,
              fadeDuration: g,
              speed: j,
              className: w,
              fitContent: _,
              ...k
            } = (0, a.Lr)(n),
            [S, C] = (0, u.dQ)("colors", [x, v]),
            O = (function (e) {
              let t = (0, r.useRef)();
              return (
                (0, r.useEffect)(() => {
                  t.current = e;
                }, [e]),
                t.current
              );
            })(b),
            P = (0, o.cx)("chakra-skeleton", w),
            E = {
              ...(S && { [p.variable]: S }),
              ...(C && { [h.variable]: C }),
            };
          if (b) {
            let e = c || O ? "none" : `${m} ${g}s`;
            return (0, d.jsx)(i.m.div, {
              ref: t,
              className: P,
              __css: { animation: e },
              ...k,
            });
          }
          return (0, d.jsx)(f, {
            ref: t,
            className: P,
            ...k,
            __css: {
              width: _ ? "fit-content" : void 0,
              ...l,
              ...E,
              _dark: { ...l._dark, ...E },
              animation: `${j}s linear infinite alternate ${y}`,
            },
          });
        });
      x.displayName = "Skeleton";
    },
    99690: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return u;
        },
      });
      var r = n(84748),
        o = n(71369),
        i = n(10128),
        a = n(90865),
        l = n(16465),
        c = n(83032),
        s = n(57437),
        u = (e) => {
          let {
              noOfLines: t = 3,
              spacing: n = "0.5rem",
              skeletonHeight: u = "0.5rem",
              className: d,
              startColor: f,
              endColor: p,
              isLoaded: h,
              fadeDuration: m,
              speed: y,
              variant: x,
              size: v,
              colorScheme: b,
              children: g,
              ...j
            } = e,
            w =
              (function (e, t) {
                var n;
                let r = (function (e) {
                    var t, n;
                    let r = (0, l.Kn)(e)
                        ? e
                        : { fallback: null != e ? e : "base" },
                      o = (0, a.F)().__breakpoints.details.map(
                        ({ minMaxQuery: e, breakpoint: t }) => ({
                          breakpoint: t,
                          query: e.replace("@media screen and ", ""),
                        })
                      ),
                      c = o.map((e) => e.breakpoint === r.fallback),
                      s = (0, i.a)(
                        o.map((e) => e.query),
                        { fallback: c, ssr: r.ssr }
                      ).findIndex((e) => !0 == e);
                    return null !=
                      (n = null == (t = o[s]) ? void 0 : t.breakpoint)
                      ? n
                      : r.fallback;
                  })((0, l.Kn)(t) ? t : { fallback: null != t ? t : "base" }),
                  c = (0, a.F)();
                if (!r) return;
                let s = Array.from(
                  (null == (n = c.__breakpoints) ? void 0 : n.keys) || []
                );
                return (function (e, t, n = o.AV) {
                  let r = Object.keys(e).indexOf(t);
                  if (-1 !== r) return e[t];
                  let i = n.indexOf(t);
                  for (; i >= 0; ) {
                    let t = n[i];
                    if (e.hasOwnProperty(t)) {
                      r = i;
                      break;
                    }
                    i -= 1;
                  }
                  if (-1 !== r) return e[n[r]];
                })(
                  Array.isArray(e)
                    ? Object.fromEntries(
                        Object.entries((0, o.Yq)(e, s)).map(([e, t]) => [e, t])
                      )
                    : e,
                  r,
                  s
                );
              })("number" == typeof t ? [t] : t) || 3,
            _ = Array(w)
              .fill(1)
              .map((e, t) => t + 1),
            k = (e) => (w > 1 && e === _.length ? "80%" : "100%"),
            S = (0, l.cx)("chakra-skeleton__group", d);
          return (0, s.jsx)(c.m.div, {
            className: S,
            ...j,
            children: _.map((e, t) => {
              if (h && t > 0) return null;
              let o = h
                ? null
                : { mb: e === _.length ? "0" : n, width: k(e), height: u };
              return (0, s.jsx)(
                r.O,
                {
                  startColor: f,
                  endColor: p,
                  isLoaded: h,
                  fadeDuration: m,
                  speed: y,
                  variant: x,
                  size: v,
                  colorScheme: b,
                  ...o,
                  children: 0 === t ? g : void 0,
                },
                _.length.toString() + e
              );
            }),
          });
        };
      u.displayName = "SkeletonText";
    },
    50044: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __addDisposableResource: function () {
            return D;
          },
          __assign: function () {
            return i;
          },
          __asyncDelegator: function () {
            return S;
          },
          __asyncGenerator: function () {
            return k;
          },
          __asyncValues: function () {
            return C;
          },
          __await: function () {
            return _;
          },
          __awaiter: function () {
            return h;
          },
          __classPrivateFieldGet: function () {
            return L;
          },
          __classPrivateFieldIn: function () {
            return z;
          },
          __classPrivateFieldSet: function () {
            return A;
          },
          __createBinding: function () {
            return y;
          },
          __decorate: function () {
            return l;
          },
          __disposeResources: function () {
            return R;
          },
          __esDecorate: function () {
            return s;
          },
          __exportStar: function () {
            return x;
          },
          __extends: function () {
            return o;
          },
          __generator: function () {
            return m;
          },
          __importDefault: function () {
            return I;
          },
          __importStar: function () {
            return E;
          },
          __makeTemplateObject: function () {
            return O;
          },
          __metadata: function () {
            return p;
          },
          __param: function () {
            return c;
          },
          __propKey: function () {
            return d;
          },
          __read: function () {
            return b;
          },
          __rest: function () {
            return a;
          },
          __runInitializers: function () {
            return u;
          },
          __setFunctionName: function () {
            return f;
          },
          __spread: function () {
            return g;
          },
          __spreadArray: function () {
            return w;
          },
          __spreadArrays: function () {
            return j;
          },
          __values: function () {
            return v;
          },
        });
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
      function o(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function a(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      function l(e, t, n, r) {
        var o,
          i = arguments.length,
          a =
            i < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, r);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (o = e[l]) &&
              (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }
      function c(e, t) {
        return function (n, r) {
          t(n, r, e);
        };
      }
      function s(e, t, n, r, o, i) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e)
            throw TypeError("Function expected");
          return e;
        }
        for (
          var l,
            c = r.kind,
            s = "getter" === c ? "get" : "setter" === c ? "set" : "value",
            u = !t && e ? (r.static ? e : e.prototype) : null,
            d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}),
            f = !1,
            p = n.length - 1;
          p >= 0;
          p--
        ) {
          var h = {};
          for (var m in r) h[m] = "access" === m ? {} : r[m];
          for (var m in r.access) h.access[m] = r.access[m];
          h.addInitializer = function (e) {
            if (f)
              throw TypeError(
                "Cannot add initializers after decoration has completed"
              );
            i.push(a(e || null));
          };
          var y = (0, n[p])(
            "accessor" === c ? { get: d.get, set: d.set } : d[s],
            h
          );
          if ("accessor" === c) {
            if (void 0 === y) continue;
            if (null === y || "object" != typeof y)
              throw TypeError("Object expected");
            (l = a(y.get)) && (d.get = l),
              (l = a(y.set)) && (d.set = l),
              (l = a(y.init)) && o.unshift(l);
          } else (l = a(y)) && ("field" === c ? o.unshift(l) : (d[s] = l));
        }
        u && Object.defineProperty(u, r.name, d), (f = !0);
      }
      function u(e, t, n) {
        for (var r = arguments.length > 2, o = 0; o < t.length; o++)
          n = r ? t[o].call(e, n) : t[o].call(e);
        return r ? n : void 0;
      }
      function d(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function f(e, t, n) {
        return (
          "symbol" == typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: n ? "".concat(n, " ", t) : t,
          })
        );
      }
      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, l);
          }
          c((r = r.apply(e, t || [])).next());
        });
      }
      function m(e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function l(l) {
          return function (c) {
            return (function (l) {
              if (n) throw TypeError("Generator is already executing.");
              for (; i && ((i = 0), l[0] && (a = 0)), a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & l[0]
                          ? r.return
                          : l[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, l[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                    case 0:
                    case 1:
                      o = l;
                      break;
                    case 4:
                      return a.label++, { value: l[1], done: !1 };
                    case 5:
                      a.label++, (r = l[1]), (l = [0]);
                      continue;
                    case 7:
                      (l = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (6 === l[0] || 2 === l[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                        a.label = l[1];
                        break;
                      }
                      if (6 === l[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = l);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(l);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  l = t.call(e, a);
                } catch (e) {
                  (l = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & l[0]) throw l[1];
              return { value: l[0] ? l[1] : void 0, done: !0 };
            })([l, c]);
          };
        }
      }
      var y = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var o = Object.getOwnPropertyDescriptor(t, n);
            (!o ||
              ("get" in o ? !t.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, o);
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          };
      function x(e, t) {
        for (var n in e)
          "default" === n ||
            Object.prototype.hasOwnProperty.call(t, n) ||
            y(t, e, n);
      }
      function v(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function b(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function g() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(b(arguments[t]));
        return e;
      }
      function j() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        for (var r = Array(e), o = 0, t = 0; t < n; t++)
          for (var i = arguments[t], a = 0, l = i.length; a < l; a++, o++)
            r[o] = i[a];
        return r;
      }
      function w(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      function _(e) {
        return this instanceof _ ? ((this.v = e), this) : new _(e);
      }
      function k(e, t, n) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var r,
          o = n.apply(e, t || []),
          i = [];
        return (
          (r = {}),
          a("next"),
          a("throw"),
          a("return"),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function a(e) {
          o[e] &&
            (r[e] = function (t) {
              return new Promise(function (n, r) {
                i.push([e, t, n, r]) > 1 || l(e, t);
              });
            });
        }
        function l(e, t) {
          try {
            var n;
            (n = o[e](t)).value instanceof _
              ? Promise.resolve(n.value.v).then(c, s)
              : u(i[0][2], n);
          } catch (e) {
            u(i[0][3], e);
          }
        }
        function c(e) {
          l("next", e);
        }
        function s(e) {
          l("throw", e);
        }
        function u(e, t) {
          e(t), i.shift(), i.length && l(i[0][0], i[0][1]);
        }
      }
      function S(e) {
        var t, n;
        return (
          (t = {}),
          r("next"),
          r("throw", function (e) {
            throw e;
          }),
          r("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function r(r, o) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n)
                  ? { value: _(e[r](t)), done: !1 }
                  : o
                  ? o(t)
                  : t;
              }
            : o;
        }
      }
      function C(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = v(e)),
            (t = {}),
            r("next"),
            r("throw"),
            r("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(n) {
          t[n] =
            e[n] &&
            function (t) {
              return new Promise(function (r, o) {
                !(function (e, t, n, r) {
                  Promise.resolve(r).then(function (t) {
                    e({ value: t, done: n });
                  }, t);
                })(r, o, (t = e[n](t)).done, t.value);
              });
            };
        }
      }
      function O(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var P = Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          };
      function E(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            "default" !== n &&
              Object.prototype.hasOwnProperty.call(e, n) &&
              y(t, e, n);
        return P(t, e), t;
      }
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function L(e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function A(e, t, n, r, o) {
        if ("m" === r) throw TypeError("Private method is not writable");
        if ("a" === r && !o)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === r ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n;
      }
      function z(e, t) {
        if (null === t || ("object" != typeof t && "function" != typeof t))
          throw TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }
      function D(e, t, n) {
        if (null != t) {
          var r;
          if ("object" != typeof t && "function" != typeof t)
            throw TypeError("Object expected.");
          if (n) {
            if (!Symbol.asyncDispose)
              throw TypeError("Symbol.asyncDispose is not defined.");
            r = t[Symbol.asyncDispose];
          }
          if (void 0 === r) {
            if (!Symbol.dispose)
              throw TypeError("Symbol.dispose is not defined.");
            r = t[Symbol.dispose];
          }
          if ("function" != typeof r) throw TypeError("Object not disposable.");
          e.stack.push({ value: t, dispose: r, async: n });
        } else n && e.stack.push({ async: !0 });
        return t;
      }
      var T =
        "function" == typeof SuppressedError
          ? SuppressedError
          : function (e, t, n) {
              var r = Error(n);
              return (
                (r.name = "SuppressedError"),
                (r.error = e),
                (r.suppressed = t),
                r
              );
            };
      function R(e) {
        function t(t) {
          (e.error = e.hasError
            ? new T(t, e.error, "An error was suppressed during disposal.")
            : t),
            (e.hasError = !0);
        }
        return (function n() {
          for (; e.stack.length; ) {
            var r = e.stack.pop();
            try {
              var o = r.dispose && r.dispose.call(r.value);
              if (r.async)
                return Promise.resolve(o).then(n, function (e) {
                  return t(e), n();
                });
            } catch (e) {
              t(e);
            }
          }
          if (e.hasError) throw e.error;
        })();
      }
      t.default = {
        __extends: o,
        __assign: i,
        __rest: a,
        __decorate: l,
        __param: c,
        __metadata: p,
        __awaiter: h,
        __generator: m,
        __createBinding: y,
        __exportStar: x,
        __values: v,
        __read: b,
        __spread: g,
        __spreadArrays: j,
        __spreadArray: w,
        __await: _,
        __asyncGenerator: k,
        __asyncDelegator: S,
        __asyncValues: C,
        __makeTemplateObject: O,
        __importStar: E,
        __importDefault: I,
        __classPrivateFieldGet: L,
        __classPrivateFieldSet: A,
        __classPrivateFieldIn: z,
        __addDisposableResource: D,
        __disposeResources: R,
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        603, 147, 420, 582, 567, 842, 479, 569, 430, 890, 161, 648, 971, 119,
        110, 744,
      ],
      function () {
        return e((e.s = 96443));
      }
    ),
      (_N_E = e.O());
  },
]);
