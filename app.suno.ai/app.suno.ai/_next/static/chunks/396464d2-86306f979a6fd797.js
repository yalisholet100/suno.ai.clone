"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [119],
  {
    1333: function (e, t, r) {
      let n, i, s, o, a;
      r.d(t, {
        U: function () {
          return rh;
        },
      });
      var l,
        c,
        u,
        d,
        h,
        p,
        f,
        m,
        y = r(3705),
        g = r(53334),
        v = r(93154),
        _ = r(29118),
        S = r(2244),
        b = r(43556),
        w = r(21477),
        E = r(63677),
        k = r(46744),
        I = r(61070),
        M = r(95836),
        C = r(67168),
        R = r(20996),
        T = r(94705),
        x = r(67008),
        O = r(36631),
        D = r(36078),
        N = r(48630),
        A = r(58105),
        L = r(86502),
        P = r(41795);
      let B = b.n2,
        F = "sentryReplaySession",
        j = "Unable to send Replay";
      function U(e) {
        let t = null == e ? void 0 : e.host;
        return (null == t ? void 0 : t.shadowRoot) === e;
      }
      function z(e) {
        return "[object ShadowRoot]" === Object.prototype.toString.call(e);
      }
      function W(e) {
        try {
          var t;
          let r = e.rules || e.cssRules;
          return r
            ? ((t = Array.from(r, H).join("")).includes(
                " background-clip: text;"
              ) &&
                !t.includes(" -webkit-background-clip: text;") &&
                (t = t.replace(
                  " background-clip: text;",
                  " -webkit-background-clip: text; background-clip: text;"
                )),
              t)
            : null;
        } catch (e) {
          return null;
        }
      }
      function H(e) {
        let t;
        if ("styleSheet" in e)
          try {
            t =
              W(e.styleSheet) ||
              (function (e) {
                let { cssText: t } = e;
                if (t.split('"').length < 3) return t;
                let r = ["@import", "url(".concat(JSON.stringify(e.href), ")")];
                return (
                  "" === e.layerName
                    ? r.push("layer")
                    : e.layerName && r.push("layer(".concat(e.layerName, ")")),
                  e.supportsText &&
                    r.push("supports(".concat(e.supportsText, ")")),
                  e.media.length && r.push(e.media.mediaText),
                  r.join(" ") + ";"
                );
              })(e);
          } catch (e) {}
        else if ("selectorText" in e && e.selectorText.includes(":"))
          return e.cssText.replace(
            /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm,
            "$1\\$2"
          );
        return t || e.cssText;
      }
      ((l = f || (f = {}))[(l.Document = 0)] = "Document"),
        (l[(l.DocumentType = 1)] = "DocumentType"),
        (l[(l.Element = 2)] = "Element"),
        (l[(l.Text = 3)] = "Text"),
        (l[(l.CDATA = 4)] = "CDATA"),
        (l[(l.Comment = 5)] = "Comment");
      class q {
        getId(e) {
          var t;
          if (!e) return -1;
          let r =
            null === (t = this.getMeta(e)) || void 0 === t ? void 0 : t.id;
          return null != r ? r : -1;
        }
        getNode(e) {
          return this.idNodeMap.get(e) || null;
        }
        getIds() {
          return Array.from(this.idNodeMap.keys());
        }
        getMeta(e) {
          return this.nodeMetaMap.get(e) || null;
        }
        removeNodeFromMap(e) {
          let t = this.getId(e);
          this.idNodeMap.delete(t),
            e.childNodes &&
              e.childNodes.forEach((e) => this.removeNodeFromMap(e));
        }
        has(e) {
          return this.idNodeMap.has(e);
        }
        hasNode(e) {
          return this.nodeMetaMap.has(e);
        }
        add(e, t) {
          let r = t.id;
          this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, t);
        }
        replace(e, t) {
          let r = this.getNode(e);
          if (r) {
            let e = this.nodeMetaMap.get(r);
            e && this.nodeMetaMap.set(t, e);
          }
          this.idNodeMap.set(e, t);
        }
        reset() {
          (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
        }
        constructor() {
          (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
        }
      }
      function K(e) {
        let { maskInputOptions: t, tagName: r, type: n } = e;
        return (
          "OPTION" === r && (r = "SELECT"),
          !!(
            t[r.toLowerCase()] ||
            (n && t[n]) ||
            "password" === n ||
            ("INPUT" === r && !n && t.text)
          )
        );
      }
      function V(e) {
        let { isMasked: t, element: r, value: n, maskInputFn: i } = e,
          s = n || "";
        return t ? (i && (s = i(s, r)), "*".repeat(s.length)) : s;
      }
      function J(e) {
        return e.toLowerCase();
      }
      function G(e) {
        return e.toUpperCase();
      }
      let Y = "__rrweb_original__";
      function X(e) {
        let t = e.type;
        return e.hasAttribute("data-rr-is-password")
          ? "password"
          : t
          ? J(t)
          : null;
      }
      function $(e, t, r) {
        return "INPUT" === t && ("radio" === r || "checkbox" === r)
          ? e.getAttribute("value") || ""
          : e.value;
      }
      let Q = 1,
        Z = RegExp("[^a-z0-9-_:]");
      function ee() {
        return Q++;
      }
      let et = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        er = /^(?:[a-z+]+:)?\/\//i,
        en = /^www\..*/i,
        ei = /^(data:)([^,]*),(.*)/i;
      function es(e, t) {
        return (e || "").replace(et, (e, r, n, i, s, o) => {
          let a = n || s || o,
            l = r || i || "";
          if (!a) return e;
          if (er.test(a) || en.test(a) || ei.test(a))
            return "url(".concat(l).concat(a).concat(l, ")");
          if ("/" === a[0])
            return "url("
              .concat(l)
              .concat(
                (t.indexOf("//") > -1
                  ? t.split("/").slice(0, 3).join("/")
                  : t.split("/")[0]
                ).split("?")[0] + a
              )
              .concat(l, ")");
          let c = t.split("/"),
            u = a.split("/");
          for (let e of (c.pop(), u))
            "." !== e && (".." === e ? c.pop() : c.push(e));
          return "url(".concat(l).concat(c.join("/")).concat(l, ")");
        });
      }
      let eo = /^[^ \t\n\r\u000c]+/,
        ea = /^[, \t\n\r\u000c]+/;
      function el(e, t) {
        if (!t || "" === t.trim()) return t;
        let r = e.createElement("a");
        return (r.href = t), r.href;
      }
      function ec() {
        let e = document.createElement("a");
        return (e.href = ""), e.href;
      }
      function eu(e, t, r, n, i, s) {
        return n
          ? "src" !== r &&
            ("href" !== r || ("use" === t && "#" === n[0])) &&
            ("xlink:href" !== r || "#" === n[0]) &&
            ("background" !== r || ("table" !== t && "td" !== t && "th" !== t))
            ? "srcset" === r
              ? (function (e, t) {
                  if ("" === t.trim()) return t;
                  let r = 0;
                  function n(e) {
                    let n;
                    let i = e.exec(t.substring(r));
                    return i ? ((n = i[0]), (r += n.length), n) : "";
                  }
                  let i = [];
                  for (; n(ea), !(r >= t.length); ) {
                    let s = n(eo);
                    if ("," === s.slice(-1))
                      (s = el(e, s.substring(0, s.length - 1))), i.push(s);
                    else {
                      let n = "";
                      s = el(e, s);
                      let o = !1;
                      for (;;) {
                        let e = t.charAt(r);
                        if ("" === e) {
                          i.push((s + n).trim());
                          break;
                        }
                        if (o) ")" === e && (o = !1);
                        else {
                          if ("," === e) {
                            (r += 1), i.push((s + n).trim());
                            break;
                          }
                          "(" === e && (o = !0);
                        }
                        (n += e), (r += 1);
                      }
                    }
                  }
                  return i.join(", ");
                })(e, n)
              : "style" === r
              ? es(n, ec())
              : "object" === t && "data" === r
              ? el(e, n)
              : "function" == typeof s
              ? s(r, n, i)
              : n
            : el(e, n)
          : n;
      }
      function ed(e, t, r) {
        return ("video" === e || "audio" === e) && "autoplay" === t;
      }
      function eh(e, t) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 1 / 0,
          n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        return !e || e.nodeType !== e.ELEMENT_NODE || n > r
          ? -1
          : t(e)
          ? n
          : eh(e.parentNode, t, r, n + 1);
      }
      function ep(e, t) {
        return (r) => {
          if (null === r) return !1;
          if (e) {
            if ("string" == typeof e) {
              if (r.matches(".".concat(e))) return !0;
            } else if (
              (function (e, t) {
                for (let r = e.classList.length; r--; ) {
                  let n = e.classList[r];
                  if (t.test(n)) return !0;
                }
                return !1;
              })(r, e)
            )
              return !0;
          }
          return !!(t && r.matches(t));
        };
      }
      function ef(e, t, r, n, i, s) {
        try {
          let o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
          if (null === o) return !1;
          let a = -1,
            l = -1;
          if (s) {
            if ((l = eh(o, ep(n, i))) < 0) return !0;
            a = eh(o, ep(t, r), l >= 0 ? l : 1 / 0);
          } else {
            if ((a = eh(o, ep(t, r))) < 0) return !1;
            l = eh(o, ep(n, i), a >= 0 ? a : 1 / 0);
          }
          return a >= 0 ? !(l >= 0) || a <= l : !(l >= 0) && !!s;
        } catch (e) {}
        return !!s;
      }
      function em(e) {
        return null == e ? "" : e.toLowerCase();
      }
      function ey(e, t) {
        let r;
        let {
            doc: s,
            mirror: o,
            blockClass: a,
            blockSelector: l,
            unblockSelector: c,
            maskAllText: u,
            maskTextClass: d,
            unmaskTextClass: h,
            maskTextSelector: p,
            unmaskTextSelector: m,
            skipChild: y = !1,
            inlineStylesheet: g = !0,
            maskInputOptions: v = {},
            maskAttributeFn: _,
            maskTextFn: S,
            maskInputFn: b,
            slimDOMOptions: w,
            dataURLOptions: E = {},
            inlineImages: k = !1,
            recordCanvas: I = !1,
            onSerialize: M,
            onIframeLoad: C,
            iframeLoadTimeout: R = 5e3,
            onStylesheetLoad: T,
            stylesheetLoadTimeout: x = 5e3,
            keepIframeSrcFn: O = () => !1,
            newlyAddedElement: D = !1,
          } = t,
          { preserveWhiteSpace: N = !0 } = t,
          A = (function (e, t) {
            let {
                doc: r,
                mirror: s,
                blockClass: o,
                blockSelector: a,
                unblockSelector: l,
                maskAllText: c,
                maskAttributeFn: u,
                maskTextClass: d,
                unmaskTextClass: h,
                maskTextSelector: p,
                unmaskTextSelector: m,
                inlineStylesheet: y,
                maskInputOptions: g = {},
                maskTextFn: v,
                maskInputFn: _,
                dataURLOptions: S = {},
                inlineImages: b,
                recordCanvas: w,
                keepIframeSrcFn: E,
                newlyAddedElement: k = !1,
              } = t,
              I = (function (e, t) {
                if (!t.hasNode(e)) return;
                let r = t.getId(e);
                return 1 === r ? void 0 : r;
              })(r, s);
            switch (e.nodeType) {
              case e.DOCUMENT_NODE:
                if ("CSS1Compat" !== e.compatMode)
                  return {
                    type: f.Document,
                    childNodes: [],
                    compatMode: e.compatMode,
                  };
                return { type: f.Document, childNodes: [] };
              case e.DOCUMENT_TYPE_NODE:
                return {
                  type: f.DocumentType,
                  name: e.name,
                  publicId: e.publicId,
                  systemId: e.systemId,
                  rootId: I,
                };
              case e.ELEMENT_NODE:
                return (function (e, t) {
                  let r;
                  let {
                      doc: s,
                      blockClass: o,
                      blockSelector: a,
                      unblockSelector: l,
                      inlineStylesheet: c,
                      maskInputOptions: u = {},
                      maskAttributeFn: d,
                      maskInputFn: h,
                      dataURLOptions: p = {},
                      inlineImages: m,
                      recordCanvas: y,
                      keepIframeSrcFn: g,
                      newlyAddedElement: v = !1,
                      rootId: _,
                      maskAllText: S,
                      maskTextClass: b,
                      unmaskTextClass: w,
                      maskTextSelector: E,
                      unmaskTextSelector: k,
                    } = t,
                    I = (function (e, t, r, n) {
                      try {
                        if (n && e.matches(n)) return !1;
                        if ("string" == typeof t) {
                          if (e.classList.contains(t)) return !0;
                        } else
                          for (let r = e.classList.length; r--; ) {
                            let n = e.classList[r];
                            if (t.test(n)) return !0;
                          }
                        if (r) return e.matches(r);
                      } catch (e) {}
                      return !1;
                    })(e, o, a, l),
                    M = (function (e) {
                      if (e instanceof HTMLFormElement) return "form";
                      let t = J(e.tagName);
                      return Z.test(t) ? "div" : t;
                    })(e),
                    C = {},
                    R = e.attributes.length;
                  for (let t = 0; t < R; t++) {
                    let r = e.attributes[t];
                    ed(M, r.name, r.value) ||
                      (C[r.name] = eu(s, M, J(r.name), r.value, e, d));
                  }
                  if ("link" === M && c) {
                    let t = Array.from(s.styleSheets).find(
                        (t) => t.href === e.href
                      ),
                      r = null;
                    t && (r = W(t)),
                      r &&
                        (delete C.rel,
                        delete C.href,
                        (C._cssText = es(r, t.href)));
                  }
                  if (
                    "style" === M &&
                    e.sheet &&
                    !(e.innerText || e.textContent || "").trim().length
                  ) {
                    let t = W(e.sheet);
                    t && (C._cssText = es(t, ec()));
                  }
                  if (
                    "input" === M ||
                    "textarea" === M ||
                    "select" === M ||
                    "option" === M
                  ) {
                    let t = X(e),
                      r = $(e, G(M), t),
                      n = e.checked;
                    if ("submit" !== t && "button" !== t && r) {
                      let n = ef(
                        e,
                        b,
                        E,
                        w,
                        k,
                        K({ type: t, tagName: G(M), maskInputOptions: u })
                      );
                      C.value = V({
                        isMasked: n,
                        element: e,
                        value: r,
                        maskInputFn: h,
                      });
                    }
                    n && (C.checked = n);
                  }
                  if (
                    ("option" === M &&
                      (e.selected && !u.select
                        ? (C.selected = !0)
                        : delete C.selected),
                    "canvas" === M && y)
                  ) {
                    if ("2d" === e.__context)
                      !(function (e) {
                        let t = e.getContext("2d");
                        if (!t) return !0;
                        for (let r = 0; r < e.width; r += 50)
                          for (let n = 0; n < e.height; n += 50) {
                            let i = t.getImageData,
                              s = Y in i ? i[Y] : i;
                            if (
                              new Uint32Array(
                                s.call(
                                  t,
                                  r,
                                  n,
                                  Math.min(50, e.width - r),
                                  Math.min(50, e.height - n)
                                ).data.buffer
                              ).some((e) => 0 !== e)
                            )
                              return !1;
                          }
                        return !0;
                      })(e) && (C.rr_dataURL = e.toDataURL(p.type, p.quality));
                    else if (!("__context" in e)) {
                      let t = e.toDataURL(p.type, p.quality),
                        r = document.createElement("canvas");
                      (r.width = e.width),
                        (r.height = e.height),
                        t !== r.toDataURL(p.type, p.quality) &&
                          (C.rr_dataURL = t);
                    }
                  }
                  if ("img" === M && m) {
                    n || (i = (n = s.createElement("canvas")).getContext("2d"));
                    let t = e.crossOrigin;
                    e.crossOrigin = "anonymous";
                    let r = () => {
                      e.removeEventListener("load", r);
                      try {
                        (n.width = e.naturalWidth),
                          (n.height = e.naturalHeight),
                          i.drawImage(e, 0, 0),
                          (C.rr_dataURL = n.toDataURL(p.type, p.quality));
                      } catch (t) {
                        console.warn(
                          "Cannot inline img src="
                            .concat(e.currentSrc, "! Error: ")
                            .concat(t)
                        );
                      }
                      t
                        ? (C.crossOrigin = t)
                        : e.removeAttribute("crossorigin");
                    };
                    e.complete && 0 !== e.naturalWidth
                      ? r()
                      : e.addEventListener("load", r);
                  }
                  if (
                    (("audio" === M || "video" === M) &&
                      ((C.rr_mediaState = e.paused ? "paused" : "played"),
                      (C.rr_mediaCurrentTime = e.currentTime)),
                    !v &&
                      (e.scrollLeft && (C.rr_scrollLeft = e.scrollLeft),
                      e.scrollTop && (C.rr_scrollTop = e.scrollTop)),
                    I)
                  ) {
                    let { width: t, height: r } = e.getBoundingClientRect();
                    C = {
                      class: C.class,
                      rr_width: "".concat(t, "px"),
                      rr_height: "".concat(r, "px"),
                    };
                  }
                  "iframe" !== M ||
                    g(C.src) ||
                    (e.contentDocument || (C.rr_src = C.src), delete C.src);
                  try {
                    customElements.get(M) && (r = !0);
                  } catch (e) {}
                  return {
                    type: f.Element,
                    tagName: M,
                    attributes: C,
                    childNodes: [],
                    isSVG:
                      !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                    needBlock: I,
                    rootId: _,
                    isCustom: r,
                  };
                })(e, {
                  doc: r,
                  blockClass: o,
                  blockSelector: a,
                  unblockSelector: l,
                  inlineStylesheet: y,
                  maskAttributeFn: u,
                  maskInputOptions: g,
                  maskInputFn: _,
                  dataURLOptions: S,
                  inlineImages: b,
                  recordCanvas: w,
                  keepIframeSrcFn: E,
                  newlyAddedElement: k,
                  rootId: I,
                  maskAllText: c,
                  maskTextClass: d,
                  unmaskTextClass: h,
                  maskTextSelector: p,
                  unmaskTextSelector: m,
                });
              case e.TEXT_NODE:
                return (function (e, t) {
                  var r;
                  let {
                      maskAllText: n,
                      maskTextClass: i,
                      unmaskTextClass: s,
                      maskTextSelector: o,
                      unmaskTextSelector: a,
                      maskTextFn: l,
                      maskInputOptions: c,
                      maskInputFn: u,
                      rootId: d,
                    } = t,
                    h = e.parentNode && e.parentNode.tagName,
                    p = e.textContent,
                    m = "STYLE" === h || void 0,
                    y = "SCRIPT" === h || void 0,
                    g = "TEXTAREA" === h || void 0;
                  if (m && p) {
                    try {
                      e.nextSibling ||
                        e.previousSibling ||
                        ((null === (r = e.parentNode.sheet) || void 0 === r
                          ? void 0
                          : r.cssRules) &&
                          (p = W(e.parentNode.sheet)));
                    } catch (t) {
                      console.warn(
                        "Cannot get CSS styles from text's parentNode. Error: ".concat(
                          t
                        ),
                        e
                      );
                    }
                    p = es(p, ec());
                  }
                  y && (p = "SCRIPT_PLACEHOLDER");
                  let v = ef(e, i, o, s, a, n);
                  return (
                    m ||
                      y ||
                      g ||
                      !p ||
                      !v ||
                      (p = l ? l(p) : p.replace(/[\S]/g, "*")),
                    g &&
                      p &&
                      (c.textarea || v) &&
                      (p = u ? u(p, e.parentNode) : p.replace(/[\S]/g, "*")),
                    "OPTION" === h &&
                      p &&
                      (p = V({
                        isMasked: ef(
                          e,
                          i,
                          o,
                          s,
                          a,
                          K({ type: null, tagName: h, maskInputOptions: c })
                        ),
                        element: e,
                        value: p,
                        maskInputFn: u,
                      })),
                    {
                      type: f.Text,
                      textContent: p || "",
                      isStyle: m,
                      rootId: d,
                    }
                  );
                })(e, {
                  maskAllText: c,
                  maskTextClass: d,
                  unmaskTextClass: h,
                  maskTextSelector: p,
                  unmaskTextSelector: m,
                  maskTextFn: v,
                  maskInputOptions: g,
                  maskInputFn: _,
                  rootId: I,
                });
              case e.CDATA_SECTION_NODE:
                return { type: f.CDATA, textContent: "", rootId: I };
              case e.COMMENT_NODE:
                return {
                  type: f.Comment,
                  textContent: e.textContent || "",
                  rootId: I,
                };
              default:
                return !1;
            }
          })(e, {
            doc: s,
            mirror: o,
            blockClass: a,
            blockSelector: l,
            maskAllText: u,
            unblockSelector: c,
            maskTextClass: d,
            unmaskTextClass: h,
            maskTextSelector: p,
            unmaskTextSelector: m,
            inlineStylesheet: g,
            maskInputOptions: v,
            maskAttributeFn: _,
            maskTextFn: S,
            maskInputFn: b,
            dataURLOptions: E,
            inlineImages: k,
            recordCanvas: I,
            keepIframeSrcFn: O,
            newlyAddedElement: D,
          });
        if (!A) return console.warn(e, "not serialized"), null;
        r = o.hasNode(e)
          ? o.getId(e)
          : !(function (e, t) {
              if (t.comment && e.type === f.Comment) return !0;
              if (e.type === f.Element) {
                if (
                  (t.script &&
                    ("script" === e.tagName ||
                      ("link" === e.tagName &&
                        ("preload" === e.attributes.rel ||
                          "modulepreload" === e.attributes.rel) &&
                        "script" === e.attributes.as) ||
                      ("link" === e.tagName &&
                        "prefetch" === e.attributes.rel &&
                        "string" == typeof e.attributes.href &&
                        e.attributes.href.endsWith(".js")))) ||
                  (t.headFavicon &&
                    (("link" === e.tagName &&
                      "shortcut icon" === e.attributes.rel) ||
                      ("meta" === e.tagName &&
                        (em(e.attributes.name).match(
                          /^msapplication-tile(image|color)$/
                        ) ||
                          "application-name" === em(e.attributes.name) ||
                          "icon" === em(e.attributes.rel) ||
                          "apple-touch-icon" === em(e.attributes.rel) ||
                          "shortcut icon" === em(e.attributes.rel)))))
                )
                  return !0;
                if ("meta" === e.tagName) {
                  if (
                    (t.headMetaDescKeywords &&
                      em(e.attributes.name).match(/^description|keywords$/)) ||
                    (t.headMetaSocial &&
                      (em(e.attributes.property).match(/^(og|twitter|fb):/) ||
                        em(e.attributes.name).match(/^(og|twitter):/) ||
                        "pinterest" === em(e.attributes.name)))
                  )
                    return !0;
                  if (
                    t.headMetaRobots &&
                    ("robots" === em(e.attributes.name) ||
                      "googlebot" === em(e.attributes.name) ||
                      "bingbot" === em(e.attributes.name))
                  )
                    return !0;
                  if (
                    t.headMetaHttpEquiv &&
                    void 0 !== e.attributes["http-equiv"]
                  )
                    return !0;
                  else if (
                    t.headMetaAuthorship &&
                    ("author" === em(e.attributes.name) ||
                      "generator" === em(e.attributes.name) ||
                      "framework" === em(e.attributes.name) ||
                      "publisher" === em(e.attributes.name) ||
                      "progid" === em(e.attributes.name) ||
                      em(e.attributes.property).match(/^article:/) ||
                      em(e.attributes.property).match(/^product:/))
                  )
                    return !0;
                  else if (
                    t.headMetaVerification &&
                    ("google-site-verification" === em(e.attributes.name) ||
                      "yandex-verification" === em(e.attributes.name) ||
                      "csrf-token" === em(e.attributes.name) ||
                      "p:domain_verify" === em(e.attributes.name) ||
                      "verify-v1" === em(e.attributes.name) ||
                      "verification" === em(e.attributes.name) ||
                      "shopify-checkout-api-token" === em(e.attributes.name))
                  )
                    return !0;
                }
              }
              return !1;
            })(A, w) &&
            (N ||
              A.type !== f.Text ||
              A.isStyle ||
              A.textContent.replace(/^\s+|\s+$/gm, "").length)
          ? ee()
          : -2;
        let L = Object.assign(A, { id: r });
        if ((o.add(e, L), -2 === r)) return null;
        M && M(e);
        let P = !y;
        if (L.type === f.Element) {
          (P = P && !L.needBlock), delete L.needBlock;
          let t = e.shadowRoot;
          t && z(t) && (L.isShadowHost = !0);
        }
        if ((L.type === f.Document || L.type === f.Element) && P) {
          w.headWhitespace &&
            L.type === f.Element &&
            "head" === L.tagName &&
            (N = !1);
          let t = {
            doc: s,
            mirror: o,
            blockClass: a,
            blockSelector: l,
            maskAllText: u,
            unblockSelector: c,
            maskTextClass: d,
            unmaskTextClass: h,
            maskTextSelector: p,
            unmaskTextSelector: m,
            skipChild: y,
            inlineStylesheet: g,
            maskInputOptions: v,
            maskAttributeFn: _,
            maskTextFn: S,
            maskInputFn: b,
            slimDOMOptions: w,
            dataURLOptions: E,
            inlineImages: k,
            recordCanvas: I,
            preserveWhiteSpace: N,
            onSerialize: M,
            onIframeLoad: C,
            iframeLoadTimeout: R,
            onStylesheetLoad: T,
            stylesheetLoadTimeout: x,
            keepIframeSrcFn: O,
          };
          for (let r of Array.from(e.childNodes)) {
            let e = ey(r, t);
            e && L.childNodes.push(e);
          }
          if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot)
            for (let r of Array.from(e.shadowRoot.childNodes)) {
              let n = ey(r, t);
              n && (z(e.shadowRoot) && (n.isShadow = !0), L.childNodes.push(n));
            }
        }
        return (
          e.parentNode &&
            U(e.parentNode) &&
            z(e.parentNode) &&
            (L.isShadow = !0),
          L.type === f.Element &&
            "iframe" === L.tagName &&
            (function (e, t, r) {
              let n;
              let i = e.contentWindow;
              if (!i) return;
              let s = !1;
              try {
                n = i.document.readyState;
              } catch (e) {
                return;
              }
              if ("complete" !== n) {
                let n = setTimeout(() => {
                  s || (t(), (s = !0));
                }, r);
                e.addEventListener("load", () => {
                  clearTimeout(n), (s = !0), t();
                });
                return;
              }
              let o = "about:blank";
              if (i.location.href !== o || e.src === o || "" === e.src)
                return setTimeout(t, 0), e.addEventListener("load", t);
              e.addEventListener("load", t);
            })(
              e,
              () => {
                let t = e.contentDocument;
                if (t && C) {
                  let r = ey(t, {
                    doc: t,
                    mirror: o,
                    blockClass: a,
                    blockSelector: l,
                    unblockSelector: c,
                    maskAllText: u,
                    maskTextClass: d,
                    unmaskTextClass: h,
                    maskTextSelector: p,
                    unmaskTextSelector: m,
                    skipChild: !1,
                    inlineStylesheet: g,
                    maskInputOptions: v,
                    maskAttributeFn: _,
                    maskTextFn: S,
                    maskInputFn: b,
                    slimDOMOptions: w,
                    dataURLOptions: E,
                    inlineImages: k,
                    recordCanvas: I,
                    preserveWhiteSpace: N,
                    onSerialize: M,
                    onIframeLoad: C,
                    iframeLoadTimeout: R,
                    onStylesheetLoad: T,
                    stylesheetLoadTimeout: x,
                    keepIframeSrcFn: O,
                  });
                  r && C(e, r);
                }
              },
              R
            ),
          L.type === f.Element &&
            "link" === L.tagName &&
            "stylesheet" === L.attributes.rel &&
            (function (e, t, r) {
              let n,
                i = !1;
              try {
                n = e.sheet;
              } catch (e) {
                return;
              }
              if (n) return;
              let s = setTimeout(() => {
                i || (t(), (i = !0));
              }, r);
              e.addEventListener("load", () => {
                clearTimeout(s), (i = !0), t();
              });
            })(
              e,
              () => {
                if (T) {
                  let t = ey(e, {
                    doc: s,
                    mirror: o,
                    blockClass: a,
                    blockSelector: l,
                    unblockSelector: c,
                    maskAllText: u,
                    maskTextClass: d,
                    unmaskTextClass: h,
                    maskTextSelector: p,
                    unmaskTextSelector: m,
                    skipChild: !1,
                    inlineStylesheet: g,
                    maskInputOptions: v,
                    maskAttributeFn: _,
                    maskTextFn: S,
                    maskInputFn: b,
                    slimDOMOptions: w,
                    dataURLOptions: E,
                    inlineImages: k,
                    recordCanvas: I,
                    preserveWhiteSpace: N,
                    onSerialize: M,
                    onIframeLoad: C,
                    iframeLoadTimeout: R,
                    onStylesheetLoad: T,
                    stylesheetLoadTimeout: x,
                    keepIframeSrcFn: O,
                  });
                  t && T(e, t);
                }
              },
              x
            ),
          L
        );
      }
      function eg(e, t) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : document,
          n = { capture: !0, passive: !0 };
        return (
          r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n)
        );
      }
      let ev =
          "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        e_ = {
          map: {},
          getId: () => (console.error(ev), -1),
          getNode: () => (console.error(ev), null),
          removeNodeFromMap() {
            console.error(ev);
          },
          has: () => (console.error(ev), !1),
          reset() {
            console.error(ev);
          },
        };
      function eS(e, t) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = null,
          i = 0;
        return function () {
          for (var s = arguments.length, o = Array(s), a = 0; a < s; a++)
            o[a] = arguments[a];
          let l = Date.now();
          i || !1 !== r.leading || (i = l);
          let c = t - (l - i),
            u = this;
          c <= 0 || c > t
            ? (n && (clearTimeout(n), (n = null)), (i = l), e.apply(u, o))
            : n ||
              !1 === r.trailing ||
              (n = setTimeout(() => {
                (i = !1 === r.leading ? 0 : Date.now()),
                  (n = null),
                  e.apply(u, o);
              }, c));
        };
      }
      function eb(e, t, r) {
        try {
          if (!(t in e)) return () => {};
          let n = e[t],
            i = r(n);
          return (
            "function" == typeof i &&
              ((i.prototype = i.prototype || {}),
              Object.defineProperties(i, {
                __rrweb_original__: { enumerable: !1, value: n },
              })),
            (e[t] = i),
            () => {
              e[t] = n;
            }
          );
        } catch (e) {
          return () => {};
        }
      }
      window.Proxy &&
        window.Reflect &&
        (e_ = new Proxy(e_, {
          get: (e, t, r) => (
            "map" === t && console.error(ev), Reflect.get(e, t, r)
          ),
        }));
      let ew = Date.now;
      function eE(e) {
        var t, r, n, i, s, o;
        let a = e.document;
        return {
          left: a.scrollingElement
            ? a.scrollingElement.scrollLeft
            : void 0 !== e.pageXOffset
            ? e.pageXOffset
            : (null == a ? void 0 : a.documentElement.scrollLeft) ||
              (null ===
                (r =
                  null === (t = null == a ? void 0 : a.body) || void 0 === t
                    ? void 0
                    : t.parentElement) || void 0 === r
                ? void 0
                : r.scrollLeft) ||
              (null === (n = null == a ? void 0 : a.body) || void 0 === n
                ? void 0
                : n.scrollLeft) ||
              0,
          top: a.scrollingElement
            ? a.scrollingElement.scrollTop
            : void 0 !== e.pageYOffset
            ? e.pageYOffset
            : (null == a ? void 0 : a.documentElement.scrollTop) ||
              (null ===
                (s =
                  null === (i = null == a ? void 0 : a.body) || void 0 === i
                    ? void 0
                    : i.parentElement) || void 0 === s
                ? void 0
                : s.scrollTop) ||
              (null === (o = null == a ? void 0 : a.body) || void 0 === o
                ? void 0
                : o.scrollTop) ||
              0,
        };
      }
      function ek() {
        return (
          window.innerHeight ||
          (document.documentElement && document.documentElement.clientHeight) ||
          (document.body && document.body.clientHeight)
        );
      }
      function eI() {
        return (
          window.innerWidth ||
          (document.documentElement && document.documentElement.clientWidth) ||
          (document.body && document.body.clientWidth)
        );
      }
      function eM(e, t, r, n, i) {
        if (!e) return !1;
        let s = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (!s) return !1;
        let o = ep(t, r);
        if (!i) {
          let e = n && s.matches(n);
          return o(s) && !e;
        }
        let a = eh(s, o),
          l = -1;
        return (
          !(a < 0) &&
          (n && (l = eh(s, ep(null, n))), (a > -1 && l < 0) || a < l)
        );
      }
      function eC(e, t) {
        return -2 === t.getId(e);
      }
      function eR(e) {
        return !!e.changedTouches;
      }
      function eT(e, t) {
        return !!("IFRAME" === e.nodeName && t.getMeta(e));
      }
      function ex(e, t) {
        return !!(
          "LINK" === e.nodeName &&
          e.nodeType === e.ELEMENT_NODE &&
          e.getAttribute &&
          "stylesheet" === e.getAttribute("rel") &&
          t.getMeta(e)
        );
      }
      function eO(e) {
        return !!(null == e ? void 0 : e.shadowRoot);
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) ||
        (ew = () => new Date().getTime());
      class eD {
        getId(e) {
          var t;
          return null !== (t = this.styleIDMap.get(e)) && void 0 !== t ? t : -1;
        }
        has(e) {
          return this.styleIDMap.has(e);
        }
        add(e, t) {
          let r;
          return this.has(e)
            ? this.getId(e)
            : ((r = void 0 === t ? this.id++ : t),
              this.styleIDMap.set(e, r),
              this.idStyleMap.set(r, e),
              r);
        }
        getStyle(e) {
          return this.idStyleMap.get(e) || null;
        }
        reset() {
          (this.styleIDMap = new WeakMap()),
            (this.idStyleMap = new Map()),
            (this.id = 1);
        }
        generateId() {
          return this.id++;
        }
        constructor() {
          (this.id = 1),
            (this.styleIDMap = new WeakMap()),
            (this.idStyleMap = new Map());
        }
      }
      function eN(e) {
        var t, r;
        let n = null;
        return (
          (null ===
            (r =
              null === (t = e.getRootNode) || void 0 === t
                ? void 0
                : t.call(e)) || void 0 === r
            ? void 0
            : r.nodeType) === Node.DOCUMENT_FRAGMENT_NODE &&
            e.getRootNode().host &&
            (n = e.getRootNode().host),
          n
        );
      }
      function eA(e) {
        let t = e.ownerDocument;
        return (
          !!t &&
          (t.contains(e) ||
            (function (e) {
              let t = e.ownerDocument;
              if (!t) return !1;
              let r = (function (e) {
                let t,
                  r = e;
                for (; (t = eN(r)); ) r = t;
                return r;
              })(e);
              return t.contains(r);
            })(e))
        );
      }
      var eL =
          (((c = eL || {})[(c.DomContentLoaded = 0)] = "DomContentLoaded"),
          (c[(c.Load = 1)] = "Load"),
          (c[(c.FullSnapshot = 2)] = "FullSnapshot"),
          (c[(c.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
          (c[(c.Meta = 4)] = "Meta"),
          (c[(c.Custom = 5)] = "Custom"),
          (c[(c.Plugin = 6)] = "Plugin"),
          c),
        eP =
          (((u = eP || {})[(u.Mutation = 0)] = "Mutation"),
          (u[(u.MouseMove = 1)] = "MouseMove"),
          (u[(u.MouseInteraction = 2)] = "MouseInteraction"),
          (u[(u.Scroll = 3)] = "Scroll"),
          (u[(u.ViewportResize = 4)] = "ViewportResize"),
          (u[(u.Input = 5)] = "Input"),
          (u[(u.TouchMove = 6)] = "TouchMove"),
          (u[(u.MediaInteraction = 7)] = "MediaInteraction"),
          (u[(u.StyleSheetRule = 8)] = "StyleSheetRule"),
          (u[(u.CanvasMutation = 9)] = "CanvasMutation"),
          (u[(u.Font = 10)] = "Font"),
          (u[(u.Log = 11)] = "Log"),
          (u[(u.Drag = 12)] = "Drag"),
          (u[(u.StyleDeclaration = 13)] = "StyleDeclaration"),
          (u[(u.Selection = 14)] = "Selection"),
          (u[(u.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
          (u[(u.CustomElement = 16)] = "CustomElement"),
          u),
        eB =
          (((d = eB || {})[(d.MouseUp = 0)] = "MouseUp"),
          (d[(d.MouseDown = 1)] = "MouseDown"),
          (d[(d.Click = 2)] = "Click"),
          (d[(d.ContextMenu = 3)] = "ContextMenu"),
          (d[(d.DblClick = 4)] = "DblClick"),
          (d[(d.Focus = 5)] = "Focus"),
          (d[(d.Blur = 6)] = "Blur"),
          (d[(d.TouchStart = 7)] = "TouchStart"),
          (d[(d.TouchMove_Departed = 8)] = "TouchMove_Departed"),
          (d[(d.TouchEnd = 9)] = "TouchEnd"),
          (d[(d.TouchCancel = 10)] = "TouchCancel"),
          d),
        eF =
          (((h = eF || {})[(h.Mouse = 0)] = "Mouse"),
          (h[(h.Pen = 1)] = "Pen"),
          (h[(h.Touch = 2)] = "Touch"),
          h);
      class ej {
        get(e) {
          if (e >= this.length) throw Error("Position outside of list range");
          let t = this.head;
          for (let r = 0; r < e; r++) t = (null == t ? void 0 : t.next) || null;
          return t;
        }
        addNode(e) {
          let t = { value: e, previous: null, next: null };
          if (
            ((e.__ln = t), e.previousSibling && "__ln" in e.previousSibling)
          ) {
            let r = e.previousSibling.__ln.next;
            (t.next = r),
              (t.previous = e.previousSibling.__ln),
              (e.previousSibling.__ln.next = t),
              r && (r.previous = t);
          } else if (
            e.nextSibling &&
            "__ln" in e.nextSibling &&
            e.nextSibling.__ln.previous
          ) {
            let r = e.nextSibling.__ln.previous;
            (t.previous = r),
              (t.next = e.nextSibling.__ln),
              (e.nextSibling.__ln.previous = t),
              r && (r.next = t);
          } else
            this.head && (this.head.previous = t),
              (t.next = this.head),
              (this.head = t);
          null === t.next && (this.tail = t), this.length++;
        }
        removeNode(e) {
          let t = e.__ln;
          this.head &&
            (t.previous
              ? ((t.previous.next = t.next),
                t.next
                  ? (t.next.previous = t.previous)
                  : (this.tail = t.previous))
              : ((this.head = t.next),
                this.head ? (this.head.previous = null) : (this.tail = null)),
            e.__ln && delete e.__ln,
            this.length--);
        }
        constructor() {
          (this.length = 0), (this.head = null), (this.tail = null);
        }
      }
      let eU = (e, t) => "".concat(e, "@").concat(t);
      class ez {
        init(e) {
          [
            "mutationCb",
            "blockClass",
            "blockSelector",
            "unblockSelector",
            "maskAllText",
            "maskTextClass",
            "unmaskTextClass",
            "maskTextSelector",
            "unmaskTextSelector",
            "inlineStylesheet",
            "maskInputOptions",
            "maskAttributeFn",
            "maskTextFn",
            "maskInputFn",
            "keepIframeSrcFn",
            "recordCanvas",
            "inlineImages",
            "slimDOMOptions",
            "dataURLOptions",
            "doc",
            "mirror",
            "iframeManager",
            "stylesheetManager",
            "shadowDomManager",
            "canvasManager",
            "processedNodeManager",
          ].forEach((t) => {
            this[t] = e[t];
          });
        }
        freeze() {
          (this.frozen = !0), this.canvasManager.freeze();
        }
        unfreeze() {
          (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
        }
        isFrozen() {
          return this.frozen;
        }
        lock() {
          (this.locked = !0), this.canvasManager.lock();
        }
        unlock() {
          (this.locked = !1), this.canvasManager.unlock(), this.emit();
        }
        reset() {
          this.shadowDomManager.reset(), this.canvasManager.reset();
        }
        constructor() {
          (this.frozen = !1),
            (this.locked = !1),
            (this.texts = []),
            (this.attributes = []),
            (this.removes = []),
            (this.mapRemoves = []),
            (this.movedMap = {}),
            (this.addedSet = new Set()),
            (this.movedSet = new Set()),
            (this.droppedSet = new Set()),
            (this.processMutations = (e) => {
              e.forEach(this.processMutation), this.emit();
            }),
            (this.emit = () => {
              if (this.frozen || this.locked) return;
              let e = [],
                t = new Set(),
                r = new ej(),
                n = (e) => {
                  let t = e,
                    r = -2;
                  for (; -2 === r; )
                    r = (t = t && t.nextSibling) && this.mirror.getId(t);
                  return r;
                },
                i = (i) => {
                  if (!i.parentNode || !eA(i)) return;
                  let s = U(i.parentNode)
                      ? this.mirror.getId(eN(i))
                      : this.mirror.getId(i.parentNode),
                    o = n(i);
                  if (-1 === s || -1 === o) return r.addNode(i);
                  let a = ey(i, {
                    doc: this.doc,
                    mirror: this.mirror,
                    blockClass: this.blockClass,
                    blockSelector: this.blockSelector,
                    maskAllText: this.maskAllText,
                    unblockSelector: this.unblockSelector,
                    maskTextClass: this.maskTextClass,
                    unmaskTextClass: this.unmaskTextClass,
                    maskTextSelector: this.maskTextSelector,
                    unmaskTextSelector: this.unmaskTextSelector,
                    skipChild: !0,
                    newlyAddedElement: !0,
                    inlineStylesheet: this.inlineStylesheet,
                    maskInputOptions: this.maskInputOptions,
                    maskAttributeFn: this.maskAttributeFn,
                    maskTextFn: this.maskTextFn,
                    maskInputFn: this.maskInputFn,
                    slimDOMOptions: this.slimDOMOptions,
                    dataURLOptions: this.dataURLOptions,
                    recordCanvas: this.recordCanvas,
                    inlineImages: this.inlineImages,
                    onSerialize: (e) => {
                      eT(e, this.mirror) && this.iframeManager.addIframe(e),
                        ex(e, this.mirror) &&
                          this.stylesheetManager.trackLinkElement(e),
                        eO(i) &&
                          this.shadowDomManager.addShadowRoot(
                            i.shadowRoot,
                            this.doc
                          );
                    },
                    onIframeLoad: (e, t) => {
                      this.iframeManager.attachIframe(e, t),
                        this.shadowDomManager.observeAttachShadow(e);
                    },
                    onStylesheetLoad: (e, t) => {
                      this.stylesheetManager.attachLinkElement(e, t);
                    },
                  });
                  a &&
                    (e.push({ parentId: s, nextId: o, node: a }), t.add(a.id));
                };
              for (; this.mapRemoves.length; )
                this.mirror.removeNodeFromMap(this.mapRemoves.shift());
              for (let e of this.movedSet)
                (!eH(this.removes, e, this.mirror) ||
                  this.movedSet.has(e.parentNode)) &&
                  i(e);
              for (let e of this.addedSet)
                eq(this.droppedSet, e) || eH(this.removes, e, this.mirror)
                  ? eq(this.movedSet, e)
                    ? i(e)
                    : this.droppedSet.add(e)
                  : i(e);
              let s = null;
              for (; r.length; ) {
                let e = null;
                if (s) {
                  let t = this.mirror.getId(s.value.parentNode),
                    r = n(s.value);
                  -1 !== t && -1 !== r && (e = s);
                }
                if (!e) {
                  let t = r.tail;
                  for (; t; ) {
                    let r = t;
                    if (((t = t.previous), r)) {
                      let t = this.mirror.getId(r.value.parentNode);
                      if (-1 === n(r.value)) continue;
                      if (-1 !== t) {
                        e = r;
                        break;
                      }
                      {
                        let t = r.value;
                        if (
                          t.parentNode &&
                          t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                        ) {
                          let n = t.parentNode.host;
                          if (-1 !== this.mirror.getId(n)) {
                            e = r;
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if (!e) {
                  for (; r.head; ) r.removeNode(r.head.value);
                  break;
                }
                (s = e.previous), r.removeNode(e.value), i(e.value);
              }
              let o = {
                texts: this.texts
                  .map((e) => ({
                    id: this.mirror.getId(e.node),
                    value: e.value,
                  }))
                  .filter((e) => !t.has(e.id))
                  .filter((e) => this.mirror.has(e.id)),
                attributes: this.attributes
                  .map((e) => {
                    let { attributes: t } = e;
                    if ("string" == typeof t.style) {
                      let r = JSON.stringify(e.styleDiff),
                        n = JSON.stringify(e._unchangedStyles);
                      r.length < t.style.length &&
                        (r + n).split("var(").length ===
                          t.style.split("var(").length &&
                        (t.style = e.styleDiff);
                    }
                    return { id: this.mirror.getId(e.node), attributes: t };
                  })
                  .filter((e) => !t.has(e.id))
                  .filter((e) => this.mirror.has(e.id)),
                removes: this.removes,
                adds: e,
              };
              (o.texts.length ||
                o.attributes.length ||
                o.removes.length ||
                o.adds.length) &&
                ((this.texts = []),
                (this.attributes = []),
                (this.removes = []),
                (this.addedSet = new Set()),
                (this.movedSet = new Set()),
                (this.droppedSet = new Set()),
                (this.movedMap = {}),
                this.mutationCb(o));
            }),
            (this.processMutation = (e) => {
              let t;
              if (!eC(e.target, this.mirror)) {
                try {
                  t = document.implementation.createHTMLDocument();
                } catch (e) {
                  t = this.doc;
                }
                switch (e.type) {
                  case "characterData": {
                    let t = e.target.textContent;
                    eM(
                      e.target,
                      this.blockClass,
                      this.blockSelector,
                      this.unblockSelector,
                      !1
                    ) ||
                      t === e.oldValue ||
                      this.texts.push({
                        value:
                          ef(
                            e.target,
                            this.maskTextClass,
                            this.maskTextSelector,
                            this.unmaskTextClass,
                            this.unmaskTextSelector,
                            this.maskAllText
                          ) && t
                            ? this.maskTextFn
                              ? this.maskTextFn(t)
                              : t.replace(/[\S]/g, "*")
                            : t,
                        node: e.target,
                      });
                    break;
                  }
                  case "attributes": {
                    let r = e.target,
                      n = e.attributeName,
                      i = e.target.getAttribute(n);
                    if ("value" === n) {
                      let t = X(r),
                        n = r.tagName;
                      i = $(r, n, t);
                      let s = K({
                        maskInputOptions: this.maskInputOptions,
                        tagName: n,
                        type: t,
                      });
                      i = V({
                        isMasked: ef(
                          e.target,
                          this.maskTextClass,
                          this.maskTextSelector,
                          this.unmaskTextClass,
                          this.unmaskTextSelector,
                          s
                        ),
                        element: r,
                        value: i,
                        maskInputFn: this.maskInputFn,
                      });
                    }
                    if (
                      eM(
                        e.target,
                        this.blockClass,
                        this.blockSelector,
                        this.unblockSelector,
                        !1
                      ) ||
                      i === e.oldValue
                    )
                      return;
                    let s = this.attributes.find((t) => t.node === e.target);
                    if (
                      "IFRAME" === r.tagName &&
                      "src" === n &&
                      !this.keepIframeSrcFn(i)
                    ) {
                      if (r.contentDocument) return;
                      n = "rr_src";
                    }
                    if (
                      (s ||
                        ((s = {
                          node: e.target,
                          attributes: {},
                          styleDiff: {},
                          _unchangedStyles: {},
                        }),
                        this.attributes.push(s)),
                      "type" === n &&
                        "INPUT" === r.tagName &&
                        "password" === (e.oldValue || "").toLowerCase() &&
                        r.setAttribute("data-rr-is-password", "true"),
                      !ed(r.tagName, n) &&
                        ((s.attributes[n] = eu(
                          this.doc,
                          J(r.tagName),
                          J(n),
                          i,
                          r,
                          this.maskAttributeFn
                        )),
                        "style" === n))
                    ) {
                      let n = t.createElement("span");
                      for (let t of (e.oldValue &&
                        n.setAttribute("style", e.oldValue),
                      Array.from(r.style))) {
                        let e = r.style.getPropertyValue(t),
                          i = r.style.getPropertyPriority(t);
                        e !== n.style.getPropertyValue(t) ||
                        i !== n.style.getPropertyPriority(t)
                          ? "" === i
                            ? (s.styleDiff[t] = e)
                            : (s.styleDiff[t] = [e, i])
                          : (s._unchangedStyles[t] = [e, i]);
                      }
                      for (let e of Array.from(n.style))
                        "" === r.style.getPropertyValue(e) &&
                          (s.styleDiff[e] = !1);
                    }
                    break;
                  }
                  case "childList":
                    if (
                      eM(
                        e.target,
                        this.blockClass,
                        this.blockSelector,
                        this.unblockSelector,
                        !0
                      )
                    )
                      return;
                    e.addedNodes.forEach((t) => this.genAdds(t, e.target)),
                      e.removedNodes.forEach((t) => {
                        let r = this.mirror.getId(t),
                          n = U(e.target)
                            ? this.mirror.getId(e.target.host)
                            : this.mirror.getId(e.target);
                        eM(
                          e.target,
                          this.blockClass,
                          this.blockSelector,
                          this.unblockSelector,
                          !1
                        ) ||
                          eC(t, this.mirror) ||
                          -1 === this.mirror.getId(t) ||
                          (this.addedSet.has(t)
                            ? (eW(this.addedSet, t), this.droppedSet.add(t))
                            : (this.addedSet.has(e.target) && -1 === r) ||
                              (function e(t, r) {
                                if (U(t)) return !1;
                                let n = r.getId(t);
                                return (
                                  !r.has(n) ||
                                  ((!t.parentNode ||
                                    t.parentNode.nodeType !==
                                      t.DOCUMENT_NODE) &&
                                    (!t.parentNode || e(t.parentNode, r)))
                                );
                              })(e.target, this.mirror) ||
                              (this.movedSet.has(t) && this.movedMap[eU(r, n)]
                                ? eW(this.movedSet, t)
                                : this.removes.push({
                                    parentId: n,
                                    id: r,
                                    isShadow:
                                      !!(U(e.target) && z(e.target)) || void 0,
                                  })),
                          this.mapRemoves.push(t));
                      });
                }
              }
            }),
            (this.genAdds = (e, t) => {
              if (
                !this.processedNodeManager.inOtherBuffer(e, this) &&
                !(this.addedSet.has(e) || this.movedSet.has(e))
              ) {
                if (this.mirror.hasNode(e)) {
                  if (eC(e, this.mirror)) return;
                  this.movedSet.add(e);
                  let r = null;
                  t && this.mirror.hasNode(t) && (r = this.mirror.getId(t)),
                    r &&
                      -1 !== r &&
                      (this.movedMap[eU(this.mirror.getId(e), r)] = !0);
                } else this.addedSet.add(e), this.droppedSet.delete(e);
                !eM(
                  e,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !1
                ) &&
                  (e.childNodes.forEach((e) => this.genAdds(e)),
                  eO(e) &&
                    e.shadowRoot.childNodes.forEach((t) => {
                      this.processedNodeManager.add(t, this),
                        this.genAdds(t, e);
                    }));
              }
            });
        }
      }
      function eW(e, t) {
        e.delete(t), t.childNodes.forEach((t) => eW(e, t));
      }
      function eH(e, t, r) {
        return (
          0 !== e.length &&
          (function e(t, r, n) {
            let { parentNode: i } = r;
            if (!i) return !1;
            let s = n.getId(i);
            return !!t.some((e) => e.id === s) || e(t, i, n);
          })(e, t, r)
        );
      }
      function eq(e, t) {
        return (
          0 !== e.size &&
          (function e(t, r) {
            let { parentNode: n } = r;
            return !!n && (!!t.has(n) || e(t, n));
          })(e, t)
        );
      }
      let eK = (e) =>
          s
            ? function () {
                for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
                try {
                  return e(...r);
                } catch (e) {
                  if (s && !0 === s(e)) return () => {};
                  throw e;
                }
              }
            : e,
        eV = [];
      function eJ(e) {
        try {
          if ("composedPath" in e) {
            let t = e.composedPath();
            if (t.length) return t[0];
          } else if ("path" in e && e.path.length) return e.path[0];
        } catch (e) {}
        return e && e.target;
      }
      function eG(e, t) {
        var r, n;
        let i = new ez();
        eV.push(i), i.init(e);
        let s = window.MutationObserver || window.__rrMutationObserver,
          o =
            null ===
              (n =
                null === (r = null == window ? void 0 : window.Zone) ||
                void 0 === r
                  ? void 0
                  : r.__symbol__) || void 0 === n
              ? void 0
              : n.call(r, "MutationObserver");
        o && window[o] && (s = window[o]);
        let a = new s(
          eK((t) => {
            (e.onMutation && !1 === e.onMutation(t)) ||
              i.processMutations.bind(i)(t);
          })
        );
        return (
          a.observe(t, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0,
          }),
          a
        );
      }
      function eY(e) {
        let {
          scrollCb: t,
          doc: r,
          mirror: n,
          blockClass: i,
          blockSelector: s,
          unblockSelector: o,
          sampling: a,
        } = e;
        return eg(
          "scroll",
          eK(
            eS(
              eK((e) => {
                let a = eJ(e);
                if (!a || eM(a, i, s, o, !0)) return;
                let l = n.getId(a);
                if (a === r && r.defaultView) {
                  let e = eE(r.defaultView);
                  t({ id: l, x: e.left, y: e.top });
                } else t({ id: l, x: a.scrollLeft, y: a.scrollTop });
              }),
              a.scroll || 100
            )
          ),
          r
        );
      }
      let eX = ["INPUT", "TEXTAREA", "SELECT"],
        e$ = new WeakMap();
      function eQ(e) {
        var t;
        return (
          (t = []),
          (e2("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule) ||
          (e2("CSSMediaRule") && e.parentRule instanceof CSSMediaRule) ||
          (e2("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule) ||
          (e2("CSSConditionRule") && e.parentRule instanceof CSSConditionRule)
            ? t.unshift(Array.from(e.parentRule.cssRules).indexOf(e))
            : e.parentStyleSheet &&
              t.unshift(Array.from(e.parentStyleSheet.cssRules).indexOf(e)),
          t
        );
      }
      function eZ(e, t, r) {
        let n, i;
        return e
          ? (e.ownerNode ? (n = t.getId(e.ownerNode)) : (i = r.getId(e)),
            { styleId: i, id: n })
          : {};
      }
      function e0(e, t) {
        var r, n, i;
        let { mirror: s, stylesheetManager: o } = e,
          a = null;
        a = "#document" === t.nodeName ? s.getId(t) : s.getId(t.host);
        let l =
            "#document" === t.nodeName
              ? null === (r = t.defaultView) || void 0 === r
                ? void 0
                : r.Document
              : null ===
                  (i =
                    null === (n = t.ownerDocument) || void 0 === n
                      ? void 0
                      : n.defaultView) || void 0 === i
              ? void 0
              : i.ShadowRoot,
          c = (null == l ? void 0 : l.prototype)
            ? Object.getOwnPropertyDescriptor(
                null == l ? void 0 : l.prototype,
                "adoptedStyleSheets"
              )
            : void 0;
        return null !== a && -1 !== a && l && c
          ? (Object.defineProperty(t, "adoptedStyleSheets", {
              configurable: c.configurable,
              enumerable: c.enumerable,
              get() {
                var e;
                return null === (e = c.get) || void 0 === e
                  ? void 0
                  : e.call(this);
              },
              set(e) {
                var t;
                let r =
                  null === (t = c.set) || void 0 === t
                    ? void 0
                    : t.call(this, e);
                if (null !== a && -1 !== a)
                  try {
                    o.adoptStyleSheets(e, a);
                  } catch (e) {}
                return r;
              },
            }),
            eK(() => {
              Object.defineProperty(t, "adoptedStyleSheets", {
                configurable: c.configurable,
                enumerable: c.enumerable,
                get: c.get,
                set: c.set,
              });
            }))
          : () => {};
      }
      function e1(e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        let t = e.doc.defaultView;
        if (!t) return () => {};
        let r = eG(e, e.doc),
          n = (function (e) {
            let t,
              { mousemoveCb: r, sampling: n, doc: i, mirror: s } = e;
            if (!1 === n.mousemove) return () => {};
            let o = "number" == typeof n.mousemove ? n.mousemove : 50,
              a =
                "number" == typeof n.mousemoveCallback
                  ? n.mousemoveCallback
                  : 500,
              l = [],
              c = eS(
                eK((e) => {
                  let n = Date.now() - t;
                  r(
                    l.map((e) => ((e.timeOffset -= n), e)),
                    e
                  ),
                    (l = []),
                    (t = null);
                }),
                a
              ),
              u = eK(
                eS(
                  eK((e) => {
                    let r = eJ(e),
                      { clientX: n, clientY: i } = eR(e)
                        ? e.changedTouches[0]
                        : e;
                    t || (t = ew()),
                      l.push({
                        x: n,
                        y: i,
                        id: s.getId(r),
                        timeOffset: ew() - t,
                      }),
                      c(
                        "undefined" != typeof DragEvent &&
                          e instanceof DragEvent
                          ? eP.Drag
                          : e instanceof MouseEvent
                          ? eP.MouseMove
                          : eP.TouchMove
                      );
                  }),
                  o,
                  { trailing: !1 }
                )
              ),
              d = [
                eg("mousemove", u, i),
                eg("touchmove", u, i),
                eg("drag", u, i),
              ];
            return eK(() => {
              d.forEach((e) => e());
            });
          })(e),
          i = (function (e) {
            let {
              mouseInteractionCb: t,
              doc: r,
              mirror: n,
              blockClass: i,
              blockSelector: s,
              unblockSelector: o,
              sampling: a,
            } = e;
            if (!1 === a.mouseInteraction) return () => {};
            let l =
                !0 === a.mouseInteraction || void 0 === a.mouseInteraction
                  ? {}
                  : a.mouseInteraction,
              c = [],
              u = null,
              d = (e) => (r) => {
                let a = eJ(r);
                if (eM(a, i, s, o, !0)) return;
                let l = null,
                  c = e;
                if ("pointerType" in r) {
                  switch (r.pointerType) {
                    case "mouse":
                      l = eF.Mouse;
                      break;
                    case "touch":
                      l = eF.Touch;
                      break;
                    case "pen":
                      l = eF.Pen;
                  }
                  l === eF.Touch
                    ? eB[e] === eB.MouseDown
                      ? (c = "TouchStart")
                      : eB[e] === eB.MouseUp && (c = "TouchEnd")
                    : eF.Pen;
                } else eR(r) && (l = eF.Touch);
                null !== l
                  ? ((u = l),
                    ((c.startsWith("Touch") && l === eF.Touch) ||
                      (c.startsWith("Mouse") && l === eF.Mouse)) &&
                      (l = null))
                  : eB[e] === eB.Click && ((l = u), (u = null));
                let d = eR(r) ? r.changedTouches[0] : r;
                if (!d) return;
                let h = n.getId(a),
                  { clientX: p, clientY: f } = d;
                eK(t)(
                  Object.assign(
                    { type: eB[c], id: h, x: p, y: f },
                    null !== l && { pointerType: l }
                  )
                );
              };
            return (
              Object.keys(eB)
                .filter(
                  (e) =>
                    Number.isNaN(Number(e)) &&
                    !e.endsWith("_Departed") &&
                    !1 !== l[e]
                )
                .forEach((e) => {
                  let t = J(e),
                    n = d(e);
                  if (window.PointerEvent)
                    switch (eB[e]) {
                      case eB.MouseDown:
                      case eB.MouseUp:
                        t = t.replace("mouse", "pointer");
                        break;
                      case eB.TouchStart:
                      case eB.TouchEnd:
                        return;
                    }
                  c.push(eg(t, n, r));
                }),
              eK(() => {
                c.forEach((e) => e());
              })
            );
          })(e),
          s = eY(e),
          o = (function (e, t) {
            let { viewportResizeCb: r } = e,
              { win: n } = t,
              i = -1,
              s = -1;
            return eg(
              "resize",
              eK(
                eS(
                  eK(() => {
                    let e = ek(),
                      t = eI();
                    (i !== e || s !== t) &&
                      (r({ width: Number(t), height: Number(e) }),
                      (i = e),
                      (s = t));
                  }),
                  200
                )
              ),
              n
            );
          })(e, { win: t }),
          a = (function (e) {
            let {
              inputCb: t,
              doc: r,
              mirror: n,
              blockClass: i,
              blockSelector: s,
              unblockSelector: o,
              ignoreClass: a,
              ignoreSelector: l,
              maskInputOptions: c,
              maskInputFn: u,
              sampling: d,
              userTriggeredOnInput: h,
              maskTextClass: p,
              unmaskTextClass: f,
              maskTextSelector: m,
              unmaskTextSelector: y,
            } = e;
            function g(e) {
              let t = eJ(e),
                n = e.isTrusted,
                d = t && G(t.tagName);
              if (
                ("OPTION" === d && (t = t.parentElement),
                !t || !d || 0 > eX.indexOf(d) || eM(t, i, s, o, !0))
              )
                return;
              let g = t;
              if (g.classList.contains(a) || (l && g.matches(l))) return;
              let _ = X(t),
                S = $(g, d, _),
                b = !1,
                w = K({ maskInputOptions: c, tagName: d, type: _ }),
                E = ef(t, p, m, f, y, w);
              ("radio" === _ || "checkbox" === _) && (b = t.checked),
                (S = V({ isMasked: E, element: t, value: S, maskInputFn: u })),
                v(
                  t,
                  h
                    ? { text: S, isChecked: b, userTriggered: n }
                    : { text: S, isChecked: b }
                );
              let k = t.name;
              "radio" === _ &&
                k &&
                b &&
                r
                  .querySelectorAll(
                    'input[type="radio"][name="'.concat(k, '"]')
                  )
                  .forEach((e) => {
                    if (e !== t) {
                      let t = V({
                        isMasked: E,
                        element: e,
                        value: $(e, d, _),
                        maskInputFn: u,
                      });
                      v(
                        e,
                        h
                          ? { text: t, isChecked: !b, userTriggered: !1 }
                          : { text: t, isChecked: !b }
                      );
                    }
                  });
            }
            function v(e, r) {
              let i = e$.get(e);
              if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
                e$.set(e, r);
                let i = n.getId(e);
                eK(t)(Object.assign(Object.assign({}, r), { id: i }));
              }
            }
            let _ = ("last" === d.input ? ["change"] : ["input", "change"]).map(
                (e) => eg(e, eK(g), r)
              ),
              S = r.defaultView;
            if (!S)
              return () => {
                _.forEach((e) => e());
              };
            let b = S.Object.getOwnPropertyDescriptor(
                S.HTMLInputElement.prototype,
                "value"
              ),
              w = [
                [S.HTMLInputElement.prototype, "value"],
                [S.HTMLInputElement.prototype, "checked"],
                [S.HTMLSelectElement.prototype, "value"],
                [S.HTMLTextAreaElement.prototype, "value"],
                [S.HTMLSelectElement.prototype, "selectedIndex"],
                [S.HTMLOptionElement.prototype, "selected"],
              ];
            return (
              b &&
                b.set &&
                _.push(
                  ...w.map((e) =>
                    (function e(t, r, n, i) {
                      let s =
                          arguments.length > 4 && void 0 !== arguments[4]
                            ? arguments[4]
                            : window,
                        o = s.Object.getOwnPropertyDescriptor(t, r);
                      return (
                        s.Object.defineProperty(
                          t,
                          r,
                          i
                            ? n
                            : {
                                set(e) {
                                  setTimeout(() => {
                                    n.set.call(this, e);
                                  }, 0),
                                    o && o.set && o.set.call(this, e);
                                },
                              }
                        ),
                        () => e(t, r, o || {}, !0)
                      );
                    })(
                      e[0],
                      e[1],
                      {
                        set() {
                          eK(g)({ target: this, isTrusted: !1 });
                        },
                      },
                      !1,
                      S
                    )
                  )
                ),
              eK(() => {
                _.forEach((e) => e());
              })
            );
          })(e),
          l = (function (e) {
            let {
                mediaInteractionCb: t,
                blockClass: r,
                blockSelector: n,
                unblockSelector: i,
                mirror: s,
                sampling: o,
                doc: a,
              } = e,
              l = eK((e) =>
                eS(
                  eK((o) => {
                    let a = eJ(o);
                    if (!a || eM(a, r, n, i, !0)) return;
                    let {
                      currentTime: l,
                      volume: c,
                      muted: u,
                      playbackRate: d,
                    } = a;
                    t({
                      type: e,
                      id: s.getId(a),
                      currentTime: l,
                      volume: c,
                      muted: u,
                      playbackRate: d,
                    });
                  }),
                  o.media || 500
                )
              ),
              c = [
                eg("play", l(0), a),
                eg("pause", l(1), a),
                eg("seeked", l(2), a),
                eg("volumechange", l(3), a),
                eg("ratechange", l(4), a),
              ];
            return eK(() => {
              c.forEach((e) => e());
            });
          })(e),
          c = (function (e, t) {
            let r,
              n,
              { styleSheetRuleCb: i, mirror: s, stylesheetManager: o } = e,
              { win: a } = t;
            if (!a.CSSStyleSheet || !a.CSSStyleSheet.prototype) return () => {};
            let l = a.CSSStyleSheet.prototype.insertRule;
            a.CSSStyleSheet.prototype.insertRule = new Proxy(l, {
              apply: eK((e, t, r) => {
                let [n, a] = r,
                  { id: l, styleId: c } = eZ(t, s, o.styleMirror);
                return (
                  ((l && -1 !== l) || (c && -1 !== c)) &&
                    i({ id: l, styleId: c, adds: [{ rule: n, index: a }] }),
                  e.apply(t, r)
                );
              }),
            });
            let c = a.CSSStyleSheet.prototype.deleteRule;
            (a.CSSStyleSheet.prototype.deleteRule = new Proxy(c, {
              apply: eK((e, t, r) => {
                let [n] = r,
                  { id: a, styleId: l } = eZ(t, s, o.styleMirror);
                return (
                  ((a && -1 !== a) || (l && -1 !== l)) &&
                    i({ id: a, styleId: l, removes: [{ index: n }] }),
                  e.apply(t, r)
                );
              }),
            })),
              a.CSSStyleSheet.prototype.replace &&
                ((r = a.CSSStyleSheet.prototype.replace),
                (a.CSSStyleSheet.prototype.replace = new Proxy(r, {
                  apply: eK((e, t, r) => {
                    let [n] = r,
                      { id: a, styleId: l } = eZ(t, s, o.styleMirror);
                    return (
                      ((a && -1 !== a) || (l && -1 !== l)) &&
                        i({ id: a, styleId: l, replace: n }),
                      e.apply(t, r)
                    );
                  }),
                }))),
              a.CSSStyleSheet.prototype.replaceSync &&
                ((n = a.CSSStyleSheet.prototype.replaceSync),
                (a.CSSStyleSheet.prototype.replaceSync = new Proxy(n, {
                  apply: eK((e, t, r) => {
                    let [n] = r,
                      { id: a, styleId: l } = eZ(t, s, o.styleMirror);
                    return (
                      ((a && -1 !== a) || (l && -1 !== l)) &&
                        i({ id: a, styleId: l, replaceSync: n }),
                      e.apply(t, r)
                    );
                  }),
                })));
            let u = {};
            e3("CSSGroupingRule")
              ? (u.CSSGroupingRule = a.CSSGroupingRule)
              : (e3("CSSMediaRule") && (u.CSSMediaRule = a.CSSMediaRule),
                e3("CSSConditionRule") &&
                  (u.CSSConditionRule = a.CSSConditionRule),
                e3("CSSSupportsRule") &&
                  (u.CSSSupportsRule = a.CSSSupportsRule));
            let d = {};
            return (
              Object.entries(u).forEach((e) => {
                let [t, r] = e;
                (d[t] = {
                  insertRule: r.prototype.insertRule,
                  deleteRule: r.prototype.deleteRule,
                }),
                  (r.prototype.insertRule = new Proxy(d[t].insertRule, {
                    apply: eK((e, t, r) => {
                      let [n, a] = r,
                        { id: l, styleId: c } = eZ(
                          t.parentStyleSheet,
                          s,
                          o.styleMirror
                        );
                      return (
                        ((l && -1 !== l) || (c && -1 !== c)) &&
                          i({
                            id: l,
                            styleId: c,
                            adds: [{ rule: n, index: [...eQ(t), a || 0] }],
                          }),
                        e.apply(t, r)
                      );
                    }),
                  })),
                  (r.prototype.deleteRule = new Proxy(d[t].deleteRule, {
                    apply: eK((e, t, r) => {
                      let [n] = r,
                        { id: a, styleId: l } = eZ(
                          t.parentStyleSheet,
                          s,
                          o.styleMirror
                        );
                      return (
                        ((a && -1 !== a) || (l && -1 !== l)) &&
                          i({
                            id: a,
                            styleId: l,
                            removes: [{ index: [...eQ(t), n] }],
                          }),
                        e.apply(t, r)
                      );
                    }),
                  }));
              }),
              eK(() => {
                (a.CSSStyleSheet.prototype.insertRule = l),
                  (a.CSSStyleSheet.prototype.deleteRule = c),
                  r && (a.CSSStyleSheet.prototype.replace = r),
                  n && (a.CSSStyleSheet.prototype.replaceSync = n),
                  Object.entries(u).forEach((e) => {
                    let [t, r] = e;
                    (r.prototype.insertRule = d[t].insertRule),
                      (r.prototype.deleteRule = d[t].deleteRule);
                  });
              })
            );
          })(e, { win: t }),
          u = e0(e, e.doc),
          d = (function (e, t) {
            let {
                styleDeclarationCb: r,
                mirror: n,
                ignoreCSSAttributes: i,
                stylesheetManager: s,
              } = e,
              { win: o } = t,
              a = o.CSSStyleDeclaration.prototype.setProperty;
            o.CSSStyleDeclaration.prototype.setProperty = new Proxy(a, {
              apply: eK((e, t, o) => {
                var l;
                let [c, u, d] = o;
                if (i.has(c)) return a.apply(t, [c, u, d]);
                let { id: h, styleId: p } = eZ(
                  null === (l = t.parentRule) || void 0 === l
                    ? void 0
                    : l.parentStyleSheet,
                  n,
                  s.styleMirror
                );
                return (
                  ((h && -1 !== h) || (p && -1 !== p)) &&
                    r({
                      id: h,
                      styleId: p,
                      set: { property: c, value: u, priority: d },
                      index: eQ(t.parentRule),
                    }),
                  e.apply(t, o)
                );
              }),
            });
            let l = o.CSSStyleDeclaration.prototype.removeProperty;
            return (
              (o.CSSStyleDeclaration.prototype.removeProperty = new Proxy(l, {
                apply: eK((e, t, o) => {
                  var a;
                  let [c] = o;
                  if (i.has(c)) return l.apply(t, [c]);
                  let { id: u, styleId: d } = eZ(
                    null === (a = t.parentRule) || void 0 === a
                      ? void 0
                      : a.parentStyleSheet,
                    n,
                    s.styleMirror
                  );
                  return (
                    ((u && -1 !== u) || (d && -1 !== d)) &&
                      r({
                        id: u,
                        styleId: d,
                        remove: { property: c },
                        index: eQ(t.parentRule),
                      }),
                    e.apply(t, o)
                  );
                }),
              })),
              eK(() => {
                (o.CSSStyleDeclaration.prototype.setProperty = a),
                  (o.CSSStyleDeclaration.prototype.removeProperty = l);
              })
            );
          })(e, { win: t }),
          h = e.collectFonts
            ? (function (e) {
                let { fontCb: t, doc: r } = e,
                  n = r.defaultView;
                if (!n) return () => {};
                let i = [],
                  s = new WeakMap(),
                  o = n.FontFace;
                n.FontFace = function (e, t, r) {
                  let n = new o(e, t, r);
                  return (
                    s.set(n, {
                      family: e,
                      buffer: "string" != typeof t,
                      descriptors: r,
                      fontSource:
                        "string" == typeof t
                          ? t
                          : JSON.stringify(Array.from(new Uint8Array(t))),
                    }),
                    n
                  );
                };
                let a = eb(r.fonts, "add", function (e) {
                  return function (r) {
                    return (
                      setTimeout(
                        eK(() => {
                          let e = s.get(r);
                          e && (t(e), s.delete(r));
                        }),
                        0
                      ),
                      e.apply(this, [r])
                    );
                  };
                });
                return (
                  i.push(() => {
                    n.FontFace = o;
                  }),
                  i.push(a),
                  eK(() => {
                    i.forEach((e) => e());
                  })
                );
              })(e)
            : () => {},
          p = (function (e) {
            let {
                doc: t,
                mirror: r,
                blockClass: n,
                blockSelector: i,
                unblockSelector: s,
                selectionCb: o,
              } = e,
              a = !0,
              l = eK(() => {
                let e = t.getSelection();
                if (!e || (a && (null == e ? void 0 : e.isCollapsed))) return;
                a = e.isCollapsed || !1;
                let l = [],
                  c = e.rangeCount || 0;
                for (let t = 0; t < c; t++) {
                  let {
                    startContainer: o,
                    startOffset: a,
                    endContainer: c,
                    endOffset: u,
                  } = e.getRangeAt(t);
                  eM(o, n, i, s, !0) ||
                    eM(c, n, i, s, !0) ||
                    l.push({
                      start: r.getId(o),
                      startOffset: a,
                      end: r.getId(c),
                      endOffset: u,
                    });
                }
                o({ ranges: l });
              });
            return l(), eg("selectionchange", l);
          })(e),
          f = (function (e) {
            let { doc: t, customElementCb: r } = e,
              n = t.defaultView;
            return n && n.customElements
              ? eb(n.customElements, "define", function (e) {
                  return function (t, n, i) {
                    try {
                      r({ define: { name: t } });
                    } catch (e) {}
                    return e.apply(this, [t, n, i]);
                  };
                })
              : () => {};
          })(e),
          m = [];
        for (let r of e.plugins) m.push(r.observer(r.callback, t, r.options));
        return eK(() => {
          eV.forEach((e) => e.reset()),
            r.disconnect(),
            n(),
            i(),
            s(),
            o(),
            a(),
            l(),
            c(),
            u(),
            d(),
            h(),
            p(),
            f(),
            m.forEach((e) => e());
        });
      }
      function e2(e) {
        return void 0 !== window[e];
      }
      function e3(e) {
        return !!(
          void 0 !== window[e] &&
          window[e].prototype &&
          "insertRule" in window[e].prototype &&
          "deleteRule" in window[e].prototype
        );
      }
      class e5 {
        getId(e, t, r, n) {
          let i = r || this.getIdToRemoteIdMap(e),
            s = n || this.getRemoteIdToIdMap(e),
            o = i.get(t);
          return o || ((o = this.generateIdFn()), i.set(t, o), s.set(o, t)), o;
        }
        getIds(e, t) {
          let r = this.getIdToRemoteIdMap(e),
            n = this.getRemoteIdToIdMap(e);
          return t.map((t) => this.getId(e, t, r, n));
        }
        getRemoteId(e, t, r) {
          let n = r || this.getRemoteIdToIdMap(e);
          return "number" != typeof t ? t : n.get(t) || -1;
        }
        getRemoteIds(e, t) {
          let r = this.getRemoteIdToIdMap(e);
          return t.map((t) => this.getRemoteId(e, t, r));
        }
        reset(e) {
          if (!e) {
            (this.iframeIdToRemoteIdMap = new WeakMap()),
              (this.iframeRemoteIdToIdMap = new WeakMap());
            return;
          }
          this.iframeIdToRemoteIdMap.delete(e),
            this.iframeRemoteIdToIdMap.delete(e);
        }
        getIdToRemoteIdMap(e) {
          let t = this.iframeIdToRemoteIdMap.get(e);
          return (
            t || ((t = new Map()), this.iframeIdToRemoteIdMap.set(e, t)), t
          );
        }
        getRemoteIdToIdMap(e) {
          let t = this.iframeRemoteIdToIdMap.get(e);
          return (
            t || ((t = new Map()), this.iframeRemoteIdToIdMap.set(e, t)), t
          );
        }
        constructor(e) {
          (this.generateIdFn = e),
            (this.iframeIdToRemoteIdMap = new WeakMap()),
            (this.iframeRemoteIdToIdMap = new WeakMap());
        }
      }
      class e8 {
        addIframe() {}
        addLoadListener() {}
        attachIframe() {}
        constructor() {
          (this.crossOriginIframeMirror = new e5(ee)),
            (this.crossOriginIframeRootIdMap = new WeakMap());
        }
      }
      class e6 {
        addIframe(e) {
          this.iframes.set(e, !0),
            e.contentWindow &&
              this.crossOriginIframeMap.set(e.contentWindow, e);
        }
        addLoadListener(e) {
          this.loadListener = e;
        }
        attachIframe(e, t) {
          var r;
          this.mutationCb({
            adds: [{ parentId: this.mirror.getId(e), nextId: null, node: t }],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0,
          }),
            null === (r = this.loadListener) || void 0 === r || r.call(this, e),
            e.contentDocument &&
              e.contentDocument.adoptedStyleSheets &&
              e.contentDocument.adoptedStyleSheets.length > 0 &&
              this.stylesheetManager.adoptStyleSheets(
                e.contentDocument.adoptedStyleSheets,
                this.mirror.getId(e.contentDocument)
              );
        }
        handleMessage(e) {
          if (
            "rrweb" !== e.data.type ||
            e.origin !== e.data.origin ||
            !e.source
          )
            return;
          let t = this.crossOriginIframeMap.get(e.source);
          if (!t) return;
          let r = this.transformCrossOriginEvent(t, e.data.event);
          r && this.wrappedEmit(r, e.data.isCheckout);
        }
        transformCrossOriginEvent(e, t) {
          var r;
          switch (t.type) {
            case eL.FullSnapshot: {
              this.crossOriginIframeMirror.reset(e),
                this.crossOriginIframeStyleMirror.reset(e),
                this.replaceIdOnNode(t.data.node, e);
              let r = t.data.node.id;
              return (
                this.crossOriginIframeRootIdMap.set(e, r),
                this.patchRootIdOnNode(t.data.node, r),
                {
                  timestamp: t.timestamp,
                  type: eL.IncrementalSnapshot,
                  data: {
                    source: eP.Mutation,
                    adds: [
                      {
                        parentId: this.mirror.getId(e),
                        nextId: null,
                        node: t.data.node,
                      },
                    ],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0,
                  },
                }
              );
            }
            case eL.Meta:
            case eL.Load:
            case eL.DomContentLoaded:
              break;
            case eL.Plugin:
              return t;
            case eL.Custom:
              return (
                this.replaceIds(t.data.payload, e, [
                  "id",
                  "parentId",
                  "previousId",
                  "nextId",
                ]),
                t
              );
            case eL.IncrementalSnapshot:
              switch (t.data.source) {
                case eP.Mutation:
                  return (
                    t.data.adds.forEach((t) => {
                      this.replaceIds(t, e, [
                        "parentId",
                        "nextId",
                        "previousId",
                      ]),
                        this.replaceIdOnNode(t.node, e);
                      let r = this.crossOriginIframeRootIdMap.get(e);
                      r && this.patchRootIdOnNode(t.node, r);
                    }),
                    t.data.removes.forEach((t) => {
                      this.replaceIds(t, e, ["parentId", "id"]);
                    }),
                    t.data.attributes.forEach((t) => {
                      this.replaceIds(t, e, ["id"]);
                    }),
                    t.data.texts.forEach((t) => {
                      this.replaceIds(t, e, ["id"]);
                    }),
                    t
                  );
                case eP.Drag:
                case eP.TouchMove:
                case eP.MouseMove:
                  return (
                    t.data.positions.forEach((t) => {
                      this.replaceIds(t, e, ["id"]);
                    }),
                    t
                  );
                case eP.ViewportResize:
                  return !1;
                case eP.MediaInteraction:
                case eP.MouseInteraction:
                case eP.Scroll:
                case eP.CanvasMutation:
                case eP.Input:
                  return this.replaceIds(t.data, e, ["id"]), t;
                case eP.StyleSheetRule:
                case eP.StyleDeclaration:
                  return (
                    this.replaceIds(t.data, e, ["id"]),
                    this.replaceStyleIds(t.data, e, ["styleId"]),
                    t
                  );
                case eP.Font:
                  return t;
                case eP.Selection:
                  return (
                    t.data.ranges.forEach((t) => {
                      this.replaceIds(t, e, ["start", "end"]);
                    }),
                    t
                  );
                case eP.AdoptedStyleSheet:
                  return (
                    this.replaceIds(t.data, e, ["id"]),
                    this.replaceStyleIds(t.data, e, ["styleIds"]),
                    null === (r = t.data.styles) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        this.replaceStyleIds(t, e, ["styleId"]);
                      }),
                    t
                  );
              }
          }
          return !1;
        }
        replace(e, t, r, n) {
          for (let i of n)
            (Array.isArray(t[i]) || "number" == typeof t[i]) &&
              (Array.isArray(t[i])
                ? (t[i] = e.getIds(r, t[i]))
                : (t[i] = e.getId(r, t[i])));
          return t;
        }
        replaceIds(e, t, r) {
          return this.replace(this.crossOriginIframeMirror, e, t, r);
        }
        replaceStyleIds(e, t, r) {
          return this.replace(this.crossOriginIframeStyleMirror, e, t, r);
        }
        replaceIdOnNode(e, t) {
          this.replaceIds(e, t, ["id", "rootId"]),
            "childNodes" in e &&
              e.childNodes.forEach((e) => {
                this.replaceIdOnNode(e, t);
              });
        }
        patchRootIdOnNode(e, t) {
          e.type === f.Document || e.rootId || (e.rootId = t),
            "childNodes" in e &&
              e.childNodes.forEach((e) => {
                this.patchRootIdOnNode(e, t);
              });
        }
        constructor(e) {
          (this.iframes = new WeakMap()),
            (this.crossOriginIframeMap = new WeakMap()),
            (this.crossOriginIframeMirror = new e5(ee)),
            (this.crossOriginIframeRootIdMap = new WeakMap()),
            (this.mutationCb = e.mutationCb),
            (this.wrappedEmit = e.wrappedEmit),
            (this.stylesheetManager = e.stylesheetManager),
            (this.recordCrossOriginIframes = e.recordCrossOriginIframes),
            (this.crossOriginIframeStyleMirror = new e5(
              this.stylesheetManager.styleMirror.generateId.bind(
                this.stylesheetManager.styleMirror
              )
            )),
            (this.mirror = e.mirror),
            this.recordCrossOriginIframes &&
              window.addEventListener("message", this.handleMessage.bind(this));
        }
      }
      class e4 {
        init() {}
        addShadowRoot() {}
        observeAttachShadow() {}
        reset() {}
      }
      class e7 {
        init() {
          this.reset(), this.patchAttachShadow(Element, document);
        }
        addShadowRoot(e, t) {
          if (!z(e) || this.shadowDoms.has(e)) return;
          this.shadowDoms.add(e);
          let r = eG(
            Object.assign(Object.assign({}, this.bypassOptions), {
              doc: t,
              mutationCb: this.mutationCb,
              mirror: this.mirror,
              shadowDomManager: this,
            }),
            e
          );
          this.restoreHandlers.push(() => r.disconnect()),
            this.restoreHandlers.push(
              eY(
                Object.assign(Object.assign({}, this.bypassOptions), {
                  scrollCb: this.scrollCb,
                  doc: e,
                  mirror: this.mirror,
                })
              )
            ),
            setTimeout(() => {
              e.adoptedStyleSheets &&
                e.adoptedStyleSheets.length > 0 &&
                this.bypassOptions.stylesheetManager.adoptStyleSheets(
                  e.adoptedStyleSheets,
                  this.mirror.getId(e.host)
                ),
                this.restoreHandlers.push(
                  e0(
                    {
                      mirror: this.mirror,
                      stylesheetManager: this.bypassOptions.stylesheetManager,
                    },
                    e
                  )
                );
            }, 0);
        }
        observeAttachShadow(e) {
          e.contentWindow &&
            e.contentDocument &&
            this.patchAttachShadow(e.contentWindow.Element, e.contentDocument);
        }
        patchAttachShadow(e, t) {
          let r = this;
          this.restoreHandlers.push(
            eb(e.prototype, "attachShadow", function (e) {
              return function (n) {
                let i = e.call(this, n);
                return (
                  this.shadowRoot &&
                    eA(this) &&
                    r.addShadowRoot(this.shadowRoot, t),
                  i
                );
              };
            })
          );
        }
        reset() {
          this.restoreHandlers.forEach((e) => {
            try {
              e();
            } catch (e) {}
          }),
            (this.restoreHandlers = []),
            (this.shadowDoms = new WeakSet());
        }
        constructor(e) {
          (this.shadowDoms = new WeakSet()),
            (this.restoreHandlers = []),
            (this.mutationCb = e.mutationCb),
            (this.scrollCb = e.scrollCb),
            (this.bypassOptions = e.bypassOptions),
            (this.mirror = e.mirror),
            this.init();
        }
      }
      class e9 {
        reset() {}
        freeze() {}
        unfreeze() {}
        lock() {}
        unlock() {}
      }
      class te {
        attachLinkElement(e, t) {
          "_cssText" in t.attributes &&
            this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{ id: t.id, attributes: t.attributes }],
            }),
            this.trackLinkElement(e);
        }
        trackLinkElement(e) {
          this.trackedLinkElements.has(e) ||
            (this.trackedLinkElements.add(e),
            this.trackStylesheetInLinkElement(e));
        }
        adoptStyleSheets(e, t) {
          if (0 === e.length) return;
          let r = { id: t, styleIds: [] },
            n = [];
          for (let t of e) {
            let e;
            this.styleMirror.has(t)
              ? (e = this.styleMirror.getId(t))
              : ((e = this.styleMirror.add(t)),
                n.push({
                  styleId: e,
                  rules: Array.from(t.rules || CSSRule, (e, t) => ({
                    rule: H(e),
                    index: t,
                  })),
                })),
              r.styleIds.push(e);
          }
          n.length > 0 && (r.styles = n), this.adoptedStyleSheetCb(r);
        }
        reset() {
          this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet());
        }
        trackStylesheetInLinkElement(e) {}
        constructor(e) {
          (this.trackedLinkElements = new WeakSet()),
            (this.styleMirror = new eD()),
            (this.mutationCb = e.mutationCb),
            (this.adoptedStyleSheetCb = e.adoptedStyleSheetCb);
        }
      }
      class tt {
        periodicallyClear() {
          requestAnimationFrame(() => {
            this.clear(), this.loop && this.periodicallyClear();
          });
        }
        inOtherBuffer(e, t) {
          let r = this.nodeMap.get(e);
          return r && Array.from(r).some((e) => e !== t);
        }
        add(e, t) {
          this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(t));
        }
        clear() {
          this.nodeMap = new WeakMap();
        }
        destroy() {
          this.loop = !1;
        }
        constructor() {
          (this.nodeMap = new WeakMap()),
            (this.loop = !0),
            this.periodicallyClear();
        }
      }
      function tr(e) {
        return (e.timestamp = ew()), e;
      }
      let tn = new q();
      function ti() {
        let e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            emit: r,
            checkoutEveryNms: n,
            checkoutEveryNth: i,
            blockClass: a = "rr-block",
            blockSelector: l = null,
            unblockSelector: c = null,
            ignoreClass: u = "rr-ignore",
            ignoreSelector: d = null,
            maskAllText: h = !1,
            maskTextClass: p = "rr-mask",
            unmaskTextClass: f = null,
            maskTextSelector: m = null,
            unmaskTextSelector: y = null,
            inlineStylesheet: g = !0,
            maskAllInputs: v,
            maskInputOptions: _,
            slimDOMOptions: S,
            maskAttributeFn: b,
            maskInputFn: w,
            maskTextFn: E,
            packFn: k,
            sampling: I = {},
            dataURLOptions: M = {},
            mousemoveWait: C,
            recordCanvas: R = !1,
            recordCrossOriginIframes: T = !1,
            recordAfter: x = "DOMContentLoaded" === t.recordAfter
              ? t.recordAfter
              : "load",
            userTriggeredOnInput: O = !1,
            collectFonts: D = !1,
            inlineImages: N = !1,
            plugins: A,
            keepIframeSrcFn: L = () => !1,
            ignoreCSSAttributes: P = new Set([]),
            errorHandler: B,
            onMutation: F,
            getCanvasManager: j,
          } = t;
        s = B;
        let U = !T || window.parent === window,
          z = !1;
        if (!U)
          try {
            window.parent.document && (z = !1);
          } catch (e) {
            z = !0;
          }
        if (U && !r) throw Error("emit function is required");
        void 0 !== C && void 0 === I.mousemove && (I.mousemove = C), tn.reset();
        let W =
            !0 === v
              ? {
                  color: !0,
                  date: !0,
                  "datetime-local": !0,
                  email: !0,
                  month: !0,
                  number: !0,
                  range: !0,
                  search: !0,
                  tel: !0,
                  text: !0,
                  time: !0,
                  url: !0,
                  week: !0,
                  textarea: !0,
                  select: !0,
                  radio: !0,
                  checkbox: !0,
                }
              : void 0 !== _
              ? _
              : {},
          H =
            !0 === S || "all" === S
              ? {
                  script: !0,
                  comment: !0,
                  headFavicon: !0,
                  headWhitespace: !0,
                  headMetaSocial: !0,
                  headMetaRobots: !0,
                  headMetaHttpEquiv: !0,
                  headMetaVerification: !0,
                  headMetaAuthorship: "all" === S,
                  headMetaDescKeywords: "all" === S,
                }
              : S || {};
        !(function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : window;
          if (
            ("NodeList" in e &&
              !e.NodeList.prototype.forEach &&
              (e.NodeList.prototype.forEach = Array.prototype.forEach),
            "DOMTokenList" in e &&
              !e.DOMTokenList.prototype.forEach &&
              (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
            !Node.prototype.contains)
          ) {
            var t = this;
            Node.prototype.contains = function () {
              for (var e = arguments.length, r = Array(e), n = 0; n < e; n++)
                r[n] = arguments[n];
              let i = r[0];
              if (!(0 in r)) throw TypeError("1 argument is required");
              do if (t === i) return !0;
              while ((i = i && i.parentNode));
              return !1;
            };
          }
        })();
        let K = 0,
          V = (e) => {
            for (let t of A || [])
              t.eventProcessor && (e = t.eventProcessor(e));
            return k && !z && (e = k(e)), e;
          },
          J = (t, s) => {
            var o;
            if (
              ((null === (o = eV[0]) || void 0 === o ? void 0 : o.isFrozen()) &&
                t.type !== eL.FullSnapshot &&
                !(
                  t.type === eL.IncrementalSnapshot &&
                  t.data.source === eP.Mutation
                ) &&
                eV.forEach((e) => e.unfreeze()),
              U)
            )
              null == r || r(V(t), s);
            else if (z) {
              let e = {
                type: "rrweb",
                event: V(t),
                origin: window.location.origin,
                isCheckout: s,
              };
              window.parent.postMessage(e, "*");
            }
            if (t.type === eL.FullSnapshot) (e = t), (K = 0);
            else if (t.type === eL.IncrementalSnapshot) {
              if (t.data.source === eP.Mutation && t.data.isAttachIframe)
                return;
              K++;
              let r = i && K >= i,
                s = n && t.timestamp - e.timestamp > n;
              (r || s) && er(!0);
            }
          },
          G = (e) => {
            J(
              tr({
                type: eL.IncrementalSnapshot,
                data: Object.assign({ source: eP.Mutation }, e),
              })
            );
          },
          Y = (e) =>
            J(
              tr({
                type: eL.IncrementalSnapshot,
                data: Object.assign({ source: eP.Scroll }, e),
              })
            ),
          X = (e) =>
            J(
              tr({
                type: eL.IncrementalSnapshot,
                data: Object.assign({ source: eP.CanvasMutation }, e),
              })
            ),
          $ = new te({
            mutationCb: G,
            adoptedStyleSheetCb: (e) =>
              J(
                tr({
                  type: eL.IncrementalSnapshot,
                  data: Object.assign({ source: eP.AdoptedStyleSheet }, e),
                })
              ),
          }),
          Q =
            "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ &&
            __RRWEB_EXCLUDE_IFRAME__
              ? new e8()
              : new e6({
                  mirror: tn,
                  mutationCb: G,
                  stylesheetManager: $,
                  recordCrossOriginIframes: T,
                  wrappedEmit: J,
                });
        for (let e of A || [])
          e.getMirror &&
            e.getMirror({
              nodeMirror: tn,
              crossOriginIframeMirror: Q.crossOriginIframeMirror,
              crossOriginIframeStyleMirror: Q.crossOriginIframeStyleMirror,
            });
        let Z = new tt(),
          ee = j
            ? j({
                recordCanvas: R,
                blockClass: a,
                blockSelector: l,
                unblockSelector: c,
                sampling: I.canvas,
                dataURLOptions: M,
              })
            : new e9(),
          et =
            "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ &&
            __RRWEB_EXCLUDE_SHADOW_DOM__
              ? new e4()
              : new e7({
                  mutationCb: G,
                  scrollCb: Y,
                  bypassOptions: {
                    onMutation: F,
                    blockClass: a,
                    blockSelector: l,
                    unblockSelector: c,
                    maskAllText: h,
                    maskTextClass: p,
                    unmaskTextClass: f,
                    maskTextSelector: m,
                    unmaskTextSelector: y,
                    inlineStylesheet: g,
                    maskInputOptions: W,
                    dataURLOptions: M,
                    maskAttributeFn: b,
                    maskTextFn: E,
                    maskInputFn: w,
                    recordCanvas: R,
                    inlineImages: N,
                    sampling: I,
                    slimDOMOptions: H,
                    iframeManager: Q,
                    stylesheetManager: $,
                    canvasManager: ee,
                    keepIframeSrcFn: L,
                    processedNodeManager: Z,
                  },
                  mirror: tn,
                }),
          er = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            J(
              tr({
                type: eL.Meta,
                data: { href: window.location.href, width: eI(), height: ek() },
              }),
              e
            ),
              $.reset(),
              et.init(),
              eV.forEach((e) => e.lock());
            let t = (function (e, t) {
              let {
                mirror: r = new q(),
                blockClass: n = "rr-block",
                blockSelector: i = null,
                unblockSelector: s = null,
                maskAllText: o = !1,
                maskTextClass: a = "rr-mask",
                unmaskTextClass: l = null,
                maskTextSelector: c = null,
                unmaskTextSelector: u = null,
                inlineStylesheet: d = !0,
                inlineImages: h = !1,
                recordCanvas: p = !1,
                maskAllInputs: f = !1,
                maskAttributeFn: m,
                maskTextFn: y,
                maskInputFn: g,
                slimDOM: v = !1,
                dataURLOptions: _,
                preserveWhiteSpace: S,
                onSerialize: b,
                onIframeLoad: w,
                iframeLoadTimeout: E,
                onStylesheetLoad: k,
                stylesheetLoadTimeout: I,
                keepIframeSrcFn: M = () => !1,
              } = t || {};
              return ey(e, {
                doc: e,
                mirror: r,
                blockClass: n,
                blockSelector: i,
                unblockSelector: s,
                maskAllText: o,
                maskTextClass: a,
                unmaskTextClass: l,
                maskTextSelector: c,
                unmaskTextSelector: u,
                skipChild: !1,
                inlineStylesheet: d,
                maskInputOptions:
                  !0 === f
                    ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0,
                      }
                    : !1 === f
                    ? {}
                    : f,
                maskAttributeFn: m,
                maskTextFn: y,
                maskInputFn: g,
                slimDOMOptions:
                  !0 === v || "all" === v
                    ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaDescKeywords: "all" === v,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaAuthorship: !0,
                        headMetaVerification: !0,
                      }
                    : !1 === v
                    ? {}
                    : v,
                dataURLOptions: _,
                inlineImages: h,
                recordCanvas: p,
                preserveWhiteSpace: S,
                onSerialize: b,
                onIframeLoad: w,
                iframeLoadTimeout: E,
                onStylesheetLoad: k,
                stylesheetLoadTimeout: I,
                keepIframeSrcFn: M,
                newlyAddedElement: !1,
              });
            })(document, {
              mirror: tn,
              blockClass: a,
              blockSelector: l,
              unblockSelector: c,
              maskAllText: h,
              maskTextClass: p,
              unmaskTextClass: f,
              maskTextSelector: m,
              unmaskTextSelector: y,
              inlineStylesheet: g,
              maskAllInputs: W,
              maskAttributeFn: b,
              maskInputFn: w,
              maskTextFn: E,
              slimDOM: H,
              dataURLOptions: M,
              recordCanvas: R,
              inlineImages: N,
              onSerialize: (e) => {
                eT(e, tn) && Q.addIframe(e),
                  ex(e, tn) && $.trackLinkElement(e),
                  eO(e) && et.addShadowRoot(e.shadowRoot, document);
              },
              onIframeLoad: (e, t) => {
                Q.attachIframe(e, t), et.observeAttachShadow(e);
              },
              onStylesheetLoad: (e, t) => {
                $.attachLinkElement(e, t);
              },
              keepIframeSrcFn: L,
            });
            if (!t) return console.warn("Failed to snapshot the document");
            J(
              tr({
                type: eL.FullSnapshot,
                data: { node: t, initialOffset: eE(window) },
              })
            ),
              eV.forEach((e) => e.unlock()),
              document.adoptedStyleSheets &&
                document.adoptedStyleSheets.length > 0 &&
                $.adoptStyleSheets(
                  document.adoptedStyleSheets,
                  tn.getId(document)
                );
          };
        o = er;
        try {
          let e = [],
            t = (e) => {
              var t;
              return eK(e1)(
                {
                  onMutation: F,
                  mutationCb: G,
                  mousemoveCb: (e, t) =>
                    J(
                      tr({
                        type: eL.IncrementalSnapshot,
                        data: { source: t, positions: e },
                      })
                    ),
                  mouseInteractionCb: (e) =>
                    J(
                      tr({
                        type: eL.IncrementalSnapshot,
                        data: Object.assign({ source: eP.MouseInteraction }, e),
                      })
                    ),
                  scrollCb: Y,
                  viewportResizeCb: (e) =>
                    J(
                      tr({
                        type: eL.IncrementalSnapshot,
                        data: Object.assign({ source: eP.ViewportResize }, e),
                      })
                    ),
                  inputCb: (e) =>
                    J(
                      tr({
                        type: eL.IncrementalSnapshot,
                        data: Object.assign({ source: eP.Input }, e),
                      })
                    ),
                  mediaInteractionCb: (e) =>
                    J(
                      tr({
                        type: eL.IncrementalSnapshot,
                        data: Object.assign({ source: eP.MediaInteraction }, e),
                      })
                    ),
                  styleSheetRuleCb: (e) =>
                    J(
                      tr({
                        type: eL.IncrementalSnapshot,
                        data: Object.assign({ source: eP.StyleSheetRule }, e),
                      })
                    ),
                  styleDeclarationCb: (e) =>
                    J(
                      tr({
                        type: eL.IncrementalSnapshot,
                        data: Object.assign({ source: eP.StyleDeclaration }, e),
                      })
                    ),
                  canvasMutationCb: X,
                  fontCb: (e) =>
                    J(
                      tr({
                        type: eL.IncrementalSnapshot,
                        data: Object.assign({ source: eP.Font }, e),
                      })
                    ),
                  selectionCb: (e) => {
                    J(
                      tr({
                        type: eL.IncrementalSnapshot,
                        data: Object.assign({ source: eP.Selection }, e),
                      })
                    );
                  },
                  customElementCb: (e) => {
                    J(
                      tr({
                        type: eL.IncrementalSnapshot,
                        data: Object.assign({ source: eP.CustomElement }, e),
                      })
                    );
                  },
                  blockClass: a,
                  ignoreClass: u,
                  ignoreSelector: d,
                  maskAllText: h,
                  maskTextClass: p,
                  unmaskTextClass: f,
                  maskTextSelector: m,
                  unmaskTextSelector: y,
                  maskInputOptions: W,
                  inlineStylesheet: g,
                  sampling: I,
                  recordCanvas: R,
                  inlineImages: N,
                  userTriggeredOnInput: O,
                  collectFonts: D,
                  doc: e,
                  maskAttributeFn: b,
                  maskInputFn: w,
                  maskTextFn: E,
                  keepIframeSrcFn: L,
                  blockSelector: l,
                  unblockSelector: c,
                  slimDOMOptions: H,
                  dataURLOptions: M,
                  mirror: tn,
                  iframeManager: Q,
                  stylesheetManager: $,
                  shadowDomManager: et,
                  processedNodeManager: Z,
                  canvasManager: ee,
                  ignoreCSSAttributes: P,
                  plugins:
                    (null ===
                      (t = null == A ? void 0 : A.filter((e) => e.observer)) ||
                    void 0 === t
                      ? void 0
                      : t.map((e) => ({
                          observer: e.observer,
                          options: e.options,
                          callback: (t) =>
                            J(
                              tr({
                                type: eL.Plugin,
                                data: { plugin: e.name, payload: t },
                              })
                            ),
                        }))) || [],
                },
                {}
              );
            };
          Q.addLoadListener((r) => {
            try {
              e.push(t(r.contentDocument));
            } catch (e) {
              console.warn(e);
            }
          });
          let r = () => {
            er(), e.push(t(document));
          };
          return (
            "interactive" === document.readyState ||
            "complete" === document.readyState
              ? r()
              : (e.push(
                  eg("DOMContentLoaded", () => {
                    J(tr({ type: eL.DomContentLoaded, data: {} })),
                      "DOMContentLoaded" === x && r();
                  })
                ),
                e.push(
                  eg(
                    "load",
                    () => {
                      J(tr({ type: eL.Load, data: {} })), "load" === x && r();
                    },
                    window
                  )
                )),
            () => {
              e.forEach((e) => e()), Z.destroy(), (o = void 0), (s = void 0);
            }
          );
        } catch (e) {
          console.warn(e);
        }
      }
      function ts(e) {
        return e > 9999999999 ? e : 1e3 * e;
      }
      function to(e) {
        return e > 9999999999 ? e / 1e3 : e;
      }
      function ta(e, t) {
        "sentry.transaction" !== t.category &&
          (["ui.click", "ui.input"].includes(t.category)
            ? e.triggerUserActivity()
            : e.checkAndHandleExpiredSession(),
          e.addUpdate(
            () => (
              e.throttledAddEvent({
                type: eL.Custom,
                timestamp: 1e3 * (t.timestamp || 0),
                data: { tag: "breadcrumb", payload: (0, w.Fv)(t, 10, 1e3) },
              }),
              "console" === t.category
            )
          ));
      }
      function tl(e) {
        return e.closest("button,a") || e;
      }
      function tc(e) {
        let t = tu(e);
        return t && t instanceof Element ? tl(t) : t;
      }
      function tu(e) {
        return "object" == typeof e && e && "target" in e ? e.target : e;
      }
      (ti.mirror = tn),
        (ti.takeFullSnapshot = function (e) {
          if (!o)
            throw Error("please take full snapshot after start recording");
          o(e);
        });
      class td {
        addListeners() {
          var e;
          let t =
            ((e = () => {
              this._lastMutation = tp();
            }),
            a ||
              ((a = []),
              (0, E.hl)(B, "open", function (e) {
                return function () {
                  for (
                    var t = arguments.length, r = Array(t), n = 0;
                    n < t;
                    n++
                  )
                    r[n] = arguments[n];
                  if (a)
                    try {
                      a.forEach((e) => e());
                    } catch (e) {}
                  return e.apply(B, r);
                };
              })),
            a.push(e),
            () => {
              let t = a ? a.indexOf(e) : -1;
              t > -1 && a.splice(t, 1);
            });
          this._teardown = () => {
            t(),
              (this._clicks = []),
              (this._lastMutation = 0),
              (this._lastScroll = 0);
          };
        }
        removeListeners() {
          this._teardown && this._teardown(),
            this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
        }
        handleClick(e, t) {
          var r;
          if (
            ((r = this._ignoreSelector),
            !th.includes(t.tagName) ||
              ("INPUT" === t.tagName &&
                !["submit", "button"].includes(t.getAttribute("type") || "")) ||
              ("A" === t.tagName &&
                (t.hasAttribute("download") ||
                  (t.hasAttribute("target") &&
                    "_self" !== t.getAttribute("target")))) ||
              (r && t.matches(r)) ||
              !(e.data && "number" == typeof e.data.nodeId && e.timestamp))
          )
            return;
          let n = {
            timestamp: to(e.timestamp),
            clickBreadcrumb: e,
            clickCount: 0,
            node: t,
          };
          this._clicks.some(
            (e) => e.node === n.node && 1 > Math.abs(e.timestamp - n.timestamp)
          ) ||
            (this._clicks.push(n),
            1 === this._clicks.length && this._scheduleCheckClicks());
        }
        registerMutation() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Date.now();
          this._lastMutation = to(e);
        }
        registerScroll() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Date.now();
          this._lastScroll = to(e);
        }
        registerClick(e) {
          let t = tl(e);
          this._handleMultiClick(t);
        }
        _handleMultiClick(e) {
          this._getClicks(e).forEach((e) => {
            e.clickCount++;
          });
        }
        _getClicks(e) {
          return this._clicks.filter((t) => t.node === e);
        }
        _checkClicks() {
          let e = [],
            t = tp();
          for (let r of (this._clicks.forEach((r) => {
            !r.mutationAfter &&
              this._lastMutation &&
              (r.mutationAfter =
                r.timestamp <= this._lastMutation
                  ? this._lastMutation - r.timestamp
                  : void 0),
              !r.scrollAfter &&
                this._lastScroll &&
                (r.scrollAfter =
                  r.timestamp <= this._lastScroll
                    ? this._lastScroll - r.timestamp
                    : void 0),
              r.timestamp + this._timeout <= t && e.push(r);
          }),
          e)) {
            let e = this._clicks.indexOf(r);
            e > -1 && (this._generateBreadcrumbs(r), this._clicks.splice(e, 1));
          }
          this._clicks.length && this._scheduleCheckClicks();
        }
        _generateBreadcrumbs(e) {
          let t = this._replay,
            r = e.scrollAfter && e.scrollAfter <= this._scollTimeout,
            n = e.mutationAfter && e.mutationAfter <= this._threshold,
            { clickCount: i, clickBreadcrumb: s } = e;
          if (!r && !n) {
            let r =
                1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout),
              n = r < 1e3 * this._timeout ? "mutation" : "timeout",
              o = {
                type: "default",
                message: s.message,
                timestamp: s.timestamp,
                category: "ui.slowClickDetected",
                data: {
                  ...s.data,
                  url: B.location.href,
                  route: t.getCurrentRoute(),
                  timeAfterClickMs: r,
                  endReason: n,
                  clickCount: i || 1,
                },
              };
            this._addBreadcrumbEvent(t, o);
            return;
          }
          if (i > 1) {
            let e = {
              type: "default",
              message: s.message,
              timestamp: s.timestamp,
              category: "ui.multiClick",
              data: {
                ...s.data,
                url: B.location.href,
                route: t.getCurrentRoute(),
                clickCount: i,
                metric: !0,
              },
            };
            this._addBreadcrumbEvent(t, e);
          }
        }
        _scheduleCheckClicks() {
          this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
            (this._checkClickTimeout = setTimeout(
              () => this._checkClicks(),
              1e3
            ));
        }
        constructor(e, t, r = ta) {
          (this._lastMutation = 0),
            (this._lastScroll = 0),
            (this._clicks = []),
            (this._timeout = t.timeout / 1e3),
            (this._threshold = t.threshold / 1e3),
            (this._scollTimeout = t.scrollTimeout / 1e3),
            (this._replay = e),
            (this._ignoreSelector = t.ignoreSelector),
            (this._addBreadcrumbEvent = r);
        }
      }
      let th = ["A", "BUTTON", "INPUT"];
      function tp() {
        return Date.now() / 1e3;
      }
      function tf(e) {
        return { timestamp: Date.now() / 1e3, type: "default", ...e };
      }
      ((p = m || (m = {}))[(p.Document = 0)] = "Document"),
        (p[(p.DocumentType = 1)] = "DocumentType"),
        (p[(p.Element = 2)] = "Element"),
        (p[(p.Text = 3)] = "Text"),
        (p[(p.CDATA = 4)] = "CDATA"),
        (p[(p.Comment = 5)] = "Comment");
      let tm = new Set([
          "id",
          "class",
          "aria-label",
          "role",
          "name",
          "alt",
          "title",
          "data-test-id",
          "data-testid",
          "disabled",
          "aria-disabled",
        ]),
        ty = (e) => (t) => {
          if (!e.isEnabled()) return;
          let r = (function (e) {
            let { target: t, message: r } = (function (e) {
              let t;
              let r = "click" === e.name,
                n = null;
              try {
                (n = r ? tc(e.event) : tu(e.event)),
                  (t = (0, k.Rt)(n, { maxStringLength: 200 }) || "<unknown>");
              } catch (e) {
                t = "<unknown>";
              }
              return { target: n, message: t };
            })(e);
            return tf({ category: "ui.".concat(e.name), ...tg(t, r) });
          })(t);
          if (!r) return;
          let n = "click" === t.name,
            i = n ? t.event : void 0;
          n &&
            e.clickDetector &&
            i &&
            i.target &&
            !i.altKey &&
            !i.metaKey &&
            !i.ctrlKey &&
            !i.shiftKey &&
            (function (e, t, r) {
              e.handleClick(t, r);
            })(e.clickDetector, r, tc(t.event)),
            ta(e, r);
        };
      function tg(e, t) {
        let r = ti.mirror.getId(e),
          n = r && ti.mirror.getNode(r),
          i = n && ti.mirror.getMeta(n),
          s = i && i.type === m.Element ? i : null;
        return {
          message: t,
          data: s
            ? {
                nodeId: r,
                node: {
                  id: r,
                  tagName: s.tagName,
                  textContent: Array.from(s.childNodes)
                    .map((e) => e.type === m.Text && e.textContent)
                    .filter(Boolean)
                    .map((e) => e.trim())
                    .join(""),
                  attributes: (function (e) {
                    let t = {};
                    for (let r in e)
                      if (tm.has(r)) {
                        let n = r;
                        ("data-testid" === r || "data-test-id" === r) &&
                          (n = "testId"),
                          (t[n] = e[r]);
                      }
                    return t;
                  })(s.attributes),
                },
              }
            : {},
        };
      }
      let tv = {
        resource: function (e) {
          let {
            entryType: t,
            initiatorType: r,
            name: n,
            responseEnd: i,
            startTime: s,
            decodedBodySize: o,
            encodedBodySize: a,
            responseStatus: l,
            transferSize: c,
          } = e;
          return ["fetch", "xmlhttprequest"].includes(r)
            ? null
            : {
                type: "".concat(t, ".").concat(r),
                start: tS(s),
                end: tS(i),
                name: n,
                data: {
                  size: c,
                  statusCode: l,
                  decodedBodySize: o,
                  encodedBodySize: a,
                },
              };
        },
        paint: function (e) {
          let { duration: t, entryType: r, name: n, startTime: i } = e,
            s = tS(i);
          return { type: r, name: n, start: s, end: s + t, data: void 0 };
        },
        navigation: function (e) {
          let {
            entryType: t,
            name: r,
            decodedBodySize: n,
            duration: i,
            domComplete: s,
            encodedBodySize: o,
            domContentLoadedEventStart: a,
            domContentLoadedEventEnd: l,
            domInteractive: c,
            loadEventStart: u,
            loadEventEnd: d,
            redirectCount: h,
            startTime: p,
            transferSize: f,
            type: m,
          } = e;
          return 0 === i
            ? null
            : {
                type: "".concat(t, ".").concat(m),
                start: tS(p),
                end: tS(s),
                name: r,
                data: {
                  size: f,
                  decodedBodySize: n,
                  encodedBodySize: o,
                  duration: i,
                  domInteractive: c,
                  domContentLoadedEventStart: a,
                  domContentLoadedEventEnd: l,
                  loadEventStart: u,
                  loadEventEnd: d,
                  domComplete: s,
                  redirectCount: h,
                },
              };
        },
      };
      function t_(e) {
        return tv[e.entryType] ? tv[e.entryType](e) : null;
      }
      function tS(e) {
        return ((I.Z1 || B.performance.timeOrigin) + e) / 1e3;
      }
      class tb extends Error {
        constructor() {
          super("Event buffer exceeded maximum size of ".concat(2e7, "."));
        }
      }
      class tw {
        get hasEvents() {
          return this.events.length > 0;
        }
        get type() {
          return "sync";
        }
        destroy() {
          this.events = [];
        }
        async addEvent(e) {
          let t = JSON.stringify(e).length;
          if (((this._totalSize += t), this._totalSize > 2e7)) throw new tb();
          this.events.push(e);
        }
        finish() {
          return new Promise((e) => {
            let t = this.events;
            this.clear(), e(JSON.stringify(t));
          });
        }
        clear() {
          (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
        }
        getEarliestTimestamp() {
          let e = this.events.map((e) => e.timestamp).sort()[0];
          return e ? ts(e) : null;
        }
        constructor() {
          (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
        }
      }
      class tE {
        ensureReady() {
          return (
            this._ensureReadyPromise ||
              (this._ensureReadyPromise = new Promise((e, t) => {
                this._worker.addEventListener(
                  "message",
                  (r) => {
                    let { data: n } = r;
                    n.success ? e() : t();
                  },
                  { once: !0 }
                ),
                  this._worker.addEventListener(
                    "error",
                    (e) => {
                      t(e);
                    },
                    { once: !0 }
                  );
              })),
            this._ensureReadyPromise
          );
        }
        destroy() {
          this._worker.terminate();
        }
        postMessage(e, t) {
          let r = this._getAndIncrementId();
          return new Promise((n, i) => {
            let s = (t) => {
              let { data: o } = t;
              if (o.method === e && o.id === r) {
                if (
                  (this._worker.removeEventListener("message", s), !o.success)
                ) {
                  i(Error("Error in compression worker"));
                  return;
                }
                n(o.response);
              }
            };
            this._worker.addEventListener("message", s),
              this._worker.postMessage({ id: r, method: e, arg: t });
          });
        }
        _getAndIncrementId() {
          return this._id++;
        }
        constructor(e) {
          (this._worker = e), (this._id = 0);
        }
      }
      class tk {
        get hasEvents() {
          return !!this._earliestTimestamp;
        }
        get type() {
          return "worker";
        }
        ensureReady() {
          return this._worker.ensureReady();
        }
        destroy() {
          this._worker.destroy();
        }
        addEvent(e) {
          let t = ts(e.timestamp);
          (!this._earliestTimestamp || t < this._earliestTimestamp) &&
            (this._earliestTimestamp = t);
          let r = JSON.stringify(e);
          return ((this._totalSize += r.length), this._totalSize > 2e7)
            ? Promise.reject(new tb())
            : this._sendEventToWorker(r);
        }
        finish() {
          return this._finishRequest();
        }
        clear() {
          (this._earliestTimestamp = null),
            (this._totalSize = 0),
            (this.hasCheckout = !1),
            this._worker.postMessage("clear");
        }
        getEarliestTimestamp() {
          return this._earliestTimestamp;
        }
        _sendEventToWorker(e) {
          return this._worker.postMessage("addEvent", e);
        }
        async _finishRequest() {
          let e = await this._worker.postMessage("finish");
          return (this._earliestTimestamp = null), (this._totalSize = 0), e;
        }
        constructor(e) {
          (this._worker = new tE(e)),
            (this._earliestTimestamp = null),
            (this._totalSize = 0),
            (this.hasCheckout = !1);
        }
      }
      class tI {
        get type() {
          return this._used.type;
        }
        get hasEvents() {
          return this._used.hasEvents;
        }
        get hasCheckout() {
          return this._used.hasCheckout;
        }
        set hasCheckout(e) {
          this._used.hasCheckout = e;
        }
        destroy() {
          this._fallback.destroy(), this._compression.destroy();
        }
        clear() {
          return this._used.clear();
        }
        getEarliestTimestamp() {
          return this._used.getEarliestTimestamp();
        }
        addEvent(e) {
          return this._used.addEvent(e);
        }
        async finish() {
          return await this.ensureWorkerIsLoaded(), this._used.finish();
        }
        ensureWorkerIsLoaded() {
          return this._ensureWorkerIsLoadedPromise;
        }
        async _ensureWorkerIsLoaded() {
          try {
            await this._compression.ensureReady();
          } catch (e) {
            return;
          }
          await this._switchToCompressionWorker();
        }
        async _switchToCompressionWorker() {
          let { events: e, hasCheckout: t } = this._fallback,
            r = [];
          for (let t of e) r.push(this._compression.addEvent(t));
          (this._compression.hasCheckout = t), (this._used = this._compression);
          try {
            await Promise.all(r);
          } catch (e) {}
        }
        constructor(e) {
          (this._fallback = new tw()),
            (this._compression = new tk(e)),
            (this._used = this._fallback),
            (this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded());
        }
      }
      function tM() {
        try {
          return "sessionStorage" in B && !!B.sessionStorage;
        } catch (e) {
          return !1;
        }
      }
      function tC(e) {
        return void 0 !== e && Math.random() < e;
      }
      function tR(e) {
        let t = Date.now(),
          r = e.id || (0, C.DM)(),
          n = e.started || t,
          i = e.lastActivity || t;
        return {
          id: r,
          started: n,
          lastActivity: i,
          segmentId: e.segmentId || 0,
          sampled: e.sampled,
          previousSessionId: e.previousSessionId,
        };
      }
      function tT(e) {
        if (tM())
          try {
            B.sessionStorage.setItem(F, JSON.stringify(e));
          } catch (e) {}
      }
      function tx(e) {
        let {
            sessionSampleRate: t,
            allowBuffering: r,
            stickySession: n = !1,
          } = e,
          { previousSessionId: i } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s = tR({
            sampled: tC(t) ? "session" : !!r && "buffer",
            previousSessionId: i,
          });
        return n && tT(s), s;
      }
      function tO(e, t) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : +new Date();
        return null === e || void 0 === t || t < 0 || (0 !== t && e + t <= r);
      }
      function tD(e, t) {
        let {
          maxReplayDuration: r,
          sessionIdleExpire: n,
          targetTime: i = Date.now(),
        } = t;
        return tO(e.started, r, i) || tO(e.lastActivity, n, i);
      }
      function tN(e, t) {
        let { sessionIdleExpire: r, maxReplayDuration: n } = t;
        return (
          !!tD(e, { sessionIdleExpire: r, maxReplayDuration: n }) &&
          ("buffer" !== e.sampled || 0 !== e.segmentId)
        );
      }
      function tA(e, t) {
        let {
            traceInternals: r,
            sessionIdleExpire: n,
            maxReplayDuration: i,
            previousSessionId: s,
          } = e,
          o =
            t.stickySession &&
            (function (e) {
              if (!tM()) return null;
              try {
                let e = B.sessionStorage.getItem(F);
                if (!e) return null;
                let t = JSON.parse(e);
                return tR(t);
              } catch (e) {
                return null;
              }
            })(0);
        return o
          ? tN(o, { sessionIdleExpire: n, maxReplayDuration: i })
            ? tx(t, { previousSessionId: o.id })
            : o
          : tx(t, { previousSessionId: s });
      }
      function tL(e, t, r) {
        return !!tB(e, t) && (tP(e, t, r), !0);
      }
      async function tP(e, t, r) {
        if (!e.eventBuffer) return null;
        try {
          r && "buffer" === e.recordingMode && e.eventBuffer.clear(),
            r && (e.eventBuffer.hasCheckout = !0);
          let n = e.getOptions(),
            i = (function (e, t) {
              try {
                if ("function" == typeof t && e.type === eL.Custom) return t(e);
              } catch (e) {
                return null;
              }
              return e;
            })(t, n.beforeAddRecordingEvent);
          if (!i) return;
          return await e.eventBuffer.addEvent(i);
        } catch (r) {
          await e.stop({
            reason: r && r instanceof tb ? "addEventSizeExceeded" : "addEvent",
          });
          let t = (0, g.s3)();
          t && t.recordDroppedEvent("internal_sdk_error", "replay");
        }
      }
      function tB(e, t) {
        if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
        let r = ts(t.timestamp);
        return (
          !(r + e.timeouts.sessionIdlePause < Date.now()) &&
          (!(
            r >
            e.getContext().initialTimestamp + e.getOptions().maxReplayDuration
          ) ||
            (e.getOptions()._experiments.traceInternals, !1))
        );
      }
      function tF(e) {
        return "transaction" === e.type;
      }
      function tj(e) {
        return "feedback" === e.type;
      }
      function tU(e) {
        let t = (function () {
          let e = (0, g.s3)();
          if (!e) return !1;
          let t = e.getTransport();
          return !!t && (t.send.__sentry__baseTransport__ || !1);
        })();
        return (r, n) => {
          if (!e.isEnabled() || (r.type && !tF(r))) return;
          let i = n && n.statusCode;
          if (!t || (i && !(i < 200) && !(i >= 300))) {
            if (tF(r)) {
              !(function (e, t) {
                let r = e.getContext();
                t.contexts &&
                  t.contexts.trace &&
                  t.contexts.trace.trace_id &&
                  r.traceIds.size < 100 &&
                  r.traceIds.add(t.contexts.trace.trace_id);
              })(e, r);
              return;
            }
            !(function (e, t) {
              let r = e.getContext();
              if (
                (t.event_id &&
                  r.errorIds.size < 100 &&
                  r.errorIds.add(t.event_id),
                "buffer" !== e.recordingMode || !t.tags || !t.tags.replayId)
              )
                return;
              let { beforeErrorSampling: n } = e.getOptions();
              ("function" != typeof n || n(t)) &&
                setTimeout(() => {
                  e.sendBufferedReplayOrFlush();
                });
            })(e, r);
          }
        };
      }
      function tz(e, t) {
        return t.map((t) => {
          let { type: r, start: n, end: i, name: s, data: o } = t,
            a = e.throttledAddEvent({
              type: eL.Custom,
              timestamp: n,
              data: {
                tag: "performanceSpan",
                payload: {
                  op: r,
                  description: s,
                  startTimestamp: n,
                  endTimestamp: i,
                  data: o,
                },
              },
            });
          return "string" == typeof a ? Promise.resolve(null) : a;
        });
      }
      function tW(e, t) {
        var r;
        e.isEnabled() &&
          null !== t &&
          ((r = t.name),
          (0, v.W)(r, (0, y.Gd)()) || e.addUpdate(() => (tz(e, [t]), !0)));
      }
      function tH(e, t) {
        if (e)
          try {
            if ("string" == typeof e) return t.encode(e).length;
            if (e instanceof URLSearchParams)
              return t.encode(e.toString()).length;
            if (e instanceof FormData) {
              let r = t$(e);
              return t.encode(r).length;
            }
            if (e instanceof Blob) return e.size;
            if (e instanceof ArrayBuffer) return e.byteLength;
          } catch (e) {}
      }
      function tq(e) {
        if (!e) return;
        let t = parseInt(e, 10);
        return isNaN(t) ? void 0 : t;
      }
      function tK(e) {
        try {
          if ("string" == typeof e) return [e];
          if (e instanceof URLSearchParams) return [e.toString()];
          if (e instanceof FormData) return [t$(e)];
          if (!e) return [void 0];
        } catch (e) {
          return [void 0, "BODY_PARSE_ERROR"];
        }
        return [void 0, "UNPARSEABLE_BODY_TYPE"];
      }
      function tV(e, t) {
        if (!e) return { headers: {}, size: void 0, _meta: { warnings: [t] } };
        let r = { ...e._meta },
          n = r.warnings || [];
        return (r.warnings = [...n, t]), (e._meta = r), e;
      }
      function tJ(e, t) {
        if (!t) return null;
        let {
          startTimestamp: r,
          endTimestamp: n,
          url: i,
          method: s,
          statusCode: o,
          request: a,
          response: l,
        } = t;
        return {
          type: e,
          start: r / 1e3,
          end: n / 1e3,
          name: i,
          data: (0, E.Jr)({
            method: s,
            statusCode: o,
            request: a,
            response: l,
          }),
        };
      }
      function tG(e) {
        return { headers: {}, size: e, _meta: { warnings: ["URL_SKIPPED"] } };
      }
      function tY(e, t, r) {
        if (!t && 0 === Object.keys(e).length) return;
        if (!t) return { headers: e };
        if (!r) return { headers: e, size: t };
        let n = { headers: e, size: t },
          { body: i, warnings: s } = (function (e) {
            if (!e || "string" != typeof e) return { body: e };
            let t = e.length > 15e4,
              r = (function (e) {
                let t = e[0],
                  r = e[e.length - 1];
                return ("[" === t && "]" === r) || ("{" === t && "}" === r);
              })(e);
            if (t) {
              let t = e.slice(0, 15e4);
              return r
                ? { body: t, warnings: ["MAYBE_JSON_TRUNCATED"] }
                : { body: "".concat(t, "…"), warnings: ["TEXT_TRUNCATED"] };
            }
            if (r)
              try {
                return { body: JSON.parse(e) };
              } catch (e) {}
            return { body: e };
          })(r);
        return (
          (n.body = i), s && s.length > 0 && (n._meta = { warnings: s }), n
        );
      }
      function tX(e, t) {
        return Object.keys(e).reduce((r, n) => {
          let i = n.toLowerCase();
          return t.includes(i) && e[n] && (r[i] = e[n]), r;
        }, {});
      }
      function t$(e) {
        return new URLSearchParams(e).toString();
      }
      function tQ(e, t) {
        let r = (function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : B.document.baseURI;
          if (
            e.startsWith("http://") ||
            e.startsWith("https://") ||
            e.startsWith(B.location.origin)
          )
            return e;
          let r = new URL(e, t);
          if (r.origin !== new URL(t).origin) return e;
          let n = r.href;
          return !e.endsWith("/") && n.endsWith("/") ? n.slice(0, -1) : n;
        })(e);
        return (0, T.U0)(r, t);
      }
      async function tZ(e, t, r) {
        try {
          let n = await t0(e, t, r),
            i = tJ("resource.fetch", n);
          tW(r.replay, i);
        } catch (e) {}
      }
      async function t0(e, t, r) {
        let n = Date.now(),
          { startTimestamp: i = n, endTimestamp: s = n } = t,
          {
            url: o,
            method: a,
            status_code: l = 0,
            request_body_size: c,
            response_body_size: u,
          } = e.data,
          d =
            tQ(o, r.networkDetailAllowUrls) && !tQ(o, r.networkDetailDenyUrls);
        return {
          startTimestamp: i,
          endTimestamp: s,
          url: o,
          method: a,
          statusCode: l,
          request: d
            ? (function (e, t, r) {
                let { networkCaptureBodies: n, networkRequestHeaders: i } = e,
                  s = t
                    ? 1 === t.length && "string" != typeof t[0]
                      ? t8(t[0], i)
                      : 2 === t.length
                      ? t8(t[1], i)
                      : {}
                    : {};
                if (!n) return tY(s, r, void 0);
                let [o, a] = tK(t3(t)),
                  l = tY(s, r, o);
                return a ? tV(l, a) : l;
              })(r, t.input, c)
            : tG(c),
          response: await t1(d, r, t.response, u),
        };
      }
      async function t1(e, t, r, n) {
        let {
          networkCaptureBodies: i,
          textEncoder: s,
          networkResponseHeaders: o,
        } = t;
        if (!e && void 0 !== n) return tG(n);
        let a = r ? t5(r.headers, o) : {};
        if (!r || (!i && void 0 !== n)) return tY(a, n, void 0);
        let [l, c] = await t2(r),
          u = (function (e, t) {
            let {
              networkCaptureBodies: r,
              textEncoder: n,
              responseBodySize: i,
              captureDetails: s,
              headers: o,
            } = t;
            try {
              let t = e && e.length && void 0 === i ? tH(e, n) : i;
              if (!s) return tG(t);
              if (r) return tY(o, t, e);
              return tY(o, t, void 0);
            } catch (e) {
              return tY(o, i, void 0);
            }
          })(l, {
            networkCaptureBodies: i,
            textEncoder: s,
            responseBodySize: n,
            captureDetails: e,
            headers: a,
          });
        return c ? tV(u, c) : u;
      }
      async function t2(e) {
        let t = (function (e) {
          try {
            return e.clone();
          } catch (e) {}
        })(e);
        if (!t) return [void 0, "BODY_PARSE_ERROR"];
        try {
          return [
            await new Promise((e, r) => {
              let n = setTimeout(
                () => r(Error("Timeout while trying to read response body")),
                500
              );
              t6(t)
                .then(
                  (t) => e(t),
                  (e) => r(e)
                )
                .finally(() => clearTimeout(n));
            }),
          ];
        } catch (e) {
          return [void 0, "BODY_PARSE_ERROR"];
        }
      }
      function t3() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (2 === e.length && "object" == typeof e[1]) return e[1].body;
      }
      function t5(e, t) {
        let r = {};
        return (
          t.forEach((t) => {
            e.get(t) && (r[t] = e.get(t));
          }),
          r
        );
      }
      function t8(e, t) {
        if (!e) return {};
        let r = e.headers;
        return r
          ? r instanceof Headers
            ? t5(r, t)
            : Array.isArray(r)
            ? {}
            : tX(r, t)
          : {};
      }
      async function t6(e) {
        return await e.text();
      }
      async function t4(e, t, r) {
        try {
          let n = (function (e, t, r) {
              let n = Date.now(),
                {
                  startTimestamp: i = n,
                  endTimestamp: s = n,
                  input: o,
                  xhr: a,
                } = t,
                {
                  url: l,
                  method: c,
                  status_code: u = 0,
                  request_body_size: d,
                  response_body_size: h,
                } = e.data;
              if (!l) return null;
              if (
                !a ||
                !tQ(l, r.networkDetailAllowUrls) ||
                tQ(l, r.networkDetailDenyUrls)
              ) {
                let e = tG(d);
                return {
                  startTimestamp: i,
                  endTimestamp: s,
                  url: l,
                  method: c,
                  statusCode: u,
                  request: e,
                  response: tG(h),
                };
              }
              let p = a[R.xU],
                f = p ? tX(p.request_headers, r.networkRequestHeaders) : {},
                m = tX(
                  (function (e) {
                    let t = e.getAllResponseHeaders();
                    return t
                      ? t.split("\r\n").reduce((e, t) => {
                          let [r, n] = t.split(": ");
                          return (e[r.toLowerCase()] = n), e;
                        }, {})
                      : {};
                  })(a),
                  r.networkResponseHeaders
                ),
                [y, g] = r.networkCaptureBodies ? tK(o) : [void 0],
                [v, _] = r.networkCaptureBodies
                  ? (function (e) {
                      let t = [];
                      try {
                        return [e.responseText];
                      } catch (e) {
                        t.push(e);
                      }
                      try {
                        return (function (e, t) {
                          try {
                            if ("string" == typeof e) return [e];
                            if (e instanceof Document)
                              return [e.body.outerHTML];
                            if ("json" === t && e && "object" == typeof e)
                              return [JSON.stringify(e)];
                            if (!e) return [void 0];
                          } catch (e) {
                            return [void 0, "BODY_PARSE_ERROR"];
                          }
                          return [void 0, "UNPARSEABLE_BODY_TYPE"];
                        })(e.response, e.responseType);
                      } catch (e) {
                        t.push(e);
                      }
                      return [void 0];
                    })(a)
                  : [void 0],
                S = tY(f, d, y),
                b = tY(m, h, v);
              return {
                startTimestamp: i,
                endTimestamp: s,
                url: l,
                method: c,
                statusCode: u,
                request: g ? tV(S, g) : S,
                response: _ ? tV(b, _) : b,
              };
            })(e, t, r),
            i = tJ("resource.xhr", n);
          tW(r.replay, i);
        } catch (e) {}
      }
      let t7 = null,
        t9 = (e) => (t) => {
          if (!e.isEnabled()) return;
          let r = (function (e) {
            let t = e.getLastBreadcrumb && e.getLastBreadcrumb();
            return t7 !== t && t
              ? ((t7 = t),
                !t.category ||
                  [
                    "fetch",
                    "xhr",
                    "sentry.event",
                    "sentry.transaction",
                  ].includes(t.category) ||
                  t.category.startsWith("ui."))
                ? null
                : "console" === t.category
                ? (function (e) {
                    let t = e.data && e.data.arguments;
                    if (!Array.isArray(t) || 0 === t.length) return tf(e);
                    let r = !1,
                      n = t.map((e) => {
                        if (!e) return e;
                        if ("string" == typeof e)
                          return e.length > 5e3
                            ? ((r = !0), "".concat(e.slice(0, 5e3), "…"))
                            : e;
                        if ("object" == typeof e)
                          try {
                            let t = (0, w.Fv)(e, 7);
                            if (JSON.stringify(t).length > 5e3)
                              return (
                                (r = !0),
                                "".concat(
                                  JSON.stringify(t, null, 2).slice(0, 5e3),
                                  "…"
                                )
                              );
                            return t;
                          } catch (e) {}
                        return e;
                      });
                    return tf({
                      ...e,
                      data: {
                        ...e.data,
                        arguments: n,
                        ...(r
                          ? { _meta: { warnings: ["CONSOLE_ARG_TRUNCATED"] } }
                          : {}),
                      },
                    });
                  })(t)
                : tf(t)
              : null;
          })(t);
          r && ta(e, r);
        };
      async function re(e) {
        try {
          return Promise.all(
            tz(e, [
              (function (e) {
                let {
                    jsHeapSizeLimit: t,
                    totalJSHeapSize: r,
                    usedJSHeapSize: n,
                  } = e,
                  i = Date.now() / 1e3;
                return {
                  type: "memory",
                  name: "memory",
                  start: i,
                  end: i,
                  data: {
                    memory: {
                      jsHeapSizeLimit: t,
                      totalJSHeapSize: r,
                      usedJSHeapSize: n,
                    },
                  },
                };
              })(B.performance.memory),
            ])
          );
        } catch (e) {
          return [];
        }
      }
      async function rt(e) {
        let { client: t, scope: r, replayId: n, event: i } = e,
          s = {
            event_id: n,
            integrations:
              "object" != typeof t._integrations ||
              null === t._integrations ||
              Array.isArray(t._integrations)
                ? void 0
                : Object.keys(t._integrations),
          };
        t.emit && t.emit("preprocessEvent", i, s);
        let o = await (0, S.R)(t.getOptions(), i, s, r, t);
        if (!o) return null;
        o.platform = o.platform || "javascript";
        let a = t.getSdkMetadata && t.getSdkMetadata(),
          { name: l, version: c } = (a && a.sdk) || {};
        return (
          (o.sdk = {
            ...o.sdk,
            name: l || "sentry.javascript.unknown",
            version: c || "0.0.0",
          }),
          o
        );
      }
      async function rr(e) {
        var t;
        let r,
          {
            recordingData: n,
            replayId: i,
            segmentId: s,
            eventContext: o,
            timestamp: a,
            session: l,
          } = e,
          c = (function (e) {
            let t,
              { recordingData: r, headers: n } = e,
              i = "".concat(JSON.stringify(n), "\n");
            if ("string" == typeof r) t = "".concat(i).concat(r);
            else {
              let e = new TextEncoder().encode(i);
              (t = new Uint8Array(e.length + r.length)).set(e),
                t.set(r, e.length);
            }
            return t;
          })({ recordingData: n, headers: { segment_id: s } }),
          { urls: u, errorIds: d, traceIds: h, initialTimestamp: p } = o,
          f = (0, y.Gd)(),
          m = f.getClient(),
          g = f.getScope(),
          v = m && m.getTransport(),
          _ = m && m.getDsn();
        if (!m || !v || !_ || !l.sampled) return;
        let S = {
            type: "replay_event",
            replay_start_timestamp: p / 1e3,
            timestamp: a / 1e3,
            error_ids: d,
            trace_ids: h,
            urls: u,
            replay_id: i,
            segment_id: s,
            replay_type: l.sampled,
          },
          b = await rt({ scope: g, client: m, replayId: i, event: S });
        if (!b) {
          m.recordDroppedEvent("event_processor", "replay", S);
          return;
        }
        delete b.sdkProcessingMetadata;
        let w =
          ((t = m.getOptions().tunnel),
          (0, N.Jd)((0, N.Cd)(b, (0, N.HY)(b), t, _), [
            [{ type: "replay_event" }, b],
            [
              {
                type: "replay_recording",
                length:
                  "string" == typeof c
                    ? new TextEncoder().encode(c).length
                    : c.length,
              },
              c,
            ],
          ]));
        try {
          r = await v.send(w);
        } catch (t) {
          let e = Error(j);
          try {
            e.cause = t;
          } catch (e) {}
          throw e;
        }
        if (!r) return r;
        if (
          "number" == typeof r.statusCode &&
          (r.statusCode < 200 || r.statusCode >= 300)
        )
          throw new rn(r.statusCode);
        let E = (0, A.WG)({}, r);
        if ((0, A.Q)(E, "replay")) throw new ri(E);
        return r;
      }
      class rn extends Error {
        constructor(e) {
          super("Transport returned status code ".concat(e));
        }
      }
      class ri extends Error {
        constructor(e) {
          super("Rate limit hit"), (this.rateLimits = e);
        }
      }
      async function rs(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { count: 0, interval: 5e3 },
          { recordingData: r, options: n } = e;
        if (r.length)
          try {
            return await rr(e), !0;
          } catch (r) {
            if (r instanceof rn || r instanceof ri) throw r;
            if (((0, g.v)("Replays", { _retryCount: t.count }), t.count >= 3)) {
              let e = Error("".concat(j, " - max retries exceeded"));
              try {
                e.cause = r;
              } catch (e) {}
              throw e;
            }
            return (
              (t.interval *= ++t.count),
              new Promise((r, n) => {
                setTimeout(async () => {
                  try {
                    await rs(e, t), r(!0);
                  } catch (e) {
                    n(e);
                  }
                }, t.interval);
              })
            );
          }
      }
      let ro = "__THROTTLED";
      class ra {
        getContext() {
          return this._context;
        }
        isEnabled() {
          return this._isEnabled;
        }
        isPaused() {
          return this._isPaused;
        }
        getOptions() {
          return this._options;
        }
        initializeSampling(e) {
          let { errorSampleRate: t, sessionSampleRate: r } = this._options;
          if (!(t <= 0) || !(r <= 0)) {
            if ((this._initializeSessionForSampling(e), !this.session)) {
              this._handleException(
                Error("Unable to initialize and create session")
              );
              return;
            }
            !1 !== this.session.sampled &&
              ((this.recordingMode =
                "buffer" === this.session.sampled &&
                0 === this.session.segmentId
                  ? "buffer"
                  : "session"),
              this.recordingMode,
              this._options._experiments.traceInternals,
              this._initializeRecording());
          }
        }
        start() {
          if (this._isEnabled && "session" === this.recordingMode)
            throw Error("Replay recording is already in progress");
          if (this._isEnabled && "buffer" === this.recordingMode)
            throw Error(
              "Replay buffering is in progress, call `flush()` to save the replay"
            );
          this._options._experiments.traceInternals;
          let e = tA(
            {
              maxReplayDuration: this._options.maxReplayDuration,
              sessionIdleExpire: this.timeouts.sessionIdleExpire,
              traceInternals: this._options._experiments.traceInternals,
            },
            {
              stickySession: this._options.stickySession,
              sessionSampleRate: 1,
              allowBuffering: !1,
            }
          );
          (this.session = e), this._initializeRecording();
        }
        startBuffering() {
          if (this._isEnabled)
            throw Error("Replay recording is already in progress");
          this._options._experiments.traceInternals;
          let e = tA(
            {
              sessionIdleExpire: this.timeouts.sessionIdleExpire,
              maxReplayDuration: this._options.maxReplayDuration,
              traceInternals: this._options._experiments.traceInternals,
            },
            {
              stickySession: this._options.stickySession,
              sessionSampleRate: 0,
              allowBuffering: !0,
            }
          );
          (this.session = e),
            (this.recordingMode = "buffer"),
            this._initializeRecording();
        }
        startRecording() {
          try {
            var e;
            let t;
            let r = this._options._experiments.canvas;
            this._stopRecording = ti({
              ...this._recordingOptions,
              ...("buffer" === this.recordingMode && { checkoutEveryNms: 6e4 }),
              emit:
                ((e = this),
                (t = !1),
                (r, n) => {
                  if (!e.checkAndHandleExpiredSession()) return;
                  let i = n || !t;
                  (t = !0),
                    e.clickDetector &&
                      (function (e, t) {
                        try {
                          if (3 !== t.type) return;
                          let { source: r } = t.data;
                          if (
                            (r === eP.Mutation &&
                              e.registerMutation(t.timestamp),
                            r === eP.Scroll && e.registerScroll(t.timestamp),
                            t.data.source === eP.MouseInteraction)
                          ) {
                            let { type: r, id: n } = t.data,
                              i = ti.mirror.getNode(n);
                            i instanceof HTMLElement &&
                              r === eB.Click &&
                              e.registerClick(i);
                          }
                        } catch (e) {}
                      })(e.clickDetector, r),
                    e.addUpdate(() => {
                      if (
                        ("buffer" === e.recordingMode &&
                          i &&
                          e.setInitialState(),
                        !tL(e, r, i))
                      )
                        return !0;
                      if (!i) return !1;
                      if (
                        (i &&
                          e.session &&
                          0 === e.session.segmentId &&
                          tL(
                            e,
                            (function (e) {
                              let t = e.getOptions();
                              return {
                                type: eL.Custom,
                                timestamp: Date.now(),
                                data: {
                                  tag: "options",
                                  payload: {
                                    sessionSampleRate: t.sessionSampleRate,
                                    errorSampleRate: t.errorSampleRate,
                                    useCompressionOption: t.useCompression,
                                    blockAllMedia: t.blockAllMedia,
                                    maskAllText: t.maskAllText,
                                    maskAllInputs: t.maskAllInputs,
                                    useCompression:
                                      !!e.eventBuffer &&
                                      "worker" === e.eventBuffer.type,
                                    networkDetailHasUrls:
                                      t.networkDetailAllowUrls.length > 0,
                                    networkCaptureBodies:
                                      t.networkCaptureBodies,
                                    networkRequestHasHeaders:
                                      t.networkRequestHeaders.length > 0,
                                    networkResponseHasHeaders:
                                      t.networkResponseHeaders.length > 0,
                                  },
                                },
                              };
                            })(e),
                            !1
                          ),
                        e.session && e.session.previousSessionId)
                      )
                        return !0;
                      if (
                        "buffer" === e.recordingMode &&
                        e.session &&
                        e.eventBuffer
                      ) {
                        let t = e.eventBuffer.getEarliestTimestamp();
                        t &&
                          (e.getOptions()._experiments.traceInternals,
                          (e.session.started = t),
                          e.getOptions().stickySession && tT(e.session));
                      }
                      return "session" === e.recordingMode && e.flush(), !0;
                    });
                }),
              onMutation: this._onMutationHandler,
              ...(r && {
                recordCanvas: !0,
                sampling: { canvas: r.fps || 4 },
                dataURLOptions: { quality: r.quality || 0.6 },
                getCanvasManager: r.manager,
              }),
            });
          } catch (e) {
            this._handleException(e);
          }
        }
        stopRecording() {
          try {
            return (
              this._stopRecording &&
                (this._stopRecording(), (this._stopRecording = void 0)),
              !0
            );
          } catch (e) {
            return this._handleException(e), !1;
          }
        }
        async stop() {
          let { forceFlush: e = !1, reason: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (this._isEnabled) {
            this._isEnabled = !1;
            try {
              this._options._experiments.traceInternals,
                this._removeListeners(),
                this.stopRecording(),
                this._debouncedFlush.cancel(),
                e && (await this._flush({ force: !0 })),
                this.eventBuffer && this.eventBuffer.destroy(),
                (this.eventBuffer = null),
                (function () {
                  if (tM())
                    try {
                      B.sessionStorage.removeItem(F);
                    } catch (e) {}
                })(),
                (this.session = void 0);
            } catch (e) {
              this._handleException(e);
            }
          }
        }
        pause() {
          this._isPaused ||
            ((this._isPaused = !0),
            this.stopRecording(),
            this._options._experiments.traceInternals);
        }
        resume() {
          this._isPaused &&
            this._checkSession() &&
            ((this._isPaused = !1),
            this.startRecording(),
            this._options._experiments.traceInternals);
        }
        async sendBufferedReplayOrFlush() {
          let { continueRecording: e = !0 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if ("session" === this.recordingMode) return this.flushImmediate();
          let t = Date.now();
          this._options._experiments.traceInternals,
            await this.flushImmediate();
          let r = this.stopRecording();
          e &&
            r &&
            "session" !== this.recordingMode &&
            ((this.recordingMode = "session"),
            this.session &&
              (this._updateUserActivity(t),
              this._updateSessionActivity(t),
              this._maybeSaveSession()),
            this.startRecording());
        }
        addUpdate(e) {
          let t = e();
          "buffer" !== this.recordingMode && !0 !== t && this._debouncedFlush();
        }
        triggerUserActivity() {
          if ((this._updateUserActivity(), !this._stopRecording)) {
            if (!this._checkSession()) return;
            this.resume();
            return;
          }
          this.checkAndHandleExpiredSession(), this._updateSessionActivity();
        }
        updateUserActivity() {
          this._updateUserActivity(), this._updateSessionActivity();
        }
        conditionalFlush() {
          return "buffer" === this.recordingMode
            ? Promise.resolve()
            : this.flushImmediate();
        }
        flush() {
          return this._debouncedFlush();
        }
        flushImmediate() {
          return this._debouncedFlush(), this._debouncedFlush.flush();
        }
        cancelFlush() {
          this._debouncedFlush.cancel();
        }
        getSessionId() {
          return this.session && this.session.id;
        }
        checkAndHandleExpiredSession() {
          if (
            this._lastActivity &&
            tO(this._lastActivity, this.timeouts.sessionIdlePause) &&
            this.session &&
            "session" === this.session.sampled
          ) {
            this.pause();
            return;
          }
          return !!this._checkSession();
        }
        setInitialState() {
          let e = ""
              .concat(B.location.pathname)
              .concat(B.location.hash)
              .concat(B.location.search),
            t = "".concat(B.location.origin).concat(e);
          (this.performanceEntries = []),
            (this.replayPerformanceEntries = []),
            this._clearContext(),
            (this._context.initialUrl = t),
            (this._context.initialTimestamp = Date.now()),
            this._context.urls.push(t);
        }
        throttledAddEvent(e, t) {
          let r = this._throttledAddEvent(e, t);
          if (r === ro) {
            let e = tf({ category: "replay.throttled" });
            this.addUpdate(
              () =>
                !tL(this, {
                  type: 5,
                  timestamp: e.timestamp || 0,
                  data: { tag: "breadcrumb", payload: e, metric: !0 },
                })
            );
          }
          return r;
        }
        getCurrentRoute() {
          let e =
            this.lastTransaction || (0, y.Gd)().getScope().getTransaction();
          if (e && ["route", "custom"].includes(e.metadata.source))
            return e.name;
        }
        _initializeRecording() {
          this.setInitialState(),
            this._updateSessionActivity(),
            (this.eventBuffer = (function (e) {
              let { useCompression: t, workerUrl: r } = e;
              if (t && window.Worker) {
                let e = (function (e) {
                  try {
                    let t =
                      e ||
                      ("undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ &&
                      __SENTRY_EXCLUDE_REPLAY_WORKER__
                        ? ""
                        : (function () {
                            let e = new Blob([
                              'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,a=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),s=a.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(a,n),O(a,s-8,r.d()),O(a,s-4,e),a}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(G)return G.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(let r=0,e=t.length;r<e;r++)n+=t[r].length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});',
                            ]);
                            return URL.createObjectURL(e);
                          })());
                    if (!t) return;
                    let r = new Worker(t);
                    return new tI(r);
                  } catch (e) {}
                })(r);
                if (e) return e;
              }
              return new tw();
            })({
              useCompression: this._options.useCompression,
              workerUrl: this._options.workerUrl,
            })),
            this._removeListeners(),
            this._addListeners(),
            (this._isEnabled = !0),
            (this._isPaused = !1),
            this.startRecording();
        }
        _handleException(e) {}
        _initializeSessionForSampling(e) {
          let t = this._options.errorSampleRate > 0,
            r = tA(
              {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration,
                traceInternals: this._options._experiments.traceInternals,
                previousSessionId: e,
              },
              {
                stickySession: this._options.stickySession,
                sessionSampleRate: this._options.sessionSampleRate,
                allowBuffering: t,
              }
            );
          this.session = r;
        }
        _checkSession() {
          if (!this.session) return !1;
          let e = this.session;
          return (
            !tN(e, {
              sessionIdleExpire: this.timeouts.sessionIdleExpire,
              maxReplayDuration: this._options.maxReplayDuration,
            }) || (this._refreshSession(e), !1)
          );
        }
        async _refreshSession(e) {
          this._isEnabled &&
            (await this.stop({ reason: "refresh session" }),
            this.initializeSampling(e.id));
        }
        _addListeners() {
          try {
            B.document.addEventListener(
              "visibilitychange",
              this._handleVisibilityChange
            ),
              B.addEventListener("blur", this._handleWindowBlur),
              B.addEventListener("focus", this._handleWindowFocus),
              B.addEventListener("keydown", this._handleKeyboardEvent),
              this.clickDetector && this.clickDetector.addListeners(),
              this._hasInitializedCoreListeners ||
                ((function (e) {
                  let t = (0, y.Gd)().getScope(),
                    r = (0, g.s3)();
                  t.addScopeListener(t9(e)),
                    (0, O.O)(ty(e)),
                    (0, D.a)((t) => {
                      if (!e.isEnabled()) return;
                      let r = (function (e) {
                        let { from: t, to: r } = e,
                          n = Date.now() / 1e3;
                        return {
                          type: "navigation.push",
                          start: n,
                          end: n,
                          name: r,
                          data: { previous: t },
                        };
                      })(t);
                      null !== r &&
                        (e.getContext().urls.push(r.name),
                        e.triggerUserActivity(),
                        e.addUpdate(() => (tz(e, [r]), !1)));
                    }),
                    (function (e) {
                      let t = (0, g.s3)();
                      try {
                        let r = new TextEncoder(),
                          {
                            networkDetailAllowUrls: n,
                            networkDetailDenyUrls: i,
                            networkCaptureBodies: s,
                            networkRequestHeaders: o,
                            networkResponseHeaders: a,
                          } = e.getOptions(),
                          l = {
                            replay: e,
                            textEncoder: r,
                            networkDetailAllowUrls: n,
                            networkDetailDenyUrls: i,
                            networkCaptureBodies: s,
                            networkRequestHeaders: o,
                            networkResponseHeaders: a,
                          };
                        t && t.on
                          ? t.on("beforeAddBreadcrumb", (e, t) =>
                              (function (e, t, r) {
                                if (t.data)
                                  try {
                                    var n, i;
                                    "xhr" === t.category &&
                                      (n = r) &&
                                      n.xhr &&
                                      ((function (e, t, r) {
                                        let { xhr: n, input: i } = t;
                                        if (!n) return;
                                        let s = tH(i, r.textEncoder),
                                          o = n.getResponseHeader(
                                            "content-length"
                                          )
                                            ? tq(
                                                n.getResponseHeader(
                                                  "content-length"
                                                )
                                              )
                                            : (function (e, t, r) {
                                                try {
                                                  let n =
                                                    "json" === t &&
                                                    e &&
                                                    "object" == typeof e
                                                      ? JSON.stringify(e)
                                                      : e;
                                                  return tH(n, r);
                                                } catch (e) {
                                                  return;
                                                }
                                              })(
                                                n.response,
                                                n.responseType,
                                                r.textEncoder
                                              );
                                        void 0 !== s &&
                                          (e.data.request_body_size = s),
                                          void 0 !== o &&
                                            (e.data.response_body_size = o);
                                      })(t, r, e),
                                      t4(t, r, e)),
                                      "fetch" === t.category &&
                                        (i = r) &&
                                        i.response &&
                                        ((function (e, t, r) {
                                          let { input: n, response: i } = t,
                                            s = tH(
                                              n ? t3(n) : void 0,
                                              r.textEncoder
                                            ),
                                            o = i
                                              ? tq(
                                                  i.headers.get(
                                                    "content-length"
                                                  )
                                                )
                                              : void 0;
                                          void 0 !== s &&
                                            (e.data.request_body_size = s),
                                            void 0 !== o &&
                                              (e.data.response_body_size = o);
                                        })(t, r, e),
                                        tZ(t, r, e));
                                  } catch (e) {}
                              })(l, e, t)
                            )
                          : ((0, x.U)((t) => {
                              e.isEnabled() &&
                                tW(
                                  e,
                                  (function (e) {
                                    let {
                                      startTimestamp: t,
                                      endTimestamp: r,
                                      fetchData: n,
                                      response: i,
                                    } = e;
                                    if (!r) return null;
                                    let { method: s, url: o } = n;
                                    return {
                                      type: "resource.fetch",
                                      start: t / 1e3,
                                      end: r / 1e3,
                                      name: o,
                                      data: {
                                        method: s,
                                        statusCode: i ? i.status : void 0,
                                      },
                                    };
                                  })(t)
                                );
                            }),
                            (0, R.UK)((t) => {
                              e.isEnabled() &&
                                tW(
                                  e,
                                  (function (e) {
                                    let {
                                        startTimestamp: t,
                                        endTimestamp: r,
                                        xhr: n,
                                      } = e,
                                      i = n[R.xU];
                                    if (!t || !r || !i) return null;
                                    let {
                                      method: s,
                                      url: o,
                                      status_code: a,
                                    } = i;
                                    return void 0 === o
                                      ? null
                                      : {
                                          type: "resource.xhr",
                                          name: o,
                                          start: t / 1e3,
                                          end: r / 1e3,
                                          data: { method: s, statusCode: a },
                                        };
                                  })(t)
                                );
                            }));
                      } catch (e) {}
                    })(e);
                  let n = (function (e) {
                    let t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      r = t ? tU(e) : void 0;
                    return Object.assign(
                      (t, n) =>
                        e.isEnabled()
                          ? "replay_event" === t.type
                            ? (delete t.breadcrumbs, t)
                            : (!t.type || tF(t) || tj(t)) &&
                              e.checkAndHandleExpiredSession()
                            ? tj(t)
                              ? (e.flush(),
                                (t.contexts.feedback.replay_id =
                                  e.getSessionId()),
                                e.triggerUserActivity(),
                                e.addUpdate(
                                  () =>
                                    !t.timestamp ||
                                    (e.throttledAddEvent({
                                      type: eL.Custom,
                                      timestamp: 1e3 * t.timestamp,
                                      data: {
                                        timestamp: t.timestamp,
                                        tag: "breadcrumb",
                                        payload: {
                                          category: "sentry.feedback",
                                          data: { feedbackId: t.event_id },
                                        },
                                      },
                                    }),
                                    !1)
                                ),
                                t)
                              : !t.type &&
                                t.exception &&
                                t.exception.values &&
                                t.exception.values.length &&
                                n.originalException &&
                                n.originalException.__rrweb__ &&
                                !e.getOptions()._experiments.captureExceptions
                              ? null
                              : ((("buffer" === e.recordingMode &&
                                  t.message !== j &&
                                  t.exception &&
                                  !t.type &&
                                  tC(e.getOptions().errorSampleRate)) ||
                                  "session" === e.recordingMode) &&
                                  (t.tags = {
                                    ...t.tags,
                                    replayId: e.getSessionId(),
                                  }),
                                r && r(t, { statusCode: 200 }),
                                t)
                            : t
                          : t,
                      { id: "Replay" }
                    );
                  })(e, !(r && r.on));
                  r && r.addEventProcessor
                    ? r.addEventProcessor(n)
                    : (0, _.Q)(n),
                    r &&
                      r.on &&
                      (r.on("beforeSendEvent", (t) => {
                        e.isEnabled() &&
                          !t.type &&
                          (function (e, t) {
                            let r =
                              t.exception &&
                              t.exception.values &&
                              t.exception.values[0].value;
                            "string" == typeof r &&
                              (r.match(
                                /reactjs\.org\/docs\/error-decoder\.html\?invariant=(418|419|422|423|425)/
                              ) ||
                                r.match(
                                  /(hydration|content does not match|did not match)/i
                                )) &&
                              ta(e, tf({ category: "replay.hydrate-error" }));
                          })(e, t);
                      }),
                      r.on("afterSendEvent", tU(e)),
                      r.on("createDsc", (t) => {
                        let r = e.getSessionId();
                        r &&
                          e.isEnabled() &&
                          "session" === e.recordingMode &&
                          e.checkAndHandleExpiredSession() &&
                          (t.replay_id = r);
                      }),
                      r.on("startTransaction", (t) => {
                        e.lastTransaction = t;
                      }),
                      r.on("finishTransaction", (t) => {
                        e.lastTransaction = t;
                      }),
                      r.on("beforeSendFeedback", (t, r) => {
                        let n = e.getSessionId();
                        r &&
                          r.includeReplay &&
                          e.isEnabled() &&
                          n &&
                          (e.flush(),
                          t.contexts &&
                            t.contexts.feedback &&
                            (t.contexts.feedback.replay_id = n));
                      }));
                })(this),
                (this._hasInitializedCoreListeners = !0));
          } catch (e) {
            this._handleException(e);
          }
          this._performanceCleanupCallback = (function (e) {
            function t(t) {
              e.performanceEntries.includes(t) || e.performanceEntries.push(t);
            }
            function r(e) {
              let { entries: r } = e;
              r.forEach(t);
            }
            let n = [];
            return (
              ["navigation", "paint", "resource"].forEach((e) => {
                n.push((0, P._j)(e, r));
              }),
              n.push(
                (0, P.$A)((t) => {
                  let { metric: r } = t;
                  e.replayPerformanceEntries.push(
                    (function (e) {
                      let t = e.entries,
                        r = t[t.length - 1],
                        n = r ? r.element : void 0,
                        i = e.value,
                        s = tS(i);
                      return {
                        type: "largest-contentful-paint",
                        name: "largest-contentful-paint",
                        start: s,
                        end: s,
                        data: {
                          value: i,
                          size: i,
                          nodeId: n ? ti.mirror.getId(n) : void 0,
                        },
                      };
                    })(r)
                  );
                })
              ),
              () => {
                n.forEach((e) => e());
              }
            );
          })(this);
        }
        _removeListeners() {
          try {
            B.document.removeEventListener(
              "visibilitychange",
              this._handleVisibilityChange
            ),
              B.removeEventListener("blur", this._handleWindowBlur),
              B.removeEventListener("focus", this._handleWindowFocus),
              B.removeEventListener("keydown", this._handleKeyboardEvent),
              this.clickDetector && this.clickDetector.removeListeners(),
              this._performanceCleanupCallback &&
                this._performanceCleanupCallback();
          } catch (e) {
            this._handleException(e);
          }
        }
        __init() {
          this._handleVisibilityChange = () => {
            "visible" === B.document.visibilityState
              ? this._doChangeToForegroundTasks()
              : this._doChangeToBackgroundTasks();
          };
        }
        __init2() {
          this._handleWindowBlur = () => {
            let e = tf({ category: "ui.blur" });
            this._doChangeToBackgroundTasks(e);
          };
        }
        __init3() {
          this._handleWindowFocus = () => {
            let e = tf({ category: "ui.focus" });
            this._doChangeToForegroundTasks(e);
          };
        }
        __init4() {
          this._handleKeyboardEvent = (e) => {
            !(function (e, t) {
              if (!e.isEnabled()) return;
              e.updateUserActivity();
              let r = (function (e) {
                var t;
                let {
                  metaKey: r,
                  shiftKey: n,
                  ctrlKey: i,
                  altKey: s,
                  key: o,
                  target: a,
                } = e;
                if (
                  !a ||
                  "INPUT" === (t = a).tagName ||
                  "TEXTAREA" === t.tagName ||
                  t.isContentEditable ||
                  !o
                )
                  return null;
                let l = r || i || s,
                  c = 1 === o.length;
                if (!l && c) return null;
                let u = (0, k.Rt)(a, { maxStringLength: 200 }) || "<unknown>",
                  d = tg(a, u);
                return tf({
                  category: "ui.keyDown",
                  message: u,
                  data: {
                    ...d.data,
                    metaKey: r,
                    shiftKey: n,
                    ctrlKey: i,
                    altKey: s,
                    key: o,
                  },
                });
              })(t);
              r && ta(e, r);
            })(this, e);
          };
        }
        _doChangeToBackgroundTasks(e) {
          !this.session ||
            tD(this.session, {
              maxReplayDuration: this._options.maxReplayDuration,
              sessionIdleExpire: this.timeouts.sessionIdleExpire,
            }) ||
            (e && this._createCustomBreadcrumb(e), this.conditionalFlush());
        }
        _doChangeToForegroundTasks(e) {
          this.session &&
            this.checkAndHandleExpiredSession() &&
            e &&
            this._createCustomBreadcrumb(e);
        }
        _updateUserActivity() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Date.now();
          this._lastActivity = e;
        }
        _updateSessionActivity() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Date.now();
          this.session &&
            ((this.session.lastActivity = e), this._maybeSaveSession());
        }
        _createCustomBreadcrumb(e) {
          this.addUpdate(() => {
            this.throttledAddEvent({
              type: eL.Custom,
              timestamp: e.timestamp || 0,
              data: { tag: "breadcrumb", payload: e },
            });
          });
        }
        _addPerformanceEntries() {
          let e = this.performanceEntries
            .map(t_)
            .filter(Boolean)
            .concat(this.replayPerformanceEntries);
          return (
            (this.performanceEntries = []),
            (this.replayPerformanceEntries = []),
            Promise.all(tz(this, e))
          );
        }
        _clearContext() {
          this._context.errorIds.clear(),
            this._context.traceIds.clear(),
            (this._context.urls = []);
        }
        _updateInitialTimestampFromEventBuffer() {
          let { session: e, eventBuffer: t } = this;
          if (!e || !t || e.segmentId) return;
          let r = t.getEarliestTimestamp();
          r &&
            r < this._context.initialTimestamp &&
            (this._context.initialTimestamp = r);
        }
        _popEventContext() {
          let e = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            urls: this._context.urls,
          };
          return this._clearContext(), e;
        }
        async _runFlush() {
          let e = this.getSessionId();
          if (
            this.session &&
            this.eventBuffer &&
            e &&
            (await this._addPerformanceEntries(),
            this.eventBuffer && this.eventBuffer.hasEvents) &&
            (await re(this), this.eventBuffer && e === this.getSessionId())
          )
            try {
              this._updateInitialTimestampFromEventBuffer();
              let t = Date.now();
              if (
                t - this._context.initialTimestamp >
                this._options.maxReplayDuration + 3e4
              )
                throw Error("Session is too long, not sending replay");
              let r = this._popEventContext(),
                n = this.session.segmentId++;
              this._maybeSaveSession();
              let i = await this.eventBuffer.finish();
              await rs({
                replayId: e,
                recordingData: i,
                segmentId: n,
                eventContext: r,
                session: this.session,
                options: this.getOptions(),
                timestamp: t,
              });
            } catch (t) {
              this._handleException(t), this.stop({ reason: "sendReplay" });
              let e = (0, g.s3)();
              e && e.recordDroppedEvent("send_error", "replay");
            }
        }
        __init5() {
          var e = this;
          this._flush = async function () {
            let { force: t = !1 } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            if (
              (!e._isEnabled && !t) ||
              !e.checkAndHandleExpiredSession() ||
              !e.session
            )
              return;
            let r = e.session.started,
              n = Date.now() - r;
            e._debouncedFlush.cancel();
            let i = n < e._options.minReplayDuration,
              s = n > e._options.maxReplayDuration + 5e3;
            if (i || s) {
              "[Replay] Session duration ("
                .concat(Math.floor(n / 1e3), "s) is too ")
                .concat(i ? "short" : "long", ", not sending replay."),
                e._options._experiments.traceInternals,
                i && e._debouncedFlush();
              return;
            }
            let o = e.eventBuffer;
            if (
              (o &&
                0 === e.session.segmentId &&
                !o.hasCheckout &&
                e._options._experiments.traceInternals,
              !e._flushLock)
            ) {
              (e._flushLock = e._runFlush()),
                await e._flushLock,
                (e._flushLock = void 0);
              return;
            }
            try {
              await e._flushLock;
            } catch (e) {
            } finally {
              e._debouncedFlush();
            }
          };
        }
        _maybeSaveSession() {
          this.session && this._options.stickySession && tT(this.session);
        }
        __init6() {
          this._onMutationHandler = (e) => {
            let t = e.length,
              r = this._options.mutationLimit,
              n = this._options.mutationBreadcrumbLimit,
              i = r && t > r;
            if (t > n || i) {
              let e = tf({
                category: "replay.mutations",
                data: { count: t, limit: i },
              });
              this._createCustomBreadcrumb(e);
            }
            return (
              !i ||
              (this.stop({
                reason: "mutationLimit",
                forceFlush: "session" === this.recordingMode,
              }),
              !1)
            );
          };
        }
        constructor({ options: e, recordingOptions: t }) {
          ra.prototype.__init.call(this),
            ra.prototype.__init2.call(this),
            ra.prototype.__init3.call(this),
            ra.prototype.__init4.call(this),
            ra.prototype.__init5.call(this),
            ra.prototype.__init6.call(this),
            (this.eventBuffer = null),
            (this.performanceEntries = []),
            (this.replayPerformanceEntries = []),
            (this.recordingMode = "session"),
            (this.timeouts = { sessionIdlePause: 3e5, sessionIdleExpire: 9e5 }),
            (this._lastActivity = Date.now()),
            (this._isEnabled = !1),
            (this._isPaused = !1),
            (this._hasInitializedCoreListeners = !1),
            (this._context = {
              errorIds: new Set(),
              traceIds: new Set(),
              urls: [],
              initialTimestamp: Date.now(),
              initialUrl: "",
            }),
            (this._recordingOptions = t),
            (this._options = e),
            (this._debouncedFlush = (function (e, t, r) {
              let n, i, s;
              let o = r && r.maxWait ? Math.max(r.maxWait, t) : 0;
              function a() {
                return l(), (n = e());
              }
              function l() {
                void 0 !== i && clearTimeout(i),
                  void 0 !== s && clearTimeout(s),
                  (i = s = void 0);
              }
              function c() {
                return (
                  i && clearTimeout(i),
                  (i = setTimeout(a, t)),
                  o && void 0 === s && (s = setTimeout(a, o)),
                  n
                );
              }
              return (
                (c.cancel = l),
                (c.flush = function () {
                  return void 0 !== i || void 0 !== s ? a() : n;
                }),
                c
              );
            })(() => this._flush(), this._options.flushMinDelay, {
              maxWait: this._options.flushMaxDelay,
            })),
            (this._throttledAddEvent = (function (e, t, r) {
              let n = new Map(),
                i = (e) => {
                  let t = e - 5;
                  n.forEach((e, r) => {
                    r < t && n.delete(r);
                  });
                },
                s = () => [...n.values()].reduce((e, t) => e + t, 0),
                o = !1;
              return function () {
                for (var t = arguments.length, r = Array(t), a = 0; a < t; a++)
                  r[a] = arguments[a];
                let l = Math.floor(Date.now() / 1e3);
                if ((i(l), s() >= 300)) {
                  let e = o;
                  return (o = !0), e ? "__SKIPPED" : ro;
                }
                o = !1;
                let c = n.get(l) || 0;
                return n.set(l, c + 1), e(...r);
              };
            })(
              (e, t) => (tB(this, e) ? tP(this, e, t) : Promise.resolve(null)),
              0,
              0
            ));
          let { slowClickTimeout: r, slowClickIgnoreSelectors: n } =
              this.getOptions(),
            i = r
              ? {
                  threshold: Math.min(3e3, r),
                  timeout: r,
                  scrollTimeout: 300,
                  ignoreSelector: n ? n.join(",") : "",
                }
              : void 0;
          i && (this.clickDetector = new td(this, i));
        }
      }
      function rl(e, t, r, n) {
        let i = [...e, ...("string" == typeof n ? n.split(",") : []), ...t];
        return (
          void 0 !== r &&
            ("string" == typeof r && i.push(".".concat(r)),
            (0, M.Cf)(() => {
              console.warn(
                "[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration."
              );
            })),
          i.join(",")
        );
      }
      let rc =
          'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
        ru = ["content-length", "content-type", "accept"],
        rd = !1;
      class rh {
        static __initStatic() {
          this.id = "Replay";
        }
        get _isInitialized() {
          return rd;
        }
        set _isInitialized(e) {
          rd = e;
        }
        setupOnce() {
          (0, L.j)() && (this._setup(), setTimeout(() => this._initialize()));
        }
        start() {
          this._replay && this._replay.start();
        }
        startBuffering() {
          this._replay && this._replay.startBuffering();
        }
        stop() {
          return this._replay
            ? this._replay.stop({
                forceFlush: "session" === this._replay.recordingMode,
              })
            : Promise.resolve();
        }
        flush(e) {
          return this._replay && this._replay.isEnabled()
            ? this._replay.sendBufferedReplayOrFlush(e)
            : Promise.resolve();
        }
        getReplayId() {
          if (this._replay && this._replay.isEnabled())
            return this._replay.getSessionId();
        }
        _initialize() {
          this._replay && this._replay.initializeSampling();
        }
        _setup() {
          let e = (function (e) {
            let t = (0, g.s3)(),
              r = t && t.getOptions(),
              n = { sessionSampleRate: 0, errorSampleRate: 0, ...(0, E.Jr)(e) };
            return (
              r
                ? (null == e.sessionSampleRate &&
                    null == e.errorSampleRate &&
                    null == r.replaysSessionSampleRate &&
                    null == r.replaysOnErrorSampleRate &&
                    (0, M.Cf)(() => {
                      console.warn(
                        "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."
                      );
                    }),
                  "number" == typeof r.replaysSessionSampleRate &&
                    (n.sessionSampleRate = r.replaysSessionSampleRate),
                  "number" == typeof r.replaysOnErrorSampleRate &&
                    (n.errorSampleRate = r.replaysOnErrorSampleRate))
                : (0, M.Cf)(() => {
                    console.warn("SDK client is not available.");
                  }),
              n
            );
          })(this._initialOptions);
          this._replay = new ra({
            options: e,
            recordingOptions: this._recordingOptions,
          });
        }
        constructor({
          flushMinDelay: e = 5e3,
          flushMaxDelay: t = 5500,
          minReplayDuration: r = 4999,
          maxReplayDuration: n = 36e5,
          stickySession: i = !0,
          useCompression: s = !0,
          workerUrl: o,
          _experiments: a = {},
          sessionSampleRate: l,
          errorSampleRate: c,
          maskAllText: u = !0,
          maskAllInputs: d = !0,
          blockAllMedia: h = !0,
          mutationBreadcrumbLimit: p = 750,
          mutationLimit: f = 1e4,
          slowClickTimeout: m = 7e3,
          slowClickIgnoreSelectors: y = [],
          networkDetailAllowUrls: g = [],
          networkDetailDenyUrls: v = [],
          networkCaptureBodies: _ = !0,
          networkRequestHeaders: S = [],
          networkResponseHeaders: b = [],
          mask: w = [],
          maskAttributes: E = ["title", "placeholder"],
          unmask: k = [],
          block: I = [],
          unblock: M = [],
          ignore: C = [],
          maskFn: R,
          beforeAddRecordingEvent: T,
          beforeErrorSampling: x,
          blockClass: O,
          blockSelector: D,
          maskInputOptions: N,
          maskTextClass: A,
          maskTextSelector: P,
          ignoreClass: B,
        } = {}) {
          this.name = rh.id;
          let F = (function (e) {
            let {
                mask: t,
                unmask: r,
                block: n,
                unblock: i,
                ignore: s,
                blockClass: o,
                blockSelector: a,
                maskTextClass: l,
                maskTextSelector: c,
                ignoreClass: u,
              } = e,
              d = {
                maskTextSelector: rl(
                  t,
                  [".sentry-mask", "[data-sentry-mask]"],
                  l,
                  c
                ),
                unmaskTextSelector: rl(r, [
                  ".sentry-unmask",
                  "[data-sentry-unmask]",
                ]),
                blockSelector: rl(
                  n,
                  [".sentry-block", "[data-sentry-block]", 'base[href="/"]'],
                  o,
                  a
                ),
                unblockSelector: rl(i, [
                  ".sentry-unblock",
                  "[data-sentry-unblock]",
                ]),
                ignoreSelector: rl(
                  s,
                  [
                    ".sentry-ignore",
                    "[data-sentry-ignore]",
                    'input[type="file"]',
                  ],
                  u
                ),
              };
            return (
              o instanceof RegExp && (d.blockClass = o),
              l instanceof RegExp && (d.maskTextClass = l),
              d
            );
          })({
            mask: w,
            unmask: k,
            block: I,
            unblock: M,
            ignore: C,
            blockClass: O,
            blockSelector: D,
            maskTextClass: A,
            maskTextSelector: P,
            ignoreClass: B,
          });
          if (
            ((this._recordingOptions = {
              maskAllInputs: d,
              maskAllText: u,
              maskInputOptions: { ...(N || {}), password: !0 },
              maskTextFn: R,
              maskInputFn: R,
              maskAttributeFn: (e, t, r) =>
                (function (e) {
                  let {
                    el: t,
                    key: r,
                    maskAttributes: n,
                    maskAllText: i,
                    privacyOptions: s,
                    value: o,
                  } = e;
                  return !i ||
                    (s.unmaskTextSelector && t.matches(s.unmaskTextSelector))
                    ? o
                    : n.includes(r) ||
                      ("value" === r &&
                        "INPUT" === t.tagName &&
                        ["submit", "button"].includes(
                          t.getAttribute("type") || ""
                        ))
                    ? o.replace(/[\S]/g, "*")
                    : o;
                })({
                  maskAttributes: E,
                  maskAllText: u,
                  privacyOptions: F,
                  key: e,
                  value: t,
                  el: r,
                }),
              ...F,
              slimDOMOptions: "all",
              inlineStylesheet: !0,
              inlineImages: !1,
              collectFonts: !0,
              errorHandler: (e) => {
                try {
                  e.__rrweb__ = !0;
                } catch (e) {}
              },
            }),
            (this._initialOptions = {
              flushMinDelay: e,
              flushMaxDelay: t,
              minReplayDuration: Math.min(r, 15e3),
              maxReplayDuration: Math.min(n, 36e5),
              stickySession: i,
              sessionSampleRate: l,
              errorSampleRate: c,
              useCompression: s,
              workerUrl: o,
              blockAllMedia: h,
              maskAllInputs: d,
              maskAllText: u,
              mutationBreadcrumbLimit: p,
              mutationLimit: f,
              slowClickTimeout: m,
              slowClickIgnoreSelectors: y,
              networkDetailAllowUrls: g,
              networkDetailDenyUrls: v,
              networkCaptureBodies: _,
              networkRequestHeaders: rp(S),
              networkResponseHeaders: rp(b),
              beforeAddRecordingEvent: T,
              beforeErrorSampling: x,
              _experiments: a,
            }),
            "number" == typeof l &&
              (console.warn(
                "[Replay] You are passing `sessionSampleRate` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure `replaysSessionSampleRate` directly in the SDK init options, e.g.:\nSentry.init({ replaysSessionSampleRate: ".concat(
                  l,
                  " })"
                )
              ),
              (this._initialOptions.sessionSampleRate = l)),
            "number" == typeof c &&
              (console.warn(
                "[Replay] You are passing `errorSampleRate` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure `replaysOnErrorSampleRate` directly in the SDK init options, e.g.:\nSentry.init({ replaysOnErrorSampleRate: ".concat(
                  c,
                  " })"
                )
              ),
              (this._initialOptions.errorSampleRate = c)),
            this._initialOptions.blockAllMedia &&
              (this._recordingOptions.blockSelector = this._recordingOptions
                .blockSelector
                ? ""
                    .concat(this._recordingOptions.blockSelector, ",")
                    .concat(rc)
                : rc),
            this._isInitialized && (0, L.j)())
          )
            throw Error(
              "Multiple Sentry Session Replay instances are not supported"
            );
          this._isInitialized = !0;
        }
      }
      function rp(e) {
        return [...ru, ...e.map((e) => e.toLowerCase())];
      }
      rh.__initStatic();
    },
  },
]);
