"use strict";
exports.id = 534;
exports.ids = [534];
exports.modules = {

/***/ 1534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EG": () => (/* binding */ getTechSlugList),
/* harmony export */   "Jd": () => (/* binding */ getAllList),
/* harmony export */   "Q7": () => (/* binding */ getContentList),
/* harmony export */   "_T": () => (/* binding */ getContentBySlug),
/* harmony export */   "cS": () => (/* binding */ getNodeSlugList)
/* harmony export */ });
/* unused harmony exports getContentSlugList, getContentSummaryBySlug */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4818);
/* harmony import */ var remark_prism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2423);
/* harmony import */ var remark_prism__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remark_prism__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6809);
/* harmony import */ var remark_external_links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3715);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__, remark_gfm__WEBPACK_IMPORTED_MODULE_6__, remark_external_links__WEBPACK_IMPORTED_MODULE_7__]);
([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__, remark_gfm__WEBPACK_IMPORTED_MODULE_6__, remark_external_links__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const contentDir = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "content");
const contentRoute = (/* unused pure expression or super */ null && ([
    "node",
    "tech"
]));
const getContentSlugList = (type)=>fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(contentDir, type));
const getTechSlugList = ()=>getContentSlugList("tech");
const getNodeSlugList = ()=>getContentSlugList("node");
const getContentSummaryBySlug = (type, slug)=>{
    const fileContent = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(contentDir, type, slug, "index.md"), "utf-8");
    const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContent);
    return {
        type,
        title: data.title,
        description: data.description,
        tags: data.tags,
        date: dayjs__WEBPACK_IMPORTED_MODULE_3___default()(data.date).format("YYYY-MM-DD"),
        slug
    };
};
const getContentList = (type)=>{
    const slugs = getContentSlugList(type);
    return slugs.map((slug)=>getContentSummaryBySlug(type, slug)).sort((a, b)=>dayjs__WEBPACK_IMPORTED_MODULE_3___default()(a.date).isBefore(dayjs__WEBPACK_IMPORTED_MODULE_3___default()(b.date)) ? 1 : -1);
};
const getContentBySlug = async (type, slug)=>{
    const fileContent = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(contentDir, type, slug, "index.md"), "utf-8");
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContent);
    return {
        title: data.title,
        date: dayjs__WEBPACK_IMPORTED_MODULE_3___default()(data.date).format("YYYY-MM-DD"),
        description: data.description,
        tags: data.tags || [],
        content: await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__.serialize)(content, {
            mdxOptions: {
                remarkPlugins: [
                    (remark_prism__WEBPACK_IMPORTED_MODULE_5___default()),
                    remark_external_links__WEBPACK_IMPORTED_MODULE_7__["default"],
                    remark_gfm__WEBPACK_IMPORTED_MODULE_6__["default"]
                ]
            }
        })
    };
};
const getAllList = ()=>{
    const nodeList = getContentList("node");
    const techList = getContentList("tech");
    return [
        ...nodeList,
        ...techList
    ].sort((a, b)=>dayjs__WEBPACK_IMPORTED_MODULE_3___default()(a.date).isBefore(dayjs__WEBPACK_IMPORTED_MODULE_3___default()(b.date)) ? 1 : -1);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;