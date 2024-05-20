"use client";import e,{useRef as t,useCallback as n,useEffect as r,useState as o}from"react";const i="undefined"!=typeof document?e.useLayoutEffect:()=>{};const s=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},u=e=>{if(e&&"window"in e&&e.window===e)return e;return s(e).defaultView||window};function a(){return e=/^Mac/i,"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform);var e,t}function d(){return e=/Android/i,"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent));var e,t}let c=new Map,l=new Set;function v(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let r=c.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),c.delete(n.target)),0===c.size)){for(let e of l)e();l.clear()}};document.body.addEventListener("transitionrun",(n=>{if(!e(n)||!n.target)return;let r=c.get(n.target);r||(r=new Set,c.set(n.target,r),n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)})),document.body.addEventListener("transitionend",t)}"undefined"!=typeof document&&("loading"!==document.readyState?v():document.addEventListener("DOMContentLoaded",v));e.createContext({register:()=>{}}).displayName="PressResponderContext";class f{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function p(e){let r=t({isFocused:!1,observer:null});i((()=>{const e=r.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let o=function(e){const r=t(null);return i((()=>{r.current=e}),[e]),n(((...e)=>{const t=r.current;return null==t?void 0:t(...e)}),[])}((t=>{null==e||e(t)}));return n((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){r.current.isFocused=!0;let t=e.target,n=e=>{r.current.isFocused=!1,t.disabled&&o(new f("blur",e)),r.current.observer&&(r.current.observer.disconnect(),r.current.observer=null)};t.addEventListener("focusout",n,{once:!0}),r.current.observer=new MutationObserver((()=>{if(r.current.isFocused&&t.disabled){var e;null===(e=r.current.observer)||void 0===e||e.disconnect();let n=t===document.activeElement?null:document.activeElement;t.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),t.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n}))}})),r.current.observer.observe(t,{attributes:!0,attributeFilter:["disabled"]})}}),[o])}let h=null,g=new Set,m=new Map,w=!1,E=!1;const b={Tab:!0,Escape:!0};function y(e,t){for(let n of g)n(e,t)}function L(e){w=!0,function(e){return!(e.metaKey||!a()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(h="keyboard",y("keyboard",e))}function T(e){h="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(w=!0,y("pointer",e))}function F(e){var t;(0===(t=e).mozInputSource&&t.isTrusted||(d()&&t.pointerType?"click"===t.type&&1===t.buttons:0===t.detail&&!t.pointerType))&&(w=!0,h="virtual")}function M(e){e.target!==window&&e.target!==document&&(w||E||(h="virtual",y("virtual",e)),w=!1,E=!1)}function P(){w=!1,E=!0}function R(e){if("undefined"==typeof window||m.get(u(e)))return;const t=u(e),n=s(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){w=!0,r.apply(this,arguments)},n.addEventListener("keydown",L,!0),n.addEventListener("keyup",L,!0),n.addEventListener("click",F,!0),t.addEventListener("focus",M,!0),t.addEventListener("blur",P,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",T,!0),n.addEventListener("pointermove",T,!0),n.addEventListener("pointerup",T,!0)):(n.addEventListener("mousedown",T,!0),n.addEventListener("mousemove",T,!0),n.addEventListener("mouseup",T,!0)),t.addEventListener("beforeunload",(()=>{S(e)}),{once:!0}),m.set(t,{focus:r})}const S=(e,t)=>{const n=u(e),r=s(e);t&&r.removeEventListener("DOMContentLoaded",t),m.has(n)&&(n.HTMLElement.prototype.focus=m.get(n).focus,r.removeEventListener("keydown",L,!0),r.removeEventListener("keyup",L,!0),r.removeEventListener("click",F,!0),n.removeEventListener("focus",M,!0),n.removeEventListener("blur",P,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",T,!0),r.removeEventListener("pointermove",T,!0),r.removeEventListener("pointerup",T,!0)):(r.removeEventListener("mousedown",T,!0),r.removeEventListener("mousemove",T,!0),r.removeEventListener("mouseup",T,!0)),m.delete(n))};function k(){return"pointer"!==h}"undefined"!=typeof document&&function(e){const t=s(e);let n;"loading"!==t.readyState?R(e):(n=()=>{R(e)},t.addEventListener("DOMContentLoaded",n))}();const C=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function x(e,t,n){R(),r((()=>{let t=(t,r)=>{(function(e,t,n){var r;const o="undefined"!=typeof window?u(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,i="undefined"!=typeof window?u(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,s="undefined"!=typeof window?u(null==n?void 0:n.target).HTMLElement:HTMLElement,a="undefined"!=typeof window?u(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof o&&!C.has(null==n||null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof i||(null==n?void 0:n.target)instanceof s&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof a&&!b[n.key])})(!!(null==n?void 0:n.isTextInput),t,r)&&e(k())};return g.add(t),()=>{g.delete(t)}}),t)}function D(e,t){return!!e&&(!!t&&t.some((t=>t.contains(e))))}class H{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let o=new N({scopeRef:e});r.addChild(o),o.parent=r,this.fastMap.set(e,o),n&&(o.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&D(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach((e=>n&&n.addChild(e)))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e;let t=new H;var n;for(let r of this.traverse())t.addTreeNode(r.scopeRef,null!==(n=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null,r.nodeToRestore);return t}constructor(){this.fastMap=new Map,this.root=new N({scopeRef:null}),this.fastMap.set(null,this.root)}}class N{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}function W(e={}){let{autoFocus:r=!1,isTextInput:i,within:s}=e,u=t({isFocused:!1,isFocusVisible:r||k()}),[a,d]=o(!1),[c,l]=o((()=>u.current.isFocused&&u.current.isFocusVisible)),v=n((()=>l(u.current.isFocused&&u.current.isFocusVisible)),[]),f=n((e=>{u.current.isFocused=e,d(e),v()}),[v]);x((e=>{u.current.isFocusVisible=e,v()}),[],{isTextInput:i});let{focusProps:h}=function(e){let{isDisabled:t,onFocus:r,onBlur:o,onFocusChange:i}=e;const s=n((e=>{if(e.target===e.currentTarget)return o&&o(e),i&&i(!1),!0}),[o,i]),u=p(s),a=n((e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(r&&r(e),i&&i(!0),u(e))}),[i,r,u]);return{focusProps:{onFocus:!t&&(r||i||o)?a:void 0,onBlur:t||!o&&!i?void 0:s}}}({isDisabled:s,onFocusChange:f}),{focusWithinProps:g}=function(e){let{isDisabled:r,onBlurWithin:o,onFocusWithin:i,onFocusWithinChange:s}=e,u=t({isFocusWithin:!1}),a=n((e=>{u.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(u.current.isFocusWithin=!1,o&&o(e),s&&s(!1))}),[o,s,u]),d=p(a),c=n((e=>{u.current.isFocusWithin||document.activeElement!==e.target||(i&&i(e),s&&s(!0),u.current.isFocusWithin=!0,d(e))}),[i,s,d]);return r?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:c,onBlur:a}}}({isDisabled:!s,onFocusWithinChange:f});return{isFocused:a,isFocusVisible:c,focusProps:s?g:h}}new H;var A,I={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/A=I,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var i=typeof o;if("string"===i||"number"===i)n.push(o);else if(Array.isArray(o)){if(o.length){var s=t.apply(null,o);s&&n.push(s)}}else if("object"===i){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var u in o)e.call(o,u)&&o[u]&&n.push(u)}}}return n.join(" ")}A.exports?(t.default=t,A.exports=t):window.classNames=t}();var _=I.exports,z="skip-to-content__YDL9y__0-1-44",B="focus-ring__T6BAx__0-1-44";const V=({className:t,children:n,targetId:r,ariaLabel:o})=>{const{isFocusVisible:i,focusProps:s}=W(),u=_(t,z,{[B]:i});return e.createElement("a",{...s,href:r,className:u,"aria-label":o},n)};export{V as SkipToContent};
//# sourceMappingURL=index.js.map
