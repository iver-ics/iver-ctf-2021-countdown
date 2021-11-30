import{S as It,i as Ot,s as kt,e as n,t as s,c as l,a as r,g as t,d as a,b as o,f as w,G as e,h as Rt,l as zt,H as Ks,N as Bt,k as xt,j as Ht,O as Jt,n as bt,m as Ut,o as Yt,x as qt,u as jt,v as Ft}from"../chunks/vendor-19970ed8.js";function Gt(S){let u,d;return{c(){u=n("span"),d=s(S[0]),this.h()},l(h){u=l(h,"SPAN",{class:!0});var v=r(u);d=t(v,S[0]),v.forEach(a),this.h()},h(){o(u,"class","passed svelte-ez4he3")},m(h,v){w(h,u,v),e(u,d)},p(h,v){v&1&&Rt(d,h[0])},d(h){h&&a(u)}}}function Kt(S){let u,d,h,v,i=S[2]&&Gt(S);return{c(){u=s(`SECONDS MINUTES HOURS DAYS
`),d=n("span"),h=s(S[1]),i&&i.c(),v=zt(),this.h()},l(f){u=t(f,`SECONDS MINUTES HOURS DAYS
`),d=l(f,"SPAN",{class:!0});var _=r(d);h=t(_,S[1]),_.forEach(a),i&&i.l(f),v=zt(),this.h()},h(){o(d,"class","output svelte-ez4he3")},m(f,_){w(f,u,_),w(f,d,_),e(d,h),i&&i.m(f,_),w(f,v,_)},p(f,[_]){_&2&&Rt(h,f[1]),f[2]?i?i.p(f,_):(i=Gt(f),i.c(),i.m(v.parentNode,v)):i&&(i.d(1),i=null)},i:Ks,o:Ks,d(f){f&&a(u),f&&a(d),i&&i.d(f),f&&a(v)}}}function Qt(S,u,d){let{passedString:h="// Timeout!"}=u,{time:v}=u,{intervalMs:i=1e3}=u,f,_=setInterval(Y,i),y=!1;function Y(){const E=v.getTime()-new Date().getTime();if(E<0){d(1,f="0s        0m       0h     0d  "),d(2,y=!0),clearInterval(_);return}const A=Math.floor(E/1e3)+"s",Se=Math.floor(E/1e3/60)+"m",g=Math.floor(E/1e3/60/60)+"h",ye=Math.floor(E/1e3/60/60/24)+"d";d(1,f=A.padEnd(10)+Se.padEnd(9)+g.padEnd(7)+ye)}return Bt(()=>clearInterval(_)),Y(),S.$$set=E=>{"passedString"in E&&d(0,h=E.passedString),"time"in E&&d(3,v=E.time),"intervalMs"in E&&d(4,i=E.intervalMs)},[h,f,y,v,i]}class Lt extends It{constructor(u){super();Ot(this,u,Qt,Kt,kt,{passedString:0,time:3,intervalMs:4})}}function Vt(S){let u,d,h,v,i,f,_,y,Y,E,A,Se,g,ye,Re,ze,q,D,xe,j,He,be,Ue,F,I,Ye,G,O,Pe,L,c,B,qe,je,k,J,Fe,Ge,K,Le,Be,Q,Je,Ke,V,Qe,Ve,R,W,We,Xe,X,Ze,es,M,ss,z,ts,as,ns,Z,ls,rs,x,ee,os,cs,se,ps,ds,te,hs,us,ae,fs,vs,H,ne,is,ms,le,_s,Es,re,Ss,ys,oe,As,Ns,N,ce,Ps,gs,pe,Ds,Ms,b,Ts,T,$s,de,Cs,ws,Is,he,Os,ks,ue,Rs,zs,P,fe,xs,Hs,ve,bs,Us,U,Ys,$,qs,ie,js,Fs,Gs,me,Ls,ge;return I=new Lt({props:{time:S[0],passedString:"// Let's go! \u{1F389}"}}),O=new Lt({props:{time:S[1],passedString:"// It's over!"}}),{c(){u=xt(),d=n("section"),h=n("pre"),v=n("span"),i=s("$"),f=s(" "),_=n("code"),y=n("span"),Y=s("./countdown.sh "),E=n("span"),A=n("span"),Se=s('"'),g=n("span"),ye=s("$DATE_START"),Re=s('"'),ze=s(" "),q=n("span"),D=n("span"),xe=s('"'),j=n("span"),He=s("$DATE_END"),be=s('"'),Ue=s(`
`),F=n("samp"),Ht(I.$$.fragment),Ye=s(`

`),G=n("samp"),Ht(O.$$.fragment),Pe=xt(),L=n("section"),c=n("pre"),B=n("span"),qe=s("$"),je=s(" "),k=n("code"),J=n("span"),Fe=s("ls"),Ge=s(" "),K=n("span"),Le=s("categories"),Be=s(`
`),Q=n("samp"),Je=s(`crypto	  osint  reversing
forensic  pwn	 web`),Ke=s(`

`),V=n("span"),Qe=s("$"),Ve=s(" "),R=n("code"),W=n("span"),We=s("cat"),Xe=s(" "),X=n("span"),Ze=s("location.md"),es=s(`
`),M=n("samp"),ss=s("- Reg: "),z=n("a"),ts=s("<https://2021.santahack.xyz>"),as=s(`
- Comms: TEAMS #2021 - Santa Hack

> *Reg opens later, stay tuned!*`),ns=s(`

`),Z=n("span"),ls=s("$"),rs=s(" "),x=n("code"),ee=n("span"),os=s("cat"),cs=s(" "),se=n("span"),ps=s("difficulty.txt"),ds=s(`
`),te=n("samp"),hs=s("Difficulty: [EASY => MEDIUM]"),us=s(`

`),ae=n("span"),fs=s("$"),vs=s(" "),H=n("code"),ne=n("span"),is=s("cat"),ms=s(" "),le=n("span"),_s=s("rules.yaml"),Es=s(`
`),re=n("samp"),Ss=s(`teamSize:
  min: 1
  max: null
email: >-
  ^.*(@iver\\.(com|se|no|pl)|@aztek\\.no|@nogui\\.se|@citynetworks\\.eu)$`),ys=s(`

`),oe=n("span"),As=s("$"),Ns=s(" "),N=n("code"),ce=n("span"),Ps=s("date"),gs=s(" "),pe=n("span"),Ds=s("-I"),Ms=s(" "),b=n("span"),Ts=s("-d "),T=n("span"),$s=s('"'),de=n("span"),Cs=s("$DATE_START"),ws=s('"'),Is=s(`
`),he=n("samp"),Os=s("2021-12-13"),ks=s(`

`),ue=n("span"),Rs=s("$"),zs=s(" "),P=n("code"),fe=n("span"),xs=s("date"),Hs=s(" "),ve=n("span"),bs=s("-I"),Us=s(" "),U=n("span"),Ys=s("-d "),$=n("span"),qs=s('"'),ie=n("span"),js=s("$DATE_END"),Fs=s('"'),Gs=s(`
`),me=n("samp"),Ls=s("2021-12-17"),this.h()},l(m){Jt('[data-svelte="svelte-rqn60g"]',document.head).forEach(a),u=bt(m),d=l(m,"SECTION",{});var Qs=r(d);h=l(Qs,"PRE",{class:!0});var C=r(h);v=l(C,"SPAN",{class:!0});var Vs=r(v);i=t(Vs,"$"),Vs.forEach(a),f=t(C," "),_=l(C,"CODE",{});var Ws=r(_);y=l(Ws,"SPAN",{class:!0});var Ne=r(y);Y=t(Ne,"./countdown.sh "),E=l(Ne,"SPAN",{class:!0});var Xs=r(E);A=l(Xs,"SPAN",{class:!0});var De=r(A);Se=t(De,'"'),g=l(De,"SPAN",{class:!0});var Zs=r(g);ye=t(Zs,"$DATE_START"),Zs.forEach(a),Re=t(De,'"'),De.forEach(a),Xs.forEach(a),ze=t(Ne," "),q=l(Ne,"SPAN",{class:!0});var et=r(q);D=l(et,"SPAN",{class:!0});var Me=r(D);xe=t(Me,'"'),j=l(Me,"SPAN",{class:!0});var st=r(j);He=t(st,"$DATE_END"),st.forEach(a),be=t(Me,'"'),Me.forEach(a),et.forEach(a),Ne.forEach(a),Ws.forEach(a),Ue=t(C,`
`),F=l(C,"SAMP",{class:!0});var tt=r(F);Ut(I.$$.fragment,tt),tt.forEach(a),Ye=t(C,`

`),G=l(C,"SAMP",{class:!0});var at=r(G);Ut(O.$$.fragment,at),at.forEach(a),C.forEach(a),Qs.forEach(a),Pe=bt(m),L=l(m,"SECTION",{});var nt=r(L);c=l(nt,"PRE",{class:!0});var p=r(c);B=l(p,"SPAN",{class:!0});var lt=r(B);qe=t(lt,"$"),lt.forEach(a),je=t(p," "),k=l(p,"CODE",{});var Te=r(k);J=l(Te,"SPAN",{class:!0});var rt=r(J);Fe=t(rt,"ls"),rt.forEach(a),Ge=t(Te," "),K=l(Te,"SPAN",{class:!0});var ot=r(K);Le=t(ot,"categories"),ot.forEach(a),Te.forEach(a),Be=t(p,`
`),Q=l(p,"SAMP",{class:!0});var ct=r(Q);Je=t(ct,`crypto	  osint  reversing
forensic  pwn	 web`),ct.forEach(a),Ke=t(p,`

`),V=l(p,"SPAN",{class:!0});var pt=r(V);Qe=t(pt,"$"),pt.forEach(a),Ve=t(p," "),R=l(p,"CODE",{});var $e=r(R);W=l($e,"SPAN",{class:!0});var dt=r(W);We=t(dt,"cat"),dt.forEach(a),Xe=t($e," "),X=l($e,"SPAN",{class:!0});var ht=r(X);Ze=t(ht,"location.md"),ht.forEach(a),$e.forEach(a),es=t(p,`
`),M=l(p,"SAMP",{class:!0});var Ce=r(M);ss=t(Ce,"- Reg: "),z=l(Ce,"A",{href:!0,referrerpolicy:!0});var ut=r(z);ts=t(ut,"<https://2021.santahack.xyz>"),ut.forEach(a),as=t(Ce,`
- Comms: TEAMS #2021 - Santa Hack

> *Reg opens later, stay tuned!*`),Ce.forEach(a),ns=t(p,`

`),Z=l(p,"SPAN",{class:!0});var ft=r(Z);ls=t(ft,"$"),ft.forEach(a),rs=t(p," "),x=l(p,"CODE",{});var we=r(x);ee=l(we,"SPAN",{class:!0});var vt=r(ee);os=t(vt,"cat"),vt.forEach(a),cs=t(we," "),se=l(we,"SPAN",{class:!0});var it=r(se);ps=t(it,"difficulty.txt"),it.forEach(a),we.forEach(a),ds=t(p,`
`),te=l(p,"SAMP",{class:!0});var mt=r(te);hs=t(mt,"Difficulty: [EASY => MEDIUM]"),mt.forEach(a),us=t(p,`

`),ae=l(p,"SPAN",{class:!0});var _t=r(ae);fs=t(_t,"$"),_t.forEach(a),vs=t(p," "),H=l(p,"CODE",{});var Ie=r(H);ne=l(Ie,"SPAN",{class:!0});var Et=r(ne);is=t(Et,"cat"),Et.forEach(a),ms=t(Ie," "),le=l(Ie,"SPAN",{class:!0});var St=r(le);_s=t(St,"rules.yaml"),St.forEach(a),Ie.forEach(a),Es=t(p,`
`),re=l(p,"SAMP",{class:!0});var yt=r(re);Ss=t(yt,`teamSize:
  min: 1
  max: null
email: >-
  ^.*(@iver\\.(com|se|no|pl)|@aztek\\.no|@nogui\\.se|@citynetworks\\.eu)$`),yt.forEach(a),ys=t(p,`

`),oe=l(p,"SPAN",{class:!0});var At=r(oe);As=t(At,"$"),At.forEach(a),Ns=t(p," "),N=l(p,"CODE",{});var _e=r(N);ce=l(_e,"SPAN",{class:!0});var Nt=r(ce);Ps=t(Nt,"date"),Nt.forEach(a),gs=t(_e," "),pe=l(_e,"SPAN",{class:!0});var Pt=r(pe);Ds=t(Pt,"-I"),Pt.forEach(a),Ms=t(_e," "),b=l(_e,"SPAN",{class:!0});var Bs=r(b);Ts=t(Bs,"-d "),T=l(Bs,"SPAN",{class:!0});var Oe=r(T);$s=t(Oe,'"'),de=l(Oe,"SPAN",{class:!0});var gt=r(de);Cs=t(gt,"$DATE_START"),gt.forEach(a),ws=t(Oe,'"'),Oe.forEach(a),Bs.forEach(a),_e.forEach(a),Is=t(p,`
`),he=l(p,"SAMP",{class:!0});var Dt=r(he);Os=t(Dt,"2021-12-13"),Dt.forEach(a),ks=t(p,`

`),ue=l(p,"SPAN",{class:!0});var Mt=r(ue);Rs=t(Mt,"$"),Mt.forEach(a),zs=t(p," "),P=l(p,"CODE",{});var Ee=r(P);fe=l(Ee,"SPAN",{class:!0});var Tt=r(fe);xs=t(Tt,"date"),Tt.forEach(a),Hs=t(Ee," "),ve=l(Ee,"SPAN",{class:!0});var $t=r(ve);bs=t($t,"-I"),$t.forEach(a),Us=t(Ee," "),U=l(Ee,"SPAN",{class:!0});var Js=r(U);Ys=t(Js,"-d "),$=l(Js,"SPAN",{class:!0});var ke=r($);qs=t(ke,'"'),ie=l(ke,"SPAN",{class:!0});var Ct=r(ie);js=t(Ct,"$DATE_END"),Ct.forEach(a),Fs=t(ke,'"'),ke.forEach(a),Js.forEach(a),Ee.forEach(a),Gs=t(p,`
`),me=l(p,"SAMP",{class:!0});var wt=r(me);Ls=t(wt,"2021-12-17"),wt.forEach(a),p.forEach(a),nt.forEach(a),this.h()},h(){document.title="Iver's Christmas CTF 2021",o(v,"class","prompt svelte-13yhdr5"),o(g,"class","var svelte-13yhdr5"),o(A,"class","str svelte-13yhdr5"),o(E,"class","arg svelte-13yhdr5"),o(j,"class","var svelte-13yhdr5"),o(D,"class","str svelte-13yhdr5"),o(q,"class","arg svelte-13yhdr5"),o(y,"class","cmd svelte-13yhdr5"),o(F,"class","output svelte-13yhdr5"),o(G,"class","output svelte-13yhdr5"),o(h,"class","x-large svelte-13yhdr5"),o(B,"class","prompt svelte-13yhdr5"),o(J,"class","cmd svelte-13yhdr5"),o(K,"class","arg svelte-13yhdr5"),o(Q,"class","output svelte-13yhdr5"),o(V,"class","prompt svelte-13yhdr5"),o(W,"class","cmd svelte-13yhdr5"),o(X,"class","arg svelte-13yhdr5"),o(z,"href","https://2021.santahack.xyz"),o(z,"referrerpolicy","noreferrer"),o(M,"class","output svelte-13yhdr5"),o(Z,"class","prompt svelte-13yhdr5"),o(ee,"class","cmd svelte-13yhdr5"),o(se,"class","arg svelte-13yhdr5"),o(te,"class","output svelte-13yhdr5"),o(ae,"class","prompt svelte-13yhdr5"),o(ne,"class","cmd svelte-13yhdr5"),o(le,"class","arg svelte-13yhdr5"),o(re,"class","output svelte-13yhdr5"),o(oe,"class","prompt svelte-13yhdr5"),o(ce,"class","cmd svelte-13yhdr5"),o(pe,"class","arg svelte-13yhdr5"),o(de,"class","var svelte-13yhdr5"),o(T,"class","str svelte-13yhdr5"),o(b,"class","arg svelte-13yhdr5"),o(he,"class","output svelte-13yhdr5"),o(ue,"class","prompt svelte-13yhdr5"),o(fe,"class","cmd svelte-13yhdr5"),o(ve,"class","arg svelte-13yhdr5"),o(ie,"class","var svelte-13yhdr5"),o($,"class","str svelte-13yhdr5"),o(U,"class","arg svelte-13yhdr5"),o(me,"class","output svelte-13yhdr5"),o(c,"class","larger svelte-13yhdr5")},m(m,Ae){w(m,u,Ae),w(m,d,Ae),e(d,h),e(h,v),e(v,i),e(h,f),e(h,_),e(_,y),e(y,Y),e(y,E),e(E,A),e(A,Se),e(A,g),e(g,ye),e(A,Re),e(y,ze),e(y,q),e(q,D),e(D,xe),e(D,j),e(j,He),e(D,be),e(h,Ue),e(h,F),Yt(I,F,null),e(h,Ye),e(h,G),Yt(O,G,null),w(m,Pe,Ae),w(m,L,Ae),e(L,c),e(c,B),e(B,qe),e(c,je),e(c,k),e(k,J),e(J,Fe),e(k,Ge),e(k,K),e(K,Le),e(c,Be),e(c,Q),e(Q,Je),e(c,Ke),e(c,V),e(V,Qe),e(c,Ve),e(c,R),e(R,W),e(W,We),e(R,Xe),e(R,X),e(X,Ze),e(c,es),e(c,M),e(M,ss),e(M,z),e(z,ts),e(M,as),e(c,ns),e(c,Z),e(Z,ls),e(c,rs),e(c,x),e(x,ee),e(ee,os),e(x,cs),e(x,se),e(se,ps),e(c,ds),e(c,te),e(te,hs),e(c,us),e(c,ae),e(ae,fs),e(c,vs),e(c,H),e(H,ne),e(ne,is),e(H,ms),e(H,le),e(le,_s),e(c,Es),e(c,re),e(re,Ss),e(c,ys),e(c,oe),e(oe,As),e(c,Ns),e(c,N),e(N,ce),e(ce,Ps),e(N,gs),e(N,pe),e(pe,Ds),e(N,Ms),e(N,b),e(b,Ts),e(b,T),e(T,$s),e(T,de),e(de,Cs),e(T,ws),e(c,Is),e(c,he),e(he,Os),e(c,ks),e(c,ue),e(ue,Rs),e(c,zs),e(c,P),e(P,fe),e(fe,xs),e(P,Hs),e(P,ve),e(ve,bs),e(P,Us),e(P,U),e(U,Ys),e(U,$),e($,qs),e($,ie),e(ie,js),e($,Fs),e(c,Gs),e(c,me),e(me,Ls),ge=!0},p:Ks,i(m){ge||(qt(I.$$.fragment,m),qt(O.$$.fragment,m),ge=!0)},o(m){jt(I.$$.fragment,m),jt(O.$$.fragment,m),ge=!1},d(m){m&&a(u),m&&a(d),Ft(I),Ft(O),m&&a(Pe),m&&a(L)}}}const Zt=!0;function Wt(S){const u=new Date("2021-12-13"),d=new Date("2021-12-18");return[u,d]}class ea extends It{constructor(u){super();Ot(this,u,Wt,Vt,kt,{})}}export{ea as default,Zt as prerender};
