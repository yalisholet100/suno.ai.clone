(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [707],
  {
    49388: function (l, e, t) {
      Promise.resolve().then(t.t.bind(t, 71076, 23)),
        Promise.resolve().then(t.bind(t, 74448));
    },
    74448: function (l, e, t) {
      "use strict";
      t.r(e);
      var i = t(57437),
        s = t(2265),
        n = t(53305),
        a = t(21100),
        o = t(66721),
        r = t(39933),
        c = t(26621),
        d = t(83109),
        p = t(51723),
        u = t(72258);
      let f = (0, a.Pi)((l) => {
          let { playlist: e } = l,
            { clips: t, playbar: a, library: d } = (0, n.useStores)(),
            [f, x] = (0, s.useState)(null);
          return (
            (0, s.useEffect)(() => {
              a.setNoClipPlayCallback(() => {
                var l;
                let i =
                  t.clipById[
                    null === (l = e.clipIds) || void 0 === l ? void 0 : l[0]
                  ];
                i &&
                  (a.playClip(i),
                  a.setStepCallback(d.getPlaylistStepCallback(e)));
              });
            }, [e.clipIds]),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)(o.K, {
                  flex: "1",
                  overflowY: "auto",
                  children: [
                    (0, i.jsx)(r.X, { p: 6, children: e.name }),
                    (0, i.jsx)(o.K, {
                      flex: "1",
                      spacing: 0,
                      overflowY: "auto",
                      children: e.clipIds.map((l) => {
                        let s = t.clipById[l];
                        return (0, i.jsx)(
                          p.Z,
                          {
                            showTags: !1,
                            showStats: !0,
                            trendingMode: !0,
                            clip: s,
                            selected: s.id === (null == f ? void 0 : f.id),
                            onClick: () => {
                              x(s);
                            },
                            onPlay: () => {
                              a.playClip(s),
                                a.setStepCallback(d.getPlaylistStepCallback(e));
                            },
                          },
                          l
                        );
                      }),
                    }),
                  ],
                }),
                f
                  ? (0, i.jsx)(c.k, {
                      display: ["none", "none", "flex"],
                      borderLeft: "1px solid #252323",
                      width: 300,
                      flexDirection: "column",
                      children: (0, i.jsx)(u.Z, { clip: f }),
                    })
                  : null,
              ],
            })
          );
        }),
        x = (0, a.Pi)((l) => {
          let { id: e } = l,
            { clips: t } = (0, n.useStores)();
          return (
            (0, s.useEffect)(() => {
              t.loadPlaylist(e);
            }, [e]),
            (0, i.jsx)(c.k, {
              flex: "1",
              background:
                "linear-gradient(180deg, #2F2E2E 0.22%, #131313 35.3%)",
              children: t.playlistById[e]
                ? (0, i.jsx)(f, { playlist: t.playlistById[e] })
                : (0, i.jsx)(d.$, { m: 6 }),
            })
          );
        });
      e.default = x;
    },
    71076: function (l) {
      l.exports = { main: "page_main__iTGjV" };
    },
  },
  function (l) {
    l.O(
      0,
      [
        603, 147, 420, 567, 842, 479, 569, 430, 890, 879, 648, 325, 971, 119,
        110, 744,
      ],
      function () {
        return l((l.s = 49388));
      }
    ),
      (_N_E = l.O());
  },
]);
