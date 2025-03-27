module.exports = {

"[project]/app/(root)/_components/helpers/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "StarRating": (()=>StarRating),
    "addFieldActive": (()=>addFieldActive),
    "formatPhoneNumber": (()=>formatPhoneNumber),
    "formatPrice": (()=>formatPrice),
    "generateSlug": (()=>generateSlug),
    "styles": (()=>styles),
    "toggleFunction": (()=>toggleFunction),
    "topFunction": (()=>topFunction),
    "truncateTitle": (()=>truncateTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const styles = {
    active: "active:opacity-[0.65] transition-all duration-400 ease-linear cursor-pointer active:scale-[0.95]",
    hover: "hover:opacity-[0.65] transition-all duration-200 ease-linear hover:text-MainYellow cursor-pointer"
};
const topFunction = ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
function translateToEnglish(text) {
    const cyrillicToLatinMap = {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "yo",
        ж: "zh",
        з: "z",
        и: "i",
        й: "y",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "ts",
        ч: "ch",
        ш: "sh",
        щ: "shch",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "yu",
        я: "ya",
        А: "A",
        Б: "B",
        В: "V",
        Г: "G",
        Д: "D",
        Е: "E",
        Ё: "Yo",
        Ж: "Zh",
        З: "Z",
        И: "I",
        Й: "Y",
        К: "K",
        Л: "L",
        М: "M",
        Н: "N",
        О: "O",
        П: "P",
        Р: "R",
        С: "S",
        Т: "T",
        У: "U",
        Ф: "F",
        Х: "Kh",
        Ц: "Ts",
        Ч: "Ch",
        Ш: "Sh",
        Щ: "Shch",
        Ъ: "",
        Ы: "Y",
        Ь: "",
        Э: "E",
        Ю: "Yu",
        Я: "Ya"
    };
    return text.split("").map((char)=>cyrillicToLatinMap[char] || char).join("");
}
function generateSlug(text) {
    const translatedText = translateToEnglish(text);
    return translatedText.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/[\s-]+/g, "-").replace(/^-+|-+$/g, "");
}
const toggleFunction = (setState, id)=>{
    setState((prev)=>prev.map((item)=>item.id === id ? {
                ...item,
                isActive: !item.isActive
            } : {
                ...item,
                isActive: false
            }));
};
const formatPhoneNumber = (phone)=>{
    if (phone.startsWith("7")) {
        return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+7 ($2) $3-$4-$5");
    }
    if (phone.startsWith("1")) {
        return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "+1 ($2) $3-$4");
    }
    return phone;
};
function truncateTitle(title) {
    const middleIndex = Math.floor(title.length / 2);
    const start = title.slice(0, middleIndex - 2);
    const end = title.slice(middleIndex + 3);
    return `${start}...${end}`;
}
const formatPrice = (price)=>{
    return new Intl.NumberFormat("ru-RU", {
        currency: "RUB"
    }).format(price).replace(/\s/g, " ");
};
const addFieldActive = (array)=>{
    return array.map((item)=>{
        return {
            ...item,
            isActive: false
        };
    });
};
const StarRating = ({ rating })=>{
    const totalStars = 5;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-1",
        children: Array.from({
            length: totalStars
        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: i < rating ? "/images/fill.svg" : "/images/empty.svg",
                alt: i < rating ? "Filled Star" : "Empty Star",
                style: {
                    width: "20px"
                }
            }, i, false, {
                fileName: "[project]/app/(root)/_components/helpers/index.js",
                lineNumber: 163,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/(root)/_components/helpers/index.js",
        lineNumber: 161,
        columnNumber: 5
    }, this);
};
}}),
"[project]/app/(root)/_components/image.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const CustomImage = ({ image, title = "image", fill = false, priority = false, className1 = "", width, height })=>{
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        src: image,
        alt: title,
        fill: fill,
        className: `object-contain ease-in-out group-hover:opacity-75 ${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"} ${className1}`,
        onLoad: ()=>setIsLoading(false),
        priority: priority,
        loading: priority ? "eager" : "lazy",
        blurDataURL: "data:image/svg+xml;base64,..." // Placeholder qo'shish (ixtiyoriy)
        ,
        placeholder: "blur"
    }, void 0, false, {
        fileName: "[project]/app/(root)/_components/image.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CustomImage;
}}),
"[project]/lib/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/components/ui/popover.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Popover": (()=>Popover),
    "PopoverAnchor": (()=>PopoverAnchor),
    "PopoverContent": (()=>PopoverContent),
    "PopoverTrigger": (()=>PopoverTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Popover = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Root;
const PopoverTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Trigger;
const PopoverAnchor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Anchor;
const PopoverContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Content, {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 w-72 rounded-md bg-[#F9EFF0] shadow-sm p-4 text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/popover.jsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/popover.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this));
PopoverContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Content.displayName;
;
}}),
"[project]/hooks/use-langauge.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useLanguageStore": (()=>useLanguageStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useLanguageStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        locale: 'ru',
        setLocale: (locale)=>set({
                locale
            })
    }));
}}),
"[project]/locales/ru.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("{\"header\":{\"top\":{\"t1\":\"Ваш город\",\"cities\":{\"c1\":\"Москва\",\"c2\":\"Санкт-Петербург\"},\"t2\":\"Поиск\"},\"bottom\":{\"t1\":\"Каталог\",\"t2\":\"О нас\",\"t3\":\"Оплата и доставка\",\"t4\":\"Брокер\",\"t5\":\"Оптовым клиентам\",\"t6\":\"Розничным клиентам\",\"t7\":\"Плантация\",\"t8\":\"Пример расчета\",\"t9\":\"График праздников\"}},\"hero\":{\"p1\":\"Регистрация\",\"p2\":\"Войти в кабинет партнера\",\"p3\":\"При регистрации на сайте\",\"p4\":\"Cashback 10%\",\"p5\":\"При регистрации на сайте\",\"p6\":\"с каждой покупкой\",\"p7\":\"Перейти в каталог\"},\"info\":{\"p1\":\"Подписка на Цветы\",\"p2\":\"Подписка на цветы – это услуга для тех, кто доверят нашему вкусу и хочет каждое утро любоваться красивым сезонным букетом\",\"p3\":\"от 1500 ₽\",\"p4\":\"Войти и оформить подписку\",\"p5\":\"Оформить подписку\"},\"vitrina\":{\"p1\":\"Витрина Онлайн\",\"btn\":\"Смотреть всё\"},\"new\":{\"p1\":\"Новинки\"},\"info2\":{\"p1\":\"Какие бывают стадии зрелости бутона розы в Эквадоре\"},\"stock\":{\"p1\":\"Акции\"},\"popular\":{\"p1\":\"Популярное\"},\"footer\":{\"p1\":\"FLOWERS&OPT © 2024\",\"p2\":\"Все права защищены.\",\"p3\":\"Каталог\",\"p4\":\"Букеты\",\"p5\":\"Подарки\",\"p6\":\"Розы\",\"p7\":\"Пионы\",\"p8\":\"Тюльпаны\",\"p9\":\"Плантация\",\"p10\":\"Пример расчета\",\"p11\":\"График праздников\",\"p12\":\"Оплата и доставка\",\"p13\":\"Оптовым клиентам\",\"p14\":\"Розничным клиентам\",\"p15\":\"Брокер\",\"p16\":\"Личный кабинет\",\"p17\":\"Войти\",\"p18\":\"Зарегистрироваться\",\"p19\":\"Избранные товары\"},\"ball\":{\"p1\":\"Воздушные шары\",\"p2\":\"Выбрать\"},\"catalog\":{\"p1\":\"Главная\",\"p2\":\"Каталог\",\"p3\":\"Каталог цветов\"},\"plantation\":{\"p1\":\"Главная\",\"p2\":\"Наша плантация\",\"p3\":\"Наша плантация находится в 100 км на юг от столицы Эквадора Кито, недалеко от городка Латакунга. На благодатных склонах вулкана Котопакси, до которого всего 30 км напрямую, сама природа позаботиласть об идеальных условиях для выращивания роз.\",\"p4\":\"Кол-во сортов: .............................................................................................. 14 Площадь плантации: ........................................................................... 5 га Высота над уровнем моря:........................................................ 2800 м Кол-во сотрудников:......................... 25 рабочих + 2 менеджера\",\"p5\":\"Войти в кабинет партнера\",\"p6\":\"Какие бывают стадии зрелости бутона розы в Эквадоре\",\"p7\":\"Карта\"}}"));}}),
"[project]/utils/translate.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "t": (()=>t)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$langauge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/use-langauge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$ru$2e$json__$28$json$29$__ = __turbopack_import__("[project]/locales/ru.json (json)");
;
;
const messages = {
    ru: __TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$ru$2e$json__$28$json$29$__["default"]
};
function t(key) {
    const { locale } = __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$langauge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguageStore"].getState();
    const keys = key.split("."); // Masalan: "header.a1"
    return keys.reduce((obj, currentKey)=>obj?.[currentKey], messages[locale]) || key;
}
}}),
"[project]/hooks/scroll.store.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useScrollStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        isScrollingUp: true,
        setScrollDirection: (direction)=>set({
                isScrollingUp: direction
            })
    }));
