"use client";import e,{useState as t,useRef as n,useEffect as r,useCallback as i,useContext as o,useMemo as a,forwardRef as s}from"react";const l={prefix:String(Math.round(1e10*Math.random())),current:0},u=e.createContext(l),c=e.createContext(!1);let d=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),p=new WeakMap;const g="function"==typeof e.useId?function(n){let r=e.useId(),[i]=t("function"==typeof e.useSyncExternalStore?e.useSyncExternalStore(m,f,v):o(c)),a=i||"test"===process.env.NODE_ENV?"react-aria":`react-aria${l.prefix}`;return n||`${a}-${r}`}:function(t){let r=o(u);r!==l||d||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let i=function(t=!1){let r=o(u),i=n(null);if(null===i.current&&!t){var a,s;let t=null===(s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===s||null===(a=s.ReactCurrentOwner)||void 0===a?void 0:a.current;if(t){let e=p.get(t);null==e?p.set(t,{id:r.current,state:t.memoizedState}):t.memoizedState!==e.state&&(r.current=e.id,p.delete(t))}i.current=++r.current}return i.current}(!!t),a=r===l&&"test"===process.env.NODE_ENV?"react-aria":`react-aria${r.prefix}`;return t||`${a}-${i}`};function f(){return!1}function v(){return!0}function m(e){return()=>{}}function _(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=_(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function h(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=_(e))&&(r&&(r+=" "),r+=t);return r}const y="undefined"!=typeof document?e.useLayoutEffect:()=>{};function T(e){const t=n(null);return y((()=>{t.current=e}),[e]),i(((...e)=>{const n=t.current;return null==n?void 0:n(...e)}),[])}let b=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),E=new Map;function w(e,t){if(e===t)return e;let n=E.get(e);if(n)return n(t),t;let r=E.get(t);return r?(r(e),e):t}function P(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}const x=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},S=e=>{if(e&&"window"in e&&e.window===e)return e;return x(e).defaultView||window};function L(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],i=r[e];"function"==typeof n&&"function"==typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=P(n,i):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof n||"string"!=typeof i?"id"===e&&n&&i?t.id=w(n,i):t[e]=void 0!==i?i:n:t[e]=h(n,i)}}return t}const M=new Set(["id"]),k=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),O=new Set(["href","target","rel","download","ping","referrerPolicy"]),K=/^(data-.*)$/;function F(e){if(function(){if(null==D){D=!1;try{document.createElement("div").focus({get preventScroll(){return D=!0,!0}})}catch(e){}}return D}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let D=null;function C(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent))}function N(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function I(){return N(/^Mac/i)}function H(){return N(/^iPad/i)||I()&&navigator.maxTouchPoints>1}function R(){return N(/^iPhone/i)||H()}function $(){return C(/AppleWebKit/i)&&!C(/Chrome/i)}function A(){return C(/Android/i)}function W(e,t,n=!0){var r,i;let{metaKey:o,ctrlKey:a,altKey:s,shiftKey:l}=t;C(/Firefox/i)&&(null===(i=window.event)||void 0===i||null===(r=i.type)||void 0===r?void 0:r.startsWith("key"))&&"_blank"===e.target&&(I()?o=!0:a=!0);let u=$()&&I()&&!H()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:o,ctrlKey:a,altKey:s,shiftKey:l}):new MouseEvent("click",{metaKey:o,ctrlKey:a,altKey:s,shiftKey:l,bubbles:!0,cancelable:!0});W.isOpening=n,F(e),e.dispatchEvent(u),W.isOpening=!1}W.isOpening=!1;let z=new Map,B=new Set;function U(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let r=z.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),z.delete(n.target)),0===z.size)){for(let e of B)e();B.clear()}};document.body.addEventListener("transitionrun",(n=>{if(!e(n)||!n.target)return;let r=z.get(n.target);r||(r=new Set,z.set(n.target,r),n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)})),document.body.addEventListener("transitionend",t)}function V(e){requestAnimationFrame((()=>{0===z.size?e():B.add(e)}))}function j(e,t){y((()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}}))}function X(e){return!(0!==e.mozInputSource||!e.isTrusted)||(A()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}function G(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function Y(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function q(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,G(e,t,"set"),n),n}"undefined"!=typeof document&&("loading"!==document.readyState?U():document.addEventListener("DOMContentLoaded",U));let J="default",Q="",Z=new WeakMap;function ee(e){if(R()){if("default"===J){const t=x(e);Q=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}J="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(Z.set(e,e.style.userSelect),e.style.userSelect="none")}function te(e){if(R()){if("disabled"!==J)return;J="restoring",setTimeout((()=>{V((()=>{if("restoring"===J){const t=x(e);"none"===t.documentElement.style.webkitUserSelect&&(t.documentElement.style.webkitUserSelect=Q||""),Q="",J="default"}}))}),300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&Z.has(e)){let t=Z.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),Z.delete(e)}}const ne=e.createContext({register:()=>{}});ne.displayName="PressResponderContext";var re=new WeakMap;class ie{continuePropagation(){q(this,re,!1)}get shouldStopPropagation(){return function(e,t){return t.get?t.get.call(e):t.value}(e=this,G(e,re,"get"));var e}constructor(e,t,n){Y(this,re,{writable:!0,value:void 0}),q(this,re,!0),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey}}const oe=Symbol("linkClicked");function ae(e){let{onPress:s,onPressChange:l,onPressStart:u,onPressEnd:c,onPressUp:d,isDisabled:p,isPressed:g,preventFocusOnPress:f,shouldCancelOnPointerExit:v,allowTextSelectionOnPress:m,ref:_,...h}=function(e){let t=o(ne);if(t){let{register:n,...r}=t;e=L(r,e),n()}return j(t,e.ref),e}(e),[y,b]=t(!1),E=n({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:w,removeAllGlobalListeners:M}=function(){let e=n(new Map),t=i(((t,n,r,i)=>{let o=(null==i?void 0:i.once)?(...t)=>{e.current.delete(r),r(...t)}:r;e.current.set(r,{type:n,eventTarget:t,fn:o,options:i}),t.addEventListener(n,r,i)}),[]),o=i(((t,n,r,i)=>{var o;let a=(null===(o=e.current.get(r))||void 0===o?void 0:o.fn)||r;t.removeEventListener(n,a,i),e.current.delete(r)}),[]),a=i((()=>{e.current.forEach(((e,t)=>{o(e.eventTarget,e.type,t,e.options)}))}),[o]);return r((()=>a),[a]),{addGlobalListener:t,removeGlobalListener:o,removeAllGlobalListeners:a}}(),k=T(((e,t)=>{let n=E.current;if(p||n.didFirePressStart)return!1;let r=!0;if(n.isTriggeringEvent=!0,u){let n=new ie("pressstart",t,e);u(n),r=n.shouldStopPropagation}return l&&l(!0),n.isTriggeringEvent=!1,n.didFirePressStart=!0,b(!0),r})),O=T(((e,t,n=!0)=>{let r=E.current;if(!r.didFirePressStart)return!1;r.ignoreClickAfterPress=!0,r.didFirePressStart=!1,r.isTriggeringEvent=!0;let i=!0;if(c){let n=new ie("pressend",t,e);c(n),i=n.shouldStopPropagation}if(l&&l(!1),b(!1),s&&n&&!p){let n=new ie("press",t,e);s(n),i&&(i=n.shouldStopPropagation)}return r.isTriggeringEvent=!1,i})),K=T(((e,t)=>{let n=E.current;if(p)return!1;if(d){n.isTriggeringEvent=!0;let r=new ie("pressup",t,e);return d(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0})),D=T((e=>{let t=E.current;t.isPressed&&t.target&&(t.isOverTarget&&null!=t.pointerType&&O(ce(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,M(),m||te(t.target))})),C=T((e=>{v&&D(e)})),N=a((()=>{let e=E.current,t={onKeyDown(t){if(le(t.nativeEvent,t.currentTarget)&&t.currentTarget.contains(t.target)){var r;ge(t.target,t.key)&&t.preventDefault();let i=!0;if(!e.isPressed&&!t.repeat){e.target=t.currentTarget,e.isPressed=!0,i=k(t,"keyboard");let r=t.currentTarget,o=t=>{le(t,r)&&!t.repeat&&r.contains(t.target)&&e.target&&K(ce(e.target,t),"keyboard")};w(x(t.currentTarget),"keyup",P(o,n),!0)}i&&t.stopPropagation(),t.metaKey&&I()&&(null===(r=e.metaKeyEvents)||void 0===r||r.set(t.key,t.nativeEvent))}else"Meta"===t.key&&(e.metaKeyEvents=new Map)},onClick(t){if((!t||t.currentTarget.contains(t.target))&&t&&0===t.button&&!e.isTriggeringEvent&&!W.isOpening){let n=!0;if(p&&t.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&!e.isPressed&&("virtual"===e.pointerType||X(t.nativeEvent))){p||f||F(t.currentTarget);let e=k(t,"virtual"),r=K(t,"virtual"),i=O(t,"virtual");n=e&&r&&i}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,n&&t.stopPropagation()}}},n=t=>{var n;if(e.isPressed&&e.target&&le(t,e.target)){var r;ge(t.target,t.key)&&t.preventDefault();let n=t.target;O(ce(e.target,t),"keyboard",e.target.contains(n)),M(),"Enter"!==t.key&&se(e.target)&&e.target.contains(n)&&!t[oe]&&(t[oe]=!0,W(e.target,t,!1)),e.isPressed=!1,null===(r=e.metaKeyEvents)||void 0===r||r.delete(t.key)}else if("Meta"===t.key&&(null===(n=e.metaKeyEvents)||void 0===n?void 0:n.size)){var i;let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())null===(i=e.target)||void 0===i||i.dispatchEvent(new KeyboardEvent("keyup",n))}};if("undefined"!=typeof PointerEvent){t.onPointerDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(o=t.nativeEvent,!A()&&0===o.width&&0===o.height||1===o.width&&1===o.height&&0===o.pressure&&0===o.detail&&"mouse"===o.pointerType)return void(e.pointerType="virtual");var o;pe(t.currentTarget)&&t.preventDefault(),e.pointerType=t.pointerType;let a=!0;e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,p||f||F(t.currentTarget),m||ee(e.target),a=k(t,e.pointerType),w(x(t.currentTarget),"pointermove",n,!1),w(x(t.currentTarget),"pointerup",r,!1),w(x(t.currentTarget),"pointercancel",i,!1)),a&&t.stopPropagation()},t.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(pe(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},t.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&de(t,t.currentTarget)&&K(t,e.pointerType||t.pointerType)};let n=t=>{t.pointerId===e.activePointerId&&(e.target&&de(t,e.target)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,k(ce(e.target,t),e.pointerType)):e.target&&e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,O(ce(e.target,t),e.pointerType,!1),C(t)))},r=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&e.target&&(de(t,e.target)&&null!=e.pointerType?O(ce(e.target,t),e.pointerType):e.isOverTarget&&null!=e.pointerType&&O(ce(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,M(),m||te(e.target))},i=e=>{D(e)};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&D(e)}}else{t.onMouseDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(pe(t.currentTarget)&&t.preventDefault(),e.ignoreEmulatedMouseEvents)return void t.stopPropagation();e.isPressed=!0,e.isOverTarget=!0,e.target=t.currentTarget,e.pointerType=X(t.nativeEvent)?"virtual":"mouse",p||f||F(t.currentTarget),k(t,e.pointerType)&&t.stopPropagation(),w(x(t.currentTarget),"mouseup",n,!1)},t.onMouseEnter=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!0,n=k(t,e.pointerType)),n&&t.stopPropagation()},t.onMouseLeave=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!1,n=O(t,e.pointerType,!1),C(t)),n&&t.stopPropagation()},t.onMouseUp=t=>{t.currentTarget.contains(t.target)&&(e.ignoreEmulatedMouseEvents||0!==t.button||K(t,e.pointerType||"mouse"))};let n=t=>{0===t.button&&(e.isPressed=!1,M(),e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:(e.target&&de(t,e.target)&&null!=e.pointerType?O(ce(e.target,t),e.pointerType):e.target&&e.isOverTarget&&null!=e.pointerType&&O(ce(e.target,t),e.pointerType,!1),e.isOverTarget=!1))};t.onTouchStart=t=>{if(!t.currentTarget.contains(t.target))return;let n=function(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}(t.nativeEvent);n&&(e.activePointerId=n.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=t.currentTarget,e.pointerType="touch",p||f||F(t.currentTarget),m||ee(e.target),k(t,e.pointerType)&&t.stopPropagation(),w(S(t.currentTarget),"scroll",r,!0))},t.onTouchMove=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=ue(t.nativeEvent,e.activePointerId),r=!0;n&&de(n,t.currentTarget)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,r=k(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,r=O(t,e.pointerType,!1),C(t)),r&&t.stopPropagation()},t.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=ue(t.nativeEvent,e.activePointerId),r=!0;n&&de(n,t.currentTarget)&&null!=e.pointerType?(K(t,e.pointerType),r=O(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(r=O(t,e.pointerType,!1)),r&&t.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,e.target&&!m&&te(e.target),M()},t.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&D(t))};let r=t=>{e.isPressed&&t.target.contains(e.target)&&D({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&D(e)}}return t}),[w,p,f,M,m,D,C,O,k,K]);return r((()=>()=>{var e;m||te(null!==(e=E.current.target)&&void 0!==e?e:void 0)}),[m]),{isPressed:g||y,pressProps:L(h,N)}}function se(e){return"A"===e.tagName&&e.hasAttribute("href")}function le(e,t){const{key:n,code:r}=e,i=t,o=i.getAttribute("role");return!("Enter"!==n&&" "!==n&&"Spacebar"!==n&&"Space"!==r||i instanceof S(i).HTMLInputElement&&!ve(i,n)||i instanceof S(i).HTMLTextAreaElement||i.isContentEditable||("link"===o||!o&&se(i))&&"Enter"!==n)}function ue(e,t){const n=e.changedTouches;for(let e=0;e<n.length;e++){const r=n[e];if(r.identifier===t)return r}return null}function ce(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function de(e,t){let n=t.getBoundingClientRect(),r=function(e){let t=0,n=0;return void 0!==e.width?t=e.width/2:void 0!==e.radiusX&&(t=e.radiusX),void 0!==e.height?n=e.height/2:void 0!==e.radiusY&&(n=e.radiusY),{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}(e);return o=r,!((i=n).left>o.right||o.left>i.right||i.top>o.bottom||o.top>i.bottom);var i,o}function pe(e){return!(e instanceof HTMLElement&&e.hasAttribute("draggable"))}function ge(e,t){return e instanceof HTMLInputElement?!ve(e,t):e instanceof HTMLButtonElement?"submit"!==e.type&&"reset"!==e.type:!se(e)}const fe=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function ve(e,t){return"checkbox"===e.type||"radio"===e.type?" "===t:fe.has(e.type)}class me{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function _e(e){let t=n({isFocused:!1,observer:null});y((()=>{const e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let r=T((t=>{null==e||e(t)}));return i((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let n=e.target,i=e=>{t.current.isFocused=!1,n.disabled&&r(new me("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};n.addEventListener("focusout",i,{once:!0}),t.current.observer=new MutationObserver((()=>{if(t.current.isFocused&&n.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let r=n===document.activeElement?null:document.activeElement;n.dispatchEvent(new FocusEvent("blur",{relatedTarget:r})),n.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:r}))}})),t.current.observer.observe(n,{attributes:!0,attributeFilter:["disabled"]})}}),[r])}function he(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:o}=e;const a=i((e=>{if(e.target===e.currentTarget)return r&&r(e),o&&o(!1),!0}),[r,o]),s=_e(a),l=i((e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(n&&n(e),o&&o(!0),s(e))}),[o,n,s]);return{focusProps:{onFocus:!t&&(n||o||r)?l:void 0,onBlur:t||!r&&!o?void 0:a}}}let ye=null,Te=new Set,be=new Map,Ee=!1,we=!1;const Pe={Tab:!0,Escape:!0};function xe(e,t){for(let n of Te)n(e,t)}function Se(e){Ee=!0,function(e){return!(e.metaKey||!I()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(ye="keyboard",xe("keyboard",e))}function Le(e){ye="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(Ee=!0,xe("pointer",e))}function Me(e){X(e)&&(Ee=!0,ye="virtual")}function ke(e){e.target!==window&&e.target!==document&&(Ee||we||(ye="virtual",xe("virtual",e)),Ee=!1,we=!1)}function Oe(){Ee=!1,we=!0}function Ke(e){if("undefined"==typeof window||be.get(S(e)))return;const t=S(e),n=x(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){Ee=!0,r.apply(this,arguments)},n.addEventListener("keydown",Se,!0),n.addEventListener("keyup",Se,!0),n.addEventListener("click",Me,!0),t.addEventListener("focus",ke,!0),t.addEventListener("blur",Oe,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",Le,!0),n.addEventListener("pointermove",Le,!0),n.addEventListener("pointerup",Le,!0)):(n.addEventListener("mousedown",Le,!0),n.addEventListener("mousemove",Le,!0),n.addEventListener("mouseup",Le,!0)),t.addEventListener("beforeunload",(()=>{Fe(e)}),{once:!0}),be.set(t,{focus:r})}const Fe=(e,t)=>{const n=S(e),r=x(e);t&&r.removeEventListener("DOMContentLoaded",t),be.has(n)&&(n.HTMLElement.prototype.focus=be.get(n).focus,r.removeEventListener("keydown",Se,!0),r.removeEventListener("keyup",Se,!0),r.removeEventListener("click",Me,!0),n.removeEventListener("focus",ke,!0),n.removeEventListener("blur",Oe,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",Le,!0),r.removeEventListener("pointermove",Le,!0),r.removeEventListener("pointerup",Le,!0)):(r.removeEventListener("mousedown",Le,!0),r.removeEventListener("mousemove",Le,!0),r.removeEventListener("mouseup",Le,!0)),be.delete(n))};function De(){return"pointer"!==ye}"undefined"!=typeof document&&function(e){const t=x(e);let n;"loading"!==t.readyState?Ke(e):(n=()=>{Ke(e)},t.addEventListener("DOMContentLoaded",n))}();const Ce=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Ne(e,t,n){Ke(),r((()=>{let t=(t,r)=>{(function(e,t,n){var r;const i="undefined"!=typeof window?S(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,o="undefined"!=typeof window?S(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,a="undefined"!=typeof window?S(null==n?void 0:n.target).HTMLElement:HTMLElement,s="undefined"!=typeof window?S(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof i&&!Ce.has(null==n||null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof o||(null==n?void 0:n.target)instanceof a&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof s&&!Pe[n.key])})(!!(null==n?void 0:n.isTextInput),t,r)&&e(De())};return Te.add(t),()=>{Te.delete(t)}}),t)}function Ie(e){let{isDisabled:t,onBlurWithin:r,onFocusWithin:o,onFocusWithinChange:a}=e,s=n({isFocusWithin:!1}),l=i((e=>{s.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(s.current.isFocusWithin=!1,r&&r(e),a&&a(!1))}),[r,a,s]),u=_e(l),c=i((e=>{s.current.isFocusWithin||document.activeElement!==e.target||(o&&o(e),a&&a(!0),s.current.isFocusWithin=!0,u(e))}),[o,a,u]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:c,onBlur:l}}}function He(e){if(!e)return;let t=!0;return n=>{let r={...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}};e(r),t&&n.stopPropagation()}}function Re(e){const t=x(e);if("virtual"===ye){let n=t.activeElement;V((()=>{t.activeElement===n&&e.isConnected&&F(e)}))}else F(e)}function $e(e,t){return!!e&&(!!t&&t.some((t=>t.contains(e))))}class Ae{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let i=new We({scopeRef:e});r.addChild(i),i.parent=r,this.fastMap.set(e,i),n&&(i.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&$e(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach((e=>n&&n.addChild(e)))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e;let t=new Ae;var n;for(let r of this.traverse())t.addTreeNode(r.scopeRef,null!==(n=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null,r.nodeToRestore);return t}constructor(){this.fastMap=new Map,this.root=new We({scopeRef:null}),this.fastMap.set(null,this.root)}}class We{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}new Ae;let ze=e.createContext(null);function Be(e,t){let{focusProps:i}=he(e),{keyboardProps:a}=function(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:He(e.onKeyDown),onKeyUp:He(e.onKeyUp)}}}(e),s=L(i,a),l=function(e){let t=o(ze)||{};j(t,e);let{ref:n,...r}=t;return r}(t),u=e.isDisabled?{}:l,c=n(e.autoFocus);return r((()=>{c.current&&t.current&&Re(t.current),c.current=!1}),[t]),{focusableProps:L({...s,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},u)}}function Ue(e,t,i){let{isDisabled:o=!1,isReadOnly:a=!1,value:s,name:l,children:u,"aria-label":c,"aria-labelledby":d,validationState:p="valid",isInvalid:g}=e;null!=u||(null!=c||null!=d)||console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:f,isPressed:v}=ae({isDisabled:o}),{pressProps:m,isPressed:_}=ae({isDisabled:o||a,onPress(){t.toggle()}}),{focusableProps:h}=Be(e,i),y=L(f,h),b=function(e,t={}){let{labelable:n,isLink:r,propNames:i}=t,o={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(M.has(t)||n&&k.has(t)||r&&O.has(t)||(null==i?void 0:i.has(t))||K.test(t))&&(o[t]=e[t]);return o}(e,{labelable:!0});return function(e,t,i){let o=n(t),a=T((()=>{i&&i(o.current)}));r((()=>{var t;let n=null==e||null===(t=e.current)||void 0===t?void 0:t.form;return null==n||n.addEventListener("reset",a),()=>{null==n||n.removeEventListener("reset",a)}}),[e,a])}(i,t.isSelected,t.setSelected),{labelProps:L(m,{onClick:e=>e.preventDefault()}),inputProps:L(b,{"aria-invalid":g||"invalid"===p||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":a||void 0,onChange:e=>{e.stopPropagation(),t.setSelected(e.target.checked)},disabled:o,...null==s?{}:{value:s},name:l,type:"checkbox",...y}),isSelected:t.isSelected,isPressed:v||_,isDisabled:o,isReadOnly:a,isInvalid:g||"invalid"===p}}function Ve(e={}){let{isReadOnly:o}=e,[a,s]=function(e,o,a){let[s,l]=t(e||o),u=n(void 0!==e),c=void 0!==e;r((()=>{let e=u.current;e!==c&&console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}.`),u.current=c}),[c]);let d=c?e:s,p=i(((e,...t)=>{let n=(e,...t)=>{a&&(Object.is(d,e)||a(e,...t)),c||(d=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),l(((r,...i)=>{let o=e(c?d:r,...i);return n(o,...t),c?r:o}))):(c||l(e),n(e,...t))}),[c,d,a]);return[d,p]}(e.isSelected,e.defaultSelected||!1,e.onChange);return{isSelected:a,setSelected:function(e){o||s(e)},toggle:function(){o||s(!a)}}}const je={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function Xe(n){let{children:r,elementType:i="div",isFocusable:o,style:s,...l}=n,{visuallyHiddenProps:u}=function(e={}){let{style:n,isFocusable:r}=e,[i,o]=t(!1),{focusWithinProps:s}=Ie({isDisabled:!r,onFocusWithinChange:e=>o(e)});return{visuallyHiddenProps:{...s,style:a((()=>i?n:n?{...je,...n}:je),[i])}}}(n);return e.createElement(i,L(l,u),r)}var Ge,Ye={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Ge=Ye,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if("string"===o||"number"===o)n.push(i);else if(Array.isArray(i)){if(i.length){var a=t.apply(null,i);a&&n.push(a)}}else if("object"===o){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var s in i)e.call(i,s)&&i[s]&&n.push(s)}}}return n.join(" ")}Ge.exports?(t.default=t,Ge.exports=t):window.classNames=t}();var qe=Ye.exports,Je={stack:"stack__foEop__0-1-38","direction-xsmall-column":"direction-xsmall-column__gSInW__0-1-38","direction-xsmall-row":"direction-xsmall-row__xbYKt__0-1-38","direction-small-column":"direction-small-column__w3qdN__0-1-38","direction-small-row":"direction-small-row__Fi83T__0-1-38","direction-medium-column":"direction-medium-column__uPpiH__0-1-38","direction-medium-row":"direction-medium-row__QXENi__0-1-38","direction-large-column":"direction-large-column__DOuNx__0-1-38","direction-large-row":"direction-large-row__nt-ew__0-1-38","gap-xsmall-1":"gap-xsmall-1__PH7ZL__0-1-38","gap-xsmall-2":"gap-xsmall-2__OF5nS__0-1-38","gap-xsmall-3":"gap-xsmall-3__KP-Pk__0-1-38","gap-xsmall-4":"gap-xsmall-4__J5ttC__0-1-38","gap-small-1":"gap-small-1__s7o8S__0-1-38","gap-small-2":"gap-small-2__nhKiB__0-1-38","gap-small-3":"gap-small-3__SKBDk__0-1-38","gap-small-4":"gap-small-4__ykzrO__0-1-38","gap-medium-1":"gap-medium-1__dN9up__0-1-38","gap-medium-2":"gap-medium-2__UMXHe__0-1-38","gap-medium-3":"gap-medium-3__OIV7e__0-1-38","gap-medium-4":"gap-medium-4__mfb2I__0-1-38","gap-large-1":"gap-large-1__3BTuu__0-1-38","gap-large-2":"gap-large-2__po1On__0-1-38","gap-large-3":"gap-large-3__fK1OL__0-1-38","gap-large-4":"gap-large-4__1-BZF__0-1-38"};const Qe=({direction:t={xsmall:"column",small:"column",medium:"column",large:"column"},gap:n={xsmall:1,small:1,medium:1,large:1},children:r})=>{const i=Object.entries(t).map((([e,t])=>Je[`direction-${e}-${t}`])).join(" "),o=Object.entries(n).map((([e,t])=>Je[`gap-${e}-${t}`])).join(" ");return e.createElement("div",{className:`${Je.stack} ${i} ${o}`},r)},Ze=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px");var et={"heading-h1":"heading-h1__00OVp__0-1-38","heading-h2":"heading-h2__uf8XO__0-1-38","heading-h3":"heading-h3__b58IP__0-1-38","heading-h4":"heading-h4__x0dIm__0-1-38","heading-h5":"heading-h5__dHW8C__0-1-38","heading-h6":"heading-h6__FSif0__0-1-38","heading-display":"heading-display__1B20E__0-1-38","heading-leadtext":"heading-leadtext__fbf5X__0-1-38","heading-subheadline":"heading-subheadline__xgXDJ__0-1-38","text-p-small":"text-p-small__U5YeB__0-1-38","text-p-default":"text-p-default__T3Gv7__0-1-38","text-p-large":"text-p-large__k4P5K__0-1-38","text-line-tiny":"text-line-tiny__IdKxY__0-1-38","text-line-small":"text-line-small__VDnxz__0-1-38","text-line-default":"text-line-default__HHLev__0-1-38","text-line-large":"text-line-large__zY6Xt__0-1-38","text-list-default":"text-list-default__9dn8h__0-1-38","label-tiny":"label-tiny__fwERw__0-1-38","label-small":"label-small__7hSFb__0-1-38","label-default":"label-default__TzEjW__0-1-38","label-large":"label-large__Xe0s7__0-1-38","text-italic":"text-italic__9j6-k__0-1-38","text-underline":"text-underline__-idVq__0-1-38","text-uppercase":"text-uppercase__zT285__0-1-38","text-400":"text-400__veahz__0-1-38","text-600":"text-600__SOu9h__0-1-38"};const tt=({variant:t="p",as:n,size:r="default",italic:i=!1,underline:o=!1,weight:a="400",uppercase:s=!1,children:l,className:u,dangerouslySetInnerHTML:c,mt:d,mb:p,my:g,...f})=>{const v=n||function(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}(t),m=`\n        ${et[`text-${t}-${r}`]}\n        ${u}\n        ${i?et["text-italic"]:""}\n        ${o?et["text-underline"]:""}\n        ${a?et[`text-${a}`]:""}\n        ${s?et["text-uppercase"]:""}\n    `,_=(({mt:e,mb:t,my:n})=>({marginTop:void 0!==e?Ze(e):void 0!==n?Ze(n):void 0,marginBottom:void 0!==t?Ze(t):void 0!==n?Ze(n):void 0}))({mt:d,mb:p,my:g});return c?e.createElement(v,{className:m,dangerouslySetInnerHTML:c,style:{..._},...f}):e.createElement(v,{className:m,style:{..._},...f},l)},nt=({id:t,size:n="default",children:r,italic:i=!1,underline:o=!1,weight:a="400",uppercase:s=!1,className:l,...u})=>{const c=`\n        ${et[`label-${n}`]}\n        ${l}\n        ${i?et["text-italic"]:""}\n        ${o?et["text-underline"]:""}\n        ${a?et[`text-${a}`]:""}\n        ${s?et["text-uppercase"]:""}\n    `;return e.createElement("label",{id:t,className:c,...u},r)};var rt={switch:"switch__NBd2f__0-1-38",switch__label:"switch__label__ly7MH__0-1-38",switch__indicator:"switch__indicator__k5G6H__0-1-38","switch--pressed":"switch--pressed__hHhQo__0-1-38","switch--focused":"switch--focused__UgRLn__0-1-38","switch--selected":"switch--selected__C5uKU__0-1-38",messages:"messages__BCPCT__0-1-38","messages__description--regular":"messages__description--regular__RiU41__0-1-38","messages__description--warning":"messages__description--warning__EtKL-__0-1-38"};const it=s(((o,s)=>{const l=function(e){const t=n(null);return a((()=>({get current(){return t.current},set current(n){t.current=n,"function"==typeof e?e(n):e&&(e.current=n)}})),[e])}(s),u=n(null),c=l||u,d=Ve(o),{inputProps:p,labelProps:f,isPressed:v,isSelected:m}=function(e,t,n){let{labelProps:r,inputProps:i,isSelected:o,isPressed:a,isDisabled:s,isReadOnly:l}=Ue(e,t,n);return{labelProps:r,inputProps:{...i,role:"switch",checked:o},isSelected:o,isPressed:a,isDisabled:s,isReadOnly:l}}(o,d,c),{isFocusVisible:_,focusProps:h}=function(e={}){let{autoFocus:r=!1,isTextInput:o,within:a}=e,s=n({isFocused:!1,isFocusVisible:r||De()}),[l,u]=t(!1),[c,d]=t((()=>s.current.isFocused&&s.current.isFocusVisible)),p=i((()=>d(s.current.isFocused&&s.current.isFocusVisible)),[]),g=i((e=>{s.current.isFocused=e,u(e),p()}),[p]);Ne((e=>{s.current.isFocusVisible=e,p()}),[],{isTextInput:o});let{focusProps:f}=he({isDisabled:a,onFocusChange:g}),{focusWithinProps:v}=Ie({isDisabled:!a,onFocusWithinChange:g});return{isFocused:l,isFocusVisible:c,focusProps:a?v:f}}(),T=function(e){let[o,a]=t(e),s=n(null),l=g(o),u=i((e=>{s.current=e}),[]);return b&&E.set(l,u),y((()=>{let e=l;return()=>{E.delete(e)}}),[l]),r((()=>{let e=s.current;e&&(s.current=null,a(e))})),l}(),{description:w,children:P,descriptionSeverity:x="regular"}=o,S=qe(rt.switch,{[rt["switch--pressed"]]:v,[rt["switch--selected"]]:m,[rt["switch--focused"]]:_}),M=qe({[rt["messages__description--regular"]]:"regular"===x,[rt["messages__description--warning"]]:"warning"===x}),{"aria-describedby":k,...O}=p;return e.createElement(Qe,null,e.createElement(nt,{weight:"400",className:S,...f},e.createElement(Xe,null,e.createElement("input",{...L(O,h),ref:c,"aria-describedby":`${T} ${k}`})),e.createElement("span",{className:rt.switch__indicator}),e.createElement("div",{className:rt.switch__label},P)),w&&e.createElement("div",{className:rt.messages},e.createElement(tt,{variant:"line",size:"small",id:T,className:M},w)))}));it.displayName="Switch";export{it as Switch};
//# sourceMappingURL=index.js.map