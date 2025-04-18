(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[185], {
    4175: function (e, t, n) {
        Promise.resolve().then(n.t.bind(n, 8161, 23)), Promise.resolve().then(n.t.bind(n, 8263, 23)), Promise.resolve().then(n.t.bind(n, 2778, 23)), Promise.resolve().then(n.bind(n, 2513))
    }, 2513: function (e, t, n) {
        "use strict";
        n.d(t, {
            ThemeProvider: function () {
                return o
            }
        });
        var a = n(7437), c = n(5922);

        function o(e) {
            let {children: t, ...n} = e;
            return (0, a.jsx)(c.f, {...n, children: t})
        }
    }, 2778: function () {
    }, 8161: function (e) {
        e.exports = {
            style: {
                fontFamily: "'__Instrument_Sans_bea8a4', '__Instrument_Sans_Fallback_bea8a4'",
                fontStyle: "normal"
            }, className: "__className_bea8a4", variable: "__variable_bea8a4"
        }
    }, 8263: function (e) {
        e.exports = {
            style: {
                fontFamily: "'__Instrument_Serif_bd7a7c', '__Instrument_Serif_Fallback_bd7a7c'",
                fontWeight: 400,
                fontStyle: "normal"
            }, className: "__className_bd7a7c", variable: "__variable_bd7a7c"
        }
    }, 5922: function (e, t, n) {
        "use strict";
        n.d(t, {
            F: function () {
                return i
            }, f: function () {
                return m
            }
        });
        var a = n(2265), c = ["light", "dark"], o = "(prefers-color-scheme: dark)", r = "undefined" == typeof window,
            l = a.createContext(void 0), s = {
                setTheme: e => {
                }, themes: []
            }, i = () => {
                var e;
                return null != (e = a.useContext(l)) ? e : s
            }, m = e => a.useContext(l) ? e.children : a.createElement(u, {...e}), d = ["light", "dark"], u = e => {
                let {
                        forcedTheme: t,
                        disableTransitionOnChange: n = !1,
                        enableSystem: r = !0,
                        enableColorScheme: s = !0,
                        storageKey: i = "theme",
                        themes: m = d,
                        defaultTheme: u = r ? "system" : "light",
                        attribute: y = "data-theme",
                        value: _,
                        children: g,
                        nonce: S
                    } = e, [p, k] = a.useState(() => f(i, u)), [w, C] = a.useState(() => f(i)), T = _ ? Object.values(_) : m,
                    E = a.useCallback(e => {
                        let t = e;
                        if (!t) return;
                        "system" === e && r && (t = v());
                        let a = _ ? _[t] : t, o = n ? b() : null, l = document.documentElement;
                        if ("class" === y ? (l.classList.remove(...T), a && l.classList.add(a)) : a ? l.setAttribute(y, a) : l.removeAttribute(y), s) {
                            let e = c.includes(u) ? u : null, n = c.includes(t) ? t : e;
                            l.style.colorScheme = n
                        }
                        null == o || o()
                    }, []), x = a.useCallback(e => {
                        let t = "function" == typeof e ? e(e) : e;
                        k(t);
                        try {
                            localStorage.setItem(i, t)
                        } catch (e) {
                        }
                    }, [t]), N = a.useCallback(e => {
                        C(v(e)), "system" === p && r && !t && E("system")
                    }, [p, t]);
                a.useEffect(() => {
                    let e = window.matchMedia(o);
                    return e.addListener(N), N(e), () => e.removeListener(N)
                }, [N]), a.useEffect(() => {
                    let e = e => {
                        e.key === i && x(e.newValue || u)
                    };
                    return window.addEventListener("storage", e), () => window.removeEventListener("storage", e)
                }, [x]), a.useEffect(() => {
                    E(null != t ? t : p)
                }, [t, p]);
                let I = a.useMemo(() => ({
                    theme: p,
                    setTheme: x,
                    forcedTheme: t,
                    resolvedTheme: "system" === p ? w : p,
                    themes: r ? [...m, "system"] : m,
                    systemTheme: r ? w : void 0
                }), [p, x, t, w, r, m]);
                return a.createElement(l.Provider, {value: I}, a.createElement(h, {
                    forcedTheme: t,
                    disableTransitionOnChange: n,
                    enableSystem: r,
                    enableColorScheme: s,
                    storageKey: i,
                    themes: m,
                    defaultTheme: u,
                    attribute: y,
                    value: _,
                    children: g,
                    attrs: T,
                    nonce: S
                }), g)
            }, h = a.memo(e => {
                let {
                        forcedTheme: t,
                        storageKey: n,
                        attribute: r,
                        enableSystem: l,
                        enableColorScheme: s,
                        defaultTheme: i,
                        value: m,
                        attrs: d,
                        nonce: u
                    } = e, h = "system" === i,
                    f = "class" === r ? "var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e => "'".concat(e, "'")).join(","), ")"), ";") : "var d=document.documentElement,n='".concat(r, "',s='setAttribute';"),
                    b = s ? (c.includes(i) ? i : null) ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i, "'") : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
                    v = function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], a = m ? m[e] : e,
                            o = t ? e + "|| ''" : "'".concat(a, "'"), l = "";
                        return s && n && !t && c.includes(e) && (l += "d.style.colorScheme = '".concat(e, "';")), "class" === r ? t || a ? l += "c.add(".concat(o, ")") : l += "null" : a && (l += "d[s](n,".concat(o, ")")), l
                    },
                    y = t ? "!function(){".concat(f).concat(v(t), "}()") : l ? "!function(){try{".concat(f, "var e=localStorage.getItem('").concat(n, "');if('system'===e||(!e&&").concat(h, ")){var t='").concat(o, "',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"), "}else{").concat(v("light"), "}}else if(e){").concat(m ? "var x=".concat(JSON.stringify(m), ";") : "").concat(v(m ? "x[e]" : "e", !0), "}").concat(h ? "" : "else{" + v(i, !1, !1) + "}").concat(b, "}catch(e){}}()") : "!function(){try{".concat(f, "var e=localStorage.getItem('").concat(n, "');if(e){").concat(m ? "var x=".concat(JSON.stringify(m), ";") : "").concat(v(m ? "x[e]" : "e", !0), "}else{").concat(v(i, !1, !1), ";}").concat(b, "}catch(t){}}();");
                return a.createElement("script", {nonce: u, dangerouslySetInnerHTML: {__html: y}})
            }), f = (e, t) => {
                let n;
                if (!r) {
                    try {
                        n = localStorage.getItem(e) || void 0
                    } catch (e) {
                    }
                    return n || t
                }
            }, b = () => {
                let e = document.createElement("style");
                return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), () => {
                    window.getComputedStyle(document.body), setTimeout(() => {
                        document.head.removeChild(e)
                    }, 1)
                }
            }, v = e => (e || (e = window.matchMedia(o)), e.matches ? "dark" : "light")
    }
}, function (e) {
    e.O(0, [922, 971, 117, 744], function () {
        return e(e.s = 4175)
    }), _N_E = e.O()
}]);