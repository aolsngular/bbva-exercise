var ue=Object.defineProperty;var me=(r,e,t)=>e in r?ue(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var A=(r,e,t)=>(me(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,G=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),K=new WeakMap;let ne=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(G&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=K.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&K.set(t,e))}return e}toString(){return this.cssText}};const $e=r=>new ne(typeof r=="string"?r:r+"",void 0,V),J=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new ne(t,r,V)},fe=(r,e)=>{if(G)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=M.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},F=G?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return $e(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ge,defineProperty:_e,getOwnPropertyDescriptor:ye,getOwnPropertyNames:be,getOwnPropertySymbols:ve,getPrototypeOf:Ae}=Object,f=globalThis,Z=f.trustedTypes,Ee=Z?Z.emptyScript:"",L=f.reactiveElementPolyfillSupport,C=(r,e)=>r,j={toAttribute(r,e){switch(e){case Boolean:r=r?Ee:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},oe=(r,e)=>!ge(r,e),Q={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:oe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),f.litPropertyMetadata??(f.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Q){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&_e(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=ye(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const l=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Q}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=Ae(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const t=this.properties,i=[...be(t),...ve(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(F(s))}else e!==void 0&&t.push(F(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$ES??(this._$ES=[])).push(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$ES)==null||t.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:j).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:j;this._$Em=s,this[s]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i,s=!1,n){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??oe)(s?n:this[e],t))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$ES)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$ET()}catch(s){throw e=!1,this._$ET(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EO(t,this[t]))),this._$ET()}updated(e){}firstUpdated(e){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[C("elementProperties")]=new Map,E[C("finalized")]=new Map,L==null||L({ReactiveElement:E}),(f.reactiveElementVersions??(f.reactiveElementVersions=[])).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,R=P.trustedTypes,X=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,he="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,ae="?"+$,Se=`<${ae}>`,v=document,N=()=>v.createComment(""),U=r=>r===null||typeof r!="object"&&typeof r!="function",le=Array.isArray,we=r=>le(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",z=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,ee=/>/g,_=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),te=/'/g,se=/"/g,ce=/^(?:script|style|textarea|title)$/i,xe=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),b=xe(1),S=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ie=new WeakMap,y=v.createTreeWalker(v,129);function de(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(e):e}const Ce=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":"",o=x;for(let l=0;l<t;l++){const h=r[l];let c,p,a=-1,u=0;for(;u<h.length&&(o.lastIndex=u,p=o.exec(h),p!==null);)u=o.lastIndex,o===x?p[1]==="!--"?o=Y:p[1]!==void 0?o=ee:p[2]!==void 0?(ce.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=_):p[3]!==void 0&&(o=_):o===_?p[0]===">"?(o=s??x,a=-1):p[1]===void 0?a=-2:(a=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?_:p[3]==='"'?se:te):o===se||o===te?o=_:o===Y||o===ee?o=x:(o=_,s=void 0);const m=o===_&&r[l+1].startsWith("/>")?" ":"";n+=o===x?h+Se:a>=0?(i.push(c),h.slice(0,a)+he+h.slice(a)+$+m):h+$+(a===-2?l:m)}return[de(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class O{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const l=e.length-1,h=this.parts,[c,p]=Ce(e,t);if(this.el=O.createElement(c,i),y.currentNode=this.el.content,t===2){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(s=y.nextNode())!==null&&h.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const a of s.getAttributeNames())if(a.endsWith(he)){const u=p[o++],m=s.getAttribute(a).split($),H=/([.?@])?(.*)/.exec(u);h.push({type:1,index:n,name:H[2],strings:m,ctor:H[1]==="."?Ne:H[1]==="?"?Ue:H[1]==="@"?Oe:k}),s.removeAttribute(a)}else a.startsWith($)&&(h.push({type:6,index:n}),s.removeAttribute(a));if(ce.test(s.tagName)){const a=s.textContent.split($),u=a.length-1;if(u>0){s.textContent=R?R.emptyScript:"";for(let m=0;m<u;m++)s.append(a[m],N()),y.nextNode(),h.push({type:2,index:++n});s.append(a[u],N())}}}else if(s.nodeType===8)if(s.data===ae)h.push({type:2,index:n});else{let a=-1;for(;(a=s.data.indexOf($,a+1))!==-1;)h.push({type:7,index:n}),a+=$.length-1}n++}}static createElement(e,t){const i=v.createElement("template");return i.innerHTML=e,i}}function w(r,e,t=r,i){var o,l;if(e===S)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=U(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=w(r,s._$AS(r,e.values),s,i)),e}class Pe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??v).importNode(t,!0);y.currentNode=s;let n=y.nextNode(),o=0,l=0,h=i[0];for(;h!==void 0;){if(o===h.index){let c;h.type===2?c=new T(n,n.nextSibling,this,e):h.type===1?c=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(c=new Te(n,this,e)),this._$AV.push(c),h=i[++l]}o!==(h==null?void 0:h.index)&&(n=y.nextNode(),o++)}return y.currentNode=v,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class T{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=w(this,e,t),U(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):we(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==d&&U(this._$AH)?this._$AA.nextSibling.data=e:this.$(v.createTextNode(e)),this._$AH=e}g(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=O.createElement(de(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const o=new Pe(s,this),l=o.u(this.options);o.p(t),this.$(l),this._$AH=o}}_$AC(e){let t=ie.get(e.strings);return t===void 0&&ie.set(e.strings,t=new O(e)),t}T(e){le(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new T(this.k(N()),this.k(N()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=w(this,e,t,0),o=!U(e)||e!==this._$AH&&e!==S,o&&(this._$AH=e);else{const l=e;let h,c;for(e=n[0],h=0;h<n.length-1;h++)c=w(this,l[i+h],t,h),c===S&&(c=this._$AH[h]),o||(o=!U(c)||c!==this._$AH[h]),c===d?e=d:e!==d&&(e+=(c??"")+n[h+1]),this._$AH[h]=c}o&&!s&&this.O(e)}O(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ne extends k{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===d?void 0:e}}class Ue extends k{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Oe extends k{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=w(this,e,t,0)??d)===S)return;const i=this._$AH,s=e===d&&i!==d||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Te{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){w(this,e)}}const I=P.litHtmlPolyfillSupport;I==null||I(O,T),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.0.2");const He=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new T(e.insertBefore(N(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=He(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return S}}var re;g._$litElement$=!0,g.finalized=!0,(re=globalThis.litElementHydrateSupport)==null||re.call(globalThis,{LitElement:g});const B=globalThis.litElementPolyfillSupport;B==null||B({LitElement:g});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.1");class W extends g{constructor(){super(),this.userName=""}handleInput(e){this.userName=e.target.value}handleStartGame(){const e=this.userName.trim();e.trim()?this.dispatchEvent(new CustomEvent("start-game",{detail:e})):alert("Por favor, introduce tu nombre.")}render(){return b`
        <div class="form">
            <form id="register-form" @submit="${this.handleStartGame}">
                <label>Name</label>
                <input type="text" .value="${this.userName}" @input="${this.handleInput}" placeholder="Enter your name" required />
                <button type="submit">Join</button>
            </form >
        </div >
            `}}A(W,"properties",{userName:{type:String}}),A(W,"styles",J`
       .form {
        width: 80%; 
        max-width: 400px;
        padding: 20px; 
        box-sizing: border-box; 
        margin: 0 auto;
        margin-top: 150px;
      }
      label {
        color: #007bff;
      }
      input {
        width: 100%; 
        padding: 10px; 
        margin: 10px 0;
        border: none;
        border-bottom: 1px solid #ccc; 
        border-radius: 4px;
        box-sizing: border-box;
        outline: none;
        padding-left: 0;

      }
      button {
        width: 100%; 
        padding: 10px; 
        border: none; 
        background-color: #007bff;
        color: white; 
        border-radius: 4px; 
        font-size: 16px; 
        cursor: pointer;
        text-transform: uppercase;
      }
      
      button:hover {
        background-color: #0056b3;
      }
    `);customElements.define("home-view",W);class q extends g{constructor(){super(),this.number=0,this.hide=!1,setTimeout(()=>this.handleNumber(),2e3)}handleNumber(){if(this.hide=!this.hide,this.requestUpdate(),!this.hide){"vibrate"in navigator&&navigator.vibrate(200);let e=new CustomEvent("card-revealed",{detail:{number:this.number},bubbles:!0,composed:!0});this.dispatchEvent(e)}}render(){return b`
        <div class="card-number ${this.hide?"hide":""}" @click=${this.handleNumber}>
        ${this.hide?"":this.number}
      </div>
    `}}A(q,"properties",{number:Number,hide:Boolean}),A(q,"styles",J`
        .card-number{
            width: 75px;
            height: 75px;
            font-size: 40px;
            border: 2px solid black;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: 10px;
            cursor: pointer;
            transition: background-image 0.5s;
            background-size: cover;
        }
        .hide{
            background-image: url(/bbva-exercise/icons/android-chrome-72x72.png);
        }
    `);customElements.define("card-number",q);const D={low:{type:"low",time:10,points:10},medium:{type:"medium",time:5,points:20},hight:{type:"hight",time:2,points:30}};class pe extends g{static get properties(){return{username:{type:String},numbers:{type:Array},number:{type:Number},level:{type:String},points:{type:Number}}}constructor(){super(),this.numbers=[1,2,3,4,5,6,7,8,9],this.number=Math.floor(Math.random()*9)+1,console.log(D),this.level=D.hight.type,this.points=0,this.shuffle(),this.addEventListener("card-revealed",this.handleCardRevealed)}handleCardRevealed(e){Number(e.detail.number)===this.number&&(this.points+=this.generatePoint(this.level),this.number=Math.floor(Math.random()*9)+1,this.shuffle(),this.requestUpdate())}generatePoint(e){return D[e].points}shuffle(){this.numbers.sort(()=>Math.random()-.5)}updatePoints(e){this.points+=e.value}render(){return b`
      <p>${this.username} level: ${this.level}</p>
      <div>
        <span>Points: ${this.points}</span>
      </div>
      <div class="tips-game>Memorize the cards</div>
      <div class="guess-game><span>Where is the number ${this.number}? </span></div>
      <div class="container-game">
        ${this.numbers.map(e=>b`
            <card-number number="${e}" ></card-number>
          `)}
      </div>
      `}}A(pe,"styles",J`
    .container-game{
      display: flex;
      width: 80%;
      max-width: 450px;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      margin: 0 auto;
    
    }
  `);customElements.define("game-view",pe);class Me extends g{constructor(){super(),this.showGame=!1}static get properties(){return{showGame:{type:Boolean}}}handleStartGame(e){this.showGame=!0,this.username=e,this.requestUpdate()}render(){return b`
        ${this.showGame?b`<game-view .username=${this.username}></game-view>`:b`<home-view @start-game="${e=>this.handleStartGame(e.detail)}"></home-view>`}
    `}}customElements.define("app-container",Me);
