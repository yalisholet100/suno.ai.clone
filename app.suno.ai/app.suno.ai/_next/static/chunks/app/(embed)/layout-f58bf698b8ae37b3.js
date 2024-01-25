(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [683],
  {
    18085: function (n, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          ClientClerkProvider: function () {
            return f;
          },
        });
      var t = r(65567),
        i = r(24033),
        o = r(2265),
        u = r(85791);
      let s = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect;
      var c = r(62601);
      let l = (n) => ({
          ...n,
          frontendApi:
            n.frontendApi || c.env.NEXT_PUBLIC_CLERK_FRONTEND_API || "",
          publishableKey: n.publishableKey || "pk_live_Y2xlcmsuc3Vuby5haSQ",
          clerkJSUrl: n.clerkJSUrl || c.env.NEXT_PUBLIC_CLERK_JS,
          clerkJSVersion:
            n.clerkJSVersion || c.env.NEXT_PUBLIC_CLERK_JS_VERSION,
          proxyUrl: n.proxyUrl || c.env.NEXT_PUBLIC_CLERK_PROXY_URL || "",
          domain: n.domain || c.env.NEXT_PUBLIC_CLERK_DOMAIN || "",
          isSatellite:
            n.isSatellite || "true" === c.env.NEXT_PUBLIC_CLERK_IS_SATELLITE,
          signInUrl: n.signInUrl || c.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "",
          signUpUrl: n.signUpUrl || c.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "",
          afterSignInUrl:
            n.afterSignInUrl || c.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL || "",
          afterSignUpUrl:
            n.afterSignUpUrl || c.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL || "",
          sdkMetadata: { name: "@clerk/nextjs", version: "4.29.3" },
        }),
        a = () => {
          let { push: n } = (0, i.useRouter)(),
            e = (0, i.usePathname)() + (0, i.useSearchParams)().toString();
          return (
            (0, o.useEffect)(() => {
              window.__clerk_nav_ref = (e) =>
                e === window.location.href.replace(window.location.origin, "")
                  ? (n(e), Promise.resolve())
                  : new Promise((r) => {
                      window.__clerk_nav_resolves_ref
                        ? window.__clerk_nav_resolves_ref.push(r)
                        : (window.__clerk_nav_resolves_ref = [r]),
                        n(e);
                    });
            }, [e]),
            (0, o.useEffect)(() => {
              window.__clerk_nav_resolves_ref &&
                window.__clerk_nav_resolves_ref.length &&
                window.__clerk_nav_resolves_ref.forEach((n) => n()),
                (window.__clerk_nav_resolves_ref = []);
            }),
            (0, o.useCallback)((n) => window.__clerk_nav_ref(n), [])
          );
        },
        f = (n) => {
          let { __unstable_invokeMiddlewareOnAuthStateChange: e = !0 } = n,
            r = (0, i.useRouter)(),
            c = a();
          s(() => {
            (window.__unstable__onBeforeSetActive = () => {
              e && (r.refresh(), r.push(window.location.href));
            }),
              (window.__unstable__onAfterSetActive = () => {
                r.refresh();
              });
          }, []);
          let f = l({ ...n, navigate: c });
          return o.createElement(
            u.f,
            { options: f },
            o.createElement(t.El, { ...f })
          );
        };
    },
    85791: function (n, e, r) {
      "use strict";
      r.d(e, {
        f: function () {
          return u;
        },
        k: function () {
          return o;
        },
      });
      var t = r(2265);
      let i = t.createContext(void 0);
      i.displayName = "ClerkNextOptionsCtx";
      let o = () => t.useContext(i).value,
        u = (n) => {
          let { children: e, options: r } = n;
          return t.createElement(i.Provider, { value: { value: r } }, e);
        };
    },
    63530: function (n, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          AuthenticateWithRedirectCallback: function () {
            return t.vn;
          },
          ClerkLoaded: function () {
            return t.a7;
          },
          ClerkLoading: function () {
            return t.qI;
          },
          MultisessionAppSupport: function () {
            return t.KM;
          },
          Protect: function () {
            return t.Cv;
          },
          RedirectToCreateOrganization: function () {
            return t.gM;
          },
          RedirectToOrganizationProfile: function () {
            return t.yB;
          },
          RedirectToSignIn: function () {
            return t.N1;
          },
          RedirectToSignUp: function () {
            return t.C2;
          },
          RedirectToUserProfile: function () {
            return t.sO;
          },
          SignedIn: function () {
            return t.CH;
          },
          SignedOut: function () {
            return t.tj;
          },
        });
      var t = r(65567);
    },
    11507: function (n, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          EmailLinkErrorCode: function () {
            return t._L;
          },
          MagicLinkErrorCode: function () {
            return t.X1;
          },
          WithClerk: function () {
            return t._E;
          },
          WithSession: function () {
            return t.CJ;
          },
          WithUser: function () {
            return t.Gi;
          },
          isClerkAPIResponseError: function () {
            return t.kD;
          },
          isEmailLinkError: function () {
            return t.G1;
          },
          isKnownError: function () {
            return t.sZ;
          },
          isMagicLinkError: function () {
            return t.V9;
          },
          isMetamaskError: function () {
            return t.ZC;
          },
          useAuth: function () {
            return t.aC;
          },
          useClerk: function () {
            return t.ll;
          },
          useEmailLink: function () {
            return t.E2;
          },
          useMagicLink: function () {
            return t.jS;
          },
          useOrganization: function () {
            return t.o8;
          },
          useOrganizationList: function () {
            return t.eW;
          },
          useOrganizations: function () {
            return t.qi;
          },
          useSession: function () {
            return t.kP;
          },
          useSessionList: function () {
            return t.xo;
          },
          useSignIn: function () {
            return t.zq;
          },
          useSignUp: function () {
            return t.QS;
          },
          useUser: function () {
            return t.aF;
          },
          withClerk: function () {
            return t.r0;
          },
          withSession: function () {
            return t.NA;
          },
          withUser: function () {
            return t.ns;
          },
        });
      var t = r(65567);
    },
    61726: function (n, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          CreateOrganization: function () {
            return t.Gp;
          },
          OrganizationList: function () {
            return t.Bg;
          },
          OrganizationProfile: function () {
            return t.A;
          },
          OrganizationSwitcher: function () {
            return t.Li;
          },
          SignIn: function () {
            return u;
          },
          SignInButton: function () {
            return t.$d;
          },
          SignInWithMetamaskButton: function () {
            return t.qu;
          },
          SignOutButton: function () {
            return t.AM;
          },
          SignUp: function () {
            return s;
          },
          SignUpButton: function () {
            return t.gX;
          },
          UserButton: function () {
            return t.l8;
          },
          UserProfile: function () {
            return t.Iw;
          },
        });
      var t = r(65567),
        i = r(2265),
        o = r(85791);
      let u = (n) => {
          let { signInUrl: e } = (0, o.k)();
          return e
            ? i.createElement(t.cL, { routing: "path", path: e, ...n })
            : i.createElement(t.cL, { ...n });
        },
        s = (n) => {
          let { signUpUrl: e } = (0, o.k)();
          return e
            ? i.createElement(t.Mo, { routing: "path", path: e, ...n })
            : i.createElement(t.Mo, { ...n });
        };
    },
    85037: function (n, e, r) {
      Promise.resolve().then(r.bind(r, 18085)),
        Promise.resolve().then(r.bind(r, 63530)),
        Promise.resolve().then(r.bind(r, 11507)),
        Promise.resolve().then(r.bind(r, 61726)),
        Promise.resolve().then(r.t.bind(r, 34193, 23)),
        Promise.resolve().then(r.bind(r, 1872)),
        Promise.resolve().then(r.bind(r, 53305));
    },
    1872: function (n, e, r) {
      "use strict";
      r.r(e);
      var t = r(57437),
        i = r(26621);
      e.default = (n) => {
        let { children: e } = n;
        return (0, t.jsx)(i.k, {
          width: "100%",
          height: "100%",
          flexDirection: ["column", "column", "row"],
          children: (0, t.jsx)(i.k, {
            background: "black",
            flex: "1",
            height: "100%",
            overflowY: "auto",
            flexDirection: "column",
            children: (0, t.jsx)(i.k, {
              flex: "1",
              overflowY: "auto",
              children: e,
            }),
          }),
        });
      };
    },
    34193: function (n) {
      n.exports = {
        style: {
          fontFamily: "'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",
          fontStyle: "normal",
        },
        className: "__className_e66fe9",
      };
    },
    24033: function (n, e, r) {
      n.exports = r(15313);
    },
  },
  function (n) {
    n.O(0, [603, 147, 567, 842, 648, 971, 119, 110, 744], function () {
      return n((n.s = 85037));
    }),
      (_N_E = n.O());
  },
]);
