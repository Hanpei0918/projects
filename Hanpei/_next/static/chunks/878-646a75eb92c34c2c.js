"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[878], {
    3145: function (t, e, i) {
        i.d(e, {
            default: function () {
                return r.a
            }
        });
        var n = i(8461), r = i.n(n)
    }, 7648: function (t, e, i) {
        i.d(e, {
            default: function () {
                return r.a
            }
        });
        var n = i(2972), r = i.n(n)
    }, 5449: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "addLocale", {
            enumerable: !0,
            get: function () {
                return n
            }
        }), i(8521);
        let n = function (t) {
            for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
            return t
        };
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {value: !0}), Object.assign(e.default, e), t.exports = e.default)
    }, 6958: function (t, e, i) {
        function n(t, e, i, n) {
            return !1
        }

        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "getDomainLocale", {
            enumerable: !0,
            get: function () {
                return n
            }
        }), i(8521), ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {value: !0}), Object.assign(e.default, e), t.exports = e.default)
    }, 5878: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "Image", {
            enumerable: !0,
            get: function () {
                return x
            }
        });
        let n = i(7043), r = i(3099), s = i(7437), o = r._(i(2265)), a = n._(i(4887)), l = n._(i(8293)), u = i(5346),
            h = i(128), c = i(2589);
        i(1765);
        let d = i(5523), f = n._(i(5084)), p = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/Hanpei/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0
        };

        function m(t, e, i, n, r, s, o) {
            let a = null == t ? void 0 : t.src;
            t && t["data-loaded-src"] !== a && (t["data-loaded-src"] = a, ("decode" in t ? t.decode() : Promise.resolve()).catch(() => {
            }).then(() => {
                if (t.parentElement && t.isConnected) {
                    if ("empty" !== e && r(!0), null == i ? void 0 : i.current) {
                        let e = new Event("load");
                        Object.defineProperty(e, "target", {writable: !1, value: t});
                        let n = !1, r = !1;
                        i.current({
                            ...e,
                            nativeEvent: e,
                            currentTarget: t,
                            target: t,
                            isDefaultPrevented: () => n,
                            isPropagationStopped: () => r,
                            persist: () => {
                            },
                            preventDefault: () => {
                                n = !0, e.preventDefault()
                            },
                            stopPropagation: () => {
                                r = !0, e.stopPropagation()
                            }
                        })
                    }
                    (null == n ? void 0 : n.current) && n.current(t)
                }
            }))
        }

        function g(t) {
            return o.use ? {fetchPriority: t} : {fetchpriority: t}
        }

        "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let v = (0, o.forwardRef)((t, e) => {
            let {
                src: i,
                srcSet: n,
                sizes: r,
                height: a,
                width: l,
                decoding: u,
                className: h,
                style: c,
                fetchPriority: d,
                placeholder: f,
                loading: p,
                unoptimized: v,
                fill: y,
                onLoadRef: x,
                onLoadingCompleteRef: b,
                setBlurComplete: P,
                setShowAltText: w,
                sizesInput: S,
                onLoad: T,
                onError: A,
                ...E
            } = t;
            return (0, s.jsx)("img", {
                ...E, ...g(d),
                loading: p,
                width: l,
                height: a,
                decoding: u,
                "data-nimg": y ? "fill" : "1",
                className: h,
                style: c,
                sizes: r,
                srcSet: n,
                src: i,
                ref: (0, o.useCallback)(t => {
                    e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)), t && (A && (t.src = t.src), t.complete && m(t, f, x, b, P, v, S))
                }, [i, f, x, b, P, A, v, S, e]),
                onLoad: t => {
                    m(t.currentTarget, f, x, b, P, v, S)
                },
                onError: t => {
                    w(!0), "empty" !== f && P(!0), A && A(t)
                }
            })
        });

        function y(t) {
            let {isAppRouter: e, imgAttributes: i} = t, n = {
                as: "image",
                imageSrcSet: i.srcSet,
                imageSizes: i.sizes,
                crossOrigin: i.crossOrigin,
                referrerPolicy: i.referrerPolicy, ...g(i.fetchPriority)
            };
            return e && a.default.preload ? (a.default.preload(i.src, n), null) : (0, s.jsx)(l.default, {
                children: (0, s.jsx)("link", {
                    rel: "preload",
                    href: i.srcSet ? void 0 : i.src, ...n
                }, "__nimg-" + i.src + i.srcSet + i.sizes)
            })
        }

        let x = (0, o.forwardRef)((t, e) => {
            let i = (0, o.useContext)(d.RouterContext), n = (0, o.useContext)(c.ImageConfigContext),
                r = (0, o.useMemo)(() => {
                    var t;
                    let e = p || n || h.imageConfigDefault,
                        i = [...e.deviceSizes, ...e.imageSizes].sort((t, e) => t - e),
                        r = e.deviceSizes.sort((t, e) => t - e),
                        s = null == (t = e.qualities) ? void 0 : t.sort((t, e) => t - e);
                    return {...e, allSizes: i, deviceSizes: r, qualities: s}
                }, [n]), {onLoad: a, onLoadingComplete: l} = t, m = (0, o.useRef)(a);
            (0, o.useEffect)(() => {
                m.current = a
            }, [a]);
            let g = (0, o.useRef)(l);
            (0, o.useEffect)(() => {
                g.current = l
            }, [l]);
            let [x, b] = (0, o.useState)(!1), [P, w] = (0, o.useState)(!1), {
                props: S,
                meta: T
            } = (0, u.getImgProps)(t, {defaultLoader: f.default, imgConf: r, blurComplete: x, showAltText: P});
            return (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(v, {
                    ...S,
                    unoptimized: T.unoptimized,
                    placeholder: T.placeholder,
                    fill: T.fill,
                    onLoadRef: m,
                    onLoadingCompleteRef: g,
                    setBlurComplete: b,
                    setShowAltText: w,
                    sizesInput: t.sizes,
                    ref: e
                }), T.priority ? (0, s.jsx)(y, {isAppRouter: !i, imgAttributes: S}) : null]
            })
        });
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {value: !0}), Object.assign(e.default, e), t.exports = e.default)
    }, 2972: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
                return b
            }
        });
        let n = i(7043), r = i(7437), s = n._(i(2265)), o = i(5246), a = i(3552), l = i(7497), u = i(3987), h = i(5449),
            c = i(5523), d = i(1956), f = i(6081), p = i(6958), m = i(1634), g = i(4673), v = new Set;

        function y(t, e, i, n, r, s) {
            if ("undefined" != typeof window && (s || (0, a.isLocalURL)(e))) {
                if (!n.bypassPrefetchedCheck) {
                    let r = e + "%" + i + "%" + (void 0 !== n.locale ? n.locale : "locale" in t ? t.locale : void 0);
                    if (v.has(r)) return;
                    v.add(r)
                }
                (async () => s ? t.prefetch(e, r) : t.prefetch(e, i, n))().catch(t => {
                })
            }
        }

        function x(t) {
            return "string" == typeof t ? t : (0, l.formatUrl)(t)
        }

        let b = s.default.forwardRef(function (t, e) {
            let i, n;
            let {
                href: l,
                as: v,
                children: b,
                prefetch: P = null,
                passHref: w,
                replace: S,
                shallow: T,
                scroll: A,
                locale: E,
                onClick: M,
                onMouseEnter: C,
                onTouchStart: R,
                legacyBehavior: j = !1,
                ...k
            } = t;
            i = b, j && ("string" == typeof i || "number" == typeof i) && (i = (0, r.jsx)("a", {children: i}));
            let D = s.default.useContext(c.RouterContext), V = s.default.useContext(d.AppRouterContext),
                O = null != D ? D : V, L = !D, _ = !1 !== P,
                F = null === P ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL, {href: I, as: B} = s.default.useMemo(() => {
                    if (!D) {
                        let t = x(l);
                        return {href: t, as: v ? x(v) : t}
                    }
                    let [t, e] = (0, o.resolveHref)(D, l, !0);
                    return {href: t, as: v ? (0, o.resolveHref)(D, v) : e || t}
                }, [D, l, v]), N = s.default.useRef(I), U = s.default.useRef(B);
            j && (n = s.default.Children.only(i));
            let W = j ? n && "object" == typeof n && n.ref : e, [$, z, K] = (0, f.useIntersection)({rootMargin: "200px"}),
                Y = s.default.useCallback(t => {
                    (U.current !== B || N.current !== I) && (K(), U.current = B, N.current = I), $(t), W && ("function" == typeof W ? W(t) : "object" == typeof W && (W.current = t))
                }, [B, W, I, K, $]);
            s.default.useEffect(() => {
                O && z && _ && y(O, I, B, {locale: E}, {kind: F}, L)
            }, [B, I, z, E, _, null == D ? void 0 : D.locale, O, L, F]);
            let X = {
                ref: Y, onClick(t) {
                    j || "function" != typeof M || M(t), j && n.props && "function" == typeof n.props.onClick && n.props.onClick(t), O && !t.defaultPrevented && function (t, e, i, n, r, o, l, u, h) {
                        let {nodeName: c} = t.currentTarget;
                        if ("A" === c.toUpperCase() && (function (t) {
                            let e = t.currentTarget.getAttribute("target");
                            return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                        }(t) || !h && !(0, a.isLocalURL)(i))) return;
                        t.preventDefault();
                        let d = () => {
                            let t = null == l || l;
                            "beforePopState" in e ? e[r ? "replace" : "push"](i, n, {
                                shallow: o,
                                locale: u,
                                scroll: t
                            }) : e[r ? "replace" : "push"](n || i, {scroll: t})
                        };
                        h ? s.default.startTransition(d) : d()
                    }(t, O, I, B, S, T, A, E, L)
                }, onMouseEnter(t) {
                    j || "function" != typeof C || C(t), j && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(t), O && (_ || !L) && y(O, I, B, {
                        locale: E,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {kind: F}, L)
                }, onTouchStart: function (t) {
                    j || "function" != typeof R || R(t), j && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(t), O && (_ || !L) && y(O, I, B, {
                        locale: E,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {kind: F}, L)
                }
            };
            if ((0, u.isAbsoluteUrl)(B)) X.href = B; else if (!j || w || "a" === n.type && !("href" in n.props)) {
                let t = void 0 !== E ? E : null == D ? void 0 : D.locale,
                    e = (null == D ? void 0 : D.isLocaleDomain) && (0, p.getDomainLocale)(B, t, null == D ? void 0 : D.locales, null == D ? void 0 : D.domainLocales);
                X.href = e || (0, m.addBasePath)((0, h.addLocale)(B, t, null == D ? void 0 : D.defaultLocale))
            }
            return j ? s.default.cloneElement(n, X) : (0, r.jsx)("a", {...k, ...X, children: i})
        });
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {value: !0}), Object.assign(e.default, e), t.exports = e.default)
    }, 3515: function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0}), function (t, e) {
            for (var i in e) Object.defineProperty(t, i, {enumerable: !0, get: e[i]})
        }(e, {
            cancelIdleCallback: function () {
                return n
            }, requestIdleCallback: function () {
                return i
            }
        });
        let i = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (t) {
                let e = Date.now();
                return self.setTimeout(function () {
                    t({
                        didTimeout: !1, timeRemaining: function () {
                            return Math.max(0, 50 - (Date.now() - e))
                        }
                    })
                }, 1)
            },
            n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (t) {
                return clearTimeout(t)
            };
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {value: !0}), Object.assign(e.default, e), t.exports = e.default)
    }, 5246: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "resolveHref", {
            enumerable: !0,
            get: function () {
                return c
            }
        });
        let n = i(8637), r = i(7497), s = i(7053), o = i(3987), a = i(8521), l = i(3552), u = i(6279), h = i(7205);

        function c(t, e, i) {
            let c;
            let d = "string" == typeof e ? e : (0, r.formatWithValidation)(e), f = d.match(/^[a-zA-Z]{1,}:\/\//),
                p = f ? d.slice(f[0].length) : d;
            if ((p.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
                console.error("Invalid href '" + d + "' passed to next/router in page: '" + t.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                let e = (0, o.normalizeRepeatedSlashes)(p);
                d = (f ? f[0] : "") + e
            }
            if (!(0, l.isLocalURL)(d)) return i ? [d] : d;
            try {
                c = new URL(d.startsWith("#") ? t.asPath : t.pathname, "http://n")
            } catch (t) {
                c = new URL("/", "http://n")
            }
            try {
                let t = new URL(d, c);
                t.pathname = (0, a.normalizePathTrailingSlash)(t.pathname);
                let e = "";
                if ((0, u.isDynamicRoute)(t.pathname) && t.searchParams && i) {
                    let i = (0, n.searchParamsToUrlQuery)(t.searchParams), {
                        result: o,
                        params: a
                    } = (0, h.interpolateAs)(t.pathname, t.pathname, i);
                    o && (e = (0, r.formatWithValidation)({pathname: o, hash: t.hash, query: (0, s.omit)(i, a)}))
                }
                let o = t.origin === c.origin ? t.href.slice(t.origin.length) : t.href;
                return i ? [o, e || o] : o
            } catch (t) {
                return i ? [d] : d
            }
        }

        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {value: !0}), Object.assign(e.default, e), t.exports = e.default)
    }, 6081: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "useIntersection", {
            enumerable: !0,
            get: function () {
                return l
            }
        });
        let n = i(2265), r = i(3515), s = "function" == typeof IntersectionObserver, o = new Map, a = [];

        function l(t) {
            let {rootRef: e, rootMargin: i, disabled: l} = t, u = l || !s, [h, c] = (0, n.useState)(!1),
                d = (0, n.useRef)(null), f = (0, n.useCallback)(t => {
                    d.current = t
                }, []);
            return (0, n.useEffect)(() => {
                if (s) {
                    if (u || h) return;
                    let t = d.current;
                    if (t && t.tagName) return function (t, e, i) {
                        let {id: n, observer: r, elements: s} = function (t) {
                            let e;
                            let i = {root: t.root || null, margin: t.rootMargin || ""},
                                n = a.find(t => t.root === i.root && t.margin === i.margin);
                            if (n && (e = o.get(n))) return e;
                            let r = new Map;
                            return e = {
                                id: i, observer: new IntersectionObserver(t => {
                                    t.forEach(t => {
                                        let e = r.get(t.target), i = t.isIntersecting || t.intersectionRatio > 0;
                                        e && i && e(i)
                                    })
                                }, t), elements: r
                            }, a.push(i), o.set(i, e), e
                        }(i);
                        return s.set(t, e), r.observe(t), function () {
                            if (s.delete(t), r.unobserve(t), 0 === s.size) {
                                r.disconnect(), o.delete(n);
                                let t = a.findIndex(t => t.root === n.root && t.margin === n.margin);
                                t > -1 && a.splice(t, 1)
                            }
                        }
                    }(t, t => t && c(t), {root: null == e ? void 0 : e.current, rootMargin: i})
                } else if (!h) {
                    let t = (0, r.requestIdleCallback)(() => c(!0));
                    return () => (0, r.cancelIdleCallback)(t)
                }
            }, [u, i, e, h, d.current]), [f, h, (0, n.useCallback)(() => {
                c(!1)
            }, [])]
        }

        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {value: !0}), Object.assign(e.default, e), t.exports = e.default)
    }, 1436: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "AmpStateContext", {
            enumerable: !0,
            get: function () {
                return n
            }
        });
        let n = i(7043)._(i(2265)).default.createContext({})
    }, 6247: function (t, e) {
        function i(t) {
            let {ampFirst: e = !1, hybrid: i = !1, hasQuery: n = !1} = void 0 === t ? {} : t;
            return e || i && n
        }

        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "isInAmpMode", {
            enumerable: !0,
            get: function () {
                return i
            }
        })
    }, 42: function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "escapeStringRegexp", {
            enumerable: !0,
            get: function () {
                return r
            }
        });
        let i = /[|\\{}()[\]^$+*?.-]/, n = /[|\\{}()[\]^$+*?.-]/g;

        function r(t) {
            return i.test(t) ? t.replace(n, "\\$&") : t
        }
    }, 5346: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "getImgProps", {
            enumerable: !0,
            get: function () {
                return a
            }
        }), i(1765);
        let n = i(6496), r = i(128);

        function s(t) {
            return void 0 !== t.default
        }

        function o(t) {
            return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
        }

        function a(t, e) {
            var i, a;
            let l, u, h, {
                src: c,
                sizes: d,
                unoptimized: f = !1,
                priority: p = !1,
                loading: m,
                className: g,
                quality: v,
                width: y,
                height: x,
                fill: b = !1,
                style: P,
                overrideSrc: w,
                onLoad: S,
                onLoadingComplete: T,
                placeholder: A = "empty",
                blurDataURL: E,
                fetchPriority: M,
                decoding: C = "async",
                layout: R,
                objectFit: j,
                objectPosition: k,
                lazyBoundary: D,
                lazyRoot: V,
                ...O
            } = t, {imgConf: L, showAltText: _, blurComplete: F, defaultLoader: I} = e, B = L || r.imageConfigDefault;
            if ("allSizes" in B) l = B; else {
                let t = [...B.deviceSizes, ...B.imageSizes].sort((t, e) => t - e),
                    e = B.deviceSizes.sort((t, e) => t - e),
                    n = null == (i = B.qualities) ? void 0 : i.sort((t, e) => t - e);
                l = {...B, allSizes: t, deviceSizes: e, qualities: n}
            }
            if (void 0 === I) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
            let N = O.loader || I;
            delete O.loader, delete O.srcSet;
            let U = "__next_img_default" in N;
            if (U) {
                if ("custom" === l.loader) throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let t = N;
                N = e => {
                    let {config: i, ...n} = e;
                    return t(n)
                }
            }
            if (R) {
                "fill" === R && (b = !0);
                let t = {intrinsic: {maxWidth: "100%", height: "auto"}, responsive: {width: "100%", height: "auto"}}[R];
                t && (P = {...P, ...t});
                let e = {responsive: "100vw", fill: "100vw"}[R];
                e && !d && (d = e)
            }
            let W = "", $ = o(y), z = o(x);
            if ("object" == typeof (a = c) && (s(a) || void 0 !== a.src)) {
                let t = s(c) ? c.default : c;
                if (!t.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                if (!t.height || !t.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                if (u = t.blurWidth, h = t.blurHeight, E = E || t.blurDataURL, W = t.src, !b) {
                    if ($ || z) {
                        if ($ && !z) {
                            let e = $ / t.width;
                            z = Math.round(t.height * e)
                        } else if (!$ && z) {
                            let e = z / t.height;
                            $ = Math.round(t.width * e)
                        }
                    } else $ = t.width, z = t.height
                }
            }
            let K = !p && ("lazy" === m || void 0 === m);
            (!(c = "string" == typeof c ? c : W) || c.startsWith("data:") || c.startsWith("blob:")) && (f = !0, K = !1), l.unoptimized && (f = !0), U && c.endsWith(".svg") && !l.dangerouslyAllowSVG && (f = !0), p && (M = "high");
            let Y = o(v), X = Object.assign(b ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: j,
                    objectPosition: k
                } : {}, _ ? {} : {color: "transparent"}, P),
                q = F || "empty" === A ? null : "blur" === A ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                    widthInt: $,
                    heightInt: z,
                    blurWidth: u,
                    blurHeight: h,
                    blurDataURL: E || "",
                    objectFit: X.objectFit
                }) + '")' : 'url("' + A + '")', H = q ? {
                    backgroundSize: X.objectFit || "cover",
                    backgroundPosition: X.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: q
                } : {}, Z = function (t) {
                    let {config: e, src: i, unoptimized: n, width: r, quality: s, sizes: o, loader: a} = t;
                    if (n) return {src: i, srcSet: void 0, sizes: void 0};
                    let {widths: l, kind: u} = function (t, e, i) {
                        let {deviceSizes: n, allSizes: r} = t;
                        if (i) {
                            let t = /(^|\s)(1?\d?\d)vw/g, e = [];
                            for (let n; n = t.exec(i); n) e.push(parseInt(n[2]));
                            if (e.length) {
                                let t = .01 * Math.min(...e);
                                return {widths: r.filter(e => e >= n[0] * t), kind: "w"}
                            }
                            return {widths: r, kind: "w"}
                        }
                        return "number" != typeof e ? {
                            widths: n,
                            kind: "w"
                        } : {widths: [...new Set([e, 2 * e].map(t => r.find(e => e >= t) || r[r.length - 1]))], kind: "x"}
                    }(e, r, o), h = l.length - 1;
                    return {
                        sizes: o || "w" !== u ? o : "100vw",
                        srcSet: l.map((t, n) => a({
                            config: e,
                            src: i,
                            quality: s,
                            width: t
                        }) + " " + ("w" === u ? t : n + 1) + u).join(", "),
                        src: a({config: e, src: i, quality: s, width: l[h]})
                    }
                }({config: l, src: c, unoptimized: f, width: $, quality: Y, sizes: d, loader: N});
            return {
                props: {
                    ...O,
                    loading: K ? "lazy" : m,
                    fetchPriority: M,
                    width: $,
                    height: z,
                    decoding: C,
                    className: g,
                    style: {...X, ...H},
                    sizes: Z.sizes,
                    srcSet: Z.srcSet,
                    src: w || Z.src
                }, meta: {unoptimized: f, priority: p, placeholder: A, fill: b}
            }
        }
    }, 8293: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), function (t, e) {
            for (var i in e) Object.defineProperty(t, i, {enumerable: !0, get: e[i]})
        }(e, {
            default: function () {
                return m
            }, defaultHead: function () {
                return c
            }
        });
        let n = i(7043), r = i(3099), s = i(7437), o = r._(i(2265)), a = n._(i(7421)), l = i(1436), u = i(8701),
            h = i(6247);

        function c(t) {
            void 0 === t && (t = !1);
            let e = [(0, s.jsx)("meta", {charSet: "utf-8"})];
            return t || e.push((0, s.jsx)("meta", {name: "viewport", content: "width=device-width"})), e
        }

        function d(t, e) {
            return "string" == typeof e || "number" == typeof e ? t : e.type === o.default.Fragment ? t.concat(o.default.Children.toArray(e.props.children).reduce((t, e) => "string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
        }

        i(1765);
        let f = ["name", "httpEquiv", "charSet", "itemProp"];

        function p(t, e) {
            let {inAmpMode: i} = e;
            return t.reduce(d, []).reverse().concat(c(i).reverse()).filter(function () {
                let t = new Set, e = new Set, i = new Set, n = {};
                return r => {
                    let s = !0, o = !1;
                    if (r.key && "number" != typeof r.key && r.key.indexOf("$") > 0) {
                        o = !0;
                        let e = r.key.slice(r.key.indexOf("$") + 1);
                        t.has(e) ? s = !1 : t.add(e)
                    }
                    switch (r.type) {
                        case"title":
                        case"base":
                            e.has(r.type) ? s = !1 : e.add(r.type);
                            break;
                        case"meta":
                            for (let t = 0, e = f.length; t < e; t++) {
                                let e = f[t];
                                if (r.props.hasOwnProperty(e)) {
                                    if ("charSet" === e) i.has(e) ? s = !1 : i.add(e); else {
                                        let t = r.props[e], i = n[e] || new Set;
                                        ("name" !== e || !o) && i.has(t) ? s = !1 : (i.add(t), n[e] = i)
                                    }
                                }
                            }
                    }
                    return s
                }
            }()).reverse().map((t, e) => {
                let n = t.key || e;
                if (!i && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e => t.props.href.startsWith(e))) {
                    let e = {...t.props || {}};
                    return e["data-href"] = e.href, e.href = void 0, e["data-optimized-fonts"] = !0, o.default.cloneElement(t, e)
                }
                return o.default.cloneElement(t, {key: n})
            })
        }

        let m = function (t) {
            let {children: e} = t, i = (0, o.useContext)(l.AmpStateContext),
                n = (0, o.useContext)(u.HeadManagerContext);
            return (0, s.jsx)(a.default, {
                reduceComponentsToState: p,
                headManager: n,
                inAmpMode: (0, h.isInAmpMode)(i),
                children: e
            })
        };
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {value: !0}), Object.assign(e.default, e), t.exports = e.default)
    }, 6496: function (t, e) {
        function i(t) {
            let {widthInt: e, heightInt: i, blurWidth: n, blurHeight: r, blurDataURL: s, objectFit: o} = t,
                a = n ? 40 * n : e, l = r ? 40 * r : i, u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
        }

        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "getImageBlurSvg", {
            enumerable: !0,
            get: function () {
                return i
            }
        })
    }, 2589: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "ImageConfigContext", {
            enumerable: !0,
            get: function () {
                return s
            }
        });
        let n = i(7043)._(i(2265)), r = i(128), s = n.default.createContext(r.imageConfigDefault)
    }, 128: function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0}), function (t, e) {
            for (var i in e) Object.defineProperty(t, i, {enumerable: !0, get: e[i]})
        }(e, {
            VALID_LOADERS: function () {
                return i
            }, imageConfigDefault: function () {
                return n
            }
        });
        let i = ["default", "imgix", "cloudinary", "akamai", "custom"], n = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "inline",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: void 0,
            unoptimized: !1
        }
    }, 8461: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), function (t, e) {
            for (var i in e) Object.defineProperty(t, i, {enumerable: !0, get: e[i]})
        }(e, {
            default: function () {
                return l
            }, getImageProps: function () {
                return a
            }
        });
        let n = i(7043), r = i(5346), s = i(5878), o = n._(i(5084));

        function a(t) {
            let {props: e} = (0, r.getImgProps)(t, {
                defaultLoader: o.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/Hanpei/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                }
            });
            for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
            return {props: e}
        }

        let l = s.Image
    }, 5084: function (t, e) {
        function i(t) {
            var e;
            let {config: i, src: n, width: r, quality: s} = t,
                o = s || (null == (e = i.qualities) ? void 0 : e.reduce((t, e) => Math.abs(e - 75) < Math.abs(t - 75) ? e : t)) || 75;
            return i.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + o
        }

        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
                return n
            }
        }), i.__next_img_default = !0;
        let n = i
    }, 5523: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "RouterContext", {
            enumerable: !0,
            get: function () {
                return n
            }
        });
        let n = i(7043)._(i(2265)).default.createContext(null)
    }, 7497: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), function (t, e) {
            for (var i in e) Object.defineProperty(t, i, {enumerable: !0, get: e[i]})
        }(e, {
            formatUrl: function () {
                return s
            }, formatWithValidation: function () {
                return a
            }, urlObjectKeys: function () {
                return o
            }
        });
        let n = i(3099)._(i(8637)), r = /https?|ftp|gopher|file/;

        function s(t) {
            let {auth: e, hostname: i} = t, s = t.protocol || "", o = t.pathname || "", a = t.hash || "",
                l = t.query || "", u = !1;
            e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : "", t.host ? u = e + t.host : i && (u = e + (~i.indexOf(":") ? "[" + i + "]" : i), t.port && (u += ":" + t.port)), l && "object" == typeof l && (l = String(n.urlQueryToSearchParams(l)));
            let h = t.search || l && "?" + l || "";
            return s && !s.endsWith(":") && (s += ":"), t.slashes || (!s || r.test(s)) && !1 !== u ? (u = "//" + (u || ""), o && "/" !== o[0] && (o = "/" + o)) : u || (u = ""), a && "#" !== a[0] && (a = "#" + a), h && "?" !== h[0] && (h = "?" + h), "" + s + u + (o = o.replace(/[?#]/g, encodeURIComponent)) + (h = h.replace("#", "%23")) + a
        }

        let o = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

        function a(t) {
            return s(t)
        }
    }, 6279: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), function (t, e) {
            for (var i in e) Object.defineProperty(t, i, {enumerable: !0, get: e[i]})
        }(e, {
            getSortedRoutes: function () {
                return n.getSortedRoutes
            }, isDynamicRoute: function () {
                return r.isDynamicRoute
            }
        });
        let n = i(4777), r = i(8104)
    }, 7205: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "interpolateAs", {
            enumerable: !0,
            get: function () {
                return s
            }
        });
        let n = i(4199), r = i(9964);

        function s(t, e, i) {
            let s = "", o = (0, r.getRouteRegex)(t), a = o.groups,
                l = (e !== t ? (0, n.getRouteMatcher)(o)(e) : "") || i;
            s = t;
            let u = Object.keys(a);
            return u.every(t => {
                let e = l[t] || "", {repeat: i, optional: n} = a[t], r = "[" + (i ? "..." : "") + t + "]";
                return n && (r = (e ? "" : "/") + "[" + r + "]"), i && !Array.isArray(e) && (e = [e]), (n || t in l) && (s = s.replace(r, i ? e.map(t => encodeURIComponent(t)).join("/") : encodeURIComponent(e)) || "/")
            }) || (s = ""), {params: u, result: s}
        }
    }, 8104: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "isDynamicRoute", {
            enumerable: !0,
            get: function () {
                return s
            }
        });
        let n = i(1182), r = /\/\[[^/]+?\](?=\/|$)/;

        function s(t) {
            return (0, n.isInterceptionRouteAppPath)(t) && (t = (0, n.extractInterceptionRouteInformation)(t).interceptedRoute), r.test(t)
        }
    }, 3552: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "isLocalURL", {
            enumerable: !0,
            get: function () {
                return s
            }
        });
        let n = i(3987), r = i(1283);

        function s(t) {
            if (!(0, n.isAbsoluteUrl)(t)) return !0;
            try {
                let e = (0, n.getLocationOrigin)(), i = new URL(t, e);
                return i.origin === e && (0, r.hasBasePath)(i.pathname)
            } catch (t) {
                return !1
            }
        }
    }, 7053: function (t, e) {
        function i(t, e) {
            let i = {};
            return Object.keys(t).forEach(n => {
                e.includes(n) || (i[n] = t[n])
            }), i
        }

        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "omit", {
            enumerable: !0,
            get: function () {
                return i
            }
        })
    }, 8637: function (t, e) {
        function i(t) {
            let e = {};
            return t.forEach((t, i) => {
                void 0 === e[i] ? e[i] = t : Array.isArray(e[i]) ? e[i].push(t) : e[i] = [e[i], t]
            }), e
        }

        function n(t) {
            return "string" != typeof t && ("number" != typeof t || isNaN(t)) && "boolean" != typeof t ? "" : String(t)
        }

        function r(t) {
            let e = new URLSearchParams;
            return Object.entries(t).forEach(t => {
                let [i, r] = t;
                Array.isArray(r) ? r.forEach(t => e.append(i, n(t))) : e.set(i, n(r))
            }), e
        }

        function s(t) {
            for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
            return i.forEach(e => {
                Array.from(e.keys()).forEach(e => t.delete(e)), e.forEach((e, i) => t.append(i, e))
            }), t
        }

        Object.defineProperty(e, "__esModule", {value: !0}), function (t, e) {
            for (var i in e) Object.defineProperty(t, i, {enumerable: !0, get: e[i]})
        }(e, {
            assign: function () {
                return s
            }, searchParamsToUrlQuery: function () {
                return i
            }, urlQueryToSearchParams: function () {
                return r
            }
        })
    }, 4199: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "getRouteMatcher", {
            enumerable: !0,
            get: function () {
                return r
            }
        });
        let n = i(3987);

        function r(t) {
            let {re: e, groups: i} = t;
            return t => {
                let r = e.exec(t);
                if (!r) return !1;
                let s = t => {
                    try {
                        return decodeURIComponent(t)
                    } catch (t) {
                        throw new n.DecodeError("failed to decode param")
                    }
                }, o = {};
                return Object.keys(i).forEach(t => {
                    let e = i[t], n = r[e.pos];
                    void 0 !== n && (o[t] = ~n.indexOf("/") ? n.split("/").map(t => s(t)) : e.repeat ? [s(n)] : s(n))
                }), o
            }
        }
    }, 9964: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), function (t, e) {
            for (var i in e) Object.defineProperty(t, i, {enumerable: !0, get: e[i]})
        }(e, {
            getNamedMiddlewareRegex: function () {
                return d
            }, getNamedRouteRegex: function () {
                return c
            }, getRouteRegex: function () {
                return l
            }, parseParameter: function () {
                return o
            }
        });
        let n = i(1182), r = i(42), s = i(6674);

        function o(t) {
            let e = t.startsWith("[") && t.endsWith("]");
            e && (t = t.slice(1, -1));
            let i = t.startsWith("...");
            return i && (t = t.slice(3)), {key: t, repeat: i, optional: e}
        }

        function a(t) {
            let e = (0, s.removeTrailingSlash)(t).slice(1).split("/"), i = {}, a = 1;
            return {
                parameterizedRoute: e.map(t => {
                    let e = n.INTERCEPTION_ROUTE_MARKERS.find(e => t.startsWith(e)), s = t.match(/\[((?:\[.*\])|.+)\]/);
                    if (e && s) {
                        let {key: t, optional: n, repeat: l} = o(s[1]);
                        return i[t] = {
                            pos: a++,
                            repeat: l,
                            optional: n
                        }, "/" + (0, r.escapeStringRegexp)(e) + "([^/]+?)"
                    }
                    if (!s) return "/" + (0, r.escapeStringRegexp)(t);
                    {
                        let {key: t, repeat: e, optional: n} = o(s[1]);
                        return i[t] = {pos: a++, repeat: e, optional: n}, e ? n ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                    }
                }).join(""), groups: i
            }
        }

        function l(t) {
            let {parameterizedRoute: e, groups: i} = a(t);
            return {re: RegExp("^" + e + "(?:/)?$"), groups: i}
        }

        function u(t) {
            let {interceptionMarker: e, getSafeRouteKey: i, segment: n, routeKeys: s, keyPrefix: a} = t, {
                key: l,
                optional: u,
                repeat: h
            } = o(n), c = l.replace(/\W/g, "");
            a && (c = "" + a + c);
            let d = !1;
            (0 === c.length || c.length > 30) && (d = !0), isNaN(parseInt(c.slice(0, 1))) || (d = !0), d && (c = i()), a ? s[c] = "" + a + l : s[c] = l;
            let f = e ? (0, r.escapeStringRegexp)(e) : "";
            return h ? u ? "(?:/" + f + "(?<" + c + ">.+?))?" : "/" + f + "(?<" + c + ">.+?)" : "/" + f + "(?<" + c + ">[^/]+?)"
        }

        function h(t, e) {
            let i;
            let o = (0, s.removeTrailingSlash)(t).slice(1).split("/"), a = (i = 0, () => {
                let t = "", e = ++i;
                for (; e > 0;) t += String.fromCharCode(97 + (e - 1) % 26), e = Math.floor((e - 1) / 26);
                return t
            }), l = {};
            return {
                namedParameterizedRoute: o.map(t => {
                    let i = n.INTERCEPTION_ROUTE_MARKERS.some(e => t.startsWith(e)), s = t.match(/\[((?:\[.*\])|.+)\]/);
                    if (i && s) {
                        let [i] = t.split(s[0]);
                        return u({
                            getSafeRouteKey: a,
                            interceptionMarker: i,
                            segment: s[1],
                            routeKeys: l,
                            keyPrefix: e ? "nxtI" : void 0
                        })
                    }
                    return s ? u({
                        getSafeRouteKey: a,
                        segment: s[1],
                        routeKeys: l,
                        keyPrefix: e ? "nxtP" : void 0
                    }) : "/" + (0, r.escapeStringRegexp)(t)
                }).join(""), routeKeys: l
            }
        }

        function c(t, e) {
            let i = h(t, e);
            return {...l(t), namedRegex: "^" + i.namedParameterizedRoute + "(?:/)?$", routeKeys: i.routeKeys}
        }

        function d(t, e) {
            let {parameterizedRoute: i} = a(t), {catchAll: n = !0} = e;
            if ("/" === i) return {namedRegex: "^/" + (n ? ".*" : "") + "$"};
            let {namedParameterizedRoute: r} = h(t, !1);
            return {namedRegex: "^" + r + (n ? "(?:(/.*)?)" : "") + "$"}
        }
    }, 4777: function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "getSortedRoutes", {
            enumerable: !0,
            get: function () {
                return n
            }
        });

        class i {
            insert(t) {
                this._insert(t.split("/").filter(Boolean), [], !1)
            }

            smoosh() {
                return this._smoosh()
            }

            _smoosh(t) {
                void 0 === t && (t = "/");
                let e = [...this.children.keys()].sort();
                null !== this.slugName && e.splice(e.indexOf("[]"), 1), null !== this.restSlugName && e.splice(e.indexOf("[...]"), 1), null !== this.optionalRestSlugName && e.splice(e.indexOf("[[...]]"), 1);
                let i = e.map(e => this.children.get(e)._smoosh("" + t + e + "/")).reduce((t, e) => [...t, ...e], []);
                if (null !== this.slugName && i.push(...this.children.get("[]")._smoosh(t + "[" + this.slugName + "]/")), !this.placeholder) {
                    let e = "/" === t ? "/" : t.slice(0, -1);
                    if (null != this.optionalRestSlugName) throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + e + '" and "' + e + "[[..." + this.optionalRestSlugName + ']]").');
                    i.unshift(e)
                }
                return null !== this.restSlugName && i.push(...this.children.get("[...]")._smoosh(t + "[..." + this.restSlugName + "]/")), null !== this.optionalRestSlugName && i.push(...this.children.get("[[...]]")._smoosh(t + "[[..." + this.optionalRestSlugName + "]]/")), i
            }

            _insert(t, e, n) {
                if (0 === t.length) {
                    this.placeholder = !1;
                    return
                }
                if (n) throw Error("Catch-all must be the last part of the URL.");
                let r = t[0];
                if (r.startsWith("[") && r.endsWith("]")) {
                    let i = r.slice(1, -1), o = !1;
                    if (i.startsWith("[") && i.endsWith("]") && (i = i.slice(1, -1), o = !0), i.startsWith("...") && (i = i.substring(3), n = !0), i.startsWith("[") || i.endsWith("]")) throw Error("Segment names may not start or end with extra brackets ('" + i + "').");
                    if (i.startsWith(".")) throw Error("Segment names may not start with erroneous periods ('" + i + "').");

                    function s(t, i) {
                        if (null !== t && t !== i) throw Error("You cannot use different slug names for the same dynamic path ('" + t + "' !== '" + i + "').");
                        e.forEach(t => {
                            if (t === i) throw Error('You cannot have the same slug name "' + i + '" repeat within a single dynamic path');
                            if (t.replace(/\W/g, "") === r.replace(/\W/g, "")) throw Error('You cannot have the slug names "' + t + '" and "' + i + '" differ only by non-word symbols within a single dynamic path')
                        }), e.push(i)
                    }

                    if (n) {
                        if (o) {
                            if (null != this.restSlugName) throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + t[0] + '" ).');
                            s(this.optionalRestSlugName, i), this.optionalRestSlugName = i, r = "[[...]]"
                        } else {
                            if (null != this.optionalRestSlugName) throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + t[0] + '").');
                            s(this.restSlugName, i), this.restSlugName = i, r = "[...]"
                        }
                    } else {
                        if (o) throw Error('Optional route parameters are not yet supported ("' + t[0] + '").');
                        s(this.slugName, i), this.slugName = i, r = "[]"
                    }
                }
                this.children.has(r) || this.children.set(r, new i), this.children.get(r)._insert(t.slice(1), e, n)
            }

            constructor() {
                this.placeholder = !0, this.children = new Map, this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null
            }
        }

        function n(t) {
            let e = new i;
            return t.forEach(t => e.insert(t)), e.smoosh()
        }
    }, 7421: function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
                return a
            }
        });
        let n = i(2265), r = "undefined" == typeof window, s = r ? () => {
        } : n.useLayoutEffect, o = r ? () => {
        } : n.useEffect;

        function a(t) {
            let {headManager: e, reduceComponentsToState: i} = t;

            function a() {
                if (e && e.mountedInstances) {
                    let r = n.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                    e.updateHead(i(r, t))
                }
            }

            if (r) {
                var l;
                null == e || null == (l = e.mountedInstances) || l.add(t.children), a()
            }
            return s(() => {
                var i;
                return null == e || null == (i = e.mountedInstances) || i.add(t.children), () => {
                    var i;
                    null == e || null == (i = e.mountedInstances) || i.delete(t.children)
                }
            }), s(() => (e && (e._pendingUpdate = a), () => {
                e && (e._pendingUpdate = a)
            })), o(() => (e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null), () => {
                e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null)
            })), null
        }
    }, 3987: function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0}), function (t, e) {
            for (var i in e) Object.defineProperty(t, i, {enumerable: !0, get: e[i]})
        }(e, {
            DecodeError: function () {
                return p
            }, MiddlewareNotFoundError: function () {
                return y
            }, MissingStaticPage: function () {
                return v
            }, NormalizeError: function () {
                return m
            }, PageNotFoundError: function () {
                return g
            }, SP: function () {
                return d
            }, ST: function () {
                return f
            }, WEB_VITALS: function () {
                return i
            }, execOnce: function () {
                return n
            }, getDisplayName: function () {
                return l
            }, getLocationOrigin: function () {
                return o
            }, getURL: function () {
                return a
            }, isAbsoluteUrl: function () {
                return s
            }, isResSent: function () {
                return u
            }, loadGetInitialProps: function () {
                return c
            }, normalizeRepeatedSlashes: function () {
                return h
            }, stringifyError: function () {
                return x
            }
        });
        let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

        function n(t) {
            let e, i = !1;
            return function () {
                for (var n = arguments.length, r = Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                return i || (i = !0, e = t(...r)), e
            }
        }

        let r = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/, s = t => r.test(t);

        function o() {
            let {protocol: t, hostname: e, port: i} = window.location;
            return t + "//" + e + (i ? ":" + i : "")
        }

        function a() {
            let {href: t} = window.location, e = o();
            return t.substring(e.length)
        }

        function l(t) {
            return "string" == typeof t ? t : t.displayName || t.name || "Unknown"
        }

        function u(t) {
            return t.finished || t.headersSent
        }

        function h(t) {
            let e = t.split("?");
            return e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (e[1] ? "?" + e.slice(1).join("?") : "")
        }

        async function c(t, e) {
            let i = e.res || e.ctx && e.ctx.res;
            if (!t.getInitialProps) return e.ctx && e.Component ? {pageProps: await c(e.Component, e.ctx)} : {};
            let n = await t.getInitialProps(e);
            if (i && u(i)) return n;
            if (!n) throw Error('"' + l(t) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.');
            return n
        }

        let d = "undefined" != typeof performance,
            f = d && ["mark", "measure", "getEntriesByName"].every(t => "function" == typeof performance[t]);

        class p extends Error {
        }

        class m extends Error {
        }

        class g extends Error {
            constructor(t) {
                super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + t
            }
        }

        class v extends Error {
            constructor(t, e) {
                super(), this.message = "Failed to load static file for page: " + t + " " + e
            }
        }

        class y extends Error {
            constructor() {
                super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
            }
        }

        function x(t) {
            return JSON.stringify({message: t.message, stack: t.stack})
        }
    }, 9637: function (t, e, i) {
        i.d(e, {
            oO: function () {
                return s
            }
        });
        var n = i(2265), r = i(4252);

        function s(t = !0) {
            let e = (0, n.useContext)(r.O);
            if (null === e) return [!0, null];
            let {isPresent: i, onExitComplete: s, register: o} = e, a = (0, n.useId)();
            (0, n.useEffect)(() => {
                t && o(a)
            }, [t]);
            let l = (0, n.useCallback)(() => t && s && s(a), [a, s, t]);
            return !i && s ? [!1, l] : [!0]
        }
    }, 8881: function (t, e, i) {
        i.d(e, {
            p: function () {
                return n
            }
        });
        let n = (0, i(2265).createContext)({})
    }, 5750: function (t, e, i) {
        i.d(e, {
            _: function () {
                return n
            }
        });
        let n = (0, i(2265).createContext)({transformPagePoint: t => t, isStatic: !1, reducedMotion: "never"})
    }, 4252: function (t, e, i) {
        i.d(e, {
            O: function () {
                return n
            }
        });
        let n = (0, i(2265).createContext)(null)
    }, 5005: function (t, e, i) {
        i.d(e, {
            Z: function () {
                return s
            }
        });
        var n = i(4118);
        let r = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];

        function s(t, e) {
            let i = !1, s = !0, o = {delta: 0, timestamp: 0, isProcessing: !1}, a = () => i = !0,
                l = r.reduce((t, e) => (t[e] = function (t) {
                    let e = new Set, i = new Set, n = !1, r = !1, s = new WeakSet,
                        o = {delta: 0, timestamp: 0, isProcessing: !1};

                    function a(e) {
                        s.has(e) && (l.schedule(e), t()), e(o)
                    }

                    let l = {
                        schedule: (t, r = !1, o = !1) => {
                            let a = o && n ? e : i;
                            return r && s.add(t), a.has(t) || a.add(t), t
                        }, cancel: t => {
                            i.delete(t), s.delete(t)
                        }, process: t => {
                            if (o = t, n) {
                                r = !0;
                                return
                            }
                            n = !0, [e, i] = [i, e], e.forEach(a), e.clear(), n = !1, r && (r = !1, l.process(t))
                        }
                    };
                    return l
                }(a), t), {}), {read: u, resolveKeyframes: h, update: c, preRender: d, render: f, postRender: p} = l,
                m = () => {
                    let r = n.c.useManualTiming ? o.timestamp : performance.now();
                    i = !1, o.delta = s ? 1e3 / 60 : Math.max(Math.min(r - o.timestamp, 40), 1), o.timestamp = r, o.isProcessing = !0, u.process(o), h.process(o), c.process(o), d.process(o), f.process(o), p.process(o), o.isProcessing = !1, i && e && (s = !1, t(m))
                }, g = () => {
                    i = !0, s = !0, o.isProcessing || t(m)
                };
            return {
                schedule: r.reduce((t, e) => {
                    let n = l[e];
                    return t[e] = (t, e = !1, r = !1) => (i || g(), n.schedule(t, e, r)), t
                }, {}), cancel: t => {
                    for (let e = 0; e < r.length; e++) l[r[e]].cancel(t)
                }, state: o, steps: l
            }
        }
    }, 5414: function (t, e, i) {
        i.d(e, {
            Pn: function () {
                return s
            }, Wi: function () {
                return r
            }, frameData: function () {
                return o
            }, yL: function () {
                return a
            }
        });
        var n = i(6277);
        let {
            schedule: r,
            cancel: s,
            state: o,
            steps: a
        } = (0, i(5005).Z)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z, !0)
    }, 504: function (t, e, i) {
        let n;
        i.d(e, {
            X: function () {
                return a
            }
        });
        var r = i(4118), s = i(5414);

        function o() {
            n = void 0
        }

        let a = {
            now: () => (void 0 === n && a.set(s.frameData.isProcessing || r.c.useManualTiming ? s.frameData.timestamp : performance.now()), n),
            set: t => {
                n = t, queueMicrotask(o)
            }
        }
    }, 1840: function (t, e, i) {
        function n(t) {
            return null !== t && "object" == typeof t && "function" == typeof t.start
        }

        i.d(e, {
            E: function () {
                return rk
            }
        });
        let r = t => Array.isArray(t);

        function s(t, e) {
            if (!Array.isArray(e)) return !1;
            let i = e.length;
            if (i !== t.length) return !1;
            for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
            return !0
        }

        function o(t) {
            return "string" == typeof t || Array.isArray(t)
        }

        function a(t) {
            let e = [{}, {}];
            return null == t || t.values.forEach((t, i) => {
                e[0][i] = t.get(), e[1][i] = t.getVelocity()
            }), e
        }

        function l(t, e, i, n) {
            if ("function" == typeof e) {
                let [r, s] = a(n);
                e = e(void 0 !== i ? i : t.custom, r, s)
            }
            if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                let [r, s] = a(n);
                e = e(void 0 !== i ? i : t.custom, r, s)
            }
            return e
        }

        function u(t, e, i) {
            let n = t.getProps();
            return l(n, e, void 0 !== i ? i : n.custom, t)
        }

        let h = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
            c = ["initial", ...h];

        function d(t) {
            let e;
            return () => (void 0 === e && (e = t()), e)
        }

        let f = d(() => void 0 !== window.ScrollTimeline);

        class p {
            constructor(t) {
                this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
            }

            get finished() {
                return Promise.all(this.animations.map(t => "finished" in t ? t.finished : t))
            }

            getAll(t) {
                return this.animations[0][t]
            }

            setAll(t, e) {
                for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = e
            }

            attachTimeline(t, e) {
                let i = this.animations.map(i => f() && i.attachTimeline ? i.attachTimeline(t) : "function" == typeof e ? e(i) : void 0);
                return () => {
                    i.forEach((t, e) => {
                        t && t(), this.animations[e].stop()
                    })
                }
            }

            get time() {
                return this.getAll("time")
            }

            set time(t) {
                this.setAll("time", t)
            }

            get speed() {
                return this.getAll("speed")
            }

            set speed(t) {
                this.setAll("speed", t)
            }

            get startTime() {
                return this.getAll("startTime")
            }

            get duration() {
                let t = 0;
                for (let e = 0; e < this.animations.length; e++) t = Math.max(t, this.animations[e].duration);
                return t
            }

            runAll(t) {
                this.animations.forEach(e => e[t]())
            }

            flatten() {
                this.runAll("flatten")
            }

            play() {
                this.runAll("play")
            }

            pause() {
                this.runAll("pause")
            }

            cancel() {
                this.runAll("cancel")
            }

            complete() {
                this.runAll("complete")
            }
        }

        class m extends p {
            then(t, e) {
                return Promise.all(this.animations).then(t).catch(e)
            }
        }

        function g(t, e) {
            return t ? t[e] || t.default || t : void 0
        }

        function v(t) {
            let e = 0, i = t.next(e);
            for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
            return e >= 2e4 ? 1 / 0 : e
        }

        function y(t) {
            return "function" == typeof t
        }

        function x(t, e) {
            t.timeline = e, t.onfinish = null
        }

        let b = t => Array.isArray(t) && "number" == typeof t[0], P = {linearEasing: void 0}, w = function (t, e) {
            let i = d(t);
            return () => {
                var t;
                return null !== (t = P[e]) && void 0 !== t ? t : i()
            }
        }(() => {
            try {
                document.createElement("div").animate({opacity: 0}, {easing: "linear(0, 1)"})
            } catch (t) {
                return !1
            }
            return !0
        }, "linearEasing");
        var S, T, A, E = i(1645);
        let M = (t, e, i = 10) => {
            let n = "", r = Math.max(Math.round(e / i), 2);
            for (let e = 0; e < r; e++) n += t((0, E.Y)(0, r - 1, e)) + ", ";
            return `linear(${n.substring(0, n.length - 2)})`
        }, C = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`, R = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: C([0, .65, .55, 1]),
            circOut: C([.55, 0, 1, .45]),
            backIn: C([.31, .01, .66, -.59]),
            backOut: C([.33, 1.53, .69, .99])
        }, j = {x: !1, y: !1};

        function k(t, e) {
            let i = function (t, e, i) {
                if (t instanceof Element) return [t];
                if ("string" == typeof t) {
                    let e = document.querySelectorAll(t);
                    return e ? Array.from(e) : []
                }
                return Array.from(t)
            }(t), n = new AbortController;
            return [i, {passive: !0, ...e, signal: n.signal}, () => n.abort()]
        }

        function D(t) {
            return e => {
                "touch" === e.pointerType || j.x || j.y || t(e)
            }
        }

        let V = (t, e) => !!e && (t === e || V(t, e.parentElement)),
            O = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary,
            L = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]), _ = new WeakSet;

        function F(t) {
            return e => {
                "Enter" === e.key && t(e)
            }
        }

        function I(t, e) {
            t.dispatchEvent(new PointerEvent("pointer" + e, {isPrimary: !0, bubbles: !0}))
        }

        let B = (t, e) => {
            let i = t.currentTarget;
            if (!i) return;
            let n = F(() => {
                if (_.has(i)) return;
                I(i, "down");
                let t = F(() => {
                    I(i, "up")
                });
                i.addEventListener("keyup", t, e), i.addEventListener("blur", () => I(i, "cancel"), e)
            });
            i.addEventListener("keydown", n, e), i.addEventListener("blur", () => i.removeEventListener("keydown", n), e)
        };

        function N(t) {
            return O(t) && !(j.x || j.y)
        }

        let U = t => 1e3 * t, W = t => t / 1e3;
        var $ = i(6277);
        let z = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
            K = new Set(z), Y = new Set(["width", "height", "top", "left", "right", "bottom", ...z]),
            X = t => !!(t && "object" == typeof t && t.mix && t.toValue), q = t => r(t) ? t[t.length - 1] || 0 : t;
        var H = i(3078);
        let Z = t => !!(t && t.getVelocity);

        function G(t, e) {
            let i = t.getValue("willChange");
            if (Z(i) && i.add) return i.add(e)
        }

        let J = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Q = "data-" + J("framerAppearId");
        var tt = i(5414), te = i(4118);
        let ti = {current: !1}, tn = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

        function tr(t, e, i, n) {
            if (t === e && i === n) return $.Z;
            let r = e => (function (t, e, i, n, r) {
                let s, o;
                let a = 0;
                do (s = tn(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o; while (Math.abs(s) > 1e-7 && ++a < 12);
                return o
            })(e, 0, 1, t, i);
            return t => 0 === t || 1 === t ? t : tn(r(t), e, n)
        }

        let ts = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, to = t => e => 1 - t(1 - e),
            ta = tr(.33, 1.53, .69, .99), tl = to(ta), tu = ts(tl),
            th = t => (t *= 2) < 1 ? .5 * tl(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
            tc = t => 1 - Math.sin(Math.acos(t)), td = to(tc), tf = ts(tc), tp = t => /^0[^.\s]+$/u.test(t);
        var tm = i(3206), tg = i(6941);
        let tv = new Set(["brightness", "contrast", "saturate", "opacity"]);

        function ty(t) {
            let [e, i] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e) return t;
            let [n] = i.match(tg.K) || [];
            if (!n) return t;
            let r = i.replace(n, ""), s = tv.has(e) ? 1 : 0;
            return n !== i && (s *= 100), e + "(" + s + r + ")"
        }

        let tx = /\b([a-z-]*)\(.*?\)/gu, tb = {
            ...tm.P, getAnimatableNone: t => {
                let e = t.match(tx);
                return e ? e.map(ty).join(" ") : t
            }
        };
        var tP = i(3964), tw = i(4305), tS = i(7492);
        let tT = {
                borderWidth: tS.px,
                borderTopWidth: tS.px,
                borderRightWidth: tS.px,
                borderBottomWidth: tS.px,
                borderLeftWidth: tS.px,
                borderRadius: tS.px,
                radius: tS.px,
                borderTopLeftRadius: tS.px,
                borderTopRightRadius: tS.px,
                borderBottomRightRadius: tS.px,
                borderBottomLeftRadius: tS.px,
                width: tS.px,
                maxWidth: tS.px,
                height: tS.px,
                maxHeight: tS.px,
                top: tS.px,
                right: tS.px,
                bottom: tS.px,
                left: tS.px,
                padding: tS.px,
                paddingTop: tS.px,
                paddingRight: tS.px,
                paddingBottom: tS.px,
                paddingLeft: tS.px,
                margin: tS.px,
                marginTop: tS.px,
                marginRight: tS.px,
                marginBottom: tS.px,
                marginLeft: tS.px,
                backgroundPositionX: tS.px,
                backgroundPositionY: tS.px
            }, tA = {
                rotate: tS.RW,
                rotateX: tS.RW,
                rotateY: tS.RW,
                rotateZ: tS.RW,
                scale: tw.bA,
                scaleX: tw.bA,
                scaleY: tw.bA,
                scaleZ: tw.bA,
                skew: tS.RW,
                skewX: tS.RW,
                skewY: tS.RW,
                distance: tS.px,
                translateX: tS.px,
                translateY: tS.px,
                translateZ: tS.px,
                x: tS.px,
                y: tS.px,
                z: tS.px,
                perspective: tS.px,
                transformPerspective: tS.px,
                opacity: tw.Fq,
                originX: tS.$C,
                originY: tS.$C,
                originZ: tS.px
            }, tE = {...tw.Rx, transform: Math.round},
            tM = {...tT, ...tA, zIndex: tE, size: tS.px, fillOpacity: tw.Fq, strokeOpacity: tw.Fq, numOctaves: tE},
            tC = {
                ...tM,
                color: tP.$,
                backgroundColor: tP.$,
                outlineColor: tP.$,
                fill: tP.$,
                stroke: tP.$,
                borderColor: tP.$,
                borderTopColor: tP.$,
                borderRightColor: tP.$,
                borderBottomColor: tP.$,
                borderLeftColor: tP.$,
                filter: tb,
                WebkitFilter: tb
            }, tR = t => tC[t];

        function tj(t, e) {
            let i = tR(t);
            return i !== tb && (i = tm.P), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        }

        let tk = new Set(["auto", "none", "0"]), tD = t => t === tw.Rx || t === tS.px,
            tV = (t, e) => parseFloat(t.split(", ")[e]), tO = (t, e) => (i, {transform: n}) => {
                if ("none" === n || !n) return 0;
                let r = n.match(/^matrix3d\((.+)\)$/u);
                if (r) return tV(r[1], e);
                {
                    let e = n.match(/^matrix\((.+)\)$/u);
                    return e ? tV(e[1], t) : 0
                }
            }, tL = new Set(["x", "y", "z"]), t_ = z.filter(t => !tL.has(t)), tF = {
                width: ({x: t}, {
                    paddingLeft: e = "0",
                    paddingRight: i = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                height: ({y: t}, {
                    paddingTop: e = "0",
                    paddingBottom: i = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                top: (t, {top: e}) => parseFloat(e),
                left: (t, {left: e}) => parseFloat(e),
                bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
                right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
                x: tO(4, 13),
                y: tO(5, 14)
            };
        tF.translateX = tF.x, tF.translateY = tF.y;
        let tI = new Set, tB = !1, tN = !1;

        function tU() {
            if (tN) {
                let t = Array.from(tI).filter(t => t.needsMeasurement), e = new Set(t.map(t => t.element)), i = new Map;
                e.forEach(t => {
                    let e = function (t) {
                        let e = [];
                        return t_.forEach(i => {
                            let n = t.getValue(i);
                            void 0 !== n && (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0))
                        }), e
                    }(t);
                    e.length && (i.set(t, e), t.render())
                }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                    t.render();
                    let e = i.get(t);
                    e && e.forEach(([e, i]) => {
                        var n;
                        null === (n = t.getValue(e)) || void 0 === n || n.set(i)
                    })
                }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                    void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                })
            }
            tN = !1, tB = !1, tI.forEach(t => t.complete()), tI.clear()
        }

        function tW() {
            tI.forEach(t => {
                t.readKeyframes(), t.needsMeasurement && (tN = !0)
            })
        }

        class t$ {
            constructor(t, e, i, n, r, s = !1) {
                this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = n, this.element = r, this.isAsync = s
            }

            scheduleResolve() {
                this.isScheduled = !0, this.isAsync ? (tI.add(this), tB || (tB = !0, tt.Wi.read(tW), tt.Wi.resolveKeyframes(tU))) : (this.readKeyframes(), this.complete())
            }

            readKeyframes() {
                let {unresolvedKeyframes: t, name: e, element: i, motionValue: n} = this;
                for (let r = 0; r < t.length; r++) if (null === t[r]) {
                    if (0 === r) {
                        let r = null == n ? void 0 : n.get(), s = t[t.length - 1];
                        if (void 0 !== r) t[0] = r; else if (i && e) {
                            let n = i.readValue(e, s);
                            null != n && (t[0] = n)
                        }
                        void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0])
                    } else t[r] = t[r - 1]
                }
            }

            setFinalKeyframe() {
            }

            measureInitialState() {
            }

            renderEndStyles() {
            }

            measureEndState() {
            }

            complete() {
                this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), tI.delete(this)
            }

            cancel() {
                this.isComplete || (this.isScheduled = !1, tI.delete(this))
            }

            resume() {
                this.isComplete || this.scheduleResolve()
            }
        }

        var tz = i(2035);
        let tK = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
        var tY = i(7249);
        let tX = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u, tq = t => e => e.test(t),
            tH = [tw.Rx, tS.px, tS.aQ, tS.RW, tS.vw, tS.vh, {test: t => "auto" === t, parse: t => t}],
            tZ = t => tH.find(tq(t));

        class tG extends t$ {
            constructor(t, e, i, n, r) {
                super(t, e, i, n, r, !0)
            }

            readKeyframes() {
                let {unresolvedKeyframes: t, element: e, name: i} = this;
                if (!e || !e.current) return;
                super.readKeyframes();
                for (let i = 0; i < t.length; i++) {
                    let n = t[i];
                    if ("string" == typeof n && (n = n.trim(), (0, tY.t)(n))) {
                        let r = function t(e, i, n = 1) {
                            (0, tz.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                            let [r, s] = function (t) {
                                let e = tX.exec(t);
                                if (!e) return [,];
                                let [, i, n, r] = e;
                                return [`--${null != i ? i : n}`, r]
                            }(e);
                            if (!r) return;
                            let o = window.getComputedStyle(i).getPropertyValue(r);
                            if (o) {
                                let t = o.trim();
                                return tK(t) ? parseFloat(t) : t
                            }
                            return (0, tY.t)(s) ? t(s, i, n + 1) : s
                        }(n, e.current);
                        void 0 !== r && (t[i] = r), i === t.length - 1 && (this.finalKeyframe = n)
                    }
                }
                if (this.resolveNoneKeyframes(), !Y.has(i) || 2 !== t.length) return;
                let [n, r] = t, s = tZ(n), o = tZ(r);
                if (s !== o) {
                    if (tD(s) && tD(o)) for (let e = 0; e < t.length; e++) {
                        let i = t[e];
                        "string" == typeof i && (t[e] = parseFloat(i))
                    } else this.needsMeasurement = !0
                }
            }

            resolveNoneKeyframes() {
                let {unresolvedKeyframes: t, name: e} = this, i = [];
                for (let e = 0; e < t.length; e++) {
                    var n;
                    ("number" == typeof (n = t[e]) ? 0 === n : null === n || "none" === n || "0" === n || tp(n)) && i.push(e)
                }
                i.length && function (t, e, i) {
                    let n, r = 0;
                    for (; r < t.length && !n;) {
                        let e = t[r];
                        "string" == typeof e && !tk.has(e) && (0, tm.V)(e).values.length && (n = t[r]), r++
                    }
                    if (n && i) for (let r of e) t[r] = tj(i, n)
                }(t, i, e)
            }

            measureInitialState() {
                let {element: t, unresolvedKeyframes: e, name: i} = this;
                if (!t || !t.current) return;
                "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = tF[i](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                let n = e[e.length - 1];
                void 0 !== n && t.getValue(i, n).jump(n, !1)
            }

            measureEndState() {
                var t;
                let {element: e, name: i, unresolvedKeyframes: n} = this;
                if (!e || !e.current) return;
                let r = e.getValue(i);
                r && r.jump(this.measuredOrigin, !1);
                let s = n.length - 1, o = n[s];
                n[s] = tF[i](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach(([t, i]) => {
                    e.getValue(t).set(i)
                }), this.resolveNoneKeyframes()
            }
        }

        var tJ = i(504);
        let tQ = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (tm.P.test(t) || "0" === t) && !t.startsWith("url(")),
            t0 = t => null !== t;

        function t1(t, {repeat: e, repeatType: i = "loop"}, n) {
            let r = t.filter(t0), s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
            return s && void 0 !== n ? n : r[s]
        }

        class t2 {
            constructor({
                            autoplay: t = !0,
                            delay: e = 0,
                            type: i = "keyframes",
                            repeat: n = 0,
                            repeatDelay: r = 0,
                            repeatType: s = "loop",
                            ...o
                        }) {
                this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = tJ.X.now(), this.options = {
                    autoplay: t,
                    delay: e,
                    type: i,
                    repeat: n,
                    repeatDelay: r,
                    repeatType: s, ...o
                }, this.updateFinishedPromise()
            }

            calcStartTime() {
                return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
            }

            get resolved() {
                return this._resolved || this.hasAttemptedResolve || (tW(), tU()), this._resolved
            }

            onKeyframesResolved(t, e) {
                this.resolvedAt = tJ.X.now(), this.hasAttemptedResolve = !0;
                let {
                    name: i,
                    type: n,
                    velocity: r,
                    delay: s,
                    onComplete: o,
                    onUpdate: a,
                    isGenerator: l
                } = this.options;
                if (!l && !function (t, e, i, n) {
                    let r = t[0];
                    if (null === r) return !1;
                    if ("display" === e || "visibility" === e) return !0;
                    let s = t[t.length - 1], o = tQ(r, e), a = tQ(s, e);
                    return (0, tz.K)(o === a, `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`), !!o && !!a && (function (t) {
                        let e = t[0];
                        if (1 === t.length) return !0;
                        for (let i = 0; i < t.length; i++) if (t[i] !== e) return !0
                    }(t) || ("spring" === i || y(i)) && n)
                }(t, i, n, r)) {
                    if (ti.current || !s) {
                        a && a(t1(t, this.options, e)), o && o(), this.resolveFinishedPromise();
                        return
                    }
                    this.options.duration = 0
                }
                let u = this.initPlayback(t, e);
                !1 !== u && (this._resolved = {keyframes: t, finalKeyframe: e, ...u}, this.onPostResolved())
            }

            onPostResolved() {
            }

            then(t, e) {
                return this.currentFinishedPromise.then(t, e)
            }

            flatten() {
                this.options.type = "keyframes", this.options.ease = "linear"
            }

            updateFinishedPromise() {
                this.currentFinishedPromise = new Promise(t => {
                    this.resolveFinishedPromise = t
                })
            }
        }

        var t5 = i(9111), t3 = i(2006), t4 = i(332), t6 = i(4438);

        function t9(t, e, i) {
            let n = Math.max(e - 5, 0);
            return (0, t6.R)(i - t(n), e - n)
        }

        let t8 = {
            stiffness: 100,
            damping: 10,
            mass: 1,
            velocity: 0,
            duration: 800,
            bounce: .3,
            visualDuration: .3,
            restSpeed: {granular: .01, default: 2},
            restDelta: {granular: .005, default: .5},
            minDuration: .01,
            maxDuration: 10,
            minDamping: .05,
            maxDamping: 1
        };

        function t7(t, e) {
            return t * Math.sqrt(1 - e * e)
        }

        let et = ["duration", "bounce"], ee = ["stiffness", "damping", "mass"];

        function ei(t, e) {
            return e.some(e => void 0 !== t[e])
        }

        function en(t = t8.visualDuration, e = t8.bounce) {
            let i;
            let n = "object" != typeof t ? {visualDuration: t, keyframes: [0, 1], bounce: e} : t, {
                    restSpeed: r,
                    restDelta: s
                } = n, o = n.keyframes[0], a = n.keyframes[n.keyframes.length - 1], l = {done: !1, value: o}, {
                    stiffness: u,
                    damping: h,
                    mass: c,
                    duration: d,
                    velocity: f,
                    isResolvedFromDuration: p
                } = function (t) {
                    let e = {
                        velocity: t8.velocity,
                        stiffness: t8.stiffness,
                        damping: t8.damping,
                        mass: t8.mass,
                        isResolvedFromDuration: !1, ...t
                    };
                    if (!ei(t, ee) && ei(t, et)) {
                        if (t.visualDuration) {
                            let i = 2 * Math.PI / (1.2 * t.visualDuration), n = i * i,
                                r = 2 * (0, t5.u)(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                            e = {...e, mass: t8.mass, stiffness: n, damping: r}
                        } else {
                            let i = function ({
                                                  duration: t = t8.duration,
                                                  bounce: e = t8.bounce,
                                                  velocity: i = t8.velocity,
                                                  mass: n = t8.mass
                                              }) {
                                let r, s;
                                (0, tz.K)(t <= U(t8.maxDuration), "Spring duration must be 10 seconds or less");
                                let o = 1 - e;
                                o = (0, t5.u)(t8.minDamping, t8.maxDamping, o), t = (0, t5.u)(t8.minDuration, t8.maxDuration, W(t)), o < 1 ? (r = e => {
                                    let n = e * o, r = n * t;
                                    return .001 - (n - i) / t7(e, o) * Math.exp(-r)
                                }, s = e => {
                                    let n = e * o * t, s = Math.pow(o, 2) * Math.pow(e, 2) * t, a = t7(Math.pow(e, 2), o);
                                    return (n * i + i - s) * Math.exp(-n) * (-r(e) + .001 > 0 ? -1 : 1) / a
                                }) : (r = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), s = e => t * t * (i - e) * Math.exp(-e * t));
                                let a = function (t, e, i) {
                                    let n = i;
                                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                                    return n
                                }(r, s, 5 / t);
                                if (t = U(t), isNaN(a)) return {stiffness: t8.stiffness, damping: t8.damping, duration: t};
                                {
                                    let e = Math.pow(a, 2) * n;
                                    return {stiffness: e, damping: 2 * o * Math.sqrt(n * e), duration: t}
                                }
                            }(t);
                            (e = {...e, ...i, mass: t8.mass}).isResolvedFromDuration = !0
                        }
                    }
                    return e
                }({...n, velocity: -W(n.velocity || 0)}), m = f || 0, g = h / (2 * Math.sqrt(u * c)), y = a - o,
                x = W(Math.sqrt(u / c)), b = 5 > Math.abs(y);
            if (r || (r = b ? t8.restSpeed.granular : t8.restSpeed.default), s || (s = b ? t8.restDelta.granular : t8.restDelta.default), g < 1) {
                let t = t7(x, g);
                i = e => a - Math.exp(-g * x * e) * ((m + g * x * y) / t * Math.sin(t * e) + y * Math.cos(t * e))
            } else if (1 === g) i = t => a - Math.exp(-x * t) * (y + (m + x * y) * t); else {
                let t = x * Math.sqrt(g * g - 1);
                i = e => {
                    let i = Math.exp(-g * x * e), n = Math.min(t * e, 300);
                    return a - i * ((m + g * x * y) * Math.sinh(n) + t * y * Math.cosh(n)) / t
                }
            }
            let P = {
                calculatedDuration: p && d || null, next: t => {
                    let e = i(t);
                    if (p) l.done = t >= d; else {
                        let n = 0;
                        g < 1 && (n = 0 === t ? U(m) : t9(i, t, e));
                        let o = Math.abs(n) <= r, u = Math.abs(a - e) <= s;
                        l.done = o && u
                    }
                    return l.value = l.done ? a : e, l
                }, toString: () => {
                    let t = Math.min(v(P), 2e4), e = M(e => P.next(t * e).value, t, 30);
                    return t + "ms " + e
                }
            };
            return P
        }

        function er({
                        keyframes: t,
                        velocity: e = 0,
                        power: i = .8,
                        timeConstant: n = 325,
                        bounceDamping: r = 10,
                        bounceStiffness: s = 500,
                        modifyTarget: o,
                        min: a,
                        max: l,
                        restDelta: u = .5,
                        restSpeed: h
                    }) {
            let c, d;
            let f = t[0], p = {done: !1, value: f}, m = t => void 0 !== a && t < a || void 0 !== l && t > l,
                g = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l, v = i * e,
                y = f + v, x = void 0 === o ? y : o(y);
            x !== y && (v = x - f);
            let b = t => -v * Math.exp(-t / n), P = t => x + b(t), w = t => {
                let e = b(t), i = P(t);
                p.done = Math.abs(e) <= u, p.value = p.done ? x : i
            }, S = t => {
                m(p.value) && (c = t, d = en({
                    keyframes: [p.value, g(p.value)],
                    velocity: t9(P, t, p.value),
                    damping: r,
                    stiffness: s,
                    restDelta: u,
                    restSpeed: h
                }))
            };
            return S(0), {
                calculatedDuration: null, next: t => {
                    let e = !1;
                    return (d || void 0 !== c || (e = !0, w(t), S(t)), void 0 !== c && t >= c) ? d.next(t - c) : (e || w(t), p)
                }
            }
        }

        let es = tr(.42, 0, 1, 1), eo = tr(0, 0, .58, 1), ea = tr(.42, 0, .58, 1),
            el = t => Array.isArray(t) && "number" != typeof t[0], eu = {
                linear: $.Z,
                easeIn: es,
                easeInOut: ea,
                easeOut: eo,
                circIn: tc,
                circInOut: tf,
                circOut: td,
                backIn: tl,
                backInOut: tu,
                backOut: ta,
                anticipate: th
            }, eh = t => {
                if (b(t)) {
                    (0, tz.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                    let [e, i, n, r] = t;
                    return tr(e, i, n, r)
                }
                return "string" == typeof t ? ((0, tz.k)(void 0 !== eu[t], `Invalid easing type '${t}'`), eu[t]) : t
            };
        var ec = i(8843), ed = i(6781);

        function ef({duration: t = 300, keyframes: e, times: i, ease: n = "easeInOut"}) {
            let r = el(n) ? n.map(eh) : eh(n), s = {done: !1, value: e[0]},
                o = (i && i.length === e.length ? i : function (t) {
                    let e = [0];
                    return function (t, e) {
                        let i = t[t.length - 1];
                        for (let n = 1; n <= e; n++) {
                            let r = (0, E.Y)(0, e, n);
                            t.push((0, ed.t)(i, 1, r))
                        }
                    }(e, t.length - 1), e
                }(e)).map(e => e * t),
                a = (0, ec.s)(o, e, {ease: Array.isArray(r) ? r : e.map(() => r || ea).splice(0, e.length - 1)});
            return {calculatedDuration: t, next: e => (s.value = a(e), s.done = e >= t, s)}
        }

        let ep = t => {
            let e = ({timestamp: e}) => t(e);
            return {
                start: () => tt.Wi.update(e, !0),
                stop: () => (0, tt.Pn)(e),
                now: () => tt.frameData.isProcessing ? tt.frameData.timestamp : tJ.X.now()
            }
        }, em = {decay: er, inertia: er, tween: ef, keyframes: ef, spring: en}, eg = t => t / 100;

        class ev extends t2 {
            constructor(t) {
                super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
                    if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                    this.teardown();
                    let {onStop: t} = this.options;
                    t && t()
                };
                let {name: e, motionValue: i, element: n, keyframes: r} = this.options,
                    s = (null == n ? void 0 : n.KeyframeResolver) || t$;
                this.resolver = new s(r, (t, e) => this.onKeyframesResolved(t, e), e, i, n), this.resolver.scheduleResolve()
            }

            flatten() {
                super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
            }

            initPlayback(t) {
                let e, i;
                let {
                    type: n = "keyframes",
                    repeat: r = 0,
                    repeatDelay: s = 0,
                    repeatType: o,
                    velocity: a = 0
                } = this.options, l = y(n) ? n : em[n] || ef;
                l !== ef && "number" != typeof t[0] && (e = (0, t4.z)(eg, (0, t3.C)(t[0], t[1])), t = [0, 100]);
                let u = l({...this.options, keyframes: t});
                "mirror" === o && (i = l({
                    ...this.options,
                    keyframes: [...t].reverse(),
                    velocity: -a
                })), null === u.calculatedDuration && (u.calculatedDuration = v(u));
                let {calculatedDuration: h} = u, c = h + s;
                return {
                    generator: u,
                    mirroredGenerator: i,
                    mapPercentToKeyframes: e,
                    calculatedDuration: h,
                    resolvedDuration: c,
                    totalDuration: c * (r + 1) - s
                }
            }

            onPostResolved() {
                let {autoplay: t = !0} = this.options;
                this.play(), "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
            }

            tick(t, e = !1) {
                let {resolved: i} = this;
                if (!i) {
                    let {keyframes: t} = this.options;
                    return {done: !0, value: t[t.length - 1]}
                }
                let {
                    finalKeyframe: n,
                    generator: r,
                    mirroredGenerator: s,
                    mapPercentToKeyframes: o,
                    keyframes: a,
                    calculatedDuration: l,
                    totalDuration: u,
                    resolvedDuration: h
                } = i;
                if (null === this.startTime) return r.next(0);
                let {delay: c, repeat: d, repeatType: f, repeatDelay: p, onUpdate: m} = this.options;
                this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1), v = this.speed >= 0 ? g < 0 : g > u;
                this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                let y = this.currentTime, x = r;
                if (d) {
                    let t = Math.min(this.currentTime, u) / h, e = Math.floor(t), i = t % 1;
                    !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, d + 1)) % 2 && ("reverse" === f ? (i = 1 - i, p && (i -= p / h)) : "mirror" === f && (x = s)), y = (0, t5.u)(0, 1, i) * h
                }
                let b = v ? {done: !1, value: a[0]} : x.next(y);
                o && (b.value = o(b.value));
                let {done: P} = b;
                v || null === l || (P = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                let w = null === this.holdTime && ("finished" === this.state || "running" === this.state && P);
                return w && void 0 !== n && (b.value = t1(a, this.options, n)), m && m(b.value), w && this.finish(), b
            }

            get duration() {
                let {resolved: t} = this;
                return t ? W(t.calculatedDuration) : 0
            }

            get time() {
                return W(this.currentTime)
            }

            set time(t) {
                t = U(t), this.currentTime = t, null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
            }

            get speed() {
                return this.playbackSpeed
            }

            set speed(t) {
                let e = this.playbackSpeed !== t;
                this.playbackSpeed = t, e && (this.time = W(this.currentTime))
            }

            play() {
                if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
                    this.pendingPlayState = "running";
                    return
                }
                if (this.isStopped) return;
                let {driver: t = ep, onPlay: e, startTime: i} = this.options;
                this.driver || (this.driver = t(t => this.tick(t))), e && e();
                let n = this.driver.now();
                null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = n) : this.startTime = null != i ? i : this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
            }

            pause() {
                var t;
                if (!this._resolved) {
                    this.pendingPlayState = "paused";
                    return
                }
                this.state = "paused", this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
            }

            complete() {
                "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
            }

            finish() {
                this.teardown(), this.state = "finished";
                let {onComplete: t} = this.options;
                t && t()
            }

            cancel() {
                null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
            }

            teardown() {
                this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
            }

            stopDriver() {
                this.driver && (this.driver.stop(), this.driver = void 0)
            }

            sample(t) {
                return this.startTime = 0, this.tick(t, !0)
            }
        }

        let ey = new Set(["opacity", "clipPath", "filter", "transform"]),
            ex = d(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
            eb = {anticipate: th, backInOut: tu, circInOut: tf};

        class eP extends t2 {
            constructor(t) {
                super(t);
                let {name: e, motionValue: i, element: n, keyframes: r} = this.options;
                this.resolver = new tG(r, (t, e) => this.onKeyframesResolved(t, e), e, i, n), this.resolver.scheduleResolve()
            }

            initPlayback(t, e) {
                var i;
                let {
                    duration: n = 300,
                    times: r,
                    ease: s,
                    type: o,
                    motionValue: a,
                    name: l,
                    startTime: u
                } = this.options;
                if (!a.owner || !a.owner.current) return !1;
                if ("string" == typeof s && w() && s in eb && (s = eb[s]), y((i = this.options).type) || "spring" === i.type || !function t(e) {
                    return !!("function" == typeof e && w() || !e || "string" == typeof e && (e in R || w()) || b(e) || Array.isArray(e) && e.every(t))
                }(i.ease)) {
                    let {onComplete: e, onUpdate: i, motionValue: a, element: l, ...u} = this.options,
                        h = function (t, e) {
                            let i = new ev({...e, keyframes: t, repeat: 0, delay: 0, isGenerator: !0}),
                                n = {done: !1, value: t[0]}, r = [], s = 0;
                            for (; !n.done && s < 2e4;) r.push((n = i.sample(s)).value), s += 10;
                            return {times: void 0, keyframes: r, duration: s - 10, ease: "linear"}
                        }(t, u);
                    1 === (t = h.keyframes).length && (t[1] = t[0]), n = h.duration, r = h.times, s = h.ease, o = "keyframes"
                }
                let h = function (t, e, i, {
                    delay: n = 0,
                    duration: r = 300,
                    repeat: s = 0,
                    repeatType: o = "loop",
                    ease: a = "easeInOut",
                    times: l
                } = {}) {
                    let u = {[e]: i};
                    l && (u.offset = l);
                    let h = function t(e, i) {
                        if (e) return "function" == typeof e && w() ? M(e, i) : b(e) ? C(e) : Array.isArray(e) ? e.map(e => t(e, i) || R.easeOut) : R[e]
                    }(a, r);
                    return Array.isArray(h) && (u.easing = h), t.animate(u, {
                        delay: n,
                        duration: r,
                        easing: Array.isArray(h) ? "linear" : h,
                        fill: "both",
                        iterations: s + 1,
                        direction: "reverse" === o ? "alternate" : "normal"
                    })
                }(a.owner.current, l, t, {...this.options, duration: n, times: r, ease: s});
                return h.startTime = null != u ? u : this.calcStartTime(), this.pendingTimeline ? (x(h, this.pendingTimeline), this.pendingTimeline = void 0) : h.onfinish = () => {
                    let {onComplete: i} = this.options;
                    a.set(t1(t, this.options, e)), i && i(), this.cancel(), this.resolveFinishedPromise()
                }, {animation: h, duration: n, times: r, type: o, ease: s, keyframes: t}
            }

            get duration() {
                let {resolved: t} = this;
                if (!t) return 0;
                let {duration: e} = t;
                return W(e)
            }

            get time() {
                let {resolved: t} = this;
                if (!t) return 0;
                let {animation: e} = t;
                return W(e.currentTime || 0)
            }

            set time(t) {
                let {resolved: e} = this;
                if (!e) return;
                let {animation: i} = e;
                i.currentTime = U(t)
            }

            get speed() {
                let {resolved: t} = this;
                if (!t) return 1;
                let {animation: e} = t;
                return e.playbackRate
            }

            set speed(t) {
                let {resolved: e} = this;
                if (!e) return;
                let {animation: i} = e;
                i.playbackRate = t
            }

            get state() {
                let {resolved: t} = this;
                if (!t) return "idle";
                let {animation: e} = t;
                return e.playState
            }

            get startTime() {
                let {resolved: t} = this;
                if (!t) return null;
                let {animation: e} = t;
                return e.startTime
            }

            attachTimeline(t) {
                if (this._resolved) {
                    let {resolved: e} = this;
                    if (!e) return $.Z;
                    let {animation: i} = e;
                    x(i, t)
                } else this.pendingTimeline = t;
                return $.Z
            }

            play() {
                if (this.isStopped) return;
                let {resolved: t} = this;
                if (!t) return;
                let {animation: e} = t;
                "finished" === e.playState && this.updateFinishedPromise(), e.play()
            }

            pause() {
                let {resolved: t} = this;
                if (!t) return;
                let {animation: e} = t;
                e.pause()
            }

            stop() {
                if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                this.resolveFinishedPromise(), this.updateFinishedPromise();
                let {resolved: t} = this;
                if (!t) return;
                let {animation: e, keyframes: i, duration: n, type: r, ease: s, times: o} = t;
                if ("idle" === e.playState || "finished" === e.playState) return;
                if (this.time) {
                    let {motionValue: t, onUpdate: e, onComplete: a, element: l, ...u} = this.options,
                        h = new ev({...u, keyframes: i, duration: n, type: r, ease: s, times: o, isGenerator: !0}),
                        c = U(this.time);
                    t.setWithVelocity(h.sample(c - 10).value, h.sample(c).value, 10)
                }
                let {onStop: a} = this.options;
                a && a(), this.cancel()
            }

            complete() {
                let {resolved: t} = this;
                t && t.animation.finish()
            }

            cancel() {
                let {resolved: t} = this;
                t && t.animation.cancel()
            }

            static supports(t) {
                let {motionValue: e, name: i, repeatDelay: n, repeatType: r, damping: s, type: o} = t;
                if (!e || !e.owner || !(e.owner.current instanceof HTMLElement)) return !1;
                let {onUpdate: a, transformTemplate: l} = e.owner.getProps();
                return ex() && i && ey.has(i) && !a && !l && !n && "mirror" !== r && 0 !== s && "inertia" !== o
            }
        }

        let ew = {type: "spring", stiffness: 500, damping: 25, restSpeed: 10},
            eS = t => ({type: "spring", stiffness: 550, damping: 0 === t ? 2 * Math.sqrt(550) : 30, restSpeed: 10}),
            eT = {type: "keyframes", duration: .8}, eA = {type: "keyframes", ease: [.25, .1, .35, 1], duration: .3},
            eE = (t, {keyframes: e}) => e.length > 2 ? eT : K.has(t) ? t.startsWith("scale") ? eS(e[1]) : ew : eA,
            eM = (t, e, i, n = {}, r, s) => o => {
                let a = g(n, t) || {}, l = a.delay || n.delay || 0, {elapsed: u = 0} = n;
                u -= U(l);
                let h = {
                    keyframes: Array.isArray(i) ? i : [null, i],
                    ease: "easeOut",
                    velocity: e.getVelocity(), ...a,
                    delay: -u,
                    onUpdate: t => {
                        e.set(t), a.onUpdate && a.onUpdate(t)
                    },
                    onComplete: () => {
                        o(), a.onComplete && a.onComplete()
                    },
                    name: t,
                    motionValue: e,
                    element: s ? void 0 : r
                };
                !function ({
                               when: t,
                               delay: e,
                               delayChildren: i,
                               staggerChildren: n,
                               staggerDirection: r,
                               repeat: s,
                               repeatType: o,
                               repeatDelay: a,
                               from: l,
                               elapsed: u,
                               ...h
                           }) {
                    return !!Object.keys(h).length
                }(a) && (h = {...h, ...eE(t, h)}), h.duration && (h.duration = U(h.duration)), h.repeatDelay && (h.repeatDelay = U(h.repeatDelay)), void 0 !== h.from && (h.keyframes[0] = h.from);
                let c = !1;
                if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (h.duration = 0, 0 !== h.delay || (c = !0)), (ti.current || te.c.skipAnimations) && (c = !0, h.duration = 0, h.delay = 0), c && !s && void 0 !== e.get()) {
                    let t = t1(h.keyframes, a);
                    if (void 0 !== t) return tt.Wi.update(() => {
                        h.onUpdate(t), h.onComplete()
                    }), new m([])
                }
                return !s && eP.supports(h) ? new eP(h) : new ev(h)
            };

        function eC(t, e, {delay: i = 0, transitionOverride: n, type: r} = {}) {
            var s;
            let {transition: o = t.getDefaultTransition(), transitionEnd: a, ...l} = e;
            n && (o = n);
            let h = [], c = r && t.animationState && t.animationState.getState()[r];
            for (let e in l) {
                let n = t.getValue(e, null !== (s = t.latestValues[e]) && void 0 !== s ? s : null), r = l[e];
                if (void 0 === r || c && function ({protectedKeys: t, needsAnimating: e}, i) {
                    let n = t.hasOwnProperty(i) && !0 !== e[i];
                    return e[i] = !1, n
                }(c, e)) continue;
                let a = {delay: i, ...g(o || {}, e)}, u = !1;
                if (window.MotionHandoffAnimation) {
                    let i = t.props[Q];
                    if (i) {
                        let t = window.MotionHandoffAnimation(i, e, tt.Wi);
                        null !== t && (a.startTime = t, u = !0)
                    }
                }
                G(t, e), n.start(eM(e, n, r, t.shouldReduceMotion && Y.has(e) ? {type: !1} : a, t, u));
                let d = n.animation;
                d && h.push(d)
            }
            return a && Promise.all(h).then(() => {
                tt.Wi.update(() => {
                    a && function (t, e) {
                        let {transitionEnd: i = {}, transition: n = {}, ...r} = u(t, e) || {};
                        for (let e in r = {...r, ...i}) {
                            let i = q(r[e]);
                            t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, H.BX)(i))
                        }
                    }(t, a)
                })
            }), h
        }

        function eR(t, e, i = {}) {
            var n;
            let r = u(t, e, "exit" === i.type ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0), {transition: s = t.getDefaultTransition() || {}} = r || {};
            i.transitionOverride && (s = i.transitionOverride);
            let o = r ? () => Promise.all(eC(t, r, i)) : () => Promise.resolve(),
                a = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                    let {delayChildren: r = 0, staggerChildren: o, staggerDirection: a} = s;
                    return function (t, e, i = 0, n = 0, r = 1, s) {
                        let o = [], a = (t.variantChildren.size - 1) * n,
                            l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                        return Array.from(t.variantChildren).sort(ej).forEach((t, n) => {
                            t.notify("AnimationStart", e), o.push(eR(t, e, {
                                ...s,
                                delay: i + l(n)
                            }).then(() => t.notify("AnimationComplete", e)))
                        }), Promise.all(o)
                    }(t, e, r + n, o, a, i)
                } : () => Promise.resolve(), {when: l} = s;
            if (!l) return Promise.all([o(), a(i.delay)]);
            {
                let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
                return t().then(() => e())
            }
        }

        function ej(t, e) {
            return t.sortNodePosition(e)
        }

        let ek = c.length, eD = [...h].reverse(), eV = h.length;

        function eO(t = !1) {
            return {isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {}}
        }

        function eL() {
            return {
                animate: eO(!0),
                whileInView: eO(),
                whileHover: eO(),
                whileTap: eO(),
                whileDrag: eO(),
                whileFocus: eO(),
                exit: eO()
            }
        }

        class e_ {
            constructor(t) {
                this.isMounted = !1, this.node = t
            }

            update() {
            }
        }

        class eF extends e_ {
            constructor(t) {
                super(t), t.animationState || (t.animationState = function (t) {
                    let e = e => Promise.all(e.map(({animation: e, options: i}) => (function (t, e, i = {}) {
                        let n;
                        if (t.notify("AnimationStart", e), Array.isArray(e)) n = Promise.all(e.map(e => eR(t, e, i))); else if ("string" == typeof e) n = eR(t, e, i); else {
                            let r = "function" == typeof e ? u(t, e, i.custom) : e;
                            n = Promise.all(eC(t, r, i))
                        }
                        return n.then(() => {
                            t.notify("AnimationComplete", e)
                        })
                    })(t, e, i))), i = eL(), a = !0, l = e => (i, n) => {
                        var r;
                        let s = u(t, n, "exit" === e ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0);
                        if (s) {
                            let {transition: t, transitionEnd: e, ...n} = s;
                            i = {...i, ...n, ...e}
                        }
                        return i
                    };

                    function h(u) {
                        let {props: h} = t, d = function t(e) {
                            if (!e) return;
                            if (!e.isControllingVariants) {
                                let i = e.parent && t(e.parent) || {};
                                return void 0 !== e.props.initial && (i.initial = e.props.initial), i
                            }
                            let i = {};
                            for (let t = 0; t < ek; t++) {
                                let n = c[t], r = e.props[n];
                                (o(r) || !1 === r) && (i[n] = r)
                            }
                            return i
                        }(t.parent) || {}, f = [], p = new Set, m = {}, g = 1 / 0;
                        for (let e = 0; e < eV; e++) {
                            var v;
                            let c = eD[e], y = i[c], x = void 0 !== h[c] ? h[c] : d[c], b = o(x),
                                P = c === u ? y.isActive : null;
                            !1 === P && (g = e);
                            let w = x === d[c] && x !== h[c] && b;
                            if (w && a && t.manuallyAnimateOnMount && (w = !1), y.protectedKeys = {...m}, !y.isActive && null === P || !x && !y.prevProp || n(x) || "boolean" == typeof x) continue;
                            let S = (v = y.prevProp, "string" == typeof x ? x !== v : !!Array.isArray(x) && !s(x, v)),
                                T = S || c === u && y.isActive && !w && b || e > g && b, A = !1,
                                E = Array.isArray(x) ? x : [x], M = E.reduce(l(c), {});
                            !1 === P && (M = {});
                            let {prevResolvedValues: C = {}} = y, R = {...C, ...M}, j = e => {
                                T = !0, p.has(e) && (A = !0, p.delete(e)), y.needsAnimating[e] = !0;
                                let i = t.getValue(e);
                                i && (i.liveStyle = !1)
                            };
                            for (let t in R) {
                                let e = M[t], i = C[t];
                                if (!m.hasOwnProperty(t)) (r(e) && r(i) ? s(e, i) : e === i) ? void 0 !== e && p.has(t) ? j(t) : y.protectedKeys[t] = !0 : null != e ? j(t) : p.add(t)
                            }
                            y.prevProp = x, y.prevResolvedValues = M, y.isActive && (m = {...m, ...M}), a && t.blockInitialAnimation && (T = !1);
                            let k = !(w && S) || A;
                            T && k && f.push(...E.map(t => ({animation: t, options: {type: c}})))
                        }
                        if (p.size) {
                            let e = {};
                            p.forEach(i => {
                                let n = t.getBaseTarget(i), r = t.getValue(i);
                                r && (r.liveStyle = !0), e[i] = null != n ? n : null
                            }), f.push({animation: e})
                        }
                        let y = !!f.length;
                        return a && (!1 === h.initial || h.initial === h.animate) && !t.manuallyAnimateOnMount && (y = !1), a = !1, y ? e(f) : Promise.resolve()
                    }

                    return {
                        animateChanges: h, setActive: function (e, n) {
                            var r;
                            if (i[e].isActive === n) return Promise.resolve();
                            null === (r = t.variantChildren) || void 0 === r || r.forEach(t => {
                                var i;
                                return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                            }), i[e].isActive = n;
                            let s = h(e);
                            for (let t in i) i[t].protectedKeys = {};
                            return s
                        }, setAnimateFunction: function (i) {
                            e = i(t)
                        }, getState: () => i, reset: () => {
                            i = eL(), a = !0
                        }
                    }
                }(t))
            }

            updateAnimationControlsSubscription() {
                let {animate: t} = this.node.getProps();
                n(t) && (this.unmountControls = t.subscribe(this.node))
            }

            mount() {
                this.updateAnimationControlsSubscription()
            }

            update() {
                let {animate: t} = this.node.getProps(), {animate: e} = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
            }

            unmount() {
                var t;
                this.node.animationState.reset(), null === (t = this.unmountControls) || void 0 === t || t.call(this)
            }
        }

        let eI = 0;

        class eB extends e_ {
            constructor() {
                super(...arguments), this.id = eI++
            }

            update() {
                if (!this.node.presenceContext) return;
                let {
                    isPresent: t,
                    onExitComplete: e
                } = this.node.presenceContext, {isPresent: i} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === i) return;
                let n = this.node.animationState.setActive("exit", !t);
                e && !t && n.then(() => e(this.id))
            }

            mount() {
                let {register: t} = this.node.presenceContext || {};
                t && (this.unmount = t(this.id))
            }

            unmount() {
            }
        }

        function eN(t, e, i, n = {passive: !0}) {
            return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
        }

        function eU(t) {
            return {point: {x: t.pageX, y: t.pageY}}
        }

        let eW = t => e => O(e) && t(e, eU(e));

        function e$(t, e, i, n) {
            return eN(t, e, eW(i), n)
        }

        let ez = (t, e) => Math.abs(t - e);

        class eK {
            constructor(t, e, {transformPagePoint: i, contextWindow: n, dragSnapToOrigin: r = !1} = {}) {
                if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                    var t, e;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let i = eq(this.lastMoveEventInfo, this.history), n = null !== this.startEvent,
                        r = (t = i.offset, e = {x: 0, y: 0}, Math.sqrt(ez(t.x, e.x) ** 2 + ez(t.y, e.y) ** 2) >= 3);
                    if (!n && !r) return;
                    let {point: s} = i, {timestamp: o} = tt.frameData;
                    this.history.push({...s, timestamp: o});
                    let {onStart: a, onMove: l} = this.handlers;
                    n || (a && a(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, i)
                }, this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t, this.lastMoveEventInfo = eY(e, this.transformPagePoint), tt.Wi.update(this.updatePoint, !0)
                }, this.handlePointerUp = (t, e) => {
                    this.end();
                    let {onEnd: i, onSessionEnd: n, resumeAnimation: r} = this.handlers;
                    if (this.dragSnapToOrigin && r && r(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let s = eq("pointercancel" === t.type ? this.lastMoveEventInfo : eY(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, s), n && n(t, s)
                }, !O(t)) return;
                this.dragSnapToOrigin = r, this.handlers = e, this.transformPagePoint = i, this.contextWindow = n || window;
                let s = eY(eU(t), this.transformPagePoint), {point: o} = s, {timestamp: a} = tt.frameData;
                this.history = [{...o, timestamp: a}];
                let {onSessionStart: l} = e;
                l && l(t, eq(s, this.history)), this.removeListeners = (0, t4.z)(e$(this.contextWindow, "pointermove", this.handlePointerMove), e$(this.contextWindow, "pointerup", this.handlePointerUp), e$(this.contextWindow, "pointercancel", this.handlePointerUp))
            }

            updateHandlers(t) {
                this.handlers = t
            }

            end() {
                this.removeListeners && this.removeListeners(), (0, tt.Pn)(this.updatePoint)
            }
        }

        function eY(t, e) {
            return e ? {point: e(t.point)} : t
        }

        function eX(t, e) {
            return {x: t.x - e.x, y: t.y - e.y}
        }

        function eq({point: t}, e) {
            return {
                point: t, delta: eX(t, eH(e)), offset: eX(t, e[0]), velocity: function (t, e) {
                    if (t.length < 2) return {x: 0, y: 0};
                    let i = t.length - 1, n = null, r = eH(t);
                    for (; i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > U(.1)));) i--;
                    if (!n) return {x: 0, y: 0};
                    let s = W(r.timestamp - n.timestamp);
                    if (0 === s) return {x: 0, y: 0};
                    let o = {x: (r.x - n.x) / s, y: (r.y - n.y) / s};
                    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                }(e, 0)
            }
        }

        function eH(t) {
            return t[t.length - 1]
        }

        function eZ(t) {
            return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }

        function eG(t) {
            return t.max - t.min
        }

        function eJ(t, e, i, n = .5) {
            t.origin = n, t.originPoint = (0, ed.t)(e.min, e.max, t.origin), t.scale = eG(i) / eG(e), t.translate = (0, ed.t)(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
        }

        function eQ(t, e, i, n) {
            eJ(t.x, e.x, i.x, n ? n.originX : void 0), eJ(t.y, e.y, i.y, n ? n.originY : void 0)
        }

        function e0(t, e, i) {
            t.min = i.min + e.min, t.max = t.min + eG(e)
        }

        function e1(t, e, i) {
            t.min = e.min - i.min, t.max = t.min + eG(e)
        }

        function e2(t, e, i) {
            e1(t.x, e.x, i.x), e1(t.y, e.y, i.y)
        }

        function e5(t, e, i) {
            return {min: void 0 !== e ? t.min + e : void 0, max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0}
        }

        function e3(t, e) {
            let i = e.min - t.min, n = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {min: i, max: n}
        }

        function e4(t, e, i) {
            return {min: e6(t, e), max: e6(t, i)}
        }

        function e6(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }

        let e9 = () => ({translate: 0, scale: 1, origin: 0, originPoint: 0}), e8 = () => ({x: e9(), y: e9()}),
            e7 = () => ({min: 0, max: 0}), it = () => ({x: e7(), y: e7()});

        function ie(t) {
            return [t("x"), t("y")]
        }

        function ii({top: t, left: e, right: i, bottom: n}) {
            return {x: {min: e, max: i}, y: {min: t, max: n}}
        }

        function ir(t) {
            return void 0 === t || 1 === t
        }

        function is({scale: t, scaleX: e, scaleY: i}) {
            return !ir(t) || !ir(e) || !ir(i)
        }

        function io(t) {
            return is(t) || ia(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
        }

        function ia(t) {
            var e, i;
            return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
        }

        function il(t, e, i, n, r) {
            return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e
        }

        function iu(t, e = 0, i = 1, n, r) {
            t.min = il(t.min, e, i, n, r), t.max = il(t.max, e, i, n, r)
        }

        function ih(t, {x: e, y: i}) {
            iu(t.x, e.translate, e.scale, e.originPoint), iu(t.y, i.translate, i.scale, i.originPoint)
        }

        function ic(t, e) {
            t.min = t.min + e, t.max = t.max + e
        }

        function id(t, e, i, n, r = .5) {
            let s = (0, ed.t)(t.min, t.max, r);
            iu(t, e, i, s, n)
        }

        function ip(t, e) {
            id(t.x, e.x, e.scaleX, e.scale, e.originX), id(t.y, e.y, e.scaleY, e.scale, e.originY)
        }

        function im(t, e) {
            return ii(function (t, e) {
                if (!e) return t;
                let i = e({x: t.left, y: t.top}), n = e({x: t.right, y: t.bottom});
                return {top: i.y, left: i.x, bottom: n.y, right: n.x}
            }(t.getBoundingClientRect(), e))
        }

        let ig = ({current: t}) => t ? t.ownerDocument.defaultView : null, iv = new WeakMap;

        class iy {
            constructor(t) {
                this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                    x: 0,
                    y: 0
                }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = it(), this.visualElement = t
            }

            start(t, {snapToCursor: e = !1} = {}) {
                let {presenceContext: i} = this.visualElement;
                if (i && !1 === i.isPresent) return;
                let {dragSnapToOrigin: n} = this.getProps();
                this.panSession = new eK(t, {
                    onSessionStart: t => {
                        let {dragSnapToOrigin: i} = this.getProps();
                        i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(eU(t).point)
                    }, onStart: (t, e) => {
                        let {drag: i, dragPropagation: n, onDragStart: r} = this.getProps();
                        if (i && !n && (this.openDragLock && this.openDragLock(), this.openDragLock = "x" === i || "y" === i ? j[i] ? null : (j[i] = !0, () => {
                            j[i] = !1
                        }) : j.x || j.y ? null : (j.x = j.y = !0, () => {
                            j.x = j.y = !1
                        }), !this.openDragLock)) return;
                        this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ie(t => {
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (tS.aQ.test(e)) {
                                let {projection: i} = this.visualElement;
                                if (i && i.layout) {
                                    let n = i.layout.layoutBox[t];
                                    if (n) {
                                        let t = eG(n);
                                        e = parseFloat(e) / 100 * t
                                    }
                                }
                            }
                            this.originPoint[t] = e
                        }), r && tt.Wi.postRender(() => r(t, e)), G(this.visualElement, "transform");
                        let {animationState: s} = this.visualElement;
                        s && s.setActive("whileDrag", !0)
                    }, onMove: (t, e) => {
                        let {dragPropagation: i, dragDirectionLock: n, onDirectionLock: r, onDrag: s} = this.getProps();
                        if (!i && !this.openDragLock) return;
                        let {offset: o} = e;
                        if (n && null === this.currentDirection) {
                            this.currentDirection = function (t, e = 10) {
                                let i = null;
                                return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                            }(o), null !== this.currentDirection && r && r(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                    }, onSessionEnd: (t, e) => this.stop(t, e), resumeAnimation: () => ie(t => {
                        var e;
                        return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                    })
                }, {
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: n,
                    contextWindow: ig(this.visualElement)
                })
            }

            stop(t, e) {
                let i = this.isDragging;
                if (this.cancel(), !i) return;
                let {velocity: n} = e;
                this.startAnimation(n);
                let {onDragEnd: r} = this.getProps();
                r && tt.Wi.postRender(() => r(t, e))
            }

            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                let {dragPropagation: i} = this.getProps();
                !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
            }

            updateAxis(t, e, i) {
                let {drag: n} = this.getProps();
                if (!i || !ix(t, n, this.currentDirection)) return;
                let r = this.getAxisMotionValue(t), s = this.originPoint[t] + i[t];
                this.constraints && this.constraints[t] && (s = function (t, {min: e, max: i}, n) {
                    return void 0 !== e && t < e ? t = n ? (0, ed.t)(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? (0, ed.t)(i, t, n.max) : Math.min(t, i)), t
                }(s, this.constraints[t], this.elastic[t])), r.set(s)
            }

            resolveConstraints() {
                var t;
                let {dragConstraints: e, dragElastic: i} = this.getProps(),
                    n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout,
                    r = this.constraints;
                e && eZ(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function (t, {
                    top: e,
                    left: i,
                    bottom: n,
                    right: r
                }) {
                    return {x: e5(t.x, i, r), y: e5(t.y, e, n)}
                }(n.layoutBox, e) : this.constraints = !1, this.elastic = function (t = .35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35), {
                        x: e4(t, "left", "right"),
                        y: e4(t, "top", "bottom")
                    }
                }(i), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && ie(t => {
                    !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function (t, e) {
                        let i = {};
                        return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                    }(n.layoutBox[t], this.constraints[t]))
                })
            }

            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: i} = this.getProps();
                if (!e || !eZ(e)) return !1;
                let n = e.current;
                (0, tz.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: r} = this.visualElement;
                if (!r || !r.layout) return !1;
                let s = function (t, e, i) {
                        let n = im(t, i), {scroll: r} = e;
                        return r && (ic(n.x, r.offset.x), ic(n.y, r.offset.y)), n
                    }(n, r.root, this.visualElement.getTransformPagePoint()),
                    o = {x: e3((t = r.layout.layoutBox).x, s.x), y: e3(t.y, s.y)};
                if (i) {
                    let t = i(function ({x: t, y: e}) {
                        return {top: e.min, right: t.max, bottom: e.max, left: t.min}
                    }(o));
                    this.hasMutatedConstraints = !!t, t && (o = ii(t))
                }
                return o
            }

            startAnimation(t) {
                let {
                    drag: e,
                    dragMomentum: i,
                    dragElastic: n,
                    dragTransition: r,
                    dragSnapToOrigin: s,
                    onDragTransitionEnd: o
                } = this.getProps(), a = this.constraints || {};
                return Promise.all(ie(o => {
                    if (!ix(o, e, this.currentDirection)) return;
                    let l = a && a[o] || {};
                    s && (l = {min: 0, max: 0});
                    let u = {
                        type: "inertia",
                        velocity: i ? t[o] : 0,
                        bounceStiffness: n ? 200 : 1e6,
                        bounceDamping: n ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10, ...r, ...l
                    };
                    return this.startAxisValueAnimation(o, u)
                })).then(o)
            }

            startAxisValueAnimation(t, e) {
                let i = this.getAxisMotionValue(t);
                return G(this.visualElement, t), i.start(eM(t, i, 0, e, this.visualElement, !1))
            }

            stopAnimation() {
                ie(t => this.getAxisMotionValue(t).stop())
            }

            pauseAnimation() {
                ie(t => {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                })
            }

            getAnimationState(t) {
                var e;
                return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
            }

            getAxisMotionValue(t) {
                let e = `_drag${t.toUpperCase()}`, i = this.visualElement.getProps();
                return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
            }

            snapToCursor(t) {
                ie(e => {
                    let {drag: i} = this.getProps();
                    if (!ix(e, i, this.currentDirection)) return;
                    let {projection: n} = this.visualElement, r = this.getAxisMotionValue(e);
                    if (n && n.layout) {
                        let {min: i, max: s} = n.layout.layoutBox[e];
                        r.set(t[e] - (0, ed.t)(i, s, .5))
                    }
                })
            }

            scalePositionWithinConstraints() {
                if (!this.visualElement.current) return;
                let {drag: t, dragConstraints: e} = this.getProps(), {projection: i} = this.visualElement;
                if (!eZ(e) || !i || !this.constraints) return;
                this.stopAnimation();
                let n = {x: 0, y: 0};
                ie(t => {
                    let e = this.getAxisMotionValue(t);
                    if (e && !1 !== this.constraints) {
                        let i = e.get();
                        n[t] = function (t, e) {
                            let i = .5, n = eG(t), r = eG(e);
                            return r > n ? i = (0, E.Y)(e.min, e.max - n, t.min) : n > r && (i = (0, E.Y)(t.min, t.max - r, e.min)), (0, t5.u)(0, 1, i)
                        }({min: i, max: i}, this.constraints[t])
                    }
                });
                let {transformTemplate: r} = this.visualElement.getProps();
                this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), ie(e => {
                    if (!ix(e, t, null)) return;
                    let i = this.getAxisMotionValue(e), {min: r, max: s} = this.constraints[e];
                    i.set((0, ed.t)(r, s, n[e]))
                })
            }

            addListeners() {
                if (!this.visualElement.current) return;
                iv.set(this.visualElement, this);
                let t = e$(this.visualElement.current, "pointerdown", t => {
                    let {drag: e, dragListener: i = !0} = this.getProps();
                    e && i && this.start(t)
                }), e = () => {
                    let {dragConstraints: t} = this.getProps();
                    eZ(t) && t.current && (this.constraints = this.resolveRefConstraints())
                }, {projection: i} = this.visualElement, n = i.addEventListener("measure", e);
                i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), tt.Wi.read(e);
                let r = eN(window, "resize", () => this.scalePositionWithinConstraints()),
                    s = i.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e}) => {
                        this.isDragging && e && (ie(e => {
                            let i = this.getAxisMotionValue(e);
                            i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                        }), this.visualElement.render())
                    });
                return () => {
                    r(), t(), n(), s && s()
                }
            }

            getProps() {
                let t = this.visualElement.getProps(), {
                    drag: e = !1,
                    dragDirectionLock: i = !1,
                    dragPropagation: n = !1,
                    dragConstraints: r = !1,
                    dragElastic: s = .35,
                    dragMomentum: o = !0
                } = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: i,
                    dragPropagation: n,
                    dragConstraints: r,
                    dragElastic: s,
                    dragMomentum: o
                }
            }
        }

        function ix(t, e, i) {
            return (!0 === e || e === t) && (null === i || i === t)
        }

        class ib extends e_ {
            constructor(t) {
                super(t), this.removeGroupControls = $.Z, this.removeListeners = $.Z, this.controls = new iy(t)
            }

            mount() {
                let {dragControls: t} = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || $.Z
            }

            unmount() {
                this.removeGroupControls(), this.removeListeners()
            }
        }

        let iP = t => (e, i) => {
            t && tt.Wi.postRender(() => t(e, i))
        };

        class iw extends e_ {
            constructor() {
                super(...arguments), this.removePointerDownListener = $.Z
            }

            onPointerDown(t) {
                this.session = new eK(t, this.createPanHandlers(), {
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: ig(this.node)
                })
            }

            createPanHandlers() {
                let {onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: n} = this.node.getProps();
                return {
                    onSessionStart: iP(t), onStart: iP(e), onMove: i, onEnd: (t, e) => {
                        delete this.session, n && tt.Wi.postRender(() => n(t, e))
                    }
                }
            }

            mount() {
                this.removePointerDownListener = e$(this.node.current, "pointerdown", t => this.onPointerDown(t))
            }

            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }

            unmount() {
                this.removePointerDownListener(), this.session && this.session.end()
            }
        }

        var iS = i(7437), iT = i(2265), iA = i(9637), iE = i(8881);
        let iM = (0, iT.createContext)({}), iC = {hasAnimatedSinceResize: !0, hasEverUpdated: !1};

        function iR(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }

        let ij = {
            correct: (t, e) => {
                if (!e.target) return t;
                if ("string" == typeof t) {
                    if (!tS.px.test(t)) return t;
                    t = parseFloat(t)
                }
                let i = iR(t, e.target.x), n = iR(t, e.target.y);
                return `${i}% ${n}%`
            }
        }, ik = {}, {schedule: iD, cancel: iV} = (0, i(5005).Z)(queueMicrotask, !1);

        class iO extends iT.Component {
            componentDidMount() {
                let {
                    visualElement: t,
                    layoutGroup: e,
                    switchLayoutGroup: i,
                    layoutId: n
                } = this.props, {projection: r} = t;
                Object.assign(ik, i_), r && (e.group && e.group.add(r), i && i.register && n && i.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }), r.setOptions({...r.options, onExitComplete: () => this.safeToRemove()})), iC.hasEverUpdated = !0
            }

            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: i, drag: n, isPresent: r} = this.props, s = i.projection;
                return s && (s.isPresent = r, n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? s.promote() : s.relegate() || tt.Wi.postRender(() => {
                    let t = s.getStack();
                    t && t.members.length || this.safeToRemove()
                }))), null
            }

            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(), iD.postRender(() => {
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }))
            }

            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i} = this.props, {projection: n} = t;
                n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
            }

            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }

            render() {
                return null
            }
        }

        function iL(t) {
            let [e, i] = (0, iA.oO)(), n = (0, iT.useContext)(iE.p);
            return (0, iS.jsx)(iO, {
                ...t,
                layoutGroup: n,
                switchLayoutGroup: (0, iT.useContext)(iM),
                isPresent: e,
                safeToRemove: i
            })
        }

        let i_ = {
            borderRadius: {
                ...ij,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: ij,
            borderTopRightRadius: ij,
            borderBottomLeftRadius: ij,
            borderBottomRightRadius: ij,
            boxShadow: {
                correct: (t, {treeScale: e, projectionDelta: i}) => {
                    let n = tm.P.parse(t);
                    if (n.length > 5) return t;
                    let r = tm.P.createTransformer(t), s = "number" != typeof n[0] ? 1 : 0, o = i.x.scale * e.x,
                        a = i.y.scale * e.y;
                    n[0 + s] /= o, n[1 + s] /= a;
                    let l = (0, ed.t)(o, a, .5);
                    return "number" == typeof n[2 + s] && (n[2 + s] /= l), "number" == typeof n[3 + s] && (n[3 + s] /= l), r(n)
                }
            }
        };
        var iF = i(9013);
        let iI = (t, e) => t.depth - e.depth;

        class iB {
            constructor() {
                this.children = [], this.isDirty = !1
            }

            add(t) {
                (0, iF.y4)(this.children, t), this.isDirty = !0
            }

            remove(t) {
                (0, iF.cl)(this.children, t), this.isDirty = !0
            }

            forEach(t) {
                this.isDirty && this.children.sort(iI), this.isDirty = !1, this.children.forEach(t)
            }
        }

        var iN = i(4081);

        function iU(t) {
            let e = Z(t) ? t.get() : t;
            return X(e) ? e.toValue() : e
        }

        let iW = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], i$ = iW.length,
            iz = t => "string" == typeof t ? parseFloat(t) : t, iK = t => "number" == typeof t || tS.px.test(t);

        function iY(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }

        let iX = iH(0, .5, td), iq = iH(.5, .95, $.Z);

        function iH(t, e, i) {
            return n => n < t ? 0 : n > e ? 1 : i((0, E.Y)(t, e, n))
        }

        function iZ(t, e) {
            t.min = e.min, t.max = e.max
        }

        function iG(t, e) {
            iZ(t.x, e.x), iZ(t.y, e.y)
        }

        function iJ(t, e) {
            t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
        }

        function iQ(t, e, i, n, r) {
            return t -= e, t = n + 1 / i * (t - n), void 0 !== r && (t = n + 1 / r * (t - n)), t
        }

        function i0(t, e, [i, n, r], s, o) {
            !function (t, e = 0, i = 1, n = .5, r, s = t, o = t) {
                if (tS.aQ.test(e) && (e = parseFloat(e), e = (0, ed.t)(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
                let a = (0, ed.t)(s.min, s.max, n);
                t === s && (a -= e), t.min = iQ(t.min, e, i, a, r), t.max = iQ(t.max, e, i, a, r)
            }(t, e[i], e[n], e[r], e.scale, s, o)
        }

        let i1 = ["x", "scaleX", "originX"], i2 = ["y", "scaleY", "originY"];

        function i5(t, e, i, n) {
            i0(t.x, e, i1, i ? i.x : void 0, n ? n.x : void 0), i0(t.y, e, i2, i ? i.y : void 0, n ? n.y : void 0)
        }

        function i3(t) {
            return 0 === t.translate && 1 === t.scale
        }

        function i4(t) {
            return i3(t.x) && i3(t.y)
        }

        function i6(t, e) {
            return t.min === e.min && t.max === e.max
        }

        function i9(t, e) {
            return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
        }

        function i8(t, e) {
            return i9(t.x, e.x) && i9(t.y, e.y)
        }

        function i7(t) {
            return eG(t.x) / eG(t.y)
        }

        function nt(t, e) {
            return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
        }

        class ne {
            constructor() {
                this.members = []
            }

            add(t) {
                (0, iF.y4)(this.members, t), t.scheduleRender()
            }

            remove(t) {
                if ((0, iF.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }

            relegate(t) {
                let e;
                let i = this.members.findIndex(e => t === e);
                if (0 === i) return !1;
                for (let t = i; t >= 0; t--) {
                    let i = this.members[t];
                    if (!1 !== i.isPresent) {
                        e = i;
                        break
                    }
                }
                return !!e && (this.promote(e), !0)
            }

            promote(t, e) {
                let i = this.lead;
                if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                    i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: n} = t.options;
                    !1 === n && i.hide()
                }
            }

            exitAnimationComplete() {
                this.members.forEach(t => {
                    let {options: e, resumingFrom: i} = t;
                    e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                })
            }

            scheduleRender() {
                this.members.forEach(t => {
                    t.instance && t.scheduleRender(!1)
                })
            }

            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }

        let ni = {type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0},
            nn = "undefined" != typeof window && void 0 !== window.MotionDebug, nr = ["", "X", "Y", "Z"],
            ns = {visibility: "hidden"}, no = 0;

        function na(t, e, i, n) {
            let {latestValues: r} = e;
            r[t] && (i[t] = r[t], e.setStaticValue(t, 0), n && (n[t] = 0))
        }

        function nl({
                        attachResizeListener: t,
                        defaultParent: e,
                        measureScroll: i,
                        checkIsScrollRoot: n,
                        resetTransform: r
                    }) {
            return class {
                constructor(t = {}, i = null == e ? void 0 : e()) {
                    this.id = no++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                        x: 1,
                        y: 1
                    }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                    }, this.updateProjection = () => {
                        this.projectionUpdateScheduled = !1, nn && (ni.totalNodes = ni.resolvedTargetDeltas = ni.recalculatedProjection = 0), this.nodes.forEach(nc), this.nodes.forEach(ny), this.nodes.forEach(nx), this.nodes.forEach(nd), nn && window.MotionDebug.record(ni)
                    }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new iB)
                }

                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new iN.L), this.eventHandlers.get(t).add(e)
                }

                notifyListeners(t, ...e) {
                    let i = this.eventHandlers.get(t);
                    i && i.notify(...e)
                }

                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }

                mount(e, i = this.root.hasTreeAnimated) {
                    if (this.instance) return;
                    this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                    let {layoutId: n, layout: r, visualElement: s} = this.options;
                    if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (r || n) && (this.isLayoutDirty = !0), t) {
                        let i;
                        let n = () => this.root.updateBlockedByResize = !1;
                        t(e, () => {
                            this.root.updateBlockedByResize = !0, i && i(), i = function (t, e) {
                                let i = tJ.X.now(), n = ({timestamp: e}) => {
                                    let r = e - i;
                                    r >= 250 && ((0, tt.Pn)(n), t(r - 250))
                                };
                                return tt.Wi.read(n, !0), () => (0, tt.Pn)(n)
                            }(n, 0), iC.hasAnimatedSinceResize && (iC.hasAnimatedSinceResize = !1, this.nodes.forEach(nv))
                        })
                    }
                    n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({
                                                                                                                                                        delta: t,
                                                                                                                                                        hasLayoutChanged: e,
                                                                                                                                                        hasRelativeTargetChanged: i,
                                                                                                                                                        layout: n
                                                                                                                                                    }) => {
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0, this.relativeTarget = void 0;
                            return
                        }
                        let r = this.options.transition || s.getDefaultTransition() || nA, {
                            onLayoutAnimationStart: o,
                            onLayoutAnimationComplete: a
                        } = s.getProps(), l = !this.targetLayout || !i8(this.targetLayout, n) || i, u = !e && i;
                        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                            let e = {...g(r, "layout"), onPlay: o, onComplete: a};
                            (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                        } else e || nv(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = n
                    })
                }

                unmount() {
                    this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, tt.Pn)(this.updateProjection)
                }

                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }

                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }

                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }

                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }

                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(nb), this.animationId++)
                }

                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }

                willUpdate(t = !0) {
                    if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                        if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                        let {visualElement: i} = e.options;
                        if (!i) return;
                        let n = i.props[Q];
                        if (window.MotionHasOptimisedAnimation(n, "transform")) {
                            let {layout: t, layoutId: i} = e.options;
                            window.MotionCancelOptimisedAnimation(n, "transform", tt.Wi, !(t || i))
                        }
                        let {parent: r} = e;
                        r && !r.hasCheckedOptimisedAppear && t(r)
                    }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: i} = this.options;
                    if (void 0 === e && !i) return;
                    let n = this.getTransformTemplate();
                    this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                }

                update() {
                    if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(np);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(nm), this.isUpdating = !1, this.nodes.forEach(ng), this.nodes.forEach(nu), this.nodes.forEach(nh), this.clearAllSnapshots();
                    let t = tJ.X.now();
                    tt.frameData.delta = (0, t5.u)(0, 1e3 / 60, t - tt.frameData.timestamp), tt.frameData.timestamp = t, tt.frameData.isProcessing = !0, tt.yL.update.process(tt.frameData), tt.yL.preRender.process(tt.frameData), tt.yL.render.process(tt.frameData), tt.frameData.isProcessing = !1
                }

                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0, iD.read(this.scheduleUpdate))
                }

                clearAllSnapshots() {
                    this.nodes.forEach(nf), this.sharedNodes.forEach(nP)
                }

                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, tt.Wi.preRender(this.updateProjection, !1, !0))
                }

                scheduleCheckAfterUnmount() {
                    tt.Wi.postRender(() => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    })
                }

                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }

                updateLayout() {
                    if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                    if (this.resumeFrom && !this.resumeFrom.instance) for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                    let t = this.layout;
                    this.layout = this.measure(!1), this.layoutCorrected = it(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }

                updateScroll(t = "measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e) {
                        let e = n(this.instance);
                        this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: e,
                            offset: i(this.instance),
                            wasRoot: this.scroll ? this.scroll.isRoot : e
                        }
                    }
                }

                resetTransform() {
                    if (!r) return;
                    let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                        e = this.projectionDelta && !i4(this.projectionDelta), i = this.getTransformTemplate(),
                        n = i ? i(this.latestValues, "") : void 0, s = n !== this.prevTransformTemplateValue;
                    t && (e || io(this.latestValues) || s) && (r(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                }

                measure(t = !0) {
                    var e;
                    let i = this.measurePageBox(), n = this.removeElementScroll(i);
                    return t && (n = this.removeTransform(n)), nC((e = n).x), nC(e.y), {
                        animationId: this.root.animationId,
                        measuredBox: i,
                        layoutBox: n,
                        latestValues: {},
                        source: this.id
                    }
                }

                measurePageBox() {
                    var t;
                    let {visualElement: e} = this.options;
                    if (!e) return it();
                    let i = e.measureViewportBox();
                    if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(nj))) {
                        let {scroll: t} = this.root;
                        t && (ic(i.x, t.offset.x), ic(i.y, t.offset.y))
                    }
                    return i
                }

                removeElementScroll(t) {
                    var e;
                    let i = it();
                    if (iG(i, t), null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) return i;
                    for (let e = 0; e < this.path.length; e++) {
                        let n = this.path[e], {scroll: r, options: s} = n;
                        n !== this.root && r && s.layoutScroll && (r.wasRoot && iG(i, t), ic(i.x, r.offset.x), ic(i.y, r.offset.y))
                    }
                    return i
                }

                applyTransform(t, e = !1) {
                    let i = it();
                    iG(i, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let n = this.path[t];
                        !e && n.options.layoutScroll && n.scroll && n !== n.root && ip(i, {
                            x: -n.scroll.offset.x,
                            y: -n.scroll.offset.y
                        }), io(n.latestValues) && ip(i, n.latestValues)
                    }
                    return io(this.latestValues) && ip(i, this.latestValues), i
                }

                removeTransform(t) {
                    let e = it();
                    iG(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t];
                        if (!i.instance || !io(i.latestValues)) continue;
                        is(i.latestValues) && i.updateSnapshot();
                        let n = it();
                        iG(n, i.measurePageBox()), i5(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                    }
                    return io(this.latestValues) && i5(e, this.latestValues), e
                }

                setTargetDelta(t) {
                    this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                }

                setOptions(t) {
                    this.options = {...this.options, ...t, crossfade: void 0 === t.crossfade || t.crossfade}
                }

                clearMeasurements() {
                    this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                }

                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tt.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }

                resolveTargetDelta(t = !1) {
                    var e, i, n, r;
                    let s = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                    let o = !!this.resumingFrom || this !== s;
                    if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                    let {layout: a, layoutId: l} = this.options;
                    if (this.layout && (a || l)) {
                        if (this.resolvedRelativeTargetAt = tt.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = it(), this.relativeTargetOrigin = it(), e2(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), iG(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = it(), this.targetWithTransforms = it()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, n = this.relativeTarget, r = this.relativeParent.target, e0(i.x, n.x, r.x), e0(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : iG(this.target, this.layout.layoutBox), ih(this.target, this.targetDelta)) : iG(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = it(), this.relativeTargetOrigin = it(), e2(this.relativeTargetOrigin, this.target, t.target), iG(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            nn && ni.resolvedTargetDeltas++
                        }
                    }
                }

                getClosestProjectingParent() {
                    return !this.parent || is(this.parent.latestValues) || ia(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }

                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }

                calcProjection() {
                    var t;
                    let e = this.getLead(), i = !!this.resumingFrom || this !== e, n = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === tt.frameData.timestamp && (n = !1), n) return;
                    let {layout: r, layoutId: s} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || s)) return;
                    iG(this.layoutCorrected, this.layout.layoutBox);
                    let o = this.treeScale.x, a = this.treeScale.y;
                    !function (t, e, i, n = !1) {
                        let r, s;
                        let o = i.length;
                        if (o) {
                            e.x = e.y = 1;
                            for (let a = 0; a < o; a++) {
                                s = (r = i[a]).projectionDelta;
                                let {visualElement: o} = r.options;
                                (!o || !o.props.style || "contents" !== o.props.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && ip(t, {
                                    x: -r.scroll.offset.x,
                                    y: -r.scroll.offset.y
                                }), s && (e.x *= s.x.scale, e.y *= s.y.scale, ih(t, s)), n && io(r.latestValues) && ip(t, r.latestValues))
                            }
                            e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = it());
                    let {target: l} = e;
                    if (!l) {
                        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                        return
                    }
                    this.projectionDelta && this.prevProjectionDelta ? (iJ(this.prevProjectionDelta.x, this.projectionDelta.x), iJ(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), eQ(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === o && this.treeScale.y === a && nt(this.projectionDelta.x, this.prevProjectionDelta.x) && nt(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), nn && ni.recalculatedProjection++
                }

                hide() {
                    this.isVisible = !1
                }

                show() {
                    this.isVisible = !0
                }

                scheduleRender(t = !0) {
                    var e;
                    if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(), t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }

                createProjectionDeltas() {
                    this.prevProjectionDelta = e8(), this.projectionDelta = e8(), this.projectionDeltaWithTransform = e8()
                }

                setAnimationOrigin(t, e = !1) {
                    let i;
                    let n = this.snapshot, r = n ? n.latestValues : {}, s = {...this.latestValues}, o = e8();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                    let a = it(), l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                        u = this.getStack(), h = !u || u.members.length <= 1,
                        c = !!(l && !h && !0 === this.options.crossfade && !this.path.some(nT));
                    this.animationProgress = 0, this.mixTargetDelta = e => {
                        let n = e / 1e3;
                        if (nw(o.x, t.x, n), nw(o.y, t.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var u, d, f, p;
                            e2(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), f = this.relativeTarget, p = this.relativeTargetOrigin, nS(f.x, p.x, a.x, n), nS(f.y, p.y, a.y, n), i && (u = this.relativeTarget, d = i, i6(u.x, d.x) && i6(u.y, d.y)) && (this.isProjectionDirty = !1), i || (i = it()), iG(i, this.relativeTarget)
                        }
                        l && (this.animationValues = s, function (t, e, i, n, r, s) {
                            r ? (t.opacity = (0, ed.t)(0, void 0 !== i.opacity ? i.opacity : 1, iX(n)), t.opacityExit = (0, ed.t)(void 0 !== e.opacity ? e.opacity : 1, 0, iq(n))) : s && (t.opacity = (0, ed.t)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                            for (let r = 0; r < i$; r++) {
                                let s = `border${iW[r]}Radius`, o = iY(e, s), a = iY(i, s);
                                (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || iK(o) === iK(a) ? (t[s] = Math.max((0, ed.t)(iz(o), iz(a), n), 0), (tS.aQ.test(a) || tS.aQ.test(o)) && (t[s] += "%")) : t[s] = a)
                            }
                            (e.rotate || i.rotate) && (t.rotate = (0, ed.t)(e.rotate || 0, i.rotate || 0, n))
                        }(s, r, this.latestValues, n, c, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                    }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }

                startAnimation(t) {
                    this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, tt.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tt.Wi.update(() => {
                        iC.hasAnimatedSinceResize = !0, this.currentAnimation = function (t, e, i) {
                            let n = Z(0) ? 0 : (0, H.BX)(0);
                            return n.start(eM("", n, 1e3, i)), n.animation
                        }(0, 0, {
                            ...t, onUpdate: e => {
                                this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                            }, onComplete: () => {
                                t.onComplete && t.onComplete(), this.completeAnimation()
                            }
                        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                    })
                }

                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                }

                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                }

                applyTransformsToTarget() {
                    let t = this.getLead(), {targetWithTransforms: e, target: i, layout: n, latestValues: r} = t;
                    if (e && i && n) {
                        if (this !== t && this.layout && n && nR(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                            i = this.target || it();
                            let e = eG(this.layout.layoutBox.x);
                            i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                            let n = eG(this.layout.layoutBox.y);
                            i.y.min = t.target.y.min, i.y.max = i.y.min + n
                        }
                        iG(e, i), ip(e, r), eQ(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                    }
                }

                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new ne), this.sharedNodes.get(t).add(e);
                    let i = e.options.initialPromotionConfig;
                    e.promote({
                        transition: i ? i.transition : void 0,
                        preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                    })
                }

                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }

                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }

                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }

                getStack() {
                    let {layoutId: t} = this.options;
                    if (t) return this.root.sharedNodes.get(t)
                }

                promote({needsReset: t, transition: e, preserveFollowOpacity: i} = {}) {
                    let n = this.getStack();
                    n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({transition: e})
                }

                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }

                resetSkewAndRotation() {
                    let {visualElement: t} = this.options;
                    if (!t) return;
                    let e = !1, {latestValues: i} = t;
                    if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
                    let n = {};
                    i.z && na("z", t, n, this.animationValues);
                    for (let e = 0; e < nr.length; e++) na(`rotate${nr[e]}`, t, n, this.animationValues), na(`skew${nr[e]}`, t, n, this.animationValues);
                    for (let e in t.render(), n) t.setStaticValue(e, n[e]), this.animationValues && (this.animationValues[e] = n[e]);
                    t.scheduleRender()
                }

                getProjectionStyles(t) {
                    var e, i;
                    if (!this.instance || this.isSVG) return;
                    if (!this.isVisible) return ns;
                    let n = {visibility: ""}, r = this.getTransformTemplate();
                    if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = iU(null == t ? void 0 : t.pointerEvents) || "", n.transform = r ? r(this.latestValues, "") : "none", n;
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = iU(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !io(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
                    }
                    let o = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(), n.transform = function (t, e, i) {
                        let n = "", r = t.x.translate / e.x, s = t.y.translate / e.y,
                            o = (null == i ? void 0 : i.z) || 0;
                        if ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `), i) {
                            let {transformPerspective: t, rotate: e, rotateX: r, rotateY: s, skewX: o, skewY: a} = i;
                            t && (n = `perspective(${t}px) ${n}`), e && (n += `rotate(${e}deg) `), r && (n += `rotateX(${r}deg) `), s && (n += `rotateY(${s}deg) `), o && (n += `skewX(${o}deg) `), a && (n += `skewY(${a}deg) `)
                        }
                        let a = t.x.scale * e.x, l = t.y.scale * e.y;
                        return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none"
                    }(this.projectionDeltaWithTransform, this.treeScale, o), r && (n.transform = r(o, n.transform));
                    let {x: a, y: l} = this.projectionDelta;
                    for (let t in n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`, s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, ik) {
                        if (void 0 === o[t]) continue;
                        let {correct: e, applyTo: i} = ik[t], r = "none" === n.transform ? o[t] : e(o[t], s);
                        if (i) {
                            let t = i.length;
                            for (let e = 0; e < t; e++) n[i[e]] = r
                        } else n[t] = r
                    }
                    return this.options.layoutId && (n.pointerEvents = s === this ? iU(null == t ? void 0 : t.pointerEvents) || "" : "none"), n
                }

                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }

                resetTree() {
                    this.root.nodes.forEach(t => {
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }), this.root.nodes.forEach(np), this.root.sharedNodes.clear()
                }
            }
        }

        function nu(t) {
            t.updateLayout()
        }

        function nh(t) {
            var e;
            let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: n} = t.layout, {animationType: r} = t.options,
                    s = i.source !== t.layout.source;
                "size" === r ? ie(t => {
                    let n = s ? i.measuredBox[t] : i.layoutBox[t], r = eG(n);
                    n.min = e[t].min, n.max = n.min + r
                }) : nR(r, i.layoutBox, e) && ie(n => {
                    let r = s ? i.measuredBox[n] : i.layoutBox[n], o = eG(e[n]);
                    r.max = r.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                });
                let o = e8();
                eQ(o, e, i.layoutBox);
                let a = e8();
                s ? eQ(a, t.applyTransform(n, !0), i.measuredBox) : eQ(a, e, i.layoutBox);
                let l = !i4(o), u = !1;
                if (!t.resumeFrom) {
                    let n = t.getClosestProjectingParent();
                    if (n && !n.resumeFrom) {
                        let {snapshot: r, layout: s} = n;
                        if (r && s) {
                            let o = it();
                            e2(o, i.layoutBox, r.layoutBox);
                            let a = it();
                            e2(a, e, s.layoutBox), i8(o, a) || (u = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = n)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: i,
                    delta: a,
                    layoutDelta: o,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }

        function nc(t) {
            nn && ni.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }

        function nd(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }

        function nf(t) {
            t.clearSnapshot()
        }

        function np(t) {
            t.clearMeasurements()
        }

        function nm(t) {
            t.isLayoutDirty = !1
        }

        function ng(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
        }

        function nv(t) {
            t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
        }

        function ny(t) {
            t.resolveTargetDelta()
        }

        function nx(t) {
            t.calcProjection()
        }

        function nb(t) {
            t.resetSkewAndRotation()
        }

        function nP(t) {
            t.removeLeadSnapshot()
        }

        function nw(t, e, i) {
            t.translate = (0, ed.t)(e.translate, 0, i), t.scale = (0, ed.t)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
        }

        function nS(t, e, i, n) {
            t.min = (0, ed.t)(e.min, i.min, n), t.max = (0, ed.t)(e.max, i.max, n)
        }

        function nT(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }

        let nA = {duration: .45, ease: [.4, 0, .1, 1]},
            nE = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
            nM = nE("applewebkit/") && !nE("chrome/") ? Math.round : $.Z;

        function nC(t) {
            t.min = nM(t.min), t.max = nM(t.max)
        }

        function nR(t, e, i) {
            return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(i7(e) - i7(i)))
        }

        function nj(t) {
            var e;
            return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        }

        let nk = nl({
            attachResizeListener: (t, e) => eN(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        }), nD = {current: void 0}, nV = nl({
            measureScroll: t => ({x: t.scrollLeft, y: t.scrollTop}), defaultParent: () => {
                if (!nD.current) {
                    let t = new nk({});
                    t.mount(window), t.setOptions({layoutScroll: !0}), nD.current = t
                }
                return nD.current
            }, resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            }, checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        });

        function nO(t, e, i) {
            let {props: n} = t;
            t.animationState && n.whileHover && t.animationState.setActive("whileHover", "Start" === i);
            let r = n["onHover" + i];
            r && tt.Wi.postRender(() => r(e, eU(e)))
        }

        class nL extends e_ {
            mount() {
                let {current: t} = this.node;
                t && (this.unmount = function (t, e, i = {}) {
                    let [n, r, s] = k(t, i), o = D(t => {
                        let {target: i} = t, n = e(t);
                        if ("function" != typeof n || !i) return;
                        let s = D(t => {
                            n(t), i.removeEventListener("pointerleave", s)
                        });
                        i.addEventListener("pointerleave", s, r)
                    });
                    return n.forEach(t => {
                        t.addEventListener("pointerenter", o, r)
                    }), s
                }(t, t => (nO(this.node, t, "Start"), t => nO(this.node, t, "End"))))
            }

            unmount() {
            }
        }

        class n_ extends e_ {
            constructor() {
                super(...arguments), this.isActive = !1
            }

            onFocus() {
                let t = !1;
                try {
                    t = this.node.current.matches(":focus-visible")
                } catch (e) {
                    t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
            }

            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
            }

            mount() {
                this.unmount = (0, t4.z)(eN(this.node.current, "focus", () => this.onFocus()), eN(this.node.current, "blur", () => this.onBlur()))
            }

            unmount() {
            }
        }

        function nF(t, e, i) {
            let {props: n} = t;
            t.animationState && n.whileTap && t.animationState.setActive("whileTap", "Start" === i);
            let r = n["onTap" + ("End" === i ? "" : i)];
            r && tt.Wi.postRender(() => r(e, eU(e)))
        }

        class nI extends e_ {
            mount() {
                let {current: t} = this.node;
                t && (this.unmount = function (t, e, i = {}) {
                    let [n, r, s] = k(t, i), o = t => {
                        let n = t.currentTarget;
                        if (!N(t) || _.has(n)) return;
                        _.add(n);
                        let s = e(t), o = (t, e) => {
                            window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", l), N(t) && _.has(n) && (_.delete(n), "function" == typeof s && s(t, {success: e}))
                        }, a = t => {
                            o(t, i.useGlobalTarget || V(n, t.target))
                        }, l = t => {
                            o(t, !1)
                        };
                        window.addEventListener("pointerup", a, r), window.addEventListener("pointercancel", l, r)
                    };
                    return n.forEach(t => {
                        L.has(t.tagName) || -1 !== t.tabIndex || null !== t.getAttribute("tabindex") || (t.tabIndex = 0), (i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, r), t.addEventListener("focus", t => B(t, r), r)
                    }), s
                }(t, t => (nF(this.node, t, "Start"), (t, {success: e}) => nF(this.node, t, e ? "End" : "Cancel")), {useGlobalTarget: this.node.props.globalTapTarget}))
            }

            unmount() {
            }
        }

        let nB = new WeakMap, nN = new WeakMap, nU = t => {
            let e = nB.get(t.target);
            e && e(t)
        }, nW = t => {
            t.forEach(nU)
        }, n$ = {some: 0, all: 1};

        class nz extends e_ {
            constructor() {
                super(...arguments), this.hasEnteredView = !1, this.isInView = !1
            }

            startObserver() {
                this.unmount();
                let {viewport: t = {}} = this.node.getProps(), {root: e, margin: i, amount: n = "some", once: r} = t,
                    s = {root: e ? e.current : void 0, rootMargin: i, threshold: "number" == typeof n ? n : n$[n]};
                return function (t, e, i) {
                    let n = function ({root: t, ...e}) {
                        let i = t || document;
                        nN.has(i) || nN.set(i, {});
                        let n = nN.get(i), r = JSON.stringify(e);
                        return n[r] || (n[r] = new IntersectionObserver(nW, {root: t, ...e})), n[r]
                    }(e);
                    return nB.set(t, i), n.observe(t), () => {
                        nB.delete(t), n.unobserve(t)
                    }
                }(this.node.current, s, t => {
                    let {isIntersecting: e} = t;
                    if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                    e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                    let {onViewportEnter: i, onViewportLeave: n} = this.node.getProps(), s = e ? i : n;
                    s && s(t)
                })
            }

            mount() {
                this.startObserver()
            }

            update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let {props: t, prevProps: e} = this.node;
                ["amount", "margin", "root"].some(function ({viewport: t = {}}, {viewport: e = {}} = {}) {
                    return i => t[i] !== e[i]
                }(t, e)) && this.startObserver()
            }

            unmount() {
            }
        }

        let nK = (0, iT.createContext)({strict: !1});
        var nY = i(5750);
        let nX = (0, iT.createContext)({});

        function nq(t) {
            return n(t.animate) || c.some(e => o(t[e]))
        }

        function nH(t) {
            return !!(nq(t) || t.variants)
        }

        function nZ(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }

        var nG = i(4563);
        let nJ = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }, nQ = {};
        for (let t in nJ) nQ[t] = {isEnabled: e => nJ[t].some(t => !!e[t])};
        let n0 = Symbol.for("motionComponentSymbol");
        var n1 = i(4252), n2 = i(1534);
        let n5 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

        function n3(t) {
            if ("string" != typeof t || t.includes("-")) ; else if (n5.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
            return !1
        }

        var n4 = i(3576);
        let n6 = t => (e, i) => {
                let r = (0, iT.useContext)(nX), s = (0, iT.useContext)(n1.O),
                    o = () => (function ({scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: i}, r, s, o) {
                        let a = {
                            latestValues: function (t, e, i, r) {
                                let s = {}, o = r(t, {});
                                for (let t in o) s[t] = iU(o[t]);
                                let {initial: a, animate: u} = t, h = nq(t), c = nH(t);
                                e && c && !h && !1 !== t.inherit && (void 0 === a && (a = e.initial), void 0 === u && (u = e.animate));
                                let d = !!i && !1 === i.initial, f = (d = d || !1 === a) ? u : a;
                                if (f && "boolean" != typeof f && !n(f)) {
                                    let e = Array.isArray(f) ? f : [f];
                                    for (let i = 0; i < e.length; i++) {
                                        let n = l(t, e[i]);
                                        if (n) {
                                            let {transitionEnd: t, transition: e, ...i} = n;
                                            for (let t in i) {
                                                let e = i[t];
                                                if (Array.isArray(e)) {
                                                    let t = d ? e.length - 1 : 0;
                                                    e = e[t]
                                                }
                                                null !== e && (s[t] = e)
                                            }
                                            for (let e in t) s[e] = t[e]
                                        }
                                    }
                                }
                                return s
                            }(r, s, o, t), renderState: e()
                        };
                        return i && (a.onMount = t => i({props: r, current: t, ...a}), a.onUpdate = t => i(t)), a
                    })(t, e, r, s);
                return i ? o() : (0, n4.h)(o)
            }, n9 = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
            n8 = {x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective"},
            n7 = z.length;

        function rt(t, e, i) {
            let {style: n, vars: r, transformOrigin: s} = t, o = !1, a = !1;
            for (let t in e) {
                let i = e[t];
                if (K.has(t)) {
                    o = !0;
                    continue
                }
                if ((0, tY.f)(t)) {
                    r[t] = i;
                    continue
                }
                {
                    let e = n9(i, tM[t]);
                    t.startsWith("origin") ? (a = !0, s[t] = e) : n[t] = e
                }
            }
            if (!e.transform && (o || i ? n.transform = function (t, e, i) {
                let n = "", r = !0;
                for (let s = 0; s < n7; s++) {
                    let o = z[s], a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (!(l = "number" == typeof a ? a === (o.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a)) || i) {
                        let t = n9(a, tM[o]);
                        if (!l) {
                            r = !1;
                            let e = n8[o] || o;
                            n += `${e}(${t}) `
                        }
                        i && (e[o] = t)
                    }
                }
                return n = n.trim(), i ? n = i(e, r ? "" : n) : r && (n = "none"), n
            }(e, t.transform, i) : n.transform && (n.transform = "none")), a) {
                let {originX: t = "50%", originY: e = "50%", originZ: i = 0} = s;
                n.transformOrigin = `${t} ${e} ${i}`
            }
        }

        let re = {offset: "stroke-dashoffset", array: "stroke-dasharray"},
            ri = {offset: "strokeDashoffset", array: "strokeDasharray"};

        function rn(t, e, i) {
            return "string" == typeof t ? t : tS.px.transform(e + i * t)
        }

        function rr(t, {
            attrX: e,
            attrY: i,
            attrScale: n,
            originX: r,
            originY: s,
            pathLength: o,
            pathSpacing: a = 1,
            pathOffset: l = 0,
            ...u
        }, h, c) {
            if (rt(t, u, c), h) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style, t.style = {};
            let {attrs: d, style: f, dimensions: p} = t;
            d.transform && (p && (f.transform = d.transform), delete d.transform), p && (void 0 !== r || void 0 !== s || f.transform) && (f.transformOrigin = function (t, e, i) {
                let n = rn(e, t.x, t.width), r = rn(i, t.y, t.height);
                return `${n} ${r}`
            }(p, void 0 !== r ? r : .5, void 0 !== s ? s : .5)), void 0 !== e && (d.x = e), void 0 !== i && (d.y = i), void 0 !== n && (d.scale = n), void 0 !== o && function (t, e, i = 1, n = 0, r = !0) {
                t.pathLength = 1;
                let s = r ? re : ri;
                t[s.offset] = tS.px.transform(-n);
                let o = tS.px.transform(e), a = tS.px.transform(i);
                t[s.array] = `${o} ${a}`
            }(d, o, a, l, !1)
        }

        let rs = () => ({style: {}, transform: {}, transformOrigin: {}, vars: {}}), ro = () => ({...rs(), attrs: {}}),
            ra = t => "string" == typeof t && "svg" === t.toLowerCase();

        function rl(t, {style: e, vars: i}, n, r) {
            for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)), i) t.style.setProperty(s, i[s])
        }

        let ru = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

        function rh(t, e, i, n) {
            for (let i in rl(t, e, void 0, n), e.attrs) t.setAttribute(ru.has(i) ? i : J(i), e.attrs[i])
        }

        function rc(t, {layout: e, layoutId: i}) {
            return K.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!ik[t] || "opacity" === t)
        }

        function rd(t, e, i) {
            var n;
            let {style: r} = t, s = {};
            for (let o in r) (Z(r[o]) || e.style && Z(e.style[o]) || rc(o, t) || (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n ? void 0 : n.liveStyle) !== void 0) && (s[o] = r[o]);
            return s
        }

        function rf(t, e, i) {
            let n = rd(t, e, i);
            for (let i in t) (Z(t[i]) || Z(e[i])) && (n[-1 !== z.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
            return n
        }

        let rp = ["x", "y", "width", "height", "cx", "cy", "r"], rm = {
            useVisualState: n6({
                scrapeMotionValuesFromProps: rf,
                createRenderState: ro,
                onUpdate: ({props: t, prevProps: e, current: i, renderState: n, latestValues: r}) => {
                    if (!i) return;
                    let s = !!t.drag;
                    if (!s) {
                        for (let t in r) if (K.has(t)) {
                            s = !0;
                            break
                        }
                    }
                    if (!s) return;
                    let o = !e;
                    if (e) for (let i = 0; i < rp.length; i++) {
                        let n = rp[i];
                        t[n] !== e[n] && (o = !0)
                    }
                    o && tt.Wi.read(() => {
                        !function (t, e) {
                            try {
                                e.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                            } catch (t) {
                                e.dimensions = {x: 0, y: 0, width: 0, height: 0}
                            }
                        }(i, n), tt.Wi.render(() => {
                            rr(n, r, ra(i.tagName), t.transformTemplate), rh(i, n)
                        })
                    })
                }
            })
        }, rg = {useVisualState: n6({scrapeMotionValuesFromProps: rd, createRenderState: rs})};

        function rv(t, e, i) {
            for (let n in e) Z(e[n]) || rc(n, i) || (t[n] = e[n])
        }

        let ry = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

        function rx(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || ry.has(t)
        }

        let rb = t => !rx(t);
        try {
            (S = require("@emotion/is-prop-valid").default) && (rb = t => t.startsWith("on") ? !rx(t) : S(t))
        } catch (t) {
        }
        let rP = {current: null}, rw = {current: !1}, rS = [...tH, tP.$, tm.P], rT = t => rS.find(tq(t)),
            rA = new WeakMap,
            rE = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];

        class rM {
            scrapeMotionValuesFromProps(t, e, i) {
                return {}
            }

            constructor({
                            parent: t,
                            props: e,
                            presenceContext: i,
                            reducedMotionConfig: n,
                            blockInitialAnimation: r,
                            visualState: s
                        }, o = {}) {
                this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = t$, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                    this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                    let t = tJ.X.now();
                    this.renderScheduledAt < t && (this.renderScheduledAt = t, tt.Wi.render(this.render, !1, !0))
                };
                let {latestValues: a, renderState: l, onUpdate: u} = s;
                this.onUpdate = u, this.latestValues = a, this.baseTarget = {...a}, this.initialValues = e.initial ? {...a} : {}, this.renderState = l, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = o, this.blockInitialAnimation = !!r, this.isControllingVariants = nq(e), this.isVariantNode = nH(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: h, ...c} = this.scrapeMotionValuesFromProps(e, {}, this);
                for (let t in c) {
                    let e = c[t];
                    void 0 !== a[t] && Z(e) && e.set(a[t], !1)
                }
            }

            mount(t) {
                this.current = t, rA.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), rw.current || function () {
                    if (rw.current = !0, nG.j) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)"), e = () => rP.current = t.matches;
                            t.addListener(e), e()
                        } else rP.current = !1
                    }
                }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || rP.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
            }

            unmount() {
                for (let t in rA.delete(this.current), this.projection && this.projection.unmount(), (0, tt.Pn)(this.notifyUpdate), (0, tt.Pn)(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                for (let t in this.features) {
                    let e = this.features[t];
                    e && (e.unmount(), e.isMounted = !1)
                }
                this.current = null
            }

            bindToMotionValue(t, e) {
                let i;
                this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                let n = K.has(t), r = e.on("change", e => {
                    this.latestValues[t] = e, this.props.onUpdate && tt.Wi.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0)
                }), s = e.on("renderRequest", this.scheduleRender);
                window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                    r(), s(), i && i(), e.owner && e.stop()
                })
            }

            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }

            updateFeatures() {
                let t = "animation";
                for (t in nQ) {
                    let e = nQ[t];
                    if (!e) continue;
                    let {isEnabled: i, Feature: n} = e;
                    if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)), this.features[t]) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                    }
                }
            }

            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.props)
            }

            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : it()
            }

            getStaticValue(t) {
                return this.latestValues[t]
            }

            setStaticValue(t, e) {
                this.latestValues[t] = e
            }

            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                for (let e = 0; e < rE.length; e++) {
                    let i = rE[e];
                    this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                    let n = t["on" + i];
                    n && (this.propEventSubscriptions[i] = this.on(i, n))
                }
                this.prevMotionValues = function (t, e, i) {
                    for (let n in e) {
                        let r = e[n], s = i[n];
                        if (Z(r)) t.addValue(n, r); else if (Z(s)) t.addValue(n, (0, H.BX)(r, {owner: t})); else if (s !== r) {
                            if (t.hasValue(n)) {
                                let e = t.getValue(n);
                                !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                            } else {
                                let e = t.getStaticValue(n);
                                t.addValue(n, (0, H.BX)(void 0 !== e ? e : r, {owner: t}))
                            }
                        }
                    }
                    for (let n in i) void 0 === e[n] && t.removeValue(n);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
            }

            getProps() {
                return this.props
            }

            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }

            getDefaultTransition() {
                return this.props.transition
            }

            getTransformPagePoint() {
                return this.props.transformPagePoint
            }

            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }

            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
            }

            addValue(t, e) {
                let i = this.values.get(t);
                e !== i && (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
            }

            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
            }

            hasValue(t) {
                return this.values.has(t)
            }

            getValue(t, e) {
                if (this.props.values && this.props.values[t]) return this.props.values[t];
                let i = this.values.get(t);
                return void 0 === i && void 0 !== e && (i = (0, H.BX)(null === e ? void 0 : e, {owner: this}), this.addValue(t, i)), i
            }

            readValue(t, e) {
                var i;
                let n = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                return null != n && ("string" == typeof n && (tK(n) || tp(n)) ? n = parseFloat(n) : !rT(n) && tm.P.test(e) && (n = tj(t, e)), this.setBaseTarget(t, Z(n) ? n.get() : n)), Z(n) ? n.get() : n
            }

            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }

            getBaseTarget(t) {
                var e;
                let i;
                let {initial: n} = this.props;
                if ("string" == typeof n || "object" == typeof n) {
                    let r = l(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                    r && (i = r[t])
                }
                if (n && void 0 !== i) return i;
                let r = this.getBaseTargetFromProps(this.props, t);
                return void 0 === r || Z(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
            }

            on(t, e) {
                return this.events[t] || (this.events[t] = new iN.L), this.events[t].add(e)
            }

            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }

        class rC extends rM {
            constructor() {
                super(...arguments), this.KeyframeResolver = tG
            }

            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }

            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }

            removeValueFromRenderState(t, {vars: e, style: i}) {
                delete e[t], delete i[t]
            }

            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                let {children: t} = this.props;
                Z(t) && (this.childSubscription = t.on("change", t => {
                    this.current && (this.current.textContent = `${t}`)
                }))
            }
        }

        class rR extends rC {
            constructor() {
                super(...arguments), this.type = "html", this.renderInstance = rl
            }

            readValueFromInstance(t, e) {
                if (K.has(e)) {
                    let t = tR(e);
                    return t && t.default || 0
                }
                {
                    let i = window.getComputedStyle(t), n = ((0, tY.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
                    return "string" == typeof n ? n.trim() : n
                }
            }

            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return im(t, e)
            }

            build(t, e, i) {
                rt(t, e, i.transformTemplate)
            }

            scrapeMotionValuesFromProps(t, e, i) {
                return rd(t, e, i)
            }
        }

        class rj extends rC {
            constructor() {
                super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = it
            }

            getBaseTargetFromProps(t, e) {
                return t[e]
            }

            readValueFromInstance(t, e) {
                if (K.has(e)) {
                    let t = tR(e);
                    return t && t.default || 0
                }
                return e = ru.has(e) ? e : J(e), t.getAttribute(e)
            }

            scrapeMotionValuesFromProps(t, e, i) {
                return rf(t, e, i)
            }

            build(t, e, i) {
                rr(t, e, this.isSVGTag, i.transformTemplate)
            }

            renderInstance(t, e, i, n) {
                rh(t, e, i, n)
            }

            mount(t) {
                this.isSVGTag = ra(t.tagName), super.mount(t)
            }
        }

        let rk = function (t) {
            if ("undefined" == typeof Proxy) return t;
            let e = new Map;
            return new Proxy((...e) => t(...e), {get: (i, n) => "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n))})
        }((T = {
            animation: {Feature: eF},
            exit: {Feature: eB},
            inView: {Feature: nz},
            tap: {Feature: nI},
            focus: {Feature: n_},
            hover: {Feature: nL},
            pan: {Feature: iw},
            drag: {Feature: ib, ProjectionNode: nV, MeasureLayout: iL},
            layout: {ProjectionNode: nV, MeasureLayout: iL}
        }, A = (t, e) => n3(t) ? new rj(e) : new rR(e, {allowProjection: t !== iT.Fragment}), function (t, {forwardMotionProps: e} = {forwardMotionProps: !1}) {
            return function (t) {
                var e, i;
                let {preloadedFeatures: n, createVisualElement: r, useRender: s, useVisualState: a, Component: l} = t;

                function u(t, e) {
                    var i;
                    let n;
                    let u = {
                        ...(0, iT.useContext)(nY._), ...t, layoutId: function (t) {
                            let {layoutId: e} = t, i = (0, iT.useContext)(iE.p).id;
                            return i && void 0 !== e ? i + "-" + e : e
                        }(t)
                    }, {isStatic: h} = u, c = function (t) {
                        let {initial: e, animate: i} = function (t, e) {
                            if (nq(t)) {
                                let {initial: e, animate: i} = t;
                                return {initial: !1 === e || o(e) ? e : void 0, animate: o(i) ? i : void 0}
                            }
                            return !1 !== t.inherit ? e : {}
                        }(t, (0, iT.useContext)(nX));
                        return (0, iT.useMemo)(() => ({initial: e, animate: i}), [nZ(e), nZ(i)])
                    }(t), d = a(t, h);
                    if (!h && nG.j) {
                        (0, iT.useContext)(nK).strict;
                        let t = function (t) {
                            let {drag: e, layout: i} = nQ;
                            if (!e && !i) return {};
                            let n = {...e, ...i};
                            return {
                                MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? n.MeasureLayout : void 0,
                                ProjectionNode: n.ProjectionNode
                            }
                        }(u);
                        n = t.MeasureLayout, c.visualElement = function (t, e, i, n, r) {
                            var s, o;
                            let {visualElement: a} = (0, iT.useContext)(nX), l = (0, iT.useContext)(nK),
                                u = (0, iT.useContext)(n1.O), h = (0, iT.useContext)(nY._).reducedMotion,
                                c = (0, iT.useRef)(null);
                            n = n || l.renderer, !c.current && n && (c.current = n(t, {
                                visualState: e,
                                parent: a,
                                props: i,
                                presenceContext: u,
                                blockInitialAnimation: !!u && !1 === u.initial,
                                reducedMotionConfig: h
                            }));
                            let d = c.current, f = (0, iT.useContext)(iM);
                            d && !d.projection && r && ("html" === d.type || "svg" === d.type) && function (t, e, i, n) {
                                let {
                                    layoutId: r,
                                    layout: s,
                                    drag: o,
                                    dragConstraints: a,
                                    layoutScroll: l,
                                    layoutRoot: u
                                } = e;
                                t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                    if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                }(t.parent)), t.projection.setOptions({
                                    layoutId: r,
                                    layout: s,
                                    alwaysMeasureLayout: !!o || a && eZ(a),
                                    visualElement: t,
                                    animationType: "string" == typeof s ? s : "both",
                                    initialPromotionConfig: n,
                                    layoutScroll: l,
                                    layoutRoot: u
                                })
                            }(c.current, i, r, f);
                            let p = (0, iT.useRef)(!1);
                            (0, iT.useInsertionEffect)(() => {
                                d && p.current && d.update(i, u)
                            });
                            let m = i[Q],
                                g = (0, iT.useRef)(!!m && !(null === (s = window.MotionHandoffIsComplete) || void 0 === s ? void 0 : s.call(window, m)) && (null === (o = window.MotionHasOptimisedAnimation) || void 0 === o ? void 0 : o.call(window, m)));
                            return (0, n2.L)(() => {
                                d && (p.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), iD.render(d.render), g.current && d.animationState && d.animationState.animateChanges())
                            }), (0, iT.useEffect)(() => {
                                d && (!g.current && d.animationState && d.animationState.animateChanges(), g.current && (queueMicrotask(() => {
                                    var t;
                                    null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, m)
                                }), g.current = !1))
                            }), d
                        }(l, d, u, r, t.ProjectionNode)
                    }
                    return (0, iS.jsxs)(nX.Provider, {
                        value: c,
                        children: [n && c.visualElement ? (0, iS.jsx)(n, {visualElement: c.visualElement, ...u}) : null, s(l, t, (i = c.visualElement, (0, iT.useCallback)(t => {
                            t && d.onMount && d.onMount(t), i && (t ? i.mount(t) : i.unmount()), e && ("function" == typeof e ? e(t) : eZ(e) && (e.current = t))
                        }, [i])), d, h, c.visualElement)]
                    })
                }

                n && function (t) {
                    for (let e in t) nQ[e] = {...nQ[e], ...t[e]}
                }(n), u.displayName = "motion.".concat("string" == typeof l ? l : "create(".concat(null !== (i = null !== (e = l.displayName) && void 0 !== e ? e : l.name) && void 0 !== i ? i : "", ")"));
                let h = (0, iT.forwardRef)(u);
                return h[n0] = l, h
            }({
                ...n3(t) ? rm : rg, preloadedFeatures: T, useRender: function (t = !1) {
                    return (e, i, n, {latestValues: r}, s) => {
                        let o = (n3(e) ? function (t, e, i, n) {
                                let r = (0, iT.useMemo)(() => {
                                    let i = ro();
                                    return rr(i, e, ra(n), t.transformTemplate), {...i.attrs, style: {...i.style}}
                                }, [e]);
                                if (t.style) {
                                    let e = {};
                                    rv(e, t.style, t), r.style = {...e, ...r.style}
                                }
                                return r
                            } : function (t, e) {
                                let i = {}, n = function (t, e) {
                                    let i = t.style || {}, n = {};
                                    return rv(n, i, t), Object.assign(n, function ({transformTemplate: t}, e) {
                                        return (0, iT.useMemo)(() => {
                                            let i = rs();
                                            return rt(i, e, t), Object.assign({}, i.vars, i.style)
                                        }, [e])
                                    }(t, e)), n
                                }(t, e);
                                return t.drag && !1 !== t.dragListener && (i.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0), i.style = n, i
                            })(i, r, s, e), a = function (t, e, i) {
                                let n = {};
                                for (let r in t) ("values" !== r || "object" != typeof t.values) && (rb(r) || !0 === i && rx(r) || !e && !rx(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                                return n
                            }(i, "string" == typeof e, t),
                            l = e !== iT.Fragment ? {...a, ...o, ref: n} : {}, {children: u} = i,
                            h = (0, iT.useMemo)(() => Z(u) ? u.get() : u, [u]);
                        return (0, iT.createElement)(e, {...l, children: h})
                    }
                }(e), createVisualElement: A, Component: t
            })
        }))
    }, 7249: function (t, e, i) {
        i.d(e, {
            f: function () {
                return r
            }, t: function () {
                return o
            }
        });
        let n = t => e => "string" == typeof e && e.startsWith(t), r = n("--"), s = n("var(--"),
            o = t => !!s(t) && a.test(t.split("/*")[0].trim()),
            a = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
    }, 4118: function (t, e, i) {
        i.d(e, {
            c: function () {
                return n
            }
        });
        let n = {skipAnimations: !1, useManualTiming: !1}
    }, 9013: function (t, e, i) {
        function n(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }

        function r(t, e) {
            let i = t.indexOf(e);
            i > -1 && t.splice(i, 1)
        }

        i.d(e, {
            cl: function () {
                return r
            }, y4: function () {
                return n
            }
        })
    }, 9111: function (t, e, i) {
        i.d(e, {
            u: function () {
                return n
            }
        });
        let n = (t, e, i) => i > e ? e : i < t ? t : i
    }, 8843: function (t, e, i) {
        i.d(e, {
            s: function () {
                return u
            }
        });
        var n = i(6277), r = i(2035), s = i(1645), o = i(9111), a = i(2006), l = i(332);

        function u(t, e, {clamp: i = !0, ease: u, mixer: h} = {}) {
            let c = t.length;
            if ((0, r.k)(c === e.length, "Both input and output ranges must be the same length"), 1 === c) return () => e[0];
            if (2 === c && e[0] === e[1]) return () => e[1];
            let d = t[0] === t[1];
            t[0] > t[c - 1] && (t = [...t].reverse(), e = [...e].reverse());
            let f = function (t, e, i) {
                let r = [], s = i || a.C, o = t.length - 1;
                for (let i = 0; i < o; i++) {
                    let o = s(t[i], t[i + 1]);
                    if (e) {
                        let t = Array.isArray(e) ? e[i] || n.Z : e;
                        o = (0, l.z)(t, o)
                    }
                    r.push(o)
                }
                return r
            }(e, u, h), p = f.length, m = i => {
                if (d && i < t[0]) return e[0];
                let n = 0;
                if (p > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++) ;
                let r = (0, s.Y)(t[n], t[n + 1], i);
                return f[n](r)
            };
            return i ? e => m((0, o.u)(t[0], t[c - 1], e)) : m
        }
    }, 4563: function (t, e, i) {
        i.d(e, {
            j: function () {
                return n
            }
        });
        let n = "undefined" != typeof window
    }, 2006: function (t, e, i) {
        i.d(e, {
            C: function () {
                return A
            }
        });
        var n = i(6781), r = i(2035);

        function s(t, e, i) {
            return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }

        var o = i(7325), a = i(8859), l = i(2943);

        function u(t, e) {
            return i => i > 0 ? e : t
        }

        let h = (t, e, i) => {
            let n = t * t, r = i * (e * e - n) + n;
            return r < 0 ? 0 : Math.sqrt(r)
        }, c = [o.$, a.m, l.J], d = t => c.find(e => e.test(t));

        function f(t) {
            let e = d(t);
            if ((0, r.K)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e) return !1;
            let i = e.parse(t);
            return e === l.J && (i = function ({hue: t, saturation: e, lightness: i, alpha: n}) {
                t /= 360, i /= 100;
                let r = 0, o = 0, a = 0;
                if (e /= 100) {
                    let n = i < .5 ? i * (1 + e) : i + e - i * e, l = 2 * i - n;
                    r = s(l, n, t + 1 / 3), o = s(l, n, t), a = s(l, n, t - 1 / 3)
                } else r = o = a = i;
                return {red: Math.round(255 * r), green: Math.round(255 * o), blue: Math.round(255 * a), alpha: n}
            }(i)), i
        }

        let p = (t, e) => {
            let i = f(t), r = f(e);
            if (!i || !r) return u(t, e);
            let s = {...i};
            return t => (s.red = h(i.red, r.red, t), s.green = h(i.green, r.green, t), s.blue = h(i.blue, r.blue, t), s.alpha = (0, n.t)(i.alpha, r.alpha, t), a.m.transform(s))
        };
        var m = i(332), g = i(3964), v = i(3206), y = i(7249);
        let x = new Set(["none", "hidden"]);

        function b(t, e) {
            return i => (0, n.t)(t, e, i)
        }

        function P(t) {
            return "number" == typeof t ? b : "string" == typeof t ? (0, y.t)(t) ? u : g.$.test(t) ? p : T : Array.isArray(t) ? w : "object" == typeof t ? g.$.test(t) ? p : S : u
        }

        function w(t, e) {
            let i = [...t], n = i.length, r = t.map((t, i) => P(t)(t, e[i]));
            return t => {
                for (let e = 0; e < n; e++) i[e] = r[e](t);
                return i
            }
        }

        function S(t, e) {
            let i = {...t, ...e}, n = {};
            for (let r in i) void 0 !== t[r] && void 0 !== e[r] && (n[r] = P(t[r])(t[r], e[r]));
            return t => {
                for (let e in n) i[e] = n[e](t);
                return i
            }
        }

        let T = (t, e) => {
            let i = v.P.createTransformer(e), n = (0, v.V)(t), s = (0, v.V)(e);
            return n.indexes.var.length === s.indexes.var.length && n.indexes.color.length === s.indexes.color.length && n.indexes.number.length >= s.indexes.number.length ? x.has(t) && !s.values.length || x.has(e) && !n.values.length ? x.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t : (0, m.z)(w(function (t, e) {
                var i;
                let n = [], r = {color: 0, var: 0, number: 0};
                for (let s = 0; s < e.values.length; s++) {
                    let o = e.types[s], a = t.indexes[o][r[o]], l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                    n[s] = l, r[o]++
                }
                return n
            }(n, s), s.values), i) : ((0, r.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), u(t, e))
        };

        function A(t, e, i) {
            return "number" == typeof t && "number" == typeof e && "number" == typeof i ? (0, n.t)(t, e, i) : P(t)(t, e)
        }
    }, 6781: function (t, e, i) {
        i.d(e, {
            t: function () {
                return n
            }
        });
        let n = (t, e, i) => t + (e - t) * i
    }, 332: function (t, e, i) {
        i.d(e, {
            z: function () {
                return r
            }
        });
        let n = (t, e) => i => e(t(i)), r = (...t) => t.reduce(n)
    }, 4081: function (t, e, i) {
        i.d(e, {
            L: function () {
                return r
            }
        });
        var n = i(9013);

        class r {
            constructor() {
                this.subscriptions = []
            }

            add(t) {
                return (0, n.y4)(this.subscriptions, t), () => (0, n.cl)(this.subscriptions, t)
            }

            notify(t, e, i) {
                let n = this.subscriptions.length;
                if (n) {
                    if (1 === n) this.subscriptions[0](t, e, i); else for (let r = 0; r < n; r++) {
                        let n = this.subscriptions[r];
                        n && n(t, e, i)
                    }
                }
            }

            getSize() {
                return this.subscriptions.length
            }

            clear() {
                this.subscriptions.length = 0
            }
        }
    }, 3576: function (t, e, i) {
        i.d(e, {
            h: function () {
                return r
            }
        });
        var n = i(2265);

        function r(t) {
            let e = (0, n.useRef)(null);
            return null === e.current && (e.current = t()), e.current
        }
    }, 1534: function (t, e, i) {
        i.d(e, {
            L: function () {
                return r
            }
        });
        var n = i(2265);
        let r = i(4563).j ? n.useLayoutEffect : n.useEffect
    }, 4438: function (t, e, i) {
        i.d(e, {
            R: function () {
                return n
            }
        });

        function n(t, e) {
            return e ? 1e3 / e * t : 0
        }
    }, 3078: function (t, e, i) {
        i.d(e, {
            BX: function () {
                return h
            }, S1: function () {
                return l
            }
        });
        var n = i(504), r = i(4081), s = i(4438), o = i(5414);
        let a = t => !isNaN(parseFloat(t)), l = {current: void 0};

        class u {
            constructor(t, e = {}) {
                this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                    let i = n.X.now();
                    this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
            }

            setCurrent(t) {
                this.current = t, this.updatedAt = n.X.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = a(this.current))
            }

            setPrevFrameValue(t = this.current) {
                this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
            }

            onChange(t) {
                return this.on("change", t)
            }

            on(t, e) {
                this.events[t] || (this.events[t] = new r.L);
                let i = this.events[t].add(e);
                return "change" === t ? () => {
                    i(), o.Wi.read(() => {
                        this.events.change.getSize() || this.stop()
                    })
                } : i
            }

            clearListeners() {
                for (let t in this.events) this.events[t].clear()
            }

            attach(t, e) {
                this.passiveEffect = t, this.stopPassiveEffect = e
            }

            set(t, e = !0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }

            setWithVelocity(t, e, i) {
                this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i
            }

            jump(t, e = !0) {
                this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
            }

            get() {
                return l.current && l.current.push(this), this.current
            }

            getPrevious() {
                return this.prev
            }

            getVelocity() {
                let t = n.X.now();
                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
                let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                return (0, s.R)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
            }

            start(t) {
                return this.stop(), new Promise(e => {
                    this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                }).then(() => {
                    this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                })
            }

            stop() {
                this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
            }

            isAnimating() {
                return !!this.animation
            }

            clearAnimation() {
                delete this.animation
            }

            destroy() {
                this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }

        function h(t, e) {
            return new u(t, e)
        }
    }, 7325: function (t, e, i) {
        i.d(e, {
            $: function () {
                return r
            }
        });
        var n = i(8859);
        let r = {
            test: (0, i(5516).i)("#"), parse: function (t) {
                let e = "", i = "", n = "", r = "";
                return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), r = t.substring(4, 5), e += e, i += i, n += n, r += r), {
                    red: parseInt(e, 16),
                    green: parseInt(i, 16),
                    blue: parseInt(n, 16),
                    alpha: r ? parseInt(r, 16) / 255 : 1
                }
            }, transform: n.m.transform
        }
    }, 2943: function (t, e, i) {
        i.d(e, {
            J: function () {
                return a
            }
        });
        var n = i(4305), r = i(7492), s = i(5472), o = i(5516);
        let a = {
            test: (0, o.i)("hsl", "hue"),
            parse: (0, o.d)("hue", "saturation", "lightness"),
            transform: ({
                            hue: t,
                            saturation: e,
                            lightness: i,
                            alpha: o = 1
                        }) => "hsla(" + Math.round(t) + ", " + r.aQ.transform((0, s.N)(e)) + ", " + r.aQ.transform((0, s.N)(i)) + ", " + (0, s.N)(n.Fq.transform(o)) + ")"
        }
    }, 3964: function (t, e, i) {
        i.d(e, {
            $: function () {
                return o
            }
        });
        var n = i(7325), r = i(2943), s = i(8859);
        let o = {
            test: t => s.m.test(t) || n.$.test(t) || r.J.test(t),
            parse: t => s.m.test(t) ? s.m.parse(t) : r.J.test(t) ? r.J.parse(t) : n.$.parse(t),
            transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? s.m.transform(t) : r.J.transform(t)
        }
    }, 8859: function (t, e, i) {
        i.d(e, {
            m: function () {
                return u
            }
        });
        var n = i(9111), r = i(4305), s = i(5472), o = i(5516);
        let a = t => (0, n.u)(0, 255, t), l = {...r.Rx, transform: t => Math.round(a(t))}, u = {
            test: (0, o.i)("rgb", "red"),
            parse: (0, o.d)("red", "green", "blue"),
            transform: ({
                            red: t,
                            green: e,
                            blue: i,
                            alpha: n = 1
                        }) => "rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(i) + ", " + (0, s.N)(r.Fq.transform(n)) + ")"
        }
    }, 5516: function (t, e, i) {
        i.d(e, {
            i: function () {
                return s
            }, d: function () {
                return o
            }
        });
        var n = i(6941);
        let r = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
            s = (t, e) => i => !!("string" == typeof i && r.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e)),
            o = (t, e, i) => r => {
                if ("string" != typeof r) return r;
                let [s, o, a, l] = r.match(n.K);
                return {
                    [t]: parseFloat(s),
                    [e]: parseFloat(o),
                    [i]: parseFloat(a),
                    alpha: void 0 !== l ? parseFloat(l) : 1
                }
            }
    }, 3206: function (t, e, i) {
        i.d(e, {
            V: function () {
                return h
            }, P: function () {
                return p
            }
        });
        var n = i(3964);
        let r = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
        var s = i(6941), o = i(5472);
        let a = "number", l = "color",
            u = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

        function h(t) {
            let e = t.toString(), i = [], r = {color: [], number: [], var: []}, s = [], o = 0,
                h = e.replace(u, t => (n.$.test(t) ? (r.color.push(o), s.push(l), i.push(n.$.parse(t))) : t.startsWith("var(") ? (r.var.push(o), s.push("var"), i.push(t)) : (r.number.push(o), s.push(a), i.push(parseFloat(t))), ++o, "${}")).split("${}");
            return {values: i, split: h, indexes: r, types: s}
        }

        function c(t) {
            return h(t).values
        }

        function d(t) {
            let {split: e, types: i} = h(t), r = e.length;
            return t => {
                let s = "";
                for (let u = 0; u < r; u++) if (s += e[u], void 0 !== t[u]) {
                    let e = i[u];
                    e === a ? s += (0, o.N)(t[u]) : e === l ? s += n.$.transform(t[u]) : s += t[u]
                }
                return s
            }
        }

        let f = t => "number" == typeof t ? 0 : t, p = {
            test: function (t) {
                var e, i;
                return isNaN(t) && "string" == typeof t && ((null === (e = t.match(s.K)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(r)) || void 0 === i ? void 0 : i.length) || 0) > 0
            }, parse: c, createTransformer: d, getAnimatableNone: function (t) {
                let e = c(t);
                return d(t)(e.map(f))
            }
        }
    }, 4305: function (t, e, i) {
        i.d(e, {
            Fq: function () {
                return s
            }, Rx: function () {
                return r
            }, bA: function () {
                return o
            }
        });
        var n = i(9111);
        let r = {test: t => "number" == typeof t, parse: parseFloat, transform: t => t},
            s = {...r, transform: t => (0, n.u)(0, 1, t)}, o = {...r, default: 1}
    }, 7492: function (t, e, i) {
        i.d(e, {
            $C: function () {
                return u
            }, RW: function () {
                return r
            }, aQ: function () {
                return s
            }, px: function () {
                return o
            }, vh: function () {
                return a
            }, vw: function () {
                return l
            }
        });
        let n = t => ({
                test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
                parse: parseFloat,
                transform: e => `${e}${t}`
            }), r = n("deg"), s = n("%"), o = n("px"), a = n("vh"), l = n("vw"),
            u = {...s, parse: t => s.parse(t) / 100, transform: t => s.transform(100 * t)}
    }, 6941: function (t, e, i) {
        i.d(e, {
            K: function () {
                return n
            }
        });
        let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
    }, 5472: function (t, e, i) {
        i.d(e, {
            N: function () {
                return n
            }
        });
        let n = t => Math.round(1e5 * t) / 1e5
    }, 2035: function (t, e, i) {
        i.d(e, {
            K: function () {
                return r
            }, k: function () {
                return s
            }
        });
        var n = i(6277);
        let r = n.Z, s = n.Z
    }, 6277: function (t, e, i) {
        i.d(e, {
            Z: function () {
                return n
            }
        });
        let n = t => t
    }, 1645: function (t, e, i) {
        i.d(e, {
            Y: function () {
                return n
            }
        });
        let n = (t, e, i) => {
            let n = e - t;
            return 0 === n ? 1 : (i - t) / n
        }
    }, 5922: function (t, e, i) {
        i.d(e, {
            F: function () {
                return u
            }, f: function () {
                return h
            }
        });
        var n = i(2265), r = ["light", "dark"], s = "(prefers-color-scheme: dark)", o = "undefined" == typeof window,
            a = n.createContext(void 0), l = {
                setTheme: t => {
                }, themes: []
            }, u = () => {
                var t;
                return null != (t = n.useContext(a)) ? t : l
            }, h = t => n.useContext(a) ? t.children : n.createElement(d, {...t}), c = ["light", "dark"], d = t => {
                let {
                        forcedTheme: e,
                        disableTransitionOnChange: i = !1,
                        enableSystem: o = !0,
                        enableColorScheme: l = !0,
                        storageKey: u = "theme",
                        themes: h = c,
                        defaultTheme: d = o ? "system" : "light",
                        attribute: v = "data-theme",
                        value: y,
                        children: x,
                        nonce: b
                    } = t, [P, w] = n.useState(() => p(u, d)), [S, T] = n.useState(() => p(u)), A = y ? Object.values(y) : h,
                    E = n.useCallback(t => {
                        let e = t;
                        if (!e) return;
                        "system" === t && o && (e = g());
                        let n = y ? y[e] : e, s = i ? m() : null, a = document.documentElement;
                        if ("class" === v ? (a.classList.remove(...A), n && a.classList.add(n)) : n ? a.setAttribute(v, n) : a.removeAttribute(v), l) {
                            let t = r.includes(d) ? d : null, i = r.includes(e) ? e : t;
                            a.style.colorScheme = i
                        }
                        null == s || s()
                    }, []), M = n.useCallback(t => {
                        let e = "function" == typeof t ? t(t) : t;
                        w(e);
                        try {
                            localStorage.setItem(u, e)
                        } catch (t) {
                        }
                    }, [e]), C = n.useCallback(t => {
                        T(g(t)), "system" === P && o && !e && E("system")
                    }, [P, e]);
                n.useEffect(() => {
                    let t = window.matchMedia(s);
                    return t.addListener(C), C(t), () => t.removeListener(C)
                }, [C]), n.useEffect(() => {
                    let t = t => {
                        t.key === u && M(t.newValue || d)
                    };
                    return window.addEventListener("storage", t), () => window.removeEventListener("storage", t)
                }, [M]), n.useEffect(() => {
                    E(null != e ? e : P)
                }, [e, P]);
                let R = n.useMemo(() => ({
                    theme: P,
                    setTheme: M,
                    forcedTheme: e,
                    resolvedTheme: "system" === P ? S : P,
                    themes: o ? [...h, "system"] : h,
                    systemTheme: o ? S : void 0
                }), [P, M, e, S, o, h]);
                return n.createElement(a.Provider, {value: R}, n.createElement(f, {
                    forcedTheme: e,
                    disableTransitionOnChange: i,
                    enableSystem: o,
                    enableColorScheme: l,
                    storageKey: u,
                    themes: h,
                    defaultTheme: d,
                    attribute: v,
                    value: y,
                    children: x,
                    attrs: A,
                    nonce: b
                }), x)
            }, f = n.memo(t => {
                let {
                        forcedTheme: e,
                        storageKey: i,
                        attribute: o,
                        enableSystem: a,
                        enableColorScheme: l,
                        defaultTheme: u,
                        value: h,
                        attrs: c,
                        nonce: d
                    } = t, f = "system" === u,
                    p = "class" === o ? "var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(c.map(t => "'".concat(t, "'")).join(","), ")"), ";") : "var d=document.documentElement,n='".concat(o, "',s='setAttribute';"),
                    m = l ? (r.includes(u) ? u : null) ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(u, "'") : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
                    g = function (t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], n = h ? h[t] : t,
                            s = e ? t + "|| ''" : "'".concat(n, "'"), a = "";
                        return l && i && !e && r.includes(t) && (a += "d.style.colorScheme = '".concat(t, "';")), "class" === o ? e || n ? a += "c.add(".concat(s, ")") : a += "null" : n && (a += "d[s](n,".concat(s, ")")), a
                    },
                    v = e ? "!function(){".concat(p).concat(g(e), "}()") : a ? "!function(){try{".concat(p, "var e=localStorage.getItem('").concat(i, "');if('system'===e||(!e&&").concat(f, ")){var t='").concat(s, "',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(g("dark"), "}else{").concat(g("light"), "}}else if(e){").concat(h ? "var x=".concat(JSON.stringify(h), ";") : "").concat(g(h ? "x[e]" : "e", !0), "}").concat(f ? "" : "else{" + g(u, !1, !1) + "}").concat(m, "}catch(e){}}()") : "!function(){try{".concat(p, "var e=localStorage.getItem('").concat(i, "');if(e){").concat(h ? "var x=".concat(JSON.stringify(h), ";") : "").concat(g(h ? "x[e]" : "e", !0), "}else{").concat(g(u, !1, !1), ";}").concat(m, "}catch(t){}}();");
                return n.createElement("script", {nonce: d, dangerouslySetInnerHTML: {__html: v}})
            }), p = (t, e) => {
                let i;
                if (!o) {
                    try {
                        i = localStorage.getItem(t) || void 0
                    } catch (t) {
                    }
                    return i || e
                }
            }, m = () => {
                let t = document.createElement("style");
                return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(t), () => {
                    window.getComputedStyle(document.body), setTimeout(() => {
                        document.head.removeChild(t)
                    }, 1)
                }
            }, g = t => (t || (t = window.matchMedia(s)), t.matches ? "dark" : "light")
    }
}]);