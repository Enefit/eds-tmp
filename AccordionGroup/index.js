"use client";import e,{createContext as t,useState as r,useEffect as n}from"react";var o,s={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/o=s,function(){var e={}.hasOwnProperty;function t(){for(var r=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var s=typeof o;if("string"===s||"number"===s)r.push(o);else if(Array.isArray(o)){if(o.length){var i=t.apply(null,o);i&&r.push(i)}}else if("object"===s){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)e.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}o.exports?(t.default=t,o.exports=t):window.classNames=t}();var i=s.exports,l="accordion-group__e7g2K__0-1-44";const a=t(null),c=t=>{const{mode:o="single",selectedKeys:s=[],children:c,className:p}=t,[u,d]=r(s),f={mode:o,selectedKeys:u,setSelectedKeys:d};n((()=>{"single"===o&&s.length>1&&d([s[0]])}),[]);const g=i(l,p);return e.createElement("div",{className:g},e.createElement(a.Provider,{value:f},c))};export{c as AccordionGroup};
//# sourceMappingURL=index.js.map
