var gr=Object.defineProperty;var Et=e=>{throw TypeError(e)};var wr=(e,t,r)=>t in e?gr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var D=(e,t,r)=>wr(e,typeof t!="symbol"?t+"":t,r),bt=(e,t,r)=>t.has(e)||Et("Cannot "+r);var S=(e,t,r)=>(bt(e,t,"read from private field"),r?r.call(e):t.get(e)),Ze=(e,t,r)=>t.has(e)?Et("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),et=(e,t,r,n)=>(bt(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const St=!1;var ut=Array.isArray,at=Array.from,qe=Object.keys,Ue=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,yr=Object.prototype,Er=Array.prototype,br=Object.getPrototypeOf;function xr(e){for(var t=0;t<e.length;t++)e[t]()}const B=2,Rt=4,Ke=8,ot=16,H=32,$e=64,tt=128,fe=256,Be=512,I=1024,re=2048,ke=4096,j=8192,ge=16384,Tr=32768,ft=65536,Cr=1<<19,Ot=1<<20,Oe=Symbol("$state"),It=Symbol("legacy props");function Dt(e){return e===this.v}function Ar(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Nr(e){return!Ar(e,this.v)}function kr(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Fr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Sr(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Rr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Or(){throw new Error("https://svelte.dev/e/hydration_failed")}function Ir(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Dr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Lr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Pr(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Mr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Lt=!1;const qr=1,Ur=2,Br=16,Hr=8,Yr=1,jr=2,Pt="[",ct="[!",vt="]",be={},R=Symbol();function P(e,t){var r={f:0,v:e,reactions:null,equals:Dt,version:0};return r}function ve(e){return Vr(P(e))}function dt(e,t=!1){const r=P(e);return t||(r.equals=Nr),r}function Vr(e){return E!==null&&E.f&B&&(V===null?sn([e]):V.push(e)),e}function A(e,t){return E!==null&&un()&&E.f&(B|ot)&&(V===null||!V.includes(e))&&Mr(),Mt(e,t)}function Mt(e,t){return e.equals(t)||(e.v=t,e.version=nr(),qt(e,re),$!==null&&$.f&I&&!($.f&H)&&(k!==null&&k.includes(e)?(J($,re),ze($)):ee===null?ln([e]):ee.push(e))),t}function qt(e,t){var r=e.reactions;if(r!==null)for(var n=r.length,s=0;s<n;s++){var i=r[s],l=i.f;l&re||(J(i,t),l&(I|fe)&&(l&B?qt(i,ke):ze(i)))}}function _t(e){console.warn("https://svelte.dev/e/hydration_mismatch")}let x=!1;function G(e){x=e}let b;function U(e){if(e===null)throw _t(),be;return b=e}function Ge(){return U(se(b))}function ie(e){if(x){if(se(b)!==null)throw _t(),be;b=e}}function rt(){for(var e=0,t=b;;){if(t.nodeType===8){var r=t.data;if(r===vt){if(e===0)return t;e-=1}else(r===Pt||r===ct)&&(e+=1)}var n=se(t);t.remove(),t=n}}function q(e,t=null,r){if(typeof e!="object"||e===null||Oe in e)return e;const n=br(e);if(n!==yr&&n!==Er)return e;var s=new Map,i=ut(e),l=P(0);i&&s.set("length",P(e.length));var a;return new Proxy(e,{defineProperty(f,u,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Dr();var o=s.get(u);return o===void 0?(o=P(c.value),s.set(u,o)):A(o,q(c.value,a)),!0},deleteProperty(f,u){var c=s.get(u);if(c===void 0)u in f&&s.set(u,P(R));else{if(i&&typeof u=="string"){var o=s.get("length"),v=Number(u);Number.isInteger(v)&&v<o.v&&A(o,v)}A(c,R),xt(l)}return!0},get(f,u,c){var _;if(u===Oe)return e;var o=s.get(u),v=u in f;if(o===void 0&&(!v||(_=ue(f,u))!=null&&_.writable)&&(o=P(q(v?f[u]:R,a)),s.set(u,o)),o!==void 0){var d=y(o);return d===R?void 0:d}return Reflect.get(f,u,c)},getOwnPropertyDescriptor(f,u){var c=Reflect.getOwnPropertyDescriptor(f,u);if(c&&"value"in c){var o=s.get(u);o&&(c.value=y(o))}else if(c===void 0){var v=s.get(u),d=v==null?void 0:v.v;if(v!==void 0&&d!==R)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return c},has(f,u){var d;if(u===Oe)return!0;var c=s.get(u),o=c!==void 0&&c.v!==R||Reflect.has(f,u);if(c!==void 0||$!==null&&(!o||(d=ue(f,u))!=null&&d.writable)){c===void 0&&(c=P(o?q(f[u],a):R),s.set(u,c));var v=y(c);if(v===R)return!1}return o},set(f,u,c,o){var w;var v=s.get(u),d=u in f;if(i&&u==="length")for(var _=c;_<v.v;_+=1){var p=s.get(_+"");p!==void 0?A(p,R):_ in f&&(p=P(R),s.set(_+"",p))}v===void 0?(!d||(w=ue(f,u))!=null&&w.writable)&&(v=P(void 0),A(v,q(c,a)),s.set(u,v)):(d=v.v!==R,A(v,q(c,a)));var g=Reflect.getOwnPropertyDescriptor(f,u);if(g!=null&&g.set&&g.set.call(o,c),!d){if(i&&typeof u=="string"){var m=s.get("length"),h=Number(u);Number.isInteger(h)&&h>=m.v&&A(m,h+1)}xt(l)}return!0},ownKeys(f){y(l);var u=Reflect.ownKeys(f).filter(v=>{var d=s.get(v);return d===void 0||d.v!==R});for(var[c,o]of s)o.v!==R&&!(c in f)&&u.push(c);return u},setPrototypeOf(){Lr()}})}function xt(e,t=1){A(e,e.v+t)}var Tt,Ut,Bt;function nt(){if(Tt===void 0){Tt=window;var e=Element.prototype,t=Node.prototype;Ut=ue(t,"firstChild").get,Bt=ue(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function ae(e=""){return document.createTextNode(e)}function oe(e){return Ut.call(e)}function se(e){return Bt.call(e)}function de(e,t){if(!x)return oe(e);var r=oe(b);return r===null&&(r=b.appendChild(ae())),U(r),r}function st(e,t){if(!x){var r=oe(e);return r instanceof Comment&&r.data===""?se(r):r}return b}function Ie(e,t=1,r=!1){let n=x?b:e;for(var s;t--;)s=n,n=se(n);if(!x)return n;var i=n==null?void 0:n.nodeType;if(r&&i!==3){var l=ae();return n===null?s==null||s.after(l):n.before(l),U(l),l}return U(n),n}function Ht(e){e.textContent=""}function Yt(e){var t=B|re;$===null?t|=fe:$.f|=Ot;var r=E!==null&&E.f&B?E:null;const n={children:null,ctx:F,deps:null,equals:Dt,f:t,fn:e,reactions:null,v:null,version:0,parent:r??$};return r!==null&&(r.children??(r.children=[])).push(n),n}function jt(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&B?ht(n):Q(n)}}}function Wr(e){for(var t=e.parent;t!==null;){if(!(t.f&B))return t;t=t.parent}return null}function Vt(e){var t,r=$;ne(Wr(e));try{jt(e),t=sr(e)}finally{ne(r)}return t}function Wt(e){var t=Vt(e),r=(_e||e.f&fe)&&e.deps!==null?ke:I;J(e,r),e.equals(t)||(e.v=t,e.version=nr())}function ht(e){jt(e),Ne(e,0),J(e,ge),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Kr(e){$===null&&E===null&&Sr(),E!==null&&E.f&fe&&Fr(),$t&&kr()}function Gr(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function we(e,t,r,n=!0){var s=(e&$e)!==0,i=$,l={ctx:F,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|re,first:null,fn:t,last:null,next:null,parent:s?null:i,prev:null,teardown:null,transitions:null,version:0};if(r){var a=he;try{Ct(!0),Je(l),l.f|=Tr}catch(c){throw Q(l),c}finally{Ct(a)}}else t!==null&&ze(l);var f=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&Ot)===0;if(!f&&!s&&n&&(i!==null&&Gr(l,i),E!==null&&E.f&B)){var u=E;(u.children??(u.children=[])).push(l)}return l}function Qr(e){Kr();var t=$!==null&&($.f&H)!==0&&F!==null&&!F.m;if(t){var r=F;(r.e??(r.e=[])).push({fn:e,effect:$,reaction:E})}else{var n=Kt(e);return n}}function Jr(e){const t=we($e,e,!0);return()=>{Q(t)}}function zr(e){const t=we($e,e,!0);return(r={})=>new Promise(n=>{r.outro?He(t,()=>{Q(t),n(void 0)}):(Q(t),n(void 0))})}function Kt(e){return we(Rt,e,!1)}function Xr(e){return we(Ke,e,!0)}function De(e){return pt(e)}function pt(e,t=0){return we(Ke|ot|t,e,!0)}function Te(e,t=!0){return we(Ke|H,e,!0,t)}function Gt(e){var t=e.teardown;if(t!==null){const r=$t,n=E;At(!0),me(null);try{t.call(null)}finally{At(r),me(n)}}}function Qt(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)ht(t[r])}}function Jt(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;Q(r,t),r=n}}function Zr(e){for(var t=e.first;t!==null;){var r=t.next;t.f&H||Q(t),t=r}}function Q(e,t=!0){var r=!1;if((t||e.f&Cr)&&e.nodes_start!==null){for(var n=e.nodes_start,s=e.nodes_end;n!==null;){var i=n===s?null:se(n);n.remove(),n=i}r=!0}Jt(e,t&&!r),Qt(e),Ne(e,0),J(e,ge);var l=e.transitions;if(l!==null)for(const f of l)f.stop();Gt(e);var a=e.parent;a!==null&&a.first!==null&&zt(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function zt(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function He(e,t){var r=[];mt(e,r,!0),Xt(r,()=>{Q(e),t&&t()})}function Xt(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function mt(e,t,r){if(!(e.f&j)){if(e.f^=j,e.transitions!==null)for(const l of e.transitions)(l.is_global||r)&&t.push(l);for(var n=e.first;n!==null;){var s=n.next,i=(n.f&ft)!==0||(n.f&H)!==0;mt(n,t,i?r:!1),n=s}}}function Ye(e){Zt(e,!0)}function Zt(e,t){if(e.f&j){Fe(e)&&Je(e),e.f^=j;for(var r=e.first;r!==null;){var n=r.next,s=(r.f&ft)!==0||(r.f&H)!==0;Zt(r,s?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let je=!1,it=[];function er(){je=!1;const e=it.slice();it=[],xr(e)}function en(e){je||(je=!0,queueMicrotask(er)),it.push(e)}function tn(){je&&er()}function rn(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const tr=0,nn=1;let Le=!1,Pe=tr,Ce=!1,Ae=null,he=!1,$t=!1;function Ct(e){he=e}function At(e){$t=e}let le=[],pe=0;let E=null;function me(e){E=e}let $=null;function ne(e){$=e}let V=null;function sn(e){V=e}let k=null,O=0,ee=null;function ln(e){ee=e}let rr=0,_e=!1,F=null;function nr(){return++rr}function un(){return!Lt}function Fe(e){var l,a;var t=e.f;if(t&re)return!0;if(t&ke){var r=e.deps,n=(t&fe)!==0;if(r!==null){var s;if(t&Be){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(e);e.f^=Be}for(s=0;s<r.length;s++){var i=r[s];if(Fe(i)&&Wt(i),n&&$!==null&&!_e&&!((a=i==null?void 0:i.reactions)!=null&&a.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}n||J(e,I)}return!1}function an(e,t){for(var r=t;r!==null;){if(r.f&tt)try{r.fn(e);return}catch{r.f^=tt}r=r.parent}throw Le=!1,e}function on(e){return(e.f&ge)===0&&(e.parent===null||(e.parent.f&tt)===0)}function Qe(e,t,r,n){if(Le){if(r===null&&(Le=!1),on(t))throw e;return}r!==null&&(Le=!0);{an(e,t);return}}function sr(e){var v;var t=k,r=O,n=ee,s=E,i=_e,l=V,a=F,f=e.f;k=null,O=0,ee=null,E=f&(H|$e)?null:e,_e=!he&&(f&fe)!==0,V=null,F=e.ctx;try{var u=(0,e.fn)(),c=e.deps;if(k!==null){var o;if(Ne(e,O),c!==null&&O>0)for(c.length=O+k.length,o=0;o<k.length;o++)c[O+o]=k[o];else e.deps=c=k;if(!_e)for(o=O;o<c.length;o++)((v=c[o]).reactions??(v.reactions=[])).push(e)}else c!==null&&O<c.length&&(Ne(e,O),c.length=O);return u}finally{k=t,O=r,ee=n,E=s,_e=i,V=l,F=a}}function fn(e,t){let r=t.reactions;if(r!==null){var n=r.indexOf(e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&t.f&B&&(k===null||!k.includes(t))&&(J(t,ke),t.f&(fe|Be)||(t.f^=Be),Ne(t,0))}function Ne(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)fn(e,r[n])}function Je(e){var t=e.f;if(!(t&ge)){J(e,I);var r=$,n=F;$=e;try{t&ot?Zr(e):Jt(e),Qt(e),Gt(e);var s=sr(e);e.teardown=typeof s=="function"?s:null,e.version=rr}catch(i){Qe(i,e,r,n||e.ctx)}finally{$=r}}}function ir(){if(pe>1e3){pe=0;try{Rr()}catch(e){if(Ae!==null)Qe(e,Ae,null);else throw e}}pe++}function lr(e){var t=e.length;if(t!==0){ir();var r=he;he=!0;try{for(var n=0;n<t;n++){var s=e[n];s.f&I||(s.f^=I);var i=[];ur(s,i),cn(i)}}finally{he=r}}}function cn(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];if(!(n.f&(ge|j)))try{Fe(n)&&(Je(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?zt(n):n.fn=null))}catch(s){Qe(s,n,null,n.ctx)}}}function vn(){if(Ce=!1,pe>1001)return;const e=le;le=[],lr(e),Ce||(pe=0,Ae=null)}function ze(e){Pe===tr&&(Ce||(Ce=!0,queueMicrotask(vn))),Ae=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&($e|H)){if(!(r&I))return;t.f^=I}}le.push(t)}function ur(e,t){var r=e.first,n=[];e:for(;r!==null;){var s=r.f,i=(s&H)!==0,l=i&&(s&I)!==0,a=r.next;if(!l&&!(s&j))if(s&Ke){if(i)r.f^=I;else try{Fe(r)&&Je(r)}catch(o){Qe(o,r,null,r.ctx)}var f=r.first;if(f!==null){r=f;continue}}else s&Rt&&n.push(r);if(a===null){let o=r.parent;for(;o!==null;){if(e===o)break e;var u=o.next;if(u!==null){r=u;continue e}o=o.parent}}r=a}for(var c=0;c<n.length;c++)f=n[c],t.push(f),ur(f,t)}function Ve(e){var t=Pe,r=le;try{ir();const s=[];Pe=nn,le=s,Ce=!1,lr(r);var n=e==null?void 0:e();return tn(),(le.length>0||s.length>0)&&Ve(),pe=0,Ae=null,n}finally{Pe=t,le=r}}function y(e){var c;var t=e.f,r=(t&B)!==0;if(r&&t&ge){var n=Vt(e);return ht(e),n}if(E!==null){V!==null&&V.includes(e)&&Pr();var s=E.deps;k===null&&s!==null&&s[O]===e?O++:k===null?k=[e]:k.push(e),ee!==null&&$!==null&&$.f&I&&!($.f&H)&&ee.includes(e)&&(J($,re),ze($))}else if(r&&e.deps===null)for(var i=e,l=i.parent,a=i;l!==null;)if(l.f&B){var f=l;a=f,l=f.parent}else{var u=l;(c=u.deriveds)!=null&&c.includes(a)||(u.deriveds??(u.deriveds=[])).push(a);break}return r&&(i=e,Fe(i)&&Wt(i)),e.v}function ar(e){const t=E;try{return E=null,e()}finally{E=t}}const dn=~(re|ke|I);function J(e,t){e.f=e.f&dn|t}function gt(e,t=!1,r){F={p:F,c:null,e:null,m:!1,s:e,x:null,l:null}}function wt(e){const t=F;if(t!==null){e!==void 0&&(t.x=e);const l=t.e;if(l!==null){var r=$,n=E;t.e=null;try{for(var s=0;s<l.length;s++){var i=l[s];ne(i.effect),me(i.reaction),Kt(i.fn)}}finally{ne(r),me(n)}}F=t.p,t.m=!0}return e||{}}const _n=["touchstart","touchmove"];function hn(e){return _n.includes(e)}const pn=new Set,Nt=new Set;function Re(e){var h;var t=this,r=t.ownerDocument,n=e.type,s=((h=e.composedPath)==null?void 0:h.call(e))||[],i=s[0]||e.target,l=0,a=e.__root;if(a){var f=s.indexOf(a);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var u=s.indexOf(t);if(u===-1)return;f<=u&&(l=f)}if(i=s[l]||e.target,i!==t){Ue(e,"currentTarget",{configurable:!0,get(){return i||r}});var c=E,o=$;me(null),ne(null);try{for(var v,d=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var p=i["__"+n];if(p!==void 0&&!i.disabled)if(ut(p)){var[g,...m]=p;g.apply(i,[e,...m])}else p.call(i,e)}catch(w){v?d.push(w):v=w}if(e.cancelBubble||_===t||_===null)break;i=_}if(v){for(let w of d)queueMicrotask(()=>{throw w});throw v}}finally{e.__root=t,delete e.currentTarget,me(c),ne(o)}}}function mn(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function te(e,t){var r=$;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function z(e,t){var r=(t&Yr)!==0,n=(t&jr)!==0,s,i=!e.startsWith("<!>");return()=>{if(x)return te(b,null),b;s===void 0&&(s=mn(i?e:"<!>"+e),r||(s=oe(s)));var l=n?document.importNode(s,!0):s.cloneNode(!0);if(r){var a=oe(l),f=l.lastChild;te(a,f)}else te(l,l);return l}}function $n(e=""){if(!x){var t=ae(e+"");return te(t,t),t}var r=b;return r.nodeType!==3&&(r.before(r=ae()),U(r)),te(r,r),r}function gn(){if(x)return te(b,null),b;var e=document.createDocumentFragment(),t=document.createComment(""),r=ae();return e.append(t,r),te(t,r),e}function M(e,t){if(x){$.nodes_end=b,Ge();return}e!==null&&e.before(t)}function We(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function yt(e,t){return or(e,t)}function wn(e,t){nt(),t.intro=t.intro??!1;const r=t.target,n=x,s=b;try{for(var i=oe(r);i&&(i.nodeType!==8||i.data!==Pt);)i=se(i);if(!i)throw be;G(!0),U(i),Ge();const l=or(e,{...t,anchor:i});if(b===null||b.nodeType!==8||b.data!==vt)throw _t(),be;return G(!1),l}catch(l){if(l===be)return t.recover===!1&&Or(),nt(),Ht(r),G(!1),yt(e,t);throw l}finally{G(n),U(s)}}const ce=new Map;function or(e,{target:t,anchor:r,props:n={},events:s,context:i,intro:l=!0}){nt();var a=new Set,f=o=>{for(var v=0;v<o.length;v++){var d=o[v];if(!a.has(d)){a.add(d);var _=hn(d);t.addEventListener(d,Re,{passive:_});var p=ce.get(d);p===void 0?(document.addEventListener(d,Re,{passive:_}),ce.set(d,1)):ce.set(d,p+1)}}};f(at(pn)),Nt.add(f);var u=void 0,c=zr(()=>{var o=r??t.appendChild(ae());return Te(()=>{if(i){gt({});var v=F;v.c=i}s&&(n.$$events=s),x&&te(o,null),u=e(o,n)||{},x&&($.nodes_end=b),i&&wt()}),()=>{var _;for(var v of a){t.removeEventListener(v,Re);var d=ce.get(v);--d===0?(document.removeEventListener(v,Re),ce.delete(v)):ce.set(v,d)}Nt.delete(f),o!==r&&((_=o.parentNode)==null||_.removeChild(o))}});return lt.set(u,c),u}let lt=new WeakMap;function yn(e,t){const r=lt.get(e);return r?(lt.delete(e),r(t)):Promise.resolve()}function xe(e,t,r=!1){x&&Ge();var n=e,s=null,i=null,l=R,a=r?ft:0,f=!1;const u=(o,v=!0)=>{f=!0,c(v,o)},c=(o,v)=>{if(l===(l=o))return;let d=!1;if(x){const _=n.data===ct;!!l===_&&(n=rt(),U(n),G(!1),d=!0)}l?(s?Ye(s):v&&(s=Te(()=>v(n))),i&&He(i,()=>{i=null})):(i?Ye(i):v&&(i=Te(()=>v(n))),s&&He(s,()=>{s=null})),d&&G(!0)};pt(()=>{f=!1,t(u),f||c(null,null)},a),x&&(n=b)}function En(e,t){return t}function bn(e,t,r,n){for(var s=[],i=t.length,l=0;l<i;l++)mt(t[l].e,s,!0);var a=i>0&&s.length===0&&r!==null;if(a){var f=r.parentNode;Ht(f),f.append(r),n.clear(),Z(e,t[0].prev,t[i-1].next)}Xt(s,()=>{for(var u=0;u<i;u++){var c=t[u];a||(n.delete(c.k),Z(e,c.prev,c.next)),Q(c.e,!a)}})}function xn(e,t,r,n,s,i=null){var l=e,a={flags:t,items:new Map,first:null};{var f=e;l=x?U(oe(f)):f.appendChild(ae())}x&&Ge();var u=null,c=!1;pt(()=>{var o=r(),v=ut(o)?o:o==null?[]:at(o),d=v.length;if(c&&d===0)return;c=d===0;let _=!1;if(x){var p=l.data===ct;p!==(d===0)&&(l=rt(),U(l),G(!1),_=!0)}if(x){for(var g=null,m,h=0;h<d;h++){if(b.nodeType===8&&b.data===vt){l=b,_=!0,G(!1);break}var w=v[h],Y=n(w,h);m=fr(b,a,g,null,w,Y,h,s,t),a.items.set(Y,m),g=m}d>0&&U(rt())}if(!x){var T=E;Tn(v,a,l,s,t,(T.f&j)!==0,n)}i!==null&&(d===0?u?Ye(u):u=Te(()=>i(l)):u!==null&&He(u,()=>{u=null})),_&&G(!0),r()}),x&&(l=b)}function Tn(e,t,r,n,s,i,l,a){var f=e.length,u=t.items,c=t.first,o=c,v,d=null,_=[],p=[],g,m,h,w;for(w=0;w<f;w+=1){if(g=e[w],m=l(g,w),h=u.get(m),h===void 0){var Y=o?o.e.nodes_start:r;d=fr(Y,t,d,d===null?t.first:d.next,g,m,w,n,s),u.set(m,d),_=[],p=[],o=d.next;continue}if(Cn(h,g,w),h.e.f&j&&Ye(h.e),h!==o){if(v!==void 0&&v.has(h)){if(_.length<p.length){var T=p[0],C;d=T.prev;var X=_[0],ye=_[_.length-1];for(C=0;C<_.length;C+=1)kt(_[C],T,r);for(C=0;C<p.length;C+=1)v.delete(p[C]);Z(t,X.prev,ye.next),Z(t,d,X),Z(t,ye,T),o=T,d=ye,w-=1,_=[],p=[]}else v.delete(h),kt(h,o,r),Z(t,h.prev,h.next),Z(t,h,d===null?t.first:d.next),Z(t,d,h),d=h;continue}for(_=[],p=[];o!==null&&o.k!==m;)(i||!(o.e.f&j))&&(v??(v=new Set)).add(o),p.push(o),o=o.next;if(o===null)continue;h=o}_.push(h),d=h,o=h.next}if(o!==null||v!==void 0){for(var Ee=v===void 0?[]:at(v);o!==null;)(i||!(o.e.f&j))&&Ee.push(o),o=o.next;var Xe=Ee.length;if(Xe>0){var N=f===0?r:null;bn(t,Ee,N,u)}}$.first=t.first&&t.first.e,$.last=d&&d.e}function Cn(e,t,r,n){Mt(e.v,t),e.i=r}function fr(e,t,r,n,s,i,l,a,f,u){var c=(f&qr)!==0,o=(f&Br)===0,v=c?o?dt(s):P(s):s,d=f&Ur?P(l):l,_={i:d,v,k:i,a:null,e:null,prev:r,next:n};try{return _.e=Te(()=>a(e,v,d),x),_.e.prev=r&&r.e,_.e.next=n&&n.e,r===null?t.first=_:(r.next=_,r.e.next=_.e),n!==null&&(n.prev=_,n.e.prev=_.e),_}finally{}}function kt(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==n;){var l=se(i);s.before(i),i=l}}function Z(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function cr(e,t){en(()=>{var r=e.getRootNode(),n=r.host?r:r.head??r.ownerDocument.head;if(!n.querySelector("#"+t.hash)){const s=document.createElement("style");s.id=t.hash,s.textContent=t.code,n.appendChild(s)}})}function An(e,t){var r=e.__className,n=Nn(t);x&&e.className===n?e.__className=n:(r!==n||x&&e.className!==n)&&(t==null?e.removeAttribute("class"):e.className=n,e.__className=n)}function Nn(e){return e??""}function kn(e){for(var t=$,r=$;t!==null&&!(t.f&(H|$e));)t=t.parent;try{return ne(t),e()}finally{ne(r)}}function Ft(e,t,r,n){var Y;var s=!Lt,i=(r&Hr)!==0,l=!1,a;a=e[t];var f=Oe in e||It in e,u=((Y=ue(e,t))==null?void 0:Y.set)??(f&&i&&t in e?T=>e[t]=T:void 0),c=n,o=!0,v=!1,d=()=>(v=!0,o&&(o=!1,c=n),c);a===void 0&&n!==void 0&&(u&&s&&Ir(),a=d(),u&&u(a));var _;if(_=()=>{var T=e[t];return T===void 0?d():(o=!0,v=!1,T)},u){var p=e.$$legacy;return function(T,C){return arguments.length>0?((!C||p||l)&&u(C?_():T),T):_()}}var g=!1,m=!1,h=dt(a),w=kn(()=>Yt(()=>{var T=_(),C=y(h);return g?(g=!1,m=!0,C):(m=!1,h.v=T)}));return function(T,C){if(arguments.length>0){const X=C?y(w):T;return w.equals(X)||(g=!0,A(h,X),v&&c!==void 0&&(c=X),ar(()=>y(w))),T}return y(w)}}function Fn(e){return new Sn(e)}var K,L;class Sn{constructor(t){Ze(this,K);Ze(this,L);var i;var r=new Map,n=(l,a)=>{var f=dt(a);return r.set(l,f),f};const s=new Proxy({...t.props||{},$$events:{}},{get(l,a){return y(r.get(a)??n(a,Reflect.get(l,a)))},has(l,a){return a===It?!0:(y(r.get(a)??n(a,Reflect.get(l,a))),Reflect.has(l,a))},set(l,a,f){return A(r.get(a)??n(a,f),f),Reflect.set(l,a,f)}});et(this,L,(t.hydrate?wn:yt)(t.component,{target:t.target,anchor:t.anchor,props:s,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((i=t==null?void 0:t.props)!=null&&i.$$host)||t.sync===!1)&&Ve(),et(this,K,s.$$events);for(const l of Object.keys(S(this,L)))l==="$set"||l==="$destroy"||l==="$on"||Ue(this,l,{get(){return S(this,L)[l]},set(a){S(this,L)[l]=a},enumerable:!0});S(this,L).$set=l=>{Object.assign(s,l)},S(this,L).$destroy=()=>{yn(S(this,L))}}$set(t){S(this,L).$set(t)}$on(t,r){S(this,K)[t]=S(this,K)[t]||[];const n=(...s)=>r.call(this,...s);return S(this,K)[t].push(n),()=>{S(this,K)[t]=S(this,K)[t].filter(s=>s!==n)}}$destroy(){S(this,L).$destroy()}}K=new WeakMap,L=new WeakMap;let vr;typeof HTMLElement=="function"&&(vr=class extends HTMLElement{constructor(t,r,n){super();D(this,"$$ctor");D(this,"$$s");D(this,"$$c");D(this,"$$cn",!1);D(this,"$$d",{});D(this,"$$r",!1);D(this,"$$p_d",{});D(this,"$$l",{});D(this,"$$l_u",new Map);D(this,"$$me");this.$$ctor=t,this.$$s=r,n&&this.attachShadow({mode:"open"})}addEventListener(t,r,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(r),this.$$c){const s=this.$$c.$on(t,r);this.$$l_u.set(r,s)}super.addEventListener(t,r,n)}removeEventListener(t,r,n){if(super.removeEventListener(t,r,n),this.$$c){const s=this.$$l_u.get(r);s&&(s(),this.$$l_u.delete(r))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let r=function(i){return l=>{const a=document.createElement("slot");i!=="default"&&(a.name=i),M(l,a)}};var t=r;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},s=Rn(this);for(const i of this.$$s)i in s&&(i==="default"&&!this.$$d.children?(this.$$d.children=r(i),n.default=!0):n[i]=r(i));for(const i of this.attributes){const l=this.$$g_p(i.name);l in this.$$d||(this.$$d[l]=Me(l,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=Fn({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=Jr(()=>{Xr(()=>{var i;this.$$r=!0;for(const l of qe(this.$$c)){if(!((i=this.$$p_d[l])!=null&&i.reflect))continue;this.$$d[l]=this.$$c[l];const a=Me(l,this.$$d[l],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[l].attribute||l):this.setAttribute(this.$$p_d[l].attribute||l,a)}this.$$r=!1})});for(const i in this.$$l)for(const l of this.$$l[i]){const a=this.$$c.$on(i,l);this.$$l_u.set(l,a)}this.$$l={}}}attributeChangedCallback(t,r,n){var s;this.$$r||(t=this.$$g_p(t),this.$$d[t]=Me(t,n,this.$$p_d,"toProp"),(s=this.$$c)==null||s.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return qe(this.$$p_d).find(r=>this.$$p_d[r].attribute===t||!this.$$p_d[r].attribute&&r.toLowerCase()===t)||t}});function Me(e,t,r,n){var i;const s=(i=r[e])==null?void 0:i.type;if(t=s==="Boolean"&&typeof t!="boolean"?t!=null:t,!n||!r[e])return t;if(n==="toAttribute")switch(s){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(s){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Rn(e){const t={};return e.childNodes.forEach(r=>{t[r.slot||"default"]=!0}),t}function dr(e,t,r,n,s,i){let l=class extends vr{constructor(){super(e,r,s),this.$$p_d=t}static get observedAttributes(){return qe(t).map(a=>(t[a].attribute||a).toLowerCase())}};return qe(t).forEach(a=>{Ue(l.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(f){var o;f=Me(a,f,t),this.$$d[a]=f;var u=this.$$c;if(u){var c=(o=ue(u,a))==null?void 0:o.get;c?u[a]=f:u.$set({[a]:f})}}})}),n.forEach(a=>{Ue(l.prototype,a,{get(){var f;return(f=this.$$c)==null?void 0:f[a]}})}),e.element=l,l}function On(e){F===null&&rn(),Qr(()=>{const t=ar(e);if(typeof t=="function")return t})}const In="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(In);class Dn{constructor(t){D(this,"baseURL");this.baseURL=t||"https://tma-backend-production.up.railway.app"}async request(t,r,n){var a,f;const s=`${this.baseURL}${t}`,i=((f=(a=window.Telegram)==null?void 0:a.WebApp)==null?void 0:f.initData)||"query_id=AAG0QsUNAAAAALRCxQ3ED1jC&user=%7B%22id%22%3A231031476%2C%22first_name%22%3A%22Ian%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22cxrtisxl%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FD9_SrswjNHT6niKwI3WCD10Q8k_ifGLNM7B1xcgbF6o.svg%22%7D&auth_date=1734492482&signature=nmAKlwLVumv4milkYYWcQUvjgn7sgBJi3P85uMCXkWRiNEnvJl5LMSJ5fLYQ4XSF3GqLcSMWbhc5mUERaZwcCQ&hash=855372d9649447386615c038ee32c7219d062268f3ab4f6c2043c1351cb3816b",l={method:r,headers:{"Content-Type":"application/json","X-Telegram-Init-Data":i||""},body:n?JSON.stringify(n):void 0};try{const u=await fetch(s,l);if(!u.ok){const c=await u.json();throw new Error(`Error ${u.status}: ${c.message||u.statusText}`)}return await u.json()}catch(u){throw console.error("API Client Error:",u),u}}get(t){return this.request(t,"GET")}post(t,r){return this.request(t,"POST",r)}put(t,r){return this.request(t,"PUT",r)}delete(t){return this.request(t,"DELETE")}}var Ln=z("<span> </span> ",1),Pn=z('<br class="svelte-1xmrdks">'),Mn=z('<span class="cursor svelte-1xmrdks">_</span>'),qn=z('<div class="log-message svelte-1xmrdks"><!> <!> <!></div>'),Un=z('<div class="console svelte-1xmrdks"></div>');const Bn={hash:"svelte-1xmrdks",code:`.console.svelte-1xmrdks {background-color:#000;color:#fff;font-family:'Courier New', monospace;padding:1rem;overflow-y:auto;height:100%;}.prefix-info.svelte-1xmrdks {color:#00FFFF;text-shadow:0 0 8px #00FFFF, 0 0 16px #00DBDB;}.prefix-error.svelte-1xmrdks {color:#FF073A;text-shadow:0 0 8px #FF073A, 0 0 16px #FF4671;}.prefix-warning.svelte-1xmrdks, .prefix-reminder.svelte-1xmrdks {color:#FFD700;text-shadow:0 0 8px #FFD700, 0 0 16px #FFC83D;}.prefix-success.svelte-1xmrdks, .prefix-welcome.svelte-1xmrdks {color:#00FF00;text-shadow:0 0 8px #00FF00, 0 0 16px #00B700;}.log-message.svelte-1xmrdks {line-height:1.5;}.cursor.svelte-1xmrdks {display:inline-block;color:#00FFFF;font-weight:bold;
    animation: svelte-1xmrdks-blink 1s step-start infinite;}

  @keyframes svelte-1xmrdks-blink {
    50% {
      opacity: 0;
    }
  }`};function _r(e,t){gt(t,!0),cr(e,Bn);let r=Ft(t,"username",7),n=Ft(t,"coldstart",7),s=ve(q([])),i,l=[],a=!1,f=ve(null);function u(_,p,g=0){l.push(()=>o(_,p,g)),c()}async function c(){if(!a){for(a=!0;l.length>0;){const _=l.shift();_&&await _()}a=!1,A(f,null)}}async function o(_,p,g){g>0&&await new Promise(m=>setTimeout(m,g)),A(s,q([...y(s),{messageType:_,message:p,currentText:""}])),A(f,y(s).length-1),await v(y(s).length-1)}function v(_){return new Promise(p=>{const{messageType:g,message:m}=y(s)[_];let h=0;i=setInterval(()=>{h<m.length?(y(s)[_]={messageType:g,message:m,currentText:y(s)[_].currentText+m[h]},h++):(clearInterval(i),p())},50)})}On(()=>{n()?(u("INFO","Initializing Raider Terminal v2.077...",1e3),u("INFO","Checking system integrity...",1500),u("WARNING","Detected unauthorized access attempts: 2",1e3),u("INFO","Loading security protocols...",0),u("ERROR","Neural interface synchronization failed!",3e3),u("INFO","Attempting backup connection...",0),u("SUCCESS","Terminal synchronized",5e3),u("",".",500),u("",".",500),u("",".",500)):(u("INFO","Establishing a connection...",1e3),u("SUCCESS","Terminal synchronized",2e3),u("",".",500),u("",".",500),u("",".",500)),u("WELCOME",`Welcome, ${r()}!`,1e3),u("","",500),u("","Your console is live. New raids, challenges, and loot drops incoming.",1e3),u("","",0),u("REMINDER","Slow raiders get left behind.",0)});var d=Un();return xn(d,21,()=>y(s),En,(_,p,g)=>{let m=()=>y(p).messageType,h=()=>y(p).currentText;var w=qn(),Y=de(w);{var T=N=>{var W=Ln(),Se=st(W);const pr=Yt(()=>`${`prefix-${m().toLowerCase()}`??""} svelte-1xmrdks`);var mr=de(Se);De(()=>We(mr,`[${m().toUpperCase()??""}]`)),ie(Se);var $r=Ie(Se,1,!0);$r.nodeValue=" ",De(()=>An(Se,y(pr))),M(N,W)};xe(Y,N=>{m()&&N(T)})}var C=Ie(Y,2);{var X=N=>{var W=$n();De(()=>We(W,h())),M(N,W)},ye=N=>{var W=Pn();M(N,W)};xe(C,N=>{h()?N(X):N(ye,!1)})}var Ee=Ie(C,2);{var Xe=N=>{var W=Mn();M(N,W)};xe(Ee,N=>{y(f)===g&&N(Xe)})}ie(w),M(_,w)}),ie(d),M(e,d),wt({log:u,get username(){return r()},set username(_){r(_),Ve()},get coldstart(){return n()},set coldstart(_){n(_),Ve()}})}dr(_r,{username:{},coldstart:{}},[],["log"],!0);var Hn=z('<p class="text-red-500"> </p> <br> <p class="text-red-500"> </p>',1),Yn=z('<div class="h-full"><!></div>'),jn=z("<p>...</p>"),Vn=z('<div class="w-[100vw] h-[100vh] overflow-x-hidden"><!></div>');const Wn={hash:"svelte-32ttx",code:""};function hr(e,t){gt(t,!0),cr(e,Wn);const r=new Dn;let n=ve(!1),s=ve(void 0),i=ve(null),l=ve(null);(async()=>{try{A(s,q(await r.get("/usesr")))}catch(v){A(i,q(v instanceof Error?`${v.message}
${v.stack}`:String(v))),A(n,!0);try{A(s,q(await r.post("/usewr",{})))}catch(d){A(l,q(d instanceof Error?`${d.message}
${d.stack}`:String(d)))}}})();var f=Vn(),u=de(f);{var c=v=>{var d=Hn(),_=st(d),p=de(_);ie(_);var g=Ie(_,4),m=de(g);ie(g),De(()=>{We(p,`1: ${y(i)??""}`),We(m,`2: ${y(l)??""}`)}),M(v,d)},o=v=>{var d=gn(),_=st(d);{var p=m=>{var h=Yn(),w=de(h);_r(w,{get username(){return y(s).username},get coldstart(){return y(n)}}),ie(h),M(m,h)},g=m=>{var h=jn();M(m,h)};xe(_,m=>{y(s)?m(p):m(g,!1)},!0)}M(v,d)};xe(u,v=>{y(i)||y(l)?v(c):v(o,!1)})}ie(f),M(e,f),wt()}dr(hr,{},[],[],!0);yt(hr,{target:document.getElementById("app")});
