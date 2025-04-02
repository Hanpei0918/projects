(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    9019: function (e, s, i) {
        Promise.resolve().then(i.bind(i, 2186))
    }, 2186: function (e, s, i) {
        "use strict";
        i.r(s), i.d(s, {
            default: function () {
                return y
            }
        });
        var l = i(7437), a = i(3303), t = i(8082), n = i(6660), c = i(1906), r = i(3812), d = i(1840), o = i(2265);

        function h(e) {
            let {href: s, label: i} = e, [a, t] = (0, o.useState)({left: 0, top: 0, width: 0, height: 0}),
                n = (0, o.useCallback)(e => {
                    null !== e && t(e.getBoundingClientRect())
                }, []), h = (0, c.c)(0), m = (0, c.c)(0), [x, p] = (0, o.useState)({x: 0, y: 0}),
                u = (0, r.H)(h, [a.left, a.left + a.width], [-4, 4]),
                j = (0, r.H)(m, [a.top, a.top + a.height], [-4, 4]);
            return (0, l.jsx)(d.E.a, {
                href: s,
                ref: n,
                whileHover: {x: x.x, y: x.y, transition: {duration: 0}},
                className: "cursor-pointer rounded-full px-[14px] py-1 hover:bg-primary/5 dark:hover:bg-primary/15",
                onMouseMove: e => {
                    h.set(e.clientX), m.set(e.clientY), p({x: u.get(), y: j.get()})
                },
                children: i
            })
        }

        var m = i(3755), x = i(3448);
        let p = o.forwardRef((e, s) => {
            let {className: i, ...a} = e;
            return (0, l.jsx)(m.fC, {
                ref: s,
                className: (0, x.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", i), ...a
            })
        });
        p.displayName = m.fC.displayName;
        let u = o.forwardRef((e, s) => {
            let {className: i, ...a} = e;
            return (0, l.jsx)(m.Ee, {ref: s, className: (0, x.cn)("aspect-square h-full w-full", i), ...a})
        });
        u.displayName = m.Ee.displayName;
        let j = o.forwardRef((e, s) => {
            let {className: i, ...a} = e;
            return (0, l.jsx)(m.NY, {
                ref: s,
                className: (0, x.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted", i), ...a
            })
        });
        j.displayName = m.NY.displayName;
        var f = i(8614), N = i(5922), g = i(7648), w = i(7048);

        function y() {
            let e;
            let [s, i] = (0, o.useState)(!1), [c, r] = (0, o.useState)(!0);
            (0, o.useEffect)(() => {
                r(!1)
            }, []);
            let m = {hidden: {y: 10, opacity: 0}, visible: {y: 0, opacity: 1}}, [x, y] = (0, o.useState)(!1);
            (0, o.useEffect)(() => {
                window.history.scrollRestoration = "manual"
            }, []);
            let {theme: v, setTheme: b} = (0, N.F)();
            return (0, o.useEffect)(() => {
                b("system")
            }, [b]), (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("div", {className: "absolute inset-x-0 -z-[99] m-auto h-[40vh] max-w-7xl bg-gradient-to-tr from-indigo-300 via-teal-200 to-[#C084FC] blur-[118px]"}), (0, l.jsxs)(d.E.section, {
                    initial: "hidden",
                    animate: "visible",
                    variants: m,
                    transition: {delay: .5, ease: "easeOut"},
                    className: "flex h-[75vh] flex-col items-center justify-center sm:h-[80vh]",
                    children: [(0, l.jsx)("div", {
                        className: "font-serif text-6xl sm:text-8xl",
                        children: "Hanpei Mo"
                    }), (0, l.jsx)("div", {
                        className: "font-serif text-2xl sm:text-4xl",
                        children: "Computer Science  @ BHAM"
                    }), (0, l.jsx)(d.E.div, {
                        layout: !0,
                        className: "mt-2 flex items-center rounded-full border-[1px] bg-background p-1 sm:mt-[19px]",
                        onMouseEnter: w.tq ? () => !1 : () => {
                            clearTimeout(e), i(!0)
                        },
                        onMouseLeave: w.tq ? () => !1 : () => {
                            e = setTimeout(() => {
                                i(!1)
                            }, 1e3)
                        },
                        onTap: () => {
                            clearTimeout(e), i(!0), e = setTimeout(() => {
                                i(!1)
                            }, 5e3)
                        },
                        children: (0, l.jsx)(f.M, {
                            children: s ? (0, l.jsxs)(d.E.nav, {
                                className: "flex",
                                initial: {filter: "blur(4px)", opacity: 0},
                                animate: {filter: "blur(0px)", opacity: 1},
                                transition: {duration: .5},
                                children: [(0, l.jsx)(h, {
                                    href: "mailto:1915127539@qq.com",
                                    label: "Email"
                                }), (0, l.jsx)(h, {
                                    href: "https://steamcommunity.com/profiles/76561198428165323/",
                                    label: "Steam"
                                }), (0, l.jsx)(h, {href: "https://github.com/Hanpei0918", label: "GitHub"})]
                            }) : (0, l.jsxs)(d.E.div, {
                                initial: c ? {
                                    filter: "blur(0px)",
                                    opacity: 1
                                } : {filter: "blur(4px)", opacity: 0},
                                animate: {filter: "blur(0px)", opacity: 1},
                                transition: {duration: .5},
                                className: "flex items-center space-x-3 pr-3",
                                children: [(0, l.jsxs)(p, {
                                    className: "size-8",
                                    children: [(0, l.jsx)(u, {
                                        src: "/Hanpei/avatar.jpg",
                                        loading: "eager",
                                        alt: "@Hanpei"
                                    }), (0, l.jsx)(j, {children: "KK"})]
                                }), (0, l.jsx)("div", {className: "py-1", children: "Contact Me"})]
                            })
                        })
                    })]
                }), (0, l.jsxs)(d.E.section, {
                    className: "inset-x-0 m-auto max-w-[90%] 2xl:max-w-7xl",
                    initial: {opacity: 0},
                    animate: {opacity: 1},
                    transition: {ease: "easeOut"},
                    children: [(0, l.jsx)("h2", {
                        className: "flex justify-center font-serif text-3xl sm:text-4xl",
                        children: "— Game And Project —"
                    }), (0, l.jsxs)("div", {
                        className: "grid-col-1 mt-4 grid gap-6 sm:grid-cols-2 [&>*:nth-child(n+3)]:max-sm:hidden",
                        children: [(0, l.jsx)(n.Z, {
                            src: "/projects/patreon-scraper-puppeteer.jpeg",
                            href: "https://github.com/shiho-jo/uturano-autograde",
                            label: "Auto Grader",
                            label2: "Java, TS",
                            isNew: !0
                        }), (0, l.jsx)(n.Z, {
                            src: "/projects/cangjie-sucheng-lookup.jpeg",
                            href: "https://www.op.gg/summoners/euw/ShowMaker-UK1/",
                            label: "TW Legal Of Legend Account",
                        }), (0, l.jsx)(n.Z, {
                            src: "/projects/HKUCoursePlanner-Reviewer.jpeg",
                            href: "https://www.op.gg/summoners/tw/T1%20Gumayusi-0719/",
                            label: "TW Legal Of Legend Account",
                        }), (0, l.jsx)(n.Z, {
                            src: "/projects/congresstweets-analysis.jpeg",
                            href: "https://team40.bham.team",
                            label: "Second-hand trading platform",
                            label2: "Java,Ts,Html"
                        })]
                    }), (0, l.jsx)(d.E.div, {
                        className: "sticky bottom-2 z-50 m-auto w-fit sm:bottom-4",
                        initial: "hidden",
                        animate: "visible",
                        variants: m,
                        transition: {delay: 1, ease: "easeOut"},
                        children: (0, l.jsx)(g.default, {
                            href: "/work",
                            className: "mt-4 flex h-[42px] items-center rounded-full border-[1px] bg-background px-4 hover:bg-[#f3f3f3] dark:hover:bg-[#2e2e2e]",
                            children: "Explore All"
                        })
                    })]
                }), (0, l.jsxs)("section", {
                    className: "inset-x-0 m-auto mt-20 flex max-w-[85%] flex-col items-center space-y-20 text-balance sm:max-w-xl",
                    children: [
                        (0, l.jsxs)("p", {
                            className: "font-serif text-4xl sm:text-6xl",
                            children: [
                                "My greatest passion is ",
                                (0, l.jsx)("br", { className: "sm:hidden" }),
                                "to ",
                                (0, l.jsx)("i", {
                                    className: "underline",
                                    children: "enjoy both virtual & reality"
                                }),
                                " —",
                                " ",
                                (0, l.jsx)("br", { className: "sm:hidden" }),
                                "embracing fantasy and passion, ",
                                (0, l.jsx)("br", { className: "sm:hidden" }),
                                "while hoping one day ",
                                (0, l.jsx)("i", { children: "🇨🇳" }),
                                " can become a better place."
                            ]
                        }),
                        (0, l.jsxs)(a.Z, {
                        })
                    , (0, l.jsxs)(a.Z, {
                        children: [(0, l.jsx)("h2", {
                            className: "font-semibold",
                            children: "Education"
                        }), (0, l.jsxs)("div", {
                            className: "mt-4 space-y-2",
                            children: [(0, l.jsxs)("div", {
                                children: [(0, l.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: ["The University of Birmingham", (0, l.jsx)("span", {
                                        className: "opacity-50",
                                        children: "2022 – 26"
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "opacity-50",
                                    children: ["B.S.C in Computer Science  ", (0, l.jsx)("br", {className: "sm:hidden"}), ]
                                })]
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: ["University of St-Andrews", (0, l.jsx)("span", {
                                        className: "opacity-50",
                                        children: "Jan. - Aug. 22"
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "opacity-50",
                                    children: "Foundation (Spring)"

                                }), (0, l.jsx)("div", {className: "opacity-50", children: ""})]
                            })]
                        })]
                    }), (0, l.jsxs)("p", {
                        className: "w-full font-serif text-4xl",
                        children: ["I enjoy the process of ", (0, l.jsx)("i", {children: "learning"}), ]
                    }), (0, l.jsxs)(a.Z, {
                        children: [(0, l.jsxs)("h2", {
                            className: "flex justify-between font-semibold",
                            children: ["So far, I know...", (0, l.jsx)("button", {
                                className: "text-sm font-normal opacity-50 hover:opacity-100",
                                onClick: () => y(!x),
                                children: x ? "Show Less" : "Show More"
                            })]
                        }), (0, l.jsx)("h3", {
                            className: "mt-4 text-xs font-medium opacity-50",
                            children: "LANGUAGES"
                        }), (0, l.jsxs)("ul", {
                            className: "mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3",
                            children: [(0, l.jsx)("li", {
                                className: "list-inside list-disc",
                                children: "HTML/CSS"
                            }), (0, l.jsx)("li", {
                                className: "list-inside list-disc",
                                children: "JavaScript"
                            }), (0, l.jsx)("li", {
                                className: "list-inside list-disc",
                                children: "TypeScript"
                            }), (0, l.jsx)("li", {
                                className: "list-inside list-disc",
                                children: "Python"
                            }), (0, l.jsx)("li", {
                                className: "list-inside list-disc",
                                children: "C/C++"
                            }), (0, l.jsx)("li", {
                                className: "list-inside list-disc",
                                children: "Java"
                            }), (0, l.jsx)("li", {
                                className: "list-inside list-disc",
                                children: "SQL"
                            }), ]
                        }), (0, l.jsx)("h3", {
                            className: "mt-4 text-xs font-medium opacity-50",
                            children: "FRAMEWORKS"
                        }), (0, l.jsxs)("ul", {
                            className: "mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3",
                            children: [(0, l.jsx)("li", {
                                className: "list-inside list-disc",
                                children: "Spring Boot"
                            }), (0, l.jsx)("li", {
                                className: "list-inside list-disc",
                                children: "Next.js"
                            }),(0, l.jsx)("li", {
                                className: "list-inside list-disc",
                                children: "Angular"
                            }),]
                        }), (0, l.jsx)(f.M, {
                            children: x && (0, l.jsxs)(d.E.div, {
                                layout: !0,
                                initial: {opacity: 0, filter: "blur(4px)", y: -20},
                                animate: {opacity: 1, filter: "blur(0px)", y: 0},
                                exit: {opacity: 0, filter: "blur(4px)", y: -20},
                                transition: {ease: "easeInOut"},
                                children: [(0, l.jsx)("h3", {
                                    className: "mt-4 text-xs font-medium opacity-50",
                                    children: "DEVELOPER TOOLS"
                                }), (0, l.jsxs)("ul", {
                                    className: "mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3",
                                    children: [(0, l.jsx)("li", {
                                        className: "list-inside list-disc h-6 whitespace-nowrap",
                                        children: "Git"
                                    }), (0, l.jsx)("li", {
                                        className: "list-inside list-disc h-6 whitespace-nowrap",
                                        children: "VS Code"
                                    }),  (0, l.jsx)("li", {
                                        className: "list-inside list-disc h-6 whitespace-nowrap",
                                        children: "Node.js"
                                    }), (0, l.jsx)("li", {
                                        className: "list-inside list-disc h-6 whitespace-nowrap",
                                        children: "PostgreSQL"
                                    }), (0, l.jsx)("li", {
                                        className: "list-inside list-disc h-6 whitespace-nowrap",
                                        children: "MySQL"
                                    }), (0, l.jsx)("li", {
                                        className: "list-inside list-disc h-6 whitespace-nowrap",
                                        children: "Linux"
                                    }), (0, l.jsx)("li", {
                                        className: "list-inside list-disc h-6 whitespace-nowrap",
                                        children: "Docker"
                                    }), (0, l.jsx)("li", {
                                        className: "list-inside list-disc h-6 whitespace-nowrap",
                                        children: "JHipster"
                                    })]

                                }), (0, l.jsx)("h3", {
                                    className: "mt-4 text-xs font-medium opacity-50",
                                    children: "BUSINESS TOOLS"
                                }), (0, l.jsxs)("ul", {
                                    className: "mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3",
                                    children: [(0, l.jsx)("li", {
                                        className: "list-inside list-disc h-6 whitespace-nowrap",
                                        children: "Microsoft Word"
                                    }), (0, l.jsx)("li", {
                                        className: "list-inside list-disc h-6 whitespace-nowrap",
                                        children: "Microsoft Excel"
                                    }), (0, l.jsx)("li", {
                                        className: "list-inside list-disc h-6 whitespace-nowrap",
                                        children: "Microsoft PowerPoint"
                                    }), (0, l.jsx)("li", {
                                        className: "list-inside list-disc h-6 whitespace-nowrap",
                                        children: "Google Workspace"
                                    })]
                                })]
                            })
                        })]
                    }), (0, l.jsxs)(d.E.p, {
                        className: "w-full font-serif text-4xl",
                        children: ["I am always open to", (0, l.jsx)("br", {}), (0, l.jsx)("i", {children: "opportunities"}), " and ", (0, l.jsx)("i", {children: "collaborations"}), ". \uD83E\uDD1D"]
                    }), (0, l.jsxs)(a.Z, {
                        children: [(0, l.jsx)("h2", {
                            className: "font-semibold",
                            children: "Experience"
                        }), (0, l.jsxs)("div", {
                            className: "mt-4 space-y-2",
                            children: [(0, l.jsxs)("div", {
                                children: [(0, l.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: ["Software Engineer", (0, l.jsx)("span", {
                                        className: "opacity-50",
                                        children: "July. – Aug. 24"

                                    })]
                                }), (0, l.jsx)("div", {className: "opacity-50", children: "DG"})]
                            })]
                        })]
                    })]
                }), (0, l.jsxs)(d.E.section, {
                    className: "inset-x-0 m-auto mt-24 max-w-[90%] 2xl:max-w-7xl",
                    initial: {opacity: 0},
                    animate: {opacity: 1},
                    children: [(0, l.jsx)("h2", {
                        className: "flex justify-center font-serif text-4xl",
                        children: "— Virtual and Reality🌟 —"
                    }), (0, l.jsxs)("div", {
                        className: "mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 [&>*:nth-child(n+3)]:max-sm:hidden",
                        children: [(0, l.jsx)(t.Z, {src: "/hongkong/IMG_0869.jpeg"}), (0, l.jsx)(t.Z, {src: "/hongkong/IMG_1097.jpeg"}), (0, l.jsx)(t.Z, {src: "/hongkong/IMG_0834.jpeg"}), (0, l.jsx)(t.Z, {src: "/hongkong/IMG_0414.jpeg"})]
                    }), (0, l.jsx)("div", {
                        className: "flex justify-center",
                        children: (0, l.jsx)(g.default, {
                            href: "/photos",
                            className: "mt-4 flex h-[42px] items-center rounded-full border-[1px] bg-background px-4 hover:bg-[#f3f3f3] dark:hover:bg-[#2e2e2e]",
                            children: "View More"
                        })
                    })]
                }), (0, l.jsxs)("section", {
                    className: "inset-x-0 m-auto mt-20 flex max-w-[85%] flex-col items-center space-y-20 sm:max-w-xl",
                    children: [(0, l.jsxs)(a.Z, {
                        children: [(0, l.jsx)("h2", {
                            className: "font-semibold",
                            children: "About Me"
                        }), (0, l.jsx)("p", {
                            className: "mt-4",
                            children: "I was born and raised in Dongguan, Guangdong.Growing up, I had all sorts of dreams about what I might become, but nothing grabbed me quite like computer science. I’m hooked on computers and video games—they’ve always fascinated me, and I love how they blend creativity and tech."
                        }), (0, l.jsx)("p", {
                            className: "mt-4",
                            children: "Right now, I’m studying computer science at university, and I’m determined to make the most of it. With some hard work and passion, I hope to carve out my own path and maybe even leave a mark on the world of tech or gaming someday!"
                        })]
                    }), (0, l.jsx)("p", {
                        className: "max-w-3xl font-serif text-4xl italic",
                        children: "“People should pursue what they’re passionate about. That will make them happier than pretty much anything else.”"
                    }), (0, l.jsxs)(a.Z, {
                        children: [(0, l.jsx)("h2", {
                            className: "font-semibold",
                            children: "For fun, here is my EDC (Everyday Carry)"
                        }), (0, l.jsxs)("ul", {
                            className: "mt-4 grid grid-cols-1 gap-2",
                            children: [(0, l.jsxs)("li", {
                                className: "list-inside list-disc",
                                children: ["MacBook Pro 16", '"', " (M1 Pro)"]
                            }), (0, l.jsxs)("li", {
                                className: "list-inside list-disc",
                                children: ["iPad Pro 13", '"', " (M4)"]
                            }), (0, l.jsx)("li", {
                                className: "list-inside list-disc",
                                children: "iPhone 16 Pro Max"
                            }), (0, l.jsx)("li", {
                                className: "list-inside list-disc",
                                children: ["LENOVO Legion Pro 7 16",'"', "(RTX 4080)"]
                            }), (0, l.jsx)("li", {
                                className: "list-inside list-disc",
                                children: "AirPods Pro (2nd generation)"
                            })]
                        })]
                    })]
                })]
            })
        }
    }, 3303: function (e, s, i) {
        "use strict";
        i.d(s, {
            Z: function () {
                return t
            }
        });
        var l = i(7437), a = i(1840);

        function t(e) {
            let {children: s} = e;
            return (0, l.jsx)(a.E.div, {
                className: "w-full",
                initial: "hidden",
                whileInView: "visible",
                variants: {hidden: {x: -10, opacity: 0}, visible: {x: 0, opacity: 1}},
                viewport: {once: !0},
                transition: {ease: "easeOut", duration: .5, delay: .3},
                children: s
            })
        }
    }, 6660: function (e, s, i) {
        "use strict";
        i.d(s, {
            Z: function () {
                return o
            }
        });
        var l = i(7437), a = i(2265), t = i(535), n = i(3448);
        let c = (0, t.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
            variants: {
                variant: {
                    default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
                    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
                    outline: "text-foreground"
                }
            }, defaultVariants: {variant: "default"}
        });

        function r(e) {
            let {className: s, variant: i, ...a} = e;
            return (0, l.jsx)("div", {className: (0, n.cn)(c({variant: i}), s), ...a})
        }

        var d = i(3145);

        function o(e) {
            let {href: s, src: i, label: t, label2: n, isNew: c = !1} = e, [o, h] = (0, a.useState)(!0);
            return (0, l.jsxs)("a", {
                className: "group relative flex items-center justify-center overflow-hidden bg-black",
                href: s,
                children: [o ? (0, l.jsx)("div", {className: "loader absolute z-20"}) : (0, l.jsxs)("div", {
                    className: "absolute flex flex-col items-center font-semibold group-hover:z-20 sm:text-lg text-white",
                    children: [(0, l.jsxs)("div", {
                        className: "flex items-center space-x-1",
                        children: [(0, l.jsx)("div", {children: t}), c && (0, l.jsx)(r, {
                            variant: "secondary",
                            children: "New"
                        })]
                    }), (0, l.jsx)("div", {className: "text-sm font-normal", children: n})]
                }), (0, l.jsx)(d.default, {
                    src: "/Hanpei/" + i,
                    alt: t,
                    onLoad: () => h(!1),
                    loading: "eager",
                    className: "z-10 transition-all duration-500 group-hover:scale-105 group-hover:opacity-25 " + (o ? "opacity-25" : ""),
                    width: 1024,
                    height: 1024
                })]
            })
        }
    }, 8082: function (e, s, i) {
        "use strict";
        i.d(s, {
            Z: function () {
                return n
            }
        });
        var l = i(7437), a = i(3145), t = i(2265);

        function n(e) {
            let {src: s} = e, [i, n] = (0, t.useState)(!0);
            return (0, l.jsxs)("div", {
                className: "relative flex items-center justify-center overflow-hidden bg-black",
                children: [i && (0, l.jsx)("div", {className: "loader absolute z-10"}), (0, l.jsx)(a.default, {
                    src: "/Hanpei/" + s,
                    alt: "Image",
                    onLoad: () => n(!1),
                    loading: "eager",
                    className: "transition-all duration-500 hover:scale-105 " + (i ? "scale-105 opacity-25" : ""),
                    width: 1024,
                    height: 1024
                })]
            })
        }
    }, 3448: function (e, s, i) {
        "use strict";
        i.d(s, {
            cn: function () {
                return t
            }
        });
        var l = i(1994), a = i(3335);

        function t() {
            for (var e = arguments.length, s = Array(e), i = 0; i < e; i++) s[i] = arguments[i];
            return (0, a.m6)((0, l.W)(s))
        }
    }
}, function (e) {
    e.O(0, [878, 851, 838, 971, 117, 744], function () {
        return e(e.s = 9019)
    }), _N_E = e.O()
}]);