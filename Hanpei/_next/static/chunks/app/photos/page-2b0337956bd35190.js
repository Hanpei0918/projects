(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[54], {
    4487: function (e, s, n) {
        Promise.resolve().then(n.bind(n, 2233))
    }, 2233: function (e, s, n) {
        "use strict";
        n.r(s), n.d(s, {
            default: function () {
                return g
            }
        });
        var t = n(7437), a = n(3303), i = n(8082), o = n(653), c = n(1840), r = n(5922), l = n(7648), u = n(2265);

        function g() {
            let {theme: e, setTheme: s} = (0, r.F)();
            return (0, u.useEffect)(() => (s("dark"), () => {
                s("system")
            }), [s]), (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("section", {
                    className: "inset-x-0 m-auto mt-20 flex max-w-[85%] flex-col items-center space-y-20 sm:max-w-xl",
                    children: (0, t.jsxs)("div", {
                        className: "w-full space-y-10",
                        children: [(0, t.jsxs)(l.default, {
                            href: "/",
                            className: "flex items-center opacity-50 hover:opacity-100",
                            children: [(0, t.jsx)(o.Y4O, {}), "Back"]
                        }), (0, t.jsx)("h1", {
                            className: "font-serif text-6xl sm:text-8xl",
                            children: "Photos \uD83D\uDCF7"
                        })]
                    })
                }), (0, t.jsx)(c.E.section, {
                    className: "inset-x-0 m-auto my-24 max-w-[90%] space-y-20 2xl:max-w-7xl",
                    initial: {opacity: 0},
                    animate: {opacity: 1},
                    children: (0, t.jsxs)("div", {
                        className: "mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2",
                        children: [(0, t.jsx)(i.Z, {src: "/hongkong/IMG_0869.jpeg"}), (0, t.jsx)(i.Z, {src: "/hongkong/IMG_1097.jpeg"}), (0, t.jsx)(i.Z, {src: "/hongkong/IMG_0834.jpeg"}), (0, t.jsx)(i.Z, {src: "/hongkong/IMG_0414.jpeg"}), (0, t.jsx)(i.Z, {src: "/hongkong/IMG_5158.jpeg"}), (0, t.jsx)(i.Z, {src: "/hongkong/IMG_1138.jpeg"}), (0, t.jsx)(i.Z, {src: "/hongkong/IMG_0973.jpeg"}), (0, t.jsx)(i.Z, {src: "/hongkong/IMG_0959.jpeg"}), (0, t.jsx)(i.Z, {src: "/hongkong/IMG_0288.jpeg"}), (0, t.jsx)(i.Z, {src: "/hongkong/IMG_1012.jpeg"}), (0, t.jsx)(i.Z, {src: "/hongkong/IMG_1095.jpeg"}), (0, t.jsx)(i.Z, {src: "/hongkong/IMG_8641.jpeg"})]
                    })
                }), (0, t.jsx)("section", {
                    className: "inset-x-0 m-auto mt-20 flex max-w-[85%] flex-col items-center space-y-20 sm:max-w-xl",
                    children: (0, t.jsxs)(a.Z, {
                        children: [(0, t.jsx)("h2", {
                            className: "font-semibold",
                            children: "About Photos"
                        }), (0, t.jsx)("p", {
                            className: "mt-4 space-y-2",
                            children: "Sometimes, I’m just going about my day, but then I stumble across these breathtaking views that stop me in my tracks—I have to capture them. These photos are a mix of stunning scenes from around the world and some from my favorite video games. I hope you enjoy them as much as I loved snapping these shots!,."
                        })]
                    })
                })]
            })
        }
    }, 3303: function (e, s, n) {
        "use strict";
        n.d(s, {
            Z: function () {
                return i
            }
        });
        var t = n(7437), a = n(1840);

        function i(e) {
            let {children: s} = e;
            return (0, t.jsx)(a.E.div, {
                className: "w-full",
                initial: "hidden",
                whileInView: "visible",
                variants: {hidden: {x: -10, opacity: 0}, visible: {x: 0, opacity: 1}},
                viewport: {once: !0},
                transition: {ease: "easeOut", duration: .5, delay: .3},
                children: s
            })
        }
    }, 8082: function (e, s, n) {
        "use strict";
        n.d(s, {
            Z: function () {
                return o
            }
        });
        var t = n(7437), a = n(3145), i = n(2265);

        function o(e) {
            let {src: s} = e, [n, o] = (0, i.useState)(!0);
            return (0, t.jsxs)("div", {
                className: "relative flex items-center justify-center overflow-hidden bg-black",
                children: [n && (0, t.jsx)("div", {className: "loader absolute z-10"}), (0, t.jsx)(a.default, {
                    src: "/Hanpei/" + s,
                    alt: "Image",
                    onLoad: () => o(!1),
                    loading: "eager",
                    className: "transition-all duration-500 hover:scale-105 " + (n ? "scale-105 opacity-25" : ""),
                    width: 1024,
                    height: 1024
                })]
            })
        }
    }
}, function (e) {
    e.O(0, [310, 878, 971, 117, 744], function () {
        return e(e.s = 4487)
    }), _N_E = e.O()
}]);