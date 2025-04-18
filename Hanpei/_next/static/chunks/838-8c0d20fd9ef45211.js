(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[838], {
    7048: function (e, i, r) {
        "use strict";
        var t, o, n, a, s, l, u = r(2265);
        u && "object" == typeof u && "default" in u && u.default;
        var d = r(8975), c = new d, w = c.getBrowser(), b = c.getCPU(), m = c.getDevice(), p = c.getEngine(),
            f = c.getOS(), h = c.getUA(), g = {
                Mobile: "mobile",
                Tablet: "tablet",
                SmartTv: "smarttv",
                Console: "console",
                Wearable: "wearable",
                Embedded: "embedded",
                Browser: void 0
            }, v = {
                Chrome: "Chrome",
                Firefox: "Firefox",
                Opera: "Opera",
                Yandex: "Yandex",
                Safari: "Safari",
                InternetExplorer: "Internet Explorer",
                Edge: "Edge",
                Chromium: "Chromium",
                Ie: "IE",
                MobileSafari: "Mobile Safari",
                MIUI: "MIUI Browser",
                SamsungBrowser: "Samsung Browser"
            }, x = function (e) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
                return e || i
            }, y = function () {
                return !!("undefined" != typeof window && (window.navigator || navigator)) && (window.navigator || navigator)
            }, k = function (e) {
                var i = y();
                return i && i.platform && (-1 !== i.platform.indexOf(e) || "MacIntel" === i.platform && i.maxTouchPoints > 1 && !window.MSStream)
            }, S = function (e) {
                return e.type === g.Browser
            }, E = function (e) {
                return e.name === v.Edge
            }, C = function (e) {
                return "string" == typeof e && -1 !== e.indexOf("Edg/")
            }, _ = function () {
                return k("iPad")
            };
        m.type, g.SmartTv, m.type, g.Console, m.type, g.Wearable, m.type, g.Embedded, w.name === v.MobileSafari || _(), w.name, v.Chromium;
        var T = (t = m.type) === g.Mobile || t === g.Tablet || _();
        m.type, g.Mobile, m.type === g.Tablet || _(), S(m), S(m), f.name, f.name, "iOS" === f.name || _(), w.name, v.Chrome, w.name, v.Firefox, (o = w.name) === v.Safari || v.MobileSafari, w.name, v.Opera, (n = w.name) === v.InternetExplorer || v.Ie, x(f.version), x(f.name), x(w.version), x(w.major), x(w.name), x(m.vendor), x(m.model), x(p.name), x(p.version), x(h), E(w) || C(h), w.name, v.Yandex, x(m.type, "browser"), (a = y()) && (/iPad|iPhone|iPod/.test(a.platform) || "MacIntel" === a.platform && a.maxTouchPoints > 1) && window.MSStream, _(), k("iPhone"), k("iPod"), "string" == typeof (l = (s = y()) && s.userAgent && s.userAgent.toLowerCase()) && /electron/.test(l), C(h), E(w) && C(h), f.name, f.name, w.name, v.MIUI, w.name, v.SamsungBrowser, i.tq = T
    }, 8975: function (e, i, r) {
        var t;
        !function (o, n) {
            "use strict";
            var a = "function", s = "undefined", l = "object", u = "string", d = "major", c = "model", w = "name",
                b = "type", m = "vendor", p = "version", f = "architecture", h = "console", g = "mobile", v = "tablet",
                x = "smarttv", y = "wearable", k = "embedded", S = "Amazon", E = "Apple", C = "ASUS", _ = "BlackBerry",
                T = "Browser", N = "Chrome", P = "Firefox", M = "Google", j = "Huawei", A = "Microsoft", O = "Motorola",
                R = "Opera", I = "Samsung", q = "Sharp", z = "Sony", B = "Xiaomi", U = "Zebra", L = "Facebook",
                V = "Chromium OS", D = "Mac OS", F = " Browser", W = function (e, i) {
                    var r = {};
                    for (var t in e) i[t] && i[t].length % 2 == 0 ? r[t] = i[t].concat(e[t]) : r[t] = e[t];
                    return r
                }, $ = function (e) {
                    for (var i = {}, r = 0; r < e.length; r++) i[e[r].toUpperCase()] = e[r];
                    return i
                }, G = function (e, i) {
                    return typeof e === u && -1 !== H(i).indexOf(H(e))
                }, H = function (e) {
                    return e.toLowerCase()
                }, Z = function (e, i) {
                    if (typeof e === u) return e = e.replace(/^\s\s*/, ""), typeof i === s ? e : e.substring(0, 500)
                }, X = function (e, i) {
                    for (var r, t, o, s, u, d, c = 0; c < i.length && !u;) {
                        var w = i[c], b = i[c + 1];
                        for (r = t = 0; r < w.length && !u && w[r];) if (u = w[r++].exec(e)) for (o = 0; o < b.length; o++) d = u[++t], typeof (s = b[o]) === l && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, d) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = d ? d.replace(s[1], s[2]) : void 0 : this[s[0]] = d ? s[1].call(this, d, s[2]) : void 0 : 4 === s.length && (this[s[0]] = d ? s[3].call(this, d.replace(s[1], s[2])) : void 0) : this[s] = d || n;
                        c += 2
                    }
                }, Y = function (e, i) {
                    for (var r in i) if (typeof i[r] === l && i[r].length > 0) {
                        for (var t = 0; t < i[r].length; t++) if (G(i[r][t], e)) return "?" === r ? n : r
                    } else if (G(i[r], e)) return "?" === r ? n : r;
                    return i.hasOwnProperty("*") ? i["*"] : e
                }, K = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                }, Q = {
                    browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [p, [w, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [p, [w, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [w, p], [/opios[\/ ]+([\w\.]+)/i], [p, [w, R + " Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [p, [w, R + " GX"]], [/\bopr\/([\w\.]+)/i], [p, [w, R]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [p, [w, "Baidu"]], [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i], [p, [w, "Maxthon"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [w, p], [/quark(?:pc)?\/([-\w\.]+)/i], [p, [w, "Quark"]], [/\bddg\/([\w\.]+)/i], [p, [w, "DuckDuckGo"]], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [p, [w, "UC" + T]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [p, [w, "WeChat"]], [/konqueror\/([\w\.]+)/i], [p, [w, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [p, [w, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [p, [w, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [p, [w, "Smart Lenovo " + T]], [/(avast|avg)\/([\w\.]+)/i], [[w, /(.+)/, "$1 Secure " + T], p], [/\bfocus\/([\w\.]+)/i], [p, [w, P + " Focus"]], [/\bopt\/([\w\.]+)/i], [p, [w, R + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [p, [w, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [p, [w, "Dolphin"]], [/coast\/([\w\.]+)/i], [p, [w, R + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [p, [w, "MIUI" + F]], [/fxios\/([\w\.-]+)/i], [p, [w, P]], [/\bqihoobrowser\/?([\w\.]*)/i], [p, [w, "360"]], [/\b(qq)\/([\w\.]+)/i], [[w, /(.+)/, "$1Browser"], p], [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i], [[w, /(.+)/, "$1" + F], p], [/samsungbrowser\/([\w\.]+)/i], [p, [w, I + " Internet"]], [/metasr[\/ ]?([\d\.]+)/i], [p, [w, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[w, "Sogou Mobile"], p], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i], [w, p], [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i], [w], [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i], [p, w], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[w, L], p], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [w, p], [/\bgsa\/([\w\.]+) .*safari\//i], [p, [w, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [p, [w, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [p, [w, N + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[w, N + " WebView"], p], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [p, [w, "Android " + T]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [w, p], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [p, [w, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [p, w], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [w, [p, Y, {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }]], [/(webkit|khtml)\/([\w\.]+)/i], [w, p], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[w, "Netscape"], p], [/(wolvic|librewolf)\/([\w\.]+)/i], [w, p], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [p, [w, P + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [w, [p, /_/g, "."]], [/(cobalt)\/([\w\.]+)/i], [w, [p, /master.|lts./, ""]]],
                    cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[f, "amd64"]], [/(ia32(?=;))/i], [[f, H]], [/((?:i[346]|x)86)[;\)]/i], [[f, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[f, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[f, "armhf"]], [/windows (ce|mobile); ppc;/i], [[f, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[f, /ower/, "", H]], [/(sun4\w)[;\)]/i], [[f, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[f, H]]],
                    device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [c, [m, I], [b, v]], [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i], [c, [m, I], [b, g]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [c, [m, E], [b, g]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [c, [m, E], [b, v]], [/(macintosh);/i], [c, [m, E]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [c, [m, q], [b, g]], [/(?:honor)([-\w ]+)[;\)]/i], [c, [m, "Honor"], [b, g]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [c, [m, j], [b, v]], [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [c, [m, j], [b, g]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i], [[c, /_/g, " "], [m, B], [b, g]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[c, /_/g, " "], [m, B], [b, v]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [c, [m, "OPPO"], [b, g]], [/\b(opd2\d{3}a?) bui/i], [c, [m, "OPPO"], [b, v]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [c, [m, "Vivo"], [b, g]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [c, [m, "Realme"], [b, g]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [c, [m, O], [b, g]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [c, [m, O], [b, v]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [c, [m, "LG"], [b, v]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [c, [m, "LG"], [b, g]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [c, [m, "Lenovo"], [b, v]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[c, /_/g, " "], [m, "Nokia"], [b, g]], [/(pixel c)\b/i], [c, [m, M], [b, v]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [c, [m, M], [b, g]], [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [m, z], [b, g]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[c, "Xperia Tablet"], [m, z], [b, v]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [c, [m, "OnePlus"], [b, g]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [c, [m, S], [b, v]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[c, /(.+)/g, "Fire Phone $1"], [m, S], [b, g]], [/(playbook);[-\w\),; ]+(rim)/i], [c, m, [b, v]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [c, [m, _], [b, g]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [c, [m, C], [b, v]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [c, [m, C], [b, g]], [/(nexus 9)/i], [c, [m, "HTC"], [b, v]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [m, [c, /_/g, " "], [b, g]], [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i], [c, [m, "TCL"], [b, v]], [/(itel) ((\w+))/i], [[m, H], c, [b, Y, {
                        tablet: ["p10001l", "w7001"],
                        "*": "mobile"
                    }]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [c, [m, "Acer"], [b, v]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [c, [m, "Meizu"], [b, g]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [c, [m, "Ulefone"], [b, g]], [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i], [c, [m, "Energizer"], [b, g]], [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i], [c, [m, "Cat"], [b, g]], [/((?:new )?andromax[\w- ]+)(?: bui|\))/i], [c, [m, "Smartfren"], [b, g]], [/droid.+; (a(?:015|06[35]|142p?))/i], [c, [m, "Nothing"], [b, g]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [m, c, [b, g]], [/(imo) (tab \w+)/i, /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [m, c, [b, v]], [/(surface duo)/i], [c, [m, A], [b, v]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [c, [m, "Fairphone"], [b, g]], [/(u304aa)/i], [c, [m, "AT&T"], [b, g]], [/\bsie-(\w*)/i], [c, [m, "Siemens"], [b, g]], [/\b(rct\w+) b/i], [c, [m, "RCA"], [b, v]], [/\b(venue[\d ]{2,7}) b/i], [c, [m, "Dell"], [b, v]], [/\b(q(?:mv|ta)\w+) b/i], [c, [m, "Verizon"], [b, v]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [c, [m, "Barnes & Noble"], [b, v]], [/\b(tm\d{3}\w+) b/i], [c, [m, "NuVision"], [b, v]], [/\b(k88) b/i], [c, [m, "ZTE"], [b, v]], [/\b(nx\d{3}j) b/i], [c, [m, "ZTE"], [b, g]], [/\b(gen\d{3}) b.+49h/i], [c, [m, "Swiss"], [b, g]], [/\b(zur\d{3}) b/i], [c, [m, "Swiss"], [b, v]], [/\b((zeki)?tb.*\b) b/i], [c, [m, "Zeki"], [b, v]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[m, "Dragon Touch"], c, [b, v]], [/\b(ns-?\w{0,9}) b/i], [c, [m, "Insignia"], [b, v]], [/\b((nxa|next)-?\w{0,9}) b/i], [c, [m, "NextBook"], [b, v]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[m, "Voice"], c, [b, g]], [/\b(lvtel\-)?(v1[12]) b/i], [[m, "LvTel"], c, [b, g]], [/\b(ph-1) /i], [c, [m, "Essential"], [b, g]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [c, [m, "Envizen"], [b, v]], [/\b(trio[-\w\. ]+) b/i], [c, [m, "MachSpeed"], [b, v]], [/\btu_(1491) b/i], [c, [m, "Rotor"], [b, v]], [/(shield[\w ]+) b/i], [c, [m, "Nvidia"], [b, v]], [/(sprint) (\w+)/i], [m, c, [b, g]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [m, A], [b, g]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [c, [m, U], [b, v]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [c, [m, U], [b, g]], [/smart-tv.+(samsung)/i], [m, [b, x]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [m, I], [b, x]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[m, "LG"], [b, x]], [/(apple) ?tv/i], [m, [c, E + " TV"], [b, x]], [/crkey/i], [[c, N + "cast"], [m, M], [b, x]], [/droid.+aft(\w+)( bui|\))/i], [c, [m, S], [b, x]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [c, [m, q], [b, x]], [/(bravia[\w ]+)( bui|\))/i], [c, [m, z], [b, x]], [/(mitv-\w{5}) bui/i], [c, [m, B], [b, x]], [/Hbbtv.*(technisat) (.*);/i], [m, c, [b, x]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[m, Z], [c, Z], [b, x]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[b, x]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [m, c, [b, h]], [/droid.+; (shield) bui/i], [c, [m, "Nvidia"], [b, h]], [/(playstation [345portablevi]+)/i], [c, [m, z], [b, h]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [c, [m, A], [b, h]], [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i], [c, [m, I], [b, y]], [/((pebble))app/i], [m, c, [b, y]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [c, [m, E], [b, y]], [/droid.+; (glass) \d/i], [c, [m, M], [b, y]], [/droid.+; (wt63?0{2,3})\)/i], [c, [m, U], [b, y]], [/droid.+; (glass) \d/i], [c, [m, M], [b, y]], [/(pico) (4|neo3(?: link|pro)?)/i], [m, c, [b, y]], [/; (quest( \d| pro)?)/i], [c, [m, L], [b, y]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [m, [b, k]], [/(aeobc)\b/i], [c, [m, S], [b, k]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [c, [b, g]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [c, [b, v]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[b, v]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[b, g]], [/(android[-\w\. ]{0,9});.+buil/i], [c, [m, "Generic"]]],
                    engine: [[/windows.+ edge\/([\w\.]+)/i], [p, [w, "EdgeHTML"]], [/(arkweb)\/([\w\.]+)/i], [w, p], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [p, [w, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [w, p], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [p, w]],
                    os: [[/microsoft (windows) (vista|xp)/i], [w, p], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [w, [p, Y, K]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[p, Y, K], [w, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[p, /_/g, "."], [w, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[w, D], [p, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [p, w], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [w, p], [/\(bb(10);/i], [p, [w, _]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [p, [w, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [p, [w, P + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [p, [w, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [p, [w, "watchOS"]], [/crkey\/([\d\.]+)/i], [p, [w, N + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[w, V], p], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [w, p], [/(sunos) ?([\w\.\d]*)/i], [[w, "Solaris"], p], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [w, p]]
                }, J = function (e, i) {
                    if (typeof e === l && (i = e, e = n), !(this instanceof J)) return new J(e, i).getResult();
                    var r = typeof o !== s && o.navigator ? o.navigator : n, t = e || (r && r.userAgent ? r.userAgent : ""),
                        h = r && r.userAgentData ? r.userAgentData : n, x = i ? W(Q, i) : Q, y = r && r.userAgent == t;
                    return this.getBrowser = function () {
                        var e, i = {};
                        return i[w] = n, i[p] = n, X.call(i, t, x.browser), i[d] = typeof (e = i[p]) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : n, y && r && r.brave && typeof r.brave.isBrave == a && (i[w] = "Brave"), i
                    }, this.getCPU = function () {
                        var e = {};
                        return e[f] = n, X.call(e, t, x.cpu), e
                    }, this.getDevice = function () {
                        var e = {};
                        return e[m] = n, e[c] = n, e[b] = n, X.call(e, t, x.device), y && !e[b] && h && h.mobile && (e[b] = g), y && "Macintosh" == e[c] && r && typeof r.standalone !== s && r.maxTouchPoints && r.maxTouchPoints > 2 && (e[c] = "iPad", e[b] = v), e
                    }, this.getEngine = function () {
                        var e = {};
                        return e[w] = n, e[p] = n, X.call(e, t, x.engine), e
                    }, this.getOS = function () {
                        var e = {};
                        return e[w] = n, e[p] = n, X.call(e, t, x.os), y && !e[w] && h && h.platform && "Unknown" != h.platform && (e[w] = h.platform.replace(/chrome os/i, V).replace(/macos/i, D)), e
                    }, this.getResult = function () {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }, this.getUA = function () {
                        return t
                    }, this.setUA = function (e) {
                        return t = typeof e === u && e.length > 500 ? Z(e, 500) : e, this
                    }, this.setUA(t), this
                };
            J.VERSION = "1.0.40", J.BROWSER = $([w, p, d]), J.CPU = $([f]), J.DEVICE = $([c, m, b, h, g, x, v, y, k]), J.ENGINE = J.OS = $([w, p]), typeof i !== s ? (e.exports && (i = e.exports = J), i.UAParser = J) : r.amdO ? n !== (t = (function () {
                return J
            }).call(i, r, i, e)) && (e.exports = t) : typeof o !== s && (o.UAParser = J);
            var ee = typeof o !== s && (o.jQuery || o.Zepto);
            if (ee && !ee.ua) {
                var ei = new J;
                ee.ua = ei.getResult(), ee.ua.get = function () {
                    return ei.getUA()
                }, ee.ua.set = function (e) {
                    ei.setUA(e);
                    var i = ei.getResult();
                    for (var r in i) ee.ua[r] = i[r]
                }
            }
        }("object" == typeof window ? window : this)
    }, 3755: function (e, i, r) {
        "use strict";
        r.d(i, {
            NY: function () {
                return E
            }, Ee: function () {
                return S
            }, fC: function () {
                return k
            }
        });
        var t = r(2265), o = r(7437), n = globalThis?.document ? t.useLayoutEffect : () => {
        };

        function a(e, i) {
            if ("function" == typeof e) return e(i);
            null != e && (e.current = i)
        }

        r(4887);
        var s = t.forwardRef((e, i) => {
            let {children: r, ...n} = e, a = t.Children.toArray(r), s = a.find(d);
            if (s) {
                let e = s.props.children,
                    r = a.map(i => i !== s ? i : t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null);
                return (0, o.jsx)(l, {
                    ...n,
                    ref: i,
                    children: t.isValidElement(e) ? t.cloneElement(e, void 0, r) : null
                })
            }
            return (0, o.jsx)(l, {...n, ref: i, children: r})
        });
        s.displayName = "Slot";
        var l = t.forwardRef((e, i) => {
            let {children: r, ...o} = e;
            if (t.isValidElement(r)) {
                let e, n;
                let s = (e = Object.getOwnPropertyDescriptor(r.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning ? r.ref : (e = Object.getOwnPropertyDescriptor(r, "ref")?.get) && "isReactWarning" in e && e.isReactWarning ? r.props.ref : r.props.ref || r.ref,
                    l = function (e, i) {
                        let r = {...i};
                        for (let t in i) {
                            let o = e[t], n = i[t];
                            /^on[A-Z]/.test(t) ? o && n ? r[t] = (...e) => {
                                n(...e), o(...e)
                            } : o && (r[t] = o) : "style" === t ? r[t] = {...o, ...n} : "className" === t && (r[t] = [o, n].filter(Boolean).join(" "))
                        }
                        return {...e, ...r}
                    }(o, r.props);
                return r.type !== t.Fragment && (l.ref = i ? function (...e) {
                    return i => {
                        let r = !1, t = e.map(e => {
                            let t = a(e, i);
                            return r || "function" != typeof t || (r = !0), t
                        });
                        if (r) return () => {
                            for (let i = 0; i < t.length; i++) {
                                let r = t[i];
                                "function" == typeof r ? r() : a(e[i], null)
                            }
                        }
                    }
                }(i, s) : s), t.cloneElement(r, l)
            }
            return t.Children.count(r) > 1 ? t.Children.only(null) : null
        });
        l.displayName = "SlotClone";
        var u = ({children: e}) => (0, o.jsx)(o.Fragment, {children: e});

        function d(e) {
            return t.isValidElement(e) && e.type === u
        }

        var c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, i) => {
            let r = t.forwardRef((e, r) => {
                let {asChild: t, ...n} = e, a = t ? s : i;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, o.jsx)(a, {
                    ...n,
                    ref: r
                })
            });
            return r.displayName = `Primitive.${i}`, {...e, [i]: r}
        }, {}), w = "Avatar", [b, m] = function (e, i = []) {
            let r = [], n = () => {
                let i = r.map(e => t.createContext(e));
                return function (r) {
                    let o = r?.[e] || i;
                    return t.useMemo(() => ({[`__scope${e}`]: {...r, [e]: o}}), [r, o])
                }
            };
            return n.scopeName = e, [function (i, n) {
                let a = t.createContext(n), s = r.length;
                r = [...r, n];
                let l = i => {
                    let {scope: r, children: n, ...l} = i, u = r?.[e]?.[s] || a,
                        d = t.useMemo(() => l, Object.values(l));
                    return (0, o.jsx)(u.Provider, {value: d, children: n})
                };
                return l.displayName = i + "Provider", [l, function (r, o) {
                    let l = o?.[e]?.[s] || a, u = t.useContext(l);
                    if (u) return u;
                    if (void 0 !== n) return n;
                    throw Error(`\`${r}\` must be used within \`${i}\``)
                }]
            }, function (...e) {
                let i = e[0];
                if (1 === e.length) return i;
                let r = () => {
                    let r = e.map(e => ({useScope: e(), scopeName: e.scopeName}));
                    return function (e) {
                        let o = r.reduce((i, {useScope: r, scopeName: t}) => {
                            let o = r(e)[`__scope${t}`];
                            return {...i, ...o}
                        }, {});
                        return t.useMemo(() => ({[`__scope${i.scopeName}`]: o}), [o])
                    }
                };
                return r.scopeName = i.scopeName, r
            }(n, ...i)]
        }(w), [p, f] = b(w), h = t.forwardRef((e, i) => {
            let {__scopeAvatar: r, ...n} = e, [a, s] = t.useState("idle");
            return (0, o.jsx)(p, {
                scope: r,
                imageLoadingStatus: a,
                onImageLoadingStatusChange: s,
                children: (0, o.jsx)(c.span, {...n, ref: i})
            })
        });
        h.displayName = w;
        var g = "AvatarImage", v = t.forwardRef((e, i) => {
            let {
                __scopeAvatar: r, src: a, onLoadingStatusChange: s = () => {
                }, ...l
            } = e, u = f(g, r), d = function (e, i) {
                let [r, o] = t.useState("idle");
                return n(() => {
                    if (!e) {
                        o("error");
                        return
                    }
                    let r = !0, t = new window.Image, n = e => () => {
                        r && o(e)
                    };
                    return o("loading"), t.onload = n("loaded"), t.onerror = n("error"), t.src = e, i && (t.referrerPolicy = i), () => {
                        r = !1
                    }
                }, [e, i]), r
            }(a, l.referrerPolicy), w = function (e) {
                let i = t.useRef(e);
                return t.useEffect(() => {
                    i.current = e
                }), t.useMemo(() => (...e) => i.current?.(...e), [])
            }(e => {
                s(e), u.onImageLoadingStatusChange(e)
            });
            return n(() => {
                "idle" !== d && w(d)
            }, [d, w]), "loaded" === d ? (0, o.jsx)(c.img, {...l, ref: i, src: a}) : null
        });
        v.displayName = g;
        var x = "AvatarFallback", y = t.forwardRef((e, i) => {
            let {__scopeAvatar: r, delayMs: n, ...a} = e, s = f(x, r), [l, u] = t.useState(void 0 === n);
            return t.useEffect(() => {
                if (void 0 !== n) {
                    let e = window.setTimeout(() => u(!0), n);
                    return () => window.clearTimeout(e)
                }
            }, [n]), l && "loaded" !== s.imageLoadingStatus ? (0, o.jsx)(c.span, {...a, ref: i}) : null
        });
        y.displayName = x;
        var k = h, S = v, E = y
    }, 8614: function (e, i, r) {
        "use strict";
        r.d(i, {
            M: function () {
                return h
            }
        });
        var t = r(7437), o = r(2265), n = r(8881), a = r(3576), s = r(4252), l = r(5750);

        class u extends o.Component {
            getSnapshotBeforeUpdate(e) {
                let i = this.props.childRef.current;
                if (i && e.isPresent && !this.props.isPresent) {
                    let e = this.props.sizeRef.current;
                    e.height = i.offsetHeight || 0, e.width = i.offsetWidth || 0, e.top = i.offsetTop, e.left = i.offsetLeft
                }
                return null
            }

            componentDidUpdate() {
            }

            render() {
                return this.props.children
            }
        }

        function d(e) {
            let {children: i, isPresent: r} = e, n = (0, o.useId)(), a = (0, o.useRef)(null),
                s = (0, o.useRef)({width: 0, height: 0, top: 0, left: 0}), {nonce: d} = (0, o.useContext)(l._);
            return (0, o.useInsertionEffect)(() => {
                let {width: e, height: i, top: t, left: o} = s.current;
                if (r || !a.current || !e || !i) return;
                a.current.dataset.motionPopId = n;
                let l = document.createElement("style");
                return d && (l.nonce = d), document.head.appendChild(l), l.sheet && l.sheet.insertRule('\n          [data-motion-pop-id="'.concat(n, '"] {\n            position: absolute !important;\n            width: ').concat(e, "px !important;\n            height: ").concat(i, "px !important;\n            top: ").concat(t, "px !important;\n            left: ").concat(o, "px !important;\n          }\n        ")), () => {
                    document.head.removeChild(l)
                }
            }, [r]), (0, t.jsx)(u, {isPresent: r, childRef: a, sizeRef: s, children: o.cloneElement(i, {ref: a})})
        }

        let c = e => {
            let {
                children: i,
                initial: r,
                isPresent: n,
                onExitComplete: l,
                custom: u,
                presenceAffectsLayout: c,
                mode: b
            } = e, m = (0, a.h)(w), p = (0, o.useId)(), f = (0, o.useCallback)(e => {
                for (let i of (m.set(e, !0), m.values())) if (!i) return;
                l && l()
            }, [m, l]), h = (0, o.useMemo)(() => ({
                id: p,
                initial: r,
                isPresent: n,
                custom: u,
                onExitComplete: f,
                register: e => (m.set(e, !1), () => m.delete(e))
            }), c ? [Math.random(), f] : [n, f]);
            return (0, o.useMemo)(() => {
                m.forEach((e, i) => m.set(i, !1))
            }, [n]), o.useEffect(() => {
                n || m.size || !l || l()
            }, [n]), "popLayout" === b && (i = (0, t.jsx)(d, {
                isPresent: n,
                children: i
            })), (0, t.jsx)(s.O.Provider, {value: h, children: i})
        };

        function w() {
            return new Map
        }

        var b = r(9637);
        let m = e => e.key || "";

        function p(e) {
            let i = [];
            return o.Children.forEach(e, e => {
                (0, o.isValidElement)(e) && i.push(e)
            }), i
        }

        var f = r(1534);
        let h = e => {
            let {
                    children: i,
                    custom: r,
                    initial: s = !0,
                    onExitComplete: l,
                    presenceAffectsLayout: u = !0,
                    mode: d = "sync",
                    propagate: w = !1
                } = e, [h, g] = (0, b.oO)(w), v = (0, o.useMemo)(() => p(i), [i]), x = w && !h ? [] : v.map(m),
                y = (0, o.useRef)(!0), k = (0, o.useRef)(v),
                S = (0, a.h)(() => new Map), [E, C] = (0, o.useState)(v), [_, T] = (0, o.useState)(v);
            (0, f.L)(() => {
                y.current = !1, k.current = v;
                for (let e = 0; e < _.length; e++) {
                    let i = m(_[e]);
                    x.includes(i) ? S.delete(i) : !0 !== S.get(i) && S.set(i, !1)
                }
            }, [_, x.length, x.join("-")]);
            let N = [];
            if (v !== E) {
                let e = [...v];
                for (let i = 0; i < _.length; i++) {
                    let r = _[i], t = m(r);
                    x.includes(t) || (e.splice(i, 0, r), N.push(r))
                }
                "wait" === d && N.length && (e = N), T(p(e)), C(v);
                return
            }
            let {forceRender: P} = (0, o.useContext)(n.p);
            return (0, t.jsx)(t.Fragment, {
                children: _.map(e => {
                    let i = m(e), o = (!w || !!h) && (v === _ || x.includes(i));
                    return (0, t.jsx)(c, {
                        isPresent: o,
                        initial: (!y.current || !!s) && void 0,
                        custom: o ? void 0 : r,
                        presenceAffectsLayout: u,
                        mode: d,
                        onExitComplete: o ? void 0 : () => {
                            if (!S.has(i)) return;
                            S.set(i, !0);
                            let e = !0;
                            S.forEach(i => {
                                i || (e = !1)
                            }), e && (null == P || P(), T(k.current), w && (null == g || g()), l && l())
                        },
                        children: e
                    }, i)
                })
            })
        }
    }, 1906: function (e, i, r) {
        "use strict";
        r.d(i, {
            c: function () {
                return s
            }
        });
        var t = r(2265), o = r(3078), n = r(5750), a = r(3576);

        function s(e) {
            let i = (0, a.h)(() => (0, o.BX)(e)), {isStatic: r} = (0, t.useContext)(n._);
            if (r) {
                let [, r] = (0, t.useState)(e);
                (0, t.useEffect)(() => i.on("change", r), [])
            }
            return i
        }
    }, 3812: function (e, i, r) {
        "use strict";
        r.d(i, {
            H: function () {
                return w
            }
        });
        var t = r(8843);
        let o = e => e && "object" == typeof e && e.mix, n = e => o(e) ? e.mix : void 0;
        var a = r(1906), s = r(1534), l = r(5414);

        function u(e, i) {
            let r = (0, a.c)(i()), t = () => r.set(i());
            return t(), (0, s.L)(() => {
                let i = () => l.Wi.preRender(t, !1, !0), r = e.map(e => e.on("change", i));
                return () => {
                    r.forEach(e => e()), (0, l.Pn)(t)
                }
            }), r
        }

        var d = r(3576), c = r(3078);

        function w(e, i, r, o) {
            if ("function" == typeof e) return function (e) {
                c.S1.current = [], e();
                let i = u(c.S1.current, e);
                return c.S1.current = void 0, i
            }(e);
            let a = "function" == typeof i ? i : function (...e) {
                let i = !Array.isArray(e[0]), r = i ? 0 : -1, o = e[0 + r], a = e[1 + r], s = e[2 + r], l = e[3 + r],
                    u = (0, t.s)(a, s, {mixer: n(s[0]), ...l});
                return i ? u(o) : u
            }(i, r, o);
            return Array.isArray(e) ? b(e, a) : b([e], ([e]) => a(e))
        }

        function b(e, i) {
            let r = (0, d.h)(() => []);
            return u(e, () => {
                r.length = 0;
                let t = e.length;
                for (let i = 0; i < t; i++) r[i] = e[i].get();
                return i(r)
            })
        }
    }
}]);