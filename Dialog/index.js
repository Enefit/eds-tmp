"use client";import e,{useContext as t,useState as n,useRef as r,useCallback as o,useEffect as i}from"react";import"react-dom";const s={prefix:String(Math.round(1e10*Math.random())),current:0},u=e.createContext(s),l=e.createContext(!1);let a=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),c=new WeakMap;const d="function"==typeof e.useId?function(r){let o=e.useId(),[i]=n("function"==typeof e.useSyncExternalStore?e.useSyncExternalStore(v,f,p):t(l)),u=i||"test"===process.env.NODE_ENV?"react-aria":`react-aria${s.prefix}`;return r||`${u}-${o}`}:function(n){let o=t(u);o!==s||a||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let i=function(n=!1){let o=t(u),i=r(null);if(null===i.current&&!n){var s,l;let t=null===(l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===l||null===(s=l.ReactCurrentOwner)||void 0===s?void 0:s.current;if(t){let e=c.get(t);null==e?c.set(t,{id:o.current,state:t.memoizedState}):t.memoizedState!==e.state&&(o.current=e.id,c.delete(t))}i.current=++o.current}return i.current}(!!n),l=o===s&&"test"===process.env.NODE_ENV?"react-aria":`react-aria${o.prefix}`;return n||`${l}-${i}`};function f(){return!1}function p(){return!0}function v(e){return()=>{}}function m(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=m(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function h(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=m(e))&&(r&&(r+=" "),r+=t);return r}const g="undefined"!=typeof document?e.useLayoutEffect:()=>{};function E(e){const t=r(null);return g((()=>{t.current=e}),[e]),o(((...e)=>{const n=t.current;return null==n?void 0:n(...e)}),[])}let w=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),y=new Map;function b(e,t){if(e===t)return e;let n=y.get(e);if(n)return n(t),t;let r=y.get(t);return r?(r(e),e):t}function L(e=[]){let t=function(e){let[t,s]=n(e),u=r(null),l=d(t),a=o((e=>{u.current=e}),[]);return w&&y.set(l,a),g((()=>{let e=l;return()=>{y.delete(e)}}),[l]),i((()=>{let e=u.current;e&&(u.current=null,s(e))})),l}(),[s,u]=function(e){let[t,o]=n(e),i=r(null),s=E((()=>{if(!i.current)return;let e=i.current.next();e.done?i.current=null:t===e.value?s():o(e.value)}));g((()=>{i.current&&s()}));let u=E((e=>{i.current=e(t),s()}));return[t,u]}(t),l=o((()=>{u((function*(){yield t,yield document.getElementById(t)?t:void 0}))}),[t,u]);return g(l,[t,l,...e]),s}function T(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}const M=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},S=e=>{if(e&&"window"in e&&e.window===e)return e;return M(e).defaultView||window};function F(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],o=r[e];"function"==typeof n&&"function"==typeof o&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=T(n,o):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof n||"string"!=typeof o?"id"===e&&n&&o?t.id=b(n,o):t[e]=void 0!==o?o:n:t[e]=h(n,o)}}return t}const P=new Set(["id"]),R=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),C=new Set(["href","target","rel","download","ping","referrerPolicy"]),N=/^(data-.*)$/;function x(e,t={}){let{labelable:n,isLink:r,propNames:o}=t,i={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(P.has(t)||n&&R.has(t)||r&&C.has(t)||(null==o?void 0:o.has(t))||N.test(t))&&(i[t]=e[t]);return i}function _(e){if(function(){if(null==k){k=!1;try{document.createElement("div").focus({get preventScroll(){return k=!0,!0}})}catch(e){}}return k}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let k=null;function A(){return e=/^Mac/i,"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform);var e,t}function D(){return e=/Android/i,"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent));var e,t}let H=new Map,W=new Set;function O(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let r=H.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),H.delete(n.target)),0===H.size)){for(let e of W)e();W.clear()}};document.body.addEventListener("transitionrun",(n=>{if(!e(n)||!n.target)return;let r=H.get(n.target);r||(r=new Set,H.set(n.target,r),n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)})),document.body.addEventListener("transitionend",t)}"undefined"!=typeof document&&("loading"!==document.readyState?O():document.addEventListener("DOMContentLoaded",O));e.createContext({register:()=>{}}).displayName="PressResponderContext";class I{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function B(e){let t=r({isFocused:!1,observer:null});g((()=>{const e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let n=E((t=>{null==e||e(t)}));return o((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target,o=e=>{t.current.isFocused=!1,r.disabled&&n(new I("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};r.addEventListener("focusout",o,{once:!0}),t.current.observer=new MutationObserver((()=>{if(t.current.isFocused&&r.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let n=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n}))}})),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}}),[n])}let z=null,V=new Set,$=new Map,j=!1,K=!1;const U={Tab:!0,Escape:!0};function q(e,t){for(let n of V)n(e,t)}function Q(e){j=!0,function(e){return!(e.metaKey||!A()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(z="keyboard",q("keyboard",e))}function Y(e){z="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(j=!0,q("pointer",e))}function G(e){var t;(0===(t=e).mozInputSource&&t.isTrusted||(D()&&t.pointerType?"click"===t.type&&1===t.buttons:0===t.detail&&!t.pointerType))&&(j=!0,z="virtual")}function J(e){e.target!==window&&e.target!==document&&(j||K||(z="virtual",q("virtual",e)),j=!1,K=!1)}function X(){j=!1,K=!0}function Z(e){if("undefined"==typeof window||$.get(S(e)))return;const t=S(e),n=M(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){j=!0,r.apply(this,arguments)},n.addEventListener("keydown",Q,!0),n.addEventListener("keyup",Q,!0),n.addEventListener("click",G,!0),t.addEventListener("focus",J,!0),t.addEventListener("blur",X,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",Y,!0),n.addEventListener("pointermove",Y,!0),n.addEventListener("pointerup",Y,!0)):(n.addEventListener("mousedown",Y,!0),n.addEventListener("mousemove",Y,!0),n.addEventListener("mouseup",Y,!0)),t.addEventListener("beforeunload",(()=>{ee(e)}),{once:!0}),$.set(t,{focus:r})}const ee=(e,t)=>{const n=S(e),r=M(e);t&&r.removeEventListener("DOMContentLoaded",t),$.has(n)&&(n.HTMLElement.prototype.focus=$.get(n).focus,r.removeEventListener("keydown",Q,!0),r.removeEventListener("keyup",Q,!0),r.removeEventListener("click",G,!0),n.removeEventListener("focus",J,!0),n.removeEventListener("blur",X,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",Y,!0),r.removeEventListener("pointermove",Y,!0),r.removeEventListener("pointerup",Y,!0)):(r.removeEventListener("mousedown",Y,!0),r.removeEventListener("mousemove",Y,!0),r.removeEventListener("mouseup",Y,!0)),$.delete(n))};function te(){return"pointer"!==z}"undefined"!=typeof document&&function(e){const t=M(e);let n;"loading"!==t.readyState?Z(e):(n=()=>{Z(e)},t.addEventListener("DOMContentLoaded",n))}();const ne=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function re(e,t,n){Z(),i((()=>{let t=(t,r)=>{(function(e,t,n){var r;const o="undefined"!=typeof window?S(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,i="undefined"!=typeof window?S(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,s="undefined"!=typeof window?S(null==n?void 0:n.target).HTMLElement:HTMLElement,u="undefined"!=typeof window?S(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof o&&!ne.has(null==n||null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof i||(null==n?void 0:n.target)instanceof s&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof u&&!U[n.key])})(!!(null==n?void 0:n.isTextInput),t,r)&&e(te())};return V.add(t),()=>{V.delete(t)}}),t)}function oe(e){const t=M(e);if("virtual"===z){let r=t.activeElement;n=()=>{t.activeElement===r&&e.isConnected&&_(e)},requestAnimationFrame((()=>{0===H.size?n():W.add(n)}))}else _(e);var n}function ie(e,t){return!!e&&(!!t&&t.some((t=>t.contains(e))))}class se{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let o=new ue({scopeRef:e});r.addChild(o),o.parent=r,this.fastMap.set(e,o),n&&(o.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&ie(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach((e=>n&&n.addChild(e)))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e;let t=new se;var n;for(let r of this.traverse())t.addTreeNode(r.scopeRef,null!==(n=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null,r.nodeToRestore);return t}constructor(){this.fastMap=new Map,this.root=new ue({scopeRef:null}),this.fastMap.set(null,this.root)}}class ue{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}function le(e={}){let{autoFocus:t=!1,isTextInput:i,within:s}=e,u=r({isFocused:!1,isFocusVisible:t||te()}),[l,a]=n(!1),[c,d]=n((()=>u.current.isFocused&&u.current.isFocusVisible)),f=o((()=>d(u.current.isFocused&&u.current.isFocusVisible)),[]),p=o((e=>{u.current.isFocused=e,a(e),f()}),[f]);re((e=>{u.current.isFocusVisible=e,f()}),[],{isTextInput:i});let{focusProps:v}=function(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:i}=e;const s=o((e=>{if(e.target===e.currentTarget)return r&&r(e),i&&i(!1),!0}),[r,i]),u=B(s),l=o((e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(n&&n(e),i&&i(!0),u(e))}),[i,n,u]);return{focusProps:{onFocus:!t&&(n||i||r)?l:void 0,onBlur:t||!r&&!i?void 0:s}}}({isDisabled:s,onFocusChange:p}),{focusWithinProps:m}=function(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:i,onFocusWithinChange:s}=e,u=r({isFocusWithin:!1}),l=o((e=>{u.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(u.current.isFocusWithin=!1,n&&n(e),s&&s(!1))}),[n,s,u]),a=B(l),c=o((e=>{u.current.isFocusWithin||document.activeElement!==e.target||(i&&i(e),s&&s(!0),u.current.isFocusWithin=!0,a(e))}),[i,s,a]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:c,onBlur:l}}}({isDisabled:!s,onFocusWithinChange:p});return{isFocused:l,isFocusVisible:c,focusProps:s?m:v}}new se;const ae=e.createContext(null);function ce(e,n){let{role:o="dialog"}=e,s=L();s=e["aria-label"]?void 0:s;let u=r(!1);return i((()=>{if(n.current&&!n.current.contains(document.activeElement)){oe(n.current);let e=setTimeout((()=>{document.activeElement===n.current&&(u.current=!0,n.current&&(n.current.blur(),oe(n.current)),u.current=!1)}),500);return()=>{clearTimeout(e)}}}),[n]),function(){let e=t(ae),n=null==e?void 0:e.setContain;g((()=>{null==n||n(!0)}),[n])}(),{dialogProps:{...x(e,{labelable:!0}),role:o,tabIndex:-1,"aria-labelledby":e["aria-labelledby"]||s,onBlur:e=>{u.current&&e.stopPropagation()}},titleProps:{id:s}}}var de,fe={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/de=fe,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var i=typeof o;if("string"===i||"number"===i)n.push(o);else if(Array.isArray(o)){if(o.length){var s=t.apply(null,o);s&&n.push(s)}}else if("object"===i){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var u in o)e.call(o,u)&&o[u]&&n.push(u)}}}return n.join(" ")}de.exports?(t.default=t,de.exports=t):window.classNames=t}();var pe=fe.exports,ve="dialog__LvABM__0-1-43",me="focus-ring__8Q-t-__0-1-43";const he=({children:t,className:n,...o})=>{const i=r(null),{dialogProps:s}=ce(o,i),{isFocusVisible:u,focusProps:l}=le(),a=pe(ve,n,{[me]:u});return e.createElement("div",{...F(s,l),className:a,ref:i},t)};export{he as Dialog};
//# sourceMappingURL=index.js.map
