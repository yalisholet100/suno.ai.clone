(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [430],
  {
    2390: function (e, t, n) {
      "use strict";
      var r = n(25809),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          i,
          a,
          s,
          l,
          u,
          c,
          f,
          d = !1;
        t || (t = {}), (a = t.debug || !1);
        try {
          if (
            ((l = r()),
            (u = document.createRange()),
            (c = document.getSelection()),
            ((f = document.createElement("span")).textContent = e),
            (f.ariaHidden = "true"),
            (f.style.all = "unset"),
            (f.style.position = "fixed"),
            (f.style.top = 0),
            (f.style.clip = "rect(0, 0, 0, 0)"),
            (f.style.whiteSpace = "pre"),
            (f.style.webkitUserSelect = "text"),
            (f.style.MozUserSelect = "text"),
            (f.style.msUserSelect = "text"),
            (f.style.userSelect = "text"),
            f.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), t.format)) {
                if ((n.preventDefault(), void 0 === n.clipboardData)) {
                  a && console.warn("unable to use e.clipboardData"),
                    a && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var r = o[t.format] || o.default;
                  window.clipboardData.setData(r, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              }
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(f),
            u.selectNodeContents(f),
            c.addRange(u),
            !document.execCommand("copy"))
          )
            throw Error("copy command was unsuccessful");
          d = !0;
        } catch (r) {
          a && console.error("unable to copy using execCommand: ", r),
            a && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (d = !0);
          } catch (r) {
            a && console.error("unable to copy using clipboardData: ", r),
              a && console.error("falling back to prompt"),
              (n =
                "message" in t
                  ? t.message
                  : "Copy to clipboard: #{key}, Enter"),
              (i =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
              (s = n.replace(/#{\s*key\s*}/g, i)),
              window.prompt(s, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(u)
              : c.removeAllRanges()),
            f && document.body.removeChild(f),
            l();
        }
        return d;
      };
    },
    25809: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], r = 0;
          r < e.rangeCount;
          r++
        )
          n.push(e.getRangeAt(r));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    65346: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          null != e &&
          "object" == typeof e &&
          "nodeType" in e &&
          e.nodeType === Node.ELEMENT_NODE
        );
      }
      function o(e) {
        var t;
        if (!r(e)) return !1;
        let n = null != (t = e.ownerDocument.defaultView) ? t : window;
        return e instanceof n.HTMLElement;
      }
      function i(e) {
        var t, n;
        return null != (n = null == (t = a(e)) ? void 0 : t.defaultView)
          ? n
          : window;
      }
      function a(e) {
        return r(e) ? e.ownerDocument : document;
      }
      function s(e) {
        return a(e).activeElement;
      }
      n.d(t, {
        Re: function () {
          return o;
        },
        kR: function () {
          return i;
        },
        vY: function () {
          return s;
        },
      });
    },
    38955: function (e, t, n) {
      "use strict";
      n.d(t, {
        EB: function () {
          return a;
        },
        Wq: function () {
          return s;
        },
      });
      var r = n(65346),
        o = (e) => e.hasAttribute("tabindex"),
        i = (e) => o(e) && -1 === e.tabIndex;
      function a(e) {
        var t;
        if (
          !(0, r.Re)(e) ||
          (function e(t) {
            return !!(t.parentElement && e(t.parentElement)) || t.hidden;
          })(e) ||
          !0 == !!(t = e).getAttribute("disabled") ||
          !0 == !!t.getAttribute("aria-disabled")
        )
          return !1;
        let { localName: n } = e;
        if (["input", "select", "textarea", "button"].indexOf(n) >= 0)
          return !0;
        let i = {
          a: () => e.hasAttribute("href"),
          audio: () => e.hasAttribute("controls"),
          video: () => e.hasAttribute("controls"),
        };
        return n in i
          ? i[n]()
          : !!(function (e) {
              let t = e.getAttribute("contenteditable");
              return "false" !== t && null != t;
            })(e) || o(e);
      }
      function s(e) {
        return !!e && (0, r.Re)(e) && a(e) && !i(e);
      }
    },
    48060: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return p;
        },
      });
      var r = n(26501),
        o = n(58250),
        i = n(83032),
        a = n(57437),
        s = (0, o.G)((e, t) => {
          let n = (0, r.x)();
          return (0, a.jsx)(i.m.span, {
            ref: t,
            ...e,
            __css: n.command,
            className: "chakra-menu__command",
          });
        });
      s.displayName = "MenuCommand";
      var l = n(2265),
        u = (0, o.G)((e, t) => {
          let { type: n, ...o } = e,
            s = (0, r.x)(),
            u = o.as || n ? (null != n ? n : void 0) : "button",
            c = (0, l.useMemo)(
              () => ({
                textDecoration: "none",
                color: "inherit",
                userSelect: "none",
                display: "flex",
                width: "100%",
                alignItems: "center",
                textAlign: "start",
                flex: "0 0 auto",
                outline: 0,
                ...s.item,
              }),
              [s.item]
            );
          return (0, a.jsx)(i.m.button, { ref: t, type: u, ...o, __css: c });
        }),
        c = n(16465),
        f = (e) => {
          let { className: t, children: n, ...o } = e,
            s = (0, r.x)(),
            u = l.Children.only(n),
            f = (0, l.isValidElement)(u)
              ? (0, l.cloneElement)(u, {
                  focusable: "false",
                  "aria-hidden": !0,
                  className: (0, c.cx)("chakra-menu__icon", u.props.className),
                })
              : null,
            d = (0, c.cx)("chakra-menu__icon-wrapper", t);
          return (0, a.jsx)(i.m.span, {
            className: d,
            ...o,
            __css: s.icon,
            children: f,
          });
        };
      f.displayName = "MenuIcon";
      var d = n(2985),
        p = (0, o.G)((e, t) => {
          let {
              icon: n,
              iconSpacing: r = "0.75rem",
              command: o,
              commandSpacing: i = "0.75rem",
              children: l,
              ...p
            } = e,
            m = (0, d.iX)(p, t),
            h =
              n || o
                ? (0, a.jsx)("span", {
                    style: { pointerEvents: "none", flex: 1 },
                    children: l,
                  })
                : l;
          return (0, a.jsxs)(u, {
            ...m,
            className: (0, c.cx)("chakra-menu__menuitem", m.className),
            children: [
              n &&
                (0, a.jsx)(f, { fontSize: "0.8em", marginEnd: r, children: n }),
              h,
              o && (0, a.jsx)(s, { marginStart: i, children: o }),
            ],
          });
        });
      p.displayName = "MenuItem";
    },
    1992: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return d;
        },
      });
      var r = n(26501),
        o = n(2985),
        i = n(16465),
        a = n(83032),
        s = n(58250),
        l = n(3210),
        u = n(57437),
        c = {
          enter: {
            visibility: "visible",
            opacity: 1,
            scale: 1,
            transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
          },
          exit: {
            transitionEnd: { visibility: "hidden" },
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.1, easings: "easeOut" },
          },
        },
        f = (0, a.m)(l.E.div),
        d = (0, s.G)(function (e, t) {
          var n, s;
          let { rootProps: l, motionProps: d, ...p } = e,
            {
              isOpen: m,
              onTransitionEnd: h,
              unstable__animationState: v,
            } = (0, o.Xh)(),
            b = (0, o._l)(p, t),
            g = (0, o.Qh)(l),
            y = (0, r.x)();
          return (0,
          u.jsx)(a.m.div, { ...g, __css: { zIndex: null != (s = e.zIndex) ? s : null == (n = y.list) ? void 0 : n.zIndex }, children: (0, u.jsx)(f, { variants: c, initial: !1, animate: m ? "enter" : "exit", __css: { outline: 0, ...y.list }, ...d, className: (0, i.cx)("chakra-menu__menu-list", b.className), ...b, onUpdate: h, onAnimationComplete: (0, i.PP)(v.onComplete, b.onAnimationComplete) }) });
        });
      d.displayName = "MenuList";
    },
    99629: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return s;
        },
      });
      var r = n(26501),
        o = n(83032),
        i = n(16465),
        a = n(57437),
        s = (e) => {
          let { className: t, ...n } = e,
            s = (0, r.x)();
          return (0, a.jsx)(o.m.hr, {
            "aria-orientation": "horizontal",
            className: (0, i.cx)("chakra-menu__divider", t),
            ...n,
            __css: s.divider,
          });
        };
      s.displayName = "MenuDivider";
    },
    31228: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return l;
        },
      });
      var r = n(26501),
        o = n(58250),
        i = n(83032),
        a = n(16465),
        s = n(57437),
        l = (0, o.G)((e, t) => {
          let { title: n, children: o, className: l, ...u } = e,
            c = (0, a.cx)("chakra-menu__group__title", l),
            f = (0, r.x)();
          return (0, s.jsxs)("div", {
            ref: t,
            className: "chakra-menu__group",
            role: "group",
            children: [
              n &&
                (0, s.jsx)(i.m.p, {
                  className: c,
                  ...u,
                  __css: f.groupTitle,
                  children: n,
                }),
              o,
            ],
          });
        });
      l.displayName = "MenuGroup";
    },
    2985: function (e, t, n) {
      "use strict";
      n.d(t, {
        wN: function () {
          return S;
        },
        Kb: function () {
          return j;
        },
        H9: function () {
          return L;
        },
        zZ: function () {
          return q;
        },
        Xh: function () {
          return I;
        },
        iX: function () {
          return z;
        },
        _l: function () {
          return B;
        },
        Qh: function () {
          return U;
        },
      });
      var r = n(2265),
        o = n(16465),
        i = n(45663);
      function a(e) {
        let { tagName: t, isContentEditable: n } = e.target;
        return "INPUT" !== t && "TEXTAREA" !== t && !0 !== n;
      }
      var s = Object.defineProperty,
        l = (e, t, n) =>
          t in e
            ? s(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        u = (e, t, n) => (l(e, "symbol" != typeof t ? t + "" : t, n), n);
      function c(e) {
        return e.sort((e, t) => {
          let n = e.compareDocumentPosition(t);
          if (
            n & Node.DOCUMENT_POSITION_FOLLOWING ||
            n & Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            return -1;
          if (
            n & Node.DOCUMENT_POSITION_PRECEDING ||
            n & Node.DOCUMENT_POSITION_CONTAINS
          )
            return 1;
          if (
            !(n & Node.DOCUMENT_POSITION_DISCONNECTED) &&
            !(n & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
          )
            return 0;
          throw Error("Cannot sort the given nodes.");
        });
      }
      var f = (e) =>
        "object" == typeof e &&
        "nodeType" in e &&
        e.nodeType === Node.ELEMENT_NODE;
      function d(e, t, n) {
        let r = e + 1;
        return n && r >= t && (r = 0), r;
      }
      function p(e, t, n) {
        let r = e - 1;
        return n && r < 0 && (r = t), r;
      }
      var m = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        h = (e) => e,
        v = class {
          constructor() {
            u(this, "descendants", new Map()),
              u(this, "register", (e) => {
                if (null != e)
                  return f(e)
                    ? this.registerNode(e)
                    : (t) => {
                        this.registerNode(t, e);
                      };
              }),
              u(this, "unregister", (e) => {
                this.descendants.delete(e);
                let t = c(Array.from(this.descendants.keys()));
                this.assignIndex(t);
              }),
              u(this, "destroy", () => {
                this.descendants.clear();
              }),
              u(this, "assignIndex", (e) => {
                this.descendants.forEach((t) => {
                  let n = e.indexOf(t.node);
                  (t.index = n), (t.node.dataset.index = t.index.toString());
                });
              }),
              u(this, "count", () => this.descendants.size),
              u(this, "enabledCount", () => this.enabledValues().length),
              u(this, "values", () =>
                Array.from(this.descendants.values()).sort(
                  (e, t) => e.index - t.index
                )
              ),
              u(this, "enabledValues", () =>
                this.values().filter((e) => !e.disabled)
              ),
              u(this, "item", (e) => {
                if (0 !== this.count()) return this.values()[e];
              }),
              u(this, "enabledItem", (e) => {
                if (0 !== this.enabledCount()) return this.enabledValues()[e];
              }),
              u(this, "first", () => this.item(0)),
              u(this, "firstEnabled", () => this.enabledItem(0)),
              u(this, "last", () => this.item(this.descendants.size - 1)),
              u(this, "lastEnabled", () => {
                let e = this.enabledValues().length - 1;
                return this.enabledItem(e);
              }),
              u(this, "indexOf", (e) => {
                var t, n;
                return e &&
                  null !=
                    (n =
                      null == (t = this.descendants.get(e)) ? void 0 : t.index)
                  ? n
                  : -1;
              }),
              u(this, "enabledIndexOf", (e) =>
                null == e
                  ? -1
                  : this.enabledValues().findIndex((t) => t.node.isSameNode(e))
              ),
              u(this, "next", (e, t = !0) => {
                let n = d(e, this.count(), t);
                return this.item(n);
              }),
              u(this, "nextEnabled", (e, t = !0) => {
                let n = this.item(e);
                if (!n) return;
                let r = d(this.enabledIndexOf(n.node), this.enabledCount(), t);
                return this.enabledItem(r);
              }),
              u(this, "prev", (e, t = !0) => {
                let n = p(e, this.count() - 1, t);
                return this.item(n);
              }),
              u(this, "prevEnabled", (e, t = !0) => {
                let n = this.item(e);
                if (!n) return;
                let r = p(
                  this.enabledIndexOf(n.node),
                  this.enabledCount() - 1,
                  t
                );
                return this.enabledItem(r);
              }),
              u(this, "registerNode", (e, t) => {
                if (!e || this.descendants.has(e)) return;
                let n = c(Array.from(this.descendants.keys()).concat(e));
                (null == t ? void 0 : t.disabled) &&
                  (t.disabled = !!t.disabled);
                let r = { node: e, index: -1, ...t };
                this.descendants.set(e, r), this.assignIndex(n);
              });
          }
        },
        b = n(310),
        [g, y] = (0, b.k)({
          name: "DescendantsProvider",
          errorMessage:
            "useDescendantsContext must be used within DescendantsProvider",
        }),
        w = n(65346),
        x = n(38955),
        O = n(89656),
        E = n(1521),
        D = n(61113),
        C = n(37977);
      function k(e, t) {
        var n;
        let r = e.target;
        return (
          (!r || !!N(r).contains(r)) &&
          !(null == (n = t.current) ? void 0 : n.contains(r))
        );
      }
      function N(e) {
        var t;
        return null != (t = null == e ? void 0 : e.ownerDocument)
          ? t
          : document;
      }
      var _ = n(10931),
        [S, M, A, T] = [
          h(g),
          () => h(y()),
          () =>
            (function () {
              let e = (0, r.useRef)(new v());
              return m(() => () => e.current.destroy()), e.current;
            })(),
          (e) =>
            (function (e) {
              let t = y(),
                [n, o] = (0, r.useState)(-1),
                a = (0, r.useRef)(null);
              m(
                () => () => {
                  a.current && t.unregister(a.current);
                },
                []
              ),
                m(() => {
                  if (!a.current) return;
                  let e = Number(a.current.dataset.index);
                  n == e || Number.isNaN(e) || o(e);
                });
              let s = e ? h(t.register(e)) : h(t.register);
              return {
                descendants: t,
                index: n,
                enabledIndex: t.enabledIndexOf(a.current),
                register: (0, i.lq)(s, a),
              };
            })(e),
        ],
        [j, I] = (0, b.k)({ strict: !1, name: "MenuContext" });
      function R(e) {
        var t;
        return null != (t = null == e ? void 0 : e.ownerDocument)
          ? t
          : document;
      }
      function P(e) {
        return R(e).activeElement === e;
      }
      function L(e = {}) {
        let {
            id: t,
            closeOnSelect: n = !0,
            closeOnBlur: o = !0,
            initialFocusRef: i,
            autoSelect: a = !0,
            isLazy: s,
            isOpen: l,
            defaultIsOpen: u,
            onClose: c,
            onOpen: f,
            placement: d = "bottom-start",
            lazyBehavior: p = "unmount",
            direction: m,
            computePositionOnMount: h = !1,
            ...v
          } = e,
          b = (0, r.useRef)(null),
          g = (0, r.useRef)(null),
          y = A(),
          S = (0, r.useCallback)(() => {
            requestAnimationFrame(() => {
              var e;
              null == (e = b.current) || e.focus({ preventScroll: !1 });
            });
          }, []),
          M = (0, r.useCallback)(() => {
            let e = setTimeout(() => {
              var e;
              if (i) null == (e = i.current) || e.focus();
              else {
                let e = y.firstEnabled();
                e && U(e.index);
              }
            });
            $.current.add(e);
          }, [y, i]),
          T = (0, r.useCallback)(() => {
            let e = setTimeout(() => {
              let e = y.lastEnabled();
              e && U(e.index);
            });
            $.current.add(e);
          }, [y]),
          j = (0, r.useCallback)(() => {
            null == f || f(), a ? M() : S();
          }, [a, M, S, f]),
          {
            isOpen: I,
            onOpen: P,
            onClose: L,
            onToggle: q,
          } = (0, D.q)({ isOpen: l, defaultIsOpen: u, onClose: c, onOpen: j });
        !(function (e) {
          let { ref: t, handler: n, enabled: o = !0 } = e,
            i = (0, C.W)(n),
            a = (0, r.useRef)({
              isPointerDown: !1,
              ignoreEmulatedMouseEvents: !1,
            }).current;
          (0, r.useEffect)(() => {
            if (!o) return;
            let e = (e) => {
                k(e, t) && (a.isPointerDown = !0);
              },
              r = (e) => {
                if (a.ignoreEmulatedMouseEvents) {
                  a.ignoreEmulatedMouseEvents = !1;
                  return;
                }
                a.isPointerDown &&
                  n &&
                  k(e, t) &&
                  ((a.isPointerDown = !1), i(e));
              },
              s = (e) => {
                (a.ignoreEmulatedMouseEvents = !0),
                  n &&
                    a.isPointerDown &&
                    k(e, t) &&
                    ((a.isPointerDown = !1), i(e));
              },
              l = N(t.current);
            return (
              l.addEventListener("mousedown", e, !0),
              l.addEventListener("mouseup", r, !0),
              l.addEventListener("touchstart", e, !0),
              l.addEventListener("touchend", s, !0),
              () => {
                l.removeEventListener("mousedown", e, !0),
                  l.removeEventListener("mouseup", r, !0),
                  l.removeEventListener("touchstart", e, !0),
                  l.removeEventListener("touchend", s, !0);
              }
            );
          }, [n, t, i, a, o]);
        })({
          enabled: I && o,
          ref: b,
          handler: (e) => {
            var t;
            (null == (t = g.current) ? void 0 : t.contains(e.target)) || L();
          },
        });
        let W = (0, E.D)({ ...v, enabled: I || h, placement: d, direction: m }),
          [B, U] = (0, r.useState)(-1);
        (0, O.r)(() => {
          I || U(-1);
        }, [I]),
          (function (e, t) {
            let { shouldFocus: n, visible: r, focusRef: o } = t,
              i = n && !r;
            (0, O.r)(() => {
              let t;
              if (
                !i ||
                (function (e) {
                  let t = e.current;
                  if (!t) return !1;
                  let n = (0, w.vY)(t);
                  return !(!n || t.contains(n)) && !!(0, x.Wq)(n);
                })(e)
              )
                return;
              let n = (null == o ? void 0 : o.current) || e.current;
              if (n)
                return (
                  (t = requestAnimationFrame(() => {
                    n.focus({ preventScroll: !0 });
                  })),
                  () => {
                    cancelAnimationFrame(t);
                  }
                );
            }, [i, e, o]);
          })(b, { focusRef: g, visible: I, shouldFocus: !0 });
        let z = (function (e) {
            let { isOpen: t, ref: n } = e,
              [o, i] = (0, r.useState)(t),
              [a, s] = (0, r.useState)(!1);
            return (
              (0, r.useEffect)(() => {
                a || (i(t), s(!0));
              }, [t, a, o]),
              (0, _.O)(
                () => n.current,
                "animationend",
                () => {
                  i(t);
                }
              ),
              {
                present: !(!t && !o),
                onComplete() {
                  var e;
                  let t = new ((0, w.kR)(n.current).CustomEvent)(
                    "animationend",
                    { bubbles: !0 }
                  );
                  null == (e = n.current) || e.dispatchEvent(t);
                },
              }
            );
          })({ isOpen: I, ref: b }),
          [H, V] = (function (e, ...t) {
            let n = (0, r.useId)(),
              o = e || n;
            return (0, r.useMemo)(() => t.map((e) => `${e}-${o}`), [o, t]);
          })(t, "menu-button", "menu-list"),
          F = (0, r.useCallback)(() => {
            P(), S();
          }, [P, S]),
          $ = (0, r.useRef)(new Set([]));
        (0, r.useEffect)(() => {
          let e = $.current;
          return () => {
            e.forEach((e) => clearTimeout(e)), e.clear();
          };
        }, []);
        let K = (0, r.useCallback)(() => {
            P(), M();
          }, [M, P]),
          G = (0, r.useCallback)(() => {
            P(), T();
          }, [P, T]),
          X = (0, r.useCallback)(() => {
            var e, t;
            let n = R(b.current),
              r =
                null == (e = b.current) ? void 0 : e.contains(n.activeElement);
            if (!(I && !r)) return;
            let o = null == (t = y.item(B)) ? void 0 : t.node;
            null == o || o.focus({ preventScroll: !0 });
          }, [I, B, y]),
          Y = (0, r.useRef)(null);
        return {
          openAndFocusMenu: F,
          openAndFocusFirstItem: K,
          openAndFocusLastItem: G,
          onTransitionEnd: X,
          unstable__animationState: z,
          descendants: y,
          popper: W,
          buttonId: H,
          menuId: V,
          forceUpdate: W.forceUpdate,
          orientation: "vertical",
          isOpen: I,
          onToggle: q,
          onOpen: P,
          onClose: L,
          menuRef: b,
          buttonRef: g,
          focusedIndex: B,
          closeOnSelect: n,
          closeOnBlur: o,
          autoSelect: a,
          setFocusedIndex: U,
          isLazy: s,
          lazyBehavior: p,
          initialFocusRef: i,
          rafId: Y,
        };
      }
      function q(e = {}, t = null) {
        let n = I(),
          {
            onToggle: a,
            popper: s,
            openAndFocusFirstItem: l,
            openAndFocusLastItem: u,
          } = n,
          c = (0, r.useCallback)(
            (e) => {
              let t = { Enter: l, ArrowDown: l, ArrowUp: u }[e.key];
              t && (e.preventDefault(), e.stopPropagation(), t(e));
            },
            [l, u]
          );
        return {
          ...e,
          ref: (0, i.lq)(n.buttonRef, t, s.referenceRef),
          id: n.buttonId,
          "data-active": (0, o.PB)(n.isOpen),
          "aria-expanded": n.isOpen,
          "aria-haspopup": "menu",
          "aria-controls": n.menuId,
          onClick: (0, o.v0)(e.onClick, a),
          onKeyDown: (0, o.v0)(e.onKeyDown, c),
        };
      }
      function W(e) {
        var t;
        return (
          (function (e) {
            var t;
            if (
              !(
                null != e &&
                "object" == typeof e &&
                "nodeType" in e &&
                e.nodeType === Node.ELEMENT_NODE
              )
            )
              return !1;
            let n = null != (t = e.ownerDocument.defaultView) ? t : window;
            return e instanceof n.HTMLElement;
          })(e) &&
          !!(null == (t = null == e ? void 0 : e.getAttribute("role"))
            ? void 0
            : t.startsWith("menuitem"))
        );
      }
      function B(e = {}, t = null) {
        let n = I();
        if (!n)
          throw Error(
            "useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>"
          );
        let {
            focusedIndex: a,
            setFocusedIndex: s,
            menuRef: l,
            isOpen: u,
            onClose: c,
            menuId: f,
            isLazy: d,
            lazyBehavior: p,
            unstable__animationState: m,
          } = n,
          h = M(),
          v = (function (e = {}) {
            let { timeout: t = 300, preventDefault: n = () => !0 } = e,
              [o, i] = (0, r.useState)([]),
              a = (0, r.useRef)(),
              s = () => {
                a.current && (clearTimeout(a.current), (a.current = null));
              },
              l = () => {
                s(),
                  (a.current = setTimeout(() => {
                    i([]), (a.current = null);
                  }, t));
              };
            return (
              (0, r.useEffect)(() => s, []),
              function (e) {
                return (t) => {
                  if ("Backspace" === t.key) {
                    let e = [...o];
                    e.pop(), i(e);
                    return;
                  }
                  if (
                    (function (e) {
                      let { key: t } = e;
                      return (
                        1 === t.length ||
                        (t.length > 1 && /[^a-zA-Z0-9]/.test(t))
                      );
                    })(t)
                  ) {
                    let r = o.concat(t.key);
                    n(t) && (t.preventDefault(), t.stopPropagation()),
                      i(r),
                      e(r.join("")),
                      l();
                  }
                };
              }
            );
          })({ preventDefault: (e) => " " !== e.key && W(e.target) }),
          b = (0, r.useCallback)(
            (e) => {
              if (!e.currentTarget.contains(e.target)) return;
              let t = {
                Tab: (e) => e.preventDefault(),
                Escape: c,
                ArrowDown: () => {
                  let e = h.nextEnabled(a);
                  e && s(e.index);
                },
                ArrowUp: () => {
                  let e = h.prevEnabled(a);
                  e && s(e.index);
                },
              }[e.key];
              if (t) {
                e.preventDefault(), t(e);
                return;
              }
              let n = v((e) => {
                let t = (function (e, t, n, r) {
                  if (null == t) return r;
                  if (!r)
                    return e.find((e) =>
                      n(e).toLowerCase().startsWith(t.toLowerCase())
                    );
                  let o = e.filter((e) =>
                    n(e).toLowerCase().startsWith(t.toLowerCase())
                  );
                  if (o.length > 0) {
                    let t;
                    return o.includes(r)
                      ? ((t = o.indexOf(r) + 1) === o.length && (t = 0), o[t])
                      : ((t = e.indexOf(o[0])), e[t]);
                  }
                  return r;
                })(
                  h.values(),
                  e,
                  (e) => {
                    var t, n;
                    return null !=
                      (n =
                        null == (t = null == e ? void 0 : e.node)
                          ? void 0
                          : t.textContent)
                      ? n
                      : "";
                  },
                  h.item(a)
                );
                t && s(h.indexOf(t.node));
              });
              W(e.target) && n(e);
            },
            [h, a, v, c, s]
          ),
          g = (0, r.useRef)(!1);
        u && (g.current = !0);
        let y = (function (e) {
          let {
            wasSelected: t,
            enabled: n,
            isSelected: r,
            mode: o = "unmount",
          } = e;
          return !n || !!r || ("keepMounted" === o && !!t);
        })({
          wasSelected: g.current,
          enabled: d,
          mode: p,
          isSelected: m.present,
        });
        return {
          ...e,
          ref: (0, i.lq)(l, t),
          children: y ? e.children : null,
          tabIndex: -1,
          role: "menu",
          id: f,
          style: {
            ...e.style,
            transformOrigin: "var(--popper-transform-origin)",
          },
          "aria-orientation": "vertical",
          onKeyDown: (0, o.v0)(e.onKeyDown, b),
        };
      }
      function U(e = {}) {
        let { popper: t, isOpen: n } = I();
        return t.getPopperProps({
          ...e,
          style: { visibility: n ? "visible" : "hidden", ...e.style },
        });
      }
      function z(e = {}, t = null) {
        let {
            onMouseEnter: n,
            onMouseMove: s,
            onMouseLeave: l,
            onClick: u,
            onFocus: c,
            isDisabled: f,
            isFocusable: d,
            closeOnSelect: p,
            type: m,
            ...h
          } = e,
          {
            setFocusedIndex: v,
            focusedIndex: b,
            closeOnSelect: g,
            onClose: y,
            menuRef: w,
            isOpen: x,
            menuId: E,
            rafId: D,
          } = I(),
          C = (0, r.useRef)(null),
          k = `${E}-menuitem-${(0, r.useId)()}`,
          { index: N, register: _ } = T({ disabled: f && !d }),
          S = (0, r.useCallback)(
            (e) => {
              null == n || n(e), f || v(N);
            },
            [v, N, f, n]
          ),
          M = (0, r.useCallback)(
            (e) => {
              null == s || s(e), C.current && !P(C.current) && S(e);
            },
            [S, s]
          ),
          A = (0, r.useCallback)(
            (e) => {
              null == l || l(e), f || v(-1);
            },
            [v, f, l]
          ),
          j = (0, r.useCallback)(
            (e) => {
              null == u || u(e),
                W(e.currentTarget) && (null != p ? p : g) && y();
            },
            [y, u, g, p]
          ),
          R = (0, r.useCallback)(
            (e) => {
              null == c || c(e), v(N);
            },
            [v, c, N]
          ),
          L = N === b,
          q = f && !d;
        (0, O.r)(() => {
          if (x)
            return (
              L && !q && C.current
                ? (D.current && cancelAnimationFrame(D.current),
                  (D.current = requestAnimationFrame(() => {
                    var e;
                    null == (e = C.current) || e.focus({ preventScroll: !0 }),
                      (D.current = null);
                  })))
                : w.current &&
                  !P(w.current) &&
                  w.current.focus({ preventScroll: !0 }),
              () => {
                D.current && cancelAnimationFrame(D.current);
              }
            );
        }, [L, q, w, x]);
        let B = (function (e = {}) {
          let {
              ref: t,
              isDisabled: n,
              isFocusable: s,
              clickOnEnter: l = !0,
              clickOnSpace: u = !0,
              onMouseDown: c,
              onMouseUp: f,
              onClick: d,
              onKeyDown: p,
              onKeyUp: m,
              tabIndex: h,
              onMouseOver: v,
              onMouseLeave: b,
              ...g
            } = e,
            [y, w] = (0, r.useState)(!0),
            [x, O] = (0, r.useState)(!1),
            E = (function () {
              let e = (0, r.useRef)(new Map()),
                t = e.current,
                n = (0, r.useCallback)((t, n, r, o) => {
                  e.current.set(r, { type: n, el: t, options: o }),
                    t.addEventListener(n, r, o);
                }, []),
                o = (0, r.useCallback)((t, n, r, o) => {
                  t.removeEventListener(n, r, o), e.current.delete(r);
                }, []);
              return (
                (0, r.useEffect)(
                  () => () => {
                    t.forEach((e, t) => {
                      o(e.el, e.type, t, e.options);
                    });
                  },
                  [o, t]
                ),
                { add: n, remove: o }
              );
            })(),
            D = y ? h : h || 0,
            C = n && !s,
            k = (0, r.useCallback)(
              (e) => {
                if (n) {
                  e.stopPropagation(), e.preventDefault();
                  return;
                }
                e.currentTarget.focus(), null == d || d(e);
              },
              [n, d]
            ),
            N = (0, r.useCallback)(
              (e) => {
                x &&
                  a(e) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  O(!1),
                  E.remove(document, "keyup", N, !1));
              },
              [x, E]
            ),
            _ = (0, r.useCallback)(
              (e) => {
                if (
                  (null == p || p(e),
                  n ||
                    e.defaultPrevented ||
                    e.metaKey ||
                    !a(e.nativeEvent) ||
                    y)
                )
                  return;
                let t = l && "Enter" === e.key;
                u && " " === e.key && (e.preventDefault(), O(!0)),
                  t && (e.preventDefault(), e.currentTarget.click()),
                  E.add(document, "keyup", N, !1);
              },
              [n, y, p, l, u, E, N]
            ),
            S = (0, r.useCallback)(
              (e) => {
                null == m || m(e),
                  !n &&
                    !e.defaultPrevented &&
                    !e.metaKey &&
                    a(e.nativeEvent) &&
                    !y &&
                    u &&
                    " " === e.key &&
                    (e.preventDefault(), O(!1), e.currentTarget.click());
              },
              [u, y, n, m]
            ),
            M = (0, r.useCallback)(
              (e) => {
                0 === e.button && (O(!1), E.remove(document, "mouseup", M, !1));
              },
              [E]
            ),
            A = (0, r.useCallback)(
              (e) => {
                if (0 === e.button) {
                  if (n) {
                    e.stopPropagation(), e.preventDefault();
                    return;
                  }
                  y || O(!0),
                    e.currentTarget.focus({ preventScroll: !0 }),
                    E.add(document, "mouseup", M, !1),
                    null == c || c(e);
                }
              },
              [n, y, c, E, M]
            ),
            T = (0, r.useCallback)(
              (e) => {
                0 === e.button && (y || O(!1), null == f || f(e));
              },
              [f, y]
            ),
            j = (0, r.useCallback)(
              (e) => {
                if (n) {
                  e.preventDefault();
                  return;
                }
                null == v || v(e);
              },
              [n, v]
            ),
            I = (0, r.useCallback)(
              (e) => {
                x && (e.preventDefault(), O(!1)), null == b || b(e);
              },
              [x, b]
            ),
            R = (0, i.lq)(t, (e) => {
              e && "BUTTON" !== e.tagName && w(!1);
            });
          return y
            ? {
                ...g,
                ref: R,
                type: "button",
                "aria-disabled": C ? void 0 : n,
                disabled: C,
                onClick: k,
                onMouseDown: c,
                onMouseUp: f,
                onKeyUp: m,
                onKeyDown: p,
                onMouseOver: v,
                onMouseLeave: b,
              }
            : {
                ...g,
                ref: R,
                role: "button",
                "data-active": (0, o.PB)(x),
                "aria-disabled": n ? "true" : void 0,
                tabIndex: C ? void 0 : D,
                onClick: k,
                onMouseDown: A,
                onMouseUp: T,
                onKeyUp: S,
                onKeyDown: _,
                onMouseOver: j,
                onMouseLeave: I,
              };
        })({
          onClick: j,
          onFocus: R,
          onMouseEnter: S,
          onMouseMove: M,
          onMouseLeave: A,
          ref: (0, i.lq)(_, C, t),
          isDisabled: f,
          isFocusable: d,
        });
        return {
          ...h,
          ...B,
          type: null != m ? m : B.type,
          id: k,
          role: "menuitem",
          tabIndex: L ? 0 : -1,
        };
      }
    },
    26501: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return p;
        },
        x: function () {
          return d;
        },
      });
      var r = n(2985),
        o = n(310),
        i = n(89839),
        a = n(50446),
        s = n(90865),
        l = n(16465),
        u = n(2265),
        c = n(57437),
        [f, d] = (0, o.k)({
          name: "MenuStylesContext",
          errorMessage:
            "useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Menu />\" ",
        }),
        p = (e) => {
          let { children: t } = e,
            n = (0, i.jC)("Menu", e),
            o = (0, a.Lr)(e),
            { direction: d } = (0, s.F)(),
            { descendants: p, ...m } = (0, r.H9)({ ...o, direction: d }),
            h = (0, u.useMemo)(() => m, [m]),
            { isOpen: v, onClose: b, forceUpdate: g } = h;
          return (0, c.jsx)(r.wN, {
            value: p,
            children: (0, c.jsx)(r.Kb, {
              value: h,
              children: (0, c.jsx)(f, {
                value: n,
                children: (0, l.Pu)(t, {
                  isOpen: v,
                  onClose: b,
                  forceUpdate: g,
                }),
              }),
            }),
          });
        };
      p.displayName = "Menu";
    },
    59316: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return c;
        },
      });
      var r = n(26501),
        o = n(2985),
        i = n(58250),
        a = n(83032),
        s = n(16465),
        l = n(57437),
        u = (0, i.G)((e, t) => {
          let n = (0, r.x)();
          return (0, l.jsx)(a.m.button, {
            ref: t,
            ...e,
            __css: {
              display: "inline-flex",
              appearance: "none",
              alignItems: "center",
              outline: 0,
              ...n.button,
            },
          });
        }),
        c = (0, i.G)((e, t) => {
          let { children: n, as: r, ...i } = e,
            c = (0, o.zZ)(i, t),
            f = r || u;
          return (0, l.jsx)(f, {
            ...c,
            className: (0, s.cx)("chakra-menu__menu-button", e.className),
            children: (0, l.jsx)(a.m.span, {
              __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
              children: e.children,
            }),
          });
        });
      c.displayName = "MenuButton";
    },
    15006: function (e, t, n) {
      "use strict";
      n.d(t, {
        $B: function () {
          return u;
        },
        Dq: function () {
          return o;
        },
        Ke: function () {
          return i;
        },
        mv: function () {
          return s;
        },
      });
      var r = (e, t) => ({
          var: e,
          varRef: t ? `var(${e}, ${t})` : `var(${e})`,
        }),
        o = {
          arrowShadowColor: r("--popper-arrow-shadow-color"),
          arrowSize: r("--popper-arrow-size", "8px"),
          arrowSizeHalf: r("--popper-arrow-size-half"),
          arrowBg: r("--popper-arrow-bg"),
          transformOrigin: r("--popper-transform-origin"),
          arrowOffset: r("--popper-arrow-offset"),
        };
      function i(e) {
        return e.includes("top")
          ? "1px 1px 0px 0 var(--popper-arrow-shadow-color)"
          : e.includes("bottom")
          ? "-1px -1px 0px 0 var(--popper-arrow-shadow-color)"
          : e.includes("right")
          ? "-1px 1px 0px 0 var(--popper-arrow-shadow-color)"
          : e.includes("left")
          ? "1px -1px 0px 0 var(--popper-arrow-shadow-color)"
          : void 0;
      }
      var a = {
          top: "bottom center",
          "top-start": "bottom left",
          "top-end": "bottom right",
          bottom: "top center",
          "bottom-start": "top left",
          "bottom-end": "top right",
          left: "right center",
          "left-start": "right top",
          "left-end": "right bottom",
          right: "left center",
          "right-start": "left top",
          "right-end": "left bottom",
        },
        s = (e) => a[e],
        l = { scroll: !0, resize: !0 };
      function u(e) {
        return "object" == typeof e
          ? { enabled: !0, options: { ...l, ...e } }
          : { enabled: e, options: l };
      }
    },
    1521: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return eE;
        },
      });
      var r,
        o,
        i,
        a,
        s,
        l = n(15006),
        u = {
          name: "matchWidth",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: ({ state: e }) => {
            e.styles.popper.width = `${e.rects.reference.width}px`;
          },
          effect:
            ({ state: e }) =>
            () => {
              let t = e.elements.reference;
              e.elements.popper.style.width = `${t.offsetWidth}px`;
            },
        },
        c = {
          name: "transformOrigin",
          enabled: !0,
          phase: "write",
          fn: ({ state: e }) => {
            f(e);
          },
          effect:
            ({ state: e }) =>
            () => {
              f(e);
            },
        },
        f = (e) => {
          e.elements.popper.style.setProperty(
            l.Dq.transformOrigin.var,
            (0, l.mv)(e.placement)
          );
        },
        d = {
          name: "positionArrow",
          enabled: !0,
          phase: "afterWrite",
          fn: ({ state: e }) => {
            p(e);
          },
        },
        p = (e) => {
          var t;
          if (!e.placement) return;
          let n = m(e.placement);
          if ((null == (t = e.elements) ? void 0 : t.arrow) && n) {
            Object.assign(e.elements.arrow.style, {
              [n.property]: n.value,
              width: l.Dq.arrowSize.varRef,
              height: l.Dq.arrowSize.varRef,
              zIndex: -1,
            });
            let t = {
              [l.Dq.arrowSizeHalf
                .var]: `calc(${l.Dq.arrowSize.varRef} / 2 - 1px)`,
              [l.Dq.arrowOffset.var]: `calc(${l.Dq.arrowSizeHalf.varRef} * -1)`,
            };
            for (let n in t) e.elements.arrow.style.setProperty(n, t[n]);
          }
        },
        m = (e) =>
          e.startsWith("top")
            ? { property: "bottom", value: l.Dq.arrowOffset.varRef }
            : e.startsWith("bottom")
            ? { property: "top", value: l.Dq.arrowOffset.varRef }
            : e.startsWith("left")
            ? { property: "right", value: l.Dq.arrowOffset.varRef }
            : e.startsWith("right")
            ? { property: "left", value: l.Dq.arrowOffset.varRef }
            : void 0,
        h = {
          name: "innerArrow",
          enabled: !0,
          phase: "main",
          requires: ["arrow"],
          fn: ({ state: e }) => {
            v(e);
          },
          effect:
            ({ state: e }) =>
            () => {
              v(e);
            },
        },
        v = (e) => {
          if (!e.elements.arrow) return;
          let t = e.elements.arrow.querySelector("[data-popper-arrow-inner]");
          if (!t) return;
          let n = (0, l.Ke)(e.placement);
          n && t.style.setProperty("--popper-arrow-default-shadow", n),
            Object.assign(t.style, {
              transform: "rotate(45deg)",
              background: l.Dq.arrowBg.varRef,
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: "inherit",
              boxShadow:
                "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))",
            });
        },
        b = {
          "start-start": { ltr: "left-start", rtl: "right-start" },
          "start-end": { ltr: "left-end", rtl: "right-end" },
          "end-start": { ltr: "right-start", rtl: "left-start" },
          "end-end": { ltr: "right-end", rtl: "left-end" },
          start: { ltr: "left", rtl: "right" },
          end: { ltr: "right", rtl: "left" },
        },
        g = {
          "auto-start": "auto-end",
          "auto-end": "auto-start",
          "top-start": "top-end",
          "top-end": "top-start",
          "bottom-start": "bottom-end",
          "bottom-end": "bottom-start",
        },
        y = n(45663);
      function w(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function x(e) {
        var t = w(e).Element;
        return e instanceof t || e instanceof Element;
      }
      function O(e) {
        var t = w(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement;
      }
      function E(e) {
        if ("undefined" == typeof ShadowRoot) return !1;
        var t = w(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot;
      }
      var D = Math.max,
        C = Math.min,
        k = Math.round;
      function N() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function _() {
        return !/^((?!chrome|android).)*safari/i.test(N());
      }
      function S(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          i = 1;
        t &&
          O(e) &&
          ((o = (e.offsetWidth > 0 && k(r.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && k(r.height) / e.offsetHeight) || 1));
        var a = (x(e) ? w(e) : window).visualViewport,
          s = !_() && n,
          l = (r.left + (s && a ? a.offsetLeft : 0)) / o,
          u = (r.top + (s && a ? a.offsetTop : 0)) / i,
          c = r.width / o,
          f = r.height / i;
        return {
          width: c,
          height: f,
          top: u,
          right: l + c,
          bottom: u + f,
          left: l,
          x: l,
          y: u,
        };
      }
      function M(e) {
        var t = w(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function A(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function T(e) {
        return ((x(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function j(e) {
        return S(T(e)).left + M(e).scrollLeft;
      }
      function I(e) {
        return w(e).getComputedStyle(e);
      }
      function R(e) {
        var t = I(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function P(e) {
        var t = S(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          1 >= Math.abs(t.width - n) && (n = t.width),
          1 >= Math.abs(t.height - r) && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function L(e) {
        return "html" === A(e)
          ? e
          : e.assignedSlot || e.parentNode || (E(e) ? e.host : null) || T(e);
      }
      function q(e, t) {
        void 0 === t && (t = []);
        var n,
          r = (function e(t) {
            return ["html", "body", "#document"].indexOf(A(t)) >= 0
              ? t.ownerDocument.body
              : O(t) && R(t)
              ? t
              : e(L(t));
          })(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = w(r),
          a = o ? [i].concat(i.visualViewport || [], R(r) ? r : []) : r,
          s = t.concat(a);
        return o ? s : s.concat(q(L(a)));
      }
      function W(e) {
        return O(e) && "fixed" !== I(e).position ? e.offsetParent : null;
      }
      function B(e) {
        for (
          var t = w(e), n = W(e);
          n &&
          ["table", "td", "th"].indexOf(A(n)) >= 0 &&
          "static" === I(n).position;

        )
          n = W(n);
        return n &&
          ("html" === A(n) || ("body" === A(n) && "static" === I(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(N());
                if (/Trident/i.test(N()) && O(e) && "fixed" === I(e).position)
                  return null;
                var n = L(e);
                for (
                  E(n) && (n = n.host);
                  O(n) && 0 > ["html", "body"].indexOf(A(n));

                ) {
                  var r = I(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var U = "bottom",
        z = "right",
        H = "left",
        V = "auto",
        F = ["top", U, z, H],
        $ = "start",
        K = "viewport",
        G = "popper",
        X = F.reduce(function (e, t) {
          return e.concat([t + "-" + $, t + "-end"]);
        }, []),
        Y = [].concat(F, [V]).reduce(function (e, t) {
          return e.concat([t, t + "-" + $, t + "-end"]);
        }, []),
        Z = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ],
        Q = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function J() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      var ee = { passive: !0 };
      function et(e) {
        return e.split("-")[0];
      }
      function en(e) {
        return e.split("-")[1];
      }
      function er(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function eo(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? et(o) : null,
          a = o ? en(o) : null,
          s = n.x + n.width / 2 - r.width / 2,
          l = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case "top":
            t = { x: s, y: n.y - r.height };
            break;
          case U:
            t = { x: s, y: n.y + n.height };
            break;
          case z:
            t = { x: n.x + n.width, y: l };
            break;
          case H:
            t = { x: n.x - r.width, y: l };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var u = i ? er(i) : null;
        if (null != u) {
          var c = "y" === u ? "height" : "width";
          switch (a) {
            case $:
              t[u] = t[u] - (n[c] / 2 - r[c] / 2);
              break;
            case "end":
              t[u] = t[u] + (n[c] / 2 - r[c] / 2);
          }
        }
        return t;
      }
      var ei = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function ea(e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          s,
          l = e.popper,
          u = e.popperRect,
          c = e.placement,
          f = e.variation,
          d = e.offsets,
          p = e.position,
          m = e.gpuAcceleration,
          h = e.adaptive,
          v = e.roundOffsets,
          b = e.isFixed,
          g = d.x,
          y = void 0 === g ? 0 : g,
          x = d.y,
          O = void 0 === x ? 0 : x,
          E = "function" == typeof v ? v({ x: y, y: O }) : { x: y, y: O };
        (y = E.x), (O = E.y);
        var D = d.hasOwnProperty("x"),
          C = d.hasOwnProperty("y"),
          N = H,
          _ = "top",
          S = window;
        if (h) {
          var M = B(l),
            A = "clientHeight",
            j = "clientWidth";
          M === w(l) &&
            "static" !== I((M = T(l))).position &&
            "absolute" === p &&
            ((A = "scrollHeight"), (j = "scrollWidth")),
            ("top" === c || ((c === H || c === z) && "end" === f)) &&
              ((_ = U),
              (O -=
                (b && M === S && S.visualViewport
                  ? S.visualViewport.height
                  : M[A]) - u.height),
              (O *= m ? 1 : -1)),
            (c === H || (("top" === c || c === U) && "end" === f)) &&
              ((N = z),
              (y -=
                (b && M === S && S.visualViewport
                  ? S.visualViewport.width
                  : M[j]) - u.width),
              (y *= m ? 1 : -1));
        }
        var R = Object.assign({ position: p }, h && ei),
          P =
            !0 === v
              ? ((t = { x: y, y: O }),
                (n = w(l)),
                (r = t.x),
                (o = t.y),
                {
                  x: k(r * (i = n.devicePixelRatio || 1)) / i || 0,
                  y: k(o * i) / i || 0,
                })
              : { x: y, y: O };
        return ((y = P.x), (O = P.y), m)
          ? Object.assign(
              {},
              R,
              (((s = {})[_] = C ? "0" : ""),
              (s[N] = D ? "0" : ""),
              (s.transform =
                1 >= (S.devicePixelRatio || 1)
                  ? "translate(" + y + "px, " + O + "px)"
                  : "translate3d(" + y + "px, " + O + "px, 0)"),
              s)
            )
          : Object.assign(
              {},
              R,
              (((a = {})[_] = C ? O + "px" : ""),
              (a[N] = D ? y + "px" : ""),
              (a.transform = ""),
              a)
            );
      }
      var es = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function el(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return es[e];
        });
      }
      var eu = { start: "end", end: "start" };
      function ec(e) {
        return e.replace(/start|end/g, function (e) {
          return eu[e];
        });
      }
      function ef(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && E(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function ed(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function ep(e, t, n) {
        var r, o, i, a, s, l, u, c, f, d;
        return t === K
          ? ed(
              (function (e, t) {
                var n = w(e),
                  r = T(e),
                  o = n.visualViewport,
                  i = r.clientWidth,
                  a = r.clientHeight,
                  s = 0,
                  l = 0;
                if (o) {
                  (i = o.width), (a = o.height);
                  var u = _();
                  (u || (!u && "fixed" === t)) &&
                    ((s = o.offsetLeft), (l = o.offsetTop));
                }
                return { width: i, height: a, x: s + j(e), y: l };
              })(e, n)
            )
          : x(t)
          ? (((r = S(t, !1, "fixed" === n)).top = r.top + t.clientTop),
            (r.left = r.left + t.clientLeft),
            (r.bottom = r.top + t.clientHeight),
            (r.right = r.left + t.clientWidth),
            (r.width = t.clientWidth),
            (r.height = t.clientHeight),
            (r.x = r.left),
            (r.y = r.top),
            r)
          : ed(
              ((o = T(e)),
              (a = T(o)),
              (s = M(o)),
              (l = null == (i = o.ownerDocument) ? void 0 : i.body),
              (u = D(
                a.scrollWidth,
                a.clientWidth,
                l ? l.scrollWidth : 0,
                l ? l.clientWidth : 0
              )),
              (c = D(
                a.scrollHeight,
                a.clientHeight,
                l ? l.scrollHeight : 0,
                l ? l.clientHeight : 0
              )),
              (f = -s.scrollLeft + j(o)),
              (d = -s.scrollTop),
              "rtl" === I(l || a).direction &&
                (f += D(a.clientWidth, l ? l.clientWidth : 0) - u),
              { width: u, height: c, x: f, y: d })
            );
      }
      function em() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
      }
      function eh(e) {
        return Object.assign({}, em(), e);
      }
      function ev(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      function eb(e, t) {
        void 0 === t && (t = {});
        var n,
          r,
          o,
          i,
          a,
          s,
          l,
          u = t,
          c = u.placement,
          f = void 0 === c ? e.placement : c,
          d = u.strategy,
          p = void 0 === d ? e.strategy : d,
          m = u.boundary,
          h = u.rootBoundary,
          v = u.elementContext,
          b = void 0 === v ? G : v,
          g = u.altBoundary,
          y = u.padding,
          w = void 0 === y ? 0 : y,
          E = eh("number" != typeof w ? w : ev(w, F)),
          k = e.rects.popper,
          N = e.elements[void 0 !== g && g ? (b === G ? "reference" : G) : b],
          _ =
            ((n = x(N) ? N : N.contextElement || T(e.elements.popper)),
            (s = (a = [].concat(
              "clippingParents" === (r = void 0 === m ? "clippingParents" : m)
                ? ((o = q(L(n))),
                  x(
                    (i =
                      ["absolute", "fixed"].indexOf(I(n).position) >= 0 && O(n)
                        ? B(n)
                        : n)
                  )
                    ? o.filter(function (e) {
                        return x(e) && ef(e, i) && "body" !== A(e);
                      })
                    : [])
                : [].concat(r),
              [void 0 === h ? K : h]
            ))[0]),
            ((l = a.reduce(function (e, t) {
              var r = ep(n, t, p);
              return (
                (e.top = D(r.top, e.top)),
                (e.right = C(r.right, e.right)),
                (e.bottom = C(r.bottom, e.bottom)),
                (e.left = D(r.left, e.left)),
                e
              );
            }, ep(n, s, p))).width = l.right - l.left),
            (l.height = l.bottom - l.top),
            (l.x = l.left),
            (l.y = l.top),
            l),
          M = S(e.elements.reference),
          j = eo({
            reference: M,
            element: k,
            strategy: "absolute",
            placement: f,
          }),
          R = ed(Object.assign({}, k, j)),
          P = b === G ? R : M,
          W = {
            top: _.top - P.top + E.top,
            bottom: P.bottom - _.bottom + E.bottom,
            left: _.left - P.left + E.left,
            right: P.right - _.right + E.right,
          },
          H = e.modifiersData.offset;
        if (b === G && H) {
          var V = H[f];
          Object.keys(W).forEach(function (e) {
            var t = [z, U].indexOf(e) >= 0 ? 1 : -1,
              n = ["top", U].indexOf(e) >= 0 ? "y" : "x";
            W[e] += V[n] * t;
          });
        }
        return W;
      }
      function eg(e, t, n) {
        return D(e, C(t, n));
      }
      function ey(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function ew(e) {
        return ["top", z, U, H].some(function (t) {
          return e[t] >= 0;
        });
      }
      var ex =
          ((i =
            void 0 ===
            (o = (r = {
              defaultModifiers: [
                {
                  name: "eventListeners",
                  enabled: !0,
                  phase: "write",
                  fn: function () {},
                  effect: function (e) {
                    var t = e.state,
                      n = e.instance,
                      r = e.options,
                      o = r.scroll,
                      i = void 0 === o || o,
                      a = r.resize,
                      s = void 0 === a || a,
                      l = w(t.elements.popper),
                      u = [].concat(
                        t.scrollParents.reference,
                        t.scrollParents.popper
                      );
                    return (
                      i &&
                        u.forEach(function (e) {
                          e.addEventListener("scroll", n.update, ee);
                        }),
                      s && l.addEventListener("resize", n.update, ee),
                      function () {
                        i &&
                          u.forEach(function (e) {
                            e.removeEventListener("scroll", n.update, ee);
                          }),
                          s && l.removeEventListener("resize", n.update, ee);
                      }
                    );
                  },
                  data: {},
                },
                {
                  name: "popperOffsets",
                  enabled: !0,
                  phase: "read",
                  fn: function (e) {
                    var t = e.state,
                      n = e.name;
                    t.modifiersData[n] = eo({
                      reference: t.rects.reference,
                      element: t.rects.popper,
                      strategy: "absolute",
                      placement: t.placement,
                    });
                  },
                  data: {},
                },
                {
                  name: "computeStyles",
                  enabled: !0,
                  phase: "beforeWrite",
                  fn: function (e) {
                    var t = e.state,
                      n = e.options,
                      r = n.gpuAcceleration,
                      o = n.adaptive,
                      i = n.roundOffsets,
                      a = void 0 === i || i,
                      s = {
                        placement: et(t.placement),
                        variation: en(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: void 0 === r || r,
                        isFixed: "fixed" === t.options.strategy,
                      };
                    null != t.modifiersData.popperOffsets &&
                      (t.styles.popper = Object.assign(
                        {},
                        t.styles.popper,
                        ea(
                          Object.assign({}, s, {
                            offsets: t.modifiersData.popperOffsets,
                            position: t.options.strategy,
                            adaptive: void 0 === o || o,
                            roundOffsets: a,
                          })
                        )
                      )),
                      null != t.modifiersData.arrow &&
                        (t.styles.arrow = Object.assign(
                          {},
                          t.styles.arrow,
                          ea(
                            Object.assign({}, s, {
                              offsets: t.modifiersData.arrow,
                              position: "absolute",
                              adaptive: !1,
                              roundOffsets: a,
                            })
                          )
                        )),
                      (t.attributes.popper = Object.assign(
                        {},
                        t.attributes.popper,
                        { "data-popper-placement": t.placement }
                      ));
                  },
                  data: {},
                },
                {
                  name: "applyStyles",
                  enabled: !0,
                  phase: "write",
                  fn: function (e) {
                    var t = e.state;
                    Object.keys(t.elements).forEach(function (e) {
                      var n = t.styles[e] || {},
                        r = t.attributes[e] || {},
                        o = t.elements[e];
                      O(o) &&
                        A(o) &&
                        (Object.assign(o.style, n),
                        Object.keys(r).forEach(function (e) {
                          var t = r[e];
                          !1 === t
                            ? o.removeAttribute(e)
                            : o.setAttribute(e, !0 === t ? "" : t);
                        }));
                    });
                  },
                  effect: function (e) {
                    var t = e.state,
                      n = {
                        popper: {
                          position: t.options.strategy,
                          left: "0",
                          top: "0",
                          margin: "0",
                        },
                        arrow: { position: "absolute" },
                        reference: {},
                      };
                    return (
                      Object.assign(t.elements.popper.style, n.popper),
                      (t.styles = n),
                      t.elements.arrow &&
                        Object.assign(t.elements.arrow.style, n.arrow),
                      function () {
                        Object.keys(t.elements).forEach(function (e) {
                          var r = t.elements[e],
                            o = t.attributes[e] || {},
                            i = Object.keys(
                              t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                            ).reduce(function (e, t) {
                              return (e[t] = ""), e;
                            }, {});
                          O(r) &&
                            A(r) &&
                            (Object.assign(r.style, i),
                            Object.keys(o).forEach(function (e) {
                              r.removeAttribute(e);
                            }));
                        });
                      }
                    );
                  },
                  requires: ["computeStyles"],
                },
                {
                  name: "offset",
                  enabled: !0,
                  phase: "main",
                  requires: ["popperOffsets"],
                  fn: function (e) {
                    var t = e.state,
                      n = e.options,
                      r = e.name,
                      o = n.offset,
                      i = void 0 === o ? [0, 0] : o,
                      a = Y.reduce(function (e, n) {
                        var r, o, a, s, l, u;
                        return (
                          (e[n] =
                            ((r = t.rects),
                            (a = [H, "top"].indexOf((o = et(n))) >= 0 ? -1 : 1),
                            (l = (s =
                              "function" == typeof i
                                ? i(Object.assign({}, r, { placement: n }))
                                : i)[0]),
                            (u = s[1]),
                            (l = l || 0),
                            (u = (u || 0) * a),
                            [H, z].indexOf(o) >= 0
                              ? { x: u, y: l }
                              : { x: l, y: u })),
                          e
                        );
                      }, {}),
                      s = a[t.placement],
                      l = s.x,
                      u = s.y;
                    null != t.modifiersData.popperOffsets &&
                      ((t.modifiersData.popperOffsets.x += l),
                      (t.modifiersData.popperOffsets.y += u)),
                      (t.modifiersData[r] = a);
                  },
                },
                {
                  name: "flip",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                    var t = e.state,
                      n = e.options,
                      r = e.name;
                    if (!t.modifiersData[r]._skip) {
                      for (
                        var o = n.mainAxis,
                          i = void 0 === o || o,
                          a = n.altAxis,
                          s = void 0 === a || a,
                          l = n.fallbackPlacements,
                          u = n.padding,
                          c = n.boundary,
                          f = n.rootBoundary,
                          d = n.altBoundary,
                          p = n.flipVariations,
                          m = void 0 === p || p,
                          h = n.allowedAutoPlacements,
                          v = t.options.placement,
                          b = et(v) === v,
                          g =
                            l ||
                            (b || !m
                              ? [el(v)]
                              : (function (e) {
                                  if (et(e) === V) return [];
                                  var t = el(e);
                                  return [ec(e), t, ec(t)];
                                })(v)),
                          y = [v].concat(g).reduce(function (e, n) {
                            var r, o, i, a, s, l, d, p, v, b, g, y;
                            return e.concat(
                              et(n) === V
                                ? ((o = (r = {
                                    placement: n,
                                    boundary: c,
                                    rootBoundary: f,
                                    padding: u,
                                    flipVariations: m,
                                    allowedAutoPlacements: h,
                                  }).placement),
                                  (i = r.boundary),
                                  (a = r.rootBoundary),
                                  (s = r.padding),
                                  (l = r.flipVariations),
                                  (p =
                                    void 0 === (d = r.allowedAutoPlacements)
                                      ? Y
                                      : d),
                                  0 ===
                                    (g = (b = (v = en(o))
                                      ? l
                                        ? X
                                        : X.filter(function (e) {
                                            return en(e) === v;
                                          })
                                      : F).filter(function (e) {
                                      return p.indexOf(e) >= 0;
                                    })).length && (g = b),
                                  Object.keys(
                                    (y = g.reduce(function (e, n) {
                                      return (
                                        (e[n] = eb(t, {
                                          placement: n,
                                          boundary: i,
                                          rootBoundary: a,
                                          padding: s,
                                        })[et(n)]),
                                        e
                                      );
                                    }, {}))
                                  ).sort(function (e, t) {
                                    return y[e] - y[t];
                                  }))
                                : n
                            );
                          }, []),
                          w = t.rects.reference,
                          x = t.rects.popper,
                          O = new Map(),
                          E = !0,
                          D = y[0],
                          C = 0;
                        C < y.length;
                        C++
                      ) {
                        var k = y[C],
                          N = et(k),
                          _ = en(k) === $,
                          S = ["top", U].indexOf(N) >= 0,
                          M = S ? "width" : "height",
                          A = eb(t, {
                            placement: k,
                            boundary: c,
                            rootBoundary: f,
                            altBoundary: d,
                            padding: u,
                          }),
                          T = S ? (_ ? z : H) : _ ? U : "top";
                        w[M] > x[M] && (T = el(T));
                        var j = el(T),
                          I = [];
                        if (
                          (i && I.push(A[N] <= 0),
                          s && I.push(A[T] <= 0, A[j] <= 0),
                          I.every(function (e) {
                            return e;
                          }))
                        ) {
                          (D = k), (E = !1);
                          break;
                        }
                        O.set(k, I);
                      }
                      if (E)
                        for (
                          var R = m ? 3 : 1,
                            P = function (e) {
                              var t = y.find(function (t) {
                                var n = O.get(t);
                                if (n)
                                  return n.slice(0, e).every(function (e) {
                                    return e;
                                  });
                              });
                              if (t) return (D = t), "break";
                            },
                            L = R;
                          L > 0 && "break" !== P(L);
                          L--
                        );
                      t.placement !== D &&
                        ((t.modifiersData[r]._skip = !0),
                        (t.placement = D),
                        (t.reset = !0));
                    }
                  },
                  requiresIfExists: ["offset"],
                  data: { _skip: !1 },
                },
                {
                  name: "preventOverflow",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                    var t = e.state,
                      n = e.options,
                      r = e.name,
                      o = n.mainAxis,
                      i = n.altAxis,
                      a = n.boundary,
                      s = n.rootBoundary,
                      l = n.altBoundary,
                      u = n.padding,
                      c = n.tether,
                      f = void 0 === c || c,
                      d = n.tetherOffset,
                      p = void 0 === d ? 0 : d,
                      m = eb(t, {
                        boundary: a,
                        rootBoundary: s,
                        padding: u,
                        altBoundary: l,
                      }),
                      h = et(t.placement),
                      v = en(t.placement),
                      b = !v,
                      g = er(h),
                      y = "x" === g ? "y" : "x",
                      w = t.modifiersData.popperOffsets,
                      x = t.rects.reference,
                      O = t.rects.popper,
                      E =
                        "function" == typeof p
                          ? p(
                              Object.assign({}, t.rects, {
                                placement: t.placement,
                              })
                            )
                          : p,
                      k =
                        "number" == typeof E
                          ? { mainAxis: E, altAxis: E }
                          : Object.assign({ mainAxis: 0, altAxis: 0 }, E),
                      N = t.modifiersData.offset
                        ? t.modifiersData.offset[t.placement]
                        : null,
                      _ = { x: 0, y: 0 };
                    if (w) {
                      if (void 0 === o || o) {
                        var S,
                          M = "y" === g ? "top" : H,
                          A = "y" === g ? U : z,
                          T = "y" === g ? "height" : "width",
                          j = w[g],
                          I = j + m[M],
                          R = j - m[A],
                          L = f ? -O[T] / 2 : 0,
                          q = v === $ ? x[T] : O[T],
                          W = v === $ ? -O[T] : -x[T],
                          V = t.elements.arrow,
                          F = f && V ? P(V) : { width: 0, height: 0 },
                          K = t.modifiersData["arrow#persistent"]
                            ? t.modifiersData["arrow#persistent"].padding
                            : em(),
                          G = K[M],
                          X = K[A],
                          Y = eg(0, x[T], F[T]),
                          Z = b
                            ? x[T] / 2 - L - Y - G - k.mainAxis
                            : q - Y - G - k.mainAxis,
                          Q = b
                            ? -x[T] / 2 + L + Y + X + k.mainAxis
                            : W + Y + X + k.mainAxis,
                          J = t.elements.arrow && B(t.elements.arrow),
                          ee = J
                            ? "y" === g
                              ? J.clientTop || 0
                              : J.clientLeft || 0
                            : 0,
                          eo = null != (S = null == N ? void 0 : N[g]) ? S : 0,
                          ei = eg(
                            f ? C(I, j + Z - eo - ee) : I,
                            j,
                            f ? D(R, j + Q - eo) : R
                          );
                        (w[g] = ei), (_[g] = ei - j);
                      }
                      if (void 0 !== i && i) {
                        var ea,
                          es,
                          el = "x" === g ? "top" : H,
                          eu = "x" === g ? U : z,
                          ec = w[y],
                          ef = "y" === y ? "height" : "width",
                          ed = ec + m[el],
                          ep = ec - m[eu],
                          eh = -1 !== ["top", H].indexOf(h),
                          ev =
                            null != (es = null == N ? void 0 : N[y]) ? es : 0,
                          ey = eh ? ed : ec - x[ef] - O[ef] - ev + k.altAxis,
                          ew = eh ? ec + x[ef] + O[ef] - ev - k.altAxis : ep,
                          ex =
                            f && eh
                              ? (ea = eg(ey, ec, ew)) > ew
                                ? ew
                                : ea
                              : eg(f ? ey : ed, ec, f ? ew : ep);
                        (w[y] = ex), (_[y] = ex - ec);
                      }
                      t.modifiersData[r] = _;
                    }
                  },
                  requiresIfExists: ["offset"],
                },
                {
                  name: "arrow",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                    var t,
                      n,
                      r = e.state,
                      o = e.name,
                      i = e.options,
                      a = r.elements.arrow,
                      s = r.modifiersData.popperOffsets,
                      l = et(r.placement),
                      u = er(l),
                      c = [H, z].indexOf(l) >= 0 ? "height" : "width";
                    if (a && s) {
                      var f = eh(
                          "number" !=
                            typeof (t =
                              "function" == typeof (t = i.padding)
                                ? t(
                                    Object.assign({}, r.rects, {
                                      placement: r.placement,
                                    })
                                  )
                                : t)
                            ? t
                            : ev(t, F)
                        ),
                        d = P(a),
                        p = "y" === u ? "top" : H,
                        m = "y" === u ? U : z,
                        h =
                          r.rects.reference[c] +
                          r.rects.reference[u] -
                          s[u] -
                          r.rects.popper[c],
                        v = s[u] - r.rects.reference[u],
                        b = B(a),
                        g = b
                          ? "y" === u
                            ? b.clientHeight || 0
                            : b.clientWidth || 0
                          : 0,
                        y = f[p],
                        w = g - d[c] - f[m],
                        x = g / 2 - d[c] / 2 + (h / 2 - v / 2),
                        O = eg(y, x, w);
                      r.modifiersData[o] =
                        (((n = {})[u] = O), (n.centerOffset = O - x), n);
                    }
                  },
                  effect: function (e) {
                    var t = e.state,
                      n = e.options.element,
                      r = void 0 === n ? "[data-popper-arrow]" : n;
                    null != r &&
                      ("string" != typeof r ||
                        (r = t.elements.popper.querySelector(r))) &&
                      ef(t.elements.popper, r) &&
                      (t.elements.arrow = r);
                  },
                  requires: ["popperOffsets"],
                  requiresIfExists: ["preventOverflow"],
                },
                {
                  name: "hide",
                  enabled: !0,
                  phase: "main",
                  requiresIfExists: ["preventOverflow"],
                  fn: function (e) {
                    var t = e.state,
                      n = e.name,
                      r = t.rects.reference,
                      o = t.rects.popper,
                      i = t.modifiersData.preventOverflow,
                      a = eb(t, { elementContext: "reference" }),
                      s = eb(t, { altBoundary: !0 }),
                      l = ey(a, r),
                      u = ey(s, o, i),
                      c = ew(l),
                      f = ew(u);
                    (t.modifiersData[n] = {
                      referenceClippingOffsets: l,
                      popperEscapeOffsets: u,
                      isReferenceHidden: c,
                      hasPopperEscaped: f,
                    }),
                      (t.attributes.popper = Object.assign(
                        {},
                        t.attributes.popper,
                        {
                          "data-popper-reference-hidden": c,
                          "data-popper-escaped": f,
                        }
                      ));
                  },
                },
              ],
            }).defaultModifiers)
              ? []
              : o),
          (s = void 0 === (a = r.defaultOptions) ? Q : a),
          function (e, t, n) {
            void 0 === n && (n = s);
            var r,
              o = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Q, s),
                modifiersData: {},
                elements: { reference: e, popper: t },
                attributes: {},
                styles: {},
              },
              a = [],
              l = !1,
              u = {
                state: o,
                setOptions: function (n) {
                  var r,
                    l,
                    f,
                    d,
                    p,
                    m = "function" == typeof n ? n(o.options) : n;
                  c(),
                    (o.options = Object.assign({}, s, o.options, m)),
                    (o.scrollParents = {
                      reference: x(e)
                        ? q(e)
                        : e.contextElement
                        ? q(e.contextElement)
                        : [],
                      popper: q(t),
                    });
                  var h =
                    ((l = Object.keys(
                      (r = []
                        .concat(i, o.options.modifiers)
                        .reduce(function (e, t) {
                          var n = e[t.name];
                          return (
                            (e[t.name] = n
                              ? Object.assign({}, n, t, {
                                  options: Object.assign(
                                    {},
                                    n.options,
                                    t.options
                                  ),
                                  data: Object.assign({}, n.data, t.data),
                                })
                              : t),
                            e
                          );
                        }, {}))
                    ).map(function (e) {
                      return r[e];
                    })),
                    (f = new Map()),
                    (d = new Set()),
                    (p = []),
                    l.forEach(function (e) {
                      f.set(e.name, e);
                    }),
                    l.forEach(function (e) {
                      d.has(e.name) ||
                        (function e(t) {
                          d.add(t.name),
                            []
                              .concat(
                                t.requires || [],
                                t.requiresIfExists || []
                              )
                              .forEach(function (t) {
                                if (!d.has(t)) {
                                  var n = f.get(t);
                                  n && e(n);
                                }
                              }),
                            p.push(t);
                        })(e);
                    }),
                    Z.reduce(function (e, t) {
                      return e.concat(
                        p.filter(function (e) {
                          return e.phase === t;
                        })
                      );
                    }, []));
                  return (
                    (o.orderedModifiers = h.filter(function (e) {
                      return e.enabled;
                    })),
                    o.orderedModifiers.forEach(function (e) {
                      var t = e.name,
                        n = e.options,
                        r = e.effect;
                      if ("function" == typeof r) {
                        var i = r({
                          state: o,
                          name: t,
                          instance: u,
                          options: void 0 === n ? {} : n,
                        });
                        a.push(i || function () {});
                      }
                    }),
                    u.update()
                  );
                },
                forceUpdate: function () {
                  if (!l) {
                    var e,
                      t,
                      n,
                      r,
                      i,
                      a,
                      s,
                      c,
                      f,
                      d,
                      p,
                      m,
                      h = o.elements,
                      v = h.reference,
                      b = h.popper;
                    if (J(v, b)) {
                      (o.rects = {
                        reference:
                          ((t = B(b)),
                          (n = "fixed" === o.options.strategy),
                          (r = O(t)),
                          (c =
                            O(t) &&
                            ((a =
                              k((i = t.getBoundingClientRect()).width) /
                                t.offsetWidth || 1),
                            (s = k(i.height) / t.offsetHeight || 1),
                            1 !== a || 1 !== s)),
                          (f = T(t)),
                          (d = S(v, c, n)),
                          (p = { scrollLeft: 0, scrollTop: 0 }),
                          (m = { x: 0, y: 0 }),
                          (r || (!r && !n)) &&
                            (("body" !== A(t) || R(f)) &&
                              (p =
                                (e = t) !== w(e) && O(e)
                                  ? {
                                      scrollLeft: e.scrollLeft,
                                      scrollTop: e.scrollTop,
                                    }
                                  : M(e)),
                            O(t)
                              ? ((m = S(t, !0)),
                                (m.x += t.clientLeft),
                                (m.y += t.clientTop))
                              : f && (m.x = j(f))),
                          {
                            x: d.left + p.scrollLeft - m.x,
                            y: d.top + p.scrollTop - m.y,
                            width: d.width,
                            height: d.height,
                          }),
                        popper: P(b),
                      }),
                        (o.reset = !1),
                        (o.placement = o.options.placement),
                        o.orderedModifiers.forEach(function (e) {
                          return (o.modifiersData[e.name] = Object.assign(
                            {},
                            e.data
                          ));
                        });
                      for (var g = 0; g < o.orderedModifiers.length; g++) {
                        if (!0 === o.reset) {
                          (o.reset = !1), (g = -1);
                          continue;
                        }
                        var y = o.orderedModifiers[g],
                          x = y.fn,
                          E = y.options,
                          D = void 0 === E ? {} : E,
                          C = y.name;
                        "function" == typeof x &&
                          (o =
                            x({ state: o, options: D, name: C, instance: u }) ||
                            o);
                      }
                    }
                  }
                },
                update: function () {
                  return (
                    r ||
                      (r = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (r = void 0),
                            e(
                              new Promise(function (e) {
                                u.forceUpdate(), e(o);
                              })
                            );
                        });
                      })),
                    r
                  );
                },
                destroy: function () {
                  c(), (l = !0);
                },
              };
            if (!J(e, t)) return u;
            function c() {
              a.forEach(function (e) {
                return e();
              }),
                (a = []);
            }
            return (
              u.setOptions(n).then(function (e) {
                !l && n.onFirstUpdate && n.onFirstUpdate(e);
              }),
              u
            );
          }),
        eO = n(2265);
      function eE(e = {}) {
        let {
            enabled: t = !0,
            modifiers: n,
            placement: r = "bottom",
            strategy: o = "absolute",
            arrowPadding: i = 8,
            eventListeners: a = !0,
            offset: s,
            gutter: f = 8,
            flip: p = !0,
            boundary: m = "clippingParents",
            preventOverflow: v = !0,
            matchWidth: w,
            direction: x = "ltr",
          } = e,
          O = (0, eO.useRef)(null),
          E = (0, eO.useRef)(null),
          D = (0, eO.useRef)(null),
          C = (function (e, t = "ltr") {
            var n, r;
            let o = (null == (n = b[e]) ? void 0 : n[t]) || e;
            return "ltr" === t ? o : null != (r = g[e]) ? r : o;
          })(r, x),
          k = (0, eO.useRef)(() => {}),
          N = (0, eO.useCallback)(() => {
            var e;
            t &&
              O.current &&
              E.current &&
              (null == (e = k.current) || e.call(k),
              (D.current = ex(O.current, E.current, {
                placement: C,
                modifiers: [
                  h,
                  d,
                  c,
                  { ...u, enabled: !!w },
                  { name: "eventListeners", ...(0, l.$B)(a) },
                  { name: "arrow", options: { padding: i } },
                  {
                    name: "offset",
                    options: { offset: null != s ? s : [0, f] },
                  },
                  { name: "flip", enabled: !!p, options: { padding: 8 } },
                  {
                    name: "preventOverflow",
                    enabled: !!v,
                    options: { boundary: m },
                  },
                  ...(null != n ? n : []),
                ],
                strategy: o,
              })),
              D.current.forceUpdate(),
              (k.current = D.current.destroy));
          }, [C, t, n, w, a, i, s, f, p, v, m, o]);
        (0, eO.useEffect)(
          () => () => {
            var e;
            O.current ||
              E.current ||
              (null == (e = D.current) || e.destroy(), (D.current = null));
          },
          []
        );
        let _ = (0, eO.useCallback)(
            (e) => {
              (O.current = e), N();
            },
            [N]
          ),
          S = (0, eO.useCallback)(
            (e = {}, t = null) => ({ ...e, ref: (0, y.lq)(_, t) }),
            [_]
          ),
          M = (0, eO.useCallback)(
            (e) => {
              (E.current = e), N();
            },
            [N]
          ),
          A = (0, eO.useCallback)(
            (e = {}, t = null) => ({
              ...e,
              ref: (0, y.lq)(M, t),
              style: {
                ...e.style,
                position: o,
                minWidth: w ? void 0 : "max-content",
                inset: "0 auto auto 0",
              },
            }),
            [o, M, w]
          ),
          T = (0, eO.useCallback)((e = {}, t = null) => {
            let { size: n, shadowColor: r, bg: o, style: i, ...a } = e;
            return {
              ...a,
              ref: t,
              "data-popper-arrow": "",
              style: (function (e) {
                let { size: t, shadowColor: n, bg: r, style: o } = e,
                  i = { ...o, position: "absolute" };
                return (
                  t && (i["--popper-arrow-size"] = t),
                  n && (i["--popper-arrow-shadow-color"] = n),
                  r && (i["--popper-arrow-bg"] = r),
                  i
                );
              })(e),
            };
          }, []),
          j = (0, eO.useCallback)(
            (e = {}, t = null) => ({
              ...e,
              ref: t,
              "data-popper-arrow-inner": "",
            }),
            []
          );
        return {
          update() {
            var e;
            null == (e = D.current) || e.update();
          },
          forceUpdate() {
            var e;
            null == (e = D.current) || e.forceUpdate();
          },
          transformOrigin: l.Dq.transformOrigin.varRef,
          referenceRef: _,
          popperRef: M,
          getPopperProps: A,
          getArrowProps: T,
          getArrowInnerProps: j,
          getReferenceProps: S,
        };
      }
    },
    61113: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return i;
        },
      });
      var r = n(37977),
        o = n(2265);
      function i(e = {}) {
        let { onClose: t, onOpen: n, isOpen: i, id: a } = e,
          s = (0, r.W)(n),
          l = (0, r.W)(t),
          [u, c] = (0, o.useState)(e.defaultIsOpen || !1),
          f = void 0 !== i ? i : u,
          d = void 0 !== i,
          p = (0, o.useId)(),
          m = null != a ? a : `disclosure-${p}`,
          h = (0, o.useCallback)(() => {
            d || c(!1), null == l || l();
          }, [d, l]),
          v = (0, o.useCallback)(() => {
            d || c(!0), null == s || s();
          }, [d, s]),
          b = (0, o.useCallback)(() => {
            f ? h() : v();
          }, [f, v, h]);
        return {
          isOpen: f,
          onOpen: v,
          onClose: h,
          onToggle: b,
          isControlled: d,
          getButtonProps: function (e = {}) {
            return {
              ...e,
              "aria-expanded": f,
              "aria-controls": m,
              onClick(t) {
                var n;
                null == (n = e.onClick) || n.call(e, t), b();
              },
            };
          },
          getDisclosureProps: function (e = {}) {
            return { ...e, hidden: !f, id: m };
          },
        };
      }
    },
    10931: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return i;
        },
      });
      var r = n(2265),
        o = n(37977);
      function i(e, t, n, i) {
        let a = (0, o.W)(n);
        return (
          (0, r.useEffect)(() => {
            let r = "function" == typeof e ? e() : null != e ? e : document;
            if (n && r)
              return (
                r.addEventListener(t, a, i),
                () => {
                  r.removeEventListener(t, a, i);
                }
              );
          }, [t, e, i, a, n]),
          () => {
            let n = "function" == typeof e ? e() : null != e ? e : document;
            null == n || n.removeEventListener(t, a, i);
          }
        );
      }
    },
  },
]);
