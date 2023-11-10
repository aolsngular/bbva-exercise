var me=Object.defineProperty;var ge=(r,e,t)=>e in r?me(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var y=(r,e,t)=>(ge(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,V=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),K=new WeakMap;let ne=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(V&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=K.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&K.set(t,e))}return e}toString(){return this.cssText}};const $e=r=>new ne(typeof r=="string"?r:r+"",void 0,J),z=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new ne(t,r,J)},fe=(r,e)=>{if(V)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=O.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},F=V?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return $e(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:be,defineProperty:ye,getOwnPropertyDescriptor:_e,getOwnPropertyNames:ve,getOwnPropertySymbols:Ae,getPrototypeOf:xe}=Object,b=globalThis,Z=b.trustedTypes,Ee=Z?Z.emptyScript:"",L=b.reactiveElementPolyfillSupport,C=(r,e)=>r,j={toAttribute(r,e){switch(e){case Boolean:r=r?Ee:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},oe=(r,e)=>!be(r,e),Q={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:oe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);class x extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Q){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&ye(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=_e(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const l=i==null?void 0:i.call(this);n.call(this,o),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Q}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=xe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const t=this.properties,s=[...ve(t),...Ae(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(F(i))}else e!==void 0&&t.push(F(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$ES??(this._$ES=[])).push(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$ES)==null||t.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t){var n;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:j).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var n;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:j;this._$Em=i,this[i]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,s,i=!1,n){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??oe)(i?n:this[e],t))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$ES)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EO(t,this[t]))),this._$ET()}updated(e){}firstUpdated(e){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[C("elementProperties")]=new Map,x[C("finalized")]=new Map,L==null||L({ReactiveElement:x}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,R=P.trustedTypes,X=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,ae="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,he="?"+f,we=`<${he}>`,A=document,N=()=>A.createComment(""),k=r=>r===null||typeof r!="object"&&typeof r!="function",le=Array.isArray,Se=r=>le(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",B=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,ee=/>/g,_=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),te=/'/g,se=/"/g,ce=/^(?:script|style|textarea|title)$/i,Ce=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),p=Ce(1),E=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ie=new WeakMap,v=A.createTreeWalker(A,129);function de(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(e):e}const Pe=(r,e)=>{const t=r.length-1,s=[];let i,n=e===2?"<svg>":"",o=S;for(let l=0;l<t;l++){const a=r[l];let c,u,h=-1,m=0;for(;m<a.length&&(o.lastIndex=m,u=o.exec(a),u!==null);)m=o.lastIndex,o===S?u[1]==="!--"?o=Y:u[1]!==void 0?o=ee:u[2]!==void 0?(ce.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=_):u[3]!==void 0&&(o=_):o===_?u[0]===">"?(o=i??S,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?_:u[3]==='"'?se:te):o===se||o===te?o=_:o===Y||o===ee?o=S:(o=_,i=void 0);const $=o===_&&r[l+1].startsWith("/>")?" ":"";n+=o===S?a+we:h>=0?(s.push(c),a.slice(0,h)+ae+a.slice(h)+f+$):a+f+(h===-2?l:$)}return[de(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),s]};class U{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[c,u]=Pe(e,t);if(this.el=U.createElement(c,s),v.currentNode=this.el.content,t===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=v.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(ae)){const m=u[o++],$=i.getAttribute(h).split(f),M=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:M[2],strings:$,ctor:M[1]==="."?ke:M[1]==="?"?Ue:M[1]==="@"?Te:D}),i.removeAttribute(h)}else h.startsWith(f)&&(a.push({type:6,index:n}),i.removeAttribute(h));if(ce.test(i.tagName)){const h=i.textContent.split(f),m=h.length-1;if(m>0){i.textContent=R?R.emptyScript:"";for(let $=0;$<m;$++)i.append(h[$],N()),v.nextNode(),a.push({type:2,index:++n});i.append(h[m],N())}}}else if(i.nodeType===8)if(i.data===he)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(f,h+1))!==-1;)a.push({type:7,index:n}),h+=f.length-1}n++}}static createElement(e,t){const s=A.createElement("template");return s.innerHTML=e,s}}function w(r,e,t=r,s){var o,l;if(e===E)return e;let i=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const n=k(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=w(r,i._$AS(r,e.values),i,s)),e}class Ne{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??A).importNode(t,!0);v.currentNode=i;let n=v.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new T(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new Me(n,this,e)),this._$AV.push(c),a=s[++l]}o!==(a==null?void 0:a.index)&&(n=v.nextNode(),o++)}return v.currentNode=A,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class T{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=w(this,e,t),k(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Se(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==d&&k(this._$AH)?this._$AA.nextSibling.data=e:this.$(A.createTextNode(e)),this._$AH=e}g(e){var n;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=U.createElement(de(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const o=new Ne(i,this),l=o.u(this.options);o.p(t),this.$(l),this._$AH=o}}_$AC(e){let t=ie.get(e.strings);return t===void 0&&ie.set(e.strings,t=new U(e)),t}T(e){le(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new T(this.k(N()),this.k(N()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,i){const n=this.strings;let o=!1;if(n===void 0)e=w(this,e,t,0),o=!k(e)||e!==this._$AH&&e!==E,o&&(this._$AH=e);else{const l=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=w(this,l[s+a],t,a),c===E&&(c=this._$AH[a]),o||(o=!k(c)||c!==this._$AH[a]),c===d?e=d:e!==d&&(e+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!i&&this.O(e)}O(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ke extends D{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===d?void 0:e}}class Ue extends D{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Te extends D{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=w(this,e,t,0)??d)===E)return;const s=this._$AH,i=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Me{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){w(this,e)}}const I=P.litHtmlPolyfillSupport;I==null||I(U,T),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.0.2");const Oe=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const n=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new T(e.insertBefore(N(),n),n,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return E}}var re;g._$litElement$=!0,g.finalized=!0,(re=globalThis.litElementHydrateSupport)==null||re.call(globalThis,{LitElement:g});const G=globalThis.litElementPolyfillSupport;G==null||G({LitElement:g});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.1");class q extends g{constructor(){super(),this.userName=""}handleInput(e){this.userName=e.target.value}handleStartGame(){const e=this.userName.trim();e.trim()?this.dispatchEvent(new CustomEvent("start-game",{detail:e})):alert("Por favor, introduce tu nombre.")}render(){return p`
        <div class="form">
            <span class="icon-login"></span>
            <form id="register-form" @submit="${this.handleStartGame}">
                <label>Name</label>
                <input type="text" .value="${this.userName}" @input="${this.handleInput}" placeholder="Enter your name" required />
                <button type="submit">Join</button>
            </form >
        </div >
            `}}y(q,"properties",{userName:{type:String}}),y(q,"styles",z`
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
      .icon-login{
        display: block;
        width: 20px; 
        height: 20px; 
        background-image: url(/bbva-exercise/icons/computer-mouse-solid.svg);
        background-size: contain; 
        background-repeat: no-repeat;
        margin: 0 auto;
        margin-bottom: 20px; 
      }
    `);customElements.define("home-view",q);class W extends g{constructor(){super(),this.number=0,this.duration=1e4,this.hide=!1,this.isCorrect=null,setTimeout(()=>this.hideCard(),this.duration)}revealCard(){this.hide=!this.hide,this.requestUpdate(),this.hide||"vibrate"in navigator&&navigator.vibrate(200)}showCard(){this.hide=!1,this.isCorrect=null}hideCard(){this.hide=!0,this.isCorrect=null,this.requestUpdate()}render(){return p`
          <div class="card-number ${this.hide?"hide":""} ${this.isCorrect!==null?this.isCorrect?"correct":"incorrect":""}">
            ${this.hide?"":this.number}
          </div>
        `}}y(W,"properties",{number:Number,hide:Boolean,isCorrect:Boolean,duration:Number}),y(W,"styles",z`
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
    `);customElements.define("card-number",W);const H={low:{type:"low",time:1e4,points:10},medium:{type:"medium",time:5e3,points:20},hight:{type:"hight",time:2e3,points:30}};class ue extends g{static get properties(){return{userName:{type:String},levels:{type:Array},color:{type:String}}}constructor(){super(),this.userName="User",this.levels=Object.values(H),this.color="#007bff"}handleDurationChange(e){const t=e.target.value,s=e.target.options[e.target.selectedIndex].dataset.levelType;this.dispatchEvent(new CustomEvent("duration-change",{detail:{duration:t,level:s},bubbles:!0,composed:!0}))}render(){return p`
          <div class="header" style="background-color: ${this.color}">
            <div class="header-user"> <span class="header-user-icon"></span>${this.userName}</div>
            <div class="header-level">
                <span>Level: </span>
                <select name="level" id="level" style="background-color: ${this.color}" @change="${this.handleDurationChange}"s>
                ${Object.values(this.levels).map(e=>p`
                    <option value="${e.time}" data-level-type="${e.type}">${e.type}</option>
                `)}
                </select>
            </div>
          </div>
        `}}y(ue,"styles",z`
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
            width: 35%;
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
            font-size: 16px;
        }
    `);customElements.define("header-user",ue);class pe extends g{static get properties(){return{username:{type:String},numbers:{type:Array},number:{type:Number},level:{type:String},points:{type:Number},startGame:{type:Boolean},hideCardsDuration:{type:Number},cardsClickable:{type:Boolean}}}constructor(){super(),this.numbers=[1,2,3,4,5,6,7,8,9],this.number=Math.floor(Math.random()*9)+1,this.level=H.low.type,this.points=0,this.startGame=!1,this.gameMessage="Click the play button to start a new game",this.hideCardsDuration=H.low.time,this.cardsClickable=!1,this.addEventListener("duration-change",this.updateDuration.bind(this))}startGameHandler(){this.startGame=!0,this.gameMessage="Memorize the cards!",this.shuffle(),this.number=Math.floor(Math.random()*9)+1,this.cardsClickable=!1,setTimeout(()=>{this.hideCards(),this.cardsClickable=!0},this.hideCardsDuration)}showAllCards(){this.shadowRoot.querySelectorAll("card-number").forEach(t=>{t.showCard()}),this.requestUpdate()}hideCards(){this.shadowRoot.querySelectorAll("card-number").forEach(t=>{t.hideCard()}),this.gameMessage=`Where is the number ${this.number}?`,this.requestUpdate()}cardClicked(e){if(!this.cardsClickable)return;const t=e.target,s=t.number;t.revealCard(),s===this.number?(t.isCorrect=!0,this.points+=this.generatePoint(this.level)):t.isCorrect=!1,setTimeout(()=>this.playAgain(),1500)}playAgain(){this.showAllCards(),this.startGameHandler()}generatePoint(e){return H[e].points}updateDuration(e){this.hideCardsDuration=Number(e.detail.duration),this.level=e.detail.level}shuffle(){this.numbers.sort(()=>Math.random()-.5)}handleDurationChange(e){this.hideCardsDuration=e.target.value}render(){return p`
      <header-user .userName="${this.username}" .level="${this.level}" .color="#fff"></header-user>
      <div class="game-points">
        <span>Points: ${this.points}</span>
      </div>
      ${this.startGame?"":p`
      <div class="game-message"><b>${this.gameMessage}</b></div>
      <div class="game-action">
        <button @click="${this.startGameHandler}">play</button>
        `}
      </div>
      
      ${this.startGame?p`
      <div class="game-message"><b>${this.gameMessage}</B></div>
        <div class="game-container">
          ${this.numbers.map(e=>p`
            <card-number .number="${e}" .duration="${this.hideCardsDuration}" @click="${this.cardClicked}" ></card-number>
          `)}
        </div>
      `:""}
    `}}y(pe,"styles",z`
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
  `);customElements.define("game-view",pe);class He extends g{constructor(){super(),this.showGame=!1}static get properties(){return{showGame:{type:Boolean}}}handleStartGame(e){this.showGame=!0,this.username=e,this.requestUpdate()}render(){return p`
        ${this.showGame?p`<game-view .username=${this.username}></game-view>`:p`<home-view @start-game="${e=>this.handleStartGame(e.detail)}"></home-view>`}
    `}}customElements.define("app-container",He);
