(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/src/pagecomponents/challenges.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChallengesSection",
    ()=>ChallengesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const ChallengesSection = ()=>{
    const challenges = [
        {
            title: "Addictions & Challenging Behavior"
        },
        {
            title: "Developmental Disabilities"
        },
        {
            title: "Mental Health Challenges"
        },
        {
            title: "Fetal Alcohol Spectrum Disorder"
        },
        {
            title: "Physical Disability"
        },
        {
            title: "Brain Injury, Genetics & Chromosomal Conditions"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "challenges-wrapper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "challenges-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "challenges-title",
                    children: "Challenges Addressed"
                }, void 0, false, {
                    fileName: "[project]/app/src/pagecomponents/challenges.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                challenges.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `challenges-card card-${index}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/app/src/pagecomponents/challenges.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/app/src/pagecomponents/challenges.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/app/src/pagecomponents/challenges.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/src/pagecomponents/challenges.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ChallengesSection;
var _c;
__turbopack_context__.k.register(_c, "ChallengesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/src/pagecomponents/departments.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Departments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const slides = [
    {
        title: "Our Departments",
        points: [
            "Community Access",
            "Group Living",
            "Supported Living",
            "Supported Independent Living"
        ],
        bg: "/assets/departments.avif"
    },
    {
        title: "Community Access",
        description: [
            "Support with daily activities at home, work, and in the community.",
            "We promote independence and community participation through engaging activities such as swimming, outings, sensory programs, library visits, sports, games, and creative arts.",
            "Our goal is to help individuals live enriched and fulfilling lives."
        ],
        bg: "/assets/community.jpg"
    },
    {
        title: "Group Living",
        description: [
            "We provide a safe, structured, and supportive shared living environment designed to promote independence and well-being.",
            "Our services include assistance with meal preparation, medical appointments, medication administration, shopping, housekeeping, and overall home maintenance."
        ],
        bg: "/assets/groupliving.webp"
    },
    {
        title: "Supported Living",
        description: [
            "Supportive households provide a safe, inclusive, and structured home environment for individuals.",
            "Qualified caregivers deliver personalized support tailored to each individual’s needs, while encouraging independence and meaningful community participation."
        ],
        bg: "/assets/community.jpg"
    },
    {
        title: "Supported Independent Living",
        description: [
            "Personalized coaching to build independence and life skills.",
            "Home-based support with access to meaningful community opportunities."
        ],
        bg: "/assets/supported-independent-living.jpg"
    }
];
function Departments() {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Departments.useEffect": ()=>{
            const interval = setInterval({
                "Departments.useEffect.interval": ()=>{
                    setCurrent({
                        "Departments.useEffect.interval": (prev)=>prev === slides.length - 1 ? 0 : prev + 1
                    }["Departments.useEffect.interval"]);
                }
            }["Departments.useEffect.interval"], 4000);
            return ({
                "Departments.useEffect": ()=>clearInterval(interval)
            })["Departments.useEffect"];
        }
    }["Departments.useEffect"], []);
    const nextSlide = ()=>{
        setCurrent((prev)=>prev === slides.length - 1 ? 0 : prev + 1);
    };
    const prevSlide = ()=>{
        setCurrent((prev)=>prev === 0 ? slides.length - 1 : prev - 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "slider",
        children: [
            slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `slide ${index === current ? "active" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: slide.bg,
                            alt: slide.title,
                            className: "slide-image"
                        }, void 0, false, {
                            fileName: "[project]/app/src/pagecomponents/departments.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overlay",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "main-title",
                                    children: slide.title
                                }, void 0, false, {
                                    fileName: "[project]/app/src/pagecomponents/departments.tsx",
                                    lineNumber: 90,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "points",
                                    children: (slide.points || slide.description).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: item
                                        }, i, false, {
                                            fileName: "[project]/app/src/pagecomponents/departments.tsx",
                                            lineNumber: 94,
                                            columnNumber: 7
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/src/pagecomponents/departments.tsx",
                                    lineNumber: 92,
                                    columnNumber: 3
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/src/pagecomponents/departments.tsx",
                            lineNumber: 89,
                            columnNumber: 1
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/app/src/pagecomponents/departments.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "prev",
                onClick: prevSlide,
                children: "❮"
            }, void 0, false, {
                fileName: "[project]/app/src/pagecomponents/departments.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "next",
                onClick: nextSlide,
                children: "❯"
            }, void 0, false, {
                fileName: "[project]/app/src/pagecomponents/departments.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/src/pagecomponents/departments.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(Departments, "Ce5S7Zpl2S4YgGoPn+G4m52qKq8=");
_c = Departments;
var _c;
__turbopack_context__.k.register(_c, "Departments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_src_pagecomponents_cb652bf2._.js.map