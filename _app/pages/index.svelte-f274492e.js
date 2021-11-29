import{S as Ie,i as Oe,s as Re,e as n,t,c as l,a as r,g as e,d as a,b as c,f as w,G as s,h as ke,l as xe,H as Kt,N as Be,k as He,j as be,O as Je,n as Ue,m as ze,o as je,x as Ye,u as qe,v as Fe}from"../chunks/vendor-19970ed8.js";function Ge(S){let v,d;return{c(){v=n("span"),d=t(S[0]),this.h()},l(f){v=l(f,"SPAN",{class:!0});var i=r(v);d=e(i,S[0]),i.forEach(a),this.h()},h(){c(v,"class","passed svelte-jetd1d")},m(f,i){w(f,v,i),s(v,d)},p(f,i){i&1&&ke(d,f[0])},d(f){f&&a(v)}}}function Ke(S){let v,d,f,i,m=S[2]&&Ge(S);return{c(){v=t(`SECONDS   MINUTES  HOURS  DAYS
`),d=n("span"),f=t(S[1]),m&&m.c(),i=xe(),this.h()},l(u){v=e(u,`SECONDS   MINUTES  HOURS  DAYS
`),d=l(u,"SPAN",{class:!0});var E=r(d);f=e(E,S[1]),E.forEach(a),m&&m.l(u),i=xe(),this.h()},h(){c(d,"class","output svelte-jetd1d")},m(u,E){w(u,v,E),w(u,d,E),s(d,f),m&&m.m(u,E),w(u,i,E)},p(u,[E]){E&2&&ke(f,u[1]),u[2]?m?m.p(u,E):(m=Ge(u),m.c(),m.m(i.parentNode,i)):m&&(m.d(1),m=null)},i:Kt,o:Kt,d(u){u&&a(v),u&&a(d),m&&m.d(u),u&&a(i)}}}function Qe(S,v,d){let{passedString:f="// Timeout!"}=v,{time:i}=v,{intervalMs:m=1e3}=v,u,E=setInterval(j,m),A=!1;function j(){const h=i.getTime()-new Date().getTime();if(h<0){d(1,u="0s        0m       0h     0d  "),d(2,A=!0),clearInterval(E);return}const N=Math.floor(h/1e3)+"s",Ss=Math.floor(h/1e3/60)+"m",g=Math.floor(h/1e3/60/60)+"h",As=Math.floor(h/1e3/60/60/24)+"d";d(1,u=N.padEnd(10)+Ss.padEnd(9)+g.padEnd(7)+As)}return Be(()=>clearInterval(E)),j(),S.$$set=h=>{"passedString"in h&&d(0,f=h.passedString),"time"in h&&d(3,i=h.time),"intervalMs"in h&&d(4,m=h.intervalMs)},[f,u,A,i,m]}class Le extends Ie{constructor(v){super();Oe(this,v,Qe,Ke,Re,{passedString:0,time:3,intervalMs:4})}}function Ve(S){let v,d,f,i,m,u,E,A,j,h,N,Ss,g,As,ks,xs,Y,M,Hs,q,bs,Us,zs,F,I,js,G,O,Ds,L,o,B,Ys,qs,R,J,Fs,Gs,K,Ls,Bs,Q,Js,Ks,V,Qs,Vs,k,W,Ws,Xs,X,Zs,st,T,tt,x,et,at,nt,Z,lt,rt,H,ss,ct,ot,ts,pt,dt,es,ft,vt,as,ut,it,b,ns,mt,_t,ls,Et,ht,rs,St,At,cs,Nt,Pt,P,os,Dt,gt,ps,Mt,Tt,U,yt,y,$t,ds,Ct,wt,It,fs,Ot,Rt,vs,kt,xt,D,us,Ht,bt,is,Ut,zt,z,jt,$,Yt,ms,qt,Ft,Gt,_s,Lt,gs;return I=new Le({props:{time:S[0],passedString:"// Let's go! \u{1F389}"}}),O=new Le({props:{time:S[1],passedString:"// It's over!"}}),{c(){v=He(),d=n("section"),f=n("pre"),i=n("span"),m=t("$"),u=t(" "),E=n("code"),A=n("span"),j=t("./countdown.sh "),h=n("span"),N=n("span"),Ss=t('"'),g=n("span"),As=t("$DATE_START"),ks=t('"'),xs=t(" "),Y=n("span"),M=n("span"),Hs=t('"'),q=n("span"),bs=t("$DATE_END"),Us=t('"'),zs=t(`
`),F=n("samp"),be(I.$$.fragment),js=t(`

`),G=n("samp"),be(O.$$.fragment),Ds=He(),L=n("section"),o=n("pre"),B=n("span"),Ys=t("$"),qs=t(" "),R=n("code"),J=n("span"),Fs=t("ls"),Gs=t(" "),K=n("span"),Ls=t("categories"),Bs=t(`
`),Q=n("samp"),Js=t(`crypto	  osint  reversing
forensic  pwn	 web`),Ks=t(`

`),V=n("span"),Qs=t("$"),Vs=t(" "),k=n("code"),W=n("span"),Ws=t("cat"),Xs=t(" "),X=n("span"),Zs=t("location.md"),st=t(`
`),T=n("samp"),tt=t("- Reg: "),x=n("a"),et=t("<https://2021.santahack.xyz>"),at=t(`
- Comms: TEAMS #2021 - Santa Hack

> *Reg opens later, stay tuned!*`),nt=t(`

`),Z=n("span"),lt=t("$"),rt=t(" "),H=n("code"),ss=n("span"),ct=t("cat"),ot=t(" "),ts=n("span"),pt=t("difficulty.txt"),dt=t(`
`),es=n("samp"),ft=t("Difficulty: [EASY => MEDIUM]"),vt=t(`

`),as=n("span"),ut=t("$"),it=t(" "),b=n("code"),ns=n("span"),mt=t("cat"),_t=t(" "),ls=n("span"),Et=t("rules.yaml"),ht=t(`
`),rs=n("samp"),St=t(`teamSize:
  min: 1
  max: null
email:
  regex: ^.*@iver\\.(com|se|no|pl)$`),At=t(`

`),cs=n("span"),Nt=t("$"),Pt=t(" "),P=n("code"),os=n("span"),Dt=t("date"),gt=t(" "),ps=n("span"),Mt=t("-I"),Tt=t(" "),U=n("span"),yt=t("-d "),y=n("span"),$t=t('"'),ds=n("span"),Ct=t("$DATE_START"),wt=t('"'),It=t(`
`),fs=n("samp"),Ot=t("2021-12-13"),Rt=t(`

`),vs=n("span"),kt=t("$"),xt=t(" "),D=n("code"),us=n("span"),Ht=t("date"),bt=t(" "),is=n("span"),Ut=t("-I"),zt=t(" "),z=n("span"),jt=t("-d "),$=n("span"),Yt=t('"'),ms=n("span"),qt=t("$DATE_END"),Ft=t('"'),Gt=t(`
`),_s=n("samp"),Lt=t("2021-12-17"),this.h()},l(_){Je('[data-svelte="svelte-rqn60g"]',document.head).forEach(a),v=Ue(_),d=l(_,"SECTION",{});var Qt=r(d);f=l(Qt,"PRE",{class:!0});var C=r(f);i=l(C,"SPAN",{class:!0});var Vt=r(i);m=e(Vt,"$"),Vt.forEach(a),u=e(C," "),E=l(C,"CODE",{});var Wt=r(E);A=l(Wt,"SPAN",{class:!0});var Ps=r(A);j=e(Ps,"./countdown.sh "),h=l(Ps,"SPAN",{class:!0});var Xt=r(h);N=l(Xt,"SPAN",{class:!0});var Ms=r(N);Ss=e(Ms,'"'),g=l(Ms,"SPAN",{class:!0});var Zt=r(g);As=e(Zt,"$DATE_START"),Zt.forEach(a),ks=e(Ms,'"'),Ms.forEach(a),Xt.forEach(a),xs=e(Ps," "),Y=l(Ps,"SPAN",{class:!0});var se=r(Y);M=l(se,"SPAN",{class:!0});var Ts=r(M);Hs=e(Ts,'"'),q=l(Ts,"SPAN",{class:!0});var te=r(q);bs=e(te,"$DATE_END"),te.forEach(a),Us=e(Ts,'"'),Ts.forEach(a),se.forEach(a),Ps.forEach(a),Wt.forEach(a),zs=e(C,`
`),F=l(C,"SAMP",{class:!0});var ee=r(F);ze(I.$$.fragment,ee),ee.forEach(a),js=e(C,`

`),G=l(C,"SAMP",{class:!0});var ae=r(G);ze(O.$$.fragment,ae),ae.forEach(a),C.forEach(a),Qt.forEach(a),Ds=Ue(_),L=l(_,"SECTION",{});var ne=r(L);o=l(ne,"PRE",{class:!0});var p=r(o);B=l(p,"SPAN",{class:!0});var le=r(B);Ys=e(le,"$"),le.forEach(a),qs=e(p," "),R=l(p,"CODE",{});var ys=r(R);J=l(ys,"SPAN",{class:!0});var re=r(J);Fs=e(re,"ls"),re.forEach(a),Gs=e(ys," "),K=l(ys,"SPAN",{class:!0});var ce=r(K);Ls=e(ce,"categories"),ce.forEach(a),ys.forEach(a),Bs=e(p,`
`),Q=l(p,"SAMP",{class:!0});var oe=r(Q);Js=e(oe,`crypto	  osint  reversing
forensic  pwn	 web`),oe.forEach(a),Ks=e(p,`

`),V=l(p,"SPAN",{class:!0});var pe=r(V);Qs=e(pe,"$"),pe.forEach(a),Vs=e(p," "),k=l(p,"CODE",{});var $s=r(k);W=l($s,"SPAN",{class:!0});var de=r(W);Ws=e(de,"cat"),de.forEach(a),Xs=e($s," "),X=l($s,"SPAN",{class:!0});var fe=r(X);Zs=e(fe,"location.md"),fe.forEach(a),$s.forEach(a),st=e(p,`
`),T=l(p,"SAMP",{class:!0});var Cs=r(T);tt=e(Cs,"- Reg: "),x=l(Cs,"A",{href:!0,referrerpolicy:!0});var ve=r(x);et=e(ve,"<https://2021.santahack.xyz>"),ve.forEach(a),at=e(Cs,`
- Comms: TEAMS #2021 - Santa Hack

> *Reg opens later, stay tuned!*`),Cs.forEach(a),nt=e(p,`

`),Z=l(p,"SPAN",{class:!0});var ue=r(Z);lt=e(ue,"$"),ue.forEach(a),rt=e(p," "),H=l(p,"CODE",{});var ws=r(H);ss=l(ws,"SPAN",{class:!0});var ie=r(ss);ct=e(ie,"cat"),ie.forEach(a),ot=e(ws," "),ts=l(ws,"SPAN",{class:!0});var me=r(ts);pt=e(me,"difficulty.txt"),me.forEach(a),ws.forEach(a),dt=e(p,`
`),es=l(p,"SAMP",{class:!0});var _e=r(es);ft=e(_e,"Difficulty: [EASY => MEDIUM]"),_e.forEach(a),vt=e(p,`

`),as=l(p,"SPAN",{class:!0});var Ee=r(as);ut=e(Ee,"$"),Ee.forEach(a),it=e(p," "),b=l(p,"CODE",{});var Is=r(b);ns=l(Is,"SPAN",{class:!0});var he=r(ns);mt=e(he,"cat"),he.forEach(a),_t=e(Is," "),ls=l(Is,"SPAN",{class:!0});var Se=r(ls);Et=e(Se,"rules.yaml"),Se.forEach(a),Is.forEach(a),ht=e(p,`
`),rs=l(p,"SAMP",{class:!0});var Ae=r(rs);St=e(Ae,`teamSize:
  min: 1
  max: null
email:
  regex: ^.*@iver\\.(com|se|no|pl)$`),Ae.forEach(a),At=e(p,`

`),cs=l(p,"SPAN",{class:!0});var Ne=r(cs);Nt=e(Ne,"$"),Ne.forEach(a),Pt=e(p," "),P=l(p,"CODE",{});var Es=r(P);os=l(Es,"SPAN",{class:!0});var Pe=r(os);Dt=e(Pe,"date"),Pe.forEach(a),gt=e(Es," "),ps=l(Es,"SPAN",{class:!0});var De=r(ps);Mt=e(De,"-I"),De.forEach(a),Tt=e(Es," "),U=l(Es,"SPAN",{class:!0});var Bt=r(U);yt=e(Bt,"-d "),y=l(Bt,"SPAN",{class:!0});var Os=r(y);$t=e(Os,'"'),ds=l(Os,"SPAN",{class:!0});var ge=r(ds);Ct=e(ge,"$DATE_START"),ge.forEach(a),wt=e(Os,'"'),Os.forEach(a),Bt.forEach(a),Es.forEach(a),It=e(p,`
`),fs=l(p,"SAMP",{class:!0});var Me=r(fs);Ot=e(Me,"2021-12-13"),Me.forEach(a),Rt=e(p,`

`),vs=l(p,"SPAN",{class:!0});var Te=r(vs);kt=e(Te,"$"),Te.forEach(a),xt=e(p," "),D=l(p,"CODE",{});var hs=r(D);us=l(hs,"SPAN",{class:!0});var ye=r(us);Ht=e(ye,"date"),ye.forEach(a),bt=e(hs," "),is=l(hs,"SPAN",{class:!0});var $e=r(is);Ut=e($e,"-I"),$e.forEach(a),zt=e(hs," "),z=l(hs,"SPAN",{class:!0});var Jt=r(z);jt=e(Jt,"-d "),$=l(Jt,"SPAN",{class:!0});var Rs=r($);Yt=e(Rs,'"'),ms=l(Rs,"SPAN",{class:!0});var Ce=r(ms);qt=e(Ce,"$DATE_END"),Ce.forEach(a),Ft=e(Rs,'"'),Rs.forEach(a),Jt.forEach(a),hs.forEach(a),Gt=e(p,`
`),_s=l(p,"SAMP",{class:!0});var we=r(_s);Lt=e(we,"2021-12-17"),we.forEach(a),p.forEach(a),ne.forEach(a),this.h()},h(){document.title="Iver's Christmas CTF 2021",c(i,"class","prompt svelte-1s042nt"),c(g,"class","var svelte-1s042nt"),c(N,"class","str svelte-1s042nt"),c(h,"class","arg svelte-1s042nt"),c(q,"class","var svelte-1s042nt"),c(M,"class","str svelte-1s042nt"),c(Y,"class","arg svelte-1s042nt"),c(A,"class","cmd svelte-1s042nt"),c(F,"class","output svelte-1s042nt"),c(G,"class","output svelte-1s042nt"),c(f,"class","svelte-1s042nt"),c(B,"class","prompt svelte-1s042nt"),c(J,"class","cmd svelte-1s042nt"),c(K,"class","arg svelte-1s042nt"),c(Q,"class","output svelte-1s042nt"),c(V,"class","prompt svelte-1s042nt"),c(W,"class","cmd svelte-1s042nt"),c(X,"class","arg svelte-1s042nt"),c(x,"href","https://2021.santahack.xyz"),c(x,"referrerpolicy","noreferrer"),c(T,"class","output svelte-1s042nt"),c(Z,"class","prompt svelte-1s042nt"),c(ss,"class","cmd svelte-1s042nt"),c(ts,"class","arg svelte-1s042nt"),c(es,"class","output svelte-1s042nt"),c(as,"class","prompt svelte-1s042nt"),c(ns,"class","cmd svelte-1s042nt"),c(ls,"class","arg svelte-1s042nt"),c(rs,"class","output svelte-1s042nt"),c(cs,"class","prompt svelte-1s042nt"),c(os,"class","cmd svelte-1s042nt"),c(ps,"class","arg svelte-1s042nt"),c(ds,"class","var svelte-1s042nt"),c(y,"class","str svelte-1s042nt"),c(U,"class","arg svelte-1s042nt"),c(fs,"class","output svelte-1s042nt"),c(vs,"class","prompt svelte-1s042nt"),c(us,"class","cmd svelte-1s042nt"),c(is,"class","arg svelte-1s042nt"),c(ms,"class","var svelte-1s042nt"),c($,"class","str svelte-1s042nt"),c(z,"class","arg svelte-1s042nt"),c(_s,"class","output svelte-1s042nt"),c(o,"class","svelte-1s042nt")},m(_,Ns){w(_,v,Ns),w(_,d,Ns),s(d,f),s(f,i),s(i,m),s(f,u),s(f,E),s(E,A),s(A,j),s(A,h),s(h,N),s(N,Ss),s(N,g),s(g,As),s(N,ks),s(A,xs),s(A,Y),s(Y,M),s(M,Hs),s(M,q),s(q,bs),s(M,Us),s(f,zs),s(f,F),je(I,F,null),s(f,js),s(f,G),je(O,G,null),w(_,Ds,Ns),w(_,L,Ns),s(L,o),s(o,B),s(B,Ys),s(o,qs),s(o,R),s(R,J),s(J,Fs),s(R,Gs),s(R,K),s(K,Ls),s(o,Bs),s(o,Q),s(Q,Js),s(o,Ks),s(o,V),s(V,Qs),s(o,Vs),s(o,k),s(k,W),s(W,Ws),s(k,Xs),s(k,X),s(X,Zs),s(o,st),s(o,T),s(T,tt),s(T,x),s(x,et),s(T,at),s(o,nt),s(o,Z),s(Z,lt),s(o,rt),s(o,H),s(H,ss),s(ss,ct),s(H,ot),s(H,ts),s(ts,pt),s(o,dt),s(o,es),s(es,ft),s(o,vt),s(o,as),s(as,ut),s(o,it),s(o,b),s(b,ns),s(ns,mt),s(b,_t),s(b,ls),s(ls,Et),s(o,ht),s(o,rs),s(rs,St),s(o,At),s(o,cs),s(cs,Nt),s(o,Pt),s(o,P),s(P,os),s(os,Dt),s(P,gt),s(P,ps),s(ps,Mt),s(P,Tt),s(P,U),s(U,yt),s(U,y),s(y,$t),s(y,ds),s(ds,Ct),s(y,wt),s(o,It),s(o,fs),s(fs,Ot),s(o,Rt),s(o,vs),s(vs,kt),s(o,xt),s(o,D),s(D,us),s(us,Ht),s(D,bt),s(D,is),s(is,Ut),s(D,zt),s(D,z),s(z,jt),s(z,$),s($,Yt),s($,ms),s(ms,qt),s($,Ft),s(o,Gt),s(o,_s),s(_s,Lt),gs=!0},p:Kt,i(_){gs||(Ye(I.$$.fragment,_),Ye(O.$$.fragment,_),gs=!0)},o(_){qe(I.$$.fragment,_),qe(O.$$.fragment,_),gs=!1},d(_){_&&a(v),_&&a(d),Fe(I),Fe(O),_&&a(Ds),_&&a(L)}}}const Ze=!0;function We(S){const v=new Date("2021-12-13"),d=new Date("2021-12-18");return[v,d]}class sa extends Ie{constructor(v){super();Oe(this,v,We,Ve,Re,{})}}export{sa as default,Ze as prerender};
