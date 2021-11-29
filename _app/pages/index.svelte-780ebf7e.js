import{S as Ie,i as Oe,s as Re,e as n,t,c as l,a as r,g as e,d as a,b as o,f as w,G as s,h as ke,l as xe,H as Kt,N as Be,k as ze,j as He,O as Je,n as be,m as Ue,o as je,x as Ye,u as qe,v as Fe}from"../chunks/vendor-19970ed8.js";function Ge(S){let f,d;return{c(){f=n("span"),d=t(S[0]),this.h()},l(u){f=l(u,"SPAN",{class:!0});var i=r(f);d=e(i,S[0]),i.forEach(a),this.h()},h(){o(f,"class","passed svelte-jetd1d")},m(u,i){w(u,f,i),s(f,d)},p(u,i){i&1&&ke(d,u[0])},d(u){u&&a(f)}}}function Ke(S){let f,d,u,i,m=S[2]&&Ge(S);return{c(){f=t(`SECONDS   MINUTES  HOURS  DAYS
`),d=n("span"),u=t(S[1]),m&&m.c(),i=xe(),this.h()},l(v){f=e(v,`SECONDS   MINUTES  HOURS  DAYS
`),d=l(v,"SPAN",{class:!0});var E=r(d);u=e(E,S[1]),E.forEach(a),m&&m.l(v),i=xe(),this.h()},h(){o(d,"class","output svelte-jetd1d")},m(v,E){w(v,f,E),w(v,d,E),s(d,u),m&&m.m(v,E),w(v,i,E)},p(v,[E]){E&2&&ke(u,v[1]),v[2]?m?m.p(v,E):(m=Ge(v),m.c(),m.m(i.parentNode,i)):m&&(m.d(1),m=null)},i:Kt,o:Kt,d(v){v&&a(f),v&&a(d),m&&m.d(v),v&&a(i)}}}function Qe(S,f,d){let{passedString:u="// Timeout!"}=f,{time:i}=f,{intervalMs:m=1e3}=f,v,E=setInterval(j,m),A=!1;function j(){const h=i.getTime()-new Date().getTime();if(h<0){d(1,v="0s        0m       0h     0d  "),d(2,A=!0),clearInterval(E);return}const N=Math.floor(h/1e3)+"s",Ss=Math.floor(h/1e3/60)+"m",D=Math.floor(h/1e3/60/60)+"h",As=Math.floor(h/1e3/60/60/24)+"d";d(1,v=N.padEnd(10)+Ss.padEnd(9)+D.padEnd(7)+As)}return Be(()=>clearInterval(E)),j(),S.$$set=h=>{"passedString"in h&&d(0,u=h.passedString),"time"in h&&d(3,i=h.time),"intervalMs"in h&&d(4,m=h.intervalMs)},[u,v,A,i,m]}class Le extends Ie{constructor(f){super();Oe(this,f,Qe,Ke,Re,{passedString:0,time:3,intervalMs:4})}}function Ve(S){let f,d,u,i,m,v,E,A,j,h,N,Ss,D,As,ks,xs,Y,M,zs,q,Hs,bs,Us,F,I,js,G,O,gs,L,c,B,Ys,qs,R,J,Fs,Gs,K,Ls,Bs,Q,Js,Ks,V,Qs,Vs,k,W,Ws,Xs,X,Zs,st,T,tt,x,et,at,nt,Z,lt,rt,z,ss,ot,ct,ts,pt,dt,es,ut,ft,as,vt,it,H,ns,mt,_t,ls,Et,ht,rs,St,At,os,Nt,Pt,P,cs,gt,Dt,ps,Mt,Tt,b,yt,y,$t,ds,Ct,wt,It,us,Ot,Rt,fs,kt,xt,g,vs,zt,Ht,is,bt,Ut,U,jt,$,Yt,ms,qt,Ft,Gt,_s,Lt,Ds;return I=new Le({props:{time:S[0],passedString:"// Let's go! \u{1F389}"}}),O=new Le({props:{time:S[1],passedString:"// It's over!"}}),{c(){f=ze(),d=n("section"),u=n("pre"),i=n("span"),m=t("$"),v=t(" "),E=n("code"),A=n("span"),j=t("./countdown.sh "),h=n("span"),N=n("span"),Ss=t('"'),D=n("span"),As=t("$DATE_START"),ks=t('"'),xs=t(" "),Y=n("span"),M=n("span"),zs=t('"'),q=n("span"),Hs=t("$DATE_END"),bs=t('"'),Us=t(`
`),F=n("samp"),He(I.$$.fragment),js=t(`

`),G=n("samp"),He(O.$$.fragment),gs=ze(),L=n("section"),c=n("pre"),B=n("span"),Ys=t("$"),qs=t(" "),R=n("code"),J=n("span"),Fs=t("ls"),Gs=t(" "),K=n("span"),Ls=t("categories"),Bs=t(`
`),Q=n("samp"),Js=t(`crypto	  osint  reversing
forensic  pwn	 web`),Ks=t(`

`),V=n("span"),Qs=t("$"),Vs=t(" "),k=n("code"),W=n("span"),Ws=t("cat"),Xs=t(" "),X=n("span"),Zs=t("location.md"),st=t(`
`),T=n("samp"),tt=t("- Reg: "),x=n("a"),et=t("<https://2021.santahack.xyz>"),at=t(`
- Comms: TEAMS #2021 - Santa Hack

> *Reg opens later, stay tuned!*`),nt=t(`

`),Z=n("span"),lt=t("$"),rt=t(" "),z=n("code"),ss=n("span"),ot=t("cat"),ct=t(" "),ts=n("span"),pt=t("difficulty.txt"),dt=t(`
`),es=n("samp"),ut=t("Difficulty: [EASY => MEDIUM]"),ft=t(`

`),as=n("span"),vt=t("$"),it=t(" "),H=n("code"),ns=n("span"),mt=t("cat"),_t=t(" "),ls=n("span"),Et=t("rules.yaml"),ht=t(`
`),rs=n("samp"),St=t(`teamSize:
  min: 1
  max: null
email:
  regex: ^.*(@iver\\.(com|se|no|pl)|@aztek\\.no|@nogui\\.se)$`),At=t(`

`),os=n("span"),Nt=t("$"),Pt=t(" "),P=n("code"),cs=n("span"),gt=t("date"),Dt=t(" "),ps=n("span"),Mt=t("-I"),Tt=t(" "),b=n("span"),yt=t("-d "),y=n("span"),$t=t('"'),ds=n("span"),Ct=t("$DATE_START"),wt=t('"'),It=t(`
`),us=n("samp"),Ot=t("2021-12-13"),Rt=t(`

`),fs=n("span"),kt=t("$"),xt=t(" "),g=n("code"),vs=n("span"),zt=t("date"),Ht=t(" "),is=n("span"),bt=t("-I"),Ut=t(" "),U=n("span"),jt=t("-d "),$=n("span"),Yt=t('"'),ms=n("span"),qt=t("$DATE_END"),Ft=t('"'),Gt=t(`
`),_s=n("samp"),Lt=t("2021-12-17"),this.h()},l(_){Je('[data-svelte="svelte-rqn60g"]',document.head).forEach(a),f=be(_),d=l(_,"SECTION",{});var Qt=r(d);u=l(Qt,"PRE",{class:!0});var C=r(u);i=l(C,"SPAN",{class:!0});var Vt=r(i);m=e(Vt,"$"),Vt.forEach(a),v=e(C," "),E=l(C,"CODE",{});var Wt=r(E);A=l(Wt,"SPAN",{class:!0});var Ps=r(A);j=e(Ps,"./countdown.sh "),h=l(Ps,"SPAN",{class:!0});var Xt=r(h);N=l(Xt,"SPAN",{class:!0});var Ms=r(N);Ss=e(Ms,'"'),D=l(Ms,"SPAN",{class:!0});var Zt=r(D);As=e(Zt,"$DATE_START"),Zt.forEach(a),ks=e(Ms,'"'),Ms.forEach(a),Xt.forEach(a),xs=e(Ps," "),Y=l(Ps,"SPAN",{class:!0});var se=r(Y);M=l(se,"SPAN",{class:!0});var Ts=r(M);zs=e(Ts,'"'),q=l(Ts,"SPAN",{class:!0});var te=r(q);Hs=e(te,"$DATE_END"),te.forEach(a),bs=e(Ts,'"'),Ts.forEach(a),se.forEach(a),Ps.forEach(a),Wt.forEach(a),Us=e(C,`
`),F=l(C,"SAMP",{class:!0});var ee=r(F);Ue(I.$$.fragment,ee),ee.forEach(a),js=e(C,`

`),G=l(C,"SAMP",{class:!0});var ae=r(G);Ue(O.$$.fragment,ae),ae.forEach(a),C.forEach(a),Qt.forEach(a),gs=be(_),L=l(_,"SECTION",{});var ne=r(L);c=l(ne,"PRE",{class:!0});var p=r(c);B=l(p,"SPAN",{class:!0});var le=r(B);Ys=e(le,"$"),le.forEach(a),qs=e(p," "),R=l(p,"CODE",{});var ys=r(R);J=l(ys,"SPAN",{class:!0});var re=r(J);Fs=e(re,"ls"),re.forEach(a),Gs=e(ys," "),K=l(ys,"SPAN",{class:!0});var oe=r(K);Ls=e(oe,"categories"),oe.forEach(a),ys.forEach(a),Bs=e(p,`
`),Q=l(p,"SAMP",{class:!0});var ce=r(Q);Js=e(ce,`crypto	  osint  reversing
forensic  pwn	 web`),ce.forEach(a),Ks=e(p,`

`),V=l(p,"SPAN",{class:!0});var pe=r(V);Qs=e(pe,"$"),pe.forEach(a),Vs=e(p," "),k=l(p,"CODE",{});var $s=r(k);W=l($s,"SPAN",{class:!0});var de=r(W);Ws=e(de,"cat"),de.forEach(a),Xs=e($s," "),X=l($s,"SPAN",{class:!0});var ue=r(X);Zs=e(ue,"location.md"),ue.forEach(a),$s.forEach(a),st=e(p,`
`),T=l(p,"SAMP",{class:!0});var Cs=r(T);tt=e(Cs,"- Reg: "),x=l(Cs,"A",{href:!0,referrerpolicy:!0});var fe=r(x);et=e(fe,"<https://2021.santahack.xyz>"),fe.forEach(a),at=e(Cs,`
- Comms: TEAMS #2021 - Santa Hack

> *Reg opens later, stay tuned!*`),Cs.forEach(a),nt=e(p,`

`),Z=l(p,"SPAN",{class:!0});var ve=r(Z);lt=e(ve,"$"),ve.forEach(a),rt=e(p," "),z=l(p,"CODE",{});var ws=r(z);ss=l(ws,"SPAN",{class:!0});var ie=r(ss);ot=e(ie,"cat"),ie.forEach(a),ct=e(ws," "),ts=l(ws,"SPAN",{class:!0});var me=r(ts);pt=e(me,"difficulty.txt"),me.forEach(a),ws.forEach(a),dt=e(p,`
`),es=l(p,"SAMP",{class:!0});var _e=r(es);ut=e(_e,"Difficulty: [EASY => MEDIUM]"),_e.forEach(a),ft=e(p,`

`),as=l(p,"SPAN",{class:!0});var Ee=r(as);vt=e(Ee,"$"),Ee.forEach(a),it=e(p," "),H=l(p,"CODE",{});var Is=r(H);ns=l(Is,"SPAN",{class:!0});var he=r(ns);mt=e(he,"cat"),he.forEach(a),_t=e(Is," "),ls=l(Is,"SPAN",{class:!0});var Se=r(ls);Et=e(Se,"rules.yaml"),Se.forEach(a),Is.forEach(a),ht=e(p,`
`),rs=l(p,"SAMP",{class:!0});var Ae=r(rs);St=e(Ae,`teamSize:
  min: 1
  max: null
email:
  regex: ^.*(@iver\\.(com|se|no|pl)|@aztek\\.no|@nogui\\.se)$`),Ae.forEach(a),At=e(p,`

`),os=l(p,"SPAN",{class:!0});var Ne=r(os);Nt=e(Ne,"$"),Ne.forEach(a),Pt=e(p," "),P=l(p,"CODE",{});var Es=r(P);cs=l(Es,"SPAN",{class:!0});var Pe=r(cs);gt=e(Pe,"date"),Pe.forEach(a),Dt=e(Es," "),ps=l(Es,"SPAN",{class:!0});var ge=r(ps);Mt=e(ge,"-I"),ge.forEach(a),Tt=e(Es," "),b=l(Es,"SPAN",{class:!0});var Bt=r(b);yt=e(Bt,"-d "),y=l(Bt,"SPAN",{class:!0});var Os=r(y);$t=e(Os,'"'),ds=l(Os,"SPAN",{class:!0});var De=r(ds);Ct=e(De,"$DATE_START"),De.forEach(a),wt=e(Os,'"'),Os.forEach(a),Bt.forEach(a),Es.forEach(a),It=e(p,`
`),us=l(p,"SAMP",{class:!0});var Me=r(us);Ot=e(Me,"2021-12-13"),Me.forEach(a),Rt=e(p,`

`),fs=l(p,"SPAN",{class:!0});var Te=r(fs);kt=e(Te,"$"),Te.forEach(a),xt=e(p," "),g=l(p,"CODE",{});var hs=r(g);vs=l(hs,"SPAN",{class:!0});var ye=r(vs);zt=e(ye,"date"),ye.forEach(a),Ht=e(hs," "),is=l(hs,"SPAN",{class:!0});var $e=r(is);bt=e($e,"-I"),$e.forEach(a),Ut=e(hs," "),U=l(hs,"SPAN",{class:!0});var Jt=r(U);jt=e(Jt,"-d "),$=l(Jt,"SPAN",{class:!0});var Rs=r($);Yt=e(Rs,'"'),ms=l(Rs,"SPAN",{class:!0});var Ce=r(ms);qt=e(Ce,"$DATE_END"),Ce.forEach(a),Ft=e(Rs,'"'),Rs.forEach(a),Jt.forEach(a),hs.forEach(a),Gt=e(p,`
`),_s=l(p,"SAMP",{class:!0});var we=r(_s);Lt=e(we,"2021-12-17"),we.forEach(a),p.forEach(a),ne.forEach(a),this.h()},h(){document.title="Iver's Christmas CTF 2021",o(i,"class","prompt svelte-1s042nt"),o(D,"class","var svelte-1s042nt"),o(N,"class","str svelte-1s042nt"),o(h,"class","arg svelte-1s042nt"),o(q,"class","var svelte-1s042nt"),o(M,"class","str svelte-1s042nt"),o(Y,"class","arg svelte-1s042nt"),o(A,"class","cmd svelte-1s042nt"),o(F,"class","output svelte-1s042nt"),o(G,"class","output svelte-1s042nt"),o(u,"class","svelte-1s042nt"),o(B,"class","prompt svelte-1s042nt"),o(J,"class","cmd svelte-1s042nt"),o(K,"class","arg svelte-1s042nt"),o(Q,"class","output svelte-1s042nt"),o(V,"class","prompt svelte-1s042nt"),o(W,"class","cmd svelte-1s042nt"),o(X,"class","arg svelte-1s042nt"),o(x,"href","https://2021.santahack.xyz"),o(x,"referrerpolicy","noreferrer"),o(T,"class","output svelte-1s042nt"),o(Z,"class","prompt svelte-1s042nt"),o(ss,"class","cmd svelte-1s042nt"),o(ts,"class","arg svelte-1s042nt"),o(es,"class","output svelte-1s042nt"),o(as,"class","prompt svelte-1s042nt"),o(ns,"class","cmd svelte-1s042nt"),o(ls,"class","arg svelte-1s042nt"),o(rs,"class","output svelte-1s042nt"),o(os,"class","prompt svelte-1s042nt"),o(cs,"class","cmd svelte-1s042nt"),o(ps,"class","arg svelte-1s042nt"),o(ds,"class","var svelte-1s042nt"),o(y,"class","str svelte-1s042nt"),o(b,"class","arg svelte-1s042nt"),o(us,"class","output svelte-1s042nt"),o(fs,"class","prompt svelte-1s042nt"),o(vs,"class","cmd svelte-1s042nt"),o(is,"class","arg svelte-1s042nt"),o(ms,"class","var svelte-1s042nt"),o($,"class","str svelte-1s042nt"),o(U,"class","arg svelte-1s042nt"),o(_s,"class","output svelte-1s042nt"),o(c,"class","svelte-1s042nt")},m(_,Ns){w(_,f,Ns),w(_,d,Ns),s(d,u),s(u,i),s(i,m),s(u,v),s(u,E),s(E,A),s(A,j),s(A,h),s(h,N),s(N,Ss),s(N,D),s(D,As),s(N,ks),s(A,xs),s(A,Y),s(Y,M),s(M,zs),s(M,q),s(q,Hs),s(M,bs),s(u,Us),s(u,F),je(I,F,null),s(u,js),s(u,G),je(O,G,null),w(_,gs,Ns),w(_,L,Ns),s(L,c),s(c,B),s(B,Ys),s(c,qs),s(c,R),s(R,J),s(J,Fs),s(R,Gs),s(R,K),s(K,Ls),s(c,Bs),s(c,Q),s(Q,Js),s(c,Ks),s(c,V),s(V,Qs),s(c,Vs),s(c,k),s(k,W),s(W,Ws),s(k,Xs),s(k,X),s(X,Zs),s(c,st),s(c,T),s(T,tt),s(T,x),s(x,et),s(T,at),s(c,nt),s(c,Z),s(Z,lt),s(c,rt),s(c,z),s(z,ss),s(ss,ot),s(z,ct),s(z,ts),s(ts,pt),s(c,dt),s(c,es),s(es,ut),s(c,ft),s(c,as),s(as,vt),s(c,it),s(c,H),s(H,ns),s(ns,mt),s(H,_t),s(H,ls),s(ls,Et),s(c,ht),s(c,rs),s(rs,St),s(c,At),s(c,os),s(os,Nt),s(c,Pt),s(c,P),s(P,cs),s(cs,gt),s(P,Dt),s(P,ps),s(ps,Mt),s(P,Tt),s(P,b),s(b,yt),s(b,y),s(y,$t),s(y,ds),s(ds,Ct),s(y,wt),s(c,It),s(c,us),s(us,Ot),s(c,Rt),s(c,fs),s(fs,kt),s(c,xt),s(c,g),s(g,vs),s(vs,zt),s(g,Ht),s(g,is),s(is,bt),s(g,Ut),s(g,U),s(U,jt),s(U,$),s($,Yt),s($,ms),s(ms,qt),s($,Ft),s(c,Gt),s(c,_s),s(_s,Lt),Ds=!0},p:Kt,i(_){Ds||(Ye(I.$$.fragment,_),Ye(O.$$.fragment,_),Ds=!0)},o(_){qe(I.$$.fragment,_),qe(O.$$.fragment,_),Ds=!1},d(_){_&&a(f),_&&a(d),Fe(I),Fe(O),_&&a(gs),_&&a(L)}}}const Ze=!0;function We(S){const f=new Date("2021-12-13"),d=new Date("2021-12-18");return[f,d]}class sa extends Ie{constructor(f){super();Oe(this,f,We,Ve,Re,{})}}export{sa as default,Ze as prerender};
