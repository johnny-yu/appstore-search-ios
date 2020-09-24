!
function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t),
        i.l = !0,
        i.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        })
    },
    t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    t.t = function(e, n) {
        var r, i;
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        if (r = Object.create(null), t.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (i in e) t.d(r, i,
        function(t) {
            return e[t]
        }.bind(null, i));
        return r
    },
    t.n = function(e) {
        var n = e && e.__esModule ?
        function() {
            return e.
        default
        }:
        function() {
            return e
        };
        return t.d(n, "a", n),
        n
    },
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    t.p = "",
    t(t.s = 10)
} ([function(e, t, n) {
    "use strict"; (function(e) {
        function r() {
            return 0 === p.nameStack.length ? ["<empty stack>"] : p.nameStack.slice(0)
        }
        function i(e) { (function(e) {
                return e && e.hasOwnProperty("$incidents")
            })(e) && (e.$incidents = p.incidents),
            p.incidents = [],
            p.nameStack = [],
            p.suppressedIncidentPaths = []
        }
        function o() {
            for (const t of Object.keys(e.services)) {
                const n = e.services[t];
                for (const e of Object.keys(n)) {
                    const t = n[e];
                    t instanceof Function && (n[e] = function(...e) {
                        const n = t.apply(this, e);
                        return n instanceof Promise ? n.then(e = >(i(e), e)) : (i(n), n)
                    })
                }
            }
        }
        function a(e, t, n) {
            let r = null;
            n && (r = e, p.suppressedIncidentPaths.push(n));
            let i = null;
            try { !
                function(e) {
                    p.nameStack.push(e)
                } (e),
                i = t()
            } catch(e) {
                throw e.hasThrown || (u("defaultValue", "no exception", e.message), e.hasThrown = !0),
                e
            } finally {
                e === r && p.suppressedIncidentPaths.pop(),
                0 === p.nameStack.length && console.warn("endContext() called without active validation context, ignoring"),
                p.nameStack.pop()
            }
            return i
        }
        function s(e, t, n) {
            let r = null;
            try {
                r = a(e, t)
            } catch(e) {
                r = null,
                n && (r = n(e))
            }
            return r
        }
        function l(e) { - 1 === p.suppressedIncidentPaths.indexOf(e.objectPath) && p.incidents.push(e)
        }
        function c(e, t, n) {
            l({
                type: "nullValue",
                expected: t,
                actual: "null",
                objectPath: n || "<this>",
                contextNames: r(),
                recoveryAction: e
            })
        }
        function u(e, t, n, i) {
            var o;
            l({
                type: "badType",
                expected: t,
                actual: `$ {
                    o = n,
                    Array.isArray(o) ? "array": null === o ? "null": typeof o
                } ($ {
                    n
                })`,
                objectPath: i || "<this>",
                contextNames: r(),
                recoveryAction: e
            })
        }
        n.d(t, "a", (function() {
            return o
        })),
        n.d(t, "c", (function() {
            return a
        })),
        n.d(t, "b", (function() {
            return s
        })),
        n.d(t, "d", (function() {
            return c
        })),
        n.d(t, "e", (function() {
            return u
        }));
        const p = {
            nameStack: [],
            incidents: [],
            suppressedIncidentPaths: []
        }
    }).call(this, n(9))
},
,
function(e, t, n) {
    e.exports = n(4),
    e.exports.hbsHelper = n(7)
},
,
function(e, t, n) {
    e.exports.its = {},
    n(5)(e.exports),
    n(6)(e.exports)
},
function(e, t) {
    e.exports = function(e) {
        var t = e.its;
        t.isDefined = function(e) {
            return void 0 !== e
        },
        void 0 === t.string && (t.string = {}),
        t.string.replace = function(e, t, n) {
            return e ? ("string" != typeof e && (e += ""), e.split(t).join(n)) : e
        }
    }
},
function(e, t) {
    e.exports = function(e) {
        var t = e.its,
        n = e.iTSLocalization = {};
        n._strings = {},
        n.hasLocalizedValue = function(e) {
            var r = n._strings[e];
            return t.isDefined(r)
        },
        n.isLocalized = function(e) {
            var r = n._strings[e];
            return ! (!t.isDefined(r) || -1 !== e.indexOf(".") && (r === e || 0 === r.indexOf("**") && r.lastIndexOf("**") === r.length - 2) && (console.error("unlocalized key in keys dictionary", e), 1))
        },
        t.loc = function(e, t) {
            var r = n._strings[e];
            return void 0 === r && (r = e),
            t && (r = n.replaceTokens(r, t)),
            "undefined" == typeof itms && (r = n.replaceMarkupTokens(r, t)),
            r
        },
        t.locDate = function(e) {
            var t, n, r, i, o;
            return e ? ((t = e.length) > 10 ? n = new Date(e) : (r = t >= 4 ? e.slice(0, 4) : 0, i = t >= 7 ? e.slice(5, 7) : 1, o = t >= 10 ? e.slice(8, 10) : 1, n = new Date(r, i - 1, o)), formatDate(n)) : ""
        },
        t.locWithMarkupTokens = function(e, r) {
            return n.replaceMarkupTokens(t.loc(e, r), r)
        },
        n._strings._showLocKeys && (t.loc = function(e) {
            return "+" + e + "+"
        }),
        t.locWithCount = function(e, r, i) {
            var o, a, s = null;
            return 0 == r && (o = e + ".zero", n.isLocalized(o) && (s = o)),
            null === s && (s = e, "other" !== (a = n.pluralCategory(r)) && (o = e + "." + a, n.isLocalized(o) && (s = o))),
            i || (i = {}),
            t.isDefined(i.count) || (i.count = t.formatNumber(r)),
            t.isDefined(i.number) || (i.number = t.formatNumber(r)),
            t.loc(s, i)
        },
        n.replaceTokens = function(e, n) {
            var r, i;
            if (n) for (r in n) n.hasOwnProperty(r) && (i = "@@" + r + "@@", e = t.string.replace(e, i, n[r]));
            return e
        },
        n.markupParams = {
            nbsp: "&nbsp;",
            gt: "&gt;",
            lt: "&lt;",
            copy: "?"
        },
        n.replaceMarkupTokens = function(e, t) {
            var r, i, o;
            if (e.indexOf("##") > -1) {
                if (t) for (r in t) n.markupParams[r.toString()] = t[r];
                for (i in n.markupParams) o = "##" + i + "##",
                e = e.replace(new RegExp(o, "gi"), n.markupParams[i]);
                e = e.replace(/##([^##]+)##/gi, "<$1>")
            }
            return e
        },
        n.localizedResourceUrlForPathKey = function(e, n) {
            return void 0 === n && (n = /https:/.test(window.location.protocol)),
            (n ? "https://s.mzstatic.com": "http://r.mzstatic.com") + t.loc(e)
        },
        "undefined" != typeof itms && "undefined" != typeof formatNumber ? t.formatNumber = function(e) {
            return formatNumber(Number(e))
        }: t.formatNumber = function(e) {
            var t, r, i, o, a;
            for (void 0 === n.decimalSeparator && (void 0 === (t = n._strings._decimalSeparator) && (t = "."), n.decimalSeparator = t, void 0 === (t = n._strings._thousandsSeparator) && (t = ","), n.thousandsSeparator = t), r = parseFloat(e).toString().split("."), i = n.thousandsSeparator, a = (o = r[0].split("")).length - 3; a > 0; a -= 3) o.splice(a, 0, i);
            return r[0] = o.join(""),
            r.join(n.decimalSeparator)
        },
        n._pluralCategoryDefault = function(e) {
            return "other"
        },
        n._pluralCategoryOne = function(e) {
            return 1 == e ? "one": "other"
        },
        n._pluralCategoryArabic = function(e) {
            var t, n = e >> 0;
            return n != e ? "other": 0 === n ? "zero": 1 === n ? "one": 2 === n ? "two": (t = n % 100) >= 11 ? "many": t >= 3 ? "few": "other"
        },
        n._pluralCategoryFrench = function(e) {
            return e < 2 && e >= 0 ? "one": "other"
        },
        n._pluralCategoryHebrew = function(e) {
            var t = e >> 0;
            return t != e ? "other": 1 === t ? "one": 2 === t ? "two": 0 == t % 10 && t > 10 ? "many": "other"
        },
        n._pluralCategoryPolish = function(e) {
            var t, n, r = e >> 0;
            return r != e ? "other": 1 === r ? "one": (t = r % 10) <= 4 && t >= 2 && ((n = r % 100) > 14 || n < 12) ? "few": "many"
        },
        n._pluralCategoryRomanian = function(e) {
            var t, n = e >> 0;
            return n != e ? "few": 0 === n ? "few": 1 === n ? "one": (t = e % 100) <= 19 && t >= 1 ? "few": "other"
        },
        n._pluralCategoryRussian = function(e) {
            var t, n, r = e >> 0;
            return r != e ? "other": (t = r % 10) >= 5 || 0 == t ? "many": (n = r % 100) <= 14 && n >= 11 ? "many": 1 == t ? "one": "few"
        },
        n._pluralCategoryFnByLanguage = {
            zh: n._pluralCategoryDefault,
            id: n._pluralCategoryDefault,
            ja: n._pluralCategoryDefault,
            ko: n._pluralCategoryDefault,
            ms: n._pluralCategoryDefault,
            th: n._pluralCategoryDefault,
            vi: n._pluralCategoryDefault,
            en: n._pluralCategoryOne,
            ca: n._pluralCategoryOne,
            da: n._pluralCategoryOne,
            nl: n._pluralCategoryOne,
            de: n._pluralCategoryOne,
            el: n._pluralCategoryOne,
            fi: n._pluralCategoryOne,
            hu: n._pluralCategoryOne,
            it: n._pluralCategoryOne,
            nb: n._pluralCategoryOne,
            no: n._pluralCategoryOne,
            pt: n._pluralCategoryOne,
            es: n._pluralCategoryOne,
            sv: n._pluralCategoryOne,
            tr: n._pluralCategoryOne,
            ar: n._pluralCategoryArabic,
            fr: n._pluralCategoryFrench,
            iw: n._pluralCategoryHebrew,
            pl: n._pluralCategoryPolish,
            ro: n._pluralCategoryRomanian,
            ru: n._pluralCategoryRussian
        },
        n.pluralCategory = function(e) {
            var r, i, o;
            return t.serverData && t.serverData.constants ? r = t.serverData.constants.languageCode: "undefined" != typeof itms && itms.getBag && (r = (r = (i = itms.getBag()) && i.language || "en").slice(0, 2)),
            (o = n._pluralCategoryFnByLanguage[r]) ? o(e) : (console.warn("missing plural category function for: " + r), "other")
        },
        t.updateLocale = function(e) {
            n._strings = e
        }
    }
},
function(e, t, n) {
    e.exports = function(e, t) {
        return n(8).its.loc(e, t)
    },
    "undefined" != typeof Handlebars && Handlebars.registerHelper("loc", helper)
},
function(e, t) {
    window.iTSLocalization || (iTSLocalization = {}),
    window.iTSLocalization._strings || (iTSLocalization._strings = {}),
    iTSLocalization.hasLocalizedValue = function(e) {
        var t = iTSLocalization._strings[e];
        return its.isDefined(t)
    },
    its.loc = function(e, t) {
        var n = iTSLocalization._strings[e];
        return void 0 === n && (n = e),
        t && (n = iTSLocalization.replaceTokens(n, t)),
        "undefined" == typeof itms && (n = iTSLocalization.replaceMarkupTokens(n, t)),
        n
    },
    its.locDate = function(e) {
        var t, n, r, i, o;
        return e ? ((t = e.length) > 10 ? n = new Date(e) : (r = t >= 4 ? e.slice(0, 4) : 0, i = t >= 7 ? e.slice(5, 7) : 1, o = t >= 10 ? e.slice(8, 10) : 1, n = new Date(r, i - 1, o)), formatDate(n)) : ""
    },
    its.locWithMarkupTokens = function(e, t) {
        return iTSLocalization.replaceMarkupTokens(its.loc(e, t), t)
    },
    iTSLocalization._strings._showLocKeys && (its.loc = function(e) {
        return "+" + e + "+"
    }),
    its.locWithCount = function(e, t, n) {
        var r, i, o = null;
        return 0 == t && (r = e + ".zero", iTSLocalization.hasLocalizedValue(r) && (o = r)),
        null === o && (o = e, "other" !== (i = iTSLocalization.pluralCategory(t)) && (r = e + "." + i, iTSLocalization.hasLocalizedValue(r) && (o = r))),
        n || (n = {}),
        its.isDefined(n.count) || (n.count = its.formatNumber(t)),
        its.loc(o, n)
    },
    iTSLocalization.replaceTokens = function(e, t) {
        var n, r;
        if (t) for (n in t) t.hasOwnProperty(n) && (r = "@@" + n + "@@", e = its.string.replace(e, r, t[n]));
        return e
    },
    iTSLocalization.markupParams = {
        nbsp: "&nbsp;",
        gt: "&gt;",
        lt: "&lt;",
        copy: "?"
    },
    iTSLocalization.replaceMarkupTokens = function(e, t) {
        var n, r, i;
        if (e.indexOf("##") > -1) {
            if (t) for (n in t) iTSLocalization.markupParams[n.toString()] = t[n];
            for (r in iTSLocalization.markupParams) i = "##" + r + "##",
            e = e.replace(new RegExp(i, "gi"), iTSLocalization.markupParams[r]);
            e = e.replace(/##([^##]+)##/gi, "<$1>")
        }
        return e
    },
    iTSLocalization.localizedResourceUrlForPathKey = function(e, t) {
        return void 0 === t && (t = /https:/.test(window.location.protocol)),
        (t ? "https://s.mzstatic.com": "http://r.mzstatic.com") + its.loc(e)
    },
    "undefined" != typeof itms && "undefined" != typeof formatNumber ? its.formatNumber = function(e) {
        return formatNumber(Number(e))
    }: its.formatNumber = function(e) {
        var t, n, r, i, o;
        for (void 0 === iTSLocalization.decimalSeparator && (void 0 === (t = iTSLocalization._strings._decimalSeparator) && (t = "."), iTSLocalization.decimalSeparator = t, void 0 === (t = iTSLocalization._strings._thousandsSeparator) && (t = ","), iTSLocalization.thousandsSeparator = t), n = parseFloat(e).toString().split("."), r = iTSLocalization.thousandsSeparator, o = (i = n[0].split("")).length - 3; o > 0; o -= 3) i.splice(o, 0, r);
        return n[0] = i.join(""),
        n.join(iTSLocalization.decimalSeparator)
    },
    iTSLocalization._pluralCategoryDefault = function(e) {
        return "other"
    },
    iTSLocalization._pluralCategoryOne = function(e) {
        return 1 == e ? "one": "other"
    },
    iTSLocalization._pluralCategoryArabic = function(e) {
        var t, n = e >> 0;
        return n != e ? "other": 0 === n ? "zero": 1 === n ? "one": 2 === n ? "two": (t = n % 100) >= 11 ? "many": t >= 3 ? "few": "other"
    },
    iTSLocalization._pluralCategoryFrench = function(e) {
        return e < 2 && e >= 0 ? "one": "other"
    },
    iTSLocalization._pluralCategoryHebrew = function(e) {
        var t = e >> 0;
        return t != e ? "other": 1 === t ? "one": 2 === t ? "two": 0 == t % 10 && t > 10 ? "many": "other"
    },
    iTSLocalization._pluralCategoryPolish = function(e) {
        var t, n, r = e >> 0;
        return r != e ? "other": 1 === r ? "one": (t = r % 10) <= 4 && t >= 2 && ((n = r % 100) > 14 || n < 12) ? "few": "many"
    },
    iTSLocalization._pluralCategoryRomanian = function(e) {
        var t, n = e >> 0;
        return n != e ? "few": 0 === n ? "few": 1 === n ? "one": (t = e % 100) <= 19 && t >= 1 ? "few": "other"
    },
    iTSLocalization._pluralCategoryRussian = function(e) {
        var t, n, r = e >> 0;
        return r != e ? "other": (t = r % 10) >= 5 || 0 == t ? "many": (n = r % 100) <= 14 && n >= 11 ? "many": 1 == t ? "one": "few"
    },
    iTSLocalization._pluralCategoryFnByLanguage = {
        zh: iTSLocalization._pluralCategoryDefault,
        id: iTSLocalization._pluralCategoryDefault,
        ja: iTSLocalization._pluralCategoryDefault,
        ko: iTSLocalization._pluralCategoryDefault,
        ms: iTSLocalization._pluralCategoryDefault,
        th: iTSLocalization._pluralCategoryDefault,
        vi: iTSLocalization._pluralCategoryDefault,
        en: iTSLocalization._pluralCategoryOne,
        ca: iTSLocalization._pluralCategoryOne,
        da: iTSLocalization._pluralCategoryOne,
        nl: iTSLocalization._pluralCategoryOne,
        de: iTSLocalization._pluralCategoryOne,
        el: iTSLocalization._pluralCategoryOne,
        fi: iTSLocalization._pluralCategoryOne,
        hu: iTSLocalization._pluralCategoryOne,
        it: iTSLocalization._pluralCategoryOne,
        nb: iTSLocalization._pluralCategoryOne,
        no: iTSLocalization._pluralCategoryOne,
        pt: iTSLocalization._pluralCategoryOne,
        es: iTSLocalization._pluralCategoryOne,
        sv: iTSLocalization._pluralCategoryOne,
        tr: iTSLocalization._pluralCategoryOne,
        ar: iTSLocalization._pluralCategoryArabic,
        fr: iTSLocalization._pluralCategoryFrench,
        iw: iTSLocalization._pluralCategoryHebrew,
        pl: iTSLocalization._pluralCategoryPolish,
        ro: iTSLocalization._pluralCategoryRomanian,
        ru: iTSLocalization._pluralCategoryRussian
    },
    iTSLocalization.pluralCategory = function(e) {
        var t;
        if (its.serverData && its.serverData.constants) {
            if (t = iTSLocalization._pluralCategoryFnByLanguage[its.serverData.constants.languageCode]) return t(e);
            its.Logger && its.Logger.named("its-base-util").error("missing plural category function for: " + its.serverData.constants.languageCode, !0)
        }
        return "other"
    }
},
function(e, t) {
    var n;
    n = function() {
        return this
    } ();
    try {
        n = n || new Function("return this")()
    } catch(e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return o(e) ? null: Array.isArray(e) ? e.join(".") : e
    }
    function i(e, t, n) {
        if (null == e) return n;
        if (!t) return e;
        let r;
        if ("string" == typeof t) {
            if (r = _s[t], !r) {
                if (!t.includes(".")) {
                    const r = e[t];
                    return null != r ? r: n
                }
                r = t.split("."),
                _s[t] = r
            }
        } else r = t;
        let i = e;
        for (const e of r) if (i = i[e], null == i) return n;
        return i
    }
    function o(e) {
        return null == e
    }
    function a(e) {
        return o(e) || 0 === Object.keys(e).length
    }
    function s(e) {
        return null != e
    }
    function l(e) {
        return s(e) && 0 !== Object.keys(e).length
    }
    function c(e) {
        if (o(e)) return ! 1;
        let t;
        return t = "string" == typeof e ? parseInt(e) : e,
        !Number.isNaN(t)
    }
    function u(e, t) {
        const n = i(e, t, null);
        return Array.isArray(n) ? n: (o(n) || As.c("asArrayOrEmpty", () = >{
            As.e("defaultValue", "array", n, r(t))
        }), [])
    }
    function p(e, t) {
        const n = i(e, t, null);
        return "boolean" == typeof n ? n: (o(n) || As.c("asBooleanOrFalse", () = >{
            As.e("defaultValue", "boolean", n, r(t))
        }), !1)
    }
    function d(e, t, n = "coercible") {
        const a = i(e, t, null);
        if (o(a) || "string" == typeof a) return a; {
            const e = "object" == typeof a ? null: String(a);
            switch (n) {
            case "strict":
                As.c("asString", () = >{
                    As.e("coercedValue", "string", a, r(t))
                });
                break;
            case "coercible":
                o(e) && As.c("asString", () = >{
                    As.e("coercedValue", "string", a, r(t))
                })
            }
            return e
        }
    }
    function f(e, t, n = "coercible") {
        const a = i(e, t, null);
        if (o(a) || "number" == typeof a) return a; {
            const e = Number(a);
            switch (n) {
            case "strict":
                As.c("asNumber", () = >{
                    As.e("coercedValue", "number", a, r(t))
                });
                break;
            case "coercible":
                if (isNaN(e)) return As.c("asNumber", () = >{
                    As.e("coercedValue", "number", a, r(t))
                }),
                null
            }
            return e
        }
    }
    function h(e, t, n) {
        const a = i(e, t, null);
        return a instanceof Object && !Array.isArray(a) ? a: (o(a) || As.c("asDictionary", () = >{
            As.e("defaultValue", "object", a, r(t))
        }), s(n) ? n: null)
    }
    function m(e, t, n) {
        return h(e, t, n)
    }
    function g(e, t, n = "coercible") {
        const a = i(e, t, null);
        if (o(a)) return null;
        if ("boolean" == typeof a) return a;
        if ("string" == typeof a) {
            if ("true" === a) return ! 0;
            if ("false" === a) return ! 1
        }
        const s = Boolean(a);
        switch (n) {
        case "strict":
            As.c("asBoolean", () = >{
                As.e("coercedValue", "number", a, r(t))
            });
            break;
        case "coercible":
            if (o(s)) return As.c("asBoolean", () = >{
                As.e("coercedValue", "number", a, r(t))
            }),
            null
        }
        return s
    }
    function y(e) {
        const t = i(Rs, e);
        return void 0 !== t ? Boolean(t) : "undefined" != typeof ask && Boolean(Rs.clientFeatures[e])
    }
    function w(e) {
        return h(Rs, e)
    }
    function T(e) {
        return d(Rs, e)
    }
    function A(e) {
        return Qs.deviceHasCapabilities(e)
    }
    function I(e, t, n) {
        return !! Qs.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion && Qs.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(e, t, n)
    }
    function b(e) {
        return ! Qs.isPairedSystemVersionAtLeast || Qs.isPairedSystemVersionAtLeast(e)
    }
    function S(e) {
        if (!k() || !Qs.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion) return ! 1;
        const t = e.split(".");
        return ! I(f(t[0]) || 0, f(t[1]) || 0, f(t[2]) || 0)
    }
    function k() {
        return "watch" !== il && void 0 !== gl
    }
    function P(e, t) {
        let n = Sl[e];
        if (!n) if (n = Tl.string(e), n && n !== e) Sl[e] = n;
        else {
            const r = Ts.its.loc(e);
            n = r !== e ? r: t || e
        }
        return n
    }
    function C(e, t, n) {
        let r = Tl.stringWithCount(e, t);
        if (!r || r === e) {
            const i = Ts.its.locWithCount(e, t, n);
            i && (r = i)
        }
        return r
    }
    function v(e, t, n) {
        return Tl.stringWithCounts ? Tl.stringWithCounts(e, t) : null
    }
    function E(e, t) {
        let n = Tl.decimal(e, t);
        return n || (n = "number" == typeof e ? ` * $ {
            e.toString()
        } * `: "* null *"),
        n
    }
    function O(e) {
        let t = Tl.fileSize(e);
        return t || (t = "* null *"),
        t
    }
    function _(e) {
        let t = Tl.formattedCount ? Tl.formattedCount(e) : null;
        return t || (t = "* null *"),
        t
    }
    function R(e) {
        let t = Tl.timeAgo(e);
        return t || (t = "* null *"),
        t
    }
    function D(e, t) {
        let n = Tl.formatDate(e, t);
        return n || (n = "* null *"),
        n
    }
    function L(e, t, n) {
        let r = Tl.formatDateInSentence(e, t, n);
        return r || (r = "* null *"),
        r
    }
    function F(e, t) {
        x(e) || (yl = e, Ts.its.updateLocale(t))
    }
    function x(e) {
        return yl === e
    }
    function N(e) {
        return function() {
            if (wl) return console.log("Same Promise"),
            wl;
            if (void 0 === Is.language || null === Is.language) return Promise.reject(new Error("Bag language is not available. Unable to load localizations.")); {
                const e = function(e, t) {
                    if (null == e) return null;
                    switch (e = e.toLocaleLowerCase()) {
                    case "yue-hant":
                        {
                            const e = T("macauStorefrontIdentifier");
                            return "string" == typeof t && -1 !== t.indexOf(e) ? "zh-ma": "zh-hk"
                        }
                    default:
                        return e
                    }
                } (Is.language, cl),
                t = `local / $ {
                    e
                }`;
                if (!x(t)) {
                    const n = w(`localizations.$ {
                        e
                    }`);
                    if (null != n) F(t, n);
                    else {
                        const e = w("localizations.en-us");
                        null != e && F(t, e)
                    }
                }
                return new Promise((e, t) = >{
                    e()
                })
            }
        } ().then(t = >e())
    }
    function U(e, t, n) {
        const r = e.indexOf(t);
        let i,
        o = e;
        if ( - 1 !== r) {
            const a = e.slice(0, r),
            s = e.slice(r + t.length, e.length);
            "prefix" === n ? (i = a, o = s) : (i = s, o = a)
        }
        return {
            result: i,
            remainder: o
        }
    }
    function M(e) {
        const t = l(e.href) ? e.href: function(e) {
            switch (e) {
            case "personalization-data":
            case "reviews":
                return` / v1 / $ {
                    B(e)
                }
                /`;default:return`/v1 / $ {
                    B(e)
                }
                /${Is.mediaCountryCode}/`
            }
        } (e.resourceType),
        n = new Fl(t);
        if (l(e.resourceType)) for (const t of
        function(e) {
            switch (e.resourceType) {
            case "eula":
                return [e.resourceType, e.targetResourceType];
            case "landing":
                return ["search", e.resourceType, e.targetResourceType];
            case "user-reviews":
                return ["apps"];
            case "reviews":
                return ["reviews", "apps"];
            case "multiplex":
                return ["multiplex"];
            case "upsell":
                return [e.resourceType, "editorial-items"];
            case "upsellMarketingItem":
                return ["upsell", "marketing-items"];
            case "trending-contents":
                return ["search", e.resourceType];
            default:
                return [e.resourceType]
            }
        } (e)) n.append("pathname", t);
        if (e.ids.size > 1) n.param("ids", Array.from(e.ids).join(","));
        else if (1 === e.ids.size) {
            const t = e.ids.values().next().value;
            n.append("pathname", t)
        }
        const r = function(e) {
            switch (e) {
            case "user-reviews":
                return "reviews";
            default:
                return null
            }
        } (e.resourceType);
        if (l(r) && n.append("pathname", r), n.param("platform", e.platform), e.additionalPlatforms.size > 0 && n.param("additionalPlatforms", Array.from(e.additionalPlatforms).sort().join(",")), e.attributeIncludes.size > 0 && n.param("extend", Array.from(e.attributeIncludes).sort().join(",")), e.relationshipIncludes.size > 0 && n.param("include", Array.from(e.relationshipIncludes).sort().join(",")), s(e.scopedRelationshipIncludes)) for (const t of e.scopedRelationshipIncludes.keys()) {
            const r = e.scopedRelationshipIncludes.get(t);
            n.param(`include[$ {
                t
            }]`, Array.from(r).sort().join(","))
        }
        if (s(e.metaIncludes)) for (const t of e.metaIncludes.keys()) {
            const r = e.metaIncludes.get(t);
            n.param(`meta[$ {
                t
            }]`, Array.from(r).sort().join(","))
        }
        l(e.fields) && (e.fields.sort(), n.param("fields", e.fields.join(","))),
        s(e.limit) && e.limit > 0 && n.param("limit", `$ {
            e.limit
        }`);
        for (const t of Object.keys(e.relationshipLimits).sort()) {
            const r = e.relationshipLimits[t];
            n.param(`limit[$ {
                t
            }]`, `$ {
                r
            }`)
        }
        l(e.additionalQuery) && n.append("query", e.additionalQuery),
        l(e.searchTerm) && (n.append("pathname", "search"), n.param("bubble[search]", e.searchTypes.join(",")), n.param("term", e.searchTerm)),
        l(e.context) && n.param("contexts", e.context),
        l(e.filterType) && l(e.filterValue) && n.param(`filter[$ {
            e.filterType
        }]`, e.filterValue);
        const i = Is.mediaApiLanguage;
        return o(i) || n.param("l", i),
        n.host = function(e, t) {
            const n = e.pathname;
            let r = null;
            return r = t.isStorePreviewRequest ? Is.mediaPreviewHost: n.includes("search/landing") ? -1 !== Is.edgeEndpoints.indexOf("landing") ? Is.mediaEdgeHost: Is.mediaHost: Is.edgeEndpoints.map(e = >n.includes(e)).reduce(xl, !1) ? n.includes("search") ? Is.mediaEdgeSearchHost: Is.mediaEdgeHost: Is.mediaHost,
            o(r) && (r = "api.apps.apple.com"),
            r
        } (n, e),
        n.protocol = "https",
        n
    }
    function B(e) {
        switch (e) {
        case "apps":
        case "arcade-apps":
        case "app-bundles":
        case "charts":
        case "contents":
        case "developers":
        case "eula":
        case "in-apps":
        case "multiple-system-operators":
        case "user-reviews":
            return "catalog";
        case "categories":
        case "editorial-items":
        case "editorial-elements":
        case "groupings":
        case "multiplex":
        case "multirooms":
        case "rooms":
        case "today":
            return "editorial";
        case "ratings":
            return "ratings";
        case "personalization-data":
        case "reviews":
            return "me";
        case "upsell":
        case "upsellMarketingItem":
        case "landing":
            return "engagement";
        default:
            return "catalog"
        }
    }
    function $(e, t) {
        const n = M(e).toString();
        return mediaToken.refreshToken().then(e = >(function e(t, n, r = {},
        i = !1) {
            const o = new Fl(t),
            a = V(o);
            for (const e of a) o.removeParam(e);
            let c = r.headers;
            return c || (c = {}),
            c.Authorization = "Bearer " + n,
            net.fetch({
                url: t,
                headers: c,
                method: r.method,
                body: r.requestBodyString,
                timeout: r.timeout
            }).then(n = >{
                try {
                    if (401 === n.status || 403 === n.status) {
                        if (i) throw Error("We refreshed the token but we still get 401 from the API");
                        return mediaToken.resetToken(),
                        mediaToken.refreshToken().then(n = >e(t, n, r, !0))
                    }
                    if (404 === n.status) q();
                    else if (!n.ok) {
                        const e = new Nl(`Bad Status code $ {
                            n.status
                        }
                        for $ {
                            t
                        }`);
                        throw e.statusCode = n.status,
                        e
                    }
                    const o = Date.now(),
                    a = JSON.parse(n.body),
                    c = Date.now();
                    if (a) {
                        if (a[bs.pageInformation] = function(e) {
                            const t = cl;
                            let n = null;
                            if (l(t)) {
                                const e = t.split("-");
                                l(e) && (n = e[0])
                            }
                            return {
                                serverInstance: e.headers[Ul],
                                storeFrontHeader: t,
                                language: Is.language,
                                storeFront: n,
                                environmentDataCenter: e.headers[Ml]
                            }
                        } (n), n.metrics.length > 0) {
                            const e = n.metrics[0];
                            e.parseStartTime = o,
                            e.parseEndTime = c,
                            a[bs.timingValues] = e
                        } else {
                            const e = {
                                pageURL: n.url,
                                parseStartTime: o,
                                parseEndTime: c
                            };
                            a[bs.timingValues] = e
                        }
                        Array.isArray(a.data) &&
                        function(e) {
                            return s(e) && 0 === e.length
                        } (a.data) && q()
                    }
                    return a[bs.requestedUrl] = t,
                    a
                } catch(e) {
                    if (e instanceof Nl) throw e;
                    throw new Error(`Error Fetching: $ {
                        t
                    },
                    $ {
                        e.name
                    },
                    $ {
                        e.message
                    }`)
                }
            })
        })(n, e, t)).then(t = >(e.canonicalUrl && (t[bs.requestedUrl] = e.canonicalUrl), t))
    }
    function V(e) {
        return Is.redirectUrlWhitelistedQueryParams.filter(t = >s(e.query[t]))
    }
    function q() {
        const e = new Nl("No content");
        throw e.statusCode = 204,
        e
    }
    function G(e, t, n = !0) {
        const r = H(e, t);
        return !! r && !(!r.data || n && 0 === r.data.length)
    }
    function H(e, t) {
        return m(e.relationships, t)
    }
    function j(e, t) {
        const n = u(e.relationships, [t, "data"]);
        return 0 === n.length ? null: (n.length > 1 && (console.warn(`there was an array of relationships when only the first was asked
        for in relationship $ {
            t
        }`), console.log(JSON.stringify(e))), n[0])
    }
    function W(e, t) {
        return u(e.relationships, [t, "data"])
    }
    function z(e) {
        if (!e) return null;
        const t = Bl.exec(e);
        return null === t || 4 !== t.length ? null: {
            red: parseInt(t[1], 16) / 255,
            green: parseInt(t[2], 16) / 255,
            blue: parseInt(t[3], 16) / 255,
            type: "rgb"
        }
    }
    function Y(e, t = 84) {
        switch (e.type) {
        case "rgb":
            return 100 * (.2126 * (n = e).red + .7152 * n.green + .0722 * n.blue) < t;
        case "named":
            return function(e) {
                switch (e.name) {
                case "black":
                    return ! 0;
                default:
                    return ! 1
                }
            } (e);
        default:
            return ! 1
        }
        var n
    }
    function K(e) {
        return {
            name: e,
            type: "named"
        }
    }
    function Q(e, t) {
        return {
            lightColor: e,
            darkColor: t,
            type: "dynamic"
        }
    }
    function J(e, t, n) {
        return e ? As.c(t, () = >{
            let r = e[$l],
            o = null;
            return r ? (o = i(r, t), o || (o = X(r, t, n))) : (r = {},
            e[$l] = r, o = X(r, t, n)),
            o
        }) : null
    }
    function X(e, t, n) {
        const r = n();
        return e[t] = r,
        r
    }
    function Z(e) {
        return s(Vl.cookieForUrlWithName) ?
        function(e, t) {
            return As.c("currentExperimentGroup", () = >{
                if (!t || !t.value || 0 === t.value.length) return null;
                const n = t.value.replace(/^\d+#/, "").split("#").map(e = >e.replace(/^(.*\+)/, "")).filter(t = >{
                    const n = t.slice(0, -1);
                    return e.identifer === n
                });
                if (0 === n.length) return null;
                n.length > 1 && As.e("ignoredValue", "string", n, `$ {
                    t.name
                }
                cookie`);
                const r = n[0].match(/\d$/);
                if (null === r || 0 === r.length) return As.e("ignoredValue", e.treatments.join("|"), r[0], `$ {
                    t.name
                }
                cookie, $ {
                    n
                },
                treatment id`),
                null;
                const i = Number(r[0]),
                o = e.treatments.find(e = >e === i) || null;
                return o || As.e("ignoredValue", e.treatments.join("|"), i, `$ {
                    t.name
                }
                cookie, $ {
                    n
                },
                treatment id`),
                o
            })
        } (e, Vl.cookieForUrlWithName("https://apple.com", "xp_ab")) : null
    }
    function ee(e, t, n) {
        return o(e) ? null: h(e.attributes, t, n)
    }
    function te(e, t) {
        return o(e) ? [] : u(e.attributes, t)
    }
    function ne(e, t, n = "coercible") {
        return o(e) ? null: d(e.attributes, t, n)
    }
    function re(e, t, n = "coercible") {
        return o(e) ? null: g(e.attributes, t, n)
    }
    function ie(e, t) {
        return ! o(e) && p(e.attributes, t)
    }
    function oe(e, t, n = "coercible") {
        return o(e) ? null: f(e.attributes, t, n)
    }
    function ae(e) {
        return ! o(h(e, "attributes"))
    }
    function se(e, t) {
        return i(ee(e, "platformAttributes"), t)
    }
    function le(e, t) {
        return l(se(e, t))
    }
    function ce(e, t, n) {
        const r = se(e, t);
        return o(r) ? null: h(r, n)
    }
    function ue(e, t, n, r = "coercible") {
        const i = se(e, t);
        return o(i) ? null: d(i, n, r)
    }
    function pe(e, t, n = !1) {
        return J(e, `dataHasDeviceFamily.$ {
            t
        }`, () = >!(!e || !t) && -1 !== he(e, n).indexOf(t))
    }
    function de(e, t, n = !1) {
        return pe(e, t, n) && 1 === he(e, n).length
    }
    function fe(e, t, n = !1) {
        const r = new Set(he(e, n));
        return t.length === r.size && t.every(e = >r.has(e))
    }
    function he(e, t = !1) {
        const n = te(e, "deviceFamilies");
        if (0 === n.length && t) {
            const n = W(e, "apps");
            for (const e of n) {
                const n = he(e, t);
                if (l(n)) return n
            }
        }
        return n
    }
    function me(e, t, n, r) {
        n || (n = Ae(e));
        let i = ce(e, n, t);
        return i || (i = ee(e, t, r)),
        i
    }
    function ge(e, t) {
        let n = function(e, t, n) {
            const r = se(e, t);
            return o(r) ? [] : u(r, n)
        } (e, Ae(e), t);
        return a(n) && (n = te(e, t)),
        n
    }
    function ye(e, t, n = "coercible") {
        let r = ue(e, Ae(e), t, n);
        return r || (r = ne(e, t, n)),
        r
    }
    function we(e, t, n) {
        n || (n = Ae(e));
        let r = function(e, t, n) {
            const r = se(e, t);
            return ! o(r) && p(r, n)
        } (e, n, t);
        return r || (r = ie(e, t)),
        r
    }
    function Te(e, t, n = "coercible") {
        let r = function(e, t, n, r = "coercible") {
            const i = se(e, t);
            return o(i) ? null: f(i, n, r)
        } (e, Ae(e), t, n);
        return o(r) && (r = oe(e, t)),
        r
    }
    function Ae(e) {
        return J(e, "bestAttributePlatformFromData", () = >{
            const t = fe(e, ["iphone", "ipad", "ipod"], !0),
            n = de(e, "tvos"),
            r = de(e, "mac"),
            i = de(e, "watch");
            let a = null;
            if (n ? a = "appletvos": r ? a = "osx": t ? a = "ios": i && (a = "watch"), !o(a)) return a;
            const s = function() {
                const e = Ie();
                switch (e) {
                case "ios":
                    return ["ios", "appletvos", "osx"];
                case "osx":
                    return ["osx", "ios", "appletvos"];
                case "appletvos":
                    return ["appletvos", "ios", "osx"];
                case "watch":
                    return ["ios", "watch", "osx"];
                default:
                    return [e]
                }
            } ();
            for (const t of s) if (le(e, t)) return t;
            return Ie()
        })
    }
    function Ie() {
        switch (il) {
        case "phone":
        case "pad":
            return "ios";
        case "tv":
            return "appletvos";
        case "mac":
            return "osx";
        case "watch":
            return "watch";
        default:
            return null
        }
    }
    function be(e, t, n) {
        const r = {};
        return Object.assign(r, n),
        r.eventType = "click",
        r.targetType = t,
        r.targetId = e,
        new jl(r, ["impressionsSnapshot", "pageFields"])
    }
    function Se(e, t, n, r, i) {
        const o = {};
        return Object.assign(o, i),
        o.term = e,
        o.targetType = t,
        o.actionType = n,
        o.actionUrl = r,
        o.eventType = "search",
        new jl(o, ["pageReferrer"])
    }
    function ke(e, t) {
        const n = {};
        let r;
        return Object.assign(n, e),
        n.eventType = "impressions",
        n.impressionQueue = "data-metrics",
        n.eventVersion = 4,
        r = t ? ["impressions", "pageFields", "pageReferrer", "advertRotation"] : ["impressions", "pageFields", "pageReferrer"],
        new jl(n, r)
    }
    function Pe(e) {
        switch (e) {
        case "arcadeGroupingLockup":
        case "arcadeProductPage":
        case "productPage":
        case "groupingLockup":
            return ! 0;
        default:
            return ! 1
        }
    }
    function Ce(e) {
        return a(e) ? null: ( - 1 !== e.indexOf("T") && (e = e.split("T")[0]), new Date(e.replace(/-/g, "/")))
    }
    function ve(e) {
        const t = function(e) {
            return o(e) ? null: new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()))
        } (e);
        return o(t) ? null: t.getTime()
    }
    function Ee(e) {
        if (null == e) return e;
        const t = Object.create(Object.getPrototypeOf(e));
        return Object.assign(t, e),
        t
    }
    function Oe(e, t) {
        return e instanceof t
    }
    function _e(e, t = null) {
        switch (e) {
        case "mac":
            return function(e) {
                let t = "x-apple.systempreferences:com.apple.preferences.softwareupdate?client=AppStore&variant=CUSTOMER";
                return e && (t += ` & installMajorOSBundle = $ {
                    e
                }`),
                t
            } (t);
        default:
            return null
        }
    }
    function Re(e, t = 14334) {
        let n = !1;
        return 2 & t && (n = n ||
        function(e) {
            return "watch" !== il && (we(e, "is32bitOnly") || we(e, "requires32bit"))
        } (e)),
        4 & t && (n = n ||
        function(e) {
            return J(e, "shouldFilterDeletableSystemApp", () = >{
                switch (ye(e, "bundleId")) {
                case "com.apple.NanoSleep":
                case "com.apple.findmy":
                    return ! 0
                }
                if (!Ss.isDeletableSystemAppFromData(e)) return ! 1;
                const t = Ss.bundleIdFromData(e),
                n = host.deviceModel,
                r = n.startsWith("iPhone"),
                i = n.startsWith("iPad");
                let o;
                switch (o = !!pa("12.3") || Is.isTVAppEnabled, t) {
                case "com.apple.compass":
                case "com.apple.Bridge":
                    return ! r;
                case "com.apple.calculator":
                case "com.apple.weather":
                    return i;
                case "com.apple.Photo-Booth":
                    return ! i;
                case "com.apple.tv":
                    return ! o;
                case "com.apple.videos":
                    return o;
                case "com.apple.iCloudDriveApp":
                    return ! 0;
                case "com.apple.facetime":
                    return ! A(["any-telephony"]) || !A(["venice"]);
                case "com.apple.Fitness":
                    return ! dl;
                case "com.apple.measure":
                    return ! A(["arkit"]);
                case "com.apple.Jellyfish":
                    return ! A(["front-depth-camera"]);
                case "is.workflow.my.app":
                case "com.apple.mobileme.fmf1":
                    return ! 0;
                case "com.apple.NanoHeartRhythm":
                    return !! y("ECG") && !fl;
                case "com.apple.NanoCompass.watchkitapp":
                    return A(["magnetometer"]);
                case "com.apple.Translate":
                    return ! 0
                }
                return ! 1
            })
        } (e)),
        8 & t && (n = n ||
        function(e) {
            return J(e, "shouldFilterUnsupportedWatchAppOnWatchClient", () = >{
                const t = we(e, "isAppleWatchSupported"),
                n = "app-bundles" === e.type;
                return host.clientIdentifier === Xs && !t && !n
            })
        } (e)),
        16 & t && (n = n ||
        function(e) {
            return "in-apps" === e.type && !ie(e, "isMerchandisedEnabled")
        } (e)),
        32 & t && (n = n ||
        function(e) {
            return J(e, "shouldFilterLegacyApps", () = >{
                const t = ye(e, "bundleId");
                if ("phone" === il || "pad" === il) switch (t) {
                case "com.apple.mobileme.fmip1":
                case "is.workflow.my.app":
                    return ! 0
                }
                if ("watch" === il) switch (t) {
                case "com.apple.mobileme.fmf1":
                    return ! 0
                }
                if ("mac" === il) switch (t) {
                case "com.apple.FaceTime":
                    return ! 0;
                case "com.apple.InstallAssistant.Seed.macOS1013Seed1":
                case "com.apple.InstallAssistant.OSX12PublicSeed2":
                case "com.apple.InstallAssistant.OSX12CustomerSeed1":
                case "com.apple.InstallAssistant.OSX12Seed2":
                    return ! 0;
                case "com.apple.Server.v3":
                case "com.apple.Server.v2":
                case "com.apple.Server.v1":
                    return ! 0
                }
                return ! 1
            })
        } (e)),
        64 & t && (n = n ||
        function(e) {
            return J(e, "isLegacyMacOSInstaller", () = >{
                const t = ye(e, "bundleId");
                if ("mac" !== il) return ! 1;
                switch (t) {
                case "com.apple.InstallAssistant.ElCapitan2":
                case "com.apple.InstallAssistant.ElCapitan":
                case "com.apple.InstallAssistant.Yosemite":
                case "com.apple.InstallAssistant.Mavericks":
                case "com.apple.InstallAssistant.MountainLion":
                case "com.apple.InstallAssistant.Lion":
                case "com.apple.InstallAssistant.Sierra":
                case "com.apple.InstallAssistant.HighSierra":
                case "com.apple.InstallAssistant.Mojave":
                    return ! 0
                }
                return ! 1
            })
        } (e)),
        128 & t && (n = n ||
        function(e) {
            return J(e, "shouldFilterUnsupportedPlatform", () = >("apps" === e.type || "app-bundles" === e.type) && !zo(Ho(e), il))
        } (e)),
        256 & t && (n = n ||
        function(e) {
            return J(e, "shouldFilterUnsupportedPreordersOnPlatform", () = >!!mo(e) && "apps" === e.type && !Yo(Ho(e), il))
        } (e)),
        512 & t && (n = n ||
        function(e) {
            return ! ("phone" !== il || !we(e, "isStandaloneForWatchOS") ||
            function(e) {
                if (o(e) || 0 === e.length) return ! 0;
                const t = e.split(".");
                return I(f(t[0]) || 0, f(t[1]) || 0, f(t[2]) || 0)
            } (ye(e, "minimumWatchOSVersion"))) || ("watch" === il ? !pa(ye(e, "minimumWatchOSVersion")) : !pa(ue(e, Ae(e), "minimumOSVersion")))
        } (e)),
        1024 & t && (n = n ||
        function(e) {
            return ! (!Is.isArcadeComingSoonEnabled || !re(e, "supportsArcade"))
        } (e)),
        2048 & t && (n = n ||
        function(e) {
            if ("watch" === il) return ! 1;
            const t = ie(e, "isFirstPartyHideableApp"),
            n = !we(e, "isDeliveredInIOSAppForWatchOS") && we(e, "isStandaloneForWatchOS");
            return t && n
        } (e)),
        4096 & t && (n = n ||
        function(e) {
            if ("watch" !== il) return ! 1;
            if (we(e, "isStandaloneForWatchOS") || we(e, "isStandaloneWithCompanionForWatchOS")) return ! 1;
            return ! (o(t = ue(e, Ae(e), "minimumOSVersion")) || 0 === t.length || b(t));
            var t
        } (e)),
        8192 & t && (n = n ||
        function(e) {
            return re(e, "isPreorder") && aa(e)
        } (e)),
        n
    }
    function De(e) {
        return - 1 !== Iu.indexOf(e.protocol)
    }
    function Le(e) {
        return e.startsWith("{") && e.endsWith("}")
    }
    function Fe(e, t, n, r) {
        const i = t(e, r);
        if (!i) return Promise.resolve({
            originalData: e,
            additionalData: null
        });
        const a = Array.from(i),
        s = [];
        for (const e of a) {
            const t = n(e);
            if (o(t)) {
                const t = a.indexOf(e);
                a.splice(t, 1)
            } else s.push(t)
        }
        return Promise.all(s).then(t = >{
            const n = new Map;
            for (const[e, r] of a.entries()) {
                const i = t[e];
                n.set(r, i)
            }
            return {
                originalData: e,
                additionalData: n
            }
        })
    }
    function xe(e) {
        const t = e.host;
        if (o(t)) return ! 1;
        for (const e of _u) if (!o(e) && -1 !== t.indexOf(e)) return ! 0;
        return ! 1
    }
    function Ne(e) {
        return M(new ph(e)).toString()
    }
    function Ue(e) {
        let t = e.query.id;
        const n = e.pathname;
        if (o(t) && l(n)) {
            const e = Du.exec(n);
            e && e.length > 1 && (t = e[1])
        }
        if (!c(t)) {
            const n = e.pathComponents();
            l(n) && (t = n[n.length - 1])
        }
        return t
    }
    function Me(e) {
        let t = Ue(e);
        if (!c(t)) throw new Error(`Unable to map $ {
            e.build()
        }
        to a media api url`);
        t in Lu && (t = Lu[t]);
        let n = "apps",
        r = Ru,
        i = ["customers-also-bought-apps", "developer-other-apps", "reviews", "app-bundles", "merchandised-in-apps", "top-in-apps", "related-editorial-items", "alternate-apps"]; - 1 !== e.pathname.indexOf("app-bundle") && (n = "app-bundles", r = ["screenshotsByType", "videoPreviewsByType", "minimumOSVersion"], i = ["developer-other-apps", "apps", "reviews", "related-editorial-items"]);
        const o = g(e.query[vl.isArcade]);
        return (null === o || o) && (r.push("minPlayers", "maxPlayers", "editorialVideo"), i.push("developer")),
        (new ph).forType(n).withIds([t]).includingAdditionalPlatforms(Xa()).includingRelationships(i).includingAttributes(r).addingRelationshipLimit("reviews", Za()).attributingTo(e.build())
    }
    function Be() {
        const e = ["editorialArtwork", "editorialVideo", "requiredCapabilities", "minimumOSVersion"];
        return "mac" === il ? e.push("screenshotsByType") : e.push("isAppleWatchSupported"),
        e
    }
    function $e() {
        let e = [];
        switch (il) {
        case "mac":
            e.push(xu);
            break;
        case "watch":
            e.push(Nu);
            break;
        default:
            e = e.concat(Fu)
        }
        return e
    }
    function Ve(e, t, n) {
        const r = new Jl(e, t);
        return n && (r.presentationContext = "push"),
        r
    }
    function qe(e) {
        const t = [],
        n = new Pu,
        r = {};
        r[P("ACCOUNT_SETTINGS")] = new Jl("finance", "account"),
        n.footer = new nu(P("PERSONALIZATION_DESCRIPTION_FOOTER_OPTED_IN").replace("{account_settings}", P("ACCOUNT_SETTINGS")), r);
        const o = new zs(P("PERSONALIZATION_DESCRIPTION_OPTED_IN"));
        n.addContentItem(new Ou(o)),
        t.push(n);
        const a = new Pu(P("PERSONALIZATION_INTERACTIONS"));
        a.footer = new nu(P("PERSONALIZATION_INTERACTIONS_FOOTER")),
        a.addContentItem(new vu(P("PERSONALIZATION_PURCHASES"), Ve("purchases", null, !0), "navigation")),
        a.addContentItem(new vu(P("PERSONALIZATION_SUBSCRIPTIONS"), Ve("finance", Vu, !1), "navigation")),
        a.addContentItem(new vu(P("PERSONALIZATION_PREORDERS"), Ve("finance", qu, !0), "navigation")),
        a.addContentItem(new vu(P("PERSONALIZATION_RATINGS"), Ve("finance", $u, !0), "navigation")),
        t.push(a);
        const s = new Pu(P("PERSONALIZATION_ADDITIONAL_INFO")),
        c = [P("PERSONALIZATION_ADDITIONAL_INFO_ITEM_1"), P("PERSONALIZATION_ADDITIONAL_INFO_ITEM_2"), P("PERSONALIZATION_ADDITIONAL_INFO_ITEM_3"), P("PERSONALIZATION_ADDITIONAL_INFO_ITEM_4"), P("PERSONALIZATION_ADDITIONAL_INFO_ITEM_5")].join("\n"),
        u = new zs(c);
        s.addContentItem(new Ou(u)),
        t.push(s);
        const p = i(e, "results.derived-user-info");
        if (l(p)) {
            const e = new Pu(P("ACCOUNT_INFO")),
            n = ["gender", "birthyear"];
            for (const t of n) {
                const n = d(p, `$ {
                    t
                }.label`),
                r = d(p, `$ {
                    t
                }.value`);
                l(n) && l(r) && e.addContentItem(new Eu(n, r))
            }
            e.footer = new nu(P("PERSONALIZATION_ACCOUNT_INFO_FOOTER")),
            t.push(e)
        }
        return new ku(P("RECOMMENDATIONS"), t)
    }
    function Ge(e) {
        const t = u(e, "data");
        return t.length > 1 && (console.warn("tried to extract data from container but more than one member present"), console.log(JSON.stringify(e))),
        1 !== t.length ? null: t[0]
    }
    function He(e) {
        return u(e, "data")
    }
    function je(e) {
        return s(e.attributes)
    }
    function We(e) {
        return u(e, "results.contents")
    }
    function ze(e) {
        return h(e, "meta.metrics")
    }
    function Ye(e) {
        const t = {};
        return e ? (Object.assign(t, e.baseFields), e.pageUrl ? t.pageUrl = e.pageUrl: e.timingMetrics && e.timingMetrics.pageURL && (t.pageUrl = e.timingMetrics.pageURL), e.recoMetricsData && Object.assign(t, e.recoMetricsData), e.mercuryMetricsData && Object.assign(t, e.mercuryMetricsData), wa(t)) : t
    }
    function Ke(e, t, n, r) {
        const i = m(n, bs.pageInformation, {}),
        o = m(n, bs.timingValues),
        a = d(n, bs.requestedUrl),
        s = i;
        if (s.pageType = e, s.pageId = t, r && (s.pageDetails = r), "Software" === e) {
            const e = Ge(n),
            t = ne(e, "name"),
            r = ne(e, "artistName");
            s.pageDetails = `$ {
                r
            }
            _$ {
                t
            }`,
            aa(e) && (s.softwareType = "Arcade")
        } else "Genre" === e ? s.pageDetails = `$ {
            e
        }
        _$ {
            t
        }`: "Search" === e && (s.pageDetails = "Apps");
        const l = new zu(wa(s));
        l.timingMetrics = o,
        l.pageUrl = a;
        const c = d(n, Hu);
        if (c) {
            const e = JSON.parse(c);
            l.iAdInfo = new Wu(d(e, "iAdId")),
            l.iAdInfo.applyClickFieldsFromPageRequest(t, e)
        }
        return l.recoMetricsData = ze(n),
        l
    }
    function Qe(e, t, n, r) {
        const i = new zu({
            pageType: e,
            pageId: t,
            page: `$ {
                e
            }
            _$ {
                t
            }`,
            pageDetails: n
        });
        return r && (i.iAdInfo = new Wu(d(r, "iAdId")), i.iAdInfo.applyClickFieldsFromPageRequest(t, r)),
        i
    }
    function Je(e, t, n) {
        o(t) || (e.pageMetrics.pageFields = Ye(t), e.pageMetrics.addManyInstructions(function(e, t) {
            const n = tt(e, t);
            e.searchTerm && (n.searchTerm = e.searchTerm);
            const r = Ee(n);
            e.iAdInfo && Object.assign(r, e.iAdInfo.impressionsFields);
            const i = s(e.iAdInfo),
            o = ke(r, i),
            a = [new zl(o, ["appExit", "pageExit"])];
            if (i) {
                const t = Ee(n);
                Object.assign(t, e.iAdInfo.impressionsFields);
                const i = function(e) {
                    const t = ke(e, !0);
                    return t.fields.impressionQueue = "data-metrics-impressions-low-latency",
                    new jl(t.fields, ["fastImpressions", "pageFields", "pageReferrer", "advertRotation"])
                } (r);
                i.fields.eventVersion = 3,
                a.push(new zl(i, ["appExit", "pageExit", "timer"]))
            }
            return a
        } (t, n)), e.pageMetrics.addData(function(e, t) {
            const n = tt(e, t);
            e.iAdInfo && Object.assign(n, e.iAdInfo.pageFields),
            s(e.offerReleaseDate) && (n.offerReleaseDate = ve(e.offerReleaseDate)),
            e.searchTerm && (n.searchTerm = e.searchTerm);
            const r = function(e, t, n) {
                const r = {};
                Object.assign(r, n),
                r.eventType = "page",
                t && (r.clientCorrelationKey = t.clientCorrelationKey, r.requestStartTime = t.requestStartTime, r.responseStartTime = t.responseStartTime, r.responseEndTime = t.responseEndTime);
                return new jl(r, ["pageFields", "pageReferrer"])
            } (0, e.timingMetrics, n);
            return l(e.iAdInfo) && r.includingFields.push("advertRotation"),
            r
        } (t, n), ["pageEnter"]), e.pageMetrics.pageRenderFields = function(e, t) {
            const n = tt(e, t);
            return e.searchTerm && (n.searchTerm = e.searchTerm),
            function(e, t) {
                const n = {};
                return Object.assign(n, t),
                n.eventType = "pageRender",
                e && (n.pageUrl || (n.pageUrl = e.pageURL), n.clientCorrelationKey = e.clientCorrelationKey, n.platformRequestStartTime = e.requestStartTime, n.platformResponseStartTime = e.responseStartTime, n.platformResponseEndTime = e.responseEndTime, n.platformResponseWasCached = e.responseWasCached, n.platformJsonParseStartTime = e.parseStartTime, n.platformJsonParseEndTime = e.parseEndTime),
                n
            } (e.timingMetrics, n)
        } (t, n), e instanceof Yu || e.pageMetrics.addData(et(t, n), ["backButton"]))
    }
    function Xe(e, t) {
        return new zu({
            pageId: e || "",
            pageType: t
        })
    }
    function Ze(e) {
        if (o(e) || o(e.pageMetrics)) return;
        const t = e.pageMetrics.instructions;
        if (!o(t)) for (const e of t)"page" === e.data.fields.eventType && e.data.includingFields.push("crossfireReferral");
        if (e instanceof lp) {
            const t = [];
            if (e.buttonAction instanceof tc) t.push(e.buttonAction);
            else if (e.buttonAction instanceof nc && e.buttonAction.buyAction instanceof tc) t.push(e.buttonAction.buyAction);
            else if (e.buttonAction instanceof rc && e.buttonAction.completionAction instanceof tc) t.push(e.buttonAction.completionAction);
            else if (e.buttonAction instanceof oc) {
                if (e.buttonAction.buyAction instanceof tc && t.push(e.buttonAction.buyAction), e.buttonAction.defaultAction instanceof tc && t.push(e.buttonAction.defaultAction), e.buttonAction.openAction instanceof tc && t.push(e.buttonAction.openAction), e.buttonAction.subscribePageAction instanceof Jl && "arcadeSubscribe" === e.buttonAction.subscribePageAction.page && l(e.buttonAction.subscribePageAction.pageUrl)) {
                    const t = Fl.from(e.buttonAction.subscribePageAction.pageUrl);
                    t.param(vl.includePostSubscribeAttribution, "true"),
                    e.buttonAction.subscribePageAction.pageUrl = t.build()
                }
                e.buttonAction.subscribePageAction instanceof Jl && e.buttonAction.subscribePageAction.pageData instanceof Sc && e.buttonAction.subscribePageAction.pageData.postSubscribeAction instanceof tc && t.push(e.buttonAction.subscribePageAction.pageData.postSubscribeAction)
            }
            for (const e of t) e.purchaseConfiguration && (e.purchaseConfiguration.excludeAttribution = !1)
        }
    }
    function et(e, t) {
        return function(e) {
            const t = {};
            return Object.assign(t, e),
            t.actionType = "back",
            be("back", "button", t)
        } (tt(e, t))
    }
    function tt(e, t) {
        const n = {};
        return s(e.offerType) && (n.offerType = e.offerType),
        n && t && t(n),
        n
    }
    function nt(e = !1, t = !1, n = 0, r = ds) {
        return rt(function(e, t) {
            let n;
            switch (host.clientIdentifier) {
            case "com.apple.TVAppStore.AppStoreTopShelfExtension":
            case "com.apple.Arcade.ArcadeTopShelfExtension":
                n = !1;
                break;
            default:
                n = t.supportsHEIF
            }
            return e ? n ? "heic": "png": n ? "heic": "jpeg"
        } (e, r), t, n, r)
    }
    function rt(e, t = !1, n = 0, r = ds) {
        const i = function(e, t, n) {
            switch (e) {
            case "heic":
                return "tv" === n.deviceType && 20 === t ? 70 : 60;
            default:
                return 70
            }
        } (e, n, r);
        return new Us(e, i, t)
    }
    function it(e, t = 0, n = 0, r = null, i = null, o = ds) {
        const a = new Ms(e, t, n, [nt(!1, !1, 0, o)]);
        return a.backgroundColor = r,
        a.checksum = i,
        a
    }
    function ot(e) {
        switch (ne(e, "editorialContext")) {
        case "Watch":
            return "com.apple.AppStore.BridgeStoreExtension";
        case "Messages":
            return "com.apple.MobileSMS";
        default:
            return null
        }
    }
    function at(e, t) {
        if (!e) return null;
        const n = e.length,
        r = n % t;
        return n >= t ? e.slice(0, n - r) : e
    }
    function st(e) {
        return e && e.remainingContent ? e.remainingContent.slice(0, e.maxPerPage) : []
    }
    function lt(e) {
        const t = Object.assign({},
        e);
        if (e && e.ids) {
            const n = ct(e.ids, e.maxPerPage);
            t.ids = n
        }
        if (e && e.remainingContent) {
            const n = ct(e.remainingContent, e.maxPerPage);
            t.remainingContent = n
        }
        return t
    }
    function ct(e, t) {
        return e.slice(t, e.length)
    }
    function ut(e, t) {
        return e.slice(t, e.length)
    }
    function pt(e, t, n = null, r, i) {
        return {
            remainingContent: e,
            maxPerPage: Ap,
            highestOrdinal: 0,
            url: t,
            metricsPageInformation: r,
            metricsLocationTracker: i
        }
    }
    function dt(e) {
        return s(e) ? ne(e, "customUrl") : null
    }
    function ft(e, t, n, r) {
        if (!l(n) && "mac" !== il) return e;
        const i = new oc(t, e),
        o = new Zl(n);
        return xa(o, {
            actionType: "open",
            actionDetails: {
                actionUrl: n
            },
            id: t,
            pageInformation: r.pageInformation,
            locationTracker: r.locationTracker
        }),
        i.openAction = o,
        i
    }
    function ht(e, t) {
        const n = Ye(t.pageInformation);
        n.id = ga(t.id),
        n.idType = ma(t),
        n.type = "video",
        n.typeDetails = "iTunesStoreContent",
        n.location = ba(t, null),
        t.actionDetails && (n.actionDetails = t.actionDetails),
        e.templateMediaEvent = function(e) {
            const t = {};
            return Object.assign(t, e),
            t.eventType = "media",
            new jl(t)
        } (n);
        const r = Ee(n);
        r.actionUrl = e.videoUrl,
        e.templateClickEvent = function(e, t, n) {
            const r = {};
            return Object.assign(r, n),
            r.eventType = "click",
            r.targetType = "button",
            r.targetId = null,
            new jl(r, ["pageFields"])
        } (0, 0, r)
    }
    function mt(e) {
        if (!e) return null;
        const t = e.match(/P(\d+)([A-Z]+)/);
        if (!t || 3 !== t.length) return null;
        let n = f(t[1]),
        r = t[2];
        return n && r ? ("D" === r && n > 0 && n % Jp == 0 && (r = "W", n /= Jp), new Qp(n, r)) : null
    }
    function gt(e) {
        if (!s(e)) return ! 1;
        const t = wt(e);
        for (const e of t) switch (e.key) {
        case "AppleArcade.Subscribe.FreeTrial.DurationAndTerms":
        case "AppleArcade.Subscribe.NoTrial.Pricing":
            return ! 0;
        default:
            return ! 1
        }
        return ! 1
    }
    function yt(e, t, n = null) {
        let r;
        return r = s(n) ? {
            appName: ne(n, "name")
        }: null,
        function(e, t, n = null) {
            if (!s(e)) return null;
            if (e === ed) return "";
            let r = e;
            const i = wt(e);
            for (const e of i) {
                const i = Tt(uo(t), e.key, n);
                if (o(i)) return null;
                r = r.replace(e.matchedString, i)
            }
            return r
        } (e, t, r)
    }
    function * wt(e) {
        const t = new RegExp("@(.*?)@", "g");
        let n = null;
        do {
            n = t.exec(e), null != n && (yield {
                matchedString: n[0],
                key: n[1]
            })
        } while ( null != n )
    }
    function Tt(e, t, n) {
        switch (t) {
        case "AppleArcade.Subscribe.AppName":
            return function(e) {
                return o(e) || o(e.appName) ? null: e.appName
            } (n);
        case "AppleArcade.Subscribe.FreeTrial.Duration":
        case "AppleArcade.Subscribe.FreeTrial.DurationAndTerms":
            return function(e, t) {
                const n = u(e, "discounts")[0];
                if (!n) return null;
                const r = d(n, "recurringSubscriptionPeriod"),
                i = d(e, "recurringSubscriptionPeriod");
                if (!r || !i) return null;
                if ("FreeTrial" !== d(n, "modeType")) return null;
                const a = mt(r),
                l = mt(i),
                c = Xp[a.type],
                p = Xp[l.type],
                h = d(e, "priceFormatted"),
                m = f(n, "numOfPeriods"),
                g = a.period * m;
                switch (t) {
                case "AppleArcade.Subscribe.FreeTrial.Duration":
                    return function(e, t) {
                        return o(e) ? null: C(`ARCADE_SUBSCRIBE_FREE_TRIAL_DURATION_$ {
                            e
                        }`, t)
                    } (c, g);
                case "AppleArcade.Subscribe.FreeTrial.DurationAndTerms":
                    return function(e, t, n, r, i) {
                        if (o(e) || o(t) || o(r) || o(i)) return null;
                        const a = v(`ARCADE_SUBSCRIBE_FREE_TRIAL_$ {
                            e
                        }
                        _POST_TRIAL_$ {
                            t
                        }`, [n, r]);
                        return s(a) ? a.replace("{postTrialPrice}", i) : null
                    } (c, p, g, l.period, h);
                default:
                    return null
                }
            } (e, t);
        case "AppleArcade.Subscribe.NoTrial.Pricing":
            return function(e, t) {
                const n = d(e, "recurringSubscriptionPeriod");
                if (!n) return null;
                const r = mt(n),
                i = Xp[r.type];
                if (o(i)) return null;
                const a = d(e, "priceFormatted");
                switch (t) {
                case "AppleArcade.Subscribe.NoTrial.Pricing":
                    return C(`ARCADE_SUBSCRIBE_NO_TRIAL_TERMS_$ {
                        i
                    }`, r.period).replace("{price}", a);
                default:
                    return null
                }
            } (e, t);
        default:
            return null
        }
    }
    function At(e) {
        const t = u(e, "discounts")[0];
        if (!t) return null;
        const n = d(t, "recurringSubscriptionPeriod"),
        r = d(e, "recurringSubscriptionPeriod");
        if (!n || !r) return null;
        const i = d(t, "modeType"),
        a = mt(n),
        s = mt(r),
        l = function(e, t, n) {
            if (o(e) || o(t)) return null;
            const r = Xp[e.type],
            i = Xp[t.type],
            a = Zp[n];
            return r && i && a ? `IN_APP_OFFER_PAGE_DESCRIPTION_$ {
                a
            }
            _$ {
                r
            }
            _POST_TRIAL_$ {
                i
            }`: null
        } (a, s, i);
        if (!l) return null;
        const c = d(t, "priceFormatted"),
        p = d(e, "priceFormatted"),
        h = f(t, "numOfPeriods"),
        m = a.period * h;
        switch (i) {
        case "FreeTrial":
            const e = v(l, [m, s.period]);
            if (e) return e.replace("{postTrialPrice}", p);
            break;
        case "PayUpFront":
            const t = v(l, [m, s.period]);
            if (t) return t.replace("{trialPrice}", c).replace("{postTrialPrice}", p);
            break;
        case "PayAsYouGo":
            const n = v(l, [a.period, m, s.period]);
            if (n) return n.replace("{trialPrice}", c).replace("{postTrialPrice}", p);
            break;
        default:
            return null
        }
        return null
    }
    function It(e, t) {
        const n = {
            internalContentType: "shelf",
            shelf: t
        };
        e.push(n)
    }
    function bt(e, t) {
        const n = {
            internalContentType: "contentPool",
            contentPool: new nd(t)
        };
        e.push(n)
    }
    function St(e, t, n) {
        if (a(e)) return null;
        const r = e.shift();
        if ("shelf" === r.internalContentType) return {
            contentType: "shelf",
            shelf: r.shelf
        };
        const i = r.contentPool,
        o = i.numberOfItemsProcessed,
        s = o > 0;
        let l;
        l = "greedy" === t && i.isFullyHydrated ?
        function(e) {
            const t = {
                label: e.label,
                title: e.title,
                meta: e.meta,
                date: e.date,
                contents: e.remainingContents
            };
            return e.numberOfItemsProcessed = e.remainingContents.length,
            e.remainingContents = [],
            t
        } (i) : function(e, t) {
            const n = e.remainingContents.length,
            r = e.remainingContents.slice(0, t),
            i = e.remainingContents.slice(t, n),
            o = {
                label: e.label,
                title: e.title,
                meta: e.meta,
                date: e.date,
                contents: r
            };
            return e.numberOfItemsProcessed += r.length,
            e.remainingContents = i,
            o
        } (i, n);
        const c = a(i.remainingContents),
        u = {
            todayModule: l,
            isContinuationModule: s,
            isLastOfModule: c,
            contentOffsetWithinSourceModule: o
        };
        return c || e.unshift(r),
        {
            contentType: "moduleSlice",
            moduleSlice: u
        }
    }
    function kt(e) {
        const t = [],
        n = [];
        for (const r of e.todayModule.contents) je(r) ? t.push(r) : n.push(r);
        return 0 === n.length ? Promise.resolve(e) : $(new ph(n).includingAdditionalPlatforms(Xa()).includingAttributes(od).includingRelationshipsForUpsell(!0)).then(n = >{
            const r = He(n),
            i = t.concat(r);
            return e.todayModule.contents = i,
            e
        }).
        catch(() = >(e.todayModule.contents = [], e))
    }
    function Pt(e, t) {
        const n = e.todayModule,
        r = t.todayModule;
        return {
            todayModule: {
                label: n.label,
                title: n.title,
                meta: n.meta,
                contents: n.contents.concat(r.contents)
            },
            isContinuationModule: e.isContinuationModule,
            isLastOfModule: t.isLastOfModule,
            contentOffsetWithinSourceModule: e.contentOffsetWithinSourceModule
        }
    }
    function Ct(e, t, n) {
        let r = !1,
        i = [],
        o = [];
        for (let a = e.length - 1; a >= 0; a--) {
            const s = e[a];
            je(s) ? 1 === t[s.id] ? (n && 0 === i.length && i.unshift(...o), o = [], i.unshift(s), r = !0) : (o.unshift(s), t[s.id] -= 1) : o.unshift(s)
        }
        return n && 0 === i.length && (i = o),
        {
            contents: i,
            contentsContainsHydratedData: r
        }
    }
    function vt(e, t, n = null, r) {
        const i = P("PAGE_TITLE_TODAY"),
        o = new Kp(e, n, r || i, i);
        return s(t) && l(t.queue) && (o.nextPage = t),
        o
    }
    function Et(e, t, n = !1) {
        const r = St(e, "greedy", 6);
        if (o(r)) return null;
        let i,
        a = null;
        if ("shelf" === r.contentType && (a = r.shelf, i = !0), "moduleSlice" === r.contentType) {
            const e = r.moduleSlice,
            o = {
                contentOffsetWithinModule: e.contentOffsetWithinSourceModule,
                hideTitle: e.isContinuationModule,
                setTitleToDateForTodaySection: n
            };
            a = Ot(e.todayModule, o, t),
            i = e.isLastOfModule
        }
        return s(a) && i && va(t.locationTracker),
        a
    }
    function Ot(e, t, n, r = !1) {
        const c = ze(e),
        p = {
            id: null,
            kind: null,
            softwareType: null,
            targetType: "swoosh",
            title: e.title,
            pageInformation: n.pageInformation,
            locationTracker: n.locationTracker,
            idType: "its_contentId",
            recoMetricsData: c
        };
        n.currentShelfRecoMetricsData = c;
        const f = new wu("todayCard");
        f.isHorizontal = !1,
        vo(f, p),
        ka(p, e.title),
        function(e, t) {
            const n = Ra(e);
            n ? n.position = t: e.rootPosition = t
        } (p.locationTracker, t.contentOffsetWithinModule);
        const h = {
            useThreeLineOverlayForBranded: !1,
            enableFullScreenVideo: !0,
            enableListCardToMultiAppFallback: !0,
            canDisplayArcadeOfferButton: !0
        };
        h.useThreeLineOverlayForBranded = !
        function(e) {
            const t = i(e, "date");
            return "TodayForApps" === e.label || s(t)
        } (e) || r;
        const m = [],
        g = u(e.contents);
        let y = 0;
        for (const e of g) {
            if (!je(e)) break;
            const t = Nt(e, h, n);
            s(t) && (m.push(t), va(n.locationTracker)),
            y++
        }
        const w = g.slice(y);
        e.contents = w,
        f.items = m;
        const T = d(e, "date");
        if ("TodayForApps" === e.label && t.setTitleToDateForTodaySection) {
            const e = new Date;
            f.title = D("EEEE, MMMM d", e)
        } else if (l(T)) {
            const e = Ce(T);
            f.title = D("EEEE", e),
            f.subtitle = D("MMMM d", e)
        } else f.title = e.title;
        if (t.hideTitle && (f.title = void 0), Pa(n.locationTracker), l(e.contents)) {
            const r = t.contentOffsetWithinModule + y,
            i = new sd(e, r, n.pageInformation, n.locationTracker);
            f.url = o((A = i).todayModule) || a(A.todayModule.contents) ? null: `$ {
                kl.internal
            }: /${Pl.today}/$ {
                Pl.shelf
            }
            /`+encodeURIComponent(JSON.stringify(A))}var A;return f}function _t(e,t){switch(t){case"smallStoryCard":return"iOS"===host.platform?pd.has(e):ld.has(e);case"mediumStoryCard":return cd.has(e);case"largeStoryCard":return ud.has(e);case"todayCard":return"watch"===il;default:return!1}}function Rt(e,t,n,r,i){const o={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker};null==i&&(i={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0}),i.prevailingCropCode=function(e){switch(e){case"smallStoryCard":return"iOS"===host.platform||"tvOS"===host.platform?"fo":"em";case"mediumStoryCard":return"el";case"largeStoryCard":return"ek";default:return null}}(t),"watch"!==il&&(i.coercedGeneralCardSubType="Grid");const a=[];for(const l of e){if(!s(l.attributes)){r&&r(l);continue}const e=Nt(l,i,o,n.augmentingData);if(e){if("phone"===il||"pad"===il){e.collapsedHeading=Lt(e),e.inlineDescription=Ft(e,l),y("smallStoryCards")&&e.inlineDescription===e.collapsedHeading&&(e.inlineDescription=null);const t=e.media;t&&"brandedSingleApp"===t.kind&&(e.title=null)}if("largeStoryCard"===t){const t=e.heroMedia;if(!s(t)||!s(t.art)&&!s(t.video))continue}if(_t(e.media.kind,t)){if(s(n.filterOutMediaCardKinds)&&n.filterOutMediaCardKinds.has(e.media.kind))continue;a.push(e)}en(e,l)}}return a}function Dt(e,t,n,r,i,o){if(!s(t))return null;const a=new wu(t);switch(n&&(a.title=n),a.subtitle=r,t){case"todayBrick":a.items=[xt(e,i.metricsPageInformation,i.metricsLocationTracker,()=>!0,o)];break;default:a.items=Rt(e,t,i,o)}return a}function Lt(e){return s(e.heading)?e.heading.replace(/\n / g,
            " ") : null
        }
        function Ft(e, t) {
            if (y("smallStoryCards")) switch (e.media.kind) {
            case "brandedSingleApp":
                return e.overlay instanceof Vp && s(e.overlay.lockup) ? e.overlay.lockup.title: null;
            default:
                const n = la(t, "name");
                return s(n) ? n.replace(/\n/g, " ") : null
            }
            switch (e.media.kind) {
            case "brandedSingleApp":
                return e.overlay instanceof jp ? e.overlay.heading: s(e.title) ? e.title.replace(/\n/g, " ") : null;
            default:
                const t = P("TODAY_BRICK_STANDARD_DESCRIPTION");
                let n,
                r;
                return e.overlay instanceof jp ? (n = e.overlay.heading, r = e.overlay.title) : (n = e.heading, r = e.title),
                t && n && r ? t.replace("{heading}", n).replace("{title}", r) : null
            }
        }
        function xt(e, t, n, r, i) {
            return As.c("todayCardsFromPlatformData", () = >{
                if (!e) return null;
                const o = {
                    useThreeLineOverlayForBranded: !1,
                    enableFullScreenVideo: !1,
                    enableListCardToMultiAppFallback: !0,
                    canDisplayArcadeOfferButton: !0,
                    coercedGeneralCardSubType: "Grid",
                    prevailingCropCode: "fo"
                },
                a = {
                    pageInformation: t,
                    locationTracker: n
                },
                l = [];
                for (const t of e) {
                    if (!s(t.attributes)) {
                        i && i(t);
                        continue
                    }
                    const e = Nt(t, o, a);
                    if (e && r(e)) {
                        e.collapsedHeading = Lt(e),
                        e.inlineDescription = Ft(e, t),
                        y("smallStoryCards") && e.inlineDescription === e.collapsedHeading && (e.inlineDescription = null);
                        const n = e.media;
                        n && "brandedSingleApp" === n.kind && (e.title = null),
                        l.push(e)
                    }
                }
                return l.length ? new Yp(l) : null
            })
        }
        function Nt(e, t, n, r) {
            return As.b("todayCardFromData", () = >{
                const i = ne(e, "displayStyle"),
                c = ot(e); !
                function(e, t, n) {
                    const r = Jt(e);
                    let i = ne(e, "displaySubStyle");
                    if (i && n.coercedGeneralCardSubType && (i = n.coercedGeneralCardSubType), "Content" !== ne(e, "displayStyle")) return ! 1;
                    if (r.length >= 6 && "Grid" === i) return ! 1;
                    const o = Bt("Content");
                    return ! (!ie(e, "ignoreEditorialArt") && zt(ee(e, o), n.prevailingCropCode) || $t(r))
                } (e, 0, t) ? t.clientIdentifierOverride = null: t.clientIdentifierOverride = c;
                let u = null;
                switch (i) {
                case "Branded":
                    u = function(e, t, n) {
                        return As.c("brandedCard", () = >{
                            let r;
                            s(t) && (r = t.clientIdentifierOverride);
                            const i = jt(e, n, r),
                            c = t.useThreeLineOverlayForBranded;
                            Ht(e, i, n);
                            try {
                                const r = Bt("Branded"),
                                u = ee(e, r),
                                p = zt(u, t.prevailingCropCode),
                                d = Yt(e, r);
                                p ? i.style = Kt(u) : (i.backgroundColor = Dp.noArtBackgroundColor, i.style = "dark");
                                const f = ne(e, "displayStyle"),
                                h = Qt(i.style, f),
                                m = Xt(e, t, n, !0, h, "grey");
                                if (!m || 1 !== m.length) return null;
                                const g = m[0];
                                switch (ne(e, "displaySubStyle")) {
                                case "AppOfDay":
                                case "GameOfDay":
                                    {
                                        let t = !0,
                                        n = null;
                                        if (s(p) && (t = !1, n = p.backgroundColor), c) {
                                            const t = function(e) {
                                                const t = ne(e, "displaySubStyle");
                                                let n = ne(e, "alternateLabel");
                                                return o(n) && "AppOfDay" === t ? n = rd: o(n) && "GameOfDay" === t && (n = id),
                                                n
                                            } (e);
                                            let n = la(e, "name");
                                            a(n) && (n = g.title);
                                            let r = la(e, "short");
                                            if (a(r)) {
                                                const t = W(e, "card-contents");
                                                0 !== t.length && (r = la(t[0], "tagline")),
                                                o(r) && !o(g.subtitle) && (r = g.subtitle)
                                            }
                                            i.overlay = new jp(t, n, r),
                                            i.style = "white",
                                            i.title = null,
                                            s(p) && "watch" !== il && (p.crop = "fo")
                                        } else {
                                            const r = la(e, "short");
                                            let o = null;
                                            l(r) && (o = new zs(r, "text/plain", "todayCardOverlay")),
                                            i.overlay = new Vp(g, o, t, n)
                                        }
                                        break
                                    }
                                default:
                                    {
                                        const e = new $p(g);
                                        e.displaysIcon = !1,
                                        i.overlay = e;
                                        break
                                    }
                                }
                                return c || (i.title = ne(e, "label")),
                                i.media = new Dp(g.icon, p, d),
                                i.media.impressionMetrics = g.impressionMetrics,
                                i
                            } finally {
                                Pa(n.locationTracker)
                            }
                        })
                    } (e, t, n);
                    break;
                case "Content":
                    u = function(e, t, n) {
                        return As.c("contentCard", () = >{
                            let r;
                            s(t) && (r = t.clientIdentifierOverride);
                            const i = jt(e, n, r);
                            Ht(e, i, n);
                            try {
                                const r = Jt(e),
                                o = $t(r);
                                if (o) {
                                    const e = Yi(o, {
                                        offerStyle: "colored",
                                        metricsOptions: {
                                            pageInformation: n.pageInformation,
                                            locationTracker: n.locationTracker
                                        },
                                        artworkUseCase: 1
                                    });
                                    return e ? (e.theme = "infer", i.media = new xp(e), i.media.impressionMetrics = e.impressionMetrics, i.media.impressionMetrics.fields.parentId = i.impressionMetrics.fields.id, i.style = "white", i) : null
                                } {
                                    const o = Bt("Content"),
                                    a = qt(e, i, o, t.prevailingCropCode);
                                    if (a) {
                                        const r = ne(e, "displayStyle"),
                                        o = Qt(a.style, r),
                                        s = Xt(e, t, n, !0, o);
                                        return Vt(e, a, s),
                                        null !== i.overlay && i.overlay instanceof Gp && (i.overlay.style = "white"),
                                        i
                                    }
                                    if (1 === r.length) {
                                        const r = Xt(e, t, n, !0);
                                        if (1 !== r.length) return null;
                                        const o = r[0];
                                        return i.media = new Rp(o.icon),
                                        Vt(e, i, r),
                                        null !== i.overlay && i.overlay instanceof $p && (i.overlay.displaysIcon = !1),
                                        i
                                    } {
                                        const o = r.filter(e = >{
                                            const t = ra(e);
                                            return ! ta(e) || !t
                                        });
                                        let a,
                                        s,
                                        l = ne(e, "displaySubStyle");
                                        switch (l && t.coercedGeneralCardSubType && (l = t.coercedGeneralCardSubType), il) {
                                        case "tv":
                                            a = 3,
                                            s = 2;
                                            break;
                                        default:
                                            a = 4,
                                            s = 5
                                        }
                                        switch ("watch" === il && Vt(e, i, []), l) {
                                        case "List":
                                        case "NumberedList":
                                            {
                                                const r = Xt(e, t, n, !1);
                                                if (r.length < a && t.enableListCardToMultiAppFallback) return Wt(e, r, i),
                                                i;
                                                if ("NumberedList" === l) {
                                                    let e = 1;
                                                    for (const t of r) t.ordinal = `$ {
                                                        e
                                                    }`,
                                                    e++
                                                }
                                                return i.style = "white",
                                                i.media = new Lp(r, null),
                                                i
                                            }
                                        case "River":
                                            {
                                                t.canDisplayArcadeOfferButton = !1;
                                                const r = Zt(o, t, n, !0);
                                                return 0 === r.length ? null: r.length < s ? (Wt(e, r, i), i) : (i.style = "white", i.media = new Np(r), i)
                                            }
                                        case "Grid":
                                            {
                                                t.canDisplayArcadeOfferButton = !1;
                                                const r = Zt(o, t, n, !0);
                                                if (0 === r.length) return null;
                                                if (r.length <= s) return Wt(e, r, i),
                                                i;
                                                const a = r.length % 2 != 0;
                                                let l;
                                                r.length <= 9 && a && "tv" !== il && r.pop(),
                                                i.style = "white";
                                                const c = r.length;
                                                return l = c <= 13 ? "large": c <= 25 ? "mixed": "small",
                                                i.media = new Up(r, l),
                                                i
                                            }
                                        default:
                                            return null
                                        }
                                    }
                                }
                            } finally {
                                Pa(n.locationTracker)
                            }
                        })
                    } (e, t, n);
                    break;
                case "Media":
                    u = function(e, t, n) {
                        return As.c("mediaCard", () = >{
                            let r;
                            s(t) && (r = t.clientIdentifierOverride);
                            const i = jt(e, n, r);
                            Ht(e, i, n);
                            try {
                                switch (ne(e, "cardDisplayStyle")) {
                                case "Video":
                                    return function(e, t, n, r) {
                                        const i = Gt(e);
                                        if (!i) return null;
                                        const o = Do(h(i, "previewFrame"), {
                                            withJoeColorPlaceholder: !0,
                                            useCase: 15
                                        });
                                        if (!o) return null;
                                        const a = d(i, "video");
                                        if (!a) return null;
                                        let s = gp;
                                        l(n.videoPlaybackControls) && (s = n.videoPlaybackControls);
                                        let c = yp;
                                        l(n.videoPlaybackControls) && (c = n.videoAutoplayPlaybackControls);
                                        const u = sa(e, "short"),
                                        p = new Uc(a, o, {
                                            playbackControls: s,
                                            autoPlayPlaybackControls: c,
                                            canPlayFullScreen: n.enableFullScreenVideo
                                        });
                                        return "mac" === il && (p.playbackControls.scrubber = !0, p.autoPlayPlaybackControls.scrubber = !0),
                                        ht(p, {
                                            pageInformation: r.pageInformation,
                                            locationTracker: r.locationTracker,
                                            id: e.id
                                        }),
                                        t.style = "white",
                                        t.media = new Mp(p, u),
                                        t.overlay = new jp(t.heading, t.title, u),
                                        t.title = null,
                                        t.heading = null,
                                        t
                                    } (e, i, t, n);
                                case "FullBleedImage":
                                    const r = Bt("Media"),
                                    o = qt(e, i, r, t.prevailingCropCode);
                                    return Vt(e, o, []),
                                    o;
                                default:
                                    return null
                                }
                            } finally {
                                Pa(n.locationTracker)
                            }
                        })
                    } (e, t, n);
                    break;
                default:
                    u = null
                }
                if (o(u)) return null;
                u.inlineDescription = sa(e, "short"),
                ie(e, "isAcquisition") && (u = function(e, t, n, r) {
                    let i = Ka(t); ! i && n && (i = Qa(n.arcadeUpsellEditorialResponse));
                    const o = function(e, t) {
                        if (!
                        function() {
                            if (!y("arcadeLockupOverlay")) return ! 1;
                            const e = host.platform;
                            return "iOS" === e || "macOS" === e
                        } ()) return null;
                        const n = Zi(e, t, "arcadeTodayCard", "infer", "light");
                        return new Wp(n)
                    } (i, r);
                    return o && (e.overlay = o, e.impressionMetrics.fields.displaysArcadeUpsell = !0),
                    e.title = yt(e.title, i.inAppData),
                    e.inlineDescription = yt(e.inlineDescription, i.inAppData),
                    e
                } (u, e, r, n));
                const p = new Op,
                f = Ut(e, t.heroDisplayContext, i, t.prevailingCropCode);
                if (s(f) && (p.art = f), s(u.media) && u.media instanceof Mp && (p.video = u.media.video), ("mac" === il || "tv" === il) && p.isValid()) {
                    u.heroMedia = p;
                    let n = Kt(ee(e, Mt(t.heroDisplayContext, i)));
                    s(n) || (n = Kt(h(Gt(e), "previewFrame"))),
                    u.style = n
                }
                return o(u) ? (console.log(`Unknown style: $ {
                    i
                }`), null) : u
            })
        }
        function Ut(e, t, n, r) {
            return zt(ee(e, Mt(t, n)),
            function(e, t) {
                return "article" === e && "mac" === il ? "fn": t
            } (t, r))
        }
        function Mt(e, t) {
            return "article" === e && "mac" === il ? Bt(t) : "editorialArtwork.crossoverCard"
        }
        function Bt(e) {
            if ("watch" === il) return "editorialArtwork.subscriptionHero";
            switch (e) {
            case "Branded":
                return "editorialArtwork.dayCard";
            case "Content":
                return "editorialArtwork.generalCard";
            case "Media":
                return "editorialArtwork.mediaCard";
            default:
                return null
            }
        }
        function $t(e) {
            if (1 === e.length) {
                const t = e[0];
                if ("in-apps" === t.type) return t
            }
            return null
        }
        function Vt(e, t, n) {
            if (!t) return;
            const r = sa(e, "short"),
            i = ie(e, "ignoreITunesShortNotes");
            if (r && !i) t.overlay = new Gp(new zs(r, "text/plain", "todayCardOverlay"));
            else if (n && 0 !== n.length) if (1 === n.length) t.overlay = new $p(n[0]);
            else {
                const e = new qp(n);
                e.displaysTitle = !1,
                t.overlay = e
            }
        }
        function qt(e, t, n, r) {
            return As.c("cardWithArtwork", () = >{
                if (ie(e, "ignoreEditorialArt")) return null;
                const i = ee(e, n),
                o = zt(i, r);
                return o ? (t.media = new _p(o, Yt(e, n)), t.style = Kt(i), t.clickAction instanceof Zl && (t.overlay = new Hp(t.clickAction), t.style = "white"), t) : null
            })
        }
        function Gt(e) {
            let t;
            const n = ee(e, "editorialVideo.storeFrontVideo4x3"),
            r = ee(e, "editorialVideo.storeFrontVideo");
            return t = "pad" === il ? n || r: r || n,
            t
        }
        function Ht(e, t, n) {
            ka({
                pageInformation: n.pageInformation,
                locationTracker: n.locationTracker,
                targetType: "todayCard",
                idType: "its_id",
                id: e.id
            },
            t.title)
        }
        function jt(e, t, n) {
            return As.c("basicCard", () = >{
                const r = new zp,
                i = ne(e, "label"),
                a = ne(e, "displayStyle"),
                l = ne(e, "displaySubStyle");
                r.heading = i;
                let c = sa(e, "name");
                o(c) && "Branded" === a && (c = ne(e, "label")),
                r.title = c;
                const u = function(e) {
                    return p(e, td)
                } (e),
                d = {
                    cardType: a,
                    franchise: i
                };
                s(l) && (d.cardSubType = l),
                u && (d.isOnboardingCard = u);
                const f = Oo(e, c, {
                    targetType: "todayCard",
                    pageInformation: t.pageInformation,
                    locationTracker: t.locationTracker
                }),
                h = f;
                return h.actionDetails = d,
                r.clickAction = io(e, h, n, t.currentShelfRecoMetricsData),
                function(e, t, n, r, i, o) {
                    if (!e) return;
                    const a = Co(e, t);
                    a.franchise = ga(n),
                    a.cardType = ga(r),
                    o && (a.cardSubType = ga(o)),
                    i && (a.isOnboardingCard = i),
                    e.impressionMetrics = new Kl(a)
                } (r, f, i, a, u, l),
                r
            })
        }
        function Wt(e, t, n) {
            const r = sa(e, "short");
            if (n.media = new Fp(t, r), n.clickAction instanceof Jl) {
                const e = Fl.from(n.clickAction.pageUrl);
                e.param(vl.showingFallbackMedia, "true"),
                n.clickAction.pageUrl = e.build()
            }
        }
        function zt(e, t) {
            if (e) {
                const n = Do(e, {
                    withJoeColorPlaceholder: !0,
                    useCase: 15
                });
                return n.crop = t || ("mac" === il || "tv" === il ? "fn": "sr"),
                n
            }
            return null
        }
        function Yt(e, t) {
            const n = ee(e, t);
            return s(n) ? d(n, "bgGradient") : null
        }
        function Kt(e) {
            if (a(e)) return null;
            const t = z(d(e, "bgColor")),
            n = u(e, "textGradient").map(e = >z(e)),
            r = 2 === n.length;
            return t || r ? r ? Y(n[0]) ? "light": "dark": Y(t) ? "dark": "light": null
        }
        function Qt(e, t) {
            if ("Branded" !== t) return null;
            switch (e) {
            case "dark":
                return "dark";
            default:
                return null
            }
        }
        function Jt(e) {
            return W(e, "card-contents")
        }
        function Xt(e, t, n, r, i, o) {
            return Zt(W(e, "card-contents"), t, n, r, i, o, dt(e))
        }
        function Zt(e, t, n, r, i, o, s) {
            return a(e) ? [] : to(e.filter(e = >!l(e.attributes) || "in-apps" !== e.type), {
                lockupOptions: {
                    metricsOptions: {
                        pageInformation: n.pageInformation,
                        locationTracker: n.locationTracker
                    },
                    offerEnvironment: i,
                    offerStyle: o,
                    clientIdentifierOverride: t.clientIdentifierOverride,
                    externalDeepLinkUrl: s,
                    artworkUseCase: 1,
                    canDisplayArcadeOfferButton: t.canDisplayArcadeOfferButton
                },
                shouldIgnoreLocationIncrement: r,
                filter: 14206
            })
        }
        function en(e, t) {
            if ("tv" !== il || !ie(t, "isAcquisition")) return;
            const n = Ga();
            e.clickAction = n
        }
        function tn(e, t) {
            const n = oe(e, "editorialElementKind");
            As.b(`walkFeaturedContent: $ {
                n
            }`, () = >{
                const r = j(e, "tabs");
                if (s(r)) return void tn(r, t);
                const i = {
                    featuredContentId: n,
                    metricsPageInformation: t.metricsPageInformation,
                    metricsLocationTracker: t.metricsLocationTracker,
                    pageGenreId: t.pageGenreId,
                    featuredContentData: e,
                    id: d(e, "id"),
                    title: ne(e, "name"),
                    subtitle: ne(e, "tagline"),
                    shouldFilter: !1,
                    remainingItems: [],
                    isFirstRender: !0,
                    isDeferring: !1,
                    showOrdinals: !1,
                    hasExistingContent: !1,
                    ordinalIndex: 1,
                    isSearchGrouping: t.isSearchGrouping,
                    isArcadePage: t.isArcadePage,
                    shouldReduceSmallLockupShelfHeightToContent: t.shouldReduceSmallLockupShelfHeightToContent
                },
                a = {
                    id: i.id,
                    kind: null,
                    softwareType: null,
                    targetType: "swoosh",
                    title: i.title,
                    pageInformation: t.metricsPageInformation,
                    locationTracker: t.metricsLocationTracker,
                    idType: "its_contentId",
                    fcKind: n,
                    recoMetricsData: rn(e)
                };
                let c,
                u = !0,
                p = !1;
                switch (n) {
                case 413:
                case 414:
                case 254:
                case 255:
                case 256:
                case 266:
                case 271:
                    nn(e, t);
                    break;
                case 424:
                    {
                        const n = W(e, "children");
                        t.topChartIdentifiers = [];
                        for (const e of n) if (An(oe(e, "editorialElementKind"))) {
                            const n = ne(e, "chart");
                            l(n) && t.topChartIdentifiers.push(n)
                        }
                        nn(e, t),
                        t.topChartIdentifiers = [];
                        break
                    }
                case 425:
                    {
                        const n = j(e, "children");
                        if (n) {
                            const e = W(n, "children");
                            e.length && (ka(a, i.title), c = an(e, i), Pa(t.metricsLocationTracker), p = !0)
                        }
                        break
                    }
                case 415:
                case 416:
                case 417:
                case 258:
                    ka(a, i.title),
                    i.clientIdentifierOverride = ot(e),
                    c = sn(W(e, "children"), i),
                    Pa(t.metricsLocationTracker),
                    p = !0;
                    break;
                case 421:
                case 422:
                case 423:
                case 261:
                    {
                        ka(a, i.title);
                        let n = re(e, "suppressText");
                        o(n) && (n = !0);
                        const r = !n;
                        i.clientIdentifierOverride = ot(e),
                        c = on(W(e, "children"), i, r),
                        Pa(t.metricsLocationTracker),
                        p = !0;
                        break
                    }
                case 437:
                case 265:
                    ka(a, i.title),
                    c = dn(e, i),
                    Pa(t.metricsLocationTracker),
                    p = !0;
                    break;
                case 436:
                    nn(e, t);
                    break;
                case 475:
                    {
                        ka(a, i.title);
                        const n = function(e) {
                            switch (e) {
                            case "small":
                                return "smallStoryCard";
                            case "medium":
                                return "mediumStoryCard";
                            case "large":
                                return "largeStoryCard";
                            case "card":
                                return "phone" === il || "pad" === il ? "editorialStoryCard": null;
                            default:
                                return null
                            }
                        } (ne(e, "displayStyle")),
                        r = W(e, "contents"),
                        o = {
                            metricsLocationTracker: i.metricsLocationTracker,
                            metricsPageInformation: i.metricsPageInformation
                        };
                        c = "editorialStoryCard" === n ? un(r, i, o) : cn(r, n, i, o),
                        i.shelfStyle = n,
                        Sn(c, i),
                        Pa(t.metricsLocationTracker),
                        p = !0;
                        break
                    }
                case 480:
                    c = function(e, t, n) {
                        const r = ne(e, "displayStyle"),
                        i = W(e, "contents");
                        switch (r) {
                        case "small":
                            return mn(i, t);
                        case "hero":
                            return pn(i, !0, t, n);
                        case "large":
                            return pn(i, !1, t, n);
                        default:
                            return null
                        }
                    } (e, i, t),
                    0 === t.shelves.length && (c.presentationHints = {
                        isFirstShelf: !0
                    }),
                    u = !1;
                    break;
                case 500:
                    if (s(t.recentlyPlayedGamesData)) {
                        const n = "tv" === il,
                        r = t.shouldReduceSmallLockupShelfHeightToContent;
                        t.shouldReduceSmallLockupShelfHeightToContent = !n,
                        tn({
                            id: e.id,
                            type: "editorial-elements",
                            attributes: {
                                editorialElementKind: 418,
                                displayStyle: n ? "large": "small",
                                name: P("CONTINUE_PLAYING"),
                                doNotFilter: !0
                            },
                            relationships: {
                                contents: t.recentlyPlayedGamesData
                            }
                        },
                        t),
                        t.shouldReduceSmallLockupShelfHeightToContent = r
                    }
                    break;
                default:
                    if (yn(n)) {
                        const r = !ie(e, "doNotFilter"),
                        s = ne(e, "chartHref"),
                        u = ne(e, "chart"),
                        d = j(e, "room"),
                        f = H(e, "contents");
                        let h = f ? f.data: null;
                        if (wn(n)) {
                            if (!t.hasAuthenticatedUser && !i.isSearchGrouping) {
                                console.log(`Skipping recommendations shelf with fcID $ {
                                    n
                                }: No user logged - in`);
                                break
                            }
                            if (o(h) && (i.recommendationsHref = e.href), ie(e, "noPersonalizationAvailable")) break
                        }
                        if (h && 0 !== h.length || (h = W(e, "children")), l(s)) {
                            const e = function(e, t = host.clientIdentifier) {
                                const n = new ph(e).includingAttributes(["isAppleWatchSupported", "requiredCapabilities", "minimumOSVersion"]);
                                return t === Xs ? n.addingContext("watch") : t === Zs && n.addingContext("messages"),
                                n
                            } (new Fl(s).param(vl.chartIdentifier, u).toString());
                            if (l(t.topChartIdentifiers)) {
                                const n = t.topChartIdentifiers.join(",");
                                e.addingQuery(vl.chartIdentifiers, n)
                            }
                            i.seeAllUrl = M(e).toString()
                        } else l(d) && (i.seeAllUrl = Ne(d.href));
                        i.shouldFilter = r,
                        i.shelfStyle = function(e, t, n) {
                            if (418 === e || wn(e)) {
                                let t = ne(n, "displayStyle");
                                return t || (t = 311 === e || 312 === e ? "large": "small"),
                                `$ {
                                    t
                                }
                                Lockup`
                            }
                            if (431 === e) return "inAppPurchaseTiledLockup";
                            if (429 === e) return "screenshotsLockup";
                            if (304 === e || 305 === e || 430 === e || 420 === e) return "appTrailerLockup";
                            if (Tn(e)) return "smallLockup";
                            switch (t.shelves.length % 3) {
                            case 0:
                                return "smallLockup";
                            case 1:
                                return "mediumLockup";
                            default:
                                return "largeLockup"
                            }
                        } (i.featuredContentId, t, e),
                        a.displayStyle = i.shelfStyle,
                        Tn(n) && (i.showOrdinals = !0, i.shouldFilter = !1),
                        i.clientIdentifierOverride = ot(e),
                        ka(a, i.title),
                        c = fn(h, i),
                        Pa(t.metricsLocationTracker),
                        p = !0;
                        break
                    }
                    console.warn("Unknown featured content ID:", n)
                }
                const f = l(i.remainingItems),
                h = s(i.recommendationsHref),
                m = f || h;
                c && (l(c.items) || m) && (u && vo(c, a), t.isSearchGrouping && (c.seeAllAction = null), l(c.url) && l(t.additionalShelfParameters) && (c.url = Fl.from(c.url).append("query", t.additionalShelfParameters).build()), t.shelves.push(c)),
                p && va(t.metricsLocationTracker)
            })
        }
        function nn(e, t) {
            const n = W(e, "children");
            for (const e of n) tn(e, t)
        }
        function rn(e) {
            const t = oe(e, "editorialElementKind");
            switch (t) {
            case 425:
            case 415:
            case 416:
            case 417:
            case 258:
            case 421:
            case 422:
            case 423:
            case 261:
                return ze(H(e, "children"));
            case 437:
            case 265:
                {
                    const t = H(e, "children"),
                    n = te(e, "links");
                    return l(t) ? ze(t) : l(n) ? ze(e) : null
                }
            default:
                if (yn(t)) {
                    let t = H(e, "contents");
                    if (o(t)) return null;
                    const n = t.data;
                    return n && 0 !== n.length || (t = H(e, "children")),
                    ze(t)
                }
                return console.warn("Unknown featured content ID:", t),
                null
            }
        }
        function on(e, t, n) {
            const r = [],
            o = [],
            a = new wu("brick");
            a.isHorizontal = !0;
            for (const n of e) {
                const e = {
                    targetType: "brick",
                    pageInformation: t.metricsPageInformation,
                    locationTracker: t.metricsLocationTracker,
                    recoMetricsData: ze(n)
                },
                i = Pn(n, t, e);
                if (!i) {
                    o.push(n);
                    continue
                }
                const a = new eu;
                if (i.artwork && 261 !== t.featuredContentId) {
                    let e = h(i.artwork, "subscriptionHero");
                    e || (e = h(i.artwork, "originalFlowcaseBrick")),
                    a.artwork = In(e, 17)
                } else a.artwork = bn(n, 1060, 520, 17);
                a.accessibilityLabel = i.title,
                a.shortEditorialDescription = i.title,
                a.clickAction = i.action,
                435 === oe(n, "editorialElementKind") && (a.personalizationStyle = "mso"),
                vo(a, Oo(n, i.title, e)),
                a.isValid() && (r.push(a), va(e.locationTracker))
            }
            return s(n) && (a.presentationHints = {
                showSupplementaryText: n
            }),
            delete t.maxItemCount,
            s(i(t.featuredContentData, "relationships.children.data")) && (t.featuredContentData.relationships.children.data = o),
            a.title = t.title,
            a.subtitle = t.subtitle,
            a.items = r,
            Sn(a, t),
            a
        }
        function an(e, t) {
            const n = [];
            for (const r of e) {
                const e = j(r, "grouping");
                if (o(e)) continue;
                const i = En(e);
                if (o(r.attributes) || o(e.attributes) || On(t)) {
                    t.isDeferring = !0,
                    t.remainingItems.push(e);
                    continue
                }
                const a = {
                    targetType: "listItem",
                    pageInformation: t.metricsPageInformation,
                    locationTracker: t.metricsLocationTracker,
                    recoMetricsData: ze(r)
                },
                s = no(e, Object.assign(Object.assign({},
                a), {
                    id: i
                }), t.clientIdentifierOverride);
                vo(s, Object.assign(Object.assign({},
                a), {
                    kind: "link",
                    softwareType: null,
                    title: s.title,
                    id: i
                }));
                const c = ee(e, "artwork");
                l(c) && (s.artwork = Do(c, {
                    allowingTransparency: !0,
                    useCase: 19
                })),
                n.push(s),
                va(t.metricsLocationTracker)
            }
            "mac" === il && Cn(n);
            const r = function(e, t) {
                const n = new wu("action");
                let r;
                switch (il) {
                case "tv":
                    n.isHorizontal = !0,
                    r = 7;
                    break;
                case "mac":
                    n.isHorizontal = !1,
                    r = null;
                    break;
                default:
                    n.isHorizontal = !1,
                    r = 6
                }
                if (null !== r && e.length > r) {
                    n.items = e.slice(0, r);
                    const i = new Jl("page");
                    i.title = P("ACTION_SEE_ALL"),
                    Na(i, null, {
                        pageInformation: t.metricsPageInformation,
                        locationTracker: t.metricsLocationTracker
                    }),
                    n.seeAllAction = i;
                    const o = new wu("action");
                    o.isHorizontal = !1,
                    Cn(e),
                    o.items = e;
                    const a = new cp([o]);
                    a.title = P("PAGE_TITLE_CATEGORIES"),
                    i.pageData = a
                } else n.items = e;
                return n
            } (n, t);
            return r.title = t.title,
            r.subtitle = t.subtitle,
            Sn(r, t),
            r
        }
        function sn(e, t) {
            const n = new wu("editorialCard");
            n.isHorizontal = !0,
            t.relationshipDataToFetch = "contents";
            const r = [];
            for (const n of e) {
                const e = {
                    targetType: "hero",
                    pageInformation: t.metricsPageInformation,
                    locationTracker: t.metricsLocationTracker,
                    recoMetricsData: ze(n),
                    id: n.id,
                    idType: "editorial_id"
                },
                i = Pn(n, t, e, () = >{
                    t.remainingItems.push(n)
                });
                if (!i) continue;
                l(i.content) && (e.adamId = i.content.id);
                const o = new Zc;
                let a = ne(n, "designBadge");
                a || (a = i.caption),
                o.caption = a;
                let s = ne(n, "title");
                s || (s = i.title),
                o.title = s;
                let c = Rn(ne(n, "designTag"));
                if (c || (c = i.subtitle), o.subtitle = c, i.artwork && 258 !== t.featuredContentId) {
                    const e = h(i.artwork, "subscriptionHero");
                    o.artwork = In(e, 18)
                } else o.artwork = bn(n, 416, 204, 18);
                o.clickAction = i.action,
                vo(o, Oo(n, i.title, e)),
                o.isValid() && (r.push(o), va(t.metricsLocationTracker))
            }
            return delete t.maxItemCount,
            n.items = r,
            Sn(n, t),
            n
        }
        function ln() {
            if (Vl && Vl.isManagedAppleID) return null;
            if ("watch" === il) {
                const e = new wu("action"),
                t = [],
                n = new Jl("account");
                return n.title = P("ACCOUNT", "Account"),
                n.artwork = it("systemimage://person.crop.circle"),
                t.push(n),
                e.items = t,
                e
            } {
                const e = new wu("titledButtonStack"),
                t = [],
                n = P("FOOTER_REDEEM", "Redeem"),
                r = new Jl("finance");
                r.pageUrl = "redeem";
                const i = new au(n, r);
                if (t.push(i), Is.isMonetaryGiftingEnabled) {
                    const e = P("FOOTER_SEND_GIFT", "Send Gift"),
                    n = new Jl("finance");
                    n.pageUrl = "gift";
                    const r = new au(e, n);
                    t.push(r)
                }
                const o = Is.accountTopUpURL;
                if (o) {
                    const e = P("FOOTER_ADD_MONEY"),
                    n = new Jl("finance");
                    n.pageUrl = o;
                    const r = new au(e, n);
                    t.push(r)
                }
                const a = new ou(t);
                return a.compactLineBreaks = a.buttons.map((e, t) = >t),
                e.items = [a],
                e
            }
        }
        function cn(e, t, n, r) {
            let i;
            if (y("smallStoryCards") && "smallStoryCard" === t) i = t;
            else switch (il) {
            case "mac":
            case "tv":
                i = t;
                break;
            case "watch":
                i = "todayCard";
                break;
            default:
                i = "todayBrick"
            }
            return Dt(e, i, n.title, n.subtitle, r, (function(e) {
                return n.remainingItems.push(e),
                !1
            }))
        }
        function un(e, t, n) {
            const r = [];
            let i = !1;
            for (const a of e) {
                if (!ae(a) || i) {
                    t.remainingItems.push(a),
                    i = !0;
                    continue
                }
                const e = Do(ee(a, "editorialArtwork.mediaCard"), {
                    cropCode: "fn",
                    withJoeColorPlaceholder: !0,
                    useCase: 16
                });
                if (o(e)) continue;
                const l = ne(a, "editorialNotes.name"),
                c = ne(a, "label"),
                u = ne(a, "editorialNotes.short"),
                p = new Tu(l, e, c, u),
                d = jt(a, {
                    pageInformation: n.metricsPageInformation,
                    locationTracker: n.metricsLocationTracker
                },
                null);
                s(d) && (p.clickAction = d.clickAction);
                const f = Y(e.backgroundColor) ? "dark": "light";
                p.shelfBackground = {
                    type: "artwork",
                    artwork: e,
                    style: f
                },
                r.push(p),
                va(n.metricsLocationTracker)
            }
            const a = new wu("editorialStoryCard");
            return a.title = t.title,
            a.items = r,
            a.background = {
                type: "interactive"
            },
            a
        }
        function pn(e, t, n, r) {
            const i = new wu("largeHeroBreakout");
            i.isHorizontal = !1;
            const s = l(r) && a(r.pageTitleEffect) && 0 === r.shelves.length,
            c = [];
            for (const i of e) {
                if (o(i.attributes) || On(n)) {
                    n.isDeferring = !0,
                    n.remainingItems.push(i);
                    continue
                }
                const e = j(i, "primary-content");
                if (Li(i) && !ae(e)) {
                    n.isDeferring = !0,
                    n.remainingItems.push(i),
                    n.relationshipDataToFetch = "primary-content";
                    continue
                }
                const u = {
                    targetType: t ? "heroBreakout": "largeBreakout",
                    pageInformation: n.metricsPageInformation,
                    locationTracker: n.metricsLocationTracker,
                    recoMetricsData: ze(i)
                },
                p = Di(i),
                d = Ri(i);
                if (a(p.video) && a(d.artwork)) continue;
                const f = p.artworkData || d.artworkData,
                h = p.backgroundColor || d.backgroundColor,
                m = t ? null: ne(i, "breakoutBadge"),
                g = ne(i, "label");
                let y = {
                    type: "none"
                };
                l(g) && (y = {
                    type: "text",
                    title: g
                });
                const w = la(i, "name") || ye(e, "name"),
                T = la(i, "short") || ye(e, "tagline"),
                A = ki(i, !0, s, !1),
                I = Ci(i, s, !1),
                b = new hu(w, T, y, null, A, vi(I, i)),
                S = new mu(b, {
                    position: I || "leading"
                },
                m, d.artwork, p.video, h),
                k = Oo(i, S.details.title, u);
                vo(S, k),
                ka(k, S.details.title);
                const P = Fi(i);
                xa(P, {
                    pageInformation: n.metricsPageInformation,
                    locationTracker: n.metricsLocationTracker,
                    recoMetricsData: ze(i),
                    targetType: "button",
                    id: i.id
                }),
                S.details.callToActionButtonAction = P,
                S.clickAction = P,
                Pa(u.locationTracker),
                c.push(S),
                s && (r.pageTitleEffect = _n(f))
            }
            return i.items = c,
            Sn(i, n),
            va(n.metricsLocationTracker),
            i
        }
        function dn(e, t) {
            if (ie(e, "hide")) return null;
            const n = [],
            r = new wu("action");
            r.isHorizontal = !1;
            const i = W(e, "children"),
            s = l(i),
            c = te(e, "links");
            let u = [];
            s ? u = i: l(c) && (u = c);
            for (let e = 0; e < u.length; e++) {
                const r = u[e];
                if (o(r)) continue;
                const i = {
                    targetType: "link",
                    pageInformation: t.metricsPageInformation,
                    locationTracker: t.metricsLocationTracker
                };
                s && (i.recoMetricsData = ze(r));
                let l = null;
                if (t.isSearchGrouping) {
                    const n = vn(r, t.metricsLocationTracker);
                    vo(n.action, Object.assign(Object.assign({},
                    i), {
                        kind: "link",
                        softwareType: null,
                        title: n.action.title,
                        id: `$ {
                            e
                        }`,
                        idType: "sequential"
                    })),
                    l = n
                } else {
                    const e = Pn(r, t, i);
                    if (a(e) || a(e.action.title)) continue;
                    l = e.action;
                    const n = En(r);
                    n && vo(l, Object.assign(Object.assign({},
                    i), {
                        kind: "link",
                        softwareType: null,
                        title: l.title,
                        id: n
                    }))
                }
                a(l) || (n.push(l), va(t.metricsLocationTracker))
            }
            return r.items = n,
            r.title = t.title,
            r.subtitle = t.subtitle,
            r.presentationHints = {
                isWidthConstrained: !0
            },
            Sn(r, t),
            a(r.items) ? null: r
        }
        function fn(e, t) {
            let n = [];
            const r = new wu(t.shelfStyle);
            let i,
            a;
            r.isHorizontal = !0,
            l(t) && (i = t.clientIdentifierOverride);
            for (const r of e) {
                if (o(r.attributes) || On(t)) {
                    t.isDeferring = !0,
                    t.remainingItems.push(r);
                    continue
                }
                if (Re(r)) continue;
                let e;
                t.showOrdinals && (e = E(t.ordinalIndex));
                let a = null; ! s(t.shelfBackground) || "color" !== t.shelfBackground.type && "interactive" !== t.shelfBackground.type || (a = "white");
                const l = {
                    ordinal: e,
                    metricsOptions: {
                        pageInformation: t.metricsPageInformation,
                        locationTracker: t.metricsLocationTracker,
                        recoMetricsData: ze(r)
                    },
                    clientIdentifierOverride: i,
                    artworkUseCase: Ro(t.shelfStyle),
                    offerStyle: a,
                    canDisplayArcadeOfferButton: fa(t.shelfStyle)
                };
                let c;
                c = "appTrailerLockup" === t.shelfStyle ? Qi(r, l, wp) : "screenshotsLockup" === t.shelfStyle ? Ki(r, l) : zi(r, l),
                c && c.isValid() && (n.push(c), va(t.metricsLocationTracker), t.ordinalIndex++)
            }
            if (Tn(t.featuredContentId) && (n = at(n, 3)), delete t.maxItemCount, Tn(t.featuredContentId)) a = new Jl("topCharts");
            else {
                a = new Jl("page");
                const e = function(e) {
                    if (!e) return null;
                    switch (e) {
                    case "inAppPurchaseLockup":
                    case "inAppPurchaseTiledLockup":
                        return e;
                    default:
                        return null
                    }
                } (t.shelfStyle);
                a.pageData = kp.seeAllPage(t.title, e)
            }
            a.pageUrl = t.seeAllUrl,
            a.title = P("ACTION_SEE_ALL"),
            a.referrerUrl = t.metricsPageInformation.pageUrl,
            Na(a, t.seeAllUrl, {
                pageInformation: t.metricsPageInformation,
                locationTracker: t.metricsLocationTracker
            }),
            function(e, t, n) {
                return "tv" !== n || !l(t.remainingItems) && !(!Tn(t.featuredContentId) || !l(e))
            } (n, t, il) && (r.seeAllAction = a),
            r.title = t.title,
            r.subtitle = t.subtitle,
            r.items = n,
            r.shouldFilterApps = t.shouldFilter,
            Sn(r, t),
            "screenshotsLockup" !== t.shelfStyle && "appTrailerLockup" !== t.shelfStyle || (o(r.presentationHints) ? r.presentationHints = {
                showSupplementaryText: !0
            }: r.presentationHints = Object.assign(Object.assign({},
            r.presentationHints), {
                showSupplementaryText: !0
            }));
            const c = r.items.length + t.remainingItems.length;
            return t.shouldReduceSmallLockupShelfHeightToContent && !t.shouldFilter && "smallLockup" === t.shelfStyle && c < 3 && (r.rowsPerColumn = c),
            r
        }
        function hn(e, t) {
            t.isFirstRender = !1,
            t.isDeferring = !1,
            t.remainingItems = [];
            let n = new wu("mediumLockup");
            const r = t.featuredContentId;
            switch (r) {
            case 415:
            case 416:
            case 417:
            case 258:
                n = sn(e.data, t);
                break;
            case 425:
                {
                    const r = j(t.featuredContentData, "children");
                    r && (n = an(kn(e.data, W(r, "children")), t));
                    break
                }
            case 421:
            case 422:
            case 423:
            case 261:
                n = on(kn(e.data, W(t.featuredContentData, "children")), t);
                break;
            case 437:
            case 265:
                n = dn(t.featuredContentData, t);
                break;
            case 475:
                {
                    const r = {
                        metricsLocationTracker: t.metricsLocationTracker,
                        metricsPageInformation: t.metricsPageInformation
                    };
                    n = "editorialStoryCard" === t.shelfStyle ? un(e.data, t, r) : cn(e.data, t.shelfStyle, t, r);
                    break
                }
            case 480:
                switch (ne(t.featuredContentData, "displayStyle")) {
                case "small":
                    n = mn(e.data, t);
                    break;
                case "hero":
                    n = pn(e.data, !0, t, null);
                    break;
                case "large":
                    n = pn(e.data, !1, t, null)
                }
                break;
            default:
                if (yn(r)) {
                    n = fn(e.data, t);
                    break
                }
                console.warn("Unknown featured content ID:", t.featuredContentId)
            }
            if (t.remainingItems.length) {
                const e = t.remainingItems.map(e = >e.id);
                console.warn("Could not load items for: " + e.join(","))
            }
            return n && (n.mergeWhenFetched = !0, n.networkTimingMetrics = e[bs.timingValues]),
            t.hasExistingContent || 0 !== n.items.length || (n.isHidden = !0),
            t.isSearchGrouping && (n.seeAllAction = null),
            n
        }
        function mn(e, t) {
            const n = new wu("smallBreakout");
            n.isHorizontal = !1;
            const r = [];
            for (const n of e) {
                if (o(n.attributes) || On(t)) {
                    t.isDeferring = !0,
                    t.remainingItems.push(n);
                    continue
                }
                const e = j(n, "primary-content");
                if (Li(n) && !ae(e)) {
                    t.isDeferring = !0,
                    t.remainingItems.push(n),
                    t.relationshipDataToFetch = "primary-content";
                    continue
                }
                const i = {
                    targetType: "smallBreakout",
                    pageInformation: t.metricsPageInformation,
                    locationTracker: t.metricsLocationTracker,
                    recoMetricsData: ze(n)
                },
                a = ne(n, "label");
                let s = {
                    type: "none"
                };
                l(a) && (s = {
                    type: "text",
                    title: a
                });
                const c = la(n, "name") || ye(e, "name"),
                u = la(n, "short") || ye(e, "tagline"),
                p = xo(e, {
                    useCase: 5,
                    withJoeColorPlaceholder: !0
                }),
                f = z(d(ce(e, Ae(n), "artwork"), "textColor4")) || p.backgroundColor,
                h = new hu(c, u, s, null, Pi(f), null),
                m = new gu(h, p, f),
                g = Oo(n, m.details.title, i);
                vo(m, g),
                ka(g, m.details.title);
                const y = Fi(n);
                xa(y, {
                    pageInformation: t.metricsPageInformation,
                    locationTracker: t.metricsLocationTracker,
                    recoMetricsData: ze(n),
                    targetType: "button",
                    id: n.id
                }),
                m.details.callToActionButtonAction = y,
                m.clickAction = y,
                Pa(i.locationTracker),
                r.push(m)
            }
            return n.items = r,
            Sn(n, t),
            va(t.metricsLocationTracker),
            n
        }
        function gn(e, t = !0) {
            const n = new Zl(e),
            r = P("TERMS_AND_CONDITIONS_TITLE"),
            i = new qc(r);
            i.clickAction = n,
            i.presentationStyle = ["hasChevron", "textLightensOnHighlight"],
            t && i.presentationStyle.push("hasSeparator");
            const o = new wu("footnote");
            if (o.items = [i], Is.emailSupportLinkURL) {
                const e = new Zl(Is.emailSupportLinkURL),
                n = new qc("Email Support");
                n.clickAction = e,
                n.presentationStyle = ["hasChevron", "textLightensOnHighlight"],
                t && n.presentationStyle.push("hasSeparator"),
                o.items.push(n)
            }
            return o
        }
        function yn(e) {
            return Tn(e) || wn(e) || 418 === e || 431 === e || 429 === e || 430 === e || 420 === e || 304 === e || 305 === e || 260 === e
        }
        function wn(e) {
            return 311 === e || 312 === e || 476 === e
        }
        function Tn(e) {
            switch (e) {
            case 117:
            case 122:
            case 118:
            case 195:
            case 194:
            case 197:
            case 369:
            case 370:
            case 371:
            case 372:
            case 373:
            case 374:
            case 375:
            case 376:
            case 377:
            case 378:
            case 379:
            case 380:
            case 395:
            case 396:
            case 397:
            case 398:
            case 399:
            case 400:
            case 491:
            case 492:
            case 493:
            case 504:
            case 505:
            case 506:
                return ! 0;
            default:
                return ! 1
            }
        }
        function An(e) {
            switch (e) {
            case 504:
            case 505:
            case 506:
                return ! 0;
            default:
                return ! 1
            }
        }
        function In(e, t) {
            const n = Do(e, {
                useCase: t
            });
            return n && (n.crop = "sr"),
            n
        }
        function bn(e, t, n, r) {
            const i = ee(e, "artwork");
            if (i instanceof Array) {
                const e = function(e, t, n) {
                    const r = t / n;
                    let i = 0,
                    o = null;
                    for (const n of e) {
                        const e = f(n, "width"),
                        a = e / f(n, "height"); (a === r || Math.abs(r - a) <= Math.abs(r - i)) && (!o || e <= t && e > o.width || o.width > t && e < o.width && e > o.width) && (o = n, i = a)
                    }
                    return o ? it(d(o, "url"), f(o, "width"), f(o, "height"), null, d(o, "checksum")) : null
                } (i, t, n);
                return e.crop = "bb",
                e
            }
            return null != i ? In(i, r) : null
        }
        function Sn(e, t) {
            t.hasExistingContent = t.hasExistingContent || l(e.items) && t.isFirstRender,
            (t.remainingItems.length || t.recommendationsHref) && t.isFirstRender && (e.url = `$ {
                kl.internal
            }: /${Pl.grouping}/$ {
                Pl.shelf
            }
            /`+encodeURIComponent(JSON.stringify(t)))}function kn(e,t){const n={};for(const t of e)n[t.id]=t;const r=["contents","grouping"],i=[];for(const e of t){let t=!0;for(const i of r){const r=W(e,i);if(s(r)){const o=[];for(const e of r){const t=n[e.id];l(t)&&o.push(t)}o.length===r.length?e.relationships[i]={data:o}:t=!1}}t&&i.push(e)}return i}function Pn(e,t,n,r){const i=l(d(e,"url")),a=l(ne(e,"link.url")),c=G(e,"contents",!1);if(a||i)return function(e,t,n,r){const i=s(d(e,"url"))?e:ee(e,"link");if(o(i)||On(t))return a=e,r?r():t.remainingItems.push(a),null;var a;const l=d(i,"target"),c=d(i,"url"),u=d(i,"label"),p=Rn(ne(e,"designTag"))||u;let f=null;if("external"===l)f=new Zl(c),f.title=p;else{const e=Ai(c),t=new Jl(e);t.pageUrl=c,t.title=p,f=t}return f.presentationStyle=["textFollowsTintColor"],xa(f,Object.assign(Object.assign({},n),{id:""})),{action:f,caption:null,title:p,subtitle:null,artwork:null,shortEditorialDescription:null}}(e,t,n,r);if(c){const i=j(e,"contents");if(o(i))return null;if(o(i.attributes)||On(t))return t.isDeferring=!0,function(e){r?r():t.remainingItems.push(e)}(i),null;let a=sa(i,"tagline")||ji(i);const s=no(i,Da(i,n),t.clientIdentifierOverride);s.presentationStyle=["textFollowsTintColor"];const l=Rn(ne(e,"designTag"));s.title=l||s.title;let c=null,u=null;const p=ne(i,"itunesNotes.short");switch(i.type){case"groupings":c=ee(i,"artwork");break;case"editorial-items":{u=ne(i,"label"),u&&(u=u.replace(/\n / g, " "));
            const e = j(i, "contents"),
            t = d(i, "editorialNotes.tagline");
            t ? a = t: e && (a = sa(e, "short")),
            s.title = s.title || a || u
        }
    default:
        c = me(i, "editorialArtwork") || ee(i, "editorialArtwork")
    }
    return {
        action: s,
        caption: u,
        title: s.title,
        subtitle: a,
        artwork: c,
        shortEditorialDescription: p,
        content: i
    }
}
return null
}
function Cn(e) {
    e.sort((e, t) = >{
        try {
            return e.title.localeCompare(t.title, bl, {
                usage: "sort"
            })
        } catch(e) {
            return 0
        }
    })
}
function vn(e, t) {
    const n = d(e, "label");
    if (a(n)) return null;
    const r = new tp(n, null, "suggested");
    return Ua(r, n, t),
    va(t),
    new Ic(r)
}
function En(e) {
    let t = ne(e, "adamId");
    return t || (t = ne(e, "contentId")),
    t || (t = ne(e, "id")),
    t
}
function On(e) {
    return e.isDeferring && e.isFirstRender
}
function _n(e, t = !1) {
    if (a(e)) return null;
    let n = null;
    const r = K("white"),
    i = K("black"),
    o = z(d(e, "bgColor")),
    s = u(e, "textGradient").map(e = >z(e)),
    l = Pi(o);
    if (2 === s.length) {
        n = new Ks("horizontalGradient");
        const e = s[0],
        r = s[1];
        n.gradientStartColor = Q(e, e),
        n.gradientEndColor = Q(r, r),
        n.filter = "plusLight",
        t || (n.accessoryColor = n.gradientEndColor)
    } else n = new Ks("color"),
    n.color = "dark" === l ? r: i,
    t || (n.accessoryColor = n.color),
    n.isFallbackStyle = !0;
    return "tv" === il && (n.accessoryColor = r),
    n
}
function Rn(e) {
    if (o(e)) return null;
    const t = e.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#96;/g, "`").replace(/\r\n/g, " ").replace(/&nbsp;/g, " ").replace(/<span>/g, "").replace(/<\/span>/g, "").replace(/<br>/g, " ").replace(/\u23ce/g, "").replace(/<i>/g, "").replace(/<\/i>/g, "").replace(/<b>/g, "").replace(/<\/b>/g, "");
    return t.match(/^\s*$/) ? null: t
}
function Dn(e) {
    const t = new Xl("arcade");
    t.popToRoot = !0;
    const n = new ec([t]);
    return n.title = e,
    n
}
function Ln(e) {
    return As.c("developerPageFromResponse", () = >{
        const t = e.data.length ? e.data[0] : null;
        if (!t) return null;
        const n = Ke("Artist", t.id, e),
        r = function(e, t, n) {
            switch (il) {
            case "mac":
                return xn("screenshotsLockup", e, xu, xu, t, n);
            case "watch":
                return xn("smallLockup", e, Nu, P("DEVELOPER_WATCH"), t, n);
            default:
                return function(e, t, n) {
                    let r,
                    i;
                    switch (function(e) {
                        const t = ["ios-apps", "atv-apps"];
                        if ("iOS" !== host.platform) return;
                        const n = H(e, "arcade-apps");
                        if (o(n)) return;
                        const r = He(n);
                        if (o(r)) return;
                        const i = r.map(e = >e.id);
                        for (const n of t) {
                            const t = H(e, n);
                            if (o(t)) continue;
                            const r = He(t);
                            o(t) || (e.relationships[n].data = r.filter(e = >!i.includes(e.id)))
                        }
                    } (e), il) {
                    case "tv":
                        r = "mediumLockup",
                        i = 2;
                        break;
                    default:
                        r = "smallLockup",
                        i = 1
                    }
                    let l = 0;
                    const c = [];
                    for (const o of Td) {
                        const d = H(e, o),
                        f = u(d, "data"),
                        h = f.length;
                        if (0 === h) continue;
                        let m,
                        g = !1;
                        "imessage-apps" === o ? m = Zs: "watch-apps" === o ? m = Xs: "atv-apps" === o ? (m = tl, "tv" !== il && (g = !0)) : m = Js;
                        const y = Fn(o, e);
                        ka({
                            pageInformation: t,
                            locationTracker: n,
                            idType: "sequential",
                            id: `$ {
                                l
                            }`,
                            targetType: "swoosh"
                        },
                        y);
                        const w = {
                            excludeIconInSidepacksIfNotTvOnly: g,
                            lockupOptions: {
                                metricsOptions: {
                                    pageInformation: t,
                                    locationTracker: n
                                },
                                clientIdentifierOverride: m,
                                artworkUseCase: i
                            },
                            filter: 14068
                        },
                        T = Nn(f, r, w);
                        if (T.title = y, d.next) {
                            const r = new Jl("page"),
                            i = new wd;
                            i.title = y,
                            i.href = d.href,
                            i.developerId = e.id,
                            i.relationshipId = o,
                            r.pageUrl = s(p = i) ? `$ {
                                kl.internal
                            }: /${Pl.developer}/$ {
                                Pl.room
                            }
                            /`+encodeURIComponent(JSON.stringify(p)):null,r.title=P("ACTION_SEE_ALL"),T.seeAllAction=r,Na(r,r.pageUrl,{pageInformation:t,locationTracker:n}),r.pageData=kp.seeAllPage(y)}if("latest-release-app"===o&&0===h)continue;const A=f.filter(e=>a(e.attributes)),I=T.items.length+A.length;I<3&&(T.rowsPerColumn=I);const b={id:null,kind:null,softwareType:null,targetType:"swoosh",title:T.title,pageInformation:t,locationTracker:n,idType:null};if(Pa(n),vo(T,b),va(n),A.length){const e=new yd;e.contentType="smallLockup",e.remainingData=A,e.lockupListOptions=w,T.url=`${kl.internal}:/$ {
                                Pl.developer
                            }
                            /${Pl.shelf}/` + encodeURIComponent(JSON.stringify(e))
                        }
                        T.items.length > 0 && (c.push(T), l++)
                    }
                    var p;
                    return c
                } (e, t, n)
            }
        } (t, n, {
            rootPosition: 0,
            locationStack: []
        });
        1 === r.length && (r[0].isHorizontal = !1);
        const i = sa(t, "standard");
        if (i) {
            const e = new zs(i, "text/x-apple-as3-nqml"),
            t = new wu("paragraph");
            t.items = [e],
            r.unshift(t)
        }
        const l = new cp(r);
        l.title = ne(t, "name"),
        "watch" !== il && (l.presentationOptions = ["prefersLargeTitle"]),
        Je(l, n);
        const c = ee(t, "editorialArtwork.bannerUber");
        return c && (l.uber = Do(c, {
            cropCode: "sr",
            useCase: 20
        })),
        l
    })
}
function Fn(e, t) {
    switch (e) {
    case "latest-release-app":
        return P("DEVELOPER_LATEST_RELEASE");
    case "system-apps":
        return P("DEVELOPER_SYSTEM_APPS");
    case "imessage-apps":
        return P("DEVELOPER_IMESSAGE");
    case "watch-apps":
        return P("DEVELOPER_WATCH");
    case "atv-apps":
        return P("DEVELOPER_TV");
    case "app-bundles":
        return P("DEVELOPER_BUNDLES");
    case "ios-apps":
        const e = ie(t, "hasApps"),
        n = ie(t, "hasGames");
        return P(e && n ? "DEVELOPER_APPS_AND_GAMES": n ? "DEVELOPER_GAMES": "DEVELOPER_APPS");
    case "arcade-apps":
        return P("ARCADE_LOCKUP_TITLE");
    default:
        return null
    }
}
function xn(e, t, n, r, i, o) {
    const s = W(t, n),
    l = {
        lockupOptions: {
            metricsOptions: {
                pageInformation: i,
                locationTracker: o
            },
            artworkUseCase: 1
        },
        filter: 14068
    };
    ka({
        pageInformation: i,
        locationTracker: o,
        idType: "sequential",
        id: "0",
        targetType: "swoosh"
    },
    r);
    const c = Nn(s, e, l),
    u = s.filter(e = >a(e.attributes)),
    p = {
        id: null,
        kind: null,
        softwareType: null,
        targetType: "swoosh",
        title: r,
        pageInformation: i,
        locationTracker: o,
        idType: null
    };
    if (Pa(o), vo(c, p), va(o), u.length) {
        const t = new yd;
        t.contentType = e,
        t.remainingData = u,
        t.lockupListOptions = l,
        c.url = `$ {
            kl.internal
        }: /${Pl.developer}/$ {
            Pl.shelf
        }
        /`+encodeURIComponent(JSON.stringify(t))}return[c]}function Nn(e,t,n){const r=new wu(t);switch(t){case"screenshotsLockup":r.items=function(e,t){return As.c("screenshotsLockupsFromData",()=>{if(!e)return[];const n=[];for(let r=0;r<e.length;r++){const i=e[r];if(o(i.attributes)){t.contentUnavailable&&t.contentUnavailable(i.id,r);continue}const a=t.lockupOptions;let s=14334;if(null!==t.filter&&(s=t.filter),Re(i,s))continue;const l=Ki(i,a);l.isValid()&&(n.push(l),va(t.lockupOptions.metricsOptions.locationTracker))}return n})}(e,n),r.isHorizontal=!1,r.presentationHints={showSupplementaryText:!1};break;case"smallLockup":default:r.items=to(e,n),r.isHorizontal="watch"!==il}return r}function Un(e){return As.c("shareSheetDataForProductFromProductData",()=>{if(o(e)||"watch"===il)return null;let t=ne(e,"url");const n=ne(e,"name"),r=ne(e,"artistName"),i=e.id,a=cl;if(!(t&&n&&r&&i))return null;let l=ne(e,"shortUrl"),c=null,u=null;const p=$o(e,4),d=Bo(e),f=ye(e,"subtitle")||r;s(e)&&ne(e,"url")&&(c=xo(e,{useCase:1}),u=function(e){return As.c("notesMetadataFromProductData",()=>{if(o(e))return null;const t=ne(e,"name");if(!t||0===t.length)return null;const n=ne(e,"url"),r=ne(e,"artistName"),i=ne(e,"genreNames.0"),a=Jo(e);let s;switch(e.type){case"apps":s="app";break;case"app-bundles":s="bundle";break;case"in-apps":s="iap";break;default:s=null}return new qs(t,n,r,i,a,s)})}(e));let h=null;switch(host.clientIdentifier){case Zs:h="messages";break;case Xs:h="watch"}if(h){const e=new Fl(t);if(e.param(_l.clientSpecifier,h),t=e.toString(),l){const e=new Fl(l);e.param(_l.clientSpecifier,h),l=e.toString()}}const m=new Hs(i,a,n,"iOS",c,p,d,!1,f,null,null,u);return new js(m,t,l)})}function Mn(e){const t=new Set,n=Ge(e),r=W(n,"canvas");for(const e of r){let r;if(r=$n(e,n),l(r))for(const e of r)t.add(e)}return t}function Bn(e){let t;return"upsellForNonacquisitionCanvas"===e&&(t=Wa("arcadeTodayCard")),"arcadeIcons"===e&&(t=ja(10)),o(t)?null:$(t).catch(()=>null)}function $n(e,t){if("AppMarker"!==ne(e,"displayType"))return null;const n=ne(e,"appMarkerType"),r=o(Ka(t)),i=[];return"Acquisition"===n&&("iOS"===host.platform&&i.push("arcadeIcons"),r&&i.push("upsellForNonacquisitionCanvas")),i}function Vn(e,t,n){return As.b(`module: ${n.module}`,()=>{let r;switch(n.module){case"Header":n.titleForNextShelf=ne(e,"editorialCopy"),r=null;break;case"TextBlock":r=function(e,t){const n=ne(e,"editorialCopy");if(!n)return null;const r=new zs(n,"text/x - apple - as3 - nqml ","article ");jn(r,t);const i=new wu("paragraph ");return i.items=[r],i}(e,n);break;case"CollectionLockup ":r=function(e,t){const n=ie(e,"showOrdinals "),r="OrdinalDesc "===ne(e,"collectionLockupDisplayType ")?"descending ":"ascending ",i=ne(e,"collectionLockupSize ");let o;if(t.subStyle=i,i)switch(i){case"Large ":o="largeLockup ";break;case"Medium ":o="mediumLockup ";break;case"Small ":default:o="smallLockup "}const a={metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},clientIdentifierOverride:t.clientIdentifierOverride,artworkUseCase:Ro(o),canDisplayArcadeOfferButton:fa(o)},s=to(W(e,"contents "),{includeOrdinals:n,ordinalDirection:r,lockupOptions:a});if(!s||0===s.length)return null;const l=new wu(o);return l.items=s,l}(e,n);break;case"InlineImage ":r=function(e,t){const n=ne(e,"inlineImageDisplayType "),r=Do(ee(e,"artwork "),{useCase:13,allowingTransparency:"FullWidth "===n});if(!r)return null;const i=new su(r,!1,"text / x - apple - as3 - nqml ");if(i.caption=ne(e,"editorialCopy "),t.subStyle=n,n)switch(n){case"BoundingBox ":i.isFullWidth=!1,i.hasRoundedCorners=!0;break;case"FullWidth ":default:i.isFullWidth=!0,i.hasRoundedCorners=!1}jn(i,t);const o=new wu("framedArtwork ");return o.items=[i],o}(e,n);break;case"AppLockup ":r=function(e,t){const n=Hn(e);if(!n)return null;const r=ne(e,"appLockupSize ");let i;t.subStyle=r;let o=!1;if(r)switch(r){case"Small ":i="smallLockup ",o=!0;break;case"Medium ":i="mediumLockup ",o=!0;break;case"Large ":default:"watch "===il||"tv "===il?(i="smallLockup ",o=!0):i="appShowcase "}let a=null;const s=dt(e);if(o){const e=new wu(i),r=zi(n,{metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},clientIdentifierOverride:t.clientIdentifierOverride,externalDeepLinkUrl:s,artworkUseCase:Ro(i)});e.items=[r],a=e}else a=function(e,t){const n=new wu("appShowcase "),r="tv "===il,i="tv "!==il,o=Hn(e),a=dt(e),s=zi(o,{offerStyle:"colored ",metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},clientIdentifierOverride:t.clientIdentifierOverride,externalDeepLinkUrl:a,artworkUseCase:1}),l=new Fc("large ",s);l.description=ji(o);let c=null;switch(ne(e,"appLockupVideo ")){case"AppTrailer ":{const e=Bo(o);e&&e.length>0&&(c=e[0]);break}}return c&&(ht(c,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,id:t.pageId}),l.video=c),r&&(l.screenshots=$o(o,14,[il])),i&&(n.background={type:"color ",color:Fc.backgroundColor}),n.items=[l],n}(e,t);return a}(e,n);break;case"TipBlock ":r=function(e,t){const n=Do(ee(e,"artwork "),{useCase:13});if(!n)return null;const r=ne(e,"editorialCopy "),i=ne(e,"tipNumber "),o=new su(n,!1,"text / x - apple - as3 - nqml ");o.isFullWidth=!1,o.hasRoundedCorners=!0,o.caption=r,o.ordinal=i,jn(o,t);const a=new wu("framedArtwork ");return a.items=[o],a}(e,n);break;case"PullQuote ":r=function(e,t){const n=ne(e,"quote "),r=ne(e,"quoteAttribution "),i=Do(ee(e,"artwork "),{useCase:13}),o="FullWidth "===ne(e,"pullQuoteDisplayType "),a=new uu(n,r,i,o);jn(a,t);const s=new wu("quote ");return s.items=[a],s}(e,n);break;case"HorizontalRule ":r=function(e,t){let n=K("defaultLine ");const r=ee(e,"customColor "),i=z(d(r,"lightMode ")),o=z(d(r,"darkMode "));a(i)||a(o)||(n=Q(i,o));const s=ne(e,"lineStyle "),l="FullWidth "===ne(e,"displayStyle "),c=new du(s,n,l),u=new wu("horizontalRule ");return u.items=[c],u}(e);break;case"InlineVideo ":r=function(e,t){const n=Do(ee(e,"video.previewFrame "),{useCase:13});if(!n)return null;const r=ne(e,"video.video ");if(!r)return null;const i="FullWidth "===ne(e,"inlineVideoDisplayType "),o=new Uc(r,n,wp);ht(o,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,id:t.pageId});const a=new lu(o,i,"text / x - apple - as3 - nqml ");a.caption=ne(e,"editorialCopy "),jn(a,t);const s=new wu("framedVideo ");return s.items=[a],s}(e,n);break;case"AppMedia ":r=function(e,t){const n=Hn(e);if(!n)return null;const r=ne(e,"appMediaOption "),i=ne(e,"appMediaPlatform ");switch(t.subStyle=r,r){case"Screenshots ":{let e=null;if("mac "===il){e=new wu("productMedia ");const t=Vo(n,14);s(t)&&t.length&&(e.items=t)}else if(e=new wu("screenshots "),o(i)){const t=$o(n,14);t&&t.length>0&&(e.items=[t[0]])}else{const t=function(e){switch(e){case"Watch ":return"watch ";case"iOS ":return"pad "===il?"pad ":"phone ";case"tvOS ":return"tv ";case"Messages ":return"messages ";default:return null}}(i);if(t){const r=$o(n,14,[t]);r&&r.length&&(e.items=[r[0]])}}return s(e)&&0===e.items.length?null:e}case"AppTrailers ":const e=new wu("framedVideo "),r=Bo(n);if(r&&r.length>0){const n=r[0];ht(n,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,id:t.pageId});const i=new lu(n,!1,"text / plain ",null,null,!0);return e.items=[i],e}return null;default:return null}}(e,n);break;case"LinkBlock ":r=function(e,t){const n=ne(e,"url ");if(!n)return null;const r=new Fl(n),i=ne(e,"urlTitle ");let o=ne(e,"editorialCopy ");o||(o=r.host);const a=["itunes.apple.com ","apps.apple.com ","music.apple.com ","books.apple.com ","podcasts.apple.com "];let s=!1;for(const e of a)r.host.endsWith(e)&&(s=!0);const l=new Zl(n);xa(l,{targetType:"link ",pageInformation:t.metricsPageInformation,id:`${t.index}`,locationTracker:t.metricsLocationTracker});const c=new tu(i,o,l,s);jn(c,t);const u=new wu("link ");return u.items=[c],u}(e,n);break;case"TextList ":r=function(e,t){const n=te(e,"editorialCopy ");if(!n.length)return null;const r=ne(e,"textListDisplayType ");t.subStyle=r;let i,o=!1;switch(r){case"Bulleted ":o=!0;break;default:o=!1}i=o?" < ul > ":" < ol > ";for(const e of n)i=`${i}<li>${e}</li>`;i=o?`${i}</ul>`:`${i}</ol>`;const a=new zs(i,"text / x - apple - as3 - nqml ","article ");jn(a,t);const s=new wu("paragraph ");return s.items=[a],s}(e,n);break;case"IAPLockup ":r=function(e,t){const n=Hn(e);if(!n)return null;const r=Yi(n,{metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},clientIdentifierOverride:t.clientIdentifierOverride,artworkUseCase:1});if(!r)return null;const i=new Nc(r),o=new wu("inAppPurchaseShowcase ");return o.background={type:"color ",color:Nc.backgroundColor},o.items=[i],o}(e,n);break;case"AppMarker ":r=function(e,t,n){const r=ne(e,"appMarkerType ");n.subStyle=r;let i=null;switch(r){case"OSUpgrade ":i=function(e,t){if("mac "!==il)return null;const n=_e(il);if(null===n)return null;const r=new Zl(n);xa(r,{targetType:"link ",pageInformation:t.metricsPageInformation,id:`${t.index}`,locationTracker:t.metricsLocationTracker});const i=P("CLIENT_CONTROL_OS_UPGRADE_TITLE ","CHECK FOR UPDATE "),o=new fu(i,r);jn(o,t);const a=new wu("clientControlButton ");return a.items=[o],a}(0,n);break;case"Acquisition ":i=function(e,t,n){if(!y("arcadeShowcase "))return null;if("iOS "!==host.platform&&"macOS "!==host.platform)return null;let r=Ka(t);if(!r&&n.additionalData&&(r=Qa(n.additionalData.get("upsellForNonacquisitionCanvas "))),!s(r))return null;const i={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},a=qa(n.metricsPageInformation,n.metricsLocationTracker);a.title=P("ARCADE_ACTION_TITLE_EXPLORE ","EXPLORE ");const c=la(r.editorialData,"short "),u=yt(c,r.inAppData);let p;const d=ne(r.editorialData,"breakoutCallToActionLabel ");if(l(d)){const t=gt(c),o=!s(r.marketingItemData);p=y("arcadeLockupInNavBar ")&&(!o&&t||o)?Bi(r.marketingItemData||r.editorialData,r.inAppData,"arcadeStoryCanvas ",i):$a("arcadeStoryCanvas ",null,{id:e.id,pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker}),s(p)&&(p.title=d)}else p=qa(n.metricsPageInformation,n.metricsLocationTracker),p.title=P("ARCADE_ACTION_TITLE_EXPLORE ","EXPLORE ");const f=new yu(p,a);f.unsubscribedDescription=u;const h=new xs("arcade ",Is.arcadeAppAdamId,"colored ",null,"dark ",null,null,null,null,null,null,null,null,null,null,Is.arcadeProductFamilyId);if(h.titles.subscribed=P("ARCADE_ACTION_TITLE_EXPLORE ","EXPLORE "),f.offerDisplayProperties=h,vo(f,Object.assign(Object.assign({},i),{targetType:"arcadeShowcase ",title:d,id:e.id,kind:"arcadeShowcase ",softwareType:null,displaysArcadeUpsell:!0})),"iOS "===host.platform){if(o(n.additionalData))return null;const e=n.additionalData.get("arcadeIcons ");if(l(e)){const t={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},r=We(e);f.iconArtworks=Fo(r,t,{useCase:2})}}const m=new wu("arcadeShowcase ");return m.items=[f],"iOS "===host.platform&&(m.background={type:"color ",color:yu.shelfBackgroundColor}),m}(e,t,n)}return i}(e,t,n);break;case"StoryList ":r=function(e,t){const n=W(e,"contents ");if(!n)return null;const r=ne(e,"name "),i=ne(e,"tagline ");return Dt(n,"mac "===il||y("smallStoryCards ")?"smallStoryCard ":"todayBrick ",r,i,t,null)}(e,n);break;default:console.log(`Unknown module: ${n.module}`),r=null}return r})}function qn(e){const t=W(e,"card - contents ");if(1!==t.length)return null;const n=t[0];if(!n)return null;switch(n.type){case"apps ":case"app - bundles ":return n;default:return null}}function Gn(){switch(il){case"mac ":return"white ";default:return"infer "}}function Hn(e,t){return j(e,"contents ")||null}function jn(e,t){if(!e)return;let n=t.module;t.subStyle&&(n=n+"_ "+t.subStyle);const r={id:`${t.index}`,impressionIndex:t.index,idType:"sequential ",impressionType:n,kind:"iosModule "};e.impressionMetrics=new Kl(wa(r))}function Wn(e){return(new ph).forType("multiple - system - operators ").withIds([e]).includingRelationships(["apps ","channel - apps "]).addingQuery("limit[channel - apps]","100 ")}function zn(e,t){return As.c("msoRoomPageWithResponse ",()=>{const n=Ge(e),r=Ke("Room ",n.id,e),i=W(n,"apps "),o=W(n,"channel - apps ");for(const e of o){const t=j(e,"app ");l(t)&&i.push(t)}const a=new bp;a.ids=i.map(e=>e.id),a.shouldFilter=!1,a.metricsPageInformation=r;const s=function(e,t,n,r=[]){return As.c("msoRoomPageWithContext ",()=>{const i=[],o=[];for(const n of e)-1!==t.indexOf(n.id)?i.push(n):o.push(n);const a={rootPosition:0,locationStack:[]},s={lockupOptions:{metricsOptions:{pageInformation:n.metricsPageInformation,locationTracker:a},artworkUseCase:2}},l=[],c={pageInformation:n.metricsPageInformation,locationTracker:a,targetType:"swoosh ",idType:"sequential ",id:"0 "};if(i.length>0){const e=P("MSO_INCLUDED_IN_SUBSCRIPTION "),t=new bp;t.remainingContent=[],t.metricsPageInformation=n.metricsPageInformation,t.metricsLocationTracker=a,t.preferredShelfContentType="mediumLockup ",c.id="0 ",ka(c,e),s.contentUnavailable=function(e,n){return t.remainingContent.push(i[n]),!1};const r=new wu("mediumLockup ");r.title=e,r.shouldFilterApps=n.shouldFilter,r.items=to(i,s),r.url=Yn(t),Pa(a),r.items.length>0&&(va(a),l.push(r))}if(i.length>0&&o.length>0){const e=P("MSO_AVAILABLE_WITH_UPGRADED_SUBSCRIPTION "),t=new bp;t.remainingContent=[],t.metricsPageInformation=n.metricsPageInformation,t.metricsLocationTracker=a,t.preferredShelfContentType="mediumLockup ",c.id="1 ",ka(c,e),s.contentUnavailable=function(e,n){return t.remainingContent.push(o[n]),!1};const r=new wu("mediumLockup ");r.title=e,r.shouldFilterApps=n.shouldFilter,r.items=to(o,s),r.url=Yn(t),Pa(a),r.items.length>0&&(va(a),l.push(r))}if(0===l.length){const t=new bp;t.remainingContent=[],t.metricsPageInformation=n.metricsPageInformation,t.metricsLocationTracker=a,t.preferredShelfContentType="smallLockup ",c.id="0 ",ka(c,null),s.contentUnavailable=function(n,r){return t.remainingContent.push(e[r]),!1};const r=new wu("mediumLockup ");r.shouldFilterApps=n.shouldFilter,r.items=to(e,s),r.url=Yn(t),Pa(a),va(a),l.push(r)}for(const e of l)e.isHorizontal=l.length>1;const u=r.concat(l);return new cp(u)})}(i,t,a);return s.title=ne(n,"name "),s.isIncomplete=!1,Je(s,r),s})}function Yn(e){return e.remainingContent.length?`${kl.internal}:/${Pl.mso}/${Pl.shelf}/`+encodeURIComponent(JSON.stringify(e)):null}function Kn(e,t){return`${kl.internal}:/${Pl.reviews}/${Pl.shelf}/${e}/${t}`}function Qn(e){return!(!s(e)||!ie(e,"isFirstPartyHideableApp ")&&!ie(e,"reviewsRestricted "))}function Jn(e,t){const n=Fl.from(e),r=d(n.query,"displayable - kind ");return t&&l(r)&&(n.query["displayable - kind "]=xd[r]||r),n}function Xn(e,t,n){const r=Is.voteUrl,i=d(n,"id ","coercible "),o=new Fl(r).param("userReviewId ",i),a=new sc(o.build()),s=new fc("toast ");return t?(a.title=P("ACTION_REVIEW_HELPFUL "),s.title=P("TOAST_HELPFUL_TITLE "),s.message=P("TOAST_HELPFUL_DESCRIPTION "),y("systemImages ")?(a.artwork=it("systemimage: //hand.thumbsup"),s.artwork=it("systemimage://hand.thumbsup")):(a.artwork=it("resource://ContextActionThumbsUp",28,28),s.artwork=it("resource://ToastThumbsUp.png",90,90))):(a.title=P("ACTION_REVIEW_NOT_HELPFUL"),s.title=P("TOAST_NOT_HELPFUL_TITLE"),s.message=P("TOAST_NOT_HELPFUL_DESCRIPTION"),y("systemImages")?(a.artwork=it("systemimage://hand.thumbsdown"),s.artwork=it("systemimage://hand.thumbsdown")):(a.artwork=it("resource://ContextActionThumbsDown",28,28),s.artwork=it("resource://ToastThumbsDown.png",90,90))),a.method="POST",a.isStoreRequest=!0,a.disableCache=!0,a.headers={"Content-Type":Cd.contentType},a.body=(new Cd).param("vote",t?"1":"0").param("guid",e).build(),a.successAction=s,a}function Zn(e,t,n,r=!1,i=!0){return As.c("createReviewItems",()=>{const o=function(e,t){return t?1e3*((new Date).getTime()-e.getTime())<3600?P("TIME_AGO_EDITED_JUST_NOW"):P("TIME_AGO_EDITED_TIME").replace("{time}",R(e)):R(e)};return n.map(n=>{const s=new _d;s.id=d(n,"id","coercible"),s.title=ne(n,"title");const c=ne(n,"date");c&&(s.date=new Date(c),s.dateText=o(s.date,ie(n,"isEdited"))),s.contents=ne(n,"review"),s.rating=oe(n,"rating"),s.reviewerName=ne(n,"userName");const u=ne(n,"developerResponse.id");if(l(u)){const e=new Rd;e.id=u,e.contents=ne(n,"developerResponse.body");const t=ne(n,"developerResponse.modified");t&&(e.date=new Date(t),e.dateText=o(e.date,!1)),s.response=e}return r&&(s.moreAction=function(e,t,n){return n?As.c("singleReviewActionFromReviewData",()=>{const r=tr(e,t,[n]),i=new Ed;i.adamId=d(t,"adamId"),i.targetReviewId=d(n,"id","coercible"),i.shelves=[r];const o=new Jl("reviews");return o.pageData=i,o.title=lr(),o}):null}(e,t,n)),i&&(d(t,"adamId"),s.topLevelAction=function(e,t,n){if(!n)return null;const r=[Xn(e,!0,n),Xn(e,!1,n)];l(Is.reportConcernUrl)&&r.push(function(e,t){return As.c("reportConcernActionFromApiRow",()=>{const n=d(t,"id","coercible"),r=Is.reportConcernUrl,i=new cc(r);i.method="POST",i.isStoreRequest=!0,i.disableCache=!0,i.needsAuthentication=!0,i.headers={"Content-Type":Cd.contentType},i.body=(new Cd).param("userReviewId",n).param("guid",e).build();const o=new lc("selectedReason","formBody","decimalPad"),s=new lc("explanation","formBody","text");i.parameters=[o,s];const l=new fc("toast");l.title=P("TOAST_CONCERN_REPORTED_TITLE"),l.message=P("TOAST_CONCERN_REPORTED_DESCRIPTION"),y("systemImages")?l.artwork=it("systemimage://exclamationmark.circle"):l.artwork=it("resource://ToastExclamation.png",90,90),i.successAction=l;let c=Is.reportConcernReasons;a(c)&&(c=[{reasonId:"1",name:"It contains offensive material",upperCaseName:"IT CONTAINS OFFENSIVE MATERIAL"},{reasonId:"8",name:"It's off-topic",upperCaseName:"IT?S OFF-TOPIC"},{reasonId:"111003",name:"It looks like spam",upperCaseName:"IT LOOKS LIKE SPAM"},{reasonId:"7",name:"Something else",upperCaseName:"SOMETHING ELSE"}]);const u=c.map(e=>new Ws(d(e,"reasonId"),d(e,"name"),d(e,"upperCaseName"))),p=new gc(u);return p.title=P("ACTION_REVIEW_REPORT"),p.explanation=Is.reportConcernExplanation,a(p.explanation)&&(p.explanation="Tell us a little more (Optional)"),y("systemImages")?p.artwork=it("systemimage://exclamationmark.circle"):p.artwork=it("resource://ContextActionExclamation",28,28),p.sendAction=i,p})}(e,n));const i=new dc(r);return i.isCancelable=!0,i}(e,0,n)),s})})}function er(e,t,n,r=!1){return As.c("createWriteReviewAction",()=>{const i=P(r?"EDIT_REVIEW":"WRITE_A_REVIEW"),o=function(e,t){return Jn(Is.writeReviewURL,t).param("id",e).build()}(e,t);let a;switch(il){case"mac":{const t=new pc(e,o);t.title=i,t.appIcon=n,a=t;break}default:{const t=new Jl("writeReview");t.title=i,t.pageUrl=o,t.pageData=e,t.presentationContext="presentModal",a=t;break}}return a})}function tr(e,t,n,r=!1,i=!0){return As.c("reviewsShelfForReviewsData",()=>{const o=new wu("reviews");return o.items=Zn(e,t,n,r,i),o})}function nr(e,t,n,r,i,a,c,h=!1,m=!0,g=null){return As.c("reviewsContainerShelfForReviewsData",()=>{const m=function(e,t,n,r,i,a,c=null){return As.c("reviewsContainerForReviewsData",()=>{const h=new Fd,m=d(t,"adamId"),g=p(t,"isBundle");if(h.adamId=m,h.ratings=function(e,t){return t?As.c("ratingsFromApiResponses",()=>{const e=new Od;e.productId=d(t,"adamId","coercible"),e.ratingAverage=f(t,"ratingAverage"),e.totalNumberOfRatings=f(t,"ratingCount"),e.totalNumberOfReviews=f(t,"totalNumberOfReviews");const n=u(t,"ratingCountList").slice().reverse(),r=n.reduce((e,t)=>e+t,0);if(e.ratingCounts=r>0?n.map(t=>t/r*e.totalNumberOfRatings):n,!(e.ratingAverage>0&&e.ratingCounts)){const n=p(t,"wasReset");e.status=P(n?"RATINGS_STATUS_DEVELOPER_RESET":"RATINGS_STATUS_NOT_ENOUGH_RATINGS")}return e}):null}(0,t),h.tapToRate=function(e,t,n=null,r=null){const i=new Dd;switch(il){case"tv":i.title=P("TV_SELECT_TO_RATE");break;case"mac":i.title=P("CLICK_TO_RATE");break;default:i.title=P("TAP_TO_RATE")}return i.rating=r,i.rateAction=function(e,t,n=null){const r=new fc("toast");r.title=P("TOAST_TAP_TO_RATE_TITLE"),r.message=P("TOAST_TAP_TO_RATE_DESCRIPTION"),r.artwork=it("resource://ToastStar.png",95,90);const i=new uc(function(e,t){return Jn(Is.userRateURL,t).param("id",e).build()}(e,t));i.adamId=e,i.method="POST",i.isStoreRequest=!0,i.disableCache=!0,i.successAction=r;const o=new lc("rating","urlQuery","decimalPad"),a=new lc("version-to-review","urlQuery","decimalPad");return i.parameters=[o,a],"tv"===il&&l(n)&&(i.title=P("TV_RATE_PRODUCT").replace("{title}",n)),i}(e,t,n),i}(m,g,r,c),s(n)&&n.length>0){const r="watch"===il,i=!r,o=r?n.slice(0,1):n;h.reviews=Zn(e,t,o,i,i)}if(o(h.reviews)||0===h.reviews.length){const e=h.ratings.ratingAverage>0&&h.ratings.ratingCounts,n=p(t,"wasReset");e||n||(h.ratings.status=P("RATINGS_STATUS_NOT_ENOUGH_RATINGS_OR_REVIEWS"))}o(a)||(h.editorsChoice=a);const y=s(c)&&c>0;h.writeReviewAction=er(m,g,i,y);const w=d(t,"supportUrl");if(w){const e=new Zl(w,!1);e.title=P("APP_SUPPORT"),h.supportAction=e}return h})}(e,t,n,r,i,a,g),y=new wu("reviewsContainer");return y.title=lr(),y.items=[m],h&&s(m.reviews)&&m.reviews.length>0&&(y.seeAllAction=sr(e,t,n,c,r,i)),y})}function rr(e,t,n){return As.c("personalizedReviewsContainerShelf",()=>{const r=oe(Ge(n),"rating");return nr(e,t.ratingsData,t.reviewItems,t.appName,t.appIcon,t.editorsChoice,t.nextPageHref,t.includeSeeAllAction,!1,r)})}function ir(e,t,n,r){const i=function(e,t){return`${kl.internal}:/${Pl.reviews}/${e}/${t}`}(e,t);return new vd(t,n,r,i)}function or(e,t,n,r,i=null,a=null,s=null,c=null,u=Nd){const p=new Ed;return p.shelves=[],As.c("reviewsPageForReviewsData",()=>{let f,h;if(l(i)&&l(n)&&n.length%2>0){const r=n.slice(0,n.length-1);h=n.slice(n.length-1),f=tr(e,t,r,!1)}else f=tr(e,t,n,!1),h=[];const m=o(a)?d(t,"adamId"):a;if(r&&!o(t)){p.adamId=m;const n=nr(e,t,[],s,c);p.shelves.push(n)}return f.items.length>0&&(r&&(f.presentationHints={isSortable:!0},o(t)||(p.initialSortOptionIdentifier=u,p.sortActionSheetTitle=P("REVIEWS_SORT_BY"),p.sortOptions=[ir(m,"helpful",P("REVIEWS_MOST_HELPFUL"),P("REVIEWS_SORT_BY_MOST_HELPFUL")),ir(m,"favorable",P("REVIEWS_MOST_FAVORABLE"),P("REVIEWS_SORT_BY_MOST_FAVORABLE")),ir(m,"critical",P("REVIEWS_MOST_CRITICAL"),P("REVIEWS_SORT_BY_MOST_CRITICAL")),ir(m,"recent",P("REVIEWS_MOST_RECENT"),P("REVIEWS_SORT_BY_MOST_RECENT"))])),p.shelves.push(f),l(i)&&(p.nextPage=function(e,t,n,r){return{url:Kn(e,n),remainingContent:r,nextHref:t,profile:"lockup",maxPerPage:Ap,highestOrdinal:0,metricsPageInformation:null,metricsLocationTracker:null}}(m,i,u,h))),p})}function ar(e,t,n,r,i,o){return As.c("reviewsPageForReviewsMediaContainer",()=>{let a;return a=l(r.data)?n.concat(r.data):n,or(e,null,a,i,r.next,t,null,null,o)})}function sr(e,t,n,r=null,i=null,o=null){return t?As.c("reviewsPageActionFromReviewsData",()=>{const a=or(e,t,n,!0,r,null,i,o);a.title="watch"===il?P("PRODUCT_SECTION_REVIEWS"):null;const s=new Jl("reviews");return s.pageData=a,s.title=P("ACTION_SEE_ALL"),s}):null}function lr(){switch(il){case"tv":return P("TV_PRODUCT_SECTION_RATINGS");case"watch":return null;default:return P("PRODUCT_SECTION_REVIEWS")}}function cr(e,t,n,r){const i=W(e,"genres");if(i.length>0&&!n){const e=ur(i,P("INFO_LIST_CHILD_PARENT_CATEGORY_SUMMARY"),"parentCategory","childCategory",n);if(e){const t=new Rc(e),n=r?"":P("INFO_LIST_CATEGORY_TITLE");return new _c(n,[t])}}return null}function ur(e,t,n,r,i){if(!e||!e.length)return null;let o=e[0];const a=ne(o,"parentId");let s=null;for(const t of e){const e=ne(t,"parentId");if(t.id!==o.id){if(e&&e===o.id){s=t;break}if(t.id===a){s=o,o=t;break}}}let l=null;const c=ne(o,"name"),u=ne(s,"name");return u&&i?u:(l=c&&u?t.replace(`{${n}}`,c).replace(`{${r}}`,u):c,l)}function pr(e){if(!l(e))return null;const t=Do(e,{useCase:12});return a(t)?null:(t.crop="sr",t)}function dr(e,t,n){let r=0;for(const i of e){const e=t[i.type];if(e){const t=new yc(e.section,!0);t.index=e.index,i.compactAction=t,i.regularAction=t}let o;switch(i.type){case"contentRating":case"editorsChoice":case"rating":o="select";break;default:o="navigate"}i.compactAction&&xa(i.compactAction,{targetType:"badge",id:i.type,actionType:o,actionDetails:{position:r},pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker}),r+=1}}function fr(e,t,n){const r=W(e,"genres");if(r.length>0){const n={},i=P("BADGE_CATEGORY_HEADING"),a=ur(r,P("INFO_LIST_CHILD_PARENT_CATEGORY_SUMMARY"),"parentCategory","childCategory",t||"tv"===il);if(a){const r="tv"===il?"custom":"artwork",s=new ip(r,n,"tv"===il?"annotation":"standard",i,a,null,a,i,"infer");if(new Jl("page").title=ne(e,"artistName"),t&&"tv"!==il){const t=me(e,"editorialArtwork.brandLogo");if("artwork"===r&&o(t))return null;s.artwork=pr(t)}return s}}return null}function hr(e,t,n){const r=me(e,"chartPositions");if(r){const e=function(e){switch(host.clientIdentifier){case Js:return"appStore";case Xs:return"watch";case Zs:return"messages";case tl:return"appletv";default:return null}}();if(e){const t=h(r,e);if(t){const e=f(t,"position"),n=d(t,"genreName"),r=d(t,"genre"),i=d(t,"chart"),o=P("BADGE_CHART_POSITION_HEADING"),a=P("PRODUCT_ACCESSIBILITY_BADGE_CHART_POSITION_TITLE").replace("{chartPosition}",e.toString()),s=new ip("chartPosition",{position:E(e)},"standard",o,n,null,a,n,"view"),l=function(e,t){return M((new ph).forType("charts").addingQuery("types","apps").addingQuery("chart",t).addingQuery("genre",e)).toString()}(r,i);if(l){const e=new Jl("topCharts");e.pageUrl=l,s.compactAction=e,s.regularAction=e}return s}}}return null}function mr(e,t,n){const r=ne(e,"contentRatingsBySystem.appsApple.name");if(r){const n={contentRating:r},i=function(e){if(!e)return null;switch(e){case 6:return"AgeRatingL";case 7:return"AgeRating10";case 8:return"AgeRating12";case 9:return"AgeRating14";case 10:return"AgeRating16";case 11:return"AgeRating18";default:return null}}(oe(e,"contentRatingsBySystem.appsBrazil.rank"));let o;i&&(n.contentRatingResource=i),o=P(t?"BADGE_AGE_RATING_YEARS":"BADGE_AGE_RATING");const a=P("BADGE_AGE_RATING_HEADING"),s=P("PRODUCT_ACCESSIBILITY_BADGE_AGE_RATING_TITLE");return new ip("contentRating",n,"tv"===il?"annotation":"standard",a,o,null,r,s,"view")}return null}function gr(e,t,n){if(y("tvRequiresControllerString")&&we(e,"requiresGameController")){const e=P("BADGE_MFI_REQUIRED_HEADING"),t=P("BADGE_MFI_SUPPORTED");return new ip("controller",{},"standard",e,t,null,null,t,"view")}if(we(e,"supportsGameController")){const e=P("BADGE_MFI_HEADING"),t=P("BADGE_MFI_SUPPORTED");return new ip("controller",{},"standard",e,t,null,null,t,"view")}return null}function yr(e,t,n){const r=j(e,"developer"),i=P("BADGE_DEVELOPER_HEADING"),a=ne(e,"artistName"),l="tv"===il?"custom":"artwork",c=new ip(l,{},"tv"===il?"annotation":"standard",i,a,null,a,i,"infer");if(t&&"tv"!==il){const e=ee(r,"editorialArtwork.brandLogo");if("artwork"===l&&o(e))return null;c.artwork=pr(e)}const u=ea(r);if(s(u)){const t=new Jl("page");t.title=ne(e,"artistName"),t.pageUrl=u,xa(t,{targetType:"informationRibbon",id:r.id,actionType:"navigate",pageInformation:n.pageInformation,locationTracker:n.locationTracker}),c.compactAction=t,c.regularAction=t}return c}function wr(e,t,n){const r=me(e,"editorialBadgeInfo");if(r){const t=d(r,"editorialBadgeType");if(t&&"editorialPriority"===t){let t;t="Games"===te(e,"genreNames")[0]?P("EDITORIAL_BADGE_GAMES"):P("EDITORIAL_BADGE_APPS");const n=P("EDITORS_CHOICE_SINGLE_LINE"),r=P("PRODUCT_ACCESSIBILITY_BADGE_EDITORS_CHOICE"),i=new ip("editorsChoice",{},"standard",n,t,null,r,t),o=new ap("shelf","reviews");return i.compactAction=new yc(o),i.regularAction=i.compactAction,i}}return null}function Tr(e,t,n){if(!y("multiplayerBadge"))return null;const r=Te(e,"minPlayers"),i=Te(e,"maxPlayers");if(!s(r)||!s(i))return null;if(r<=0||i<=0||r>i)return null;const o=P("BADGE_PLAYERS_HEADING"),a=Ir(r,i,!1),l=Ir(r,i,!0),c=P("BADGE_PLAYERS_HEADING"),u={paragraphText:Ar(r,i)};return new ip("paragraph",u,"tv"===il?"annotation":"standard",o,a,null,l,c,"view")}function Ar(e,t){return e===t?e<=32?_(e):P("BADGE_PLAYERS_CAPTION_MULTIPLAYER_INDEFINITE_MIN_AND_MAX_LIMIT").replace("{minPlayers}",_(32)):t<=32?P("BADGE_PLAYERS_CAPTION_MULTIPLAYER_DEFINITE_LIMIT").replace("{minPlayers}",_(e)).replace("{maxPlayers}",_(t)):P("BADGE_PLAYERS_CAPTION_MULTIPLAYER_INDEFINITE_MAX_LIMIT").replace("{minPlayers}",_(e)).replace("{maxPlayers}",_(32))}function Ir(e,t,n){return P(1===e&&1===t?"BADGE_PLAYERS_CAPTION_SINGLE":1===e||n?"BADGE_PLAYERS_CAPTION_MULTIPLAYER":"BADGE_PLAYERS_CAPTION_REQUIRED")}function br(e,t,n){if(t&&!y("ribbonReviewBadge")&&"tv"!==il)return null;const r=ee(e,"userRating");let i=null;const o=Qn(e);if(!o&&r&&r.value&&r.ratingCount){const e=f(r,"value"),t=Math.round(10*e)/10,n=E(t,1),o=f(r,"ratingCount"),a=C("BADGE_RATING_CAPTION_SHORT_TEMPLATE",o).replace("{count}",_(o)),s=C("BADGE_RATING_CAPTION_LONG_TEMPLATE",o).replace("{count}",_(o)).replace("{rating}",n),l=P("PRODUCT_ACCESSIBILITY_BADGE_STAR_RATING").replace("{starCount}",n);i=new ip("rating",{rating:t,ratingFormatted:n},"standard",a,a,s,l,a)}else{if(t)return null;const e=P("BADGE_NO_RATINGS_CAPTION");if(o&&"BADGE_NO_RATINGS_CAPTION"!==e)i=new ip("rating",{},"standard",null,e,null,e);else if(!o){const e=P("BADGE_NOT_ENOUGH_RATINGS_CAPTION");i=new ip("rating",{},"standard",null,e,null,e)}}if(i){const e=new ap("shelf","reviews");return i.compactAction=new yc(e),i.regularAction=i.compactAction,i}return null}function Sr(e,t,n){return e?As.c("badgesFromLookupResponse",()=>{let r;return r=mo(e)?Md:"tv"===il?Vd:t?$d:Bd,function(e,t,n,r){const i=[];for(const o of e){const e=o(t,n,r);e&&i.push(e)}return i}(r,e,t,n)}):null}function kr(e,t,n,r){const i=function(e,t){switch(e){case"tvOS":return t?ys:gs;case"watchOS":return ws;case"iOS":return t?fs:y("productLockupBanners")?ms:hs;case"macOS":return t&&y("inlineProductBanner")?fs:hs;default:return hs}}(t,n),o=e?i.purchasedOrdering.slice():i.notPurchasedOrdering.slice(),a=e?i.purchasedSpotlightIndex:i.notPurchasedSpotlightIndex;if(r&&r.spotlightSection){const e=function(e,t){let n=0;for(const r of t){if(r.type===e.type){if("shelf"!==r.type)return n;if(r.shelfId===e.shelfId)return n}n+=1}return-1}(r.spotlightSection,o);-1!==e&&(o.splice(e,1),o.splice(a,0,r.spotlightSection))}return o}function Pr(e){return new ap("shelf",e?"subscriptions":"inAppPurchases")}function Cr(e,t,n){const r=e.ids;return r&&r.length?(e.sourcePageInformation=t.metricsPageInformation,e.sourceLocationTracker=t.locationTracker,e.destinationPageInformation=n,`${kl.internal}:/${Pl.product}/${Pl.shelf}/`+encodeURIComponent(JSON.stringify(e))):null}function vr(e,t,n,r,i,a){if(!e.data||0===e.data.length)return null;const s=[],l={metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.locationTracker},artworkUseCase:n,canDisplayArcadeOfferButton:fa(r)},c=o(i)?{}:{offerStyle:i},u=eo(e,{lockupOptions:Object.assign(Object.assign({},l),c),shouldConsiderDataPastLastAvailable:!0,contentUnavailable:(e,t)=>(s.push(e),!1),filter:a});if("watch"===il){const e=u.slice(0,3);return{items:e,unavailableIds:e.length<3?s.slice(0,3-e.length):[]}}return{items:u,unavailableIds:s}}function Er(e,t){if(!t)return;let n=-1,r=null;t.forEach((t,i)=>{const o=t,a=o,s=o&&o.adamId===e,l=a&&a.productIdentifier===e;(s||l)&&(n=i,r=o,a&&(a.theme="spotlight",a.offerDisplayProperties=a.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,"colored","ad","blue")))}),-1!==n&&(t.splice(n,1),t.splice(0,0,r))}function Or(e){if(-1===Tf.indexOf(e.media.kind))return!1;const t=e.clickAction;if(!t)return!0;const n=t.pageUrl;if(!n)return!0;const r=new Fl(n),i=hf.allPageRoutes();for(const e of i)if(new bu(e).matches(r))return!1;return!0}function _r(e,t,n,r){const i=ye(e,"requirementsString");if(!s(i))return null;let o=null;if(so(e)){const t=Ho(e),n=t&&-1!==t.indexOf(il),r=function(e){if(host.deviceLocalizedModel)return host.deviceLocalizedModel;switch(e){case"phone":const e=P("IPHONE_BRAND_NAME");return"IPHONE_BRAND_NAME"===e?"iPhone":e;case"pad":const t=P("IPAD_BRAND_NAME");return"IPAD_BRAND_NAME"===t?"iPad":t;case"tv":const n=P("APPLE_TV_BRAND_NAME");return"APPLE_TV_BRAND_NAME"===n?"Apple?TV":n;case"watch":const r=P("APPLE_WATCH_BRAND_NAME");return"APPLE_WATCH_BRAND_NAME"===r?"Apple?Watch":r;case"mac":const i=P("MAC_BRAND_NAME");return"MAC_BRAND_NAME"===i?"Mac":i;case"unknown":default:return null}}(il);n&&r&&(o=P("INFO_LIST_REQUIREMENTS_SUMMARY").replace("{deviceName}",r))}const a=new Rc(i),l=r?"":P("REQUIREMENTS");return new _c(l,[a],o)}function Rr(e,t,n,r){const i=ee(e,"contentRatingsBySystem.appsApple");if(i){const t=d(i,"name");if(t){const n=u(i,"advisories");let o=null;const a=ce(e,Ae(e),"ageBand"),c=f(a,"minAge"),p=f(a,"maxAge");o=s(c)&&s(p)?P("INFO_LIST_AGE_RATING_SUMMARY").replace("{ageRating}",t).replace("{minAgeRating}",c.toString()).replace("{maxAgeRating}",p.toString()):t;const h=[];if(Is.requireAgeVerification&&function(e,t){let n;return n=4,e>=4}(f(i,"rank"))&&function(e){const t=W(e,"genres");for(const e of t)if(d(e,"id")===6014..toString())return!0;return!1}(e)){let t=null;const n="app-bundles"===e.type;if(n){const n=H(e,"apps");if(s(n))for(const e of n.data)if(s(ne(e,"gracRegistrationNumber"))){t="AppStore.AgeVerification.ProductPage.Rating.BundleUnsuitableForJuveniles";break}}else s(ne(e,"gracRegistrationNumber"))&&(t="AppStore.AgeVerification.ProductPage.Rating.UnsuitableForJuveniles");let r;null!=t&&h.push(new Rc(P(t))),r=n?"AppStore.AgeVerification.ProductPage.Rating.BundleRequiredAge":"AppStore.AgeVerification.ProductPage.Rating.RequiredAge",h.push(new Rc(P(r)+"\n"))}if(o&&h.push(new Rc(o)),n.length>0)for(const e of n)h.push(new Rc(e));let m=null;h.length>1&&(m=o);const g=r?"":P("INFO_LIST_AGE_RATING_TITLE");let y;return l(Is.ageRatingLearnMoreEditorialItemId)&&(y=new Jl("article"),y.title=P("INFO_LIST_AGE_RATING_LEARN_MORE"),y.pageUrl=`https://apps.apple.com/story/id${Is.ageRatingLearnMoreEditorialItemId}`),new _c(g,h,m,y)}}return null}function Dr(e,t,n,r){const i=ye(e,"copyright");if(!o(i)){const e=new Rc(i),t=r?"":P("INFO_LIST_COPYRIGHT");return new _c(t,[e])}return null}function Lr(e,t,n,r){const i=ge(e,"languageList");if(a(i))return null;const o=i.length;if(o<1)return null;let l=null,c=null;switch(o){case 0:break;case 1:c=i[0];break;case 2:c=P("INFO_LIST_TWO_LANGUAGES_SUMMARY").replace("{first}",i[0]).replace("{second}",i[1]);break;default:const e=o-1;l=P("INFO_LIST_MORE_LANGUAGES_SUMMARY").replace("{language}",i[0]).replace("{count}",_(e)),c=function(e,t){if(null===e||null===t)return null;if(0===e.length)return"";let n=e.length,r="";return e.forEach((e,i)=>{null===e?n-=1:(r+=e,i<n-1&&(r+=t))}),r}(i,P("CONJUNCTION_SEPARATOR"))}if(!s(c))return null;const u=new Rc(c),p=r?"":P("SUPPORTED_LANGUAGES");return new _c(p,[u],l)}function Fr(e){return As.c("productCapabilitiesAsAnnotations",()=>{const t=Qo(e),n=[];for(const e of t){let t;switch(e.type){case"gameCenter":t=P("CAPABILITY_GAME_CENTER_TITLE");break;case"siri":t=P("CAPABILITY_SIRI_TITLE");break;case"wallet":t=P("CAPABILITY_WALLET_TITLE");break;case"familySharing":case"familySharingExceptIAP":t=P("CAPABILITY_FAMILY_SHARING_TITLE");break;case"controllers":t=P("CAPABILITY_MFI_CONTROLLERS_TITLE");break;default:t=null}t&&n.push(new Rc(t))}const r=new _c("",n);return r.shouldAlwaysPresentExpanded=!0,r})}function xr(e,t,n,r){const i=ye(e,"seller"),o=ye(e,"sellerLabel")||P("SELLER");if(!s(i))return null;const a=new Rc(i),l=new _c(r?"":o,[a]);return l&&!n?l:null}function Nr(e,t,n,r){const i=Jo(e);if(!t&&s(i)&&!n){const e=O(i),t=new Rc(e),n=r?"":P("FILE_SIZE");return new _c(n,[t])}return null}function Ur(e,t,n,r){const i=W(e,"top-in-apps");if(i.length>0){const e=[];for(const t of i){const n=ne(t,"name"),r=d(uo(t),"priceFormatted");e.push(new Rc(n,r))}const t=r?"":P("INFO_LIST_IN_APP_PURCHASES");return new _c(t,e,P("YES"))}return null}function Mr(e,t,n,r,i,o){const a=[];for(const s of e){const e=s(t,n,r,i);e&&(a.push(e),o&&o(s,a.length-1))}return a}function Br(e,t,n,r,i,a){return As.c("create",()=>{let s;switch(il){case"watch":s=function(e,t,n){return As.c("standardInformationShelf",()=>{let r;const i=Mr(If,e,t,!1,!1,null);return i.length>0&&(r=new wu("annotation"),r.items=i,o(n)||n.addImpressionsToShelf(r,"information")),r})}(e,t,n);break;case"tv":s=function(e,t,n,r){return As.c("tvInformationShelf",()=>{let i;const a=Mr(bf,e,t,!1,!1,null),s=[Fr(e)].concat(Mr(Sf,e,t,!1,!1,null)),l=Mr(kf,e,t,!1,!0,null),c=[];if(a.length>0){const e=new Oc(P("PRODUCT_SECTION_INFORMATION"),a,r);c.push(e)}if(s.length>0){const e=new Oc(P("PRODUCT_SECTION_SUPPORTS"),s,r);c.push(e)}if(l.length>0){const e=new Oc(P("PRODUCT_SECTION_TOP_IN_APP_PURCHASES"),l,!0);c.push(e)}return c.length>0&&(i=new wu("informationContainer"),i.items=[new Dc(c)],o(n)||n.addImpressionsToShelf(i,"information")),i})}(e,t,n,a);break;default:s=function(e,t,n,r,i){return As.c("standardInformationShelf",()=>{let a;const s=Mr(If,e,t,r,!1,i);return s.length>0&&(a=new wu("annotation"),a.title=P("PRODUCT_SECTION_INFORMATION"),a.items=s,o(n)||n.addImpressionsToShelf(a,"information")),a})}(e,t,n,i,r)}return s})}function $r(e,t){return As.c("versionHistoryPageAction",()=>{const n=Vr(e);let r;if(n.length>0){const e=new wu("titledParagraph");e.items=n;const i=new cp([e]);i.title=P("VERSION_HISTORY_PAGE_TITLE","Version History"),"watch"!==il&&(i.presentationOptions=["prefersLargeTitle"]),Je(i,Qe("VersionHistory",t,""));const o=new Jl("versionHistory");o.title=P("ACTION_VERSION_HISTORY_SEE_ALL"),o.pageData=i,r=o}return r})}function Vr(e){return e?e.map(e=>qr(e,"detail")):[]}function qr(e,t){return As.c("titledParagraphFromVersionHistoryEntry",()=>{const n=d(e,"releaseNotes"),r=new Xc(n,t),i=d(e,"versionDisplay"),o=P("VERSION_STRING_TEMPLATE");switch(t){case"detail":r.primarySubtitle=i;break;default:r.primarySubtitle=o.replace("{version}",i)}const a=d(e,"releaseDate");if(a){const e=new Date(a);r.secondarySubtitle=function(e){let t=Tl.relativeDate(e);return t||(t="* null *"),t}(e)}return r})}function Gr(e,t){return{targetType:"button",actionType:"navigate",id:e,pageInformation:t.metricsPageInformation,locationTracker:t.locationTracker}}function Hr(e){return As.c("descriptionFromData",()=>{let t=ye(e,"promotionalText");t||(t="");let n=ye(e,"description.standard");n||(n="");let r="";t.length>0&&n.length>0&&(r="\n\n");const i=t+r+n;if(i.length>0){const e=new zs(i);return e.isCollapsed=!0,e}return null})}function jr(e,t,n){return As.c("inAppPurchasesShelf",()=>{if(!function(e){return"macOS"!==host.platform}())return null;if(a(e))return null;const r=H(e,"merchandised-in-apps");if(!r||!r.data.length)return null;if(!r.data.filter((function(e){return ie(e,"isSubscription")===n.isForSubscriptions})).length)return null;const i={pageInformation:t.metricsPageInformation,locationTracker:t.locationTracker,targetType:"swoosh",id:`${t.getSequenceId()}`,idType:"sequential"};let s="infer";mo(e)&&(s="disabled");const l=new wu("inAppPurchaseLockup");let c=null;n.options&&(c=n.options.spotlightInAppProductIdentifier),function(e,t){for(const n of t.data){let t=H(n,"app");t||(t={data:[e]}),o(n.relationships)&&(n.relationships={}),n.relationships.app=t}}(e,r);const u=[];if(l.items=function(e,t,n,r,i){const o=eo(e,{lockupOptions:{metricsOptions:n,offerStyle:t,skipDefaultClickAction:!0,artworkUseCase:1},contentUnavailable:function(e){return u.push(e),!1}});return r&&Er(r,o),o}(r,s,i,c).filter((function(e){return e.productIdentifier===c&&(n.options.spotlightSection=new ap("shelf",n.isForSubscriptions?"subscriptions":"inAppPurchases")),e.isSubscription===n.isForSubscriptions})),u.length){const r=new wf(u,l.title,!1,"inAppPurchaseLockup",s,null);r.appBundleId=ye(e,"bundleId"),n.isForSubscriptions?r.inAppShelfId="subscriptions":r.inAppShelfId="inAppPurchases",l.url=Cr(r,t)}let p;return n.isForSubscriptions?(l.title=P("PRODUCT_SECTION_SUBSCRIPTIONS","Subscriptions"),p="subscription"):(l.title=P("PRODUCT_SECTION_IN_APP_PURCHASES"),p="iAP"),ka(i,l.title),Pa(t.locationTracker),va(t.locationTracker),l.isHorizontal=!0,t.addImpressionsToShelf(l,p),l})}function Wr(e,t,n,r,i){const o=new op(e,t,n,r),a=new zs(r);return a.wantsCollapsedNewlines=!1,o.regularAction=new hc(i,a),o}function zr(e,t){return As.c("productPageFromResponse",()=>{const n=Ge(e);if(a(n))return null;s(t)&&(t.iAdClickFields&&(e[Hu]=JSON.stringify(t.iAdClickFields)),t.iAdLineItem&&(e[ju]=t.iAdLineItem));const r="app-bundles"===n.type;if("watch"===il&&r)throw new Pd("Bundles are not supported on watchOS");const i=ie(n,"isFirstPartyHideableApp"),o=Qn(n),c=Ke(r?"SoftwareBundle":"Software",n.id,e),u={rootPosition:0,locationStack:[]},p=new Af(c,u),h=Qr(n,p,t),m=Aa(n,h.icon);c.baseFields.platformDisplayStyle=m;const g=Ho(n);Je(h,p.metricsPageInformation,e=>{const t=g&&(zo(g,il)||Yo(g,il)),r=function(e,t){if(!so(e))return!1;if(Re(e,646))return!1;const n=jo(t),r=Ho(e);return n.some(e=>Wo(r,e))}(n,il);e.deviceCompatibility=t&&r?"runnable":t?"purchasable":"none"});const w=aa(n),T=Jr(w),A=uo(n),I={pageInformation:p.metricsPageInformation,locationTracker:p.locationTracker,id:n.id,isAdvert:!!c.iAdInfo&&c.iAdInfo.iAdIsPresent},b=fo(A,n,m,I);let S;if(l(b)){let r;s(t)&&(r=t.clientIdentifierOverride),b.lineItem=d(e,ju),S=Io(b,n,I,"productPage",!1,r)}if(s(t)&&l(t.externalDeepLinkUrl)&&l(S)){const e={pageInformation:c,locationTracker:u};S=ft(S,b.adamId,t.externalDeepLinkUrl,e)}h.buttonAction=S;const k=go(b);let v;r&&(v=function(e,t){return e?As.c("bundleChildrenShelf",()=>{let n;n=new wu("smallLockup"),n.isHorizontal=!0;const r=e.data.length;if(!r)return null;n.title=C("APPS_IN_BUNDLE",r);const i=vr(e,t,1,"smallLockup",null,13822);if(i.unavailableIds.length){const e=new wf(i.unavailableIds,n.title,!1,"smallLockup","infer",null);e.isBundleShelf=!0,n.url=Cr(e,t)}return ka({pageInformation:t.metricsPageInformation,locationTracker:t.locationTracker,targetType:"swoosh",id:`${t.getSequenceId()}`,idType:"sequential"},n.title),n.items=i.items,Pa(t.locationTracker),va(t.locationTracker),n.rowsPerColumn=r<2||"tv"===il?1:2,t.addImpressionsToShelf(n,"bundleChildren"),n}):null}(H(n,"apps"),p)),v&&(h.shelfMapping.bundleChildren=v);const E=function(e,t){return e?As.c("bundleParentsShelf",()=>{let n;const r=e.data.length;if(!r)return null;n=new wu("smallLockup"),n.isHorizontal=!0,n.title=P("INCLUDED_IN_BUNDLES").replace("{count}",r.toString());const i=vr(e,t,1,"smallLockup");if(0===i.unavailableIds.length&&0===i.items.length)return null;if(n.items=i.items,i.unavailableIds.length){const e=new wf(i.unavailableIds,n.title,!1,"smallLockup","infer",null);e.isBundleShelf=!0,n.url=Cr(e,t)}return n.rowsPerColumn=r<2||"tv"===il?1:2,t.addImpressionsToShelf(n,"bundleParent"),n}):null}(H(n,"app-bundles"),p);E&&(h.shelfMapping.bundleParents=E);const O=!(1===g.length&&"mac"===g[0]&&"mac"!==il||k||o),_={productTitle:h.title,shouldShowRatingsAndReviews:O,isFirstPartyHideableApp:i,isBundle:r,isPreorder:k},R=function(e,t,n){return As.c("create",()=>"watch"===il?null:a(e)?null:function(e,t,n,r,i,o,a){return As.c("standardReviewsShelf",()=>{let n=null;const r=Ho(e);let s;if(aa(e)||(s=function(e){return As.c("editorsChoiceItem",()=>{const t=d(me(e,"editorialNotes"),"standard");if(t){const n=new Ld(t),r=me(e,"editorialBadgeInfo");if(r){const e=d(r,"editorialBadgeType");n.showsBadge=e&&"editorialPriority"===e}return n.showsBadge||(n.title=P("APP_STORE_EDITORS_NOTES")),n}return null})}(e)),s&&!o){const t=new Fd;return t.adamId=e.id,t.editorsChoice=s,n=new wu("reviewsContainer"),n.items=[t],n}if(o){const n=H(e,"reviews"),o=ee(e,"userRating");o.ratingAverage=f(o,"value"),o.adamId=e.id,o.isBundle=i,o.supportUrl=ye(e,"supportURLForLanguage");const l=xo(e,{useCase:2}),c=1===r.length&&"tv"===r[0];return function(e,t,n,r,i,o,a){return As.c("reviewsContainerShelf",()=>{const s={pageInformation:a.metricsPageInformation,locationTracker:a.locationTracker},l=lr();ka({pageInformation:a.metricsPageInformation,locationTracker:a.locationTracker,targetType:"swoosh",id:`${a.getSequenceId()}`,idType:"sequential"},l);const c=He(t),u=nr(sl,e,c,n,r,i,t.next,o);return u.title=l,a.addImpressionsToShelf(u,"ratings"),u.seeAllAction&&Na(u.seeAllAction,null,s),Pa(a.locationTracker),va(a.locationTracker),u})}(o,n,t,l,s,!c,a)}return null})}(e,n.productTitle,0,0,n.isBundle,n.shouldShowRatingsAndReviews,t))}(n,p,_);R&&(h.shelfMapping.reviews=R);const D=function(e,t,n){return As.c("create",()=>(function(e,t,n,r,i){return As.c("standardMostRecentVersionShelf",()=>{if(!t&&!n&&!r){const t=ge(e,"versionHistory");if(t.length>1&&Vr(t).length>0){const n=new wu("titledParagraph");n.title=P("PRODUCT_SECTION_MOST_RECENT_VERSION");const r=qr(t[0],"overview");if(n.items=[r],i.addImpressionsToShelf(n,"versionHistory"),n)return"watch"!==il&&(n.seeAllAction=function(e,t,n){return As.c("versionHistorySeeAllAction",()=>{const r=$r(e,t);return Na(r,null,{pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker}),r})}(t,e.id,i)),n}}return null})})(e,n.isFirstPartyHideableApp,n.isBundle,n.isPreorder,t))}(n,p,{isFirstPartyHideableApp:i,isBundle:r,isPreorder:k});D&&(h.shelfMapping.mostRecentVersion=D),h.shelfMapping.textCards=function(e,t){return As.c("textCardShelfFromResponse",()=>{if(a(e))return null;let n;if("tv"!==il)return null;n=Pf;const r=new wu("textCard");return r.title=P("PRODUCT_SECTION_TEXT_CARDS"),r.items=function(e,t){const n=[];for(const r of e){const e=r(t);e&&n.push(e)}return n}(n,e),r.isHorizontal=!0,t.addImpressionsToShelf(r,"links"),r})}(n,p);const L=new Ud,F=Br(n,i,p,(e,t)=>{e===Rr&&(L.index=t,L.section=new ap("shelf","information"))},T,!1);if(F&&(h.shelfMapping.information=F),w){const e=function(e,t){if(a(e))return null;const n=d(me(e,"editorialNotes"),"standard");if(n){const e=P("APP_STORE_EDITORS_ATTRIBUTION"),r=new pu(n,e),i=new wu("editorialQuote");return i.items=[r],t.addImpressionsToShelf(i,"editorialQuote"),"phone"!==il&&"pad"!==il||(i.background={type:"color",color:K("componentBackgroundStandout")}),i}return null}(n,p);e&&(h.shelfMapping.editorialQuote=e)}h.shelfMapping.links=function(e,t){return As.c("create",()=>a(e)?null:"tv"===il?function(e,t){return As.c("tvLinksShelf",()=>{const n=new wu("titledButtonStack"),r=[],i=Br(e,!1,t,null,!1,!0),o=new cp([i]);o.title=ne(e,"name"),"tv"===il&&o.presentationOptions.push("prefersIndirectTouch");const a=new Jl("page");a.presentationContext="presentModalBlur",a.pageData=o;const l=new au(P("MORE_INFORMATION"),a);if(r.push(l),ye(e,"hasPrivacyPolicyText")){const t=function(e){const t=e.id;return s(e)&&s(t)?`${kl.internal}:/${Pl.privacyPolicy}?resourceId=${t}`:null}(e);if(t){const e=P("PRIVACY_POLICY"),n=new Jl("unknown");n.pageUrl=t;const i=new au(e,n);r.push(i)}}if(re(e,"hasEula")){const t=function(e){const t=e.id,n=e.type;return s(e)&&s(t)&&s(n)?`${kl.internal}:/${Pl.tvEula}?resourceType=${n}&resourceId=${t}`:null}(e);if(t){const e=P("LICENSE_AGREEMENT"),n=new Jl("unknown");n.pageUrl=t;const i=new au(e,n);r.push(i)}}const c=new ou(r);return c.compactLineBreaks=c.buttons.map((e,t)=>t),n.items=[c],t.addImpressionsToShelf(n,"links"),n})}(e,t):function(e,t){return As.c("standardLinksShelf",()=>{const n=new wu("productPageLink"),r=[];if("mac"!==il){const t=ye(e,"websiteUrl");if(t){const e=new Zl(t,!1),n=P("DEVELOPER_WEBSITE");r.push(new ru(n,e,"developer"))}}const i=ye(e,"privacyPolicyUrl");if(i){const e=new Zl(i,!1),t=P("PRIVACY_POLICY");r.push(new ru(t,e,"privacy"))}if(re(e,"hasEula")){const t=function(e){const t=e.id,n=e.type;return s(e)&&s(t)&&s(n)?`${kl.internal}:/${Pl.eula}?resourceType=${n}&resourceId=${t}`:null}(e);if(t){const e=new Jl("page");e.pageUrl=t;const n=P("LICENSE_AGREEMENT");r.push(new ru(n,e,"eula"))}}const o=Is.reportProblemUrl;if(s(o)){const t=new Fl(o);t.query.a=e.id,t.query.o="",t.query.s="mac"===il?"10":"9";const n=new Zl(t.build(),!1),i=P("REPORT_A_PROBLEM"),a=Is.reportProblemUrlDaysToDisplay;r.push(new iu(i,n,a))}return r&&r.length>0&&(n.items=r),t.addImpressionsToShelf(n,"links"),n})}(e,t))}(n,p),h.shelfMapping.textLinksShelf=function(e,t){return As.c("create",()=>{if("tv"!==il)return null;if(a(e))return null;const n=new wu("paragraph");n.isHorizontal=!1;const r=function(e){return e?As.c("externalProductLinksAsParagraphsFromData",()=>{const t=[],n=ye(e,"websiteUrl");if(n){const e=P("DEVELOPER_WEBSITE_WITH_URL").replace("{URL}",n),r=new zs(e);r.alignment="center",t.push(r)}return t}):null}(e);return r&&r.length>0&&(n.items=r),t.addImpressionsToShelf(n,"links"),n})}(n,p);const x=function(e,t){return As.c("capabilitiesShelf",()=>{if(a(e))return null;let n;const r=Qo(e);return r.length>0&&(n=new wu("productCapability"),n.title=P("PRODUCT_SECTION_SUPPORTS"),n.items=r,t.addImpressionsToShelf(n,"supports")),n})}(n,p);x&&(h.shelfMapping.capabilities=x);const N=H(n,"related-editorial-items"),U="mac"===il||y("smallStoryCards")?function(e,t){return As.c("smallStoryShelf",()=>{if(!e||!e.data.length)return null;const n={pageInformation:t.metricsPageInformation,locationTracker:t.locationTracker,targetType:"swoosh",id:`${t.getSequenceId()}`,idType:"sequential"},r=P("PRODUCT_SECTION_FEATURED_IN");ka(n,r);const i=[],o={metricsLocationTracker:n.locationTracker,metricsPageInformation:n.pageInformation,filterOutMediaCardKinds:new Set(["appIcon"])},a=Dt(e.data,"smallStoryCard",r,null,o,(function(e){return i.push(e.id),!1}));if(a.isHorizontal=!0,i.length){const e=new wf(i,a.title,!1,"smallStoryCard");a.url=Cr(e,t)}return Pa(t.locationTracker),t.addImpressionsToShelf(a,"featuredIn"),va(t.locationTracker),a})}(N,p):function(e,t){function n(e,t,n){return xt(e.data,t.pageInformation,t.locationTracker,Or,n)}return As.c("featuredInShelf",()=>{if(a(Ge(e)))return null;const r={pageInformation:t.metricsPageInformation,locationTracker:t.locationTracker,targetType:"swoosh",id:`${t.getSequenceId()}`,idType:"sequential"},i=new wu("todayBrick"),o=P("PRODUCT_SECTION_FEATURED_IN");i.title=o,i.isHorizontal=!1;const s=[];if(i.items=[n(e,r,(function(e){return s.push(e.id),!1}))],s.length){const e=new wf(s,i.title,!1,"todayBrick");i.url=Cr(e,t)}return ka(r,o),t.addImpressionsToShelf(i,"featuredIn"),Pa(t.locationTracker),va(t.locationTracker),i})}(N,p);U&&(h.shelfMapping.featuredIn=U);const M=function(e,t){return As.c("moreByDeveloperShelf",()=>{if(a(e))return null;let n;const r=ea(j(e,"developer")),i=ne(e,"artistName"),o=H(e,"developer-other-apps");if(!o||0===o.data.length)return null;const s=P("MORE_BY_DEVELOPER_TEMPLATE").replace("{developer}",i);let l;switch(ka({pageInformation:t.metricsPageInformation,locationTracker:t.locationTracker,targetType:"swoosh",id:`${t.getSequenceId()}`,idType:"sequential"},s),il){case"mac":case"tv":l="mediumLockup";break;default:l="smallLockup"}n=new wu(l),n.title=s;const c=vr(o,t,Ro(l),l,"white");if(!c)return null;if(n.items=c.items,c.unavailableIds&&c.unavailableIds.length){const e=new wf(c.unavailableIds,n.title,!1,l,"white",null);n.url=Cr(e,t)}if("tv"!==il){const e=new Jl("page");e.pageUrl=r,e.title=P("ACTION_SEE_ALL"),Na(e,e.pageUrl,{pageInformation:t.metricsPageInformation,locationTracker:t.locationTracker}),n.seeAllAction=e}return n.isHorizontal=!0,o.data.length<2||"tv"===il?n.rowsPerColumn=1:n.rowsPerColumn=2,n.background={type:"color",color:yf},t.addImpressionsToShelf(n,"developer"),Pa(t.locationTracker),va(t.locationTracker),n})}(n,p);M&&(h.shelfMapping.moreByDeveloper=M);const B=function(e,t){return As.c("similarItemsShelf",()=>{if(a(e))return null;let n;const r=H(e,"customers-also-bought-apps");if(!r||!r.data.length)return null;const i=P("SIMILAR_ITEMS_TITLE");let o,s;switch(ka({pageInformation:t.metricsPageInformation,locationTracker:t.locationTracker,targetType:"similarItems",id:Af.similarItemsShelfId,idType:"relationship"},i),il){case"tv":o="mediumLockup",s=!1;break;case"mac":o="mediumLockup",s=!0;break;default:o="smallLockup",s=!0}n=new wu(o),n.title=i;const l=vr(r,t,Ro(o),o,"white");if(n.items=l.items,l.unavailableIds.length){const r=new wf(l.unavailableIds,n.title,s,o,"white",null),i=Qe("SimilarItems",e.id,"");n.url=Cr(r,t,i)}return n.isHorizontal=!0,r.data.length<2||"tv"===il?n.rowsPerColumn=1:n.rowsPerColumn=2,n.background={type:"color",color:yf},t.addImpressionsFieldsToSimilarItemsShelf(n,"similarItems","relationship"),Pa(t.locationTracker),va(t.locationTracker),n})}(n,p);if(B&&(h.shelfMapping.similarItems=B),!k){const e=jr(n,p,{isForSubscriptions:!0,options:t});e&&(h.shelfMapping.subscriptions=e);const r=jr(n,p,{isForSubscriptions:!1,options:t});r&&(h.shelfMapping.inAppPurchases=r)}const $={productTitle:h.title,shouldShowRatingsAndReviews:O,isFirstPartyHideableApp:i,isBundle:r,isPreorder:k,useInlineUberStyle:T},V=function(e,t,n){return As.c("createActionLinks",()=>a(e)?null:"watch"===il?function(e,t,n,r,i,o,a,s){return As.c("actionLinkShelf",()=>{const l=new wu("action"),c=[];if(r){const n=H(e,"reviews"),r=ee(e,"userRating");r.ratingAverage=f(r,"value"),r.adamId=e.id,r.isBundle=o,r.supportUrl=ye(e,"supportURLForLanguage");const i=He(n),a=xo(e,{useCase:2}),s=sr(sl,r,i,n.next,t,a);s.title=P("PRODUCT_SECTION_REVIEWS"),c.push(s)}const u=ge(e,"versionHistory");if(u.length>0&&!i&&!o&&!a){const t=$r(u,e.id);xa(t,Gr(e.id,n)),c.push(t)}const p=Br(e,i,null,null,s,!1),d=new cp([p]),h=new Jl("page");h.title=P("PRODUCT_SECTION_INFORMATION"),d.title=h.title,n.addImpressionsToShelf(l,"information"),Je(d,Xe(e.id,"info")),xa(h,Gr(e.id,n)),h.pageData=d,c.push(h);const m=Qo(e);if(m.length>0){const t=new wu("productCapability");t.items=m;const r=new cp([t]),i=new Jl("page");i.title=P("PRODUCT_SECTION_SUPPORTS"),r.title=i.title,n.addImpressionsToShelf(l,"supports"),Je(r,Xe(e.id,"supports")),xa(i,Gr(e.id,n)),i.pageData=r,c.push(i)}const g=ye(e,"privacyPolicyUrl");if(g){const t=new Zl(g,!1);xa(t,Gr(e.id,n)),t.title=P("PRIVACY_POLICY"),c.push(t)}return l.items=c,n.addImpressionsToShelf(l,"actionLinks"),c.length>0?l:null})}(e,n.productTitle,t,n.shouldShowRatingsAndReviews,n.isFirstPartyHideableApp,n.isBundle,n.isPreorder,n.useInlineUberStyle):null)}(n,p,$);V&&(h.shelfMapping.actionLinks=V),h.pageTopBackgroundColor=null,h.pageBottomBackgroundColor=yf,h.purchasedOrdering=kr(!0,host.platform,w,t),h.notPurchasedOrdering=kr(!1,host.platform,w,t),Yr(t,h);const q={};return q.contentRating=L,h.badges&&dr(h.badges,q,p),null!=h.shelfMapping.informationRibbon&&dr(h.shelfMapping.informationRibbon.items,q,p),h.isComplete=!0,h})}function Yr(e,t){if(e&&e.spotlightSection){const n=e.spotlightInAppProductIdentifier;if(n&&"shelf"===e.spotlightSection.type){const r=t.shelfMapping[e.spotlightSection.shelfId];if(!r)return;if(r.presentationHints={isInProductPageSpotlight:!0},Er(n,r.items),r.url){const e=new Fl(r.url);e&&(r.url=e.param(vl.offerName,n).build())}}}}function Kr(e,t,n){if(!hl)return null;const r=ne(e,"url"),i=ne(e,"name"),o=ne(e,"artistName");let a=null;t&&(a=t.iAdClickFields);const s=Qe("Software",e.id,`${o}_${i}`,a);return s.pageUrl=r,Qr(e,new Af(s,{rootPosition:0,locationStack:[]}),t,n)}function Qr(e,t,n,r){return As.c("productPageSidePackLockup",()=>{const i=new lp,c=mo(e);c&&s(t)&&s(t.metricsPageInformation)&&(t.metricsPageInformation.offerType="preorder",t.metricsPageInformation.offerReleaseDate=wo(e)),function(e,t){o(t)||e.pageMetrics.addData(et(t,null),["backButton"])}(i,t.metricsPageInformation);const u=e.id,p=ne(e,"name"),h=ie(e,"isFirstPartyHideableApp"),m=Qn(e);i.adamId=u,i.bundleId=d(e,"bundleId");const g=aa(e);i.uberArtwork=Xo(e,{supportsArcade:g}),"pad"!==il&&"phone"!==il||(i.uberArtworkForCompactDisplay=Xo(e,{supportsArcade:g,prefersCompactVariant:!0})),i.uberVideo=Zo(e,20),i.logoArtwork=function(e,t){let n,r=null,i=null;switch(il){case"tv":r="editorialArtwork.contentLogoTrimmed",i="bb";break;default:return null}return n=me(e,r),s(n)&&s(i)?Do(n,{cropCode:i,useCase:0,withJoeColorPlaceholder:!0}):null}(e);const w=Jr(g);let T;if(s(n)&&(T=n.clientIdentifierOverride),r||(i.icon=xo(e,{useCase:10},T)),i.title=p,i.isComplete=!1,i.subtitle=ji(e),i.developerTagline=ye(e,"subtitle"),i.regularPriceFormatted=ne(e,"regularPriceFormatted"),m||(i.rating=oe(e,"userRating.value")),"tv"===il){let t;t=null!==i.uberVideo&&null!==i.uberVideo.preview?i.uberVideo.preview.backgroundColor:null!==i.uberArtwork?i.uberArtwork.backgroundColor:xo(e,{useCase:10,allowingTransparency:!1,withJoeColorPlaceholder:!0},T).backgroundColor,i.hasDarkUserInterfaceStyle=Y(t,50)}const A=function(e){return y("triforce")?null:"tv"===il?["tv"]:null}(),I=function(e){return"tv"===il||"watch"===il?[il]:null}(),b=Vo(e,11,A,T),S=Mo(e,wp,I);let k=null;if(S)for(const e of b)if(e.mediaPlatform.isEqualTo(S.mediaPlatform)){k=e;break}let C=null;if(k){const e=k.mediaPlatform.appPlatform;if("phone"===e||"messages"===e)for(const e of k.items){const t=e.screenshot;if(C=t.width/t.height,C<1)break}}const v={pageInformation:t.metricsPageInformation,locationTracker:t.locationTracker,id:u,isAdvert:!!t.metricsPageInformation.iAdInfo&&t.metricsPageInformation.iAdInfo.iAdIsPresent};i.children=Gi(e,{metricsOptions:v,artworkUseCase:1});const E=[],O=[];if(k&&S&&S.videos)for(const e of S.videos){const t=new Mc;t.video=e;const n=e.preview.width/e.preview.height,r=null===C||Math.abs(n-C)<.01,i=k.mediaPlatform.isEqualTo(S.mediaPlatform);r&&i?E.push(t):O.push(e),ht(e,v)}k&&(k.items=E.concat(k.items));let _=null;if(O.length>0&&(_=function(e,t){return As.c("videoShelf",()=>{if(!e||0===e.length)return null;const n=new wu("framedVideo");return n.title=P("PRODUCT_SECTION_VIDEOS"),n.items=e.map(e=>new lu(e,!0,"text/plain",null,null,!0)),n.isHorizontal=!0,t.addImpressionsToShelf(n,"videos"),n})}(O,t)),i.media=b,i.mediaSectionTitle="tv"===il?null:P("PRODUCT_SECTION_SCREENSHOTS_PREVIEW"),g&&null===i.uberVideo&&null===i.uberArtwork&&i.media.length>0&&i.media[0].items.length>0){const e=i.media[0].items[0];i.uberVideo=e.video,i.uberArtwork=e.screenshot}i.appPlatforms=Ho(e);const R=uo(e),L=Aa(e,i.icon),F=fo(R,e,L,v);let x,N,U;if(l(F)&&(s(n)&&(F.lineItem=n.iAdLineItem),x=Io(F,e,v,"productPage",!1,T),s(n)&&l(n.externalDeepLinkUrl)&&l(x)&&(x=ft(x,F.adamId,n.externalDeepLinkUrl,v))),i.buttonAction=x,!h){const t=function(e){return As.c("updateOfferDataFromData",()=>{const t=ge(e,"offers");if(0===t.length)return null;for(const e of t)if("update"===d(e,"type"))return e;return null})}(e);i.updateBuyParams=d(t,"buyParams"),i.externalVersionIdentifier=Te(e,"externalVersionId")}if(c){i.theme="blue";const e=P("PREORDER_EXPANDED_OFFER_TITLE");let t=null;if(s(F.expectedReleaseDate)){const e=D(P("PREORDER_EXPANDED_OFFER_DATE_FORMAT","MMM d, yyyy"),F.expectedReleaseDate);t=P("PREORDER_EXPANDED_OFFER_SUBTITLE").replace("{releaseDate}",e)}i.expandedOfferDetails=new sp(e,t)}w?(N="white",U="arcadeProductPage"):(N="colored",U="productPage");const M=g?"arcadeApp":"app";let B;i.offerDisplayProperties=Po(F,M,e,N,U,null,null,"productPage"),i.titleOfferDisplayProperties=Po(F,M,e,"colored","productPage",null,null,"productPage");const $=j(e,"developer"),V=ea($);switch(s(V)&&(B=new Jl("page"),B.title=ne(e,"artistName"),B.pageUrl=V,xa(B,{targetType:"button",id:$.id,actionType:"navigate",pageInformation:t.metricsPageInformation,locationTracker:t.locationTracker})),i.developerAction=B,il){case"mac":{const n=Un(e);if(n){const e=new mc(n,[]);xa(e,{targetType:"button",id:u,actionType:"share",pageInformation:t.metricsPageInformation,locationTracker:t.locationTracker}),i.shareAction=e}break}case"phone":case"pad":{const n=Un(e),r=[],a=function(e){if(!Is.isContentGiftingEnabled)return null;if(o(e))return null;const t=uo(e);return o(t)?null:mo(e)?null:f(t,"price")>0?e.id:null}(e);if(a){const e=new Jl("finance");e.presentationContext="presentModal",e.title=P("SHARE_GIFT_APP"),y("systemImages")?e.artwork=it("systemimage://app.gift"):e.artwork=it("resource://action_gift",28,28),e.pageUrl=`gift/${a}`,xa(e,{targetType:"button",id:u,actionType:"gift",actionContext:"shareSheet",pageInformation:t.metricsPageInformation,locationTracker:t.locationTracker}),r.push(e)}if(n){const e=y("expandedShareSheet")?"expanded":"collapsed",o=new mc(n,r,e);o.title=P("SHARE_APP"),y("systemImages")?o.artwork=it("systemimage://square.and.arrow.up"):o.artwork=it("resource://action_share",28,28),xa(o,{targetType:"button",id:u,actionType:"share",actionContext:"shareSheet",pageInformation:t.metricsPageInformation,locationTracker:t.locationTracker}),i.shareAction=o}else if(r.length>0){const e=new dc(r);e.isCancelable=!0,xa(e,{targetType:"button",id:u,actionType:"actionSheet",pageInformation:t.metricsPageInformation,locationTracker:t.locationTracker}),i.shareAction=e}break}}i.shelfMapping={};const q={appPlatforms:i.appPlatforms,clientIdentifierOverride:T,offerButtonShouldBeDisabled:!1,productTitle:i.title},G=function(e,t,n){let r=null,i=null;const o=we(e,"is32bitOnly"),a=we(e,"requires32bit");if((o||a)&&(i=new wu("banner"),r=P("mac"===il?"APP_UPDATE_REQUIRED_MACOS":"APP_UPDATE_REQUIRED_IOS"),i.items=[new xc(r)],n.offerButtonShouldBeDisabled=!0),null===i&&Re(e,2048)&&(i=new wu("banner"),r=P("OFFER_WATCH_ONLY_BANNER"),i.items=[new xc(r)],n.offerButtonShouldBeDisabled=!0),null!==i||so(e)||(i=new wu("banner"),r=P("UNSUPPORTED_CAPABILITIES"),i.items=[new xc(r)]),null===i&&Re(e,36)&&(i=new wu("banner"),r=P("UNSUPPORTED_CAPABILITIES"),i.items=[new xc(r)],n.offerButtonShouldBeDisabled=!0),null===i&&Re(e,8192)){switch(il){case"mac":r=P("AppStore.Filter.ArcadeComingSoon.macOS");break;case"pad":case"phone":r=P("AppStore.Filter.ArcadeComingSoon.iOS");break;case"tv":r=P("AppStore.Filter.ArcadeComingSoon.tvOS");break;default:r=null}null!==r&&(i=new wu("banner"),i.items=[new xc(r)],n.offerButtonShouldBeDisabled=!0)}if(Re(e,512)){const t=ue(e,Ae(e),"minimumOSVersion");switch(il){case"mac":r=P("UNSUPPORTED_MACOS_VERSION").replace("{osVersion}",t);break;case"phone":case"pad":r=P("UNSUPPORTED_IOS_VERSION").replace("{osVersion}",t);break;case"tv":r=P("UNSUPPORTED_TVOS_VERSION").replace("{osVersion}",t);break;case"watch":const n=ye(e,"minimumWatchOSVersion");r=P("UNSUPPORTED_WATCHOS_VERSION").replace("{osVersion}",n);break;default:r=P("UNSUPPORTED_CAPABILITIES")}i=new wu("banner"),i.items=[new xc(r)]}if("watch"===il&&Re(e,4096)){const t=ue(e,Ae(e),"minimumOSVersion");r=P("UNSUPPORTED_IOS_VERSION").replace("{osVersion}",t),i=new wu("banner"),i.items=[new xc(r)]}if(Re(e,128)){n.offerButtonShouldBeDisabled=!0;const e=Wo(n.appPlatforms,"phone"),t=Wo(n.appPlatforms,"pad"),o=e||t,a=Wo(n.appPlatforms,"tv"),s=Wo(n.appPlatforms,"mac"),c=Wo(n.appPlatforms,"watch");if(y("triforce")){const i=["UNSUPPORTED"];t&&!e?i.push("PAD"):o&&i.push("IOS"),s&&i.push("MACOS"),a&&i.push("TVOS"),c&&i.push("WATCHOS"),i.length>1&&(i.push("ONLY"),r=P(i.join("_")).replace("{appName}",n.productTitle))}else r=s?P("UNSUPPORTED_MACOS_ONLY").replace("{appName}",n.productTitle):a?o?P("UNSUPPORTED_IOS_TVOS_ONLY").replace("{appName}",n.productTitle):P("UNSUPPORTED_TVOS_ONLY").replace("{appName}",n.productTitle):t&&!e?P("UNSUPPORTED_PAD_ONLY").replace("{appName}",n.productTitle):P("UNSUPPORTED_IOS_ONLY").replace("{appName}",n.productTitle);l(r)&&(i=new wu("banner"),i.items=[new xc(r)])}ua(e)&&(i=new wu("banner"),r=P("UNSUPPORTED_COMPANION_CONFIGURATION","Requires iPhone"),i.items=[new xc(r)],n.offerButtonShouldBeDisabled=!0);const s=ye(e,"minimumWatchOSVersion");return null===i&&n.clientIdentifierOverride===Xs&&da(s)&&(r=P("AppStore.ProductPage.Banner.PairedWatchOSVersionBelowMinimum").replace("{osVersion}",s),i=new wu("banner"),i.items=[new xc(r)]),i}(e,0,q);if(G){if("watch"!==il&&G.items.length>0){const e=G.items[0];null!=e&&(i.bannerText=e.message)}i.shelfMapping.banner=G;const e=i.offerDisplayProperties;q.offerButtonShouldBeDisabled&&l(e)&&(i.offerDisplayProperties=e.newOfferDisplayPropertiesChangingAppearance(!1,"disabled"))}if("tv"===il&&(i.developerTagline?i.descriptionHeader=P("PRODUCT_DESCRIPTION_HEADER").replace("{title}",i.title).replace("{subtitle}",i.developerTagline):i.descriptionHeader=i.title),"tv"===il)i.description=Hr(e);else{const n={developerAction:B};i.shelfMapping.description=function(e,t,n){return As.c("descriptionShelf",()=>{if(a(e))return null;const r=new wu("productDescription"),i=function(e){return e?As.c("productDescriptionLinksFromData",()=>{const t=[],n=ye(e,"websiteUrl");if(n){const e=new Zl(n,!1),r=P("PRODUCT_DEVELOPER_WEBSITE");t.push(new ru(r,e,"developer"))}const r=ye(e,"supportURLForLanguage");if(r){const e=new Zl(r,!1),n=P("DEVELOPER_SUPPORT");t.push(new ru(n,e,"support"))}return t}):null}(e),o=Hr(e);if(null===o)return null;const s=new Vc(o,i,n.developerAction);return r.items=[s],"watch"===il&&(r.title=P("PRODUCT_DESCRIPTION")),t.addImpressionsToShelf(r,"description"),r})}(e,t,n)}return _&&(i.shelfMapping.videos=_),i.purchasedOrdering=kr(!0,host.platform,g,n),i.notPurchasedOrdering=kr(!1,host.platform,g,n),Yr(n,i),g&&(i.editorialTagline=P("APPLE_ARCADE")),w?(i.shelfMapping.informationRibbon=function(e,t){const n=new wu("badge");return n.items=Sr(e,!0,{locationTracker:t.locationTracker,pageInformation:t.metricsPageInformation}),n.isHorizontal=!0,t.addImpressionsToShelf(n,"informationRibbon"),n}(e,t),"tv"!==il&&(i.badges=[]),i.uberStyle="inline",i.theme="white"):(i.badges=Sr(e,!1,{locationTracker:t.locationTracker,pageInformation:t.metricsPageInformation}),i.uberStyle="above"),i})}function Jr(e){return e&&("phone"===il||"pad"===il||"mac"===il)}function Xr(e,t,n,r){return As.c("topChartsPageFromApiResponse",()=>{const i=function(e){return u(e,"results.apps").filter(e=>!o(e.data))}(e),a=i.map(n=>(function(e,t,n){return As.c("segmentFromData",()=>{const r=d(t.query,"genre");let i=d(e,"shortName");const a=d(e,"name"),s=d(e,"chart"),l=Ke("TopChartsPage",r,n,`${s} ${a}`),c={rootPosition:0,locationStack:[]},u=[];let p=0;const f=[];for(const t of e.data){const e=ti(p,t,l,c);if(e){if(Re(t))continue;u.push(e),va(c),p++}else f.push(t)}const h=[],m=new wu("smallLockup");m.items=u,h.push(m),o(i)&&(i=a);const g=new Ef(i,a,s,h),y=pt(f,null,e.next,l,c);return y.metricsPageInformation=l,y.metricsLocationTracker=c,y.highestOrdinal=p,g.nextPage=y,Je(g,l),g})})(n,t,e)).sort((e,t)=>e.chart.localeCompare(t.chart)),s=d(i,"0.href"),l=new Fl(s),c=l.query.genre,p=l.query.ages,f=P("PAGE_TITLE_TOP_CHARTS"),h=[];if(null!=n)for(const e of n.categories)e.genreId&&h.push(Zr(e));const m=function e(t,n,r){for(const i of r){if(n&&i.ageBandId===n||!n&&!i.ageBandId&&i.genreId===t)return i;const r=e(t,n,i.children);if(r)return r}return null}(c,p,h);let g;g=null!=m?new _f(c,m.ageBandId,f,a,m.name,h):new _f(c,null,f,a,null,h);const y=a.findIndex(e=>e.chart===r);return y>=0&&(g.initialSegmentIndex=y),g})}function Zr(e){const t=function(e,t=null){let n=(new ph).forType("charts").addingQuery("types","apps").addingQuery("genre",e);return t&&(n=n.addingQuery("ages",t)),n}(e.genreId,e.ageBandId),n=e.children.map(e=>Zr(e));return new Of(e,M(t).toString(),n)}function ei(e,t,n){return As.c("topChartSegmentFromLookupResponse",()=>{const r=[];let i=t.highestOrdinal;const o=He(e);for(const e of o)Re(e)||(r.push(ti(i,e,t.metricsPageInformation,t.metricsLocationTracker)),va(t.metricsLocationTracker),i++);const a=[];if(r.length>0){const e=new wu("smallLockup");e.items=r,a.push(e),n.highestOrdinal=i}const s=new Ef(null,null,null,a);return s.nextPage=n,s})}function ti(e,t,n,r){return As.c("lockupFromApiChartItem",()=>zi(t,{ordinal:E(e+1),metricsOptions:{pageInformation:n,locationTracker:r},artworkUseCase:1}))}function ni(e,t,n){if(e&&e.mediaPlatform&&t&&t.mediaPlatform&&!e.mediaPlatform.isEqualTo(t.mediaPlatform))return ui(`SearchAd [${n}] filtered because media is derived from: ${t.mediaPlatform.mediaType}, but first ad media is derived from: ${e.mediaPlatform.mediaType}`),!1;let r=!0;switch(e.style){case"TEXT":r="TEXT"===t.style;break;case"LV1":case"LI1":r="LV1"===t.style||"LI1"===t.style;break;case"PI3":case"PI2":case"PI1":case"PV3":case"PV2":case"PV1":r="PI3"===t.style||"PI2"===t.style||"PI1"===t.style||"PV3"===t.style||"PV2"===t.style||"PV1"===t.style;break;default:r=!1}return r||ui(`SearchAd [${n}] filtered because style: ${ci(t)} is not compatible with the display style of: ${ci(e)}`),r}function ri(e,t){let n=null;const r=d(ee(e,"iads"),t);return r&&r.length&&(n=JSON.parse(r)),n}function ii(e,t){return a(t)?"NOORGANIC":t.id===e.id?"DUP":"NORMAL"}function oi(e,t){return As.c("searchResultContainerFromData",()=>{const n=Xi(e,t,Df),r=Aa(e,n.icon),i=Eo(e,n,r,t.metricsOptions,!0);return n.clickAction.actionMetrics.clearAll(),function(e,t){if(!o(e.searchAd)&&(e.clickAction&&xa(e.clickAction,t,!0),e.searchAd.transparencyAction)){const n=t.pageInformation,r={actionType:"ad_transparency"};n.iAdInfo&&Object.assign(r,n.iAdInfo.clickFields);const i=be(e.adamId,"button",r);i.includingFields.push("advertRotation"),e.searchAd.transparencyAction.actionMetrics.addMetricsData(i)}}(n,i),function(e,t,n){if(!e||!n)return;vo(e,t);const r=wa(n.fastImpressionFields);Object.assign(e.impressionMetrics.fields,r),e.impressionMetrics.isFast=!0,e.impressionMetrics.fields.parentId="ad_container"}(n,i,t.metricsOptions.pageInformation.iAdInfo),n})}function ai(e,t,n,r){const i=p(me(e,"iad"),"format.images"),o=a(r);if(!i)return ui(`SearchAd [${e.id}] is not allowed to display media because of iAd configuration.`),{style:"TEXT"};let s=null;const c=Xi(e,n,Df),u=c.trailers[0];let d=null;l(u)&&(u.videos.sort((e,t)=>Lf(e.preview,t.preview)),d=u.videos,s=u.mediaPlatform);const f=c.screenshots[0];let h=null;l(f)&&(f.artwork.sort(Lf),h=f.artwork,s=f.mediaPlatform);const m=function(){let e=null;l(d)&&(e=d.shift().preview);const t={style:null,mediaPlatform:s};switch(l(e)&&e.isLandscape()?t.style="LV1":l(e)&&e.isPortrait()?h&&h.length>=2?t.style="PV3":h&&h.length>=1?t.style="PV2":t.style="PV1":l(h)&&h[0].isLandscape()?t.style="LI1":l(h)&&h[0].isPortrait()?h.length>=3?t.style="PI3":h.length>=2?t.style="PI2":t.style="PI1":t.style="TEXT",2===li()&&"PI3"===t.style?t.style="PI2":2===li()&&"PV3"===t.style&&(t.style="PV2"),t.style){case"PI3":h.splice(0,3);break;case"PV3":case"PI2":h.splice(0,2);break;case"LI1":case"PI1":h.splice(0,1)}return t},g=m();if(ui(`SearchAd [${e.id}] tentatively resolved to: ${ci(g)}`),"DUP"===t){const t=m();switch(t.style){case"PV3":case"PI3":case"LI1":case"LV1":return o?(ui(`SearchAd [${e.id}] Organic Dupe would be full creative as ${t.style} so choosing tentative style for ad`),g):(ui(`SearchAd [${e.id}] Organic Dupe wold be a full creative, but is not the first so returning ${t.style}`),t);case"PV2":case"PI2":return 2===li()?o?(ui(`SearchAd [${e.id}] Organic Dupe would be full creative as ${t.style} so choosing tentative style for ad`),g):(ui(`SearchAd [${e.id}] Organic Dupe would be a full creative, but is not the first ad so returning first result display style: ${ci(t)}`),t):(ui(`SearchAd [${e.id}] tentative style would not yield full creative for organic result so returning TEXT`),{style:"TEXT"});default:return ui(`SearchAd [${e.id}] tentative style would not yield full creative for organic result so returning TEXT`),{style:"TEXT"}}}else if(r&&"TEXT"===r.style)return ui(`SearchAd [${e.id}] tentative style would be filtered since the first ad has style: ${ci(r)}, so returning TEXT`),{style:"TEXT"};return g}function si(e,t,n,r){const i=n&&!r;if(l(e.trailers)){const t=e.trailers.shift();t.videos.sort((e,t)=>Lf(e.preview,t.preview)),e.trailers.unshift(t)}if(l(e.screenshots)){const t=e.screenshots.shift();t.artwork.sort(Lf),e.screenshots.unshift(t)}switch(t.style){case"PI3":e.trailers=null,i?e.screenshots[0].artwork.splice(0,3):e.screenshots[0].artwork.splice(3);break;case"PI2":e.trailers=null,i?e.screenshots[0].artwork.splice(0,2):e.screenshots[0].artwork.splice(2);break;case"LI1":case"PI1":e.trailers=null,i?e.screenshots[0].artwork.splice(0,1):e.screenshots[0].artwork.splice(1);break;case"PV3":i?(e.trailers[0].videos.splice(0,1),e.screenshots[0].artwork.splice(0,2)):(e.trailers[0].videos.splice(1),e.screenshots[0].artwork.splice(2));break;case"PV2":i?(e.trailers[0].videos.splice(0,1),e.screenshots[0].artwork.splice(0,1)):(e.trailers[0].videos.splice(1),e.screenshots[0].artwork.splice(1));break;case"LV1":case"PV1":i?e.trailers[0].videos.splice(0,1):e.trailers[0].videos.splice(1),e.screenshots=null;break;case"TEXT":e.trailers=null,e.screenshots=null}if(l(e.trailers)){const t=e.trailers.shift();e.trailers=[t]}if(l(e.screenshots)){const t=e.screenshots.shift();e.screenshots=[t]}return e}function li(){return"phone"===il?3:2}function ci(e){if(a(e))return"";let t="";return e&&e.mediaPlatform&&(t=` derived from ${e.mediaPlatform.mediaType} media`),`${e.style}${t}`}function ui(e){console.log(e)}function pi(e,t){if(!(t.resultModel instanceof Wc))return;const n=t.resultModel,r=e.resultModel;if(r.adamId!==n.adamId)return;const i=new Set;if(l(r.screenshots))for(const e of r.screenshots[0].artwork)i.add(e.template);if(l(r.trailers))for(const e of r.trailers[0].videos)i.add(e.preview.template);if(l(n.screenshots)){const e=n.screenshots[0].artwork.filter(e=>!i.has(e.template));n.screenshots[0]=new Bs(e,n.screenshots[0].mediaPlatform)}if(l(n.trailers)){const e=n.trailers[0].videos.filter(e=>!i.has(e.preview.template));n.trailers[0]=new Yc(e,n.trailers[0].mediaPlatform)}}function di(e,t,n=null,r=null,i=host.clientIdentifier){let o=["apps","top-apps"],a=["screenshotsByType","messagesScreenshots","videoPreviewsByType","requiredCapabilities","editorialBadgeInfo","supportsFunCamera","minimumOSVersion"];y("refreshRibbon")||"pad"!==il||(o=o.concat(["developer"]),a=a.concat(["minPlayers","maxPlayers","fileSizeByDevice","requiresGameController","supportsGameController","languageList","supportedLocales"]));let s=(new ph).withSearchTerm(e).includingAdditionalPlatforms(fi(ds)).includingRelationships(o).includingAttributes(a).includingRelationshipsForUpsell(!0);s="story"===n?s.searchingOverTypes(["editorial-items"]):"developer"===n?s.searchingOverTypes(["developers"]):"watch"===n||"arcade"===n?s.searchingOverTypes(["apps"]).withFilter("contexts",n):"tv"===il?s.searchingOverTypes(["apps","developers","groupings","editorial-items"]):s.searchingOverTypes(["apps","developers","groupings","editorial-items","app-bundles","in-apps"]);for(const e of Object.keys(t))s.addingQuery(e,t[e]);switch("hints"===r?s.addingQuery("src","hint"):"trending"===r&&s.addingQuery("src","trending"),i){case Xs:s.addingContext("watch");break;case Zs:s.addingContext("messages");break;case el:s.addingContext("arcade")}return y("rotatingAdverts")&&s.addingQuery("limit[ads-result]",Is.mediaAdvertRequestLimit.toString()),s}function fi(e=ds){switch(e.deviceType){case"pad":return["iphone"];default:return[]}}function hi(e,t){const n=new Yu;return s(e)&&(n.facets=mi(e,t)),n.results=[],n}function mi(e,t){const n=[];if("mac"!==il&&n.push(new Ku("targetPlatform",[new Qu(P("SEARCH_FACET_IPAD_ONLY"),null,e.targetPlatform),new Qu(P("SEARCH_FACET_IPHONE_ONLY"),"iphone",e.targetPlatform)])),n.push(new Ku("price",[new Qu(P("SEARCH_FACET_ANY_PRICE","Any"),null,e.price),new Qu(P("SEARCH_FACET_FREE","Any"),"free",e.price)])),t){const r=t.categories;if(r.length){const t=r.filter(e=>s(e.genreId)).map(t=>new Qu(t.name,t.genreId,e.genre));t.unshift(new Qu(P("SEARCH_FACET_ANY_CATEGORY","Any"),null,e.genre)),n.push(new Ku("genre",t))}}const r=Is.searchSortOptions,i=[];i.push(new Qu(P("SEARCH_FACET_RELEVANCE"),null,e.sort));for(const t of r)i.push(new Qu(P("SEARCH_FACET_"+t),t,e.sort));i.length>1&&n.push(new Ku("sort",i));const o=Is.ageBands.map(t=>new Qu(d(t,"name"),d(t,"ageBandId"),e.ages));return o.length>0&&"mac"!==il&&n.push(new Ku("ages",o)),n}function gi(e){return"watch"===e?Xs:null}function yi(e,t,n,r,i){return As.c("searchResultContainerFromData",()=>{let a;const c=e.type,u={metricsOptions:{pageInformation:t,locationTracker:n,targetType:"card"},hideZeroRatings:!0,artworkUseCase:8,isNetworkConstrained:r,canDisplayArcadeOfferButton:fa("mixedMediaLockup"),clientIdentifierOverride:gi(i)};switch(c){case"rooms":case"multirooms":case"developers":case"editorial-items":case"groupings":const t={pageInformation:u.metricsOptions.pageInformation,locationTracker:u.metricsOptions.locationTracker},n=Nt(e,{useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0},t);if(n&&n.media&&"inAppPurchase"===n.media.kind){const e=n.media.lockup;e.theme="dark",a=new Ju("inAppPurchase",e)}else{const t=function(e,t){return As.c("editorialSerachResultFromData",()=>{let n=new ep;n.title=ne(e,"name");const r={pageInformation:t.pageInformation,locationTracker:t.locationTracker};switch(e.type){case"groupings":const t=te(e,"contentIds");if(l(t))n.collectionAdamIds=t;else{const t=Do(ee(e,"artwork"),{useCase:9,allowingTransparency:!0});n.iconArtwork=t}n.type="category";break;case"rooms":case"multirooms":n.artwork=Do(ee(e,"artwork"),{useCase:9,cropCode:"sr"}),n.collectionAdamIds=te(e,"contentIds"),n.type="collection";break;case"editorial-items":n=function(e,t){const n=Nt(e,{useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0,prevailingCropCode:"fo"},t);if(!n)return null;const r=new ep;r.type="story",r.title=n.title,r.clickAction=n.clickAction;let i=null;if(n.media)switch(n.media.kind){case"brandedSingleApp":const t=n.media;switch(r.artwork=t.art,o(r.artwork)&&(r.iconArtwork=t.icon),ne(e,"displaySubStyle")){case"GameOfDay":case"AppOfDay":const t=j(e,"card-contents");t&&(r.title=ne(t,"name")||r.title)}break;case"list":case"river":i=n.media.lockups;break;case"artwork":const a=n.media;r.artwork=a.art;break;case"grid":case"multiApp":i=n.media.lockups;break;case"video":const s=n.media;if(r.artwork=s.video.preview,r.video=s.video,n.overlay instanceof jp){const e=n.overlay;r.title=e.title,r.subtitle=e.description}else r.subtitle=s.description}if(n.overlay)switch(n.overlay.kind){case"lockup":const e=n.overlay;r.artwork||(i=[e.lockup]);break;case"lockupList":i=n.overlay.lockups;break;case"paragraph":const t=n.overlay;r.subtitle=t.paragraph.text}if(s(i)){r.collectionAdamIds=[],r.collectionAppIcons=[];for(const e of i)r.collectionAdamIds.push(e.adamId),r.collectionAppIcons.push(e.icon)}const a=ne(e,"alternateLabel");l(a)&&a!==r.title&&(r.tagline=a);const c=n.heroMedia;return l(c)&&(l(c.art)?(r.artwork=c.art,r.artwork.crop="em"):l(c.video)&&(r.video=c.video)),r.video&&(r.video.showPlaybackControls=!1,r.video.canPlayFullScreen=!1,r.video.playbackControls={}),r.collectionAdamIds||r.artwork||r.iconArtwork?r:null}(e,r);break;case"developers":if(n.artwork=Do(ee(e,"editorialArtwork.bannerUber"),{useCase:9,cropCode:"sr"}),!n.artwork){let t=W(e,"top-apps");t=t.filter(e=>!Re(e,14068));const r=[],i=[];t.forEach(e=>{r.push(e.id);const t=xo(e,{useCase:9});s(t)&&i.push(t)}),n.collectionAdamIds=r,n.collectionAppIcons=i}n.type="developer"}if(n){if(null!=n.collectionAdamIds&&n.collectionAdamIds.length){const e=n.collectionAdamIds.length;n.artworkGridType=e<=8?"large":e<=16?"mixed":"small"}const r=Oo(e,n.title,t);n.clickAction=no(e,r,null),vo(n,r)}return n})}(e,u.metricsOptions);if(!t)return null;t.title&&(t.title=t.title.replace(/\n/g," ")),t.subtitle&&(t.subtitle=t.subtitle.replace(/\n/g," ")),a=new Ju("editorial",t)}break;case"in-apps":const r=Yi(e,u);r.theme="dark",a=new Ju("inAppPurchase",r);break;case"apps":case"app-bundles":default:if(delete e.attributes.iad,"app-bundles"===c){const t=function(e,t){return As.c("bundleLockupFromData",()=>{const n=new Jc;return function(e,t,n){e&&As.c("copyDataIntoBundleLockup",()=>{qi(e,t,n);const r=H(e,"apps");if(r){const e={lockupOptions:n};t.children=eo(r,e)}})}(e,n,t),n})}(e,u);a=new Ju("bundle",t)}else{const t=Ji(e,u,Ff);a=new Ju("content",t)}}return a})}function wi(e){return JSON.stringify(e)}function Ti(e){if(Nf.has(e.builderClass))throw new Error(`routing: Registering duplicate builderClass ${e.builderClass}`);Nf.add(e.builderClass),Uf.associate(e.pageRoute,e),Mf.associate(e.shelfRoute,e),Bf.associate(e.paginationRoute,e)}function Ai(e){const t=Uf.routedObjectForUrl(e);if(!t.object)return"unknown";const n=t.object;return"ProductAdapterBuilder"===n.builderClass&&t.parameters[vl.action]!==gf&&t.parameters[vl.action]!==mf?"product":n.pageType()}function Ii(e,t){return bi(e).then(n=>new Promise((r,i)=>{if(!n)throw new Error(`Promise resolved to null action for: ${e}`);if("FlowAction"===n.actionClass){const e=n.pageData;return Oe(e,t)?void r(e):void i(new Error(`${e} is not expected type ${t.name}`))}if("TabChangeAction"===n.actionClass){const e=n;if(1===e.actions.length&&"FlowAction"===e.actions[0].actionClass){const n=e.actions[0].pageData;return Oe(n,t)?void r(n):void i(new Error(`${n} is not expected type ${t.name}`))}}i(new Error("Action is not a flowAction or a tabChangeAction that contains a single flowAction."))}))}function bi(e){return new Promise((t,n)=>{const r=Uf.routedObjectForUrl(e);r.object?r.object.handlePage(r.normalizedUrl,r.parameters,r.matchedRuleIdentifier,t,n):function(e,t,n){net.fetch({url:e.toString(),method:"GET"}).then(r=>{200===r.status&&r.redirected&&r.url?bi(r.url).then(t,n):n(new Error(`redirectAndRefetchActionIfPossible: Unhandled page url: ${e}`))})}(r.normalizedUrl,t,n)})}function Si(e){return new Promise((t,n)=>{const r=e.url;if(!r)return void n(new Error("Page token missing required `url` property"));const i=Bf.routedObjectForUrl(r);i.object?i.object.handlePagination(i.normalizedUrl,i.parameters,i.matchedRuleIdentifier,e,t,n):n(new Error(`fetchMoreOfPage: Unhandled pagination url: ${r}`))})}function ki(e,t=!0,n,r){const i=Di(e),o=Ri(e),a=i.backgroundColor||o.backgroundColor,s=Ci(e,n,r);return(("marketing-items"===e.type?p(Ei(e),"displayMaterial"):ie(e,"displayBreakoutMaterial"))||"tv"===il&&"center"===s)&&t?"material":Pi(a)}function Pi(e){return e?Y(e,50)?"dark":"light":"dark"}function Ci(e,t,n){if("phone"===il||n)return"center";if("tv"===il)return t?"center":"leading";const r="marketing-items"===e.type?d(Ei(e),"textPosition"):ne(e,"breakoutTextAlignment");if(!l(r))return"mac"===il?"center":"leading";switch(r.toLowerCase()){case"left":return"leading";case"center":return"center";case"right":return"trailing";default:return"leading"}}function vi(e,t,n=!1){const r="tv"===il;switch(e){case"leading":case"trailing":return r?"center":"leading";case"center":return n&&!r?"center":r?"leading":"marketing-items"===t.type?"center":function(e){var t;switch((null!==(t=ne(e,"breakoutTextAlignment"))&&void 0!==t?t:"").toLowerCase()){case"left":return"leading";case"center":return"center";case"right":return"trailing";default:return"mac"===il?"center":"leading"}}(t);default:return"leading"}}function Ei(e){return"marketing-items"!==e.type?null:ee(e,"display.templateParameters")}function Oi(e){return"editorial-items"===e.type?ee(e,"editorialArtwork"):ee(e,"marketingArtwork")}function _i(e){switch(e.type){case"marketing-items":return d(po(e),"callToActionLabel");default:return ne(e,"breakoutCallToActionLabel")}}function Ri(e,t=!1){const n=Oi(e),r="phone"===il,i="tv"===il;let o=r?"breakoutTall":"breakoutFullScreen";t&&(o="topShelf");const a=h(n,o);let s=null,c=null;return l(a)&&(s=Do(a,{withJoeColorPlaceholder:!0,useCase:6}),l(s)&&(s.crop=r?"oa":t?"ta":i?"od":"ob",c=s.backgroundColor)),{artwork:s,artworkData:a,backgroundColor:c}}function Di(e,t=!1){const n=function(e){return"editorial-items"===e.type?ee(e,"editorialVideo"):ee(e,"marketingVideo")}(e),r="phone"===il?"breakoutVideo9x16":"breakoutVideo16x9",i=h(n,"phone"===il?"sizzleVideo9x16":"sizzleVideo16x9")||h(n,r);let o=null,a=null,s=null;if(l(i)){s=h(i,"previewFrame");const e=Do(s,{withJoeColorPlaceholder:!0,useCase:6});l(e)&&(e.crop="sr",a=e.backgroundColor);const n=d(i,"video");l(e)&&l(n)&&(o=new Uc(n,e,{canPlayFullScreen:!1,showPlaybackControls:!1,allowsAutoPlay:!0,looping:!0,playbackControls:{prominentPlay:t},autoPlayPlaybackControls:{}}))}return{video:o,artworkData:s,backgroundColor:a}}function Li(e){const t=l(ee(e,"link")),n=ie(e,"isCanvasAvailable");return!t&&!n}function Fi(e){const t=ee(e,"link"),n=l(t),r=ie(e,"isCanvasAvailable"),i=j(e,"primary-content");if(!n&&!r&&!ae(i))return null;let a=null;if(a=n?d(t,"url"):ne(r?e:i,"url"),o(a))return null;let s=null;if(n&&"external"===d(t,"target"))s=new Zl(a);else{const e=Ai(a),t=new Jl(e);t.pageUrl=a,"product"===e&&(t.pageData=Kr(i)),s=t}return s.title=_i(e),s}function xi(e,t,n,r="white"){if(a(e)||a(e.attributes))return null;const i={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,mercuryMetricsData:Ia(e)},o=Di(e,!0),c=Ri(e),u=o.backgroundColor||c.backgroundColor,p=Ci(e,!0,!0),f="tv"===il,h="material"!==ki(e,f,!0,!0)&&!0,m=Mi(e,t,null,f,h,"wordmark");let g=null;"tv"!==il&&(g=m.description,m.description=null);const y=_n(o.artworkData||c.artworkData,!0),w="marketing-items"===e.type?function(e){if("marketing-items"!==e.type)return{type:"blue",fillColor:null,textColor:null};const t=Ei(e),n=d(t,"ctaButtonBackgroundColor"),r=d(t,"ctaButtonTextColor");return s(n)&&s(r)?{type:"custom",fillColor:z(n),textColor:z(r)}:{type:"blue",fillColor:null,textColor:null}}(e):function(e){if(!s(e))return{type:"blue",fillColor:null,textColor:null};let t=null,n=null;switch(e.type){case"color":n=e.color;break;case"horizontalGradient":case"verticalGradient":n=e.gradientStartColor}const r=s(Vf.find(e=>(function e(t,n){if(null===t&&null===n)return!0;if(null===t&&null!==n||null!==t&&null===n)return!1;const r=t.type,i=n.type;if("named"===r&&"named"===i){const e=n;return t.name===e.name}if("rgb"===r&&"rgb"===i){const e=t,r=n;return e.red===r.red&&e.green===r.green&&e.blue===r.blue}return"dynamic"===r&&"dynamic"===i&&e(t,n)})(e,n)));return t=!e.isFallbackStyle&&r?{type:"custom",fillColor:n,textColor:K(n===$f?"white":"systemBlue")}:{type:"custom",fillColor:K("systemBlue"),textColor:K("white")},t}(y),T=new xs("arcade",Is.arcadeAppAdamId,r,null,"arcade",null,w,null,null,null,null,null,null,null,null,Is.arcadeProductFamilyId),A=new Ec(m,T,{backgroundColor:u,wantsMaterialDetailBackground:!1,wantsBlur:h,badgeColor:null,titleColor:null,descriptionColor:null,callToActionColor:null,textAlignment:null,detailsPosition:p},null,g,c.artwork,o.video),I=Oo(e,A.details.title,Object.assign(Object.assign({},i),{targetType:"upsellBreakout"}));I.displaysArcadeUpsell=!Is.isArcadeComingSoonEnabled,vo(A,I),ka(I,A.details.title);const b=Bi(e,t,"arcadeTabHeader",i);return A.offerButtonAction=b,Pa(i.locationTracker),l(n)&&a(n.pageTitleEffect)&&0===n.shelves.length&&(n.pageTitleEffect=y),va(n.metricsLocationTracker),A}function Ni(e){return _i(e)}function Ui(e){switch(e.type){case"editorial-items":return ne(e,"editorialNotes.short");default:return ne(e,"subtitle")}}function Mi(e,t,n,r,i,o){let a=null;switch(o){case"wordmark":a={type:"wordmark"};break;case"text":const t="marketing-items"===e.type?ne(e,"badge"):ne(e,"label");a=l(t)?{type:"text",title:t}:{type:"none"};break;default:a={type:"none"}}let c=function(e){switch(e.type){case"editorial-items":return ne(e,"editorialNotes.name");default:return ne(e,"title")}}(e),u=Ui(e),p=ki(e,r,!0,!0);const d=Ci(e,!0,!0);return i&&(p="dark"),s(t)&&(c=yt(c,t,n),u=yt(u,t,n)),new hu(c,u,a,null,p,vi(d,e,!0))}function Bi(e,t,n,r){let i=null;if(Is.isArcadeComingSoonEnabled)i=new Zl("https://www.apple.com/apple-arcade/#notify-me"),i.title=Ni(e);else{const o=Va(n),a={inAppData:t,editorialData:null,marketingItemData:null};"marketing-items"===e.type?a.marketingItemData=e:a.editorialData=e,i=$i(a,Ni(e),r,o)}return i}function $i(e,t,n,r){const i=e.marketingItemData;if(s(i)){const e=po(i),o=d(e,"offerName"),a=d(e,"buyParams");if(!s(o)||!s(a))return Vi(t,r);const l=Is.arcadeAppAdamId,c=new wc(o,l,{buyParams:a,productIdentifier:o},r),u=Object.assign({id:l,actionType:"buy",targetType:"button",subscriptionSKU:o,actionContext:"Arcade",actionDetails:{buyParams:a},offerType:"subscribe",mercuryMetricsData:Ia(i)},n);return c.title=t,xa(c,u),c}{const o=Vi(t,r),a=d(uo(e.inAppData),"buyParams");return xa(o,Object.assign({id:Is.arcadeAppAdamId,actionType:"buy",targetType:"button",subscriptionSKU:Is.arcadeProductId,actionContext:"Arcade",actionDetails:{buyParams:a},offerType:"subscribe",mercuryMetricsData:Ia(i)},n)),o}}function Vi(e,t){const n=new wc(Is.arcadeProductId,Is.arcadeAppAdamId,null,t);return n.title=e,n}function qi(e,t,n){e&&As.c("copyDataIntoLockup",()=>{t.adamId=e.id,t.bundleId=ye(e,"bundleId");let r=null;n&&n.clientIdentifierOverride&&(r=n.clientIdentifierOverride),t.icon=xo(e,{useCase:n.artworkUseCase},r),n&&n.titleObjectPath?t.title=ye(e,n.titleObjectPath):t.title=ne(e,"name");const i=aa(e);!i||"tv"===il&&"com.apple.Arcade"===host.clientIdentifier||(t.decorations=["arcade"]),t.subtitle=ji(e),t.developerTagline=ye(e,"subtitle"),t.editorialTagline=sa(e,"tagline"),t.editorialDescription=sa(e,"standard"),t.shortEditorialDescription=sa(e,"short"),t.ageRating=ne(e,"contentRatingsBySystem.appsApple.name"),Qn(e)||(oe(e,"userRating.ratingCount")>0||!n||!n.hideZeroRatings)&&(t.rating=oe(e,"userRating.value"),t.ratingCount=_(oe(e,"userRating.ratingCount")));const o=Da(e,n.metricsOptions),a=uo(e),c=Aa(e,t.icon),p=fo(a,e,c,o),f=u(a,"discounts");let h=Io(p,e,o,"default",n.ignoreIconInSidepack,r);s(n)&&l(n.externalDeepLinkUrl)&&(h=ft(h,p.adamId,n.externalDeepLinkUrl,n.metricsOptions)),t.buttonAction=h;const m=Un(e);if(m){const e=new Ac,n=Ee(o);n.actionType="share",n.targetType="lockup",xa(e,n);const r=new Gc;r.shareAction=e,r.shareSheetData=m,t.contextMenuData=r}const g=lo(e);let y=!1;g&&(y=!(To(uo(g))>0));const w=function(e,t){switch(e){case"in-apps":return t?"arcade":"inAppPurchase";default:return t?"arcadeApp":"app"}}(e.type,i);if(t.offerDisplayProperties=n?Po(p,w,e,n.offerStyle,n.offerEnvironment,f[0],y):Po(p,w,e,null,null,f[0],y),!n||!n.skipDefaultClickAction){const i=s(n)?n.externalDeepLinkUrl:null;t.clickAction=oo(e,o,r,n.ignoreIconInSidepack,i)}n&&n.ordinal&&(t.ordinal=n.ordinal);const T=me(e,"editorialBadgeInfo");if(T){const e=d(T,"editorialBadgeType");t.isEditorsChoice=e&&"editorialPriority"===e}t.children=Gi(e,n);const A=Eo(e,t,c,n.metricsOptions,n.canDisplayArcadeOfferButton);vo(t,A)})}function Gi(e,t){const n=H(e,"apps");return n?eo(n,{lockupOptions:t,filter:0}):null}function Hi(e,t,n,r){e&&(r.isNetworkConstrained||As.c("copyMediaIntoMixedMediaLockup",()=>{t.screenshots=$o(e,4,null,r.clientIdentifierOverride);const i=t.screenshots[0];t.trailers=[];const o=Uo(e,n,r.metricsOptions,t.adamId);s(o)&&(a(i)||o.mediaPlatform.isEqualTo(i.mediaPlatform))&&t.trailers.push(o)}))}function ji(e){return As.c("subtitleFromData",()=>ye(e,"subtitle")||function(e){return As.c("categoryFromData",()=>{const t=W(e,"genres");if(t.length>0){let e=t[0];const n=6014..toString();if(e.id===n)for(const r of t){const t=ne(r,"parentId");if(r.id!==n&&t===n){e=r;break}}return ne(e,"name")}{const t=te(e,"genreNames");return t.length>0?t[0]:null}})}(e))}function Wi(e,t){const n=(new Cd).param(vl.id,t).param(El.inAppPurchaseId,e).build();return`${kl.internal}:/${Pl.product}/${Pl.install}/?${n}`}function zi(e,t){return As.c("lockupFromData",()=>{if(!e)return As.d("ignoredValue","data"),null;if(!ae(e))return null;switch(e.type){case"in-apps":return Yi(e,t);default:const n=new Hc;return qi(e,n,t),n}})}function Yi(e,t){return As.c("inAppPurchaseLockupFromData",()=>{const n=new Kc;return function(e,t,n){e&&As.c("copyDataIntoInAppPurchaseLockup",()=>{qi(e,t,n);const r=lo(e);if(!r)return;t.productIdentifier=ne(e,"offerName"),t.parent=zi(r,n),t.description=ne(e,"description.standard"),t.isVisibleByDefault=ie(e,"isMerchandisedVisibleByDefault"),t.isSubscription=ie(e,"isSubscription");const i=uo(e),o=u(i,"discounts");t.offerDisplayProperties.hasDiscount=o.length>0,t.offerDisplayProperties.subscriptionFamilyId=ne(e,"subscriptionFamilyId");const a=new Jl("inAppPurchaseInstall");a.presentationContext="presentModalFormSheet";const s=Wi(t.adamId,r.id);a.pageUrl=s;const l=new up;l.parentLockup=Ee(t.parent),l.lockup=Ee(t),l.preInstallOfferDescription=At(i),a.pageData=l;const c=ne(e,"offerName"),p=ye(r,"bundleId"),d=ne(r,"firstVersionSupportingInAppPurchaseApi");if(d){const e=new ic(c,r.id,p,a,d);t.parent&&(e.appTitle=t.parent.title),e.productTitle=t.title,xa(e,Object.assign(Object.assign({},n.metricsOptions),{id:t.adamId,idType:"its_id",actionDetails:{parentAdamId:r.id}})),t.buttonAction=e}else{const e=new fc("default");e.title=P("SEED_IN_APP_UNSUPPORTED_MESSAGE_OPTION_1"),e.message="",e.isCancelable=!0,t.buttonAction=e}const f=Eo(e,t,"iap",n.metricsOptions,n.canDisplayArcadeOfferButton);if(!n||!n.skipDefaultClickAction){const n=ro(e,f);t.clickAction=n,t.productAction=n}!function(e,t){e&&(e.impressionMetrics||vo(e,t),e.parent&&e.parent.adamId&&(e.impressionMetrics.fields.parentAdamId=ga(e.parent.adamId)))}(t,f)},"item.offer.buyParams")}(e,n,t),n})}function Ki(e,t){return As.c("screenshotsLockupFromData",()=>{const n=new jc;return function(e,t,n){e&&As.c("copyDataIntoScreenshotsLockup",()=>{qi(e,t,n),t.screenshots=$o(e,4,null,n.clientIdentifierOverride)})}(e,n,t),n})}function Qi(e,t,n){return As.c("trailersLockupFromData",()=>{const r=new zc;return function(e,t,n,r){e&&As.c("copyDataIntoTrailersLockup",()=>{qi(e,t,r),t.trailers=Uo(e,n,r.metricsOptions,t.adamId)})}(e,r,n,t),r})}function Ji(e,t,n){return As.c("mixedMediaLockupFromData",()=>{const r=new Wc;return qi(e,r,t),Hi(e,r,n,t),r})}function Xi(e,t,n){return As.c("adLockupFromData",()=>{const r=new Wc;if(ie(e,"iad.format.images")){Hi(e,r,n,t);const i=te(e,"iad.assetOverride");if(i.length){const e=function(e,t){const n=new Set(t),r=[],i=[],o=function(e,r){if(0===n.size)return!1;for(const i of t)if(i===r||-1!==e.indexOf(i))return n.delete(i),!0;return!1};if(t.length&&(e.screenshots.length||e.trailers.length)){if(e.trailers.length)for(const t of e.trailers[0].videos)o(t.videoUrl,t.preview.checksum)&&r.push(t);if(e.screenshots.length)for(const t of e.screenshots[0].artwork)o(t.template,t.checksum)&&i.push(t)}return!(0!==n.size||!r.length&&!i.length||(e.trailers.length&&(e.trailers[0].videos=r),e.screenshots.length&&(e.screenshots[0]=new Bs(i,e.screenshots[0].mediaPlatform)),0))}(r,i);t.metricsOptions.pageInformation.iAdInfo&&t.metricsOptions.pageInformation.iAdInfo.iAdIsPresent&&t.metricsOptions.pageInformation.iAdInfo.setSpecifiedCreativeUsed(e)}qi(e,r,t)}else qi(e,r,t),r.screenshots=null;r.offerDisplayProperties&&(r.offerDisplayProperties=r.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,"colored","ad")),ie(e,"iad.format.userRating")||(r.rating=null,r.ratingCount=null);const i=ee(e,"iad"),o=ne(e,"iad.impressionId"),a=ne(e,"iad.privacy"),s={};t.metricsOptions.pageInformation.iAdInfo.iAdClickEventFields&&Object.assign(s,t.metricsOptions.pageInformation.iAdInfo.iAdClickEventFields);const l=new bc(o,s),c=new Zu(a),u=new ec([c,l]);u.title=P("IAD_PRIVACY_MARKER_BUTTON_TITLE");const p=new Xu(i,o,u);"regular"===ne(e,"iad.format.icon")?p.iconStyle="regular":p.iconStyle="small",r.searchAd=p;const d=new ec([r.clickAction,l]);return r.clickAction=d,Oe(r.buttonAction,oc)?r.buttonAction=r.buttonAction.newOfferStateActionAddingActionToExistingActions(l):r.buttonAction=new ec([r.buttonAction,l]),r})}function Zi(e,t,n,r,i){return As.c("arcadeLockupFromData",()=>{const o=e.marketingItemData||e.editorialData,a=new Qc;a.title=P("ARCADE_LOCKUP_TITLE","Apple Arcade");const s=e.marketingItemData;t=Object.assign(Object.assign({},t),{mercuryMetricsData:Ia(s)});let c,u=Ui(o);l(u)&&(u="iOS"===host.platform?u.replace(/\n/g," "):u,a.subtitle=yt(u,e.inAppData),a.nonsubscribedSubtitle=a.subtitle),a.subscribedSubtitle=P("ARCADE_STORY_LOCKUP_SUBSCRIBED_TITLE","100+ Extraordinary Games");const p=Ni(o),d=gt(u),f="marketing-items"===o.type;y("arcadeLockupInNavBar")&&(!f&&d||f)?(c=Bi(e.marketingItemData||e.editorialData,e.inAppData,n,t),c.title=p):l(p)?(c=$a("arcadeStoryCanvas",null,Object.assign(Object.assign({},t),{id:e.editorialData.id})),c.title=p):(c=qa(t.pageInformation,t.locationTracker),c.title=P("ARCADE_ACTION_TITLE_EXPLORE","EXPLORE")),a.unsubscribedButtonAction=c;const h=qa(t.pageInformation,t.locationTracker);h.title=P("ARCADE_ACTION_TITLE_EXPLORE","EXPLORE"),a.subscribedButtonAction=h;const m=Oo(e.marketingItemData||e.editorialData,a.title,t);m.displaysArcadeUpsell=!0,vo(a,m);const g=new xs("arcade",Is.arcadeAppAdamId,r,null,i,null,null,null,null,null,null,null,null,null,null,Is.arcadeProductFamilyId);return g.titles.subscribed=P("ARCADE_ACTION_TITLE_EXPLORE","EXPLORE"),a.offerDisplayProperties=g,a})}function eo(e,t){return o(e)?[]:to(e.data,t)}function to(e,t){return As.c("lockupsFromData",()=>{if(!e)return[];const n=[];let r=!1;for(let i=0;i<e.length&&!r;i++){const a=e[i];if(o(a.attributes)){t.contentUnavailable&&(r=t.contentUnavailable(a.id,i));continue}const s=t.lockupOptions;let l=14334;if(t.includeOrdinals){const n="descending"===t.ordinalDirection?e.length-i:i+1;s.ordinal=E(n).toString()}if(null!==t.filter&&(l=t.filter),Re(a,l))continue;t.excludeIconInSidepacksIfNotTvOnly&&(de(a,"tvos")||(s.ignoreIconInSidepack=!0));const c=zi(a,s);c.isValid()&&(n.push(c),va(t.lockupOptions.metricsOptions.locationTracker))}return n})}function no(e,t,n,r=!1,i=null){return As.c(`actionFromData: ${e.type}`,()=>{switch(e.type){case"apps":case"app-bundles":return oo(e,t,n,r,i);case"in-apps":return ro(e,t);case"editorial-items":return io(e,t,n);case"multiple-system-operators":return function(e,t){return e?As.c("msoActionFromPlatformData",()=>{const n=ne(e,"url");if(!n)return As.d("ignoredValue","string","url"),null;const r=new Jl("mso");return r.pageUrl=n,r.title=ne(e,"name"),xa(r,t),r}):null}(e,t);case"groupings":return function(e,t){return e?As.c("groupingActionFromData",()=>{if(!e.href)return As.d("ignoredValue","string","href"),null;const n=new Jl("page");return n.pageUrl=M(function(e){const t=new ph(e).includingAttributes(["editorialArtwork","editorialVideo","isAppleWatchSupported","requiredCapabilities","minimumOSVersion"]),n=es();return s(n)&&t.addingQuery("contexts",n),t}(e.href)).toString(),n.title=ao(e),xa(n,t),n}):null}(e,t);case"developers":default:return function(e,t){return e?As.c("genericActionFromData",()=>{const n=d(e,"type"),r=ne(e,"url");if(!r)return As.d("ignoredValue","string","url"),null;const i=new Jl("page");return i.pageUrl=r,i.title="groupings"===n?ao(e):ne(e,"name"),xa(i,t),i}):null}(e,t)}})}function ro(e,t){return As.c("iAPActionFromData",()=>{const n=lo(e);if(!n)return null;const r=new Jl("product"),i=ne(n,"url"),o=ne(e,"offerName"),a=ie(e,"isSubscription");return r.pageUrl=function(e,t,n){const r=(new Cd).param(Ol.url,e).param(vl.offerName,t).param(Ol.isSubscription,n.toString()).build();return`${kl.internal}:/${Pl.product}/${Pl.lookup}/?${r}`}(i,o,a),r.title=ne(e,"name"),xa(r,t),r})}function io(e,t,n,r){return e?As.c("editorialItemActionFromData",()=>{const i=ne(e,"displaySubStyle"),a=ee(e,"link"),c="List"===i||"NumberedList"===i,u=ie(e,"isCanvasAvailable")||c,p=W(e,"card-contents"),f=l(p)&&1===p.length;if(function(e){const t=d(e,"target");return t&&"external"===t}(a))return function(e,t){return As.c("editorialItemExternalLinkActionFromData",()=>{const n=d(ee(e,"link"),"url"),r=new Zl(n),i=sa(e,"short");if(i)r.title=i;else{const e=new Fl(n);r.title=e.host}return xa(r,t),r})}(e,t);let h,m;if(u){h="article";const t=Fl.from(ne(e,"url"));s(r)&&t.param(vl.recoMetrics,JSON.stringify(r)),m=t.build()}else{if(f)return no(p[0],t,n);h="unknown",m=d(a,"url")}const g=new Jl(h);g.pageUrl=m;let y=sa(e,"name");return o(y)&&(y=d(e,"label")),g.title=y,xa(g,t),g}):null}function oo(e,t,n,r=!1,i=null){return e?As.c("productActionFromData",()=>{let o=ne(e,"url");if(!o)return As.d("ignoredValue","string","url"),null;let a={};const c=new Fl(o);if(t.isAdvert){const n=d(e,"iad.lineItem");null!==n&&n.length>0&&c.param(ju,n);const r=t.pageInformation.iAdInfo.clickFields;c.param(Hu,JSON.stringify(r)),a={iAdClickFields:r,iAdLineItem:n}}a.externalDeepLinkUrl=i,s(i)&&c.param(vp,i),a.clientIdentifierOverride=n,l(n)&&c.param("clientIdentifierOverride",n),o=c.toString();const u=new Jl("product");return u.pageUrl=o,u.pageData=Kr(e,a,r),u.title=ne(e,"name"),t&&t.pageInformation&&(u.referrerUrl=t.pageInformation.pageUrl),mo(e)?xa(u,Object.assign(Object.assign({},t),{offerType:"preorder",offerReleaseDate:wo(e)})):xa(u,t),u}):null}function ao(e){const t=te(e,"genreNames");return l(t)?t[0]:ne(e,"name")}function so(e){if(!e)return!1;if("watch"===il)return!0;const t=ye(e,"requiredCapabilities");return!t||A(t.split(" "))}function lo(e){return e?j(e,"app"):null}function co(e,t,n,r,i,o){return As.c("purchaseConfigurationFromProduct",()=>{const a=ne(e,"name");let s=ne(e,"artistName");s||(s="test");const l=Ss.bundleIdFromData(e),c=Ho(e),u=ne(e,"iad.lineItem"),p=ye(e,"preflightPackageUrl"),d=aa(e),f=new Fs(t,s,a,l,c,n,r,o,u,!1,p,d);return f.pageInformation=i,f})}function uo(e){return As.c("offerDataFromData",()=>{const t=ge(e,"offers");return 0===t.length?null:t[0]})}function po(e){if("marketing-items"!==e.type)return null;const t=te(e,"offers");return 0===t.length?null:t[0]}function fo(e,t,n,r){return As.c(`media_offerActionFromOfferData: ${t.id}`,()=>{let i=d(e,"buyParams");if(o(i))return As.d("ignoredValue","string","item.offer.buyParams"),null;"app-bundles"===t.type&&(i.indexOf("rebuy")>=0?i=i.replace("rebuy=false","rebuy=true"):(i.length>0&&(i+="&"),i+="rebuy=true"));const a=t.id;if(o(a))return As.d("ignoredValue","string","item.offer.id"),null;const s=ho(e),l=co(t,i,s,r.excludeAttribution,r.pageInformation,n),c=Ao(e,a,l);return function(e,t){La(e,t.pageInformation,ba(t,e.title),t.isAdvert)}(c,r),c})}function ho(e){return As.c("isPreorderFromOfferData",()=>"preorder"===d(e,"type"))}function mo(e){return As.c("isPreorderFromData",()=>{const t=ge(e,"offers");return 0!==t.length&&ho(t[0])})}function go(e){return!o(e)&&!o(e.purchaseConfiguration)&&e.purchaseConfiguration.isPreorder}function yo(e){return o(e)||o(e.price)||0===e.price}function wo(e){return As.c("expectedReleaseDateFromData",()=>Ce(ne(e,"offers.0.expectedReleaseDate")))}function To(e){const t=d(e,"type");return"buy"===t||"complete"===t||"preorder"===t?f(e,"price"):null}function Ao(e,t,n){return As.c("offerActionFromOfferData",()=>{const r=d(e,"type");let i;switch(r){case"get":case"preorder":i=P("OFFER_BUTTON_TITLE_GET","GET");break;default:i=r}let o=null,a=null;const s=To(e);s>0&&(o=s,a=d(e,"priceFormatted"));const l=Ce(d(e,"expectedReleaseDate")),c=new tc(i,t,n);return c.price=o,c.priceFormatted=a,c.expectedReleaseDate=l,c})}function Io(e,t,n,r="default",i=!1,a=null){if(ca(t)){if("default"===r)return no(t,n,null,i);const o=ye(t,"bundleId");if(l(o)){const t=_e("mac",o),n=new Zl(t);return new oc(e.adamId,n)}}const c=go(e);if("default"===r){if("app-bundles"===t.type||ua(t))return no(t,n,null,i);if(c&&"tv"!==il)return function(e,t,n,r=!1){if(o(e))return null;const i=no(t,n,null,r);if(!i)return e;const a=new oc(e.adamId,i);return a.buyAction=e,a}(e,t,n)}if(de(t,"tvos")&&"tv"!==il)return function(e,t){const n=new fc("default");n.title=P("BUY_TV_ONLY_ALERT_TITLE"),n.message=P("BUY_TV_ONLY_ALERT_MESSAGE"),n.isCancelable=!0,n.buttonActions=t?[ko(e)]:[e],n.buttonTitles=[P("BUY_TV_ONLY_ALERT_BUTTON_TITLE")];const r=new oc(e.adamId,n);return r.title=e.title,r}(e,we(t,"requiresGameController"));if(!we(t,"isDeliveredInIOSAppForWatchOS")&&we(t,"isStandaloneForWatchOS")&&"watch"!==il)return function(e){const t=new fc("default");t.title=P("BUY_WATCH_ONLY_ALERT_TITLE"),t.message=P("BUY_WATCH_ONLY_ALERT_MESSAGE"),t.isCancelable=!0,t.buttonActions=[e],t.buttonTitles=[P("BUY_WATCH_ONLY_ALERT_BUTTON_TITLE")];const n=new oc(e.adamId,t);return n.title=e.title,n}(e);const u=ye(t,"minimumWatchOSVersion");return l(a)&&a===Xs&&da(u)?function(e,t){const n=new fc("default");n.title=P("AppStore.ProductPage.WatchOSUpdateRequired.Title").replace("{osVersion}",t),n.message=P("AppStore.ProductPage.WatchOSUpdateRequired.Message").replace("{osVersion}",t),n.buttonActions=[e],n.buttonTitles=[P("ACTION_OK")];const r=new oc(e.adamId,e);return r.buyAction=n,r}(e,u):aa(t)||"tv"===il?function(e,t,n,r){if(!aa(t))return e;let i=null;if(y("amsUpsellSheets")&&Ma()){const e=new vc("arcade",n,{contentId:t.id}),r=new Jl("upsellMarketingItem");r.pageData=e,i=r}else{const o=`${kl.internal}://${Cl.arcadeSubscribePage}`,a=new Fl(o).param(vl.appId,t.id).param(vl.context,n);i=new Jl("arcadeSubscribe",a.build());const s=new Sc(null,null,null,null);s.primaryIcon=Lo(t,r,{useCase:3});const l=Da(t,r);s.postSubscribeAction=bo(t,n,l),i.pageData=s,r&&r.pageInformation&&(i.referrerUrl=r.pageInformation.pageUrl),e instanceof tc&&(r.actionDetails=Object.assign({buyParams:e.purchaseConfiguration.buyParams},r.actionDetails)),Fa(i,r)}const o=new oc(t.id,e);return o.subscribePageAction=i,o}(function(e,t,n,r){if(o(e))return null;if("tv"!==il)return e;const i=new rc,a=yo(e),l=e.purchaseConfiguration.appName;i.shouldCheckForAvailableDiskSpace=!n,i.shouldCheckForGameController=we(t,"requiresGameController"),i.shouldPromptForConfirmation=!0;const c=oe(t,"contentRatingsBySystem.appsApple.value");if(s(c)&&(i.checkRestrictionsForContentRating=c),a){const e=P(n?"TV_OFFER_ALERT_TITLE_PREORDER_FREE":"TV_OFFER_ALERT_TITLE_FREE");i.title=e.replace("{title}",l)}else{const t=P(n?"TV_OFFER_ALERT_TITLE_PREORDER_PAID":"TV_OFFER_ALERT_TITLE_PAID");i.title=t.replace("{title}",l).replace("{price}",e.priceFormatted)}const u=Ee(e);u.title=P(n?"OFFER_BUTTON_TITLE_PREORDER":a?"OFFER_BUTTON_TITLE_GET":"OFFER_BUTTON_TITLE_BUY"),i.completionAction=u,i.shouldIncludeActiveAccountInFooterMessage=!0;const p=[];n&&(y("preorderTerms")?p.push(P(a?"PREORDER_TERMS_FREE":"PREORDER_TERMS_PAID")):p.push(P("TV_PREORDER_TERMS"))),we(t,"hasInAppPurchases")&&p.push(P("OFFERS_IN_APP_PURCHASES","Offers In-App Purchases")),p.length>0&&(i.footerMessage=p.join(P("TV_OFFER_ALERT_FOOTER_LINE_BREAK"))),i.impressionMetrics=u.impressionMetrics;const d=Ee(r);o(d)||(d.actionType="buyInitiate",d.targetType="button",xa(i,r));const f=Ee(i);f.shouldPromptForConfirmation=!1,f.title=null,f.footerMessage=null;const h=new oc(e.adamId,f);return aa(t)||(h.buyAction=i),h.openAction=e,h}(e,t,c,n),t,function(e){switch(e){case"productPage":return"arcadeProductPage";case"default":return"arcadeGroupingLockup";default:return"arcadeGeneric"}}(r),n):So(e,c,n)}function bo(e,t,n){switch(t){case"arcadeProductPage":case"arcadeGroupingLockup":const t=xo(e,{useCase:3}),r=Da(e,n);return fo(uo(e),e,Aa(e,t),r);default:return null}}function So(e,t,n){if(o(e))return null;if(ul||t)return e;const r=new Ac;r.impressionMetrics=e.impressionMetrics;const i=Ee(n);o(i)||(i.actionType="buyInitiate",i.targetType="button",xa(r,i));const a=new nc(e,r);return a.confirmationAccessibilityAction=function(e){if(o(e))return null;const t=new fc("default");o(e.priceFormatted)?(t.title=P("GET"),t.message="Are you sure you want to get "+e.purchaseConfiguration.appName):(t.title="Buy App",t.message=`Are you sure you want to buy ${e.purchaseConfiguration.appName} for ${e.priceFormatted}`),t.isCancelable=!0,t.buttonActions=[e];const n=new oc(e.adamId,e);return n.buyAction=t,n}(e),a}function ko(e){const t=new fc("default");return t.title=P("BUY_TV_GAME_CONTROLLER_REQUIRED_ALERT_TITLE"),t.message=P("BUY_TV_GAME_CONTROLLER_REQUIRED_ALERT_MESSAGE"),t.buttonTitles=[P("BUY_TV_GAME_CONTROLLER_REQUIRED_ALERT_BUTTON_TITLE")],t.isCancelable=!0,t.buttonActions=[e],t}function Po(e,t,n,r,i,a,l,c="default"){return o(e)?null:As.c("displayPropertiesFromOfferAction",()=>{let o=r;Re(n,15798)&&(o="disabled");const u=go(e);so(n)||(o="disabled");const p=lo(n);let f=null;p&&(f=p.id);let h="none";u&&(aa(n)?o="disabled":h="preorder");let m=new xs(t,e.adamId,o,f,i);m.offerLabelStyle=h;const g=yo(e);m.isFree=g;let y=null;if(y="default"!==c||"app-bundles"!==n.type&&!ca(n)?"productPage"!==c&&ua(n)?P("OFFER_BUTTON_TITLE_VIEW"):g?!u||"tv"!==il||"productPage"!==i&&"arcadeProductPage"!==i?e.title:P("OFFER_BUTTON_TITLE_PREORDER"):"tv"!==il||"productPage"!==i&&"arcadeProductPage"!==i?e.priceFormatted:u?P("OFFER_BUTTON_TITLE_PREORDER_WITH_PRICE").replace("{price}",e.priceFormatted):P("OFFER_BUTTON_TITLE_BUY_WITH_PRICE").replace("{price}",e.priceFormatted):P("OFFER_BUTTON_TITLE_VIEW"),m.titles.standard=y,ul||(m.titles.confirmation=P(g?"ACTION_GET_CONFIRM":"ACTION_BUY_CONFIRM")),aa(n)&&(m.titles.standard=P("OFFER_BUTTON_TITLE_ARCADE_STANDARD"),m.titles.trial=P("OFFER_BUTTON_TITLE_ARCADE_TRY"),m.titles.open=P("OFFER_BUTTON_TITLE_ARCADE_OPEN"),m.titles.notSubscribed=P("OFFER_BUTTON_TITLE_ARCADE_NOT_SUBSCRIBED")),a){const e=d(a,"modeType"),t=d(a,"priceFormatted");if(s(t)&&s(e)){let n=null,r=null;switch(e){case"FreeTrial":l?(n=P("INTRO_PRICE_OFFER_FREE_TRIAL"),r=P("INTRO_PRICE_OFFER_FREE_TRIAL")):(n=P("INTRO_PRICE_OFFER_FREE_TRIAL"),r=P("INTRO_PRICE_OFFER_TRIAL"));break;case"PayUpFront":const e=P("INTRO_PRICE_OFFER_PAID_UPFRONT_TRIAL").replace("{price}",t);l?(n=e,r=e):(n=e,r=P("INTRO_PRICE_OFFER_TRIAL"));break;case"PayAsYouGo":n=P("INTRO_PRICE_OFFER_TRIAL"),r=P("INTRO_PRICE_OFFER_TRIAL")}m.titles.discountOwnedParent=n,m.titles.discountUnownedParent=r,m.subtitles.discountOwnedParent=P("INTRO_PRICE_OFFER_SUBTITLE"),m.subtitles.discountUnownedParent=P("INTRO_PRICE_OFFER_SUBTITLE");const i=10;let o=!1;for(const e of Object.keys(m.titles))if(m.titles[e].length>i){o=!0;break}o&&(m=m.newOfferDisplayPropertiesChangingAppearance(!1,null,"widthConstrainedLockup"))}}const w=we(n,"hasInAppPurchases");if(m.hasInAppPurchases=w,w){const e=P("INLINE_IN_APP_PURCHASES");m.subtitles.standard=e,ul||(m.subtitles.confirmation=e)}m.isDeletableSystemApp=Ss.isDeletableSystemAppFromData(n);const T=oe(n,"contentRatingsBySystem.appsApple.value");return m.contentRating=T,"app-bundles"===n.type&&(m.offerToken={offerAction:e,offerDisplayProperties:Ee(m)}),m})}function Co(e,t){const n=o(e.title)?t.title:e.title,r={id:ga(t.id),idType:ma(t),impressionType:ha(t),name:ga(n)};if(t&&t.kind&&(r.kind=t.kind),t&&t.softwareType&&(r.softwareType=t.softwareType),t&&t.recoMetricsData&&Object.assign(r,t.recoMetricsData),t&&t.mercuryMetricsData&&Object.assign(r,t.mercuryMetricsData),t&&t.lockupDisplayStyle&&(r.platformDisplayStyle=t.lockupDisplayStyle),t&&t.locationTracker){const e=Ca(t.locationTracker);r.impressionIndex=e,""===r.id&&(r.id=e.toString(),r.idType="sequential")}return s(t.offerType)&&(r.offerType=t.offerType),t&&s(t.displaysArcadeUpsell)&&(r.displaysArcadeUpsell=t.displaysArcadeUpsell),s(t.adamId)&&(r.adamId=t.adamId),""===r.id&&console.log(`impressionId missing. Tracking broken for ${r.name} of ${r.impressionType}`),r}function vo(e,t){e&&(e.impressionMetrics=new Kl(Co(e,t)))}function Eo(e,t,n,r,i){const o=Oo(e,t.title,r);return o.lockupDisplayStyle=n,i&&aa(e)&&(o.displaysArcadeUpsell=!0),o}function Oo(e,t,n){return As.c("impressionOptions",()=>{const r=function(e){const t=d(e,"type"),n=pe(e,"mac",!0),r=de(e,"mac",!0),i=function(e,t,n=!1){const r=new Set(he(e,n));for(const e of t)if(r.has(e))return!0;return!1}(e,["iphone","ipad","ipod","tvos","watch"],!0),o=fe(e,["iphone","ipad","ipod","tvos","watch"],!0),a="phone"===il||"pad"===il||"tv"===il||"watch"===il;if(r||n&&"mac"===il)switch(t){case"apps":return"macSoftware";case"app-bundles":return"macSoftwareBundle"}if(o||i&&a)switch(t){case"apps":return"iosSoftware";case"app-bundles":return"mobileSoftwareBundle"}switch(t){case"in-apps":return"softwareAddOn";case"groupings":return"grouping";case"editorial-elements":case"editorial-items":return"editorialItem";default:return null}}(e),i=function(e){return aa(e)?"Arcade":null}(e),o=Object.assign(Object.assign({},n),{kind:r,softwareType:i,title:t,id:e.id});return mo(e)&&(o.offerType="preorder"),o})}function _o(e){throw new Error("This method should never be called with value: ${value}")}function Ro(e){switch(e){case"inAppPurchaseLockup":case"appShowcase":case"smallLockup":return 1;case"mediumLockup":return 2;case"largeLockup":return 3;default:return 0}}function Do(e,t){return As.c("artworkFromApiArtwork",()=>{const n=!!s(t.allowingTransparency)&&t.allowingTransparency,r=!!s(t.withJoeColorPlaceholder)&&t.withJoeColorPlaceholder,i=d(e,"url");if(o(i))return null;const a=p(e,"hasP3"),l=[nt(n,a,t.useCase)];let c;if(p(e,"supportsLayeredImage")&&"tv"===il&&l.push(rt("lcr",a,t.useCase)),n)c=K("clear");else if(r){const t=z(d(e,"bgColor"));o(t)||(c=t)}o(c)&&(c=K("placeholderBackground"));const u=new Ms(i,t.overrideWidth||f(e,"width"),t.overrideHeight||f(e,"height"),l);return u.backgroundColor=c,u.checksum=d(e,"checksum"),s(t.style)&&(u.style=t.style),s(t.cropCode)&&(u.crop=t.cropCode),u})}function Lo(e,t,n){return As.c("impressionableAppIconFromData",()=>{const r=new Lc(xo(e,n)),i=ne(e,"name");return vo(r,Oo(e,i,t)),r})}function Fo(e,t,n){return As.c("impressionableAppIconFromData",()=>{const r=[];a(t.targetType)&&(t.targetType="artwork");for(const i of e){const e=Lo(i,t,n);e&&(r.push(e),va(t.locationTracker))}return r})}function xo(e,t,n){return As.c("iconFromData",()=>{if(!e)return As.d("ignoredValue","data"),null;const r=e.type;let i;switch(n){case Xs:case Zs:i="ios";break;case tl:i="appletvos";break;default:i=Ae(e)}const o=n||host.clientIdentifier,a=ce(e,i,"circularArtwork");if((o===Xs||"watch"===il||we(e,"isStandaloneForWatchOS"))&&s(a))return Do(a,Object.assign(Object.assign({},t),{style:"round"}));const l=ra(e),c=ta(e)&&(o===Zs||l),u=ce(e,i,"ovalArtwork");if(c&&s(u))return Do(u,Object.assign(Object.assign({},t),{style:"pill"}));let p;return"in-apps"===r?(p=ee(e,"artwork"),Do(p,Object.assign(Object.assign({},t),{style:"iap"}))):"app-bundles"===r?(p=ee(e,"artwork"),Do(p,Object.assign(Object.assign({},t),{style:"roundedRect",allowingTransparency:!0}))):(p=ce(e,i,"artwork"),Do(p,de(e,"tvos")||n===tl?Object.assign(Object.assign({},t),{style:"tvRect"}):"osx"===i?Object.assign(Object.assign({},t),{style:"unadorned",allowingTransparency:!0}):Object.assign(Object.assign({},t),{style:"roundedRect"})))})}function No(e,t,n){if(!e)return null;const r=function(e){switch(e){case"ipadPro_2018":return eh/Jf.width;case"ipad_11":return th/Kf.width;case"iphone_6_5":return nh/Gf.width;case"iphone_5_8":return rh/Hf.width;case"appleWatch_2018":return ih/Xf.width;default:return null}}(t);return new $s(e,t,n,r)}function Uo(e,t,n,r){const i=Mo(e,t);if(!i)return null;const o=i.videos,a=[];if(o&&o.length>0)for(const e of o)ht(e,Object.assign(Object.assign({},n),{id:r})),a.push(e);let s=null;return a.length>0&&(s=new Yc,s.videos=a,s.mediaPlatform=i.mediaPlatform),s}function Mo(e,t,n=null){return As.c("platformVideoPreviewFromData",()=>{const r=function(e,t){return me(e,"videoPreviewsByType",void 0)}(e),i={};if(!r)return null;let o=Go(e,host.clientIdentifier,il);if(s(n)){const e=[];for(const t of o)n.includes(t)&&e.push(t);o=e}if(0===o.length)return null;for(const e of o){const n=Ko(e,ol);for(const e of Object.keys(r)){const n=u(r,e),o=[];for(const r of n){const n=h(r,"previewFrame");if(!n){As.d("ignoredValue","object",`videoPreviewsByType.${e}.previewFrame`);continue}const i=d(r,"video");if(!i){As.d("ignoredValue","string",`videoPreviewsByType.${e}.video`);continue}const a=it(d(n,"url"),f(n,"width"),f(n,"height"),null,d(n,"checksum"));o.push(new Uc(i,a,t))}i[e]=o}for(const t of n)if(i[t])return new qf(i[t],No(e,t))}return null})}function Bo(e){return As.c("videoPreviewsFromApiPlatformData",()=>{const t=Mo(e,wp);return t?t.videos:[]})}function $o(e,t,n=null,r){return As.c("screenshotsFromData",()=>{const i=[];let o=n;if(!o||0===o.length){const t=r||host.clientIdentifier;let n=il;t===Xs&&(n="watch"),o=Go(e,t,n)}for(const n of o){const r=[];let o;if(y("triforce")?"messages"===n?(o=ia(e,"ios"),na(e,"ios")&&r.push("faceTime")):o="tv"===n&&"tvOS"!==host.platform?oa(e,"appletvos"):"mac"===n&&"macOS"!==host.platform?oa(e,"osx"):"phone"!==n&&"pad"!==n&&"watch"!==n||"iOS"===host.platform||"watchOS"===host.platform?oa(e):oa(e,"ios"):"messages"===n?(o=ia(e),na(e)&&r.push("faceTime")):o="tv"===n&&"iOS"===host.platform?oa(e,"appletvos"):oa(e),!o)continue;const a=qo(o,n,t,r);a&&i.push(a)}return i})}function Vo(e,t,n=null,r){return function(e){const t=[];if(e&&e.length>0)for(const n of e){const e=[];for(const t of n.artwork){const n=new Mc;n.screenshot=t,e.push(n)}const r=n.mediaPlatform,i=new Bc(e,r);t.push(i)}return t}($o(e,t,n,r))}function qo(e,t,n,r){const i=Ko(function(e){if("messages"===e)switch(il){case"pad":return"pad";default:return"phone"}return e}(t),ol);let o,a=null;for(let t=0;t<i.length&&!l(a);t++)a=u(e,i[t]),o=i[t];if(l(a)){const e=a.map((function(e){return Do(e,{useCase:n})})),i=No(t,o,r);return new Bs(e,i)}return null}function Go(e,t,n){return J(e,`sortedAppPlatformsFromData.${t}.${n}`,()=>{const r=Ho(e),i=[];let o=[];if(!y("triforce")&&r.length>1)switch(n){case"phone":case"pad":case"watch":i.push("mac")}const a=function(e,t){-1===o.indexOf(e)&&-1===i.indexOf(e)&&-1!==r.indexOf(e)&&(o.push(e),t&&i.push(t))};switch(t){case Xs:a("watch");break;case Zs:a("messages")}switch(n){case"phone":a("phone");break;case"pad":a("pad");break;case"tv":a("tv");break;case"watch":a("watch");break;case"mac":y("triforce")?a("mac"):a("pad")}return y("triforce")?(a("phone"),a("pad"),a("mac"),a("tv"),a("watch"),a("messages")):(a("phone"),a("pad"),a("messages"),a("watch"),a("tv"),a("mac")),o=o.filter((function(e){return-1===i.indexOf(e)})),o})}function Ho(e){return e?J(e,"supportedAppPlatformsFromData",()=>{let t;t=y("triforce")?ta(e,"ios"):ta(e);const n=ra(e),r=function(e){return we(e,"isAppleWatchSupported")}(e),i=te(e,"deviceFamilies"),o=[];for(const e of i)switch(e){case"iphone":n||o.push("phone");break;case"ipad":n||o.push("pad");break;case"tvos":o.push("tv");break;case"watch":o.push("watch")}return t&&o.push("messages"),r&&o.push("watch"),pe(e,"mac")&&o.push("mac"),o}):null}function jo(e){switch(e){case"phone":return["phone","messages"];case"pad":return["phone","pad","messages"];case"tv":return["tv"];case"watch":return["watch"];case"mac":return["mac"];default:return[]}}function Wo(e,t){return-1!==e.indexOf(t)}function zo(e,t){return function(e){switch(e){case"phone":return["phone","watch","messages","tv"];case"pad":return["phone","pad","messages","tv"];case"tv":return["tv"];case"watch":return["watch"];case"mac":return["mac"];default:return[]}}(t).some(t=>Wo(e,t))}function Yo(e,t){return function(e){switch(e){case"phone":return["phone","watch","messages"];case"pad":return["phone","pad","messages"];case"tv":return["tv"];case"watch":return["watch"];case"mac":return["mac"];default:return[]}}(t).some(t=>Wo(e,t))}function Ko(e,t){switch(e){case"mac":return["mac"];case"watch":return["appleWatch_2018","appleWatch"];case"tv":return["appleTV"];case"pad":{const e=[];return t.isEqualTo(Jf)&&al>0?(e.push("ipadPro_2018"),e.push("ipad_11"),e.push("ipadPro"),e.push("ipad_10_5"),e.push("ipad")):t.isEqualTo(Qf)?(e.push("ipadPro"),e.push("ipadPro_2018"),e.push("ipad_11"),e.push("ipad_10_5"),e.push("ipad")):t.isEqualTo(Kf)?(e.push("ipad_11"),e.push("ipadPro_2018"),e.push("ipadPro"),e.push("ipad_10_5"),e.push("ipad")):t.isEqualTo(Yf)?(e.push("ipad_10_5"),e.push("ipad"),e.push("ipad_11"),e.push("ipadPro"),e.push("ipadPro_2018")):(e.push("ipad"),e.push("ipad_10_5"),e.push("ipad_11"),e.push("ipadPro"),e.push("ipadPro_2018")),e}case"phone":{let e;e=t.isEqualTo(Gf)?"iphone_6_5":t.isEqualTo(Hf)?"iphone_5_8":t.isEqualTo(zf)?"iphone":t.isEqualTo(Wf)?"iphone5":t.isEqualTo(jf)?"iphone6":"iphone6+";const n=Zf.indexOf(e),r=Zf.slice(0,n);r.reverse();const i=Zf.slice(n+1);return[e].concat(r,i)}default:return[]}}function Qo(e){return As.c("capabilitiesFromData",()=>{const t=[];we(e,"isGameCenterEnabled")&&t.push(new $c("gameCenter")),we(e,"isSiriSupported")&&t.push(new $c("siri")),we(e,"supportsPassbook")&&t.push(new $c("wallet")),we(e,"supportsGameController")&&t.push(new $c("controllers"));const n=ne(e,"familyShareEnabledDate");if(n&&!ie(e,"isFirstPartyHideableApp")){const r=new Date(n),i=new Date;if(r&&r<=i){let n=null;const r=aa(e)||!we(e,"hasInAppPurchases");n=y("familySharingCapability")?r?"familySharing":"familySharingExceptIAP":r?null:"familySharing",null!==n&&t.push(new $c(n))}}return t})}function Jo(e){if(o(e))return null;if("mac"===il)return function(e){const t=uo(e);if(o(t))return null;const n=u(t,"assets");if(!n.length)return null;for(const e of n)if("macSoftware"===d(e,"flavor"))return f(e,"size");return null}(e);{const t=ee(e,"fileSizeByDevice");if(t){let e=[];ll&&(e=ll.split(" ")),e=e.concat([host.deviceModel,"universal"]);for(const n of e){const e=f(t[n]);if(e)return e}}}return null}function Xo(e,t){let n,r=null,i=null,o=null,l=null,c=null,u=null;const p=Z(ql);if(s(p))switch(p){case 0:break;case 1:if(!t.supportsArcade&&!t.presentedInTopShelf)return null;break;default:_o()}switch(il){case"mac":t.supportsArcade?(r="editorialArtwork.splashFullScreen",o="sr"):(r="editorialArtwork.centeredFullscreenBackground",o="ep");break;case"tv":t.presentedInTopShelf?(r="editorialArtwork.topShelf",o="sr"):(r="editorialArtwork.splashFullScreen",o="ta",i="editorialArtwork.fullscreenBackground",l="sr"),y("dontOverrideTvUberDimensions")||(c=1080,u=1920);break;default:t.supportsArcade?t.prefersCompactVariant||"phone"===il?(r="editorialArtwork.splashTall",o="oc"):(r="editorialArtwork.splashFullScreen",o="oh"):(r="editorialArtwork.bannerUber",o="sr")}return n=me(e,r),null!==i&&a(n)&&(n=me(e,i),null!==l&&(o=l)),s(n)&&s(o)?Do(n,{cropCode:o,useCase:20,withJoeColorPlaceholder:!0,overrideHeight:c,overrideWidth:u}):null}function Zo(e,t,n){let r=[];if(l(n))r=n;else switch(il){case"mac":case"tv":r=["splashVideo16x9"];break;case"pad":r=["splashVideo4x3"];break;default:r=["splashVideo3x4"]}let i=null,a=null;for(const t of r)if(i=me(e,["editorialVideo",t]),a=me(e,["editorialVideo",t,"previewFrame"]),l(i))break;const c=Do(a,{useCase:t,withJoeColorPlaceholder:!0,cropCode:"sr"});if(s(i)){const e=d(i,"video");if(o(e))return null;let t,n;return y("productVideoUberControls")?(t=gp,n={muteUnmute:!0}):(t={},n={}),new Uc(e,c,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:!1,showPlaybackControls:!1,playbackControls:t,autoPlayPlaybackControls:n})}return null}function ea(e){return s(e)?`${kl.internal}:/${Pl.developer}/${Pl.href}?${vl.href}=${e.href}`:null}function ta(e,t){return we(e,"hasMessagesExtension",t)}function na(e,t){return we(e,"supportsFunCamera",t)}function ra(e){return we(e,"isHiddenFromSpringboard")}function ia(e,t){return me(e,"messagesScreenshots",t)}function oa(e,t){return me(e,"screenshotsByType",t)}function aa(e){return we(e,"supportsArcade")}function sa(e,t){return la(e,t)||ye(e,["itunesNotes",t])}function la(e,t){return ye(e,["editorialNotes",t])}function ca(e){return J(e,"isMacOSInstaller",()=>{if("mac"!==il)return!1;const t=ye(e,"bundleId");return!!s(t)&&t.startsWith("com.apple.InstallAssistant")})}function ua(e){return"watch"===il&&Ss.isDeletableSystemAppFromData(e)&&!we(e,"isStandaloneForWatchOS")}function pa(e){if(o(e)||0===e.length)return!0;const t=e.split("."),n=f(t[0])||0,r=f(t[1])||0,i=f(t[2])||0;return host.isOSAtLeast(n,r,i)}function da(e){return!o(e)&&0!==e.length&&S(e)}function fa(e){if("tv"===il)switch(e){case"upsellBreakout":return!0;default:return!1}else switch(e){case"smallLockup":case"mediumLockup":case"appTrailerLockup":case"screenshotsLockup":case"mixedMediaLockup":case"upsellBreakout":case"arcadeShowcase":return!0;default:return!1}}function ha(e){let t=e.targetType;return t||(t="lockup"),t}function ma(e){let t=e.idType;return t||(t="its_id"),t}function ga(e){return null==e?"":e}function ya(e){if(!e)return null;const t=new Fl(e);let n=null;for(const e of Object.keys(t.query))if("referrer"===e){"siri"===t.query[e]&&(n="com.apple.siri");break}return n}function wa(e){return function e(t){if(o(t))return null;if(t instanceof Array){const n=[];for(const r of t){const t=e(r);s(t)&&n.push(t)}return n}if(t instanceof Object){const n={};return Object.keys(t).forEach((r,i,o)=>{const a=t[r],l=e(a);s(l)&&(n[r]=l)}),n}return t}(e)}function Ta(e){if(!e)return null;const t=new Fl(e),n=t.query.term,r=t.pathname;return o(n)||o(r)?null:r.endsWith("/search")?n:null}function Aa(e,t){if(!e||!t)return"unknown";if("app-bundles"===e.type)return"bundle";switch(t.style){case"roundedRect":return"ios";case"unadorned":return"mac";case"tvRect":return"tv";case"round":return"watch";case"pill":return"messages";case"iap":return"iap";default:return _o(),"unknown"}}function Ia(e){return s(e)&&"marketing-items"===e.type?{marketing:{marketingItemId:e.id,offerDecisionId:d(e,"meta.metrics.decisionId")}}:null}function ba(e,t){const n=_a(e.locationTracker);return n.push(Ea(e,t)),n}function Sa(e,t){const n=_a(e.locationTracker);return n.push(Oa(e,t)),n}function ka(e,t){const n=new oh;n.location=Ea(e,t),e.locationTracker.locationStack.push(n)}function Pa(e){0!==e.locationStack.length?e.locationStack.pop():As.e("ignoredValue","non-empty location stack","empty location stack")}function Ca(e){const t=Ra(e);return t?t.position:e.rootPosition}function va(e){const t=Ra(e);t?t.position++:e.rootPosition++}function Ea(e,t){const n=Oa(e,t);return!e.id&&e.locationTracker?(n.idType="sequential",n.id=Ca(e.locationTracker).toString()):(n.idType=ma(e),n.id=ga(e.id)),e.fcKind&&(n.fcKind=e.fcKind),e.displayStyle&&(n.displayStyle=e.displayStyle),n}function Oa(e,t){const n={locationPosition:Ca(e.locationTracker),locationType:ha(e),name:ga(t)};return e.recoMetricsData&&Object.assign(n,e.recoMetricsData),n}function _a(e){return e.locationStack.map(e=>e.location)}function Ra(e){const t=e.locationStack.length;return 0===t?null:e.locationStack[t-1]}function Da(e,t){return As.c("clickOptionsForLockup",()=>{const n=Object.assign(Object.assign({},t),{id:e.id});return mo(e)&&(n.offerType="preorder"),n})}function La(e,t,n,r){const i={};t&&t instanceof zu&&r&&t.iAdInfo&&t.iAdInfo.iAdAdamId===e.adamId&&Object.assign(i,t.iAdInfo.clickFields),i.actionDetails={buyParams:e.purchaseConfiguration.buyParams},i.location=n,i.targetId=e.adamId,go(e)&&(i.offerType="preorder",s(e.expectedReleaseDate)&&(i.offerReleaseDate=ve(e.expectedReleaseDate)));const o=be(e.adamId,"button",i);o.includingFields.push("appState"),e.purchaseConfiguration.isArcadeApp&&o.includingFields.push("buttonName"),r&&o.includingFields.push("advertRotation"),e.actionMetrics.addMetricsData(o)}function Fa(e,t){xa(e,Object.assign(Object.assign({},t),{actionType:"buyInitiate",subscriptionSKU:Is.arcadeProductId,actionContext:"Arcade",targetType:"button"}))}function xa(e,t,n=!1){let r=t.actionType;r||(r="navigate");const i={actionType:r};if(e instanceof Jl){const t=e;i.actionUrl=t.pageUrl}else if(e instanceof Zl){const t=e;i.actionUrl=t.url}t.actionDetails&&(i.actionDetails=t.actionDetails),t.actionContext&&(i.actionContext=t.actionContext),s(t.offerType)&&(i.offerType=t.offerType),s(t.offerReleaseDate)&&(i.offerReleaseDate=ve(t.offerReleaseDate)),i.location=ba(t,e.title),t.isAdvert&&n&&t.pageInformation.iAdInfo&&Object.assign(i,t.pageInformation.iAdInfo.clickFields),t.mercuryMetricsData&&Object.assign(i,t.mercuryMetricsData);const o=be(t.id,ha(t),i);"Arcade"===t.actionContext&&o.includingFields.push("buttonName"),t.isAdvert&&o.includingFields.push("advertRotation"),e.actionMetrics.addMetricsData(o)}function Na(e,t,n){const r={};s(t)&&(r.actionUrl=t),n.targetType||(n.targetType="button"),r.location=Sa(n,e.title),r.actionType="navigate",r.target="button_See All";const i=be("See All","button",r);e.actionMetrics.addMetricsData(i)}function Ua(e,t,n){if("trending"===e.origin||"suggested"===e.origin){const r="button",i="suggested"===e.origin?"suggested":"trending",o=be("",r,{actionType:i,actionUrl:ga(e.url),location:Sa({pageInformation:null,locationTracker:n,targetType:r},e.term),page:"Search",pageDetails:"Apps",pageType:"Search",actionDetails:{term:t,actionType:i}});e.actionMetrics.addMetricsData(o)}let r="listItem",i="trending";const o={targetId:Ca(n)};switch(e.origin){case"trending":r="button",i="trending";break;case"suggested":r="button",i="suggested";break;case"hints":r="listItem",i="hint";const n={searchPrefix:t};l(e.entity)&&(n.hintsEntity=e.entity),o.actionDetails=n}const a=Se(e.term,r,i,e.url,o);e.actionMetrics.addMetricsData(a)}function Ma(){const e=Is.marketingItemRolloutRate;if(!Is.isMarketingItemSupported||!e)return!1;if(1===e)return!0;const t=Vl.dsid;if(!l(t))return!1;const n=100*e,r=t.slice(-2);return parseInt(r)<n}function Ba(e="releaseDate",t,n){const r=Fl.fromComponents(kl.internal,null,`/${Pl.arcadeSeeAllGames}`,{sort:e}),i=new Jl("arcadeSeeAllGames",r.build());return i.title=P("SEE_ALL_GAMES"),xa(i,{id:"arcade-see-all-games-button",targetType:"button",actionType:"navigate",actionContext:"Arcade",pageInformation:t,locationTracker:n}),i}function $a(e,t,n){let r;if(y("amsUpsellSheets")&&Ma()){const n=new vc("arcade",e,{contentId:t});r=new Jl("upsellMarketingItem"),r.pageData=n}else{const n=`${kl.internal}://${Cl.arcadeSubscribePage}`,i=new Fl(n).param(vl.context,e);s(t)&&i.param(vl.appId,t),r=new Jl("arcadeSubscribe",i.build())}return s(n)&&Fa(r,n),r}function Va(e){if(y("arcadeFamilyWelcomePage")){const t=`${kl.internal}://${Cl.arcadeWelcomePage}`,n=new Fl(t).param(vl.context,e);return new Jl("arcadeWelcome",n.build())}return null}function qa(e,t){if("tv"===il)return Ga();{const n=new Xl("arcade");return"macOS"!==host.platform||y("tabChangeWillDismissesModal")?new ec([n]):Ba("releaseDate",e,t)}}function Ga(){return new Zl("com.apple.Arcade://")}function Ha(){return(new ph).forType("apps").withFilter("supportsArcade","true")}function ja(e){return(new ph).forType("arcade-apps").withLimit(e).asPartialResponseLimitedToFields(["artwork"])}function Wa(e,t,n){return Ma()&&!s(n)?function(e,t){a(e)&&(e="arcadeGeneric");const n=(new ph).forType("upsellMarketingItem").addingQuery("serviceType","arcade").addingQuery("placement",e).includingMetaKeys("marketing-items",["metrics"]).includingRelationships(["contents"]);return s(t)&&n.addingQuery("seed",t),n}(e,t):za(function(e){switch(e){case"arcadeAskToBuy":return"askToBuy";case"arcadeGroupingLockup":return"groupingLockup";case"arcadeLaunchRepair":return"launchRepair";case"arcadeProductPage":return"productPage";case"arcadeTopShelfATV":return"topShelfATV";case"arcadeTopShelfATVClickThrough":return"topShelfATVClickThrough";case"arcadeTodayCard":return"editorialItem";case"arcadeStoryCanvas":return"editorialItemCanvas";case"arcadeComingSoon":return"arcadeComingSoon";case"arcadeTabHeader":return"arcadeTabHeader";case"arcadeTabNavBar":return"arcadeTabNavBar";case"arcadeGeneric":case"arcadeAppClip":case"arcadeAppStoreComponents":default:return"generic"}}(e),t,n)}function za(e,t,n){a(e)&&(e="generic");const r=(new ph).forType("upsell").addingContext("arcade").addingQuery("action",e);return s(t)&&r.addingQuery("app",t),s(n)&&r.addingQuery("editorialItem",n),r}function Ya(e=null,t=!1,n=null){return new Promise((r,i)=>{if(!y("recentlyPlayedGames"))return void r(null);let a;a=y("getRecentlyPlayedGamesWithTimeout")?lh(n):sh(),a.then(n=>{if(o(n)||0===n.length)r(null);else if(c(e)&&n.length>e&&(n=n.slice(0,e)),t)$((new ph).forType("apps").withIds(n).includingAttributes(["editorialArtwork","editorialVideo","description","minimumOSVersion"])).then(e=>r(e));else{const e={data:[]};n.forEach(t=>{e.data.push({id:t,type:"apps"})}),r(e)}}).catch(e=>{console.log(`getRecentlyPlayedGames() failed with: ${e}`),r(null)})})}function Ka(e){let t=null,n=null,r=null;const i=H(e,"upsell")||H(e,"marketing-items");if(a(i)||a(i.data))return null;for(const e of i.data)switch(e.type){case"marketing-items":t=e;continue;case"editorial-items":n=e;continue;case"in-apps":r=e;continue}return o(t)&&(o(n)||o(r))?null:{editorialData:n,inAppData:r,marketingItemData:t}}function Qa(e){if(!e)return null;let t=null;const n=u(e,"results.data");n.length>0&&(t=n[0]);const r=h(e,"results.content"),i=h(e,"results.offer");return s(t)||!o(r)&&!o(i)?{editorialData:r,inAppData:i,marketingItemData:t}:null}function Ja(){switch(il){case"phone":return"iphone";case"pad":return"ipad";case"tv":return"appletv";case"mac":return"mac";case"watch":return"watch";default:return null}}function Xa(){switch(host.clientIdentifier){case"com.apple.TVAppStore.AppStoreTopShelfExtension":case"com.apple.Arcade.ArcadeTopShelfExtension":return[];default:{const e=Ja();return function(e){const t=new Set;if(t.add("iphone"),t.add("ipad"),t.add("appletv"),t.add("mac"),t.add("watch"),null!==e)for(const n of e)t.delete(n);return Array.from(t)}(new Set([e]))}}}function Za(){switch(il){case"phone":return 6;case"pad":return 10;case"mac":return 12;default:return 8}}function es(){let e=null;return host.clientIdentifier===Zs?e="messages":host.clientIdentifier===Xs&&(e="watch"),e}function ts(e,t=host.clientIdentifier,n=[],r=ds){e||(e="mac"===r.deviceType?39:36);const i=(new ph).forType("categories").includingAdditionalPlatforms(n).addingQuery("genre",`${e}`);return t===Xs?i.addingContext("watch"):t===Zs&&i.addingContext("messages"),i}function ns(e,t=!0){return As.c("categoryListFromApiResponse",()=>{const n=function e(t,n=!0){return As.c("categoryFromApiResponse",()=>{if(!t)return null;const r=d(t,"name"),i=d(t,"genre"),o=d(t,"ages"),a=Do(h(t,"artwork"),{allowingTransparency:!0,useCase:19}),l=function(e){return e.sort((e,t)=>{try{return e.name.localeCompare(t.name,bl,{usage:"sort"})}catch(e){return 0}})}(u(t,"children").map(t=>e(h(t),n)).filter(e=>s(e))),c=d(t,"label");return c&&n&&l.unshift(new Cf(c,i,a,o,[])),new Cf(r,i,a,o,l)})}(h(u(e,"results.categories"),"0"),t);return n?new vf(n.children):null})}function rs(e,t){return As.b("topShelfInsetItemFromEditorialItem",()=>{const n=new gh(`${e.type}_${e.id}`);if(n.image=function(e,t,n){const r=me(e,"editorialArtwork.crossoverCard");if(!s(r))return null;const i=Do(r,{withJoeColorPlaceholder:!0,useCase:21});return i.crop="ek",i}(e),!s(n.image))return console.log(`Missing crossover artwork for: ${e.id}`),null;n.tintStyle=Y(n.image.backgroundColor)?"light":"dark";const r=ne(e,"displayStyle");let i=sa(e,"name");o(i)&&"Branded"===r&&(i=ne(e,"label")),n.title=i,n.heading=ne(e,"label"),n.subheading=sa(e,"short"),n.accessibilityLabel=i;const a=Oo(e,i,{targetType:"button",pageInformation:t.pageInformation,locationTracker:t.locationTracker}),l=io(e,a,host.clientIdentifier);return l instanceof Jl?(n.displayAction=new fh("url"),n.displayAction.url=as(l.pageUrl),n):(console.error(`No action to map for top shelf item: ${e.id}`),null)})}function is(e,t,n,r,i,o=null){const a=He(e);return l(a)?function(e,t,n,r,i,o){const a=[];for(const l of e){if(!s(l.id)||!s(l.attributes))continue;if(c(o)&&i.size>=o)break;const e=l.id;if(i.has(e)){console.log("Skipping existing app.");continue}const u=os(l,t,n,r);u&&(a.push(u),i.add(e))}return a}(a,t,n,{locationTracker:{rootPosition:0,locationStack:[]},pageInformation:Ke("TopShelf",r,e)},i,o):[]}function os(e,t,n,r){return As.b("topShelfItemFromAppData",()=>{const i=e.id,c=new yh(`${e.type}_${i}`),u=ye(e,"bundleId");if(!s(u))return console.log(`Missing bundleId for app: ${i}`),null;if(c.isAppleArcadeGame=aa(e),c.image=Xo(e,{supportsArcade:c.isAppleArcadeGame,presentedInTopShelf:!0}),a(c.image))return console.log(`Missing full screen artwork for app: ${i}`),null;const p=Zo(e,21);s(p)&&s(p.videoUrl)&&(c.previewVideoUrl=p.videoUrl),c.title=ne(e,"name"),c.accessibilityLabel=c.title;const f=ye(e,"description.standard");if(l(f)&&(c.summary=f.replace(/([\n]+)/g,"\n")),c.isGameControllerRequired=we(e,"requiresGameController"),t)c.playAction=function(e){const t=new fh("openApplication");return t.bundleIdentifier=e,t.title=P("OFFER_BUTTON_TITLE_ARCADE_OPEN"),t.accessibilityLabel=t.title,t}(u),c.installAction=function(e,t,n,r){const i=uo(n),a=ho(i),s=d(i,"buyParams");if(o(s))throw new Error(`Missing buyParams when creating install action for: ${e}`);const l=co(n,s,a,!1,r.pageInformation,"unknown"),c=new fh("installApplication");return c.bundleIdentifier=t,c.title=P("OFFER_BUTTON_TITLE_ARCADE_STANDARD"),c.accessibilityLabel=c.title,c.userInfo={adamId:e,token:l},c}(i,u,e,r);else{const e=P(n?"OFFER_BUTTON_TITLE_ARCADE_TRY":"OFFER_BUTTON_TITLE_ARCADE_NOT_SUBSCRIBED");c.playAction=ss(e,i)}const h={pageInformation:r.pageInformation,locationTracker:r.locationTracker};c.namedAttributes=function(e,t){return As.b("namedAttributesFromAppData",()=>{const n=[],r=Sr(e,!1,t);for(const e of r){if(n.length>=4)break;if("annotation"!==e.style||a(e.accessibilityCaption)||a(e.accessibilityTitle))continue;const t=new hh(e.accessibilityCaption);t.values=[e.accessibilityTitle],n.push(t)}return n})}(e,h);const m=Oo(e,c.title,{targetType:"button",pageInformation:r.pageInformation,locationTracker:r.locationTracker}),g=no(e,m,host.clientIdentifier);return g instanceof Jl?(c.displayAction=new fh("url"),c.displayAction.url=as(g.pageUrl),c):(console.error(`No action to map for top shelf more info of app: ${i}`),null)})}function as(e){if(!l(e))return null;let t=null;switch(host.clientIdentifier){case"com.apple.Arcade.ArcadeTopShelfExtension":t=el}if(!l(t))return e;const n=new Fl(e);return n.protocol=t,n.build()}function ss(e,t=null){const n=new Fl(`${el}://${Cl.arcadeSubscribePage}`);l(t)&&n.param(vl.appId,t),n.param(vl.context,"arcadeTopShelfATVClickThrough");const r=new fh("url");return r.url=n.build(),r.title=e,r}function ls(e,t,n,r,i,o,a){Ih.useNativeValues(o);let l=t;const c=Ye(n);l=cs("pageId",c,l),l=cs("pageType",c,l),l=cs("pageContext",o,l),l=ps("topic",bh.defaultTopic,l);const u=Ih.params;for(const e of Object.keys(u))l=cs(e,u,l);if(a)for(const e of Object.keys(a))l=cs(e,a,l),l=cs(e,a,l,null);if(!o)return l;if(!r){const e=d(o,"extRefUrl2"),t=ya(e);e&&t&&(o.refApp=t),l=cs("extRefApp2",o,l,null),l=cs("extRefUrl2",o,l,null)}const p=d(c,"pageId"),f=p&&p===e;if("Software"!==d(c,"pageType")||f){const e=Ta(d(o,"refUrl"));s(e)?l=cs("searchTerm",{searchTerm:e},l):s(n)&&(l=us("searchTerm",n.searchTerm,l))}return i&&(l=ps("platformDisplayStyle",i,l)),l}function cs(e,t,n,r){return us(e,d(t,e),n,r)}function us(e,t,n,r="mt"){return o(e)?n:o(t)?n:ps(e,t,n,r)}function ps(e,t,n,r="mt"){let i=e;return r&&(i="mt"+e.charAt(0).toUpperCase()+e.slice(1)),n+"&"+i+"="+encodeURIComponent(t)}var ds,fs,hs,ms,gs,ys,ws,Ts,As,Is,bs,Ss,ks,Ps,Cs,vs,Es,Os;n.r(t),ds={},n.r(ds),n.d(ds,"appStoreIdentifier",(function(){return Js})),n.d(ds,"watchIdentifier",(function(){return Xs})),n.d(ds,"messagesIdentifier",(function(){return Zs})),n.d(ds,"arcadeIdentifier",(function(){return el})),n.d(ds,"tvIdentifier",(function(){return tl})),n.d(ds,"productPageExtensionIdentifier",(function(){return nl})),n.d(ds,"subscribePageExtensionIdentifier",(function(){return rl})),n.d(ds,"deviceType",(function(){return il})),n.d(ds,"screenSize",(function(){return ol})),n.d(ds,"screenCornerRadius",(function(){return al})),n.d(ds,"guid",(function(){return sl})),n.d(ds,"thinnedApplicationVariantIdentifier",(function(){return ll})),n.d(ds,"storefrontIdentifier",(function(){return cl})),n.d(ds,"newPaymentMethodEnabled",(function(){return ul})),n.d(ds,"buildType",(function(){return pl})),n.d(ds,"isActivityAvailable",(function(){return dl})),n.d(ds,"isElectrocardiogramInstallationAllowed",(function(){return fl})),n.d(ds,"isSidepackingEnabled",(function(){return hl})),n.d(ds,"supportsHEIF",(function(){return ml})),n.d(ds,"activePairedWatchSystemVersion",(function(){return gl})),n.d(ds,"deviceHasCapabilities",(function(){return A})),n.d(ds,"isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion",(function(){return I})),n.d(ds,"isPairedSystemVersionAtLeast",(function(){return b})),n.d(ds,"isActivePairedWatchSystemVersionBelow",(function(){return S})),n.d(ds,"hasActivePairedWatch",(function(){return k})),fs={},n.r(fs),n.d(fs,"purchasedSpotlightIndex",(function(){return Gd})),n.d(fs,"notPurchasedSpotlightIndex",(function(){return Hd})),n.d(fs,"purchasedOrdering",(function(){return jd})),n.d(fs,"notPurchasedOrdering",(function(){return Wd})),hs={},n.r(hs),n.d(hs,"purchasedSpotlightIndex",(function(){return zd})),n.d(hs,"notPurchasedSpotlightIndex",(function(){return Yd})),n.d(hs,"purchasedOrdering",(function(){return Kd})),n.d(hs,"notPurchasedOrdering",(function(){return Qd})),ms={},n.r(ms),n.d(ms,"purchasedSpotlightIndex",(function(){return Jd})),n.d(ms,"notPurchasedSpotlightIndex",(function(){return Xd})),n.d(ms,"purchasedOrdering",(function(){return Zd})),n.d(ms,"notPurchasedOrdering",(function(){return ef})),gs={},n.r(gs),n.d(gs,"purchasedSpotlightIndex",(function(){return tf})),n.d(gs,"notPurchasedSpotlightIndex",(function(){return nf})),n.d(gs,"purchasedOrdering",(function(){return rf})),n.d(gs,"notPurchasedOrdering",(function(){return of})),ys={},n.r(ys),n.d(ys,"purchasedSpotlightIndex",(function(){return af})),n.d(ys,"notPurchasedSpotlightIndex",(function(){return sf})),n.d(ys,"purchasedOrdering",(function(){return lf})),n.d(ys,"notPurchasedOrdering",(function(){return cf})),ws={},n.r(ws),n.d(ws,"purchasedSpotlightIndex",(function(){return uf})),n.d(ws,"notPurchasedSpotlightIndex",(function(){return pf})),n.d(ws,"purchasedOrdering",(function(){return df})),n.d(ws,"notPurchasedOrdering",(function(){return ff})),Ts=n(2),As=n(0);const _s={},Rs="undefined"!=typeof ask?ask.props:{tvAppEnabledStorefronts:["143441","143455","143460"],spamBlockingExtensionsEditorialItemID:"1490737895",clientFeatures:{}};bag.registerBagKeys([{key:"trending-searches",type:"url"},{key:"search",type:"url"},{key:"searchHints",type:"url"},{key:"personalizedUserReviewUrl",type:"url"},{key:"personalizedUserReviewEnabled",type:"boolean"},{key:"p2-application-user-rate-content",type:"url"},{key:"p2-application-user-write-review",type:"url"},{key:"p2-accessory-room",type:"url"},{key:"passbook",type:"url"},{key:"library-link",type:"url"},{key:"metrics",type:"dictionary"},{key:"language-tag",type:"string"},{key:"language",type:"string"},{key:"p2-service-terms-url",type:"url"},{key:"usePostForAppStoreSearch",type:"boolean"},{key:"isBuyingScheduledGiftCertificateEnabled",type:"boolean"},{key:"isScheduledGiftingEnabled",type:"boolean"},{key:"AddFundsUrl",type:"url"},{key:"personalized-buy-buttons/software",type:"url"},{key:"uvSearch/nowplaying-enabled",type:"boolean"},{key:"supportLinkUrl",type:"url"},{key:"voteUrl",type:"url"},{key:"reportConcernUrl",type:"url"},{key:"reportConcernExplanation",type:"string"},{key:"reportConcernReasons",type:"array"},{key:"reportProblemUrl",type:"url"},{key:"reportProblemUrlDaysToDisplay",type:"number"},{key:"createAccountUrl",type:"url"},{key:"apps-media-api-host",type:"string"},{key:"apps-media-api-edge-host",type:"string"},{key:"apps-media-api-preview-host",type:"string"},{key:"apps-media-api-search-edge-host",type:"string"},{key:"apps-media-api-edge-end-points",type:"array"},{key:"apps-media-api-search-ads-limit",type:"number"},{key:"countryCode",type:"string"},{key:"searchSortOptions",type:"array"},{key:"ageBands",type:"array"},{key:"processRedirectUrl/whitelistedQueryParams",type:"array"},{key:"processRedirectUrl/endpoint",type:"string"},{key:"app-store-app-id",type:"string"},{key:"arcade-iap-family-id",type:"string"},{key:"ocelot-iap-family-id",type:"string"},{key:"arcade-iap-offer-name",type:"string"},{key:"ocelot-iap-offer-name",type:"string"},{key:"transparencyLawEditorialItemId",type:"string"},{key:"hideableSystemApps",type:"array"},{key:"tabs/standard",type:"array"},{key:"isInternalArcadeComingSoon",type:"boolean"},{key:"watchAppsGrouping",type:"url"},{key:"requireAgeVerification",type:"boolean"},{key:"ageRatingLearnMoreEditorialItemId",type:"string"},{key:"isMarketingItemSupported",type:"boolean"},{key:"marketingItemRolloutRate",type:"number"},{key:"shouldUseEditorialItemUpsellFallback",type:"boolean"},{key:"safariExtensionsGrouping",type:"url"}]),Is={get trendingSearchesURL(){return bag.url("trending-searches")},get searchHintsURL(){return bag.url("searchHints")},get personalizedUserReviewURL(){return bag.url("personalizedUserReviewUrl")},get personalizedUserReviewEnabled(){return bag.boolean("personalizedUserReviewEnabled")},get userRateURL(){return bag.url("p2-application-user-rate-content")},get writeReviewURL(){return bag.url("p2-application-user-write-review")},get accessoryRoomURL(){return bag.url("p2-accessory-room")},get passbookMainURL(){return bag.url("passbook")},get libraryLinkURL(){return bag.url("library-link")},get metricsConfiguration(){return bag.dictionary("metrics")},get language(){return bag.string("language")},get mediaApiLanguage(){return bag.string("language-tag")||bag.string("language")},get termsAndConditionsURL(){return bag.url("p2-service-terms-url")},get usePostForAppStoreSearch(){return bag.boolean("usePostForAppStoreSearch")},get isMonetaryGiftingEnabled(){return bag.boolean("isBuyingScheduledGiftCertificateEnabled")},get accountTopUpURL(){return bag.url("AddFundsUrl")},get isContentGiftingEnabled(){return bag.boolean("isScheduledGiftingEnabled")},get buyButtonMetadataURL(){return bag.url("personalized-buy-buttons/software")},get isTVAppEnabled(){return bag.boolean("uvSearch/nowplaying-enabled")},get emailSupportLinkURL(){return bag.url("supportLinkUrl")},get voteUrl(){return bag.url("voteUrl")},get reportConcernUrl(){return bag.url("reportConcernUrl")},get reportConcernExplanation(){return bag.string("reportConcernExplanation")},get reportConcernReasons(){return bag.array("reportConcernReasons")},get reportProblemUrl(){return bag.url("reportProblemUrl")},get reportProblemUrlDaysToDisplay(){return bag.double("reportProblemUrlDaysToDisplay")||90},get createAccountUrl(){return bag.url("createAccountUrl")},get mediaCountryCode(){return bag.string("countryCode")},get mediaHost(){return bag.string("apps-media-api-host")},get mediaEdgeHost(){return bag.string("apps-media-api-edge-host")},get mediaEdgeSearchHost(){return bag.string("apps-media-api-search-edge-host")},get mediaPreviewHost(){return bag.string("apps-media-api-preview-host")},get edgeEndpoints(){const e=bag.array("apps-media-api-edge-end-points");return void 0===e?[]:e},get mediaAdvertRequestLimit(){return bag.double("apps-media-api-search-ads-limit")||4},get searchSortOptions(){return bag.array("searchSortOptions")||[]},get ageBands(){return bag.array("ageBands")||[]},get redirectUrlWhitelistedQueryParams(){return bag.array("processRedirectUrl/whitelistedQueryParams")||["affC","adId","advp","at","ct","itsct","itscg","itscc","itcCt","its_qt","ls","partnerId","pt","qtkid","uo"]},get redirectUrlEndpoint(){return bag.string("processRedirectUrl/endpoint")||"https://itunes.apple.com/WebObjects/MZStoreServices.woa/wa/processRedirectUrl"},get arcadeAppAdamId(){return bag.string("app-store-app-id")},get arcadeProductFamilyId(){return bag.string("arcade-iap-family-id")||bag.string("ocelot-iap-family-id")},get arcadeProductId(){return bag.string("arcade-iap-offer-name")||bag.string("ocelot-iap-offer-name")},get searchTransparencyAdamId(){return bag.string("transparencyLawEditorialItemId")},get hideableSystemApps(){return bag.array("hideableSystemApps")||[]},get tabsStandard(){return bag.array("tabs/standard")||[]},get isArcadeComingSoonEnabled(){return bag.boolean("isInternalArcadeComingSoon")},get watchAppsGroupingURL(){return bag.url("watchAppsGrouping")||"https://apps.apple.com/WebObjects/MZStore.woa/wa/viewFeature?id=1472048385"},get requireAgeVerification(){return bag.boolean("requireAgeVerification")},get ageRatingLearnMoreEditorialItemId(){return bag.string("ageRatingLearnMoreEditorialItemId")},get isMarketingItemSupported(){return bag.boolean("isMarketingItemSupported")},get marketingItemRolloutRate(){return bag.double("marketingItemRolloutRate")||0},get shouldUseEditorialItemUpsellFallback(){return bag.boolean("shouldUseEditorialItemUpsellFallback")},get safariExtensionsGroupingURL(){return bag.url("safariExtensionsGrouping")}};class Ds{constructor(){this.$incidents=void 0}isValid(){return!0}}class Ls extends Ds{constructor(){super()}}class Fs extends Ds{constructor(e,t,n,r,i,o,a,s,l,c,u,p,d){super(),this.buyParams=e,this.vendor=t,this.appName=n,this.bundleId=r,this.appPlatforms=i,this.isPreorder=null!=o&&o,this.excludeAttribution=null==a||a,this.metricsPlatformDisplayStyle=s,this.isRedownload=null!=c&&c,this.lineItem=l,this.preflightPackageUrl=void 0===u?null:u,this.isArcadeApp=p,this.additionalHeaders=d}}class xs extends Ds{constructor(e,t,n,r,i,o,a,s,l,c,u,p,d,f,h,m){super(),this.offerType=e,this.adamId=t,this.parentAdamId=r,this.style=null==n?"infer":n,this.environment=null==i?"light":i,this.tint=null==o?"blue":o,this.offerTint=null==a?{type:"blue"}:a,this.titles=null==s?{}:s,this.subtitles=null==l?{}:l,this.hasInAppPurchases=c,this.isDeletableSystemApp=u,this.isFree=p,this.offerLabelStyle=null==d?"none":d,this.hasDiscount=f,this.contentRating=h,this.subscriptionFamilyId=m}newOfferDisplayPropertiesChangingAppearance(e,t,n,r,i){return new xs(this.offerType,this.adamId,null==t||!e&&"disabled"===this.style?this.style:t,this.parentAdamId,null==n?this.environment:n,null==r?this.tint:r,null==i?this.offerTint:i,this.titles,this.subtitles,this.hasInAppPurchases,this.isDeletableSystemApp,this.isFree,this.offerLabelStyle,this.hasDiscount,this.contentRating,this.subscriptionFamilyId)}}class Ns extends Ds{constructor(e,t,n){super(),this.offerAction=t,this.offerDisplayProperties=n,this.personalizedOfferType=e}}class Us extends Ds{constructor(e,t,n){super(),this.format=e,this.quality=t,this.supportsWideGamut=n}isValid(){return this.format&&void 0!==this.supportsWideGamut}}class Ms extends Ds{constructor(e,t,n,r){super(),this.checksum=null,this.backgroundColor=null,this.style=null,this.crop="bb",this.template=e,this.width=t,this.height=n,this.variants=r}isPortrait(){return this.height>=this.width}isLandscape(){return!this.isPortrait()}isValid(){return this.template&&this.width>0&&this.height>0&&this.variants.length>0}}class Bs extends Ds{constructor(e,t){super(),this.artwork=e,this.mediaPlatform=t}}class $s extends Ds{constructor(e,t,n,r){super(),this.appPlatform=e,this.supplementaryAppPlatforms=n||[],this.deviceCornerRadiusFactor=r,this.mediaType=t}isEqualTo(e){this.supplementaryAppPlatforms.sort(),e.supplementaryAppPlatforms.sort();const t=this.supplementaryAppPlatforms.join(",")===e.supplementaryAppPlatforms.join(",");return e.appPlatform===this.appPlatform&&e.mediaType===this.mediaType&&t&&e.deviceCornerRadiusFactor===this.deviceCornerRadiusFactor}}class Vs{constructor(e,t){this.width=e,this.height=t}static fromNativeSize(e){return new Vs(e.width,e.height)}isEqualTo(e){return e.width===this.width&&e.height===this.height}}class qs extends Ds{constructor(e,t,n,r,i,o){super(),this.itemName=e,this.url=t,this.developer=n,this.category=r,this.fileSize=i,this.mediaType=o}}class Gs extends Ds{constructor(e,t,n){super(),this.context="article",this.text=e,this.subtitle=t,this.artwork=n}}class Hs extends Ds{constructor(e,t,n,r,i,o,a,s,l,c,u,p){super(),this.context="product",this.adamId=e,this.storeFrontIdentifier=t,this.name=n,this.platform=r,this.icon=i,this.screenshots=o,this.videos=a,this.isMessagesOnlyApp=s,this.subtitle=l,this.genreName=c,this.messagesAppIcon=u,this.notesMetadata=p}}class js extends Ds{constructor(e,t,n){super(),this.metadata=e,this.url=t,this.shortUrl=n}}class Ws extends Ds{constructor(e,t,n){super(),this.reasonId=e,this.name=t,this.uppercaseName=n}}class zs extends Ls{constructor(e,t,n){super(),this.text=e,this.mediaType=t||"text/plain",this.style=n||"standard",this.alignment="localized",this.isCollapsed=!1,this.suppressVerticalMargins=!1,this.wantsCollapsedNewlines=!0}}class Ys extends Ls{}class Ks extends Ds{constructor(e){super(),this.isFallbackStyle=!1,this.type=e}}const Qs="undefined"!=typeof ask?ask.client:{deviceType:"phone",screenSize:{width:0,height:0},screenCornerRadius:0,guid:"",deviceHasCapabilities:e=>!1,thinnedApplicationVariantIdentifier:null,storefrontIdentifier:"",newPaymentMethodEnabled:!1,buildType:"production",isActivityAvailable:!1,isElectrocardiogramInstallationAllowed:!1,isSidepackingEnabled:!0,supportsHEIF:!0,isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion:(e,t,n)=>!1},Js="com.apple.AppStore",Xs="com.apple.AppStore.BridgeStoreExtension",Zs="com.apple.MobileSMS",el="com.apple.Arcade",tl="com.apple.TVAppStore",nl="com.apple.AppStore.ProductPageExtension",rl="com.apple.AppStore.SubscribePageExtension",il=Qs.deviceType,ol=Vs.fromNativeSize(Qs.screenSize),al=Qs.screenCornerRadius,sl=Qs.guid,ll=Qs.thinnedApplicationVariantIdentifier,cl=Qs.storefrontIdentifier,ul=Qs.newPaymentMethodEnabled,pl=Qs.buildType,dl=Qs.isActivityAvailable,fl=Qs.isElectrocardiogramInstallationAllowed,hl=Qs.isSidepackingEnabled,ml=Qs.supportsHEIF,gl=Qs.activePairedWatchSystemVersion;let yl=null;const wl=null,Tl="undefined"!=typeof ask?ask.loc:{identifier:"en",arcadeWordmarkAssetName:"arcade-wordmark-en",decimal:e=>null!=e?String(e):null,string:e=>e,stringWithCount:(e,t)=>e,stringWithCounts:(e,t)=>e,uppercased:e=>e,fileSize:e=>null!=e?`${e} bytes`:null,formattedCount:e=>null!=e?`${e}`:null,timeAgo:e=>null!=e?e.toString():null,formatDate:(e,t)=>null!=t?t.toString():null,formatDateInSentence:(e,t,n)=>null!=n?n.toString():null,relativeDate:e=>null!=e?e.toString():null},Al=Tl.identifier,Il=Tl.arcadeWordmarkAssetName,bl=Al.split("_")[0],Sl={},kl={internal:"x-as3-internal",http:"http",https:"https",itms:"itms",itmss:"itmss",itmsAppss:"itms-appss",itmsApps:"itms-apps",itmsMessagess:"itms-messagess",itmsMessages:"itms-messages",itmsWatchs:"itms-watchs",itmsWatch:"itms-watch",file:"file",resource:"resource",macappstore:"macappstore",macappstores:"macappstores",tvappstoreLegacy:"com.apple.tvappstore",tvappstore:"com.apple.TVAppStore",arcade:"com.apple.Arcade"},Pl={shelf:"shelf",store:"WebObjects/MZStore.woa/wa",storeElements:"WebObjects/MZStoreElements.woa/wa",lookup:"lookup",docTypeLookup:"docTypeLookup",install:"install",grouping:"viewGrouping",viewArtist:"viewArtist",viewSoftware:"viewSoftware",today:"today",arcade:"arcade",arcadeUpsellPreview:"arcadeUpsellPreview",arcadeSeeAllGames:"arcadeSeeAllGames",arcadeSeeAllGamesLoadMore:"arcadeSeeAllGamesLoadMore",genre:"genre",viewGenre:"viewGenre",recommendationsSeeAll:"recommendationsSeeAll",screenshots:"screenshots",room:"viewRoom",multiRoom:"viewMultiRoom",topCharts:"viewTop",mediaCharts:"charts",product:"app",siri:"siri",productBundle:"app-bundle",developer:"developer",artist:"artist",ratings:"ratings",reviews:"reviews",viewReviews:"viewContentsUserReviews",personalizedReviews:"personalizedReviews",article:"article",story:"story",editorialItem:"editorialItem",viewEditorialItem:"viewEditorialItem",todayCardPreview:"todayCardPreview",mso:"mso",resetAndRedirect:"resetAndRedirect",account:"account",personalizationTransparency:"personalizationTransparency",href:"href",eula:"eula",tvEula:"tv-eula",privacyPolicy:"privacyPolicy",appsForYou:"apps-for-you",storeFront:"storeFront",searchLandingPage:"searchLandingPage",searchTrendingApps:"searchTrendingApps",test:"test",builtIn:"builtIn",shelfTextTest:"shelfText",shelfLockupsTest:"shelfLockups",shelfMiscTest:"shelfMisc",lockupTest:"lockupTest",articleTestArtwork:"articleArtworkTest",articleTestSingleAppIcon:"articleSingleAppIconTest",articleTestSingleAppIconHeroArt:"articleSingleAppIconHeroArtTest",articleTestBrandedApp:"articleBrandedAppTest",articleTestMultiAppTwo:"articleMultiAppTwoTest",articleTestMultiAppThree:"articleMultiAppThreeTest",articleTestGrid:"articleGridTest",articleTestInAppPurchase:"articleInAppPurchaseTest"},Cl={showUpdatesPage:"showUpdatesPage",showAccountPage:"showAccountPage",showPurchasesPage:"showPurchasesPage",showSubscriptionsPage:"showSubscriptionsPage",searchExtensions:"searchExtensions",searchItunes:"search.itunes.apple.com",storePreview:"storepreview.apple.com",product:"product",arcadeSubscribePage:"arcadeSubscribePage",arcadeWelcomePage:"arcadeWelcomePage",arcadeSeeAllPage:"arcadeSeeAllGames",familyCircle:"familyCircle",spamBlockingExtensions:"spamBlockingExtensions",safariExtensions:"safariExtensions"},vl={id:"id",ids:"ids",countryCode:"cc",featuredContentId:"fcId",fetchData:"fetchData",isTodaySection:"isTodaySection",popId:"popId",genreId:"genreId",genre:"genre",bundleIdentifier:"bundleIdentifier",offerName:"offerName",chartIdentifier:"chartIdentifier",chartIdentifiers:"charts",v0:"v0",action:"action",type:"type",context:"context",isArcade:"isArcade",isSubscribed:"isSubscribed",isTrialAvailable:"isTrialAvailable",isArcadeSeeAllGamesShelf:"isArcadeSeeAllGamesShelf",isPurchasesApp:"isPurchasesApp",enabled:"enabled",href:"href",recoMetrics:"recoMetrics",showingFallbackMedia:"showingFallbackMedia",path:"path",useReleaseId:"useReleaseId",clientIdentifierOverride:"clientIdentifierOverride",subscribePageMessage:"message",editorialItem:"editorialItem",askToBuyId:"askToBuyId",appId:"appId",isPPT:"isPPT",sort:"sort",grouping:"grouping",code:"code",includePostSubscribeAttribution:"includePostSubscribeAttribution"},El={inAppPurchaseId:"inAppPurchaseId"},Ol={url:"productUrl",isSubscription:"isSubscription"},_l={clientSpecifier:"app"},Rl=/^([a-z][a-z0-9.+-]*:)(\/\/)?([\S\s]*)/i,Dl=/([^=?&]+)=?([^&]*)/g,Ll=["hash","query","pathname","host"];class Fl{constructor(e){if(this.query={},!e)return;let t=e;const n=Rl.exec(e);if(n){let e=n[1];e&&(e=e.split(":")[0]),this.protocol=e,t=n[3]}let r={remainder:t,result:null};for(const e of Ll){if(!r.remainder)break;switch(e){case"hash":r=U(r.remainder,"#","suffix"),this.hash=r.result;break;case"query":r=U(r.remainder,"?","suffix"),r.result&&(this.query=Fl.queryFromString(r.result));break;case"pathname":r=U(r.remainder,"/","suffix"),r.result&&(this.pathname="/"+r.result);break;case"host":if(r.remainder){const e=U(r.remainder,"@","prefix"),t=e.result,n=e.remainder;if(t){const e=t.split(":");this.username=decodeURIComponent(e[0]),this.password=decodeURIComponent(e[1])}if(n){const e=n.split(":");this.host=e[0],this.port=e[1]}}break;default:throw new Error("Unhandled case!")}}}set(e,t){if(!t)return this;switch("query"===e&&"string"==typeof t&&(t=Fl.queryFromString(t)),e){case"query":this.query=t;break;default:this[e]=t}return this}append(e,t){const n=this[e];let r;if("query"===e)"string"==typeof t&&(t=Fl.queryFromString(t)),r="string"==typeof n?Object.assign({existingValue:n},t):Object.assign(Object.assign({},n),t);else{let i=n;i||(i="");let o=i;if("pathname"===e){const e=i.length;e&&"/"===n[e-1]||(o+="/")}o+=t,r=o}return this.set(e,r)}param(e,t){return e?(this.query||(this.query={}),this.query[e]=t,this):this}removeParam(e){return e&&this.query?(void 0!==this.query[e]&&delete this.query[e],this):this}path(e){return this.append("pathname",e)}pathExtension(){if(void 0===this.pathname)return null;const e=this.pathname.split("/").filter(e=>e.length>0).pop().split(".");return e.filter((function(e){return""!==e})).length<2?null:e.pop()}pathComponents(){return this.pathname?this.pathname.split("/").filter(e=>e.length>0):[]}build(){return this.toString()}toString(){let e="";return this.protocol&&(e+=this.protocol+"://"),this.username&&(e+=encodeURIComponent(this.username),this.password&&(e+=":"+encodeURIComponent(this.password)),e+="@"),this.host&&(e+=this.host,this.port&&(e+=":"+this.port)),this.pathname&&(e+=this.pathname),this.query&&Object.keys(this.query).length&&(e+="?"+Fl.toQueryString(this.query)),this.hash&&(e+="#"+this.hash),e}static queryFromString(e){const t={};let n=Dl.exec(e);for(;n;){const r=decodeURIComponent(n[1]),i=decodeURIComponent(n[2]);t[r]=i,n=Dl.exec(e)}return t}static toQueryString(e){let t="",n=!0;for(const r of Object.keys(e)){n||(t+="&"),n=!1,t+=encodeURIComponent(r);const i=e[r];i&&i.length&&(t+="="+encodeURIComponent(i))}return t}static from(e){return new Fl(e)}static fromComponents(e,t,n,r,i){const o=new Fl;return o.protocol=e,o.host=t,o.pathname=n,o.query=r,o.hash=i,o}}!function(e){e.requestedUrl="_jet-internal:metricsHelpers_requestedUrl",e.timingValues="_jet-internal:metricsHelpers_timingValues",e.pageInformation="_jet-internal:metricsHelpers_pageInformation"}(bs||(bs={}));const xl=(e,t)=>e||t;class Nl extends Error{}const Ul="x-apple-application-instance",Ml="x-apple-application-site",Bl=new RegExp("#?([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])"),$l="_jet-internal:derived-data".toString(),Vl="undefined"!=typeof ask?ask.user:{firstName:"Jonny",lastName:"Appleseed",accountIdentifier:"appleseed@apple.com",dsid:"123456",isManagedAppleID:!1,isUnderThirteen:!1,userAgeIfAvailable:null,cookiesForUrl:e=>[],cookieForUrlWithName:(e,t)=>null},ql={identifer:"2Tp1_Sa",treatments:[0,1]},Gl={identifer:"3NepyQj",treatments:[0,1]};Ss=function(){if("watch"===il){const e=new Map;for(const t of Is.hideableSystemApps){const n=d(t,"bundle-id","coercible"),r=d(t,"id","coercible");e.set(r,n)}return{bundleIdFromData(t){const n=e.get(t.id);return o(n)?ye(t,"bundleId"):n},isDeletableSystemAppFromData:t=>e.has(t.id)}}return{bundleIdFromData:e=>ye(e,"bundleId"),isDeletableSystemAppFromData:e=>ie(e,"isFirstPartyHideableApp")}}();class Hl extends Ds{constructor(e,t,n={}){super(),this.fields=e,this.topic=t,this.shouldFlush=n.shouldFlush}}class jl extends Ds{constructor(e,t,n){super(),this.fields=e,this.includingFields=t||[],this.excludingFields=n||[]}}class Wl extends Ds{constructor(e){super(),this.data=e||[]}addMetricsData(e){this.data.push(e)}addManyMetricsData(e){for(const t of e)this.addMetricsData(t)}clearAll(){this.data.length=0}}class zl extends Ds{constructor(e,t){super(),this.data=e,this.invocationPoints=t}}class Yl extends Ds{constructor(){super(),this.instructions=[]}addInstruction(e){this.instructions.push(e)}addManyInstructions(e){for(const t of e)this.addInstruction(t)}addData(e,t){const n=new zl(e,t);this.instructions.push(n)}addManyData(e,t){for(const n of e)this.addData(n,t)}}class Kl{constructor(e){this.fields=e}}class Ql extends Ls{constructor(e){super(),this.title=null,this.artwork=null,this.presentationStyle=[],this.actionClass=e,this.actionMetrics=new Wl}}class Jl extends Ql{constructor(e,t){super("FlowAction"),this.page=e,this.pageUrl=t,this.pageData=null,this.presentationContext="infer",this.animationBehavior="infer",this.origin="inapp"}}class Xl extends Ql{constructor(e){super("TabChangeAction"),this.navigationTab=e,this.actions=[],this.popToRoot=!1}}class Zl extends Ql{constructor(e,t=!0){super("ExternalUrlAction"),this.url=e,this.isSensitive=t}}class ec extends Ql{constructor(e){super("CompoundAction");const t=[];for(const n of e)this.actionMetrics.addManyMetricsData(n.actionMetrics.data),n.actionMetrics.clearAll(),t.push(n);this.actions=t}}class tc extends Ql{constructor(e,t,n){super("OfferAction"),this.title=e,this.adamId=t,this.purchaseConfiguration=n,n&&(this.bundleId=n.bundleId,this.lineItem=n.lineItem)}}class nc extends Ql{constructor(e,t){super("OfferConfirmationAction"),this.buyAction=e,this.confirmationInitiationAction=t}}class rc extends Ql{constructor(){super("OfferAlertAction"),this.title=null,this.message=null,this.footerMessage=null,this.isCancelable=!0,this.shouldCheckForAvailableDiskSpace=!1,this.checkRestrictionsForContentRating=null,this.shouldCheckForGameController=!1,this.shouldIncludeActiveAccountInFooterMessage=!1,this.shouldPromptForConfirmation=!1,this.completionAction=null}}class ic extends Ql{constructor(e,t,n,r,i){super("InAppPurchaseAction"),this.productIdentifier=e,this.appAdamId=t,this.appBundleId=n,this.installRequiredAction=r,this.minimumShortVersionSupportingInAppPurchaseFlow=i}}class oc extends Ql{constructor(e,t){super("OfferStateAction"),this.title=t.title,this.adamId=e,this.defaultAction=t}newOfferStateActionAddingActionToExistingActions(e){const t=new ec([this.defaultAction,e]);t.title=this.defaultAction.title;const n=new oc(this.adamId,t);return void 0!==this.buyAction&&null!==this.buyAction&&(n.buyAction=new ec([this.buyAction,e])),void 0!==this.openAction&&null!==this.openAction&&(n.openAction=new ec([this.openAction,e])),void 0!==this.subscribePageAction&&null!==this.subscribePageAction&&(n.subscribePageAction=new ec([this.subscribePageAction,e])),n}}class ac extends Ql{constructor(e,t="app"){super("OpenAppAction"),this.adamId=e,this.destination=t}}class sc extends Ql{constructor(e){super("HttpAction"),this.url=e,this.method="GET",this.headers={},this.body=null,this.isStoreRequest=!1,this.needsAuthentication=!1,this.retryCount=0,this.disableCache=!1,this.successAction=null,this.failureAction=null}}class lc{constructor(e,t,n,r){this.key=e,this.target=t,this.inputType=n,this.title=r,this.isRequired=!0,this.maximumLength=null}}class cc extends Ql{constructor(e){super("HttpTemplateAction"),this.message=null,this.url=e,this.method="GET",this.headers={},this.body=null,this.parameters=[],this.isStoreRequest=!1,this.needsAuthentication=!1,this.retryCount=0,this.disableCache=!1,this.successAction=null,this.failureAction=null}}class uc extends cc{}class pc extends Ql{constructor(e,t){super("WriteReviewAction"),this.adamId=e,this.url=t}}class dc extends Ql{constructor(e){super("SheetAction"),this.actions=e,this.isCancelable=!1,this.message=null,this.style="default"}}class fc extends Ql{constructor(e){super("AlertAction"),this.style=e,this.title=null,this.message=null,this.isCancelable=!1,this.buttonActions=[],this.buttonTitles=[]}}class hc extends Ql{constructor(e,t){super("ScrollingAlertAction"),this.title=e,this.message=t}}class mc extends Ql{constructor(e,t,n="expanded"){super("ShareSheetAction"),this.data=e,this.actions=t,this.shareSheetStyle=n}}class gc extends Ql{constructor(e){super("ReportConcernAction"),this.reasons=e}}class yc extends Ql{constructor(e,t){super("ProductPageScrollAction"),this.section=e,this.clicksOnScroll=t}}class wc extends Ql{constructor(e,t,n,r){super("ArcadeAction"),this.productIdentifier=e,this.appAdamId=t,this.postSubscribeAction=r,this.subscriptionToken=n,this.actionMetrics.addMetricsData(new jl({},["buttonName"]))}}class Tc extends Ql{constructor(){super("FamilyCircleAction")}}class Ac extends Ql{constructor(){super("BlankAction")}}class Ic extends Ql{constructor(e,t){super("SearchAdAction"),this.action=e,this.searchAd=t}}class bc extends Ql{constructor(e,t){super("SearchAdClickTrackingAction"),this.impressionId=e,this.iAd=t}}class Sc extends Ls{constructor(e,t,n,r){super(),this.details=e,this.dismissButtonTitle=t,this.offerButtonAction=n,this.offerDisplayProperties=r,this.pageMetrics=new Yl}}class kc extends Ds{constructor(e,t,n){super(),this.headline=e,this.body=t,this.artwork=n}}class Pc extends Ds{constructor(e,t,n,r,i){super(),this.title=e,this.subtitle=t,this.items=n,this.continueAction=r,this.familyAction=i}}class Cc extends Ls{constructor(e,t){super(),this.individualContent=e,this.familyMemberContent=t,this.pageMetrics=new Yl}}class vc extends Ds{constructor(e,t,n,r){super(),this.serviceType=e,this.placement=t,this.contextInfo=n,this.metricsOverlay=r}}class Ec extends Ls{constructor(e,t,n,r,i,o,a){super(),this.details=e,this.displayProperties=n,this.offerButtonAction=r,this.buttonCallToAction=i,this.offerDisplayProperties=t,this.artwork=o,this.video=a,this.detailsDisplayProperties={wantsBlur:n.wantsBlur,position:n.detailsPosition},this.backgroundColor=n.backgroundColor}}class Oc extends Ds{constructor(e,t,n){super(),this.title=e,this.annotations=t,this.forceExpanded=n}}class _c extends Ds{constructor(e,t,n,r){super(),this.title=e,this.summary=n,this.items=t,this.shouldAlwaysPresentExpanded=!1,this.linkAction=r}}class Rc extends Ds{constructor(e,t){super(),this.text=e,this.subText=t}}class Dc extends Ds{constructor(e){super(),this.annotationGroups=e}}class Lc extends Ls{constructor(e){super(),this.art=e}}class Fc extends Ds{constructor(e,t){super(),this.allowsAutoPlay=!0,this.type=e,this.lockup=t}}Fc.backgroundColor=Q(z("F1F4F6"),z("303031"));class xc extends Ds{constructor(e){super(),this.message=e}}class Nc extends Ds{constructor(e){super(),this.lockup=e}}Nc.backgroundColor=Q(z("F1F4F6"),z("303031"));class Uc extends Ds{constructor(e,t,n){super(),this.videoUrl=e,this.preview=t,this.allowsAutoPlay=n.allowsAutoPlay,this.looping=n.looping,this.canPlayFullScreen=n.canPlayFullScreen,this.showPlaybackControls=n.showPlaybackControls,this.playbackControls=Object.assign({},n.playbackControls),this.autoPlayPlaybackControls=Object.assign({},n.autoPlayPlaybackControls),this.templateMediaEvent=null}}class Mc extends Ds{}class Bc extends Ds{constructor(e,t){super(),this.items=e,this.mediaPlatform=t}}class $c extends Ds{constructor(e){super(),this.type=e}}class Vc extends Ds{constructor(e,t,n){super(),this.paragraph=e,this.developerAction=n,this.developerLinks=t}}class qc extends Ds{constructor(e){super(),this.text=e,this.presentationStyle=[],this.clickAction=null}}class Gc extends Ds{}class Hc extends Ls{isValid(){return!!this.title&&!(!this.icon||!this.icon.isValid())&&super.isValid()}}class jc extends Hc{isValid(){return!(!this.screenshots||!this.screenshots.length)&&super.isValid()}}class Wc extends Hc{}class zc extends Hc{isValid(){return!(!this.trailers||!this.trailers.isValid())&&!(!this.editorialTagline||0===this.editorialTagline.length)&&super.isValid()}}class Yc extends Ds{constructor(e,t){super(),this.allowsAutoPlay=!0,this.looping=!0,e&&(this.videos=e),t&&(this.mediaPlatform=t)}isValid(){return this.videos&&this.videos.length>0&&super.isValid()}}class Kc extends Hc{}class Qc extends Ls{}class Jc extends Hc{isValid(){if(this.children)for(const e of this.children)if(!e.isValid())return!1;return super.isValid()}}class Xc extends Ds{constructor(e,t,n){super(),this.text=e,this.style=t,this.mediaType=n,this.wantsCollapsedNewlines=!0}}class Zc extends Ls{constructor(){super(),this.caption=null,this.title=null,this.subtitle=null,this.artwork=null,this.shelfBackground=null,this.clickAction=null}isValid(){return!!this.clickAction&&!(!this.artwork||!this.artwork.isValid())&&!(!this.caption||!this.title)&&super.isValid()}}class eu extends Ls{constructor(){super(),this.artwork=null,this.accessibilityLabel=null,this.shortEditorialDescription=null,this.clickAction=null,this.personalizationStyle="none",this.shelfBackground=null}isValid(){return this.clickAction&&this.artwork&&this.artwork.isValid()&&super.isValid()}}class tu extends Ls{constructor(e,t,n,r=!0){super(),this.descriptionText=e,this.summaryText=t,this.clickAction=n,this.linkPresentationEnabled=r}}class nu extends Ds{constructor(e,t){super(),this.text=e,this.linkedSubstrings=t}}class ru extends Ds{constructor(e,t,n){super(),this.text=e,this.clickAction=t,this.type=n}}class iu extends ru{constructor(e,t,n){super(e,t,"reportProblem"),this.numberOfDaysToDisplayLinkPostPurchase=n,this.isHiddenByDefault=!0}}class ou extends Ds{constructor(e){super(),this.buttons=e}}class au extends Ds{constructor(e,t){super(),this.title=e,this.action=t}}class su extends Ls{constructor(e,t,n="text/plain",r=null,i=null,o=null){super(),this.artwork=e,this.isFullWidth=t,this.hasRoundedCorners="boolean"==typeof o?o:!this.isFullWidth,this.ordinal=i,this.caption=r,this.captionMediaType=n}}class lu extends Ls{constructor(e,t,n="text/plain",r=null,i=null,o=null){super(),this.canPlayFullScreen=!0,this.allowsAutoPlay=!0,this.looping=!0,this.showAudioControl=!0,this.video=e,this.isFullWidth=t,this.hasRoundedCorners="boolean"==typeof o?o:!this.isFullWidth,this.ordinal=i,this.caption=r,this.captionMediaType=n}}class cu extends Ds{constructor(e,t,n,r){super(),this.type=e,this.title=t,this.hasDivider=n,this.action=r}}class uu extends Ls{constructor(e,t,n,r){super(),this.text=e,this.credit=t,this.artwork=n,this.isFullWidthArtwork=r||!1}}class pu extends Ls{constructor(e,t){super(),this.text=e,this.attribution=t}}class du extends Ds{constructor(e,t,n){super(),this.style=e,this.color=t,this.isFullWidth=n}}class fu extends Ls{constructor(e,t){super(),this.title=e,this.buttonAction=t}}class hu extends Ds{constructor(e,t,n,r,i,o){super(),this.badgeType=n,this.badge=n.title,this.title=e,this.description=t,this.callToActionButtonAction=r,this.backgroundStyle=i,this.textAlignment=o}}class mu extends Ls{constructor(e,t,n,r,i,o){super(),this.details=e,this.detailsDisplayProperties=t,this.heading=n,this.artwork=r,this.video=i,this.backgroundColor=o}}class gu extends Ls{constructor(e,t,n){super(),this.details=e,this.iconArtwork=t,this.backgroundColor=n}}class yu extends Ls{constructor(e,t){super(),this.unsubscribedAction=e,this.subscribedAction=t}}yu.shelfBackgroundColor=Q(z("F1F4F6"),z("303031"));class wu extends Ls{constructor(e){super(),this.contentType=e,this.items=[],this.url=null,this.mergeWhenFetched=!1,this.seeAllAction=null,this.title=null,this.subtitle=null,this.isHorizontal=!1,this.isHidden=!1,this.backgroundColor=null,this.rowsPerColumn=null,this.background={type:"none"},this.isPersonalized=!1,this.shouldFilterApps=!1}}class Tu extends Ls{constructor(e,t,n,r,i){super(),this.title=e,this.artwork=t,this.heading=n,this.description=r,this.clickAction=i,this.shelfBackground=null}}class Au{constructor(e){this._count=e,this._triggers=[]}countDown(){if(0!==this._count&&(this._count--,0===this._count)){for(const e of this._triggers)e();this._triggers.splice(0)}}then(e){0===this._count?e():this._triggers.push(e)}}const Iu=[kl.https,kl.itmsApps,kl.itmsAppss,kl.itmsMessages,kl.itmsMessagess,kl.itmsWatch,kl.itmsWatchs,kl.macappstore,kl.macappstores,kl.tvappstoreLegacy,kl.tvappstore,kl.arcade];class bu{constructor(e){var t;this.identifier=e.identifier,this._protocol=null==(t=e.protocol)?null:t,this._hostName=e.hostName,e.path?(this._pathComponents=e.path.split("/").filter(e=>e.length>0),this._pathParameterMap=function(e){const t={};return e.forEach((e,n)=>{Le(e)&&(t[e]=n)}),t}(this._pathComponents)):(this._pathComponents=null,this._pathParameterMap=null),this._pathExtension=e.pathExtension,this._query=function(e){const t=[];if(!e)return t;for(const n of e){const e=n.split("=");let r=e[0];const i=-1!==r.indexOf("?");r=r.replace("?","");let o=null;e.length>1&&(o=decodeURIComponent(e[1])),t.push({key:r,value:o,optional:i})}return t}(e.query),this._hash=e.hash,e.exclusions?this._exclusions=e.exclusions.map((function(e){return new bu(e)})):this._exclusions=null}matches(e){if(this._protocol&&e.protocol!==this._protocol)return!1;if(this._hostName&&e.host!==this._hostName)return!1;if(this._pathComponents){const t=this._pathComponents,n=e.pathComponents();if(t.length!==n.length)return!1;const r=t.length;for(let e=0;e<r;e++){const r=t[e];if(!Le(r)&&r!==n[e])return!1}}if(this._pathExtension&&e.pathExtension()!==this._pathExtension)return!1;if(this._query)for(const t of this._query){const n=e.query[t.key];if(!n&&!t.optional)return!1;if(t.value&&t.value!==n)return!1}if(this._hash&&e.hash!==this._hash)return!1;if(this._exclusions)for(const t of this._exclusions){if(t._exclusions)throw Error("Matching exclusion rules with further exclusion rules may introduce significant code-complexity and/or reduce the ease with which developers are able to reason about your desired goals. Are there any simpler options?");if(t.matches(e))return!1}return!0}extractParameters(e){const t={};if(this._pathComponents){const n=e.pathComponents();for(const e of Object.keys(this._pathParameterMap)){const r=e.replace("{","").replace("}",""),i=this._pathParameterMap[e];t[r]=decodeURIComponent(n[i])}}if(this._query)for(const n of this._query)t[n.key]=e.query[n.key];return t}}class Su{constructor(){this._routeMappings=[]}associate(e,t){const n=[];for(const t of e)n.push(new bu(t));this._routeMappings.push({route:n,object:t})}routedObjectForUrl(e){let t="string"==typeof e?new Fl(e):e;t=function(e){let t="string"==typeof e?new Fl(e):e;if(!De(t))return t;const n=t.query,r=n.url;return(!t.host||0===t.host.length)&&null!=r&&(t=new Fl(r),n.dsid&&(t=t.append("query",{dsid:n.dsid}))),Fl.fromComponents(kl.https,t.host,t.pathname,t.query,t.hash)}(t),t=function(e){const t="string"==typeof e?new Fl(e):e;if(!De(t))return t;const n=t.build();let r,i=Ee(t.query);const o={"finance-app.itunes.apple.com":"account"},a=[{key:"MZSearch.woa",action:"search"},{key:"search",action:"search"},{key:"freeProductCodeWizard",action:"redeem"},{key:"redeemLandingPage",action:"redeem"},{key:"showDialogForRedeem",action:"redeem"},{key:"redeem",action:"redeem"},{key:"buyLandingPage",action:"gift"},{key:"buyCharityGiftWizard",action:"donate"},{key:"longUrlHandler",action:"checkForLongUrl"},{key:"checkForPreorders",action:"checkForPreorders"},{key:"MZFinance.woa",action:"account"}],s={"accessory-lookup":"accessoryLookup",showDialogForRedeem:"redeem","finance-app":"account",viewEula:"eula",software:"apps"};let l=!1;for(const e of Object.keys(o))if(t.host&&-1!==t.host.indexOf(e)){l=!0,r=o[e];break}let c=!1;for(const e of a){const n=e.key;if(t.pathname&&-1!==t.pathComponents().indexOf(n)){c=!0,r=e.action,void 0!==i[n]&&delete i[n];break}}for(const e of Object.keys(s)){const n=void 0!==t.query[e]&&null!==t.query[e],o=t.query.action&&-1!==t.query.action.indexOf(e);if(n||o){r=s[e],void 0!==i[e]&&delete i[e];break}}if("account"===r&&-1!==n.indexOf("getPass")&&(r="addToPassbook",delete i.getPass),r){const e=null,n=null,o={action:r};return"redeem"===r&&(i.code||i.certId)?o.code=i.code||i.certId:"account"!==r&&"checkForPreorders"!==r&&"checkForLongUrl"!==r||!c&&!l||(o.originalUrl=t.toString()),i=Object.assign(Object.assign({},i),o),Fl.fromComponents(t.protocol,n,e,i,t.hash)}return t}(t);for(const e of this._routeMappings)for(const n of e.route)if(n.matches(t))return{normalizedUrl:t,parameters:n.extractParameters(t),object:e.object,matchedRuleIdentifier:n.identifier};return{normalizedUrl:t,parameters:null,object:null,matchedRuleIdentifier:null}}}class ku extends Ds{constructor(e,t){super(),this.title=e,this.sections=t||[],this.pageMetrics=new Yl}}class Pu extends Ds{constructor(e,t){super(),this.title=e,this.footer=t,this.contents=[]}addContentItem(e){this.contents.push(e)}}class Cu extends Ds{constructor(e){super(),this.type=e}}class vu extends Cu{constructor(e,t,n){super("link"),this.title=e,this.action=t,this.displayType=n||"action"}}class Eu extends Cu{constructor(e,t){super("infoListItem"),this.title=e,this.value=t}}class Ou extends Cu{constructor(e){super("text"),this.text=e}}const _u=[Is.mediaHost,Is.mediaEdgeHost,Is.mediaEdgeSearchHost],Ru=["description","fileSizeByDevice","messagesScreenshots","minimumOSVersion","privacyPolicyUrl","promotionalText","screenshotsByType","supportsFunCamera","supportURLForLanguage","versionHistory","videoPreviewsByType","websiteUrl"],Du=/id([0-9]+)\/?$/i,Lu={915249334:"1462947752"},Fu=["latest-release-app","system-apps","arcade-apps","app-bundles","ios-apps","imessage-apps","watch-apps","atv-apps"],xu="mac-apps",Nu="watch-apps",Uu="Apple-AUD";class Mu{constructor(e){this.builderClass=e}handleShelf(e,t,n,r,i){i(new Error(`${this.builderClass} does not implement handleShelf`))}handlePagination(e,t,n,r,i,o){o(new Error(`${this.builderClass} does not implement handlePagination`))}get shelfRoute(){return[{protocol:kl.internal,path:`${this.shelfPath}{data}`}]}get paginationRoute(){return[{protocol:kl.internal,path:`${this.paginationPath}`}]}shelfUrl(e){return`${kl.internal}:${this.shelfPath}${encodeURIComponent(JSON.stringify(e))}`}get shelfPath(){return`/${this.builderClass}/${Pl.shelf}/`}get paginationUrl(){return`${kl.internal}:${this.paginationPath}`}get paginationPath(){return`/${this.builderClass}/${Pl.lookup}/`}static createFlowAction(e,t,n){const r=new Jl(t);return r.pageUrl=n.build(),r.pageData=e,r}}class Bu extends Mu{defaultAttributes(){return[]}defaultTab(e){return null}prepareRequest(e,t,n){e.includingAdditionalPlatforms(this.defaultPlatforms()),e.includingAttributes(this.defaultAttributes())}defaultAction(e,t,n){return Bu.createFlowAction(e,this.pageType(),n)}handlePage(e,t,n,r,i){As.c(`${this.builderClass}.handlePage`,()=>{let n;const o=e.build();n=xe(e)?new ph(o):this.generatePageRequest(e,t),n||i(new Error(`Could not construct media API request for: ${e}`)),this.prepareRequest(n,e,t),n.attributingTo(o);const a=this.createFetchOptions(null),s=this.generateAdditionalPageRequirements(e,t),l=Object.keys(s),c=l.map(e=>s[e]),u=[$(n,a),...c];Promise.all(u).then(n=>{const r=n[0],i=n.slice(1),o={};for(let e=0;e<i.length;e++){const t=l[e];o[t]=i[e]}return this.supportsDataAugmenting()?this.augmentData(e,t,r).then(e=>this.renderPage(e.originalData,t,o,e.additionalData)):this.renderPage(r,t,o,null)}).then(n=>{const r=this.defaultTab(n),i=this.defaultAction(n,t,e),o=t[vl.isPPT];if(e.removeParam(vl.isPPT),null===r||o)return i;{const e=new Xl(r);return e.actions=[i],e}}).then(r,n=>{this.handlePageError(n,r,i,e,t)})})}handlePageError(e,t,n,r,i){n(e)}handleShelf(e,t,n,r,i){As.c(`${this.builderClass}.handleShelf`,()=>{let n;const o=e.build();n=xe(e)?new ph(o):this.generateShelfRequest(e,t),n?(this.prepareRequest(n,e,t),n.attributingTo(e.build()),$(n).then(e=>{const n=this.renderShelf(e,t);return this.shelfRequiresAdditionalModification(n,t)?this.performAdditionalShelfModifications(n,t):n}).then(r,e=>{this.handleShelfError(e,r,i,t)})):i(new Error(`Could not construct media API request for: ${e}`))})}performAdditionalShelfModifications(e,t){return Promise.resolve(e)}shelfRequiresAdditionalModification(e,t){return!1}handleShelfError(e,t,n,r){n(e)}handlePagination(e,t,n,r,i,o){As.c(`${this.builderClass}.handlePagination`,()=>{let n;const a=e.build();n=xe(e)?new ph(a):this.generatePaginationRequest(e,t,r),n?(this.prepareRequest(n,e,t),n.attributingTo(e.build()),$(n).then(e=>this.renderPaginatedPage(e,r)).then(i,e=>{this.handlePaginationError(e,i,o,t,r)})):o(new Error(`Could not construct media API request for: ${e}`))})}handlePaginationError(e,t,n,r,i){n(e)}generateAdditionalPageRequirements(e,t){return{}}generateShelfRequest(e,t){throw new Error(`generateShelfRequest is not supported on: ${this.builderClass}`)}generatePaginationRequest(e,t,n){throw new Error(`generatePaginationRequest is not supported on: ${this.builderClass}`)}supportsDataAugmenting(){return!1}augmentData(e,t,n){const r={url:e,parameters:t};return Fe(n,this.additionalDataKeysNeededForData,this.fetchAdditionalDataForKey,r)}additionalDataKeysNeededForData(e,t){return null}fetchAdditionalDataForKey(e){return null}renderShelf(e,t){throw new Error(`renderShelf is not supported on: ${this.builderClass}`)}renderPaginatedPage(e,t){throw new Error(`renderPaginatedPage is not supported on: ${this.builderClass}`)}createFetchOptions(e){const t={};if(l(e)){const n={};n[Uu]=e,t.headers=n}return t}}const $u="https://itunes.apple.com/WebObjects/MZStore.woa/wa/genericPageTemplate?pageComponent=finance_internet_eraser_page&additionalResources=p7financebootstrap",Vu="https://finance-app.itunes.apple.com/subscriptions/manage?context=deeplink",qu="https://finance-app.itunes.apple.com/preorders";class Gu{constructor(e){this._dispatchedFastpipeImpressionIds=new Set,this._options=Object.freeze(e)}get defaultTopic(){return this._options.defaultTopic}_filterFastpipeImpression(e){if(g(e,Gu.hasIAdData)){const t=u(e,"impressions");if(1!==t.length)return!1;const n=t[0];if("data-metrics-impressions-low-latency"!==d(n,"impressionQueueTag"))return!1;const r=d(n,"iAdImpressionId");return this._dispatchedFastpipeImpressionIds.has(r)?(this._options.isLoggingEnabled&&console.log("fastpipe impressions filtered for iAdImpressionId"+r),!0):(this._dispatchedFastpipeImpressionIds.add(r),!1)}return!1}_reduceFieldAccuracy(e,t){for(const n of t){const t=d(n,"fieldName");if(o(t))continue;const r=f(e,t);if(o(r))continue;let i=f(n,"magnitude");o(i)&&(i=1048576);let a=f(n,"significantDigits");if(o(a)&&(a=2),i<=0||a<0){e[t]=Number.NaN;continue}const s=Math.pow(10,a),l=(r>0?Math.floor:Math.ceil)(r/i/s)*s;e[t]=l}}_decorateAll(e,t){const n=this._options.bagProvider,r=n("metricsBase",t);o(r)||"object"!=typeof r||Object.assign(e,r),e.clientBuildType=this._options.buildType,e.resourceRevNum=this._options.jsVersion,e.xpSendMethod="jet-js",this._options.buyDecorator.useApp(d(e,"app"));const i=function*(e){if(o(e))return;const t=e.split(";");for(const e of t){const t=e.indexOf("=");if(-1===t){const t=decodeURIComponent(e).trim();yield{key:t,value:""}}else{const n=decodeURIComponent(e.substring(0,t)).trim(),r=decodeURIComponent(e.substring(t+1)).trim();yield{key:n,value:r}}}}(d(e,"cookie"));for(const t of i)if("xp_ci"===t.key){this._options.buyDecorator.useClientId(t.value),e.clientId=t.value;break}delete e.cookie;const a=d(e,"pageType"),s=d(e,"pageId");if(!o(a)&&!o(s)){const r=d(n("compoundSeparator",t))||"_";e.page=`${a}${r}${s}`}const l=u(n("deResFields",t));this._reduceFieldAccuracy(e,l)}_decorateImpressions(e){if(a(e.impressions))throw new Error("Empty impressions event filtered");if(!y("rotatingAdverts")&&this._filterFastpipeImpression(e))throw new Error("Fast pipeline impressions event filtered");const t=d(e,"refUrl");t&&(e.searchTerm=Ta(t)),delete e.refUrl}_decorateMedia(e){const t=f(e,"position");o(t)||(e.position=Math.round(t))}_decoratePage(e){const t=d(e,"refUrl");o(t)||(e.refApp=ya(t),e.searchTerm=Ta(t));const n=d(e,"page");o(n)||(e.pageHistory=this._options.buyDecorator.getPageHistoryFor(n))}_decorateSearch(e){e.eventVersion=3}makeEvent(e){const t=d(e,"eventType");this._options.isLoggingEnabled&&console.log(`Building event for topic: ${t}`);const n=d(e,"topic")||this._options.defaultTopic;this._decorateAll(e,n);const r=e.extRefUrl;r&&""===r&&delete e.extRefUrl;const i={shouldFlush:!1};switch(t){case"click":i.shouldFlush=p(e,Gu.hasIAdData);break;case"exit":i.shouldFlush=!0;break;case"impressions":this._decorateImpressions(e),i.shouldFlush=p(e,Gu.hasIAdData);break;case"media":this._decorateMedia(e);break;case"page":this._decoratePage(e);break;case"search":this._decorateSearch(e)}return host.clientIdentifier!==rl||y("subscribePageExtensionEnterExitEvents")||(i.shouldFlush=!0),new Hl(e,n,i)}}Gu.hasIAdData="hasiAdData";const Hu="X-AppStore-iAdClickToken",ju="X-AppStore-iAdLineItem";class Wu{constructor(e,t){this.pageFields={},this.clickFields={},this.impressionsFields={},this.fastImpressionFields={},this.iAdClickEventFields={},this._iAdApplied=!1,this._iAdId=e,this._iAdAdamId=null,this.pageFields[Gu.hasIAdData]=!0,this.pageFields.iAdAppStoreClientRequestId=t,this.pageFields.iAdId=ga(e)}get iAdIsPresent(){return this._iAdApplied}get iAdAdamId(){return this._iAdAdamId}apply(e,t){if(this._iAdAdamId=e,t){this.impressionsFields[Gu.hasIAdData]=!0,this.impressionsFields.iAdId=ga(this._iAdId),this.fastImpressionFields.iAdImpressionId=ga(t.impressionId),this.fastImpressionFields.iAdMetadata=ga(t.metadata);const n={iAdFormat:wa(m(t,"format")),iAdAlgoId:ga(t.algoId),iAdImpressionId:ga(t.impressionId),iAdMetadata:ga(t.metadata)};this.pageFields.iAd=n,this.pageFields.adamId=e,this.clickFields[Gu.hasIAdData]=!0,this.clickFields.iAdId=ga(this._iAdId),this.clickFields.iAdImpressionId=ga(t.impressionId),this.clickFields.iAdMetadata=ga(t.metadata),Object.assign(this.iAdClickEventFields,t),this._iAdApplied=!0}}applyClickFieldsFromPageRequest(e,t){this._iAdApplied=!0,this._iAdAdamId=e,Object.assign(this.clickFields,t)}setSpecifiedCreativeUsed(e){this.fastImpressionFields.iAdIsSpecifiedCreativeUsed=e,this.clickFields.iAdIsSpecifiedCreativeUsed=e}}class zu{constructor(e={}){this.baseFields=e}}class Yu extends Ds{constructor(){super(),this.pageMetrics=new Yl}}class Ku extends Ds{constructor(e,t){super(),this.type=e,this.values=t}}class Qu extends Ds{constructor(e,t,n=null){super(),this.name=e,this.value=t,this.isSelected=t===n}}class Ju extends Ds{constructor(e,t){super(),this.type=e,this.resultModel=t}}class Xu extends Ds{constructor(e,t,n){super(),this.iAd=e,this.impressionId=t,this.transparencyAction=n}}class Zu extends Ql{constructor(e){super("AdTransparencyAction"),this.adTransparencyData=e}}class ep extends Ls{}class tp extends Ql{constructor(e,t,n,r){super("SearchAction"),this.title=e,this.term=e,this.url=t,this.origin=n,this.entity=r,this.presentationStyle=["textFollowsTintColor"]}}class np extends Ds{constructor(e){super(),this.hints=e,this.pageMetrics=new Yl}}class rp extends Ds{constructor(e,t){super(),this.title=e,this.searches=t}}class ip extends Ds{constructor(e,t,n,r,i,o,a,s,l="infer"){super(),this.type=e,this.content=t,this.heading=r,this.caption=i,this.longCaption=o,this.leadingValue=l,this.accessibilityTitle=a,this.accessibilityCaption=s,this.style=n}}class op extends Ds{constructor(e,t,n,r){super(),this.titleStyle=e,this.title=t,this.subtitle=n,this.body=r}}class ap extends Ds{constructor(e,t){super(),this.type=e,this.shelfId=t}}class sp extends Ds{constructor(e,t){super(),this.title=e,this.subtitle=t}}class lp extends Hc{constructor(){super(),this.pageMetrics=new Yl}}class cp extends Ds{constructor(e){super(),this.shelves=e,this.title=null,this.presentationOptions=[],this.isIncomplete=!1,this.pageMetrics=new Yl}}class up extends Ds{constructor(){super(),this.pageMetrics=new Yl}}class pp extends cp{}class dp extends cp{}class fp extends cp{constructor(e,t,n){super(e),this.sort=t,this.displayStyles=n}}const hp=":";class mp extends Bu{constructor(){super("ArcadeUpsellViewerBuilder")}defaultPlatforms(){return Xa()}defaultAttributes(){return["editorialArtwork","isAppleWatchSupported","requiredCapabilities"]}pageType(){return"page"}get pageRoute(){return[{protocol:kl.https,path:`/${Pl.arcadeUpsellPreview}`,query:[vl.ids]}]}generatePageRequest(e,t){const n=d(e.query[vl.ids]);if(!l(n))return null;const r=this.createUpsellToInAppPairs(n),i=[];for(const e of r)i.push(e.upsellId);return(new ph).forType("editorial-items").withIds(i)}generateAdditionalPageRequirements(e,t){const n=super.generateAdditionalPageRequirements(e,t),r=d(e.query[vl.ids]);if(!l(r))return null;const i=this.createUpsellToInAppPairs(r),o=[];for(const e of i)s(e.inAppId)&&o.push(e.inAppId);if(a(o))return n;const c=(new ph).forType("in-apps").withIds(o);return n[mp.inAppDataKey]=$(c,this.createFetchOptions(null)),n}renderPage(e,t,n,r){return As.c("renderPage",()=>{const r=He(e);if(a(r))return null;const i=d(t[vl.ids]),o=this.createUpsellToInAppPairs(i),c={};for(const e of r)c[e.id]=e;const u={};if(s(n)&&l(n[mp.inAppDataKey])){const e=He(n[mp.inAppDataKey]);for(const t of e)u[t.id]=t}const p=[],f={shelves:[],metricsPageInformation:Ke("Genre","upsellPreview",e),metricsLocationTracker:{rootPosition:0,locationStack:[]},groupingData:null,pageGenreAdamId:null,pageGenreId:null,hasAuthenticatedUser:s(Vl.dsid),additionalShelfParameters:null,isArcadePage:!0};for(const e of o){const t=xi(c[e.upsellId],u[e.inAppId],f);if(s(t)){const e=new wu("upsellBreakout");e.isHorizontal=!0,e.items=[t],p.push(e)}}return new cp(p)})}createUpsellToInAppPairs(e){const t=[],n=e.split(",");for(const e of n){const n=e.split(hp);t.push({upsellId:n[0],inAppId:n[1]})}return t}}mp.inAppDataKey="inAppData";const gp={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},yp={prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:"mac"===il,muteUnmute:!0},wp={playbackControls:gp,autoPlayPlaybackControls:yp},Tp={prominentPlay:!1,fullScreenToggle:!1,inlinePlayPause:!1,muteUnmute:!1},Ap=20,Ip="mediumLockup";class bp{constructor(){this.profile="lockup",this.maxPerPage=Ap}}class Sp extends Bu{defaultAttributes(){return["editorialArtwork","editorialVideo","isAppleWatchSupported","requiredCapabilities"]}defaultPlatforms(){return Xa()}pageType(){return"page"}generatePaginationRequest(e,t,n){return new ph(n.remainingContent)}renderPaginatedPage(e,t){const n=t;return this.pageWithContent(e,n)}handlePaginationError(e,t,n,r,i){t(this.renderPaginatedPage({data:[]},i))}pageWithContent(e,t){return As.c("pageWithContent",()=>{const n=t.preferredShelfContentType||Ip,r=new wu(n),i={id:null,kind:null,softwareType:null,targetType:"swoosh",title:t.title,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,idType:"its_contentId",recoMetricsData:ze(e)};vo(r,i),ka(i,t.title),r.isHorizontal=!1,r.shouldFilterApps=t.shouldFilter;const o=He(e);t.remainingContent=[],r.items=to(o,{contentUnavailable:(e,n)=>(t.remainingContent=ut(o,n),!0),lockupOptions:{metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},clientIdentifierOverride:t.clientIdentifierOverride,artworkUseCase:Ro(n)}});const a=new cp([r]);return t.remainingContent.length&&(a.nextPage=t),a})}}class kp extends Sp{constructor(){super("RoomBuilder")}generatePageRequest(e,t){let n=e.query[vl.featuredContentId];if(this.isValidRoomId(n)||(n=t.id),!this.isValidRoomId(n))throw new Error(`Unable to map ${e.build()} to a media api url`);return(new ph).forType("rooms").withIds([n])}renderPage(e,t,n){return As.c("renderPage",()=>{const t=Ge(e),n=H(t,"contents"),r=Ke("Room",t.id,e),i=new bp;i.remainingContent=n.data,i.url=this.paginationUrl,i.shouldFilter=!ie(t,"doNotFilter"),i.metricsPageInformation=r,i.metricsLocationTracker={rootPosition:0,locationStack:[]};const o=ne(t,"editorialElementKind");i.preferredShelfContentType=this.preferredShelfStyleForFcKind(Number(o)),i.clientIdentifierOverride=ot(t),i.title=ne(t,"title");const a=this.pageWithContent(n,i);return a.title=i.title,kp.platformPrefersLargeTitles()&&(a.presentationOptions=["prefersLargeTitle"]),Je(a,r),a})}get pageRoute(){return[{protocol:kl.https,path:`/${Pl.store}/${Pl.room}`,query:[vl.featuredContentId]},{protocol:kl.https,path:`/${Pl.storeElements}/${Pl.recommendationsSeeAll}`},{protocol:kl.https,path:"{apiVersion}/editorial/{countryCode}/rooms/{id}"},{protocol:kl.https,path:"/{countryCode}/collection/today-view-widgets",query:[vl.featuredContentId]}]}isValidRoomId(e){return c(e)}preferredShelfStyleForFcKind(e){if(null==e)return null;switch(e){case 431:return"inAppPurchaseTiledLockup";default:return null}}static seeAllPage(e,t){const n=new wu(t||Ip);n.isHorizontal=!1,n.items="parentShelfItems";const r=new cp([n]);return r.isIncomplete=!0,r.title=e,kp.platformPrefersLargeTitles()&&(r.presentationOptions=["prefersLargeTitle"]),r}static platformPrefersLargeTitles(){return"watch"===il||"mac"===il}}class Pp extends Sp{requestWithFilter(e,t){return(new ph).forType("apps").withFilter(e,t)}renderPage(e,t,n){return As.c("renderPage",()=>{const t=new bp;return t.url=this.paginationUrl,t.shouldFilter=!1,t.metricsLocationTracker={rootPosition:0,locationStack:[]},this.pageWithContent(e,t)})}}class Cp extends Sp{handlePage(e,t,n,r,i){r(this.action())}generatePageRequest(e,t){throw new Error(`generatePageRequest is not supported on: ${this.builderClass}`)}renderPage(e,t,n){throw new Error(`renderPage is not supported on: ${this.builderClass}`)}}const vp="externalDeepLinkUrl";class Ep extends Ls{constructor(e){super(),this.kind=e}}class Op extends Ep{constructor(){super("hero"),this.allowsAutoPlay=!0,this.looping=!0}isValid(){const e=this.art&&this.art.isValid(),t=this.video&&this.video.isValid();return(e||t)&&super.isValid()}}class _p extends Ep{constructor(e,t){super("artwork"),this.art=e,this.titleBackingGradient=t}}class Rp extends Ep{constructor(e){super("appIcon"),this.icon=e}}class Dp extends Ep{constructor(e,t,n){super("brandedSingleApp"),this.icon=e,this.art=t,this.titleBackingGradient=n}}Dp.noArtBackgroundColor=z("BBBBBB");class Lp extends Ep{constructor(e,t){super("list"),this.lockups=e,this.marketingText=t}}class Fp extends Ep{constructor(e,t){super("multiApp"),this.lockups=e,this.additionalText=t}}class xp extends Ep{constructor(e){super("inAppPurchase"),this.lockup=e}}class Np extends Ep{constructor(e){super("river"),this.lockups=e,this.lockupImpressionLimit=10}}class Up extends Ep{constructor(e,t){super("grid"),this.lockups=e,this.artworkGridType=t,this.lockupImpressionLimit=3}}class Mp extends Ep{constructor(e,t){super("video"),this.allowsAutoPlay=!0,this.looping=!0,this.video=e,this.description=t}}class Bp extends Ds{constructor(e){super(),this.kind=e}}class $p extends Bp{constructor(e){super("lockup"),this.lockup=e,this.displaysIcon=!0}}class Vp extends Bp{constructor(e,t,n,r){super("marketingLockup"),this.marketingText=null,this.lockup=e,this.paragraph=t,this.hideBackground=n,this.artworkBackgroundColor=r}}class qp extends Bp{constructor(e){super("lockupList"),this.lockups=e}}class Gp extends Bp{constructor(e,t){super("paragraph"),this.paragraph=e,this.style=t}}class Hp extends Bp{constructor(e){super("action"),this.action=e}}class jp extends Bp{constructor(e,t,n){super("threeLine"),this.heading=e,this.title=t,this.description=n}}class Wp extends Bp{constructor(e){super("arcadeLockup"),this.arcadeLockup=e}}class zp extends Ls{constructor(){super(),this.heading=null,this.title=null,this.media=null,this.heroMedia=null,this.overlay=null,this.style=null,this.clickAction=null,this.backgroundColor=null,this.inlineDescription=null,this.collapsedHeading=null}}class Yp extends Ls{constructor(e){super(),this.cards=e}}class Kp extends Ds{constructor(e,t,n,r){super(),this.shelves=e,this.title=n,this.tabTitle=r,this.nextPage=null,this.onboardingCardIds=t||[],this.pageMetrics=new Yl}}class Qp{constructor(e,t){this.period=e,this.type=t}isEqualTo(e){return e.period===this.period&&e.type===this.type}}const Jp=7,Xp={D:"DAYS",W:"WEEKS",M:"MONTHS",Y:"YEARS"},Zp={FreeTrial:"FREE_TRIAL",PayUpFront:"PAID_UPFRONT",PayAsYouGo:"PAID_TRIAL"},ed="NULL",td="isOnBoardingCard";class nd{constructor(e){this.label=e.label,this.title=e.title,this.meta=e.meta,this.date=d(e,"date"),this.remainingContents=u(e,"contents"),this.numberOfItemsProcessed=0,this.isFullyHydrated=function(e){for(let t=e.length-1;t>=0;t--)if(!je(e[t]))return!1;return!0}(this.remainingContents)}}const rd="FEATURED APP",id="FEATURED GAME",od=["editorialArtwork","editorialVideo","minimumOSVersion"];class ad{constructor(){this.locationTracker={rootPosition:0,locationStack:[]}}}class sd{constructor(e,t,n,r){this.todayModule=e,this.metricsPageInformation=n,this.contentOffsetWithinModule=t,this.metricsLocationTracker=r}}const ld=new Set(["brandedSingleApp","artwork","appIcon","grid","multiApp","video"]),cd=new Set(["brandedSingleApp","artwork","appIcon","grid","multiApp","video"]),ud=new Set(["brandedSingleApp","artwork","appIcon","grid","multiApp","video"]),pd=new Set(["brandedSingleApp","artwork","grid","video"]);class dd extends Bu{constructor(){super("ArcadePageBuilder")}static get comingSoonGroupingID(){return"mac"===il?"177564":"175443"}defaultPlatforms(){return Xa()}defaultAttributes(){return["editorialArtwork","isAppleWatchSupported","requiredCapabilities","marketingArtwork","marketingVideo"]}pageType(){return"arcade"}get pageRoute(){return[{protocol:kl.https,path:`/${Pl.store}/${Pl.grouping}`,query:[vl.isArcade,`${vl.isTrialAvailable}?`,`${vl.isSubscribed}?`,vl.id]},{hostName:Cl.storePreview,path:`/WebObjects/{storePreviewInstance}/wa/${Pl.grouping}`,query:[vl.isArcade,`${vl.isTrialAvailable}?`,`${vl.isSubscribed}?`,vl.id,`${vl.useReleaseId}?`]},{protocol:kl.https,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}",query:[vl.isArcade,`${vl.isTrialAvailable}?`,`${vl.isSubscribed}?`]},{protocol:kl.https,path:"{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}",query:[vl.isArcade,`${vl.isTrialAvailable}?`,`${vl.isSubscribed}?`]},{protocol:kl.https,path:"{apiVersion}/editorial/{countryCode}/groupings/{id}",query:[vl.isArcade,`${vl.isTrialAvailable}?`,`${vl.isSubscribed}?`]}]}get shelfRoute(){return[{protocol:kl.internal,path:`/${Pl.grouping}/${Pl.shelf}/{token}`,query:[vl.isArcade,`${vl.isTrialAvailable}?`,`${vl.isSubscribed}?`]},{protocol:kl.internal,path:`/${Pl.arcade}/${Pl.shelf}/{token}`,query:[vl.isArcadeSeeAllGamesShelf]}]}generatePageRequest(e,t){let n=null;n=Is.isArcadeComingSoonEnabled?dd.comingSoonGroupingID:t[vl.id];const r=g(t[vl.isSubscribed]);if(!c(n))throw new Error(`Unable to map ${e.build()} to a media api url`);let i=(new ph).forType("groupings").includingAttributes(["editorialArtwork","editorialVideo","isAppleWatchSupported","requiredCapabilities"]);const o=es();s(o)&&i.addingQuery("contexts",o);const a="mac"===il;Is.isArcadeComingSoonEnabled?a||i.addingQuery("tabs","subscriber"):r?i.addingQuery("tabs","subscriber"):(i.addingQuery("tabs","nonsubscriber"),i.includingRelationshipsForUpsell(!1)),i.withIds([n]);const u=e.query[vl.useReleaseId];return e.host===Cl.storePreview&&l(u)&&(i=i.addingQuery("release",u),i.isStorePreviewRequest=!0),i.attributingTo(e.build())}generateAdditionalPageRequirements(e,t){const n=super.generateAdditionalPageRequirements(e,t);if(Is.isArcadeComingSoonEnabled){const e=(new ph).forType("editorial-items").withIds([ch]);return n[dd.comingSoonEIRequirementKey]=$(e,this.createFetchOptions(null)).catch(()=>null),n}if(dd.footerShowsIconsForPlatform(host.platform)&&!Is.isArcadeComingSoonEnabled&&!y("inlineArcadeFooter")){const e=ja(this.numberOfIconsForArcadeAppGrid(il));n[dd.footerIconsRequirementsKey]=$(e,this.createFetchOptions(null)).catch(()=>null)}return g(t[vl.isSubscribed])&&(n[dd.recentlyPlayedGamesRequirementKey]=Ya(null,!1,uh)),n}isArcadeLockupInNavBarSupportedFromUpsellData(e){return"mac"===il||!!y("arcadeLockupInNavBar")&&("editorial-items"!==e.type||("phone"===il||"pad"===il)&&gt(la(e,"short")))}renderPage(e,t,n,r){return As.c("renderPage",()=>{const i=Ge(e);if(a(i))return null;const o=H(i,"tabs"),l=ne(i,"id");if(a(o))return null;const c=g(t[vl.isSubscribed]),u=g(t[vl.isTrialAvailable]),p="tv"===il,d="mac"===il,f={};f[vl.isArcade]="true",f[vl.isSubscribed]=`${c}`,f[vl.isTrialAvailable]=`${u}`;const h=n[dd.recentlyPlayedGamesRequirementKey],m={shelves:[],metricsPageInformation:Ke("Genre",i.id,e),metricsLocationTracker:{rootPosition:0,locationStack:[]},groupingData:o,pageGenreAdamId:l,pageGenreId:null,hasAuthenticatedUser:s(Vl.dsid),additionalShelfParameters:f,isArcadePage:!0,recentlyPlayedGamesData:h};let w=null,T=null,A=null;if(Is.isArcadeComingSoonEnabled)w=Ge(n[dd.comingSoonEIRequirementKey]),A=xi(w,null,m);else if(!c){const e=Ka(i);if(e)w=e.marketingItemData||e.editorialData,T=e.inAppData;else if(r){As.d("defaultValue","nonnull","relationships.upsell");const e=Qa(r.get("upsellRecovery"));e&&(w=e.marketingItemData||e.editorialData,T=e.inAppData)}if(a(w))throw new Error(`Missing upsell data for Arcade grouping ${t[vl.id]}`);A=xi(w,T,m)}dd.insertShelfForUpsellBreakoutIfNecessary(A,m),tn(i,m);const I=new dp(m.shelves);Je(I,m.metricsPageInformation),I.tabTitle=ne(i,"name");const b=host.clientIdentifier===el;(c&&!p||b)&&(I.title=ne(i,"name")),I.titleEffect=m.pageTitleEffect,I.presentationOptions=d?["prefersLargeTitleWhenRoot"]:[];let S=!1;if(m.shelves.length>0){const e="largeHeroBreakout"===m.shelves[0].contentType,t="upsellBreakout"===m.shelves[0].contentType;S=e||t}if(S&&I.presentationOptions.push("prefersOverlayedPageHeader"),!c)if(I.subscriptionOfferAction=dd.createSubscribeAction(A,{id:null,pageInformation:m.metricsPageInformation,locationTracker:m.metricsLocationTracker,targetType:"button"}),this.isArcadeLockupInNavBarSupportedFromUpsellData(w)){I.subscriptionOfferDisplayProperties=new xs("arcade",Is.arcadeAppAdamId,"colored",null,"arcade",null,null,null,null,null,null,null,null,null,null,Is.arcadeProductFamilyId),I.subscriptionOfferTitle=A.details.title,I.subscriptionOfferSubtitle=A.buttonCallToAction||A.details.description;const e={pageInformation:m.metricsPageInformation,locationTracker:m.metricsLocationTracker},t="marketing-items"===w.type,n={inAppData:T,editorialData:t?null:w,marketingItemData:t?w:null};I.subscriptionLockup=Zi(n,e,"arcadeTabHeader","colored","mac"===il?"arcade":"navigationBar")}else I.subscriptionOfferAction.title=function(e){return e?bl?e.toLocaleUpperCase(bl):e:null}(A.offerButtonAction.title),I.subscriptionOfferDisplayProperties=new xs("arcade",Is.arcadeAppAdamId,"colored",null,"navigationBar",null,null,null,null,null,null,null,null,null,null,Is.arcadeProductFamilyId);if(!Is.isArcadeComingSoonEnabled){const e={featuredContentId:null,featuredContentData:null,metricsPageInformation:m.metricsPageInformation,metricsLocationTracker:m.metricsLocationTracker,pageGenreId:m.pageGenreId,id:"arcade-see-all-games-footer",title:null,shouldFilter:!1,remainingItems:[],isFirstRender:!0,isDeferring:!1,showOrdinals:!1,hasExistingContent:!1,ordinalIndex:1,isSearchGrouping:m.isSearchGrouping,isArcadePage:m.isArcadePage};if(y("inlineArcadeFooter")){if(I.shelves.push(this.createFooterShelf(null,!0,e)),"mac"===il||"tv"===il){const e=this.createTermsAndConditionsShelf();s(e)&&I.shelves.push(e)}}else this.addFooterToPage(I,n[dd.footerIconsRequirementsKey],e)}return I.autoUpsellAction=$a("arcadeGeneric",null),I})}static insertShelfForUpsellBreakoutIfNecessary(e,t){if(a(e))return;const n=new wu("upsellBreakout");n.isHorizontal=!0,n.items=[e],n.presentationHints={isFirstShelf:!0},t.shelves.push(n)}static createSubscribeAction(e,t){if(a(e))return null;if(Is.isArcadeComingSoonEnabled)return e.offerButtonAction;if("mac"===il)return e.offerButtonAction;{const n=$a("arcadeTabNavBar",null,t);return n.title=e.offerButtonAction.title,n}}static footerShowsIconsForPlatform(e){switch(e){case"iOS":case"macOS":return!0;default:return!1}}createFooterShelf(e,t,n){const r=new Ys;r.buttonAction=Ba("releaseDate",n.metricsPageInformation,n.metricsLocationTracker);const i={targetType:"button",pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,title:r.buttonAction.title,id:"arcade-see-all-games-button",kind:"button",softwareType:null};vo(r.buttonAction,i);const a=new wu("arcadeFooter");a.items=[r],vo(r,{targetType:"arcadeSeeAllGamesFooter",pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker,title:P("SEE_ALL_GAMES"),id:n.id,kind:"footer",softwareType:null});const l="phone"===il||"pad"===il,c=Is.termsAndConditionsURL,u=!o(c)&&"tv"!==il;if(l){if(u){const e=P("TERMS_AND_CONDITIONS_TITLE"),t=new Zl(c),n=new qc(e);n.clickAction=t,n.presentationStyle=["hasChevron","textLightensOnHighlight","hasSeparator"],r.footnote=n}a.background={type:"color",color:K("placeholderBackground")}}if(s(e)){const t={pageInformation:n.metricsPageInformation,locationTracker:n.metricsLocationTracker},i=We(e);if(y("seeAllGamesFooterArtworkImpressions"))r.icons=Fo(i,t,{useCase:2});else{const e=[];for(const t of i)e.push(xo(t,{useCase:2}));r.icons=e}}else r.icons=[];return t&&(a.url=`${kl.internal}:/${Pl.arcade}/${Pl.shelf}/${encodeURIComponent(JSON.stringify(n))}?${vl.isArcadeSeeAllGamesShelf}=true`),a}createTermsAndConditionsShelf(){const e=Is.termsAndConditionsURL,t=!o(e)&&"tv"!==il;return"mac"!==il&&"tv"!==il||!t?null:gn(e,!1)}addFooterToPage(e,t,n){const r=[],i=dd.footerShowsIconsForPlatform(host.platform);if(r.push(this.createFooterShelf(i?t:null,!1,n)),"mac"===il||"tv"===il){const e=this.createTermsAndConditionsShelf();s(e)&&r.push(e)}return r}generateShelfRequest(e,t){return t[vl.isArcadeSeeAllGamesShelf]?this.generateSeeAllGamesShelfRequest():this.generateStandardShelfRequest(e,t)}generateSeeAllGamesShelfRequest(){return ja(this.numberOfIconsForArcadeAppGrid(il))}generateStandardShelfRequest(e,t){const n=t.token,r=JSON.parse(n),i=l(r.remainingItems),o=l(r.recommendationsHref);let a=[],s=["editorialArtwork","editorialVideo","minimumOSVersion","screenshotsByType","videoPreviewsByType"];if(y("refreshRibbon")||"pad"!==il||(a=a.concat(["developer"]),s=s.concat(["minPlayers","maxPlayers","fileSizeByDevice"])),i){let e=r.remainingItems;l(r.relationshipDataToFetch)&&(e=r.remainingItems.map(e=>j(e,r.relationshipDataToFetch)));let t=["editorialArtwork","editorialVideo","minimumOSVersion"],n=[];const i=new ph(e);return"apps"===i.resourceType&&(t=s,n=a),i.includingAdditionalPlatforms(Xa()).includingAttributes(t).includingRelationships(n)}if(o){let e=["editorialArtwork","editorialVideo","minimumOSVersion"],t=[];const n=new ph(r.recommendationsHref);return"apps"===n.resourceType&&(e=s,t=a),n.includingAdditionalPlatforms(Xa()).includingAttributes(e).includingRelationships(t)}return null}renderShelf(e,t){if(t[vl.isArcadeSeeAllGamesShelf]){const n=t.token,r=JSON.parse(n);return this.renderSeeAllGamesShelf(e,r)}return this.renderStandardShelf(e,t)}handleShelfError(e,t,n,r){const i=r.token,o=JSON.parse(i);if(o&&!o.hasExistingContent){const e=new wu(o.shelfStyle);e.isHidden=!0,t(e)}else super.handleShelfError(e,t,n,r)}renderSeeAllGamesShelf(e,t){return this.createFooterShelf(e,!1,t)}renderStandardShelf(e,t){const n=t.token,r=JSON.parse(n),i=l(r.remainingItems),o=l(r.recommendationsHref);if(i){let t=e;if(l(r.relationshipDataToFetch)){const n={};for(const t of e.data)n[t.id]=t;t={data:[]};for(const e of r.remainingItems){const i=j(e,r.relationshipDataToFetch);l(i)&&(e.relationships[r.relationshipDataToFetch].data=[n[i.id]]),t.data.push(e)}}return hn(t,r)}if(o){const t=Ge(e);return a(r.title)&&(r.title=ne(t,"name")),hn(H(t,"contents"),r)}return null}numberOfIconsForArcadeAppGrid(e){switch(e){case"phone":return 9;default:return 20}}supportsDataAugmenting(){return!0}additionalDataKeysNeededForData(e,t){if(o(t))return null;const n=Ge(e),r=g(t.parameters[vl.isSubscribed]),i=Ka(n);return!r&&o(i)?new Set(["upsellRecovery"]):null}fetchAdditionalDataForKey(e){return As.c("fetchAdditionalDataForKey",()=>{let t;if("upsellRecovery"===e){const e=Ma();e&&Is.shouldUseEditorialItemUpsellFallback?(t=za("arcadeTabHeader"),As.d("ignoredValue","marketing-items","upsellRecovery.marketingItem.editorialItemFallback")):(t=Wa("arcadeTabHeader"),e?As.d("ignoredValue","marketing-items","upsellRecovery.marketingItem"):As.d("ignoredValue","editorial-items","upsellRecovery.editorialItem"))}return o(t)?null:$(t).catch(()=>null)})}}dd.footerIconsRequirementsKey="footerIconsRequirements",dd.comingSoonEIRequirementKey="comingSoonEIRequirementKey",dd.recentlyPlayedGamesRequirementKey="recentlyPlayedRequirementKey";class fd extends Bu{constructor(){super("ArcadeSeeAllGamesPageBuilder"),this.pageSize=20,this.fakeVideoURL="x-as3-internal:/today/test"}defaultPlatforms(){return Xa()}defaultAttributes(){return["editorialArtwork","editorialVideo","isAppleWatchSupported","requiredCapabilities","videoPreviewsByType","screenshotsByType"]}defaultTab(e){return"arcade"}pageType(){return"arcade"}get pageRoute(){return[{identifier:"arcadeSeeAllGames",path:`/${Pl.arcadeSeeAllGames}`,query:[`${vl.sort}?`]},{identifier:"arcadeSeeAllGames",hostName:`${Cl.arcadeSeeAllPage}`,query:[`${vl.sort}?`]}]}get paginationRoute(){return[{identifier:"arcadeSeeAllGames",protocol:kl.internal,path:`/${Pl.arcadeSeeAllGames}/${Pl.arcadeSeeAllGamesLoadMore}`}]}generatePageRequest(e,t){let n=[];return y("refreshRibbon")||"pad"!==il||(n=n.concat(["developer"])),Ha().includingAdditionalPlatforms(Xa()).includingRelationships(n).attributingTo(e.build())}renderPage(e,t,n){return As.c("renderPage",()=>{const n=t[vl.sort]||"releaseDate",r=Ke("Room","arcadeSeeAllGames",e),i=this.createSeeAllGamesToken([],null,r,{rootPosition:0,locationStack:[]},n),o=He(e).sort(fd.seeAllGamesSort);if(a(o))return null;const s=new fp(this.createShelvesForGames(o,i,(function(e){i.remainingContent.push(e)})),n,{large:"appTrailerLockup",compact:"smallLockup"});return l(i.remainingContent)&&(s.nextPage=i),s.title=P("ALL_GAMES"),Je(s,r),s})}createSeeAllGamesToken(e,t=null,n,r,i){const o=pt([],Fl.fromComponents(kl.internal,null,`/${Pl.arcadeSeeAllGames}/${Pl.arcadeSeeAllGamesLoadMore}`).build(),null,n,r);return o.sort=i,o.maxPerPage=this.pageSize,o}createShelvesForGames(e,t,n){const r="tv"===il,i=[];let a=null,s=null,c=!1;for(const u of e){if(this.shouldDefer(u,c)){o(n)||n(u),c=!0;continue}const e={metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,recoMetricsData:ze(u)},artworkUseCase:1,canDisplayArcadeOfferButton:fa("appTrailerLockup")},p=re(u,"isPreorder");if(aa(u)&&p)continue;const d=Ji(u,e,wp);let f=!0;if(!l(d.trailers)){f=!1;let e=null;switch(il){case"mac":case"tv":case"phone":e=["splashVideo16x9","splashVideo4x3","splashVideo3x4"];break;default:e=["splashVideo4x3","splashVideo16x9","splashVideo3x4"]}const t=Zo(u,20,e);if(l(t)){const e=new Yc;t.playbackControls=gp,t.autoPlayPlaybackControls=yp,t.canPlayFullScreen=!0,e.videos=[t],d.trailers=[e],f=!0}}d.editorialTagline=null,d.developerTagline=null,f||this.addFakeVideoToMixedMediaLockup(d);const h=this.shelfTitleForSortFromData(u,t.sort),m=r&&l(a)&&3===a.items.length,g=o(a)||s!==h||m;if(o(a)||g){0!==t.metricsLocationTracker.locationStack.length&&(Pa(t.metricsLocationTracker),va(t.metricsLocationTracker));const e=r&&s===h;a=new wu("appTrailerLockup"),a.title=h,s=h,a.presentationHints={showSupplementaryText:!1},r&&(a.isHorizontal=!0,e&&(a.title=null));const n={id:`${i.length}`,kind:null,softwareType:null,targetType:"swoosh",title:h,pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,idType:"sequential"};vo(a,n),ka(n,h),i.push(a)}a.items.push(d),va(e.metricsOptions.locationTracker)}return i}shelfTitleForSortFromData(e,t){switch(t){case"releaseDate":const t=Ce(ue(e,Ae(e),"releaseDate"));if(y("allGamesDaySentenceFormatting"))return L(P("ALL_GAMES_SECTION_TITLE_RELEASE_DATE_SENTENCE"),P("ALL_GAMES_SECTION_TITLE_RELEASE_DATE_DAY_FORMAT"),t);if(y("allGamesSentenceFormatting"))return L(P("ALL_GAMES_SECTION_TITLE_RELEASE_DATE_SENTENCE"),"MMMM d, y",t);{const e=D("MMMM d, y",t);return P("ALL_GAMES_SECTION_TITLE_RELEASE_DATE").replace("{releaseDate}",e)}case"name":return ne(e,"name");default:return null}}shouldDefer(e,t){return!ae(e)||t}generatePaginationRequest(e,t,n){return new ph(st(n))}renderPaginatedPage(e,t){const n=lt(t),r=new fp(this.createShelvesForGames(He(e),n),n.sort);return l(n.remainingContent)&&(r.nextPage=n),r}addFakeVideoToMixedMediaLockup(e){const t=e.screenshots[0].artwork[0],n=new Uc(this.fakeVideoURL,t,{allowsAutoPlay:!1,looping:!1,canPlayFullScreen:!1,showPlaybackControls:!1,autoPlayPlaybackControls:{},playbackControls:{}}),r=new Yc;r.videos=[n],e.trailers=[r]}static seeAllGamesSort(e,t){const n=ue(e,Ae(e),"releaseDate"),r=ue(t,Ae(t),"releaseDate"),i=ne(e,"name"),a=ne(t,"name");return n===r?i===a?0:s(i)&&s(a)?i.toLowerCase()<a.toLowerCase()?-1:1:o(i)?1:-1:Ce(n)>Ce(r)?-1:1}}class hd extends Bu{constructor(){super("ArcadeSubscribeBuilder")}defaultPlatforms(){return Xa()}defaultTab(e){return"arcade"}defaultAttributes(){return["editorialArtwork","isAppleWatchSupported","requiredCapabilities"]}pageType(){return"arcadeSubscribe"}get pageRoute(){return[{hostName:`${Cl.arcadeSubscribePage}`,query:[`${vl.appId}?`,`${vl.context}?`,`${vl.subscribePageMessage}?`,`${vl.askToBuyId}?`,`${vl.editorialItem}?`,`${vl.includePostSubscribeAttribution}?`]},{path:"arcade/subscribe",query:[`${vl.appId}?`,`${vl.context}?`,`${vl.subscribePageMessage}?`,`${vl.askToBuyId}?`,`${vl.editorialItem}?`,`${vl.includePostSubscribeAttribution}?`]},{path:"{countryCode}/arcade/subscribe",query:[`${vl.appId}?`,`${vl.context}?`,`${vl.subscribePageMessage}?`,`${vl.askToBuyId}?`,`${vl.editorialItem}?`,`${vl.includePostSubscribeAttribution}?`]}]}generatePageRequest(e,t){return Wa(this.marketingItemContextFromContextString(d(t,vl.context)),d(t,vl.appId),d(t,vl.editorialItem)).attributingTo(e.build())}generateAdditionalPageRequirements(e,t){const n=super.generateAdditionalPageRequirements(e,t);if(Ma())return n;const r=d(t,vl.appId);if(s(r)){const e=this.marketingItemContextFromContextString(d(t,vl.context)),i=this.numberOfIconsForContextualUpsellOnPlatform(il,e);if(i>0){const e=ja(i);n[hd.contextualIconsRequirementKey]=$(e,this.createFetchOptions(null)).catch(()=>null)}const o=(new ph).withIds([r]).forType("apps").includingAdditionalPlatforms(Xa());n[hd.contextualAppRequirementKey]=$(o,this.createFetchOptions(null)).catch(()=>null)}return n}renderPage(e,t,n){const r=n[hd.contextualAppRequirementKey];let i=null;l(r)&&(i=Ge(r));const a=u(e,"results.data")[0],c=h(e,"results.content",{}),p=a||c,f=h(e,"results.offer",{}),m=Mi(p,f,i,!1,!1,"wordmark"),w=new xs("arcade",Is.arcadeAppAdamId,"colored",null,"arcadeSubscribePage",null,null,null,null,null,null,null,null,null,null,Is.arcadeProductFamilyId);w.titles.subscribed=P("ARCADE_ACTION_TITLE_EXPLORE","EXPLORE");const T=d(t,vl.appId),A=this.marketingItemContextFromContextString(d(t,vl.context));let I;"arcadeLaunchRepair"!==A&&(I=Va(A));const b=function(e,t,n){const r=Ke("Upsell",t,n);return s(n)&&"marketing-items"===n.type&&(r.mercuryMetricsData=Ia(n)),r}(0,p.id,p);b.offerType="subscribe",b.baseFields.upsellType=this.metricsUpsellType(A),b.baseFields.subscriptionSKU=Is.arcadeProductId;const S={pageInformation:b,locationTracker:{rootPosition:0,locationStack:[]}},k=$i({marketingItemData:a,editorialData:c,inAppData:f},Ni(p),S),C=new Sc(m,P("ARCADE_SUBSCRIBE_PAGE_NOT_NOW"),k,w);let v;C.askToBuyMessage=d(t,vl.subscribePageMessage),C.askToBuyId=d(t,vl.askToBuyId),Je(C,b);let E=!1;if(l(i)){C.primaryIcon=Lo(i,S,{useCase:3});const e=Da(i,S);e.excludeAttribution=!g(t[vl.includePostSubscribeAttribution]),v=bo(i,A,e),C.postSubscribeAction=v,E=!0}if(!g(t[vl.includePostSubscribeAttribution])){const e=C.pageMetrics.instructions;if(!o(e))for(const t of e)t.data.includingFields.push("crossfireReferral")}let O=[];const _=n[hd.contextualIconsRequirementKey];if(l(_)&&(O=We(_)),s(a)&&(O=W(a,"contents")),l(O)){const e=[];for(const t of O)t.id===T?E||(C.primaryIcon=Lo(t,S,{useCase:3}),v=bo(t,A,Da(t,S)),C.postSubscribeAction=v):e.push(Lo(t,S,{useCase:2}));C.icons=e}return s(v)&&(k.postSubscribeAction=v),"arcadeLaunchRepair"===A&&s(T)&&y("postSubscribeAppOpenAction")&&(y("subscribePageOpenAppAction")?C.openAppAction=new ac(T):C.postSubscribeAction=new ac(T)),l(C.icons)||s(C.primaryIcon)||(C.artwork=this.genericArtworkFromData(p)),"arcadeLaunchRepair"===A?C.singleIcon=C.primaryIcon:C.dismissingPostSubscribeAction=I,C.subscribedOfferButtonAction=new Xl("arcade"),C}genericArtworkFromData(e){if(!s(e))return null;const t="phone"===il,n="tv"===il,r=function(e,t){return h(function(e){return Oi(e)}(e),t)}(e,t?"breakoutTall":"breakoutFullScreen");if(!l(r))return null;let i=null;return i=t?"of":n&&!y("adjustedTVGenericUpsell")?"eq":"og",Do(r,{cropCode:i,allowingTransparency:!0,useCase:7})}metricsUpsellType(e){return s(e)?e:"arcadeGeneric"}numberOfIconsForContextualUpsellOnPlatform(e,t){switch(e){case"tv":return 18;case"phone":return"arcadeLaunchRepair"===t?y("launchRepairSingleIconUpsell")?0:15:11;default:return 15}}marketingItemContextFromContextString(e){return"launchRepair"===e?"arcadeLaunchRepair":e}}hd.contextualIconsRequirementKey="contextualIconsRequirement",hd.contextualAppRequirementKey="contextualPrimaryIconRequirement";const md={width:1680,height:3636,url:"https://is3-ssl.mzstatic.com/image/thumb/Features123/v4/9a/d4/48/9ad448b5-ddbb-f295-fae3-2a2e69bf5604/source/{w}x{h}{c}.{f}",bgColor:"000000",textColor1:"f7c981",textColor2:"f8a710",textColor3:"c6a067",textColor4:"c6850d"},gd={width:4320,height:3240,url:"https://is3-ssl.mzstatic.com/image/thumb/Features124/v4/57/71/7f/57717f8b-c486-4faf-7558-a4f88186855d/source/{w}x{h}{c}.{f}",bgColor:"000000",textColor1:"fdc97a",textColor2:"f73a03",textColor3:"caa161",textColor4:"c52e02"};class yd{}class wd{}const Td=["latest-release-app","arcade-apps","system-apps","app-bundles","ios-apps","imessage-apps","watch-apps","atv-apps"];ks={product:[{protocol:kl.internal,path:`/${Pl.product}/${Pl.lookup}`,query:[vl.ids]}],reviews:[{protocol:kl.internal,path:`/${Pl.reviews}/${Pl.shelf}/{adamId}/{sort}`}],topCharts:[{protocol:kl.internal,path:`/${Pl.topCharts}/{genre}/{pop}`}],grouping:[{protocol:kl.internal,path:`/${Pl.grouping}/${Pl.shelf}/{shelfToken}`}]};class Ad extends Ds{constructor(e,t,n){super(),this.card=e,this.shelves=t,this.shareAction=n,this.isIncomplete=!1,this.pageMetrics=new Yl}}class Id{constructor(){this.index=0,this.todayShelfRecoMetricsData={}}}const bd=["AppLockup","InlineImage","InlineVideo","AppMarker"];class Sd{constructor(e,t,n,r){this.name=e,this.url=t,this.artwork=n,this.roomUber=r}}class kd extends Ds{constructor(e,t){super(),this.apps=e,this.appsToAlwaysShow=t}}class Pd extends Error{}class Cd{constructor(){this._params=""}static get contentType(){return"application/x-www-form-urlencoded"}param(e,t){if(e&&t){const n=this._params.length>0?"&":"";this._params+=`${n}${encodeURIComponent(e)}=${encodeURIComponent(t)}`}return this}build(){return this._params}}class vd extends Ds{constructor(e,t,n,r){super(),this.id=e,this.title=t,this.selectedActionTitle=n,this.url=r}}class Ed extends cp{constructor(){super([])}}class Od extends Ds{}class _d extends Ds{}class Rd extends Ds{}class Dd extends Ds{}class Ld extends Ds{constructor(e){super(),this.showsBadge=!1,this.title=null,this.notes=e,this.isCollapsed=!0}}class Fd extends Ds{}const xd={11:"43",30:"44"},Nd="helpful";class Ud{}const Md=[function(e,t,n){if(t)return null;const r=P("BADGE_PREORDER_TERMS");return new ip("paragraph",{paragraphText:r},"standard",null,null,null,r)},mr],Bd=[br,wr,hr,mr],$d=[br,mr,fr,Tr,yr,gr,function(e,t,n){const r=ge(e,"supportedLocales"),o=r.length;if(o<=0)return null;const a={tag:d(i(r,"0.tag")).split("-")[0].toUpperCase(),name:d(i(r,"0.name"))},s={paragraphText:a.tag};let l;l=o>1?P("BADGE_LANGUAGE_CAPTION").replace("{number_other_languages}",_(o-1)):a.name;const c=P("BADGE_LANGUAGE_HEADING");return new ip("paragraph",s,"standard",c,l,null,null,l,"view")},function(e,t,n){const r=Jo(e);if(!s(r))return null;const i=O(r).trim().split(/\s+/);if(2!==i.length)return null;const o={paragraphText:i[0]},a=i[1],l=P("BADGE_SIZE_HEADING");return new ip("paragraph",o,"standard",l,a,null,null,a,"view")}],Vd=[br,wr,gr,hr,mr,fr,Tr,yr],qd="undefined"!=typeof ask&&void 0!==ask.clientOrdering?ask.clientOrdering:{orderedVisibleIAPs(e,t,n,r,i){const o=[];-1!==t.findIndex((function(e,t,n){return e===r}))&&o.push(r);for(const e of n)e!==r&&o.push(e);i(o,null)},visibilityForIAPs(e,t){t({},null)}},Gd=5,Hd=5,jd=[new ap("header"),new ap("topLockup"),new ap("shelf","informationRibbon"),new ap("shelf","mostRecentVersion"),new ap("shelf","videos"),new ap("screenshots"),new ap("shelf","description"),new ap("shelf","editorialQuote"),new ap("shelf","featuredIn"),new ap("shelf","reviews"),new ap("shelf","information"),new ap("shelf","links"),new ap("shelf","capabilities"),new ap("shelf","similarItems"),new ap("shelf","moreByDeveloper")],Wd=[new ap("header"),new ap("topLockup"),new ap("shelf","informationRibbon"),new ap("screenshots"),new ap("shelf","description"),new ap("shelf","editorialQuote"),new ap("shelf","videos"),new ap("shelf","mostRecentVersion"),new ap("shelf","featuredIn"),new ap("shelf","reviews"),new ap("shelf","information"),new ap("shelf","links"),new ap("shelf","capabilities"),new ap("shelf","similarItems"),new ap("shelf","moreByDeveloper")],zd=5,Yd=5,Kd=[new ap("header"),new ap("askToBuyRequest"),new ap("shelf","banner"),new ap("topLockup"),new ap("shelf","informationRibbon"),new ap("shelf","bundleChildren"),new ap("shelf","bundleParents"),new ap("shelf","mostRecentVersion"),new ap("shelf","subscriptions"),new ap("shelf","inAppPurchases"),new ap("shelf","videos"),new ap("screenshots"),new ap("shelf","description"),new ap("shelf","editorialQuote"),new ap("shelf","reviews"),new ap("shelf","information"),new ap("shelf","links"),new ap("shelf","capabilities"),new ap("shelf","featuredIn"),new ap("shelf","moreByDeveloper"),new ap("shelf","similarItems")],Qd=[new ap("header"),new ap("askToBuyRequest"),new ap("shelf","banner"),new ap("topLockup"),new ap("shelf","informationRibbon"),new ap("shelf","bundleChildren"),new ap("shelf","bundleParents"),new ap("screenshots"),new ap("shelf","description"),new ap("shelf","editorialQuote"),new ap("shelf","videos"),new ap("shelf","reviews"),new ap("shelf","mostRecentVersion"),new ap("shelf","subscriptions"),new ap("shelf","inAppPurchases"),new ap("shelf","information"),new ap("shelf","links"),new ap("shelf","capabilities"),new ap("shelf","featuredIn"),new ap("shelf","moreByDeveloper"),new ap("shelf","similarItems")],Jd=5,Xd=5,Zd=[new ap("header"),new ap("topLockup"),new ap("shelf","informationRibbon"),new ap("shelf","bundleChildren"),new ap("shelf","bundleParents"),new ap("shelf","mostRecentVersion"),new ap("shelf","subscriptions"),new ap("shelf","inAppPurchases"),new ap("shelf","videos"),new ap("screenshots"),new ap("shelf","description"),new ap("shelf","editorialQuote"),new ap("shelf","reviews"),new ap("shelf","information"),new ap("shelf","links"),new ap("shelf","capabilities"),new ap("shelf","featuredIn"),new ap("shelf","moreByDeveloper"),new ap("shelf","similarItems")],ef=[new ap("header"),new ap("topLockup"),new ap("shelf","informationRibbon"),new ap("shelf","bundleChildren"),new ap("shelf","bundleParents"),new ap("screenshots"),new ap("shelf","description"),new ap("shelf","editorialQuote"),new ap("shelf","videos"),new ap("shelf","reviews"),new ap("shelf","mostRecentVersion"),new ap("shelf","subscriptions"),new ap("shelf","inAppPurchases"),new ap("shelf","information"),new ap("shelf","links"),new ap("shelf","capabilities"),new ap("shelf","featuredIn"),new ap("shelf","moreByDeveloper"),new ap("shelf","similarItems")],tf=5,nf=5,rf=[new ap("header"),new ap("topLockup"),new ap("shelf","videos"),new ap("screenshots"),new ap("shelf","textCards"),new ap("shelf","reviews"),new ap("shelf","moreByDeveloper"),new ap("shelf","similarItems"),new ap("shelf","information"),new ap("shelf","links"),new ap("shelf","textLinksShelf")],of=[new ap("header"),new ap("topLockup"),new ap("screenshots"),new ap("shelf","textCards"),new ap("shelf","videos"),new ap("shelf","reviews"),new ap("shelf","moreByDeveloper"),new ap("shelf","similarItems"),new ap("shelf","information"),new ap("shelf","links"),new ap("shelf","textLinksShelf")],af=5,sf=5,lf=[new ap("header"),new ap("topLockup"),new ap("shelf","videos"),new ap("screenshots"),new ap("shelf","textCards"),new ap("shelf","reviews"),new ap("shelf","similarItems"),new ap("shelf","moreByDeveloper"),new ap("shelf","information"),new ap("shelf","links"),new ap("shelf","textLinksShelf")],cf=[new ap("header"),new ap("topLockup"),new ap("screenshots"),new ap("shelf","textCards"),new ap("shelf","videos"),new ap("shelf","reviews"),new ap("shelf","similarItems"),new ap("shelf","moreByDeveloper"),new ap("shelf","information"),new ap("shelf","links"),new ap("shelf","textLinksShelf")],uf=3,pf=3,df=[new ap("header"),new ap("askToBuyRequest"),new ap("shelf","banner"),new ap("topLockup"),new ap("shelf","mostRecentVersion"),new ap("screenshots"),new ap("shelf","description"),new ap("shelf","actionLinks")],ff=[new ap("header"),new ap("askToBuyRequest"),new ap("shelf","banner"),new ap("topLockup"),new ap("screenshots"),new ap("shelf","description"),new ap("shelf","mostRecentVersion"),new ap("shelf","actionLinks")];class hf extends Bu{constructor(){super("ProductBuilder")}defaultPlatforms(){return Xa()}pageType(){return"product"}defaultTab(e){return hf.representsArcadeApp(e)?"arcade":super.defaultTab(e)}defaultAction(e,t,n){if(e instanceof Jl)return e;const r=super.defaultAction(e,t,n);if(!(e instanceof lp))return r;const i=1===e.appPlatforms.length&&"tv"===e.appPlatforms[0];if(t[vl.action]!==mf||i){if(t[vl.action]!==gf||i)return r;{const t=e.shelfMapping.reviews;let n=null;return t&&t.seeAllAction&&(n=t.seeAllAction,n.animationBehavior="never"),r.animationBehavior="never",new ec([r,n])}}{const t=hf.representsBundle(e),n=er(e.adamId,t,e.icon);return r.animationBehavior="never",new ec([r,n])}}static allPageRoutes(){return[{protocol:kl.https,path:`/{countryCode}/${Pl.product}/{appName}/{id}`,query:[`${vl.action}?`,`${vl.offerName}?`,`${vl.isPPT}?`]},{protocol:kl.https,path:`/{countryCode}/${Pl.productBundle}/{appName}/{id}`,query:[`${vl.action}?`,`${vl.offerName}?`]},{protocol:kl.https,path:`/{countryCode}/${Pl.product}/{id}`,query:[`${vl.action}?`,`${vl.offerName}?`]},{protocol:kl.https,path:`/{countryCode}/${Pl.productBundle}/{id}`,query:[`${vl.action}?`,`${vl.offerName}?`]},{protocol:kl.https,path:`/${Pl.product}/{appName}/{id}`,query:[`${vl.action}?`,`${vl.offerName}?`]},{protocol:kl.https,path:`/${Pl.productBundle}/{appName}/{id}`,query:[`${vl.action}?`,`${vl.offerName}?`]},{protocol:kl.https,path:`/${Pl.product}/{id}`,query:[`${vl.action}?`,`${vl.offerName}?`]},{protocol:kl.https,path:`/${Pl.product}/{id}`,query:[`${vl.v0}?`]},{protocol:kl.https,path:`/${Pl.productBundle}/{id}`,query:[`${vl.action}?`,`${vl.offerName}?`]},{protocol:kl.https,query:[vl.bundleIdentifier]},{protocol:kl.https,query:[vl.action,vl.ids,`${vl.isPurchasesApp}?`]},{protocol:kl.https,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/catalog/{countryCode}/apps/{id}",query:[]},{protocol:kl.https,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/catalog/{countryCode}/app-bundles/{id}",query:[]},{protocol:kl.https,path:"{apiVersion}/catalog/{countryCode}/apps/{id}",query:[]},{protocol:kl.https,path:"{apiVersion}/catalog/{countryCode}/app-bundles/{id}",query:[]},{protocol:kl.https,hostName:`${Cl.product}`,path:`/${Pl.siri}/{id}`,query:[]},{protocol:kl.https,path:`/${Pl.store}/${Pl.viewSoftware}`,query:[vl.id,`${vl.v0}?`]}]}static generateProductPageOptions(e,t){const n={clientIdentifierOverride:t.query[vl.clientIdentifierOverride]},r=e[vl.offerName];if(r){const t="true"===e[Ol.isSubscription];n.spotlightSection=Pr(t),n.spotlightInAppProductIdentifier=r}const i=t.query[Hu];i&&(n.iAdClickFields=JSON.parse(i));const o=t.query[ju];o&&(n.iAdLineItem=o);const a=t.query[vp];return s(a)&&(n.externalDeepLinkUrl=a),n}get pageRoute(){return hf.allPageRoutes()}generatePageRequest(e,t){const n=t[vl.bundleIdentifier],r=t[vl.ids];let i=null;var a;if(n?(a=n,i=(new ph).forType("apps").withFilter("bundleId",a).includingAdditionalPlatforms(Xa()).includingRelationships(["developer","customers-also-bought-apps","developer-other-apps","reviews","app-bundles","merchandised-in-apps","top-in-apps","related-editorial-items","alternate-apps"]).includingAttributes(Ru).addingRelationshipLimit("reviews",Za())):i="lookup"===t[vl.action]&&r?function(e,t){const n=(new ph).forType("apps").addingQuery("ids",e).includingAdditionalPlatforms(Xa()).includingAttributes(Ru).includingRelationships(["developer","customers-also-bought-apps","developer-other-apps","reviews","app-bundles","merchandised-in-apps","top-in-apps","related-editorial-items","alternate-apps"]).addingRelationshipLimit("reviews",Za());return t&&n.addingQuery("availability","redownload"),n}(r,g(t,vl.isPurchasesApp)):Me(e),o(i))throw new Error(`Unable to map ${e.build()} to a media api url`);return i}renderPage(e,t,n){return As.c("renderPage",()=>{const n=Ke("Software","",e),r=hf.generateProductPageOptions(t,new Fl(n.pageUrl)),i=Ge(e),o=hf.alternativeAppForPlatform(i,Ie());return null===o||"mac"===il&&!y("alternateAppRedirect")?zr(e,r):o})}get shelfRoute(){return[{protocol:kl.internal,path:`/${Pl.product}/${Pl.shelf}/{token}`}]}generateShelfRequest(e,t){const n=t.token,r=JSON.parse(n);let i;if(r.isBundleShelf)i="app-bundles";else switch(r.contentType){case"smallStoryCard":case"todayBrick":i="editorial-items";break;case"inAppPurchaseLockup":i="in-apps";break;default:i="apps"}return(new ph).forType(i).withIds(r.ids).includingAdditionalPlatforms(Xa()).includingAttributes("in-apps"===i?[]:["editorialArtwork","editorialVideo","minimumOSVersion"])}renderShelf(e,t){const n=t.token,r=JSON.parse(n),i=hf.shelfFromDataContainer(e,r);if(i.mergeWhenFetched=!0,r.shouldInferSeeAllFromFetchesItems){const e=new Jl("page");e.title=P("ACTION_SEE_ALL");const t=new wu(i.contentType);t.items=function(e,t){if(!e)return null;const n=[];for(const t of e){const e=Ee(t);e.offerDisplayProperties&&(e.offerDisplayProperties=e.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,"infer")),n.push(e)}return n}(i.items);const n=new cp([t]);Je(n,r.destinationPageInformation),n.title=r.title,e.pageData=n,Na(e,null,{pageInformation:r.sourcePageInformation,locationTracker:r.sourceLocationTracker}),i.seeAllAction=e}return i}shelfRequiresAdditionalModification(e,t){return!0}performAdditionalShelfModifications(e,t){return new Promise(n=>{const r=t.token,i=JSON.parse(r),o=e.items;if("inAppPurchaseLockup"===i.contentType&&o){const t=[],r=[];for(const e of o){const n=e.productIdentifier;Pr(e.isSubscription).shelfId===i.inAppShelfId&&(t.push(n),e.isVisibleByDefault&&r.push(n))}(function(e,t,n,r){return new Promise((i,o)=>{const a=t.filter(e=>null!=e),s=n.filter(e=>null!=e);qd.orderedVisibleIAPs(e,a,s,r,(e,t)=>{t?o(t):i(e)})})})(i.appBundleId,t,r,i.spotlightInAppProductIdentifier).then(t=>{e.items=hf.filteredInAppLockupsUsingOrdering(o,t),n(e)})}else new Set(["smallStoryCard","todayBrick"]).has(e.contentType)&&0===e.items.length&&(e.isHidden=!0),n(e)})}static alternativeAppForPlatform(e,t){if(!le(e,t)){const n=W(e,"alternate-apps");if(l(n))for(const e of n){const n=ye(e,"url");if(le(e,t)&&l(n))return new Jl("unknown",n)}}return null}static representsBundle(e){return!!(e.pageMetrics&&e.pageMetrics.pageFields&&"pageType"in e.pageMetrics.pageFields)&&"SoftwareBundle"===e.pageMetrics.pageFields.pageType}static representsArcadeApp(e){return!!(e.pageMetrics&&e.pageMetrics.pageFields&&"pageType"in e.pageMetrics.pageFields)&&"Arcade"===e.pageMetrics.pageFields.softwareType}static filteredInAppLockupsUsingOrdering(e,t){const n={};for(const t of e)n[t.productIdentifier]=t;const r=[];for(const e of t){const t=n[e];if(t){const e=Ee(t);r.push(e)}}return r}static shelfFromDataContainer(e,t){return As.c("shelfFromLookupResponse",()=>{const n=new wu(t.contentType),r={pageInformation:t.sourcePageInformation,locationTracker:t.sourceLocationTracker,excludeAttribution:!0};let i;switch(t.contentType){case"todayBrick":const n=xt(e.data,r.pageInformation,r.locationTracker,Or);s(n)&&(i=[n]);break;case"smallStoryCard":const o={metricsLocationTracker:r.locationTracker,metricsPageInformation:r.pageInformation,filterOutMediaCardKinds:hf.filteredMediaCardKindsForSmallStoryCardOnPlatform(host.platform)},a={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!0,canDisplayArcadeOfferButton:!0};a.videoPlaybackControls=Tp,a.videoAutoplayPlaybackControls=Tp,i=Rt(e.data,t.contentType,o,null,a);break;default:const l={metricsOptions:r,offerStyle:t.offerStyle,artworkUseCase:Ro(t.contentType),canDisplayArcadeOfferButton:fa(t.contentType)};"inAppPurchaseLockup"===t.contentType&&(l.skipDefaultClickAction=!0);const c={lockupOptions:l};t.isBundleShelf&&(c.filter=0);const u=eo(e,c),p={[Xs]:"round",[Zs]:"pill"}[host.clientIdentifier];p&&u.sort((e,t)=>{const n=e.icon.style===p,r=t.icon.style===p;return n&&r?0:n&&!r?-1:1});const d=t.spotlightInAppProductIdentifier;d&&Er(d,u),i=u}return n.items=i,n})}static filteredMediaCardKindsForSmallStoryCardOnPlatform(e){const t=new Set(["appIcon"]);return"macOS"===e&&(t.add("brandedSingleApp"),t.add("list"),t.add("inAppPurchase"),t.add("river")),t}}const mf="write-review",gf="reviews",yf=Q(z("F0F0F8"),z("303031"));class wf{constructor(e,t,n,r,i,o){this.isBundleShelf=!1,this.ids=e,this.title=t,this.shouldInferSeeAllFromFetchesItems=n,this.contentType=r,this.offerStyle=i,this.spotlightInAppProductIdentifier=o}}const Tf=["brandedSingleApp","grid","artwork","video"];class Af{constructor(e,t){this.sequenceId=0,this.metricsPageInformation=e,this.locationTracker=t}addImpressionsToShelf(e,t){vo(e,{id:`${this.sequenceId}`,kind:null,softwareType:null,targetType:t,title:e.title,pageInformation:this.metricsPageInformation,locationTracker:this.locationTracker}),this.sequenceId++}getSequenceId(){return this.sequenceId}addImpressionsFieldsToSimilarItemsShelf(e,t,n){e&&(vo(e,{id:Af.similarItemsShelfId,kind:null,softwareType:null,targetType:t,title:e.title,pageInformation:this.metricsPageInformation,locationTracker:this.locationTracker,idType:n}),this.sequenceId++)}}Af.similarItemsShelfId="customers-also-bought-apps";const If=[xr,Nr,cr,_r,function(e,t,n,r){if(ie(e,"usesLocationBackgroundMode")){const e=r?"":P("INFO_LIST_LOCATION_TITLE"),t=P("INFO_LIST_LOCATION_DESCRIPTION"),n=new Rc(t);return new _c(e,[n])}return null},Lr,Rr,Ur,Dr],bf=[xr,cr,function(e,t,n,r){const i=ge(e,"versionHistory");if(0===i.length)return null;const o=i[0];let a=null;const s=d(o,"releaseDate");s&&(a=D("d MMM YYYY",new Date(s)));const l=d(o,"versionDisplay");if(0===i.length)return null;let c;if(l&&a)c=P("VERSION_STRING_WITH_RELEASE_DATE").replace("{version}",l).replace("{date}",a);else{if(!l)return null;c=l}const u=new Rc(c),p=r?"":P("VERSION_STRING"),f=new _c(p,[u]);return f&&!n?f:null},Nr,Dr],Sf=[_r,Lr,Rr],kf=[Ur],Pf=[function(e){const t=ne(e,"name");return Wr("text",t,ji(e),Hr(e).text,t)},function(e){const t=d(me(e,"editorialNotes"),"standard");if(t){let n=null,r=null,i="text";const o=me(e,"editorialBadgeInfo");if(o){const e=d(o,"editorialBadgeType");e&&"editorialPriority"===e&&(i="editorsChoice"),r=d(o,"nameForDisplay")||P("APP_STORE_EDITORS_NOTES")}else n=P("APP_STORE_EDITORS_NOTES"),r=P("APP_STORE_EDITORS_NOTES");return Wr(i,n,"",t,r)}return null},function(e){const t="app-bundles"===e.type,n=function(e,t,n,r){if(!t&&!n&&!r){const t=ge(e,"versionHistory");if(t.length>1&&Vr(t).length>0)return qr(t[0],"overview")}return null}(e,ie(e,"isFirstPartyHideableApp"),t,ho(uo(e)));if(n){const e=n.primarySubtitle,t=n.text,r=P("PRODUCT_SECTION_MOST_RECENT_VERSION");return Wr("text",r,e,t,r)}return null}];class Cf extends Ds{constructor(e,t,n,r,i){super(),this.name=e,this.genreId=t,this.artwork=n,this.ageBandId=r,this.children=i}}class vf extends Ds{constructor(e){super(),this.categories=e}}class Ef extends Ds{constructor(e,t,n,r){super(),this.shortName=e,this.longName=t,this.chart=n,this.shelves=r,this.nextPage=null,this.pageMetrics=new Yl}}class Of extends Cf{constructor(e,t,n){super(e.name,e.genreId,e.artwork,e.ageBandId,n),this.shortName=this.name,this.longName=this.name,this.url=t}}class _f extends Ds{constructor(e,t,n,r,i,o){super(),this.genreId=e,this.ageBandId=t,this.title=n,this.segments=r,this.categoriesButtonTitle=i,this.categories=o,this.initialSegmentIndex=0}}class Rf{constructor(e,t){e&&(this.appStoreClientRequestId=t,this.targetingData=e.dataBlob,this.iAdId=e.iAdId,this.iAdRoutingInfo=e.iAdRoutingInfo,this.canary=e.canary)}validAdRequest(){const e=this.targetingData&&this.targetingData.length>0,t=this.iAdRoutingInfo&&this.iAdRoutingInfo.length>0;return e&&t}}const Df={showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}},Lf=(e,t)=>{const n=e.isLandscape();return n===t.isLandscape()?0:n?-1:1},Ff={showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}};Ps={search(e,t,n){o(d(t,vl.path))?n.reject(new Error(`Unhandled search url: ${e}`)):net.fetch({url:e.build(),method:"GET"}).then(t=>{s(t.url)?bi(t.url).then(n.resolve,n.reject):n.reject(new Error(`Unhandled search url: ${e}`))})},topCharts(e,t,n){const r=t[vl.isPPT];e.removeParam(vl.isPPT),$(new ph(e.build())).then(t=>{const n=Xr(t,e);if(r&&l(n.segments)){const e=n.segments[0],t=e.nextPage,r=st(t);if(l(r))return $(new ph(r)).then(r=>{const i=lt(t);i.ids=[],i.remainingContent=[],i.maxPerPage=0;const o=ei(r,t,i),a=e.shelves.concat(o.shelves),s=new Ef(e.shortName,e.longName,e.chart,a);return s.pageMetrics=e.pageMetrics,s.nextPage=null,n.segments[0]=s,n})}return n}).then(t=>Mu.createFlowAction(t,"topCharts",e)).then(n.resolve,n.reject)},sortedReviews(e,t,n){const r=t.adamId,i=t.sort;$((new ph).forType("user-reviews").withIds([r]).includingAdditionalPlatforms(Xa()).addingQuery("sort",i),{}).then(e=>ar(sl,r,[],e,!0,i)).then(t=>Mu.createFlowAction(t,"reviews",e)).then(n.resolve,n.reject)},reviews(e,t,n){$(Me(e)).then(t=>{const n=zr(t),r=Mu.createFlowAction(n,"product",e);let i=null;const o=n.shelfMapping.reviews,a=1===n.appPlatforms.length&&"tv"===n.appPlatforms[0];return o&&o.seeAllAction&&!a&&(i=o.seeAllAction,i.animationBehavior="never"),i?(r.animationBehavior="never",new ec([r,i])):r}).then(n.resolve,n.reject)},productInAppPurchase(e,t,n){const r=t[Ol.url],i=Me(new Fl(r)),o={},a="true"===t[Ol.isSubscription];o.spotlightSection=Pr(a),o.spotlightInAppProductIdentifier=t[vl.offerName],$(i).then(t=>{const n=zr(t,o);return Mu.createFlowAction(n,"product",e)}).then(n.resolve,n.reject)},inAppPurchaseInstall(e,t,n){const r=t[vl.id],i=t[El.inAppPurchaseId];$((new ph).forType("in-apps").withIds([i]),{}).then(e=>{const t=function(e,t){const n={pageId:t||"",pageType:"IAPInstallPage",parentId:ga(e)};return new zu(n)}(r,i),n=Ge(e);let o;const a={metricsOptions:{pageInformation:t,locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:1};i&&n&&(o=Yi(n,a),o.theme="dark");const s=j(n,"app");let l;r&&s&&(l=zi(s,a));const c=new up;c.isComplete=!0,c.lockup=o,c.parentLockup=l;const u=uo(n);return c.preInstallOfferDescription=At(u),function(e,t){Je(e,t)}(c,t),c}).then(t=>Mu.createFlowAction(t,"inAppPurchaseInstall",e)).then(n.resolve,n.reject)},developer(e,t,n){$(function(e){const t=Ue(e);if(!c(t))throw new Error(`Unable to map ${e.build()} to a media api url`);return(new ph).forType("developers").withIds([t]).includingAdditionalPlatforms(Xa()).includingRelationships($e()).includingAttributes(Be()).attributingTo(e.build())}(e)).then(e=>Ln(e)).then(t=>Mu.createFlowAction(t,"page",e)).then(n.resolve,n.reject)},developerHref(e,t,n){var r;$((r=t[vl.href],new ph(r).includingAdditionalPlatforms(Xa()).includingAttributes(Be()).includingRelationships($e()))).then(e=>Ln(e)).then(t=>Mu.createFlowAction(t,"page",e)).then(n.resolve,n.reject)},article(e,t,n){const r=JSON.parse(d(e.query,vl.recoMetrics));$(function(e){const t=e.pathComponents();if(t.indexOf("story")<0&&t.indexOf("editorialItem")<0&&t.indexOf("viewEditorialItem")<0&&e.host!==Cl.spamBlockingExtensions)throw new Error(`Unable to map ${e.build()} to a media api url`);let n;if(n=e.host===Cl.spamBlockingExtensions?T("spamBlockingExtensionsEditorialItemID"):Ue(e),!c(n))throw new Error(`Unable to map ${e.build()} to a media api url`);if(!c(n))throw new Error(`Unable to map ${e} to a media api url`);return(new ph).forType("editorial-items").withIds([n]).includingAdditionalPlatforms(Xa()).includingAttributes(["screenshotsByType","videoPreviewsByType","requiredCapabilities","minimumOSVersion","editorialArtwork","editorialVideo"]).includingRelationships(["canvas"]).includingRelationshipsForUpsell(!0).attributingTo(e.build())}(e)).then(e=>(function(e){return Fe(e,Mn,Bn)})(e)).then(e=>{const n=new Id;return n.todayShelfRecoMetricsData=r,n.showingFallbackMediaInline=Boolean(t[vl.showingFallbackMedia]),n.additionalData=e.additionalData,function(e,t){return As.c("articlePageWithResponse",()=>{const n=Ge(e);t.metricsPageInformation=Ke("editorialItem",n.id,e),t.metricsLocationTracker={rootPosition:0,locationStack:[]},t.pageId=n.id;const r={pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},i=function(e){if(!s(e))return null;const t={useThreeLineOverlayForBranded:!1,enableFullScreenVideo:!0,enableListCardToMultiAppFallback:!1,canDisplayArcadeOfferButton:!0};switch(t.clientIdentifierOverride=e.clientIdentifierOverride,il){case"mac":t.prevailingCropCode="en",t.coercedGeneralCardSubType="Grid",t.heroDisplayContext="article";break;case"tv":t.prevailingCropCode="ek",t.coercedGeneralCardSubType="Grid",t.heroDisplayContext="article"}return t}(t),o=Nt(n,i,r);t.clientIdentifierOverride=i.clientIdentifierOverride,ka({pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker,targetType:"article",id:t.pageId,idType:"its_id"},o.title);const a=function(e,t,n){return As.c("renderArticle",()=>{const r=[],i=W(e,"canvas");for(const t of i){n.module=ne(t,"displayType"),n.subStyle=null;const i=Vn(t,e,n);i&&(i.title=n.titleForNextShelf,r.push(i),n.titleForNextShelf=null),n.index++,va(n.metricsLocationTracker)}if((n.showingFallbackMediaInline||"watch"===il)&&0===r.length){const e=function(e){if(e.media instanceof Lp){const t=e.media,n=new wu("smallLockup");return n.items=t.lockups,n}return null}(t);s(e)&&r.push(e)}return r})}(n,o,t),l=a[a.length-1],c="tv"===il?null:function(e){const t=qn(e);let n=null;const r=sa(e,"name"),i=sa(e,"short");if(r&&i&&(n=P("SHARE_SHEET_TITLE_SUBTITLE_FORMAT","{title}: {subtitle}").replace("{title}",r).replace("{subtitle}",i)),!n&&r&&(n=r),!n&&i&&(n=i),!n&&t){const r=ne(t,"name"),i=ne(e,"displaySubStyle");switch(i){case"GameOfDay":n=P("SHARE_SHEET_GAME_OF_DAY_TITLE_FORMAT").replace("{title}",r);break;case"AppOfDay":n=P("SHARE_SHEET_APP_OF_DAY_TITLE_FORMAT").replace("{title}",r);break;default:console.log(`No title for article with unknown substyle: ${i}`)}}const o=ne(e,"url");let a;switch(ne(e,"cardDisplayStyle")){case"Grid":case"List":case"River":a=it("resource://ShareCollectionThumbnail",40,40);break;default:a=null}const l=function(e,t,n,r,i){return As.c("shareSheetDataForArticle",()=>{let n=r;!n&&i&&(n=function(e){const t=ne(e,"displayStyle"),n=Ut(e,"article",t);return s(n)?n:zt(ee(e,Bt(t)))}(i));const o=P("SHARE_STORY_SUBTITLE"),a=new Gs(e,o,n);return new js(a,t,null)})}(n,o,0,a,e);return s(l)?new mc(l,[]):null}(n);if(c){const e=function(e,t){if(e&&t){const n=e.items.length;if(n>0&&-1!==bd.indexOf(t)){const t=e.items[n-1];switch(e.contentType){case"framedArtwork":{const e=t;return e&&e.isFullWidth}case"framedVideo":{const e=t;return e&&e.isFullWidth}default:return!0}}}return!1}(l,t.module),n=function(e,t,n){if(!s(e))return null;xa(e,{targetType:"button",id:t.pageId,actionType:"share",pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker});const r=new cu("share",P("SHARE_STORY"),!n,e),i=new wu("roundedButton");return i.items=[r],i}(c,t,e);n&&a.push(n)}const u=new Ad(o,a,c);return function(e,t,n){const r=qn(t);if(r){const i=dt(t);return void(e.footerLockup=function(e,t,n){return zi(e,{offerStyle:Gn(),metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},clientIdentifierOverride:t.clientIdentifierOverride,externalDeepLinkUrl:n,artworkUseCase:0,canDisplayArcadeOfferButton:fa("smallLockup")})}(r,n,i))}const i=ie(t,"isAcquisition"),o="iOS"===host.platform||"macOS"===host.platform;if(s(n.additionalData)&&i&&o&&y("arcadeFooterLockup")){const r=Ka(t);e.arcadeFooterLockup=function(e,t){return Zi(e,{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},"arcadeTodayCard","infer",null)}(r,n)}}(u,n,t),Je(u,t.metricsPageInformation,e=>{let t=o.title;if(o.media instanceof Dp&&o.overlay instanceof $p&&(t=o.overlay.lockup.title),!t)return;let n=d(e,"pageDetails","coercible");n=n||d(e,"pageId"),e.pageDetails=n?`${n}_${t}`:`unknown_${t}`}),u})}(e.originalData,n)}).then(t=>Mu.createFlowAction(t,"article",e)).then(n.resolve,n.reject)},resetAndRedirect(e,t,n){const r={url:e.toString(),signingStyle:"platform"};net.fetch(r).then(e=>{n.resolve(null)},n.reject)},msoRoom(e,t,n){const r=function(e){const t=e.availableAdamIds;return t?t.split(","):[]}(t);$(function(e){return Wn(Ue(e))}(e.removeParam("availableAdamIds"))).then(e=>zn(e,r)).then(t=>Mu.createFlowAction(t,"mso",e)).then(n.resolve,n.reject)},actionHandler(e,t,n){(function(e,t){const n=e.query.action;switch(n){case"account":const t=new Jl("finance");t.presentationContext="presentModalFormSheet",t.animationBehavior="always";const r=e.query.originalUrl;return r?t.pageUrl=r:e.query.continuation?t.pageUrl=Fl.fromComponents(null,n,null,{continuation:e.query.continuation}).toString():t.pageUrl=n,Promise.resolve(t);case"signup":const i=new Jl("finance");return i.presentationContext="presentModalFormSheet",i.animationBehavior="always",i.pageUrl=function(){let e=Is.createAccountUrl;return(o(e)||"string"!=typeof e)&&(e="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/signupWizard"),new Fl(e)}().build(),Promise.resolve(i);case"purchased":let s,l=[];if("mac"===il)s="account";else{s="updates";const e=new Jl("account");e.presentationContext="presentModalFormSheet",e.animationBehavior="never";const t=new Jl("purchases");t.animationBehavior="never",l=[e,t]}const c=new Xl(s);return c.actions=l,Promise.resolve(c);case"checkForPreorders":const u=e.query.originalUrl;if(u.length>0){const e={url:u,signingStyle:"platform"};return net.fetch(e),Promise.resolve(new Ac)}return Promise.reject(new Error("Original url is missing when creating action for checkForPreorders."));case"redeem":const p=new Jl("finance");p.presentationContext="presentModalFormSheet",p.animationBehavior="always";const d=new Fl(n);return e.query.code&&e.query.code.length>0&&d.param(vl.code,e.query.code),p.pageUrl=d.build(),Promise.resolve(p);case"gift":const f=new Jl("finance");return f.presentationContext="presentModalFormSheet",f.animationBehavior="always",f.pageUrl=n,Promise.resolve(f);case"donate":const h=new Jl("finance");return h.presentationContext="presentModalFormSheet",h.animationBehavior="always",h.pageUrl="charity",Promise.resolve(h);case"search":let m=e.query.term;if(m||(m=e.query.q),m&&m.length>0){if(m=m.replace(/\+/g," ").trim(),a(m))return Promise.reject(new Error("Empty search term."));const e=M(di(m,{})).toString(),t=new tp(m,e,"externalUrl"),n=new Jl("search");return n.pageData=t,Promise.resolve(n)}{const e=new Xl("search");return Promise.resolve(e)}}return Promise.reject(new Error(`FlowAction was not able to be created for this action URL: ${e}`))})(e).then(n.resolve,n.reject)},showUpdatesPageHandler(e,t,n){const r=new Xl("updates");n.resolve(r)},personalizationTransparency(e,t,n){g(t[vl.enabled])?$((new ph).forType("personalization-data")).then(e=>qe(e),()=>qe()).then(t=>Mu.createFlowAction(t,"account",e)).then(n.resolve,n.reject):n.resolve(Mu.createFlowAction(function(){const e=[],t=new Pu,n=new zs(P("PERSONALIZATION_DESCRIPTION_OPTED_OUT"));t.addContentItem(new Ou(n)),e.push(t);const r=new Pu;return r.addContentItem(new vu(P("ACCOUNT_SETTINGS"),Ve("finance","account",!1),"navigation")),e.push(r),new ku(P("RECOMMENDATIONS"),e)}(),"account",e))}},Cs={reviews(e,t,n){const r=n.pageToken,i=t.adamId,o=t.sort,a=u(r.remainingContent);$(new ph(r.nextHref).includingAdditionalPlatforms(Xa()).addingQuery("sort",o),{}).then(e=>ar(sl,i,a,e,!1,o)).then(n.resolve,n.reject)}},vs={developer(e,t,n){const r=t.token,i=JSON.parse(r);$(new ph(i.remainingData).includingAdditionalPlatforms(Xa()).includingAttributes(Be())).then(e=>(function(e,t){const n=Nn(e.data,t.contentType,t.lockupListOptions);return n.mergeWhenFetched=!0,n})(e,i)).then(n.resolve,n.reject)},today(e,t,n){const r=t.token,i=JSON.parse(r);o(i.todayModule)?n.reject(new Error("Not a today module")):$(new ph(i.todayModule.contents).includingAdditionalPlatforms(Xa()).includingAttributes(od).includingRelationshipsForUpsell(!0)).then(e=>(function(e,t){if(o(e.todayModule))return null;const n=e.todayModule;n.contents=He(t);const r=new ad;r.locationTracker=e.metricsLocationTracker,r.pageInformation=e.metricsPageInformation;const i=Ot(n,{contentOffsetWithinModule:e.contentOffsetWithinModule,hideTitle:!0,setTitleToDateForTodaySection:!1},r);return i.mergeWhenFetched=!0,i})(i,e)).then(n.resolve,n.reject)},personalizedReviews(e,t,n){const r=t.token,i=JSON.parse(r);$((new ph).forType("reviews").withIds([i.adamId])).then(e=>rr(sl,i,e)).catch(()=>rr(sl,i)).then(n.resolve,n.reject)},mso(e,t,n){const r=t.token,i=JSON.parse(r);$(new ph(i.remainingContent).includingAdditionalPlatforms(Xa()).includingAttributes(["editorialArtwork","editorialVideo","minimumOSVersion"])).then(e=>(function(e,t){const n=He(e),r=t;r.remainingContent=[];const i={lockupOptions:{metricsOptions:{pageInformation:t.metricsPageInformation,locationTracker:t.metricsLocationTracker},artworkUseCase:Ro(t.preferredShelfContentType)},contentUnavailable:function(e,t){return r.remainingContent=ut(r.remainingContent,t),r.remainingContent.push(n[t]),!1}},o=new wu(t.preferredShelfContentType);return o.shouldFilterApps=t.shouldFilter,o.items=to(n,i),o.mergeWhenFetched=!0,o.url=Yn(r),o})(e,i)).then(n.resolve,n.reject)}},Es={reviews:[{protocol:kl.https,path:`/{countryCode}/${Pl.product}/{appName}/{id}`,hash:"reviews"},{protocol:kl.https,path:`/${Pl.store}/${Pl.viewReviews}`,query:[vl.id]}],sortedReviews:[{protocol:kl.internal,path:`/${Pl.reviews}/{adamId}/{sort}`}],productInAppPurchase:[{protocol:kl.internal,path:`/${Pl.product}/${Pl.lookup}`,query:[Ol.url,vl.offerName,Ol.isSubscription]}],inAppPurchaseInstall:[{protocol:kl.internal,path:`/${Pl.product}/${Pl.install}`,query:[`${vl.id}`,`${El.inAppPurchaseId}?`]}],topCharts:[{protocol:kl.https,path:`/${Pl.store}/${Pl.topCharts}`,query:[vl.genreId,vl.popId]},{protocol:kl.https,path:`/{apiVersion}/catalog/{countryCode}/${Pl.mediaCharts}`,query:[`${vl.genre}?`,`${vl.isPPT}?`]}],developer:[{protocol:kl.https,path:`/${Pl.developer}/{id}`},{protocol:kl.https,path:`/${Pl.developer}/{developerName}/{id}`},{protocol:kl.https,path:`/{countryCode}/${Pl.developer}/{developerName}/{id}`},{protocol:kl.https,path:`/{countryCode}/${Pl.artist}/{developerName}/{id}`},{protocol:kl.https,path:`/${Pl.store}/${Pl.viewArtist}`,query:[vl.id,`${vl.v0}?`]}],developerHref:[{protocol:kl.internal,path:`/${Pl.developer}/${Pl.href}`,query:[vl.href]}],search:[{hostName:Cl.searchItunes,path:"WebObjects/MZContentLink.woa/wa/link",query:[vl.path]}],article:[{protocol:kl.https,path:`/{countryCode}/${Pl.editorialItem}/{id}`,query:[`${vl.showingFallbackMedia}?`]},{protocol:kl.https,path:`/{countryCode}/${Pl.story}/{id}`,query:[`${vl.showingFallbackMedia}?`]},{protocol:kl.https,path:`/${Pl.story}/{id}`,query:[`${vl.showingFallbackMedia}?`]},{protocol:kl.https,path:`/${Pl.store}/${Pl.viewEditorialItem}`,query:[vl.id,`${vl.showingFallbackMedia}?`]},{protocol:kl.https,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/editorial-items/{id}",query:[vl.id,`${vl.showingFallbackMedia}?`]},{protocol:kl.https,path:"{apiVersion}/editorial/{countryCode}/editorial-items/{id}",query:[vl.id,`${vl.showingFallbackMedia}?`]},{protocol:kl.https,hostName:`${Cl.spamBlockingExtensions}`}],msoRoom:[{protocol:kl.https,path:`/{countryCode}/${Pl.mso}/{appName}/{id}`,query:["availableAdamIds?"]},{protocol:kl.https,path:`/${Pl.mso}/{providerName}/{id}`,query:["availableAdamIds?"]},{protocol:kl.https,path:`/{countryCode}/${Pl.mso}/{id}`,query:["availableAdamIds?"]},{protocol:kl.https,path:`/${Pl.mso}/{id}`,query:["availableAdamIds?"]},{protocol:kl.https,path:`/${Pl.mso}`,query:[vl.id,"availableAdamIds?"]},{protocol:kl.https,path:`{countryCode}/${Pl.mso}`,query:[vl.id,"availableAdamIds?"]}],resetAndRedirect:[{protocol:kl.https,path:`/${Pl.store}/${Pl.resetAndRedirect}`}],action:[{query:[vl.action]}],personalizationTransparency:[{protocol:kl.internal,path:`/${Pl.account}/${Pl.personalizationTransparency}`,query:[vl.enabled]}]},Os={grouping:[{protocol:kl.internal,path:`/${Pl.grouping}/${Pl.shelf}/{token}`}],today:[{protocol:kl.internal,path:`/${Pl.today}/${Pl.shelf}/{token}`}],topCharts:[{protocol:kl.internal,path:`/${Pl.topCharts}/{genre}/${Pl.shelf}/{pop}`}],developer:[{protocol:kl.internal,path:`/${Pl.developer}/${Pl.shelf}/{token}`}],personalizedReviews:[{protocol:kl.internal,path:`/${Pl.personalizedReviews}/${Pl.shelf}/{token}`}],mso:[{protocol:kl.internal,path:`/${Pl.mso}/${Pl.shelf}/{token}`}]};class xf extends Mu{constructor(e,t,n=[],r=null,i=[],o=null,a=[],s=null){super(e),this._pageType=t,this._pageRoute=n,this._pageHandler=r,this._shelfRoute=i,this._shelfHandler=o,this._paginationRoute=a,this._paginationHandler=s}pageType(){return this._pageType}handlePage(e,t,n,r,i){this._pageHandler||i(new Error(`${this.builderClass} does not implement handlePage`)),this._pageHandler(e,t,{resolve:r,reject:i})}handleShelf(e,t,n,r,i){this._shelfHandler||i(new Error(`${this.builderClass} does not implement handleShelf`)),this._shelfHandler(e,t,{resolve:r,reject:i})}handlePagination(e,t,n,r,i,o){this._paginationHandler||o(new Error(`${this.builderClass} does not implement handlePagination`)),this._paginationHandler(e,t,{resolve:i,reject:o,pageToken:r})}get pageRoute(){return this._pageRoute}get shelfRoute(){return this._shelfRoute}get paginationRoute(){return this._paginationRoute}}const Nf=new Set,Uf=new Su,Mf=new Su,Bf=new Su;Ti(new class extends Cp{constructor(){super("StoreFrontRoomBuilder")}get pageRoute(){return[{protocol:kl.https,path:`${Pl.store}/${Pl.storeFront}`}]}action(){return new Xl("discover")}}),Ti(new class extends Bu{constructor(){super("EulaBuilder")}defaultPlatforms(){return Xa()}generatePageRequest(e,t){const n=e.query.resourceId,r=e.query.resourceType;if(o(n)||o(r))throw new Error(`Unable to map ${e.build()} to a media api url`);const i=(new ph).forType("eula").withIds([n]);return i.targetResourceType=r,i}get pageRoute(){return[{protocol:kl.internal,path:`${Pl.eula}`}]}pageType(){return"page"}renderPage(e,t,n){return As.c("renderPage",()=>{const t=d(e,"results.eula.text").split(/\n{1,2}/),n=[];for(const e of t){const t=new zs(e);t.wantsCollapsedNewlines=!1,t.suppressVerticalMargins=!0,n.push(t)}const r=new wu("paragraph");r.isHorizontal=!1,r.items=n;const i=new cp([r]);return i.title=P("LICENSE_AGREEMENT"),i})}}),Ti(new hf),Ti(new class extends Mu{constructor(){super("PrivacyPolicyBuilder")}pageType(){return"unknown"}handlePage(e,t,n,r,i){const a=e.query.resourceId;o(a)?i(Error(`Unable to map ${e.build()} to a media api url`)):$((new ph).forType("apps").withIds([a]).addingQuery("fields","privacyPolicyText"),{}).then(e=>As.c("handlePage",()=>{const t=ye(Ge(e),"privacyPolicyText"),n=new zs(t);return n.wantsCollapsedNewlines=!1,new hc(P("PRIVACY_POLICY"),n)})).then(r,i)}get pageRoute(){return[{protocol:kl.internal,path:`${Pl.privacyPolicy}`}]}}),Ti(new class extends Mu{constructor(){super("TVEulaBuilder")}pageType(){return"unknown"}handlePage(e,t,n,r,i){const a=e.query.resourceId,s=e.query.resourceType;if(o(a)||o(s))return void i(Error(`Unable to map ${e.build()} to a media api url`));const l=(new ph).forType("eula").withIds([a]);l.targetResourceType=s,$(l,{}).then(e=>As.c("handlePage",()=>{const t=d(e,"results.eula.text"),n=new zs(t);return n.wantsCollapsedNewlines=!1,new hc(P("LICENSE_AGREEMENT"),n)})).then(r,i)}get pageRoute(){return[{protocol:kl.internal,path:`${Pl.tvEula}`}]}}),Ti(new kp),Ti(new class extends Sp{constructor(){super("RecommendationRoomBuilder")}generatePageRequest(e,t){const n=Ue(e),r=t[vl.grouping];if(!this.isValidId(n))throw new Error(`Unable to map ${e.build()} to a media api url. Missing id.`);if(!this.isValidId(r))throw new Error(`Unable to map ${e.build()} to a media api url. Missing grouping.`);return(new ph).forType("editorial-elements").withIds([n]).addingQuery("grouping",r)}renderPage(e,t){return As.c("renderPage",()=>{const n=Ge(e),r=H(n,"contents"),i=t[vl.grouping],o=Ke("Room",`${n.id}-${i}`,e),a=new bp;a.remainingContent=r.data,a.url=this.paginationUrl,a.shouldFilter=!ie(n,"doNotFilter"),a.metricsPageInformation=o,a.metricsLocationTracker={rootPosition:0,locationStack:[]},a.title=ne(n,"name");const s=this.pageWithContent(r,a);return s.title=a.title,Je(s,o),s})}get pageRoute(){return[{protocol:kl.https,path:`/{countryCode}/${Pl.appsForYou}/{title}/{id}`,query:[vl.grouping]},{protocol:kl.https,path:`/{countryCode}/${Pl.appsForYou}/{id}`,query:[vl.grouping]},{protocol:kl.https,path:`/${Pl.appsForYou}/{title}/{id}`,query:[vl.grouping]},{protocol:kl.https,path:`/${Pl.appsForYou}/{id}`,query:[vl.grouping]}]}isValidId(e){return!(o(e)||isNaN(e))}}),Ti(new class extends Pp{constructor(){super("DocTypeRoomBuilder")}generatePageRequest(e,t){const n=e.query.uti;return this.requestWithFilter("uti",n)}get pageRoute(){return[{protocol:kl.https,path:`/${Pl.store}/${Pl.docTypeLookup}`}]}}),Ti(new class extends Cp{constructor(){super("AppDownloadFileHandlerRoomBuilder")}get pageRoute(){return[{protocol:kl.file,pathExtension:"appdownload"}]}action(){return new Xl("account")}}),Ti(new class extends Pp{constructor(){super("GenericFileHandlerRoomBuilder")}generatePageRequest(e,t){const n=e.pathExtension();return null==n?null:this.requestWithFilter("extension",n)}get pageRoute(){return[{protocol:kl.file}]}}),Ti(new class extends Pp{constructor(){super("SearchExtensionRoomBuilder")}generatePageRequest(e,t){const n=t[vl.type];return this.requestWithFilter("appex",n)}get pageRoute(){return[{hostName:`${Cl.searchExtensions}`,query:[vl.type]}]}}),Ti(new class extends Sp{constructor(){super("DeveloperRoomBuilder")}get pageRoute(){return[{protocol:kl.internal,path:`/${Pl.developer}/${Pl.room}/{token}`}]}get paginationRoute(){return[{protocol:kl.internal,path:`${this.paginationPath}`,query:[`${vl.href}`]}]}generatePageRequest(e,t){const n=t.token,r=JSON.parse(n);if(o(r))throw new Error(`Unable to map ${e.build()} to a media api url`);return new ph(r.href)}renderPage(e,t,n){return As.c("renderPage",()=>{const n=t.token,r=JSON.parse(n),i=Ke("Room",`${r.developerId}_${r.relationshipId}`,e),o=new bp;o.title=r.title,o.metricsPageInformation=i,o.metricsLocationTracker={rootPosition:0,locationStack:[]};const a=this.pageWithContent(e,o);return a.title=o.title,this.configurePaginationForPage(a,o,e.next),Je(a,i),a})}generatePaginationRequest(e,t,n){const r=t[vl.href];return new ph(r)}renderPaginatedPage(e,t){const n=t,r=this.pageWithContent(e,n);return this.configurePaginationForPage(r,n,e.next),r}configurePaginationForPage(e,t,n){l(n)?(t.url=`${this.paginationUrl}?${vl.href}=${encodeURIComponent(n)}`,e.nextPage=t):e.nextPage=null}}),Ti(new class extends Pp{constructor(){super("SchemeTypeRoomBuilder")}generatePageRequest(e,t){return this.requestWithFilter("scheme",e.protocol)}get pageRoute(){const e={exclusions:[]};for(const t of Object.keys(kl)){const n=kl[t];if("string"==typeof n){const t={protocol:n};e.exclusions.push(t)}}return[e]}}),Ti(new dd),Ti(new fd),Ti(new class extends Bu{constructor(){super("GroupingPageBuilder")}defaultPlatforms(){return Xa()}defaultAttributes(){return["editorialArtwork","isAppleWatchSupported","requiredCapabilities","marketingArtwork","marketingVideo"]}prepareRequest(e,t,n){super.prepareRequest(e,t,n),"watch"===il&&e.addingRelationshipLimit("contents",3)}pageType(){return"page"}get pageRoute(){return[{protocol:kl.https,path:`/${Pl.store}/${Pl.grouping}`,query:[vl.id,`${vl.context}?`]},{hostName:Cl.storePreview,path:`/WebObjects/{storePreviewInstance}/wa/${Pl.grouping}`,query:[vl.id,`${vl.useReleaseId}?`]},{protocol:kl.https,path:`/{countryCode}/${Pl.genre}/{genreName}/{id}`},{protocol:kl.https,path:`/${Pl.store}/${Pl.viewGenre}`,query:[vl.id]},{hostName:Cl.storePreview,path:`/WebObjects/{storePreviewInstance}/wa/${Pl.viewGenre}`,query:[vl.id,`${vl.useReleaseId}?`]},{protocol:kl.https,path:"WebObjects/MZStorePlatform.woa/ra/{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}"},{protocol:kl.https,path:"{apiVersion}/{realm}/editorial/{countryCode}/groupings/{id}"},{protocol:kl.https,path:"{apiVersion}/editorial/{countryCode}/groupings/{id}"},{protocol:kl.https,hostName:`${Cl.safariExtensions}`}]}get shelfRoute(){return[{protocol:kl.internal,path:`/${Pl.grouping}/${Pl.shelf}/{token}`}]}generatePageRequest(e,t){let n,r,i=e.query.id;if(e.host===Cl.safariExtensions&&l(Is.safariExtensionsGroupingURL)){const e=Fl.from(Is.safariExtensionsGroupingURL);s(e)&&(i=Ue(e))}const o=e.pathComponents();if(-1!==o.indexOf("viewGenre")?n=i:-1!==o.indexOf("genre")?n=Ue(e):r=i,!c(r)&&!c(n))throw new Error(`Unable to map ${e.build()} to a media api url`);let a=(new ph).forType("groupings").includingAttributes(["editorialArtwork","editorialVideo","isAppleWatchSupported","requiredCapabilities"]).includingRelationshipsForUpsell(!0);const u=e.query[vl.context]||es();s(u)&&a.addingQuery("contexts",u),c(r)?a=a.withIds([r]):c(n)&&(a=a.addingQuery("genre",n));const p=e.query[vl.useReleaseId];return e.host===Cl.storePreview&&l(p)&&(a.isStorePreviewRequest=!0,a=a.addingQuery("release",p)),a.attributingTo(e.build())}renderPage(e,t,n,r){return As.c("renderGroupingPage",()=>{const t=Ge(e);if(!t)return null;if(!G(t,"tabs"))return null;const n={shelves:[],metricsPageInformation:Ke("Genre",t.id,e),metricsLocationTracker:{rootPosition:0,locationStack:[]},groupingData:H(t,"tabs"),pageGenreAdamId:ne(t,"id"),pageGenreId:oe(t,"genre")||function(e){return o(e)?null:f(Fl.from(e).query,"genre")}(ne(t,"chartUrl")),hasAuthenticatedUser:s(Vl.dsid)};if(tn(Ge(n.groupingData),n),"watch"===il){n.shelves.length>0&&"todayCard"===n.shelves[0].contentType&&(n.shelves[0].title=void 0);const e=this.shelfForHeaderButtons();n.shelves.unshift(e)}if("tv"!==il){const e=ln();e&&n.shelves.push(e)}if("watch"!==il&&"tv"!==il){const e=Is.termsAndConditionsURL;if(!o(e)){const t=gn(e);n.shelves.push(t)}}const r=this.groupingPageTitleForData(t,n.pageGenreId),i=new cp(n.shelves);switch(il){case"tv":case"watch":i.title=r;break;default:i.title=r,39===n.pageGenreId||36===n.pageGenreId&&"mac"===il?i.presentationOptions=["prefersRevealNavigationBarOnMouseOver"]:i.presentationOptions=["prefersLargeTitleWhenRoot"]}return Je(i,n.metricsPageInformation),i})}groupingPageTitleForData(e,t){let n=null;switch(t){case 36:n=host.clientIdentifier===Js&&"watch"!==il?"mac"===il?this.macDiscoverPageTitleForData(e):P("GROUPING_APPS"):P("GROUPING_APP_STORE","App Store");break;case 39:n=P("GROUPING_DISCOVER");break;default:n=ao(e)}return n}macDiscoverPageTitleForData(e){const t=H(e,"tabs");if(s(t)&&s(t.data))for(const e of t.data){const t=ne(e,"name"),n=oe(e,"editorialElementKind"),r=ne(e,"token");if(l(t)&&s(n)&&l(r)&&"macOS"===r&&414===n)return t}return P("GROUPING_DISCOVER")}shelfForHeaderButtons(){const e=new wu("action"),t=[],n=new Jl("search");return n.title=P("SEARCH","Search"),n.artwork=it("resource://TabSearch.png"),t.push(n),e.items=t,e}generateShelfRequest(e,t){const n=t.token,r=JSON.parse(n),i=l(r.remainingItems),o=l(r.recommendationsHref);if(i){let e=r.remainingItems;l(r.relationshipDataToFetch)&&(e=r.remainingItems.map(e=>j(e,r.relationshipDataToFetch)));let t=new ph(e).includingAdditionalPlatforms(Xa()).includingRelationshipsForUpsell(!0),n=["editorialArtwork","editorialVideo","minimumOSVersion"];return"apps"===t.resourceType&&(n=["editorialArtwork","minimumOSVersion","screenshotsByType","videoPreviewsByType"]),t=t.includingAttributes(n),t}if(o){let e=new ph(r.recommendationsHref).includingAdditionalPlatforms(Xa()).includingRelationshipsForUpsell(!0),t=["editorialArtwork","editorialVideo","minimumOSVersion"];return"apps"===e.resourceType&&(t=["editorialArtwork","minimumOSVersion","screenshotsByType","videoPreviewsByType"]),e=e.includingAttributes(t),e}return null}renderShelf(e,t){const n=t.token,r=JSON.parse(n),i=l(r.remainingItems),o=l(r.recommendationsHref);if(i){let t=e;if(l(r.relationshipDataToFetch)){const n={};for(const t of e.data)n[t.id]=t;t={data:[]};for(const e of r.remainingItems){const i=j(e,r.relationshipDataToFetch);l(i)&&(e.relationships[r.relationshipDataToFetch].data=[n[i.id]]),t.data.push(e)}}return hn(t,r)}if(o){const t=Ge(e);return a(r.title)&&(r.title=ne(t,"name")),hn(H(t,"contents"),r)}return null}handleShelfError(e,t,n,r){const i=r.token,o=JSON.parse(i);if(o&&!o.hasExistingContent){const e=new wu(o.shelfStyle);e.isHidden=!0,t(e)}else super.handleShelfError(e,t,n,r)}}),Ti(new class extends Mu{constructor(){super("TodayCardPreviewBuilder")}pageType(){return"today"}handlePage(e,t,n,r,i){As.c(`${this.builderClass}.pageHandler`,()=>{const n=e.build();if(g(t[vl.fetchData])){const o=this.generatePageRequest(e,t);if(!o)return void i(new Error(`Could not construct media API request for: ${e}`));o.attributingTo(n),$(o,{}).then(e=>this.renderPage(e,t)).then(t=>Mu.createFlowAction(t,this.pageType(),e)).then(r,i)}else{const n=this.renderPage({data:[]},t),i=Mu.createFlowAction(n,this.pageType(),e);r(i)}})}get pageRoute(){return[{protocol:kl.https,path:`/${Pl.todayCardPreview}`,query:[vl.ids,`${vl.fetchData}?`,`${vl.isTodaySection}?`]}]}generatePageRequest(e,t){const n=d(e.query[vl.ids]);if(!l(n))return null;const r=n.split(",");return(new ph).forType("editorial-items").withIds(r).includingAdditionalPlatforms(Xa()).includingAttributes(od).includingRelationshipsForUpsell(!0)}renderPage(e,t){const n=P("PAGE_TITLE_TODAY"),r={title:n,label:"TodayForApps",resourceTypes:[],meta:{},contents:He(e)},o=new ad;let a=!1;s(i(t,vl.isTodaySection))&&(a=!p(t,vl.isTodaySection));const l=Ot(r,{hideTitle:!1,contentOffsetWithinModule:0,setTitleToDateForTodaySection:!0},o,a);return new Kp([l],null,n,n)}}),Ti(new mp),Ti(new class extends Mu{constructor(){super("SearchLandingPageBuilder")}get pageRoute(){return[{protocol:kl.internal,path:`${Pl.searchLandingPage}`}]}pageType(){return"page"}handlePage(e,t,n,r,i){As.c(`${this.builderClass}.handlePage`,()=>{this.fetchPage().then(t=>{r(Bu.createFlowAction(t,this.pageType(),e))}).catch(i)})}fetchPage(){return this.fetchSearchLandingPage().catch(()=>this.fetchTrendingSearchesFallbackPage())}fetchTrendingSearchesFallbackPage(){const e={url:Is.trendingSearchesURL};return net.fetch(e).then(t=>{if(!t.ok)throw Error(`Bad Status code ${t.status} for ${e.url}`);return JSON.parse(t.body)}).then(e=>new pp(this.trendingSearchesShelvesForResponse(e)))}fetchSearchLandingPage(){const e=(new ph).forType("landing").includingAdditionalPlatforms(Xa());return e.targetResourceType="groupings",$(e).then(e=>this.landingPageFromResponse(e))}landingPageFromResponse(e){const t=u(e,"results.contents")[0];if(a(t))return null;const n=H(t,"tabs"),r=ne(t,"id");if(a(n))return null;const i={shelves:[],metricsPageInformation:Ke("Genre",t.id,t),metricsLocationTracker:{rootPosition:0,locationStack:[]},groupingData:H(t,"tabs"),pageGenreAdamId:r,pageGenreId:oe(t,"genre"),hasAuthenticatedUser:s(Vl.dsid),isSearchGrouping:!0};if(tn(Ge(n),i),l(i.shelves))for(const e of i.shelves)e.isHorizontal=!1;const o=new pp(i.shelves);return Je(o,i.metricsPageInformation),o}trendingSearchesShelvesForResponse(e){return As.c("trendingSearchesShelfForResponse",()=>{const t={rootPosition:0,locationStack:[]},n=u(e,"trendingSearches").map(e=>{const n=d(e,"label"),r=new tp(n,d(e,"url"),"trending");return Ua(r,n,t),va(t),new Ic(r)});let r=0;switch(il){case"pad":r=10;break;case"phone":r=7}const i=new wu("action");return i.title=n.length>0?d(e,"header.label"):null,i.isHorizontal=!1,i.items=n.slice(0,r),[i]})}}),Ti(new class extends Bu{constructor(){super("SearchTrendingContentPageBuilder")}pageType(){return"page"}get pageRoute(){return[{protocol:kl.internal,path:`${Pl.searchTrendingApps}`}]}defaultPlatforms(){return Xa()}defaultAttributes(){return["isAppleWatchSupported","requiredCapabilities","screenshotsByType","videoPreviewsByType","minimumOSVersion"]}generatePageRequest(e,t){const n=this.fetchLimitForTrendingContentForATV();let r=(new ph).forType("trending-contents").addingQuery("bubble[contents]","apps").withLimit(n);return host.clientIdentifier===el&&(r=r.addingQuery("contexts","arcade")),r.attributingTo(e.build())}renderPage(e,t,n){return As.c("renderPage",()=>this.trendingContentsPageFromCollectionResultsContainer(e))}trendingContentsPageFromCollectionResultsContainer(e){return As.c("trendingContentsPageFromCollectionResultsContainer",()=>{const t=Ke("Search",null,e),n={pageInformation:t,locationTracker:{rootPosition:0,locationStack:[]},recoMetricsData:ze(e)},r=He(e.results.contents),i=this.mixedMediaShelfFromLockupDataCollection(r,n),o=new cp([i]);return Je(o,t),o})}handlePageError(e,t,n,r,i){t(Bu.createFlowAction(new cp([]),this.pageType(),r))}mixedMediaShelfFromLockupDataCollection(e,t){return As.c("lockupShelfFromLockupDataCollection",()=>{const n=new wu("mixedMediaLockup");n.title=P("TRENDING_SHELF_TITLE");const r={showPlaybackControls:!1,canPlayFullScreen:!1,playbackControls:{}},i={metricsOptions:t,artworkUseCase:1,canDisplayArcadeOfferButton:fa("mixedMediaLockup")},a=[];for(const n of e){if(o(n.attributes))continue;const e=Ji(n,i,r);e&&(a.push(e),va(t.locationTracker))}const s=this.multipleOfItemsRequiredInMixedMediaShelfForATV();return n.items=at(a,s),n})}fetchLimitForTrendingContentForATV(){return 9}multipleOfItemsRequiredInMixedMediaShelfForATV(){return 3}}),Ti(new class extends Pp{constructor(){super("AccessoryProtocolRoomBuilder")}generatePageRequest(e,t){const n=[];for(const t of Object.keys(e.query))t.startsWith("id")&&n.push(e.query[t]);return this.requestWithFilter("deviceProtocol",n.join(","))}get pageRoute(){return[{query:[`${vl.action}=accessoryLookup`]}]}}),Ti(new class extends Mu{constructor(){super("TabSelectionBuilder")}pageType(){return"unknown"}handlePage(e,t,n,r,i){var o;const a=e.pathComponents(),s=a.length-1;let l,c;l=s>=0?a[s]:e.query.action,null!=l&&this.currentDeviceSupportsUrlAction(l)&&(c=new Xl(l),c.popToRoot=null!=(o="true"===e.query.popToRoot)&&o),void 0===c&&(c=new Xl("phone"===il||"pad"===il?"today":"discover")),r(c)}get pageRoute(){const e=["today","games","apps","discover","create","work","play","develop","categories","arcade"],t=[];for(const n of e){const e=`${vl.action}=${n}`,r=`${n}`;t.push({query:[e]}),t.push({path:r}),t.push({path:`{countryCode}/${r}`})}return t}currentDeviceSupportsUrlAction(e){return!("mac"!==il||!["discover","arcade","create","work","play","develop","categories","search"].includes(e))||!("phone"!==il&&"pad"!==il||!["today","apps","games","arcade","search"].includes(e))||!("tv"!==il||!["discover","apps","games","arcade","search"].includes(e))}}),Ti(new class extends Mu{constructor(){super("PassbookBuilder")}pageType(){return"unknown"}handlePage(e,t,n,r,i){bi(this.assemblePassbookRoomURL(e).build()).then(r,i)}get pageRoute(){return[{query:[`${vl.action}=passbook`]}]}assemblePassbookRoomURL(e){let t=Is.passbookMainURL;return null!=t&&"string"==typeof t||(t="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewFeature?id=717384713&mt=8"),new Fl(t)}}),Ti(new class extends Mu{constructor(){super("LibraryLink")}pageType(){return"unknown"}handlePage(e,t,n,r,i){bi(`https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewGenre?id=${e.query.g}&mt=8`).then(r,i)}get pageRoute(){return[{query:[`${vl.action}=library-link`]}]}}),Ti(new class extends Mu{constructor(){super("LongUrlBuilder")}pageType(){return"unknown"}handlePage(e,t,n,r,i){const o=e.query.originalUrl;l(o)?net.fetch({url:o,method:"GET",signingStyle:"platform"}).then(e=>{let t;const n=e.headers["Content-Type"];if(e.ok&&e.redirected&&s(e.url))t=e.url;else{if(e.ok&&o!==e.url)return console.log(`[LongUrlBuilder] Url redirect was already processed. Original url: ${o}. Redirected url: ${e.url}`),void r(new Ac);if(e.ok&&l(n)&&-1!==n.toLowerCase().indexOf("text/xml")){const n=plist.parse(e.body),r=d(n,"action.kind"),i=d(n,"action.url");"Goto"===r&&i&&(t=i)}}l(t)?bi(t).then(r,i):i(new Error(`Unable to map long url for: ${o}`))},e=>{i(new Error(`Unable to fetch long url: ${o}`))}):i(new Error("Original url is missing when creating action for checkForLongUrl."))}get pageRoute(){return[{query:[`${vl.action}=checkForLongUrl`]}]}}),Ti(new class extends Mu{constructor(){super("WatchCategoryBuilder")}pageType(){return"unknown"}handlePage(e,t,n,r,i){"phone"===il?bi(Is.watchAppsGroupingURL).then(e=>{const t=new Xl("apps");t.actions=[e],r(t)},i):i(new Error(`Unsupported url for current platform: ${e}`))}get pageRoute(){return[{query:[`${vl.action}=watchCategory`]}]}}),Ti(new class extends Mu{constructor(){super("ExperimentLink")}pageType(){return"unknown"}handlePage(e,t,n,r,i){const o={url:e.toString()},a=net.fetch(o);a.then(e=>{if(e.status>=200&&e.status<300){const e=new fc("default");e.title="You have been enrolled in the AB test",e.buttonTitles=["OK"],e.buttonActions=[new Xl("infer")],r(e)}else i(new Error(`unexpected response status: ${e.status} from ${e.url}`))}),a.catch(i)}get pageRoute(){return[{protocol:kl.https,hostName:"xp.apple.com",path:"register",query:["ab2"]}]}}),Ti(new class extends Mu{constructor(){super("MultiplexingBuilder")}pageType(){return"unknown"}handlePage(e,t,n,r,i){$((new ph).forType("multiplex").withIds([t.id])).then(e=>this.actionFromMultiplexResponse(e)).then(r,i)}get pageRoute(){return[{protocol:kl.https,path:"WebObjects/MZStore.woa/wa/viewFeature",query:[vl.id]}]}actionFromMultiplexResponse(e){const t=h(e,"results.target"),n=h(e,"results.target-link");return t?this.targetDataToAction(t):n?this.targetLinkDataToAction(n):null}targetDataToAction(e){const t=d(e,"href");return t?bi(Ne(t)):null}targetLinkDataToAction(e){const t=d(e,"url"),n=new Fl(t),r=this.addProtocolToURLIfNeeded(n).toString();return Promise.resolve(new Zl(r,!1))}addProtocolToURLIfNeeded(e){return e.protocol||(e.protocol="https"),e}}),Ti(new class extends Mu{constructor(){super("ShowAccountPageBuilder")}pageType(){return"unknown"}handlePage(e,t,n,r,i){let o,a=[];if("mac"===il)o="account";else{o="updates";const e=new Jl("account");e.presentationContext="presentModalFormSheet",e.animationBehavior="never",a=[e]}const s=new Xl(o);s.actions=a,r(s)}get pageRoute(){return[{hostName:`${Cl.showAccountPage}`},{hostName:`${Cl.showPurchasesPage}`}]}}),Ti(new class extends Mu{constructor(){super("ShowSubscriptionPageBuilder")}pageType(){return"unknown"}handlePage(e,t,n,r,i){r(new Jl("finance",Vu))}get pageRoute(){return[{hostName:`${Cl.showSubscriptionsPage}`}]}}),Ti(new class extends Mu{constructor(){super("ShowUpdatesBageBuilder")}pageType(){return"unknown"}handlePage(e,t,n,r,i){const o=new Xl("updates");if("mac"!==il){const e=new Jl("account");e.presentationContext="presentModalFormSheet",e.animationBehavior="never",o.actions=[e]}r(o)}get pageRoute(){return[{hostName:`${Cl.showUpdatesPage}`},{path:"updates"},{path:"{countryCode}/updates"},{query:[`${vl.action}=updates`]}]}}),Ti(new class extends Mu{constructor(){super("FamilyCircleBuilder")}pageType(){return"unknown"}handlePage(e,t,n,r,i){const o=new Tc,a=new Xl("arcade");a.actions=[o],r(a)}get pageRoute(){return[{hostName:`${Cl.familyCircle}`},{path:`${Cl.familyCircle}`}]}}),Ti(new hd),Ti(new class extends Mu{constructor(){super("ArcadeWelcomeBuilder")}pageType(){return"arcadeWelcome"}handlePage(e,t,n,r,i){const o=this.generatePage(t,n);r(Mu.createFlowAction(o,this.pageType(),e))}get pageRoute(){return[{hostName:`${Cl.arcadeWelcomePage}`,query:[`${vl.context}?`]}]}generatePage(e,t){return n=e[vl.context],"tv"===il?function(){const e=new Ac;e.title=P("ARCADE_WELCOME_TV_CONTINUE_BUTTON"),xa(e,{id:"arcade-welcome-continue",actionType:"navigate",pageInformation:new zu,locationTracker:{rootPosition:0,locationStack:[]},targetType:"button"});const t=new Pc(P("ARCADE_WELCOME_INDIVIDUAL_TITLE"),null,[new kc(P("ARCADE_WELCOME_TV_DEVICES_HEADING"),P("ARCADE_WELCOME_TV_DEVICES_BODY"),it("resource://DeviceSharing")),new kc(P("ARCADE_WELCOME_TV_INDIVIDUAL_PEOPLE_HEADING"),P("ARCADE_WELCOME_TV_INDIVIDUAL_PEOPLE_BODY"),it("resource://FamilySharing")),new kc(P("ARCADE_WELCOME_TV_CONTROLLERS_HEADING"),P("ARCADE_WELCOME_TV_CONTROLLERS_BODY"),it("resource://ControllerSupport"))],e,null);return new Cc(t,t)}():"mac"===il?function(){const e={rootPosition:0,locationStack:[]},t=new Ac;t.title=P("ARCADE_WELCOME_CONTINUE_BUTTON"),xa(t,{id:"arcade-welcome-continue",actionType:"navigate",pageInformation:new zu,locationTracker:e,targetType:"button"});const n=new Zl("x-apple.systempreferences:com.apple.preferences.FamilySharingPrefPane");n.title=P("ARCADE_WELCOME_INDIVIDUAL_FAMILY_BUTTON"),xa(n,{id:"arcade-welcome-create-family",actionType:"navigate",pageInformation:new zu,locationTracker:e,targetType:"button"});const r=new Zl("x-apple.systempreferences:com.apple.preferences.FamilySharingPrefPane");r.title=P("ARCADE_WELCOME_FAMILY_MEMBER_FAMILY_BUTTON"),xa(r,{id:"arcade-welcome-invite-to-family",actionType:"navigate",pageInformation:new zu,locationTracker:e,targetType:"button"});const i=new Pc(P("ARCADE_WELCOME_INDIVIDUAL_TITLE"),P("ARCADE_WELCOME_INDIVIDUAL_SUBTITLE"),[new kc(null,null,it("resource://WelcomeArcade"))],t,n),o=new Pc(P("ARCADE_WELCOME_FAMILY_MEMBER_TITLE"),P("ARCADE_WELCOME_FAMILY_MEMBER_SUBTITLE"),[new kc(null,null,it("resource://WelcomeArcade"))],t,r);return new Cc(i,o)}():function(e){const t={rootPosition:0,locationStack:[]},n=function(e){if(Pe(e)){const e=new Ac;return e.title=P("ARCADE_WELCOME_TV_CONTINUE_BUTTON"),e}return Dn(P("ARCADE_WELCOME_CONTINUE_BUTTON"))}(e);xa(n,{id:"arcade-welcome-continue",actionType:"navigate",pageInformation:new zu,locationTracker:t,targetType:"button"});const r=function(e){return Pe(e)?Dn(P("AppStore.Arcade.Welcome.Family.Button.ExploreArcade")):null}(e);r&&xa(r,{id:"arcade-welcome-create-family",actionType:"navigate",pageInformation:new zu,locationTracker:t,targetType:"button"});let i=md,o="oe";"pad"===il&&(i=gd,o="og");const a=new Pc(P("ARCADE_WELCOME_INDIVIDUAL_TITLE"),P("AppStore.Arcade.Welcome.Family.Description"),[new kc(null,null,Do(i,{useCase:22,cropCode:o}))],n,r);if(y("dismissingPostSubscribeActions"))if(Pe(e)){a.nonDismissingContinueAction=Dn(P("AppStore.Arcade.Welcome.Family.Button.ExploreArcade")),n.title=a.nonDismissingContinueAction.title;const e=new Ac;e.title=P("ARCADE_SUBSCRIBE_PAGE_NOT_NOW"),a.dismissingFamilyAction=e,r.title=a.dismissingFamilyAction.title}else a.nonDismissingContinueAction=Dn(P("AppStore.Arcade.Welcome.Family.Button.ExploreArcade")),n.title=a.nonDismissingContinueAction.title;return new Cc(a,a)}(n);var n}}),Ti(new class extends xf{constructor(){super("TopChartsAdapterBuilder","topCharts",Es.topCharts,Ps.topCharts)}}),Ti(new class extends xf{constructor(){super("ReviewsAdapterBuilder","product",Es.reviews,Ps.reviews,[],null,ks.reviews,Cs.reviews)}}),Ti(new class extends xf{constructor(){super("SortedReviewsAdapterBuilder","reviews",Es.sortedReviews,Ps.sortedReviews)}}),Ti(new class extends xf{constructor(){super("PersonalizedReviewsAdapterBuilder","unknown",[],null,Os.personalizedReviews,vs.personalizedReviews)}}),Ti(new class extends xf{constructor(){super("ProductInAppPurchaseAdapterBuilder","product",Es.productInAppPurchase,Ps.productInAppPurchase)}}),Ti(new class extends xf{constructor(){super("InAppPurchaseInstallAdapterBuilder","inAppPurchaseInstall",Es.inAppPurchaseInstall,Ps.inAppPurchaseInstall)}}),Ti(new class extends xf{constructor(){super("DeveloperAdapterBuilder","page",Es.developer,Ps.developer,Os.developer,vs.developer)}}),Ti(new class extends xf{constructor(){super("DeveloperHrefAdapterBuilder","page",Es.developerHref,Ps.developerHref)}}),Ti(new class extends xf{constructor(){super("ArticleAdapterBuilder","article",Es.article,Ps.article)}}),Ti(new class extends xf{constructor(){super("SearchAdapterBuilder","page",Es.search,Ps.search)}}),Ti(new class extends xf{constructor(){super("MSOAdapterBuilder","mso",Es.msoRoom,Ps.msoRoom,Os.mso,vs.mso)}}),Ti(new class extends xf{constructor(){super("ResetAndRedirectAdapterBuilder","unknown",Es.resetAndRedirect,Ps.resetAndRedirect)}}),Ti(new class extends xf{constructor(){super("ActionAdapterBuilder","unknown",Es.action,Ps.actionHandler)}}),Ti(new class extends xf{constructor(){super("PersonalizationTransparencyAdapterBuilder","account",Es.personalizationTransparency,Ps.personalizationTransparency)}}),Ti(new class extends xf{constructor(){super("TodayAdapterBuilder","today",[],null,Os.today,vs.today)}});const $f=z("FF5046"),Vf=[$f,z("FFFFFF"),K("white")];class qf{constructor(e,t){this.videos=e,this.mediaPlatform=t}}const Gf=new Vs(414,896),Hf=new Vs(375,812),jf=(new Vs(414,736),new Vs(375,667)),Wf=new Vs(320,568),zf=new Vs(320,480),Yf=(new Vs(768,1024),new Vs(834,1112)),Kf=new Vs(834,1194),Qf=new Vs(1024,1366),Jf=new Vs(1024,1366),Xf=new Vs(368,448),Zf=["iphone_6_5","iphone_5_8","iphone6+","iphone6","iphone5","iphone"],eh=18,th=18,nh=41.5,rh=39,ih=34;class oh{constructor(){this.location=null,this.position=0}}const ah="undefined"!=typeof ask&&void 0!==ask.arcade?ask.arcade:{getRecentlyPlayedGamesWithTimeout:e=>Promise.resolve([]),getRecentlyPlayedGames:()=>Promise.resolve([])},sh=()=>ah.getRecentlyPlayedGames(),lh=e=>ah.getRecentlyPlayedGamesWithTimeout(e),ch="1469266318",uh=5;class ph{constructor(e){if(this.ids=new Set,this.relationshipIncludes=new Set,this.attributeIncludes=new Set,this.platform=null,this.additionalPlatforms=new Set,this.additionalQuery={},this.relationshipLimits={},this.searchTerm=null,this.searchTypes=[],this.context=null,this.platform=Ja(),!a(e))if("string"==typeof e)this.href=e;else if(Array.isArray(e)){const t=new Set;for(const n of e)t.add(n.type),this.ids.add(n.id);1===t.size?this.resourceType=t.values().next().value:t.size>1&&(this.resourceType="contents")}}forType(e){return this.resourceType=e,this}withIds(e){for(const t of e)l(t)&&this.ids.add(t);return this}includingRelationships(e){for(const t of e)this.relationshipIncludes.add(t);return this}includingScopedRelationships(e,t){this.scopedRelationshipIncludes||(this.scopedRelationshipIncludes=new Map);let n=this.scopedRelationshipIncludes.get(e);n||(n=new Set);for(const e of t)n.add(e);return this.scopedRelationshipIncludes.set(e,n),this}includingMetaKeys(e,t){this.metaIncludes||(this.metaIncludes=new Map);let n=this.metaIncludes.get(e);n||(n=new Set);for(const e of t)n.add(e);return this.metaIncludes.set(e,n),this}includingRelationshipsForUpsell(e){const t=Ma()?"marketing-items":"upsell";if(e){this.scopedRelationshipIncludes||(this.scopedRelationshipIncludes=new Map);let e=this.scopedRelationshipIncludes.get("editorial-items");e||(e=new Set),e.add(t),this.scopedRelationshipIncludes.set("editorial-items",e)}else this.relationshipIncludes.add(t);if("marketing-items"===t){this.metaIncludes||(this.metaIncludes=new Map);let e=this.metaIncludes.get("marketing-items");e||(e=new Set),e.add("metrics"),this.metaIncludes.set("marketing-items",e)}return this}includingAttributes(e){for(const t of e)this.attributeIncludes.add(t);return this}includingAdditionalPlatforms(e){for(const t of e)this.additionalPlatforms.add(t);return this}addingQuery(e,t){return this.additionalQuery[e]=t,this}addingRelationshipLimit(e,t){return this.relationshipLimits[e]=t,this}withSearchTerm(e){return this.searchTerm=e,this}searchingOverTypes(e){for(const t of e)this.searchTypes.push(t);return this}addingContext(e){return this.context=e,this}attributingTo(e){return this.canonicalUrl=e,this}withFilter(e,t){return this.filterType=e,this.filterValue=t,this}withLimit(e){return this.limit=e,this}asPartialResponseLimitedToFields(e){return this.fields=e,this}}class dh extends Ds{constructor(e,t){super(),this.lockups=e,this.missingIds=t}}class fh extends Ds{constructor(e){super(),this.targetName=e,this.imageName="none"}}class hh extends Ds{constructor(e){super(),this.name=e}}class mh extends Ds{constructor(e){super(),this.identifier=e}}class gh extends mh{constructor(e){super(e)}}class yh extends mh{constructor(e){super(e)}}class wh extends mh{constructor(e){super(e)}}class Th extends Ds{constructor(e){super(),this.style=e}}class Ah{constructor(e){if(this._values={},!o(e)&&e.length>0){const t=e.split("&");for(const e of t){const[t,n]=e.split("="),r=decodeURIComponent(t),i=o(n)?"":decodeURIComponent(n);this._values[r]=i}}}_searchKey(e,t){if(0===e.length)throw new Error("key may not be zero length");return o(t)||0===t.length?e:`${t}${e.charAt(0).toUpperCase()}${e.slice(1)}`}get(e,t="mt"){const n=this._searchKey(e,t);return this._values[n]}set(e,t,n="mt"){const r=this._searchKey(e,n);return o(t)?delete this._values[r]:this._values[r]=t,this}toString(){let e="";for(const t of Object.keys(this._values)){const n=this._values[t];e.length>0&&(e+="&"),e+=encodeURIComponent(t),e+="=",e+=encodeURIComponent(n)}return e}toMap(){return Object.assign({},this._values)}}const Ih=new class{constructor(){this._app="",this._clientId="",this._pages=[]}get _requestId(){const e=Date.now().toString(36).toUpperCase(),t=Math.floor(1e5*Math.random()).toString(36).toUpperCase();return this._clientId+"z"+e+"z"+t}get _prevPage(){return this._pages.length>=2?this._pages[this._pages.length-2]:void 0}useApp(e){""!==this._app||o(e)||(this._app=e)}useClientId(e){o(e)||(this._clientId=e)}usePageHistory(e){if(0!==e.length){this._pages.length=0;for(const t of e){const e=d(t);o(e)||this._pages.push(e)}}}useNativeValues(e){const t=d(e,"nativeApp");this.useApp(t);const n=d(e,"nativeClientId");this.useClientId(n);const r=u(e,"nativePageHistory");this.usePageHistory(r)}getPageHistoryFor(e){const t=this._pages.slice();return this._pages.length>=5&&this._pages.shift(),this._pages.push(e),t}get params(){return{app:this._app,clientId:this._clientId,requestId:this._requestId,prevPage:this._prevPage,eventTime:Date.now()}}},bh=new Gu({defaultTopic:"xp_amp_appstore",buildType:pl,jsVersion:T("version"),buyDecorator:Ih,isLoggingEnabled:!0,bagProvider:(e,t)=>{const n=Is.metricsConfiguration;if(!o(t)){const r=i(n,[t,e]);if(!o(r))return r}return i(n,e)}});exportService("SearchData",{fetchHints:e=>N(()=>{const t=e.term,n=function(e,t,n=host.clientIdentifier){let r=Fl.from(e).param("caller","com.apple.AppStore").param("v","4");return o(t)||(r=r.param("term",t)),r=n===Xs?r.param("media","watchSoftware").param("clientApplication","Watch"):n===Zs?r.param("clientApplication","Messages"):r.param("clientApplication","Software"),r.build()}(Is.searchHintsURL,t);return function(e){return function(e,t){return net.fetch(e).then(t=>{if(!t.ok)throw Error(`Bad Status code ${t.status} for ${e.url}`);const n=Date.now(),r=(e=>plist.parse(e))(t.body),i=Date.now();if(r){const e=function(e,t,n){if(a(e))return null;const r=e[0];return r.parseStartTime=t,r.parseEndTime=n,r}(t.metrics,n,i);s(e)&&(r[bs.timingValues]=e)}return r[bs.requestedUrl]=e.url.toString(),r})}(e)}({url:n,signingStyle:"platform"}).then(e=>(function(e,t,n){return As.c("searchHintsFromApiResponse",()=>{const r={rootPosition:0,locationStack:[]},i=u(n,"hints").map(t=>{const n=d(t,"hintsEntity"),i=new tp(d(t,"searchTerm"),null,"hints",n);return Ua(i,e,r),va(r),i}),o=Se(e,"key","input",t,{}),a=new np(i);return a.pageMetrics.addData(o,["pageEnter"]),a})})(t,n,e))}),fetchTrending:e=>N(()=>{const e={url:Is.trendingSearchesURL};return net.fetch(e).then(t=>{if(!t.ok)throw Error(`Bad Status code ${t.status} for ${e.url}`);return function(e){return As.c("trendingSearchesFromApiResponse",()=>{const t={rootPosition:0,locationStack:[]},n=u(e,"trendingSearches").map(e=>{const n=d(e,"label"),r=new tp(n,d(e,"url"),"trending");return Ua(r,n,t),va(t),r}),r=n.length>0?d(e,"header.label"):null,i=new rp(r,n);switch(il){case"pad":i.maxNumberOfSearches=10;break;case"phone":i.maxNumberOfSearches=7}return i})}(JSON.parse(t.body))})}),fetchResults(e){const t=new Rf(e.targetingData,random.nextUUID());return N(()=>{if(a(e.term))return Promise.resolve(hi(e.facets));const n=e.term.trim();return a(n)?Promise.resolve(hi(e.facets)):function(r){const i={},c={};t.validAdRequest()&&(i["X-Apple-App-Store-Client-Request-Id"]=t.appStoreClientRequestId,i["X-Apple-iAd-Request-Data"]=t.targetingData,i["X-Apple-iAd-Env-Name"]=t.iAdRoutingInfo),l(void 0)&&(i[Uu]=void 0),c.headers=i;const u=s(e.url)?di(null,e.facets,e.searchEntity,e.origin):di(n,e.facets,e.searchEntity,e.origin),p=$(u,c);let f,h;if(function(e=ds){switch(e.deviceType){case"pad":case"mac":return!0;default:return!1}}(ds)){const e=ts(null,null,function(e=ds){switch(e.deviceType){case"pad":return["iphone"];default:return[]}}(ds));e&&(f=$(e).catch(()=>void 0))}const m=Is.searchTransparencyAdamId;return l(m)&&(h=$((new ph).forType("editorial-items").withIds([m]).includingAdditionalPlatforms(Xa())).catch(()=>void 0)),Promise.all([p,f,h]).then(([r,i,c])=>{const p=ns(i,!1),f=Ge(c);return function(e,t,n,r,i,c,u,p,f=!1){const h={},m=As.c("searchResultsFromResponse",()=>{!function(e){const t=ze(e);s(t)&&(e.meta.metrics["data.search.dataSetId"]=d(t,"dataSetId"),delete e.meta.metrics.dataSetId)}(e);const m=[],g="phone"===il||"pad"===il||"unknown"===il,y=Ke("Search",d(e,["meta","metrics","data.search.dataSetId"]),e);y.searchTerm=r,y.pageUrl=i;const w={rootPosition:0,locationStack:[]},T=He(e.results.search);let A=[];g&&(A=function(e,t,n,r,i=!1){const o=[];e.iAdInfo=new Wu(t.iAdId,t.appStoreClientRequestId),ka({id:"ad_container",kind:"iosSoftware",softwareType:null,targetType:null,title:"ad_container",pageInformation:e,locationTracker:n,idType:"sequential"},"ad_container");const s=He(r.results.search)[0],c=He(r.results["ads-result"]);let u,p="Adverts received from ad server: ";for(const e of c)p=p+"["+e.id+"], ";ui(p);let d=!0;for(const t of c){if(Re(t)){ui(`SearchAd [${t.id}] filtered by media_shouldFilter() - app probably not supported on current os or device`);continue}const r=ii(t,s);if(t.attributes.iad=ri(t,r),a(t.attributes.iad)){ui(`SearchAd [${t.id}] filtered because no appropriate iAd dictionary was found. (Probably a server issue if hitting this)`);continue}const c={metricsOptions:{pageInformation:e,locationTracker:n,targetType:"card",isAdvert:!0},hideZeroRatings:!0,artworkUseCase:8,isNetworkConstrained:i,canDisplayArcadeOfferButton:fa("mixedMediaLockup")},p=ai(t,r,c,u);if(a(u))u=p,ui(`SearchAd [${t.id}] dictates ad display style of: ${ci(p)}`);else{if(!ni(u,p,t.id))continue;ui(`SearchAd [${t.id}] will be displayed because it is compatible with the display style of: ${ci(p)}, which is the same height as display style: ${ci(u)}`)}const f=ee(t,"iad");f&&e.iAdInfo.apply(t.id,f);let h=oi(t,c);if(h=si(h,p,s&&t.id===s.id,d),"TEXT"===p.style){const e=ne(t,"iad.format.text");"none"!==e&&(h.searchAd.advertisingText=ye(t,"description"===e?"description.standard":e))}const m=new Ju("advert",h);l(m)&&(o.push(m),va(n),d=!1)}const f=c[0],h=ee(f,"iad");return h&&e.iAdInfo.apply(f.id,h),e.baseFields.iAdTemplateType=u?u.style:null,Pa(n),va(n),o}(y,n,w,e,f));const I=A||[];let b=!0;for(const e of T){if(o(e.attributes)){m.push(e);continue}if(Re(e,13822))continue;const t=yi(e,y,w,f,u);if(t){if("tv"===il)switch(t.type){case"content":case"editorial":break;default:continue}if("inAppPurchase"===t.type){const e=t.resultModel;e&&e.parent&&(h[e.productIdentifier]=e.parent.bundleId)}b&&l(A)&&(pi(A[0],t),b=!1),I.push(t),va(w)}}const S=new Yu;S.results=I;const k=!a(u);if(S.facets=k?null:mi(t,c),S.isAutoPlayEnabled="tv"!==il,l(p)){const e={};if(l(ne(p,"url"))){const t=Oo(p,P("SEARCH_TRANSPARENCY_LINK"),{targetType:"link",pageInformation:y,locationTracker:w});e[`${P("SEARCH_TRANSPARENCY_LINK")}`]=io(p,t,host.clientIdentifier),S.transparencyLink=new nu(P("SEARCH_TRANSPARENCY_TEXT"),e)}}if(m.length>0){const e=function(e,t,n,r){return{results:e,maxPerPage:30,searchEntity:t,pageInformation:n,metricsLocationTracker:r}}(m,u,y,w);S.nextPage=wi(e)}return Je(S,y),S});return new Promise((e,t)=>{0===Object.keys(h).length?e(m):function(e){return new Promise((t,n)=>{qd.visibilityForIAPs(e,(e,n)=>{t(n?{}:e)})})}(h).then(t=>{const n=m.results.filter(e=>{const n=e;if(!n||"inAppPurchase"!==n.type)return!0;const r=n.resultModel;if(!r)return!1;const i=t[r.productIdentifier];return null==i?r.isVisibleByDefault:i});m.results=n,e(m)})})}(r,e.facets,t,n,M(u).toString(),p,e.searchEntity,f,e.isNetworkConstrained)})}()})},fetchMoreResults:e=>N(()=>{const t=function(e){return JSON.parse(e)}(e.pageToken),n=function(e){return e&&e.results?e.results.slice(0,e.maxPerPage):[]}(t);return 0===n.length?Promise.resolve(hi()):$(function(e){return new ph(e).includingAdditionalPlatforms(fi(ds)).includingRelationships(["apps","top-apps"]).includingAttributes(["screenshotsByType","messagesScreenshots","videoPreviewsByType","requiredCapabilities","supportsFunCamera","minimumOSVersion"]).includingRelationshipsForUpsell(!0)}(n)).then(n=>(function(e,t,n){return As.c("resultsFromLookupResponse",()=>{const r=[];for(const i of e.data){const e=i.id;if(o(i.attributes)){console.warn(`no data found for ${e}, skipping`);continue}if(Re(i,13822))continue;const a=yi(i,t.pageInformation,t.metricsLocationTracker,n,t.searchEntity);a&&(r.push(a),va(t.metricsLocationTracker))}const i=new Yu;return i.results=r,i.nextPage=wi(t),i})})(n,function(e){let t=[];e&&e.results&&(t=e.results.slice(e.maxPerPage,e.results.length));const n=Object.assign({},e);return n.results=t,n}(t),e.isNetworkConstrained))})}),exportService("PageData",{fetchGeneric:e=>N(()=>Ii(e.url,cp)),fetchMoreOfGeneric:e=>N(()=>Si(e.pageToken)),fetchShelves:e=>N(()=>(function(e){return new Promise((t,n)=>{const r=Object.keys(e),i={shelves:{},errors:{}},o=new Au(r.length);o.then(()=>{if(Object.keys(i.shelves).length>0)t(i);else{const t=Object.keys(i.errors).map(e=>i.errors[e].message);0===t.length?n(new Error(`Could not load any shelves: ${JSON.stringify(e)}`)):n(new Error(t.join("\n")))}});for(const t of r){const n=e[t],r=e=>{i.shelves[t]=e,o.countDown()},a=e=>{i.errors[t]=e,o.countDown()},s=Mf.routedObjectForUrl(n);s.object?s.object.handleShelf(s.normalizedUrl,s.parameters,s.matchedRuleIdentifier,r,a):a(new Error(`fetchShelves: Unhandled shelf url: ${n}`))}})})(e.requests)),fetchAction:e=>N(()=>(0!==V(new Fl(e.url)).length&&net.fetch({url:Is.redirectUrlEndpoint,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`url=${encodeURIComponent(e.url)}`}),bi(e.url).then(t=>{if(!t)throw new Error(`Promise resolved to null action for: ${e.url}`);if(e.isIncomingURL){const e=[t];if(t instanceof Xl)for(const n of t.actions)e.push(n);for(const t of e){const e=t.pageData;e&&"pageMetrics"in e&&Ze(e)}}switch(t.actionClass){case"FlowAction":const n=t;"finance"===n.page||"article"===n.page||"arcadeSubscribe"===n.page?n.presentationContext="infer":e.isIncomingURL?"tv"===il?(n.presentationContext="infer",n.animationBehavior="infer"):n.presentationContext="push":(n.presentationContext="replace",n.animationBehavior="never")}return t}).catch(e=>{if(e instanceof Nl)switch(e.statusCode){case 204:const e=new fc("default");if(e.title=P("APP_NOT_AVAILABLE_TITLE"),e.message=P("APP_NOT_AVAILABLE_MESSAGE"),e.isCancelable=!0,"tv"===il)return e;{const t=new Xl("today");return t.title=P("ACTION_OK"),t.actions=[e],t}}throw Error(e.message)}))),fetchGenericAccount:e=>N(()=>Ii(e.url,ku))}),exportService("ProductData",{fetchPage:e=>e.preloading&&1===Z(Gl)?Promise.reject(new Error("Product page preloading is disabled")):N(()=>{0!==V(new Fl(e.url)).length&&net.fetch({url:Is.redirectUrlEndpoint,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`url=${encodeURIComponent(e.url)}`});let t=Ii(e.url,lp);return t||(t=$(new ph(e.url)).then(e=>zr(e))),t.then(e=>(host.clientIdentifier===nl&&e&&"pageMetrics"in e&&Ze(e),e))}),fetchInstallPage:e=>N(()=>Ii(e.url,up)),fetchInstallPageAction:e=>N(()=>new Promise((t,n)=>{const r=new Jl("inAppPurchaseInstall");r.pageUrl=Wi(e.id,e.parentId),t(r)}))}),exportService("TopChartData",{fetchPage:e=>N(()=>{const t=new Fl(e.url),n=t.query[vl.chartIdentifier],r=t.query[vl.chartIdentifiers];t.removeParam(vl.chartIdentifier),t.query.limit="200",host.clientIdentifier===Zs&&(t.query.contexts="messages");const i=$(new ph(t.toString()));let o;return o="tv"===il||l(r)?Promise.resolve({}):$(ts(d(t.query,"genre"))).catch(()=>void 0),Promise.all([i,o]).then(([e,r])=>{const i=ns(r);return Xr(e,t,i,n)})}),fetchMoreOfSegment:e=>N(()=>{const t=st(e.pageToken);return 0===t.length?Promise.resolve(new Ef(null,null,null,[])):$(new ph(t)).then(t=>{const n=lt(e.pageToken);return ei(t,e.pageToken,n)})})}),exportService("TodayData",{fetchPage:e=>N(()=>{const t="x-as3-internal:/today/test"===e.url,n=-1!==e.url.indexOf(Pl.todayCardPreview);if(t)return new Promise((e,t)=>{t()});if(n){const t=Fl.from(e.url);return t.param(vl.fetchData,"true"),Ii(t.build(),Kp)}return function(t){const n=Xa(),r={};if(l(void 0)){const e={};e[Uu]=void 0,r.headers=e}const i=$((new ph).forType("today").includingAdditionalPlatforms(n).includingAttributes(od).includingRelationshipsForUpsell(!0),r);let a=Promise.resolve(null);const c=(new ph).forType("editorial-items").withIds(e.onboardingCardIds).includingAdditionalPlatforms(n).includingAttributes(od);return c.ids.size>0&&(a=$(c,{}).catch(()=>void 0)),Promise.all([i,a]).then(([e,t])=>(function(e,t){if(o(e))return null;!function(e){let t=!0;const n=u(e.results.data),r={};for(const e of n){const t=u(e.contents);for(const e of t)if(je(e)){const t=r[e.id];r[e.id]=t?t+1:1}}for(let e=n.length-1;e>=0;e--){const i=n[e],o=Ct(i.contents,r,t);i.contents=o.contents,t=!o.contentsContainsHydratedData}}(e);const n=new ad;n.pageInformation=Ke("Today","today",e);const r=He(t),i=l(r),a=[];if(i){!function(e){for(const t of e)t[td]=!0}(r);for(const e of r)a.push(e.id)}const c=[];let p=!1;for(const t of e.results.data){const e=Ce(d(t,"date"));if(s(e)){const t=new Date;if(e.getTime()>t.getTime())continue}if(i&&!p){const e=u(t.contents);t.contents=r.concat(e),p=!0}bt(c,t)}const f=ln();f&&It(c,f);const h=Is.termsAndConditionsURL;o(h)||It(c,gn(h));const m=[];let g=!1,y=!0;for(;!g;){const e=Et(c,n,y);if(!s(e))break;m.push(e),g=s(e.url),y=!1}const w={queue:c,metricsContext:n};let T=null;e.results.data.length>0&&(T=d(e.results.data[0].title));const A=vt(m,w,a,T);return Je(A,n.pageInformation),A})(e,t))}()}),fetchMoreOfPage:e=>N(()=>(function(e){var t;const n=a(t=e.queue)?null:"shelf"===t[0].internalContentType?"shelf":"moduleSlice";if(o(n))return Promise.reject(new Error("today.nextPageFromPageToken called on end of page"));const r="pad"===il?ol.isEqualTo(Qf)?6:2:1;if("shelf"===n){const t=St(e.queue,"conservative",6).shelf;return va(e.metricsContext.locationTracker),Promise.resolve(vt([t],e))}return function(e,t,n){const r=St(e,"conservative",6);return"moduleSlice"!==r.contentType?Promise.reject(new Error("dequeueHydratedModuleSlice: TodayContentQueue dequeued unexpected contentType.")):kt(r.moduleSlice).then(t=>{const r=t.todayModule.contents.length;let i=Math.ceil(r/n)*n;0===i&&(i=n);const o=i-r;return!t.isLastOfModule&&o>0?function e(t,n){if(0===n)return Promise.reject(new Error("hydrateContentsUntilCountOrEndOfModule: Hydrating module slice of size 0."));const r=St(t,"conservative",n);if("moduleSlice"!==r.contentType)return Promise.reject(new Error("hydrateContentsUntilCountOrEndOfModule: TodayContentQueue dequeued unexpected contentType."));const i=r.moduleSlice;if(i.isLastOfModule)return kt(i);const o=i.todayModule.contents.length;return kt(i).then(n=>{const r=n.todayModule.contents.length,i=o-r;return i>0?e(t,i).then(e=>Pt(n,e)):n})}(e,o).then(e=>Pt(t,e)):t})}(e.queue,0,r).then(t=>{const n={contentOffsetWithinModule:t.contentOffsetWithinSourceModule,hideTitle:t.isContinuationModule,setTitleToDateForTodaySection:!1},r=Ot(t.todayModule,n,e.metricsContext);return t.isLastOfModule&&va(e.metricsContext.locationTracker),vt([r],e)})})(e.pageToken)),fetchArticle:e=>N(()=>Ii(e.url,Ad))}),exportService("ContentData",{fetchIconArtwork:e=>N(()=>$((new ph).withIds(e.adamIds).forType("apps").includingAdditionalPlatforms(Xa())).then(e=>{const t=He(e),n={};for(const e of t)n[e.id]=xo(e,{useCase:3});return n})),fetchLockups:e=>0===e.bundleIds.length?Promise.resolve(new dh([],[])):N(()=>$((new ph).forType("apps").includingAdditionalPlatforms(Xa()).withFilter("bundleId",e.bundleIds.join(","))).then(t=>(function(e,t){return As.c("lockupsFromResponse",()=>{const n={rootPosition:0,locationStack:[]},r=new zu,i=He(e),o=[],a=new Set(t);for(const e of i){const t=zi(e,{metricsOptions:{pageInformation:r,locationTracker:n},artworkUseCase:2});t&&(o.push(t),a.delete(t.bundleId))}return new dh(o,Array.from(a))})})(t,e.bundleIds)))}),exportService("Metrics",{buildEvent:e=>N(()=>{const t=bh.makeEvent(e.fields);return Promise.resolve(t)})}),exportService("Purchases",{decorateArcadePurchase:e=>N(()=>{const t=m(e.intent,"token");let n=t.buyParams;n=ls(d(e.intent,"adamId"),n,m(e.intent,"token.pageInformation"),p(e.intent,"token.excludeAttribution"),d(e.intent,"token.metricsPlatformDisplayStyle"),h(e.intent,"metrics"),h(e.intent,"systemInformation"));const r=new Ah(n),i={product:d(e.intent,"product")||t.productIdentifier,adamId:d(e.intent,"adamId"),buyParams:r.toMap()};return Promise.resolve(i)}),decoratePurchase:e=>N(()=>{const t=e.intent;let n=d(t,"token.buyParams");const r=d(t,"overrideBuyParams");s(r)&&(n=r),n=ls(d(t,"adamId"),n,m(t,"token.pageInformation"),p(t,"token.excludeAttribution"),d(t,"token.metricsPlatformDisplayStyle"),h(t,"metrics"),h(t,"systemInformation"));const i=u(t,"token.appPlatforms"),o=i&&i.length&&i.length>0&&i.indexOf("tv")>=0,a=jo(il).some(e=>-1!==i.indexOf(e)),l=d(t,"instalationType"),c="update"===l,f="redownload"===l,y=p(t,"token.isPreorder"),w=!(y||o&&!a),T=Object.assign(Object.assign({},h(t,"token.additionalHeaders",{})),h(t,"additionalHeaders",{})),A={adamId:d(t,"adamId"),buyParams:n,vendor:d(t,"token.vendor"),appName:d(t,"token.appName"),bundleId:d(t,"token.bundleId"),appPlatforms:i,additionalHeaders:T,isUpdate:c,isRedownload:f,isPreorder:y,createsJobs:w,preflightPackageUrl:d(t,"token.preflightPackageUrl"),isArcadeApp:g(t,"token.isArcadeApp")};return Promise.resolve(A)})}),exportService("MSOData",{fetchProviderData:e=>N(()=>{const t=e.providerAdamId;return $((new ph).forType("multiple-system-operators").withIds([t])).then(e=>(function(e){return As.c("msoProviderDataFromData",()=>{const t=Ge(e),n=ne(t,"name"),r=ne(t,"url"),i=function(e){return As.c("msoProviderArtworkFromData",()=>Do(ee(e,"editorialArtwork.storeFlowcase")||ee(e,"artwork"),{useCase:3}))}(t);i&&(i.crop="sr");const o=function(e){const t=ee(e,"editorialArtwork.bannerUber");return t?Do(t,{useCase:20}):null}(t);return new Sd(n,r,i,o)})})(e))}),fetchPage(e){const t=o(e.providerAdamId)||o(e.subscribedChannelIds);return N(()=>t?Ii(e.url,cp):$(Wn(e.providerAdamId)).then(t=>zn(t,function(e,t){const n=e.appsToAlwaysShow;for(const r of Object.keys(e.apps)){const i=e.apps[r];for(const e of i)if(-1!==t.indexOf(e)){n.push(r);break}}return n}(function(e){return As.c("msoAppsFromResponse",()=>{const t=Ge(e),n=W(t,"channel-apps"),r={};for(const e of n)r[j(e,"app").id]=te(e,"channelNames");const i=W(t,"apps").map(e=>e.id);return new kd(r,i)})}(t),e.subscribedChannelIds))))}}),exportService("CMCPersonalizationData",{fetchPersonalizedOfferContext:e=>N(()=>{const t=e.offerToken.offerAction,n=e.offerToken.offerDisplayProperties;if(!t||!n)return Promise.reject(new Error("Invalid offerToken for personalized offer fetch."));const r=t.adamId,i={url:Is.buyButtonMetadataURL,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"ids="+r,signingStyle:"platform"};return net.fetch(i).then(e=>{if(!e.ok)throw Error(`Bad Status code ${e.status} for ${i.url}`);const a=h(JSON.parse(e.body),r);let s=null,l=null;const c=function(e){return As.c("personalizedOfferTypeFromBuyButtonMetadata",()=>{const t=u(e,"offers");if(0===t.length)return null;for(const e of t){const t=d(e,"type");if(t)return t}return"none"})}(a);if(o(c))throw new Error("fetchPersonalizedOfferContext: Failed to determine offer type from buyButtonMetadata");if("none"!==c){let e="colored";s=function(e,t){return As.c("personalizedCMCOfferActionFromBuyButtonMetadata",()=>{const n=u(e,"offers");if(0===n.length)return null;let r,i=null;for(const e of n)switch(r=d(e,"type"),r){case"complete":case"purchased":i=e;break;default:i=null}if(!i)return null;let a=d(i,"buyParams");if("complete"===r&&o(a))return As.d("ignoredValue","string","item.offer.buyParams"),null;a||(a="");const s=t.purchaseConfiguration,l=new Fs(a,s.vendor,s.appName,s.bundleId,s.appPlatforms,s.isPreorder,s.excludeAttribution,s.metricsPlatformDisplayStyle);l.pageInformation=s.pageInformation;const c=Ao(i,t.adamId,l);return function(e,t){const n=t.purchaseConfiguration.pageInformation;let r;for(const e of t.actionMetrics.data)if(r=u(e.fields,"location"),r)break;La(e,n,r,!1)}(c,t),c})}(a,t);let r=null;switch(c){case"purchased":e="disabled",r=P("BUNDLE_OFFER_BUTTON_TITLE_PURCHASED");break;case"complete":(o(s.price)||0===s.price)&&(r=P("OFFER_BUTTON_TITLE_GET"))}l=function(e,t,n,r){return o(e)?null:As.c("personalizedCMCDisplayPropertiesFromBuyButtonMetadata",()=>{const t=new xs("app",e.adamId,r),i=yo(e);t.isFree=i;let o=null;o=i?e.title:e.priceFormatted,t.titles.standard=o;const a=n.hasInAppPurchases;if(t.hasInAppPurchases=a,a){const e=P("INLINE_IN_APP_PURCHASES");t.subtitles.standard=e}return t.contentRating=n.contentRating,t})}(s,0,n,e),r&&(l.titles.standard=r)}const p=So(s,!1);return new Ns(c,p,l)})})}),exportService("ArcadeData",{fetchPage:e=>N(()=>{const t=Fl.from(e.url);return t.param(vl.isArcade,"true"),t.param(vl.isSubscribed,`${e.isSubscribed}`),t.param(vl.isTrialAvailable,`${e.isTrialAvailable}`),Ii(t.build(),dp)}),fetchSubscribePage:e=>N(()=>Ii(Fl.from(e.url).build(),Sc)),fetchArcadeSeeAllGames:e=>N(()=>Ii(e.url,fp)),fetchMoreArcadeSeeAllGames:e=>N(()=>Si(e.pageToken).then((function(e){return e}))),fetchArcadeWelcomePage:e=>N(()=>Ii(e.url,Cc))}),exportService("TopShelfData",{fetchTopShelf:e=>N(()=>{switch(host.clientIdentifier){case"com.apple.TVAppStore.AppStoreTopShelfExtension":return function(e){return As.b("topShelfFromGroupingUrl",()=>{const t=e.query.id;let n,r;const i=e.pathComponents();if(-1!==i.indexOf("viewGenre")?n=t:-1!==i.indexOf("genre")?n=Ue(e):r=t,!c(r)&&!c(n))throw new Error(`Unable to map ${e.build()} to a media api url`);let o=(new ph).forType("groupings").addingRelationshipLimit("contents",6).addingQuery("fields","name,artistName,label,editorialElementKind,displayStyle,displaySubStyle,cardDisplayStyle,editorialArtwork,link,target,url,isCanvasAvailable,editorialNotes");return c(r)?o=o.withIds([r]):c(n)&&(o=o.addingQuery("genre",n)),$(o).then(e=>{const t=Ge(e);if(!t)return null;const n=j(t,"tabs");if(!n)return null;const r=H(n,"children");if(!r||r.data.length<1)return null;const i=r.data[0],o=ne(i,"editorialElementKind");if(475!==Number(o))return null;if("large"!==ne(i,"displayStyle"))return null;const a=W(i,"contents"),l={locationTracker:{rootPosition:0,locationStack:[]},pageInformation:Ke("TopShelf",t.id,e)},c=new Th("inset");return c.items=function(e,t){const n=[];for(const r of e){if(!s(r.attributes))continue;const e=rs(r,t);e&&n.push(e)}return n}(a,l),c})})}(Fl.from(e.url));case"com.apple.Arcade.ArcadeTopShelfExtension":return function(e,t){return As.b("topShelfForArcade",()=>{if(!y("arcadeTopShelf")){const e=new Th("carouselDetails");return e.items=[],Promise.resolve(e)}if(Is.isArcadeComingSoonEnabled)return $((new ph).forType("editorial-items").withIds([ch])).then(e=>{const t=new Th("carouselDetails");return t.items=[],t.promotionItem=function(e){return As.b("topShelfPromotionItemFromComingSoonEditorialItem",()=>{const t=Ge(e);if(!l(t))return null;const n=new wh("arcade-coming-soon");y("arcadeWordmarkAssetName")&&(n.promotionImageName=Il,n.contextImageName=Il),n.contextTitle=P("APPLE_ARCADE"),n.title=la(t,"name"),n.promotionText=n.title,n.accessibilityLabel=n.title;const r=Ri(t);n.image=r.artwork;const i=Di(t);if(o(n.image)&&!o(i.video)&&(n.image=i.video.preview),y("arcadeTopShelfFullUpcomingExperience"))o(i.video)||(n.previewVideoUrl=i.video.videoUrl);else{const e=new fh("openApplication");e.bundleIdentifier=`${el}`,e.title=P("INTRO_PRICE_OFFER_SUBTITLE"),n.playAction=e}return n})}(e),t});let n=Promise.resolve(null);e||(n=$(Wa("arcadeTopShelfATV")));let r=Promise.resolve(null);e&&(r=Ya(2,!0));const i=$(Ha().withLimit(5));return Promise.all([n,r,i]).then(([n,r,i])=>{const a=new Th("carouselDetails");a.items=[],a.promotionItem=function(e){return As.b("topShelfItemFromUpsellResponse",()=>{const t=h(e,"results.content",{});if(!l(t))return null;const n=h(e,"results.offer",{});if(!l(n))return null;const r=new wh("arcade-upsell");y("arcadeWordmarkAssetName")&&(r.promotionImageName=Il,r.contextImageName=Il),r.contextTitle=P("APPLE_ARCADE");const i=la(t,"name");r.title=yt(i,n),r.accessibilityLabel=r.title,r.promotionText=r.title;const a=la(t,"short");r.termsAndConditionsText=yt(a,n);const c=Ri(t,!0);s(c.artwork)&&(r.image=c.artwork,r.promotionHeadingTintStyle=Y(c.artwork.backgroundColor)?"light":"dark");const u=Di(t);o(u.video)||(r.previewVideoUrl=u.video.videoUrl);const p=ne(t,"breakoutCallToActionLabel");return r.playAction=ss(p),r})}(n);const c=new Set,u=is(r,e,t,"recently-played",c);a.items=a.items.concat(u);const p=is(i,e,t,"recently-added",c,5);return a.items=a.items.concat(p),console.log(`Top shelf has ${a.items.length} items.`),a})})}(p(e.isSubscribed),p(e.isTrialAvailable));default:return Promise.reject("Top shelf requested outside of an extension.")}}),createPurchase:e=>N(()=>{const t=d(e,"userInfo.adamId");if(!s(t))return Promise.reject("Missing adamId for top shelf purchase.");const n=m(e,"userInfo.token");if(o(n))return Promise.reject("Missing configuration token for top shelf purchase.");const r={adamId:t,buyParams:ls(t,d(n.buyParams),n.pageInformation,p(n.excludeAttribution),d(n.metricsPlatformDisplayStyle),e.metrics,e.systemInformation),vendor:d(n.vendor),appName:d(n.appName),bundleId:d(n.bundleId),appPlatforms:u(n.appPlatforms),additionalHeaders:h(n.additionalHeaders),isUpdate:!1,isRedownload:!1,isPreorder:!1,createsJobs:!0,preflightPackageUrl:d(n.preflightPackageUrl)};return Promise.resolve(r)})}),As.a()}]);
        