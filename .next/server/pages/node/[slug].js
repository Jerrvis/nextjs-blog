/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/node/[slug]";
exports.ids = ["pages/node/[slug]"];
exports.modules = {

/***/ "./pages/node/[slug]/index.module.css":
/*!********************************************!*\
  !*** ./pages/node/[slug]/index.module.css ***!
  \********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"article\": \"_slug__article__ZRhpL\",\n\t\"head\": \"_slug__head__h8U_T\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ub2RlL1tzbHVnXS9pbmRleC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctYmxvZy8uL3BhZ2VzL25vZGUvW3NsdWddL2luZGV4Lm1vZHVsZS5jc3M/NzU3NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnRpY2xlXCI6IFwiX3NsdWdfX2FydGljbGVfX1pSaHBMXCIsXG5cdFwiaGVhZFwiOiBcIl9zbHVnX19oZWFkX19oOFVfVFwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/node/[slug]/index.module.css\n");

/***/ }),

/***/ "./api/index.ts":
/*!**********************!*\
  !*** ./api/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllList\": () => (/* binding */ getAllList),\n/* harmony export */   \"getContentBySlug\": () => (/* binding */ getContentBySlug),\n/* harmony export */   \"getContentList\": () => (/* binding */ getContentList),\n/* harmony export */   \"getContentSlugList\": () => (/* binding */ getContentSlugList),\n/* harmony export */   \"getContentSummaryBySlug\": () => (/* binding */ getContentSummaryBySlug),\n/* harmony export */   \"getNodeSlugList\": () => (/* binding */ getNodeSlugList),\n/* harmony export */   \"getTechSlugList\": () => (/* binding */ getTechSlugList)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-mdx-remote/serialize */ \"next-mdx-remote/serialize\");\n/* harmony import */ var remark_prism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remark-prism */ \"remark-prism\");\n/* harmony import */ var remark_prism__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remark_prism__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ \"remark-gfm\");\n/* harmony import */ var remark_external_links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! remark-external-links */ \"remark-external-links\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__, remark_gfm__WEBPACK_IMPORTED_MODULE_6__, remark_external_links__WEBPACK_IMPORTED_MODULE_7__]);\n([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__, remark_gfm__WEBPACK_IMPORTED_MODULE_6__, remark_external_links__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst contentDir = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"content\");\nconst contentRoute = [\n    \"node\",\n    \"tech\"\n];\nconst getContentSlugList = (type)=>fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(contentDir, type));\nconst getTechSlugList = ()=>getContentSlugList(\"tech\");\nconst getNodeSlugList = ()=>getContentSlugList(\"node\");\nconst getContentSummaryBySlug = (type, slug)=>{\n    const fileContent = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(contentDir, type, slug, \"index.md\"), \"utf-8\");\n    const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContent);\n    return {\n        type,\n        title: data.title,\n        description: data.description,\n        tags: data.tags,\n        date: dayjs__WEBPACK_IMPORTED_MODULE_3___default()(data.date).format(\"YYYY-MM-DD\"),\n        slug\n    };\n};\nconst getContentList = (type)=>{\n    const slugs = getContentSlugList(type);\n    return slugs.map((slug)=>getContentSummaryBySlug(type, slug)).sort((a, b)=>dayjs__WEBPACK_IMPORTED_MODULE_3___default()(a.date).isBefore(dayjs__WEBPACK_IMPORTED_MODULE_3___default()(b.date)) ? 1 : -1);\n};\nconst getContentBySlug = async (type, slug)=>{\n    const fileContent = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(contentDir, type, slug, \"index.md\"), \"utf-8\");\n    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContent);\n    return {\n        title: data.title,\n        date: dayjs__WEBPACK_IMPORTED_MODULE_3___default()(data.date).format(\"YYYY-MM-DD\"),\n        description: data.description,\n        tags: data.tags || [],\n        content: await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__.serialize)(content, {\n            mdxOptions: {\n                remarkPlugins: [\n                    (remark_prism__WEBPACK_IMPORTED_MODULE_5___default()),\n                    remark_external_links__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                    remark_gfm__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n                ]\n            }\n        })\n    };\n};\nconst getAllList = ()=>{\n    const nodeList = getContentList(\"node\");\n    const techList = getContentList(\"tech\");\n    return [\n        ...nodeList,\n        ...techList\n    ].sort((a, b)=>dayjs__WEBPACK_IMPORTED_MODULE_3___default()(a.date).isBefore(dayjs__WEBPACK_IMPORTED_MODULE_3___default()(b.date)) ? 1 : -1);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0I7QUFDSTtBQUNTO0FBQ1A7QUFDNEI7QUFDckI7QUFDSjtBQUNxQjtBQUVsRCxNQUFNUSxhQUFhUCxnREFBUyxDQUFDUyxRQUFRQyxHQUFHLElBQUk7QUFFNUMsTUFBTUMsZUFBZTtJQUFDO0lBQVE7Q0FBTztBQUU5QixNQUFNQyxxQkFBcUIsQ0FBQ0MsT0FDakNkLHFEQUFjLENBQUNDLGdEQUFTLENBQUNPLFlBQVlNLE9BQU87QUFFdkMsTUFBTUUsa0JBQWtCLElBQU1ILG1CQUFtQixRQUFRO0FBRXpELE1BQU1JLGtCQUFrQixJQUFNSixtQkFBbUIsUUFBUTtBQUV6RCxNQUFNSywwQkFBMEIsQ0FBQ0osTUFBY0ssT0FBaUI7SUFDckUsTUFBTUMsY0FBY3BCLHNEQUFlLENBQ2pDQyxnREFBUyxDQUFDTyxZQUFZTSxNQUFNSyxNQUFNLGFBQ2xDO0lBRUYsTUFBTSxFQUFFRyxLQUFJLEVBQUUsR0FBR3BCLGtEQUFNQSxDQUFDa0I7SUFDeEIsT0FBTztRQUNMTjtRQUNBUyxPQUFPRCxLQUFLQyxLQUFLO1FBQ2pCQyxhQUFhRixLQUFLRSxXQUFXO1FBQzdCQyxNQUFNSCxLQUFLRyxJQUFJO1FBQ2ZDLE1BQU12Qiw0Q0FBS0EsQ0FBQ21CLEtBQUtJLElBQUksRUFBRUMsTUFBTSxDQUFDO1FBQzlCUjtJQUNGO0FBQ0YsRUFBRTtBQUVLLE1BQU1TLGlCQUFpQixDQUFDZCxPQUFpQjtJQUM5QyxNQUFNZSxRQUFRaEIsbUJBQW1CQztJQUNqQyxPQUFPZSxNQUNKQyxHQUFHLENBQUMsQ0FBQ1gsT0FBU0Qsd0JBQXdCSixNQUFNSyxPQUM1Q1ksSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU85Qiw0Q0FBS0EsQ0FBQzZCLEVBQUVOLElBQUksRUFBRVEsUUFBUSxDQUFDL0IsNENBQUtBLENBQUM4QixFQUFFUCxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7QUFDbkUsRUFBRTtBQUVLLE1BQU1TLG1CQUFtQixPQUFPckIsTUFBY0ssT0FBaUI7SUFDcEUsTUFBTUMsY0FBY3BCLHNEQUFlLENBQ2pDQyxnREFBUyxDQUFDTyxZQUFZTSxNQUFNSyxNQUFNLGFBQ2xDO0lBRUYsTUFBTSxFQUFFRyxLQUFJLEVBQUVjLFFBQU8sRUFBRSxHQUFHbEMsa0RBQU1BLENBQUNrQjtJQUNqQyxPQUFPO1FBQ0xHLE9BQU9ELEtBQUtDLEtBQUs7UUFDakJHLE1BQU12Qiw0Q0FBS0EsQ0FBQ21CLEtBQUtJLElBQUksRUFBRUMsTUFBTSxDQUFDO1FBQzlCSCxhQUFhRixLQUFLRSxXQUFXO1FBQzdCQyxNQUFNSCxLQUFLRyxJQUFJLElBQUksRUFBRTtRQUNyQlcsU0FBUyxNQUFNaEMsb0VBQVNBLENBQUNnQyxTQUFTO1lBQ2hDQyxZQUFZO2dCQUNWQyxlQUFlO29CQUFDakMscURBQUtBO29CQUFFRSw2REFBYUE7b0JBQUVELGtEQUFHQTtpQkFBQztZQUM1QztRQUNGO0lBQ0Y7QUFDRixFQUFFO0FBRUssTUFBTWlDLGFBQWEsSUFBTTtJQUM5QixNQUFNQyxXQUFXWixlQUFlO0lBQ2hDLE1BQU1hLFdBQVdiLGVBQWU7SUFDaEMsT0FBTztXQUFJWTtXQUFhQztLQUFTLENBQUNWLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUN6QzlCLDRDQUFLQSxDQUFDNkIsRUFBRU4sSUFBSSxFQUFFUSxRQUFRLENBQUMvQiw0Q0FBS0EsQ0FBQzhCLEVBQUVQLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztBQUVsRCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LWJsb2cvLi9hcGkvaW5kZXgudHM/OWU2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSBcIm5leHQtbWR4LXJlbW90ZS9zZXJpYWxpemVcIjtcclxuaW1wb3J0IHByaXNtIGZyb20gXCJyZW1hcmstcHJpc21cIjtcclxuaW1wb3J0IGdmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xyXG5pbXBvcnQgZXh0ZXJuYWxMaW5rcyBmcm9tIFwicmVtYXJrLWV4dGVybmFsLWxpbmtzXCI7XHJcblxyXG5jb25zdCBjb250ZW50RGlyID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiY29udGVudFwiKTtcclxuXHJcbmNvbnN0IGNvbnRlbnRSb3V0ZSA9IFtcIm5vZGVcIiwgXCJ0ZWNoXCJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbnRlbnRTbHVnTGlzdCA9ICh0eXBlOiBzdHJpbmcpID0+XHJcbiAgZnMucmVhZGRpclN5bmMocGF0aC5qb2luKGNvbnRlbnREaXIsIHR5cGUpKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUZWNoU2x1Z0xpc3QgPSAoKSA9PiBnZXRDb250ZW50U2x1Z0xpc3QoXCJ0ZWNoXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE5vZGVTbHVnTGlzdCA9ICgpID0+IGdldENvbnRlbnRTbHVnTGlzdChcIm5vZGVcIik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29udGVudFN1bW1hcnlCeVNsdWcgPSAodHlwZTogc3RyaW5nLCBzbHVnOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhcclxuICAgIHBhdGguam9pbihjb250ZW50RGlyLCB0eXBlLCBzbHVnLCBcImluZGV4Lm1kXCIpLFxyXG4gICAgXCJ1dGYtOFwiXHJcbiAgKTtcclxuICBjb25zdCB7IGRhdGEgfSA9IG1hdHRlcihmaWxlQ29udGVudCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGUsXHJcbiAgICB0aXRsZTogZGF0YS50aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgdGFnczogZGF0YS50YWdzLFxyXG4gICAgZGF0ZTogZGF5anMoZGF0YS5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxyXG4gICAgc2x1ZyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbnRlbnRMaXN0ID0gKHR5cGU6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IHNsdWdzID0gZ2V0Q29udGVudFNsdWdMaXN0KHR5cGUpO1xyXG4gIHJldHVybiBzbHVnc1xyXG4gICAgLm1hcCgoc2x1ZykgPT4gZ2V0Q29udGVudFN1bW1hcnlCeVNsdWcodHlwZSwgc2x1ZykpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gKGRheWpzKGEuZGF0ZSkuaXNCZWZvcmUoZGF5anMoYi5kYXRlKSkgPyAxIDogLTEpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb250ZW50QnlTbHVnID0gYXN5bmMgKHR5cGU6IHN0cmluZywgc2x1Zzogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoXHJcbiAgICBwYXRoLmpvaW4oY29udGVudERpciwgdHlwZSwgc2x1ZywgXCJpbmRleC5tZFwiKSxcclxuICAgIFwidXRmLThcIlxyXG4gICk7XHJcbiAgY29uc3QgeyBkYXRhLCBjb250ZW50IH0gPSBtYXR0ZXIoZmlsZUNvbnRlbnQpO1xyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZTogZGF0YS50aXRsZSxcclxuICAgIGRhdGU6IGRheWpzKGRhdGEuZGF0ZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcclxuICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgdGFnczogZGF0YS50YWdzIHx8IFtdLFxyXG4gICAgY29udGVudDogYXdhaXQgc2VyaWFsaXplKGNvbnRlbnQsIHtcclxuICAgICAgbWR4T3B0aW9uczoge1xyXG4gICAgICAgIHJlbWFya1BsdWdpbnM6IFtwcmlzbSwgZXh0ZXJuYWxMaW5rcywgZ2ZtXSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBub2RlTGlzdCA9IGdldENvbnRlbnRMaXN0KFwibm9kZVwiKTtcclxuICBjb25zdCB0ZWNoTGlzdCA9IGdldENvbnRlbnRMaXN0KFwidGVjaFwiKTtcclxuICByZXR1cm4gWy4uLm5vZGVMaXN0LCAuLi50ZWNoTGlzdF0uc29ydCgoYSwgYikgPT5cclxuICAgIGRheWpzKGEuZGF0ZSkuaXNCZWZvcmUoZGF5anMoYi5kYXRlKSkgPyAxIDogLTFcclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwibWF0dGVyIiwiZGF5anMiLCJzZXJpYWxpemUiLCJwcmlzbSIsImdmbSIsImV4dGVybmFsTGlua3MiLCJjb250ZW50RGlyIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJjb250ZW50Um91dGUiLCJnZXRDb250ZW50U2x1Z0xpc3QiLCJ0eXBlIiwicmVhZGRpclN5bmMiLCJnZXRUZWNoU2x1Z0xpc3QiLCJnZXROb2RlU2x1Z0xpc3QiLCJnZXRDb250ZW50U3VtbWFyeUJ5U2x1ZyIsInNsdWciLCJmaWxlQ29udGVudCIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGFncyIsImRhdGUiLCJmb3JtYXQiLCJnZXRDb250ZW50TGlzdCIsInNsdWdzIiwibWFwIiwic29ydCIsImEiLCJiIiwiaXNCZWZvcmUiLCJnZXRDb250ZW50QnlTbHVnIiwiY29udGVudCIsIm1keE9wdGlvbnMiLCJyZW1hcmtQbHVnaW5zIiwiZ2V0QWxsTGlzdCIsIm5vZGVMaXN0IiwidGVjaExpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/index.ts\n");

