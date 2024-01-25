"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [648],
  {
    53305: function (t, i, e) {
      e.r(i),
        e.d(i, {
          Providers: function () {
            return N;
          },
          StoreContext: function () {
            return q;
          },
          ToastContainer: function () {
            return L;
          },
          toast: function () {
            return B;
          },
          useStores: function () {
            return M;
          },
        });
      var s = e(57437),
        a = e(64763),
        n = e(24256);
      let r = function (t) {
        let i,
          e,
          s,
          a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 300;
        return function () {
          let n = this,
            r = arguments;
          i
            ? (clearTimeout(e),
              (e = setTimeout(() => {
                Date.now() - s >= a && (t.apply(n, r), (s = Date.now()));
              }, Math.max(a - (Date.now() - s), 0))))
            : (t.apply(n, r), (s = Date.now()), (i = !0));
        };
      };
      class l {
        setAudioElement(t) {
          (this.audioElement = t),
            this.audioElement.duration &&
              (this.duration = this.audioElement.duration),
            this.audioElement.addEventListener("durationchange", () => {
              var t, i;
              (null === (t = this.audioElement) || void 0 === t
                ? void 0
                : t.duration) ===
              1 / 0
                ? ((this.duration = 60), (this.loadingDuration = !0))
                : ((this.duration =
                    (null === (i = this.audioElement) || void 0 === i
                      ? void 0
                      : i.duration) || 0),
                  (this.loadingDuration = !1)),
                (this.loadingStream = !1);
            }),
            (this.isPlaying = !this.audioElement.paused),
            this.audioElement.addEventListener(
              "timeupdate",
              r(this.setCurrentTime, 500)
            ),
            this.audioElement.addEventListener("ended", this.handleEnded),
            this.audioElement.addEventListener("play", () => {
              this.isPlaying = !0;
            }),
            this.audioElement.addEventListener("pause", () => {
              this.isPlaying = !1;
            }),
            "mediaSession" in navigator &&
              (navigator.mediaSession.setActionHandler("nexttrack", () => {
                this.stepForward();
              }),
              navigator.mediaSession.setActionHandler("previoustrack", () => {
                this.stepBackward();
              }));
        }
        playClip(t) {
          var i;
          if (this.audioElement && t && t.audio_url) {
            if (
              (t.audio_url.includes("audiopipe") && (this.loadingDuration = !0),
              "streaming" === t.status && (this.loadingStream = !0),
              t.id === this.clipId)
            ) {
              this.togglePlay();
              return;
            }
            (this.clipId = t.id),
              (this.audioElement.src = t.audio_url),
              null === (i = this.audioElement.play()) ||
                void 0 === i ||
                i.catch((t) => {
                  throw (t.name, t);
                }),
              (this.isPlaying = !this.audioElement.paused),
              this.incrementPlayCount();
          }
        }
        setDuration(t) {
          this.duration = t;
        }
        get progress() {
          return this.duration ? this.currentTime / this.duration : 0;
        }
        constructor(t) {
          (this.isPlaying = !1),
            (this.currentTime = 0),
            (this.duration = 0),
            (this.clipId = null),
            (this.stepCallback = null),
            (this.noClipPlayCallback = null),
            (this.audioElement = null),
            (this.repeat = !1),
            (this.autoplay = !0),
            (this.loadingStream = !1),
            (this.loadingDuration = !1),
            (this.incrementPlayCount = () => {
              this.apiClient.POST("/api/gen/{gen_id}/increment_play_count/", {
                params: { path: { gen_id: this.clipId } },
              });
            }),
            (this.handleEnded = () => {
              ((this.isPlaying = !1), this.repeat)
                ? !this.audioElement ||
                  ((this.audioElement.currentTime = 0),
                  (this.isPlaying = !0),
                  this.audioElement.play())
                : this.autoplay && this.stepForward();
            }),
            (this.toggleAutoplay = () => {
              this.autoplay = !this.autoplay;
            }),
            (this.toggleRepeat = () => {
              this.repeat = !this.repeat;
            }),
            (this.togglePlay = () => {
              if (this.audioElement) {
                if (!this.clipId) {
                  if (this.noClipPlayCallback) {
                    this.noClipPlayCallback();
                    return;
                  }
                  this.stepCallback && this.stepCallback(this, 1);
                  return;
                }
                if (this.audioElement.paused) {
                  var t;
                  null === (t = this.audioElement.play()) ||
                    void 0 === t ||
                    t.catch((t) => {
                      throw (t.name, t);
                    });
                } else this.audioElement.pause();
                this.isPlaying = !this.audioElement.paused;
              }
            }),
            (this.userSetCurrentProgress = (t) => {
              var i, e;
              if (
                !this.audioElement ||
                (null === (i = this.audioElement) || void 0 === i
                  ? void 0
                  : i.duration) ===
                  1 / 0
              )
                return;
              let s =
                (t / 100) *
                (null === (e = this.audioElement) || void 0 === e
                  ? void 0
                  : e.duration);
              Number.isNaN(s) ||
                ((this.audioElement.currentTime = s),
                (this.currentTime = this.audioElement.currentTime));
            }),
            (this.setCurrentTime = (t) => {
              var i;
              this.currentTime =
                (null === (i = this.audioElement) || void 0 === i
                  ? void 0
                  : i.currentTime) || 0;
            }),
            (this.setStepCallback = (t) => {
              this.stepCallback = t;
            }),
            (this.setNoClipPlayCallback = (t) => {
              this.noClipPlayCallback = t;
            }),
            (this.stepBackward = () => {
              this.currentTime > 3
                ? this.audioElement && (this.audioElement.currentTime = 0)
                : this.stepCallback && this.stepCallback(this, -1);
            }),
            (this.stepForward = () => {
              this.stepCallback && this.stepCallback(this, 1);
            }),
            (this.apiClient = t),
            (0, n.ky)(this);
        }
      }
      var o = e(32355),
        d = e(98852),
        u = e(71472),
        h = e(11299),
        c = e(62983),
        p = e(2265),
        y = e(91171),
        m = e(10180);
      class g {
        constructor(t) {
          var i = this;
          (this.lyrics = ""),
            (this.style = ""),
            (this.description = ""),
            (this.title = ""),
            (this.mv = m.jd),
            (this.placeholder = (0, y.MT)()),
            (this.continueClipId = null),
            (this.isSimple = !0),
            (this.isLoading = !1),
            (this.showLyrics = !1),
            (this.isLoadingLyrics = !1),
            (this.setLyrics = (t) => {
              this.lyrics = t;
            }),
            (this.setShowLyrics = (t) => {
              this.showLyrics = t;
            }),
            (this.setMv = (t) => {
              this.mv = t;
            }),
            (this.setTitle = (t) => {
              this.title = t;
            }),
            (this.setContinueClipId = (t) => {
              (this.continueClipId = t), (this.isSimple = !1);
            }),
            (this.setStyle = (t) => {
              this.style = t;
            }),
            (this.setDescription = (t) => {
              this.description = t;
            }),
            (this.setIsSimple = (t) => {
              this.isSimple = t;
            }),
            (this.setIsLoading = (t) => {
              this.isLoading = t;
            }),
            (this.rerollPlaceholder = function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : y.MT;
              i.placeholder = t();
            }),
            (this.reuseClip = (t) => {
              this.setLyrics(t.metadata.prompt || ""),
                this.setStyle(t.metadata.tags || ""),
                this.setDescription(t.metadata.gpt_description_prompt || ""),
                this.setTitle(t.title || ""),
                (this.isSimple = !1);
            }),
            (this.generateLyrics = async () => {
              this.isLoadingLyrics = !0;
              let {
                data: t,
                error: i,
                response: e,
              } = await this.apiClient.POST("/api/generate/lyrics/", {
                body: { prompt: this.lyrics || "" },
              });
              if (i || !t.id) {
                B({
                  title: "Please wait a few seconds.",
                  description:
                    "Please wait a few seconds before generating more lyrics.",
                  status: "error",
                  duration: 4e3,
                  isClosable: !0,
                }),
                  (this.isLoadingLyrics = !1);
                return;
              }
              let s = t.id;
              for (let t = 0; t < 10; t++) {
                await new Promise((t) => setTimeout(t, 4e3));
                let {
                  data: t,
                  error: i,
                  response: e,
                } = await this.apiClient.GET(
                  "/api/generate/lyrics/{request_id}",
                  { params: { path: { request_id: s } } }
                );
                if (i) {
                  B({
                    title: "An error occurred generating lyrics.",
                    description: "Please try a different lyrics prompt.",
                    status: "error",
                    duration: 5e3,
                    isClosable: !0,
                  });
                  break;
                }
                if ((null == t ? void 0 : t.status) !== "running") {
                  if ((null == t ? void 0 : t.status) === "error") {
                    B({
                      title: "An error occurred generating lyrics.",
                      description: "Please try a different lyrics prompt.",
                      status: "error",
                      duration: 4e3,
                      isClosable: !0,
                    });
                    break;
                  }
                  this.setLyrics(t.text), this.setTitle(t.title);
                  break;
                }
              }
              this.isLoadingLyrics = !1;
            }),
            (0, n.ky)(this),
            (this.apiClient = t);
        }
      }
      var f = e(81203);
      class C {
        get currentClips() {
          return this.isLoaded
            ? this.clipIds.map((t) => this.clips.clipById[t])
            : null;
        }
        constructor(t, i) {
          (this.clipIds = []),
            (this.isLoaded = !1),
            (this.filters = { liked: !1, public: !1, page: 0 }),
            (this.setInitialClips = (t) => {
              (this.clipIds = t.map((t) => t.id)),
                this.clips.updateClips(t),
                (this.isLoaded = !0),
                this.updateFilters({});
            }),
            (this.updateFilters = (t) => {
              void 0 === t.page && (this.filters.page = 0),
                (this.filters = { ...this.filters, ...t }),
                this.loadClips();
            }),
            (this.incrementPage = (t) => {
              this.updateFilters({ page: Math.max(0, this.filters.page + t) });
            }),
            (this.loadClips = async () => {
              let t = JSON.stringify(this.filters),
                { data: i } = await this.apiClient.GET("/api/feed/", {
                  params: {
                    query: {
                      ...(this.filters.liked ? { is_liked: !0 } : {}),
                      ...(this.filters.public ? { is_public: !0 } : {}),
                      page: this.filters.page,
                    },
                  },
                });
              i &&
                (this.clips.updateClips(i),
                (this.isLoaded = !0),
                t === JSON.stringify(this.filters) &&
                  (this.clipIds = i.map((t) => t.id)));
            }),
            (this.getStepCallback = () => (t, i) => {
              let e = this.clipIds.indexOf(t.clipId);
              if (-1 === e) return;
              let s = this.clipIds[e + i];
              s && t.playClip(this.clips.clipById[s]);
            }),
            (this.getPlaylistStepCallback = (t) => (i, e) => {
              let s = t.clipIds.indexOf(i.clipId);
              if (-1 === s) return;
              let a = t.clipIds[s + e];
              a && i.playClip(this.clips.clipById[a]);
            }),
            (this.apiClient = t),
            (this.clips = i),
            (0, n.ky)(this);
        }
      }
      let v =
        e(62601).env.NEXT_PUBLIC_STATUS_URL || "https://statusz.suno.ai/z";
      class b {
        constructor() {
          (this.isMaintenance = !1),
            (this.loadStatus = async () => {
              try {
                let t = await fetch(v),
                  i = await t.json();
                (null == i ? void 0 : i.status) === "maintenance" &&
                  ((this.isMaintenance = !0), console.log("maintenance"));
              } catch (t) {
                return;
              }
            }),
            (0, n.ky)(this),
            this.loadStatus();
        }
      }
      let I = new b();
      class E {
        get isStaff() {
          var t;
          return (
            (null === (t = this.roles) || void 0 === t ? void 0 : t.staff) || !1
          );
        }
        get isOutOfCredits() {
          return this.credits <= 0;
        }
        constructor(t) {
          var i = this;
          (this.user = null),
            (this.userId = null),
            (this.roles = {}),
            (this.sub = {}),
            (this.isSubLoaded = !1),
            (this.credits = 50),
            (this.isCreditsLoaded = !1),
            (this.loadSession = async function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1;
              i.loadSubscriptionInfo();
              let { data: e, error: s } = await i.apiClient.GET(
                "/api/session/"
              );
              if (e) {
                var a;
                (i.user = e.user),
                  (i.userId =
                    (null === (a = e.user) || void 0 === a ? void 0 : a.id) ||
                    null),
                  (i.roles = e.roles),
                  console.log("got roles", e.roles);
              } else
                t > 0 &&
                  setTimeout(() => {
                    i.loadSubscriptionInfo(t - 1);
                  }, 1e3);
            }),
            (this.loadSubscriptionInfo = async function () {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 2,
                { data: e, error: s } = await i.apiClient.GET(
                  "/api/billing/info/"
                );
              if (e)
                return (
                  (i.credits =
                    (null == e ? void 0 : e.total_credits_left) || 0),
                  (i.isCreditsLoaded = !0),
                  (i.sub = e),
                  (i.isSubLoaded = !0),
                  e
                );
              s &&
                t > 0 &&
                setTimeout(() => {
                  i.loadSubscriptionInfo(t - 1);
                }, 1e3);
            }),
            (this.deductCredits = (t) => {
              this.credits = Math.max(0, this.credits - t);
            }),
            (this.maintenanceState = I),
            (0, n.ky)(this),
            (this.apiClient = t);
        }
      }
      var k = e(65567),
        w = e(97131),
        S = e.n(w);
      let _ = "26ced217328f4737497bd6ba6641ca1c";
      if (_) {
        S().init(_, { track_pageview: !0 });
        try {
          localStorage.removeItem("chakra-ui-color-mode");
        } catch (t) {}
      }
      if ("function" == typeof Node && Node.prototype) {
        let t = Node.prototype.removeChild;
        Node.prototype.removeChild = function (i) {
          return i.parentNode !== this
            ? (console &&
                console.error(
                  "Cannot remove a child from a different parent",
                  i,
                  this
                ),
              i)
            : t.apply(this, arguments);
        };
        let i = Node.prototype.insertBefore;
        Node.prototype.insertBefore = function (t, e) {
          return e && e.parentNode !== this
            ? (console &&
                console.error(
                  "Cannot insert before a reference node from a different parent",
                  e,
                  this
                ),
              t)
            : i.apply(this, arguments);
        };
      }
      let T = "Satoshi, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI",
        P = (0, c.B1)({
          config: { initialColorMode: "dark", useSystemColorMode: !1 },
          fonts: { heading: T, body: T },
          components: { MenuList: { defaultProps: { background: "black" } } },
        }),
        { ToastContainer: L, toast: B } = (0, f.I)({
          theme: P,
          colorMode: "dark",
        }),
        q = (0, p.createContext)({}),
        R = null,
        x = (t) => {
          if (R) return R;
          let i = new E(t),
            e = new a.z3(t, i);
          return (R = {
            playbar: new l(t),
            clips: e,
            genForm: new g(t),
            library: new C(t, e),
            session: i,
          });
        },
        M = () => (0, p.useContext)(q);
      function N(t) {
        let { children: i } = t,
          e = (0, o.m)(),
          a = (0, k.aC)(),
          n = (0, p.useMemo)(() => x(e), []);
        return (
          (0, p.useEffect)(() => {
            a.isSignedIn && n.session.loadSession();
          }, [a.isSignedIn]),
          (0, s.jsxs)(q.Provider, {
            value: n,
            children: [
              (0, s.jsx)(d.Z, { initialColorMode: "dark" }),
              (0, s.jsxs)(u.x, {
                theme: P,
                children: [
                  (0, s.jsx)(L, {}),
                  (0, s.jsx)(h.t7, { children: i }),
                ],
              }),
            ],
          })
        );
      }
    },
    91171: function (t, i, e) {
      e.d(i, {
        MT: function () {
          return l;
        },
        wQ: function () {
          return d;
        },
        xI: function () {
          return u;
        },
      });
      let s = [
          "uplifting",
          "syncopated",
          "groovy",
          "infectious",
          "dreamy",
          "mellow",
          "bouncy",
          "heartfelt",
        ],
        a = [
          "jazz",
          "reggae",
          "dancepop",
          "synthwave",
          "k-pop",
          "j-pop",
          "hip hop",
          "trap",
          "country",
          "kids",
        ],
        n = [
          "missing you at Christmas",
          "Christmas",
          "Hanukkah",
          "finding love on a rainy day",
          "a cozy rainy day",
          "dancing with you for the last time",
          "not being able to wait to see you again",
          "you always being there for me",
          "when you're not around",
          "a faded photo on the mantel",
          "a literal banana",
        ];
      function r(t) {
        if (0 === t.length)
          throw Error("Array must contain at least one element.");
        let i = Math.floor(Math.random() * t.length);
        return t[i];
      }
      function l() {
        let t = r(s),
          i = r(a),
          e = r(n),
          l = "aeiou".includes(t[0]) ? "an" : "a";
        return ""
          .concat(l, " ")
          .concat(t, " ")
          .concat(i, " song about ")
          .concat(e);
      }
      let o = [
        "Christmas gifts",
        "missing you at Christmas",
        "Hanukkah",
        "sledding in the snow",
        "the first day of Christmas",
      ];
      function d() {
        let t = r(o);
        return ""
          .concat("aeiou".includes("p") ? "an" : "a", " ")
          .concat("pop", " song about ")
          .concat(t);
      }
      let u = "holiday";
    },
    10180: function (t, i, e) {
      e.d(i, {
        D6: function () {
          return r;
        },
        M8: function () {
          return s;
        },
        W0: function () {
          return o;
        },
        jd: function () {
          return a;
        },
        zp: function () {
          return n;
        },
      });
      let s = (t) => {
          var i;
          return (
            t.title ||
            (null === (i = t.metadata.prompt) || void 0 === i
              ? void 0
              : i
                  .replace(/\[.*?\]/g, "")
                  .trim()
                  .split("\n")[0]
                  .slice(0, 40))
          );
        },
        a = "chirp-v2-xxl-alpha",
        n = "chirp-v2-engine-v13",
        r = [
          { key: "chirp-v2-engine-v13", name: "V2-13-s" },
          { key: "chirp-v2-engine-jingle", name: "V2-13-Jingle-Only" },
          { key: "chirp-v2-engine-dev", name: "V2-13-dev" },
          { key: "chirp-v2-engine-batch-ft13", name: "V2-13" },
          { key: "chirp-v2-engine-v12", name: "V2-12-s" },
          { key: "chirp-v2-engine-classical", name: "V2-classical-s" },
          { key: "chirp-v2-engine-v0", name: "V2-00-s" },
          { key: "chirp-v2-xxl-alpha", name: "V2" },
        ],
        l = Object.fromEntries(r.map((t) => [t.key, t.name])),
        o = (t) => l[t] || t;
    },
    32355: function (t, i, e) {
      e.d(i, {
        m: function () {
          return n;
        },
      });
      var s = e(37480),
        a = e(65567);
      function n() {
        let { getToken: t } = (0, a.aC)();
        return (0, s.ZP)({
          baseUrl: "https://studio-api.suno.ai",
          fetch: async (i, e) => {
            let s = await t({ template: "api" });
            return fetch(i, {
              ...e,
              headers: {
                ...(null == e ? void 0 : e.headers),
                Authorization: "Bearer ".concat(s),
              },
            });
          },
        });
      }
    },
    64763: function (t, i, e) {
      e.d(i, {
        de: function () {
          return d;
        },
        ip: function () {
          return o;
        },
        z3: function () {
          return l;
        },
      });
      var s = e(53305),
        a = e(24256),
        n = e(10180),
        r = e(91171);
      class l {
        get clips() {
          return this.clipIds
            .map((t) => this.clipById[t])
            .filter((t) => {
              var i;
              return (
                (null === (i = t.reaction) || void 0 === i
                  ? void 0
                  : i.reaction_type) !== "D"
              );
            })
            .filter((t) => "error" !== t.status);
        }
        get loadingRequests() {
          return Array.from(this.runningRequests).map(
            (t) => this.requestById[t]
          );
        }
        constructor(t, i) {
          var e = this;
          (this.clipById = {}),
            (this.playlistById = {}),
            (this.clipIds = []),
            (this.runningRequests = new Set()),
            (this.uncreditedRequests = new Set()),
            (this.requestById = {}),
            (this.clipRequestId = {}),
            (this.notifiedErrors = new Set()),
            (this.runGeneration = async (t) => {
              let { data: i, error: e } = await this.apiClient.POST(
                "/api/generate/",
                { body: { prompt: t.lyrics, tags: t.style, mv: t.mv } }
              );
              if (i)
                return (
                  this.runningRequests.add(i.id),
                  this.uncreditedRequests.add(i.id),
                  (this.requestById[i.id] = i),
                  i.id
                );
            }),
            (this.runStream = async function (t) {
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              let i = arguments.length > 2 ? arguments[2] : void 0,
                a = "chirp-v2-engine-jingle",
                l = t.isSimple
                  ? {
                      gpt_description_prompt: t.description || t.placeholder,
                      mv: i === r.xI ? a : n.zp,
                      prompt: "",
                    }
                  : {
                      prompt: t.lyrics,
                      tags: t.style,
                      mv: i === r.xI ? a : t.mv,
                      title: t.title,
                      continue_clip_id: t.continueClipId,
                    },
                {
                  data: o,
                  error: d,
                  response: u,
                } = await e.apiClient.POST("/api/generate/v2/", { body: l });
              if (o)
                return (
                  (e.requestById[o.id] = o),
                  o.clips.forEach((t) => {
                    e.addClip({ ...t }),
                      e.runningRequests.add(t.id),
                      e.uncreditedRequests.add(t.id),
                      (e.clipRequestId[t.id] = o.id);
                  }),
                  e.clipById[o.clips[0].id]
                );
              429 === u.status
                ? (0, s.toast)({
                    title: "Please wait.",
                    description:
                      "Please wait for your other generations to finish.",
                    status: "error",
                    duration: 4e3,
                    isClosable: !0,
                  })
                : 402 === u.status
                ? (0, s.toast)({
                    title: "Need at least 10 credits to create.",
                    description: "Upgrade your account to get more credits!",
                    status: "error",
                    duration: 4e3,
                    isClosable: !0,
                  })
                : 503 === u.status
                ? (0, s.toast)({
                    title: "We are currently doing system maintenance.",
                    description: "Please check back soon.",
                    status: "error",
                    duration: 4e3,
                    isClosable: !0,
                  })
                : d &&
                  (0, s.toast)({
                    title: "An error occurred.",
                    description: "A system error occurred.",
                    status: "error",
                    duration: 4e3,
                    isClosable: !0,
                  });
            }),
            (this.runConcat = async (t) => {
              let { data: i } = await this.apiClient.POST(
                "/api/generate/concat/v2/",
                { body: { clip_id: t } }
              );
              i && (this.addClip(i), this.runningRequests.add(i.id));
            }),
            (this.fetchRecentClips = async () => {
              let { data: t } = await this.apiClient.GET("/api/feed/");
              t &&
                (null == t || t.reverse(),
                null == t ||
                  t.forEach((t) => {
                    this.clipById[t.id] = t;
                  }),
                (this.clipIds =
                  (null == t ? void 0 : t.map((t) => t.id)) || []));
            }),
            (this.addClip = (t) => {
              (this.clipById[t.id] = t),
                this.clipIds.includes(t.id) || this.clipIds.push(t.id);
            }),
            (this.updateClips = (t) => {
              t.forEach((t) => {
                this.clipById[t.id] = t;
              });
            }),
            (this.fetchRunningRequests = async () => {
              let { data: t } = await this.apiClient.GET(
                "/api/generate/requests/",
                { params: { query: { status: "running" } } }
              );
              t &&
                (null == t ||
                  t.forEach((t) => {
                    t.clips.forEach((t) => this.addClip(t)),
                      this.runningRequests.add(t.id),
                      (this.requestById[t.id] = t),
                      this.updateClips(t.clips);
                  }));
            }),
            (this.pollRunningGens = async () => {
              let { data: t } = await this.apiClient.GET("/api/feed/", {
                params: {
                  query: { ids: Array.from(this.runningRequests).join(",") },
                },
              });
              t &&
                (null == t ||
                  t.forEach((t) => {
                    if (
                      (this.updateClips([t]),
                      "streaming" === t.status &&
                        this.uncreditedRequests.has(t.id) &&
                        (this.uncreditedRequests.delete(t.id),
                        this.session.deductCredits(5)),
                      ("complete" === t.status || "error" === t.status) &&
                        (this.runningRequests.delete(t.id),
                        this.uncreditedRequests.has(t.id) &&
                          (this.uncreditedRequests.delete(t.id),
                          "error" === t.status ||
                            t.metadata.refund_credits ||
                            this.session.deductCredits(5)),
                        "error" === t.status))
                    ) {
                      let i = this.clipRequestId[t.id];
                      (i && this.notifiedErrors.has(i)) ||
                        (i && this.notifiedErrors.add(i),
                        "moderation_failure" === t.metadata.error_type
                          ? (0, s.toast)({
                              title: "Couldn't generate that.",
                              description:
                                "Suno is for generating original music. Try different lyrics, and use genres and vibes rather than specific artist names.",
                              status: "error",
                              duration: 6e3,
                              isClosable: !0,
                            })
                          : (0, s.toast)({
                              title: "An error occurred generating a clip.",
                              description: "An error occurred.",
                              status: "error",
                              duration: 4e3,
                              isClosable: !0,
                            }));
                    }
                  }));
            }),
            (this.likeClip = async (t, i) => {
              (this.clipById[t].reaction = {
                ...this.clipById[t].reaction,
                reaction_type: i ? "L" : null,
              }),
                void 0 !== this.clipById[t].upvote_count &&
                  (this.clipById[t].upvote_count += i ? 1 : -1);
              let { data: e } = await this.apiClient.POST(
                "/api/gen/{gen_id}/update_reaction_type/",
                {
                  params: { path: { gen_id: t } },
                  body: { reaction: i ? "LIKE" : null },
                }
              );
            }),
            (this.dislikeClip = async (t, i) => {
              this.clipById[t].reaction = {
                ...this.clipById[t].reaction,
                reaction_type: i ? "D" : null,
              };
              let { data: e } = await this.apiClient.POST(
                "/api/gen/{gen_id}/update_reaction_type/",
                {
                  params: { path: { gen_id: t } },
                  body: { reaction: i ? "DISLIKE" : null },
                }
              );
            }),
            (this.getStepCallback = () => (t, i) => {
              let e = this.clipIds.indexOf(t.clipId);
              if (-1 === e) return;
              let s = this.clipIds[e + i];
              s && t.playClip(this.clipById[s]);
            }),
            (this.loadPlaylist = async (t) => {
              let { data: i } = await this.apiClient.GET(
                "/api/playlist/{playlist_id}/",
                { params: { path: { playlist_id: t } } }
              );
              i &&
                ((this.playlistById[t] = {
                  ...i,
                  clipIds: i.playlist_clips.map((t) => t.clip.id),
                }),
                this.updateClips(i.playlist_clips.map((t) => t.clip)));
            }),
            (this.setClipVisibility = async (t, i) => {
              if (!this.clipById[t]) return;
              this.clipById[t].is_public = i;
              let { data: e } = await this.apiClient.POST(
                "/api/gen/{gen_id}/set_visibility/",
                { params: { path: { gen_id: t } }, body: { is_public: i } }
              );
            }),
            (this.flagClip = async function (t) {
              let i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                { data: a } = await e.apiClient.POST(
                  "/api/gen/{gen_id}/update_flag_state/",
                  {
                    params: { path: { gen_id: t } },
                    body: { flagged: !0, flagged_reason: i },
                  }
                );
              a &&
                (0, s.toast)({
                  title: "Clip flagged.",
                  description: "This clip has been flagged for review.",
                  status: "warning",
                  duration: 4e3,
                  isClosable: !0,
                });
            }),
            (0, a.ky)(this),
            (this.apiClient = t),
            (this.session = i),
            setInterval(() => {
              this.runningRequests.size && this.pollRunningGens();
            }, 5e3);
        }
      }
      let o = (t) => {
          var i;
          return (
            (null === (i = t.reaction) || void 0 === i
              ? void 0
              : i.reaction_type) === "L"
          );
        },
        d = (t) => {
          var i;
          return (
            (null === (i = t.reaction) || void 0 === i
              ? void 0
              : i.reaction_type) === "D"
          );
        };
    },
  },
]);
