"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [161],
  {
    18085: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ClientClerkProvider: function () {
            return d;
          },
        });
      var r = n(65567),
        i = n(24033),
        l = n(2265),
        o = n(85791);
      let u = "undefined" != typeof window ? l.useLayoutEffect : l.useEffect;
      var a = n(62601);
      let s = (e) => ({
          ...e,
          frontendApi:
            e.frontendApi || a.env.NEXT_PUBLIC_CLERK_FRONTEND_API || "",
          publishableKey: e.publishableKey || "pk_live_Y2xlcmsuc3Vuby5haSQ",
          clerkJSUrl: e.clerkJSUrl || a.env.NEXT_PUBLIC_CLERK_JS,
          clerkJSVersion:
            e.clerkJSVersion || a.env.NEXT_PUBLIC_CLERK_JS_VERSION,
          proxyUrl: e.proxyUrl || a.env.NEXT_PUBLIC_CLERK_PROXY_URL || "",
          domain: e.domain || a.env.NEXT_PUBLIC_CLERK_DOMAIN || "",
          isSatellite:
            e.isSatellite || "true" === a.env.NEXT_PUBLIC_CLERK_IS_SATELLITE,
          signInUrl: e.signInUrl || a.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "",
          signUpUrl: e.signUpUrl || a.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "",
          afterSignInUrl:
            e.afterSignInUrl || a.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL || "",
          afterSignUpUrl:
            e.afterSignUpUrl || a.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL || "",
          sdkMetadata: { name: "@clerk/nextjs", version: "4.29.3" },
        }),
        c = () => {
          let { push: e } = (0, i.useRouter)(),
            t = (0, i.usePathname)() + (0, i.useSearchParams)().toString();
          return (
            (0, l.useEffect)(() => {
              window.__clerk_nav_ref = (t) =>
                t === window.location.href.replace(window.location.origin, "")
                  ? (e(t), Promise.resolve())
                  : new Promise((n) => {
                      window.__clerk_nav_resolves_ref
                        ? window.__clerk_nav_resolves_ref.push(n)
                        : (window.__clerk_nav_resolves_ref = [n]),
                        e(t);
                    });
            }, [t]),
            (0, l.useEffect)(() => {
              window.__clerk_nav_resolves_ref &&
                window.__clerk_nav_resolves_ref.length &&
                window.__clerk_nav_resolves_ref.forEach((e) => e()),
                (window.__clerk_nav_resolves_ref = []);
            }),
            (0, l.useCallback)((e) => window.__clerk_nav_ref(e), [])
          );
        },
        d = (e) => {
          let { __unstable_invokeMiddlewareOnAuthStateChange: t = !0 } = e,
            n = (0, i.useRouter)(),
            a = c();
          u(() => {
            (window.__unstable__onBeforeSetActive = () => {
              t && (n.refresh(), n.push(window.location.href));
            }),
              (window.__unstable__onAfterSetActive = () => {
                n.refresh();
              });
          }, []);
          let d = s({ ...e, navigate: a });
          return l.createElement(
            o.f,
            { options: d },
            l.createElement(r.El, { ...d })
          );
        };
    },
    85791: function (e, t, n) {
      n.d(t, {
        f: function () {
          return o;
        },
        k: function () {
          return l;
        },
      });
      var r = n(2265);
      let i = r.createContext(void 0);
      i.displayName = "ClerkNextOptionsCtx";
      let l = () => r.useContext(i).value,
        o = (e) => {
          let { children: t, options: n } = e;
          return r.createElement(i.Provider, { value: { value: n } }, t);
        };
    },
    63530: function (e, t, n) {
      n.r(t),
        n.d(t, {
          AuthenticateWithRedirectCallback: function () {
            return r.vn;
          },
          ClerkLoaded: function () {
            return r.a7;
          },
          ClerkLoading: function () {
            return r.qI;
          },
          MultisessionAppSupport: function () {
            return r.KM;
          },
          Protect: function () {
            return r.Cv;
          },
          RedirectToCreateOrganization: function () {
            return r.gM;
          },
          RedirectToOrganizationProfile: function () {
            return r.yB;
          },
          RedirectToSignIn: function () {
            return r.N1;
          },
          RedirectToSignUp: function () {
            return r.C2;
          },
          RedirectToUserProfile: function () {
            return r.sO;
          },
          SignedIn: function () {
            return r.CH;
          },
          SignedOut: function () {
            return r.tj;
          },
        });
      var r = n(65567);
    },
    11507: function (e, t, n) {
      n.r(t),
        n.d(t, {
          EmailLinkErrorCode: function () {
            return r._L;
          },
          MagicLinkErrorCode: function () {
            return r.X1;
          },
          WithClerk: function () {
            return r._E;
          },
          WithSession: function () {
            return r.CJ;
          },
          WithUser: function () {
            return r.Gi;
          },
          isClerkAPIResponseError: function () {
            return r.kD;
          },
          isEmailLinkError: function () {
            return r.G1;
          },
          isKnownError: function () {
            return r.sZ;
          },
          isMagicLinkError: function () {
            return r.V9;
          },
          isMetamaskError: function () {
            return r.ZC;
          },
          useAuth: function () {
            return r.aC;
          },
          useClerk: function () {
            return r.ll;
          },
          useEmailLink: function () {
            return r.E2;
          },
          useMagicLink: function () {
            return r.jS;
          },
          useOrganization: function () {
            return r.o8;
          },
          useOrganizationList: function () {
            return r.eW;
          },
          useOrganizations: function () {
            return r.qi;
          },
          useSession: function () {
            return r.kP;
          },
          useSessionList: function () {
            return r.xo;
          },
          useSignIn: function () {
            return r.zq;
          },
          useSignUp: function () {
            return r.QS;
          },
          useUser: function () {
            return r.aF;
          },
          withClerk: function () {
            return r.r0;
          },
          withSession: function () {
            return r.NA;
          },
          withUser: function () {
            return r.ns;
          },
        });
      var r = n(65567);
    },
    61726: function (e, t, n) {
      n.r(t),
        n.d(t, {
          CreateOrganization: function () {
            return r.Gp;
          },
          OrganizationList: function () {
            return r.Bg;
          },
          OrganizationProfile: function () {
            return r.A;
          },
          OrganizationSwitcher: function () {
            return r.Li;
          },
          SignIn: function () {
            return o;
          },
          SignInButton: function () {
            return r.$d;
          },
          SignInWithMetamaskButton: function () {
            return r.qu;
          },
          SignOutButton: function () {
            return r.AM;
          },
          SignUp: function () {
            return u;
          },
          SignUpButton: function () {
            return r.gX;
          },
          UserButton: function () {
            return r.l8;
          },
          UserProfile: function () {
            return r.Iw;
          },
        });
      var r = n(65567),
        i = n(2265),
        l = n(85791);
      let o = (e) => {
          let { signInUrl: t } = (0, l.k)();
          return t
            ? i.createElement(r.cL, { routing: "path", path: t, ...e })
            : i.createElement(r.cL, { ...e });
        },
        u = (e) => {
          let { signUpUrl: t } = (0, l.k)();
          return t
            ? i.createElement(r.Mo, { routing: "path", path: t, ...e })
            : i.createElement(r.Mo, { ...e });
        };
    },
    98045: function (e, t, n) {
      n.d(t, {
        E: function () {
          return c;
        },
      });
      var r = n(58250),
        i = n(57437),
        l = (0, r.G)(function (e, t) {
          let { htmlWidth: n, htmlHeight: r, alt: l, ...o } = e;
          return (0,
          i.jsx)("img", { width: n, height: r, ref: t, alt: l, ...o });
        });
      l.displayName = "NativeImage";
      var o = n(67673),
        u = n(2265),
        a = (e, t) =>
          ("loaded" !== e && "beforeLoadOrError" === t) ||
          ("failed" === e && "onError" === t),
        s = n(83032),
        c = (0, r.G)(function (e, t) {
          let {
              fallbackSrc: n,
              fallback: r,
              src: c,
              srcSet: d,
              align: f,
              fit: h,
              loading: v,
              ignoreFallback: p,
              crossOrigin: m,
              fallbackStrategy: _ = "beforeLoadOrError",
              referrerPolicy: g,
              ...w
            } = e,
            E = void 0 !== n || void 0 !== r,
            S = null != v || p || !E,
            b = a(
              (function (e) {
                let {
                    loading: t,
                    src: n,
                    srcSet: r,
                    onLoad: i,
                    onError: l,
                    crossOrigin: a,
                    sizes: s,
                    ignoreFallback: c,
                  } = e,
                  [d, f] = (0, u.useState)("pending");
                (0, u.useEffect)(() => {
                  f(n ? "loading" : "pending");
                }, [n]);
                let h = (0, u.useRef)(),
                  v = (0, u.useCallback)(() => {
                    if (!n) return;
                    p();
                    let e = new Image();
                    (e.src = n),
                      a && (e.crossOrigin = a),
                      r && (e.srcset = r),
                      s && (e.sizes = s),
                      t && (e.loading = t),
                      (e.onload = (e) => {
                        p(), f("loaded"), null == i || i(e);
                      }),
                      (e.onerror = (e) => {
                        p(), f("failed"), null == l || l(e);
                      }),
                      (h.current = e);
                  }, [n, a, r, s, i, l, t]),
                  p = () => {
                    h.current &&
                      ((h.current.onload = null),
                      (h.current.onerror = null),
                      (h.current = null));
                  };
                return (
                  (0, o.G)(() => {
                    if (!c)
                      return (
                        "loading" === d && v(),
                        () => {
                          p();
                        }
                      );
                  }, [d, v, c]),
                  c ? "loaded" : d
                );
              })({ ...e, crossOrigin: m, ignoreFallback: S }),
              _
            ),
            k = {
              ref: t,
              objectFit: h,
              objectPosition: f,
              ...(S
                ? w
                : (function (e, t = []) {
                    let n = Object.assign({}, e);
                    for (let e of t) e in n && delete n[e];
                    return n;
                  })(w, ["onError", "onLoad"])),
            };
          return b
            ? r ||
                (0, i.jsx)(s.m.img, {
                  as: l,
                  className: "chakra-image__placeholder",
                  src: n,
                  ...k,
                })
            : (0, i.jsx)(s.m.img, {
                as: l,
                src: c,
                srcSet: d,
                crossOrigin: m,
                loading: v,
                referrerPolicy: g,
                className: "chakra-image",
                ...k,
              });
        });
      c.displayName = "Image";
    },
    44007: function (e, t, n) {
      n.d(t, {
        iR: function () {
          return et;
        },
        Ms: function () {
          return ei;
        },
        gs: function () {
          return en;
        },
        Uj: function () {
          return er;
        },
      });
      var r = (e) => (e ? "" : void 0),
        i = (e) => !!e || void 0,
        l = (...e) => e.filter(Boolean).join(" ");
      function o(...e) {
        return function (t) {
          e.some(
            (e) => (null == e || e(t), null == t ? void 0 : t.defaultPrevented)
          );
        };
      }
      function u(e) {
        let { orientation: t, vertical: n, horizontal: r } = e;
        return "vertical" === t ? n : r;
      }
      var a = { width: 0, height: 0 },
        s = (e) => e || a;
      function c(e, t = "page") {
        return e.touches
          ? (function (e, t = "page") {
              let n = e.touches[0] || e.changedTouches[0];
              return { x: n[`${t}X`], y: n[`${t}Y`] };
            })(e, t)
          : (function (e, t = "page") {
              return { x: e[`${t}X`], y: e[`${t}Y`] };
            })(e, t);
      }
      function d(e, t, n, r) {
        var i;
        return (
          (i = (function (e, t = !1) {
            function n(t) {
              e(t, { point: c(t) });
            }
            return t
              ? (e) => {
                  let t = (function (e) {
                    var t;
                    let n = null != (t = e.view) ? t : window;
                    return void 0 !== n.PointerEvent &&
                      e instanceof n.PointerEvent
                      ? !("mouse" !== e.pointerType)
                      : e instanceof n.MouseEvent;
                  })(e);
                  (!t || (t && 0 === e.button)) && n(e);
                }
              : n;
          })(n, "pointerdown" === t)),
          e.addEventListener(t, i, r),
          () => {
            e.removeEventListener(t, i, r);
          }
        );
      }
      let f = (1 / 60) * 1e3,
        h =
          "undefined" != typeof performance
            ? () => performance.now()
            : () => Date.now(),
        v =
          "undefined" != typeof window
            ? (e) => window.requestAnimationFrame(e)
            : (e) => setTimeout(() => e(h()), f),
        p = !0,
        m = !1,
        _ = !1,
        g = { delta: 0, timestamp: 0 },
        w = ["read", "update", "preRender", "render", "postRender"],
        E = w.reduce(
          (e, t) => (
            (e[t] = (function (e) {
              let t = [],
                n = [],
                r = 0,
                i = !1,
                l = !1,
                o = new WeakSet(),
                u = {
                  schedule: (e, l = !1, u = !1) => {
                    let a = u && i,
                      s = a ? t : n;
                    return (
                      l && o.add(e),
                      -1 === s.indexOf(e) &&
                        (s.push(e), a && i && (r = t.length)),
                      e
                    );
                  },
                  cancel: (e) => {
                    let t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1), o.delete(e);
                  },
                  process: (a) => {
                    if (i) {
                      l = !0;
                      return;
                    }
                    if (
                      ((i = !0),
                      ([t, n] = [n, t]),
                      (n.length = 0),
                      (r = t.length))
                    )
                      for (let n = 0; n < r; n++) {
                        let r = t[n];
                        r(a), o.has(r) && (u.schedule(r), e());
                      }
                    (i = !1), l && ((l = !1), u.process(a));
                  },
                };
              return u;
            })(() => (m = !0))),
            e
          ),
          {}
        ),
        S = w.reduce((e, t) => {
          let n = E[t];
          return (
            (e[t] = (e, t = !1, r = !1) => (m || C(), n.schedule(e, t, r))), e
          );
        }, {}),
        b = w.reduce((e, t) => ((e[t] = E[t].cancel), e), {});
      w.reduce((e, t) => ((e[t] = () => E[t].process(g)), e), {});
      let k = (e) => E[e].process(g),
        y = (e) => {
          (m = !1),
            (g.delta = p ? f : Math.max(Math.min(e - g.timestamp, 40), 1)),
            (g.timestamp = e),
            (_ = !0),
            w.forEach(k),
            (_ = !1),
            m && ((p = !1), v(y));
        },
        C = () => {
          (m = !0), (p = !0), _ || v(y);
        },
        x = () => g;
      var U = Object.defineProperty,
        L = (e, t, n) =>
          t in e
            ? U(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        N = (e, t, n) => (L(e, "symbol" != typeof t ? t + "" : t, n), n),
        I = class {
          constructor(e, t, n) {
            var r;
            if (
              (N(this, "history", []),
              N(this, "startEvent", null),
              N(this, "lastEvent", null),
              N(this, "lastEventInfo", null),
              N(this, "handlers", {}),
              N(this, "removeListeners", () => {}),
              N(this, "threshold", 3),
              N(this, "win"),
              N(this, "updatePoint", () => {
                var e, t;
                if (!(this.lastEvent && this.lastEventInfo)) return;
                let n = R(this.lastEventInfo, this.history),
                  r = null !== this.startEvent,
                  i =
                    ((e = n.offset),
                    (t = { x: 0, y: 0 }),
                    (A(e) && A(t)
                      ? Math.sqrt(M(e.x, t.x) ** 2 + M(e.y, t.y) ** 2)
                      : 0) >= this.threshold);
                if (!r && !i) return;
                let { timestamp: l } = x();
                this.history.push({ ...n.point, timestamp: l });
                let { onStart: o, onMove: u } = this.handlers;
                r ||
                  (null == o || o(this.lastEvent, n),
                  (this.startEvent = this.lastEvent)),
                  null == u || u(this.lastEvent, n);
              }),
              N(this, "onPointerMove", (e, t) => {
                (this.lastEvent = e),
                  (this.lastEventInfo = t),
                  S.update(this.updatePoint, !0);
              }),
              N(this, "onPointerUp", (e, t) => {
                let n = R(t, this.history),
                  { onEnd: r, onSessionEnd: i } = this.handlers;
                null == i || i(e, n),
                  this.end(),
                  r && this.startEvent && (null == r || r(e, n));
              }),
              (this.win = null != (r = e.view) ? r : window),
              e.touches && e.touches.length > 1)
            )
              return;
            (this.handlers = t),
              n && (this.threshold = n),
              e.stopPropagation(),
              e.preventDefault();
            let i = { point: c(e) },
              { timestamp: l } = x();
            this.history = [{ ...i.point, timestamp: l }];
            let { onSessionStart: o } = t;
            null == o || o(e, R(i, this.history)),
              (this.removeListeners = (function (...e) {
                return (t) => e.reduce((e, t) => t(e), t);
              })(
                d(this.win, "pointermove", this.onPointerMove),
                d(this.win, "pointerup", this.onPointerUp),
                d(this.win, "pointercancel", this.onPointerUp)
              ));
          }
          updateHandlers(e) {
            this.handlers = e;
          }
          end() {
            var e;
            null == (e = this.removeListeners) || e.call(this),
              b.update(this.updatePoint);
          }
        };
      function P(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function R(e, t) {
        return {
          point: e.point,
          delta: P(e.point, t[t.length - 1]),
          offset: P(e.point, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            let n = e.length - 1,
              r = null,
              i = e[e.length - 1];
            for (
              ;
              n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > T(0.1)));

            )
              n--;
            if (!r) return { x: 0, y: 0 };
            let l = (i.timestamp - r.timestamp) / 1e3;
            if (0 === l) return { x: 0, y: 0 };
            let o = { x: (i.x - r.x) / l, y: (i.y - r.y) / l };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(t, 0),
        };
      }
      var T = (e) => 1e3 * e;
      function M(e, t) {
        return Math.abs(e - t);
      }
      function A(e) {
        return "x" in e && "y" in e;
      }
      var O = n(2265);
      function B(e) {
        let t = (0, O.useRef)(null);
        return (t.current = e), t;
      }
      var z = n(37977),
        $ = n(89656),
        j = (null == globalThis ? void 0 : globalThis.document)
          ? O.useLayoutEffect
          : O.useEffect,
        W = n(45663);
      function D(e, t, n) {
        return (function (e, t) {
          let n = (function (e) {
              let t = parseFloat(e);
              return "number" != typeof t || Number.isNaN(t) ? 0 : t;
            })(e),
            r = 10 ** (null != t ? t : 10);
          return (n = Math.round(n * r) / r), t ? n.toFixed(t) : n.toString();
        })(
          Math.round((e - t) / n) * n + t,
          (function (e) {
            if (!Number.isFinite(e)) return 0;
            let t = 1,
              n = 0;
            for (; Math.round(e * t) / t !== e; ) (t *= 10), (n += 1);
            return n;
          })(n)
        );
      }
      function F(e, t, n) {
        return null == e
          ? e
          : (n < t && console.warn("clamp: max cannot be less than min"),
            Math.min(Math.max(e, t), n));
      }
      var K = n(310),
        X = n(58250),
        G = n(89839),
        q = n(50446),
        V = n(90865),
        H = n(83032),
        J = n(57437),
        [Y, Q] = (0, K.k)({
          name: "SliderContext",
          hookName: "useSliderContext",
          providerName: "<Slider />",
        }),
        [Z, ee] = (0, K.k)({
          name: "SliderStylesContext",
          hookName: "useSliderStyles",
          providerName: "<Slider />",
        }),
        et = (0, X.G)((e, t) => {
          var n;
          let c = {
              ...e,
              orientation:
                null != (n = null == e ? void 0 : e.orientation)
                  ? n
                  : "horizontal",
            },
            f = (0, G.jC)("Slider", c),
            h = (0, q.Lr)(c),
            { direction: v } = (0, V.F)();
          h.direction = v;
          let {
              getInputProps: p,
              getRootProps: m,
              ..._
            } = (function (e) {
              var t;
              let {
                  min: n = 0,
                  max: l = 100,
                  onChange: c,
                  value: f,
                  defaultValue: h,
                  isReversed: v,
                  direction: p = "ltr",
                  orientation: m = "horizontal",
                  id: _,
                  isDisabled: g,
                  isReadOnly: w,
                  onChangeStart: E,
                  onChangeEnd: S,
                  step: b = 1,
                  getAriaValueText: k,
                  "aria-valuetext": y,
                  "aria-label": C,
                  "aria-labelledby": x,
                  name: U,
                  focusThumbOnChange: L = !0,
                  ...N
                } = e,
                P = (0, z.W)(E),
                R = (0, z.W)(S),
                T = (0, z.W)(k),
                M = (function (e) {
                  let { isReversed: t, direction: n, orientation: r } = e;
                  return "ltr" === n || "vertical" === r ? t : !t;
                })({ isReversed: v, direction: p, orientation: m }),
                [A, K] = (function (e) {
                  let {
                      value: t,
                      defaultValue: n,
                      onChange: r,
                      shouldUpdate: i = (e, t) => e !== t,
                    } = e,
                    l = (0, z.W)(r),
                    o = (0, z.W)(i),
                    [u, a] = (0, O.useState)(n),
                    s = void 0 !== t,
                    c = s ? t : u,
                    d = (0, z.W)(
                      (e) => {
                        let t = "function" == typeof e ? e(c) : e;
                        o(c, t) && (s || a(t), l(t));
                      },
                      [s, l, c, o]
                    );
                  return [c, d];
                })({
                  value: f,
                  defaultValue: null != h ? h : l < n ? n : n + (l - n) / 2,
                  onChange: c,
                }),
                [X, G] = (0, O.useState)(!1),
                [q, V] = (0, O.useState)(!1),
                H = !(g || w),
                J = (l - n) / 10,
                Y = b || (l - n) / 100,
                Q = F(A, n, l),
                Z = l - Q + n,
                ee = (((M ? Z : Q) - n) * 100) / (l - n),
                et = "vertical" === m,
                en = B({
                  min: n,
                  max: l,
                  step: b,
                  isDisabled: g,
                  value: Q,
                  isInteractive: H,
                  isReversed: M,
                  isVertical: et,
                  eventSource: null,
                  focusThumbOnChange: L,
                  orientation: m,
                }),
                er = (0, O.useRef)(null),
                ei = (0, O.useRef)(null),
                el = (0, O.useRef)(null),
                eo = (0, O.useId)(),
                eu = null != _ ? _ : eo,
                [ea, es] = [`slider-thumb-${eu}`, `slider-track-${eu}`],
                ec = (0, O.useCallback)(
                  (e) => {
                    var t, n, r, i;
                    if (!er.current) return;
                    let l = en.current;
                    l.eventSource = "pointer";
                    let o = er.current.getBoundingClientRect(),
                      { clientX: u, clientY: a } =
                        null != (n = null == (t = e.touches) ? void 0 : t[0])
                          ? n
                          : e,
                      s =
                        (et ? o.bottom - a : u - o.left) /
                        (et ? o.height : o.width);
                    M && (s = 1 - s);
                    let c = ((r = s), (i = l.min), (l.max - i) * r + i);
                    return (
                      l.step && (c = parseFloat(D(c, l.min, l.step))),
                      (c = F(c, l.min, l.max))
                    );
                  },
                  [et, M, en]
                ),
                ed = (0, O.useCallback)(
                  (e) => {
                    let t = en.current;
                    t.isInteractive &&
                      K(
                        (e = F((e = parseFloat(D(e, t.min, Y))), t.min, t.max))
                      );
                  },
                  [Y, K, en]
                ),
                ef = (0, O.useMemo)(
                  () => ({
                    stepUp(e = Y) {
                      ed(M ? Q - e : Q + e);
                    },
                    stepDown(e = Y) {
                      ed(M ? Q + e : Q - e);
                    },
                    reset() {
                      ed(h || 0);
                    },
                    stepTo(e) {
                      ed(e);
                    },
                  }),
                  [ed, M, Q, Y, h]
                ),
                eh = (0, O.useCallback)(
                  (e) => {
                    let t = en.current,
                      n = {
                        ArrowRight: () => ef.stepUp(),
                        ArrowUp: () => ef.stepUp(),
                        ArrowLeft: () => ef.stepDown(),
                        ArrowDown: () => ef.stepDown(),
                        PageUp: () => ef.stepUp(J),
                        PageDown: () => ef.stepDown(J),
                        Home: () => ed(t.min),
                        End: () => ed(t.max),
                      }[e.key];
                    n &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      n(e),
                      (t.eventSource = "keyboard"));
                  },
                  [ef, ed, J, en]
                ),
                ev = null != (t = null == T ? void 0 : T(Q)) ? t : y,
                ep = (function (e) {
                  let [t] = (function ({
                    getNodes: e,
                    observeMutation: t = !0,
                  }) {
                    let [n, r] = (0, O.useState)([]),
                      [i, l] = (0, O.useState)(0);
                    return (
                      j(() => {
                        let n = e(),
                          i = n.map((e, t) =>
                            (function (e, t) {
                              if (!e) {
                                t(void 0);
                                return;
                              }
                              t({
                                width: e.offsetWidth,
                                height: e.offsetHeight,
                              });
                              let n = new (
                                e.ownerDocument.defaultView ?? window
                              ).ResizeObserver((n) => {
                                let r, i;
                                if (!Array.isArray(n) || !n.length) return;
                                let [l] = n;
                                if ("borderBoxSize" in l) {
                                  let e = l.borderBoxSize,
                                    t = Array.isArray(e) ? e[0] : e;
                                  (r = t.inlineSize), (i = t.blockSize);
                                } else
                                  (r = e.offsetWidth), (i = e.offsetHeight);
                                t({ width: r, height: i });
                              });
                              return (
                                n.observe(e, { box: "border-box" }),
                                () => n.unobserve(e)
                              );
                            })(e, (e) => {
                              r((n) => [
                                ...n.slice(0, t),
                                e,
                                ...n.slice(t + 1),
                              ]);
                            })
                          );
                        if (t) {
                          let e = n[0];
                          i.push(
                            (function (e, t) {
                              var n, r;
                              if (!e || !e.parentElement) return;
                              let i = new (
                                null !=
                                (r =
                                  null == (n = e.ownerDocument)
                                    ? void 0
                                    : n.defaultView)
                                  ? r
                                  : window
                              ).MutationObserver(() => {
                                t();
                              });
                              return (
                                i.observe(e.parentElement, { childList: !0 }),
                                () => {
                                  i.disconnect();
                                }
                              );
                            })(e, () => {
                              l((e) => e + 1);
                            })
                          );
                        }
                        return () => {
                          i.forEach((e) => {
                            null == e || e();
                          });
                        };
                      }, [i]),
                      n
                    );
                  })({
                    observeMutation: !1,
                    getNodes: () => [
                      "object" == typeof e && null !== e && "current" in e
                        ? e.current
                        : e,
                    ],
                  });
                  return t;
                })(ei),
                {
                  getThumbStyle: em,
                  rootStyle: e_,
                  trackStyle: eg,
                  innerTrackStyle: ew,
                } = (0, O.useMemo)(() => {
                  let e = en.current,
                    t = null != ep ? ep : { width: 0, height: 0 };
                  return (function (e) {
                    let {
                        orientation: t,
                        thumbPercents: n,
                        thumbRects: r,
                        isReversed: i,
                      } = e,
                      l =
                        "vertical" === t
                          ? r.reduce(
                              (e, t) => (s(e).height > s(t).height ? e : t),
                              a
                            )
                          : r.reduce(
                              (e, t) => (s(e).width > s(t).width ? e : t),
                              a
                            ),
                      o = {
                        position: "relative",
                        touchAction: "none",
                        WebkitTapHighlightColor: "rgba(0,0,0,0)",
                        userSelect: "none",
                        outline: 0,
                        ...u({
                          orientation: t,
                          vertical: l
                            ? {
                                paddingLeft: l.width / 2,
                                paddingRight: l.width / 2,
                              }
                            : {},
                          horizontal: l
                            ? {
                                paddingTop: l.height / 2,
                                paddingBottom: l.height / 2,
                              }
                            : {},
                        }),
                      },
                      c = {
                        position: "absolute",
                        ...u({
                          orientation: t,
                          vertical: {
                            left: "50%",
                            transform: "translateX(-50%)",
                            height: "100%",
                          },
                          horizontal: {
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "100%",
                          },
                        }),
                      },
                      d = 1 === n.length,
                      f = [0, i ? 100 - n[0] : n[0]],
                      h = d ? f : n,
                      v = h[0];
                    !d && i && (v = 100 - v);
                    let p = Math.abs(h[h.length - 1] - h[0]),
                      m = {
                        ...c,
                        ...u({
                          orientation: t,
                          vertical: i
                            ? { height: `${p}%`, top: `${v}%` }
                            : { height: `${p}%`, bottom: `${v}%` },
                          horizontal: i
                            ? { width: `${p}%`, right: `${v}%` }
                            : { width: `${p}%`, left: `${v}%` },
                        }),
                      };
                    return {
                      trackStyle: c,
                      innerTrackStyle: m,
                      rootStyle: o,
                      getThumbStyle: (e) => {
                        var i;
                        let l = null != (i = r[e]) ? i : a;
                        return {
                          position: "absolute",
                          userSelect: "none",
                          WebkitUserSelect: "none",
                          MozUserSelect: "none",
                          msUserSelect: "none",
                          touchAction: "none",
                          ...u({
                            orientation: t,
                            vertical: {
                              bottom: `calc(${n[e]}% - ${l.height / 2}px)`,
                            },
                            horizontal: {
                              left: `calc(${n[e]}% - ${l.width / 2}px)`,
                            },
                          }),
                        };
                      },
                    };
                  })({
                    isReversed: M,
                    orientation: e.orientation,
                    thumbRects: [t],
                    thumbPercents: [ee],
                  });
                }, [M, ep, ee, en]),
                eE = (0, O.useCallback)(() => {
                  en.current.focusThumbOnChange &&
                    setTimeout(() => {
                      var e;
                      return null == (e = ei.current) ? void 0 : e.focus();
                    });
                }, [en]);
              function eS(e) {
                let t = ec(e);
                null != t && t !== en.current.value && K(t);
              }
              (0, $.r)(() => {
                let e = en.current;
                eE(), "keyboard" === e.eventSource && (null == R || R(e.value));
              }, [Q, R]),
                (function (e, t) {
                  let {
                      onPan: n,
                      onPanStart: r,
                      onPanEnd: i,
                      onPanSessionStart: l,
                      onPanSessionEnd: o,
                      threshold: u,
                    } = t,
                    a = !!(n || r || i || l || o),
                    s = (0, O.useRef)(null),
                    c = B({
                      onSessionStart: l,
                      onSessionEnd: o,
                      onStart: r,
                      onMove: n,
                      onEnd(e, t) {
                        (s.current = null), null == i || i(e, t);
                      },
                    });
                  (0, O.useEffect)(() => {
                    var e;
                    null == (e = s.current) || e.updateHandlers(c.current);
                  }),
                    (0, O.useEffect)(() => {
                      let t = e.current;
                      if (t && a)
                        return d(t, "pointerdown", function (e) {
                          s.current = new I(e, c.current, u);
                        });
                    }, [e, a, c, u]),
                    (0, O.useEffect)(
                      () => () => {
                        var e;
                        null == (e = s.current) || e.end(), (s.current = null);
                      },
                      []
                    );
                })(el, {
                  onPanSessionStart(e) {
                    let t = en.current;
                    t.isInteractive &&
                      (G(!0), eE(), eS(e), null == P || P(t.value));
                  },
                  onPanSessionEnd() {
                    let e = en.current;
                    e.isInteractive && (G(!1), null == R || R(e.value));
                  },
                  onPan(e) {
                    en.current.isInteractive && eS(e);
                  },
                });
              let eb = (0, O.useCallback)(
                  (e = {}, t = null) => ({
                    ...e,
                    ...N,
                    ref: (0, W.lq)(t, el),
                    tabIndex: -1,
                    "aria-disabled": i(g),
                    "data-focused": r(q),
                    style: { ...e.style, ...e_ },
                  }),
                  [N, g, q, e_]
                ),
                ek = (0, O.useCallback)(
                  (e = {}, t = null) => ({
                    ...e,
                    ref: (0, W.lq)(t, er),
                    id: es,
                    "data-disabled": r(g),
                    style: { ...e.style, ...eg },
                  }),
                  [g, es, eg]
                ),
                ey = (0, O.useCallback)(
                  (e = {}, t = null) => ({
                    ...e,
                    ref: t,
                    style: { ...e.style, ...ew },
                  }),
                  [ew]
                ),
                eC = (0, O.useCallback)(
                  (e = {}, t = null) => ({
                    ...e,
                    ref: (0, W.lq)(t, ei),
                    role: "slider",
                    tabIndex: H ? 0 : void 0,
                    id: ea,
                    "data-active": r(X),
                    "aria-valuetext": ev,
                    "aria-valuemin": n,
                    "aria-valuemax": l,
                    "aria-valuenow": Q,
                    "aria-orientation": m,
                    "aria-disabled": i(g),
                    "aria-readonly": i(w),
                    "aria-label": C,
                    "aria-labelledby": C ? void 0 : x,
                    style: { ...e.style, ...em(0) },
                    onKeyDown: o(e.onKeyDown, eh),
                    onFocus: o(e.onFocus, () => V(!0)),
                    onBlur: o(e.onBlur, () => V(!1)),
                  }),
                  [H, ea, X, ev, n, l, Q, m, g, w, C, x, em, eh]
                ),
                ex = (0, O.useCallback)(
                  (e, t = null) => {
                    let i = !(e.value < n || e.value > l),
                      o = Q >= e.value,
                      u = ((e.value - n) * 100) / (l - n),
                      a = {
                        position: "absolute",
                        pointerEvents: "none",
                        ...(function (e) {
                          let {
                            orientation: t,
                            vertical: n,
                            horizontal: r,
                          } = e;
                          return "vertical" === t ? n : r;
                        })({
                          orientation: m,
                          vertical: { bottom: M ? `${100 - u}%` : `${u}%` },
                          horizontal: { left: M ? `${100 - u}%` : `${u}%` },
                        }),
                      };
                    return {
                      ...e,
                      ref: t,
                      role: "presentation",
                      "aria-hidden": !0,
                      "data-disabled": r(g),
                      "data-invalid": r(!i),
                      "data-highlighted": r(o),
                      style: { ...e.style, ...a },
                    };
                  },
                  [g, M, l, n, m, Q]
                ),
                eU = (0, O.useCallback)(
                  (e = {}, t = null) => ({
                    ...e,
                    ref: t,
                    type: "hidden",
                    value: Q,
                    name: U,
                  }),
                  [U, Q]
                );
              return {
                state: { value: Q, isFocused: q, isDragging: X },
                actions: ef,
                getRootProps: eb,
                getTrackProps: ek,
                getInnerTrackProps: ey,
                getThumbProps: eC,
                getMarkerProps: ex,
                getInputProps: eU,
              };
            })(h),
            g = m(),
            w = p({}, t);
          return (0, J.jsx)(Y, {
            value: _,
            children: (0, J.jsx)(Z, {
              value: f,
              children: (0, J.jsxs)(H.m.div, {
                ...g,
                className: l("chakra-slider", c.className),
                __css: f.container,
                children: [c.children, (0, J.jsx)("input", { ...w })],
              }),
            }),
          });
        });
      et.displayName = "Slider";
      var en = (0, X.G)((e, t) => {
        let { getThumbProps: n } = Q(),
          r = ee(),
          i = n(e, t);
        return (0, J.jsx)(H.m.div, {
          ...i,
          className: l("chakra-slider__thumb", e.className),
          __css: r.thumb,
        });
      });
      en.displayName = "SliderThumb";
      var er = (0, X.G)((e, t) => {
        let { getTrackProps: n } = Q(),
          r = ee(),
          i = n(e, t);
        return (0, J.jsx)(H.m.div, {
          ...i,
          className: l("chakra-slider__track", e.className),
          __css: r.track,
        });
      });
      er.displayName = "SliderTrack";
      var ei = (0, X.G)((e, t) => {
        let { getInnerTrackProps: n } = Q(),
          r = ee(),
          i = n(e, t);
        return (0, J.jsx)(H.m.div, {
          ...i,
          className: l("chakra-slider__filled-track", e.className),
          __css: r.filledTrack,
        });
      });
      (ei.displayName = "SliderFilledTrack"),
        ((0, X.G)((e, t) => {
          let { getMarkerProps: n } = Q(),
            r = ee(),
            i = n(e, t);
          return (0, J.jsx)(H.m.div, {
            ...i,
            className: l("chakra-slider__marker", e.className),
            __css: r.mark,
          });
        }).displayName = "SliderMark");
    },
  },
]);
