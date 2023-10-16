var pt=Object.defineProperty;var vt=(r,t,e)=>t in r?pt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var T=(r,t,e)=>(vt(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=window,z=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol(),V=new WeakMap;let $t=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(z&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=V.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&V.set(e,t))}return t}toString(){return this.cssText}};const ft=r=>new $t(typeof r=="string"?r:r+"",void 0,it),gt=(r,t)=>{z?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=U.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)})},K=z?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ft(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var O;const N=window,W=N.trustedTypes,_t=W?W.emptyScript:"",Z=N.reactiveElementPolyfillSupport,F={toAttribute(r,t){switch(t){case Boolean:r=r?_t:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},rt=(r,t)=>t!==r&&(t==t||r==r),L={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:rt},j="finalized";let y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=L){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||L}static finalize(){if(this.hasOwnProperty(j))return!1;this[j]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(K(i))}else t!==void 0&&e.push(K(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return gt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=L){var i;const n=this.constructor._$Ep(t,s);if(n!==void 0&&s.reflect===!0){const o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:F).toAttribute(e,s.type);this._$El=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){const o=i.getPropertyOptions(n),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:F;this._$El=n,this[n]=d.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||rt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};y[j]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},Z==null||Z({ReactiveElement:y}),((O=N.reactiveElementVersions)!==null&&O!==void 0?O:N.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var M;const B=window,A=B.trustedTypes,J=A?A.createPolicy("lit-html",{createHTML:r=>r}):void 0,D="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,nt="?"+$,yt=`<${nt}>`,_=document,x=()=>_.createComment(""),C=r=>r===null||typeof r!="object"&&typeof r!="function",ot=Array.isArray,mt=r=>ot(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",R=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,G=/>/g,f=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Q=/'/g,X=/"/g,lt=/^(?:script|style|textarea|title)$/i,At=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),ht=At(1),b=Symbol.for("lit-noChange"),a=Symbol.for("lit-nothing"),tt=new WeakMap,g=_.createTreeWalker(_,129,null,!1);function dt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return J!==void 0?J.createHTML(t):t}const bt=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":"",o=E;for(let d=0;d<e;d++){const l=r[d];let h,u,c=-1,p=0;for(;p<l.length&&(o.lastIndex=p,u=o.exec(l),u!==null);)p=o.lastIndex,o===E?u[1]==="!--"?o=Y:u[1]!==void 0?o=G:u[2]!==void 0?(lt.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=f):u[3]!==void 0&&(o=f):o===f?u[0]===">"?(o=i??E,c=-1):u[1]===void 0?c=-2:(c=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?f:u[3]==='"'?X:Q):o===X||o===Q?o=f:o===Y||o===G?o=E:(o=f,i=void 0);const v=o===f&&r[d+1].startsWith("/>")?" ":"";n+=o===E?l+yt:c>=0?(s.push(h),l.slice(0,c)+D+l.slice(c)+$+v):l+$+(c===-2?(s.push(void 0),d):v)}return[dt(r,n+(r[e]||"<?>")+(t===2?"</svg>":"")),s]};class w{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const d=t.length-1,l=this.parts,[h,u]=bt(t,e);if(this.el=w.createElement(h,s),g.currentNode=this.el.content,e===2){const c=this.el.content,p=c.firstChild;p.remove(),c.append(...p.childNodes)}for(;(i=g.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const c=[];for(const p of i.getAttributeNames())if(p.endsWith(D)||p.startsWith($)){const v=u[o++];if(c.push(p),v!==void 0){const at=i.getAttribute(v.toLowerCase()+D).split($),P=/([.?@])?(.*)/.exec(v);l.push({type:1,index:n,name:P[2],strings:at,ctor:P[1]==="."?Et:P[1]==="?"?Ct:P[1]==="@"?wt:H})}else l.push({type:6,index:n})}for(const p of c)i.removeAttribute(p)}if(lt.test(i.tagName)){const c=i.textContent.split($),p=c.length-1;if(p>0){i.textContent=A?A.emptyScript:"";for(let v=0;v<p;v++)i.append(c[v],x()),g.nextNode(),l.push({type:2,index:++n});i.append(c[p],x())}}}else if(i.nodeType===8)if(i.data===nt)l.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf($,c+1))!==-1;)l.push({type:7,index:n}),c+=$.length-1}n++}}static createElement(t,e){const s=_.createElement("template");return s.innerHTML=t,s}}function S(r,t,e=r,s){var i,n,o,d;if(t===b)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const h=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),h===void 0?l=void 0:(l=new h(r),l._$AT(r,e,s)),s!==void 0?((o=(d=e)._$Co)!==null&&o!==void 0?o:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=S(r,l._$AS(r,t.values),l,s)),t}class St{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:_).importNode(s,!0);g.currentNode=n;let o=g.nextNode(),d=0,l=0,h=i[0];for(;h!==void 0;){if(d===h.index){let u;h.type===2?u=new I(o,o.nextSibling,this,t):h.type===1?u=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(u=new It(o,this,t)),this._$AV.push(u),h=i[++l]}d!==(h==null?void 0:h.index)&&(o=g.nextNode(),d++)}return g.currentNode=_,n}v(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class I{constructor(t,e,s,i){var n;this.type=2,this._$AH=a,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),C(t)?t===a||t==null||t===""?(this._$AH!==a&&this._$AR(),this._$AH=a):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):mt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==a&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(_.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=w.createElement(dt(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(s);else{const o=new St(n,this),d=o.u(this.options);o.v(s),this.$(d),this._$AH=o}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new w(t)),e}T(t){ot(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new I(this.k(x()),this.k(x()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class H{constructor(t,e,s,i,n){this.type=1,this._$AH=a,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=a}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=S(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==b,o&&(this._$AH=t);else{const d=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=S(this,d[s+l],e,l),h===b&&(h=this._$AH[l]),o||(o=!C(h)||h!==this._$AH[l]),h===a?t=a:t!==a&&(t+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!i&&this.j(t)}j(t){t===a?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===a?void 0:t}}const xt=A?A.emptyScript:"";class Ct extends H{constructor(){super(...arguments),this.type=4}j(t){t&&t!==a?this.element.setAttribute(this.name,xt):this.element.removeAttribute(this.name)}}class wt extends H{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=S(this,t,e,0))!==null&&s!==void 0?s:a)===b)return;const i=this._$AH,n=t===a&&i!==a||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==a&&(i===a||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class It{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const et=B.litHtmlPolyfillSupport;et==null||et(w,I),((M=B.litHtmlVersions)!==null&&M!==void 0?M:B.litHtmlVersions=[]).push("2.7.5");const Pt=(r,t,e)=>{var s,i;const n=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let o=n._$litPart$;if(o===void 0){const d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=o=new I(t.insertBefore(x(),d),d,void 0,e??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var k,q;class m extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return b}}m.finalized=!0,m._$litElement$=!0,(k=globalThis.litElementHydrateSupport)===null||k===void 0||k.call(globalThis,{LitElement:m});const st=globalThis.litElementPolyfillSupport;st==null||st({LitElement:m});((q=globalThis.litElementVersions)!==null&&q!==void 0?q:globalThis.litElementVersions=[]).push("3.3.2");class ut extends m{constructor(){super(),this.setupFullscreenButton(),this.setupNavigationButtons(),this.setupKeyboardControls()}get counterCurrent(){return this.querySelector("[data-lightbox-counter-current]")}get counterTotal(){return this.querySelector("[data-lightbox-counter-total]")}get fullscreenButton(){return this.querySelector("[data-lightbox-fullscreen]")}get nextButton(){return this.querySelector("[data-lightbox-next]")}get previousButton(){return this.querySelector("[data-lightbox-previous]")}get slides(){return this.querySelectorAll("[data-lightbox-slide]")}get slideIds(){return Array.from(this.slides).map(t=>t.dataset.lightboxSlideId)}get currentSlide(){if(this.slides.length)return this.currentId?this.slides[this.currentSlideIndex]:this.slides[0]}get currentSlideIndex(){if(this.slides.length)return this.currentId?this.slideIds.findIndex(t=>t===this.currentId):0}get fullscreen(){return document.fullscreen||this.wrapper.classList.contains("quire-entry__lightbox--fullscreen")}get wrapper(){return document.querySelector(".quire-entry__lightbox")}enterFullscreen(){const t=this.renderRoot.firstElementChild;t.requestFullscreen?t.requestFullscreen():(this.wrapper.classList.add("quire-entry__lightbox--fullscreen"),document.body.style.position="fixed",document.body.style.top=`-${window.scrollY}px`)}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():(this.wrapper.classList.remove("quire-entry__lightbox--fullscreen"),document.body.style.position="",document.body.style.top="")}next(){if(!this.slides.length)return;const t=this.currentSlideIndex+1,e=this.slideIds[t%this.slides.length];this.currentId=e}previous(){if(!this.slides.length)return;const t=this.currentSlideIndex-1,e=this.slideIds.slice(t)[0];this.currentId=e}setupFullscreenButton(){this.fullscreenButton&&this.fullscreenButton.addEventListener("click",()=>{this.toggleFullscreen()})}setupNavigationButtons(){!this.nextButton||!this.previousButton||(this.nextButton.addEventListener("click",()=>{this.next()}),this.previousButton.addEventListener("click",()=>{this.previous()}))}setupKeyboardControls(){document.addEventListener("keyup",({code:t})=>{if(this.slides.length>1)switch(t){default:break;case"ArrowRight":this.next();break;case"ArrowLeft":this.previous();break}})}toggleFullscreen(){this.updateFullscreenButton(),this.fullscreen?this.exitFullscreen():this.enterFullscreen()}updateCounterElements(){!this.counterCurrent||!this.counterTotal||(this.counterCurrent.innerText=this.currentSlideIndex+1,this.counterTotal.innerText=this.slides.length)}updateCurrentSlideElement(){this.currentSlide&&(this.slides.forEach(t=>{t.dataset.lightboxSlideId!==this.currentId&&delete t.dataset.lightboxCurrent}),this.currentSlide.dataset.lightboxCurrent=!0)}updateFullscreenButton(){this.fullscreenButton&&(this.fullscreenButton.dataset.lightboxFullscreen=!this.fullscreen)}render(){return this.slides.length?(this.currentId=this.slideIds[this.currentSlideIndex],this.updateCurrentSlideElement(),this.updateCounterElements(),ht`
      <div class="q-lightbox">
        <slot></slot>
      </div>
    `):""}}T(ut,"properties",{currentId:{attribute:"current-id",type:String}});customElements.define("q-lightbox",ut);class ct extends m{get closeButton(){return this.querySelector("[data-modal-close]")}get lightbox(){return this.querySelector("q-lightbox")}constructor(){super(),this.setupKeyboardControls(),this.setupModalTriggers()}close(){this.active=!1,this.currentId=null,this.updateLightboxCurrentId(),this.enableScrolling()}disableScrolling(){document.querySelector("html").style.overflow="hidden"}enableScrolling(){document.querySelector("html").style.overflow="auto"}getCurrentFigureId(t){const{target:e}=t;let s=e;for(;!s.matches("figure")&&!s.getAttribute("id");)s=s.parentNode;return s.getAttribute("id")}open(t){this.currentId=this.getCurrentFigureId(t),this.active=!0,this.updateLightboxCurrentId(),this.disableScrolling()}setupCloseButton(){this.closeButton&&this.closeButton.addEventListener("click",()=>{this.close()})}setupKeyboardControls(){document.addEventListener("keyup",({code:t})=>{this.active&&t==="Escape"&&this.close()})}setupModalTriggers(){document.querySelectorAll(".q-figure__modal-link").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),this.open(e)})})}updateLightboxCurrentId(){this.lightbox&&this.lightbox.setAttribute("current-id",this.currentId)}render(){return this.dataset.modalActive=this.active,this.setupCloseButton(),ht`
      <div class="q-modal">
        <slot></slot>
      </div>
    `}}T(ct,"properties",{active:{type:Boolean},currentId:{attribute:"current-id",type:String}});customElements.define("q-modal",ct);
//# sourceMappingURL=index-07b30a4d.js.map
