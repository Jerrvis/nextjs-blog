(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 223:
/***/ ((module) => {

// Exports
module.exports = {
	"background": "background_background__JxIUd"
};


/***/ }),

/***/ 2800:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "banner_banner__IBpVz",
	"title": "banner_title__kJJdU",
	"bg": "banner_bg__1uDey"
};


/***/ }),

/***/ 5919:
/***/ ((module) => {

// Exports
module.exports = {
	"conatiner": "content_conatiner__cUAH5",
	"aside": "content_aside__MopO6",
	"part1": "content_part1__jZT52",
	"author_state": "content_author_state__Lrpt3",
	"author_image": "content_author_image__z5bT6",
	"route": "content_route__kkvsP"
};


/***/ }),

/***/ 2701:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__l5XV_",
	"info": "footer_info__oLZT6"
};


/***/ }),

/***/ 9755:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__yYL2k",
	"header_visible": "header_header_visible__4dwbr",
	"header_hidden": "header_header_hidden__LfqCu",
	"mw_container": "header_mw_container__FaoC1",
	"h_fixed": "header_h_fixed__Qa_Tq"
};


/***/ }),

/***/ 2741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/blackmagicgirl-e.db97d6ad.png","height":999,"width":999,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AHhTV4xHRXhGV29DUadyerq92picvmk/VwBgLjJtHRh1Yoa6qsvFjKDBiKB+YnxjKiYAslJNwnh/zIl+4aWQy5CI2GdfnkRIbi8yAH1IQ6uCicGNg+G/re/RweOhfXZEOXYtKgBQAABycYmbh6DYlnvfmYDipIjCjnOValYAmFFQsVRlloyn8Mi178qw2KKRxoN7u4V6AJdXRq1uf3Nol6uguL2nu7l0gb2Idr56XQCEX0uSX1uGcJNpeLWsfI/Jc4P4toTUkEbboGUlQD4T7wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 7417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/header/index.module.css
var index_module = __webpack_require__(9755);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./components/header/index.tsx
/*
 * @Author: Jerrvis 675926782@qq.com
 * @Date: 2023-02-26 13:15:54
 * @LastEditors: Jerrvis 675926782@qq.com
 * @LastEditTime: 2023-03-04 19:51:18
 * @FilePath: \new-blog\components\header\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */ 



function Header() {
    const [prevScrollPosition, setPrevScrollPosition] = (0,external_react_.useState)(0);
    const [visible, setVisible] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>{
            const currentScrollPosition = window.pageYOffset;
            setVisible(currentScrollPosition <= prevScrollPosition || currentScrollPosition < 80);
            setPrevScrollPosition(currentScrollPosition);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        prevScrollPosition
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (index_module_default()).header + " " + (index_module_default()).h_fixed + " " + (visible ? (index_module_default()).header_visible : (index_module_default()).header_hidden),
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: (index_module_default()).mw_container + " mg-mid",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "首页"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/node",
                            children: "机场"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/tech",
                            children: "技术"
                        })
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./components/banner/index.module.css
var banner_index_module = __webpack_require__(2800);
var banner_index_module_default = /*#__PURE__*/__webpack_require__.n(banner_index_module);
;// CONCATENATED MODULE: ./components/banner/index.tsx


function Banner() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (banner_index_module_default()).banner,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (banner_index_module_default()).title,
            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "i21y"
            })
        })
    });
}

// EXTERNAL MODULE: ./components/content/index.module.css
var content_index_module = __webpack_require__(5919);
var content_index_module_default = /*#__PURE__*/__webpack_require__.n(content_index_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/content/index.tsx




const author_image = __webpack_require__(2741);
function index({ children  }) {
    (0,external_react_.useEffect)(()=>{});
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (content_index_module_default()).conatiner,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (content_index_module_default()).route,
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                    className: (content_index_module_default()).aside,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (content_index_module_default()).part1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (content_index_module_default()).author_state,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: (content_index_module_default()).author_image,
                                        src: author_image.default.src,
                                        width: 100,
                                        height: 100,
                                        alt: "author_image"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "jkun"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        children: "打工人"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                className: (content_index_module_default()).site_state
                            })
                        ]
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./components/footer/index.module.css
var footer_index_module = __webpack_require__(2701);
var footer_index_module_default = /*#__PURE__*/__webpack_require__.n(footer_index_module);
;// CONCATENATED MODULE: ./components/footer/index.tsx


/* harmony default export */ const footer = (()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (footer_index_module_default()).footer + " mg-mid",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (footer_index_module_default()).info,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "Copyright \xa9 2022-2023 Jkun"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "Design By Jkun"
                })
            ]
        })
    });
});

// EXTERNAL MODULE: ./components/background/index.module.css
var background_index_module = __webpack_require__(223);
var background_index_module_default = /*#__PURE__*/__webpack_require__.n(background_index_module);
;// CONCATENATED MODULE: ./components/background/index.tsx


function background_index() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (background_index_module_default()).background
    });
}

;// CONCATENATED MODULE: ./pages/_app.tsx







function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Banner, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(background_index, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(index, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,61], () => (__webpack_exec__(7417)));
module.exports = __webpack_exports__;

})();