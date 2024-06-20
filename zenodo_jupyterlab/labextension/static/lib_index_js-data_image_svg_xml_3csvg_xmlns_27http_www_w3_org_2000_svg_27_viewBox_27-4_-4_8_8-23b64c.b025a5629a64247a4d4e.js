"use strict";
(self["webpackChunkzenodo_jupyterlab"] = self["webpackChunkzenodo_jupyterlab"] || []).push([["lib_index_js-data_image_svg_xml_3csvg_xmlns_27http_www_w3_org_2000_svg_27_viewBox_27-4_-4_8_8-23b64c"],{

/***/ "./lib/API/GreetingTest.js":
/*!*********************************!*\
  !*** ./lib/API/GreetingTest.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const GreetingComponent = ({ isTrue }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isTrue ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "hi!") : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GreetingComponent);


/***/ }),

/***/ "./lib/components/NavBar.js":
/*!**********************************!*\
  !*** ./lib/components/NavBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const NavBar = ({ app }) => {
    const [isOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleSearchClick = () => {
        app.commands.execute('zenodo-jupyterlab: search');
        // Place your home command here
    };
    const handleAboutClick = () => {
        console.log('About clicked');
        // Place your about command here
    };
    const handleServicesClick = () => {
        console.log('Services clicked');
        // Place your services command here
    };
    const handleContactClick = () => {
        console.log('Contact clicked');
        // Place your contact command here
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", { className: "navbar" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: `navbar-links ${isOpen ? 'active' : ''}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "#", onClick: handleSearchClick }, "Search")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "#", onClick: handleAboutClick }, "About")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "#", onClick: handleServicesClick }, "Services")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "#", onClick: handleContactClick }, "Contact")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);
/* interface IMenuBarProps {
    value?: any;
    onChange: { (value: any): void };
    menus: IMenu[];
  }
  
  export interface IMenu {
    title: any;
    value: any;
    right?: boolean;
    disabled?: boolean;
  }

export const NavBar: React.FunctionComponent = () => {
    //const classes = useStyles();
  
    return (
      <div>
        <ul>
          {menus.map(menu => {
            const activeClass = menu.value === value ? 'active' : '';
            const disabledClass = menu.disabled ? 'disabled' : '';
            //const tabClass = menu.right ? classes.tabItemRight : classes.tabItem;
            //${tabClass}
            return (
              <li
                onClick={!menu.disabled ? () => onChange(menu.value) : undefined}
                key={menu.value}
                className={` ${activeClass} ${disabledClass}`}
              >
                {menu.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }; */


/***/ }),

/***/ "./lib/components/SearchPanel.js":
/*!***************************************!*\
  !*** ./lib/components/SearchPanel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _API_GreetingTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../API/GreetingTest */ "./lib/API/GreetingTest.js");


const SearchWidget = ({ isTrue }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'searchWidget' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Hello"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_API_GreetingTest__WEBPACK_IMPORTED_MODULE_1__["default"], { isTrue: isTrue })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchWidget);


/***/ }),

/***/ "./lib/components/SideBarPanel.js":
/*!****************************************!*\
  !*** ./lib/components/SideBarPanel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_ZenodoBlueTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/ZenodoBlueTitle */ "./lib/icons/ZenodoBlueTitle.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar */ "./lib/components/NavBar.js");
/* harmony import */ var _SearchPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchPanel */ "./lib/components/SearchPanel.js");

// //import ReactDOM from 'react-dom';



const SideBarPanel = ({ app, isTrue }) => {
    /* const runSearch = async (query: string) => {
        try {
            const response = await fetch('/run_search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error searching:', error);
            return [];
        }
    }; */
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: 'SideBarPanel' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: 'title_container' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_ZenodoBlueTitle__WEBPACK_IMPORTED_MODULE_1__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], { app: app }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SearchPanel__WEBPACK_IMPORTED_MODULE_3__["default"], { isTrue: isTrue })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBarPanel);


/***/ }),

