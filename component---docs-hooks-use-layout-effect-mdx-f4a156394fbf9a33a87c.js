(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{v3hI:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return s}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var o=n("/FXl"),r=n("TjRS"),a=n("H/AV");n("aD51");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/hooks/useLayoutEffect.mdx"}});var u={_frontmatter:c},i=r.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(i,f({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"useLayoutEffect 和 useEffect 的区别在于执行时间上。useEffect 等到浏览器渲染完成后执行，但是 useLayoutEffect 不等到浏览器 paint 就直接把对DOM的修改应用上去。\n过程(2) 执行 useLayoutEffect 过程(3) 执行 useEffect。通常我们都不会对 layout 做操作，因此让浏览器先渲染页面，用户看到，再执行 useEffect 做一些做副作用请求等。"),Object(o.b)("pre",null,Object(o.b)("code",f({parentName:"pre"},{}),"虚拟DOM -----(1)-----\x3e 真实DOM -------(2)--------\x3e 浏览器Paint ------(3)-------\x3e 人眼看到\n")),Object(o.b)(a.a,{mdxType:"Demo"}))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/hooks/useLayoutEffect.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-hooks-use-layout-effect-mdx-f4a156394fbf9a33a87c.js.map