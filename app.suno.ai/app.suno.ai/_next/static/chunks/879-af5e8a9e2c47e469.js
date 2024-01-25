"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [879],
  {
    14250: function (e, t, r) {
      r.d(t, {
        h: function () {
          return d;
        },
      });
      var n = r(56663),
        a = r(58250),
        o = r(83032),
        l = r(16465),
        i = r(2265),
        s = r(57437),
        c = {
          horizontal: {
            "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
            "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
            "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 },
          },
          vertical: {
            "> *:first-of-type:not(:last-of-type)": { borderBottomRadius: 0 },
            "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
            "> *:not(:first-of-type):last-of-type": { borderTopRadius: 0 },
          },
        },
        u = {
          horizontal: (e) => ({
            "& > *:not(style) ~ *:not(style)": { marginStart: e },
          }),
          vertical: (e) => ({
            "& > *:not(style) ~ *:not(style)": { marginTop: e },
          }),
        },
        d = (0, a.G)(function (e, t) {
          let {
              size: r,
              colorScheme: a,
              variant: d,
              className: f,
              spacing: p = "0.5rem",
              isAttached: m,
              isDisabled: y,
              orientation: v = "horizontal",
              ...b
            } = e,
            h = (0, l.cx)("chakra-button__group", f),
            g = (0, i.useMemo)(
              () => ({ size: r, colorScheme: a, variant: d, isDisabled: y }),
              [r, a, d, y]
            ),
            k = { display: "inline-flex", ...(m ? c[v] : u[v](p)) },
            x = "vertical" === v;
          return (0,
          s.jsx)(n.D, { value: g, children: (0, s.jsx)(o.m.div, { ref: t, role: "group", __css: k, className: h, "data-attached": m ? "" : void 0, "data-orientation": v, flexDir: x ? "column" : void 0, ...b }) });
        });
      d.displayName = "ButtonGroup";
    },
    39933: function (e, t, r) {
      r.d(t, {
        X: function () {
          return c;
        },
      });
      var n = r(58250),
        a = r(89839),
        o = r(50446),
        l = r(83032),
        i = r(16465),
        s = r(57437),
        c = (0, n.G)(function (e, t) {
          let r = (0, a.mq)("Heading", e),
            { className: n, ...c } = (0, o.Lr)(e);
          return (0,
          s.jsx)(l.m.h2, { ref: t, className: (0, i.cx)("chakra-heading", e.className), ...c, __css: r });
        });
      c.displayName = "Heading";
    },
    10128: function (e, t, r) {
      r.d(t, {
        a: function () {
          return o;
        },
      });
      var n = r(52733),
        a = r(2265);
      function o(e, t = {}) {
        let { ssr: r = !0, fallback: o } = t,
          { getWindow: l } = (0, n.O)(),
          i = Array.isArray(e) ? e : [e],
          s = Array.isArray(o) ? o : [o];
        s = s.filter((e) => null != e);
        let [c, u] = (0, a.useState)(() =>
          i.map((e, t) => ({
            media: e,
            matches: r ? !!s[t] : l().matchMedia(e).matches,
          }))
        );
        return (
          (0, a.useEffect)(() => {
            let e = l();
            u(i.map((t) => ({ media: t, matches: e.matchMedia(t).matches })));
            let t = i.map((t) => e.matchMedia(t)),
              r = (e) => {
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
                  ? e.addListener(r)
                  : e.addEventListener("change", r);
              }),
              () => {
                t.forEach((e) => {
                  "function" == typeof e.removeListener
                    ? e.removeListener(r)
                    : e.removeEventListener("change", r);
                });
              }
            );
          }, [l]),
          c.map((e) => e.matches)
        );
      }
    },
    84748: function (e, t, r) {
      r.d(t, {
        O: function () {
          return b;
        },
      });
      var n = r(2265),
        a = r(16465),
        o = r(83032),
        l = r(50446),
        i = r(99538),
        s = r(58250),
        c = r(89839),
        u = r(12704),
        d = r(57437),
        f = (0, o.m)("div", {
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
        p = (0, l.gJ)("skeleton-start-color"),
        m = (0, l.gJ)("skeleton-end-color"),
        y = (0, i.F4)({ from: { opacity: 0 }, to: { opacity: 1 } }),
        v = (0, i.F4)({
          from: { borderColor: p.reference, background: p.reference },
          to: { borderColor: m.reference, background: m.reference },
        }),
        b = (0, s.G)((e, t) => {
          let r = {
              ...e,
              fadeDuration:
                "number" == typeof e.fadeDuration ? e.fadeDuration : 0.4,
              speed: "number" == typeof e.speed ? e.speed : 0.8,
            },
            i = (0, c.mq)("Skeleton", r),
            s = (function () {
              let e = (0, n.useRef)(!0);
              return (
                (0, n.useEffect)(() => {
                  e.current = !1;
                }, []),
                e.current
              );
            })(),
            {
              startColor: b = "",
              endColor: h = "",
              isLoaded: g,
              fadeDuration: k,
              speed: x,
              className: _,
              fitContent: w,
              ...j
            } = (0, l.Lr)(r),
            [C, E] = (0, u.dQ)("colors", [b, h]),
            N = (function (e) {
              let t = (0, n.useRef)();
              return (
                (0, n.useEffect)(() => {
                  t.current = e;
                }, [e]),
                t.current
              );
            })(g),
            O = (0, a.cx)("chakra-skeleton", _),
            T = {
              ...(C && { [p.variable]: C }),
              ...(E && { [m.variable]: E }),
            };
          if (g) {
            let e = s || N ? "none" : `${y} ${k}s`;
            return (0, d.jsx)(o.m.div, {
              ref: t,
              className: O,
              __css: { animation: e },
              ...j,
            });
          }
          return (0, d.jsx)(f, {
            ref: t,
            className: O,
            ...j,
            __css: {
              width: w ? "fit-content" : void 0,
              ...i,
              ...T,
              _dark: { ...i._dark, ...T },
              animation: `${x}s linear infinite alternate ${v}`,
            },
          });
        });
      b.displayName = "Skeleton";
    },
    99690: function (e, t, r) {
      r.d(t, {
        N: function () {
          return u;
        },
      });
      var n = r(84748),
        a = r(71369),
        o = r(10128),
        l = r(90865),
        i = r(16465),
        s = r(83032),
        c = r(57437),
        u = (e) => {
          let {
              noOfLines: t = 3,
              spacing: r = "0.5rem",
              skeletonHeight: u = "0.5rem",
              className: d,
              startColor: f,
              endColor: p,
              isLoaded: m,
              fadeDuration: y,
              speed: v,
              variant: b,
              size: h,
              colorScheme: g,
              children: k,
              ...x
            } = e,
            _ =
              (function (e, t) {
                var r;
                let n = (function (e) {
                    var t, r;
                    let n = (0, i.Kn)(e)
                        ? e
                        : { fallback: null != e ? e : "base" },
                      a = (0, l.F)().__breakpoints.details.map(
                        ({ minMaxQuery: e, breakpoint: t }) => ({
                          breakpoint: t,
                          query: e.replace("@media screen and ", ""),
                        })
                      ),
                      s = a.map((e) => e.breakpoint === n.fallback),
                      c = (0, o.a)(
                        a.map((e) => e.query),
                        { fallback: s, ssr: n.ssr }
                      ).findIndex((e) => !0 == e);
                    return null !=
                      (r = null == (t = a[c]) ? void 0 : t.breakpoint)
                      ? r
                      : n.fallback;
                  })((0, i.Kn)(t) ? t : { fallback: null != t ? t : "base" }),
                  s = (0, l.F)();
                if (!n) return;
                let c = Array.from(
                  (null == (r = s.__breakpoints) ? void 0 : r.keys) || []
                );
                return (function (e, t, r = a.AV) {
                  let n = Object.keys(e).indexOf(t);
                  if (-1 !== n) return e[t];
                  let o = r.indexOf(t);
                  for (; o >= 0; ) {
                    let t = r[o];
                    if (e.hasOwnProperty(t)) {
                      n = o;
                      break;
                    }
                    o -= 1;
                  }
                  if (-1 !== n) return e[r[n]];
                })(
                  Array.isArray(e)
                    ? Object.fromEntries(
                        Object.entries((0, a.Yq)(e, c)).map(([e, t]) => [e, t])
                      )
                    : e,
                  n,
                  c
                );
              })("number" == typeof t ? [t] : t) || 3,
            w = Array(_)
              .fill(1)
              .map((e, t) => t + 1),
            j = (e) => (_ > 1 && e === w.length ? "80%" : "100%"),
            C = (0, i.cx)("chakra-skeleton__group", d);
          return (0, c.jsx)(s.m.div, {
            className: C,
            ...x,
            children: w.map((e, t) => {
              if (m && t > 0) return null;
              let a = m
                ? null
                : { mb: e === w.length ? "0" : r, width: j(e), height: u };
              return (0, c.jsx)(
                n.O,
                {
                  startColor: f,
                  endColor: p,
                  isLoaded: m,
                  fadeDuration: y,
                  speed: v,
                  variant: b,
                  size: h,
                  colorScheme: g,
                  ...a,
                  children: 0 === t ? k : void 0,
                },
                w.length.toString() + e
              );
            }),
          });
        };
      u.displayName = "SkeletonText";
    },
    41619: function (e, t, r) {
      r.d(t, {
        Vp: function () {
          return f;
        },
      });
      var n = r(16248),
        a = r(310),
        o = r(58250),
        l = r(89839),
        i = r(50446),
        s = r(83032),
        c = r(57437),
        [u, d] = (0, a.k)({
          name: "TagStylesContext",
          errorMessage:
            "useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" ",
        }),
        f = (0, o.G)((e, t) => {
          let r = (0, l.jC)("Tag", e),
            n = (0, i.Lr)(e),
            a = {
              display: "inline-flex",
              verticalAlign: "top",
              alignItems: "center",
              maxWidth: "100%",
              ...r.container,
            };
          return (0, c.jsx)(u, {
            value: r,
            children: (0, c.jsx)(s.m.span, { ref: t, ...n, __css: a }),
          });
        });
      (f.displayName = "Tag"),
        ((0, o.G)((e, t) => {
          let r = d();
          return (0, c.jsx)(s.m.span, {
            ref: t,
            noOfLines: 1,
            ...e,
            __css: r.label,
          });
        }).displayName = "TagLabel"),
        ((0, o.G)((e, t) =>
          (0, c.jsx)(n.J, {
            ref: t,
            verticalAlign: "top",
            marginEnd: "0.5rem",
            ...e,
          })
        ).displayName = "TagLeftIcon"),
        ((0, o.G)((e, t) =>
          (0, c.jsx)(n.J, {
            ref: t,
            verticalAlign: "top",
            marginStart: "0.5rem",
            ...e,
          })
        ).displayName = "TagRightIcon");
      var p = (e) =>
        (0, c.jsx)(n.J, {
          verticalAlign: "inherit",
          viewBox: "0 0 512 512",
          ...e,
          children: (0, c.jsx)("path", {
            fill: "currentColor",
            d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z",
          }),
        });
      (p.displayName = "TagCloseIcon"),
        ((0, o.G)((e, t) => {
          let { isDisabled: r, children: n, ...a } = e,
            o = {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              outline: "0",
              ...d().closeButton,
            };
          return (0, c.jsx)(s.m.button, {
            ref: t,
            "aria-label": "close",
            ...a,
            type: "button",
            disabled: r,
            __css: o,
            children: n || (0, c.jsx)(p, {}),
          });
        }).displayName = "TagCloseButton");
    },
    39517: function (e, t, r) {
      r.d(t, {
        u: function () {
          return C;
        },
      });
      var n = {
          exit: {
            scale: 0.85,
            opacity: 0,
            transition: {
              opacity: { duration: 0.15, easings: "easeInOut" },
              scale: { duration: 0.2, easings: "easeInOut" },
            },
          },
          enter: {
            scale: 1,
            opacity: 1,
            transition: {
              opacity: { easings: "easeOut", duration: 0.2 },
              scale: { duration: 0.2, ease: [0.175, 0.885, 0.4, 1.1] },
            },
          },
        },
        a = r(65346),
        o = r(1521),
        l = r(15006),
        i = r(61113),
        s = r(10931),
        c = r(45663),
        u = r(16465),
        d = r(2265),
        f = (e) => {
          var t;
          return (
            (null == (t = e.current) ? void 0 : t.ownerDocument) || document
          );
        },
        p = (e) => {
          var t, r;
          return (
            (null == (r = null == (t = e.current) ? void 0 : t.ownerDocument)
              ? void 0
              : r.defaultView) || window
          );
        },
        m = "chakra-ui:close-tooltip",
        y = r(2879),
        v = r(83032),
        b = r(58250),
        h = r(89839),
        g = r(50446),
        k = r(90865),
        x = r(3210),
        _ = r(62167),
        w = r(57437),
        j = (0, v.m)(x.E.div),
        C = (0, b.G)((e, t) => {
          var r, b;
          let x;
          let C = (0, h.mq)("Tooltip", e),
            E = (0, g.Lr)(e),
            N = (0, k.F)(),
            {
              children: O,
              label: T,
              shouldWrapChildren: S,
              "aria-label": D,
              hasArrow: L,
              bg: A,
              portalProps: R,
              background: q,
              backgroundColor: I,
              bgColor: P,
              motionProps: G,
              ...F
            } = E,
            B = null != (b = null != (r = null != q ? q : I) ? r : A) ? b : P;
          if (B) {
            C.bg = B;
            let e = (0, g.K1)(N, "colors", B);
            C[l.Dq.arrowBg.var] = e;
          }
          let z = (function (e = {}) {
            let {
                openDelay: t = 0,
                closeDelay: r = 0,
                closeOnClick: n = !0,
                closeOnMouseDown: y,
                closeOnScroll: v,
                closeOnPointerDown: b = y,
                closeOnEsc: h = !0,
                onOpen: g,
                onClose: k,
                placement: x,
                id: _,
                isOpen: w,
                defaultIsOpen: j,
                arrowSize: C = 10,
                arrowShadowColor: E,
                arrowPadding: N,
                modifiers: O,
                isDisabled: T,
                gutter: S,
                offset: D,
                direction: L,
                ...A
              } = e,
              {
                isOpen: R,
                onOpen: q,
                onClose: I,
              } = (0, i.q)({
                isOpen: w,
                defaultIsOpen: j,
                onOpen: g,
                onClose: k,
              }),
              {
                referenceRef: P,
                getPopperProps: G,
                getArrowInnerProps: F,
                getArrowProps: B,
              } = (0, o.D)({
                enabled: R,
                placement: x,
                arrowPadding: N,
                modifiers: O,
                gutter: S,
                offset: D,
                direction: L,
              }),
              z = (0, d.useId)(),
              M = `tooltip-${null != _ ? _ : z}`,
              $ = (0, d.useRef)(null),
              J = (0, d.useRef)(),
              V = (0, d.useCallback)(() => {
                J.current && (clearTimeout(J.current), (J.current = void 0));
              }, []),
              K = (0, d.useRef)(),
              H = (0, d.useCallback)(() => {
                K.current && (clearTimeout(K.current), (K.current = void 0));
              }, []),
              Q = (0, d.useCallback)(() => {
                H(), I();
              }, [I, H]),
              W =
                ((0, d.useEffect)(() => {
                  let e = f($);
                  return (
                    e.addEventListener(m, Q), () => e.removeEventListener(m, Q)
                  );
                }, [Q, $]),
                () => {
                  let e = f($),
                    t = p($);
                  e.dispatchEvent(new t.CustomEvent(m));
                }),
              X = (0, d.useCallback)(() => {
                if (!T && !J.current) {
                  R && W();
                  let e = p($);
                  J.current = e.setTimeout(q, t);
                }
              }, [W, T, R, q, t]),
              Y = (0, d.useCallback)(() => {
                V();
                let e = p($);
                K.current = e.setTimeout(Q, r);
              }, [r, Q, V]),
              U = (0, d.useCallback)(() => {
                R && n && Y();
              }, [n, Y, R]),
              Z = (0, d.useCallback)(() => {
                R && b && Y();
              }, [b, Y, R]),
              ee = (0, d.useCallback)(
                (e) => {
                  R && "Escape" === e.key && Y();
                },
                [R, Y]
              );
            (0, s.O)(() => f($), "keydown", h ? ee : void 0),
              (0, s.O)(
                () => {
                  if (!v) return null;
                  let e = $.current;
                  if (!e) return null;
                  let t = (function e(t) {
                    return ["html", "body", "#document"].includes(t.localName)
                      ? t.ownerDocument.body
                      : (0, a.Re)(t) &&
                        (function (e) {
                          let {
                            overflow: t,
                            overflowX: r,
                            overflowY: n,
                          } = (
                            e.ownerDocument.defaultView || window
                          ).getComputedStyle(e);
                          return /auto|scroll|overlay|hidden/.test(t + n + r);
                        })(t)
                      ? t
                      : e(
                          "html" === t.localName
                            ? t
                            : t.assignedSlot ||
                                t.parentElement ||
                                t.ownerDocument.documentElement
                        );
                  })(e);
                  return "body" === t.localName ? p($) : t;
                },
                "scroll",
                () => {
                  R && v && Q();
                },
                { passive: !0, capture: !0 }
              ),
              (0, d.useEffect)(() => {
                T && (V(), R && I());
              }, [T, R, I, V]),
              (0, d.useEffect)(
                () => () => {
                  V(), H();
                },
                [V, H]
              ),
              (0, s.O)(() => $.current, "pointerleave", Y);
            let et = (0, d.useCallback)(
                (e = {}, t = null) => ({
                  ...e,
                  ref: (0, c.lq)($, t, P),
                  onPointerEnter: (0, u.v0)(e.onPointerEnter, (e) => {
                    "touch" !== e.pointerType && X();
                  }),
                  onClick: (0, u.v0)(e.onClick, U),
                  onPointerDown: (0, u.v0)(e.onPointerDown, Z),
                  onFocus: (0, u.v0)(e.onFocus, X),
                  onBlur: (0, u.v0)(e.onBlur, Y),
                  "aria-describedby": R ? M : void 0,
                }),
                [X, Y, Z, R, M, U, P]
              ),
              er = (0, d.useCallback)(
                (e = {}, t = null) =>
                  G(
                    {
                      ...e,
                      style: {
                        ...e.style,
                        [l.Dq.arrowSize.var]: C ? `${C}px` : void 0,
                        [l.Dq.arrowShadowColor.var]: E,
                      },
                    },
                    t
                  ),
                [G, C, E]
              );
            return {
              isOpen: R,
              show: X,
              hide: Y,
              getTriggerProps: et,
              getTooltipProps: (0, d.useCallback)(
                (e = {}, t = null) => {
                  let r = {
                    ...e.style,
                    position: "relative",
                    transformOrigin: l.Dq.transformOrigin.varRef,
                  };
                  return {
                    ref: t,
                    ...A,
                    ...e,
                    id: M,
                    role: "tooltip",
                    style: r,
                  };
                },
                [A, M]
              ),
              getTooltipPositionerProps: er,
              getArrowProps: B,
              getArrowInnerProps: F,
            };
          })({ ...F, direction: N.direction });
          if ("string" == typeof O || S)
            x = (0, w.jsx)(v.m.span, {
              display: "inline-block",
              tabIndex: 0,
              ...z.getTriggerProps(),
              children: O,
            });
          else {
            let e = d.Children.only(O);
            x = (0, d.cloneElement)(e, z.getTriggerProps(e.props, e.ref));
          }
          let M = !!D,
            $ = z.getTooltipProps({}, t),
            J = M
              ? (function (e, t = []) {
                  let r = Object.assign({}, e);
                  for (let e of t) e in r && delete r[e];
                  return r;
                })($, ["role", "id"])
              : $,
            V = (function (e, t) {
              let r = {};
              for (let n of t) n in e && (r[n] = e[n]);
              return r;
            })($, ["role", "id"]);
          return T
            ? (0, w.jsxs)(w.Fragment, {
                children: [
                  x,
                  (0, w.jsx)(_.M, {
                    children:
                      z.isOpen &&
                      (0, w.jsx)(y.h, {
                        ...R,
                        children: (0, w.jsx)(v.m.div, {
                          ...z.getTooltipPositionerProps(),
                          __css: { zIndex: C.zIndex, pointerEvents: "none" },
                          children: (0, w.jsxs)(j, {
                            variants: n,
                            initial: "exit",
                            animate: "enter",
                            exit: "exit",
                            ...G,
                            ...J,
                            __css: C,
                            children: [
                              T,
                              M &&
                                (0, w.jsx)(v.m.span, {
                                  srOnly: !0,
                                  ...V,
                                  children: D,
                                }),
                              L &&
                                (0, w.jsx)(v.m.div, {
                                  "data-popper-arrow": !0,
                                  className: "chakra-tooltip__arrow-wrapper",
                                  children: (0, w.jsx)(v.m.div, {
                                    "data-popper-arrow-inner": !0,
                                    className: "chakra-tooltip__arrow",
                                    __css: { bg: C.bg },
                                  }),
                                }),
                            ],
                          }),
                        }),
                      }),
                  }),
                ],
              })
            : (0, w.jsx)(w.Fragment, { children: O });
        });
      C.displayName = "Tooltip";
    },
  },
]);