/***/ "./lib/icons/ZenodoBlueTitle.js":
/*!**************************************!*\
  !*** ./lib/icons/ZenodoBlueTitle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ZenodoBlueTitle = () => {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "220px", height: "80px", viewBox: "0 0 220 80", "enable-background": "new 0 0 220 80", xmlSpace: "preserve" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", { id: "zenodo-gradient", gradientUnits: "userSpaceOnUse", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", { "stop-color": "#0047A8", offset: "0" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", { "stop-color": "#2BBCFF", offset: "1" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { x: "0", y: "0", rx: "10px", ry: "10px", width: "220px", height: "80px", fill: "url(#zenodo-gradient)" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { transform: "translate(36.5, 10)" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "#FFFFFF", d: "M145.301,18.875c-0.705-1.602-1.656-2.997-2.846-4.19c-1.189-1.187-2.584-2.125-4.188-2.805\r\n\t\t\t\t\t\tc-1.604-0.678-3.307-1.02-5.102-1.02c-1.848,0-3.564,0.342-5.139,1.02c-0.787,0.339-1.529,0.74-2.225,1.205\r\n\t\t\t\t\t\tc-0.701,0.469-1.357,1.003-1.967,1.6c-0.377,0.37-0.727,0.761-1.051,1.17c-0.363,0.457-0.764,1.068-0.992,1.439\r\n\t\t\t\t\t\tc-0.281,0.456-0.957,1.861-1.254,2.828c0.041-1.644,0.281-4.096,1.254-5.472V2.768c0-0.776-0.279-1.431-0.84-1.965\r\n\t\t\t\t\t\tC120.396,0.268,119.75,0,119.021,0c-0.777,0-1.43,0.268-1.969,0.803c-0.531,0.534-0.801,1.189-0.801,1.965v10.569\r\n\t\t\t\t\t\tc-1.117-0.778-2.322-1.386-3.605-1.824c-1.285-0.436-2.637-0.654-4.045-0.654c-1.799,0-3.496,0.342-5.1,1.02\r\n\t\t\t\t\t\tc-1.605,0.679-3,1.618-4.195,2.805c-1.186,1.194-2.139,2.588-2.836,4.19c-0.053,0.12-0.1,0.242-0.15,0.364\r\n\t\t\t\t\t\tc-0.047-0.122-0.094-0.244-0.146-0.364c-0.705-1.602-1.656-2.997-2.846-4.19c-1.189-1.187-2.586-2.125-4.188-2.805\r\n\t\t\t\t\t\tc-1.604-0.678-3.307-1.02-5.102-1.02c-1.848,0-3.564,0.342-5.139,1.02c-1.584,0.679-2.979,1.618-4.191,2.805\r\n\t\t\t\t\t\tc-1.213,1.194-2.164,2.588-2.842,4.19c-0.049,0.115-0.092,0.23-0.137,0.344c-0.047-0.114-0.092-0.229-0.141-0.344\r\n\t\t\t\t\t\tc-0.701-1.602-1.65-2.997-2.84-4.19c-1.191-1.187-2.588-2.125-4.193-2.805c-1.604-0.678-3.301-1.02-5.104-1.02\r\n\t\t\t\t\t\tc-1.842,0-3.557,0.342-5.137,1.02c-1.578,0.679-2.977,1.618-4.186,2.805c-1.221,1.194-2.166,2.588-2.848,4.19\r\n\t\t\t\t\t\tc-0.043,0.106-0.082,0.214-0.125,0.32c-0.043-0.106-0.084-0.214-0.131-0.32c-0.707-1.602-1.656-2.997-2.848-4.19\r\n\t\t\t\t\t\tc-1.188-1.187-2.582-2.125-4.184-2.805c-1.605-0.678-3.309-1.02-5.104-1.02c-1.85,0-3.564,0.342-5.137,1.02\r\n\t\t\t\t\t\tc-1.467,0.628-2.764,1.488-3.91,2.552V13.99c0-1.557-1.262-2.822-2.82-2.822H3.246c-1.557,0-2.82,1.265-2.82,2.822\r\n\t\t\t\t\t\tc0,1.559,1.264,2.82,2.82,2.82h15.541L0.557,41.356C0.195,41.843,0,42.433,0,43.038v1.841c0,1.558,1.264,2.822,2.822,2.822\r\n\t\t\t\t\t\th21.047c1.488,0,2.705-1.153,2.812-2.614c0.932,0.743,1.967,1.364,3.109,1.848c1.605,0.684,3.299,1.021,5.102,1.021\r\n\t\t\t\t\t\tc2.723,0,5.15-0.726,7.287-2.187c1.727-1.176,3.092-2.639,4.084-4.389v3.805c0,0.778,0.264,1.436,0.805,1.968\r\n\t\t\t\t\t\tc0.531,0.537,1.189,0.803,1.967,0.803c0.73,0,1.369-0.266,1.93-0.803c0.561-0.532,0.838-1.189,0.838-1.968v-9.879h-0.01\r\n\t\t\t\t\t\tc0-0.002,0.01-0.013,0.01-0.013s-6.137,0-6.912,0c-0.58,0-1.109,0.154-1.566,0.472c-0.463,0.316-0.793,0.744-0.982,1.275\r\n\t\t\t\t\t\tl-0.453,0.93c-0.631,1.365-1.566,2.443-2.809,3.244c-1.238,0.803-2.633,1.201-4.188,1.201c-1.023,0-2.004-0.191-2.955-0.579\r\n\t\t\t\t\t\tc-0.941-0.39-1.758-0.935-2.439-1.64c-0.682-0.703-1.227-1.52-1.641-2.443c-0.41-0.924-0.617-1.893-0.617-2.916v-2.476h17.715\r\n\t\t\t\t\t\th1.309h5.539v-8.385c0-1.015,0.191-1.99,0.582-2.912c0.389-0.922,0.936-1.74,1.645-2.444c0.699-0.703,1.514-1.249,2.441-1.641\r\n\t\t\t\t\t\tc0.918-0.388,1.92-0.581,2.982-0.581c1.023,0,2.01,0.193,2.955,0.581c0.945,0.393,1.762,0.938,2.439,1.641\r\n\t\t\t\t\t\tc0.682,0.704,1.225,1.521,1.641,2.444c0.412,0.922,0.621,1.896,0.621,2.912v21.208c0,0.778,0.266,1.436,0.799,1.968\r\n\t\t\t\t\t\tc0.535,0.537,1.191,0.803,1.971,0.803c0.729,0,1.371-0.266,1.934-0.803c0.553-0.532,0.834-1.189,0.834-1.968v-3.803\r\n\t\t\t\t\t\tc0.588,1.01,1.283,1.932,2.1,2.749c1.189,1.189,2.586,2.124,4.191,2.804c1.602,0.684,3.303,1.021,5.102,1.021\r\n\t\t\t\t\t\tc1.795,0,3.498-0.337,5.102-1.021c1.602-0.68,3.01-1.614,4.227-2.804c1.211-1.19,2.162-2.589,2.842-4.189\r\n\t\t\t\t\t\tc0.037-0.095,0.074-0.19,0.109-0.286c0.039,0.096,0.074,0.191,0.113,0.286c0.678,1.601,1.625,2.999,2.842,4.189\r\n\t\t\t\t\t\tc1.213,1.189,2.607,2.124,4.189,2.804c1.574,0.684,3.293,1.021,5.139,1.021c1.795,0,3.5-0.337,5.105-1.021\r\n\t\t\t\t\t\tc1.6-0.68,2.994-1.614,4.184-2.804c1.191-1.19,2.141-2.589,2.848-4.189c0.051-0.12,0.098-0.239,0.146-0.36\r\n\t\t\t\t\t\tc0.049,0.121,0.094,0.24,0.146,0.36c0.703,1.601,1.652,2.999,2.842,4.189c1.189,1.189,2.586,2.124,4.191,2.804\r\n\t\t\t\t\t\tc1.604,0.684,3.303,1.021,5.102,1.021c1.795,0,3.498-0.337,5.102-1.021c1.604-0.68,3.01-1.614,4.227-2.804\r\n\t\t\t\t\t\tc1.211-1.19,2.16-2.589,2.842-4.189c0.678-1.606,1.02-3.306,1.02-5.104v-10.86C146.355,22.182,146.002,20.479,145.301,18.875z\r\n\t\t\t\t\t\t\tM7.064,42.06l14.758-19.874c-0.078,0.587-0.121,1.184-0.121,1.791v10.86c0,1.799,0.35,3.498,1.059,5.104\r\n\t\t\t\t\t\tc0.328,0.752,0.719,1.458,1.156,2.119c-0.016,0-0.031-0.001-0.047-0.001H7.064z M42.541,26.817H27.24v-2.841\r\n\t\t\t\t\t\tc0-1.015,0.189-1.99,0.58-2.912c0.391-0.922,0.936-1.74,1.645-2.444c0.697-0.703,1.516-1.249,2.438-1.641\r\n\t\t\t\t\t\tc0.922-0.388,1.92-0.581,2.99-0.581c1.02,0,2.002,0.193,2.949,0.581c0.949,0.393,1.764,0.938,2.441,1.641\r\n\t\t\t\t\t\tc0.682,0.704,1.225,1.521,1.641,2.444c0.414,0.922,0.617,1.896,0.617,2.912V26.817z M91.688,34.837\r\n\t\t\t\t\t\tc0,1.023-0.189,1.992-0.582,2.916c-0.389,0.924-0.936,1.74-1.637,2.443c-0.705,0.705-1.523,1.25-2.445,1.64\r\n\t\t\t\t\t\tc-0.92,0.388-1.92,0.579-2.984,0.579c-1.023,0-2.004-0.191-2.955-0.579c-0.945-0.39-1.758-0.935-2.439-1.64\r\n\t\t\t\t\t\tc-0.682-0.703-1.229-1.52-1.641-2.443s-0.617-1.893-0.617-2.916v-10.86c0-1.015,0.191-1.99,0.582-2.912\r\n\t\t\t\t\t\tc0.387-0.922,0.934-1.74,1.639-2.444c0.701-0.703,1.52-1.249,2.441-1.641c0.922-0.388,1.92-0.581,2.99-0.581\r\n\t\t\t\t\t\tc1.018,0,2.004,0.193,2.947,0.581c0.951,0.393,1.764,0.938,2.443,1.641c0.68,0.704,1.223,1.521,1.641,2.444\r\n\t\t\t\t\t\tc0.412,0.922,0.617,1.896,0.617,2.912V34.837z M116.252,34.837c0,1.023-0.203,1.992-0.617,2.916\r\n\t\t\t\t\t\tc-0.412,0.924-0.961,1.74-1.641,2.443c-0.68,0.705-1.492,1.25-2.443,1.64c-0.943,0.388-1.93,0.579-2.949,0.579\r\n\t\t\t\t\t\tc-1.07,0-2.066-0.191-2.988-0.579c-0.924-0.39-1.74-0.935-2.439-1.64c-0.707-0.703-1.252-1.52-1.643-2.443\r\n\t\t\t\t\t\ts-0.584-1.893-0.584-2.916v-10.86c0-1.015,0.211-1.99,0.619-2.912c0.416-0.922,0.961-1.74,1.641-2.444\r\n\t\t\t\t\t\tc0.682-0.703,1.496-1.249,2.439-1.641c0.951-0.388,1.934-0.581,2.955-0.581c1.068,0,2.062,0.193,2.986,0.581\r\n\t\t\t\t\t\tc0.926,0.393,1.738,0.938,2.443,1.641c0.703,0.704,1.252,1.521,1.641,2.444c0.389,0.922,0.58,1.896,0.58,2.912V34.837z\r\n\t\t\t\t\t\t\tM140.816,34.837c0,1.023-0.193,1.992-0.58,2.916c-0.393,0.924-0.939,1.74-1.641,2.443c-0.705,0.705-1.523,1.25-2.443,1.64\r\n\t\t\t\t\t\tc-0.922,0.388-1.92,0.579-2.986,0.579c-1.021,0-2.004-0.191-2.955-0.579c-0.943-0.39-1.758-0.935-2.438-1.64\r\n\t\t\t\t\t\tc-0.682-0.703-1.23-1.52-1.643-2.443s-0.619-1.893-0.619-2.916v-10.86c0-1.015,0.193-1.99,0.584-2.912\r\n\t\t\t\t\t\tc0.387-0.922,0.934-1.74,1.639-2.444c0.703-0.703,1.518-1.249,2.441-1.641c0.924-0.388,1.92-0.581,2.99-0.581\r\n\t\t\t\t\t\tc1.02,0,2.004,0.193,2.949,0.581c0.949,0.393,1.764,0.938,2.441,1.641c0.682,0.704,1.225,1.521,1.643,2.444\r\n\t\t\t\t\t\tc0.412,0.922,0.617,1.896,0.617,2.912V34.837z" })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZenodoBlueTitle);


/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/application */ "webpack/sharing/consume/default/@jupyterlab/application");
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_icons_z_icon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/icons/z_icon.svg */ "./src/icons/z_icon.svg");
/* harmony import */ var _src_icons_zenodo_blue_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/icons/zenodo-blue.svg */ "./src/icons/zenodo-blue.svg");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_SideBarPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/SideBarPanel */ "./lib/components/SideBarPanel.js");



