var me=Object.defineProperty;var $e=(r,e,t)=>e in r?me(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var y=(r,e,t)=>($e(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,V=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),K=new WeakMap;let ne=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(V&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=K.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&K.set(t,e))}return e}toString(){return this.cssText}};const fe=r=>new ne(typeof r=="string"?r:r+"",void 0,J),R=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new ne(t,r,J)},ge=(r,e)=>{if(V)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=k.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},F=V?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return fe(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_e,defineProperty:ye,getOwnPropertyDescriptor:be,getOwnPropertyNames:ve,getOwnPropertySymbols:Ae,getPrototypeOf:xe}=Object,_=globalThis,Z=_.trustedTypes,Ee=Z?Z.emptyScript:"",L=_.reactiveElementPolyfillSupport,C=(r,e)=>r,j={toAttribute(r,e){switch(e){case Boolean:r=r?Ee:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},oe=(r,e)=>!_e(r,e),Q={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:oe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class x extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Q){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&ye(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=be(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const l=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Q}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=xe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const t=this.properties,i=[...ve(t),...Ae(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(F(s))}else e!==void 0&&t.push(F(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$ES??(this._$ES=[])).push(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$ES)==null||t.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ge(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:j).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:j;this._$Em=s,this[s]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i,s=!1,n){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??oe)(s?n:this[e],t))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$ES)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$ET()}catch(s){throw e=!1,this._$ET(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EO(t,this[t]))),this._$ET()}updated(e){}firstUpdated(e){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[C("elementProperties")]=new Map,x[C("finalized")]=new Map,L==null||L({ReactiveElement:x}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,H=P.trustedTypes,X=H?H.createPolicy("lit-html",{createHTML:r=>r}):void 0,ae="$lit$",g=`lit$${(Math.random()+"").slice(9)}$`,he="?"+g,we=`<${he}>`,A=document,N=()=>A.createComment(""),U=r=>r===null||typeof r!="object"&&typeof r!="function",le=Array.isArray,Se=r=>le(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",B=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,ee=/>/g,b=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),te=/'/g,se=/"/g,ce=/^(?:script|style|textarea|title)$/i,Ce=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),u=Ce(1),E=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ie=new WeakMap,v=A.createTreeWalker(A,129);function de(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(e):e}const Pe=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":"",o=S;for(let l=0;l<t;l++){const a=r[l];let c,p,h=-1,m=0;for(;m<a.length&&(o.lastIndex=m,p=o.exec(a),p!==null);)m=o.lastIndex,o===S?p[1]==="!--"?o=Y:p[1]!==void 0?o=ee:p[2]!==void 0?(ce.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=b):p[3]!==void 0&&(o=b):o===b?p[0]===">"?(o=s??S,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?b:p[3]==='"'?se:te):o===se||o===te?o=b:o===Y||o===ee?o=S:(o=b,s=void 0);const f=o===b&&r[l+1].startsWith("/>")?" ":"";n+=o===S?a+we:h>=0?(i.push(c),a.slice(0,h)+ae+a.slice(h)+g+f):a+g+(h===-2?l:f)}return[de(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class M{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[c,p]=Pe(e,t);if(this.el=M.createElement(c,i),v.currentNode=this.el.content,t===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=v.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(ae)){const m=p[o++],f=s.getAttribute(h).split(g),T=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:T[2],strings:f,ctor:T[1]==="."?Ue:T[1]==="?"?Me:T[1]==="@"?Oe:z}),s.removeAttribute(h)}else h.startsWith(g)&&(a.push({type:6,index:n}),s.removeAttribute(h));if(ce.test(s.tagName)){const h=s.textContent.split(g),m=h.length-1;if(m>0){s.textContent=H?H.emptyScript:"";for(let f=0;f<m;f++)s.append(h[f],N()),v.nextNode(),a.push({type:2,index:++n});s.append(h[m],N())}}}else if(s.nodeType===8)if(s.data===he)a.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(g,h+1))!==-1;)a.push({type:7,index:n}),h+=g.length-1}n++}}static createElement(e,t){const i=A.createElement("template");return i.innerHTML=e,i}}function w(r,e,t=r,i){var o,l;if(e===E)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=U(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=w(r,s._$AS(r,e.values),s,i)),e}class Ne{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??A).importNode(t,!0);v.currentNode=s;let n=v.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new O(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new Te(n,this,e)),this._$AV.push(c),a=i[++l]}o!==(a==null?void 0:a.index)&&(n=v.nextNode(),o++)}return v.currentNode=A,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class O{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=w(this,e,t),U(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Se(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==d&&U(this._$AH)?this._$AA.nextSibling.data=e:this.$(A.createTextNode(e)),this._$AH=e}g(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=M.createElement(de(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const o=new Ne(s,this),l=o.u(this.options);o.p(t),this.$(l),this._$AH=o}}_$AC(e){let t=ie.get(e.strings);return t===void 0&&ie.set(e.strings,t=new M(e)),t}T(e){le(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new O(this.k(N()),this.k(N()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=w(this,e,t,0),o=!U(e)||e!==this._$AH&&e!==E,o&&(this._$AH=e);else{const l=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=w(this,l[i+a],t,a),c===E&&(c=this._$AH[a]),o||(o=!U(c)||c!==this._$AH[a]),c===d?e=d:e!==d&&(e+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!s&&this.O(e)}O(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ue extends z{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===d?void 0:e}}class Me extends z{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Oe extends z{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=w(this,e,t,0)??d)===E)return;const i=this._$AH,s=e===d&&i!==d||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Te{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){w(this,e)}}const G=P.litHtmlPolyfillSupport;G==null||G(M,O),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.0.2");const ke=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new O(e.insertBefore(N(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $ extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ke(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return E}}var re;$._$litElement$=!0,$.finalized=!0,(re=globalThis.litElementHydrateSupport)==null||re.call(globalThis,{LitElement:$});const I=globalThis.litElementPolyfillSupport;I==null||I({LitElement:$});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.1");class D extends ${constructor(){super(),this.userName=""}handleInput(e){this.userName=e.target.value}handleStartGame(){const e=this.userName.trim();e.trim()?this.dispatchEvent(new CustomEvent("start-game",{detail:e})):alert("Por favor, introduce tu nombre.")}render(){return u`
        <div class="form">
            <i class="fas fa-user"></i>
            <i class="fa-solid fa-computer-mouse"></i>
            <form id="register-form" @submit="${this.handleStartGame}">
                <label>Name</label>
                <input type="text" .value="${this.userName}" @input="${this.handleInput}" placeholder="Enter your name" required />
                <button type="submit">Join</button>
            </form >
        </div >
            `}}y(D,"properties",{userName:{type:String}}),y(D,"styles",R`
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
    `);customElements.define("home-view",D);class q extends ${constructor(){super(),this.number=0,this.hide=!1,this.isCorrect=null,setTimeout(()=>this.hideCard(),2e3)}revealCard(){this.hide=!this.hide,this.requestUpdate(),this.hide||"vibrate"in navigator&&navigator.vibrate(200)}restartCard(){this.hide=!1,this.isCorrect=null}showCard(){this.hide=!1,this.isCorrect=null}hideCard(){this.hide=!0,this.isCorrect=null,this.requestUpdate()}render(){return u`
          <div class="card-number ${this.hide?"hide":""} ${this.isCorrect!==null?this.isCorrect?"correct":"incorrect":""}">
            ${this.hide?"":this.number}
          </div>
        `}}y(q,"properties",{number:Number,hide:Boolean,isCorrect:Boolean}),y(q,"styles",R`
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
        .correct {
            background-color: green; 
        }
        .incorrect {
            background-color: red;
        }
    `);customElements.define("card-number",q);const W={low:{type:"low",time:10,points:10},medium:{type:"medium",time:5,points:20},hight:{type:"hight",time:2,points:30}};class pe extends ${static get properties(){return{userName:{type:String},levels:{type:Array},color:{type:String}}}constructor(){super(),this.userName="User",this.levels=Object.values(W),this.color="#007bff",console.log(this.levels)}render(){return u`
          <div class="header" style="background-color: ${this.color}">
            <div class="header-user"> <span class="header-user-icon"></span>${this.userName}</div>
            <div class="header-level">
                <span>Level: </span>
                <select name="level" id="level" style="background-color: ${this.color}">
                ${Object.values(this.levels).map(e=>u`
                <option value="${e.type}">${e.type}</option>
                `)}
                </select>
            </div>
          </div>
        `}}y(pe,"styles",R`
        .header{
            width: 100%;
            height: 50px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: left;
            align-items: center;
            align-content: center;
            color : #fff;
        }
        .header-user, .header-level{
            font-size: 22px;
            display: flex;
            flex-direction: row;
            justify-content: left;
            width: 40%;
            align-items: center;
            text-transform: capitalize;
            margin: 0 20px;
        }
        .header-user-icon{
            display: block;
            width: 20px; 
            height: 20px; 
            background-image: url(/bbva-exercise/icons/user-solid.svg);
            background-size: contain; 
            background-repeat: no-repeat; 
            margin-right: 10px;
        }
        select{
            border: none;
            color: #fff;
        }
    `);customElements.define("header-user",pe);class ue extends ${static get properties(){return{username:{type:String},numbers:{type:Array},number:{type:Number},level:{type:String},points:{type:Number},startGame:{type:Boolean}}}constructor(){super(),this.numbers=[1,2,3,4,5,6,7,8,9],this.number=Math.floor(Math.random()*9)+1,this.level=W.hight.type,this.points=0,this.startGame=!1,this.gameMessage="Click the play button to start a new game"}startGameHandler(){this.startGame=!0,this.gameMessage="Memorize the cards!",this.shuffle(),this.number=Math.floor(Math.random()*9)+1,setTimeout(()=>this.hideCards(),2e3)}hideCards(){this.shadowRoot.querySelectorAll("card-number").forEach(t=>{t.hideCard()}),this.gameMessage=`Where is the number ${this.number}?`,this.requestUpdate()}showAllCards(){this.shadowRoot.querySelectorAll("card-number").forEach(t=>{t.showCard()}),this.requestUpdate()}cardClicked(e){const t=e.target,i=t.number;t.revealCard(),i===this.number?(t.isCorrect=!0,this.points+=this.generatePoint(this.level)):t.isCorrect=!1,setTimeout(()=>this.playAgain(),1500)}playAgain(){this.showAllCards(),this.startGameHandler()}generatePoint(e){return W[e].points}shuffle(){this.numbers.sort(()=>Math.random()-.5)}render(){return u`
      <header-user .userName="${this.username}" .level="${this.level}" .color="#fff"></header-user>
      <div class="game-points">
        <span>Points: ${this.points}</span>
      </div>
      ${this.startGame?"":u`
      <div class="game-message"><b>${this.gameMessage}</b></div>
      <div class="game-action">
        <button @click="${this.startGameHandler}">play</button>
        `}
      </div>
      
      ${this.startGame?u`
      <div class="game-message"><b>${this.gameMessage}</B></div>
        <div class="game-container">
          ${this.numbers.map(e=>u`
            <card-number .number="${e}" @click="${this.cardClicked}" ></card-number>
          `)}
        </div>
      `:""}
    `}}y(ue,"styles",R`
    .game-container, .game-action{
      display: flex;
      width: 80%;
      max-width: 450px;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      align-content: center;
      margin: 0 auto;
      margin-top: 20px;
    }
    .game-message{
      text-align: center;
    }
    .game-points{
      text-align: right;
      margin: 20px;
    } 
    .game-points span{
      font-size: 24px;
    }
    button {
      width: 100px; 
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
  `);customElements.define("game-view",ue);class He extends ${constructor(){super(),this.showGame=!1}static get properties(){return{showGame:{type:Boolean}}}handleStartGame(e){this.showGame=!0,this.username=e,this.requestUpdate()}render(){return u`
        ${this.showGame?u`<game-view .username=${this.username}></game-view>`:u`<home-view @start-game="${e=>this.handleStartGame(e.detail)}"></home-view>`}
    `}}customElements.define("app-container",He);
