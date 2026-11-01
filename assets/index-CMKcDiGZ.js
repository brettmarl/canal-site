var Hf=Object.defineProperty;var Gf=(s,t,e)=>t in s?Hf(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var D=(s,t,e)=>Gf(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ic="170",oo={ROTATE:0,DOLLY:1,PAN:2},eo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vf=0,ph=1,Wf=2,Rd=1,Pd=2,yi=3,Zi=0,gn=1,Fe=2,ji=0,ro=1,kl=2,mh=3,gh=4,$f=5,ps=100,Xf=101,qf=102,Yf=103,jf=104,Kf=200,Zf=201,Jf=202,Qf=203,Nl=204,Ol=205,tp=206,ep=207,np=208,ip=209,sp=210,op=211,rp=212,ap=213,lp=214,Fl=0,zl=1,Bl=2,co=3,Hl=4,Gl=5,Vl=6,Wl=7,Ld=0,cp=1,hp=2,Ki=0,up=1,dp=2,fp=3,Dd=4,pp=5,mp=6,gp=7,Id=300,ho=301,uo=302,$l=303,Xl=304,xa=306,fo=1e3,Ei=1001,ql=1002,Cn=1003,vp=1004,ur=1005,ii=1006,Na=1007,vs=1008,Ri=1009,Ud=1010,kd=1011,Zo=1012,Uc=1013,xs=1014,si=1015,sr=1016,kc=1017,Nc=1018,po=1020,Nd=35902,Od=1021,Fd=1022,Jn=1023,zd=1024,Bd=1025,ao=1026,mo=1027,Oc=1028,Fc=1029,Hd=1030,zc=1031,Bc=1033,oa=33776,ra=33777,aa=33778,la=33779,Yl=35840,jl=35841,Kl=35842,Zl=35843,Jl=36196,Ql=37492,tc=37496,ec=37808,nc=37809,ic=37810,sc=37811,oc=37812,rc=37813,ac=37814,lc=37815,cc=37816,hc=37817,uc=37818,dc=37819,fc=37820,pc=37821,ca=36492,mc=36494,gc=36495,Gd=36283,vc=36284,_c=36285,Mc=36286,_p=3200,Mp=3201,Vd=0,xp=1,$i="",Be="srgb",Mo="srgb-linear",ya="linear",De="srgb",Rs=7680,vh=519,yp=512,bp=513,wp=514,Wd=515,Sp=516,Ep=517,Tp=518,Ap=519,xc=35044,_s=35048,_h="300 es",Ti=2e3,fa=2001;class ws{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mh=1234567;const Xo=Math.PI/180,go=180/Math.PI;function ai(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[s&255]+ln[s>>8&255]+ln[s>>16&255]+ln[s>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function Je(s,t,e){return Math.max(t,Math.min(e,s))}function Hc(s,t){return(s%t+t)%t}function Cp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Rp(s,t,e){return s!==t?(e-s)/(t-s):0}function qo(s,t,e){return(1-e)*s+e*t}function Pp(s,t,e,n){return qo(s,t,1-Math.exp(-e*n))}function Lp(s,t=1){return t-Math.abs(Hc(s,t*2)-t)}function Dp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ip(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Up(s,t){return s+Math.floor(Math.random()*(t-s+1))}function kp(s,t){return s+Math.random()*(t-s)}function Np(s){return s*(.5-Math.random())}function Op(s){s!==void 0&&(Mh=s);let t=Mh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fp(s){return s*Xo}function zp(s){return s*go}function Bp(s){return(s&s-1)===0&&s!==0}function Hp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Gp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Vp(s,t,e,n,i){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),d=o((t-n)/2),p=r((t-n)/2),f=o((n-t)/2),m=r((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*p,a*c);break;case"YZY":s.set(l*p,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*p,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ms={DEG2RAD:Xo,RAD2DEG:go,generateUUID:ai,clamp:Je,euclideanModulo:Hc,mapLinear:Cp,inverseLerp:Rp,lerp:qo,damp:Pp,pingpong:Lp,smoothstep:Dp,smootherstep:Ip,randInt:Up,randFloat:kp,randFloatSpread:Np,seededRandom:Op,degToRad:Fp,radToDeg:zp,isPowerOfTwo:Bp,ceilPowerOfTwo:Hp,floorPowerOfTwo:Gp,setQuaternionFromProperEuler:Vp,normalize:Pe,denormalize:Zn};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,n,i,o,r,a,l,c){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c)}set(t,e,n,i,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],p=n[2],f=n[5],m=n[8],v=i[0],g=i[3],u=i[6],M=i[1],x=i[4],_=i[7],T=i[2],S=i[5],w=i[8];return o[0]=r*v+a*M+l*T,o[3]=r*g+a*x+l*S,o[6]=r*u+a*_+l*w,o[1]=c*v+h*M+d*T,o[4]=c*g+h*x+d*S,o[7]=c*u+h*_+d*w,o[2]=p*v+f*M+m*T,o[5]=p*g+f*x+m*S,o[8]=p*u+f*_+m*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+i*o*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*r-a*c,p=a*l-h*o,f=c*o-r*l,m=e*d+n*p+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*r)*v,t[3]=p*v,t[4]=(h*e-i*l)*v,t[5]=(i*o-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(r*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Oa.makeScale(t,e)),this}rotate(t){return this.premultiply(Oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new ue;function $d(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function pa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wp(){const s=pa("canvas");return s.style.display="block",s}const xh={};function Vo(s){s in xh||(xh[s]=!0,console.warn(s))}function $p(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Xp(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qp(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Se={enabled:!0,workingColorSpace:Mo,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===De&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===De&&(s.r=lo(s.r),s.g=lo(s.g),s.b=lo(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?ya:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function lo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const yh=[.64,.33,.3,.6,.15,.06],bh=[.2126,.7152,.0722],wh=[.3127,.329],Sh=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Se.define({[Mo]:{primaries:yh,whitePoint:wh,transfer:ya,toXYZ:Sh,fromXYZ:Eh,luminanceCoefficients:bh,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:yh,whitePoint:wh,transfer:De,toXYZ:Sh,fromXYZ:Eh,luminanceCoefficients:bh,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});let Ps;class Yp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ps===void 0&&(Ps=pa("canvas")),Ps.width=t.width,Ps.height=t.height;const n=Ps.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ps}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Ci(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ci(e[n]/255)*255):e[n]=Ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jp=0;class Xd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Fa(i[r].image)):o.push(Fa(i[r]))}else o=Fa(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Fa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kp=0;class un extends ws{constructor(t=un.DEFAULT_IMAGE,e=un.DEFAULT_MAPPING,n=Ei,i=Ei,o=ii,r=vs,a=Jn,l=Ri,c=un.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=ai(),this.name="",this.source=new Xd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Id)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fo:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case ql:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fo:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case ql:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Id;un.DEFAULT_ANISOTROPY=1;class We{constructor(t=0,e=0,n=0,i=1){We.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],f=l[5],m=l[9],v=l[2],g=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,_=(f+1)/2,T=(u+1)/2,S=(h+p)/4,w=(d+v)/4,R=(m+g)/4;return x>_&&x>T?x<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(x),i=S/n,o=w/n):_>T?_<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(_),n=S/i,o=R/i):T<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(T),n=w/o,i=R/o),this.set(n,i,o,e),this}let M=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(d-v)/M,this.z=(p-h)/M,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zp extends ws{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new un(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends Zp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qd extends un{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jp extends un{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const p=o[r+0],f=o[r+1],m=o[r+2],v=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(d!==v||l!==p||c!==f||h!==m){let g=1-a;const u=l*p+c*f+h*m+d*v,M=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const T=Math.sqrt(x),S=Math.atan2(T,u*M);g=Math.sin(g*S)/T,a=Math.sin(a*S)/T}const _=a*M;if(l=l*g+p*_,c=c*g+f*_,h=h*g+m*_,d=d*g+v*_,g===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=o[r],p=o[r+1],f=o[r+2],m=o[r+3];return t[e]=a*m+h*d+l*f-c*p,t[e+1]=l*m+h*p+c*d-a*f,t[e+2]=c*m+h*f+a*p-l*d,t[e+3]=h*m-a*d-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(o/2),p=l(n/2),f=l(i/2),m=l(o/2);switch(r){case"XYZ":this._x=p*h*d+c*f*m,this._y=c*f*d-p*h*m,this._z=c*h*m+p*f*d,this._w=c*h*d-p*f*m;break;case"YXZ":this._x=p*h*d+c*f*m,this._y=c*f*d-p*h*m,this._z=c*h*m-p*f*d,this._w=c*h*d+p*f*m;break;case"ZXY":this._x=p*h*d-c*f*m,this._y=c*f*d+p*h*m,this._z=c*h*m+p*f*d,this._w=c*h*d-p*f*m;break;case"ZYX":this._x=p*h*d-c*f*m,this._y=c*f*d+p*h*m,this._z=c*h*m-p*f*d,this._w=c*h*d+p*f*m;break;case"YZX":this._x=p*h*d+c*f*m,this._y=c*f*d+p*h*m,this._z=c*h*m-p*f*d,this._w=c*h*d-p*f*m;break;case"XZY":this._x=p*h*d-c*f*m,this._y=c*f*d-p*h*m,this._z=c*h*m+p*f*d,this._w=c*h*d+p*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],p=n+a+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(o+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(o-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-i)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+i*c-o*l,this._y=i*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=r*d+this._w*p,this._x=n*d+this._x*p,this._y=i*d+this._y*p,this._z=o*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Th.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),h=2*(a*e-o*i),d=2*(o*n-r*e);return this.x=e+l*c+r*d-a*h,this.y=n+l*h+a*c-o*d,this.z=i+l*d+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-o*a,this.y=o*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new k,Th=new On;class Ss{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Wn):Wn.fromBufferAttribute(o,r),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Co),fr.subVectors(this.max,Co),Ls.subVectors(t.a,Co),Ds.subVectors(t.b,Co),Is.subVectors(t.c,Co),Ii.subVectors(Ds,Ls),Ui.subVectors(Is,Ds),os.subVectors(Ls,Is);let e=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-os.z,os.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,os.z,0,-os.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-os.y,os.x,0];return!Ba(e,Ls,Ds,Is,fr)||(e=[1,0,0,0,1,0,0,0,1],!Ba(e,Ls,Ds,Is,fr))?!1:(pr.crossVectors(Ii,Ui),e=[pr.x,pr.y,pr.z],Ba(e,Ls,Ds,Is,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mi=[new k,new k,new k,new k,new k,new k,new k,new k],Wn=new k,dr=new Ss,Ls=new k,Ds=new k,Is=new k,Ii=new k,Ui=new k,os=new k,Co=new k,fr=new k,pr=new k,rs=new k;function Ba(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){rs.fromArray(s,o);const a=i.x*Math.abs(rs.x)+i.y*Math.abs(rs.y)+i.z*Math.abs(rs.z),l=t.dot(rs),c=e.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Qp=new Ss,Ro=new k,Ha=new k;class Es{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qp.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);const e=Ro.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ro,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(Ha)),this.expandByPoint(Ro.copy(t.center).sub(Ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new k,Ga=new k,mr=new k,ki=new k,Va=new k,gr=new k,Wa=new k;class or{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ga.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),ki.copy(this.origin).sub(Ga);const o=t.distanceTo(e)*.5,r=-this.direction.dot(mr),a=ki.dot(this.direction),l=-ki.dot(mr),c=ki.lengthSq(),h=Math.abs(1-r*r);let d,p,f,m;if(h>0)if(d=r*l-a,p=r*a-l,m=o*h,d>=0)if(p>=-m)if(p<=m){const v=1/h;d*=v,p*=v,f=d*(d+r*p+2*a)+p*(r*d+p+2*l)+c}else p=o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*l)+c;else p=-o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*l)+c;else p<=-m?(d=Math.max(0,-(-r*o+a)),p=d>0?-o:Math.min(Math.max(-o,-l),o),f=-d*d+p*(p+2*l)+c):p<=m?(d=0,p=Math.min(Math.max(-o,-l),o),f=p*(p+2*l)+c):(d=Math.max(0,-(r*o+a)),p=d>0?o:Math.min(Math.max(-o,-l),o),f=-d*d+p*(p+2*l)+c);else p=r>0?-o:o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ga).addScaledVector(mr,p),f}intersectSphere(t,e){gi.subVectors(t.center,this.origin);const n=gi.dot(this.direction),i=gi.dot(gi)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,i=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,i=(t.min.x-p.x)*c),h>=0?(o=(t.min.y-p.y)*h,r=(t.max.y-p.y)*h):(o=(t.max.y-p.y)*h,r=(t.min.y-p.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),d>=0?(a=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,n,i,o){Va.subVectors(e,t),gr.subVectors(n,t),Wa.crossVectors(Va,gr);let r=this.direction.dot(Wa),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ki.subVectors(this.origin,t);const l=a*this.direction.dot(gr.crossVectors(ki,gr));if(l<0)return null;const c=a*this.direction.dot(Va.cross(ki));if(c<0||l+c>r)return null;const h=-a*ki.dot(Wa);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,i,o,r,a,l,c,h,d,p,f,m,v,g){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c,h,d,p,f,m,v,g)}set(t,e,n,i,o,r,a,l,c,h,d,p,f,m,v,g){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=o,u[5]=r,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=m,u[11]=v,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Us.setFromMatrixColumn(t,0).length(),o=1/Us.setFromMatrixColumn(t,1).length(),r=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const p=r*h,f=r*d,m=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=p-v*c,e[9]=-a*l,e[2]=v-p*c,e[6]=m+f*c,e[10]=r*l}else if(t.order==="YXZ"){const p=l*h,f=l*d,m=c*h,v=c*d;e[0]=p+v*a,e[4]=m*a-f,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=f*a-m,e[6]=v+p*a,e[10]=r*l}else if(t.order==="ZXY"){const p=l*h,f=l*d,m=c*h,v=c*d;e[0]=p-v*a,e[4]=-r*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=r*h,e[9]=v-p*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const p=r*h,f=r*d,m=a*h,v=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=p*c+v,e[1]=l*d,e[5]=v*c+p,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const p=r*l,f=r*c,m=a*l,v=a*c;e[0]=l*h,e[4]=v-p*d,e[8]=m*d+f,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=p-v*d}else if(t.order==="XZY"){const p=r*l,f=r*c,m=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=p*d+v,e[5]=r*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=v*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tm,t,em)}lookAt(t,e,n){const i=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ni.crossVectors(n,wn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ni.crossVectors(n,wn)),Ni.normalize(),vr.crossVectors(wn,Ni),i[0]=Ni.x,i[4]=vr.x,i[8]=wn.x,i[1]=Ni.y,i[5]=vr.y,i[9]=wn.y,i[2]=Ni.z,i[6]=vr.z,i[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],p=n[9],f=n[13],m=n[2],v=n[6],g=n[10],u=n[14],M=n[3],x=n[7],_=n[11],T=n[15],S=i[0],w=i[4],R=i[8],b=i[12],y=i[1],C=i[5],E=i[9],N=i[13],O=i[2],$=i[6],z=i[10],H=i[14],B=i[3],dt=i[7],vt=i[11],ct=i[15];return o[0]=r*S+a*y+l*O+c*B,o[4]=r*w+a*C+l*$+c*dt,o[8]=r*R+a*E+l*z+c*vt,o[12]=r*b+a*N+l*H+c*ct,o[1]=h*S+d*y+p*O+f*B,o[5]=h*w+d*C+p*$+f*dt,o[9]=h*R+d*E+p*z+f*vt,o[13]=h*b+d*N+p*H+f*ct,o[2]=m*S+v*y+g*O+u*B,o[6]=m*w+v*C+g*$+u*dt,o[10]=m*R+v*E+g*z+u*vt,o[14]=m*b+v*N+g*H+u*ct,o[3]=M*S+x*y+_*O+T*B,o[7]=M*w+x*C+_*$+T*dt,o[11]=M*R+x*E+_*z+T*vt,o[15]=M*b+x*N+_*H+T*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],p=t[10],f=t[14],m=t[3],v=t[7],g=t[11],u=t[15];return m*(+o*l*d-i*c*d-o*a*p+n*c*p+i*a*f-n*l*f)+v*(+e*l*f-e*c*p+o*r*p-i*r*f+i*c*h-o*l*h)+g*(+e*c*d-e*a*f-o*r*d+n*r*f+o*a*h-n*c*h)+u*(-i*a*h-e*l*d+e*a*p+i*r*d-n*r*p+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],p=t[10],f=t[11],m=t[12],v=t[13],g=t[14],u=t[15],M=d*g*c-v*p*c+v*l*f-a*g*f-d*l*u+a*p*u,x=m*p*c-h*g*c-m*l*f+r*g*f+h*l*u-r*p*u,_=h*v*c-m*d*c+m*a*f-r*v*f-h*a*u+r*d*u,T=m*d*l-h*v*l-m*a*p+r*v*p+h*a*g-r*d*g,S=e*M+n*x+i*_+o*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/S;return t[0]=M*w,t[1]=(v*p*o-d*g*o-v*i*f+n*g*f+d*i*u-n*p*u)*w,t[2]=(a*g*o-v*l*o+v*i*c-n*g*c-a*i*u+n*l*u)*w,t[3]=(d*l*o-a*p*o-d*i*c+n*p*c+a*i*f-n*l*f)*w,t[4]=x*w,t[5]=(h*g*o-m*p*o+m*i*f-e*g*f-h*i*u+e*p*u)*w,t[6]=(m*l*o-r*g*o-m*i*c+e*g*c+r*i*u-e*l*u)*w,t[7]=(r*p*o-h*l*o+h*i*c-e*p*c-r*i*f+e*l*f)*w,t[8]=_*w,t[9]=(m*d*o-h*v*o-m*n*f+e*v*f+h*n*u-e*d*u)*w,t[10]=(r*v*o-m*a*o+m*n*c-e*v*c-r*n*u+e*a*u)*w,t[11]=(h*a*o-r*d*o-h*n*c+e*d*c+r*n*f-e*a*f)*w,t[12]=T*w,t[13]=(h*v*i-m*d*i+m*n*p-e*v*p-h*n*g+e*d*g)*w,t[14]=(m*a*i-r*v*i-m*n*l+e*v*l+r*n*g-e*a*g)*w,t[15]=(r*d*i-h*a*i+h*n*l-e*d*l-r*n*p+e*a*p)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,d=a+a,p=o*c,f=o*h,m=o*d,v=r*h,g=r*d,u=a*d,M=l*c,x=l*h,_=l*d,T=n.x,S=n.y,w=n.z;return i[0]=(1-(v+u))*T,i[1]=(f+_)*T,i[2]=(m-x)*T,i[3]=0,i[4]=(f-_)*S,i[5]=(1-(p+u))*S,i[6]=(g+M)*S,i[7]=0,i[8]=(m+x)*w,i[9]=(g-M)*w,i[10]=(1-(p+v))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=Us.set(i[0],i[1],i[2]).length();const r=Us.set(i[4],i[5],i[6]).length(),a=Us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],$n.copy(this);const c=1/o,h=1/r,d=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,e.setFromRotationMatrix($n),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=Ti){const l=this.elements,c=2*o/(e-t),h=2*o/(n-i),d=(e+t)/(e-t),p=(n+i)/(n-i);let f,m;if(a===Ti)f=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===fa)f=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=Ti){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(r-o),p=(e+t)*c,f=(n+i)*h;let m,v;if(a===Ti)m=(r+o)*d,v=-2*d;else if(a===fa)m=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Us=new k,$n=new _e,tm=new k(0,0,0),em=new k(1,1,1),Ni=new k,vr=new k,wn=new k,Ah=new _e,Ch=new On;class ti{constructor(t=0,e=0,n=0,i=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],p=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Je(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Je(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ah,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class Gc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nm=0;const Rh=new k,ks=new On,vi=new _e,_r=new k,Po=new k,im=new k,sm=new On,Ph=new k(1,0,0),Lh=new k(0,1,0),Dh=new k(0,0,1),Ih={type:"added"},om={type:"removed"},Ns={type:"childadded",child:null},$a={type:"childremoved",child:null};class $e extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new k,e=new ti,n=new On,i=new k(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new ue}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(Ph,t)}rotateY(t){return this.rotateOnAxis(Lh,t)}rotateZ(t){return this.rotateOnAxis(Dh,t)}translateOnAxis(t,e){return Rh.copy(t).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ph,t)}translateY(t){return this.translateOnAxis(Lh,t)}translateZ(t){return this.translateOnAxis(Dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_r.copy(t):_r.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Po,_r,this.up):vi.lookAt(_r,Po,this.up),this.quaternion.setFromRotationMatrix(vi),i&&(vi.extractRotation(i.matrixWorld),ks.setFromRotationMatrix(vi),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ih),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(om),$a.child=t,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ih),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,im),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,sm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),p=r(t.skeletons),f=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}$e.DEFAULT_UP=new k(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new k,_i=new k,Xa=new k,Mi=new k,Os=new k,Fs=new k,Uh=new k,qa=new k,Ya=new k,ja=new k,Ka=new We,Za=new We,Ja=new We;class Un{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Xn.subVectors(t,e),i.cross(Xn);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){Xn.subVectors(i,e),_i.subVectors(n,e),Xa.subVectors(t,e);const r=Xn.dot(Xn),a=Xn.dot(_i),l=Xn.dot(Xa),c=_i.dot(_i),h=_i.dot(Xa),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;const p=1/d,f=(c*l-a*h)*p,m=(r*h-a*l)*p;return o.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,n,i,o,r,a,l){return this.getBarycoord(t,e,n,i,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Mi.x),l.addScaledVector(r,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(t,e,n,i,o,r){return Ka.setScalar(0),Za.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(t,e),Za.fromBufferAttribute(t,n),Ja.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Ka,o.x),r.addScaledVector(Za,o.y),r.addScaledVector(Ja,o.z),r}static isFrontFacing(t,e,n,i){return Xn.subVectors(n,e),_i.subVectors(t,e),Xn.cross(_i).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Xn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return Un.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;Os.subVectors(i,n),Fs.subVectors(o,n),qa.subVectors(t,n);const l=Os.dot(qa),c=Fs.dot(qa);if(l<=0&&c<=0)return e.copy(n);Ya.subVectors(t,i);const h=Os.dot(Ya),d=Fs.dot(Ya);if(h>=0&&d<=h)return e.copy(i);const p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Os,r);ja.subVectors(t,o);const f=Os.dot(ja),m=Fs.dot(ja);if(m>=0&&f<=m)return e.copy(o);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Fs,a);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Uh.subVectors(o,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(Uh,a);const u=1/(g+v+p);return r=v*u,a=p*u,e.copy(n).addScaledVector(Os,r).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Qa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Se.workingColorSpace){if(t=Hc(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Qa(r,o,t+1/3),this.g=Qa(r,o,t),this.b=Qa(r,o,t-1/3)}return Se.toWorkingColorSpace(this,i),this}setStyle(t,e=Be){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=Yd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=lo(t.r),this.g=lo(t.g),this.b=lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Se.fromWorkingColorSpace(cn.copy(this),t),Math.round(Je(cn.r*255,0,255))*65536+Math.round(Je(cn.g*255,0,255))*256+Math.round(Je(cn.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(cn.copy(this),e);const n=cn.r,i=cn.g,o=cn.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case n:l=(i-o)/d+(i<o?6:0);break;case i:l=(o-n)/d+2;break;case o:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Be){Se.fromWorkingColorSpace(cn.copy(this),t);const e=cn.r,n=cn.g,i=cn.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(Mr);const n=qo(Oi.h,Mr.h,e),i=qo(Oi.s,Mr.s,e),o=qo(Oi.l,Mr.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Vt;Vt.NAMES=Yd;let rm=0;class Qi extends ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=ai(),this.name="",this.blending=ro,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ol,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ol&&(n.blendDst=this.blendDst),this.blendEquation!==ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rn extends Qi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const je=new k,xr=new ot;class Ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xc,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xr.fromBufferAttribute(this,e),xr.applyMatrix3(t),this.setXY(e,xr.x,xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),o=Pe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xc&&(t.usage=this.usage),t}}class jd extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kd extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let am=0;const Dn=new _e,tl=new $e,zs=new k,Sn=new Ss,Lo=new Ss,en=new k;class xe extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($d(t)?Kd:jd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ue().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,i=e.count;n<i;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Sn.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Sn.min,Lo.min),Sn.expandByPoint(en),en.addVectors(Sn.max,Lo.max),Sn.expandByPoint(en)):(Sn.expandByPoint(Lo.min),Sn.expandByPoint(Lo.max))}Sn.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)en.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(en));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(t,c),en.add(zs)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new k,l[R]=new k;const c=new k,h=new k,d=new k,p=new ot,f=new ot,m=new ot,v=new k,g=new k;function u(R,b,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,y),p.fromBufferAttribute(o,R),f.fromBufferAttribute(o,b),m.fromBufferAttribute(o,y),h.sub(c),d.sub(c),f.sub(p),m.sub(p);const C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(C),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),a[R].add(v),a[b].add(v),a[y].add(v),l[R].add(g),l[b].add(g),l[y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,b=M.length;R<b;++R){const y=M[R],C=y.start,E=y.count;for(let N=C,O=C+E;N<O;N+=3)u(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const x=new k,_=new k,T=new k,S=new k;function w(R){T.fromBufferAttribute(i,R),S.copy(T);const b=a[R];x.copy(b),x.sub(T.multiplyScalar(T.dot(b))).normalize(),_.crossVectors(S,b);const C=_.dot(l[R])<0?-1:1;r.setXYZW(R,x.x,x.y,x.z,C)}for(let R=0,b=M.length;R<b;++R){const y=M[R],C=y.start,E=y.count;for(let N=C,O=C+E;N<O;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const i=new k,o=new k,r=new k,a=new k,l=new k,c=new k,h=new k,d=new k;if(t)for(let p=0,f=t.count;p<f;p+=3){const m=t.getX(p+0),v=t.getX(p+1),g=t.getX(p+2);i.fromBufferAttribute(e,m),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),h.subVectors(r,o),d.subVectors(i,o),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)i.fromBufferAttribute(e,p+0),o.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),h.subVectors(r,o),d.subVectors(i,o),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,p=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let u=0;u<h;u++)p[m++]=c[f++]}return new Ye(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){const p=c[h],f=t(p,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],d=o[c];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new _e,as=new or,yr=new Es,Nh=new k,br=new k,wr=new k,Sr=new k,el=new k,Er=new k,Oh=new k,Tr=new k;class q extends $e{constructor(t=new xe,e=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){Er.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],d=o[l];h!==0&&(el.fromBufferAttribute(d,t),r?Er.addScaledVector(el,h):Er.addScaledVector(el.sub(e),h))}e.add(Er)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(o),as.copy(t.ray).recast(t.near),!(yr.containsPoint(as.origin)===!1&&(as.intersectSphere(yr,Nh)===null||as.origin.distanceToSquared(Nh)>(t.far-t.near)**2))&&(kh.copy(o).invert(),as.copy(t.ray).applyMatrix4(kh),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,p=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,v=p.length;m<v;m++){const g=p[m],u=r[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,T=x;_<T;_+=3){const S=a.getX(_),w=a.getX(_+1),R=a.getX(_+2);i=Ar(this,u,t,n,c,h,d,S,w,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,u=v;g<u;g+=3){const M=a.getX(g),x=a.getX(g+1),_=a.getX(g+2);i=Ar(this,r,t,n,c,h,d,M,x,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,v=p.length;m<v;m++){const g=p[m],u=r[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,T=x;_<T;_+=3){const S=_,w=_+1,R=_+2;i=Ar(this,u,t,n,c,h,d,S,w,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,u=v;g<u;g+=3){const M=g,x=g+1,_=g+2;i=Ar(this,r,t,n,c,h,d,M,x,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function lm(s,t,e,n,i,o,r,a){let l;if(t.side===gn?l=n.intersectTriangle(r,o,i,!0,a):l=n.intersectTriangle(i,o,r,t.side===Zi,a),l===null)return null;Tr.copy(a),Tr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Tr);return c<e.near||c>e.far?null:{distance:c,point:Tr.clone(),object:s}}function Ar(s,t,e,n,i,o,r,a,l,c){s.getVertexPosition(a,br),s.getVertexPosition(l,wr),s.getVertexPosition(c,Sr);const h=lm(s,t,e,n,br,wr,Sr,Oh);if(h){const d=new k;Un.getBarycoord(Oh,br,wr,Sr,d),i&&(h.uv=Un.getInterpolatedAttribute(i,a,l,c,d,new ot)),o&&(h.uv1=Un.getInterpolatedAttribute(o,a,l,c,d,new ot)),r&&(h.normal=Un.getInterpolatedAttribute(r,a,l,c,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new k,materialIndex:0};Un.getNormal(br,wr,Sr,p.normal),h.face=p,h.barycoord=d}return h}class Ct extends xe{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],d=[];let p=0,f=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,o,4),m("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(d,2));function m(v,g,u,M,x,_,T,S,w,R,b){const y=_/w,C=T/R,E=_/2,N=T/2,O=S/2,$=w+1,z=R+1;let H=0,B=0;const dt=new k;for(let vt=0;vt<z;vt++){const ct=vt*C-N;for(let Ft=0;Ft<$;Ft++){const se=Ft*y-E;dt[v]=se*M,dt[g]=ct*x,dt[u]=O,c.push(dt.x,dt.y,dt.z),dt[v]=0,dt[g]=0,dt[u]=S>0?1:-1,h.push(dt.x,dt.y,dt.z),d.push(Ft/w),d.push(1-vt/R),H+=1}}for(let vt=0;vt<R;vt++)for(let ct=0;ct<w;ct++){const Ft=p+ct+$*vt,se=p+ct+$*(vt+1),tt=p+(ct+1)+$*(vt+1),ft=p+(ct+1)+$*vt;l.push(Ft,se,ft),l.push(se,tt,ft),B+=6}a.addGroup(f,B,b),f+=B,p+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ct(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vo(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function pn(s){const t={};for(let e=0;e<s.length;e++){const n=vo(s[e]);for(const i in n)t[i]=n[i]}return t}function cm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zd(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const Jd={clone:vo,merge:pn};var hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Qi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vo(t.uniforms),this.uniformsGroups=cm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qd extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new k,Fh=new ot,zh=new ot;class bn extends Qd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return go*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Fh,zh),e.subVectors(zh,Fh)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bs=-90,Hs=1;class dm extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new bn(Bs,Hs,t,e);i.layers=this.layers,this.add(i);const o=new bn(Bs,Hs,t,e);o.layers=this.layers,this.add(o);const r=new bn(Bs,Hs,t,e);r.layers=this.layers,this.add(r);const a=new bn(Bs,Hs,t,e);a.layers=this.layers,this.add(a);const l=new bn(Bs,Hs,t,e);l.layers=this.layers,this.add(l);const c=new bn(Bs,Hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,p,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class tf extends un{constructor(t,e,n,i,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ho,super(t,e,n,i,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fm extends ys{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new tf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ii}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ct(5,5,5),o=new Pi({name:"CubemapFromEquirect",uniforms:vo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:ji});o.uniforms.tEquirect.value=e;const r=new q(i,o),a=e.minFilter;return e.minFilter===vs&&(e.minFilter=ii),new dm(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}const nl=new k,pm=new k,mm=new ue;class Wi{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=nl.subVectors(n,e).cross(pm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(nl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mm.getNormalMatrix(t),i=this.coplanarPoint(nl).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Es,Cr=new k;class Vc{constructor(t=new Wi,e=new Wi,n=new Wi,i=new Wi,o=new Wi,r=new Wi){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ti){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],p=i[7],f=i[8],m=i[9],v=i[10],g=i[11],u=i[12],M=i[13],x=i[14],_=i[15];if(n[0].setComponents(l-o,p-c,g-f,_-u).normalize(),n[1].setComponents(l+o,p+c,g+f,_+u).normalize(),n[2].setComponents(l+r,p+h,g+m,_+M).normalize(),n[3].setComponents(l-r,p-h,g-m,_-M).normalize(),n[4].setComponents(l-a,p-d,g-v,_-x).normalize(),e===Ti)n[5].setComponents(l+a,p+d,g+v,_+x).normalize();else if(e===fa)n[5].setComponents(a,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Cr.x=i.normal.x>0?t.max.x:t.min.x,Cr.y=i.normal.y>0?t.max.y:t.min.y,Cr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ef(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function gm(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,p=s.createBuffer();s.bindBuffer(l,p),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let p=0;for(let f=1;f<d.length;f++){const m=d[p],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++p,d[p]=v)}d.length=p+1;for(let f=0,m=d.length;f<m;f++){const v=d[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:r}}class ui extends xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,p=e/l,f=[],m=[],v=[],g=[];for(let u=0;u<h;u++){const M=u*p-r;for(let x=0;x<c;x++){const _=x*d-o;m.push(_,-M,0),v.push(0,0,1),g.push(x/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let M=0;M<a;M++){const x=M+c*u,_=M+c*(u+1),T=M+1+c*(u+1),S=M+1+c*u;f.push(x,_,S),f.push(_,T,S)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ui(t.width,t.height,t.widthSegments,t.heightSegments)}}var vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_m=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Em=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,c0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,h0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,m0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,g0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,T0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,k0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,X0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ig=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,og=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ug=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Eg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Og=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:vm,alphahash_pars_fragment:_m,alphamap_fragment:Mm,alphamap_pars_fragment:xm,alphatest_fragment:ym,alphatest_pars_fragment:bm,aomap_fragment:wm,aomap_pars_fragment:Sm,batching_pars_vertex:Em,batching_vertex:Tm,begin_vertex:Am,beginnormal_vertex:Cm,bsdfs:Rm,iridescence_fragment:Pm,bumpmap_pars_fragment:Lm,clipping_planes_fragment:Dm,clipping_planes_pars_fragment:Im,clipping_planes_pars_vertex:Um,clipping_planes_vertex:km,color_fragment:Nm,color_pars_fragment:Om,color_pars_vertex:Fm,color_vertex:zm,common:Bm,cube_uv_reflection_fragment:Hm,defaultnormal_vertex:Gm,displacementmap_pars_vertex:Vm,displacementmap_vertex:Wm,emissivemap_fragment:$m,emissivemap_pars_fragment:Xm,colorspace_fragment:qm,colorspace_pars_fragment:Ym,envmap_fragment:jm,envmap_common_pars_fragment:Km,envmap_pars_fragment:Zm,envmap_pars_vertex:Jm,envmap_physical_pars_fragment:c0,envmap_vertex:Qm,fog_vertex:t0,fog_pars_vertex:e0,fog_fragment:n0,fog_pars_fragment:i0,gradientmap_pars_fragment:s0,lightmap_pars_fragment:o0,lights_lambert_fragment:r0,lights_lambert_pars_fragment:a0,lights_pars_begin:l0,lights_toon_fragment:h0,lights_toon_pars_fragment:u0,lights_phong_fragment:d0,lights_phong_pars_fragment:f0,lights_physical_fragment:p0,lights_physical_pars_fragment:m0,lights_fragment_begin:g0,lights_fragment_maps:v0,lights_fragment_end:_0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:x0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:b0,map_fragment:w0,map_pars_fragment:S0,map_particle_fragment:E0,map_particle_pars_fragment:T0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:C0,morphinstance_vertex:R0,morphcolor_vertex:P0,morphnormal_vertex:L0,morphtarget_pars_vertex:D0,morphtarget_vertex:I0,normal_fragment_begin:U0,normal_fragment_maps:k0,normal_pars_fragment:N0,normal_pars_vertex:O0,normal_vertex:F0,normalmap_pars_fragment:z0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:G0,iridescence_pars_fragment:V0,opaque_fragment:W0,packing:$0,premultiplied_alpha_fragment:X0,project_vertex:q0,dithering_fragment:Y0,dithering_pars_fragment:j0,roughnessmap_fragment:K0,roughnessmap_pars_fragment:Z0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:Q0,shadowmap_vertex:tg,shadowmask_pars_fragment:eg,skinbase_vertex:ng,skinning_pars_vertex:ig,skinning_vertex:sg,skinnormal_vertex:og,specularmap_fragment:rg,specularmap_pars_fragment:ag,tonemapping_fragment:lg,tonemapping_pars_fragment:cg,transmission_fragment:hg,transmission_pars_fragment:ug,uv_pars_fragment:dg,uv_pars_vertex:fg,uv_vertex:pg,worldpos_vertex:mg,background_vert:gg,background_frag:vg,backgroundCube_vert:_g,backgroundCube_frag:Mg,cube_vert:xg,cube_frag:yg,depth_vert:bg,depth_frag:wg,distanceRGBA_vert:Sg,distanceRGBA_frag:Eg,equirect_vert:Tg,equirect_frag:Ag,linedashed_vert:Cg,linedashed_frag:Rg,meshbasic_vert:Pg,meshbasic_frag:Lg,meshlambert_vert:Dg,meshlambert_frag:Ig,meshmatcap_vert:Ug,meshmatcap_frag:kg,meshnormal_vert:Ng,meshnormal_frag:Og,meshphong_vert:Fg,meshphong_frag:zg,meshphysical_vert:Bg,meshphysical_frag:Hg,meshtoon_vert:Gg,meshtoon_frag:Vg,points_vert:Wg,points_frag:$g,shadow_vert:Xg,shadow_frag:qg,sprite_vert:Yg,sprite_frag:jg},St={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},ni={basic:{uniforms:pn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:pn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Vt(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:pn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:pn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:pn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Vt(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:pn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:pn([St.points,St.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:pn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:pn([St.common,St.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:pn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:pn([St.sprite,St.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:pn([St.common,St.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:pn([St.lights,St.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};ni.physical={uniforms:pn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Rr={r:0,b:0,g:0},cs=new ti,Kg=new _e;function Zg(s,t,e,n,i,o,r){const a=new Vt(0);let l=o===!0?0:1,c,h,d=null,p=0,f=null;function m(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function v(M){let x=!1;const _=m(M);_===null?u(a,l):_&&_.isColor&&(u(_,1),x=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,x){const _=m(x);_&&(_.isCubeTexture||_.mapping===xa)?(h===void 0&&(h=new q(new Ct(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:vo(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),cs.copy(x.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(cs)),h.material.toneMapped=Se.getTransfer(_.colorSpace)!==De,(d!==_||p!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=_,p=_.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new q(new ui(2,2),new Pi({name:"BackgroundMaterial",uniforms:vo(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Se.getTransfer(_.colorSpace)!==De,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||p!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=_,p=_.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function u(M,x){M.getRGB(Rr,Zd(s)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,u(a,l)},render:v,addToRenderList:g}}function Jg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null);let o=i,r=!1;function a(y,C,E,N,O){let $=!1;const z=d(N,E,C);o!==z&&(o=z,c(o.object)),$=f(y,N,E,O),$&&m(y,N,E,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,_(y,C,E,N),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function d(y,C,E){const N=E.wireframe===!0;let O=n[y.id];O===void 0&&(O={},n[y.id]=O);let $=O[C.id];$===void 0&&($={},O[C.id]=$);let z=$[N];return z===void 0&&(z=p(l()),$[N]=z),z}function p(y){const C=[],E=[],N=[];for(let O=0;O<e;O++)C[O]=0,E[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:E,attributeDivisors:N,object:y,attributes:{},index:null}}function f(y,C,E,N){const O=o.attributes,$=C.attributes;let z=0;const H=E.getAttributes();for(const B in H)if(H[B].location>=0){const vt=O[B];let ct=$[B];if(ct===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),vt===void 0||vt.attribute!==ct||ct&&vt.data!==ct.data)return!0;z++}return o.attributesNum!==z||o.index!==N}function m(y,C,E,N){const O={},$=C.attributes;let z=0;const H=E.getAttributes();for(const B in H)if(H[B].location>=0){let vt=$[B];vt===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor));const ct={};ct.attribute=vt,vt&&vt.data&&(ct.data=vt.data),O[B]=ct,z++}o.attributes=O,o.attributesNum=z,o.index=N}function v(){const y=o.newAttributes;for(let C=0,E=y.length;C<E;C++)y[C]=0}function g(y){u(y,0)}function u(y,C){const E=o.newAttributes,N=o.enabledAttributes,O=o.attributeDivisors;E[y]=1,N[y]===0&&(s.enableVertexAttribArray(y),N[y]=1),O[y]!==C&&(s.vertexAttribDivisor(y,C),O[y]=C)}function M(){const y=o.newAttributes,C=o.enabledAttributes;for(let E=0,N=C.length;E<N;E++)C[E]!==y[E]&&(s.disableVertexAttribArray(E),C[E]=0)}function x(y,C,E,N,O,$,z){z===!0?s.vertexAttribIPointer(y,C,E,O,$):s.vertexAttribPointer(y,C,E,N,O,$)}function _(y,C,E,N){v();const O=N.attributes,$=E.getAttributes(),z=C.defaultAttributeValues;for(const H in $){const B=$[H];if(B.location>=0){let dt=O[H];if(dt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor)),dt!==void 0){const vt=dt.normalized,ct=dt.itemSize,Ft=t.get(dt);if(Ft===void 0)continue;const se=Ft.buffer,tt=Ft.type,ft=Ft.bytesPerElement,Rt=tt===s.INT||tt===s.UNSIGNED_INT||dt.gpuType===Uc;if(dt.isInterleavedBufferAttribute){const ht=dt.data,Lt=ht.stride,Kt=dt.offset;if(ht.isInstancedInterleavedBuffer){for(let $t=0;$t<B.locationSize;$t++)u(B.location+$t,ht.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let $t=0;$t<B.locationSize;$t++)g(B.location+$t);s.bindBuffer(s.ARRAY_BUFFER,se);for(let $t=0;$t<B.locationSize;$t++)x(B.location+$t,ct/B.locationSize,tt,vt,Lt*ft,(Kt+ct/B.locationSize*$t)*ft,Rt)}else{if(dt.isInstancedBufferAttribute){for(let ht=0;ht<B.locationSize;ht++)u(B.location+ht,dt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ht=0;ht<B.locationSize;ht++)g(B.location+ht);s.bindBuffer(s.ARRAY_BUFFER,se);for(let ht=0;ht<B.locationSize;ht++)x(B.location+ht,ct/B.locationSize,tt,vt,ct*ft,ct/B.locationSize*ht*ft,Rt)}}else if(z!==void 0){const vt=z[H];if(vt!==void 0)switch(vt.length){case 2:s.vertexAttrib2fv(B.location,vt);break;case 3:s.vertexAttrib3fv(B.location,vt);break;case 4:s.vertexAttrib4fv(B.location,vt);break;default:s.vertexAttrib1fv(B.location,vt)}}}}M()}function T(){R();for(const y in n){const C=n[y];for(const E in C){const N=C[E];for(const O in N)h(N[O].object),delete N[O];delete C[E]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const E in C){const N=C[E];for(const O in N)h(N[O].object),delete N[O];delete C[E]}delete n[y.id]}function w(y){for(const C in n){const E=n[C];if(E[y.id]===void 0)continue;const N=E[y.id];for(const O in N)h(N[O].object),delete N[O];delete E[y.id]}}function R(){b(),r=!0,o!==i&&(o=i,c(o.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function Qg(s,t,e){let n;function i(c){n=c}function o(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,n,1)}function l(c,h,d,p){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)r(c[m],h[m],p[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,d);let m=0;for(let v=0;v<d;v++)m+=h[v]*p[v];e.update(m,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tv(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){return!(w!==Jn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ri&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==si&&!R)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:T,maxSamples:S}}function ev(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new Wi,a=new ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||n!==0||i;return i=p,n=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,f){const m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,u=s.get(d);if(!i||m===null||m.length===0||o&&!g)o?h(null):c();else{const M=o?0:n,x=M*4;let _=u.clippingState||null;l.value=_,_=h(m,p,x,f);for(let T=0;T!==x;++T)_[T]=e[T];u.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,f,m){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const u=f+v*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<u)&&(g=new Float32Array(u));for(let x=0,_=f;x!==v;++x,_+=4)r.copy(d[x]).applyMatrix4(M,a),r.normal.toArray(g,_),g[_+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function nv(s){let t=new WeakMap;function e(r,a){return a===$l?r.mapping=ho:a===Xl&&(r.mapping=uo),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===$l||a===Xl)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new fm(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class nf extends Qd{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const no=4,Bh=[.125,.215,.35,.446,.526,.582],ms=20,il=new nf,Hh=new Vt;let sl=null,ol=0,rl=0,al=!1;const ds=(1+Math.sqrt(5))/2,Gs=1/ds,Gh=[new k(-ds,Gs,0),new k(ds,Gs,0),new k(-Gs,0,ds),new k(Gs,0,ds),new k(0,ds,-Gs),new k(0,ds,Gs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class yc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){sl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sl,ol,rl),this._renderer.xr.enabled=al,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ho||t.mapping===uo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:sr,format:Jn,colorSpace:Mo,depthBuffer:!1},i=Vh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iv(o)),this._blurMaterial=sv(o,t,e)}return i}_compileMaterial(t){const e=new q(this._lodPlanes[0],t);this._renderer.compile(e,il)}_sceneToCubeUV(t,e,n,i){const a=new bn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Hh),h.toneMapping=Ki,h.autoClear=!1;const f=new Rn({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),m=new q(new Ct,f);let v=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(Hh),v=!0);for(let u=0;u<6;u++){const M=u%3;M===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):M===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;Pr(i,M*x,u>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ho||t.mapping===uo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$h()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new q(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,il)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Gh[(i-o-1)%Gh.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new q(this._lodPlanes[i],c),p=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*ms-1),v=o/m,g=isFinite(o)?1+Math.floor(h*v):ms;g>ms&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ms}`);const u=[];let M=0;for(let w=0;w<ms;++w){const R=w/v,b=Math.exp(-R*R/2);u.push(b),w===0?M+=b:w<g&&(M+=2*b)}for(let w=0;w<u.length;w++)u[w]=u[w]/M;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=u,p.latitudinal.value=r==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=m,p.mipInt.value=x-n;const _=this._sizeLods[i],T=3*_*(i>x-no?i-x+no:0),S=4*(this._cubeSize-_);Pr(e,T,S,3*_,2*_),l.setRenderTarget(e),l.render(d,il)}}function iv(s){const t=[],e=[],n=[];let i=s;const o=s-no+1+Bh.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>s-no?l=Bh[r-s+no-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,v=3,g=2,u=1,M=new Float32Array(v*m*f),x=new Float32Array(g*m*f),_=new Float32Array(u*m*f);for(let S=0;S<f;S++){const w=S%3*2/3-1,R=S>2?0:-1,b=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];M.set(b,v*m*S),x.set(p,g*m*S);const y=[S,S,S,S,S,S];_.set(y,u*m*S)}const T=new xe;T.setAttribute("position",new Ye(M,v)),T.setAttribute("uv",new Ye(x,g)),T.setAttribute("faceIndex",new Ye(_,u)),t.push(T),i>no&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vh(s,t,e){const n=new ys(s,t,e);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function sv(s,t,e){const n=new Float32Array(ms),i=new k(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Wh(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function $h(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ov(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$l||l===Xl,h=l===ho||l===uo;if(c||h){let d=t.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new yc(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new yc(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function rv(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Vo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function av(s,t,e,n){const i={},o=new WeakMap;function r(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);for(const m in p.morphAttributes){const v=p.morphAttributes[m];for(let g=0,u=v.length;g<u;g++)t.remove(v[g])}p.removeEventListener("dispose",r),delete i[p.id];const f=o.get(p);f&&(t.remove(f),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return i[p.id]===!0||(p.addEventListener("dispose",r),i[p.id]=!0,e.memory.geometries++),p}function l(d){const p=d.attributes;for(const m in p)t.update(p[m],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const m in f){const v=f[m];for(let g=0,u=v.length;g<u;g++)t.update(v[g],s.ARRAY_BUFFER)}}function c(d){const p=[],f=d.index,m=d.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let x=0,_=M.length;x<_;x+=3){const T=M[x+0],S=M[x+1],w=M[x+2];p.push(T,S,S,w,w,T)}}else if(m!==void 0){const M=m.array;v=m.version;for(let x=0,_=M.length/3-1;x<_;x+=3){const T=x+0,S=x+1,w=x+2;p.push(T,S,S,w,w,T)}}else return;const g=new($d(p)?Kd:jd)(p,1);g.version=v;const u=o.get(d);u&&t.remove(u),o.set(d,g)}function h(d){const p=o.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function lv(s,t,e){let n;function i(p){n=p}let o,r;function a(p){o=p.type,r=p.bytesPerElement}function l(p,f){s.drawElements(n,f,o,p*r),e.update(f,n,1)}function c(p,f,m){m!==0&&(s.drawElementsInstanced(n,f,o,p*r,m),e.update(f,n,m))}function h(p,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,p,0,m);let g=0;for(let u=0;u<m;u++)g+=f[u];e.update(g,n,1)}function d(p,f,m,v){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<p.length;u++)c(p[u]/r,f[u],v[u]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,o,p,0,v,0,m);let u=0;for(let M=0;M<m;M++)u+=f[M]*v[M];e.update(u,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function cv(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function hv(s,t,e){const n=new WeakMap,i=new We;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==d){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;p!==void 0&&p.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),v===!0&&(_=2),g===!0&&(_=3);let T=a.attributes.position.count*_,S=1;T>t.maxTextureSize&&(S=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*S*4*d),R=new qd(w,T,S,d);R.type=si,R.needsUpdate=!0;const b=_*4;for(let C=0;C<d;C++){const E=u[C],N=M[C],O=x[C],$=T*S*4*C;for(let z=0;z<E.count;z++){const H=z*b;m===!0&&(i.fromBufferAttribute(E,z),w[$+H+0]=i.x,w[$+H+1]=i.y,w[$+H+2]=i.z,w[$+H+3]=0),v===!0&&(i.fromBufferAttribute(N,z),w[$+H+4]=i.x,w[$+H+5]=i.y,w[$+H+6]=i.z,w[$+H+7]=0),g===!0&&(i.fromBufferAttribute(O,z),w[$+H+8]=i.x,w[$+H+9]=i.y,w[$+H+10]=i.z,w[$+H+11]=O.itemSize===4?i.w:1)}}p={count:d,texture:R,size:new ot(T,S)},n.set(a,p),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:o}}function uv(s,t,e,n){let i=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;i.get(p)!==c&&(p.update(),i.set(p,c))}return d}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class sf extends un{constructor(t,e,n,i,o,r,a,l,c,h=ao){if(h!==ao&&h!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ao&&(n=xs),n===void 0&&h===mo&&(n=po),super(null,i,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const of=new un,Xh=new sf(1,1),rf=new qd,af=new Jp,lf=new tf,qh=[],Yh=[],jh=new Float32Array(16),Kh=new Float32Array(9),Zh=new Float32Array(4);function xo(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=qh[i];if(o===void 0&&(o=new Float32Array(i),qh[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Qe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function tn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ba(s,t){let e=Yh[t];e===void 0&&(e=new Int32Array(t),Yh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function dv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function fv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;s.uniform2fv(this.addr,t),tn(e,t)}}function pv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;s.uniform3fv(this.addr,t),tn(e,t)}}function mv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;s.uniform4fv(this.addr,t),tn(e,t)}}function gv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Zh.set(n),s.uniformMatrix2fv(this.addr,!1,Zh),tn(e,n)}}function vv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Kh.set(n),s.uniformMatrix3fv(this.addr,!1,Kh),tn(e,n)}}function _v(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;jh.set(n),s.uniformMatrix4fv(this.addr,!1,jh),tn(e,n)}}function Mv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function xv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;s.uniform2iv(this.addr,t),tn(e,t)}}function yv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;s.uniform3iv(this.addr,t),tn(e,t)}}function bv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;s.uniform4iv(this.addr,t),tn(e,t)}}function wv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Sv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;s.uniform2uiv(this.addr,t),tn(e,t)}}function Ev(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;s.uniform3uiv(this.addr,t),tn(e,t)}}function Tv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;s.uniform4uiv(this.addr,t),tn(e,t)}}function Av(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(Xh.compareFunction=Wd,o=Xh):o=of,e.setTexture2D(t||o,i)}function Cv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||af,i)}function Rv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lf,i)}function Pv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||rf,i)}function Lv(s){switch(s){case 5126:return dv;case 35664:return fv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return vv;case 35676:return _v;case 5124:case 35670:return Mv;case 35667:case 35671:return xv;case 35668:case 35672:return yv;case 35669:case 35673:return bv;case 5125:return wv;case 36294:return Sv;case 36295:return Ev;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Pv}}function Dv(s,t){s.uniform1fv(this.addr,t)}function Iv(s,t){const e=xo(t,this.size,2);s.uniform2fv(this.addr,e)}function Uv(s,t){const e=xo(t,this.size,3);s.uniform3fv(this.addr,e)}function kv(s,t){const e=xo(t,this.size,4);s.uniform4fv(this.addr,e)}function Nv(s,t){const e=xo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ov(s,t){const e=xo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Fv(s,t){const e=xo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function zv(s,t){s.uniform1iv(this.addr,t)}function Bv(s,t){s.uniform2iv(this.addr,t)}function Hv(s,t){s.uniform3iv(this.addr,t)}function Gv(s,t){s.uniform4iv(this.addr,t)}function Vv(s,t){s.uniform1uiv(this.addr,t)}function Wv(s,t){s.uniform2uiv(this.addr,t)}function $v(s,t){s.uniform3uiv(this.addr,t)}function Xv(s,t){s.uniform4uiv(this.addr,t)}function qv(s,t,e){const n=this.cache,i=t.length,o=ba(e,i);Qe(n,o)||(s.uniform1iv(this.addr,o),tn(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||of,o[r])}function Yv(s,t,e){const n=this.cache,i=t.length,o=ba(e,i);Qe(n,o)||(s.uniform1iv(this.addr,o),tn(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||af,o[r])}function jv(s,t,e){const n=this.cache,i=t.length,o=ba(e,i);Qe(n,o)||(s.uniform1iv(this.addr,o),tn(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||lf,o[r])}function Kv(s,t,e){const n=this.cache,i=t.length,o=ba(e,i);Qe(n,o)||(s.uniform1iv(this.addr,o),tn(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||rf,o[r])}function Zv(s){switch(s){case 5126:return Dv;case 35664:return Iv;case 35665:return Uv;case 35666:return kv;case 35674:return Nv;case 35675:return Ov;case 35676:return Fv;case 5124:case 35670:return zv;case 35667:case 35671:return Bv;case 35668:case 35672:return Hv;case 35669:case 35673:return Gv;case 5125:return Vv;case 36294:return Wv;case 36295:return $v;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return Kv}}class Jv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lv(e.type)}}class Qv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zv(e.type)}}class t_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const ll=/(\w+)(\])?(\[|\.)?/g;function Jh(s,t){s.seq.push(t),s.map[t.id]=t}function e_(s,t,e){const n=s.name,i=n.length;for(ll.lastIndex=0;;){const o=ll.exec(n),r=ll.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Jh(e,c===void 0?new Jv(a,s,t):new Qv(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new t_(a),Jh(e,d)),e=d}}}class ha{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);e_(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Qh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const n_=37297;let i_=0;function s_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const tu=new ue;function o_(s){Se._getMatrix(tu,Se.workingColorSpace,s);const t=`mat3( ${tu.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(s)){case ya:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function eu(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+s_(s.getShaderSource(t),r)}else return i}function r_(s,t){const e=o_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function a_(s,t){let e;switch(t){case up:e="Linear";break;case dp:e="Reinhard";break;case fp:e="Cineon";break;case Dd:e="ACESFilmic";break;case mp:e="AgX";break;case gp:e="Neutral";break;case pp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Lr=new k;function l_(){Se.getLuminanceCoefficients(Lr);const s=Lr.x.toFixed(4),t=Lr.y.toFixed(4),e=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function h_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function u_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function Wo(s){return s!==""}function nu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function iu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const d_=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(s){return s.replace(d_,p_)}const f_=new Map;function p_(s,t){let e=pe[t];if(e===void 0){const n=f_.get(t);if(n!==void 0)e=pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bc(e)}const m_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(s){return s.replace(m_,g_)}function g_(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function ou(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function v_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Pd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yi&&(t="SHADOWMAP_TYPE_VSM"),t}function __(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ho:case uo:t="ENVMAP_TYPE_CUBE";break;case xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function M_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case uo:t="ENVMAP_MODE_REFRACTION";break}return t}function x_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ld:t="ENVMAP_BLENDING_MULTIPLY";break;case cp:t="ENVMAP_BLENDING_MIX";break;case hp:t="ENVMAP_BLENDING_ADD";break}return t}function y_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function b_(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=v_(e),c=__(e),h=M_(e),d=x_(e),p=y_(e),f=c_(e),m=h_(o),v=i.createProgram();let g,u,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Wo).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Wo).join(`
`),u.length>0&&(u+=`
`)):(g=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),u=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?pe.tonemapping_pars_fragment:"",e.toneMapping!==Ki?a_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,r_("linearToOutputTexel",e.outputColorSpace),l_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wo).join(`
`)),r=bc(r),r=nu(r,e),r=iu(r,e),a=bc(a),a=nu(a,e),a=iu(a,e),r=su(r),a=su(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",e.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=M+g+r,_=M+u+a,T=Qh(i,i.VERTEX_SHADER,x),S=Qh(i,i.FRAGMENT_SHADER,_);i.attachShader(v,T),i.attachShader(v,S),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function w(C){if(s.debug.checkShaderErrors){const E=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(T).trim(),O=i.getShaderInfoLog(S).trim();let $=!0,z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,T,S);else{const H=eu(i,T,"vertex"),B=eu(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+E+`
`+H+`
`+B)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(N===""||O==="")&&(z=!1);z&&(C.diagnostics={runnable:$,programLog:E,vertexShader:{log:N,prefix:g},fragmentShader:{log:O,prefix:u}})}i.deleteShader(T),i.deleteShader(S),R=new ha(i,v),b=u_(i,v)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(v,n_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=i_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=S,this}let w_=0;class S_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new E_(t),e.set(t,n)),n}}class E_{constructor(t){this.id=w_++,this.code=t,this.usedTimes=0}}function T_(s,t,e,n,i,o,r){const a=new Gc,l=new S_,c=new Set,h=[],d=i.logarithmicDepthBuffer,p=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,y,C,E,N){const O=E.fog,$=N.geometry,z=b.isMeshStandardMaterial?E.environment:null,H=(b.isMeshStandardMaterial?e:t).get(b.envMap||z),B=H&&H.mapping===xa?H.image.height:null,dt=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const vt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ct=vt!==void 0?vt.length:0;let Ft=0;$.morphAttributes.position!==void 0&&(Ft=1),$.morphAttributes.normal!==void 0&&(Ft=2),$.morphAttributes.color!==void 0&&(Ft=3);let se,tt,ft,Rt;if(dt){const be=ni[dt];se=be.vertexShader,tt=be.fragmentShader}else se=b.vertexShader,tt=b.fragmentShader,l.update(b),ft=l.getVertexShaderID(b),Rt=l.getFragmentShaderID(b);const ht=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),Kt=N.isInstancedMesh===!0,$t=N.isBatchedMesh===!0,Xt=!!b.map,st=!!b.matcap,mt=!!H,U=!!b.aoMap,Wt=!!b.lightMap,pt=!!b.bumpMap,Ut=!!b.normalMap,ut=!!b.displacementMap,Pt=!!b.emissiveMap,It=!!b.metalnessMap,L=!!b.roughnessMap,A=b.anisotropy>0,K=b.clearcoat>0,nt=b.dispersion>0,at=b.iridescence>0,it=b.sheen>0,zt=b.transmission>0,yt=A&&!!b.anisotropyMap,Tt=K&&!!b.clearcoatMap,me=K&&!!b.clearcoatNormalMap,gt=K&&!!b.clearcoatRoughnessMap,Nt=at&&!!b.iridescenceMap,ee=at&&!!b.iridescenceThicknessMap,re=it&&!!b.sheenColorMap,kt=it&&!!b.sheenRoughnessMap,ge=!!b.specularMap,ce=!!b.specularColorMap,Ot=!!b.specularIntensityMap,F=zt&&!!b.transmissionMap,rt=zt&&!!b.thicknessMap,Y=!!b.gradientMap,et=!!b.alphaMap,At=b.alphaTest>0,wt=!!b.alphaHash,le=!!b.extensions;let Ue=Ki;b.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ue=s.toneMapping);const Ke={shaderID:dt,shaderType:b.type,shaderName:b.name,vertexShader:se,fragmentShader:tt,defines:b.defines,customVertexShaderID:ft,customFragmentShaderID:Rt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:$t,batchingColor:$t&&N._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&N.instanceColor!==null,instancingMorph:Kt&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Mo,alphaToCoverage:!!b.alphaToCoverage,map:Xt,matcap:st,envMap:mt,envMapMode:mt&&H.mapping,envMapCubeUVHeight:B,aoMap:U,lightMap:Wt,bumpMap:pt,normalMap:Ut,displacementMap:p&&ut,emissiveMap:Pt,normalMapObjectSpace:Ut&&b.normalMapType===xp,normalMapTangentSpace:Ut&&b.normalMapType===Vd,metalnessMap:It,roughnessMap:L,anisotropy:A,anisotropyMap:yt,clearcoat:K,clearcoatMap:Tt,clearcoatNormalMap:me,clearcoatRoughnessMap:gt,dispersion:nt,iridescence:at,iridescenceMap:Nt,iridescenceThicknessMap:ee,sheen:it,sheenColorMap:re,sheenRoughnessMap:kt,specularMap:ge,specularColorMap:ce,specularIntensityMap:Ot,transmission:zt,transmissionMap:F,thicknessMap:rt,gradientMap:Y,opaque:b.transparent===!1&&b.blending===ro&&b.alphaToCoverage===!1,alphaMap:et,alphaTest:At,alphaHash:wt,combine:b.combine,mapUv:Xt&&v(b.map.channel),aoMapUv:U&&v(b.aoMap.channel),lightMapUv:Wt&&v(b.lightMap.channel),bumpMapUv:pt&&v(b.bumpMap.channel),normalMapUv:Ut&&v(b.normalMap.channel),displacementMapUv:ut&&v(b.displacementMap.channel),emissiveMapUv:Pt&&v(b.emissiveMap.channel),metalnessMapUv:It&&v(b.metalnessMap.channel),roughnessMapUv:L&&v(b.roughnessMap.channel),anisotropyMapUv:yt&&v(b.anisotropyMap.channel),clearcoatMapUv:Tt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:me&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:re&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:kt&&v(b.sheenRoughnessMap.channel),specularMapUv:ge&&v(b.specularMap.channel),specularColorMapUv:ce&&v(b.specularColorMap.channel),specularIntensityMapUv:Ot&&v(b.specularIntensityMap.channel),transmissionMapUv:F&&v(b.transmissionMap.channel),thicknessMapUv:rt&&v(b.thicknessMap.channel),alphaMapUv:et&&v(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ut||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!$.attributes.uv&&(Xt||et),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Lt,skinning:N.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Xt&&b.map.isVideoTexture===!0&&Se.getTransfer(b.map.colorSpace)===De,decodeVideoTextureEmissive:Pt&&b.emissiveMap.isVideoTexture===!0&&Se.getTransfer(b.emissiveMap.colorSpace)===De,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fe,flipSided:b.side===gn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:le&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&b.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function u(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)y.push(C),y.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(M(y,b),x(y,b),y.push(s.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function M(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function x(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const y=m[b.type];let C;if(y){const E=ni[y];C=Jd.clone(E.uniforms)}else C=b.uniforms;return C}function T(b,y){let C;for(let E=0,N=h.length;E<N;E++){const O=h[E];if(O.cacheKey===y){C=O,++C.usedTimes;break}}return C===void 0&&(C=new b_(s,y,b,o),h.push(C)),C}function S(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:_,acquireProgram:T,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:R}}function A_(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,l){s.get(r)[a]=l}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function C_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ru(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function au(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(d,p,f,m,v,g){let u=s[t];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:m,renderOrder:d.renderOrder,z:v,group:g},s[t]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=m,u.renderOrder=d.renderOrder,u.z=v,u.group=g),t++,u}function a(d,p,f,m,v,g){const u=r(d,p,f,m,v,g);f.transmission>0?n.push(u):f.transparent===!0?i.push(u):e.push(u)}function l(d,p,f,m,v,g){const u=r(d,p,f,m,v,g);f.transmission>0?n.unshift(u):f.transparent===!0?i.unshift(u):e.unshift(u)}function c(d,p){e.length>1&&e.sort(d||C_),n.length>1&&n.sort(p||ru),i.length>1&&i.sort(p||ru)}function h(){for(let d=t,p=s.length;d<p;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:l,finish:h,sort:c}}function R_(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new au,s.set(n,[r])):i>=o.length?(r=new au,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function P_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Vt};break;case"SpotLight":e={position:new k,direction:new k,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new k,halfWidth:new k,halfHeight:new k};break}return s[t.id]=e,e}}}function L_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let D_=0;function I_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function U_(s){const t=new P_,e=L_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const i=new k,o=new _e,r=new _e;function a(c){let h=0,d=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,v=0,g=0,u=0,M=0,x=0,_=0,T=0,S=0,w=0;c.sort(I_);for(let b=0,y=c.length;b<y;b++){const C=c[b],E=C.color,N=C.intensity,O=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=E.r*N,d+=E.g*N,p+=E.b*N;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],N);w++}else if(C.isDirectionalLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const H=C.shadow,B=e.get(C);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=C.shadow.matrix,M++}n.directional[f]=z,f++}else if(C.isSpotLight){const z=t.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(E).multiplyScalar(N),z.distance=O,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[v]=z;const H=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,H.updateMatrices(C),C.castShadow&&S++),n.spotLightMatrix[v]=H.matrix,C.castShadow){const B=e.get(C);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,n.spotShadow[v]=B,n.spotShadowMap[v]=$,_++}v++}else if(C.isRectAreaLight){const z=t.get(C);z.color.copy(E).multiplyScalar(N),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=z,g++}else if(C.isPointLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const H=C.shadow,B=e.get(C);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,B.shadowCameraNear=H.camera.near,B.shadowCameraFar=H.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=C.shadow.matrix,x++}n.point[m]=z,m++}else if(C.isHemisphereLight){const z=t.get(C);z.skyColor.copy(C.color).multiplyScalar(N),z.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[u]=z,u++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const R=n.hash;(R.directionalLength!==f||R.pointLength!==m||R.spotLength!==v||R.rectAreaLength!==g||R.hemiLength!==u||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==_||R.numSpotMaps!==T||R.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=u,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,R.directionalLength=f,R.pointLength=m,R.spotLength=v,R.rectAreaLength=g,R.hemiLength=u,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=_,R.numSpotMaps=T,R.numLightProbes=w,n.version=D_++)}function l(c,h){let d=0,p=0,f=0,m=0,v=0;const g=h.matrixWorldInverse;for(let u=0,M=c.length;u<M;u++){const x=c[u];if(x.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),d++}else if(x.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),r.identity(),o.copy(x.matrixWorld),o.premultiply(g),r.extractRotation(o),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),m++}else if(x.isPointLight){const _=n.point[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),p++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function lu(s){const t=new U_(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function k_(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new lu(s),t.set(i,[a])):o>=r.length?(a=new lu(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class N_ extends Qi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class O_ extends Qi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function B_(s,t,e){let n=new Vc;const i=new ot,o=new ot,r=new We,a=new N_({depthPacking:Mp}),l=new O_,c={},h=e.maxTextureSize,d={[Zi]:gn,[gn]:Zi,[Fe]:Fe},p=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:F_,fragmentShader:z_}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const m=new xe;m.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new q(m,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rd;let u=this.type;this.render=function(S,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const b=s.getRenderTarget(),y=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),E=s.state;E.setBlending(ji),E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);const N=u!==yi&&this.type===yi,O=u===yi&&this.type!==yi;for(let $=0,z=S.length;$<z;$++){const H=S[$],B=H.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const dt=B.getFrameExtents();if(i.multiply(dt),o.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/dt.x),i.x=o.x*dt.x,B.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/dt.y),i.y=o.y*dt.y,B.mapSize.y=o.y)),B.map===null||N===!0||O===!0){const ct=this.type!==yi?{minFilter:Cn,magFilter:Cn}:{};B.map!==null&&B.map.dispose(),B.map=new ys(i.x,i.y,ct),B.map.texture.name=H.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const vt=B.getViewportCount();for(let ct=0;ct<vt;ct++){const Ft=B.getViewport(ct);r.set(o.x*Ft.x,o.y*Ft.y,o.x*Ft.z,o.y*Ft.w),E.viewport(r),B.updateMatrices(H,ct),n=B.getFrustum(),_(w,R,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===yi&&M(B,R),B.needsUpdate=!1}u=this.type,g.needsUpdate=!1,s.setRenderTarget(b,y,C)};function M(S,w){const R=t.update(v);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ys(i.x,i.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(w,null,R,p,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(w,null,R,f,v,null)}function x(S,w,R,b){let y=null;const C=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)y=C;else if(y=R.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const E=y.uuid,N=w.uuid;let O=c[E];O===void 0&&(O={},c[E]=O);let $=O[N];$===void 0&&($=y.clone(),O[N]=$,w.addEventListener("dispose",T)),y=$}if(y.visible=w.visible,y.wireframe=w.wireframe,b===yi?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const E=s.properties.get(y);E.light=R}return y}function _(S,w,R,b,y){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===yi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const N=t.update(S),O=S.material;if(Array.isArray(O)){const $=N.groups;for(let z=0,H=$.length;z<H;z++){const B=$[z],dt=O[B.materialIndex];if(dt&&dt.visible){const vt=x(S,dt,b,y);S.onBeforeShadow(s,S,w,R,N,vt,B),s.renderBufferDirect(R,null,N,vt,S,B),S.onAfterShadow(s,S,w,R,N,vt,B)}}}else if(O.visible){const $=x(S,O,b,y);S.onBeforeShadow(s,S,w,R,N,$,null),s.renderBufferDirect(R,null,N,$,S,null),S.onAfterShadow(s,S,w,R,N,$,null)}}const E=S.children;for(let N=0,O=E.length;N<O;N++)_(E[N],w,R,b,y)}function T(S){S.target.removeEventListener("dispose",T);for(const R in c){const b=c[R],y=S.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const H_={[Fl]:zl,[Bl]:Vl,[Hl]:Wl,[co]:Gl,[zl]:Fl,[Vl]:Bl,[Wl]:Hl,[Gl]:co};function G_(s,t){function e(){let F=!1;const rt=new We;let Y=null;const et=new We(0,0,0,0);return{setMask:function(At){Y!==At&&!F&&(s.colorMask(At,At,At,At),Y=At)},setLocked:function(At){F=At},setClear:function(At,wt,le,Ue,Ke){Ke===!0&&(At*=Ue,wt*=Ue,le*=Ue),rt.set(At,wt,le,Ue),et.equals(rt)===!1&&(s.clearColor(At,wt,le,Ue),et.copy(rt))},reset:function(){F=!1,Y=null,et.set(-1,0,0,0)}}}function n(){let F=!1,rt=!1,Y=null,et=null,At=null;return{setReversed:function(wt){if(rt!==wt){const le=t.get("EXT_clip_control");rt?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT);const Ue=At;At=null,this.setClear(Ue)}rt=wt},getReversed:function(){return rt},setTest:function(wt){wt?ht(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(wt){Y!==wt&&!F&&(s.depthMask(wt),Y=wt)},setFunc:function(wt){if(rt&&(wt=H_[wt]),et!==wt){switch(wt){case Fl:s.depthFunc(s.NEVER);break;case zl:s.depthFunc(s.ALWAYS);break;case Bl:s.depthFunc(s.LESS);break;case co:s.depthFunc(s.LEQUAL);break;case Hl:s.depthFunc(s.EQUAL);break;case Gl:s.depthFunc(s.GEQUAL);break;case Vl:s.depthFunc(s.GREATER);break;case Wl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=wt}},setLocked:function(wt){F=wt},setClear:function(wt){At!==wt&&(rt&&(wt=1-wt),s.clearDepth(wt),At=wt)},reset:function(){F=!1,Y=null,et=null,At=null,rt=!1}}}function i(){let F=!1,rt=null,Y=null,et=null,At=null,wt=null,le=null,Ue=null,Ke=null;return{setTest:function(be){F||(be?ht(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(be){rt!==be&&!F&&(s.stencilMask(be),rt=be)},setFunc:function(be,vn,Te){(Y!==be||et!==vn||At!==Te)&&(s.stencilFunc(be,vn,Te),Y=be,et=vn,At=Te)},setOp:function(be,vn,Te){(wt!==be||le!==vn||Ue!==Te)&&(s.stencilOp(be,vn,Te),wt=be,le=vn,Ue=Te)},setLocked:function(be){F=be},setClear:function(be){Ke!==be&&(s.clearStencil(be),Ke=be)},reset:function(){F=!1,rt=null,Y=null,et=null,At=null,wt=null,le=null,Ue=null,Ke=null}}}const o=new e,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},p=new WeakMap,f=[],m=null,v=!1,g=null,u=null,M=null,x=null,_=null,T=null,S=null,w=new Vt(0,0,0),R=0,b=!1,y=null,C=null,E=null,N=null,O=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),z=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),z=H>=2);let dt=null,vt={};const ct=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),se=new We().fromArray(ct),tt=new We().fromArray(Ft);function ft(F,rt,Y,et){const At=new Uint8Array(4),wt=s.createTexture();s.bindTexture(F,wt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let le=0;le<Y;le++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(rt,0,s.RGBA,1,1,et,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(rt+le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return wt}const Rt={};Rt[s.TEXTURE_2D]=ft(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=ft(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[s.TEXTURE_2D_ARRAY]=ft(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=ft(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ht(s.DEPTH_TEST),r.setFunc(co),pt(!1),Ut(ph),ht(s.CULL_FACE),U(ji);function ht(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Lt(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Kt(F,rt){return d[F]!==rt?(s.bindFramebuffer(F,rt),d[F]=rt,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=rt),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=rt),!0):!1}function $t(F,rt){let Y=f,et=!1;if(F){Y=p.get(rt),Y===void 0&&(Y=[],p.set(rt,Y));const At=F.textures;if(Y.length!==At.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let wt=0,le=At.length;wt<le;wt++)Y[wt]=s.COLOR_ATTACHMENT0+wt;Y.length=At.length,et=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,et=!0);et&&s.drawBuffers(Y)}function Xt(F){return m!==F?(s.useProgram(F),m=F,!0):!1}const st={[ps]:s.FUNC_ADD,[Xf]:s.FUNC_SUBTRACT,[qf]:s.FUNC_REVERSE_SUBTRACT};st[Yf]=s.MIN,st[jf]=s.MAX;const mt={[Kf]:s.ZERO,[Zf]:s.ONE,[Jf]:s.SRC_COLOR,[Nl]:s.SRC_ALPHA,[sp]:s.SRC_ALPHA_SATURATE,[np]:s.DST_COLOR,[tp]:s.DST_ALPHA,[Qf]:s.ONE_MINUS_SRC_COLOR,[Ol]:s.ONE_MINUS_SRC_ALPHA,[ip]:s.ONE_MINUS_DST_COLOR,[ep]:s.ONE_MINUS_DST_ALPHA,[op]:s.CONSTANT_COLOR,[rp]:s.ONE_MINUS_CONSTANT_COLOR,[ap]:s.CONSTANT_ALPHA,[lp]:s.ONE_MINUS_CONSTANT_ALPHA};function U(F,rt,Y,et,At,wt,le,Ue,Ke,be){if(F===ji){v===!0&&(Lt(s.BLEND),v=!1);return}if(v===!1&&(ht(s.BLEND),v=!0),F!==$f){if(F!==g||be!==b){if((u!==ps||_!==ps)&&(s.blendEquation(s.FUNC_ADD),u=ps,_=ps),be)switch(F){case ro:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kl:s.blendFunc(s.ONE,s.ONE);break;case mh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ro:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case mh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,x=null,T=null,S=null,w.set(0,0,0),R=0,g=F,b=be}return}At=At||rt,wt=wt||Y,le=le||et,(rt!==u||At!==_)&&(s.blendEquationSeparate(st[rt],st[At]),u=rt,_=At),(Y!==M||et!==x||wt!==T||le!==S)&&(s.blendFuncSeparate(mt[Y],mt[et],mt[wt],mt[le]),M=Y,x=et,T=wt,S=le),(Ue.equals(w)===!1||Ke!==R)&&(s.blendColor(Ue.r,Ue.g,Ue.b,Ke),w.copy(Ue),R=Ke),g=F,b=!1}function Wt(F,rt){F.side===Fe?Lt(s.CULL_FACE):ht(s.CULL_FACE);let Y=F.side===gn;rt&&(Y=!Y),pt(Y),F.blending===ro&&F.transparent===!1?U(ji):U(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),o.setMask(F.colorWrite);const et=F.stencilWrite;a.setTest(et),et&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Pt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(F){y!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),y=F)}function Ut(F){F!==Vf?(ht(s.CULL_FACE),F!==C&&(F===ph?s.cullFace(s.BACK):F===Wf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),C=F}function ut(F){F!==E&&(z&&s.lineWidth(F),E=F)}function Pt(F,rt,Y){F?(ht(s.POLYGON_OFFSET_FILL),(N!==rt||O!==Y)&&(s.polygonOffset(rt,Y),N=rt,O=Y)):Lt(s.POLYGON_OFFSET_FILL)}function It(F){F?ht(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function L(F){F===void 0&&(F=s.TEXTURE0+$-1),dt!==F&&(s.activeTexture(F),dt=F)}function A(F,rt,Y){Y===void 0&&(dt===null?Y=s.TEXTURE0+$-1:Y=dt);let et=vt[Y];et===void 0&&(et={type:void 0,texture:void 0},vt[Y]=et),(et.type!==F||et.texture!==rt)&&(dt!==Y&&(s.activeTexture(Y),dt=Y),s.bindTexture(F,rt||Rt[F]),et.type=F,et.texture=rt)}function K(){const F=vt[dt];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function nt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zt(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(F){se.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),se.copy(F))}function kt(F){tt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),tt.copy(F))}function ge(F,rt){let Y=c.get(rt);Y===void 0&&(Y=new WeakMap,c.set(rt,Y));let et=Y.get(F);et===void 0&&(et=s.getUniformBlockIndex(rt,F.name),Y.set(F,et))}function ce(F,rt){const et=c.get(rt).get(F);l.get(rt)!==et&&(s.uniformBlockBinding(rt,et,F.__bindingPointIndex),l.set(rt,et))}function Ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},dt=null,vt={},d={},p=new WeakMap,f=[],m=null,v=!1,g=null,u=null,M=null,x=null,_=null,T=null,S=null,w=new Vt(0,0,0),R=0,b=!1,y=null,C=null,E=null,N=null,O=null,se.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ht,disable:Lt,bindFramebuffer:Kt,drawBuffers:$t,useProgram:Xt,setBlending:U,setMaterial:Wt,setFlipSided:pt,setCullFace:Ut,setLineWidth:ut,setPolygonOffset:Pt,setScissorTest:It,activeTexture:L,bindTexture:A,unbindTexture:K,compressedTexImage2D:nt,compressedTexImage3D:at,texImage2D:Nt,texImage3D:ee,updateUBOMapping:ge,uniformBlockBinding:ce,texStorage2D:me,texStorage3D:gt,texSubImage2D:it,texSubImage3D:zt,compressedTexSubImage2D:yt,compressedTexSubImage3D:Tt,scissor:re,viewport:kt,reset:Ot}}function cu(s,t,e,n){const i=V_(n);switch(e){case Od:return s*t;case zd:return s*t;case Bd:return s*t*2;case Oc:return s*t/i.components*i.byteLength;case Fc:return s*t/i.components*i.byteLength;case Hd:return s*t*2/i.components*i.byteLength;case zc:return s*t*2/i.components*i.byteLength;case Fd:return s*t*3/i.components*i.byteLength;case Jn:return s*t*4/i.components*i.byteLength;case Bc:return s*t*4/i.components*i.byteLength;case oa:case ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case aa:case la:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jl:case Zl:return Math.max(s,16)*Math.max(t,8)/4;case Yl:case Kl:return Math.max(s,8)*Math.max(t,8)/2;case Jl:case Ql:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ic:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case sc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case rc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ac:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case lc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case hc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case uc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case dc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case fc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case pc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ca:case mc:case gc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Gd:case vc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case _c:case Mc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function V_(s){switch(s){case Ri:case Ud:return{byteLength:1,components:1};case Zo:case kd:case sr:return{byteLength:2,components:1};case kc:case Nc:return{byteLength:2,components:4};case xs:case Uc:case si:return{byteLength:4,components:1};case Nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function W_(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,A){return f?new OffscreenCanvas(L,A):pa("canvas")}function v(L,A,K){let nt=1;const at=It(L);if((at.width>K||at.height>K)&&(nt=K/Math.max(at.width,at.height)),nt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const it=Math.floor(nt*at.width),zt=Math.floor(nt*at.height);d===void 0&&(d=m(it,zt));const yt=A?m(it,zt):d;return yt.width=it,yt.height=zt,yt.getContext("2d").drawImage(L,0,0,it,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+it+"x"+zt+")."),yt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),L;return L}function g(L){return L.generateMipmaps}function u(L){s.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(L,A,K,nt,at=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let it=A;if(A===s.RED&&(K===s.FLOAT&&(it=s.R32F),K===s.HALF_FLOAT&&(it=s.R16F),K===s.UNSIGNED_BYTE&&(it=s.R8)),A===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(it=s.R8UI),K===s.UNSIGNED_SHORT&&(it=s.R16UI),K===s.UNSIGNED_INT&&(it=s.R32UI),K===s.BYTE&&(it=s.R8I),K===s.SHORT&&(it=s.R16I),K===s.INT&&(it=s.R32I)),A===s.RG&&(K===s.FLOAT&&(it=s.RG32F),K===s.HALF_FLOAT&&(it=s.RG16F),K===s.UNSIGNED_BYTE&&(it=s.RG8)),A===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(it=s.RG8UI),K===s.UNSIGNED_SHORT&&(it=s.RG16UI),K===s.UNSIGNED_INT&&(it=s.RG32UI),K===s.BYTE&&(it=s.RG8I),K===s.SHORT&&(it=s.RG16I),K===s.INT&&(it=s.RG32I)),A===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(it=s.RGB8UI),K===s.UNSIGNED_SHORT&&(it=s.RGB16UI),K===s.UNSIGNED_INT&&(it=s.RGB32UI),K===s.BYTE&&(it=s.RGB8I),K===s.SHORT&&(it=s.RGB16I),K===s.INT&&(it=s.RGB32I)),A===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(it=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(it=s.RGBA16UI),K===s.UNSIGNED_INT&&(it=s.RGBA32UI),K===s.BYTE&&(it=s.RGBA8I),K===s.SHORT&&(it=s.RGBA16I),K===s.INT&&(it=s.RGBA32I)),A===s.RGB&&K===s.UNSIGNED_INT_5_9_9_9_REV&&(it=s.RGB9_E5),A===s.RGBA){const zt=at?ya:Se.getTransfer(nt);K===s.FLOAT&&(it=s.RGBA32F),K===s.HALF_FLOAT&&(it=s.RGBA16F),K===s.UNSIGNED_BYTE&&(it=zt===De?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(it=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(it=s.RGB5_A1)}return(it===s.R16F||it===s.R32F||it===s.RG16F||it===s.RG32F||it===s.RGBA16F||it===s.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function _(L,A){let K;return L?A===null||A===xs||A===po?K=s.DEPTH24_STENCIL8:A===si?K=s.DEPTH32F_STENCIL8:A===Zo&&(K=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===xs||A===po?K=s.DEPTH_COMPONENT24:A===si?K=s.DEPTH_COMPONENT32F:A===Zo&&(K=s.DEPTH_COMPONENT16),K}function T(L,A){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Cn&&L.minFilter!==ii?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function S(L){const A=L.target;A.removeEventListener("dispose",S),R(A),A.isVideoTexture&&h.delete(A)}function w(L){const A=L.target;A.removeEventListener("dispose",w),y(A)}function R(L){const A=n.get(L);if(A.__webglInit===void 0)return;const K=L.source,nt=p.get(K);if(nt){const at=nt[A.__cacheKey];at.usedTimes--,at.usedTimes===0&&b(L),Object.keys(nt).length===0&&p.delete(K)}n.remove(L)}function b(L){const A=n.get(L);s.deleteTexture(A.__webglTexture);const K=L.source,nt=p.get(K);delete nt[A.__cacheKey],r.memory.textures--}function y(L){const A=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(A.__webglFramebuffer[nt]))for(let at=0;at<A.__webglFramebuffer[nt].length;at++)s.deleteFramebuffer(A.__webglFramebuffer[nt][at]);else s.deleteFramebuffer(A.__webglFramebuffer[nt]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[nt])}else{if(Array.isArray(A.__webglFramebuffer))for(let nt=0;nt<A.__webglFramebuffer.length;nt++)s.deleteFramebuffer(A.__webglFramebuffer[nt]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let nt=0;nt<A.__webglColorRenderbuffer.length;nt++)A.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[nt]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const K=L.textures;for(let nt=0,at=K.length;nt<at;nt++){const it=n.get(K[nt]);it.__webglTexture&&(s.deleteTexture(it.__webglTexture),r.memory.textures--),n.remove(K[nt])}n.remove(L)}let C=0;function E(){C=0}function N(){const L=C;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),C+=1,L}function O(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function $(L,A){const K=n.get(L);if(L.isVideoTexture&&ut(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const nt=L.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(K,L,A);return}}e.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+A)}function z(L,A){const K=n.get(L);if(L.version>0&&K.__version!==L.version){tt(K,L,A);return}e.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+A)}function H(L,A){const K=n.get(L);if(L.version>0&&K.__version!==L.version){tt(K,L,A);return}e.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+A)}function B(L,A){const K=n.get(L);if(L.version>0&&K.__version!==L.version){ft(K,L,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+A)}const dt={[fo]:s.REPEAT,[Ei]:s.CLAMP_TO_EDGE,[ql]:s.MIRRORED_REPEAT},vt={[Cn]:s.NEAREST,[vp]:s.NEAREST_MIPMAP_NEAREST,[ur]:s.NEAREST_MIPMAP_LINEAR,[ii]:s.LINEAR,[Na]:s.LINEAR_MIPMAP_NEAREST,[vs]:s.LINEAR_MIPMAP_LINEAR},ct={[yp]:s.NEVER,[Ap]:s.ALWAYS,[bp]:s.LESS,[Wd]:s.LEQUAL,[wp]:s.EQUAL,[Tp]:s.GEQUAL,[Sp]:s.GREATER,[Ep]:s.NOTEQUAL};function Ft(L,A){if(A.type===si&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===ii||A.magFilter===Na||A.magFilter===ur||A.magFilter===vs||A.minFilter===ii||A.minFilter===Na||A.minFilter===ur||A.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,dt[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,dt[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,dt[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,vt[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,vt[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ct[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Cn||A.minFilter!==ur&&A.minFilter!==vs||A.type===si&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function se(L,A){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",S));const nt=A.source;let at=p.get(nt);at===void 0&&(at={},p.set(nt,at));const it=O(A);if(it!==L.__cacheKey){at[it]===void 0&&(at[it]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,K=!0),at[it].usedTimes++;const zt=at[L.__cacheKey];zt!==void 0&&(at[L.__cacheKey].usedTimes--,zt.usedTimes===0&&b(A)),L.__cacheKey=it,L.__webglTexture=at[it].texture}return K}function tt(L,A,K){let nt=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(nt=s.TEXTURE_3D);const at=se(L,A),it=A.source;e.bindTexture(nt,L.__webglTexture,s.TEXTURE0+K);const zt=n.get(it);if(it.version!==zt.__version||at===!0){e.activeTexture(s.TEXTURE0+K);const yt=Se.getPrimaries(Se.workingColorSpace),Tt=A.colorSpace===$i?null:Se.getPrimaries(A.colorSpace),me=A.colorSpace===$i||yt===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let gt=v(A.image,!1,i.maxTextureSize);gt=Pt(A,gt);const Nt=o.convert(A.format,A.colorSpace),ee=o.convert(A.type);let re=x(A.internalFormat,Nt,ee,A.colorSpace,A.isVideoTexture);Ft(nt,A);let kt;const ge=A.mipmaps,ce=A.isVideoTexture!==!0,Ot=zt.__version===void 0||at===!0,F=it.dataReady,rt=T(A,gt);if(A.isDepthTexture)re=_(A.format===mo,A.type),Ot&&(ce?e.texStorage2D(s.TEXTURE_2D,1,re,gt.width,gt.height):e.texImage2D(s.TEXTURE_2D,0,re,gt.width,gt.height,0,Nt,ee,null));else if(A.isDataTexture)if(ge.length>0){ce&&Ot&&e.texStorage2D(s.TEXTURE_2D,rt,re,ge[0].width,ge[0].height);for(let Y=0,et=ge.length;Y<et;Y++)kt=ge[Y],ce?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,kt.width,kt.height,Nt,ee,kt.data):e.texImage2D(s.TEXTURE_2D,Y,re,kt.width,kt.height,0,Nt,ee,kt.data);A.generateMipmaps=!1}else ce?(Ot&&e.texStorage2D(s.TEXTURE_2D,rt,re,gt.width,gt.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt.width,gt.height,Nt,ee,gt.data)):e.texImage2D(s.TEXTURE_2D,0,re,gt.width,gt.height,0,Nt,ee,gt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ce&&Ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,rt,re,ge[0].width,ge[0].height,gt.depth);for(let Y=0,et=ge.length;Y<et;Y++)if(kt=ge[Y],A.format!==Jn)if(Nt!==null)if(ce){if(F)if(A.layerUpdates.size>0){const At=cu(kt.width,kt.height,A.format,A.type);for(const wt of A.layerUpdates){const le=kt.data.subarray(wt*At/kt.data.BYTES_PER_ELEMENT,(wt+1)*At/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,wt,kt.width,kt.height,1,Nt,le)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,kt.width,kt.height,gt.depth,Nt,kt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,re,kt.width,kt.height,gt.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,kt.width,kt.height,gt.depth,Nt,ee,kt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,re,kt.width,kt.height,gt.depth,0,Nt,ee,kt.data)}else{ce&&Ot&&e.texStorage2D(s.TEXTURE_2D,rt,re,ge[0].width,ge[0].height);for(let Y=0,et=ge.length;Y<et;Y++)kt=ge[Y],A.format!==Jn?Nt!==null?ce?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,kt.width,kt.height,Nt,kt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,re,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,kt.width,kt.height,Nt,ee,kt.data):e.texImage2D(s.TEXTURE_2D,Y,re,kt.width,kt.height,0,Nt,ee,kt.data)}else if(A.isDataArrayTexture)if(ce){if(Ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,rt,re,gt.width,gt.height,gt.depth),F)if(A.layerUpdates.size>0){const Y=cu(gt.width,gt.height,A.format,A.type);for(const et of A.layerUpdates){const At=gt.data.subarray(et*Y/gt.data.BYTES_PER_ELEMENT,(et+1)*Y/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,gt.width,gt.height,1,Nt,ee,At)}A.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Nt,ee,gt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,re,gt.width,gt.height,gt.depth,0,Nt,ee,gt.data);else if(A.isData3DTexture)ce?(Ot&&e.texStorage3D(s.TEXTURE_3D,rt,re,gt.width,gt.height,gt.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Nt,ee,gt.data)):e.texImage3D(s.TEXTURE_3D,0,re,gt.width,gt.height,gt.depth,0,Nt,ee,gt.data);else if(A.isFramebufferTexture){if(Ot)if(ce)e.texStorage2D(s.TEXTURE_2D,rt,re,gt.width,gt.height);else{let Y=gt.width,et=gt.height;for(let At=0;At<rt;At++)e.texImage2D(s.TEXTURE_2D,At,re,Y,et,0,Nt,ee,null),Y>>=1,et>>=1}}else if(ge.length>0){if(ce&&Ot){const Y=It(ge[0]);e.texStorage2D(s.TEXTURE_2D,rt,re,Y.width,Y.height)}for(let Y=0,et=ge.length;Y<et;Y++)kt=ge[Y],ce?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,Nt,ee,kt):e.texImage2D(s.TEXTURE_2D,Y,re,Nt,ee,kt);A.generateMipmaps=!1}else if(ce){if(Ot){const Y=It(gt);e.texStorage2D(s.TEXTURE_2D,rt,re,Y.width,Y.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,ee,gt)}else e.texImage2D(s.TEXTURE_2D,0,re,Nt,ee,gt);g(A)&&u(nt),zt.__version=it.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ft(L,A,K){if(A.image.length!==6)return;const nt=se(L,A),at=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+K);const it=n.get(at);if(at.version!==it.__version||nt===!0){e.activeTexture(s.TEXTURE0+K);const zt=Se.getPrimaries(Se.workingColorSpace),yt=A.colorSpace===$i?null:Se.getPrimaries(A.colorSpace),Tt=A.colorSpace===$i||zt===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const me=A.isCompressedTexture||A.image[0].isCompressedTexture,gt=A.image[0]&&A.image[0].isDataTexture,Nt=[];for(let et=0;et<6;et++)!me&&!gt?Nt[et]=v(A.image[et],!0,i.maxCubemapSize):Nt[et]=gt?A.image[et].image:A.image[et],Nt[et]=Pt(A,Nt[et]);const ee=Nt[0],re=o.convert(A.format,A.colorSpace),kt=o.convert(A.type),ge=x(A.internalFormat,re,kt,A.colorSpace),ce=A.isVideoTexture!==!0,Ot=it.__version===void 0||nt===!0,F=at.dataReady;let rt=T(A,ee);Ft(s.TEXTURE_CUBE_MAP,A);let Y;if(me){ce&&Ot&&e.texStorage2D(s.TEXTURE_CUBE_MAP,rt,ge,ee.width,ee.height);for(let et=0;et<6;et++){Y=Nt[et].mipmaps;for(let At=0;At<Y.length;At++){const wt=Y[At];A.format!==Jn?re!==null?ce?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,0,0,wt.width,wt.height,re,wt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,ge,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,0,0,wt.width,wt.height,re,kt,wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,ge,wt.width,wt.height,0,re,kt,wt.data)}}}else{if(Y=A.mipmaps,ce&&Ot){Y.length>0&&rt++;const et=It(Nt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,rt,ge,et.width,et.height)}for(let et=0;et<6;et++)if(gt){ce?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Nt[et].width,Nt[et].height,re,kt,Nt[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ge,Nt[et].width,Nt[et].height,0,re,kt,Nt[et].data);for(let At=0;At<Y.length;At++){const le=Y[At].image[et].image;ce?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,0,0,le.width,le.height,re,kt,le.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,ge,le.width,le.height,0,re,kt,le.data)}}else{ce?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,re,kt,Nt[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ge,re,kt,Nt[et]);for(let At=0;At<Y.length;At++){const wt=Y[At];ce?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,0,0,re,kt,wt.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,ge,re,kt,wt.image[et])}}}g(A)&&u(s.TEXTURE_CUBE_MAP),it.__version=at.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Rt(L,A,K,nt,at,it){const zt=o.convert(K.format,K.colorSpace),yt=o.convert(K.type),Tt=x(K.internalFormat,zt,yt,K.colorSpace),me=n.get(A),gt=n.get(K);if(gt.__renderTarget=A,!me.__hasExternalTextures){const Nt=Math.max(1,A.width>>it),ee=Math.max(1,A.height>>it);at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,it,Tt,Nt,ee,A.depth,0,zt,yt,null):e.texImage2D(at,it,Tt,Nt,ee,0,zt,yt,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),Ut(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,at,gt.__webglTexture,0,pt(A)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,at,gt.__webglTexture,it),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(L,A,K){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){const nt=A.depthTexture,at=nt&&nt.isDepthTexture?nt.type:null,it=_(A.stencilBuffer,at),zt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=pt(A);Ut(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,it,A.width,A.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,it,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,it,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,zt,s.RENDERBUFFER,L)}else{const nt=A.textures;for(let at=0;at<nt.length;at++){const it=nt[at],zt=o.convert(it.format,it.colorSpace),yt=o.convert(it.type),Tt=x(it.internalFormat,zt,yt,it.colorSpace),me=pt(A);K&&Ut(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,Tt,A.width,A.height):Ut(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,Tt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(A.depthTexture);nt.__renderTarget=A,(!nt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),$(A.depthTexture,0);const at=nt.__webglTexture,it=pt(A);if(A.depthTexture.format===ao)Ut(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0);else if(A.depthTexture.format===mo)Ut(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Kt(L){const A=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const nt=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),nt){const at=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,nt.removeEventListener("dispose",at)};nt.addEventListener("dispose",at),A.__depthDisposeCallback=at}A.__boundDepthTexture=nt}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Lt(A.__webglFramebuffer,L)}else if(K){A.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[nt]),A.__webglDepthbuffer[nt]===void 0)A.__webglDepthbuffer[nt]=s.createRenderbuffer(),ht(A.__webglDepthbuffer[nt],L,!1);else{const at=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=A.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,it)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),ht(A.__webglDepthbuffer,L,!1);else{const nt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,at)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(L,A,K){const nt=n.get(L);A!==void 0&&Rt(nt.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Kt(L)}function Xt(L){const A=L.texture,K=n.get(L),nt=n.get(A);L.addEventListener("dispose",w);const at=L.textures,it=L.isWebGLCubeRenderTarget===!0,zt=at.length>1;if(zt||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=A.version,r.memory.textures++),it){K.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer[yt]=[];for(let Tt=0;Tt<A.mipmaps.length;Tt++)K.__webglFramebuffer[yt][Tt]=s.createFramebuffer()}else K.__webglFramebuffer[yt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer=[];for(let yt=0;yt<A.mipmaps.length;yt++)K.__webglFramebuffer[yt]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(zt)for(let yt=0,Tt=at.length;yt<Tt;yt++){const me=n.get(at[yt]);me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture(),r.memory.textures++)}if(L.samples>0&&Ut(L)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let yt=0;yt<at.length;yt++){const Tt=at[yt];K.__webglColorRenderbuffer[yt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[yt]);const me=o.convert(Tt.format,Tt.colorSpace),gt=o.convert(Tt.type),Nt=x(Tt.internalFormat,me,gt,Tt.colorSpace,L.isXRRenderTarget===!0),ee=pt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,Nt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,K.__webglColorRenderbuffer[yt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),ht(K.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(it){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,A);for(let yt=0;yt<6;yt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Tt=0;Tt<A.mipmaps.length;Tt++)Rt(K.__webglFramebuffer[yt][Tt],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Tt);else Rt(K.__webglFramebuffer[yt],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);g(A)&&u(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let yt=0,Tt=at.length;yt<Tt;yt++){const me=at[yt],gt=n.get(me);e.bindTexture(s.TEXTURE_2D,gt.__webglTexture),Ft(s.TEXTURE_2D,me),Rt(K.__webglFramebuffer,L,me,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,0),g(me)&&u(s.TEXTURE_2D)}e.unbindTexture()}else{let yt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(yt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(yt,nt.__webglTexture),Ft(yt,A),A.mipmaps&&A.mipmaps.length>0)for(let Tt=0;Tt<A.mipmaps.length;Tt++)Rt(K.__webglFramebuffer[Tt],L,A,s.COLOR_ATTACHMENT0,yt,Tt);else Rt(K.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,yt,0);g(A)&&u(yt),e.unbindTexture()}L.depthBuffer&&Kt(L)}function st(L){const A=L.textures;for(let K=0,nt=A.length;K<nt;K++){const at=A[K];if(g(at)){const it=M(L),zt=n.get(at).__webglTexture;e.bindTexture(it,zt),u(it),e.unbindTexture()}}}const mt=[],U=[];function Wt(L){if(L.samples>0){if(Ut(L)===!1){const A=L.textures,K=L.width,nt=L.height;let at=s.COLOR_BUFFER_BIT;const it=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,zt=n.get(L),yt=A.length>1;if(yt)for(let Tt=0;Tt<A.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Tt=0;Tt<A.length;Tt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),yt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,zt.__webglColorRenderbuffer[Tt]);const me=n.get(A[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,me,0)}s.blitFramebuffer(0,0,K,nt,0,0,K,nt,at,s.NEAREST),l===!0&&(mt.length=0,U.length=0,mt.push(s.COLOR_ATTACHMENT0+Tt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(mt.push(it),U.push(it),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),yt)for(let Tt=0;Tt<A.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,zt.__webglColorRenderbuffer[Tt]);const me=n.get(A[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,me,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function pt(L){return Math.min(i.maxSamples,L.samples)}function Ut(L){const A=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ut(L){const A=r.render.frame;h.get(L)!==A&&(h.set(L,A),L.update())}function Pt(L,A){const K=L.colorSpace,nt=L.format,at=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==Mo&&K!==$i&&(Se.getTransfer(K)===De?(nt!==Jn||at!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),A}function It(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=E,this.setTexture2D=$,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=B,this.rebindTextures=$t,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Ut}function $_(s,t){function e(n,i=$i){let o;const r=Se.getTransfer(i);if(n===Ri)return s.UNSIGNED_BYTE;if(n===kc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Nc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Nd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ud)return s.BYTE;if(n===kd)return s.SHORT;if(n===Zo)return s.UNSIGNED_SHORT;if(n===Uc)return s.INT;if(n===xs)return s.UNSIGNED_INT;if(n===si)return s.FLOAT;if(n===sr)return s.HALF_FLOAT;if(n===Od)return s.ALPHA;if(n===Fd)return s.RGB;if(n===Jn)return s.RGBA;if(n===zd)return s.LUMINANCE;if(n===Bd)return s.LUMINANCE_ALPHA;if(n===ao)return s.DEPTH_COMPONENT;if(n===mo)return s.DEPTH_STENCIL;if(n===Oc)return s.RED;if(n===Fc)return s.RED_INTEGER;if(n===Hd)return s.RG;if(n===zc)return s.RG_INTEGER;if(n===Bc)return s.RGBA_INTEGER;if(n===oa||n===ra||n===aa||n===la)if(r===De)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===oa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===oa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yl||n===jl||n===Kl||n===Zl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Yl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jl||n===Ql||n===tc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Jl||n===Ql)return r===De?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===tc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ec||n===nc||n===ic||n===sc||n===oc||n===rc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ec)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===mc||n===gc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ca)return r===De?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gd||n===vc||n===_c||n===Mc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===ca)return o.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_c)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===po?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class X_ extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class bt extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q_={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),u=this._getHandJoint(c,v);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&p>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Y_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class K_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new un,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pi({vertexShader:Y_,fragmentShader:j_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new q(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z_ extends ws{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,p=null,f=null,m=null;const v=new K_,g=e.getContextAttributes();let u=null,M=null;const x=[],_=[],T=new ot;let S=null;const w=new bn;w.viewport=new We;const R=new bn;R.viewport=new We;const b=[w,R],y=new X_;let C=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ft=x[tt];return ft===void 0&&(ft=new cl,x[tt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(tt){let ft=x[tt];return ft===void 0&&(ft=new cl,x[tt]=ft),ft.getGripSpace()},this.getHand=function(tt){let ft=x[tt];return ft===void 0&&(ft=new cl,x[tt]=ft),ft.getHandSpace()};function N(tt){const ft=_.indexOf(tt.inputSource);if(ft===-1)return;const Rt=x[ft];Rt!==void 0&&(Rt.update(tt.inputSource,tt.frame,c||r),Rt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function O(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",$);for(let tt=0;tt<x.length;tt++){const ft=_[tt];ft!==null&&(_[tt]=null,x[tt].disconnect(ft))}C=null,E=null,v.reset(),t.setRenderTarget(u),f=null,p=null,d=null,i=null,M=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(tt){if(i=tt,i!==null){if(u=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",O),i.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){const ft={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,e,ft),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ys(f.framebufferWidth,f.framebufferHeight,{format:Jn,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ft=null,Rt=null,ht=null;g.depth&&(ht=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=g.stencil?mo:ao,Rt=g.stencil?po:xs);const Lt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:o};d=new XRWebGLBinding(i,e),p=d.createProjectionLayer(Lt),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),M=new ys(p.textureWidth,p.textureHeight,{format:Jn,type:Ri,depthTexture:new sf(p.textureWidth,p.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(tt){for(let ft=0;ft<tt.removed.length;ft++){const Rt=tt.removed[ft],ht=_.indexOf(Rt);ht>=0&&(_[ht]=null,x[ht].disconnect(Rt))}for(let ft=0;ft<tt.added.length;ft++){const Rt=tt.added[ft];let ht=_.indexOf(Rt);if(ht===-1){for(let Kt=0;Kt<x.length;Kt++)if(Kt>=_.length){_.push(Rt),ht=Kt;break}else if(_[Kt]===null){_[Kt]=Rt,ht=Kt;break}if(ht===-1)break}const Lt=x[ht];Lt&&Lt.connect(Rt)}}const z=new k,H=new k;function B(tt,ft,Rt){z.setFromMatrixPosition(ft.matrixWorld),H.setFromMatrixPosition(Rt.matrixWorld);const ht=z.distanceTo(H),Lt=ft.projectionMatrix.elements,Kt=Rt.projectionMatrix.elements,$t=Lt[14]/(Lt[10]-1),Xt=Lt[14]/(Lt[10]+1),st=(Lt[9]+1)/Lt[5],mt=(Lt[9]-1)/Lt[5],U=(Lt[8]-1)/Lt[0],Wt=(Kt[8]+1)/Kt[0],pt=$t*U,Ut=$t*Wt,ut=ht/(-U+Wt),Pt=ut*-U;if(ft.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Pt),tt.translateZ(ut),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Lt[10]===-1)tt.projectionMatrix.copy(ft.projectionMatrix),tt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const It=$t+ut,L=Xt+ut,A=pt-Pt,K=Ut+(ht-Pt),nt=st*Xt/L*It,at=mt*Xt/L*It;tt.projectionMatrix.makePerspective(A,K,nt,at,It,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function dt(tt,ft){ft===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ft.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(i===null)return;let ft=tt.near,Rt=tt.far;v.texture!==null&&(v.depthNear>0&&(ft=v.depthNear),v.depthFar>0&&(Rt=v.depthFar)),y.near=R.near=w.near=ft,y.far=R.far=w.far=Rt,(C!==y.near||E!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,E=y.far),w.layers.mask=tt.layers.mask|2,R.layers.mask=tt.layers.mask|4,y.layers.mask=w.layers.mask|R.layers.mask;const ht=tt.parent,Lt=y.cameras;dt(y,ht);for(let Kt=0;Kt<Lt.length;Kt++)dt(Lt[Kt],ht);Lt.length===2?B(y,w,R):y.projectionMatrix.copy(w.projectionMatrix),vt(tt,y,ht)};function vt(tt,ft,Rt){Rt===null?tt.matrix.copy(ft.matrixWorld):(tt.matrix.copy(Rt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ft.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ft.projectionMatrix),tt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=go*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(tt){l=tt,p!==null&&(p.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ct=null;function Ft(tt,ft){if(h=ft.getViewerPose(c||r),m=ft,h!==null){const Rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let ht=!1;Rt.length!==y.cameras.length&&(y.cameras.length=0,ht=!0);for(let Kt=0;Kt<Rt.length;Kt++){const $t=Rt[Kt];let Xt=null;if(f!==null)Xt=f.getViewport($t);else{const mt=d.getViewSubImage(p,$t);Xt=mt.viewport,Kt===0&&(t.setRenderTargetTextures(M,mt.colorTexture,p.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(M))}let st=b[Kt];st===void 0&&(st=new bn,st.layers.enable(Kt),st.viewport=new We,b[Kt]=st),st.matrix.fromArray($t.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray($t.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Kt===0&&(y.matrix.copy(st.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ht===!0&&y.cameras.push(st)}const Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Kt=d.getDepthInformation(Rt[0]);Kt&&Kt.isValid&&Kt.texture&&v.init(t,Kt,i.renderState)}}for(let Rt=0;Rt<x.length;Rt++){const ht=_[Rt],Lt=x[Rt];ht!==null&&Lt!==void 0&&Lt.update(ht,ft,c||r)}ct&&ct(tt,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),m=null}const se=new ef;se.setAnimationLoop(Ft),this.setAnimationLoop=function(tt){ct=tt},this.dispose=function(){}}}const hs=new ti,J_=new _e;function Q_(s,t){function e(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,Zd(s)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function i(g,u,M,x,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(g,u):u.isMeshToonMaterial?(o(g,u),d(g,u)):u.isMeshPhongMaterial?(o(g,u),h(g,u)):u.isMeshStandardMaterial?(o(g,u),p(g,u),u.isMeshPhysicalMaterial&&f(g,u,_)):u.isMeshMatcapMaterial?(o(g,u),m(g,u)):u.isMeshDepthMaterial?o(g,u):u.isMeshDistanceMaterial?(o(g,u),v(g,u)):u.isMeshNormalMaterial?o(g,u):u.isLineBasicMaterial?(r(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,M,x):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,e(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,e(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===gn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,e(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===gn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,e(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,e(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const M=t.get(u),x=M.envMap,_=M.envMapRotation;x&&(g.envMap.value=x,hs.copy(_),hs.x*=-1,hs.y*=-1,hs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),g.envMapRotation.value.setFromMatrix4(J_.makeRotationFromEuler(hs)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,g.aoMapTransform))}function r(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,e(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,M,x){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*M,g.scale.value=x*.5,u.map&&(g.map.value=u.map,e(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,e(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function p(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function f(g,u,M){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===gn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,u){u.matcap&&(g.matcap.value=u.matcap)}function v(g,u){const M=t.get(u).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tM(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const _=x.program;n.uniformBlockBinding(M,_)}function c(M,x){let _=i[M.id];_===void 0&&(m(M),_=h(M),i[M.id]=_,M.addEventListener("dispose",g));const T=x.program;n.updateUBOMapping(M,T);const S=t.render.frame;o[M.id]!==S&&(p(M),o[M.id]=S)}function h(M){const x=d();M.__bindingPointIndex=x;const _=s.createBuffer(),T=M.__size,S=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,T,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function d(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const x=i[M.id],_=M.uniforms,T=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let S=0,w=_.length;S<w;S++){const R=Array.isArray(_[S])?_[S]:[_[S]];for(let b=0,y=R.length;b<y;b++){const C=R[b];if(f(C,S,b,T)===!0){const E=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let $=0;$<N.length;$++){const z=N[$],H=v(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,E+O,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,O),O+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,E,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,x,_,T){const S=M.value,w=x+"_"+_;if(T[w]===void 0)return typeof S=="number"||typeof S=="boolean"?T[w]=S:T[w]=S.clone(),!0;{const R=T[w];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return T[w]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function m(M){const x=M.uniforms;let _=0;const T=16;for(let w=0,R=x.length;w<R;w++){const b=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,C=b.length;y<C;y++){const E=b[y],N=Array.isArray(E.value)?E.value:[E.value];for(let O=0,$=N.length;O<$;O++){const z=N[O],H=v(z),B=_%T,dt=B%H.boundary,vt=B+dt;_+=dt,vt!==0&&T-vt<H.storage&&(_+=T-vt),E.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=_,_+=H.storage}}}const S=_%T;return S>0&&(_+=T-S),M.__size=_,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function g(M){const x=M.target;x.removeEventListener("dispose",g);const _=r.indexOf(x.__bindingPointIndex);r.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete o[x.id]}function u(){for(const M in i)s.deleteBuffer(i[M]);r=[],i={},o={}}return{bind:l,update:c,dispose:u}}class cf{constructor(t={}){const{canvas:e=Wp(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,u=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=Ki,this.toneMappingExposure=1;const _=this;let T=!1,S=0,w=0,R=null,b=-1,y=null;const C=new We,E=new We;let N=null;const O=new Vt(0);let $=0,z=e.width,H=e.height,B=1,dt=null,vt=null;const ct=new We(0,0,z,H),Ft=new We(0,0,z,H);let se=!1;const tt=new Vc;let ft=!1,Rt=!1;const ht=new _e,Lt=new _e,Kt=new k,$t=new We,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function mt(){return R===null?B:1}let U=n;function Wt(P,V){return e.getContext(P,V)}try{const P={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ic}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",wt,!1),U===null){const V="webgl2";if(U=Wt(V,P),U===null)throw Wt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let pt,Ut,ut,Pt,It,L,A,K,nt,at,it,zt,yt,Tt,me,gt,Nt,ee,re,kt,ge,ce,Ot,F;function rt(){pt=new rv(U),pt.init(),ce=new $_(U,pt),Ut=new tv(U,pt,t,ce),ut=new G_(U,pt),Ut.reverseDepthBuffer&&p&&ut.buffers.depth.setReversed(!0),Pt=new cv(U),It=new A_,L=new W_(U,pt,ut,It,Ut,ce,Pt),A=new nv(_),K=new ov(_),nt=new gm(U),Ot=new Jg(U,nt),at=new av(U,nt,Pt,Ot),it=new uv(U,at,nt,Pt),re=new hv(U,Ut,L),gt=new ev(It),zt=new T_(_,A,K,pt,Ut,Ot,gt),yt=new Q_(_,It),Tt=new R_,me=new k_(pt),ee=new Zg(_,A,K,ut,it,f,l),Nt=new B_(_,it,Ut),F=new tM(U,Pt,Ut,ut),kt=new Qg(U,pt,Pt),ge=new lv(U,pt,Pt),Pt.programs=zt.programs,_.capabilities=Ut,_.extensions=pt,_.properties=It,_.renderLists=Tt,_.shadowMap=Nt,_.state=ut,_.info=Pt}rt();const Y=new Z_(_,U);this.xr=Y,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const P=pt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=pt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(z,H,!1))},this.getSize=function(P){return P.set(z,H)},this.setSize=function(P,V,J=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=P,H=V,e.width=Math.floor(P*B),e.height=Math.floor(V*B),J===!0&&(e.style.width=P+"px",e.style.height=V+"px"),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(z*B,H*B).floor()},this.setDrawingBufferSize=function(P,V,J){z=P,H=V,B=J,e.width=Math.floor(P*J),e.height=Math.floor(V*J),this.setViewport(0,0,P,V)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(ct)},this.setViewport=function(P,V,J,Q){P.isVector4?ct.set(P.x,P.y,P.z,P.w):ct.set(P,V,J,Q),ut.viewport(C.copy(ct).multiplyScalar(B).round())},this.getScissor=function(P){return P.copy(Ft)},this.setScissor=function(P,V,J,Q){P.isVector4?Ft.set(P.x,P.y,P.z,P.w):Ft.set(P,V,J,Q),ut.scissor(E.copy(Ft).multiplyScalar(B).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(P){ut.setScissorTest(se=P)},this.setOpaqueSort=function(P){dt=P},this.setTransparentSort=function(P){vt=P},this.getClearColor=function(P){return P.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(P=!0,V=!0,J=!0){let Q=0;if(P){let W=!1;if(R!==null){const _t=R.texture.format;W=_t===Bc||_t===zc||_t===Fc}if(W){const _t=R.texture.type,Et=_t===Ri||_t===xs||_t===Zo||_t===po||_t===kc||_t===Nc,Ht=ee.getClearColor(),Bt=ee.getClearAlpha(),Zt=Ht.r,ne=Ht.g,Dt=Ht.b;Et?(m[0]=Zt,m[1]=ne,m[2]=Dt,m[3]=Bt,U.clearBufferuiv(U.COLOR,0,m)):(v[0]=Zt,v[1]=ne,v[2]=Dt,v[3]=Bt,U.clearBufferiv(U.COLOR,0,v))}else Q|=U.COLOR_BUFFER_BIT}V&&(Q|=U.DEPTH_BUFFER_BIT),J&&(Q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Tt.dispose(),me.dispose(),It.dispose(),A.dispose(),K.dispose(),it.dispose(),Ot.dispose(),F.dispose(),zt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ar),Y.removeEventListener("sessionend",Ta),Fn.stop()};function et(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const P=Pt.autoReset,V=Nt.enabled,J=Nt.autoUpdate,Q=Nt.needsUpdate,W=Nt.type;rt(),Pt.autoReset=P,Nt.enabled=V,Nt.autoUpdate=J,Nt.needsUpdate=Q,Nt.type=W}function wt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function le(P){const V=P.target;V.removeEventListener("dispose",le),Ue(V)}function Ue(P){Ke(P),It.remove(P)}function Ke(P){const V=It.get(P).programs;V!==void 0&&(V.forEach(function(J){zt.releaseProgram(J)}),P.isShaderMaterial&&zt.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,J,Q,W,_t){V===null&&(V=Xt);const Et=W.isMesh&&W.matrixWorld.determinant()<0,Ht=Eo(P,V,J,Q,W);ut.setMaterial(Q,Et);let Bt=J.index,Zt=1;if(Q.wireframe===!0){if(Bt=at.getWireframeAttribute(J),Bt===void 0)return;Zt=2}const ne=J.drawRange,Dt=J.attributes.position;let Qt=ne.start*Zt,Le=(ne.start+ne.count)*Zt;_t!==null&&(Qt=Math.max(Qt,_t.start*Zt),Le=Math.min(Le,(_t.start+_t.count)*Zt)),Bt!==null?(Qt=Math.max(Qt,0),Le=Math.min(Le,Bt.count)):Dt!=null&&(Qt=Math.max(Qt,0),Le=Math.min(Le,Dt.count));const X=Le-Qt;if(X<0||X===1/0)return;Ot.setup(W,Q,Ht,J,Bt);let he,we=kt;if(Bt!==null&&(he=nt.get(Bt),we=ge,we.setIndex(he)),W.isMesh)Q.wireframe===!0?(ut.setLineWidth(Q.wireframeLinewidth*mt()),we.setMode(U.LINES)):we.setMode(U.TRIANGLES);else if(W.isLine){let Gt=Q.linewidth;Gt===void 0&&(Gt=1),ut.setLineWidth(Gt*mt()),W.isLineSegments?we.setMode(U.LINES):W.isLineLoop?we.setMode(U.LINE_LOOP):we.setMode(U.LINE_STRIP)}else W.isPoints?we.setMode(U.POINTS):W.isSprite&&we.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)we.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))we.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Gt=W._multiDrawStarts,_n=W._multiDrawCounts,ve=W._multiDrawCount,Mn=Bt?nt.get(Bt).bytesPerElement:1,fi=It.get(Q).currentProgram.getUniforms();for(let an=0;an<ve;an++)fi.setValue(U,"_gl_DrawID",an),we.render(Gt[an]/Mn,_n[an])}else if(W.isInstancedMesh)we.renderInstances(Qt,X,W.count);else if(J.isInstancedBufferGeometry){const Gt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,_n=Math.min(J.instanceCount,Gt);we.renderInstances(Qt,X,_n)}else we.render(Qt,X)};function be(P,V,J){P.transparent===!0&&P.side===Fe&&P.forceSinglePass===!1?(P.side=gn,P.needsUpdate=!0,es(P,V,J),P.side=Zi,P.needsUpdate=!0,es(P,V,J),P.side=Fe):es(P,V,J)}this.compile=function(P,V,J=null){J===null&&(J=P),u=me.get(J),u.init(V),x.push(u),J.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),P!==J&&P.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),u.setupLights();const Q=new Set;return P.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const _t=W.material;if(_t)if(Array.isArray(_t))for(let Et=0;Et<_t.length;Et++){const Ht=_t[Et];be(Ht,J,W),Q.add(Ht)}else be(_t,J,W),Q.add(_t)}),x.pop(),u=null,Q},this.compileAsync=function(P,V,J=null){const Q=this.compile(P,V,J);return new Promise(W=>{function _t(){if(Q.forEach(function(Et){It.get(Et).currentProgram.isReady()&&Q.delete(Et)}),Q.size===0){W(P);return}setTimeout(_t,10)}pt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let vn=null;function Te(P){vn&&vn(P)}function ar(){Fn.stop()}function Ta(){Fn.start()}const Fn=new ef;Fn.setAnimationLoop(Te),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(P){vn=P,Y.setAnimationLoop(P),P===null?Fn.stop():Fn.start()},Y.addEventListener("sessionstart",ar),Y.addEventListener("sessionend",Ta),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(V),V=Y.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,V,R),u=me.get(P,x.length),u.init(V),x.push(u),Lt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),tt.setFromProjectionMatrix(Lt),Rt=this.localClippingEnabled,ft=gt.init(this.clippingPlanes,Rt),g=Tt.get(P,M.length),g.init(),M.push(g),Y.enabled===!0&&Y.isPresenting===!0){const _t=_.xr.getDepthSensingMesh();_t!==null&&yo(_t,V,-1/0,_.sortObjects)}yo(P,V,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(dt,vt),st=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,st&&ee.addToRenderList(g,P),this.info.render.frame++,ft===!0&&gt.beginShadows();const J=u.state.shadowsArray;Nt.render(J,P,V),ft===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=g.opaque,W=g.transmissive;if(u.setupLights(),V.isArrayCamera){const _t=V.cameras;if(W.length>0)for(let Et=0,Ht=_t.length;Et<Ht;Et++){const Bt=_t[Et];wo(Q,W,P,Bt)}st&&ee.render(P);for(let Et=0,Ht=_t.length;Et<Ht;Et++){const Bt=_t[Et];bo(g,P,Bt,Bt.viewport)}}else W.length>0&&wo(Q,W,P,V),st&&ee.render(P),bo(g,P,V);R!==null&&(L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(_,P,V),Ot.resetDefaultState(),b=-1,y=null,x.pop(),x.length>0?(u=x[x.length-1],ft===!0&&gt.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function yo(P,V,J,Q){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)J=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)u.pushLight(P),P.castShadow&&u.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||tt.intersectsSprite(P)){Q&&$t.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Lt);const Et=it.update(P),Ht=P.material;Ht.visible&&g.push(P,Et,Ht,J,$t.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||tt.intersectsObject(P))){const Et=it.update(P),Ht=P.material;if(Q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),$t.copy(P.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),$t.copy(Et.boundingSphere.center)),$t.applyMatrix4(P.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ht)){const Bt=Et.groups;for(let Zt=0,ne=Bt.length;Zt<ne;Zt++){const Dt=Bt[Zt],Qt=Ht[Dt.materialIndex];Qt&&Qt.visible&&g.push(P,Et,Qt,J,$t.z,Dt)}}else Ht.visible&&g.push(P,Et,Ht,J,$t.z,null)}}const _t=P.children;for(let Et=0,Ht=_t.length;Et<Ht;Et++)yo(_t[Et],V,J,Q)}function bo(P,V,J,Q){const W=P.opaque,_t=P.transmissive,Et=P.transparent;u.setupLightsView(J),ft===!0&&gt.setGlobalState(_.clippingPlanes,J),Q&&ut.viewport(C.copy(Q)),W.length>0&&ts(W,V,J),_t.length>0&&ts(_t,V,J),Et.length>0&&ts(Et,V,J),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function wo(P,V,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[Q.id]===void 0&&(u.state.transmissionRenderTarget[Q.id]=new ys(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?sr:Ri,minFilter:vs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));const _t=u.state.transmissionRenderTarget[Q.id],Et=Q.viewport||C;_t.setSize(Et.z,Et.w);const Ht=_.getRenderTarget();_.setRenderTarget(_t),_.getClearColor(O),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),st&&ee.render(J);const Bt=_.toneMapping;_.toneMapping=Ki;const Zt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),u.setupLightsView(Q),ft===!0&&gt.setGlobalState(_.clippingPlanes,Q),ts(P,J,Q),L.updateMultisampleRenderTarget(_t),L.updateRenderTargetMipmap(_t),pt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Dt=0,Qt=V.length;Dt<Qt;Dt++){const Le=V[Dt],X=Le.object,he=Le.geometry,we=Le.material,Gt=Le.group;if(we.side===Fe&&X.layers.test(Q.layers)){const _n=we.side;we.side=gn,we.needsUpdate=!0,So(X,J,Q,he,we,Gt),we.side=_n,we.needsUpdate=!0,ne=!0}}ne===!0&&(L.updateMultisampleRenderTarget(_t),L.updateRenderTargetMipmap(_t))}_.setRenderTarget(Ht),_.setClearColor(O,$),Zt!==void 0&&(Q.viewport=Zt),_.toneMapping=Bt}function ts(P,V,J){const Q=V.isScene===!0?V.overrideMaterial:null;for(let W=0,_t=P.length;W<_t;W++){const Et=P[W],Ht=Et.object,Bt=Et.geometry,Zt=Q===null?Et.material:Q,ne=Et.group;Ht.layers.test(J.layers)&&So(Ht,V,J,Bt,Zt,ne)}}function So(P,V,J,Q,W,_t){P.onBeforeRender(_,V,J,Q,W,_t),P.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),W.onBeforeRender(_,V,J,Q,P,_t),W.transparent===!0&&W.side===Fe&&W.forceSinglePass===!1?(W.side=gn,W.needsUpdate=!0,_.renderBufferDirect(J,V,Q,W,P,_t),W.side=Zi,W.needsUpdate=!0,_.renderBufferDirect(J,V,Q,W,P,_t),W.side=Fe):_.renderBufferDirect(J,V,Q,W,P,_t),P.onAfterRender(_,V,J,Q,W,_t)}function es(P,V,J){V.isScene!==!0&&(V=Xt);const Q=It.get(P),W=u.state.lights,_t=u.state.shadowsArray,Et=W.state.version,Ht=zt.getParameters(P,W.state,_t,V,J),Bt=zt.getProgramCacheKey(Ht);let Zt=Q.programs;Q.environment=P.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(P.isMeshStandardMaterial?K:A).get(P.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,Zt===void 0&&(P.addEventListener("dispose",le),Zt=new Map,Q.programs=Zt);let ne=Zt.get(Bt);if(ne!==void 0){if(Q.currentProgram===ne&&Q.lightsStateVersion===Et)return As(P,Ht),ne}else Ht.uniforms=zt.getUniforms(P),P.onBeforeCompile(Ht,_),ne=zt.acquireProgram(Ht,Bt),Zt.set(Bt,ne),Q.uniforms=Ht.uniforms;const Dt=Q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Dt.clippingPlanes=gt.uniform),As(P,Ht),Q.needsLights=cr(P),Q.lightsStateVersion=Et,Q.needsLights&&(Dt.ambientLightColor.value=W.state.ambient,Dt.lightProbe.value=W.state.probe,Dt.directionalLights.value=W.state.directional,Dt.directionalLightShadows.value=W.state.directionalShadow,Dt.spotLights.value=W.state.spot,Dt.spotLightShadows.value=W.state.spotShadow,Dt.rectAreaLights.value=W.state.rectArea,Dt.ltc_1.value=W.state.rectAreaLTC1,Dt.ltc_2.value=W.state.rectAreaLTC2,Dt.pointLights.value=W.state.point,Dt.pointLightShadows.value=W.state.pointShadow,Dt.hemisphereLights.value=W.state.hemi,Dt.directionalShadowMap.value=W.state.directionalShadowMap,Dt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Dt.spotShadowMap.value=W.state.spotShadowMap,Dt.spotLightMatrix.value=W.state.spotLightMatrix,Dt.spotLightMap.value=W.state.spotLightMap,Dt.pointShadowMap.value=W.state.pointShadowMap,Dt.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=ne,Q.uniformsList=null,ne}function lr(P){if(P.uniformsList===null){const V=P.currentProgram.getUniforms();P.uniformsList=ha.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function As(P,V){const J=It.get(P);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Eo(P,V,J,Q,W){V.isScene!==!0&&(V=Xt),L.resetTextureUnits();const _t=V.fog,Et=Q.isMeshStandardMaterial?V.environment:null,Ht=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Mo,Bt=(Q.isMeshStandardMaterial?K:A).get(Q.envMap||Et),Zt=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ne=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Dt=!!J.morphAttributes.position,Qt=!!J.morphAttributes.normal,Le=!!J.morphAttributes.color;let X=Ki;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(X=_.toneMapping);const he=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,we=he!==void 0?he.length:0,Gt=It.get(Q),_n=u.state.lights;if(ft===!0&&(Rt===!0||P!==y)){const dn=P===y&&Q.id===b;gt.setState(Q,P,dn)}let ve=!1;Q.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==_n.state.version||Gt.outputColorSpace!==Ht||W.isBatchedMesh&&Gt.batching===!1||!W.isBatchedMesh&&Gt.batching===!0||W.isBatchedMesh&&Gt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Gt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Gt.instancing===!1||!W.isInstancedMesh&&Gt.instancing===!0||W.isSkinnedMesh&&Gt.skinning===!1||!W.isSkinnedMesh&&Gt.skinning===!0||W.isInstancedMesh&&Gt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Gt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Gt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Gt.instancingMorph===!1&&W.morphTexture!==null||Gt.envMap!==Bt||Q.fog===!0&&Gt.fog!==_t||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==gt.numPlanes||Gt.numIntersection!==gt.numIntersection)||Gt.vertexAlphas!==Zt||Gt.vertexTangents!==ne||Gt.morphTargets!==Dt||Gt.morphNormals!==Qt||Gt.morphColors!==Le||Gt.toneMapping!==X||Gt.morphTargetsCount!==we)&&(ve=!0):(ve=!0,Gt.__version=Q.version);let Mn=Gt.currentProgram;ve===!0&&(Mn=es(Q,V,W));let fi=!1,an=!1,zn=!1;const Me=Mn.getUniforms(),ke=Gt.uniforms;if(ut.useProgram(Mn.program)&&(fi=!0,an=!0,zn=!0),Q.id!==b&&(b=Q.id,an=!0),fi||y!==P){ut.buffers.depth.getReversed()?(ht.copy(P.projectionMatrix),Xp(ht),qp(ht),Me.setValue(U,"projectionMatrix",ht)):Me.setValue(U,"projectionMatrix",P.projectionMatrix),Me.setValue(U,"viewMatrix",P.matrixWorldInverse);const Bn=Me.map.cameraPosition;Bn!==void 0&&Bn.setValue(U,Kt.setFromMatrixPosition(P.matrixWorld)),Ut.logarithmicDepthBuffer&&Me.setValue(U,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Me.setValue(U,"isOrthographic",P.isOrthographicCamera===!0),y!==P&&(y=P,an=!0,zn=!0)}if(W.isSkinnedMesh){Me.setOptional(U,W,"bindMatrix"),Me.setOptional(U,W,"bindMatrixInverse");const dn=W.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Me.setValue(U,"boneTexture",dn.boneTexture,L))}W.isBatchedMesh&&(Me.setOptional(U,W,"batchingTexture"),Me.setValue(U,"batchingTexture",W._matricesTexture,L),Me.setOptional(U,W,"batchingIdTexture"),Me.setValue(U,"batchingIdTexture",W._indirectTexture,L),Me.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&Me.setValue(U,"batchingColorTexture",W._colorsTexture,L));const pi=J.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&re.update(W,J,Mn),(an||Gt.receiveShadow!==W.receiveShadow)&&(Gt.receiveShadow=W.receiveShadow,Me.setValue(U,"receiveShadow",W.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ke.envMap.value=Bt,ke.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&V.environment!==null&&(ke.envMapIntensity.value=V.environmentIntensity),an&&(Me.setValue(U,"toneMappingExposure",_.toneMappingExposure),Gt.needsLights&&To(ke,zn),_t&&Q.fog===!0&&yt.refreshFogUniforms(ke,_t),yt.refreshMaterialUniforms(ke,Q,B,H,u.state.transmissionRenderTarget[P.id]),ha.upload(U,lr(Gt),ke,L)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ha.upload(U,lr(Gt),ke,L),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Me.setValue(U,"center",W.center),Me.setValue(U,"modelViewMatrix",W.modelViewMatrix),Me.setValue(U,"normalMatrix",W.normalMatrix),Me.setValue(U,"modelMatrix",W.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const dn=Q.uniformsGroups;for(let Bn=0,sn=dn.length;Bn<sn;Bn++){const Oe=dn[Bn];F.update(Oe,Mn),F.bind(Oe,Mn)}}return Mn}function To(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function cr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,V,J){It.get(P.texture).__webglTexture=V,It.get(P.depthTexture).__webglTexture=J;const Q=It.get(P);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,V){const J=It.get(P);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,J=0){R=P,S=V,w=J;let Q=!0,W=null,_t=!1,Et=!1;if(P){const Bt=It.get(P);if(Bt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(U.FRAMEBUFFER,null),Q=!1;else if(Bt.__webglFramebuffer===void 0)L.setupRenderTarget(P);else if(Bt.__hasExternalTextures)L.rebindTextures(P,It.get(P.texture).__webglTexture,It.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Dt=P.depthTexture;if(Bt.__boundDepthTexture!==Dt){if(Dt!==null&&It.has(Dt)&&(P.width!==Dt.image.width||P.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(P)}}const Zt=P.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Et=!0);const ne=It.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ne[V])?W=ne[V][J]:W=ne[V],_t=!0):P.samples>0&&L.useMultisampledRTT(P)===!1?W=It.get(P).__webglMultisampledFramebuffer:Array.isArray(ne)?W=ne[J]:W=ne,C.copy(P.viewport),E.copy(P.scissor),N=P.scissorTest}else C.copy(ct).multiplyScalar(B).floor(),E.copy(Ft).multiplyScalar(B).floor(),N=se;if(ut.bindFramebuffer(U.FRAMEBUFFER,W)&&Q&&ut.drawBuffers(P,W),ut.viewport(C),ut.scissor(E),ut.setScissorTest(N),_t){const Bt=It.get(P.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Bt.__webglTexture,J)}else if(Et){const Bt=It.get(P.texture),Zt=V||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bt.__webglTexture,J||0,Zt)}b=-1},this.readRenderTargetPixels=function(P,V,J,Q,W,_t,Et){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=It.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Et!==void 0&&(Ht=Ht[Et]),Ht){ut.bindFramebuffer(U.FRAMEBUFFER,Ht);try{const Bt=P.texture,Zt=Bt.format,ne=Bt.type;if(!Ut.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-Q&&J>=0&&J<=P.height-W&&U.readPixels(V,J,Q,W,ce.convert(Zt),ce.convert(ne),_t)}finally{const Bt=R!==null?It.get(R).__webglFramebuffer:null;ut.bindFramebuffer(U.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(P,V,J,Q,W,_t,Et){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=It.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Et!==void 0&&(Ht=Ht[Et]),Ht){const Bt=P.texture,Zt=Bt.format,ne=Bt.type;if(!Ut.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=P.width-Q&&J>=0&&J<=P.height-W){ut.bindFramebuffer(U.FRAMEBUFFER,Ht);const Dt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Dt),U.bufferData(U.PIXEL_PACK_BUFFER,_t.byteLength,U.STREAM_READ),U.readPixels(V,J,Q,W,ce.convert(Zt),ce.convert(ne),0);const Qt=R!==null?It.get(R).__webglFramebuffer:null;ut.bindFramebuffer(U.FRAMEBUFFER,Qt);const Le=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await $p(U,Le,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Dt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,_t),U.deleteBuffer(Dt),U.deleteSync(Le),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,V=null,J=0){P.isTexture!==!0&&(Vo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,P=arguments[1]);const Q=Math.pow(2,-J),W=Math.floor(P.image.width*Q),_t=Math.floor(P.image.height*Q),Et=V!==null?V.x:0,Ht=V!==null?V.y:0;L.setTexture2D(P,0),U.copyTexSubImage2D(U.TEXTURE_2D,J,0,0,Et,Ht,W,_t),ut.unbindTexture()},this.copyTextureToTexture=function(P,V,J=null,Q=null,W=0){P.isTexture!==!0&&(Vo("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,P=arguments[1],V=arguments[2],W=arguments[3]||0,J=null);let _t,Et,Ht,Bt,Zt,ne,Dt,Qt,Le;const X=P.isCompressedTexture?P.mipmaps[W]:P.image;J!==null?(_t=J.max.x-J.min.x,Et=J.max.y-J.min.y,Ht=J.isBox3?J.max.z-J.min.z:1,Bt=J.min.x,Zt=J.min.y,ne=J.isBox3?J.min.z:0):(_t=X.width,Et=X.height,Ht=X.depth||1,Bt=0,Zt=0,ne=0),Q!==null?(Dt=Q.x,Qt=Q.y,Le=Q.z):(Dt=0,Qt=0,Le=0);const he=ce.convert(V.format),we=ce.convert(V.type);let Gt;V.isData3DTexture?(L.setTexture3D(V,0),Gt=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(L.setTexture2DArray(V,0),Gt=U.TEXTURE_2D_ARRAY):(L.setTexture2D(V,0),Gt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const _n=U.getParameter(U.UNPACK_ROW_LENGTH),ve=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Mn=U.getParameter(U.UNPACK_SKIP_PIXELS),fi=U.getParameter(U.UNPACK_SKIP_ROWS),an=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,X.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,X.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Bt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Zt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ne);const zn=P.isDataArrayTexture||P.isData3DTexture,Me=V.isDataArrayTexture||V.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const ke=It.get(P),pi=It.get(V),dn=It.get(ke.__renderTarget),Bn=It.get(pi.__renderTarget);ut.bindFramebuffer(U.READ_FRAMEBUFFER,dn.__webglFramebuffer),ut.bindFramebuffer(U.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let sn=0;sn<Ht;sn++)zn&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,It.get(P).__webglTexture,W,ne+sn),P.isDepthTexture?(Me&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,It.get(V).__webglTexture,W,Le+sn),U.blitFramebuffer(Bt,Zt,_t,Et,Dt,Qt,_t,Et,U.DEPTH_BUFFER_BIT,U.NEAREST)):Me?U.copyTexSubImage3D(Gt,W,Dt,Qt,Le+sn,Bt,Zt,_t,Et):U.copyTexSubImage2D(Gt,W,Dt,Qt,Le+sn,Bt,Zt,_t,Et);ut.bindFramebuffer(U.READ_FRAMEBUFFER,null),ut.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Me?P.isDataTexture||P.isData3DTexture?U.texSubImage3D(Gt,W,Dt,Qt,Le,_t,Et,Ht,he,we,X.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(Gt,W,Dt,Qt,Le,_t,Et,Ht,he,X.data):U.texSubImage3D(Gt,W,Dt,Qt,Le,_t,Et,Ht,he,we,X):P.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,W,Dt,Qt,_t,Et,he,we,X.data):P.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,W,Dt,Qt,X.width,X.height,he,X.data):U.texSubImage2D(U.TEXTURE_2D,W,Dt,Qt,_t,Et,he,we,X);U.pixelStorei(U.UNPACK_ROW_LENGTH,_n),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ve),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mn),U.pixelStorei(U.UNPACK_SKIP_ROWS,fi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,an),W===0&&V.generateMipmaps&&U.generateMipmap(Gt),ut.unbindTexture()},this.copyTextureToTexture3D=function(P,V,J=null,Q=null,W=0){return P.isTexture!==!0&&(Vo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,P=arguments[2],V=arguments[3],W=arguments[4]||0),Vo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,V,J,Q,W)},this.initRenderTarget=function(P){It.get(P).__webglFramebuffer===void 0&&L.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),ut.unbindTexture()},this.resetState=function(){S=0,w=0,R=null,ut.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}}class $c{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new $c(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xc extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class eM{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xc,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,o=this.stride;i<o;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new k;class ma{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Zn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),o=Pe(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ma(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qc extends Qi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Vs;const Do=new k,Ws=new k,$s=new k,Xs=new ot,Io=new ot,hf=new _e,Dr=new k,Uo=new k,Ir=new k,hu=new ot,hl=new ot,uu=new ot;class uf extends $e{constructor(t=new qc){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new eM(e,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new ma(n,3,0,!1)),Vs.setAttribute("uv",new ma(n,2,3,!1))}this.geometry=Vs,this.material=t,this.center=new ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),hf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-$s.z);const n=this.material.rotation;let i,o;n!==0&&(o=Math.cos(n),i=Math.sin(n));const r=this.center;Ur(Dr.set(-.5,-.5,0),$s,r,Ws,i,o),Ur(Uo.set(.5,-.5,0),$s,r,Ws,i,o),Ur(Ir.set(.5,.5,0),$s,r,Ws,i,o),hu.set(0,0),hl.set(1,0),uu.set(1,1);let a=t.ray.intersectTriangle(Dr,Uo,Ir,!1,Do);if(a===null&&(Ur(Uo.set(-.5,.5,0),$s,r,Ws,i,o),hl.set(0,1),a=t.ray.intersectTriangle(Dr,Ir,Uo,!1,Do),a===null))return;const l=t.ray.origin.distanceTo(Do);l<t.near||l>t.far||e.push({distance:l,point:Do.clone(),uv:Un.getInterpolation(Do,Dr,Uo,Ir,hu,hl,uu,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ur(s,t,e,n,i,o){Xs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Io.x=o*Xs.x-i*Xs.y,Io.y=i*Xs.x+o*Xs.y):Io.copy(Xs),s.copy(t),s.x+=Io.x,s.y+=Io.y,s.applyMatrix4(hf)}class nM extends un{constructor(t=null,e=1,n=1,i,o,r,a,l,c=Cn,h=Cn,d,p){super(null,r,a,l,c,h,i,o,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class du extends Ye{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qs=new _e,fu=new _e,kr=[],pu=new Ss,iM=new _e,ko=new q,No=new Es;class kn extends q{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new du(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,iM)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ss),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),pu.copy(t.boundingBox).applyMatrix4(qs),this.boundingBox.union(pu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),No.copy(t.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(No)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ko.geometry=this.geometry,ko.material=this.material,ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(n),t.ray.intersectsSphere(No)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,qs),fu.multiplyMatrices(n,qs),ko.matrixWorld=fu,ko.raycast(t,kr);for(let r=0,a=kr.length;r<a;r++){const l=kr[r];l.instanceId=o,l.object=this,e.push(l)}kr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new du(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new nM(new Float32Array(i*this.count),i,this.count,Oc,si));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class df extends Qi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ga=new k,va=new k,mu=new _e,Oo=new or,Nr=new Es,ul=new k,gu=new k;class sM extends $e{constructor(t=new xe,e=new df){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)ga.fromBufferAttribute(e,i-1),va.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ga.distanceTo(va);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),Nr.radius+=o,t.ray.intersectsSphere(Nr)===!1)return;mu.copy(i).invert(),Oo.copy(t.ray).applyMatrix4(mu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let v=f,g=m-1;v<g;v+=c){const u=h.getX(v),M=h.getX(v+1),x=Or(this,t,Oo,l,u,M);x&&e.push(x)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(f),u=Or(this,t,Oo,l,v,g);u&&e.push(u)}}else{const f=Math.max(0,r.start),m=Math.min(p.count,r.start+r.count);for(let v=f,g=m-1;v<g;v+=c){const u=Or(this,t,Oo,l,v,v+1);u&&e.push(u)}if(this.isLineLoop){const v=Or(this,t,Oo,l,m-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Or(s,t,e,n,i,o){const r=s.geometry.attributes.position;if(ga.fromBufferAttribute(r,i),va.fromBufferAttribute(r,o),e.distanceSqToSegment(ga,va,ul,gu)>n)return;ul.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ul);if(!(l<t.near||l>t.far))return{distance:l,point:gu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class ff extends Qi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vu=new _e,wc=new or,Fr=new Es,zr=new k;class oM extends $e{constructor(t=new xe,e=new ff){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(i),Fr.radius+=o,t.ray.intersectsSphere(Fr)===!1)return;vu.copy(i).invert(),wc.copy(t.ray).applyMatrix4(vu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const p=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let m=p,v=f;m<v;m++){const g=c.getX(m);zr.fromBufferAttribute(d,g),_u(zr,g,l,i,t,e,this)}}else{const p=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let m=p,v=f;m<v;m++)zr.fromBufferAttribute(d,m),_u(zr,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function _u(s,t,e,n,i,o,r){const a=wc.distanceSqToPoint(s);if(a<e){const l=new k;wc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Pn extends un{constructor(t,e,n,i,o,r,a,l,c){super(t,e,n,i,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(o-1);const h=n[i],p=n[i+1]-h,f=(r-h)/p;return(i+f)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),l=e||(r.isVector2?new ot:new k);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new k,i=[],o=[],r=[],a=new k,l=new _e;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new k)}o[0]=new k,r[0]=new k;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Je(i[f-1].dot(i[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,m))}r[f].crossVectors(i[f],o[f])}if(e===!0){let f=Math.acos(Je(o[0].dot(o[t]),-1,1));f/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let m=1;m<=t;m++)o[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),r[m].crossVectors(i[m],o[m])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Yc extends di{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ot){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*h-f*d+this.aX,c=p*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class rM extends Yc{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function jc(){let s=0,t=0,e=0,n=0;function i(o,r,a,l){s=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){i(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,d){let p=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+d)+(l-a)/d;p*=h,f*=h,i(r,a,p,f)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const Br=new k,dl=new jc,fl=new jc,pl=new jc;class aM extends di{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new k){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%o]:(Br.subVectors(i[0],i[1]).add(i[0]),c=Br);const d=i[a%o],p=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(Br.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=Br),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(p),f),g=Math.pow(p.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),dl.initNonuniformCatmullRom(c.x,d.x,p.x,h.x,m,v,g),fl.initNonuniformCatmullRom(c.y,d.y,p.y,h.y,m,v,g),pl.initNonuniformCatmullRom(c.z,d.z,p.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(dl.initCatmullRom(c.x,d.x,p.x,h.x,this.tension),fl.initCatmullRom(c.y,d.y,p.y,h.y,this.tension),pl.initCatmullRom(c.z,d.z,p.z,h.z,this.tension));return n.set(dl.calc(l),fl.calc(l),pl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new k().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Mu(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*s+e}function lM(s,t){const e=1-s;return e*e*t}function cM(s,t){return 2*(1-s)*s*t}function hM(s,t){return s*s*t}function Yo(s,t,e,n){return lM(s,t)+cM(s,e)+hM(s,n)}function uM(s,t){const e=1-s;return e*e*e*t}function dM(s,t){const e=1-s;return 3*e*e*s*t}function fM(s,t){return 3*(1-s)*s*s*t}function pM(s,t){return s*s*s*t}function jo(s,t,e,n,i){return uM(s,t)+dM(s,e)+fM(s,n)+pM(s,i)}class pf extends di{constructor(t=new ot,e=new ot,n=new ot,i=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ot){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(jo(t,i.x,o.x,r.x,a.x),jo(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mM extends di{constructor(t=new k,e=new k,n=new k,i=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new k){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(jo(t,i.x,o.x,r.x,a.x),jo(t,i.y,o.y,r.y,a.y),jo(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mf extends di{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gM extends di{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gf extends di{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Yo(t,i.x,o.x,r.x),Yo(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vM extends di{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Yo(t,i.x,o.x,r.x),Yo(t,i.y,o.y,r.y),Yo(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vf extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return n.set(Mu(a,l.x,c.x,h.x,d.x),Mu(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ot().fromArray(i))}return this}}var Sc=Object.freeze({__proto__:null,ArcCurve:rM,CatmullRomCurve3:aM,CubicBezierCurve:pf,CubicBezierCurve3:mM,EllipseCurve:Yc,LineCurve:mf,LineCurve3:gM,QuadraticBezierCurve:gf,QuadraticBezierCurve3:vM,SplineCurve:vf});class _M extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Sc[i.type]().fromJSON(i))}return this}}class Ec extends _M{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mf(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new gf(this.currentPoint.clone(),new ot(t,e),new ot(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new pf(this.currentPoint.clone(),new ot(t,e),new ot(n,i),new ot(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new vf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,o,r,a,l),this}absellipse(t,e,n,i,o,r,a,l){const c=new Yc(t,e,n,i,o,r,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class wa extends xe{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Je(i,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,d=new k,p=new ot,f=new k,m=new k,v=new k;let g=0,u=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,u=t[M+1].y-t[M].y,f.x=u*1,f.y=-g,f.z=u*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[M+1].x-t[M].x,u=t[M+1].y-t[M].y,f.x=u*1,f.y=-g,f.z=u*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let M=0;M<=e;M++){const x=n+M*h*i,_=Math.sin(x),T=Math.cos(x);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*_,d.y=t[S].y,d.z=t[S].x*T,r.push(d.x,d.y,d.z),p.x=M/e,p.y=S/(t.length-1),a.push(p.x,p.y);const w=l[3*S+0]*_,R=l[3*S+1],b=l[3*S+0]*T;c.push(w,R,b)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const _=x+M*t.length,T=_,S=_+t.length,w=_+t.length+1,R=_+1;o.push(T,S,R),o.push(w,R,S)}this.setIndex(o),this.setAttribute("position",new te(r,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.points,t.segments,t.phiStart,t.phiLength)}}class Kc extends wa{constructor(t=1,e=1,n=4,i=8){const o=new Ec;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Kc(t.radius,t.length,t.capSegments,t.radialSegments)}}class Zc extends xe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new k,h=new ot;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[p]/t+1)/2,h.y=(r[p+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qt extends xe{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const h=[],d=[],p=[],f=[];let m=0;const v=[],g=n/2;let u=0;M(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(p,3)),this.setAttribute("uv",new te(f,2));function M(){const _=new k,T=new k;let S=0;const w=(e-t)/n;for(let R=0;R<=o;R++){const b=[],y=R/o,C=y*(e-t)+t;for(let E=0;E<=i;E++){const N=E/i,O=N*l+a,$=Math.sin(O),z=Math.cos(O);T.x=C*$,T.y=-y*n+g,T.z=C*z,d.push(T.x,T.y,T.z),_.set($,w,z).normalize(),p.push(_.x,_.y,_.z),f.push(N,1-y),b.push(m++)}v.push(b)}for(let R=0;R<i;R++)for(let b=0;b<o;b++){const y=v[b][R],C=v[b+1][R],E=v[b+1][R+1],N=v[b][R+1];(t>0||b!==0)&&(h.push(y,C,N),S+=3),(e>0||b!==o-1)&&(h.push(C,E,N),S+=3)}c.addGroup(u,S,0),u+=S}function x(_){const T=m,S=new ot,w=new k;let R=0;const b=_===!0?t:e,y=_===!0?1:-1;for(let E=1;E<=i;E++)d.push(0,g*y,0),p.push(0,y,0),f.push(.5,.5),m++;const C=m;for(let E=0;E<=i;E++){const O=E/i*l+a,$=Math.cos(O),z=Math.sin(O);w.x=b*z,w.y=g*y,w.z=b*$,d.push(w.x,w.y,w.z),p.push(0,y,0),S.x=$*.5+.5,S.y=z*.5*y+.5,f.push(S.x,S.y),m++}for(let E=0;E<i;E++){const N=T+E,O=C+E;_===!0?h.push(O,O+1,N):h.push(O+1,O,N),R+=3}c.addGroup(u,R,_===!0?1:2),u+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class li extends qt{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new li(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sa extends xe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),c(n),h(),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(o.slice(),3)),this.setAttribute("uv",new te(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new k,_=new k,T=new k;for(let S=0;S<e.length;S+=3)f(e[S+0],x),f(e[S+1],_),f(e[S+2],T),l(x,_,T,M)}function l(M,x,_,T){const S=T+1,w=[];for(let R=0;R<=S;R++){w[R]=[];const b=M.clone().lerp(_,R/S),y=x.clone().lerp(_,R/S),C=S-R;for(let E=0;E<=C;E++)E===0&&R===S?w[R][E]=b:w[R][E]=b.clone().lerp(y,E/C)}for(let R=0;R<S;R++)for(let b=0;b<2*(S-R)-1;b++){const y=Math.floor(b/2);b%2===0?(p(w[R][y+1]),p(w[R+1][y]),p(w[R][y])):(p(w[R][y+1]),p(w[R+1][y+1]),p(w[R+1][y]))}}function c(M){const x=new k;for(let _=0;_<o.length;_+=3)x.x=o[_+0],x.y=o[_+1],x.z=o[_+2],x.normalize().multiplyScalar(M),o[_+0]=x.x,o[_+1]=x.y,o[_+2]=x.z}function h(){const M=new k;for(let x=0;x<o.length;x+=3){M.x=o[x+0],M.y=o[x+1],M.z=o[x+2];const _=g(M)/2/Math.PI+.5,T=u(M)/Math.PI+.5;r.push(_,1-T)}m(),d()}function d(){for(let M=0;M<r.length;M+=6){const x=r[M+0],_=r[M+2],T=r[M+4],S=Math.max(x,_,T),w=Math.min(x,_,T);S>.9&&w<.1&&(x<.2&&(r[M+0]+=1),_<.2&&(r[M+2]+=1),T<.2&&(r[M+4]+=1))}}function p(M){o.push(M.x,M.y,M.z)}function f(M,x){const _=M*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function m(){const M=new k,x=new k,_=new k,T=new k,S=new ot,w=new ot,R=new ot;for(let b=0,y=0;b<o.length;b+=9,y+=6){M.set(o[b+0],o[b+1],o[b+2]),x.set(o[b+3],o[b+4],o[b+5]),_.set(o[b+6],o[b+7],o[b+8]),S.set(r[y+0],r[y+1]),w.set(r[y+2],r[y+3]),R.set(r[y+4],r[y+5]),T.copy(M).add(x).add(_).divideScalar(3);const C=g(T);v(S,y+0,M,C),v(w,y+2,x,C),v(R,y+4,_,C)}}function v(M,x,_,T){T<0&&M.x===1&&(r[x]=M.x-1),_.x===0&&_.z===0&&(r[x]=T/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.vertices,t.indices,t.radius,t.details)}}class Ts extends Ec{constructor(t){super(t),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ec().fromJSON(i))}return this}}const MM={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=_f(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,d,p,f;if(n&&(o=SM(s,t,o,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let m=e;m<i;m+=e)d=s[m],p=s[m+1],d<a&&(a=d),p<l&&(l=p),d>c&&(c=d),p>h&&(h=p);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Jo(o,r,e,a,l,f,0),r}};function _f(s,t,e,n,i){let o,r;if(i===kM(s,t,e,n)>0)for(o=t;o<e;o+=n)r=xu(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=xu(o,s[o],s[o+1],r);return r&&Ea(r,r.next)&&(tr(r),r=r.next),r}function bs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ea(e,e.next)||He(e.prev,e,e.next)===0)){if(tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Jo(s,t,e,n,i,o,r){if(!s)return;!r&&o&&RM(s,n,i,o);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,o?yM(s,n,i,o):xM(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),tr(s),s=c.next,a=c.next;continue}if(s=c,s===a){r?r===1?(s=bM(bs(s),t,e),Jo(s,t,e,n,i,o,2)):r===2&&wM(s,t,e,n,i,o):Jo(bs(s),t,e,n,i,o,1);break}}}function xM(s){const t=s.prev,e=s,n=s.next;if(He(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=i<o?i<r?i:r:o<r?o:r,d=a<l?a<c?a:c:l<c?l:c,p=i>o?i>r?i:r:o>r?o:r,f=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=p&&m.y>=d&&m.y<=f&&io(i,a,o,l,r,c,m.x,m.y)&&He(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function yM(s,t,e,n){const i=s.prev,o=s,r=s.next;if(He(i,o,r)>=0)return!1;const a=i.x,l=o.x,c=r.x,h=i.y,d=o.y,p=r.y,f=a<l?a<c?a:c:l<c?l:c,m=h<d?h<p?h:p:d<p?d:p,v=a>l?a>c?a:c:l>c?l:c,g=h>d?h>p?h:p:d>p?d:p,u=Tc(f,m,t,e,n),M=Tc(v,g,t,e,n);let x=s.prevZ,_=s.nextZ;for(;x&&x.z>=u&&_&&_.z<=M;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==r&&io(a,h,l,d,c,p,x.x,x.y)&&He(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==r&&io(a,h,l,d,c,p,_.x,_.y)&&He(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=u;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==r&&io(a,h,l,d,c,p,x.x,x.y)&&He(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==r&&io(a,h,l,d,c,p,_.x,_.y)&&He(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function bM(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!Ea(i,o)&&Mf(i,n,n.next,o)&&Qo(i,o)&&Qo(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),tr(n),tr(n.next),n=s=o),n=n.next}while(n!==s);return bs(n)}function wM(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&DM(r,a)){let l=xf(r,a);r=bs(r,r.next),l=bs(l,l.next),Jo(r,t,e,n,i,o,0),Jo(l,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function SM(s,t,e,n){const i=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:s.length,c=_f(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(LM(c));for(i.sort(EM),o=0;o<i.length;o++)e=TM(i[o],e);return e}function EM(s,t){return s.x-t.x}function TM(s,t){const e=AM(s,t);if(!e)return t;const n=xf(e,s);return bs(n,n.next),bs(e,e.next)}function AM(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const p=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=o&&p>n&&(n=p,i=e.x<e.next.x?e:e.next,p===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,d;e=i;do o>=e.x&&e.x>=l&&o!==e.x&&io(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(d=Math.abs(r-e.y)/(o-e.x),Qo(e,s)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&CM(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function CM(s,t){return He(s.prev,s,t.prev)<0&&He(t.next,s,s.next)<0}function RM(s,t,e,n){let i=s;do i.z===0&&(i.z=Tc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,PM(i)}function PM(s){let t,e,n,i,o,r,a,l,c=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,c*=2}while(r>1);return s}function Tc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function LM(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function io(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function DM(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!IM(s,t)&&(Qo(s,t)&&Qo(t,s)&&UM(s,t)&&(He(s.prev,s,t.prev)||He(s,t.prev,t))||Ea(s,t)&&He(s.prev,s,s.next)>0&&He(t.prev,t,t.next)>0)}function He(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ea(s,t){return s.x===t.x&&s.y===t.y}function Mf(s,t,e,n){const i=Gr(He(s,t,e)),o=Gr(He(s,t,n)),r=Gr(He(e,n,s)),a=Gr(He(e,n,t));return!!(i!==o&&r!==a||i===0&&Hr(s,e,t)||o===0&&Hr(s,n,t)||r===0&&Hr(e,s,n)||a===0&&Hr(e,t,n))}function Hr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Gr(s){return s>0?1:s<0?-1:0}function IM(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Mf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Qo(s,t){return He(s.prev,s,s.next)<0?He(s,t,s.next)>=0&&He(s,s.prev,t)>=0:He(s,t,s.prev)<0||He(s,s.next,t)<0}function UM(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function xf(s,t){const e=new Ac(s.i,s.x,s.y),n=new Ac(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function xu(s,t,e,n){const i=new Ac(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function tr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ac(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function kM(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class ci{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return ci.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];yu(t),bu(n,t);let r=t.length;e.forEach(yu);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,bu(n,e[l]);const a=MM.triangulate(n,i);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function yu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function bu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class _o extends xe{constructor(t=new Ts([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new te(i,3)),this.setAttribute("uv",new te(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const u=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:NM;let x,_=!1,T,S,w,R;u&&(x=u.getSpacedPoints(h),_=!0,p=!1,T=u.computeFrenetFrames(h,!1),S=new k,w=new k,R=new k),p||(g=0,f=0,m=0,v=0);const b=a.extractPoints(c);let y=b.shape;const C=b.holes;if(!ci.isClockWise(y)){y=y.reverse();for(let st=0,mt=C.length;st<mt;st++){const U=C[st];ci.isClockWise(U)&&(C[st]=U.reverse())}}const N=ci.triangulateShape(y,C),O=y;for(let st=0,mt=C.length;st<mt;st++){const U=C[st];y=y.concat(U)}function $(st,mt,U){return mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(mt,U)}const z=y.length,H=N.length;function B(st,mt,U){let Wt,pt,Ut;const ut=st.x-mt.x,Pt=st.y-mt.y,It=U.x-st.x,L=U.y-st.y,A=ut*ut+Pt*Pt,K=ut*L-Pt*It;if(Math.abs(K)>Number.EPSILON){const nt=Math.sqrt(A),at=Math.sqrt(It*It+L*L),it=mt.x-Pt/nt,zt=mt.y+ut/nt,yt=U.x-L/at,Tt=U.y+It/at,me=((yt-it)*L-(Tt-zt)*It)/(ut*L-Pt*It);Wt=it+ut*me-st.x,pt=zt+Pt*me-st.y;const gt=Wt*Wt+pt*pt;if(gt<=2)return new ot(Wt,pt);Ut=Math.sqrt(gt/2)}else{let nt=!1;ut>Number.EPSILON?It>Number.EPSILON&&(nt=!0):ut<-Number.EPSILON?It<-Number.EPSILON&&(nt=!0):Math.sign(Pt)===Math.sign(L)&&(nt=!0),nt?(Wt=-Pt,pt=ut,Ut=Math.sqrt(A)):(Wt=ut,pt=Pt,Ut=Math.sqrt(A/2))}return new ot(Wt/Ut,pt/Ut)}const dt=[];for(let st=0,mt=O.length,U=mt-1,Wt=st+1;st<mt;st++,U++,Wt++)U===mt&&(U=0),Wt===mt&&(Wt=0),dt[st]=B(O[st],O[U],O[Wt]);const vt=[];let ct,Ft=dt.concat();for(let st=0,mt=C.length;st<mt;st++){const U=C[st];ct=[];for(let Wt=0,pt=U.length,Ut=pt-1,ut=Wt+1;Wt<pt;Wt++,Ut++,ut++)Ut===pt&&(Ut=0),ut===pt&&(ut=0),ct[Wt]=B(U[Wt],U[Ut],U[ut]);vt.push(ct),Ft=Ft.concat(ct)}for(let st=0;st<g;st++){const mt=st/g,U=f*Math.cos(mt*Math.PI/2),Wt=m*Math.sin(mt*Math.PI/2)+v;for(let pt=0,Ut=O.length;pt<Ut;pt++){const ut=$(O[pt],dt[pt],Wt);ht(ut.x,ut.y,-U)}for(let pt=0,Ut=C.length;pt<Ut;pt++){const ut=C[pt];ct=vt[pt];for(let Pt=0,It=ut.length;Pt<It;Pt++){const L=$(ut[Pt],ct[Pt],Wt);ht(L.x,L.y,-U)}}}const se=m+v;for(let st=0;st<z;st++){const mt=p?$(y[st],Ft[st],se):y[st];_?(w.copy(T.normals[0]).multiplyScalar(mt.x),S.copy(T.binormals[0]).multiplyScalar(mt.y),R.copy(x[0]).add(w).add(S),ht(R.x,R.y,R.z)):ht(mt.x,mt.y,0)}for(let st=1;st<=h;st++)for(let mt=0;mt<z;mt++){const U=p?$(y[mt],Ft[mt],se):y[mt];_?(w.copy(T.normals[st]).multiplyScalar(U.x),S.copy(T.binormals[st]).multiplyScalar(U.y),R.copy(x[st]).add(w).add(S),ht(R.x,R.y,R.z)):ht(U.x,U.y,d/h*st)}for(let st=g-1;st>=0;st--){const mt=st/g,U=f*Math.cos(mt*Math.PI/2),Wt=m*Math.sin(mt*Math.PI/2)+v;for(let pt=0,Ut=O.length;pt<Ut;pt++){const ut=$(O[pt],dt[pt],Wt);ht(ut.x,ut.y,d+U)}for(let pt=0,Ut=C.length;pt<Ut;pt++){const ut=C[pt];ct=vt[pt];for(let Pt=0,It=ut.length;Pt<It;Pt++){const L=$(ut[Pt],ct[Pt],Wt);_?ht(L.x,L.y+x[h-1].y,x[h-1].x+U):ht(L.x,L.y,d+U)}}}tt(),ft();function tt(){const st=i.length/3;if(p){let mt=0,U=z*mt;for(let Wt=0;Wt<H;Wt++){const pt=N[Wt];Lt(pt[2]+U,pt[1]+U,pt[0]+U)}mt=h+g*2,U=z*mt;for(let Wt=0;Wt<H;Wt++){const pt=N[Wt];Lt(pt[0]+U,pt[1]+U,pt[2]+U)}}else{for(let mt=0;mt<H;mt++){const U=N[mt];Lt(U[2],U[1],U[0])}for(let mt=0;mt<H;mt++){const U=N[mt];Lt(U[0]+z*h,U[1]+z*h,U[2]+z*h)}}n.addGroup(st,i.length/3-st,0)}function ft(){const st=i.length/3;let mt=0;Rt(O,mt),mt+=O.length;for(let U=0,Wt=C.length;U<Wt;U++){const pt=C[U];Rt(pt,mt),mt+=pt.length}n.addGroup(st,i.length/3-st,1)}function Rt(st,mt){let U=st.length;for(;--U>=0;){const Wt=U;let pt=U-1;pt<0&&(pt=st.length-1);for(let Ut=0,ut=h+g*2;Ut<ut;Ut++){const Pt=z*Ut,It=z*(Ut+1),L=mt+Wt+Pt,A=mt+pt+Pt,K=mt+pt+It,nt=mt+Wt+It;Kt(L,A,K,nt)}}}function ht(st,mt,U){l.push(st),l.push(mt),l.push(U)}function Lt(st,mt,U){$t(st),$t(mt),$t(U);const Wt=i.length/3,pt=M.generateTopUV(n,i,Wt-3,Wt-2,Wt-1);Xt(pt[0]),Xt(pt[1]),Xt(pt[2])}function Kt(st,mt,U,Wt){$t(st),$t(mt),$t(Wt),$t(mt),$t(U),$t(Wt);const pt=i.length/3,Ut=M.generateSideWallUV(n,i,pt-6,pt-3,pt-2,pt-1);Xt(Ut[0]),Xt(Ut[1]),Xt(Ut[3]),Xt(Ut[1]),Xt(Ut[2]),Xt(Ut[3])}function $t(st){i.push(l[st*3+0]),i.push(l[st*3+1]),i.push(l[st*3+2])}function Xt(st){o.push(st.x),o.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return OM(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Sc[i.type]().fromJSON(i)),new _o(n,t.options)}}const NM={generateTopUV:function(s,t,e,n,i){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new ot(o,r),new ot(a,l),new ot(c,h)]},generateSideWallUV:function(s,t,e,n,i,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],p=t[i*3],f=t[i*3+1],m=t[i*3+2],v=t[o*3],g=t[o*3+1],u=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new ot(r,1-l),new ot(c,1-d),new ot(p,1-m),new ot(v,1-u)]:[new ot(a,1-l),new ot(h,1-d),new ot(f,1-m),new ot(g,1-u)]}};function OM(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const o=s[n];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class mn extends Sa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new mn(t.radius,t.detail)}}class Jc extends Sa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jc(t.radius,t.detail)}}class rr extends xe{constructor(t=.5,e=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=t;const p=(e-t)/i,f=new k,m=new ot;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const u=o+g/n*r;f.x=d*Math.cos(u),f.y=d*Math.sin(u),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=p}for(let v=0;v<i;v++){const g=v*(n+1);for(let u=0;u<n;u++){const M=u+g,x=M,_=M+n+1,T=M+n+2,S=M+1;a.push(x,_,S),a.push(_,T,S)}}this.setIndex(a),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Qc extends xe{constructor(t=new Ts([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(i,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(r,2));function c(h){const d=i.length/3,p=h.extractPoints(e);let f=p.shape;const m=p.holes;ci.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,u=m.length;g<u;g++){const M=m[g];ci.isClockWise(M)===!0&&(m[g]=M.reverse())}const v=ci.triangulateShape(f,m);for(let g=0,u=m.length;g<u;g++){const M=m[g];f=f.concat(M)}for(let g=0,u=f.length;g<u;g++){const M=f[g];i.push(M.x,M.y,0),o.push(0,0,1),r.push(M.x,M.y)}for(let g=0,u=v.length;g<u;g++){const M=v[g],x=M[0]+d,_=M[1]+d,T=M[2]+d;n.push(x,_,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return FM(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const r=e[t.shapes[i]];n.push(r)}return new Qc(n,t.curveSegments)}}function FM(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class qe extends xe{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],d=new k,p=new k,f=[],m=[],v=[],g=[];for(let u=0;u<=n;u++){const M=[],x=u/n;let _=0;u===0&&r===0?_=.5/e:u===n&&l===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){const S=T/e;d.x=-t*Math.cos(i+S*o)*Math.sin(r+x*a),d.y=t*Math.cos(r+x*a),d.z=t*Math.sin(i+S*o)*Math.sin(r+x*a),m.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),g.push(S+_,1-x),M.push(c++)}h.push(M)}for(let u=0;u<n;u++)for(let M=0;M<e;M++){const x=h[u][M+1],_=h[u][M],T=h[u+1][M],S=h[u+1][M+1];(u!==0||r>0)&&f.push(x,_,S),(u!==n-1||l<Math.PI)&&f.push(_,T,S)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hn extends xe{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],h=new k,d=new k,p=new k;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const v=m/i*o,g=f/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(v),d.y=(t+e*Math.cos(g))*Math.sin(v),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const v=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,u=(i+1)*(f-1)+m,M=(i+1)*f+m;r.push(v,g,M),r.push(g,u,M)}this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Yt extends Qi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vd,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class th extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class yf extends th{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ml=new _e,wu=new k,Su=new k;class bf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vc,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(wu),Su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Su),e.updateMatrixWorld(),ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zM extends bf{constructor(){super(new bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=go*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||i!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=i,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class BM extends th{constructor(t,e,n=0,i=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.distance=n,this.angle=i,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new zM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class HM extends bf{constructor(){super(new nf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wf extends th{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new HM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class GM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Eu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Eu(){return performance.now()}const Tu=new _e;class Sf{constructor(t,e,n=0,i=1/0){this.ray=new or(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Gc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Tu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tu),this}intersectObject(t,e=!0,n=[]){return Cc(t,this,n,e),n.sort(Au),n}intersectObjects(t,e=!0,n=[]){for(let i=0,o=t.length;i<o;i++)Cc(t[i],this,n,e);return n.sort(Au),n}}function Au(s,t){return s.distance-t.distance}function Cc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const o=s.children;for(let r=0,a=o.length;r<a;r++)Cc(o[r],t,e,!0)}}class Cu{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Je(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class VM extends ws{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);const Ru={type:"change"},eh={type:"start"},Ef={type:"end"},Vr=new or,Pu=new Wi,WM=Math.cos(70*Ms.DEG2RAD),Ze=new k,xn=2*Math.PI,Ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gl=1e-6;class $M extends VM{constructor(t,e=null){super(t,e),this.state=Ie.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oo.ROTATE,MIDDLE:oo.DOLLY,RIGHT:oo.PAN},this.touches={ONE:eo.ROTATE,TWO:eo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new On,this._lastTargetPosition=new k,this._quat=new On().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cu,this._sphericalDelta=new Cu,this._scale=1,this._panOffset=new k,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new k,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qM.bind(this),this._onPointerDown=XM.bind(this),this._onPointerUp=YM.bind(this),this._onContextMenu=ex.bind(this),this._onMouseWheel=ZM.bind(this),this._onKeyDown=JM.bind(this),this._onTouchStart=QM.bind(this),this._onTouchMove=tx.bind(this),this._onMouseDown=jM.bind(this),this._onMouseMove=KM.bind(this),this._interceptControlDown=nx.bind(this),this._interceptControlUp=ix.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ru),this.update(),this.state=Ie.NONE}update(t=null){const e=this.object.position;Ze.copy(e).sub(this.target),Ze.applyQuaternion(this._quat),this._spherical.setFromVector3(Ze),this.autoRotate&&this.state===Ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=xn:n>Math.PI&&(n-=xn),i<-Math.PI?i+=xn:i>Math.PI&&(i-=xn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Ze.setFromSpherical(this._spherical),Ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Ze.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Vr.origin.copy(this.object.position),Vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vr.direction))<WM?this.object.lookAt(this.target):(Pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vr.intersectPlane(Pu,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gl||this._lastTargetPosition.distanceToSquared(this.target)>gl?(this.dispatchEvent(Ru),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?xn/60*this.autoRotateSpeed*t:xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ze.setFromMatrixColumn(e,0),Ze.multiplyScalar(-t),this._panOffset.add(Ze)}_panUp(t,e){this.screenSpacePanning===!0?Ze.setFromMatrixColumn(e,1):(Ze.setFromMatrixColumn(e,0),Ze.crossVectors(this.object.up,Ze)),Ze.multiplyScalar(t),this._panOffset.add(Ze)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ze.copy(i).sub(this.target);let o=Ze.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(n*n+i*i);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(i,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function XM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function qM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function YM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ef),this.state=Ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function jM(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case oo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ie.DOLLY;break;case oo.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ie.ROTATE}break;case oo.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ie.PAN}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(eh)}function KM(s){switch(this.state){case Ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ZM(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ie.NONE||(s.preventDefault(),this.dispatchEvent(eh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Ef))}function JM(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function QM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case eo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ie.TOUCH_ROTATE;break;case eo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ie.TOUCH_PAN;break;default:this.state=Ie.NONE}break;case 2:switch(this.touches.TWO){case eo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ie.TOUCH_DOLLY_PAN;break;case eo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ie.TOUCH_DOLLY_ROTATE;break;default:this.state=Ie.NONE}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(eh)}function tx(s){switch(this._trackPointer(s),this.state){case Ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ie.NONE}}function ex(s){this.enabled!==!1&&s.preventDefault()}function nx(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ix(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}async function sx(s){const t=await fetch(s);if(!t.ok)throw new Error(`Failed to load ${s}: ${t.status}`);return t.json()}class ox{constructor(t){D(this,"n");D(this,"x");D(this,"z");D(this,"s");D(this,"length");D(this,"vtx");D(this,"vtz");const e=this.n=t.length/2;this.x=new Float64Array(e),this.z=new Float64Array(e),this.s=new Float64Array(e);for(let n=0;n<e;n++)this.x[n]=t[n*2],this.z[n]=t[n*2+1],n>0&&(this.s[n]=this.s[n-1]+Math.hypot(this.x[n]-this.x[n-1],this.z[n]-this.z[n-1]));this.length=this.s[e-1],this.vtx=new Float64Array(e),this.vtz=new Float64Array(e);for(let n=0;n<e;n++){const i=Math.max(0,n-1),o=Math.min(e-1,n+1),r=this.x[o]-this.x[i],a=this.z[o]-this.z[i],l=Math.hypot(r,a)||1;this.vtx[n]=r/l,this.vtz[n]=a/l}}segIndex(t){let e=0,n=this.n-2;for(;e<n;){const i=e+n+1>>1;this.s[i]<=t?e=i:n=i-1}return e}frame(t,e={x:0,z:0,tx:0,tz:1,nx:-1,nz:0}){const n=this.segIndex(t),i=(t-this.s[n])/(this.s[n+1]-this.s[n]||1);e.x=this.x[n]+(this.x[n+1]-this.x[n])*i,e.z=this.z[n]+(this.z[n+1]-this.z[n])*i;let o=this.vtx[n]+(this.vtx[n+1]-this.vtx[n])*i,r=this.vtz[n]+(this.vtz[n+1]-this.vtz[n])*i;const a=Math.hypot(o,r)||1;return o/=a,r/=a,e.tx=o,e.tz=r,e.nx=-r,e.nz=o,e}point(t,e){const n=this.frame(t);return[n.x+n.nx*e,n.z+n.nz*e]}project(t,e,n=-1){let i,o;if(n>=0){const h=this.segIndex(n);i=Math.max(0,h-60),o=Math.min(this.n-2,h+60)}else{let h=1/0,d=0;for(let p=0;p<this.n;p+=8){const f=(t-this.x[p])**2+(e-this.z[p])**2;f<h&&(h=f,d=p)}i=Math.max(0,d-24),o=Math.min(this.n-2,d+24)}let r=1/0,a=0,l=1;for(let h=i;h<=o;h++){const d=this.x[h],p=this.z[h],f=this.x[h+1]-d,m=this.z[h+1]-p,v=f*f+m*m||1e-9;let g=((t-d)*f+(e-p)*m)/v;g=g<0?0:g>1?1:g;const u=d+f*g,M=p+m*g,x=(t-u)**2+(e-M)**2;x<r&&(r=x,a=this.s[h]+Math.sqrt(v)*g,l=(t-d)*-m+(e-p)*f>=0?1:-1)}const c=Math.sqrt(r);return{s:a,d:c*l,dist:c}}}function oi(s,t,e=0){let n=s*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const Lu=s=>s*s*(3-2*s);function rx(s,t,e=0){const n=Math.floor(s),i=Math.floor(t),o=Lu(s-n),r=Lu(t-i),a=oi(n,i,e),l=oi(n+1,i,e),c=oi(n,i+1,e),h=oi(n+1,i+1,e);return(a+(l-a)*o+(c-a)*r+(a-l-c+h)*o*r)*2-1}function Xi(s,t,e=4,n=0){let i=0,o=.5,r=1;for(let a=0;a<e;a++)i+=o*rx(s*r,t*r,n+a*17),o*=.5,r*=2.03;return i}function Li(s){let t=s>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Ee=(s,t,e)=>s<t?t:s>e?e:s,bi=(s,t,e)=>s+(t-s)*e,Re=(s,t,e)=>{const n=Ee((e-s)/(t-s),0,1);return n*n*(3-2*n)},Tf=s=>`${(Math.abs(s)*3.281).toFixed(1)} ft`,jn=5.2,wi=2.2,Du=1.75,Rc=3.1,ax=1.6,lx=15,Wr=22*4.4,cx=.8,hx=7,ux=3,dx=.04,Iu=.08;class fx{constructor(t,e,n,i=[],o=0,r=[]){D(this,"bodies",[]);D(this,"gates",[]);D(this,"groups",[]);D(this,"events",[]);D(this,"hwTable");D(this,"hwStep",.5);D(this,"overflowCooldown",0);this.length=n,this.windingHoles=i;const a=[];for(const f of[...t].sort((m,v)=>m.s0-v.s0)){const m=a.at(-1);m&&Math.abs(m.at(-1).s1-f.s0)<4?m.push(f):a.push([f])}let l=o,c=0,h=0;for(const f of a){const m=f.length>1,v=m?px(f):f[0].name;this.bodies.push({kind:"pound",s0:c,s1:f[0].s0,level:l,lo:l,hi:l,label:"the canal"});const g={name:v,staircase:m,gates:[],bodies:[this.bodies.length-1]};this.groups.push(g);for(let u=0;u<f.length;u++){const M=f[u],x=u===0?M.s0:f[u-1].s1,_=l,T=l+M.rise,S=m?u>0:h++%2===1,w=m?`chamber ${u+1}`:"the lock";this.bodies.push({kind:"chamber",s0:x,s1:M.s1,level:S?T:_,lo:_,hi:T,lockName:v,label:w}),g.bodies.push(this.bodies.length-1),l=T}c=f.at(-1).s1;for(let u=0;u<=f.length;u++){const M=this.bodies.length-1-f.length+u,x=u===0?"bottom gates":u===f.length?"top gates":f.length===2?"middle gates":f.length===3?`middle gates (${u===1?"lower":"upper"})`:`middle gates ${u}`,_={s:u===0?f[0].s0:f[u-1].s1,below:M,above:M+1,open:0,wantOpen:!1,paddle:0,wantPaddle:!1,flow:0,lockName:v,label:x,group:g};this.gates.push(_),g.gates.push(_)}g.bodies.push(this.bodies.length)}this.bodies.push({kind:"pound",s0:c,s1:n,level:l,lo:l,hi:l,label:"the canal"});const d=Math.ceil(n/this.hwStep)+1;this.hwTable=new Float32Array(d);const p=e.filter(f=>f.kind==="road"&&f.w<12);for(let f=0;f<d;f++){const m=f*this.hwStep;let v=jn;for(const g of this.bodies){if(g.kind!=="chamber")continue;const u=Math.max(g.s0-m,m-g.s1,0);v=Math.min(v,wi+(jn-wi)*Re(.5,9,u))}for(const g of p){const u=Math.max(Math.abs(m-g.s)-g.w/2-3.5,0);v=Math.min(v,Rc+(jn-Rc)*Re(0,7,u))}for(const g of i){const u=Math.abs(m-g);u<40&&(v=Math.max(v,jn+(lx-jn)*Re(40,16,u)))}for(const[g,u]of r){const M=Math.max(g-m,m-u,0);v=Math.min(v,Du+(jn-Du)*Re(0,14,M))}this.hwTable[f]=v}}bodyIndexAt(t){for(let e=0;e<this.bodies.length;e++)if(t<this.bodies[e].s1)return e;return this.bodies.length-1}levelAt(t){return this.bodies[this.bodyIndexAt(t)].level}bedAt(t){return this.bodies[this.bodyIndexAt(t)].lo-ax}halfWidthAt(t){const e=Ee(t/this.hwStep,0,this.hwTable.length-1),n=Math.floor(e),i=e-n,o=this.hwTable[n],r=this.hwTable[Math.min(n+1,this.hwTable.length-1)];return o+(r-o)*i}levelsMatch(t){return Math.abs(this.bodies[t.below].level-this.bodies[t.above].level)<dx}openBlocker(t){if(this.levelsMatch(t))return null;const e=Math.abs(this.bodies[t.below].level-this.bodies[t.above].level);return`The water's ${Tf(e)} higher on one side, so the gates won't budge. Raise the paddles first.`}toggleGate(t,e){if(t.wantOpen)return e?"The boat's in the way of the gates.":(t.wantOpen=!1,null);const n=this.openBlocker(t);return n||(t.wantOpen=!0,null)}togglePaddle(t){t.wantPaddle=!t.wantPaddle}gateBlocks(t){return t.open<.97}update(t){this.overflowCooldown-=t;for(const n of this.gates)n.open=Ee(n.open+(n.wantOpen?1:-1)*(t/hx),0,1),n.paddle=Ee(n.paddle+(n.wantPaddle?1:-1)*(t/ux),0,1);const e=this.bodies.map(n=>n.kind==="chamber"?n.lo:-1/0);for(let n=!0;n;){n=!1;for(const i of this.gates){if(i.open<=.02)continue;const o=Math.max(e[i.below],e[i.above]);(e[i.below]!==o||e[i.above]!==o)&&(e[i.below]=e[i.above]=o,n=!0)}}for(const n of this.gates){const i=cx*n.paddle+(n.open>.02?40*n.open:0),o=this.bodies[n.below],a=this.bodies[n.above].level-o.level;if(n.flow=0,i<=0||Math.abs(a)<1e-5)continue;const[l,c]=a>0?[n.above,n.below]:[n.below,n.above],h=this.bodies[l],d=this.bodies[c],p=h.kind==="chamber",f=d.kind==="chamber";if(!p&&!f)continue;let m=i*Math.sqrt(2*9.81*Math.abs(a))*t;p&&(m=Math.min(m,Math.max(0,h.level-e[l])*Wr)),m=Math.min(m,Math.abs(a)*Wr/(p&&f?2:1)),!(m<=0)&&(p&&(h.level-=m/Wr),f&&(d.level+=m/Wr),n.flow=Math.sign(a)*(m/t))}this.bodies.forEach((n,i)=>{if(n.kind!=="chamber"||n.level<=n.hi+Iu||(n.level=n.hi+Iu,this.overflowCooldown>0))return;const o=this.gates.find(l=>l.paddle>.05&&(l.below===i&&this.bodies[l.above].level>n.level||l.above===i&&this.bodies[l.below].level>n.level)),r=this.gates.find(l=>l.below===i||l.above===i).group,a=r.staircase?`${n.label} of ${r.name}`:r.name;this.events.push({text:o?`${Uu(a)} is overflowing: the paddles on the ${o.label} are still up.`:`${Uu(a)} is overflowing!`,kind:"warn",group:r}),this.overflowCooldown=12})}}const Uu=s=>s[0].toUpperCase()+s.slice(1);function px(s){const t=s[0].name.split(" ")[0];return s.every(e=>e.name.startsWith(t))?`${t} Staircase`:`${s[0].name} flight`}const mx=2,vl=1.1,_l=44,$r=8,gx=.8,qi=16,jt=1,yn={bed:new Vt("#2a2f24"),wallStone:new Vt("#77706a"),wallSandstone:new Vt("#9b5644"),coping:new Vt("#bdb3a3"),towpath:new Vt("#b59d78"),grass:new Vt("#6f9a4c"),grassDark:new Vt("#5c8a42"),field:new Vt("#86a85a"),paved:new Vt("#8f8b84"),park:new Vt("#5e9445")};class vx{constructor(t,e,n,i){D(this,"bank");D(this,"smoothBank");D(this,"bankStep",2);D(this,"riverLevel");D(this,"riverDist",null);D(this,"riverGrid",{x0:0,z0:0,w:0,h:0,cell:20});D(this,"urbanAt",()=>0);D(this,"parkAt",()=>!1);D(this,"embankments",[]);D(this,"cuttings",[]);this.route=t,this.ww=e,this.bounds=n,this.valley=i;const o=Math.ceil(t.length/this.bankStep)+1,r=new Float32Array(o);for(let a=0;a<o;a++){const l=a*this.bankStep;let c=-1/0;for(const h of e.bodies)h.s1>l-4&&h.s0<l+4&&(c=Math.max(c,h.hi));r[a]=c+gx}this.bank=r,this.smoothBank=Nu(Nu(r,15),15),this.riverLevel=e.bodies[0].lo-(i?i.depth-1:6)}bankTop(t){return ku(this.bank,t/this.bankStep)}setRivers(t){const{bounds:e}=this,n=this.riverGrid.cell,i=Math.ceil((e.x1-e.x0)/n)+1,o=Math.ceil((e.z1-e.z0)/n)+1;this.riverGrid={x0:e.x0,z0:e.z0,w:i,h:o,cell:n};const r=new Float32Array(i*o).fill(1e9);for(const a of t)for(let l=0;l+3<a.p.length;l+=2){const c=a.p[l],h=a.p[l+1],d=a.p[l+2],p=a.p[l+3],f=120,m=Math.max(0,Math.floor((Math.min(c,d)-f-e.x0)/n)),v=Math.min(i-1,Math.ceil((Math.max(c,d)+f-e.x0)/n)),g=Math.max(0,Math.floor((Math.min(h,p)-f-e.z0)/n)),u=Math.min(o-1,Math.ceil((Math.max(h,p)+f-e.z0)/n));for(let M=g;M<=u;M++)for(let x=m;x<=v;x++){const _=Mx(e.x0+x*n,e.z0+M*n,c,h,d,p)-a.w/2;_<r[M*i+x]&&(r[M*i+x]=_)}}this.riverDist=r}riverDistAt(t,e){if(!this.riverDist)return 1e9;const n=this.riverGrid,i=Ee((t-n.x0)/n.cell,0,n.w-1.001),o=Ee((e-n.z0)/n.cell,0,n.h-1.001),r=Math.floor(i),a=Math.floor(o),l=i-r,c=o-a,h=this.riverDist;return bi(bi(h[a*n.w+r],h[a*n.w+r+1],l),bi(h[(a+1)*n.w+r],h[(a+1)*n.w+r+1],l),c)}cliffSide(t,e){return this.cuttings.some(n=>n.side===e&&t>n.s0-25&&t<n.s1+25)}cuttingAt(t,e){for(const n of this.cuttings){if(t<n.s0-40||t>n.s1+40)continue;const i=Re(n.s0-30,n.s0+15,t)*(1-Re(n.s1-15,n.s1+30,t)),o=this.ww.halfWidthAt(t),r=Math.abs(e);if(Math.sign(e)===n.side){const l=Re(o+3.3,o+6.2,r);return{h:n.cliff*l*i,cliff:i*(r>o+3.2&&r<o+6.5?1:0)}}const a=Re(o+3.6,o+16,r);return{h:n.far*a*i,cliff:i*(a>.05&&a<.6?.7:0)}}return{h:0,cliff:0}}landHeight(t,e,n,i){const o=this.ww.halfWidthAt(n),r=Math.abs(i);let a=bi(this.bankTop(n),ku(this.smoothBank,n/this.bankStep),Re(o+3,o+24,r));const l=Re(o+6,140,r);if(a+=Xi(t*.004,e*.004,3,7)*3.5*l+Xi(t*.03,e*.03,2,3)*.35*Re(o+3,o+12,r),this.valley){const h=this.valley,d=Re(h.s0-10,h.s0+100,n)*(1-Re(h.s1-100,h.s1+10,n)),p=Re(h.s0-400,h.s0,n)*(1-Re(h.s1,h.s1+400,n))*Re(60,220,r);a-=h.depth*Math.max(d*Re(o+2.7,o+9,r),p)}const c=this.riverDistAt(t,e);c<40&&(a=bi(this.riverLevel-1.5,a,Re(-2,40,c))),a+=this.cuttingAt(n,i).h;for(const h of this.embankments){const d=t-h.x,p=e-h.z;if(Math.abs(d)+Math.abs(p)>h.halfSpan+60)continue;const f=Math.abs(d*h.ux+p*h.uz),m=Math.abs(-d*h.uz+p*h.ux),v=Re(h.halfWidth+5,h.halfWidth,m);if(v<=0)continue;const g=h.deck-.15-Math.max(0,f-h.halfSpan*.9)/10;g>a&&(a=a+(g-a)*v)}return a}get hasAqueduct(){return!!this.valley}nearAqueduct(t,e=15){return!!this.valley&&t>this.valley.s0-e&&t<this.valley.s1+e}aqueductCore(t){const e=this.valley;return e?Re(e.s0+qi-6,e.s0+qi,t)*(1-Re(e.s1-qi,e.s1-qi+6,t)):0}floorUnder(t,e,n,i){const o=this.ww.halfWidthAt(n)+9;return this.landHeight(t,e,n,(Math.sign(i)||1)*Math.max(Math.abs(i),o))}heightAt(t,e){const n=this.route.project(t,e),i=this.ww.halfWidthAt(n.s),o=this.aqueductCore(n.s);return o>0&&n.dist<i+9?bi(n.dist<i?this.ww.bedAt(n.s):this.landHeight(t,e,n.s,n.d),this.floorUnder(t,e,n.s,n.d),o):n.dist<i?this.ww.bedAt(n.s):this.landHeight(t,e,n.s,n.d)}buildStrip(){const{route:t,ww:e}=this,n=[];for(let m=0;m<t.length;m+=mx)n.push(m);n.push(t.length);for(const m of e.gates)n.push(m.s-.05,m.s+.05,m.s+vl-.05,m.s+vl+.05);n.sort((m,v)=>m-v);const i=n.length,o=m=>[[0,"bed"],[m-.8,"bed"],[m,"wallBase"],[m,"wallTop"],[m+.5,"coping"],[m+.55,"path"],[m+2.6,"path"],[m+3.4,"land"],[m+6.3,"land"],[m+7,"land"],[Math.max(14,m+9),"land"],[Math.max(22,m+15),"land"],[Math.max(32,m+24),"land"],[Math.max(_l,m+34),"land"]],r=o(jn).length,a=r*2-1,l=new Float32Array(i*a*3),c=new Float32Array(i*a*3),h={x:0,z:0,tx:0,tz:0,nx:0,nz:0},d=new Vt;for(let m=0;m<i;m++){const v=n[m];t.frame(v,h);const g=e.halfWidthAt(v),u=this.bankTop(v),M=e.gates.find(R=>v>=R.s&&v<R.s+vl),x=e.bedAt(M?M.s-.01:v),_=this.nearAqueduct(v,30),T=e.bodies[e.bodyIndexAt(v)].kind==="chamber"||g<jn-.5&&!_,S=_x(t,v),w=o(g);for(let R=0;R<a;R++){const b=R<r-1?-1:1,y=b<0?r-1-R:R-(r-1);let[C,E]=w[y];E==="land"&&Math.abs(S)>1e-4&&Math.sign(S)===b&&(C=Math.min(C,Math.max(g+3.6,.8/Math.abs(S))));const N=h.x+h.nx*C*b,O=h.z+h.nz*C*b,$=b===jt||T;let z;switch(E){case"bed":z=x,d.copy(yn.bed);break;case"wallBase":z=x+.2,d.copy(T?yn.wallSandstone:yn.wallStone);break;case"wallTop":z=u,d.copy(T?yn.wallSandstone:yn.wallStone);break;case"coping":z=u+.04,d.copy(yn.coping);break;case"path":z=u,d.copy($?yn.towpath:yn.grassDark);break;default:z=this.landHeight(N,O,v,C*b),this.groundColour(N,O,v,C*b,d)}E==="path"&&$&&d.offsetHSL(0,0,(oi(m,R,5)-.5)*.04);const H=this.aqueductCore(v);H>0&&(z=bi(z,this.floorUnder(N,O,v,C*b),H),H>.5&&this.groundColour(N,O,v,(Math.sign(C*b)||1)*Math.max(C,g+9),d));const B=(m*a+R)*3;l[B]=N,l[B+1]=z,l[B+2]=O,c[B]=d.r,c[B+1]=d.g,c[B+2]=d.b}}const p=Ou(l,c,i,a,!0),f=new q(p,zu());return f.receiveShadow=!0,f.name="strip",f}buildFar(){const{bounds:t,route:e,ww:n}=this,i=Math.ceil((t.x1-t.x0)/$r)+1,o=Math.ceil((t.z1-t.z0)/$r)+1,r=new Float32Array(i*o*3),a=new Float32Array(i*o*3),l=new Vt;let c=-1;for(let p=0;p<o;p++)for(let f=0;f<i;f++){const m=t.x0+f*$r,v=t.z0+p*$r,g=e.project(m,v,c),u=g.dist>150?e.project(m,v):g;c=u.dist<150?u.s:-1;const M=n.halfWidthAt(u.s);let x;u.dist<M+14?x=n.bedAt(u.s)-3:u.dist<_l?x=this.landHeight(m,v,u.s,u.d)-.15:x=this.landHeight(m,v,u.s,u.d);const _=this.aqueductCore(u.s);_>0&&u.dist<_l&&(x=bi(x,this.floorUnder(m,v,u.s,u.d)-.15,_)),this.groundColour(m,v,u.s,u.d,l);const T=(p*i+f)*3;r[T]=m,r[T+1]=x,r[T+2]=v,a[T]=l.r,a[T+1]=l.g,a[T+2]=l.b}const h=Ou(r,a,o,i),d=new q(h,zu());return d.receiveShadow=!0,d.name="far-terrain",d}groundColour(t,e,n,i,o){const r=Math.abs(i),a=Math.floor(t/150+Xi(t*.01,e*.01,2,1)*.6),l=Math.floor(e/130+Xi(t*.01,e*.01,2,2)*.6),c=oi(a,l,11);o.copy(yn.grass).lerp(yn.field,c*.8),o.offsetHSL(0,0,(oi(Math.floor(t/4),Math.floor(e/4),3)-.5)*.035),this.parkAt(t,e)&&o.lerp(yn.park,.7);const h=this.urbanAt(t,e)*Re(8,20,r);o.lerp(yn.paved,h*.85);const d=this.riverDistAt(t,e);d<12&&o.lerp(yn.bed,Re(12,0,d)*.5);const p=this.cuttingAt(n,i);p.cliff>0&&o.lerp(yn.wallSandstone,p.cliff).offsetHSL(0,0,(oi(Math.floor(t/2),Math.floor(e/3),8)-.5)*.06)}}function _x(s,t){const e=s.frame(Math.max(0,t-8)),n=s.frame(Math.min(s.length,t+8)),i=n.tx-e.tx,o=n.tz-e.tz,r=s.frame(t);return(i*r.nx+o*r.nz)/16}function ku(s,t){t=Ee(t,0,s.length-1);const e=Math.floor(t);return bi(s[e],s[Math.min(e+1,s.length-1)],t-e)}function Nu(s,t){const e=new Float32Array(s.length);for(let n=0;n<s.length;n++){let i=0,o=0;for(let r=-t;r<=t;r++){const a=n+r;a>=0&&a<s.length&&(i+=s[a],o++)}e[n]=i/o}return e}function Mx(s,t,e,n,i,o){const r=i-e,a=o-n,l=Ee(((s-e)*r+(t-n)*a)/(r*r+a*a||1),0,1);return Math.hypot(s-e-r*l,t-n-a*l)}function Ou(s,t,e,n,i=!1){const o=new Uint32Array((e-1)*(n-1)*6);let r=0;for(let l=0;l<e-1;l++)for(let c=0;c<n-1;c++){const h=l*n+c,d=h+1,p=h+n,f=p+1;i?(o[r++]=h,o[r++]=d,o[r++]=p,o[r++]=d,o[r++]=f,o[r++]=p):(o[r++]=h,o[r++]=p,o[r++]=d,o[r++]=d,o[r++]=p,o[r++]=f)}const a=new xe;return a.setAttribute("position",new Ye(s,3)),a.setAttribute("color",new Ye(t,3)),a.setIndex(new Ye(o,1)),a.computeVertexNormals(),a}let Fu=null;function zu(){return Fu??(Fu=new Yt({vertexColors:!0,roughness:.95,flatShading:!0})),Fu}function xx(s=256){const t=new Float32Array(s*s),e=8;for(let r=0;r<s;r++)for(let a=0;a<s;a++){const l=a/s*e,c=r/s*e;t[r*s+a]=Bu(l,c,e)*.6+Bu(l*2,c*2,e*2)*.3}const n=new ImageData(s,s);for(let r=0;r<s;r++)for(let a=0;a<s;a++){const l=t[r*s+(a-1+s)%s],c=t[r*s+(a+1)%s],h=t[(r-1+s)%s*s+a],d=t[(r+1)%s*s+a],p=(l-c)*3,f=(h-d)*3,m=1,v=Math.hypot(p,f,m),g=(r*s+a)*4;n.data[g]=(p/v*.5+.5)*255,n.data[g+1]=(f/v*.5+.5)*255,n.data[g+2]=(m/v*.5+.5)*255,n.data[g+3]=255}const i=document.createElement("canvas");i.width=i.height=s,i.getContext("2d").putImageData(n,0,0);const o=new Pn(i);return o.wrapS=o.wrapT=fo,o}function Bu(s,t,e){const n=s/e,i=t/e,o=Xi(s,t,3,2),r=Xi(s-e,t,3,2),a=Xi(s,t-e,3,2),l=Xi(s-e,t-e,3,2);return(o*(1-n)+r*n)*(1-i)+(a*(1-n)+l*n)*i}class yx{constructor(t,e){D(this,"group",new bt);D(this,"material");D(this,"normalMap");D(this,"chamberMeshes",[]);this.route=t,this.ww=e,this.normalMap=xx(),this.material=new Yt({color:"#3d5c47",roughness:.12,metalness:0,normalMap:this.normalMap,normalScale:new ot(.28,.28),transparent:!0,opacity:.93,envMapIntensity:.9}),e.bodies.forEach((n,i)=>{const o=this.ribbon(n.s0-.15,n.s1+.15),r=new q(o,this.material);r.position.y=n.level,r.receiveShadow=!0,this.group.add(r),n.kind==="chamber"&&this.chamberMeshes.push({mesh:r,body:i})})}ribbon(t,e){const{route:n,ww:i}=this;t=Math.max(0,t),e=Math.min(n.length,e);const o=Math.max(2,Math.ceil((e-t)/1.5)+1),r=[],a=[],l=[];for(let h=0;h<o;h++){const d=t+(e-t)*h/(o-1),p=n.frame(d),f=i.halfWidthAt(d)+.12;for(const m of[-1,1]){const v=p.x+p.nx*f*m,g=p.z+p.nz*f*m;r.push(v,0,g),a.push(v/7,g/7)}if(h>0){const m=(h-1)*2;l.push(m,m+1,m+2,m+1,m+3,m+2)}}const c=new xe;return c.setAttribute("position",new te(r,3)),c.setAttribute("uv",new te(a,2)),c.setIndex(l),c.computeVertexNormals(),c}addRivers(t,e){for(const n of t){const i=[],o=[],r=[],a=n.p.length/2;for(let h=0;h<a;h++){const d=Math.max(0,h-1),p=Math.min(a-1,h+1);let f=n.p[p*2]-n.p[d*2],m=n.p[p*2+1]-n.p[d*2+1];const v=Math.hypot(f,m)||1;f/=v,m/=v;for(const g of[-1,1]){const u=n.p[h*2]-m*(n.w/2)*g,M=n.p[h*2+1]+f*(n.w/2)*g;i.push(u,e,M),o.push(u/7,M/7)}if(h>0){const g=(h-1)*2;r.push(g,g+2,g+1,g+1,g+2,g+3)}}const l=new xe;l.setAttribute("position",new te(i,3)),l.setAttribute("uv",new te(o,2)),l.setIndex(r),l.computeVertexNormals();const c=this.material.clone();c.side=Fe,c.color.set("#4a6a5c"),this.group.add(new q(l,c))}}addPond(t,e){const n=new Ts;for(let l=0;l<t.length;l+=2)(l?n.lineTo:n.moveTo).call(n,t[l],-t[l+1]);const i=new Qc(n);i.rotateX(-Math.PI/2);const o=i.getAttribute("position"),r=i.getAttribute("uv");for(let l=0;l<o.count;l++)r.setXY(l,o.getX(l)/7,o.getZ(l)/7);const a=new q(i,this.material);a.position.y=e,this.group.add(a)}update(t){this.normalMap.offset.x+=t*.012,this.normalMap.offset.y+=t*.007;for(const e of this.chamberMeshes)e.mesh.position.y=this.ww.bodies[e.body].level}}const er=["brick","brickDark","render","whiteRender","tudor","sandstone","warehouse","modern","gothic","tower","shed","white"],ye={house:0,shop:1,upper:2,plain:3},Kn=128,Pc=4,Xr=3,bx=3.6,wx=3.1;function Ml(s,t,e,n,i,o,r,a=.08){s.fillStyle=o,s.fillRect(t,e,n,i);for(let l=0;l*6<i;l++)for(let c=-1;c*14<n;c++){const h=t+c*14+l%2*7,d=e+l*6,p=1+Math.sin(l*12.9+c*78.2)*.5*a*2;s.fillStyle=nr(o,p),s.fillRect(h+1,d+1,12,4)}s.fillStyle=r,s.globalAlpha=.25;for(let l=e;l<e+i;l+=6)s.fillRect(t,l,n,1);s.globalAlpha=1}function nr(s,t){const e=new Vt(s);return e.multiplyScalar(t),`#${e.getHexString()}`}function xl(s,t,e,n,i,o="#f4f1e8",r="#d9cfbd"){const a=t-n/2;s.fillStyle=r,s.fillRect(a-4,e-7,n+8,6),s.fillRect(a-3,e+i,n+6,4),s.fillStyle=o,s.fillRect(a,e,n,i);const l=s.createLinearGradient(0,e,0,e+i);l.addColorStop(0,"#5d7486"),l.addColorStop(1,"#22303b"),s.fillStyle=l,s.fillRect(a+4,e+4,n-8,i/2-5),s.fillRect(a+4,e+i/2+1,n-8,i/2-5),s.fillStyle=o,s.fillRect(t-1,e+4,2,i-8)}function Sx(s,t,e,n,i,o){s.fillStyle="#e9e2d2",s.fillRect(t-3,e-i-4,n+6,i+4),s.fillStyle=o,s.fillRect(t,e-i,n,i),s.fillStyle="#2a3640",s.beginPath(),s.arc(t+n/2,e-i,n/2,Math.PI,0),s.fill(),s.fillStyle="#c9a24a",s.fillRect(t+n-8,e-i/2,3,3)}function Hu(s,t,e,n,i,o){s.fillStyle=o,s.fillRect(t+2,e+18,n-4,16),s.fillStyle="#f2e6c4",s.globalAlpha=.85,s.fillRect(t+14,e+23,n-28,5),s.globalAlpha=1,s.fillStyle=nr(o,.8),s.fillRect(t+4,e+36,n-8,i-38);const r=s.createLinearGradient(0,e+40,0,e+i);r.addColorStop(0,"#6c8596"),r.addColorStop(1,"#2b3943"),s.fillStyle=r,s.fillRect(t+9,e+40,n-18,i-58),s.fillStyle=nr(o,.8),s.fillRect(t+n/2-2,e+40,4,i-58)}function yl(s,t,e,n,i,o="#2b3943",r="#d9cfbd"){s.fillStyle=r,s.beginPath(),s.moveTo(t-n/2-3,e+i+3),s.lineTo(t-n/2-3,e+n/2),s.arc(t,e+n/2,n/2+3,Math.PI,0),s.lineTo(t+n/2+3,e+i+3),s.fill(),s.fillStyle=o,s.beginPath(),s.moveTo(t-n/2,e+i),s.lineTo(t-n/2,e+n/2),s.arc(t,e+n/2,n/2,Math.PI,0),s.lineTo(t+n/2,e+i),s.fill()}function Ex(s,t,e,n,i){s.fillStyle="#d6b49a",s.beginPath(),s.moveTo(t-n/2-4,e+i+4),s.lineTo(t-n/2-4,e+n),s.quadraticCurveTo(t-n/2-4,e-6,t,e-10),s.quadraticCurveTo(t+n/2+4,e-6,t+n/2+4,e+n),s.lineTo(t+n/2+4,e+i+4),s.fill(),s.fillStyle="#2a3440",s.beginPath(),s.moveTo(t-n/2,e+i),s.lineTo(t-n/2,e+n),s.quadraticCurveTo(t-n/2,e,t,e-4),s.quadraticCurveTo(t+n/2,e,t+n/2,e+n),s.lineTo(t+n/2,e+i),s.fill(),s.fillStyle="#8a6a55",s.fillRect(t-1,e,2,i)}function Tx(s,t,e,n,i){const o=Kn,r=["#1f4d3a","#7a1f2b","#1d3557","#2b2b2b","#5a3d1e"],a=r[er.indexOf(t)%r.length];switch(t){case"brick":case"brickDark":case"render":case"whiteRender":{const l={brick:"#a2513f",brickDark:"#7d3f31",render:"#e6dcc8",whiteRender:"#f1ede4"}[t];t.startsWith("brick")?Ml(s,n,i,o,o,l,"#d8cdb8"):(s.fillStyle=l,s.fillRect(n,i,o,o)),e===ye.upper?xl(s,n+o/2,i+30,46,66):e===ye.house?(Sx(s,n+18,i+o-6,34,78,["#1f4d3a","#7a1f2b","#1d3557","#2b2b2b"][n/o%4|0]),xl(s,n+92,i+38,40,58)):e===ye.shop&&Hu(s,n,i,o,o,a),s.fillStyle=nr(l,.75),s.fillRect(n,i+o-4,o,4);break}case"tudor":{s.fillStyle="#f4f1ea",s.fillRect(n,i,o,o),s.fillStyle="#1e1b19";for(const l of[0,60,120])s.fillRect(n+l,i,8,o);if(s.fillRect(n,i+4,o,7),s.fillRect(n,i+o-10,o,8),e===ye.upper){s.lineWidth=6,s.strokeStyle="#1e1b19",s.beginPath(),s.moveTo(n+8,i+o-10),s.lineTo(n+30,i+70),s.moveTo(n+120,i+o-10),s.lineTo(n+98,i+70),s.stroke(),s.fillStyle="#2a3440",s.fillRect(n+30,i+22,68,42),s.strokeStyle="#8a8d8a",s.lineWidth=1;for(let l=0;l<9;l++)s.beginPath(),s.moveTo(n+30+l*9,i+22),s.lineTo(n+30+l*9-20,i+64),s.stroke()}else e!==ye.plain&&Hu(s,n+8,i+10,o-16,o-18,"#1e1b19");break}case"sandstone":case"gothic":case"tower":{const l=t==="tower"?"#7d3f31":"#b5735a";if(t==="tower")Ml(s,n,i,o,o,l,"#c8b8a0");else{s.fillStyle=l,s.fillRect(n,i,o,o),s.strokeStyle=nr(l,.82),s.lineWidth=1;for(let c=0;c*16<o;c++){s.beginPath(),s.moveTo(n,i+c*16),s.lineTo(n+o,i+c*16),s.stroke();for(let h=0;h*32<o;h++){const d=n+h*32+c%2*16;s.beginPath(),s.moveTo(d,i+c*16),s.lineTo(d,i+c*16+16),s.stroke()}}}if(e===ye.plain)break;t==="gothic"?Ex(s,n+o/2,i+24,40,96):t==="tower"?(s.fillStyle="#1f2730",s.fillRect(n+o/2-5,i+40,10,34)):xl(s,n+o/2,i+34,40,60,"#e9e2d2","#c49a80");break}case"warehouse":{if(Ml(s,n,i,o,o,"#80402f","#c9b8a0"),e===ye.plain)break;e===ye.upper?(yl(s,n+36,i+34,30,52),yl(s,n+92,i+34,30,52)):yl(s,n+o/2,i+26,62,o-30,"#2e3b2c");break}case"modern":{s.fillStyle="#b9bcbf",s.fillRect(n,i,o,o),s.fillStyle="#a6a9ad";for(let c=0;c<o;c+=32)s.fillRect(n+c,i,2,o);if(e===ye.plain)break;const l=s.createLinearGradient(0,i+26,0,i+100);l.addColorStop(0,"#7f97a8"),l.addColorStop(1,"#30404c"),s.fillStyle=l,s.fillRect(n,i+(e===ye.upper?28:18),o,e===ye.upper?62:104),s.fillStyle="#d6d8da";for(let c=0;c<o;c+=32)s.fillRect(n+c,i+18,3,110);break}case"shed":{s.fillStyle="#7b7f78",s.fillRect(n,i,o,o),s.fillStyle="#6c706a";for(let l=0;l<o;l+=8)s.fillRect(n+l,i,3,o);break}case"white":s.fillStyle="#ffffff",s.fillRect(n,i,o,o);break}}let bl=null;function Ax(){if(bl)return bl.material;const s=document.createElement("canvas");s.width=Kn*Pc,s.height=Kn*er.length;const t=s.getContext("2d");er.forEach((i,o)=>{for(let r=0;r<Pc;r++)Tx(t,i,r,r*Kn,o*Kn)});const e=new Pn(s);e.colorSpace=Be,e.anisotropy=4;const n=new Yt({map:e,vertexColors:!0,roughness:.88});return n.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 cell;
varying vec4 vCell;
varying vec2 vRep;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vCell = cell;
vRep = uv;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vCell;
varying vec2 vRep;`).replace("#include <map_fragment>",`// repeat this wall's atlas cell; gradients from the unwrapped coords avoid seams
        vec2 cellUv = vCell.xy + fract(vRep) * vCell.zw;
        vec4 sampledDiffuseColor = textureGrad(map, cellUv, dFdx(vRep) * vCell.zw, dFdy(vRep) * vCell.zw);
        diffuseColor *= sampledDiffuseColor;`)},bl={texture:e,material:n},n}function Ys(s,t){const e=er.indexOf(s),n=Kn*Pc,i=Kn*er.length,o=(t*Kn+Xr)/n,r=(Kn-2*Xr)/n,a=1-((e+1)*Kn-Xr)/i,l=(Kn-2*Xr)/i;return[o,a,r,l]}const wl={slate:["#4d525b","#585d66","#43474f"],tile:["#7d3d30","#8a4a37"],flat:["#6a6a68","#757370"]},Sl=(s,t)=>s[Math.floor(t*s.length)%s.length];class Cx{constructor(t){D(this,"cell",3);D(this,"w");D(this,"h");D(this,"data");this.b=t,this.w=Math.ceil((t.x1-t.x0)/this.cell),this.h=Math.ceil((t.z1-t.z0)/this.cell),this.data=new Uint8Array(this.w*this.h)}mark(t,e,n){const i=this.cell;for(let o=Math.floor((e-n-this.b.z0)/i);o<=Math.floor((e+n-this.b.z0)/i);o++)for(let r=Math.floor((t-n-this.b.x0)/i);r<=Math.floor((t+n-this.b.x0)/i);r++)r>=0&&o>=0&&r<this.w&&o<this.h&&(this.data[o*this.w+r]=1)}markPolygon(t){let e=1/0,n=-1/0,i=1/0,o=-1/0;for(let a=0;a<t.length;a+=2)e=Math.min(e,t[a]),n=Math.max(n,t[a]),i=Math.min(i,t[a+1]),o=Math.max(o,t[a+1]);const r=this.cell;for(let a=i-r;a<=o+r;a+=r)for(let l=e-r;l<=n+r;l+=r)nh(l,a,t)&&this.mark(l,a,2)}used(t,e){const n=Math.floor((t-this.b.x0)/this.cell),i=Math.floor((e-this.b.z0)/this.cell);return n<0||i<0||n>=this.w||i>=this.h||this.data[i*this.w+n]===1}}function nh(s,t,e){let n=!1;for(let i=0,o=e.length-2;i<e.length;o=i,i+=2){const r=e[i],a=e[i+1],l=e[o],c=e[o+1];a>t!=c>t&&s<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function Rx(s,t){const n=Math.ceil((t.x1-t.x0)/30)+1,i=Math.ceil((t.z1-t.z0)/30)+1,o=new Float32Array(n*i);for(const a of s){let l=0,c=0,h=0;const d=a.p,p=d.length/2;for(let v=0;v<p;v++){const g=(v+1)%p;l+=d[v*2]*d[g*2+1]-d[g*2]*d[v*2+1],c+=d[v*2]/p,h+=d[v*2+1]/p}const f=Math.floor((c-t.x0)/30),m=Math.floor((h-t.z0)/30);f>=0&&m>=0&&f<n&&m<i&&(o[m*n+f]+=Math.abs(l)/2)}const r=new Float32Array(n*i);for(let a=0;a<i;a++)for(let l=0;l<n;l++){let c=0;for(let h=-1;h<=1;h++)for(let d=-1;d<=1;d++){const p=Math.min(n-1,Math.max(0,l+d)),f=Math.min(i-1,Math.max(0,a+h));c+=o[f*n+p]}r[a*n+l]=Math.min(1,c/9/(30*30)*3)}return(a,l)=>{const c=Math.floor((a-t.x0)/30),h=Math.floor((l-t.z0)/30);return c<0||h<0||c>=n||h>=i?0:r[h*n+c]}}class Fo{constructor(){D(this,"pos",[]);D(this,"col",[]);D(this,"nrm",[]);D(this,"uv",[]);D(this,"cell",[]);D(this,"curCell",[0,0,0,0]);D(this,"a",new k);D(this,"b",new k);D(this,"n",new k)}tri(t,e,n,i,o,r){if(this.a.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),this.b.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),this.n.crossVectors(this.a,this.b).normalize(),o){const a=(t[0]+e[0]+n[0])/3-o[0],l=(t[1]+e[1]+n[1])/3-o[1],c=(t[2]+e[2]+n[2])/3-o[2];this.n.x*a+this.n.y*l+this.n.z*c<0&&([e,n]=[n,e],r&&(r=[r[0],r[2],r[1]]),this.n.negate())}[t,e,n].forEach((a,l)=>{this.pos.push(a[0],a[1],a[2]),this.col.push(i.r,i.g,i.b),this.nrm.push(this.n.x,this.n.y,this.n.z);const c=(r==null?void 0:r[l])??[.5,.5];this.uv.push(c[0],c[1]),this.cell.push(...this.curCell)})}geometry(){const t=new xe;return t.setAttribute("position",new te(this.pos,3)),t.setAttribute("normal",new te(this.nrm,3)),t.setAttribute("color",new te(this.col,3)),t.setAttribute("uv",new te(this.uv,2)),t.setAttribute("cell",new te(this.cell,4)),t}}class Px{constructor(t,e,n,i,o){D(this,"group",new bt);D(this,"occ");D(this,"roofs");D(this,"carPaths",[]);this.data=t,this.route=e,this.ww=n,this.terrain=i,this.bridges=o,this.occ=new Cx(i.bounds),this.roofs=new Float32Array(this.occ.w*this.occ.h).fill(-1/0)}isFree(t,e){return!this.occ.used(t,e)}roofAt(t,e){const{occ:n}=this,i=Math.floor((t-n.b.x0)/n.cell),o=Math.floor((e-n.b.z0)/n.cell);return i<0||o<0||i>=n.w||o>=n.h?-1/0:this.roofs[o*n.w+i]}markRoof(t,e){const{occ:n}=this;let i=1/0,o=-1/0,r=1/0,a=-1/0;for(let l=0;l<t.length;l+=2)i=Math.min(i,t[l]),o=Math.max(o,t[l]),r=Math.min(r,t[l+1]),a=Math.max(a,t[l+1]);for(let l=Math.floor((r-n.b.z0)/n.cell);l<=Math.floor((a-n.b.z0)/n.cell);l++)for(let c=Math.floor((i-n.b.x0)/n.cell);c<=Math.floor((o-n.b.x0)/n.cell);c++)c<0||l<0||c>=n.w||l>=n.h||nh(n.b.x0+(c+.5)*n.cell,n.b.z0+(l+.5)*n.cell,t)&&(this.roofs[l*n.w+c]=Math.max(this.roofs[l*n.w+c],e))}build(t){return(async()=>{await t("Laying out roads…"),this.buildRoads(),await t("Building Chester…"),this.buildBuildings(),await t("Planting trees…"),this.buildTrees()})()}buildBuildings(){const t=new Fo,e=new Vt;for(let i=0;i<this.data.buildings.length;i++){const o=this.data.buildings[i];let r=o.p;const a=r.length/2;if(a<3)continue;this.occ.markPolygon(r);let l=0;for(let g=0;g<a;g++){const u=(g+1)%a;l+=r[g*2]*r[u*2+1]-r[u*2]*r[g*2+1]}if(l>0){const g=[];for(let u=a-1;u>=0;u--)g.push(r[u*2],r[u*2+1]);r=g}let c=1/0;for(let g=0;g<a;g++)c=Math.min(c,this.terrain.heightAt(r[g*2],r[g*2+1]));const h=c+o.h;this.markRoof(r,h+1.5);const d=oi(i,7,1),p=oi(i,3,2),f=this.styleFor(o,d,p,r);e.set(f.roof);const m=new Vt(1,1,1).multiplyScalar(.9+p*.1);this.walls(t,r,c,h,f.style,f.ground,m),!f.flat&&a===4&&o.h<=13&&Dx(r)&&Math.abs(l)/2<400?this.gableRoof(t,r,h,m,e,f.style):this.flatRoof(t,r,h,e),this.landmarkExtras(t,o,r,h,e)}const n=new q(t.geometry(),Ax());n.castShadow=n.receiveShadow=!0,n.name="buildings",this.group.add(n)}walls(t,e,n,i,o,r,a){const l=e.length/2,c=i-n,h=Math.max(1,Math.round(c/wx)),d=c/h,p=n-1.5;for(let f=0;f<l;f++){const m=(f+1)%l,v=e[f*2],g=e[f*2+1],u=e[m*2],M=e[m*2+1],x=Math.hypot(u-v,M-g),_=x<1.6,T=Math.max(1,Math.round(x/bx)),S=(w,R,b,y,C)=>{t.curCell=Ys(o,_?ye.plain:C),t.tri([v,w,g],[u,w,M],[u,R,M],a,void 0,[[0,b],[T,b],[T,y]]),t.tri([v,w,g],[u,R,M],[v,R,g],a,void 0,[[0,b],[T,y],[0,y]])};S(p,n+d,-(n-p)/d,1,r),h>1&&S(n+d,i,0,h-1,o==="shed"?ye.plain:ye.upper)}}flatRoof(t,e,n,i){const o=e.length/2;t.curCell=Ys("white",ye.plain);const r=[];for(let a=0;a<o;a++)r.push(new ot(e[a*2],e[a*2+1]));for(const[a,l,c]of ci.triangulateShape(r,[]))t.tri([e[a*2],n,e[a*2+1]],[e[l*2],n,e[l*2+1]],[e[c*2],n,e[c*2+1]],i,[e[a*2],n-10,e[a*2+1]])}styleFor(t,e,n,i){const o=t.t,r=Sl(wl.slate,n),a=Sl(wl.flat,n);if(o==="wall_tower")return{style:"sandstone",ground:ye.plain,roof:"#c9a58a",flat:!0};if(o==="shot_tower")return{style:"tower",ground:ye.upper,roof:"#4a3a32",flat:!0};if(o==="town_hall"||o.startsWith("cathedral")||o==="church"||o==="chapel"||/cathedral|church|chapel/i.test(t.n??""))return{style:"gothic",ground:ye.upper,roof:"#5a6068",flat:!0};if(["garage","garages","shed","roof","hut","carport"].includes(o)||t.h<4)return{style:"shed",ground:ye.plain,roof:a,flat:!0};if(["industrial","warehouse"].includes(o))return{style:"warehouse",ground:ye.house,roof:r,flat:!1};const[l,c]=[i[0],i[1]],h=this.terrain.urbanAt(l,c);if(t.h<=13&&h>.45&&e<.09)return{style:"tudor",ground:ye.shop,roof:r,flat:!1};if(["commercial","retail","office","supermarket","hotel"].includes(o)||t.h>14)return e<.55?{style:"modern",ground:ye.shop,roof:a,flat:!0}:{style:e<.8?"brick":"warehouse",ground:ye.shop,roof:a,flat:!0};if(o==="apartments")return{style:e<.5?"modern":"brick",ground:ye.house,roof:a,flat:e<.5};const d=h>.5&&n<.3?ye.shop:ye.house;return{style:e<.55?"brick":e<.7?"brickDark":e<.87?"render":e<.96?"whiteRender":"sandstone",ground:d,roof:n<.8?r:Sl(wl.tile,e),flat:!1}}landmarkExtras(t,e,n,i,o){const r=n.length/2;let a=0,l=0;for(let v=0;v<r;v++)a+=n[v*2]/r,l+=n[v*2+1]/r;const c=i-e.h,h=new Vt(1,1,1),d=(v,g)=>{const u=[];for(let M=0;M<4;M++){const x=g+M*Math.PI/2+Math.PI/4;u.push(a+Math.cos(x)*v*Math.SQRT2,l+Math.sin(x)*v*Math.SQRT2)}return u.reverse()};let p=0,f=0;for(let v=0;v<r;v++){const g=(v+1)%r,u=Math.hypot(n[g*2]-n[v*2],n[g*2+1]-n[v*2+1]);u>p&&(p=u,f=Math.atan2(n[g*2+1]-n[v*2+1],n[g*2]-n[v*2]))}const m=(v,g,u)=>{t.curCell=Ys("white",ye.plain);for(let M=0;M<4;M++){const x=(M+1)%4;t.tri([v[M*2],g,v[M*2+1]],[v[x*2],g,v[x*2+1]],[a,g+u,l],o,[a,g,l])}};if(e.t==="shot_tower"){const v=[];for(let g=0;g<r;g++)v.push(a+(n[g*2]-a)*1.12,l+(n[g*2+1]-l)*1.12);this.walls(t,v,i-1.6,i+.4,"tower",ye.plain,h),this.flatRoof(t,v,i+.4,o)}else if(e.t==="town_hall"){const v=d(4.5,f);this.walls(t,v,c,c+40,"gothic",ye.upper,h),m(v,c+40,10)}else if(e.t==="cathedral_main"){const v=d(7,f);this.walls(t,v,c,c+38,"gothic",ye.upper,h),this.flatRoof(t,v,c+38,o);for(let g=0;g<4;g++){const u=v[g*2],M=v[g*2+1],x=[u-.8,M-.8,u-.8,M+.8,u+.8,M+.8,u+.8,M-.8];this.walls(t,x,c+38,c+41,"sandstone",ye.plain,h),t.curCell=Ys("white",ye.plain);for(let _=0;_<4;_++){const T=(_+1)%4;t.tri([x[_*2],c+41,x[_*2+1]],[x[T*2],c+41,x[T*2+1]],[u,c+43.5,M],o,[u,c+41,M])}}}}gableRoof(t,e,n,i,o,r){const a=[0,1,2,3].map(g=>[e[g*2],e[g*2+1]]),l=(g,u)=>Math.hypot(g[0]-u[0],g[1]-u[1]);l(a[0],a[1])<l(a[1],a[2])&&a.push(a.shift());const c=l(a[1],a[2]),h=Math.min(c*.42,4),d=(g,u)=>[(g[0]+u[0])/2,(g[1]+u[1])/2],p=d(a[3],a[0]),f=d(a[1],a[2]),m=(g,u)=>[g[0],u,g[1]],v=[(a[0][0]+a[2][0])/2,n-1,(a[0][1]+a[2][1])/2];t.curCell=Ys("white",ye.plain),t.tri(m(a[0],n),m(a[1],n),m(f,n+h),o,v),t.tri(m(a[0],n),m(f,n+h),m(p,n+h),o,v),t.tri(m(a[2],n),m(a[3],n),m(p,n+h),o,v),t.tri(m(a[2],n),m(p,n+h),m(f,n+h),o,v),t.curCell=Ys(r,ye.plain),t.tri(m(a[1],n),m(a[2],n),m(f,n+h),i,v),t.tri(m(a[3],n),m(a[0],n),m(p,n+h),i,v)}buildRoads(){const t=new Fo,e=new Fo,n=new Fo,i=new Fo,o=new Vt(1,1,1),r=new Vt("#6d635a"),a={footway:0,path:0,cycleway:0,steps:0,track:0,service:1,residential:2,living_street:2,unclassified:2,tertiary:3,secondary:4,primary:5,trunk:6,motorway:6,pedestrian:1},l=new Set(["footway","path","cycleway","steps","track","pedestrian"]),c=new Set(["residential","unclassified","tertiary","secondary","primary","trunk","motorway"]),h=new Set([...c,"service","living_street"]),d=new Set(["tertiary","secondary","primary","trunk"]),p=new Map;for(const u of this.data.roads){if(l.has(u.k))continue;const M=new Set;for(let x=0;x<u.p.length;x+=2)M.add(`${u.p[x]},${u.p[x+1]}`);for(const x of M)p.set(x,(p.get(x)??0)+1)}const f=20,m=new Map;for(const[u,M]of p){if(M<2)continue;const[x,_]=u.split(",").map(Number),T=`${Math.floor(x/f)},${Math.floor(_/f)}`;m.has(T)||m.set(T,[]),m.get(T).push([x,_])}const v=(u,M)=>{let x=1/0;const _=Math.floor(u/f),T=Math.floor(M/f);for(let S=-1;S<=1;S++)for(let w=-1;w<=1;w++)for(const[R,b]of m.get(`${_+S},${T+w}`)??[])x=Math.min(x,Math.hypot(u-R,M-b));return x};for(const u of this.data.roads){const M=l.has(u.k)?n:c.has(u.k)&&u.w>=6?t:e,x=M===t?{plain:e,dist:v,clear:u.w/2+6}:void 0,_=this.ribbon(M,u.p,u.w,o,.05+(a[u.k]??1)*.012,!0,l.has(u.k)?2:6,x,l.has(u.k));_&&h.has(u.k)&&(_.crosses||d.has(u.k))&&this.carPaths.push({pts:_.pts,w:u.w,bridge:_.crosses})}for(const u of this.data.rails)u.skip?this.markLine(u.p,3.5):this.ribbon(i,u.p,4.2,r,.1,!0,4);const g=(u,M,x)=>{const _=new q(u.geometry(),new Yt({map:M,vertexColors:!0,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));_.receiveShadow=!0,_.name=x,this.group.add(_)};for(const u of this.data.junctions??[]){const M=this.route.project(u.x,u.z),x=this.ww.halfWidthAt(M.s);if(M.dist<x+2)continue;const _=(M.dist<x+3.5?this.terrain.bankTop(M.s):this.terrain.landHeight(u.x,u.z,M.s,M.d))+.14;e.curCell=[0,0,0,0];const T=16;for(let S=0;S<T;S++){const w=S/T*Math.PI*2,R=(S+1)/T*Math.PI*2,b=[u.x+Math.cos(w)*u.r,_,u.z+Math.sin(w)*u.r],y=[u.x+Math.cos(R)*u.r,_,u.z+Math.sin(R)*u.r];e.tri([u.x,_,u.z],b,y,o,[u.x,_-5,u.z],[[.5,.5],[.5+Math.cos(w)*.4,.5],[.5+Math.cos(R)*.4,.6]])}}g(t,ua("major"),"roads"),g(e,ua("lane"),"lanes"),g(n,ua("foot"),"footways"),g(i,null,"ballast")}markLine(t,e){for(let n=0;n+3<t.length;n+=2){const i=t[n],o=t[n+1],r=t[n+2],a=t[n+3],l=Math.max(1,Math.ceil(Math.hypot(r-i,a-o)/2));for(let c=0;c<=l;c++)this.occ.mark(i+(r-i)*c/l,o+(a-o)*c/l,e)}}ribbon(t,e,n,i,o,r,a,l,c=!1){const h=[];for(let _=0;_+3<e.length;_+=2){const T=e[_],S=e[_+1],w=e[_+2],R=e[_+3],b=Math.max(1,Math.ceil(Math.hypot(w-T,R-S)/4));for(let y=0;y<b;y++)h.push([T+(w-T)*y/b,S+(R-S)*y/b])}if(h.push([e[e.length-2],e[e.length-1]]),h.length<2)return null;const d=h.map(([_,T])=>this.route.project(_,T));if(c&&d.filter(T=>T.dist<this.ww.halfWidthAt(T.s)+7).length/d.length>.4)return null;const p=d,f=p.map(_=>this.bridges.rampAt(_.s,_.d));let m=!1;for(let _=1;_<p.length;_++)Math.sign(p[_].d)!==Math.sign(p[_-1].d)&&Math.min(p[_].dist,p[_-1].dist)<20&&(f[_].onDeck||f[_-1].onDeck)&&(m=!0);const v=h.map(([_,T],S)=>{const w=p[S],R=this.ww.halfWidthAt(w.s),b=w.dist<R+3.5?this.terrain.bankTop(w.s):this.terrain.landHeight(_,T,w.s,w.d);return(m?Math.max(b,f[S].y):b)+o}),g=n/2,u=h.map((_,T)=>{const S=(N,O)=>{const $=h[O][0]-h[N][0],z=h[O][1]-h[N][1],H=Math.hypot($,z)||1;return[-z/H,$/H]},w=T>0?S(T-1,T):S(T,T+1),R=T<h.length-1?S(T,T+1):w;let b=w[0]+R[0],y=w[1]+R[1];const C=Math.hypot(b,y)||1;b/=C,y/=C;const E=Math.min(2,1/Math.max(.5,b*R[0]+y*R[1]));return[b*E,y*E]});let M=0,x=!1;for(let _=0;_<h.length-1;_++){const T=p[_],S=p[_+1],w=Math.hypot(h[_+1][0]-h[_][0],h[_+1][1]-h[_][1]),R=M/a,b=(M+w)/a;if(M+=w,m&&Math.sign(T.d)!==Math.sign(S.d)&&f[_].onDeck&&(x=!0),(Math.min(T.dist,S.dist)<this.ww.halfWidthAt(T.s)+4||Math.sign(T.d)!==Math.sign(S.d))&&!(f[_].onDeck&&f[_+1].onDeck)||m&&f[_].onDeck&&f[_+1].onDeck)continue;const[C,E]=h[_],[N,O]=h[_+1],[$,z]=u[_],[H,B]=u[_+1],dt=[C-$*g,v[_],E-z*g],vt=[C+$*g,v[_],E+z*g],ct=[N-H*g,v[_+1],O-B*g],Ft=[N+H*g,v[_+1],O+B*g],se=l&&Math.min(l.dist(C,E),l.dist(N,O))<l.clear?l.plain:t;se.tri(dt,vt,Ft,i,[C,v[_]-5,E],[[0,R],[1,R],[1,b]]),se.tri(dt,Ft,ct,i,[C,v[_]-5,E],[[0,R],[1,b],[0,b]]),r&&this.occ.mark(C,E,g+1.5)}return{pts:h.map(([_,T],S)=>[_,v[S],T]),crosses:x}}buildTrees(){const t=Li(1234),e=[],{route:n,ww:i,terrain:o,occ:r}=this,a=(x,_)=>{if(r.used(x,_))return!1;const T=n.project(x,_);return o.nearAqueduct(T.s,25)&&T.dist<14?!1:T.dist>i.halfWidthAt(T.s)+4.2};for(let x=0;x<n.length;x+=5)for(const _ of[-1,1]){if(t()>.6)continue;const T=i.halfWidthAt(x)+4.5+t()*t()*30,[S,w]=n.point(x,T*_);t()<o.urbanAt(S,w)*.85||a(S,w)&&e.push({x:S,z:w,s:.8+t()*.7,kind:t()<.15?1:0})}const l=o.bounds,c=(l.x1-l.x0)*(l.z1-l.z0);for(let x=0;x<c*(o.hasAqueduct?.0016:9e-4);x++){const _=l.x0+t()*(l.x1-l.x0),T=l.z0+t()*(l.z1-l.z0),S=o.parkAt(_,T),w=o.nearAqueduct(n.project(_,T).s,250)?.85:0,R=S?.7:Math.max(w,(1-o.urbanAt(_,T))*.35*Re(.75,.2,Math.abs(Lx(_,T))));t()>R||a(_,T)&&e.push({x:_,z:T,s:.8+t()*.9,kind:t()<.1?1:0})}for(let x=0;x<this.data.trees.length;x+=2)e.push({x:this.data.trees[x],z:this.data.trees[x+1],s:1.1,kind:0});const h=new mn(1,0),d=new qt(.18,.25,1,5);d.translate(0,.5,0);const p=new kn(h,new Yt({roughness:.9,flatShading:!0}),e.length),f=new kn(d,new Yt({color:"#5a4636",roughness:1}),e.length),m=new _e,v=new On,g=new k,u=new k,M=["#4f7a3a","#5d8a40","#3f6b35","#6b9446","#557d3c"].map(x=>new Vt(x));e.forEach((x,_)=>{const T=o.heightAt(x.x,x.z),S=(x.kind===1?9:4.5)*x.s;v.setFromAxisAngle(new k(0,1,0),t()*Math.PI*2),u.set(x.x,T-.2,x.z),g.set(x.s,S*.45,x.s),f.setMatrixAt(_,m.compose(u,v,g)),u.set(x.x,T+S*.45+(x.kind===1?S*.35:S*.3),x.z),x.kind===1?g.set(1.3*x.s,S*.5,1.3*x.s):g.set(2.6*x.s,2.3*x.s,2.6*x.s),p.setMatrixAt(_,m.compose(u,v,g)),p.setColorAt(_,M[Math.floor(t()*M.length)].clone().offsetHSL(0,0,(t()-.5)*.06))}),p.castShadow=f.castShadow=!0,p.receiveShadow=!0,p.name="trees",this.group.add(p,f)}}function Lx(s,t){return Math.sin(s*.011+Math.sin(t*.007)*2)*Math.cos(t*.013+Math.sin(s*.005)*2)}function Dx(s){for(let t=0;t<4;t++){const e=t,n=(t+1)%4,i=(t+2)%4,o=s[n*2]-s[e*2],r=s[n*2+1]-s[e*2+1],a=s[i*2]-s[n*2],l=s[i*2+1]-s[n*2+1],c=(o*a+r*l)/(Math.hypot(o,r)*Math.hypot(a,l)||1);if(Math.abs(c)>.2)return!1}return!0}function ua(s){const n=document.createElement("canvas");n.width=128,n.height=256;const i=n.getContext("2d"),o=Li(s.length*7);if(s==="foot"){i.fillStyle="#b3ad9f",i.fillRect(0,0,128,256);for(let a=0;a<256;a+=64)for(let l=0;l<128;l+=64)i.fillStyle=`hsl(40, 8%, ${62+o()*8}%)`,i.fillRect(l+2,a+2,60,60)}else{i.fillStyle="#4f5256",i.fillRect(0,0,128,256);for(let a=0;a<2500;a++)i.fillStyle=o()<.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.08)",i.fillRect(o()*128,o()*256,2,2);s==="major"&&(i.fillStyle="#e9e7df",i.fillRect(6,0,3,256),i.fillRect(119,0,3,256),i.fillRect(128/2-2,0,4,256*.5))}const r=new Pn(n);return r.colorSpace=Be,r.wrapS=Ei,r.wrapT=fo,r.anisotropy=4,r}const js={brick:new Yt({color:"#8b4a3b",roughness:.9,flatShading:!0}),sandstone:new Yt({color:"#a8654f",roughness:.9,flatShading:!0}),concrete:new Yt({color:"#a39f97",roughness:.85,flatShading:!0}),iron:new Yt({color:"#3d434b",roughness:.6,metalness:.3,flatShading:!0}),coping:new Yt({color:"#c4bba9",roughness:.9,flatShading:!0})},Ix=Rc+.55+2.4,Gu=jn+.55+2.6,Vu=Math.tan(55*Math.PI/180);class Ux{constructor(t,e,n,i){D(this,"group",new bt);D(this,"placed",[]);D(this,"ray",new Sf);D(this,"faded",new Map);const o=[];for(const r of n){const a=o.at(-1);if(a&&a.kind==="rail"&&r.kind==="rail"&&r.s-r.w/2<a.s+a.w/2+6){const l=Math.min(a.s-a.w/2,r.s-r.w/2),c=Math.max(a.s+a.w/2,r.s+r.w/2);o[o.length-1]={...a,s:(l+c)/2,w:c-l}}else o.push(r)}for(const r of o){const a=t.frame(r.s),l=e.levelAt(r.s),c=r.kind==="road"&&r.w<12,h=Math.sin(r.dir),d=Math.cos(r.dir),p=h*a.nx+d*a.nz,f=h*a.tx+d*a.tz,m=Ms.clamp(f/(Math.abs(p)<.001?.001:p),-Vu,Vu),v=jn+8,g=jn+8,u=Math.max(...[-1,1].map(O=>{const[$,z]=t.point(r.s,g*O);return i.landHeight($,z,r.s,g*O)})),M=Math.max(l+(c?4.1:4.6),u+.2),x=new bt;x.position.set(a.x,0,a.z),x.rotation.y=Math.atan2(-a.nz,a.nx);const _=Math.max(r.w+.8,3.2)*Math.sqrt(1+m*m);let T=a.nx+a.tx*m,S=a.nz+a.tz*m;const w=Math.hypot(T,S);T/=w,S/=w;const R=Math.max(1.2,Math.max(r.w+.8,3.2)/2-.4);this.placed.push({data:r,x:a.x,z:a.z,deck:M,halfSpan:v,arch:c,depth:_,tanSkew:m,ax:T,az:S,roadHalf:R});const b=c?kx(v,Ix,l,M):Nx(v,Gu,l,M),y=new _o(b,{depth:_,bevelEnabled:!1,curveSegments:10});y.translate(0,0,-_/2);const C=c?r.w<=3.5?js.sandstone:js.brick:r.kind==="rail"?js.iron:js.concrete,E=new q(y,C);E.castShadow=E.receiveShadow=!0,x.add(E);for(const O of[-1,1]){const $=new q(new Ct(v*2*.92,1,.35),c?js.coping:C);$.position.set(0,M+.5,O*(_/2-.12)),$.castShadow=!0,x.add($)}if(!c)for(const O of[-1,1]){const $=new q(new Ct(1.2,M-l+1.15,_+.3),js.concrete);$.position.set(O*(Gu+.6-.08),(M-1.15+l-2.3)/2,0),x.add($)}if(r.kind==="road"){const O=_/2-.3,$=M+.03,z=new xe;z.setAttribute("position",new te([-v,$,-O,v,$,-O,v,$,O,-v,$,O],3));const H=r.w<=3.5?2:6;z.setAttribute("uv",new te([0,0,0,2*v/H,1,2*v/H,1,0],2)),z.setIndex([0,2,1,0,3,2]),z.computeVertexNormals();const B=new q(z,new Yt({map:ua(r.w<=3.5?"foot":"major"),roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,side:Fe}));B.receiveShadow=!0,x.add(B)}const N=new _e().makeShear(0,-m,0,0,0,0);for(const O of x.children){const $=O;$.updateMatrix(),$.geometry=$.geometry.applyMatrix4($.matrix).applyMatrix4(N),$.position.set(0,0,0),$.rotation.set(0,0,0)}x.traverse(O=>{const $=O;$.isMesh&&($.material=$.material.clone())}),x.name=`bridge:${r.name??r.s}`,this.group.add(x)}}rampAt(t,e){let n=-1/0,i=!1;for(const o of this.placed){if(Math.abs(t-(o.data.s+o.tanSkew*e))>o.depth/2+1)continue;const a=Math.abs(e);a<=o.halfSpan&&(i=!0),!(a>o.halfSpan+30)&&(n=Math.max(n,o.deck-Math.max(0,a-o.halfSpan*.85)/9))}return{y:n,onDeck:i}}updateOcclusion(t,e,n){const i=e.clone().sub(t),o=i.length();this.ray.set(t,i.normalize()),this.ray.far=o;const r=new Set(this.ray.intersectObjects(this.group.children,!0).map(a=>a.object.parent));for(const a of this.group.children){const l=this.faded.get(a)??1,c=r.has(a)?.18:1;if(l===c)continue;const h=l+Math.sign(c-l)*Math.min(Math.abs(c-l),n*4);this.faded.set(a,h),a.traverse(d=>{const p=d.material;p&&(p.transparent=h<1,p.opacity=h,p.depthWrite=h>=1)})}}at(t){return this.placed.find(e=>Math.abs(e.data.s-t)<e.data.w/2+1)}}function kx(s,t,e,n){const i=n-e,o=e-2.2,r=e+Math.max(1.8,i*.4),a=e+Math.max(3.4,i*.8),l=new Ts;l.moveTo(-s,o),l.lineTo(-t,o),l.lineTo(-t,r);const c=14;for(let h=1;h<c;h++){const d=Math.PI-Math.PI*h/c;l.lineTo(Math.cos(d)*t,r+Math.sin(d)*(a-r))}return l.lineTo(t,r),l.lineTo(t,o),l.lineTo(s,o),l.lineTo(s,n),l.lineTo(-s,n),l.closePath(),l}function Nx(s,t,e,n){const i=e-2.2,o=n-1.1,r=new Ts;return r.moveTo(-s,i),r.lineTo(-t,i),r.lineTo(-t,o),r.lineTo(t,o),r.lineTo(t,i),r.lineTo(s,i),r.lineTo(s,n),r.lineTo(-s,n),r.closePath(),r}const Wu=18*Math.PI/180,Ox=wi+.15,ei={gate:new Yt({color:"#1d1c1a",roughness:.8,flatShading:!0}),white:new Yt({color:"#f1efe8",roughness:.7}),gear:new Yt({color:"#2b2f33",roughness:.5,metalness:.5}),rack:new Yt({color:"#c9c3b5",roughness:.4,metalness:.6}),foam:new Rn({color:"#f4f7f2",transparent:!0,opacity:0,depthWrite:!1}),highlight:new Rn({color:"#ffd76a",transparent:!0,opacity:.55,depthWrite:!1})},Ko=220,$u=9.81;let El=null;function Fx(){if(El)return El;const s=document.createElement("canvas");s.width=s.height=32;const t=s.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(235,245,250,0.6)"),e.addColorStop(1,"rgba(235,245,250,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),El=new Pn(s)}function zx(){const s=new Float32Array(Ko*3).fill(-1e4),t=new xe;t.setAttribute("position",new Ye(s,3));const e=new oM(t,new ff({map:Fx(),size:.35,transparent:!0,opacity:.85,depthWrite:!1,color:"#eef6f8"}));return e.frustumCulled=!1,{points:e,pos:s,vel:new Float32Array(Ko*3),life:new Float32Array(Ko),carry:0}}class Bx{constructor(t,e,n){D(this,"group",new bt);D(this,"visuals",[]);D(this,"time",0);this.ww=e;for(const o of e.gates){const r=t.frame(o.s),a=new bt;a.position.set(r.x,0,r.z),a.rotation.y=Math.atan2(r.tx,r.tz);const l=e.bodies[o.above].hi,c=e.bodies[o.below].lo-1.6,h=n.bankTop(o.s),d=l+.4,p=wi/Math.cos(Wu)+.15,f=[],m=[];for(const M of[-1,1]){const x=new bt;x.position.set(M*Ox,0,0);const _=d-c,T=new q(new Ct(p,_,.32),ei.gate);T.position.set(p/2,c+_/2,0),T.castShadow=!0,x.add(T);const S=Math.max(h,d)+.75,w=new q(new Ct(4.6,.32,.32),ei.gate);w.position.set(-2.1,S,0),w.castShadow=!0,x.add(w);const R=new q(new Ct(.7,.34,.34),ei.white);R.position.set(-4.1,S,0),x.add(R);const b=new q(new Ct(.3,S-d+.2,.3),ei.gate);b.position.set(.1,(S+d)/2,0),x.add(b);const y=new q(new Ct(.3,.45,.3),ei.gear);y.position.set(p*.55,d+.22,-.2),x.add(y);const C=new q(new Ct(.08,.9,.08),ei.rack);C.position.set(p*.55,d+.45,-.2),C.userData.y0=C.position.y,x.add(C),m.push(C);const E=new q(new Ct(p,.06,.06),ei.white);E.position.set(p/2,d+.95,-.35),x.add(E),x.scale.x=M<0?1:-1,a.add(x),f.push({pivot:x,sign:M})}const v=new q(new ui(wi*2,5),ei.foam.clone());v.rotation.x=-Math.PI/2,v.position.set(0,0,-2.8),a.add(v);const g=new q(new rr(wi+.6,wi+1,32),ei.highlight);g.rotation.x=-Math.PI/2,g.position.y=h+.08,g.visible=!1,a.add(g);const u=zx();a.add(u.points),this.group.add(a),this.visuals.push({gate:o,leaves:f,racks:m,foam:v,ring:g,root:a,jet:u})}const i=new Map;for(const o of e.gates)o.label==="top gates"&&i.set(o.lockName,o);for(const[o,r]of i){const a=t.frame(r.s+3),l=Hx(o),c=(wi+3.2)*jt;l.position.set(a.x+a.nx*c,n.bankTop(r.s+3),a.z+a.nz*c),l.rotation.y=Math.atan2(jt*a.tz,-jt*a.tx),this.group.add(l)}}setSelected(t){for(const e of this.visuals)e.ring.visible=e.gate===t}update(t){this.time+=t;for(const e of this.visuals){const n=e.gate,i=n.open*n.open*(3-2*n.open);for(const{pivot:a,sign:l}of e.leaves){const c=Wu,h=Math.PI/2;a.rotation.y=(c+(h-c)*i)*l}for(const a of e.racks)a.position.y=a.userData.y0+n.paddle*.55;const o=this.ww.bodies[n.below].level,r=Math.min(1,Math.abs(n.flow)/3);e.foam.position.y=o+.03,e.foam.material.opacity=r*(.55+.15*Math.sin(this.time*9)),e.foam.scale.y=.7+r*.5+.08*Math.sin(this.time*5.3),e.ring.visible&&(e.ring.material.opacity=.4+.25*Math.sin(this.time*4)),this.updateJet(e,r,t)}}updateJet(t,e,n){const i=t.jet,o=t.gate,r=this.ww.bodies[o.above].level,a=this.ww.bodies[o.below].level,l=Math.max(0,r-a),c=e>.02&&l>.05&&o.open<.05;if(!(!c&&i.carry===0&&!i.life.some(h=>h>0))){if(c){const h=Math.min(6,Math.sqrt(2*$u*l))*(.5+.5*Math.min(1,e)),d=Math.min(r-.35,a+.25+l*.35);i.carry+=n*260*Math.min(1,e+.2);for(let p=0;p<Ko&&i.carry>=1;p++){if(i.life[p]>0)continue;i.carry-=1;const f=Math.random()<.5?-1:1;i.pos[p*3]=f*wi*.42+(Math.random()-.5)*.25,i.pos[p*3+1]=d+(Math.random()-.5)*.15,i.pos[p*3+2]=-.25,i.vel[p*3]=(Math.random()-.5)*.6,i.vel[p*3+1]=.3+Math.random()*.5,i.vel[p*3+2]=-h*(.85+Math.random()*.3),i.life[p]=3}i.carry=Math.min(i.carry,4)}else i.carry=0;for(let h=0;h<Ko;h++)i.life[h]<=0||(i.life[h]-=n,i.vel[h*3+1]-=$u*n,i.pos[h*3]+=i.vel[h*3]*n,i.pos[h*3+1]+=i.vel[h*3+1]*n,i.pos[h*3+2]+=i.vel[h*3+2]*n,(i.pos[h*3+1]<a||i.life[h]<=0)&&(i.life[h]=0,i.pos[h*3+1]=-1e4));i.points.geometry.getAttribute("position").needsUpdate=!0}}}function Hx(s){const t=document.createElement("canvas");t.width=512,t.height=128;const e=t.getContext("2d");e.fillStyle="#1e3d2f",e.fillRect(0,0,512,128),e.strokeStyle="#e8d9a8",e.lineWidth=6,e.strokeRect(8,8,496,112),e.fillStyle="#f3ead0",e.font="600 44px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText(s,256,66,470);const n=new Pn(t);n.colorSpace=Be;const i=new bt,o=new q(new ui(2.4,.6),new Yt({map:n,side:Fe}));o.position.y=1.9,i.add(o);for(const r of[-1,1]){const a=new q(new Ct(.1,2.2,.1),ei.white);a.position.set(r,1.1,0),i.add(a)}return i}class ir extends q{constructor(){const t=ir.SkyShader,e=new Pi({name:t.name,uniforms:Jd.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:gn,depthWrite:!1});super(new Ct(1,1,1),e),this.isSky=!0}}ir.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new k},up:{value:new k(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const Xu=new URLSearchParams(location.search).get("fog"),Gx=Xu===null?null:Ee(Number(Xu)||0,0,1);class Vx{constructor(t,e){D(this,"sky",new ir);D(this,"sun",new wf("#fff4e0",3));D(this,"hemi",new yf("#cfe3ff","#5d6b45",.9));D(this,"envScene",new Xc);D(this,"envSky",new ir);D(this,"pmrem");D(this,"envTarget",null);D(this,"lastEnvHour",-99);D(this,"sunDir",new k);D(this,"hour",Number(new URLSearchParams(location.search).get("hour"))||10.5);D(this,"day",1);D(this,"fog",0);D(this,"elapsed",0);this.scene=t,this.sky.scale.setScalar(2e4),this.envSky.scale.setScalar(2e4);for(const o of[this.sky,this.envSky]){const r=o.material.uniforms;r.turbidity.value=5,r.rayleigh.value=1.4,r.mieCoefficient.value=.004,r.mieDirectionalG.value=.82}this.envScene.add(this.envSky),t.add(this.sky,this.sun,this.sun.target,this.hemi),this.pmrem=new yc(e);const n=this.sun.shadow;this.sun.castShadow=!0,n.mapSize.set(2048,2048);const i=n.camera;i.left=i.bottom=-90,i.right=i.top=90,i.near=1,i.far=600,n.bias=-4e-4,n.normalBias=.03,t.fog=new $c("#c9d6dc",300,2400)}get sunElevation(){const t=(this.hour-7)/11.5;return Math.sin(Ee(t,-.15,1.15)*Math.PI)*32-(t<0||t>1?6:0)}get clock(){return(this.day-1)*24+this.hour}skipTo(t){t<=this.hour&&this.day++,this.hour=t}get isNight(){return this.sunElevation<-2}update(t,e){var h;this.hour+=t,this.hour>=24&&(this.hour-=24,this.day++),this.elapsed+=t;const n=Math.max(0,1-Math.abs(this.hour-6.5)/3.5)*.8,i=Math.sin(this.elapsed*.21)*.6+Math.sin(this.elapsed*.53+1.7)*.4;this.fog=Gx??Ee(Math.max(n,Re(.55,.95,i)),0,1);const o=this.scene.fog;o.far=2400*Math.pow(70/2400,this.fog),o.near=o.far*Ms.lerp(.125,0,this.fog);const r=Ms.degToRad(this.sunElevation),a=Ms.degToRad(100+(this.hour-6)/13*160);this.sunDir.setFromSphericalCoords(1,Math.PI/2-r,a);for(const d of[this.sky,this.envSky])d.material.uniforms.sunPosition.value.copy(this.sunDir);const l=Re(-4,8,this.sunElevation),c=1-Re(4,20,this.sunElevation);this.sun.intensity=3.2*Re(-2,6,this.sunElevation),this.sun.color.setHSL(.09,.5+c*.4,.92-c*.18),this.hemi.intensity=.2+l*.7,this.scene.fog.color.setHSL(.56,.18,.12+l*.68),this.sun.position.copy(e).addScaledVector(this.sunDir,300),this.sun.target.position.copy(e),Math.abs(this.hour-this.lastEnvHour)>.25&&(this.lastEnvHour=this.hour,(h=this.envTarget)==null||h.dispose(),this.envTarget=this.pmrem.fromScene(this.envScene,0,1,25e3),this.scene.environment=this.envTarget.texture)}}function Wx(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,l=new xe;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let p=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let p=0;p<s.length;++p){const f=s[p].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=s[p].attributes.position.count}l.setIndex(d)}for(const h in o){const d=qu(o[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in r){const d=r[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<d;++p){const f=[];for(let v=0;v<r[h].length;++v)f.push(r[h][v][p]);const m=qu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function qu(s){let t,e,n,i=-1,o=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Ye(r,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let p=0,f=h.count;p<f;p++)for(let m=0;m<e;m++){const v=h.getComponent(p,m);a.setComponent(p+d,m,v)}}else r.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Di(s,t,e){s.updateMatrixWorld(!0);const n=s.matrixWorld.clone().invert(),i=[],o=new _e;return s.traverse(r=>{const a=r;if(!a.isMesh||e&&!e(a))return;const l=Array.isArray(a.material)?a.material:[a.material];if(l.some(m=>m.map)){t==null||t(a);return}const c=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();c.applyMatrix4(o.multiplyMatrices(n,a.matrixWorld));const h=c.getAttribute("position").count,d=new Float32Array(h*3),p=c.groups.length?c.groups:[{start:0,count:h,materialIndex:0}];for(const m of p){const v=(l[m.materialIndex??0]??l[0]).color;for(let g=m.start;g<Math.min(h,m.start+m.count);g++)d.set([v.r,v.g,v.b],g*3)}const f=new xe;f.setAttribute("position",c.getAttribute("position")),f.setAttribute("normal",c.getAttribute("normal")),f.setAttribute("color",new Ye(d,3)),i.push(f)}),Wx(i)}const Ai=()=>new Yt({vertexColors:!0,roughness:.75,flatShading:!0}),$x=["#f1c6a5","#e3b08f","#c98d68","#9a6542","#6b4229"],Xx=["#2b1d14","#5a3a22","#a0703c","#d9b36c","#8f8f8f","#161616"],qx=["#2d3a55","#1f2328","#6b5a3f","#3d4a3a","#4a4a55"],$o=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400","#34495e","#16a085","#7f8c8d","#e84393","#6d4c41","#1f4d3a"],Yx=["short","short","long","bun","beanie","cap","bald"];function Ji(s,t={}){const e=n=>n[Math.floor(s()*n.length)];return{coat:e($o),trousers:e(qx),skin:e($x),hair:e(Xx),hairStyle:e(Yx),hat:e(["#b03a2e","#2e4a7a","#3d5a3d","#5a4a3a","#d4a017"]),longCoat:s()<.3,...t}}const xi=(s,t=.8)=>new Yt({color:s,roughness:t}),Yu=s=>(s.userData.part="coat",s);function ri(s={}){const t={...Ji(Math.random),...s},e=new bt,n=xi(t.coat,.7),i=xi(t.skin,.6),o=xi(t.trousers,.85),r=xi(t.hair,.9),a=t.longCoat?.62:.86,l=[[.001,a],[t.longCoat?.2:.155,a],[.16,.98],[.165,1.15],[.2,1.36],[.17,1.45],[.075,1.5],[.001,1.5]].map(([S,w])=>new ot(S,w)),c=Yu(new q(new wa(l,12),n));c.scale.z=.72,e.add(c);const h=new q(new qt(.045,.05,.1,8),i);h.position.y=1.54,e.add(h);const d=new q(new qe(.1,14,10),i);d.scale.set(.92,1.1,1),d.position.y=1.67,e.add(d);const p=new q(new li(.018,.045,5),i);p.rotation.x=Math.PI/2,p.position.set(0,1.66,.1),e.add(p);const f=(S,w,R=Math.PI*.55)=>{const b=new q(new qe(S,14,8,0,Math.PI*2,0,R),w);return b.scale.set(.95,1.12,1.03),b.position.y=1.68,b};if(t.hairStyle!=="bald"&&e.add(f(.106,t.hairStyle==="beanie"?xi(t.hat):r,t.hairStyle==="beanie"?Math.PI*.5:Math.PI*.55)),t.hairStyle==="long"){const S=new q(new qt(.1,.11,.26,10,1,!0,Math.PI*.6,Math.PI*.8),r);S.position.y=1.56,S.rotation.y=Math.PI,e.add(S)}else if(t.hairStyle==="bun"){const S=new q(new qe(.05,8,6),r);S.position.set(0,1.74,-.09),e.add(S)}else if(t.hairStyle==="beanie"){const S=new q(new hn(.1,.022,6,14),xi(t.hat));S.rotation.x=Math.PI/2,S.position.y=1.7,e.add(S)}else if(t.hairStyle==="cap"){const S=new q(new qt(.115,.118,.05,12),xi(t.hat));S.position.set(0,1.77,.01),S.rotation.x=-.12;const w=new q(new Ct(.16,.015,.08),xi(t.hat));w.position.set(0,1.76,.12),e.add(S,w)}const m=S=>{const w=new bt;w.position.set(S*.085,.92,0);const R=new q(new qt(.075,.062,.44,8),o);R.position.y=-.22;const b=new bt;b.position.y=-.44;const y=new q(new qt(.062,.05,.42,8),o);y.position.y=-.21;const C=new q(new Ct(.1,.07,.23),xi("#2a2420"));return C.position.set(0,-.44,.04),b.add(y,C),w.add(R,b),e.add(w),{hip:w,knee:b}},{hip:v,knee:g}=m(1),{hip:u,knee:M}=m(-1),x=S=>{const w=new bt;w.position.set(S*.215,1.4,0);const R=Yu(new q(new qt(.052,.042,.58,8),n));R.position.y=-.29;const b=new q(new qe(.042,8,6),i);return b.position.y=-.61,w.add(R,b),w.rotation.z=S*.07,e.add(w),w},_=x(1),T=x(-1);return e.traverse(S=>S.castShadow=!0),{group:e,armL:_,armR:T,legL:v,legR:u,kneeL:g,kneeR:M}}function Yi(s,t,e){t==="wind"?(s.armL.rotation.set(-1.3+Math.sin(e*7)*.45,0,.15),s.armR.rotation.set(-1.3+Math.sin(e*7+Math.PI)*.45,0,-.15)):t==="push"?(s.armL.rotation.set(-1.25,0,.1),s.armR.rotation.set(-1.25,0,-.1)):t==="rest"?(s.armL.rotation.set(0,0,.07),s.armR.rotation.set(0,0,-.07)):t==="wave"?(s.armL.rotation.set(0,0,Math.PI-.4+Math.sin(e*9)*.35),s.armR.rotation.set(0,0,-.07)):(s.armL.rotation.set(0,0,Math.PI-.2+Math.sin(e*14)*.25),s.armR.rotation.set(0,0,-(Math.PI-.2)+Math.sin(e*14+1.5)*.25))}function _a(s,t,e=1){const n=Math.sin(t);s.legL.rotation.x=n*.42*e,s.legR.rotation.x=-n*.42*e,s.kneeL.rotation.x=Math.max(0,-Math.sin(t-.6))*.7*e,s.kneeR.rotation.x=Math.max(0,Math.sin(t-.6))*.7*e,s.armL.rotation.set(-n*.35*e,0,.07),s.armR.rotation.set(n*.35*e,0,-.07)}function Af(s){for(const t of[s.legL,s.legR,s.kneeL,s.kneeR])t.rotation.set(0,0,0)}function Lc(s){s.legL.rotation.set(-1.5,0,.06),s.legR.rotation.set(-1.5,0,-.06),s.kneeL.rotation.x=s.kneeR.rotation.x=1.5,s.armL.rotation.set(-.5,0,.1),s.armR.rotation.set(-.5,0,-.1),s.group.position.y-=.47}function jx(s,t){s.legL.rotation.set(-.95+Math.sin(t)*.45,0,.05),s.legR.rotation.set(-.95-Math.sin(t)*.45,0,-.05),s.kneeL.rotation.x=1.2+Math.cos(t)*.45,s.kneeR.rotation.x=1.2-Math.cos(t)*.45,s.armL.rotation.set(-1,0,.08),s.armR.rotation.set(-1,0,-.08)}const Nn=17.4,Qn=2.08,En=(s,t={})=>new Yt({color:s,roughness:.6,flatShading:!0,...t}),Kx={name:"Chester Rose",cabin:"#1f4d3a",roof:"#7c2f23",length:Nn,crew:!0};function ih(s={}){const{name:t,cabin:e,roof:n,length:i,crew:o,crewStyle:r}={...Kx,...s},a=new bt;a.userData.length=i;const l={hull:En("#18191b",{roughness:.5}),deck:En("#3a3d40",{roughness:.9}),cabin:En(e,{roughness:.45}),roof:En(n,{roughness:.7}),cream:En("#efe3c2"),red:En("#a3291f"),window:En("#1b2730",{roughness:.1,metalness:.4}),brass:En("#c9a24a",{roughness:.25,metalness:.9}),rope:En("#8a6b43",{roughness:1}),black:En("#111111"),pot:En("#9b5a3c"),leaf:En("#4f8a3a"),flower:En("#e04f6a")},c=Qn/2,h=i/2,d=[[-c,-h+.4],[-c*.85,-h+.05],[0,-h],[c*.85,-h+.05],[c,-h+.4],[c,h-3.4],[c*.82,h-1.6],[c*.45,h-.5],[0,h],[-c*.45,h-.5],[-c*.82,h-1.6],[-c,h-3.4]],p=new Ts(d.map(([ht,Lt])=>new ot(ht,-Lt))),f=.62,m=.38,v=new _o(p,{depth:f+m,bevelEnabled:!1});v.rotateX(-Math.PI/2),v.translate(0,-f,0);const g=new q(v,[l.deck,l.hull]);g.castShadow=g.receiveShadow=!0,a.add(g);const u=new _o(p,{depth:.07,bevelEnabled:!1});u.rotateX(-Math.PI/2),u.scale(1.015,1,1.004),u.translate(0,m-.12,0),a.add(new q(u,[l.red,l.red]));const M=-h+2,x=h-3.6,_=x-M,T=(M+x)/2,S=1.22,w=Qn-.24,R=new q(new Ct(w,S,_),l.cabin);R.position.set(0,m+S/2,T),R.castShadow=R.receiveShadow=!0,a.add(R);const b=new q(new Ct(w+.08,.09,_+.08),l.roof);b.position.set(0,m+S+.04,T),b.castShadow=!0,a.add(b);for(const ht of[-1,1]){const Lt=new q(new Ct(.02,.05,_-.3),l.cream);Lt.position.set(ht*(w/2+.005),m+S-.18,T),a.add(Lt);const Kt=Lt.clone();Kt.position.y=m+.18,a.add(Kt);for(let Xt=M+1.6;Xt<x-.6;Xt+=1.45){if(Xt>M+2.6&&Xt<M+4.6)continue;const st=new q(new Ct(.03,.34,.5),l.window);st.position.set(ht*(w/2+.005),m+S*.62,Xt),a.add(st)}const $t=Zx(t);$t.position.set(ht*(w/2+.012),m+S*.55,M+3.6),$t.rotation.y=ht*(Math.PI/2),a.add($t)}for(const[ht,Lt]of[[M-.005,-1],[x+.005,1]]){const Kt=new q(new Ct(.9,.95,.03),l.red);Kt.position.set(0,m+.5,ht),a.add(Kt);const $t=new q(new Ct(.03,.9,.035),l.cream);$t.position.set(0,m+.5,ht+Lt*.005),a.add($t)}const y=new q(Jx(),new Yt({map:Qx(),roughness:.6,side:Fe}));y.position.set(0,m,h-1.5),a.add(y);const C=new q(new Ct(.12,.06,2.1),l.cream);C.position.set(0,m+1.12,h-2.55),C.rotation.x=-.36,a.add(C);const E=new q(new qt(.07,.07,.55,8),l.black);E.position.set(.45,m+S+.3,x-1.4),a.add(E);const N=new q(new qt(.075,.075,.06,8),l.brass);N.position.set(.45,m+S+.5,x-1.4),a.add(N);for(const[ht,Lt]of[[M+2.2,-.35],[M+2.8,-.35],[T+1.5,.3]]){const Kt=new q(new qt(.16,.12,.22,7),l.pot);Kt.position.set(Lt,m+S+.19,ht),a.add(Kt);const $t=new q(new mn(.2,0),l.leaf);$t.position.set(Lt,m+S+.4,ht),a.add($t);const Xt=new q(new mn(.06,0),l.flower);Xt.position.set(Lt+.08,m+S+.55,ht),a.add(Xt)}const O=new q(new qt(.03,.03,4.5,6),l.cream);O.rotation.x=Math.PI/2,O.position.set(-.6,m+S+.12,T-1),a.add(O);const $=new q(new qe(.22,8,6),l.rope);$.scale.set(1,.9,1.3),$.position.set(0,.05,h-.02),a.add($);for(const ht of[-1,1]){const Lt=new q(new qt(.11,.11,.45,8),l.rope);Lt.position.set(ht*(c+.08),.05,2),a.add(Lt)}const z=new q(new qt(.1,.12,.18,10),l.brass);z.rotation.x=Math.PI/2,z.position.set(0,m+.25,h-.35),a.add(z);const H=new BM("#ffe7b0",0,60,.5,.6,1.2);H.position.set(0,m+.3,h-.2),H.target.position.set(0,-.5,h+20),a.add(H,H.target);const B=new bt;B.position.set(0,0,-h-.05);const dt=new q(new Ct(.05,.75,.9),l.hull);dt.position.set(0,-.3,-.45),B.add(dt);const vt=new q(new qt(.04,.04,1.1,6),l.black);vt.position.set(0,.45,0),B.add(vt);const ct=new q(new qt(.025,.035,1.3,6),l.brass);ct.rotation.x=Math.PI/2-.25,ct.position.set(0,1.08,.62),B.add(ct);const Ft=new q(new qe(.05,6,4),l.brass);Ft.position.set(0,1,0),B.add(Ft),a.add(B);const se=ri(r??{coat:"#e8b931",trousers:"#2d3a55",skin:"#e3b08f",hair:"#5a3a22",hairStyle:"cap",hat:"#3d4a3a",longCoat:!1}),tt=se.group;tt.position.set(0,m-.25,-h+.9),o?a.add(tt):a.remove(H,H.target);const ft=new q(new Ct(2.2,1.6,3),new Rn({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}));ft.position.set(0,1,-h+.6),ft.name="tiller-hit";const Rt=new q(new rr(.75,.9,32),new Rn({color:"#ffd76a",transparent:!0,opacity:.6,depthWrite:!1,side:Fe}));return Rt.rotation.x=-Math.PI/2,Rt.position.set(0,m+.02,-h+.55),o&&a.add(ft,Rt),{group:a,rudder:B,steerer:tt,steererPerson:se,headlight:H,tillerHit:ft,tillerHint:Rt}}function Zx(s){const t=document.createElement("canvas");t.width=512,t.height=160;const e=t.getContext("2d");e.fillStyle="#a3291f",e.fillRect(0,0,512,160),e.strokeStyle="#efe3c2",e.lineWidth=8,e.strokeRect(10,10,492,140),e.fillStyle="#f6d36b",e.font="800 64px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#3a120d",e.shadowOffsetX=3,e.shadowOffsetY=3,e.fillText(s,256,84,460);const n=new Pn(t);return n.colorSpace=Be,new q(new ui(1.9,.6),new Yt({map:n,roughness:.5}))}function Jx(){const s=new xe,t=Qn*.42,e=1.15;return s.setAttribute("position",new te([-t,0,0,t,0,0,0,e,0],3)),s.setAttribute("uv",new te([0,0,1,0,.5,1],2)),s.computeVertexNormals(),s}function Qx(){const s=document.createElement("canvas");s.width=s.height=256;const t=s.getContext("2d");t.fillStyle="#1f4d3a",t.fillRect(0,0,256,256),t.fillStyle="#a3291f",t.beginPath(),t.moveTo(128,40),t.lineTo(200,170),t.lineTo(128,240),t.lineTo(56,170),t.closePath(),t.fill(),t.strokeStyle="#f6d36b",t.lineWidth=8,t.stroke();for(const[n,i,o]of[[128,150,"#e04f6a"],[108,175,"#f2efe0"],[148,175,"#e8a43c"]])t.fillStyle=o,t.beginPath(),t.arc(n,i,14,0,Math.PI*2),t.fill();const e=new Pn(s);return e.colorSpace=Be,e}function ty(s){const t=new bt;s.group.updateMatrixWorld(!0);const e=Di(s.group,i=>{const o=i.clone();o.matrixAutoUpdate=!1,o.matrix.copy(i.matrixWorld),t.add(o)}),n=new q(e,Ai());return n.castShadow=n.receiveShadow=!0,t.add(n),t}const Qs=16e3,Tl=Qs*Nn*Nn/12,ey=650,ny=700,iy=7,qr=.3,to=-3,Yn=5,ju=(()=>{const s=Qn/2,t=Nn/2;return[[0,t],[.55,t-.6],[-.55,t-.6],[s,t-3],[-s,t-3],[s,2],[-s,2],[s,-3],[-s,-3],[s*.95,-t+.4],[-s*.95,-t+.4],[0,-t]]})();class sy{constructor(t,e){D(this,"x",0);D(this,"z",0);D(this,"psi",0);D(this,"u",0);D(this,"v",0);D(this,"r",0);D(this,"notch",0);D(this,"thrust",0);D(this,"rudder",0);D(this,"s",0);D(this,"d",0);D(this,"contacts",[]);D(this,"obstacles",[]);D(this,"tethers",[]);D(this,"bowThrust",0);this.route=t,this.ww=e}placeAt(t,e=!0){const n=this.route.frame(t);this.x=n.x,this.z=n.z,this.psi=Math.atan2(n.tx,n.tz)+(e?0:Math.PI),this.s=t,this.u=this.v=this.r=0}get speed(){return Math.hypot(this.u,this.v)}span(){let t=1/0,e=-1/0;for(const[n,i]of ju){const[o,r]=this.toWorld(n,i),a=this.route.project(o,r,this.s);t=Math.min(t,a.s),e=Math.max(e,a.s)}return[t,e]}step(t,e){const n=Ee(e,-1,1),i=n===0?2.2:1.6;this.rudder+=Ee(n-this.rudder,-i*t,i*t);const o=this.notch>=0?this.notch*ey:this.notch*ny;this.thrust+=Ee(o-this.thrust,-2200*t,2200*t);const{u:r,v:a,r:l}=this,c=this.thrust,h=this.rudder*(300*r*Math.abs(r)+.85*Math.max(c,0)),d=c-480*r*Math.abs(r)-250*r,p=-9e3*a*Math.abs(a)-4e3*a+h*.3-this.bowThrust*1700;let f=h*iy-12e4*l-6e5*l*Math.abs(l);c<0&&(f+=.12*c*1.5);const m=this.bowThrust*1700;f+=m*(Nn/2-1),this.u+=(d/Qs-a*l)*t,this.v+=(p/Qs+r*l)*t,this.r+=f/Tl*t,this.psi+=this.r*t;const v=Math.sin(this.psi),g=Math.cos(this.psi);this.x+=(this.u*v-this.v*g)*t,this.z+=(this.u*g+this.v*v)*t,this.contacts.length=0;for(let M=0;M<2;M++)this.resolveContacts(),this.resolveExtras();const u=this.route.project(this.x,this.z,this.s);this.s=u.s,this.d=u.d}toWorld(t,e){const n=Math.sin(this.psi),i=Math.cos(this.psi);return[this.x+e*n-t*i,this.z+e*i+t*n]}resolveContacts(){const{route:t,ww:e}=this,n=e.gates.filter(o=>Math.abs(o.s-this.s)<Nn+6&&e.gateBlocks(o)),i=this.obstacles.filter(o=>Math.abs(o.x-this.x)+Math.abs(o.z-this.z)<45);for(const[o,r]of ju){const[a,l]=this.toWorld(o,r),c=t.project(a,l,this.s),h=t.frame(c.s),d=e.halfWidthAt(c.s)-.05;if(Math.abs(c.d)>d){const p=Math.sign(c.d);this.applyContact(a,l,h.nx*p,h.nz*p,Math.abs(c.d)-d,"bank")}for(const p of n)this.s<p.s&&c.s>p.s-qr?this.applyContact(a,l,h.tx,h.tz,c.s-(p.s-qr),"gate"):this.s>p.s&&c.s<p.s+qr&&this.applyContact(a,l,-h.tx,-h.tz,p.s+qr-c.s,"gate");for(const p of i){const f=a-p.x,m=l-p.z,v=Math.sin(p.psi),g=Math.cos(p.psi),u=f*v+m*g,M=-f*g+m*v,x=p.halfB+.05-Math.abs(M),_=p.halfL+.05-Math.abs(u);if(!(x<=0||_<=0))if(x<_){const T=-Math.sign(M)||1;this.applyContact(a,l,-g*T,v*T,x,"boat",p)}else{const T=-Math.sign(u)||1;this.applyContact(a,l,v*T,g*T,_,"boat",p)}}c.s<2&&this.applyContact(a,l,-h.tx,-h.tz,2-c.s,"bank"),c.s>t.length-2&&this.applyContact(a,l,h.tx,h.tz,c.s-(t.length-2),"bank")}}resolveExtras(){const t=Math.sin(this.psi),e=Math.cos(this.psi),n=Qn/2,i=Nn/2;for(const o of this.obstacles){if(Math.abs(o.x-this.x)+Math.abs(o.z-this.z)>45)continue;const r=Math.sin(o.psi),a=Math.cos(o.psi);for(const[l,c]of[[o.halfB,o.halfL],[-o.halfB,o.halfL],[o.halfB,-o.halfL],[-o.halfB,-o.halfL]]){const h=o.x+c*r-l*a,d=o.z+c*a+l*r,p=h-this.x,f=d-this.z,m=p*t+f*e,v=-p*e+f*t,g=n-Math.abs(v),u=i-.6-Math.abs(m);g<=0||u<=0||(g<u?this.applyContact(h,d,-e*Math.sign(v),t*Math.sign(v),g,"boat",o):this.applyContact(h,d,t*Math.sign(m),e*Math.sign(m),u,"boat",o))}}for(const o of this.tethers){const[r,a]=this.toWorld(o.local[0],o.local[1]),l=r-o.anchor[0],c=a-o.anchor[1],h=Math.hypot(l,c);h>o.length&&this.applyContact(r,a,l/h,c/h,h-o.length,"bank",void 0,!0)}}applyContact(t,e,n,i,o,r,a,l=!1){this.x-=n*o,this.z-=i*o;const c=t-this.x,h=e-this.z,d=Math.sin(this.psi),p=Math.cos(this.psi);let f=this.u*d-this.v*p,m=this.u*p+this.v*d;const v=f+this.r*h,g=m-this.r*c,u=v*n+g*i;if(u<=0)return;const M=h*n-c*i,x=-1.15*u/(1/Qs+M*M/Tl);f+=x*n/Qs,m+=x*i/Qs,this.r+=x*M/Tl,f*=.995,m*=.995,this.u=f*d+m*p,this.v=-f*p+m*d,l||this.contacts.push({impulse:-x,kind:r,obstacle:a})}}const oy={KeyW:"throttleUp",ArrowUp:"throttleUp",KeyS:"throttleDown",ArrowDown:"throttleDown",Space:"neutral",KeyT:"timeFaster",KeyR:"timeSlower",KeyV:"camera",KeyM:"map",KeyH:"help",KeyN:"mute",KeyL:"headlight",KeyF:"moor",KeyG:"clear",KeyB:"horn",KeyC:"cook",KeyQ:"recenter",Enter:"nextTrip",Escape:"declineTrip"};class ry{constructor(){D(this,"held",new Set);D(this,"queue",[]);D(this,"onFirstInput",null);D(this,"touchSteer",0);addEventListener("keydown",t=>{this.onFirstInput&&(this.onFirstInput(),this.onFirstInput=null);const e=oy[t.code];e&&t.preventDefault(),!t.repeat&&(this.held.add(t.code),e&&this.queue.push(e))}),addEventListener("keyup",t=>this.held.delete(t.code)),addEventListener("blur",()=>this.held.clear())}get steer(){const t=this.held.has("KeyA")||this.held.has("ArrowLeft"),e=this.held.has("KeyD")||this.held.has("ArrowRight");return(t?1:0)-(e?1:0)||this.touchSteer}get bowThrust(){return(this.held.has("KeyZ")?1:0)-(this.held.has("KeyX")?1:0)}push(t){this.queue.push(t)}drain(){return this.queue.splice(0)}}const sh=new URLSearchParams(location.search).get("area")==="pontcysyllte"?"pontcysyllte":"chester",ay=[["chester","Chester"],["pontcysyllte","Pontcysyllte Aqueduct"]],An=matchMedia("(pointer: coarse)").matches,Ku=s=>An?s.replace(/ ?\((?:[A-Z]|Enter|Esc)\)/g,""):s,ly={F:"moor",G:"clear"};function Zu(s,t){let e=0;s.addEventListener("pointerdown",n=>{const i=performance.now();if(i-e>350)return void(e=i);e=0,n.preventDefault(),n.stopImmediatePropagation(),t()})}class cy{constructor(t,e,n,i){D(this,"root");D(this,"loc");D(this,"helm");D(this,"lockPanel");D(this,"tip");D(this,"panelGroup",null);D(this,"nopeUntil",0);D(this,"nopeText","");D(this,"nopeGate",-1);D(this,"onGateTap",null);D(this,"toasts");D(this,"help");D(this,"chip");D(this,"trip");D(this,"promptEl");D(this,"summary");D(this,"lastTrip","");D(this,"offer");D(this,"lift");D(this,"tripTapOffers",!1);D(this,"lastPrompt","");D(this,"lastLock","");D(this,"lastHelm","");D(this,"lastLoc","");D(this,"winding",!1);D(this,"act");D(this,"galleyChip");D(this,"galleyCard");D(this,"lastGalley","");D(this,"repChip");D(this,"repHelp");D(this,"lastRep","");D(this,"onSteer",null);D(this,"onNotch",null);D(this,"paintNotch",()=>{});D(this,"speedEl");D(this,"promptKey","");D(this,"lockCollapsed",!1);var r;this.act=e,this.root=t,t.innerHTML=`
      <div class="topleft">
        <div class="pill loc"><div class="head"></div><div class="more"></div></div>
        <div class="pill trip"><div class="head"></div><div class="more"></div></div>
        <div class="pill lift" hidden></div>
      </div>
      <div class="offer card" hidden></div>
      <div class="prompt" hidden></div>
      <div class="summary card" hidden></div>
      <div class="topright">
        <div class="chip"></div>
        <button class="chip galley-chip" aria-label="Galley"></button>
        <button class="chip rep-chip" aria-label="Reputation"><span class="rep-face"></span><span class="rep-num"></span></button>
        <button class="recenter-btn chip" aria-label="Recentre the view"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg></button>
        <button class="map-btn chip" aria-label="Map"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/></svg></button>
      </div>
      <div class="card helm"></div>
      <div class="lock-panel card" hidden></div>
      <div class="toasts"></div>
      <div class="map-wrap"><div class="area-pick"><span>Go to</span>${ay.map(([a,l])=>`<a href="?area=${a}" class="${a===sh?"on":""}">${l}</a>`).join("")}</div></div>
      <div class="help card" hidden>
        <h2>At the tiller</h2>
        <dl>
          <dt><kbd>W</kbd><kbd>S</kbd></dt><dd>Throttle up / down a notch (it stays where you leave it)</dd>
          <dt><kbd>A</kbd><kbd>D</kbd></dt><dd>Steer: bow left / right, or grab the tiller at the back of the boat and drag. The rudder only bites with the engine pushing water past it</dd>
          <dt><kbd>Space</kbd></dt><dd>Neutral</dd>
          <dt><kbd>Z</kbd><kbd>X</kbd></dt><dd>Bow thruster: push the bow left / right. Handy for turning in a winding hole</dd>
          <dt><kbd>T</kbd><kbd>R</kbd></dt><dd>Speed time up / slow it down</dd>
          <dt><kbd>V</kbd></dt><dd>Steerer's view / follow camera (drag to orbit, scroll to zoom)</dd>
          <dt><kbd>F</kbd></dt><dd>Moor up: come alongside the towpath at a crawl, tie the bow line, then the stern. <kbd>F</kbd> again to cast off</dd>
          <dt><kbd>M</kbd> <kbd>L</kbd> <kbd>N</kbd></dt><dd>Map · headlight · mute</dd>
          <dt><kbd>B</kbd></dt><dd>Sound the horn: ducks and swans clear out of your way</dd>
          <dt><kbd>Q</kbd></dt><dd>Recentre the view behind the boat</dd>
          <dt><kbd>C</kbd></dt><dd>Cook a meal (moored, with food in the larder and water in the tank)</dd>
        </dl>
        <h2>Out and about</h2>
        <p>Some locks have <b>volunteer lock-keepers</b>; tap <b>🙋 Volunteers</b> on the lock panel to let them work you through. If rubbish is jammed
        across the canal, moor up nearby and fish it out with the boat hook (<kbd>G</kbd>). <kbd>G</kbd> also loads logs and coal
        from the towpath. Missions start at the green <b>!</b> markers: cruise past one to be offered it. Finished missions
        (and grateful hitchhikers from the pubs) leave things for your roof.</p>
        <h2>Working a lock</h2>
        <p>Gates only open when the water's level on both sides; paddles let water through to level it up. The lock panel shows
        the whole lock and always tells you the <b>next step</b>, with a button under each of your two gates that always shows the next thing to do there. Tap the glowing one.</p>
        <p>Going <b>up</b> a single lock: open the bottom gates, drive in, close them, wind up the top paddles to fill, open the top
        gates, drop the paddles, drive out, close the gates behind you.</p>
        <p>You only ever work the two gates either side of your boat; there's a card for each. At <b>Northgate
        Staircase</b> the three chambers share gates, so each one fills by emptying the chamber above into it. The lock-keeper
        sets the rest of the flight for you and the panel tells you what they're up to.</p>
        <p class="muted">Press <kbd>H</kbd> to close</p>
        <p class="credits">Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap contributors</a> (ODbL).
        Engine sound from <a href="https://commons.wikimedia.org/wiki/File:WWS_Rustondieselengine.ogg" target="_blank" rel="noopener">WWS Rustondieselengine.ogg</a>,
        Wikimedia Commons, CC BY 4.0.</p>
      </div>`,this.loc=t.querySelector(".loc"),this.helm=t.querySelector(".helm"),this.lockPanel=t.querySelector(".lock-panel"),this.toasts=t.querySelector(".toasts"),this.help=t.querySelector(".help"),this.chip=t.querySelector(".chip"),(r=t.querySelector(".map-btn"))==null||r.addEventListener("click",()=>e("map"));const o=t.querySelector(".recenter-btn");o.addEventListener("pointerdown",a=>a.preventDefault()),o.addEventListener("click",()=>e("recenter")),this.galleyChip=t.querySelector(".galley-chip"),this.galleyChip.addEventListener("pointerdown",a=>a.preventDefault()),this.galleyCard=document.createElement("div"),this.galleyCard.className="galley-card card",this.galleyCard.hidden=!0,t.appendChild(this.galleyCard),this.galleyChip.addEventListener("click",()=>{this.galleyCard.hidden=!this.galleyCard.hidden,this.galleyCard.hidden||this.closeOthers("galley")}),this.galleyCard.addEventListener("pointerdown",a=>a.preventDefault()),this.galleyCard.addEventListener("click",a=>{var c;const l=(c=a.target.closest("button"))==null?void 0:c.dataset.act;l==="cook"?e("cook"):l==="repair"?e("repair"):this.galleyCard.hidden=!0}),this.repChip=t.querySelector(".rep-chip"),this.repChip.addEventListener("pointerdown",a=>a.preventDefault()),this.repHelp=document.createElement("div"),this.repHelp.className="rep-help card",this.repHelp.hidden=!0,this.repHelp.innerHTML=`
      <div class="eyebrow">Your reputation on the cut</div>
      <div class="rep-now"></div>
      <p>Boaters, keepers and hitchhikers notice how you handle the boat. Be well thought of and they're kinder to you.</p>
      <div class="rep-cols">
        <div><b class="up">Earns it</b><ul><li>Slowing right down past moored boats</li><li>Giving lifts</li><li>Clearing blockages</li><li>A mission with no bumps or wash</li><li>Passing boats on the right, with a wave</li></ul></div>
        <div><b class="down">Costs it</b><ul><li>Wash rocking moored boats</li><li>Bumping boats, kayaks, gates, the bank</li><li>Speeding (over 4 mph)</li><li>Paddles left up</li><li>Splashing anglers</li><li>Running over ducks and swans (sound the horn!)</li><li>Passing on the wrong side</li><li>Cruising after dark</li></ul></div>
      </div>
      <p class="muted">Tap to close</p>`,t.appendChild(this.repHelp),this.repChip.addEventListener("click",()=>{this.repHelp.hidden=!this.repHelp.hidden,this.repHelp.hidden||this.closeOthers("rep")}),this.repHelp.addEventListener("click",()=>this.repHelp.hidden=!0),this.trip=t.querySelector(".trip"),this.promptEl=t.querySelector(".prompt"),this.summary=t.querySelector(".summary"),this.offer=t.querySelector(".offer"),this.lift=t.querySelector(".pill.lift"),this.offer.addEventListener("click",a=>{var c;const l=(c=a.target.closest("button"))==null?void 0:c.dataset.act;l&&e(l)});for(const a of[this.loc,this.trip])a.addEventListener("pointerdown",l=>l.preventDefault()),a.addEventListener("click",()=>{a===this.trip&&this.tripTapOffers?e("tripOffer"):a.classList.toggle("open")});if(this.summary.addEventListener("click",a=>{a.target.closest("button")&&e("nextTrip")}),this.chip.addEventListener("pointerdown",a=>a.preventDefault()),this.buildHelm(),this.chip.addEventListener("click",a=>{const l=a.target;l.closest(".chip-help")?e("help"):l.closest(".chip-time")&&e("timeCycle")}),An){this.buildSteerPad(t);const a=document.createElement("button");a.className="horn-btn chip",a.setAttribute("aria-label","Horn"),a.innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M3 10v4h3l6 4V6L6 10z"/><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/></svg>',a.addEventListener("pointerdown",l=>{l.preventDefault(),e("horn")}),t.appendChild(a),t.appendChild(this.chip),this.chip.classList.add("chip-dock")}this.promptEl.addEventListener("pointerdown",a=>a.preventDefault()),this.promptEl.addEventListener("click",()=>{const a=ly[this.promptKey];a&&e(a)}),t.appendChild(n),t.querySelector(".map-wrap").appendChild(i),this.lockPanel.addEventListener("pointerdown",a=>a.preventDefault()),this.lockPanel.addEventListener("click",a=>{var d;const l=a.target.closest("button");if(!l)return;if(l.dataset.ui==="collapse"){this.lockCollapsed=!this.lockCollapsed,this.lastLock="";return}const c=l.dataset.g,h=l.dataset.w;c!==void 0&&h&&this.panelGroup?(d=this.onGateTap)==null||d.call(this,this.panelGroup.gates[Number(c)],h):l.dataset.act&&e(l.dataset.act)}),this.tip=document.createElement("div"),this.tip.className="lock-tip",this.tip.hidden=!0,t.appendChild(this.tip),n.addEventListener("click",()=>e("map")),i.addEventListener("click",()=>e("map"))}closeOthers(t){t!=="galley"&&(this.galleyCard.hidden=!0),t!=="rep"&&(this.repHelp.hidden=!0),t!=="help"&&(this.help.hidden=!0),t!=="map"&&this.root.querySelector(".map-wrap.open")&&this.act("map")}toggleHelp(t){this.help.hidden=t===void 0?!this.help.hidden:!t,this.help.hidden||this.closeOthers("help")}setMapOpen(t){t&&this.closeOthers("map"),this.root.querySelector(".map-wrap").classList.toggle("open",t)}toast(t,e="info",n=4200){t=Ku(t);for(const o of this.toasts.children)if(o.textContent===t)return;for(;this.toasts.children.length>=3;)this.toasts.firstElementChild.remove();const i=document.createElement("div");i.className=`toast ${e}`,i.textContent=t,this.toasts.appendChild(i),setTimeout(()=>i.classList.add("out"),n),setTimeout(()=>i.remove(),n+600)}setLocation(t,e,n){const i=t+e+n;i!==this.lastLoc&&(this.lastLoc=i,this.loc.querySelector(".head").innerHTML=`<span class="ico">📍</span>${t.replace(/ Lock\b/g,"")}`,this.loc.querySelector(".more").innerHTML=`<div class="eyebrow">Shropshire Union Canal</div><div>${e}</div><div class="journal">${n}</div>`)}setGalley(t){const e=`${Math.round(t.hunger*20)}|${t.food}|${Math.round(t.water*20)}|${t.canCook}|${Math.round(t.gas*20)}|${Math.round(t.heat*20)}|${Math.round(t.diesel*20)}|${Math.round(t.damage*50)}|${t.repair}|${t.repairNote}`;if(e===this.lastGalley)return;this.lastGalley=e;const n=[t.hunger>.85?"Starving!":t.hunger>.6?"Hungry":"",t.food<=1?"🥫":"",t.water<.25?"💧":"",t.gas<.2?"Gas":"",t.heat<.15?"🔥":"",t.diesel<.15?"⛽":"",t.damage>.5?"🔧":""].filter(Boolean).join(" ");this.galleyChip.innerHTML=`🍽️${n?`<span class="galley-low">${n}</span>`:""}`,this.galleyChip.classList.toggle("warn",!!n);const i=(r,a,l,c)=>`<div class="gb"><span>${r}</span><i><b class="${l?"bad":""}" style="width:${Math.round(a*100)}%"></b></i><em>${c}</em></div>`,o=1-t.hunger;this.galleyCard.innerHTML=`
      <div class="eyebrow">You</div>
      ${i("Fed",o,t.hunger>.6,t.hunger>.85?"starving!":t.hunger>.6?"hungry":t.hunger>.3?"peckish":"full")}
      ${i("Larder",t.food/t.foodMax,t.food<=1,`${t.food} meal${t.food===1?"":"s"}`)}
      <div class="eyebrow galley-sub">The boat</div>
      ${i("Water",t.water,t.water<.25,`${Math.round(t.water*100)}%`)}
      ${i("Gas",t.gas,t.gas<.2,`${Math.floor(t.gas*10+1e-6)} meals`)}
      ${i("Diesel",t.diesel,t.diesel<.15,`${Math.round(t.diesel*100)}%`)}
      ${i("Stove",t.heat,t.heat<.15,t.heat<.02?"cold!":`${Math.max(1,Math.round(t.heat*3.5))} night${Math.round(t.heat*3.5)>1?"s":""}`)}
      ${i("Condition",1-t.damage,t.damage>.5,t.damage<.02?"shipshape":t.damage>.5?"limping":t.damage>.25?"battered":"scuffed")}
      <button class="go" data-act="cook" ${t.canCook?"disabled":""}>🍳 Cook a meal</button>
      <p class="muted">${t.canCook??"Uses a meal from the larder and some water. Takes half an hour."}</p>
      ${t.repair?`<button data-act="repair" ${t.moored?"":"disabled"}>${t.repair}</button><p class="muted">${t.repairNote}</p>`:""}
      <p class="muted">Eat out at canalside pubs and cafés · restock at Tesco and Waitrose · fill the tank at the 💧 water points · diesel, gas, logs and coal off the fuel boat (orange F on the map) or the boatyard, for two meals' worth of grub.</p>`}setRep(t,e,n,i){const o=`${Math.round(t)}|${e}`;o!==this.lastRep&&(this.lastRep=o,this.repChip.querySelector(".rep-face").textContent=n,this.repChip.querySelector(".rep-num").textContent=String(Math.round(t)),this.repChip.classList.toggle("bad",t<0),this.repHelp.querySelector(".rep-now").innerHTML=`<span class="big">${n} ${Math.round(t)}</span> Known as <b>${e}</b>`+(i?`<div class="muted">${i.need} more to be ${i.face} <b>${i.text}</b></div>`:'<div class="muted">As good as it gets!</div>'))}repPulse(t,e){const n=document.createElement("div");n.className=`rep-pop ${t>0?"up":"down"}`,n.textContent=`${t>0?"+":"−"}${Math.abs(t)} ${e}`;const i=this.repChip.getBoundingClientRect(),o=this.repChip.closest("#hud").getBoundingClientRect();n.style.left=`${i.left-o.left+i.width/2}px`,n.style.top=`${i.bottom-o.top+4}px`,this.repChip.closest("#hud").appendChild(n),this.repChip.classList.remove("flash-up","flash-down"),this.repChip.offsetWidth,this.repChip.classList.add(t>0?"flash-up":"flash-down"),setTimeout(()=>n.remove(),2600)}buildSteerPad(t){const e=document.createElement("div");e.className="steer-pad card",e.innerHTML='<span class="arr">‹</span><div class="track"><div class="knob"></div></div><span class="arr">›</span>',t.appendChild(e);const n=e.querySelector(".knob");let i=null;const o=a=>{var l;n.style.transform=`translateX(${-a*40}px)`,(l=this.onSteer)==null||l.call(this,a)};e.addEventListener("pointerdown",a=>{a.preventDefault();const l=e.getBoundingClientRect();i={x:l.left+l.width/2,id:a.pointerId},e.setPointerCapture(a.pointerId),e.classList.add("held"),o(Math.max(-1,Math.min(1,-(a.clientX-i.x)/40)))}),e.addEventListener("pointermove",a=>{i&&a.pointerId===i.id&&o(Math.max(-1,Math.min(1,-(a.clientX-i.x)/40)))});const r=a=>{!i||a.pointerId!==i.id||(i=null,e.classList.remove("held"),o(0))};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r)}buildRail(){const t=[];for(let a=Yn;a>=to;a--)t.push(`<div class="pip ${a>0?"ahead":a<0?"astern":"n"}" data-n="${a}" style="grid-row: ${Yn-a+1}"></div>`);const e=a=>Yn-a+1;t.push(`<span style="grid-row: ${e(Yn)} / ${e(1)+1}">FWD</span>`,`<span style="grid-row: ${e(0)}">N</span>`,`<span style="grid-row: ${e(-1)} / ${e(to)+1}">REV</span>`),this.helm.classList.add("rail-helm"),this.helm.innerHTML=`<div class="spd">0.0</div><div class="unit">mph</div><div class="rail">${t.join("")}</div>`,this.speedEl=this.helm.querySelector(".spd");const n=[...this.helm.querySelectorAll(".pip")];this.paintNotch=a=>n.forEach(l=>l.classList.toggle("on",Number(l.dataset.n)===a));const i=this.helm.querySelector(".rail"),o=a=>{const l=i.getBoundingClientRect(),c=Math.floor((a.clientY-l.top)/l.height*n.length);return Yn-Math.max(0,Math.min(n.length-1,c))};let r=!1;Zu(this.helm,()=>{var a;r=!1,(a=this.onNotch)==null||a.call(this,0)}),i.addEventListener("pointerdown",a=>{var l;a.preventDefault(),r=!0,i.setPointerCapture(a.pointerId),(l=this.onNotch)==null||l.call(this,o(a))}),i.addEventListener("pointermove",a=>{var l;return r&&((l=this.onNotch)==null?void 0:l.call(this,o(a)))}),i.addEventListener("pointerup",()=>r=!1),i.addEventListener("pointercancel",()=>r=!1)}buildHelm(){if(An)return this.buildRail();const t=zi.x,e=zi.y,n=48,i=(f,m)=>{const v=f*Math.PI/180;return[t+Math.sin(v)*m,e-Math.cos(v)*m]},o=(f,m,v)=>{const[g,u]=i(f,v),[M,x]=i(m,v);return`M${g.toFixed(1)},${u.toFixed(1)} A${v},${v} 0 0 1 ${M.toFixed(1)},${x.toFixed(1)}`},r=[];for(let f=to;f<=Yn;f++){const[m,v]=i(f*Ks,n-4),[g,u]=i(f*Ks,n+(f===0?7:4));r.push(`<line x1="${m}" y1="${v}" x2="${g}" y2="${u}" class="${f===0?"tick n":"tick"}"/>`)}const[a,l]=i(0,n+14);this.helm.innerHTML=`
      <svg class="lever" viewBox="0 0 ${zi.w} ${zi.h}" width="${zi.w}" height="${zi.h}">
        <path d="${o(to*Ks,0,n)}" class="band astern"/>
        <path d="${o(0,Yn*Ks,n)}" class="band ahead"/>
        ${r.join("")}
        <text x="${a}" y="${l+3}" class="lbl n">N</text>
        <g class="arm"><line x1="${t}" y1="${e-n+15}" x2="${t}" y2="${e-n+4}"/><circle cx="${t}" cy="${e-n}" r="7.5"/></g>
        <text x="${t}" y="${e-6}" class="spd">0.0</text>
        <text x="${t}" y="${e+5}" class="unit">mph</text>
      </svg>`;const c=this.helm.querySelector(".arm");this.paintNotch=f=>{c.style.transform=`rotate(${f*Ks}deg)`,c.classList.toggle("astern",f<0),c.classList.toggle("neutral",f===0)},this.speedEl=this.helm.querySelector(".spd");const h=this.helm.querySelector("svg"),d=f=>{const m=h.getBoundingClientRect(),v=(f.clientX-m.left)/m.width*zi.w-t,g=(f.clientY-m.top)/m.height*zi.h-e,u=Math.atan2(v,-g)*180/Math.PI;return Math.max(to,Math.min(Yn,Math.round(u/Ks)))};let p=!1;Zu(h,()=>{var f;p=!1,(f=this.onNotch)==null||f.call(this,0)}),h.addEventListener("pointerdown",f=>{var m;f.preventDefault(),p=!0,h.setPointerCapture(f.pointerId),(m=this.onNotch)==null||m.call(this,d(f))}),h.addEventListener("pointermove",f=>{var m;return p&&((m=this.onNotch)==null?void 0:m.call(this,d(f)))}),h.addEventListener("pointerup",()=>p=!1),h.addEventListener("pointercancel",()=>p=!1)}setHelm(t){const e=`${t.notch}|${t.speedMph.toFixed(1)}`;e!==this.lastHelm&&(this.lastHelm=e,this.paintNotch(t.notch),this.speedEl.textContent=t.speedMph.toFixed(1));const n=`<span class="chip-time">${t.clock} · ${t.timeScale}×</span> <span class="chip-help"><kbd>H</kbd> help</span>`;this.chip.innerHTML!==n&&(this.chip.innerHTML=n)}setTrip(t){const e=JSON.stringify(t);if(e===this.lastTrip)return;this.lastTrip=e,this.tripTapOffers=!1,this.trip.hidden=t.state==="none",t.state==="none"&&this.trip.classList.remove("open");const n=t.state==="active"?`<span class="ico">🎯</span>${t.where}`:t.state==="done"?'<span class="ico">✅</span>Mission complete · <kbd>Enter</kbd>':'<span class="ico">🧭</span>Just cruising · tap for a trip';this.trip.querySelector(".head").innerHTML=n,this.trip.querySelector(".more").innerHTML=t.state==="none"?"":`<div class="eyebrow">Mission · ${t.title}</div><div>${t.brief}</div>`,this.trip.classList.toggle("idle",t.state==="none")}showOffer(t,e,n,i="Accept",o="Not now"){this.offer.innerHTML=`
      <div class="eyebrow">${t}</div>
      <div class="title">${e}</div>
      <p>${n}</p>
      <div class="buttons">
        <button data-act="nextTrip" class="go"><kbd>Enter</kbd> ${i}</button>
        <button data-act="declineTrip"><kbd>Esc</kbd> ${o}</button>
      </div>`,this.offer.hidden=!1}setLift(t){this.lift.hidden=!t,t&&(t=Ku(t)),t&&this.lift.textContent!==t&&(this.lift.innerHTML=`<div class="head"><span class="ico">🧑</span>${t}</div>`)}hideOffer(){this.offer.hidden=!0}get offerOpen(){return!this.offer.hidden}setPrompt(t){this.promptKey=(t==null?void 0:t.key)??"";const e=t?`<kbd>${t.key}</kbd> ${t.text}`:"";e!==this.lastPrompt&&(this.lastPrompt=e,this.promptEl.innerHTML=e,this.promptEl.classList.toggle("waiting",!!t&&!t.ready)),this.promptEl.hidden=!t}showSummary(t,e,n){const i=Math.floor(t.hours),o=Math.round((t.hours-i)*60);this.summary.innerHTML=`
      <div class="eyebrow">Mission complete</div>
      <div class="title">Moored at ${e}</div>
      <dl>
        <dt>Time on the water</dt><dd>${i?`${i} h `:""}${o} min</dd>
        <dt>Bumps</dt><dd>${t.bumps}</dd>
        <dt>Boats and anglers upset</dt><dd>${t.rocked}</dd>
        ${t.cleared?`<dt>Blockages cleared</dt><dd>${t.cleared} 🛒</dd>`:""}
      </dl>
      <p>${t.verdict}</p>
      ${n?`<p class="reward">🎁 New for the roof: <b>${n}</b></p>`:""}
      <button><kbd>Enter</kbd> Carry on</button>`,this.summary.hidden=!1}hideSummary(){this.summary.hidden=!0}get isWinding(){return this.winding}nope(t,e){this.panelGroup&&(this.nopeGate=this.panelGroup.gates.indexOf(t),this.nopeText=e,this.nopeUntil=performance.now()+2200,this.lastLock="")}showWorldTip(t,e,n){const i=this.lockPanel.parentElement.getBoundingClientRect();this.tip.textContent!==t&&(this.tip.textContent=t),this.tip.className="lock-tip",this.tip.style.left=`${e-i.left}px`,this.tip.style.top=`${n-i.top}px`,this.tip.hidden=!1}setLockPanel(t,e){const n=e==null?void 0:e.step;if(this.tip.hidden=!0,!e||!n){this.lockPanel.hidden=!0,this.lockPanel.parentElement.classList.remove("in-lock"),this.lastLock="",this.winding=!1,this.panelGroup=null;return}const i=n.group;this.panelGroup=i;const o=n.uphill,r=e.volunteers==="active";this.winding=i.gates.some(y=>y.paddle>0&&y.paddle<1);const a=performance.now()<this.nopeUntil,l=i.bodies.map(y=>t.bodies[y]);let c=1/0,h=-1/0;for(const y of l)c=Math.min(c,y.lo-1.6),h=Math.max(h,y.hi+.6);const d=y=>Math.round((y-c)/(h-c)*100);let p=l.map((y,C)=>C);o||p.reverse();const f=7;let m=0,v=0;if(p.length>f){const y=Math.max(0,p.indexOf(n.boatBody)),C=Math.max(0,Math.min(p.length-f,y-3));m=C,v=p.length-(C+f),p=p.slice(C,C+f)}const g=n.boatBody>=0?(l[n.boatBody].s0+l[n.boatBody].s1)/2:NaN,u=[...n.adjacent].sort((y,C)=>o?y.s-C.s:C.s-y.s),M=y=>u.includes(y)?u.length===2?y===u[0]?"behind":"ahead":Number.isNaN(g)?"here":(y.s-g)*(o?1:-1)>0?"ahead":"behind":"",x=[];m&&x.push(`<div class="dg-more">⋯ +${m}</div>`),p.forEach((y,C)=>{const E=l[y],N=E.kind==="pound"?"canal":i.staircase?E.label.replace("chamber ",""):"lock",O=n.boatBody===y?'<i class="dg-boat"></i>':"";if(x.push(`<div class="dg-body ${E.kind}"><div class="dg-floor" style="height:${d(E.lo-1.6)}%"></div><div class="dg-water" style="height:${d(E.level)}%">${O}</div><span>${N}</span></div>`),C<p.length-1){const $=o?y:y-1,z=i.gates[$],H=M(z),B=[z.open>.5?"open":"shut",z.paddle>.5?"pup":"",H?`mine ${H}`:"dim"].join(" ");x.push(`<div class="dg-gate ${B}"><i class="dg-leaf"></i><i class="dg-pflag"></i>`+(z.paddle>.05?'<i class="dg-flow"></i>':"")+(H?`<i class="dg-tag">${H==="behind"?"B":"A"}</i>`:"")+"</div>")}}),v&&x.push(`<div class="dg-more">+${v} ⋯</div>`);const _={paddlesUp:"Raise paddles",paddlesDown:"Drop paddles",open:"Open gates",close:"Close gates"},T=(y,C)=>n.gate===y&&!n.keeper&&n.action in _?n.action:y.wantOpen?y.wantPaddle?"paddlesDown":C==="ahead"||C==="here"?null:"close":y.wantPaddle?e.levelsMatch(y)&&C!=="behind"?"open":"paddlesDown":C==="behind"?null:e.levelsMatch(y)?"open":"paddlesUp",S=u.map(y=>{const C=M(y),E=i.gates.indexOf(y),N=`${y.open>.97?"Open":y.open>.02?y.wantOpen?"Opening…":"Closing…":"Shut"} · paddles ${y.paddle>.97?"up":y.paddle>.02?y.wantPaddle?"going up":"going down":"down"}`,O=r?null:T(y,C),$=O&&n.gate===y&&!n.keeper&&n.action===O,z=r?'<div class="lc-btn none">Volunteers working</div>':O?`<button class="lc-btn ${$?"guide":""}" data-g="${E}" data-w="${O}" tabindex="-1">${_[O]}</button>`:'<div class="lc-btn none">✓ Done</div>',H=C==="behind"?"◀ Behind":C==="ahead"?"Ahead ▶":"Here";return`<div class="lc ${C} ${a&&E===this.nopeGate?"nope":""}"><div class="lc-where">${H} <b>${hy(y.label)}</b></div><div class="lc-state">${N}</div>${z}</div>`}),w=e.volunteers==="available"?'<button class="lp-volchip" data-act="autopilot" tabindex="-1">Auto</button>':r?'<button class="lp-volchip on" data-act="autopilot" tabindex="-1">Take over</button>':"",R=a?this.nopeText:r?`Volunteers: ${n.text}`:n.text,b=`
      <div class="lp-head"><span class="lp-title">${i.name} ${o?"↑":"↓"}</span>${w}<button class="lp-fold" data-ui="collapse" tabindex="-1" aria-label="${this.lockCollapsed?"Expand":"Collapse"}">${this.lockCollapsed?"▾":"▴"}</button></div>
      ${this.lockCollapsed||r&&An?"":`<div class="dg">${x.join("")}</div>`}
      ${r||this.lockCollapsed?"":`<div class="lc-row">${S.join("")}</div>`}
      ${r&&An?"":`<div class="lp-status ${a?"warn":""}">${R}</div>`}`;b!==this.lastLock&&(this.lastLock=b,this.lockPanel.innerHTML=b),this.lockPanel.hidden=!1,this.lockPanel.parentElement.classList.add("in-lock")}}const hy=s=>s[0].toUpperCase()+s.slice(1),Ks=15,zi={x:62,y:68,w:124,h:76},Ju="canal.installDismissed",Qu="canal.appInstalled";function uy(s){const t=matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches||navigator.standalone;if(!An||t)return;try{if(sessionStorage.getItem(Ju)||localStorage.getItem(Qu))return}catch{}const e=navigator.userAgent,n=/iPhone|iPad|iPod/.test(e)||e.includes("Mac")&&navigator.maxTouchPoints>1,i=/CriOS|EdgiOS/.test(e),o=document.createElement("div");o.className="install card",o.hidden=!0,s.appendChild(o);const r=(c,h=!1,d=!1)=>{o.innerHTML=`
      <div class="eyebrow">Get the app</div>
      <div class="title">Install Canal as an app</div>
      <p>Free, no app store. It runs full screen with no browser bars, works better with touch, and opens from your home screen like any other app.</p>
      ${c}
      <div class="buttons">
        ${h?'<button class="go" data-act="install">Install app</button>':""}
        ${d?'<button data-act="have">I already have it</button>':""}
        <button data-act="later">Not now</button>
      </div>`,o.hidden=!1};let a=null;o.addEventListener("click",async c=>{var d;const h=(d=c.target.closest("button"))==null?void 0:d.dataset.act;if(h==="install"&&a)await a.prompt(),a=null,o.hidden=!0;else if(h==="have"){o.hidden=!0;try{localStorage.setItem(Qu,"1")}catch{}}else if(h==="later"){o.hidden=!0;try{sessionStorage.setItem(Ju,"1")}catch{}}});const l='<svg class="ios-share" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M6 11H5v10h14V11h-1"/></svg>';if(n){const c=i?`Tap Share ${l} in the address bar at the top`:/FxiOS/.test(e)?`Tap the ☰ menu, then Share ${l}`:`Tap <b>•••</b> next to the address bar, then Share ${l} (if you see ${l} already, just tap that)`;r(`<ol>
      <li>${c}</li>
      <li>Scroll down and tap <b>Add to Home Screen</b>, then <b>Add</b></li>
      <li>Open Canal from its new icon on your home screen</li>
    </ol>`,!1,!0)}else addEventListener("beforeinstallprompt",c=>{c.preventDefault(),a=c,r("",!0)}),addEventListener("appinstalled",()=>o.hidden=!0)}const Al="canal.rep",Yr=[[-1/0,"a menace on the cut","😠"],[-40,"a bit of a liability","😟"],[-15,"new on the cut","😐"],[15,"a friendly boat","🙂"],[40,"a courteous boat","😊"],[70,"a canal favourite","🤩"]];class dy{constructor(){D(this,"score",0);D(this,"lastAt",new Map);D(this,"onStanding",null);D(this,"onChange",null);try{this.score=Number(localStorage.getItem(Al))||0}catch{}const t=new URLSearchParams(location.search).get("rep");if(t!==null){this.score=Math.max(-100,Math.min(100,Number(t)||0));try{localStorage.setItem(Al,String(this.score))}catch{}}}get standing(){return Yr.filter(([t])=>this.score>=t).at(-1)[1]}get face(){return Yr.filter(([t])=>this.score>=t).at(-1)[2]}get next(){const t=Yr.find(([e])=>e>this.score);return t?{text:t[1],face:t[2],need:Math.ceil(t[0]-this.score)}:null}atLeast(t){var n;const e=((n=Yr.find(([,i])=>i===t))==null?void 0:n[0])??0;return this.score>=e}change(t,e,n=8){var a,l;const i=performance.now()/1e3;if(i-(this.lastAt.get(e)??-1/0)<n)return;this.lastAt.set(e,i),t>0&&this.score<0&&(t=Math.round(t*(1-this.score/50)));const o=this.standing;this.score=Math.max(-100,Math.min(100,this.score+t));try{localStorage.setItem(Al,String(Math.round(this.score)))}catch{}(a=this.onChange)==null||a.call(this,t,e);const r=this.standing;r!==o&&((l=this.onStanding)==null||l.call(this,r,t>0))}}const Cf=[{boat:"Silver Fox",crew:["Colin","Shaun"]},{boat:"Silver Fox II",crew:["Colin","Shaun"]},{boat:"Alice Grace",crew:["Vanessa"]},{boat:"The Rum Wench",crew:["Heidi"]},{boat:"The Raman Rose",crew:["Adam","Lauren"]},{boat:"Aslan",crew:[]},{boat:"Phyllis May",crew:["Ben","Emily"]},{boat:"Dexter's Star",crew:["Paul","Anthony"]},{boat:"Laura Maisie",crew:["Fran","Rich"]},{boat:"Alice",crew:["Jono"]},{boat:"Naughty Lass",crew:["Robbie"]},{boat:"May Moon",crew:["Laura"]},{boat:"Alba",crew:[]},{boat:"Lazy Daze",crew:["Alan"]},{boat:"Thistle & Rose",crew:["Rozzie","Rob"]},{boat:"Grey Wagtail",crew:["Nick"]},{boat:"Liberty",crew:[]},{boat:"Mary L",crew:["Tim","Sam"]},{boat:"Ganymede",crew:["Jemma"]},{boat:"Lydia",crew:[]},{boat:"Petra",crew:["Dan"]},{boat:"Maggie May",crew:[]},{boat:"Moonshine",crew:[]}],fy=["David","Colin","Shaun","Vanessa","Heidi","Adam","Lauren","Joanna","Victor","Ben","Emily","Josh","Diane","Andy","Paul","Anthony","Fran","Rich","Kris","Andrew","Jono","Annamarie","Kath","Robbie","Laura","Jo","Michael","Gary","Alan","Lorna","Maggie","Ryan","Rozzie","Rob","Nick","Amy","Wes","Matt","Ali","Tim","Sam","James","Jemma","Will","Betty","Joe","Chris","Dan"],td="canal.galley",py=6,da=6,ed=.15,Cl=.1,jr=2;class my{constructor(){D(this,"hunger",.2);D(this,"food",4);D(this,"water",.8);D(this,"gas",.7);D(this,"heat",.6);D(this,"diesel",.7);D(this,"lastMeal",-99);D(this,"saveAt",0);try{const e=JSON.parse(localStorage.getItem(td)??"null");if(e)for(const n of["hunger","food","water","gas","heat","diesel"])typeof e[n]=="number"&&(this[n]=e[n])}catch{}const t=Number(new URLSearchParams(location.search).get("hunger"));t&&(this.hunger=Math.min(1,t))}tick(t,e,n,i){this.hunger=Math.min(1,this.hunger+t/py*(e?1.5:1)),this.water=Math.max(0,this.water-t*.02),n>0&&(this.diesel=Math.max(0,this.diesel-t*(.012+.04*n))),i&&(this.heat=Math.max(0,this.heat-t*.028)),performance.now()>this.saveAt&&(this.saveAt=performance.now()+5e3,this.save())}get hungry(){return this.hunger>.6}get starving(){return this.hunger>.85}get larderLow(){return this.food<=1}get waterLow(){return this.water<.25}get gasLow(){return this.gas<Cl*2}get heatLow(){return this.heat<.15}get dieselLow(){return this.diesel<.15}cannotCook(t){return t?this.food<1?"The larder is bare. Stock up at Tesco or Waitrose, or eat out.":this.water<ed?"Not enough water in the tank to cook. Fill up at a water point.":this.gas<Cl?"The gas bottle is empty. Get a new one off the fuel boat, or eat out.":null:"Moor up first: nobody cooks on the move."}eat(t){this.hunger=0,this.lastMeal=t,this.save()}cook(t){this.food-=1,this.water=Math.max(0,this.water-ed),this.gas=Math.max(0,this.gas-Cl),this.eat(t)}restock(){this.food=da,this.save()}fillWater(){this.water=1,this.save()}wake(t){const e=t-this.lastMeal<14,n=this.heat>.02;return this.hunger=Math.min(1,(e?.3:.75)+(n?0:.15)),this.save(),{fed:e,warm:n}}refuel(){this.diesel=this.gas=this.heat=1,this.save()}payMeals(t){return this.food<t?!1:(this.food-=t,this.save(),!0)}addHeat(t){this.heat=Math.min(1,this.heat+t),this.save()}save(){try{const{hunger:t,food:e,water:n,gas:i,heat:o,diesel:r}=this;localStorage.setItem(td,JSON.stringify({hunger:t,food:e,water:n,gas:i,heat:o,diesel:r}))}catch{}}}const nd="canal.boat",Ma=6e3,id=[{part:"a 13mm socket",shop:"Halfords"},{part:"a replacement fan belt",shop:"Halfords"},{part:"two metres of hose and some jubilee clips",shop:"B&Q"},{part:"a pot of gasket sealant",shop:"Screwfix"},{part:"a tube of silicone and a bag of cable ties",shop:"Toolstation"},{part:"a tin of paint in exactly the right shade of green",shop:"Wickes"},{part:"a pipe fitting nobody's heard of",shop:"the plumbers’ merchant"},{part:"a very specific washer",shop:"Screwfix"}];class gy{constructor(){D(this,"damage",0);D(this,"partsFetched",0);D(this,"needPart",null);try{const e=JSON.parse(localStorage.getItem(nd)??"null");e&&Object.assign(this,e)}catch{}const t=Number(new URLSearchParams(location.search).get("damage"));t&&(this.damage=Math.min(1,t))}get limping(){return this.damage>.5}knock(t){if(t<Ma)return 0;const e=Math.min(.15,.03+(t-Ma)/6e4);return this.damage=Math.min(1,this.damage+e),this.save(),e}attempt(){const t=Math.min(.95,.3+this.partsFetched*.22);return Math.random()<t?(this.damage=Math.max(0,this.damage-.3),this.partsFetched=0,this.needPart=null,this.save(),!0):(this.needPart=id[Math.floor(Math.random()*id.length)],this.save(),!1)}fetched(){this.partsFetched++,this.needPart=null,this.save()}fullRepair(){this.damage=0,this.partsFetched=0,this.needPart=null,this.save()}save(){try{localStorage.setItem(nd,JSON.stringify({damage:this.damage,partsFetched:this.partsFetched,needPart:this.needPart}))}catch{}}}const vy=17,sd=4.2;function _y(s,t,e,n,i){const o=new bt,r=new Yt({color:"#8a6450",roughness:.95,flatShading:!0}),a=new Yt({color:"#2b2f33",roughness:.6,metalness:.4}),l=new Yt({color:"#6e675c",roughness:.9}),c=(u,M=!0)=>(u.castShadow=M,u.receiveShadow=!0,o.add(u),u),h=u=>{const M=s.frame(u);return Math.atan2(M.tx,M.tz)},d=u=>t.bedAt(u)-.15,p=4;for(let u=n;u<i;u+=p){const M=Math.min(p,i-u),x=u+M/2,_=s.frame(x),T=t.halfWidthAt(x),S=t.levelAt(x),w=d(x),R=h(x),b=(O,$,z)=>(z.position.set(_.x+_.nx*O,$,_.z+_.nz*O),z.rotation.y=R,c(z));b(0,w-.15,new q(new Ct(T*2+.5,.3,M+.05),a));const y=S+.25-(w-.3);b(-jt*(T+.12),w-.3+y/2,new q(new Ct(.25,y,M+.05),a));const C=T-.4,E=T+2.1,N=e.bankTop(x);b(jt*(C+E)/2,N-.1,new q(new Ct(E-C,.2,M+.05),l)),b(jt*(T+.12),(w-.3+N)/2,new q(new Ct(.25,N-w+.3,M+.05),a)),b(jt*(E-.05),N+1.05,new q(new Ct(.06,.06,M+.05),a)),b(jt*(E-.05),N+.55,new q(new Ct(.05,.05,M+.05),a)),b(jt*(E-.05),N+.5,new q(new Ct(.06,1,.06),a))}for(const[u,M]of[[n,n+qi],[i-qi,i]])for(let _=u;_<M;_+=4){const T=_+2,S=s.frame(T),w=t.halfWidthAt(T),R=d(T)-.3,b=jt*.9,y=Math.min(...[-1,0,1].map(N=>e.heightAt(S.x+S.nx*N*6,S.z+S.nz*N*6))),C=Math.max(1,R-y+1.5),E=c(new q(new Ct(w*2+3,C,4+.05),r));E.position.set(S.x+S.nx*b,R-C/2,S.z+S.nz*b),E.rotation.y=h(T)}const f=n+qi,m=i-qi,v=Math.max(1,Math.round((m-f)/vy)),g=[];for(let u=0;u<=v;u++)g.push(f+(m-f)*u/v);for(const u of g){const M=s.frame(u),x=d(u)-.3,_=e.heightAt(M.x,M.z),T=Math.max(1,x-_+1.5),S=new qt(Math.SQRT1_2,Math.SQRT1_2*(1+T/45),T,4,1).rotateY(Math.PI/4),w=c(new q(S,r)),R=t.halfWidthAt(u)*2+2.4;w.scale.set(R,1,2.2),w.position.set(M.x+M.nx*jt*.9,x-T/2,M.z+M.nz*jt*.9),w.rotation.y=h(u);const b=c(new q(new Ct(R+.6,.5,2.6),r));b.position.set(w.position.x,x-.25,w.position.z),b.rotation.y=h(u)}for(let u=0;u<v;u++){const M=g[u],x=g[u+1],_=(M+x)/2,T=s.frame(_),S=(x-M)/2,w=t.halfWidthAt(_),R=d(_)-.3;for(const b of[-(w-.2),-(w-.2)/3,(w-.2)/3,w-.2]){const y=c(new q(new hn(S,.22,6,24,Math.PI),a));y.scale.set(1,sd/S,1.6),y.rotation.y=h(_)-Math.PI/2,y.position.set(T.x+T.nx*b,R-sd,T.z+T.nz*b)}}return o}const nn=.5,od=650;class My{constructor(t,e,n,i){D(this,"el");D(this,"bigEl");D(this,"base");D(this,"locks");D(this,"bigOpen",!1);D(this,"dest",null);D(this,"pan",null);D(this,"wasOpen",!1);D(this,"bigTx",{ox:0,oz:0,sk:1,dpr:1});D(this,"dragAt",null);D(this,"onTeleport",null);D(this,"places",[]);D(this,"hazards",[]);D(this,"missionStarts",[]);D(this,"missionStartsFaded",!1);D(this,"water",[]);D(this,"fuelBoat",null);D(this,"liftDest",null);this.b=i;const o=this.base=document.createElement("canvas");o.width=Math.ceil((i.x1-i.x0)*nn),o.height=Math.ceil((i.z1-i.z0)*nn);const r=o.getContext("2d"),a=d=>(d-i.x0)*nn,l=d=>(d-i.z0)*nn,c=(d,p)=>{r.beginPath();for(let f=0;f<d.length;f+=2)(f?r.lineTo:r.moveTo).call(r,a(d[f]),l(d[f+1]));p&&r.closePath()};r.fillStyle="#e5e9d2",r.fillRect(0,0,o.width,o.height),r.fillStyle="#c9dcaa";for(const d of t.parks)c(d.p,!0),r.fill();r.fillStyle="#9cc3d2";for(const d of t.water)c(d.p,!0),r.fill();r.strokeStyle="#9cc3d2",r.lineCap=r.lineJoin="round";for(const d of t.rivers)r.lineWidth=d.w*nn,c(d.p,!1),r.stroke();r.fillStyle="#d2c3ae";for(const d of t.buildings)c(d.p,!0),r.fill();for(const d of[0,1])for(const p of t.roads)p.w<3||(r.strokeStyle=d?"#ffffff":"#b9b2a4",r.lineWidth=p.w*nn+(d?0:1.5),c(p.p,!1),r.stroke());r.strokeStyle="#5b5550",r.lineWidth=1.5,r.setLineDash([4,3]);for(const d of t.rails)c(d.p,!1),r.stroke();r.setLineDash([]),r.strokeStyle="#2f7aa0",r.lineWidth=4,c(t.centreline,!1),r.stroke();const h=new Map;for(const d of n.gates){const p=e.frame(d.s);let f=h.get(d.lockName);f||h.set(d.lockName,f={name:d.lockName,x:0,z:0,gates:[]}),f.gates.push({x:p.x,z:p.z,nx:p.nx,nz:p.nz})}for(const d of h.values())d.x=d.gates.reduce((p,f)=>p+f.x,0)/d.gates.length,d.z=d.gates.reduce((p,f)=>p+f.z,0)/d.gates.length;this.locks=[...h.values()],this.el=document.createElement("canvas"),this.el.className="minimap",this.el.width=this.el.height=440,this.bigEl=document.createElement("canvas"),this.bigEl.className="bigmap",An&&this.enablePan()}enablePan(){const t=this.bigEl;let e=null,n=!1;t.addEventListener("pointerdown",o=>{this.dragAt||(e={x:o.clientX,y:o.clientY,id:o.pointerId},n=!1,t.setPointerCapture(o.pointerId))}),t.addEventListener("pointermove",o=>{if(!e||o.pointerId!==e.id||!this.pan)return;const r=o.clientX-e.x,a=o.clientY-e.y;if(!n&&Math.hypot(r,a)<8)return;n=!0;const l=this.bigTx.dpr;this.pan=[this.pan[0]+r*l,this.pan[1]+a*l],e.x=o.clientX,e.y=o.clientY});const i=()=>e=null;t.addEventListener("pointerup",i),t.addEventListener("pointercancel",i),t.addEventListener("click",o=>{n&&(o.stopImmediatePropagation(),n=!1)},{capture:!0})}draw(t,e,n){const i=this.el.getContext("2d"),o=this.el.width,r=od*nn,a=(t-this.b.x0)*nn-r/2,l=(e-this.b.z0)*nn-r/2;i.fillStyle="#e5e9d2",i.fillRect(0,0,o,o),i.drawImage(this.base,a,l,r,r,0,0,o,o);const c=o/od,h=(d,p)=>[o/2+(d-t)*c,o/2+(p-e)*c];if(this.drawPlaces(i,h,2,!1),this.drawLocks(i,h,2,9),this.drawDestination(i,h,2,o),this.drawDestination(i,h,2,o,this.liftDest,"#5aa0e0","#1d3557"),this.drawWater(i,h,2),this.drawFuelBoat(i,h,2),this.drawHazards(i,h,2),this.drawMissionStarts(i,h,2),this.boatMarker(i,o/2,o/2,n,1.6),this.bigOpen){const d=this.bigEl,p=Math.min(2,devicePixelRatio);d.width=d.clientWidth*p,d.height=d.clientHeight*p;const f=d.getContext("2d"),v=(An?Math.max:Math.min)(d.width/this.base.width,d.height/this.base.height);let g=(d.width-this.base.width*v)/2,u=(d.height-this.base.height*v)/2;if(An){(!this.wasOpen||!this.pan)&&(this.pan=[-((t-this.b.x0)*nn*v+g-d.width/2),-((e-this.b.z0)*nn*v+u-d.height/2)]);const S=Math.max(0,-g),w=Math.max(0,-u);this.pan=[Math.max(-S,Math.min(S,this.pan[0])),Math.max(-w,Math.min(w,this.pan[1]))],g+=this.pan[0],u+=this.pan[1]}f.fillStyle="#e5e9d2",f.fillRect(0,0,d.width,d.height),f.drawImage(this.base,g,u,this.base.width*v,this.base.height*v);const M=nn*v,x=(S,w)=>[g+(S-this.b.x0)*M,u+(w-this.b.z0)*M];this.drawPlaces(f,x,p,!0),this.drawLocks(f,x,p,7),this.drawDestination(f,x,p*1.3,null),this.drawDestination(f,x,p*1.3,null,this.liftDest,"#5aa0e0","#1d3557"),this.drawWater(f,x,p*1.3),this.drawFuelBoat(f,x,p*1.3),this.drawHazards(f,x,p*1.3),this.drawMissionStarts(f,x,p*1.3),this.bigTx={ox:g,oz:u,sk:M,dpr:p};const[_,T]=this.dragAt??x(t,e);this.boatMarker(f,_,T,n,1.4*p),this.onTeleport&&(f.font=`800 ${12*p}px Nunito, sans-serif`,f.fillStyle="#a3291f",f.fillText("DEV: drag the boat to move it",14*p,d.height-14*p))}this.wasOpen=this.bigOpen}enableDevTeleport(t,e){this.onTeleport=e;const n=this.bigEl,i=r=>{const a=n.getBoundingClientRect();return[(r.clientX-a.left)*this.bigTx.dpr,(r.clientY-a.top)*this.bigTx.dpr]};let o=!1;n.addEventListener("pointerdown",r=>{const{ox:a,oz:l,sk:c,dpr:h}=this.bigTx,[d,p]=t(),[f,m]=i(r);Math.hypot(f-(a+(d-this.b.x0)*c),m-(l+(p-this.b.z0)*c))>30*h||(this.dragAt=[f,m],o=!1,n.setPointerCapture(r.pointerId))}),n.addEventListener("pointermove",r=>{this.dragAt&&(this.dragAt=i(r),o=!0)}),n.addEventListener("pointerup",()=>{if(!this.dragAt)return;const{ox:r,oz:a,sk:l}=this.bigTx,[c,h]=this.dragAt;this.dragAt=null,o&&e(this.b.x0+(c-r)/l,this.b.z0+(h-a)/l)}),n.addEventListener("click",r=>{o&&(r.stopImmediatePropagation(),o=!1)},{capture:!0}),n.style.cursor="default"}addMooredBoats(t){const e=this.base.getContext("2d");e.fillStyle="#5b4a8a";for(const n of t)e.save(),e.translate((n.x-this.b.x0)*nn,(n.z-this.b.z0)*nn),e.rotate(-n.psi),e.fillRect(-Math.max(1.2,n.halfB*nn),-n.halfL*nn,Math.max(2.4,n.halfB*2*nn),n.halfL*2*nn),e.restore()}setPlaces(t){this.places=t}drawPlaces(t,e,n,i){t.save(),t.textAlign="center",t.textBaseline="middle";const o=[];for(const r of this.places){const[a,l]=e(r.x,r.z);if(!(a<-20||l<-20||a>t.canvas.width+20||l>t.canvas.height+20)&&(t.fillStyle="rgba(255, 250, 235, 0.95)",t.strokeStyle=r.icon==="★"?"#1d3557":"#6e1f1a",t.lineWidth=1.5*n,t.beginPath(),t.arc(a,l,9*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#1d3557",t.font=`${r.icon==="★"?800:400} ${11*n}px Nunito, sans-serif`,t.fillText(r.icon,a,l+.5*n),i)){t.font=`700 ${10*n}px Nunito, sans-serif`;const c=t.measureText(r.name).width,h=a-c/2,d=l+11*n,p=l+23*n;if(o.some(([f,m,v,g])=>h<v&&h+c>f&&d<g&&p>m))continue;o.push([h-4*n,d,h+c+4*n,p]),t.lineWidth=3*n,t.strokeStyle="rgba(255,255,255,0.9)",t.strokeText(r.name,a,l+17*n),t.fillStyle="#3a2a1a",t.fillText(r.name,a,l+17*n)}}t.restore()}setMissionStarts(t,e=!1){this.missionStarts=t,this.missionStartsFaded=e}drawMissionStarts(t,e,n){t.save(),t.textAlign="center",t.textBaseline="middle",t.globalAlpha=this.missionStartsFaded?.45:1;for(const[i,o]of this.missionStarts){const[r,a]=e(i,o);t.fillStyle="#5ec27a",t.strokeStyle="#1f4d3a",t.lineWidth=2*n,t.beginPath(),t.arc(r,a-12*n,8*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#10261c",t.font=`900 ${11*n}px Nunito, sans-serif`,t.fillText("!",r,a-11.5*n)}t.restore()}drawFuelBoat(t,e,n){if(!this.fuelBoat)return;const[i,o]=e(this.fuelBoat[0],this.fuelBoat[1]);t.save(),t.fillStyle="#e8822c",t.strokeStyle="#ffffff",t.lineWidth=2*n,t.beginPath(),t.arc(i,o,6*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#ffffff",t.font=`800 ${8*n}px Nunito, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("F",i,o+.5*n),t.restore()}setWaterPoints(t){this.water=t}drawWater(t,e,n){t.save(),t.fillStyle="#2f8fd8",t.strokeStyle="#ffffff",t.lineWidth=1.5*n;for(const[i,o]of this.water){const[r,a]=e(i,o);t.beginPath(),t.moveTo(r,a-7*n),t.bezierCurveTo(r+5*n,a-1*n,r+4.5*n,a+5*n,r,a+5*n),t.bezierCurveTo(r-4.5*n,a+5*n,r-5*n,a-1*n,r,a-7*n),t.fill(),t.stroke()}t.restore()}setHazards(t){this.hazards=t}drawHazards(t,e,n){for(const[i,o]of this.hazards)this.drawHazard(t,e(i,o),n)}drawHazard(t,[e,n],i){t.save(),t.fillStyle="#ffcf4a",t.strokeStyle="#7a2f00",t.lineWidth=1.5*i,t.beginPath(),t.moveTo(e,n-10*i),t.lineTo(e+9*i,n+6*i),t.lineTo(e-9*i,n+6*i),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#7a2f00",t.font=`900 ${10*i}px Nunito, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("!",e,n+1*i),t.restore()}clearDestination(){this.dest=null}setDestination(t,e,n){this.dest={x:t,z:e,name:n}}drawDestination(t,e,n,i,o=this.dest,r="#ffcf4a",a="#7a5a10"){if(!o)return;let[l,c]=e(o.x,o.z);if(i!==null){const h=i/2,d=l-h,p=c-h,f=Math.hypot(d,p),m=h-14*n;f>m&&(l=h+d/f*m,c=h+p/f*m)}t.save(),t.fillStyle=r,t.strokeStyle=a,t.lineWidth=1.5*n,t.beginPath(),t.moveTo(l,c),t.lineTo(l,c-18*n),t.stroke(),t.beginPath(),t.moveTo(l,c-18*n),t.lineTo(l+12*n,c-13.5*n),t.lineTo(l,c-9*n),t.closePath(),t.fill(),t.stroke(),t.restore()}drawLocks(t,e,n,i){t.save(),t.lineCap="round";for(const o of this.locks)for(const r of o.gates){const[a,l]=e(r.x,r.z),c=r.nx*i*n,h=r.nz*i*n;for(const[d,p]of[[5,"#ffffff"],[2.5,"#1b1b1b"]])t.strokeStyle=p,t.lineWidth=d*n,t.beginPath(),t.moveTo(a-c,l-h),t.lineTo(a+c,l+h),t.stroke()}t.font=`800 ${12*n}px Nunito, sans-serif`,t.textBaseline="middle";for(const o of this.locks){const[r,a]=e(o.x,o.z),l=o.gates.length>2?`${o.name} · ${o.gates.length-1} locks`:o.name,c=t.measureText(l).width,h=20*n,d=8*n,p=r-c/2-d,f=a-h-12*n;t.fillStyle="rgba(31, 77, 58, 0.94)",t.beginPath(),t.roundRect(p,f,c+d*2,h,h/2),t.fill(),t.beginPath(),t.moveTo(r-5*n,f+h-.5),t.lineTo(r+5*n,f+h-.5),t.lineTo(r,f+h+6*n),t.fill(),t.fillStyle="#f6efdd",t.fillText(l,p+d,f+h/2+n)}t.restore()}boatMarker(t,e,n,i,o){t.save(),t.translate(e,n),t.rotate(-i+Math.PI),t.scale(o,o),t.fillStyle="#a3291f",t.strokeStyle="#fff",t.lineWidth=2,t.beginPath(),t.moveTo(0,-11),t.lineTo(6,8),t.lineTo(0,4),t.lineTo(-6,8),t.closePath(),t.stroke(),t.fill(),t.restore()}}class xy{constructor(){D(this,"ctx",null);D(this,"master");D(this,"noise");D(this,"waterGain");D(this,"rumbleGain");D(this,"nextThump",0);D(this,"engine",null);D(this,"nextBird",0);D(this,"nextClick",0);D(this,"muted",yy())}start(){if(this.ctx)return;const t=this.ctx=new AudioContext;this.master=t.createGain(),this.master.gain.value=this.muted?0:.7,this.master.connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*2,t.sampleRate);const e=this.noise.getChannelData(0);for(let a=0;a<e.length;a++)e[a]=Math.random()*2-1;const n=t.createBufferSource();n.buffer=this.noise,n.loop=!0;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=900,this.waterGain=t.createGain(),this.waterGain.gain.value=0,n.connect(i).connect(this.waterGain).connect(this.master),n.start();const o=t.createBufferSource();o.buffer=this.noise,o.loop=!0;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=160,this.rumbleGain=t.createGain(),this.rumbleGain.gain.value=0,o.connect(r).connect(this.rumbleGain).connect(this.master),o.start(),this.loadEngine().catch(a=>console.warn("Engine samples unavailable, using synth",a))}async loadEngine(){const t=this.ctx,e=async c=>t.decodeAudioData(await(await fetch(c)).arrayBuffer()),[n,i]=await Promise.all([e("./audio/engine-idle.wav"),e("./audio/engine-run.wav")]),o=(c,h)=>{const d=t.createBufferSource();return d.buffer=c,d.loop=!0,d.connect(h),d.start(),d},r=t.createGain(),a=t.createGain();r.gain.value=a.gain.value=0;const l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=2400,r.connect(l),a.connect(l),l.connect(this.master),this.engine={idle:o(n,r),run:o(i,a),idleGain:r,runGain:a}}toggleMute(){this.muted=!this.muted,this.ctx&&(this.master.gain.value=this.muted?0:.7);try{localStorage.setItem("canal.muted",this.muted?"1":"0")}catch{}}update(t,e,n,i){const o=this.ctx;if(!o)return;const r=o.currentTime,a=Math.abs(t);if(this.engine){const l=this.engine,c=Math.min(1,a*.4);l.idleGain.gain.setTargetAtTime((1-c)*.55,r,.25),l.runGain.gain.setTargetAtTime(c*(.45+a*.05),r,.25),l.idle.playbackRate.setTargetAtTime(1+a*.08,r,.4),l.run.playbackRate.setTargetAtTime(.62+Math.max(0,a-1)*.095,r,.4)}else{const l=7+a*1.9;for(this.nextThump<r&&(this.nextThump=r);this.nextThump<r+.1;)this.thump(this.nextThump,.22+a*.035),this.nextThump+=1/l}this.waterGain.gain.setTargetAtTime(Math.min(.35,e*.06),r,.3),n&&r>this.nextClick&&(this.click(r),this.nextClick=r+.13),i&&r>this.nextBird&&(this.nextBird>0&&this.bird(r),this.nextBird=r+4+Math.random()*9)}rumble(t){this.ctx&&this.rumbleGain.gain.setTargetAtTime(t*t*.9,this.ctx.currentTime,.3)}bump(t){const e=this.ctx;if(!e)return;const n=e.currentTime,i=e.createOscillator();i.frequency.setValueAtTime(70,n),i.frequency.exponentialRampToValueAtTime(35,n+.25);const o=e.createGain();o.gain.setValueAtTime(Math.min(.9,t),n),o.gain.exponentialRampToValueAtTime(.001,n+.35),i.connect(o).connect(this.master),i.start(n),i.stop(n+.4)}horn(){const t=this.ctx;if(!t)return;const e=t.currentTime,n=t.createGain();n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.22,e+.04),n.gain.setValueAtTime(.22,e+.7),n.gain.exponentialRampToValueAtTime(1e-4,e+.85);const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=1800,i.connect(n).connect(this.master);for(const o of[311,392]){const r=t.createOscillator();r.type="square",r.frequency.value=o,r.connect(i),r.start(e),r.stop(e+.9)}}quack(){const t=this.ctx;if(!t)return;const e=t.currentTime;for(let n=0;n<2;n++){const i=e+n*.16,o=t.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(520,i),o.frequency.exponentialRampToValueAtTime(330,i+.11);const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=1100,r.Q.value=3;const a=t.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(.25,i+.015),a.gain.exponentialRampToValueAtTime(1e-4,i+.12),o.connect(r).connect(a).connect(this.master),o.start(i),o.stop(i+.13)}}thump(t,e){const n=this.ctx,i=n.createOscillator();i.type="triangle",i.frequency.setValueAtTime(58,t),i.frequency.exponentialRampToValueAtTime(38,t+.08);const o=n.createGain();o.gain.setValueAtTime(e,t),o.gain.exponentialRampToValueAtTime(.001,t+.11),i.connect(o).connect(this.master),i.start(t),i.stop(t+.12);const r=n.createBufferSource();r.buffer=this.noise;const a=n.createBiquadFilter();a.type="bandpass",a.frequency.value=220;const l=n.createGain();l.gain.setValueAtTime(e*.5,t),l.gain.exponentialRampToValueAtTime(.001,t+.06),r.connect(a).connect(l).connect(this.master),r.start(t,Math.random(),.07)}click(t){const e=this.ctx,n=e.createBufferSource();n.buffer=this.noise;const i=e.createBiquadFilter();i.type="highpass",i.frequency.value=2500;const o=e.createGain();o.gain.setValueAtTime(.35,t),o.gain.exponentialRampToValueAtTime(.001,t+.03),n.connect(i).connect(o).connect(this.master),n.start(t,Math.random(),.04)}bird(t){const e=this.ctx,n=2+Math.floor(Math.random()*4),i=2600+Math.random()*1600;for(let o=0;o<n;o++){const r=t+o*(.09+Math.random()*.05),a=e.createOscillator();a.type="sine",a.frequency.setValueAtTime(i,r),a.frequency.exponentialRampToValueAtTime(i*(.7+Math.random()*.6),r+.07);const l=e.createGain();l.gain.setValueAtTime(1e-4,r),l.gain.exponentialRampToValueAtTime(.05,r+.01),l.gain.exponentialRampToValueAtTime(1e-4,r+.08),a.connect(l).connect(this.master),a.start(r),a.stop(r+.1)}}}function yy(){try{return localStorage.getItem("canal.muted")==="1"}catch{return!1}}const Kr=.04,by=90;function rd(s,t,e){const n=Sy(s,t,e);return n!=null&&n.keeper&&(n.text=wy(n)),n}function wy(s){const t=s.gate.label;switch(s.action){case"paddlesUp":return`Lock-keeper: ${s.text.charAt(0).toLowerCase()}${s.text.slice(1).replace(/\.$/,"")}…`;case"paddlesDown":return`Lock-keeper: dropping the ${t} paddles…`;case"close":return`Lock-keeper: closing the ${t}…`;case"open":return`Lock-keeper: opening the ${t}…`;case"wait":return`Lock-keeper: ${s.text.charAt(0).toLowerCase()}${s.text.slice(1)}`;default:return s.text}}function Sy(s,t,e){const[n,i]=t,o=(n+i)/2;let r,a=1/0;for(const _ of s.groups){const T=_.gates[0].s,S=_.gates.at(-1).s,w=e?T-o:o-S,R=o>T-2&&o<S+2,b=R?0:w;(R||w>0&&w<by)&&b<a&&(a=b,r=_)}if(!r){for(const _ of s.groups){const T=_.gates[0].s,S=_.gates.at(-1).s,w=e?o-S:T-o;if(w>0&&w<60){const R=_.gates.find(y=>y.wantPaddle)??_.gates.find(y=>y.wantOpen),b=e?_.gates.at(-1):_.gates[0];if(R)return{group:_,uphill:e,gate:R,boatBody:e?_.bodies.length-1:0,adjacent:[b],keeper:R!==b,action:R.wantPaddle?"paddlesDown":"close",text:R.wantPaddle?`Before you go: drop the paddles on the ${R.label} behind you.`:`Before you go: close the ${R.label} behind you.`}}}return null}const l=r.gates.length-1,c=e?r.gates:[...r.gates].reverse(),d=(e?r.bodies:[...r.bodies].reverse()).map(_=>s.bodies[_]),p=_=>e?_:l+1-_;let f=-1;for(let _=0;_<=l+1;_++){const T=d[_];n>=T.s0-.2&&i<=T.s1+.2&&(f=_)}const m=c.find(_=>_.s>n&&_.s<i),v=f<0?m?[m]:[]:f===l+1?[c[l]]:[c[f-1],c[f]].filter(_=>!!_),g=(_,T,S,w=f)=>({group:r,uphill:e,gate:_,action:T,text:S,boatBody:w<0?-1:p(w),adjacent:v,keeper:!!_&&!v.includes(_)&&T!=="drive"});if(f<0)return g(m??null,"drive","Keep going, nice and slow.");if(f===l+1){const _=r.gates.find(T=>T.wantPaddle)??r.gates.find(T=>T.wantOpen);return _?g(_,_.wantPaddle?"paddlesDown":"close",_.wantPaddle?`You're through! Drop the paddles on the ${_.label} behind you.`:`You're through! Close the ${_.label} behind you.`):null}const u=c[f],M=_=>_.label==="the canal"?_===d[0]?"the canal behind you":"the canal ahead":_.label;if(f>0&&c[f-1].wantOpen)return g(c[f-1],"close",`Close the ${c[f-1].label} behind you.`);if(Math.abs(d[f].level-d[f+1].level)<Kr){for(const _ of r.gates)if(_!==u&&_.wantPaddle)return g(_,"paddlesDown",`Drop the ${_.label} paddles so the water stays put.`)}else{const _=c.find((H,B)=>B!==f&&H.wantOpen);if(_)return g(_,"close",`First close the ${_.label}, or the water will just run away.`);const T=r.gates.filter(H=>H.wantPaddle&&Math.abs(s.bodies[H.below].level-s.bodies[H.above].level)>=Kr),S=T.find(H=>H.paddle>.95&&Math.abs(H.flow)<.001);if(S){const H=s.bodies[S.above];return g(S,"paddlesDown",`${Rl(M(H))} ran dry before the levels matched. Drop these paddles so it can be topped up.`)}if(T.length>1)return g(T[1],"paddlesDown",`One set of paddles at a time: drop the ${T[1].label} paddles.`);if(T.length===1){const H=T[0],B=s.bodies[H.below],dt=s.bodies[H.above],vt=Tf(dt.level-B.level),ct=dt.kind==="pound"?`Filling ${M(B)}`:B.kind==="pound"?`Emptying ${M(dt)}`:`${Rl(M(dt))} → ${M(B)}`;return g(H,"wait",`${ct}… ${vt} to go`)}const w=H=>d[H].kind==="pound"||d[H].level>d[H].hi-Kr,R=H=>d[H].kind==="pound"||d[H].level<d[H].lo+Kr,b=(H,B)=>c[Math.min(H,B)],y=H=>e?H+1:H-1,C=H=>e?H-1:H+1,E=H=>{const B=y(H);return w(B)?[b(H,B),`fill ${M(d[H])} from ${M(d[B])}`]:E(B)},N=H=>{const B=C(H);return R(B)?[b(H,B),`empty ${M(d[H])} into ${M(d[B])}`]:N(B)};let O;if(d[f].kind==="pound"||d[f+1].kind==="pound"){const H=d[f].level>d[f+1].level?d[f]:d[f+1],B=H===d[f]?d[f+1]:d[f];O=[u,H.kind==="pound"?`fill ${M(B)} from ${M(H)}`:`empty ${M(H)} into ${M(B)}`]}else(e?!w(f+1):!R(f+1))?(O=e?E(f+1):N(f+1),O[1]=`first, ${O[1]}`):(e?!R(f):!w(f))?(O=e?N(f):E(f),O[1]=`first, ${O[1]}`):O=[u,`let ${M(d[e?f+1:f])} empty into ${M(d[e?f:f+1])}`];const[$,z]=O;for(const H of r.gates)if(H!==$&&H.wantPaddle)return g(H,"paddlesDown",`Drop the ${H.label} paddles so the water stays put.`);return g($,"paddlesUp",`${Rl(z)}.`)}return u.wantOpen?u.open<.97?g(u,"wait",`The ${u.label} are swinging open…`):u.wantPaddle?g(u,"paddlesDown",`Drop the paddles on the ${u.label}.`):g(u,"drive",`Gates open. Drive ${f+1===l+1?"out of the lock":`into ${M(d[f+1])}`}.`):g(u,"open",`Levels match: open the ${u.label}.`)}const Rl=s=>s.charAt(0).toUpperCase()+s.slice(1),ad=[...Cf.filter((s,t)=>t%2===1).map(s=>s.boat),"Kingfisher","Dunroamin","Willow","Morning Mist","Heron","Bramble","Otter","Lazy Days","Moorhen","Puddle Duck","Wren","Seren","Daisy May","Jubilee","Halcyon","Mallard","Badger","Tilly","Dragonfly","Rosie","Swallow","Nutmeg","Lily Pad","Bluebell","Damselfly","Kestrel","Second Wind","Tortoise","Meander","Sunflower","Jolly Roger","Dormouse","Albatross","Grebe","Primrose","Liberty","Plover","Hedgehog","Elderflower","Coot","Teasel","Old Bill","Marigold","Windrush","Peregrine","Thistle","Snowdrop","Toad Hall","Cobble","Foxglove","Pippin","Salamander","Spindle","Saffron","Sloe"],ld=["#1f4d3a","#7a1f2b","#1d3557","#2e2a4a","#5a3d1e","#2f5d62","#6b2737","#264d2a","#3b4a6b","#8a5a1e"],cd=["#7c2f23","#3a3d40","#d9ccaa","#2b2b2b","#8a7650","#4a5a3a"];class Ey{constructor(t,e,n,i,o,r,a,l){D(this,"group",new bt);D(this,"boats",[]);D(this,"zones");D(this,"highlight");D(this,"marker");D(this,"time",0);D(this,"liftMarker",null);D(this,"stopMarkers",new Map);D(this,"starts",new Map);this.route=t,this.ww=e,this.terrain=n,this.zones=l?l.map(v=>({...v,kind:"visitor"})):[{id:"tower",name:"Tower Wharf",kind:"visitor",s0:o+10,s1:o+55},{id:"city",name:"City moorings, Cow Lane Bridge",kind:"visitor",s0:1150,s1:1215},{id:"hoole",name:"Hoole",kind:"visitor",s0:2050,s1:2110},{id:"christleton",name:"Christleton",kind:"visitor",s0:4345,s1:4400}];const c=(v,g)=>e.gates.every(u=>u.s<v-35||u.s>g+35)&&i.every(u=>u.s<v-u.w/2-12||u.s>g+u.w/2+12)&&e.windingHoles.every(u=>u<v-45||u>g+45)&&this.zones.every(u=>u.s1<v-8||u.s0>g+8)&&e.bodies[e.bodyIndexAt((v+g)/2)].kind==="pound",h=v=>!/drive.?thru/i.test(v.name)||/^Costa/.test(v.name),d=a.filter(v=>v.type==="stop"&&h(v)).map(v=>({...v,name:v.name.replace(/\s*drive.?thru\s*/i,"")})).sort((v,g)=>v.rank-g.rank||v.dist-g.dist);for(const v of d){const g=u=>u==="supermarket";if(!(!g(v.kind)&&this.zones.some(u=>{var M;return u.kind==="stop"&&!g((M=u.poi)==null?void 0:M.kind)&&Math.abs((u.s0+u.s1)/2-v.s)<120})))for(const u of[0,8,-8,16,-16,24,-24,32,-32,45,-45,60,-60]){const M=v.s+u-18,x=v.s+u+18;if(!(M<30||x>t.length-30||!c(M,x))){this.zones.push({id:`stop:${v.name}`,name:v.name,kind:"stop",poi:v,s0:M,s1:x});break}}}for(const v of this.zones)this.buildZone(v);this.highlight=new q(new xe,new Rn({color:"#ffd76a",transparent:!0,opacity:.5,depthWrite:!1})),this.group.add(this.highlight),this.marker=Dc(),this.group.add(this.marker);const p=Li(77),f=(v,g)=>v-g<40||v+g>t.length-40||e.gates.some(u=>Math.abs(u.s-v)<g+35)||i.some(u=>Math.abs(u.s-v)<g+u.w/2+14)||this.zones.some(u=>v+g>u.s0-6&&v-g<u.s1+6)||e.windingHoles.some(u=>Math.abs(u-v)<g+45)||Math.abs(v-r)<g+30||[v-g-15,v,v+g+15].some(u=>n.aqueductCore(u)>0)||e.bodies[e.bodyIndexAt(v)].kind!=="pound";let m=[...ad];for(let v=60;v<t.length-60;){const g=v>o-250&&v<o+220?.85:v>2900&&v<3250?.6:.32,u=15+Math.round(p()*5);if(p()<g&&!f(v+u/2,u/2)){const M=m.splice(Math.floor(p()*m.length),1)[0]??"Narrowboat";m.length||(m=[...ad]),this.addBoat(v+u/2,u,M,p),v+=u+1+p()*3}else v+=6+p()*14}}addBoat(t,e,n,i){const o=this.route.frame(t),a=(this.ww.halfWidthAt(t)-Qn/2-.12)*jt,l=o.x+o.nx*a,c=o.z+o.nz*a,h=Math.atan2(o.tx,o.tz)+(i()<.5?0:Math.PI),d=ih({name:n,length:e,crew:!1,cabin:ld[Math.floor(i()*ld.length)],roof:cd[Math.floor(i()*cd.length)]}),p=ty(d),f=this.ww.levelAt(t);p.position.set(l,f,c),p.rotation.order="YXZ",p.rotation.y=h,this.group.add(p),this.boats.push({x:l,z:c,psi:h,halfL:e/2,halfB:Qn/2,name:n,s:t,group:p,baseY:f,rock:0,rockedAt:-99})}buildZone(t){const e=new Yt({color:"#2a2a2a",metalness:.6,roughness:.4});for(let r=t.s0;r<=t.s1;r+=6){const a=this.ww.halfWidthAt(r),[l,c]=this.route.point(r,(a+.35)*jt),h=new q(new hn(.14,.035,6,12),e);h.position.set(l,this.terrain.bankTop(r)+.07,c),h.rotation.x=Math.PI/2,this.group.add(h)}const n=this.route.frame(t.s0),i=(this.ww.halfWidthAt(t.s0)+2.9)*jt,o=t.kind==="stop"?hd([`Moorings for ${Ry(t.poi)}`,t.name],"#6e1f1a"):hd(["Visitor moorings",t.name]);o.position.set(n.x+n.nx*i,this.terrain.bankTop(t.s0),n.z+n.nz*i),o.rotation.y=Math.atan2(jt*n.tz,-jt*n.tx),this.group.add(o)}setActive(t){if(this.highlight.visible=this.marker.visible=!!t,!t)return;const e=[],n=[];let i=0;for(let c=t.s0;c<=t.s1+.01;c+=1.5,i++){const h=this.ww.halfWidthAt(c),d=this.terrain.bankTop(c)+.06;for(const p of[h-.05,h+.75]){const[f,m]=this.route.point(c,p*jt);e.push(f,d,m)}i>0&&n.push((i-1)*2,(i-1)*2+1,i*2,(i-1)*2+1,i*2+1,i*2)}const o=new xe;o.setAttribute("position",new te(e,3)),o.setIndex(n),this.highlight.material.side=Fe,this.highlight.geometry.dispose(),this.highlight.geometry=o;const r=(t.s0+t.s1)/2,[a,l]=this.route.point(r,(this.ww.halfWidthAt(r)+.4)*jt);this.marker.position.set(a,this.terrain.bankTop(r)+4,l),this.marker.userData.y0=this.marker.position.y}rockBoat(t,e){t.rock=Math.min(.09,Math.max(t.rock,e)),t.rockedAt=this.time,this.popOwner(t,"shake")}popOwner(t,e){if(t.owner)this.time>t.owner.until&&(t.owner.from=this.time),t.owner.until=this.time+5,t.owner.mode=e;else{const n=ri(Ji(Math.random));n.group.position.set(0,-.4,-t.halfL+2.45),t.group.add(n.group),t.owner={person:n,from:this.time,until:this.time+5,mode:e}}}get now(){return this.time}update(t){var e;this.time+=t;for(const n of this.boats){const i=n.owner;if(i){const o=Math.min(1,(this.time-i.from)/.5)*Math.min(1,Math.max(0,(i.until-this.time)/.5));i.person.group.position.y=-.4+o*1,i.person.group.visible=o>.01,Yi(i.person,o>.6?i.mode:"rest",this.time)}n.rock<.001||(n.rock*=Math.exp(-t*.2),n.group.rotation.z=Math.sin(this.time*3.1)*n.rock,n.group.position.y=n.baseY+Math.sin(this.time*2.3)*n.rock*.6)}(e=this.liftMarker)!=null&&e.visible&&(this.liftMarker.position.y=this.liftMarker.userData.y0+Math.sin(this.time*1.6+2)*.25,this.liftMarker.rotation.y+=t*.9);for(const n of this.stopMarkers.values())n.visible&&(n.position.y=n.userData.y0+Math.sin(this.time*1.4+n.position.x)*.2,n.rotation.y+=t*.8);for(const n of this.starts.values())n.visible&&(n.position.y=n.userData.y0+Math.sin(this.time*1.6+1)*.25,n.children[0].rotation.y+=t*.9);this.marker.visible&&(this.marker.position.y=this.marker.userData.y0+Math.sin(this.time*1.6)*.25,this.marker.rotation.y+=t*.9,this.highlight.material.opacity=.35+.2*Math.sin(this.time*3))}setLiftDest(t){if(this.liftMarker||(this.liftMarker=Dc("#5aa0e0","#1d3d6b"),this.group.add(this.liftMarker)),this.liftMarker.visible=!!t,!t)return;const e=(t.s0+t.s1)/2,[n,i]=this.route.point(e,(this.ww.halfWidthAt(e)+.4)*jt);this.liftMarker.position.set(n,this.terrain.bankTop(e)+5.5,i),this.liftMarker.userData.y0=this.liftMarker.position.y}addStopMarker(t){var a;const e=Ay(((a=t.poi)==null?void 0:a.kind)??"pub"),n=Ty(t.name);n.position.y=-.9,e.add(n);const i=(t.s0+t.s1)/2,[o,r]=this.route.point(i,(this.ww.halfWidthAt(i)+1.5)*jt);e.position.set(o,this.terrain.bankTop(i)+3.6,r),e.userData.y0=e.position.y,this.group.add(e),this.stopMarkers.set(t.id,e)}hideStopMarker(t){const e=this.stopMarkers.get(t);e&&(e.visible=!1)}addStart(t){const e=this.zones.find(a=>a.id===t);if(!e||this.starts.has(t))return;const n=Cy(),i=(e.s0+e.s1)/2,[o,r]=this.route.point(i,(this.ww.halfWidthAt(i)+.4)*jt);n.position.set(o,this.terrain.bankTop(i)+4,r),n.userData.y0=n.position.y,this.group.add(n),this.starts.set(t,n)}showStart(t,e){const n=this.starts.get(t);n&&(n.visible=e)}clearAround(t,e,n){for(const i of[...this.boats]){if(Math.abs(i.s-t)>e+i.halfL)continue;this.group.remove(i.group),this.boats.splice(this.boats.indexOf(i),1);const o=n.indexOf(i);o>=0&&n.splice(o,1)}}zoneAt(t){return this.zones.find(e=>t>=e.s0-4&&t<=e.s1+4)}}function Dc(s="#ffcf4a",t="#a07000"){const e=new bt,n=new Yt({color:s,emissive:t,emissiveIntensity:.6,roughness:.4}),i=new q(new Jc(.7,0),n);return i.scale.y=1.5,e.add(i),e}function Ty(s){const t=document.createElement("canvas"),e=t.getContext("2d"),n="800 44px Nunito, sans-serif";e.font=n;const i=Math.ceil(e.measureText(s).width)+48;t.width=i,t.height=76,e.font=n,e.fillStyle="rgba(246, 239, 221, 0.95)",e.strokeStyle="#6e1f1a",e.lineWidth=5,e.beginPath(),e.roundRect(3,3,i-6,70,32),e.fill(),e.stroke(),e.fillStyle="#3a1a14",e.textAlign="center",e.textBaseline="middle",e.fillText(s,i/2,40);const o=new Pn(t);o.colorSpace=Be;const r=new uf(new qc({map:o,depthWrite:!1})),a=.62;return r.scale.set(a*i/76,a,1),r}function Ay(s){const t=new bt,e=(i,o={})=>new Yt({color:i,roughness:.4,emissive:i,emissiveIntensity:.25,...o}),n=(i,o,r=0,a=0,l=0,c=0,h=0)=>{const d=new q(i,o);d.position.set(r,a,l),d.rotation.set(c,0,h),t.add(d)};return s==="cafe"||s==="ice_cream"?(n(new qt(.42,.32,.6,16),e("#f4f1ea"),0,.3),n(new qt(.38,.38,.04,16),e("#6b3f1f"),0,.58),n(new hn(.17,.05,6,12),e("#f4f1ea"),.45,.32,0,0,0),n(new qt(.7,.6,.06,18),e("#f4f1ea"),0,-.02)):s==="supermarket"?(n(new Ct(1.1,.6,.7),e("#2f6fb8"),0,.3),n(new Ct(1,.06,.6),e("#24589a"),0,.58),n(new Kc(.16,.5,4,8),e("#d9a35a"),-.15,.72,0,0,Math.PI/2-.4),n(new qe(.17,10,8),e("#5fae3a"),.3,.7,.05),n(new hn(.45,.04,6,16,Math.PI),e("#24589a"),0,.6)):s==="restaurant"||s==="hotel"?(n(new qt(.75,.6,.08,20),e("#f4f1ea"),0,.3,0,Math.PI/2),n(new Ct(.07,1.2,.03),e("#c9c3b5",{metalness:.6}),-1,.3),n(new Ct(.07,1.2,.03),e("#c9c3b5",{metalness:.6}),1,.3)):(n(new qt(.42,.34,1,16),e("#d9921f",{transparent:!0,opacity:.92}),0,.5),n(new qt(.45,.42,.28,16),e("#fbf6e8"),0,1.12),n(new qe(.3,10,6),e("#fbf6e8"),.1,1.28),n(new hn(.26,.07,8,14),e("#e8dcc0",{transparent:!0,opacity:.85}),.5,.55,0,0,0)),t.scale.setScalar(1.3),t}function Cy(){const s=Dc("#5ec27a","#1f6b3a"),t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");e.fillStyle="#1f4d3a",e.beginPath(),e.arc(64,64,58,0,Math.PI*2),e.fill(),e.fillStyle="#f6efdd",e.font="900 92px Nunito, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("!",64,70);const n=new Pn(t);n.colorSpace=Be;const i=new uf(new qc({map:n,depthWrite:!1}));return i.scale.set(.9,.9,1),i.position.y=1.7,s.add(i),s}function Ry(s){return s.kind==="pub"||s.kind==="bar"?"patrons":s.kind==="hotel"?"guests":"customers"}function hd(s,t="#1d3557"){const e=document.createElement("canvas");e.width=512,e.height=192;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,512,192),n.strokeStyle="#f3ead0",n.lineWidth=6,n.strokeRect(8,8,496,176),n.fillStyle="#f3ead0",n.textAlign="center",n.font="700 34px Nunito, sans-serif",n.fillText(s[0].toUpperCase(),256,70,470),n.font="600 40px Fraunces, Georgia, serif",n.fillText(s[1],256,135,470);const i=new Pn(e);i.colorSpace=Be;const o=new bt,r=new q(new ui(2.2,.82),new Yt({map:i,side:Fe}));r.position.y=1.9,o.add(r);const a=new q(new Ct(.1,2,.1),new Yt({color:"#f1efe8"}));return a.position.y=1,o.add(a),o}const Zr=.9,ud=2,Jr=.45,Py=.45;class Ly{constructor(t,e,n,i){D(this,"group",new bt);D(this,"lines",[]);D(this,"ropeMat",new df({color:"#d8c49a"}));D(this,"pinMat",new Yt({color:"#3a3a3a",metalness:.5,roughness:.5}));D(this,"time",0);this.route=t,this.ww=e,this.terrain=n,this.boat=i}get count(){return this.lines.length}get moored(){return this.lines.length===2}endPoint(t){const e=this.route.frame(this.boat.s);return[((-Math.cos(this.boat.psi)*e.nx+Math.sin(this.boat.psi)*e.nz)*jt>0?1:-1)*Qn*.5,(t==="bow"?1:-1)*(Nn/2-1.3)]}gap(t){const[e,n]=this.boat.toWorld(...this.endPoint(t)),i=this.route.project(e,n,this.boat.s);return{gap:this.ww.halfWidthAt(i.s)-i.d*jt,s:i.s}}blocker(){return this.ww.gates.some(t=>Math.abs(t.s-this.boat.s)<Nn/2+22)?"No mooring on a lock landing. Move along a bit.":this.boat.d*jt<0?"Moor on the towpath side, the bank with the path.":null}prompt(){if(this.moored)return{key:"F",text:"Cast off",ready:!0};const e=["bow","stern"].filter(r=>!this.lines.some(a=>a.end===r)).map(r=>({e:r,...this.gap(r)})),n=e.reduce((r,a)=>a.gap<r.gap?a:r);if(!this.lines.length&&(n.gap>2.5||this.boat.speed>1)||this.blocker()&&!this.lines.length)return null;const i=this.lines.length?ud:Zr,o=e.find(r=>r.gap<i);return o&&this.boat.speed<Jr?{key:"F",text:o.gap>Zr?`Haul the ${o.e} in and tie it`:`Tie the ${o.e} line`,ready:!0}:this.lines.length===1?{key:"F",text:`Untie the ${this.lines[0].end} line to realign`,ready:!0}:this.boat.speed>=Jr?{key:"F",text:"Slow right down to step off",ready:!1}:{key:"F",text:`Bring the ${n.e} in alongside the bank`,ready:!1}}act(){if(this.moored)return this.castOff(),"Lines in, cast off. Off you go!";if(!this.lines.length){const n=this.blocker();if(n)return n}const t=["bow","stern"].filter(n=>!this.lines.some(i=>i.end===n)),e=t.find(n=>this.gap(n).gap<(this.lines.length?ud:Zr));if(this.lines.length===1&&(!e||this.boat.speed>=Jr)){const n=this.lines[0].end;return this.castOff(),`${n==="bow"?"Bow":"Stern"} line untied. Line her up and try again.`}return this.boat.speed>=Jr?"Too quick to step off! Slow right down first.":e?(this.tie(e),this.moored?null:e==="bow"?"Bow line tied. Now the stern: a touch ahead with the tiller pushed away from the bank swings it in on the rope.":"Stern line tied. Now the bow: a touch astern with the tiller towards the bank brings it in."):`Bring the ${t[0]} closer in to the bank first (within a metre).`}tie(t){const e=this.endPoint(t),[n,i]=this.boat.toWorld(...e),o=this.route.project(n,i,this.boat.s),r=this.ww.halfWidthAt(o.s),a=this.route.frame(o.s),l=Math.sin(this.boat.psi)*a.tx+Math.cos(this.boat.psi)*a.tz>=0?1:-1,c=(t==="bow"?1:-1)*l*.8,[h,d]=this.route.point(o.s+c,(r+.8)*jt),p=Math.hypot(.8,.8+.25)+.35,f=this.gap(t).gap>Zr?p:Math.hypot(n-h,i-d)+.35,m={local:e,anchor:[h,d],length:f};this.boat.tethers.push(m);const v=new q(new qt(.03,.03,.5,6),this.pinMat);v.position.set(h,this.terrain.bankTop(o.s)+.2,d),v.rotation.z=.2;const g=new sM(new xe().setFromPoints(new Array(12).fill(0).map(()=>new k)),this.ropeMat);g.frustumCulled=!1;const u=v.position.y-.2,M=new q(new rr(.45,.62,28),new Rn({color:"#e0261b",transparent:!0,opacity:.85,depthWrite:!1,side:Fe}));M.rotation.x=-Math.PI/2,M.position.set(h,u+.04,d);const x=new q(new qt(1.1,1.1,1.6,10),new Rn({visible:!1}));x.position.set(h,u+.8,d),x.userData.mooringEnd=t,this.group.add(v,g,M,x),this.lines.push({end:t,tether:m,pin:v,rope:g,halo:M,hit:x})}castOff(){for(const t of[...this.lines])this.removeLine(t)}removeLine(t){this.group.remove(t.pin,t.rope,t.halo,t.hit),t.rope.geometry.dispose();const e=this.boat.tethers.indexOf(t.tether);e>=0&&this.boat.tethers.splice(e,1),this.lines.splice(this.lines.indexOf(t),1)}get tapTargets(){return this.lines.map(t=>t.hit)}untie(t){const e=this.lines.find(n=>n.end===t);return e?(this.removeLine(e),`${t==="bow"?"Bow":"Stern"} line untied.`):""}update(t,e=0){this.time+=e;const n=.5+.5*Math.sin(this.time*3.5);for(const i of this.lines){i.halo.material.opacity=.65+.3*n,i.halo.scale.setScalar(1+.15*n);const[o,r]=this.boat.toWorld(...i.tether.local),a=new k(o,t+Py,r),l=i.pin.position.clone().setY(i.pin.position.y+.15),h=.08+Math.max(0,i.tether.length-a.distanceTo(l))*.6,d=i.rope.geometry.getAttribute("position");for(let p=0;p<d.count;p++){const f=p/(d.count-1),m=a.clone().lerp(l,f);m.y-=Math.sin(f*Math.PI)*h,d.setXYZ(p,m.x,m.y,m.z)}d.needsUpdate=!0}}}const Si=[{from:"tower",zone:"city",title:"Under the city walls",brief:"Moor at the city moorings by Cow Lane Bridge, in the cutting below the walls."},{from:"city",zone:"hoole",title:"Through Chester",brief:"Moor up at Hoole, past the city bridges. Thirsty? There are canalside pubs on the way (🍺 on the map)."},{from:"hoole",zone:"christleton",title:"Out to the country",brief:"Moor at Christleton for the night, out in the fields past Greenfield Lock."},{from:"christleton",zone:"stop:The Cheshire Cat",title:"Supper at the Cheshire Cat",brief:"Carry on past Christleton Bridge to the Cheshire Cat. Moor up outside for a pub supper, and stay the night if you like."},{from:"stop:The Cheshire Cat",zone:"tower",title:"Back to Tower Wharf",brief:"Bring her down to Tower Wharf, at the foot of the Northgate Staircase."}];class Dy{constructor(t){D(this,"index",0);D(this,"startHour");D(this,"bumps",0);D(this,"rocked",0);D(this,"cleared",0);D(this,"result",null);D(this,"done",new Set);this.startHour=t}get current(){return Si[this.index%Si.length]}complete(t){const e=t-this.startHour,n=this.bumps+this.rocked*2,i=n===0?"Not a ripple out of place. The towpath regulars are impressed.":n<4?"A couple of scrapes, but nothing a cup of tea won’t fix.":"Eventful! The moored boats will be talking about you for a while.";return this.result={trip:this.current,hours:e,bumps:this.bumps,rocked:this.rocked,cleared:this.cleared,verdict:i},this.result}next(t){this.result&&this.done.add(this.index),this.done.size>=Si.length&&this.done.clear(),this.startHour=t,this.bumps=this.rocked=this.cleared=0,this.result=null}choose(t){this.index=t}}const dd=[...Cf.filter((s,t)=>t%2===0),...["Kittiwake","Water Rat","Bumblebee","Mistle Thrush"].map(s=>({boat:s,crew:[]}))],fd=["#27445a","#6a1e2e","#2c5a3f","#4b3a6b","#8a4a12","#1f3d4d"],pd=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400"],Qr=1.5,md=.9;class Iy{constructor(t,e,n,i){D(this,"group",new bt);D(this,"boats",[]);D(this,"events",[]);D(this,"time",0);D(this,"nextSpawn",8);D(this,"blockedAt",()=>[]);D(this,"narrows",[]);D(this,"night",!1);D(this,"fuelDue",!1);D(this,"nameIndex",0);this.route=t,this.ww=e,this.moorings=n,this.player=i}update(t,e){this.time+=t;const n=this.player,i=this.ww.bodies[this.ww.bodyIndexAt(n.s)];if(this.time>this.nextSpawn&&this.boats.length<2&&i.kind==="pound"&&!this.night){this.nextSpawn=this.time+45+Math.random()*60;const o=n.s+e*(230+Math.random()*90),r=Math.min(o,n.s),a=Math.max(o,n.s),l=this.boats.every(c=>Math.abs(c.s-o)>80)&&this.moorings.zoneAt(o)===void 0&&!this.blockedAt().some(c=>c>r-20&&c<a+20);o>i.s0+60&&o<i.s1-60&&l&&this.spawn(o,-e)}for(const o of[...this.boats]){const r=(n.s-o.s)*o.dir>380||Math.abs(n.s-o.s)>520,a=this.ww.bodies[this.ww.bodyIndexAt(o.s)],l=o.dir>0?a.s1-o.s<40:o.s-a.s0<40;if(r||l&&Math.abs(n.s-o.s)>150||a.kind!=="pound"){this.remove(o);continue}this.steer(o,t,e)}}spawn(t,e){const n=this.fuelDue;this.fuelDue=!1;const i=n?{boat:"Ember",crew:[]}:dd[this.nameIndex++%dd.length],o=i.boat,r=ih({name:o,length:n?21:17+Math.round(Math.random()*3),crew:!0,cabin:n?"#1b1b1b":fd[Math.floor(Math.random()*fd.length)],roof:n?"#7c2f23":Math.random()<.5?"#3a3d40":"#7c2f23",crewStyle:Ji(Math.random,{coat:pd[Math.floor(Math.random()*pd.length)]})});n&&r.group.add(Uy(r.group.userData.length)),r.group.rotation.order="YXZ",this.group.add(r.group);const a=r.group.userData.length/2,l={name:o,model:r,s:t,d:0,dir:e,speed:Qr,steerer:i.crew[Math.floor(Math.random()*i.crew.length)],obstacle:{x:0,z:0,psi:0,halfL:a,halfB:Qn/2},pausedUntil:0,waveUntil:0,passed:!1,vd:0,yaw:0,fuel:n};n&&(l.speed=Qr*.7),this.boats.push(l),this.player.obstacles.push(l.obstacle),this.place(l,0)}remove(t){this.group.remove(t.model.group),this.boats.splice(this.boats.indexOf(t),1);const e=this.player.obstacles.indexOf(t.obstacle);e>=0&&this.player.obstacles.splice(e,1)}bumped(t){const e=this.boats.find(n=>n.obstacle===t);!e||this.time<e.pausedUntil||(e.pausedUntil=this.time+1.5,e.slowUntil=this.time+8,e.speed*=.4,e.waveUntil=this.time+3,this.events.push({kind:"bumped",boat:e}))}hold(t,e){t.pausedUntil=this.time+e,t.speed=Math.min(t.speed,.3)}narrowsBusy(t,e,n,i){const[o,r]=t,a=l=>l>o-4&&l<r+4;return a(this.player.s)&&n!==e?!0:this.boats.some(l=>l!==i&&l.dir!==e&&a(l.s))}steer(t,e,n){const i=this.player,o=this.ww.halfWidthAt(t.s),r=(i.s-t.s)*t.dir,a=n!==t.dir;let l=t.fuel?Qr*.7:Qr;const c=this.moorings.boats.some(u=>Math.abs(u.s-t.s)<u.halfL+12);c&&(l=md),r>0&&r<45&&(l=Math.min(l,a?.7:.4)),r>0&&r<22&&!a&&(l=0),r>0&&r<34&&Math.abs(i.d-t.d)<Qn+.7&&(t.clashUntil=this.time+4);const h=this.time<(t.clashUntil??0);h&&(l=0);for(const u of this.blockedAt()){const M=(u-t.s)*t.dir-t.obstacle.halfL;M>-2&&M<30&&(l=Math.min(l,M<5?0:.4))}for(const u of this.narrows){const x=((t.dir>0?u[0]:u[1])-t.s)*t.dir-t.obstacle.halfL,_=t.s>u[0]&&t.s<u[1];!_&&x>-1&&x<45&&this.narrowsBusy(u,t.dir,n,t)&&(l=Math.min(l,x<10?0:.4),!t.waitedNarrows&&t.speed<.3&&(t.waitedNarrows=!0,this.events.push({kind:"waitingAqueduct",boat:t}))),t.wasInNarrows&&!_&&this.events.push({kind:"offAqueduct",boat:t}),t.wasInNarrows=_}this.time<(t.slowUntil??0)&&(l=Math.min(l,md)),this.time<t.pausedUntil&&(l=0),t.speed+=Ee(l-t.speed,-.9*e,.3*e);const d=t.dir;let p=r>-20&&r<110&&a?d*(h?o:1.8):0;const f=c?o-Qn-1.6:o-1.6;p=Ee(p,-(o-1.6),f),this.time<t.pausedUntil&&(p=t.targetD??t.d),t.targetD??(t.targetD=t.d),t.targetD+=Ee(p-t.targetD,-.35*e,.35*e),p=t.targetD;const m=.08+t.speed*.25,v=Ee((p-t.d)*.4,-m,m);t.vd+=Ee(v-t.vd,-.15*e,.15*e),t.d+=t.vd*e;const g=-t.dir*Math.atan2(t.vd,Math.max(.4,t.speed));if(t.yaw+=(g-t.yaw)*Math.min(1,e*1.5),t.s+=t.dir*t.speed*e,this.place(t,e),!t.passed&&a&&Math.abs(i.s-t.s)<4){t.passed=!0;const u=(i.d-t.d)*d<0;t.waveUntil=this.time+3.5,this.events.push({kind:u?"greet":"wrongSide",boat:t})}Yi(t.model.steererPerson,this.time<t.waveUntil?"wave":"rest",this.time)}place(t,e){const n=this.route.frame(t.s),i=n.x+n.nx*t.d,o=n.z+n.nz*t.d,r=Math.atan2(n.tx,n.tz)+(t.dir>0?0:Math.PI),a=this.ww.levelAt(t.s);t.model.group.position.set(i,a+Math.sin(this.time*1.2+t.s)*.015,o),t.model.group.rotation.y=r+t.yaw,t.model.group.rotation.z=Math.sin(this.time*.9+e)*.004,Object.assign(t.obstacle,{x:i,z:o,psi:r+t.yaw})}}function Uy(s){const t=new bt,e=l=>new Yt({color:l,roughness:.8,flatShading:!0}),n=e("#2b2b2b"),i=e("#b8322a"),o=e("#6b4a2e"),r=1.7,a=s/2-4;for(let l=0;l<6;l++){const c=new q(new mn(.28,1),n);c.scale.set(1,.7,1.3),c.position.set(l%2?.3:-.3,r+.15,a-Math.floor(l/2)*.8),t.add(c)}for(let l=0;l<4;l++){const c=new q(new qt(.16,.16,.6,10),i);c.position.set(-.45+l*.3,r+.3,a-3.2),t.add(c)}for(let l=0;l<3;l++)for(let c=0;c<4-l;c++){const h=new q(new qt(.08,.08,.8,6),o);h.rotation.x=Math.PI/2,h.position.set(-.24+c*.16+l*.08,r+.08+l*.14,a-4.6),t.add(h)}return t.traverse(l=>l.castShadow=!0),t}const ta=-jt,ky=s=>new Yt({color:s});function fe(s,t,e,n=0,i=0,o=0,r=0,a=0,l=0){const c=new q(t,ky(e));return c.position.set(n,i,o),c.rotation.set(r,a,l),s.add(c),c}const rn=(s,t,e)=>new Ct(s,t,e),In=(s,t,e,n=6)=>new qt(s,t,e,n),Ny={bench(){const s=new bt;fe(s,rn(1.6,.06,.4),"#8a6a45",0,.45,0),fe(s,rn(1.6,.36,.05),"#8a6a45",0,.68,-.2,-.15);for(const t of[-.7,.7])fe(s,rn(.06,.45,.4),"#2b2b2b",t,.22,0);return s},bin(){const s=new bt;return fe(s,In(.22,.2,.8,8),"#1f3d2f",0,.4,0),fe(s,In(.24,.24,.06,8),"#2b2b2b",0,.82,0),s},lamp(){const s=new bt;return fe(s,In(.06,.09,3.6),"#1b1b1b",0,1.8,0),fe(s,rn(.5,.06,.06),"#1b1b1b",.18,3.55,0),fe(s,In(.12,.16,.32,6),"#2b2b2b",.38,3.4,0),fe(s,In(.1,.1,.14,6),"#f4e3a1",.38,3.22,0),s},lifebuoy(){const s=new bt;return fe(s,rn(.1,1.5,.1),"#e8e4da",0,.75,0),fe(s,new hn(.3,.07,6,12),"#e0522f",0,1.15,.08),fe(s,rn(.6,.6,.03),"#c0b8a8",0,1.15,0),s},tub(){const s=new bt;fe(s,In(.36,.3,.45,8),"#6b4a2e",0,.22,0),fe(s,new mn(.34,0),"#4f8a3a",0,.58,0);for(const[t,e,n]of[[.15,.1,"#e04f6a"],[-.12,.12,"#f2c94c"],[.02,-.16,"#d36ad6"],[-.16,-.06,"#f6f0e4"]])fe(s,new mn(.08,0),n,t,.82,e);return s},reeds(){const s=new bt,t=Li(5);for(let e=0;e<9;e++){const n=1.1+t()*.9;fe(s,In(.015,.04,n,4),t()<.4?"#8a9a4a":"#6f8a3a",(t()-.5)*.9,n/2-.3,(t()-.5)*.7,(t()-.5)*.2,0,(t()-.5)*.25),t()<.4&&fe(s,In(.04,.04,.2,5),"#5a3d22",(t()-.5)*.9,n-.3,(t()-.5)*.7)}return s},hedge(){const s=new bt;return fe(s,rn(4.2,1.5,1.1),"#3f6b30",0,.75,0),fe(s,new mn(.6,0),"#4b7a36",-1.2,1.4,.1),fe(s,new mn(.55,0),"#36602a",1,1.45,-.1),s},fence(){const s=new bt;return fe(s,rn(2,1.6,.06),"#7a5a3a",0,.8,0),fe(s,rn(.1,1.75,.1),"#5e4430",-1,.87,0),s},flowers(){const s=new bt,t=Li(9),e=["#f2c94c","#ffffff","#d36ad6","#e04f6a","#7aa7e0"];for(let n=0;n<7;n++){const i=(t()-.5)*1.6,o=(t()-.5)*1.2;fe(s,In(.01,.01,.35,3),"#4f7a33",i,.17,o),fe(s,new mn(.06,0),e[Math.floor(t()*e.length)],i,.36,o)}return s},picnic(){const s=new bt;fe(s,rn(1.8,.06,.8),"#a07a50",0,.75,0);for(const t of[-.65,.65])fe(s,rn(1.8,.05,.28),"#a07a50",0,.45,t);for(const t of[-.7,.7])fe(s,rn(.08,.75,1.5),"#8a6a45",t,.37,0,0);return s},parasol(){const s=new bt;return fe(s,In(.03,.03,2.4),"#e8e4da",0,1.2,0),fe(s,new li(1.4,.5,8,1,!0),"#a3291f",0,2.3,0),s},cottage(){const s=new bt;fe(s,rn(6,4.2,5),"#efe8da",0,2.1,0);const t=new qt(.01,3.9,6.6,4,1);t.rotateY(Math.PI/4),t.rotateZ(Math.PI/2),t.scale(1,.55,1),fe(s,t,"#4d525b",0,5,0),fe(s,rn(.7,1.4,.7),"#8c4234",2,5.6,0),fe(s,rn(1,1.9,.08),"#1f4d3a",0,.95,2.52);for(const e of[-1.8,1.8])fe(s,rn(.9,.9,.08),"#2a3640",e,2.6,2.52),fe(s,rn(.9,.9,.08),"#2a3640",e,1.1,2.52);return s},heron(){const s=new bt;fe(s,new qe(.22,6,4),"#9aa3ab",0,.85,0).scale.set(1,.8,1.6),fe(s,In(.04,.05,.55,5),"#c8ced2",0,1.2,.18,-.3),fe(s,new qe(.07,6,4),"#e8eaec",0,1.47,.27),fe(s,new li(.025,.22,4),"#d8b34a",0,1.47,.42,Math.PI/2);for(const t of[-.06,.06])fe(s,In(.012,.012,.7,3),"#c9a24a",t,.35,0);return s}};class Oy{constructor(t,e,n,i,o,r){D(this,"group",new bt);D(this,"placements",new Map);D(this,"anglerSpots",[]);D(this,"gardens",[]);this.route=t,this.ww=e,this.terrain=n;const a=Li(4242),l=t.length,c=(u,M=6)=>r.some(x=>Math.abs(x.s-u)<x.w/2+M),h=(u,M)=>e.gates.some(x=>Math.abs(x.s-u)<M),d=u=>e.bodies[e.bodyIndexAt(u)].kind==="chamber",p=u=>e.windingHoles.some(M=>Math.abs(M-u)<42),f=u=>{const[M,x]=t.point(u,30*ta),[_,T]=t.point(u,30*jt);return Math.max(n.urbanAt(M,x),n.urbanAt(_,T))};let m=60;for(let u=20;u<l-20;u+=2){if(c(u,8)||h(u,10))continue;const M=f(u);M>.3&&Math.round(u)%32===0&&this.add("lamp",u,e.halfWidthAt(u)+3.25,"towpath",-Math.PI/2),u>m&&!o.zoneAt(u)&&!n.cliffSide(u,jt)&&(m=u+140+a()*160,this.add("bench",u,e.halfWidthAt(u)+3.6,"towpath",0),M>.2&&this.add("bin",u+1.4,e.halfWidthAt(u)+3.7,"towpath",0)),M>.35&&Math.round(u)%380===0&&this.add("lifebuoy",u,e.halfWidthAt(u)+3.3,"towpath",0)}for(const u of e.groups){const M=u.gates[0].s,x=u.gates.at(-1).s;this.add("lifebuoy",M-6,e.halfWidthAt(M-6)+3.3,"towpath",0),this.add("lifebuoy",x+6,e.halfWidthAt(x+6)+3.3,"towpath",0);for(const T of[M+4,x-4,(M+x)/2])this.add("tub",T,e.halfWidthAt(T)+2.2,"towpath",0),this.add("tub",T+1.2,e.halfWidthAt(T)+2.2,"offside",0);const _=(M+x)/2;if(!u.staircase&&f(_)<.45){const T=e.halfWidthAt(_)+10,[S,w]=t.point(_,T*jt);i.isFree(S,w)&&this.add("cottage",_,T,"land",0)}}let v=-1,g="none";for(let u=10;u<l-10;u+=2){if(u>v){v=u+60;const T=f(u);g=T<.3?a()<.85?"hedge":"none":T>.4?a()<.8?"fence":"none":a()<.5?"hedge":"fence"}if(g==="none"||c(u,4)||d(u)||h(u,6)||p(u))continue;const M=e.halfWidthAt(u)+2.4,[x,_]=t.point(u,M*ta);i.isFree(x,_)&&(g==="fence"?this.add("fence",u,M,"offside",0):Math.round(u)%4===0&&this.add("hedge",u,M,"offside",0))}for(let u=10;u<l-10;u+=3){if(c(u,6)||d(u)||h(u,15)||p(u))continue;const M=f(u);a()<(M<.3?.45:.12)&&this.add("reeds",u,e.halfWidthAt(u)-.25,"water",a()*6),M<.35&&a()<.3&&!n.cliffSide(u,jt)&&this.add("flowers",u,e.halfWidthAt(u)+4.6+a()*1.5,"towpath",a()*6),M<.2&&a()<.008&&this.add("heron",u,e.halfWidthAt(u)+.9,"offside",Math.PI/2*ta+(a()-.5))}for(const u of o.zones){if(u.kind!=="stop"||!/pub|bar/.test(u.poi.kind))continue;const M=(u.s0+u.s1)/2;for(const[x,_,T]of[[-5,6,"picnic"],[0,7.5,"picnic"],[5,6,"picnic"],[-2.5,7,"parasol"],[3,6.5,"parasol"]])if(this.add(T,M+x,e.halfWidthAt(M)+_,"land",0),T==="picnic"){const[S,w]=t.point(M+x,(e.halfWidthAt(M)+_)*jt);this.gardens.push({x:S,z:w,y:n.bankTop(M),ry:Math.atan2(t.frame(M).tx,t.frame(M).tz)})}}for(let u=150;u<l-80;u+=70+a()*90)f(u)>.55||c(u,15)||h(u,45)||o.zoneAt(u)||d(u)||o.boats.some(M=>Math.abs(M.s-u)<M.halfL+8)||this.anglerSpots.push({s:u});this.build()}add(t,e,n,i,o){if(e<1||e>this.route.length-1||this.terrain.nearAqueduct(e))return;const r=i==="offside"||i==="water"?ta:jt,a=this.route.frame(e),l=a.x+a.nx*n*r,c=a.z+a.nz*n*r;let h;i==="water"?h=this.ww.levelAt(e):i==="land"?h=this.terrain.heightAt(l,c):h=n<this.ww.halfWidthAt(e)+3.4?this.terrain.bankTop(e):this.terrain.landHeight(l,c,e,n*r);const d=Math.atan2(-a.nx*r,-a.nz*r),p=new _e().compose(new k(l,h,c),new On().setFromAxisAngle(new k(0,1,0),d+o),new k(1,1,1));this.placements.has(t)||this.placements.set(t,[]),this.placements.get(t).push(p)}build(){for(const[t,e]of this.placements){const n=Di(Ny[t]()),i=new kn(n,Ai(),e.length);e.forEach((o,r)=>i.setMatrixAt(r,o)),i.castShadow=t!=="flowers"&&t!=="reeds",i.receiveShadow=!0,i.name=`decor:${t}`,this.group.add(i)}}get counts(){return Object.fromEntries([...this.placements].map(([t,e])=>[t,e.length]))}}const zo=6,Pl=4,Bo=380,qn=new _e,Bi=new On,Ho=new k,Go=new k(1,1,1),ea=new k(0,1,0);function Fy(s,t){const e=ri({...s,coat:"#ffffff"});t(e);const n=new bt;n.add(e.group);const i=o=>o.userData.part==="coat";return{coat:Di(n,void 0,i),rest:Di(n,void 0,o=>!i(o))}}class na{constructor(t,e,n,i,o){D(this,"meshes",[]);for(const r of e){const a=[];for(let l=0;l<n;l++){const c=Fy(r,p=>o(p,l)),h=new kn(c.coat,gd(),i),d=new kn(c.rest,gd(),i);for(const p of[h,d])p.count=0,p.castShadow=!0,p.frustumCulled=!1,p.instanceMatrix.setUsage(_s),t.add(p);a.push({coat:h,rest:d})}this.meshes.push(a)}}begin(){for(const t of this.meshes)for(const{coat:e,rest:n}of t)e.count=n.count=0}put(t,e,n,i){const{coat:o,rest:r}=this.meshes[t%this.meshes.length][e%this.meshes[0].length],a=o.count++;r.count++,o.setMatrixAt(a,n),r.setMatrixAt(a,n),o.setColorAt(a,i)}end(){for(const t of this.meshes)for(const{coat:e,rest:n}of t)e.instanceMatrix.needsUpdate=n.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}}const gd=()=>new Yt({vertexColors:!0,roughness:.75});function zy(){const s=new bt,t=a=>new Yt({color:a});for(const a of[-.55,.55]){const l=new q(new hn(.33,.03,5,12),t("#1b1b1b"));l.position.set(0,.33,a),l.rotation.y=Math.PI/2,s.add(l)}const e=new q(new Ct(.05,.05,.9),t("#2e86c1"));e.position.set(0,.62,0),e.rotation.x=-.12;const n=new q(new Ct(.04,.32,.04),t("#2e86c1"));n.position.set(0,.68,-.18);const i=new q(new Ct(.12,.05,.22),t("#1b1b1b"));i.position.set(0,.86,-.18);const o=new q(new Ct(.04,.42,.04),t("#2e86c1"));o.position.set(0,.78,.45);const r=new q(new Ct(.5,.035,.035),t("#1b1b1b"));return r.position.set(0,.99,.43),s.add(e,n,i,o,r),Di(s)}function By(){const s=new bt,t=o=>new Yt({color:o}),e=new q(new Ct(.22,.22,.55),t("#8a5a2b"));e.position.y=.35;const n=new q(new Ct(.18,.18,.2),t("#7a4a22"));n.position.set(0,.5,.33),s.add(e,n);for(const[o,r]of[[-.08,-.2],[.08,-.2],[-.08,.2],[.08,.2]]){const a=new q(new Ct(.05,.25,.05),t("#6a3a1a"));a.position.set(o,.12,r),s.add(a)}const i=new q(new Ct(.04,.04,.22),t("#8a5a2b"));return i.position.set(0,.48,-.36),i.rotation.x=.6,s.add(i),Di(s)}function vd(s){const t=new bt,e=a=>new Yt({color:a}),n=s?1.9:1,i=new q(new qe(.16*n,6,4),e(s?"#f4f4f0":"#8a6a4a"));if(i.scale.set(.8,.55,1.3),i.position.y=.05*n,t.add(i),s){const a=new q(new qt(.035,.05,.5,5),e("#f4f4f0"));a.position.set(0,.32,.2),a.rotation.x=.25,t.add(a)}const o=new q(new qe(.07*(s?1.1:1),6,4),e(s?"#f4f4f0":"#2f6b3a"));o.position.set(0,s?.58:.17,s?.28:.16);const r=new q(new li(.03,.1,4),e(s?"#e07a2a":"#e2b23a"));return r.position.set(0,o.position.y-.01,o.position.z+.09),r.rotation.x=Math.PI/2,t.add(o,r),Di(t)}class Hy{constructor(t,e,n,i,o,r){D(this,"group",new bt);D(this,"events",[]);D(this,"movers",[]);D(this,"birds",[]);D(this,"anglers",[]);D(this,"walkers");D(this,"joggers");D(this,"riders");D(this,"bikes");D(this,"dogs");D(this,"ducks");D(this,"swans");D(this,"time",0);D(this,"scaredUntil",-1);D(this,"rand",Li(31));D(this,"kayaks",[]);D(this,"crowd",1);D(this,"night",!1);D(this,"kayakCount",1);this.route=t,this.ww=e,this.terrain=n,this.boat=i;const a=this.rand,l=Array.from({length:Pl},()=>Ji(a)),c=22;this.walkers=new na(this.group,l,zo,c,(p,f)=>_a(p,f/zo*Math.PI*2)),this.joggers=new na(this.group,l.slice(0,2),zo,c,(p,f)=>{_a(p,f/zo*Math.PI*2,1.5),p.armL.rotation.x-=.6,p.armR.rotation.x-=.6}),this.riders=new na(this.group,l.slice(1,3),4,c,(p,f)=>jx(p,f/4*Math.PI*2)),this.bikes=new kn(zy(),Ai(),c),this.dogs=new kn(By(),Ai(),c);for(let p=0;p<c;p++){const f=p<14?"walk":p<18?"jog":"cycle",m={s:i.s+(a()-.5)*Bo*2,d:0,dir:a()<.5?1:-1,kind:f,phase:a()*10,speed:f==="walk"?1.1+a()*.4:f==="jog"?2.6+a()*.6:4+a()*1.5,dog:f==="walk"&&a()<.45,coat:new Vt($o[Math.floor(a()*$o.length)]),look:Math.floor(a()*Pl)};m.d=this.laneFor(m),this.movers.push(m)}for(const p of[this.bikes,this.dogs])p.castShadow=!0,p.instanceMatrix.setUsage(_s),p.frustumCulled=!1,this.group.add(p);for(const p of o){const f=ri(Ji(a,{hairStyle:a()<.5?"cap":"beanie",coat:a()<.5?"#3d5a3d":"#5a4a3a"})),m=t.frame(p.s),v=(e.halfWidthAt(p.s)+.9)*jt,g=new bt;g.add(f.group),Lc(f);const u=new q(new Ct(.5,.4,.35),new Yt({color:"#3d5a3d"}));u.position.set(0,.2,-.1),g.add(u);const M=new q(new qt(.01,.02,4.2,4),new Yt({color:"#2b2b2b"}));M.position.set(.25,1.3,1.6),M.rotation.x=1.05,g.add(M),g.position.set(m.x+m.nx*v,n.bankTop(p.s),m.z+m.nz*v),g.rotation.y=Math.atan2(-m.nx*jt,-m.nz*jt),this.group.add(g),this.anglers.push({s:p.s,person:f,angryUntil:0,lastGrumble:-99})}const h=new na(this.group,l,1,64,p=>Lc(p));h.begin();for(const p of r)for(const f of[-1,1])if(!(a()<.35))for(const m of[-.5,.5]){if(a()<.4)continue;const v=new k(m,0,f*.62).applyAxisAngle(ea,p.ry);Bi.setFromAxisAngle(ea,p.ry+(f>0?Math.PI:0)),qn.compose(Ho.set(p.x+v.x,p.y,p.z+v.z),Bi,Go),h.put(Math.floor(a()*Pl),0,qn,new Vt($o[Math.floor(a()*$o.length)]))}h.end();let d=0;for(let p=120;p<t.length-60;p+=160+a()*260){if(e.bodies[e.bodyIndexAt(p)].kind!=="pound")continue;const f=a()<.22,m=f?2:2+Math.floor(a()*4);d++;for(let v=0;v<m;v++)this.birds.push({s:p+(a()-.5)*8,d:(a()-.5)*5,vs:0,vd:0,swan:f,heading:a()*6,flock:d,lastQuack:-99})}this.ducks=new kn(vd(!1),Ai(),Math.max(1,this.birds.filter(p=>!p.swan).length)),this.swans=new kn(vd(!0),Ai(),Math.max(1,this.birds.filter(p=>p.swan).length));for(const p of[this.ducks,this.swans])p.instanceMatrix.setUsage(_s),p.frustumCulled=!1,this.group.add(p)}horn(){this.scaredUntil=this.time+6}laneFor(t){return this.ww.halfWidthAt(Ee(t.s,0,this.route.length))+1.6+(t.dir>0?-.35:.35)}isKayak(t){return this.kayaks.some(e=>e.obstacle===t)}buildKayak(t,e){const n=new bt,i=d=>new Yt({color:d,roughness:.5,flatShading:!0}),o=new q(new qe(.5,10,6),i(t));o.scale.set(.62,.32,4.2),o.position.y=.05;const r=new q(new qt(.16,.2,.55,8),i(e()<.5?"#e0b23a":"#c6392b"));r.position.y=.42;const a=new q(new qe(.12,10,8),i("#e9b48f"));a.position.y=.8;const l=new q(new qe(.135,10,6,0,Math.PI*2,0,Math.PI/2),i("#f2f2ee"));l.position.y=.82;const c=new bt,h=new q(new qt(.02,.02,2.1,6),i("#2b2b2b"));h.rotation.z=Math.PI/2,c.add(h);for(const d of[-1.05,1.05]){const p=new q(new Ct(.04,.4,.16),i("#1d5fa8"));p.position.x=d,c.add(p)}c.position.set(0,.55,.25);for(const d of[o,r,a,l])d.castShadow=!0;return n.add(o,r,a,l,c),this.group.add(n),{g:n,paddle:c}}updateKayaks(t){const e=this.boat,n=this.route.length;if(!this.kayaks.length){const i=Li(77);for(const o of["#e8622c","#f2c94c","#3a9a5b"].slice(0,this.kayakCount)){const r=this.buildKayak(o,i),a={x:0,z:0,psi:0,halfL:2.1,halfB:.35};this.boat.obstacles.push(a),this.kayaks.push({...r,s:-1e9,d:0,dir:1,speed:1.1+i()*.5,vd:0,yaw:0,obstacle:a})}}this.kayaks.forEach((i,o)=>{if(i.g.visible=!this.night,this.night){i.s=-1e9,Object.assign(i.obstacle,{x:1e9,z:1e9});return}Math.abs(i.s-e.s)>Bo&&(i.s=Ee(e.s+(this.rand()<.5?-1:1)*(Bo-40-o*70-this.rand()*60),10,n-10),i.dir=i.s>e.s?-1:1);const r=Ee(i.s+i.dir*15,0,n);(this.ww.bodies[this.ww.bodyIndexAt(r)].kind==="chamber"||r<=1||r>=n-1)&&(i.dir=-i.dir),i.s=Ee(i.s+i.dir*i.speed*t,1,n-1);const a=this.ww.halfWidthAt(i.s),l=Math.abs(i.s-e.s)<25,c=i.dir*(l?a-.7:a*.45),h=i.speed*.4,d=Ee((c-i.d)*.5,-h,h);i.vd+=Ee(d-i.vd,-.5*t,.5*t),i.d=Ee(i.d+i.vd*t,-(a-.5),a-.5);const p=-i.dir*Math.atan2(i.vd,i.speed);i.yaw+=(p-i.yaw)*Math.min(1,t*3);const f=this.route.frame(i.s);i.g.position.set(f.x+f.nx*i.d,this.ww.levelAt(i.s),f.z+f.nz*i.d),i.g.rotation.y=Math.atan2(f.tx*i.dir,f.tz*i.dir)+i.yaw,Object.assign(i.obstacle,{x:i.g.position.x,z:i.g.position.z,psi:i.g.rotation.y});const m=this.time*2.6+o;i.paddle.rotation.z=Math.sin(m)*.45,i.paddle.rotation.y=Math.cos(m)*.35})}update(t){this.time+=t,this.updateKayaks(t);const e=this.boat,n=this.route.length,i=e.speed*2.237>3;let o=0,r=0;for(const c of[this.walkers,this.joggers,this.riders])c.begin();this.movers.forEach((c,h)=>{if(h>=Math.round(this.movers.length*this.crowd))return;c.s+=c.dir*c.speed*t,c.phase+=t*c.speed*4.5,(Math.abs(c.s-e.s)>Bo||c.s<5||c.s>n-5)&&(c.s=Ee(e.s+(this.rand()<.5?-1:1)*(Bo-20-this.rand()*60),5,n-5),c.dir=c.s>e.s?-1:1,this.rand()<.5&&(c.dir*=-1)),c.d+=(this.laneFor(c)-c.d)*Math.min(1,t*2);const d=this.route.frame(c.s),p=d.x+d.nx*c.d*jt,f=d.z+d.nz*c.d*jt,m=c.kind==="cycle"?0:Math.abs(Math.cos(c.phase))*(c.kind==="jog"?.05:.025),v=this.terrain.bankTop(c.s)+(c.kind==="cycle"?-.07:m),g=Math.atan2(d.tx,d.tz)+(c.dir>0?0:Math.PI);Bi.setFromAxisAngle(ea,g),qn.compose(Ho.set(p,v,f),Bi,Go);const u=Math.floor(c.phase/(Math.PI*2)%1*zo);if((c.kind==="walk"?this.walkers:c.kind==="jog"?this.joggers:this.riders).put(c.look,c.kind==="cycle"?u%4:u,qn,c.coat),c.kind==="cycle"&&(qn.compose(Ho.set(p,this.terrain.bankTop(c.s),f),Bi,Go),this.bikes.setMatrixAt(o++,qn)),c.dog){const x=Math.sin(c.phase*.3)*.6+1.2,_=p-Math.sin(g)*x+d.nx*.5,T=f-Math.cos(g)*x+d.nz*.5;qn.compose(Ho.set(_,this.terrain.bankTop(c.s)+Math.abs(Math.sin(c.phase*1.6))*.04,T),Bi,Go),this.dogs.setMatrixAt(r++,qn)}}),this.bikes.count=o,this.dogs.count=r;for(const c of[this.walkers,this.joggers,this.riders])c.end();for(const c of[this.bikes,this.dogs])c.instanceMatrix.needsUpdate=!0;for(const c of this.anglers)i&&Math.abs(c.s-e.s)<14&&this.time-c.lastGrumble>20&&(c.lastGrumble=this.time,c.angryUntil=this.time+4,this.events.push({kind:"angler"})),Yi(c.person,this.time<c.angryUntil?"shake":"rest",this.time);let a=0,l=0;for(const c of this.birds){const h=c.s-e.s,d=c.d-e.d,p=Math.hypot(h,d),f=this.time<this.scaredUntil,m=f?35:14;p<m?(c.vd+=Math.sign(d||1)*(f?1.4:.6)*t*(m-p)*(f?.4:1),c.vs+=Math.sign(h||1)*.25*t*(m-p)*(f?.4:1),Math.abs(h)<8.5&&Math.abs(d)<1.3&&this.time-(c.lastHit??-99)>10&&(c.lastHit=this.time,c.d=e.d+Math.sign(d||1)*1.8,c.vd=Math.sign(d||1)*1.2,this.events.push({kind:"hitBird",swan:c.swan})),p<5&&this.time-c.lastQuack>6&&!c.swan&&(c.lastQuack=this.time,this.events.push({kind:"quack"}))):(c.vs+=Math.sin(this.time*.3+c.flock*7+c.heading)*.05*t,c.vd+=Math.cos(this.time*.23+c.flock*3)*.04*t);const v=(c.swan?.6:.9)*(f?1.8:1);c.vs=Ee(c.vs*(1-t*.4),-v,v),c.vd=Ee(c.vd*(1-t*.4),-v,v),c.s=Ee(c.s+c.vs*t,5,n-5);const g=this.ww.halfWidthAt(c.s)-.4;c.d=Ee(c.d+c.vd*t,-g,g),Math.abs(c.d)>=g&&(c.vd*=-.3);const u=this.route.frame(c.s),M=Math.atan2(u.tx*c.vs+u.nx*c.vd,u.tz*c.vs+u.nz*c.vd);Math.hypot(c.vs,c.vd)>.05&&(c.heading+=Math.atan2(Math.sin(M-c.heading),Math.cos(M-c.heading))*Math.min(1,t*3)),Bi.setFromAxisAngle(ea,c.heading),qn.compose(Ho.set(u.x+u.nx*c.d,this.ww.levelAt(c.s)+Math.sin(this.time*2+c.s)*.01,u.z+u.nz*c.d),Bi,Go),c.swan?this.swans.setMatrixAt(l++,qn):this.ducks.setMatrixAt(a++,qn)}this.ducks.count=a,this.swans.count=l,this.ducks.instanceMatrix.needsUpdate=this.swans.instanceMatrix.needsUpdate=!0}}const Gy=5,hi=(s,t={})=>new Yt({color:s,roughness:.6,...t});function Vy(){const s=new bt,t=hi("#b8bcc2",{metalness:.8,roughness:.3}),e=(i,o,r,a,l,c)=>{const h=new q(new Ct(i,o,r),t);h.position.set(a,l,c),s.add(h)};for(const i of[.45,.95])e(.55,.025,.025,0,i,.45),e(.55,.025,.025,0,i,-.45),e(.025,.025,.9,.27,i,0),e(.025,.025,.9,-.27,i,0);for(const i of[-.27,.27])for(const o of[-.45,.45])e(.025,.5,.025,i,.7,o);for(let i=-.35;i<=.36;i+=.14)e(.55,.012,.012,0,.45,i);const n=new q(new Ct(.6,.05,.05),hi("#c0392b"));n.position.set(0,1.05,-.52),s.add(n);for(const i of[-.25,.25])for(const o of[-.4,.4]){const r=new q(new qt(.06,.06,.04,8),hi("#2b2b2b"));r.rotation.z=Math.PI/2,r.position.set(i,.1,o),s.add(r)}return s}function Wy(){const s=new bt;for(const n of[-.5,.5]){const i=new q(new hn(.33,.03,5,14),hi("#1b1b1b"));i.position.set(0,.33,n),i.rotation.y=Math.PI/2,s.add(i)}const t=new q(new Ct(.04,.04,1),hi("#27ae60"));t.position.y=.55,s.add(t);const e=new q(new Ct(.5,.04,.04),hi("#1b1b1b"));return e.position.set(0,.85,.45),s.add(e),s}function $y(s){const t=new bt,e=new q(new qt(.06,.1,s,5),hi("#5a4632"));e.rotation.z=Math.PI/2,t.add(e);const n=new q(new qt(.02,.04,s*.4,4),hi("#6a5440"));n.position.set(s*.15,.05,.12),n.rotation.set(0,.6,Math.PI/2),t.add(n);const i=new q(new mn(.3,0),hi("#5c7a3a"));return i.position.set(-s*.4,.05,0),i.scale.y=.4,t.add(i),t}const _d=["trolley","bike","branches"];class Xy{constructor(t,e,n){D(this,"kind","trolley");D(this,"group",new bt);D(this,"s",0);D(this,"active",!1);D(this,"spotted",!1);D(this,"progress",0);D(this,"clearing",!1);D(this,"obstacle",{x:0,z:0,psi:0,halfL:1.2,halfB:0});D(this,"pieces",[]);this.route=t,this.ww=e,this.terrain=n}place(t){this.reset(),this.s=t,this.active=!0,this.spotted=!1;const e=this.route.frame(t),n=this.ww.halfWidthAt(t),i=this.ww.levelAt(t),o=Math.atan2(e.tx,e.tz);Object.assign(this.obstacle,{x:e.x,z:e.z,psi:o,halfB:n});const r=(a,l,c,h,d,p,f,m)=>{f.position.set(e.x+e.nx*a+e.tx*l,i+c,e.z+e.nz*a+e.tz*l),f.rotation.set(d,o+h,p),this.group.add(f);const[v,g]=this.route.point(t+m*.6,(n+1.5+Math.abs(m)*.25)*jt);this.pieces.push({obj:f,from:f.position.clone(),fromRot:f.rotation.clone(),to:new k(v,this.terrain.bankTop(t)+.05,g)})};if(this.kind=_d[Math.floor(Math.random()*_d.length)],this.kind==="trolley")r(0,0,-.55,.4,.5,.3,Vy(),0);else if(this.kind==="bike")r(0,.2,-.35,1.2,1.2,.2,Wy(),0);else for(let a=0;a<6;a++){const l=-n+.6+a/5*(n*2-1.2);r(l,a%2?.4:-.4,.02,.3+a*.5,0,0,$y(1.6+a%3*.6),a-3)}for(let a=0;a<4;a++){const l=new q(a%2?new mn(.2,0):new qt(.04,.04,.12,8),hi(["#f2f2f2","#c0392b","#3a3a3a","#2e86c1"][a]));a%2?l.scale.y=.6:l.rotation.z=Math.PI/2,r(-n+1+a*(n*.6),a%2?.7:-.6,.05,a,0,0,l,a-2)}}get description(){return{trolley:{spotted:"Uh-oh: a shopping trolley is jammed in the canal ahead, right in your way.",cleared:"Cleared! One dripping shopping trolley now sits on the towpath. Tesco will be thrilled."},bike:{spotted:"Uh-oh: someone has thrown a bike in the canal ahead, and it's blocking the way.",cleared:"Cleared! A very sorry-looking bike now leans on the towpath fence."},branches:{spotted:"Uh-oh: a raft of fallen branches is jammed across the canal ahead.",cleared:"Cleared! The branches are stacked on the towpath. Someone will be glad of the kindling."}}[this.kind]}reset(){for(const t of this.pieces)this.group.remove(t.obj);this.pieces=[],this.active=!1,this.clearing=!1,this.progress=0}startClearing(){return!this.active||this.clearing?!1:(this.clearing=!0,!0)}update(t,e){return this.active?this.clearing?(this.progress=Math.min(1,this.progress+t/Gy),this.pieces.forEach((n,i)=>{const o=i/this.pieces.length*.85,r=Math.min(1,Math.max(0,(this.progress-o)/.15));r<=0||(n.obj.position.lerpVectors(n.from,n.to,r),n.obj.position.y+=Math.sin(r*Math.PI)*1.4,n.obj.rotation.set(n.fromRot.x*(1-r),n.fromRot.y,n.fromRot.z*(1-r)+(r>.99?i%3*.4:0)))}),this.progress>=1?(this.active=!1,this.clearing=!1,!0):!1):(this.pieces.forEach((n,i)=>n.obj.position.y=n.from.y+Math.sin(e*1.3+i)*.03),!1):!1}}const qy=.75,Yy=1.6,Md=1.4;class jy{constructor(t,e,n,i){D(this,"group",new bt);D(this,"staffed",new Set);D(this,"active",null);D(this,"helpers",new Map);D(this,"actKey","");D(this,"actAt",0);D(this,"driveTarget",null);D(this,"time",0);D(this,"busyGate",null);D(this,"onDuty",!0);D(this,"night",!1);D(this,"lamps",[]);this.route=t,this.ww=e,this.terrain=n,this.boat=i,this.roster()}roster(){for(const t of this.helpers.values())for(const e of t)this.group.remove(e.person.group);this.helpers.clear(),this.lamps.length=0,this.staffed.clear();for(const t of this.ww.groups){if(!(t.staircase||Math.random()<.4))continue;this.staffed.add(t);const e=[];for(const n of[-3,3]){const i=ri(Ji(Math.random,{coat:"#1d5fa8",trousers:"#2d3a55",longCoat:!1}));this.group.add(i.group),i.group.add(this.headlamp()),e.push({person:i,s:(t.gates[0].s+t.gates.at(-1).s)/2+n,offset:n})}this.helpers.set(t,e)}}isStaffed(t){return!!t&&this.onDuty&&this.staffed.has(t)}start(t){this.active=t,this.driveTarget=null,this.actKey=""}stop(){this.active=null,this.driveTarget=null,this.busyGate=null}headlamp(){const t=new bt,e=new q(new Ct(.06,.04,.03),new Rn({color:"#fff6d8"}));e.position.set(0,1.74,.1);const n=new q(new li(.7,3,16,1,!0),new Rn({color:"#fff3c4",transparent:!0,opacity:.12,depthWrite:!1,blending:kl,side:Fe}));return n.geometry.translate(0,-1.5,0),n.position.copy(e.position),n.rotation.x=-Math.PI/2+.45,t.add(e,n),t.visible=!1,this.lamps.push(t),t}update(t,e,n){this.time+=t;for(const r of this.lamps)r.visible=this.night;if(this.group.visible=this.onDuty||!!this.active,this.animateHelpers(t),!this.active)return"idle";if(!e||e.group!==this.active)return this.stop(),"done";const i=this.boat,o=n?1:-1;if(e.action==="drive"){if(this.driveTarget===null){const r=this.ww.gates.filter(a=>a.group===this.active&&(a.s-i.s)*o>-.5).sort((a,l)=>(a.s-l.s)*o)[0];if(!r)this.driveTarget=i.s+o*30;else{const a=this.ww.bodies[n?r.above:r.below];this.driveTarget=a.kind==="chamber"?(a.s0+a.s1)/2:r.s+o*(Nn/2+14)}}this.creepTo(this.driveTarget,t)}else if(this.driveTarget=null,this.creepTo(null,t),e.gate&&e.action!=="wait"){this.busyGate=e.gate;const r=`${e.action}:${e.gate.label}`;if(r!==this.actKey)this.actKey=r,this.actAt=this.time+Yy+this.walkTime(e.gate);else if(this.time>=this.actAt){const a=e.gate;e.action==="paddlesUp"?a.wantPaddle=!0:e.action==="paddlesDown"?a.wantPaddle=!1:e.action==="close"?a.wantOpen=!1:e.action==="open"&&this.ww.levelsMatch(a)&&(a.wantOpen=!0),this.actKey=""}}else e.gate&&(this.busyGate=e.gate);return"running"}walkTime(t){const e=this.helpers.get(this.active);return e?Math.min(...e.map(n=>Math.abs(n.s-t.s)))/Md:0}creepTo(t,e){const n=this.boat,i=this.route.frame(n.s);let o=0;if(t!==null){const l=t-n.s;o=Math.sign(l)*Math.min(qy,Math.abs(l)*.5),Math.abs(l)<.05&&(o=0)}n.s+=o*e,n.d+=(0-n.d)*Math.min(1,e*.8);const r=this.route.frame(n.s);n.x=r.x+r.nx*n.d,n.z=r.z+r.nz*n.d;const a=Math.atan2(i.tx,i.tz)+(Math.cos(n.psi-Math.atan2(i.tx,i.tz))>=0?0:Math.PI);n.psi+=Math.atan2(Math.sin(a-n.psi),Math.cos(a-n.psi))*Math.min(1,e*1.5),n.u=Math.abs(o),n.v=n.r=0,n.notch=0,n.thrust=0}animateHelpers(t){var e;for(const[n,i]of this.helpers){const o=this.active===n&&((e=this.busyGate)==null?void 0:e.group)===n;for(const r of i){const a=(n.gates[0].s+n.gates.at(-1).s)/2+r.offset,l=o?this.busyGate.s+r.offset*.9:a,c=Math.sign(l-r.s)*Math.min(Math.abs(l-r.s),Md*t);r.s+=c;const h=this.ww.halfWidthAt(r.s),d=r.offset<0?jt:-jt,[p,f]=this.route.point(r.s,(h+1.1)*d);r.person.group.position.set(p,this.terrain.bankTop(r.s)+(Math.abs(c)>.001?Math.abs(Math.sin(this.time*6))*.03:0),f);const m=this.route.frame(r.s);r.person.group.rotation.y=Math.abs(c)>.001?Math.atan2(m.tx*Math.sign(c),m.tz*Math.sign(c)):Math.atan2(-m.nx*d,-m.nz*d);const v=o&&Math.abs(r.s-l)<.5,g=this.busyGate,u=v&&!!g&&g.paddle>.02&&g.paddle<.98;Math.abs(c)>.001?_a(r.person,this.time*6):(Af(r.person),Yi(r.person,u?"wind":v&&g&&g.open>.02&&g.open<.98?"push":"rest",this.time))}}}}const xd=new Vt("#b0664d"),yd=new Vt("#c9a58a"),Ll=new Vt("#d0b896");class Ky{constructor(){D(this,"pos",[]);D(this,"col",[])}tri(t,e,n,i){for(const o of[t,e,n])this.pos.push(o.x,o.y,o.z),this.col.push(i.r,i.g,i.b)}quad(t,e,n,i,o){this.tri(t,e,n,o),this.tri(t,n,i,o)}mesh(){const t=new xe;t.setAttribute("position",new te(this.pos,3)),t.setAttribute("color",new te(this.col,3)),t.computeVertexNormals();const e=new q(t,new Yt({vertexColors:!0,roughness:.9,flatShading:!0,side:Fe}));return e.castShadow=e.receiveShadow=!0,e}}class Zy{constructor(t,e,n,i){D(this,"group",new bt);this.route=t,this.ww=e,this.terrain=n;const o=new Ky;for(const r of i.walls??[]){const a=[];for(let l=0;l<r.p.length;l+=2)a.push([r.p[l],r.p[l+1]]);r.kind==="gate"?this.gate(o,a):r.closed?this.extrude(o,a,2.4,xd,yd):this.extrude(o,Jy(a,1.3),2.4,xd,yd)}this.group.add(o.mesh()),i.bridgeOfSighs&&this.group.add(this.bridgeOfSighs(i.bridgeOfSighs))}ground(t,e){const n=this.route.project(t,e),i=this.ww.halfWidthAt(n.s),o=Math.sign(n.d||1)*Math.max(n.dist,i+7);return this.terrain.landHeight(t,e,n.s,o)}extrude(t,e,n,i,o){const r=e.length;if(r<3)return;const a=e.map(([h,d])=>this.ground(h,d)+n),l=(h,d)=>new k(e[h][0],d,e[h][1]);for(let h=0;h<r;h++){const d=(h+1)%r;t.quad(l(h,a[h]-n-7),l(d,a[d]-n-7),l(d,a[d]),l(h,a[h]),i)}const c=ci.triangulateShape(e.map(([h,d])=>new ot(h,d)),[]);for(const[h,d,p]of c)t.tri(l(h,a[h]),l(d,a[d]),l(p,a[p]),o);for(let h=0;h<r;h++){const d=(h+1)%r,p=Math.hypot(e[d][0]-e[h][0],e[d][1]-e[h][1]);for(let f=.6;f<p-.3;f+=2.2){const m=f/p,v=e[h][0]+(e[d][0]-e[h][0])*m,g=e[h][1]+(e[d][1]-e[h][1])*m,u=a[h]+(a[d]-a[h])*m;ia(t,v,u+.45,g,.9,.9,.5,Math.atan2(e[d][0]-e[h][0],e[d][1]-e[h][1]),i)}}}gate(t,e){const n=e.reduce((S,w)=>S+w[0],0)/e.length,i=e.reduce((S,w)=>S+w[1],0)/e.length;let o=0,r=0,a=0;for(const[S,w]of e)o+=(S-n)**2,r+=(w-i)**2,a+=(S-n)*(w-i);const l=.5*Math.atan2(2*a,o-r),c=Math.cos(l),h=Math.sin(l);let d=1/0,p=-1/0,f=1/0,m=-1/0;for(const[S,w]of e){const R=(S-n)*c+(w-i)*h,b=-(S-n)*h+(w-i)*c;d=Math.min(d,R),p=Math.max(p,R),f=Math.min(f,b),m=Math.max(m,b)}const v=this.ground(n,i),g=p-d,u=Math.max(4,m-f),M=Math.atan2(c,h),x=S=>[n+c*S,i+h*S],[_,T]=x((d+p)/2);ia(t,_,v+7.4,T,u,3.2,g,M,Ll);for(const S of[d+1.8,p-1.8]){const[w,R]=x(S);ia(t,w,v+2.9,R,u,5.8,3.6,M,Ll,6)}ia(t,_,v+9.4,T,u*.15,.9,g,M,Ll)}bridgeOfSighs(t){const e=this.route,n=this.ww,i=e.frame(t.s),o=n.levelAt(t.s),r=n.halfWidthAt(t.s),a=r+7.5,l=Math.max(...[-1,1].map(u=>{const[M,x]=e.point(t.s,a*u);return this.terrain.landHeight(M,x,t.s,a*u)}))+.1,c=a+1,h=r+3.6,d=l-.75,p=o+1.2,f=new Ts;f.moveTo(-c,o-2),f.lineTo(-h,o-2),f.lineTo(-h,p);for(let u=1;u<20;u++){const M=Math.PI-Math.PI*u/20;f.lineTo(Math.cos(M)*h,p+Math.sin(M)*(d-p))}f.lineTo(h,p),f.lineTo(h,o-2),f.lineTo(c,o-2),f.lineTo(c,l),f.lineTo(-c,l),f.closePath();const m=2,v=new q(new _o(f,{depth:m,bevelEnabled:!1,curveSegments:12}).translate(0,0,-m/2),new Yt({color:"#a8654f",roughness:.9,flatShading:!0}));v.castShadow=v.receiveShadow=!0;const g=new bt;return g.add(v),g.position.set(i.x,0,i.z),g.rotation.y=Math.atan2(-i.nz,i.nx),g.name="bridge-of-sighs",g}}function Jy(s,t){const e=[],n=[];for(let i=0;i<s.length;i++){const o=s[Math.max(0,i-1)],r=s[Math.min(s.length-1,i+1)];let a=r[0]-o[0],l=r[1]-o[1];const c=Math.hypot(a,l)||1;a/=c,l/=c,e.push([s[i][0]-l*t,s[i][1]+a*t]),n.push([s[i][0]+l*t,s[i][1]-a*t])}return[...e,...n.reverse()]}function ia(s,t,e,n,i,o,r,a,l,c=0){const h=Math.sin(a),d=Math.cos(a),p=(x,_,T)=>new k(t+x*d+T*h,e+_,n-x*h+T*d),f=i/2,m=r/2,v=-o/2-c,g=o/2,u=[p(-f,v,-m),p(f,v,-m),p(f,v,m),p(-f,v,m),p(-f,g,-m),p(f,g,-m),p(f,g,m),p(-f,g,m)],M=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7]];for(const[x,_,T,S]of M)s.quad(u[x],u[_],u[T],u[S],l)}const Rf=1.69,ze=(s,t={})=>new Yt({color:s,roughness:.6,flatShading:!0,...t}),Ce=(s,t,e,n,i,o,r=0,a=0,l=0)=>{const c=new q(t,e);return c.position.set(n,i,o),c.rotation.set(r,a,l),c.castShadow=!0,s.add(c),c},Tn={buckby:{name:"a Buckby can",at:[.35,-6],build(){const s=new bt;Ce(s,new qt(.17,.19,.5,12),ze("#1f4d3a"),0,.25,0),Ce(s,new qt(.175,.185,.14,12),ze("#a3291f"),0,.27,0);for(let t=0;t<4;t++)Ce(s,new qe(.035,6,4),ze(t%2?"#f2c94c":"#f4f1e8"),Math.sin(t*1.6)*.18,.27,Math.cos(t*1.6)*.18);return Ce(s,new qt(.1,.17,.08,12),ze("#1f4d3a"),0,.54,0),Ce(s,new qt(.06,.06,.06,10),ze("#c9a24a",{metalness:.8,roughness:.3}),0,.6,0),Ce(s,new hn(.11,.015,6,12,Math.PI),ze("#1f4d3a"),0,.56,0),Ce(s,new qt(.025,.035,.22,6),ze("#1f4d3a"),.17,.4,0,0,0,-.9),s}},bike:{name:"a bicycle",at:[-.15,2.4],build(){const s=new bt,t=ze("#1b1b1b"),e=ze("#c0392b");for(const n of[-.5,.5])Ce(s,new hn(.3,.025,5,16),t,0,.04,n,Math.PI/2);return Ce(s,new Ct(.04,.04,.95),e,0,.06,0),Ce(s,new Ct(.04,.04,.5),e,.12,.06,.15,0,.5),Ce(s,new Ct(.5,.03,.03),t,0,.07,.45),Ce(s,new Ct(.1,.04,.2),t,0,.08,-.25),s}},lifebuoy:{name:"a lifebuoy",at:[-.4,-5.5],build(){const s=new bt;for(let t=0;t<4;t++)Ce(s,new hn(.3,.075,6,6,Math.PI/2),ze(t%2?"#f4f4f0":"#e0522f"),0,.08,0,Math.PI/2,0,t*Math.PI/2);return s}},brasses:{name:"polished chimney brasses",at:[.45,3.7],build(){const s=new bt,t=ze("#e2b84a",{metalness:.9,roughness:.2});for(const e of[.1,.32,.5])Ce(s,new qt(.08,.08,.04,10),t,0,e,0);for(let e=0;e<5;e++)Ce(s,new hn(.03,.008,4,8),t,.06+e*.03,.42-e*.07,0,0,0,e%2?0:Math.PI/2);return s}},logs:{name:"a stack of firewood",at:[.3,-2.6],build(){const s=new bt,t=ze("#6b4a2e"),e=ze("#c9a27a");let n=0;for(let i=0;i<3;i++)for(let o=0;o<4-i;o++,n++){const r=Ce(s,new qt(.07,.07,.7,6),n%3?t:e,-.22+o*.15+i*.075,.07+i*.12,0,Math.PI/2);r.rotation.y=n%2*.05}return s}},coal:{name:"two sacks of coal",at:[.3,-1.3],build(){const s=new bt;for(const t of[-.25,.25])Ce(s,new mn(.22,1),ze("#3a3a3a",{roughness:.95}),0,.14,t).scale.set(1,.65,1.15);return s}},cat:{name:"a ship’s cat",at:[-.3,4.5],build(){const s=new bt,t=ze("#d9822b");Ce(s,new qe(.16,10,8),t,0,.1,0).scale.set(1,.6,1.25),Ce(s,new qe(.09,10,8),t,.08,.13,.15);for(const e of[.03,.13])Ce(s,new li(.03,.06,4),t,e,.22,.15);return Ce(s,new hn(.13,.025,5,10,Math.PI*1.2),t,0,.04,0,Math.PI/2,0,1),s}},gnome:{name:"a garden gnome",at:[.4,-4.9],build(){const s=new bt;return Ce(s,new qt(.09,.11,.2,8),ze("#2e86c1"),0,.1,0),Ce(s,new qe(.07,8,6),ze("#f1c6a5"),0,.26,0),Ce(s,new li(.06,.12,6),ze("#f4f4f0"),0,.2,.05,.3),Ce(s,new li(.075,.2,8),ze("#c0392b"),0,.4,0),s}},sunflower:{name:"a sunflower in a pot",at:[.4,1.4],build(){const s=new bt;return Ce(s,new qt(.15,.11,.22,8),ze("#9b5a3c"),0,.11,0),Ce(s,new qt(.015,.02,.7,5),ze("#4f7a33"),0,.55,0),Ce(s,new qt(.13,.13,.03,12),ze("#f2c94c"),0,.92,.02,1.2),Ce(s,new qt(.06,.06,.04,10),ze("#5a3d22"),0,.92,.04,1.2),s}}},Qy=["buckby","bike","lifebuoy","brasses"],tb=["cat","gnome","sunflower"];class eb{constructor(t){D(this,"owned",new Set);D(this,"meshes",new Map);this.boat=t;try{for(const e of JSON.parse(localStorage.getItem("canal.roof")??"[]"))e in Tn&&this.show(e)}catch{}}has(t){return this.owned.has(t)}give(t){if(this.owned.has(t))return!1;this.show(t);try{localStorage.setItem("canal.roof",JSON.stringify([...this.owned]))}catch{}return!0}take(t){const e=this.meshes.get(t);if(!e)return!1;this.boat.remove(e),this.meshes.delete(t),this.owned.delete(t);try{localStorage.setItem("canal.roof",JSON.stringify([...this.owned]))}catch{}return!0}nextFrom(t){return t.find(e=>!this.owned.has(e))??null}show(t){this.owned.add(t);const e=Tn[t],n=e.build();n.position.set(e.at[0],Rf,e.at[1]),this.boat.add(n),this.meshes.set(t,n)}}const so=s=>new Yt({color:s,roughness:.85,flatShading:!0});function Pf(s,t){const e=document.createElement("canvas");e.width=256,e.height=128;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,256,128),n.fillStyle="#f6efdd",n.font="800 34px Nunito, sans-serif",n.textAlign="center",n.textBaseline="middle",s.split(`
`).forEach((r,a,l)=>n.fillText(r,128,64+(a-(l.length-1)/2)*40,236));const i=new Pn(e);i.colorSpace=Be;const o=new q(new ui(.8,.4),new Yt({map:i,side:Fe}));return o.position.y=1,o}function nb(){const s=new bt,t=so("#6b4a2e"),e=so("#c9a27a");for(let r=0;r<4;r++)for(let a=0;a<6-r;a++){const l=new q(new qt(.08,.08,.6,6),(a+r)%3?t:e);l.rotation.x=Math.PI/2,l.position.set(-.4+a*.17+r*.085,.08+r*.14,0),l.castShadow=!0,s.add(l)}const n=new q(new Ct(.3,.3,.25),so("#3d5a3d"));n.position.set(.85,.15,0),s.add(n);const i=Pf(`LOGS £5
honesty box`,"#3d5a3d");i.position.set(.85,.95,0);const o=new q(new Ct(.06,.8,.06),so("#5a4632"));return o.position.set(.85,.5,-.05),s.add(i,o),s}function ib(){const s=new bt;for(let n=0;n<5;n++){const i=new q(new mn(.24,1),so("#3a3a3a"));i.scale.set(1,.7,1.2),i.position.set(-.5+n%3*.45,.16+Math.floor(n/3)*.3,0),i.castShadow=!0,s.add(i)}const t=Pf(`COAL
& kindling`,"#2b2b2b");t.position.set(.85,.95,0);const e=new q(new Ct(.06,.8,.06),so("#5a4632"));return e.position.set(.85,.5,-.05),s.add(t,e),s}class sb{constructor(t,e,n,i,o){D(this,"group",new bt);D(this,"list",[]);for(const r of i){const a=r.item==="logs"?nb():ib(),l=t.frame(r.s),c=(e.halfWidthAt(r.s)+2.2)*jt;a.position.set(l.x+l.nx*c,n.bankTop(r.s),l.z+l.nz*c),a.rotation.y=Math.atan2(l.tx,l.tz)+Math.PI/2*jt,a.visible=!o(r.item),this.group.add(a),this.list.push({...r,group:a,verb:r.item==="logs"?"Load the logs (drop a fiver in the honesty box)":"Load a couple of sacks of coal",done:r.item==="logs"?"Logs loaded onto the roof. The stove will be roaring tonight.":"Two sacks of coal on the roof. Toasty."})}}near(t){return this.list.find(e=>e.group.visible&&Math.abs(e.s-t)<22)}}const ob=1.435,bd=650,rb=18,fs=20,Zs=3;class ab{constructor(t,e,n,i,o){D(this,"group",new bt);D(this,"lines",[]);D(this,"cars",[]);D(this,"run",null);D(this,"nextRun",12);D(this,"time",0);D(this,"rumble",0);this.route=t,this.ww=e,this.terrain=n,this.bridges=i;const r=i.placed.find(u=>u.data.kind==="rail");if(!r)return;const a=[r.x,r.z],l=o.map(u=>{const M=[];for(let x=0;x<u.p.length;x+=2)M.push([u.p[x],u.p[x+1]]);return{pts:M,bridge:u.b===1}}),c=u=>Math.min(...u.pts.map(M=>Math.hypot(M[0]-a[0],M[1]-a[1]))),h=u=>`${u[0]},${u[1]}`,d=new Map;l.forEach((u,M)=>{for(const x of[u.pts[0],u.pts.at(-1)])d.set(h(x),[...d.get(h(x))??[],M])});const p=new Set,f=u=>{for(let M=0;M<200;M++){const x=u.at(-1),_=u.at(-2),T=x[0]-_[0],S=x[1]-_[1];let w=-1,R=.7,b=[];for(const y of d.get(h(x))??[]){if(p.has(y))continue;const C=l[y].pts,E=h(C[0])===h(x)?C:[...C].reverse(),N=E[1][0]-E[0][0],O=E[1][1]-E[0][1],$=(T*N+S*O)/(Math.hypot(T,S)*Math.hypot(N,O)||1);$>R&&(R=$,w=y,b=E)}if(w<0)return;p.add(w),u.push(...b.slice(1))}},m=l.map((u,M)=>({w:u,i:M})).filter(({w:u})=>u.bridge&&c(u)<30);for(const{w:u,i:M}of m){if(p.has(M))continue;p.add(M);const x=[...u.pts];f(x);const _=[...u.pts].reverse();f(_);const T=[..._.reverse().slice(0,-u.pts.length),...x];if(T.length<4)continue;const S=[T[0]];for(let R=1;R<T.length;R++){const[b,y]=T[R-1],[C,E]=T[R],N=Math.max(1,Math.ceil(Math.hypot(C-b,E-y)/4));for(let O=1;O<=N;O++)S.push([b+(C-b)*O/N,y+(E-y)*O/N])}const w=[0];for(let R=1;R<S.length;R++)w.push(w[R-1]+Math.hypot(S[R][0]-S[R-1][0],S[R][1]-S[R-1][1]));w.at(-1)<300||this.lines.push({pts:S,ys:this.gradedHeights(S,w,a),cum:w})}const v=new Set(p);this.buildTrack(this.lines.map(u=>({pts:u.pts,ys:u.ys}))),this.buildTrack(l.map((u,M)=>({w:u,i:M})).filter(({w:u,i:M})=>!v.has(M)&&c(u)<bd).map(({w:u})=>({pts:u.pts,ys:null}))),o.forEach((u,M)=>{(v.has(M)||c(l[M])<bd)&&(u.skip=!0)});const g=u=>{const M=Di(lb(u)),x=new q(M,Ai());x.castShadow=!0;const _=new bt;return _.add(x),_.visible=!1,this.group.add(_),_};for(let u=0;u<Zs;u++)this.cars.push(g(u===0||u===Zs-1));this.cars[Zs-1].children[0].rotation.y=Math.PI}gradedHeights(t,e,n){const i=t.map(([c,h])=>this.trackY(c,h));let o=0;t.forEach((c,h)=>{Math.hypot(c[0]-n[0],c[1]-n[1])<Math.hypot(t[o][0]-n[0],t[o][1]-n[1])&&(o=h)});const r=i[o],a=i.map((c,h)=>{let d=0,p=0;for(let f=h;f>=0&&e[h]-e[f]<40;f--)d+=i[f],p++;for(let f=h+1;f<i.length&&e[f]-e[h]<40;f++)d+=i[f],p++;return d/p}),l=.02;return a.map((c,h)=>{const d=l*Math.abs(e[h]-e[o]);c=Math.min(r+d,Math.max(r-d,c));const p=this.route.project(t[h][0],t[h][1]),f=this.bridges.rampAt(p.s,p.d);return f.onDeck?Math.max(c,f.y+.25):c})}trackY(t,e){const n=this.route.project(t,e),i=this.ww.halfWidthAt(n.s),o=n.dist<i+3.5?this.terrain.bankTop(n.s):this.terrain.landHeight(t,e,n.s,n.d);return Math.max(o,this.bridges.rampAt(n.s,n.d).y)+.25}buildTrack(t){const e=[],n=[],i=[],o=new On,r=new k(0,1,0),a=new k(1,1,1);for(const{pts:f,ys:m}of t)for(let v=0;v+1<f.length;v++){const[g,u]=f[v],[M,x]=f[v+1],_=Math.hypot(M-g,x-u);if(_<.01)continue;const T=(M-g)/_,S=(x-u)/_,w=-S,R=T;o.setFromAxisAngle(r,Math.atan2(T,S));const b=Math.ceil(_/.7);let y=null;for(let C=0;C<=b;C++){const E=g+T*(_*C)/b,N=u+S*(_*C)/b,O=m?m[v]+(m[v+1]-m[v])*C/b:this.trackY(E,N);C<b&&e.push(new _e().compose(new k(E,O-.12,N),o,a));const $=[E,O,N];if(y){for(const ct of[-1,1]){const Ft=ob/2*ct,se=[y[0]+w*Ft,y[1],y[2]+R*Ft],tt=[$[0]+w*Ft,$[1],$[2]+R*Ft];n.push(se[0],se[1]-.1,se[2],tt[0],tt[1]-.1,tt[2],tt[0],tt[1],tt[2]),n.push(se[0],se[1]-.1,se[2],tt[0],tt[1],tt[2],se[0],se[1],se[2])}const z=1.7,H=[y[0]-w*z,y[1]-.2,y[2]-R*z],B=[y[0]+w*z,y[1]-.2,y[2]+R*z],dt=[$[0]-w*z,$[1]-.2,$[2]-R*z],vt=[$[0]+w*z,$[1]-.2,$[2]+R*z];i.push(...H,...dt,...B,...B,...dt,...vt)}y=$}}const l=new Ct(2.5,.12,.24),c=new kn(l,new Yt({color:"#5a4a3c",roughness:1}),e.length);e.forEach((f,m)=>c.setMatrixAt(m,f)),c.receiveShadow=!0,this.group.add(c);const h=new xe;h.setAttribute("position",new te(i,3)),h.computeVertexNormals();const d=new q(h,new Yt({color:"#6d635a",roughness:1,side:Fe}));d.receiveShadow=!0,this.group.add(d);const p=new xe;p.setAttribute("position",new te(n,3)),p.computeVertexNormals(),this.group.add(new q(p,new Yt({color:"#8d9196",metalness:.7,roughness:.35,side:Fe})))}at(t,e){const{pts:n,ys:i,cum:o}=t;e=Math.max(0,Math.min(o.at(-1),e));let r=1;for(;r<o.length-1&&o[r]<e;)r++;const a=(e-o[r-1])/(o[r]-o[r-1]||1);return[n[r-1][0]+(n[r][0]-n[r-1][0])*a,i[r-1]+(i[r]-i[r-1])*a,n[r-1][1]+(n[r][1]-n[r-1][1])*a]}update(t,e){if(this.time+=t,this.rumble=0,!this.lines.length)return;if(!this.run){for(const h of this.cars)h.visible=!1;if(this.time<this.nextRun)return;const l=Math.floor(Math.random()*this.lines.length),c=Math.random()<.5?1:-1;this.run={line:l,dir:c,dist:c>0?-10:this.lines[l].cum.at(-1)+fs*Zs+10}}const n=this.run,i=this.lines[n.line];n.dist+=n.dir*rb*t;const o=i.cum.at(-1);let r=1/0;this.cars.forEach((l,c)=>{const h=n.dist-n.dir*c*(fs+1),d=h-n.dir*fs,p=Math.max(h,d)>0&&Math.min(h,d)<o;if(l.visible=p,!p)return;const f=this.at(i,h),m=this.at(i,d),v=this.at(i,(h+d)/2);l.position.set(v[0],v[1],v[2]),l.rotation.set(0,Math.atan2(f[0]-m[0],f[2]-m[2]),0),l.rotateX(-Math.atan2(f[1]-m[1],fs)),r=Math.min(r,l.position.distanceTo(e))}),this.rumble=Math.max(0,1-r/350),(n.dir>0?n.dist-Zs*(fs+1)>o:n.dist+Zs*(fs+1)<0)&&(this.run=null,this.nextRun=this.time+50+Math.random()*50)}}function lb(s){const t=new bt,e=(o,r={})=>new Yt({color:o,...r}),n=(o,r,a,l,c,h,d)=>{const p=new q(new Ct(o,r,a),e(l));return p.position.set(c,h,d),t.add(p),p},i=fs-.4;n(2.7,2.6,i,"#c8102e",0,2.25,0),n(2.72,.9,i*.98,"#3a3f45",0,2.5,0),n(2.74,.12,i*.98,"#f4f4f0",0,1.65,0),n(2.6,.25,i*.99,"#9aa0a6",0,3.6,0),n(2.5,.6,i*.9,"#2b2b2b",0,.75,0);for(const o of[-i/2+3,i/2-3]){n(2.2,.5,2.4,"#1b1b1b",0,.45,o);for(const r of[-.8,.8])for(const a of[-.75,.75]){const l=new q(new qt(.42,.42,.12,10),e("#3a3a3a"));l.rotation.z=Math.PI/2,l.position.set(a,.42,o+r),t.add(l)}}for(let o=0;o<2;o++)n(.06,2,.9,"#2b2b2b",o?1.36:-1.36,2.1,-i/2+1.6);if(s){const o=new q(new qt(1.35,1.35,2.6,8,1,!1,0,Math.PI),e("#c8102e"));o.rotation.set(Math.PI/2,0,Math.PI/2),o.scale.set(1,1,.5),o.position.set(0,2.25,i/2),t.add(o),n(2.2,1.2,.5,"#f2c200",0,1.4,i/2+.45),n(2,.7,.3,"#22282e",0,2.75,i/2+.45)}return t}const us=48,cb=.35,Dl=14,hb=.8,wd=1.1;class ub{constructor(t,e,n){D(this,"mesh");D(this,"points",[]);D(this,"emitIn",0);D(this,"pos");D(this,"col");D(this,"uv");D(this,"churn");D(this,"washed",new Map);D(this,"time",0);this.route=t,this.ww=e;const i=us*4;this.pos=new Float32Array(i*3),this.col=new Float32Array(i*4),this.uv=new Float32Array(i*2);const o=[];for(const a of[0,1]){const l=a*us*2;for(let c=0;c<us-1;c++){const h=l+c*2,d=h+1,p=h+2,f=h+3;o.push(h,p,d,d,p,f)}}const r=new xe;r.setAttribute("position",new Ye(this.pos,3).setUsage(_s)),r.setAttribute("color",new Ye(this.col,4).setUsage(_s)),r.setAttribute("uv",new Ye(this.uv,2).setUsage(_s)),r.setIndex(o),this.mesh=new q(r,new Rn({map:db(),vertexColors:!0,transparent:!0,depthWrite:!1,side:Fe})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.churn=new q(new Zc(1,18),new Rn({color:"#f4f8f4",transparent:!0,opacity:0,depthWrite:!1})),this.churn.rotation.x=-Math.PI/2,this.churn.position.set(0,.04,-9.6),n.add(this.churn)}update(t,e,n,i,o,r){this.time+=t;for(const h of this.points)h.age+=t;for(;this.points.length&&this.points[0].age>Dl;)this.points.shift();const a=Re(2.6,4.6,o);if(this.emitIn-=t,this.emitIn<=0)if(this.emitIn=cb,a>.02){const h=-Math.cos(i),d=Math.sin(i);this.points.push({s:e,x:n[0],z:n[1],nx:h,nz:d,age:0,strength:a,start:1}),this.points.length>us&&this.points.shift()}else this.points.length&&this.points.at(-1).strength>0&&(this.points.push({s:e,x:n[0],z:n[1],nx:-Math.cos(i),nz:Math.sin(i),age:0,strength:0,start:1}),this.points.length>us&&this.points.shift());this.col.fill(0);const l=[...this.points].reverse();for(const h of[0,1]){const d=h?1:-1,p=h*us*2;for(let f=0;f<us;f++){const m=l[Math.min(f,l.length-1)],v=(p+f*2)*3,g=(p+f*2)*4;if(!m)continue;const u=this.spread(m),M=this.ww.levelAt(m.s)+.03,x=f<l.length?m.strength*(1-m.age/Dl)**1.5*.75:0;for(const[_,T]of[[0,u-wd/2],[1,u+wd/2]])this.pos[v+_*3]=m.x+m.nx*T*d,this.pos[v+_*3+1]=M,this.pos[v+_*3+2]=m.z+m.nz*T*d,this.col.set([.95,.97,.95,x],g+_*4),this.uv.set([_,m.s*.12],(p+f*2+_)*2)}}this.mesh.geometry.getAttribute("position").needsUpdate=!0,this.mesh.geometry.getAttribute("color").needsUpdate=!0,this.mesh.geometry.getAttribute("uv").needsUpdate=!0;const c=this.churn.material;c.opacity=Ee(r,0,1)*(.3+.1*Math.sin(this.time*11)),this.churn.scale.setScalar(.7+r*.6+.05*Math.sin(this.time*7))}spread(t){const e=this.ww.halfWidthAt(t.s);return Math.min(t.start+t.age*hb,e+.4)}washes(t){const e=[];for(const n of t){if(this.time-(this.washed.get(n)??-99)<12)continue;const i=this.route.project(n.x,n.z,n.s).d,o=Math.sign(i)||1;for(const r of this.points){if(r.strength<.15||Math.abs(r.s-n.s)>n.halfL)continue;const l=this.route.project(r.x,r.z,r.s).d+o*this.spread(r);if(o*l>=Math.abs(i)-n.halfB-.2){const c=r.strength*(1-r.age/Dl);if(c<.1)continue;this.washed.set(n,this.time),e.push({boat:n,strength:c});break}}}return e}}function db(){const e=document.createElement("canvas");e.width=64,e.height=256;const n=e.getContext("2d"),i=n.createImageData(64,256);for(let r=0;r<256;r++)for(let a=0;a<64;a++){const l=a/63,c=Math.sin(l*Math.PI)**1.5,h=Math.random()**2.2,d=.5+.5*Math.sin(r*.35+Math.sin(a*.4)*2),p=c*Math.min(1,h*1.6+d*.25),f=(r*64+a)*4;i.data[f]=i.data[f+1]=i.data[f+2]=255,i.data[f+3]=p*255}n.putImageData(i,0,0);const o=new Pn(e);return o.wrapS=Ei,o.wrapT=fo,o}const Sd=new Map;function fb(s,t){const e=JSON.stringify(s),n=Sd.get(e);if(n)return n;const i=160,o=200,r=new cf({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});r.setSize(i,o,!1),r.outputColorSpace=Be;const a=new Xc;a.add(new yf("#ffffff","#8a8a7a",1.6));const l=new wf("#fff4e0",2.2);l.position.set(2,3,3),a.add(l);const c=ri(s);t==null||t(c),c.group.rotation.y=.5,a.add(c.group);const h=new bn(30,i/o,.1,20);h.position.set(0,1,4.2),h.lookAt(0,.92,0),r.render(a,h);const d=r.domElement.toDataURL("image/png");return r.dispose(),r.forceContextLoss(),Sd.set(e,d),d}const Ed=["#c0392b","#2e86c1","#f4f4f0","#2b2b2b","#7f8c8d","#27ae60","#d35400","#1d3557","#b8b8b8","#8e44ad"],gs=4.3;function pb(){const s=new bt,t=new bt,e=o=>new Yt({color:o}),n=(o,r,a,l,c,h,d=0)=>{const p=new q(new Ct(r,a,l),e(c));p.position.set(0,h,d),o.add(p)};n(s,1.78,.62,gs,"#ffffff",.6),n(s,1.6,.5,2.3,"#ffffff",1.15,-.25),n(t,1.62,.42,2,"#26313a",1.12,-.2),n(t,1.82,.16,.2,"#1b1b1b",.42,gs/2),n(t,1.82,.16,.2,"#1b1b1b",.42,-gs/2),n(t,1.4,.12,.05,"#f6efc8",.72,gs/2+.01),n(t,1.4,.12,.05,"#b8241b",.72,-gs/2-.01);for(const o of[-.82,.82])for(const r of[-1.35,1.35]){const a=new q(new qt(.33,.33,.22,10),e("#1b1b1b"));a.rotation.z=Math.PI/2,a.position.set(o,.33,r),t.add(a)}const i=o=>{const r=new bt;return r.add(o),Di(r)};return{body:i(s),rest:i(t)}}class mb{constructor(t){D(this,"group",new bt);D(this,"paths",[]);D(this,"cars",[]);D(this,"body");D(this,"rest");D(this,"rand",Li(99));D(this,"respawn");for(const a of t){const l=[0];for(let c=1;c<a.pts.length;c++)l.push(l[c-1]+Math.hypot(a.pts[c][0]-a.pts[c-1][0],a.pts[c][2]-a.pts[c-1][2]));l.at(-1)<40||this.paths.push({pts:a.pts,cum:l,lane:Math.min(2.2,Math.max(1.1,a.w/4)),bridge:a.bridge})}const e=this.paths.map(a=>(a.bridge?12:1)*Math.min(3,a.cum.at(-1)/120)),n=e.reduce((a,l)=>a+l,0),i=this.paths.length?Math.min(60,Math.round(n*1.5)):0,o=pb();this.body=new kn(o.body,Ai(),Math.max(1,i)),this.rest=new kn(o.rest,Ai(),Math.max(1,i));for(const a of[this.body,this.rest])a.castShadow=!0,a.frustumCulled=!1,a.instanceMatrix.setUsage(_s),this.group.add(a);const r=()=>{let a=this.rand()*n;for(let l=0;l<e.length;l++)if((a-=e[l])<=0)return l;return e.length-1};for(let a=0;a<i;a++){const l=r(),c={path:l,dist:this.rand()*this.paths[l].cum.at(-1),dir:this.rand()<.5?1:-1,speed:8+this.rand()*5,colour:new Vt(Ed[Math.floor(this.rand()*Ed.length)])};this.cars.push(c),this.body.setColorAt(a,c.colour)}this.body.count=this.rest.count=i,this.respawn=a=>{a.path=r(),a.dir=this.rand()<.5?1:-1,a.dist=a.dir>0?0:this.paths[a.path].cum.at(-1),a.speed=8+this.rand()*5}}at(t,e){e=Math.max(0,Math.min(t.cum.at(-1),e));let n=1;for(;n<t.cum.length-1&&t.cum[n]<e;)n++;const i=(e-t.cum[n-1])/(t.cum[n]-t.cum[n-1]||1),o=t.pts[n-1],r=t.pts[n];return[o[0]+(r[0]-o[0])*i,o[1]+(r[1]-o[1])*i,o[2]+(r[2]-o[2])*i]}update(t){const e=new _e,n=new On,i=new ti(0,0,0,"YXZ"),o=new k,r=new k(1,1,1);this.cars.forEach((a,l)=>{const c=this.paths[a.path];a.dist+=a.dir*a.speed*t,(a.dist<0||a.dist>c.cum.at(-1))&&this.respawn(a);const h=this.paths[a.path],d=this.at(h,a.dist+a.dir*gs*.45),p=this.at(h,a.dist-a.dir*gs*.45),f=d[0]-p[0],m=d[2]-p[2],v=Math.hypot(f,m)||1,g=m/v,u=-f/v;o.set((d[0]+p[0])/2+g*h.lane,(d[1]+p[1])/2,(d[2]+p[2])/2+u*h.lane),i.set(-Math.atan2(d[1]-p[1],v),Math.atan2(f,m),0),n.setFromEuler(i),e.compose(o,n,r),this.body.setMatrixAt(l,e),this.rest.setMatrixAt(l,e)}),this.body.instanceMatrix.needsUpdate=this.rest.instanceMatrix.needsUpdate=!0}}const Hi=[1,2,5,10,30],Td=10,Il=8,Ad=20,Xe=sh==="pontcysyllte",gb={coat:"#e8b931",trousers:"#2d3a55",skin:"#e3b08f",hair:"#5a3a22",hairStyle:"cap",hat:"#3d4a3a",longCoat:!1},Ul=80;function sa(s){const t=Math.abs(s)*3.281;return t<1e3?`${Math.round(t/10)*10} ft`:`${(t/5280).toFixed(1)} mi`}function vb(s,t,e=!1,n=13){if(e&&(t==="pub"||t==="bar"||t==="hotel")&&s!=="The Cheshire Cat")return`You moor up and tuck into ${n<11?"a full breakfast":n<16?"a pub lunch":"a hearty supper"} at ${s}, with a pint of something local. An hour slips happily by. 🍽️`;const i={pub:`You moor up and pop into ${s} for a pint of something local. An hour slips happily by.`,bar:`A drink at ${s}, watching the boats go by. An hour slips happily by.`,cafe:`Tea and a slab of cake at ${s}, eaten on the roof. An hour slips happily by.`,supermarket:`You nip into ${s} for milk, bread and far too many biscuits.`,ice_cream:`An ice cream from ${s}, eaten on the roof. Bliss.`,restaurant:`A proper meal at ${s}. Nobody has to cook in the galley tonight. An hour slips happily by.`,hotel:`You stretch your legs and have a nose round ${s}. An hour slips happily by.`};return s==="The Cheshire Cat"?"Supper at the Cheshire Cat: a table by the window, watching the boats tie up for the night. An hour slips happily by.":i[t]??`You stop at ${s}. An hour slips happily by.`}function _b(s,t){return{Northgate:"Above you: the Northgate, one of the medieval gateways through Chester’s city walls. The canal runs along the old moat.","Water Tower":"Off to the side: the Water Tower, built in the 1320s to guard the old river port when the Dee still reached the walls.","Lead Shot Tower":"That tall brick tower is the Lead Shot Tower (1799), where molten lead was dropped from the top to make shot.","Bridge of Sighs":"Overhead: the Bridge of Sighs (1793). Condemned prisoners from the Northgate gaol were led across it to the chapel for their last rites.","King Charles Tower":"Up on the walls: King Charles’ Tower. Legend has it Charles I watched his army lose the Battle of Rowton Moor from here in 1645.","Morgan's Mount":"Morgan’s Mount, a little gun platform on the walls from the Civil War siege of Chester.","Pemberton's Parlour":"Pemberton’s Parlour, a tower on the walls named after an 18th-century ropemaker who watched his men at work from it."}[s]??`Look out: ${s}${t==="tower"?", part of the old city walls":""}.`}const Cd=['% rocks in your wash. "Tickover past moored boats, please!"',"A mug of tea slides off the roof of %. Slow down past moored boats!","The owner of % gives you a Look. Ease off to tickover when passing."],Mb=1/60,Js=s=>s[0].toUpperCase()+s.slice(1),Gi=2.23694,Lf=document.getElementById("loading"),Df=document.getElementById("loading-text"),xb=Lf.querySelector(".bar div");let yb=0;async function Vi(s){Df.textContent=s,xb.style.width=`${Math.min(100,++yb*11)}%`,await new Promise(t=>requestAnimationFrame(()=>setTimeout(t,0)))}async function bb(){await Vi("Fetching the map…");const s=await sx(`./data/${sh}.json`);await document.fonts.ready;const t=document.getElementById("scene"),e=new cf({canvas:t,antialias:!0});e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setSize(t.clientWidth,t.clientHeight,!1),e.toneMapping=Dd,e.toneMappingExposure=.62,e.shadowMap.enabled=!0,e.shadowMap.type=Pd;const n=new Xc,i=new bn(55,t.clientWidth/t.clientHeight,.4,4500);await Vi("Surveying the canal…");const o=new ox(s.centreline),r=s.meta.aqueduct??[s.meta.towerWharfS-400,s.meta.towerWharfS-100],a=Math.sign(s.meta.towerWharfS-(r[0]+r[1])/2)||1,l=a>0?r[0]:r[1],c=new fx(s.locks,s.bridges,o.length,Xe?[60,o.length-60]:[4700,o.length-130,s.meta.towerWharfS-60],0,Xe&&s.meta.aqueduct?[r]:[]),h=[],d=[];for(let I=0;I<s.centreline.length;I+=2)h.push(s.centreline[I]),d.push(s.centreline[I+1]);const p=520,f={x0:Math.min(...h)-p,x1:Math.max(...h)+p,z0:Math.min(...d)-p,z1:Math.max(...d)+p},m=new vx(o,c,f,Xe&&s.meta.aqueduct?{s0:r[0],s1:r[1],depth:38}:void 0);m.cuttings=s.cuttings??[],m.setRivers(s.rivers),m.urbanAt=Rx(s.buildings,f);const v=s.parks.map(I=>{let G=1/0,j=-1/0,lt=1/0,xt=-1/0;for(let Jt=0;Jt<I.p.length;Jt+=2)G=Math.min(G,I.p[Jt]),j=Math.max(j,I.p[Jt]),lt=Math.min(lt,I.p[Jt+1]),xt=Math.max(xt,I.p[Jt+1]);return{ring:I.p,x0:G,x1:j,z0:lt,z1:xt}});m.parkAt=(I,G)=>v.some(j=>I>=j.x0&&I<=j.x1&&G>=j.z0&&G<=j.z1&&nh(I,G,j.ring)),await Vi("Digging the cut…");const g=new Ux(o,c,s.bridges,m);m.embankments=g.placed.filter(I=>I.data.kind==="road"&&I.data.w>3.5).map(I=>({x:I.x,z:I.z,ux:Math.sin(I.data.dir),uz:Math.cos(I.data.dir),deck:I.deck,halfSpan:I.halfSpan,halfWidth:I.data.w/2+2})),n.add(m.buildStrip()),await Vi("Shaping the land…"),n.add(m.buildFar()),await Vi("Filling it with water…");const u=new yx(o,c);u.addRivers(s.rivers,m.riverLevel);for(const I of s.water){let G=0,j=0;const lt=I.p.length/2;for(let xt=0;xt<I.p.length;xt+=2)G+=I.p[xt]/lt,j+=I.p[xt+1]/lt;o.project(G,j).dist<40||u.addPond(I.p,m.heightAt(G,j)-.25)}n.add(u.group),n.add(g.group),n.add(new Zy(o,c,m,s).group);const M=new ab(o,c,m,g,s.rails);n.add(M.group);const x=new Bx(o,c,m);n.add(x.group);const _=Xe?s.meta.towerWharfS+a*120:s.meta.towerWharfS-70,T=[{name:"Tesco",kind:"supermarket",type:"stop",x:0,z:0,s:1250,dist:30,rank:-1},{name:"Waitrose",kind:"supermarket",type:"stop",x:0,z:0,s:1950,dist:40,rank:-1}],S=Xe?[{id:"trevor",name:"Trevor Basin",s0:Math.min(s.meta.towerWharfS+a*30,s.meta.towerWharfS+a*75),s1:Math.max(s.meta.towerWharfS+a*30,s.meta.towerWharfS+a*75)},{id:"fron",name:"Froncysyllte",s0:Math.min(l-a*150,l-a*200),s1:Math.max(l-a*150,l-a*200)}]:void 0;Xe&&Si.splice(0,Si.length,{from:"trevor",zone:"fron",title:"Across the sky",brief:"Take her over Pontcysyllte Aqueduct, 126 ft above the River Dee, and moor at Froncysyllte. Dead slow, and don't look down."},{from:"fron",zone:"trevor",title:"Back to Trevor Basin",brief:"Back across the aqueduct to Trevor Basin, where the boats tie up under the trees."});const w=new Ey(o,c,m,s.bridges,s.meta.towerWharfS,_,[...Xe?[]:T,...s.pois??[]],S);n.add(w.group);const R=new Px(s,o,c,m,g);await R.build(Vi),n.add(R.group);const b=new mb(R.carPaths);n.add(b.group),await Vi("Lighting the stove…");const y=new Vx(n,e),C=ih();C.group.rotation.order="YXZ",n.add(C.group);const E=new sy(o,c);E.placeAt(_,Xe?a<0:!0),E.obstacles=[...w.boats];const N=new Ly(o,c,m,E),O=new eb(C.group),$=new ub(o,c,C.group);n.add($.mesh),n.add(N.group);const z=new Iy(o,c,w,E);z.blockedAt=()=>Ft.filter(I=>I.active).map(I=>I.s),Xe&&s.meta.aqueduct&&(z.narrows=[r]),n.add(z.group);const H=new Oy(o,c,m,R,w,s.bridges);n.add(H.group);const B=new Hy(o,c,m,E,H.anglerSpots.filter(I=>m.aqueductCore(I.s)===0),H.gardens);B.kayakCount=Xe?3:1,n.add(B.group),Xe&&s.meta.aqueduct&&n.add(_y(o,c,m,r[0],r[1]));let dt=0,vt=null;const ct=new jy(o,c,m,E);n.add(ct.group);const Ft=[],se=w.zones.find(I=>/Lock Keeper/.test(I.name)),tt=[se?se.s1+30:1390,2185],ft=I=>{for(let G=0;G<120;G++){const j=I+(G%2?1:-1)*Math.ceil(G/2)*2;if(!(s.bridges.some(lt=>Math.abs(lt.s-j)<lt.w/2+20)||c.gates.some(lt=>Math.abs(lt.s-j)<40))&&!w.zones.some(lt=>j>lt.s0-8&&j<lt.s1+8)&&!w.boats.some(lt=>Math.abs(lt.s-j)<lt.halfL+6)&&c.bodies[c.bodyIndexAt(j)].kind==="pound"&&!(Xe&&j>r[0]-60&&j<r[1]+60))return j}return I};for(const I of tt){const G=new Xy(o,c,m);G.s=ft(I),w.clearAround(G.s,Ul-10,E.obstacles),n.add(G.group),Ft.push(G)}const Rt=new sb(o,c,m,[{item:"logs",s:ft(Xe?Math.min(o.length-80,s.meta.towerWharfS+a*400):3620)},{item:"coal",s:ft(s.meta.towerWharfS-150)}],I=>O.has(I));for(const I of Rt.list)w.clearAround(I.s,25,E.obstacles);n.add(Rt.group);const ht=fy,Lt=['"Any chance of a lift to %? My feet are killing me."',`"Going towards %? I'd love a ride, I've never been on a narrowboat."`,`"You couldn't drop me at %, could you? I'll work the locks!"`,`"Room for a little one? I'm meeting friends at %."`],Kt={firewood:[`"I've bought a load of firewood for my boat, she's moored at %. Could it ride on your roof?"`,`"Logs for the stove, and my boat's down at %. I'll never carry this lot all that way…"`],shopping:['"Just done the big shop. Any chance of a lift back to my boat at %? These bags weigh a ton."',`"Groceries for the week and my boat's at %. Room for me and a few bags?"`]},$t=I=>{if(I==="firewood"){const j=Tn.logs.build();return j.position.set(-.3,Rf,1.6),j}const G=new bt;return["#f2f2ee","#3a7d44","#f2f2ee","#e07a1f"].forEach((j,lt)=>{const xt=new q(new Ct(.3,.36,.18),new Yt({color:j,roughness:.9}));xt.position.set(.45+lt%2*.12,.38+.18,17.4/2-2.9+lt*.22),xt.rotation.y=lt*.4,G.add(xt)}),G};let Xt="trip";const st=()=>{setTimeout(()=>{!N.moored||!y.isNight||X.offerOpen||Ot.result||(Xt="sleep",X.showOffer("Moored for the night","Turn in till morning?",Y.hungry?"Bank up the stove and sleep till first light… though you'll sleep badly on an empty stomach. Cook something first?":"Bank up the stove, put the kettle on, and sleep until first light.","Sleep till morning","Not yet"))},2500)};let mt=0,U=null;const Wt=()=>{if(!U)return;const I=U;U=null,setTimeout(()=>n.remove(I.person.group),6e3)},pt=I=>{const G=ri({coat:"#3d4a3a",trousers:"#2d3a55",hair:"#9a9a9a",hairStyle:"cap",hat:"#4a3f33",longCoat:!0}),j=o.frame(I),lt=(c.halfWidthAt(I)+1.4)*jt;G.group.position.set(j.x+j.nx*lt,m.bankTop(I),j.z+j.nz*lt),G.group.rotation.y=Math.atan2(-j.nx*jt,-j.nz*jt),n.add(G.group),U={person:G,turning:null},Xt="helper",X.showOffer("On the towpath","Need a hand?",`An old boater in a flat cap has been watching for a while. "Having a spot of bother? Here, let me show you how it's done."`,"Yes please","I've got this")},Ut=I=>{if(!U)return;N.castOff();const G=o.frame(I),j=Math.atan2(G.tx,G.tz),lt=Math.cos(E.psi-j)>=0,xt=j+(lt?Math.PI:0);let Jt=Math.atan2(Math.sin(xt-E.psi),Math.cos(xt-E.psi));Math.abs(Jt)<.3&&(Jt=Math.PI),U.turning={t:0,s:I,psi0:E.psi,psi1:E.psi+Jt,x0:E.x,z0:E.z},X.toast("The old boater hops aboard, takes the tiller and talks you through it…","info",5e3)};let ut=null,Pt=null;const It=new Set;for(const I of w.zones)I.kind==="stop"&&w.addStopMarker(I);const L=new Map,A=w.zones.filter(I=>{var G;return I.kind==="stop"&&/pub|bar|supermarket/.test(((G=I.poi)==null?void 0:G.kind)??"")}),K=(I=[])=>{const G=A.filter(de=>!L.has(de.id)&&!I.includes(de.id));if(!G.length)return;const j=G[Math.floor(Math.random()*G.length)],lt=ri(Ji(Math.random)),xt=(j.s0+j.s1)/2,Jt=o.frame(xt),ie=(c.halfWidthAt(xt)+1.4)*jt;lt.group.position.set(Jt.x+Jt.nx*ie,m.bankTop(xt),Jt.z+Jt.nz*ie),lt.group.rotation.y=Math.atan2(-Jt.nx*jt,-Jt.nz*jt),n.add(lt.group),L.set(j.id,lt)},nt=I=>{const G=L.get(I);G&&(n.remove(G.group),L.delete(I),K([I]))};for(let I=0;I<3;I++)K();const at=I=>I.name.split(",")[0],it=I=>{Xt="trip",Ot.choose(I);const G=o.frame(E.s),j=Math.sin(E.psi)*G.tx+Math.cos(E.psi)*G.tz>=0?1:-1,lt=F(Ot.current.zone),xt=(lt.s0+lt.s1)/2,Jt=Math.min(E.s,xt),ie=Math.max(E.s,xt),de=c.gates.filter(Ln=>Ln.s>Jt&&Ln.s<ie&&Ln.label!=="top gates").length,Ge=de?` · ${de} lock${de>1?"s":""}`:"",on=sa(xt-E.s),Gn=(xt-E.s)*j>0?`${on} ahead${Ge}`:`${on} behind you: turn round at a winding hole${Ge}`;X.showOffer("Mission",Ot.current.title,`${Ot.current.brief}<br><b>${Gn}</b>`)},zt=new Set;for(const I of Si)w.addStart(I.from);const yt=()=>{const I=Zt||!!Ot.result;Si.forEach((G,j)=>w.showStart(G.from,!I&&!Ot.done.has(j))),Qt.setMissionStarts(Si.filter((G,j)=>!Ot.done.has(j)&&!(Zt&&j===Ot.index)).map(G=>{const j=F(G.from);return o.point((j.s0+j.s1)/2,0)}),I)},Tt=new Set,me=I=>{var Ln;if(ut||!L.has(I.id)||X.offerOpen||Ot.result||Tt.has(I.id))return;if(Tt.add(I.id),Pt)return void X.toast(`Someone at ${I.name} waves hopefully, but you've already got a passenger aboard.`,"info",4e3);if(!rt.atLeast("a bit of a liability")||!rt.atLeast("new on the cut")&&Math.random()<.5){X.toast(`"The Chester Rose? I've heard bad things about the Chester Rose. Not getting on there, thanks." They set off up the towpath on foot.`,"warn",5500),nt(I.id);return}It.add(I.id);const G=o.frame(E.s),j=Math.sin(E.psi)*G.tx+Math.cos(E.psi)*G.tz>=0?1:-1,lt=Ve=>(Ve.s0+Ve.s1)/2,xt=w.zones.filter(Ve=>Ve!==I&&Math.abs(lt(Ve)-E.s)>250&&Math.abs(lt(Ve)-E.s)<1800);if(!xt.length)return void X.toast(`The person at ${I.name} is waiting for a boat going further than this.`,"info",4e3);const Jt=xt.filter(Ve=>Math.sign(lt(Ve)-E.s)===j),ie=Jt.length?Jt:xt,de=ie.sort((Ve,Cs)=>Math.abs(lt(Ve)-E.s)-Math.abs(lt(Cs)-E.s))[Math.floor(Math.random()*Math.min(2,ie.length))],Ge=ht[Math.floor(Math.random()*ht.length)],on=Math.random(),Gn=((Ln=I.poi)==null?void 0:Ln.kind)==="supermarket"?"shopping":on<.3?"firewood":void 0;ut={name:Ge,dest:de,from:I.name,cargo:Gn},setTimeout(()=>{if((ut==null?void 0:ut.name)!==Ge||!N.moored||X.offerOpen){ut=null,Tt.delete(I.id);return}Xt="lift";const Ve=Gn?Kt[Gn]:Lt;X.showOffer(`At ${I.name}`,`Fancy giving ${Ge} a lift?`,Ve[Math.floor(Math.random()*Ve.length)].replace("%",at(de)),"Hop aboard","Sorry, not today")},1800)},gt=()=>{if(!ut)return;const I=w.zoneAt(E.s);I&&nt(I.id);const G=ri(Ji(Math.random));G.group.position.set(0,.38,17.4/2-2.6),Lc(G);const j=new q(new Ct(.9,.45,.5),new Yt({color:"#7a5a3a"}));j.position.set(0,.92-.225,-.08),G.group.add(j),C.group.add(G.group);const lt=ut.cargo,xt=lt&&$t(lt);xt&&C.group.add(xt),Pt={name:ut.name,dest:ut.dest,person:G,cargo:lt,load:xt},w.setLiftDest(Pt.dest);{const[ie,de]=o.point((Pt.dest.s0+Pt.dest.s1)/2,0);Qt.liftDest={x:ie,z:de}}const Jt=lt==="firewood"?", heaves the firewood up onto your roof,":lt==="shopping"?", stows the shopping bags in the well deck,":"";rt.change(2,"pickup",0),X.toast(`${Pt.name} hops aboard${Jt} and settles in the bow. Next stop: ${at(Pt.dest)}.`,"info",4500),ut=null},Nt=()=>{if(!Pt)return;rt.change(6,"lift",0),C.group.remove(Pt.person.group),Pt.load&&C.group.remove(Pt.load),w.setLiftDest(null),Qt.liftDest=null;const I=Pt.cargo==="firewood"&&!O.has("logs")?"logs":O.nextFrom(tb);I&&O.give(I),X.toast(I?`${Pt.name} hops off with a cheery wave, and leaves you ${Tn[I].name} for the roof. 🎁`:`${Pt.name} hops off with a cheery wave, and presses a slice of cake into your hand.`,"info",6e3),Pt=null},ee=()=>{for(const I of Ft){const G=E.obstacles.indexOf(I.obstacle);G>=0&&E.obstacles.splice(G,1),I.place(I.s),E.obstacles.push(I.obstacle)}Qt.setHazards(Ft.filter(I=>I.active).map(I=>o.point(I.s,0)))},re=w.zones.filter(I=>I.kind==="stop"),kt=(s.pois??[]).filter(I=>I.type==="sight"),ge=new Set,ce=new Set,Ot=new Dy(y.clock),F=I=>w.zones.find(G=>G.id===I),rt=new dy,Y=new my,et=new gy,At=()=>Xe?(F("trevor").s0+F("trevor").s1)/2:_,wt=Xe?"the boatyard at Trevor Basin":"Taylor's Boatyard";let le=!1,Ue=-99,Ke=null,be=!1,vn=0,Te=null;const ar=I=>{if(Te||!O.owned.size||Math.random()>Math.min(.6,.15+(I-Ma)/2e4))return;const G=[...O.owned],j=G[Math.floor(Math.random()*G.length)];if(!O.take(j))return;const lt=Math.random()<.5?-1:1,xt=Math.sin(E.psi),Jt=Math.cos(E.psi),ie=E.x-xt*6+Jt*lt*2.2,de=E.z-Jt*6-xt*lt*2.2,Ge=Tn[j].build();Ge.position.set(ie,c.levelAt(E.s)-.1,de),n.add(Ge),Te={id:j,mesh:Ge,x:ie,z:de,until:performance.now()+9e4,sinking:0},X.toast(`Splash! ${Js(Tn[j].name)} slides off the roof and into the cut. Moor up quick and fish it out with the boat hook (G)!`,"warn",6e3)},Fn=(Xe?["trevor","fron"]:["tower","stop:Telford's Warehouse","city","hoole","christleton","stop:The Cheshire Cat"]).map(I=>w.zones.find(G=>G.id===I)).filter(I=>!!I).map(I=>(I.s0+I.s1)/2),yo=30;{const I=new Yt({color:"#2f5d3a",roughness:.7}),G=new Yt({color:"#c9a24a",metalness:.7,roughness:.35}),j=document.createElement("canvas");j.width=128,j.height=64;const lt=j.getContext("2d");lt.fillStyle="#1f6fb8",lt.fillRect(0,0,128,64),lt.fillStyle="#fff",lt.font="800 30px Nunito, sans-serif",lt.textAlign="center",lt.textBaseline="middle",lt.fillText("WATER",64,34);const xt=new Pn(j);xt.colorSpace=Be;const Jt=new Yt({map:xt,side:Fe});for(const ie of Fn){const de=new bt,Ge=new q(new Ct(.22,1,.22),I);Ge.position.y=.5;const on=new q(new qt(.04,.04,.22,8),G);on.rotation.x=Math.PI/2,on.position.set(0,.8,.16);const Gn=new q(new ui(.6,.3),Jt);Gn.position.set(0,1.3,0);const Ln=new q(new Ct(.05,.4,.05),I);Ln.position.y=1.05;for(const ns of[Ge,on,Ln])ns.castShadow=!0;de.add(Ge,on,Gn,Ln);const Ve=o.frame(ie),Cs=(c.halfWidthAt(ie)+2.4)*jt;de.position.set(Ve.x+Ve.nx*Cs,m.bankTop(ie),Ve.z+Ve.nz*Cs),de.rotation.y=Math.atan2(-Ve.nx*jt,-Ve.nz*jt),n.add(de)}}const bo=new Set(["pub","bar","cafe","restaurant","hotel"]);let wo=0;const ts=(I,G=y.hour)=>I==="cafe"||I==="ice_cream"?G>=8&&G<17:I==="restaurant"?G>=12&&G<22:I==="supermarket"?G>=7&&G<22:G>=11&&G<23,So=I=>{if(I==="cafe")return{hours:1,note:"An hour slips happily by."};const G=y.hour>=12&&y.hour<14||y.hour>=18&&y.hour<20.5,j=Math.min(1,(G?.6:.1)+Math.random()*.4),lt=2+j,xt=Math.floor(lt),Jt=Math.round((lt-xt)*60),ie=`${xt} hours${Jt>=10?` ${Jt} minutes`:""}`,de=j>.7?`It's heaving, and the food takes an age: ${ie} before you're back aboard.`:j>.35?`Busy but cheerful: ${ie} before you're back aboard.`:`Nice and quiet, but you linger anyway: ${ie} slip by.`;return{hours:lt,note:de}},es=(I,G)=>{var lt;const j=((lt=I.poi)==null?void 0:lt.kind)??"";if(!(I.kind==="stop"&&!ts(j))){if(bo.has(j)){if(G)Y.eat(y.clock);else if(Y.hunger>.35){const xt=So(j);Y.eat(y.clock),y.skipTo((y.hour+xt.hours)%24),X.toast(`You pop into ${I.name} for a bite to eat. ${xt.note} 🍽️`,"info",6e3)}}j==="supermarket"&&Y.food<da&&(Y.restock(),X.toast(`Larder stocked at ${I.name}: ${da} meals' worth. 🥫`,"info",4500))}},lr={bump:"bump",bank:"scraped the bank",paddles:"paddles left up",speeding:"speeding",wrongSide:"wrong side",aqueductClash:"met a boat on the aqueduct",kayak:"bumped a kayak",waitedTurn:"waited your turn",unpaidFuel:"couldn't pay the fuel boat",angler:"angler splashed",duck:"ran over a duck",swan:"ran over a swan",wash:"wash",night:"cruising after dark",greet:"friendly wave",slowPast:"slow past moored boats",cleared:"blockage cleared",lift:"lift given",mission:"mission complete",pickup:"picked up a passenger",cleanTrip:"mission complete, not a ripple"};rt.onChange=(I,G)=>X.repPulse(I,lr[G]??G),rt.onStanding=(I,G)=>X.toast(G?`Word's getting round the towpath: yours is ${I}. 😊`:`Mutterings on the towpath: yours is ${I} now.`,G?"info":"warn",5e3);const As=I=>I.group.staircase&&(y.hour>=Ad||y.hour<Il),Eo=`Padlocked for the night. The staircase opens at ${Il}am.`;let To=!1,cr=0,P=0,V=0,J=performance.now()+6e4;const Q=["A dog walker on the towpath gives you a cheery wave.","A couple on a bench raise their coffees as you pass.",'A cyclist rings their bell and waves. "Lovely boat!"',"A child on the towpath waves madly. You wave back.","A jogger nods and waves as they go by."];let W=!1,_t=!1;const Et=new Map;let Ht=null,Bt=null,Zt=!1;const ne=new ry,Dt=new xy;if(ne.onFirstInput=()=>Dt.start(),t.addEventListener("pointerdown",()=>Dt.start()),An){let I=0;document.addEventListener("touchend",G=>{const j=performance.now();j-I<350&&!G.target.closest("button")&&G.preventDefault(),I=j},{passive:!1});for(const G of["gesturestart","gesturechange","dblclick"])document.addEventListener(G,j=>j.preventDefault(),{passive:!1})}An&&addEventListener("pointerdown",()=>{var I,G;return(G=(I=document.documentElement).requestFullscreen)==null?void 0:G.call(I).catch(()=>{})},{once:!0});const Qt=new My(s,o,c,f);Qt.setWaterPoints(Fn.map(I=>o.point(I,0))),Qt.addMooredBoats(w.boats),Qt.setPlaces([...w.zones.filter(I=>I.kind==="stop").map(I=>{const[G,j]=o.point((I.s0+I.s1)/2,0),lt={pub:"🍺",bar:"🍸",cafe:"☕",restaurant:"🍽️",hotel:"🛏️",ice_cream:"🍦"}[I.poi.kind]??"⚓";return{x:G,z:j,icon:lt,name:I.name}}),...(s.pois??[]).filter(I=>I.type==="sight").map(I=>({x:I.x,z:I.z,icon:"★",name:I.name}))]);const Le=()=>{const I=F(Ot.current.zone),[G,j]=o.point((I.s0+I.s1)/2,0);Qt.setDestination(G,j,I.name)};ee();const X=new cy(document.getElementById("hud"),I=>ne.push(I),Qt.el,Qt.bigEl);uy(document.getElementById("hud")),["localhost","127.0.0.1"].includes(location.hostname)&&Qt.enableDevTeleport(()=>[E.x,E.z],(I,G)=>{N.castOff(),ct.stop();const j=o.frame(E.s),lt=Math.sin(E.psi)*j.tx+Math.cos(E.psi)*j.tz>=0,xt=Math.min(o.length-12,Math.max(12,o.project(I,G).s));E.placeAt(xt,lt),E.notch=0,X.toast(`Moved to ${((xt-s.meta.towerWharfS)/1e3).toFixed(2)} km from Tower Wharf`,"info",2e3)}),X.onGateTap=(I,G)=>{if(!ct.active){if(!(ae!=null&&ae.adjacent.includes(I)))return X.nope(I,"The lock-keeper looks after that one.");if(As(I))return X.nope(I,Eo);if(Oe=I,G==="paddlesUp")I.wantPaddle=!0;else if(G==="paddlesDown")I.wantPaddle=!1;else if(G==="open"!==I.wantOpen){const j=c.toggleGate(I,Ua(I));j&&X.nope(I,/in the way/.test(j)?"The boat's in the way of the gates.":"The levels don't match yet: the gates won't budge.")}}},An&&(C.tillerHint.visible=!1),X.onSteer=I=>{I&&ct.active&&ct.stop(),ne.touchSteer=I},X.onNotch=I=>{ct.active&&(ct.stop(),X.toast("You take the tiller back.","info",2e3)),E.notch=I};const he=new $M(i,t);he.enableDamping=!0,he.minDistance=5,he.maxDistance=260,he.maxPolarAngle=1.48,he.enablePan=!1;let we=-10;const Gt=new Sf,_n=new ot;let ve=null,Mn=!1;const fi=I=>{const G=t.getBoundingClientRect();return _n.set((I.clientX-G.left)/G.width*2-1,-((I.clientY-G.top)/G.height)*2+1),Gt.setFromCamera(_n,i),Gt.intersectObject(C.tillerHit,!1).length>0};t.addEventListener("pointerdown",I=>{if(!N.count)return;const G=t.getBoundingClientRect();_n.set((I.clientX-G.left)/G.width*2-1,-((I.clientY-G.top)/G.height)*2+1),Gt.setFromCamera(_n,i);const j=Gt.intersectObjects(N.tapTargets,!1)[0];j&&(I.stopImmediatePropagation(),X.toast(N.untie(j.object.userData.mooringEnd),"info",2500))},{capture:!0}),t.addEventListener("pointerdown",I=>{An||(Me==="steerer"||fi(I))&&(ve={x:I.clientX,id:I.pointerId},he.enabled=!1,t.setPointerCapture(I.pointerId),t.style.cursor="grabbing",ct.active&&ct.stop(),Mn||(Mn=!0,C.tillerHint.visible=!1))},{capture:!0}),t.addEventListener("pointermove",I=>{ve&&I.pointerId===ve.id?ne.touchSteer=Ms.clamp(-(I.clientX-ve.x)/120,-1,1):!ve&&I.pointerType==="mouse"&&Me==="follow"&&(t.style.cursor=fi(I)?"grab":"")});const an=I=>{!ve||I.pointerId!==ve.id||(ve=null,ne.touchSteer=0,t.style.cursor="",Me==="follow"&&(he.enabled=!0))};t.addEventListener("pointerup",an),t.addEventListener("pointercancel",an);let zn=0;he.addEventListener("start",()=>we=performance.now()/1e3);let Me="follow";const ke=new k,pi=new k,dn=new k,Bn=I=>{const G=c.levelAt(E.s);C.group.position.set(E.x,G+Math.sin(I*1.3)*.015,E.z),C.group.rotation.set(Math.sin(I*.9)*.004,E.psi,Ms.clamp(-E.r*E.u*.5,-.04,.04)),C.rudder.rotation.y=-E.rudder*.6,ke.set(E.x,G+1.6,E.z)};Bn(0),pi.copy(ke),he.target.copy(ke),i.position.set(E.x-Math.sin(E.psi)*24,ke.y+9,E.z-Math.cos(E.psi)*24),he.update();let sn=2,Oe=null,ae=null;const oh={paddlesUp:"Raising paddles",paddlesDown:"Dropping paddles",open:"Opening gates",close:"Closing gates"},rh=new k;let Aa=0;const Ca=I=>{var G;return I?`${I.action}:${((G=I.gate)==null?void 0:G.label)??""}:${I.group.name}`:""};let Ao=null;const Ra=new Set;let hr=0,ah,Pa=0,La=!1,Da=0;const lh=()=>(ae==null?void 0:ae.adjacent)??[];let Ia="",ch=0;const Ua=I=>{const[G,j]=E.span();return G<I.s+.3&&j>I.s-.3},If=I=>{switch(I){case"throttleUp":ct.active&&(ct.stop(),X.toast("You take the tiller back.","info",2e3)),E.notch=Math.min(Yn,E.notch+1);break;case"throttleDown":E.notch=Math.max(to,E.notch-1);break;case"neutral":E.notch=0;break;case"paddles":Oe&&As(Oe)?X.nope(Oe,Eo):Oe&&c.togglePaddle(Oe);break;case"gates":if(Oe&&As(Oe))X.nope(Oe,Eo);else if(Oe){const G=c.toggleGate(Oe,Ua(Oe));G&&X.nope(Oe,/in the way/.test(G)?"The boat's in the way":"Levels don't match yet")}break;case"nextGate":{const G=lh();G.length&&(Oe=G[(G.indexOf(Oe)+1)%G.length],Ao=Ca(ae));break}case"timeFaster":sn=Hi[Math.min(Hi.length-1,Hi.indexOf(sn)+1)];break;case"timeCycle":sn=Hi[(Hi.indexOf(sn)+1)%Hi.length];break;case"timeSlower":sn=Hi[Math.max(0,Hi.indexOf(sn)-1)];break;case"camera":Me==="follow"?(dn.copy(i.position).sub(he.target),Me="steerer",he.enabled=!1,C.steerer.visible=!1):(Me="follow",he.enabled=!0,i.position.copy(he.target).add(dn),C.steerer.visible=!0);break;case"repair":{if(!N.moored){X.toast("Moor up first: nobody goes in the engine bay on the move.","info",3e3);break}if(et.needPart){const{part:G,shop:j}=et.needPart;if(y.hour<8||y.hour>=20){X.toast(`${Js(j)} is shut till 8 in the morning. The part will have to wait.`,"info",4e3);break}const lt=1+Math.round(Math.random()*2)/2;et.fetched(),y.skipTo((y.hour+lt)%24),X.toast(`${lt===1?"An hour":`${lt} hours`} and a bus ride later, you're back from ${j} with ${G}. Time for another go…`,"info",5500);break}if(y.skipTo((y.hour+1)%24),et.attempt())X.toast("An hour of muttering in the engine bay, and… she runs sweet as a nut. Fixed! 🔧","info",5e3);else{const{part:G,shop:j}=et.needPart;X.toast(`An hour of swearing in the engine bay, and you're missing ${G}. Nearest place: ${j}.`,"warn",6e3)}break}case"recenter":Me="follow",he.enabled=!0,C.steerer.visible=!0,he.target.copy(ke),i.position.set(E.x-Math.sin(E.psi)*24,ke.y+9,E.z-Math.cos(E.psi)*24),zn=0,he.update();break;case"map":Qt.bigOpen=!Qt.bigOpen,X.setMapOpen(Qt.bigOpen);break;case"help":X.toggleHelp();break;case"mute":Dt.toggleMute();break;case"moor":{if(vt){X.toast("Hang on: your steerer is still up the towpath with the boat hook.","info",2500);break}const G=N.act();if(G&&X.toast(G,"info",3e3),N.moored){const j=w.zoneAt(E.s),lt=F(Ot.current.zone);if((j==null?void 0:j.kind)==="stop"&&!ge.has(j.id)&&!ts(j.poi.kind))X.toast(`${j.name} is shut for the night. Still, it's a fine spot to tie up and sleep.`,"info",5e3);else if((j==null?void 0:j.kind)==="stop"&&!ge.has(j.id)){ge.add(j.id),w.hideStopMarker(j.id);const xt=j.poi.kind,Jt=Y.hunger>.35,ie=Jt&&bo.has(xt)?So(xt):null;let de=vb(j.poi.name,xt,Jt,y.hour);ie&&(de=de.replace("An hour slips happily by.",ie.note)),X.toast(de,"info",7500),y.skipTo((y.hour+((ie==null?void 0:ie.hours)??1))%24),es(j,!0)}else j&&es(j,!1);if(Fn.some(xt=>Math.abs(xt-E.s)<yo)&&Y.water<.95){const xt=Math.max(5,Math.round((1-Y.water)*60/5)*5);Y.fillWater(),y.skipTo((y.hour+xt/60)%24),X.toast(`You run the hose from the water point. The tap's slow: ${xt>=60?"a whole hour":`${xt} minutes`} later the tank's full to the brim. 💧`,"info",5e3)}if(Math.abs(E.s-At())<50&&(Y.diesel<.9||Y.gas<.9)&&(Y.refuel(),Y.payMeals(jr)?X.toast(`${Js(wt)} fill your tank and swap the gas bottle, for ${jr} meals' worth of grub. ⛽`,"info",5e3):(rt.change(-6,"unpaidFuel",0),X.toast(`${Js(wt)} fill you up, but there's nothing in the larder to pay with. Not a good look.`,"warn",5500))),et.damage>.05&&Math.abs(E.s-At())<50&&(et.fullRepair(),y.skipTo((y.hour+2)%24),X.toast(`${Js(wt)} give her a proper going-over: two hours later she's as good as new. 🔧`,"info",5500)),Pt&&j===Pt.dest&&Nt(),(j==null?void 0:j.kind)==="stop"&&me(j),st(),Zt&&j===lt&&!Ot.result){const xt=O.nextFrom(Qy);xt&&O.give(xt);const Jt=Ot.bumps+Ot.rocked===0;rt.change(Jt?5:3,Jt?"cleanTrip":"mission",0),X.showSummary(Ot.complete(y.clock),j.name,xt?Tn[xt].name:void 0),yt(),w.setActive(null),Qt.clearDestination()}else(j==null?void 0:j.kind)!=="stop"&&X.toast(j?`Moored at ${j.name}.`:Zt?`Moored up. Your trip ends at ${lt.name}.`:"Moored up.","info",3500)}break}case"nextTrip":if(Ot.result)Ot.next(y.clock),X.hideSummary(),Zt=!1,ee(),ct.roster(),yt();else if(X.offerOpen&&Xt==="helper"){X.hideOffer();const G=c.windingHoles.reduce((j,lt)=>Math.abs(lt-E.s)<Math.abs(j-E.s)?lt:j);Ut(G)}else if(X.offerOpen&&Xt==="volunteers")X.hideOffer(),ae&&ct.isStaffed(ae.group)&&(N.castOff(),ct.start(ae.group),X.toast(rt.atLeast("a courteous boat")?`"Ah, it's you again! Go on, sit back, we'll see you through."`:"The volunteers take over. Sit back and enjoy it.","info",3500));else if(X.offerOpen&&Xt==="lift")X.hideOffer(),gt();else if(X.offerOpen&&Xt==="fuel")X.hideOffer(),Y.refuel(),Y.payMeals(jr)?X.toast(`Diesel in the tank, a new gas bottle and a pile of logs and coal on the roof. Two meals' worth of grub changes hands: "Lovely, ta!" ⛽`,"info",5500):(rt.change(-6,"unpaidFuel",0),X.toast(`They fill you up, then you find the larder's bare: nothing to pay with. "Fine. We'll remember that." Word gets round the cut…`,"warn",6500));else if(X.offerOpen&&Xt==="sleep"){X.hideOffer(),y.skipTo(7.25),Pt&&X.toast(`${Pt.name} sleeps in the spare berth, and is up first with the kettle on.`,"info",4e3);const{fed:G,warm:j}=Y.wake(y.clock),lt=j?G?"You sleep like a log to the creak of the ropes, the stove ticking away.":"A restless night, stomach growling. You wake up starving.":"A freezing night: the stove went out and you wake stiff, cold and starving.";X.toast(`${lt} 🌅 Day ${y.day}: ${y.fog>.3?"mist on the water":"a clear morning"}.`,"info",5500)}else X.offerOpen&&(X.hideOffer(),Zt=!0,Ot.next(y.clock),yt(),w.setActive(F(Ot.current.zone)),Le());break;case"declineTrip":if(X.offerOpen&&X.hideOffer(),Xt==="trip"&&zt.add(Ot.index),Xt==="fuel"&&X.toast('"Right you are, see you next time round!" The fuel boat chugs on.',"info",3500),Xt==="helper"&&U&&(X.toast(`"Right you are! I'll leave you to it." They lean on the fence to watch.`,"info",3500),mt=0,Wt()),Xt==="lift"&&ut){X.toast(`"No worries!" ${ut.name} sets off up the towpath on foot.`,"info",3500);const G=w.zoneAt(E.s);G&&nt(G.id),ut=null}break;case"tripOffer":break;case"cook":{const G=Y.cannotCook(N.moored);if(G){X.toast(G,"info",3500);break}Y.cook(y.clock),y.skipTo((y.hour+.5)%24);const j=y.hour<10.5?"a fry-up":y.hour<15?"a sandwich and a mug of soup":"a proper supper";X.toast(`Half an hour in the galley, and ${j} eaten on the back deck. 🍳`,"info",4500);break}case"horn":Dt.start(),Dt.horn(),B.horn();break;case"clear":{if(Te&&!Te.sinking&&Math.hypot(Te.x-E.x,Te.z-E.z)<25){if(!N.moored){X.toast(`Moor up alongside to reach the ${Tn[Te.id].name.replace(/^an? /,"")} with the boat hook.`,"info",3e3);break}const lt=Tn[Te.id].name;O.give(Te.id),n.remove(Te.mesh),Te=null,X.toast(`A bit of a stretch with the boat hook, and you've got ${lt} back. Dripping, but back on the roof. 🎣`,"info",4500);break}const G=Ft.find(lt=>lt.active&&Math.abs(lt.s-E.s)<Ul),j=Rt.near(E.s);if(!G&&j){N.moored?(O.give(j.item),j.group.visible=!1,Y.addHeat(.5),X.toast(j.done,"info",4500)):X.toast("Moor up alongside first (F), then you can load it.","info",3e3);break}if(!G)X.toast("There's nothing here to clear.","info",2e3);else if(!N.moored)X.toast("Moor up first (F), then you can get at it with the boat hook.","info",3500);else if(!vt&&!G.clearing){const lt=ri(gb),xt=new q(new qt(.025,.025,2.6,6),new Yt({color:"#8a6a45"}));xt.position.set(0,-.6,.9),xt.rotation.x=1.2,lt.armR.add(xt),n.add(lt.group),C.steerer.visible=!1;const Jt=Math.sign(G.s-E.s)||1;vt={b:G,person:lt,phase:"out",s:E.s,target:G.s-Jt*2.5,home:E.s},X.toast("Off you hop with the boat hook…","info",2500)}break}case"autopilot":if(ct.active)ct.stop(),X.toast("You take the tiller back.","info",2500);else if(ae&&ct.isStaffed(ae.group)){Xt="volunteers";const G=fb({coat:"#1d5fa8",trousers:"#2d3a55",skin:"#e3b08f",hair:"#5a3a22",hairStyle:"short",longCoat:!1},j=>Yi(j,"wave",.3));X.showOffer("Volunteers on duty",`Help through ${ae.group.name}?`,`<img class="offer-pic" src="${G}" alt="">Canal &amp; River Trust volunteers in blue are working the lock today. Want them to work you through? Sit back and watch while they wind the paddles and swing the gates.`,"Yes please","I'll do it")}else X.toast("No volunteers on duty here, so you'll have to work this one yourself.","info",3e3);break;case"headlight":La=!La,C.headlight.intensity=La?40:0;break}},Uf=()=>{const I=c.bodies[c.bodyIndexAt(E.s)],G=E.s-s.meta.towerWharfS,j=`${sa(G)} ${Xe?Math.sign(G)===a?"past":"from":G>=0?"above":"below"} ${Xe?"Trevor":"Tower Wharf"}`;if(I.kind==="chamber")return[`In ${I.lockName}`,j];const lt=c.gates.find(de=>de.s>E.s),xt=[...c.gates].reverse().find(de=>de.s<E.s),Jt=g.at(E.s),ie=Jt!=null&&Jt.data.name?` · under ${Jt.data.name}`:"";if(Xe){if(E.s>r[0]&&E.s<r[1])return["Pontcysyllte Aqueduct",`126 ft above the River Dee · Telford, 1805${ie}`];if(Math.abs(E.s-s.meta.towerWharfS)<80)return["Trevor Basin",`Llangollen Canal${ie}`]}else if(Math.abs(E.s-_)<40)return["Taylor's Boatyard",`Historic boatbuilders and dry dock by Tower Wharf${ie}`];return!Xe&&Math.abs(E.s-s.meta.towerWharfS)<70?["Tower Wharf",`Junction with the Dee Branch${ie}`]:lt&&lt.s-E.s<160?[`Approaching ${lt.lockName}`,j+ie]:xt&&E.s-xt.s<120?[`Leaving ${xt.lockName}`,j+ie]:lt&&xt?[`${xt.lockName} → ${lt.lockName}`,j+ie]:[lt?`Towards ${lt.lockName}`:"Towards Christleton & Nantwich",j+ie]},kf=()=>{const I=he.target,G=i.position,j=I.distanceTo(G);for(let lt=4;lt<j;lt+=1.5){const xt=lt/j,Jt=I.x+(G.x-I.x)*xt,ie=I.y+(G.y-I.y)*xt,de=I.z+(G.z-I.z)*xt,Ge=o.project(Jt,de,E.s),on=g.rampAt(Ge.s,Ge.d);if(ie<R.roofAt(Jt,de)||ie<m.heightAt(Jt,de)+.5||on.onDeck&&ie<on.y+1.2){i.position.lerpVectors(I,G,Math.max(4,lt-2)/j);return}}};X.toast("Welcome aboard the Chester Rose! W to get going. Cruise past a green ! for a mission. H for help.","info",7e3),yt();const Nf=new GM;let Hn=0;addEventListener("resize",()=>{i.aspect=t.clientWidth/t.clientHeight,i.updateProjectionMatrix(),e.setSize(t.clientWidth,t.clientHeight,!1)});const hh=()=>{var fh;const I=Math.min(Nf.getDelta(),.1);Hn+=I;for(const Z of ne.drain())If(Z);const G=I*sn,j=Math.max(1,Math.ceil(G/Mb));for(let Z=0;Z<j;Z++){c.update(G/j),E.bowThrust=ne.bowThrust,!ct.active&&!(U!=null&&U.turning)&&E.step(G/j,ne.steer);for(const Mt of E.contacts)if(Mt.impulse>1500&&Pa<=0)if(Dt.bump(Math.min(1,Mt.impulse/12e3)),Pa=.4,!B.isKayak(Mt.obstacle)&&Mt.impulse>=Ma&&(et.knock(Mt.impulse),ar(Mt.impulse)),B.isKayak(Mt.obstacle))rt.change(-4,"kayak",6),X.toast(`A kayaker yelps and back-paddles furiously. "Watch where you're going!"`,"warn",3500);else if(Ft.some(oe=>oe.obstacle===Mt.obstacle))X.toast("It's jammed solid. Moor up nearby (F) and clear it with the boat hook (G).","warn",3500);else if(Mt.kind==="boat"&&!w.boats.includes(Mt.obstacle)){const oe=z.boats.find(Ne=>Ne.obstacle===Mt.obstacle),Ae=!!oe&&oe.speed>Math.abs(E.u)+.15;z.bumped(Mt.obstacle),Mt.impulse>3e3&&!Ae?(Ot.bumps++,rt.change(-2,"bump")):Ae&&oe&&X.toast(`${oe.name} bumps into you. "Oops! Sorry about that!"`,"info",3e3)}else if(Mt.kind==="boat"){const oe=Mt.obstacle;w.rockBoat(oe,Math.min(.08,Mt.impulse/5e4)),Mt.impulse>3e3&&(Ot.bumps++,rt.change(-3,"bump"),X.toast(`Bump! Sorry, ${oe.name}. A head pops out of the hatch…`,"warn",3e3))}else Mt.impulse>9e3&&(Ot.bumps++,X.toast(Mt.kind==="gate"?"Bump! Into the lock gates.":"Clunk. Mind the bank!","info",2200))}Pa-=I;const lt=o.frame(E.s),xt=Math.sin(E.psi)*lt.tx+Math.cos(E.psi)*lt.tz>=0;ae=rd(c,E.span(),xt);for(const Z of c.events.splice(0))(!Z.group||Z.group===(ae==null?void 0:ae.group)||Z.group.gates.some(oe=>Math.abs(oe.s-E.s)<150))&&X.toast(Z.text,Z.kind);if(ct.active&&ne.steer!==0&&(ct.stop(),X.toast("You take the tiller back.","info",2e3)),ct.night=y.isNight,ct.update(G,ae,xt)==="done"&&(X.toast("Through! The volunteers wave you on your way. Thanks, volunteers!","info",4500),ae=rd(c,E.span(),xt)),!ct.active&&(ae!=null&&ae.keeper)&&ae.gate&&ae.action!=="wait"){const Z=Ca(ae);if(Z!==Ia)Ia=Z,ch=Hn+1.5;else if(Hn>=ch){const Mt=ae.gate;ae.action==="paddlesUp"?Mt.wantPaddle=!0:ae.action==="paddlesDown"?Mt.wantPaddle=!1:ae.action==="close"?Mt.wantOpen=!1:ae.action==="open"&&c.levelsMatch(Mt)&&(Mt.wantOpen=!0),Ia=""}}const Jt=lh();if(Ao!==null&&(Ao!==Ca(ae)||!Oe||!Jt.includes(Oe))&&(Ao=null),Ao===null&&(Oe=ae!=null&&ae.gate&&!ae.keeper?ae.gate:Jt.includes(Oe)?Oe:Jt.at(-1)??null),x.setSelected(Oe),X.setLockPanel(c,{step:ae,levelsMatch:Z=>c.levelsMatch(Z),boatSpans:Ua,volunteers:ct.active?"active":ct.isStaffed(ae==null?void 0:ae.group)?"available":"none"}),ct.active&&ae){const Z=C.group.position.y,Mt=ae.gate;let oe,Ae;if(Mt&&ae.action in oh){oe=oh[ae.action];const Ne=o.frame(Mt.s);Ae=rh.set(Ne.x,m.bankTop(Mt.s)+2.2,Ne.z)}else oe=Math.abs(Z-Aa)>1e-5?`${Z>Aa?"▲":"▼"} ${ae.text}`:ae.text,Ae=rh.set(E.x,Z+3.2,E.z);Ae.project(i),Ae.z<1&&X.showWorldTip(oe,(Ae.x+1)/2*t.clientWidth,(1-Ae.y)/2*t.clientHeight),Aa=Z}N.moored?y.isNight&&!To&&!X.offerOpen&&!Ot.result&&(To=!0,st()):To=!1;const ie=z.boats.find(Z=>Z.fuel);if(ie?Ue=y.clock:z.fuelDue=y.clock-Ue>18,Qt.fuelBoat=ie?[ie.obstacle.x,ie.obstacle.z]:null,ie&&Ke!==ie&&!X.offerOpen&&!Ot.result&&E.speed*Gi<1.3&&Math.hypot(ie.obstacle.x-E.x,ie.obstacle.z-E.z)<28&&(Ke=ie,z.hold(ie,25),Xt="fuel",X.showOffer("The fuel boat","Ember pulls alongside",`Diesel, gas bottles, logs and coal. "${jr} meals' worth of grub and we'll fill you right up. Hungry work, shifting all them log piles and canisters!"`,"Fill her up","Not today")),Y.diesel<=0?(E.notch=0,be||(be=!0,X.toast("The engine coughs, splutters and dies. You've run out of diesel! Drift to the bank and wait for the fuel boat (orange on the map).","warn",8e3))):(be=!1,Y.dieselLow&&E.notch>1&&performance.now()>vn&&(vn=performance.now()+4e4,E.notch=1,X.toast("The engine coughs and splutters: the diesel is getting low. Look out for the fuel boat.","warn",4500))),et.limping?(E.notch=Math.min(E.notch,Yn-2),le||(le=!0,X.toast(`There's a nasty vibration from the stern now, and she won't go flat out. Have a go at fixing her (galley card), or head for ${wt}.`,"warn",7e3))):le=!1,Te){const Z=Te;!Z.sinking&&performance.now()>Z.until&&(Z.sinking=performance.now(),X.toast(`Glug. ${Js(Tn[Z.id].name)} sinks out of sight. You'll have to earn another.`,"info",4500));const Mt=c.levelAt(o.project(Z.x,Z.z,E.s).s);Z.mesh.position.y=Mt-.1+Math.sin(performance.now()/600)*.05-(Z.sinking?(performance.now()-Z.sinking)/2e3:0),Z.mesh.rotation.z=Math.sin(performance.now()/900)*.15,Z.sinking&&performance.now()-Z.sinking>3e3&&(n.remove(Z.mesh),Te=null)}const de=y.hour;if(B.crowd=de<6||de>=22?.08:de<8?.35:de<10?.7:de<18?1:de<20?.6:.25,B.night=z.night=y.isNight,rt.score>15&&B.crowd>.3&&!N.moored&&performance.now()>J&&(J=performance.now()+Math.max(35e3,2e5-rt.score*2e3)*(.7+Math.random()*.6),X.toast(Q[Math.floor(Math.random()*Q.length)],"info",3e3)),ct.onDuty=y.hour>=Il&&y.hour<Ad,y.hour>=17&&y.hour<18&&cr!==y.day&&!N.moored&&(cr=y.day,X.toast("Light's going in an hour or so. Time to think about where to moor for the night.","info",6e3)),y.isNight&&!N.moored&&!ct.active&&E.speed*Gi>.8&&(P!==y.day&&(P=y.day,X.toast("It's dark, and most boaters are moored up by now. Find a spot and tie up for the night.","warn",6e3)),rt.change(-2,"night",120)),Xe){const Z=xt?1:-1,Mt=z.boats.find(Vn=>Vn.dir!==Z&&Vn.s>r[0]-4&&Vn.s<r[1]+4),oe=Z>0?r[0]-E.s:E.s-r[1];Mt&&oe>0&&oe<90&&(Ht!==Mt&&(Ht=Mt,X.toast(`${Mt.name} is crossing the aqueduct towards you. Wait at this end until they're off: there's only room for one.`,"warn",5500)),E.speed*Gi<.6&&(Bt=Mt));const Ae=E.s>r[0]&&E.s<r[1];Mt&&Ae&&!_t&&(rt.change(-6,"aqueductClash",0),Bt=null,X.toast(`Oh dear. You've gone onto the aqueduct with ${Mt.name} coming the other way. Someone's going to have to reverse…`,"warn",6e3)),_t=Ae;const Ne=E.s>r[0]+5&&E.s<r[1]-5;Ne&&!W&&X.toast("Onto Pontcysyllte Aqueduct. 126 ft down to the Dee, with nothing but the trough edge on the far side. Don't look down!","info",6e3),W=Ne}if(!N.moored)Tt.clear();else if(!X.offerOpen&&!ut&&!Ot.result){const Z=w.zones.find(Mt=>L.has(Mt.id)&&!Tt.has(Mt.id)&&Math.abs((Mt.s0+Mt.s1)/2-E.s)<45);Z&&me(Z)}const Ge=E.speed*Gi>.4&&E.speed*Gi<2.8?w.boats.find(Z=>Math.abs(Z.s-E.s)<3):void 0;Ge&&performance.now()-(Et.get(Ge)??-1e9)>18e4&&(Et.set(Ge,performance.now()),rt.change(1,"slowPast",0),performance.now()-V>(rt.score<-15?4e4:24e4)&&(V=performance.now(),X.toast(`"Thanks for slowing!" calls someone aboard ${Ge.name}.`,"info",3e3)));for(const Z of c.gates)Z.paddle<.05?Ra.delete(Z):Math.abs(Z.s-E.s)>110&&!Ra.has(Z)&&(Ra.add(Z),rt.change(-5,"paddles",0),X.toast(`You've left the paddles up at ${Z.lockName}. The lock-keeper won't be pleased.`,"warn",6e3));hr=E.speed*Gi>4.3?hr+G:0,hr>6&&(X.toast("Steady on! The limit is 4 mph, and your wash is slapping the moored boats.","warn"),rt.change(-3,"speeding"),hr=-30),z.update(G,xt?1:-1);for(const Z of z.events.splice(0)){const Mt=y.hour<12?"Morning":y.hour<18?"Afternoon":"Evening";if(Z.kind==="waitingAqueduct"){X.toast(`${Z.boat.name} waits at the end of the aqueduct while you cross. Only room for one at a time.`,"info",4500);continue}if(Z.kind==="offAqueduct"){Bt===Z.boat&&(rt.change(3,"waitedTurn",0),X.toast(`"Cheers for waiting!" calls the steerer of ${Z.boat.name} as they come off the aqueduct.`,"info",4e3),Bt=null);continue}if(Z.kind==="greet"&&Math.random()>.5+rt.score/200){X.toast("The passing boat chugs by without so much as a wave.","info",2500);continue}Z.kind==="greet"&&rt.change(1,"greet",60),Z.kind==="wrongSide"&&rt.change(-2,"wrongSide"),Z.kind==="greet"?X.toast(`"${Mt}!" ${Z.boat.steerer?`${Z.boat.steerer} on ${Z.boat.name}`:`The steerer of ${Z.boat.name}`} gives you a wave.`,"info",3500):Z.kind==="wrongSide"?X.toast(`Pass oncoming boats on the right (port to port). ${Z.boat.name}'s steerer looks puzzled.`,"warn",4500):X.toast(`Bump! Sorry, ${Z.boat.name}!`,"warn",3e3)}for(const Z of L.values())Yi(Z,"shake",Hn*.8);{const Z=c.windingHoles.find(oe=>Math.abs(oe-E.s)<45);Z!==void 0&&!U&&!X.offerOpen&&!ct.active?(mt+=I,mt>60&&pt(Z)):Z===void 0&&(mt=0),U&&!U.turning&&Yi(U.person,X.offerOpen?"wave":"rest",Hn);const Mt=U==null?void 0:U.turning;if(Mt){Mt.t+=I/12;const oe=Math.min(1,Mt.t),Ae=oe*oe*(3-2*oe),Ne=o.frame(Mt.s),Vn=Math.min(1,oe/.4);E.x=Mt.x0+(Ne.x-Mt.x0)*Vn,E.z=Mt.z0+(Ne.z-Mt.z0)*Vn,E.psi=Mt.psi0+(Mt.psi1-Mt.psi0)*Ae,E.u=E.v=E.r=0,E.notch=0,E.thrust=0,E.s=o.project(E.x,E.z,E.s).s,oe>=1&&(X.toast('"There you go, facing the right way!" The old boater hops off and tips their cap.',"info",5e3),mt=0,Wt())}}B.update(I),dt-=I;for(const Z of B.events.splice(0))Z.kind==="hitBird"?(Dt.quack(),rt.change(Z.swan?-2:-1,Z.swan?"swan":"duck",4),X.toast(Z.swan?"A furious hiss! You ran right over a swan. Sound the horn (B) to clear the way.":"Squawk! A duck bobs out from under your bow in a flurry of feathers. Toot the horn (B) next time.","warn",4e3)):Z.kind==="quack"?(Dt.quack(),dt<=0&&(X.toast("Quack! A mallard paddles off, deeply unimpressed.","info",2500),dt=25)):(Ot.rocked++,rt.change(-3,"angler"),X.toast("An angler shakes a fist as your wash bobs their float. Ease off past the anglers!","warn",4e3));for(const Z of kt)!ce.has(Z.name)&&Math.abs(Z.s-E.s)<45&&(ce.add(Z.name),X.toast(_b(Z.name,Z.kind),"info",7e3));{const Z=Math.sin(E.psi),Mt=Math.cos(E.psi),oe=Nn/2+.3,Ae=Math.min(1,Math.abs(E.thrust)/3250);$.update(G,E.s,[E.x-Z*oe,E.z-Mt*oe],E.psi,E.speed*Gi,Ae)}Da-=I;for(const Z of $.washes(w.boats))w.rockBoat(Z.boat,.02+Z.strength*.07),!(Z.strength<.35)&&(Ot.rocked++,rt.change(-2,"wash"),Da<=0&&(X.toast(Cd[Math.floor(Math.random()*Cd.length)].replace("%",Z.boat.name),"warn",3500),Da=6));const on=(fh=g.at(E.s))==null?void 0:fh.data.name;if(on&&on!==ah&&X.toast(`Under ${on}`,"info",2200),ah=on,Bn(Hn),C.tillerHint.visible){const Z=.5+.5*Math.sin(Hn*3);C.tillerHint.material.opacity=.25+.45*Z,C.tillerHint.scale.setScalar(1+.12*Z)}if(u.update(I),x.update(I),w.update(I),M.update(I,i.position),b.update(I),Dt.rumble(M.rumble),N.update(c.levelAt(E.s),I),y.update(G/3600*Td,ke),Y.tick(G/3600*Td,!!ae&&!ct.active&&!N.moored,N.moored?0:Math.max(.15,Math.abs(E.notch)/Yn),y.isNight||y.fog>.4),y.sky.position.copy(i.position),Me==="follow"){const Z=ke.clone().sub(pi);if(Z.length()>50?(he.target.copy(ke),i.position.set(E.x-Math.sin(E.psi)*24,ke.y+9,E.z-Math.cos(E.psi)*24),zn=0):(i.position.add(Z),he.target.add(Z)),zn>0){const Mt=i.position.clone().sub(he.target);i.position.copy(he.target).addScaledVector(Mt.normalize(),zn)}if(performance.now()/1e3-we>3&&Math.abs(E.u)>.25){const Mt=i.position.clone().sub(he.target),oe=Math.atan2(Mt.x,Mt.z);let Ne=E.psi+(E.u>0?Math.PI:0)-oe;Ne=Math.atan2(Math.sin(Ne),Math.cos(Ne));const Vn=Ne*Math.min(1,I*.5);Mt.applyAxisAngle(new k(0,1,0),Vn),i.position.copy(he.target).add(Mt)}he.update(),zn=i.position.distanceTo(he.target),kf()}else{const Z=Math.sin(E.psi),Mt=Math.cos(E.psi),oe=-Nn/2+.9;i.position.set(E.x+Z*oe,ke.y+.75,E.z+Mt*oe),i.lookAt(E.x+Z*40,ke.y-.2,E.z+Mt*40)}pi.copy(ke),g.updateOcclusion(i.position,ke,I);const Gn=Math.floor(y.hour),Ln=Math.floor((y.hour-Gn)*12)*5;X.setHelm({notch:E.notch,speedMph:E.speed*Gi,timeScale:sn,clock:`${y.isNight?"🌙":"☀"} ${Gn}:${String(Ln).padStart(2,"0")}`});const[Ve,Cs]=Uf();X.setRep(rt.score,rt.standing,rt.face,rt.next),X.setGalley({hunger:Y.hunger,food:Y.food,foodMax:da,water:Y.water,canCook:Y.cannotCook(N.moored),gas:Y.gas,heat:Y.heat,diesel:Y.diesel,damage:et.damage,repair:et.needPart?`🛒 Fetch ${et.needPart.part} from ${et.needPart.shop}`:et.damage>.02?"🔧 Have a go at fixing her (1 hour)":null,repairNote:N.moored?et.needPart?"A bus ride into town: 1 to 2 hours, shops open 8 till 8.":`Or moor at ${wt} for a full repair.`:"Moor up to work on the boat.",moored:N.moored}),Y.starving&&performance.now()>wo&&(wo=performance.now()+12e4,X.toast(Y.food>0?"Your stomach rumbles. Moor up and cook something, or find a pub.":"Your stomach rumbles, and the larder is bare. Time for a pub, or a trip to the shops.","warn",5e3)),X.setLocation(Ve,Cs,`Journal: ${ge.size}/${re.length} canalside stops · ${ce.size}/${kt.length} sights · known as ${rt.standing}`),Qt.draw(E.x,E.z,E.psi);const ns=F(Ot.current.zone),uh=(ns.s0+ns.s1)/2-E.s,Of=E.s>ns.s0-4&&E.s<ns.s1+4,Ff=Math.sign(uh)===(xt?1:-1)?"ahead":"behind you",dh=ns.name.split(",")[0],zf=Of?`${dh} · pull in and tie up (F)`:`${dh} · ${sa(uh)} ${Ff}`;if(!Zt&&!Ot.result&&Si.forEach((Z,Mt)=>{if(Ot.done.has(Mt))return;const oe=F(Z.from),Ae=Math.abs((oe.s0+oe.s1)/2-E.s);Ae>90?zt.delete(Mt):Ae<45&&!zt.has(Mt)&&!X.offerOpen&&it(Mt)}),X.setTrip({state:Ot.result?"done":Zt?"active":"none",n:Ot.index+1,title:Ot.current.title,brief:Ot.current.brief,where:zf}),Pt){const Z=Pt.dest,Mt=(Z.s0+Z.s1)/2-E.s,oe=E.s>Z.s0-4&&E.s<Z.s1+4;X.setLift(`${Pt.name} → ${at(Z)} · ${oe?"moor up (F)":`${sa(Mt)} ${Math.sign(Mt)===(xt?1:-1)?"ahead":"behind"}`}`)}else X.setLift(null);if(vt){const Z=vt,oe=(Z.phase==="back"?Z.home:Z.target)-Z.s,Ae=Z.phase!=="hook"&&Math.abs(oe)>.1;Ae&&(Z.s+=Math.sign(oe)*Math.min(Math.abs(oe),1.6*G));const Ne=o.frame(Z.s),Vn=(c.halfWidthAt(Z.s)+1.3)*jt;Z.person.group.position.set(Ne.x+Ne.nx*Vn,m.bankTop(Z.s),Ne.z+Ne.nz*Vn),Ae?(Z.person.group.rotation.y=Math.atan2(Ne.tx*Math.sign(oe),Ne.tz*Math.sign(oe)),_a(Z.person,Hn*7)):(Z.person.group.rotation.y=Math.atan2(-Ne.nx*jt,-Ne.nz*jt),Af(Z.person),Yi(Z.person,Z.phase==="hook"?"push":"rest",Hn),Z.person.armR.rotation.x&&(Z.person.armR.rotation.x+=Math.sin(Hn*4)*.25)),Z.phase==="out"&&!Ae?(Z.phase="hook",Z.b.startClearing(),X.toast("Heave!","info",1500)):Z.phase==="back"&&!Ae&&(n.remove(Z.person.group),C.steerer.visible=Me!=="steerer",vt=null)}let is=null;for(const Z of Ft){if(Z.update(G,Hn)){const oe=E.obstacles.indexOf(Z.obstacle);oe>=0&&E.obstacles.splice(oe,1),Ot.cleared++,rt.change(5,"cleared",0),Qt.setHazards(Ft.filter(Ae=>Ae.active).map(Ae=>o.point(Ae.s,0))),X.toast(`${Z.description.cleared} Cast off (F) once you're back aboard.`,"info",7e3),(vt==null?void 0:vt.b)===Z&&(vt.phase="back")}if(!Z.active)continue;const Mt=Math.abs(Z.s-E.s);!Z.spotted&&Mt<90&&(Z.spotted=!0,X.toast(`${Z.description.spotted} Moor up nearby (F) and clear it with the boat hook (G).`,"warn",8e3)),Mt<Ul&&(!is||Mt<Math.abs(is.s-E.s))&&(is=Z)}let ss=N.prompt();const ka=is?void 0:Rt.near(E.s);ka&&(ss=N.moored?{key:"G",text:ka.verb,ready:!0}:ss??{key:"F",text:`Moor up to load ${Tn[ka.item].name}`,ready:!1}),is&&(N.moored?ss=is.clearing?{key:"G",text:`Clearing… ${Math.round(is.progress*100)}%`,ready:!1}:{key:"G",text:"Clear the blockage with the boat hook",ready:!0}:ss||(ss={key:"F",text:"Moor up alongside the towpath to get at the blockage",ready:!1})),Te&&!Te.sinking&&Math.hypot(Te.x-E.x,Te.z-E.z)<25&&(ss={key:"G",text:N.moored?`Fish out ${Tn[Te.id].name}`:`Moor up to fish out ${Tn[Te.id].name}`,ready:N.moored}),X.setPrompt(ss);const Bf=c.gates.reduce((Z,Mt)=>Z+(Math.abs(Mt.s-E.s)<120?Math.abs(Mt.flow):0),0);Dt.update(E.notch,Bf,X.isWinding,!y.isNight),e.render(n,i),requestAnimationFrame(hh)};await Vi("Casting off…"),Lf.classList.add("done"),requestAnimationFrame(hh),Object.assign(window,{game:{scene:n,boat:E,ww:c,camera:i,route:o,renderer:e,moorings:w,trips:Ot,traffic:z,decor:H,life:B,blockages:Ft,volunteers:ct,lines:N,minimap:Qt,roof:O,pickups:Rt,trains:M,cars:b}})}bb().catch(s=>{console.error(s),Df.textContent=`Something went wrong: ${s.message}`});
