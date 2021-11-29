import{S as ws,i as Is,s as Os,e as l,t as e,c as n,a as r,g as s,d as a,b as o,f as C,G as t,h as Rs,l as ks,H as Ke,N as Bs,k as xs,j as Hs,O as Js,n as bs,m as Us,o as js,x as Ys,u as qs,v as Fs}from"../chunks/vendor-19970ed8.js";function Gs(g){let f,d;return{c(){f=l("span"),d=e(g[0]),this.h()},l(u){f=n(u,"SPAN",{class:!0});var i=r(f);d=s(i,g[0]),i.forEach(a),this.h()},h(){o(f,"class","passed svelte-jetd1d")},m(u,i){C(u,f,i),t(f,d)},p(u,i){i&1&&Rs(d,u[0])},d(u){u&&a(f)}}}function Ks(g){let f,d,u,i,m=g[2]&&Gs(g);return{c(){f=e(`SECONDS   MINUTES  HOURS  DAYS
`),d=l("span"),u=e(g[1]),m&&m.c(),i=ks(),this.h()},l(v){f=s(v,`SECONDS   MINUTES  HOURS  DAYS
`),d=n(v,"SPAN",{class:!0});var E=r(d);u=s(E,g[1]),E.forEach(a),m&&m.l(v),i=ks(),this.h()},h(){o(d,"class","output svelte-jetd1d")},m(v,E){C(v,f,E),C(v,d,E),t(d,u),m&&m.m(v,E),C(v,i,E)},p(v,[E]){E&2&&Rs(u,v[1]),v[2]?m?m.p(v,E):(m=Gs(v),m.c(),m.m(i.parentNode,i)):m&&(m.d(1),m=null)},i:Ke,o:Ke,d(v){v&&a(f),v&&a(d),m&&m.d(v),v&&a(i)}}}function Qs(g,f,d){let{passedString:u="// Timeout!"}=f,{time:i}=f,{intervalMs:m=1e3}=f,v,E=setInterval(j,m),S=!1;function j(){const h=i.getTime()-new Date().getTime();if(h<0){d(1,v="0s        0m       0h     0d  "),d(2,S=!0),clearInterval(E);return}const A=Math.floor(h/1e3)+"s",gt=Math.floor(h/1e3/60)+"m",P=Math.floor(h/1e3/60/60)+"h",St=Math.floor(h/1e3/60/60/24)+"d";d(1,v=A.padEnd(10)+gt.padEnd(9)+P.padEnd(7)+St)}return Bs(()=>clearInterval(E)),j(),g.$$set=h=>{"passedString"in h&&d(0,u=h.passedString),"time"in h&&d(3,i=h.time),"intervalMs"in h&&d(4,m=h.intervalMs)},[u,v,S,i,m]}class Ls extends ws{constructor(f){super();Is(this,f,Qs,Ks,Os,{passedString:0,time:3,intervalMs:4})}}function Vs(g){let f,d,u,i,m,v,E,S,j,h,A,gt,P,St,Rt,kt,Y,D,xt,q,Ht,bt,Ut,F,w,jt,G,I,Nt,L,c,B,Yt,qt,O,J,Ft,Gt,K,Lt,Bt,Q,Jt,Kt,V,Qt,Vt,R,W,Wt,Xt,X,Zt,te,M,ee,k,se,ae,le,Z,ne,re,x,tt,oe,ce,et,pe,de,st,ue,fe,at,ve,ie,H,lt,me,_e,nt,Ee,he,rt,ge,Se,ot,Ae,ze,z,ct,Ne,Pe,pt,De,Me,b,Te,T,ye,dt,$e,Ce,we,ut,Ie,Oe,ft,Re,ke,N,vt,xe,He,it,be,Ue,U,je,y,Ye,mt,qe,Fe,Ge,_t,Le,Pt;return w=new Ls({props:{time:g[0],passedString:"// Let's go! \u{1F389}"}}),I=new Ls({props:{time:g[1],passedString:"// It's over!"}}),{c(){f=xs(),d=l("section"),u=l("pre"),i=l("span"),m=e("$"),v=e(" "),E=l("code"),S=l("span"),j=e("./countdown.sh "),h=l("span"),A=l("span"),gt=e('"'),P=l("span"),St=e("$DATE_START"),Rt=e('"'),kt=e(" "),Y=l("span"),D=l("span"),xt=e('"'),q=l("span"),Ht=e("$DATE_END"),bt=e('"'),Ut=e(`
`),F=l("samp"),Hs(w.$$.fragment),jt=e(`

`),G=l("samp"),Hs(I.$$.fragment),Nt=xs(),L=l("section"),c=l("pre"),B=l("span"),Yt=e("$"),qt=e(" "),O=l("code"),J=l("span"),Ft=e("ls"),Gt=e(" "),K=l("span"),Lt=e("categories"),Bt=e(`
`),Q=l("samp"),Jt=e(`crypto	  osint  reversing
forensic  pwn	 web`),Kt=e(`

`),V=l("span"),Qt=e("$"),Vt=e(" "),R=l("code"),W=l("span"),Wt=e("cat"),Xt=e(" "),X=l("span"),Zt=e("location.md"),te=e(`
`),M=l("samp"),ee=e("- Reg: "),k=l("a"),se=e("<https://2021.santahack.xyz>"),ae=e(`
- Comms: TEAMS #2021 - Santa Hack

> *Reg opens later, stay tuned!*`),le=e(`

`),Z=l("span"),ne=e("$"),re=e(" "),x=l("code"),tt=l("span"),oe=e("cat"),ce=e(" "),et=l("span"),pe=e("difficulty.txt"),de=e(`
`),st=l("samp"),ue=e("Difficulty: [EASY => MEDIUM]"),fe=e(`

`),at=l("span"),ve=e("$"),ie=e(" "),H=l("code"),lt=l("span"),me=e("cat"),_e=e(" "),nt=l("span"),Ee=e("rules.yaml"),he=e(`
`),rt=l("samp"),ge=e(`teamSize:
  min: 1
  max: null
email:
  regex: ^.*(@iver\\.(com|se|no|pl)|@aztek\\.no|@nogui\\.se)$`),Se=e(`

`),ot=l("span"),Ae=e("$"),ze=e(" "),z=l("code"),ct=l("span"),Ne=e("date"),Pe=e(" "),pt=l("span"),De=e("-I"),Me=e(" "),b=l("span"),Te=e("-d "),T=l("span"),ye=e('"'),dt=l("span"),$e=e("$DATE_START"),Ce=e('"'),we=e(`
`),ut=l("samp"),Ie=e("2021-12-13"),Oe=e(`

`),ft=l("span"),Re=e("$"),ke=e(" "),N=l("code"),vt=l("span"),xe=e("date"),He=e(" "),it=l("span"),be=e("-I"),Ue=e(" "),U=l("span"),je=e("-d "),y=l("span"),Ye=e('"'),mt=l("span"),qe=e("$DATE_END"),Fe=e('"'),Ge=e(`
`),_t=l("samp"),Le=e("2021-12-17"),this.h()},l(_){Js('[data-svelte="svelte-rqn60g"]',document.head).forEach(a),f=bs(_),d=n(_,"SECTION",{});var Qe=r(d);u=n(Qe,"PRE",{class:!0});var $=r(u);i=n($,"SPAN",{class:!0});var Ve=r(i);m=s(Ve,"$"),Ve.forEach(a),v=s($," "),E=n($,"CODE",{});var We=r(E);S=n(We,"SPAN",{class:!0});var zt=r(S);j=s(zt,"./countdown.sh "),h=n(zt,"SPAN",{class:!0});var Xe=r(h);A=n(Xe,"SPAN",{class:!0});var Dt=r(A);gt=s(Dt,'"'),P=n(Dt,"SPAN",{class:!0});var Ze=r(P);St=s(Ze,"$DATE_START"),Ze.forEach(a),Rt=s(Dt,'"'),Dt.forEach(a),Xe.forEach(a),kt=s(zt," "),Y=n(zt,"SPAN",{class:!0});var ts=r(Y);D=n(ts,"SPAN",{class:!0});var Mt=r(D);xt=s(Mt,'"'),q=n(Mt,"SPAN",{class:!0});var es=r(q);Ht=s(es,"$DATE_END"),es.forEach(a),bt=s(Mt,'"'),Mt.forEach(a),ts.forEach(a),zt.forEach(a),We.forEach(a),Ut=s($,`
`),F=n($,"SAMP",{class:!0});var ss=r(F);Us(w.$$.fragment,ss),ss.forEach(a),jt=s($,`

`),G=n($,"SAMP",{class:!0});var as=r(G);Us(I.$$.fragment,as),as.forEach(a),$.forEach(a),Qe.forEach(a),Nt=bs(_),L=n(_,"SECTION",{});var ls=r(L);c=n(ls,"PRE",{class:!0});var p=r(c);B=n(p,"SPAN",{class:!0});var ns=r(B);Yt=s(ns,"$"),ns.forEach(a),qt=s(p," "),O=n(p,"CODE",{});var Tt=r(O);J=n(Tt,"SPAN",{class:!0});var rs=r(J);Ft=s(rs,"ls"),rs.forEach(a),Gt=s(Tt," "),K=n(Tt,"SPAN",{class:!0});var os=r(K);Lt=s(os,"categories"),os.forEach(a),Tt.forEach(a),Bt=s(p,`
`),Q=n(p,"SAMP",{class:!0});var cs=r(Q);Jt=s(cs,`crypto	  osint  reversing
forensic  pwn	 web`),cs.forEach(a),Kt=s(p,`

`),V=n(p,"SPAN",{class:!0});var ps=r(V);Qt=s(ps,"$"),ps.forEach(a),Vt=s(p," "),R=n(p,"CODE",{});var yt=r(R);W=n(yt,"SPAN",{class:!0});var ds=r(W);Wt=s(ds,"cat"),ds.forEach(a),Xt=s(yt," "),X=n(yt,"SPAN",{class:!0});var us=r(X);Zt=s(us,"location.md"),us.forEach(a),yt.forEach(a),te=s(p,`
`),M=n(p,"SAMP",{class:!0});var $t=r(M);ee=s($t,"- Reg: "),k=n($t,"A",{href:!0,referrerpolicy:!0});var fs=r(k);se=s(fs,"<https://2021.santahack.xyz>"),fs.forEach(a),ae=s($t,`
- Comms: TEAMS #2021 - Santa Hack

> *Reg opens later, stay tuned!*`),$t.forEach(a),le=s(p,`

`),Z=n(p,"SPAN",{class:!0});var vs=r(Z);ne=s(vs,"$"),vs.forEach(a),re=s(p," "),x=n(p,"CODE",{});var Ct=r(x);tt=n(Ct,"SPAN",{class:!0});var is=r(tt);oe=s(is,"cat"),is.forEach(a),ce=s(Ct," "),et=n(Ct,"SPAN",{class:!0});var ms=r(et);pe=s(ms,"difficulty.txt"),ms.forEach(a),Ct.forEach(a),de=s(p,`
`),st=n(p,"SAMP",{class:!0});var _s=r(st);ue=s(_s,"Difficulty: [EASY => MEDIUM]"),_s.forEach(a),fe=s(p,`

`),at=n(p,"SPAN",{class:!0});var Es=r(at);ve=s(Es,"$"),Es.forEach(a),ie=s(p," "),H=n(p,"CODE",{});var wt=r(H);lt=n(wt,"SPAN",{class:!0});var hs=r(lt);me=s(hs,"cat"),hs.forEach(a),_e=s(wt," "),nt=n(wt,"SPAN",{class:!0});var gs=r(nt);Ee=s(gs,"rules.yaml"),gs.forEach(a),wt.forEach(a),he=s(p,`
`),rt=n(p,"SAMP",{class:!0});var Ss=r(rt);ge=s(Ss,`teamSize:
  min: 1
  max: null
email:
  regex: ^.*(@iver\\.(com|se|no|pl)|@aztek\\.no|@nogui\\.se)$`),Ss.forEach(a),Se=s(p,`

`),ot=n(p,"SPAN",{class:!0});var As=r(ot);Ae=s(As,"$"),As.forEach(a),ze=s(p," "),z=n(p,"CODE",{});var Et=r(z);ct=n(Et,"SPAN",{class:!0});var zs=r(ct);Ne=s(zs,"date"),zs.forEach(a),Pe=s(Et," "),pt=n(Et,"SPAN",{class:!0});var Ns=r(pt);De=s(Ns,"-I"),Ns.forEach(a),Me=s(Et," "),b=n(Et,"SPAN",{class:!0});var Be=r(b);Te=s(Be,"-d "),T=n(Be,"SPAN",{class:!0});var It=r(T);ye=s(It,'"'),dt=n(It,"SPAN",{class:!0});var Ps=r(dt);$e=s(Ps,"$DATE_START"),Ps.forEach(a),Ce=s(It,'"'),It.forEach(a),Be.forEach(a),Et.forEach(a),we=s(p,`
`),ut=n(p,"SAMP",{class:!0});var Ds=r(ut);Ie=s(Ds,"2021-12-13"),Ds.forEach(a),Oe=s(p,`

`),ft=n(p,"SPAN",{class:!0});var Ms=r(ft);Re=s(Ms,"$"),Ms.forEach(a),ke=s(p," "),N=n(p,"CODE",{});var ht=r(N);vt=n(ht,"SPAN",{class:!0});var Ts=r(vt);xe=s(Ts,"date"),Ts.forEach(a),He=s(ht," "),it=n(ht,"SPAN",{class:!0});var ys=r(it);be=s(ys,"-I"),ys.forEach(a),Ue=s(ht," "),U=n(ht,"SPAN",{class:!0});var Je=r(U);je=s(Je,"-d "),y=n(Je,"SPAN",{class:!0});var Ot=r(y);Ye=s(Ot,'"'),mt=n(Ot,"SPAN",{class:!0});var $s=r(mt);qe=s($s,"$DATE_END"),$s.forEach(a),Fe=s(Ot,'"'),Ot.forEach(a),Je.forEach(a),ht.forEach(a),Ge=s(p,`
`),_t=n(p,"SAMP",{class:!0});var Cs=r(_t);Le=s(Cs,"2021-12-17"),Cs.forEach(a),p.forEach(a),ls.forEach(a),this.h()},h(){document.title="Iver's Christmas CTF 2021",o(i,"class","prompt svelte-17lz6tg"),o(P,"class","var svelte-17lz6tg"),o(A,"class","str svelte-17lz6tg"),o(h,"class","arg svelte-17lz6tg"),o(q,"class","var svelte-17lz6tg"),o(D,"class","str svelte-17lz6tg"),o(Y,"class","arg svelte-17lz6tg"),o(S,"class","cmd svelte-17lz6tg"),o(F,"class","output svelte-17lz6tg"),o(G,"class","output svelte-17lz6tg"),o(u,"class","x-large svelte-17lz6tg"),o(B,"class","prompt svelte-17lz6tg"),o(J,"class","cmd svelte-17lz6tg"),o(K,"class","arg svelte-17lz6tg"),o(Q,"class","output svelte-17lz6tg"),o(V,"class","prompt svelte-17lz6tg"),o(W,"class","cmd svelte-17lz6tg"),o(X,"class","arg svelte-17lz6tg"),o(k,"href","https://2021.santahack.xyz"),o(k,"referrerpolicy","noreferrer"),o(M,"class","output svelte-17lz6tg"),o(Z,"class","prompt svelte-17lz6tg"),o(tt,"class","cmd svelte-17lz6tg"),o(et,"class","arg svelte-17lz6tg"),o(st,"class","output svelte-17lz6tg"),o(at,"class","prompt svelte-17lz6tg"),o(lt,"class","cmd svelte-17lz6tg"),o(nt,"class","arg svelte-17lz6tg"),o(rt,"class","output svelte-17lz6tg"),o(ot,"class","prompt svelte-17lz6tg"),o(ct,"class","cmd svelte-17lz6tg"),o(pt,"class","arg svelte-17lz6tg"),o(dt,"class","var svelte-17lz6tg"),o(T,"class","str svelte-17lz6tg"),o(b,"class","arg svelte-17lz6tg"),o(ut,"class","output svelte-17lz6tg"),o(ft,"class","prompt svelte-17lz6tg"),o(vt,"class","cmd svelte-17lz6tg"),o(it,"class","arg svelte-17lz6tg"),o(mt,"class","var svelte-17lz6tg"),o(y,"class","str svelte-17lz6tg"),o(U,"class","arg svelte-17lz6tg"),o(_t,"class","output svelte-17lz6tg"),o(c,"class","larger svelte-17lz6tg")},m(_,At){C(_,f,At),C(_,d,At),t(d,u),t(u,i),t(i,m),t(u,v),t(u,E),t(E,S),t(S,j),t(S,h),t(h,A),t(A,gt),t(A,P),t(P,St),t(A,Rt),t(S,kt),t(S,Y),t(Y,D),t(D,xt),t(D,q),t(q,Ht),t(D,bt),t(u,Ut),t(u,F),js(w,F,null),t(u,jt),t(u,G),js(I,G,null),C(_,Nt,At),C(_,L,At),t(L,c),t(c,B),t(B,Yt),t(c,qt),t(c,O),t(O,J),t(J,Ft),t(O,Gt),t(O,K),t(K,Lt),t(c,Bt),t(c,Q),t(Q,Jt),t(c,Kt),t(c,V),t(V,Qt),t(c,Vt),t(c,R),t(R,W),t(W,Wt),t(R,Xt),t(R,X),t(X,Zt),t(c,te),t(c,M),t(M,ee),t(M,k),t(k,se),t(M,ae),t(c,le),t(c,Z),t(Z,ne),t(c,re),t(c,x),t(x,tt),t(tt,oe),t(x,ce),t(x,et),t(et,pe),t(c,de),t(c,st),t(st,ue),t(c,fe),t(c,at),t(at,ve),t(c,ie),t(c,H),t(H,lt),t(lt,me),t(H,_e),t(H,nt),t(nt,Ee),t(c,he),t(c,rt),t(rt,ge),t(c,Se),t(c,ot),t(ot,Ae),t(c,ze),t(c,z),t(z,ct),t(ct,Ne),t(z,Pe),t(z,pt),t(pt,De),t(z,Me),t(z,b),t(b,Te),t(b,T),t(T,ye),t(T,dt),t(dt,$e),t(T,Ce),t(c,we),t(c,ut),t(ut,Ie),t(c,Oe),t(c,ft),t(ft,Re),t(c,ke),t(c,N),t(N,vt),t(vt,xe),t(N,He),t(N,it),t(it,be),t(N,Ue),t(N,U),t(U,je),t(U,y),t(y,Ye),t(y,mt),t(mt,qe),t(y,Fe),t(c,Ge),t(c,_t),t(_t,Le),Pt=!0},p:Ke,i(_){Pt||(Ys(w.$$.fragment,_),Ys(I.$$.fragment,_),Pt=!0)},o(_){qs(w.$$.fragment,_),qs(I.$$.fragment,_),Pt=!1},d(_){_&&a(f),_&&a(d),Fs(w),Fs(I),_&&a(Nt),_&&a(L)}}}const Zs=!0;function Ws(g){const f=new Date("2021-12-13"),d=new Date("2021-12-18");return[f,d]}class ta extends ws{constructor(f){super();Is(this,f,Ws,Vs,Os,{})}}export{ta as default,Zs as prerender};
