const Ko=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Ko();function Tr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const qo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xo=Tr(qo);function vi(e){return!!e||e===""}function at(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=J(r)?Jo(r):at(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(J(e))return e;if(G(e))return e}}const Vo=/;(?![^(]*\))/g,Go=/:(.+)/;function Jo(e){const t={};return e.split(Vo).forEach(n=>{if(n){const r=n.split(Go);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Yt(e){let t="";if(J(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Yt(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Yn=e=>J(e)?e:e==null?"":F(e)||G(e)&&(e.toString===wi||!L(e.toString))?JSON.stringify(e,bi,2):String(e),bi=(e,t)=>t&&t.__v_isRef?bi(e,t.value):wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:yi(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!F(t)&&!_i(t)?String(t):t,W={},xt=[],_e=()=>{},Zo=()=>!1,Qo=/^on[^a-z]/,On=e=>Qo.test(e),Ir=e=>e.startsWith("onUpdate:"),ne=Object.assign,Nr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},es=Object.prototype.hasOwnProperty,z=(e,t)=>es.call(e,t),F=Array.isArray,wt=e=>Sn(e)==="[object Map]",yi=e=>Sn(e)==="[object Set]",L=e=>typeof e=="function",J=e=>typeof e=="string",Mr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",xi=e=>G(e)&&L(e.then)&&L(e.catch),wi=Object.prototype.toString,Sn=e=>wi.call(e),ts=e=>Sn(e).slice(8,-1),_i=e=>Sn(e)==="[object Object]",Fr=e=>J(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,on=Tr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),En=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ns=/-(\w)/g,Ie=En(e=>e.replace(ns,(t,n)=>n?n.toUpperCase():"")),rs=/\B([A-Z])/g,St=En(e=>e.replace(rs,"-$1").toLowerCase()),Cn=En(e=>e.charAt(0).toUpperCase()+e.slice(1)),Wn=En(e=>e?`on${Cn(e)}`:""),mn=(e,t)=>!Object.is(e,t),Kn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},hn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},as=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ga;const is=()=>ga||(ga=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ee;class os{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ee&&(this.parent=Ee,this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ee;try{return Ee=this,t()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ss(e,t=Ee){t&&t.active&&t.effects.push(e)}const Rr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ki=e=>(e.w&Ve)>0,Ai=e=>(e.n&Ve)>0,ls=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ve},fs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ki(a)&&!Ai(a)?a.delete(e):t[n++]=a,a.w&=~Ve,a.n&=~Ve}t.length=n}},nr=new WeakMap;let Rt=0,Ve=1;const rr=30;let be;const ot=Symbol(""),ar=Symbol("");class Lr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ss(this,r)}run(){if(!this.active)return this.fn();let t=be,n=qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=be,be=this,qe=!0,Ve=1<<++Rt,Rt<=rr?ls(this):va(this),this.fn()}finally{Rt<=rr&&fs(this),Ve=1<<--Rt,be=this.parent,qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){be===this?this.deferStop=!0:this.active&&(va(this),this.onStop&&this.onStop(),this.active=!1)}}function va(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qe=!0;const Oi=[];function Et(){Oi.push(qe),qe=!1}function Ct(){const e=Oi.pop();qe=e===void 0?!0:e}function me(e,t,n){if(qe&&be){let r=nr.get(e);r||nr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Rr()),Si(a)}}function Si(e,t){let n=!1;Rt<=rr?Ai(e)||(e.n|=Ve,n=!ki(e)):n=!e.has(be),n&&(e.add(be),be.deps.push(e))}function Le(e,t,n,r,a,i){const o=nr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?Fr(n)&&s.push(o.get("length")):(s.push(o.get(ot)),wt(e)&&s.push(o.get(ar)));break;case"delete":F(e)||(s.push(o.get(ot)),wt(e)&&s.push(o.get(ar)));break;case"set":wt(e)&&s.push(o.get(ot));break}if(s.length===1)s[0]&&ir(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);ir(Rr(l))}}function ir(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&ba(r);for(const r of n)r.computed||ba(r)}function ba(e,t){(e!==be||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const cs=Tr("__proto__,__v_isRef,__isVue"),Ei=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Mr)),us=jr(),ds=jr(!1,!0),ms=jr(!0),ya=hs();function hs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Et();const r=B(this)[t].apply(this,n);return Ct(),r}}),e}function jr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ts:Ni:t?Ii:Ti).get(r))return r;const o=F(r);if(!e&&o&&z(ya,a))return Reflect.get(ya,a,i);const s=Reflect.get(r,a,i);return(Mr(a)?Ei.has(a):cs(a))||(e||me(r,"get",a),t)?s:te(s)?o&&Fr(a)?s:s.value:G(s)?e?Mi(s):$r(s):s}}const ps=Ci(),gs=Ci(!0);function Ci(e=!1){return function(n,r,a,i){let o=n[r];if(Wt(o)&&te(o)&&!te(a))return!1;if(!e&&!Wt(a)&&(or(a)||(a=B(a),o=B(o)),!F(n)&&te(o)&&!te(a)))return o.value=a,!0;const s=F(n)&&Fr(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?mn(a,o)&&Le(n,"set",r,a):Le(n,"add",r,a)),l}}function vs(e,t){const n=z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Le(e,"delete",t,void 0),r}function bs(e,t){const n=Reflect.has(e,t);return(!Mr(t)||!Ei.has(t))&&me(e,"has",t),n}function ys(e){return me(e,"iterate",F(e)?"length":ot),Reflect.ownKeys(e)}const Pi={get:us,set:ps,deleteProperty:vs,has:bs,ownKeys:ys},xs={get:ms,set(e,t){return!0},deleteProperty(e,t){return!0}},ws=ne({},Pi,{get:ds,set:gs}),Dr=e=>e,Pn=e=>Reflect.getPrototypeOf(e);function Qt(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:o}=Pn(a),s=r?Dr:n?Hr:Ur;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function en(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function tn(e,t=!1){return e=e.__v_raw,!t&&me(B(e),"iterate",ot),Reflect.get(e,"size",e)}function xa(e){e=B(e);const t=B(this);return Pn(t).has.call(t,e)||(t.add(e),Le(t,"add",e,e)),this}function wa(e,t){t=B(t);const n=B(this),{has:r,get:a}=Pn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?mn(t,o)&&Le(n,"set",e,t):Le(n,"add",e,t),this}function _a(e){const t=B(this),{has:n,get:r}=Pn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Le(t,"delete",e,void 0),i}function ka(){const e=B(this),t=e.size!==0,n=e.clear();return t&&Le(e,"clear",void 0,void 0),n}function nn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?Dr:e?Hr:Ur;return!e&&me(s,"iterate",ot),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function rn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=wt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Dr:t?Hr:Ur;return!t&&me(i,"iterate",l?ar:ot),{next(){const{value:m,done:v}=u.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function He(e){return function(...t){return e==="delete"?!1:this}}function _s(){const e={get(i){return Qt(this,i)},get size(){return tn(this)},has:en,add:xa,set:wa,delete:_a,clear:ka,forEach:nn(!1,!1)},t={get(i){return Qt(this,i,!1,!0)},get size(){return tn(this)},has:en,add:xa,set:wa,delete:_a,clear:ka,forEach:nn(!1,!0)},n={get(i){return Qt(this,i,!0)},get size(){return tn(this,!0)},has(i){return en.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:nn(!0,!1)},r={get(i){return Qt(this,i,!0,!0)},get size(){return tn(this,!0)},has(i){return en.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:nn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=rn(i,!1,!1),n[i]=rn(i,!0,!1),t[i]=rn(i,!1,!0),r[i]=rn(i,!0,!0)}),[e,n,t,r]}const[ks,As,Os,Ss]=_s();function zr(e,t){const n=t?e?Ss:Os:e?As:ks;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const Es={get:zr(!1,!1)},Cs={get:zr(!1,!0)},Ps={get:zr(!0,!1)},Ti=new WeakMap,Ii=new WeakMap,Ni=new WeakMap,Ts=new WeakMap;function Is(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ns(e){return e.__v_skip||!Object.isExtensible(e)?0:Is(ts(e))}function $r(e){return Wt(e)?e:Br(e,!1,Pi,Es,Ti)}function Ms(e){return Br(e,!1,ws,Cs,Ii)}function Mi(e){return Br(e,!0,xs,Ps,Ni)}function Br(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ns(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function _t(e){return Wt(e)?_t(e.__v_raw):!!(e&&e.__v_isReactive)}function Wt(e){return!!(e&&e.__v_isReadonly)}function or(e){return!!(e&&e.__v_isShallow)}function Fi(e){return _t(e)||Wt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Ri(e){return hn(e,"__v_skip",!0),e}const Ur=e=>G(e)?$r(e):e,Hr=e=>G(e)?Mi(e):e;function Fs(e){qe&&be&&(e=B(e),Si(e.dep||(e.dep=Rr())))}function Rs(e,t){e=B(e),e.dep&&ir(e.dep)}function te(e){return!!(e&&e.__v_isRef===!0)}function Ls(e){return te(e)?e.value:e}const js={get:(e,t,n)=>Ls(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return te(a)&&!te(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Li(e){return _t(e)?e:new Proxy(e,js)}class Ds{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Lr(t,()=>{this._dirty||(this._dirty=!0,Rs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Fs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function zs(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=_e):(r=e.get,a=e.set),new Ds(r,a,i||!a,n)}function Xe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Tn(i,t,n)}return a}function ke(e,t,n,r){if(L(e)){const i=Xe(e,t,n,r);return i&&xi(i)&&i.catch(o=>{Tn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ke(e[i],t,n,r));return a}function Tn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Xe(l,null,10,[e,o,s]);return}}$s(e,n,a,r)}function $s(e,t,n,r=!0){console.error(e)}let pn=!1,sr=!1;const de=[];let Re=0;const Dt=[];let Lt=null,pt=0;const zt=[];let We=null,gt=0;const ji=Promise.resolve();let Yr=null,lr=null;function Bs(e){const t=Yr||ji;return e?t.then(this?e.bind(this):e):t}function Us(e){let t=Re+1,n=de.length;for(;t<n;){const r=t+n>>>1;Kt(de[r])<e?t=r+1:n=r}return t}function Di(e){(!de.length||!de.includes(e,pn&&e.allowRecurse?Re+1:Re))&&e!==lr&&(e.id==null?de.push(e):de.splice(Us(e.id),0,e),zi())}function zi(){!pn&&!sr&&(sr=!0,Yr=ji.then(Ui))}function Hs(e){const t=de.indexOf(e);t>Re&&de.splice(t,1)}function $i(e,t,n,r){F(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),zi()}function Ys(e){$i(e,Lt,Dt,pt)}function Ws(e){$i(e,We,zt,gt)}function In(e,t=null){if(Dt.length){for(lr=t,Lt=[...new Set(Dt)],Dt.length=0,pt=0;pt<Lt.length;pt++)Lt[pt]();Lt=null,pt=0,lr=null,In(e,t)}}function Bi(e){if(In(),zt.length){const t=[...new Set(zt)];if(zt.length=0,We){We.push(...t);return}for(We=t,We.sort((n,r)=>Kt(n)-Kt(r)),gt=0;gt<We.length;gt++)We[gt]();We=null,gt=0}}const Kt=e=>e.id==null?1/0:e.id;function Ui(e){sr=!1,pn=!0,In(e),de.sort((n,r)=>Kt(n)-Kt(r));const t=_e;try{for(Re=0;Re<de.length;Re++){const n=de[Re];n&&n.active!==!1&&Xe(n,null,14)}}finally{Re=0,de.length=0,Bi(),pn=!1,Yr=null,(de.length||Dt.length||zt.length)&&Ui(e)}}function Ks(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||W;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||W;v&&(a=n.map(A=>A.trim())),m&&(a=n.map(as))}let s,l=r[s=Wn(t)]||r[s=Wn(Ie(t))];!l&&i&&(l=r[s=Wn(St(t))]),l&&ke(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ke(u,e,6,a)}}function Hi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=u=>{const d=Hi(u,t,!0);d&&(s=!0,ne(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):ne(o,i),r.set(e,o),o)}function Nn(e,t){return!e||!On(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,St(t))||z(e,t))}let Pe=null,Yi=null;function gn(e){const t=Pe;return Pe=e,Yi=e&&e.type.__scopeId||null,t}function qs(e,t=Pe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ma(-1);const i=gn(t),o=e(...a);return gn(i),r._d&&Ma(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function qn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:v,setupState:A,ctx:R,inheritAttrs:j}=e;let I,y;const S=gn(e);try{if(n.shapeFlag&4){const D=a||r;I=Ce(d.call(D,D,m,i,A,v,R)),y=l}else{const D=t;I=Ce(D.length>1?D(i,{attrs:l,slots:s,emit:u}):D(i,null)),y=t.props?l:Xs(l)}}catch(D){$t.length=0,Tn(D,e,1),I=le(lt)}let N=I;if(y&&j!==!1){const D=Object.keys(y),{shapeFlag:Y}=N;D.length&&Y&7&&(o&&D.some(Ir)&&(y=Vs(y,o)),N=At(N,y))}return n.dirs&&(N=At(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),I=N,gn(S),I}const Xs=e=>{let t;for(const n in e)(n==="class"||n==="style"||On(n))&&((t||(t={}))[n]=e[n]);return t},Vs=(e,t)=>{const n={};for(const r in e)(!Ir(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Gs(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Aa(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Nn(u,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Aa(r,o,u):!0:!!o;return!1}function Aa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Nn(n,i))return!0}return!1}function Js({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Zs=e=>e.__isSuspense;function Qs(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Ws(e)}function el(e,t){if(Z){let n=Z.provides;const r=Z.parent&&Z.parent.provides;r===n&&(n=Z.provides=Object.create(r)),n[e]=t}}function Xn(e,t,n=!1){const r=Z||Pe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const Oa={};function sn(e,t,n){return Wi(e,t,n)}function Wi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=W){const s=Z;let l,u=!1,d=!1;if(te(e)?(l=()=>e.value,u=or(e)):_t(e)?(l=()=>e,r=!0):F(e)?(d=!0,u=e.some(y=>_t(y)||or(y)),l=()=>e.map(y=>{if(te(y))return y.value;if(_t(y))return vt(y);if(L(y))return Xe(y,s,2)})):L(e)?t?l=()=>Xe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),ke(e,s,3,[v])}:l=_e,t&&r){const y=l;l=()=>vt(y())}let m,v=y=>{m=I.onStop=()=>{Xe(y,s,4)}};if(Xt)return v=_e,t?n&&ke(t,s,3,[l(),d?[]:void 0,v]):l(),_e;let A=d?[]:Oa;const R=()=>{if(!!I.active)if(t){const y=I.run();(r||u||(d?y.some((S,N)=>mn(S,A[N])):mn(y,A)))&&(m&&m(),ke(t,s,3,[y,A===Oa?void 0:A,v]),A=y)}else I.run()};R.allowRecurse=!!t;let j;a==="sync"?j=R:a==="post"?j=()=>se(R,s&&s.suspense):j=()=>Ys(R);const I=new Lr(l,j);return t?n?R():A=I.run():a==="post"?se(I.run.bind(I),s&&s.suspense):I.run(),()=>{I.stop(),s&&s.scope&&Nr(s.scope.effects,I)}}function tl(e,t,n){const r=this.proxy,a=J(e)?e.includes(".")?Ki(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=Z;Ot(this);const s=Wi(a,i.bind(r),n);return o?Ot(o):st(),s}function Ki(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function vt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),te(e))vt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)vt(e[n],t);else if(yi(e)||wt(e))e.forEach(n=>{vt(n,t)});else if(_i(e))for(const n in e)vt(e[n],t);return e}function Wr(e){return L(e)?{setup:e,name:e.name}:e}const ln=e=>!!e.type.__asyncLoader,qi=e=>e.type.__isKeepAlive;function nl(e,t){Xi(e,"a",t)}function rl(e,t){Xi(e,"da",t)}function Xi(e,t,n=Z){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Mn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)qi(a.parent.vnode)&&al(r,t,n,a),a=a.parent}}function al(e,t,n,r){const a=Mn(t,e,r,!0);Vi(()=>{Nr(r[t],a)},n)}function Mn(e,t,n=Z,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Et(),Ot(n);const s=ke(t,n,e,o);return st(),Ct(),s});return r?a.unshift(i):a.push(i),i}}const $e=e=>(t,n=Z)=>(!Xt||e==="sp")&&Mn(e,t,n),il=$e("bm"),ol=$e("m"),sl=$e("bu"),ll=$e("u"),fl=$e("bum"),Vi=$e("um"),cl=$e("sp"),ul=$e("rtg"),dl=$e("rtc");function ml(e,t=Z){Mn("ec",e,t)}function Qe(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Et(),ke(l,n,8,[e.el,s,e,t]),Ct())}}const Gi="components";function hl(e,t){return gl(Gi,e,!0,t)||e}const pl=Symbol();function gl(e,t,n=!0,r=!1){const a=Pe||Z;if(a){const i=a.type;if(e===Gi){const s=Kl(i,!1);if(s&&(s===t||s===Ie(t)||s===Cn(Ie(t))))return i}const o=Sa(a[e]||i[e],t)||Sa(a.appContext[e],t);return!o&&r?i:o}}function Sa(e,t){return e&&(e[t]||e[Ie(t)]||e[Cn(Ie(t))])}function Vn(e,t,n,r){let a;const i=n&&n[r];if(F(e)||J(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const fr=e=>e?lo(e)?Vr(e)||e.proxy:fr(e.parent):null,vn=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>fr(e.parent),$root:e=>fr(e.root),$emit:e=>e.emit,$options:e=>Zi(e),$forceUpdate:e=>e.f||(e.f=()=>Di(e.update)),$nextTick:e=>e.n||(e.n=Bs.bind(e.proxy)),$watch:e=>tl.bind(e)}),vl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==W&&z(r,t))return o[t]=1,r[t];if(a!==W&&z(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&z(u,t))return o[t]=3,i[t];if(n!==W&&z(n,t))return o[t]=4,n[t];cr&&(o[t]=0)}}const d=vn[t];let m,v;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==W&&z(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,z(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==W&&z(a,t)?(a[t]=n,!0):r!==W&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==W&&z(e,o)||t!==W&&z(t,o)||(s=i[0])&&z(s,o)||z(r,o)||z(vn,o)||z(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let cr=!0;function bl(e){const t=Zi(e),n=e.proxy,r=e.ctx;cr=!1,t.beforeCreate&&Ea(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:v,beforeUpdate:A,updated:R,activated:j,deactivated:I,beforeDestroy:y,beforeUnmount:S,destroyed:N,unmounted:D,render:Y,renderTracked:Q,renderTriggered:fe,errorCaptured:Ae,serverPrefetch:re,expose:Tt,inheritAttrs:ut,components:It,directives:Jt,filters:ca}=t;if(u&&yl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const V in o){const K=o[V];L(K)&&(r[V]=K.bind(n))}if(a){const V=a.call(n,n);G(V)&&(e.data=$r(V))}if(cr=!0,i)for(const V in i){const K=i[V],Ne=L(K)?K.bind(n,n):L(K.get)?K.get.bind(n,n):_e,Bn=!L(K)&&L(K.set)?K.set.bind(n):_e,Nt=ge({get:Ne,set:Bn});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:dt=>Nt.value=dt})}if(s)for(const V in s)Ji(s[V],r,n,V);if(l){const V=L(l)?l.call(n):l;Reflect.ownKeys(V).forEach(K=>{el(K,V[K])})}d&&Ea(d,e,"c");function ae(V,K){F(K)?K.forEach(Ne=>V(Ne.bind(n))):K&&V(K.bind(n))}if(ae(il,m),ae(ol,v),ae(sl,A),ae(ll,R),ae(nl,j),ae(rl,I),ae(ml,Ae),ae(dl,Q),ae(ul,fe),ae(fl,S),ae(Vi,D),ae(cl,re),F(Tt))if(Tt.length){const V=e.exposed||(e.exposed={});Tt.forEach(K=>{Object.defineProperty(V,K,{get:()=>n[K],set:Ne=>n[K]=Ne})})}else e.exposed||(e.exposed={});Y&&e.render===_e&&(e.render=Y),ut!=null&&(e.inheritAttrs=ut),It&&(e.components=It),Jt&&(e.directives=Jt)}function yl(e,t,n=_e,r=!1){F(e)&&(e=ur(e));for(const a in e){const i=e[a];let o;G(i)?"default"in i?o=Xn(i.from||a,i.default,!0):o=Xn(i.from||a):o=Xn(i),te(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ea(e,t,n){ke(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ji(e,t,n,r){const a=r.includes(".")?Ki(n,r):()=>n[r];if(J(e)){const i=t[e];L(i)&&sn(a,i)}else if(L(e))sn(a,e.bind(n));else if(G(e))if(F(e))e.forEach(i=>Ji(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&sn(a,i,e)}}function Zi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>bn(l,u,o,!0)),bn(l,t,o)),i.set(t,l),l}function bn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&bn(e,i,n,!0),a&&a.forEach(o=>bn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=xl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const xl={data:Ca,props:nt,emits:nt,methods:nt,computed:nt,beforeCreate:ee,created:ee,beforeMount:ee,mounted:ee,beforeUpdate:ee,updated:ee,beforeDestroy:ee,beforeUnmount:ee,destroyed:ee,unmounted:ee,activated:ee,deactivated:ee,errorCaptured:ee,serverPrefetch:ee,components:nt,directives:nt,watch:_l,provide:Ca,inject:wl};function Ca(e,t){return t?e?function(){return ne(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function wl(e,t){return nt(ur(e),ur(t))}function ur(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ee(e,t){return e?[...new Set([].concat(e,t))]:t}function nt(e,t){return e?ne(ne(Object.create(null),e),t):t}function _l(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=ee(e[r],t[r]);return n}function kl(e,t,n,r=!1){const a={},i={};hn(i,Fn,1),e.propsDefaults=Object.create(null),Qi(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ms(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Al(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Nn(e.emitsOptions,v))continue;const A=t[v];if(l)if(z(i,v))A!==i[v]&&(i[v]=A,u=!0);else{const R=Ie(v);a[R]=dr(l,s,R,A,e,!1)}else A!==i[v]&&(i[v]=A,u=!0)}}}else{Qi(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!z(t,m)&&((d=St(m))===m||!z(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=dr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!z(t,m)&&!0)&&(delete i[m],u=!0)}u&&Le(e,"set","$attrs")}function Qi(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(on(l))continue;const u=t[l];let d;a&&z(a,d=Ie(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Nn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=B(n),u=s||W;for(let d=0;d<i.length;d++){const m=i[d];n[m]=dr(a,l,m,u[m],e,!z(u,m))}}return o}function dr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=z(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(Ot(a),r=u[n]=l.call(null,t),st())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===St(n))&&(r=!0))}return r}function eo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,A]=eo(m,t,!0);ne(o,v),A&&s.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,xt),xt;if(F(i))for(let d=0;d<i.length;d++){const m=Ie(i[d]);Pa(m)&&(o[m]=W)}else if(i)for(const d in i){const m=Ie(d);if(Pa(m)){const v=i[d],A=o[m]=F(v)||L(v)?{type:v}:v;if(A){const R=Na(Boolean,A.type),j=Na(String,A.type);A[0]=R>-1,A[1]=j<0||R<j,(R>-1||z(A,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Pa(e){return e[0]!=="$"}function Ta(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ia(e,t){return Ta(e)===Ta(t)}function Na(e,t){return F(t)?t.findIndex(n=>Ia(n,e)):L(t)&&Ia(t,e)?0:-1}const to=e=>e[0]==="_"||e==="$stable",Kr=e=>F(e)?e.map(Ce):[Ce(e)],Ol=(e,t,n)=>{if(t._n)return t;const r=qs((...a)=>Kr(t(...a)),n);return r._c=!1,r},no=(e,t,n)=>{const r=e._ctx;for(const a in e){if(to(a))continue;const i=e[a];if(L(i))t[a]=Ol(a,i,r);else if(i!=null){const o=Kr(i);t[a]=()=>o}}},ro=(e,t)=>{const n=Kr(t);e.slots.default=()=>n},Sl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),hn(t,"_",n)):no(t,e.slots={})}else e.slots={},t&&ro(e,t);hn(e.slots,Fn,1)},El=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=W;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ne(a,t),!n&&s===1&&delete a._):(i=!t.$stable,no(t,a)),o=t}else t&&(ro(e,t),o={default:1});if(i)for(const s in a)!to(s)&&!(s in o)&&delete a[s]};function ao(){return{app:null,config:{isNativeTag:Zo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cl=0;function Pl(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!G(a)&&(a=null);const i=ao(),o=new Set;let s=!1;const l=i.app={_uid:Cl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Xl,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(l,...d)):L(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const v=le(r,a);return v.appContext=i,d&&t?t(v,u):e(v,u,m),s=!0,l._container=u,u.__vue_app__=l,Vr(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function mr(e,t,n,r,a=!1){if(F(e)){e.forEach((v,A)=>mr(v,t&&(F(t)?t[A]:t),n,r,a));return}if(ln(r)&&!a)return;const i=r.shapeFlag&4?Vr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===W?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(J(u)?(d[u]=null,z(m,u)&&(m[u]=null)):te(u)&&(u.value=null)),L(l))Xe(l,s,12,[o,d]);else{const v=J(l),A=te(l);if(v||A){const R=()=>{if(e.f){const j=v?d[l]:l.value;a?F(j)&&Nr(j,i):F(j)?j.includes(i)||j.push(i):v?(d[l]=[i],z(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,z(m,l)&&(m[l]=o)):A&&(l.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,se(R,n)):R()}}}const se=Qs;function Tl(e){return Il(e)}function Il(e,t){const n=is();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:v,setScopeId:A=_e,cloneNode:R,insertStaticContent:j}=e,I=(f,c,h,g=null,p=null,w=null,k=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Ft(f,c)&&(g=Zt(f),Ue(f,p,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:b,ref:C,shapeFlag:E}=c;switch(b){case qr:y(f,c,h,g);break;case lt:S(f,c,h,g);break;case Gn:f==null&&N(c,h,g,k);break;case pe:Jt(f,c,h,g,p,w,k,x,_);break;default:E&1?Q(f,c,h,g,p,w,k,x,_):E&6?ca(f,c,h,g,p,w,k,x,_):(E&64||E&128)&&b.process(f,c,h,g,p,w,k,x,_,mt)}C!=null&&p&&mr(C,f&&f.ref,w,c||f,!c)},y=(f,c,h,g)=>{if(f==null)r(c.el=s(c.children),h,g);else{const p=c.el=f.el;c.children!==f.children&&u(p,c.children)}},S=(f,c,h,g)=>{f==null?r(c.el=l(c.children||""),h,g):c.el=f.el},N=(f,c,h,g)=>{[f.el,f.anchor]=j(f.children,c,h,g,f.el,f.anchor)},D=({el:f,anchor:c},h,g)=>{let p;for(;f&&f!==c;)p=v(f),r(f,h,g),f=p;r(c,h,g)},Y=({el:f,anchor:c})=>{let h;for(;f&&f!==c;)h=v(f),a(f),f=h;a(c)},Q=(f,c,h,g,p,w,k,x,_)=>{k=k||c.type==="svg",f==null?fe(c,h,g,p,w,k,x,_):Tt(f,c,p,w,k,x,_)},fe=(f,c,h,g,p,w,k,x)=>{let _,b;const{type:C,props:E,shapeFlag:P,transition:M,patchFlag:$,dirs:U}=f;if(f.el&&R!==void 0&&$===-1)_=f.el=R(f.el);else{if(_=f.el=o(f.type,w,E&&E.is,E),P&8?d(_,f.children):P&16&&re(f.children,_,null,g,p,w&&C!=="foreignObject",k,x),U&&Qe(f,null,g,"created"),E){for(const q in E)q!=="value"&&!on(q)&&i(_,q,null,E[q],w,f.children,g,p,Me);"value"in E&&i(_,"value",null,E.value),(b=E.onVnodeBeforeMount)&&Se(b,g,f)}Ae(_,f,f.scopeId,k,g)}U&&Qe(f,null,g,"beforeMount");const H=(!p||p&&!p.pendingBranch)&&M&&!M.persisted;H&&M.beforeEnter(_),r(_,c,h),((b=E&&E.onVnodeMounted)||H||U)&&se(()=>{b&&Se(b,g,f),H&&M.enter(_),U&&Qe(f,null,g,"mounted")},p)},Ae=(f,c,h,g,p)=>{if(h&&A(f,h),g)for(let w=0;w<g.length;w++)A(f,g[w]);if(p){let w=p.subTree;if(c===w){const k=p.vnode;Ae(f,k,k.scopeId,k.slotScopeIds,p.parent)}}},re=(f,c,h,g,p,w,k,x,_=0)=>{for(let b=_;b<f.length;b++){const C=f[b]=x?Ke(f[b]):Ce(f[b]);I(null,C,c,h,g,p,w,k,x)}},Tt=(f,c,h,g,p,w,k)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:C}=c;_|=f.patchFlag&16;const E=f.props||W,P=c.props||W;let M;h&&et(h,!1),(M=P.onVnodeBeforeUpdate)&&Se(M,h,c,f),C&&Qe(c,f,h,"beforeUpdate"),h&&et(h,!0);const $=p&&c.type!=="foreignObject";if(b?ut(f.dynamicChildren,b,x,h,g,$,w):k||Ne(f,c,x,null,h,g,$,w,!1),_>0){if(_&16)It(x,c,E,P,h,g,p);else if(_&2&&E.class!==P.class&&i(x,"class",null,P.class,p),_&4&&i(x,"style",E.style,P.style,p),_&8){const U=c.dynamicProps;for(let H=0;H<U.length;H++){const q=U[H],ve=E[q],ht=P[q];(ht!==ve||q==="value")&&i(x,q,ve,ht,p,f.children,h,g,Me)}}_&1&&f.children!==c.children&&d(x,c.children)}else!k&&b==null&&It(x,c,E,P,h,g,p);((M=P.onVnodeUpdated)||C)&&se(()=>{M&&Se(M,h,c,f),C&&Qe(c,f,h,"updated")},g)},ut=(f,c,h,g,p,w,k)=>{for(let x=0;x<c.length;x++){const _=f[x],b=c[x],C=_.el&&(_.type===pe||!Ft(_,b)||_.shapeFlag&70)?m(_.el):h;I(_,b,C,null,g,p,w,k,!0)}},It=(f,c,h,g,p,w,k)=>{if(h!==g){for(const x in g){if(on(x))continue;const _=g[x],b=h[x];_!==b&&x!=="value"&&i(f,x,b,_,k,c.children,p,w,Me)}if(h!==W)for(const x in h)!on(x)&&!(x in g)&&i(f,x,h[x],null,k,c.children,p,w,Me);"value"in g&&i(f,"value",h.value,g.value)}},Jt=(f,c,h,g,p,w,k,x,_)=>{const b=c.el=f?f.el:s(""),C=c.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:P,slotScopeIds:M}=c;M&&(x=x?x.concat(M):M),f==null?(r(b,h,g),r(C,h,g),re(c.children,h,C,p,w,k,x,_)):E>0&&E&64&&P&&f.dynamicChildren?(ut(f.dynamicChildren,P,h,p,w,k,x),(c.key!=null||p&&c===p.subTree)&&io(f,c,!0)):Ne(f,c,h,C,p,w,k,x,_)},ca=(f,c,h,g,p,w,k,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?p.ctx.activate(c,h,g,k,_):$n(c,h,g,p,w,k,_):ae(f,c,_)},$n=(f,c,h,g,p,w,k)=>{const x=f.component=Bl(f,g,p);if(qi(f)&&(x.ctx.renderer=mt),Ul(x),x.asyncDep){if(p&&p.registerDep(x,V),!f.el){const _=x.subTree=le(lt);S(null,_,c,h)}return}V(x,f,c,h,p,w,k)},ae=(f,c,h)=>{const g=c.component=f.component;if(Gs(f,c,h))if(g.asyncDep&&!g.asyncResolved){K(g,c,h);return}else g.next=c,Hs(g.update),g.update();else c.el=f.el,g.vnode=c},V=(f,c,h,g,p,w,k)=>{const x=()=>{if(f.isMounted){let{next:C,bu:E,u:P,parent:M,vnode:$}=f,U=C,H;et(f,!1),C?(C.el=$.el,K(f,C,k)):C=$,E&&Kn(E),(H=C.props&&C.props.onVnodeBeforeUpdate)&&Se(H,M,C,$),et(f,!0);const q=qn(f),ve=f.subTree;f.subTree=q,I(ve,q,m(ve.el),Zt(ve),f,p,w),C.el=q.el,U===null&&Js(f,q.el),P&&se(P,p),(H=C.props&&C.props.onVnodeUpdated)&&se(()=>Se(H,M,C,$),p)}else{let C;const{el:E,props:P}=c,{bm:M,m:$,parent:U}=f,H=ln(c);if(et(f,!1),M&&Kn(M),!H&&(C=P&&P.onVnodeBeforeMount)&&Se(C,U,c),et(f,!0),E&&Hn){const q=()=>{f.subTree=qn(f),Hn(E,f.subTree,f,p,null)};H?c.type.__asyncLoader().then(()=>!f.isUnmounted&&q()):q()}else{const q=f.subTree=qn(f);I(null,q,h,g,f,p,w),c.el=q.el}if($&&se($,p),!H&&(C=P&&P.onVnodeMounted)){const q=c;se(()=>Se(C,U,q),p)}(c.shapeFlag&256||U&&ln(U.vnode)&&U.vnode.shapeFlag&256)&&f.a&&se(f.a,p),f.isMounted=!0,c=h=g=null}},_=f.effect=new Lr(x,()=>Di(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,et(f,!0),b()},K=(f,c,h)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Al(f,c.props,g,h),El(f,c.children,h),Et(),In(void 0,f.update),Ct()},Ne=(f,c,h,g,p,w,k,x,_=!1)=>{const b=f&&f.children,C=f?f.shapeFlag:0,E=c.children,{patchFlag:P,shapeFlag:M}=c;if(P>0){if(P&128){Nt(b,E,h,g,p,w,k,x,_);return}else if(P&256){Bn(b,E,h,g,p,w,k,x,_);return}}M&8?(C&16&&Me(b,p,w),E!==b&&d(h,E)):C&16?M&16?Nt(b,E,h,g,p,w,k,x,_):Me(b,p,w,!0):(C&8&&d(h,""),M&16&&re(E,h,g,p,w,k,x,_))},Bn=(f,c,h,g,p,w,k,x,_)=>{f=f||xt,c=c||xt;const b=f.length,C=c.length,E=Math.min(b,C);let P;for(P=0;P<E;P++){const M=c[P]=_?Ke(c[P]):Ce(c[P]);I(f[P],M,h,null,p,w,k,x,_)}b>C?Me(f,p,w,!0,!1,E):re(c,h,g,p,w,k,x,_,E)},Nt=(f,c,h,g,p,w,k,x,_)=>{let b=0;const C=c.length;let E=f.length-1,P=C-1;for(;b<=E&&b<=P;){const M=f[b],$=c[b]=_?Ke(c[b]):Ce(c[b]);if(Ft(M,$))I(M,$,h,null,p,w,k,x,_);else break;b++}for(;b<=E&&b<=P;){const M=f[E],$=c[P]=_?Ke(c[P]):Ce(c[P]);if(Ft(M,$))I(M,$,h,null,p,w,k,x,_);else break;E--,P--}if(b>E){if(b<=P){const M=P+1,$=M<C?c[M].el:g;for(;b<=P;)I(null,c[b]=_?Ke(c[b]):Ce(c[b]),h,$,p,w,k,x,_),b++}}else if(b>P)for(;b<=E;)Ue(f[b],p,w,!0),b++;else{const M=b,$=b,U=new Map;for(b=$;b<=P;b++){const ce=c[b]=_?Ke(c[b]):Ce(c[b]);ce.key!=null&&U.set(ce.key,b)}let H,q=0;const ve=P-$+1;let ht=!1,ma=0;const Mt=new Array(ve);for(b=0;b<ve;b++)Mt[b]=0;for(b=M;b<=E;b++){const ce=f[b];if(q>=ve){Ue(ce,p,w,!0);continue}let Oe;if(ce.key!=null)Oe=U.get(ce.key);else for(H=$;H<=P;H++)if(Mt[H-$]===0&&Ft(ce,c[H])){Oe=H;break}Oe===void 0?Ue(ce,p,w,!0):(Mt[Oe-$]=b+1,Oe>=ma?ma=Oe:ht=!0,I(ce,c[Oe],h,null,p,w,k,x,_),q++)}const ha=ht?Nl(Mt):xt;for(H=ha.length-1,b=ve-1;b>=0;b--){const ce=$+b,Oe=c[ce],pa=ce+1<C?c[ce+1].el:g;Mt[b]===0?I(null,Oe,h,pa,p,w,k,x,_):ht&&(H<0||b!==ha[H]?dt(Oe,h,pa,2):H--)}}},dt=(f,c,h,g,p=null)=>{const{el:w,type:k,transition:x,children:_,shapeFlag:b}=f;if(b&6){dt(f.component.subTree,c,h,g);return}if(b&128){f.suspense.move(c,h,g);return}if(b&64){k.move(f,c,h,mt);return}if(k===pe){r(w,c,h);for(let E=0;E<_.length;E++)dt(_[E],c,h,g);r(f.anchor,c,h);return}if(k===Gn){D(f,c,h);return}if(g!==2&&b&1&&x)if(g===0)x.beforeEnter(w),r(w,c,h),se(()=>x.enter(w),p);else{const{leave:E,delayLeave:P,afterLeave:M}=x,$=()=>r(w,c,h),U=()=>{E(w,()=>{$(),M&&M()})};P?P(w,$,U):U()}else r(w,c,h)},Ue=(f,c,h,g=!1,p=!1)=>{const{type:w,props:k,ref:x,children:_,dynamicChildren:b,shapeFlag:C,patchFlag:E,dirs:P}=f;if(x!=null&&mr(x,null,h,f,!0),C&256){c.ctx.deactivate(f);return}const M=C&1&&P,$=!ln(f);let U;if($&&(U=k&&k.onVnodeBeforeUnmount)&&Se(U,c,f),C&6)Wo(f.component,h,g);else{if(C&128){f.suspense.unmount(h,g);return}M&&Qe(f,null,c,"beforeUnmount"),C&64?f.type.remove(f,c,h,p,mt,g):b&&(w!==pe||E>0&&E&64)?Me(b,c,h,!1,!0):(w===pe&&E&384||!p&&C&16)&&Me(_,c,h),g&&ua(f)}($&&(U=k&&k.onVnodeUnmounted)||M)&&se(()=>{U&&Se(U,c,f),M&&Qe(f,null,c,"unmounted")},h)},ua=f=>{const{type:c,el:h,anchor:g,transition:p}=f;if(c===pe){Yo(h,g);return}if(c===Gn){Y(f);return}const w=()=>{a(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(f.shapeFlag&1&&p&&!p.persisted){const{leave:k,delayLeave:x}=p,_=()=>k(h,w);x?x(f.el,w,_):_()}else w()},Yo=(f,c)=>{let h;for(;f!==c;)h=v(f),a(f),f=h;a(c)},Wo=(f,c,h)=>{const{bum:g,scope:p,update:w,subTree:k,um:x}=f;g&&Kn(g),p.stop(),w&&(w.active=!1,Ue(k,f,c,h)),x&&se(x,c),se(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Me=(f,c,h,g=!1,p=!1,w=0)=>{for(let k=w;k<f.length;k++)Ue(f[k],c,h,g,p)},Zt=f=>f.shapeFlag&6?Zt(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),da=(f,c,h)=>{f==null?c._vnode&&Ue(c._vnode,null,null,!0):I(c._vnode||null,f,c,null,null,null,h),Bi(),c._vnode=f},mt={p:I,um:Ue,m:dt,r:ua,mt:$n,mc:re,pc:Ne,pbc:ut,n:Zt,o:e};let Un,Hn;return t&&([Un,Hn]=t(mt)),{render:da,hydrate:Un,createApp:Pl(da,Un)}}function et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function io(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ke(a[i]),s.el=o.el),n||io(o,s))}}function Nl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Ml=e=>e.__isTeleport,pe=Symbol(void 0),qr=Symbol(void 0),lt=Symbol(void 0),Gn=Symbol(void 0),$t=[];let xe=null;function ie(e=!1){$t.push(xe=e?null:[])}function Fl(){$t.pop(),xe=$t[$t.length-1]||null}let qt=1;function Ma(e){qt+=e}function oo(e){return e.dynamicChildren=qt>0?xe||xt:null,Fl(),qt>0&&xe&&xe.push(e),e}function ue(e,t,n,r,a,i){return oo(Fe(e,t,n,r,a,i,!0))}function Rl(e,t,n,r,a){return oo(le(e,t,n,r,a,!0))}function hr(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const Fn="__vInternal",so=({key:e})=>e!=null?e:null,fn=({ref:e,ref_key:t,ref_for:n})=>e!=null?J(e)||te(e)||L(e)?{i:Pe,r:e,k:t,f:!!n}:e:null;function Fe(e,t=null,n=null,r=0,a=null,i=e===pe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&so(t),ref:t&&fn(t),scopeId:Yi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Xr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=J(n)?8:16),qt>0&&!o&&xe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xe.push(l),l}const le=Ll;function Ll(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===pl)&&(e=lt),hr(e)){const s=At(e,t,!0);return n&&Xr(s,n),qt>0&&!i&&xe&&(s.shapeFlag&6?xe[xe.indexOf(e)]=s:xe.push(s)),s.patchFlag|=-2,s}if(ql(e)&&(e=e.__vccOpts),t){t=jl(t);let{class:s,style:l}=t;s&&!J(s)&&(t.class=Yt(s)),G(l)&&(Fi(l)&&!F(l)&&(l=ne({},l)),t.style=at(l))}const o=J(e)?1:Zs(e)?128:Ml(e)?64:G(e)?4:L(e)?2:0;return Fe(e,t,n,r,a,o,i,!0)}function jl(e){return e?Fi(e)||Fn in e?ne({},e):e:null}function At(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Dl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&so(s),ref:t&&t.ref?n&&a?F(a)?a.concat(fn(t)):[a,fn(t)]:fn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&At(e.ssContent),ssFallback:e.ssFallback&&At(e.ssFallback),el:e.el,anchor:e.anchor}}function Ze(e=" ",t=0){return le(qr,null,e,t)}function tt(e="",t=!1){return t?(ie(),Rl(lt,null,e)):le(lt,null,e)}function Ce(e){return e==null||typeof e=="boolean"?le(lt):F(e)?le(pe,null,e.slice()):typeof e=="object"?Ke(e):le(qr,null,String(e))}function Ke(e){return e.el===null||e.memo?e:At(e)}function Xr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Xr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Fn in t)?t._ctx=Pe:a===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[Ze(t)]):n=8);e.children=t,e.shapeFlag|=n}function Dl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Yt([t.class,r.class]));else if(a==="style")t.style=at([t.style,r.style]);else if(On(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Se(e,t,n,r=null){ke(e,t,7,[n,r])}const zl=ao();let $l=0;function Bl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||zl,i={uid:$l++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new os(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eo(r,a),emitsOptions:Hi(r,a),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Ks.bind(null,i),e.ce&&e.ce(i),i}let Z=null;const Ot=e=>{Z=e,e.scope.on()},st=()=>{Z&&Z.scope.off(),Z=null};function lo(e){return e.vnode.shapeFlag&4}let Xt=!1;function Ul(e,t=!1){Xt=t;const{props:n,children:r}=e.vnode,a=lo(e);kl(e,n,a,t),Sl(e,r);const i=a?Hl(e,t):void 0;return Xt=!1,i}function Hl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ri(new Proxy(e.ctx,vl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Wl(e):null;Ot(e),Et();const i=Xe(r,e,0,[e.props,a]);if(Ct(),st(),xi(i)){if(i.then(st,st),t)return i.then(o=>{Fa(e,o,t)}).catch(o=>{Tn(o,e,0)});e.asyncDep=i}else Fa(e,i,t)}else fo(e,t)}function Fa(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=Li(t)),fo(e,n)}let Ra;function fo(e,t,n){const r=e.type;if(!e.render){if(!t&&Ra&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=ne(ne({isCustomElement:i,delimiters:s},o),l);r.render=Ra(a,u)}}e.render=r.render||_e}Ot(e),Et(),bl(e),Ct(),st()}function Yl(e){return new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}})}function Wl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Yl(e))},slots:e.slots,emit:e.emit,expose:t}}function Vr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Li(Ri(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vn)return vn[n](e)}}))}function Kl(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function ql(e){return L(e)&&"__vccOpts"in e}const ge=(e,t)=>zs(e,t,Xt);function co(e,t,n){const r=arguments.length;return r===2?G(t)&&!F(t)?hr(t)?le(e,null,[t]):le(e,t):le(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hr(n)&&(n=[n]),le(e,t,n))}const Xl="3.2.37",Vl="http://www.w3.org/2000/svg",rt=typeof document<"u"?document:null,La=rt&&rt.createElement("template"),Gl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?rt.createElementNS(Vl,e):rt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>rt.createTextNode(e),createComment:e=>rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{La.innerHTML=r?`<svg>${e}</svg>`:e;const s=La.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Jl(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Zl(e,t,n){const r=e.style,a=J(n);if(n&&!a){for(const i in n)pr(r,i,n[i]);if(t&&!J(t))for(const i in t)n[i]==null&&pr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ja=/\s*!important$/;function pr(e,t,n){if(F(n))n.forEach(r=>pr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ql(e,t);ja.test(n)?e.setProperty(St(r),n.replace(ja,""),"important"):e[r]=n}}const Da=["Webkit","Moz","ms"],Jn={};function Ql(e,t){const n=Jn[t];if(n)return n;let r=Ie(t);if(r!=="filter"&&r in e)return Jn[t]=r;r=Cn(r);for(let a=0;a<Da.length;a++){const i=Da[a]+r;if(i in e)return Jn[t]=i}return t}const za="http://www.w3.org/1999/xlink";function ef(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(za,t.slice(6,t.length)):e.setAttributeNS(za,t,n);else{const i=Xo(t);n==null||i&&!vi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function tf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=vi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[uo,nf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let gr=0;const rf=Promise.resolve(),af=()=>{gr=0},of=()=>gr||(rf.then(af),gr=uo());function sf(e,t,n,r){e.addEventListener(t,n,r)}function lf(e,t,n,r){e.removeEventListener(t,n,r)}function ff(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=cf(t);if(r){const u=i[t]=uf(r,a);sf(e,s,u,l)}else o&&(lf(e,s,o,l),i[t]=void 0)}}const $a=/(?:Once|Passive|Capture)$/;function cf(e){let t;if($a.test(e)){t={};let n;for(;n=e.match($a);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[St(e.slice(2)),t]}function uf(e,t){const n=r=>{const a=r.timeStamp||uo();(nf||a>=n.attached-1)&&ke(df(r,n.value),t,5,[r])};return n.value=e,n.attached=of(),n}function df(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ba=/^on[a-z]/,mf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Jl(e,r,a):t==="style"?Zl(e,n,r):On(t)?Ir(t)||ff(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hf(e,t,r,a))?tf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ef(e,t,r,a))};function hf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ba.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ba.test(t)&&J(n)?!1:t in e}const pf=ne({patchProp:mf},Gl);let Ua;function gf(){return Ua||(Ua=Tl(pf))}const vf=(...e)=>{const t=gf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=bf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function bf(e){return J(e)?document.querySelector(e):e}const yf="/vue-battleship/assets/sea.fc6dafe9.jpeg",xf="/vue-battleship/assets/explosion.118de65f.png";const wf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};class Ha{constructor(t,n,r){this.name=t,this.grids=[],this.width=n,this.height=r,this.ships=[new Ya(4),new Ya(2)],this.placeShipMode=!0,this.placeShipLength=this.ships[0].length,this.placeShipDirection="east",this.placedShips=0,this.allowAttack=!0,this.initGrids()}get survivalShips(){const t=[];return this.grids.forEach(n=>{n.forEach(r=>{r.hasShip&&!r.hasBeenAttacked&&t.push(r)})}),t}initGrids(){const t=[];for(let n=0;n<this.height;n++){const r=[];for(let a=0;a<this.width;a++){const i=new _f(a,n);r.push(i)}t.push(r)}this.grids=t}}class _f{constructor(t,n){this.y=n,this.x=t,this.disabled=!1,this.hasShip=!1,this.placeShipPreview=!1,this.hasBeenAttacked=!1}}class Ya{constructor(t){this.length=t}}const kf={name:"App",data(){return{gameOn:!0,gameRound:0,width:5,height:5,maps:[],grids:[],winner:"",explosionImage:xf,seaImage:yf}},methods:{getPlayerColor(e){return e==this.maps[0].name?"red":"blue"},reloadGame(){window.location.reload()},onBtnClick(e,t){if(!!this.gameOn)if(e.placeShipMode){if(!this.placeShip(e,t.x,t.y,e.placeShipLength,e.placeShipDirection))return;e.placedShips+=1,e.placedShips>=e.ships.length?setTimeout(()=>{alert(`${e.name}\u5DF2\u90E8\u7F72\u597D\u8239\u8266`),e.placeShipMode=!1,e.placeShipLength=0,this.gameRound+=1},100):e.placeShipLength=e.ships[e.placedShips].length}else this.attack(e,t.x,t.y)},userPlaceShip(e,t){e.placeShipMode=!0,e.placeShipLength=t,e.placeShipDirection="east"},changeDirection(e){e.placeShipDirection=e.placeShipDirection=="east"?"south":"east"},showShipPreview(e,t){if(!e.placeShipMode)return;const{x:n,y:r}=t;if(e.placeShipDirection=="south"){if(r+e.placeShipLength>e.height)return 0;for(let a=0;a<e.placeShipLength;a++)e.grids[r+a][n].placeShipPreview=!0}else if(e.placeShipDirection=="east"){if(n+e.placeShipLength>e.width)return console.log(`Ship can not be place in (${n}, ${r});`),0;for(let a=0;a<e.placeShipLength;a++)e.grids[r][n+a].placeShipPreview=!0}},unshowShipPreview(e,t){if(!e.placeShipMode)return;const{x:n,y:r}=t;if(e.placeShipDirection=="south"){if(r+e.placeShipLength>e.height)return 0;for(let a=0;a<e.placeShipLength;a++)e.grids[r+a][n].placeShipPreview=!1}else if(e.placeShipDirection=="east"){if(n+e.placeShipLength>e.width)return 0;for(let a=0;a<e.placeShipLength;a++)e.grids[r][n+a].placeShipPreview=!1}},attack(e,t,n){if(!e.allowAttack)return;e.allowAttack=!1;const r=e.grids[n][t],a=this.maps[(this.gameRound+1)%2].name;r.hasBeenAttacked=!0,r.disabled=!0,setTimeout(()=>{if(e.allowAttack=!0,e.survivalShips<=0){this.gameOn=!1,this.winner=a,alert(`\u904A\u6232\u7D50\u675F\uFF0C\u8D0F\u5BB6\u70BA${this.winner}`);return}this.gameRound+=1},1500)},placeShip(e,t,n,r,a){if(a=="south"){if(n+r>e.height)return!1;for(let i=0;i<r;i++)e.grids[n+i][t].hasShip=!0}else if(a=="east"){if(t+r>e.width)return!1;for(let i=0;i<r;i++)e.grids[n][t+i].hasShip=!0}return!0}},created(){const e=this,t=new Ha("\u73A9\u5BB61",this.width,this.height),n=new Ha("\u73A9\u5BB62",this.width,this.height);e.maps=[t,n]}},Af={key:0},Of={key:0},Sf=Ze(" \u8ACB "),Ef=Ze(" \u90E8\u7F72\u8239\u8266 "),Cf={key:1},Pf=Ze(" \u8ACB "),Tf=Ze(" \u958B\u59CB\u653B\u64CA! "),If={key:1},Nf=Ze(" \u904A\u6232\u7D50\u675F\uFF01\u9019\u5834\u904A\u6232\u7684\u8D0F\u5BB6\u70BA "),Mf=Ze(" \uFF01 "),Ff=["onMouseenter","onMouseleave","onClick","disabled"],Rf=["src"],Lf=["onClick"],jf=Ze(" Turn direction ");function Df(e,t,n,r,a,i){const o=hl("font-awesome-icon");return ie(!0),ue(pe,null,Vn(a.maps,(s,l)=>(ie(),ue("div",{key:s.name},[a.gameRound%2==l?(ie(),ue("section",{key:0,class:Yt([{"place-ship-mode":s.placeShipMode},{"attack-mode":!s.placeShipMode},"text-center"])},[a.gameOn?(ie(),ue("h1",Af,[s.placeShipMode?(ie(),ue("span",Of,[Sf,Fe("span",{style:at({color:i.getPlayerColor(s.name)})},Yn(s.name),5),Ef])):tt("",!0),s.placeShipMode?tt("",!0):(ie(),ue("span",Cf,[Pf,Fe("span",{style:at({color:i.getPlayerColor(a.maps[(a.gameRound+1)%2].name)})},Yn(a.maps[(a.gameRound+1)%2].name),5),Tf]))])):tt("",!0),a.gameOn?tt("",!0):(ie(),ue("h1",If,[Nf,Fe("span",{style:at({color:i.getPlayerColor(a.winner)})},Yn(a.winner),5),Mf,Fe("button",{class:"btn",onClick:t[0]||(t[0]=(...u)=>i.reloadGame&&i.reloadGame(...u))},"\u9EDE\u6211\u91CD\u65B0\u958B\u59CB")])),Fe("div",{class:"sea",style:at({backgroundImage:`url(${a.seaImage})`})},[(ie(!0),ue(pe,null,Vn(s.grids,(u,d)=>(ie(),ue("div",{key:`row${d}`,class:"row"},[(ie(!0),ue(pe,null,Vn(u,(m,v)=>(ie(),ue("div",{key:`row${d}grid${v}`,class:"grid"},[Fe("button",{class:Yt([{"has-ship":m.hasShip,"has-been-attacked":m.hasBeenAttacked,"place-ship-preview":m.placeShipPreview}]),onMouseenter:A=>i.showShipPreview(s,m),onMouseleave:A=>i.unshowShipPreview(s,m),onClick:A=>i.onBtnClick(s,m),disabled:m.disabled},[m.hasBeenAttacked&&m.hasShip?(ie(),ue("img",{key:0,class:"explode-img",src:a.explosionImage},null,8,Rf)):tt("",!0)],42,Ff)]))),128))]))),128))],4),Fe("div",null,[s.placeShipMode?(ie(),ue("button",{key:0,class:"btn",onClick:u=>i.changeDirection(s)},[le(o,{icon:"fa-solid fa-rotate"}),jf],8,Lf)):tt("",!0)])],2)):tt("",!0)]))),128)}const zf=wf(kf,[["render",Df],["__scopeId","data-v-2be7adb0"]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Wa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wa(Object(n),!0).forEach(function(r){Uf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yn(e){return yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yn(e)}function $f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ka(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Bf(e,t,n){return t&&Ka(e.prototype,t),n&&Ka(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Uf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gr(e,t){return Yf(e)||Kf(e,t)||mo(e,t)||Xf()}function Rn(e){return Hf(e)||Wf(e)||mo(e)||qf()}function Hf(e){if(Array.isArray(e))return vr(e)}function Yf(e){if(Array.isArray(e))return e}function Wf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Kf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function mo(e,t){if(!!e){if(typeof e=="string")return vr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vr(e,t)}}function vr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function qf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qa=function(){},Jr={},ho={},po=null,go={mark:qa,measure:qa};try{typeof window<"u"&&(Jr=window),typeof document<"u"&&(ho=document),typeof MutationObserver<"u"&&(po=MutationObserver),typeof performance<"u"&&(go=performance)}catch{}var Vf=Jr.navigator||{},Xa=Vf.userAgent,Va=Xa===void 0?"":Xa,Ge=Jr,X=ho,Ga=po,an=go;Ge.document;var Be=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",vo=~Va.indexOf("MSIE")||~Va.indexOf("Trident/"),je="___FONT_AWESOME___",br=16,bo="fa",yo="svg-inline--fa",ft="data-fa-i2svg",yr="data-fa-pseudo-element",Gf="data-fa-pseudo-element-pending",Zr="data-prefix",Qr="data-icon",Ja="fontawesome-i2svg",Jf="async",Zf=["HTML","HEAD","STYLE","SCRIPT"],xo=function(){try{return!0}catch{return!1}}(),ea={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},xn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},wo={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Qf={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},ec=/fa[srltdbk]?[\-\ ]/,_o="fa-layers-text",tc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,nc={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},ko=[1,2,3,4,5,6,7,8,9,10],rc=ko.concat([11,12,13,14,15,16,17,18,19,20]),ac=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],it={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ic=[].concat(Rn(Object.keys(xn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",it.GROUP,it.SWAP_OPACITY,it.PRIMARY,it.SECONDARY]).concat(ko.map(function(e){return"".concat(e,"x")})).concat(rc.map(function(e){return"w-".concat(e)})),Ao=Ge.FontAwesomeConfig||{};function oc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function sc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var lc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];lc.forEach(function(e){var t=Gr(e,2),n=t[0],r=t[1],a=sc(oc(n));a!=null&&(Ao[r]=a)})}var fc={familyPrefix:bo,styleDefault:"solid",replacementClass:yo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Bt=O(O({},fc),Ao);Bt.autoReplaceSvg||(Bt.observeMutations=!1);var T={};Object.keys(Bt).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Bt[e]=n,cn.forEach(function(r){return r(T)})},get:function(){return Bt[e]}})});Ge.FontAwesomeConfig=T;var cn=[];function cc(e){return cn.push(e),function(){cn.splice(cn.indexOf(e),1)}}var Ye=br,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function uc(e){if(!(!e||!Be)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var dc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vt(){for(var e=12,t="";e-- >0;)t+=dc[Math.random()*62|0];return t}function Pt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ta(e){return e.classList?Pt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Oo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function mc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Oo(e[n]),'" ')},"").trim()}function Ln(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function na(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function hc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function pc(e){var t=e.transform,n=e.width,r=n===void 0?br:n,a=e.height,i=a===void 0?br:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&vo?l+="translate(".concat(t.x/Ye-r/2,"em, ").concat(t.y/Ye-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ye,"em), calc(-50% + ").concat(t.y/Ye,"em)) "):l+="translate(".concat(t.x/Ye,"em, ").concat(t.y/Ye,"em) "),l+="scale(".concat(t.size/Ye*(t.flipX?-1:1),", ").concat(t.size/Ye*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var gc=`:root, :host {
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
}`;function So(){var e=bo,t=yo,n=T.familyPrefix,r=T.replacementClass,a=gc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Za=!1;function Zn(){T.autoAddCss&&!Za&&(uc(So()),Za=!0)}var vc={mixout:function(){return{dom:{css:So,insertCss:Zn}}},hooks:function(){return{beforeDOMElementCreation:function(){Zn()},beforeI2svg:function(){Zn()}}}},De=Ge||{};De[je]||(De[je]={});De[je].styles||(De[je].styles={});De[je].hooks||(De[je].hooks={});De[je].shims||(De[je].shims=[]);var we=De[je],Eo=[],bc=function e(){X.removeEventListener("DOMContentLoaded",e),wn=1,Eo.map(function(t){return t()})},wn=!1;Be&&(wn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),wn||X.addEventListener("DOMContentLoaded",bc));function yc(e){!Be||(wn?setTimeout(e,0):Eo.push(e))}function Gt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Oo(e):"<".concat(t," ").concat(mc(r),">").concat(i.map(Gt).join(""),"</").concat(t,">")}function Qa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var xc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Qn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?xc(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function wc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function xr(e){var t=wc(e);return t.length===1?t[0].toString(16):null}function _c(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ei(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function wr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ei(t);typeof we.hooks.addPack=="function"&&!a?we.hooks.addPack(e,ei(t)):we.styles[e]=O(O({},we.styles[e]||{}),i),e==="fas"&&wr("fa",t)}var Ut=we.styles,kc=we.shims,Ac=Object.values(wo),ra=null,Co={},Po={},To={},Io={},No={},Oc=Object.keys(ea);function Sc(e){return~ic.indexOf(e)}function Ec(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Sc(a)?a:null}var Mo=function(){var t=function(i){return Qn(Ut,function(o,s,l){return o[l]=Qn(s,i,{}),o},{})};Co=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Po=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),No=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ut||T.autoFetchSvg,r=Qn(kc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});To=r.names,Io=r.unicodes,ra=jn(T.styleDefault)};cc(function(e){ra=jn(e.styleDefault)});Mo();function aa(e,t){return(Co[e]||{})[t]}function Cc(e,t){return(Po[e]||{})[t]}function bt(e,t){return(No[e]||{})[t]}function Fo(e){return To[e]||{prefix:null,iconName:null}}function Pc(e){var t=Io[e],n=aa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Je(){return ra}var ia=function(){return{prefix:null,iconName:null,rest:[]}};function jn(e){var t=ea[e],n=xn[e]||xn[t],r=e in we.styles?e:null;return n||r||null}function Dn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Ec(T.familyPrefix,s);if(Ut[s]?(s=Ac.includes(s)?Qf[s]:s,a=s,o.prefix=s):Oc.indexOf(s)>-1?(a=s,o.prefix=jn(s)):l?o.iconName=l:s!==T.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Fo(o.iconName):{},d=bt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Ut.far&&Ut.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},ia());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Je()||"fas"),i}var Tc=function(){function e(){$f(this,e),this.definitions={}}return Bf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),wr(s,o[s]);var l=wo[s];l&&wr(l,o[s]),Mo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),ti=[],yt={},kt={},Ic=Object.keys(kt);function Nc(e,t){var n=t.mixoutsTo;return ti=e,yt={},Object.keys(kt).forEach(function(r){Ic.indexOf(r)===-1&&delete kt[r]}),ti.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),yn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){yt[o]||(yt[o]=[]),yt[o].push(i[o])})}r.provides&&r.provides(kt)}),n}function _r(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=yt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ct(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=yt[e]||[];a.forEach(function(i){i.apply(null,n)})}function ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return kt[e]?kt[e].apply(null,t):void 0}function kr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Je();if(!!t)return t=bt(n,t)||t,Qa(Ro.definitions,n,t)||Qa(we.styles,n,t)}var Ro=new Tc,Mc=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,ct("noAuto")},Fc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Be?(ct("beforeI2svg",t),ze("pseudoElements2svg",t),ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,yc(function(){Lc({autoReplaceSvgRoot:n}),ct("watch",t)})}},Rc={icon:function(t){if(t===null)return null;if(yn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:bt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=jn(t[0]);return{prefix:r,iconName:bt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.familyPrefix,"-"))>-1||t.match(ec))){var a=Dn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Je(),iconName:bt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Je();return{prefix:i,iconName:bt(i,t)||t}}}},he={noAuto:Mc,config:T,dom:Fc,parse:Rc,library:Ro,findIconDefinition:kr,toHtml:Gt},Lc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(we.styles).length>0||T.autoFetchSvg)&&Be&&T.autoReplaceSvg&&he.dom.i2svg({node:r})};function zn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Gt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Be){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function jc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(na(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Ln(O(O({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Dc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function oa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,A=v===void 0?!1:v,R=r.found?r:n,j=R.width,I=R.height,y=a==="fak",S=[T.replacementClass,i?"".concat(T.familyPrefix,"-").concat(i):""].filter(function(re){return m.classes.indexOf(re)===-1}).filter(function(re){return re!==""||!!re}).concat(m.classes).join(" "),N={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(I)})},D=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(j/I*16*.0625,"em")}:{};A&&(N.attributes[ft]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||Vt())},children:[l]}),delete N.attributes.title);var Y=O(O({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:O(O({},D),m.styles)}),Q=r.found&&n.found?ze("generateAbstractMask",Y)||{children:[],attributes:{}}:ze("generateAbstractIcon",Y)||{children:[],attributes:{}},fe=Q.children,Ae=Q.attributes;return Y.children=fe,Y.attributes=Ae,s?Dc(Y):jc(Y)}function ni(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[ft]="");var d=O({},o.styles);na(a)&&(d.transform=pc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Ln(d);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function zc(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ln(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var er=we.styles;function Ar(e){var t=e[0],n=e[1],r=e.slice(4),a=Gr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.familyPrefix,"-").concat(it.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(it.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(it.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var $c={found:!1,width:512,height:512};function Bc(e,t){!xo&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Or(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Je()),new Promise(function(r,a){if(ze("missingIconAbstract"),n==="fa"){var i=Fo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&er[t]&&er[t][e]){var o=er[t][e];return r(Ar(o))}Bc(e,t),r(O(O({},$c),{},{icon:T.showMissingIcons&&e?ze("missingIconAbstract")||{}:{}}))})}var ri=function(){},Sr=T.measurePerformance&&an&&an.mark&&an.measure?an:{mark:ri,measure:ri},jt='FA "6.1.2"',Uc=function(t){return Sr.mark("".concat(jt," ").concat(t," begins")),function(){return Lo(t)}},Lo=function(t){Sr.mark("".concat(jt," ").concat(t," ends")),Sr.measure("".concat(jt," ").concat(t),"".concat(jt," ").concat(t," begins"),"".concat(jt," ").concat(t," ends"))},sa={begin:Uc,end:Lo},un=function(){};function ai(e){var t=e.getAttribute?e.getAttribute(ft):null;return typeof t=="string"}function Hc(e){var t=e.getAttribute?e.getAttribute(Zr):null,n=e.getAttribute?e.getAttribute(Qr):null;return t&&n}function Yc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Wc(){if(T.autoReplaceSvg===!0)return dn.replace;var e=dn[T.autoReplaceSvg];return e||dn.replace}function Kc(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function qc(e){return X.createElement(e)}function jo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Kc:qc:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(jo(o,{ceFn:r}))}),a}function Xc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var dn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(jo(a),n)}),n.getAttribute(ft)===null&&T.keepOriginalSource){var r=X.createComment(Xc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ta(n).indexOf(T.replacementClass))return dn.replace(t);var a=new RegExp("".concat(T.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Gt(s)}).join(`
`);n.setAttribute(ft,""),n.innerHTML=o}};function ii(e){e()}function Do(e,t){var n=typeof t=="function"?t:un;if(e.length===0)n();else{var r=ii;T.mutateApproach===Jf&&(r=Ge.requestAnimationFrame||ii),r(function(){var a=Wc(),i=sa.begin("mutate");e.map(a),i(),n()})}}var la=!1;function zo(){la=!0}function Er(){la=!1}var _n=null;function oi(e){if(!!Ga&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?un:t,r=e.nodeCallback,a=r===void 0?un:r,i=e.pseudoElementsCallback,o=i===void 0?un:i,s=e.observeMutationsRoot,l=s===void 0?X:s;_n=new Ga(function(u){if(!la){var d=Je();Pt(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ai(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&ai(m.target)&&~ac.indexOf(m.attributeName))if(m.attributeName==="class"&&Hc(m.target)){var v=Dn(ta(m.target)),A=v.prefix,R=v.iconName;m.target.setAttribute(Zr,A||d),R&&m.target.setAttribute(Qr,R)}else Yc(m.target)&&a(m.target)})}}),Be&&_n.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Vc(){!_n||_n.disconnect()}function Gc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Jc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Dn(ta(e));return a.prefix||(a.prefix=Je()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Cc(a.prefix,e.innerText)||aa(a.prefix,xr(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Zc(e){var t=Pt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Vt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Qc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Jc(e),r=n.iconName,a=n.prefix,i=n.rest,o=Zc(e),s=_r("parseNodeAttributes",{},e),l=t.styleParser?Gc(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var eu=we.styles;function $o(e){var t=T.autoReplaceSvg==="nest"?si(e,{styleParser:!1}):si(e);return~t.extra.classes.indexOf(_o)?ze("generateLayersText",e,t):ze("generateSvgReplacementMutation",e,t)}function li(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Be)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(Ja,"-").concat(m))},a=function(m){return n.remove("".concat(Ja,"-").concat(m))},i=T.autoFetchSvg?Object.keys(ea):Object.keys(eu);i.includes("fa")||i.push("fa");var o=[".".concat(_o,":not([").concat(ft,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ft,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Pt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=sa.begin("onTree"),u=s.reduce(function(d,m){try{var v=$o(m);v&&d.push(v)}catch(A){xo||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(v){Do(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function tu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$o(e).then(function(n){n&&Do([n],t)})}function nu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:kr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:kr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var ru=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Te:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,v=m===void 0?null:m,A=n.titleId,R=A===void 0?null:A,j=n.classes,I=j===void 0?[]:j,y=n.attributes,S=y===void 0?{}:y,N=n.styles,D=N===void 0?{}:N;if(!!t){var Y=t.prefix,Q=t.iconName,fe=t.icon;return zn(O({type:"icon"},t),function(){return ct("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(v?S["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(R||Vt()):(S["aria-hidden"]="true",S.focusable="false")),oa({icons:{main:Ar(fe),mask:l?Ar(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:Q,transform:O(O({},Te),a),symbol:o,title:v,maskId:d,titleId:R,extra:{attributes:S,styles:D,classes:I}})})}},au={mixout:function(){return{icon:nu(ru)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=li,n.nodeCallback=tu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return li(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(A,R){Promise.all([Or(a,s),d.iconName?Or(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var I=Gr(j,2),y=I[0],S=I[1];A([n,oa({icons:{main:y,mask:S},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ln(s);l.length>0&&(a.style=l);var u;return na(o)&&(u=ze("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},iu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return zn({type:"layer"},function(){ct("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.familyPrefix,"-layers")].concat(Rn(i)).join(" ")},children:o}]})}}}},ou={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return zn({type:"counter",content:n},function(){return ct("beforeDOMElementCreation",{content:n,params:r}),zc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(T.familyPrefix,"-layers-counter")].concat(Rn(s))}})})}}}},su={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Te:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,A=v===void 0?{}:v;return zn({type:"text",content:n},function(){return ct("beforeDOMElementCreation",{content:n,params:r}),ni({content:n,transform:O(O({},Te),i),title:s,extra:{attributes:m,styles:A,classes:["".concat(T.familyPrefix,"-layers-text")].concat(Rn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(vo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ni({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},lu=new RegExp('"',"ug"),fi=[1105920,1112319];function fu(e){var t=e.replace(lu,""),n=_c(t,0),r=n>=fi[0]&&n<=fi[1],a=t.length===2?t[0]===t[1]:!1;return{value:xr(a?t[0]:t),isSecondary:r||a}}function ci(e,t){var n="".concat(Gf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Pt(e.children),o=i.filter(function(Q){return Q.getAttribute(yr)===t})[0],s=Ge.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(tc),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?xn[l[2].toLowerCase()]:nc[u],A=fu(m),R=A.value,j=A.isSecondary,I=l[0].startsWith("FontAwesome"),y=aa(v,R),S=y;if(I){var N=Pc(R);N.iconName&&N.prefix&&(y=N.iconName,v=N.prefix)}if(y&&!j&&(!o||o.getAttribute(Zr)!==v||o.getAttribute(Qr)!==S)){e.setAttribute(n,S),o&&e.removeChild(o);var D=Qc(),Y=D.extra;Y.attributes[yr]=t,Or(y,v).then(function(Q){var fe=oa(O(O({},D),{},{icons:{main:Q,mask:ia()},prefix:v,iconName:S,extra:Y,watchable:!0})),Ae=X.createElement("svg");t==="::before"?e.insertBefore(Ae,e.firstChild):e.appendChild(Ae),Ae.outerHTML=fe.map(function(re){return Gt(re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function cu(e){return Promise.all([ci(e,"::before"),ci(e,"::after")])}function uu(e){return e.parentNode!==document.head&&!~Zf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(yr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ui(e){if(!!Be)return new Promise(function(t,n){var r=Pt(e.querySelectorAll("*")).filter(uu).map(cu),a=sa.begin("searchPseudoElements");zo(),Promise.all(r).then(function(){a(),Er(),t()}).catch(function(){a(),Er(),n()})})}var du={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ui,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;T.searchPseudoElements&&ui(a)}}},di=!1,mu={mixout:function(){return{dom:{unwatch:function(){zo(),di=!0}}}},hooks:function(){return{bootstrap:function(){oi(_r("mutationObserverCallbacks",{}))},noAuto:function(){Vc()},watch:function(n){var r=n.observeMutationsRoot;di?Er():oi(_r("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},mi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},hu={mixout:function(){return{parse:{transform:function(n){return mi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=mi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},A.outer),children:[{tag:"g",attributes:O({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),A.path)}]}]}}}},tr={x:0,y:0,width:"100%",height:"100%"};function hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function pu(e){return e.tag==="g"?e.children:[e]}var gu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Dn(a.split(" ").map(function(o){return o.trim()})):ia();return i.prefix||(i.prefix=Je()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,v=o.icon,A=hc({transform:l,containerWidth:m,iconWidth:u}),R={tag:"rect",attributes:O(O({},tr),{},{fill:"white"})},j=d.children?{children:d.children.map(hi)}:{},I={tag:"g",attributes:O({},A.inner),children:[hi(O({tag:d.tag,attributes:O(O({},d.attributes),A.path)},j))]},y={tag:"g",attributes:O({},A.outer),children:[I]},S="mask-".concat(s||Vt()),N="clip-".concat(s||Vt()),D={tag:"mask",attributes:O(O({},tr),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,y]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:pu(v)},D]};return r.push(Y,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(S,")")},tr)}),{children:r,attributes:a}}}},vu={provides:function(t){var n=!1;Ge.matchMedia&&(n=Ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},bu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},yu=[vc,au,iu,ou,su,du,mu,hu,gu,vu,bu];Nc(yu,{mixoutsTo:he});he.noAuto;var Bo=he.config,xu=he.library;he.dom;var kn=he.parse;he.findIconDefinition;he.toHtml;var wu=he.icon;he.layer;var _u=he.text;he.counter;function pi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pi(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function An(e){return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},An(e)}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ku(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Au(e,t){if(e==null)return{};var n=ku(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Cr(e){return Ou(e)||Su(e)||Eu(e)||Cu()}function Ou(e){if(Array.isArray(e))return Pr(e)}function Su(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Eu(e,t){if(!!e){if(typeof e=="string")return Pr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pr(e,t)}}function Pr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Cu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Uo={exports:{}};(function(e){(function(t){var n=function(y,S,N){if(!u(S)||m(S)||v(S)||A(S)||l(S))return S;var D,Y=0,Q=0;if(d(S))for(D=[],Q=S.length;Y<Q;Y++)D.push(n(y,S[Y],N));else{D={};for(var fe in S)Object.prototype.hasOwnProperty.call(S,fe)&&(D[y(fe,N)]=n(y,S[fe],N))}return D},r=function(y,S){S=S||{};var N=S.separator||"_",D=S.split||/(?=[A-Z])/;return y.split(D).join(N)},a=function(y){return R(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(S,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var S=a(y);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(y,S){return r(y,S).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},A=function(y){return s.call(y)=="[object Boolean]"},R=function(y){return y=y-0,y===y},j=function(y,S){var N=S&&"process"in S?S.process:S;return typeof N!="function"?y:function(D,Y){return N(D,y,Y)}},I={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,S){return n(j(a,S),y)},decamelizeKeys:function(y,S){return n(j(o,S),y,S)},pascalizeKeys:function(y,S){return n(j(i,S),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=I:t.humps=I})(Pu)})(Uo);var Tu=Uo.exports,Iu=["class","style"];function Nu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Tu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Mu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function fa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return fa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=Mu(d);break;case"style":l.style=Nu(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Au(n,Iu);return co(e.tag,ye(ye(ye({},t),{},{class:a.class,style:ye(ye({},a.style),o)},a.attrs),s),r)}var Ho=!1;try{Ho=!0}catch{}function Fu(){if(!Ho&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ht(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?oe({},e,t):{}}function Ru(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},oe(t,"fa-".concat(e.size),e.size!==null),oe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),oe(t,"fa-pull-".concat(e.pull),e.pull!==null),oe(t,"fa-swap-opacity",e.swapOpacity),oe(t,"fa-bounce",e.bounce),oe(t,"fa-shake",e.shake),oe(t,"fa-beat",e.beat),oe(t,"fa-fade",e.fade),oe(t,"fa-beat-fade",e.beatFade),oe(t,"fa-flash",e.flash),oe(t,"fa-spin-pulse",e.spinPulse),oe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function gi(e){if(e&&An(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(kn.icon)return kn.icon(e);if(e===null)return null;if(An(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Lu=Wr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ge(function(){return gi(t.icon)}),i=ge(function(){return Ht("classes",Ru(t))}),o=ge(function(){return Ht("transform",typeof t.transform=="string"?kn.transform(t.transform):t.transform)}),s=ge(function(){return Ht("mask",gi(t.mask))}),l=ge(function(){return wu(a.value,ye(ye(ye(ye({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});sn(l,function(d){if(!d)return Fu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=ge(function(){return l.value?fa(l.value.abstract[0],{},r):null});return function(){return u.value}}});Wr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Bo.familyPrefix,i=ge(function(){return["".concat(a,"-layers")].concat(Cr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return co("div",{class:i.value},r.default?r.default():[])}}});Wr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Bo.familyPrefix,i=ge(function(){return Ht("classes",[].concat(Cr(t.counter?["".concat(a,"-layers-counter")]:[]),Cr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ge(function(){return Ht("transform",typeof t.transform=="string"?kn.transform(t.transform):t.transform)}),s=ge(function(){var u=_u(t.value.toString(),ye(ye({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ge(function(){return fa(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var ju={prefix:"fas",iconName:"rotate",icon:[512,512,[128260,"sync-alt"],"f2f1","M449.9 39.96l-48.5 48.53C362.5 53.19 311.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.97 5.5 34.86-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c37.96 0 73 14.18 100.2 37.8L311.1 178C295.1 194.8 306.8 223.4 330.4 224h146.9C487.7 223.7 496 215.3 496 204.9V59.04C496 34.99 466.9 22.95 449.9 39.96zM441.8 289.6c-16.94-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-37.96 0-73-14.18-100.2-37.8L200 334C216.9 317.2 205.2 288.6 181.6 288H34.66C24.32 288.3 16 296.7 16 307.1v145.9c0 24.04 29.07 36.08 46.07 19.07l48.5-48.53C149.5 458.8 200.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"]};xu.add(ju);vf(zf).component("font-awesome-icon",Lu).mount("#app");
