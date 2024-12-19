var mr=Object.defineProperty;var wt=e=>{throw TypeError(e)};var gr=(e,t,r)=>t in e?mr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var D=(e,t,r)=>gr(e,typeof t!="symbol"?t+"":t,r),yt=(e,t,r)=>t.has(e)||wt("Cannot "+r);var R=(e,t,r)=>(yt(e,t,"read from private field"),r?r.call(e):t.get(e)),Je=(e,t,r)=>t.has(e)?wt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ze=(e,t,r,n)=>(yt(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const kt=!1;var it=Array.isArray,lt=Array.from,De=Object.keys,Le=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,wr=Object.prototype,yr=Array.prototype,Er=Object.getPrototypeOf;function br(e){for(var t=0;t<e.length;t++)e[t]()}const q=2,Rt=4,je=8,ut=16,U=32,he=64,et=128,ue=256,Pe=512,I=1024,ee=2048,Te=4096,H=8192,pe=16384,xr=32768,ot=65536,Cr=1<<19,Ot=1<<20,ke=Symbol("$state"),St=Symbol("legacy props");function It(e){return e===this.v}function Tr(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Nr(e){return!Tr(e,this.v)}function Ar(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Fr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function kr(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Rr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Or(){throw new Error("https://svelte.dev/e/hydration_failed")}function Sr(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ir(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Dr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Lr(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Pr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Dt=!1;const Mr=1,qr=2,Ur=16,Br=8,Yr=1,Hr=2,Lt="[",at="[!",ft="]",we={},O=Symbol();function P(e,t){var r={f:0,v:e,reactions:null,equals:It,version:0};return r}function Me(e){return jr(P(e))}function ct(e,t=!1){const r=P(e);return t||(r.equals=Nr),r}function jr(e){return y!==null&&y.f&q&&(j===null?sn([e]):j.push(e)),e}function F(e,t){return y!==null&&un()&&y.f&(q|ut)&&(j===null||!j.includes(e))&&Pr(),Pt(e,t)}function Pt(e,t){return e.equals(t)||(e.v=t,e.version=rr(),Mt(e,ee),$!==null&&$.f&I&&!($.f&U)&&(A!==null&&A.includes(e)?(J($,ee),Ge($)):Z===null?ln([e]):Z.push(e))),t}function Mt(e,t){var r=e.reactions;if(r!==null)for(var n=r.length,s=0;s<n;s++){var i=r[s],l=i.f;l&ee||(J(i,t),l&(I|ue)&&(l&q?Mt(i,Te):Ge(i)))}}function vt(e){console.warn("https://svelte.dev/e/hydration_mismatch")}let b=!1;function G(e){b=e}let x;function M(e){if(e===null)throw vt(),we;return x=e}function Ve(){return M(re(x))}function ye(e){if(b){if(re(x)!==null)throw vt(),we;x=e}}function tt(){for(var e=0,t=x;;){if(t.nodeType===8){var r=t.data;if(r===ft){if(e===0)return t;e-=1}else(r===Lt||r===at)&&(e+=1)}var n=re(t);t.remove(),t=n}}function K(e,t=null,r){if(typeof e!="object"||e===null||ke in e)return e;const n=Er(e);if(n!==wr&&n!==yr)return e;var s=new Map,i=it(e),l=P(0);i&&s.set("length",P(e.length));var a;return new Proxy(e,{defineProperty(f,u,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Ir();var o=s.get(u);return o===void 0?(o=P(c.value),s.set(u,o)):F(o,K(c.value,a)),!0},deleteProperty(f,u){var c=s.get(u);if(c===void 0)u in f&&s.set(u,P(O));else{if(i&&typeof u=="string"){var o=s.get("length"),v=Number(u);Number.isInteger(v)&&v<o.v&&F(o,v)}F(c,O),Et(l)}return!0},get(f,u,c){var _;if(u===ke)return e;var o=s.get(u),v=u in f;if(o===void 0&&(!v||(_=ie(f,u))!=null&&_.writable)&&(o=P(K(v?f[u]:O,a)),s.set(u,o)),o!==void 0){var d=E(o);return d===O?void 0:d}return Reflect.get(f,u,c)},getOwnPropertyDescriptor(f,u){var c=Reflect.getOwnPropertyDescriptor(f,u);if(c&&"value"in c){var o=s.get(u);o&&(c.value=E(o))}else if(c===void 0){var v=s.get(u),d=v==null?void 0:v.v;if(v!==void 0&&d!==O)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return c},has(f,u){var d;if(u===ke)return!0;var c=s.get(u),o=c!==void 0&&c.v!==O||Reflect.has(f,u);if(c!==void 0||$!==null&&(!o||(d=ie(f,u))!=null&&d.writable)){c===void 0&&(c=P(o?K(f[u],a):O),s.set(u,c));var v=E(c);if(v===O)return!1}return o},set(f,u,c,o){var m;var v=s.get(u),d=u in f;if(i&&u==="length")for(var _=c;_<v.v;_+=1){var p=s.get(_+"");p!==void 0?F(p,O):_ in f&&(p=P(O),s.set(_+"",p))}v===void 0?(!d||(m=ie(f,u))!=null&&m.writable)&&(v=P(void 0),F(v,K(c,a)),s.set(u,v)):(d=v.v!==O,F(v,K(c,a)));var g=Reflect.getOwnPropertyDescriptor(f,u);if(g!=null&&g.set&&g.set.call(o,c),!d){if(i&&typeof u=="string"){var w=s.get("length"),h=Number(u);Number.isInteger(h)&&h>=w.v&&F(w,h+1)}Et(l)}return!0},ownKeys(f){E(l);var u=Reflect.ownKeys(f).filter(v=>{var d=s.get(v);return d===void 0||d.v!==O});for(var[c,o]of s)o.v!==O&&!(c in f)&&u.push(c);return u},setPrototypeOf(){Dr()}})}function Et(e,t=1){F(e,e.v+t)}var bt,qt,Ut;function rt(){if(bt===void 0){bt=window;var e=Element.prototype,t=Node.prototype;qt=ie(t,"firstChild").get,Ut=ie(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function de(e=""){return document.createTextNode(e)}function le(e){return qt.call(e)}function re(e){return Ut.call(e)}function qe(e,t){if(!b)return le(e);var r=le(x);return r===null&&(r=x.appendChild(de())),M(r),r}function Vr(e,t){if(!b){var r=le(e);return r instanceof Comment&&r.data===""?re(r):r}return x}function Xe(e,t=1,r=!1){let n=b?x:e;for(var s;t--;)s=n,n=re(n);if(!b)return n;var i=n==null?void 0:n.nodeType;if(r&&i!==3){var l=de();return n===null?s==null||s.after(l):n.before(l),M(l),l}return M(n),n}function Bt(e){e.textContent=""}function Yt(e){var t=q|ee;$===null?t|=ue:$.f|=Ot;var r=y!==null&&y.f&q?y:null;const n={children:null,ctx:k,deps:null,equals:It,f:t,fn:e,reactions:null,v:null,version:0,parent:r??$};return r!==null&&(r.children??(r.children=[])).push(n),n}function Ht(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&q?dt(n):Q(n)}}}function Wr(e){for(var t=e.parent;t!==null;){if(!(t.f&q))return t;t=t.parent}return null}function jt(e){var t,r=$;te(Wr(e));try{Ht(e),t=nr(e)}finally{te(r)}return t}function Vt(e){var t=jt(e),r=(ae||e.f&ue)&&e.deps!==null?Te:I;J(e,r),e.equals(t)||(e.v=t,e.version=rr())}function dt(e){Ht(e),Ce(e,0),J(e,pe),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Kr(e){$===null&&y===null&&kr(),y!==null&&y.f&ue&&Fr(),pt&&Ar()}function Gr(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function $e(e,t,r,n=!0){var s=(e&he)!==0,i=$,l={ctx:k,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|ee,first:null,fn:t,last:null,next:null,parent:s?null:i,prev:null,teardown:null,transitions:null,version:0};if(r){var a=fe;try{xt(!0),Ke(l),l.f|=xr}catch(c){throw Q(l),c}finally{xt(a)}}else t!==null&&Ge(l);var f=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&Ot)===0;if(!f&&!s&&n&&(i!==null&&Gr(l,i),y!==null&&y.f&q)){var u=y;(u.children??(u.children=[])).push(l)}return l}function Qr(e){Kr();var t=$!==null&&($.f&U)!==0&&k!==null&&!k.m;if(t){var r=k;(r.e??(r.e=[])).push({fn:e,effect:$,reaction:y})}else{var n=Wt(e);return n}}function Jr(e){const t=$e(he,e,!0);return()=>{Q(t)}}function zr(e){const t=$e(he,e,!0);return(r={})=>new Promise(n=>{r.outro?Ue(t,()=>{Q(t),n(void 0)}):(Q(t),n(void 0))})}function Wt(e){return $e(Rt,e,!1)}function Xr(e){return $e(je,e,!0)}function Ze(e){return _t(e)}function _t(e,t=0){return $e(je|ut|t,e,!0)}function Ee(e,t=!0){return $e(je|U,e,!0,t)}function Kt(e){var t=e.teardown;if(t!==null){const r=pt,n=y;Ct(!0),_e(null);try{t.call(null)}finally{Ct(r),_e(n)}}}function Gt(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)dt(t[r])}}function Qt(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;Q(r,t),r=n}}function Zr(e){for(var t=e.first;t!==null;){var r=t.next;t.f&U||Q(t),t=r}}function Q(e,t=!0){var r=!1;if((t||e.f&Cr)&&e.nodes_start!==null){for(var n=e.nodes_start,s=e.nodes_end;n!==null;){var i=n===s?null:re(n);n.remove(),n=i}r=!0}Qt(e,t&&!r),Gt(e),Ce(e,0),J(e,pe);var l=e.transitions;if(l!==null)for(const f of l)f.stop();Kt(e);var a=e.parent;a!==null&&a.first!==null&&Jt(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Jt(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Ue(e,t){var r=[];ht(e,r,!0),zt(r,()=>{Q(e),t&&t()})}function zt(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function ht(e,t,r){if(!(e.f&H)){if(e.f^=H,e.transitions!==null)for(const l of e.transitions)(l.is_global||r)&&t.push(l);for(var n=e.first;n!==null;){var s=n.next,i=(n.f&ot)!==0||(n.f&U)!==0;ht(n,t,i?r:!1),n=s}}}function Be(e){Xt(e,!0)}function Xt(e,t){if(e.f&H){Ne(e)&&Ke(e),e.f^=H;for(var r=e.first;r!==null;){var n=r.next,s=(r.f&ot)!==0||(r.f&U)!==0;Xt(r,s?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let Ye=!1,nt=[];function Zt(){Ye=!1;const e=nt.slice();nt=[],br(e)}function en(e){Ye||(Ye=!0,queueMicrotask(Zt)),nt.push(e)}function tn(){Ye&&Zt()}function rn(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const er=0,nn=1;let Re=!1,Oe=er,be=!1,xe=null,fe=!1,pt=!1;function xt(e){fe=e}function Ct(e){pt=e}let se=[],ce=0;let y=null;function _e(e){y=e}let $=null;function te(e){$=e}let j=null;function sn(e){j=e}let A=null,S=0,Z=null;function ln(e){Z=e}let tr=0,ae=!1,k=null;function rr(){return++tr}function un(){return!Dt}function Ne(e){var l,a;var t=e.f;if(t&ee)return!0;if(t&Te){var r=e.deps,n=(t&ue)!==0;if(r!==null){var s;if(t&Pe){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(e);e.f^=Pe}for(s=0;s<r.length;s++){var i=r[s];if(Ne(i)&&Vt(i),n&&$!==null&&!ae&&!((a=i==null?void 0:i.reactions)!=null&&a.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}n||J(e,I)}return!1}function on(e,t){for(var r=t;r!==null;){if(r.f&et)try{r.fn(e);return}catch{r.f^=et}r=r.parent}throw Re=!1,e}function an(e){return(e.f&pe)===0&&(e.parent===null||(e.parent.f&et)===0)}function We(e,t,r,n){if(Re){if(r===null&&(Re=!1),an(t))throw e;return}r!==null&&(Re=!0);{on(e,t);return}}function nr(e){var v;var t=A,r=S,n=Z,s=y,i=ae,l=j,a=k,f=e.f;A=null,S=0,Z=null,y=f&(U|he)?null:e,ae=!fe&&(f&ue)!==0,j=null,k=e.ctx;try{var u=(0,e.fn)(),c=e.deps;if(A!==null){var o;if(Ce(e,S),c!==null&&S>0)for(c.length=S+A.length,o=0;o<A.length;o++)c[S+o]=A[o];else e.deps=c=A;if(!ae)for(o=S;o<c.length;o++)((v=c[o]).reactions??(v.reactions=[])).push(e)}else c!==null&&S<c.length&&(Ce(e,S),c.length=S);return u}finally{A=t,S=r,Z=n,y=s,ae=i,j=l,k=a}}function fn(e,t){let r=t.reactions;if(r!==null){var n=r.indexOf(e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&t.f&q&&(A===null||!A.includes(t))&&(J(t,Te),t.f&(ue|Pe)||(t.f^=Pe),Ce(t,0))}function Ce(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)fn(e,r[n])}function Ke(e){var t=e.f;if(!(t&pe)){J(e,I);var r=$,n=k;$=e;try{t&ut?Zr(e):Qt(e),Gt(e),Kt(e);var s=nr(e);e.teardown=typeof s=="function"?s:null,e.version=tr}catch(i){We(i,e,r,n||e.ctx)}finally{$=r}}}function sr(){if(ce>1e3){ce=0;try{Rr()}catch(e){if(xe!==null)We(e,xe,null);else throw e}}ce++}function ir(e){var t=e.length;if(t!==0){sr();var r=fe;fe=!0;try{for(var n=0;n<t;n++){var s=e[n];s.f&I||(s.f^=I);var i=[];lr(s,i),cn(i)}}finally{fe=r}}}function cn(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];if(!(n.f&(pe|H)))try{Ne(n)&&(Ke(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Jt(n):n.fn=null))}catch(s){We(s,n,null,n.ctx)}}}function vn(){if(be=!1,ce>1001)return;const e=se;se=[],ir(e),be||(ce=0,xe=null)}function Ge(e){Oe===er&&(be||(be=!0,queueMicrotask(vn))),xe=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(he|U)){if(!(r&I))return;t.f^=I}}se.push(t)}function lr(e,t){var r=e.first,n=[];e:for(;r!==null;){var s=r.f,i=(s&U)!==0,l=i&&(s&I)!==0,a=r.next;if(!l&&!(s&H))if(s&je){if(i)r.f^=I;else try{Ne(r)&&Ke(r)}catch(o){We(o,r,null,r.ctx)}var f=r.first;if(f!==null){r=f;continue}}else s&Rt&&n.push(r);if(a===null){let o=r.parent;for(;o!==null;){if(e===o)break e;var u=o.next;if(u!==null){r=u;continue e}o=o.parent}}r=a}for(var c=0;c<n.length;c++)f=n[c],t.push(f),lr(f,t)}function He(e){var t=Oe,r=se;try{sr();const s=[];Oe=nn,se=s,be=!1,ir(r);var n=e==null?void 0:e();return tn(),(se.length>0||s.length>0)&&He(),ce=0,xe=null,n}finally{Oe=t,se=r}}function E(e){var c;var t=e.f,r=(t&q)!==0;if(r&&t&pe){var n=jt(e);return dt(e),n}if(y!==null){j!==null&&j.includes(e)&&Lr();var s=y.deps;A===null&&s!==null&&s[S]===e?S++:A===null?A=[e]:A.push(e),Z!==null&&$!==null&&$.f&I&&!($.f&U)&&Z.includes(e)&&(J($,ee),Ge($))}else if(r&&e.deps===null)for(var i=e,l=i.parent,a=i;l!==null;)if(l.f&q){var f=l;a=f,l=f.parent}else{var u=l;(c=u.deriveds)!=null&&c.includes(a)||(u.deriveds??(u.deriveds=[])).push(a);break}return r&&(i=e,Ne(i)&&Vt(i)),e.v}function ur(e){const t=y;try{return y=null,e()}finally{y=t}}const dn=~(ee|Te|I);function J(e,t){e.f=e.f&dn|t}function $t(e,t=!1,r){k={p:k,c:null,e:null,m:!1,s:e,x:null,l:null}}function mt(e){const t=k;if(t!==null){e!==void 0&&(t.x=e);const l=t.e;if(l!==null){var r=$,n=y;t.e=null;try{for(var s=0;s<l.length;s++){var i=l[s];te(i.effect),_e(i.reaction),Wt(i.fn)}}finally{te(r),_e(n)}}k=t.p,t.m=!0}return e||{}}const _n=["touchstart","touchmove"];function hn(e){return _n.includes(e)}const pn=new Set,Tt=new Set;function Fe(e){var h;var t=this,r=t.ownerDocument,n=e.type,s=((h=e.composedPath)==null?void 0:h.call(e))||[],i=s[0]||e.target,l=0,a=e.__root;if(a){var f=s.indexOf(a);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var u=s.indexOf(t);if(u===-1)return;f<=u&&(l=f)}if(i=s[l]||e.target,i!==t){Le(e,"currentTarget",{configurable:!0,get(){return i||r}});var c=y,o=$;_e(null),te(null);try{for(var v,d=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var p=i["__"+n];if(p!==void 0&&!i.disabled)if(it(p)){var[g,...w]=p;g.apply(i,[e,...w])}else p.call(i,e)}catch(m){v?d.push(m):v=m}if(e.cancelBubble||_===t||_===null)break;i=_}if(v){for(let m of d)queueMicrotask(()=>{throw m});throw v}}finally{e.__root=t,delete e.currentTarget,_e(c),te(o)}}}function $n(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function ve(e,t){var r=$;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ne(e,t){var r=(t&Yr)!==0,n=(t&Hr)!==0,s,i=!e.startsWith("<!>");return()=>{if(b)return ve(x,null),x;s===void 0&&(s=$n(i?e:"<!>"+e),r||(s=le(s)));var l=n?document.importNode(s,!0):s.cloneNode(!0);if(r){var a=le(l),f=l.lastChild;ve(a,f)}else ve(l,l);return l}}function mn(e=""){if(!b){var t=de(e+"");return ve(t,t),t}var r=x;return r.nodeType!==3&&(r.before(r=de()),M(r)),ve(r,r),r}function Y(e,t){if(b){$.nodes_end=x,Ve();return}e!==null&&e.before(t)}function Nt(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function gt(e,t){return or(e,t)}function gn(e,t){rt(),t.intro=t.intro??!1;const r=t.target,n=b,s=x;try{for(var i=le(r);i&&(i.nodeType!==8||i.data!==Lt);)i=re(i);if(!i)throw we;G(!0),M(i),Ve();const l=or(e,{...t,anchor:i});if(x===null||x.nodeType!==8||x.data!==ft)throw vt(),we;return G(!1),l}catch(l){if(l===we)return t.recover===!1&&Or(),rt(),Bt(r),G(!1),gt(e,t);throw l}finally{G(n),M(s)}}const oe=new Map;function or(e,{target:t,anchor:r,props:n={},events:s,context:i,intro:l=!0}){rt();var a=new Set,f=o=>{for(var v=0;v<o.length;v++){var d=o[v];if(!a.has(d)){a.add(d);var _=hn(d);t.addEventListener(d,Fe,{passive:_});var p=oe.get(d);p===void 0?(document.addEventListener(d,Fe,{passive:_}),oe.set(d,1)):oe.set(d,p+1)}}};f(lt(pn)),Tt.add(f);var u=void 0,c=zr(()=>{var o=r??t.appendChild(de());return Ee(()=>{if(i){$t({});var v=k;v.c=i}s&&(n.$$events=s),b&&ve(o,null),u=e(o,n)||{},b&&($.nodes_end=x),i&&mt()}),()=>{var _;for(var v of a){t.removeEventListener(v,Fe);var d=oe.get(v);--d===0?(document.removeEventListener(v,Fe),oe.delete(v)):oe.set(v,d)}Tt.delete(f),o!==r&&((_=o.parentNode)==null||_.removeChild(o))}});return st.set(u,c),u}let st=new WeakMap;function wn(e,t){const r=st.get(e);return r?(st.delete(e),r(t)):Promise.resolve()}function Se(e,t,r=!1){b&&Ve();var n=e,s=null,i=null,l=O,a=r?ot:0,f=!1;const u=(o,v=!0)=>{f=!0,c(v,o)},c=(o,v)=>{if(l===(l=o))return;let d=!1;if(b){const _=n.data===at;!!l===_&&(n=tt(),M(n),G(!1),d=!0)}l?(s?Be(s):v&&(s=Ee(()=>v(n))),i&&Ue(i,()=>{i=null})):(i?Be(i):v&&(i=Ee(()=>v(n))),s&&Ue(s,()=>{s=null})),d&&G(!0)};_t(()=>{f=!1,t(u),f||c(null,null)},a),b&&(n=x)}function yn(e,t){return t}function En(e,t,r,n){for(var s=[],i=t.length,l=0;l<i;l++)ht(t[l].e,s,!0);var a=i>0&&s.length===0&&r!==null;if(a){var f=r.parentNode;Bt(f),f.append(r),n.clear(),X(e,t[0].prev,t[i-1].next)}zt(s,()=>{for(var u=0;u<i;u++){var c=t[u];a||(n.delete(c.k),X(e,c.prev,c.next)),Q(c.e,!a)}})}function bn(e,t,r,n,s,i=null){var l=e,a={flags:t,items:new Map,first:null};{var f=e;l=b?M(le(f)):f.appendChild(de())}b&&Ve();var u=null,c=!1;_t(()=>{var o=r(),v=it(o)?o:o==null?[]:lt(o),d=v.length;if(c&&d===0)return;c=d===0;let _=!1;if(b){var p=l.data===at;p!==(d===0)&&(l=tt(),M(l),G(!1),_=!0)}if(b){for(var g=null,w,h=0;h<d;h++){if(x.nodeType===8&&x.data===ft){l=x,_=!0,G(!1);break}var m=v[h],B=n(m,h);w=ar(x,a,g,null,m,B,h,s,t),a.items.set(B,w),g=w}d>0&&M(tt())}if(!b){var C=y;xn(v,a,l,s,t,(C.f&H)!==0,n)}i!==null&&(d===0?u?Be(u):u=Ee(()=>i(l)):u!==null&&Ue(u,()=>{u=null})),_&&G(!0),r()}),b&&(l=x)}function xn(e,t,r,n,s,i,l,a){var f=e.length,u=t.items,c=t.first,o=c,v,d=null,_=[],p=[],g,w,h,m;for(m=0;m<f;m+=1){if(g=e[m],w=l(g,m),h=u.get(w),h===void 0){var B=o?o.e.nodes_start:r;d=ar(B,t,d,d===null?t.first:d.next,g,w,m,n,s),u.set(w,d),_=[],p=[],o=d.next;continue}if(Cn(h,g,m),h.e.f&H&&Be(h.e),h!==o){if(v!==void 0&&v.has(h)){if(_.length<p.length){var C=p[0],T;d=C.prev;var z=_[0],me=_[_.length-1];for(T=0;T<_.length;T+=1)At(_[T],C,r);for(T=0;T<p.length;T+=1)v.delete(p[T]);X(t,z.prev,me.next),X(t,d,z),X(t,me,C),o=C,d=me,m-=1,_=[],p=[]}else v.delete(h),At(h,o,r),X(t,h.prev,h.next),X(t,h,d===null?t.first:d.next),X(t,d,h),d=h;continue}for(_=[],p=[];o!==null&&o.k!==w;)(i||!(o.e.f&H))&&(v??(v=new Set)).add(o),p.push(o),o=o.next;if(o===null)continue;h=o}_.push(h),d=h,o=h.next}if(o!==null||v!==void 0){for(var ge=v===void 0?[]:lt(v);o!==null;)(i||!(o.e.f&H))&&ge.push(o),o=o.next;var Qe=ge.length;if(Qe>0){var N=f===0?r:null;En(t,ge,N,u)}}$.first=t.first&&t.first.e,$.last=d&&d.e}function Cn(e,t,r,n){Pt(e.v,t),e.i=r}function ar(e,t,r,n,s,i,l,a,f,u){var c=(f&Mr)!==0,o=(f&Ur)===0,v=c?o?ct(s):P(s):s,d=f&qr?P(l):l,_={i:d,v,k:i,a:null,e:null,prev:r,next:n};try{return _.e=Ee(()=>a(e,v,d),b),_.e.prev=r&&r.e,_.e.next=n&&n.e,r===null?t.first=_:(r.next=_,r.e.next=_.e),n!==null&&(n.prev=_,n.e.prev=_.e),_}finally{}}function At(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==n;){var l=re(i);s.before(i),i=l}}function X(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function fr(e,t){en(()=>{var r=e.getRootNode(),n=r.host?r:r.head??r.ownerDocument.head;if(!n.querySelector("#"+t.hash)){const s=document.createElement("style");s.id=t.hash,s.textContent=t.code,n.appendChild(s)}})}function Tn(e,t){var r=e.__className,n=Nn(t);b&&e.className===n?e.__className=n:(r!==n||b&&e.className!==n)&&(t==null?e.removeAttribute("class"):e.className=n,e.__className=n)}function Nn(e){return e??""}function An(e){for(var t=$,r=$;t!==null&&!(t.f&(U|he));)t=t.parent;try{return te(t),e()}finally{te(r)}}function Ft(e,t,r,n){var B;var s=!Dt,i=(r&Br)!==0,l=!1,a;a=e[t];var f=ke in e||St in e,u=((B=ie(e,t))==null?void 0:B.set)??(f&&i&&t in e?C=>e[t]=C:void 0),c=n,o=!0,v=!1,d=()=>(v=!0,o&&(o=!1,c=n),c);a===void 0&&n!==void 0&&(u&&s&&Sr(),a=d(),u&&u(a));var _;if(_=()=>{var C=e[t];return C===void 0?d():(o=!0,v=!1,C)},u){var p=e.$$legacy;return function(C,T){return arguments.length>0?((!T||p||l)&&u(T?_():C),C):_()}}var g=!1,w=!1,h=ct(a),m=An(()=>Yt(()=>{var C=_(),T=E(h);return g?(g=!1,w=!0,T):(w=!1,h.v=C)}));return function(C,T){if(arguments.length>0){const z=T?E(m):C;return m.equals(z)||(g=!0,F(h,z),v&&c!==void 0&&(c=z),ur(()=>E(m))),C}return E(m)}}function Fn(e){return new kn(e)}var W,L;class kn{constructor(t){Je(this,W);Je(this,L);var i;var r=new Map,n=(l,a)=>{var f=ct(a);return r.set(l,f),f};const s=new Proxy({...t.props||{},$$events:{}},{get(l,a){return E(r.get(a)??n(a,Reflect.get(l,a)))},has(l,a){return a===St?!0:(E(r.get(a)??n(a,Reflect.get(l,a))),Reflect.has(l,a))},set(l,a,f){return F(r.get(a)??n(a,f),f),Reflect.set(l,a,f)}});ze(this,L,(t.hydrate?gn:gt)(t.component,{target:t.target,anchor:t.anchor,props:s,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((i=t==null?void 0:t.props)!=null&&i.$$host)||t.sync===!1)&&He(),ze(this,W,s.$$events);for(const l of Object.keys(R(this,L)))l==="$set"||l==="$destroy"||l==="$on"||Le(this,l,{get(){return R(this,L)[l]},set(a){R(this,L)[l]=a},enumerable:!0});R(this,L).$set=l=>{Object.assign(s,l)},R(this,L).$destroy=()=>{wn(R(this,L))}}$set(t){R(this,L).$set(t)}$on(t,r){R(this,W)[t]=R(this,W)[t]||[];const n=(...s)=>r.call(this,...s);return R(this,W)[t].push(n),()=>{R(this,W)[t]=R(this,W)[t].filter(s=>s!==n)}}$destroy(){R(this,L).$destroy()}}W=new WeakMap,L=new WeakMap;let cr;typeof HTMLElement=="function"&&(cr=class extends HTMLElement{constructor(t,r,n){super();D(this,"$$ctor");D(this,"$$s");D(this,"$$c");D(this,"$$cn",!1);D(this,"$$d",{});D(this,"$$r",!1);D(this,"$$p_d",{});D(this,"$$l",{});D(this,"$$l_u",new Map);D(this,"$$me");this.$$ctor=t,this.$$s=r,n&&this.attachShadow({mode:"open"})}addEventListener(t,r,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(r),this.$$c){const s=this.$$c.$on(t,r);this.$$l_u.set(r,s)}super.addEventListener(t,r,n)}removeEventListener(t,r,n){if(super.removeEventListener(t,r,n),this.$$c){const s=this.$$l_u.get(r);s&&(s(),this.$$l_u.delete(r))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let r=function(i){return l=>{const a=document.createElement("slot");i!=="default"&&(a.name=i),Y(l,a)}};var t=r;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},s=Rn(this);for(const i of this.$$s)i in s&&(i==="default"&&!this.$$d.children?(this.$$d.children=r(i),n.default=!0):n[i]=r(i));for(const i of this.attributes){const l=this.$$g_p(i.name);l in this.$$d||(this.$$d[l]=Ie(l,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=Fn({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=Jr(()=>{Xr(()=>{var i;this.$$r=!0;for(const l of De(this.$$c)){if(!((i=this.$$p_d[l])!=null&&i.reflect))continue;this.$$d[l]=this.$$c[l];const a=Ie(l,this.$$d[l],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[l].attribute||l):this.setAttribute(this.$$p_d[l].attribute||l,a)}this.$$r=!1})});for(const i in this.$$l)for(const l of this.$$l[i]){const a=this.$$c.$on(i,l);this.$$l_u.set(l,a)}this.$$l={}}}attributeChangedCallback(t,r,n){var s;this.$$r||(t=this.$$g_p(t),this.$$d[t]=Ie(t,n,this.$$p_d,"toProp"),(s=this.$$c)==null||s.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return De(this.$$p_d).find(r=>this.$$p_d[r].attribute===t||!this.$$p_d[r].attribute&&r.toLowerCase()===t)||t}});function Ie(e,t,r,n){var i;const s=(i=r[e])==null?void 0:i.type;if(t=s==="Boolean"&&typeof t!="boolean"?t!=null:t,!n||!r[e])return t;if(n==="toAttribute")switch(s){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(s){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Rn(e){const t={};return e.childNodes.forEach(r=>{t[r.slot||"default"]=!0}),t}function vr(e,t,r,n,s,i){let l=class extends cr{constructor(){super(e,r,s),this.$$p_d=t}static get observedAttributes(){return De(t).map(a=>(t[a].attribute||a).toLowerCase())}};return De(t).forEach(a=>{Le(l.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(f){var o;f=Ie(a,f,t),this.$$d[a]=f;var u=this.$$c;if(u){var c=(o=ie(u,a))==null?void 0:o.get;c?u[a]=f:u.$set({[a]:f})}}})}),n.forEach(a=>{Le(l.prototype,a,{get(){var f;return(f=this.$$c)==null?void 0:f[a]}})}),e.element=l,l}function On(e){k===null&&rn(),Qr(()=>{const t=ur(e);if(typeof t=="function")return t})}const Sn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Sn);class In{constructor(t){D(this,"baseURL");this.baseURL=t||"http://localhost:8000"}async request(t,r,n){var a,f;const s=`${this.baseURL}${t}`,i=((f=(a=window.Telegram)==null?void 0:a.WebApp)==null?void 0:f.initData)||"query_id=AAG0QsUNAAAAALRCxQ3ED1jC&user=%7B%22id%22%3A231031476%2C%22first_name%22%3A%22Ian%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22cxrtisxl%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FD9_SrswjNHT6niKwI3WCD10Q8k_ifGLNM7B1xcgbF6o.svg%22%7D&auth_date=1734492482&signature=nmAKlwLVumv4milkYYWcQUvjgn7sgBJi3P85uMCXkWRiNEnvJl5LMSJ5fLYQ4XSF3GqLcSMWbhc5mUERaZwcCQ&hash=855372d9649447386615c038ee32c7219d062268f3ab4f6c2043c1351cb3816b",l={method:r,headers:{"Content-Type":"application/json","X-Telegram-Init-Data":i||""},body:n?JSON.stringify(n):void 0};try{const u=await fetch(s,l);if(!u.ok){const c=await u.json();throw new Error(`Error ${u.status}: ${c.message||u.statusText}`)}return await u.json()}catch(u){throw console.error("API Client Error:",u),u}}get(t){return this.request(t,"GET")}post(t,r){return this.request(t,"POST",r)}put(t,r){return this.request(t,"PUT",r)}delete(t){return this.request(t,"DELETE")}}var Dn=ne("<span> </span> ",1),Ln=ne('<br class="svelte-1xmrdks">'),Pn=ne('<span class="cursor svelte-1xmrdks">_</span>'),Mn=ne('<div class="log-message svelte-1xmrdks"><!> <!> <!></div>'),qn=ne('<div class="console svelte-1xmrdks"></div>');const Un={hash:"svelte-1xmrdks",code:`.console.svelte-1xmrdks {background-color:#000;color:#fff;font-family:'Courier New', monospace;padding:1rem;overflow-y:auto;height:100%;}.prefix-info.svelte-1xmrdks {color:#00FFFF;text-shadow:0 0 8px #00FFFF, 0 0 16px #00DBDB;}.prefix-error.svelte-1xmrdks {color:#FF073A;text-shadow:0 0 8px #FF073A, 0 0 16px #FF4671;}.prefix-warning.svelte-1xmrdks, .prefix-reminder.svelte-1xmrdks {color:#FFD700;text-shadow:0 0 8px #FFD700, 0 0 16px #FFC83D;}.prefix-success.svelte-1xmrdks, .prefix-welcome.svelte-1xmrdks {color:#00FF00;text-shadow:0 0 8px #00FF00, 0 0 16px #00B700;}.log-message.svelte-1xmrdks {line-height:1.5;}.cursor.svelte-1xmrdks {display:inline-block;color:#00FFFF;font-weight:bold;
    animation: svelte-1xmrdks-blink 1s step-start infinite;}

  @keyframes svelte-1xmrdks-blink {
    50% {
      opacity: 0;
    }
  }`};function dr(e,t){$t(t,!0),fr(e,Un);let r=Ft(t,"user",7),n=Ft(t,"coldstart",7),s=Me(K([])),i,l=[],a=!1,f=Me(null);function u(_,p,g=0){l.push(()=>o(_,p,g)),c()}async function c(){if(!a){for(a=!0;l.length>0;){const _=l.shift();_&&await _()}a=!1,F(f,null)}}async function o(_,p,g){g>0&&await new Promise(w=>setTimeout(w,g)),F(s,K([...E(s),{messageType:_,message:p,currentText:""}])),F(f,E(s).length-1),await v(E(s).length-1)}function v(_){return new Promise(p=>{const{messageType:g,message:w}=E(s)[_];let h=0;i=setInterval(()=>{h<w.length?(E(s)[_]={messageType:g,message:w,currentText:E(s)[_].currentText+w[h]},h++):(clearInterval(i),p())},50)})}On(()=>{n()?(u("INFO","Initializing Raider Console v2.077...",1e3),u("INFO","Checking system integrity...",1500),u("WARNING","Detected unauthorized access attempts: 2",1e3),u("INFO","Loading security protocols...",0),u("ERROR","Neural interface synchronization failed!",3e3),u("INFO","Attempting backup connection...",0),u("SUCCESS","Console synchronized",5e3),u("",".",500),u("",".",500),u("",".",500)):u("INFO","Console synchronized",1e3),u("WELCOME",`Welcome, ${r().username}!`,1e3),u("","",500),u("","Your console is live. New raids, challenges, and loot drops are incoming.",1e3),u("","",0),u("INFO","Installing treasury extension...",0),u("SUCCESS","Installation complete.",3e3),u("","",0),u("INFO",`Your balance: ${r().balance} $RDRS`,750),u("","",500),u("REMINDER","Today, you left behind the slow raiders.",0),u("REMINDER","Keep going!",750)});var d=qn();return bn(d,21,()=>E(s),yn,(_,p,g)=>{let w=()=>E(p).messageType,h=()=>E(p).currentText;var m=Mn(),B=qe(m);{var C=N=>{var V=Dn(),Ae=Vr(V);const hr=Yt(()=>`${`prefix-${w().toLowerCase()}`??""} svelte-1xmrdks`);var pr=qe(Ae);Ze(()=>Nt(pr,`[${w().toUpperCase()??""}]`)),ye(Ae);var $r=Xe(Ae,1,!0);$r.nodeValue=" ",Ze(()=>Tn(Ae,E(hr))),Y(N,V)};Se(B,N=>{w()&&N(C)})}var T=Xe(B,2);{var z=N=>{var V=mn();Ze(()=>Nt(V,h())),Y(N,V)},me=N=>{var V=Ln();Y(N,V)};Se(T,N=>{h()?N(z):N(me,!1)})}var ge=Xe(T,2);{var Qe=N=>{var V=Pn();Y(N,V)};Se(ge,N=>{E(f)===g&&N(Qe)})}ye(m),Y(_,m)}),ye(d),Y(e,d),mt({log:u,get user(){return r()},set user(_){r(_),He()},get coldstart(){return n()},set coldstart(_){n(_),He()}})}vr(dr,{user:{},coldstart:{}},[],["log"],!0);var Bn=ne('<div class="h-full"><!></div>'),Yn=ne("<p>...</p>"),Hn=ne('<div class="w-[100vw] h-[100vh] overflow-x-hidden"><!></div>');const jn={hash:"svelte-32ttx",code:""};function _r(e,t){$t(t,!0),fr(e,jn);const r=new In;let n=Me(!1),s=Me(void 0);(async()=>{try{F(s,K(await r.get("/user")))}catch(c){console.error(c),F(n,!0);try{F(s,K(await r.post("/user",{}))),console.log(E(s))}catch(o){console.error(o)}}})();var l=Hn(),a=qe(l);{var f=c=>{var o=Bn(),v=qe(o);dr(v,{get user(){return E(s)},get coldstart(){return E(n)}}),ye(o),Y(c,o)},u=c=>{var o=Yn();Y(c,o)};Se(a,c=>{E(s)?c(f):c(u,!1)})}ye(l),Y(e,l),mt()}vr(_r,{},[],[],!0);gt(_r,{target:document.getElementById("app")});