/***/ }),

/***/ "./pages/node/[slug]/index.tsx":
/*!*************************************!*\
  !*** ./pages/node/[slug]/index.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"./api/index.ts\");\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-mdx-remote */ \"next-mdx-remote\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ \"./pages/node/[slug]/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_1__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__]);\n([_api__WEBPACK_IMPORTED_MODULE_1__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ article  })=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const lazyImages = document.querySelectorAll(\"img[data-src]\");\n        const observer = new IntersectionObserver((entries)=>{\n            entries.forEach((entry)=>{\n                if (entry.isIntersecting) {\n                    // 进入可视区域，加载图片\n                    const img = entry.target;\n                    // if (img.dataset.src) {\n                    img.src = img.dataset.src;\n                    img.removeAttribute(\"data-src\");\n                    observer.unobserve(img);\n                }\n            });\n        });\n        lazyImages.forEach((img)=>observer.observe(img));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: [\n                            article.title,\n                            \"-i21y\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Code\\\\The_Front-end_Study\\\\运维\\\\nextjs-blog\\\\pages\\\\node\\\\[slug]\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: article.description\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Code\\\\The_Front-end_Study\\\\运维\\\\nextjs-blog\\\\pages\\\\node\\\\[slug]\\\\index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Code\\\\The_Front-end_Study\\\\运维\\\\nextjs-blog\\\\pages\\\\node\\\\[slug]\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/i21y.ico\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Code\\\\The_Front-end_Study\\\\运维\\\\nextjs-blog\\\\pages\\\\node\\\\[slug]\\\\index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Code\\\\The_Front-end_Study\\\\运维\\\\nextjs-blog\\\\pages\\\\node\\\\[slug]\\\\index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().article),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().head),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: article.title\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Code\\\\The_Front-end_Study\\\\运维\\\\nextjs-blog\\\\pages\\\\node\\\\[slug]\\\\index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: article.date\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Code\\\\The_Front-end_Study\\\\运维\\\\nextjs-blog\\\\pages\\\\node\\\\[slug]\\\\index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\Code\\\\The_Front-end_Study\\\\运维\\\\nextjs-blog\\\\pages\\\\node\\\\[slug]\\\\index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"markdown\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__.MDXRemote, {\n                                ...article.content,\n                                components: {\n                                    img: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            \"data-src\": props.src,\n                                            src: \"#\",\n                                            alt: props.alt\n                                        }, void 0, false, void 0, void 0)\n                                }\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Code\\\\The_Front-end_Study\\\\运维\\\\nextjs-blog\\\\pages\\\\node\\\\[slug]\\\\index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Code\\\\The_Front-end_Study\\\\运维\\\\nextjs-blog\\\\pages\\\\node\\\\[slug]\\\\index.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Code\\\\The_Front-end_Study\\\\运维\\\\nextjs-blog\\\\pages\\\\node\\\\[slug]\\\\index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\Code\\\\The_Front-end_Study\\\\运维\\\\nextjs-blog\\\\pages\\\\node\\\\[slug]\\\\index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n});\n// 获取node类的文章列表 生成对应路由\nasync function getStaticPaths(a) {\n    const list = (0,_api__WEBPACK_IMPORTED_MODULE_1__.getNodeSlugList)();\n    return {\n        paths: list.map((item)=>({\n                params: {\n                    slug: item\n                }\n            })),\n        fallback: \"blocking\"\n    };\n}\nasync function getStaticProps({ params  }) {\n    const article = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.getContentBySlug)(\"node\", params.slug);\n    return {\n        props: {\n            article\n        },\n        revalidate: 14400\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ub2RlL1tzbHVnXS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDZDtBQUNmO0FBQ0s7QUFDTTtBQU12QyxpRUFBZSxDQUFDLEVBQUVNLFFBQU8sRUFBUyxHQUFLO0lBQ3JDRixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTUcsYUFBYUMsU0FBU0MsZ0JBQWdCLENBQUM7UUFDN0MsTUFBTUMsV0FBVyxJQUFJQyxxQkFBcUJDLENBQUFBLFVBQVc7WUFDbkRBLFFBQVFDLE9BQU8sQ0FBQ0MsQ0FBQUEsUUFBUztnQkFDdkIsSUFBSUEsTUFBTUMsY0FBYyxFQUFFO29CQUN4QixjQUFjO29CQUNkLE1BQU1DLE1BQVdGLE1BQU1HLE1BQU07b0JBQzdCLHlCQUF5QjtvQkFDekJELElBQUlFLEdBQUcsR0FBR0YsSUFBSUcsT0FBTyxDQUFDRCxHQUFHO29CQUV6QkYsSUFBSUksZUFBZSxDQUFDO29CQUNwQlYsU0FBU1csU0FBUyxDQUFDTDtnQkFDckIsQ0FBQztZQUNIO1FBQ0Y7UUFDQVQsV0FBV00sT0FBTyxDQUFDRyxDQUFBQSxNQUFPTixTQUFTWSxPQUFPLENBQUNOO0lBQzdDLEdBQUcsRUFBRTtJQUNMLHFCQUNFOzswQkFDRSw4REFBQ2Isa0RBQUlBOztrQ0FDSCw4REFBQ29COzs0QkFBT2pCLFFBQVFpQixLQUFLOzRCQUFDOzs7Ozs7O2tDQUN0Qiw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLFNBQVNwQixRQUFRcUIsV0FBVzs7Ozs7O2tDQUU5Qiw4REFBQ0g7d0JBQ0NDLE1BQUs7d0JBQ0xDLFNBQVE7Ozs7OztrQ0FFViw4REFBQ0U7d0JBQ0NDLEtBQUk7d0JBQ0pDLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHVCw4REFBQ0M7MEJBQ0MsNEVBQUN6QjtvQkFBUTBCLFdBQVczQixrRUFBYzs7c0NBQ2hDLDhEQUFDNEI7NEJBQUlELFdBQVczQiwrREFBVzs7OENBQ3pCLDhEQUFDOEI7OENBQUk3QixRQUFRaUIsS0FBSzs7Ozs7OzhDQUNsQiw4REFBQ2E7OENBQUk5QixRQUFRK0IsSUFBSTs7Ozs7Ozs7Ozs7O3NDQUVuQiw4REFBQ0o7NEJBQUlELFdBQVU7c0NBQ2IsNEVBQUM5QixzREFBU0E7Z0NBQ1AsR0FBR0ksUUFBUW9CLE9BQU87Z0NBQ25CWSxZQUFZO29DQUNWdEIsS0FBS3VCLENBQUFBLHNCQUNILDhEQUFDdkI7NENBQ0N3QixZQUFVRCxNQUFNckIsR0FBRzs0Q0FDbkJBLEtBQUk7NENBQ0p1QixLQUFLRixNQUFNRSxHQUFHOztnQ0FHcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9kLEdBQUM7QUFFRCxzQkFBc0I7QUFDZixlQUFlQyxlQUFlQyxDQUFNLEVBQUU7SUFDM0MsTUFBTUMsT0FBTzNDLHFEQUFlQTtJQUM1QixPQUFPO1FBQ0w0QyxPQUFPRCxLQUFLRSxHQUFHLENBQUNDLENBQUFBLE9BQVM7Z0JBQ3ZCQyxRQUFRO29CQUFFQyxNQUFNRjtnQkFBSztZQUN2QjtRQUNBRyxVQUFVO0lBQ1o7QUFDRixDQUFDO0FBRU0sZUFBZUMsZUFBZSxFQUFFSCxPQUFNLEVBQW1CLEVBQUU7SUFDaEUsTUFBTTFDLFVBQVUsTUFBTU4sc0RBQWdCQSxDQUFDLFFBQVFnRCxPQUFPQyxJQUFJO0lBQzFELE9BQU87UUFBRVYsT0FBTztZQUFFakM7UUFBUTtRQUFHOEMsWUFBWTtJQUFNO0FBQ2pELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctYmxvZy8uL3BhZ2VzL25vZGUvW3NsdWddL2luZGV4LnRzeD81YWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENvbnRlbnRCeVNsdWcsIGdldE5vZGVTbHVnTGlzdCB9IGZyb20gJ0AvYXBpJ1xyXG5pbXBvcnQgeyBNRFhSZW1vdGUgfSBmcm9tICduZXh0LW1keC1yZW1vdGUnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBhcnRpY2xlOiBhbnlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgYXJ0aWNsZSB9OiBQcm9wcykgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsYXp5SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nW2RhdGEtc3JjXScpXHJcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgIC8vIOi/m+WFpeWPr+inhuWMuuWfn++8jOWKoOi9veWbvueJh1xyXG4gICAgICAgICAgY29uc3QgaW1nOiBhbnkgPSBlbnRyeS50YXJnZXRcclxuICAgICAgICAgIC8vIGlmIChpbWcuZGF0YXNldC5zcmMpIHtcclxuICAgICAgICAgIGltZy5zcmMgPSBpbWcuZGF0YXNldC5zcmNcclxuXHJcbiAgICAgICAgICBpbWcucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyYycpXHJcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoaW1nKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBsYXp5SW1hZ2VzLmZvckVhY2goaW1nID0+IG9ic2VydmVyLm9ic2VydmUoaW1nKSlcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnthcnRpY2xlLnRpdGxlfS1pMjF5PC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2FydGljbGUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgICBocmVmPVwiL2kyMXkuaWNvXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cclxuICAgICAgICAgICAgPGgxPnthcnRpY2xlLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxoND57YXJ0aWNsZS5kYXRlfTwvaDQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd25cIj5cclxuICAgICAgICAgICAgPE1EWFJlbW90ZVxyXG4gICAgICAgICAgICAgIHsuLi5hcnRpY2xlLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50cz17e1xyXG4gICAgICAgICAgICAgICAgaW1nOiBwcm9wcyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXNyYz17cHJvcHMuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17cHJvcHMuYWx0fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID48L01EWFJlbW90ZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyDojrflj5Zub2Rl57G755qE5paH56ug5YiX6KGoIOeUn+aIkOWvueW6lOi3r+eUsVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoYTogYW55KSB7XHJcbiAgY29uc3QgbGlzdCA9IGdldE5vZGVTbHVnTGlzdCgpXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBsaXN0Lm1hcChpdGVtID0+ICh7XHJcbiAgICAgIHBhcmFtczogeyBzbHVnOiBpdGVtIH1cclxuICAgIH0pKSxcclxuICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfTogeyBwYXJhbXM6IGFueSB9KSB7XHJcbiAgY29uc3QgYXJ0aWNsZSA9IGF3YWl0IGdldENvbnRlbnRCeVNsdWcoJ25vZGUnLCBwYXJhbXMuc2x1ZylcclxuICByZXR1cm4geyBwcm9wczogeyBhcnRpY2xlIH0sIHJldmFsaWRhdGU6IDE0NDAwIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0Q29udGVudEJ5U2x1ZyIsImdldE5vZGVTbHVnTGlzdCIsIk1EWFJlbW90ZSIsIkhlYWQiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJhcnRpY2xlIiwibGF6eUltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbWciLCJ0YXJnZXQiLCJzcmMiLCJkYXRhc2V0IiwicmVtb3ZlQXR0cmlidXRlIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiZGVzY3JpcHRpb24iLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoZWFkIiwiaDEiLCJoNCIsImRhdGUiLCJjb21wb25lbnRzIiwicHJvcHMiLCJkYXRhLXNyYyIsImFsdCIsImdldFN0YXRpY1BhdGhzIiwiYSIsImxpc3QiLCJwYXRocyIsIm1hcCIsIml0ZW0iLCJwYXJhbXMiLCJzbHVnIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInJldmFsaWRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/node/[slug]/index.tsx\n");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "remark-prism":
/*!*******************************!*\
  !*** external "remark-prism" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("remark-prism");

/***/ }),

/***/ "next-mdx-remote":
/*!**********************************!*\
  !*** external "next-mdx-remote" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("next-mdx-remote");;

/***/ }),

/***/ "next-mdx-remote/serialize":
/*!********************************************!*\
  !*** external "next-mdx-remote/serialize" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ "remark-external-links":
/*!****************************************!*\
  !*** external "remark-external-links" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("remark-external-links");;

/***/ }),

/***/ "remark-gfm":
/*!*****************************!*\
  !*** external "remark-gfm" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("remark-gfm");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/node/[slug]/index.tsx"));
module.exports = __webpack_exports__;

})();