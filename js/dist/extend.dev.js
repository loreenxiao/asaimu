"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
该js文件包含视频弹窗、图片弹窗、视频全屏、简历弹窗、视频在可视区时播放、元素在可视区添加class、元素设置可视区一屏的高度、swiper.min.js、gsap.min.js、ScrollTrigger.min.js、ScrollMagic、animation.gsap.min.js、debug.addIndicators.min.js、hScroll.js
/*

 
 /**
 * Swiper 4.3.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 1, 2018
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t();
}(void 0, function () {
  "use strict";

  var e = "undefined" == typeof document ? {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    location: {
      hash: ""
    }
  } : document,
      t = "undefined" == typeof window ? {
    document: e,
    navigator: {
      userAgent: ""
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {}
  } : window,
      i = function i(e) {
    for (var t = 0; t < e.length; t += 1) {
      this[t] = e[t];
    }

    return this.length = e.length, this;
  };

  function s(s, a) {
    var r = [],
        n = 0;
    if (s && !a && s instanceof i) return s;
    if (s) if ("string" == typeof s) {
      var o,
          l,
          d = s.trim();

      if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
        var h = "div";

        for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) {
          r.push(l.childNodes[n]);
        }
      } else for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) {
        o[n] && r.push(o[n]);
      }
    } else if (s.nodeType || s === t || s === e) r.push(s);else if (s.length > 0 && s[0].nodeType) for (n = 0; n < s.length; n += 1) {
      r.push(s[n]);
    }
    return new i(r);
  }

  function a(e) {
    for (var t = [], i = 0; i < e.length; i += 1) {
      -1 === t.indexOf(e[i]) && t.push(e[i]);
    }

    return t;
  }

  s.fn = i.prototype, s.Class = i, s.Dom7 = i;
  var r = {
    addClass: function addClass(e) {
      if (void 0 === e) return this;

      for (var t = e.split(" "), i = 0; i < t.length; i += 1) {
        for (var s = 0; s < this.length; s += 1) {
          void 0 !== this[s].classList && this[s].classList.add(t[i]);
        }
      }

      return this;
    },
    removeClass: function removeClass(e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) {
        for (var s = 0; s < this.length; s += 1) {
          void 0 !== this[s].classList && this[s].classList.remove(t[i]);
        }
      }

      return this;
    },
    hasClass: function hasClass(e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function toggleClass(e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) {
        for (var s = 0; s < this.length; s += 1) {
          void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
        }
      }

      return this;
    },
    attr: function attr(e, t) {
      var i = arguments;
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var s = 0; s < this.length; s += 1) {
        if (2 === i.length) this[s].setAttribute(e, t);else for (var a in e) {
          this[s][a] = e[a], this[s].setAttribute(a, e[a]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].removeAttribute(e);
      }

      return this;
    },
    data: function data(e, t) {
      var i;

      if (void 0 !== t) {
        for (var s = 0; s < this.length; s += 1) {
          (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
        }

        return this;
      }

      if (i = this[0]) {
        if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
        var a = i.getAttribute("data-" + e);
        return a || void 0;
      }
    },
    transform: function transform(e) {
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        i.webkitTransform = e, i.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      "string" != typeof e && (e += "ms");

      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        i.webkitTransitionDuration = e, i.transitionDuration = e;
      }

      return this;
    },
    on: function on() {
      for (var e, t = [], i = arguments.length; i--;) {
        t[i] = arguments[i];
      }

      var a = t[0],
          r = t[1],
          n = t[2],
          o = t[3];

      function l(e) {
        var t = e.target;

        if (t) {
          var i = e.target.dom7EventData || [];
          if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i);else for (var a = s(t).parents(), o = 0; o < a.length; o += 1) {
            s(a[o]).is(r) && n.apply(a[o], i);
          }
        }
      }

      function d(e) {
        var t = e && e.target ? e.target.dom7EventData || [] : [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }

      "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);

      for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (r) for (h = 0; h < p.length; h += 1) {
          var v = p[h];
          u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
            listener: n,
            proxyListener: l
          }), u.addEventListener(v, l, o);
        } else for (h = 0; h < p.length; h += 1) {
          var f = p[h];
          u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
            listener: n,
            proxyListener: d
          }), u.addEventListener(f, d, o);
        }
      }

      return this;
    },
    off: function off() {
      for (var e, t = [], i = arguments.length; i--;) {
        t[i] = arguments[i];
      }

      var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];
      "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);

      for (var o = s.split(" "), l = 0; l < o.length; l += 1) {
        for (var d = o[l], h = 0; h < this.length; h += 1) {
          var p = this[h],
              c = void 0;
          if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length) for (var u = c.length - 1; u >= 0; u -= 1) {
            var v = c[u];
            r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      for (var i = [], s = arguments.length; s--;) {
        i[s] = arguments[s];
      }

      for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) {
        for (var o = a[n], l = 0; l < this.length; l += 1) {
          var d = this[l],
              h = void 0;

          try {
            h = new t.CustomEvent(o, {
              detail: r,
              bubbles: !0,
              cancelable: !0
            });
          } catch (t) {
            (h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r;
          }

          d.dom7EventData = i.filter(function (e, t) {
            return t > 0;
          }), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData;
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t,
          i = ["webkitTransitionEnd", "transitionend"],
          s = this;

      function a(r) {
        if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1) {
          s.off(i[t], a);
        }
      }

      if (e) for (t = 0; t < i.length; t += 1) {
        s.on(i[t], a);
      }
      return this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    offset: function offset() {
      if (this.length > 0) {
        var i = this[0],
            s = i.getBoundingClientRect(),
            a = e.body,
            r = i.clientTop || a.clientTop || 0,
            n = i.clientLeft || a.clientLeft || 0,
            o = i === t ? t.scrollY : i.scrollTop,
            l = i === t ? t.scrollX : i.scrollLeft;
        return {
          top: s.top + o - r,
          left: s.left + l - n
        };
      }

      return null;
    },
    css: function css(e, i) {
      var s;

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (s = 0; s < this.length; s += 1) {
            for (var a in e) {
              this[s].style[a] = e[a];
            }
          }

          return this;
        }

        if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (s = 0; s < this.length; s += 1) {
          this[s].style[e] = i;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      if (!e) return this;

      for (var t = 0; t < this.length; t += 1) {
        if (!1 === e.call(this[t], t, this[t])) return this;
      }

      return this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;

      for (var t = 0; t < this.length; t += 1) {
        this[t].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].textContent = e;
      }

      return this;
    },
    is: function is(a) {
      var r,
          n,
          o = this[0];
      if (!o || void 0 === a) return !1;

      if ("string" == typeof a) {
        if (o.matches) return o.matches(a);
        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
        if (o.msMatchesSelector) return o.msMatchesSelector(a);

        for (r = s(a), n = 0; n < r.length; n += 1) {
          if (r[n] === o) return !0;
        }

        return !1;
      }

      if (a === e) return o === e;
      if (a === t) return o === t;

      if (a.nodeType || a instanceof i) {
        for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1) {
          if (r[n] === o) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t,
          s = this.length;
      return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]]);
    },
    append: function append() {
      for (var t, s = [], a = arguments.length; a--;) {
        s[a] = arguments[a];
      }

      for (var r = 0; r < s.length; r += 1) {
        t = s[r];

        for (var n = 0; n < this.length; n += 1) {
          if ("string" == typeof t) {
            var o = e.createElement("div");

            for (o.innerHTML = t; o.firstChild;) {
              this[n].appendChild(o.firstChild);
            }
          } else if (t instanceof i) for (var l = 0; l < t.length; l += 1) {
            this[n].appendChild(t[l]);
          } else this[n].appendChild(t);
        }
      }

      return this;
    },
    prepend: function prepend(t) {
      var s, a;

      for (s = 0; s < this.length; s += 1) {
        if ("string" == typeof t) {
          var r = e.createElement("div");

          for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) {
            this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]);
          }
        } else if (t instanceof i) for (a = 0; a < t.length; a += 1) {
          this[s].insertBefore(t[a], this[s].childNodes[0]);
        } else this[s].insertBefore(t, this[s].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([]);
    },
    nextAll: function nextAll(e) {
      var t = [],
          a = this[0];
      if (!a) return new i([]);

      for (; a.nextElementSibling;) {
        var r = a.nextElementSibling;
        e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
      }

      return new i(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var t = this[0];
        return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([]);
      }

      return new i([]);
    },
    prevAll: function prevAll(e) {
      var t = [],
          a = this[0];
      if (!a) return new i([]);

      for (; a.previousElementSibling;) {
        var r = a.previousElementSibling;
        e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
      }

      return new i(t);
    },
    parent: function parent(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
      }

      return s(a(t));
    },
    parents: function parents(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var r = this[i].parentNode; r;) {
          e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
        }
      }

      return s(a(t));
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      for (var t = [], s = 0; s < this.length; s += 1) {
        for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) {
          t.push(a[r]);
        }
      }

      return new i(t);
    },
    children: function children(e) {
      for (var t = [], r = 0; r < this.length; r += 1) {
        for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) {
          e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
        }
      }

      return new i(a(t));
    },
    remove: function remove() {
      for (var e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }

      return this;
    },
    add: function add() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }

      var i, a;

      for (i = 0; i < e.length; i += 1) {
        var r = s(e[i]);

        for (a = 0; a < r.length; a += 1) {
          this[this.length] = r[a], this.length += 1;
        }
      }

      return this;
    },
    styles: function styles() {
      return this[0] ? t.getComputedStyle(this[0], null) : {};
    }
  };
  Object.keys(r).forEach(function (e) {
    s.fn[e] = r[e];
  });

  var n,
      o,
      l,
      d = {
    deleteProps: function deleteProps(e) {
      var t = e;
      Object.keys(t).forEach(function (e) {
        try {
          t[e] = null;
        } catch (e) {}

        try {
          delete t[e];
        } catch (e) {}
      });
    },
    nextTick: function nextTick(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(e, i) {
      var s, a, r;
      void 0 === i && (i = "x");
      var n = t.getComputedStyle(e, null);
      return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0;
    },
    parseUrlQuery: function parseUrlQuery(e) {
      var i,
          s,
          a,
          r,
          n = {},
          o = e || t.location.href;
      if ("string" == typeof o && o.length) for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
        return "" !== e;
      })).length, i = 0; i < r; i += 1) {
        a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
      }
      return n;
    },
    isObject: function isObject(e) {
      return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
    },
    extend: function extend() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }

      for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
        var a = e[s];
        if (void 0 !== a && null !== a) for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
          var l = r[n],
              h = Object.getOwnPropertyDescriptor(a, l);
          void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {}, d.extend(i[l], a[l])) : i[l] = a[l]);
        }
      }

      return i;
    }
  },
      h = (l = e.createElement("div"), {
    touch: t.Modernizr && !0 === t.Modernizr.touch || !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
    pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent),
    prefixedPointerEvents: !!t.navigator.msPointerEnabled,
    transition: (o = l.style, "transition" in o || "webkitTransition" in o || "MozTransition" in o),
    transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (n = l.style, "webkitPerspective" in n || "MozPerspective" in n || "OPerspective" in n || "MsPerspective" in n || "perspective" in n),
    flexbox: function () {
      for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1) {
        if (t[i] in e) return !0;
      }

      return !1;
    }(),
    observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
    passiveListener: function () {
      var e = !1;

      try {
        var i = Object.defineProperty({}, "passive", {
          get: function get() {
            e = !0;
          }
        });
        t.addEventListener("testPassiveListener", null, i);
      } catch (e) {}

      return e;
    }(),
    gestures: "ongesturestart" in t
  }),
      p = function p(e) {
    void 0 === e && (e = {});
    var t = this;
    t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
      t.on(e, t.params.on[e]);
    });
  },
      c = {
    components: {
      configurable: !0
    }
  };

  p.prototype.on = function (e, t, i) {
    var s = this;
    if ("function" != typeof t) return s;
    var a = i ? "unshift" : "push";
    return e.split(" ").forEach(function (e) {
      s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
    }), s;
  }, p.prototype.once = function (e, t, i) {
    var s = this;
    if ("function" != typeof t) return s;
    return s.on(e, function i() {
      for (var a = [], r = arguments.length; r--;) {
        a[r] = arguments[r];
      }

      t.apply(s, a), s.off(e, i);
    }, i);
  }, p.prototype.off = function (e, t) {
    var i = this;
    return i.eventsListeners ? (e.split(" ").forEach(function (e) {
      void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function (s, a) {
        s === t && i.eventsListeners[e].splice(a, 1);
      });
    }), i) : i;
  }, p.prototype.emit = function () {
    for (var e = [], t = arguments.length; t--;) {
      e[t] = arguments[t];
    }

    var i,
        s,
        a,
        r = this;
    return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
      if (r.eventsListeners && r.eventsListeners[e]) {
        var t = [];
        r.eventsListeners[e].forEach(function (e) {
          t.push(e);
        }), t.forEach(function (e) {
          e.apply(a, s);
        });
      }
    }), r) : r;
  }, p.prototype.useModulesParams = function (e) {
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function (i) {
      var s = t.modules[i];
      s.params && d.extend(e, s.params);
    });
  }, p.prototype.useModules = function (e) {
    void 0 === e && (e = {});
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function (i) {
      var s = t.modules[i],
          a = e[i] || {};
      s.instance && Object.keys(s.instance).forEach(function (e) {
        var i = s.instance[e];
        t[e] = "function" == typeof i ? i.bind(t) : i;
      }), s.on && t.on && Object.keys(s.on).forEach(function (e) {
        t.on(e, s.on[e]);
      }), s.create && s.create.bind(t)(a);
    });
  }, c.components.set = function (e) {
    this.use && this.use(e);
  }, p.installModule = function (e) {
    for (var t = [], i = arguments.length - 1; i-- > 0;) {
      t[i] = arguments[i + 1];
    }

    var s = this;
    s.prototype.modules || (s.prototype.modules = {});
    var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
    return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
      s.prototype[t] = e.proto[t];
    }), e["static"] && Object.keys(e["static"]).forEach(function (t) {
      s[t] = e["static"][t];
    }), e.install && e.install.apply(s, t), s;
  }, p.use = function (e) {
    for (var t = [], i = arguments.length - 1; i-- > 0;) {
      t[i] = arguments[i + 1];
    }

    var s = this;
    return Array.isArray(e) ? (e.forEach(function (e) {
      return s.installModule(e);
    }), s) : s.installModule.apply(s, [e].concat(t));
  }, Object.defineProperties(p, c);
  var u = {
    updateSize: function updateSize() {
      var e,
          t,
          i = this.$el;
      e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, {
        width: e,
        height: t,
        size: this.isHorizontal() ? e : t
      }));
    },
    updateSlides: function updateSlides() {
      var e = this.params,
          i = this.$wrapperEl,
          s = this.size,
          a = this.rtlTranslate,
          r = this.wrongRTL,
          n = this.virtual && e.virtual.enabled,
          o = n ? this.virtual.slides.length : this.slides.length,
          l = i.children("." + this.params.slideClass),
          p = n ? this.virtual.slides.length : l.length,
          c = [],
          u = [],
          v = [],
          f = e.slidesOffsetBefore;
      "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
      var m = e.slidesOffsetAfter;
      "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
      var g = this.snapGrid.length,
          b = this.snapGrid.length,
          w = e.spaceBetween,
          y = -f,
          x = 0,
          E = 0;

      if (void 0 !== s) {
        var T, S;
        "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, a ? l.css({
          marginLeft: "",
          marginTop: ""
        }) : l.css({
          marginRight: "",
          marginBottom: ""
        }), e.slidesPerColumn > 1 && (T = Math.floor(p / e.slidesPerColumn) === p / this.params.slidesPerColumn ? p : Math.ceil(p / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (T = Math.max(T, e.slidesPerView * e.slidesPerColumn)));

        for (var C, M = e.slidesPerColumn, z = T / M, k = z - (e.slidesPerColumn * z - p), P = 0; P < p; P += 1) {
          S = 0;
          var $ = l.eq(P);

          if (e.slidesPerColumn > 1) {
            var L = void 0,
                I = void 0,
                D = void 0;
            "column" === e.slidesPerColumnFill ? (D = P - (I = Math.floor(P / M)) * M, (I > k || I === k && D === M - 1) && (D += 1) >= M && (D = 0, I += 1), L = I + D * T / M, $.css({
              "-webkit-box-ordinal-group": L,
              "-moz-box-ordinal-group": L,
              "-ms-flex-order": L,
              "-webkit-order": L,
              order: L
            })) : I = P - (D = Math.floor(P / z)) * z, $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", I).attr("data-swiper-row", D);
          }

          if ("none" !== $.css("display")) {
            if ("auto" === e.slidesPerView) {
              var O = t.getComputedStyle($[0], null),
                  A = $[0].style.transform,
                  G = $[0].style.webkitTransform;
              A && ($[0].style.transform = "none"), G && ($[0].style.webkitTransform = "none"), S = this.isHorizontal() ? $[0].getBoundingClientRect().width + parseFloat(O.getPropertyValue("margin-left")) + parseFloat(O.getPropertyValue("margin-right")) : $[0].getBoundingClientRect().height + parseFloat(O.getPropertyValue("margin-top")) + parseFloat(O.getPropertyValue("margin-bottom")), A && ($[0].style.transform = A), G && ($[0].style.webkitTransform = G), e.roundLengths && (S = Math.floor(S));
            } else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), l[P] && (this.isHorizontal() ? l[P].style.width = S + "px" : l[P].style.height = S + "px");

            l[P] && (l[P].swiperSlideSize = S), v.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== P && (y = y - s / 2 - w), 0 === P && (y = y - s / 2 - w), Math.abs(y) < .001 && (y = 0), E % e.slidesPerGroup == 0 && c.push(y), u.push(y)) : (E % e.slidesPerGroup == 0 && c.push(y), u.push(y), y = y + S + w), this.virtualSize += S + w, x = S, E += 1;
          }
        }

        if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
          width: this.virtualSize + e.spaceBetween + "px"
        }), h.flexbox && !e.setWrapperSize || (this.isHorizontal() ? i.css({
          width: this.virtualSize + e.spaceBetween + "px"
        }) : i.css({
          height: this.virtualSize + e.spaceBetween + "px"
        })), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
          width: this.virtualSize + e.spaceBetween + "px"
        }) : i.css({
          height: this.virtualSize + e.spaceBetween + "px"
        }), e.centeredSlides)) {
          C = [];

          for (var H = 0; H < c.length; H += 1) {
            c[H] < this.virtualSize + c[0] && C.push(c[H]);
          }

          c = C;
        }

        if (!e.centeredSlides) {
          C = [];

          for (var N = 0; N < c.length; N += 1) {
            c[N] <= this.virtualSize - s && C.push(c[N]);
          }

          c = C, Math.floor(this.virtualSize - s) - Math.floor(c[c.length - 1]) > 1 && c.push(this.virtualSize - s);
        }

        0 === c.length && (c = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? l.css({
          marginLeft: w + "px"
        }) : l.css({
          marginRight: w + "px"
        }) : l.css({
          marginBottom: w + "px"
        })), d.extend(this, {
          slides: l,
          snapGrid: c,
          slidesGrid: u,
          slidesSizesGrid: v
        }), p !== o && this.emit("slidesLengthChange"), c.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset();
      }
    },
    updateAutoHeight: function updateAutoHeight(e) {
      var t,
          i = [],
          s = 0;
      if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
        var a = this.activeIndex + t;
        if (a > this.slides.length) break;
        i.push(this.slides.eq(a)[0]);
      } else i.push(this.slides.eq(this.activeIndex)[0]);

      for (t = 0; t < i.length; t += 1) {
        if (void 0 !== i[t]) {
          var r = i[t].offsetHeight;
          s = r > s ? r : s;
        }
      }

      s && this.$wrapperEl.css("height", s + "px");
    },
    updateSlidesOffset: function updateSlidesOffset() {
      for (var e = this.slides, t = 0; t < e.length; t += 1) {
        e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
      }
    },
    updateSlidesProgress: function updateSlidesProgress(e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this.params,
          i = this.slides,
          s = this.rtlTranslate;

      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
        var a = -e;
        s && (a = e), i.removeClass(t.slideVisibleClass);

        for (var r = 0; r < i.length; r += 1) {
          var n = i[r],
              o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);

          if (t.watchSlidesVisibility) {
            var l = -(a - n.swiperSlideOffset),
                d = l + this.slidesSizesGrid[r];
            (l >= 0 && l < this.size || d > 0 && d <= this.size || l <= 0 && d >= this.size) && i.eq(r).addClass(t.slideVisibleClass);
          }

          n.progress = s ? -o : o;
        }
      }
    },
    updateProgress: function updateProgress(e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this.params,
          i = this.maxTranslate() - this.minTranslate(),
          s = this.progress,
          a = this.isBeginning,
          r = this.isEnd,
          n = a,
          o = r;
      0 === i ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0, r = s >= 1), d.extend(this, {
        progress: s,
        isBeginning: a,
        isEnd: r
      }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), a && !n && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (n && !a || o && !r) && this.emit("fromEdge"), this.emit("progress", s);
    },
    updateSlidesClasses: function updateSlidesClasses() {
      var e,
          t = this.slides,
          i = this.params,
          s = this.$wrapperEl,
          a = this.activeIndex,
          r = this.realIndex,
          n = this.virtual && i.virtual.enabled;
      t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
      var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
      var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
      i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
    },
    updateActiveIndex: function updateActiveIndex(e) {
      var t,
          i = this.rtlTranslate ? this.translate : -this.translate,
          s = this.slidesGrid,
          a = this.snapGrid,
          r = this.params,
          n = this.activeIndex,
          o = this.realIndex,
          l = this.snapIndex,
          h = e;

      if (void 0 === h) {
        for (var p = 0; p < s.length; p += 1) {
          void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
        }

        r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
      }

      if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== n) {
        var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
        d.extend(this, {
          snapIndex: t,
          realIndex: c,
          previousIndex: n,
          activeIndex: h
        }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== c && this.emit("realIndexChange"), this.emit("slideChange");
      } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"));
    },
    updateClickedSlide: function updateClickedSlide(e) {
      var t = this.params,
          i = s(e.target).closest("." + t.slideClass)[0],
          a = !1;
      if (i) for (var r = 0; r < this.slides.length; r += 1) {
        this.slides[r] === i && (a = !0);
      }
      if (!i || !a) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
      this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
    }
  };
  var v = {
    getTranslate: function getTranslate(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
          i = this.rtlTranslate,
          s = this.translate,
          a = this.$wrapperEl;
      if (t.virtualTranslate) return i ? -s : s;
      var r = d.getTranslate(a[0], e);
      return i && (r = -r), r || 0;
    },
    setTranslate: function setTranslate(e, t) {
      var i = this.rtlTranslate,
          s = this.params,
          a = this.$wrapperEl,
          r = this.progress,
          n = 0,
          o = 0;
      this.isHorizontal() ? n = i ? -e : e : o = e, s.roundLengths && (n = Math.floor(n), o = Math.floor(o)), s.virtualTranslate || (h.transforms3d ? a.transform("translate3d(" + n + "px, " + o + "px, 0px)") : a.transform("translate(" + n + "px, " + o + "px)")), this.translate = this.isHorizontal() ? n : o;
      var l = this.maxTranslate() - this.minTranslate();
      (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
    },
    minTranslate: function minTranslate() {
      return -this.snapGrid[0];
    },
    maxTranslate: function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }
  };
  var f = {
    setTransition: function setTransition(e, t) {
      this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    },
    transitionStart: function transitionStart(e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
          s = this.params,
          a = this.previousIndex;
      s.autoHeight && this.updateAutoHeight();
      var r = t;

      if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
        if ("reset" === r) return void this.emit("slideResetTransitionStart");
        this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
      }
    },
    transitionEnd: function transitionEnd(e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
          s = this.previousIndex;
      this.animating = !1, this.setTransition(0);
      var a = t;

      if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
        if ("reset" === a) return void this.emit("slideResetTransitionEnd");
        this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
      }
    }
  };
  var m = {
    slideTo: function slideTo(e, t, i, s) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
      var a = this,
          r = e;
      r < 0 && (r = 0);
      var n = a.params,
          o = a.snapGrid,
          l = a.slidesGrid,
          d = a.previousIndex,
          p = a.activeIndex,
          c = a.rtlTranslate;
      if (a.animating && n.preventIntercationOnTransition) return !1;
      var u = Math.floor(r / n.slidesPerGroup);
      u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
      var v,
          f = -o[u];
      if (a.updateProgress(f), n.normalizeSlideIndex) for (var m = 0; m < l.length; m += 1) {
        -Math.floor(100 * f) >= Math.floor(100 * l[m]) && (r = m);
      }

      if (a.initialized && r !== p) {
        if (!a.allowSlideNext && f < a.translate && f < a.minTranslate()) return !1;
        if (!a.allowSlidePrev && f > a.translate && f > a.maxTranslate() && (p || 0) !== r) return !1;
      }

      return v = r > p ? "next" : r < p ? "prev" : "reset", c && -f === a.translate || !c && f === a.translate ? (a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(f), "reset" !== v && (a.transitionStart(i, v), a.transitionEnd(i, v)), !1) : (0 !== t && h.transition ? (a.setTransition(t), a.setTranslate(f), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, v), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.transitionEnd(i, v));
      }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))) : (a.setTransition(0), a.setTranslate(f), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, v), a.transitionEnd(i, v)), !0);
    },
    slideToLoop: function slideToLoop(e, t, i, s) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
      var a = e;
      return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
    },
    slideNext: function slideNext(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
          a = this.animating;
      return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i);
    },
    slidePrev: function slidePrev(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
          a = this.animating,
          r = this.snapGrid,
          n = this.slidesGrid,
          o = this.rtlTranslate;

      if (s.loop) {
        if (a) return !1;
        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
      }

      var l,
          d = o ? this.translate : -this.translate,
          h = d < 0 ? -Math.floor(Math.abs(d)) : Math.floor(d),
          p = r.map(function (e) {
        return Math.floor(e);
      }),
          c = (n.map(function (e) {
        return Math.floor(e);
      }), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
      return void 0 !== c && (l = n.indexOf(c)) < 0 && (l = this.activeIndex - 1), this.slideTo(l, e, t, i);
    },
    slideReset: function slideReset(e, t, i) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
    },
    slideToClosest: function slideToClosest(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.activeIndex,
          a = Math.floor(s / this.params.slidesPerGroup);

      if (a < this.snapGrid.length - 1) {
        var r = this.rtlTranslate ? this.translate : -this.translate,
            n = this.snapGrid[a];
        r - n > (this.snapGrid[a + 1] - n) / 2 && (s = this.params.slidesPerGroup);
      }

      return this.slideTo(s, e, t, i);
    },
    slideToClickedSlide: function slideToClickedSlide() {
      var e,
          t = this,
          i = t.params,
          a = t.$wrapperEl,
          r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
          n = t.clickedIndex;

      if (i.loop) {
        if (t.animating) return;
        e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function () {
          t.slideTo(n);
        })) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function () {
          t.slideTo(n);
        })) : t.slideTo(n);
      } else t.slideTo(n);
    }
  };
  var g = {
    loopCreate: function loopCreate() {
      var t = this,
          i = t.params,
          a = t.$wrapperEl;
      a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
      var r = a.children("." + i.slideClass);

      if (i.loopFillGroupWithBlank) {
        var n = i.slidesPerGroup - r.length % i.slidesPerGroup;

        if (n !== i.slidesPerGroup) {
          for (var o = 0; o < n; o += 1) {
            var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
            a.append(l);
          }

          r = a.children("." + i.slideClass);
        }
      }

      "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
      var d = [],
          h = [];
      r.each(function (e, i) {
        var a = s(i);
        e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e);
      });

      for (var p = 0; p < h.length; p += 1) {
        a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
      }

      for (var c = d.length - 1; c >= 0; c -= 1) {
        a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
      }
    },
    loopFix: function loopFix() {
      var e,
          t = this.params,
          i = this.activeIndex,
          s = this.slides,
          a = this.loopedSlides,
          r = this.allowSlidePrev,
          n = this.allowSlideNext,
          o = this.snapGrid,
          l = this.rtlTranslate;
      this.allowSlidePrev = !0, this.allowSlideNext = !0;
      var d = -o[i] - this.getTranslate();
      i < a ? (e = s.length - 3 * a + i, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * a || i >= s.length - a) && (e = -s.length + i + a, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d));
      this.allowSlidePrev = r, this.allowSlideNext = n;
    },
    loopDestroy: function loopDestroy() {
      var e = this.$wrapperEl,
          t = this.params,
          i = this.slides;
      e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index");
    }
  };
  var b = {
    setGrabCursor: function setGrabCursor(e) {
      if (!(h.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
        var t = this.el;
        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
      }
    },
    unsetGrabCursor: function unsetGrabCursor() {
      h.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "");
    }
  };

  var w = {
    appendSlide: function appendSlide(e) {
      var t = this.$wrapperEl,
          i = this.params;
      if (i.loop && this.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var s = 0; s < e.length; s += 1) {
        e[s] && t.append(e[s]);
      } else t.append(e);
      i.loop && this.loopCreate(), i.observer && h.observer || this.update();
    },
    prependSlide: function prependSlide(e) {
      var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
      t.loop && this.loopDestroy();
      var a = s + 1;

      if ("object" == _typeof(e) && "length" in e) {
        for (var r = 0; r < e.length; r += 1) {
          e[r] && i.prepend(e[r]);
        }

        a = s + e.length;
      } else i.prepend(e);

      t.loop && this.loopCreate(), t.observer && h.observer || this.update(), this.slideTo(a, 0, !1);
    },
    addSlide: function addSlide(e, t) {
      var i = this.$wrapperEl,
          s = this.params,
          a = this.activeIndex;
      s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
      var r = this.slides.length;
      if (e <= 0) this.prependSlide(t);else if (e >= r) this.appendSlide(t);else {
        for (var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1) {
          var d = this.slides.eq(l);
          d.remove(), o.unshift(d);
        }

        if ("object" == _typeof(t) && "length" in t) {
          for (var p = 0; p < t.length; p += 1) {
            t[p] && i.append(t[p]);
          }

          n = a > e ? a + t.length : a;
        } else i.append(t);

        for (var c = 0; c < o.length; c += 1) {
          i.append(o[c]);
        }

        s.loop && this.loopCreate(), s.observer && h.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
      }
    },
    removeSlide: function removeSlide(e) {
      var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
      t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
      var a,
          r = s;

      if ("object" == _typeof(e) && "length" in e) {
        for (var n = 0; n < e.length; n += 1) {
          a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
        }

        r = Math.max(r, 0);
      } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);

      t.loop && this.loopCreate(), t.observer && h.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
    },
    removeAllSlides: function removeAllSlides() {
      for (var e = [], t = 0; t < this.slides.length; t += 1) {
        e.push(t);
      }

      this.removeSlide(e);
    }
  },
      y = function () {
    var i = t.navigator.userAgent,
        s = {
      ios: !1,
      android: !1,
      androidChrome: !1,
      desktop: !1,
      windows: !1,
      iphone: !1,
      ipod: !1,
      ipad: !1,
      cordova: t.cordova || t.phonegap,
      phonegap: t.cordova || t.phonegap
    },
        a = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        r = i.match(/(Android);?[\s\/]+([\d.]+)?/),
        n = i.match(/(iPad).*OS\s([\d_]+)/),
        o = i.match(/(iPod)(.*OS\s([\d_]+))?/),
        l = !n && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);

    if (a && (s.os = "windows", s.osVersion = a[2], s.windows = !0), r && !a && (s.os = "android", s.osVersion = r[2], s.android = !0, s.androidChrome = i.toLowerCase().indexOf("chrome") >= 0), (n || l || o) && (s.os = "ios", s.ios = !0), l && !o && (s.osVersion = l[2].replace(/_/g, "."), s.iphone = !0), n && (s.osVersion = n[2].replace(/_/g, "."), s.ipad = !0), o && (s.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, s.iphone = !0), s.ios && s.osVersion && i.indexOf("Version/") >= 0 && "10" === s.osVersion.split(".")[0] && (s.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), s.desktop = !(s.os || s.android || s.webView), s.webView = (l || n || o) && i.match(/.*AppleWebKit(?!.*Safari)/i), s.os && "ios" === s.os) {
      var d = s.osVersion.split("."),
          h = e.querySelector('meta[name="viewport"]');
      s.minimalUi = !s.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0;
    }

    return s.pixelRatio = t.devicePixelRatio || 1, s;
  }();

  function x() {
    var e = this.params,
        t = this.el;

    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
          s = this.allowSlidePrev,
          a = this.snapGrid;

      if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
        var r = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
        this.setTranslate(r), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight();
      } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);

      this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
    }
  }

  var E = {
    attachEvents: function attachEvents() {
      var i = this.params,
          a = this.touchEvents,
          r = this.el,
          n = this.wrapperEl;
      this.onTouchStart = function (i) {
        var a = this.touchEventsData,
            r = this.params,
            n = this.touches;

        if (!this.animating || !r.preventIntercationOnTransition) {
          var o = i;
          if (o.originalEvent && (o = o.originalEvent), a.isTouchEvent = "touchstart" === o.type, (a.isTouchEvent || !("which" in o) || 3 !== o.which) && (!a.isTouched || !a.isMoved)) if (r.noSwiping && s(o.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;else if (!r.swipeHandler || s(o).closest(r.swipeHandler)[0]) {
            n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
            var l = n.currentX,
                h = n.currentY;

            if (!y.ios || y.cordova || !r.iOSEdgeSwipeDetection || !(l <= r.iOSEdgeSwipeThreshold || l >= t.screen.width - r.iOSEdgeSwipeThreshold)) {
              if (d.extend(a, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
              }), n.startX = l, n.startY = h, a.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== o.type) {
                var p = !0;
                s(o.target).is(a.formElements) && (p = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== o.target && e.activeElement.blur(), p && this.allowTouchMove && o.preventDefault();
              }

              this.emit("touchStart", o);
            }
          }
        }
      }.bind(this), this.onTouchMove = function (t) {
        var i = this.touchEventsData,
            a = this.params,
            r = this.touches,
            n = this.rtlTranslate,
            o = t;

        if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
          if (!i.isTouchEvent || "mousemove" !== o.type) {
            var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                h = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
            if (o.preventedByNestedSwiper) return r.startX = l, void (r.startY = h);
            if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (d.extend(r, {
              startX: l,
              startY: h,
              currentX: l,
              currentY: h
            }), i.touchStartTime = d.now()));
            if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (this.isVertical()) {
              if (h < r.startY && this.translate <= this.maxTranslate() || h > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
            } else if (l < r.startX && this.translate <= this.maxTranslate() || l > r.startX && this.translate >= this.minTranslate()) return;
            if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && s(o.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);

            if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
              r.currentX = l, r.currentY = h;
              var p,
                  c = r.currentX - r.startX,
                  u = r.currentY - r.startY;
              if (void 0 === i.isScrolling && (this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (p = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
                this.allowClick = !1, o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;
                var v = this.isHorizontal() ? c : u;
                r.diff = v, v *= a.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                var f = !0,
                    m = a.resistanceRatio;

                if (a.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))), f && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                  if (!(Math.abs(v) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                  if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
                }

                a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                  position: r[this.isHorizontal() ? "startX" : "startY"],
                  time: i.touchStartTime
                }), i.velocities.push({
                  position: r[this.isHorizontal() ? "currentX" : "currentY"],
                  time: d.now()
                })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
              }
            }
          }
        } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o);
      }.bind(this), this.onTouchEnd = function (e) {
        var t = this,
            i = t.touchEventsData,
            s = t.params,
            a = t.touches,
            r = t.rtlTranslate,
            n = t.$wrapperEl,
            o = t.slidesGrid,
            l = t.snapGrid,
            h = e;
        if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p,
            c = d.now(),
            u = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap", h), u < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(function () {
          t && !t.destroyed && t.emit("click", h);
        }, 300)), u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", h))), i.lastClickTime = d.now(), d.nextTick(function () {
          t.destroyed || (t.allowClick = !0);
        }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);

        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
          if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));

          if (s.freeModeMomentum) {
            if (i.velocities.length > 1) {
              var v = i.velocities.pop(),
                  f = i.velocities.pop(),
                  m = v.position - f.position,
                  g = v.time - f.time;
              t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || d.now() - v.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;

            t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
            var b = 1e3 * s.freeModeMomentumRatio,
                w = t.velocity * b,
                y = t.translate + w;
            r && (y = -y);
            var x,
                E,
                T = !1,
                S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
            if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (E = !0);else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (E = !0);else if (s.freeModeSticky) {
              for (var C, M = 0; M < l.length; M += 1) {
                if (l[M] > -y) {
                  C = M;
                  break;
                }
              }

              y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1]);
            }
            if (E && t.once("transitionEnd", function () {
              t.loopFix();
            }), 0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);else if (s.freeModeSticky) return void t.slideToClosest();
            s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
              t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd();
              }));
            })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses();
          } else if (s.freeModeSticky) return void t.slideToClosest();

          (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
        } else {
          for (var z = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup) {
            void 0 !== o[P + s.slidesPerGroup] ? p >= o[P] && p < o[P + s.slidesPerGroup] && (z = P, k = o[P + s.slidesPerGroup] - o[P]) : p >= o[P] && (z = P, k = o[o.length - 1] - o[o.length - 2]);
          }

          var $ = (p - o[z]) / k;

          if (u > s.longSwipesMs) {
            if (!s.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && ($ >= s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z)), "prev" === t.swipeDirection && ($ > 1 - s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z));
          } else {
            if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && t.slideTo(z + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(z);
          }
        }
      }.bind(this), this.onClick = function (e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
      }.bind(this);
      var o = "container" === i.touchEventsTarget ? r : n,
          l = !!i.nested;

      if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
        if (h.touch) {
          var p = !("touchstart" !== a.start || !h.passiveListener || !i.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          o.addEventListener(a.start, this.onTouchStart, p), o.addEventListener(a.move, this.onTouchMove, h.passiveListener ? {
            passive: !1,
            capture: l
          } : l), o.addEventListener(a.end, this.onTouchEnd, p);
        }

        (i.simulateTouch && !y.ios && !y.android || i.simulateTouch && !h.touch && y.ios) && (o.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1));
      } else o.addEventListener(a.start, this.onTouchStart, !1), e.addEventListener(a.move, this.onTouchMove, l), e.addEventListener(a.end, this.onTouchEnd, !1);

      (i.preventClicks || i.preventClicksPropagation) && o.addEventListener("click", this.onClick, !0), this.on(y.ios || y.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x, !0);
    },
    detachEvents: function detachEvents() {
      var t = this.params,
          i = this.touchEvents,
          s = this.el,
          a = this.wrapperEl,
          r = "container" === t.touchEventsTarget ? s : a,
          n = !!t.nested;

      if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
        if (h.touch) {
          var o = !("onTouchStart" !== i.start || !h.passiveListener || !t.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          r.removeEventListener(i.start, this.onTouchStart, o), r.removeEventListener(i.move, this.onTouchMove, n), r.removeEventListener(i.end, this.onTouchEnd, o);
        }

        (t.simulateTouch && !y.ios && !y.android || t.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, n), e.removeEventListener("mouseup", this.onTouchEnd, !1));
      } else r.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, n), e.removeEventListener(i.end, this.onTouchEnd, !1);

      (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off(y.ios || y.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x);
    }
  };

  var T = {
    setBreakpoint: function setBreakpoint() {
      var e = this.activeIndex,
          t = this.initialized,
          i = this.loopedSlides;
      void 0 === i && (i = 0);
      var s = this.params,
          a = s.breakpoints;

      if (a && (!a || 0 !== Object.keys(a).length)) {
        var r = this.getBreakpoint(a);

        if (r && this.currentBreakpoint !== r) {
          var n = r in a ? a[r] : this.originalParams,
              o = s.loop && n.slidesPerView !== s.slidesPerView;
          d.extend(this.params, n), d.extend(this, {
            allowTouchMove: this.params.allowTouchMove,
            allowSlideNext: this.params.allowSlideNext,
            allowSlidePrev: this.params.allowSlidePrev
          }), this.currentBreakpoint = r, o && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", n);
        }
      }
    },
    getBreakpoint: function getBreakpoint(e) {
      if (e) {
        var i = !1,
            s = [];
        Object.keys(e).forEach(function (e) {
          s.push(e);
        }), s.sort(function (e, t) {
          return parseInt(e, 10) - parseInt(t, 10);
        });

        for (var a = 0; a < s.length; a += 1) {
          var r = s[a];
          r >= t.innerWidth && !i && (i = r);
        }

        return i || "max";
      }
    }
  },
      S = function () {
    return {
      isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
      isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
    };
    var e;
  }();

  var C = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    preventIntercationOnTransition: !1,
    iOSEdgeSwipeDetection: !1,
    iOSEdgeSwipeThreshold: 20,
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: !0,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: !1,
    freeModeMinimumVelocity: .02,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    centeredSlides: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    watchOverflow: !1,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !0,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    watchSlidesVisibility: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-container-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0
  },
      M = {
    update: u,
    translate: v,
    transition: f,
    slide: m,
    loop: g,
    grabCursor: b,
    manipulation: w,
    events: E,
    breakpoints: T,
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this.isLocked;
        this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update());
      }
    },
    classes: {
      addClasses: function addClasses() {
        var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = [];
        a.push(t.direction), t.freeMode && a.push("free-mode"), h.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), y.android && a.push("android"), y.ios && a.push("ios"), S.isIE && (h.pointerEvents || h.prefixedPointerEvents) && a.push("wp8-" + t.direction), a.forEach(function (i) {
          e.push(t.containerModifierClass + i);
        }), s.addClass(e.join(" "));
      },
      removeClasses: function removeClasses() {
        var e = this.$el,
            t = this.classNames;
        e.removeClass(t.join(" "));
      }
    },
    images: {
      loadImage: function loadImage(e, i, s, a, r, n) {
        var o;

        function l() {
          n && n();
        }

        e.complete && r ? l() : i ? ((o = new t.Image()).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
          var s = e.imagesToLoad[i];
          e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      z = {},
      k = function (e) {
    function t() {
      for (var i, a, r, n = [], o = arguments.length; o--;) {
        n[o] = arguments[o];
      }

      1 === n.length && n[0].constructor && n[0].constructor === Object ? r = n[0] : (a = (i = n)[0], r = i[1]), r || (r = {}), r = d.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(M).forEach(function (e) {
        Object.keys(M[e]).forEach(function (i) {
          t.prototype[i] || (t.prototype[i] = M[e][i]);
        });
      });
      var l = this;
      void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) {
        var t = l.modules[e];

        if (t.params) {
          var i = Object.keys(t.params)[0],
              s = t.params[i];
          if ("object" != _typeof(s)) return;
          if (!(i in r && "enabled" in s)) return;
          !0 === r[i] && (r[i] = {
            enabled: !0
          }), "object" != _typeof(r[i]) || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
            enabled: !1
          });
        }
      });
      var p = d.extend({}, C);
      l.useModulesParams(p), l.params = d.extend({}, p, z, r), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, r), l.$ = s;
      var c = s(l.params.el);

      if (a = c[0]) {
        if (c.length > 1) {
          var u = [];
          return c.each(function (e, i) {
            var s = d.extend({}, r, {
              el: i
            });
            u.push(new t(s));
          }), u;
        }

        a.swiper = l, c.data("swiper", l);
        var v,
            f,
            m = c.children("." + l.params.wrapperClass);
        return d.extend(l, {
          $el: c,
          el: a,
          $wrapperEl: m,
          wrapperEl: m[0],
          classNames: [],
          slides: s(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function isHorizontal() {
            return "horizontal" === l.params.direction;
          },
          isVertical: function isVertical() {
            return "vertical" === l.params.direction;
          },
          rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
          rtlTranslate: "horizontal" === l.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
          wrongRTL: "-webkit-box" === m.css("display"),
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: l.params.allowSlideNext,
          allowSlidePrev: l.params.allowSlidePrev,
          touchEvents: (v = ["touchstart", "touchmove", "touchend"], f = ["mousedown", "mousemove", "mouseup"], h.pointerEvents ? f = ["pointerdown", "pointermove", "pointerup"] : h.prefixedPointerEvents && (f = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
            start: v[0],
            move: v[1],
            end: v[2]
          }, l.touchEventsDesktop = {
            start: f[0],
            move: f[1],
            end: f[2]
          }, h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            formElements: "input, select, option, textarea, button, video",
            lastClickTime: d.now(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: l.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), l.useModules(), l.params.init && l.init(), l;
      }
    }

    e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
    var i = {
      extendedDefaults: {
        configurable: !0
      },
      defaults: {
        configurable: !0
      },
      Class: {
        configurable: !0
      },
      $: {
        configurable: !0
      }
    };
    return t.prototype.slidesPerViewDynamic = function () {
      var e = this.params,
          t = this.slides,
          i = this.slidesGrid,
          s = this.size,
          a = this.activeIndex,
          r = 1;

      if (e.centeredSlides) {
        for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) {
          t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
        }

        for (var d = a - 1; d >= 0; d -= 1) {
          t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0));
        }
      } else for (var h = a + 1; h < t.length; h += 1) {
        i[h] - i[a] < s && (r += 1);
      }

      return r;
    }, t.prototype.update = function () {
      var e = this;

      if (e && !e.destroyed) {
        var t = e.snapGrid,
            i = e.params;
        i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }

      function s() {
        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
    }, t.prototype.init = function () {
      this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"));
    }, t.prototype.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      var i = this,
          s = i.params,
          a = i.$el,
          r = i.$wrapperEl,
          n = i.slides;
      return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
        i.off(e);
      }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0, null);
    }, t.extendDefaults = function (e) {
      d.extend(z, e);
    }, i.extendedDefaults.get = function () {
      return z;
    }, i.defaults.get = function () {
      return C;
    }, i.Class.get = function () {
      return e;
    }, i.$.get = function () {
      return s;
    }, Object.defineProperties(t, i), t;
  }(p),
      P = {
    name: "device",
    proto: {
      device: y
    },
    "static": {
      device: y
    }
  },
      $ = {
    name: "support",
    proto: {
      support: h
    },
    "static": {
      support: h
    }
  },
      L = {
    name: "browser",
    proto: {
      browser: S
    },
    "static": {
      browser: S
    }
  },
      I = {
    name: "resize",
    create: function create() {
      var e = this;
      d.extend(e, {
        resize: {
          resizeHandler: function resizeHandler() {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          },
          orientationChangeHandler: function orientationChangeHandler() {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init: function init() {
        t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
      }
    }
  },
      D = {
    func: t.MutationObserver || t.WebkitMutationObserver,
    attach: function attach(e, t) {
      void 0 === t && (t = {});
      var i = this,
          s = new (0, D.func)(function (e) {
        e.forEach(function (e) {
          i.emit("observerUpdate", e);
        });
      });
      s.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), i.observer.observers.push(s);
    },
    init: function init() {
      if (h.observer && this.params.observer) {
        if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) {
          this.observer.attach(e[t]);
        }
        this.observer.attach(this.$el[0], {
          childList: !1
        }), this.observer.attach(this.$wrapperEl[0], {
          attributes: !1
        });
      }
    },
    destroy: function destroy() {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    }
  },
      O = {
    name: "observer",
    params: {
      observer: !1,
      observeParents: !1
    },
    create: function create() {
      d.extend(this, {
        observer: {
          init: D.init.bind(this),
          attach: D.attach.bind(this),
          destroy: D.destroy.bind(this),
          observers: []
        }
      });
    },
    on: {
      init: function init() {
        this.observer.init();
      },
      destroy: function destroy() {
        this.observer.destroy();
      }
    }
  },
      A = {
    update: function update(e) {
      var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          n = t.virtual,
          o = n.from,
          l = n.to,
          h = n.slides,
          p = n.slidesGrid,
          c = n.renderSlide,
          u = n.offset;
      t.updateActiveIndex();
      var v,
          f,
          m,
          g = t.activeIndex || 0;
      v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + a, m = Math.floor(s / 2) + a) : (f = s + (a - 1), m = a);
      var b = Math.max((g || 0) - m, 0),
          w = Math.min((g || 0) + f, h.length - 1),
          y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

      function x() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }

      if (d.extend(t.virtual, {
        from: b,
        to: w,
        offset: y,
        slidesGrid: t.slidesGrid
      }), o === b && l === w && !e) return t.slidesGrid !== p && y !== u && t.slides.css(v, y + "px"), void t.updateProgress();
      if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
        offset: y,
        from: b,
        to: w,
        slides: function () {
          for (var e = [], t = b; t <= w; t += 1) {
            e.push(h[t]);
          }

          return e;
        }()
      }), void x();
      var E = [],
          T = [];
      if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var S = o; S <= l; S += 1) {
        (S < b || S > w) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
      }

      for (var C = 0; C < h.length; C += 1) {
        C >= b && C <= w && (void 0 === l || e ? T.push(C) : (C > l && T.push(C), C < o && E.push(C)));
      }

      T.forEach(function (e) {
        t.$wrapperEl.append(c(h[e], e));
      }), E.sort(function (e, t) {
        return e < t;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(c(h[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(v, y + "px"), x();
    },
    renderSlide: function renderSlide(e, t) {
      var i = this.params.virtual;
      if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
      var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
      return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a;
    },
    appendSlide: function appendSlide(e) {
      this.virtual.slides.push(e), this.virtual.update(!0);
    },
    prependSlide: function prependSlide(e) {
      if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
        var t = this.virtual.cache,
            i = {};
        Object.keys(t).forEach(function (e) {
          i[e + 1] = t[e];
        }), this.virtual.cache = i;
      }

      this.virtual.update(!0), this.slideNext(0);
    }
  },
      G = {
    name: "virtual",
    params: {
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null
      }
    },
    create: function create() {
      d.extend(this, {
        virtual: {
          update: A.update.bind(this),
          appendSlide: A.appendSlide.bind(this),
          prependSlide: A.prependSlide.bind(this),
          renderSlide: A.renderSlide.bind(this),
          slides: this.params.virtual.slides,
          cache: {}
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        if (this.params.virtual.enabled) {
          this.classNames.push(this.params.containerModifierClass + "virtual");
          var e = {
            watchSlidesProgress: !0
          };
          d.extend(this.params, e), d.extend(this.originalParams, e), this.virtual.update();
        }
      },
      setTranslate: function setTranslate() {
        this.params.virtual.enabled && this.virtual.update();
      }
    }
  },
      H = {
    handle: function handle(i) {
      var s = this.rtlTranslate,
          a = i;
      a.originalEvent && (a = a.originalEvent);
      var r = a.keyCode || a.charCode;
      if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r)) return !1;
      if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r)) return !1;

      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
        if (this.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
          var n = !1;
          if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
          var o = t.innerWidth,
              l = t.innerHeight,
              d = this.$el.offset();
          s && (d.left -= this.$el[0].scrollLeft);

          for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) {
            var c = h[p];
            c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0);
          }

          if (!n) return;
        }

        this.isHorizontal() ? (37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === r && !s || 37 === r && s) && this.slideNext(), (37 === r && !s || 39 === r && s) && this.slidePrev()) : (38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === r && this.slideNext(), 38 === r && this.slidePrev()), this.emit("keyPress", r);
      }
    },
    enable: function enable() {
      this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
    },
    disable: function disable() {
      this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
    }
  },
      N = {
    name: "keyboard",
    params: {
      keyboard: {
        enabled: !1,
        onlyInViewport: !0
      }
    },
    create: function create() {
      d.extend(this, {
        keyboard: {
          enabled: !1,
          enable: H.enable.bind(this),
          disable: H.disable.bind(this),
          handle: H.handle.bind(this)
        }
      });
    },
    on: {
      init: function init() {
        this.params.keyboard.enabled && this.keyboard.enable();
      },
      destroy: function destroy() {
        this.keyboard.enabled && this.keyboard.disable();
      }
    }
  };

  var B = {
    lastScrollTime: d.now(),
    event: t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
      var t = "onwheel" in e;

      if (!t) {
        var i = e.createElement("div");
        i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
      }

      return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
    }() ? "wheel" : "mousewheel",
    normalize: function normalize(e) {
      var t = 0,
          i = 0,
          s = 0,
          a = 0;
      return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
        spinX: t,
        spinY: i,
        pixelX: s,
        pixelY: a
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      this.mouseEntered = !0;
    },
    handleMouseLeave: function handleMouseLeave() {
      this.mouseEntered = !1;
    },
    handle: function handle(e) {
      var i = e,
          s = this,
          a = s.params.mousewheel;
      if (!s.mouseEntered && !a.releaseOnEdges) return !0;
      i.originalEvent && (i = i.originalEvent);
      var r = 0,
          n = s.rtlTranslate ? -1 : 1,
          o = B.normalize(i);
      if (a.forceToAxis) {
        if (s.isHorizontal()) {
          if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
          r = o.pixelX * n;
        } else {
          if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
          r = o.pixelY;
        }
      } else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
      if (0 === r) return !0;

      if (a.invert && (r = -r), s.params.freeMode) {
        s.params.loop && s.loopFix();
        var l = s.getTranslate() + r * a.sensitivity,
            h = s.isBeginning,
            p = s.isEnd;
        if (l >= s.minTranslate() && (l = s.minTranslate()), l <= s.maxTranslate() && (l = s.maxTranslate()), s.setTransition(0), s.setTranslate(l), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!h && s.isBeginning || !p && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = d.nextTick(function () {
          s.slideToClosest();
        }, 300)), s.emit("scroll", i), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.stopAutoplay(), l === s.minTranslate() || l === s.maxTranslate()) return !0;
      } else {
        if (d.now() - s.mousewheel.lastScrollTime > 60) if (r < 0) {
          if (s.isEnd && !s.params.loop || s.animating) {
            if (a.releaseOnEdges) return !0;
          } else s.slideNext(), s.emit("scroll", i);
        } else if (s.isBeginning && !s.params.loop || s.animating) {
          if (a.releaseOnEdges) return !0;
        } else s.slidePrev(), s.emit("scroll", i);
        s.mousewheel.lastScrollTime = new t.Date().getTime();
      }

      return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1;
    },
    enable: function enable() {
      if (!B.event) return !1;
      if (this.mousewheel.enabled) return !1;
      var e = this.$el;
      return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(B.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
    },
    disable: function disable() {
      if (!B.event) return !1;
      if (!this.mousewheel.enabled) return !1;
      var e = this.$el;
      return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.off(B.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
    }
  },
      X = {
    update: function update() {
      var e = this.params.navigation;

      if (!this.params.loop) {
        var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
        s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
      }
    },
    init: function init() {
      var e,
          t,
          i = this,
          a = i.params.navigation;
      (a.nextEl || a.prevEl) && (a.nextEl && (e = s(a.nextEl), i.params.uniqueNavElements && "string" == typeof a.nextEl && e.length > 1 && 1 === i.$el.find(a.nextEl).length && (e = i.$el.find(a.nextEl))), a.prevEl && (t = s(a.prevEl), i.params.uniqueNavElements && "string" == typeof a.prevEl && t.length > 1 && 1 === i.$el.find(a.prevEl).length && (t = i.$el.find(a.prevEl))), e && e.length > 0 && e.on("click", function (e) {
        e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext();
      }), t && t.length > 0 && t.on("click", function (e) {
        e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev();
      }), d.extend(i.navigation, {
        $nextEl: e,
        nextEl: e && e[0],
        $prevEl: t,
        prevEl: t && t[0]
      }));
    },
    destroy: function destroy() {
      var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
      t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass));
    }
  },
      Y = {
    update: function update() {
      var e = this.rtl,
          t = this.params.pagination;

      if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var i,
            a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            r = this.pagination.$el,
            n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;

        if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
          var o,
              l,
              d,
              h = this.pagination.bullets;
          if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each(function (e, a) {
            var r = s(a),
                n = r.index();
            n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
          });else if (h.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) {
            for (var p = h.eq(o), c = h.eq(l), u = o; u <= l; u += 1) {
              h.eq(u).addClass(t.bulletActiveClass + "-main");
            }

            p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
          }

          if (t.dynamicBullets) {
            var v = Math.min(h.length, t.dynamicMainBullets + 4),
                f = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                m = e ? "right" : "left";
            h.css(this.isHorizontal() ? m : "top", f + "px");
          }
        }

        if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(n))), "progressbar" === t.type) {
          var g;
          g = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
          var b = (i + 1) / n,
              w = 1,
              y = 1;
          "horizontal" === g ? w = b : y = b, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(this.params.speed);
        }

        "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
      }
    },
    render: function render() {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            s = "";

        if ("bullets" === e.type) {
          for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) {
            e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
          }

          i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
        }

        "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
      }
    },
    init: function init() {
      var e = this,
          t = e.params.pagination;

      if (t.el) {
        var i = s(t.el);
        0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
          t.preventDefault();
          var i = s(this).index() * e.params.slidesPerGroup;
          e.params.loop && (i += e.loopedSlides), e.slideTo(i);
        }), d.extend(e.pagination, {
          $el: i,
          el: i[0]
        }));
      }
    },
    destroy: function destroy() {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.pagination.$el;
        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
      }
    }
  },
      V = {
    setTranslate: function setTranslate() {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            o = this.params.scrollbar,
            l = s,
            d = (a - s) * i;
        t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (h.transforms3d ? r.transform("translate3d(" + d + "px, 0, 0)") : r.transform("translateX(" + d + "px)"), r[0].style.width = l + "px") : (h.transforms3d ? r.transform("translate3d(0px, " + d + "px, 0)") : r.transform("translateY(" + d + "px)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
          n[0].style.opacity = 0, n.transition(400);
        }, 1e3));
      }
    },
    setTransition: function setTransition(e) {
      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
    },
    updateSize: function updateSize() {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
        t[0].style.width = "", t[0].style.height = "";
        var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            n = r * (a / this.size);
        s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), d.extend(e, {
          trackSize: a,
          divider: r,
          moveDivider: n,
          dragSize: s
        }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
      }
    },
    setDragPosition: function setDragPosition(e) {
      var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize;
      t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[this.isHorizontal() ? "left" : "top"] - r / 2) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
      var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
      this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
      this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e);
    },
    onDragMove: function onDragMove(e) {
      var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
      this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
    },
    onDragEnd: function onDragEnd(e) {
      var t = this.params.scrollbar,
          i = this.scrollbar.$el;
      this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick(function () {
        i.css("opacity", 0), i.transition(400);
      }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
    },
    enableDraggable: function enableDraggable() {
      if (this.params.scrollbar.el) {
        var t = this.scrollbar,
            i = this.touchEvents,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!h.passiveListener || !a.passiveListener) && {
          passive: !1,
          capture: !1
        },
            o = !(!h.passiveListener || !a.passiveListener) && {
          passive: !0,
          capture: !1
        };
        h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.addEventListener("mousedown", this.scrollbar.onDragStart, n), e.addEventListener("mousemove", this.scrollbar.onDragMove, n), e.addEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, o));
      }
    },
    disableDraggable: function disableDraggable() {
      if (this.params.scrollbar.el) {
        var t = this.scrollbar,
            i = this.touchEvents,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!h.passiveListener || !a.passiveListener) && {
          passive: !1,
          capture: !1
        },
            o = !(!h.passiveListener || !a.passiveListener) && {
          passive: !0,
          capture: !1
        };
        h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.scrollbar.onDragStart, n), e.removeEventListener("mousemove", this.scrollbar.onDragMove, n), e.removeEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, o));
      }
    },
    init: function init() {
      if (this.params.scrollbar.el) {
        var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            a = s(i.el);
        this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
        var r = a.find("." + this.params.scrollbar.dragClass);
        0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), d.extend(e, {
          $el: a,
          el: a[0],
          $dragEl: r,
          dragEl: r[0]
        }), i.draggable && e.enableDraggable();
      }
    },
    destroy: function destroy() {
      this.scrollbar.disableDraggable();
    }
  },
      R = {
    setTransform: function setTransform(e, t) {
      var i = this.rtl,
          a = s(e),
          r = i ? -1 : 1,
          n = a.attr("data-swiper-parallax") || "0",
          o = a.attr("data-swiper-parallax-x"),
          l = a.attr("data-swiper-parallax-y"),
          d = a.attr("data-swiper-parallax-scale"),
          h = a.attr("data-swiper-parallax-opacity");

      if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", void 0 !== h && null !== h) {
        var p = h - (h - 1) * (1 - Math.abs(t));
        a[0].style.opacity = p;
      }

      if (void 0 === d || null === d) a.transform("translate3d(" + o + ", " + l + ", 0px)");else {
        var c = d - (d - 1) * (1 - Math.abs(t));
        a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")");
      }
    },
    setTranslate: function setTranslate() {
      var e = this,
          t = e.$el,
          i = e.slides,
          a = e.progress,
          r = e.snapGrid;
      t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
        e.parallax.setTransform(i, a);
      }), i.each(function (t, i) {
        var n = i.progress;
        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
          e.parallax.setTransform(i, n);
        });
      });
    },
    setTransition: function setTransition(e) {
      void 0 === e && (e = this.params.speed);
      this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
        var a = s(i),
            r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
        0 === e && (r = 0), a.transition(r);
      });
    }
  },
      F = {
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
    },
    onGestureStart: function onGestureStart(e) {
      var t = this.params.zoom,
          i = this.zoom,
          a = i.gesture;

      if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !h.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        i.fakeGestureTouched = !0, a.scaleStart = F.getDistanceBetweenTouches(e);
      }

      a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
    },
    onGestureChange: function onGestureChange(e) {
      var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;

      if (!h.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        i.fakeGestureMoved = !0, s.scaleMove = F.getDistanceBetweenTouches(e);
      }

      s.$imageEl && 0 !== s.$imageEl.length && (h.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
    },
    onGestureEnd: function onGestureEnd(e) {
      var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;

      if (!h.gestures) {
        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !y.android) return;
        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
      }

      s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0));
    },
    onTouchStart: function onTouchStart(e) {
      var t = this.zoom,
          i = t.gesture,
          s = t.image;
      i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (y.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    },
    onTouchMove: function onTouchMove(e) {
      var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;

      if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
        var r = s.width * t.scale,
            n = s.height * t.scale;

        if (!(r < i.slideWidth && n < i.slideHeight)) {
          if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
            if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
          }

          e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;

      if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
        i.isTouched = !1, i.isMoved = !1;
        var a = 300,
            r = 300,
            n = s.x * a,
            o = i.currentX + n,
            l = s.y * r,
            d = i.currentY + l;
        0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
        var h = Math.max(a, r);
        i.currentX = o, i.currentY = d;
        var p = i.width * e.scale,
            c = i.height * e.scale;
        i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      var e = this.zoom,
          t = e.gesture;
      t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1);
    },
    toggle: function toggle(e) {
      var t = this.zoom;
      t.scale && 1 !== t.scale ? t.out() : t["in"](e);
    },
    "in": function _in(e) {
      var t,
          i,
          a,
          r,
          n,
          o,
          l,
          d,
          h,
          p,
          c,
          u,
          v,
          f,
          m,
          g,
          b = this.zoom,
          w = this.params.zoom,
          y = b.gesture,
          x = b.image;
      (y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), n = a * b.scale, o = r * b.scale, n < c && (n = c), n > v && (n = v), o < u && (o = u), o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
    },
    out: function out() {
      var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
      i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
    },
    enable: function enable() {
      var e = this.zoom;

      if (!e.enabled) {
        e.enabled = !0;
        var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        h.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove);
      }
    },
    disable: function disable() {
      var e = this.zoom;

      if (e.enabled) {
        this.zoom.enabled = !1;
        var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        h.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove);
      }
    }
  },
      W = {
    loadInSlide: function loadInSlide(e, t) {
      void 0 === t && (t = !0);
      var i = this,
          a = i.params.lazy;

      if (void 0 !== e && 0 !== i.slides.length) {
        var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
            n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
        !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function (e, n) {
          var o = s(n);
          o.addClass(a.loadingClass);
          var l = o.attr("data-background"),
              d = o.attr("data-src"),
              h = o.attr("data-srcset"),
              p = o.attr("data-sizes");
          i.loadImage(o[0], d || l, h, p, !1, function () {
            if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
              if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                var e = r.attr("data-swiper-slide-index");

                if (r.hasClass(i.params.slideDuplicateClass)) {
                  var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                  i.lazy.loadInSlide(s.index(), !1);
                } else {
                  var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                  i.lazy.loadInSlide(n.index(), !1);
                }
              }

              i.emit("lazyImageReady", r[0], o[0]);
            }
          }), i.emit("lazyImageLoad", r[0], o[0]);
        });
      }
    },
    load: function load() {
      var e = this,
          t = e.$wrapperEl,
          i = e.params,
          a = e.slides,
          r = e.activeIndex,
          n = e.virtual && i.virtual.enabled,
          o = i.lazy,
          l = i.slidesPerView;

      function d(e) {
        if (n) {
          if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
        } else if (a[e]) return !0;

        return !1;
      }

      function h(e) {
        return n ? s(e).attr("data-swiper-slide-index") : s(e).index();
      }

      if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t, i) {
        var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
        e.lazy.loadInSlide(a);
      });else if (l > 1) for (var p = r; p < r + l; p += 1) {
        d(p) && e.lazy.loadInSlide(p);
      } else e.lazy.loadInSlide(r);
      if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
        for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) {
          d(m) && e.lazy.loadInSlide(m);
        }

        for (var g = f; g < r; g += 1) {
          d(g) && e.lazy.loadInSlide(g);
        }
      } else {
        var b = t.children("." + i.slideNextClass);
        b.length > 0 && e.lazy.loadInSlide(h(b));
        var w = t.children("." + i.slidePrevClass);
        w.length > 0 && e.lazy.loadInSlide(h(w));
      }
    }
  },
      q = {
    LinearSpline: function LinearSpline(e, t) {
      var i,
          s,
          a,
          r,
          n,
          o = function o(e, t) {
        for (s = -1, i = e.length; i - s > 1;) {
          e[a = i + s >> 1] <= t ? s = a : i = a;
        }

        return i;
      };

      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
      }, this;
    },
    getInterpolateFunction: function getInterpolateFunction(e) {
      this.controller.spline || (this.controller.spline = this.params.loop ? new q.LinearSpline(this.slidesGrid, e.slidesGrid) : new q.LinearSpline(this.snapGrid, e.snapGrid));
    },
    setTranslate: function setTranslate(e, t) {
      var i,
          s,
          a = this,
          r = a.controller.control;

      function n(e) {
        var t = a.rtlTranslate ? -a.translate : a.translate;
        "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
        r[o] !== t && r[o] instanceof k && n(r[o]);
      } else r instanceof k && t !== r && n(r);
    },
    setTransition: function setTransition(e, t) {
      var i,
          s = this,
          a = s.controller.control;

      function r(t) {
        t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function () {
          a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
        }));
      }

      if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) {
        a[i] !== t && a[i] instanceof k && r(a[i]);
      } else a instanceof k && t !== a && r(a);
    }
  },
      j = {
    makeElFocusable: function makeElFocusable(e) {
      return e.attr("tabIndex", "0"), e;
    },
    addElRole: function addElRole(e, t) {
      return e.attr("role", t), e;
    },
    addElLabel: function addElLabel(e, t) {
      return e.attr("aria-label", t), e;
    },
    disableEl: function disableEl(e) {
      return e.attr("aria-disabled", !0), e;
    },
    enableEl: function enableEl(e) {
      return e.attr("aria-disabled", !1), e;
    },
    onEnterKey: function onEnterKey(e) {
      var t = this.params.a11y;

      if (13 === e.keyCode) {
        var i = s(e.target);
        this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
      }
    },
    notify: function notify(e) {
      var t = this.a11y.liveRegion;
      0 !== t.length && (t.html(""), t.html(e));
    },
    updateNavigation: function updateNavigation() {
      if (!this.params.loop) {
        var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
        i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t));
      }
    },
    updatePagination: function updatePagination() {
      var e = this,
          t = e.params.a11y;
      e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i, a) {
        var r = s(a);
        e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1));
      });
    },
    init: function init() {
      this.$el.append(this.a11y.liveRegion);
      var e,
          t,
          i = this.params.a11y;
      this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
    },
    destroy: function destroy() {
      var e, t;
      this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
    }
  },
      K = {
    init: function init() {
      if (this.params.history) {
        if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
        var e = this.history;
        e.initialized = !0, e.paths = K.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState));
      }
    },
    destroy: function destroy() {
      this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState);
    },
    setHistoryPopState: function setHistoryPopState() {
      this.history.paths = K.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
    },
    getPathValues: function getPathValues() {
      var e = t.location.pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          i = e.length;
      return {
        key: e[i - 2],
        value: e[i - 1]
      };
    },
    setHistory: function setHistory(e, i) {
      if (this.history.initialized && this.params.history.enabled) {
        var s = this.slides.eq(i),
            a = K.slugify(s.attr("data-history"));
        t.location.pathname.includes(e) || (a = e + "/" + a);
        var r = t.history.state;
        r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
          value: a
        }, null, a) : t.history.pushState({
          value: a
        }, null, a));
      }
    },
    slugify: function slugify(e) {
      return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
    scrollToSlide: function scrollToSlide(e, t, i) {
      if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
        var r = this.slides.eq(s);

        if (K.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
          var n = r.index();
          this.slideTo(n, e, i);
        }
      } else this.slideTo(0, e, i);
    }
  },
      U = {
    onHashCange: function onHashCange() {
      var t = e.location.hash.replace("#", "");
      t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index());
    },
    setHash: function setHash() {
      if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");else {
        var i = this.slides.eq(this.activeIndex),
            s = i.attr("data-hash") || i.attr("data-history");
        e.location.hash = s || "";
      }
    },
    init: function init() {
      if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
        this.hashNavigation.initialized = !0;
        var i = e.location.hash.replace("#", "");
        if (i) for (var a = 0, r = this.slides.length; a < r; a += 1) {
          var n = this.slides.eq(a);

          if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
            var o = n.index();
            this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
          }
        }
        this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange);
    }
  },
      _ = {
    run: function run() {
      var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(function () {
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
      }, i);
    },
    start: function start() {
      return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
    },
    stop: function stop() {
      return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
    },
    pause: function pause(e) {
      this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
    }
  },
      Z = {
    setTranslate: function setTranslate() {
      for (var e = this.slides, t = 0; t < e.length; t += 1) {
        var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
        this.params.virtualTranslate || (s -= this.translate);
        var a = 0;
        this.isHorizontal() || (a = s, s = 0);
        var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
        i.css({
          opacity: r
        }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          i = t.slides,
          s = t.$wrapperEl;

      if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
        var a = !1;
        i.transitionEnd(function () {
          if (!a && t && !t.destroyed) {
            a = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
              s.trigger(e[i]);
            }
          }
        });
      }
    }
  },
      Q = {
    setTranslate: function setTranslate() {
      var e,
          t = this.$el,
          i = this.$wrapperEl,
          a = this.slides,
          r = this.width,
          n = this.height,
          o = this.rtlTranslate,
          l = this.size,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          c = 0;
      d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
        height: r + "px"
      })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));

      for (var u = 0; u < a.length; u += 1) {
        var v = a.eq(u),
            f = u;
        p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
        var m = 90 * f,
            g = Math.floor(m / 360);
        o && (m = -m, g = Math.floor(-m / 360));
        var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;
        f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
        var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";

        if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) {
          var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              C = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
          0 === T.length && (T = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(T)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(C)), T.length && (T[0].style.opacity = Math.max(-b, 0)), C.length && (C[0].style.opacity = Math.max(b, 0));
        }
      }

      if (i.css({
        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
        "transform-origin": "50% 50% -" + l / 2 + "px"
      }), d.shadow) if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
        var M = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
            z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
            k = d.shadowScale,
            P = d.shadowScale / z,
            $ = d.shadowOffset;
        e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / P + "px) rotateX(-90deg)");
      }
      var L = S.isSafari || S.isUiWebView ? -l / 2 : 0;
      i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)");
    },
    setTransition: function setTransition(e) {
      var t = this.$el;
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
    }
  },
      J = {
    setTranslate: function setTranslate() {
      for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
        var a = e.eq(i),
            r = a[0].progress;
        this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
        var n = -180 * r,
            o = 0,
            l = -a[0].swiperSlideOffset,
            d = 0;

        if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
          var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
              p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
          0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0));
        }

        a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;

      if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
        var r = !1;
        i.eq(s).transitionEnd(function () {
          if (!r && t && !t.destroyed) {
            r = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
              a.trigger(e[i]);
            }
          }
        });
      }
    }
  },
      ee = {
    setTranslate: function setTranslate() {
      for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
        var f = i.eq(u),
            m = r[u],
            g = (d - f[0].swiperSlideOffset - m / 2) / m * n.modifier,
            b = o ? p * g : 0,
            w = o ? 0 : p * g,
            y = -c * Math.abs(g),
            x = o ? 0 : n.stretch * g,
            E = o ? n.stretch * g : 0;
        Math.abs(E) < .001 && (E = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
        var T = "translate3d(" + E + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";

        if (f.transform(T), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
          var S = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
              C = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
          0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0);
        }
      }

      (h.pointerEvents || h.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%");
    },
    setTransition: function setTransition(e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    }
  },
      te = [P, $, L, I, O, G, N, {
    name: "mousewheel",
    params: {
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarged: "container"
      }
    },
    create: function create() {
      d.extend(this, {
        mousewheel: {
          enabled: !1,
          enable: B.enable.bind(this),
          disable: B.disable.bind(this),
          handle: B.handle.bind(this),
          handleMouseEnter: B.handleMouseEnter.bind(this),
          handleMouseLeave: B.handleMouseLeave.bind(this),
          lastScrollTime: d.now()
        }
      });
    },
    on: {
      init: function init() {
        this.params.mousewheel.enabled && this.mousewheel.enable();
      },
      destroy: function destroy() {
        this.mousewheel.enabled && this.mousewheel.disable();
      }
    }
  }, {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    },
    create: function create() {
      d.extend(this, {
        navigation: {
          init: X.init.bind(this),
          update: X.update.bind(this),
          destroy: X.destroy.bind(this)
        }
      });
    },
    on: {
      init: function init() {
        this.navigation.init(), this.navigation.update();
      },
      toEdge: function toEdge() {
        this.navigation.update();
      },
      fromEdge: function fromEdge() {
        this.navigation.update();
      },
      destroy: function destroy() {
        this.navigation.destroy();
      },
      click: function click(e) {
        var t = this.navigation,
            i = t.$nextEl,
            a = t.$prevEl;
        !this.params.navigation.hideOnClick || s(e.target).is(a) || s(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass));
      }
    }
  }, {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        lockClass: "swiper-pagination-lock"
      }
    },
    create: function create() {
      d.extend(this, {
        pagination: {
          init: Y.init.bind(this),
          render: Y.render.bind(this),
          update: Y.update.bind(this),
          destroy: Y.destroy.bind(this),
          dynamicBulletIndex: 0
        }
      });
    },
    on: {
      init: function init() {
        this.pagination.init(), this.pagination.render(), this.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
      },
      snapIndexChange: function snapIndexChange() {
        this.params.loop || this.pagination.update();
      },
      slidesLengthChange: function slidesLengthChange() {
        this.params.loop && (this.pagination.render(), this.pagination.update());
      },
      snapGridLengthChange: function snapGridLengthChange() {
        this.params.loop || (this.pagination.render(), this.pagination.update());
      },
      destroy: function destroy() {
        this.pagination.destroy();
      },
      click: function click(e) {
        this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass);
      }
    }
  }, {
    name: "scrollbar",
    params: {
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag"
      }
    },
    create: function create() {
      d.extend(this, {
        scrollbar: {
          init: V.init.bind(this),
          destroy: V.destroy.bind(this),
          updateSize: V.updateSize.bind(this),
          setTranslate: V.setTranslate.bind(this),
          setTransition: V.setTransition.bind(this),
          enableDraggable: V.enableDraggable.bind(this),
          disableDraggable: V.disableDraggable.bind(this),
          setDragPosition: V.setDragPosition.bind(this),
          onDragStart: V.onDragStart.bind(this),
          onDragMove: V.onDragMove.bind(this),
          onDragEnd: V.onDragEnd.bind(this),
          isTouched: !1,
          timeout: null,
          dragTimeout: null
        }
      });
    },
    on: {
      init: function init() {
        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
      },
      update: function update() {
        this.scrollbar.updateSize();
      },
      resize: function resize() {
        this.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        this.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        this.scrollbar.setTranslate();
      },
      setTransition: function setTransition(e) {
        this.scrollbar.setTransition(e);
      },
      destroy: function destroy() {
        this.scrollbar.destroy();
      }
    }
  }, {
    name: "parallax",
    params: {
      parallax: {
        enabled: !1
      }
    },
    create: function create() {
      d.extend(this, {
        parallax: {
          setTransform: R.setTransform.bind(this),
          setTranslate: R.setTranslate.bind(this),
          setTransition: R.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0);
      },
      init: function init() {
        this.params.parallax && this.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        this.params.parallax && this.parallax.setTranslate();
      },
      setTransition: function setTransition(e) {
        this.params.parallax && this.parallax.setTransition(e);
      }
    }
  }, {
    name: "zoom",
    params: {
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    },
    create: function create() {
      var e = this,
          t = {
        enabled: !1,
        scale: 1,
        currentScale: 1,
        isScaling: !1,
        gesture: {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3
        },
        image: {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {}
        },
        velocity: {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0
        }
      };
      "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
        t[i] = F[i].bind(e);
      }), d.extend(e, {
        zoom: t
      });
    },
    on: {
      init: function init() {
        this.params.zoom.enabled && this.zoom.enable();
      },
      destroy: function destroy() {
        this.zoom.disable();
      },
      touchStart: function touchStart(e) {
        this.zoom.enabled && this.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        this.zoom.enabled && this.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
      },
      transitionEnd: function transitionEnd() {
        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
      }
    }
  }, {
    name: "lazy",
    params: {
      lazy: {
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    },
    create: function create() {
      d.extend(this, {
        lazy: {
          initialImageLoaded: !1,
          load: W.load.bind(this),
          loadInSlide: W.loadInSlide.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
      },
      init: function init() {
        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
      },
      scroll: function scroll() {
        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
      },
      resize: function resize() {
        this.params.lazy.enabled && this.lazy.load();
      },
      scrollbarDragMove: function scrollbarDragMove() {
        this.params.lazy.enabled && this.lazy.load();
      },
      transitionStart: function transitionStart() {
        this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load();
      },
      transitionEnd: function transitionEnd() {
        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
      }
    }
  }, {
    name: "controller",
    params: {
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    },
    create: function create() {
      d.extend(this, {
        controller: {
          control: this.params.controller.control,
          getInterpolateFunction: q.getInterpolateFunction.bind(this),
          setTranslate: q.setTranslate.bind(this),
          setTransition: q.setTransition.bind(this)
        }
      });
    },
    on: {
      update: function update() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      },
      resize: function resize() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      },
      observerUpdate: function observerUpdate() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      },
      setTranslate: function setTranslate(e, t) {
        this.controller.control && this.controller.setTranslate(e, t);
      },
      setTransition: function setTransition(e, t) {
        this.controller.control && this.controller.setTransition(e, t);
      }
    }
  }, {
    name: "a11y",
    params: {
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}"
      }
    },
    create: function create() {
      var e = this;
      d.extend(e, {
        a11y: {
          liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
        }
      }), Object.keys(j).forEach(function (t) {
        e.a11y[t] = j[t].bind(e);
      });
    },
    on: {
      init: function init() {
        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
      },
      toEdge: function toEdge() {
        this.params.a11y.enabled && this.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        this.params.a11y.enabled && this.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        this.params.a11y.enabled && this.a11y.updatePagination();
      },
      destroy: function destroy() {
        this.params.a11y.enabled && this.a11y.destroy();
      }
    }
  }, {
    name: "history",
    params: {
      history: {
        enabled: !1,
        replaceState: !1,
        key: "slides"
      }
    },
    create: function create() {
      d.extend(this, {
        history: {
          init: K.init.bind(this),
          setHistory: K.setHistory.bind(this),
          setHistoryPopState: K.setHistoryPopState.bind(this),
          scrollToSlide: K.scrollToSlide.bind(this),
          destroy: K.destroy.bind(this)
        }
      });
    },
    on: {
      init: function init() {
        this.params.history.enabled && this.history.init();
      },
      destroy: function destroy() {
        this.params.history.enabled && this.history.destroy();
      },
      transitionEnd: function transitionEnd() {
        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
      }
    }
  }, {
    name: "hash-navigation",
    params: {
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    },
    create: function create() {
      d.extend(this, {
        hashNavigation: {
          initialized: !1,
          init: U.init.bind(this),
          destroy: U.destroy.bind(this),
          setHash: U.setHash.bind(this),
          onHashCange: U.onHashCange.bind(this)
        }
      });
    },
    on: {
      init: function init() {
        this.params.hashNavigation.enabled && this.hashNavigation.init();
      },
      destroy: function destroy() {
        this.params.hashNavigation.enabled && this.hashNavigation.destroy();
      },
      transitionEnd: function transitionEnd() {
        this.hashNavigation.initialized && this.hashNavigation.setHash();
      }
    }
  }, {
    name: "autoplay",
    params: {
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1
      }
    },
    create: function create() {
      var e = this;
      d.extend(e, {
        autoplay: {
          running: !1,
          paused: !1,
          run: _.run.bind(e),
          start: _.start.bind(e),
          stop: _.stop.bind(e),
          pause: _.pause.bind(e),
          onTransitionEnd: function onTransitionEnd(t) {
            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
          }
        }
      });
    },
    on: {
      init: function init() {
        this.params.autoplay.enabled && this.autoplay.start();
      },
      beforeTransitionStart: function beforeTransitionStart(e, t) {
        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
      },
      sliderFirstMove: function sliderFirstMove() {
        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
      },
      destroy: function destroy() {
        this.autoplay.running && this.autoplay.stop();
      }
    }
  }, {
    name: "effect-fade",
    params: {
      fadeEffect: {
        crossFade: !1
      }
    },
    create: function create() {
      d.extend(this, {
        fadeEffect: {
          setTranslate: Z.setTranslate.bind(this),
          setTransition: Z.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        if ("fade" === this.params.effect) {
          this.classNames.push(this.params.containerModifierClass + "fade");
          var e = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          d.extend(this.params, e), d.extend(this.originalParams, e);
        }
      },
      setTranslate: function setTranslate() {
        "fade" === this.params.effect && this.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(e) {
        "fade" === this.params.effect && this.fadeEffect.setTransition(e);
      }
    }
  }, {
    name: "effect-cube",
    params: {
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    },
    create: function create() {
      d.extend(this, {
        cubeEffect: {
          setTranslate: Q.setTranslate.bind(this),
          setTransition: Q.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        if ("cube" === this.params.effect) {
          this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
          var e = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
          };
          d.extend(this.params, e), d.extend(this.originalParams, e);
        }
      },
      setTranslate: function setTranslate() {
        "cube" === this.params.effect && this.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(e) {
        "cube" === this.params.effect && this.cubeEffect.setTransition(e);
      }
    }
  }, {
    name: "effect-flip",
    params: {
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0
      }
    },
    create: function create() {
      d.extend(this, {
        flipEffect: {
          setTranslate: J.setTranslate.bind(this),
          setTransition: J.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        if ("flip" === this.params.effect) {
          this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
          var e = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          d.extend(this.params, e), d.extend(this.originalParams, e);
        }
      },
      setTranslate: function setTranslate() {
        "flip" === this.params.effect && this.flipEffect.setTranslate();
      },
      setTransition: function setTransition(e) {
        "flip" === this.params.effect && this.flipEffect.setTransition(e);
      }
    }
  }, {
    name: "effect-coverflow",
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: !0
      }
    },
    create: function create() {
      d.extend(this, {
        coverflowEffect: {
          setTranslate: ee.setTranslate.bind(this),
          setTransition: ee.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
      },
      setTranslate: function setTranslate() {
        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(e) {
        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
      }
    }
  }];
  return void 0 === k.use && (k.use = k.Class.use, k.installModule = k.Class.installModule), k.use(te), k;
});
/*!
 * GSAP 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {});
}(void 0, function (e) {
  "use strict";

  function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
  }

  function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function r(t) {
    return "string" == typeof t;
  }

  function s(t) {
    return "function" == typeof t;
  }

  function t(t) {
    return "number" == typeof t;
  }

  function u(t) {
    return void 0 === t;
  }

  function v(t) {
    return "object" == _typeof(t);
  }

  function w(t) {
    return !1 !== t;
  }

  function x() {
    return "undefined" != typeof window;
  }

  function y(t) {
    return s(t) || r(t);
  }

  function P(t) {
    return (i = yt(t, ot)) && Ce;
  }

  function Q(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  }

  function R(t, e) {
    return !e && console.warn(t);
  }

  function S(t, e) {
    return t && (ot[t] = e) && i && (i[t] = e) || ot;
  }

  function T() {
    return 0;
  }

  function ea(t) {
    var e,
        r,
        i = t[0];

    if (v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
      for (r = gt.length; r-- && !gt[r].targetTest(i);) {
        ;
      }

      e = gt[r];
    }

    for (r = t.length; r--;) {
      t[r] && (t[r]._gsap || (t[r]._gsap = new jt(t[r], e))) || t.splice(r, 1);
    }

    return t;
  }

  function fa(t) {
    return t._gsap || ea(Ot(t))[0]._gsap;
  }

  function ga(t, e, r) {
    return (r = t[e]) && s(r) ? t[e]() : u(r) && t.getAttribute && t.getAttribute(e) || r;
  }

  function ha(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }

  function ia(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }

  function ja(t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  }

  function ka(t, e) {
    var r = e.charAt(0),
        i = parseFloat(e.substr(2));
    return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i;
  }

  function la(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;) {
      ;
    }

    return i < r;
  }

  function ma() {
    var t,
        e,
        r = ct.length,
        i = ct.slice(0);

    for (dt = {}, t = ct.length = 0; t < r; t++) {
      (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    }
  }

  function na(t, e, r, i) {
    ct.length && !B && ma(), t.render(e, r, i || B && e < 0 && (t._initted || t._startAt)), ct.length && !B && ma();
  }

  function oa(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t;
  }

  function pa(t) {
    return t;
  }

  function qa(t, e) {
    for (var r in e) {
      r in t || (t[r] = e[r]);
    }

    return t;
  }

  function ta(t, e) {
    for (var r in e) {
      "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? ta(t[r] || (t[r] = {}), e[r]) : e[r]);
    }

    return t;
  }

  function ua(t, e) {
    var r,
        i = {};

    for (r in t) {
      r in e || (i[r] = t[r]);
    }

    return i;
  }

  function va(t) {
    var e = t.parent || L,
        r = t.keyframes ? function _setKeyframeDefaults(i) {
      return function (t, e) {
        for (var r in e) {
          r in t || "duration" === r && i || "ease" === r || (t[r] = e[r]);
        }
      };
    }($(t.keyframes)) : qa;
    if (w(t.inherit)) for (; e;) {
      r(t, e.vars.defaults), e = e.parent || e._dp;
    }
    return t;
  }

  function xa(t, e, r, i, n) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var a,
        s = t[i];
    if (n) for (a = e[n]; s && s[n] > a;) {
      s = s._prev;
    }
    return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e;
  }

  function ya(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
        a = e._next;
    n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
  }

  function za(t, e) {
    !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0;
  }

  function Aa(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r;) {
      r._dirty = 1, r = r.parent;
    }
    return t;
  }

  function Ca(t, e, r, i) {
    return t._startAt && (B ? t._startAt.revert(ht) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
  }

  function Ea(t) {
    return t._repeat ? Tt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
  }

  function Ga(t, e) {
    return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  }

  function Ha(t) {
    return t._end = ja(t._start + (t._tDur / Math.abs(t._ts || t._rts || V) || 0));
  }

  function Ia(t, e) {
    var r = t._dp;
    return r && r.smoothChildTiming && t._ts && (t._start = ja(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ha(t), r._dirty || Aa(r, t)), t;
  }

  function Ja(t, e) {
    var r;

    if ((e._time || e._initted && !e._dur) && (r = Ga(t.rawTime(), e), (!e._dur || kt(0, e.totalDuration(), r) - e._tTime > V) && e.render(r, !0)), Aa(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration()) for (r = t; r._dp;) {
        0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
      }
      t._zTime = -V;
    }
  }

  function Ka(e, r, i, n) {
    return r.parent && za(r), r._start = ja((t(i) ? i : i || e !== L ? xt(e, i, r) : e._time) + r._delay), r._end = ja(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), xa(e, r, "_first", "_last", e._sort ? "_start" : 0), bt(r) || (e._recent = r), n || Ja(e, r), e._ts < 0 && Ia(e, e._tTime), e;
  }

  function La(t, e) {
    return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t);
  }

  function Ma(t, e, r, i, n) {
    return Ht(t, e, n), t._initted ? !r && t._pt && !B && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Et.frame ? (ct.push(t), t._lazy = [n, i], 1) : void 0 : 1;
  }

  function Ra(t, e, r, i) {
    var n = t._repeat,
        a = ja(e) || 0,
        s = t._tTime / t._tDur;
    return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i && Ia(t, t._tTime = t._tDur * s), t.parent && Ha(t), r || Aa(t.parent, t), t;
  }

  function Sa(t) {
    return t instanceof Ut ? Aa(t) : Ra(t, t._dur);
  }

  function Va(e, r, i) {
    var n,
        a,
        s = t(r[1]),
        o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
        u = r[o];

    if (s && (u.duration = r[1]), u.parent = i, e) {
      for (n = u, a = i; a && !("immediateRender" in n);) {
        n = a.vars.defaults || {}, a = w(a.vars.inherit) && a.parent;
      }

      u.immediateRender = w(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1];
    }

    return new Gt(r[0], u, r[1 + o]);
  }

  function Wa(t, e) {
    return t || 0 === t ? e(t) : e;
  }

  function Ya(t, e) {
    return r(t) && (e = st.exec(t)) ? e[1] : "";
  }

  function _a(t, e) {
    return t && v(t) && "length" in t && (!e && !t.length || t.length - 1 in t && v(t[0])) && !t.nodeType && t !== h;
  }

  function cb(r) {
    return r = Ot(r)[0] || R("Invalid scope") || {}, function (t) {
      var e = r.current || r.nativeElement || r;
      return Ot(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r);
    };
  }

  function db(t) {
    return t.sort(function () {
      return .5 - Math.random();
    });
  }

  function eb(t) {
    if (s(t)) return t;

    var p = v(t) ? t : {
      each: t
    },
        _ = Yt(p.ease),
        m = p.from || 0,
        g = parseFloat(p.base) || 0,
        y = {},
        e = 0 < m && m < 1,
        T = isNaN(m) || e,
        b = p.axis,
        w = m,
        x = m;

    return r(m) ? w = x = {
      center: .5,
      edges: .5,
      end: 1
    }[m] || 0 : !e && T && (w = m[0], x = m[1]), function (t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          c = (r || p).length,
          d = y[c];

      if (!d) {
        if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, U])[1])) {
          for (h = -U; h < (h = r[f++].getBoundingClientRect().left) && f < c;) {
            ;
          }

          f--;
        }

        for (d = y[c] = [], i = T ? Math.min(f, c) * w - .5 : m % f, n = f === U ? 0 : T ? c * x / f - .5 : m / f | 0, l = U, u = h = 0; u < c; u++) {
          a = u % f - i, s = n - (u / f | 0), d[u] = o = b ? Math.abs("y" === b ? s : a) : K(a * a + s * s), h < o && (h = o), o < l && (l = o);
        }

        "random" === m && db(d), d.max = h - l, d.min = l, d.v = c = (parseFloat(p.amount) || parseFloat(p.each) * (c < f ? c - 1 : b ? "y" === b ? c / f : f : Math.max(f, c / f)) || 0) * ("edges" === m ? -1 : 1), d.b = c < 0 ? g - c : g, d.u = Ya(p.amount || p.each) || 0, _ = _ && c < 0 ? Lt(_) : _;
      }

      return c = (d[t] - d.min) / d.max || 0, ja(d.b + (_ ? _(c) : c) * d.v) + d.u;
    };
  }

  function fb(i) {
    var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
    return function (e) {
      var r = ja(Math.round(parseFloat(e) / i) * i * n);
      return (r - r % 1) / n + (t(e) ? 0 : Ya(e));
    };
  }

  function gb(h, e) {
    var l,
        f,
        r = $(h);
    return !r && v(h) && (l = r = h.radius || U, h.values ? (h = Ot(h.values), (f = !t(h[0])) && (l *= l)) : h = fb(h.increment)), Wa(e, r ? s(h) ? function (t) {
      return f = h(t), Math.abs(f - t) <= l ? f : t;
    } : function (e) {
      for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = U, o = 0, u = h.length; u--;) {
        (r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && (s = r, o = u);
      }

      return o = !l || s <= l ? h[o] : e, f || o === e || t(e) ? o : o + Ya(e);
    } : fb(h));
  }

  function hb(t, e, r, i) {
    return Wa($(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return $(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i;
    });
  }

  function lb(e, r, t) {
    return Wa(t, function (t) {
      return e[~~r(t)];
    });
  }

  function ob(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) {
      i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + hb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
    }

    return s + t.substr(a, t.length - a);
  }

  function rb(t, e, r) {
    var i,
        n,
        a,
        s = t.labels,
        o = U;

    for (i in s) {
      (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
    }

    return a;
  }

  function tb(t) {
    return za(t), t.scrollTrigger && t.scrollTrigger.kill(!!B), t.progress() < 1 && Ct(t, "onInterrupt"), t;
  }

  function yb(t, e, r) {
    return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * At + .5 | 0;
  }

  function zb(e, r, i) {
    var n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p = e ? t(e) ? [e >> 16, e >> 8 & At, e & At] : 0 : St.black;

    if (!p) {
      if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), St[e]) p = St[e];else if ("#" === e.charAt(0)) {
        if (e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & At, p & At, parseInt(e.substr(7), 16) / 255];
        p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & At, e & At];
      } else if ("hsl" === e.substr(0, 3)) {
        if (p = d = e.match(tt), r) {
          if (~e.indexOf("=")) return p = e.match(et), i && p.length < 4 && (p[3] = 1), p;
        } else o = +p[0] % 360 / 360, u = p[1] / 100, n = 2 * (h = p[2] / 100) - (a = h <= .5 ? h * (u + 1) : h + u - h * u), 3 < p.length && (p[3] *= 1), p[0] = yb(o + 1 / 3, n, a), p[1] = yb(o, n, a), p[2] = yb(o - 1 / 3, n, a);
      } else p = e.match(tt) || St.transparent;
      p = p.map(Number);
    }

    return r && !d && (n = p[0] / At, a = p[1] / At, s = p[2] / At, h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2, l === f ? o = u = 0 : (c = l - f, u = .5 < h ? c / (2 - l - f) : c / (l + f), o = l === n ? (a - s) / c + (a < s ? 6 : 0) : l === a ? (s - n) / c + 2 : (n - a) / c + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * u + .5), p[2] = ~~(100 * h + .5)), i && p.length < 4 && (p[3] = 1), p;
  }

  function Ab(t) {
    var r = [],
        i = [],
        n = -1;
    return t.split(Rt).forEach(function (t) {
      var e = t.match(rt) || [];
      r.push.apply(r, e), i.push(n += e.length + 1);
    }), r.c = i, r;
  }

  function Bb(t, e, r) {
    var i,
        n,
        a,
        s,
        o = "",
        u = (t + o).match(Rt),
        h = e ? "hsla(" : "rgba(",
        l = 0;
    if (!u) return t;
    if (u = u.map(function (t) {
      return (t = zb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
    }), r && (a = Ab(t), (i = r.c).join(o) !== a.c.join(o))) for (s = (n = t.replace(Rt, "1").split(rt)).length - 1; l < s; l++) {
      o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
    }
    if (!n) for (s = (n = t.split(Rt)).length - 1; l < s; l++) {
      o += n[l] + u[l];
    }
    return o + n[s];
  }

  function Eb(t) {
    var e,
        r = t.join(" ");
    if (Rt.lastIndex = 0, Rt.test(r)) return e = Dt.test(r), t[1] = Bb(t[1], e), t[0] = Bb(t[0], e, Ab(t[1])), !0;
  }

  function Nb(t) {
    var e = (t + "").split("("),
        r = Ft[e[0]];
    return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
      for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) {
        r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Bt, "").trim() : +i, s = r.substr(e + 1).trim();
      }

      return n;
    }(e[1])] : function _valueInParentheses(t) {
      var e = t.indexOf("(") + 1,
          r = t.indexOf(")"),
          i = t.indexOf("(", e);
      return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
    }(t).split(",").map(oa)) : Ft._CE && It.test(t) ? Ft._CE("", t) : r;
  }

  function Pb(t, e) {
    for (var r, i = t._first; i;) {
      i instanceof Ut ? Pb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Pb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
    }
  }

  function Rb(t, e, r, i) {
    void 0 === r && (r = function easeOut(t) {
      return 1 - e(1 - t);
    }), void 0 === i && (i = function easeInOut(t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
    });
    var n,
        a = {
      easeIn: e,
      easeOut: r,
      easeInOut: i
    };
    return ha(t, function (t) {
      for (var e in Ft[t] = ot[t] = a, Ft[n = t.toLowerCase()] = r, a) {
        Ft[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ft[t + "." + e] = a[e];
      }
    }), a;
  }

  function Sb(e) {
    return function (t) {
      return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2;
    };
  }

  function Tb(r, t, e) {
    function Hm(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * G((t - a) * n) + 1;
    }

    var i = 1 <= t ? t : 1,
        n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
        a = n / W * (Math.asin(1 / i) || 0),
        s = "out" === r ? Hm : "in" === r ? function (t) {
      return 1 - Hm(1 - t);
    } : Sb(Hm);
    return n = W / n, s.config = function (t, e) {
      return Tb(r, t, e);
    }, s;
  }

  function Ub(e, r) {
    function Pm(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }

    void 0 === r && (r = 1.70158);
    var t = "out" === e ? Pm : "in" === e ? function (t) {
      return 1 - Pm(1 - t);
    } : Sb(Pm);
    return t.config = function (t) {
      return Ub(e, t);
    }, t;
  }

  var I,
      B,
      l,
      L,
      h,
      n,
      a,
      i,
      o,
      f,
      c,
      d,
      p,
      _,
      m,
      g,
      b,
      k,
      M,
      O,
      C,
      A,
      D,
      E,
      z,
      F,
      Y,
      N,
      j = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      q = {
    duration: .5,
    overwrite: !1,
    delay: 0
  },
      U = 1e8,
      V = 1 / U,
      W = 2 * Math.PI,
      X = W / 4,
      H = 0,
      K = Math.sqrt,
      Z = Math.cos,
      G = Math.sin,
      J = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
      $ = Array.isArray,
      tt = /(?:-?\.?\d|\.)+/gi,
      et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      nt = /[+-]=-?[.\d]+/,
      at = /[^,'"\[\]\s]+/gi,
      st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      ot = {},
      ut = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
  },
      ht = {
    suppressEvents: !0,
    kill: !1
  },
      lt = {
    suppressEvents: !0
  },
      ft = {},
      ct = [],
      dt = {},
      pt = {},
      _t = {},
      mt = 30,
      gt = [],
      vt = "",
      yt = function _merge(t, e) {
    for (var r in e) {
      t[r] = e[r];
    }

    return t;
  },
      Tt = function _animationCycle(t, e) {
    var r = Math.floor(t /= e);
    return t && r === t ? r - 1 : r;
  },
      bt = function _isFromOrFromStart(t) {
    var e = t.data;
    return "isFromStart" === e || "isStart" === e;
  },
      wt = {
    _start: 0,
    endTime: T,
    totalDuration: T
  },
      xt = function _parsePosition(t, e, i) {
    var n,
        a,
        s,
        o = t.labels,
        u = t._recent || wt,
        h = t.duration() >= U ? u.endTime(!1) : t._dur;
    return r(e) && (isNaN(e) || e in o) ? (a = e.charAt(0), s = "%" === e.substr(-1), n = e.indexOf("="), "<" === a || ">" === a ? (0 <= n && (e = e.replace(/=/, "")), ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (e in o || (o[e] = h), o[e]) : (a = parseFloat(e.charAt(n - 1) + e.substr(n + 1)), s && i && (a = a / 100 * ($(i) ? i[0] : i).totalDuration()), 1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a)) : null == e ? h : +e;
  },
      kt = function _clamp(t, e, r) {
    return r < t ? t : e < r ? e : r;
  },
      Mt = [].slice,
      Ot = function toArray(t, e, i) {
    return l && !e && l.selector ? l.selector(t) : !r(t) || i || !n && zt() ? $(t) ? function _flatten(t, e, i) {
      return void 0 === i && (i = []), t.forEach(function (t) {
        return r(t) && !e || _a(t, 1) ? i.push.apply(i, Ot(t)) : i.push(t);
      }) || i;
    }(t, i) : _a(t) ? Mt.call(t, 0) : t ? [t] : [] : Mt.call((e || a).querySelectorAll(t), 0);
  },
      Pt = function mapRange(e, t, r, i, n) {
    var a = t - e,
        s = i - r;
    return Wa(n, function (t) {
      return r + ((t - e) / a * s || 0);
    });
  },
      Ct = function _callback(t, e, r) {
    var i,
        n,
        a,
        s = t.vars,
        o = s[e],
        u = l,
        h = t._ctx;
    if (o) return i = s[e + "Params"], n = s.callbackScope || t, r && ct.length && ma(), h && (l = h), a = i ? o.apply(n, i) : o.call(n), l = u, a;
  },
      At = 255,
      St = {
    aqua: [0, At, At],
    lime: [0, At, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, At],
    navy: [0, 0, 128],
    white: [At, At, At],
    olive: [128, 128, 0],
    yellow: [At, At, 0],
    orange: [At, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [At, 0, 0],
    pink: [At, 192, 203],
    cyan: [0, At, At],
    transparent: [At, At, At, 0]
  },
      Rt = function () {
    var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";

    for (t in St) {
      e += "|" + t + "\\b";
    }

    return new RegExp(e + ")", "gi");
  }(),
      Dt = /hsl[a]?\(/,
      Et = (M = Date.now, O = 500, C = 33, A = M(), D = A, z = E = 1e3 / 240, g = {
    time: 0,
    frame: 0,
    tick: function tick() {
      wl(!0);
    },
    deltaRatio: function deltaRatio(t) {
      return b / (1e3 / (t || 60));
    },
    wake: function wake() {
      o && (!n && x() && (h = n = window, a = h.document || {}, ot.gsap = Ce, (h.gsapVersions || (h.gsapVersions = [])).push(Ce.version), P(i || h.GreenSockGlobals || !h.gsap && h || {}), m = h.requestAnimationFrame), p && g.sleep(), _ = m || function (t) {
        return setTimeout(t, z - 1e3 * g.time + 1 | 0);
      }, d = 1, wl(2));
    },
    sleep: function sleep() {
      (m ? h.cancelAnimationFrame : clearTimeout)(p), d = 0, _ = T;
    },
    lagSmoothing: function lagSmoothing(t, e) {
      O = t || 1 / 0, C = Math.min(e || 33, O);
    },
    fps: function fps(t) {
      E = 1e3 / (t || 240), z = 1e3 * g.time + E;
    },
    add: function add(n, t, e) {
      var a = t ? function (t, e, r, i) {
        n(t, e, r, i), g.remove(a);
      } : n;
      return g.remove(n), F[e ? "unshift" : "push"](a), zt(), a;
    },
    remove: function remove(t, e) {
      ~(e = F.indexOf(t)) && F.splice(e, 1) && e <= k && k--;
    },
    _listeners: F = []
  }),
      zt = function _wake() {
    return !d && Et.wake();
  },
      Ft = {},
      It = /^[\d.\-M][\d.\-,\s]/,
      Bt = /["']/g,
      Lt = function _invertEase(e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
      Yt = function _parseEase(t, e) {
    return t && (s(t) ? t : Ft[t] || Nb(t)) || e;
  };

  function wl(t) {
    var e,
        r,
        i,
        n,
        a = M() - D,
        s = !0 === t;
    if (O < a && (A += a - C), (0 < (e = (i = (D += a) - A) - z) || s) && (n = ++g.frame, b = i - 1e3 * g.time, g.time = i /= 1e3, z += e + (E <= e ? 4 : E - e), r = 1), s || (p = _(wl)), r) for (k = 0; k < F.length; k++) {
      F[k](i, b, n, t);
    }
  }

  function en(t) {
    return t < N ? Y * t * t : t < .7272727272727273 ? Y * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Y * (t -= 2.25 / 2.75) * t + .9375 : Y * Math.pow(t - 2.625 / 2.75, 2) + .984375;
  }

  ha("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Rb(t + ",Power" + (r - 1), e ? function (t) {
      return Math.pow(t, r);
    } : function (t) {
      return t;
    }, function (t) {
      return 1 - Math.pow(1 - t, r);
    }, function (t) {
      return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
    });
  }), Ft.Linear.easeNone = Ft.none = Ft.Linear.easeIn, Rb("Elastic", Tb("in"), Tb("out"), Tb()), Y = 7.5625, N = 1 / 2.75, Rb("Bounce", function (t) {
    return 1 - en(1 - t);
  }, en), Rb("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }), Rb("Circ", function (t) {
    return -(K(1 - t * t) - 1);
  }), Rb("Sine", function (t) {
    return 1 === t ? 1 : 1 - Z(t * X);
  }), Rb("Back", Ub("in"), Ub("out"), Ub()), Ft.SteppedEase = Ft.steps = ot.SteppedEase = {
    config: function config(t, e) {
      void 0 === t && (t = 1);
      var r = 1 / t,
          i = t + (e ? 0 : 1),
          n = e ? 1 : 0;
      return function (t) {
        return ((i * kt(0, .99999999, t) | 0) + n) * r;
      };
    }
  }, q.ease = Ft["quad.out"], ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
    return vt += t + "," + t + "Params,";
  });

  var Nt,
      jt = function GSCache(t, e) {
    this.id = H++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : ga, this.set = e ? e.getSetter : re;
  },
      qt = ((Nt = Animation.prototype).delay = function delay(t) {
    return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
  }, Nt.duration = function duration(t) {
    return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
  }, Nt.totalDuration = function totalDuration(t) {
    return arguments.length ? (this._dirty = 0, Ra(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, Nt.totalTime = function totalTime(t, e) {
    if (zt(), !arguments.length) return this._tTime;
    var r = this._dp;

    if (r && r.smoothChildTiming && this._ts) {
      for (Ia(this, t), !r._dp || r.parent || Ja(r, this); r && r.parent;) {
        r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
      }

      !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ka(this._dp, this, this._start - this._delay);
    }

    return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === V || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), na(this, t, e)), this;
  }, Nt.time = function time(t, e) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ea(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
  }, Nt.totalProgress = function totalProgress(t, e) {
    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, Nt.progress = function progress(t, e) {
    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ea(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, Nt.iteration = function iteration(t, e) {
    var r = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Tt(this._tTime, r) + 1 : 1;
  }, Nt.timeScale = function timeScale(t) {
    if (!arguments.length) return this._rts === -V ? 0 : this._rts;
    if (this._rts === t) return this;
    var e = this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
    return this._rts = +t || 0, this._ts = this._ps || t === -V ? 0 : this._rts, this.totalTime(kt(-this._delay, this._tDur, e), !0), Ha(this), function _recacheAncestors(t) {
      for (var e = t.parent; e && e.parent;) {
        e._dirty = 1, e.totalDuration(), e = e.parent;
      }

      return t;
    }(this);
  }, Nt.paused = function paused(t) {
    return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (zt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== V && (this._tTime -= V)))), this) : this._ps;
  }, Nt.startTime = function startTime(t) {
    if (arguments.length) {
      this._start = t;
      var e = this.parent || this._dp;
      return !e || !e._sort && this.parent || Ka(e, this, t - this._delay), this;
    }

    return this._start;
  }, Nt.endTime = function endTime(t) {
    return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, Nt.rawTime = function rawTime(t) {
    var e = this.parent || this._dp;
    return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ga(e.rawTime(t), this) : this._tTime : this._tTime;
  }, Nt.revert = function revert(t) {
    void 0 === t && (t = lt);
    var e = B;
    return B = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), B = e, this;
  }, Nt.globalTime = function globalTime(t) {
    for (var e = this, r = arguments.length ? t : e.rawTime(); e;) {
      r = e._start + r / (e._ts || 1), e = e._dp;
    }

    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(t) : r;
  }, Nt.repeat = function repeat(t) {
    return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Sa(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
  }, Nt.repeatDelay = function repeatDelay(t) {
    if (arguments.length) {
      var e = this._time;
      return this._rDelay = t, Sa(this), e ? this.time(e) : this;
    }

    return this._rDelay;
  }, Nt.yoyo = function yoyo(t) {
    return arguments.length ? (this._yoyo = t, this) : this._yoyo;
  }, Nt.seek = function seek(t, e) {
    return this.totalTime(xt(this, t), w(e));
  }, Nt.restart = function restart(t, e) {
    return this.play().totalTime(t ? -this._delay : 0, w(e));
  }, Nt.play = function play(t, e) {
    return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
  }, Nt.reverse = function reverse(t, e) {
    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
  }, Nt.pause = function pause(t, e) {
    return null != t && this.seek(t, e), this.paused(!0);
  }, Nt.resume = function resume() {
    return this.paused(!1);
  }, Nt.reversed = function reversed(t) {
    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -V : 0)), this) : this._rts < 0;
  }, Nt.invalidate = function invalidate() {
    return this._initted = this._act = 0, this._zTime = -V, this;
  }, Nt.isActive = function isActive() {
    var t,
        e = this.parent || this._dp,
        r = this._start;
    return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - V));
  }, Nt.eventCallback = function eventCallback(t, e, r) {
    var i = this.vars;
    return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
  }, Nt.then = function then(t) {
    var i = this;
    return new Promise(function (e) {
      function zo() {
        var t = i.then;
        i.then = null, s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t;
      }

      var r = s(t) ? t : pa;
      i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? zo() : i._prom = zo;
    });
  }, Nt.kill = function kill() {
    tb(this);
  }, Animation);

  function Animation(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ra(this, +t.duration, 1, 1), this.data = t.data, l && (this._ctx = l).data.push(this), d || Et.wake();
  }

  qa(qt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -V,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });

  var Ut = function (i) {
    function Timeline(t, e) {
      var r;
      return void 0 === t && (t = {}), (r = i.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = w(t.sortChildren), L && Ka(t.parent || L, _assertThisInitialized(r), e), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && La(_assertThisInitialized(r), t.scrollTrigger), r;
    }

    _inheritsLoose(Timeline, i);

    var e = Timeline.prototype;
    return e.to = function to(t, e, r) {
      return Va(0, arguments, this), this;
    }, e.from = function from(t, e, r) {
      return Va(1, arguments, this), this;
    }, e.fromTo = function fromTo(t, e, r, i) {
      return Va(2, arguments, this), this;
    }, e.set = function set(t, e, r) {
      return e.duration = 0, e.parent = this, va(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Gt(t, e, xt(this, r), 1), this;
    }, e.call = function call(t, e, r) {
      return Ka(this, Gt.delayedCall(0, t, e), r);
    }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
      return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Gt(t, r, xt(this, n)), this;
    }, e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
      return r.runBackwards = 1, va(r).immediateRender = w(r.immediateRender), this.staggerTo(t, e, r, i, n, a, s);
    }, e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
      return i.startAt = r, va(i).immediateRender = w(i.immediateRender), this.staggerTo(t, e, i, n, a, s, o);
    }, e.render = function render(t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          c,
          d,
          p,
          _ = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = t <= 0 ? 0 : ja(t),
          y = this._zTime < 0 != t < 0 && (this._initted || !g);

      if (this !== L && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
        if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
          if (d = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);

          if (i = ja(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), c = Tt(this._tTime, o), !_ && this._tTime && c !== s && (c = s), d && 1 & s && (i = g - i, p = 1), s !== c && !this._lock) {
            var T = d && 1 & c,
                b = T === (d && 1 & s);
            if (s < c && (T = !T), _ = T ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Ct(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (g = this._dur, m = this._tDur, b && (this._lock = 2, _ = T ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
            Pb(this, p);
          }
        }

        if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
          var i;
          if (e < r) for (i = t._first; i && i._start <= r;) {
            if ("isPause" === i.data && i._start > e) return i;
            i = i._next;
          } else for (i = t._last; i && i._start >= r;) {
            if ("isPause" === i.data && i._start < e) return i;
            i = i._prev;
          }
        }(this, ja(_), ja(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && i && !e && (Ct(this, "onStart"), this._tTime !== v)) return this;
        if (_ <= i && 0 <= t) for (n = this._first; n;) {
          if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
            if (n.parent !== this) return this.render(t, e, r);

            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
              h = 0, a && (v += this._zTime = -V);
              break;
            }
          }

          n = a;
        } else {
          n = this._last;

          for (var w = t < 0 ? t : i; n;) {
            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
              if (n.parent !== this) return this.render(t, e, r);

              if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r || B && (n._initted || n._startAt)), i !== this._time || !this._ts && !u) {
                h = 0, a && (v += this._zTime = w ? -V : V);
                break;
              }
            }

            n = a;
          }
        }
        if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -V)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, Ha(this), this.render(t, e, r);
        this._onUpdate && !e && Ct(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || za(this, 1), e || t < 0 && !_ || !v && !_ && m || (Ct(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())));
      }

      return this;
    }, e.add = function add(e, i) {
      var n = this;

      if (t(i) || (i = xt(this, i, e)), !(e instanceof qt)) {
        if ($(e)) return e.forEach(function (t) {
          return n.add(t, i);
        }), this;
        if (r(e)) return this.addLabel(e, i);
        if (!s(e)) return this;
        e = Gt.delayedCall(0, e);
      }

      return this !== e ? Ka(this, e, i) : this;
    }, e.getChildren = function getChildren(t, e, r, i) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -U);

      for (var n = [], a = this._first; a;) {
        a._start >= i && (a instanceof Gt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
      }

      return n;
    }, e.getById = function getById(t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--;) {
        if (e[r].vars.id === t) return e[r];
      }
    }, e.remove = function remove(t) {
      return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (ya(this, t), t === this._recent && (this._recent = this._last), Aa(this));
    }, e.totalTime = function totalTime(t, e) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ja(Et.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;
    }, e.addLabel = function addLabel(t, e) {
      return this.labels[t] = xt(this, e), this;
    }, e.removeLabel = function removeLabel(t) {
      return delete this.labels[t], this;
    }, e.addPause = function addPause(t, e, r) {
      var i = Gt.delayedCall(0, e || T, r);
      return i.data = "isPause", this._hasPause = 1, Ka(this, i, xt(this, t));
    }, e.removePause = function removePause(t) {
      var e = this._first;

      for (t = xt(this, t); e;) {
        e._start === t && "isPause" === e.data && za(e), e = e._next;
      }
    }, e.killTweensOf = function killTweensOf(t, e, r) {
      for (var i = this.getTweensOf(t, r), n = i.length; n--;) {
        Vt !== i[n] && i[n].kill(t, e);
      }

      return this;
    }, e.getTweensOf = function getTweensOf(e, r) {
      for (var i, n = [], a = Ot(e), s = this._first, o = t(r); s;) {
        s instanceof Gt ? la(s._targets, a) && (o ? (!Vt || s._initted && s._ts) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s) : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i), s = s._next;
      }

      return n;
    }, e.tweenTo = function tweenTo(t, e) {
      e = e || {};
      var r,
          i = this,
          n = xt(i, t),
          a = e.startAt,
          s = e.onStart,
          o = e.onStartParams,
          u = e.immediateRender,
          h = Gt.to(i, qa({
        ease: e.ease || "none",
        lazy: !1,
        immediateRender: !1,
        time: n,
        overwrite: "auto",
        duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || V,
        onStart: function onStart() {
          if (i.pause(), !r) {
            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
            h._dur !== t && Ra(h, t, 0, 1).render(h._time, !0, !0), r = 1;
          }

          s && s.apply(h, o || []);
        }
      }, e));
      return u ? h.render(0) : h;
    }, e.tweenFromTo = function tweenFromTo(t, e, r) {
      return this.tweenTo(e, qa({
        startAt: {
          time: xt(this, t)
        }
      }, r));
    }, e.recent = function recent() {
      return this._recent;
    }, e.nextLabel = function nextLabel(t) {
      return void 0 === t && (t = this._time), rb(this, xt(this, t));
    }, e.previousLabel = function previousLabel(t) {
      return void 0 === t && (t = this._time), rb(this, xt(this, t), 1);
    }, e.currentLabel = function currentLabel(t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + V);
    }, e.shiftChildren = function shiftChildren(t, e, r) {
      void 0 === r && (r = 0);

      for (var i, n = this._first, a = this.labels; n;) {
        n._start >= r && (n._start += t, n._end += t), n = n._next;
      }

      if (e) for (i in a) {
        a[i] >= r && (a[i] += t);
      }
      return Aa(this);
    }, e.invalidate = function invalidate(t) {
      var e = this._first;

      for (this._lock = 0; e;) {
        e.invalidate(t), e = e._next;
      }

      return i.prototype.invalidate.call(this, t);
    }, e.clear = function clear(t) {
      void 0 === t && (t = !0);

      for (var e, r = this._first; r;) {
        e = r._next, this.remove(r), r = e;
      }

      return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Aa(this);
    }, e.totalDuration = function totalDuration(t) {
      var e,
          r,
          i,
          n = 0,
          a = this,
          s = a._last,
          o = U;
      if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));

      if (a._dirty) {
        for (i = a.parent; s;) {
          e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ka(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
        }

        Ra(a, a === L && a._time > n ? a._time : n, 1, 1), a._dirty = 0;
      }

      return a._tDur;
    }, Timeline.updateRoot = function updateRoot(t) {
      if (L._ts && (na(L, Ga(t, L)), f = Et.frame), Et.frame >= mt) {
        mt += j.autoSleep || 120;
        var e = L._first;

        if ((!e || !e._ts) && j.autoSleep && Et._listeners.length < 2) {
          for (; e && !e._ts;) {
            e = e._next;
          }

          e || Et.sleep();
        }
      }
    }, Timeline;
  }(qt);

  qa(Ut.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  function _b(t, e, i, n, a, o) {
    var u, h, l, f;
    if (pt[t] && !1 !== (u = new pt[t]()).init(a, u.rawVars ? e[t] : function _processVars(t, e, i, n, a) {
      if (s(t) && (t = Qt(t, a, e, i, n)), !v(t) || t.style && t.nodeType || $(t) || J(t)) return r(t) ? Qt(t, a, e, i, n) : t;
      var o,
          u = {};

      for (o in t) {
        u[o] = Qt(t[o], a, e, i, n);
      }

      return u;
    }(e[t], n, a, o, i), i, n, o) && (i._pt = h = new pe(i._pt, a, t, 0, 1, u.render, u, 0, u.priority), i !== c)) for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--;) {
      l[u._props[f]] = h;
    }
    return u;
  }

  function fc(t, r, e, i) {
    var n,
        a,
        s = r.ease || i || "power1.inOut";
    if ($(r)) a = e[t] || (e[t] = []), r.forEach(function (t, e) {
      return a.push({
        t: e / (r.length - 1) * 100,
        v: t,
        e: s
      });
    });else for (n in r) {
      a = e[n] || (e[n] = []), "ease" === n || a.push({
        t: parseFloat(t),
        v: r[n],
        e: s
      });
    }
  }

  var Vt,
      Wt,
      Xt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
    s(n) && (n = n(a || 0, t, o));

    var c,
        d = t[e],
        p = "get" !== i ? i : s(d) ? l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
        _ = s(d) ? l ? ee : $t : Jt;

    if (r(n) && (~n.indexOf("random(") && (n = ob(n)), "=" === n.charAt(1) && (!(c = ka(p, n) + (Ya(p) || 0)) && 0 !== c || (n = c))), !f || p !== n || Wt) return isNaN(p * n) || "" === n ? (d || e in t || Q(e, n), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
      var o,
          u,
          h,
          l,
          f,
          c,
          d,
          p,
          _ = new pe(this._pt, t, e, 0, 1, se, null, n),
          m = 0,
          g = 0;

      for (_.b = r, _.e = i, r += "", (d = ~(i += "").indexOf("random(")) && (i = ob(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) {
        l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (c = parseFloat(u[g - 1]) || 0, _._pt = {
          _next: _._pt,
          p: f || 1 === g ? f : ",",
          s: c,
          c: "=" === l.charAt(1) ? ka(c, l) - c : parseFloat(l) - c,
          m: h && h < 4 ? Math.round : 0
        }, m = it.lastIndex);
      }

      return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || d) && (_.e = 0), this._pt = _;
    }.call(this, t, e, p, n, _, h || j.stringFilter, l)) : (c = new pe(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof d ? ae : ne, 0, _), l && (c.fp = l), u && c.modifier(u, this, t), this._pt = c);
  },
      Ht = function _initTween(t, e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p,
        _,
        m = t.vars,
        g = m.ease,
        v = m.startAt,
        y = m.immediateRender,
        T = m.lazy,
        b = m.onUpdate,
        x = m.onUpdateParams,
        k = m.callbackScope,
        M = m.runBackwards,
        O = m.yoyoEase,
        P = m.keyframes,
        C = m.autoRevert,
        A = t._dur,
        S = t._startAt,
        R = t._targets,
        D = t.parent,
        E = D && "nested" === D.data ? D.vars.targets : R,
        z = "auto" === t._overwrite && !I,
        F = t.timeline;

    if (!F || P && g || (g = "none"), t._ease = Yt(g, q.ease), t._yEase = O ? Lt(Yt(!0 === O ? g : O, q.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !F && !!m.runBackwards, !F || P && !m.stagger) {
      if (p = (l = R[0] ? fa(R[0]).harness : 0) && m[l.prop], i = ua(m, ft), S && (S._zTime < 0 && S.progress(1), e < 0 && M && y && !C ? S.render(-1, !0) : S.revert(M && A ? ht : ut), S._lazy = 0), v) {
        if (za(t._startAt = Gt.set(R, qa({
          data: "isStart",
          overwrite: !1,
          parent: D,
          immediateRender: !0,
          lazy: !S && w(T),
          startAt: null,
          delay: 0,
          onUpdate: b,
          onUpdateParams: x,
          callbackScope: k,
          stagger: 0
        }, v))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (B || !y && !C) && t._startAt.revert(ht), y && A && e <= 0 && r <= 0) return void (e && (t._zTime = e));
      } else if (M && A && !S) if (e && (y = !1), a = qa({
        overwrite: !1,
        data: "isFromStart",
        lazy: y && !S && w(T),
        immediateRender: y,
        stagger: 0,
        parent: D
      }, i), p && (a[l.prop] = p), za(t._startAt = Gt.set(R, a)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (B ? t._startAt.revert(ht) : t._startAt.render(-1, !0)), t._zTime = e, y) {
        if (!e) return;
      } else _initTween(t._startAt, V, V);

      for (t._pt = t._ptCache = 0, T = A && w(T) || T && !A, n = 0; n < R.length; n++) {
        if (h = (o = R[n])._gsap || ea(R)[n]._gsap, t._ptLookup[n] = c = {}, dt[h.id] && ct.length && ma(), d = E === R ? n : E.indexOf(o), l && !1 !== (f = new l()).init(o, p || i, t, d, E) && (t._pt = s = new pe(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function (t) {
          c[t] = s;
        }), f.priority && (u = 1)), !l || p) for (a in i) {
          pt[a] && (f = _b(a, i, t, d, o, E)) ? f.priority && (u = 1) : c[a] = s = Xt.call(t, o, a, "get", i[a], d, E, 0, m.stringFilter);
        }
        t._op && t._op[n] && t.kill(o, t._op[n]), z && t._pt && (Vt = t, L.killTweensOf(o, c, t.globalTime(e)), _ = !t.parent, Vt = 0), t._pt && T && (dt[h.id] = 1);
      }

      u && de(t), t._onInit && t._onInit(t);
    }

    t._onUpdate = b, t._initted = (!t._op || t._pt) && !_, P && e <= 0 && F.render(U, !0, !0);
  },
      Qt = function _parseFuncOrString(t, e, i, n, a) {
    return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? ob(t) : t;
  },
      Kt = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      Zt = {};

  ha(Kt + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return Zt[t] = 1;
  });

  var Gt = function (z) {
    function Tween(e, r, i, n) {
      var a;
      "number" == typeof r && (i.duration = r, r = i, i = null);
      var s,
          o,
          u,
          h,
          l,
          f,
          c,
          d,
          p = (a = z.call(this, n ? r : va(r)) || this).vars,
          _ = p.duration,
          m = p.delay,
          g = p.immediateRender,
          T = p.stagger,
          b = p.overwrite,
          x = p.keyframes,
          k = p.defaults,
          M = p.scrollTrigger,
          O = p.yoyoEase,
          P = r.parent || L,
          C = ($(e) || J(e) ? t(e[0]) : "length" in r) ? [e] : Ot(e);

      if (a._targets = C.length ? ea(C) : R("GSAP target " + e + " not found. https://greensock.com", !j.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, x || T || y(_) || y(m)) {
        if (r = a.vars, (s = a.timeline = new Ut({
          data: "nested",
          defaults: k || {},
          targets: P && "nested" === P.data ? P.vars.targets : C
        })).kill(), s.parent = s._dp = _assertThisInitialized(a), s._start = 0, T || y(_) || y(m)) {
          if (h = C.length, c = T && eb(T), v(T)) for (l in T) {
            ~Kt.indexOf(l) && ((d = d || {})[l] = T[l]);
          }

          for (o = 0; o < h; o++) {
            (u = ua(r, Zt)).stagger = 0, O && (u.yoyoEase = O), d && yt(u, d), f = C[o], u.duration = +Qt(_, _assertThisInitialized(a), o, f, C), u.delay = (+Qt(m, _assertThisInitialized(a), o, f, C) || 0) - a._delay, !T && 1 === h && u.delay && (a._delay = m = u.delay, a._start += m, u.delay = 0), s.to(f, u, c ? c(o, f, C) : 0), s._ease = Ft.none;
          }

          s.duration() ? _ = m = 0 : a.timeline = 0;
        } else if (x) {
          va(qa(s.vars.defaults, {
            ease: "none"
          })), s._ease = Yt(x.ease || r.ease || "none");
          var A,
              S,
              D,
              E = 0;
          if ($(x)) x.forEach(function (t) {
            return s.to(C, t, ">");
          }), s.duration();else {
            for (l in u = {}, x) {
              "ease" === l || "easeEach" === l || fc(l, x[l], u, x.easeEach);
            }

            for (l in u) {
              for (A = u[l].sort(function (t, e) {
                return t.t - e.t;
              }), o = E = 0; o < A.length; o++) {
                (D = {
                  ease: (S = A[o]).e,
                  duration: (S.t - (o ? A[o - 1].t : 0)) / 100 * _
                })[l] = S.v, s.to(C, D, E), E += D.duration;
              }
            }

            s.duration() < _ && s.to({}, {
              duration: _ - s.duration()
            });
          }
        }

        _ || a.duration(_ = s.duration());
      } else a.timeline = 0;

      return !0 !== b || I || (Vt = _assertThisInitialized(a), L.killTweensOf(C), Vt = 0), Ka(P, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (g || !_ && !x && a._start === ja(P._time) && w(g) && function _hasNoPausedAncestors(t) {
        return !t || t._ts && _hasNoPausedAncestors(t.parent);
      }(_assertThisInitialized(a)) && "nested" !== P.data) && (a._tTime = -V, a.render(Math.max(0, -m) || 0)), M && La(_assertThisInitialized(a), M), a;
    }

    _inheritsLoose(Tween, z);

    var e = Tween.prototype;
    return e.render = function render(t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          c = this._time,
          d = this._tDur,
          p = this._dur,
          _ = t < 0,
          m = d - V < t && !_ ? d : t < V ? 0 : t;

      if (p) {
        if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != _) {
          if (i = m, l = this.timeline, this._repeat) {
            if (s = p + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * s + t, e, r);
            if (i = ja(m % s), m === d ? (a = this._repeat, i = p) : ((a = ~~(m / s)) && a === m / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = Tt(this._tTime, s), i === c && !r && this._initted) return this._tTime = m, this;
            a !== o && (l && this._yEase && Pb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(ja(s * a), !0).invalidate()._lock = 0));
          }

          if (!this._initted) {
            if (Ma(this, _ ? t : i, r, e, m)) return this._tTime = 0, this;
            if (c !== this._time) return this;
            if (p !== this._dur) return this.render(t, e, r);
          }

          if (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !c && !e && (Ct(this, "onStart"), this._tTime !== m)) return this;

          for (n = this._pt; n;) {
            n.r(h, n.d), n = n._next;
          }

          l && l.render(t < 0 ? t : !i && u ? -V : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && Ca(this, t, 0, r), Ct(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Ct(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (_ && !this._onUpdate && Ca(this, t, 0, !0), !t && p || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || za(this, 1), e || _ && !c || !(m || c || u) || (Ct(this, m === d ? "onComplete" : "onReverseComplete", !0), !this._prom || m < d && 0 < this.timeScale() || this._prom()));
        }
      } else !function _renderZeroDurationTween(t, e, r, i) {
        var n,
            a,
            s,
            o = t.ratio,
            u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
          var e = t.parent;
          return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e));
        }(t) && (t._initted || !bt(t)) || (t._ts < 0 || t._dp._ts < 0) && !bt(t)) ? 0 : 1,
            h = t._rDelay,
            l = 0;

        if (h && t._repeat && (l = kt(0, t._tDur, e), a = Tt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== Tt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || B || i || t._zTime === V || !e && t._zTime) {
          if (!t._initted && Ma(t, e, i, r, l)) return;

          for (s = t._zTime, t._zTime = e || (r ? V : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) {
            n.r(u, n.d), n = n._next;
          }

          e < 0 && Ca(t, e, 0, !0), t._onUpdate && !r && Ct(t, "onUpdate"), l && t._repeat && !r && t.parent && Ct(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && za(t, 1), r || B || (Ct(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
        } else t._zTime || (t._zTime = e);
      }(this, t, e, r);

      return this;
    }, e.targets = function targets() {
      return this._targets;
    }, e.invalidate = function invalidate(t) {
      return t && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), z.prototype.invalidate.call(this, t);
    }, e.resetTo = function resetTo(t, e, r, i) {
      d || Et.wake(), this._ts || this.play();
      var n,
          a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return this._initted || Ht(this, a), n = this._ease(a / this._dur), function _updatePropTweens(t, e, r, i, n, a, s) {
        var o,
            u,
            h,
            l,
            f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
        if (!f) for (f = t._ptCache[e] = [], h = t._ptLookup, l = t._targets.length; l--;) {
          if ((o = h[l][e]) && o.d && o.d._pt) for (o = o.d._pt; o && o.p !== e && o.fp !== e;) {
            o = o._next;
          }
          if (!o) return Wt = 1, t.vars[e] = "+=0", Ht(t, s), Wt = 0, 1;
          f.push(o);
        }

        for (l = f.length; l--;) {
          (o = (u = f[l])._pt || u).s = !i && 0 !== i || n ? o.s + (i || 0) + a * o.c : i, o.c = r - o.s, u.e && (u.e = ia(r) + Ya(u.e)), u.b && (u.b = o.s + Ya(u.b));
        }
      }(this, t, e, r, i, n, a) ? this.resetTo(t, e, r, i) : (Ia(this, 0), this.parent || xa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
    }, e.kill = function kill(t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? tb(this) : this;

      if (this.timeline) {
        var i = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t, e, Vt && !0 !== Vt.vars.overwrite)._first || tb(this), this.parent && i !== this.timeline.totalDuration() && Ra(this, this._dur * this.timeline._tDur / i, 0, 1), this;
      }

      var n,
          a,
          s,
          o,
          u,
          h,
          l,
          f = this._targets,
          c = t ? Ot(t) : f,
          d = this._ptLookup,
          p = this._pt;
      if ((!e || "all" === e) && function _arraysMatch(t, e) {
        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];) {
          ;
        }

        return r < 0;
      }(f, c)) return "all" === e && (this._pt = 0), tb(this);

      for (n = this._op = this._op || [], "all" !== e && (r(e) && (u = {}, ha(e, function (t) {
        return u[t] = 1;
      }), e = u), e = function _addAliasesToVars(t, e) {
        var r,
            i,
            n,
            a,
            s = t[0] ? fa(t[0]).harness : 0,
            o = s && s.aliases;
        if (!o) return e;

        for (i in r = yt({}, e), o) {
          if ((i in r)) for (n = (a = o[i].split(",")).length; n--;) {
            r[a[n]] = r[i];
          }
        }

        return r;
      }(f, e)), l = f.length; l--;) {
        if (~c.indexOf(f[l])) for (u in a = d[l], "all" === e ? (n[l] = e, o = a, s = {}) : (s = n[l] = n[l] || {}, o = e), o) {
          (h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || ya(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
        }
      }

      return this._initted && !this._pt && p && tb(this), this;
    }, Tween.to = function to(t, e, r) {
      return new Tween(t, e, r);
    }, Tween.from = function from(t, e) {
      return Va(1, arguments);
    }, Tween.delayedCall = function delayedCall(t, e, r, i) {
      return new Tween(e, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: e,
        onReverseComplete: e,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i
      });
    }, Tween.fromTo = function fromTo(t, e, r) {
      return Va(2, arguments);
    }, Tween.set = function set(t, e) {
      return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);
    }, Tween.killTweensOf = function killTweensOf(t, e, r) {
      return L.killTweensOf(t, e, r);
    }, Tween;
  }(qt);

  qa(Gt.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), ha("staggerTo,staggerFrom,staggerFromTo", function (r) {
    Gt[r] = function () {
      var t = new Ut(),
          e = Mt.call(arguments, 0);
      return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
    };
  });

  function nc(t, e, r) {
    return t.setAttribute(e, r);
  }

  function vc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }

  var Jt = function _setterPlain(t, e, r) {
    return t[e] = r;
  },
      $t = function _setterFunc(t, e, r) {
    return t[e](r);
  },
      ee = function _setterFuncWithParam(t, e, r, i) {
    return t[e](i.fp, r);
  },
      re = function _getSetter(t, e) {
    return s(t[e]) ? $t : u(t[e]) && t.setAttribute ? nc : Jt;
  },
      ne = function _renderPlain(t, e) {
    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
  },
      ae = function _renderBoolean(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
      se = function _renderComplexString(t, e) {
    var r = e._pt,
        i = "";
    if (!t && e.b) i = e.b;else if (1 === t && e.e) i = e.e;else {
      for (; r;) {
        i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
      }

      i += e.c;
    }
    e.set(e.t, e.p, i, e);
  },
      oe = function _renderPropTweens(t, e) {
    for (var r = e._pt; r;) {
      r.r(t, r.d), r = r._next;
    }
  },
      le = function _addPluginModifier(t, e, r, i) {
    for (var n, a = this._pt; a;) {
      n = a._next, a.p === i && a.modifier(t, e, r), a = n;
    }
  },
      fe = function _killPropTweensOf(t) {
    for (var e, r, i = this._pt; i;) {
      r = i._next, i.p === t && !i.op || i.op === t ? ya(this, i, "_pt") : i.dep || (e = 1), i = r;
    }

    return !e;
  },
      de = function _sortPropTweensByPriority(t) {
    for (var e, r, i, n, a = t._pt; a;) {
      for (e = a._next, r = i; r && r.pr > a.pr;) {
        r = r._next;
      }

      (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a, (a._next = r) ? r._prev = a : n = a, a = e;
    }

    t._pt = i;
  },
      pe = (PropTween.prototype.modifier = function modifier(t, e, r) {
    this.mSet = this.mSet || this.set, this.set = vc, this.m = t, this.mt = r, this.tween = e;
  }, PropTween);

  function PropTween(t, e, r, i, n, a, s, o, u) {
    this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || ne, this.d = s || this, this.set = o || Jt, this.pr = u || 0, (this._next = t) && (t._prev = this);
  }

  ha(vt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
    return ft[t] = 1;
  }), ot.TweenMax = ot.TweenLite = Gt, ot.TimelineLite = ot.TimelineMax = Ut, L = new Ut({
    sortChildren: !1,
    defaults: q,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), j.stringFilter = Eb;

  function Cc(t) {
    return (Te[t] || we).map(function (t) {
      return t();
    });
  }

  function Dc() {
    var t = Date.now(),
        o = [];
    2 < t - xe && (Cc("matchMediaInit"), ye.forEach(function (t) {
      var e,
          r,
          i,
          n,
          a = t.queries,
          s = t.conditions;

      for (r in a) {
        (e = h.matchMedia(a[r]).matches) && (i = 1), e !== s[r] && (s[r] = e, n = 1);
      }

      n && (t.revert(), i && o.push(t));
    }), Cc("matchMediaRevert"), o.forEach(function (t) {
      return t.onMatch(t);
    }), xe = t, Cc("matchMedia"));
  }

  var _e,
      ye = [],
      Te = {},
      we = [],
      xe = 0,
      ke = ((_e = Context.prototype).add = function add(t, i, n) {
    function Cw() {
      var t,
          e = l,
          r = a.selector;
      return e && e !== a && e.data.push(a), n && (a.selector = cb(n)), l = a, t = i.apply(a, arguments), s(t) && a._r.push(t), l = e, a.selector = r, a.isReverted = !1, t;
    }

    s(t) && (n = i, i = t, t = s);
    var a = this;
    return a.last = Cw, t === s ? Cw(a) : t ? a[t] = Cw : Cw;
  }, _e.ignore = function ignore(t) {
    var e = l;
    l = null, t(this), l = e;
  }, _e.getTweens = function getTweens() {
    var e = [];
    return this.data.forEach(function (t) {
      return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof Gt && !(t.parent && "nested" === t.parent.data) && e.push(t);
    }), e;
  }, _e.clear = function clear() {
    this._r.length = this.data.length = 0;
  }, _e.kill = function kill(e, t) {
    var r = this;

    if (e) {
      var i = this.getTweens();
      this.data.forEach(function (t) {
        "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function (t) {
          return i.splice(i.indexOf(t), 1);
        }));
      }), i.map(function (t) {
        return {
          g: t.globalTime(0),
          t: t
        };
      }).sort(function (t, e) {
        return e.g - t.g || -1;
      }).forEach(function (t) {
        return t.t.revert(e);
      }), this.data.forEach(function (t) {
        return !(t instanceof qt) && t.revert && t.revert(e);
      }), this._r.forEach(function (t) {
        return t(e, r);
      }), this.isReverted = !0;
    } else this.data.forEach(function (t) {
      return t.kill && t.kill();
    });

    if (this.clear(), t) {
      var n = ye.indexOf(this);
      ~n && ye.splice(n, 1);
    }
  }, _e.revert = function revert(t) {
    this.kill(t || {});
  }, Context);

  function Context(t, e) {
    this.selector = e && cb(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t);
  }

  var Me,
      Oe = ((Me = MatchMedia.prototype).add = function add(t, e, r) {
    v(t) || (t = {
      matches: t
    });
    var i,
        n,
        a,
        s = new ke(0, r || this.scope),
        o = s.conditions = {};

    for (n in this.contexts.push(s), e = s.add("onMatch", e), s.queries = t) {
      "all" === n ? a = 1 : (i = h.matchMedia(t[n])) && (ye.indexOf(s) < 0 && ye.push(s), (o[n] = i.matches) && (a = 1), i.addListener ? i.addListener(Dc) : i.addEventListener("change", Dc));
    }

    return a && e(s), this;
  }, Me.revert = function revert(t) {
    this.kill(t || {});
  }, Me.kill = function kill(e) {
    this.contexts.forEach(function (t) {
      return t.kill(e, !0);
    });
  }, MatchMedia);

  function MatchMedia(t) {
    this.contexts = [], this.scope = t;
  }

  var Pe = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {
        e[r] = arguments[r];
      }

      e.forEach(function (t) {
        return function _createPlugin(t) {
          var e = (t = !t.name && t["default"] || t).name,
              r = s(t),
              i = e && !r && t.init ? function () {
            this._props = [];
          } : t,
              n = {
            init: T,
            render: oe,
            add: Xt,
            kill: fe,
            modifier: le,
            rawVars: 0
          },
              a = {
            targetTest: 0,
            get: 0,
            getSetter: re,
            aliases: {},
            register: 0
          };

          if (zt(), t !== i) {
            if (pt[e]) return;
            qa(i, qa(ua(t, n), a)), yt(i.prototype, yt(n, ua(t, a))), pt[i.prop = e] = i, t.targetTest && (gt.push(i), ft[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
          }

          S(e, i), t.register && t.register(Ce, i, pe);
        }(t);
      });
    },
    timeline: function timeline(t) {
      return new Ut(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return L.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, n) {
      r(i) && (i = Ot(i)[0]);
      var a = fa(i || {}).get,
          s = e ? pa : oa;
      return "native" === e && (e = ""), i ? t ? s((pt[t] && pt[t].get || a)(i, t, e, n)) : function (t, e, r) {
        return s((pt[t] && pt[t].get || a)(i, t, e, r));
      } : i;
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = Ot(r)).length) {
        var n = r.map(function (t) {
          return Ce.quickSetter(t, e, i);
        }),
            a = n.length;
        return function (t) {
          for (var e = a; e--;) {
            n[e](t);
          }
        };
      }

      r = r[0] || {};
      var s = pt[e],
          o = fa(r),
          u = o.harness && (o.harness.aliases || {})[e] || e,
          h = s ? function (t) {
        var e = new s();
        c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && oe(1, c);
      } : o.set(r, u);
      return s ? h : function (t) {
        return h(r, u, i ? t + i : t, o, 1);
      };
    },
    quickTo: function quickTo(t, i, e) {
      function Ux(t, e, r) {
        return n.resetTo(i, t, e, r);
      }

      var r,
          n = Ce.to(t, yt(((r = {})[i] = "+=0.1", r.paused = !0, r), e || {}));
      return Ux.tween = n, Ux;
    },
    isTweening: function isTweening(t) {
      return 0 < L.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Yt(t.ease, q.ease)), ta(q, t || {});
    },
    config: function config(t) {
      return ta(j, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
          n = t.effect,
          e = t.plugins,
          a = t.defaults,
          r = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return t && !pt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.");
      }), _t[i] = function (t, e, r) {
        return n(Ot(t), qa(e || {}, a), r);
      }, r && (Ut.prototype[i] = function (t, e, r) {
        return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r);
      });
    },
    registerEase: function registerEase(t, e) {
      Ft[t] = Yt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Yt(t, e) : Ft;
    },
    getById: function getById(t) {
      return L.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
          i,
          n = new Ut(t);

      for (n.smoothChildTiming = w(t.smoothChildTiming), L.remove(n), n._dp = 0, n._time = n._tTime = L._time, r = L._first; r;) {
        i = r._next, !e && !r._dur && r instanceof Gt && r.vars.onComplete === r._targets[0] || Ka(n, r, r._start - r._delay), r = i;
      }

      return Ka(L, n, 0), n;
    },
    context: function context(t, e) {
      return t ? new ke(t, e) : l;
    },
    matchMedia: function matchMedia(t) {
      return new Oe(t);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return ye.forEach(function (t) {
        var e,
            r,
            i = t.conditions;

        for (r in i) {
          i[r] && (i[r] = !1, e = 1);
        }

        e && t.revert();
      }) || Dc();
    },
    addEventListener: function addEventListener(t, e) {
      var r = Te[t] || (Te[t] = []);
      ~r.indexOf(e) || r.push(e);
    },
    removeEventListener: function removeEventListener(t, e) {
      var r = Te[t],
          i = r && r.indexOf(e);
      0 <= i && r.splice(i, 1);
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return $(e) ? lb(e, wrap(0, e.length), t) : Wa(r, function (t) {
          return (i + (t - e) % i) % i + e;
        });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
            n = 2 * i;
        return $(e) ? lb(e, wrapYoyo(0, e.length - 1), t) : Wa(r, function (t) {
          return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t);
        });
      },
      distribute: eb,
      random: hb,
      snap: gb,
      normalize: function normalize(t, e, r) {
        return Pt(t, e, 0, 1, r);
      },
      getUnit: Ya,
      clamp: function clamp(e, r, t) {
        return Wa(t, function (t) {
          return kt(e, r, t);
        });
      },
      splitColor: zb,
      toArray: Ot,
      selector: cb,
      mapRange: Pt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {
          e[r] = arguments[r];
        }

        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Ya(t));
        };
      },
      interpolate: function interpolate(e, i, t, n) {
        var a = isNaN(e + i) ? 0 : function (t) {
          return (1 - t) * e + t * i;
        };

        if (!a) {
          var s,
              o,
              u,
              h,
              l,
              f = r(e),
              c = {};
          if (!0 === t && (n = 1) && (t = null), f) e = {
            p: e
          }, i = {
            p: i
          };else if ($(e) && !$(i)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) {
              u.push(interpolate(e[o - 1], e[o]));
            }

            h--, a = function func(t) {
              t *= h;
              var e = Math.min(l, ~~t);
              return u[e](t - e);
            }, t = i;
          } else n || (e = yt($(e) ? [] : {}, e));

          if (!u) {
            for (s in i) {
              Xt.call(c, e, s, "get", i[s]);
            }

            a = function func(t) {
              return oe(t, c) || (f ? e.p : e);
            };
          }
        }

        return Wa(t, a);
      },
      shuffle: db
    },
    install: P,
    effects: _t,
    ticker: Et,
    updateRoot: Ut.updateRoot,
    plugins: pt,
    globalTimeline: L,
    core: {
      PropTween: pe,
      globals: S,
      Tween: Gt,
      Timeline: Ut,
      Animation: qt,
      getCache: fa,
      _removeLinkedListItem: ya,
      reverting: function reverting() {
        return B;
      },
      context: function context(t) {
        return t && l && (l.data.push(t), t._ctx = l), l;
      },
      suppressOverwrites: function suppressOverwrites(t) {
        return I = t;
      }
    }
  };
  ha("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return Pe[t] = Gt[t];
  }), Et.add(Ut.updateRoot), c = Pe.to({}, {
    duration: 0
  });

  function Hc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) {
      r = r._next;
    }

    return r;
  }

  function Jc(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, n, e) {
        e._onInit = function (t) {
          var e, i;

          if (r(n) && (e = {}, ha(n, function (t) {
            return e[t] = 1;
          }), n = e), a) {
            for (i in e = {}, n) {
              e[i] = a(n[i]);
            }

            n = e;
          }

          !function _addModifiers(t, e) {
            var r,
                i,
                n,
                a = t._targets;

            for (r in e) {
              for (i = a.length; i--;) {
                (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Hc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));
              }
            }
          }(t, n);
        };
      }
    };
  }

  var Ce = Pe.registerPlugin({
    name: "attr",
    init: function init(t, e, r, i, n) {
      var a, s, o;

      for (a in this.tween = r, e) {
        o = t.getAttribute(a) || "", (s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a, s.b = o, this._props.push(a);
      }
    },
    render: function render(t, e) {
      for (var r = e._pt; r;) {
        B ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next;
      }
    }
  }, {
    name: "endArray",
    init: function init(t, e) {
      for (var r = e.length; r--;) {
        this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
      }
    }
  }, Jc("roundProps", fb), Jc("modifiers"), Jc("snap", gb)) || Pe;
  Gt.version = Ut.version = Ce.version = "3.11.4", o = 1, x() && zt();

  function td(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }

  function ud(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }

  function vd(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  }

  function wd(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e);
  }

  function xd(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }

  function yd(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }

  function zd(t, e, r) {
    return t.style[e] = r;
  }

  function Ad(t, e, r) {
    return t.style.setProperty(e, r);
  }

  function Bd(t, e, r) {
    return t._gsap[e] = r;
  }

  function Cd(t, e, r) {
    return t._gsap.scaleX = t._gsap.scaleY = r;
  }

  function Dd(t, e, r, i, n) {
    var a = t._gsap;
    a.scaleX = a.scaleY = r, a.renderTransform(n, a);
  }

  function Ed(t, e, r, i, n) {
    var a = t._gsap;
    a[e] = r, a.renderTransform(n, a);
  }

  function Hd(t, e) {
    var r = this,
        i = this.target,
        n = i.style;

    if (t in rr) {
      if (this.tfm = this.tfm || {}, "transform" !== t && (~(t = hr[t] || t).indexOf(",") ? t.split(",").forEach(function (t) {
        return r.tfm[t] = mr(i, t);
      }) : this.tfm[t] = i._gsap.x ? i._gsap[t] : mr(i, t)), 0 <= this.props.indexOf(lr)) return;
      i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(fr, e, "")), t = lr;
    }

    (n || e) && this.props.push(t, e, n[t]);
  }

  function Id(t) {
    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
  }

  function Jd() {
    var t,
        e,
        r = this.props,
        i = this.target,
        n = i.style,
        a = i._gsap;

    for (t = 0; t < r.length; t += 3) {
      r[t + 1] ? i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty(r[t].replace(sr, "-$1").toLowerCase());
    }

    if (this.tfm) {
      for (e in this.tfm) {
        a[e] = this.tfm[e];
      }

      a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), !(t = Fe()) || t.isStart || n[lr] || (Id(n), a.uncache = 1);
    }
  }

  function Kd(t, e) {
    var r = {
      target: t,
      props: [],
      revert: Jd,
      save: Hd
    };
    return e && e.split(",").forEach(function (t) {
      return r.save(t);
    }), r;
  }

  function Md(t, e) {
    var r = Se.createElementNS ? Se.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Se.createElement(t);
    return r.style ? r : Se.createElement(t);
  }

  function Nd(t, e, r) {
    var i = getComputedStyle(t);
    return i[e] || i.getPropertyValue(e.replace(sr, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && Nd(t, dr(e) || e, 1) || "";
  }

  function Qd() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() && window.document && (Ae = window, Se = Ae.document, Re = Se.documentElement, Ee = Md("div") || {
      style: {}
    }, Md("div"), lr = dr(lr), fr = lr + "Origin", Ee.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ie = !!dr("perspective"), Fe = Ce.core.reverting, De = 1);
  }

  function Rd(t) {
    var e,
        r = Md("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        i = this.parentNode,
        n = this.nextSibling,
        a = this.style.cssText;
    if (Re.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
      e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Rd;
    } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), Re.removeChild(r), this.style.cssText = a, e;
  }

  function Sd(t, e) {
    for (var r = e.length; r--;) {
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    }
  }

  function Td(e) {
    var r;

    try {
      r = e.getBBox();
    } catch (t) {
      r = Rd.call(e, !0);
    }

    return r && (r.width || r.height) || e.getBBox === Rd || (r = Rd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
      x: +Sd(e, ["x", "cx", "x1"]) || 0,
      y: +Sd(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    };
  }

  function Ud(t) {
    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Td(t));
  }

  function Vd(t, e) {
    if (e) {
      var r = t.style;
      e in rr && e !== fr && (e = lr), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(sr, "-$1").toLowerCase())) : r.removeAttribute(e);
    }
  }

  function Wd(t, e, r, i, n, a) {
    var s = new pe(t._pt, e, r, 0, 1, a ? yd : xd);
    return (t._pt = s).b = i, s.e = n, t._props.push(r), s;
  }

  function Zd(t, e, r, i) {
    var n,
        a,
        s,
        o,
        u = parseFloat(r) || 0,
        h = (r + "").trim().substr((u + "").length) || "px",
        l = Ee.style,
        f = or.test(e),
        c = "svg" === t.tagName.toLowerCase(),
        d = (c ? "client" : "offset") + (f ? "Width" : "Height"),
        p = "px" === i,
        _ = "%" === i;

    return i === h || !u || pr[i] || pr[h] ? u : ("px" === h || p || (u = Zd(t, e, r, "px")), o = t.getCTM && Ud(t), !_ && "%" !== h || !rr[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !c ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Se && a.appendChild || (a = Se.body), (s = a._gsap) && _ && s.width && f && s.time === Et.time && !s.uncache ? ia(u / s.width * 100) : (!_ && "%" !== h || _r[Nd(a, "display")] || (l.position = Nd(t, "position")), a === t && (l.position = "static"), a.appendChild(Ee), n = Ee[d], a.removeChild(Ee), l.position = "absolute", f && _ && ((s = fa(a)).time = Et.time, s.width = a[d]), ia(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[d], ia(_ ? u / n * 100 : u / 100 * n)));
  }

  function _d(t, e, r, i) {
    if (!r || "none" === r) {
      var n = dr(e, t, 1),
          a = n && Nd(t, n, 1);
      a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = Nd(t, "borderTopColor"));
    }

    var s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p,
        _,
        m,
        g = new pe(this._pt, t.style, e, 0, 1, se),
        v = 0,
        y = 0;

    if (g.b = r, g.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = Nd(t, e) || i, t.style[e] = r), Eb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
      for (; o = rt.exec(i);) {
        c = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), c !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === c.charAt(1) && (c = ka(h, c) + m), d = parseFloat(c), _ = c.substr((d + "").length), v = rt.lastIndex - _.length, _ || (_ = _ || j.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = Zd(t, e, f, _) || 0), g._pt = {
          _next: g._pt,
          p: p || 1 === y ? p : ",",
          s: h,
          c: d - h,
          m: l && l < 4 || "zIndex" === e ? Math.round : 0
        });
      }

      g.c = v < i.length ? i.substring(v, i.length) : "";
    } else g.r = "display" === e && "none" === i ? yd : xd;

    return nt.test(i) && (g.e = 0), this._pt = g;
  }

  function be(t) {
    var e = t.split(" "),
        r = e[0],
        i = e[1] || "50%";
    return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = gr[r] || r, e[1] = gr[i] || i, e.join(" ");
  }

  function ce(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
          i,
          n,
          a = e.t,
          s = a.style,
          o = e.u,
          u = a._gsap;
      if ("all" === o || !0 === o) s.cssText = "", i = 1;else for (n = (o = o.split(",")).length; -1 < --n;) {
        r = o[n], rr[r] && (i = 1, r = "transformOrigin" === r ? fr : lr), Vd(a, r);
      }
      i && (Vd(a, lr), u && (u.svg && a.removeAttribute("transform"), br(a, 1), u.uncache = 1, Id(s)));
    }
  }

  function ge(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }

  function he(t) {
    var e = Nd(t, lr);
    return ge(e) ? yr : e.substr(7).match(et).map(ia);
  }

  function ie(t, e) {
    var r,
        i,
        n,
        a,
        s = t._gsap || fa(t),
        o = t.style,
        u = he(t);
    return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? yr : u : (u !== yr || t.offsetParent || t === Re || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextElementSibling, Re.appendChild(t)), u = he(t), n ? o.display = n : Vd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Re.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }

  function je(t, e, r, i, n, a) {
    var s,
        o,
        u,
        h = t._gsap,
        l = n || ie(t, !0),
        f = h.xOrigin || 0,
        c = h.yOrigin || 0,
        d = h.xOffset || 0,
        p = h.yOffset || 0,
        _ = l[0],
        m = l[1],
        g = l[2],
        v = l[3],
        y = l[4],
        T = l[5],
        b = e.split(" "),
        w = parseFloat(b[0]) || 0,
        x = parseFloat(b[1]) || 0;
    r ? l !== yr && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = Td(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - c, h.xOffset = d + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[fr] = "0px 0px", a && (Wd(a, h, "xOrigin", f, w), Wd(a, h, "yOrigin", c, x), Wd(a, h, "xOffset", d, h.xOffset), Wd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x);
  }

  function me(t, e, r) {
    var i = Ya(e);
    return ia(parseFloat(e) + parseFloat(Zd(t, "x", r + "px", i))) + i;
  }

  function te(t, e, i, n, a) {
    var s,
        o,
        u = 360,
        h = r(a),
        l = parseFloat(a) * (h && ~a.indexOf("rad") ? ir : 1) - n,
        f = n + l + "deg";
    return h && ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === s && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === s && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = o = new pe(t._pt, e, i, n, l, ud), o.e = f, o.u = "deg", t._props.push(i), o;
  }

  function ue(t, e) {
    for (var r in e) {
      t[r] = e[r];
    }

    return t;
  }

  function ve(t, e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l = ue({}, r._gsap),
        f = r.style;

    for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[lr] = e, i = br(r, 1), Vd(r, lr), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[lr], f[lr] = e, i = br(r, 1), f[lr] = a), rr) {
      (a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ya(a) !== (h = Ya(s)) ? Zd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new pe(t._pt, i, n, o, u - o, td), t._pt.u = h || 0, t._props.push(n));
    }

    ue(i, l);
  }

  var Ae,
      Se,
      Re,
      De,
      Ee,
      ze,
      Fe,
      Ie,
      Be = Ft.Power0,
      Le = Ft.Power1,
      Ye = Ft.Power2,
      Ne = Ft.Power3,
      qe = Ft.Power4,
      Ue = Ft.Linear,
      Ve = Ft.Quad,
      We = Ft.Cubic,
      Xe = Ft.Quart,
      He = Ft.Quint,
      Qe = Ft.Strong,
      Ke = Ft.Elastic,
      Ze = Ft.Back,
      Ge = Ft.SteppedEase,
      Je = Ft.Bounce,
      $e = Ft.Sine,
      tr = Ft.Expo,
      er = Ft.Circ,
      rr = {},
      ir = 180 / Math.PI,
      nr = Math.PI / 180,
      ar = Math.atan2,
      sr = /([A-Z])/g,
      or = /(left|right|width|margin|padding|x)/i,
      ur = /[\s,\(]\S/,
      hr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      lr = "transform",
      fr = lr + "Origin",
      cr = "O,Moz,ms,Ms,Webkit".split(","),
      dr = function _checkPropPrefix(t, e, r) {
    var i = (e || Ee).style,
        n = 5;
    if (t in i && !r) return t;

    for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(cr[n] + t in i);) {
      ;
    }

    return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? cr[n] : "") + t;
  },
      pr = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      _r = {
    grid: 1,
    flex: 1
  },
      mr = function _get(t, e, r, i) {
    var n;
    return De || Qd(), e in hr && "transform" !== e && ~(e = hr[e]).indexOf(",") && (e = e.split(",")[0]), rr[e] && "transform" !== e ? (n = br(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : wr(Nd(t, fr)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = vr[e] && vr[e](t, e, r) || Nd(t, e) || ga(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Zd(t, e, n, r) + r : n;
  },
      gr = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      vr = {
    clearProps: function clearProps(t, e, r, i, n) {
      if ("isFromStart" !== n.data) {
        var a = t._pt = new pe(t._pt, e, r, 0, 0, ce);
        return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1;
      }
    }
  },
      yr = [1, 0, 0, 1, 0, 0],
      Tr = {},
      br = function _parseTransform(t, e) {
    var r = t._gsap || new jt(t);
    if ("x" in r && !e && !r.uncache) return r;

    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p,
        _,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        k,
        M,
        O,
        P,
        C,
        A,
        S,
        R,
        D,
        E,
        z,
        F = t.style,
        I = r.scaleX < 0,
        B = "deg",
        L = getComputedStyle(t),
        Y = Nd(t, fr) || "0";

    return i = n = a = u = h = l = f = c = d = 0, s = o = 1, r.svg = !(!t.getCTM || !Ud(t)), L.translate && ("none" === L.translate && "none" === L.scale && "none" === L.rotate || (F[lr] = ("none" !== L.translate ? "translate3d(" + (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") + ("none" !== L.scale ? "scale(" + L.scale.split(" ").join(",") + ") " : "") + ("none" !== L[lr] ? L[lr] : "")), F.scale = F.rotate = F.translate = "none"), m = ie(t, r.svg), r.svg && (O = r.uncache ? (P = t.getBBox(), Y = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px", "") : !e && t.getAttribute("data-svg-origin"), je(t, O || Y, !!O || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== yr && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = M = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? ar(b, T) * ir : 0, (f = w || x ? ar(w, x) * ir + u : 0) && (o *= Math.abs(Math.cos(f * nr))), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (z = m[6], D = m[7], A = m[8], S = m[9], R = m[10], E = m[11], i = m[12], n = m[13], a = m[14], h = (g = ar(z, R)) * ir, g && (O = k * (v = Math.cos(-g)) + A * (y = Math.sin(-g)), P = M * v + S * y, C = z * v + R * y, A = k * -y + A * v, S = M * -y + S * v, R = z * -y + R * v, E = D * -y + E * v, k = O, M = P, z = C), l = (g = ar(-w, R)) * ir, g && (v = Math.cos(-g), E = x * (y = Math.sin(-g)) + E * v, T = O = T * v - A * y, b = P = b * v - S * y, w = C = w * v - R * y), u = (g = ar(b, T)) * ir, g && (O = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), P = k * v + M * y, b = b * v - T * y, M = M * v - k * y, T = O, k = P), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ia(Math.sqrt(T * T + b * b + w * w)), o = ia(Math.sqrt(M * M + z * z)), g = ar(k, M), f = 2e-4 < Math.abs(g) ? g * ir : 0, d = E ? 1 / (E < 0 ? -E : E) : 0), r.svg && (O = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !ge(Nd(t, lr)), O && t.setAttribute("transform", O))), 90 < Math.abs(f) && Math.abs(f) < 270 && (I ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ia(s), r.scaleY = ia(o), r.rotation = ia(u) + B, r.rotationX = ia(h) + B, r.rotationY = ia(l) + B, r.skewX = f + B, r.skewY = c + B, r.transformPerspective = d + "px", (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (F[fr] = wr(Y)), r.xOffset = r.yOffset = 0, r.force3D = j.force3D, r.renderTransform = r.svg ? Cr : Ie ? Pr : xr, r.uncache = 0, r;
  },
      wr = function _firstTwoOnly(t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
      xr = function _renderNon3DTransforms(t, e) {
    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Pr(t, e);
  },
      kr = "0deg",
      Mr = "0px",
      Or = ") ",
      Pr = function _renderCSSTransforms(t, e) {
    var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        c = r.skewY,
        d = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = "auto" === m && t && 1 !== t || !0 === m;

    if (v && (l !== kr || h !== kr)) {
      var b,
          w = parseFloat(h) * nr,
          x = Math.sin(w),
          k = Math.cos(w);
      w = parseFloat(l) * nr, b = Math.cos(w), a = me(g, a, x * b * -v), s = me(g, s, -Math.sin(w) * -v), o = me(g, o, k * b * -v + v);
    }

    _ !== Mr && (y += "perspective(" + _ + Or), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Mr && s === Mr && o === Mr || (y += o !== Mr || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Or), u !== kr && (y += "rotate(" + u + Or), h !== kr && (y += "rotateY(" + h + Or), l !== kr && (y += "rotateX(" + l + Or), f === kr && c === kr || (y += "skew(" + f + ", " + c + Or), 1 === d && 1 === p || (y += "scale(" + d + ", " + p + Or), g.style[lr] = y || "translate(0, 0)";
  },
      Cr = function _renderSVGTransforms(t, e) {
    var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        c = o.rotation,
        d = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        k = parseFloat(f);
    c = parseFloat(c), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), c += p), c || d ? (c *= nr, d *= nr, r = Math.cos(c) * _, i = Math.sin(c) * _, n = Math.sin(c - d) * -m, a = Math.cos(c - d) * m, d && (p *= nr, s = Math.tan(d - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ia(r), i = ia(i), n = ia(n), a = ia(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = Zd(g, "x", l, "px"), k = Zd(g, "y", f, "px")), (v || y || T || b) && (x = ia(x + v - (v * r + y * n) + T), k = ia(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ia(x + u / 100 * s.width), k = ia(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[lr] = s);
  };

  ha("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
        i = "Bottom",
        n = "Left",
        o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {
      return r < 2 ? e + t : "border" + t + e;
    });

    vr[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4) return a = o.map(function (t) {
        return mr(e, t, r);
      }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
      a = (i + "").split(" "), s = {}, o.forEach(function (t, e) {
        return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0];
      }), e.init(t, s, n);
    };
  });
  var Ar,
      Sr,
      Rr,
      Dr = {
    name: "css",
    register: Qd,
    targetTest: function targetTest(t) {
      return t.style && t.nodeType;
    },
    init: function init(t, e, i, n, a) {
      var s,
          o,
          u,
          h,
          l,
          f,
          c,
          d,
          p,
          _,
          m,
          g,
          v,
          y,
          T,
          b,
          w = this._props,
          x = t.style,
          k = i.vars.startAt;

      for (c in De || Qd(), this.styles = this.styles || Kd(t), b = this.styles.props, this.tween = i, e) {
        if ("autoRound" !== c && (o = e[c], !pt[c] || !_b(c, e, i, n, t, a))) if (l = _typeof(o), f = vr[c], "function" === l && (l = _typeof(o = o.call(i, n, t, a))), "string" === l && ~o.indexOf("random(") && (o = ob(o)), f) f(this, t, c, o, i) && (T = 1);else if ("--" === c.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(c) + "").trim(), o += "", Rt.lastIndex = 0, Rt.test(s) || (d = Ya(s), p = Ya(o)), p ? d !== p && (s = Zd(t, c, s, p) + p) : d && (o += d), this.add(x, "setProperty", s, o, n, a, 0, 0, c), w.push(c), b.push(c, 0, x[c]);else if ("undefined" !== l) {
          if (k && c in k ? (s = "function" == typeof k[c] ? k[c].call(i, n, t, a) : k[c], r(s) && ~s.indexOf("random(") && (s = ob(s)), Ya(s + "") || (s += j.units[c] || Ya(mr(t, c)) || ""), "=" === (s + "").charAt(1) && (s = mr(t, c))) : s = mr(t, c), h = parseFloat(s), (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), u = parseFloat(o), c in hr && ("autoAlpha" === c && (1 === h && "hidden" === mr(t, "visibility") && u && (h = 0), b.push("visibility", 0, x.visibility), Wd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== c && "transform" !== c && ~(c = hr[c]).indexOf(",") && (c = c.split(",")[0])), m = c in rr) {
            if (this.styles.save(c), g || ((v = t._gsap).renderTransform && !e.parseTransform || br(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new pe(this._pt, x, lr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new pe(this._pt, v, "scaleY", v.scaleY, (_ ? ka(v.scaleY, _ + u) : u) - v.scaleY || 0, td), this._pt.u = 0, w.push("scaleY", c), c += "X";else {
              if ("transformOrigin" === c) {
                b.push(fr, 0, x[fr]), o = be(o), v.svg ? je(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Wd(this, v, "zOrigin", v.zOrigin, p), Wd(this, x, c, wr(s), wr(o)));
                continue;
              }

              if ("svgOrigin" === c) {
                je(t, o, 1, y, 0, this);
                continue;
              }

              if (c in Tr) {
                te(this, v, c, h, _ ? ka(h, _ + o) : o);
                continue;
              }

              if ("smoothOrigin" === c) {
                Wd(this, v, "smooth", v.smooth, o);
                continue;
              }

              if ("force3D" === c) {
                v[c] = o;
                continue;
              }

              if ("transform" === c) {
                ve(this, o, t);
                continue;
              }
            }
          } else c in x || (c = dr(c) || c);
          if (m || (u || 0 === u) && (h || 0 === h) && !ur.test(o) && c in x) u = u || 0, (d = (s + "").substr((h + "").length)) !== (p = Ya(o) || (c in j.units ? j.units[c] : d)) && (h = Zd(t, c, s, p)), this._pt = new pe(this._pt, m ? v : x, c, h, (_ ? ka(h, _ + u) : u) - h, m || "px" !== p && "zIndex" !== c || !1 === e.autoRound ? td : wd), this._pt.u = p || 0, d !== p && "%" !== p && (this._pt.b = s, this._pt.r = vd);else if (c in x) _d.call(this, t, c, s, _ ? _ + o : o);else if (c in t) this.add(t, c, s || t[c], _ ? _ + o : o, n, a);else if ("parseTransform" !== c) {
            Q(c, o);
            continue;
          }
          m || (c in x ? b.push(c, 0, x[c]) : b.push(c, 1, s || t[c])), w.push(c);
        }
      }

      T && de(this);
    },
    render: function render(t, e) {
      if (e.tween._time || !Fe()) for (var r = e._pt; r;) {
        r.r(t, r.d), r = r._next;
      } else e.styles.revert();
    },
    get: mr,
    aliases: hr,
    getSetter: function getSetter(t, e, r) {
      var i = hr[e];
      return i && i.indexOf(",") < 0 && (e = i), e in rr && e !== fr && (t._gsap.x || mr(t, "x")) ? r && ze === r ? "scale" === e ? Cd : Bd : (ze = r || {}) && ("scale" === e ? Dd : Ed) : t.style && !u(t.style[e]) ? zd : ~e.indexOf("-") ? Ad : re(t, e);
    },
    core: {
      _removeProperty: Vd,
      _getMatrix: ie
    }
  };
  Ce.utils.checkPrefix = dr, Ce.core.getStyleSaver = Kd, Rr = ha((Ar = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Sr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
    rr[t] = 1;
  }), ha(Sr, function (t) {
    j.units[t] = "deg", Tr[t] = 1;
  }), hr[Rr[13]] = Ar + "," + Sr, ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
    var e = t.split(":");
    hr[e[1]] = Rr[e[0]];
  }), ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
    j.units[t] = "px";
  }), Ce.registerPlugin(Dr);
  var Er = Ce.registerPlugin(Dr) || Ce,
      zr = Er.core.Tween;
  e.Back = Ze, e.Bounce = Je, e.CSSPlugin = Dr, e.Circ = er, e.Cubic = We, e.Elastic = Ke, e.Expo = tr, e.Linear = Ue, e.Power0 = Be, e.Power1 = Le, e.Power2 = Ye, e.Power3 = Ne, e.Power4 = qe, e.Quad = Ve, e.Quart = Xe, e.Quint = He, e.Sine = $e, e.SteppedEase = Ge, e.Strong = Qe, e.TimelineLite = Ut, e.TimelineMax = Ut, e.TweenLite = Gt, e.TweenMax = zr, e["default"] = Er, e.gsap = Er;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e["default"];
  }
});
/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {});
}(void 0, function (e) {
  "use strict";

  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }

  function r() {
    return we || "undefined" != typeof window && (we = window.gsap) && we.registerPlugin && we;
  }

  function z(e, t) {
    return ~Fe.indexOf(e) && Fe[Fe.indexOf(e) + 1][t];
  }

  function A(e) {
    return !!~t.indexOf(e);
  }

  function B(e, t, r, n, o) {
    return e.addEventListener(t, r, {
      passive: !n,
      capture: !!o
    });
  }

  function C(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }

  function F() {
    return Be && Be.isPressed || ze.cache++;
  }

  function G(r, n) {
    function Tc(e) {
      if (e || 0 === e) {
        o && (Ce.history.scrollRestoration = "manual");
        var t = Be && Be.isPressed;
        e = Tc.v = Math.round(e) || (Be && Be.iOS ? 1 : 0), r(e), Tc.cacheID = ze.cache, t && i("ss", e);
      } else (n || ze.cache !== Tc.cacheID || i("ref")) && (Tc.cacheID = ze.cache, Tc.v = r());

      return Tc.v + Tc.offset;
    }

    return Tc.offset = 0, r && Tc;
  }

  function J(e) {
    return we.utils.toArray(e)[0] || ("string" == typeof e && !1 !== we.config().nullTargetWarn ? console.warn("Element not found:", e) : null);
  }

  function K(t, e) {
    var r = e.s,
        n = e.sc;
    A(t) && (t = Ee.scrollingElement || ke);
    var o = ze.indexOf(t),
        i = n === Ke.sc ? 1 : 2;
    ~o || (o = ze.push(t) - 1), ze[o + i] || t.addEventListener("scroll", F);
    var a = ze[o + i],
        s = a || (ze[o + i] = G(z(t, r), !0) || (A(t) ? n : G(function (e) {
      return arguments.length ? t[r] = e : t[r];
    })));
    return s.target = t, a || (s.smooth = "smooth" === we.getProperty(t, "scrollBehavior")), s;
  }

  function L(e, t, o) {
    function pd(e, t) {
      var r = Ne();
      t || n < r - s ? (a = i, i = e, l = s, s = r) : o ? i += e : i = a + (e - a) / (r - l) * (s - l);
    }

    var i = e,
        a = e,
        s = Ne(),
        l = s,
        n = t || 50,
        c = Math.max(500, 3 * n);
    return {
      update: pd,
      reset: function reset() {
        a = i = o ? 0 : i, l = s = 0;
      },
      getVelocity: function getVelocity(e) {
        var t = l,
            r = a,
            n = Ne();
        return !e && 0 !== e || e === i || pd(e), s === l || c < n - l ? 0 : (i + (o ? r : -r)) / ((o ? n : s) - t) * 1e3;
      }
    };
  }

  function M(e, t) {
    return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
  }

  function N(e) {
    var t = Math.max.apply(Math, e),
        r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }

  function O() {
    (Ae = we.core.globals().ScrollTrigger) && Ae.core && function _integrate() {
      var e = Ae.core,
          r = e.bridge || {},
          t = e._scrollers,
          n = e._proxies;
      t.push.apply(t, ze), n.push.apply(n, Fe), ze = t, Fe = n, i = function _bridge(e, t) {
        return r[e](t);
      };
    }();
  }

  function P(e) {
    return (we = e || r()) && "undefined" != typeof document && document.body && (Ce = window, ke = (Ee = document).documentElement, Me = Ee.body, t = [Ce, Ee, ke, Me], we.utils.clamp, Ie = we.core.context || function () {}, Oe = "onpointerenter" in Me ? "pointer" : "mouse", Pe = E.isTouch = Ce.matchMedia && Ce.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Ce || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, De = E.eventTypes = ("ontouchstart" in ke ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ke ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
      return o = 0;
    }, 500), O(), Se = 1), Se;
  }

  var we,
      Se,
      Ce,
      Ee,
      ke,
      Me,
      Pe,
      Oe,
      Ae,
      t,
      Be,
      De,
      Ie,
      o = 1,
      Le = [],
      ze = [],
      Fe = [],
      Ne = Date.now,
      i = function _bridge(e, t) {
    return t;
  },
      n = "scrollLeft",
      a = "scrollTop",
      Xe = {
    s: n,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: G(function (e) {
      return arguments.length ? Ce.scrollTo(e, Ke.sc()) : Ce.pageXOffset || Ee[n] || ke[n] || Me[n] || 0;
    })
  },
      Ke = {
    s: a,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Xe,
    sc: G(function (e) {
      return arguments.length ? Ce.scrollTo(Xe.sc(), e) : Ce.pageYOffset || Ee[a] || ke[a] || Me[a] || 0;
    })
  };

  Xe.op = Ke, ze.cache = 0;
  var E = (Observer.prototype.init = function init(e) {
    Se || P(we) || console.warn("Please gsap.registerPlugin(Observer)"), Ae || O();
    var o = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        i = e.target,
        r = e.lineHeight,
        n = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        p = e.event,
        d = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        v = e.onPress,
        b = e.onRelease,
        m = e.onRight,
        y = e.onLeft,
        x = e.onUp,
        w = e.onDown,
        _ = e.onChangeX,
        T = e.onChangeY,
        S = e.onChange,
        E = e.onToggleX,
        k = e.onToggleY,
        D = e.onHover,
        I = e.onHoverEnd,
        R = e.onMove,
        Y = e.ignoreCheck,
        z = e.isNormalizer,
        X = e.onGestureStart,
        W = e.onGestureEnd,
        H = e.onWheel,
        U = e.onEnable,
        j = e.onDisable,
        q = e.onClick,
        V = e.scrollSpeed,
        G = e.capture,
        Z = e.allowClicks,
        $ = e.lockAxis,
        Q = e.onLockAxis;

    function Qe() {
      return ye = Ne();
    }

    function Re(e, t) {
      return (se.event = e) && u && ~u.indexOf(e.target) || t && ge && "touch" !== e.pointerType || Y && Y(e, t);
    }

    function Te() {
      var e = se.deltaX = N(be),
          t = se.deltaY = N(me),
          r = Math.abs(e) >= o,
          n = Math.abs(t) >= o;
      S && (r || n) && S(se, e, t, be, me), r && (m && 0 < se.deltaX && m(se), y && se.deltaX < 0 && y(se), _ && _(se), E && se.deltaX < 0 != le < 0 && E(se), le = se.deltaX, be[0] = be[1] = be[2] = 0), n && (w && 0 < se.deltaY && w(se), x && se.deltaY < 0 && x(se), T && T(se), k && se.deltaY < 0 != ce < 0 && k(se), ce = se.deltaY, me[0] = me[1] = me[2] = 0), (ne || re) && (R && R(se), re && (h(se), re = !1), ne = !1), ie && !(ie = !1) && Q && Q(se), oe && (H(se), oe = !1), ee = 0;
    }

    function Ue(e, t, r) {
      be[r] += e, me[r] += t, se._vx.update(e), se._vy.update(t), n ? ee = ee || requestAnimationFrame(Te) : Te();
    }

    function Ve(e, t) {
      $ && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y", ie = !0), "y" !== ae && (be[2] += e, se._vx.update(e, !0)), "x" !== ae && (me[2] += t, se._vy.update(t, !0)), n ? ee = ee || requestAnimationFrame(Te) : Te();
    }

    function We(e) {
      if (!Re(e, 1)) {
        var t = (e = M(e, s)).clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y,
            i = se.isDragging;
        se.x = t, se.y = r, (i || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0), i || (se.isDragging = !0), Ve(n, o), i || d && d(se));
      }
    }

    function Ye(t) {
      if (!Re(t, 1)) {
        C(z ? i : ve, De[1], We, !0);
        var e = !isNaN(se.y - se.startY),
            r = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)),
            n = M(t);
        !r && e && (se._vx.reset(), se._vy.reset(), s && Z && we.delayedCall(.08, function () {
          if (300 < Ne() - ye && !t.defaultPrevented) if (t.target.click) t.target.click();else if (ve.createEvent) {
            var e = ve.createEvent("MouseEvents");
            e.initMouseEvent("click", !0, !0, Ce, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e);
          }
        })), se.isDragging = se.isGesturing = se.isPressed = !1, l && !z && te.restart(!0), g && r && g(se), b && b(se, r);
      }
    }

    function Ze(e) {
      return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && X(e, se.isDragging);
    }

    function $e() {
      return (se.isGesturing = !1) || W(se);
    }

    function _e(e) {
      if (!Re(e)) {
        var t = ue(),
            r = fe();
        Ue((t - pe) * V, (r - de) * V, 1), pe = t, de = r, l && te.restart(!0);
      }
    }

    function af(e) {
      if (!Re(e)) {
        e = M(e, s), H && (oe = !0);
        var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? Ce.innerHeight : 1) * f;
        Ue(e.deltaX * t, e.deltaY * t, 0), l && !z && te.restart(!0);
      }
    }

    function bf(e) {
      if (!Re(e)) {
        var t = e.clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y;
        se.x = t, se.y = r, ne = !0, (n || o) && Ve(n, o);
      }
    }

    function cf(e) {
      se.event = e, D(se);
    }

    function df(e) {
      se.event = e, I(se);
    }

    function ef(e) {
      return Re(e) || M(e, s) && q(se);
    }

    this.target = i = J(i) || ke, this.vars = e, u = u && we.utils.toArray(u), o = o || 1e-9, a = a || 0, f = f || 1, V = V || 1, t = t || "wheel,touch,pointer", n = !1 !== n, r = r || parseFloat(Ce.getComputedStyle(Me).lineHeight) || 22;

    var ee,
        te,
        re,
        ne,
        oe,
        ie,
        ae,
        se = this,
        le = 0,
        ce = 0,
        ue = K(i, Xe),
        fe = K(i, Ke),
        pe = ue(),
        de = fe(),
        ge = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === De[0],
        he = A(i),
        ve = i.ownerDocument || Ee,
        be = [0, 0, 0],
        me = [0, 0, 0],
        ye = 0,
        xe = se.onPress = function (e) {
      Re(e, 1) || (se.axis = ae = null, te.pause(), se.isPressed = !0, e = M(e), le = ce = 0, se.startX = se.x = e.clientX, se.startY = se.y = e.clientY, se._vx.reset(), se._vy.reset(), B(z ? i : ve, De[1], We, s, !0), se.deltaX = se.deltaY = 0, v && v(se));
    };

    te = se._dc = we.delayedCall(c || .25, function onStopFunc() {
      se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
    }).pause(), se.deltaX = se.deltaY = 0, se._vx = L(0, 50, !0), se._vy = L(0, 50, !0), se.scrollX = ue, se.scrollY = fe, se.isDragging = se.isGesturing = se.isPressed = !1, Ie(this), se.enable = function (e) {
      return se.isEnabled || (B(he ? ve : i, "scroll", F), 0 <= t.indexOf("scroll") && B(he ? ve : i, "scroll", _e, s, G), 0 <= t.indexOf("wheel") && B(i, "wheel", af, s, G), (0 <= t.indexOf("touch") && Pe || 0 <= t.indexOf("pointer")) && (B(i, De[0], xe, s, G), B(ve, De[2], Ye), B(ve, De[3], Ye), Z && B(i, "click", Qe, !1, !0), q && B(i, "click", ef), X && B(ve, "gesturestart", Ze), W && B(ve, "gestureend", $e), D && B(i, Oe + "enter", cf), I && B(i, Oe + "leave", df), R && B(i, Oe + "move", bf)), se.isEnabled = !0, e && e.type && xe(e), U && U(se)), se;
    }, se.disable = function () {
      se.isEnabled && (Le.filter(function (e) {
        return e !== se && A(e.target);
      }).length || C(he ? ve : i, "scroll", F), se.isPressed && (se._vx.reset(), se._vy.reset(), C(z ? i : ve, De[1], We, !0)), C(he ? ve : i, "scroll", _e, G), C(i, "wheel", af, G), C(i, De[0], xe, G), C(ve, De[2], Ye), C(ve, De[3], Ye), C(i, "click", Qe, !0), C(i, "click", ef), C(ve, "gesturestart", Ze), C(ve, "gestureend", $e), C(i, Oe + "enter", cf), C(i, Oe + "leave", df), C(i, Oe + "move", bf), se.isEnabled = se.isPressed = se.isDragging = !1, j && j(se));
    }, se.kill = se.revert = function () {
      se.disable();
      var e = Le.indexOf(se);
      0 <= e && Le.splice(e, 1), Be === se && (Be = 0);
    }, Le.push(se), z && A(i) && (Be = se), se.enable(p);
  }, function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
  }(Observer, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]), Observer);

  function Observer(e) {
    this.init(e);
  }

  E.version = "3.11.4", E.create = function (e) {
    return new E(e);
  }, E.register = P, E.getAll = function () {
    return Le.slice();
  }, E.getById = function (t) {
    return Le.filter(function (e) {
      return e.vars.id === t;
    })[0];
  }, r() && we.registerPlugin(E);

  function ya() {
    return ot = 1;
  }

  function za() {
    return ot = 0;
  }

  function Aa(e) {
    return e;
  }

  function Ba(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }

  function Ca() {
    return "undefined" != typeof window;
  }

  function Da() {
    return He || Ca() && (He = window.gsap) && He.registerPlugin && He;
  }

  function Ea(e) {
    return !!~l.indexOf(e);
  }

  function Fa(e) {
    return z(e, "getBoundingClientRect") || (Ea(e) ? function () {
      return Yt.width = Je.innerWidth, Yt.height = Je.innerHeight, Yt;
    } : function () {
      return Mt(e);
    });
  }

  function Ia(e, t) {
    var r = t.s,
        n = t.d2,
        o = t.d,
        i = t.a;
    return (r = "scroll" + n) && (i = z(e, r)) ? i() - Fa(e)()[o] : Ea(e) ? (qe[r] || Ge[r]) - (Je["inner" + n] || qe["client" + n] || Ge["client" + n]) : e[r] - e["offset" + n];
  }

  function Ja(e, t) {
    for (var r = 0; r < g.length; r += 3) {
      t && !~t.indexOf(g[r + 1]) || e(g[r], g[r + 1], g[r + 2]);
    }
  }

  function Ka(e) {
    return "string" == typeof e;
  }

  function La(e) {
    return "function" == typeof e;
  }

  function Ma(e) {
    return "number" == typeof e;
  }

  function Na(e) {
    return "object" == _typeof(e);
  }

  function Oa(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }

  function Pa(e, t) {
    if (e.enabled) {
      var r = t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }

  function eb(e) {
    return Je.getComputedStyle(e);
  }

  function gb(e, t) {
    for (var r in t) {
      r in e || (e[r] = t[r]);
    }

    return e;
  }

  function ib(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }

  function jb(e) {
    var t,
        r = [],
        n = e.labels,
        o = e.duration();

    for (t in n) {
      r.push(n[t] / o);
    }

    return r;
  }

  function lb(o) {
    var i = He.utils.snap(o),
        a = Array.isArray(o) && o.slice(0).sort(function (e, t) {
      return e - t;
    });
    return a ? function (e, t, r) {
      var n;
      if (void 0 === r && (r = .001), !t) return i(e);

      if (0 < t) {
        for (e -= r, n = 0; n < a.length; n++) {
          if (a[n] >= e) return a[n];
        }

        return a[n - 1];
      }

      for (n = a.length, e += r; n--;) {
        if (a[n] <= e) return a[n];
      }

      return a[0];
    } : function (e, t, r) {
      void 0 === r && (r = .001);
      var n = i(e);
      return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : i(t < 0 ? e - o : e + o);
    };
  }

  function nb(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }

  function ob(e, t, r, n, o) {
    return e.addEventListener(t, r, {
      passive: !n,
      capture: !!o
    });
  }

  function pb(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }

  function qb(e, t, r) {
    return r && r.wheelHandler && e(t, "wheel", r);
  }

  function ub(e, t) {
    if (Ka(e)) {
      var r = e.indexOf("="),
          n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in I ? I[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
    }

    return e;
  }

  function vb(e, t, r, n, o, i, a, s) {
    var l = o.startColor,
        c = o.endColor,
        u = o.fontSize,
        f = o.indent,
        p = o.fontWeight,
        d = je.createElement("div"),
        g = Ea(r) || "fixed" === z(r, "pinType"),
        h = -1 !== e.indexOf("scroller"),
        v = g ? Ge : r,
        b = -1 !== e.indexOf("start"),
        m = b ? l : c,
        y = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return y += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (y += (n === Ke ? T : S) + ":" + (i + parseFloat(f)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), d._isStart = b, d.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), d.style.cssText = y, d.innerText = t || 0 === t ? e + "-" + t : e, v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d), d._offset = d["offset" + n.op.d2], R(d, 0, n, b), d;
  }

  function Ab() {
    return 34 < gt() - ht && (w = w || requestAnimationFrame(j));
  }

  function Bb() {
    v && v.isPressed && !(v.startX > Ge.clientWidth) || (ze.cache++, v ? w = w || requestAnimationFrame(j) : j(), ht || W("scrollStart"), ht = gt());
  }

  function Cb() {
    y = Je.innerWidth, m = Je.innerHeight;
  }

  function Db() {
    ze.cache++, nt || h || je.fullscreenElement || je.webkitFullscreenElement || b && y === Je.innerWidth && !(Math.abs(Je.innerHeight - m) > .25 * Je.innerHeight) || c.restart(!0);
  }

  function Gb() {
    return pb(Q, "scrollEnd", Gb) || It(!0);
  }

  function Jb(e) {
    for (var t = 0; t < H.length; t += 5) {
      (!e || H[t + 4] && H[t + 4].query === e) && (H[t].style.cssText = H[t + 1], H[t].getBBox && H[t].setAttribute("transform", H[t + 2] || ""), H[t + 3].uncache = 1);
    }
  }

  function Kb(e, t) {
    var r;

    for (it = 0; it < At.length; it++) {
      !(r = At[it]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
    }

    t && Jb(t), t || W("revert");
  }

  function Lb(e, t) {
    ze.cache++, !t && ut || ze.forEach(function (e) {
      return La(e) && e.cacheID++ && (e.rec = 0);
    }), Ka(e) && (Je.history.scrollRestoration = x = e);
  }

  function Yb(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var o, i = q.length, a = t.style, s = e.style; i--;) {
        a[o = q[i]] = r[o];
      }

      a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[S] = s[T] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[mt] = ib(e, Xe) + kt, a[yt] = ib(e, Ke) + kt, a[St] = s[Ct] = s.top = s.left = "0", Rt(n), s[mt] = s.maxWidth = r[mt], s[yt] = s.maxHeight = r[yt], s[St] = r[St], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
    }
  }

  function _b(e) {
    for (var t = V.length, r = e.style, n = [], o = 0; o < t; o++) {
      n.push(V[o], r[V[o]]);
    }

    return n.t = e, n;
  }

  function cc(e, t, r, n, o, i, a, s, l, c, u, f, p) {
    La(e) && (e = e(s)), Ka(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? ub("0" + e.substr(3), r) : 0));
    var d,
        g,
        h,
        v = p ? p.time() : 0;
    if (p && p.seek(0), Ma(e)) a && R(a, r, n, !0);else {
      La(t) && (t = t(s));
      var b,
          m,
          y,
          x,
          w = (e || "0").split(" ");
      h = J(t) || Ge, (b = Mt(h) || {}) && (b.left || b.top) || "none" !== eb(h).display || (x = h.style.display, h.style.display = "block", b = Mt(h), x ? h.style.display = x : h.style.removeProperty("display")), m = ub(w[0], b[n.d]), y = ub(w[1] || "0", r), e = b[n.p] - l[n.p] - c + m + o - y, a && R(a, y, n, r - y < 20 || a._isStart && 20 < y), r -= r - y;
    }

    if (i) {
      var _ = e + r,
          T = i._isStart;

      d = "scroll" + n.d2, R(i, _, n, T && 20 < _ || !T && (u ? Math.max(Ge[d], qe[d]) : i.parentNode[d]) <= _ + 1), u && (l = Mt(a), u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + kt));
    }

    return p && h && (d = Mt(h), p.seek(f), g = Mt(h), p._caScrollDist = d[n.p] - g[n.p], e = e / p._caScrollDist * f), p && p.seek(v), p ? e : Math.round(e);
  }

  function ec(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
          i,
          a = e.style;

      if (t === Ge) {
        for (o in e._stOrig = a.cssText, i = eb(e)) {
          +o || $.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
        }

        a.top = r, a.left = n;
      } else a.cssText = e._stOrig;

      He.core.getCache(e).uncache = 1, t.appendChild(e);
    }
  }

  function fc(l, e) {
    function Uj(e, t, r, n, o) {
      var i = Uj.tween,
          a = t.onComplete,
          s = {};
      return r = r || f(), o = n && o || 0, n = n || e - r, i && i.kill(), c = Math.round(r), t[p] = e, (t.modifiers = s)[p] = function (e) {
        return (e = Math.round(f())) !== c && e !== u && 3 < Math.abs(e - c) && 3 < Math.abs(e - u) ? (i.kill(), Uj.tween = 0) : e = r + n * i.ratio + o * i.ratio * i.ratio, u = c, c = Math.round(e);
      }, t.onUpdate = function () {
        ze.cache++, j();
      }, t.onComplete = function () {
        Uj.tween = 0, a && a.call(i);
      }, i = Uj.tween = He.to(l, t);
    }

    var c,
        u,
        f = K(l, e),
        p = "_scroll" + e.p2;
    return (l[p] = f).wheelHandler = function () {
      return Uj.tween && Uj.tween.kill() && (Uj.tween = 0);
    }, ob(l, "wheel", f.wheelHandler), Uj;
  }

  var He,
      s,
      Je,
      je,
      qe,
      Ge,
      l,
      c,
      et,
      tt,
      rt,
      u,
      nt,
      ot,
      f,
      it,
      p,
      d,
      g,
      at,
      st,
      h,
      v,
      b,
      m,
      y,
      k,
      lt,
      x,
      ct,
      w,
      ut,
      ft,
      pt,
      dt = 1,
      gt = Date.now,
      _ = gt(),
      ht = 0,
      vt = 0,
      bt = Math.abs,
      T = "right",
      S = "bottom",
      mt = "width",
      yt = "height",
      xt = "Right",
      wt = "Left",
      _t = "Top",
      Tt = "Bottom",
      St = "padding",
      Ct = "margin",
      Et = "Width",
      D = "Height",
      kt = "px",
      Mt = function _getBounds(e, t) {
    var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== eb(e)[f] && He.to(e, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1),
        n = e.getBoundingClientRect();
    return r && r.progress(0).kill(), n;
  },
      Pt = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  },
      Ot = {
    toggleActions: "play",
    anticipatePin: 0
  },
      I = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
  },
      R = function _positionMarker(e, t, r, n) {
    var o = {
      display: "block"
    },
        i = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
    e._isFlipped = n, o[r.a + "Percent"] = n ? -100 : 0, o[r.a] = n ? "1px" : 0, o["border" + i + Et] = 1, o["border" + a + Et] = 0, o[r.p] = t + "px", He.set(e, o);
  },
      At = [],
      Bt = {},
      Y = {},
      X = [],
      W = function _dispatch(e) {
    return Y[e] && Y[e].map(function (e) {
      return e();
    }) || X;
  },
      H = [],
      Dt = 0,
      It = function _refreshAll(e, t) {
    if (!ht || e) {
      ut = Q.isRefreshing = !0, ze.forEach(function (e) {
        return La(e) && e.cacheID++ && (e.rec = e());
      });
      var r = W("refreshInit");
      at && Q.sort(), t || Kb(), ze.forEach(function (e) {
        La(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
      }), At.slice(0).forEach(function (e) {
        return e.refresh();
      }), At.forEach(function (e, t) {
        if (e._subPinOffset && e.pin) {
          var r = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
              n = e.pin[r];
          e.revert(!0, 1), e.adjustPinSpacing(e.pin[r] - n), e.revert(!1, 1);
        }
      }), At.forEach(function (e) {
        return "max" === e.vars.end && e.setPositions(e.start, Math.max(e.start + 1, Ia(e.scroller, e._dir)));
      }), r.forEach(function (e) {
        return e && e.render && e.render(-1);
      }), ze.forEach(function (e) {
        La(e) && (e.smooth && requestAnimationFrame(function () {
          return e.target.style.scrollBehavior = "smooth";
        }), e.rec && e(e.rec));
      }), Lb(x, 1), c.pause(), Dt++, j(2), At.forEach(function (e) {
        return La(e.vars.onRefresh) && e.vars.onRefresh(e);
      }), ut = Q.isRefreshing = !1, W("refresh");
    } else ob(Q, "scrollEnd", Gb);
  },
      U = 0,
      Lt = 1,
      j = function _updateAll(e) {
    if (!ut || 2 === e) {
      Q.isUpdating = !0, pt && pt.update(0);
      var t = At.length,
          r = gt(),
          n = 50 <= r - _,
          o = t && At[0].scroll();

      if (Lt = o < U ? -1 : 1, U = o, n && (ht && !ot && 200 < r - ht && (ht = 0, W("scrollEnd")), rt = _, _ = r), Lt < 0) {
        for (it = t; 0 < it--;) {
          At[it] && At[it].update(0, n);
        }

        Lt = 1;
      } else for (it = 0; it < t; it++) {
        At[it] && At[it].update(0, n);
      }

      Q.isUpdating = !1;
    }

    w = 0;
  },
      q = ["left", "top", S, T, Ct + Tt, Ct + xt, Ct + _t, Ct + wt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
      V = q.concat([mt, yt, "boxSizing", "max" + Et, "max" + D, "position", Ct, St, St + _t, St + xt, St + Tt, St + wt]),
      Z = /([A-Z])/g,
      Rt = function _setState(e) {
    if (e) {
      var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0;

      for ((e.t._gsap || He.core.getCache(e.t)).uncache = 1; i < o; i += 2) {
        r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(Z, "-$1").toLowerCase());
      }
    }
  },
      Yt = {
    left: 0,
    top: 0
  },
      $ = /(webkit|moz|length|cssText|inset)/i,
      Q = (ScrollTrigger.prototype.init = function init(S, C) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), vt) {
      var E,
          n,
          d,
          k,
          M,
          P,
          O,
          A,
          B,
          D,
          I,
          e,
          L,
          R,
          Y,
          F,
          N,
          t,
          X,
          b,
          W,
          H,
          m,
          U,
          y,
          j,
          x,
          r,
          w,
          _,
          q,
          o,
          g,
          V,
          G,
          Z,
          $,
          T,
          i,
          Q = (S = gb(Ka(S) || Ma(S) || S.nodeType ? {
        trigger: S
      } : S, Ot)).onUpdate,
          ee = S.toggleClass,
          a = S.id,
          te = S.onToggle,
          re = S.onRefresh,
          ne = S.scrub,
          oe = S.trigger,
          ie = S.pin,
          ae = S.pinSpacing,
          se = S.invalidateOnRefresh,
          le = S.anticipatePin,
          s = S.onScrubComplete,
          h = S.onSnapComplete,
          ce = S.once,
          ue = S.snap,
          fe = S.pinReparent,
          l = S.pinSpacer,
          pe = S.containerAnimation,
          de = S.fastScrollEnd,
          ge = S.preventOverlaps,
          he = S.horizontal || S.containerAnimation && !1 !== S.horizontal ? Xe : Ke,
          ve = !ne && 0 !== ne,
          be = J(S.scroller || Je),
          c = He.core.getCache(be),
          me = Ea(be),
          ye = "fixed" === ("pinType" in S ? S.pinType : z(be, "pinType") || me && "fixed"),
          xe = [S.onEnter, S.onLeave, S.onEnterBack, S.onLeaveBack],
          we = ve && S.toggleActions.split(" "),
          u = "markers" in S ? S.markers : Ot.markers,
          _e = me ? 0 : parseFloat(eb(be)["border" + he.p2 + Et]) || 0,
          Te = this,
          Se = S.onRefreshInit && function () {
        return S.onRefreshInit(Te);
      },
          Ce = function _getSizeFunc(e, t, r) {
        var n = r.d,
            o = r.d2,
            i = r.a;
        return (i = z(e, "getBoundingClientRect")) ? function () {
          return i()[n];
        } : function () {
          return (t ? Je["inner" + o] : e["client" + o]) || 0;
        };
      }(be, me, he),
          Ee = function _getOffsetsFunc(e, t) {
        return !t || ~Fe.indexOf(e) ? Fa(e) : function () {
          return Yt;
        };
      }(be, me),
          ke = 0,
          Me = 0,
          Pe = K(be, he);

      if (lt(Te), Te._dir = he, le *= 45, Te.scroller = be, Te.scroll = pe ? pe.time.bind(pe) : Pe, k = Pe(), Te.vars = S, C = C || S.animation, "refreshPriority" in S && (at = 1, -9999 === S.refreshPriority && (pt = Te)), c.tweenScroll = c.tweenScroll || {
        top: fc(be, Ke),
        left: fc(be, Xe)
      }, Te.tweenTo = E = c.tweenScroll[he.p], Te.scrubDuration = function (e) {
        (o = Ma(e) && e) ? q ? q.duration(e) : q = He.to(C, {
          ease: "expo",
          totalProgress: "+=0.001",
          duration: o,
          paused: !0,
          onComplete: function onComplete() {
            return s && s(Te);
          }
        }) : (q && q.progress(1).kill(), q = 0);
      }, C && (C.vars.lazy = !1, C._initted || !1 !== C.vars.immediateRender && !1 !== S.immediateRender && C.duration() && C.render(0, !0, !0), Te.animation = C.pause(), (C.scrollTrigger = Te).scrubDuration(ne), w = 0, a = a || C.vars.id), At.push(Te), ue && (Na(ue) && !ue.push || (ue = {
        snapTo: ue
      }), "scrollBehavior" in Ge.style && He.set(me ? [Ge, qe] : be, {
        scrollBehavior: "auto"
      }), ze.forEach(function (e) {
        return La(e) && e.target === (me ? je.scrollingElement || qe : be) && (e.smooth = !1);
      }), d = La(ue.snapTo) ? ue.snapTo : "labels" === ue.snapTo ? function _getClosestLabel(t) {
        return function (e) {
          return He.utils.snap(jb(t), e);
        };
      }(C) : "labelsDirectional" === ue.snapTo ? function _getLabelAtDirection(r) {
        return function (e, t) {
          return lb(jb(r))(e, t.direction);
        };
      }(C) : !1 !== ue.directional ? function (e, t) {
        return lb(ue.snapTo)(e, gt() - Me < 500 ? 0 : t.direction);
      } : He.utils.snap(ue.snapTo), g = ue.duration || {
        min: .1,
        max: 2
      }, g = Na(g) ? tt(g.min, g.max) : tt(g, g), V = He.delayedCall(ue.delay || o / 2 || .1, function () {
        var e = Pe(),
            t = gt() - Me < 500,
            r = E.tween;
        if (!(t || Math.abs(Te.getVelocity()) < 10) || r || ot || ke === e) Te.isActive && ke !== e && V.restart(!0);else {
          var n = (e - P) / L,
              o = C && !ve ? C.totalProgress() : n,
              i = t ? 0 : (o - _) / (gt() - rt) * 1e3 || 0,
              a = He.utils.clamp(-n, 1 - n, bt(i / 2) * i / .185),
              s = n + (!1 === ue.inertia ? 0 : a),
              l = tt(0, 1, d(s, Te)),
              c = Math.round(P + l * L),
              u = ue.onStart,
              f = ue.onInterrupt,
              p = ue.onComplete;

          if (e <= O && P <= e && c !== e) {
            if (r && !r._initted && r.data <= bt(c - e)) return;
            !1 === ue.inertia && (a = l - n), E(c, {
              duration: g(bt(.185 * Math.max(bt(s - o), bt(l - o)) / i / .05 || 0)),
              ease: ue.ease || "power3",
              data: bt(c - e),
              onInterrupt: function onInterrupt() {
                return V.restart(!0) && f && f(Te);
              },
              onComplete: function onComplete() {
                Te.update(), ke = Pe(), w = _ = C && !ve ? C.totalProgress() : Te.progress, h && h(Te), p && p(Te);
              }
            }, e, a * L, c - e - a * L), u && u(Te, E.tween);
          }
        }
      }).pause()), a && (Bt[a] = Te), i = (i = (oe = Te.trigger = J(oe || ie)) && oe._gsap && oe._gsap.stRevert) && i(Te), ie = !0 === ie ? oe : J(ie), Ka(ee) && (ee = {
        targets: oe,
        className: ee
      }), ie && (!1 === ae || ae === Ct || (ae = !(!ae && ie.parentNode && ie.parentNode.style && "flex" === eb(ie.parentNode).display) && St), Te.pin = ie, (n = He.core.getCache(ie)).spacer ? R = n.pinState : (l && ((l = J(l)) && !l.nodeType && (l = l.current || l.nativeElement), n.spacerIsNative = !!l, l && (n.spacerState = _b(l))), n.spacer = N = l || je.createElement("div"), N.classList.add("pin-spacer"), a && N.classList.add("pin-spacer-" + a), n.pinState = R = _b(ie)), !1 !== S.force3D && He.set(ie, {
        force3D: !0
      }), Te.spacer = N = n.spacer, r = eb(ie), m = r[ae + he.os2], X = He.getProperty(ie), b = He.quickSetter(ie, he.a, kt), Yb(ie, N, r), F = _b(ie)), u) {
        e = Na(u) ? gb(u, Pt) : Pt, D = vb("scroller-start", a, be, he, e, 0), I = vb("scroller-end", a, be, he, e, 0, D), t = D["offset" + he.op.d2];
        var f = J(z(be, "content") || be);
        A = this.markerStart = vb("start", a, f, he, e, t, 0, pe), B = this.markerEnd = vb("end", a, f, he, e, t, 0, pe), pe && (T = He.quickSetter([A, B], he.a, kt)), ye || Fe.length && !0 === z(be, "fixedMarkers") || (function _makePositionable(e) {
          var t = eb(e).position;
          e.style.position = "absolute" === t || "fixed" === t ? t : "relative";
        }(me ? Ge : be), He.set([D, I], {
          force3D: !0
        }), y = He.quickSetter(D, he.a, kt), x = He.quickSetter(I, he.a, kt));
      }

      if (pe) {
        var p = pe.vars.onUpdate,
            v = pe.vars.onUpdateParams;
        pe.eventCallback("onUpdate", function () {
          Te.update(0, 0, 1), p && p.apply(v || []);
        });
      }

      Te.previous = function () {
        return At[At.indexOf(Te) - 1];
      }, Te.next = function () {
        return At[At.indexOf(Te) + 1];
      }, Te.revert = function (e, t) {
        if (!t) return Te.kill(!0);
        var r = !1 !== e || !Te.enabled,
            n = nt;
        r !== Te.isReverted && (r && (Z = Math.max(Pe(), Te.scroll.rec || 0), G = Te.progress, $ = C && C.progress()), A && [A, B, D, I].forEach(function (e) {
          return e.style.display = r ? "none" : "block";
        }), r && (nt = 1, Te.update(r)), !ie || fe && Te.isActive || (r ? function _swapPinOut(e, t, r) {
          Rt(r);
          var n = e._gsap;
          if (n.spacerIsNative) Rt(n.spacerState);else if (e._gsap.swappedIn) {
            var o = t.parentNode;
            o && (o.insertBefore(e, t), o.removeChild(t));
          }
          e._gsap.swappedIn = !1;
        }(ie, N, R) : Yb(ie, N, eb(ie), U)), r || Te.update(r), nt = n, Te.isReverted = r);
      }, Te.refresh = function (e, t) {
        if (!nt && Te.enabled || t) if (ie && e && ht) ob(ScrollTrigger, "scrollEnd", Gb);else {
          !ut && Se && Se(Te), nt = 1, Me = gt(), E.tween && (E.tween.kill(), E.tween = 0), q && q.pause(), se && C && C.revert({
            kill: !1
          }).invalidate(), Te.isReverted || Te.revert(!0, !0), Te._subPinOffset = !1;

          for (var r, n, o, i, a, s, l, c, u, f, p, d = Ce(), g = Ee(), h = pe ? pe.duration() : Ia(be, he), v = 0, b = 0, m = S.end, y = S.endTrigger || oe, x = S.start || (0 !== S.start && oe ? ie ? "0 0" : "0 100%" : 0), w = Te.pinnedContainer = S.pinnedContainer && J(S.pinnedContainer), _ = oe && Math.max(0, At.indexOf(Te)) || 0, T = _; T--;) {
            (s = At[T]).end || s.refresh(0, 1) || (nt = 1), !(l = s.pin) || l !== oe && l !== ie || s.isReverted || ((f = f || []).unshift(s), s.revert(!0, !0)), s !== At[T] && (_--, T--);
          }

          for (La(x) && (x = x(Te)), P = cc(x, oe, d, he, Pe(), A, D, Te, g, _e, ye, h, pe) || (ie ? -.001 : 0), La(m) && (m = m(Te)), Ka(m) && !m.indexOf("+=") && (~m.indexOf(" ") ? m = (Ka(x) ? x.split(" ")[0] : "") + m : (v = ub(m.substr(2), d), m = Ka(x) ? x : P + v, y = oe)), O = Math.max(P, cc(m || (y ? "100% 0" : h), y, d, he, Pe() + v, B, I, Te, g, _e, ye, h, pe)) || -.001, L = O - P || (P -= .01) && .001, v = 0, T = _; T--;) {
            (l = (s = At[T]).pin) && s.start - s._pinPush <= P && !pe && 0 < s.end && (r = s.end - s.start, (l === oe && s.start - s._pinPush < P || l === w) && !Ma(x) && (v += r * (1 - s.progress)), l === ie && (b += r));
          }

          if (P += v, O += v, Te._pinPush = b, A && v && ((r = {})[he.a] = "+=" + v, w && (r[he.p] = "-=" + Pe()), He.set([A, B], r)), ie) r = eb(ie), i = he === Ke, o = Pe(), W = parseFloat(X(he.a)) + b, !h && 1 < O && ((p = {
            style: p = (me ? je.scrollingElement || qe : be).style,
            value: p["overflow" + he.a.toUpperCase()]
          })["overflow" + he.a.toUpperCase()] = "scroll"), Yb(ie, N, r), F = _b(ie), n = Mt(ie, !0), c = ye && K(be, i ? Xe : Ke)(), ae && ((U = [ae + he.os2, L + b + kt]).t = N, (T = ae === St ? ib(ie, he) + L + b : 0) && U.push(he.d, T + kt), Rt(U), w && At.forEach(function (e) {
            e.pin === w && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0);
          }), ye && Pe(Z)), ye && ((a = {
            top: n.top + (i ? o - P : c) + kt,
            left: n.left + (i ? c : o - P) + kt,
            boxSizing: "border-box",
            position: "fixed"
          })[mt] = a.maxWidth = Math.ceil(n.width) + kt, a[yt] = a.maxHeight = Math.ceil(n.height) + kt, a[Ct] = a[Ct + _t] = a[Ct + xt] = a[Ct + Tt] = a[Ct + wt] = "0", a[St] = r[St], a[St + _t] = r[St + _t], a[St + xt] = r[St + xt], a[St + Tt] = r[St + Tt], a[St + wt] = r[St + wt], Y = function _copyState(e, t, r) {
            for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) {
              n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);
            }

            return o.t = e.t, o;
          }(R, a, fe), ut && Pe(0)), C ? (u = C._initted, st(1), C.render(C.duration(), !0, !0), H = X(he.a) - W + L + b, j = 1 < Math.abs(L - H), ye && j && Y.splice(Y.length - 2, 2), C.render(0, !0, !0), u || C.invalidate(!0), C.parent || C.totalTime(C.totalTime()), st(0)) : H = L, p && (p.value ? p.style["overflow" + he.a.toUpperCase()] = p.value : p.style.removeProperty("overflow-" + he.a));else if (oe && Pe() && !pe) for (n = oe.parentNode; n && n !== Ge;) {
            n._pinOffset && (P -= n._pinOffset, O -= n._pinOffset), n = n.parentNode;
          }
          f && f.forEach(function (e) {
            return e.revert(!1, !0);
          }), Te.start = P, Te.end = O, k = M = ut ? Z : Pe(), pe || ut || (k < Z && Pe(Z), Te.scroll.rec = 0), Te.revert(!1, !0), V && (ke = -1, Te.isActive && Pe(P + L * G), V.restart(!0)), nt = 0, C && ve && (C._initted || $) && C.progress() !== $ && C.progress($, !0).render(C.time(), !0, !0), G === Te.progress && !pe || (C && !ve && C.totalProgress(G, !0), Te.progress = (k - P) / L === G ? 0 : G), ie && ae && (N._pinOffset = Math.round(Te.progress * H)), re && !ut && re(Te);
        }
      }, Te.getVelocity = function () {
        return (Pe() - M) / (gt() - rt) * 1e3 || 0;
      }, Te.endAnimation = function () {
        Oa(Te.callbackAnimation), C && (q ? q.progress(1) : C.paused() ? ve || Oa(C, Te.direction < 0, 1) : Oa(C, C.reversed()));
      }, Te.labelToScroll = function (e) {
        return C && C.labels && (P || Te.refresh() || P) + C.labels[e] / C.duration() * L || 0;
      }, Te.getTrailing = function (t) {
        var e = At.indexOf(Te),
            r = 0 < Te.direction ? At.slice(0, e).reverse() : At.slice(e + 1);
        return (Ka(t) ? r.filter(function (e) {
          return e.vars.preventOverlaps === t;
        }) : r).filter(function (e) {
          return 0 < Te.direction ? e.end <= P : e.start >= O;
        });
      }, Te.update = function (e, t, r) {
        if (!pe || r || e) {
          var n,
              o,
              i,
              a,
              s,
              l,
              c,
              u = ut ? Z : Te.scroll(),
              f = e ? 0 : (u - P) / L,
              p = f < 0 ? 0 : 1 < f ? 1 : f || 0,
              d = Te.progress;

          if (t && (M = k, k = pe ? Pe() : u, ue && (_ = w, w = C && !ve ? C.totalProgress() : p)), le && !p && ie && !nt && !dt && ht && P < u + (u - M) / (gt() - rt) * le && (p = 1e-4), p !== d && Te.enabled) {
            if (a = (s = (n = Te.isActive = !!p && p < 1) != (!!d && d < 1)) || !!p != !!d, Te.direction = d < p ? 1 : -1, Te.progress = p, a && !nt && (o = p && !d ? 0 : 1 === p ? 1 : 1 === d ? 2 : 3, ve && (i = !s && "none" !== we[o + 1] && we[o + 1] || we[o], c = C && ("complete" === i || "reset" === i || i in C))), ge && (s || c) && (c || ne || !C) && (La(ge) ? ge(Te) : Te.getTrailing(ge).forEach(function (e) {
              return e.endAnimation();
            })), ve || (!q || nt || dt ? C && C.totalProgress(p, !!nt) : (q._dp._time - q._start !== q._time && q.render(q._dp._time - q._start), q.resetTo ? q.resetTo("totalProgress", p, C._tTime / C._tDur) : (q.vars.totalProgress = p, q.invalidate().restart()))), ie) if (e && ae && (N.style[ae + he.os2] = m), ye) {
              if (a) {
                if (l = !e && d < p && u < O + 1 && u + 1 >= Ia(be, he), fe) if (e || !n && !l) ec(ie, N);else {
                  var g = Mt(ie, !0),
                      h = u - P;
                  ec(ie, Ge, g.top + (he === Ke ? h : 0) + kt, g.left + (he === Ke ? 0 : h) + kt);
                }
                Rt(n || l ? Y : F), j && p < 1 && n || b(W + (1 !== p || l ? 0 : H));
              }
            } else b(Ba(W + H * p));
            !ue || E.tween || nt || dt || V.restart(!0), ee && (s || ce && p && (p < 1 || !ct)) && et(ee.targets).forEach(function (e) {
              return e.classList[n || ce ? "add" : "remove"](ee.className);
            }), !Q || ve || e || Q(Te), a && !nt ? (ve && (c && ("complete" === i ? C.pause().totalProgress(1) : "reset" === i ? C.restart(!0).pause() : "restart" === i ? C.restart(!0) : C[i]()), Q && Q(Te)), !s && ct || (te && s && Pa(Te, te), xe[o] && Pa(Te, xe[o]), ce && (1 === p ? Te.kill(!1, 1) : xe[o] = 0), s || xe[o = 1 === p ? 1 : 3] && Pa(Te, xe[o])), de && !n && Math.abs(Te.getVelocity()) > (Ma(de) ? de : 2500) && (Oa(Te.callbackAnimation), q ? q.progress(1) : Oa(C, "reverse" === i ? 1 : !p, 1))) : ve && Q && !nt && Q(Te);
          }

          if (x) {
            var v = pe ? u / pe.duration() * (pe._caScrollDist || 0) : u;
            y(v + (D._isFlipped ? 1 : 0)), x(v);
          }

          T && T(-u / pe.duration() * (pe._caScrollDist || 0));
        }
      }, Te.enable = function (e, t) {
        Te.enabled || (Te.enabled = !0, ob(be, "resize", Db), ob(me ? je : be, "scroll", Bb), Se && ob(ScrollTrigger, "refreshInit", Se), !1 !== e && (Te.progress = G = 0, k = M = ke = Pe()), !1 !== t && Te.refresh());
      }, Te.getTween = function (e) {
        return e && E ? E.tween : q;
      }, Te.setPositions = function (e, t) {
        ie && (W += e - P, H += t - e - L, ae === St && Te.adjustPinSpacing(t - e - L)), Te.start = P = e, Te.end = O = t, L = t - e, Te.update();
      }, Te.adjustPinSpacing = function (e) {
        if (U) {
          var t = U.indexOf(he.d) + 1;
          U[t] = parseFloat(U[t]) + e + kt, U[1] = parseFloat(U[1]) + e + kt, Rt(U);
        }
      }, Te.disable = function (e, t) {
        if (Te.enabled && (!1 !== e && Te.revert(!0, !0), Te.enabled = Te.isActive = !1, t || q && q.pause(), Z = 0, n && (n.uncache = 1), Se && pb(ScrollTrigger, "refreshInit", Se), V && (V.pause(), E.tween && E.tween.kill() && (E.tween = 0)), !me)) {
          for (var r = At.length; r--;) {
            if (At[r].scroller === be && At[r] !== Te) return;
          }

          pb(be, "resize", Db), pb(be, "scroll", Bb);
        }
      }, Te.kill = function (e, t) {
        Te.disable(e, t), q && !t && q.kill(), a && delete Bt[a];
        var r = At.indexOf(Te);
        0 <= r && At.splice(r, 1), r === it && 0 < Lt && it--, r = 0, At.forEach(function (e) {
          return e.scroller === Te.scroller && (r = 1);
        }), r || ut || (Te.scroll.rec = 0), C && (C.scrollTrigger = null, e && C.revert({
          kill: !1
        }), t || C.kill()), A && [A, B, D, I].forEach(function (e) {
          return e.parentNode && e.parentNode.removeChild(e);
        }), pt === Te && (pt = 0), ie && (n && (n.uncache = 1), r = 0, At.forEach(function (e) {
          return e.pin === ie && r++;
        }), r || (n.spacer = 0)), S.onKill && S.onKill(Te);
      }, Te.enable(!1, !1), i && i(Te), C && C.add && !L ? He.delayedCall(.01, function () {
        return P || O || Te.refresh();
      }) && (L = .01) && (P = O = 0) : Te.refresh(), ie && function _queueRefreshAll() {
        if (ft !== Dt) {
          var e = ft = Dt;
          requestAnimationFrame(function () {
            return e === Dt && It(!0);
          });
        }
      }();
    } else this.update = this.refresh = this.kill = Aa;
  }, ScrollTrigger.register = function register(e) {
    return s || (He = e || Da(), Ca() && window.document && ScrollTrigger.enable(), s = vt), s;
  }, ScrollTrigger.defaults = function defaults(e) {
    if (e) for (var t in e) {
      Ot[t] = e[t];
    }
    return Ot;
  }, ScrollTrigger.disable = function disable(t, r) {
    vt = 0, At.forEach(function (e) {
      return e[r ? "kill" : "disable"](t);
    }), pb(Je, "wheel", Bb), pb(je, "scroll", Bb), clearInterval(u), pb(je, "touchcancel", Aa), pb(Ge, "touchstart", Aa), nb(pb, je, "pointerdown,touchstart,mousedown", ya), nb(pb, je, "pointerup,touchend,mouseup", za), c.kill(), Ja(pb);

    for (var e = 0; e < ze.length; e += 3) {
      qb(pb, ze[e], ze[e + 1]), qb(pb, ze[e], ze[e + 2]);
    }
  }, ScrollTrigger.enable = function enable() {
    if (Je = window, je = document, qe = je.documentElement, Ge = je.body, He && (et = He.utils.toArray, tt = He.utils.clamp, lt = He.core.context || Aa, st = He.core.suppressOverwrites || Aa, x = Je.history.scrollRestoration || "auto", He.core.globals("ScrollTrigger", ScrollTrigger), Ge)) {
      vt = 1, E.register(He), ScrollTrigger.isTouch = E.isTouch, k = E.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ob(Je, "wheel", Bb), l = [Je, je, qe, Ge], He.matchMedia ? (ScrollTrigger.matchMedia = function (e) {
        var t,
            r = He.matchMedia();

        for (t in e) {
          r.add(t, e[t]);
        }

        return r;
      }, He.addEventListener("matchMediaInit", function () {
        return Kb();
      }), He.addEventListener("matchMediaRevert", function () {
        return Jb();
      }), He.addEventListener("matchMedia", function () {
        It(0, 1), W("matchMedia");
      }), He.matchMedia("(orientation: portrait)", function () {
        return Cb(), Cb;
      })) : console.warn("Requires GSAP 3.11.0 or later"), Cb(), ob(je, "scroll", Bb);
      var e,
          t,
          r = Ge.style,
          n = r.borderTopStyle,
          o = He.core.Animation.prototype;

      for (o.revert || Object.defineProperty(o, "revert", {
        value: function value() {
          return this.time(-.01, !0);
        }
      }), r.borderTopStyle = "solid", e = Mt(Ge), Ke.m = Math.round(e.top + Ke.sc()) || 0, Xe.m = Math.round(e.left + Xe.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), u = setInterval(Ab, 250), He.delayedCall(.5, function () {
        return dt = 0;
      }), ob(je, "touchcancel", Aa), ob(Ge, "touchstart", Aa), nb(ob, je, "pointerdown,touchstart,mousedown", ya), nb(ob, je, "pointerup,touchend,mouseup", za), f = He.utils.checkPrefix("transform"), V.push(f), s = gt(), c = He.delayedCall(.2, It).pause(), g = [je, "visibilitychange", function () {
        var e = Je.innerWidth,
            t = Je.innerHeight;
        je.hidden ? (p = e, d = t) : p === e && d === t || Db();
      }, je, "DOMContentLoaded", It, Je, "load", It, Je, "resize", Db], Ja(ob), At.forEach(function (e) {
        return e.enable(0, 1);
      }), t = 0; t < ze.length; t += 3) {
        qb(pb, ze[t], ze[t + 1]), qb(pb, ze[t], ze[t + 2]);
      }
    }
  }, ScrollTrigger.config = function config(e) {
    "limitCallbacks" in e && (ct = !!e.limitCallbacks);
    var t = e.syncInterval;
    t && clearInterval(u) || (u = t) && setInterval(Ab, t), "ignoreMobileResize" in e && (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Ja(pb) || Ja(ob, e.autoRefreshEvents || "none"), h = -1 === (e.autoRefreshEvents + "").indexOf("resize"));
  }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
    var r = J(e),
        n = ze.indexOf(r),
        o = Ea(r);
    ~n && ze.splice(n, o ? 6 : 2), t && (o ? Fe.unshift(Je, t, Ge, t, qe, t) : Fe.unshift(r, t));
  }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
    At.forEach(function (e) {
      return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
    });
  }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
    var n = (Ka(e) ? J(e) : e).getBoundingClientRect(),
        o = n[r ? mt : yt] * t || 0;
    return r ? 0 < n.right - o && n.left + o < Je.innerWidth : 0 < n.bottom - o && n.top + o < Je.innerHeight;
  }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
    Ka(e) && (e = J(e));
    var n = e.getBoundingClientRect(),
        o = n[r ? mt : yt],
        i = null == t ? o / 2 : t in I ? I[t] * o : ~t.indexOf("%") ? parseFloat(t) * o / 100 : parseFloat(t) || 0;
    return r ? (n.left + i) / Je.innerWidth : (n.top + i) / Je.innerHeight;
  }, ScrollTrigger.killAll = function killAll(e) {
    if (At.slice(0).forEach(function (e) {
      return "ScrollSmoother" !== e.vars.id && e.kill();
    }), !0 !== e) {
      var t = Y.killAll || [];
      Y = {}, t.forEach(function (e) {
        return e();
      });
    }
  }, ScrollTrigger);

  function ScrollTrigger(e, t) {
    s || ScrollTrigger.register(He) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t);
  }

  Q.version = "3.11.4", Q.saveStyles = function (e) {
    return e ? et(e).forEach(function (e) {
      if (e && e.style) {
        var t = H.indexOf(e);
        0 <= t && H.splice(t, 5), H.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), He.core.getCache(e), lt());
      }
    }) : H;
  }, Q.revert = function (e, t) {
    return Kb(!e, t);
  }, Q.create = function (e, t) {
    return new Q(e, t);
  }, Q.refresh = function (e) {
    return e ? Db() : (s || Q.register()) && It(!0);
  }, Q.update = function (e) {
    return ++ze.cache && j(!0 === e ? 2 : 0);
  }, Q.clearScrollMemory = Lb, Q.maxScroll = function (e, t) {
    return Ia(e, t ? Xe : Ke);
  }, Q.getScrollFunc = function (e, t) {
    return K(J(e), t ? Xe : Ke);
  }, Q.getById = function (e) {
    return Bt[e];
  }, Q.getAll = function () {
    return At.filter(function (e) {
      return "ScrollSmoother" !== e.vars.id;
    });
  }, Q.isScrolling = function () {
    return !!ht;
  }, Q.snapDirectional = lb, Q.addEventListener = function (e, t) {
    var r = Y[e] || (Y[e] = []);
    ~r.indexOf(t) || r.push(t);
  }, Q.removeEventListener = function (e, t) {
    var r = Y[e],
        n = r && r.indexOf(t);
    0 <= n && r.splice(n, 1);
  }, Q.batch = function (e, t) {
    function Io(e, t) {
      var r = [],
          n = [],
          o = He.delayedCall(i, function () {
        t(r, n), r = [], n = [];
      }).pause();
      return function (e) {
        r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1);
      };
    }

    var r,
        n = [],
        o = {},
        i = t.interval || .016,
        a = t.batchMax || 1e9;

    for (r in t) {
      o[r] = "on" === r.substr(0, 2) && La(t[r]) && "onRefreshInit" !== r ? Io(0, t[r]) : t[r];
    }

    return La(a) && (a = a(), ob(Q, "refresh", function () {
      return a = t.batchMax();
    })), et(e).forEach(function (e) {
      var t = {};

      for (r in o) {
        t[r] = o[r];
      }

      t.trigger = e, n.push(Q.create(t));
    }), n;
  };

  function hc(e, t, r, n) {
    return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1;
  }

  function ic(e, t) {
    !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (E.isTouch ? " pinch-zoom" : "") : "none", e === qe && ic(Ge, t);
  }

  function kc(e) {
    var t,
        r = e.event,
        n = e.target,
        o = e.axis,
        i = (r.changedTouches ? r.changedTouches[0] : r).target,
        a = i._gsap || He.core.getCache(i),
        s = gt();

    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (; i && i !== Ge && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !te[(t = eb(i)).overflowY] && !te[t.overflowX]);) {
        i = i.parentNode;
      }

      a._isScroll = i && i !== n && !Ea(i) && (te[(t = eb(i)).overflowY] || te[t.overflowX]), a._isScrollT = s;
    }

    !a._isScroll && "x" !== o || (r.stopPropagation(), r._gsapAllow = !0);
  }

  function lc(e, t, r, n) {
    return E.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: n = n && kc,
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && ob(je, E.eventTypes[0], ne, !1, !0);
      },
      onDisable: function onDisable() {
        return pb(je, E.eventTypes[0], ne, !0);
      }
    });
  }

  function pc(e) {
    function Ep() {
      return o = !1;
    }

    function Hp() {
      i = Ia(p, Ke), S = tt(k ? 1 : 0, i), f && (T = tt(0, Ia(p, Xe))), l = Dt;
    }

    function Ip() {
      h._gsap.y = Ba(parseFloat(h._gsap.y) + v.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", v.offset = v.cacheID = 0;
    }

    function Op() {
      Hp(), a.isActive() && a.vars.scrollY > i && (v() > i ? a.progress(1) && v(i) : a.resetTo("scrollY", i));
    }

    Na(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";

    var n,
        i,
        l,
        o,
        a,
        c,
        u,
        s,
        f = e.normalizeScrollX,
        t = e.momentum,
        r = e.allowNestedScroll,
        p = J(e.target) || qe,
        d = He.core.globals().ScrollSmoother,
        g = d && d.get(),
        h = k && (e.content && J(e.content) || g && !1 !== e.content && !g.smooth() && g.content()),
        v = K(p, Ke),
        b = K(p, Xe),
        m = 1,
        y = (E.isTouch && Je.visualViewport ? Je.visualViewport.scale * Je.visualViewport.width : Je.outerWidth) / Je.innerWidth,
        x = 0,
        w = La(t) ? function () {
      return t(n);
    } : function () {
      return t || 2.8;
    },
        _ = lc(p, e.type, !0, r),
        T = Aa,
        S = Aa;

    return h && He.set(h, {
      y: "+=0"
    }), e.ignoreCheck = function (e) {
      return k && "touchmove" === e.type && function ignoreDrag() {
        if (o) {
          requestAnimationFrame(Ep);
          var e = Ba(n.deltaY / 2),
              t = S(v.v - e);

          if (h && t !== v.v + v.offset) {
            v.offset = t - v.v;
            var r = Ba((parseFloat(h && h._gsap.y) || 0) - v.offset);
            h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", h._gsap.y = r + "px", v.cacheID = ze.cache, j();
          }

          return !0;
        }

        v.offset && Ip(), o = !0;
      }() || 1.05 < m && "touchstart" !== e.type || n.isGesturing || e.touches && 1 < e.touches.length;
    }, e.onPress = function () {
      var e = m;
      m = Ba((Je.visualViewport && Je.visualViewport.scale || 1) / y), a.pause(), e !== m && ic(p, 1.01 < m || !f && "x"), c = b(), u = v(), Hp(), l = Dt;
    }, e.onRelease = e.onGestureStart = function (e, t) {
      if (v.offset && Ip(), t) {
        ze.cache++;
        var r,
            n,
            o = w();
        f && (n = (r = b()) + .05 * o * -e.velocityX / .227, o *= hc(b, r, n, Ia(p, Xe)), a.vars.scrollX = T(n)), n = (r = v()) + .05 * o * -e.velocityY / .227, o *= hc(v, r, n, Ia(p, Ke)), a.vars.scrollY = S(n), a.invalidate().duration(o).play(.01), (k && a.vars.scrollY >= i || i - 1 <= r) && He.to({}, {
          onUpdate: Op,
          duration: o
        });
      } else s.restart(!0);
    }, e.onWheel = function () {
      a._ts && a.pause(), 1e3 < gt() - x && (l = 0, x = gt());
    }, e.onChange = function (e, t, r, n, o) {
      if (Dt !== l && Hp(), t && f && b(T(n[2] === t ? c + (e.startX - e.x) : b() + t - n[1])), r) {
        v.offset && Ip();
        var i = o[2] === r,
            a = i ? u + e.startY - e.y : v() + r - o[1],
            s = S(a);
        i && a !== s && (u += s - a), v(s);
      }

      (r || t) && j();
    }, e.onEnable = function () {
      ic(p, !f && "x"), Q.addEventListener("refresh", Op), ob(Je, "resize", Op), v.smooth && (v.target.style.scrollBehavior = "auto", v.smooth = b.smooth = !1), _.enable();
    }, e.onDisable = function () {
      ic(p, !0), pb(Je, "resize", Op), Q.removeEventListener("refresh", Op), _.kill();
    }, e.lockAxis = !1 !== e.lockAxis, ((n = new E(e)).iOS = k) && !v() && v(1), k && He.ticker.add(Aa), s = n._dc, a = He.to(n, {
      ease: "power4",
      paused: !0,
      scrollX: f ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      onComplete: s.vars.onComplete
    }), n;
  }

  var ee,
      te = {
    auto: 1,
    scroll: 1
  },
      re = /(input|label|select|textarea)/i,
      ne = function _captureInputs(e) {
    var t = re.test(e.target.tagName);
    (t || ee) && (e._gsapAllow = !0, ee = t);
  };

  Q.sort = function (e) {
    return At.sort(e || function (e, t) {
      return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0));
    });
  }, Q.observe = function (e) {
    return new E(e);
  }, Q.normalizeScroll = function (e) {
    if (void 0 === e) return v;
    if (!0 === e && v) return v.enable();
    if (!1 === e) return v && v.kill();
    var t = e instanceof E ? e : pc(e);
    return v && v.target === t.target && v.kill(), Ea(t.target) && (v = t), t;
  }, Q.core = {
    _getVelocityProp: L,
    _inputObserver: lc,
    _scrollers: ze,
    _proxies: Fe,
    bridge: {
      ss: function ss() {
        ht || W("scrollStart"), ht = gt();
      },
      ref: function ref() {
        return nt;
      }
    }
  }, Da() && He.registerPlugin(Q), e.ScrollTrigger = Q, e["default"] = Q;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e["default"];
  }
}); //https://github.com/KKAC/lenis

_app = null;
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t || self).Lenis = e();
}(void 0, function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var o = e[i];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }

  function e(e, i, o) {
    return i && t(e.prototype, i), o && t(e, o), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }

  function i() {
    return i = Object.assign ? Object.assign.bind() : function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];

        for (var o in i) {
          Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
        }
      }

      return t;
    }, i.apply(this, arguments);
  }

  function o(t, e) {
    return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, o(t, e);
  }

  function n() {}

  n.prototype = {
    on: function on(t, e, i) {
      var o = this.e || (this.e = {});
      return (o[t] || (o[t] = [])).push({
        fn: e,
        ctx: i
      }), this;
    },
    once: function once(t, e, i) {
      var o = this;

      function n() {
        o.off(t, n), e.apply(i, arguments);
      }

      return n._ = e, this.on(t, n, i);
    },
    emit: function emit(t) {
      for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, n = i.length; o < n; o++) {
        i[o].fn.apply(i[o].ctx, e);
      }

      return this;
    },
    off: function off(t, e) {
      var i = this.e || (this.e = {}),
          o = i[t],
          n = [];
      if (o && e) for (var r = 0, s = o.length; r < s; r++) {
        o[r].fn !== e && o[r].fn._ !== e && n.push(o[r]);
      }
      return n.length ? i[t] = n : delete i[t], this;
    }
  };
  var r = n;
  n.TinyEmitter = r, "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

  var s = function (t) {
    var e = {
      exports: {}
    };
    return function (t, e) {
      t.exports = function () {
        var t = 0;

        function e(e) {
          return "__private_" + t++ + "_" + e;
        }

        function i(t, e) {
          if (!Object.prototype.hasOwnProperty.call(t, e)) throw new TypeError("attempted to use private field on non-instance");
          return t;
        }

        function o() {}

        o.prototype = {
          on: function on(t, e, i) {
            var o = this.e || (this.e = {});
            return (o[t] || (o[t] = [])).push({
              fn: e,
              ctx: i
            }), this;
          },
          once: function once(t, e, i) {
            var o = this;

            function n() {
              o.off(t, n), e.apply(i, arguments);
            }

            return n._ = e, this.on(t, n, i);
          },
          emit: function emit(t) {
            for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, n = i.length; o < n; o++) {
              i[o].fn.apply(i[o].ctx, e);
            }

            return this;
          },
          off: function off(t, e) {
            var i = this.e || (this.e = {}),
                o = i[t],
                n = [];
            if (o && e) for (var r = 0, s = o.length; r < s; r++) {
              o[r].fn !== e && o[r].fn._ !== e && n.push(o[r]);
            }
            return n.length ? i[t] = n : delete i[t], this;
          }
        };
        var n = o;
        n.TinyEmitter = o;
        var r,
            s = "virtualscroll",
            l = e("options"),
            h = e("el"),
            a = e("emitter"),
            c = e("event"),
            u = e("touchStart"),
            d = e("bodyTouchAction");
        return function () {
          function t(t) {
            var e = this;
            Object.defineProperty(this, l, {
              writable: !0,
              value: void 0
            }), Object.defineProperty(this, h, {
              writable: !0,
              value: void 0
            }), Object.defineProperty(this, a, {
              writable: !0,
              value: void 0
            }), Object.defineProperty(this, c, {
              writable: !0,
              value: void 0
            }), Object.defineProperty(this, u, {
              writable: !0,
              value: void 0
            }), Object.defineProperty(this, d, {
              writable: !0,
              value: void 0
            }), this._onWheel = function (t) {
              var o = i(e, l)[l],
                  n = i(e, c)[c];
              n.deltaX = t.wheelDeltaX || -1 * t.deltaX, n.deltaY = t.wheelDeltaY || -1 * t.deltaY, r.isFirefox && 1 === t.deltaMode && (n.deltaX *= o.firefoxMultiplier, n.deltaY *= o.firefoxMultiplier), n.deltaX *= o.mouseMultiplier, n.deltaY *= o.mouseMultiplier, e._notify(t);
            }, this._onMouseWheel = function (t) {
              var o = i(e, c)[c];
              o.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, o.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, e._notify(t);
            }, this._onTouchStart = function (t) {
              var o = t.targetTouches ? t.targetTouches[0] : t;
              i(e, u)[u].x = o.pageX, i(e, u)[u].y = o.pageY;
            }, this._onTouchMove = function (t) {
              var o = i(e, l)[l];
              o.preventTouch && !t.target.classList.contains(o.unpreventTouchClass) && t.preventDefault();
              var n = i(e, c)[c],
                  r = t.targetTouches ? t.targetTouches[0] : t;
              n.deltaX = (r.pageX - i(e, u)[u].x) * o.touchMultiplier, n.deltaY = (r.pageY - i(e, u)[u].y) * o.touchMultiplier, i(e, u)[u].x = r.pageX, i(e, u)[u].y = r.pageY, e._notify(t);
            }, this._onKeyDown = function (t) {
              var o = i(e, c)[c];
              o.deltaX = o.deltaY = 0;
              var n = window.innerHeight - 40;

              switch (t.keyCode) {
                case 37:
                case 38:
                  o.deltaY = i(e, l)[l].keyStep;
                  break;

                case 39:
                case 40:
                  o.deltaY = -i(e, l)[l].keyStep;
                  break;

                case 32:
                  o.deltaY = n * (t.shiftKey ? 1 : -1);
                  break;

                default:
                  return;
              }

              e._notify(t);
            }, i(this, h)[h] = window, t && t.el && (i(this, h)[h] = t.el, delete t.el), r || (r = {
              hasWheelEvent: "onwheel" in document,
              hasMouseWheelEvent: "onmousewheel" in document,
              hasTouch: "ontouchstart" in document,
              hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
              hasPointer: !!window.navigator.msPointerEnabled,
              hasKeyDown: "onkeydown" in document,
              isFirefox: navigator.userAgent.indexOf("Firefox") > -1
            }), i(this, l)[l] = Object.assign({
              mouseMultiplier: 1,
              touchMultiplier: 2,
              firefoxMultiplier: 15,
              keyStep: 120,
              preventTouch: !1,
              unpreventTouchClass: "vs-touchmove-allowed",
              useKeyboard: !0,
              useTouch: !0
            }, t), i(this, a)[a] = new n(), i(this, c)[c] = {
              y: 0,
              x: 0,
              deltaX: 0,
              deltaY: 0
            }, i(this, u)[u] = {
              x: null,
              y: null
            }, i(this, d)[d] = null, void 0 !== i(this, l)[l].passive && (this.listenerOptions = {
              passive: i(this, l)[l].passive
            });
          }

          var e = t.prototype;
          return e._notify = function (t) {
            var e = i(this, c)[c];
            e.x += e.deltaX, e.y += e.deltaY, i(this, a)[a].emit(s, {
              x: e.x,
              y: e.y,
              deltaX: e.deltaX,
              deltaY: e.deltaY,
              originalEvent: t
            });
          }, e._bind = function () {
            r.hasWheelEvent && i(this, h)[h].addEventListener("wheel", this._onWheel, this.listenerOptions), r.hasMouseWheelEvent && i(this, h)[h].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), r.hasTouch && i(this, l)[l].useTouch && (i(this, h)[h].addEventListener("touchstart", this._onTouchStart, this.listenerOptions), i(this, h)[h].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), r.hasPointer && r.hasTouchWin && (i(this, d)[d] = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", i(this, h)[h].addEventListener("MSPointerDown", this._onTouchStart, !0), i(this, h)[h].addEventListener("MSPointerMove", this._onTouchMove, !0)), r.hasKeyDown && i(this, l)[l].useKeyboard && document.addEventListener("keydown", this._onKeyDown);
          }, e._unbind = function () {
            r.hasWheelEvent && i(this, h)[h].removeEventListener("wheel", this._onWheel), r.hasMouseWheelEvent && i(this, h)[h].removeEventListener("mousewheel", this._onMouseWheel), r.hasTouch && (i(this, h)[h].removeEventListener("touchstart", this._onTouchStart), i(this, h)[h].removeEventListener("touchmove", this._onTouchMove)), r.hasPointer && r.hasTouchWin && (document.body.style.msTouchAction = i(this, d)[d], i(this, h)[h].removeEventListener("MSPointerDown", this._onTouchStart, !0), i(this, h)[h].removeEventListener("MSPointerMove", this._onTouchMove, !0)), r.hasKeyDown && i(this, l)[l].useKeyboard && document.removeEventListener("keydown", this._onKeyDown);
          }, e.on = function (t, e) {
            i(this, a)[a].on(s, t, e);
            var o = i(this, a)[a].e;
            o && o[s] && 1 === o[s].length && this._bind();
          }, e.off = function (t, e) {
            i(this, a)[a].off(s, t, e);
            var o = i(this, a)[a].e;
            (!o[s] || o[s].length <= 0) && this._unbind();
          }, e.destroy = function () {
            i(this, a)[a].off(), this._unbind();
          }, t;
        }();
      }();
    }(e), e.exports;
  }();

  function l(t, e) {
    var i = t % e;
    return (e > 0 && i < 0 || e < 0 && i > 0) && (i += e), i;
  }

  var h = ["duration", "easing"],
      a =
  /*#__PURE__*/
  function () {
    function t() {}

    var o = t.prototype;
    return o.to = function (t, e) {
      var o = this,
          n = void 0 === e ? {} : e,
          r = n.duration,
          s = void 0 === r ? 1 : r,
          l = n.easing,
          a = void 0 === l ? function (t) {
        return t;
      } : l,
          c = function (t, e) {
        if (null == t) return {};
        var i,
            o,
            n = {},
            r = Object.keys(t);

        for (o = 0; o < r.length; o++) {
          e.indexOf(i = r[o]) >= 0 || (n[i] = t[i]);
        }

        return n;
      }(n, h);

      this.target = t, this.fromKeys = i({}, c), this.toKeys = i({}, c), this.keys = Object.keys(i({}, c)), this.keys.forEach(function (e) {
        o.fromKeys[e] = t[e];
      }), this.duration = s, this.easing = a, this.currentTime = 0, this.isRunning = !0;
    }, o.stop = function () {
      this.isRunning = !1;
    }, o.raf = function (t) {
      var e = this;

      if (this.isRunning) {
        this.currentTime = Math.min(this.currentTime + t, this.duration);
        var i = this.progress >= 1 ? 1 : this.easing(this.progress);
        this.keys.forEach(function (t) {
          var o = e.fromKeys[t];
          e.target[t] = o + (e.toKeys[t] - o) * i;
        }), 1 === i && this.stop();
      }
    }, e(t, [{
      key: "progress",
      get: function get() {
        return this.currentTime / this.duration;
      }
    }]), t;
  }();
  /*#__PURE__*/


  return function (t) {
    var i, n;

    function r(e) {
      var i,
          o,
          n,
          r,
          l = void 0 === e ? {} : e,
          h = l.duration,
          c = void 0 === h ? 1.2 : h,
          u = l.easing,
          d = void 0 === u ? function (t) {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
      } : u,
          p = l.smooth,
          f = void 0 === p || p,
          v = l.mouseMultiplier,
          w = void 0 === v ? 1 : v,
          y = l.smoothTouch,
          m = void 0 !== y && y,
          g = l.touchMultiplier,
          b = void 0 === g ? 2 : g,
          T = l.direction,
          M = void 0 === T ? "vertical" : T,
          S = l.gestureDirection,
          _ = void 0 === S ? "vertical" : S,
          O = l.infinite,
          E = void 0 !== O && O,
          W = l.wrapper,
          x = void 0 === W ? window : W,
          D = l.content,
          N = void 0 === D ? document.body : D;

      (r = t.call(this) || this).onWindowResize = function () {
        r.wrapperWidth = window.innerWidth, r.wrapperHeight = window.innerHeight;
      }, r.onWrapperResize = function (t) {
        var e = t[0];

        if (e) {
          var i = e.contentRect;
          r.wrapperWidth = i.width, r.wrapperHeight = i.height;
        }
      }, r.onContentResize = function (t) {
        var e = t[0];

        if (e) {
          var i = e.contentRect;
          r.contentWidth = i.width, r.contentHeight = i.height;
        }
      }, r.onVirtualScroll = function (t) {
        var e = t.deltaY,
            i = t.deltaX,
            o = t.originalEvent;

        if (!("vertical" === r.gestureDirection && 0 === e || "horizontal" === r.gestureDirection && 0 === i)) {
          var n = !!o.composedPath().find(function (t) {
            return t.hasAttribute && t.hasAttribute("data-lenis-prevent");
          });
          o.ctrlKey || n || (r.smooth = o.changedTouches ? r.smoothTouch : r.options.smooth, r.stopped ? o.preventDefault() : r.smooth && 4 !== o.buttons && (r.smooth && o.preventDefault(), r.targetScroll -= "both" === r.gestureDirection ? i + e : "horizontal" === r.gestureDirection ? i : e, r.scrollTo(r.targetScroll)));
        }
      }, r.onScroll = function (t) {
        r.isScrolling && r.smooth || (r.targetScroll = r.scroll = r.lastScroll = r.wrapperNode[r.scrollProperty], r.notify());
      }, window.lenisVersion = "0.2.28", r.options = {
        duration: c,
        easing: d,
        smooth: f,
        mouseMultiplier: w,
        smoothTouch: m,
        touchMultiplier: b,
        direction: M,
        gestureDirection: _,
        infinite: E,
        wrapper: x,
        content: N
      }, r.duration = c, r.easing = d, r.smooth = f, r.mouseMultiplier = w, r.smoothTouch = m, r.touchMultiplier = b, r.direction = M, r.gestureDirection = _, r.infinite = E, r.wrapperNode = x, r.contentNode = N, r.wrapperNode.addEventListener("scroll", r.onScroll), r.wrapperNode === window ? (r.wrapperNode.addEventListener("resize", r.onWindowResize), r.onWindowResize()) : (r.wrapperHeight = r.wrapperNode.offsetHeight, r.wrapperWidth = r.wrapperNode.offsetWidth, r.wrapperObserver = new ResizeObserver(r.onWrapperResize), r.wrapperObserver.observe(r.wrapperNode)), r.contentHeight = r.contentNode.offsetHeight, r.contentWidth = r.contentNode.offsetWidth, r.contentObserver = new ResizeObserver(r.onContentResize), r.contentObserver.observe(r.contentNode), r.targetScroll = r.scroll = r.lastScroll = r.wrapperNode[r.scrollProperty], r.animate = new a();
      var P = (null == (i = navigator) || null == (o = i.userAgentData) ? void 0 : o.platform) || (null == (n = navigator) ? void 0 : n.platform) || "unknown";
      return r.virtualScroll = new s({
        el: r.wrapperNode,
        firefoxMultiplier: 50,
        mouseMultiplier: r.mouseMultiplier * (P.includes("Win") || P.includes("Linux") ? .84 : .4),
        touchMultiplier: r.touchMultiplier,
        passive: !1,
        useKeyboard: !1,
        useTouch: !0
      }), r.virtualScroll.on(r.onVirtualScroll), r;
    }

    n = t, (i = r).prototype = Object.create(n.prototype), i.prototype.constructor = i, o(i, n);
    var h = r.prototype;
    return h.start = function () {
      var t = this.wrapperNode;
      this.wrapperNode === window && (t = document.documentElement), t.classList.remove("lenis-stopped"), this.stopped = !1;
    }, h.stop = function () {
      var t = this.wrapperNode;
      this.wrapperNode === window && (t = document.documentElement), t.classList.add("lenis-stopped"), this.stopped = !0, this.animate.stop();
    }, h.destroy = function () {
      var t;
      this.wrapperNode === window && this.wrapperNode.removeEventListener("resize", this.onWindowResize), this.wrapperNode.removeEventListener("scroll", this.onScroll), this.virtualScroll.destroy(), null == (t = this.wrapperObserver) || t.disconnect(), this.contentObserver.disconnect();
    }, h.raf = function (t) {
      var e = t - (this.now || 0);
      this.now = t, !this.stopped && this.smooth && (this.lastScroll = this.scroll, this.animate.raf(.001 * e), this.scroll === this.targetScroll && (this.lastScroll = this.scroll), this.isScrolling && (this.setScroll(this.scroll), this.notify()), this.isScrolling = this.scroll !== this.targetScroll);
    }, h.setScroll = function (t) {
      var e = this.infinite ? l(t, this.limit) : t;
      "horizontal" === this.direction ? this.wrapperNode.scrollTo(e, 0) : this.wrapperNode.scrollTo(0, e);
    }, h.notify = function () {
      var t = this.infinite ? l(this.scroll, this.limit) : this.scroll;
      this.emit("scroll", {
        scroll: t,
        limit: this.limit,
        velocity: this.velocity,
        direction: 0 === this.velocity ? 0 : this.velocity > 0 ? 1 : -1,
        progress: t / this.limit
      });
    }, h.scrollTo = function (t, e) {
      var i = void 0 === e ? {} : e,
          o = i.offset,
          n = void 0 === o ? 0 : o,
          r = i.immediate,
          s = void 0 !== r && r,
          l = i.duration,
          h = void 0 === l ? this.duration : l,
          a = i.easing,
          c = void 0 === a ? this.easing : a;

      if (null != t && !this.stopped) {
        var u;
        if ("number" == typeof t) u = t;else if ("top" === t || "#top" === t) u = 0;else if ("bottom" === t) u = this.limit;else {
          var d;
          if ("string" == typeof t) d = document.querySelector(t);else {
            if (null == t || !t.nodeType) return;
            d = t;
          }
          if (!d) return;
          var p = 0;

          if (this.wrapperNode !== window) {
            var f = this.wrapperNode.getBoundingClientRect();
            p = "horizontal" === this.direction ? f.left : f.top;
          }

          var v = d.getBoundingClientRect();
          u = ("horizontal" === this.direction ? v.left : v.top) + this.scroll - p;
        }
        u += n, this.targetScroll = this.infinite ? u : Math.max(0, Math.min(u, this.limit)), !this.smooth || s ? (this.animate.stop(), this.scroll = this.lastScroll = this.targetScroll, this.setScroll(this.targetScroll)) : this.animate.to(this, {
          duration: h,
          easing: c,
          scroll: this.targetScroll
        });
      }
    }, e(r, [{
      key: "scrollProperty",
      get: function get() {
        return this.wrapperNode === window ? "horizontal" === this.direction ? "scrollX" : "scrollY" : "horizontal" === this.direction ? "scrollLeft" : "scrollTop";
      }
    }, {
      key: "limit",
      get: function get() {
        return "horizontal" === this.direction ? this.contentWidth - this.wrapperWidth : this.contentHeight - this.wrapperHeight;
      }
    }, {
      key: "velocity",
      get: function get() {
        return this.scroll - this.lastScroll;
      }
    }]), r;
  }(r);
});
/*!
 * pace.js v1.2.4
 * https://github.com/CodeByZach/pace/
 * Licensed MIT © HubSpot, Inc.
 */

!function () {
  function o(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }

  var u,
      c,
      i,
      s,
      n,
      y,
      t,
      l,
      v,
      r,
      a,
      p,
      e,
      h,
      w,
      b,
      f,
      g,
      _d2,
      m,
      k,
      S,
      q,
      L,
      x,
      P,
      T,
      R,
      j,
      O,
      E,
      M,
      A,
      C,
      N,
      _,
      F,
      U,
      W,
      X,
      D,
      H,
      I,
      z,
      G,
      B,
      J = [].slice,
      K = {}.hasOwnProperty,
      Q = function Q(t, e) {
    for (var n in e) {
      K.call(e, n) && (t[n] = e[n]);
    }

    function r() {
      this.constructor = t;
    }

    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
  },
      V = [].indexOf || function (t) {
    for (var e = 0, n = this.length; e < n; e++) {
      if (e in this && this[e] === t) return e;
    }

    return -1;
  };

  function Y() {}

  for (g = {
    className: "",
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: !0,
    restartOnPushState: !0,
    restartOnRequestAfter: 500,
    target: "body",
    elements: {
      checkInterval: 100,
      selectors: ["body"]
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ["GET"],
      trackWebSockets: !0,
      ignoreURLs: []
    }
  }, P = function P() {
    var t;
    return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date();
  }, R = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, f = window.cancelAnimationFrame || window.mozCancelAnimationFrame, p = function p(t, e, n) {
    if ("function" == typeof t.addEventListener) return t.addEventListener(e, n, !1);
    var r;
    "function" != typeof t["on" + e] || "object" != _typeof(t["on" + e].eventListeners) ? (r = new s(), "function" == typeof t["on" + e] && r.on(e, t["on" + e]), t["on" + e] = function (t) {
      return r.trigger(e, t);
    }, t["on" + e].eventListeners = r) : r = t["on" + e].eventListeners, r.on(e, n);
  }, null == R && (R = function R(t) {
    return setTimeout(t, 50);
  }, f = function f(t) {
    return clearTimeout(t);
  }), O = function O(e) {
    var n = P(),
        r = function r() {
      var t = P() - n;
      return 33 <= t ? (n = P(), e(t, function () {
        return R(r);
      })) : setTimeout(r, 33 - t);
    };

    return r();
  }, j = function j() {
    var t = arguments[0],
        e = arguments[1],
        n = 3 <= arguments.length ? J.call(arguments, 2) : [];
    return "function" == typeof t[e] ? t[e].apply(t, n) : t[e];
  }, _d2 = function d() {
    for (var t, e, n, r = arguments[0], s = 2 <= arguments.length ? J.call(arguments, 1) : [], o = 0, i = s.length; o < i; o++) {
      if (e = s[o]) for (t in e) {
        K.call(e, t) && (n = e[t], null != r[t] && "object" == _typeof(r[t]) && null != n && "object" == _typeof(n) ? _d2(r[t], n) : r[t] = n);
      }
    }

    return r;
  }, h = function h(t) {
    for (var e, n, r = e = 0, s = 0, o = t.length; s < o; s++) {
      n = t[s], r += Math.abs(n), e++;
    }

    return r / e;
  }, k = function k(t, e) {
    var n, r;

    if (null == t && (t = "options"), null == e && (e = !0), r = document.querySelector("[data-pace-" + t + "]")) {
      if (n = r.getAttribute("data-pace-" + t), !e) return n;

      try {
        return JSON.parse(n);
      } catch (t) {
        return "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", t) : void 0;
      }
    }
  }, Y.prototype.on = function (t, e, n, r) {
    var s;
    return null == r && (r = !1), null == this.bindings && (this.bindings = {}), null == (s = this.bindings)[t] && (s[t] = []), this.bindings[t].push({
      handler: e,
      ctx: n,
      once: r
    });
  }, Y.prototype.once = function (t, e, n) {
    return this.on(t, e, n, !0);
  }, Y.prototype.off = function (t, e) {
    var n, r, s;

    if (null != (null != (r = this.bindings) ? r[t] : void 0)) {
      if (null == e) return delete this.bindings[t];

      for (n = 0, s = []; n < this.bindings[t].length;) {
        this.bindings[t][n].handler === e ? s.push(this.bindings[t].splice(n, 1)) : s.push(n++);
      }

      return s;
    }
  }, Y.prototype.trigger = function () {
    var t,
        e,
        n,
        r,
        s,
        o,
        i = arguments[0],
        a = 2 <= arguments.length ? J.call(arguments, 1) : [];

    if (null != (r = this.bindings) && r[i]) {
      for (n = 0, o = []; n < this.bindings[i].length;) {
        e = (s = this.bindings[i][n]).handler, t = s.ctx, s = s.once, e.apply(null != t ? t : this, a), s ? o.push(this.bindings[i].splice(n, 1)) : o.push(n++);
      }

      return o;
    }
  }, B = Y, y = window.Pace || {}, window.Pace = y, _d2(y, B.prototype), T = y.options = _d2({}, g, window.paceOptions, k()), X = 0, H = (z = ["ajax", "document", "eventLag", "elements"]).length; X < H; X++) {
    !0 === T[C = z[X]] && (T[C] = g[C]);
  }

  function Z() {
    return Z.__super__.constructor.apply(this, arguments);
  }

  function $() {
    this.progress = 0;
  }

  function tt() {
    this.bindings = {};
  }

  function et() {
    var e,
        o = this;
    et.__super__.constructor.apply(this, arguments), e = function e(r) {
      var s = r.open;
      return r.open = function (t, e, n) {
        return A(t) && o.trigger("request", {
          type: t,
          url: e,
          request: r
        }), s.apply(r, arguments);
      };
    }, window.XMLHttpRequest = function (t) {
      t = new W(t);
      return e(t), t;
    };

    try {
      m(window.XMLHttpRequest, W);
    } catch (t) {}

    if (null != U) {
      window.XDomainRequest = function () {
        var t = new U();
        return e(t), t;
      };

      try {
        m(window.XDomainRequest, U);
      } catch (t) {}
    }

    if (null != F && T.ajax.trackWebSockets) {
      window.WebSocket = function (t, e) {
        var n = null != e ? new F(t, e) : new F(t);
        return A("socket") && o.trigger("request", {
          type: "socket",
          url: t,
          protocols: e,
          request: n
        }), n;
      };

      try {
        m(window.WebSocket, F);
      } catch (t) {}
    }
  }

  function nt() {
    this.complete = o(this.complete, this);
    var t = this;
    this.elements = [], S().on("request", function () {
      return t.watch.apply(t, arguments);
    });
  }

  function rt(t) {
    var e, n, r, s;

    for (null == t && (t = {}), this.complete = o(this.complete, this), this.elements = [], null == t.selectors && (t.selectors = []), n = 0, r = (s = t.selectors).length; n < r; n++) {
      e = s[n], this.elements.push(new i(e, this.complete));
    }
  }

  function st(t, e) {
    this.selector = t, this.completeCallback = e, this.progress = 0, this.check();
  }

  function ot() {
    var t,
        e,
        n = this;
    this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function () {
      return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0;
    };
  }

  function it(t) {
    this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = T.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = j(this.source, "progress"));
  }

  B = Error, Q(Z, B), n = Z, $.prototype.getElement = function () {
    var t;

    if (null == this.el) {
      if (!(t = document.querySelector(T.target))) throw new n();
      this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/(pace-done )|/, "pace-running ");
      var e = "" !== T.className ? " " + T.className : "";
      this.el.innerHTML = '<div class="pace-progress' + e + '">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el);
    }

    return this.el;
  }, $.prototype.finish = function () {
    var t = this.getElement();
    return t.className = t.className.replace("pace-active", "pace-inactive"), document.body.className = document.body.className.replace("pace-running ", "pace-done ");
  }, $.prototype.update = function (t) {
    return this.progress = t, y.trigger("progress", t), this.render();
  }, $.prototype.destroy = function () {
    try {
      this.getElement().parentNode.removeChild(this.getElement());
    } catch (t) {
      n = t;
    }

    return this.el = void 0;
  }, $.prototype.render = function () {
    var t, e, n, r, s, o, i;
    if (null == document.querySelector(T.target)) return !1;

    for (t = this.getElement(), r = "translate3d(" + this.progress + "%, 0, 0)", s = 0, o = (i = ["webkitTransform", "msTransform", "transform"]).length; s < o; s++) {
      e = i[s], t.children[0].style[e] = r;
    }

    return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), 100 <= this.progress ? n = "99" : (n = this.progress < 10 ? "0" : "", n += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + n)), y.trigger("change", this.progress), this.lastRenderedProgress = this.progress;
  }, $.prototype.done = function () {
    return 100 <= this.progress;
  }, c = $, tt.prototype.trigger = function (t, e) {
    var n, r, s, o, i;

    if (null != this.bindings[t]) {
      for (i = [], r = 0, s = (o = this.bindings[t]).length; r < s; r++) {
        n = o[r], i.push(n.call(this, e));
      }

      return i;
    }
  }, tt.prototype.on = function (t, e) {
    var n;
    return null == (n = this.bindings)[t] && (n[t] = []), this.bindings[t].push(e);
  }, s = tt, W = window.XMLHttpRequest, U = window.XDomainRequest, F = window.WebSocket, m = function m(t, e) {
    var n,
        r = [];

    for (n in e.prototype) {
      try {
        null == t[n] && "function" != typeof e[n] ? "function" == typeof Object.defineProperty ? r.push(Object.defineProperty(t, n, {
          get: function (t) {
            return function () {
              return e.prototype[t];
            };
          }(n),
          configurable: !0,
          enumerable: !0
        })) : r.push(t[n] = e.prototype[n]) : r.push(void 0);
      } catch (t) {
        0;
      }
    }

    return r;
  }, L = [], y.ignore = function () {
    var t = arguments[0],
        e = 2 <= arguments.length ? J.call(arguments, 1) : [];
    return L.unshift("ignore"), e = t.apply(null, e), L.shift(), e;
  }, y.track = function () {
    var t = arguments[0],
        e = 2 <= arguments.length ? J.call(arguments, 1) : [];
    return L.unshift("track"), e = t.apply(null, e), L.shift(), e;
  }, A = function A(t) {
    if (null == t && (t = "GET"), "track" === L[0]) return "force";

    if (!L.length && T.ajax) {
      if ("socket" === t && T.ajax.trackWebSockets) return !0;
      if (t = t.toUpperCase(), 0 <= V.call(T.ajax.trackMethods, t)) return !0;
    }

    return !1;
  }, Q(et, s), t = et, D = null, M = function M(t) {
    for (var e, n = T.ajax.ignoreURLs, r = 0, s = n.length; r < s; r++) {
      if ("string" == typeof (e = n[r])) {
        if (-1 !== t.indexOf(e)) return !0;
      } else if (e.test(t)) return !0;
    }

    return !1;
  }, (S = function S() {
    return D = null == D ? new t() : D;
  })().on("request", function (t) {
    var o,
        i = t.type,
        a = t.request,
        e = t.url;
    if (!M(e)) return y.running || !1 === T.restartOnRequestAfter && "force" !== A(i) ? void 0 : (o = arguments, "boolean" == typeof (e = T.restartOnRequestAfter || 0) && (e = 0), setTimeout(function () {
      var t,
          e,
          n,
          r,
          s = "socket" === i ? a.readyState < 1 : 0 < (s = a.readyState) && s < 4;

      if (s) {
        for (y.restart(), r = [], t = 0, e = (n = y.sources).length; t < e; t++) {
          if ((C = n[t]) instanceof u) {
            C.watch.apply(C, o);
            break;
          }

          r.push(void 0);
        }

        return r;
      }
    }, e));
  }), nt.prototype.watch = function (t) {
    var e = t.type,
        n = t.request,
        t = t.url;
    if (!M(t)) return n = new ("socket" === e ? r : a)(n, this.complete), this.elements.push(n);
  }, nt.prototype.complete = function (e) {
    return this.elements = this.elements.filter(function (t) {
      return t !== e;
    });
  }, u = nt, a = function a(e, n) {
    var t,
        r,
        s,
        o,
        i = this;
    if (this.progress = 0, null != window.ProgressEvent) for (p(e, "progress", function (t) {
      return t.lengthComputable ? i.progress = 100 * t.loaded / t.total : i.progress = i.progress + (100 - i.progress) / 2;
    }), t = 0, r = (o = ["load", "abort", "timeout", "error"]).length; t < r; t++) {
      p(e, o[t], function () {
        return n(i), i.progress = 100;
      });
    } else s = e.onreadystatechange, e.onreadystatechange = function () {
      var t;
      return 0 === (t = e.readyState) || 4 === t ? (n(i), i.progress = 100) : 3 === e.readyState && (i.progress = 50), "function" == typeof s ? s.apply(null, arguments) : void 0;
    };
  }, r = function r(t, e) {
    for (var n, r = this, s = this.progress = 0, o = (n = ["error", "open"]).length; s < o; s++) {
      p(t, n[s], function () {
        return e(r), r.progress = 100;
      });
    }
  }, rt.prototype.complete = function (e) {
    return this.elements = this.elements.filter(function (t) {
      return t !== e;
    });
  }, k = rt, st.prototype.check = function () {
    var t = this;
    return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
      return t.check();
    }, T.elements.checkInterval);
  }, st.prototype.done = function () {
    return this.completeCallback(this), this.completeCallback = null, this.progress = 100;
  }, i = st, ot.prototype.states = {
    loading: 0,
    interactive: 50,
    complete: 100
  }, B = ot, Q = function Q() {
    var e,
        n,
        r,
        s,
        o,
        i = this;
    this.progress = 0, o = [], s = 0, r = P(), n = setInterval(function () {
      var t = P() - r - 50;
      return r = P(), o.push(t), o.length > T.eventLag.sampleCount && o.shift(), e = h(o), ++s >= T.eventLag.minSamples && e < T.eventLag.lagThreshold ? (i.progress = 100, clearInterval(n)) : i.progress = 3 / (e + 3) * 100;
    }, 50);
  }, it.prototype.tick = function (t, e) {
    return 100 <= (e = null == e ? j(this.source, "progress") : e) && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / T.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), e = 1 - Math.pow(this.progress / 100, T.easeFactor), this.progress += e * this.rate * t, this.progress = Math.min(this.lastProgress + T.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
  }, v = it, b = e = _ = w = E = N = null, y.running = !1, q = function q() {
    if (T.restartOnPushState) return y.restart();
  }, null != window.history.pushState && (I = window.history.pushState, window.history.pushState = function () {
    return q(), I.apply(window.history, arguments);
  }), null != window.history.replaceState && (G = window.history.replaceState, window.history.replaceState = function () {
    return q(), G.apply(window.history, arguments);
  }), l = {
    ajax: u,
    elements: k,
    document: B,
    eventLag: Q
  }, (x = function x() {
    var t, e, n, r, s, o, i, a;

    for (y.sources = N = [], e = 0, r = (o = ["ajax", "elements", "document", "eventLag"]).length; e < r; e++) {
      !1 !== T[t = o[e]] && N.push(new l[t](T[t]));
    }

    for (n = 0, s = (a = null != (i = T.extraSources) ? i : []).length; n < s; n++) {
      C = a[n], N.push(new C(T));
    }

    return y.bar = w = new c(), E = [], _ = new v();
  })(), y.stop = function () {
    return y.trigger("stop"), y.running = !1, w.destroy(), b = !0, null != e && ("function" == typeof f && f(e), e = null), x();
  }, y.restart = function () {
    return y.trigger("restart"), y.stop(), y.start();
  }, y.go = function () {
    var m;
    return y.running = !0, w.render(), m = P(), b = !1, e = O(function (t, e) {
      w.progress;

      for (var n, r, s, o, i, a, u, c, l, p, h = a = 0, f = !0, g = u = 0, d = N.length; u < d; g = ++u) {
        for (C = N[g], i = null != E[g] ? E[g] : E[g] = [], s = c = 0, l = (r = null != (p = C.elements) ? p : [C]).length; c < l; s = ++c) {
          o = r[s], f &= (o = null != i[s] ? i[s] : i[s] = new v(o)).done, o.done || (h++, a += o.tick(t));
        }
      }

      return n = a / h, w.update(_.tick(t, n)), w.done() || f || b ? (w.update(100), y.trigger("done"), setTimeout(function () {
        return w.finish(), y.running = !1, y.trigger("hide");
      }, Math.max(T.ghostTime, Math.max(T.minTime - (P() - m), 0)))) : e();
    });
  }, y.start = function (t) {
    _d2(T, t), y.running = !0;

    try {
      w.render();
    } catch (t) {
      n = t;
    }

    return document.querySelector(".pace") ? (y.trigger("start"), y.go()) : setTimeout(y.start, 50);
  }, "function" == typeof define && define.amd ? define(function () {
    return y;
  }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = y : T.startOnPageLoad && y.start();
}.call(void 0);
/*lazyload*/

(function ($, window, document, undefined) {
  var $window = $(window);

  $.fn.lazyload = function (options) {
    var elements = this;
    var $container;
    var settings = {
      threshold: 0,
      failure_limit: 0,
      event: "scroll",
      effect: "show",
      container: window,
      data_attribute: "src",
      skip_invisible: true,
      appear: null,
      load: null,
      placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
    };

    function update() {
      var counter = 0;
      elements.each(function () {
        var $this = $(this);

        if (settings.skip_invisible && !$this.is(":visible")) {
          return;
        }

        if ($.abovethetop(this, settings) || $.leftofbegin(this, settings)) {} else if (!$.belowthefold(this, settings) && !$.rightoffold(this, settings)) {
          $this.trigger("appear");
          counter = 0;
        } else {
          if (++counter > settings.failure_limit) {
            return false;
          }
        }
      });
    }

    if (options) {
      if (undefined !== options.failurelimit) {
        options.failure_limit = options.failurelimit;
        delete options.failurelimit;
      }

      if (undefined !== options.effectspeed) {
        options.effect_speed = options.effectspeed;
        delete options.effectspeed;
      }

      $.extend(settings, options);
    }

    $container = settings.container === undefined || settings.container === window ? $window : $(settings.container);

    if (0 === settings.event.indexOf("scroll")) {
      $container.bind(settings.event, function () {
        return update();
      });
    }

    this.each(function () {
      var self = this;
      var $self = $(self);
      self.loaded = false;

      if ($self.attr("src") === undefined || $self.attr("src") === false) {
        if ($self.is("img")) {
          $self.attr("src", settings.placeholder);
        } else {
          $self.css({
            'background-image': 'url(' + settings.placeholder + ')'
          });
        }

        $self.parent().addClass('current');
      }

      $self.one("appear", function () {
        if (!this.loaded) {
          if (settings.appear) {
            var elements_left = elements.length;
            settings.appear.call(self, elements_left, settings);
          }

          $("<img />").bind("load", function () {
            var original = $self.attr("data-" + settings.data_attribute);
            $self.hide();

            if ($self.is("img")) {
              $self.attr("src", original);
            } else {
              $self.css("background-image", "url('" + original + "')");
            }

            $self.parent().addClass('current');
            setTimeout(function () {
              $self.removeClass('lazys lazy');
            }, 100);
            $self[settings.effect](settings.effect_speed);
            self.loaded = true;
            var temp = $.grep(elements, function (element) {
              return !element.loaded;
            });
            elements = $(temp);

            if (settings.load) {
              var elements_left = elements.length;
              settings.load.call(self, elements_left, settings);
            }
          }).attr("src", $self.attr("data-" + settings.data_attribute));
        }
      });

      if (0 !== settings.event.indexOf("scroll")) {
        $self.bind(settings.event, function () {
          if (!self.loaded) {
            $self.trigger("appear");
          }
        });
      }
    });
    $window.bind("resize", function () {
      update();
    });

    if (/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)) {
      $window.bind("pageshow", function (event) {
        if (event.originalEvent && event.originalEvent.persisted) {
          elements.each(function () {
            $(this).trigger("appear");
          });
        }
      });
    }

    $(document).ready(function () {
      update();
    });
    return this;
  };

  $.belowthefold = function (element, settings) {
    var fold;

    if (settings.container === undefined || settings.container === window) {
      fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
    } else {
      fold = $(settings.container).offset().top + $(settings.container).height();
    }

    return fold <= $(element).offset().top - settings.threshold;
  };

  $.rightoffold = function (element, settings) {
    var fold;

    if (settings.container === undefined || settings.container === window) {
      fold = $window.width() + $window.scrollLeft();
    } else {
      fold = $(settings.container).offset().left + $(settings.container).width();
    }

    return fold <= $(element).offset().left - settings.threshold;
  };

  $.abovethetop = function (element, settings) {
    var fold;

    if (settings.container === undefined || settings.container === window) {
      fold = $window.scrollTop();
    } else {
      fold = $(settings.container).offset().top;
    }

    return fold >= $(element).offset().top + settings.threshold + $(element).height();
  };

  $.leftofbegin = function (element, settings) {
    var fold;

    if (settings.container === undefined || settings.container === window) {
      fold = $window.scrollLeft();
    } else {
      fold = $(settings.container).offset().left;
    }

    return fold >= $(element).offset().left + settings.threshold + $(element).width();
  };

  $.inviewport = function (element, settings) {
    return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
  };

  $.extend($.expr[":"], {
    "below-the-fold": function belowTheFold(a) {
      return $.belowthefold(a, {
        threshold: 0
      });
    },
    "above-the-top": function aboveTheTop(a) {
      return !$.belowthefold(a, {
        threshold: 0
      });
    },
    "right-of-screen": function rightOfScreen(a) {
      return $.rightoffold(a, {
        threshold: 0
      });
    },
    "left-of-screen": function leftOfScreen(a) {
      return !$.rightoffold(a, {
        threshold: 0
      });
    },
    "in-viewport": function inViewport(a) {
      return $.inviewport(a, {
        threshold: 0
      });
    },
    "above-the-fold": function aboveTheFold(a) {
      return !$.belowthefold(a, {
        threshold: 0
      });
    },
    "right-of-fold": function rightOfFold(a) {
      return $.rightoffold(a, {
        threshold: 0
      });
    },
    "left-of-fold": function leftOfFold(a) {
      return !$.rightoffold(a, {
        threshold: 0
      });
    }
  });
})(jQuery, window, document);
/*!
 * VERSION: beta 0.2.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */


var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : void 0 || window;

(function (t) {
  "use strict";

  var e = t.GreenSockGlobals || t,
      i = function i(t) {
    var i,
        s = t.split("."),
        r = e;

    for (i = 0; s.length > i; i++) {
      r[s[i]] = r = r[s[i]] || {};
    }

    return r;
  },
      s = i("com.greensock.utils"),
      r = function r(t) {
    var e = t.nodeType,
        i = "";

    if (1 === e || 9 === e || 11 === e) {
      if ("string" == typeof t.textContent) return t.textContent;

      for (t = t.firstChild; t; t = t.nextSibling) {
        i += r(t);
      }
    } else if (3 === e || 4 === e) return t.nodeValue;

    return i;
  },
      n = document,
      a = n.defaultView ? n.defaultView.getComputedStyle : function () {},
      o = /([A-Z])/g,
      h = function h(t, e, i, s) {
    var r;
    return (i = i || a(t, null)) ? (t = i.getPropertyValue(e.replace(o, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), s ? r : parseInt(r, 10) || 0;
  },
      l = function l(t) {
    return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1;
  },
      _ = function _(t) {
    var e,
        i,
        s,
        r = [],
        n = t.length;

    for (e = 0; n > e; e++) {
      if (i = t[e], l(i)) for (s = i.length, s = 0; i.length > s; s++) {
        r.push(i[s]);
      } else r.push(i);
    }

    return r;
  },
      u = ")eefec303079ad17405c",
      c = /(?:<br>|<br\/>|<br \/>)/gi,
      p = n.all && !n.addEventListener,
      f = "<div style='position:relative;display:inline-block;" + (p ? "*display:inline;*zoom:1;'" : "'"),
      m = function m(t) {
    t = t || "";
    var e = -1 !== t.indexOf("++"),
        i = 1;
    return e && (t = t.split("++").join("")), function () {
      return f + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">");
    };
  },
      d = s.SplitText = e.SplitText = function (t, e) {
    if ("string" == typeof t && (t = d.selector(t)), !t) throw "cannot split a null element.";
    this.elements = l(t) ? _(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e);
  },
      g = function g(t, e, i, s, o) {
    c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, u));

    var l,
        _,
        p,
        f,
        d,
        g,
        v,
        y,
        T,
        w,
        b,
        x,
        P,
        S = r(t),
        C = e.type || e.split || "chars,words,lines",
        k = -1 !== C.indexOf("lines") ? [] : null,
        R = -1 !== C.indexOf("words"),
        A = -1 !== C.indexOf("chars"),
        D = "absolute" === e.position || e.absolute === !0,
        O = D ? "&#173; " : " ",
        M = -999,
        L = a(t),
        z = h(t, "paddingLeft", L),
        I = h(t, "borderBottomWidth", L) + h(t, "borderTopWidth", L),
        E = h(t, "borderLeftWidth", L) + h(t, "borderRightWidth", L),
        N = h(t, "paddingTop", L) + h(t, "paddingBottom", L),
        F = h(t, "paddingLeft", L) + h(t, "paddingRight", L),
        X = h(t, "textAlign", L, !0),
        U = t.clientHeight,
        B = t.clientWidth,
        j = S.length,
        Y = "</div>",
        q = m(e.wordsClass),
        G = m(e.charsClass),
        V = -1 !== (e.linesClass || "").indexOf("++"),
        Q = e.linesClass;

    for (V && (Q = Q.split("++").join("")), p = q(), f = 0; j > f; f++) {
      g = S.charAt(f), ")" === g && S.substr(f, 20) === u ? (p += Y + "<BR/>", f !== j - 1 && (p += " " + q()), f += 19) : " " === g && " " !== S.charAt(f - 1) && f !== j - 1 ? (p += Y, f !== j - 1 && (p += O + q())) : p += A && " " !== g ? G() + g + "</div>" : g;
    }

    for (t.innerHTML = p + Y, d = t.getElementsByTagName("*"), j = d.length, v = [], f = 0; j > f; f++) {
      v[f] = d[f];
    }

    if (k || D) for (f = 0; j > f; f++) {
      y = v[f], _ = y.parentNode === t, (_ || D || A && !R) && (T = y.offsetTop, k && _ && T !== M && "BR" !== y.nodeName && (l = [], k.push(l), M = T), D && (y._x = y.offsetLeft, y._y = T, y._w = y.offsetWidth, y._h = y.offsetHeight), k && (R !== _ && A || (l.push(y), y._x -= z), _ && f && (v[f - 1]._wordEnd = !0)));
    }

    for (f = 0; j > f; f++) {
      y = v[f], _ = y.parentNode === t, "BR" !== y.nodeName ? (D && (b = y.style, R || _ || (y._x += y.parentNode._x, y._y += y.parentNode._y), b.left = y._x + "px", b.top = y._y + "px", b.position = "absolute", b.display = "block", b.width = y._w + 1 + "px", b.height = y._h + "px"), R ? _ ? s.push(y) : A && i.push(y) : _ ? (t.removeChild(y), v.splice(f--, 1), j--) : !_ && A && (T = !k && !D && y.nextSibling, t.appendChild(y), T || t.appendChild(n.createTextNode(" ")), i.push(y))) : k || D ? (t.removeChild(y), v.splice(f--, 1), j--) : R || t.appendChild(y);
    }

    if (k) {
      for (D && (w = n.createElement("div"), t.appendChild(w), x = w.offsetWidth + "px", T = w.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(w)), b = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) {
        t.removeChild(t.firstChild);
      }

      for (P = !D || !R && !A, f = 0; k.length > f; f++) {
        for (l = k[f], w = n.createElement("div"), w.style.cssText = "display:block;text-align:" + X + ";position:" + (D ? "absolute;" : "relative;"), Q && (w.className = Q + (V ? f + 1 : "")), o.push(w), j = l.length, d = 0; j > d; d++) {
          "BR" !== l[d].nodeName && (y = l[d], w.appendChild(y), P && (y._wordEnd || R) && w.appendChild(n.createTextNode(" ")), D && (0 === d && (w.style.top = y._y + "px", w.style.left = z + T + "px"), y.style.top = "0px", T && (y.style.left = y._x - T + "px")));
        }

        R || A || (w.innerHTML = r(w).split(String.fromCharCode(160)).join(" ")), D && (w.style.width = x, w.style.height = y._h + "px"), t.appendChild(w);
      }

      t.style.cssText = b;
    }

    D && (U > t.clientHeight && (t.style.height = U - N + "px", U > t.clientHeight && (t.style.height = U + I + "px")), B > t.clientWidth && (t.style.width = B - F + "px", B > t.clientWidth && (t.style.width = B + E + "px")));
  },
      v = d.prototype;

  v.split = function (t) {
    this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;

    for (var e = 0; this.elements.length > e; e++) {
      this._originals[e] = this.elements[e].innerHTML, g(this.elements[e], this.vars, this.chars, this.words, this.lines);
    }

    return this.isSplit = !0, this;
  }, v.revert = function () {
    if (!this._originals) throw "revert() call wasn't scoped properly.";

    for (var t = this._originals.length; --t > -1;) {
      this.elements[t].innerHTML = this._originals[t];
    }

    return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this;
  }, d.selector = t.$ || t.jQuery || function (e) {
    return t.$ ? (d.selector = t.$, t.$(e)) : n ? n.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e;
  }, d.version = "0.2.4";
})(_gsScope), function (t) {
  "use strict";

  var e = function e() {
    return (_gsScope.GreenSockGlobals || _gsScope)[t];
  };

  "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (module.exports = e());
}("SplitText"); //初始化

if ($(".lazy").length > 0) {
  $(".lazy").lazyload({
    //placeholder : "/style/img/loading.png",
    //effect: "fadeIn",
    threshold: $(window).height() / 2
  });
}

$('[data-split]').each(function (i, v) {
  var _type = $(v).data('type') || 'chars';

  new SplitText(v, {
    type: _type
  })[_type];
});
/*
插件：ScrollMagic页面滚动交互插件
版本：v2.0.8
官网：http://scrollmagic.io
*/

!function (e, t) {
  "function" == typeof define && define.amd ? define(t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t() : e.ScrollMagic = t();
}(void 0, function () {
  "use strict";

  function _() {}

  _.version = "2.0.8", "undefined" != typeof window && window.addEventListener("mousewheel", void 0);
  var P = "data-scrollmagic-pin-spacer";

  _.Controller = function (e) {
    function t() {
      var e, t, n;
      v && u && (e = R.type.Array(u) ? u : f.slice(0), u = !1, t = d, 0 != (n = (d = l.scrollPos()) - t) && (h = 0 < n ? "FORWARD" : i), h === i && e.reverse(), e.forEach(function (e, t) {
        e.update(!0);
      }));
    }

    function r() {
      n = R.rAF(t);
    }

    var n,
        o,
        i = "REVERSE",
        s = "PAUSED",
        a = z.defaults,
        l = this,
        c = R.extend({}, a, e),
        f = [],
        u = !1,
        d = 0,
        h = s,
        p = !0,
        g = 0,
        v = !0,
        m = function m() {
      0 < c.refreshInterval && (o = window.setTimeout(E, c.refreshInterval));
    },
        w = function w() {
      return c.vertical ? R.get.scrollTop(c.container) : R.get.scrollLeft(c.container);
    },
        y = function y() {
      return c.vertical ? R.get.height(c.container) : R.get.width(c.container);
    },
        S = this._setScrollPos = function (e) {
      c.vertical ? p ? window.scrollTo(R.get.scrollLeft(), e) : c.container.scrollTop = e : p ? window.scrollTo(e, R.get.scrollTop()) : c.container.scrollLeft = e;
    },
        b = function b(e) {
      "resize" == e.type && (g = y(), h = s), !0 !== u && (u = !0, r());
    },
        E = function E() {
      if (!p && g != y()) {
        var t;

        try {
          t = new Event("resize", {
            bubbles: !1,
            cancelable: !1
          });
        } catch (e) {
          (t = document.createEvent("Event")).initEvent("resize", !1, !1);
        }

        c.container.dispatchEvent(t);
      }

      f.forEach(function (e, t) {
        e.refresh();
      }), m();
    };

    this._options = c;

    function x(e) {
      if (e.length <= 1) return e;
      var t = e.slice(0);
      return t.sort(function (e, t) {
        return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
      }), t;
    }

    return this.addScene = function (e) {
      if (R.type.Array(e)) e.forEach(function (e, t) {
        l.addScene(e);
      });else if (e instanceof _.Scene) if (e.controller() !== l) e.addTo(l);else if (!~f.indexOf(e)) for (var t in f.push(e), f = x(f), e.on("shift.controller_sort", function () {
        f = x(f);
      }), c.globalSceneOptions) {
        e[t] && e[t].call(e, c.globalSceneOptions[t]);
      }
      return l;
    }, this.removeScene = function (e) {
      var t;
      return R.type.Array(e) ? e.forEach(function (e, t) {
        l.removeScene(e);
      }) : -1 < (t = f.indexOf(e)) && (e.off("shift.controller_sort"), f.splice(t, 1), e.remove()), l;
    }, this.updateScene = function (e, n) {
      return R.type.Array(e) ? e.forEach(function (e, t) {
        l.updateScene(e, n);
      }) : n ? e.update(!0) : !0 !== u && e instanceof _.Scene && (~(u = u || []).indexOf(e) || u.push(e), u = x(u), r()), l;
    }, this.update = function (e) {
      return b({
        type: "resize"
      }), e && t(), l;
    }, this.scrollTo = function (e, t) {
      if (R.type.Number(e)) S.call(c.container, e, t);else if (e instanceof _.Scene) e.controller() === l && l.scrollTo(e.scrollOffset(), t);else if (R.type.Function(e)) S = e;else {
        var n = R.get.elements(e)[0];

        if (n) {
          for (; n.parentNode.hasAttribute(P);) {
            n = n.parentNode;
          }

          var r = c.vertical ? "top" : "left",
              o = R.get.offset(c.container),
              i = R.get.offset(n);
          p || (o[r] -= l.scrollPos()), l.scrollTo(i[r] - o[r], t);
        }
      }
      return l;
    }, this.scrollPos = function (e) {
      return arguments.length ? (R.type.Function(e) && (w = e), l) : w.call(l);
    }, this.info = function (e) {
      var t = {
        size: g,
        vertical: c.vertical,
        scrollPos: d,
        scrollDirection: h,
        container: c.container,
        isDocument: p
      };
      return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t;
    }, this.loglevel = function (e) {
      return l;
    }, this.enabled = function (e) {
      return arguments.length ? (v != e && (v = !!e, l.updateScene(f, !0)), l) : v;
    }, this.destroy = function (e) {
      window.clearTimeout(o);

      for (var t = f.length; t--;) {
        f[t].destroy(e);
      }

      return c.container.removeEventListener("resize", b), c.container.removeEventListener("scroll", b), R.cAF(n), null;
    }, function () {
      for (var e in c) {
        a.hasOwnProperty(e) || delete c[e];
      }

      if (c.container = R.get.elements(c.container)[0], !c.container) throw "ScrollMagic.Controller init failed.";
      (p = c.container === window || c.container === document.body || !document.body.contains(c.container)) && (c.container = window), g = y(), c.container.addEventListener("resize", b), c.container.addEventListener("scroll", b);
      var t = parseInt(c.refreshInterval, 10);
      c.refreshInterval = R.type.Number(t) ? t : a.refreshInterval, m();
    }(), l;
  };

  var z = {
    defaults: {
      container: window,
      vertical: !0,
      globalSceneOptions: {},
      loglevel: 2,
      refreshInterval: 100
    }
  };
  _.Controller.addOption = function (e, t) {
    z.defaults[e] = t;
  }, _.Controller.extend = function (e) {
    var t = this;
    _.Controller = function () {
      return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this;
    }, R.extend(_.Controller, t), _.Controller.prototype = t.prototype, _.Controller.prototype.constructor = _.Controller;
  }, _.Scene = function (e) {
    var n,
        l,
        c = "BEFORE",
        f = "DURING",
        u = "AFTER",
        r = D.defaults,
        d = this,
        h = R.extend({}, r, e),
        p = c,
        g = 0,
        a = {
      start: 0,
      end: 0
    },
        v = 0,
        o = !0,
        s = {};
    this.on = function (e, o) {
      return R.type.Function(o) && (e = e.trim().split(" ")).forEach(function (e) {
        var t = e.split("."),
            n = t[0],
            r = t[1];
        "*" != n && (s[n] || (s[n] = []), s[n].push({
          namespace: r || "",
          callback: o
        }));
      }), d;
    }, this.off = function (e, i) {
      return e && (e = e.trim().split(" ")).forEach(function (e, t) {
        var n = e.split("."),
            r = n[0],
            o = n[1] || "";
        ("*" === r ? Object.keys(s) : [r]).forEach(function (e) {
          for (var t = s[e] || [], n = t.length; n--;) {
            var r = t[n];
            !r || o !== r.namespace && "*" !== o || i && i != r.callback || t.splice(n, 1);
          }

          t.length || delete s[e];
        });
      }), d;
    }, this.trigger = function (e, n) {
      var t, r, o, i;
      return e && (t = e.trim().split("."), r = t[0], o = t[1], (i = s[r]) && i.forEach(function (e, t) {
        o && o !== e.namespace || e.callback.call(d, new _.Event(r, e.namespace, d, n));
      })), d;
    }, d.on("change.internal", function (e) {
      "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? y() : "reverse" === e.what && d.update());
    }).on("shift.internal", function (e) {
      t(), d.update();
    }), this.addTo = function (e) {
      return e instanceof _.Controller && l != e && (l && l.removeScene(d), l = e, E(), i(!0), y(!0), t(), l.info("container").addEventListener("resize", S), e.addScene(d), d.trigger("add", {
        controller: l
      }), d.update()), d;
    }, this.enabled = function (e) {
      return arguments.length ? (o != e && (o = !!e, d.update(!0)), d) : o;
    }, this.remove = function () {
      var e;
      return l && (l.info("container").removeEventListener("resize", S), e = l, l = void 0, e.removeScene(d), d.trigger("remove")), d;
    }, this.destroy = function (e) {
      return d.trigger("destroy", {
        reset: e
      }), d.remove(), d.off("*.*"), null;
    }, this.update = function (e) {
      var t, n;
      return l && (e ? l.enabled() && o ? (t = l.info("scrollPos"), n = 0 < h.duration ? (t - a.start) / (a.end - a.start) : t >= a.start ? 1 : 0, d.trigger("update", {
        startPos: a.start,
        endPos: a.end,
        scrollPos: t
      }), d.progress(n)) : m && p === f && T(!0) : l.updateScene(d, !1)), d;
    }, this.refresh = function () {
      return i(), y(), d;
    }, this.progress = function (e) {
      if (arguments.length) {
        var t,
            n,
            r,
            o = !1,
            i = p,
            s = l ? l.info("scrollDirection") : "PAUSED",
            a = h.reverse || g <= e;
        return 0 === h.duration ? (o = g != e, p = 0 === (g = e < 1 && a ? 0 : 1) ? c : f) : e < 0 && p !== c && a ? (p = c, o = !(g = 0)) : 0 <= e && e < 1 && a ? (g = e, p = f, o = !0) : 1 <= e && p !== u ? (g = 1, p = u, o = !0) : p !== f || a || T(), o && (t = {
          progress: g,
          state: p,
          scrollDirection: s
        }, r = function r(e) {
          d.trigger(e, t);
        }, (n = p != i) && i !== f && (r("enter"), r(i === c ? "start" : "end")), r("progress"), n && p !== f && (r(p === c ? "start" : "end"), r("leave"))), d;
      }

      return g;
    };

    var m,
        w,
        t = function t() {
      a = {
        start: v + h.offset
      }, l && h.triggerElement && (a.start -= l.info("size") * h.triggerHook), a.end = a.start + h.duration;
    },
        i = function i(e) {
      var t;
      !n || x(t = "duration", n.call(d)) && !e && (d.trigger("change", {
        what: t,
        newval: h[t]
      }), d.trigger("shift", {
        reason: t
      }));
    },
        y = function y(e) {
      var t = 0,
          n = h.triggerElement;

      if (l && (n || 0 < v)) {
        if (n) if (n.parentNode) {
          for (var r = l.info(), o = R.get.offset(r.container), i = r.vertical ? "top" : "left"; n.parentNode.hasAttribute(P);) {
            n = n.parentNode;
          }

          var s = R.get.offset(n);
          r.isDocument || (o[i] -= l.scrollPos()), t = s[i] - o[i];
        } else d.triggerElement(void 0);
        var a = t != v;
        v = t, a && !e && d.trigger("shift", {
          reason: "triggerElementPosition"
        });
      }
    },
        S = function S(e) {
      0 < h.triggerHook && d.trigger("shift", {
        reason: "containerResize"
      });
    },
        b = R.extend(D.validate, {
      duration: function duration(t) {
        var e;

        if (R.type.String(t) && t.match(/^(\.|\d)*\d+%$/) && (e = parseFloat(t) / 100, t = function t() {
          return l ? l.info("size") * e : 0;
        }), R.type.Function(t)) {
          n = t;

          try {
            t = parseFloat(n.call(d));
          } catch (e) {
            t = -1;
          }
        }

        if (t = parseFloat(t), !R.type.Number(t) || t < 0) throw n = n && void 0, 0;
        return t;
      }
    }),
        E = function E(e) {
      (e = arguments.length ? [e] : Object.keys(b)).forEach(function (t, e) {
        var n;
        if (b[t]) try {
          n = b[t](h[t]);
        } catch (e) {
          n = r[t];
        } finally {
          h[t] = n;
        }
      });
    },
        x = function x(e, t) {
      var n = !1,
          r = h[e];
      return h[e] != t && (h[e] = t, E(e), n = r != h[e]), n;
    },
        z = function z(t) {
      d[t] || (d[t] = function (e) {
        return arguments.length ? ("duration" === t && (n = void 0), x(t, e) && (d.trigger("change", {
          what: t,
          newval: h[t]
        }), ~D.shifts.indexOf(t) && d.trigger("shift", {
          reason: t
        })), d) : h[t];
      });
    };

    this.controller = function () {
      return l;
    }, this.state = function () {
      return p;
    }, this.scrollOffset = function () {
      return a.start;
    }, this.triggerPosition = function () {
      var e = h.offset;
      return l && (h.triggerElement ? e += v : e += l.info("size") * d.triggerHook()), e;
    }, d.on("shift.internal", function (e) {
      var t = "duration" === e.reason;
      (p === u && t || p === f && 0 === h.duration) && T(), t && A();
    }).on("progress.internal", function (e) {
      T();
    }).on("add.internal", function (e) {
      A();
    }).on("destroy.internal", function (e) {
      d.removePin(e.reset);
    });

    function C() {
      l && m && p === f && !l.info("isDocument") && T();
    }

    function F() {
      l && m && p === f && ((w.relSize.width || w.relSize.autoFullWidth) && R.get.width(window) != R.get.width(w.spacer.parentNode) || w.relSize.height && R.get.height(window) != R.get.height(w.spacer.parentNode)) && A();
    }

    function L(e) {
      l && m && p === f && !l.info("isDocument") && (e.preventDefault(), l._setScrollPos(l.info("scrollPos") - ((e.wheelDelta || e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)));
    }

    var T = function T(e) {
      var t, n, r, o, i, s;
      m && l && (t = l.info(), n = w.spacer.firstChild, e || p !== f ? (r = {
        position: w.inFlow ? "relative" : "absolute",
        top: 0,
        left: 0
      }, o = R.css(n, "position") != r.position, w.pushFollowers ? 0 < h.duration && (p === u && 0 === parseFloat(R.css(w.spacer, "padding-top")) || p === c && 0 === parseFloat(R.css(w.spacer, "padding-bottom"))) && (o = !0) : r[t.vertical ? "top" : "left"] = h.duration * g, R.css(n, r), o && A()) : ("fixed" != R.css(n, "position") && (R.css(n, {
        position: "fixed"
      }), A()), i = R.get.offset(w.spacer, !0), s = h.reverse || 0 === h.duration ? t.scrollPos - a.start : Math.round(g * h.duration * 10) / 10, i[t.vertical ? "top" : "left"] += s, R.css(w.spacer.firstChild, {
        top: i.top,
        left: i.left
      })));
    },
        A = function A() {
      var e, t, n, r, o;
      m && l && w.inFlow && (e = p === f, t = l.info("vertical"), n = w.spacer.firstChild, r = R.isMarginCollapseType(R.css(w.spacer, "display")), o = {}, w.relSize.width || w.relSize.autoFullWidth ? e ? R.css(m, {
        width: R.get.width(w.spacer)
      }) : R.css(m, {
        width: "100%"
      }) : (o["min-width"] = R.get.width(t ? m : n, !0, !0), o.width = e ? o["min-width"] : "auto"), w.relSize.height ? e ? R.css(m, {
        height: R.get.height(w.spacer) - (w.pushFollowers ? h.duration : 0)
      }) : R.css(m, {
        height: "100%"
      }) : (o["min-height"] = R.get.height(t ? n : m, !0, !r), o.height = e ? o["min-height"] : "auto"), w.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = h.duration * g, o["padding" + (t ? "Bottom" : "Right")] = h.duration * (1 - g)), R.css(w.spacer, o));
    };

    this.setPin = function (e, t) {
      if (t = R.extend({}, {
        pushFollowers: !0,
        spacerClass: "scrollmagic-pin-spacer"
      }, t), !(e = R.get.elements(e)[0])) return d;
      if ("fixed" === R.css(e, "position")) return d;

      if (m) {
        if (m === e) return d;
        d.removePin();
      }

      var n = (m = e).parentNode.style.display,
          r = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
      m.parentNode.style.display = "none";
      var o = "absolute" != R.css(m, "position"),
          i = R.css(m, r.concat(["display"])),
          s = R.css(m, ["width", "height"]);
      m.parentNode.style.display = n, !o && t.pushFollowers && (t.pushFollowers = !1);
      var a,
          l = m.parentNode.insertBefore(document.createElement("div"), m),
          c = R.extend(i, {
        position: o ? "relative" : "absolute",
        boxSizing: "content-box",
        mozBoxSizing: "content-box",
        webkitBoxSizing: "content-box"
      });
      return o || R.extend(c, R.css(m, ["width", "height"])), R.css(l, c), l.setAttribute(P, ""), R.addClass(l, t.spacerClass), w = {
        spacer: l,
        relSize: {
          width: "%" === s.width.slice(-1),
          height: "%" === s.height.slice(-1),
          autoFullWidth: "auto" === s.width && o && R.isMarginCollapseType(i.display)
        },
        pushFollowers: t.pushFollowers,
        inFlow: o
      }, m.___origStyle || (m.___origStyle = {}, a = m.style, r.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function (e) {
        m.___origStyle[e] = a[e] || "";
      })), w.relSize.width && R.css(l, {
        width: s.width
      }), w.relSize.height && R.css(l, {
        height: s.height
      }), l.appendChild(m), R.css(m, {
        position: o ? "relative" : "absolute",
        margin: "auto",
        top: "auto",
        left: "auto",
        bottom: "auto",
        right: "auto"
      }), (w.relSize.width || w.relSize.autoFullWidth) && R.css(m, {
        boxSizing: "border-box",
        mozBoxSizing: "border-box",
        webkitBoxSizing: "border-box"
      }), window.addEventListener("scroll", C), window.addEventListener("resize", C), window.addEventListener("resize", F), m.addEventListener("mousewheel", L), m.addEventListener("DOMMouseScroll", L), T(), d;
    }, this.removePin = function (e) {
      var t, n, r;
      return m && (p === f && T(!0), !e && l || ((t = w.spacer.firstChild).hasAttribute(P) && (n = w.spacer.style, r = {}, ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function (e) {
        r[e] = n[e] || "";
      }), R.css(t, r)), w.spacer.parentNode.insertBefore(t, w.spacer), w.spacer.parentNode.removeChild(w.spacer), m.parentNode.hasAttribute(P) || (R.css(m, m.___origStyle), delete m.___origStyle)), window.removeEventListener("scroll", C), window.removeEventListener("resize", C), window.removeEventListener("resize", F), m.removeEventListener("mousewheel", L), m.removeEventListener("DOMMouseScroll", L), m = void 0), d;
    };
    var N,
        O = [];
    return d.on("destroy.internal", function (e) {
      d.removeClassToggle(e.reset);
    }), this.setClassToggle = function (e, t) {
      var n = R.get.elements(e);
      return 0 !== n.length && R.type.String(t) && (0 < O.length && d.removeClassToggle(), N = t, O = n, d.on("enter.internal_class leave.internal_class", function (e) {
        var n = "enter" === e.type ? R.addClass : R.removeClass;
        O.forEach(function (e, t) {
          n(e, N);
        });
      })), d;
    }, this.removeClassToggle = function (e) {
      return e && O.forEach(function (e, t) {
        R.removeClass(e, N);
      }), d.off("start.internal_class end.internal_class"), N = void 0, O = [], d;
    }, function () {
      for (var e in h) {
        r.hasOwnProperty(e) || delete h[e];
      }

      for (var t in r) {
        z(t);
      }

      E();
    }(), d;
  };
  var D = {
    defaults: {
      duration: 0,
      offset: 0,
      triggerElement: void 0,
      triggerHook: .5,
      reverse: !0,
      loglevel: 2
    },
    validate: {
      offset: function offset(e) {
        if (e = parseFloat(e), !R.type.Number(e)) throw 0;
        return e;
      },
      triggerElement: function triggerElement(e) {
        if (e = e || void 0) {
          var t = R.get.elements(e)[0];
          if (!t || !t.parentNode) throw 0;
          e = t;
        }

        return e;
      },
      triggerHook: function triggerHook(e) {
        var t = {
          onCenter: .5,
          onEnter: 1,
          onLeave: 0
        };
        if (R.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));else {
          if (!(e in t)) throw 0;
          e = t[e];
        }
        return e;
      },
      reverse: function reverse(e) {
        return !!e;
      }
    },
    shifts: ["duration", "offset", "triggerHook"]
  };
  _.Scene.addOption = function (e, t, n, r) {
    e in D.defaults || (D.defaults[e] = t, D.validate[e] = n, r && D.shifts.push(e));
  }, _.Scene.extend = function (e) {
    var t = this;
    _.Scene = function () {
      return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this;
    }, R.extend(_.Scene, t), _.Scene.prototype = t.prototype, _.Scene.prototype.constructor = _.Scene;
  }, _.Event = function (e, t, n, r) {
    for (var o in r = r || {}) {
      this[o] = r[o];
    }

    return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this;
  };

  var R = _._util = function (s) {
    function a(e) {
      return parseFloat(e) || 0;
    }

    function l(e) {
      return e.currentStyle ? e.currentStyle : s.getComputedStyle(e);
    }

    function r(e, t, n, r) {
      if ((t = t === document ? s : t) === s) r = !1;else if (!u.DomElement(t)) return 0;
      e = e[0].toUpperCase() + e.substr(1).toLowerCase();
      var o,
          i = (n ? t["offset" + e] || t["outer" + e] : t["client" + e] || t["inner" + e]) || 0;
      return n && r && (o = l(t), i += "Height" === e ? a(o.marginTop) + a(o.marginBottom) : a(o.marginLeft) + a(o.marginRight)), i;
    }

    function c(e) {
      return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (e) {
        return e[1].toUpperCase();
      });
    }

    var e = {};
    e.extend = function (e) {
      for (e = e || {}, f = 1; f < arguments.length; f++) {
        if (arguments[f]) for (var t in arguments[f]) {
          arguments[f].hasOwnProperty(t) && (e[t] = arguments[f][t]);
        }
      }

      return e;
    }, e.isMarginCollapseType = function (e) {
      return !!~["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e);
    };

    for (var o = 0, t = ["ms", "moz", "webkit", "o"], n = s.requestAnimationFrame, i = s.cancelAnimationFrame, f = 0; !n && f < 4; ++f) {
      n = s[t[f] + "RequestAnimationFrame"], i = s[t[f] + "CancelAnimationFrame"] || s[t[f] + "CancelRequestAnimationFrame"];
    }

    n = n || function (e) {
      var t = new Date().getTime(),
          n = Math.max(0, 16 - (t - o)),
          r = s.setTimeout(function () {
        e(t + n);
      }, n);
      return o = t + n, r;
    }, i = i || function (e) {
      s.clearTimeout(e);
    }, e.rAF = n.bind(s), e.cAF = i.bind(s);

    var u = e.type = function (e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
    };

    u.String = function (e) {
      return "string" === u(e);
    }, u.Function = function (e) {
      return "function" === u(e);
    }, u.Array = function (e) {
      return Array.isArray(e);
    }, u.Number = function (e) {
      return !u.Array(e) && 0 <= e - parseFloat(e) + 1;
    }, u.DomElement = function (e) {
      return "object" == (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) || "function" == typeof HTMLElement ? e instanceof HTMLElement || e instanceof SVGElement : e && "object" == _typeof(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName;
    };
    var d = e.get = {};
    return d.elements = function (e) {
      var t = [];
      if (u.String(e)) try {
        e = document.querySelectorAll(e);
      } catch (e) {
        return t;
      }
      if ("nodelist" === u(e) || u.Array(e) || e instanceof NodeList) for (var n = 0, r = t.length = e.length; n < r; n++) {
        var o = e[n];
        t[n] = u.DomElement(o) ? o : d.elements(o);
      } else !u.DomElement(e) && e !== document && e !== s || (t = [e]);
      return t;
    }, d.scrollTop = function (e) {
      return e && "number" == typeof e.scrollTop ? e.scrollTop : s.pageYOffset || 0;
    }, d.scrollLeft = function (e) {
      return e && "number" == typeof e.scrollLeft ? e.scrollLeft : s.pageXOffset || 0;
    }, d.width = function (e, t, n) {
      return r("width", e, t, n);
    }, d.height = function (e, t, n) {
      return r("height", e, t, n);
    }, d.offset = function (e, t) {
      var n,
          r = {
        top: 0,
        left: 0
      };
      return e && e.getBoundingClientRect && (n = e.getBoundingClientRect(), r.top = n.top, r.left = n.left, t || (r.top += d.scrollTop(), r.left += d.scrollLeft())), r;
    }, e.addClass = function (e, t) {
      t && (e.classList ? e.classList.add(t) : e.className += " " + t);
    }, e.removeClass = function (e, t) {
      t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
    }, e.css = function (e, t) {
      if (u.String(t)) return l(e)[c(t)];

      if (u.Array(t)) {
        var n = {},
            r = l(e);
        return t.forEach(function (e, t) {
          n[e] = r[c(e)];
        }), n;
      }

      for (var o in t) {
        var i = t[o];
        i == parseFloat(i) && (i += "px"), e.style[c(o)] = i;
      }
    }, e;
  }(window || {});

  return _;
});
/*
插件：ScrollMagic页面滚动交互插件animation.gsap.min.js
版本：v2.0.8
官网：http://scrollmagic.io
*/

!function (e, n) {
  var r;
  "function" == typeof define && define.amd ? define(["ScrollMagic", "gsap", "TweenMax", "TimelineMax"], n) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? (r = require("gsap/dist/gsap") || require("gsap"), n(require("scrollmagic"), r, TweenMax || r, TimelineMax || r)) : n(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.gsap, e.gsap || e.TweenMax || e.TweenLite, e.gsap || e.TimelineMax || e.TimelineLite);
}(void 0, function (e, n, p, u) {
  "use strict";

  var g = n && 3 <= parseFloat(n.version);
  e.Scene.addOption("tweenChanges", !1, function (e) {
    return !!e;
  }), e.Scene.extend(function () {
    var o,
        i = this;
    i.on("progress.plugin_gsap", function () {
      s();
    }), i.on("destroy.plugin_gsap", function (e) {
      i.removeTween(e.reset);
    });

    var s = function s() {
      var e, n;
      o && (e = i.progress(), n = i.state(), o.repeat && -1 === o.repeat() ? "DURING" === n && o.paused() ? o.play() : "DURING" === n || o.paused() || o.pause() : e != o.progress() && (0 === i.duration() ? 0 < e ? o.play() : o.reverse() : i.tweenChanges() && o.tweenTo ? o.tweenTo(e * o.duration()) : o.progress(e).pause()));
    };

    i.setTween = function (e, n, r) {
      var t, a;
      1 < arguments.length && (a = "number" == typeof arguments[1], g ? (a || (r = n), r.hasOwnProperty("duration") || (r.duration = a ? n : 1)) : arguments.length < 3 && (r = n, n = 1), e = g ? p.to(e, r) : p.to(e, n, r));

      try {
        (t = u && !g ? new u({
          smoothChildTiming: !0
        }).add(e) : e).pause();
      } catch (e) {
        return i;
      }

      return o && i.removeTween(), o = t, e.repeat && -1 === e.repeat() && (o.repeat(-1), o.yoyo(e.yoyo())), s(), i;
    }, i.removeTween = function (e) {
      return o && (e && o.progress(0).pause(), o.kill(), o = void 0), i;
    };
  });
});
/*
插件：ScrollMagic页面滚动交互插件debug.addIndicators.min.js
版本：v2.0.8
官网：http://scrollmagic.io
*/

!function (e, r) {
  "function" == typeof define && define.amd ? define(["ScrollMagic"], r) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? r(require("scrollmagic")) : r(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic);
}(void 0, function (i) {
  "use strict";

  var o = "0.85em",
      n = "9999",
      v = i._util,
      h = 0;
  i.Scene.extend(function () {
    var t,
        i = this;
    i.addIndicators = function (e) {
      var r;
      return t || (r = {
        name: "",
        indent: 0,
        parent: void 0,
        colorStart: "green",
        colorEnd: "red",
        colorTrigger: "blue"
      }, e = v.extend({}, r, e), h++, t = new s(i, e), i.on("add.plugin_addIndicators", t.add), i.on("remove.plugin_addIndicators", t.remove), i.on("destroy.plugin_addIndicators", i.removeIndicators), i.controller() && t.add()), i;
    }, i.removeIndicators = function () {
      return t && (t.remove(), this.off("*.plugin_addIndicators"), t = void 0), i;
    };
  }), i.Controller.addOption("addIndicators", !1), i.Controller.extend(function () {
    var c = this,
        e = c.info(),
        l = e.container,
        f = e.isDocument,
        m = e.vertical,
        h = {
      groups: []
    };
    this._indicators = h;

    function r() {
      h.updateBoundsPositions();
    }

    function t() {
      h.updateTriggerGroupPositions();
    }

    return l.addEventListener("resize", t), f || (window.addEventListener("resize", t), window.addEventListener("scroll", t)), l.addEventListener("resize", r), l.addEventListener("scroll", r), this._indicators.updateBoundsPositions = function (e) {
      for (var r, t, i, o = e ? [v.extend({}, e.triggerGroup, {
        members: [e]
      })] : h.groups, n = o.length, s = {}, d = m ? "left" : "top", a = m ? "width" : "height", g = m ? v.get.scrollLeft(l) + v.get.width(l) - 15 : v.get.scrollTop(l) + v.get.height(l) - 15; n--;) {
        for (r = (i = o[n]).members.length, t = v.get[a](i.element.firstChild); r--;) {
          s[d] = g - t, v.css(i.members[r].bounds, s);
        }
      }
    }, this._indicators.updateTriggerGroupPositions = function (e) {
      for (var r, t, i, o, n = e ? [e] : h.groups, s = n.length, d = f ? document.body : l, a = f ? {
        top: 0,
        left: 0
      } : v.get.offset(d, !0), g = m ? v.get.width(l) - 15 : v.get.height(l) - 15, p = m ? "width" : "height", u = m ? "Y" : "X"; s--;) {
        t = (r = n[s]).element, i = r.triggerHook * c.info("size"), o = v.get[p](t.firstChild.firstChild) < i ? "translate" + u + "(-100%)" : "", v.css(t, {
          top: a.top + (m ? i : g - r.members[0].options.indent),
          left: a.left + (m ? g - r.members[0].options.indent : i)
        }), v.css(t.firstChild.firstChild, {
          "-ms-transform": o,
          "-webkit-transform": o,
          transform: o
        });
      }
    }, this._indicators.updateTriggerGroupLabel = function (e) {
      var r = "trigger" + (1 < e.members.length ? "" : " " + e.members[0].options.name),
          t = e.element.firstChild.firstChild;
      t.textContent !== r && (t.textContent = r, m && h.updateBoundsPositions());
    }, this.addScene = function (e) {
      this._options.addIndicators && e instanceof i.Scene && e.controller() === c && e.addIndicators(), this.$super.addScene.apply(this, arguments);
    }, this.destroy = function () {
      l.removeEventListener("resize", t), f || (window.removeEventListener("resize", t), window.removeEventListener("scroll", t)), l.removeEventListener("resize", r), l.removeEventListener("scroll", r), this.$super.destroy.apply(this, arguments);
    }, c;
  });

  var s = function s(o, n) {
    var s,
        d,
        a = this,
        t = b.bounds(),
        i = b.start(n.colorStart),
        g = b.end(n.colorEnd),
        p = n.parent && v.get.elements(n.parent)[0];
    n.name = n.name || h, i.firstChild.textContent += " " + n.name, g.textContent += " " + n.name, t.appendChild(i), t.appendChild(g), a.options = n, a.bounds = t, a.triggerGroup = void 0, this.add = function () {
      d = o.controller(), s = d.info("vertical");
      var e = d.info("isDocument");
      p = p || (e ? document.body : d.info("container")), e || "static" !== v.css(p, "position") || v.css(p, {
        position: "relative"
      }), o.on("change.plugin_addIndicators", u), o.on("shift.plugin_addIndicators", r), m(), l(), setTimeout(function () {
        d._indicators.updateBoundsPositions(a);
      }, 0);
    }, this.remove = function () {
      var e;
      a.triggerGroup && (o.off("change.plugin_addIndicators", u), o.off("shift.plugin_addIndicators", r), 1 < a.triggerGroup.members.length ? ((e = a.triggerGroup).members.splice(e.members.indexOf(a), 1), d._indicators.updateTriggerGroupLabel(e), d._indicators.updateTriggerGroupPositions(e), a.triggerGroup = void 0) : f(), c());
    };

    var r = function r() {
      l();
    },
        u = function u(e) {
      "triggerHook" === e.what && m();
    },
        c = function c() {
      t.parentNode.removeChild(t);
    },
        l = function l() {
      var e;
      t.parentNode !== p && (e = d.info("vertical"), v.css(i.firstChild, {
        "border-bottom-width": e ? 1 : 0,
        "border-right-width": e ? 0 : 1,
        bottom: e ? -1 : n.indent,
        right: e ? n.indent : -1,
        padding: e ? "0 8px" : "2px 4px"
      }), v.css(g, {
        "border-top-width": e ? 1 : 0,
        "border-left-width": e ? 0 : 1,
        top: e ? "100%" : "",
        right: e ? n.indent : "",
        bottom: e ? "" : n.indent,
        left: e ? "" : "100%",
        padding: e ? "0 8px" : "2px 4px"
      }), p.appendChild(t));
      var r = {};
      r[s ? "top" : "left"] = o.triggerPosition(), r[s ? "height" : "width"] = o.duration(), v.css(t, r), v.css(g, {
        display: 0 < o.duration() ? "" : "none"
      });
    },
        f = function f() {
      d._indicators.groups.splice(d._indicators.groups.indexOf(a.triggerGroup), 1), a.triggerGroup.element.parentNode.removeChild(a.triggerGroup.element), a.triggerGroup = void 0;
    },
        m = function m() {
      var e = o.triggerHook();

      if (!(a.triggerGroup && Math.abs(a.triggerGroup.triggerHook - e) < 1e-4)) {
        for (var r, t = d._indicators.groups, i = t.length; i--;) {
          if (r = t[i], Math.abs(r.triggerHook - e) < 1e-4) return a.triggerGroup && (1 === a.triggerGroup.members.length ? f() : (a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a), 1), d._indicators.updateTriggerGroupLabel(a.triggerGroup), d._indicators.updateTriggerGroupPositions(a.triggerGroup))), r.members.push(a), a.triggerGroup = r, void d._indicators.updateTriggerGroupLabel(r);
        }

        if (a.triggerGroup) {
          if (1 === a.triggerGroup.members.length) return a.triggerGroup.triggerHook = e, void d._indicators.updateTriggerGroupPositions(a.triggerGroup);
          a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a), 1), d._indicators.updateTriggerGroupLabel(a.triggerGroup), d._indicators.updateTriggerGroupPositions(a.triggerGroup), a.triggerGroup = void 0;
        }

        !function () {
          var e = b.trigger(n.colorTrigger),
              r = {};
          r[s ? "right" : "bottom"] = 0, r[s ? "border-top-width" : "border-left-width"] = 1, v.css(e.firstChild, r), v.css(e.firstChild.firstChild, {
            padding: s ? "0 8px 3px 8px" : "3px 4px"
          }), document.body.appendChild(e);
          var t = {
            triggerHook: o.triggerHook(),
            element: e,
            members: [a]
          };
          d._indicators.groups.push(t), a.triggerGroup = t, d._indicators.updateTriggerGroupLabel(t), d._indicators.updateTriggerGroupPositions(t);
        }();
      }
    };
  },
      b = {
    start: function start(e) {
      var r = document.createElement("div");
      r.textContent = "start", v.css(r, {
        position: "absolute",
        overflow: "visible",
        "border-width": 0,
        "border-style": "solid",
        color: e,
        "border-color": e
      });
      var t = document.createElement("div");
      return v.css(t, {
        position: "absolute",
        overflow: "visible",
        width: 0,
        height: 0
      }), t.appendChild(r), t;
    },
    end: function end(e) {
      var r = document.createElement("div");
      return r.textContent = "end", v.css(r, {
        position: "absolute",
        overflow: "visible",
        "border-width": 0,
        "border-style": "solid",
        color: e,
        "border-color": e
      }), r;
    },
    bounds: function bounds() {
      var e = document.createElement("div");
      return v.css(e, {
        position: "absolute",
        overflow: "visible",
        "white-space": "nowrap",
        "pointer-events": "none",
        "font-size": o
      }), e.style.zIndex = n, e;
    },
    trigger: function trigger(e) {
      var r = document.createElement("div");
      r.textContent = "trigger", v.css(r, {
        position: "relative"
      });
      var t = document.createElement("div");
      v.css(t, {
        position: "absolute",
        overflow: "visible",
        "border-width": 0,
        "border-style": "solid",
        color: e,
        "border-color": e
      }), t.appendChild(r);
      var i = document.createElement("div");
      return v.css(i, {
        position: "fixed",
        overflow: "visible",
        "white-space": "nowrap",
        "pointer-events": "none",
        "font-size": o
      }), i.style.zIndex = n, i.appendChild(t), i;
    }
  };
});
/*
插件：hScroll.js
版本：
官网：
*/

(function () {
  function hScroll(options) {
    var self = this; //$.extend(defaults, options);

    self = Object.assign(self, {
      nav1: '',
      //导航栏
      nav2: '',
      //需要监听的内容
      check: '' //选中样式

    }, options);
    self.init();
  }

  hScroll.prototype = {
    init: function init() {
      var self = this,
          arr = [],
          kdiv = $(self.nav2);

      for (var i = 0; i < kdiv.length; i++) {
        arr.push($(kdiv[i]).offset().top);
      }

      self.sctopFun(arr);
      $(window).scroll(function (e) {
        self.sctopFun(arr);
      });
      $(self.nav1).click(function (e) {
        $('body,html').animate({
          scrollTop: arr[$(this).index()] - 5 + 'px'
        });
      });
    },
    sctopFun: function sctopFun(arr) {
      var self = this;
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
      var keys = 0,
          flag = true;

      for (var i = 0; i < arr.length; i++) {
        keys++;

        if (flag) {
          if (scrollTop >= arr[arr.length - keys] - window.innerHeight / 2) {
            $(self.nav1).eq(arr.length - keys).addClass(self.check).siblings().removeClass(self.check);
            flag = false;
          } else {
            flag = true;
          }
        }
      }
    }
  };
  window.hScroll = hScroll;
})();