const qo=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};qo();function Tr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Xo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vo=Tr(Xo);function yi(e){return!!e||e===""}function at(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=J(r)?Zo(r):at(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(J(e))return e;if(G(e))return e}}const Go=/;(?![^(]*\))/g,Jo=/:(.+)/;function Zo(e){const t={};return e.split(Go).forEach(n=>{if(n){const r=n.split(Jo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Yt(e){let t="";if(J(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Yt(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Wn=e=>J(e)?e:e==null?"":F(e)||G(e)&&(e.toString===ki||!L(e.toString))?JSON.stringify(e,wi,2):String(e),wi=(e,t)=>t&&t.__v_isRef?wi(e,t.value):xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:xi(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!F(t)&&!Ai(t)?String(t):t,W={},wt=[],ke=()=>{},Qo=()=>!1,es=/^on[^a-z]/,On=e=>es.test(e),Nr=e=>e.startsWith("onUpdate:"),re=Object.assign,Mr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ts=Object.prototype.hasOwnProperty,z=(e,t)=>ts.call(e,t),F=Array.isArray,xt=e=>Cn(e)==="[object Map]",xi=e=>Cn(e)==="[object Set]",L=e=>typeof e=="function",J=e=>typeof e=="string",Fr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",_i=e=>G(e)&&L(e.then)&&L(e.catch),ki=Object.prototype.toString,Cn=e=>ki.call(e),ns=e=>Cn(e).slice(8,-1),Ai=e=>Cn(e)==="[object Object]",Rr=e=>J(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,on=Tr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},rs=/-(\w)/g,Ne=Sn(e=>e.replace(rs,(t,n)=>n?n.toUpperCase():"")),as=/\B([A-Z])/g,Ct=Sn(e=>e.replace(as,"-$1").toLowerCase()),En=Sn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Kn=Sn(e=>e?`on${En(e)}`:""),mn=(e,t)=>!Object.is(e,t),qn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},hn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},is=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ba;const os=()=>ba||(ba=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ee;class ss{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ee&&(this.parent=Ee,this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ee;try{return Ee=this,t()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ls(e,t=Ee){t&&t.active&&t.effects.push(e)}const Lr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Oi=e=>(e.w&Ge)>0,Ci=e=>(e.n&Ge)>0,fs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ge},cs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Oi(a)&&!Ci(a)?a.delete(e):t[n++]=a,a.w&=~Ge,a.n&=~Ge}t.length=n}},rr=new WeakMap;let Rt=0,Ge=1;const ar=30;let ye;const ot=Symbol(""),ir=Symbol("");class jr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ls(this,r)}run(){if(!this.active)return this.fn();let t=ye,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ye,ye=this,Xe=!0,Ge=1<<++Rt,Rt<=ar?fs(this):ya(this),this.fn()}finally{Rt<=ar&&cs(this),Ge=1<<--Rt,ye=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ye===this?this.deferStop=!0:this.active&&(ya(this),this.onStop&&this.onStop(),this.active=!1)}}function ya(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const Si=[];function St(){Si.push(Xe),Xe=!1}function Et(){const e=Si.pop();Xe=e===void 0?!0:e}function me(e,t,n){if(Xe&&ye){let r=rr.get(e);r||rr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Lr()),Ei(a)}}function Ei(e,t){let n=!1;Rt<=ar?Ci(e)||(e.n|=Ge,n=!Oi(e)):n=!e.has(ye),n&&(e.add(ye),ye.deps.push(e))}function je(e,t,n,r,a,i){const o=rr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?Rr(n)&&s.push(o.get("length")):(s.push(o.get(ot)),xt(e)&&s.push(o.get(ir)));break;case"delete":F(e)||(s.push(o.get(ot)),xt(e)&&s.push(o.get(ir)));break;case"set":xt(e)&&s.push(o.get(ot));break}if(s.length===1)s[0]&&or(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);or(Lr(l))}}function or(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&wa(r);for(const r of n)r.computed||wa(r)}function wa(e,t){(e!==ye||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const us=Tr("__proto__,__v_isRef,__isVue"),Pi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Fr)),ds=Dr(),ms=Dr(!1,!0),hs=Dr(!0),xa=ps();function ps(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){St();const r=B(this)[t].apply(this,n);return Et(),r}}),e}function Dr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ts:Fi:t?Mi:Ni).get(r))return r;const o=F(r);if(!e&&o&&z(xa,a))return Reflect.get(xa,a,i);const s=Reflect.get(r,a,i);return(Fr(a)?Pi.has(a):us(a))||(e||me(r,"get",a),t)?s:ne(s)?o&&Rr(a)?s:s.value:G(s)?e?Ri(s):Br(s):s}}const gs=Ii(),vs=Ii(!0);function Ii(e=!1){return function(n,r,a,i){let o=n[r];if(Wt(o)&&ne(o)&&!ne(a))return!1;if(!e&&!Wt(a)&&(sr(a)||(a=B(a),o=B(o)),!F(n)&&ne(o)&&!ne(a)))return o.value=a,!0;const s=F(n)&&Rr(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?mn(a,o)&&je(n,"set",r,a):je(n,"add",r,a)),l}}function bs(e,t){const n=z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&je(e,"delete",t,void 0),r}function ys(e,t){const n=Reflect.has(e,t);return(!Fr(t)||!Pi.has(t))&&me(e,"has",t),n}function ws(e){return me(e,"iterate",F(e)?"length":ot),Reflect.ownKeys(e)}const Ti={get:ds,set:gs,deleteProperty:bs,has:ys,ownKeys:ws},xs={get:hs,set(e,t){return!0},deleteProperty(e,t){return!0}},_s=re({},Ti,{get:ms,set:vs}),zr=e=>e,Pn=e=>Reflect.getPrototypeOf(e);function Qt(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:o}=Pn(a),s=r?zr:n?Yr:Hr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function en(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function tn(e,t=!1){return e=e.__v_raw,!t&&me(B(e),"iterate",ot),Reflect.get(e,"size",e)}function _a(e){e=B(e);const t=B(this);return Pn(t).has.call(t,e)||(t.add(e),je(t,"add",e,e)),this}function ka(e,t){t=B(t);const n=B(this),{has:r,get:a}=Pn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?mn(t,o)&&je(n,"set",e,t):je(n,"add",e,t),this}function Aa(e){const t=B(this),{has:n,get:r}=Pn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&je(t,"delete",e,void 0),i}function Oa(){const e=B(this),t=e.size!==0,n=e.clear();return t&&je(e,"clear",void 0,void 0),n}function nn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?zr:e?Yr:Hr;return!e&&me(s,"iterate",ot),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function rn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=xt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?zr:t?Yr:Hr;return!t&&me(i,"iterate",l?ir:ot),{next(){const{value:m,done:v}=u.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function ks(){const e={get(i){return Qt(this,i)},get size(){return tn(this)},has:en,add:_a,set:ka,delete:Aa,clear:Oa,forEach:nn(!1,!1)},t={get(i){return Qt(this,i,!1,!0)},get size(){return tn(this)},has:en,add:_a,set:ka,delete:Aa,clear:Oa,forEach:nn(!1,!0)},n={get(i){return Qt(this,i,!0)},get size(){return tn(this,!0)},has(i){return en.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:nn(!0,!1)},r={get(i){return Qt(this,i,!0,!0)},get size(){return tn(this,!0)},has(i){return en.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:nn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=rn(i,!1,!1),n[i]=rn(i,!0,!1),t[i]=rn(i,!1,!0),r[i]=rn(i,!0,!0)}),[e,n,t,r]}const[As,Os,Cs,Ss]=ks();function $r(e,t){const n=t?e?Ss:Cs:e?Os:As;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const Es={get:$r(!1,!1)},Ps={get:$r(!1,!0)},Is={get:$r(!0,!1)},Ni=new WeakMap,Mi=new WeakMap,Fi=new WeakMap,Ts=new WeakMap;function Ns(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ms(e){return e.__v_skip||!Object.isExtensible(e)?0:Ns(ns(e))}function Br(e){return Wt(e)?e:Ur(e,!1,Ti,Es,Ni)}function Fs(e){return Ur(e,!1,_s,Ps,Mi)}function Ri(e){return Ur(e,!0,xs,Is,Fi)}function Ur(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ms(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function _t(e){return Wt(e)?_t(e.__v_raw):!!(e&&e.__v_isReactive)}function Wt(e){return!!(e&&e.__v_isReadonly)}function sr(e){return!!(e&&e.__v_isShallow)}function Li(e){return _t(e)||Wt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function ji(e){return hn(e,"__v_skip",!0),e}const Hr=e=>G(e)?Br(e):e,Yr=e=>G(e)?Ri(e):e;function Rs(e){Xe&&ye&&(e=B(e),Ei(e.dep||(e.dep=Lr())))}function Ls(e,t){e=B(e),e.dep&&or(e.dep)}function ne(e){return!!(e&&e.__v_isRef===!0)}function js(e){return ne(e)?e.value:e}const Ds={get:(e,t,n)=>js(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ne(a)&&!ne(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Di(e){return _t(e)?e:new Proxy(e,Ds)}class zs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new jr(t,()=>{this._dirty||(this._dirty=!0,Ls(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Rs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function $s(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=ke):(r=e.get,a=e.set),new zs(r,a,i||!a,n)}function Ve(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){In(i,t,n)}return a}function Ae(e,t,n,r){if(L(e)){const i=Ve(e,t,n,r);return i&&_i(i)&&i.catch(o=>{In(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ae(e[i],t,n,r));return a}function In(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ve(l,null,10,[e,o,s]);return}}Bs(e,n,a,r)}function Bs(e,t,n,r=!0){console.error(e)}let pn=!1,lr=!1;const de=[];let Le=0;const Dt=[];let Lt=null,pt=0;const zt=[];let Ke=null,gt=0;const zi=Promise.resolve();let Wr=null,fr=null;function Us(e){const t=Wr||zi;return e?t.then(this?e.bind(this):e):t}function Hs(e){let t=Le+1,n=de.length;for(;t<n;){const r=t+n>>>1;Kt(de[r])<e?t=r+1:n=r}return t}function $i(e){(!de.length||!de.includes(e,pn&&e.allowRecurse?Le+1:Le))&&e!==fr&&(e.id==null?de.push(e):de.splice(Hs(e.id),0,e),Bi())}function Bi(){!pn&&!lr&&(lr=!0,Wr=zi.then(Yi))}function Ys(e){const t=de.indexOf(e);t>Le&&de.splice(t,1)}function Ui(e,t,n,r){F(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Bi()}function Ws(e){Ui(e,Lt,Dt,pt)}function Ks(e){Ui(e,Ke,zt,gt)}function Tn(e,t=null){if(Dt.length){for(fr=t,Lt=[...new Set(Dt)],Dt.length=0,pt=0;pt<Lt.length;pt++)Lt[pt]();Lt=null,pt=0,fr=null,Tn(e,t)}}function Hi(e){if(Tn(),zt.length){const t=[...new Set(zt)];if(zt.length=0,Ke){Ke.push(...t);return}for(Ke=t,Ke.sort((n,r)=>Kt(n)-Kt(r)),gt=0;gt<Ke.length;gt++)Ke[gt]();Ke=null,gt=0}}const Kt=e=>e.id==null?1/0:e.id;function Yi(e){lr=!1,pn=!0,Tn(e),de.sort((n,r)=>Kt(n)-Kt(r));const t=ke;try{for(Le=0;Le<de.length;Le++){const n=de[Le];n&&n.active!==!1&&Ve(n,null,14)}}finally{Le=0,de.length=0,Hi(),pn=!1,Wr=null,(de.length||Dt.length||zt.length)&&Yi(e)}}function qs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||W;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||W;v&&(a=n.map(A=>A.trim())),m&&(a=n.map(is))}let s,l=r[s=Kn(t)]||r[s=Kn(Ne(t))];!l&&i&&(l=r[s=Kn(Ct(t))]),l&&Ae(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ae(u,e,6,a)}}function Wi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=u=>{const d=Wi(u,t,!0);d&&(s=!0,re(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):re(o,i),r.set(e,o),o)}function Nn(e,t){return!e||!On(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,Ct(t))||z(e,t))}let Ie=null,Mn=null;function gn(e){const t=Ie;return Ie=e,Mn=e&&e.type.__scopeId||null,t}function Xs(e){Mn=e}function Vs(){Mn=null}function Gs(e,t=Ie,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ra(-1);const i=gn(t),o=e(...a);return gn(i),r._d&&Ra(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Xn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:v,setupState:A,ctx:R,inheritAttrs:j}=e;let T,y;const C=gn(e);try{if(n.shapeFlag&4){const D=a||r;T=Pe(d.call(D,D,m,i,A,v,R)),y=l}else{const D=t;T=Pe(D.length>1?D(i,{attrs:l,slots:s,emit:u}):D(i,null)),y=t.props?l:Js(l)}}catch(D){$t.length=0,In(D,e,1),T=Q(lt)}let N=T;if(y&&j!==!1){const D=Object.keys(y),{shapeFlag:Y}=N;D.length&&Y&7&&(o&&D.some(Nr)&&(y=Zs(y,o)),N=At(N,y))}return n.dirs&&(N=At(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),T=N,gn(C),T}const Js=e=>{let t;for(const n in e)(n==="class"||n==="style"||On(n))&&((t||(t={}))[n]=e[n]);return t},Zs=(e,t)=>{const n={};for(const r in e)(!Nr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Qs(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ca(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Nn(u,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ca(r,o,u):!0:!!o;return!1}function Ca(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Nn(n,i))return!0}return!1}function el({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const tl=e=>e.__isSuspense;function nl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Ks(e)}function rl(e,t){if(Z){let n=Z.provides;const r=Z.parent&&Z.parent.provides;r===n&&(n=Z.provides=Object.create(r)),n[e]=t}}function Vn(e,t,n=!1){const r=Z||Ie;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const Sa={};function sn(e,t,n){return Ki(e,t,n)}function Ki(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=W){const s=Z;let l,u=!1,d=!1;if(ne(e)?(l=()=>e.value,u=sr(e)):_t(e)?(l=()=>e,r=!0):F(e)?(d=!0,u=e.some(y=>_t(y)||sr(y)),l=()=>e.map(y=>{if(ne(y))return y.value;if(_t(y))return vt(y);if(L(y))return Ve(y,s,2)})):L(e)?t?l=()=>Ve(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ae(e,s,3,[v])}:l=ke,t&&r){const y=l;l=()=>vt(y())}let m,v=y=>{m=T.onStop=()=>{Ve(y,s,4)}};if(Xt)return v=ke,t?n&&Ae(t,s,3,[l(),d?[]:void 0,v]):l(),ke;let A=d?[]:Sa;const R=()=>{if(!!T.active)if(t){const y=T.run();(r||u||(d?y.some((C,N)=>mn(C,A[N])):mn(y,A)))&&(m&&m(),Ae(t,s,3,[y,A===Sa?void 0:A,v]),A=y)}else T.run()};R.allowRecurse=!!t;let j;a==="sync"?j=R:a==="post"?j=()=>le(R,s&&s.suspense):j=()=>Ws(R);const T=new jr(l,j);return t?n?R():A=T.run():a==="post"?le(T.run.bind(T),s&&s.suspense):T.run(),()=>{T.stop(),s&&s.scope&&Mr(s.scope.effects,T)}}function al(e,t,n){const r=this.proxy,a=J(e)?e.includes(".")?qi(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=Z;Ot(this);const s=Ki(a,i.bind(r),n);return o?Ot(o):st(),s}function qi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function vt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ne(e))vt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)vt(e[n],t);else if(xi(e)||xt(e))e.forEach(n=>{vt(n,t)});else if(Ai(e))for(const n in e)vt(e[n],t);return e}function Kr(e){return L(e)?{setup:e,name:e.name}:e}const ln=e=>!!e.type.__asyncLoader,Xi=e=>e.type.__isKeepAlive;function il(e,t){Vi(e,"a",t)}function ol(e,t){Vi(e,"da",t)}function Vi(e,t,n=Z){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Fn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Xi(a.parent.vnode)&&sl(r,t,n,a),a=a.parent}}function sl(e,t,n,r){const a=Fn(t,e,r,!0);Gi(()=>{Mr(r[t],a)},n)}function Fn(e,t,n=Z,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;St(),Ot(n);const s=Ae(t,n,e,o);return st(),Et(),s});return r?a.unshift(i):a.push(i),i}}const Be=e=>(t,n=Z)=>(!Xt||e==="sp")&&Fn(e,t,n),ll=Be("bm"),fl=Be("m"),cl=Be("bu"),ul=Be("u"),dl=Be("bum"),Gi=Be("um"),ml=Be("sp"),hl=Be("rtg"),pl=Be("rtc");function gl(e,t=Z){Fn("ec",e,t)}function Qe(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(St(),Ae(l,n,8,[e.el,s,e,t]),Et())}}const Ji="components";function vl(e,t){return yl(Ji,e,!0,t)||e}const bl=Symbol();function yl(e,t,n=!0,r=!1){const a=Ie||Z;if(a){const i=a.type;if(e===Ji){const s=Vl(i,!1);if(s&&(s===t||s===Ne(t)||s===En(Ne(t))))return i}const o=Ea(a[e]||i[e],t)||Ea(a.appContext[e],t);return!o&&r?i:o}}function Ea(e,t){return e&&(e[t]||e[Ne(t)]||e[En(Ne(t))])}function Gn(e,t,n,r){let a;const i=n&&n[r];if(F(e)||J(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const cr=e=>e?fo(e)?Gr(e)||e.proxy:cr(e.parent):null,vn=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>cr(e.parent),$root:e=>cr(e.root),$emit:e=>e.emit,$options:e=>Qi(e),$forceUpdate:e=>e.f||(e.f=()=>$i(e.update)),$nextTick:e=>e.n||(e.n=Us.bind(e.proxy)),$watch:e=>al.bind(e)}),wl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==W&&z(r,t))return o[t]=1,r[t];if(a!==W&&z(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&z(u,t))return o[t]=3,i[t];if(n!==W&&z(n,t))return o[t]=4,n[t];ur&&(o[t]=0)}}const d=vn[t];let m,v;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==W&&z(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,z(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==W&&z(a,t)?(a[t]=n,!0):r!==W&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==W&&z(e,o)||t!==W&&z(t,o)||(s=i[0])&&z(s,o)||z(r,o)||z(vn,o)||z(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ur=!0;function xl(e){const t=Qi(e),n=e.proxy,r=e.ctx;ur=!1,t.beforeCreate&&Pa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:v,beforeUpdate:A,updated:R,activated:j,deactivated:T,beforeDestroy:y,beforeUnmount:C,destroyed:N,unmounted:D,render:Y,renderTracked:ee,renderTriggered:fe,errorCaptured:Oe,serverPrefetch:ae,expose:It,inheritAttrs:ut,components:Tt,directives:Jt,filters:da}=t;if(u&&_l(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const V in o){const K=o[V];L(K)&&(r[V]=K.bind(n))}if(a){const V=a.call(n,n);G(V)&&(e.data=Br(V))}if(ur=!0,i)for(const V in i){const K=i[V],Fe=L(K)?K.bind(n,n):L(K.get)?K.get.bind(n,n):ke,Un=!L(K)&&L(K.set)?K.set.bind(n):ke,Nt=ge({get:Fe,set:Un});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:dt=>Nt.value=dt})}if(s)for(const V in s)Zi(s[V],r,n,V);if(l){const V=L(l)?l.call(n):l;Reflect.ownKeys(V).forEach(K=>{rl(K,V[K])})}d&&Pa(d,e,"c");function ie(V,K){F(K)?K.forEach(Fe=>V(Fe.bind(n))):K&&V(K.bind(n))}if(ie(ll,m),ie(fl,v),ie(cl,A),ie(ul,R),ie(il,j),ie(ol,T),ie(gl,Oe),ie(pl,ee),ie(hl,fe),ie(dl,C),ie(Gi,D),ie(ml,ae),F(It))if(It.length){const V=e.exposed||(e.exposed={});It.forEach(K=>{Object.defineProperty(V,K,{get:()=>n[K],set:Fe=>n[K]=Fe})})}else e.exposed||(e.exposed={});Y&&e.render===ke&&(e.render=Y),ut!=null&&(e.inheritAttrs=ut),Tt&&(e.components=Tt),Jt&&(e.directives=Jt)}function _l(e,t,n=ke,r=!1){F(e)&&(e=dr(e));for(const a in e){const i=e[a];let o;G(i)?"default"in i?o=Vn(i.from||a,i.default,!0):o=Vn(i.from||a):o=Vn(i),ne(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Pa(e,t,n){Ae(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Zi(e,t,n,r){const a=r.includes(".")?qi(n,r):()=>n[r];if(J(e)){const i=t[e];L(i)&&sn(a,i)}else if(L(e))sn(a,e.bind(n));else if(G(e))if(F(e))e.forEach(i=>Zi(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&sn(a,i,e)}}function Qi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>bn(l,u,o,!0)),bn(l,t,o)),i.set(t,l),l}function bn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&bn(e,i,n,!0),a&&a.forEach(o=>bn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=kl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const kl={data:Ia,props:nt,emits:nt,methods:nt,computed:nt,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:nt,directives:nt,watch:Ol,provide:Ia,inject:Al};function Ia(e,t){return t?e?function(){return re(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Al(e,t){return nt(dr(e),dr(t))}function dr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function te(e,t){return e?[...new Set([].concat(e,t))]:t}function nt(e,t){return e?re(re(Object.create(null),e),t):t}function Ol(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const r in t)n[r]=te(e[r],t[r]);return n}function Cl(e,t,n,r=!1){const a={},i={};hn(i,Rn,1),e.propsDefaults=Object.create(null),eo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Fs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Sl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Nn(e.emitsOptions,v))continue;const A=t[v];if(l)if(z(i,v))A!==i[v]&&(i[v]=A,u=!0);else{const R=Ne(v);a[R]=mr(l,s,R,A,e,!1)}else A!==i[v]&&(i[v]=A,u=!0)}}}else{eo(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!z(t,m)&&((d=Ct(m))===m||!z(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=mr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!z(t,m)&&!0)&&(delete i[m],u=!0)}u&&je(e,"set","$attrs")}function eo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(on(l))continue;const u=t[l];let d;a&&z(a,d=Ne(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Nn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=B(n),u=s||W;for(let d=0;d<i.length;d++){const m=i[d];n[m]=mr(a,l,m,u[m],e,!z(u,m))}}return o}function mr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=z(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(Ot(a),r=u[n]=l.call(null,t),st())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ct(n))&&(r=!0))}return r}function to(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,A]=to(m,t,!0);re(o,v),A&&s.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,wt),wt;if(F(i))for(let d=0;d<i.length;d++){const m=Ne(i[d]);Ta(m)&&(o[m]=W)}else if(i)for(const d in i){const m=Ne(d);if(Ta(m)){const v=i[d],A=o[m]=F(v)||L(v)?{type:v}:v;if(A){const R=Fa(Boolean,A.type),j=Fa(String,A.type);A[0]=R>-1,A[1]=j<0||R<j,(R>-1||z(A,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Ta(e){return e[0]!=="$"}function Na(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ma(e,t){return Na(e)===Na(t)}function Fa(e,t){return F(t)?t.findIndex(n=>Ma(n,e)):L(t)&&Ma(t,e)?0:-1}const no=e=>e[0]==="_"||e==="$stable",qr=e=>F(e)?e.map(Pe):[Pe(e)],El=(e,t,n)=>{if(t._n)return t;const r=Gs((...a)=>qr(t(...a)),n);return r._c=!1,r},ro=(e,t,n)=>{const r=e._ctx;for(const a in e){if(no(a))continue;const i=e[a];if(L(i))t[a]=El(a,i,r);else if(i!=null){const o=qr(i);t[a]=()=>o}}},ao=(e,t)=>{const n=qr(t);e.slots.default=()=>n},Pl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),hn(t,"_",n)):ro(t,e.slots={})}else e.slots={},t&&ao(e,t);hn(e.slots,Rn,1)},Il=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=W;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(re(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ro(t,a)),o=t}else t&&(ao(e,t),o={default:1});if(i)for(const s in a)!no(s)&&!(s in o)&&delete a[s]};function io(){return{app:null,config:{isNativeTag:Qo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tl=0;function Nl(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!G(a)&&(a=null);const i=io(),o=new Set;let s=!1;const l=i.app={_uid:Tl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Jl,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(l,...d)):L(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const v=Q(r,a);return v.appContext=i,d&&t?t(v,u):e(v,u,m),s=!0,l._container=u,u.__vue_app__=l,Gr(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function hr(e,t,n,r,a=!1){if(F(e)){e.forEach((v,A)=>hr(v,t&&(F(t)?t[A]:t),n,r,a));return}if(ln(r)&&!a)return;const i=r.shapeFlag&4?Gr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===W?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(J(u)?(d[u]=null,z(m,u)&&(m[u]=null)):ne(u)&&(u.value=null)),L(l))Ve(l,s,12,[o,d]);else{const v=J(l),A=ne(l);if(v||A){const R=()=>{if(e.f){const j=v?d[l]:l.value;a?F(j)&&Mr(j,i):F(j)?j.includes(i)||j.push(i):v?(d[l]=[i],z(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,z(m,l)&&(m[l]=o)):A&&(l.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,le(R,n)):R()}}}const le=nl;function Ml(e){return Fl(e)}function Fl(e,t){const n=os();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:v,setScopeId:A=ke,cloneNode:R,insertStaticContent:j}=e,T=(f,c,h,g=null,p=null,x=null,k=!1,w=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Ft(f,c)&&(g=Zt(f),He(f,p,x,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:b,ref:E,shapeFlag:S}=c;switch(b){case Xr:y(f,c,h,g);break;case lt:C(f,c,h,g);break;case Jn:f==null&&N(c,h,g,k);break;case pe:Jt(f,c,h,g,p,x,k,w,_);break;default:S&1?ee(f,c,h,g,p,x,k,w,_):S&6?da(f,c,h,g,p,x,k,w,_):(S&64||S&128)&&b.process(f,c,h,g,p,x,k,w,_,mt)}E!=null&&p&&hr(E,f&&f.ref,x,c||f,!c)},y=(f,c,h,g)=>{if(f==null)r(c.el=s(c.children),h,g);else{const p=c.el=f.el;c.children!==f.children&&u(p,c.children)}},C=(f,c,h,g)=>{f==null?r(c.el=l(c.children||""),h,g):c.el=f.el},N=(f,c,h,g)=>{[f.el,f.anchor]=j(f.children,c,h,g,f.el,f.anchor)},D=({el:f,anchor:c},h,g)=>{let p;for(;f&&f!==c;)p=v(f),r(f,h,g),f=p;r(c,h,g)},Y=({el:f,anchor:c})=>{let h;for(;f&&f!==c;)h=v(f),a(f),f=h;a(c)},ee=(f,c,h,g,p,x,k,w,_)=>{k=k||c.type==="svg",f==null?fe(c,h,g,p,x,k,w,_):It(f,c,p,x,k,w,_)},fe=(f,c,h,g,p,x,k,w)=>{let _,b;const{type:E,props:S,shapeFlag:P,transition:M,patchFlag:$,dirs:U}=f;if(f.el&&R!==void 0&&$===-1)_=f.el=R(f.el);else{if(_=f.el=o(f.type,x,S&&S.is,S),P&8?d(_,f.children):P&16&&ae(f.children,_,null,g,p,x&&E!=="foreignObject",k,w),U&&Qe(f,null,g,"created"),S){for(const q in S)q!=="value"&&!on(q)&&i(_,q,null,S[q],x,f.children,g,p,Re);"value"in S&&i(_,"value",null,S.value),(b=S.onVnodeBeforeMount)&&Se(b,g,f)}Oe(_,f,f.scopeId,k,g)}U&&Qe(f,null,g,"beforeMount");const H=(!p||p&&!p.pendingBranch)&&M&&!M.persisted;H&&M.beforeEnter(_),r(_,c,h),((b=S&&S.onVnodeMounted)||H||U)&&le(()=>{b&&Se(b,g,f),H&&M.enter(_),U&&Qe(f,null,g,"mounted")},p)},Oe=(f,c,h,g,p)=>{if(h&&A(f,h),g)for(let x=0;x<g.length;x++)A(f,g[x]);if(p){let x=p.subTree;if(c===x){const k=p.vnode;Oe(f,k,k.scopeId,k.slotScopeIds,p.parent)}}},ae=(f,c,h,g,p,x,k,w,_=0)=>{for(let b=_;b<f.length;b++){const E=f[b]=w?qe(f[b]):Pe(f[b]);T(null,E,c,h,g,p,x,k,w)}},It=(f,c,h,g,p,x,k)=>{const w=c.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:E}=c;_|=f.patchFlag&16;const S=f.props||W,P=c.props||W;let M;h&&et(h,!1),(M=P.onVnodeBeforeUpdate)&&Se(M,h,c,f),E&&Qe(c,f,h,"beforeUpdate"),h&&et(h,!0);const $=p&&c.type!=="foreignObject";if(b?ut(f.dynamicChildren,b,w,h,g,$,x):k||Fe(f,c,w,null,h,g,$,x,!1),_>0){if(_&16)Tt(w,c,S,P,h,g,p);else if(_&2&&S.class!==P.class&&i(w,"class",null,P.class,p),_&4&&i(w,"style",S.style,P.style,p),_&8){const U=c.dynamicProps;for(let H=0;H<U.length;H++){const q=U[H],ve=S[q],ht=P[q];(ht!==ve||q==="value")&&i(w,q,ve,ht,p,f.children,h,g,Re)}}_&1&&f.children!==c.children&&d(w,c.children)}else!k&&b==null&&Tt(w,c,S,P,h,g,p);((M=P.onVnodeUpdated)||E)&&le(()=>{M&&Se(M,h,c,f),E&&Qe(c,f,h,"updated")},g)},ut=(f,c,h,g,p,x,k)=>{for(let w=0;w<c.length;w++){const _=f[w],b=c[w],E=_.el&&(_.type===pe||!Ft(_,b)||_.shapeFlag&70)?m(_.el):h;T(_,b,E,null,g,p,x,k,!0)}},Tt=(f,c,h,g,p,x,k)=>{if(h!==g){for(const w in g){if(on(w))continue;const _=g[w],b=h[w];_!==b&&w!=="value"&&i(f,w,b,_,k,c.children,p,x,Re)}if(h!==W)for(const w in h)!on(w)&&!(w in g)&&i(f,w,h[w],null,k,c.children,p,x,Re);"value"in g&&i(f,"value",h.value,g.value)}},Jt=(f,c,h,g,p,x,k,w,_)=>{const b=c.el=f?f.el:s(""),E=c.anchor=f?f.anchor:s("");let{patchFlag:S,dynamicChildren:P,slotScopeIds:M}=c;M&&(w=w?w.concat(M):M),f==null?(r(b,h,g),r(E,h,g),ae(c.children,h,E,p,x,k,w,_)):S>0&&S&64&&P&&f.dynamicChildren?(ut(f.dynamicChildren,P,h,p,x,k,w),(c.key!=null||p&&c===p.subTree)&&oo(f,c,!0)):Fe(f,c,h,E,p,x,k,w,_)},da=(f,c,h,g,p,x,k,w,_)=>{c.slotScopeIds=w,f==null?c.shapeFlag&512?p.ctx.activate(c,h,g,k,_):Bn(c,h,g,p,x,k,_):ie(f,c,_)},Bn=(f,c,h,g,p,x,k)=>{const w=f.component=Yl(f,g,p);if(Xi(f)&&(w.ctx.renderer=mt),Wl(w),w.asyncDep){if(p&&p.registerDep(w,V),!f.el){const _=w.subTree=Q(lt);C(null,_,c,h)}return}V(w,f,c,h,p,x,k)},ie=(f,c,h)=>{const g=c.component=f.component;if(Qs(f,c,h))if(g.asyncDep&&!g.asyncResolved){K(g,c,h);return}else g.next=c,Ys(g.update),g.update();else c.el=f.el,g.vnode=c},V=(f,c,h,g,p,x,k)=>{const w=()=>{if(f.isMounted){let{next:E,bu:S,u:P,parent:M,vnode:$}=f,U=E,H;et(f,!1),E?(E.el=$.el,K(f,E,k)):E=$,S&&qn(S),(H=E.props&&E.props.onVnodeBeforeUpdate)&&Se(H,M,E,$),et(f,!0);const q=Xn(f),ve=f.subTree;f.subTree=q,T(ve,q,m(ve.el),Zt(ve),f,p,x),E.el=q.el,U===null&&el(f,q.el),P&&le(P,p),(H=E.props&&E.props.onVnodeUpdated)&&le(()=>Se(H,M,E,$),p)}else{let E;const{el:S,props:P}=c,{bm:M,m:$,parent:U}=f,H=ln(c);if(et(f,!1),M&&qn(M),!H&&(E=P&&P.onVnodeBeforeMount)&&Se(E,U,c),et(f,!0),S&&Yn){const q=()=>{f.subTree=Xn(f),Yn(S,f.subTree,f,p,null)};H?c.type.__asyncLoader().then(()=>!f.isUnmounted&&q()):q()}else{const q=f.subTree=Xn(f);T(null,q,h,g,f,p,x),c.el=q.el}if($&&le($,p),!H&&(E=P&&P.onVnodeMounted)){const q=c;le(()=>Se(E,U,q),p)}(c.shapeFlag&256||U&&ln(U.vnode)&&U.vnode.shapeFlag&256)&&f.a&&le(f.a,p),f.isMounted=!0,c=h=g=null}},_=f.effect=new jr(w,()=>$i(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,et(f,!0),b()},K=(f,c,h)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Sl(f,c.props,g,h),Il(f,c.children,h),St(),Tn(void 0,f.update),Et()},Fe=(f,c,h,g,p,x,k,w,_=!1)=>{const b=f&&f.children,E=f?f.shapeFlag:0,S=c.children,{patchFlag:P,shapeFlag:M}=c;if(P>0){if(P&128){Nt(b,S,h,g,p,x,k,w,_);return}else if(P&256){Un(b,S,h,g,p,x,k,w,_);return}}M&8?(E&16&&Re(b,p,x),S!==b&&d(h,S)):E&16?M&16?Nt(b,S,h,g,p,x,k,w,_):Re(b,p,x,!0):(E&8&&d(h,""),M&16&&ae(S,h,g,p,x,k,w,_))},Un=(f,c,h,g,p,x,k,w,_)=>{f=f||wt,c=c||wt;const b=f.length,E=c.length,S=Math.min(b,E);let P;for(P=0;P<S;P++){const M=c[P]=_?qe(c[P]):Pe(c[P]);T(f[P],M,h,null,p,x,k,w,_)}b>E?Re(f,p,x,!0,!1,S):ae(c,h,g,p,x,k,w,_,S)},Nt=(f,c,h,g,p,x,k,w,_)=>{let b=0;const E=c.length;let S=f.length-1,P=E-1;for(;b<=S&&b<=P;){const M=f[b],$=c[b]=_?qe(c[b]):Pe(c[b]);if(Ft(M,$))T(M,$,h,null,p,x,k,w,_);else break;b++}for(;b<=S&&b<=P;){const M=f[S],$=c[P]=_?qe(c[P]):Pe(c[P]);if(Ft(M,$))T(M,$,h,null,p,x,k,w,_);else break;S--,P--}if(b>S){if(b<=P){const M=P+1,$=M<E?c[M].el:g;for(;b<=P;)T(null,c[b]=_?qe(c[b]):Pe(c[b]),h,$,p,x,k,w,_),b++}}else if(b>P)for(;b<=S;)He(f[b],p,x,!0),b++;else{const M=b,$=b,U=new Map;for(b=$;b<=P;b++){const ce=c[b]=_?qe(c[b]):Pe(c[b]);ce.key!=null&&U.set(ce.key,b)}let H,q=0;const ve=P-$+1;let ht=!1,pa=0;const Mt=new Array(ve);for(b=0;b<ve;b++)Mt[b]=0;for(b=M;b<=S;b++){const ce=f[b];if(q>=ve){He(ce,p,x,!0);continue}let Ce;if(ce.key!=null)Ce=U.get(ce.key);else for(H=$;H<=P;H++)if(Mt[H-$]===0&&Ft(ce,c[H])){Ce=H;break}Ce===void 0?He(ce,p,x,!0):(Mt[Ce-$]=b+1,Ce>=pa?pa=Ce:ht=!0,T(ce,c[Ce],h,null,p,x,k,w,_),q++)}const ga=ht?Rl(Mt):wt;for(H=ga.length-1,b=ve-1;b>=0;b--){const ce=$+b,Ce=c[ce],va=ce+1<E?c[ce+1].el:g;Mt[b]===0?T(null,Ce,h,va,p,x,k,w,_):ht&&(H<0||b!==ga[H]?dt(Ce,h,va,2):H--)}}},dt=(f,c,h,g,p=null)=>{const{el:x,type:k,transition:w,children:_,shapeFlag:b}=f;if(b&6){dt(f.component.subTree,c,h,g);return}if(b&128){f.suspense.move(c,h,g);return}if(b&64){k.move(f,c,h,mt);return}if(k===pe){r(x,c,h);for(let S=0;S<_.length;S++)dt(_[S],c,h,g);r(f.anchor,c,h);return}if(k===Jn){D(f,c,h);return}if(g!==2&&b&1&&w)if(g===0)w.beforeEnter(x),r(x,c,h),le(()=>w.enter(x),p);else{const{leave:S,delayLeave:P,afterLeave:M}=w,$=()=>r(x,c,h),U=()=>{S(x,()=>{$(),M&&M()})};P?P(x,$,U):U()}else r(x,c,h)},He=(f,c,h,g=!1,p=!1)=>{const{type:x,props:k,ref:w,children:_,dynamicChildren:b,shapeFlag:E,patchFlag:S,dirs:P}=f;if(w!=null&&hr(w,null,h,f,!0),E&256){c.ctx.deactivate(f);return}const M=E&1&&P,$=!ln(f);let U;if($&&(U=k&&k.onVnodeBeforeUnmount)&&Se(U,c,f),E&6)Ko(f.component,h,g);else{if(E&128){f.suspense.unmount(h,g);return}M&&Qe(f,null,c,"beforeUnmount"),E&64?f.type.remove(f,c,h,p,mt,g):b&&(x!==pe||S>0&&S&64)?Re(b,c,h,!1,!0):(x===pe&&S&384||!p&&E&16)&&Re(_,c,h),g&&ma(f)}($&&(U=k&&k.onVnodeUnmounted)||M)&&le(()=>{U&&Se(U,c,f),M&&Qe(f,null,c,"unmounted")},h)},ma=f=>{const{type:c,el:h,anchor:g,transition:p}=f;if(c===pe){Wo(h,g);return}if(c===Jn){Y(f);return}const x=()=>{a(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(f.shapeFlag&1&&p&&!p.persisted){const{leave:k,delayLeave:w}=p,_=()=>k(h,x);w?w(f.el,x,_):_()}else x()},Wo=(f,c)=>{let h;for(;f!==c;)h=v(f),a(f),f=h;a(c)},Ko=(f,c,h)=>{const{bum:g,scope:p,update:x,subTree:k,um:w}=f;g&&qn(g),p.stop(),x&&(x.active=!1,He(k,f,c,h)),w&&le(w,c),le(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Re=(f,c,h,g=!1,p=!1,x=0)=>{for(let k=x;k<f.length;k++)He(f[k],c,h,g,p)},Zt=f=>f.shapeFlag&6?Zt(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),ha=(f,c,h)=>{f==null?c._vnode&&He(c._vnode,null,null,!0):T(c._vnode||null,f,c,null,null,null,h),Hi(),c._vnode=f},mt={p:T,um:He,m:dt,r:ma,mt:Bn,mc:ae,pc:Fe,pbc:ut,n:Zt,o:e};let Hn,Yn;return t&&([Hn,Yn]=t(mt)),{render:ha,hydrate:Hn,createApp:Nl(ha,Hn)}}function et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function oo(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=qe(a[i]),s.el=o.el),n||oo(o,s))}}function Rl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Ll=e=>e.__isTeleport,pe=Symbol(void 0),Xr=Symbol(void 0),lt=Symbol(void 0),Jn=Symbol(void 0),$t=[];let xe=null;function oe(e=!1){$t.push(xe=e?null:[])}function jl(){$t.pop(),xe=$t[$t.length-1]||null}let qt=1;function Ra(e){qt+=e}function so(e){return e.dynamicChildren=qt>0?xe||wt:null,jl(),qt>0&&xe&&xe.push(e),e}function ue(e,t,n,r,a,i){return so(be(e,t,n,r,a,i,!0))}function Dl(e,t,n,r,a){return so(Q(e,t,n,r,a,!0))}function pr(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const Rn="__vInternal",lo=({key:e})=>e!=null?e:null,fn=({ref:e,ref_key:t,ref_for:n})=>e!=null?J(e)||ne(e)||L(e)?{i:Ie,r:e,k:t,f:!!n}:e:null;function be(e,t=null,n=null,r=0,a=null,i=e===pe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&lo(t),ref:t&&fn(t),scopeId:Mn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Vr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=J(n)?8:16),qt>0&&!o&&xe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xe.push(l),l}const Q=zl;function zl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===bl)&&(e=lt),pr(e)){const s=At(e,t,!0);return n&&Vr(s,n),qt>0&&!i&&xe&&(s.shapeFlag&6?xe[xe.indexOf(e)]=s:xe.push(s)),s.patchFlag|=-2,s}if(Gl(e)&&(e=e.__vccOpts),t){t=$l(t);let{class:s,style:l}=t;s&&!J(s)&&(t.class=Yt(s)),G(l)&&(Li(l)&&!F(l)&&(l=re({},l)),t.style=at(l))}const o=J(e)?1:tl(e)?128:Ll(e)?64:G(e)?4:L(e)?2:0;return be(e,t,n,r,a,o,i,!0)}function $l(e){return e?Li(e)||Rn in e?re({},e):e:null}function At(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Bl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&lo(s),ref:t&&t.ref?n&&a?F(a)?a.concat(fn(t)):[a,fn(t)]:fn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&At(e.ssContent),ssFallback:e.ssFallback&&At(e.ssFallback),el:e.el,anchor:e.anchor}}function Me(e=" ",t=0){return Q(Xr,null,e,t)}function tt(e="",t=!1){return t?(oe(),Dl(lt,null,e)):Q(lt,null,e)}function Pe(e){return e==null||typeof e=="boolean"?Q(lt):F(e)?Q(pe,null,e.slice()):typeof e=="object"?qe(e):Q(Xr,null,String(e))}function qe(e){return e.el===null||e.memo?e:At(e)}function Vr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Vr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Rn in t)?t._ctx=Ie:a===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),r&64?(n=16,t=[Me(t)]):n=8);e.children=t,e.shapeFlag|=n}function Bl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Yt([t.class,r.class]));else if(a==="style")t.style=at([t.style,r.style]);else if(On(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Se(e,t,n,r=null){Ae(e,t,7,[n,r])}const Ul=io();let Hl=0;function Yl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Ul,i={uid:Hl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ss(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:to(r,a),emitsOptions:Wi(r,a),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=qs.bind(null,i),e.ce&&e.ce(i),i}let Z=null;const Ot=e=>{Z=e,e.scope.on()},st=()=>{Z&&Z.scope.off(),Z=null};function fo(e){return e.vnode.shapeFlag&4}let Xt=!1;function Wl(e,t=!1){Xt=t;const{props:n,children:r}=e.vnode,a=fo(e);Cl(e,n,a,t),Pl(e,r);const i=a?Kl(e,t):void 0;return Xt=!1,i}function Kl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ji(new Proxy(e.ctx,wl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Xl(e):null;Ot(e),St();const i=Ve(r,e,0,[e.props,a]);if(Et(),st(),_i(i)){if(i.then(st,st),t)return i.then(o=>{La(e,o,t)}).catch(o=>{In(o,e,0)});e.asyncDep=i}else La(e,i,t)}else co(e,t)}function La(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=Di(t)),co(e,n)}let ja;function co(e,t,n){const r=e.type;if(!e.render){if(!t&&ja&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=re(re({isCustomElement:i,delimiters:s},o),l);r.render=ja(a,u)}}e.render=r.render||ke}Ot(e),St(),xl(e),Et(),st()}function ql(e){return new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}})}function Xl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=ql(e))},slots:e.slots,emit:e.emit,expose:t}}function Gr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Di(ji(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vn)return vn[n](e)}}))}function Vl(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function Gl(e){return L(e)&&"__vccOpts"in e}const ge=(e,t)=>$s(e,t,Xt);function uo(e,t,n){const r=arguments.length;return r===2?G(t)&&!F(t)?pr(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&pr(n)&&(n=[n]),Q(e,t,n))}const Jl="3.2.37",Zl="http://www.w3.org/2000/svg",rt=typeof document<"u"?document:null,Da=rt&&rt.createElement("template"),Ql={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?rt.createElementNS(Zl,e):rt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>rt.createTextNode(e),createComment:e=>rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Da.innerHTML=r?`<svg>${e}</svg>`:e;const s=Da.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ef(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function tf(e,t,n){const r=e.style,a=J(n);if(n&&!a){for(const i in n)gr(r,i,n[i]);if(t&&!J(t))for(const i in t)n[i]==null&&gr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const za=/\s*!important$/;function gr(e,t,n){if(F(n))n.forEach(r=>gr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=nf(e,t);za.test(n)?e.setProperty(Ct(r),n.replace(za,""),"important"):e[r]=n}}const $a=["Webkit","Moz","ms"],Zn={};function nf(e,t){const n=Zn[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return Zn[t]=r;r=En(r);for(let a=0;a<$a.length;a++){const i=$a[a]+r;if(i in e)return Zn[t]=i}return t}const Ba="http://www.w3.org/1999/xlink";function rf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ba,t.slice(6,t.length)):e.setAttributeNS(Ba,t,n);else{const i=Vo(t);n==null||i&&!yi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function af(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=yi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[mo,of]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let vr=0;const sf=Promise.resolve(),lf=()=>{vr=0},ff=()=>vr||(sf.then(lf),vr=mo());function cf(e,t,n,r){e.addEventListener(t,n,r)}function uf(e,t,n,r){e.removeEventListener(t,n,r)}function df(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=mf(t);if(r){const u=i[t]=hf(r,a);cf(e,s,u,l)}else o&&(uf(e,s,o,l),i[t]=void 0)}}const Ua=/(?:Once|Passive|Capture)$/;function mf(e){let t;if(Ua.test(e)){t={};let n;for(;n=e.match(Ua);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Ct(e.slice(2)),t]}function hf(e,t){const n=r=>{const a=r.timeStamp||mo();(of||a>=n.attached-1)&&Ae(pf(r,n.value),t,5,[r])};return n.value=e,n.attached=ff(),n}function pf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ha=/^on[a-z]/,gf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?ef(e,r,a):t==="style"?tf(e,n,r):On(t)?Nr(t)||df(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):vf(e,t,r,a))?af(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),rf(e,t,r,a))};function vf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ha.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ha.test(t)&&J(n)?!1:t in e}const bf=re({patchProp:gf},Ql);let Ya;function yf(){return Ya||(Ya=Ml(bf))}const wf=(...e)=>{const t=yf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=xf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function xf(e){return J(e)?document.querySelector(e):e}const _f="/vue-battleship/dist/assets/sea.fc6dafe9.jpeg",kf="/vue-battleship/dist/assets/explosion.118de65f.png";const Af=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};class Wa{constructor(t,n,r){this.name=t,this.grids=[],this.width=n,this.height=r,this.ships=[new Ka(4),new Ka(3)],this.placeShipMode=!0,this.placeShipLength=this.ships[0].length,this.placeShipDirection="east",this.placedShips=0,this.allowAttack=!0,this.initGrids()}get survivalShips(){const t=[];return this.grids.forEach(n=>{n.forEach(r=>{r.hasShip&&!r.hasBeenAttacked&&t.push(r)})}),t}initGrids(){const t=[];for(let n=0;n<this.height;n++){const r=[];for(let a=0;a<this.width;a++){const i=new Of(a,n);r.push(i)}t.push(r)}this.grids=t}}class Of{constructor(t,n){this.y=n,this.x=t,this.disabled=!1,this.hasShip=!1,this.placeShipPreview=!1,this.hasBeenAttacked=!1}}class Ka{constructor(t){this.length=t}}const Cf={name:"App",data(){return{gameOn:!0,gameRound:0,width:5,height:5,maps:[],grids:[],winner:"",explosionImage:kf,seaImage:_f}},methods:{getPlayerColor(e){return e==this.maps[0].name?"red":"blue"},reloadGame(){window.location.reload()},onBtnClick(e,t){if(!!this.gameOn)if(e.placeShipMode){if(!this.placeShip(e,t.x,t.y,e.placeShipLength,e.placeShipDirection))return;e.placedShips+=1,e.placedShips>=e.ships.length?setTimeout(()=>{alert(`${e.name}\u5DF2\u90E8\u7F72\u597D\u8239\u8266`),e.placeShipMode=!1,e.placeShipLength=0,this.gameRound+=1},100):e.placeShipLength=e.ships[e.placedShips].length}else this.attack(e,t.x,t.y)},userPlaceShip(e,t){e.placeShipMode=!0,e.placeShipLength=t,e.placeShipDirection="east"},changeDirection(e){e.placeShipDirection=e.placeShipDirection=="east"?"south":"east"},showShipPreview(e,t){if(!e.placeShipMode)return;const{x:n,y:r}=t;if(e.placeShipDirection=="south"){if(r+e.placeShipLength>e.height)return 0;for(let a=0;a<e.placeShipLength;a++)e.grids[r+a][n].placeShipPreview=!0}else if(e.placeShipDirection=="east"){if(n+e.placeShipLength>e.width)return console.log(`Ship can not be place in (${n}, ${r});`),0;for(let a=0;a<e.placeShipLength;a++)e.grids[r][n+a].placeShipPreview=!0}},unshowShipPreview(e,t){if(!e.placeShipMode)return;const{x:n,y:r}=t;if(e.placeShipDirection=="south"){if(r+e.placeShipLength>e.height)return 0;for(let a=0;a<e.placeShipLength;a++)e.grids[r+a][n].placeShipPreview=!1}else if(e.placeShipDirection=="east"){if(n+e.placeShipLength>e.width)return 0;for(let a=0;a<e.placeShipLength;a++)e.grids[r][n+a].placeShipPreview=!1}},attack(e,t,n){if(!e.allowAttack)return;e.allowAttack=!1;const r=e.grids[n][t],a=this.maps[(this.gameRound+1)%2].name;r.hasBeenAttacked=!0,r.disabled=!0,setTimeout(()=>{if(e.allowAttack=!0,e.survivalShips<=0){this.gameOn=!1,this.winner=a,alert(`\u904A\u6232\u7D50\u675F\uFF0C\u8D0F\u5BB6\u70BA${this.winner}`);return}this.gameRound+=1},1500)},placeShip(e,t,n,r,a){if(a=="south"){if(n+r>e.height)return!1;for(let i=0;i<r;i++)e.grids[n+i][t].hasShip=!0}else if(a=="east"){if(t+r>e.width)return!1;for(let i=0;i<r;i++)e.grids[n][t+i].hasShip=!0}return!0}},created(){const e=this,t=new Wa("\u73A9\u5BB61",this.width,this.height),n=new Wa("\u73A9\u5BB62",this.width,this.height);e.maps=[t,n]}},Sf=e=>(Xs("data-v-e98197f2"),e=e(),Vs(),e),Ef={key:0},Pf={key:0},If=Me(" \u8ACB "),Tf=Me(" \u90E8\u7F72\u8239\u8266 "),Nf={key:1},Mf=Me(" \u8ACB "),Ff=Me(" \u958B\u59CB\u653B\u64CA! "),Rf={key:1},Lf=Me(" \u904A\u6232\u7D50\u675F\uFF01\u9019\u5834\u904A\u6232\u7684\u8D0F\u5BB6\u70BA "),jf=Me(" \uFF01 "),Df=Sf(()=>be("br",null,null,-1)),zf=Me(" \u9EDE\u6211\u91CD\u65B0\u958B\u59CB "),$f={class:"btn btn-black",href:"https://github.com/andy19910102/vue-battleship",target:"_blank"},Bf=Me(" \u524D\u5F80\u5C08\u6848\u9996\u9801 "),Uf=["onMouseenter","onMouseleave","onClick","disabled"],Hf=["src"],Yf=["onClick"],Wf=Me(" Turn direction ");function Kf(e,t,n,r,a,i){const o=vl("font-awesome-icon");return oe(!0),ue(pe,null,Gn(a.maps,(s,l)=>(oe(),ue("div",{key:s.name},[a.gameRound%2==l?(oe(),ue("section",{key:0,class:Yt([{"place-ship-mode":s.placeShipMode},{"attack-mode":!s.placeShipMode},"text-center"])},[a.gameOn?(oe(),ue("h1",Ef,[s.placeShipMode?(oe(),ue("span",Pf,[If,be("span",{style:at({color:i.getPlayerColor(s.name)})},Wn(s.name),5),Tf])):tt("",!0),s.placeShipMode?tt("",!0):(oe(),ue("span",Nf,[Mf,be("span",{style:at({color:i.getPlayerColor(a.maps[(a.gameRound+1)%2].name)})},Wn(a.maps[(a.gameRound+1)%2].name),5),Ff]))])):tt("",!0),a.gameOn?tt("",!0):(oe(),ue("h1",Rf,[Lf,be("span",{style:at({color:i.getPlayerColor(a.winner)})},Wn(a.winner),5),jf,Df,be("button",{class:"btn",onClick:t[0]||(t[0]=(...u)=>i.reloadGame&&i.reloadGame(...u))},[Q(o,{icon:"fa-solid fa-power-off"}),zf]),be("a",$f,[Q(o,{icon:"fa-brands fa-github"}),Bf])])),be("div",{class:"sea",style:at({backgroundImage:`url(${a.seaImage})`})},[(oe(!0),ue(pe,null,Gn(s.grids,(u,d)=>(oe(),ue("div",{key:`row${d}`,class:"row"},[(oe(!0),ue(pe,null,Gn(u,(m,v)=>(oe(),ue("div",{key:`row${d}grid${v}`,class:"grid"},[be("button",{class:Yt([{"has-ship":m.hasShip,"has-been-attacked":m.hasBeenAttacked,"place-ship-preview":m.placeShipPreview}]),onMouseenter:A=>i.showShipPreview(s,m),onMouseleave:A=>i.unshowShipPreview(s,m),onClick:A=>i.onBtnClick(s,m),disabled:m.disabled},[m.hasBeenAttacked&&m.hasShip?(oe(),ue("img",{key:0,class:"explode-img",src:a.explosionImage},null,8,Hf)):tt("",!0)],42,Uf)]))),128))]))),128))],4),be("div",null,[s.placeShipMode?(oe(),ue("button",{key:0,class:"btn",onClick:u=>i.changeDirection(s)},[Q(o,{icon:"fa-solid fa-rotate"}),Wf],8,Yf)):tt("",!0)])],2)):tt("",!0)]))),128)}const qf=Af(Cf,[["render",Kf],["__scopeId","data-v-e98197f2"]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function qa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qa(Object(n),!0).forEach(function(r){Gf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yn(e){return yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yn(e)}function Xf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Vf(e,t,n){return t&&Xa(e.prototype,t),n&&Xa(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Gf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jr(e,t){return Zf(e)||ec(e,t)||ho(e,t)||nc()}function Ln(e){return Jf(e)||Qf(e)||ho(e)||tc()}function Jf(e){if(Array.isArray(e))return br(e)}function Zf(e){if(Array.isArray(e))return e}function Qf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ec(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ho(e,t){if(!!e){if(typeof e=="string")return br(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return br(e,t)}}function br(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Va=function(){},Zr={},po={},go=null,vo={mark:Va,measure:Va};try{typeof window<"u"&&(Zr=window),typeof document<"u"&&(po=document),typeof MutationObserver<"u"&&(go=MutationObserver),typeof performance<"u"&&(vo=performance)}catch{}var rc=Zr.navigator||{},Ga=rc.userAgent,Ja=Ga===void 0?"":Ga,Je=Zr,X=po,Za=go,an=vo;Je.document;var Ue=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",bo=~Ja.indexOf("MSIE")||~Ja.indexOf("Trident/"),De="___FONT_AWESOME___",yr=16,yo="fa",wo="svg-inline--fa",ft="data-fa-i2svg",wr="data-fa-pseudo-element",ac="data-fa-pseudo-element-pending",Qr="data-prefix",ea="data-icon",Qa="fontawesome-i2svg",ic="async",oc=["HTML","HEAD","STYLE","SCRIPT"],xo=function(){try{return!0}catch{return!1}}(),ta={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},wn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},_o={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sc={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},lc=/fa[srltdbk]?[\-\ ]/,ko="fa-layers-text",fc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,cc={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Ao=[1,2,3,4,5,6,7,8,9,10],uc=Ao.concat([11,12,13,14,15,16,17,18,19,20]),dc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],it={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mc=[].concat(Ln(Object.keys(wn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",it.GROUP,it.SWAP_OPACITY,it.PRIMARY,it.SECONDARY]).concat(Ao.map(function(e){return"".concat(e,"x")})).concat(uc.map(function(e){return"w-".concat(e)})),Oo=Je.FontAwesomeConfig||{};function hc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function pc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var gc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];gc.forEach(function(e){var t=Jr(e,2),n=t[0],r=t[1],a=pc(hc(n));a!=null&&(Oo[r]=a)})}var vc={familyPrefix:yo,styleDefault:"solid",replacementClass:wo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Bt=O(O({},vc),Oo);Bt.autoReplaceSvg||(Bt.observeMutations=!1);var I={};Object.keys(Bt).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){Bt[e]=n,cn.forEach(function(r){return r(I)})},get:function(){return Bt[e]}})});Je.FontAwesomeConfig=I;var cn=[];function bc(e){return cn.push(e),function(){cn.splice(cn.indexOf(e),1)}}var We=yr,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yc(e){if(!(!e||!Ue)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var wc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vt(){for(var e=12,t="";e-- >0;)t+=wc[Math.random()*62|0];return t}function Pt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function na(e){return e.classList?Pt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Co(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Co(e[n]),'" ')},"").trim()}function jn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ra(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function _c(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function kc(e){var t=e.transform,n=e.width,r=n===void 0?yr:n,a=e.height,i=a===void 0?yr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&bo?l+="translate(".concat(t.x/We-r/2,"em, ").concat(t.y/We-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/We,"em), calc(-50% + ").concat(t.y/We,"em)) "):l+="translate(".concat(t.x/We,"em, ").concat(t.y/We,"em) "),l+="scale(".concat(t.size/We*(t.flipX?-1:1),", ").concat(t.size/We*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ac=`:root, :host {
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
}`;function So(){var e=yo,t=wo,n=I.familyPrefix,r=I.replacementClass,a=Ac;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ei=!1;function Qn(){I.autoAddCss&&!ei&&(yc(So()),ei=!0)}var Oc={mixout:function(){return{dom:{css:So,insertCss:Qn}}},hooks:function(){return{beforeDOMElementCreation:function(){Qn()},beforeI2svg:function(){Qn()}}}},ze=Je||{};ze[De]||(ze[De]={});ze[De].styles||(ze[De].styles={});ze[De].hooks||(ze[De].hooks={});ze[De].shims||(ze[De].shims=[]);var _e=ze[De],Eo=[],Cc=function e(){X.removeEventListener("DOMContentLoaded",e),xn=1,Eo.map(function(t){return t()})},xn=!1;Ue&&(xn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),xn||X.addEventListener("DOMContentLoaded",Cc));function Sc(e){!Ue||(xn?setTimeout(e,0):Eo.push(e))}function Gt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Co(e):"<".concat(t," ").concat(xc(r),">").concat(i.map(Gt).join(""),"</").concat(t,">")}function ti(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ec=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},er=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Ec(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Pc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function xr(e){var t=Pc(e);return t.length===1?t[0].toString(16):null}function Ic(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ni(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function _r(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ni(t);typeof _e.hooks.addPack=="function"&&!a?_e.hooks.addPack(e,ni(t)):_e.styles[e]=O(O({},_e.styles[e]||{}),i),e==="fas"&&_r("fa",t)}var Ut=_e.styles,Tc=_e.shims,Nc=Object.values(_o),aa=null,Po={},Io={},To={},No={},Mo={},Mc=Object.keys(ta);function Fc(e){return~mc.indexOf(e)}function Rc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Fc(a)?a:null}var Fo=function(){var t=function(i){return er(Ut,function(o,s,l){return o[l]=er(s,i,{}),o},{})};Po=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Io=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Mo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ut||I.autoFetchSvg,r=er(Tc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});To=r.names,No=r.unicodes,aa=Dn(I.styleDefault)};bc(function(e){aa=Dn(e.styleDefault)});Fo();function ia(e,t){return(Po[e]||{})[t]}function Lc(e,t){return(Io[e]||{})[t]}function bt(e,t){return(Mo[e]||{})[t]}function Ro(e){return To[e]||{prefix:null,iconName:null}}function jc(e){var t=No[e],n=ia("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ze(){return aa}var oa=function(){return{prefix:null,iconName:null,rest:[]}};function Dn(e){var t=ta[e],n=wn[e]||wn[t],r=e in _e.styles?e:null;return n||r||null}function zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Rc(I.familyPrefix,s);if(Ut[s]?(s=Nc.includes(s)?sc[s]:s,a=s,o.prefix=s):Mc.indexOf(s)>-1?(a=s,o.prefix=Dn(s)):l?o.iconName=l:s!==I.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Ro(o.iconName):{},d=bt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Ut.far&&Ut.fas&&!I.autoFetchSvg&&(o.prefix="fas")}return o},oa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Ze()||"fas"),i}var Dc=function(){function e(){Xf(this,e),this.definitions={}}return Vf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),_r(s,o[s]);var l=_o[s];l&&_r(l,o[s]),Fo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),ri=[],yt={},kt={},zc=Object.keys(kt);function $c(e,t){var n=t.mixoutsTo;return ri=e,yt={},Object.keys(kt).forEach(function(r){zc.indexOf(r)===-1&&delete kt[r]}),ri.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),yn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){yt[o]||(yt[o]=[]),yt[o].push(i[o])})}r.provides&&r.provides(kt)}),n}function kr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=yt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ct(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=yt[e]||[];a.forEach(function(i){i.apply(null,n)})}function $e(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return kt[e]?kt[e].apply(null,t):void 0}function Ar(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ze();if(!!t)return t=bt(n,t)||t,ti(Lo.definitions,n,t)||ti(_e.styles,n,t)}var Lo=new Dc,Bc=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,ct("noAuto")},Uc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ue?(ct("beforeI2svg",t),$e("pseudoElements2svg",t),$e("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Sc(function(){Yc({autoReplaceSvgRoot:n}),ct("watch",t)})}},Hc={icon:function(t){if(t===null)return null;if(yn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:bt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Dn(t[0]);return{prefix:r,iconName:bt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.familyPrefix,"-"))>-1||t.match(lc))){var a=zn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ze(),iconName:bt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ze();return{prefix:i,iconName:bt(i,t)||t}}}},he={noAuto:Bc,config:I,dom:Uc,parse:Hc,library:Lo,findIconDefinition:Ar,toHtml:Gt},Yc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(_e.styles).length>0||I.autoFetchSvg)&&Ue&&I.autoReplaceSvg&&he.dom.i2svg({node:r})};function $n(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Gt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ue){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Wc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ra(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=jn(O(O({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Kc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function sa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,A=v===void 0?!1:v,R=r.found?r:n,j=R.width,T=R.height,y=a==="fak",C=[I.replacementClass,i?"".concat(I.familyPrefix,"-").concat(i):""].filter(function(ae){return m.classes.indexOf(ae)===-1}).filter(function(ae){return ae!==""||!!ae}).concat(m.classes).join(" "),N={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(T)})},D=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(j/T*16*.0625,"em")}:{};A&&(N.attributes[ft]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||Vt())},children:[l]}),delete N.attributes.title);var Y=O(O({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:O(O({},D),m.styles)}),ee=r.found&&n.found?$e("generateAbstractMask",Y)||{children:[],attributes:{}}:$e("generateAbstractIcon",Y)||{children:[],attributes:{}},fe=ee.children,Oe=ee.attributes;return Y.children=fe,Y.attributes=Oe,s?Kc(Y):Wc(Y)}function ai(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[ft]="");var d=O({},o.styles);ra(a)&&(d.transform=kc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=jn(d);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function qc(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=jn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var tr=_e.styles;function Or(e){var t=e[0],n=e[1],r=e.slice(4),a=Jr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.familyPrefix,"-").concat(it.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.familyPrefix,"-").concat(it.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.familyPrefix,"-").concat(it.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Xc={found:!1,width:512,height:512};function Vc(e,t){!xo&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Cr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=Ze()),new Promise(function(r,a){if($e("missingIconAbstract"),n==="fa"){var i=Ro(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&tr[t]&&tr[t][e]){var o=tr[t][e];return r(Or(o))}Vc(e,t),r(O(O({},Xc),{},{icon:I.showMissingIcons&&e?$e("missingIconAbstract")||{}:{}}))})}var ii=function(){},Sr=I.measurePerformance&&an&&an.mark&&an.measure?an:{mark:ii,measure:ii},jt='FA "6.1.2"',Gc=function(t){return Sr.mark("".concat(jt," ").concat(t," begins")),function(){return jo(t)}},jo=function(t){Sr.mark("".concat(jt," ").concat(t," ends")),Sr.measure("".concat(jt," ").concat(t),"".concat(jt," ").concat(t," begins"),"".concat(jt," ").concat(t," ends"))},la={begin:Gc,end:jo},un=function(){};function oi(e){var t=e.getAttribute?e.getAttribute(ft):null;return typeof t=="string"}function Jc(e){var t=e.getAttribute?e.getAttribute(Qr):null,n=e.getAttribute?e.getAttribute(ea):null;return t&&n}function Zc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Qc(){if(I.autoReplaceSvg===!0)return dn.replace;var e=dn[I.autoReplaceSvg];return e||dn.replace}function eu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function tu(e){return X.createElement(e)}function Do(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?eu:tu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Do(o,{ceFn:r}))}),a}function nu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var dn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Do(a),n)}),n.getAttribute(ft)===null&&I.keepOriginalSource){var r=X.createComment(nu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~na(n).indexOf(I.replacementClass))return dn.replace(t);var a=new RegExp("".concat(I.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Gt(s)}).join(`
`);n.setAttribute(ft,""),n.innerHTML=o}};function si(e){e()}function zo(e,t){var n=typeof t=="function"?t:un;if(e.length===0)n();else{var r=si;I.mutateApproach===ic&&(r=Je.requestAnimationFrame||si),r(function(){var a=Qc(),i=la.begin("mutate");e.map(a),i(),n()})}}var fa=!1;function $o(){fa=!0}function Er(){fa=!1}var _n=null;function li(e){if(!!Za&&!!I.observeMutations){var t=e.treeCallback,n=t===void 0?un:t,r=e.nodeCallback,a=r===void 0?un:r,i=e.pseudoElementsCallback,o=i===void 0?un:i,s=e.observeMutationsRoot,l=s===void 0?X:s;_n=new Za(function(u){if(!fa){var d=Ze();Pt(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!oi(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&oi(m.target)&&~dc.indexOf(m.attributeName))if(m.attributeName==="class"&&Jc(m.target)){var v=zn(na(m.target)),A=v.prefix,R=v.iconName;m.target.setAttribute(Qr,A||d),R&&m.target.setAttribute(ea,R)}else Zc(m.target)&&a(m.target)})}}),Ue&&_n.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ru(){!_n||_n.disconnect()}function au(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function iu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=zn(na(e));return a.prefix||(a.prefix=Ze()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Lc(a.prefix,e.innerText)||ia(a.prefix,xr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ou(e){var t=Pt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||Vt()):(t["aria-hidden"]="true",t.focusable="false")),t}function su(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=iu(e),r=n.iconName,a=n.prefix,i=n.rest,o=ou(e),s=kr("parseNodeAttributes",{},e),l=t.styleParser?au(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var lu=_e.styles;function Bo(e){var t=I.autoReplaceSvg==="nest"?fi(e,{styleParser:!1}):fi(e);return~t.extra.classes.indexOf(ko)?$e("generateLayersText",e,t):$e("generateSvgReplacementMutation",e,t)}function ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ue)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(Qa,"-").concat(m))},a=function(m){return n.remove("".concat(Qa,"-").concat(m))},i=I.autoFetchSvg?Object.keys(ta):Object.keys(lu);i.includes("fa")||i.push("fa");var o=[".".concat(ko,":not([").concat(ft,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ft,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Pt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=la.begin("onTree"),u=s.reduce(function(d,m){try{var v=Bo(m);v&&d.push(v)}catch(A){xo||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(v){zo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function fu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bo(e).then(function(n){n&&zo([n],t)})}function cu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ar(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Ar(a||{})),e(r,O(O({},n),{},{mask:a}))}}var uu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Te:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,v=m===void 0?null:m,A=n.titleId,R=A===void 0?null:A,j=n.classes,T=j===void 0?[]:j,y=n.attributes,C=y===void 0?{}:y,N=n.styles,D=N===void 0?{}:N;if(!!t){var Y=t.prefix,ee=t.iconName,fe=t.icon;return $n(O({type:"icon"},t),function(){return ct("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(v?C["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(R||Vt()):(C["aria-hidden"]="true",C.focusable="false")),sa({icons:{main:Or(fe),mask:l?Or(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:ee,transform:O(O({},Te),a),symbol:o,title:v,maskId:d,titleId:R,extra:{attributes:C,styles:D,classes:T}})})}},du={mixout:function(){return{icon:cu(uu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ci,n.nodeCallback=fu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return ci(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(A,R){Promise.all([Cr(a,s),d.iconName?Cr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var T=Jr(j,2),y=T[0],C=T[1];A([n,sa({icons:{main:y,mask:C},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=jn(s);l.length>0&&(a.style=l);var u;return ra(o)&&(u=$e("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},mu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return $n({type:"layer"},function(){ct("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.familyPrefix,"-layers")].concat(Ln(i)).join(" ")},children:o}]})}}}},hu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return $n({type:"counter",content:n},function(){return ct("beforeDOMElementCreation",{content:n,params:r}),qc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(I.familyPrefix,"-layers-counter")].concat(Ln(s))}})})}}}},pu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Te:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,A=v===void 0?{}:v;return $n({type:"text",content:n},function(){return ct("beforeDOMElementCreation",{content:n,params:r}),ai({content:n,transform:O(O({},Te),i),title:s,extra:{attributes:m,styles:A,classes:["".concat(I.familyPrefix,"-layers-text")].concat(Ln(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(bo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ai({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},gu=new RegExp('"',"ug"),ui=[1105920,1112319];function vu(e){var t=e.replace(gu,""),n=Ic(t,0),r=n>=ui[0]&&n<=ui[1],a=t.length===2?t[0]===t[1]:!1;return{value:xr(a?t[0]:t),isSecondary:r||a}}function di(e,t){var n="".concat(ac).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Pt(e.children),o=i.filter(function(ee){return ee.getAttribute(wr)===t})[0],s=Je.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(fc),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?wn[l[2].toLowerCase()]:cc[u],A=vu(m),R=A.value,j=A.isSecondary,T=l[0].startsWith("FontAwesome"),y=ia(v,R),C=y;if(T){var N=jc(R);N.iconName&&N.prefix&&(y=N.iconName,v=N.prefix)}if(y&&!j&&(!o||o.getAttribute(Qr)!==v||o.getAttribute(ea)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var D=su(),Y=D.extra;Y.attributes[wr]=t,Cr(y,v).then(function(ee){var fe=sa(O(O({},D),{},{icons:{main:ee,mask:oa()},prefix:v,iconName:C,extra:Y,watchable:!0})),Oe=X.createElement("svg");t==="::before"?e.insertBefore(Oe,e.firstChild):e.appendChild(Oe),Oe.outerHTML=fe.map(function(ae){return Gt(ae)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function bu(e){return Promise.all([di(e,"::before"),di(e,"::after")])}function yu(e){return e.parentNode!==document.head&&!~oc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(wr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function mi(e){if(!!Ue)return new Promise(function(t,n){var r=Pt(e.querySelectorAll("*")).filter(yu).map(bu),a=la.begin("searchPseudoElements");$o(),Promise.all(r).then(function(){a(),Er(),t()}).catch(function(){a(),Er(),n()})})}var wu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=mi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;I.searchPseudoElements&&mi(a)}}},hi=!1,xu={mixout:function(){return{dom:{unwatch:function(){$o(),hi=!0}}}},hooks:function(){return{bootstrap:function(){li(kr("mutationObserverCallbacks",{}))},noAuto:function(){ru()},watch:function(n){var r=n.observeMutationsRoot;hi?Er():li(kr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},pi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},_u={mixout:function(){return{parse:{transform:function(n){return pi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=pi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},A.outer),children:[{tag:"g",attributes:O({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),A.path)}]}]}}}},nr={x:0,y:0,width:"100%",height:"100%"};function gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ku(e){return e.tag==="g"?e.children:[e]}var Au={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?zn(a.split(" ").map(function(o){return o.trim()})):oa();return i.prefix||(i.prefix=Ze()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,v=o.icon,A=_c({transform:l,containerWidth:m,iconWidth:u}),R={tag:"rect",attributes:O(O({},nr),{},{fill:"white"})},j=d.children?{children:d.children.map(gi)}:{},T={tag:"g",attributes:O({},A.inner),children:[gi(O({tag:d.tag,attributes:O(O({},d.attributes),A.path)},j))]},y={tag:"g",attributes:O({},A.outer),children:[T]},C="mask-".concat(s||Vt()),N="clip-".concat(s||Vt()),D={tag:"mask",attributes:O(O({},nr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,y]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:ku(v)},D]};return r.push(Y,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(C,")")},nr)}),{children:r,attributes:a}}}},Ou={provides:function(t){var n=!1;Je.matchMedia&&(n=Je.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Cu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Su=[Oc,du,mu,hu,pu,wu,xu,_u,Au,Ou,Cu];$c(Su,{mixoutsTo:he});he.noAuto;var Uo=he.config,ca=he.library;he.dom;var kn=he.parse;he.findIconDefinition;he.toHtml;var Eu=he.icon;he.layer;var Pu=he.text;he.counter;function vi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vi(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function An(e){return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},An(e)}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Iu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Tu(e,t){if(e==null)return{};var n=Iu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Pr(e){return Nu(e)||Mu(e)||Fu(e)||Ru()}function Nu(e){if(Array.isArray(e))return Ir(e)}function Mu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Fu(e,t){if(!!e){if(typeof e=="string")return Ir(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ir(e,t)}}function Ir(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ru(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ho={exports:{}};(function(e){(function(t){var n=function(y,C,N){if(!u(C)||m(C)||v(C)||A(C)||l(C))return C;var D,Y=0,ee=0;if(d(C))for(D=[],ee=C.length;Y<ee;Y++)D.push(n(y,C[Y],N));else{D={};for(var fe in C)Object.prototype.hasOwnProperty.call(C,fe)&&(D[y(fe,N)]=n(y,C[fe],N))}return D},r=function(y,C){C=C||{};var N=C.separator||"_",D=C.split||/(?=[A-Z])/;return y.split(D).join(N)},a=function(y){return R(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(C,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var C=a(y);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(y,C){return r(y,C).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},A=function(y){return s.call(y)=="[object Boolean]"},R=function(y){return y=y-0,y===y},j=function(y,C){var N=C&&"process"in C?C.process:C;return typeof N!="function"?y:function(D,Y){return N(D,y,Y)}},T={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,C){return n(j(a,C),y)},decamelizeKeys:function(y,C){return n(j(o,C),y,C)},pascalizeKeys:function(y,C){return n(j(i,C),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(Lu)})(Ho);var ju=Ho.exports,Du=["class","style"];function zu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ju.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function $u(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ua(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ua(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=$u(d);break;case"style":l.style=zu(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Tu(n,Du);return uo(e.tag,we(we(we({},t),{},{class:a.class,style:we(we({},a.style),o)},a.attrs),s),r)}var Yo=!1;try{Yo=!0}catch{}function Bu(){if(!Yo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ht(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?se({},e,t):{}}function Uu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},se(t,"fa-".concat(e.size),e.size!==null),se(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),se(t,"fa-pull-".concat(e.pull),e.pull!==null),se(t,"fa-swap-opacity",e.swapOpacity),se(t,"fa-bounce",e.bounce),se(t,"fa-shake",e.shake),se(t,"fa-beat",e.beat),se(t,"fa-fade",e.fade),se(t,"fa-beat-fade",e.beatFade),se(t,"fa-flash",e.flash),se(t,"fa-spin-pulse",e.spinPulse),se(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function bi(e){if(e&&An(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(kn.icon)return kn.icon(e);if(e===null)return null;if(An(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Hu=Kr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ge(function(){return bi(t.icon)}),i=ge(function(){return Ht("classes",Uu(t))}),o=ge(function(){return Ht("transform",typeof t.transform=="string"?kn.transform(t.transform):t.transform)}),s=ge(function(){return Ht("mask",bi(t.mask))}),l=ge(function(){return Eu(a.value,we(we(we(we({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});sn(l,function(d){if(!d)return Bu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=ge(function(){return l.value?ua(l.value.abstract[0],{},r):null});return function(){return u.value}}});Kr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Uo.familyPrefix,i=ge(function(){return["".concat(a,"-layers")].concat(Pr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return uo("div",{class:i.value},r.default?r.default():[])}}});Kr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Uo.familyPrefix,i=ge(function(){return Ht("classes",[].concat(Pr(t.counter?["".concat(a,"-layers-counter")]:[]),Pr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ge(function(){return Ht("transform",typeof t.transform=="string"?kn.transform(t.transform):t.transform)}),s=ge(function(){var u=Pu(t.value.toString(),we(we({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ge(function(){return ua(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Yu={prefix:"fas",iconName:"power-off",icon:[512,512,[9211],"f011","M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256V32C224 14.33 238.3 0 256 0C273.7 0 288 14.33 288 32V256zM80 256C80 353.2 158.8 432 256 432C353.2 432 432 353.2 432 256C432 201.6 407.3 152.9 368.5 120.6C354.9 109.3 353 89.13 364.3 75.54C375.6 61.95 395.8 60.1 409.4 71.4C462.2 115.4 496 181.8 496 255.1C496 388.5 388.5 496 256 496C123.5 496 16 388.5 16 255.1C16 181.8 49.75 115.4 102.6 71.4C116.2 60.1 136.4 61.95 147.7 75.54C158.1 89.13 157.1 109.3 143.5 120.6C104.7 152.9 80 201.6 80 256z"]},Wu={prefix:"fas",iconName:"rotate",icon:[512,512,[128260,"sync-alt"],"f2f1","M449.9 39.96l-48.5 48.53C362.5 53.19 311.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.97 5.5 34.86-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c37.96 0 73 14.18 100.2 37.8L311.1 178C295.1 194.8 306.8 223.4 330.4 224h146.9C487.7 223.7 496 215.3 496 204.9V59.04C496 34.99 466.9 22.95 449.9 39.96zM441.8 289.6c-16.94-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-37.96 0-73-14.18-100.2-37.8L200 334C216.9 317.2 205.2 288.6 181.6 288H34.66C24.32 288.3 16 296.7 16 307.1v145.9c0 24.04 29.07 36.08 46.07 19.07l48.5-48.53C149.5 458.8 200.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"]};/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Ku={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};ca.add(Wu);ca.add(Yu);ca.add(Ku);wf(qf).component("font-awesome-icon",Hu).mount("#app");