const __TURBOPACK__default__export__ = useScrollStore;
}}),
"[project]/hooks/use-scroll.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$scroll$2e$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/scroll.store.js [app-ssr] (ecmascript)");
;
;
const SCROLL_THRESHOLD = 40; // 30px yoki 40px qilib sozlash mumkin
const useScrollDirection = ()=>{
    const { setScrollDirection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$scroll$2e$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const [lastScrollTop, setLastScrollTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollDiff = Math.abs(scrollTop - lastScrollTop);
            if (scrollDiff < SCROLL_THRESHOLD) return; // 40px dan kam harakat bo‘lsa, hech narsa qilmaymiz
            if (scrollTop > lastScrollTop) {
                setScrollDirection(false); // Pastga siljigan bo‘lsa, yashiramiz
            } else {
                setScrollDirection(true); // Tepaga siljigan bo‘lsa, ko‘rsatamiz
            }
            setLastScrollTop(scrollTop);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        lastScrollTop,
        setScrollDirection
    ]);
};
const __TURBOPACK__default__export__ = useScrollDirection;
}}),
"[project]/app/(root)/_components/header.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(root)/_components/helpers/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(root)/_components/image.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/popover.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/translate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$scroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/use-scroll.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$scroll$2e$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/scroll.store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const Header = ()=>{
    const isScrollingUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$scroll$2e$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.isScrollingUp);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$scroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.top.cities.c1"));
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isPathname = (path)=>pathname === path;
    return isScrollingUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-aos": "fade-down",
        className: "h-[60px] desktop:h-[155px] w-full fixed inset-0 z-[99] bg-mainWhite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "xl:w-[1360px] w-[94%] py-[21px] mx-auto h-full hidden desktop:flex flex-col gap-[24px] mid:gap-[36px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex polo:justify-between gap-[30px] mid:gap-[50px] items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-[30px] mid:gap-[50px] items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: `w-[207px] h-[40px] ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} relative`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            image: "/images/logo.svg",
                                            title: "logo",
                                            fill: true,
                                            className1: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[16px] leading-[24px] font-semibold font-montserrat text-mainBlack",
                                                children: "RU"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-[16px] h-[16px] flex items-center justify-center bg-mainBlack rounded-full",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: "text-secondWhite"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                                lineNumber: 55,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 54,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                                        lineNumber: 53,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                        className: "max-w-[60px] rounded-t-none rounded-b-[20px] z-[99] p-2 flex text-mainBlack font-montserrat text-[15px] justify-center",
                                                        children: "RU"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                                        lineNumber: 58,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[46px] bg-secondWhite px-[20px] xl:px-[30px] flex items-center md:rounded-[20px] rounded-[10px] gap-[30px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-montserrat text-[15px] font-normal text-[#453C3C80]/40",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.top.t1")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[16px] leading-[24px] font-semibold font-montserrat text-mainBlack",
                                                        children: city
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-[16px] h-[16px] flex items-center justify-center bg-mainBlack rounded-full",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                        className: "text-secondWhite"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                                                        lineNumber: 76,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(root)/_components/header.jsx",
                                                                    lineNumber: 75,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                                lineNumber: 74,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                                className: "max-w-[200px] bg-[#F9EFF0] rounded-t-none z-[99] rounded-b-[20px] mt-[10px] p-3 gap-2 flex text-mainBlack font-montserrat text-[15px] flex-col justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "cursor-pointer",
                                                                    onClick: ()=>{
                                                                        setCity((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.top.cities.c1"));
                                                                    },
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.top.cities.c1")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(root)/_components/header.jsx",
                                                                    lineNumber: 80,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                                lineNumber: 79,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                                        lineNumber: 73,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/_components/header.jsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-[30px] mid:gap-[50px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[280px] xl:w-[310px] h-[46px] relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.top.t2"),
                                                className: "w-full h-full md:rounded-[20px] rounded-[10px] bg-secondWhite px-[20px] xl:px-[30px] placeholder:text-[14px] placeholder:leading-[17px] text-mainBlack placeholder:text-[#453C3C80]/40 font-montserrat font-medium outline-mainBlack pr-[80px]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} absolute right-[30px] top-[50%] translate-y-[-50%] cursor-pointer`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: 22,
                                                    height: 22,
                                                    viewBox: "0 0 22 22",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M17.1062 18.5878C15.3003 20.0657 12.9918 20.9523 10.4762 20.9523C4.69035 20.9523 0 16.262 0 10.4762C0 4.69033 4.69035 0 10.4762 0C16.262 0 20.9524 4.69033 20.9524 10.4762C20.9524 12.9918 20.0657 15.3003 18.5878 17.1063L21.6932 20.2116C22.1023 20.6207 22.1023 21.284 21.6932 21.6932C21.284 22.1023 20.6207 22.1023 20.2116 21.6932L17.1062 18.5878ZM18.8571 10.4762C18.8571 15.1048 15.1049 18.8571 10.4762 18.8571C5.84751 18.8571 2.09524 15.1048 2.09524 10.4762C2.09524 5.8475 5.84751 2.09523 10.4762 2.09523C15.1049 2.09523 18.8571 5.8475 18.8571 10.4762Z",
                                                        fill: "#453C3C"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/header.jsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center polo:flex-row flex-col gap-[2px] polo:gap-[20px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "tel:89049999999",
                                                className: "font-semibold text-[14px] polo:text-[16px] xl:text-[18px] xl:leading-[24px] text-mainBlack font-montserrat",
                                                children: "8(904) 999 99 99"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "tel:88009999999",
                                                className: "font-semibold text-[14px] polo:text-[16px] xl:text-[18px] xl:leading-[24px] text-mainBlack font-montserrat",
                                                children: "8(800) 999 99 99"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/_components/header.jsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(root)/_components/header.jsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex items-center justify-between gap-[30px] mid:gap-[50px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-[30px] mid:gap-[50px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/catalog",
                                        className: `flex items-center gap-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} ${isPathname("/catalog") && "border-b border-b-mainBlack pb-1"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[16px] leading-[22px] text-mainBlack font-normal font-montserrat",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.bottom.t1")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: 18,
                                                    height: 17,
                                                    viewBox: "0 0 18 17",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M7.22217 4.20665V2.27778C7.22217 1.80628 7.40949 1.35412 7.74289 1.02072C8.07629 0.687327 8.52845 0.5 8.99995 0.5C9.47144 0.5 9.9236 0.687327 10.257 1.02072C10.5904 1.35412 10.7777 1.80628 10.7777 2.27778V4.20665",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M7.22217 4.20665V2.27778C7.22217 1.80628 7.40949 1.35412 7.74289 1.02072C8.07629 0.687327 8.52845 0.5 8.99995 0.5C9.47144 0.5 9.9236 0.687327 10.257 1.02072C10.5904 1.35412 10.7777 1.80628 10.7777 2.27778V4.20665",
                                                            stroke: "#453C3C",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 168,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M10.7777 12.7935V14.7223C10.7777 15.1938 10.5904 15.646 10.257 15.9794C9.9236 16.3128 9.47144 16.5001 8.99995 16.5001C8.52845 16.5001 8.07629 16.3128 7.74289 15.9794C7.40949 15.646 7.22217 15.1938 7.22217 14.7223V12.7935",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 174,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M10.7777 12.7935V14.7223C10.7777 15.1938 10.5904 15.646 10.257 15.9794C9.9236 16.3128 9.47144 16.5001 8.99995 16.5001C8.52845 16.5001 8.07629 16.3128 7.74289 15.9794C7.40949 15.646 7.22217 15.1938 7.22217 14.7223V12.7935",
                                                            stroke: "#453C3C",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 178,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M13.2935 6.72217H15.2224C15.6939 6.72217 16.146 6.90949 16.4794 7.24289C16.8128 7.57629 17.0002 8.02845 17.0002 8.49995C17.0002 8.97144 16.8128 9.4236 16.4794 9.757C16.146 10.0904 15.6939 10.2777 15.2224 10.2777H13.2935",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 184,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M13.2935 6.72217H15.2224C15.6939 6.72217 16.146 6.90949 16.4794 7.24289C16.8128 7.57629 17.0002 8.02845 17.0002 8.49995C17.0002 8.97144 16.8128 9.4236 16.4794 9.757C16.146 10.0904 15.6939 10.2777 15.2224 10.2777H13.2935",
                                                            stroke: "#453C3C",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 188,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M4.70671 10.2777H2.77778C2.30628 10.2777 1.85412 10.0904 1.52072 9.757C1.18733 9.4236 1 8.97144 1 8.49995C1 8.02845 1.18733 7.57629 1.52072 7.24289C1.85412 6.90949 2.30628 6.72217 2.77778 6.72217H4.70671",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 194,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M4.70671 10.2777H2.77778C2.30628 10.2777 1.85412 10.0904 1.52072 9.757C1.18733 9.4236 1 8.97144 1 8.49995C1 8.02845 1.18733 7.57629 1.52072 7.24289C1.85412 6.90949 2.30628 6.72217 2.77778 6.72217H4.70671",
                                                            stroke: "#453C3C",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 198,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M9.28418 5.85558C9.3658 5.66953 9.48193 5.50063 9.62641 5.3578L12.142 2.84223C12.3071 2.67694 12.5031 2.54579 12.719 2.45633C12.9348 2.36686 13.1661 2.3208 13.3997 2.3208C13.6334 2.3208 13.8647 2.36686 14.0805 2.45633C14.2963 2.54579 14.4924 2.67694 14.6576 2.84223C14.8228 3.00734 14.9539 3.2034 15.0434 3.41922C15.1329 3.63504 15.1789 3.86636 15.1789 4.09999C15.1789 4.33362 15.1329 4.56494 15.0434 4.78076C14.9539 4.99658 14.8228 5.19269 14.6576 5.3578L12.142 7.87332C11.9992 8.0178 11.8303 8.13393 11.6442 8.21555",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 204,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M9.28418 5.85558C9.3658 5.66953 9.48193 5.50063 9.62641 5.3578L12.142 2.84223C12.3071 2.67694 12.5031 2.54579 12.719 2.45633C12.9348 2.36686 13.1661 2.3208 13.3997 2.3208C13.6334 2.3208 13.8647 2.36686 14.0805 2.45633C14.2963 2.54579 14.4924 2.67694 14.6576 2.84223C14.8228 3.00734 14.9539 3.2034 15.0434 3.41922C15.1329 3.63504 15.1789 3.86636 15.1789 4.09999C15.1789 4.33362 15.1329 4.56494 15.0434 4.78076C14.9539 4.99658 14.8228 5.19269 14.6576 5.3578L12.142 7.87332C11.9992 8.0178 11.8303 8.13393 11.6442 8.21555",
                                                            stroke: "#453C3C",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 208,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M8.71571 11.1667C8.63409 11.3527 8.51796 11.5216 8.37348 11.6644L5.85786 14.18C5.52427 14.5136 5.07191 14.701 4.60015 14.701C4.12839 14.701 3.67592 14.5136 3.34234 14.18C3.00876 13.8464 2.82129 13.394 2.82129 12.9222C2.82129 12.4504 3.00876 11.998 3.34234 11.6644L5.85786 9.14887C6.00069 9.00439 6.16964 8.88826 6.35569 8.80664",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 214,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M8.71571 11.1667C8.63409 11.3527 8.51796 11.5216 8.37348 11.6644L5.85786 14.18C5.52427 14.5136 5.07191 14.701 4.60015 14.701C4.12839 14.701 3.67592 14.5136 3.34234 14.18C3.00876 13.8464 2.82129 13.394 2.82129 12.9222C2.82129 12.4504 3.00876 11.998 3.34234 11.6644L5.85786 9.14887C6.00069 9.00439 6.16964 8.88826 6.35569 8.80664",
                                                            stroke: "#453C3C",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 218,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M11.6667 8.78467C11.8527 8.86629 12.0217 8.98242 12.1645 9.1269L14.68 11.6424C14.8453 11.8075 14.9764 12.0036 15.0659 12.2195C15.1553 12.4353 15.2014 12.6666 15.2014 12.9002C15.2014 13.1339 15.1553 13.3652 15.0659 13.581C14.9764 13.7968 14.8453 13.9929 14.68 14.158C14.5149 14.3233 14.3188 14.4544 14.103 14.5439C13.8872 14.6334 13.6558 14.6794 13.4222 14.6794C13.1886 14.6794 12.9572 14.6334 12.7414 14.5439C12.5256 14.4544 12.3296 14.3233 12.1645 14.158L9.64887 11.6424C9.50439 11.4996 9.38826 11.3307 9.30664 11.1446",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 224,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M11.6667 8.78467C11.8527 8.86629 12.0217 8.98242 12.1645 9.1269L14.68 11.6424C14.8453 11.8075 14.9764 12.0036 15.0659 12.2195C15.1553 12.4353 15.2014 12.6666 15.2014 12.9002C15.2014 13.1339 15.1553 13.3652 15.0659 13.581C14.9764 13.7968 14.8453 13.9929 14.68 14.158C14.5149 14.3233 14.3188 14.4544 14.103 14.5439C13.8872 14.6334 13.6558 14.6794 13.4222 14.6794C13.1886 14.6794 12.9572 14.6334 12.7414 14.5439C12.5256 14.4544 12.3296 14.3233 12.1645 14.158L9.64887 11.6424C9.50439 11.4996 9.38826 11.3307 9.30664 11.1446",
                                                            stroke: "#453C3C",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 228,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M6.35569 8.2156C6.16964 8.13398 6.00069 8.01785 5.85786 7.87337L3.34234 5.35786C3.00876 5.02427 2.82129 4.5718 2.82129 4.10004C2.82129 3.62829 3.00876 3.17587 3.34234 2.84229C3.67592 2.5087 4.12839 2.32129 4.60015 2.32129C5.07191 2.32129 5.52427 2.5087 5.85786 2.84229L8.37348 5.35786C8.51796 5.50069 8.63409 5.66959 8.71571 5.85563",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 234,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M6.35569 8.2156C6.16964 8.13398 6.00069 8.01785 5.85786 7.87337L3.34234 5.35786C3.00876 5.02427 2.82129 4.5718 2.82129 4.10004C2.82129 3.62829 3.00876 3.17587 3.34234 2.84229C3.67592 2.5087 4.12839 2.32129 4.60015 2.32129C5.07191 2.32129 5.52427 2.5087 5.85786 2.84229L8.37348 5.35786C8.51796 5.50069 8.63409 5.66959 8.71571 5.85563",
                                                            stroke: "#453C3C",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 238,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M9.00065 11.1668C10.4734 11.1668 11.6673 9.97292 11.6673 8.50016C11.6673 7.0274 10.4734 5.8335 9.00065 5.8335C7.52789 5.8335 6.33398 7.0274 6.33398 8.50016C6.33398 9.97292 7.52789 11.1668 9.00065 11.1668Z",
                                                            stroke: "#453C3C",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 244,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(root)/_components/header.jsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[16px] leading-[22px] text-mainBlack font-normal font-montserrat",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.bottom.t2")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "text-mainBlack w-6 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                                            lineNumber: 260,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                                        lineNumber: 259,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                        className: "max-w-[200px] bg-[#F9EFF0] rounded-t-none rounded-b-[20px] mt-[10px] p-3 gap-2 flex text-mainBlack font-montserrat text-[15px] flex-col justify-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/plantation",
                                                                className: `cursor-pointer ${isPathname("/plantation") && "underline"}`,
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.bottom.t7")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                                lineNumber: 263,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/example-calculation",
                                                                className: `cursor-pointer ${isPathname("/example-calculation") && "underline"}`,
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.bottom.t8")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                                lineNumber: 271,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/holiday-schedule",
                                                                className: `cursor-pointer ${isPathname("/holiday-schedule") && "underline"}`,
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.bottom.t9")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                                lineNumber: 279,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                                        lineNumber: 262,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/payment-and-delivery",
                                        className: `flex items-center gap-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} ${isPathname("/payment-and-delivery") && "border-b border-b-mainBlack pb-1"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[16px] leading-[22px] text-mainBlack font-normal font-montserrat",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.bottom.t3")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/_components/header.jsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-[30px] mid:gap-[50px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/broker",
                                        className: `flex items-center gap-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} ${isPathname("/broker") && "border-b border-b-mainBlack pb-1"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[16px] leading-[22px] text-mainBlack font-normal font-montserrat",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.bottom.t4")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                            lineNumber: 311,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/wholesale-clients",
                                        className: `flex items-center gap-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} ${isPathname("/wholesale-clients") && "border-b border-b-mainBlack pb-1"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[16px] leading-[22px] text-mainBlack font-normal font-montserrat",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.bottom.t5")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/retail-clients",
                                        className: `flex items-center gap-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} ${isPathname("/retail-clients") && "border-b border-b-mainBlack pb-1"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[16px] leading-[22px] text-mainBlack font-normal font-montserrat",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.bottom.t6")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/_components/header.jsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-[15px] mid:gap-[30px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-[22px] h-[20px] polo:w-[34px] polo:h-[30px]",
                                            viewBox: "0 0 34 30",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M4.219 15.077L17 28L29.781 15.077C31.2018 13.6404 32 11.692 32 9.66032C32 5.42964 28.608 2 24.4239 2C22.4145 2 20.4875 2.80707 19.0667 4.24366L17 6.33333L14.9333 4.24366C13.5125 2.80707 11.5855 2 9.57614 2C5.39195 2 2 5.42964 2 9.66032C2 11.692 2.7982 13.6404 4.219 15.077Z",
                                                stroke: "#453C3C",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                lineNumber: 347,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-[20px] h-[19px] polo:w-[28px] polo:h-[26px]",
                                                viewBox: "0 0 26 28",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M6.72692 6.36364C6.72692 2.8491 9.57601 0 13.0906 0C16.6051 0 19.4542 2.8491 19.4542 6.36364H21.9996C24.1084 6.36364 25.8178 8.0731 25.8178 10.1818V21.6364C25.8178 25.1509 22.9687 28 19.4542 28H6.72692C3.21238 28 0.363281 25.1509 0.363281 21.6364V10.1818C0.363281 8.0731 2.07274 6.36364 4.18146 6.36364H6.72692ZM9.27237 6.36364C9.27237 4.25491 10.9818 2.54545 13.0906 2.54545C15.1993 2.54545 16.9087 4.25491 16.9087 6.36364H9.27237ZM6.72692 8.90909V12.7273C6.72692 13.4302 7.29674 14 7.99964 14C8.70255 14 9.27237 13.4302 9.27237 12.7273V8.90909H16.9087V12.7273C16.9087 13.4302 17.4786 14 18.1815 14C18.8844 14 19.4542 13.4302 19.4542 12.7273V8.90909H21.9996C22.7026 8.90909 23.2724 9.47891 23.2724 10.1818V21.6364C23.2724 23.7451 21.5629 25.4545 19.4542 25.4545H6.72692C4.61819 25.4545 2.90874 23.7451 2.90874 21.6364V10.1818C2.90874 9.47891 3.47856 8.90909 4.18146 8.90909H6.72692Z",
                                                    fill: "#453C3C"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/header.jsx",
                                                    lineNumber: 364,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                lineNumber: 358,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-[-4px] polo:top-0 left-[10px] polo:left-[14px] w-[14px] h-[14px] rounded-full bg-[#7A9A40]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/header.jsx",
                                                lineNumber: 371,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                        lineNumber: 357,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-[20px] h-[20px] polo:w-[28px] polo:h-[28px]",
                                            viewBox: "0 0 28 28",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M22 8C22 12.4183 18.4182 16 14 16C9.58168 16 5.99996 12.4183 5.99996 8C5.99996 3.58172 9.58168 0 14 0C18.4182 0 22 3.58172 22 8ZM19.3333 8C19.3333 10.9455 16.9455 13.3333 14 13.3333C11.0544 13.3333 8.66663 10.9455 8.66663 8C8.66663 5.05448 11.0544 2.66667 14 2.66667C16.9455 2.66667 19.3333 5.05448 19.3333 8Z",
                                                    fill: "#453C3C"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/header.jsx",
                                                    lineNumber: 381,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M14.0001 17.3333C10.0866 17.3333 7.26489 18.1451 5.24082 19.3623C3.20867 20.5844 2.06725 22.1633 1.43694 23.5441C0.905623 24.7081 1.14744 25.8943 1.85335 26.7394C2.52624 27.545 3.57249 28 4.66669 28H23.3333C24.4275 28 25.4737 27.545 26.1466 26.7395C26.8525 25.8944 27.0944 24.7082 26.5631 23.5442C25.9328 22.1633 24.7914 20.5844 22.7593 19.3623C20.7352 18.1451 17.9136 17.3333 14.0001 17.3333ZM3.86283 24.6515C4.30037 23.6929 5.10409 22.5562 6.61509 21.6476C8.13417 20.7341 10.4537 20 14.0001 20C17.5465 20 19.866 20.7341 21.385 21.6476C22.896 22.5563 23.6997 23.6929 24.1372 24.6515C24.1888 24.7647 24.1866 24.8327 24.1814 24.8675C24.1755 24.9071 24.156 24.9629 24.1 25.0299C23.9798 25.1738 23.7119 25.3333 23.3333 25.3333H4.66669C4.28812 25.3333 4.02017 25.1738 3.89996 25.0299C3.84399 24.9629 3.82452 24.9071 3.8186 24.8675C3.81341 24.8327 3.81116 24.7647 3.86283 24.6515Z",
                                                    fill: "#453C3C"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/header.jsx",
                                                    lineNumber: 387,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/_components/header.jsx",
                                            lineNumber: 375,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/_components/header.jsx",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/_components/header.jsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(root)/_components/header.jsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/_components/header.jsx",
                lineNumber: 30,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-[94%] mx-auto items-center justify-between desktop:hidden h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "w-[163px] h-[30px] relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: "/images/ml.svg",
                            fill: true,
                            title: "logo",
                            className1: "w-full h-full"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/header.jsx",
                            lineNumber: 401,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/header.jsx",
                        lineNumber: 400,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-[28px] h-[20px] relative ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: "/images/line.svg",
                            fill: true,
                            title: "logo",
                            className1: "w-full h-full"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/header.jsx",
                            lineNumber: 410,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/header.jsx",
                        lineNumber: 409,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/_components/header.jsx",
                lineNumber: 399,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/_components/header.jsx",
        lineNumber: 26,
        columnNumber: 7
    }, this);
};
const __TURBOPACK__default__export__ = Header;
}}),
"[project]/app/(root)/_components/footer.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(root)/_components/image.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/popover.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/translate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(root)/_components/helpers/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
;
;
;
;
;
const Footer = ()=>{
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.top.cities.c1"));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[370px] bg-[#F5E7E7] border-t border-t-[#453C3C33]/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "polo:w-[1280px] justify-between mx-auto w-[94%] h-full flex flex-col py-[50px] gap-[30px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden minitablet:flex  justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-[20px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[46px] w-[207px] relative flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: `w-[207px] h-[40px] ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} relative`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            image: "/images/logo.svg",
                                            title: "logo",
                                            fill: true,
                                            className1: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/_components/footer.jsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-[10px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "tel:89049999999",
                                            className: "font-semibold text-[18px] leading-[24px] text-mainBlack font-montserrat",
                                            children: "8(904) 999 99 99"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "tel:88009999999",
                                            className: "font-semibold text-[18px] leading-[24px] text-mainBlack font-montserrat",
                                            children: "8(800) 999 99 99"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-[15px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://t.me/+88009999999",
                                            target: "_blank",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} w-[40px] h-[40px] rounded-full hover:bg-white flex items-center justify-center transition-all duration-500 ease-in-out`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: 30,
                                                height: 30,
                                                viewBox: "0 0 30 30",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M15.1991 20.1137C15.2302 20.1456 15.2613 20.1455 15.2613 20.1773C16.7864 21.3209 18.3115 22.4646 19.8055 23.64C20.0233 23.7988 20.2412 23.8941 20.4902 23.9576C20.9882 24.0847 21.3306 23.9259 21.5484 23.4812C21.6418 23.2906 21.7041 23.0681 21.7352 22.8775C22.0153 21.6068 22.2644 20.3044 22.5445 19.0336C22.9802 16.9051 23.416 14.8085 23.8828 12.68C24.2252 10.9963 24.5987 9.31265 24.9411 7.59718C25.0033 7.31126 25.0345 7.02536 24.9411 6.70768C24.8166 6.23116 24.4119 5.94525 23.9762 6.00879C23.8517 6.04055 23.6961 6.07232 23.5716 6.10409C20.7081 7.24773 17.8136 8.39138 14.9501 9.50325C11.9932 10.6787 9.03641 11.8223 6.04846 12.9977C5.58159 13.1883 5.0836 13.3789 4.61673 13.6013C4.42999 13.6966 4.24324 13.8237 4.11874 13.9825C3.90087 14.3002 3.99424 14.5861 4.30549 14.745C4.46111 14.8085 4.61673 14.872 4.77236 14.9038C6.29745 15.3803 7.85369 15.8569 9.37878 16.3334C9.47215 16.3651 9.53441 16.3651 9.62778 16.3016C13.0515 14.1731 16.4129 12.0129 19.7744 9.8527C20.0857 9.66209 20.3658 9.47149 20.6769 9.28088C20.8326 9.18558 20.9882 9.12204 21.175 9.15381C21.3306 9.18558 21.3617 9.28088 21.2683 9.40795C21.2373 9.47149 21.175 9.50325 21.1127 9.56679C19.2453 11.314 17.3467 13.0613 15.4792 14.8085C14.4209 15.7933 13.3627 16.7781 12.2734 17.7947C12.2422 17.8264 12.2111 17.8582 12.2111 17.89C12.1489 18.6206 12.0866 19.3513 12.0555 20.0819C11.9932 20.8762 11.931 21.6385 11.8687 22.4328C11.8687 22.5599 11.8376 22.7187 11.8376 22.8457C11.8687 22.8457 11.8999 22.8457 11.931 22.8457C11.9621 22.8457 11.9932 22.8457 12.0244 22.8457C12.3667 22.7822 12.6469 22.5916 12.8959 22.3375C13.2071 22.0516 13.4872 21.7657 13.7673 21.4797C14.2653 21.035 14.7322 20.5903 15.1991 20.1137Z",
                                                    fill: "#453C3C"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/footer.jsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://t.me/+88009999999",
                                            target: "_blank",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} w-[40px] h-[40px] rounded-full hover:bg-white flex items-center justify-center transition-all duration-500 ease-in-out`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: 30,
                                                height: 30,
                                                viewBox: "0 0 30 30",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M3.06324 8.65481C2.71937 8.65481 2.3755 8.65481 2.03162 8.65481C1.80237 8.65481 1.57312 8.76394 1.34387 8.76394C1.11462 8.87308 1 9.09135 1 9.30962C1 9.41875 1 9.41875 1 9.41875C1.11462 9.74616 1.22925 9.96442 1.34387 10.2918C2.03162 11.6014 2.71937 12.9111 3.40712 14.2207C4.43874 15.8577 5.47036 17.4947 6.73123 19.0226C7.30436 19.6775 7.9921 20.3323 8.67985 20.9871C9.48222 21.5327 10.2846 22.0784 11.2016 22.515C12.4624 23.0606 12.8063 22.9515 14.1818 22.8424C14.6403 22.8424 15.0988 22.8424 15.6719 22.8424C15.7865 22.8424 17.0474 22.8424 17.162 22.8424C17.5059 22.7332 17.6205 23.0606 17.7352 22.7332C17.7352 22.6241 17.8498 22.4058 17.8498 22.2967C17.8498 21.9693 17.9644 21.5327 17.9644 21.2053C18.079 20.8779 18.1937 20.5505 18.4229 20.2231C18.7668 19.7866 19.1107 19.7866 19.5692 20.0049C19.913 20.114 20.1423 20.3323 20.3715 20.6597C20.83 21.2053 21.4032 21.6419 21.8617 22.1876C22.2055 22.515 22.664 22.7332 23.1225 22.9515C23.1225 23.0606 24.1541 22.9515 24.6126 22.9515C24.9565 22.9515 25.7589 22.9515 26.1028 22.9515C27.0198 22.9515 26.6759 22.9515 27.5929 22.9515C27.9368 22.9515 28.7391 22.9515 29.083 22.9515C29.5415 22.7332 30 22.6241 29.7708 22.1876C29.6561 21.9693 29.6561 21.8601 29.5415 21.6419C29.1976 21.0962 28.7391 20.5505 28.2806 20.114C27.5929 19.4592 26.9051 18.9135 26.332 18.2587C25.9881 18.0404 25.7589 17.713 25.5296 17.3856C25.1858 17.0582 25.1858 16.6216 25.415 16.2942C25.5296 16.1851 25.5296 15.9668 25.6443 15.8577C26.1028 15.2029 26.6759 14.6572 27.1344 14.0024C27.8221 13.1293 28.6245 12.2563 29.1976 11.274C29.4269 10.8375 29.6561 10.401 29.8854 9.96442C29.8854 9.85529 30 9.63702 30 9.52789C30 9.20048 29.8854 8.98221 29.4269 8.87308C29.083 8.76394 28.8538 8.76394 28.5099 8.76394C27.4783 8.76394 26.4466 8.76394 25.415 8.76394C24.9565 8.76394 24.498 8.76394 24.0395 8.76394C23.6956 8.76394 23.4664 8.87308 23.3518 9.09135C23.2371 9.20048 23.2371 9.30962 23.2371 9.41875C22.7787 10.6192 22.2055 11.8197 21.4032 12.9111C20.9447 13.675 20.4862 14.3298 19.7984 14.9846C19.5692 15.2029 19.3399 15.4212 18.996 15.5303C18.8814 15.6394 18.6522 15.5303 18.5375 15.4212C18.4229 15.312 18.3083 15.2029 18.3083 15.0938C18.079 14.7664 18.079 14.4389 18.079 14.1115C18.079 13.5659 18.079 13.1293 18.079 12.5837C18.079 12.1471 18.079 11.6014 18.079 11.1649C18.079 10.9466 18.079 10.7284 18.079 10.6192C18.079 10.1827 18.079 9.63702 18.079 9.20048C17.9644 8.65481 17.7352 8.3274 17.162 8.21827C16.4743 8 15.9012 8 15.328 8C14.5257 8 13.6087 8 12.8063 8C12.4624 8 12.3773 8.10913 12.0335 8.21827C11.6896 8.3274 11.9466 8.2976 11.7174 8.625C11.6028 8.73413 11.7174 8.51587 11.7174 8.625C11.7174 8.73414 11.6028 9.14087 11.7174 9.25C11.832 9.25 11.8043 9.64167 12.0335 9.75081C12.1186 10.1827 12.0039 9.74616 12.2332 10.1827C12.3478 10.5101 12.3478 10.7284 12.4624 11.0558C12.4624 11.4923 12.5771 11.8197 12.5771 12.2563C12.5771 13.0202 12.5771 13.8933 12.4624 14.6572C12.4624 14.9846 12.3478 15.2029 12.1186 15.4212C11.7747 15.4212 11.6601 15.5303 11.4308 15.5303C11.3162 15.5303 11.087 15.4212 10.9723 15.312C10.6285 15.2029 10.3992 14.8755 10.17 14.6572C9.48222 13.675 8.79448 12.6928 8.22135 11.7106C7.87748 10.9466 7.5336 10.1827 7.07511 9.30962C6.84586 8.87308 6.50198 8.65481 5.92886 8.65481C5.01186 8.65481 4.09487 8.65481 3.06324 8.65481Z",
                                                    fill: "#453C3C"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 82,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/footer.jsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://t.me/+88009999999",
                                            target: "_blank",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} w-[40px] h-[40px] rounded-full hover:bg-white flex items-center justify-center transition-all duration-500 ease-in-out`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: 30,
                                                height: 30,
                                                viewBox: "0 0 30 30",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M24.3547 9.08737C21.0637 3.99983 14.3448 2.48732 9.13413 5.64984C4.06063 8.81237 2.41517 15.6874 5.70609 20.775L5.98034 21.1875L4.88336 25.3125L8.99702 24.2125L9.40838 24.4875C11.191 25.45 13.1107 26 15.0303 26C17.0872 26 19.144 25.45 20.9267 24.35C26.0002 21.05 27.5085 14.3124 24.3547 9.08737ZM21.4751 19.675C20.9267 20.5 20.241 21.05 19.2812 21.1875C18.7327 21.1875 18.0471 21.4625 15.3046 20.3625C12.9736 19.2625 11.0538 17.4749 9.68262 15.4124C8.85989 14.4499 8.44852 13.2124 8.31141 11.9749C8.31141 10.8749 8.72278 9.91238 9.40838 9.22487C9.68262 8.94987 9.95686 8.81237 10.2311 8.81237H10.9167C11.191 8.81237 11.4652 8.81237 11.6023 9.36237C11.8766 10.0499 12.5622 11.6999 12.5622 11.8374C12.6993 11.9749 12.6993 12.2499 12.5622 12.3874C12.6993 12.6624 12.5622 12.9374 12.4251 13.0749C12.2879 13.2124 12.1508 13.4874 12.0137 13.6249C11.7395 13.7624 11.6023 14.0374 11.7395 14.3124C12.2879 15.1374 12.9736 15.9624 13.6592 16.6499C14.4819 17.3374 15.3046 17.8874 16.2644 18.2999C16.5388 18.4374 16.813 18.4374 16.9501 18.1624C17.0872 17.8874 17.7729 17.1999 18.0471 16.9249C18.3213 16.6499 18.4584 16.6499 18.7327 16.7874L20.9267 17.8874C21.2009 18.0249 21.4751 18.1624 21.6122 18.2999C21.7494 18.7124 21.7494 19.2625 21.4751 19.675Z",
                                                    fill: "#453C3C"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/footer.jsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] leading-[16px] text-[#16161633]/20 font-montserrat font-medium",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p1"),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 109,
                                            columnNumber: 32
                                        }, this),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p2")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(root)/_components/footer.jsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-[20px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden minitablet:flex items-center gap-2 h-[46px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[16px] leading-[24px] font-semibold font-montserrat text-mainBlack",
                                            children: "RU"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-[16px] h-[16px] flex items-center justify-center bg-mainBlack rounded-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "text-secondWhite"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                                            lineNumber: 123,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/_components/footer.jsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                    className: "max-w-[60px] rounded-t-none rounded-b-[20px] z-[99] p-2 flex text-mainBlack font-montserrat text-[15px] justify-center",
                                                    children: "RU"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 126,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p3")
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-[10px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p4")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p5")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p6")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p7")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p8")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(root)/_components/footer.jsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-[20px] min-w-[270px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[46px] bg-[#F9EFF0] w-full px-[20px] flex items-center md:rounded-[20px] rounded-[10px] gap-[30px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-montserrat text-[15px] font-normal text-[#453C3C80]/40",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.top.t1")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[16px] leading-[24px] font-semibold font-montserrat text-mainBlack",
                                                    children: city
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[16px] h-[16px] flex items-center justify-center bg-mainBlack rounded-full",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    className: "text-secondWhite"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/_components/footer.jsx",
                                                                lineNumber: 177,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                                            lineNumber: 176,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                            className: "max-w-[200px] bg-[#F9EFF0] rounded-t-none z-[99] rounded-b-[20px] mt-[10px] p-3 gap-2 flex text-mainBlack font-montserrat text-[15px] flex-col justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "cursor-pointer",
                                                                onClick: ()=>{
                                                                    setCity((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.top.cities.c1"));
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.top.cities.c1")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/_components/footer.jsx",
                                                                lineNumber: 182,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                                            lineNumber: 181,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p9")
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p10")
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p11")
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p12")
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-[15px] polo:hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p13")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p14")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p15")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(root)/_components/footer.jsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden polo:flex flex-col gap-[20px] min-w-[400px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden polo:block w-full polo:w-[310px] h-[46px] relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.top.t2"),
                                            className: "w-full h-full md:rounded-[20px] rounded-[10px] bg-[#F9EFF0] px-[30px] placeholder:text-[14px] placeholder:leading-[17px] text-mainBlack placeholder:text-[#453C3C80]/40 font-montserrat font-medium outline-mainBlack pr-[80px]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} absolute right-[30px] top-[50%] translate-y-[-50%] cursor-pointer`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: 22,
                                                height: 22,
                                                viewBox: "0 0 22 22",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M17.1062 18.5878C15.3003 20.0657 12.9918 20.9523 10.4762 20.9523C4.69035 20.9523 0 16.262 0 10.4762C0 4.69033 4.69035 0 10.4762 0C16.262 0 20.9524 4.69033 20.9524 10.4762C20.9524 12.9918 20.0657 15.3003 18.5878 17.1063L21.6932 20.2116C22.1023 20.6207 22.1023 21.284 21.6932 21.6932C21.284 22.1023 20.6207 22.1023 20.2116 21.6932L17.1062 18.5878ZM18.8571 10.4762C18.8571 15.1048 15.1049 18.8571 10.4762 18.8571C5.84751 18.8571 2.09524 15.1048 2.09524 10.4762C2.09524 5.8475 5.84751 2.09523 10.4762 2.09523C15.1049 2.09523 18.8571 5.8475 18.8571 10.4762Z",
                                                    fill: "#453C3C"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 243,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/footer.jsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden polo:flex w-auto items-start gap-[60px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-[20px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p13")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 255,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p14")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 258,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p15")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 261,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: " flex-col gap-[20px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p16")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 266,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p17")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 269,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p18")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 274,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p19")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 279,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(root)/_components/footer.jsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(root)/_components/footer.jsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex minitablet:hidden flex-col gap-[30px] bg-[#F5E7E7]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[46px] w-full relative flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: `w-[207px] h-[40px] ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} relative`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    image: "/images/logo.svg",
                                    title: "logo",
                                    fill: true,
                                    className1: "object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(root)/_components/footer.jsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/footer.jsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex flex-col gap-[15px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "light-button w-full",
                                    children: "Регистрация"
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "button w-full",
                                    children: "Войти в кабинет партнера"
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(root)/_components/footer.jsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[46px] bg-[#F9EFF0]  w-full px-[20px] justify-between flex items-center md:rounded-[20px] rounded-[10px] gap-[30px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-montserrat text-[15px] font-normal text-[#453C3C80]/40",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.top.t1")
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[16px] leading-[24px] font-semibold font-montserrat text-mainBlack",
                                            children: city
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-[16px] h-[16px] flex items-center justify-center bg-mainBlack rounded-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "text-secondWhite"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                                            lineNumber: 321,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/_components/footer.jsx",
                                                        lineNumber: 320,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 319,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                    className: "max-w-[200px] bg-[#F9EFF0] rounded-t-none z-[99] rounded-b-[20px] mt-[10px] p-3 gap-2 flex text-mainBlack font-montserrat text-[15px] flex-col justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "cursor-pointer",
                                                        onClick: ()=>{
                                                            setCity((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.top.cities.c1"));
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("header.top.cities.c1")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/_components/footer.jsx",
                                                        lineNumber: 325,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(root)/_components/footer.jsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#F5E7E7] flex justify-between w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-[20px] text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p3")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-[10px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p4")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 350,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p5")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 355,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p6")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 360,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p7")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 365,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p8")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 370,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-[15px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p9")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p10")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p11")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 384,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p12")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 387,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p13")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p14")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 393,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("footer.p15")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 396,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(root)/_components/footer.jsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#F5E7E7] flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "bold-description",
                                            children: "8(904) 999 99 99"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 404,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-[15px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "https://t.me/+88009999999",
                                                    target: "_blank",
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} w-[40px] h-[40px] rounded-full hover:bg-white flex items-center justify-center transition-all duration-500 ease-in-out`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: 30,
                                                        height: 30,
                                                        viewBox: "0 0 30 30",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M15.1991 20.1137C15.2302 20.1456 15.2613 20.1455 15.2613 20.1773C16.7864 21.3209 18.3115 22.4646 19.8055 23.64C20.0233 23.7988 20.2412 23.8941 20.4902 23.9576C20.9882 24.0847 21.3306 23.9259 21.5484 23.4812C21.6418 23.2906 21.7041 23.0681 21.7352 22.8775C22.0153 21.6068 22.2644 20.3044 22.5445 19.0336C22.9802 16.9051 23.416 14.8085 23.8828 12.68C24.2252 10.9963 24.5987 9.31265 24.9411 7.59718C25.0033 7.31126 25.0345 7.02536 24.9411 6.70768C24.8166 6.23116 24.4119 5.94525 23.9762 6.00879C23.8517 6.04055 23.6961 6.07232 23.5716 6.10409C20.7081 7.24773 17.8136 8.39138 14.9501 9.50325C11.9932 10.6787 9.03641 11.8223 6.04846 12.9977C5.58159 13.1883 5.0836 13.3789 4.61673 13.6013C4.42999 13.6966 4.24324 13.8237 4.11874 13.9825C3.90087 14.3002 3.99424 14.5861 4.30549 14.745C4.46111 14.8085 4.61673 14.872 4.77236 14.9038C6.29745 15.3803 7.85369 15.8569 9.37878 16.3334C9.47215 16.3651 9.53441 16.3651 9.62778 16.3016C13.0515 14.1731 16.4129 12.0129 19.7744 9.8527C20.0857 9.66209 20.3658 9.47149 20.6769 9.28088C20.8326 9.18558 20.9882 9.12204 21.175 9.15381C21.3306 9.18558 21.3617 9.28088 21.2683 9.40795C21.2373 9.47149 21.175 9.50325 21.1127 9.56679C19.2453 11.314 17.3467 13.0613 15.4792 14.8085C14.4209 15.7933 13.3627 16.7781 12.2734 17.7947C12.2422 17.8264 12.2111 17.8582 12.2111 17.89C12.1489 18.6206 12.0866 19.3513 12.0555 20.0819C11.9932 20.8762 11.931 21.6385 11.8687 22.4328C11.8687 22.5599 11.8376 22.7187 11.8376 22.8457C11.8687 22.8457 11.8999 22.8457 11.931 22.8457C11.9621 22.8457 11.9932 22.8457 12.0244 22.8457C12.3667 22.7822 12.6469 22.5916 12.8959 22.3375C13.2071 22.0516 13.4872 21.7657 13.7673 21.4797C14.2653 21.035 14.7322 20.5903 15.1991 20.1137Z",
                                                            fill: "#453C3C"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                                            lineNumber: 418,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/_components/footer.jsx",
                                                        lineNumber: 411,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 406,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "https://t.me/+88009999999",
                                                    target: "_blank",
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} w-[40px] h-[40px] rounded-full hover:bg-white flex items-center justify-center transition-all duration-500 ease-in-out`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: 30,
                                                        height: 30,
                                                        viewBox: "0 0 30 30",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M3.06324 8.65481C2.71937 8.65481 2.3755 8.65481 2.03162 8.65481C1.80237 8.65481 1.57312 8.76394 1.34387 8.76394C1.11462 8.87308 1 9.09135 1 9.30962C1 9.41875 1 9.41875 1 9.41875C1.11462 9.74616 1.22925 9.96442 1.34387 10.2918C2.03162 11.6014 2.71937 12.9111 3.40712 14.2207C4.43874 15.8577 5.47036 17.4947 6.73123 19.0226C7.30436 19.6775 7.9921 20.3323 8.67985 20.9871C9.48222 21.5327 10.2846 22.0784 11.2016 22.515C12.4624 23.0606 12.8063 22.9515 14.1818 22.8424C14.6403 22.8424 15.0988 22.8424 15.6719 22.8424C15.7865 22.8424 17.0474 22.8424 17.162 22.8424C17.5059 22.7332 17.6205 23.0606 17.7352 22.7332C17.7352 22.6241 17.8498 22.4058 17.8498 22.2967C17.8498 21.9693 17.9644 21.5327 17.9644 21.2053C18.079 20.8779 18.1937 20.5505 18.4229 20.2231C18.7668 19.7866 19.1107 19.7866 19.5692 20.0049C19.913 20.114 20.1423 20.3323 20.3715 20.6597C20.83 21.2053 21.4032 21.6419 21.8617 22.1876C22.2055 22.515 22.664 22.7332 23.1225 22.9515C23.1225 23.0606 24.1541 22.9515 24.6126 22.9515C24.9565 22.9515 25.7589 22.9515 26.1028 22.9515C27.0198 22.9515 26.6759 22.9515 27.5929 22.9515C27.9368 22.9515 28.7391 22.9515 29.083 22.9515C29.5415 22.7332 30 22.6241 29.7708 22.1876C29.6561 21.9693 29.6561 21.8601 29.5415 21.6419C29.1976 21.0962 28.7391 20.5505 28.2806 20.114C27.5929 19.4592 26.9051 18.9135 26.332 18.2587C25.9881 18.0404 25.7589 17.713 25.5296 17.3856C25.1858 17.0582 25.1858 16.6216 25.415 16.2942C25.5296 16.1851 25.5296 15.9668 25.6443 15.8577C26.1028 15.2029 26.6759 14.6572 27.1344 14.0024C27.8221 13.1293 28.6245 12.2563 29.1976 11.274C29.4269 10.8375 29.6561 10.401 29.8854 9.96442C29.8854 9.85529 30 9.63702 30 9.52789C30 9.20048 29.8854 8.98221 29.4269 8.87308C29.083 8.76394 28.8538 8.76394 28.5099 8.76394C27.4783 8.76394 26.4466 8.76394 25.415 8.76394C24.9565 8.76394 24.498 8.76394 24.0395 8.76394C23.6956 8.76394 23.4664 8.87308 23.3518 9.09135C23.2371 9.20048 23.2371 9.30962 23.2371 9.41875C22.7787 10.6192 22.2055 11.8197 21.4032 12.9111C20.9447 13.675 20.4862 14.3298 19.7984 14.9846C19.5692 15.2029 19.3399 15.4212 18.996 15.5303C18.8814 15.6394 18.6522 15.5303 18.5375 15.4212C18.4229 15.312 18.3083 15.2029 18.3083 15.0938C18.079 14.7664 18.079 14.4389 18.079 14.1115C18.079 13.5659 18.079 13.1293 18.079 12.5837C18.079 12.1471 18.079 11.6014 18.079 11.1649C18.079 10.9466 18.079 10.7284 18.079 10.6192C18.079 10.1827 18.079 9.63702 18.079 9.20048C17.9644 8.65481 17.7352 8.3274 17.162 8.21827C16.4743 8 15.9012 8 15.328 8C14.5257 8 13.6087 8 12.8063 8C12.4624 8 12.3773 8.10913 12.0335 8.21827C11.6896 8.3274 11.9466 8.2976 11.7174 8.625C11.6028 8.73413 11.7174 8.51587 11.7174 8.625C11.7174 8.73414 11.6028 9.14087 11.7174 9.25C11.832 9.25 11.8043 9.64167 12.0335 9.75081C12.1186 10.1827 12.0039 9.74616 12.2332 10.1827C12.3478 10.5101 12.3478 10.7284 12.4624 11.0558C12.4624 11.4923 12.5771 11.8197 12.5771 12.2563C12.5771 13.0202 12.5771 13.8933 12.4624 14.6572C12.4624 14.9846 12.3478 15.2029 12.1186 15.4212C11.7747 15.4212 11.6601 15.5303 11.4308 15.5303C11.3162 15.5303 11.087 15.4212 10.9723 15.312C10.6285 15.2029 10.3992 14.8755 10.17 14.6572C9.48222 13.675 8.79448 12.6928 8.22135 11.7106C7.87748 10.9466 7.5336 10.1827 7.07511 9.30962C6.84586 8.87308 6.50198 8.65481 5.92886 8.65481C5.01186 8.65481 4.09487 8.65481 3.06324 8.65481Z",
                                                            fill: "#453C3C"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                                            lineNumber: 436,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/_components/footer.jsx",
                                                        lineNumber: 429,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 424,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "https://t.me/+88009999999",
                                                    target: "_blank",
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} w-[40px] h-[40px] rounded-full hover:bg-white flex items-center justify-center transition-all duration-500 ease-in-out`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: 30,
                                                        height: 30,
                                                        viewBox: "0 0 30 30",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M24.3547 9.08737C21.0637 3.99983 14.3448 2.48732 9.13413 5.64984C4.06063 8.81237 2.41517 15.6874 5.70609 20.775L5.98034 21.1875L4.88336 25.3125L8.99702 24.2125L9.40838 24.4875C11.191 25.45 13.1107 26 15.0303 26C17.0872 26 19.144 25.45 20.9267 24.35C26.0002 21.05 27.5085 14.3124 24.3547 9.08737ZM21.4751 19.675C20.9267 20.5 20.241 21.05 19.2812 21.1875C18.7327 21.1875 18.0471 21.4625 15.3046 20.3625C12.9736 19.2625 11.0538 17.4749 9.68262 15.4124C8.85989 14.4499 8.44852 13.2124 8.31141 11.9749C8.31141 10.8749 8.72278 9.91238 9.40838 9.22487C9.68262 8.94987 9.95686 8.81237 10.2311 8.81237H10.9167C11.191 8.81237 11.4652 8.81237 11.6023 9.36237C11.8766 10.0499 12.5622 11.6999 12.5622 11.8374C12.6993 11.9749 12.6993 12.2499 12.5622 12.3874C12.6993 12.6624 12.5622 12.9374 12.4251 13.0749C12.2879 13.2124 12.1508 13.4874 12.0137 13.6249C11.7395 13.7624 11.6023 14.0374 11.7395 14.3124C12.2879 15.1374 12.9736 15.9624 13.6592 16.6499C14.4819 17.3374 15.3046 17.8874 16.2644 18.2999C16.5388 18.4374 16.813 18.4374 16.9501 18.1624C17.0872 17.8874 17.7729 17.1999 18.0471 16.9249C18.3213 16.6499 18.4584 16.6499 18.7327 16.7874L20.9267 17.8874C21.2009 18.0249 21.4751 18.1624 21.6122 18.2999C21.7494 18.7124 21.7494 19.2625 21.4751 19.675Z",
                                                            fill: "#453C3C"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                                            lineNumber: 454,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/_components/footer.jsx",
                                                        lineNumber: 447,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 442,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 405,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 403,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "bold-description",
                                            children: "8(800) 999 99 99"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 463,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end items-center gap-2 h-[46px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[16px] leading-[24px] font-semibold font-montserrat text-mainBlack",
                                                    children: "RU"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 466,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[16px] h-[16px] flex items-center justify-center bg-mainBlack rounded-full",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    className: "text-secondWhite"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                                    lineNumber: 472,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/_components/footer.jsx",
                                                                lineNumber: 471,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                                            lineNumber: 470,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                            className: "max-w-[60px] rounded-t-none rounded-b-[20px] z-[99] p-2 flex text-mainBlack font-montserrat text-[15px] justify-center",
                                                            children: "RU"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                                            lineNumber: 475,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                                    lineNumber: 469,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/_components/footer.jsx",
                                            lineNumber: 465,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/footer.jsx",
                                    lineNumber: 462,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(root)/_components/footer.jsx",
                            lineNumber: 402,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-montserrat text-[16px] text-[#453C3C33]",
                                children: "FLOWERS&OPT © 2024. Все права защищены."
                            }, void 0, false, {
                                fileName: "[project]/app/(root)/_components/footer.jsx",
                                lineNumber: 484,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/footer.jsx",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(root)/_components/footer.jsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(root)/_components/footer.jsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(root)/_components/footer.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Footer;
}}),
"[project]/app/(root)/_components/hero.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(root)/_components/image.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(root)/_components/helpers/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/translate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/usehooks-ts/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/pagination.mjs [app-ssr] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const Hero = ()=>{
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 767px)");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full relative mypgn max-h-[670px] h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                onSwiper: (swiper)=>swiperRef.current = swiper,
                modules: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
                ],
                loop: true,
                spaceBetween: 50,
                pagination: {
                    clickable: true
                },
                className: "w-full h-full z-[3]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        className: "w-full h-full bg-[#E1E8F6] md:rounded-[20px] rounded-[10px] relative z-[1]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                image: "/images/bg.webp",
                                title: "hero",
                                fill: true,
                                className1: "object-cover md:rounded-[20px] rounded-[10px] polo:flex hidden"
                            }, void 0, false, {
                                fileName: "[project]/app/(root)/_components/hero.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full polo:w-[666px] min-h-[240px] xl:min-h-[294px] z-[2] absolute top-[40px] polo:top-[188px] polo:left-[6%] xl:left-[11%] flex flex-col justify-center items-center polo:items-start gap-4 polo:gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[32px] text-center polo:text-start leading-[42px] polo:text-[50px] polo:leading-[59px] xl:text-[62px] xl:leading-[68px] font-medium text-mainBlack font-montserrat",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("hero.p4")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/hero.jsx",
                                                lineNumber: 39,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/hero.jsx",
                                                lineNumber: 39,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("hero.p6")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/_components/hero.jsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[15px] polo:text-[16px] leading-[19px] polo:leading-[24px] text-mainBlack font-normal font-montserrat",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("hero.p5")
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/_components/hero.jsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-[358px] relative flex polo:hidden items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            image: "/images/h1.webp",
                                            title: "hero",
                                            fill: true,
                                            className1: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/hero.jsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/_components/hero.jsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-auto hidden polo:flex items-center gap-6 mt-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} w-[200px] xl:w-[218px] h-[60px] xl:h-[67px] md:rounded-[20px] rounded-[10px] bg-white text-[#7D6064] text-[16px] leading-[22px] xl:text-[18px] xl:leading-[24px] font-normal font-montserrat`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("hero.p1")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/hero.jsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} w-[300px] xl:w-[345px] h-[60px] xl:h-[67px] md:rounded-[20px] rounded-[10px] bg-[#7D6064] text-[#fff] text-[16px] leading-[22px] xl:text-[18px] xl:leading-[24px] font-normal font-montserrat`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("hero.p2")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/hero.jsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/_components/hero.jsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-auto polo:hidden flex flex-col items-center gap-[10px] absolute bottom-[-80px] mt-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} w-[290px] h-[60px] xl:h-[67px] md:rounded-[20px] rounded-[10px] bg-white text-[#7D6064] text-[16px] leading-[22px] xl:text-[18px] xl:leading-[24px] font-normal font-montserrat`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("hero.p1")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/hero.jsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} w-[290px] h-[60px] xl:h-[67px] md:rounded-[20px] rounded-[10px] bg-[#7D6064] text-[#fff] text-[16px] leading-[22px] xl:text-[18px] xl:leading-[24px] font-normal font-montserrat`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("hero.p2")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/hero.jsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/_components/hero.jsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/_components/hero.jsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(root)/_components/hero.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        className: "w-full h-full bg-[#85CA40] md:rounded-[20px] rounded-[10px] relative z-[1]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[750px] xl:w-[999px] h-[578px] absolute right-0 top-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    image: "/images/book.webp",
                                    title: "hero",
                                    fill: true,
                                    className1: "xl:object-cover md:rounded-[20px] rounded-[10px] polo:flex hidden"
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/_components/hero.jsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(root)/_components/hero.jsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full polo:w-[666px] min-h-[240px] xl:min-h-[294px] z-[2] absolute top-[40px] polo:top-[188px] polo:left-[6%] xl:left-[11%] flex flex-col justify-center items-center polo:items-start gap-4 polo:gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[32px] leading-[42px] polo:text-[50px] text-center polo:text-start polo:leading-[59px] xl:text-[62px] xl:leading-[68px] font-medium text-mainBlack font-montserrat",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("hero.p4")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/hero.jsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/hero.jsx",
                                                lineNumber: 94,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("hero.p6")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/_components/hero.jsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[15px] polo:text-[16px] left-[19px] polo:leading-[24px] text-mainBlack font-normal font-montserrat",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("hero.p5")
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/_components/hero.jsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-[358px] relative flex polo:hidden items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            image: "/images/h2.webp",
                                            title: "hero",
                                            fill: true,
                                            className1: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/hero.jsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/_components/hero.jsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-auto hidden polo:flex items-center gap-6 mt-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} w-[200px] xl:w-[218px] h-[60px] xl:h-[67px] md:rounded-[20px] rounded-[10px] bg-white text-[#7D6064] text-[16px] leading-[22px] xl:text-[18px] xl:leading-[24px] font-normal font-montserrat`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("hero.p7")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/hero.jsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} w-[300px] xl:w-[345px] h-[60px] xl:h-[67px] md:rounded-[20px] rounded-[10px] bg-[#7D6064] text-[#fff] text-[16px] leading-[22px] xl:text-[18px] xl:leading-[24px] font-normal font-montserrat`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("hero.p2")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/hero.jsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/_components/hero.jsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-auto polo:hidden flex flex-col items-center gap-[10px] absolute bottom-[-80px] mt-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} w-[290px] h-[60px] xl:h-[67px] md:rounded-[20px] rounded-[10px] bg-white text-[#7D6064] text-[16px] leading-[22px] xl:text-[18px] xl:leading-[24px] font-normal font-montserrat`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("hero.p1")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/hero.jsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} w-[290px] h-[60px] xl:h-[67px] md:rounded-[20px] rounded-[10px] bg-[#7D6064] text-[#fff] text-[16px] leading-[22px] xl:text-[18px] xl:leading-[24px] font-normal font-montserrat`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("hero.p2")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/hero.jsx",
                                                lineNumber: 128,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/_components/hero.jsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/_components/hero.jsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(root)/_components/hero.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/_components/hero.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "custom-pagination"
            }, void 0, false, {
                fileName: "[project]/app/(root)/_components/hero.jsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} tablet:flex hidden absolute top-1/2 left-6 xl:left-16 transform -translate-y-1/2 bg-mainWhite z-[69] p-2 rounded-full text-mainBlack`,
                onClick: ()=>swiperRef.current?.slidePrev(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/app/(root)/_components/hero.jsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(root)/_components/hero.jsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} tablet:flex hidden absolute top-1/2 right-6 xl:right-16 transform -translate-y-1/2 bg-mainWhite z-[69] p-2 rounded-full text-mainBlack`,
                onClick: ()=>swiperRef.current?.slideNext(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/app/(root)/_components/hero.jsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(root)/_components/hero.jsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/_components/hero.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Hero;
}}),
"[project]/app/(root)/_components/new-flowers.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/translate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(root)/_components/helpers/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(root)/_components/image.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/usehooks-ts/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const NewFlowers = ()=>{
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 768px)");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "st:w-[1508px] mx-auto w-[94%] flex flex-col gap-[30px] polo:gap-[50px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "xl:w-[1360px] mx-auto w-full flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[28px] leading-[32px] polo:text-[48px] polo:leading-[52px] font-semibold text-mainBlack font-montserrat",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("new.p1")
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `text-mainBlack font-montserrat text-[15px] polo:flex hidden font-normal leading-[18px] ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active}`,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("vitrina.btn")
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[38px] h-[38px] relative polo:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: "/images/ar.svg",
                            fill: true,
                            title: "ar",
                            className1: "w-full h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "xl:w-[1360px] mx-auto w-full relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                        onSwiper: (swiper)=>swiperRef.current = swiper,
                        modules: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                        ],
                        loop: true,
                        slidesPerView: isMobile ? 2 : 4,
                        spaceBetween: 20,
                        className: "w-full h-full z-[3]",
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10
                        ].map((c)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex flex-col gap-4 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[57px] h-[27px] md:w-[81px] md:h-[40px] md:rounded-[20px] rounded-[10px] bg-mainBlack absolute inset-0 z-[2] flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] leading-[16px] md:text-[16px] md:leading-[18px] text-white font-montserrat font-normal",
                                                children: "New"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                                                lineNumber: 54,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 right-2 md:top-5 md:right-5 z-[2]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-[22px] h-[22px] md:w-[34px] md:h-[34px] rounded-full bg-[#DBE0D233]/20 flex items-center justify-center ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: "text-white w-[14px] md:w-[20px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                                                    lineNumber: 63,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                                                lineNumber: 60,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                                            lineNumber: 59,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-[157px] md:h-[325px] relative md:rounded-[20px] rounded-[10px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                image: "/images/vit.webp",
                                                title: "vitrina",
                                                fill: true,
                                                className1: "object-cover md:rounded-[20px] rounded-[10px]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                                                lineNumber: 67,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                                            lineNumber: 66,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] leading-[16px] polo:text-[18px] polo:leading-[24px] text-mainBlack uppercase font-montserrat font-semibold",
                                            children: "Кремовый букет пионовидных роз"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex gap-[12px] md:items-center md:flex-row flex-col md:justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[18px] leading-[24px] text-mainBlack font-montserrat  font-semibold",
                                                    children: "4 290 ₽"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                                                    lineNumber: 78,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `w-full xs:w-[155px] h-[50px] md:h-[54px] md:rounded-[20px] rounded-[10px] text-white bg-[#7D6064] md:bg-[#F5E7E7] font-montserrat md:text-mainBlack ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} text-[14px] leading-[18px] md:text-[18px] md:leading-[24px] font-normal hover:bg-mainBlack hover:text-mainWhite transition-all ease-in-out duration-500`,
                                                    children: "Купить"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, this)
                            }, c, false, {
                                fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} absolute top-[162.5px] md:flex hidden left-6 md:left-[-70px] transform -translate-y-1/2 bg-white z-[69] p-2 rounded-full text-mainBlack`,
                        onClick: ()=>swiperRef.current?.slidePrev(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} absolute top-[162.5px] md:flex hidden right-6 md:right-[-70px] transform -translate-y-1/2 bg-white z-[69] p-2 rounded-full text-mainBlack`,
                        onClick: ()=>swiperRef.current?.slideNext(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/_components/new-flowers.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/_components/new-flowers.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = NewFlowers;
 //   <div div className = 'w-[81px] h-[40px] md:rounded-[20px] rounded-[10px] bg-mainBlack absolute inset-0 z-[2] flex items-center justify-center' >
 //     <p className='text-[16px] leading-[18px] text-white font-montserrat font-normal'>New</p>
 // </div >
}}),
"[project]/app/(root)/_components/online-vitrina.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/translate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(root)/_components/helpers/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(root)/_components/image.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/usehooks-ts/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const OnlineVitrina = ()=>{
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 768px)");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "st:w-[1508px] mx-auto w-[94%] flex flex-col gap-[30px] polo:gap-[50px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "xl:w-[1360px] mx-auto w-full flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[28px] leading-[32px] polo:text-[48px] polo:leading-[52px] font-semibold text-mainBlack font-montserrat",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("vitrina.p1")
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `text-mainBlack polo:flex hidden font-montserrat text-[15px] font-normal leading-[18px] ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active}`,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("vitrina.btn")
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[38px] h-[38px] relative polo:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: "/images/ar.svg",
                            fill: true,
                            title: "ar",
                            className1: "w-full h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "xl:w-[1360px] mx-auto w-full relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                        onSwiper: (swiper)=>swiperRef.current = swiper,
                        modules: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                        ],
                        loop: true,
                        slidesPerView: isMobile ? 2 : 4,
                        spaceBetween: 20,
                        className: "w-full h-full z-[3]",
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10
                        ].map((c)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex flex-col gap-4 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 right-2 md:top-5 md:right-5 z-[2]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-[22px] h-[22px] md:w-[34px] md:h-[34px] rounded-full bg-[#DBE0D233]/20 flex items-center justify-center ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: "text-white w-[14px] md:w-[20px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                                                    lineNumber: 57,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                                                lineNumber: 54,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-[157px] md:h-[325px] relative md:rounded-[20px] rounded-[10px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                image: "/images/vit.webp",
                                                title: "vitrina",
                                                fill: true,
                                                className1: "object-cover md:rounded-[20px] rounded-[10px]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] leading-[16px] polo:text-[18px] polo:leading-[24px] text-mainBlack uppercase font-montserrat font-semibold",
                                            children: "Кремовый букет пионовидных роз"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex gap-[12px] md:items-center md:flex-row flex-col md:justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[18px] leading-[24px] text-mainBlack font-montserrat font-semibold",
                                                    children: "4 290 ₽"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                                                    lineNumber: 72,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `w-full xs:w-[155px] h-[50px] md:h-[54px] md:rounded-[20px] rounded-[10px] text-white bg-[#7D6064] md:bg-[#F5E7E7] font-montserrat md:text-mainBlack ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} text-[14px] leading-[18px] md:text-[18px] md:leading-[24px] font-normal hover:bg-mainBlack hover:text-mainWhite transition-all ease-in-out duration-500`,
                                                    children: "Купить"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                                                    lineNumber: 75,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, this)
                            }, c, false, {
                                fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} absolute top-[162.5px] md:flex hidden left-6 md:left-[-70px] transform -translate-y-1/2 bg-white z-[69] p-2 rounded-full text-mainBlack`,
                        onClick: ()=>swiperRef.current?.slidePrev(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} absolute top-[162.5px] md:flex hidden right-6 md:right-[-70px] transform -translate-y-1/2 bg-white z-[69] p-2 rounded-full text-mainBlack`,
                        onClick: ()=>swiperRef.current?.slideNext(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/_components/online-vitrina.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = OnlineVitrina;
}}),
"[project]/app/(root)/_components/stock.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/translate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(root)/_components/helpers/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(root)/_components/image.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/usehooks-ts/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const Stock = ()=>{
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 768px)");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "st:w-[1508px] mx-auto w-[94%] flex flex-col gap-[30px] polo:gap-[50px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "xl:w-[1360px] mx-auto w-full flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[28px] leading-[32px] polo:text-[48px] polo:leading-[52px] font-semibold text-mainBlack font-montserrat",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("stock.p1")
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/stock.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `text-mainBlack font-montserrat text-[15px] polo:flex hidden font-normal leading-[18px] ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active}`,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("vitrina.btn")
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/stock.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[38px] h-[38px] relative polo:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: "/images/ar.svg",
                            fill: true,
                            title: "ar",
                            className1: "w-full h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/stock.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/stock.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/_components/stock.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "xl:w-[1360px] mx-auto w-full relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                        onSwiper: (swiper)=>swiperRef.current = swiper,
                        modules: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                        ],
                        loop: true,
                        slidesPerView: isMobile ? 2 : 4,
                        spaceBetween: 20,
                        className: "w-full h-full z-[3]",
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10
                        ].map((c)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex flex-col gap-4 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[50px] h-[27px] md:w-[78px] md:h-[40px] md:rounded-[20px] rounded-[10px] bg-white absolute inset-0 z-[2] flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] leading-[15px] md:text-[16px] md:leading-[18px] text-mainBlack font-montserrat font-normal",
                                                children: "-15%"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/stock.jsx",
                                                lineNumber: 53,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/stock.jsx",
                                            lineNumber: 52,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 right-2 md:top-5 md:right-5 z-[2]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-[22px] h-[22px] md:w-[34px] md:h-[34px] rounded-full bg-[#DBE0D233]/20 flex items-center justify-center ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: "text-white w-[14px] md:w-[20px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/stock.jsx",
                                                    lineNumber: 62,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/stock.jsx",
                                                lineNumber: 59,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/stock.jsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-[157px] md:h-[325px] relative md:rounded-[20px] rounded-[10px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                image: "/images/vit.webp",
                                                title: "vitrina",
                                                fill: true,
                                                className1: "object-cover md:rounded-[20px] rounded-[10px]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/stock.jsx",
                                                lineNumber: 66,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/stock.jsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] leading-[16px] polo:text-[18px] polo:leading-[24px] text-mainBlack uppercase font-montserrat font-semibold",
                                            children: "Кремовый букет пионовидных роз"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/stock.jsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex gap-[12px] md:items-center md:flex-row flex-col md:justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1 items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[18px] leading-[24px] text-mainBlack font-montserrat  font-semibold",
                                                            children: "4 290 ₽"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/stock.jsx",
                                                            lineNumber: 78,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[12px] leading-[16px] text-white px-1 bg-[#EE2A23] line-through font-montserrat  font-semibold",
                                                            children: "4 890 ₽"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/_components/stock.jsx",
                                                            lineNumber: 81,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(root)/_components/stock.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `w-full xs:w-[155px] h-[50px] md:h-[54px] md:rounded-[20px] rounded-[10px] text-white bg-[#7D6064] md:bg-[#F5E7E7] font-montserrat md:text-mainBlack ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} text-[14px] leading-[18px] md:text-[18px] md:leading-[24px] font-normal hover:bg-mainBlack hover:text-mainWhite transition-all ease-in-out duration-500`,
                                                    children: "Купить"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/stock.jsx",
                                                    lineNumber: 85,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/_components/stock.jsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/stock.jsx",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, this)
                            }, c, false, {
                                fileName: "[project]/app/(root)/_components/stock.jsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/stock.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} absolute top-[162.5px] md:flex hidden left-6 md:left-[-70px] transform -translate-y-1/2 bg-white z-[69] p-2 rounded-full text-mainBlack`,
                        onClick: ()=>swiperRef.current?.slidePrev(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/stock.jsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/stock.jsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} absolute top-[162.5px] md:flex hidden right-6 md:right-[-70px] transform -translate-y-1/2 bg-white z-[69] p-2 rounded-full text-mainBlack`,
                        onClick: ()=>swiperRef.current?.slideNext(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/stock.jsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/stock.jsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/_components/stock.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/_components/stock.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Stock;
}}),
"[project]/app/(root)/_components/popular.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/translate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(root)/_components/helpers/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(root)/_components/image.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/usehooks-ts/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const Popular = ()=>{
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 768px)");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "st:w-[1508px] mx-auto w-[94%] flex flex-col gap-[30px] polo:gap-[50px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "xl:w-[1360px] mx-auto w-full flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[28px] leading-[32px] polo:text-[48px] polo:leading-[52px] font-semibold text-mainBlack font-montserrat",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("popular.p1")
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/popular.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `text-mainBlack font-montserrat polo:flex hidden text-[15px] font-normal leading-[18px] ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active}`,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("vitrina.btn")
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/popular.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[38px] h-[38px] relative polo:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: "/images/ar.svg",
                            fill: true,
                            title: "ar",
                            className1: "w-full h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/popular.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/popular.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/_components/popular.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "xl:w-[1360px] mx-auto w-full relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                        onSwiper: (swiper)=>swiperRef.current = swiper,
                        modules: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                        ],
                        loop: true,
                        slidesPerView: isMobile ? 2 : 4,
                        spaceBetween: 20,
                        className: "w-full h-full z-[3]",
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10
                        ].map((c)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex flex-col gap-4 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[47px] h-[27px] md:w-[75px] md:h-[40px] md:rounded-[20px] rounded-[10px] bg-[#FADEED] absolute inset-0 z-[2] flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] leading-[15px] md:text-[16px] md:leading-[18px] text-mainBlack font-montserrat font-semibold",
                                                children: "Top"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/popular.jsx",
                                                lineNumber: 53,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/popular.jsx",
                                            lineNumber: 52,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 right-2 md:top-5 md:right-5 z-[2]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-[22px] h-[22px] md:w-[34px] md:h-[34px] rounded-full bg-[#DBE0D233]/20 flex items-center justify-center ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: "text-white w-[14px] md:w-[20px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/popular.jsx",
                                                    lineNumber: 62,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/popular.jsx",
                                                lineNumber: 59,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/popular.jsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-[157px] md:h-[325px] relative md:rounded-[20px] rounded-[10px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                image: "/images/vit.webp",
                                                title: "vitrina",
                                                fill: true,
                                                className1: "object-cover md:rounded-[20px] rounded-[10px]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/popular.jsx",
                                                lineNumber: 66,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/popular.jsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] leading-[16px] polo:text-[18px] polo:leading-[24px] text-mainBlack uppercase font-montserrat font-semibold",
                                            children: "Кремовый букет пионовидных роз"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/_components/popular.jsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex gap-[12px] md:items-center md:flex-row flex-col md:justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[18px] leading-[24px] text-mainBlack font-montserrat  font-semibold",
                                                    children: "4 290 ₽"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/popular.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `w-full xs:w-[155px] h-[50px] md:h-[54px] md:rounded-[20px] rounded-[10px] text-white bg-[#7D6064] md:bg-[#F5E7E7] font-montserrat md:text-mainBlack ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} text-[14px] leading-[18px] md:text-[18px] md:leading-[24px] font-normal hover:bg-mainBlack hover:text-mainWhite transition-all ease-in-out duration-500`,
                                                    children: "Купить"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/popular.jsx",
                                                    lineNumber: 80,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/_components/popular.jsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/_components/popular.jsx",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, this)
                            }, c, false, {
                                fileName: "[project]/app/(root)/_components/popular.jsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/popular.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} absolute top-[162.5px] md:flex hidden left-6 md:left-[-70px] transform -translate-y-1/2 bg-white z-[69] p-2 rounded-full text-mainBlack`,
                        onClick: ()=>swiperRef.current?.slidePrev(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/popular.jsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/popular.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} absolute top-[162.5px] md:flex hidden right-6 md:right-[-70px] transform -translate-y-1/2 bg-white z-[69] p-2 rounded-full text-mainBlack`,
                        onClick: ()=>swiperRef.current?.slideNext(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/popular.jsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/_components/popular.jsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/_components/popular.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/_components/popular.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Popular;
}}),
"[project]/app/(root)/_components/balloon.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(root)/_components/image.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(root)/_components/helpers/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/translate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const Balloon = ()=>{
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "xl:w-[1360px] mx-auto w-[94%] relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full grid grid-cols-1 desktop:grid-cols-2 gap-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[540px] rounded-[10px] lg:rounded-[20px] bg-[#E1E8F6] relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: "/images/ball.webp",
                            title: "balloon",
                            fill: true,
                            className1: "w-full desktop:flex rounded-[10px] lg:rounded-[20px]  hidden h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/balloon.jsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: "/images/b22.webp",
                            title: "balloon",
                            fill: true,
                            className1: "w-full desktop:hidden rounded-[10px] lg:rounded-[20px]  h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/balloon.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "absolute top-[32px] desktop:top-[36%] left-[20px] lg:left-[50px] max-w-[218px] lg:max-w-[324px] text-[32px] leading-[38px] lg:text-[48px] lg:leading-[56px] font-semibold text-mainBlack font-montserrat",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("ball.p1")
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/balloon.jsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center absolute bottom-[30px] lg:bottom-[50px] left-[20px] text-mainBlack lg:left-[50px] gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[18px] leading-[24px]  uppercase font-semibold font-montserrat",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$translate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("ball.p2")
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/_components/balloon.jsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: 24,
                                    height: 12,
                                    viewBox: "0 0 24 12",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M23.5303 6.53033C23.8232 6.23744 23.8232 5.76257 23.5303 5.46967L18.7574 0.696701C18.4645 0.403807 17.9896 0.403807 17.6967 0.696701C17.4038 0.989594 17.4038 1.46447 17.6967 1.75736L21.9393 6L17.6967 10.2426C17.4038 10.5355 17.4038 11.0104 17.6967 11.3033C17.9896 11.5962 18.4645 11.5962 18.7574 11.3033L23.5303 6.53033ZM-6.55671e-08 6.75L23 6.75L23 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z",
                                        fill: "#453C3C"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/_components/balloon.jsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/_components/balloon.jsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(root)/_components/balloon.jsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(root)/_components/balloon.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full relative min-h-[540px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                            onSwiper: (swiper)=>swiperRef.current = swiper,
                            modules: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                            ],
                            loop: true,
                            slidesPerView: 2,
                            spaceBetween: 20,
                            className: "w-full h-full z-[3]",
                            children: [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10
                            ].map((c)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex flex-col gap-4 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-[50px] h-[27px] md:w-[75px] md:h-[40px] rounded-br-[10px] rounded-tl-[10px] md:rounded-br-[20px] md:rounded-tl-[20px] bg-[#fff] absolute inset-0 z-[2] flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[13px] md:text-[16px] md:leading-[18px] text-mainBlack font-montserrat font-normal md:font-semibold",
                                                    children: "-15%"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/balloon.jsx",
                                                    lineNumber: 69,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/balloon.jsx",
                                                lineNumber: 68,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-2 right-2 md:top-5 md:right-5 z-[2]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-[22px] h-[22px] md:w-[34px] md:h-[34px] rounded-full bg-[#DBE0D233]/20 flex items-center justify-center ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                        className: "text-white w-[14px] md:w-[20px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/_components/balloon.jsx",
                                                        lineNumber: 78,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/balloon.jsx",
                                                    lineNumber: 75,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/balloon.jsx",
                                                lineNumber: 74,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-[157px] md:h-[325px] relative md:rounded-[20px] rounded-[10px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$image$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    image: "/images/b2.webp",
                                                    title: "vitrina",
                                                    fill: true,
                                                    className1: "object-cover md:rounded-[20px] rounded-[10px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/_components/balloon.jsx",
                                                    lineNumber: 82,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/balloon.jsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] leading-[16px] polo:text-[18px] polo:leading-[24px] text-mainBlack uppercase font-montserrat font-semibold",
                                                children: "Кремовый букет пионовидных роз"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/_components/balloon.jsx",
                                                lineNumber: 89,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full flex lg:items-center justify-between lg:flex-row flex-col gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-3 lg:gap-1 xl:items-center xl:flex-row flex-row lg:flex-col",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[18px] leading-[24px] text-mainBlack font-montserrat  font-semibold",
                                                                children: "4 290 ₽"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/_components/balloon.jsx",
                                                                lineNumber: 94,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[12px] leading-[16px] text-white px-1 bg-[#EE2A23] flex items-center justify-center line-through font-montserrat  font-semibold",
                                                                children: "4 890 ₽"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/_components/balloon.jsx",
                                                                lineNumber: 97,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(root)/_components/balloon.jsx",
                                                        lineNumber: 93,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `w-full xs:w-[155px] h-[50px] md:h-[54px] md:rounded-[20px] rounded-[10px] text-white bg-[#7D6064] md:bg-[#F5E7E7] font-montserrat md:text-mainBlack ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} text-[14px] leading-[18px] md:text-[18px] md:leading-[24px] font-normal hover:bg-mainBlack hover:text-mainWhite transition-all ease-in-out duration-500`,
                                                        children: "Купить"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/_components/balloon.jsx",
                                                        lineNumber: 101,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(root)/_components/balloon.jsx",
                                                lineNumber: 92,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/_components/balloon.jsx",
                                        lineNumber: 66,
                                        columnNumber: 19
                                    }, this)
                                }, c, false, {
                                    fileName: "[project]/app/(root)/_components/balloon.jsx",
                                    lineNumber: 65,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/balloon.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} absolute bottom-0 left-6 md:flex hidden md:left-[20px] transform -translate-y-1/2 bg-white z-[69] p-2 rounded-full text-mainBlack`,
                            onClick: ()=>swiperRef.current?.slidePrev(),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/app/(root)/_components/balloon.jsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/balloon.jsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$_components$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].active} absolute bottom-0 left-6 md:flex hidden md:left-[80px] transform -translate-y-1/2 bg-white z-[69] p-2 rounded-full text-mainBlack`,
                            onClick: ()=>swiperRef.current?.slideNext(),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/app/(root)/_components/balloon.jsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/_components/balloon.jsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(root)/_components/balloon.jsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(root)/_components/balloon.jsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(root)/_components/balloon.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Balloon;
}}),
"[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_d67b88._.js.map