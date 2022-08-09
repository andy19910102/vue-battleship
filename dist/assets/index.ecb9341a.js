const as=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};as();function Br(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const is="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",os=Br(is);function Ti(e){return!!e||e===""}function Xe(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?fs(r):Xe(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(J(e))return e}}const ss=/;(?![^(]*\))/g,ls=/:(.+)/;function fs(e){const t={};return e.split(ss).forEach(n=>{if(n){const r=n.split(ls);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Wt(e){let t="";if(ee(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const r=Wt(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function cs(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Ln(e[r],t[r]);return n}function Ln(e,t){if(e===t)return!0;let n=Sa(e),r=Sa(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Kt(e),r=Kt(t),n||r)return e===t;if(n=M(e),r=M(t),n||r)return n&&r?cs(e,t):!1;if(n=J(e),r=J(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!Ln(e[o],t[o]))return!1}}return String(e)===String(t)}function us(e,t){return e.findIndex(n=>Ln(n,t))}const rn=e=>ee(e)?e:e==null?"":M(e)||J(e)&&(e.toString===Fi||!R(e.toString))?JSON.stringify(e,Mi,2):String(e),Mi=(e,t)=>t&&t.__v_isRef?Mi(e,t.value):_t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:zn(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!M(t)&&!Li(t)?String(t):t,Y={},wt=[],Ae=()=>{},ds=()=>!1,ms=/^on[^a-z]/,Rn=e=>ms.test(e),Hr=e=>e.startsWith("onUpdate:"),oe=Object.assign,Yr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ps=Object.prototype.hasOwnProperty,D=(e,t)=>ps.call(e,t),M=Array.isArray,_t=e=>Zt(e)==="[object Map]",zn=e=>Zt(e)==="[object Set]",Sa=e=>Zt(e)==="[object Date]",R=e=>typeof e=="function",ee=e=>typeof e=="string",Kt=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Ni=e=>J(e)&&R(e.then)&&R(e.catch),Fi=Object.prototype.toString,Zt=e=>Fi.call(e),hs=e=>Zt(e).slice(8,-1),Li=e=>Zt(e)==="[object Object]",Wr=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,dn=Br(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},gs=/-(\w)/g,Me=jn(e=>e.replace(gs,(t,n)=>n?n.toUpperCase():"")),vs=/\B([A-Z])/g,Ot=jn(e=>e.replace(vs,"-$1").toLowerCase()),Dn=jn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ar=jn(e=>e?`on${Dn(e)}`:""),xn=(e,t)=>!Object.is(e,t),mn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},wn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},_n=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Oa;const bs=()=>Oa||(Oa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pe;class ys{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Pe&&(this.parent=Pe,this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function xs(e,t=Pe){t&&t.active&&t.effects.push(e)}const Kr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ri=e=>(e.w&Ze)>0,zi=e=>(e.n&Ze)>0,ws=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},_s=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ri(a)&&!zi(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},pr=new WeakMap;let Rt=0,Ze=1;const hr=30;let ye;const lt=Symbol(""),gr=Symbol("");class Vr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xs(this,r)}run(){if(!this.active)return this.fn();let t=ye,n=Ge;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ye,ye=this,Ge=!0,Ze=1<<++Rt,Rt<=hr?ws(this):Ea(this),this.fn()}finally{Rt<=hr&&_s(this),Ze=1<<--Rt,ye=this.parent,Ge=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ye===this?this.deferStop=!0:this.active&&(Ea(this),this.onStop&&this.onStop(),this.active=!1)}}function Ea(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ge=!0;const ji=[];function Et(){ji.push(Ge),Ge=!1}function Pt(){const e=ji.pop();Ge=e===void 0?!0:e}function he(e,t,n){if(Ge&&ye){let r=pr.get(e);r||pr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Kr()),Di(a)}}function Di(e,t){let n=!1;Rt<=hr?zi(e)||(e.n|=Ze,n=!Ri(e)):n=!e.has(ye),n&&(e.add(ye),ye.deps.push(e))}function ze(e,t,n,r,a,i){const o=pr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&M(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":M(e)?Wr(n)&&s.push(o.get("length")):(s.push(o.get(lt)),_t(e)&&s.push(o.get(gr)));break;case"delete":M(e)||(s.push(o.get(lt)),_t(e)&&s.push(o.get(gr)));break;case"set":_t(e)&&s.push(o.get(lt));break}if(s.length===1)s[0]&&vr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);vr(Kr(l))}}function vr(e,t){const n=M(e)?e:[...e];for(const r of n)r.computed&&Pa(r);for(const r of n)r.computed||Pa(r)}function Pa(e,t){(e!==ye||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ks=Br("__proto__,__v_isRef,__isVue"),$i=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Kt)),As=qr(),Cs=qr(!1,!0),Ss=qr(!0),Ia=Os();function Os(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)he(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Et();const r=U(this)[t].apply(this,n);return Pt(),r}}),e}function qr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Hs:Wi:t?Yi:Hi).get(r))return r;const o=M(r);if(!e&&o&&D(Ia,a))return Reflect.get(Ia,a,i);const s=Reflect.get(r,a,i);return(Kt(a)?$i.has(a):ks(a))||(e||he(r,"get",a),t)?s:ie(s)?o&&Wr(a)?s:s.value:J(s)?e?Ki(s):Jr(s):s}}const Es=Ui(),Ps=Ui(!0);function Ui(e=!1){return function(n,r,a,i){let o=n[r];if(Vt(o)&&ie(o)&&!ie(a))return!1;if(!e&&!Vt(a)&&(br(a)||(a=U(a),o=U(o)),!M(n)&&ie(o)&&!ie(a)))return o.value=a,!0;const s=M(n)&&Wr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?xn(a,o)&&ze(n,"set",r,a):ze(n,"add",r,a)),l}}function Is(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ze(e,"delete",t,void 0),r}function Ts(e,t){const n=Reflect.has(e,t);return(!Kt(t)||!$i.has(t))&&he(e,"has",t),n}function Ms(e){return he(e,"iterate",M(e)?"length":lt),Reflect.ownKeys(e)}const Bi={get:As,set:Es,deleteProperty:Is,has:Ts,ownKeys:Ms},Ns={get:Ss,set(e,t){return!0},deleteProperty(e,t){return!0}},Fs=oe({},Bi,{get:Cs,set:Ps}),Xr=e=>e,$n=e=>Reflect.getPrototypeOf(e);function an(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&he(a,"get",t),he(a,"get",i));const{has:o}=$n(a),s=r?Xr:n?ea:Qr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function on(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&he(r,"has",e),he(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function sn(e,t=!1){return e=e.__v_raw,!t&&he(U(e),"iterate",lt),Reflect.get(e,"size",e)}function Ta(e){e=U(e);const t=U(this);return $n(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function Ma(e,t){t=U(t);const n=U(this),{has:r,get:a}=$n(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?xn(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function Na(e){const t=U(this),{has:n,get:r}=$n(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function Fa(){const e=U(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function ln(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Xr:e?ea:Qr;return!e&&he(s,"iterate",lt),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function fn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=_t(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Xr:t?ea:Qr;return!t&&he(i,"iterate",l?gr:lt),{next(){const{value:m,done:v}=u.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function We(e){return function(...t){return e==="delete"?!1:this}}function Ls(){const e={get(i){return an(this,i)},get size(){return sn(this)},has:on,add:Ta,set:Ma,delete:Na,clear:Fa,forEach:ln(!1,!1)},t={get(i){return an(this,i,!1,!0)},get size(){return sn(this)},has:on,add:Ta,set:Ma,delete:Na,clear:Fa,forEach:ln(!1,!0)},n={get(i){return an(this,i,!0)},get size(){return sn(this,!0)},has(i){return on.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:ln(!0,!1)},r={get(i){return an(this,i,!0,!0)},get size(){return sn(this,!0)},has(i){return on.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:ln(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=fn(i,!1,!1),n[i]=fn(i,!0,!1),t[i]=fn(i,!1,!0),r[i]=fn(i,!0,!0)}),[e,n,t,r]}const[Rs,zs,js,Ds]=Ls();function Gr(e,t){const n=t?e?Ds:js:e?zs:Rs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const $s={get:Gr(!1,!1)},Us={get:Gr(!1,!0)},Bs={get:Gr(!0,!1)},Hi=new WeakMap,Yi=new WeakMap,Wi=new WeakMap,Hs=new WeakMap;function Ys(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ws(e){return e.__v_skip||!Object.isExtensible(e)?0:Ys(hs(e))}function Jr(e){return Vt(e)?e:Zr(e,!1,Bi,$s,Hi)}function Ks(e){return Zr(e,!1,Fs,Us,Yi)}function Ki(e){return Zr(e,!0,Ns,Bs,Wi)}function Zr(e,t,n,r,a){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ws(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function kt(e){return Vt(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function br(e){return!!(e&&e.__v_isShallow)}function Vi(e){return kt(e)||Vt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function qi(e){return wn(e,"__v_skip",!0),e}const Qr=e=>J(e)?Jr(e):e,ea=e=>J(e)?Ki(e):e;function Vs(e){Ge&&ye&&(e=U(e),Di(e.dep||(e.dep=Kr())))}function qs(e,t){e=U(e),e.dep&&vr(e.dep)}function ie(e){return!!(e&&e.__v_isRef===!0)}function Xs(e){return ie(e)?e.value:e}const Gs={get:(e,t,n)=>Xs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ie(a)&&!ie(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Xi(e){return kt(e)?e:new Proxy(e,Gs)}class Js{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Vr(t,()=>{this._dirty||(this._dirty=!0,qs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Vs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Zs(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=Ae):(r=e.get,a=e.set),new Js(r,a,i||!a,n)}function Je(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Un(i,t,n)}return a}function Ce(e,t,n,r){if(R(e)){const i=Je(e,t,n,r);return i&&Ni(i)&&i.catch(o=>{Un(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ce(e[i],t,n,r));return a}function Un(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Je(l,null,10,[e,o,s]);return}}Qs(e,n,a,r)}function Qs(e,t,n,r=!0){console.error(e)}let kn=!1,yr=!1;const pe=[];let Re=0;const Dt=[];let zt=null,vt=0;const $t=[];let Ve=null,bt=0;const Gi=Promise.resolve();let ta=null,xr=null;function el(e){const t=ta||Gi;return e?t.then(this?e.bind(this):e):t}function tl(e){let t=Re+1,n=pe.length;for(;t<n;){const r=t+n>>>1;qt(pe[r])<e?t=r+1:n=r}return t}function Ji(e){(!pe.length||!pe.includes(e,kn&&e.allowRecurse?Re+1:Re))&&e!==xr&&(e.id==null?pe.push(e):pe.splice(tl(e.id),0,e),Zi())}function Zi(){!kn&&!yr&&(yr=!0,ta=Gi.then(to))}function nl(e){const t=pe.indexOf(e);t>Re&&pe.splice(t,1)}function Qi(e,t,n,r){M(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Zi()}function rl(e){Qi(e,zt,Dt,vt)}function al(e){Qi(e,Ve,$t,bt)}function Bn(e,t=null){if(Dt.length){for(xr=t,zt=[...new Set(Dt)],Dt.length=0,vt=0;vt<zt.length;vt++)zt[vt]();zt=null,vt=0,xr=null,Bn(e,t)}}function eo(e){if(Bn(),$t.length){const t=[...new Set($t)];if($t.length=0,Ve){Ve.push(...t);return}for(Ve=t,Ve.sort((n,r)=>qt(n)-qt(r)),bt=0;bt<Ve.length;bt++)Ve[bt]();Ve=null,bt=0}}const qt=e=>e.id==null?1/0:e.id;function to(e){yr=!1,kn=!0,Bn(e),pe.sort((n,r)=>qt(n)-qt(r));const t=Ae;try{for(Re=0;Re<pe.length;Re++){const n=pe[Re];n&&n.active!==!1&&Je(n,null,14)}}finally{Re=0,pe.length=0,eo(),kn=!1,ta=null,(pe.length||Dt.length||$t.length)&&to(e)}}function il(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Y;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||Y;v&&(a=n.map(A=>A.trim())),m&&(a=n.map(_n))}let s,l=r[s=ar(t)]||r[s=ar(Me(t))];!l&&i&&(l=r[s=ar(Ot(t))]),l&&Ce(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ce(u,e,6,a)}}function no(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=u=>{const d=no(u,t,!0);d&&(s=!0,oe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(M(i)?i.forEach(l=>o[l]=null):oe(o,i),r.set(e,o),o)}function Hn(e,t){return!e||!Rn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,Ot(t))||D(e,t))}let we=null,Yn=null;function An(e){const t=we;return we=e,Yn=e&&e.type.__scopeId||null,t}function ol(e){Yn=e}function sl(){Yn=null}function ll(e,t=we,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ya(-1);const i=An(t),o=e(...a);return An(i),r._d&&Ya(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ir(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:v,setupState:A,ctx:L,inheritAttrs:z}=e;let T,y;const S=An(e);try{if(n.shapeFlag&4){const j=a||r;T=Ie(d.call(j,j,m,i,A,v,L)),y=l}else{const j=t;T=Ie(j.length>1?j(i,{attrs:l,slots:s,emit:u}):j(i,null)),y=t.props?l:fl(l)}}catch(j){Ut.length=0,Un(j,e,1),T=ne(ct)}let N=T;if(y&&z!==!1){const j=Object.keys(y),{shapeFlag:W}=N;j.length&&W&7&&(o&&j.some(Hr)&&(y=cl(y,o)),N=Ct(N,y))}return n.dirs&&(N=Ct(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),T=N,An(S),T}const fl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Rn(n))&&((t||(t={}))[n]=e[n]);return t},cl=(e,t)=>{const n={};for(const r in e)(!Hr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ul(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?La(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Hn(u,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?La(r,o,u):!0:!!o;return!1}function La(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Hn(n,i))return!0}return!1}function dl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ml=e=>e.__isSuspense;function pl(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):al(e)}function hl(e,t){if(te){let n=te.provides;const r=te.parent&&te.parent.provides;r===n&&(n=te.provides=Object.create(r)),n[e]=t}}function or(e,t,n=!1){const r=te||we;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const Ra={};function pn(e,t,n){return ro(e,t,n)}function ro(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Y){const s=te;let l,u=!1,d=!1;if(ie(e)?(l=()=>e.value,u=br(e)):kt(e)?(l=()=>e,r=!0):M(e)?(d=!0,u=e.some(y=>kt(y)||br(y)),l=()=>e.map(y=>{if(ie(y))return y.value;if(kt(y))return ot(y);if(R(y))return Je(y,s,2)})):R(e)?t?l=()=>Je(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ce(e,s,3,[v])}:l=Ae,t&&r){const y=l;l=()=>ot(y())}let m,v=y=>{m=T.onStop=()=>{Je(y,s,4)}};if(Gt)return v=Ae,t?n&&Ce(t,s,3,[l(),d?[]:void 0,v]):l(),Ae;let A=d?[]:Ra;const L=()=>{if(!!T.active)if(t){const y=T.run();(r||u||(d?y.some((S,N)=>xn(S,A[N])):xn(y,A)))&&(m&&m(),Ce(t,s,3,[y,A===Ra?void 0:A,v]),A=y)}else T.run()};L.allowRecurse=!!t;let z;a==="sync"?z=L:a==="post"?z=()=>ce(L,s&&s.suspense):z=()=>rl(L);const T=new Vr(l,z);return t?n?L():A=T.run():a==="post"?ce(T.run.bind(T),s&&s.suspense):T.run(),()=>{T.stop(),s&&s.scope&&Yr(s.scope.effects,T)}}function gl(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?ao(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=te;St(this);const s=ro(a,i.bind(r),n);return o?St(o):ft(),s}function ao(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ot(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ie(e))ot(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)ot(e[n],t);else if(zn(e)||_t(e))e.forEach(n=>{ot(n,t)});else if(Li(e))for(const n in e)ot(e[n],t);return e}function na(e){return R(e)?{setup:e,name:e.name}:e}const hn=e=>!!e.type.__asyncLoader,io=e=>e.type.__isKeepAlive;function vl(e,t){oo(e,"a",t)}function bl(e,t){oo(e,"da",t)}function oo(e,t,n=te){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Wn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)io(a.parent.vnode)&&yl(r,t,n,a),a=a.parent}}function yl(e,t,n,r){const a=Wn(t,e,r,!0);so(()=>{Yr(r[t],a)},n)}function Wn(e,t,n=te,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Et(),St(n);const s=Ce(t,n,e,o);return ft(),Pt(),s});return r?a.unshift(i):a.push(i),i}}const Ue=e=>(t,n=te)=>(!Gt||e==="sp")&&Wn(e,t,n),xl=Ue("bm"),wl=Ue("m"),_l=Ue("bu"),kl=Ue("u"),Al=Ue("bum"),so=Ue("um"),Cl=Ue("sp"),Sl=Ue("rtg"),Ol=Ue("rtc");function El(e,t=te){Wn("ec",e,t)}function sr(e,t){const n=we;if(n===null)return e;const r=Vn(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,u=Y]=t[i];R(o)&&(o={mounted:o,updated:o}),o.deep&&ot(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:u})}return e}function tt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Et(),Ce(l,n,8,[e.el,s,e,t]),Pt())}}const lo="components";function Pl(e,t){return Tl(lo,e,!0,t)||e}const Il=Symbol();function Tl(e,t,n=!0,r=!1){const a=we||te;if(a){const i=a.type;if(e===lo){const s=lf(i,!1);if(s&&(s===t||s===Me(t)||s===Dn(Me(t))))return i}const o=za(a[e]||i[e],t)||za(a.appContext[e],t);return!o&&r?i:o}}function za(e,t){return e&&(e[t]||e[Me(t)]||e[Dn(Me(t))])}function cn(e,t,n,r){let a;const i=n&&n[r];if(M(e)||ee(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(J(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const wr=e=>e?wo(e)?Vn(e)||e.proxy:wr(e.parent):null,Cn=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wr(e.parent),$root:e=>wr(e.root),$emit:e=>e.emit,$options:e=>co(e),$forceUpdate:e=>e.f||(e.f=()=>Ji(e.update)),$nextTick:e=>e.n||(e.n=el.bind(e.proxy)),$watch:e=>gl.bind(e)}),Ml={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==Y&&D(r,t))return o[t]=1,r[t];if(a!==Y&&D(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&D(u,t))return o[t]=3,i[t];if(n!==Y&&D(n,t))return o[t]=4,n[t];_r&&(o[t]=0)}}const d=Cn[t];let m,v;if(d)return t==="$attrs"&&he(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Y&&D(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,D(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==Y&&D(a,t)?(a[t]=n,!0):r!==Y&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Y&&D(e,o)||t!==Y&&D(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(Cn,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let _r=!0;function Nl(e){const t=co(e),n=e.proxy,r=e.ctx;_r=!1,t.beforeCreate&&ja(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:v,beforeUpdate:A,updated:L,activated:z,deactivated:T,beforeDestroy:y,beforeUnmount:S,destroyed:N,unmounted:j,render:W,renderTracked:re,renderTriggered:de,errorCaptured:Se,serverPrefetch:se,expose:Tt,inheritAttrs:mt,components:Mt,directives:tn,filters:xa}=t;if(u&&Fl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const K=o[G];R(K)&&(r[G]=K.bind(n))}if(a){const G=a.call(n,n);J(G)&&(e.data=Jr(G))}if(_r=!0,i)for(const G in i){const K=i[G],Ne=R(K)?K.bind(n,n):R(K.get)?K.get.bind(n,n):Ae,tr=!R(K)&&R(K.set)?K.set.bind(n):Ae,Nt=ve({get:Ne,set:tr});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:pt=>Nt.value=pt})}if(s)for(const G in s)fo(s[G],r,n,G);if(l){const G=R(l)?l.call(n):l;Reflect.ownKeys(G).forEach(K=>{hl(K,G[K])})}d&&ja(d,e,"c");function le(G,K){M(K)?K.forEach(Ne=>G(Ne.bind(n))):K&&G(K.bind(n))}if(le(xl,m),le(wl,v),le(_l,A),le(kl,L),le(vl,z),le(bl,T),le(El,Se),le(Ol,re),le(Sl,de),le(Al,S),le(so,j),le(Cl,se),M(Tt))if(Tt.length){const G=e.exposed||(e.exposed={});Tt.forEach(K=>{Object.defineProperty(G,K,{get:()=>n[K],set:Ne=>n[K]=Ne})})}else e.exposed||(e.exposed={});W&&e.render===Ae&&(e.render=W),mt!=null&&(e.inheritAttrs=mt),Mt&&(e.components=Mt),tn&&(e.directives=tn)}function Fl(e,t,n=Ae,r=!1){M(e)&&(e=kr(e));for(const a in e){const i=e[a];let o;J(i)?"default"in i?o=or(i.from||a,i.default,!0):o=or(i.from||a):o=or(i),ie(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function ja(e,t,n){Ce(M(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function fo(e,t,n,r){const a=r.includes(".")?ao(n,r):()=>n[r];if(ee(e)){const i=t[e];R(i)&&pn(a,i)}else if(R(e))pn(a,e.bind(n));else if(J(e))if(M(e))e.forEach(i=>fo(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&pn(a,i,e)}}function co(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>Sn(l,u,o,!0)),Sn(l,t,o)),i.set(t,l),l}function Sn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Sn(e,i,n,!0),a&&a.forEach(o=>Sn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ll[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ll={data:Da,props:rt,emits:rt,methods:rt,computed:rt,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:rt,directives:rt,watch:zl,provide:Da,inject:Rl};function Da(e,t){return t?e?function(){return oe(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function Rl(e,t){return rt(kr(e),kr(t))}function kr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ae(e,t){return e?[...new Set([].concat(e,t))]:t}function rt(e,t){return e?oe(oe(Object.create(null),e),t):t}function zl(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const r in t)n[r]=ae(e[r],t[r]);return n}function jl(e,t,n,r=!1){const a={},i={};wn(i,Kn,1),e.propsDefaults=Object.create(null),uo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ks(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Dl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Hn(e.emitsOptions,v))continue;const A=t[v];if(l)if(D(i,v))A!==i[v]&&(i[v]=A,u=!0);else{const L=Me(v);a[L]=Ar(l,s,L,A,e,!1)}else A!==i[v]&&(i[v]=A,u=!0)}}}else{uo(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=Ot(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Ar(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],u=!0)}u&&ze(e,"set","$attrs")}function uo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(dn(l))continue;const u=t[l];let d;a&&D(a,d=Me(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Hn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=U(n),u=s||Y;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Ar(a,l,m,u[m],e,!D(u,m))}}return o}function Ar(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(St(a),r=u[n]=l.call(null,t),ft())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ot(n))&&(r=!0))}return r}function mo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[v,A]=mo(m,t,!0);oe(o,v),A&&s.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,wt),wt;if(M(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);$a(m)&&(o[m]=Y)}else if(i)for(const d in i){const m=Me(d);if($a(m)){const v=i[d],A=o[m]=M(v)||R(v)?{type:v}:v;if(A){const L=Ha(Boolean,A.type),z=Ha(String,A.type);A[0]=L>-1,A[1]=z<0||L<z,(L>-1||D(A,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function $a(e){return e[0]!=="$"}function Ua(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ba(e,t){return Ua(e)===Ua(t)}function Ha(e,t){return M(t)?t.findIndex(n=>Ba(n,e)):R(t)&&Ba(t,e)?0:-1}const po=e=>e[0]==="_"||e==="$stable",ra=e=>M(e)?e.map(Ie):[Ie(e)],$l=(e,t,n)=>{if(t._n)return t;const r=ll((...a)=>ra(t(...a)),n);return r._c=!1,r},ho=(e,t,n)=>{const r=e._ctx;for(const a in e){if(po(a))continue;const i=e[a];if(R(i))t[a]=$l(a,i,r);else if(i!=null){const o=ra(i);t[a]=()=>o}}},go=(e,t)=>{const n=ra(t);e.slots.default=()=>n},Ul=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),wn(t,"_",n)):ho(t,e.slots={})}else e.slots={},t&&go(e,t);wn(e.slots,Kn,1)},Bl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Y;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(oe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ho(t,a)),o=t}else t&&(go(e,t),o={default:1});if(i)for(const s in a)!po(s)&&!(s in o)&&delete a[s]};function vo(){return{app:null,config:{isNativeTag:ds,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hl=0;function Yl(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!J(a)&&(a=null);const i=vo(),o=new Set;let s=!1;const l=i.app={_uid:Hl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:cf,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&R(u.install)?(o.add(u),u.install(l,...d)):R(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const v=ne(r,a);return v.appContext=i,d&&t?t(v,u):e(v,u,m),s=!0,l._container=u,u.__vue_app__=l,Vn(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function Cr(e,t,n,r,a=!1){if(M(e)){e.forEach((v,A)=>Cr(v,t&&(M(t)?t[A]:t),n,r,a));return}if(hn(r)&&!a)return;const i=r.shapeFlag&4?Vn(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===Y?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(ee(u)?(d[u]=null,D(m,u)&&(m[u]=null)):ie(u)&&(u.value=null)),R(l))Je(l,s,12,[o,d]);else{const v=ee(l),A=ie(l);if(v||A){const L=()=>{if(e.f){const z=v?d[l]:l.value;a?M(z)&&Yr(z,i):M(z)?z.includes(i)||z.push(i):v?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,D(m,l)&&(m[l]=o)):A&&(l.value=o,e.k&&(d[e.k]=o))};o?(L.id=-1,ce(L,n)):L()}}}const ce=pl;function Wl(e){return Kl(e)}function Kl(e,t){const n=bs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:v,setScopeId:A=Ae,cloneNode:L,insertStaticContent:z}=e,T=(f,c,p,g=null,h=null,w=null,k=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Lt(f,c)&&(g=nn(f),Ye(f,h,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:b,ref:E,shapeFlag:O}=c;switch(b){case aa:y(f,c,p,g);break;case ct:S(f,c,p,g);break;case lr:f==null&&N(c,p,g,k);break;case ue:tn(f,c,p,g,h,w,k,x,_);break;default:O&1?re(f,c,p,g,h,w,k,x,_):O&6?xa(f,c,p,g,h,w,k,x,_):(O&64||O&128)&&b.process(f,c,p,g,h,w,k,x,_,ht)}E!=null&&h&&Cr(E,f&&f.ref,w,c||f,!c)},y=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},S=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},N=(f,c,p,g)=>{[f.el,f.anchor]=z(f.children,c,p,g,f.el,f.anchor)},j=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=v(f),r(f,p,g),f=h;r(c,p,g)},W=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=v(f),a(f),f=p;a(c)},re=(f,c,p,g,h,w,k,x,_)=>{k=k||c.type==="svg",f==null?de(c,p,g,h,w,k,x,_):Tt(f,c,h,w,k,x,_)},de=(f,c,p,g,h,w,k,x)=>{let _,b;const{type:E,props:O,shapeFlag:P,transition:F,patchFlag:$,dirs:B}=f;if(f.el&&L!==void 0&&$===-1)_=f.el=L(f.el);else{if(_=f.el=o(f.type,w,O&&O.is,O),P&8?d(_,f.children):P&16&&se(f.children,_,null,g,h,w&&E!=="foreignObject",k,x),B&&tt(f,null,g,"created"),O){for(const V in O)V!=="value"&&!dn(V)&&i(_,V,null,O[V],w,f.children,g,h,Fe);"value"in O&&i(_,"value",null,O.value),(b=O.onVnodeBeforeMount)&&Ee(b,g,f)}Se(_,f,f.scopeId,k,g)}B&&tt(f,null,g,"beforeMount");const H=(!h||h&&!h.pendingBranch)&&F&&!F.persisted;H&&F.beforeEnter(_),r(_,c,p),((b=O&&O.onVnodeMounted)||H||B)&&ce(()=>{b&&Ee(b,g,f),H&&F.enter(_),B&&tt(f,null,g,"mounted")},h)},Se=(f,c,p,g,h)=>{if(p&&A(f,p),g)for(let w=0;w<g.length;w++)A(f,g[w]);if(h){let w=h.subTree;if(c===w){const k=h.vnode;Se(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},se=(f,c,p,g,h,w,k,x,_=0)=>{for(let b=_;b<f.length;b++){const E=f[b]=x?qe(f[b]):Ie(f[b]);T(null,E,c,p,g,h,w,k,x)}},Tt=(f,c,p,g,h,w,k)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:E}=c;_|=f.patchFlag&16;const O=f.props||Y,P=c.props||Y;let F;p&&nt(p,!1),(F=P.onVnodeBeforeUpdate)&&Ee(F,p,c,f),E&&tt(c,f,p,"beforeUpdate"),p&&nt(p,!0);const $=h&&c.type!=="foreignObject";if(b?mt(f.dynamicChildren,b,x,p,g,$,w):k||Ne(f,c,x,null,p,g,$,w,!1),_>0){if(_&16)Mt(x,c,O,P,p,g,h);else if(_&2&&O.class!==P.class&&i(x,"class",null,P.class,h),_&4&&i(x,"style",O.style,P.style,h),_&8){const B=c.dynamicProps;for(let H=0;H<B.length;H++){const V=B[H],be=O[V],gt=P[V];(gt!==be||V==="value")&&i(x,V,be,gt,h,f.children,p,g,Fe)}}_&1&&f.children!==c.children&&d(x,c.children)}else!k&&b==null&&Mt(x,c,O,P,p,g,h);((F=P.onVnodeUpdated)||E)&&ce(()=>{F&&Ee(F,p,c,f),E&&tt(c,f,p,"updated")},g)},mt=(f,c,p,g,h,w,k)=>{for(let x=0;x<c.length;x++){const _=f[x],b=c[x],E=_.el&&(_.type===ue||!Lt(_,b)||_.shapeFlag&70)?m(_.el):p;T(_,b,E,null,g,h,w,k,!0)}},Mt=(f,c,p,g,h,w,k)=>{if(p!==g){for(const x in g){if(dn(x))continue;const _=g[x],b=p[x];_!==b&&x!=="value"&&i(f,x,b,_,k,c.children,h,w,Fe)}if(p!==Y)for(const x in p)!dn(x)&&!(x in g)&&i(f,x,p[x],null,k,c.children,h,w,Fe);"value"in g&&i(f,"value",p.value,g.value)}},tn=(f,c,p,g,h,w,k,x,_)=>{const b=c.el=f?f.el:s(""),E=c.anchor=f?f.anchor:s("");let{patchFlag:O,dynamicChildren:P,slotScopeIds:F}=c;F&&(x=x?x.concat(F):F),f==null?(r(b,p,g),r(E,p,g),se(c.children,p,E,h,w,k,x,_)):O>0&&O&64&&P&&f.dynamicChildren?(mt(f.dynamicChildren,P,p,h,w,k,x),(c.key!=null||h&&c===h.subTree)&&bo(f,c,!0)):Ne(f,c,p,E,h,w,k,x,_)},xa=(f,c,p,g,h,w,k,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,k,_):er(c,p,g,h,w,k,_):le(f,c,_)},er=(f,c,p,g,h,w,k)=>{const x=f.component=nf(f,g,h);if(io(f)&&(x.ctx.renderer=ht),rf(x),x.asyncDep){if(h&&h.registerDep(x,G),!f.el){const _=x.subTree=ne(ct);S(null,_,c,p)}return}G(x,f,c,p,h,w,k)},le=(f,c,p)=>{const g=c.component=f.component;if(ul(f,c,p))if(g.asyncDep&&!g.asyncResolved){K(g,c,p);return}else g.next=c,nl(g.update),g.update();else c.el=f.el,g.vnode=c},G=(f,c,p,g,h,w,k)=>{const x=()=>{if(f.isMounted){let{next:E,bu:O,u:P,parent:F,vnode:$}=f,B=E,H;nt(f,!1),E?(E.el=$.el,K(f,E,k)):E=$,O&&mn(O),(H=E.props&&E.props.onVnodeBeforeUpdate)&&Ee(H,F,E,$),nt(f,!0);const V=ir(f),be=f.subTree;f.subTree=V,T(be,V,m(be.el),nn(be),f,h,w),E.el=V.el,B===null&&dl(f,V.el),P&&ce(P,h),(H=E.props&&E.props.onVnodeUpdated)&&ce(()=>Ee(H,F,E,$),h)}else{let E;const{el:O,props:P}=c,{bm:F,m:$,parent:B}=f,H=hn(c);if(nt(f,!1),F&&mn(F),!H&&(E=P&&P.onVnodeBeforeMount)&&Ee(E,B,c),nt(f,!0),O&&rr){const V=()=>{f.subTree=ir(f),rr(O,f.subTree,f,h,null)};H?c.type.__asyncLoader().then(()=>!f.isUnmounted&&V()):V()}else{const V=f.subTree=ir(f);T(null,V,p,g,f,h,w),c.el=V.el}if($&&ce($,h),!H&&(E=P&&P.onVnodeMounted)){const V=c;ce(()=>Ee(E,B,V),h)}(c.shapeFlag&256||B&&hn(B.vnode)&&B.vnode.shapeFlag&256)&&f.a&&ce(f.a,h),f.isMounted=!0,c=p=g=null}},_=f.effect=new Vr(x,()=>Ji(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,nt(f,!0),b()},K=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Dl(f,c.props,g,p),Bl(f,c.children,p),Et(),Bn(void 0,f.update),Pt()},Ne=(f,c,p,g,h,w,k,x,_=!1)=>{const b=f&&f.children,E=f?f.shapeFlag:0,O=c.children,{patchFlag:P,shapeFlag:F}=c;if(P>0){if(P&128){Nt(b,O,p,g,h,w,k,x,_);return}else if(P&256){tr(b,O,p,g,h,w,k,x,_);return}}F&8?(E&16&&Fe(b,h,w),O!==b&&d(p,O)):E&16?F&16?Nt(b,O,p,g,h,w,k,x,_):Fe(b,h,w,!0):(E&8&&d(p,""),F&16&&se(O,p,g,h,w,k,x,_))},tr=(f,c,p,g,h,w,k,x,_)=>{f=f||wt,c=c||wt;const b=f.length,E=c.length,O=Math.min(b,E);let P;for(P=0;P<O;P++){const F=c[P]=_?qe(c[P]):Ie(c[P]);T(f[P],F,p,null,h,w,k,x,_)}b>E?Fe(f,h,w,!0,!1,O):se(c,p,g,h,w,k,x,_,O)},Nt=(f,c,p,g,h,w,k,x,_)=>{let b=0;const E=c.length;let O=f.length-1,P=E-1;for(;b<=O&&b<=P;){const F=f[b],$=c[b]=_?qe(c[b]):Ie(c[b]);if(Lt(F,$))T(F,$,p,null,h,w,k,x,_);else break;b++}for(;b<=O&&b<=P;){const F=f[O],$=c[P]=_?qe(c[P]):Ie(c[P]);if(Lt(F,$))T(F,$,p,null,h,w,k,x,_);else break;O--,P--}if(b>O){if(b<=P){const F=P+1,$=F<E?c[F].el:g;for(;b<=P;)T(null,c[b]=_?qe(c[b]):Ie(c[b]),p,$,h,w,k,x,_),b++}}else if(b>P)for(;b<=O;)Ye(f[b],h,w,!0),b++;else{const F=b,$=b,B=new Map;for(b=$;b<=P;b++){const me=c[b]=_?qe(c[b]):Ie(c[b]);me.key!=null&&B.set(me.key,b)}let H,V=0;const be=P-$+1;let gt=!1,ka=0;const Ft=new Array(be);for(b=0;b<be;b++)Ft[b]=0;for(b=F;b<=O;b++){const me=f[b];if(V>=be){Ye(me,h,w,!0);continue}let Oe;if(me.key!=null)Oe=B.get(me.key);else for(H=$;H<=P;H++)if(Ft[H-$]===0&&Lt(me,c[H])){Oe=H;break}Oe===void 0?Ye(me,h,w,!0):(Ft[Oe-$]=b+1,Oe>=ka?ka=Oe:gt=!0,T(me,c[Oe],p,null,h,w,k,x,_),V++)}const Aa=gt?Vl(Ft):wt;for(H=Aa.length-1,b=be-1;b>=0;b--){const me=$+b,Oe=c[me],Ca=me+1<E?c[me+1].el:g;Ft[b]===0?T(null,Oe,p,Ca,h,w,k,x,_):gt&&(H<0||b!==Aa[H]?pt(Oe,p,Ca,2):H--)}}},pt=(f,c,p,g,h=null)=>{const{el:w,type:k,transition:x,children:_,shapeFlag:b}=f;if(b&6){pt(f.component.subTree,c,p,g);return}if(b&128){f.suspense.move(c,p,g);return}if(b&64){k.move(f,c,p,ht);return}if(k===ue){r(w,c,p);for(let O=0;O<_.length;O++)pt(_[O],c,p,g);r(f.anchor,c,p);return}if(k===lr){j(f,c,p);return}if(g!==2&&b&1&&x)if(g===0)x.beforeEnter(w),r(w,c,p),ce(()=>x.enter(w),h);else{const{leave:O,delayLeave:P,afterLeave:F}=x,$=()=>r(w,c,p),B=()=>{O(w,()=>{$(),F&&F()})};P?P(w,$,B):B()}else r(w,c,p)},Ye=(f,c,p,g=!1,h=!1)=>{const{type:w,props:k,ref:x,children:_,dynamicChildren:b,shapeFlag:E,patchFlag:O,dirs:P}=f;if(x!=null&&Cr(x,null,p,f,!0),E&256){c.ctx.deactivate(f);return}const F=E&1&&P,$=!hn(f);let B;if($&&(B=k&&k.onVnodeBeforeUnmount)&&Ee(B,c,f),E&6)rs(f.component,p,g);else{if(E&128){f.suspense.unmount(p,g);return}F&&tt(f,null,c,"beforeUnmount"),E&64?f.type.remove(f,c,p,h,ht,g):b&&(w!==ue||O>0&&O&64)?Fe(b,c,p,!1,!0):(w===ue&&O&384||!h&&E&16)&&Fe(_,c,p),g&&wa(f)}($&&(B=k&&k.onVnodeUnmounted)||F)&&ce(()=>{B&&Ee(B,c,f),F&&tt(f,null,c,"unmounted")},p)},wa=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===ue){ns(p,g);return}if(c===lr){W(f);return}const w=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:x}=h,_=()=>k(p,w);x?x(f.el,w,_):_()}else w()},ns=(f,c)=>{let p;for(;f!==c;)p=v(f),a(f),f=p;a(c)},rs=(f,c,p)=>{const{bum:g,scope:h,update:w,subTree:k,um:x}=f;g&&mn(g),h.stop(),w&&(w.active=!1,Ye(k,f,c,p)),x&&ce(x,c),ce(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Fe=(f,c,p,g=!1,h=!1,w=0)=>{for(let k=w;k<f.length;k++)Ye(f[k],c,p,g,h)},nn=f=>f.shapeFlag&6?nn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),_a=(f,c,p)=>{f==null?c._vnode&&Ye(c._vnode,null,null,!0):T(c._vnode||null,f,c,null,null,null,p),eo(),c._vnode=f},ht={p:T,um:Ye,m:pt,r:wa,mt:er,mc:se,pc:Ne,pbc:mt,n:nn,o:e};let nr,rr;return t&&([nr,rr]=t(ht)),{render:_a,hydrate:nr,createApp:Yl(_a,nr)}}function nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function bo(e,t,n=!1){const r=e.children,a=t.children;if(M(r)&&M(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=qe(a[i]),s.el=o.el),n||bo(o,s))}}function Vl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const ql=e=>e.__isTeleport,ue=Symbol(void 0),aa=Symbol(void 0),ct=Symbol(void 0),lr=Symbol(void 0),Ut=[];let _e=null;function Z(e=!1){Ut.push(_e=e?null:[])}function Xl(){Ut.pop(),_e=Ut[Ut.length-1]||null}let Xt=1;function Ya(e){Xt+=e}function yo(e){return e.dynamicChildren=Xt>0?_e||wt:null,Xl(),Xt>0&&_e&&_e.push(e),e}function Q(e,t,n,r,a,i){return yo(X(e,t,n,r,a,i,!0))}function Gl(e,t,n,r,a){return yo(ne(e,t,n,r,a,!0))}function Sr(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const Kn="__vInternal",xo=({key:e})=>e!=null?e:null,gn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ee(e)||ie(e)||R(e)?{i:we,r:e,k:t,f:!!n}:e:null;function X(e,t=null,n=null,r=0,a=null,i=e===ue?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&xo(t),ref:t&&gn(t),scopeId:Yn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ia(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),Xt>0&&!o&&_e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_e.push(l),l}const ne=Jl;function Jl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Il)&&(e=ct),Sr(e)){const s=Ct(e,t,!0);return n&&ia(s,n),Xt>0&&!i&&_e&&(s.shapeFlag&6?_e[_e.indexOf(e)]=s:_e.push(s)),s.patchFlag|=-2,s}if(ff(e)&&(e=e.__vccOpts),t){t=Zl(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=Wt(s)),J(l)&&(Vi(l)&&!M(l)&&(l=oe({},l)),t.style=Xe(l))}const o=ee(e)?1:ml(e)?128:ql(e)?64:J(e)?4:R(e)?2:0;return X(e,t,n,r,a,o,i,!0)}function Zl(e){return e?Vi(e)||Kn in e?oe({},e):e:null}function Ct(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Ql(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&xo(s),ref:t&&t.ref?n&&a?M(a)?a.concat(gn(t)):[a,gn(t)]:gn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ue?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ct(e.ssContent),ssFallback:e.ssFallback&&Ct(e.ssFallback),el:e.el,anchor:e.anchor}}function Be(e=" ",t=0){return ne(aa,null,e,t)}function Le(e="",t=!1){return t?(Z(),Gl(ct,null,e)):ne(ct,null,e)}function Ie(e){return e==null||typeof e=="boolean"?ne(ct):M(e)?ne(ue,null,e.slice()):typeof e=="object"?qe(e):ne(aa,null,String(e))}function qe(e){return e.el===null||e.memo?e:Ct(e)}function ia(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ia(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Kn in t)?t._ctx=we:a===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[Be(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ql(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Wt([t.class,r.class]));else if(a==="style")t.style=Xe([t.style,r.style]);else if(Rn(a)){const i=t[a],o=r[a];o&&i!==o&&!(M(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ee(e,t,n,r=null){Ce(e,t,7,[n,r])}const ef=vo();let tf=0;function nf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||ef,i={uid:tf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ys(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mo(r,a),emitsOptions:no(r,a),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:r.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=il.bind(null,i),e.ce&&e.ce(i),i}let te=null;const St=e=>{te=e,e.scope.on()},ft=()=>{te&&te.scope.off(),te=null};function wo(e){return e.vnode.shapeFlag&4}let Gt=!1;function rf(e,t=!1){Gt=t;const{props:n,children:r}=e.vnode,a=wo(e);jl(e,n,a,t),Ul(e,r);const i=a?af(e,t):void 0;return Gt=!1,i}function af(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=qi(new Proxy(e.ctx,Ml));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?sf(e):null;St(e),Et();const i=Je(r,e,0,[e.props,a]);if(Pt(),ft(),Ni(i)){if(i.then(ft,ft),t)return i.then(o=>{Wa(e,o,t)}).catch(o=>{Un(o,e,0)});e.asyncDep=i}else Wa(e,i,t)}else _o(e,t)}function Wa(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=Xi(t)),_o(e,n)}let Ka;function _o(e,t,n){const r=e.type;if(!e.render){if(!t&&Ka&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=oe(oe({isCustomElement:i,delimiters:s},o),l);r.render=Ka(a,u)}}e.render=r.render||Ae}St(e),Et(),Nl(e),Pt(),ft()}function of(e){return new Proxy(e.attrs,{get(t,n){return he(e,"get","$attrs"),t[n]}})}function sf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=of(e))},slots:e.slots,emit:e.emit,expose:t}}function Vn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Xi(qi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Cn)return Cn[n](e)}}))}function lf(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function ff(e){return R(e)&&"__vccOpts"in e}const ve=(e,t)=>Zs(e,t,Gt);function ko(e,t,n){const r=arguments.length;return r===2?J(t)&&!M(t)?Sr(t)?ne(e,null,[t]):ne(e,t):ne(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Sr(n)&&(n=[n]),ne(e,t,n))}const cf="3.2.37",uf="http://www.w3.org/2000/svg",at=typeof document<"u"?document:null,Va=at&&at.createElement("template"),df={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?at.createElementNS(uf,e):at.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>at.createTextNode(e),createComment:e=>at.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>at.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Va.innerHTML=r?`<svg>${e}</svg>`:e;const s=Va.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function mf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function pf(e,t,n){const r=e.style,a=ee(n);if(n&&!a){for(const i in n)Or(r,i,n[i]);if(t&&!ee(t))for(const i in t)n[i]==null&&Or(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const qa=/\s*!important$/;function Or(e,t,n){if(M(n))n.forEach(r=>Or(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=hf(e,t);qa.test(n)?e.setProperty(Ot(r),n.replace(qa,""),"important"):e[r]=n}}const Xa=["Webkit","Moz","ms"],fr={};function hf(e,t){const n=fr[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return fr[t]=r;r=Dn(r);for(let a=0;a<Xa.length;a++){const i=Xa[a]+r;if(i in e)return fr[t]=i}return t}const Ga="http://www.w3.org/1999/xlink";function gf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ga,t.slice(6,t.length)):e.setAttributeNS(Ga,t,n);else{const i=os(t);n==null||i&&!Ti(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function vf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ti(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[Ao,bf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Er=0;const yf=Promise.resolve(),xf=()=>{Er=0},wf=()=>Er||(yf.then(xf),Er=Ao());function it(e,t,n,r){e.addEventListener(t,n,r)}function _f(e,t,n,r){e.removeEventListener(t,n,r)}function kf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Af(t);if(r){const u=i[t]=Cf(r,a);it(e,s,u,l)}else o&&(_f(e,s,o,l),i[t]=void 0)}}const Ja=/(?:Once|Passive|Capture)$/;function Af(e){let t;if(Ja.test(e)){t={};let n;for(;n=e.match(Ja);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Ot(e.slice(2)),t]}function Cf(e,t){const n=r=>{const a=r.timeStamp||Ao();(bf||a>=n.attached-1)&&Ce(Sf(r,n.value),t,5,[r])};return n.value=e,n.attached=wf(),n}function Sf(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Za=/^on[a-z]/,Of=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?mf(e,r,a):t==="style"?pf(e,n,r):Rn(t)?Hr(t)||kf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ef(e,t,r,a))?vf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),gf(e,t,r,a))};function Ef(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Za.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Za.test(t)&&ee(n)?!1:t in e}const On=e=>{const t=e.props["onUpdate:modelValue"]||!1;return M(t)?n=>mn(t,n):t};function Pf(e){e.target.composing=!0}function Qa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ei={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=On(a);const i=r||a.props&&a.props.type==="number";it(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=_n(s)),e._assign(s)}),n&&it(e,"change",()=>{e.value=e.value.trim()}),t||(it(e,"compositionstart",Pf),it(e,"compositionend",Qa),it(e,"change",Qa))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=On(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&_n(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},If={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=zn(t);it(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?_n(En(o)):En(o));e._assign(e.multiple?a?new Set(i):i:i[0])}),e._assign=On(r)},mounted(e,{value:t}){ti(e,t)},beforeUpdate(e,t,n){e._assign=On(n)},updated(e,{value:t}){ti(e,t)}};function ti(e,t){const n=e.multiple;if(!(n&&!M(t)&&!zn(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=En(i);if(n)M(t)?i.selected=us(t,o)>-1:i.selected=t.has(o);else if(Ln(En(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function En(e){return"_value"in e?e._value:e.value}const Tf=["ctrl","shift","alt","meta"],Mf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Tf.some(n=>e[`${n}Key`]&&!t.includes(n))},Nf=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=Mf[t[a]];if(i&&i(n,t))return}return e(n,...r)},Ff=oe({patchProp:Of},df);let ni;function Lf(){return ni||(ni=Wl(Ff))}const Rf=(...e)=>{const t=Lf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=zf(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function zf(e){return ee(e)?document.querySelector(e):e}const jf="/vue-battleship/dist/assets/sea.fc6dafe9.jpeg",Df="/vue-battleship/dist/assets/explosion.118de65f.png";const $f=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};class ri{constructor(t,n,r){this.name=t,this.grids=[],this.width=n,this.height=r,this.ships=[new ai(4),new ai(3)],this.placeShipMode=!0,this.placeShipLength=this.ships[0].length,this.placeShipDirection="east",this.placedShips=0,this.allowAttack=!0,this.initGrids()}get survivalShips(){const t=[];return this.grids.forEach(n=>{n.forEach(r=>{r.hasShip&&!r.hasBeenAttacked&&t.push(r)})}),t}initGrids(){const t=[];for(let n=0;n<this.height;n++){const r=[];for(let a=0;a<this.width;a++){const i=new Uf(a,n);r.push(i)}t.push(r)}this.grids=t}}class Uf{constructor(t,n){this.y=n,this.x=t,this.disabled=!1,this.hasShip=!1,this.placeShipPreview=!1,this.hasBeenAttacked=!1}}class ai{constructor(t){this.length=t}}const Bf={name:"App",data(){return{gameStart:!1,gameOn:!0,gameRound:0,width:5,height:5,maps:[],grids:[],winner:"",explosionImage:Df,seaImage:jf,player1:"Player 1",player2:"Player 2",selectedMapSize:5,mapSizeOptions:[{value:5,name:"5x5"},{value:7,name:"7x7"},{value:9,name:"9x9"}]}},methods:{getPlayerColor(e){return e==this.maps[0].name?"red":"blue"},reloadGame(){window.location.reload()},onBtnClick(e,t){if(!!this.gameOn)if(e.placeShipMode){if(!this.placeShip(e,t.x,t.y,e.placeShipLength,e.placeShipDirection))return;e.placedShips+=1,e.placedShips>=e.ships.length?setTimeout(()=>{alert(`${e.name} has deployed all the ships.`),e.placeShipMode=!1,e.placeShipLength=0,this.gameRound+=1},100):e.placeShipLength=e.ships[e.placedShips].length}else this.attack(e,t.x,t.y)},userPlaceShip(e,t){e.placeShipMode=!0,e.placeShipLength=t,e.placeShipDirection="east"},changeDirection(e){e.placeShipDirection=e.placeShipDirection=="east"?"south":"east"},showShipPreview(e,t){if(!e.placeShipMode)return;const{x:n,y:r}=t;if(e.placeShipDirection=="south"){if(r+e.placeShipLength>e.height)return 0;for(let a=0;a<e.placeShipLength;a++)e.grids[r+a][n].placeShipPreview=!0}else if(e.placeShipDirection=="east"){if(n+e.placeShipLength>e.width)return console.log(`Ship can not be place in (${n}, ${r});`),0;for(let a=0;a<e.placeShipLength;a++)e.grids[r][n+a].placeShipPreview=!0}},unshowShipPreview(e,t){if(!e.placeShipMode)return;const{x:n,y:r}=t;if(e.placeShipDirection=="south"){if(r+e.placeShipLength>e.height)return 0;for(let a=0;a<e.placeShipLength;a++)e.grids[r+a][n].placeShipPreview=!1}else if(e.placeShipDirection=="east"){if(n+e.placeShipLength>e.width)return 0;for(let a=0;a<e.placeShipLength;a++)e.grids[r][n+a].placeShipPreview=!1}},attack(e,t,n){if(!e.allowAttack)return;e.allowAttack=!1;const r=e.grids[n][t],a=this.maps[(this.gameRound+1)%2].name;r.hasBeenAttacked=!0,r.disabled=!0,setTimeout(()=>{if(e.allowAttack=!0,e.survivalShips<=0){this.gameOn=!1,this.winner=a,alert(`Game over! The winner is ${this.winner}`);return}this.gameRound+=1},1500)},placeShip(e,t,n,r,a){if(a=="south"){if(n+r>e.height)return!1;for(let i=0;i<r;i++)e.grids[n+i][t].hasShip=!0}else if(a=="east"){if(t+r>e.width)return!1;for(let i=0;i<r;i++)e.grids[n][t+i].hasShip=!0}return!0},formSend(){const e=this,t=new ri(e.player1,e.selectedMapSize,this.selectedMapSize),n=new ri(e.player2,e.selectedMapSize,this.selectedMapSize);e.maps=[t,n],e.gameStart=!e.gameStart}},created(){}},Qt=e=>(ol("data-v-de46c7db"),e=e(),sl(),e),Hf=Qt(()=>X("h1",null,"Battleship",-1)),Yf={class:"form-group"},Wf=Qt(()=>X("label",null,"Player 1",-1)),Kf={class:"form-group"},Vf=Qt(()=>X("label",null,"Player 2",-1)),qf={class:"form-group"},Xf=Qt(()=>X("label",null,"Mode",-1)),Gf=["value"],Jf={class:"form-group"},Zf={class:"btn"},Qf=Be(" Start Game "),ec={key:1},tc={key:0},nc={key:0},rc=Be(", deploy your ships. "),ac={key:1},ic=Be(", it's your turn to attack. "),oc={key:1},sc=Be(" Game over! The winner is "),lc=Be(" \uFF01 "),fc=Qt(()=>X("br",null,null,-1)),cc=Be(" Restart Game "),uc={class:"btn btn-black",href:"https://github.com/andy19910102/vue-battleship",target:"_blank"},dc=Be(" Github Repo "),mc={key:2},pc=["onClick"],hc=Be(" Turn direction "),gc=["onMouseenter","onMouseleave","onClick","disabled"],vc=["src"];function bc(e,t,n,r,a,i){const o=Pl("font-awesome-icon");return Z(),Q(ue,null,[a.gameStart?Le("",!0):(Z(),Q("section",{key:0,class:"form-section",style:Xe({backgroundImage:`url(${a.seaImage})`})},[X("form",{onSubmit:t[3]||(t[3]=Nf((...s)=>i.formSend&&i.formSend(...s),["prevent"]))},[Hf,X("div",Yf,[Wf,sr(X("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>a.player1=s),type:"text",placeholder:"Enter the name of player 1",class:"form-control",required:""},null,512),[[ei,a.player1]])]),X("div",Kf,[Vf,sr(X("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>a.player2=s),type:"text",placeholder:"Enter the name of player 2",class:"form-control",required:""},null,512),[[ei,a.player2]])]),X("div",qf,[Xf,sr(X("select",{"onUpdate:modelValue":t[2]||(t[2]=s=>a.selectedMapSize=s),class:"form-control"},[(Z(!0),Q(ue,null,cn(a.mapSizeOptions,s=>(Z(),Q("option",{key:s.value,value:s.value},rn(s.name),9,Gf))),128))],512),[[If,a.selectedMapSize]])]),X("div",Jf,[X("button",Zf,[ne(o,{icon:"fa-solid fa-anchor"}),Qf])])],32)],4)),a.gameStart?(Z(),Q("section",ec,[(Z(!0),Q(ue,null,cn(a.maps,(s,l)=>(Z(),Q("div",{key:s.name},[a.gameRound%2==l?(Z(),Q("section",{key:0,class:Wt([{"place-ship-mode":s.placeShipMode},{"attack-mode":!s.placeShipMode},"text-center"])},[a.gameOn?(Z(),Q("h1",tc,[s.placeShipMode?(Z(),Q("span",nc,[X("span",{style:Xe({color:i.getPlayerColor(s.name)})},rn(s.name),5),rc])):Le("",!0),s.placeShipMode?Le("",!0):(Z(),Q("span",ac,[X("span",{style:Xe({color:i.getPlayerColor(a.maps[(a.gameRound+1)%2].name)})},rn(a.maps[(a.gameRound+1)%2].name),5),ic]))])):Le("",!0),a.gameOn?Le("",!0):(Z(),Q("h1",oc,[sc,X("span",{style:Xe({color:i.getPlayerColor(a.winner)})},rn(a.winner),5),lc,fc,X("button",{class:"btn",onClick:t[4]||(t[4]=(...u)=>i.reloadGame&&i.reloadGame(...u))},[ne(o,{icon:"fa-solid fa-power-off"}),cc]),X("a",uc,[ne(o,{icon:"fa-brands fa-github"}),dc])])),s.placeShipMode?(Z(),Q("div",mc,[X("button",{class:"btn",onClick:u=>i.changeDirection(s)},[ne(o,{icon:"fa-solid fa-rotate"}),hc],8,pc)])):Le("",!0),X("div",{class:"sea",style:Xe({backgroundImage:`url(${a.seaImage})`})},[(Z(!0),Q(ue,null,cn(s.grids,(u,d)=>(Z(),Q("div",{key:`row${d}`,class:"row"},[(Z(!0),Q(ue,null,cn(u,(m,v)=>(Z(),Q("div",{key:`row${d}grid${v}`,class:"grid"},[X("button",{class:Wt([{"has-ship":m.hasShip,"has-been-attacked":m.hasBeenAttacked,"place-ship-preview":m.placeShipPreview}]),onMouseenter:A=>i.showShipPreview(s,m),onMouseleave:A=>i.unshowShipPreview(s,m),onClick:A=>i.onBtnClick(s,m),disabled:m.disabled},[m.hasBeenAttacked&&m.hasShip?(Z(),Q("img",{key:0,class:"explode-img",src:a.explosionImage},null,8,vc)):Le("",!0)],42,gc)]))),128))]))),128))],4)],2)):Le("",!0)]))),128))])):Le("",!0)],64)}const yc=$f(Bf,[["render",bc],["__scopeId","data-v-de46c7db"]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function ii(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ii(Object(n),!0).forEach(function(r){_c(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ii(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Pn(e){return Pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pn(e)}function xc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wc(e,t,n){return t&&oi(e.prototype,t),n&&oi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oa(e,t){return Ac(e)||Sc(e,t)||Co(e,t)||Ec()}function qn(e){return kc(e)||Cc(e)||Co(e)||Oc()}function kc(e){if(Array.isArray(e))return Pr(e)}function Ac(e){if(Array.isArray(e))return e}function Cc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Co(e,t){if(!!e){if(typeof e=="string")return Pr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pr(e,t)}}function Pr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Oc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ec(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var si=function(){},sa={},So={},Oo=null,Eo={mark:si,measure:si};try{typeof window<"u"&&(sa=window),typeof document<"u"&&(So=document),typeof MutationObserver<"u"&&(Oo=MutationObserver),typeof performance<"u"&&(Eo=performance)}catch{}var Pc=sa.navigator||{},li=Pc.userAgent,fi=li===void 0?"":li,Qe=sa,q=So,ci=Oo,un=Eo;Qe.document;var He=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",Po=~fi.indexOf("MSIE")||~fi.indexOf("Trident/"),je="___FONT_AWESOME___",Ir=16,Io="fa",To="svg-inline--fa",ut="data-fa-i2svg",Tr="data-fa-pseudo-element",Ic="data-fa-pseudo-element-pending",la="data-prefix",fa="data-icon",ui="fontawesome-i2svg",Tc="async",Mc=["HTML","HEAD","STYLE","SCRIPT"],Mo=function(){try{return!0}catch{return!1}}(),ca={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},In={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},No={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Nc={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Fc=/fa[srltdbk]?[\-\ ]/,Fo="fa-layers-text",Lc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Rc={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Lo=[1,2,3,4,5,6,7,8,9,10],zc=Lo.concat([11,12,13,14,15,16,17,18,19,20]),jc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],st={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Dc=[].concat(qn(Object.keys(In)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",st.GROUP,st.SWAP_OPACITY,st.PRIMARY,st.SECONDARY]).concat(Lo.map(function(e){return"".concat(e,"x")})).concat(zc.map(function(e){return"w-".concat(e)})),Ro=Qe.FontAwesomeConfig||{};function $c(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Uc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var Bc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Bc.forEach(function(e){var t=oa(e,2),n=t[0],r=t[1],a=Uc($c(n));a!=null&&(Ro[r]=a)})}var Hc={familyPrefix:Io,styleDefault:"solid",replacementClass:To,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Bt=C(C({},Hc),Ro);Bt.autoReplaceSvg||(Bt.observeMutations=!1);var I={};Object.keys(Bt).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){Bt[e]=n,vn.forEach(function(r){return r(I)})},get:function(){return Bt[e]}})});Qe.FontAwesomeConfig=I;var vn=[];function Yc(e){return vn.push(e),function(){vn.splice(vn.indexOf(e),1)}}var Ke=Ir,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Wc(e){if(!(!e||!He)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var Kc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Jt(){for(var e=12,t="";e-- >0;)t+=Kc[Math.random()*62|0];return t}function It(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ua(e){return e.classList?It(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function zo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(zo(e[n]),'" ')},"").trim()}function Xn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function da(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function qc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Xc(e){var t=e.transform,n=e.width,r=n===void 0?Ir:n,a=e.height,i=a===void 0?Ir:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Po?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Gc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function jo(){var e=Io,t=To,n=I.familyPrefix,r=I.replacementClass,a=Gc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var di=!1;function cr(){I.autoAddCss&&!di&&(Wc(jo()),di=!0)}var Jc={mixout:function(){return{dom:{css:jo,insertCss:cr}}},hooks:function(){return{beforeDOMElementCreation:function(){cr()},beforeI2svg:function(){cr()}}}},De=Qe||{};De[je]||(De[je]={});De[je].styles||(De[je].styles={});De[je].hooks||(De[je].hooks={});De[je].shims||(De[je].shims=[]);var ke=De[je],Do=[],Zc=function e(){q.removeEventListener("DOMContentLoaded",e),Tn=1,Do.map(function(t){return t()})},Tn=!1;He&&(Tn=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Tn||q.addEventListener("DOMContentLoaded",Zc));function Qc(e){!He||(Tn?setTimeout(e,0):Do.push(e))}function en(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?zo(e):"<".concat(t," ").concat(Vc(r),">").concat(i.map(en).join(""),"</").concat(t,">")}function mi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var eu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},ur=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?eu(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function tu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Mr(e){var t=tu(e);return t.length===1?t[0].toString(16):null}function nu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function pi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Nr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=pi(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,pi(t)):ke.styles[e]=C(C({},ke.styles[e]||{}),i),e==="fas"&&Nr("fa",t)}var Ht=ke.styles,ru=ke.shims,au=Object.values(No),ma=null,$o={},Uo={},Bo={},Ho={},Yo={},iu=Object.keys(ca);function ou(e){return~Dc.indexOf(e)}function su(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!ou(a)?a:null}var Wo=function(){var t=function(i){return ur(Ht,function(o,s,l){return o[l]=ur(s,i,{}),o},{})};$o=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Uo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Yo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ht||I.autoFetchSvg,r=ur(ru,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Bo=r.names,Ho=r.unicodes,ma=Gn(I.styleDefault)};Yc(function(e){ma=Gn(e.styleDefault)});Wo();function pa(e,t){return($o[e]||{})[t]}function lu(e,t){return(Uo[e]||{})[t]}function yt(e,t){return(Yo[e]||{})[t]}function Ko(e){return Bo[e]||{prefix:null,iconName:null}}function fu(e){var t=Ho[e],n=pa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return ma}var ha=function(){return{prefix:null,iconName:null,rest:[]}};function Gn(e){var t=ca[e],n=In[e]||In[t],r=e in ke.styles?e:null;return n||r||null}function Jn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=su(I.familyPrefix,s);if(Ht[s]?(s=au.includes(s)?Nc[s]:s,a=s,o.prefix=s):iu.indexOf(s)>-1?(a=s,o.prefix=Gn(s)):l?o.iconName=l:s!==I.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Ko(o.iconName):{},d=yt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Ht.far&&Ht.fas&&!I.autoFetchSvg&&(o.prefix="fas")}return o},ha());return(i.prefix==="fa"||a==="fa")&&(i.prefix=et()||"fas"),i}var cu=function(){function e(){xc(this,e),this.definitions={}}return wc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),Nr(s,o[s]);var l=No[s];l&&Nr(l,o[s]),Wo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),hi=[],xt={},At={},uu=Object.keys(At);function du(e,t){var n=t.mixoutsTo;return hi=e,xt={},Object.keys(At).forEach(function(r){uu.indexOf(r)===-1&&delete At[r]}),hi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Pn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xt[o]||(xt[o]=[]),xt[o].push(i[o])})}r.provides&&r.provides(At)}),n}function Fr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function dt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xt[e]||[];a.forEach(function(i){i.apply(null,n)})}function $e(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return At[e]?At[e].apply(null,t):void 0}function Lr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(!!t)return t=yt(n,t)||t,mi(Vo.definitions,n,t)||mi(ke.styles,n,t)}var Vo=new cu,mu=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,dt("noAuto")},pu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return He?(dt("beforeI2svg",t),$e("pseudoElements2svg",t),$e("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Qc(function(){gu({autoReplaceSvgRoot:n}),dt("watch",t)})}},hu={icon:function(t){if(t===null)return null;if(Pn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:yt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Gn(t[0]);return{prefix:r,iconName:yt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.familyPrefix,"-"))>-1||t.match(Fc))){var a=Jn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||et(),iconName:yt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=et();return{prefix:i,iconName:yt(i,t)||t}}}},ge={noAuto:mu,config:I,dom:pu,parse:hu,library:Vo,findIconDefinition:Lr,toHtml:en},gu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(ke.styles).length>0||I.autoFetchSvg)&&He&&I.autoReplaceSvg&&ge.dom.i2svg({node:r})};function Zn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return en(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!He){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function vu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(da(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Xn(C(C({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function bu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:o}),children:r}]}]}function ga(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,A=v===void 0?!1:v,L=r.found?r:n,z=L.width,T=L.height,y=a==="fak",S=[I.replacementClass,i?"".concat(I.familyPrefix,"-").concat(i):""].filter(function(se){return m.classes.indexOf(se)===-1}).filter(function(se){return se!==""||!!se}).concat(m.classes).join(" "),N={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(T)})},j=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(z/T*16*.0625,"em")}:{};A&&(N.attributes[ut]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||Jt())},children:[l]}),delete N.attributes.title);var W=C(C({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:C(C({},j),m.styles)}),re=r.found&&n.found?$e("generateAbstractMask",W)||{children:[],attributes:{}}:$e("generateAbstractIcon",W)||{children:[],attributes:{}},de=re.children,Se=re.attributes;return W.children=de,W.attributes=Se,s?bu(W):vu(W)}function gi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=C(C(C({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[ut]="");var d=C({},o.styles);da(a)&&(d.transform=Xc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Xn(d);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function yu(e){var t=e.content,n=e.title,r=e.extra,a=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Xn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var dr=ke.styles;function Rr(e){var t=e[0],n=e[1],r=e.slice(4),a=oa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.familyPrefix,"-").concat(st.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.familyPrefix,"-").concat(st.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.familyPrefix,"-").concat(st.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var xu={found:!1,width:512,height:512};function wu(e,t){!Mo&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=et()),new Promise(function(r,a){if($e("missingIconAbstract"),n==="fa"){var i=Ko(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&dr[t]&&dr[t][e]){var o=dr[t][e];return r(Rr(o))}wu(e,t),r(C(C({},xu),{},{icon:I.showMissingIcons&&e?$e("missingIconAbstract")||{}:{}}))})}var vi=function(){},jr=I.measurePerformance&&un&&un.mark&&un.measure?un:{mark:vi,measure:vi},jt='FA "6.1.2"',_u=function(t){return jr.mark("".concat(jt," ").concat(t," begins")),function(){return qo(t)}},qo=function(t){jr.mark("".concat(jt," ").concat(t," ends")),jr.measure("".concat(jt," ").concat(t),"".concat(jt," ").concat(t," begins"),"".concat(jt," ").concat(t," ends"))},va={begin:_u,end:qo},bn=function(){};function bi(e){var t=e.getAttribute?e.getAttribute(ut):null;return typeof t=="string"}function ku(e){var t=e.getAttribute?e.getAttribute(la):null,n=e.getAttribute?e.getAttribute(fa):null;return t&&n}function Au(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Cu(){if(I.autoReplaceSvg===!0)return yn.replace;var e=yn[I.autoReplaceSvg];return e||yn.replace}function Su(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function Ou(e){return q.createElement(e)}function Xo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Su:Ou:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Xo(o,{ceFn:r}))}),a}function Eu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var yn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Xo(a),n)}),n.getAttribute(ut)===null&&I.keepOriginalSource){var r=q.createComment(Eu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ua(n).indexOf(I.replacementClass))return yn.replace(t);var a=new RegExp("".concat(I.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return en(s)}).join(`
`);n.setAttribute(ut,""),n.innerHTML=o}};function yi(e){e()}function Go(e,t){var n=typeof t=="function"?t:bn;if(e.length===0)n();else{var r=yi;I.mutateApproach===Tc&&(r=Qe.requestAnimationFrame||yi),r(function(){var a=Cu(),i=va.begin("mutate");e.map(a),i(),n()})}}var ba=!1;function Jo(){ba=!0}function Dr(){ba=!1}var Mn=null;function xi(e){if(!!ci&&!!I.observeMutations){var t=e.treeCallback,n=t===void 0?bn:t,r=e.nodeCallback,a=r===void 0?bn:r,i=e.pseudoElementsCallback,o=i===void 0?bn:i,s=e.observeMutationsRoot,l=s===void 0?q:s;Mn=new ci(function(u){if(!ba){var d=et();It(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!bi(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&bi(m.target)&&~jc.indexOf(m.attributeName))if(m.attributeName==="class"&&ku(m.target)){var v=Jn(ua(m.target)),A=v.prefix,L=v.iconName;m.target.setAttribute(la,A||d),L&&m.target.setAttribute(fa,L)}else Au(m.target)&&a(m.target)})}}),He&&Mn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pu(){!Mn||Mn.disconnect()}function Iu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Tu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Jn(ua(e));return a.prefix||(a.prefix=et()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=lu(a.prefix,e.innerText)||pa(a.prefix,Mr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Mu(e){var t=It(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||Jt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Nu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Tu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Mu(e),s=Fr("parseNodeAttributes",{},e),l=t.styleParser?Iu(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Fu=ke.styles;function Zo(e){var t=I.autoReplaceSvg==="nest"?wi(e,{styleParser:!1}):wi(e);return~t.extra.classes.indexOf(Fo)?$e("generateLayersText",e,t):$e("generateSvgReplacementMutation",e,t)}function _i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!He)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(ui,"-").concat(m))},a=function(m){return n.remove("".concat(ui,"-").concat(m))},i=I.autoFetchSvg?Object.keys(ca):Object.keys(Fu);i.includes("fa")||i.push("fa");var o=[".".concat(Fo,":not([").concat(ut,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ut,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=It(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=va.begin("onTree"),u=s.reduce(function(d,m){try{var v=Zo(m);v&&d.push(v)}catch(A){Mo||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(v){Go(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Lu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zo(e).then(function(n){n&&Go([n],t)})}function Ru(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Lr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Lr(a||{})),e(r,C(C({},n),{},{mask:a}))}}var zu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Te:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,v=m===void 0?null:m,A=n.titleId,L=A===void 0?null:A,z=n.classes,T=z===void 0?[]:z,y=n.attributes,S=y===void 0?{}:y,N=n.styles,j=N===void 0?{}:N;if(!!t){var W=t.prefix,re=t.iconName,de=t.icon;return Zn(C({type:"icon"},t),function(){return dt("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(v?S["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(L||Jt()):(S["aria-hidden"]="true",S.focusable="false")),ga({icons:{main:Rr(de),mask:l?Rr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:re,transform:C(C({},Te),a),symbol:o,title:v,maskId:d,titleId:L,extra:{attributes:S,styles:j,classes:T}})})}},ju={mixout:function(){return{icon:Ru(zu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_i,n.nodeCallback=Lu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return _i(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(A,L){Promise.all([zr(a,s),d.iconName?zr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var T=oa(z,2),y=T[0],S=T[1];A([n,ga({icons:{main:y,mask:S},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(L)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Xn(s);l.length>0&&(a.style=l);var u;return da(o)&&(u=$e("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Du={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Zn({type:"layer"},function(){dt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.familyPrefix,"-layers")].concat(qn(i)).join(" ")},children:o}]})}}}},$u={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Zn({type:"counter",content:n},function(){return dt("beforeDOMElementCreation",{content:n,params:r}),yu({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(I.familyPrefix,"-layers-counter")].concat(qn(s))}})})}}}},Uu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Te:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,A=v===void 0?{}:v;return Zn({type:"text",content:n},function(){return dt("beforeDOMElementCreation",{content:n,params:r}),gi({content:n,transform:C(C({},Te),i),title:s,extra:{attributes:m,styles:A,classes:["".concat(I.familyPrefix,"-layers-text")].concat(qn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Po){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,gi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Bu=new RegExp('"',"ug"),ki=[1105920,1112319];function Hu(e){var t=e.replace(Bu,""),n=nu(t,0),r=n>=ki[0]&&n<=ki[1],a=t.length===2?t[0]===t[1]:!1;return{value:Mr(a?t[0]:t),isSecondary:r||a}}function Ai(e,t){var n="".concat(Ic).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=It(e.children),o=i.filter(function(re){return re.getAttribute(Tr)===t})[0],s=Qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Lc),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?In[l[2].toLowerCase()]:Rc[u],A=Hu(m),L=A.value,z=A.isSecondary,T=l[0].startsWith("FontAwesome"),y=pa(v,L),S=y;if(T){var N=fu(L);N.iconName&&N.prefix&&(y=N.iconName,v=N.prefix)}if(y&&!z&&(!o||o.getAttribute(la)!==v||o.getAttribute(fa)!==S)){e.setAttribute(n,S),o&&e.removeChild(o);var j=Nu(),W=j.extra;W.attributes[Tr]=t,zr(y,v).then(function(re){var de=ga(C(C({},j),{},{icons:{main:re,mask:ha()},prefix:v,iconName:S,extra:W,watchable:!0})),Se=q.createElement("svg");t==="::before"?e.insertBefore(Se,e.firstChild):e.appendChild(Se),Se.outerHTML=de.map(function(se){return en(se)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Yu(e){return Promise.all([Ai(e,"::before"),Ai(e,"::after")])}function Wu(e){return e.parentNode!==document.head&&!~Mc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Tr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ci(e){if(!!He)return new Promise(function(t,n){var r=It(e.querySelectorAll("*")).filter(Wu).map(Yu),a=va.begin("searchPseudoElements");Jo(),Promise.all(r).then(function(){a(),Dr(),t()}).catch(function(){a(),Dr(),n()})})}var Ku={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ci,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;I.searchPseudoElements&&Ci(a)}}},Si=!1,Vu={mixout:function(){return{dom:{unwatch:function(){Jo(),Si=!0}}}},hooks:function(){return{bootstrap:function(){xi(Fr("mutationObserverCallbacks",{}))},noAuto:function(){Pu()},watch:function(n){var r=n.observeMutationsRoot;Si?Dr():xi(Fr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Oi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},qu={mixout:function(){return{parse:{transform:function(n){return Oi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Oi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:m,path:v};return{tag:"g",attributes:C({},A.outer),children:[{tag:"g",attributes:C({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),A.path)}]}]}}}},mr={x:0,y:0,width:"100%",height:"100%"};function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Xu(e){return e.tag==="g"?e.children:[e]}var Gu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Jn(a.split(" ").map(function(o){return o.trim()})):ha();return i.prefix||(i.prefix=et()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,v=o.icon,A=qc({transform:l,containerWidth:m,iconWidth:u}),L={tag:"rect",attributes:C(C({},mr),{},{fill:"white"})},z=d.children?{children:d.children.map(Ei)}:{},T={tag:"g",attributes:C({},A.inner),children:[Ei(C({tag:d.tag,attributes:C(C({},d.attributes),A.path)},z))]},y={tag:"g",attributes:C({},A.outer),children:[T]},S="mask-".concat(s||Jt()),N="clip-".concat(s||Jt()),j={tag:"mask",attributes:C(C({},mr),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Xu(v)},j]};return r.push(W,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(S,")")},mr)}),{children:r,attributes:a}}}},Ju={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Zu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Qu=[Jc,ju,Du,$u,Uu,Ku,Vu,qu,Gu,Ju,Zu];du(Qu,{mixoutsTo:ge});ge.noAuto;var Qo=ge.config,Qn=ge.library;ge.dom;var Nn=ge.parse;ge.findIconDefinition;ge.toHtml;var ed=ge.icon;ge.layer;var td=ge.text;ge.counter;function Pi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pi(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fn(e){return Fn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fn(e)}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function rd(e,t){if(e==null)return{};var n=nd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function $r(e){return ad(e)||id(e)||od(e)||sd()}function ad(e){if(Array.isArray(e))return Ur(e)}function id(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function od(e,t){if(!!e){if(typeof e=="string")return Ur(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ur(e,t)}}function Ur(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function sd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ld=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},es={exports:{}};(function(e){(function(t){var n=function(y,S,N){if(!u(S)||m(S)||v(S)||A(S)||l(S))return S;var j,W=0,re=0;if(d(S))for(j=[],re=S.length;W<re;W++)j.push(n(y,S[W],N));else{j={};for(var de in S)Object.prototype.hasOwnProperty.call(S,de)&&(j[y(de,N)]=n(y,S[de],N))}return j},r=function(y,S){S=S||{};var N=S.separator||"_",j=S.split||/(?=[A-Z])/;return y.split(j).join(N)},a=function(y){return L(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(S,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var S=a(y);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(y,S){return r(y,S).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},A=function(y){return s.call(y)=="[object Boolean]"},L=function(y){return y=y-0,y===y},z=function(y,S){var N=S&&"process"in S?S.process:S;return typeof N!="function"?y:function(j,W){return N(j,y,W)}},T={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,S){return n(z(a,S),y)},decamelizeKeys:function(y,S){return n(z(o,S),y,S)},pascalizeKeys:function(y,S){return n(z(i,S),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(ld)})(es);var fd=es.exports,cd=["class","style"];function ud(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=fd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function dd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ya(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ya(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=dd(d);break;case"style":l.style=ud(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=rd(n,cd);return ko(e.tag,xe(xe(xe({},t),{},{class:a.class,style:xe(xe({},a.style),o)},a.attrs),s),r)}var ts=!1;try{ts=!0}catch{}function md(){if(!ts&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Yt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?fe({},e,t):{}}function pd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},fe(t,"fa-".concat(e.size),e.size!==null),fe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),fe(t,"fa-pull-".concat(e.pull),e.pull!==null),fe(t,"fa-swap-opacity",e.swapOpacity),fe(t,"fa-bounce",e.bounce),fe(t,"fa-shake",e.shake),fe(t,"fa-beat",e.beat),fe(t,"fa-fade",e.fade),fe(t,"fa-beat-fade",e.beatFade),fe(t,"fa-flash",e.flash),fe(t,"fa-spin-pulse",e.spinPulse),fe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ii(e){if(e&&Fn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Nn.icon)return Nn.icon(e);if(e===null)return null;if(Fn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var hd=na({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return Ii(t.icon)}),i=ve(function(){return Yt("classes",pd(t))}),o=ve(function(){return Yt("transform",typeof t.transform=="string"?Nn.transform(t.transform):t.transform)}),s=ve(function(){return Yt("mask",Ii(t.mask))}),l=ve(function(){return ed(a.value,xe(xe(xe(xe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});pn(l,function(d){if(!d)return md("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=ve(function(){return l.value?ya(l.value.abstract[0],{},r):null});return function(){return u.value}}});na({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Qo.familyPrefix,i=ve(function(){return["".concat(a,"-layers")].concat($r(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return ko("div",{class:i.value},r.default?r.default():[])}}});na({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Qo.familyPrefix,i=ve(function(){return Yt("classes",[].concat($r(t.counter?["".concat(a,"-layers-counter")]:[]),$r(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ve(function(){return Yt("transform",typeof t.transform=="string"?Nn.transform(t.transform):t.transform)}),s=ve(function(){var u=td(t.value.toString(),xe(xe({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return ya(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var gd={prefix:"fas",iconName:"anchor",icon:[576,512,[9875],"f13d","M352 176C369.7 176 384 190.3 384 208C384 225.7 369.7 240 352 240H320V448H368C421 448 464 405 464 352V345.9L456.1 352.1C447.6 362.3 432.4 362.3 423 352.1C413.7 343.6 413.7 328.4 423 319L479 263C488.4 253.7 503.6 253.7 512.1 263L568.1 319C578.3 328.4 578.3 343.6 568.1 352.1C559.6 362.3 544.4 362.3 535 352.1L528 345.9V352C528 440.4 456.4 512 368 512H208C119.6 512 48 440.4 48 352V345.9L40.97 352.1C31.6 362.3 16.4 362.3 7.029 352.1C-2.343 343.6-2.343 328.4 7.029 319L63.03 263C72.4 253.7 87.6 253.7 96.97 263L152.1 319C162.3 328.4 162.3 343.6 152.1 352.1C143.6 362.3 128.4 362.3 119 352.1L112 345.9V352C112 405 154.1 448 208 448H256V240H224C206.3 240 192 225.7 192 208C192 190.3 206.3 176 224 176H234.9C209 158.8 192 129.4 192 96C192 42.98 234.1 0 288 0C341 0 384 42.98 384 96C384 129.4 366.1 158.8 341.1 176H352zM288 128C305.7 128 320 113.7 320 96C320 78.33 305.7 64 288 64C270.3 64 256 78.33 256 96C256 113.7 270.3 128 288 128z"]},vd={prefix:"fas",iconName:"power-off",icon:[512,512,[9211],"f011","M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256V32C224 14.33 238.3 0 256 0C273.7 0 288 14.33 288 32V256zM80 256C80 353.2 158.8 432 256 432C353.2 432 432 353.2 432 256C432 201.6 407.3 152.9 368.5 120.6C354.9 109.3 353 89.13 364.3 75.54C375.6 61.95 395.8 60.1 409.4 71.4C462.2 115.4 496 181.8 496 255.1C496 388.5 388.5 496 256 496C123.5 496 16 388.5 16 255.1C16 181.8 49.75 115.4 102.6 71.4C116.2 60.1 136.4 61.95 147.7 75.54C158.1 89.13 157.1 109.3 143.5 120.6C104.7 152.9 80 201.6 80 256z"]},bd={prefix:"fas",iconName:"rotate",icon:[512,512,[128260,"sync-alt"],"f2f1","M449.9 39.96l-48.5 48.53C362.5 53.19 311.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.97 5.5 34.86-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c37.96 0 73 14.18 100.2 37.8L311.1 178C295.1 194.8 306.8 223.4 330.4 224h146.9C487.7 223.7 496 215.3 496 204.9V59.04C496 34.99 466.9 22.95 449.9 39.96zM441.8 289.6c-16.94-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-37.96 0-73-14.18-100.2-37.8L200 334C216.9 317.2 205.2 288.6 181.6 288H34.66C24.32 288.3 16 296.7 16 307.1v145.9c0 24.04 29.07 36.08 46.07 19.07l48.5-48.53C149.5 458.8 200.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"]};/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var yd={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};Qn.add(bd);Qn.add(vd);Qn.add(gd);Qn.add(yd);Rf(yc).component("font-awesome-icon",hd).mount("#app");
