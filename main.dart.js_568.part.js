self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
bHB(d){var w,v,u,t=d.length,s=new Float32Array(t*2)
for(w=0;w<t;++w){v=2*w
u=d[w]
s[v]=u.a
s[v+1]=u.b}return s},
bs6(d,e,f,g,h){var w,v,u=null,t=e.length
if(f.length!==t)throw B.f(B.cd('"positions" and "colors" lengths must match.',u))
t=$.bnL()[d.a]
w=A.bHB(e)
v=B.blk(f)
t=new A.HC(t,w,u,v,u)
t.zm(u)
return t},
bz0(d){var w,v=d.length,u=new Int32Array(v)
for(w=0;w<v;++w)u[w]=d[w].a
return u},
bGG(d){var w,v,u,t=d.length,s=new Float32Array(t*2)
for(w=0,v=0;w<t;++w,v+=2){u=d[w]
s[v]=u.a
s[v+1]=u.b}return s},
HC:function HC(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=null},
a7b:function a7b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
atL(d,e,f){var w,v,u=f.a,t=e.a,s=Math.pow(u[0]-t[0],2)+Math.pow(u[1]-t[1],2)
if(s===0)return e
w=d.as(0,e)
v=f.as(0,e)
return e.Z(0,v.zd(C.f.O(w.DN(v)/s,0,1)))},
bwA(d,e){var w,v,u,t,s,r,q,p=e.a,o=d.as(0,p),n=e.b,m=n.as(0,p),l=e.d,k=l.as(0,p),j=o.DN(m),i=m.DN(m),h=o.DN(k),g=k.DN(k)
if(0<=j&&j<=i&&0<=h&&h<=g)return d
w=e.c
v=[A.atL(d,p,n),A.atL(d,n,w),A.atL(d,w,l),A.atL(d,l,p)]
u=B.ci("closestOverall")
for(p=d.a,t=1/0,s=0;s<4;++s){r=v[s]
n=r.a
q=Math.sqrt(Math.pow(p[0]-n[0],2)+Math.pow(p[1]-n[1],2))
if(q<t){u.b=r
t=q}}return u.rd()},
bzm(){var w=new B.bv(new Float64Array(16))
w.tQ()
return new A.a7L(w,B.Z(0,null,!1,x.Y))},
bjP(d,e){var w,v,u,t,s,r,q
d.toString
w=new B.bv(new Float64Array(16))
w.qP(d)
w.yL(w)
v=e.a
u=e.b
t=new B.cm(new Float64Array(3))
t.u7(v,u,0)
t=w.z8(t)
s=e.c
r=new B.cm(new Float64Array(3))
r.u7(s,u,0)
r=w.z8(r)
u=e.d
q=new B.cm(new Float64Array(3))
q.u7(s,u,0)
q=w.z8(q)
s=new B.cm(new Float64Array(3))
s.u7(v,u,0)
s=w.z8(s)
v=new B.cm(new Float64Array(3))
v.qP(t)
u=new B.cm(new Float64Array(3))
u.qP(r)
t=new B.cm(new Float64Array(3))
t.qP(q)
r=new B.cm(new Float64Array(3))
r.qP(s)
return new A.a4G(v,u,t,r)},
bjb(d,e){var w,v,u,t,s,r,q=[e.a,e.b,e.c,e.d]
for(w=C.n,v=0;v<4;++v){u=q[v]
t=A.bwA(u,d).a
s=u.a
r=t[0]-s[0]
s=t[1]-s[1]
if(Math.abs(r)>Math.abs(w.a))w=new B.m(r,w.b)
if(Math.abs(s)>Math.abs(w.b))w=new B.m(w.a,s)}return A.bbk(w)},
bbk(d){return new B.m(B.akR(J.bJ(d.a,9)),B.akR(J.bJ(d.b,9)))},
bCx(d,e){if(J.i(d,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.aj:C.w},
Jz:function Jz(d,e,f,g,h,i,j){var _=this
_.e=d
_.r=e
_.z=f
_.ch=g
_.cy=h
_.dx=i
_.a=j},
Qr:function Qr(d,e,f,g){var _=this
_.d=null
_.e=d
_.f=e
_.r=null
_.x=$
_.Q=_.z=_.y=null
_.cx=_.ch=0
_.cy=null
_.a2$=f
_.a=null
_.b=g
_.c=null},
aRt:function aRt(){},
ad1:function ad1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a7L:function a7L(d,e){var _=this
_.a=d
_.ad$=0
_.an$=e
_.aF$=_.oh$=0
_.oi$=!1},
Q2:function Q2(d,e){this.a=d
this.b=e},
UG:function UG(){},
bzn(){return new A.rF(null)},
rF:function rF(d){this.a=d},
Tp:function Tp(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.f=f
_.y=_.x=_.r=null
_.a2$=g
_.a=null
_.b=h
_.c=null},
b_9:function b_9(d,e){this.a=d
this.b=e},
b_a:function b_a(d){this.a=d},
b_g:function b_g(d){this.a=d},
b_f:function b_f(d){this.a=d},
b_e:function b_e(d){this.a=d},
b_d:function b_d(d){this.a=d},
b_c:function b_c(d,e){this.a=d
this.b=e},
b_b:function b_b(d,e,f){this.a=d
this.b=e
this.c=f},
a91:function a91(d,e){this.b=d
this.a=e},
aIz:function aIz(d,e){this.a=d
this.b=e},
Vk:function Vk(){},
b7X(d,e,f,g,h){var w=new A.Wv(e,g,f,B.b([],x.n),h,B.b([],x.Z))
w.amg(d,e,f,g,h)
return w},
Wv:function Wv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
amz:function amz(d){this.a=d},
amy:function amy(d){this.a=d},
amx:function amx(d){this.a=d},
aIy:function aIy(d){this.a=d
this.c=this.b=null},
aVj:function aVj(d,e){this.a=d
this.b=e},
hc:function hc(d,e,f){this.a=d
this.b=e
this.c=f},
a92:function a92(){},
XG:function XG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anV:function anV(d){this.a=d},
anU:function anU(d,e){this.a=d
this.b=e},
yz:function yz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKe:function aKe(d){this.a=d},
a_w:function a_w(d,e,f){this.c=d
this.d=e
this.a=f},
a4G:function a4G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bzB(d,e,f){var w,v=B.at()
if(v)return A.bs6(d,e,f,null,null)
v=A.bz0(f)
w=A.bGG(e)
if($.Gv==null)$.Gv=new B.aiY()
return new A.a7b(d,w,v,null)}},J,B,C,D,E,F
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[84],A)
J=c[1]
B=c[0]
C=c[2]
D=c[123]
E=c[113]
F=c[97]
A.HC.prototype={
y_(){var w=this
return J.bok($.cD.rH(),w.b,w.c,w.d,w.e,w.f)},
Aa(){return this.y_()},
v4(d){var w=this.a
if(w!=null)J.iM(w)}}
A.a7b.prototype={}
A.Jz.prototype={
H(){var w=x.z
return new A.Qr(new B.ac(null,w),new B.ac(null,w),null,C.j)}}
A.Qr.prototype={
gLa(){var w=$.T.q$.Q.j(0,this.e).gD()
w.toString
w=x.x.a(w).rx
w.toString
return this.a.e.J5(new B.E(0,0,0+w.a,0+w.b))},
gMN(){var w=$.T.q$.Q.j(0,this.f).gD()
w.toString
w=x.x.a(w).rx
return new B.E(0,0,0+w.a,0+w.b)},
M4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this
if(a2.t(0,C.n)){a1.toString
w=new B.bv(new Float64Array(16))
w.qP(a1)
return w}a0.a.toString
a1.toString
v=new B.bv(new Float64Array(16))
v.qP(a1)
v.p_(0,a2.a,a2.b)
u=A.bjP(v,a0.gMN())
w=a0.gLa()
if(w.a>=1/0||w.b>=1/0||w.c>=1/0||w.d>=1/0)return v
w=a0.gLa()
t=a0.cx
s=new B.bv(new Float64Array(16))
s.tQ()
r=w.c
q=w.a
p=r-q
o=w.d
w=w.b
n=o-w
s.p_(0,p/2,n/2)
s.P6(t)
s.p_(0,-p/2,-n/2)
t=new B.cm(new Float64Array(3))
t.u7(q,w,0)
t=s.z8(t)
p=new B.cm(new Float64Array(3))
p.u7(r,w,0)
p=s.z8(p)
w=new B.cm(new Float64Array(3))
w.u7(r,o,0)
w=s.z8(w)
r=new B.cm(new Float64Array(3))
r.u7(q,o,0)
r=s.z8(r)
q=new Float64Array(3)
new B.cm(q).qP(t)
t=new Float64Array(3)
new B.cm(t).qP(p)
p=new Float64Array(3)
new B.cm(p).qP(w)
w=new Float64Array(3)
new B.cm(w).qP(r)
r=q[0]
o=t[0]
n=p[0]
m=w[0]
l=Math.min(r,Math.min(o,Math.min(n,m)))
q=q[1]
t=t[1]
p=p[1]
w=w[1]
k=Math.min(q,Math.min(t,Math.min(p,w)))
j=Math.max(r,Math.max(o,Math.max(n,m)))
i=Math.max(q,Math.max(t,Math.max(p,w)))
w=new B.cm(new Float64Array(3))
w.u7(l,k,0)
t=new B.cm(new Float64Array(3))
t.u7(j,k,0)
r=new B.cm(new Float64Array(3))
r.u7(j,i,0)
q=new B.cm(new Float64Array(3))
q.u7(l,i,0)
p=new B.cm(new Float64Array(3))
p.qP(w)
w=new B.cm(new Float64Array(3))
w.qP(t)
t=new B.cm(new Float64Array(3))
t.qP(r)
r=new B.cm(new Float64Array(3))
r.qP(q)
h=new A.a4G(p,w,t,r)
g=A.bjb(h,u)
if(g.t(0,C.n))return v
w=v.PC().a
t=w[0]
w=w[1]
f=a1.Ki()
t-=g.a*f
w-=g.b*f
e=new B.bv(new Float64Array(16))
e.qP(a1)
r=new B.cm(new Float64Array(3))
r.u7(t,w,0)
e.ZZ(r)
d=A.bjb(h,A.bjP(e,a0.gMN()))
if(d.t(0,C.n))return e
r=d.a===0
if(!r&&d.b!==0){w=new B.bv(new Float64Array(16))
w.qP(a1)
return w}t=r?t:0
w=d.b===0?w:0
r=new B.bv(new Float64Array(16))
r.qP(a1)
q=new B.cm(new Float64Array(3))
q.u7(t,w,0)
r.ZZ(q)
return r},
a4i(d,e){var w,v,u,t,s,r,q=this
if(e===1){d.toString
w=new B.bv(new Float64Array(16))
w.qP(d)
return w}v=q.d.a.Ki()
w=q.gMN()
u=q.gLa()
t=q.gMN()
s=q.gLa()
r=C.f.O(Math.max(v*e,Math.max((w.c-w.a)/(u.c-u.a),(t.d-t.b)/(s.d-s.b))),q.a.ch,2.5)
d.toString
w=new B.bv(new Float64Array(16))
w.qP(d)
w.rs(0,r/v)
return w},
aAH(d,e,f){var w,v,u,t
if(e===0){d.toString
w=new B.bv(new Float64Array(16))
w.qP(d)
return w}v=this.d.z7(f)
d.toString
w=new B.bv(new Float64Array(16))
w.qP(d)
u=v.a
t=v.b
w.p_(0,u,t)
w.P6(-e)
w.p_(0,-u,-t)
return w},
Si(d){switch(d){case D.axE:return!1
case D.q7:this.a.toString
return!1
case D.lP:case null:this.a.toString
return!0
default:throw B.f(B.l(y.b))}},
a2O(d){this.a.toString
if(Math.abs(0)>Math.abs(0))return D.q7
else return D.lP},
azZ(d){var w,v=this,u="_controller"
v.a.cy.$1(d)
w=B.d(v.x,u).r
if(w!=null&&w.a!=null){B.d(v.x,u).ta(0)
w=B.d(v.x,u)
w.sl(0,w.a)
w=v.r
if(w!=null)w.a.S(0,v.gMd())
v.r=null}v.y=v.cy=null
v.Q=v.d.a.Ki()
v.z=v.d.z7(d.b)
v.ch=v.cx},
aBU(d){var w,v,u,t,s,r,q=this,p=q.d.a.Ki(),o=d.c,n=q.d.z7(o),m=q.cy
if(m===D.lP)m=q.cy=q.a2O(d)
else if(m==null){m=q.a2O(d)
q.cy=m}if(!q.Si(m)){q.a.toString
return}switch(q.cy.a){case 1:m=q.Q
m.toString
w=q.d
w.sl(0,q.a4i(w.a,m*d.d/p))
v=q.d.z7(o)
m=q.d
w=m.a
u=q.z
u.toString
m.sl(0,q.M4(w,v.as(0,u)))
t=q.d.z7(o)
o=q.z
o.toString
if(!A.bbk(o).t(0,A.bbk(t)))q.z=t
break
case 2:m=d.r
if(m===0){q.a.toString
return}w=q.ch
w.toString
s=w+m
m=q.d
m.sl(0,q.aAH(m.a,q.cx-s,o))
q.cx=s
break
case 0:if(d.d!==1){q.a.toString
return}if(q.y==null){m=q.z
m.toString
q.y=A.bCx(m,n)}m=q.z
m.toString
r=n.as(0,m)
m=q.d
m.sl(0,q.M4(m.a,r))
q.z=q.d.z7(o)
break
default:throw B.f(B.l(y.b))}q.a.toString},
aBQ(d){var w,v,u,t,s,r,q,p=this,o="_controller"
p.a.toString
p.z=p.ch=p.Q=null
w=p.r
if(w!=null)w.a.S(0,p.gMd())
w=B.d(p.x,o)
w.sl(0,w.a)
if(!p.Si(p.cy)){p.y=null
return}if(p.cy!==D.lP||d.a.a.gu9()<50){p.y=null
return}w=p.d.a.PC().a
v=w[0]
w=w[1]
u=d.a.a
t=Math.log(0.0000135)
s=Math.log(0.0000135)
r=Math.log(10/u.gu9())
q=Math.log(135e-9)
t=new B.Aw(0.0000135,t,v,u.a,C.cJ).gIU()
u=new B.Aw(0.0000135,s,w,u.b,C.cJ).gIU()
s=x.L
p.r=new B.I(B.aE(C.dD,B.d(p.x,o),null),new B.a4(new B.m(v,w),new B.m(t,u),s),s.h("I<X.T>"))
B.d(p.x,o).e=B.dO(0,0,C.f.aB(r/q*1000),0,0)
p.r.a.ah(0,p.gMd())
B.d(p.x,o).oT(0)},
aA0(d){var w,v,u,t,s,r,q=this
if(x.C.b(d)){if(d.gGH().b===0)return
w=q.a.cy
v=d.gr6(d)
u=d.gv6()
w.$1(new B.rj(v,u==null?v:u,0))
t=Math.exp(-d.gGH().b/200)
if(!q.Si(D.q7)){q.a.toString
return}w=q.d
w.toString
s=w.z7(d.gv6())
w=q.d
w.sl(0,q.a4i(w.a,t))
w=q.d
w.toString
r=w.z7(d.gv6())
w=q.d
w.sl(0,q.M4(w.a,r.as(0,s)))
q.a.toString}},
aBj(){var w,v,u,t,s=this,r="_controller",q=B.d(s.x,r).r
if(!(q!=null&&q.a!=null)){s.y=null
q=s.r
if(q!=null)q.a.S(0,s.gMd())
s.r=null
q=B.d(s.x,r)
q.sl(0,q.a)
return}q=s.d.a.PC().a
w=q[0]
q=q[1]
v=s.d.z7(new B.m(w,q))
q=s.d
q.toString
w=s.r
u=w.b
w=w.a
t=q.z7(u.J(0,w.gl(w))).as(0,v)
w=s.d
w.sl(0,s.M4(w.a,t))},
aC7(){this.B(new A.aRt())},
a7(){var w,v=this,u=null
v.ae()
w=v.a.dx
v.d=w
w.ah(0,v.gTn())
v.x=B.aR(C.u,u,u,0,u,1,u,v)},
ai(d){var w,v,u=this
u.ay(d)
d.toString
w=u.a
if(w.dx!==d.dx){w=u.gTn()
u.d.S(0,w)
v=u.a.dx
u.d=v
v.ah(0,w)}},
k(d){var w=this
B.d(w.x,"_controller").k(0)
w.d.S(0,w.gTn())
w.a.toString
w.al3(0)},
n(d,e){var w,v,u=this,t=null,s=u.a
s.toString
w=u.d
v=new A.ad1(s.r,u.e,C.r,!0,w.a,t)
return B.K3(C.dQ,B.cs(C.aW,v,C.B,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gaBP(),u.gazY(),u.gaBT(),t,t,t,t,t,t,t),u.f,t,t,u.gaA_(),t)}}
A.ad1.prototype={
n(d,e){var w=this,v=B.n6(null,new B.hj(w.c,w.d),w.r,!0),u=w.e
return u!==C.h?B.iR(v,u,null):v}}
A.a7L.prototype={
z7(d){var w,v,u=this.a,t=new B.bv(new Float64Array(16))
if(t.yL(u)===0)B.J(B.fm(u,"other","Matrix cannot be inverted"))
u=d.a
w=d.b
v=new B.cm(new Float64Array(3))
v.u7(u,w,0)
v=t.z8(v).a
return new B.m(v[0],v[1])}}
A.Q2.prototype={
i(d){return"_GestureType."+this.b}}
A.UG.prototype={
k(d){this.a3(0)},
R(){var w,v=this.c
v.toString
w=!B.bk(v)
v=this.a2$
if(v!=null)for(v=B.bX(v,v.r);v.w();)v.d.sqq(0,w)
this.ag()}}
A.rF.prototype={
H(){var w=null
return new A.Tp(new B.ac(w,x.H),A.b7X(w,8,1,16,w),A.bzm(),w,C.j)}}
A.Tp.prototype={
aBk(){var w=this,v=w.r,u=v.b
v=v.a
w.f.sl(0,u.J(0,v.gl(v)))
v=w.x.r
if(!(v!=null&&v.a!=null)){v=w.r
if(v!=null)v.a.S(0,w.gTj())
w.r=null
v=w.x
v.sl(0,v.a)}},
aBS(d){var w,v=this
if(B.d(v.x.ch,"_status")===C.a6){v.x.ta(0)
w=v.r
if(w!=null)w.a.S(0,v.gTj())
v.r=null
w=v.x
w.sl(0,w.a)}},
aC4(d){var w=this,v=w.f.z7(d.a.as(0,B.f3(x.T.a($.T.q$.Q.j(0,w.d).gD()).ts(0,null),C.n)))
w.B(new A.b_9(w,w.e.aQl(v)))},
a7(){var w=null
this.ae()
this.x=B.aR(C.u,w,w,0,w,1,w,this)},
n(d,e){var w=null,v=B.u(e).m
return B.bT(B.cv(w,w,!1,w,w,w,1,w,w,w,!1,w,w,w,w,w,!0,w,w,w,w,B.r(B.j(e,C.b,x.s).gbd(),w,w,w,w,w,w,w,w),w,w,w,1,w),v.a,B.Q(w,new B.cU(new A.b_a(this),w),C.h,D.rV,w,w,w,w,w,w,w,w,w,w),w,w,!1,w,w,w,B.b([this.gaR2(),this.gaLQ()],x.t),w)},
gaR2(){var w=this.c
w.toString
return B.c4(B.u(w).m.e,!0,null,D.a2N,24,null,new A.b_g(this),C.L,null,"Reset")},
gaLQ(){var w=this.c
w.toString
return B.c4(B.u(w).m.e,!0,null,E.nT,24,null,new A.b_e(this),C.L,null,"Edit")},
k(d){this.x.k(0)
this.am_(0)}}
A.a91.prototype={
aC(d,e){this.b.aa(0,new A.aIz(this,d))},
ug(d){return d.b!==this.b}}
A.Vk.prototype={
k(d){this.a3(0)},
R(){var w,v=this.c
v.toString
w=!B.bk(v)
v=this.a2$
if(v!=null)for(v=B.bX(v,v.r);v.w();)v.d.sqq(0,w)
this.ag()}}
A.Wv.prototype={
amg(d,e,f,g,h){var w,v,u,t,s,r=this,q=r.b,p=-q,o=q-r.c,n=Math.sqrt(3)/2*o
q=0+n
w=p+0.5*o
v=p+1.5*o
u=p+2*o
t=0-n
C.c.a8(r.d,B.b([new B.m(0,p),new B.m(q,w),new B.m(q,v),new B.m(q,v),new B.m(0,u),new B.m(0,u),new B.m(t,v),new B.m(t,v),new B.m(t,w)],x.n))
if(d!=null)C.c.a8(r.f,d)
else{s=r.a2T(null)
for(q=r.f;s!=null;){q.push(s)
s=r.a2T(s)}}},
gak(d){return new A.aIy(this.f)},
a2Y(d){var w=this.a,v=-w
if(d<=0)v-=d
else w-=d
return new A.aVj(v,w)},
a2T(d){var w,v,u,t=this
if(d==null)return new A.hc(-t.a,0,D.ha)
w=d.a
v=t.a2Y(w)
if(w>=t.a&&d.b>=v.b)return null
u=d.b
if(u>=v.b){++w
return new A.hc(w,t.a2Y(w).a,D.ha)}return new A.hc(w,u+1,D.ha)},
gvb(d){var w=this.b,v=this.a
return new B.K((v*2+1)*(Math.sqrt(3)/2*w)*2,2*(w+v*1.5*w))},
aQl(d){var w=this,v=w.gvb(w),u=d.b-w.gvb(w).b/2,t=w.b,s=new A.hc(C.f.aB((Math.sqrt(3)/3*(d.a-v.a/2)-0.3333333333333333*u)/t),C.f.aB(0.6666666666666666*u/t),D.ha)
v=D.NA.ga9y().a
u=s.ga9y().a
if(C.f.rf(Math.abs(v[0]-u[0])+Math.abs(v[1]-u[1])+Math.abs(v[2]-u[2]),2)>w.a)return null
return C.c.DW(w.f,new A.amz(s))},
aeu(d,e){var w=this,v=w.b,u=d.b,t=w.d,s=B.aw(t).h("aM<1,m*>"),r=B.aV(new B.aM(t,new A.amy(new B.iu(Math.sqrt(3)*v*d.a+Math.sqrt(3)/2*v*u+w.gvb(w).a/2,1.5*v*u+w.gvb(w).b/2,x.e)),s),!0,s.h("bP.E"))
return A.bzB(C.M6,r,B.Z(r.length,e,!1,x.G))},
aKU(d){var w=this
if(J.i(w.e,d))return w
return A.b7X(w.f,w.a,w.c,w.b,d)},
aKT(d,e){var w,v,u=this,t=new A.hc(d.a,d.b,e),s=u.f,r=C.c.WW(s,new A.amx(d))
if(J.i(u.r8(0,r),d)&&J.i(d.c,e))return u
w=B.cI(s,!0,x.y)
w[r]=t
v=u.e
if(d.t(0,v))v=t
return A.b7X(w,u.a,u.c,u.b,v)},
$iG:1}
A.aIy.prototype={
w(){var w,v=this,u=v.b
u=u==null?v.b=0:v.b=u+1
w=v.a
if(u>=w.length){v.c=null
return!1}v.c=w[u]
return!0},
gN(d){return this.c}}
A.aVj.prototype={}
A.hc.prototype={
i(d){return"BoardPoint("+this.a+", "+this.b+", "+B.c(this.c)+")"},
t(d,e){if(e==null)return!1
if(J.aa(e)!==B.a1(this))return!1
return e instanceof A.hc&&e.a===this.a&&e.b===this.b},
gL(d){return B.au(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
ga9y(){var w=this.a,v=this.b,u=new B.cm(new Float64Array(3))
u.u7(w,v,-w-v)
return u}}
A.a92.prototype={}
A.XG.prototype={
n(d,e){var w=this.c,v=B.U(w).h("l2<e0.E,yz*>")
return B.az(B.aV(new B.l2(w,new A.anV(this),v),!0,v.h("G.E")),C.l,null,C.b9,C.k,null)}}
A.yz.prototype={
n(d,e){var w=null,v=!this.d?w:D.a23
return B.Q(w,B.ba_(!1,v,C.h,C.Os,0,2,!0,this.c,w,4,w,w,8,w,4,w,w,new A.aKe(this),C.dr,w,w),C.h,w,w,w,w,60,w,w,D.a_w,w,w,60)}}
A.a_w.prototype={
n(d,e){var w=null,v=B.eb([C.o,C.j3,C.mR,C.t2,D.rV],x.G),u=this.c
return B.a7(B.b([B.r(""+u.a+", "+u.b,w,w,w,w,C.ln,C.pv,w,w),new A.XG(v,u.c,this.d,w)],x.t),C.aS,w,C.i,C.k,C.m)}}
A.a4G.prototype={}
var z=a.updateTypes(["~()","N*(hc*)","~(rj)","~(Ml)","~(C8)","~(kn)","~(rj*)","~(j9*)","~(hc*)","yz*(k*)"])
A.aRt.prototype={
$0(){},
$S:0}
A.b_9.prototype={
$0(){var w=this.a
w.e=w.e.aKU(this.b)},
$S:1}
A.b_a.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=this.a
if(q.y==null){w=new B.bv(new Float64Array(16))
w.tQ()
v=q.e
v=v.gvb(v)
u=q.e
w.p_(0,s/2-v.a/2,r/2-u.gvb(u).b/2)
q.y=w
q.f.sl(0,w)}w=q.e
w=w.gvb(w)
return B.iR(new B.dy(t,t,t,C.aN,!0,B.cs(C.aW,new A.Jz(new B.a_(s,r,s,r),B.bab(B.he(t,t,t,new A.a91(q.e,t),w)),!1,0.01,q.gaBR(),q.f,q.d),C.B,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,q.gaC3(),t,t,t),t),C.r,t)},
$S:765}
A.b_g.prototype={
$0(){var w=this.a
w.B(new A.b_f(w))},
$S:1}
A.b_f.prototype={
$0(){var w,v,u=this.a,t=u.x
t.sl(0,t.a)
t=u.f.a
w=u.y
v=u.x
u.r=new B.I(v,new B.o2(t,w),x.d.h("I<X.T>"))
v.e=C.hg
v.ah(0,u.gTj())
u.x.oT(0)},
$S:1}
A.b_e.prototype={
$0(){var w,v=this.a
if(v.e.e==null)return
w=v.c
w.toString
F.bbS(new A.b_d(v),w,x.M)},
$S:1}
A.b_d.prototype={
$1(d){var w=null,v=this.a
return B.Q(w,new A.a_w(v.e.e,new A.b_c(v,d),w),C.h,w,w,w,w,150,w,w,C.hi,w,w,1/0)},
$S:766}
A.b_c.prototype={
$1(d){var w=this.a
w.B(new A.b_b(w,d,this.b))},
$S:767}
A.b_b.prototype={
$0(){var w=this.a,v=w.e
w.e=v.aKT(v.e,this.b)
B.by(this.c,!1).t7(0,null)},
$S:1}
A.aIz.prototype={
$1(d){var w,v=d.c,u=this.a.b,t=J.i(u.e,d)?0.7:1
v.toString
w=u.aeu(d,B.W(C.f.aB(255*t),v.gl(v)>>>16&255,v.gl(v)>>>8&255,v.gl(v)&255))
v=B.at()
v=v?B.aT():new B.aP(new B.aS())
this.b.yR(0,w,C.mm,v)},
$S:z+8}
A.amz.prototype={
$1(d){var w=this.a
return d.a===w.a&&d.b===w.b},
$S:z+1}
A.amy.prototype={
$1(d){var w=this.a
return new B.m(d.a+w.a,d.b+w.b)},
$S:251}
A.amx.prototype={
$1(d){var w=this.a
return d.a===w.a&&d.b===w.b},
$S:z+1}
A.anV.prototype={
$1(d){var w=this.a
return new A.yz(d,J.i(d,w.d),new A.anU(w,d),null)},
$S:z+9}
A.anU.prototype={
$0(){this.a.e.$1(this.b)},
$S:1}
A.aKe.prototype={
$0(){this.a.e.$0()},
$S:1};(function aliases(){var w=A.UG.prototype
w.al3=w.k
w=A.Vk.prototype
w.am_=w.k})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u
var u
w(u=A.Qr.prototype,"gazY","azZ",2)
w(u,"gaBT","aBU",3)
w(u,"gaBP","aBQ",4)
w(u,"gaA_","aA0",5)
v(u,"gMd","aBj",0)
v(u,"gTn","aC7",0)
v(u=A.Tp.prototype,"gTj","aBk",0)
w(u,"gaBR","aBS",6)
w(u,"gaC3","aC4",7)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inherit,t=a.inheritMany
u(A.HC,B.hk)
t(B.V,[A.a7b,A.a92,A.aVj,A.hc,A.a4G])
t(B.B,[A.Jz,A.rF])
t(B.F,[A.UG,A.Vk])
u(A.Qr,A.UG)
t(B.hV,[A.aRt,A.b_9,A.b_g,A.b_f,A.b_e,A.b_b,A.anU,A.aKe])
t(B.q,[A.ad1,A.XG,A.yz,A.a_w])
u(A.a7L,B.ca)
u(A.Q2,B.yF)
u(A.Tp,A.Vk)
u(A.b_a,B.iS)
t(B.dN,[A.b_d,A.b_c,A.aIz,A.amz,A.amy,A.amx,A.anV])
u(A.a91,B.nG)
u(A.Wv,A.a92)
u(A.aIy,B.JE)
w(A.UG,B.cq)
w(A.Vk,B.cq)
v(A.a92,B.j1)})()
B.b2(b.typeUniverse,JSON.parse('{"HC":{"hk":["xV"],"fi":["xV"]},"Jz":{"B":[],"e":[]},"Qr":{"F":["Jz"]},"ad1":{"q":[],"e":[]},"a7L":{"ca":["bv"],"ak":[]},"rF":{"B":[],"e":[]},"Tp":{"F":["rF*"]},"a91":{"ak":[]},"Wv":{"j1":["hc*"],"G":["hc*"],"j1.E":"hc*"},"yz":{"q":[],"e":[]},"XG":{"q":[],"e":[]},"a_w":{"q":[],"e":[]}}'))
var y={b:"`null` encountered as case in a switch expression with a non-nullable enum type."}
var x=(function rtii(){var w=B.R
return{s:w("z"),Z:w("t<hc*>"),n:w("t<m*>"),t:w("t<e*>"),z:w("ac<F<B>>"),H:w("ac<F<B*>*>"),d:w("o2"),e:w("iu<A*>"),C:w("r6"),x:w("y"),L:w("a4<m>"),y:w("hc*"),G:w("k*"),T:w("y*"),M:w("e*"),Y:w("~()?")}})();(function constants(){D.ha=new B.k(4291677645)
D.NA=new A.hc(0,0,D.ha)
D.rV=new B.k(4280756007)
D.a_w=new B.a_(2,0,2,0)
D.a0J=new B.as(57686,"MaterialIcons",null,!1)
D.a23=new B.b1(D.a0J,null,C.o,null,null)
D.a1l=new B.as(58659,"MaterialIcons",null,!1)
D.a2N=new B.b1(D.a1l,null,null,null,null)
D.lP=new A.Q2(0,"pan")
D.q7=new A.Q2(1,"scale")
D.axE=new A.Q2(2,"rotate")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bM_","bnL",function(){return B.b([J.bq_(J.b7K(B.b9())),J.bq0(J.b7K(B.b9())),J.bpZ(J.b7K(B.b9()))],B.R("t<CM>"))})})()}
$__dart_deferred_initializers__["fDb8m/CRZbQQfqEuo0TVnami2Pg="] = $__dart_deferred_initializers__.current
