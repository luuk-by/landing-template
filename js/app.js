!function(e) {
    function n(n) {
        for (var r, o, a = n[0], c = n[1], i = n[2], l = 0, d = []; l < a.length; l++)
            o = a[l],
            Object.prototype.hasOwnProperty.call(C, o) && C[o] && d.push(C[o][0]),
            C[o] = 0;
        for (r in c)
            Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        for (q && q(n); d.length; )
            d.shift()();
        return P.push.apply(P, i || []),
        t()
    }
    function t() {
        for (var e, n = 0; n < P.length; n++) {
            for (var t = P[n], r = !0, o = 1; o < t.length; o++) {
                var a = t[o];
                0 !== C[a] && (r = !1)
            }
            r && (P.splice(n--, 1),
            e = H(H.s = t[0]))
        }
        return e
    }
    var r = window.webpackHotUpdate;
    window.webpackHotUpdate = function(e, n) {
        !function(e, n) {
            if (!O[e] || !b[e])
                return;
            for (var t in b[e] = !1,
            n)
                Object.prototype.hasOwnProperty.call(n, t) && (_[t] = n[t]);
            0 == --y && 0 === g && D()
        }(e, n),
        r && r(e, n)
    }
    ;
    var o, a = !0, c = "139414de07f2da407eb6", i = 1e4, l = {}, d = [], s = [];
    function u(e) {
        var n = {
            _acceptedDependencies: {},
            _declinedDependencies: {},
            _selfAccepted: !1,
            _selfDeclined: !1,
            _disposeHandlers: [],
            _main: o !== e,
            active: !0,
            accept: function(e, t) {
                if (e === undefined)
                    n._selfAccepted = !0;
                else if ("function" == typeof e)
                    n._selfAccepted = e;
                else if ("object" == typeof e)
                    for (var r = 0; r < e.length; r++)
                        n._acceptedDependencies[e[r]] = t || function() {}
                        ;
                else
                    n._acceptedDependencies[e] = t || function() {}
            },
            decline: function(e) {
                if (e === undefined)
                    n._selfDeclined = !0;
                else if ("object" == typeof e)
                    for (var t = 0; t < e.length; t++)
                        n._declinedDependencies[e[t]] = !0;
                else
                    n._declinedDependencies[e] = !0
            },
            dispose: function(e) {
                n._disposeHandlers.push(e)
            },
            addDisposeHandler: function(e) {
                n._disposeHandlers.push(e)
            },
            removeDisposeHandler: function(e) {
                var t = n._disposeHandlers.indexOf(e);
                t >= 0 && n._disposeHandlers.splice(t, 1)
            },
            check: x,
            apply: E,
            status: function(e) {
                if (!e)
                    return f;
                p.push(e)
            },
            addStatusHandler: function(e) {
                p.push(e)
            },
            removeStatusHandler: function(e) {
                var n = p.indexOf(e);
                n >= 0 && p.splice(n, 1)
            },
            data: l[e]
        };
        return o = undefined,
        n
    }
    var p = []
      , f = "idle";
    function m(e) {
        f = e;
        for (var n = 0; n < p.length; n++)
            p[n].call(null, e)
    }
    var h, _, v, y = 0, g = 0, w = {}, b = {}, O = {};
    function k(e) {
        return +e + "" === e ? +e : e
    }
    function x(e) {
        if ("idle" !== f)
            throw new Error("check() is only allowed in idle status");
        return a = e,
        m("check"),
        (n = i,
        n = n || 1e4,
        new Promise((function(e, t) {
            if ("undefined" == typeof XMLHttpRequest)
                return t(new Error("No browser support"));
            try {
                var r = new XMLHttpRequest
                  , o = H.p + "" + c + ".hot-update.json";
                r.open("GET", o, !0),
                r.timeout = n,
                r.send(null)
            } catch (a) {
                return t(a)
            }
            r.onreadystatechange = function() {
                if (4 === r.readyState)
                    if (0 === r.status)
                        t(new Error("Manifest request to " + o + " timed out."));
                    else if (404 === r.status)
                        e();
                    else if (200 !== r.status && 304 !== r.status)
                        t(new Error("Manifest request to " + o + " failed."));
                    else {
                        try {
                            var n = JSON.parse(r.responseText)
                        } catch (a) {
                            return void t(a)
                        }
                        e(n)
                    }
            }
        }
        ))).then((function(e) {
            if (!e)
                return m("idle"),
                null;
            b = {},
            w = {},
            O = e.c,
            v = e.h,
            m("prepare");
            var n = new Promise((function(e, n) {
                h = {
                    resolve: e,
                    reject: n
                }
            }
            ));
            for (var t in _ = {},
            C)
                j(t);
            return "prepare" === f && 0 === g && 0 === y && D(),
            n
        }
        ));
        var n
    }
    function j(e) {
        O[e] ? (b[e] = !0,
        y++,
        function(e) {
            var n = document.createElement("script");
            n.charset = "utf-8",
            n.src = H.p + "" + e + "." + c + ".hot-update.js",
            document.head.appendChild(n)
        }(e)) : w[e] = !0
    }
    function D() {
        m("ready");
        var e = h;
        if (h = null,
        e)
            if (a)
                Promise.resolve().then((function() {
                    return E(a)
                }
                )).then((function(n) {
                    e.resolve(n)
                }
                ), (function(n) {
                    e.reject(n)
                }
                ));
            else {
                var n = [];
                for (var t in _)
                    Object.prototype.hasOwnProperty.call(_, t) && n.push(k(t));
                e.resolve(n)
            }
    }
    function E(n) {
        if ("ready" !== f)
            throw new Error("apply() is only allowed in ready status");
        var t, r, o, a, i;
        function s(e) {
            for (var n = [e], t = {}, r = n.map((function(e) {
                return {
                    chain: [e],
                    id: e
                }
            }
            )); r.length > 0; ) {
                var o = r.pop()
                  , c = o.id
                  , i = o.chain;
                if ((a = I[c]) && !a.hot._selfAccepted) {
                    if (a.hot._selfDeclined)
                        return {
                            type: "self-declined",
                            chain: i,
                            moduleId: c
                        };
                    if (a.hot._main)
                        return {
                            type: "unaccepted",
                            chain: i,
                            moduleId: c
                        };
                    for (var l = 0; l < a.parents.length; l++) {
                        var d = a.parents[l]
                          , s = I[d];
                        if (s) {
                            if (s.hot._declinedDependencies[c])
                                return {
                                    type: "declined",
                                    chain: i.concat([d]),
                                    moduleId: c,
                                    parentId: d
                                };
                            -1 === n.indexOf(d) && (s.hot._acceptedDependencies[c] ? (t[d] || (t[d] = []),
                            u(t[d], [c])) : (delete t[d],
                            n.push(d),
                            r.push({
                                chain: i.concat([d]),
                                id: d
                            })))
                        }
                    }
                }
            }
            return {
                type: "accepted",
                moduleId: e,
                outdatedModules: n,
                outdatedDependencies: t
            }
        }
        function u(e, n) {
            for (var t = 0; t < n.length; t++) {
                var r = n[t];
                -1 === e.indexOf(r) && e.push(r)
            }
        }
        n = n || {};
        var p = {}
          , h = []
          , y = {}
          , g = function() {
            console.warn("[HMR] unexpected require(" + b.moduleId + ") to disposed module")
        };
        for (var w in _)
            if (Object.prototype.hasOwnProperty.call(_, w)) {
                var b;
                i = k(w);
                var x = !1
                  , j = !1
                  , D = !1
                  , E = "";
                switch ((b = _[w] ? s(i) : {
                    type: "disposed",
                    moduleId: w
                }).chain && (E = "\nUpdate propagation: " + b.chain.join(" -> ")),
                b.type) {
                case "self-declined":
                    n.onDeclined && n.onDeclined(b),
                    n.ignoreDeclined || (x = new Error("Aborted because of self decline: " + b.moduleId + E));
                    break;
                case "declined":
                    n.onDeclined && n.onDeclined(b),
                    n.ignoreDeclined || (x = new Error("Aborted because of declined dependency: " + b.moduleId + " in " + b.parentId + E));
                    break;
                case "unaccepted":
                    n.onUnaccepted && n.onUnaccepted(b),
                    n.ignoreUnaccepted || (x = new Error("Aborted because " + i + " is not accepted" + E));
                    break;
                case "accepted":
                    n.onAccepted && n.onAccepted(b),
                    j = !0;
                    break;
                case "disposed":
                    n.onDisposed && n.onDisposed(b),
                    D = !0;
                    break;
                default:
                    throw new Error("Unexception type " + b.type)
                }
                if (x)
                    return m("abort"),
                    Promise.reject(x);
                if (j)
                    for (i in y[i] = _[i],
                    u(h, b.outdatedModules),
                    b.outdatedDependencies)
                        Object.prototype.hasOwnProperty.call(b.outdatedDependencies, i) && (p[i] || (p[i] = []),
                        u(p[i], b.outdatedDependencies[i]));
                D && (u(h, [b.moduleId]),
                y[i] = g)
            }
        var P, M = [];
        for (r = 0; r < h.length; r++)
            i = h[r],
            I[i] && I[i].hot._selfAccepted && y[i] !== g && M.push({
                module: i,
                errorHandler: I[i].hot._selfAccepted
            });
        m("dispose"),
        Object.keys(O).forEach((function(e) {
            !1 === O[e] && function(e) {
                delete C[e]
            }(e)
        }
        ));
        for (var A, S, q = h.slice(); q.length > 0; )
            if (i = q.pop(),
            a = I[i]) {
                var z = {}
                  , L = a.hot._disposeHandlers;
                for (o = 0; o < L.length; o++)
                    (t = L[o])(z);
                for (l[i] = z,
                a.hot.active = !1,
                delete I[i],
                delete p[i],
                o = 0; o < a.children.length; o++) {
                    var T = I[a.children[o]];
                    T && ((P = T.parents.indexOf(i)) >= 0 && T.parents.splice(P, 1))
                }
            }
        for (i in p)
            if (Object.prototype.hasOwnProperty.call(p, i) && (a = I[i]))
                for (S = p[i],
                o = 0; o < S.length; o++)
                    A = S[o],
                    (P = a.children.indexOf(A)) >= 0 && a.children.splice(P, 1);
        for (i in m("apply"),
        c = v,
        y)
            Object.prototype.hasOwnProperty.call(y, i) && (e[i] = y[i]);
        var U = null;
        for (i in p)
            if (Object.prototype.hasOwnProperty.call(p, i) && (a = I[i])) {
                S = p[i];
                var B = [];
                for (r = 0; r < S.length; r++)
                    if (A = S[r],
                    t = a.hot._acceptedDependencies[A]) {
                        if (-1 !== B.indexOf(t))
                            continue;
                        B.push(t)
                    }
                for (r = 0; r < B.length; r++) {
                    t = B[r];
                    try {
                        t(S)
                    } catch (N) {
                        n.onErrored && n.onErrored({
                            type: "accept-errored",
                            moduleId: i,
                            dependencyId: S[r],
                            error: N
                        }),
                        n.ignoreErrored || U || (U = N)
                    }
                }
            }
        for (r = 0; r < M.length; r++) {
            var R = M[r];
            i = R.module,
            d = [i];
            try {
                H(i)
            } catch (N) {
                if ("function" == typeof R.errorHandler)
                    try {
                        R.errorHandler(N)
                    } catch (J) {
                        n.onErrored && n.onErrored({
                            type: "self-accept-error-handler-errored",
                            moduleId: i,
                            error: J,
                            originalError: N
                        }),
                        n.ignoreErrored || U || (U = J),
                        U || (U = N)
                    }
                else
                    n.onErrored && n.onErrored({
                        type: "self-accept-errored",
                        moduleId: i,
                        error: N
                    }),
                    n.ignoreErrored || U || (U = N)
            }
        }
        return U ? (m("fail"),
        Promise.reject(U)) : (m("idle"),
        new Promise((function(e) {
            e(h)
        }
        )))
    }
    var I = {}
      , C = {
        0: 0
    }
      , P = [];
    function H(n) {
        if (I[n])
            return I[n].exports;
        var t = I[n] = {
            i: n,
            l: !1,
            exports: {},
            hot: u(n),
            parents: (s = d,
            d = [],
            s),
            children: []
        };
        return e[n].call(t.exports, t, t.exports, function(e) {
            var n = I[e];
            if (!n)
                return H;
            var t = function(t) {
                return n.hot.active ? (I[t] ? -1 === I[t].parents.indexOf(e) && I[t].parents.push(e) : (d = [e],
                o = t),
                -1 === n.children.indexOf(t) && n.children.push(t)) : (console.warn("[HMR] unexpected require(" + t + ") from disposed module " + e),
                d = []),
                H(t)
            }
              , r = function(e) {
                return {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return H[e]
                    },
                    set: function(n) {
                        H[e] = n
                    }
                }
            };
            for (var a in H)
                Object.prototype.hasOwnProperty.call(H, a) && "e" !== a && "t" !== a && Object.defineProperty(t, a, r(a));
            return t.e = function(e) {
                return "ready" === f && m("prepare"),
                g++,
                H.e(e).then(n, (function(e) {
                    throw n(),
                    e
                }
                ));
                function n() {
                    g--,
                    "prepare" === f && (w[e] || j(e),
                    0 === g && 0 === y && D())
                }
            }
            ,
            t.t = function(e, n) {
                return 1 & n && (e = t(e)),
                H.t(e, -2 & n)
            }
            ,
            t
        }(n)),
        t.l = !0,
        t.exports
    }
    H.m = e,
    H.c = I,
    H.d = function(e, n, t) {
        H.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }
    ,
    H.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    H.t = function(e, n) {
        if (1 & n && (e = H(e)),
        8 & n)
            return e;
        if (4 & n && "object" == typeof e && e && e.__esModule)
            return e;
        var t = Object.create(null);
        if (H.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }),
        2 & n && "string" != typeof e)
            for (var r in e)
                H.d(t, r, function(n) {
                    return e[n]
                }
                .bind(null, r));
        return t
    }
    ,
    H.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return H.d(n, "a", n),
        n
    }
    ,
    H.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    H.p = "/",
    H.h = function() {
        return c
    }
    ;
    var M = window.webpackJsonp = window.webpackJsonp || []
      , A = M.push.bind(M);
    M.push = n,
    M = M.slice();
    for (var S = 0; S < M.length; S++)
        n(M[S]);
    var q = A;
    P.push([11, 1]),
    t()
}({
    11: function(e, n, t) {
        "use strict";
        t.r(n);
        t(12),
        t(14),
        t(15),
        t(16),
        t(18),
        t(19),
        t(20),
        t(21),
        t(0),
        t(22)
    },
    14: function(e, n, t) {
        var r = t(6);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = {
            hmr: !0,
            transform: void 0
        };
        o.insertInto = undefined;
        var a = t(3)(r, o);
        r.locals && (e.exports = r.locals),
        e.hot.accept(6, (function() {
            var n = t(6);
            if ("string" == typeof n && (n = [[e.i, n, ""]]),
            !function(e, n) {
                var t, r = 0;
                for (t in e) {
                    if (!n || e[t] !== n[t])
                        return !1;
                    r++
                }
                for (t in n)
                    r--;
                return 0 === r
            }(r.locals, n.locals))
                throw new Error("Aborting CSS HMR due to changed css-modules locals.");
            a(n)
        }
        )),
        e.hot.dispose((function() {
            a()
        }
        ))
    },
    22: function(e, n, t) {
        (function(e) {
            var n = t(23);
            !function() {
                var r, o, a, c, i, l, d, s, u, p, f;
                function m() {
                    var n = e("#square").val()
                      , t = e("#lamp").val()
                      , r = e("#luster").val()
                      , o = e(".calculator__content").find(".calculator__columns__check input:checked").val();
                    e(".calculator__total__value span").html(o * n + 350 * t + 500 * r)
                }
                (r = t(28)).keys().forEach(r),
                lazyload(),
                n("+375 (99) 999-99-99").mask(document.querySelectorAll("input[name=phone]")),
                e("input[name=name]").on("keyup", (function() {
                    this.value = this.value.replace(/[^а-яА-ЯёЁa-zA-z -]/gi, "")
                }
                )),
                e(window).on("scroll", (function() {
                    e(document).scrollTop() >= 10 ? e(".header").addClass("fixed") : e(".header").removeClass("fixed")
                }
                )),
                e(".modal__form__close, .popup__close, .modal-menu__fade, .modal-form__close, .modal-form__fade").on("click", (function() {
                    e(this).parents(".modal").hasClass("modal-politic") ? e(".modal-politic").fadeOut(500) : e(".modal, .modal__form, .modal__thanks, .popup, .popup__window, .modal-menu, .modal-form, .modal-thanks, .modal-error, .offer").fadeOut(500)
                }
                )),
                e(".price__menu").on("click", ".price__menu__item:not(.active)", (function() {
                    return e(this).addClass("active").siblings().removeClass("active"),
                    e(".price__content").find(".price__list").removeClass("active").eq(e(this).index()).addClass("active"),
                    !1
                }
                )),
                e(".toModal").on("click", (function() {
                    return e(".modal-form").fadeIn(500),
                    !1
                }
                )),
                e(".toPopup").on("click", (function() {
                    var n = e(this).attr("data-modal");
                    return e(".popup").fadeIn(500),
                    e("#" + n).fadeIn(500),
                    !1
                }
                )),
                e(".nav__burger").click((function() {
                    e(".modal-menu").fadeIn()
                }
                )),
                e(".pdf__offer").click((function() {
                    return e(".offer").fadeIn(300),
                    !1
                }
                )),
                e(".scrollTo").click((function() {
                    var n = "." + e(this).attr("data-target");
                    if (e(".modal-menu").fadeOut(),
                    "/" == document.location.pathname)
                        return e("html").animate({
                            scrollTop: e(n).offset().top
                        }, 500),
                        !1
                }
                )),
                document.getElementById("map") && ymaps.ready((function() {
                    !function() {
                        var e;
                        (e = new ymaps.Map("map",{
                            center: [55.712142, 37.656631],
                            zoom: 17,
                            controls: ["zoomControl"]
                        })).behaviors.disable("scrollZoom");
                        var n = new ymaps.Placemark(e.getCenter());
                        e.geoObjects.add(n)
                    }()
                }
                )),
                e(".calculator__columns__minus").on("click", (function() {
                    var n = e(this).parents(".calculator__columns__input").find("input");
                    return "angle" == n.attr("id") && n.val() < 10 && n.val(parseInt(n.val()) + 1),
                    "luster" == n.attr("id") && n.val() < 100 && n.val(parseInt(n.val()) + 1),
                    "lamp" == n.attr("id") && n.val() < 100 && n.val(parseInt(n.val()) + 1),
                    "square" == n.attr("id") && n.val() < 500 && n.val(parseInt(n.val()) + 1),
                    n.change(),
                    !1
                }
                )),
                e(".calculator__columns__plus").on("click", (function() {
                    var n = e(this).parents(".calculator__columns__input").find("input")
                      , t = n.val() - 1;
                    return t = t < 1 ? 1 : t,
                    n.val(t),
                    n.change(),
                    !1
                }
                )),
                m(),
                e(document).on("change", ".calculator__content", (function() {
                    m()
                }
                )),
                o = e(".pdf__list__control:nth-child(1)"),
                a = e(".pdf__list__control:nth-child(2)"),
                (c = e(".pdf__list__inner")).owlCarousel({
                    margin: 12,
                    items: 3,
                    dots: !1,
                    loop: !0,
                    responsive: {
                        0: {
                            items: 1
                        },
                        540: {
                            items: 2
                        },
                        850: {
                            items: 3
                        }
                    }
                }),
                o.click((function() {
                    c.trigger("prev.owl.carousel", [500])
                }
                )),
                a.click((function() {
                    c.trigger("next.owl.carousel", [500])
                }
                )),
                function() {
                    var n = e(".gallery__slider__control:nth-child(1)")
                      , t = e(".gallery__slider__control:nth-child(2)")
                      , r = e(".gallery__slider__inner");
                    r.owlCarousel({
                        margin: 0,
                        items: 1,
                        dots: !1,
                        loop: !0
                    }),
                    n.click((function() {
                        r.trigger("prev.owl.carousel", [500])
                    }
                    )),
                    t.click((function() {
                        r.trigger("next.owl.carousel", [500])
                    }
                    ))
                }(),
                function() {
                    var n = e(".atm__top__slider__control:nth-child(1)")
                      , t = e(".atm__top__slider__control:nth-child(2)")
                      , r = e(".atm__top__slider__inner")
                      , o = e(".atm__top__slider__dots");
                    r.owlCarousel({
                        margin: 0,
                        items: 1,
                        dots: !0,
                        dotsContainer: o,
                        loop: !0
                    }),
                    n.click((function() {
                        r.trigger("prev.owl.carousel", [500])
                    }
                    )),
                    t.click((function() {
                        r.trigger("next.owl.carousel", [500])
                    }
                    ))
                }(),
                e("form").each((function(n, t) {
                    e(t).validate({
                        highlight: function(n, t, r) {
                            e(n).addClass("error")
                        },
                        unhighlight: function(n, t, r) {
                            e(n).removeClass("error")
                        },
                        rules: {
                            phone: {
                                required: !0,
                                minlength: 2,
                                maxlength: 30
                            }
                        },
                        messages: {
                            phone: {
                                required: "Пожалуйста, введите номер телефона",
                            },
                            name: {
                                required: "Пожалуйста, введите имя",
                            },
                        },
                        success: function(e) {}
                    })
                }
                ))
            }()
        }
        ).call(this, t(0))
    },
    28: function(e, n, t) {
        var r = {
            "./close.svg": 29,
            "./instagram-logo.svg": 30,
            "./vk-social-logotype.svg": 31
        };
        function o(e) {
            var n = a(e);
            return t(n)
        }
        function a(e) {
            if (!t.o(r, e)) {
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND",
                n
            }
            return r[e]
        }
        o.keys = function() {
            return Object.keys(r)
        }
        ,
        o.resolve = a,
        e.exports = o,
        o.id = 28
    },
    29: function(e, n, t) {
        "use strict";
        t.r(n);
        var r = t(1)
          , o = t.n(r)
          , a = t(2)
          , c = t.n(a)
          , i = new o.a({
            id: "close",
            use: "close-usage",
            viewBox: "0 0 47.971 47.971",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971" id="close"><path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88 c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242 C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879 s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" /></symbol>'
        });
        c.a.add(i);
        n["default"] = i
    },
    30: function(e, n, t) {
        "use strict";
        t.r(n);
        var r = t(1)
          , o = t.n(r)
          , a = t(2)
          , c = t.n(a)
          , i = new o.a({
            id: "instagram-logo",
            use: "instagram-logo-usage",
            viewBox: "0 0 169.063 169.063",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169.063 169.063" id="instagram-logo"><path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752 c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407 c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752 c17.455,0,31.656,14.201,31.656,31.655V122.407z" /><path d="M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561C128.094 60.512 108.552 40.97 84.531 40.97zM84.531 113.093c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563C113.094 100.281 100.28 113.093 84.531 113.093zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22-2.051 2.04-3.23 4.88-3.23 7.78 0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78C135.661 29.421 132.821 28.251 129.921 28.251z" /></symbol>'
        });
        c.a.add(i);
        n["default"] = i
    },
    31: function(e, n, t) {
        "use strict";
        t.r(n);
        var r = t(1)
          , o = t.n(r)
          , a = t(2)
          , c = t.n(a)
          , i = new o.a({
            id: "vk-social-logotype",
            use: "vk-social-logotype-usage",
            viewBox: "0 0 96.496 96.496",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.496 96.496" id="vk-social-logotype"><path d="M92.499,65.178c-2.873-3.446-6.254-6.387-9.453-9.51c-2.886-2.815-3.068-4.448-0.748-7.697 c2.532-3.546,5.255-6.956,7.81-10.486c2.385-3.299,4.823-6.589,6.078-10.539c0.796-2.513,0.092-3.623-2.485-4.063 c-0.444-0.077-0.903-0.081-1.355-0.081l-15.289-0.018c-1.883-0.028-2.924,0.793-3.59,2.462c-0.899,2.256-1.826,4.51-2.897,6.687 c-2.43,4.936-5.144,9.707-8.949,13.747c-0.839,0.891-1.767,2.017-3.169,1.553c-1.754-0.64-2.271-3.53-2.242-4.507l-0.015-17.647 c-0.34-2.521-0.899-3.645-3.402-4.135l-15.882,0.003c-2.12,0-3.183,0.819-4.315,2.145c-0.653,0.766-0.85,1.263,0.492,1.517 c2.636,0.5,4.121,2.206,4.515,4.849c0.632,4.223,0.588,8.463,0.224,12.703c-0.107,1.238-0.32,2.473-0.811,3.629 c-0.768,1.817-2.008,2.187-3.637,1.069c-1.475-1.012-2.511-2.44-3.525-3.874c-3.809-5.382-6.848-11.186-9.326-17.285 c-0.716-1.762-1.951-2.83-3.818-2.859c-4.587-0.073-9.175-0.085-13.762,0.004c-2.76,0.052-3.583,1.392-2.459,3.894 c4.996,11.113,10.557,21.917,17.816,31.759c3.727,5.051,8.006,9.51,13.534,12.67c6.265,3.582,13.009,4.66,20.112,4.328 c3.326-0.156,4.325-1.021,4.479-4.336c0.104-2.268,0.361-4.523,1.48-6.561c1.098-2,2.761-2.381,4.678-1.137 c0.959,0.623,1.767,1.416,2.53,2.252c1.872,2.048,3.677,4.158,5.62,6.137c2.437,2.48,5.324,3.945,8.954,3.646L93.744,75.5 c2.264-0.148,3.438-2.924,2.138-5.451C94.969,68.279,93.771,66.703,92.499,65.178z" /></symbol>'
        });
        c.a.add(i);
        n["default"] = i
    },
    6: function(e, n, t) {}
});
