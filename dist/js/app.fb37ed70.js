(function (e) {
  function t(t) {
    for (
      var r, c, i = t[0], a = t[1], p = t[2], l = 0, s = [];
      l < i.length;
      l++
    )
      (c = i[l]),
        Object.prototype.hasOwnProperty.call(o, c) && o[c] && s.push(o[c][0]),
        (o[c] = 0);
    for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    f && f(t);
    while (s.length) s.shift()();
    return u.push.apply(u, p || []), n();
  }
  function n() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, i = 1; i < n.length; i++) {
        var a = n[i];
        0 !== o[a] && (r = !1);
      }
      r && (u.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { app: 0 },
    u = [];
  function c(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.m = e),
    (c.c = r),
    (c.d = function (e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          c.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "/");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    a = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var p = 0; p < i.length; p++) t(i[p]);
  var f = a;
  u.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  "034f": function (e, t, n) {
    "use strict";
    var r = n("9fc4"),
      o = n.n(r);
    o.a;
  },
  "44e3": function (e, t, n) {
    e.exports = "./img/test.d306042c.webp";
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("2b0e"),
      o = function () {
        var e = this,
          t = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      u = [
        function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", { attrs: { id: "app" } }, [
            r("h1", [e._v("Hello!")]),
            r("picture", [
              r("source", { attrs: { srcset: n("44e3"), alt: "" } }),
              r("img", { attrs: { src: n("9387"), alt: "" } }),
            ]),
          ]);
        },
      ],
      c = { name: "App", components: {} },
      i = c,
      a = (n("034f"), n("2877")),
      p = Object(a["a"])(i, o, u, !1, null, null, null),
      f = p.exports;
    (r["a"].config.productionTip = !1),
      new r["a"]({
        render: function (e) {
          return e(f);
        },
      }).$mount("#app");
  },
  9387: function (e, t, n) {
    e.exports = "./img/test.5860d5af.jpg";
  },
  "9fc4": function (e, t, n) {},
});
//# sourceMappingURL=app.fb37ed70.js.map
