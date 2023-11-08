var pt=Object.defineProperty;var ut=(r,t,e)=>t in r?pt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var v=(r,t,e)=>(ut(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,G=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),J=new WeakMap;let rt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(G&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&J.set(e,t))}return t}toString(){return this.cssText}};const $t=r=>new rt(typeof r=="string"?r:r+"",void 0,q),V=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new rt(e,r,q)},mt=(r,t)=>{if(G)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=M.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},K=G?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return $t(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ft,defineProperty:_t,getOwnPropertyDescriptor:gt,getOwnPropertyNames:yt,getOwnPropertySymbols:At,getPrototypeOf:bt}=Object,f=globalThis,F=f.trustedTypes,vt=F?F.emptyScript:"",L=f.reactiveElementPolyfillSupport,P=(r,t)=>r,D={toAttribute(r,t){switch(t){case Boolean:r=r?vt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},nt=(r,t)=>!ft(r,t),Z={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:nt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),f.litPropertyMetadata??(f.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&_t(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=gt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const l=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Z}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=bt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,i=[...yt(e),...At(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(K(s))}else t!==void 0&&e.push(K(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$ES??(this._$ES=[])).push(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$ES)==null||e.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){var n;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:D).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var n;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:D;this._$Em=s,this[s]=l.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??nt)(s?n:this[t],e))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$ES)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(e)):this._$ET()}catch(s){throw t=!1,this._$ET(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[P("elementProperties")]=new Map,E[P("finalized")]=new Map,L==null||L({ReactiveElement:E}),(f.reactiveElementVersions??(f.reactiveElementVersions=[])).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,R=C.trustedTypes,Q=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,ot="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,ht="?"+m,Et=`<${ht}>`,b=document,N=()=>b.createComment(""),U=r=>r===null||typeof r!="object"&&typeof r!="function",at=Array.isArray,St=r=>at(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",z=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,Y=/>/g,g=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,lt=/^(?:script|style|textarea|title)$/i,wt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),A=wt(1),S=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),st=new WeakMap,y=b.createTreeWalker(b,129);function ct(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Q!==void 0?Q.createHTML(t):t}const xt=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":"",o=x;for(let l=0;l<e;l++){const h=r[l];let c,p,a=-1,u=0;for(;u<h.length&&(o.lastIndex=u,p=o.exec(h),p!==null);)u=o.lastIndex,o===x?p[1]==="!--"?o=X:p[1]!==void 0?o=Y:p[2]!==void 0?(lt.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=g):p[3]!==void 0&&(o=g):o===g?p[0]===">"?(o=s??x,a=-1):p[1]===void 0?a=-2:(a=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?g:p[3]==='"'?et:tt):o===et||o===tt?o=g:o===X||o===Y?o=x:(o=g,s=void 0);const $=o===g&&r[l+1].startsWith("/>")?" ":"";n+=o===x?h+Et:a>=0?(i.push(c),h.slice(0,a)+ot+h.slice(a)+m+$):h+m+(a===-2?l:$)}return[ct(r,n+(r[e]||"<?>")+(t===2?"</svg>":"")),i]};class O{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const l=t.length-1,h=this.parts,[c,p]=xt(t,e);if(this.el=O.createElement(c,i),y.currentNode=this.el.content,e===2){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(s=y.nextNode())!==null&&h.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const a of s.getAttributeNames())if(a.endsWith(ot)){const u=p[o++],$=s.getAttribute(a).split(m),H=/([.?@])?(.*)/.exec(u);h.push({type:1,index:n,name:H[2],strings:$,ctor:H[1]==="."?Ct:H[1]==="?"?Nt:H[1]==="@"?Ut:k}),s.removeAttribute(a)}else a.startsWith(m)&&(h.push({type:6,index:n}),s.removeAttribute(a));if(lt.test(s.tagName)){const a=s.textContent.split(m),u=a.length-1;if(u>0){s.textContent=R?R.emptyScript:"";for(let $=0;$<u;$++)s.append(a[$],N()),y.nextNode(),h.push({type:2,index:++n});s.append(a[u],N())}}}else if(s.nodeType===8)if(s.data===ht)h.push({type:2,index:n});else{let a=-1;for(;(a=s.data.indexOf(m,a+1))!==-1;)h.push({type:7,index:n}),a+=m.length-1}n++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function w(r,t,e=r,i){var o,l;if(t===S)return t;let s=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const n=U(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=w(r,s._$AS(r,t.values),s,i)),t}class Pt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??b).importNode(e,!0);y.currentNode=s;let n=y.nextNode(),o=0,l=0,h=i[0];for(;h!==void 0;){if(o===h.index){let c;h.type===2?c=new T(n,n.nextSibling,this,t):h.type===1?c=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(c=new Ot(n,this,t)),this._$AV.push(c),h=i[++l]}o!==(h==null?void 0:h.index)&&(n=y.nextNode(),o++)}return y.currentNode=b,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class T{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),U(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):St(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==d&&U(this._$AH)?this._$AA.nextSibling.data=t:this.$(b.createTextNode(t)),this._$AH=t}g(t){var n;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=O.createElement(ct(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(e);else{const o=new Pt(s,this),l=o.u(this.options);o.p(e),this.$(l),this._$AH=o}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new O(t)),e}T(t){at(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new T(this.k(N()),this.k(N()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=w(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==S,o&&(this._$AH=t);else{const l=t;let h,c;for(t=n[0],h=0;h<n.length-1;h++)c=w(this,l[i+h],e,h),c===S&&(c=this._$AH[h]),o||(o=!U(c)||c!==this._$AH[h]),c===d?t=d:t!==d&&(t+=(c??"")+n[h+1]),this._$AH[h]=c}o&&!s&&this.O(t)}O(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ct extends k{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===d?void 0:t}}class Nt extends k{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Ut extends k{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??d)===S)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const I=C.litHtmlPolyfillSupport;I==null||I(O,T),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.0.2");const Tt=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const n=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new T(t.insertBefore(N(),n),n,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _ extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}}var it;_._$litElement$=!0,_.finalized=!0,(it=globalThis.litElementHydrateSupport)==null||it.call(globalThis,{LitElement:_});const B=globalThis.litElementPolyfillSupport;B==null||B({LitElement:_});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.1");class j extends _{constructor(){super(),this.userName=""}handleInput(t){this.userName=t.target.value}handleStartGame(){const t=this.userName.trim();t.trim()?this.dispatchEvent(new CustomEvent("start-game",{detail:t})):alert("Por favor, introduce tu nombre.")}render(){return A`
        <div class="form">
            <form id="register-form" @submit="${this.handleStartGame}">
                <label>Name</label>
                <input type="text" .value="${this.userName}" @input="${this.handleInput}" placeholder="Enter your name" required />
                <button type="submit">Join</button>
            </form >
        </div >
            `}}v(j,"properties",{userName:{type:String}}),v(j,"styles",V`
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
    `);customElements.define("home-view",j);class W extends _{constructor(){super(),this.number=0,this.hide=!1,setTimeout(()=>this.handleNumber(),2e3)}handleNumber(){this.hide=!this.hide,this.requestUpdate(),this.hide||"vibrate"in navigator&&navigator.vibrate(200)}render(){return A`
        <div class="card-number ${this.hide?"hide":""}" @click=${this.handleNumber}>
        ${this.hide?"":this.number}
      </div>
    `}}v(W,"properties",{number:Number,hide:Boolean}),v(W,"styles",V`
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
    `);customElements.define("card-number",W);class dt extends _{static get properties(){return{username:{type:String},numbers:{type:Array},number:{type:Number},level:{type:String},points:{type:Number}}}constructor(){super(),this.numbers=[1,2,3,4,5,6,7,8,9],this.number=Math.floor(Math.random()*9)+1,this.level="low",this.points=0,this.shuffle()}shuffle(){this.numbers.sort(()=>Math.random()-.5)}updatePoints(t){this.points+=t.value}render(){return A`
      <p>${this.username} level: ${this.level}</p>
      <div>
        <span>Points: ${this.points}</span>
      </div>
      <div class="tips-game>Memorize the cards</div>
      <div class="guess-game><span>Where is the number ${this.number}? </span></div>
      <div class="container-game">
        ${this.numbers.map(t=>A`
            <card-number number="${t}" ></card-number>
          `)}
      </div>
      `}}v(dt,"styles",V`
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
  `);customElements.define("game-view",dt);class Ht extends _{constructor(){super(),this.showGame=!1}static get properties(){return{showGame:{type:Boolean}}}handleStartGame(t){this.showGame=!0,this.username=t,this.requestUpdate()}render(){return A`
        ${this.showGame?A`<game-view .username=${this.username}></game-view>`:A`<home-view @start-game="${t=>this.handleStartGame(t.detail)}"></home-view>`}
    `}}customElements.define("app-container",Ht);
