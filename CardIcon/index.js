"use client";import e,{useRef as t,useMemo as n,useCallback as r,useEffect as i,useState as o,useContext as a,forwardRef as s}from"react";var l="base__bKnql__0-1-44";const u=({className:t,children:n})=>e.createElement("div",{className:`${l} ${t||""}`},n);var c="base__ym4Ti__0-1-44";const d=({children:t})=>e.createElement("div",{className:c},t);var p,g={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/p=g,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if("string"===o||"number"===o)n.push(i);else if(Array.isArray(i)){if(i.length){var a=t.apply(null,i);a&&n.push(a)}}else if("object"===o){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var s in i)e.call(i,s)&&i[s]&&n.push(s)}}}return n.join(" ")}p.exports?(t.default=t,p.exports=t):window.classNames=t}();var v=g.exports,f="base__xQc03__0-1-44",m="grow__6FXF4__0-1-44";const h=({children:t,grow:n})=>e.createElement("div",{className:v(f,{[m]:n})},t);var y="base__QLfUP__0-1-44",T="gapSmall__7Ek-k__0-1-44",b="center__zbSlm__0-1-44";const E=({children:t,align:n,gap:r="medium",className:i})=>e.createElement("div",{className:v(y,i,{[b]:"center"===n,[T]:"small"===r})},t);var _={};const P=({className:t,children:n})=>e.createElement("footer",{className:v(_.base,t)},n),w=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px"),L=({mt:e,mb:t,my:n})=>({marginTop:void 0!==e?w(e):void 0!==n?w(n):void 0,marginBottom:void 0!==t?w(t):void 0!==n?w(n):void 0});function x(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}var M={"heading-h1":"heading-h1__00OVp__0-1-44","heading-h2":"heading-h2__uf8XO__0-1-44","heading-h3":"heading-h3__b58IP__0-1-44","heading-h4":"heading-h4__x0dIm__0-1-44","heading-h5":"heading-h5__dHW8C__0-1-44","heading-h6":"heading-h6__FSif0__0-1-44","heading-display":"heading-display__1B20E__0-1-44","heading-leadtext":"heading-leadtext__fbf5X__0-1-44","heading-subheadline":"heading-subheadline__xgXDJ__0-1-44","text-p-small":"text-p-small__U5YeB__0-1-44","text-p-default":"text-p-default__T3Gv7__0-1-44","text-p-large":"text-p-large__k4P5K__0-1-44","text-line-tiny":"text-line-tiny__IdKxY__0-1-44","text-line-small":"text-line-small__VDnxz__0-1-44","text-line-default":"text-line-default__HHLev__0-1-44","text-line-large":"text-line-large__zY6Xt__0-1-44","text-list-default":"text-list-default__9dn8h__0-1-44","label-tiny":"label-tiny__fwERw__0-1-44","label-small":"label-small__7hSFb__0-1-44","label-default":"label-default__TzEjW__0-1-44","label-large":"label-large__Xe0s7__0-1-44","text-italic":"text-italic__9j6-k__0-1-44","text-underline":"text-underline__-idVq__0-1-44","text-uppercase":"text-uppercase__zT285__0-1-44","text-400":"text-400__veahz__0-1-44","text-600":"text-600__SOu9h__0-1-44"};const S=({id:t,variant:n,as:r,italic:i=!1,underline:o=!1,weight:a="600",uppercase:s=!1,children:l,className:u,dangerouslySetInnerHTML:c,mt:d,mb:p,my:g,...v})=>{const f=r||x(n),m=`\n        ${M[`heading-${n}`]}\n        ${u}\n        ${i?M["text-italic"]:""}\n        ${o?M["text-underline"]:""}\n        ${a?M[`text-${a}`]:""}\n        ${s?M["text-uppercase"]:""}\n    `,h=L({mt:d,mb:p,my:g});return c?e.createElement(f,{id:t,className:m,style:{...h},dangerouslySetInnerHTML:c,...v}):e.createElement(f,{id:t,className:m,style:{...h},...v},l)},k=({variant:t="p",as:n,size:r="default",italic:i=!1,underline:o=!1,weight:a="400",uppercase:s=!1,children:l,className:u,dangerouslySetInnerHTML:c,mt:d,mb:p,my:g,...v})=>{const f=n||x(t),m=`\n        ${M[`text-${t}-${r}`]}\n        ${u}\n        ${i?M["text-italic"]:""}\n        ${o?M["text-underline"]:""}\n        ${a?M[`text-${a}`]:""}\n        ${s?M["text-uppercase"]:""}\n    `,h=L({mt:d,mb:p,my:g});return c?e.createElement(f,{className:m,dangerouslySetInnerHTML:c,style:{...h},...v}):e.createElement(f,{className:m,style:{...h},...v},l)};var K="base__2qX17__0-1-44";const F=({className:t,title:n,...r})=>e.createElement(S,{variant:"h5",as:"h3",className:v(K,t),...r},n);var N="base__XXFx4__0-1-44",O="date__fJsOL__0-1-44";const C=({title:t,className:n,date:r,children:i})=>e.createElement("header",{className:`${N} ${n||""}`},i,e.createElement(F,{title:t}),r&&e.createElement(k,{variant:"line",size:"small"},e.createElement("time",{className:O,dateTime:r},r)));function D(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=D(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function I(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=D(e))&&(r&&(r+=" "),r+=t);return r}const H="undefined"!=typeof document?e.useLayoutEffect:()=>{};function A(e){const n=t(null);return H((()=>{n.current=e}),[e]),r(((...e)=>{const t=n.current;return null==t?void 0:t(...e)}),[])}let R=new Map;function $(e,t){if(e===t)return e;let n=R.get(e);if(n)return n(t),t;let r=R.get(t);return r?(r(e),e):t}function W(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}const z=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},U=e=>{if(e&&"window"in e&&e.window===e)return e;return z(e).defaultView||window};function X(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],i=r[e];"function"==typeof n&&"function"==typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=W(n,i):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof n||"string"!=typeof i?"id"===e&&n&&i?t.id=$(n,i):t[e]=void 0!==i?i:n:t[e]=I(n,i)}}return t}const V=new Set(["id"]),B=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),j=new Set(["href","target","rel","download","ping","referrerPolicy"]),G=/^(data-.*)$/;function Y(e){if(function(){if(null==q){q=!1;try{document.createElement("div").focus({get preventScroll(){return q=!0,!0}})}catch(e){}}return q}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let q=null;function J(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent))}function Q(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function Z(){return Q(/^Mac/i)}function ee(){return Q(/^iPad/i)||Z()&&navigator.maxTouchPoints>1}function te(){return Q(/^iPhone/i)||ee()}function ne(){return J(/AppleWebKit/i)&&!J(/Chrome/i)}function re(){return J(/Android/i)}function ie(e,t,n=!0){var r,i;let{metaKey:o,ctrlKey:a,altKey:s,shiftKey:l}=t;J(/Firefox/i)&&(null===(i=window.event)||void 0===i||null===(r=i.type)||void 0===r?void 0:r.startsWith("key"))&&"_blank"===e.target&&(Z()?o=!0:a=!0);let u=ne()&&Z()&&!ee()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:o,ctrlKey:a,altKey:s,shiftKey:l}):new MouseEvent("click",{metaKey:o,ctrlKey:a,altKey:s,shiftKey:l,bubbles:!0,cancelable:!0});ie.isOpening=n,Y(e),e.dispatchEvent(u),ie.isOpening=!1}ie.isOpening=!1;let oe=new Map,ae=new Set;function se(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let r=oe.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),oe.delete(n.target)),0===oe.size)){for(let e of ae)e();ae.clear()}};document.body.addEventListener("transitionrun",(n=>{if(!e(n)||!n.target)return;let r=oe.get(n.target);r||(r=new Set,oe.set(n.target,r),n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)})),document.body.addEventListener("transitionend",t)}function le(e){requestAnimationFrame((()=>{0===oe.size?e():ae.add(e)}))}function ue(e,t){H((()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}}))}function ce(e){return!(0!==e.mozInputSource||!e.isTrusted)||(re()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}function de(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function pe(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function ge(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,de(e,t,"set"),n),n}"undefined"!=typeof document&&("loading"!==document.readyState?se():document.addEventListener("DOMContentLoaded",se));let ve="default",fe="",me=new WeakMap;function he(e){if(te()){if("default"===ve){const t=z(e);fe=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}ve="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(me.set(e,e.style.userSelect),e.style.userSelect="none")}function ye(e){if(te()){if("disabled"!==ve)return;ve="restoring",setTimeout((()=>{le((()=>{if("restoring"===ve){const t=z(e);"none"===t.documentElement.style.webkitUserSelect&&(t.documentElement.style.webkitUserSelect=fe||""),fe="",ve="default"}}))}),300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&me.has(e)){let t=me.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),me.delete(e)}}const Te=e.createContext({register:()=>{}});Te.displayName="PressResponderContext";var be=new WeakMap;class Ee{continuePropagation(){ge(this,be,!1)}get shouldStopPropagation(){return function(e,t){return t.get?t.get.call(e):t.value}(e=this,de(e,be,"get"));var e}constructor(e,t,n){pe(this,be,{writable:!0,value:void 0}),ge(this,be,!0),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey}}const _e=Symbol("linkClicked");function Pe(e){let{onPress:s,onPressChange:l,onPressStart:u,onPressEnd:c,onPressUp:d,isDisabled:p,isPressed:g,preventFocusOnPress:v,shouldCancelOnPointerExit:f,allowTextSelectionOnPress:m,ref:h,...y}=function(e){let t=a(Te);if(t){let{register:n,...r}=t;e=X(r,e),n()}return ue(t,e.ref),e}(e),[T,b]=o(!1),E=t({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:_,removeAllGlobalListeners:P}=function(){let e=t(new Map),n=r(((t,n,r,i)=>{let o=(null==i?void 0:i.once)?(...t)=>{e.current.delete(r),r(...t)}:r;e.current.set(r,{type:n,eventTarget:t,fn:o,options:i}),t.addEventListener(n,r,i)}),[]),o=r(((t,n,r,i)=>{var o;let a=(null===(o=e.current.get(r))||void 0===o?void 0:o.fn)||r;t.removeEventListener(n,a,i),e.current.delete(r)}),[]),a=r((()=>{e.current.forEach(((e,t)=>{o(e.eventTarget,e.type,t,e.options)}))}),[o]);return i((()=>a),[a]),{addGlobalListener:n,removeGlobalListener:o,removeAllGlobalListeners:a}}(),w=A(((e,t)=>{let n=E.current;if(p||n.didFirePressStart)return!1;let r=!0;if(n.isTriggeringEvent=!0,u){let n=new Ee("pressstart",t,e);u(n),r=n.shouldStopPropagation}return l&&l(!0),n.isTriggeringEvent=!1,n.didFirePressStart=!0,b(!0),r})),L=A(((e,t,n=!0)=>{let r=E.current;if(!r.didFirePressStart)return!1;r.ignoreClickAfterPress=!0,r.didFirePressStart=!1,r.isTriggeringEvent=!0;let i=!0;if(c){let n=new Ee("pressend",t,e);c(n),i=n.shouldStopPropagation}if(l&&l(!1),b(!1),s&&n&&!p){let n=new Ee("press",t,e);s(n),i&&(i=n.shouldStopPropagation)}return r.isTriggeringEvent=!1,i})),x=A(((e,t)=>{let n=E.current;if(p)return!1;if(d){n.isTriggeringEvent=!0;let r=new Ee("pressup",t,e);return d(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0})),M=A((e=>{let t=E.current;t.isPressed&&t.target&&(t.isOverTarget&&null!=t.pointerType&&L(Me(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,P(),m||ye(t.target))})),S=A((e=>{f&&M(e)})),k=n((()=>{let e=E.current,t={onKeyDown(t){if(Le(t.nativeEvent,t.currentTarget)&&t.currentTarget.contains(t.target)){var r;Ke(t.target,t.key)&&t.preventDefault();let i=!0;if(!e.isPressed&&!t.repeat){e.target=t.currentTarget,e.isPressed=!0,i=w(t,"keyboard");let r=t.currentTarget,o=t=>{Le(t,r)&&!t.repeat&&r.contains(t.target)&&e.target&&x(Me(e.target,t),"keyboard")};_(z(t.currentTarget),"keyup",W(o,n),!0)}i&&t.stopPropagation(),t.metaKey&&Z()&&(null===(r=e.metaKeyEvents)||void 0===r||r.set(t.key,t.nativeEvent))}else"Meta"===t.key&&(e.metaKeyEvents=new Map)},onClick(t){if((!t||t.currentTarget.contains(t.target))&&t&&0===t.button&&!e.isTriggeringEvent&&!ie.isOpening){let n=!0;if(p&&t.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&!e.isPressed&&("virtual"===e.pointerType||ce(t.nativeEvent))){p||v||Y(t.currentTarget);let e=w(t,"virtual"),r=x(t,"virtual"),i=L(t,"virtual");n=e&&r&&i}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,n&&t.stopPropagation()}}},n=t=>{var n;if(e.isPressed&&e.target&&Le(t,e.target)){var r;Ke(t.target,t.key)&&t.preventDefault();let n=t.target;L(Me(e.target,t),"keyboard",e.target.contains(n)),P(),"Enter"!==t.key&&we(e.target)&&e.target.contains(n)&&!t[_e]&&(t[_e]=!0,ie(e.target,t,!1)),e.isPressed=!1,null===(r=e.metaKeyEvents)||void 0===r||r.delete(t.key)}else if("Meta"===t.key&&(null===(n=e.metaKeyEvents)||void 0===n?void 0:n.size)){var i;let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())null===(i=e.target)||void 0===i||i.dispatchEvent(new KeyboardEvent("keyup",n))}};if("undefined"!=typeof PointerEvent){t.onPointerDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(o=t.nativeEvent,!re()&&0===o.width&&0===o.height||1===o.width&&1===o.height&&0===o.pressure&&0===o.detail&&"mouse"===o.pointerType)return void(e.pointerType="virtual");var o;ke(t.currentTarget)&&t.preventDefault(),e.pointerType=t.pointerType;let a=!0;e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,p||v||Y(t.currentTarget),m||he(e.target),a=w(t,e.pointerType),_(z(t.currentTarget),"pointermove",n,!1),_(z(t.currentTarget),"pointerup",r,!1),_(z(t.currentTarget),"pointercancel",i,!1)),a&&t.stopPropagation()},t.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(ke(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},t.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&Se(t,t.currentTarget)&&x(t,e.pointerType||t.pointerType)};let n=t=>{t.pointerId===e.activePointerId&&(e.target&&Se(t,e.target)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,w(Me(e.target,t),e.pointerType)):e.target&&e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,L(Me(e.target,t),e.pointerType,!1),S(t)))},r=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&e.target&&(Se(t,e.target)&&null!=e.pointerType?L(Me(e.target,t),e.pointerType):e.isOverTarget&&null!=e.pointerType&&L(Me(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,P(),m||ye(e.target))},i=e=>{M(e)};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&M(e)}}else{t.onMouseDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(ke(t.currentTarget)&&t.preventDefault(),e.ignoreEmulatedMouseEvents)return void t.stopPropagation();e.isPressed=!0,e.isOverTarget=!0,e.target=t.currentTarget,e.pointerType=ce(t.nativeEvent)?"virtual":"mouse",p||v||Y(t.currentTarget),w(t,e.pointerType)&&t.stopPropagation(),_(z(t.currentTarget),"mouseup",n,!1)},t.onMouseEnter=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!0,n=w(t,e.pointerType)),n&&t.stopPropagation()},t.onMouseLeave=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!1,n=L(t,e.pointerType,!1),S(t)),n&&t.stopPropagation()},t.onMouseUp=t=>{t.currentTarget.contains(t.target)&&(e.ignoreEmulatedMouseEvents||0!==t.button||x(t,e.pointerType||"mouse"))};let n=t=>{0===t.button&&(e.isPressed=!1,P(),e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:(e.target&&Se(t,e.target)&&null!=e.pointerType?L(Me(e.target,t),e.pointerType):e.target&&e.isOverTarget&&null!=e.pointerType&&L(Me(e.target,t),e.pointerType,!1),e.isOverTarget=!1))};t.onTouchStart=t=>{if(!t.currentTarget.contains(t.target))return;let n=function(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}(t.nativeEvent);n&&(e.activePointerId=n.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=t.currentTarget,e.pointerType="touch",p||v||Y(t.currentTarget),m||he(e.target),w(t,e.pointerType)&&t.stopPropagation(),_(U(t.currentTarget),"scroll",r,!0))},t.onTouchMove=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=xe(t.nativeEvent,e.activePointerId),r=!0;n&&Se(n,t.currentTarget)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,r=w(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,r=L(t,e.pointerType,!1),S(t)),r&&t.stopPropagation()},t.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=xe(t.nativeEvent,e.activePointerId),r=!0;n&&Se(n,t.currentTarget)&&null!=e.pointerType?(x(t,e.pointerType),r=L(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(r=L(t,e.pointerType,!1)),r&&t.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,e.target&&!m&&ye(e.target),P()},t.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&M(t))};let r=t=>{e.isPressed&&t.target.contains(e.target)&&M({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&M(e)}}return t}),[_,p,v,P,m,M,S,L,w,x]);return i((()=>()=>{var e;m||ye(null!==(e=E.current.target)&&void 0!==e?e:void 0)}),[m]),{isPressed:g||T,pressProps:X(y,k)}}function we(e){return"A"===e.tagName&&e.hasAttribute("href")}function Le(e,t){const{key:n,code:r}=e,i=t,o=i.getAttribute("role");return!("Enter"!==n&&" "!==n&&"Spacebar"!==n&&"Space"!==r||i instanceof U(i).HTMLInputElement&&!Ne(i,n)||i instanceof U(i).HTMLTextAreaElement||i.isContentEditable||("link"===o||!o&&we(i))&&"Enter"!==n)}function xe(e,t){const n=e.changedTouches;for(let e=0;e<n.length;e++){const r=n[e];if(r.identifier===t)return r}return null}function Me(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function Se(e,t){let n=t.getBoundingClientRect(),r=function(e){let t=0,n=0;return void 0!==e.width?t=e.width/2:void 0!==e.radiusX&&(t=e.radiusX),void 0!==e.height?n=e.height/2:void 0!==e.radiusY&&(n=e.radiusY),{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}(e);return o=r,!((i=n).left>o.right||o.left>i.right||i.top>o.bottom||o.top>i.bottom);var i,o}function ke(e){return!(e instanceof HTMLElement&&e.hasAttribute("draggable"))}function Ke(e,t){return e instanceof HTMLInputElement?!Ne(e,t):e instanceof HTMLButtonElement?"submit"!==e.type&&"reset"!==e.type:!we(e)}const Fe=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Ne(e,t){return"checkbox"===e.type||"radio"===e.type?" "===t:Fe.has(e.type)}class Oe{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function Ce(e){let n=t({isFocused:!1,observer:null});H((()=>{const e=n.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let i=A((t=>{null==e||e(t)}));return r((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){n.current.isFocused=!0;let t=e.target,r=e=>{n.current.isFocused=!1,t.disabled&&i(new Oe("blur",e)),n.current.observer&&(n.current.observer.disconnect(),n.current.observer=null)};t.addEventListener("focusout",r,{once:!0}),n.current.observer=new MutationObserver((()=>{if(n.current.isFocused&&t.disabled){var e;null===(e=n.current.observer)||void 0===e||e.disconnect();let r=t===document.activeElement?null:document.activeElement;t.dispatchEvent(new FocusEvent("blur",{relatedTarget:r})),t.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:r}))}})),n.current.observer.observe(t,{attributes:!0,attributeFilter:["disabled"]})}}),[i])}function De(e){let{isDisabled:t,onFocus:n,onBlur:i,onFocusChange:o}=e;const a=r((e=>{if(e.target===e.currentTarget)return i&&i(e),o&&o(!1),!0}),[i,o]),s=Ce(a),l=r((e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(n&&n(e),o&&o(!0),s(e))}),[o,n,s]);return{focusProps:{onFocus:!t&&(n||o||i)?l:void 0,onBlur:t||!i&&!o?void 0:a}}}let Ie=null,He=new Set,Ae=new Map,Re=!1,$e=!1;const We={Tab:!0,Escape:!0};function ze(e,t){for(let n of He)n(e,t)}function Ue(e){Re=!0,function(e){return!(e.metaKey||!Z()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(Ie="keyboard",ze("keyboard",e))}function Xe(e){Ie="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(Re=!0,ze("pointer",e))}function Ve(e){ce(e)&&(Re=!0,Ie="virtual")}function Be(e){e.target!==window&&e.target!==document&&(Re||$e||(Ie="virtual",ze("virtual",e)),Re=!1,$e=!1)}function je(){Re=!1,$e=!0}function Ge(e){if("undefined"==typeof window||Ae.get(U(e)))return;const t=U(e),n=z(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){Re=!0,r.apply(this,arguments)},n.addEventListener("keydown",Ue,!0),n.addEventListener("keyup",Ue,!0),n.addEventListener("click",Ve,!0),t.addEventListener("focus",Be,!0),t.addEventListener("blur",je,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",Xe,!0),n.addEventListener("pointermove",Xe,!0),n.addEventListener("pointerup",Xe,!0)):(n.addEventListener("mousedown",Xe,!0),n.addEventListener("mousemove",Xe,!0),n.addEventListener("mouseup",Xe,!0)),t.addEventListener("beforeunload",(()=>{Ye(e)}),{once:!0}),Ae.set(t,{focus:r})}const Ye=(e,t)=>{const n=U(e),r=z(e);t&&r.removeEventListener("DOMContentLoaded",t),Ae.has(n)&&(n.HTMLElement.prototype.focus=Ae.get(n).focus,r.removeEventListener("keydown",Ue,!0),r.removeEventListener("keyup",Ue,!0),r.removeEventListener("click",Ve,!0),n.removeEventListener("focus",Be,!0),n.removeEventListener("blur",je,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",Xe,!0),r.removeEventListener("pointermove",Xe,!0),r.removeEventListener("pointerup",Xe,!0)):(r.removeEventListener("mousedown",Xe,!0),r.removeEventListener("mousemove",Xe,!0),r.removeEventListener("mouseup",Xe,!0)),Ae.delete(n))};function qe(){return"pointer"!==Ie}"undefined"!=typeof document&&function(e){const t=z(e);let n;"loading"!==t.readyState?Ge(e):(n=()=>{Ge(e)},t.addEventListener("DOMContentLoaded",n))}();const Je=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Qe(e,t,n){Ge(),i((()=>{let t=(t,r)=>{(function(e,t,n){var r;const i="undefined"!=typeof window?U(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,o="undefined"!=typeof window?U(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,a="undefined"!=typeof window?U(null==n?void 0:n.target).HTMLElement:HTMLElement,s="undefined"!=typeof window?U(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof i&&!Je.has(null==n||null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof o||(null==n?void 0:n.target)instanceof a&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof s&&!We[n.key])})(!!(null==n?void 0:n.isTextInput),t,r)&&e(qe())};return He.add(t),()=>{He.delete(t)}}),t)}function Ze(e){if(!e)return;let t=!0;return n=>{let r={...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}};e(r),t&&n.stopPropagation()}}function et(e){const t=z(e);if("virtual"===Ie){let n=t.activeElement;le((()=>{t.activeElement===n&&e.isConnected&&Y(e)}))}else Y(e)}function tt(e,t){return!!e&&(!!t&&t.some((t=>t.contains(e))))}class nt{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let i=new rt({scopeRef:e});r.addChild(i),i.parent=r,this.fastMap.set(e,i),n&&(i.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&tt(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach((e=>n&&n.addChild(e)))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e;let t=new nt;var n;for(let r of this.traverse())t.addTreeNode(r.scopeRef,null!==(n=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null,r.nodeToRestore);return t}constructor(){this.fastMap=new Map,this.root=new rt({scopeRef:null}),this.fastMap.set(null,this.root)}}class rt{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}function it(e={}){let{autoFocus:n=!1,isTextInput:i,within:a}=e,s=t({isFocused:!1,isFocusVisible:n||qe()}),[l,u]=o(!1),[c,d]=o((()=>s.current.isFocused&&s.current.isFocusVisible)),p=r((()=>d(s.current.isFocused&&s.current.isFocusVisible)),[]),g=r((e=>{s.current.isFocused=e,u(e),p()}),[p]);Qe((e=>{s.current.isFocusVisible=e,p()}),[],{isTextInput:i});let{focusProps:v}=De({isDisabled:a,onFocusChange:g}),{focusWithinProps:f}=function(e){let{isDisabled:n,onBlurWithin:i,onFocusWithin:o,onFocusWithinChange:a}=e,s=t({isFocusWithin:!1}),l=r((e=>{s.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(s.current.isFocusWithin=!1,i&&i(e),a&&a(!1))}),[i,a,s]),u=Ce(l),c=r((e=>{s.current.isFocusWithin||document.activeElement!==e.target||(o&&o(e),a&&a(!0),s.current.isFocusWithin=!0,u(e))}),[o,a,u]);return n?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:c,onBlur:l}}}({isDisabled:!a,onFocusWithinChange:g});return{isFocused:l,isFocusVisible:c,focusProps:a?f:v}}new nt;let ot=e.createContext(null);function at(e,n){let{focusProps:r}=De(e),{keyboardProps:o}=function(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:Ze(e.onKeyDown),onKeyUp:Ze(e.onKeyUp)}}}(e),s=X(r,o),l=function(e){let t=a(ot)||{};ue(t,e);let{ref:n,...r}=t;return r}(n),u=e.isDisabled?{}:l,c=t(e.autoFocus);return i((()=>{c.current&&n.current&&et(n.current),c.current=!1}),[n]),{focusableProps:X({...s,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},u)}}function st(e,t){let n,{elementType:r="button",isDisabled:i,onPress:o,onPressStart:a,onPressEnd:s,onPressUp:l,onPressChange:u,preventFocusOnPress:c,allowFocusWhenDisabled:d,onClick:p,href:g,target:v,rel:f,type:m="button"}=e;n="button"===r?{type:m,disabled:i}:{role:"button",tabIndex:i?void 0:0,href:"a"===r&&i?void 0:g,target:"a"===r?v:void 0,type:"input"===r?m:void 0,disabled:"input"===r?i:void 0,"aria-disabled":i&&"input"!==r?i:void 0,rel:"a"===r?f:void 0};let{pressProps:h,isPressed:y}=Pe({onPressStart:a,onPressEnd:s,onPressChange:u,onPress:o,onPressUp:l,isDisabled:i,preventFocusOnPress:c,ref:t}),{focusableProps:T}=at(e,t);d&&(T.tabIndex=i?-1:T.tabIndex);let b=X(T,h,function(e,t={}){let{labelable:n,isLink:r,propNames:i}=t,o={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(V.has(t)||n&&B.has(t)||r&&j.has(t)||(null==i?void 0:i.has(t))||G.test(t))&&(o[t]=e[t]);return o}(e,{labelable:!0}));return{isPressed:y,buttonProps:X(n,b,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],onClick:e=>{p&&(p(e),console.warn("onClick is deprecated, please use onPress"))}})}}var lt="base__Oc6n-__0-1-44",ut="focus-ring__zSD0-__0-1-44";s(((r,i)=>{const{children:o,className:a}=r,s=function(e){const r=t(null);return n((()=>({get current(){return r.current},set current(t){r.current=t,"function"==typeof e?e(t):e&&(e.current=t)}})),[e])}(i),l=t(null),u=s||l,{buttonProps:c}=st(r,u),{isFocusVisible:d,focusProps:p}=it(),g=v(lt,a,{[ut]:d}),f=X(c,p);return e.createElement("button",{...f,ref:u,className:g},e.createElement(k,{variant:"line",size:"small"},o))})).displayName="CardTag";var ct="base__rjRhe__0-1-44",dt="supportive__Tw3JF__0-1-44";const pt=({className:t,text:n,variant:r="descriptive",...i})=>e.createElement(k,{className:v(ct,t,{[dt]:"supportive"===r}),...i},n);var gt="base__yN-p-__0-1-44";const vt=({className:t,children:n})=>e.createElement("div",{className:v(gt,t)},n);var ft="footer__0wClb__0-1-44";const mt=({title:t,description:n,icon:r,actions:i,className:o="",grow:a=!1})=>e.createElement(u,{className:o},e.createElement(E,{gap:"small"},e.createElement(C,{title:t},e.createElement(vt,null,r)),e.createElement(h,{grow:a},e.createElement(pt,{text:n})),i&&e.createElement(P,{className:ft},e.createElement(d,null,i))));export{mt as CardIcon};
//# sourceMappingURL=index.js.map
