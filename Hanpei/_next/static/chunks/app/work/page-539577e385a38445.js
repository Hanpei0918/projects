(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[534], {
    7714: function (e, t, s) {
        Promise.resolve().then(s.bind(s, 6540))
    }, 6540: function (e, t, s) {
        "use strict";
        s.r(t), s.d(t, {
            default: function () {
                return h
            }
        });
        var r = s(7437), n = s(3303), a = s(6660), i = s(653), o = s(1840), c = s(5922), l = s(7648), u = s(2265);

        function h() {
            let {theme: e, setTheme: t} = (0, c.F)();
            return (0, u.useEffect)(() => (t("dark"), () => {
                t("system")
            }), [t]), (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("section", {
                    className: "inset-x-0 m-auto mt-20 flex max-w-[85%] flex-col items-center space-y-20 sm:max-w-xl",
                    children: (0, r.jsxs)("div", {
                        className: "w-full space-y-10",
                        children: [(0, r.jsxs)(l.default, {
                            href: "/",
                            className: "flex items-center opacity-50 hover:opacity-100",
                            children: [(0, r.jsx)(i.Y4O, {}), "Back"]
                        }), (0, r.jsx)("div", {
                            className: "font-serif text-4xl sm:text-6xl",
                            children: "Game\uD83C\uDFAE   And   \uD83D\uDE80Project"
                        })]
                    })
                }), (0, r.jsx)(o.E.section, {
                    className: "inset-x-0 m-auto my-24 max-w-[90%] space-y-20 2xl:max-w-7xl",
                    initial: {opacity: 0},
                    animate: {opacity: 1},
                    children: (0, r.jsxs)("div", {
                        className: "mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2",
                        children: [(0, r.jsx)(a.Z, {
                            src: "/projects/patreon-scraper-puppeteer.jpeg",
                            href: "https://github.com/shiho-jo/uturano-autograde",
                            label: "Auto Grader",
                            label2: "Java, TS",
                        }), (0, r.jsx)(a.Z, {
                            src: "/projects/cangjie-sucheng-lookup.jpeg",
                            href: "https://www.op.gg/summoners/euw/ShowMaker-UK1/",
                            label: "EUW Legal Of Legend Account",
                        }), (0, r.jsx)(a.Z, {
                            src: "/projects/HKUCoursePlanner-Reviewer.jpeg",
                            href: "https://www.op.gg/summoners/tw/T1%20Gumayusi-0719/",
                            label: "TW Legal Of Legend Account",
                        }), (0, r.jsx)(a.Z, {
                            src: "/projects/congresstweets-analysis.jpeg",
                            href: "https://team40.bham.team/",
                            label: "Second-hand trading platform",
                            label2: "Java,Ts,Html"
                        }), (0, r.jsx)(a.Z, {
                            src: "/projects/萨拉塔斯.jpeg",
                            href: "https://wow.blizzard.cn/character/#/pandaren/铸星者",
                            label: "World of Warcraft (WOW)",


                        }), (0, r.jsx)(a.Z, {
                            src: "/projects/question-mark.jpeg",
                            href: "/",
                            label: "Working on a new project...",
                            label2: "Stay tuned \uD83D\uDC40"
                        })]

                    })
                }), (0, r.jsx)("section", {
                    className: "inset-x-0 m-auto mt-20 flex max-w-[85%] flex-col items-center space-y-20 sm:max-w-xl",
                    children: (0, r.jsxs)(n.Z, {
                        children: [(0, r.jsx)("h2", {
                            className: "font-semibold",
                            children: "About Game and Projects"
                        }), (0, r.jsx)("p", {
                            className: "mt-4 space-y-2",
                            children: "I’m a big fan of gaming and building projects that make life easier. In gaming, I’m drawn to MMORPGs and MOBAs—I love the epic adventures of World of Warcraft and the fast-paced strategy of League of Legends. When it comes to projects, I enjoy creating tools and solutions that can boost efficiency and help others save time. Take a look at my work on GitHub, and if you find something useful, feel free to give a star! ⭐"
                        })]
                    })
                })]
            })
        }
    }, 3303: function (e, t, s) {
        "use strict";
        s.d(t, {
            Z: function () {
                return a
            }
        });
        var r = s(7437), n = s(1840);

        function a(e) {
            let {children: t} = e;
            return (0, r.jsx)(n.E.div, {
                className: "w-full",
                initial: "hidden",
                whileInView: "visible",
                variants: {hidden: {x: -10, opacity: 0}, visible: {x: 0, opacity: 1}},
                viewport: {once: !0},
                transition: {ease: "easeOut", duration: .5, delay: .3},
                children: t
            })
        }
    }, 6660: function (e, t, s) {
        "use strict";
        s.d(t, {
            Z: function () {
                return u
            }
        });
        var r = s(7437), n = s(2265), a = s(535), i = s(3448);
        let o = (0, a.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
            variants: {
                variant: {
                    default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
                    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
                    outline: "text-foreground"
                }
            }, defaultVariants: {variant: "default"}
        });

        function c(e) {
            let {className: t, variant: s, ...n} = e;
            return (0, r.jsx)("div", {className: (0, i.cn)(o({variant: s}), t), ...n})
        }

        var l = s(3145);

        function u(e) {
            let {href: t, src: s, label: a, label2: i, isNew: o = !1} = e, [u, h] = (0, n.useState)(!0);
            return (0, r.jsxs)("a", {
                className: "group relative flex items-center justify-center overflow-hidden bg-black",
                href: t,
                children: [u ? (0, r.jsx)("div", {className: "loader absolute z-20"}) : (0, r.jsxs)("div", {
                    className: "absolute flex flex-col items-center font-semibold group-hover:z-20 sm:text-lg text-white",
                    children: [(0, r.jsxs)("div", {
                        className: "flex items-center space-x-1",
                        children: [(0, r.jsx)("div", {children: a}), o && (0, r.jsx)(c, {
                            variant: "secondary",
                            children: "New"
                        })]
                    }), (0, r.jsx)("div", {className: "text-sm font-normal", children: i})]
                }), (0, r.jsx)(l.default, {
                    src: "/Hanpei/" + s,
                    alt: a,
                    onLoad: () => h(!1),
                    loading: "eager",
                    className: "z-10 transition-all duration-500 group-hover:scale-105 group-hover:opacity-25 " + (u ? "opacity-25" : ""),
                    width: 1024,
                    height: 1024
                })]
            })
        }
    }, 3448: function (e, t, s) {
        "use strict";
        s.d(t, {
            cn: function () {
                return a
            }
        });
        var r = s(1994), n = s(3335);

        function a() {
            for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            return (0, n.m6)((0, r.W)(t))
        }
    }
}, function (e) {
    e.O(0, [310, 878, 851, 971, 117, 744], function () {
        return e(e.s = 7714)
    }), _N_E = e.O()
}]);