//import {Search} from './pages/search';





// //import ReactDOM from 'react-dom';


//import React from 'react';
//import { MenuBar } from '../components'
/* interface APODResponse {
  copyright: string;
  date: string;
  explanation: string;
  media_type: 'video' | 'image';
  title: string;
  url: string;
}; */
/* const Navigation: React.FC = () => {
  return (
    <MenuBar />
  );
} */
class ZenodoWidget extends _lumino_widgets__WEBPACK_IMPORTED_MODULE_2__.Widget {
    constructor(app) {
        super();
        this.root = null;
        this.app = app;
        this.isTrue = true;
        this.addClass('my-apodWidget');
        this.id = 'zenodo-jupyterlab-extension';
        this.title.closable = true;
        const icon = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__.LabIcon({
            name: 'zenodo_jupyterlab-extension:zenodo',
            svgstr: _src_icons_z_icon_svg__WEBPACK_IMPORTED_MODULE_7__,
        });
        this.title.icon = icon.bindprops();
        this.title_container = document.createElement('div');
        this.title_container.id = 'Zenodo-Title';
        this.title_container.setAttribute("style", "text-align: center");
        this.title_container.innerHTML = _src_icons_zenodo_blue_svg__WEBPACK_IMPORTED_MODULE_8__;
        this.node.appendChild(this.title_container);
        this.main_text = document.createElement('p');
        this.main_text.innerText = 'Testing';
        this.node.appendChild(this.main_text);
        this.menuDiv = document.createElement('div');
    }
    onAfterAttach(msg) {
        this.root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_4__.createRoot)(this.node);
        this.root.render(react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_SideBarPanel__WEBPACK_IMPORTED_MODULE_9__["default"], { app: this.app, isTrue: this.isTrue }));
    }
    onBeforeDetach(msg) {
        if (this.root) {
            this.root.unmount();
        }
    }
    setIsTrue(value) {
        this.isTrue = value;
    }
    async fillContent() {
        // this.img1.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Zenodo-gradient-square.svg/1200px-Zenodo-gradient-square.svg.png'
        // this.summary.innerText = 'Hello';
        return;
    }
}
/**
* Activate the APOD widget extension.
*/
async function activate(app, palette, restorer) {
    console.log('JupyterLab extension jupyterlab_apod is activated!');
    // Define commands
    /* app.commands.addCommand('my-extension:new-file', {
      label: 'New File',
      execute: () => {
        console.log('New File command executed');
      }
    });
  
    app.commands.addCommand('my-extension:open-file', {
      label: 'Open File',
      execute: () => {
        console.log('Open File command executed');
      }
    });
  
    app.commands.addCommand('my-extension:copy', {
      label: 'Copy',
      execute: () => {
        console.log('Copy command executed');
      }
    });
  
    app.commands.addCommand('my-extension:paste', {
      label: 'Paste',
      execute: () => {
        console.log('Paste command executed');
      }
    }); */
    // Declare a widget variable
    let widget;
    app.commands.addCommand('zenodo-jupyterlab: search', {
        label: 'Search Field',
        execute: () => {
            //widget.content.setIsTrue(true);
            console.log('You pressed search!');
        }
    });
    /* const content = new ZenodoWidget();
    widget = new MainAreaWidget({content});
    app.shell.add(widget, 'left');
    app.shell.activateById(widget.id); */
    // Add an application command
    const command = 'zenodo:open';
    app.commands.addCommand(command, {
        execute: () => {
            if (!widget || widget.isDisposed) {
                const content = new ZenodoWidget(app);
                widget = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.MainAreaWidget({ content });
            }
            if (!tracker.has(widget)) {
                // Track the state of the widget for later restoration
                tracker.add(widget);
            }
            if (!widget.isAttached) {
                // Attach the widget to the main work area if it's not there
                app.shell.add(widget, 'left');
            }
            widget.content.fillContent();
            // Activate the widget
            app.shell.activateById(widget.id);
        }
    });
    /*   // Add the command to the palette.
      palette.addItem({ command, category: 'Tutorial' }); */
    // Track and restore the widget state
    let tracker = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.WidgetTracker({
        namespace: 'zenodo'
    });
    if (restorer) {
        restorer.restore(tracker, {
            command,
            name: () => 'zenodo'
        });
    }
    app.commands.execute(command);
}
const plugin = {
    id: 'zenodo_jupyterlab',
    description: 'extension',
    autoStart: true,
    requires: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.ICommandPalette],
    optional: [_jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__.ILayoutRestorer],
    activate: activate
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e":
/*!*****************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "./src/icons/z_icon.svg":
/*!******************************!*\
  !*** ./src/icons/z_icon.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "<svg width=\"288\" height=\"288\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 51.046 51.046\">\n    <path fill=\"#000000\" d=\"m 28.324,20.044 c -0.043,-0.106 -0.084,-0.214 -0.131,-0.32 -0.707,-1.602 -1.656,-2.997 -2.848,-4.19 -1.188,-1.187 -2.582,-2.125 -4.184,-2.805 -1.605,-0.678 -3.309,-1.02 -5.104,-1.02 -1.85,0 -3.564,0.342 -5.137,1.02 -1.467,0.628 -2.764,1.488 -3.91,2.552 V 14.84 c 0,-1.557 -1.262,-2.822 -2.82,-2.822 h -19.775 c -1.557,0 -2.82,1.265 -2.82,2.822 0,1.559 1.264,2.82 2.82,2.82 h 15.541 l -18.23,24.546 c -0.362,0.487 -0.557,1.077 -0.557,1.682 v 1.841 c 0,1.558 1.264,2.822 2.822,2.822 H 5.038 c 1.488,0 2.705,-1.153 2.812,-2.614 0.932,0.743 1.967,1.364 3.109,1.848 1.605,0.684 3.299,1.021 5.102,1.021 2.723,0 5.15,-0.726 7.287,-2.187 1.727,-1.176 3.092,-2.639 4.084,-4.389 0.832799,-1.472094 1.418284,-2.633352 1.221889,-3.729182 -0.173003,-0.965318 -0.694914,-1.946419 -2.326865,-2.378358 -0.58,0 -1.376024,0.17454 -1.833024,0.49254 -0.463,0.316 -0.793,0.744 -0.982,1.275 l -0.453,0.93 c -0.631,1.365 -1.566,2.443 -2.809,3.244 -1.238,0.803 -2.633,1.201 -4.188,1.201 -1.023,0 -2.004,-0.191 -2.955,-0.579 -0.941,-0.39 -1.758,-0.935 -2.439,-1.64 C 9.986,40.343 9.441,39.526 9.027,38.603 8.617,37.679 8.41,36.71 8.41,35.687 v -2.476 h 17.715 c 0,0 1.517774,-0.15466 2.183375,-0.770672 0.958496,-0.887085 0.864622,-2.15038 0.864622,-2.15038 0,0 -0.04354,-5.066834 -0.338376,-7.578154 C 28.729048,21.812563 28.324,20.044 28.324,20.044 Z M -11.767,42.91 2.991,23.036 C 2.913,23.623 2.87,24.22 2.87,24.827 v 10.86 c 0,1.799 0.35,3.498 1.059,5.104 0.328,0.752 0.719,1.458 1.156,2.119 -0.016,0 -0.031,-10e-4 -0.047,-10e-4 H -11.767 Z M 23.71,27.667 H 8.409 v -2.841 c 0,-1.015 0.189,-1.99 0.58,-2.912 0.391,-0.922 0.936,-1.74 1.645,-2.444 0.697,-0.703 1.516,-1.249 2.438,-1.641 0.922,-0.388 1.92,-0.581 2.99,-0.581 1.02,0 2.002,0.193 2.949,0.581 0.949,0.393 1.764,0.938 2.441,1.641 0.682,0.704 1.225,1.521 1.641,2.444 0.414,0.922 0.617,1.896 0.617,2.912 z\" transform=\"translate(20.35 -4.735)\" class=\"colorfff svgShape\"></path>\n  </svg>";

/***/ }),

