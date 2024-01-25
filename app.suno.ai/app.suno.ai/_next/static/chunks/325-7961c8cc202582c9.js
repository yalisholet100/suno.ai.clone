(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [325],
  {
    51723: function (i, e, n) {
      "use strict";
      var t = n(57437),
        s = n(26621),
        o = n(13621),
        l = n(84748),
        r = n(83109),
        a = n(66876),
        c = n(66721),
        d = n(41619),
        u = n(16248),
        x = n(839),
        h = n(39517),
        p = n(99690),
        g = n(21100),
        m = n(16691),
        j = n.n(m),
        v = n(2265),
        f = n(53159),
        b = n(53305),
        S = n(91092),
        y = n(25031),
        w = n(10180),
        k = n(36975),
        C = n.n(k),
        z = n(33890);
      let _ = (0, g.Pi)((i) => {
        var e, n, g, m, k, _, P, I;
        let {
            clip: R,
            onClick: F,
            onPlay: M,
            stream: D = !1,
            trendingMode: L = !1,
            showStats: Z = !1,
            showTags: O = !0,
            selected: V = !1,
            showActions: E = !0,
            expanded: K = !1,
            focusedClip: A,
          } = i,
          { playbar: B, clips: J, genForm: W } = (0, b.useStores)(),
          G = B.clipId === R.id,
          [N, H] = (0, v.useState)(!1),
          $ = "queued" === R.status || "submitted" === R.status,
          T =
            (null == A
              ? void 0
              : null === (n = A.metadata) || void 0 === n
              ? void 0
              : null === (e = n.history) || void 0 === e
              ? void 0
              : e.includes(R.id)) ||
            (null == A
              ? void 0
              : null === (m = A.metadata) || void 0 === m
              ? void 0
              : null === (g = m.concat_history) || void 0 === g
              ? void 0
              : g.includes(R.id));
        return (0, t.jsxs)(s.k, {
          onMouseEnter: () => H(!0),
          onMouseLeave: () => H(!1),
          alignItems: ["flex-start", "flex-start", "flex-start", "center"],
          onClick: F,
          onDoubleClick: M,
          px: [3, 6, 6],
          flexDirection: ["column", "column", "column", "row"],
          py: 2,
          _hover: {
            background:
              "radial-gradient(3010.06% 152.11% at 27.33% 38.98%, rgba(61, 58, 58, 0.43) 0%, rgba(25, 24, 24, 0.57) 100%)",
          },
          background: T
            ? "rgba(255, 227, 180, 0.16)"
            : V
            ? "radial-gradient(3010.06% 152.11% at 27.33% 38.98%, rgba(90, 90, 90, 0.33) 0%, rgba(32, 32, 32, 0.54) 100%)"
            : void 0,
          "data-clip-id": R.id,
          children: [
            (0, t.jsxs)(s.k, {
              flexDirection: "row",
              flex: "1",
              opacity: $ ? 0.6 : 1,
              children: [
                (0, t.jsxs)(o.xu, {
                  position: "relative",
                  onClick: M,
                  border: G ? "1px solid #FF8F3E" : void 0,
                  className: G ? C().ripple : void 0,
                  "aria-label": "Play Song",
                  children: [
                    R.image_url
                      ? (0, t.jsx)(j(), {
                          alt: "Song Image",
                          width: 60,
                          height: 60,
                          src: R.image_url,
                        })
                      : (0, t.jsx)(l.O, { height: "60px", width: "60px" }),
                    $
                      ? (0, t.jsx)(s.k, {
                          width: "60px",
                          height: "60px",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          alignItems: "center",
                          justifyContent: "center",
                          children: (0, t.jsx)(r.$, {
                            color: "white",
                            boxSize: "20px",
                          }),
                        })
                      : (0, t.jsx)(a.h, {
                          "aria-label": B.isPlaying ? "Pause" : "Play",
                          icon:
                            B.isPlaying && G
                              ? (0, t.jsx)(f.Wh, {})
                              : (0, t.jsx)(f.gmG, {}),
                          size: "lg",
                          position: "absolute",
                          width: "60px",
                          height: "60px",
                          top: "0",
                          left: "50%",
                          transform: "translate(-50%, 0)",
                          color: G ? "orange.300" : "white",
                          transition: "opacity 0.3s",
                          opacity: G || N ? 1 : 0,
                          _focus: { opacity: 1 },
                        }),
                  ],
                }),
                (0, t.jsxs)(s.k, {
                  direction: ["column", "column", "column", "column", "row"],
                  flex: "1",
                  children: [
                    (0, t.jsxs)(c.K, {
                      flex: "1",
                      ml: 3,
                      spacing: 0,
                      justifyContent: ["flex-start", "flex-start", "center"],
                      children: [
                        O
                          ? (0, t.jsxs)(c.K, {
                              direction: "row",
                              children: [
                                (0, t.jsx)(S.Z, {
                                  fontSize: "xs",
                                  size: "sm",
                                  clip: R,
                                }),
                                R.is_public
                                  ? (0, t.jsxs)(d.Vp, {
                                      colorScheme: "orange",
                                      fontSize: "xs",
                                      size: "sm",
                                      children: [
                                        (0, t.jsx)(u.J, { as: f.ssk }),
                                        (0, t.jsx)(x.x, {
                                          ml: 1,
                                          children: "Public",
                                        }),
                                      ],
                                    })
                                  : null,
                                R.metadata.history
                                  ? (0, t.jsxs)(d.Vp, {
                                      colorScheme: T ? "orange" : void 0,
                                      fontSize: "xs",
                                      size: "sm",
                                      children: [
                                        (0, t.jsx)(u.J, { as: f.gjK }),
                                        (0, t.jsxs)(x.x, {
                                          ml: 1,
                                          children: [
                                            "Part ",
                                            R.metadata.history.length + 1,
                                          ],
                                        }),
                                      ],
                                    })
                                  : null,
                                "concat" === R.metadata.type
                                  ? (0, t.jsxs)(d.Vp, {
                                      colorScheme: "orange",
                                      fontSize: "xs",
                                      size: "sm",
                                      children: [
                                        (0, t.jsx)(u.J, { as: f.uoU }),
                                        (0, t.jsx)(x.x, {
                                          ml: 1,
                                          children: "Full Song",
                                        }),
                                      ],
                                    })
                                  : null,
                                (
                                  null === (k = R.metadata) || void 0 === k
                                    ? void 0
                                    : k.refund_credits
                                )
                                  ? (0, t.jsx)(h.u, {
                                      label:
                                        "Generation was too short, so no credits were used. If generations are silent and you continued a clip, that clip probably ended in silence. You may want to try continuing from a different clip.",
                                      children: (0, t.jsx)(d.Vp, {
                                        fontSize: "xs",
                                        size: "sm",
                                        children: "Credits Refunded",
                                      }),
                                    })
                                  : null,
                              ],
                            })
                          : null,
                        "submitted" === R.status
                          ? (0, t.jsx)(p.N, { py: 1, noOfLines: 2 })
                          : (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)(x.x, {
                                  color: G ? "#FF8F3E" : "white",
                                  fontSize: "sm",
                                  fontWeight: 700,
                                  children: (0, t.jsx)(z.r, {
                                    href: "/song/".concat(R.id, "/"),
                                    children: (0, w.M8)(R),
                                  }),
                                }),
                                "complete" === R.status || R.metadata.tags
                                  ? (0, t.jsx)(x.x, {
                                      fontSize: "sm",
                                      color: (
                                        null === (_ = R.metadata) ||
                                        void 0 === _
                                          ? void 0
                                          : _.tags
                                      )
                                        ? "gray.300"
                                        : "gray.500",
                                      children:
                                        (null === (P = R.metadata) ||
                                        void 0 === P
                                          ? void 0
                                          : P.tags) || "(no style)",
                                    })
                                  : (0, t.jsx)(p.N, { py: 1, noOfLines: 2 }),
                              ],
                            }),
                      ],
                    }),
                    E
                      ? (0, t.jsx)(s.k, {
                          px: [0],
                          children: (0, t.jsx)(y.Z, {
                            trendingMode: L,
                            showStats: Z,
                            clip: R,
                          }),
                        })
                      : null,
                  ],
                }),
              ],
            }),
            K && W.showLyrics
              ? (0, t.jsx)(x.x, {
                  display: ["flex", "flex", "flex", "none"],
                  fontSize: "xs",
                  whiteSpace: "pre-wrap",
                  children:
                    null === (I = R.metadata) || void 0 === I
                      ? void 0
                      : I.prompt,
                })
              : null,
          ],
        });
      });
      e.Z = _;
    },
    72258: function (i, e, n) {
      "use strict";
      var t = n(57437),
        s = n(53305),
        o = n(66721),
        l = n(13621),
        r = n(39933),
        a = n(839),
        c = n(26621),
        d = n(14250),
        u = n(49441),
        x = n(16691),
        h = n.n(x),
        p = n(10180),
        g = n(33890),
        m = n(24033),
        j = n(25031);
      e.Z = (i) => {
        var e, n, x;
        let { clip: v } = i,
          { genForm: f } = (0, s.useStores)(),
          b = (0, m.useRouter)();
        return (
          (0, p.M8)(v),
          (0, t.jsxs)(o.K, {
            overflowY: "scroll",
            children: [
              (0, t.jsx)(l.xu, {
                width: 300,
                height: 300,
                children: v.image_url
                  ? (0, t.jsx)(h(), {
                      alt: "Song Image",
                      width: 300,
                      height: 300,
                      src: v.image_url,
                    })
                  : null,
              }),
              (0, t.jsx)(g.r, {
                href: "/song/".concat(v.id),
                children: (0, t.jsx)(r.X, {
                  mt: 4,
                  px: 4,
                  fontSize: "md",
                  fontWeight: 600,
                  whiteSpace: "pre-wrap",
                  children: (0, p.M8)(v),
                }),
              }),
              (0, t.jsx)(a.x, {
                px: 4,
                fontSize: "sm",
                fontWeight: 500,
                whiteSpace: "pre-wrap",
                children:
                  null === (e = v.metadata) || void 0 === e ? void 0 : e.tags,
              }),
              (0, t.jsxs)(c.k, {
                px: 4,
                children: [
                  (0, t.jsx)(d.h, {
                    size: "sm",
                    children: (0, t.jsx)(u.z, {
                      onClick: () => {
                        f.reuseClip(v), b.push("/create/");
                      },
                      children: "Remix",
                    }),
                  }),
                  (0, t.jsx)(j.Z, { clip: v }),
                ],
              }),
              (0, t.jsx)(a.x, {
                p: 4,
                fontSize: "sm",
                whiteSpace: "pre-wrap",
                color: "gray.400",
                children:
                  null === (n = v.metadata) || void 0 === n
                    ? void 0
                    : n.gpt_description_prompt,
              }),
              (0, t.jsx)(a.x, {
                p: 4,
                fontSize: "sm",
                whiteSpace: "pre-wrap",
                children:
                  null === (x = v.metadata) || void 0 === x ? void 0 : x.prompt,
              }),
            ],
          })
        );
      };
    },
    91092: function (i, e, n) {
      "use strict";
      var t = n(57437),
        s = n(53305),
        o = n(41619),
        l = n(10180);
      e.Z = (i) => {
        let { clip: e, ...n } = i,
          { session: r } = (0, s.useStores)();
        return (0, t.jsx)(t.Fragment, {
          children: r.isStaff
            ? (0, t.jsx)(o.Vp, { ...n, children: (0, l.W0)(e.model_name) })
            : null,
        });
      };
    },
    25031: function (i, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return F;
        },
      });
      var t = n(57437),
        s = n(64763),
        o = n(48060),
        l = n(83109),
        r = n(99629),
        a = n(31228),
        c = n(66721),
        d = n(49441),
        u = n(16248),
        x = n(839),
        h = n(66876),
        p = n(26501),
        g = n(59316),
        m = n(1992),
        j = n(53159),
        v = n(53305),
        f = n(21100),
        b = n(24033),
        S = n(2390),
        y = n.n(S),
        w = n(10180);
      function k() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      }
      async function C(i, e) {
        let n = { url: i, title: "Suno" };
        if (k() && window.navigator.canShare && navigator.canShare(n)) {
          try {
            navigator.share(n);
          } catch (i) {}
          return;
        }
        !(function (i, e) {
          var n;
          let t =
            e ||
            (null === (n = i.split("\\").pop()) || void 0 === n
              ? void 0
              : n.split("/").pop()) ||
            "suno";
          fetch(i, {
            headers: new Headers({ Origin: location.origin }),
            mode: "cors",
          })
            .then((i) => i.blob())
            .then((i) => {
              var e, n;
              (e = window.URL.createObjectURL(i)),
                ((n = document.createElement("a")).download = t),
                (n.href = e),
                document.body.appendChild(n),
                n.click(),
                n.remove();
            })
            .catch((i) => console.error(i));
        })(i, e);
      }
      async function z(i) {
        if (i.video_url) return C(i.video_url, "".concat((0, w.M8)(i), ".mp4"));
      }
      async function _(i) {
        if (i.audio_url) return C(i.audio_url, "".concat((0, w.M8)(i), ".mp3"));
      }
      let P = (i) => "".concat(window.location.origin, "/song/").concat(i.id),
        I = (i) => {
          let e = {
            url: P(i),
            title: "".concat((0, w.M8)(i), " | Suno!"),
            text: "Listen to ".concat((0, w.M8)(i), " on Suno! \uD83C\uDFB5"),
          };
          if (k() && window.navigator.canShare && navigator.canShare(e)) {
            try {
              navigator.share(e);
            } catch (i) {}
            return;
          }
          y()("".concat(window.location.origin, "/song/").concat(i.id)),
            (0, v.toast)({
              title: "Copied link to clipboard",
              status: "success",
              duration: 2e3,
              isClosable: !0,
            });
        },
        R = (0, f.Pi)((i) => {
          var e, n;
          let { clip: s } = i,
            c = "v2" === s.major_model_version,
            { genForm: d, clips: u, session: x } = (0, v.useStores)(),
            h = (0, b.useRouter)(),
            p = "complete" === s.status;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(o.s, {
                onClick: () => {
                  d.reuseClip(s), h.push("/create/");
                },
                children: "Remix",
              }),
              c &&
                (0, t.jsxs)(o.s, {
                  onClick: () => {
                    d.setContinueClipId(s.id), h.push("/create/");
                  },
                  isDisabled: !p,
                  children: [
                    p ? null : (0, t.jsx)(l.$, { mr: 2, size: "sm" }),
                    "Continue From This Clip",
                  ],
                }),
              c &&
              (null === (e = s.metadata) || void 0 === e
                ? void 0
                : e.history) &&
              "complete" === s.status
                ? (0, t.jsx)(o.s, {
                    onClick: () => {
                      u.runConcat(s.id);
                    },
                    children: "Get Whole Song",
                  })
                : null,
              (null === (n = x.user) || void 0 === n ? void 0 : n.id) ===
              s.user_id
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(r.R, {}),
                      (0, t.jsxs)(a.k, {
                        title: "Sharing",
                        children: [
                          (0, t.jsx)(o.s, {
                            icon: (0, t.jsx)(j.gjK, {}),
                            background: s.is_public ? void 0 : "blue.600",
                            onClick: () => {
                              u.setClipVisibility(s.id, !1);
                            },
                            children: "Link Only",
                          }),
                          (0, t.jsx)(o.s, {
                            background: s.is_public ? "blue.600" : void 0,
                            icon: (0, t.jsx)(j.ssk, {}),
                            onClick: () => {
                              u.setClipVisibility(s.id, !0);
                            },
                            children: "Public",
                          }),
                        ],
                      }),
                    ],
                  })
                : null,
              (0, t.jsx)(r.R, {}),
              (0, t.jsxs)(a.k, {
                title: "Downloads",
                children: [
                  (0, t.jsxs)(o.s, {
                    isDisabled: !s.video_url,
                    onClick: () => {
                      z(s);
                    },
                    children: [
                      s.video_url
                        ? null
                        : (0, t.jsx)(l.$, { mr: 2, size: "sm" }),
                      "Download Video",
                    ],
                  }),
                  (0, t.jsxs)(o.s, {
                    isDisabled: "complete" !== s.status,
                    onClick: () => {
                      _(s);
                    },
                    children: [
                      "complete" !== s.status
                        ? (0, t.jsx)(l.$, { mr: 2, size: "sm" })
                        : null,
                      "Download Audio",
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(r.R, {}),
              (0, t.jsxs)(a.k, {
                title: "Report",
                children: [
                  (0, t.jsx)(o.s, {
                    onClick: () => {
                      u.flagClip(s.id, "Preset: Bug");
                    },
                    children: "Report Bug",
                  }),
                  (0, t.jsx)(o.s, {
                    onClick: () => {
                      u.flagClip(s.id, "Preset: Inappropriate");
                    },
                    children: "Report Inappropriate",
                  }),
                ],
              }),
            ],
          });
        });
      var F = (0, f.Pi)((i) => {
        let {
            clip: e,
            showStats: n = !1,
            size: o = "sm",
            trendingMode: l = !1,
          } = i,
          { playbar: r, clips: a } = (0, v.useStores)();
        return (0, t.jsxs)(c.K, {
          spacing: 0,
          direction: "row",
          alignItems: "center",
          children: [
            (0, t.jsxs)(c.K, {
              direction: "row",
              spacing: 0,
              alignItems: "center",
              children: [
                l
                  ? (0, t.jsx)(d.z, {
                      size: o,
                      leftIcon: (0, t.jsx)(u.J, { as: j.gmG, boxSize: "12px" }),
                      onClick: () => r.playClip(e),
                      variant: "ghost",
                      color: "gray.600",
                      "aria-label": "Play Count",
                      textAlign: "left",
                      iconSpacing: 3,
                      children: (0, t.jsx)(x.x, {
                        color: "gray.200",
                        fontSize: "lg" === o ? "sm" : "xs",
                        width: "40px",
                        children: e.play_count,
                      }),
                    })
                  : null,
                n
                  ? (0, t.jsx)(d.z, {
                      size: o,
                      leftIcon: (0, t.jsx)(j.spm, {}),
                      onClick: () => a.likeClip(e.id, !(0, s.ip)(e)),
                      colorScheme: (0, s.ip)(e) ? "orange" : void 0,
                      variant: "ghost",
                      color: (0, s.ip)(e) ? void 0 : "gray.600",
                      "aria-label": "Like",
                      textAlign: "left",
                      iconSpacing: 3,
                      children: (0, t.jsx)(x.x, {
                        fontSize: "lg" === o ? "sm" : "xs",
                        width: "20px",
                        color: (0, s.ip)(e) ? "orange" : "gray.200",
                        children: e.upvote_count,
                      }),
                    })
                  : (0, t.jsx)(h.h, {
                      size: o,
                      icon: (0, t.jsx)(j.spm, {}),
                      onClick: () => a.likeClip(e.id, !(0, s.ip)(e)),
                      colorScheme: (0, s.ip)(e) ? "orange" : void 0,
                      color: (0, s.ip)(e) ? void 0 : "gray.600",
                      variant: "ghost",
                      "aria-label": "Like",
                    }),
                l
                  ? null
                  : (0, t.jsx)(h.h, {
                      size: o,
                      icon: (0, t.jsx)(j.bGJ, {}),
                      onClick: () => a.dislikeClip(e.id, !(0, s.de)(e)),
                      colorScheme: (0, s.de)(e) ? "orange" : void 0,
                      variant: "ghost",
                      color: (0, s.de)(e) ? void 0 : "gray.600",
                      "aria-label": "Dislike",
                    }),
              ],
            }),
            "lg" === o
              ? (0, t.jsx)(d.z, {
                  size: o,
                  onClick: () => I(e),
                  leftIcon: (0, t.jsx)(j.ZH2, {}),
                  variant: "ghost",
                  "aria-label": "Share",
                  children: "Share",
                })
              : (0, t.jsx)(h.h, {
                  size: o,
                  onClick: () => I(e),
                  icon: (0, t.jsx)(j.ZH2, {}),
                  variant: "ghost",
                  "aria-label": "Share",
                }),
            (0, t.jsxs)(p.v, {
              children: [
                (0, t.jsx)(g.j, {
                  size: o,
                  "aria-label": "More Actions",
                  as: h.h,
                  icon: (0, t.jsx)(j.LCi, { size: "12px" }),
                  variant: "ghost",
                }),
                (0, t.jsx)(m.q, { children: (0, t.jsx)(R, { clip: e }) }),
              ],
            }),
          ],
        });
      });
    },
    36975: function (i) {
      i.exports = {
        ripple: "styles_ripple__TR4TH",
        pulse: "styles_pulse__1B1Jb",
      };
    },
  },
]);
