import{S as G,i as O,s as P,N as Q,T as g,a5 as j,e as k,a6 as q,m as A,h as m,a7 as v,b as N,G as T,O as U,P as Y,Q as w,U as B,g as D,d as F,Y as H,a8 as S,W as z}from"./index.df47aeff.js";const C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function I(n,e,i){const s=n.slice();return s[10]=e[i][0],s[11]=e[i][1],s}function b(n){let e,i=[n[11]],s={};for(let l=0;l<i.length;l+=1)s=g(s,i[l]);return{c(){e=j(n[10]),this.h()},l(l){e=q(l,n[10],{}),A(e).forEach(m),this.h()},h(){v(e,s)},m(l,a){N(l,e,a)},p(l,a){v(e,s=B(i,[a&32&&l[11]]))},d(l){l&&m(e)}}}function E(n){let e=n[10],i,s=n[10]&&b(n);return{c(){s&&s.c(),i=k()},l(l){s&&s.l(l),i=k()},m(l,a){s&&s.m(l,a),N(l,i,a)},p(l,a){l[10]?e?P(e,l[10])?(s.d(1),s=b(l),e=l[10],s.c(),s.m(i.parentNode,i)):s.p(l,a):(s=b(l),e=l[10],s.c(),s.m(i.parentNode,i)):e&&(s.d(1),s=null,e=l[10])},d(l){l&&m(i),s&&s.d(l)}}}function J(n){let e,i,s,l,a,f=n[5],h=[];for(let t=0;t<f.length;t+=1)h[t]=E(I(n,f,t));const d=n[9].default,u=Q(d,n,n[8],null);let c=[C,n[6],{width:n[2]},{height:n[2]},{stroke:n[1]},{"stroke-width":s=n[4]?Number(n[3])*24/Number(n[2]):n[3]},{class:l=`lucide-icon lucide lucide-${n[0]} ${n[7].class??""}`}],_={};for(let t=0;t<c.length;t+=1)_=g(_,c[t]);return{c(){e=j("svg");for(let t=0;t<h.length;t+=1)h[t].c();i=k(),u&&u.c(),this.h()},l(t){e=q(t,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var o=A(e);for(let r=0;r<h.length;r+=1)h[r].l(o);i=k(),u&&u.l(o),o.forEach(m),this.h()},h(){v(e,_)},m(t,o){N(t,e,o);for(let r=0;r<h.length;r+=1)h[r]&&h[r].m(e,null);T(e,i),u&&u.m(e,null),a=!0},p(t,[o]){if(o&32){f=t[5];let r;for(r=0;r<f.length;r+=1){const W=I(t,f,r);h[r]?h[r].p(W,o):(h[r]=E(W),h[r].c(),h[r].m(e,i))}for(;r<h.length;r+=1)h[r].d(1);h.length=f.length}u&&u.p&&(!a||o&256)&&U(u,d,t,t[8],a?w(d,t[8],o,null):Y(t[8]),null),v(e,_=B(c,[C,o&64&&t[6],(!a||o&4)&&{width:t[2]},(!a||o&4)&&{height:t[2]},(!a||o&2)&&{stroke:t[1]},(!a||o&28&&s!==(s=t[4]?Number(t[3])*24/Number(t[2]):t[3]))&&{"stroke-width":s},(!a||o&129&&l!==(l=`lucide-icon lucide lucide-${t[0]} ${t[7].class??""}`))&&{class:l}]))},i(t){a||(D(u,t),a=!0)},o(t){F(u,t),a=!1},d(t){t&&m(e),H(h,t),u&&u.d(t)}}}function K(n,e,i){const s=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let l=S(e,s),{$$slots:a={},$$scope:f}=e,{name:h}=e,{color:d="currentColor"}=e,{size:u=24}=e,{strokeWidth:c=2}=e,{absoluteStrokeWidth:_=!1}=e,{iconNode:t}=e;return n.$$set=o=>{i(7,e=g(g({},e),z(o))),i(6,l=S(e,s)),"name"in o&&i(0,h=o.name),"color"in o&&i(1,d=o.color),"size"in o&&i(2,u=o.size),"strokeWidth"in o&&i(3,c=o.strokeWidth),"absoluteStrokeWidth"in o&&i(4,_=o.absoluteStrokeWidth),"iconNode"in o&&i(5,t=o.iconNode),"$$scope"in o&&i(8,f=o.$$scope)},e=z(e),[h,d,u,c,_,t,l,e,f,a]}class L extends G{constructor(e){super(),O(this,e,K,J,P,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}const R=L;export{R as I};