/***/ "./src/icons/zenodo-blue.svg":
/*!***********************************!*\
  !*** ./src/icons/zenodo-blue.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t width=\"220px\" height=\"80px\" viewBox=\"0 0 220 80\" enable-background=\"new 0 0 220 80\"\r\n\t xml:space=\"preserve\">\r\n<linearGradient id=\"zenodo-gradient\" gradientUnits=\"userSpaceOnUse\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\r\n\t<stop stop-color=\"#0047A8\" offset=\"0\"/><stop stop-color=\"#2BBCFF\" offset=\"1\"/>\r\n</linearGradient>\r\n<rect x=\"0\" y=\"0\" rx=\"10px\" ry=\"10px\" width=\"220px\" height=\"80px\" fill=\"url(#zenodo-gradient)\" />\r\n<g transform=\"translate(36.5, 10)\">\r\n\t\t\t<path fill=\"#FFFFFF\" d=\"M145.301,18.875c-0.705-1.602-1.656-2.997-2.846-4.19c-1.189-1.187-2.584-2.125-4.188-2.805\r\n\t\t\t\tc-1.604-0.678-3.307-1.02-5.102-1.02c-1.848,0-3.564,0.342-5.139,1.02c-0.787,0.339-1.529,0.74-2.225,1.205\r\n\t\t\t\tc-0.701,0.469-1.357,1.003-1.967,1.6c-0.377,0.37-0.727,0.761-1.051,1.17c-0.363,0.457-0.764,1.068-0.992,1.439\r\n\t\t\t\tc-0.281,0.456-0.957,1.861-1.254,2.828c0.041-1.644,0.281-4.096,1.254-5.472V2.768c0-0.776-0.279-1.431-0.84-1.965\r\n\t\t\t\tC120.396,0.268,119.75,0,119.021,0c-0.777,0-1.43,0.268-1.969,0.803c-0.531,0.534-0.801,1.189-0.801,1.965v10.569\r\n\t\t\t\tc-1.117-0.778-2.322-1.386-3.605-1.824c-1.285-0.436-2.637-0.654-4.045-0.654c-1.799,0-3.496,0.342-5.1,1.02\r\n\t\t\t\tc-1.605,0.679-3,1.618-4.195,2.805c-1.186,1.194-2.139,2.588-2.836,4.19c-0.053,0.12-0.1,0.242-0.15,0.364\r\n\t\t\t\tc-0.047-0.122-0.094-0.244-0.146-0.364c-0.705-1.602-1.656-2.997-2.846-4.19c-1.189-1.187-2.586-2.125-4.188-2.805\r\n\t\t\t\tc-1.604-0.678-3.307-1.02-5.102-1.02c-1.848,0-3.564,0.342-5.139,1.02c-1.584,0.679-2.979,1.618-4.191,2.805\r\n\t\t\t\tc-1.213,1.194-2.164,2.588-2.842,4.19c-0.049,0.115-0.092,0.23-0.137,0.344c-0.047-0.114-0.092-0.229-0.141-0.344\r\n\t\t\t\tc-0.701-1.602-1.65-2.997-2.84-4.19c-1.191-1.187-2.588-2.125-4.193-2.805c-1.604-0.678-3.301-1.02-5.104-1.02\r\n\t\t\t\tc-1.842,0-3.557,0.342-5.137,1.02c-1.578,0.679-2.977,1.618-4.186,2.805c-1.221,1.194-2.166,2.588-2.848,4.19\r\n\t\t\t\tc-0.043,0.106-0.082,0.214-0.125,0.32c-0.043-0.106-0.084-0.214-0.131-0.32c-0.707-1.602-1.656-2.997-2.848-4.19\r\n\t\t\t\tc-1.188-1.187-2.582-2.125-4.184-2.805c-1.605-0.678-3.309-1.02-5.104-1.02c-1.85,0-3.564,0.342-5.137,1.02\r\n\t\t\t\tc-1.467,0.628-2.764,1.488-3.91,2.552V13.99c0-1.557-1.262-2.822-2.82-2.822H3.246c-1.557,0-2.82,1.265-2.82,2.822\r\n\t\t\t\tc0,1.559,1.264,2.82,2.82,2.82h15.541L0.557,41.356C0.195,41.843,0,42.433,0,43.038v1.841c0,1.558,1.264,2.822,2.822,2.822\r\n\t\t\t\th21.047c1.488,0,2.705-1.153,2.812-2.614c0.932,0.743,1.967,1.364,3.109,1.848c1.605,0.684,3.299,1.021,5.102,1.021\r\n\t\t\t\tc2.723,0,5.15-0.726,7.287-2.187c1.727-1.176,3.092-2.639,4.084-4.389v3.805c0,0.778,0.264,1.436,0.805,1.968\r\n\t\t\t\tc0.531,0.537,1.189,0.803,1.967,0.803c0.73,0,1.369-0.266,1.93-0.803c0.561-0.532,0.838-1.189,0.838-1.968v-9.879h-0.01\r\n\t\t\t\tc0-0.002,0.01-0.013,0.01-0.013s-6.137,0-6.912,0c-0.58,0-1.109,0.154-1.566,0.472c-0.463,0.316-0.793,0.744-0.982,1.275\r\n\t\t\t\tl-0.453,0.93c-0.631,1.365-1.566,2.443-2.809,3.244c-1.238,0.803-2.633,1.201-4.188,1.201c-1.023,0-2.004-0.191-2.955-0.579\r\n\t\t\t\tc-0.941-0.39-1.758-0.935-2.439-1.64c-0.682-0.703-1.227-1.52-1.641-2.443c-0.41-0.924-0.617-1.893-0.617-2.916v-2.476h17.715\r\n\t\t\t\th1.309h5.539v-8.385c0-1.015,0.191-1.99,0.582-2.912c0.389-0.922,0.936-1.74,1.645-2.444c0.699-0.703,1.514-1.249,2.441-1.641\r\n\t\t\t\tc0.918-0.388,1.92-0.581,2.982-0.581c1.023,0,2.01,0.193,2.955,0.581c0.945,0.393,1.762,0.938,2.439,1.641\r\n\t\t\t\tc0.682,0.704,1.225,1.521,1.641,2.444c0.412,0.922,0.621,1.896,0.621,2.912v21.208c0,0.778,0.266,1.436,0.799,1.968\r\n\t\t\t\tc0.535,0.537,1.191,0.803,1.971,0.803c0.729,0,1.371-0.266,1.934-0.803c0.553-0.532,0.834-1.189,0.834-1.968v-3.803\r\n\t\t\t\tc0.588,1.01,1.283,1.932,2.1,2.749c1.189,1.189,2.586,2.124,4.191,2.804c1.602,0.684,3.303,1.021,5.102,1.021\r\n\t\t\t\tc1.795,0,3.498-0.337,5.102-1.021c1.602-0.68,3.01-1.614,4.227-2.804c1.211-1.19,2.162-2.589,2.842-4.189\r\n\t\t\t\tc0.037-0.095,0.074-0.19,0.109-0.286c0.039,0.096,0.074,0.191,0.113,0.286c0.678,1.601,1.625,2.999,2.842,4.189\r\n\t\t\t\tc1.213,1.189,2.607,2.124,4.189,2.804c1.574,0.684,3.293,1.021,5.139,1.021c1.795,0,3.5-0.337,5.105-1.021\r\n\t\t\t\tc1.6-0.68,2.994-1.614,4.184-2.804c1.191-1.19,2.141-2.589,2.848-4.189c0.051-0.12,0.098-0.239,0.146-0.36\r\n\t\t\t\tc0.049,0.121,0.094,0.24,0.146,0.36c0.703,1.601,1.652,2.999,2.842,4.189c1.189,1.189,2.586,2.124,4.191,2.804\r\n\t\t\t\tc1.604,0.684,3.303,1.021,5.102,1.021c1.795,0,3.498-0.337,5.102-1.021c1.604-0.68,3.01-1.614,4.227-2.804\r\n\t\t\t\tc1.211-1.19,2.16-2.589,2.842-4.189c0.678-1.606,1.02-3.306,1.02-5.104v-10.86C146.355,22.182,146.002,20.479,145.301,18.875z\r\n\t\t\t\t M7.064,42.06l14.758-19.874c-0.078,0.587-0.121,1.184-0.121,1.791v10.86c0,1.799,0.35,3.498,1.059,5.104\r\n\t\t\t\tc0.328,0.752,0.719,1.458,1.156,2.119c-0.016,0-0.031-0.001-0.047-0.001H7.064z M42.541,26.817H27.24v-2.841\r\n\t\t\t\tc0-1.015,0.189-1.99,0.58-2.912c0.391-0.922,0.936-1.74,1.645-2.444c0.697-0.703,1.516-1.249,2.438-1.641\r\n\t\t\t\tc0.922-0.388,1.92-0.581,2.99-0.581c1.02,0,2.002,0.193,2.949,0.581c0.949,0.393,1.764,0.938,2.441,1.641\r\n\t\t\t\tc0.682,0.704,1.225,1.521,1.641,2.444c0.414,0.922,0.617,1.896,0.617,2.912V26.817z M91.688,34.837\r\n\t\t\t\tc0,1.023-0.189,1.992-0.582,2.916c-0.389,0.924-0.936,1.74-1.637,2.443c-0.705,0.705-1.523,1.25-2.445,1.64\r\n\t\t\t\tc-0.92,0.388-1.92,0.579-2.984,0.579c-1.023,0-2.004-0.191-2.955-0.579c-0.945-0.39-1.758-0.935-2.439-1.64\r\n\t\t\t\tc-0.682-0.703-1.229-1.52-1.641-2.443s-0.617-1.893-0.617-2.916v-10.86c0-1.015,0.191-1.99,0.582-2.912\r\n\t\t\t\tc0.387-0.922,0.934-1.74,1.639-2.444c0.701-0.703,1.52-1.249,2.441-1.641c0.922-0.388,1.92-0.581,2.99-0.581\r\n\t\t\t\tc1.018,0,2.004,0.193,2.947,0.581c0.951,0.393,1.764,0.938,2.443,1.641c0.68,0.704,1.223,1.521,1.641,2.444\r\n\t\t\t\tc0.412,0.922,0.617,1.896,0.617,2.912V34.837z M116.252,34.837c0,1.023-0.203,1.992-0.617,2.916\r\n\t\t\t\tc-0.412,0.924-0.961,1.74-1.641,2.443c-0.68,0.705-1.492,1.25-2.443,1.64c-0.943,0.388-1.93,0.579-2.949,0.579\r\n\t\t\t\tc-1.07,0-2.066-0.191-2.988-0.579c-0.924-0.39-1.74-0.935-2.439-1.64c-0.707-0.703-1.252-1.52-1.643-2.443\r\n\t\t\t\ts-0.584-1.893-0.584-2.916v-10.86c0-1.015,0.211-1.99,0.619-2.912c0.416-0.922,0.961-1.74,1.641-2.444\r\n\t\t\t\tc0.682-0.703,1.496-1.249,2.439-1.641c0.951-0.388,1.934-0.581,2.955-0.581c1.068,0,2.062,0.193,2.986,0.581\r\n\t\t\t\tc0.926,0.393,1.738,0.938,2.443,1.641c0.703,0.704,1.252,1.521,1.641,2.444c0.389,0.922,0.58,1.896,0.58,2.912V34.837z\r\n\t\t\t\t M140.816,34.837c0,1.023-0.193,1.992-0.58,2.916c-0.393,0.924-0.939,1.74-1.641,2.443c-0.705,0.705-1.523,1.25-2.443,1.64\r\n\t\t\t\tc-0.922,0.388-1.92,0.579-2.986,0.579c-1.021,0-2.004-0.191-2.955-0.579c-0.943-0.39-1.758-0.935-2.438-1.64\r\n\t\t\t\tc-0.682-0.703-1.23-1.52-1.643-2.443s-0.619-1.893-0.619-2.916v-10.86c0-1.015,0.193-1.99,0.584-2.912\r\n\t\t\t\tc0.387-0.922,0.934-1.74,1.639-2.444c0.703-0.703,1.518-1.249,2.441-1.641c0.924-0.388,1.92-0.581,2.99-0.581\r\n\t\t\t\tc1.02,0,2.004,0.193,2.949,0.581c0.949,0.393,1.764,0.938,2.441,1.641c0.682,0.704,1.225,1.521,1.643,2.444\r\n\t\t\t\tc0.412,0.922,0.617,1.896,0.617,2.912V34.837z\"/>\r\n</g>\r\n</svg>\r\n";

/***/ })

}]);
//# sourceMappingURL=lib_index_js-data_image_svg_xml_3csvg_xmlns_27http_www_w3_org_2000_svg_27_viewBox_27-4_-4_8_8-23b64c.b025a5629a64247a4d4e.js.map