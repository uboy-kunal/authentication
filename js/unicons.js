!(function (t) {
    var r = {};
    function e(n) {
        if (r[n]) return r[n].exports;
        var o = (r[n] = { i: n, l: !1, exports: {} });
        return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }
    (e.m = t),
        (e.c = r),
        (e.d = function (t, r, n) {
            e.o(t, r) || Object.defineProperty(t, r, { enumerable: !0, get: n });
        }),
        (e.r = function (t) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (e.t = function (t, r) {
            if ((1 & r && (t = e(t)), 8 & r)) return t;
            if (4 & r && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
                (e.r(n),
                    Object.defineProperty(n, "default", { enumerable: !0, value: t }),
                    2 & r && "string" != typeof t)
            )
                for (var o in t)
                    e.d(
                        n,
                        o,
                        function (r) {
                            return t[r];
                        }.bind(null, o)
                    );
            return n;
        }),
        (e.n = function (t) {
            var r =
                t && t.__esModule
                    ? function () {
                        return t.default;
                    }
                    : function () {
                        return t;
                    };
            return e.d(r, "a", r), r;
        }),
        (e.o = function (t, r) {
            return Object.prototype.hasOwnProperty.call(t, r);
        }),
        (e.p = "script/monochrome/"),
        e((e.s = 0));
})([
    function (t, r, e) {
        e(1), (t.exports = e(2));
    },
    function (t, r, e) {
        var n = (function (t) {
            "use strict";
            var r,
                e = Object.prototype,
                n = e.hasOwnProperty,
                o = "function" == typeof Symbol ? Symbol : {},
                i = o.iterator || "@@iterator",
                a = o.asyncIterator || "@@asyncIterator",
                c = o.toStringTag || "@@toStringTag";
            function u(t, r, e, n) {
                var o = r && r.prototype instanceof m ? r : m,
                    i = Object.create(o.prototype),
                    a = new k(n || []);
                return (
                    (i._invoke = (function (t, r, e) {
                        var n = l;
                        return function (o, i) {
                            if (n === h) throw new Error("Generator is already running");
                            if (n === p) {
                                if ("throw" === o) throw i;
                                return G();
                            }
                            for (e.method = o, e.arg = i; ;) {
                                var a = e.delegate;
                                if (a) {
                                    var c = _(a, e);
                                    if (c) {
                                        if (c === y) continue;
                                        return c;
                                    }
                                }
                                if ("next" === e.method) e.sent = e._sent = e.arg;
                                else if ("throw" === e.method) {
                                    if (n === l) throw ((n = p), e.arg);
                                    e.dispatchException(e.arg);
                                } else "return" === e.method && e.abrupt("return", e.arg);
                                n = h;
                                var u = s(t, r, e);
                                if ("normal" === u.type) {
                                    if (((n = e.done ? p : f), u.arg === y)) continue;
                                    return { value: u.arg, done: e.done };
                                }
                                "throw" === u.type &&
                                    ((n = p), (e.method = "throw"), (e.arg = u.arg));
                            }
                        };
                    })(t, e, a)),
                    i
                );
            }
            function s(t, r, e) {
                try {
                    return { type: "normal", arg: t.call(r, e) };
                } catch (t) {
                    return { type: "throw", arg: t };
                }
            }
            t.wrap = u;
            var l = "suspendedStart",
                f = "suspendedYield",
                h = "executing",
                p = "completed",
                y = {};
            function m() { }
            function d() { }
            function v() { }
            var g = {};
            g[i] = function () {
                return this;
            };
            var w = Object.getPrototypeOf,
                x = w && w(w(P([])));
            x && x !== e && n.call(x, i) && (g = x);
            var b = (v.prototype = m.prototype = Object.create(g));
            function L(t) {
                ["next", "throw", "return"].forEach(function (r) {
                    t[r] = function (t) {
                        return this._invoke(r, t);
                    };
                });
            }
            function E(t) {
                var r;
                this._invoke = function (e, o) {
                    function i() {
                        return new Promise(function (r, i) {
                            !(function r(e, o, i, a) {
                                var c = s(t[e], t, o);
                                if ("throw" !== c.type) {
                                    var u = c.arg,
                                        l = u.value;
                                    return l && "object" == typeof l && n.call(l, "__await")
                                        ? Promise.resolve(l.__await).then(
                                            function (t) {
                                                r("next", t, i, a);
                                            },
                                            function (t) {
                                                r("throw", t, i, a);
                                            }
                                        )
                                        : Promise.resolve(l).then(
                                            function (t) {
                                                (u.value = t), i(u);
                                            },
                                            function (t) {
                                                return r("throw", t, i, a);
                                            }
                                        );
                                }
                                a(c.arg);
                            })(e, o, r, i);
                        });
                    }
                    return (r = r ? r.then(i, i) : i());
                };
            }
            function _(t, e) {
                var n = t.iterator[e.method];
                if (n === r) {
                    if (((e.delegate = null), "throw" === e.method)) {
                        if (
                            t.iterator.return &&
                            ((e.method = "return"),
                                (e.arg = r),
                                _(t, e),
                                "throw" === e.method)
                        )
                            return y;
                        (e.method = "throw"),
                            (e.arg = new TypeError(
                                "The iterator does not provide a 'throw' method"
                            ));
                    }
                    return y;
                }
                var o = s(n, t.iterator, e.arg);
                if ("throw" === o.type)
                    return (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), y;
                var i = o.arg;
                return i
                    ? i.done
                        ? ((e[t.resultName] = i.value),
                            (e.next = t.nextLoc),
                            "return" !== e.method && ((e.method = "next"), (e.arg = r)),
                            (e.delegate = null),
                            y)
                        : i
                    : ((e.method = "throw"),
                        (e.arg = new TypeError("iterator result is not an object")),
                        (e.delegate = null),
                        y);
            }
            function O(t) {
                var r = { tryLoc: t[0] };
                1 in t && (r.catchLoc = t[1]),
                    2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
                    this.tryEntries.push(r);
            }
            function j(t) {
                var r = t.completion || {};
                (r.type = "normal"), delete r.arg, (t.completion = r);
            }
            function k(t) {
                (this.tryEntries = [{ tryLoc: "root" }]),
                    t.forEach(O, this),
                    this.reset(!0);
            }
            function P(t) {
                if (t) {
                    var e = t[i];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function e() {
                                for (; ++o < t.length;)
                                    if (n.call(t, o)) return (e.value = t[o]), (e.done = !1), e;
                                return (e.value = r), (e.done = !0), e;
                            };
                        return (a.next = a);
                    }
                }
                return { next: G };
            }
            function G() {
                return { value: r, done: !0 };
            }
            return (
                (d.prototype = b.constructor = v),
                (v.constructor = d),
                (v[c] = d.displayName = "GeneratorFunction"),
                (t.isGeneratorFunction = function (t) {
                    var r = "function" == typeof t && t.constructor;
                    return (
                        !!r &&
                        (r === d || "GeneratorFunction" === (r.displayName || r.name))
                    );
                }),
                (t.mark = function (t) {
                    return (
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, v)
                            : ((t.__proto__ = v), c in t || (t[c] = "GeneratorFunction")),
                        (t.prototype = Object.create(b)),
                        t
                    );
                }),
                (t.awrap = function (t) {
                    return { __await: t };
                }),
                L(E.prototype),
                (E.prototype[a] = function () {
                    return this;
                }),
                (t.AsyncIterator = E),
                (t.async = function (r, e, n, o) {
                    var i = new E(u(r, e, n, o));
                    return t.isGeneratorFunction(e)
                        ? i
                        : i.next().then(function (t) {
                            return t.done ? t.value : i.next();
                        });
                }),
                L(b),
                (b[c] = "Generator"),
                (b[i] = function () {
                    return this;
                }),
                (b.toString = function () {
                    return "[object Generator]";
                }),
                (t.keys = function (t) {
                    var r = [];
                    for (var e in t) r.push(e);
                    return (
                        r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return (e.value = n), (e.done = !1), e;
                            }
                            return (e.done = !0), e;
                        }
                    );
                }),
                (t.values = P),
                (k.prototype = {
                    constructor: k,
                    reset: function (t) {
                        if (
                            ((this.prev = 0),
                                (this.next = 0),
                                (this.sent = this._sent = r),
                                (this.done = !1),
                                (this.delegate = null),
                                (this.method = "next"),
                                (this.arg = r),
                                this.tryEntries.forEach(j),
                                !t)
                        )
                            for (var e in this)
                                "t" === e.charAt(0) &&
                                    n.call(this, e) &&
                                    !isNaN(+e.slice(1)) &&
                                    (this[e] = r);
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;
                        function o(n, o) {
                            return (
                                (c.type = "throw"),
                                (c.arg = t),
                                (e.next = n),
                                o && ((e.method = "next"), (e.arg = r)),
                                !!o
                            );
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                c = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var u = n.call(a, "catchLoc"),
                                    s = n.call(a, "finallyLoc");
                                if (u && s) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                                } else if (u) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                } else {
                                    if (!s)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function (t, r) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var o = this.tryEntries[e];
                            if (
                                o.tryLoc <= this.prev &&
                                n.call(o, "finallyLoc") &&
                                this.prev < o.finallyLoc
                            ) {
                                var i = o;
                                break;
                            }
                        }
                        i &&
                            ("break" === t || "continue" === t) &&
                            i.tryLoc <= r &&
                            r <= i.finallyLoc &&
                            (i = null);
                        var a = i ? i.completion : {};
                        return (
                            (a.type = t),
                            (a.arg = r),
                            i
                                ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                                : this.complete(a)
                        );
                    },
                    complete: function (t, r) {
                        if ("throw" === t.type) throw t.arg;
                        return (
                            "break" === t.type || "continue" === t.type
                                ? (this.next = t.arg)
                                : "return" === t.type
                                    ? ((this.rval = this.arg = t.arg),
                                        (this.method = "return"),
                                        (this.next = "end"))
                                    : "normal" === t.type && r && (this.next = r),
                            y
                        );
                    },
                    finish: function (t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.finallyLoc === t)
                                return this.complete(e.completion, e.afterLoc), j(e), y;
                        }
                    },
                    catch: function (t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.tryLoc === t) {
                                var n = e.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    j(e);
                                }
                                return o;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (t, e, n) {
                        return (
                            (this.delegate = { iterator: P(t), resultName: e, nextLoc: n }),
                            "next" === this.method && (this.arg = r),
                            y
                        );
                    },
                }),
                t
            );
        })(t.exports);
        try {
            regeneratorRuntime = n;
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(n);
        }
    },
    function (t, r) {
        var e = "https://unicons.iconscout.com/release/".concat(
            "v2.0.1",
            "/svg/monochrome/"
        );
        (window.Unicons = window.Unicons || {}),
            (window.Unicons.DEBUG = window.Unicons.DEBUG || !1);
        var n = function (t) {
            t.forEach(function (t) {
                fetch("".concat(e).concat(t, ".svg"))
                    .then(function (t) {
                        return t.text();
                    })
                    .then(function (r) {
                        return (function (t, r) {
                            for (
                                var n = document.getElementsByClassName(
                                    "".concat("uim-").concat(t)
                                );
                                n.length > 0;

                            ) {
                                var o = n[0],
                                    i = document.createElement("span");
                                (i.innerHTML = r),
                                    i.classList.add("uim-svg"),
                                    i.firstChild.setAttribute("width", "1em"),
                                    (i.style.cssText = o.style.cssText),
                                    o.classList.contains("uim-white") &&
                                    ((i.style.mask = "url(".concat(e).concat(t, ".svg)")),
                                        (i.style.webkitMask = "url("
                                            .concat(e)
                                            .concat(t, ".svg)")),
                                        (i.style.background = "white")),
                                    o.replaceWith(i);
                            }
                        })(t, r);
                    });
            });
        },
            o = function () {
                var t = document.getElementsByClassName("uim"),
                    r = [];
                window.Unicons.DEBUG &&
                    console.log("Replacing ".concat(t.length, " icons"));
                for (var e = 0; e < t.length; e++) {
                    t[e].classList.forEach(function (t) {
                        if (t.indexOf("uim-") > -1) {
                            var e = t.toLocaleLowerCase().replace("uim-", "");
                            -1 === r.indexOf(e) && r.push(e);
                        }
                    });
                }
                n(r);
            };
        (window.onload = o), (window.Unicons.refresh = o);
        var i = document.createElement("style");
        (i.innerHTML =
            ":root {\n  --uim-primary-opacity: 1;\n  --uim-secondary-opacity: 0.70;\n  --uim-tertiary-opacity: 0.50;\n  --uim-quaternary-opacity: 0.25;\n  --uim-quinary-opacity: 0;\n}\n.uim-svg {\n  display: inline-block;\n  height: 1em;\n  vertical-align: -0.125em;\n  font-size: inherit;\n  fill: var(--uim-color, currentColor);\n}\n.uim-svg svg {\n  display: inline-block;\n}\n.uim-primary {\n  opacity: var(--uim-primary-opacity);\n}\n.uim-secondary {\n  opacity: var(--uim-secondary-opacity);\n}\n.uim-tertiary {\n  opacity: var(--uim-tertiary-opacity);\n}\n.uim-quaternary {\n  opacity: var(--uim-quaternary-opacity);\n}\n.uim-quinary {\n  opacity: var(--uim-quinary-opacity);\n}"),
            document.head.appendChild(i);
    },
]);
//# sourceMappingURL=bundle.js.map
