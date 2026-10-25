var td=Object.defineProperty;var ed=(i,t,e)=>t in i?td(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var U=(i,t,e)=>ed(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cl="170",Cs={ROTATE:0,DOLLY:1,PAN:2},Es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nd=0,tc=1,id=2,eu=1,nu=2,Zn=3,wi=0,Ke=1,Ae=2,yi=0,Ps=1,ec=2,nc=3,ic=4,sd=5,Fi=100,od=101,rd=102,ad=103,ld=104,cd=200,hd=201,ud=202,dd=203,Ua=204,Na=205,fd=206,pd=207,md=208,gd=209,_d=210,vd=211,xd=212,Md=213,yd=214,Oa=0,Fa=1,ka=2,Is=3,za=4,Ba=5,Ha=6,Ga=7,iu=0,bd=1,wd=2,bi=0,Sd=1,Ed=2,Td=3,su=4,Ad=5,Rd=6,Cd=7,ou=300,Us=301,Ns=302,Va=303,Wa=304,Dr=306,Os=1e3,Kn=1001,Xa=1002,un=1003,Pd=1004,Po=1005,Nn=1006,kr=1007,Bi=1008,ii=1009,ru=1010,au=1011,xo=1012,Pl=1013,Wi=1014,On=1015,To=1016,Ll=1017,Dl=1018,Fs=1020,lu=35902,cu=1021,hu=1022,An=1023,uu=1024,du=1025,Ls=1026,ks=1027,Il=1028,Ul=1029,fu=1030,Nl=1031,Ol=1033,vr=33776,xr=33777,Mr=33778,yr=33779,$a=35840,qa=35841,Ya=35842,ja=35843,Za=36196,Ka=37492,Ja=37496,Qa=37808,tl=37809,el=37810,nl=37811,il=37812,sl=37813,ol=37814,rl=37815,al=37816,ll=37817,cl=37818,hl=37819,ul=37820,dl=37821,br=36492,fl=36494,pl=36495,pu=36283,ml=36284,gl=36285,_l=36286,Ld=3200,Dd=3201,mu=0,Id=1,vi="",Ee="srgb",Vs="srgb-linear",Ir="linear",Me="srgb",ts=7680,sc=519,Ud=512,Nd=513,Od=514,gu=515,Fd=516,kd=517,zd=518,Bd=519,vl=35044,Gi=35048,oc="300 es",Jn=2e3,Ar=2001;class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rc=1234567;const po=Math.PI/180,zs=180/Math.PI;function kn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Fe(i,t,e){return Math.max(t,Math.min(e,i))}function Fl(i,t){return(i%t+t)%t}function Hd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Gd(i,t,e){return i!==t?(e-i)/(t-i):0}function mo(i,t,e){return(1-e)*i+e*t}function Vd(i,t,e,n){return mo(i,t,1-Math.exp(-e*n))}function Wd(i,t=1){return t-Math.abs(Fl(i,t*2)-t)}function Xd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function $d(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function qd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Yd(i,t){return i+Math.random()*(t-i)}function jd(i){return i*(.5-Math.random())}function Zd(i){i!==void 0&&(rc=i);let t=rc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kd(i){return i*po}function Jd(i){return i*zs}function Qd(i){return(i&i-1)===0&&i!==0}function tf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ef(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nf(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),f=o((t-n)/2),d=r((t-n)/2),u=o((n-t)/2),m=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function En(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bs={DEG2RAD:po,RAD2DEG:zs,generateUUID:kn,clamp:Fe,euclideanModulo:Fl,mapLinear:Hd,inverseLerp:Gd,lerp:mo,damp:Vd,pingpong:Wd,smoothstep:Xd,smootherstep:$d,randInt:qd,randFloat:Yd,randFloatSpread:jd,seededRandom:Zd,degToRad:Kd,radToDeg:Jd,isPowerOfTwo:Qd,ceilPowerOfTwo:tf,floorPowerOfTwo:ef,setQuaternionFromProperEuler:nf,normalize:xe,denormalize:En};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ne{constructor(t,e,n,s,o,r,a,l,c){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],m=n[8],_=s[0],g=s[3],p=s[6],x=s[1],M=s[4],v=s[7],T=s[2],w=s[5],y=s[8];return o[0]=r*_+a*x+l*T,o[3]=r*g+a*M+l*w,o[6]=r*p+a*v+l*y,o[1]=c*_+h*x+f*T,o[4]=c*g+h*M+f*w,o[7]=c*p+h*v+f*y,o[2]=d*_+u*x+m*T,o[5]=d*g+u*M+m*w,o[8]=d*p+u*v+m*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*r-a*c,d=a*l-h*o,u=c*o-r*l,m=e*f+n*d+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=f*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*o-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zr.makeScale(t,e)),this}rotate(t){return this.premultiply(zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zr=new ne;function _u(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sf(){const i=Rr("canvas");return i.style.display="block",i}const ac={};function ho(i){i in ac||(ac[i]=!0,console.warn(i))}function of(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function rf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function af(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const pe={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Me&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Me&&(i.r=Ds(i.r),i.g=Ds(i.g),i.b=Ds(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?Ir:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const lc=[.64,.33,.3,.6,.15,.06],cc=[.2126,.7152,.0722],hc=[.3127,.329],uc=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dc=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pe.define({[Vs]:{primaries:lc,whitePoint:hc,transfer:Ir,toXYZ:uc,fromXYZ:dc,luminanceCoefficients:cc,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:lc,whitePoint:hc,transfer:Me,toXYZ:uc,fromXYZ:dc,luminanceCoefficients:cc,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}});let es;class lf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=Rr("canvas")),es.width=t.width,es.height=t.height;const n=es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=ti(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cf=0;class vu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Br(s[r].image)):o.push(Br(s[r]))}else o=Br(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hf=0;class Ye extends qi{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Kn,s=Kn,o=Nn,r=Bi,a=An,l=ii,c=Ye.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=kn(),this.name="",this.source=new vu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ou)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Os:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Os:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=ou;Ye.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,s=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(u+1)/2,T=(p+1)/2,w=(h+d)/4,y=(f+_)/4,R=(m+g)/4;return M>v&&M>T?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=w/n,o=y/n):v>T?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=w/s,o=R/s):T<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(T),n=y/o,s=R/o),this.set(n,s,o,e),this}let x=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(f-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uf extends qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new vu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends uf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xu extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class df extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const d=o[r+0],u=o[r+1],m=o[r+2],_=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=m,t[e+3]=_;return}if(f!==_||l!==d||c!==u||h!==m){let g=1-a;const p=l*d+c*u+h*m+f*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),w=Math.atan2(T,p*x);g=Math.sin(g*w)/T,a=Math.sin(a*w)/T}const v=a*x;if(l=l*g+d*v,c=c*g+u*v,h=h*g+m*v,f=f*g+_*v,g===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=o[r],d=o[r+1],u=o[r+2],m=o[r+3];return t[e]=a*m+h*f+l*u-c*d,t[e+1]=l*m+h*d+c*f-a*u,t[e+2]=c*m+h*u+a*d-l*f,t[e+3]=h*m-a*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(o/2),d=l(n/2),u=l(s/2),m=l(o/2);switch(r){case"XYZ":this._x=d*h*f+c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f-d*u*m;break;case"YXZ":this._x=d*h*f+c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f+d*u*m;break;case"ZXY":this._x=d*h*f-c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f-d*u*m;break;case"ZYX":this._x=d*h*f-c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f+d*u*m;break;case"YZX":this._x=d*h*f+c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f-d*u*m;break;case"XZY":this._x=d*h*f-c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f+d*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(o-c)*u,this._z=(r-s)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+r)/u,this._z=(o+c)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(o-c)/u,this._x=(s+r)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(r-s)/u,this._x=(o+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-e;return this._w=u*r+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),f=2*(o*n-r*e);return this.x=e+l*c+r*f-a*h,this.y=n+l*h+a*c-o*f,this.z=s+l*f+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hr.copy(this).projectOnVector(t),this.sub(Hr)}reflect(t){return this.sub(Hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new I,fc=new _n;class Yi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Mn):Mn.fromBufferAttribute(o,r),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lo.copy(n.boundingBox)),Lo.applyMatrix4(t.matrixWorld),this.union(Lo)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Do.subVectors(this.max,js),ns.subVectors(t.a,js),is.subVectors(t.b,js),ss.subVectors(t.c,js),li.subVectors(is,ns),ci.subVectors(ss,is),Ri.subVectors(ns,ss);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ri.z,Ri.y,li.z,0,-li.x,ci.z,0,-ci.x,Ri.z,0,-Ri.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ri.y,Ri.x,0];return!Gr(e,ns,is,ss,Do)||(e=[1,0,0,0,1,0,0,0,1],!Gr(e,ns,is,ss,Do))?!1:(Io.crossVectors(li,ci),e=[Io.x,Io.y,Io.z],Gr(e,ns,is,ss,Do))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Wn=[new I,new I,new I,new I,new I,new I,new I,new I],Mn=new I,Lo=new Yi,ns=new I,is=new I,ss=new I,li=new I,ci=new I,Ri=new I,js=new I,Do=new I,Io=new I,Ci=new I;function Gr(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Ci.fromArray(i,o);const a=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ff=new Yi,Zs=new I,Vr=new I;class Ws{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ff.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);const e=Zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(Vr)),this.expandByPoint(Zs.copy(t.center).sub(Vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new I,Wr=new I,Uo=new I,hi=new I,Xr=new I,No=new I,$r=new I;class Ur{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wr.copy(t).add(e).multiplyScalar(.5),Uo.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(Wr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Uo),a=hi.dot(this.direction),l=-hi.dot(Uo),c=hi.lengthSq(),h=Math.abs(1-r*r);let f,d,u,m;if(h>0)if(f=r*l-a,d=r*a-l,m=o*h,f>=0)if(d>=-m)if(d<=m){const _=1/h;f*=_,d*=_,u=f*(f+r*d+2*a)+d*(r*f+d+2*l)+c}else d=o,f=Math.max(0,-(r*d+a)),u=-f*f+d*(d+2*l)+c;else d=-o,f=Math.max(0,-(r*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-r*o+a)),d=f>0?-o:Math.min(Math.max(-o,-l),o),u=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-o,-l),o),u=d*(d+2*l)+c):(f=Math.max(0,-(r*o+a)),d=f>0?o:Math.min(Math.max(-o,-l),o),u=-f*f+d*(d+2*l)+c);else d=r>0?-o:o,f=Math.max(0,-(r*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Wr).addScaledVector(Uo,d),u}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);const n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,o){Xr.subVectors(e,t),No.subVectors(n,t),$r.crossVectors(Xr,No);let r=this.direction.dot($r),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;hi.subVectors(this.origin,t);const l=a*this.direction.dot(No.crossVectors(hi,No));if(l<0)return null;const c=a*this.direction.dot(Xr.cross(hi));if(c<0||l+c>r)return null;const h=-a*hi.dot($r);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,o,r,a,l,c,h,f,d,u,m,_,g){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,f,d,u,m,_,g)}set(t,e,n,s,o,r,a,l,c,h,f,d,u,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),o=1/os.setFromMatrixColumn(t,1).length(),r=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const d=r*h,u=r*f,m=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+m*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=m+u*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,u=l*f,m=c*h,_=c*f;e[0]=d+_*a,e[4]=m*a-u,e[8]=r*c,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=u*a-m,e[6]=_+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,u=l*f,m=c*h,_=c*f;e[0]=d-_*a,e[4]=-r*f,e[8]=m+u*a,e[1]=u+m*a,e[5]=r*h,e[9]=_-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,u=r*f,m=a*h,_=a*f;e[0]=l*h,e[4]=m*c-u,e[8]=d*c+_,e[1]=l*f,e[5]=_*c+d,e[9]=u*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,u=r*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-d*f,e[8]=m*f+u,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*f+m,e[10]=d-_*f}else if(t.order==="XZY"){const d=r*l,u=r*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+_,e[5]=r*h,e[9]=u*f-m,e[2]=m*f-u,e[6]=a*h,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pf,t,mf)}lookAt(t,e,n){const s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ui.crossVectors(n,ln),ui.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ui.crossVectors(n,ln)),ui.normalize(),Oo.crossVectors(ln,ui),s[0]=ui.x,s[4]=Oo.x,s[8]=ln.x,s[1]=ui.y,s[5]=Oo.y,s[9]=ln.y,s[2]=ui.z,s[6]=Oo.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],M=n[7],v=n[11],T=n[15],w=s[0],y=s[4],R=s[8],S=s[12],b=s[1],C=s[5],O=s[9],B=s[13],z=s[2],N=s[6],W=s[10],G=s[14],X=s[3],dt=s[7],vt=s[11],yt=s[15];return o[0]=r*w+a*b+l*z+c*X,o[4]=r*y+a*C+l*N+c*dt,o[8]=r*R+a*O+l*W+c*vt,o[12]=r*S+a*B+l*G+c*yt,o[1]=h*w+f*b+d*z+u*X,o[5]=h*y+f*C+d*N+u*dt,o[9]=h*R+f*O+d*W+u*vt,o[13]=h*S+f*B+d*G+u*yt,o[2]=m*w+_*b+g*z+p*X,o[6]=m*y+_*C+g*N+p*dt,o[10]=m*R+_*O+g*W+p*vt,o[14]=m*S+_*B+g*G+p*yt,o[3]=x*w+M*b+v*z+T*X,o[7]=x*y+M*C+v*N+T*dt,o[11]=x*R+M*O+v*W+T*vt,o[15]=x*S+M*B+v*G+T*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+o*l*f-s*c*f-o*a*d+n*c*d+s*a*u-n*l*u)+_*(+e*l*u-e*c*d+o*r*d-s*r*u+s*c*h-o*l*h)+g*(+e*c*f-e*a*u-o*r*f+n*r*u+o*a*h-n*c*h)+p*(-s*a*h-e*l*f+e*a*d+s*r*f-n*r*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],m=t[12],_=t[13],g=t[14],p=t[15],x=f*g*c-_*d*c+_*l*u-a*g*u-f*l*p+a*d*p,M=m*d*c-h*g*c-m*l*u+r*g*u+h*l*p-r*d*p,v=h*_*c-m*f*c+m*a*u-r*_*u-h*a*p+r*f*p,T=m*f*l-h*_*l-m*a*d+r*_*d+h*a*g-r*f*g,w=e*x+n*M+s*v+o*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/w;return t[0]=x*y,t[1]=(_*d*o-f*g*o-_*s*u+n*g*u+f*s*p-n*d*p)*y,t[2]=(a*g*o-_*l*o+_*s*c-n*g*c-a*s*p+n*l*p)*y,t[3]=(f*l*o-a*d*o-f*s*c+n*d*c+a*s*u-n*l*u)*y,t[4]=M*y,t[5]=(h*g*o-m*d*o+m*s*u-e*g*u-h*s*p+e*d*p)*y,t[6]=(m*l*o-r*g*o-m*s*c+e*g*c+r*s*p-e*l*p)*y,t[7]=(r*d*o-h*l*o+h*s*c-e*d*c-r*s*u+e*l*u)*y,t[8]=v*y,t[9]=(m*f*o-h*_*o-m*n*u+e*_*u+h*n*p-e*f*p)*y,t[10]=(r*_*o-m*a*o+m*n*c-e*_*c-r*n*p+e*a*p)*y,t[11]=(h*a*o-r*f*o-h*n*c+e*f*c+r*n*u-e*a*u)*y,t[12]=T*y,t[13]=(h*_*s-m*f*s+m*n*d-e*_*d-h*n*g+e*f*g)*y,t[14]=(m*a*s-r*_*s-m*n*l+e*_*l+r*n*g-e*a*g)*y,t[15]=(r*f*s-h*a*s+h*n*l-e*f*l-r*n*d+e*a*d)*y,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,f=a+a,d=o*c,u=o*h,m=o*f,_=r*h,g=r*f,p=a*f,x=l*c,M=l*h,v=l*f,T=n.x,w=n.y,y=n.z;return s[0]=(1-(_+p))*T,s[1]=(u+v)*T,s[2]=(m-M)*T,s[3]=0,s[4]=(u-v)*w,s[5]=(1-(d+p))*w,s[6]=(g+x)*w,s[7]=0,s[8]=(m+M)*y,s[9]=(g-x)*y,s[10]=(1-(d+_))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=os.set(s[0],s[1],s[2]).length();const r=os.set(s[4],s[5],s[6]).length(),a=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);const c=1/o,h=1/r,f=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,e.setFromRotationMatrix(yn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Jn){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let u,m;if(a===Jn)u=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===Ar)u=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Jn){const l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(r-o),d=(e+t)*c,u=(n+s)*h;let m,_;if(a===Jn)m=(r+o)*f,_=-2*f;else if(a===Ar)m=o*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const os=new I,yn=new he,pf=new I(0,0,0),mf=new I(1,1,1),ui=new I,Oo=new I,ln=new I,pc=new he,mc=new _n;class Cn{constructor(t=0,e=0,n=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Fe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mc.setFromEuler(this),this.setFromQuaternion(mc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class kl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gf=0;const gc=new I,rs=new _n,$n=new he,Fo=new I,Ks=new I,_f=new I,vf=new _n,_c=new I(1,0,0),vc=new I(0,1,0),xc=new I(0,0,1),Mc={type:"added"},xf={type:"removed"},as={type:"childadded",child:null},qr={type:"childremoved",child:null};class Ce extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new I,e=new Cn,n=new _n,s=new I(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new ne}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(_c,t)}rotateY(t){return this.rotateOnAxis(vc,t)}rotateZ(t){return this.rotateOnAxis(xc,t)}translateOnAxis(t,e){return gc.copy(t).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_c,t)}translateY(t){return this.translateOnAxis(vc,t)}translateZ(t){return this.translateOnAxis(xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fo.copy(t):Fo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Ks,Fo,this.up):$n.lookAt(Fo,Ks,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),rs.setFromRotationMatrix($n),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mc),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xf),qr.child=t,this.dispatchEvent(qr),qr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mc),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,_f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),f=r(t.shapes),d=r(t.skeletons),u=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new I(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new I,qn=new I,Yr=new I,Yn=new I,ls=new I,cs=new I,yc=new I,jr=new I,Zr=new I,Kr=new I,Jr=new Re,Qr=new Re,ta=new Re;class pn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){bn.subVectors(s,e),qn.subVectors(n,e),Yr.subVectors(t,e);const r=bn.dot(bn),a=bn.dot(qn),l=bn.dot(Yr),c=qn.dot(qn),h=qn.dot(Yr),f=r*c-a*a;if(f===0)return o.set(0,0,0),null;const d=1/f,u=(c*l-a*h)*d,m=(r*h-a*l)*d;return o.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Yn.x),l.addScaledVector(r,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return Jr.setScalar(0),Qr.setScalar(0),ta.setScalar(0),Jr.fromBufferAttribute(t,e),Qr.fromBufferAttribute(t,n),ta.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Jr,o.x),r.addScaledVector(Qr,o.y),r.addScaledVector(ta,o.z),r}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),qn.subVectors(t,e),bn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),bn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;ls.subVectors(s,n),cs.subVectors(o,n),jr.subVectors(t,n);const l=ls.dot(jr),c=cs.dot(jr);if(l<=0&&c<=0)return e.copy(n);Zr.subVectors(t,s);const h=ls.dot(Zr),f=cs.dot(Zr);if(h>=0&&f<=h)return e.copy(s);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(ls,r);Kr.subVectors(t,o);const u=ls.dot(Kr),m=cs.dot(Kr);if(m>=0&&u<=m)return e.copy(o);const _=u*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(cs,a);const g=h*m-u*f;if(g<=0&&f-h>=0&&u-m>=0)return yc.subVectors(o,s),a=(f-h)/(f-h+(u-m)),e.copy(s).addScaledVector(yc,a);const p=1/(g+_+d);return r=_*p,a=d*p,e.copy(n).addScaledVector(ls,r).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},ko={h:0,s:0,l:0};function ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=Fl(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=ea(r,o,t+1/3),this.g=ea(r,o,t),this.b=ea(r,o,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ee){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=Mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return pe.fromWorkingColorSpace($e.copy(this),t),Math.round(Fe($e.r*255,0,255))*65536+Math.round(Fe($e.g*255,0,255))*256+Math.round(Fe($e.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace($e.copy(this),e);const n=$e.r,s=$e.g,o=$e.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=h<=.5?f/(r+a):f/(2-r-a),r){case n:l=(s-o)/f+(s<o?6:0);break;case s:l=(o-n)/f+2;break;case o:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ee){pe.fromWorkingColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,s=$e.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(ko);const n=mo(di.h,ko.h,e),s=mo(di.s,ko.s,e),o=mo(di.l,ko.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new zt;zt.NAMES=Mu;let Mf=0;class ji extends qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=kn(),this.name="",this.blending=Ps,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pn extends ji{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new I,zo=new rt;class Ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vl,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zo.fromBufferAttribute(this,e),zo.applyMatrix3(t),this.setXY(e,zo.x,zo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=En(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=En(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=En(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=En(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),o=xe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vl&&(t.usage=this.usage),t}}class yu extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bu extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $t extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yf=0;const dn=new he,na=new Ce,hs=new I,cn=new Yi,Js=new Yi,He=new I;class me extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_u(t)?bu:yu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ne().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new $t(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];cn.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(cn.min,Js.min),cn.expandByPoint(He),He.addVectors(cn.max,Js.max),cn.expandByPoint(He)):(cn.expandByPoint(Js.min),cn.expandByPoint(Js.max))}cn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)He.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(He));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(t,c),He.add(hs)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new I,l[R]=new I;const c=new I,h=new I,f=new I,d=new rt,u=new rt,m=new rt,_=new I,g=new I;function p(R,S,b){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,b),d.fromBufferAttribute(o,R),u.fromBufferAttribute(o,S),m.fromBufferAttribute(o,b),h.sub(c),f.sub(c),u.sub(d),m.sub(d);const C=1/(u.x*m.y-m.x*u.y);isFinite(C)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-u.y).multiplyScalar(C),g.copy(f).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(C),a[R].add(_),a[S].add(_),a[b].add(_),l[R].add(g),l[S].add(g),l[b].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,S=x.length;R<S;++R){const b=x[R],C=b.start,O=b.count;for(let B=C,z=C+O;B<z;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const M=new I,v=new I,T=new I,w=new I;function y(R){T.fromBufferAttribute(s,R),w.copy(T);const S=a[R];M.copy(S),M.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(w,S);const C=v.dot(l[R])<0?-1:1;r.setXYZW(R,M.x,M.y,M.z,C)}for(let R=0,S=x.length;R<S;++R){const b=x[R],C=b.start,O=b.count;for(let B=C,z=C+O;B<z;B+=3)y(t.getX(B+0)),y(t.getX(B+1)),y(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const s=new I,o=new I,r=new I,a=new I,l=new I,c=new I,h=new I,f=new I;if(t)for(let d=0,u=t.count;d<u;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let u=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let p=0;p<h;p++)d[m++]=c[u++]}return new Ue(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],f=o[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bc=new he,Pi=new Ur,Bo=new Ws,wc=new I,Ho=new I,Go=new I,Vo=new I,ia=new I,Wo=new I,Sc=new I,Xo=new I;class J extends Ce{constructor(t=new me,e=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Wo.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],f=o[l];h!==0&&(ia.fromBufferAttribute(f,t),r?Wo.addScaledVector(ia,h):Wo.addScaledVector(ia.sub(e),h))}e.add(Wo)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(o),Pi.copy(t.ray).recast(t.near),!(Bo.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Bo,wc)===null||Pi.origin.distanceToSquared(wc)>(t.far-t.near)**2))&&(bc.copy(o).invert(),Pi.copy(t.ray).applyMatrix4(bc),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,d=o.groups,u=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=r[g.materialIndex],x=Math.max(g.start,u.start),M=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let v=x,T=M;v<T;v+=3){const w=a.getX(v),y=a.getX(v+1),R=a.getX(v+2);s=$o(this,p,t,n,c,h,f,w,y,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);s=$o(this,r,t,n,c,h,f,x,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=r[g.materialIndex],x=Math.max(g.start,u.start),M=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let v=x,T=M;v<T;v+=3){const w=v,y=v+1,R=v+2;s=$o(this,p,t,n,c,h,f,w,y,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let g=m,p=_;g<p;g+=3){const x=g,M=g+1,v=g+2;s=$o(this,r,t,n,c,h,f,x,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function bf(i,t,e,n,s,o,r,a){let l;if(t.side===Ke?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===wi,a),l===null)return null;Xo.copy(a),Xo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Xo);return c<e.near||c>e.far?null:{distance:c,point:Xo.clone(),object:i}}function $o(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Ho),i.getVertexPosition(l,Go),i.getVertexPosition(c,Vo);const h=bf(i,t,e,n,Ho,Go,Vo,Sc);if(h){const f=new I;pn.getBarycoord(Sc,Ho,Go,Vo,f),s&&(h.uv=pn.getInterpolatedAttribute(s,a,l,c,f,new rt)),o&&(h.uv1=pn.getInterpolatedAttribute(o,a,l,c,f,new rt)),r&&(h.normal=pn.getInterpolatedAttribute(r,a,l,c,f,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};pn.getNormal(Ho,Go,Vo,d.normal),h.face=d,h.barycoord=f}return h}class Wt extends me{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],f=[];let d=0,u=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,o,4),m("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(f,2));function m(_,g,p,x,M,v,T,w,y,R,S){const b=v/y,C=T/R,O=v/2,B=T/2,z=w/2,N=y+1,W=R+1;let G=0,X=0;const dt=new I;for(let vt=0;vt<W;vt++){const yt=vt*C-B;for(let Gt=0;Gt<N;Gt++){const Ht=Gt*b-O;dt[_]=Ht*x,dt[g]=yt*M,dt[p]=z,c.push(dt.x,dt.y,dt.z),dt[_]=0,dt[g]=0,dt[p]=w>0?1:-1,h.push(dt.x,dt.y,dt.z),f.push(Gt/y),f.push(1-vt/R),G+=1}}for(let vt=0;vt<R;vt++)for(let yt=0;yt<y;yt++){const Gt=d+yt+N*vt,Ht=d+yt+N*(vt+1),K=d+(yt+1)+N*(vt+1),ot=d+(yt+1)+N*vt;l.push(Gt,Ht,ot),l.push(Ht,K,ot),X+=6}a.addGroup(u,X,S),u+=X,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=Hs(i[e]);for(const s in n)t[s]=n[s]}return t}function wf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Su={clone:Hs,merge:Ze};var Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends ji{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=Ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=wf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Eu extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new I,Ec=new rt,Tc=new rt;class nn extends Eu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,Ec,Tc),e.subVectors(Tc,Ec)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(po*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const us=-90,ds=1;class Tf extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(us,ds,t,e);s.layers=this.layers,this.add(s);const o=new nn(us,ds,t,e);o.layers=this.layers,this.add(o);const r=new nn(us,ds,t,e);r.layers=this.layers,this.add(r);const a=new nn(us,ds,t,e);a.layers=this.layers,this.add(a);const l=new nn(us,ds,t,e);l.layers=this.layers,this.add(l);const c=new nn(us,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Tu extends Ye{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Us,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Af extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Tu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wt(5,5,5),o=new si({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:yi});o.uniforms.tEquirect.value=e;const r=new J(s,o),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=Nn),new Tf(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const sa=new I,Rf=new I,Cf=new ne;class _i{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=sa.subVectors(n,e).cross(Rf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Cf.getNormalMatrix(t),s=this.coplanarPoint(sa).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Ws,qo=new I;class zl{constructor(t=new _i,e=new _i,n=new _i,s=new _i,o=new _i,r=new _i){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],u=s[8],m=s[9],_=s[10],g=s[11],p=s[12],x=s[13],M=s[14],v=s[15];if(n[0].setComponents(l-o,d-c,g-u,v-p).normalize(),n[1].setComponents(l+o,d+c,g+u,v+p).normalize(),n[2].setComponents(l+r,d+h,g+m,v+x).normalize(),n[3].setComponents(l-r,d-h,g-m,v-x).normalize(),n[4].setComponents(l-a,d-f,g-_,v-M).normalize(),e===Jn)n[5].setComponents(l+a,d+f,g+_,v+M).normalize();else if(e===Ar)n[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(qo.x=s.normal.x>0?t.max.x:t.min.x,qo.y=s.normal.y>0?t.max.y:t.min.y,qo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Au(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Pf(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((u,m)=>u.start-m.start);let d=0;for(let u=1;u<f.length;u++){const m=f[d],_=f[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,f[d]=_)}f.length=d+1;for(let u=0,m=f.length;u<m;u++){const _=f[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class ri extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,d=e/l,u=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const x=p*d-r;for(let M=0;M<c;M++){const v=M*f-o;m.push(v,-x,0),_.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const M=x+c*p,v=x+c*(p+1),T=x+1+c*(p+1),w=x+1+c*p;u.push(M,v,w),u.push(v,T,w)}this.setIndex(u),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.width,t.height,t.widthSegments,t.heightSegments)}}var Lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Df=`#ifdef USE_ALPHAHASH
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
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
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
#endif`,kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf=`#ifdef USE_BATCHING
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
#endif`,Bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Xf=`#ifdef USE_BUMPMAP
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
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tp=`#define PI 3.141592653589793
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
} // validated`,ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,np=`vec3 transformedNormal = objectNormal;
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
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
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
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bp=`uniform bool receiveShadow;
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
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rp=`PhysicalMaterial material;
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
#endif`,Cp=`struct PhysicalMaterial {
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
}`,Pp=`
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
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Up=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bp=`#if defined( USE_POINTS_UV )
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
#endif`,Hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$p=`#ifdef USE_MORPHTARGETS
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
#endif`,qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
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
#endif`,tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,om=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mm=`float getShadowMask() {
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
}`,gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,Mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lm=`uniform sampler2D t2D;
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`#include <common>
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
}`,Fm=`#if DEPTH_PACKING == 3200
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
}`,km=`#define DISTANCE
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
}`,zm=`#define DISTANCE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`uniform float scale;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 diffuse;
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
}`,$m=`#define LAMBERT
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
}`,qm=`#define LAMBERT
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
}`,Ym=`#define MATCAP
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
}`,jm=`#define MATCAP
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
}`,Zm=`#define NORMAL
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
}`,Km=`#define NORMAL
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
}`,Jm=`#define PHONG
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
}`,Qm=`#define PHONG
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
}`,t0=`#define STANDARD
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
}`,e0=`#define STANDARD
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
}`,n0=`#define TOON
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
}`,i0=`#define TOON
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
}`,s0=`uniform float size;
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
}`,o0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,a0=`uniform vec3 color;
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
}`,l0=`uniform float rotation;
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
}`,c0=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:Lf,alphahash_pars_fragment:Df,alphamap_fragment:If,alphamap_pars_fragment:Uf,alphatest_fragment:Nf,alphatest_pars_fragment:Of,aomap_fragment:Ff,aomap_pars_fragment:kf,batching_pars_vertex:zf,batching_vertex:Bf,begin_vertex:Hf,beginnormal_vertex:Gf,bsdfs:Vf,iridescence_fragment:Wf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:$f,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:Yf,clipping_planes_vertex:jf,color_fragment:Zf,color_pars_fragment:Kf,color_pars_vertex:Jf,color_vertex:Qf,common:tp,cube_uv_reflection_fragment:ep,defaultnormal_vertex:np,displacementmap_pars_vertex:ip,displacementmap_vertex:sp,emissivemap_fragment:op,emissivemap_pars_fragment:rp,colorspace_fragment:ap,colorspace_pars_fragment:lp,envmap_fragment:cp,envmap_common_pars_fragment:hp,envmap_pars_fragment:up,envmap_pars_vertex:dp,envmap_physical_pars_fragment:wp,envmap_vertex:fp,fog_vertex:pp,fog_pars_vertex:mp,fog_fragment:gp,fog_pars_fragment:_p,gradientmap_pars_fragment:vp,lightmap_pars_fragment:xp,lights_lambert_fragment:Mp,lights_lambert_pars_fragment:yp,lights_pars_begin:bp,lights_toon_fragment:Sp,lights_toon_pars_fragment:Ep,lights_phong_fragment:Tp,lights_phong_pars_fragment:Ap,lights_physical_fragment:Rp,lights_physical_pars_fragment:Cp,lights_fragment_begin:Pp,lights_fragment_maps:Lp,lights_fragment_end:Dp,logdepthbuf_fragment:Ip,logdepthbuf_pars_fragment:Up,logdepthbuf_pars_vertex:Np,logdepthbuf_vertex:Op,map_fragment:Fp,map_pars_fragment:kp,map_particle_fragment:zp,map_particle_pars_fragment:Bp,metalnessmap_fragment:Hp,metalnessmap_pars_fragment:Gp,morphinstance_vertex:Vp,morphcolor_vertex:Wp,morphnormal_vertex:Xp,morphtarget_pars_vertex:$p,morphtarget_vertex:qp,normal_fragment_begin:Yp,normal_fragment_maps:jp,normal_pars_fragment:Zp,normal_pars_vertex:Kp,normal_vertex:Jp,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:tm,clearcoat_normal_fragment_maps:em,clearcoat_pars_fragment:nm,iridescence_pars_fragment:im,opaque_fragment:sm,packing:om,premultiplied_alpha_fragment:rm,project_vertex:am,dithering_fragment:lm,dithering_pars_fragment:cm,roughnessmap_fragment:hm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:fm,shadowmap_vertex:pm,shadowmask_pars_fragment:mm,skinbase_vertex:gm,skinning_pars_vertex:_m,skinning_vertex:vm,skinnormal_vertex:xm,specularmap_fragment:Mm,specularmap_pars_fragment:ym,tonemapping_fragment:bm,tonemapping_pars_fragment:wm,transmission_fragment:Sm,transmission_pars_fragment:Em,uv_pars_fragment:Tm,uv_pars_vertex:Am,uv_vertex:Rm,worldpos_vertex:Cm,background_vert:Pm,background_frag:Lm,backgroundCube_vert:Dm,backgroundCube_frag:Im,cube_vert:Um,cube_frag:Nm,depth_vert:Om,depth_frag:Fm,distanceRGBA_vert:km,distanceRGBA_frag:zm,equirect_vert:Bm,equirect_frag:Hm,linedashed_vert:Gm,linedashed_frag:Vm,meshbasic_vert:Wm,meshbasic_frag:Xm,meshlambert_vert:$m,meshlambert_frag:qm,meshmatcap_vert:Ym,meshmatcap_frag:jm,meshnormal_vert:Zm,meshnormal_frag:Km,meshphong_vert:Jm,meshphong_frag:Qm,meshphysical_vert:t0,meshphysical_frag:e0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:s0,points_frag:o0,shadow_vert:r0,shadow_frag:a0,sprite_vert:l0,sprite_frag:c0},wt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Un={basic:{uniforms:Ze([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Ze([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new zt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Ze([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Ze([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Ze([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new zt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Ze([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Ze([wt.points,wt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Ze([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Ze([wt.common,wt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Ze([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Ze([wt.sprite,wt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Ze([wt.common,wt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Ze([wt.lights,wt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Un.physical={uniforms:Ze([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const Yo={r:0,b:0,g:0},Di=new Cn,h0=new he;function u0(i,t,e,n,s,o,r){const a=new zt(0);let l=o===!0?0:1,c,h,f=null,d=0,u=null;function m(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function _(x){let M=!1;const v=m(x);v===null?p(a,l):v&&v.isColor&&(p(v,1),M=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,M){const v=m(M);v&&(v.isCubeTexture||v.mapping===Dr)?(h===void 0&&(h=new J(new Wt(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Hs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Di.copy(M.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(h0.makeRotationFromEuler(Di)),h.material.toneMapped=pe.getTransfer(v.colorSpace)!==Me,(f!==v||d!==v.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,d=v.version,u=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new J(new ri(2,2),new si({name:"BackgroundMaterial",uniforms:Hs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=pe.getTransfer(v.colorSpace)!==Me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,M){x.getRGB(Yo,wu(i)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:g}}function d0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(b,C,O,B,z){let N=!1;const W=f(B,O,C);o!==W&&(o=W,c(o.object)),N=u(b,B,O,z),N&&m(b,B,O,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,v(b,C,O,B),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function f(b,C,O){const B=O.wireframe===!0;let z=n[b.id];z===void 0&&(z={},n[b.id]=z);let N=z[C.id];N===void 0&&(N={},z[C.id]=N);let W=N[B];return W===void 0&&(W=d(l()),N[B]=W),W}function d(b){const C=[],O=[],B=[];for(let z=0;z<e;z++)C[z]=0,O[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:B,object:b,attributes:{},index:null}}function u(b,C,O,B){const z=o.attributes,N=C.attributes;let W=0;const G=O.getAttributes();for(const X in G)if(G[X].location>=0){const vt=z[X];let yt=N[X];if(yt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(yt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(yt=b.instanceColor)),vt===void 0||vt.attribute!==yt||yt&&vt.data!==yt.data)return!0;W++}return o.attributesNum!==W||o.index!==B}function m(b,C,O,B){const z={},N=C.attributes;let W=0;const G=O.getAttributes();for(const X in G)if(G[X].location>=0){let vt=N[X];vt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(vt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(vt=b.instanceColor));const yt={};yt.attribute=vt,vt&&vt.data&&(yt.data=vt.data),z[X]=yt,W++}o.attributes=z,o.attributesNum=W,o.index=B}function _(){const b=o.newAttributes;for(let C=0,O=b.length;C<O;C++)b[C]=0}function g(b){p(b,0)}function p(b,C){const O=o.newAttributes,B=o.enabledAttributes,z=o.attributeDivisors;O[b]=1,B[b]===0&&(i.enableVertexAttribArray(b),B[b]=1),z[b]!==C&&(i.vertexAttribDivisor(b,C),z[b]=C)}function x(){const b=o.newAttributes,C=o.enabledAttributes;for(let O=0,B=C.length;O<B;O++)C[O]!==b[O]&&(i.disableVertexAttribArray(O),C[O]=0)}function M(b,C,O,B,z,N,W){W===!0?i.vertexAttribIPointer(b,C,O,z,N):i.vertexAttribPointer(b,C,O,B,z,N)}function v(b,C,O,B){_();const z=B.attributes,N=O.getAttributes(),W=C.defaultAttributeValues;for(const G in N){const X=N[G];if(X.location>=0){let dt=z[G];if(dt===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(dt=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(dt=b.instanceColor)),dt!==void 0){const vt=dt.normalized,yt=dt.itemSize,Gt=t.get(dt);if(Gt===void 0)continue;const Ht=Gt.buffer,K=Gt.type,ot=Gt.bytesPerElement,Lt=K===i.INT||K===i.UNSIGNED_INT||dt.gpuType===Pl;if(dt.isInterleavedBufferAttribute){const ct=dt.data,Pt=ct.stride,It=dt.offset;if(ct.isInstancedInterleavedBuffer){for(let Tt=0;Tt<X.locationSize;Tt++)p(X.location+Tt,ct.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Tt=0;Tt<X.locationSize;Tt++)g(X.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let Tt=0;Tt<X.locationSize;Tt++)M(X.location+Tt,yt/X.locationSize,K,vt,Pt*ot,(It+yt/X.locationSize*Tt)*ot,Lt)}else{if(dt.isInstancedBufferAttribute){for(let ct=0;ct<X.locationSize;ct++)p(X.location+ct,dt.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ct=0;ct<X.locationSize;ct++)g(X.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let ct=0;ct<X.locationSize;ct++)M(X.location+ct,yt/X.locationSize,K,vt,yt*ot,yt/X.locationSize*ct*ot,Lt)}}else if(W!==void 0){const vt=W[G];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(X.location,vt);break;case 3:i.vertexAttrib3fv(X.location,vt);break;case 4:i.vertexAttrib4fv(X.location,vt);break;default:i.vertexAttrib1fv(X.location,vt)}}}}x()}function T(){R();for(const b in n){const C=n[b];for(const O in C){const B=C[O];for(const z in B)h(B[z].object),delete B[z];delete C[O]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const C=n[b.id];for(const O in C){const B=C[O];for(const z in B)h(B[z].object),delete B[z];delete C[O]}delete n[b.id]}function y(b){for(const C in n){const O=n[C];if(O[b.id]===void 0)continue;const B=O[b.id];for(const z in B)h(B[z].object),delete B[z];delete O[b.id]}}function R(){S(),r=!0,o!==s&&(o=s,c(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function f0(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let u=0;for(let m=0;m<f;m++)u+=h[m];e.update(u,n,1)}function l(c,h,f,d){if(f===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<c.length;m++)r(c[m],h[m],d[m]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function p0(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(y){return!(y!==An&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const R=y===To&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==ii&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==On&&!R)}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function m0(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new _i,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||o&&!g)o?h(null):c();else{const x=o?0:n,M=x*4;let v=p.clippingState||null;l.value=v,v=h(m,d,M,u);for(let T=0;T!==M;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=u+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=u;M!==_;++M,v+=4)r.copy(f[M]).applyMatrix4(x,a),r.normal.toArray(g,v),g[v+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function g0(i){let t=new WeakMap;function e(r,a){return a===Va?r.mapping=Us:a===Wa&&(r.mapping=Ns),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Va||a===Wa)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Af(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Ru extends Eu{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ts=4,Ac=[.125,.215,.35,.446,.526,.582],ki=20,oa=new Ru,Rc=new zt;let ra=null,aa=0,la=0,ca=!1;const Ni=(1+Math.sqrt(5))/2,fs=1/Ni,Cc=[new I(-Ni,fs,0),new I(Ni,fs,0),new I(-fs,0,Ni),new I(fs,0,Ni),new I(0,Ni,-fs),new I(0,Ni,fs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class xl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ra=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ra,aa,la),this._renderer.xr.enabled=ca,t.scissorTest=!1,jo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ra=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:To,format:An,colorSpace:Vs,depthBuffer:!1},s=Pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_0(o)),this._blurMaterial=v0(o,t,e)}return s}_compileMaterial(t){const e=new J(this._lodPlanes[0],t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,s){const a=new nn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Rc),h.toneMapping=bi,h.autoClear=!1;const u=new Pn({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),m=new J(new Wt,u);let _=!1;const g=t.background;g?g.isColor&&(u.color.copy(g),t.background=null,_=!0):(u.color.copy(Rc),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;jo(s,x*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Us||t.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lc());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new J(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;jo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Cc[(s-o-1)%Cc.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new J(this._lodPlanes[s],c),d=c.uniforms,u=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*u):2*Math.PI/(2*ki-1),_=o/m,g=isFinite(o)?1+Math.floor(h*_):ki;g>ki&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ki}`);const p=[];let x=0;for(let y=0;y<ki;++y){const R=y/_,S=Math.exp(-R*R/2);p.push(S),y===0?x+=S:y<g&&(x+=2*S)}for(let y=0;y<p.length;y++)p[y]=p[y]/x;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;const v=this._sizeLods[s],T=3*v*(s>M-Ts?s-M+Ts:0),w=4*(this._cubeSize-v);jo(e,T,w,3*v,2*v),l.setRenderTarget(e),l.render(f,oa)}}function _0(i){const t=[],e=[],n=[];let s=i;const o=i-Ts+1+Ac.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-Ts?l=Ac[r-i+Ts-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*u),M=new Float32Array(g*m*u),v=new Float32Array(p*m*u);for(let w=0;w<u;w++){const y=w%3*2/3-1,R=w>2?0:-1,S=[y,R,0,y+2/3,R,0,y+2/3,R+1,0,y,R,0,y+2/3,R+1,0,y,R+1,0];x.set(S,_*m*w),M.set(d,g*m*w);const b=[w,w,w,w,w,w];v.set(b,p*m*w)}const T=new me;T.setAttribute("position",new Ue(x,_)),T.setAttribute("uv",new Ue(M,g)),T.setAttribute("faceIndex",new Ue(v,p)),t.push(T),s>Ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pc(i,t,e){const n=new Xi(i,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function v0(i,t,e){const n=new Float32Array(ki),s=new I(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Lc(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Dc(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Bl(){return`

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
	`}function x0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Va||l===Wa,h=l===Us||l===Ns;if(c||h){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new xl(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new xl(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function M0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ho("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function y0(i,t,e,n){const s={},o=new WeakMap;function r(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",r),delete s[d.id];const u=o.get(d);u&&(t.remove(u),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const u=f.morphAttributes;for(const m in u){const _=u[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],i.ARRAY_BUFFER)}}function c(f){const d=[],u=f.index,m=f.attributes.position;let _=0;if(u!==null){const x=u.array;_=u.version;for(let M=0,v=x.length;M<v;M+=3){const T=x[M+0],w=x[M+1],y=x[M+2];d.push(T,w,w,y,y,T)}}else if(m!==void 0){const x=m.array;_=m.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const T=M+0,w=M+1,y=M+2;d.push(T,w,w,y,y,T)}}else return;const g=new(_u(d)?bu:yu)(d,1);g.version=_;const p=o.get(f);p&&t.remove(p),o.set(f,g)}function h(f){const d=o.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function b0(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,u){i.drawElements(n,u,o,d*r),e.update(u,n,1)}function c(d,u,m){m!==0&&(i.drawElementsInstanced(n,u,o,d*r,m),e.update(u,n,m))}function h(d,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,o,d,0,m);let g=0;for(let p=0;p<m;p++)g+=u[p];e.update(g,n,1)}function f(d,u,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/r,u[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,u,0,o,d,0,_,0,m);let p=0;for(let x=0;x<m;x++)p+=u[x]*_[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function w0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function S0(i,t,e){const n=new WeakMap,s=new Re;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var u=b;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let T=a.attributes.position.count*v,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const y=new Float32Array(T*w*4*f),R=new xu(y,T,w,f);R.type=On,R.needsUpdate=!0;const S=v*4;for(let C=0;C<f;C++){const O=p[C],B=x[C],z=M[C],N=T*w*4*C;for(let W=0;W<O.count;W++){const G=W*S;m===!0&&(s.fromBufferAttribute(O,W),y[N+G+0]=s.x,y[N+G+1]=s.y,y[N+G+2]=s.z,y[N+G+3]=0),_===!0&&(s.fromBufferAttribute(B,W),y[N+G+4]=s.x,y[N+G+5]=s.y,y[N+G+6]=s.z,y[N+G+7]=0),g===!0&&(s.fromBufferAttribute(z,W),y[N+G+8]=s.x,y[N+G+9]=s.y,y[N+G+10]=s.z,y[N+G+11]=z.itemSize===4?s.w:1)}}d={count:f,texture:R,size:new rt(T,w)},n.set(a,d),a.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function E0(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class Cu extends Ye{constructor(t,e,n,s,o,r,a,l,c,h=Ls){if(h!==Ls&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ls&&(n=Wi),n===void 0&&h===ks&&(n=Fs),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Pu=new Ye,Ic=new Cu(1,1),Lu=new xu,Du=new df,Iu=new Tu,Uc=[],Nc=[],Oc=new Float32Array(16),Fc=new Float32Array(9),kc=new Float32Array(4);function Xs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Uc[s];if(o===void 0&&(o=new Float32Array(s),Uc[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Nr(i,t){let e=Nc[t];e===void 0&&(e=new Int32Array(t),Nc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function T0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function A0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function P0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;kc.set(n),i.uniformMatrix2fv(this.addr,!1,kc),ze(e,n)}}function L0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;Fc.set(n),i.uniformMatrix3fv(this.addr,!1,Fc),ze(e,n)}}function D0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;Oc.set(n),i.uniformMatrix4fv(this.addr,!1,Oc),ze(e,n)}}function I0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function F0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function B0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function H0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Ic.compareFunction=gu,o=Ic):o=Pu,e.setTexture2D(t||o,s)}function G0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Du,s)}function V0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Iu,s)}function W0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Lu,s)}function X0(i){switch(i){case 5126:return T0;case 35664:return A0;case 35665:return R0;case 35666:return C0;case 35674:return P0;case 35675:return L0;case 35676:return D0;case 5124:case 35670:return I0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return O0;case 5125:return F0;case 36294:return k0;case 36295:return z0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return W0}}function $0(i,t){i.uniform1fv(this.addr,t)}function q0(i,t){const e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function Y0(i,t){const e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function j0(i,t){const e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function Z0(i,t){const e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function K0(i,t){const e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function J0(i,t){const e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Q0(i,t){i.uniform1iv(this.addr,t)}function tg(i,t){i.uniform2iv(this.addr,t)}function eg(i,t){i.uniform3iv(this.addr,t)}function ng(i,t){i.uniform4iv(this.addr,t)}function ig(i,t){i.uniform1uiv(this.addr,t)}function sg(i,t){i.uniform2uiv(this.addr,t)}function og(i,t){i.uniform3uiv(this.addr,t)}function rg(i,t){i.uniform4uiv(this.addr,t)}function ag(i,t,e){const n=this.cache,s=t.length,o=Nr(e,s);ke(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Pu,o[r])}function lg(i,t,e){const n=this.cache,s=t.length,o=Nr(e,s);ke(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Du,o[r])}function cg(i,t,e){const n=this.cache,s=t.length,o=Nr(e,s);ke(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Iu,o[r])}function hg(i,t,e){const n=this.cache,s=t.length,o=Nr(e,s);ke(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Lu,o[r])}function ug(i){switch(i){case 5126:return $0;case 35664:return q0;case 35665:return Y0;case 35666:return j0;case 35674:return Z0;case 35675:return K0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return tg;case 35668:case 35672:return eg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return og;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}class dg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=X0(e.type)}}class fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ug(e.type)}}class pg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function zc(i,t){i.seq.push(t),i.map[t.id]=t}function mg(i,t,e){const n=i.name,s=n.length;for(ha.lastIndex=0;;){const o=ha.exec(n),r=ha.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){zc(e,c===void 0?new dg(a,i,t):new fg(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new pg(a),zc(e,f)),e=f}}}class wr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);mg(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Bc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const gg=37297;let _g=0;function vg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Hc=new ne;function xg(i){pe._getMatrix(Hc,pe.workingColorSpace,i);const t=`mat3( ${Hc.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case Ir:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+vg(i.getShaderSource(t),r)}else return s}function Mg(i,t){const e=xg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yg(i,t){let e;switch(t){case Sd:e="Linear";break;case Ed:e="Reinhard";break;case Td:e="Cineon";break;case su:e="ACESFilmic";break;case Rd:e="AgX";break;case Cd:e="Neutral";break;case Ad:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zo=new I;function bg(){pe.getLuminanceCoefficients(Zo);const i=Zo.x.toFixed(4),t=Zo.y.toFixed(4),e=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uo).join(`
`)}function Sg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Eg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function uo(i){return i!==""}function Vc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(i){return i.replace(Tg,Rg)}const Ag=new Map;function Rg(i,t){let e=se[t];if(e===void 0){const n=Ag.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ml(e)}const Cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(i){return i.replace(Cg,Pg)}function Pg(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function $c(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===eu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Dg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Us:case Ns:t="ENVMAP_TYPE_CUBE";break;case Dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ig(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ns:t="ENVMAP_MODE_REFRACTION";break}return t}function Ug(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case iu:t="ENVMAP_BLENDING_MULTIPLY";break;case bd:t="ENVMAP_BLENDING_MIX";break;case wd:t="ENVMAP_BLENDING_ADD";break}return t}function Ng(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Og(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Lg(e),c=Dg(e),h=Ig(e),f=Ug(e),d=Ng(e),u=wg(e),m=Sg(o),_=s.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(uo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(uo).join(`
`),p.length>0&&(p+=`
`)):(g=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),p=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?se.tonemapping_pars_fragment:"",e.toneMapping!==bi?yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Mg("linearToOutputTexel",e.outputColorSpace),bg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(uo).join(`
`)),r=Ml(r),r=Vc(r,e),r=Wc(r,e),a=Ml(a),a=Vc(a,e),a=Wc(a,e),r=Xc(r),a=Xc(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+g+r,v=x+p+a,T=Bc(s,s.VERTEX_SHADER,M),w=Bc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function y(C){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(T).trim(),z=s.getShaderInfoLog(w).trim();let N=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,w);else{const G=Gc(s,T,"vertex"),X=Gc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+G+`
`+X)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||z==="")&&(W=!1);W&&(C.diagnostics={runnable:N,programLog:O,vertexShader:{log:B,prefix:g},fragmentShader:{log:z,prefix:p}})}s.deleteShader(T),s.deleteShader(w),R=new wr(s,_),S=Eg(s,_)}let R;this.getUniforms=function(){return R===void 0&&y(this),R};let S;this.getAttributes=function(){return S===void 0&&y(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,gg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_g++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let Fg=0;class kg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new zg(t),e.set(t,n)),n}}class zg{constructor(t){this.id=Fg++,this.code=t,this.usedTimes=0}}function Bg(i,t,e,n,s,o,r){const a=new kl,l=new kg,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let u=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,C,O,B){const z=O.fog,N=B.geometry,W=S.isMeshStandardMaterial?O.environment:null,G=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),X=G&&G.mapping===Dr?G.image.height:null,dt=m[S.type];S.precision!==null&&(u=s.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const vt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,yt=vt!==void 0?vt.length:0;let Gt=0;N.morphAttributes.position!==void 0&&(Gt=1),N.morphAttributes.normal!==void 0&&(Gt=2),N.morphAttributes.color!==void 0&&(Gt=3);let Ht,K,ot,Lt;if(dt){const ge=Un[dt];Ht=ge.vertexShader,K=ge.fragmentShader}else Ht=S.vertexShader,K=S.fragmentShader,l.update(S),ot=l.getVertexShaderID(S),Lt=l.getFragmentShaderID(S);const ct=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),It=B.isInstancedMesh===!0,Tt=B.isBatchedMesh===!0,Qt=!!S.map,nt=!!S.matcap,mt=!!G,D=!!S.aoMap,kt=!!S.lightMap,ut=!!S.bumpMap,Ut=!!S.normalMap,xt=!!S.displacementMap,Xt=!!S.emissiveMap,Dt=!!S.metalnessMap,P=!!S.roughnessMap,E=S.anisotropy>0,q=S.clearcoat>0,et=S.dispersion>0,lt=S.iridescence>0,tt=S.sheen>0,Ot=S.transmission>0,at=E&&!!S.anisotropyMap,St=q&&!!S.clearcoatMap,Jt=q&&!!S.clearcoatNormalMap,ht=q&&!!S.clearcoatRoughnessMap,Rt=lt&&!!S.iridescenceMap,Nt=lt&&!!S.iridescenceThicknessMap,jt=tt&&!!S.sheenColorMap,Z=tt&&!!S.sheenRoughnessMap,Bt=!!S.specularMap,te=!!S.specularColorMap,_e=!!S.specularIntensityMap,k=Ot&&!!S.transmissionMap,Mt=Ot&&!!S.thicknessMap,Q=!!S.gradientMap,st=!!S.alphaMap,At=S.alphaTest>0,bt=!!S.alphaHash,Yt=!!S.extensions;let ue=bi;S.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ue=i.toneMapping);const Pe={shaderID:dt,shaderType:S.type,shaderName:S.name,vertexShader:Ht,fragmentShader:K,defines:S.defines,customVertexShaderID:ot,customFragmentShaderID:Lt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&B._colorsTexture!==null,instancing:It,instancingColor:It&&B.instanceColor!==null,instancingMorph:It&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Vs,alphaToCoverage:!!S.alphaToCoverage,map:Qt,matcap:nt,envMap:mt,envMapMode:mt&&G.mapping,envMapCubeUVHeight:X,aoMap:D,lightMap:kt,bumpMap:ut,normalMap:Ut,displacementMap:d&&xt,emissiveMap:Xt,normalMapObjectSpace:Ut&&S.normalMapType===Id,normalMapTangentSpace:Ut&&S.normalMapType===mu,metalnessMap:Dt,roughnessMap:P,anisotropy:E,anisotropyMap:at,clearcoat:q,clearcoatMap:St,clearcoatNormalMap:Jt,clearcoatRoughnessMap:ht,dispersion:et,iridescence:lt,iridescenceMap:Rt,iridescenceThicknessMap:Nt,sheen:tt,sheenColorMap:jt,sheenRoughnessMap:Z,specularMap:Bt,specularColorMap:te,specularIntensityMap:_e,transmission:Ot,transmissionMap:k,thicknessMap:Mt,gradientMap:Q,opaque:S.transparent===!1&&S.blending===Ps&&S.alphaToCoverage===!1,alphaMap:st,alphaTest:At,alphaHash:bt,combine:S.combine,mapUv:Qt&&_(S.map.channel),aoMapUv:D&&_(S.aoMap.channel),lightMapUv:kt&&_(S.lightMap.channel),bumpMapUv:ut&&_(S.bumpMap.channel),normalMapUv:Ut&&_(S.normalMap.channel),displacementMapUv:xt&&_(S.displacementMap.channel),emissiveMapUv:Xt&&_(S.emissiveMap.channel),metalnessMapUv:Dt&&_(S.metalnessMap.channel),roughnessMapUv:P&&_(S.roughnessMap.channel),anisotropyMapUv:at&&_(S.anisotropyMap.channel),clearcoatMapUv:St&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Z&&_(S.sheenRoughnessMap.channel),specularMapUv:Bt&&_(S.specularMap.channel),specularColorMapUv:te&&_(S.specularColorMap.channel),specularIntensityMapUv:_e&&_(S.specularIntensityMap.channel),transmissionMapUv:k&&_(S.transmissionMap.channel),thicknessMapUv:Mt&&_(S.thicknessMap.channel),alphaMapUv:st&&_(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ut||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!N.attributes.uv&&(Qt||st),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Pt,skinning:B.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Gt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:Qt&&S.map.isVideoTexture===!0&&pe.getTransfer(S.map.colorSpace)===Me,decodeVideoTextureEmissive:Xt&&S.emissiveMap.isVideoTexture===!0&&pe.getTransfer(S.emissiveMap.colorSpace)===Me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ae,flipSided:S.side===Ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Yt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&S.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)b.push(C),b.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(x(b,S),M(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function M(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const b=m[S.type];let C;if(b){const O=Un[b];C=Su.clone(O.uniforms)}else C=S.uniforms;return C}function T(S,b){let C;for(let O=0,B=h.length;O<B;O++){const z=h[O];if(z.cacheKey===b){C=z,++C.usedTimes;break}}return C===void 0&&(C=new Og(i,b,S,o),h.push(C)),C}function w(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function y(S){l.remove(S)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:y,programs:h,dispose:R}}function Hg(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function qc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yc(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(f,d,u,m,_,g){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:m,renderOrder:f.renderOrder,z:_,group:g},i[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=_,p.group=g),t++,p}function a(f,d,u,m,_,g){const p=r(f,d,u,m,_,g);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):e.push(p)}function l(f,d,u,m,_,g){const p=r(f,d,u,m,_,g);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||Gg),n.length>1&&n.sort(d||qc),s.length>1&&s.sort(d||qc)}function h(){for(let f=t,d=i.length;f<d;f++){const u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function Vg(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Yc,i.set(n,[r])):s>=o.length?(r=new Yc,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new zt};break;case"SpotLight":e={position:new I,direction:new I,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Xg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $g=0;function qg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Yg(i){const t=new Wg,e=Xg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,o=new he,r=new he;function a(c){let h=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let u=0,m=0,_=0,g=0,p=0,x=0,M=0,v=0,T=0,w=0,y=0;c.sort(qg);for(let S=0,b=c.length;S<b;S++){const C=c[S],O=C.color,B=C.intensity,z=C.distance,N=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=O.r*B,f+=O.g*B,d+=O.b*B;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],B);y++}else if(C.isDirectionalLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const G=C.shadow,X=e.get(C);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,n.directionalShadow[u]=X,n.directionalShadowMap[u]=N,n.directionalShadowMatrix[u]=C.shadow.matrix,x++}n.directional[u]=W,u++}else if(C.isSpotLight){const W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(O).multiplyScalar(B),W.distance=z,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[_]=W;const G=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,G.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=G.matrix,C.castShadow){const X=e.get(C);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=N,v++}_++}else if(C.isRectAreaLight){const W=t.get(C);W.color.copy(O).multiplyScalar(B),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=W,g++}else if(C.isPointLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const G=C.shadow,X=e.get(C);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=N,n.pointShadowMatrix[m]=C.shadow.matrix,M++}n.point[m]=W,m++}else if(C.isHemisphereLight){const W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(B),W.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[p]=W,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==u||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==M||R.numSpotShadows!==v||R.numSpotMaps!==T||R.numLightProbes!==y)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=y,R.directionalLength=u,R.pointLength=m,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=M,R.numSpotShadows=v,R.numSpotMaps=T,R.numLightProbes=y,n.version=$g++)}function l(c,h){let f=0,d=0,u=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(M.isSpotLight){const v=n.spot[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(M.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),r.identity(),o.copy(M.matrixWorld),o.premultiply(g),r.extractRotation(o),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),m++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function jc(i){const t=new Yg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function jg(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new jc(i),t.set(s,[a])):o>=r.length?(a=new jc(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Zg extends ji{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kg extends ji{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qg=`uniform sampler2D shadow_pass;
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
}`;function t_(i,t,e){let n=new zl;const s=new rt,o=new rt,r=new Re,a=new Zg({depthPacking:Dd}),l=new Kg,c={},h=e.maxTextureSize,f={[wi]:Ke,[Ke]:wi,[Ae]:Ae},d=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Jg,fragmentShader:Qg}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const m=new me;m.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new J(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let p=this.type;this.render=function(w,y,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),O=i.state;O.setBlending(yi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=p!==Zn&&this.type===Zn,z=p===Zn&&this.type!==Zn;for(let N=0,W=w.length;N<W;N++){const G=w[N],X=G.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const dt=X.getFrameExtents();if(s.multiply(dt),o.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/dt.x),s.x=o.x*dt.x,X.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/dt.y),s.y=o.y*dt.y,X.mapSize.y=o.y)),X.map===null||B===!0||z===!0){const yt=this.type!==Zn?{minFilter:un,magFilter:un}:{};X.map!==null&&X.map.dispose(),X.map=new Xi(s.x,s.y,yt),X.map.texture.name=G.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const vt=X.getViewportCount();for(let yt=0;yt<vt;yt++){const Gt=X.getViewport(yt);r.set(o.x*Gt.x,o.y*Gt.y,o.x*Gt.z,o.y*Gt.w),O.viewport(r),X.updateMatrices(G,yt),n=X.getFrustum(),v(y,R,X.camera,G,this.type)}X.isPointLightShadow!==!0&&this.type===Zn&&x(X,R),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,b,C)};function x(w,y){const R=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(y,null,R,d,_,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(y,null,R,u,_,null)}function M(w,y,R,S){let b=null;const C=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)b=C;else if(b=R.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const O=b.uuid,B=y.uuid;let z=c[O];z===void 0&&(z={},c[O]=z);let N=z[B];N===void 0&&(N=b.clone(),z[B]=N,y.addEventListener("dispose",T)),b=N}if(b.visible=y.visible,b.wireframe=y.wireframe,S===Zn?b.side=y.shadowSide!==null?y.shadowSide:y.side:b.side=y.shadowSide!==null?y.shadowSide:f[y.side],b.alphaMap=y.alphaMap,b.alphaTest=y.alphaTest,b.map=y.map,b.clipShadows=y.clipShadows,b.clippingPlanes=y.clippingPlanes,b.clipIntersection=y.clipIntersection,b.displacementMap=y.displacementMap,b.displacementScale=y.displacementScale,b.displacementBias=y.displacementBias,b.wireframeLinewidth=y.wireframeLinewidth,b.linewidth=y.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=i.properties.get(b);O.light=R}return b}function v(w,y,R,S,b){if(w.visible===!1)return;if(w.layers.test(y.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const B=t.update(w),z=w.material;if(Array.isArray(z)){const N=B.groups;for(let W=0,G=N.length;W<G;W++){const X=N[W],dt=z[X.materialIndex];if(dt&&dt.visible){const vt=M(w,dt,S,b);w.onBeforeShadow(i,w,y,R,B,vt,X),i.renderBufferDirect(R,null,B,vt,w,X),w.onAfterShadow(i,w,y,R,B,vt,X)}}}else if(z.visible){const N=M(w,z,S,b);w.onBeforeShadow(i,w,y,R,B,N,null),i.renderBufferDirect(R,null,B,N,w,null),w.onAfterShadow(i,w,y,R,B,N,null)}}const O=w.children;for(let B=0,z=O.length;B<z;B++)v(O[B],y,R,S,b)}function T(w){w.target.removeEventListener("dispose",T);for(const R in c){const S=c[R],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const e_={[Oa]:Fa,[ka]:Ha,[za]:Ga,[Is]:Ba,[Fa]:Oa,[Ha]:ka,[Ga]:za,[Ba]:Is};function n_(i,t){function e(){let k=!1;const Mt=new Re;let Q=null;const st=new Re(0,0,0,0);return{setMask:function(At){Q!==At&&!k&&(i.colorMask(At,At,At,At),Q=At)},setLocked:function(At){k=At},setClear:function(At,bt,Yt,ue,Pe){Pe===!0&&(At*=ue,bt*=ue,Yt*=ue),Mt.set(At,bt,Yt,ue),st.equals(Mt)===!1&&(i.clearColor(At,bt,Yt,ue),st.copy(Mt))},reset:function(){k=!1,Q=null,st.set(-1,0,0,0)}}}function n(){let k=!1,Mt=!1,Q=null,st=null,At=null;return{setReversed:function(bt){if(Mt!==bt){const Yt=t.get("EXT_clip_control");Mt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const ue=At;At=null,this.setClear(ue)}Mt=bt},getReversed:function(){return Mt},setTest:function(bt){bt?ct(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(bt){Q!==bt&&!k&&(i.depthMask(bt),Q=bt)},setFunc:function(bt){if(Mt&&(bt=e_[bt]),st!==bt){switch(bt){case Oa:i.depthFunc(i.NEVER);break;case Fa:i.depthFunc(i.ALWAYS);break;case ka:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=bt}},setLocked:function(bt){k=bt},setClear:function(bt){At!==bt&&(Mt&&(bt=1-bt),i.clearDepth(bt),At=bt)},reset:function(){k=!1,Q=null,st=null,At=null,Mt=!1}}}function s(){let k=!1,Mt=null,Q=null,st=null,At=null,bt=null,Yt=null,ue=null,Pe=null;return{setTest:function(ge){k||(ge?ct(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(ge){Mt!==ge&&!k&&(i.stencilMask(ge),Mt=ge)},setFunc:function(ge,Je,We){(Q!==ge||st!==Je||At!==We)&&(i.stencilFunc(ge,Je,We),Q=ge,st=Je,At=We)},setOp:function(ge,Je,We){(bt!==ge||Yt!==Je||ue!==We)&&(i.stencilOp(ge,Je,We),bt=ge,Yt=Je,ue=We)},setLocked:function(ge){k=ge},setClear:function(ge){Pe!==ge&&(i.clearStencil(ge),Pe=ge)},reset:function(){k=!1,Mt=null,Q=null,st=null,At=null,bt=null,Yt=null,ue=null,Pe=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,u=[],m=null,_=!1,g=null,p=null,x=null,M=null,v=null,T=null,w=null,y=new zt(0,0,0),R=0,S=!1,b=null,C=null,O=null,B=null,z=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,G=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=G>=1):X.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=G>=2);let dt=null,vt={};const yt=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),Ht=new Re().fromArray(yt),K=new Re().fromArray(Gt);function ot(k,Mt,Q,st){const At=new Uint8Array(4),bt=i.createTexture();i.bindTexture(k,bt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<Q;Yt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(Mt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return bt}const Lt={};Lt[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),Lt[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Lt[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),r.setFunc(Is),ut(!1),Ut(tc),ct(i.CULL_FACE),D(yi);function ct(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function Pt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function It(k,Mt){return f[k]!==Mt?(i.bindFramebuffer(k,Mt),f[k]=Mt,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Mt),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Tt(k,Mt){let Q=u,st=!1;if(k){Q=d.get(Mt),Q===void 0&&(Q=[],d.set(Mt,Q));const At=k.textures;if(Q.length!==At.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Yt=At.length;bt<Yt;bt++)Q[bt]=i.COLOR_ATTACHMENT0+bt;Q.length=At.length,st=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,st=!0);st&&i.drawBuffers(Q)}function Qt(k){return m!==k?(i.useProgram(k),m=k,!0):!1}const nt={[Fi]:i.FUNC_ADD,[od]:i.FUNC_SUBTRACT,[rd]:i.FUNC_REVERSE_SUBTRACT};nt[ad]=i.MIN,nt[ld]=i.MAX;const mt={[cd]:i.ZERO,[hd]:i.ONE,[ud]:i.SRC_COLOR,[Ua]:i.SRC_ALPHA,[_d]:i.SRC_ALPHA_SATURATE,[md]:i.DST_COLOR,[fd]:i.DST_ALPHA,[dd]:i.ONE_MINUS_SRC_COLOR,[Na]:i.ONE_MINUS_SRC_ALPHA,[gd]:i.ONE_MINUS_DST_COLOR,[pd]:i.ONE_MINUS_DST_ALPHA,[vd]:i.CONSTANT_COLOR,[xd]:i.ONE_MINUS_CONSTANT_COLOR,[Md]:i.CONSTANT_ALPHA,[yd]:i.ONE_MINUS_CONSTANT_ALPHA};function D(k,Mt,Q,st,At,bt,Yt,ue,Pe,ge){if(k===yi){_===!0&&(Pt(i.BLEND),_=!1);return}if(_===!1&&(ct(i.BLEND),_=!0),k!==sd){if(k!==g||ge!==S){if((p!==Fi||v!==Fi)&&(i.blendEquation(i.FUNC_ADD),p=Fi,v=Fi),ge)switch(k){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ec:i.blendFunc(i.ONE,i.ONE);break;case nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ec:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ic:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,M=null,T=null,w=null,y.set(0,0,0),R=0,g=k,S=ge}return}At=At||Mt,bt=bt||Q,Yt=Yt||st,(Mt!==p||At!==v)&&(i.blendEquationSeparate(nt[Mt],nt[At]),p=Mt,v=At),(Q!==x||st!==M||bt!==T||Yt!==w)&&(i.blendFuncSeparate(mt[Q],mt[st],mt[bt],mt[Yt]),x=Q,M=st,T=bt,w=Yt),(ue.equals(y)===!1||Pe!==R)&&(i.blendColor(ue.r,ue.g,ue.b,Pe),y.copy(ue),R=Pe),g=k,S=!1}function kt(k,Mt){k.side===Ae?Pt(i.CULL_FACE):ct(i.CULL_FACE);let Q=k.side===Ke;Mt&&(Q=!Q),ut(Q),k.blending===Ps&&k.transparent===!1?D(yi):D(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),o.setMask(k.colorWrite);const st=k.stencilWrite;a.setTest(st),st&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Xt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(k){b!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),b=k)}function Ut(k){k!==nd?(ct(i.CULL_FACE),k!==C&&(k===tc?i.cullFace(i.BACK):k===id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),C=k}function xt(k){k!==O&&(W&&i.lineWidth(k),O=k)}function Xt(k,Mt,Q){k?(ct(i.POLYGON_OFFSET_FILL),(B!==Mt||z!==Q)&&(i.polygonOffset(Mt,Q),B=Mt,z=Q)):Pt(i.POLYGON_OFFSET_FILL)}function Dt(k){k?ct(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function P(k){k===void 0&&(k=i.TEXTURE0+N-1),dt!==k&&(i.activeTexture(k),dt=k)}function E(k,Mt,Q){Q===void 0&&(dt===null?Q=i.TEXTURE0+N-1:Q=dt);let st=vt[Q];st===void 0&&(st={type:void 0,texture:void 0},vt[Q]=st),(st.type!==k||st.texture!==Mt)&&(dt!==Q&&(i.activeTexture(Q),dt=Q),i.bindTexture(k,Mt||Lt[k]),st.type=k,st.texture=Mt)}function q(){const k=vt[dt];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(k){Ht.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Ht.copy(k))}function Z(k){K.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),K.copy(k))}function Bt(k,Mt){let Q=c.get(Mt);Q===void 0&&(Q=new WeakMap,c.set(Mt,Q));let st=Q.get(k);st===void 0&&(st=i.getUniformBlockIndex(Mt,k.name),Q.set(k,st))}function te(k,Mt){const st=c.get(Mt).get(k);l.get(Mt)!==st&&(i.uniformBlockBinding(Mt,st,k.__bindingPointIndex),l.set(Mt,st))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},dt=null,vt={},f={},d=new WeakMap,u=[],m=null,_=!1,g=null,p=null,x=null,M=null,v=null,T=null,w=null,y=new zt(0,0,0),R=0,S=!1,b=null,C=null,O=null,B=null,z=null,Ht.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ct,disable:Pt,bindFramebuffer:It,drawBuffers:Tt,useProgram:Qt,setBlending:D,setMaterial:kt,setFlipSided:ut,setCullFace:Ut,setLineWidth:xt,setPolygonOffset:Xt,setScissorTest:Dt,activeTexture:P,bindTexture:E,unbindTexture:q,compressedTexImage2D:et,compressedTexImage3D:lt,texImage2D:Rt,texImage3D:Nt,updateUBOMapping:Bt,uniformBlockBinding:te,texStorage2D:Jt,texStorage3D:ht,texSubImage2D:tt,texSubImage3D:Ot,compressedTexSubImage2D:at,compressedTexSubImage3D:St,scissor:jt,viewport:Z,reset:_e}}function Zc(i,t,e,n){const s=i_(n);switch(e){case cu:return i*t;case uu:return i*t;case du:return i*t*2;case Il:return i*t/s.components*s.byteLength;case Ul:return i*t/s.components*s.byteLength;case fu:return i*t*2/s.components*s.byteLength;case Nl:return i*t*2/s.components*s.byteLength;case hu:return i*t*3/s.components*s.byteLength;case An:return i*t*4/s.components*s.byteLength;case Ol:return i*t*4/s.components*s.byteLength;case vr:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mr:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:case ja:return Math.max(i,16)*Math.max(t,8)/4;case $a:case Ya:return Math.max(i,8)*Math.max(t,8)/2;case Za:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case br:case fl:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case pu:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*8;case gl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function i_(i){switch(i){case ii:case ru:return{byteLength:1,components:1};case xo:case au:case To:return{byteLength:2,components:1};case Ll:case Dl:return{byteLength:2,components:4};case Wi:case Pl:case On:return{byteLength:4,components:1};case lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function s_(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap;let f;const d=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,E){return u?new OffscreenCanvas(P,E):Rr("canvas")}function _(P,E,q){let et=1;const lt=Dt(P);if((lt.width>q||lt.height>q)&&(et=q/Math.max(lt.width,lt.height)),et<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const tt=Math.floor(et*lt.width),Ot=Math.floor(et*lt.height);f===void 0&&(f=m(tt,Ot));const at=E?m(tt,Ot):f;return at.width=tt,at.height=Ot,at.getContext("2d").drawImage(P,0,0,tt,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+tt+"x"+Ot+")."),at}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(P,E,q,et,lt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let tt=E;if(E===i.RED&&(q===i.FLOAT&&(tt=i.R32F),q===i.HALF_FLOAT&&(tt=i.R16F),q===i.UNSIGNED_BYTE&&(tt=i.R8)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(tt=i.R8UI),q===i.UNSIGNED_SHORT&&(tt=i.R16UI),q===i.UNSIGNED_INT&&(tt=i.R32UI),q===i.BYTE&&(tt=i.R8I),q===i.SHORT&&(tt=i.R16I),q===i.INT&&(tt=i.R32I)),E===i.RG&&(q===i.FLOAT&&(tt=i.RG32F),q===i.HALF_FLOAT&&(tt=i.RG16F),q===i.UNSIGNED_BYTE&&(tt=i.RG8)),E===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(tt=i.RG8UI),q===i.UNSIGNED_SHORT&&(tt=i.RG16UI),q===i.UNSIGNED_INT&&(tt=i.RG32UI),q===i.BYTE&&(tt=i.RG8I),q===i.SHORT&&(tt=i.RG16I),q===i.INT&&(tt=i.RG32I)),E===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),q===i.UNSIGNED_INT&&(tt=i.RGB32UI),q===i.BYTE&&(tt=i.RGB8I),q===i.SHORT&&(tt=i.RGB16I),q===i.INT&&(tt=i.RGB32I)),E===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),q===i.UNSIGNED_INT&&(tt=i.RGBA32UI),q===i.BYTE&&(tt=i.RGBA8I),q===i.SHORT&&(tt=i.RGBA16I),q===i.INT&&(tt=i.RGBA32I)),E===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),E===i.RGBA){const Ot=lt?Ir:pe.getTransfer(et);q===i.FLOAT&&(tt=i.RGBA32F),q===i.HALF_FLOAT&&(tt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(tt=Ot===Me?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(P,E){let q;return P?E===null||E===Wi||E===Fs?q=i.DEPTH24_STENCIL8:E===On?q=i.DEPTH32F_STENCIL8:E===xo&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wi||E===Fs?q=i.DEPTH_COMPONENT24:E===On?q=i.DEPTH_COMPONENT32F:E===xo&&(q=i.DEPTH_COMPONENT16),q}function T(P,E){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==un&&P.minFilter!==Nn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){const E=P.target;E.removeEventListener("dispose",w),R(E),E.isVideoTexture&&h.delete(E)}function y(P){const E=P.target;E.removeEventListener("dispose",y),b(E)}function R(P){const E=n.get(P);if(E.__webglInit===void 0)return;const q=P.source,et=d.get(q);if(et){const lt=et[E.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&S(P),Object.keys(et).length===0&&d.delete(q)}n.remove(P)}function S(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const q=P.source,et=d.get(q);delete et[E.__cacheKey],r.memory.textures--}function b(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(E.__webglFramebuffer[et]))for(let lt=0;lt<E.__webglFramebuffer[et].length;lt++)i.deleteFramebuffer(E.__webglFramebuffer[et][lt]);else i.deleteFramebuffer(E.__webglFramebuffer[et]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[et])}else{if(Array.isArray(E.__webglFramebuffer))for(let et=0;et<E.__webglFramebuffer.length;et++)i.deleteFramebuffer(E.__webglFramebuffer[et]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let et=0;et<E.__webglColorRenderbuffer.length;et++)E.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[et]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=P.textures;for(let et=0,lt=q.length;et<lt;et++){const tt=n.get(q[et]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),r.memory.textures--),n.remove(q[et])}n.remove(P)}let C=0;function O(){C=0}function B(){const P=C;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function z(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function N(P,E){const q=n.get(P);if(P.isVideoTexture&&xt(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const et=P.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(q,P,E);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}function W(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){K(q,P,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}function G(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){K(q,P,E);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}function X(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){ot(q,P,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}const dt={[Os]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[Xa]:i.MIRRORED_REPEAT},vt={[un]:i.NEAREST,[Pd]:i.NEAREST_MIPMAP_NEAREST,[Po]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[kr]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},yt={[Ud]:i.NEVER,[Bd]:i.ALWAYS,[Nd]:i.LESS,[gu]:i.LEQUAL,[Od]:i.EQUAL,[zd]:i.GEQUAL,[Fd]:i.GREATER,[kd]:i.NOTEQUAL};function Gt(P,E){if(E.type===On&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Nn||E.magFilter===kr||E.magFilter===Po||E.magFilter===Bi||E.minFilter===Nn||E.minFilter===kr||E.minFilter===Po||E.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,dt[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,dt[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,dt[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,vt[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,vt[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,yt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===un||E.minFilter!==Po&&E.minFilter!==Bi||E.type===On&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ht(P,E){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));const et=E.source;let lt=d.get(et);lt===void 0&&(lt={},d.set(et,lt));const tt=z(E);if(tt!==P.__cacheKey){lt[tt]===void 0&&(lt[tt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,q=!0),lt[tt].usedTimes++;const Ot=lt[P.__cacheKey];Ot!==void 0&&(lt[P.__cacheKey].usedTimes--,Ot.usedTimes===0&&S(E)),P.__cacheKey=tt,P.__webglTexture=lt[tt].texture}return q}function K(P,E,q){let et=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=i.TEXTURE_3D);const lt=Ht(P,E),tt=E.source;e.bindTexture(et,P.__webglTexture,i.TEXTURE0+q);const Ot=n.get(tt);if(tt.version!==Ot.__version||lt===!0){e.activeTexture(i.TEXTURE0+q);const at=pe.getPrimaries(pe.workingColorSpace),St=E.colorSpace===vi?null:pe.getPrimaries(E.colorSpace),Jt=E.colorSpace===vi||at===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let ht=_(E.image,!1,s.maxTextureSize);ht=Xt(E,ht);const Rt=o.convert(E.format,E.colorSpace),Nt=o.convert(E.type);let jt=M(E.internalFormat,Rt,Nt,E.colorSpace,E.isVideoTexture);Gt(et,E);let Z;const Bt=E.mipmaps,te=E.isVideoTexture!==!0,_e=Ot.__version===void 0||lt===!0,k=tt.dataReady,Mt=T(E,ht);if(E.isDepthTexture)jt=v(E.format===ks,E.type),_e&&(te?e.texStorage2D(i.TEXTURE_2D,1,jt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,jt,ht.width,ht.height,0,Rt,Nt,null));else if(E.isDataTexture)if(Bt.length>0){te&&_e&&e.texStorage2D(i.TEXTURE_2D,Mt,jt,Bt[0].width,Bt[0].height);for(let Q=0,st=Bt.length;Q<st;Q++)Z=Bt[Q],te?k&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Z.width,Z.height,Rt,Nt,Z.data):e.texImage2D(i.TEXTURE_2D,Q,jt,Z.width,Z.height,0,Rt,Nt,Z.data);E.generateMipmaps=!1}else te?(_e&&e.texStorage2D(i.TEXTURE_2D,Mt,jt,ht.width,ht.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,Rt,Nt,ht.data)):e.texImage2D(i.TEXTURE_2D,0,jt,ht.width,ht.height,0,Rt,Nt,ht.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){te&&_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,jt,Bt[0].width,Bt[0].height,ht.depth);for(let Q=0,st=Bt.length;Q<st;Q++)if(Z=Bt[Q],E.format!==An)if(Rt!==null)if(te){if(k)if(E.layerUpdates.size>0){const At=Zc(Z.width,Z.height,E.format,E.type);for(const bt of E.layerUpdates){const Yt=Z.data.subarray(bt*At/Z.data.BYTES_PER_ELEMENT,(bt+1)*At/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,bt,Z.width,Z.height,1,Rt,Yt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Z.width,Z.height,ht.depth,Rt,Z.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,jt,Z.width,Z.height,ht.depth,0,Z.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Z.width,Z.height,ht.depth,Rt,Nt,Z.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,jt,Z.width,Z.height,ht.depth,0,Rt,Nt,Z.data)}else{te&&_e&&e.texStorage2D(i.TEXTURE_2D,Mt,jt,Bt[0].width,Bt[0].height);for(let Q=0,st=Bt.length;Q<st;Q++)Z=Bt[Q],E.format!==An?Rt!==null?te?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Z.width,Z.height,Rt,Z.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,jt,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?k&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Z.width,Z.height,Rt,Nt,Z.data):e.texImage2D(i.TEXTURE_2D,Q,jt,Z.width,Z.height,0,Rt,Nt,Z.data)}else if(E.isDataArrayTexture)if(te){if(_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,jt,ht.width,ht.height,ht.depth),k)if(E.layerUpdates.size>0){const Q=Zc(ht.width,ht.height,E.format,E.type);for(const st of E.layerUpdates){const At=ht.data.subarray(st*Q/ht.data.BYTES_PER_ELEMENT,(st+1)*Q/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ht.width,ht.height,1,Rt,Nt,At)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Rt,Nt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,jt,ht.width,ht.height,ht.depth,0,Rt,Nt,ht.data);else if(E.isData3DTexture)te?(_e&&e.texStorage3D(i.TEXTURE_3D,Mt,jt,ht.width,ht.height,ht.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Rt,Nt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,jt,ht.width,ht.height,ht.depth,0,Rt,Nt,ht.data);else if(E.isFramebufferTexture){if(_e)if(te)e.texStorage2D(i.TEXTURE_2D,Mt,jt,ht.width,ht.height);else{let Q=ht.width,st=ht.height;for(let At=0;At<Mt;At++)e.texImage2D(i.TEXTURE_2D,At,jt,Q,st,0,Rt,Nt,null),Q>>=1,st>>=1}}else if(Bt.length>0){if(te&&_e){const Q=Dt(Bt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,jt,Q.width,Q.height)}for(let Q=0,st=Bt.length;Q<st;Q++)Z=Bt[Q],te?k&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Rt,Nt,Z):e.texImage2D(i.TEXTURE_2D,Q,jt,Rt,Nt,Z);E.generateMipmaps=!1}else if(te){if(_e){const Q=Dt(ht);e.texStorage2D(i.TEXTURE_2D,Mt,jt,Q.width,Q.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Nt,ht)}else e.texImage2D(i.TEXTURE_2D,0,jt,Rt,Nt,ht);g(E)&&p(et),Ot.__version=tt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ot(P,E,q){if(E.image.length!==6)return;const et=Ht(P,E),lt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);const tt=n.get(lt);if(lt.version!==tt.__version||et===!0){e.activeTexture(i.TEXTURE0+q);const Ot=pe.getPrimaries(pe.workingColorSpace),at=E.colorSpace===vi?null:pe.getPrimaries(E.colorSpace),St=E.colorSpace===vi||Ot===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Jt=E.isCompressedTexture||E.image[0].isCompressedTexture,ht=E.image[0]&&E.image[0].isDataTexture,Rt=[];for(let st=0;st<6;st++)!Jt&&!ht?Rt[st]=_(E.image[st],!0,s.maxCubemapSize):Rt[st]=ht?E.image[st].image:E.image[st],Rt[st]=Xt(E,Rt[st]);const Nt=Rt[0],jt=o.convert(E.format,E.colorSpace),Z=o.convert(E.type),Bt=M(E.internalFormat,jt,Z,E.colorSpace),te=E.isVideoTexture!==!0,_e=tt.__version===void 0||et===!0,k=lt.dataReady;let Mt=T(E,Nt);Gt(i.TEXTURE_CUBE_MAP,E);let Q;if(Jt){te&&_e&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Bt,Nt.width,Nt.height);for(let st=0;st<6;st++){Q=Rt[st].mipmaps;for(let At=0;At<Q.length;At++){const bt=Q[At];E.format!==An?jt!==null?te?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,0,0,bt.width,bt.height,jt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,Bt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,0,0,bt.width,bt.height,jt,Z,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,Bt,bt.width,bt.height,0,jt,Z,bt.data)}}}else{if(Q=E.mipmaps,te&&_e){Q.length>0&&Mt++;const st=Dt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Bt,st.width,st.height)}for(let st=0;st<6;st++)if(ht){te?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Rt[st].width,Rt[st].height,jt,Z,Rt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Bt,Rt[st].width,Rt[st].height,0,jt,Z,Rt[st].data);for(let At=0;At<Q.length;At++){const Yt=Q[At].image[st].image;te?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,0,0,Yt.width,Yt.height,jt,Z,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,Bt,Yt.width,Yt.height,0,jt,Z,Yt.data)}}else{te?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,jt,Z,Rt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Bt,jt,Z,Rt[st]);for(let At=0;At<Q.length;At++){const bt=Q[At];te?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,0,0,jt,Z,bt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,Bt,jt,Z,bt.image[st])}}}g(E)&&p(i.TEXTURE_CUBE_MAP),tt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Lt(P,E,q,et,lt,tt){const Ot=o.convert(q.format,q.colorSpace),at=o.convert(q.type),St=M(q.internalFormat,Ot,at,q.colorSpace),Jt=n.get(E),ht=n.get(q);if(ht.__renderTarget=E,!Jt.__hasExternalTextures){const Rt=Math.max(1,E.width>>tt),Nt=Math.max(1,E.height>>tt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,tt,St,Rt,Nt,E.depth,0,Ot,at,null):e.texImage2D(lt,tt,St,Rt,Nt,0,Ot,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Ut(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,lt,ht.__webglTexture,0,ut(E)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,lt,ht.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(P,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const et=E.depthTexture,lt=et&&et.isDepthTexture?et.type:null,tt=v(E.stencilBuffer,lt),Ot=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=ut(E);Ut(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,tt,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,tt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,tt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ot,i.RENDERBUFFER,P)}else{const et=E.textures;for(let lt=0;lt<et.length;lt++){const tt=et[lt],Ot=o.convert(tt.format,tt.colorSpace),at=o.convert(tt.type),St=M(tt.internalFormat,Ot,at,tt.colorSpace),Jt=ut(E);q&&Ut(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,St,E.width,E.height):Ut(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,St,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,St,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(E.depthTexture);et.__renderTarget=E,(!et.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),N(E.depthTexture,0);const lt=et.__webglTexture,tt=ut(E);if(E.depthTexture.format===Ls)Ut(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(E.depthTexture.format===ks)Ut(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function It(P){const E=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const et=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),et){const lt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,et.removeEventListener("dispose",lt)};et.addEventListener("dispose",lt),E.__depthDisposeCallback=lt}E.__boundDepthTexture=et}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Pt(E.__webglFramebuffer,P)}else if(q){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]===void 0)E.__webglDepthbuffer[et]=i.createRenderbuffer(),ct(E.__webglDepthbuffer[et],P,!1);else{const lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=E.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ct(E.__webglDepthbuffer,P,!1);else{const et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(P,E,q){const et=n.get(P);E!==void 0&&Lt(et.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&It(P)}function Qt(P){const E=P.texture,q=n.get(P),et=n.get(E);P.addEventListener("dispose",y);const lt=P.textures,tt=P.isWebGLCubeRenderTarget===!0,Ot=lt.length>1;if(Ot||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=E.version,r.memory.textures++),tt){q.__webglFramebuffer=[];for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[at]=[];for(let St=0;St<E.mipmaps.length;St++)q.__webglFramebuffer[at][St]=i.createFramebuffer()}else q.__webglFramebuffer[at]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let at=0;at<E.mipmaps.length;at++)q.__webglFramebuffer[at]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ot)for(let at=0,St=lt.length;at<St;at++){const Jt=n.get(lt[at]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),r.memory.textures++)}if(P.samples>0&&Ut(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let at=0;at<lt.length;at++){const St=lt[at];q.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[at]);const Jt=o.convert(St.format,St.colorSpace),ht=o.convert(St.type),Rt=M(St.internalFormat,Jt,ht,St.colorSpace,P.isXRRenderTarget===!0),Nt=ut(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Rt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,q.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,E);for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0)for(let St=0;St<E.mipmaps.length;St++)Lt(q.__webglFramebuffer[at][St],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St);else Lt(q.__webglFramebuffer[at],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let at=0,St=lt.length;at<St;at++){const Jt=lt[at],ht=n.get(Jt);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),Gt(i.TEXTURE_2D,Jt),Lt(q.__webglFramebuffer,P,Jt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),g(Jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(at=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,et.__webglTexture),Gt(at,E),E.mipmaps&&E.mipmaps.length>0)for(let St=0;St<E.mipmaps.length;St++)Lt(q.__webglFramebuffer[St],P,E,i.COLOR_ATTACHMENT0,at,St);else Lt(q.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,at,0);g(E)&&p(at),e.unbindTexture()}P.depthBuffer&&It(P)}function nt(P){const E=P.textures;for(let q=0,et=E.length;q<et;q++){const lt=E[q];if(g(lt)){const tt=x(P),Ot=n.get(lt).__webglTexture;e.bindTexture(tt,Ot),p(tt),e.unbindTexture()}}}const mt=[],D=[];function kt(P){if(P.samples>0){if(Ut(P)===!1){const E=P.textures,q=P.width,et=P.height;let lt=i.COLOR_BUFFER_BIT;const tt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=n.get(P),at=E.length>1;if(at)for(let St=0;St<E.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let St=0;St<E.length;St++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[St]);const Jt=n.get(E[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,q,et,0,0,q,et,lt,i.NEAREST),l===!0&&(mt.length=0,D.length=0,mt.push(i.COLOR_ATTACHMENT0+St),P.depthBuffer&&P.resolveDepthBuffer===!1&&(mt.push(tt),D.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let St=0;St<E.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[St]);const Jt=n.get(E[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ut(P){return Math.min(s.maxSamples,P.samples)}function Ut(P){const E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xt(P){const E=r.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Xt(P,E){const q=P.colorSpace,et=P.format,lt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==Vs&&q!==vi&&(pe.getTransfer(q)===Me?(et!==An||lt!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function Dt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=N,this.setTexture2DArray=W,this.setTexture3D=G,this.setTextureCube=X,this.rebindTextures=Tt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Ut}function o_(i,t){function e(n,s=vi){let o;const r=pe.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===Ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ru)return i.BYTE;if(n===au)return i.SHORT;if(n===xo)return i.UNSIGNED_SHORT;if(n===Pl)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===To)return i.HALF_FLOAT;if(n===cu)return i.ALPHA;if(n===hu)return i.RGB;if(n===An)return i.RGBA;if(n===uu)return i.LUMINANCE;if(n===du)return i.LUMINANCE_ALPHA;if(n===Ls)return i.DEPTH_COMPONENT;if(n===ks)return i.DEPTH_STENCIL;if(n===Il)return i.RED;if(n===Ul)return i.RED_INTEGER;if(n===fu)return i.RG;if(n===Nl)return i.RG_INTEGER;if(n===Ol)return i.RGBA_INTEGER;if(n===vr||n===xr||n===Mr||n===yr)if(r===Me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===vr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===vr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===qa||n===Ya||n===ja)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===$a)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ja)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ka||n===Ja)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Za||n===Ka)return r===Me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ja)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===ol||n===rl||n===al||n===ll||n===cl||n===hl||n===ul||n===dl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Qa)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nl)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sl)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rl)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===al)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ul)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===br||n===fl||n===pl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===br)return r===Me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pu||n===ml||n===gl||n===_l)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===br)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_l)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class r_ extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ct extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a_={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,m=.005;c.inputState.pinching&&d>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(a_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c_=`
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

}`;class h_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new si({vertexShader:l_,fragmentShader:c_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new J(new ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u_ extends qi{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,m=null;const _=new h_,g=e.getContextAttributes();let p=null,x=null;const M=[],v=[],T=new rt;let w=null;const y=new nn;y.viewport=new Re;const R=new nn;R.viewport=new Re;const S=[y,R],b=new r_;let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ot=M[K];return ot===void 0&&(ot=new ua,M[K]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(K){let ot=M[K];return ot===void 0&&(ot=new ua,M[K]=ot),ot.getGripSpace()},this.getHand=function(K){let ot=M[K];return ot===void 0&&(ot=new ua,M[K]=ot),ot.getHandSpace()};function B(K){const ot=v.indexOf(K.inputSource);if(ot===-1)return;const Lt=M[ot];Lt!==void 0&&(Lt.update(K.inputSource,K.frame,c||r),Lt.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",N);for(let K=0;K<M.length;K++){const ot=v[K];ot!==null&&(v[K]=null,M[K].disconnect(ot))}C=null,O=null,_.reset(),t.setRenderTarget(p),u=null,d=null,f=null,s=null,x=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const ot={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};u=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new Xi(u.framebufferWidth,u.framebufferHeight,{format:An,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ot=null,Lt=null,ct=null;g.depth&&(ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=g.stencil?ks:Ls,Lt=g.stencil?Fs:Wi);const Pt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:o};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Xi(d.textureWidth,d.textureHeight,{format:An,type:ii,depthTexture:new Cu(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function N(K){for(let ot=0;ot<K.removed.length;ot++){const Lt=K.removed[ot],ct=v.indexOf(Lt);ct>=0&&(v[ct]=null,M[ct].disconnect(Lt))}for(let ot=0;ot<K.added.length;ot++){const Lt=K.added[ot];let ct=v.indexOf(Lt);if(ct===-1){for(let It=0;It<M.length;It++)if(It>=v.length){v.push(Lt),ct=It;break}else if(v[It]===null){v[It]=Lt,ct=It;break}if(ct===-1)break}const Pt=M[ct];Pt&&Pt.connect(Lt)}}const W=new I,G=new I;function X(K,ot,Lt){W.setFromMatrixPosition(ot.matrixWorld),G.setFromMatrixPosition(Lt.matrixWorld);const ct=W.distanceTo(G),Pt=ot.projectionMatrix.elements,It=Lt.projectionMatrix.elements,Tt=Pt[14]/(Pt[10]-1),Qt=Pt[14]/(Pt[10]+1),nt=(Pt[9]+1)/Pt[5],mt=(Pt[9]-1)/Pt[5],D=(Pt[8]-1)/Pt[0],kt=(It[8]+1)/It[0],ut=Tt*D,Ut=Tt*kt,xt=ct/(-D+kt),Xt=xt*-D;if(ot.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Xt),K.translateZ(xt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pt[10]===-1)K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Dt=Tt+xt,P=Qt+xt,E=ut-Xt,q=Ut+(ct-Xt),et=nt*Qt/P*Dt,lt=mt*Qt/P*Dt;K.projectionMatrix.makePerspective(E,q,et,lt,Dt,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function dt(K,ot){ot===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ot.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ot=K.near,Lt=K.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(Lt=_.depthFar)),b.near=R.near=y.near=ot,b.far=R.far=y.far=Lt,(C!==b.near||O!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,O=b.far),y.layers.mask=K.layers.mask|2,R.layers.mask=K.layers.mask|4,b.layers.mask=y.layers.mask|R.layers.mask;const ct=K.parent,Pt=b.cameras;dt(b,ct);for(let It=0;It<Pt.length;It++)dt(Pt[It],ct);Pt.length===2?X(b,y,R):b.projectionMatrix.copy(y.projectionMatrix),vt(K,b,ct)};function vt(K,ot,Lt){Lt===null?K.matrix.copy(ot.matrixWorld):(K.matrix.copy(Lt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ot.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=zs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let yt=null;function Gt(K,ot){if(h=ot.getViewerPose(c||r),m=ot,h!==null){const Lt=h.views;u!==null&&(t.setRenderTargetFramebuffer(x,u.framebuffer),t.setRenderTarget(x));let ct=!1;Lt.length!==b.cameras.length&&(b.cameras.length=0,ct=!0);for(let It=0;It<Lt.length;It++){const Tt=Lt[It];let Qt=null;if(u!==null)Qt=u.getViewport(Tt);else{const mt=f.getViewSubImage(d,Tt);Qt=mt.viewport,It===0&&(t.setRenderTargetTextures(x,mt.colorTexture,d.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(x))}let nt=S[It];nt===void 0&&(nt=new nn,nt.layers.enable(It),nt.viewport=new Re,S[It]=nt),nt.matrix.fromArray(Tt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Tt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),It===0&&(b.matrix.copy(nt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ct===!0&&b.cameras.push(nt)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const It=f.getDepthInformation(Lt[0]);It&&It.isValid&&It.texture&&_.init(t,It,s.renderState)}}for(let Lt=0;Lt<M.length;Lt++){const ct=v[Lt],Pt=M[Lt];ct!==null&&Pt!==void 0&&Pt.update(ct,ot,c||r)}yt&&yt(K,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),m=null}const Ht=new Au;Ht.setAnimationLoop(Gt),this.setAnimationLoop=function(K){yt=K},this.dispose=function(){}}}const Ii=new Cn,d_=new he;function f_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,wu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),f(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p)):p.isMeshStandardMaterial?(o(g,p),d(g,p),p.isMeshPhysicalMaterial&&u(g,p,v)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),_(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ke&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ke&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,v=x.envMapRotation;M&&(g.envMap.value=M,Ii.copy(v),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),g.envMapRotation.value.setFromMatrix4(d_.makeRotationFromEuler(Ii)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function p_(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function c(x,M){let v=s[x.id];v===void 0&&(m(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",g));const T=M.program;n.updateUBOMapping(x,T);const w=t.render.frame;o[x.id]!==w&&(d(x),o[x.id]=w)}function h(x){const M=f();x.__bindingPointIndex=M;const v=i.createBuffer(),T=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function f(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=s[x.id],v=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,y=v.length;w<y;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,b=R.length;S<b;S++){const C=R[S];if(u(C,w,S,T)===!0){const O=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let N=0;N<B.length;N++){const W=B[N],G=_(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,O+z,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,z),z+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,M,v,T){const w=x.value,y=M+"_"+v;if(T[y]===void 0)return typeof w=="number"||typeof w=="boolean"?T[y]=w:T[y]=w.clone(),!0;{const R=T[y];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return T[y]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function m(x){const M=x.uniforms;let v=0;const T=16;for(let y=0,R=M.length;y<R;y++){const S=Array.isArray(M[y])?M[y]:[M[y]];for(let b=0,C=S.length;b<C;b++){const O=S[b],B=Array.isArray(O.value)?O.value:[O.value];for(let z=0,N=B.length;z<N;z++){const W=B[z],G=_(W),X=v%T,dt=X%G.boundary,vt=X+dt;v+=dt,vt!==0&&T-vt<G.storage&&(v+=T-vt),O.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=G.storage}}}const w=v%T;return w>0&&(v+=T-w),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function g(x){const M=x.target;M.removeEventListener("dispose",g);const v=r.indexOf(M.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}class Uu{constructor(t={}){const{canvas:e=sf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=r;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=bi,this.toneMappingExposure=1;const v=this;let T=!1,w=0,y=0,R=null,S=-1,b=null;const C=new Re,O=new Re;let B=null;const z=new zt(0);let N=0,W=e.width,G=e.height,X=1,dt=null,vt=null;const yt=new Re(0,0,W,G),Gt=new Re(0,0,W,G);let Ht=!1;const K=new zl;let ot=!1,Lt=!1;const ct=new he,Pt=new he,It=new I,Tt=new Re,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function mt(){return R===null?X:1}let D=n;function kt(A,V){return e.getContext(A,V)}try{const A={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cl}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",bt,!1),D===null){const V="webgl2";if(D=kt(V,A),D===null)throw kt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ut,Ut,xt,Xt,Dt,P,E,q,et,lt,tt,Ot,at,St,Jt,ht,Rt,Nt,jt,Z,Bt,te,_e,k;function Mt(){ut=new M0(D),ut.init(),te=new o_(D,ut),Ut=new p0(D,ut,t,te),xt=new n_(D,ut),Ut.reverseDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),Xt=new w0(D),Dt=new Hg,P=new s_(D,ut,xt,Dt,Ut,te,Xt),E=new g0(v),q=new x0(v),et=new Pf(D),_e=new d0(D,et),lt=new y0(D,et,Xt,_e),tt=new E0(D,lt,et,Xt),jt=new S0(D,Ut,P),ht=new m0(Dt),Ot=new Bg(v,E,q,ut,Ut,_e,ht),at=new f_(v,Dt),St=new Vg,Jt=new jg(ut),Nt=new u0(v,E,q,xt,tt,u,l),Rt=new t_(v,tt,Ut),k=new p_(D,Xt,Ut,xt),Z=new f0(D,ut,Xt),Bt=new b0(D,ut,Xt),Xt.programs=Ot.programs,v.capabilities=Ut,v.extensions=ut,v.properties=Dt,v.renderLists=St,v.shadowMap=Rt,v.state=xt,v.info=Xt}Mt();const Q=new u_(v,D);this.xr=Q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(W,G,!1))},this.getSize=function(A){return A.set(W,G)},this.setSize=function(A,V,Y=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,G=V,e.width=Math.floor(A*X),e.height=Math.floor(V*X),Y===!0&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(W*X,G*X).floor()},this.setDrawingBufferSize=function(A,V,Y){W=A,G=V,X=Y,e.width=Math.floor(A*Y),e.height=Math.floor(V*Y),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(yt)},this.setViewport=function(A,V,Y,j){A.isVector4?yt.set(A.x,A.y,A.z,A.w):yt.set(A,V,Y,j),xt.viewport(C.copy(yt).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Gt)},this.setScissor=function(A,V,Y,j){A.isVector4?Gt.set(A.x,A.y,A.z,A.w):Gt.set(A,V,Y,j),xt.scissor(O.copy(Gt).multiplyScalar(X).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(A){xt.setScissorTest(Ht=A)},this.setOpaqueSort=function(A){dt=A},this.setTransparentSort=function(A){vt=A},this.getClearColor=function(A){return A.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(A=!0,V=!0,Y=!0){let j=0;if(A){let H=!1;if(R!==null){const gt=R.texture.format;H=gt===Ol||gt===Nl||gt===Ul}if(H){const gt=R.texture.type,L=gt===ii||gt===Wi||gt===xo||gt===Fs||gt===Ll||gt===Dl,F=Nt.getClearColor(),$=Nt.getClearAlpha(),it=F.r,pt=F.g,ft=F.b;L?(m[0]=it,m[1]=pt,m[2]=ft,m[3]=$,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=it,_[1]=pt,_[2]=ft,_[3]=$,D.clearBufferiv(D.COLOR,0,_))}else j|=D.COLOR_BUFFER_BIT}V&&(j|=D.DEPTH_BUFFER_BIT),Y&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),St.dispose(),Jt.dispose(),Dt.dispose(),E.dispose(),q.dispose(),tt.dispose(),_e.dispose(),k.dispose(),Ot.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Be),Q.removeEventListener("sessionend",ee),vn.stop()};function st(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=Xt.autoReset,V=Rt.enabled,Y=Rt.autoUpdate,j=Rt.needsUpdate,H=Rt.type;Mt(),Xt.autoReset=A,Rt.enabled=V,Rt.autoUpdate=Y,Rt.needsUpdate=j,Rt.type=H}function bt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Yt(A){const V=A.target;V.removeEventListener("dispose",Yt),ue(V)}function ue(A){Pe(A),Dt.remove(A)}function Pe(A){const V=Dt.get(A).programs;V!==void 0&&(V.forEach(function(Y){Ot.releaseProgram(Y)}),A.isShaderMaterial&&Ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,Y,j,H,gt){V===null&&(V=Qt);const L=H.isMesh&&H.matrixWorld.determinant()<0,F=qs(A,V,Y,j,H);xt.setMaterial(j,L);let $=Y.index,it=1;if(j.wireframe===!0){if($=lt.getWireframeAttribute(Y),$===void 0)return;it=2}const pt=Y.drawRange,ft=Y.attributes.position;let Vt=pt.start*it,Zt=(pt.start+pt.count)*it;gt!==null&&(Vt=Math.max(Vt,gt.start*it),Zt=Math.min(Zt,(gt.start+gt.count)*it)),$!==null?(Vt=Math.max(Vt,0),Zt=Math.min(Zt,$.count)):ft!=null&&(Vt=Math.max(Vt,0),Zt=Math.min(Zt,ft.count));const ae=Zt-Vt;if(ae<0||ae===1/0)return;_e.setup(H,j,F,Y,$);let le,ce=Z;if($!==null&&(le=et.get($),ce=Bt,ce.setIndex(le)),H.isMesh)j.wireframe===!0?(xt.setLineWidth(j.wireframeLinewidth*mt()),ce.setMode(D.LINES)):ce.setMode(D.TRIANGLES);else if(H.isLine){let Ft=j.linewidth;Ft===void 0&&(Ft=1),xt.setLineWidth(Ft*mt()),H.isLineSegments?ce.setMode(D.LINES):H.isLineLoop?ce.setMode(D.LINE_LOOP):ce.setMode(D.LINE_STRIP)}else H.isPoints?ce.setMode(D.POINTS):H.isSprite&&ce.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ce.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))ce.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ft=H._multiDrawStarts,xn=H._multiDrawCounts,fe=H._multiDrawCount,rn=$?et.get($).bytesPerElement:1,Qe=Dt.get(j).currentProgram.getUniforms();for(let Le=0;Le<fe;Le++)Qe.setValue(D,"_gl_DrawID",Le),ce.render(Ft[Le]/rn,xn[Le])}else if(H.isInstancedMesh)ce.renderInstances(Vt,ae,H.count);else if(Y.isInstancedBufferGeometry){const Ft=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,xn=Math.min(Y.instanceCount,Ft);ce.renderInstances(Vt,ae,xn)}else ce.render(Vt,ae)};function ge(A,V,Y){A.transparent===!0&&A.side===Ae&&A.forceSinglePass===!1?(A.side=Ke,A.needsUpdate=!0,ai(A,V,Y),A.side=wi,A.needsUpdate=!0,ai(A,V,Y),A.side=Ae):ai(A,V,Y)}this.compile=function(A,V,Y=null){Y===null&&(Y=A),p=Jt.get(Y),p.init(V),M.push(p),Y.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),A!==Y&&A.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const j=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const gt=H.material;if(gt)if(Array.isArray(gt))for(let L=0;L<gt.length;L++){const F=gt[L];ge(F,Y,H),j.add(F)}else ge(gt,Y,H),j.add(gt)}),M.pop(),p=null,j},this.compileAsync=function(A,V,Y=null){const j=this.compile(A,V,Y);return new Promise(H=>{function gt(){if(j.forEach(function(L){Dt.get(L).currentProgram.isReady()&&j.delete(L)}),j.size===0){H(A);return}setTimeout(gt,10)}ut.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Je=null;function We(A){Je&&Je(A)}function Be(){vn.stop()}function ee(){vn.start()}const vn=new Au;vn.setAnimationLoop(We),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(A){Je=A,Q.setAnimationLoop(A),A===null?vn.stop():vn.start()},Q.addEventListener("sessionstart",Be),Q.addEventListener("sessionend",ee),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(V),V=Q.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,V,R),p=Jt.get(A,M.length),p.init(V),M.push(p),Pt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(Pt),Lt=this.localClippingEnabled,ot=ht.init(this.clippingPlanes,Lt),g=St.get(A,x.length),g.init(),x.push(g),Q.enabled===!0&&Q.isPresenting===!0){const gt=v.xr.getDepthSensingMesh();gt!==null&&Gn(gt,V,-1/0,v.sortObjects)}Gn(A,V,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(dt,vt),nt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,nt&&Nt.addToRenderList(g,A),this.info.render.frame++,ot===!0&&ht.beginShadows();const Y=p.state.shadowsArray;Rt.render(Y,A,V),ot===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,H=g.transmissive;if(p.setupLights(),V.isArrayCamera){const gt=V.cameras;if(H.length>0)for(let L=0,F=gt.length;L<F;L++){const $=gt[L];Ti(j,H,A,$)}nt&&Nt.render(A);for(let L=0,F=gt.length;L<F;L++){const $=gt[L];Ki(g,A,$,$.viewport)}}else H.length>0&&Ti(j,H,A,V),nt&&Nt.render(A),Ki(g,A,V);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,V),_e.resetDefaultState(),S=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],ot===!0&&ht.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Gn(A,V,Y,j){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){j&&Tt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pt);const L=tt.update(A),F=A.material;F.visible&&g.push(A,L,F,Y,Tt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const L=tt.update(A),F=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Tt.copy(A.boundingSphere.center)):(L.boundingSphere===null&&L.computeBoundingSphere(),Tt.copy(L.boundingSphere.center)),Tt.applyMatrix4(A.matrixWorld).applyMatrix4(Pt)),Array.isArray(F)){const $=L.groups;for(let it=0,pt=$.length;it<pt;it++){const ft=$[it],Vt=F[ft.materialIndex];Vt&&Vt.visible&&g.push(A,L,Vt,Y,Tt.z,ft)}}else F.visible&&g.push(A,L,F,Y,Tt.z,null)}}const gt=A.children;for(let L=0,F=gt.length;L<F;L++)Gn(gt[L],V,Y,j)}function Ki(A,V,Y,j){const H=A.opaque,gt=A.transmissive,L=A.transparent;p.setupLightsView(Y),ot===!0&&ht.setGlobalState(v.clippingPlanes,Y),j&&xt.viewport(C.copy(j)),H.length>0&&Ai(H,V,Y),gt.length>0&&Ai(gt,V,Y),L.length>0&&Ai(L,V,Y),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Ti(A,V,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Xi(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?To:ii,minFilter:Bi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const gt=p.state.transmissionRenderTarget[j.id],L=j.viewport||C;gt.setSize(L.z,L.w);const F=v.getRenderTarget();v.setRenderTarget(gt),v.getClearColor(z),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear(),nt&&Nt.render(Y);const $=v.toneMapping;v.toneMapping=bi;const it=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ot===!0&&ht.setGlobalState(v.clippingPlanes,j),Ai(A,Y,j),P.updateMultisampleRenderTarget(gt),P.updateRenderTargetMipmap(gt),ut.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let ft=0,Vt=V.length;ft<Vt;ft++){const Zt=V[ft],ae=Zt.object,le=Zt.geometry,ce=Zt.material,Ft=Zt.group;if(ce.side===Ae&&ae.layers.test(j.layers)){const xn=ce.side;ce.side=Ke,ce.needsUpdate=!0,Ji(ae,Y,j,le,ce,Ft),ce.side=xn,ce.needsUpdate=!0,pt=!0}}pt===!0&&(P.updateMultisampleRenderTarget(gt),P.updateRenderTargetMipmap(gt))}v.setRenderTarget(F),v.setClearColor(z,N),it!==void 0&&(j.viewport=it),v.toneMapping=$}function Ai(A,V,Y){const j=V.isScene===!0?V.overrideMaterial:null;for(let H=0,gt=A.length;H<gt;H++){const L=A[H],F=L.object,$=L.geometry,it=j===null?L.material:j,pt=L.group;F.layers.test(Y.layers)&&Ji(F,V,Y,$,it,pt)}}function Ji(A,V,Y,j,H,gt){A.onBeforeRender(v,V,Y,j,H,gt),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(v,V,Y,j,A,gt),H.transparent===!0&&H.side===Ae&&H.forceSinglePass===!1?(H.side=Ke,H.needsUpdate=!0,v.renderBufferDirect(Y,V,j,H,A,gt),H.side=wi,H.needsUpdate=!0,v.renderBufferDirect(Y,V,j,H,A,gt),H.side=Ae):v.renderBufferDirect(Y,V,j,H,A,gt),A.onAfterRender(v,V,Y,j,H,gt)}function ai(A,V,Y){V.isScene!==!0&&(V=Qt);const j=Dt.get(A),H=p.state.lights,gt=p.state.shadowsArray,L=H.state.version,F=Ot.getParameters(A,H.state,gt,V,Y),$=Ot.getProgramCacheKey(F);let it=j.programs;j.environment=A.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(A.isMeshStandardMaterial?q:E).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",Yt),it=new Map,j.programs=it);let pt=it.get($);if(pt!==void 0){if(j.currentProgram===pt&&j.lightsStateVersion===L)return $s(A,F),pt}else F.uniforms=Ot.getUniforms(A),A.onBeforeCompile(F,v),pt=Ot.acquireProgram(F,$),it.set($,pt),j.uniforms=F.uniforms;const ft=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ft.clippingPlanes=ht.uniform),$s(A,F),j.needsLights=Ys(A),j.lightsStateVersion=L,j.needsLights&&(ft.ambientLightColor.value=H.state.ambient,ft.lightProbe.value=H.state.probe,ft.directionalLights.value=H.state.directional,ft.directionalLightShadows.value=H.state.directionalShadow,ft.spotLights.value=H.state.spot,ft.spotLightShadows.value=H.state.spotShadow,ft.rectAreaLights.value=H.state.rectArea,ft.ltc_1.value=H.state.rectAreaLTC1,ft.ltc_2.value=H.state.rectAreaLTC2,ft.pointLights.value=H.state.point,ft.pointLightShadows.value=H.state.pointShadow,ft.hemisphereLights.value=H.state.hemi,ft.directionalShadowMap.value=H.state.directionalShadowMap,ft.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ft.spotShadowMap.value=H.state.spotShadowMap,ft.spotLightMatrix.value=H.state.spotLightMatrix,ft.spotLightMap.value=H.state.spotLightMap,ft.pointShadowMap.value=H.state.pointShadowMap,ft.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=pt,j.uniformsList=null,pt}function Qi(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=wr.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function $s(A,V){const Y=Dt.get(A);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function qs(A,V,Y,j,H){V.isScene!==!0&&(V=Qt),P.resetTextureUnits();const gt=V.fog,L=j.isMeshStandardMaterial?V.environment:null,F=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Vs,$=(j.isMeshStandardMaterial?q:E).get(j.envMap||L),it=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pt=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ft=!!Y.morphAttributes.position,Vt=!!Y.morphAttributes.normal,Zt=!!Y.morphAttributes.color;let ae=bi;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ae=v.toneMapping);const le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ce=le!==void 0?le.length:0,Ft=Dt.get(j),xn=p.state.lights;if(ot===!0&&(Lt===!0||A!==b)){const Et=A===b&&j.id===S;ht.setState(j,A,Et)}let fe=!1;j.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==xn.state.version||Ft.outputColorSpace!==F||H.isBatchedMesh&&Ft.batching===!1||!H.isBatchedMesh&&Ft.batching===!0||H.isBatchedMesh&&Ft.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ft.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ft.instancing===!1||!H.isInstancedMesh&&Ft.instancing===!0||H.isSkinnedMesh&&Ft.skinning===!1||!H.isSkinnedMesh&&Ft.skinning===!0||H.isInstancedMesh&&Ft.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ft.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ft.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ft.instancingMorph===!1&&H.morphTexture!==null||Ft.envMap!==$||j.fog===!0&&Ft.fog!==gt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ht.numPlanes||Ft.numIntersection!==ht.numIntersection)||Ft.vertexAlphas!==it||Ft.vertexTangents!==pt||Ft.morphTargets!==ft||Ft.morphNormals!==Vt||Ft.morphColors!==Zt||Ft.toneMapping!==ae||Ft.morphTargetsCount!==ce)&&(fe=!0):(fe=!0,Ft.__version=j.version);let rn=Ft.currentProgram;fe===!0&&(rn=ai(j,V,H));let Qe=!1,Le=!1,Vn=!1;const be=rn.getUniforms(),an=Ft.uniforms;if(xt.useProgram(rn.program)&&(Qe=!0,Le=!0,Vn=!0),j.id!==S&&(S=j.id,Le=!0),Qe||b!==A){xt.buffers.depth.getReversed()?(ct.copy(A.projectionMatrix),rf(ct),af(ct),be.setValue(D,"projectionMatrix",ct)):be.setValue(D,"projectionMatrix",A.projectionMatrix),be.setValue(D,"viewMatrix",A.matrixWorldInverse);const re=be.map.cameraPosition;re!==void 0&&re.setValue(D,It.setFromMatrixPosition(A.matrixWorld)),Ut.logarithmicDepthBuffer&&be.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&be.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Le=!0,Vn=!0)}if(H.isSkinnedMesh){be.setOptional(D,H,"bindMatrix"),be.setOptional(D,H,"bindMatrixInverse");const Et=H.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),be.setValue(D,"boneTexture",Et.boneTexture,P))}H.isBatchedMesh&&(be.setOptional(D,H,"batchingTexture"),be.setValue(D,"batchingTexture",H._matricesTexture,P),be.setOptional(D,H,"batchingIdTexture"),be.setValue(D,"batchingIdTexture",H._indirectTexture,P),be.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&be.setValue(D,"batchingColorTexture",H._colorsTexture,P));const _t=Y.morphAttributes;if((_t.position!==void 0||_t.normal!==void 0||_t.color!==void 0)&&jt.update(H,Y,rn),(Le||Ft.receiveShadow!==H.receiveShadow)&&(Ft.receiveShadow=H.receiveShadow,be.setValue(D,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(an.envMap.value=$,an.flipEnvMap.value=$.isCubeTexture&&$.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(an.envMapIntensity.value=V.environmentIntensity),Le&&(be.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&Ro(an,Vn),gt&&j.fog===!0&&at.refreshFogUniforms(an,gt),at.refreshMaterialUniforms(an,j,X,G,p.state.transmissionRenderTarget[A.id]),wr.upload(D,Qi(Ft),an,P)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(wr.upload(D,Qi(Ft),an,P),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&be.setValue(D,"center",H.center),be.setValue(D,"modelViewMatrix",H.modelViewMatrix),be.setValue(D,"normalMatrix",H.normalMatrix),be.setValue(D,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Et=j.uniformsGroups;for(let re=0,De=Et.length;re<De;re++){const Dn=Et[re];k.update(Dn,rn),k.bind(Dn,rn)}}return rn}function Ro(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Ys(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,V,Y){Dt.get(A.texture).__webglTexture=V,Dt.get(A.depthTexture).__webglTexture=Y;const j=Dt.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const Y=Dt.get(A);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,Y=0){R=A,w=V,y=Y;let j=!0,H=null,gt=!1,L=!1;if(A){const $=Dt.get(A);if($.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if($.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if($.__hasExternalTextures)P.rebindTextures(A,Dt.get(A.texture).__webglTexture,Dt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ft=A.depthTexture;if($.__boundDepthTexture!==ft){if(ft!==null&&Dt.has(ft)&&(A.width!==ft.image.width||A.height!==ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(L=!0);const pt=Dt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(pt[V])?H=pt[V][Y]:H=pt[V],gt=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?H=Dt.get(A).__webglMultisampledFramebuffer:Array.isArray(pt)?H=pt[Y]:H=pt,C.copy(A.viewport),O.copy(A.scissor),B=A.scissorTest}else C.copy(yt).multiplyScalar(X).floor(),O.copy(Gt).multiplyScalar(X).floor(),B=Ht;if(xt.bindFramebuffer(D.FRAMEBUFFER,H)&&j&&xt.drawBuffers(A,H),xt.viewport(C),xt.scissor(O),xt.setScissorTest(B),gt){const $=Dt.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,$.__webglTexture,Y)}else if(L){const $=Dt.get(A.texture),it=V||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,$.__webglTexture,Y||0,it)}S=-1},this.readRenderTargetPixels=function(A,V,Y,j,H,gt,L){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let F=Dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&L!==void 0&&(F=F[L]),F){xt.bindFramebuffer(D.FRAMEBUFFER,F);try{const $=A.texture,it=$.format,pt=$.type;if(!Ut.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-j&&Y>=0&&Y<=A.height-H&&D.readPixels(V,Y,j,H,te.convert(it),te.convert(pt),gt)}finally{const $=R!==null?Dt.get(R).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(A,V,Y,j,H,gt,L){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let F=Dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&L!==void 0&&(F=F[L]),F){const $=A.texture,it=$.format,pt=$.type;if(!Ut.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-j&&Y>=0&&Y<=A.height-H){xt.bindFramebuffer(D.FRAMEBUFFER,F);const ft=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ft),D.bufferData(D.PIXEL_PACK_BUFFER,gt.byteLength,D.STREAM_READ),D.readPixels(V,Y,j,H,te.convert(it),te.convert(pt),0);const Vt=R!==null?Dt.get(R).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,Vt);const Zt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await of(D,Zt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ft),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,gt),D.deleteBuffer(ft),D.deleteSync(Zt),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,V=null,Y=0){A.isTexture!==!0&&(ho("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);const j=Math.pow(2,-Y),H=Math.floor(A.image.width*j),gt=Math.floor(A.image.height*j),L=V!==null?V.x:0,F=V!==null?V.y:0;P.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,L,F,H,gt),xt.unbindTexture()},this.copyTextureToTexture=function(A,V,Y=null,j=null,H=0){A.isTexture!==!0&&(ho("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1],V=arguments[2],H=arguments[3]||0,Y=null);let gt,L,F,$,it,pt,ft,Vt,Zt;const ae=A.isCompressedTexture?A.mipmaps[H]:A.image;Y!==null?(gt=Y.max.x-Y.min.x,L=Y.max.y-Y.min.y,F=Y.isBox3?Y.max.z-Y.min.z:1,$=Y.min.x,it=Y.min.y,pt=Y.isBox3?Y.min.z:0):(gt=ae.width,L=ae.height,F=ae.depth||1,$=0,it=0,pt=0),j!==null?(ft=j.x,Vt=j.y,Zt=j.z):(ft=0,Vt=0,Zt=0);const le=te.convert(V.format),ce=te.convert(V.type);let Ft;V.isData3DTexture?(P.setTexture3D(V,0),Ft=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(P.setTexture2DArray(V,0),Ft=D.TEXTURE_2D_ARRAY):(P.setTexture2D(V,0),Ft=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);const xn=D.getParameter(D.UNPACK_ROW_LENGTH),fe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),rn=D.getParameter(D.UNPACK_SKIP_PIXELS),Qe=D.getParameter(D.UNPACK_SKIP_ROWS),Le=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,$),D.pixelStorei(D.UNPACK_SKIP_ROWS,it),D.pixelStorei(D.UNPACK_SKIP_IMAGES,pt);const Vn=A.isDataArrayTexture||A.isData3DTexture,be=V.isDataArrayTexture||V.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const an=Dt.get(A),_t=Dt.get(V),Et=Dt.get(an.__renderTarget),re=Dt.get(_t.__renderTarget);xt.bindFramebuffer(D.READ_FRAMEBUFFER,Et.__webglFramebuffer),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let De=0;De<F;De++)Vn&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.get(A).__webglTexture,H,pt+De),A.isDepthTexture?(be&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.get(V).__webglTexture,H,Zt+De),D.blitFramebuffer($,it,gt,L,ft,Vt,gt,L,D.DEPTH_BUFFER_BIT,D.NEAREST)):be?D.copyTexSubImage3D(Ft,H,ft,Vt,Zt+De,$,it,gt,L):D.copyTexSubImage2D(Ft,H,ft,Vt,Zt+De,$,it,gt,L);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else be?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Ft,H,ft,Vt,Zt,gt,L,F,le,ce,ae.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(Ft,H,ft,Vt,Zt,gt,L,F,le,ae.data):D.texSubImage3D(Ft,H,ft,Vt,Zt,gt,L,F,le,ce,ae):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,H,ft,Vt,gt,L,le,ce,ae.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,H,ft,Vt,ae.width,ae.height,le,ae.data):D.texSubImage2D(D.TEXTURE_2D,H,ft,Vt,gt,L,le,ce,ae);D.pixelStorei(D.UNPACK_ROW_LENGTH,xn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,rn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le),H===0&&V.generateMipmaps&&D.generateMipmap(Ft),xt.unbindTexture()},this.copyTextureToTexture3D=function(A,V,Y=null,j=null,H=0){return A.isTexture!==!0&&(ho("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,j=arguments[1]||null,A=arguments[2],V=arguments[3],H=arguments[4]||0),ho('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,V,Y,j,H)},this.initRenderTarget=function(A){Dt.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),xt.unbindTexture()},this.resetState=function(){w=0,y=0,R=null,xt.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}class Hl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new Hl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Gl extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class m_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vl,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new I;class Cr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=En(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=En(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=En(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=En(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),o=xe(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Cr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vl extends ji{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ps;const Qs=new I,ms=new I,gs=new I,_s=new rt,to=new rt,Nu=new he,Ko=new I,eo=new I,Jo=new I,Kc=new rt,da=new rt,Jc=new rt;class Ou extends Ce{constructor(t=new Vl){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new m_(e,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new Cr(n,3,0,!1)),ps.setAttribute("uv",new Cr(n,2,3,!1))}this.geometry=ps,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),Nu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;Qo(Ko.set(-.5,-.5,0),gs,r,ms,s,o),Qo(eo.set(.5,-.5,0),gs,r,ms,s,o),Qo(Jo.set(.5,.5,0),gs,r,ms,s,o),Kc.set(0,0),da.set(1,0),Jc.set(1,1);let a=t.ray.intersectTriangle(Ko,eo,Jo,!1,Qs);if(a===null&&(Qo(eo.set(-.5,.5,0),gs,r,ms,s,o),da.set(0,1),a=t.ray.intersectTriangle(Ko,Jo,eo,!1,Qs),a===null))return;const l=t.ray.origin.distanceTo(Qs);l<t.near||l>t.far||e.push({distance:l,point:Qs.clone(),uv:pn.getInterpolation(Qs,Ko,eo,Jo,Kc,da,Jc,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Qo(i,t,e,n,s,o){_s.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(to.x=o*_s.x-s*_s.y,to.y=s*_s.x+o*_s.y):to.copy(_s),i.copy(t),i.x+=to.x,i.y+=to.y,i.applyMatrix4(Nu)}class g_ extends Ye{constructor(t=null,e=1,n=1,s,o,r,a,l,c=un,h=un,f,d){super(null,r,a,l,c,h,s,o,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qc extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vs=new he,th=new he,tr=[],eh=new Yi,__=new he,no=new J,io=new Ws;class mn extends J{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,__)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),eh.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(eh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ws),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),io.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(io)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(no.geometry=this.geometry,no.material=this.material,no.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),io.copy(this.boundingSphere),io.applyMatrix4(n),t.ray.intersectsSphere(io)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,vs),th.multiplyMatrices(n,vs),no.matrixWorld=th,no.raycast(t,tr);for(let r=0,a=tr.length;r<a;r++){const l=tr[r];l.instanceId=o,l.object=this,e.push(l)}tr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new g_(new Float32Array(s*this.count),s,this.count,Il,On));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Fu extends ji{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Pr=new I,Lr=new I,nh=new he,so=new Ur,er=new Ws,fa=new I,ih=new I;class v_ extends Ce{constructor(t=new me,e=new Fu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Pr.fromBufferAttribute(e,s-1),Lr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Pr.distanceTo(Lr);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(s),er.radius+=o,t.ray.intersectsSphere(er)===!1)return;nh.copy(s).invert(),so.copy(t.ray).applyMatrix4(nh);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let _=u,g=m-1;_<g;_+=c){const p=h.getX(_),x=h.getX(_+1),M=nr(this,t,so,l,p,x);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(u),p=nr(this,t,so,l,_,g);p&&e.push(p)}}else{const u=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let _=u,g=m-1;_<g;_+=c){const p=nr(this,t,so,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=nr(this,t,so,l,m-1,u);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function nr(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Pr.fromBufferAttribute(r,s),Lr.fromBufferAttribute(r,o),e.distanceSqToSegment(Pr,Lr,fa,ih)>n)return;fa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(fa);if(!(l<t.near||l>t.far))return{distance:l,point:ih.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Ln extends Ye{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],d=n[s+1]-h,u=(r-h)/d;return(s+u)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new rt:new I);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],o=[],r=[],a=new I,l=new he;for(let u=0;u<=t;u++){const m=u/t;s[u]=this.getTangentAt(m,new I)}o[0]=new I,r[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let u=1;u<=t;u++){if(o[u]=o[u-1].clone(),r[u]=r[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Fe(s[u-1].dot(s[u]),-1,1));o[u].applyMatrix4(l.makeRotationAxis(a,m))}r[u].crossVectors(s[u],o[u])}if(e===!0){let u=Math.acos(Fe(o[0].dot(o[t]),-1,1));u/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(u=-u);for(let m=1;m<=t;m++)o[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wl extends Hn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new rt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class x_ extends Wl{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Xl(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,f){let d=(r-o)/c-(a-o)/(c+h)+(a-r)/h,u=(a-r)/h-(l-r)/(h+f)+(l-a)/f;d*=h,u*=h,s(r,a,d,u)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const ir=new I,pa=new Xl,ma=new Xl,ga=new Xl;class M_ extends Hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(ir.subVectors(s[0],s[1]).add(s[0]),c=ir);const f=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(ir.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=ir),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),pa.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,m,_,g),ma.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,m,_,g),ga.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(pa.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),ma.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),ga.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(pa.calc(l),ma.calc(l),ga.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function y_(i,t){const e=1-i;return e*e*t}function b_(i,t){return 2*(1-i)*i*t}function w_(i,t){return i*i*t}function go(i,t,e,n){return y_(i,t)+b_(i,e)+w_(i,n)}function S_(i,t){const e=1-i;return e*e*e*t}function E_(i,t){const e=1-i;return 3*e*e*i*t}function T_(i,t){return 3*(1-i)*i*i*t}function A_(i,t){return i*i*i*t}function _o(i,t,e,n,s){return S_(i,t)+E_(i,e)+T_(i,n)+A_(i,s)}class ku extends Hn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(_o(t,s.x,o.x,r.x,a.x),_o(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class R_ extends Hn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(_o(t,s.x,o.x,r.x,a.x),_o(t,s.y,o.y,r.y,a.y),_o(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zu extends Hn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class C_ extends Hn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bu extends Hn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(go(t,s.x,o.x,r.x),go(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class P_ extends Hn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(go(t,s.x,o.x,r.x),go(t,s.y,o.y,r.y),go(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hu extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(sh(a,l.x,c.x,h.x,f.x),sh(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var yl=Object.freeze({__proto__:null,ArcCurve:x_,CatmullRomCurve3:M_,CubicBezierCurve:ku,CubicBezierCurve3:R_,EllipseCurve:Wl,LineCurve:zu,LineCurve3:C_,QuadraticBezierCurve:Bu,QuadraticBezierCurve3:P_,SplineCurve:Hu});class L_ extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new yl[s.type]().fromJSON(s))}return this}}class oh extends L_{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new zu(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Bu(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new ku(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Wl(t,e,n,s,o,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $l extends me{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Fe(s,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,f=new I,d=new rt,u=new I,m=new I,_=new I;let g=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,u.x=p*1,u.y=-g,u.z=p*0,_.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,u.x=p*1,u.y=-g,u.z=p*0,m.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),l.push(u.x,u.y,u.z),_.copy(m)}for(let x=0;x<=e;x++){const M=n+x*h*s,v=Math.sin(M),T=Math.cos(M);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*v,f.y=t[w].y,f.z=t[w].x*T,r.push(f.x,f.y,f.z),d.x=x/e,d.y=w/(t.length-1),a.push(d.x,d.y);const y=l[3*w+0]*v,R=l[3*w+1],S=l[3*w+0]*T;c.push(y,R,S)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){const v=M+x*t.length,T=v,w=v+t.length,y=v+t.length+1,R=v+1;o.push(T,w,R),o.push(y,R,w)}this.setIndex(o),this.setAttribute("position",new $t(r,3)),this.setAttribute("uv",new $t(a,2)),this.setAttribute("normal",new $t(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $l(t.points,t.segments,t.phiStart,t.phiLength)}}class ql extends me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new I,h=new rt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const u=n+f/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ql(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qt extends me{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],f=[],d=[],u=[];let m=0;const _=[],g=n/2;let p=0;x(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new $t(f,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(u,2));function x(){const v=new I,T=new I;let w=0;const y=(e-t)/n;for(let R=0;R<=o;R++){const S=[],b=R/o,C=b*(e-t)+t;for(let O=0;O<=s;O++){const B=O/s,z=B*l+a,N=Math.sin(z),W=Math.cos(z);T.x=C*N,T.y=-b*n+g,T.z=C*W,f.push(T.x,T.y,T.z),v.set(N,y,W).normalize(),d.push(v.x,v.y,v.z),u.push(B,1-b),S.push(m++)}_.push(S)}for(let R=0;R<s;R++)for(let S=0;S<o;S++){const b=_[S][R],C=_[S+1][R],O=_[S+1][R+1],B=_[S][R+1];(t>0||S!==0)&&(h.push(b,C,B),w+=3),(e>0||S!==o-1)&&(h.push(C,O,B),w+=3)}c.addGroup(p,w,0),p+=w}function M(v){const T=m,w=new rt,y=new I;let R=0;const S=v===!0?t:e,b=v===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,g*b,0),d.push(0,b,0),u.push(.5,.5),m++;const C=m;for(let O=0;O<=s;O++){const z=O/s*l+a,N=Math.cos(z),W=Math.sin(z);y.x=S*W,y.y=g*b,y.z=S*N,f.push(y.x,y.y,y.z),d.push(0,b,0),w.x=N*.5+.5,w.y=W*.5*b+.5,u.push(w.x,w.y),m++}for(let O=0;O<s;O++){const B=T+O,z=C+O;v===!0?h.push(z,z+1,B):h.push(z+1,z,B),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ei extends qt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new ei(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Or extends me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(o.slice(),3)),this.setAttribute("uv",new $t(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new I,v=new I,T=new I;for(let w=0;w<e.length;w+=3)u(e[w+0],M),u(e[w+1],v),u(e[w+2],T),l(M,v,T,x)}function l(x,M,v,T){const w=T+1,y=[];for(let R=0;R<=w;R++){y[R]=[];const S=x.clone().lerp(v,R/w),b=M.clone().lerp(v,R/w),C=w-R;for(let O=0;O<=C;O++)O===0&&R===w?y[R][O]=S:y[R][O]=S.clone().lerp(b,O/C)}for(let R=0;R<w;R++)for(let S=0;S<2*(w-R)-1;S++){const b=Math.floor(S/2);S%2===0?(d(y[R][b+1]),d(y[R+1][b]),d(y[R][b])):(d(y[R][b+1]),d(y[R+1][b+1]),d(y[R+1][b]))}}function c(x){const M=new I;for(let v=0;v<o.length;v+=3)M.x=o[v+0],M.y=o[v+1],M.z=o[v+2],M.normalize().multiplyScalar(x),o[v+0]=M.x,o[v+1]=M.y,o[v+2]=M.z}function h(){const x=new I;for(let M=0;M<o.length;M+=3){x.x=o[M+0],x.y=o[M+1],x.z=o[M+2];const v=g(x)/2/Math.PI+.5,T=p(x)/Math.PI+.5;r.push(v,1-T)}m(),f()}function f(){for(let x=0;x<r.length;x+=6){const M=r[x+0],v=r[x+2],T=r[x+4],w=Math.max(M,v,T),y=Math.min(M,v,T);w>.9&&y<.1&&(M<.2&&(r[x+0]+=1),v<.2&&(r[x+2]+=1),T<.2&&(r[x+4]+=1))}}function d(x){o.push(x.x,x.y,x.z)}function u(x,M){const v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function m(){const x=new I,M=new I,v=new I,T=new I,w=new rt,y=new rt,R=new rt;for(let S=0,b=0;S<o.length;S+=9,b+=6){x.set(o[S+0],o[S+1],o[S+2]),M.set(o[S+3],o[S+4],o[S+5]),v.set(o[S+6],o[S+7],o[S+8]),w.set(r[b+0],r[b+1]),y.set(r[b+2],r[b+3]),R.set(r[b+4],r[b+5]),T.copy(x).add(M).add(v).divideScalar(3);const C=g(T);_(w,b+0,x,C),_(y,b+2,M,C),_(R,b+4,v,C)}}function _(x,M,v,T){T<0&&x.x===1&&(r[M]=x.x-1),v.x===0&&v.z===0&&(r[M]=T/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.vertices,t.indices,t.radius,t.details)}}class Zi extends oh{constructor(t){super(t),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new oh().fromJSON(s))}return this}}const D_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Gu(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,f,d,u;if(n&&(o=F_(i,t,o,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)f=i[m],d=i[m+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return Mo(o,r,e,a,l,u,0),r}};function Gu(i,t,e,n,s){let o,r;if(s===Y_(i,t,e,n)>0)for(o=t;o<e;o+=n)r=rh(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=rh(o,i[o],i[o+1],r);return r&&Fr(r,r.next)&&(bo(r),r=r.next),r}function $i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Fr(e,e.next)||Se(e.prev,e,e.next)===0)){if(bo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Mo(i,t,e,n,s,o,r){if(!i)return;!r&&o&&G_(i,n,s,o);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,o?U_(i,n,s,o):I_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),bo(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=N_($i(i),t,e),Mo(i,t,e,n,s,o,2)):r===2&&O_(i,t,e,n,s,o):Mo($i(i),t,e,n,s,o,1);break}}}function I_(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=s<o?s<r?s:r:o<r?o:r,f=a<l?a<c?a:c:l<c?l:c,d=s>o?s>r?s:r:o>r?o:r,u=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=f&&m.y<=u&&As(s,a,o,l,r,c,m.x,m.y)&&Se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function U_(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Se(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,f=o.y,d=r.y,u=a<l?a<c?a:c:l<c?l:c,m=h<f?h<d?h:d:f<d?f:d,_=a>l?a>c?a:c:l>c?l:c,g=h>f?h>d?h:d:f>d?f:d,p=bl(u,m,t,e,n),x=bl(_,g,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=x;){if(M.x>=u&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==r&&As(a,h,l,f,c,d,M.x,M.y)&&Se(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=u&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==r&&As(a,h,l,f,c,d,v.x,v.y)&&Se(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=u&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==r&&As(a,h,l,f,c,d,M.x,M.y)&&Se(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=x;){if(v.x>=u&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==r&&As(a,h,l,f,c,d,v.x,v.y)&&Se(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function N_(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Fr(s,o)&&Vu(s,n,n.next,o)&&yo(s,o)&&yo(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),bo(n),bo(n.next),n=i=o),n=n.next}while(n!==i);return $i(n)}function O_(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&X_(r,a)){let l=Wu(r,a);r=$i(r,r.next),l=$i(l,l.next),Mo(r,t,e,n,s,o,0),Mo(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function F_(i,t,e,n){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=Gu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(W_(c));for(s.sort(k_),o=0;o<s.length;o++)e=z_(s[o],e);return e}function k_(i,t){return i.x-t.x}function z_(i,t){const e=B_(i,t);if(!e)return t;const n=Wu(e,i);return $i(n,n.next),$i(e,e.next)}function B_(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,f;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&As(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(o-e.x),yo(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&H_(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function H_(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function G_(i,t,e,n){let s=i;do s.z===0&&(s.z=bl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,V_(s)}function V_(i){let t,e,n,s,o,r,a,l,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function bl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function W_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function As(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function X_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$_(i,t)&&(yo(i,t)&&yo(t,i)&&q_(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||Fr(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Fr(i,t){return i.x===t.x&&i.y===t.y}function Vu(i,t,e,n){const s=or(Se(i,t,e)),o=or(Se(i,t,n)),r=or(Se(e,n,i)),a=or(Se(e,n,t));return!!(s!==o&&r!==a||s===0&&sr(i,e,t)||o===0&&sr(i,n,t)||r===0&&sr(e,i,n)||a===0&&sr(e,t,n))}function sr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function or(i){return i>0?1:i<0?-1:0}function $_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Vu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yo(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function q_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Wu(i,t){const e=new wl(i.i,i.x,i.y),n=new wl(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function rh(i,t,e,n){const s=new wl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function bo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Y_(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class zn{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return zn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];ah(t),lh(n,t);let r=t.length;e.forEach(ah);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,lh(n,e[l]);const a=D_.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function ah(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function lh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Gs extends me{constructor(t=new Zi([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new $t(s,3)),this.setAttribute("uv",new $t(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:j_;let M,v=!1,T,w,y,R;p&&(M=p.getSpacedPoints(h),v=!0,d=!1,T=p.computeFrenetFrames(h,!1),w=new I,y=new I,R=new I),d||(g=0,u=0,m=0,_=0);const S=a.extractPoints(c);let b=S.shape;const C=S.holes;if(!zn.isClockWise(b)){b=b.reverse();for(let nt=0,mt=C.length;nt<mt;nt++){const D=C[nt];zn.isClockWise(D)&&(C[nt]=D.reverse())}}const B=zn.triangulateShape(b,C),z=b;for(let nt=0,mt=C.length;nt<mt;nt++){const D=C[nt];b=b.concat(D)}function N(nt,mt,D){return mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(mt,D)}const W=b.length,G=B.length;function X(nt,mt,D){let kt,ut,Ut;const xt=nt.x-mt.x,Xt=nt.y-mt.y,Dt=D.x-nt.x,P=D.y-nt.y,E=xt*xt+Xt*Xt,q=xt*P-Xt*Dt;if(Math.abs(q)>Number.EPSILON){const et=Math.sqrt(E),lt=Math.sqrt(Dt*Dt+P*P),tt=mt.x-Xt/et,Ot=mt.y+xt/et,at=D.x-P/lt,St=D.y+Dt/lt,Jt=((at-tt)*P-(St-Ot)*Dt)/(xt*P-Xt*Dt);kt=tt+xt*Jt-nt.x,ut=Ot+Xt*Jt-nt.y;const ht=kt*kt+ut*ut;if(ht<=2)return new rt(kt,ut);Ut=Math.sqrt(ht/2)}else{let et=!1;xt>Number.EPSILON?Dt>Number.EPSILON&&(et=!0):xt<-Number.EPSILON?Dt<-Number.EPSILON&&(et=!0):Math.sign(Xt)===Math.sign(P)&&(et=!0),et?(kt=-Xt,ut=xt,Ut=Math.sqrt(E)):(kt=xt,ut=Xt,Ut=Math.sqrt(E/2))}return new rt(kt/Ut,ut/Ut)}const dt=[];for(let nt=0,mt=z.length,D=mt-1,kt=nt+1;nt<mt;nt++,D++,kt++)D===mt&&(D=0),kt===mt&&(kt=0),dt[nt]=X(z[nt],z[D],z[kt]);const vt=[];let yt,Gt=dt.concat();for(let nt=0,mt=C.length;nt<mt;nt++){const D=C[nt];yt=[];for(let kt=0,ut=D.length,Ut=ut-1,xt=kt+1;kt<ut;kt++,Ut++,xt++)Ut===ut&&(Ut=0),xt===ut&&(xt=0),yt[kt]=X(D[kt],D[Ut],D[xt]);vt.push(yt),Gt=Gt.concat(yt)}for(let nt=0;nt<g;nt++){const mt=nt/g,D=u*Math.cos(mt*Math.PI/2),kt=m*Math.sin(mt*Math.PI/2)+_;for(let ut=0,Ut=z.length;ut<Ut;ut++){const xt=N(z[ut],dt[ut],kt);ct(xt.x,xt.y,-D)}for(let ut=0,Ut=C.length;ut<Ut;ut++){const xt=C[ut];yt=vt[ut];for(let Xt=0,Dt=xt.length;Xt<Dt;Xt++){const P=N(xt[Xt],yt[Xt],kt);ct(P.x,P.y,-D)}}}const Ht=m+_;for(let nt=0;nt<W;nt++){const mt=d?N(b[nt],Gt[nt],Ht):b[nt];v?(y.copy(T.normals[0]).multiplyScalar(mt.x),w.copy(T.binormals[0]).multiplyScalar(mt.y),R.copy(M[0]).add(y).add(w),ct(R.x,R.y,R.z)):ct(mt.x,mt.y,0)}for(let nt=1;nt<=h;nt++)for(let mt=0;mt<W;mt++){const D=d?N(b[mt],Gt[mt],Ht):b[mt];v?(y.copy(T.normals[nt]).multiplyScalar(D.x),w.copy(T.binormals[nt]).multiplyScalar(D.y),R.copy(M[nt]).add(y).add(w),ct(R.x,R.y,R.z)):ct(D.x,D.y,f/h*nt)}for(let nt=g-1;nt>=0;nt--){const mt=nt/g,D=u*Math.cos(mt*Math.PI/2),kt=m*Math.sin(mt*Math.PI/2)+_;for(let ut=0,Ut=z.length;ut<Ut;ut++){const xt=N(z[ut],dt[ut],kt);ct(xt.x,xt.y,f+D)}for(let ut=0,Ut=C.length;ut<Ut;ut++){const xt=C[ut];yt=vt[ut];for(let Xt=0,Dt=xt.length;Xt<Dt;Xt++){const P=N(xt[Xt],yt[Xt],kt);v?ct(P.x,P.y+M[h-1].y,M[h-1].x+D):ct(P.x,P.y,f+D)}}}K(),ot();function K(){const nt=s.length/3;if(d){let mt=0,D=W*mt;for(let kt=0;kt<G;kt++){const ut=B[kt];Pt(ut[2]+D,ut[1]+D,ut[0]+D)}mt=h+g*2,D=W*mt;for(let kt=0;kt<G;kt++){const ut=B[kt];Pt(ut[0]+D,ut[1]+D,ut[2]+D)}}else{for(let mt=0;mt<G;mt++){const D=B[mt];Pt(D[2],D[1],D[0])}for(let mt=0;mt<G;mt++){const D=B[mt];Pt(D[0]+W*h,D[1]+W*h,D[2]+W*h)}}n.addGroup(nt,s.length/3-nt,0)}function ot(){const nt=s.length/3;let mt=0;Lt(z,mt),mt+=z.length;for(let D=0,kt=C.length;D<kt;D++){const ut=C[D];Lt(ut,mt),mt+=ut.length}n.addGroup(nt,s.length/3-nt,1)}function Lt(nt,mt){let D=nt.length;for(;--D>=0;){const kt=D;let ut=D-1;ut<0&&(ut=nt.length-1);for(let Ut=0,xt=h+g*2;Ut<xt;Ut++){const Xt=W*Ut,Dt=W*(Ut+1),P=mt+kt+Xt,E=mt+ut+Xt,q=mt+ut+Dt,et=mt+kt+Dt;It(P,E,q,et)}}}function ct(nt,mt,D){l.push(nt),l.push(mt),l.push(D)}function Pt(nt,mt,D){Tt(nt),Tt(mt),Tt(D);const kt=s.length/3,ut=x.generateTopUV(n,s,kt-3,kt-2,kt-1);Qt(ut[0]),Qt(ut[1]),Qt(ut[2])}function It(nt,mt,D,kt){Tt(nt),Tt(mt),Tt(kt),Tt(mt),Tt(D),Tt(kt);const ut=s.length/3,Ut=x.generateSideWallUV(n,s,ut-6,ut-3,ut-2,ut-1);Qt(Ut[0]),Qt(Ut[1]),Qt(Ut[3]),Qt(Ut[1]),Qt(Ut[2]),Qt(Ut[3])}function Tt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function Qt(nt){o.push(nt.x),o.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Z_(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new yl[s.type]().fromJSON(s)),new Gs(n,t.options)}}const j_={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new rt(o,r),new rt(a,l),new rt(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[s*3],u=t[s*3+1],m=t[s*3+2],_=t[o*3],g=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new rt(r,1-l),new rt(c,1-f),new rt(d,1-m),new rt(_,1-p)]:[new rt(a,1-l),new rt(h,1-f),new rt(u,1-m),new rt(g,1-p)]}};function Z_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class sn extends Or{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sn(t.radius,t.detail)}}class Yl extends Or{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yl(t.radius,t.detail)}}class Ao extends me{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let f=t;const d=(e-t)/s,u=new I,m=new rt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const p=o+g/n*r;u.x=f*Math.cos(p),u.y=f*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),m.x=(u.x/e+1)/2,m.y=(u.y/e+1)/2,h.push(m.x,m.y)}f+=d}for(let _=0;_<s;_++){const g=_*(n+1);for(let p=0;p<n;p++){const x=p+g,M=x,v=x+n+1,T=x+n+2,w=x+1;a.push(M,v,w),a.push(v,T,w)}}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class jl extends me{constructor(t=new Zi([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(o,3)),this.setAttribute("uv",new $t(r,2));function c(h){const f=s.length/3,d=h.extractPoints(e);let u=d.shape;const m=d.holes;zn.isClockWise(u)===!1&&(u=u.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];zn.isClockWise(x)===!0&&(m[g]=x.reverse())}const _=zn.triangulateShape(u,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];u=u.concat(x)}for(let g=0,p=u.length;g<p;g++){const x=u[g];s.push(x.x,x.y,0),o.push(0,0,1),r.push(x.x,x.y)}for(let g=0,p=_.length;g<p;g++){const x=_[g],M=x[0]+f,v=x[1]+f,T=x[2]+f;n.push(M,v,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return K_(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new jl(n,t.curveSegments)}}function K_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ve extends me{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],f=new I,d=new I,u=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let v=0;p===0&&r===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){const w=T/e;f.x=-t*Math.cos(s+w*o)*Math.sin(r+M*a),f.y=t*Math.cos(r+M*a),f.z=t*Math.sin(s+w*o)*Math.sin(r+M*a),m.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),g.push(w+v,1-M),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=h[p][x+1],v=h[p][x],T=h[p+1][x],w=h[p+1][x+1];(p!==0||r>0)&&u.push(M,v,w),(p!==n-1||l<Math.PI)&&u.push(v,T,w)}this.setIndex(u),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class on extends me{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new I,f=new I,d=new I;for(let u=0;u<=n;u++)for(let m=0;m<=s;m++){const _=m/s*o,g=u/n*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(_),f.y=(t+e*Math.cos(g))*Math.sin(_),f.z=e*Math.sin(g),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let m=1;m<=s;m++){const _=(s+1)*u+m-1,g=(s+1)*(u-1)+m-1,p=(s+1)*(u-1)+m,x=(s+1)*u+m;r.push(_,g,x),r.push(g,p,x)}this.setIndex(r),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Kt extends ji{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mu,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zl extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xu extends Zl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const _a=new he,ch=new I,hh=new I;class $u{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(ch),hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hh),e.updateMatrixWorld(),_a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class J_ extends $u{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=zs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Q_ extends Zl{constructor(t,e,n=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new J_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class tv extends $u{constructor(){super(new Ru(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qu extends Zl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new tv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ev{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=uh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function uh(){return performance.now()}const dh=new he;class Yu{constructor(t,e,n=0,s=1/0){this.ray=new Ur(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new kl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return dh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dh),this}intersectObject(t,e=!0,n=[]){return Sl(t,this,n,e),n.sort(fh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Sl(t[s],this,n,e);return n.sort(fh),n}}function fh(i,t){return i.distance-t.distance}function Sl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)Sl(o[r],t,e,!0)}}class ph{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nv extends qi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);const mh={type:"change"},Kl={type:"start"},ju={type:"end"},rr=new Ur,gh=new _i,iv=Math.cos(70*Bs.DEG2RAD),Ne=new I,tn=2*Math.PI,ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},va=1e-6;class sv extends nv{constructor(t,e=null){super(t,e),this.state=ye.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cs.ROTATE,MIDDLE:Cs.DOLLY,RIGHT:Cs.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new _n,this._lastTargetPosition=new I,this._quat=new _n().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ph,this._sphericalDelta=new ph,this._scale=1,this._panOffset=new I,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new I,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rv.bind(this),this._onPointerDown=ov.bind(this),this._onPointerUp=av.bind(this),this._onContextMenu=pv.bind(this),this._onMouseWheel=hv.bind(this),this._onKeyDown=uv.bind(this),this._onTouchStart=dv.bind(this),this._onTouchMove=fv.bind(this),this._onMouseDown=lv.bind(this),this._onMouseMove=cv.bind(this),this._interceptControlDown=mv.bind(this),this._interceptControlUp=gv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mh),this.update(),this.state=ye.NONE}update(t=null){const e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),s<-Math.PI?s+=tn:s>Math.PI&&(s-=tn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Ne.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(rr.origin.copy(this.object.position),rr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rr.direction))<iv?this.object.lookAt(this.target):(gh.setFromNormalAndCoplanarPoint(this.object.up,this.target),rr.intersectPlane(gh,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>va||8*(1-this._lastQuaternion.dot(this.object.quaternion))>va||this._lastTargetPosition.distanceToSquared(this.target)>va?(this.dispatchEvent(mh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?tn/60*this.autoRotateSpeed*t:tn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ne.copy(s).sub(this.target);let o=Ne.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ov(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function rv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function av(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ju),this.state=ye.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function lv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ye.DOLLY;break;case Cs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}break;case Cs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(Kl)}function cv(i){switch(this.state){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function hv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ye.NONE||(i.preventDefault(),this.dispatchEvent(Kl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ju))}function uv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function dv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ye.TOUCH_ROTATE;break;case Es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ye.TOUCH_PAN;break;default:this.state=ye.NONE}break;case 2:switch(this.touches.TWO){case Es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ye.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ye.TOUCH_DOLLY_ROTATE;break;default:this.state=ye.NONE}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(Kl)}function fv(i){switch(this._trackPointer(i),this.state){case ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ye.NONE}}function pv(i){this.enabled!==!1&&i.preventDefault()}function mv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}async function _v(i){const t=await fetch(i);if(!t.ok)throw new Error(`Failed to load ${i}: ${t.status}`);return t.json()}class vv{constructor(t){U(this,"n");U(this,"x");U(this,"z");U(this,"s");U(this,"length");U(this,"vtx");U(this,"vtz");const e=this.n=t.length/2;this.x=new Float64Array(e),this.z=new Float64Array(e),this.s=new Float64Array(e);for(let n=0;n<e;n++)this.x[n]=t[n*2],this.z[n]=t[n*2+1],n>0&&(this.s[n]=this.s[n-1]+Math.hypot(this.x[n]-this.x[n-1],this.z[n]-this.z[n-1]));this.length=this.s[e-1],this.vtx=new Float64Array(e),this.vtz=new Float64Array(e);for(let n=0;n<e;n++){const s=Math.max(0,n-1),o=Math.min(e-1,n+1),r=this.x[o]-this.x[s],a=this.z[o]-this.z[s],l=Math.hypot(r,a)||1;this.vtx[n]=r/l,this.vtz[n]=a/l}}segIndex(t){let e=0,n=this.n-2;for(;e<n;){const s=e+n+1>>1;this.s[s]<=t?e=s:n=s-1}return e}frame(t,e={x:0,z:0,tx:0,tz:1,nx:-1,nz:0}){const n=this.segIndex(t),s=(t-this.s[n])/(this.s[n+1]-this.s[n]||1);e.x=this.x[n]+(this.x[n+1]-this.x[n])*s,e.z=this.z[n]+(this.z[n+1]-this.z[n])*s;let o=this.vtx[n]+(this.vtx[n+1]-this.vtx[n])*s,r=this.vtz[n]+(this.vtz[n+1]-this.vtz[n])*s;const a=Math.hypot(o,r)||1;return o/=a,r/=a,e.tx=o,e.tz=r,e.nx=-r,e.nz=o,e}point(t,e){const n=this.frame(t);return[n.x+n.nx*e,n.z+n.nz*e]}project(t,e,n=-1){let s,o;if(n>=0){const h=this.segIndex(n);s=Math.max(0,h-60),o=Math.min(this.n-2,h+60)}else{let h=1/0,f=0;for(let d=0;d<this.n;d+=8){const u=(t-this.x[d])**2+(e-this.z[d])**2;u<h&&(h=u,f=d)}s=Math.max(0,f-24),o=Math.min(this.n-2,f+24)}let r=1/0,a=0,l=1;for(let h=s;h<=o;h++){const f=this.x[h],d=this.z[h],u=this.x[h+1]-f,m=this.z[h+1]-d,_=u*u+m*m||1e-9;let g=((t-f)*u+(e-d)*m)/_;g=g<0?0:g>1?1:g;const p=f+u*g,x=d+m*g,M=(t-p)**2+(e-x)**2;M<r&&(r=M,a=this.s[h]+Math.sqrt(_)*g,l=(t-f)*-m+(e-d)*u>=0?1:-1)}const c=Math.sqrt(r);return{s:a,d:c*l,dist:c}}}function Fn(i,t,e=0){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const _h=i=>i*i*(3-2*i);function xv(i,t,e=0){const n=Math.floor(i),s=Math.floor(t),o=_h(i-n),r=_h(t-s),a=Fn(n,s,e),l=Fn(n+1,s,e),c=Fn(n,s+1,e),h=Fn(n+1,s+1,e);return(a+(l-a)*o+(c-a)*r+(a-l-c+h)*o*r)*2-1}function Mi(i,t,e=4,n=0){let s=0,o=.5,r=1;for(let a=0;a<e;a++)s+=o*xv(i*r,t*r,n+a*17),o*=.5,r*=2.03;return s}function Si(i){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Te=(i,t,e)=>i<t?t:i>e?e:i,ws=(i,t,e)=>i+(t-i)*e,Oe=(i,t,e)=>{const n=Te((e-i)/(t-i),0,1);return n*n*(3-2*n)},Tn=5.2,xi=2.2,El=3.1,Mv=1.6,yv=15,ar=22*4.4,bv=.8,wv=7,Sv=3,Ev=.04,vh=.08;class Tv{constructor(t,e,n,s=[],o=0){U(this,"bodies",[]);U(this,"gates",[]);U(this,"groups",[]);U(this,"events",[]);U(this,"hwTable");U(this,"hwStep",.5);U(this,"overflowCooldown",0);this.length=n,this.windingHoles=s;const r=[];for(const d of[...t].sort((u,m)=>u.s0-m.s0)){const u=r.at(-1);u&&Math.abs(u.at(-1).s1-d.s0)<4?u.push(d):r.push([d])}let a=o,l=0,c=0;for(const d of r){const u=d.length>1,m=u?Av(d):d[0].name;this.bodies.push({kind:"pound",s0:l,s1:d[0].s0,level:a,lo:a,hi:a,label:"the canal"});const _={name:m,staircase:u,gates:[],bodies:[this.bodies.length-1]};this.groups.push(_);for(let g=0;g<d.length;g++){const p=d[g],x=g===0?p.s0:d[g-1].s1,M=a,v=a+p.rise,T=u?g>0:c++%2===1,w=u?`chamber ${g+1}`:"the lock";this.bodies.push({kind:"chamber",s0:x,s1:p.s1,level:T?v:M,lo:M,hi:v,lockName:m,label:w}),_.bodies.push(this.bodies.length-1),a=v}l=d.at(-1).s1;for(let g=0;g<=d.length;g++){const p=this.bodies.length-1-d.length+g,x=g===0?"bottom gates":g===d.length?"top gates":d.length===2?"middle gates":d.length===3?`middle gates (${g===1?"lower":"upper"})`:`middle gates ${g}`,M={s:g===0?d[0].s0:d[g-1].s1,below:p,above:p+1,open:0,wantOpen:!1,paddle:0,wantPaddle:!1,flow:0,lockName:m,label:x,group:_};this.gates.push(M),_.gates.push(M)}_.bodies.push(this.bodies.length)}this.bodies.push({kind:"pound",s0:l,s1:n,level:a,lo:a,hi:a,label:"the canal"});const h=Math.ceil(n/this.hwStep)+1;this.hwTable=new Float32Array(h);const f=e.filter(d=>d.kind==="road"&&d.w<12);for(let d=0;d<h;d++){const u=d*this.hwStep;let m=Tn;for(const _ of this.bodies){if(_.kind!=="chamber")continue;const g=Math.max(_.s0-u,u-_.s1,0);m=Math.min(m,xi+(Tn-xi)*Oe(.5,9,g))}for(const _ of f){const g=Math.max(Math.abs(u-_.s)-_.w/2-3.5,0);m=Math.min(m,El+(Tn-El)*Oe(0,7,g))}for(const _ of s){const g=Math.abs(u-_);g<40&&(m=Math.max(m,Tn+(yv-Tn)*Oe(40,16,g)))}this.hwTable[d]=m}}bodyIndexAt(t){for(let e=0;e<this.bodies.length;e++)if(t<this.bodies[e].s1)return e;return this.bodies.length-1}levelAt(t){return this.bodies[this.bodyIndexAt(t)].level}bedAt(t){return this.bodies[this.bodyIndexAt(t)].lo-Mv}halfWidthAt(t){const e=Te(t/this.hwStep,0,this.hwTable.length-1),n=Math.floor(e),s=e-n,o=this.hwTable[n],r=this.hwTable[Math.min(n+1,this.hwTable.length-1)];return o+(r-o)*s}levelsMatch(t){return Math.abs(this.bodies[t.below].level-this.bodies[t.above].level)<Ev}openBlocker(t){return this.levelsMatch(t)?null:`The water's ${Math.abs(this.bodies[t.below].level-this.bodies[t.above].level).toFixed(1)} m higher on one side, so the gates won't budge. Raise the paddles first.`}toggleGate(t,e){if(t.wantOpen)return e?"The boat's in the way of the gates.":(t.wantOpen=!1,null);const n=this.openBlocker(t);return n||(t.wantOpen=!0,null)}togglePaddle(t){t.wantPaddle=!t.wantPaddle}gateBlocks(t){return t.open<.97}update(t){this.overflowCooldown-=t;for(const n of this.gates)n.open=Te(n.open+(n.wantOpen?1:-1)*(t/wv),0,1),n.paddle=Te(n.paddle+(n.wantPaddle?1:-1)*(t/Sv),0,1);const e=this.bodies.map(n=>n.kind==="chamber"?n.lo:-1/0);for(let n=!0;n;){n=!1;for(const s of this.gates){if(s.open<=.02)continue;const o=Math.max(e[s.below],e[s.above]);(e[s.below]!==o||e[s.above]!==o)&&(e[s.below]=e[s.above]=o,n=!0)}}for(const n of this.gates){const s=bv*n.paddle+(n.open>.02?40*n.open:0),o=this.bodies[n.below],a=this.bodies[n.above].level-o.level;if(n.flow=0,s<=0||Math.abs(a)<1e-5)continue;const[l,c]=a>0?[n.above,n.below]:[n.below,n.above],h=this.bodies[l],f=this.bodies[c],d=h.kind==="chamber",u=f.kind==="chamber";if(!d&&!u)continue;let m=s*Math.sqrt(2*9.81*Math.abs(a))*t;d&&(m=Math.min(m,Math.max(0,h.level-e[l])*ar)),m=Math.min(m,Math.abs(a)*ar/(d&&u?2:1)),!(m<=0)&&(d&&(h.level-=m/ar),u&&(f.level+=m/ar),n.flow=Math.sign(a)*(m/t))}this.bodies.forEach((n,s)=>{if(n.kind!=="chamber"||n.level<=n.hi+vh||(n.level=n.hi+vh,this.overflowCooldown>0))return;const o=this.gates.find(l=>l.paddle>.05&&(l.below===s&&this.bodies[l.above].level>n.level||l.above===s&&this.bodies[l.below].level>n.level)),r=this.gates.find(l=>l.below===s||l.above===s).group,a=r.staircase?`${n.label} of ${r.name}`:r.name;this.events.push({text:o?`${xh(a)} is overflowing: the paddles on the ${o.label} are still up.`:`${xh(a)} is overflowing!`,kind:"warn",group:r}),this.overflowCooldown=12})}}const xh=i=>i[0].toUpperCase()+i.slice(1);function Av(i){const t=i[0].name.split(" ")[0];return i.every(e=>e.name.startsWith(t))?`${t} Staircase`:`${i[0].name} flight`}const Rv=2,xa=1.1,Mh=44,lr=8,Cv=.8,oe=1,en={bed:new zt("#2a2f24"),wallStone:new zt("#77706a"),wallSandstone:new zt("#9b5644"),coping:new zt("#bdb3a3"),towpath:new zt("#b59d78"),grass:new zt("#6f9a4c"),grassDark:new zt("#5c8a42"),field:new zt("#86a85a"),paved:new zt("#8f8b84"),park:new zt("#5e9445")};class Pv{constructor(t,e,n){U(this,"bank");U(this,"smoothBank");U(this,"bankStep",2);U(this,"riverLevel");U(this,"riverDist",null);U(this,"riverGrid",{x0:0,z0:0,w:0,h:0,cell:20});U(this,"urbanAt",()=>0);U(this,"parkAt",()=>!1);U(this,"embankments",[]);U(this,"cuttings",[]);this.route=t,this.ww=e,this.bounds=n;const s=Math.ceil(t.length/this.bankStep)+1,o=new Float32Array(s);for(let r=0;r<s;r++){const a=r*this.bankStep;let l=-1/0;for(const c of e.bodies)c.s1>a-4&&c.s0<a+4&&(l=Math.max(l,c.hi));o[r]=l+Cv}this.bank=o,this.smoothBank=bh(bh(o,15),15),this.riverLevel=e.bodies[0].lo-6}bankTop(t){return yh(this.bank,t/this.bankStep)}setRivers(t){const{bounds:e}=this,n=this.riverGrid.cell,s=Math.ceil((e.x1-e.x0)/n)+1,o=Math.ceil((e.z1-e.z0)/n)+1;this.riverGrid={x0:e.x0,z0:e.z0,w:s,h:o,cell:n};const r=new Float32Array(s*o).fill(1e9);for(const a of t)for(let l=0;l+3<a.p.length;l+=2){const c=a.p[l],h=a.p[l+1],f=a.p[l+2],d=a.p[l+3],u=120,m=Math.max(0,Math.floor((Math.min(c,f)-u-e.x0)/n)),_=Math.min(s-1,Math.ceil((Math.max(c,f)+u-e.x0)/n)),g=Math.max(0,Math.floor((Math.min(h,d)-u-e.z0)/n)),p=Math.min(o-1,Math.ceil((Math.max(h,d)+u-e.z0)/n));for(let x=g;x<=p;x++)for(let M=m;M<=_;M++){const v=Dv(e.x0+M*n,e.z0+x*n,c,h,f,d)-a.w/2;v<r[x*s+M]&&(r[x*s+M]=v)}}this.riverDist=r}riverDistAt(t,e){if(!this.riverDist)return 1e9;const n=this.riverGrid,s=Te((t-n.x0)/n.cell,0,n.w-1.001),o=Te((e-n.z0)/n.cell,0,n.h-1.001),r=Math.floor(s),a=Math.floor(o),l=s-r,c=o-a,h=this.riverDist;return ws(ws(h[a*n.w+r],h[a*n.w+r+1],l),ws(h[(a+1)*n.w+r],h[(a+1)*n.w+r+1],l),c)}cliffSide(t,e){return this.cuttings.some(n=>n.side===e&&t>n.s0-25&&t<n.s1+25)}cuttingAt(t,e){for(const n of this.cuttings){if(t<n.s0-40||t>n.s1+40)continue;const s=Oe(n.s0-30,n.s0+15,t)*(1-Oe(n.s1-15,n.s1+30,t)),o=this.ww.halfWidthAt(t),r=Math.abs(e);if(Math.sign(e)===n.side){const l=Oe(o+3.3,o+6.2,r);return{h:n.cliff*l*s,cliff:s*(r>o+3.2&&r<o+6.5?1:0)}}const a=Oe(o+3.6,o+16,r);return{h:n.far*a*s,cliff:s*(a>.05&&a<.6?.7:0)}}return{h:0,cliff:0}}landHeight(t,e,n,s){const o=this.ww.halfWidthAt(n),r=Math.abs(s);let a=ws(this.bankTop(n),yh(this.smoothBank,n/this.bankStep),Oe(o+3,o+24,r));const l=Oe(o+6,140,r);a+=Mi(t*.004,e*.004,3,7)*3.5*l+Mi(t*.03,e*.03,2,3)*.35*Oe(o+3,o+12,r);const c=this.riverDistAt(t,e);c<40&&(a=ws(this.riverLevel-1.5,a,Oe(-2,40,c))),a+=this.cuttingAt(n,s).h;for(const h of this.embankments){const f=t-h.x,d=e-h.z;if(Math.abs(f)+Math.abs(d)>h.halfSpan+60)continue;const u=Math.abs(f*h.ux+d*h.uz),m=Math.abs(-f*h.uz+d*h.ux),_=Oe(h.halfWidth+5,h.halfWidth,m);if(_<=0)continue;const g=h.deck-.15-Math.max(0,u-h.halfSpan*.9)/10;g>a&&(a=a+(g-a)*_)}return a}heightAt(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s);return n.dist<s?this.ww.bedAt(n.s):this.landHeight(t,e,n.s,n.d)}buildStrip(){const{route:t,ww:e}=this,n=[];for(let m=0;m<t.length;m+=Rv)n.push(m);n.push(t.length);for(const m of e.gates)n.push(m.s-.05,m.s+.05,m.s+xa-.05,m.s+xa+.05);n.sort((m,_)=>m-_);const s=n.length,o=m=>[[0,"bed"],[m-.8,"bed"],[m,"wallBase"],[m,"wallTop"],[m+.5,"coping"],[m+.55,"path"],[m+2.6,"path"],[m+3.4,"land"],[m+6.3,"land"],[m+7,"land"],[Math.max(14,m+9),"land"],[Math.max(22,m+15),"land"],[Math.max(32,m+24),"land"],[Math.max(Mh,m+34),"land"]],r=o(Tn).length,a=r*2-1,l=new Float32Array(s*a*3),c=new Float32Array(s*a*3),h={x:0,z:0,tx:0,tz:0,nx:0,nz:0},f=new zt;for(let m=0;m<s;m++){const _=n[m];t.frame(_,h);const g=e.halfWidthAt(_),p=this.bankTop(_),x=e.gates.find(y=>_>=y.s&&_<y.s+xa),M=e.bedAt(x?x.s-.01:_),v=e.bodies[e.bodyIndexAt(_)].kind==="chamber"||g<Tn-.5,T=Lv(t,_),w=o(g);for(let y=0;y<a;y++){const R=y<r-1?-1:1,S=R<0?r-1-y:y-(r-1);let[b,C]=w[S];C==="land"&&Math.abs(T)>1e-4&&Math.sign(T)===R&&(b=Math.min(b,Math.max(g+3.6,.8/Math.abs(T))));const O=h.x+h.nx*b*R,B=h.z+h.nz*b*R,z=R===oe||v;let N;switch(C){case"bed":N=M,f.copy(en.bed);break;case"wallBase":N=M+.2,f.copy(v?en.wallSandstone:en.wallStone);break;case"wallTop":N=p,f.copy(v?en.wallSandstone:en.wallStone);break;case"coping":N=p+.04,f.copy(en.coping);break;case"path":N=p,f.copy(z?en.towpath:en.grassDark);break;default:N=this.landHeight(O,B,_,b*R),this.groundColour(O,B,_,b*R,f)}C==="path"&&z&&f.offsetHSL(0,0,(Fn(m,y,5)-.5)*.04);const W=(m*a+y)*3;l[W]=O,l[W+1]=N,l[W+2]=B,c[W]=f.r,c[W+1]=f.g,c[W+2]=f.b}}const d=wh(l,c,s,a,!0),u=new J(d,Eh());return u.receiveShadow=!0,u.name="strip",u}buildFar(){const{bounds:t,route:e,ww:n}=this,s=Math.ceil((t.x1-t.x0)/lr)+1,o=Math.ceil((t.z1-t.z0)/lr)+1,r=new Float32Array(s*o*3),a=new Float32Array(s*o*3),l=new zt;let c=-1;for(let d=0;d<o;d++)for(let u=0;u<s;u++){const m=t.x0+u*lr,_=t.z0+d*lr,g=e.project(m,_,c),p=g.dist>150?e.project(m,_):g;c=p.dist<150?p.s:-1;const x=n.halfWidthAt(p.s);let M;p.dist<x+14?M=n.bedAt(p.s)-3:p.dist<Mh?M=this.landHeight(m,_,p.s,p.d)-.15:M=this.landHeight(m,_,p.s,p.d),this.groundColour(m,_,p.s,p.d,l);const v=(d*s+u)*3;r[v]=m,r[v+1]=M,r[v+2]=_,a[v]=l.r,a[v+1]=l.g,a[v+2]=l.b}const h=wh(r,a,o,s),f=new J(h,Eh());return f.receiveShadow=!0,f.name="far-terrain",f}groundColour(t,e,n,s,o){const r=Math.abs(s),a=Math.floor(t/150+Mi(t*.01,e*.01,2,1)*.6),l=Math.floor(e/130+Mi(t*.01,e*.01,2,2)*.6),c=Fn(a,l,11);o.copy(en.grass).lerp(en.field,c*.8),o.offsetHSL(0,0,(Fn(Math.floor(t/4),Math.floor(e/4),3)-.5)*.035),this.parkAt(t,e)&&o.lerp(en.park,.7);const h=this.urbanAt(t,e)*Oe(8,20,r);o.lerp(en.paved,h*.85);const f=this.riverDistAt(t,e);f<12&&o.lerp(en.bed,Oe(12,0,f)*.5);const d=this.cuttingAt(n,s);d.cliff>0&&o.lerp(en.wallSandstone,d.cliff).offsetHSL(0,0,(Fn(Math.floor(t/2),Math.floor(e/3),8)-.5)*.06)}}function Lv(i,t){const e=i.frame(Math.max(0,t-8)),n=i.frame(Math.min(i.length,t+8)),s=n.tx-e.tx,o=n.tz-e.tz,r=i.frame(t);return(s*r.nx+o*r.nz)/16}function yh(i,t){t=Te(t,0,i.length-1);const e=Math.floor(t);return ws(i[e],i[Math.min(e+1,i.length-1)],t-e)}function bh(i,t){const e=new Float32Array(i.length);for(let n=0;n<i.length;n++){let s=0,o=0;for(let r=-t;r<=t;r++){const a=n+r;a>=0&&a<i.length&&(s+=i[a],o++)}e[n]=s/o}return e}function Dv(i,t,e,n,s,o){const r=s-e,a=o-n,l=Te(((i-e)*r+(t-n)*a)/(r*r+a*a||1),0,1);return Math.hypot(i-e-r*l,t-n-a*l)}function wh(i,t,e,n,s=!1){const o=new Uint32Array((e-1)*(n-1)*6);let r=0;for(let l=0;l<e-1;l++)for(let c=0;c<n-1;c++){const h=l*n+c,f=h+1,d=h+n,u=d+1;s?(o[r++]=h,o[r++]=f,o[r++]=d,o[r++]=f,o[r++]=u,o[r++]=d):(o[r++]=h,o[r++]=d,o[r++]=f,o[r++]=f,o[r++]=d,o[r++]=u)}const a=new me;return a.setAttribute("position",new Ue(i,3)),a.setAttribute("color",new Ue(t,3)),a.setIndex(new Ue(o,1)),a.computeVertexNormals(),a}let Sh=null;function Eh(){return Sh??(Sh=new Kt({vertexColors:!0,roughness:.95,flatShading:!0})),Sh}function Iv(i=256){const t=new Float32Array(i*i),e=8;for(let r=0;r<i;r++)for(let a=0;a<i;a++){const l=a/i*e,c=r/i*e;t[r*i+a]=Th(l,c,e)*.6+Th(l*2,c*2,e*2)*.3}const n=new ImageData(i,i);for(let r=0;r<i;r++)for(let a=0;a<i;a++){const l=t[r*i+(a-1+i)%i],c=t[r*i+(a+1)%i],h=t[(r-1+i)%i*i+a],f=t[(r+1)%i*i+a],d=(l-c)*3,u=(h-f)*3,m=1,_=Math.hypot(d,u,m),g=(r*i+a)*4;n.data[g]=(d/_*.5+.5)*255,n.data[g+1]=(u/_*.5+.5)*255,n.data[g+2]=(m/_*.5+.5)*255,n.data[g+3]=255}const s=document.createElement("canvas");s.width=s.height=i,s.getContext("2d").putImageData(n,0,0);const o=new Ln(s);return o.wrapS=o.wrapT=Os,o}function Th(i,t,e){const n=i/e,s=t/e,o=Mi(i,t,3,2),r=Mi(i-e,t,3,2),a=Mi(i,t-e,3,2),l=Mi(i-e,t-e,3,2);return(o*(1-n)+r*n)*(1-s)+(a*(1-n)+l*n)*s}class Uv{constructor(t,e){U(this,"group",new Ct);U(this,"material");U(this,"normalMap");U(this,"chamberMeshes",[]);this.route=t,this.ww=e,this.normalMap=Iv(),this.material=new Kt({color:"#3d5c47",roughness:.12,metalness:0,normalMap:this.normalMap,normalScale:new rt(.28,.28),transparent:!0,opacity:.93,envMapIntensity:.9}),e.bodies.forEach((n,s)=>{const o=this.ribbon(n.s0-.15,n.s1+.15),r=new J(o,this.material);r.position.y=n.level,r.receiveShadow=!0,this.group.add(r),n.kind==="chamber"&&this.chamberMeshes.push({mesh:r,body:s})})}ribbon(t,e){const{route:n,ww:s}=this;t=Math.max(0,t),e=Math.min(n.length,e);const o=Math.max(2,Math.ceil((e-t)/1.5)+1),r=[],a=[],l=[];for(let h=0;h<o;h++){const f=t+(e-t)*h/(o-1),d=n.frame(f),u=s.halfWidthAt(f)+.12;for(const m of[-1,1]){const _=d.x+d.nx*u*m,g=d.z+d.nz*u*m;r.push(_,0,g),a.push(_/7,g/7)}if(h>0){const m=(h-1)*2;l.push(m,m+1,m+2,m+1,m+3,m+2)}}const c=new me;return c.setAttribute("position",new $t(r,3)),c.setAttribute("uv",new $t(a,2)),c.setIndex(l),c.computeVertexNormals(),c}addRivers(t,e){for(const n of t){const s=[],o=[],r=[],a=n.p.length/2;for(let h=0;h<a;h++){const f=Math.max(0,h-1),d=Math.min(a-1,h+1);let u=n.p[d*2]-n.p[f*2],m=n.p[d*2+1]-n.p[f*2+1];const _=Math.hypot(u,m)||1;u/=_,m/=_;for(const g of[-1,1]){const p=n.p[h*2]-m*(n.w/2)*g,x=n.p[h*2+1]+u*(n.w/2)*g;s.push(p,e,x),o.push(p/7,x/7)}if(h>0){const g=(h-1)*2;r.push(g,g+2,g+1,g+1,g+2,g+3)}}const l=new me;l.setAttribute("position",new $t(s,3)),l.setAttribute("uv",new $t(o,2)),l.setIndex(r),l.computeVertexNormals();const c=this.material.clone();c.side=Ae,c.color.set("#4a6a5c"),this.group.add(new J(l,c))}}addPond(t,e){const n=new Zi;for(let l=0;l<t.length;l+=2)(l?n.lineTo:n.moveTo).call(n,t[l],-t[l+1]);const s=new jl(n);s.rotateX(-Math.PI/2);const o=s.getAttribute("position"),r=s.getAttribute("uv");for(let l=0;l<o.count;l++)r.setXY(l,o.getX(l)/7,o.getZ(l)/7);const a=new J(s,this.material);a.position.y=e,this.group.add(a)}update(t){this.normalMap.offset.x+=t*.012,this.normalMap.offset.y+=t*.007;for(const e of this.chamberMeshes)e.mesh.position.y=this.ww.bodies[e.body].level}}const wo=["brick","brickDark","render","whiteRender","tudor","sandstone","warehouse","modern","gothic","tower","shed","white"],de={house:0,shop:1,upper:2,plain:3},Sn=128,Tl=4,cr=3,Nv=3.6,Ov=3.1;function Ma(i,t,e,n,s,o,r,a=.08){i.fillStyle=o,i.fillRect(t,e,n,s);for(let l=0;l*6<s;l++)for(let c=-1;c*14<n;c++){const h=t+c*14+l%2*7,f=e+l*6,d=1+Math.sin(l*12.9+c*78.2)*.5*a*2;i.fillStyle=So(o,d),i.fillRect(h+1,f+1,12,4)}i.fillStyle=r,i.globalAlpha=.25;for(let l=e;l<e+s;l+=6)i.fillRect(t,l,n,1);i.globalAlpha=1}function So(i,t){const e=new zt(i);return e.multiplyScalar(t),`#${e.getHexString()}`}function ya(i,t,e,n,s,o="#f4f1e8",r="#d9cfbd"){const a=t-n/2;i.fillStyle=r,i.fillRect(a-4,e-7,n+8,6),i.fillRect(a-3,e+s,n+6,4),i.fillStyle=o,i.fillRect(a,e,n,s);const l=i.createLinearGradient(0,e,0,e+s);l.addColorStop(0,"#5d7486"),l.addColorStop(1,"#22303b"),i.fillStyle=l,i.fillRect(a+4,e+4,n-8,s/2-5),i.fillRect(a+4,e+s/2+1,n-8,s/2-5),i.fillStyle=o,i.fillRect(t-1,e+4,2,s-8)}function Fv(i,t,e,n,s,o){i.fillStyle="#e9e2d2",i.fillRect(t-3,e-s-4,n+6,s+4),i.fillStyle=o,i.fillRect(t,e-s,n,s),i.fillStyle="#2a3640",i.beginPath(),i.arc(t+n/2,e-s,n/2,Math.PI,0),i.fill(),i.fillStyle="#c9a24a",i.fillRect(t+n-8,e-s/2,3,3)}function Ah(i,t,e,n,s,o){i.fillStyle=o,i.fillRect(t+2,e+18,n-4,16),i.fillStyle="#f2e6c4",i.globalAlpha=.85,i.fillRect(t+14,e+23,n-28,5),i.globalAlpha=1,i.fillStyle=So(o,.8),i.fillRect(t+4,e+36,n-8,s-38);const r=i.createLinearGradient(0,e+40,0,e+s);r.addColorStop(0,"#6c8596"),r.addColorStop(1,"#2b3943"),i.fillStyle=r,i.fillRect(t+9,e+40,n-18,s-58),i.fillStyle=So(o,.8),i.fillRect(t+n/2-2,e+40,4,s-58)}function ba(i,t,e,n,s,o="#2b3943",r="#d9cfbd"){i.fillStyle=r,i.beginPath(),i.moveTo(t-n/2-3,e+s+3),i.lineTo(t-n/2-3,e+n/2),i.arc(t,e+n/2,n/2+3,Math.PI,0),i.lineTo(t+n/2+3,e+s+3),i.fill(),i.fillStyle=o,i.beginPath(),i.moveTo(t-n/2,e+s),i.lineTo(t-n/2,e+n/2),i.arc(t,e+n/2,n/2,Math.PI,0),i.lineTo(t+n/2,e+s),i.fill()}function kv(i,t,e,n,s){i.fillStyle="#d6b49a",i.beginPath(),i.moveTo(t-n/2-4,e+s+4),i.lineTo(t-n/2-4,e+n),i.quadraticCurveTo(t-n/2-4,e-6,t,e-10),i.quadraticCurveTo(t+n/2+4,e-6,t+n/2+4,e+n),i.lineTo(t+n/2+4,e+s+4),i.fill(),i.fillStyle="#2a3440",i.beginPath(),i.moveTo(t-n/2,e+s),i.lineTo(t-n/2,e+n),i.quadraticCurveTo(t-n/2,e,t,e-4),i.quadraticCurveTo(t+n/2,e,t+n/2,e+n),i.lineTo(t+n/2,e+s),i.fill(),i.fillStyle="#8a6a55",i.fillRect(t-1,e,2,s)}function zv(i,t,e,n,s){const o=Sn,r=["#1f4d3a","#7a1f2b","#1d3557","#2b2b2b","#5a3d1e"],a=r[wo.indexOf(t)%r.length];switch(t){case"brick":case"brickDark":case"render":case"whiteRender":{const l={brick:"#a2513f",brickDark:"#7d3f31",render:"#e6dcc8",whiteRender:"#f1ede4"}[t];t.startsWith("brick")?Ma(i,n,s,o,o,l,"#d8cdb8"):(i.fillStyle=l,i.fillRect(n,s,o,o)),e===de.upper?ya(i,n+o/2,s+30,46,66):e===de.house?(Fv(i,n+18,s+o-6,34,78,["#1f4d3a","#7a1f2b","#1d3557","#2b2b2b"][n/o%4|0]),ya(i,n+92,s+38,40,58)):e===de.shop&&Ah(i,n,s,o,o,a),i.fillStyle=So(l,.75),i.fillRect(n,s+o-4,o,4);break}case"tudor":{i.fillStyle="#f4f1ea",i.fillRect(n,s,o,o),i.fillStyle="#1e1b19";for(const l of[0,60,120])i.fillRect(n+l,s,8,o);if(i.fillRect(n,s+4,o,7),i.fillRect(n,s+o-10,o,8),e===de.upper){i.lineWidth=6,i.strokeStyle="#1e1b19",i.beginPath(),i.moveTo(n+8,s+o-10),i.lineTo(n+30,s+70),i.moveTo(n+120,s+o-10),i.lineTo(n+98,s+70),i.stroke(),i.fillStyle="#2a3440",i.fillRect(n+30,s+22,68,42),i.strokeStyle="#8a8d8a",i.lineWidth=1;for(let l=0;l<9;l++)i.beginPath(),i.moveTo(n+30+l*9,s+22),i.lineTo(n+30+l*9-20,s+64),i.stroke()}else e!==de.plain&&Ah(i,n+8,s+10,o-16,o-18,"#1e1b19");break}case"sandstone":case"gothic":case"tower":{const l=t==="tower"?"#7d3f31":"#b5735a";if(t==="tower")Ma(i,n,s,o,o,l,"#c8b8a0");else{i.fillStyle=l,i.fillRect(n,s,o,o),i.strokeStyle=So(l,.82),i.lineWidth=1;for(let c=0;c*16<o;c++){i.beginPath(),i.moveTo(n,s+c*16),i.lineTo(n+o,s+c*16),i.stroke();for(let h=0;h*32<o;h++){const f=n+h*32+c%2*16;i.beginPath(),i.moveTo(f,s+c*16),i.lineTo(f,s+c*16+16),i.stroke()}}}if(e===de.plain)break;t==="gothic"?kv(i,n+o/2,s+24,40,96):t==="tower"?(i.fillStyle="#1f2730",i.fillRect(n+o/2-5,s+40,10,34)):ya(i,n+o/2,s+34,40,60,"#e9e2d2","#c49a80");break}case"warehouse":{if(Ma(i,n,s,o,o,"#80402f","#c9b8a0"),e===de.plain)break;e===de.upper?(ba(i,n+36,s+34,30,52),ba(i,n+92,s+34,30,52)):ba(i,n+o/2,s+26,62,o-30,"#2e3b2c");break}case"modern":{i.fillStyle="#b9bcbf",i.fillRect(n,s,o,o),i.fillStyle="#a6a9ad";for(let c=0;c<o;c+=32)i.fillRect(n+c,s,2,o);if(e===de.plain)break;const l=i.createLinearGradient(0,s+26,0,s+100);l.addColorStop(0,"#7f97a8"),l.addColorStop(1,"#30404c"),i.fillStyle=l,i.fillRect(n,s+(e===de.upper?28:18),o,e===de.upper?62:104),i.fillStyle="#d6d8da";for(let c=0;c<o;c+=32)i.fillRect(n+c,s+18,3,110);break}case"shed":{i.fillStyle="#7b7f78",i.fillRect(n,s,o,o),i.fillStyle="#6c706a";for(let l=0;l<o;l+=8)i.fillRect(n+l,s,3,o);break}case"white":i.fillStyle="#ffffff",i.fillRect(n,s,o,o);break}}let wa=null;function Bv(){if(wa)return wa.material;const i=document.createElement("canvas");i.width=Sn*Tl,i.height=Sn*wo.length;const t=i.getContext("2d");wo.forEach((s,o)=>{for(let r=0;r<Tl;r++)zv(t,s,r,r*Sn,o*Sn)});const e=new Ln(i);e.colorSpace=Ee,e.anisotropy=4;const n=new Kt({map:e,vertexColors:!0,roughness:.88});return n.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 cell;
varying vec4 vCell;
varying vec2 vRep;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vCell = cell;
vRep = uv;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vCell;
varying vec2 vRep;`).replace("#include <map_fragment>",`// repeat this wall's atlas cell; gradients from the unwrapped coords avoid seams
        vec2 cellUv = vCell.xy + fract(vRep) * vCell.zw;
        vec4 sampledDiffuseColor = textureGrad(map, cellUv, dFdx(vRep) * vCell.zw, dFdy(vRep) * vCell.zw);
        diffuseColor *= sampledDiffuseColor;`)},wa={texture:e,material:n},n}function xs(i,t){const e=wo.indexOf(i),n=Sn*Tl,s=Sn*wo.length,o=(t*Sn+cr)/n,r=(Sn-2*cr)/n,a=1-((e+1)*Sn-cr)/s,l=(Sn-2*cr)/s;return[o,a,r,l]}const Sa={slate:["#4d525b","#585d66","#43474f"],tile:["#7d3d30","#8a4a37"],flat:["#6a6a68","#757370"]},Ea=(i,t)=>i[Math.floor(t*i.length)%i.length];class Hv{constructor(t){U(this,"cell",3);U(this,"w");U(this,"h");U(this,"data");this.b=t,this.w=Math.ceil((t.x1-t.x0)/this.cell),this.h=Math.ceil((t.z1-t.z0)/this.cell),this.data=new Uint8Array(this.w*this.h)}mark(t,e,n){const s=this.cell;for(let o=Math.floor((e-n-this.b.z0)/s);o<=Math.floor((e+n-this.b.z0)/s);o++)for(let r=Math.floor((t-n-this.b.x0)/s);r<=Math.floor((t+n-this.b.x0)/s);r++)r>=0&&o>=0&&r<this.w&&o<this.h&&(this.data[o*this.w+r]=1)}markPolygon(t){let e=1/0,n=-1/0,s=1/0,o=-1/0;for(let a=0;a<t.length;a+=2)e=Math.min(e,t[a]),n=Math.max(n,t[a]),s=Math.min(s,t[a+1]),o=Math.max(o,t[a+1]);const r=this.cell;for(let a=s-r;a<=o+r;a+=r)for(let l=e-r;l<=n+r;l+=r)Jl(l,a,t)&&this.mark(l,a,2)}used(t,e){const n=Math.floor((t-this.b.x0)/this.cell),s=Math.floor((e-this.b.z0)/this.cell);return n<0||s<0||n>=this.w||s>=this.h||this.data[s*this.w+n]===1}}function Jl(i,t,e){let n=!1;for(let s=0,o=e.length-2;s<e.length;o=s,s+=2){const r=e[s],a=e[s+1],l=e[o],c=e[o+1];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function Gv(i,t){const n=Math.ceil((t.x1-t.x0)/30)+1,s=Math.ceil((t.z1-t.z0)/30)+1,o=new Float32Array(n*s);for(const a of i){let l=0,c=0,h=0;const f=a.p,d=f.length/2;for(let _=0;_<d;_++){const g=(_+1)%d;l+=f[_*2]*f[g*2+1]-f[g*2]*f[_*2+1],c+=f[_*2]/d,h+=f[_*2+1]/d}const u=Math.floor((c-t.x0)/30),m=Math.floor((h-t.z0)/30);u>=0&&m>=0&&u<n&&m<s&&(o[m*n+u]+=Math.abs(l)/2)}const r=new Float32Array(n*s);for(let a=0;a<s;a++)for(let l=0;l<n;l++){let c=0;for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++){const d=Math.min(n-1,Math.max(0,l+f)),u=Math.min(s-1,Math.max(0,a+h));c+=o[u*n+d]}r[a*n+l]=Math.min(1,c/9/(30*30)*3)}return(a,l)=>{const c=Math.floor((a-t.x0)/30),h=Math.floor((l-t.z0)/30);return c<0||h<0||c>=n||h>=s?0:r[h*n+c]}}class oo{constructor(){U(this,"pos",[]);U(this,"col",[]);U(this,"nrm",[]);U(this,"uv",[]);U(this,"cell",[]);U(this,"curCell",[0,0,0,0]);U(this,"a",new I);U(this,"b",new I);U(this,"n",new I)}tri(t,e,n,s,o,r){if(this.a.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),this.b.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),this.n.crossVectors(this.a,this.b).normalize(),o){const a=(t[0]+e[0]+n[0])/3-o[0],l=(t[1]+e[1]+n[1])/3-o[1],c=(t[2]+e[2]+n[2])/3-o[2];this.n.x*a+this.n.y*l+this.n.z*c<0&&([e,n]=[n,e],r&&(r=[r[0],r[2],r[1]]),this.n.negate())}[t,e,n].forEach((a,l)=>{this.pos.push(a[0],a[1],a[2]),this.col.push(s.r,s.g,s.b),this.nrm.push(this.n.x,this.n.y,this.n.z);const c=(r==null?void 0:r[l])??[.5,.5];this.uv.push(c[0],c[1]),this.cell.push(...this.curCell)})}geometry(){const t=new me;return t.setAttribute("position",new $t(this.pos,3)),t.setAttribute("normal",new $t(this.nrm,3)),t.setAttribute("color",new $t(this.col,3)),t.setAttribute("uv",new $t(this.uv,2)),t.setAttribute("cell",new $t(this.cell,4)),t}}class Vv{constructor(t,e,n,s,o){U(this,"group",new Ct);U(this,"occ");U(this,"roofs");U(this,"carPaths",[]);this.data=t,this.route=e,this.ww=n,this.terrain=s,this.bridges=o,this.occ=new Hv(s.bounds),this.roofs=new Float32Array(this.occ.w*this.occ.h).fill(-1/0)}isFree(t,e){return!this.occ.used(t,e)}roofAt(t,e){const{occ:n}=this,s=Math.floor((t-n.b.x0)/n.cell),o=Math.floor((e-n.b.z0)/n.cell);return s<0||o<0||s>=n.w||o>=n.h?-1/0:this.roofs[o*n.w+s]}markRoof(t,e){const{occ:n}=this;let s=1/0,o=-1/0,r=1/0,a=-1/0;for(let l=0;l<t.length;l+=2)s=Math.min(s,t[l]),o=Math.max(o,t[l]),r=Math.min(r,t[l+1]),a=Math.max(a,t[l+1]);for(let l=Math.floor((r-n.b.z0)/n.cell);l<=Math.floor((a-n.b.z0)/n.cell);l++)for(let c=Math.floor((s-n.b.x0)/n.cell);c<=Math.floor((o-n.b.x0)/n.cell);c++)c<0||l<0||c>=n.w||l>=n.h||Jl(n.b.x0+(c+.5)*n.cell,n.b.z0+(l+.5)*n.cell,t)&&(this.roofs[l*n.w+c]=Math.max(this.roofs[l*n.w+c],e))}build(t){return(async()=>{await t("Laying out roads…"),this.buildRoads(),await t("Building Chester…"),this.buildBuildings(),await t("Planting trees…"),this.buildTrees()})()}buildBuildings(){const t=new oo,e=new zt;for(let s=0;s<this.data.buildings.length;s++){const o=this.data.buildings[s];let r=o.p;const a=r.length/2;if(a<3)continue;this.occ.markPolygon(r);let l=0;for(let g=0;g<a;g++){const p=(g+1)%a;l+=r[g*2]*r[p*2+1]-r[p*2]*r[g*2+1]}if(l>0){const g=[];for(let p=a-1;p>=0;p--)g.push(r[p*2],r[p*2+1]);r=g}let c=1/0;for(let g=0;g<a;g++)c=Math.min(c,this.terrain.heightAt(r[g*2],r[g*2+1]));const h=c+o.h;this.markRoof(r,h+1.5);const f=Fn(s,7,1),d=Fn(s,3,2),u=this.styleFor(o,f,d,r);e.set(u.roof);const m=new zt(1,1,1).multiplyScalar(.9+d*.1);this.walls(t,r,c,h,u.style,u.ground,m),!u.flat&&a===4&&o.h<=13&&Xv(r)&&Math.abs(l)/2<400?this.gableRoof(t,r,h,m,e,u.style):this.flatRoof(t,r,h,e),this.landmarkExtras(t,o,r,h,e)}const n=new J(t.geometry(),Bv());n.castShadow=n.receiveShadow=!0,n.name="buildings",this.group.add(n)}walls(t,e,n,s,o,r,a){const l=e.length/2,c=s-n,h=Math.max(1,Math.round(c/Ov)),f=c/h,d=n-1.5;for(let u=0;u<l;u++){const m=(u+1)%l,_=e[u*2],g=e[u*2+1],p=e[m*2],x=e[m*2+1],M=Math.hypot(p-_,x-g),v=M<1.6,T=Math.max(1,Math.round(M/Nv)),w=(y,R,S,b,C)=>{t.curCell=xs(o,v?de.plain:C),t.tri([_,y,g],[p,y,x],[p,R,x],a,void 0,[[0,S],[T,S],[T,b]]),t.tri([_,y,g],[p,R,x],[_,R,g],a,void 0,[[0,S],[T,b],[0,b]])};w(d,n+f,-(n-d)/f,1,r),h>1&&w(n+f,s,0,h-1,o==="shed"?de.plain:de.upper)}}flatRoof(t,e,n,s){const o=e.length/2;t.curCell=xs("white",de.plain);const r=[];for(let a=0;a<o;a++)r.push(new rt(e[a*2],e[a*2+1]));for(const[a,l,c]of zn.triangulateShape(r,[]))t.tri([e[a*2],n,e[a*2+1]],[e[l*2],n,e[l*2+1]],[e[c*2],n,e[c*2+1]],s,[e[a*2],n-10,e[a*2+1]])}styleFor(t,e,n,s){const o=t.t,r=Ea(Sa.slate,n),a=Ea(Sa.flat,n);if(o==="wall_tower")return{style:"sandstone",ground:de.plain,roof:"#c9a58a",flat:!0};if(o==="shot_tower")return{style:"tower",ground:de.upper,roof:"#4a3a32",flat:!0};if(o==="town_hall"||o.startsWith("cathedral")||o==="church"||o==="chapel"||/cathedral|church|chapel/i.test(t.n??""))return{style:"gothic",ground:de.upper,roof:"#5a6068",flat:!0};if(["garage","garages","shed","roof","hut","carport"].includes(o)||t.h<4)return{style:"shed",ground:de.plain,roof:a,flat:!0};if(["industrial","warehouse"].includes(o))return{style:"warehouse",ground:de.house,roof:r,flat:!1};const[l,c]=[s[0],s[1]],h=this.terrain.urbanAt(l,c);if(t.h<=13&&h>.45&&e<.09)return{style:"tudor",ground:de.shop,roof:r,flat:!1};if(["commercial","retail","office","supermarket","hotel"].includes(o)||t.h>14)return e<.55?{style:"modern",ground:de.shop,roof:a,flat:!0}:{style:e<.8?"brick":"warehouse",ground:de.shop,roof:a,flat:!0};if(o==="apartments")return{style:e<.5?"modern":"brick",ground:de.house,roof:a,flat:e<.5};const f=h>.5&&n<.3?de.shop:de.house;return{style:e<.55?"brick":e<.7?"brickDark":e<.87?"render":e<.96?"whiteRender":"sandstone",ground:f,roof:n<.8?r:Ea(Sa.tile,e),flat:!1}}landmarkExtras(t,e,n,s,o){const r=n.length/2;let a=0,l=0;for(let _=0;_<r;_++)a+=n[_*2]/r,l+=n[_*2+1]/r;const c=s-e.h,h=new zt(1,1,1),f=(_,g)=>{const p=[];for(let x=0;x<4;x++){const M=g+x*Math.PI/2+Math.PI/4;p.push(a+Math.cos(M)*_*Math.SQRT2,l+Math.sin(M)*_*Math.SQRT2)}return p.reverse()};let d=0,u=0;for(let _=0;_<r;_++){const g=(_+1)%r,p=Math.hypot(n[g*2]-n[_*2],n[g*2+1]-n[_*2+1]);p>d&&(d=p,u=Math.atan2(n[g*2+1]-n[_*2+1],n[g*2]-n[_*2]))}const m=(_,g,p)=>{t.curCell=xs("white",de.plain);for(let x=0;x<4;x++){const M=(x+1)%4;t.tri([_[x*2],g,_[x*2+1]],[_[M*2],g,_[M*2+1]],[a,g+p,l],o,[a,g,l])}};if(e.t==="shot_tower"){const _=[];for(let g=0;g<r;g++)_.push(a+(n[g*2]-a)*1.12,l+(n[g*2+1]-l)*1.12);this.walls(t,_,s-1.6,s+.4,"tower",de.plain,h),this.flatRoof(t,_,s+.4,o)}else if(e.t==="town_hall"){const _=f(4.5,u);this.walls(t,_,c,c+40,"gothic",de.upper,h),m(_,c+40,10)}else if(e.t==="cathedral_main"){const _=f(7,u);this.walls(t,_,c,c+38,"gothic",de.upper,h),this.flatRoof(t,_,c+38,o);for(let g=0;g<4;g++){const p=_[g*2],x=_[g*2+1],M=[p-.8,x-.8,p-.8,x+.8,p+.8,x+.8,p+.8,x-.8];this.walls(t,M,c+38,c+41,"sandstone",de.plain,h),t.curCell=xs("white",de.plain);for(let v=0;v<4;v++){const T=(v+1)%4;t.tri([M[v*2],c+41,M[v*2+1]],[M[T*2],c+41,M[T*2+1]],[p,c+43.5,x],o,[p,c+41,x])}}}}gableRoof(t,e,n,s,o,r){const a=[0,1,2,3].map(g=>[e[g*2],e[g*2+1]]),l=(g,p)=>Math.hypot(g[0]-p[0],g[1]-p[1]);l(a[0],a[1])<l(a[1],a[2])&&a.push(a.shift());const c=l(a[1],a[2]),h=Math.min(c*.42,4),f=(g,p)=>[(g[0]+p[0])/2,(g[1]+p[1])/2],d=f(a[3],a[0]),u=f(a[1],a[2]),m=(g,p)=>[g[0],p,g[1]],_=[(a[0][0]+a[2][0])/2,n-1,(a[0][1]+a[2][1])/2];t.curCell=xs("white",de.plain),t.tri(m(a[0],n),m(a[1],n),m(u,n+h),o,_),t.tri(m(a[0],n),m(u,n+h),m(d,n+h),o,_),t.tri(m(a[2],n),m(a[3],n),m(d,n+h),o,_),t.tri(m(a[2],n),m(d,n+h),m(u,n+h),o,_),t.curCell=xs(r,de.plain),t.tri(m(a[1],n),m(a[2],n),m(u,n+h),s,_),t.tri(m(a[3],n),m(a[0],n),m(d,n+h),s,_)}buildRoads(){const t=new oo,e=new oo,n=new oo,s=new oo,o=new zt(1,1,1),r=new zt("#6d635a"),a={footway:0,path:0,cycleway:0,steps:0,track:0,service:1,residential:2,living_street:2,unclassified:2,tertiary:3,secondary:4,primary:5,trunk:6,motorway:6,pedestrian:1},l=new Set(["footway","path","cycleway","steps","track","pedestrian"]),c=new Set(["residential","unclassified","tertiary","secondary","primary","trunk","motorway"]),h=new Set([...c,"service","living_street"]),f=new Set(["tertiary","secondary","primary","trunk"]),d=new Map;for(const p of this.data.roads){if(l.has(p.k))continue;const x=new Set;for(let M=0;M<p.p.length;M+=2)x.add(`${p.p[M]},${p.p[M+1]}`);for(const M of x)d.set(M,(d.get(M)??0)+1)}const u=20,m=new Map;for(const[p,x]of d){if(x<2)continue;const[M,v]=p.split(",").map(Number),T=`${Math.floor(M/u)},${Math.floor(v/u)}`;m.has(T)||m.set(T,[]),m.get(T).push([M,v])}const _=(p,x)=>{let M=1/0;const v=Math.floor(p/u),T=Math.floor(x/u);for(let w=-1;w<=1;w++)for(let y=-1;y<=1;y++)for(const[R,S]of m.get(`${v+w},${T+y}`)??[])M=Math.min(M,Math.hypot(p-R,x-S));return M};for(const p of this.data.roads){const x=l.has(p.k)?n:c.has(p.k)&&p.w>=6?t:e,M=x===t?{plain:e,dist:_,clear:p.w/2+6}:void 0,v=this.ribbon(x,p.p,p.w,o,.05+(a[p.k]??1)*.012,!0,l.has(p.k)?2:6,M,l.has(p.k));v&&h.has(p.k)&&(v.crosses||f.has(p.k))&&this.carPaths.push({pts:v.pts,w:p.w,bridge:v.crosses})}for(const p of this.data.rails)p.skip?this.markLine(p.p,3.5):this.ribbon(s,p.p,4.2,r,.1,!0,4);const g=(p,x,M)=>{const v=new J(p.geometry(),new Kt({map:x,vertexColors:!0,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));v.receiveShadow=!0,v.name=M,this.group.add(v)};for(const p of this.data.junctions??[]){const x=this.route.project(p.x,p.z),M=this.ww.halfWidthAt(x.s);if(x.dist<M+2)continue;const v=(x.dist<M+3.5?this.terrain.bankTop(x.s):this.terrain.landHeight(p.x,p.z,x.s,x.d))+.14;e.curCell=[0,0,0,0];const T=16;for(let w=0;w<T;w++){const y=w/T*Math.PI*2,R=(w+1)/T*Math.PI*2,S=[p.x+Math.cos(y)*p.r,v,p.z+Math.sin(y)*p.r],b=[p.x+Math.cos(R)*p.r,v,p.z+Math.sin(R)*p.r];e.tri([p.x,v,p.z],S,b,o,[p.x,v-5,p.z],[[.5,.5],[.5+Math.cos(y)*.4,.5],[.5+Math.cos(R)*.4,.6]])}}g(t,Sr("major"),"roads"),g(e,Sr("lane"),"lanes"),g(n,Sr("foot"),"footways"),g(s,null,"ballast")}markLine(t,e){for(let n=0;n+3<t.length;n+=2){const s=t[n],o=t[n+1],r=t[n+2],a=t[n+3],l=Math.max(1,Math.ceil(Math.hypot(r-s,a-o)/2));for(let c=0;c<=l;c++)this.occ.mark(s+(r-s)*c/l,o+(a-o)*c/l,e)}}ribbon(t,e,n,s,o,r,a,l,c=!1){const h=[];for(let v=0;v+3<e.length;v+=2){const T=e[v],w=e[v+1],y=e[v+2],R=e[v+3],S=Math.max(1,Math.ceil(Math.hypot(y-T,R-w)/4));for(let b=0;b<S;b++)h.push([T+(y-T)*b/S,w+(R-w)*b/S])}if(h.push([e[e.length-2],e[e.length-1]]),h.length<2)return null;const f=h.map(([v,T])=>this.route.project(v,T));if(c&&f.filter(T=>T.dist<this.ww.halfWidthAt(T.s)+7).length/f.length>.4)return null;const d=f,u=d.map(v=>this.bridges.rampAt(v.s,v.d));let m=!1;for(let v=1;v<d.length;v++)Math.sign(d[v].d)!==Math.sign(d[v-1].d)&&Math.min(d[v].dist,d[v-1].dist)<20&&(u[v].onDeck||u[v-1].onDeck)&&(m=!0);const _=h.map(([v,T],w)=>{const y=d[w],R=this.ww.halfWidthAt(y.s),S=y.dist<R+3.5?this.terrain.bankTop(y.s):this.terrain.landHeight(v,T,y.s,y.d);return(m?Math.max(S,u[w].y):S)+o}),g=n/2,p=h.map((v,T)=>{const w=(B,z)=>{const N=h[z][0]-h[B][0],W=h[z][1]-h[B][1],G=Math.hypot(N,W)||1;return[-W/G,N/G]},y=T>0?w(T-1,T):w(T,T+1),R=T<h.length-1?w(T,T+1):y;let S=y[0]+R[0],b=y[1]+R[1];const C=Math.hypot(S,b)||1;S/=C,b/=C;const O=Math.min(2,1/Math.max(.5,S*R[0]+b*R[1]));return[S*O,b*O]});let x=0,M=!1;for(let v=0;v<h.length-1;v++){const T=d[v],w=d[v+1],y=Math.hypot(h[v+1][0]-h[v][0],h[v+1][1]-h[v][1]),R=x/a,S=(x+y)/a;if(x+=y,m&&Math.sign(T.d)!==Math.sign(w.d)&&u[v].onDeck&&(M=!0),(Math.min(T.dist,w.dist)<this.ww.halfWidthAt(T.s)+4||Math.sign(T.d)!==Math.sign(w.d))&&!(u[v].onDeck&&u[v+1].onDeck)||m&&u[v].onDeck&&u[v+1].onDeck)continue;const[C,O]=h[v],[B,z]=h[v+1],[N,W]=p[v],[G,X]=p[v+1],dt=[C-N*g,_[v],O-W*g],vt=[C+N*g,_[v],O+W*g],yt=[B-G*g,_[v+1],z-X*g],Gt=[B+G*g,_[v+1],z+X*g],Ht=l&&Math.min(l.dist(C,O),l.dist(B,z))<l.clear?l.plain:t;Ht.tri(dt,vt,Gt,s,[C,_[v]-5,O],[[0,R],[1,R],[1,S]]),Ht.tri(dt,Gt,yt,s,[C,_[v]-5,O],[[0,R],[1,S],[0,S]]),r&&this.occ.mark(C,O,g+1.5)}return{pts:h.map(([v,T],w)=>[v,_[w],T]),crosses:M}}buildTrees(){const t=Si(1234),e=[],{route:n,ww:s,terrain:o,occ:r}=this,a=(M,v)=>{if(r.used(M,v))return!1;const T=n.project(M,v);return T.dist>s.halfWidthAt(T.s)+4.2};for(let M=0;M<n.length;M+=5)for(const v of[-1,1]){if(t()>.6)continue;const T=s.halfWidthAt(M)+4.5+t()*t()*30,[w,y]=n.point(M,T*v);t()<o.urbanAt(w,y)*.85||a(w,y)&&e.push({x:w,z:y,s:.8+t()*.7,kind:t()<.15?1:0})}const l=o.bounds,c=(l.x1-l.x0)*(l.z1-l.z0);for(let M=0;M<c*9e-4;M++){const v=l.x0+t()*(l.x1-l.x0),T=l.z0+t()*(l.z1-l.z0),y=o.parkAt(v,T)?.7:(1-o.urbanAt(v,T))*.35*Oe(.75,.2,Math.abs(Wv(v,T)));t()>y||a(v,T)&&e.push({x:v,z:T,s:.8+t()*.9,kind:t()<.1?1:0})}for(let M=0;M<this.data.trees.length;M+=2)e.push({x:this.data.trees[M],z:this.data.trees[M+1],s:1.1,kind:0});const h=new sn(1,0),f=new qt(.18,.25,1,5);f.translate(0,.5,0);const d=new mn(h,new Kt({roughness:.9,flatShading:!0}),e.length),u=new mn(f,new Kt({color:"#5a4636",roughness:1}),e.length),m=new he,_=new _n,g=new I,p=new I,x=["#4f7a3a","#5d8a40","#3f6b35","#6b9446","#557d3c"].map(M=>new zt(M));e.forEach((M,v)=>{const T=o.heightAt(M.x,M.z),w=(M.kind===1?9:4.5)*M.s;_.setFromAxisAngle(new I(0,1,0),t()*Math.PI*2),p.set(M.x,T-.2,M.z),g.set(M.s,w*.45,M.s),u.setMatrixAt(v,m.compose(p,_,g)),p.set(M.x,T+w*.45+(M.kind===1?w*.35:w*.3),M.z),M.kind===1?g.set(1.3*M.s,w*.5,1.3*M.s):g.set(2.6*M.s,2.3*M.s,2.6*M.s),d.setMatrixAt(v,m.compose(p,_,g)),d.setColorAt(v,x[Math.floor(t()*x.length)].clone().offsetHSL(0,0,(t()-.5)*.06))}),d.castShadow=u.castShadow=!0,d.receiveShadow=!0,d.name="trees",this.group.add(d,u)}}function Wv(i,t){return Math.sin(i*.011+Math.sin(t*.007)*2)*Math.cos(t*.013+Math.sin(i*.005)*2)}function Xv(i){for(let t=0;t<4;t++){const e=t,n=(t+1)%4,s=(t+2)%4,o=i[n*2]-i[e*2],r=i[n*2+1]-i[e*2+1],a=i[s*2]-i[n*2],l=i[s*2+1]-i[n*2+1],c=(o*a+r*l)/(Math.hypot(o,r)*Math.hypot(a,l)||1);if(Math.abs(c)>.2)return!1}return!0}function Sr(i){const n=document.createElement("canvas");n.width=128,n.height=256;const s=n.getContext("2d"),o=Si(i.length*7);if(i==="foot"){s.fillStyle="#b3ad9f",s.fillRect(0,0,128,256);for(let a=0;a<256;a+=64)for(let l=0;l<128;l+=64)s.fillStyle=`hsl(40, 8%, ${62+o()*8}%)`,s.fillRect(l+2,a+2,60,60)}else{s.fillStyle="#4f5256",s.fillRect(0,0,128,256);for(let a=0;a<2500;a++)s.fillStyle=o()<.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.08)",s.fillRect(o()*128,o()*256,2,2);i==="major"&&(s.fillStyle="#e9e7df",s.fillRect(6,0,3,256),s.fillRect(119,0,3,256),s.fillRect(128/2-2,0,4,256*.5))}const r=new Ln(n);return r.colorSpace=Ee,r.wrapS=Kn,r.wrapT=Os,r.anisotropy=4,r}const Ms={brick:new Kt({color:"#8b4a3b",roughness:.9,flatShading:!0}),sandstone:new Kt({color:"#a8654f",roughness:.9,flatShading:!0}),concrete:new Kt({color:"#a39f97",roughness:.85,flatShading:!0}),iron:new Kt({color:"#3d434b",roughness:.6,metalness:.3,flatShading:!0}),coping:new Kt({color:"#c4bba9",roughness:.9,flatShading:!0})},Rh=Math.tan(55*Math.PI/180);class $v{constructor(t,e,n,s){U(this,"group",new Ct);U(this,"placed",[]);U(this,"ray",new Yu);U(this,"faded",new Map);const o=[];for(const r of n){const a=o.at(-1);if(a&&a.kind==="rail"&&r.kind==="rail"&&r.s-r.w/2<a.s+a.w/2+6){const l=Math.min(a.s-a.w/2,r.s-r.w/2),c=Math.max(a.s+a.w/2,r.s+r.w/2);o[o.length-1]={...a,s:(l+c)/2,w:c-l}}else o.push(r)}for(const r of o){const a=t.frame(r.s),l=e.levelAt(r.s),c=r.kind==="road"&&r.w<12,h=Math.sin(r.dir),f=Math.cos(r.dir),d=h*a.nx+f*a.nz,u=h*a.tx+f*a.tz,m=Bs.clamp(u/(Math.abs(d)<.001?.001:d),-Rh,Rh),_=Tn+8,g=Tn+8,p=Math.max(...[-1,1].map(z=>{const[N,W]=t.point(r.s,g*z);return s.landHeight(N,W,r.s,g*z)})),x=Math.max(l+(c?3.4:4.6),p+.2),M=new Ct;M.position.set(a.x,0,a.z),M.rotation.y=Math.atan2(-a.nz,a.nx);const v=Math.max(r.w+.8,3.2)*Math.sqrt(1+m*m);let T=a.nx+a.tx*m,w=a.nz+a.tz*m;const y=Math.hypot(T,w);T/=y,w/=y;const R=Math.max(1.2,Math.max(r.w+.8,3.2)/2-.4);this.placed.push({data:r,x:a.x,z:a.z,deck:x,halfSpan:_,arch:c,depth:v,tanSkew:m,ax:T,az:w,roadHalf:R});const S=c?qv(_,El+.05,l,x):Yv(_,Tn+1.2,l,x),b=new Gs(S,{depth:v,bevelEnabled:!1,curveSegments:10});b.translate(0,0,-v/2);const C=c?r.w<=3.5?Ms.sandstone:Ms.brick:r.kind==="rail"?Ms.iron:Ms.concrete,O=new J(b,C);O.castShadow=O.receiveShadow=!0,M.add(O);for(const z of[-1,1]){const N=new J(new Wt(_*2*.92,1,.35),c?Ms.coping:C);N.position.set(0,x+.5,z*(v/2-.12)),N.castShadow=!0,M.add(N)}if(!c)for(const z of[-1,1]){const N=new J(new Wt(1.2,x-l+1.15,v+.3),Ms.concrete);N.position.set(z*(Tn+1.2+.6-.08),(x-1.15+l-2.3)/2,0),M.add(N)}if(r.kind==="road"){const z=v/2-.3,N=x+.03,W=new me;W.setAttribute("position",new $t([-_,N,-z,_,N,-z,_,N,z,-_,N,z],3));const G=r.w<=3.5?2:6;W.setAttribute("uv",new $t([0,0,0,2*_/G,1,2*_/G,1,0],2)),W.setIndex([0,2,1,0,3,2]),W.computeVertexNormals();const X=new J(W,new Kt({map:Sr(r.w<=3.5?"foot":"major"),roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,side:Ae}));X.receiveShadow=!0,M.add(X)}const B=new he().makeShear(0,-m,0,0,0,0);for(const z of M.children){const N=z;N.updateMatrix(),N.geometry=N.geometry.applyMatrix4(N.matrix).applyMatrix4(B),N.position.set(0,0,0),N.rotation.set(0,0,0)}M.traverse(z=>{const N=z;N.isMesh&&(N.material=N.material.clone())}),M.name=`bridge:${r.name??r.s}`,this.group.add(M)}}rampAt(t,e){let n=-1/0,s=!1;for(const o of this.placed){if(Math.abs(t-(o.data.s+o.tanSkew*e))>o.depth/2+1)continue;const a=Math.abs(e);a<=o.halfSpan&&(s=!0),!(a>o.halfSpan+30)&&(n=Math.max(n,o.deck-Math.max(0,a-o.halfSpan*.85)/9))}return{y:n,onDeck:s}}updateOcclusion(t,e,n){const s=e.clone().sub(t),o=s.length();this.ray.set(t,s.normalize()),this.ray.far=o;const r=new Set(this.ray.intersectObjects(this.group.children,!0).map(a=>a.object.parent));for(const a of this.group.children){const l=this.faded.get(a)??1,c=r.has(a)?.18:1;if(l===c)continue;const h=l+Math.sign(c-l)*Math.min(Math.abs(c-l),n*4);this.faded.set(a,h),a.traverse(f=>{const d=f.material;d&&(d.transparent=h<1,d.opacity=h,d.depthWrite=h>=1)})}}at(t){return this.placed.find(e=>Math.abs(e.data.s-t)<e.data.w/2+1)}}function qv(i,t,e,n){const s=n-e,o=e-2.2,r=e+Math.max(.9,s*.3),a=e+Math.max(2.75,s*.72),l=new Zi;l.moveTo(-i,o),l.lineTo(-t,o),l.lineTo(-t,r);const c=14;for(let h=1;h<c;h++){const f=Math.PI-Math.PI*h/c;l.lineTo(Math.cos(f)*t,r+Math.sin(f)*(a-r))}return l.lineTo(t,r),l.lineTo(t,o),l.lineTo(i,o),l.lineTo(i,n),l.lineTo(-i,n),l.closePath(),l}function Yv(i,t,e,n){const s=e-2.2,o=n-1.1,r=new Zi;return r.moveTo(-i,s),r.lineTo(-t,s),r.lineTo(-t,o),r.lineTo(t,o),r.lineTo(t,s),r.lineTo(i,s),r.lineTo(i,n),r.lineTo(-i,n),r.closePath(),r}const Ch=18*Math.PI/180,jv=xi+.15,In={gate:new Kt({color:"#1d1c1a",roughness:.8,flatShading:!0}),white:new Kt({color:"#f1efe8",roughness:.7}),gear:new Kt({color:"#2b2f33",roughness:.5,metalness:.5}),rack:new Kt({color:"#c9c3b5",roughness:.4,metalness:.6}),foam:new Pn({color:"#f4f7f2",transparent:!0,opacity:0,depthWrite:!1}),highlight:new Pn({color:"#ffd76a",transparent:!0,opacity:.55,depthWrite:!1})};class Zv{constructor(t,e,n){U(this,"group",new Ct);U(this,"visuals",[]);U(this,"time",0);this.ww=e;for(const o of e.gates){const r=t.frame(o.s),a=new Ct;a.position.set(r.x,0,r.z),a.rotation.y=Math.atan2(r.tx,r.tz);const l=e.bodies[o.above].hi,c=e.bodies[o.below].lo-1.6,h=n.bankTop(o.s),f=l+.4,d=xi/Math.cos(Ch)+.15,u=[],m=[];for(const p of[-1,1]){const x=new Ct;x.position.set(p*jv,0,0);const M=f-c,v=new J(new Wt(d,M,.32),In.gate);v.position.set(d/2,c+M/2,0),v.castShadow=!0,x.add(v);const T=Math.max(h,f)+.75,w=new J(new Wt(4.6,.32,.32),In.gate);w.position.set(-2.1,T,0),w.castShadow=!0,x.add(w);const y=new J(new Wt(.7,.34,.34),In.white);y.position.set(-4.1,T,0),x.add(y);const R=new J(new Wt(.3,T-f+.2,.3),In.gate);R.position.set(.1,(T+f)/2,0),x.add(R);const S=new J(new Wt(.3,.45,.3),In.gear);S.position.set(d*.55,f+.22,-.2),x.add(S);const b=new J(new Wt(.08,.9,.08),In.rack);b.position.set(d*.55,f+.45,-.2),b.userData.y0=b.position.y,x.add(b),m.push(b);const C=new J(new Wt(d,.06,.06),In.white);C.position.set(d/2,f+.95,-.35),x.add(C),x.scale.x=p<0?1:-1,a.add(x),u.push({pivot:x,sign:p})}const _=new J(new ri(xi*2,5),In.foam.clone());_.rotation.x=-Math.PI/2,_.position.set(0,0,-2.8),a.add(_);const g=new J(new Ao(xi+.6,xi+1,32),In.highlight);g.rotation.x=-Math.PI/2,g.position.y=h+.08,g.visible=!1,a.add(g),this.group.add(a),this.visuals.push({gate:o,leaves:u,racks:m,foam:_,ring:g,root:a})}const s=new Map;for(const o of e.gates)o.label==="top gates"&&s.set(o.lockName,o);for(const[o,r]of s){const a=t.frame(r.s+3),l=Kv(o),c=(xi+3.2)*oe;l.position.set(a.x+a.nx*c,n.bankTop(r.s+3),a.z+a.nz*c),l.rotation.y=Math.atan2(oe*a.tz,-oe*a.tx),this.group.add(l)}}setSelected(t){for(const e of this.visuals)e.ring.visible=e.gate===t}update(t){this.time+=t;for(const e of this.visuals){const n=e.gate,s=n.open*n.open*(3-2*n.open);for(const{pivot:a,sign:l}of e.leaves){const c=Ch,h=Math.PI/2;a.rotation.y=(c+(h-c)*s)*l}for(const a of e.racks)a.position.y=a.userData.y0+n.paddle*.55;const o=this.ww.bodies[n.below].level,r=Math.min(1,Math.abs(n.flow)/3);e.foam.position.y=o+.03,e.foam.material.opacity=r*(.55+.15*Math.sin(this.time*9)),e.foam.scale.y=.7+r*.5+.08*Math.sin(this.time*5.3),e.ring.visible&&(e.ring.material.opacity=.4+.25*Math.sin(this.time*4))}}}function Kv(i){const t=document.createElement("canvas");t.width=512,t.height=128;const e=t.getContext("2d");e.fillStyle="#1e3d2f",e.fillRect(0,0,512,128),e.strokeStyle="#e8d9a8",e.lineWidth=6,e.strokeRect(8,8,496,112),e.fillStyle="#f3ead0",e.font="600 44px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText(i,256,66,470);const n=new Ln(t);n.colorSpace=Ee;const s=new Ct,o=new J(new ri(2.4,.6),new Kt({map:n,side:Ae}));o.position.y=1.9,s.add(o);for(const r of[-1,1]){const a=new J(new Wt(.1,2.2,.1),In.white);a.position.set(r,1.1,0),s.add(a)}return s}class Eo extends J{constructor(){const t=Eo.SkyShader,e=new si({name:t.name,uniforms:Su.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Ke,depthWrite:!1});super(new Wt(1,1,1),e),this.isSky=!0}}Eo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},up:{value:new I(0,1,0)}},vertexShader:`
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

		}`};class Jv{constructor(t,e){U(this,"sky",new Eo);U(this,"sun",new qu("#fff4e0",3));U(this,"hemi",new Xu("#cfe3ff","#5d6b45",.9));U(this,"envScene",new Gl);U(this,"envSky",new Eo);U(this,"pmrem");U(this,"envTarget",null);U(this,"lastEnvHour",-99);U(this,"sunDir",new I);U(this,"hour",10.5);this.scene=t,this.sky.scale.setScalar(2e4),this.envSky.scale.setScalar(2e4);for(const o of[this.sky,this.envSky]){const r=o.material.uniforms;r.turbidity.value=5,r.rayleigh.value=1.4,r.mieCoefficient.value=.004,r.mieDirectionalG.value=.82}this.envScene.add(this.envSky),t.add(this.sky,this.sun,this.sun.target,this.hemi),this.pmrem=new xl(e);const n=this.sun.shadow;this.sun.castShadow=!0,n.mapSize.set(2048,2048);const s=n.camera;s.left=s.bottom=-90,s.right=s.top=90,s.near=1,s.far=600,n.bias=-4e-4,n.normalBias=.03,t.fog=new Hl("#c9d6dc",300,2400)}get sunElevation(){const t=(this.hour-7)/11.5;return Math.sin(Te(t,-.15,1.15)*Math.PI)*32-(t<0||t>1?6:0)}get isNight(){return this.sunElevation<-2}update(t,e){var a;this.hour=(this.hour+t)%24;const n=Bs.degToRad(this.sunElevation),s=Bs.degToRad(100+(this.hour-6)/13*160);this.sunDir.setFromSphericalCoords(1,Math.PI/2-n,s);for(const l of[this.sky,this.envSky])l.material.uniforms.sunPosition.value.copy(this.sunDir);const o=Oe(-4,8,this.sunElevation),r=1-Oe(4,20,this.sunElevation);this.sun.intensity=3.2*Oe(-2,6,this.sunElevation),this.sun.color.setHSL(.09,.5+r*.4,.92-r*.18),this.hemi.intensity=.2+o*.7,this.scene.fog.color.setHSL(.56,.18,.12+o*.68),this.sun.position.copy(e).addScaledVector(this.sunDir,300),this.sun.target.position.copy(e),Math.abs(this.hour-this.lastEnvHour)>.25&&(this.lastEnvHour=this.hour,(a=this.envTarget)==null||a.dispose(),this.envTarget=this.pmrem.fromScene(this.envScene,0,1,25e3),this.scene.environment=this.envTarget.texture)}}function Qv(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new me;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;o[u]===void 0&&(o[u]=[]),o[u].push(f.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in f.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0;const f=[];for(let d=0;d<i.length;++d){const u=i[d].index;for(let m=0;m<u.count;++m)f.push(u.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(f)}for(const h in o){const f=Ph(o[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){const u=[];for(let _=0;_<r[h].length;++_)u.push(r[h][_][d]);const m=Ph(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Ph(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Ue(r,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let d=0,u=h.count;d<u;d++)for(let m=0;m<e;m++){const _=h.getComponent(d,m);a.setComponent(d+f,m,_)}}else r.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function oi(i,t,e){i.updateMatrixWorld(!0);const n=i.matrixWorld.clone().invert(),s=[],o=new he;return i.traverse(r=>{const a=r;if(!a.isMesh||e&&!e(a))return;const l=Array.isArray(a.material)?a.material:[a.material];if(l.some(m=>m.map)){t==null||t(a);return}const c=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();c.applyMatrix4(o.multiplyMatrices(n,a.matrixWorld));const h=c.getAttribute("position").count,f=new Float32Array(h*3),d=c.groups.length?c.groups:[{start:0,count:h,materialIndex:0}];for(const m of d){const _=(l[m.materialIndex??0]??l[0]).color;for(let g=m.start;g<Math.min(h,m.start+m.count);g++)f.set([_.r,_.g,_.b],g*3)}const u=new me;u.setAttribute("position",c.getAttribute("position")),u.setAttribute("normal",c.getAttribute("normal")),u.setAttribute("color",new Ue(f,3)),s.push(u)}),Qv(s)}const Qn=()=>new Kt({vertexColors:!0,roughness:.75,flatShading:!0}),tx=["#f1c6a5","#e3b08f","#c98d68","#9a6542","#6b4229"],ex=["#2b1d14","#5a3a22","#a0703c","#d9b36c","#8f8f8f","#161616"],nx=["#2d3a55","#1f2328","#6b5a3f","#3d4a3a","#4a4a55"],fo=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400","#34495e","#16a085","#7f8c8d","#e84393","#6d4c41","#1f4d3a"],ix=["short","short","long","bun","beanie","cap","bald"];function Ei(i,t={}){const e=n=>n[Math.floor(i()*n.length)];return{coat:e(fo),trousers:e(nx),skin:e(tx),hair:e(ex),hairStyle:e(ix),hat:e(["#b03a2e","#2e4a7a","#3d5a3d","#5a4a3a","#d4a017"]),longCoat:i()<.3,...t}}const jn=(i,t=.8)=>new Kt({color:i,roughness:t}),Lh=i=>(i.userData.part="coat",i);function ni(i={}){const t={...Ei(Math.random),...i},e=new Ct,n=jn(t.coat,.7),s=jn(t.skin,.6),o=jn(t.trousers,.85),r=jn(t.hair,.9),a=t.longCoat?.62:.86,l=[[.001,a],[t.longCoat?.2:.155,a],[.16,.98],[.165,1.15],[.2,1.36],[.17,1.45],[.075,1.5],[.001,1.5]].map(([w,y])=>new rt(w,y)),c=Lh(new J(new $l(l,12),n));c.scale.z=.72,e.add(c);const h=new J(new qt(.045,.05,.1,8),s);h.position.y=1.54,e.add(h);const f=new J(new Ve(.1,14,10),s);f.scale.set(.92,1.1,1),f.position.y=1.67,e.add(f);const d=new J(new ei(.018,.045,5),s);d.rotation.x=Math.PI/2,d.position.set(0,1.66,.1),e.add(d);const u=(w,y,R=Math.PI*.55)=>{const S=new J(new Ve(w,14,8,0,Math.PI*2,0,R),y);return S.scale.set(.95,1.12,1.03),S.position.y=1.68,S};if(t.hairStyle!=="bald"&&e.add(u(.106,t.hairStyle==="beanie"?jn(t.hat):r,t.hairStyle==="beanie"?Math.PI*.5:Math.PI*.55)),t.hairStyle==="long"){const w=new J(new qt(.1,.11,.26,10,1,!0,Math.PI*.6,Math.PI*.8),r);w.position.y=1.56,w.rotation.y=Math.PI,e.add(w)}else if(t.hairStyle==="bun"){const w=new J(new Ve(.05,8,6),r);w.position.set(0,1.74,-.09),e.add(w)}else if(t.hairStyle==="beanie"){const w=new J(new on(.1,.022,6,14),jn(t.hat));w.rotation.x=Math.PI/2,w.position.y=1.7,e.add(w)}else if(t.hairStyle==="cap"){const w=new J(new qt(.115,.118,.05,12),jn(t.hat));w.position.set(0,1.77,.01),w.rotation.x=-.12;const y=new J(new Wt(.16,.015,.08),jn(t.hat));y.position.set(0,1.76,.12),e.add(w,y)}const m=w=>{const y=new Ct;y.position.set(w*.085,.92,0);const R=new J(new qt(.075,.062,.44,8),o);R.position.y=-.22;const S=new Ct;S.position.y=-.44;const b=new J(new qt(.062,.05,.42,8),o);b.position.y=-.21;const C=new J(new Wt(.1,.07,.23),jn("#2a2420"));return C.position.set(0,-.44,.04),S.add(b,C),y.add(R,S),e.add(y),{hip:y,knee:S}},{hip:_,knee:g}=m(1),{hip:p,knee:x}=m(-1),M=w=>{const y=new Ct;y.position.set(w*.215,1.4,0);const R=Lh(new J(new qt(.052,.042,.58,8),n));R.position.y=-.29;const S=new J(new Ve(.042,8,6),s);return S.position.y=-.61,y.add(R,S),y.rotation.z=w*.07,e.add(y),y},v=M(1),T=M(-1);return e.traverse(w=>w.castShadow=!0),{group:e,armL:v,armR:T,legL:_,legR:p,kneeL:g,kneeR:x}}function Vi(i,t,e){t==="wind"?(i.armL.rotation.set(-1.3+Math.sin(e*7)*.45,0,.15),i.armR.rotation.set(-1.3+Math.sin(e*7+Math.PI)*.45,0,-.15)):t==="push"?(i.armL.rotation.set(-1.25,0,.1),i.armR.rotation.set(-1.25,0,-.1)):t==="rest"?(i.armL.rotation.set(0,0,.07),i.armR.rotation.set(0,0,-.07)):t==="wave"?(i.armL.rotation.set(0,0,Math.PI-.4+Math.sin(e*9)*.35),i.armR.rotation.set(0,0,-.07)):(i.armL.rotation.set(0,0,Math.PI-.2+Math.sin(e*14)*.25),i.armR.rotation.set(0,0,-(Math.PI-.2)+Math.sin(e*14+1.5)*.25))}function Al(i,t,e=1){const n=Math.sin(t);i.legL.rotation.x=n*.42*e,i.legR.rotation.x=-n*.42*e,i.kneeL.rotation.x=Math.max(0,-Math.sin(t-.6))*.7*e,i.kneeR.rotation.x=Math.max(0,Math.sin(t-.6))*.7*e,i.armL.rotation.set(-n*.35*e,0,.07),i.armR.rotation.set(n*.35*e,0,-.07)}function sx(i){for(const t of[i.legL,i.legR,i.kneeL,i.kneeR])t.rotation.set(0,0,0)}function Rl(i){i.legL.rotation.set(-1.5,0,.06),i.legR.rotation.set(-1.5,0,-.06),i.kneeL.rotation.x=i.kneeR.rotation.x=1.5,i.armL.rotation.set(-.5,0,.1),i.armR.rotation.set(-.5,0,-.1),i.group.position.y-=.47}function ox(i,t){i.legL.rotation.set(-.95+Math.sin(t)*.45,0,.05),i.legR.rotation.set(-.95-Math.sin(t)*.45,0,-.05),i.kneeL.rotation.x=1.2+Math.cos(t)*.45,i.kneeR.rotation.x=1.2-Math.cos(t)*.45,i.armL.rotation.set(-1,0,.08),i.armR.rotation.set(-1,0,-.08)}const gn=17.4,Rn=2.08,hn=(i,t={})=>new Kt({color:i,roughness:.6,flatShading:!0,...t}),rx={name:"Chester Rose",cabin:"#1f4d3a",roof:"#7c2f23",length:gn,crew:!0};function Ql(i={}){const{name:t,cabin:e,roof:n,length:s,crew:o,crewStyle:r}={...rx,...i},a=new Ct;a.userData.length=s;const l={hull:hn("#18191b",{roughness:.5}),deck:hn("#3a3d40",{roughness:.9}),cabin:hn(e,{roughness:.45}),roof:hn(n,{roughness:.7}),cream:hn("#efe3c2"),red:hn("#a3291f"),window:hn("#1b2730",{roughness:.1,metalness:.4}),brass:hn("#c9a24a",{roughness:.25,metalness:.9}),rope:hn("#8a6b43",{roughness:1}),black:hn("#111111"),pot:hn("#9b5a3c"),leaf:hn("#4f8a3a"),flower:hn("#e04f6a")},c=Rn/2,h=s/2,f=[[-c,-h+.4],[-c*.85,-h+.05],[0,-h],[c*.85,-h+.05],[c,-h+.4],[c,h-3.4],[c*.82,h-1.6],[c*.45,h-.5],[0,h],[-c*.45,h-.5],[-c*.82,h-1.6],[-c,h-3.4]],d=new Zi(f.map(([ct,Pt])=>new rt(ct,-Pt))),u=.62,m=.38,_=new Gs(d,{depth:u+m,bevelEnabled:!1});_.rotateX(-Math.PI/2),_.translate(0,-u,0);const g=new J(_,[l.deck,l.hull]);g.castShadow=g.receiveShadow=!0,a.add(g);const p=new Gs(d,{depth:.07,bevelEnabled:!1});p.rotateX(-Math.PI/2),p.scale(1.015,1,1.004),p.translate(0,m-.12,0),a.add(new J(p,[l.red,l.red]));const x=-h+2,M=h-3.6,v=M-x,T=(x+M)/2,w=1.22,y=Rn-.24,R=new J(new Wt(y,w,v),l.cabin);R.position.set(0,m+w/2,T),R.castShadow=R.receiveShadow=!0,a.add(R);const S=new J(new Wt(y+.08,.09,v+.08),l.roof);S.position.set(0,m+w+.04,T),S.castShadow=!0,a.add(S);for(const ct of[-1,1]){const Pt=new J(new Wt(.02,.05,v-.3),l.cream);Pt.position.set(ct*(y/2+.005),m+w-.18,T),a.add(Pt);const It=Pt.clone();It.position.y=m+.18,a.add(It);for(let Qt=x+1.6;Qt<M-.6;Qt+=1.45){if(Qt>x+2.6&&Qt<x+4.6)continue;const nt=new J(new Wt(.03,.34,.5),l.window);nt.position.set(ct*(y/2+.005),m+w*.62,Qt),a.add(nt)}const Tt=ax(t);Tt.position.set(ct*(y/2+.012),m+w*.55,x+3.6),Tt.rotation.y=ct*(Math.PI/2),a.add(Tt)}for(const[ct,Pt]of[[x-.005,-1],[M+.005,1]]){const It=new J(new Wt(.9,.95,.03),l.red);It.position.set(0,m+.5,ct),a.add(It);const Tt=new J(new Wt(.03,.9,.035),l.cream);Tt.position.set(0,m+.5,ct+Pt*.005),a.add(Tt)}const b=new J(lx(),new Kt({map:cx(),roughness:.6,side:Ae}));b.position.set(0,m,h-1.5),a.add(b);const C=new J(new Wt(.12,.06,2.1),l.cream);C.position.set(0,m+1.12,h-2.55),C.rotation.x=-.36,a.add(C);const O=new J(new qt(.07,.07,.55,8),l.black);O.position.set(.45,m+w+.3,M-1.4),a.add(O);const B=new J(new qt(.075,.075,.06,8),l.brass);B.position.set(.45,m+w+.5,M-1.4),a.add(B);for(const[ct,Pt]of[[x+2.2,-.35],[x+2.8,-.35],[T+1.5,.3]]){const It=new J(new qt(.16,.12,.22,7),l.pot);It.position.set(Pt,m+w+.19,ct),a.add(It);const Tt=new J(new sn(.2,0),l.leaf);Tt.position.set(Pt,m+w+.4,ct),a.add(Tt);const Qt=new J(new sn(.06,0),l.flower);Qt.position.set(Pt+.08,m+w+.55,ct),a.add(Qt)}const z=new J(new qt(.03,.03,4.5,6),l.cream);z.rotation.x=Math.PI/2,z.position.set(-.6,m+w+.12,T-1),a.add(z);const N=new J(new Ve(.22,8,6),l.rope);N.scale.set(1,.9,1.3),N.position.set(0,.05,h-.02),a.add(N);for(const ct of[-1,1]){const Pt=new J(new qt(.11,.11,.45,8),l.rope);Pt.position.set(ct*(c+.08),.05,2),a.add(Pt)}const W=new J(new qt(.1,.12,.18,10),l.brass);W.rotation.x=Math.PI/2,W.position.set(0,m+.25,h-.35),a.add(W);const G=new Q_("#ffe7b0",0,60,.5,.6,1.2);G.position.set(0,m+.3,h-.2),G.target.position.set(0,-.5,h+20),a.add(G,G.target);const X=new Ct;X.position.set(0,0,-h-.05);const dt=new J(new Wt(.05,.75,.9),l.hull);dt.position.set(0,-.3,-.45),X.add(dt);const vt=new J(new qt(.04,.04,1.1,6),l.black);vt.position.set(0,.45,0),X.add(vt);const yt=new J(new qt(.025,.035,1.3,6),l.brass);yt.rotation.x=Math.PI/2-.25,yt.position.set(0,1.08,.62),X.add(yt);const Gt=new J(new Ve(.05,6,4),l.brass);Gt.position.set(0,1,0),X.add(Gt),a.add(X);const Ht=ni(r??{coat:"#e8b931",trousers:"#2d3a55",skin:"#e3b08f",hair:"#5a3a22",hairStyle:"cap",hat:"#3d4a3a",longCoat:!1}),K=Ht.group;K.position.set(0,m-.25,-h+.9),o?a.add(K):a.remove(G,G.target);const ot=new J(new Wt(2.2,1.6,3),new Pn({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}));ot.position.set(0,1,-h+.6),ot.name="tiller-hit";const Lt=new J(new Ao(.75,.9,32),new Pn({color:"#ffd76a",transparent:!0,opacity:.6,depthWrite:!1,side:Ae}));return Lt.rotation.x=-Math.PI/2,Lt.position.set(0,m+.02,-h+.55),o&&a.add(ot,Lt),{group:a,rudder:X,steerer:K,steererPerson:Ht,headlight:G,tillerHit:ot,tillerHint:Lt}}function ax(i){const t=document.createElement("canvas");t.width=512,t.height=160;const e=t.getContext("2d");e.fillStyle="#a3291f",e.fillRect(0,0,512,160),e.strokeStyle="#efe3c2",e.lineWidth=8,e.strokeRect(10,10,492,140),e.fillStyle="#f6d36b",e.font="800 64px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#3a120d",e.shadowOffsetX=3,e.shadowOffsetY=3,e.fillText(i,256,84,460);const n=new Ln(t);return n.colorSpace=Ee,new J(new ri(1.9,.6),new Kt({map:n,roughness:.5}))}function lx(){const i=new me,t=Rn*.42,e=1.15;return i.setAttribute("position",new $t([-t,0,0,t,0,0,0,e,0],3)),i.setAttribute("uv",new $t([0,0,1,0,.5,1],2)),i.computeVertexNormals(),i}function cx(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#1f4d3a",t.fillRect(0,0,256,256),t.fillStyle="#a3291f",t.beginPath(),t.moveTo(128,40),t.lineTo(200,170),t.lineTo(128,240),t.lineTo(56,170),t.closePath(),t.fill(),t.strokeStyle="#f6d36b",t.lineWidth=8,t.stroke();for(const[n,s,o]of[[128,150,"#e04f6a"],[108,175,"#f2efe0"],[148,175,"#e8a43c"]])t.fillStyle=o,t.beginPath(),t.arc(n,s,14,0,Math.PI*2),t.fill();const e=new Ln(i);return e.colorSpace=Ee,e}function hx(i){const t=new Ct;i.group.updateMatrixWorld(!0);const e=oi(i.group,s=>{const o=s.clone();o.matrixAutoUpdate=!1,o.matrix.copy(s.matrixWorld),t.add(o)}),n=new J(e,Qn());return n.castShadow=n.receiveShadow=!0,t.add(n),t}const Ss=16e3,Ta=Ss*gn*gn/12,ux=650,dx=700,fx=7,hr=.3,Er=-3,Tr=5,Dh=(()=>{const i=Rn/2,t=gn/2;return[[0,t],[.55,t-.6],[-.55,t-.6],[i,t-3],[-i,t-3],[i,2],[-i,2],[i,-3],[-i,-3],[i*.95,-t+.4],[-i*.95,-t+.4],[0,-t]]})();class px{constructor(t,e){U(this,"x",0);U(this,"z",0);U(this,"psi",0);U(this,"u",0);U(this,"v",0);U(this,"r",0);U(this,"notch",0);U(this,"thrust",0);U(this,"rudder",0);U(this,"s",0);U(this,"d",0);U(this,"contacts",[]);U(this,"obstacles",[]);U(this,"tethers",[]);U(this,"bowThrust",0);this.route=t,this.ww=e}placeAt(t,e=!0){const n=this.route.frame(t);this.x=n.x,this.z=n.z,this.psi=Math.atan2(n.tx,n.tz)+(e?0:Math.PI),this.s=t,this.u=this.v=this.r=0}get speed(){return Math.hypot(this.u,this.v)}span(){let t=1/0,e=-1/0;for(const[n,s]of Dh){const[o,r]=this.toWorld(n,s),a=this.route.project(o,r,this.s);t=Math.min(t,a.s),e=Math.max(e,a.s)}return[t,e]}step(t,e){const n=Te(e,-1,1),s=n===0?2.2:1.6;this.rudder+=Te(n-this.rudder,-s*t,s*t);const o=this.notch>=0?this.notch*ux:this.notch*dx;this.thrust+=Te(o-this.thrust,-2200*t,2200*t);const{u:r,v:a,r:l}=this,c=this.thrust,h=this.rudder*(300*r*Math.abs(r)+.85*Math.max(c,0)),f=c-480*r*Math.abs(r)-250*r,d=-9e3*a*Math.abs(a)-4e3*a+h*.3-this.bowThrust*1700;let u=h*fx-12e4*l-6e5*l*Math.abs(l);c<0&&(u+=.12*c*1.5);const m=this.bowThrust*1700;u+=m*(gn/2-1),this.u+=(f/Ss-a*l)*t,this.v+=(d/Ss+r*l)*t,this.r+=u/Ta*t,this.psi+=this.r*t;const _=Math.sin(this.psi),g=Math.cos(this.psi);this.x+=(this.u*_-this.v*g)*t,this.z+=(this.u*g+this.v*_)*t,this.contacts.length=0;for(let x=0;x<2;x++)this.resolveContacts(),this.resolveExtras();const p=this.route.project(this.x,this.z,this.s);this.s=p.s,this.d=p.d}toWorld(t,e){const n=Math.sin(this.psi),s=Math.cos(this.psi);return[this.x+e*n-t*s,this.z+e*s+t*n]}resolveContacts(){const{route:t,ww:e}=this,n=e.gates.filter(o=>Math.abs(o.s-this.s)<gn+6&&e.gateBlocks(o)),s=this.obstacles.filter(o=>Math.abs(o.x-this.x)+Math.abs(o.z-this.z)<45);for(const[o,r]of Dh){const[a,l]=this.toWorld(o,r),c=t.project(a,l,this.s),h=t.frame(c.s),f=e.halfWidthAt(c.s)-.05;if(Math.abs(c.d)>f){const d=Math.sign(c.d);this.applyContact(a,l,h.nx*d,h.nz*d,Math.abs(c.d)-f,"bank")}for(const d of n)this.s<d.s&&c.s>d.s-hr?this.applyContact(a,l,h.tx,h.tz,c.s-(d.s-hr),"gate"):this.s>d.s&&c.s<d.s+hr&&this.applyContact(a,l,-h.tx,-h.tz,d.s+hr-c.s,"gate");for(const d of s){const u=a-d.x,m=l-d.z,_=Math.sin(d.psi),g=Math.cos(d.psi),p=u*_+m*g,x=-u*g+m*_,M=d.halfB+.05-Math.abs(x),v=d.halfL+.05-Math.abs(p);if(!(M<=0||v<=0))if(M<v){const T=-Math.sign(x)||1;this.applyContact(a,l,-g*T,_*T,M,"boat",d)}else{const T=-Math.sign(p)||1;this.applyContact(a,l,_*T,g*T,v,"boat",d)}}c.s<2&&this.applyContact(a,l,-h.tx,-h.tz,2-c.s,"bank"),c.s>t.length-2&&this.applyContact(a,l,h.tx,h.tz,c.s-(t.length-2),"bank")}}resolveExtras(){const t=Math.sin(this.psi),e=Math.cos(this.psi),n=Rn/2,s=gn/2;for(const o of this.obstacles){if(Math.abs(o.x-this.x)+Math.abs(o.z-this.z)>45)continue;const r=Math.sin(o.psi),a=Math.cos(o.psi);for(const[l,c]of[[o.halfB,o.halfL],[-o.halfB,o.halfL],[o.halfB,-o.halfL],[-o.halfB,-o.halfL]]){const h=o.x+c*r-l*a,f=o.z+c*a+l*r,d=h-this.x,u=f-this.z,m=d*t+u*e,_=-d*e+u*t,g=n-Math.abs(_),p=s-.6-Math.abs(m);g<=0||p<=0||(g<p?this.applyContact(h,f,-e*Math.sign(_),t*Math.sign(_),g,"boat",o):this.applyContact(h,f,t*Math.sign(m),e*Math.sign(m),p,"boat",o))}}for(const o of this.tethers){const[r,a]=this.toWorld(o.local[0],o.local[1]),l=r-o.anchor[0],c=a-o.anchor[1],h=Math.hypot(l,c);h>o.length&&this.applyContact(r,a,l/h,c/h,h-o.length,"bank",void 0,!0)}}applyContact(t,e,n,s,o,r,a,l=!1){this.x-=n*o,this.z-=s*o;const c=t-this.x,h=e-this.z,f=Math.sin(this.psi),d=Math.cos(this.psi);let u=this.u*f-this.v*d,m=this.u*d+this.v*f;const _=u+this.r*h,g=m-this.r*c,p=_*n+g*s;if(p<=0)return;const x=h*n-c*s,M=-1.15*p/(1/Ss+x*x/Ta);u+=M*n/Ss,m+=M*s/Ss,this.r+=M*x/Ta,u*=.995,m*=.995,this.u=u*f+m*d,this.v=-u*d+m*f,l||this.contacts.push({impulse:-M,kind:r,obstacle:a})}}const mx={KeyW:"throttleUp",ArrowUp:"throttleUp",KeyS:"throttleDown",ArrowDown:"throttleDown",Space:"neutral",KeyT:"timeFaster",KeyR:"timeSlower",KeyV:"camera",KeyM:"map",KeyH:"help",KeyN:"mute",KeyL:"headlight",KeyF:"moor",KeyG:"clear",Enter:"nextTrip",Escape:"declineTrip"};class gx{constructor(){U(this,"held",new Set);U(this,"queue",[]);U(this,"onFirstInput",null);U(this,"touchSteer",0);addEventListener("keydown",t=>{this.onFirstInput&&(this.onFirstInput(),this.onFirstInput=null);const e=mx[t.code];e&&t.preventDefault(),!t.repeat&&(this.held.add(t.code),e&&this.queue.push(e))}),addEventListener("keyup",t=>this.held.delete(t.code)),addEventListener("blur",()=>this.held.clear())}get steer(){const t=this.held.has("KeyA")||this.held.has("ArrowLeft"),e=this.held.has("KeyD")||this.held.has("ArrowRight");return(t?1:0)-(e?1:0)||this.touchSteer}get bowThrust(){return(this.held.has("KeyZ")?1:0)-(this.held.has("KeyX")?1:0)}push(t){this.queue.push(t)}drain(){return this.queue.splice(0)}}class _x{constructor(t,e,n,s){U(this,"root");U(this,"loc");U(this,"helm");U(this,"lockPanel");U(this,"tip");U(this,"panelGroup",null);U(this,"nopeUntil",0);U(this,"nopeText","");U(this,"nopeGate",-1);U(this,"onGateTap",null);U(this,"toasts");U(this,"help");U(this,"chip");U(this,"trip");U(this,"promptEl");U(this,"summary");U(this,"lastTrip","");U(this,"offer");U(this,"lift");U(this,"tripTapOffers",!1);U(this,"lastPrompt","");U(this,"lastLock","");U(this,"lastHelm","");U(this,"lastLoc","");U(this,"winding",!1);U(this,"onNotch",null);U(this,"lever");U(this,"speedEl");this.root=t,t.innerHTML=`
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
      </div>
      <div class="card helm"></div>
      <div class="lock-panel card" hidden></div>
      <div class="toasts"></div>
      <div class="map-wrap"></div>
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
      </div>`,this.loc=t.querySelector(".loc"),this.helm=t.querySelector(".helm"),this.lockPanel=t.querySelector(".lock-panel"),this.toasts=t.querySelector(".toasts"),this.help=t.querySelector(".help"),this.chip=t.querySelector(".chip"),this.trip=t.querySelector(".trip"),this.promptEl=t.querySelector(".prompt"),this.summary=t.querySelector(".summary"),this.offer=t.querySelector(".offer"),this.lift=t.querySelector(".pill.lift"),this.offer.addEventListener("click",o=>{var a;const r=(a=o.target.closest("button"))==null?void 0:a.dataset.act;r&&e(r)});for(const o of[this.loc,this.trip])o.addEventListener("pointerdown",r=>r.preventDefault()),o.addEventListener("click",()=>{o===this.trip&&this.tripTapOffers?e("tripOffer"):o.classList.toggle("open")});this.summary.addEventListener("click",o=>{o.target.closest("button")&&e("nextTrip")}),this.chip.addEventListener("pointerdown",o=>o.preventDefault()),this.buildHelm(),this.chip.addEventListener("click",o=>{o.target.closest(".chip-help")&&e("help")}),t.appendChild(n),t.querySelector(".map-wrap").appendChild(s),this.lockPanel.addEventListener("pointerdown",o=>o.preventDefault()),this.lockPanel.addEventListener("click",o=>{var c;const r=o.target.closest("button");if(!r)return;const a=r.dataset.g,l=r.dataset.w;a!==void 0&&l&&this.panelGroup?(c=this.onGateTap)==null||c.call(this,this.panelGroup.gates[Number(a)],l):r.dataset.act&&e(r.dataset.act)}),this.tip=document.createElement("div"),this.tip.className="lock-tip",this.tip.hidden=!0,t.appendChild(this.tip),n.addEventListener("click",()=>e("map")),s.addEventListener("click",()=>e("map"))}toggleHelp(t){this.help.hidden=t===void 0?!this.help.hidden:!t}setMapOpen(t){this.root.querySelector(".map-wrap").classList.toggle("open",t)}toast(t,e="info",n=4200){for(const o of this.toasts.children)if(o.textContent===t)return;for(;this.toasts.children.length>=3;)this.toasts.firstElementChild.remove();const s=document.createElement("div");s.className=`toast ${e}`,s.textContent=t,this.toasts.appendChild(s),setTimeout(()=>s.classList.add("out"),n),setTimeout(()=>s.remove(),n+600)}setLocation(t,e,n){const s=t+e+n;s!==this.lastLoc&&(this.lastLoc=s,this.loc.querySelector(".head").innerHTML=`<span class="ico">📍</span>${t.replace(/ Lock\b/g,"")}`,this.loc.querySelector(".more").innerHTML=`<div class="eyebrow">Shropshire Union Canal</div><div>${e}</div><div class="journal">${n}</div>`)}buildHelm(){const t=pi.x,e=pi.y,n=48,s=(d,u)=>{const m=d*Math.PI/180;return[t+Math.sin(m)*u,e-Math.cos(m)*u]},o=(d,u,m)=>{const[_,g]=s(d,m),[p,x]=s(u,m);return`M${_.toFixed(1)},${g.toFixed(1)} A${m},${m} 0 0 1 ${p.toFixed(1)},${x.toFixed(1)}`},r=[];for(let d=Er;d<=Tr;d++){const[u,m]=s(d*ys,n-4),[_,g]=s(d*ys,n+(d===0?7:4));r.push(`<line x1="${u}" y1="${m}" x2="${_}" y2="${g}" class="${d===0?"tick n":"tick"}"/>`)}const[a,l]=s(0,n+14);this.helm.innerHTML=`
      <svg class="lever" viewBox="0 0 ${pi.w} ${pi.h}" width="${pi.w}" height="${pi.h}">
        <path d="${o(Er*ys,0,n)}" class="band astern"/>
        <path d="${o(0,Tr*ys,n)}" class="band ahead"/>
        ${r.join("")}
        <text x="${a}" y="${l+3}" class="lbl n">N</text>
        <g class="arm"><line x1="${t}" y1="${e-n+15}" x2="${t}" y2="${e-n+4}"/><circle cx="${t}" cy="${e-n}" r="7.5"/></g>
        <text x="${t}" y="${e-6}" class="spd">0.0</text>
        <text x="${t}" y="${e+5}" class="unit">mph</text>
      </svg>`,this.lever=this.helm.querySelector(".arm"),this.speedEl=this.helm.querySelector(".spd");const c=this.helm.querySelector("svg"),h=d=>{const u=c.getBoundingClientRect(),m=(d.clientX-u.left)/u.width*pi.w-t,_=(d.clientY-u.top)/u.height*pi.h-e,g=Math.atan2(m,-_)*180/Math.PI;return Math.max(Er,Math.min(Tr,Math.round(g/ys)))};let f=!1;c.addEventListener("pointerdown",d=>{var u;d.preventDefault(),f=!0,c.setPointerCapture(d.pointerId),(u=this.onNotch)==null||u.call(this,h(d))}),c.addEventListener("pointermove",d=>{var u;return f&&((u=this.onNotch)==null?void 0:u.call(this,h(d)))}),c.addEventListener("pointerup",()=>f=!1),c.addEventListener("pointercancel",()=>f=!1)}setHelm(t){const e=`${t.notch}|${t.speedMph.toFixed(1)}`;e!==this.lastHelm&&(this.lastHelm=e,this.lever.style.transform=`rotate(${t.notch*ys}deg)`,this.lever.classList.toggle("astern",t.notch<0),this.lever.classList.toggle("neutral",t.notch===0),this.speedEl.textContent=t.speedMph.toFixed(1));const n=`${t.timeScale}× · <span class="chip-help"><kbd>H</kbd> help</span>`;this.chip.innerHTML!==n&&(this.chip.innerHTML=n)}setTrip(t){const e=JSON.stringify(t);if(e===this.lastTrip)return;this.lastTrip=e,this.tripTapOffers=!1,this.trip.hidden=t.state==="none",t.state==="none"&&this.trip.classList.remove("open");const n=t.state==="active"?`<span class="ico">🎯</span>${t.where}`:t.state==="done"?'<span class="ico">✅</span>Mission complete · <kbd>Enter</kbd>':'<span class="ico">🧭</span>Just cruising · tap for a trip';this.trip.querySelector(".head").innerHTML=n,this.trip.querySelector(".more").innerHTML=t.state==="none"?"":`<div class="eyebrow">Mission · ${t.title}</div><div>${t.brief}</div>`,this.trip.classList.toggle("idle",t.state==="none")}showOffer(t,e,n,s="Accept",o="Not now"){this.offer.innerHTML=`
      <div class="eyebrow">${t}</div>
      <div class="title">${e}</div>
      <p>${n}</p>
      <div class="buttons">
        <button data-act="nextTrip" class="go"><kbd>Enter</kbd> ${s}</button>
        <button data-act="declineTrip"><kbd>Esc</kbd> ${o}</button>
      </div>`,this.offer.hidden=!1}setLift(t){this.lift.hidden=!t,t&&this.lift.textContent!==t&&(this.lift.innerHTML=`<div class="head"><span class="ico">🧑</span>${t}</div>`)}hideOffer(){this.offer.hidden=!0}get offerOpen(){return!this.offer.hidden}setPrompt(t){const e=t?`<kbd>${t.key}</kbd> ${t.text}`:"";e!==this.lastPrompt&&(this.lastPrompt=e,this.promptEl.innerHTML=e,this.promptEl.classList.toggle("waiting",!!t&&!t.ready)),this.promptEl.hidden=!t}showSummary(t,e,n){const s=Math.floor(t.hours),o=Math.round((t.hours-s)*60);this.summary.innerHTML=`
      <div class="eyebrow">Mission complete</div>
      <div class="title">Moored at ${e}</div>
      <dl>
        <dt>Time on the water</dt><dd>${s?`${s} h `:""}${o} min</dd>
        <dt>Bumps</dt><dd>${t.bumps}</dd>
        <dt>Boats and anglers upset</dt><dd>${t.rocked}</dd>
        ${t.cleared?`<dt>Blockages cleared</dt><dd>${t.cleared} 🛒</dd>`:""}
      </dl>
      <p>${t.verdict}</p>
      ${n?`<p class="reward">🎁 New for the roof: <b>${n}</b></p>`:""}
      <button><kbd>Enter</kbd> Carry on</button>`,this.summary.hidden=!1}hideSummary(){this.summary.hidden=!0}get isWinding(){return this.winding}nope(t,e){this.panelGroup&&(this.nopeGate=this.panelGroup.gates.indexOf(t),this.nopeText=e,this.nopeUntil=performance.now()+2200,this.lastLock="")}setLockPanel(t,e){const n=e==null?void 0:e.step;if(this.tip.hidden=!0,!e||!n){this.lockPanel.hidden=!0,this.lastLock="",this.winding=!1,this.panelGroup=null;return}const s=n.group;this.panelGroup=s;const o=n.uphill,r=e.volunteers==="active";this.winding=s.gates.some(b=>b.paddle>0&&b.paddle<1);const a=performance.now()<this.nopeUntil,l=s.bodies.map(b=>t.bodies[b]);let c=1/0,h=-1/0;for(const b of l)c=Math.min(c,b.lo-1.6),h=Math.max(h,b.hi+.6);const f=b=>Math.round((b-c)/(h-c)*100);let d=l.map((b,C)=>C);o||d.reverse();const u=7;let m=0,_=0;if(d.length>u){const b=Math.max(0,d.indexOf(n.boatBody)),C=Math.max(0,Math.min(d.length-u,b-3));m=C,_=d.length-(C+u),d=d.slice(C,C+u)}const g=n.boatBody>=0?(l[n.boatBody].s0+l[n.boatBody].s1)/2:NaN,p=[...n.adjacent].sort((b,C)=>o?b.s-C.s:C.s-b.s),x=b=>p.includes(b)?p.length===2?b===p[0]?"behind":"ahead":Number.isNaN(g)?"here":(b.s-g)*(o?1:-1)>0?"ahead":"behind":"",M=[];m&&M.push(`<div class="dg-more">⋯ +${m}</div>`),d.forEach((b,C)=>{const O=l[b],B=O.kind==="pound"?"canal":s.staircase?O.label.replace("chamber ",""):"lock",z=n.boatBody===b?'<i class="dg-boat"></i>':"";if(M.push(`<div class="dg-body ${O.kind}"><div class="dg-floor" style="height:${f(O.lo-1.6)}%"></div><div class="dg-water" style="height:${f(O.level)}%">${z}</div><span>${B}</span></div>`),C<d.length-1){const N=o?b:b-1,W=s.gates[N],G=x(W),X=[W.open>.5?"open":"shut",W.paddle>.5?"pup":"",G?`mine ${G}`:"dim"].join(" ");M.push(`<div class="dg-gate ${X}"><i class="dg-leaf"></i><i class="dg-pflag"></i>`+(W.paddle>.05?'<i class="dg-flow"></i>':"")+(G?`<i class="dg-tag">${G==="behind"?"B":"A"}</i>`:"")+"</div>")}}),_&&M.push(`<div class="dg-more">+${_} ⋯</div>`);const v={paddlesUp:"Raise paddles",paddlesDown:"Drop paddles",open:"Open gates",close:"Close gates"},T=(b,C)=>n.gate===b&&!n.keeper&&n.action in v?n.action:b.wantOpen?b.wantPaddle?"paddlesDown":C==="ahead"||C==="here"?null:"close":b.wantPaddle?e.levelsMatch(b)&&C!=="behind"?"open":"paddlesDown":C==="behind"?null:e.levelsMatch(b)?"open":"paddlesUp",w=p.map(b=>{const C=x(b),O=s.gates.indexOf(b),B=`${b.open>.97?"Open":b.open>.02?b.wantOpen?"Opening…":"Closing…":"Shut"} · paddles ${b.paddle>.97?"up":b.paddle>.02?b.wantPaddle?"going up":"going down":"down"}`,z=r?null:T(b,C),N=z&&n.gate===b&&!n.keeper&&n.action===z,W=r?'<div class="lc-btn none">Volunteers working</div>':z?`<button class="lc-btn ${N?"guide":""}" data-g="${O}" data-w="${z}" tabindex="-1">${v[z]}</button>`:'<div class="lc-btn none">✓ Done</div>',G=C==="behind"?"◀ Behind":C==="ahead"?"Ahead ▶":"Here";return`<div class="lc ${C} ${a&&O===this.nopeGate?"nope":""}"><div class="lc-where">${G} <b>${vx(b.label)}</b></div><div class="lc-state">${B}</div>${W}</div>`}),y=e.volunteers==="available"?'<button class="lp-volchip" data-act="autopilot" tabindex="-1">Auto</button>':r?'<button class="lp-volchip on" data-act="autopilot" tabindex="-1">Take over</button>':"",R=a?this.nopeText:r?`Volunteers: ${n.text}`:n.text,S=`
      <div class="lp-head"><span class="lp-title">${s.name} ${o?"↑":"↓"}</span>${y}</div>
      <div class="dg">${M.join("")}</div>
      <div class="lc-row">${w.join("")}</div>
      <div class="lp-status ${a?"warn":""}">${R}</div>`;S!==this.lastLock&&(this.lastLock=S,this.lockPanel.innerHTML=S),this.lockPanel.hidden=!1}}const vx=i=>i[0].toUpperCase()+i.slice(1),ys=15,pi={x:62,y:68,w:124,h:76},qe=.5,Ih=650;class xx{constructor(t,e,n,s){U(this,"el");U(this,"bigEl");U(this,"base");U(this,"locks");U(this,"bigOpen",!1);U(this,"dest",null);U(this,"bigTx",{ox:0,oz:0,sk:1,dpr:1});U(this,"dragAt",null);U(this,"onTeleport",null);U(this,"places",[]);U(this,"hazards",[]);U(this,"missionStarts",[]);U(this,"missionStartsFaded",!1);this.b=s;const o=this.base=document.createElement("canvas");o.width=Math.ceil((s.x1-s.x0)*qe),o.height=Math.ceil((s.z1-s.z0)*qe);const r=o.getContext("2d"),a=f=>(f-s.x0)*qe,l=f=>(f-s.z0)*qe,c=(f,d)=>{r.beginPath();for(let u=0;u<f.length;u+=2)(u?r.lineTo:r.moveTo).call(r,a(f[u]),l(f[u+1]));d&&r.closePath()};r.fillStyle="#e5e9d2",r.fillRect(0,0,o.width,o.height),r.fillStyle="#c9dcaa";for(const f of t.parks)c(f.p,!0),r.fill();r.fillStyle="#9cc3d2";for(const f of t.water)c(f.p,!0),r.fill();r.strokeStyle="#9cc3d2",r.lineCap=r.lineJoin="round";for(const f of t.rivers)r.lineWidth=f.w*qe,c(f.p,!1),r.stroke();r.fillStyle="#d2c3ae";for(const f of t.buildings)c(f.p,!0),r.fill();for(const f of[0,1])for(const d of t.roads)d.w<3||(r.strokeStyle=f?"#ffffff":"#b9b2a4",r.lineWidth=d.w*qe+(f?0:1.5),c(d.p,!1),r.stroke());r.strokeStyle="#5b5550",r.lineWidth=1.5,r.setLineDash([4,3]);for(const f of t.rails)c(f.p,!1),r.stroke();r.setLineDash([]),r.strokeStyle="#2f7aa0",r.lineWidth=4,c(t.centreline,!1),r.stroke();const h=new Map;for(const f of n.gates){const d=e.frame(f.s);let u=h.get(f.lockName);u||h.set(f.lockName,u={name:f.lockName,x:0,z:0,gates:[]}),u.gates.push({x:d.x,z:d.z,nx:d.nx,nz:d.nz})}for(const f of h.values())f.x=f.gates.reduce((d,u)=>d+u.x,0)/f.gates.length,f.z=f.gates.reduce((d,u)=>d+u.z,0)/f.gates.length;this.locks=[...h.values()],this.el=document.createElement("canvas"),this.el.className="minimap",this.el.width=this.el.height=440,this.bigEl=document.createElement("canvas"),this.bigEl.className="bigmap"}draw(t,e,n){const s=this.el.getContext("2d"),o=this.el.width,r=Ih*qe,a=(t-this.b.x0)*qe-r/2,l=(e-this.b.z0)*qe-r/2;s.fillStyle="#e5e9d2",s.fillRect(0,0,o,o),s.drawImage(this.base,a,l,r,r,0,0,o,o);const c=o/Ih,h=(f,d)=>[o/2+(f-t)*c,o/2+(d-e)*c];if(this.drawPlaces(s,h,2,!1),this.drawLocks(s,h,2,9),this.drawDestination(s,h,2,o),this.drawHazards(s,h,2),this.drawMissionStarts(s,h,2),this.boatMarker(s,o/2,o/2,n,1.6),this.bigOpen){const f=this.bigEl,d=Math.min(2,devicePixelRatio);f.width=f.clientWidth*d,f.height=f.clientHeight*d;const u=f.getContext("2d"),m=Math.min(f.width/this.base.width,f.height/this.base.height),_=(f.width-this.base.width*m)/2,g=(f.height-this.base.height*m)/2;u.fillStyle="#e5e9d2",u.fillRect(0,0,f.width,f.height),u.drawImage(this.base,_,g,this.base.width*m,this.base.height*m);const p=qe*m,x=(T,w)=>[_+(T-this.b.x0)*p,g+(w-this.b.z0)*p];this.drawPlaces(u,x,d,!0),this.drawLocks(u,x,d,7),this.drawDestination(u,x,d*1.3,null),this.drawHazards(u,x,d*1.3),this.drawMissionStarts(u,x,d*1.3),this.bigTx={ox:_,oz:g,sk:p,dpr:d};const[M,v]=this.dragAt??x(t,e);this.boatMarker(u,M,v,n,1.4*d),this.onTeleport&&(u.font=`800 ${12*d}px Nunito, sans-serif`,u.fillStyle="#a3291f",u.fillText("DEV: drag the boat to move it",14*d,f.height-14*d))}}enableDevTeleport(t,e){this.onTeleport=e;const n=this.bigEl,s=r=>{const a=n.getBoundingClientRect();return[(r.clientX-a.left)*this.bigTx.dpr,(r.clientY-a.top)*this.bigTx.dpr]};let o=!1;n.addEventListener("pointerdown",r=>{const{ox:a,oz:l,sk:c,dpr:h}=this.bigTx,[f,d]=t(),[u,m]=s(r);Math.hypot(u-(a+(f-this.b.x0)*c),m-(l+(d-this.b.z0)*c))>30*h||(this.dragAt=[u,m],o=!1,n.setPointerCapture(r.pointerId))}),n.addEventListener("pointermove",r=>{this.dragAt&&(this.dragAt=s(r),o=!0)}),n.addEventListener("pointerup",()=>{if(!this.dragAt)return;const{ox:r,oz:a,sk:l}=this.bigTx,[c,h]=this.dragAt;this.dragAt=null,o&&e(this.b.x0+(c-r)/l,this.b.z0+(h-a)/l)}),n.addEventListener("click",r=>{o&&(r.stopImmediatePropagation(),o=!1)},{capture:!0}),n.style.cursor="default"}addMooredBoats(t){const e=this.base.getContext("2d");e.fillStyle="#5b4a8a";for(const n of t)e.save(),e.translate((n.x-this.b.x0)*qe,(n.z-this.b.z0)*qe),e.rotate(-n.psi),e.fillRect(-Math.max(1.2,n.halfB*qe),-n.halfL*qe,Math.max(2.4,n.halfB*2*qe),n.halfL*2*qe),e.restore()}setPlaces(t){this.places=t}drawPlaces(t,e,n,s){t.save(),t.textAlign="center",t.textBaseline="middle";const o=[];for(const r of this.places){const[a,l]=e(r.x,r.z);if(!(a<-20||l<-20||a>t.canvas.width+20||l>t.canvas.height+20)&&(t.fillStyle="rgba(255, 250, 235, 0.95)",t.strokeStyle=r.icon==="★"?"#1d3557":"#6e1f1a",t.lineWidth=1.5*n,t.beginPath(),t.arc(a,l,9*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#1d3557",t.font=`${r.icon==="★"?800:400} ${11*n}px Nunito, sans-serif`,t.fillText(r.icon,a,l+.5*n),s)){t.font=`700 ${10*n}px Nunito, sans-serif`;const c=t.measureText(r.name).width,h=a-c/2,f=l+11*n,d=l+23*n;if(o.some(([u,m,_,g])=>h<_&&h+c>u&&f<g&&d>m))continue;o.push([h-4*n,f,h+c+4*n,d]),t.lineWidth=3*n,t.strokeStyle="rgba(255,255,255,0.9)",t.strokeText(r.name,a,l+17*n),t.fillStyle="#3a2a1a",t.fillText(r.name,a,l+17*n)}}t.restore()}setMissionStarts(t,e=!1){this.missionStarts=t,this.missionStartsFaded=e}drawMissionStarts(t,e,n){t.save(),t.textAlign="center",t.textBaseline="middle",t.globalAlpha=this.missionStartsFaded?.45:1;for(const[s,o]of this.missionStarts){const[r,a]=e(s,o);t.fillStyle="#5ec27a",t.strokeStyle="#1f4d3a",t.lineWidth=2*n,t.beginPath(),t.arc(r,a-12*n,8*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#10261c",t.font=`900 ${11*n}px Nunito, sans-serif`,t.fillText("!",r,a-11.5*n)}t.restore()}setHazards(t){this.hazards=t}drawHazards(t,e,n){for(const[s,o]of this.hazards)this.drawHazard(t,e(s,o),n)}drawHazard(t,[e,n],s){t.save(),t.fillStyle="#ffcf4a",t.strokeStyle="#7a2f00",t.lineWidth=1.5*s,t.beginPath(),t.moveTo(e,n-10*s),t.lineTo(e+9*s,n+6*s),t.lineTo(e-9*s,n+6*s),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#7a2f00",t.font=`900 ${10*s}px Nunito, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("!",e,n+1*s),t.restore()}clearDestination(){this.dest=null}setDestination(t,e,n){this.dest={x:t,z:e,name:n}}drawDestination(t,e,n,s){if(!this.dest)return;let[o,r]=e(this.dest.x,this.dest.z);if(s!==null){const a=s/2,l=o-a,c=r-a,h=Math.hypot(l,c),f=a-14*n;h>f&&(o=a+l/h*f,r=a+c/h*f)}t.save(),t.fillStyle="#ffcf4a",t.strokeStyle="#7a5a10",t.lineWidth=1.5*n,t.beginPath(),t.moveTo(o,r),t.lineTo(o,r-18*n),t.stroke(),t.beginPath(),t.moveTo(o,r-18*n),t.lineTo(o+12*n,r-13.5*n),t.lineTo(o,r-9*n),t.closePath(),t.fill(),t.stroke(),t.restore()}drawLocks(t,e,n,s){t.save(),t.lineCap="round";for(const o of this.locks)for(const r of o.gates){const[a,l]=e(r.x,r.z),c=r.nx*s*n,h=r.nz*s*n;for(const[f,d]of[[5,"#ffffff"],[2.5,"#1b1b1b"]])t.strokeStyle=d,t.lineWidth=f*n,t.beginPath(),t.moveTo(a-c,l-h),t.lineTo(a+c,l+h),t.stroke()}t.font=`800 ${12*n}px Nunito, sans-serif`,t.textBaseline="middle";for(const o of this.locks){const[r,a]=e(o.x,o.z),l=o.gates.length>2?`${o.name} · ${o.gates.length-1} locks`:o.name,c=t.measureText(l).width,h=20*n,f=8*n,d=r-c/2-f,u=a-h-12*n;t.fillStyle="rgba(31, 77, 58, 0.94)",t.beginPath(),t.roundRect(d,u,c+f*2,h,h/2),t.fill(),t.beginPath(),t.moveTo(r-5*n,u+h-.5),t.lineTo(r+5*n,u+h-.5),t.lineTo(r,u+h+6*n),t.fill(),t.fillStyle="#f6efdd",t.fillText(l,d+f,u+h/2+n)}t.restore()}boatMarker(t,e,n,s,o){t.save(),t.translate(e,n),t.rotate(-s+Math.PI),t.scale(o,o),t.fillStyle="#a3291f",t.strokeStyle="#fff",t.lineWidth=2,t.beginPath(),t.moveTo(0,-11),t.lineTo(6,8),t.lineTo(0,4),t.lineTo(-6,8),t.closePath(),t.stroke(),t.fill(),t.restore()}}class Mx{constructor(){U(this,"ctx",null);U(this,"master");U(this,"noise");U(this,"waterGain");U(this,"rumbleGain");U(this,"nextThump",0);U(this,"engine",null);U(this,"nextBird",0);U(this,"nextClick",0);U(this,"muted",yx())}start(){if(this.ctx)return;const t=this.ctx=new AudioContext;this.master=t.createGain(),this.master.gain.value=this.muted?0:.7,this.master.connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*2,t.sampleRate);const e=this.noise.getChannelData(0);for(let a=0;a<e.length;a++)e[a]=Math.random()*2-1;const n=t.createBufferSource();n.buffer=this.noise,n.loop=!0;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=900,this.waterGain=t.createGain(),this.waterGain.gain.value=0,n.connect(s).connect(this.waterGain).connect(this.master),n.start();const o=t.createBufferSource();o.buffer=this.noise,o.loop=!0;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=160,this.rumbleGain=t.createGain(),this.rumbleGain.gain.value=0,o.connect(r).connect(this.rumbleGain).connect(this.master),o.start(),this.loadEngine().catch(a=>console.warn("Engine samples unavailable, using synth",a))}async loadEngine(){const t=this.ctx,e=async c=>t.decodeAudioData(await(await fetch(c)).arrayBuffer()),[n,s]=await Promise.all([e("./audio/engine-idle.wav"),e("./audio/engine-run.wav")]),o=(c,h)=>{const f=t.createBufferSource();return f.buffer=c,f.loop=!0,f.connect(h),f.start(),f},r=t.createGain(),a=t.createGain();r.gain.value=a.gain.value=0;const l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=2400,r.connect(l),a.connect(l),l.connect(this.master),this.engine={idle:o(n,r),run:o(s,a),idleGain:r,runGain:a}}toggleMute(){this.muted=!this.muted,this.ctx&&(this.master.gain.value=this.muted?0:.7);try{localStorage.setItem("canal.muted",this.muted?"1":"0")}catch{}}update(t,e,n,s){const o=this.ctx;if(!o)return;const r=o.currentTime,a=Math.abs(t);if(this.engine){const l=this.engine,c=Math.min(1,a*.4);l.idleGain.gain.setTargetAtTime((1-c)*.55,r,.25),l.runGain.gain.setTargetAtTime(c*(.45+a*.05),r,.25),l.idle.playbackRate.setTargetAtTime(1+a*.08,r,.4),l.run.playbackRate.setTargetAtTime(.62+Math.max(0,a-1)*.095,r,.4)}else{const l=7+a*1.9;for(this.nextThump<r&&(this.nextThump=r);this.nextThump<r+.1;)this.thump(this.nextThump,.22+a*.035),this.nextThump+=1/l}this.waterGain.gain.setTargetAtTime(Math.min(.35,e*.06),r,.3),n&&r>this.nextClick&&(this.click(r),this.nextClick=r+.13),s&&r>this.nextBird&&(this.nextBird>0&&this.bird(r),this.nextBird=r+4+Math.random()*9)}rumble(t){this.ctx&&this.rumbleGain.gain.setTargetAtTime(t*t*.9,this.ctx.currentTime,.3)}bump(t){const e=this.ctx;if(!e)return;const n=e.currentTime,s=e.createOscillator();s.frequency.setValueAtTime(70,n),s.frequency.exponentialRampToValueAtTime(35,n+.25);const o=e.createGain();o.gain.setValueAtTime(Math.min(.9,t),n),o.gain.exponentialRampToValueAtTime(.001,n+.35),s.connect(o).connect(this.master),s.start(n),s.stop(n+.4)}quack(){const t=this.ctx;if(!t)return;const e=t.currentTime;for(let n=0;n<2;n++){const s=e+n*.16,o=t.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(520,s),o.frequency.exponentialRampToValueAtTime(330,s+.11);const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=1100,r.Q.value=3;const a=t.createGain();a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.25,s+.015),a.gain.exponentialRampToValueAtTime(1e-4,s+.12),o.connect(r).connect(a).connect(this.master),o.start(s),o.stop(s+.13)}}thump(t,e){const n=this.ctx,s=n.createOscillator();s.type="triangle",s.frequency.setValueAtTime(58,t),s.frequency.exponentialRampToValueAtTime(38,t+.08);const o=n.createGain();o.gain.setValueAtTime(e,t),o.gain.exponentialRampToValueAtTime(.001,t+.11),s.connect(o).connect(this.master),s.start(t),s.stop(t+.12);const r=n.createBufferSource();r.buffer=this.noise;const a=n.createBiquadFilter();a.type="bandpass",a.frequency.value=220;const l=n.createGain();l.gain.setValueAtTime(e*.5,t),l.gain.exponentialRampToValueAtTime(.001,t+.06),r.connect(a).connect(l).connect(this.master),r.start(t,Math.random(),.07)}click(t){const e=this.ctx,n=e.createBufferSource();n.buffer=this.noise;const s=e.createBiquadFilter();s.type="highpass",s.frequency.value=2500;const o=e.createGain();o.gain.setValueAtTime(.35,t),o.gain.exponentialRampToValueAtTime(.001,t+.03),n.connect(s).connect(o).connect(this.master),n.start(t,Math.random(),.04)}bird(t){const e=this.ctx,n=2+Math.floor(Math.random()*4),s=2600+Math.random()*1600;for(let o=0;o<n;o++){const r=t+o*(.09+Math.random()*.05),a=e.createOscillator();a.type="sine",a.frequency.setValueAtTime(s,r),a.frequency.exponentialRampToValueAtTime(s*(.7+Math.random()*.6),r+.07);const l=e.createGain();l.gain.setValueAtTime(1e-4,r),l.gain.exponentialRampToValueAtTime(.05,r+.01),l.gain.exponentialRampToValueAtTime(1e-4,r+.08),a.connect(l).connect(this.master),a.start(r),a.stop(r+.1)}}}function yx(){try{return localStorage.getItem("canal.muted")==="1"}catch{return!1}}const ur=.04,bx=90;function Uh(i,t,e){const n=Sx(i,t,e);return n!=null&&n.keeper&&(n.text=wx(n)),n}function wx(i){const t=i.gate.label;switch(i.action){case"paddlesUp":return`Lock-keeper: ${i.text.charAt(0).toLowerCase()}${i.text.slice(1).replace(/\.$/,"")}…`;case"paddlesDown":return`Lock-keeper: dropping the ${t} paddles…`;case"close":return`Lock-keeper: closing the ${t}…`;case"open":return`Lock-keeper: opening the ${t}…`;case"wait":return`Lock-keeper: ${i.text.charAt(0).toLowerCase()}${i.text.slice(1)}`;default:return i.text}}function Sx(i,t,e){const[n,s]=t,o=(n+s)/2;let r,a=1/0;for(const v of i.groups){const T=v.gates[0].s,w=v.gates.at(-1).s,y=e?T-o:o-w,R=o>T-2&&o<w+2,S=R?0:y;(R||y>0&&y<bx)&&S<a&&(a=S,r=v)}if(!r){for(const v of i.groups){const T=v.gates[0].s,w=v.gates.at(-1).s,y=e?o-w:T-o;if(y>0&&y<60){const R=v.gates.find(b=>b.wantPaddle)??v.gates.find(b=>b.wantOpen),S=e?v.gates.at(-1):v.gates[0];if(R)return{group:v,uphill:e,gate:R,boatBody:e?v.bodies.length-1:0,adjacent:[S],keeper:R!==S,action:R.wantPaddle?"paddlesDown":"close",text:R.wantPaddle?`Before you go: drop the paddles on the ${R.label} behind you.`:`Before you go: close the ${R.label} behind you.`}}}return null}const l=r.gates.length-1,c=e?r.gates:[...r.gates].reverse(),f=(e?r.bodies:[...r.bodies].reverse()).map(v=>i.bodies[v]),d=v=>e?v:l+1-v;let u=-1;for(let v=0;v<=l+1;v++){const T=f[v];n>=T.s0-.2&&s<=T.s1+.2&&(u=v)}const m=c.find(v=>v.s>n&&v.s<s),_=u<0?m?[m]:[]:u===l+1?[c[l]]:[c[u-1],c[u]].filter(v=>!!v),g=(v,T,w,y=u)=>({group:r,uphill:e,gate:v,action:T,text:w,boatBody:y<0?-1:d(y),adjacent:_,keeper:!!v&&!_.includes(v)&&T!=="drive"});if(u<0)return g(m??null,"drive","Keep going, nice and slow.");if(u===l+1){const v=r.gates.find(T=>T.wantPaddle)??r.gates.find(T=>T.wantOpen);return v?g(v,v.wantPaddle?"paddlesDown":"close",v.wantPaddle?`You're through! Drop the paddles on the ${v.label} behind you.`:`You're through! Close the ${v.label} behind you.`):null}const p=c[u],x=v=>v.label==="the canal"?v===f[0]?"the canal behind you":"the canal ahead":v.label;if(u>0&&c[u-1].wantOpen)return g(c[u-1],"close",`Close the ${c[u-1].label} behind you.`);if(Math.abs(f[u].level-f[u+1].level)<ur){for(const v of r.gates)if(v!==p&&v.wantPaddle)return g(v,"paddlesDown",`Drop the ${v.label} paddles so the water stays put.`)}else{const v=c.find((G,X)=>X!==u&&G.wantOpen);if(v)return g(v,"close",`First close the ${v.label}, or the water will just run away.`);const T=r.gates.filter(G=>G.wantPaddle&&Math.abs(i.bodies[G.below].level-i.bodies[G.above].level)>=ur),w=T.find(G=>G.paddle>.95&&Math.abs(G.flow)<.001);if(w){const G=i.bodies[w.above];return g(w,"paddlesDown",`${Aa(x(G))} ran dry before the levels matched. Drop these paddles so it can be topped up.`)}if(T.length>1)return g(T[1],"paddlesDown",`One set of paddles at a time: drop the ${T[1].label} paddles.`);if(T.length===1){const G=T[0],X=i.bodies[G.below],dt=i.bodies[G.above],vt=(dt.level-X.level).toFixed(1),yt=dt.kind==="pound"?`Filling ${x(X)}`:X.kind==="pound"?`Emptying ${x(dt)}`:`${Aa(x(dt))} → ${x(X)}`;return g(G,"wait",`${yt}… ${vt} m to go`)}const y=G=>f[G].kind==="pound"||f[G].level>f[G].hi-ur,R=G=>f[G].kind==="pound"||f[G].level<f[G].lo+ur,S=(G,X)=>c[Math.min(G,X)],b=G=>e?G+1:G-1,C=G=>e?G-1:G+1,O=G=>{const X=b(G);return y(X)?[S(G,X),`fill ${x(f[G])} from ${x(f[X])}`]:O(X)},B=G=>{const X=C(G);return R(X)?[S(G,X),`empty ${x(f[G])} into ${x(f[X])}`]:B(X)};let z;if(f[u].kind==="pound"||f[u+1].kind==="pound"){const G=f[u].level>f[u+1].level?f[u]:f[u+1],X=G===f[u]?f[u+1]:f[u];z=[p,G.kind==="pound"?`fill ${x(X)} from ${x(G)}`:`empty ${x(G)} into ${x(X)}`]}else(e?!y(u+1):!R(u+1))?(z=e?O(u+1):B(u+1),z[1]=`first, ${z[1]}`):(e?!R(u):!y(u))?(z=e?B(u):O(u),z[1]=`first, ${z[1]}`):z=[p,`let ${x(f[e?u+1:u])} empty into ${x(f[e?u:u+1])}`];const[N,W]=z;for(const G of r.gates)if(G!==N&&G.wantPaddle)return g(G,"paddlesDown",`Drop the ${G.label} paddles so the water stays put.`);return g(N,"paddlesUp",`${Aa(W)}.`)}return p.wantOpen?p.open<.97?g(p,"wait",`The ${p.label} are swinging open…`):p.wantPaddle?g(p,"paddlesDown",`Drop the paddles on the ${p.label}.`):g(p,"drive",`Gates open. Drive ${u+1===l+1?"out of the lock":`into ${x(f[u+1])}`}.`):g(p,"open",`Levels match: open the ${p.label}.`)}const Aa=i=>i.charAt(0).toUpperCase()+i.slice(1),Nh=["Kingfisher","Dunroamin","Willow","Morning Mist","Heron","Bramble","Otter","Lazy Days","Moorhen","Puddle Duck","Wren","Seren","Daisy May","Jubilee","Halcyon","Mallard","Badger","Tilly","Dragonfly","Rosie","Swallow","Nutmeg","Lily Pad","Bluebell","Damselfly","Kestrel","Second Wind","Tortoise","Meander","Sunflower","Jolly Roger","Dormouse","Albatross","Grebe","Primrose","Liberty","Plover","Hedgehog","Elderflower","Coot","Teasel","Old Bill","Marigold","Windrush","Peregrine","Thistle","Snowdrop","Toad Hall","Cobble","Foxglove","Pippin","Salamander","Spindle","Saffron","Sloe"],Oh=["#1f4d3a","#7a1f2b","#1d3557","#2e2a4a","#5a3d1e","#2f5d62","#6b2737","#264d2a","#3b4a6b","#8a5a1e"],Fh=["#7c2f23","#3a3d40","#d9ccaa","#2b2b2b","#8a7650","#4a5a3a"];class Ex{constructor(t,e,n,s,o,r,a){U(this,"group",new Ct);U(this,"boats",[]);U(this,"zones");U(this,"highlight");U(this,"marker");U(this,"time",0);U(this,"stopMarkers",new Map);U(this,"starts",new Map);this.route=t,this.ww=e,this.terrain=n,this.zones=[{id:"tower",name:"Tower Wharf",kind:"visitor",s0:o+10,s1:o+55},{id:"city",name:"City moorings, Cow Lane Bridge",kind:"visitor",s0:1150,s1:1215},{id:"hoole",name:"Hoole",kind:"visitor",s0:2050,s1:2110},{id:"christleton",name:"Christleton",kind:"visitor",s0:4345,s1:4400}];const l=(u,m)=>e.gates.every(_=>_.s<u-35||_.s>m+35)&&s.every(_=>_.s<u-_.w/2-12||_.s>m+_.w/2+12)&&e.windingHoles.every(_=>_<u-45||_>m+45)&&this.zones.every(_=>_.s1<u-8||_.s0>m+8)&&e.bodies[e.bodyIndexAt((u+m)/2)].kind==="pound",c=a.filter(u=>u.type==="stop"&&!/drive.?thru/i.test(u.name)).sort((u,m)=>u.rank-m.rank||u.dist-m.dist);for(const u of c)if(!this.zones.some(m=>m.kind==="stop"&&Math.abs((m.s0+m.s1)/2-u.s)<120))for(const m of[0,8,-8,16,-16,24,-24,32,-32,45,-45,60,-60]){const _=u.s+m-18,g=u.s+m+18;if(!(_<30||g>t.length-30||!l(_,g))){this.zones.push({id:`stop:${u.name}`,name:u.name,kind:"stop",poi:u,s0:_,s1:g});break}}for(const u of this.zones)this.buildZone(u);this.highlight=new J(new me,new Pn({color:"#ffd76a",transparent:!0,opacity:.5,depthWrite:!1})),this.group.add(this.highlight),this.marker=Zu(),this.group.add(this.marker);const h=Si(77),f=(u,m)=>u-m<40||u+m>t.length-40||e.gates.some(_=>Math.abs(_.s-u)<m+35)||s.some(_=>Math.abs(_.s-u)<m+_.w/2+14)||this.zones.some(_=>u+m>_.s0-6&&u-m<_.s1+6)||e.windingHoles.some(_=>Math.abs(_-u)<m+45)||Math.abs(u-r)<m+30||e.bodies[e.bodyIndexAt(u)].kind!=="pound";let d=[...Nh];for(let u=60;u<t.length-60;){const m=u>o-250&&u<o+220?.85:u>2900&&u<3250?.6:.32,_=15+Math.round(h()*5);if(h()<m&&!f(u+_/2,_/2)){const g=d.splice(Math.floor(h()*d.length),1)[0]??"Narrowboat";d.length||(d=[...Nh]),this.addBoat(u+_/2,_,g,h),u+=_+1+h()*3}else u+=6+h()*14}}addBoat(t,e,n,s){const o=this.route.frame(t),a=(this.ww.halfWidthAt(t)-Rn/2-.12)*oe,l=o.x+o.nx*a,c=o.z+o.nz*a,h=Math.atan2(o.tx,o.tz)+(s()<.5?0:Math.PI),f=Ql({name:n,length:e,crew:!1,cabin:Oh[Math.floor(s()*Oh.length)],roof:Fh[Math.floor(s()*Fh.length)]}),d=hx(f),u=this.ww.levelAt(t);d.position.set(l,u,c),d.rotation.order="YXZ",d.rotation.y=h,this.group.add(d),this.boats.push({x:l,z:c,psi:h,halfL:e/2,halfB:Rn/2,name:n,s:t,group:d,baseY:u,rock:0,rockedAt:-99})}buildZone(t){const e=new Kt({color:"#2a2a2a",metalness:.6,roughness:.4});for(let r=t.s0;r<=t.s1;r+=6){const a=this.ww.halfWidthAt(r),[l,c]=this.route.point(r,(a+.35)*oe),h=new J(new on(.14,.035,6,12),e);h.position.set(l,this.terrain.bankTop(r)+.07,c),h.rotation.x=Math.PI/2,this.group.add(h)}const n=this.route.frame(t.s0),s=(this.ww.halfWidthAt(t.s0)+2.9)*oe,o=t.kind==="stop"?kh([`Moorings for ${Cx(t.poi)}`,t.name],"#6e1f1a"):kh(["Visitor moorings",t.name]);o.position.set(n.x+n.nx*s,this.terrain.bankTop(t.s0),n.z+n.nz*s),o.rotation.y=Math.atan2(oe*n.tz,-oe*n.tx),this.group.add(o)}setActive(t){if(this.highlight.visible=this.marker.visible=!!t,!t)return;const e=[],n=[];let s=0;for(let c=t.s0;c<=t.s1+.01;c+=1.5,s++){const h=this.ww.halfWidthAt(c),f=this.terrain.bankTop(c)+.06;for(const d of[h-.05,h+.75]){const[u,m]=this.route.point(c,d*oe);e.push(u,f,m)}s>0&&n.push((s-1)*2,(s-1)*2+1,s*2,(s-1)*2+1,s*2+1,s*2)}const o=new me;o.setAttribute("position",new $t(e,3)),o.setIndex(n),this.highlight.material.side=Ae,this.highlight.geometry.dispose(),this.highlight.geometry=o;const r=(t.s0+t.s1)/2,[a,l]=this.route.point(r,(this.ww.halfWidthAt(r)+.4)*oe);this.marker.position.set(a,this.terrain.bankTop(r)+4,l),this.marker.userData.y0=this.marker.position.y}rockBoat(t,e){t.rock=Math.min(.09,Math.max(t.rock,e)),t.rockedAt=this.time,this.popOwner(t,"shake")}popOwner(t,e){if(t.owner)this.time>t.owner.until&&(t.owner.from=this.time),t.owner.until=this.time+5,t.owner.mode=e;else{const n=ni(Ei(Math.random));n.group.position.set(0,-.4,-t.halfL+2.45),t.group.add(n.group),t.owner={person:n,from:this.time,until:this.time+5,mode:e}}}get now(){return this.time}update(t){this.time+=t;for(const e of this.boats){const n=e.owner;if(n){const s=Math.min(1,(this.time-n.from)/.5)*Math.min(1,Math.max(0,(n.until-this.time)/.5));n.person.group.position.y=-.4+s*1,n.person.group.visible=s>.01,Vi(n.person,s>.6?n.mode:"rest",this.time)}e.rock<.001||(e.rock*=Math.exp(-t*.6),e.group.rotation.z=Math.sin(this.time*3.1)*e.rock,e.group.position.y=e.baseY+Math.sin(this.time*2.3)*e.rock*.6)}for(const e of this.stopMarkers.values())e.visible&&(e.position.y=e.userData.y0+Math.sin(this.time*1.4+e.position.x)*.2,e.rotation.y+=t*.8);for(const e of this.starts.values())e.visible&&(e.position.y=e.userData.y0+Math.sin(this.time*1.6+1)*.25,e.children[0].rotation.y+=t*.9);this.marker.visible&&(this.marker.position.y=this.marker.userData.y0+Math.sin(this.time*1.6)*.25,this.marker.rotation.y+=t*.9,this.highlight.material.opacity=.35+.2*Math.sin(this.time*3))}addStopMarker(t){var a;const e=Ax(((a=t.poi)==null?void 0:a.kind)??"pub"),n=Tx(t.name);n.position.y=-.9,e.add(n);const s=(t.s0+t.s1)/2,[o,r]=this.route.point(s,(this.ww.halfWidthAt(s)+1.5)*oe);e.position.set(o,this.terrain.bankTop(s)+3.6,r),e.userData.y0=e.position.y,this.group.add(e),this.stopMarkers.set(t.id,e)}hideStopMarker(t){const e=this.stopMarkers.get(t);e&&(e.visible=!1)}addStart(t){const e=this.zones.find(a=>a.id===t);if(!e||this.starts.has(t))return;const n=Rx(),s=(e.s0+e.s1)/2,[o,r]=this.route.point(s,(this.ww.halfWidthAt(s)+.4)*oe);n.position.set(o,this.terrain.bankTop(s)+4,r),n.userData.y0=n.position.y,this.group.add(n),this.starts.set(t,n)}showStart(t,e){const n=this.starts.get(t);n&&(n.visible=e)}clearAround(t,e,n){for(const s of[...this.boats]){if(Math.abs(s.s-t)>e+s.halfL)continue;this.group.remove(s.group),this.boats.splice(this.boats.indexOf(s),1);const o=n.indexOf(s);o>=0&&n.splice(o,1)}}zoneAt(t){return this.zones.find(e=>t>=e.s0-4&&t<=e.s1+4)}}function Zu(i="#ffcf4a",t="#a07000"){const e=new Ct,n=new Kt({color:i,emissive:t,emissiveIntensity:.6,roughness:.4}),s=new J(new Yl(.7,0),n);return s.scale.y=1.5,e.add(s),e}function Tx(i){const t=document.createElement("canvas"),e=t.getContext("2d"),n="800 44px Nunito, sans-serif";e.font=n;const s=Math.ceil(e.measureText(i).width)+48;t.width=s,t.height=76,e.font=n,e.fillStyle="rgba(246, 239, 221, 0.95)",e.strokeStyle="#6e1f1a",e.lineWidth=5,e.beginPath(),e.roundRect(3,3,s-6,70,32),e.fill(),e.stroke(),e.fillStyle="#3a1a14",e.textAlign="center",e.textBaseline="middle",e.fillText(i,s/2,40);const o=new Ln(t);o.colorSpace=Ee;const r=new Ou(new Vl({map:o,depthWrite:!1})),a=.62;return r.scale.set(a*s/76,a,1),r}function Ax(i){const t=new Ct,e=(s,o={})=>new Kt({color:s,roughness:.4,emissive:s,emissiveIntensity:.25,...o}),n=(s,o,r=0,a=0,l=0,c=0,h=0)=>{const f=new J(s,o);f.position.set(r,a,l),f.rotation.set(c,0,h),t.add(f)};return i==="cafe"||i==="ice_cream"?(n(new qt(.42,.32,.6,16),e("#f4f1ea"),0,.3),n(new qt(.38,.38,.04,16),e("#6b3f1f"),0,.58),n(new on(.17,.05,6,12),e("#f4f1ea"),.45,.32,0,0,0),n(new qt(.7,.6,.06,18),e("#f4f1ea"),0,-.02)):i==="restaurant"||i==="hotel"?(n(new qt(.75,.6,.08,20),e("#f4f1ea"),0,.3,0,Math.PI/2),n(new Wt(.07,1.2,.03),e("#c9c3b5",{metalness:.6}),-1,.3),n(new Wt(.07,1.2,.03),e("#c9c3b5",{metalness:.6}),1,.3)):(n(new qt(.42,.34,1,16),e("#d9921f",{transparent:!0,opacity:.92}),0,.5),n(new qt(.45,.42,.28,16),e("#fbf6e8"),0,1.12),n(new Ve(.3,10,6),e("#fbf6e8"),.1,1.28),n(new on(.26,.07,8,14),e("#e8dcc0",{transparent:!0,opacity:.85}),.5,.55,0,0,0)),t.scale.setScalar(1.3),t}function Rx(){const i=Zu("#5ec27a","#1f6b3a"),t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");e.fillStyle="#1f4d3a",e.beginPath(),e.arc(64,64,58,0,Math.PI*2),e.fill(),e.fillStyle="#f6efdd",e.font="900 92px Nunito, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("!",64,70);const n=new Ln(t);n.colorSpace=Ee;const s=new Ou(new Vl({map:n,depthWrite:!1}));return s.scale.set(.9,.9,1),s.position.y=1.7,i.add(s),i}function Cx(i){return i.kind==="pub"||i.kind==="bar"?"patrons":i.kind==="hotel"?"guests":"customers"}function kh(i,t="#1d3557"){const e=document.createElement("canvas");e.width=512,e.height=192;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,512,192),n.strokeStyle="#f3ead0",n.lineWidth=6,n.strokeRect(8,8,496,176),n.fillStyle="#f3ead0",n.textAlign="center",n.font="700 34px Nunito, sans-serif",n.fillText(i[0].toUpperCase(),256,70,470),n.font="600 40px Fraunces, Georgia, serif",n.fillText(i[1],256,135,470);const s=new Ln(e);s.colorSpace=Ee;const o=new Ct,r=new J(new ri(2.2,.82),new Kt({map:s,side:Ae}));r.position.y=1.9,o.add(r);const a=new J(new Wt(.1,2,.1),new Kt({color:"#f1efe8"}));return a.position.y=1,o.add(a),o}const dr=.9,zh=2,fr=.45,Px=.45;class Lx{constructor(t,e,n,s){U(this,"group",new Ct);U(this,"lines",[]);U(this,"ropeMat",new Fu({color:"#d8c49a"}));U(this,"pinMat",new Kt({color:"#3a3a3a",metalness:.5,roughness:.5}));U(this,"time",0);this.route=t,this.ww=e,this.terrain=n,this.boat=s}get count(){return this.lines.length}get moored(){return this.lines.length===2}endPoint(t){const e=this.route.frame(this.boat.s);return[((-Math.cos(this.boat.psi)*e.nx+Math.sin(this.boat.psi)*e.nz)*oe>0?1:-1)*Rn*.5,(t==="bow"?1:-1)*(gn/2-1.3)]}gap(t){const[e,n]=this.boat.toWorld(...this.endPoint(t)),s=this.route.project(e,n,this.boat.s);return{gap:this.ww.halfWidthAt(s.s)-s.d*oe,s:s.s}}blocker(){return this.ww.gates.some(t=>Math.abs(t.s-this.boat.s)<gn/2+22)?"No mooring on a lock landing. Move along a bit.":this.boat.d*oe<0?"Moor on the towpath side, the bank with the path.":null}prompt(){if(this.moored)return{key:"F",text:"Cast off",ready:!0};const e=["bow","stern"].filter(r=>!this.lines.some(a=>a.end===r)).map(r=>({e:r,...this.gap(r)})),n=e.reduce((r,a)=>a.gap<r.gap?a:r);if(!this.lines.length&&(n.gap>2.5||this.boat.speed>1)||this.blocker()&&!this.lines.length)return null;const s=this.lines.length?zh:dr,o=e.find(r=>r.gap<s);return o&&this.boat.speed<fr?{key:"F",text:o.gap>dr?`Haul the ${o.e} in and tie it`:`Tie the ${o.e} line`,ready:!0}:this.lines.length===1?{key:"F",text:`Untie the ${this.lines[0].end} line to realign`,ready:!0}:this.boat.speed>=fr?{key:"F",text:"Slow right down to step off",ready:!1}:{key:"F",text:`Bring the ${n.e} in alongside the bank`,ready:!1}}act(){if(this.moored)return this.castOff(),"Lines in, cast off. Off you go!";if(!this.lines.length){const n=this.blocker();if(n)return n}const t=["bow","stern"].filter(n=>!this.lines.some(s=>s.end===n)),e=t.find(n=>this.gap(n).gap<(this.lines.length?zh:dr));if(this.lines.length===1&&(!e||this.boat.speed>=fr)){const n=this.lines[0].end;return this.castOff(),`${n==="bow"?"Bow":"Stern"} line untied. Line her up and try again.`}return this.boat.speed>=fr?"Too quick to step off! Slow right down first.":e?(this.tie(e),this.moored?null:e==="bow"?"Bow line tied. Now the stern: a touch ahead with the tiller pushed away from the bank swings it in on the rope.":"Stern line tied. Now the bow: a touch astern with the tiller towards the bank brings it in."):`Bring the ${t[0]} closer in to the bank first (within a metre).`}tie(t){const e=this.endPoint(t),[n,s]=this.boat.toWorld(...e),o=this.route.project(n,s,this.boat.s),r=this.ww.halfWidthAt(o.s),a=this.route.frame(o.s),l=Math.sin(this.boat.psi)*a.tx+Math.cos(this.boat.psi)*a.tz>=0?1:-1,c=(t==="bow"?1:-1)*l*.8,[h,f]=this.route.point(o.s+c,(r+.8)*oe),d=Math.hypot(.8,.8+.25)+.35,u=this.gap(t).gap>dr?d:Math.hypot(n-h,s-f)+.35,m={local:e,anchor:[h,f],length:u};this.boat.tethers.push(m);const _=new J(new qt(.03,.03,.5,6),this.pinMat);_.position.set(h,this.terrain.bankTop(o.s)+.2,f),_.rotation.z=.2;const g=new v_(new me().setFromPoints(new Array(12).fill(0).map(()=>new I)),this.ropeMat);g.frustumCulled=!1;const p=_.position.y-.2,x=new J(new Ao(.45,.62,28),new Pn({color:"#e0261b",transparent:!0,opacity:.85,depthWrite:!1,side:Ae}));x.rotation.x=-Math.PI/2,x.position.set(h,p+.04,f);const M=new J(new qt(1.1,1.1,1.6,10),new Pn({visible:!1}));M.position.set(h,p+.8,f),M.userData.mooringEnd=t,this.group.add(_,g,x,M),this.lines.push({end:t,tether:m,pin:_,rope:g,halo:x,hit:M})}castOff(){for(const t of[...this.lines])this.removeLine(t)}removeLine(t){this.group.remove(t.pin,t.rope,t.halo,t.hit),t.rope.geometry.dispose();const e=this.boat.tethers.indexOf(t.tether);e>=0&&this.boat.tethers.splice(e,1),this.lines.splice(this.lines.indexOf(t),1)}get tapTargets(){return this.lines.map(t=>t.hit)}untie(t){const e=this.lines.find(n=>n.end===t);return e?(this.removeLine(e),`${t==="bow"?"Bow":"Stern"} line untied.`):""}update(t,e=0){this.time+=e;const n=.5+.5*Math.sin(this.time*3.5);for(const s of this.lines){s.halo.material.opacity=.65+.3*n,s.halo.scale.setScalar(1+.15*n);const[o,r]=this.boat.toWorld(...s.tether.local),a=new I(o,t+Px,r),l=s.pin.position.clone().setY(s.pin.position.y+.15),h=.08+Math.max(0,s.tether.length-a.distanceTo(l))*.6,f=s.rope.geometry.getAttribute("position");for(let d=0;d<f.count;d++){const u=d/(f.count-1),m=a.clone().lerp(l,u);m.y-=Math.sin(u*Math.PI)*h,f.setXYZ(d,m.x,m.y,m.z)}f.needsUpdate=!0}}}const Hi=[{from:"tower",zone:"city",title:"Under the city walls",brief:"Moor at the city moorings by Cow Lane Bridge, in the cutting below the walls."},{from:"city",zone:"hoole",title:"Through Chester",brief:"Moor up at Hoole, past the city bridges. Thirsty? There are canalside pubs on the way (🍺 on the map)."},{from:"hoole",zone:"christleton",title:"Out to the country",brief:"Moor at Christleton for the night, out in the fields past Greenfield Lock."},{from:"christleton",zone:"tower",title:"Back to Tower Wharf",brief:"Bring her down to Tower Wharf, at the foot of the Northgate Staircase."}];class Dx{constructor(t){U(this,"index",0);U(this,"startHour");U(this,"bumps",0);U(this,"rocked",0);U(this,"cleared",0);U(this,"result",null);U(this,"done",new Set);this.startHour=t}get current(){return Hi[this.index%Hi.length]}complete(t){const e=(t-this.startHour+24)%24,n=this.bumps+this.rocked*2,s=n===0?"Not a ripple out of place. The towpath regulars are impressed.":n<4?"A couple of scrapes, but nothing a cup of tea won’t fix.":"Eventful! The moored boats will be talking about you for a while.";return this.result={trip:this.current,hours:e,bumps:this.bumps,rocked:this.rocked,cleared:this.cleared,verdict:s},this.result}next(t){this.result&&this.done.add(this.index),this.done.size>=Hi.length&&this.done.clear(),this.startHour=t,this.bumps=this.rocked=this.cleared=0,this.result=null}choose(t){this.index=t}}const Bh=["Kittiwake","Ruby Tuesday","Water Rat","Bumblebee","Silver Birch","Mistle Thrush","Ploughman","Owl","Clementine","Blackthorn","Sandpiper","Merlin"],Hh=["#27445a","#6a1e2e","#2c5a3f","#4b3a6b","#8a4a12","#1f3d4d"],Gh=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400"],Vh=1.5,Ix=.9;class Ux{constructor(t,e,n,s){U(this,"group",new Ct);U(this,"boats",[]);U(this,"events",[]);U(this,"time",0);U(this,"nextSpawn",8);U(this,"blockedAt",()=>[]);U(this,"nameIndex",0);this.route=t,this.ww=e,this.moorings=n,this.player=s}update(t,e){this.time+=t;const n=this.player,s=this.ww.bodies[this.ww.bodyIndexAt(n.s)];if(this.time>this.nextSpawn&&this.boats.length<2&&s.kind==="pound"){this.nextSpawn=this.time+45+Math.random()*60;const o=n.s+e*(230+Math.random()*90),r=Math.min(o,n.s),a=Math.max(o,n.s),l=this.boats.every(c=>Math.abs(c.s-o)>80)&&this.moorings.zoneAt(o)===void 0&&!this.blockedAt().some(c=>c>r-20&&c<a+20);o>s.s0+60&&o<s.s1-60&&l&&this.spawn(o,-e)}for(const o of[...this.boats]){const r=(n.s-o.s)*o.dir>380||Math.abs(n.s-o.s)>520,a=this.ww.bodies[this.ww.bodyIndexAt(o.s)],l=o.dir>0?a.s1-o.s<40:o.s-a.s0<40;if(r||l&&Math.abs(n.s-o.s)>150||a.kind!=="pound"){this.remove(o);continue}this.steer(o,t,e)}}spawn(t,e){const n=Bh[this.nameIndex++%Bh.length],s=Ql({name:n,length:17+Math.round(Math.random()*3),crew:!0,cabin:Hh[Math.floor(Math.random()*Hh.length)],roof:Math.random()<.5?"#3a3d40":"#7c2f23",crewStyle:Ei(Math.random,{coat:Gh[Math.floor(Math.random()*Gh.length)]})});s.group.rotation.order="YXZ",this.group.add(s.group);const o=s.group.userData.length/2,r={name:n,model:s,s:t,d:0,dir:e,speed:Vh,obstacle:{x:0,z:0,psi:0,halfL:o,halfB:Rn/2},pausedUntil:0,waveUntil:0,passed:!1};this.boats.push(r),this.player.obstacles.push(r.obstacle),this.place(r,0)}remove(t){this.group.remove(t.model.group),this.boats.splice(this.boats.indexOf(t),1);const e=this.player.obstacles.indexOf(t.obstacle);e>=0&&this.player.obstacles.splice(e,1)}bumped(t){const e=this.boats.find(n=>n.obstacle===t);!e||this.time<e.pausedUntil||(e.pausedUntil=this.time+6,e.speed=0,e.waveUntil=this.time+3,this.events.push({kind:"bumped",boat:e}))}steer(t,e,n){const s=this.player,o=this.ww.halfWidthAt(t.s),r=(s.s-t.s)*t.dir,a=n!==t.dir;let l=Vh;const c=this.moorings.boats.some(m=>Math.abs(m.s-t.s)<m.halfL+12);c&&(l=Ix),r>0&&r<45&&(l=Math.min(l,a?.7:.4)),r>0&&r<22&&!a&&(l=0);const h=r>0&&r<34&&Math.abs(s.d-t.d)<Rn+.7;h&&(l=0);for(const m of this.blockedAt()){const _=(m-t.s)*t.dir-t.obstacle.halfL;_>-2&&_<30&&(l=Math.min(l,_<5?0:.4))}this.time<t.pausedUntil&&(l=0),t.speed+=Te(l-t.speed,-.9*e,.3*e);const f=t.dir;let d=r>-20&&r<110&&a?f*(h?o:1.8):0;const u=c?o-Rn-1.6:o-1.6;if(d=Te(d,-(o-1.6),u),t.d+=Te(d-t.d,-.45*e,.45*e),t.s+=t.dir*t.speed*e,this.place(t,e),!t.passed&&a&&Math.abs(s.s-t.s)<4){t.passed=!0;const m=(s.d-t.d)*f<0;t.waveUntil=this.time+3.5,this.events.push({kind:m?"greet":"wrongSide",boat:t})}Vi(t.model.steererPerson,this.time<t.waveUntil?"wave":"rest",this.time)}place(t,e){const n=this.route.frame(t.s),s=n.x+n.nx*t.d,o=n.z+n.nz*t.d,r=Math.atan2(n.tx,n.tz)+(t.dir>0?0:Math.PI),a=this.ww.levelAt(t.s);t.model.group.position.set(s,a+Math.sin(this.time*1.2+t.s)*.015,o),t.model.group.rotation.y=r,t.model.group.rotation.z=Math.sin(this.time*.9+e)*.004,Object.assign(t.obstacle,{x:s,z:o,psi:r})}}const pr=-oe,Nx=i=>new Kt({color:i});function ie(i,t,e,n=0,s=0,o=0,r=0,a=0,l=0){const c=new J(t,Nx(e));return c.position.set(n,s,o),c.rotation.set(r,a,l),i.add(c),c}const Ge=(i,t,e)=>new Wt(i,t,e),fn=(i,t,e,n=6)=>new qt(i,t,e,n),Ox={bench(){const i=new Ct;ie(i,Ge(1.6,.06,.4),"#8a6a45",0,.45,0),ie(i,Ge(1.6,.36,.05),"#8a6a45",0,.68,-.2,-.15);for(const t of[-.7,.7])ie(i,Ge(.06,.45,.4),"#2b2b2b",t,.22,0);return i},bin(){const i=new Ct;return ie(i,fn(.22,.2,.8,8),"#1f3d2f",0,.4,0),ie(i,fn(.24,.24,.06,8),"#2b2b2b",0,.82,0),i},lamp(){const i=new Ct;return ie(i,fn(.06,.09,3.6),"#1b1b1b",0,1.8,0),ie(i,Ge(.5,.06,.06),"#1b1b1b",.18,3.55,0),ie(i,fn(.12,.16,.32,6),"#2b2b2b",.38,3.4,0),ie(i,fn(.1,.1,.14,6),"#f4e3a1",.38,3.22,0),i},lifebuoy(){const i=new Ct;return ie(i,Ge(.1,1.5,.1),"#e8e4da",0,.75,0),ie(i,new on(.3,.07,6,12),"#e0522f",0,1.15,.08),ie(i,Ge(.6,.6,.03),"#c0b8a8",0,1.15,0),i},tub(){const i=new Ct;ie(i,fn(.36,.3,.45,8),"#6b4a2e",0,.22,0),ie(i,new sn(.34,0),"#4f8a3a",0,.58,0);for(const[t,e,n]of[[.15,.1,"#e04f6a"],[-.12,.12,"#f2c94c"],[.02,-.16,"#d36ad6"],[-.16,-.06,"#f6f0e4"]])ie(i,new sn(.08,0),n,t,.82,e);return i},reeds(){const i=new Ct,t=Si(5);for(let e=0;e<9;e++){const n=1.1+t()*.9;ie(i,fn(.015,.04,n,4),t()<.4?"#8a9a4a":"#6f8a3a",(t()-.5)*.9,n/2-.3,(t()-.5)*.7,(t()-.5)*.2,0,(t()-.5)*.25),t()<.4&&ie(i,fn(.04,.04,.2,5),"#5a3d22",(t()-.5)*.9,n-.3,(t()-.5)*.7)}return i},hedge(){const i=new Ct;return ie(i,Ge(4.2,1.5,1.1),"#3f6b30",0,.75,0),ie(i,new sn(.6,0),"#4b7a36",-1.2,1.4,.1),ie(i,new sn(.55,0),"#36602a",1,1.45,-.1),i},fence(){const i=new Ct;return ie(i,Ge(2,1.6,.06),"#7a5a3a",0,.8,0),ie(i,Ge(.1,1.75,.1),"#5e4430",-1,.87,0),i},flowers(){const i=new Ct,t=Si(9),e=["#f2c94c","#ffffff","#d36ad6","#e04f6a","#7aa7e0"];for(let n=0;n<7;n++){const s=(t()-.5)*1.6,o=(t()-.5)*1.2;ie(i,fn(.01,.01,.35,3),"#4f7a33",s,.17,o),ie(i,new sn(.06,0),e[Math.floor(t()*e.length)],s,.36,o)}return i},picnic(){const i=new Ct;ie(i,Ge(1.8,.06,.8),"#a07a50",0,.75,0);for(const t of[-.65,.65])ie(i,Ge(1.8,.05,.28),"#a07a50",0,.45,t);for(const t of[-.7,.7])ie(i,Ge(.08,.75,1.5),"#8a6a45",t,.37,0,0);return i},parasol(){const i=new Ct;return ie(i,fn(.03,.03,2.4),"#e8e4da",0,1.2,0),ie(i,new ei(1.4,.5,8,1,!0),"#a3291f",0,2.3,0),i},cottage(){const i=new Ct;ie(i,Ge(6,4.2,5),"#efe8da",0,2.1,0);const t=new qt(.01,3.9,6.6,4,1);t.rotateY(Math.PI/4),t.rotateZ(Math.PI/2),t.scale(1,.55,1),ie(i,t,"#4d525b",0,5,0),ie(i,Ge(.7,1.4,.7),"#8c4234",2,5.6,0),ie(i,Ge(1,1.9,.08),"#1f4d3a",0,.95,2.52);for(const e of[-1.8,1.8])ie(i,Ge(.9,.9,.08),"#2a3640",e,2.6,2.52),ie(i,Ge(.9,.9,.08),"#2a3640",e,1.1,2.52);return i},heron(){const i=new Ct;ie(i,new Ve(.22,6,4),"#9aa3ab",0,.85,0).scale.set(1,.8,1.6),ie(i,fn(.04,.05,.55,5),"#c8ced2",0,1.2,.18,-.3),ie(i,new Ve(.07,6,4),"#e8eaec",0,1.47,.27),ie(i,new ei(.025,.22,4),"#d8b34a",0,1.47,.42,Math.PI/2);for(const t of[-.06,.06])ie(i,fn(.012,.012,.7,3),"#c9a24a",t,.35,0);return i}};class Fx{constructor(t,e,n,s,o,r){U(this,"group",new Ct);U(this,"placements",new Map);U(this,"anglerSpots",[]);U(this,"gardens",[]);this.route=t,this.ww=e,this.terrain=n;const a=Si(4242),l=t.length,c=(p,x=6)=>r.some(M=>Math.abs(M.s-p)<M.w/2+x),h=(p,x)=>e.gates.some(M=>Math.abs(M.s-p)<x),f=p=>e.bodies[e.bodyIndexAt(p)].kind==="chamber",d=p=>e.windingHoles.some(x=>Math.abs(x-p)<42),u=p=>{const[x,M]=t.point(p,30*pr),[v,T]=t.point(p,30*oe);return Math.max(n.urbanAt(x,M),n.urbanAt(v,T))};let m=60;for(let p=20;p<l-20;p+=2){if(c(p,8)||h(p,10))continue;const x=u(p);x>.3&&Math.round(p)%32===0&&this.add("lamp",p,e.halfWidthAt(p)+3.25,"towpath",-Math.PI/2),p>m&&!o.zoneAt(p)&&!n.cliffSide(p,oe)&&(m=p+140+a()*160,this.add("bench",p,e.halfWidthAt(p)+3.6,"towpath",0),x>.2&&this.add("bin",p+1.4,e.halfWidthAt(p)+3.7,"towpath",0)),x>.35&&Math.round(p)%380===0&&this.add("lifebuoy",p,e.halfWidthAt(p)+3.3,"towpath",0)}for(const p of e.groups){const x=p.gates[0].s,M=p.gates.at(-1).s;this.add("lifebuoy",x-6,e.halfWidthAt(x-6)+3.3,"towpath",0),this.add("lifebuoy",M+6,e.halfWidthAt(M+6)+3.3,"towpath",0);for(const T of[x+4,M-4,(x+M)/2])this.add("tub",T,e.halfWidthAt(T)+2.2,"towpath",0),this.add("tub",T+1.2,e.halfWidthAt(T)+2.2,"offside",0);const v=(x+M)/2;if(!p.staircase&&u(v)<.45){const T=e.halfWidthAt(v)+10,[w,y]=t.point(v,T*oe);s.isFree(w,y)&&this.add("cottage",v,T,"land",0)}}let _=-1,g="none";for(let p=10;p<l-10;p+=2){if(p>_){_=p+60;const T=u(p);g=T<.3?a()<.85?"hedge":"none":T>.4?a()<.8?"fence":"none":a()<.5?"hedge":"fence"}if(g==="none"||c(p,4)||f(p)||h(p,6)||d(p))continue;const x=e.halfWidthAt(p)+2.4,[M,v]=t.point(p,x*pr);s.isFree(M,v)&&(g==="fence"?this.add("fence",p,x,"offside",0):Math.round(p)%4===0&&this.add("hedge",p,x,"offside",0))}for(let p=10;p<l-10;p+=3){if(c(p,6)||f(p)||h(p,15)||d(p))continue;const x=u(p);a()<(x<.3?.45:.12)&&this.add("reeds",p,e.halfWidthAt(p)-.25,"water",a()*6),x<.35&&a()<.3&&!n.cliffSide(p,oe)&&this.add("flowers",p,e.halfWidthAt(p)+4.6+a()*1.5,"towpath",a()*6),x<.2&&a()<.008&&this.add("heron",p,e.halfWidthAt(p)+.9,"offside",Math.PI/2*pr+(a()-.5))}for(const p of o.zones){if(p.kind!=="stop"||!/pub|bar/.test(p.poi.kind))continue;const x=(p.s0+p.s1)/2;for(const[M,v,T]of[[-5,6,"picnic"],[0,7.5,"picnic"],[5,6,"picnic"],[-2.5,7,"parasol"],[3,6.5,"parasol"]])if(this.add(T,x+M,e.halfWidthAt(x)+v,"land",0),T==="picnic"){const[w,y]=t.point(x+M,(e.halfWidthAt(x)+v)*oe);this.gardens.push({x:w,z:y,y:n.bankTop(x),ry:Math.atan2(t.frame(x).tx,t.frame(x).tz)})}}for(let p=150;p<l-80;p+=70+a()*90)u(p)>.55||c(p,15)||h(p,45)||o.zoneAt(p)||f(p)||o.boats.some(x=>Math.abs(x.s-p)<x.halfL+8)||this.anglerSpots.push({s:p});this.build()}add(t,e,n,s,o){if(e<1||e>this.route.length-1)return;const r=s==="offside"||s==="water"?pr:oe,a=this.route.frame(e),l=a.x+a.nx*n*r,c=a.z+a.nz*n*r;let h;s==="water"?h=this.ww.levelAt(e):s==="land"?h=this.terrain.heightAt(l,c):h=n<this.ww.halfWidthAt(e)+3.4?this.terrain.bankTop(e):this.terrain.landHeight(l,c,e,n*r);const f=Math.atan2(-a.nx*r,-a.nz*r),d=new he().compose(new I(l,h,c),new _n().setFromAxisAngle(new I(0,1,0),f+o),new I(1,1,1));this.placements.has(t)||this.placements.set(t,[]),this.placements.get(t).push(d)}build(){for(const[t,e]of this.placements){const n=oi(Ox[t]()),s=new mn(n,Qn(),e.length);e.forEach((o,r)=>s.setMatrixAt(r,o)),s.castShadow=t!=="flowers"&&t!=="reeds",s.receiveShadow=!0,s.name=`decor:${t}`,this.group.add(s)}}get counts(){return Object.fromEntries([...this.placements].map(([t,e])=>[t,e.length]))}}const ro=6,Ra=4,Ca=380,wn=new he,mi=new _n,ao=new I,lo=new I(1,1,1),mr=new I(0,1,0);function kx(i,t){const e=ni({...i,coat:"#ffffff"});t(e);const n=new Ct;n.add(e.group);const s=o=>o.userData.part==="coat";return{coat:oi(n,void 0,s),rest:oi(n,void 0,o=>!s(o))}}class gr{constructor(t,e,n,s,o){U(this,"meshes",[]);for(const r of e){const a=[];for(let l=0;l<n;l++){const c=kx(r,d=>o(d,l)),h=new mn(c.coat,Wh(),s),f=new mn(c.rest,Wh(),s);for(const d of[h,f])d.count=0,d.castShadow=!0,d.frustumCulled=!1,d.instanceMatrix.setUsage(Gi),t.add(d);a.push({coat:h,rest:f})}this.meshes.push(a)}}begin(){for(const t of this.meshes)for(const{coat:e,rest:n}of t)e.count=n.count=0}put(t,e,n,s){const{coat:o,rest:r}=this.meshes[t%this.meshes.length][e%this.meshes[0].length],a=o.count++;r.count++,o.setMatrixAt(a,n),r.setMatrixAt(a,n),o.setColorAt(a,s)}end(){for(const t of this.meshes)for(const{coat:e,rest:n}of t)e.instanceMatrix.needsUpdate=n.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}}const Wh=()=>new Kt({vertexColors:!0,roughness:.75});function zx(){const i=new Ct,t=a=>new Kt({color:a});for(const a of[-.55,.55]){const l=new J(new on(.33,.03,5,12),t("#1b1b1b"));l.position.set(0,.33,a),l.rotation.y=Math.PI/2,i.add(l)}const e=new J(new Wt(.05,.05,.9),t("#2e86c1"));e.position.set(0,.62,0),e.rotation.x=-.12;const n=new J(new Wt(.04,.32,.04),t("#2e86c1"));n.position.set(0,.68,-.18);const s=new J(new Wt(.12,.05,.22),t("#1b1b1b"));s.position.set(0,.86,-.18);const o=new J(new Wt(.04,.42,.04),t("#2e86c1"));o.position.set(0,.78,.45);const r=new J(new Wt(.5,.035,.035),t("#1b1b1b"));return r.position.set(0,.99,.43),i.add(e,n,s,o,r),oi(i)}function Bx(){const i=new Ct,t=o=>new Kt({color:o}),e=new J(new Wt(.22,.22,.55),t("#8a5a2b"));e.position.y=.35;const n=new J(new Wt(.18,.18,.2),t("#7a4a22"));n.position.set(0,.5,.33),i.add(e,n);for(const[o,r]of[[-.08,-.2],[.08,-.2],[-.08,.2],[.08,.2]]){const a=new J(new Wt(.05,.25,.05),t("#6a3a1a"));a.position.set(o,.12,r),i.add(a)}const s=new J(new Wt(.04,.04,.22),t("#8a5a2b"));return s.position.set(0,.48,-.36),s.rotation.x=.6,i.add(s),oi(i)}function Xh(i){const t=new Ct,e=a=>new Kt({color:a}),n=i?1.9:1,s=new J(new Ve(.16*n,6,4),e(i?"#f4f4f0":"#8a6a4a"));if(s.scale.set(.8,.55,1.3),s.position.y=.05*n,t.add(s),i){const a=new J(new qt(.035,.05,.5,5),e("#f4f4f0"));a.position.set(0,.32,.2),a.rotation.x=.25,t.add(a)}const o=new J(new Ve(.07*(i?1.1:1),6,4),e(i?"#f4f4f0":"#2f6b3a"));o.position.set(0,i?.58:.17,i?.28:.16);const r=new J(new ei(.03,.1,4),e(i?"#e07a2a":"#e2b23a"));return r.position.set(0,o.position.y-.01,o.position.z+.09),r.rotation.x=Math.PI/2,t.add(o,r),oi(t)}class Hx{constructor(t,e,n,s,o,r){U(this,"group",new Ct);U(this,"events",[]);U(this,"movers",[]);U(this,"birds",[]);U(this,"anglers",[]);U(this,"walkers");U(this,"joggers");U(this,"riders");U(this,"bikes");U(this,"dogs");U(this,"ducks");U(this,"swans");U(this,"time",0);U(this,"rand",Si(31));this.route=t,this.ww=e,this.terrain=n,this.boat=s;const a=this.rand,l=Array.from({length:Ra},()=>Ei(a)),c=22;this.walkers=new gr(this.group,l,ro,c,(d,u)=>Al(d,u/ro*Math.PI*2)),this.joggers=new gr(this.group,l.slice(0,2),ro,c,(d,u)=>{Al(d,u/ro*Math.PI*2,1.5),d.armL.rotation.x-=.6,d.armR.rotation.x-=.6}),this.riders=new gr(this.group,l.slice(1,3),4,c,(d,u)=>ox(d,u/4*Math.PI*2)),this.bikes=new mn(zx(),Qn(),c),this.dogs=new mn(Bx(),Qn(),c);for(let d=0;d<c;d++){const u=d<14?"walk":d<18?"jog":"cycle",m={s:s.s+(a()-.5)*Ca*2,d:0,dir:a()<.5?1:-1,kind:u,phase:a()*10,speed:u==="walk"?1.1+a()*.4:u==="jog"?2.6+a()*.6:4+a()*1.5,dog:u==="walk"&&a()<.45,coat:new zt(fo[Math.floor(a()*fo.length)]),look:Math.floor(a()*Ra)};m.d=this.laneFor(m),this.movers.push(m)}for(const d of[this.bikes,this.dogs])d.castShadow=!0,d.instanceMatrix.setUsage(Gi),d.frustumCulled=!1,this.group.add(d);for(const d of o){const u=ni(Ei(a,{hairStyle:a()<.5?"cap":"beanie",coat:a()<.5?"#3d5a3d":"#5a4a3a"})),m=t.frame(d.s),_=(e.halfWidthAt(d.s)+.9)*oe,g=new Ct;g.add(u.group),Rl(u);const p=new J(new Wt(.5,.4,.35),new Kt({color:"#3d5a3d"}));p.position.set(0,.2,-.1),g.add(p);const x=new J(new qt(.01,.02,4.2,4),new Kt({color:"#2b2b2b"}));x.position.set(.25,1.3,1.6),x.rotation.x=1.05,g.add(x),g.position.set(m.x+m.nx*_,n.bankTop(d.s),m.z+m.nz*_),g.rotation.y=Math.atan2(-m.nx*oe,-m.nz*oe),this.group.add(g),this.anglers.push({s:d.s,person:u,angryUntil:0,lastGrumble:-99})}const h=new gr(this.group,l,1,64,d=>Rl(d));h.begin();for(const d of r)for(const u of[-1,1])if(!(a()<.35))for(const m of[-.5,.5]){if(a()<.4)continue;const _=new I(m,0,u*.62).applyAxisAngle(mr,d.ry);mi.setFromAxisAngle(mr,d.ry+(u>0?Math.PI:0)),wn.compose(ao.set(d.x+_.x,d.y,d.z+_.z),mi,lo),h.put(Math.floor(a()*Ra),0,wn,new zt(fo[Math.floor(a()*fo.length)]))}h.end();let f=0;for(let d=120;d<t.length-60;d+=160+a()*260){if(e.bodies[e.bodyIndexAt(d)].kind!=="pound")continue;const u=a()<.22,m=u?2:2+Math.floor(a()*4);f++;for(let _=0;_<m;_++)this.birds.push({s:d+(a()-.5)*8,d:(a()-.5)*5,vs:0,vd:0,swan:u,heading:a()*6,flock:f,lastQuack:-99})}this.ducks=new mn(Xh(!1),Qn(),Math.max(1,this.birds.filter(d=>!d.swan).length)),this.swans=new mn(Xh(!0),Qn(),Math.max(1,this.birds.filter(d=>d.swan).length));for(const d of[this.ducks,this.swans])d.instanceMatrix.setUsage(Gi),d.frustumCulled=!1,this.group.add(d)}laneFor(t){return this.ww.halfWidthAt(Te(t.s,0,this.route.length))+1.6+(t.dir>0?-.35:.35)}update(t){this.time+=t;const e=this.boat,n=this.route.length,s=e.speed*2.237>3;let o=0,r=0;for(const c of[this.walkers,this.joggers,this.riders])c.begin();this.movers.forEach(c=>{c.s+=c.dir*c.speed*t,c.phase+=t*c.speed*4.5,(Math.abs(c.s-e.s)>Ca||c.s<5||c.s>n-5)&&(c.s=Te(e.s+(this.rand()<.5?-1:1)*(Ca-20-this.rand()*60),5,n-5),c.dir=c.s>e.s?-1:1,this.rand()<.5&&(c.dir*=-1)),c.d+=(this.laneFor(c)-c.d)*Math.min(1,t*2);const h=this.route.frame(c.s),f=h.x+h.nx*c.d*oe,d=h.z+h.nz*c.d*oe,u=c.kind==="cycle"?0:Math.abs(Math.cos(c.phase))*(c.kind==="jog"?.05:.025),m=this.terrain.bankTop(c.s)+(c.kind==="cycle"?-.07:u),_=Math.atan2(h.tx,h.tz)+(c.dir>0?0:Math.PI);mi.setFromAxisAngle(mr,_),wn.compose(ao.set(f,m,d),mi,lo);const g=Math.floor(c.phase/(Math.PI*2)%1*ro);if((c.kind==="walk"?this.walkers:c.kind==="jog"?this.joggers:this.riders).put(c.look,c.kind==="cycle"?g%4:g,wn,c.coat),c.kind==="cycle"&&(wn.compose(ao.set(f,this.terrain.bankTop(c.s),d),mi,lo),this.bikes.setMatrixAt(o++,wn)),c.dog){const x=Math.sin(c.phase*.3)*.6+1.2,M=f-Math.sin(_)*x+h.nx*.5,v=d-Math.cos(_)*x+h.nz*.5;wn.compose(ao.set(M,this.terrain.bankTop(c.s)+Math.abs(Math.sin(c.phase*1.6))*.04,v),mi,lo),this.dogs.setMatrixAt(r++,wn)}}),this.bikes.count=o,this.dogs.count=r;for(const c of[this.walkers,this.joggers,this.riders])c.end();for(const c of[this.bikes,this.dogs])c.instanceMatrix.needsUpdate=!0;for(const c of this.anglers)s&&Math.abs(c.s-e.s)<14&&this.time-c.lastGrumble>20&&(c.lastGrumble=this.time,c.angryUntil=this.time+4,this.events.push({kind:"angler"})),Vi(c.person,this.time<c.angryUntil?"shake":"rest",this.time);let a=0,l=0;for(const c of this.birds){const h=c.s-e.s,f=c.d-e.d,d=Math.hypot(h,f);d<14?(c.vd+=Math.sign(f||1)*.6*t*(14-d),c.vs+=Math.sign(h||1)*.25*t*(14-d),d<5&&this.time-c.lastQuack>6&&!c.swan&&(c.lastQuack=this.time,this.events.push({kind:"quack"}))):(c.vs+=Math.sin(this.time*.3+c.flock*7+c.heading)*.05*t,c.vd+=Math.cos(this.time*.23+c.flock*3)*.04*t);const u=c.swan?.6:.9;c.vs=Te(c.vs*(1-t*.4),-u,u),c.vd=Te(c.vd*(1-t*.4),-u,u),c.s=Te(c.s+c.vs*t,5,n-5);const m=this.ww.halfWidthAt(c.s)-.4;c.d=Te(c.d+c.vd*t,-m,m),Math.abs(c.d)>=m&&(c.vd*=-.3);const _=this.route.frame(c.s),g=Math.atan2(_.tx*c.vs+_.nx*c.vd,_.tz*c.vs+_.nz*c.vd);Math.hypot(c.vs,c.vd)>.05&&(c.heading+=Math.atan2(Math.sin(g-c.heading),Math.cos(g-c.heading))*Math.min(1,t*3)),mi.setFromAxisAngle(mr,c.heading),wn.compose(ao.set(_.x+_.nx*c.d,this.ww.levelAt(c.s)+Math.sin(this.time*2+c.s)*.01,_.z+_.nz*c.d),mi,lo),c.swan?this.swans.setMatrixAt(l++,wn):this.ducks.setMatrixAt(a++,wn)}this.ducks.count=a,this.swans.count=l,this.ducks.instanceMatrix.needsUpdate=this.swans.instanceMatrix.needsUpdate=!0}}const Gx=5,Bn=(i,t={})=>new Kt({color:i,roughness:.6,...t});function Vx(){const i=new Ct,t=Bn("#b8bcc2",{metalness:.8,roughness:.3}),e=(s,o,r,a,l,c)=>{const h=new J(new Wt(s,o,r),t);h.position.set(a,l,c),i.add(h)};for(const s of[.45,.95])e(.55,.025,.025,0,s,.45),e(.55,.025,.025,0,s,-.45),e(.025,.025,.9,.27,s,0),e(.025,.025,.9,-.27,s,0);for(const s of[-.27,.27])for(const o of[-.45,.45])e(.025,.5,.025,s,.7,o);for(let s=-.35;s<=.36;s+=.14)e(.55,.012,.012,0,.45,s);const n=new J(new Wt(.6,.05,.05),Bn("#c0392b"));n.position.set(0,1.05,-.52),i.add(n);for(const s of[-.25,.25])for(const o of[-.4,.4]){const r=new J(new qt(.06,.06,.04,8),Bn("#2b2b2b"));r.rotation.z=Math.PI/2,r.position.set(s,.1,o),i.add(r)}return i}function Wx(){const i=new Ct;for(const n of[-.5,.5]){const s=new J(new on(.33,.03,5,14),Bn("#1b1b1b"));s.position.set(0,.33,n),s.rotation.y=Math.PI/2,i.add(s)}const t=new J(new Wt(.04,.04,1),Bn("#27ae60"));t.position.y=.55,i.add(t);const e=new J(new Wt(.5,.04,.04),Bn("#1b1b1b"));return e.position.set(0,.85,.45),i.add(e),i}function Xx(i){const t=new Ct,e=new J(new qt(.06,.1,i,5),Bn("#5a4632"));e.rotation.z=Math.PI/2,t.add(e);const n=new J(new qt(.02,.04,i*.4,4),Bn("#6a5440"));n.position.set(i*.15,.05,.12),n.rotation.set(0,.6,Math.PI/2),t.add(n);const s=new J(new sn(.3,0),Bn("#5c7a3a"));return s.position.set(-i*.4,.05,0),s.scale.y=.4,t.add(s),t}const $h=["trolley","bike","branches"];class $x{constructor(t,e,n){U(this,"kind","trolley");U(this,"group",new Ct);U(this,"s",0);U(this,"active",!1);U(this,"spotted",!1);U(this,"progress",0);U(this,"clearing",!1);U(this,"obstacle",{x:0,z:0,psi:0,halfL:1.2,halfB:0});U(this,"pieces",[]);this.route=t,this.ww=e,this.terrain=n}place(t){this.reset(),this.s=t,this.active=!0,this.spotted=!1;const e=this.route.frame(t),n=this.ww.halfWidthAt(t),s=this.ww.levelAt(t),o=Math.atan2(e.tx,e.tz);Object.assign(this.obstacle,{x:e.x,z:e.z,psi:o,halfB:n});const r=(a,l,c,h,f,d,u,m)=>{u.position.set(e.x+e.nx*a+e.tx*l,s+c,e.z+e.nz*a+e.tz*l),u.rotation.set(f,o+h,d),this.group.add(u);const[_,g]=this.route.point(t+m*.6,(n+1.5+Math.abs(m)*.25)*oe);this.pieces.push({obj:u,from:u.position.clone(),fromRot:u.rotation.clone(),to:new I(_,this.terrain.bankTop(t)+.05,g)})};if(this.kind=$h[Math.floor(Math.random()*$h.length)],this.kind==="trolley")r(0,0,-.55,.4,.5,.3,Vx(),0);else if(this.kind==="bike")r(0,.2,-.35,1.2,1.2,.2,Wx(),0);else for(let a=0;a<6;a++){const l=-n+.6+a/5*(n*2-1.2);r(l,a%2?.4:-.4,.02,.3+a*.5,0,0,Xx(1.6+a%3*.6),a-3)}for(let a=0;a<4;a++){const l=new J(a%2?new sn(.2,0):new qt(.04,.04,.12,8),Bn(["#f2f2f2","#c0392b","#3a3a3a","#2e86c1"][a]));a%2?l.scale.y=.6:l.rotation.z=Math.PI/2,r(-n+1+a*(n*.6),a%2?.7:-.6,.05,a,0,0,l,a-2)}}get description(){return{trolley:{spotted:"Uh-oh: a shopping trolley is jammed in the canal ahead, right in your way.",cleared:"Cleared! One dripping shopping trolley now sits on the towpath. Tesco will be thrilled."},bike:{spotted:"Uh-oh: someone has thrown a bike in the canal ahead, and it's blocking the way.",cleared:"Cleared! A very sorry-looking bike now leans on the towpath fence."},branches:{spotted:"Uh-oh: a raft of fallen branches is jammed across the canal ahead.",cleared:"Cleared! The branches are stacked on the towpath. Someone will be glad of the kindling."}}[this.kind]}reset(){for(const t of this.pieces)this.group.remove(t.obj);this.pieces=[],this.active=!1,this.clearing=!1,this.progress=0}startClearing(){return!this.active||this.clearing?!1:(this.clearing=!0,!0)}update(t,e){return this.active?this.clearing?(this.progress=Math.min(1,this.progress+t/Gx),this.pieces.forEach((n,s)=>{const o=s/this.pieces.length*.85,r=Math.min(1,Math.max(0,(this.progress-o)/.15));r<=0||(n.obj.position.lerpVectors(n.from,n.to,r),n.obj.position.y+=Math.sin(r*Math.PI)*1.4,n.obj.rotation.set(n.fromRot.x*(1-r),n.fromRot.y,n.fromRot.z*(1-r)+(r>.99?s%3*.4:0)))}),this.progress>=1?(this.active=!1,this.clearing=!1,!0):!1):(this.pieces.forEach((n,s)=>n.obj.position.y=n.from.y+Math.sin(e*1.3+s)*.03),!1):!1}}const qx=.75,Yx=1.6,qh=1.4;class jx{constructor(t,e,n,s){U(this,"group",new Ct);U(this,"staffed",new Set);U(this,"active",null);U(this,"helpers",new Map);U(this,"actKey","");U(this,"actAt",0);U(this,"driveTarget",null);U(this,"time",0);U(this,"busyGate",null);this.route=t,this.ww=e,this.terrain=n,this.boat=s,this.roster()}roster(){for(const t of this.helpers.values())for(const e of t)this.group.remove(e.person.group);this.helpers.clear(),this.staffed.clear();for(const t of this.ww.groups){if(!(t.staircase||Math.random()<.4))continue;this.staffed.add(t);const e=[];for(const n of[-3,3]){const s=ni(Ei(Math.random,{coat:"#1d5fa8",trousers:"#2d3a55",longCoat:!1}));this.group.add(s.group),e.push({person:s,s:(t.gates[0].s+t.gates.at(-1).s)/2+n,offset:n})}this.helpers.set(t,e)}}isStaffed(t){return!!t&&this.staffed.has(t)}start(t){this.active=t,this.driveTarget=null,this.actKey=""}stop(){this.active=null,this.driveTarget=null,this.busyGate=null}update(t,e,n){if(this.time+=t,this.animateHelpers(t),!this.active)return"idle";if(!e||e.group!==this.active)return this.stop(),"done";const s=this.boat,o=n?1:-1;if(e.action==="drive"){if(this.driveTarget===null){const r=this.ww.gates.filter(a=>a.group===this.active&&(a.s-s.s)*o>-.5).sort((a,l)=>(a.s-l.s)*o)[0];if(!r)this.driveTarget=s.s+o*30;else{const a=this.ww.bodies[n?r.above:r.below];this.driveTarget=a.kind==="chamber"?(a.s0+a.s1)/2:r.s+o*(gn/2+14)}}this.creepTo(this.driveTarget,t)}else if(this.driveTarget=null,this.creepTo(null,t),e.gate&&e.action!=="wait"){this.busyGate=e.gate;const r=`${e.action}:${e.gate.label}`;if(r!==this.actKey)this.actKey=r,this.actAt=this.time+Yx+this.walkTime(e.gate);else if(this.time>=this.actAt){const a=e.gate;e.action==="paddlesUp"?a.wantPaddle=!0:e.action==="paddlesDown"?a.wantPaddle=!1:e.action==="close"?a.wantOpen=!1:e.action==="open"&&this.ww.levelsMatch(a)&&(a.wantOpen=!0),this.actKey=""}}else e.gate&&(this.busyGate=e.gate);return"running"}walkTime(t){const e=this.helpers.get(this.active);return e?Math.min(...e.map(n=>Math.abs(n.s-t.s)))/qh:0}creepTo(t,e){const n=this.boat,s=this.route.frame(n.s);let o=0;if(t!==null){const l=t-n.s;o=Math.sign(l)*Math.min(qx,Math.abs(l)*.5),Math.abs(l)<.05&&(o=0)}n.s+=o*e,n.d+=(0-n.d)*Math.min(1,e*.8);const r=this.route.frame(n.s);n.x=r.x+r.nx*n.d,n.z=r.z+r.nz*n.d;const a=Math.atan2(s.tx,s.tz)+(Math.cos(n.psi-Math.atan2(s.tx,s.tz))>=0?0:Math.PI);n.psi+=Math.atan2(Math.sin(a-n.psi),Math.cos(a-n.psi))*Math.min(1,e*1.5),n.u=Math.abs(o),n.v=n.r=0,n.notch=0,n.thrust=0}animateHelpers(t){var e;for(const[n,s]of this.helpers){const o=this.active===n&&((e=this.busyGate)==null?void 0:e.group)===n;for(const r of s){const a=(n.gates[0].s+n.gates.at(-1).s)/2+r.offset,l=o?this.busyGate.s+r.offset*.9:a,c=Math.sign(l-r.s)*Math.min(Math.abs(l-r.s),qh*t);r.s+=c;const h=this.ww.halfWidthAt(r.s),f=r.offset<0?oe:-oe,[d,u]=this.route.point(r.s,(h+1.1)*f);r.person.group.position.set(d,this.terrain.bankTop(r.s)+(Math.abs(c)>.001?Math.abs(Math.sin(this.time*6))*.03:0),u);const m=this.route.frame(r.s);r.person.group.rotation.y=Math.abs(c)>.001?Math.atan2(m.tx*Math.sign(c),m.tz*Math.sign(c)):Math.atan2(-m.nx*f,-m.nz*f);const _=o&&Math.abs(r.s-l)<.5,g=this.busyGate,p=_&&!!g&&g.paddle>.02&&g.paddle<.98;Math.abs(c)>.001?Al(r.person,this.time*6):(sx(r.person),Vi(r.person,p?"wind":_&&g&&g.open>.02&&g.open<.98?"push":"rest",this.time))}}}}const Yh=new zt("#b0664d"),jh=new zt("#c9a58a"),Pa=new zt("#d0b896");class Zx{constructor(){U(this,"pos",[]);U(this,"col",[])}tri(t,e,n,s){for(const o of[t,e,n])this.pos.push(o.x,o.y,o.z),this.col.push(s.r,s.g,s.b)}quad(t,e,n,s,o){this.tri(t,e,n,o),this.tri(t,n,s,o)}mesh(){const t=new me;t.setAttribute("position",new $t(this.pos,3)),t.setAttribute("color",new $t(this.col,3)),t.computeVertexNormals();const e=new J(t,new Kt({vertexColors:!0,roughness:.9,flatShading:!0,side:Ae}));return e.castShadow=e.receiveShadow=!0,e}}class Kx{constructor(t,e,n,s){U(this,"group",new Ct);this.route=t,this.ww=e,this.terrain=n;const o=new Zx;for(const r of s.walls??[]){const a=[];for(let l=0;l<r.p.length;l+=2)a.push([r.p[l],r.p[l+1]]);r.kind==="gate"?this.gate(o,a):r.closed?this.extrude(o,a,2.4,Yh,jh):this.extrude(o,Jx(a,1.3),2.4,Yh,jh)}this.group.add(o.mesh()),s.bridgeOfSighs&&this.group.add(this.bridgeOfSighs(s.bridgeOfSighs))}ground(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s),o=Math.sign(n.d||1)*Math.max(n.dist,s+7);return this.terrain.landHeight(t,e,n.s,o)}extrude(t,e,n,s,o){const r=e.length;if(r<3)return;const a=e.map(([h,f])=>this.ground(h,f)+n),l=(h,f)=>new I(e[h][0],f,e[h][1]);for(let h=0;h<r;h++){const f=(h+1)%r;t.quad(l(h,a[h]-n-7),l(f,a[f]-n-7),l(f,a[f]),l(h,a[h]),s)}const c=zn.triangulateShape(e.map(([h,f])=>new rt(h,f)),[]);for(const[h,f,d]of c)t.tri(l(h,a[h]),l(f,a[f]),l(d,a[d]),o);for(let h=0;h<r;h++){const f=(h+1)%r,d=Math.hypot(e[f][0]-e[h][0],e[f][1]-e[h][1]);for(let u=.6;u<d-.3;u+=2.2){const m=u/d,_=e[h][0]+(e[f][0]-e[h][0])*m,g=e[h][1]+(e[f][1]-e[h][1])*m,p=a[h]+(a[f]-a[h])*m;_r(t,_,p+.45,g,.9,.9,.5,Math.atan2(e[f][0]-e[h][0],e[f][1]-e[h][1]),s)}}}gate(t,e){const n=e.reduce((w,y)=>w+y[0],0)/e.length,s=e.reduce((w,y)=>w+y[1],0)/e.length;let o=0,r=0,a=0;for(const[w,y]of e)o+=(w-n)**2,r+=(y-s)**2,a+=(w-n)*(y-s);const l=.5*Math.atan2(2*a,o-r),c=Math.cos(l),h=Math.sin(l);let f=1/0,d=-1/0,u=1/0,m=-1/0;for(const[w,y]of e){const R=(w-n)*c+(y-s)*h,S=-(w-n)*h+(y-s)*c;f=Math.min(f,R),d=Math.max(d,R),u=Math.min(u,S),m=Math.max(m,S)}const _=this.ground(n,s),g=d-f,p=Math.max(4,m-u),x=Math.atan2(c,h),M=w=>[n+c*w,s+h*w],[v,T]=M((f+d)/2);_r(t,v,_+7.4,T,p,3.2,g,x,Pa);for(const w of[f+1.8,d-1.8]){const[y,R]=M(w);_r(t,y,_+2.9,R,p,5.8,3.6,x,Pa,6)}_r(t,v,_+9.4,T,p*.15,.9,g,x,Pa)}bridgeOfSighs(t){const e=this.route,n=this.ww,s=e.frame(t.s),o=n.levelAt(t.s),r=n.halfWidthAt(t.s),a=r+7.5,l=Math.max(...[-1,1].map(p=>{const[x,M]=e.point(t.s,a*p);return this.terrain.landHeight(x,M,t.s,a*p)}))+.1,c=a+1,h=r+3.6,f=l-.75,d=o+1.2,u=new Zi;u.moveTo(-c,o-2),u.lineTo(-h,o-2),u.lineTo(-h,d);for(let p=1;p<20;p++){const x=Math.PI-Math.PI*p/20;u.lineTo(Math.cos(x)*h,d+Math.sin(x)*(f-d))}u.lineTo(h,d),u.lineTo(h,o-2),u.lineTo(c,o-2),u.lineTo(c,l),u.lineTo(-c,l),u.closePath();const m=2,_=new J(new Gs(u,{depth:m,bevelEnabled:!1,curveSegments:12}).translate(0,0,-m/2),new Kt({color:"#a8654f",roughness:.9,flatShading:!0}));_.castShadow=_.receiveShadow=!0;const g=new Ct;return g.add(_),g.position.set(s.x,0,s.z),g.rotation.y=Math.atan2(-s.nz,s.nx),g.name="bridge-of-sighs",g}}function Jx(i,t){const e=[],n=[];for(let s=0;s<i.length;s++){const o=i[Math.max(0,s-1)],r=i[Math.min(i.length-1,s+1)];let a=r[0]-o[0],l=r[1]-o[1];const c=Math.hypot(a,l)||1;a/=c,l/=c,e.push([i[s][0]-l*t,i[s][1]+a*t]),n.push([i[s][0]+l*t,i[s][1]-a*t])}return[...e,...n.reverse()]}function _r(i,t,e,n,s,o,r,a,l,c=0){const h=Math.sin(a),f=Math.cos(a),d=(M,v,T)=>new I(t+M*f+T*h,e+v,n-M*h+T*f),u=s/2,m=r/2,_=-o/2-c,g=o/2,p=[d(-u,_,-m),d(u,_,-m),d(u,_,m),d(-u,_,m),d(-u,g,-m),d(u,g,-m),d(u,g,m),d(-u,g,m)],x=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7]];for(const[M,v,T,w]of x)i.quad(p[M],p[v],p[T],p[w],l)}const Qx=1.69,we=(i,t={})=>new Kt({color:i,roughness:.6,flatShading:!0,...t}),ve=(i,t,e,n,s,o,r=0,a=0,l=0)=>{const c=new J(t,e);return c.position.set(n,s,o),c.rotation.set(r,a,l),c.castShadow=!0,i.add(c),c},vo={buckby:{name:"a Buckby can",at:[.35,-6],build(){const i=new Ct;ve(i,new qt(.17,.19,.5,12),we("#1f4d3a"),0,.25,0),ve(i,new qt(.175,.185,.14,12),we("#a3291f"),0,.27,0);for(let t=0;t<4;t++)ve(i,new Ve(.035,6,4),we(t%2?"#f2c94c":"#f4f1e8"),Math.sin(t*1.6)*.18,.27,Math.cos(t*1.6)*.18);return ve(i,new qt(.1,.17,.08,12),we("#1f4d3a"),0,.54,0),ve(i,new qt(.06,.06,.06,10),we("#c9a24a",{metalness:.8,roughness:.3}),0,.6,0),ve(i,new on(.11,.015,6,12,Math.PI),we("#1f4d3a"),0,.56,0),ve(i,new qt(.025,.035,.22,6),we("#1f4d3a"),.17,.4,0,0,0,-.9),i}},bike:{name:"a bicycle",at:[-.15,2.4],build(){const i=new Ct,t=we("#1b1b1b"),e=we("#c0392b");for(const n of[-.5,.5])ve(i,new on(.3,.025,5,16),t,0,.04,n,Math.PI/2);return ve(i,new Wt(.04,.04,.95),e,0,.06,0),ve(i,new Wt(.04,.04,.5),e,.12,.06,.15,0,.5),ve(i,new Wt(.5,.03,.03),t,0,.07,.45),ve(i,new Wt(.1,.04,.2),t,0,.08,-.25),i}},lifebuoy:{name:"a lifebuoy",at:[-.4,-5.5],build(){const i=new Ct;for(let t=0;t<4;t++)ve(i,new on(.3,.075,6,6,Math.PI/2),we(t%2?"#f4f4f0":"#e0522f"),0,.08,0,Math.PI/2,0,t*Math.PI/2);return i}},brasses:{name:"polished chimney brasses",at:[.45,3.7],build(){const i=new Ct,t=we("#e2b84a",{metalness:.9,roughness:.2});for(const e of[.1,.32,.5])ve(i,new qt(.08,.08,.04,10),t,0,e,0);for(let e=0;e<5;e++)ve(i,new on(.03,.008,4,8),t,.06+e*.03,.42-e*.07,0,0,0,e%2?0:Math.PI/2);return i}},logs:{name:"a stack of firewood",at:[.3,-2.6],build(){const i=new Ct,t=we("#6b4a2e"),e=we("#c9a27a");let n=0;for(let s=0;s<3;s++)for(let o=0;o<4-s;o++,n++){const r=ve(i,new qt(.07,.07,.7,6),n%3?t:e,-.22+o*.15+s*.075,.07+s*.12,0,Math.PI/2);r.rotation.y=n%2*.05}return i}},coal:{name:"two sacks of coal",at:[.3,-1.3],build(){const i=new Ct;for(const t of[-.25,.25])ve(i,new sn(.22,1),we("#3a3a3a",{roughness:.95}),0,.14,t).scale.set(1,.65,1.15);return i}},cat:{name:"a ship’s cat",at:[-.3,4.5],build(){const i=new Ct,t=we("#d9822b");ve(i,new Ve(.16,10,8),t,0,.1,0).scale.set(1,.6,1.25),ve(i,new Ve(.09,10,8),t,.08,.13,.15);for(const e of[.03,.13])ve(i,new ei(.03,.06,4),t,e,.22,.15);return ve(i,new on(.13,.025,5,10,Math.PI*1.2),t,0,.04,0,Math.PI/2,0,1),i}},gnome:{name:"a garden gnome",at:[.4,-4.9],build(){const i=new Ct;return ve(i,new qt(.09,.11,.2,8),we("#2e86c1"),0,.1,0),ve(i,new Ve(.07,8,6),we("#f1c6a5"),0,.26,0),ve(i,new ei(.06,.12,6),we("#f4f4f0"),0,.2,.05,.3),ve(i,new ei(.075,.2,8),we("#c0392b"),0,.4,0),i}},sunflower:{name:"a sunflower in a pot",at:[.4,1.4],build(){const i=new Ct;return ve(i,new qt(.15,.11,.22,8),we("#9b5a3c"),0,.11,0),ve(i,new qt(.015,.02,.7,5),we("#4f7a33"),0,.55,0),ve(i,new qt(.13,.13,.03,12),we("#f2c94c"),0,.92,.02,1.2),ve(i,new qt(.06,.06,.04,10),we("#5a3d22"),0,.92,.04,1.2),i}}},tM=["buckby","bike","lifebuoy","brasses"],eM=["cat","gnome","sunflower"];class nM{constructor(t){U(this,"owned",new Set);U(this,"meshes",new Map);this.boat=t;try{for(const e of JSON.parse(localStorage.getItem("canal.roof")??"[]"))e in vo&&this.show(e)}catch{}}has(t){return this.owned.has(t)}give(t){if(this.owned.has(t))return!1;this.show(t);try{localStorage.setItem("canal.roof",JSON.stringify([...this.owned]))}catch{}return!0}nextFrom(t){return t.find(e=>!this.owned.has(e))??null}show(t){this.owned.add(t);const e=vo[t],n=e.build();n.position.set(e.at[0],Qx,e.at[1]),this.boat.add(n),this.meshes.set(t,n)}}const Rs=i=>new Kt({color:i,roughness:.85,flatShading:!0});function Ku(i,t){const e=document.createElement("canvas");e.width=256,e.height=128;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,256,128),n.fillStyle="#f6efdd",n.font="800 34px Nunito, sans-serif",n.textAlign="center",n.textBaseline="middle",i.split(`
`).forEach((r,a,l)=>n.fillText(r,128,64+(a-(l.length-1)/2)*40,236));const s=new Ln(e);s.colorSpace=Ee;const o=new J(new ri(.8,.4),new Kt({map:s,side:Ae}));return o.position.y=1,o}function iM(){const i=new Ct,t=Rs("#6b4a2e"),e=Rs("#c9a27a");for(let r=0;r<4;r++)for(let a=0;a<6-r;a++){const l=new J(new qt(.08,.08,.6,6),(a+r)%3?t:e);l.rotation.x=Math.PI/2,l.position.set(-.4+a*.17+r*.085,.08+r*.14,0),l.castShadow=!0,i.add(l)}const n=new J(new Wt(.3,.3,.25),Rs("#3d5a3d"));n.position.set(.85,.15,0),i.add(n);const s=Ku(`LOGS £5
honesty box`,"#3d5a3d");s.position.set(.85,.95,0);const o=new J(new Wt(.06,.8,.06),Rs("#5a4632"));return o.position.set(.85,.5,-.05),i.add(s,o),i}function sM(){const i=new Ct;for(let n=0;n<5;n++){const s=new J(new sn(.24,1),Rs("#3a3a3a"));s.scale.set(1,.7,1.2),s.position.set(-.5+n%3*.45,.16+Math.floor(n/3)*.3,0),s.castShadow=!0,i.add(s)}const t=Ku(`COAL
& kindling`,"#2b2b2b");t.position.set(.85,.95,0);const e=new J(new Wt(.06,.8,.06),Rs("#5a4632"));return e.position.set(.85,.5,-.05),i.add(t,e),i}class oM{constructor(t,e,n,s,o){U(this,"group",new Ct);U(this,"list",[]);for(const r of s){const a=r.item==="logs"?iM():sM(),l=t.frame(r.s),c=(e.halfWidthAt(r.s)+2.2)*oe;a.position.set(l.x+l.nx*c,n.bankTop(r.s),l.z+l.nz*c),a.rotation.y=Math.atan2(l.tx,l.tz)+Math.PI/2*oe,a.visible=!o(r.item),this.group.add(a),this.list.push({...r,group:a,verb:r.item==="logs"?"Load the logs (drop a fiver in the honesty box)":"Load a couple of sacks of coal",done:r.item==="logs"?"Logs loaded onto the roof. The stove will be roaring tonight.":"Two sacks of coal on the roof. Toasty."})}}near(t){return this.list.find(e=>e.group.visible&&Math.abs(e.s-t)<22)}}const rM=1.435,Zh=650,aM=18,Oi=20,bs=3;class lM{constructor(t,e,n,s,o){U(this,"group",new Ct);U(this,"lines",[]);U(this,"cars",[]);U(this,"run",null);U(this,"nextRun",12);U(this,"time",0);U(this,"rumble",0);this.route=t,this.ww=e,this.terrain=n,this.bridges=s;const r=s.placed.find(p=>p.data.kind==="rail");if(!r)return;const a=[r.x,r.z],l=o.map(p=>{const x=[];for(let M=0;M<p.p.length;M+=2)x.push([p.p[M],p.p[M+1]]);return{pts:x,bridge:p.b===1}}),c=p=>Math.min(...p.pts.map(x=>Math.hypot(x[0]-a[0],x[1]-a[1]))),h=p=>`${p[0]},${p[1]}`,f=new Map;l.forEach((p,x)=>{for(const M of[p.pts[0],p.pts.at(-1)])f.set(h(M),[...f.get(h(M))??[],x])});const d=new Set,u=p=>{for(let x=0;x<200;x++){const M=p.at(-1),v=p.at(-2),T=M[0]-v[0],w=M[1]-v[1];let y=-1,R=.7,S=[];for(const b of f.get(h(M))??[]){if(d.has(b))continue;const C=l[b].pts,O=h(C[0])===h(M)?C:[...C].reverse(),B=O[1][0]-O[0][0],z=O[1][1]-O[0][1],N=(T*B+w*z)/(Math.hypot(T,w)*Math.hypot(B,z)||1);N>R&&(R=N,y=b,S=O)}if(y<0)return;d.add(y),p.push(...S.slice(1))}},m=l.map((p,x)=>({w:p,i:x})).filter(({w:p})=>p.bridge&&c(p)<30);for(const{w:p,i:x}of m){if(d.has(x))continue;d.add(x);const M=[...p.pts];u(M);const v=[...p.pts].reverse();u(v);const T=[...v.reverse().slice(0,-p.pts.length),...M];if(T.length<4)continue;const w=[T[0]];for(let R=1;R<T.length;R++){const[S,b]=T[R-1],[C,O]=T[R],B=Math.max(1,Math.ceil(Math.hypot(C-S,O-b)/4));for(let z=1;z<=B;z++)w.push([S+(C-S)*z/B,b+(O-b)*z/B])}const y=[0];for(let R=1;R<w.length;R++)y.push(y[R-1]+Math.hypot(w[R][0]-w[R-1][0],w[R][1]-w[R-1][1]));y.at(-1)<300||this.lines.push({pts:w,ys:this.gradedHeights(w,y,a),cum:y})}const _=new Set(d);this.buildTrack(this.lines.map(p=>({pts:p.pts,ys:p.ys}))),this.buildTrack(l.map((p,x)=>({w:p,i:x})).filter(({w:p,i:x})=>!_.has(x)&&c(p)<Zh).map(({w:p})=>({pts:p.pts,ys:null}))),o.forEach((p,x)=>{(_.has(x)||c(l[x])<Zh)&&(p.skip=!0)});const g=p=>{const x=oi(cM(p)),M=new J(x,Qn());M.castShadow=!0;const v=new Ct;return v.add(M),v.visible=!1,this.group.add(v),v};for(let p=0;p<bs;p++)this.cars.push(g(p===0||p===bs-1));this.cars[bs-1].children[0].rotation.y=Math.PI}gradedHeights(t,e,n){const s=t.map(([c,h])=>this.trackY(c,h));let o=0;t.forEach((c,h)=>{Math.hypot(c[0]-n[0],c[1]-n[1])<Math.hypot(t[o][0]-n[0],t[o][1]-n[1])&&(o=h)});const r=s[o],a=s.map((c,h)=>{let f=0,d=0;for(let u=h;u>=0&&e[h]-e[u]<40;u--)f+=s[u],d++;for(let u=h+1;u<s.length&&e[u]-e[h]<40;u++)f+=s[u],d++;return f/d}),l=.02;return a.map((c,h)=>{const f=l*Math.abs(e[h]-e[o]);c=Math.min(r+f,Math.max(r-f,c));const d=this.route.project(t[h][0],t[h][1]),u=this.bridges.rampAt(d.s,d.d);return u.onDeck?Math.max(c,u.y+.25):c})}trackY(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s),o=n.dist<s+3.5?this.terrain.bankTop(n.s):this.terrain.landHeight(t,e,n.s,n.d);return Math.max(o,this.bridges.rampAt(n.s,n.d).y)+.25}buildTrack(t){const e=[],n=[],s=[],o=new _n,r=new I(0,1,0),a=new I(1,1,1);for(const{pts:u,ys:m}of t)for(let _=0;_+1<u.length;_++){const[g,p]=u[_],[x,M]=u[_+1],v=Math.hypot(x-g,M-p);if(v<.01)continue;const T=(x-g)/v,w=(M-p)/v,y=-w,R=T;o.setFromAxisAngle(r,Math.atan2(T,w));const S=Math.ceil(v/.7);let b=null;for(let C=0;C<=S;C++){const O=g+T*(v*C)/S,B=p+w*(v*C)/S,z=m?m[_]+(m[_+1]-m[_])*C/S:this.trackY(O,B);C<S&&e.push(new he().compose(new I(O,z-.12,B),o,a));const N=[O,z,B];if(b){for(const yt of[-1,1]){const Gt=rM/2*yt,Ht=[b[0]+y*Gt,b[1],b[2]+R*Gt],K=[N[0]+y*Gt,N[1],N[2]+R*Gt];n.push(Ht[0],Ht[1]-.1,Ht[2],K[0],K[1]-.1,K[2],K[0],K[1],K[2]),n.push(Ht[0],Ht[1]-.1,Ht[2],K[0],K[1],K[2],Ht[0],Ht[1],Ht[2])}const W=1.7,G=[b[0]-y*W,b[1]-.2,b[2]-R*W],X=[b[0]+y*W,b[1]-.2,b[2]+R*W],dt=[N[0]-y*W,N[1]-.2,N[2]-R*W],vt=[N[0]+y*W,N[1]-.2,N[2]+R*W];s.push(...G,...dt,...X,...X,...dt,...vt)}b=N}}const l=new Wt(2.5,.12,.24),c=new mn(l,new Kt({color:"#5a4a3c",roughness:1}),e.length);e.forEach((u,m)=>c.setMatrixAt(m,u)),c.receiveShadow=!0,this.group.add(c);const h=new me;h.setAttribute("position",new $t(s,3)),h.computeVertexNormals();const f=new J(h,new Kt({color:"#6d635a",roughness:1,side:Ae}));f.receiveShadow=!0,this.group.add(f);const d=new me;d.setAttribute("position",new $t(n,3)),d.computeVertexNormals(),this.group.add(new J(d,new Kt({color:"#8d9196",metalness:.7,roughness:.35,side:Ae})))}at(t,e){const{pts:n,ys:s,cum:o}=t;e=Math.max(0,Math.min(o.at(-1),e));let r=1;for(;r<o.length-1&&o[r]<e;)r++;const a=(e-o[r-1])/(o[r]-o[r-1]||1);return[n[r-1][0]+(n[r][0]-n[r-1][0])*a,s[r-1]+(s[r]-s[r-1])*a,n[r-1][1]+(n[r][1]-n[r-1][1])*a]}update(t,e){if(this.time+=t,this.rumble=0,!this.lines.length)return;if(!this.run){for(const h of this.cars)h.visible=!1;if(this.time<this.nextRun)return;const l=Math.floor(Math.random()*this.lines.length),c=Math.random()<.5?1:-1;this.run={line:l,dir:c,dist:c>0?-10:this.lines[l].cum.at(-1)+Oi*bs+10}}const n=this.run,s=this.lines[n.line];n.dist+=n.dir*aM*t;const o=s.cum.at(-1);let r=1/0;this.cars.forEach((l,c)=>{const h=n.dist-n.dir*c*(Oi+1),f=h-n.dir*Oi,d=Math.max(h,f)>0&&Math.min(h,f)<o;if(l.visible=d,!d)return;const u=this.at(s,h),m=this.at(s,f),_=this.at(s,(h+f)/2);l.position.set(_[0],_[1],_[2]),l.rotation.set(0,Math.atan2(u[0]-m[0],u[2]-m[2]),0),l.rotateX(-Math.atan2(u[1]-m[1],Oi)),r=Math.min(r,l.position.distanceTo(e))}),this.rumble=Math.max(0,1-r/350),(n.dir>0?n.dist-bs*(Oi+1)>o:n.dist+bs*(Oi+1)<0)&&(this.run=null,this.nextRun=this.time+50+Math.random()*50)}}function cM(i){const t=new Ct,e=(o,r={})=>new Kt({color:o,...r}),n=(o,r,a,l,c,h,f)=>{const d=new J(new Wt(o,r,a),e(l));return d.position.set(c,h,f),t.add(d),d},s=Oi-.4;n(2.7,2.6,s,"#c8102e",0,2.25,0),n(2.72,.9,s*.98,"#3a3f45",0,2.5,0),n(2.74,.12,s*.98,"#f4f4f0",0,1.65,0),n(2.6,.25,s*.99,"#9aa0a6",0,3.6,0),n(2.5,.6,s*.9,"#2b2b2b",0,.75,0);for(const o of[-s/2+3,s/2-3]){n(2.2,.5,2.4,"#1b1b1b",0,.45,o);for(const r of[-.8,.8])for(const a of[-.75,.75]){const l=new J(new qt(.42,.42,.12,10),e("#3a3a3a"));l.rotation.z=Math.PI/2,l.position.set(a,.42,o+r),t.add(l)}}for(let o=0;o<2;o++)n(.06,2,.9,"#2b2b2b",o?1.36:-1.36,2.1,-s/2+1.6);if(i){const o=new J(new qt(1.35,1.35,2.6,8,1,!1,0,Math.PI),e("#c8102e"));o.rotation.set(Math.PI/2,0,Math.PI/2),o.scale.set(1,1,.5),o.position.set(0,2.25,s/2),t.add(o),n(2.2,1.2,.5,"#f2c200",0,1.4,s/2+.45),n(2,.7,.3,"#22282e",0,2.75,s/2+.45)}return t}const Ui=48,hM=.35,La=14,uM=.8,Kh=1.1;class dM{constructor(t,e,n){U(this,"mesh");U(this,"points",[]);U(this,"emitIn",0);U(this,"pos");U(this,"col");U(this,"uv");U(this,"churn");U(this,"washed",new Map);U(this,"time",0);this.route=t,this.ww=e;const s=Ui*4;this.pos=new Float32Array(s*3),this.col=new Float32Array(s*4),this.uv=new Float32Array(s*2);const o=[];for(const a of[0,1]){const l=a*Ui*2;for(let c=0;c<Ui-1;c++){const h=l+c*2,f=h+1,d=h+2,u=h+3;o.push(h,d,f,f,d,u)}}const r=new me;r.setAttribute("position",new Ue(this.pos,3).setUsage(Gi)),r.setAttribute("color",new Ue(this.col,4).setUsage(Gi)),r.setAttribute("uv",new Ue(this.uv,2).setUsage(Gi)),r.setIndex(o),this.mesh=new J(r,new Pn({map:fM(),vertexColors:!0,transparent:!0,depthWrite:!1,side:Ae})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.churn=new J(new ql(1,18),new Pn({color:"#f4f8f4",transparent:!0,opacity:0,depthWrite:!1})),this.churn.rotation.x=-Math.PI/2,this.churn.position.set(0,.04,-9.6),n.add(this.churn)}update(t,e,n,s,o,r){this.time+=t;for(const h of this.points)h.age+=t;for(;this.points.length&&this.points[0].age>La;)this.points.shift();const a=Oe(2.6,4.6,o);if(this.emitIn-=t,this.emitIn<=0)if(this.emitIn=hM,a>.02){const h=-Math.cos(s),f=Math.sin(s);this.points.push({s:e,x:n[0],z:n[1],nx:h,nz:f,age:0,strength:a,start:1}),this.points.length>Ui&&this.points.shift()}else this.points.length&&this.points.at(-1).strength>0&&(this.points.push({s:e,x:n[0],z:n[1],nx:-Math.cos(s),nz:Math.sin(s),age:0,strength:0,start:1}),this.points.length>Ui&&this.points.shift());this.col.fill(0);const l=[...this.points].reverse();for(const h of[0,1]){const f=h?1:-1,d=h*Ui*2;for(let u=0;u<Ui;u++){const m=l[Math.min(u,l.length-1)],_=(d+u*2)*3,g=(d+u*2)*4;if(!m)continue;const p=this.spread(m),x=this.ww.levelAt(m.s)+.03,M=u<l.length?m.strength*(1-m.age/La)**1.5*.75:0;for(const[v,T]of[[0,p-Kh/2],[1,p+Kh/2]])this.pos[_+v*3]=m.x+m.nx*T*f,this.pos[_+v*3+1]=x,this.pos[_+v*3+2]=m.z+m.nz*T*f,this.col.set([.95,.97,.95,M],g+v*4),this.uv.set([v,m.s*.12],(d+u*2+v)*2)}}this.mesh.geometry.getAttribute("position").needsUpdate=!0,this.mesh.geometry.getAttribute("color").needsUpdate=!0,this.mesh.geometry.getAttribute("uv").needsUpdate=!0;const c=this.churn.material;c.opacity=Te(r,0,1)*(.3+.1*Math.sin(this.time*11)),this.churn.scale.setScalar(.7+r*.6+.05*Math.sin(this.time*7))}spread(t){const e=this.ww.halfWidthAt(t.s);return Math.min(t.start+t.age*uM,e+.4)}washes(t){const e=[];for(const n of t){if(this.time-(this.washed.get(n)??-99)<12)continue;const s=this.route.project(n.x,n.z,n.s).d,o=Math.sign(s)||1;for(const r of this.points){if(r.strength<.15||Math.abs(r.s-n.s)>n.halfL)continue;const l=this.route.project(r.x,r.z,r.s).d+o*this.spread(r);if(o*l>=Math.abs(s)-n.halfB-.2){const c=r.strength*(1-r.age/La);if(c<.1)continue;this.washed.set(n,this.time),e.push({boat:n,strength:c});break}}}return e}}function fM(){const e=document.createElement("canvas");e.width=64,e.height=256;const n=e.getContext("2d"),s=n.createImageData(64,256);for(let r=0;r<256;r++)for(let a=0;a<64;a++){const l=a/63,c=Math.sin(l*Math.PI)**1.5,h=Math.random()**2.2,f=.5+.5*Math.sin(r*.35+Math.sin(a*.4)*2),d=c*Math.min(1,h*1.6+f*.25),u=(r*64+a)*4;s.data[u]=s.data[u+1]=s.data[u+2]=255,s.data[u+3]=d*255}n.putImageData(s,0,0);const o=new Ln(e);return o.wrapS=Kn,o.wrapT=Os,o}const Jh=new Map;function pM(i,t){const e=JSON.stringify(i),n=Jh.get(e);if(n)return n;const s=160,o=200,r=new Uu({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});r.setSize(s,o,!1),r.outputColorSpace=Ee;const a=new Gl;a.add(new Xu("#ffffff","#8a8a7a",1.6));const l=new qu("#fff4e0",2.2);l.position.set(2,3,3),a.add(l);const c=ni(i);t==null||t(c),c.group.rotation.y=.5,a.add(c.group);const h=new nn(30,s/o,.1,20);h.position.set(0,1,4.2),h.lookAt(0,.92,0),r.render(a,h);const f=r.domElement.toDataURL("image/png");return r.dispose(),r.forceContextLoss(),Jh.set(e,f),f}const Qh=["#c0392b","#2e86c1","#f4f4f0","#2b2b2b","#7f8c8d","#27ae60","#d35400","#1d3557","#b8b8b8","#8e44ad"],zi=4.3;function mM(){const i=new Ct,t=new Ct,e=o=>new Kt({color:o}),n=(o,r,a,l,c,h,f=0)=>{const d=new J(new Wt(r,a,l),e(c));d.position.set(0,h,f),o.add(d)};n(i,1.78,.62,zi,"#ffffff",.6),n(i,1.6,.5,2.3,"#ffffff",1.15,-.25),n(t,1.62,.42,2,"#26313a",1.12,-.2),n(t,1.82,.16,.2,"#1b1b1b",.42,zi/2),n(t,1.82,.16,.2,"#1b1b1b",.42,-zi/2),n(t,1.4,.12,.05,"#f6efc8",.72,zi/2+.01),n(t,1.4,.12,.05,"#b8241b",.72,-zi/2-.01);for(const o of[-.82,.82])for(const r of[-1.35,1.35]){const a=new J(new qt(.33,.33,.22,10),e("#1b1b1b"));a.rotation.z=Math.PI/2,a.position.set(o,.33,r),t.add(a)}const s=o=>{const r=new Ct;return r.add(o),oi(r)};return{body:s(i),rest:s(t)}}class gM{constructor(t){U(this,"group",new Ct);U(this,"paths",[]);U(this,"cars",[]);U(this,"body");U(this,"rest");U(this,"rand",Si(99));U(this,"respawn");for(const a of t){const l=[0];for(let c=1;c<a.pts.length;c++)l.push(l[c-1]+Math.hypot(a.pts[c][0]-a.pts[c-1][0],a.pts[c][2]-a.pts[c-1][2]));l.at(-1)<40||this.paths.push({pts:a.pts,cum:l,lane:Math.min(2.2,Math.max(1.1,a.w/4)),bridge:a.bridge})}const e=this.paths.map(a=>(a.bridge?12:1)*Math.min(3,a.cum.at(-1)/120)),n=e.reduce((a,l)=>a+l,0),s=this.paths.length?Math.min(60,Math.round(n*1.5)):0,o=mM();this.body=new mn(o.body,Qn(),Math.max(1,s)),this.rest=new mn(o.rest,Qn(),Math.max(1,s));for(const a of[this.body,this.rest])a.castShadow=!0,a.frustumCulled=!1,a.instanceMatrix.setUsage(Gi),this.group.add(a);const r=()=>{let a=this.rand()*n;for(let l=0;l<e.length;l++)if((a-=e[l])<=0)return l;return e.length-1};for(let a=0;a<s;a++){const l=r(),c={path:l,dist:this.rand()*this.paths[l].cum.at(-1),dir:this.rand()<.5?1:-1,speed:8+this.rand()*5,colour:new zt(Qh[Math.floor(this.rand()*Qh.length)])};this.cars.push(c),this.body.setColorAt(a,c.colour)}this.body.count=this.rest.count=s,this.respawn=a=>{a.path=r(),a.dir=this.rand()<.5?1:-1,a.dist=a.dir>0?0:this.paths[a.path].cum.at(-1),a.speed=8+this.rand()*5}}at(t,e){e=Math.max(0,Math.min(t.cum.at(-1),e));let n=1;for(;n<t.cum.length-1&&t.cum[n]<e;)n++;const s=(e-t.cum[n-1])/(t.cum[n]-t.cum[n-1]||1),o=t.pts[n-1],r=t.pts[n];return[o[0]+(r[0]-o[0])*s,o[1]+(r[1]-o[1])*s,o[2]+(r[2]-o[2])*s]}update(t){const e=new he,n=new _n,s=new Cn(0,0,0,"YXZ"),o=new I,r=new I(1,1,1);this.cars.forEach((a,l)=>{const c=this.paths[a.path];a.dist+=a.dir*a.speed*t,(a.dist<0||a.dist>c.cum.at(-1))&&this.respawn(a);const h=this.paths[a.path],f=this.at(h,a.dist+a.dir*zi*.45),d=this.at(h,a.dist-a.dir*zi*.45),u=f[0]-d[0],m=f[2]-d[2],_=Math.hypot(u,m)||1,g=m/_,p=-u/_;o.set((f[0]+d[0])/2+g*h.lane,(f[1]+d[1])/2,(f[2]+d[2])/2+p*h.lane),s.set(-Math.atan2(f[1]-d[1],_),Math.atan2(u,m),0),n.setFromEuler(s),e.compose(o,n,r),this.body.setMatrixAt(l,e),this.rest.setMatrixAt(l,e)}),this.body.instanceMatrix.needsUpdate=this.rest.instanceMatrix.needsUpdate=!0}}const co=[1,2,5,10,30],Da=80;function _M(i,t){return{pub:`You moor up and pop into ${i} for a pint of something local. An hour slips happily by.`,bar:`A drink at ${i}, watching the boats go by. An hour slips happily by.`,cafe:`Tea and a slab of cake at ${i}, eaten on the roof. An hour slips happily by.`,ice_cream:`An ice cream from ${i}, eaten on the roof. Bliss.`,restaurant:`A proper meal at ${i}. Nobody has to cook in the galley tonight. An hour slips happily by.`,hotel:`You stretch your legs and have a nose round ${i}. An hour slips happily by.`}[t]??`You stop at ${i}. An hour slips happily by.`}function vM(i,t){return{Northgate:"Above you: the Northgate, one of the medieval gateways through Chester’s city walls. The canal runs along the old moat.","Water Tower":"Off to the side: the Water Tower, built in the 1320s to guard the old river port when the Dee still reached the walls.","Lead Shot Tower":"That tall brick tower is the Lead Shot Tower (1799), where molten lead was dropped from the top to make shot.","Bridge of Sighs":"Overhead: the Bridge of Sighs (1793). Condemned prisoners from the Northgate gaol were led across it to the chapel for their last rites.","King Charles Tower":"Up on the walls: King Charles’ Tower. Legend has it Charles I watched his army lose the Battle of Rowton Moor from here in 1645.","Morgan's Mount":"Morgan’s Mount, a little gun platform on the walls from the Civil War siege of Chester.","Pemberton's Parlour":"Pemberton’s Parlour, a tower on the walls named after an 18th-century ropemaker who watched his men at work from it."}[i]??`Look out: ${i}${t==="tower"?", part of the old city walls":""}.`}const tu=['% rocks in your wash. "Tickover past moored boats, please!"',"A mug of tea slides off the roof of %. Slow down past moored boats!","The owner of % gives you a Look. Ease off to tickover when passing."],xM=1/60,Ia=2.23694,Ju=document.getElementById("loading"),Qu=document.getElementById("loading-text"),MM=Ju.querySelector(".bar div");let yM=0;async function gi(i){Qu.textContent=i,MM.style.width=`${Math.min(100,++yM*11)}%`,await new Promise(t=>requestAnimationFrame(()=>setTimeout(t,0)))}async function bM(){await gi("Fetching the map…");const i=await _v("./data/chester.json");await document.fonts.ready;const t=document.getElementById("scene"),e=new Uu({canvas:t,antialias:!0});e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setSize(innerWidth,innerHeight),e.toneMapping=su,e.toneMappingExposure=.62,e.shadowMap.enabled=!0,e.shadowMap.type=nu;const n=new Gl,s=new nn(55,innerWidth/innerHeight,.4,4500);await gi("Surveying the canal…");const o=new vv(i.centreline),r=new Tv(i.locks,i.bridges,o.length,[4700,i.meta.towerWharfS-60]),a=[],l=[];for(let L=0;L<i.centreline.length;L+=2)a.push(i.centreline[L]),l.push(i.centreline[L+1]);const c=520,h={x0:Math.min(...a)-c,x1:Math.max(...a)+c,z0:Math.min(...l)-c,z1:Math.max(...l)+c},f=new Pv(o,r,h);f.cuttings=i.cuttings??[],f.setRivers(i.rivers),f.urbanAt=Gv(i.buildings,h);const d=i.parks.map(L=>{let F=1/0,$=-1/0,it=1/0,pt=-1/0;for(let ft=0;ft<L.p.length;ft+=2)F=Math.min(F,L.p[ft]),$=Math.max($,L.p[ft]),it=Math.min(it,L.p[ft+1]),pt=Math.max(pt,L.p[ft+1]);return{ring:L.p,x0:F,x1:$,z0:it,z1:pt}});f.parkAt=(L,F)=>d.some($=>L>=$.x0&&L<=$.x1&&F>=$.z0&&F<=$.z1&&Jl(L,F,$.ring)),await gi("Digging the cut…");const u=new $v(o,r,i.bridges,f);f.embankments=u.placed.filter(L=>L.data.kind==="road"&&L.data.w>3.5).map(L=>({x:L.x,z:L.z,ux:Math.sin(L.data.dir),uz:Math.cos(L.data.dir),deck:L.deck,halfSpan:L.halfSpan,halfWidth:L.data.w/2+2})),n.add(f.buildStrip()),await gi("Shaping the land…"),n.add(f.buildFar()),await gi("Filling it with water…");const m=new Uv(o,r);m.addRivers(i.rivers,f.riverLevel);for(const L of i.water){let F=0,$=0;const it=L.p.length/2;for(let pt=0;pt<L.p.length;pt+=2)F+=L.p[pt]/it,$+=L.p[pt+1]/it;o.project(F,$).dist<40||m.addPond(L.p,f.heightAt(F,$)-.25)}n.add(m.group),n.add(u.group),n.add(new Kx(o,r,f,i).group);const _=new lM(o,r,f,u,i.rails);n.add(_.group);const g=new Zv(o,r,f);n.add(g.group);const p=i.meta.towerWharfS+70,x=new Ex(o,r,f,i.bridges,i.meta.towerWharfS,p,i.pois??[]);n.add(x.group);const M=new Vv(i,o,r,f,u);await M.build(gi),n.add(M.group);const v=new gM(M.carPaths);n.add(v.group),await gi("Lighting the stove…");const T=new Jv(n,e),w=Ql();w.group.rotation.order="YXZ",n.add(w.group);const y=new px(o,r);y.placeAt(p),y.obstacles=[...x.boats];const R=new Lx(o,r,f,y),S=new nM(w.group),b=new dM(o,r,w.group);n.add(b.mesh),n.add(R.group);const C=new Ux(o,r,x,y);C.blockedAt=()=>W.filter(L=>L.active).map(L=>L.s),n.add(C.group);const O=new Fx(o,r,f,M,x,i.bridges);n.add(O.group);const B=new Hx(o,r,f,y,O.anglerSpots,O.gardens);n.add(B.group);let z=0;const N=new jx(o,r,f,y);n.add(N.group);const W=[],G=x.zones.find(L=>/Lock Keeper/.test(L.name)),X=[G?G.s1+30:1390,2185],dt=L=>{for(let F=0;F<120;F++){const $=L+(F%2?1:-1)*Math.ceil(F/2)*2;if(!(i.bridges.some(it=>Math.abs(it.s-$)<it.w/2+20)||r.gates.some(it=>Math.abs(it.s-$)<40))&&!x.zones.some(it=>$>it.s0-8&&$<it.s1+8)&&!x.boats.some(it=>Math.abs(it.s-$)<it.halfL+6)&&r.bodies[r.bodyIndexAt($)].kind==="pound")return $}return L};for(const L of X){const F=new $x(o,r,f);F.s=dt(L),x.clearAround(F.s,Da-10,y.obstacles),n.add(F.group),W.push(F)}const vt=new oM(o,r,f,[{item:"logs",s:dt(3620)},{item:"coal",s:dt(i.meta.towerWharfS-150)}],L=>S.has(L));for(const L of vt.list)x.clearAround(L.s,25,y.obstacles);n.add(vt.group);const yt=["Sam","Priya","Dave","Margaret","Tom","Aisha","Bill","Fran","Gethin","Rosie"],Gt=['"Any chance of a lift to %? My feet are killing me."',`"Going towards %? I'd love a ride, I've never been on a narrowboat."`,`"You couldn't drop me at %, could you? I'll work the locks!"`,`"Room for a little one? I'm meeting friends at %."`];let Ht="trip",K=0,ot=null;const Lt=()=>{if(!ot)return;const L=ot;ot=null,setTimeout(()=>n.remove(L.person.group),6e3)},ct=L=>{const F=ni({coat:"#3d4a3a",trousers:"#2d3a55",hair:"#9a9a9a",hairStyle:"cap",hat:"#4a3f33",longCoat:!0}),$=o.frame(L),it=(r.halfWidthAt(L)+1.4)*oe;F.group.position.set($.x+$.nx*it,f.bankTop(L),$.z+$.nz*it),F.group.rotation.y=Math.atan2(-$.nx*oe,-$.nz*oe),n.add(F.group),ot={person:F,turning:null},Ht="helper",Z.showOffer("On the towpath","Need a hand?",`An old boater in a flat cap has been watching for a while. "Having a spot of bother? Here, let me show you how it's done."`,"Yes please","I've got this")},Pt=L=>{if(!ot)return;R.castOff();const F=o.frame(L),$=Math.atan2(F.tx,F.tz),it=Math.cos(y.psi-$)>=0,pt=$+(it?Math.PI:0);let ft=Math.atan2(Math.sin(pt-y.psi),Math.cos(pt-y.psi));Math.abs(ft)<.3&&(ft=Math.PI),ot.turning={t:0,s:L,psi0:y.psi,psi1:y.psi+ft,x0:y.x,z0:y.z},Z.toast("The old boater hops aboard, takes the tiller and talks you through it…","info",5e3)};let It=null,Tt=null;const Qt=new Set;for(const L of x.zones)L.kind==="stop"&&x.addStopMarker(L);const nt=new Map,mt=x.zones.filter(L=>{var F;return L.kind==="stop"&&/pub|bar/.test(((F=L.poi)==null?void 0:F.kind)??"")}),D=(L=[])=>{const F=mt.filter(Zt=>!nt.has(Zt.id)&&!L.includes(Zt.id));if(!F.length)return;const $=F[Math.floor(Math.random()*F.length)],it=ni(Ei(Math.random)),pt=($.s0+$.s1)/2,ft=o.frame(pt),Vt=(r.halfWidthAt(pt)+1.4)*oe;it.group.position.set(ft.x+ft.nx*Vt,f.bankTop(pt),ft.z+ft.nz*Vt),it.group.rotation.y=Math.atan2(-ft.nx*oe,-ft.nz*oe),n.add(it.group),nt.set($.id,it)},kt=L=>{const F=nt.get(L);F&&(n.remove(F.group),nt.delete(L),D([L]))};for(let L=0;L<3;L++)D();const ut=L=>L.name.split(",")[0],Ut=L=>{Ht="trip",at.choose(L);const F=o.frame(y.s),$=Math.sin(y.psi)*F.tx+Math.cos(y.psi)*F.tz>=0?1:-1,it=St(at.current.zone),pt=(it.s0+it.s1)/2,ft=Math.min(y.s,pt),Vt=Math.max(y.s,pt),Zt=r.gates.filter(Ft=>Ft.s>ft&&Ft.s<Vt&&Ft.label!=="top gates").length,ae=Zt?` · ${Zt} lock${Zt>1?"s":""}`:"",le=(Math.abs(pt-y.s)/1e3).toFixed(1),ce=(pt-y.s)*$>0?`${le} km ahead${ae}`:`${le} km behind you: turn round at a winding hole${ae}`;Z.showOffer("Mission",at.current.title,`${at.current.brief}<br><b>${ce}</b>`)},xt=new Set;for(const L of Hi)x.addStart(L.from);const Xt=()=>{const L=Jt||!!at.result;Hi.forEach((F,$)=>x.showStart(F.from,!L&&!at.done.has($))),Nt.setMissionStarts(Hi.filter((F,$)=>!at.done.has($)&&!(Jt&&$===at.index)).map(F=>{const $=St(F.from);return o.point(($.s0+$.s1)/2,0)}),L)},Dt=L=>{if(Tt||It||!nt.has(L.id)||Z.offerOpen||at.result)return;Qt.add(L.id);const F=o.frame(y.s),$=Math.sin(y.psi)*F.tx+Math.cos(y.psi)*F.tz>=0?1:-1,it=le=>(le.s0+le.s1)/2,pt=x.zones.filter(le=>le!==L&&Math.abs(it(le)-y.s)>250&&Math.abs(it(le)-y.s)<1800);if(!pt.length)return;const ft=pt.filter(le=>Math.sign(it(le)-y.s)===$),Vt=ft.length?ft:pt,Zt=Vt.sort((le,ce)=>Math.abs(it(le)-y.s)-Math.abs(it(ce)-y.s))[Math.floor(Math.random()*Math.min(2,Vt.length))],ae=yt[Math.floor(Math.random()*yt.length)];It={name:ae,dest:Zt,from:L.name},setTimeout(()=>{if((It==null?void 0:It.name)!==ae||!R.moored||Z.offerOpen)return void(It=null);Ht="lift",Z.showOffer(`At ${L.name}`,`Fancy giving ${ae} a lift?`,Gt[Math.floor(Math.random()*Gt.length)].replace("%",ut(Zt)),"Hop aboard","Sorry, not today")},1800)},P=()=>{if(!It)return;const L=x.zoneAt(y.s);L&&kt(L.id);const F=ni(Ei(Math.random));F.group.position.set(0,.38+.47,17.4/2-2.3),Rl(F),w.group.add(F.group),Tt={name:It.name,dest:It.dest,person:F},Z.toast(`${Tt.name} hops aboard and settles in the bow. Next stop: ${ut(Tt.dest)}.`,"info",4500),It=null},E=()=>{if(!Tt)return;w.group.remove(Tt.person.group);const L=S.nextFrom(eM);L&&S.give(L),Z.toast(L?`${Tt.name} hops off with a cheery wave, and leaves you ${vo[L].name} for the roof. 🎁`:`${Tt.name} hops off with a cheery wave, and presses a slice of cake into your hand.`,"info",6e3),Tt=null},q=()=>{for(const L of W){const F=y.obstacles.indexOf(L.obstacle);F>=0&&y.obstacles.splice(F,1),L.place(L.s),y.obstacles.push(L.obstacle)}Nt.setHazards(W.filter(L=>L.active).map(L=>o.point(L.s,0)))},et=x.zones.filter(L=>L.kind==="stop"),lt=(i.pois??[]).filter(L=>L.type==="sight"),tt=new Set,Ot=new Set,at=new Dx(T.hour),St=L=>x.zones.find(F=>F.id===L);let Jt=!1;const ht=new gx,Rt=new Mx;ht.onFirstInput=()=>Rt.start(),t.addEventListener("pointerdown",()=>Rt.start());const Nt=new xx(i,o,r,h);Nt.addMooredBoats(x.boats),Nt.setPlaces([...x.zones.filter(L=>L.kind==="stop").map(L=>{const[F,$]=o.point((L.s0+L.s1)/2,0),it={pub:"🍺",bar:"🍸",cafe:"☕",restaurant:"🍽️",hotel:"🛏️",ice_cream:"🍦"}[L.poi.kind]??"⚓";return{x:F,z:$,icon:it,name:L.name}}),...(i.pois??[]).filter(L=>L.type==="sight").map(L=>({x:L.x,z:L.z,icon:"★",name:L.name}))]);const jt=()=>{const L=St(at.current.zone),[F,$]=o.point((L.s0+L.s1)/2,0);Nt.setDestination(F,$,L.name)};q();const Z=new _x(document.getElementById("hud"),L=>ht.push(L),Nt.el,Nt.bigEl);["localhost","127.0.0.1"].includes(location.hostname)&&Nt.enableDevTeleport(()=>[y.x,y.z],(L,F)=>{R.castOff(),N.stop();const $=o.frame(y.s),it=Math.sin(y.psi)*$.tx+Math.cos(y.psi)*$.tz>=0,pt=Math.min(o.length-12,Math.max(12,o.project(L,F).s));y.placeAt(pt,it),y.notch=0,Z.toast(`Moved to ${((pt-i.meta.towerWharfS)/1e3).toFixed(2)} km from Tower Wharf`,"info",2e3)}),Z.onGateTap=(L,F)=>{if(!N.active){if(!(ee!=null&&ee.adjacent.includes(L)))return Z.nope(L,"The lock-keeper looks after that one.");if(Be=L,F==="paddlesUp")L.wantPaddle=!0;else if(F==="paddlesDown")L.wantPaddle=!1;else if(F==="open"!==L.wantOpen){const $=r.toggleGate(L,Ys(L));$&&Z.nope(L,/in the way/.test($)?"The boat's in the way of the gates.":"The levels don't match yet: the gates won't budge.")}}},Z.onNotch=L=>{N.active&&(N.stop(),Z.toast("You take the tiller back.","info",2e3)),y.notch=L};const Bt=new sv(s,t);Bt.enableDamping=!0,Bt.minDistance=5,Bt.maxDistance=260,Bt.maxPolarAngle=1.48,Bt.enablePan=!1;let te=-10;const _e=new Yu,k=new rt;let Mt=null,Q=!1;const st=L=>{const F=t.getBoundingClientRect();return k.set((L.clientX-F.left)/F.width*2-1,-((L.clientY-F.top)/F.height)*2+1),_e.setFromCamera(k,s),_e.intersectObject(w.tillerHit,!1).length>0};t.addEventListener("pointerdown",L=>{if(!R.count)return;const F=t.getBoundingClientRect();k.set((L.clientX-F.left)/F.width*2-1,-((L.clientY-F.top)/F.height)*2+1),_e.setFromCamera(k,s);const $=_e.intersectObjects(R.tapTargets,!1)[0];$&&(L.stopImmediatePropagation(),Z.toast(R.untie($.object.userData.mooringEnd),"info",2500))},{capture:!0}),t.addEventListener("pointerdown",L=>{(Yt==="steerer"||st(L))&&(Mt={x:L.clientX,id:L.pointerId},Bt.enabled=!1,t.setPointerCapture(L.pointerId),t.style.cursor="grabbing",N.active&&N.stop(),Q||(Q=!0,w.tillerHint.visible=!1))},{capture:!0}),t.addEventListener("pointermove",L=>{Mt&&L.pointerId===Mt.id?ht.touchSteer=Bs.clamp(-(L.clientX-Mt.x)/120,-1,1):!Mt&&L.pointerType==="mouse"&&Yt==="follow"&&(t.style.cursor=st(L)?"grab":"")});const At=L=>{!Mt||L.pointerId!==Mt.id||(Mt=null,ht.touchSteer=0,t.style.cursor="",Yt==="follow"&&(Bt.enabled=!0))};t.addEventListener("pointerup",At),t.addEventListener("pointercancel",At);let bt=0;Bt.addEventListener("start",()=>te=performance.now()/1e3);let Yt="follow";const ue=new I,Pe=new I,ge=new I,Je=L=>{const F=r.levelAt(y.s);w.group.position.set(y.x,F+Math.sin(L*1.3)*.015,y.z),w.group.rotation.set(Math.sin(L*.9)*.004,y.psi,Bs.clamp(-y.r*y.u*.5,-.04,.04)),w.rudder.rotation.y=-y.rudder*.6,ue.set(y.x,F+1.6,y.z)};Je(0),Pe.copy(ue),Bt.target.copy(ue),s.position.set(y.x-Math.sin(y.psi)*24,ue.y+9,y.z-Math.cos(y.psi)*24),Bt.update();let We=2,Be=null,ee=null;const vn=L=>{var F;return L?`${L.action}:${((F=L.gate)==null?void 0:F.label)??""}:${L.group.name}`:""};let Gn=null;const Ki=new Set;let Ti=0,Ai,Ji=0,ai=!1,Qi=0;const $s=()=>(ee==null?void 0:ee.adjacent)??[];let qs="",Ro=0;const Ys=L=>{const[F,$]=y.span();return F<L.s+.3&&$>L.s-.3},A=L=>{switch(L){case"throttleUp":N.active&&(N.stop(),Z.toast("You take the tiller back.","info",2e3)),y.notch=Math.min(Tr,y.notch+1);break;case"throttleDown":y.notch=Math.max(Er,y.notch-1);break;case"neutral":y.notch=0;break;case"paddles":Be&&r.togglePaddle(Be);break;case"gates":if(Be){const F=r.toggleGate(Be,Ys(Be));F&&Z.nope(Be,/in the way/.test(F)?"The boat's in the way":"Levels don't match yet")}break;case"nextGate":{const F=$s();F.length&&(Be=F[(F.indexOf(Be)+1)%F.length],Gn=vn(ee));break}case"timeFaster":We=co[Math.min(co.length-1,co.indexOf(We)+1)];break;case"timeSlower":We=co[Math.max(0,co.indexOf(We)-1)];break;case"camera":Yt==="follow"?(ge.copy(s.position).sub(Bt.target),Yt="steerer",Bt.enabled=!1,w.steerer.visible=!1):(Yt="follow",Bt.enabled=!0,s.position.copy(Bt.target).add(ge),w.steerer.visible=!0);break;case"map":Nt.bigOpen=!Nt.bigOpen,Z.setMapOpen(Nt.bigOpen);break;case"help":Z.toggleHelp();break;case"mute":Rt.toggleMute();break;case"moor":{const F=R.act();if(F&&Z.toast(F,"info",3e3),R.moored){const $=x.zoneAt(y.s),it=St(at.current.zone);if(($==null?void 0:$.kind)==="stop"&&!tt.has($.id)&&(tt.add($.id),x.hideStopMarker($.id),Z.toast(_M($.poi.name,$.poi.kind),"info",7e3),T.hour=(T.hour+1)%24),Tt&&$===Tt.dest&&E(),($==null?void 0:$.kind)==="stop"&&Dt($),Jt&&$===it&&!at.result){const pt=S.nextFrom(tM);pt&&S.give(pt),Z.showSummary(at.complete(T.hour),$.name,pt?vo[pt].name:void 0),Xt(),x.setActive(null),Nt.clearDestination()}else($==null?void 0:$.kind)!=="stop"&&Z.toast($?`Moored at ${$.name}.`:Jt?`Moored up. Your trip ends at ${it.name}.`:"Moored up.","info",3500)}break}case"nextTrip":if(at.result)at.next(T.hour),Z.hideSummary(),Jt=!1,q(),N.roster(),Xt();else if(Z.offerOpen&&Ht==="helper"){Z.hideOffer();const F=r.windingHoles.reduce(($,it)=>Math.abs(it-y.s)<Math.abs($-y.s)?it:$);Pt(F)}else Z.offerOpen&&Ht==="volunteers"?(Z.hideOffer(),ee&&N.isStaffed(ee.group)&&(R.castOff(),N.start(ee.group),Z.toast("The volunteers take over. Sit back and enjoy it.","info",3500))):Z.offerOpen&&Ht==="lift"?(Z.hideOffer(),P()):Z.offerOpen&&(Z.hideOffer(),Jt=!0,at.next(T.hour),Xt(),x.setActive(St(at.current.zone)),jt());break;case"declineTrip":if(Z.offerOpen&&Z.hideOffer(),Ht==="trip"&&xt.add(at.index),Ht==="helper"&&ot&&(Z.toast(`"Right you are! I'll leave you to it." They lean on the fence to watch.`,"info",3500),K=0,Lt()),Ht==="lift"&&It){Z.toast(`"No worries!" ${It.name} sets off up the towpath on foot.`,"info",3500);const F=x.zoneAt(y.s);F&&kt(F.id),It=null}break;case"tripOffer":break;case"clear":{const F=W.find(it=>it.active&&Math.abs(it.s-y.s)<Da),$=vt.near(y.s);if(!F&&$){R.moored?(S.give($.item),$.group.visible=!1,Z.toast($.done,"info",4500)):Z.toast("Moor up alongside first (F), then you can load it.","info",3e3);break}F?R.moored?F.startClearing()&&Z.toast(Math.abs(F.s-y.s)>25?"You walk up the towpath with the boat hook. Heave!":"Out with the boat hook. Heave!","info",2500):Z.toast("Moor up first (F), then you can get at it with the boat hook.","info",3500):Z.toast("There's nothing here to clear.","info",2e3);break}case"autopilot":if(N.active)N.stop(),Z.toast("You take the tiller back.","info",2500);else if(ee&&N.isStaffed(ee.group)){Ht="volunteers";const F=pM({coat:"#1d5fa8",trousers:"#2d3a55",skin:"#e3b08f",hair:"#5a3a22",hairStyle:"short",longCoat:!1},$=>Vi($,"wave",.3));Z.showOffer("Volunteers on duty",`Help through ${ee.group.name}?`,`<img class="offer-pic" src="${F}" alt="">Canal &amp; River Trust volunteers in blue are working the lock today. Want them to work you through? Sit back and watch while they wind the paddles and swing the gates.`,"Yes please","I'll do it")}else Z.toast("No volunteers on duty here, so you'll have to work this one yourself.","info",3e3);break;case"headlight":ai=!ai,w.headlight.intensity=ai?40:0;break}},V=()=>{const L=r.bodies[r.bodyIndexAt(y.s)],F=(y.s-i.meta.towerWharfS)/1e3,$=`${Math.abs(F).toFixed(1)} km ${F>=0?"above":"below"} Tower Wharf`;if(L.kind==="chamber")return[`In ${L.lockName}`,$];const it=r.gates.find(Zt=>Zt.s>y.s),pt=[...r.gates].reverse().find(Zt=>Zt.s<y.s),ft=u.at(y.s),Vt=ft!=null&&ft.data.name?` · under ${ft.data.name}`:"";return Math.abs(y.s-i.meta.towerWharfS)<70?["Tower Wharf",`Junction with the Dee Branch${Vt}`]:it&&it.s-y.s<160?[`Approaching ${it.lockName}`,$+Vt]:pt&&y.s-pt.s<120?[`Leaving ${pt.lockName}`,$+Vt]:it&&pt?[`${pt.lockName} → ${it.lockName}`,$+Vt]:[it?`Towards ${it.lockName}`:"Towards Christleton & Nantwich",$+Vt]},Y=()=>{const L=Bt.target,F=s.position,$=L.distanceTo(F);for(let it=4;it<$;it+=1.5){const pt=it/$,ft=L.x+(F.x-L.x)*pt,Vt=L.y+(F.y-L.y)*pt,Zt=L.z+(F.z-L.z)*pt,ae=o.project(ft,Zt,y.s),le=u.rampAt(ae.s,ae.d);if(Vt<M.roofAt(ft,Zt)||Vt<f.heightAt(ft,Zt)+.5||le.onDeck&&Vt<le.y+1.2){s.position.lerpVectors(L,F,Math.max(4,it-2)/$);return}}};Z.toast("Welcome aboard the Chester Rose! W to get going. Cruise past a green ! for a mission. H for help.","info",7e3),Xt();const j=new ev;let H=0;addEventListener("resize",()=>{s.aspect=innerWidth/innerHeight,s.updateProjectionMatrix(),e.setSize(innerWidth,innerHeight)});const gt=()=>{var an;const L=Math.min(j.getDelta(),.1);H+=L;for(const _t of ht.drain())A(_t);const F=L*We,$=Math.max(1,Math.ceil(F/xM));for(let _t=0;_t<$;_t++){r.update(F/$),y.bowThrust=ht.bowThrust,!N.active&&!(ot!=null&&ot.turning)&&y.step(F/$,ht.steer);for(const Et of y.contacts)if(Et.impulse>1500&&Ji<=0)if(Rt.bump(Math.min(1,Et.impulse/12e3)),Ji=.4,W.some(re=>re.obstacle===Et.obstacle))Z.toast("It's jammed solid. Moor up nearby (F) and clear it with the boat hook (G).","warn",3500);else if(Et.kind==="boat"&&!x.boats.includes(Et.obstacle))C.bumped(Et.obstacle),Et.impulse>3e3&&at.bumps++;else if(Et.kind==="boat"){const re=Et.obstacle;x.rockBoat(re,Math.min(.08,Et.impulse/5e4)),Et.impulse>3e3&&(at.bumps++,Z.toast(`Bump! Sorry, ${re.name}. A head pops out of the hatch…`,"warn",3e3))}else Et.impulse>9e3&&(at.bumps++,Z.toast(Et.kind==="gate"?"Bump! Into the lock gates.":"Clunk. Mind the bank!","info",2200))}Ji-=L;const it=o.frame(y.s),pt=Math.sin(y.psi)*it.tx+Math.cos(y.psi)*it.tz>=0;ee=Uh(r,y.span(),pt);for(const _t of r.events.splice(0))(!_t.group||_t.group===(ee==null?void 0:ee.group)||_t.group.gates.some(re=>Math.abs(re.s-y.s)<150))&&Z.toast(_t.text,_t.kind);if(N.active&&ht.steer!==0&&(N.stop(),Z.toast("You take the tiller back.","info",2e3)),N.update(F,ee,pt)==="done"&&(Z.toast("Through! The volunteers wave you on your way. Thanks, volunteers!","info",4500),ee=Uh(r,y.span(),pt)),!N.active&&(ee!=null&&ee.keeper)&&ee.gate&&ee.action!=="wait"){const _t=vn(ee);if(_t!==qs)qs=_t,Ro=H+1.5;else if(H>=Ro){const Et=ee.gate;ee.action==="paddlesUp"?Et.wantPaddle=!0:ee.action==="paddlesDown"?Et.wantPaddle=!1:ee.action==="close"?Et.wantOpen=!1:ee.action==="open"&&r.levelsMatch(Et)&&(Et.wantOpen=!0),qs=""}}const ft=$s();Gn!==null&&(Gn!==vn(ee)||!Be||!ft.includes(Be))&&(Gn=null),Gn===null&&(Be=ee!=null&&ee.gate&&!ee.keeper?ee.gate:ft.includes(Be)?Be:ft.at(-1)??null),g.setSelected(Be),Z.setLockPanel(r,{step:ee,levelsMatch:_t=>r.levelsMatch(_t),boatSpans:Ys,volunteers:N.active?"active":N.isStaffed(ee==null?void 0:ee.group)?"available":"none"});for(const _t of r.gates)_t.paddle<.05?Ki.delete(_t):Math.abs(_t.s-y.s)>110&&!Ki.has(_t)&&(Ki.add(_t),Z.toast(`You've left the paddles up at ${_t.lockName}. The lock-keeper won't be pleased.`,"warn",6e3));Ti=y.speed*Ia>4.3?Ti+F:0,Ti>6&&(Z.toast("Steady on! The limit is 4 mph, and your wash is slapping the moored boats.","warn"),Ti=-30),C.update(F,pt?1:-1);for(const _t of C.events.splice(0)){const Et=T.hour<12?"Morning":T.hour<18?"Afternoon":"Evening";_t.kind==="greet"?Z.toast(`"${Et}!" The steerer of ${_t.boat.name} gives you a wave.`,"info",3500):_t.kind==="wrongSide"?Z.toast(`Pass oncoming boats on the right (port to port). ${_t.boat.name}'s steerer looks puzzled.`,"warn",4500):Z.toast(`Bump! Sorry, ${_t.boat.name}!`,"warn",3e3)}for(const _t of nt.values())Vi(_t,"shake",H*.8);{const _t=r.windingHoles.find(re=>Math.abs(re-y.s)<45);_t!==void 0&&!ot&&!Z.offerOpen&&!N.active?(K+=L,K>60&&ct(_t)):_t===void 0&&(K=0),ot&&!ot.turning&&Vi(ot.person,Z.offerOpen?"wave":"rest",H);const Et=ot==null?void 0:ot.turning;if(Et){Et.t+=L/12;const re=Math.min(1,Et.t),De=re*re*(3-2*re),Dn=o.frame(Et.s),Co=Math.min(1,re/.4);y.x=Et.x0+(Dn.x-Et.x0)*Co,y.z=Et.z0+(Dn.z-Et.z0)*Co,y.psi=Et.psi0+(Et.psi1-Et.psi0)*De,y.u=y.v=y.r=0,y.notch=0,y.thrust=0,y.s=o.project(y.x,y.z,y.s).s,re>=1&&(Z.toast('"There you go, facing the right way!" The old boater hops off and tips their cap.',"info",5e3),K=0,Lt())}}B.update(L),z-=L;for(const _t of B.events.splice(0))_t.kind==="quack"?(Rt.quack(),z<=0&&(Z.toast("Quack! A mallard paddles off, deeply unimpressed.","info",2500),z=25)):(at.rocked++,Z.toast("An angler shakes a fist as your wash bobs their float. Ease off past the anglers!","warn",4e3));for(const _t of lt)!Ot.has(_t.name)&&Math.abs(_t.s-y.s)<45&&(Ot.add(_t.name),Z.toast(vM(_t.name,_t.kind),"info",7e3));{const _t=Math.sin(y.psi),Et=Math.cos(y.psi),re=gn/2+.3,De=Math.min(1,Math.abs(y.thrust)/3250);b.update(F,y.s,[y.x-_t*re,y.z-Et*re],y.psi,y.speed*Ia,De)}Qi-=L;for(const _t of b.washes(x.boats))x.rockBoat(_t.boat,.02+_t.strength*.07),!(_t.strength<.35)&&(at.rocked++,Qi<=0&&(Z.toast(tu[Math.floor(Math.random()*tu.length)].replace("%",_t.boat.name),"warn",3500),Qi=6));const Vt=(an=u.at(y.s))==null?void 0:an.data.name;if(Vt&&Vt!==Ai&&Z.toast(`Under ${Vt}`,"info",2200),Ai=Vt,Je(H),w.tillerHint.visible){const _t=.5+.5*Math.sin(H*3);w.tillerHint.material.opacity=.25+.45*_t,w.tillerHint.scale.setScalar(1+.12*_t)}if(m.update(L),g.update(L),x.update(L),_.update(L,s.position),v.update(L),Rt.rumble(_.rumble),R.update(r.levelAt(y.s),L),T.update(F/3600,ue),T.sky.position.copy(s.position),Yt==="follow"){const _t=ue.clone().sub(Pe);if(_t.length()>50?(Bt.target.copy(ue),s.position.set(y.x-Math.sin(y.psi)*24,ue.y+9,y.z-Math.cos(y.psi)*24),bt=0):(s.position.add(_t),Bt.target.add(_t)),bt>0){const Et=s.position.clone().sub(Bt.target);s.position.copy(Bt.target).addScaledVector(Et.normalize(),bt)}if(performance.now()/1e3-te>3&&Math.abs(y.u)>.25){const Et=s.position.clone().sub(Bt.target),re=Math.atan2(Et.x,Et.z);let Dn=y.psi+(y.u>0?Math.PI:0)-re;Dn=Math.atan2(Math.sin(Dn),Math.cos(Dn));const Co=Dn*Math.min(1,L*.5);Et.applyAxisAngle(new I(0,1,0),Co),s.position.copy(Bt.target).add(Et)}Bt.update(),bt=s.position.distanceTo(Bt.target),Y()}else{const _t=Math.sin(y.psi),Et=Math.cos(y.psi),re=-gn/2+.9;s.position.set(y.x+_t*re,ue.y+.75,y.z+Et*re),s.lookAt(y.x+_t*40,ue.y-.2,y.z+Et*40)}Pe.copy(ue),u.updateOcclusion(s.position,ue,L),Z.setHelm({notch:y.notch,speedMph:y.speed*Ia,timeScale:We});const[Zt,ae]=V();Z.setLocation(Zt,ae,`Journal: ${tt.size}/${et.length} canalside stops · ${Ot.size}/${lt.length} sights`),Nt.draw(y.x,y.z,y.psi);const le=St(at.current.zone),ce=(le.s0+le.s1)/2-y.s,Ft=y.s>le.s0-4&&y.s<le.s1+4,xn=Math.sign(ce)===(pt?1:-1)?"ahead":"behind you",fe=le.name.split(",")[0],rn=Ft?`${fe} · pull in and tie up (F)`:`${fe} · ${(Math.abs(ce)/1e3).toFixed(1)} km ${xn}`;if(!Jt&&!at.result&&Hi.forEach((_t,Et)=>{if(at.done.has(Et))return;const re=St(_t.from),De=Math.abs((re.s0+re.s1)/2-y.s);De>90?xt.delete(Et):De<45&&!xt.has(Et)&&!Z.offerOpen&&Ut(Et)}),Z.setTrip({state:at.result?"done":Jt?"active":"none",n:at.index+1,title:at.current.title,brief:at.current.brief,where:rn}),Tt){const _t=Tt.dest,Et=(_t.s0+_t.s1)/2-y.s,re=y.s>_t.s0-4&&y.s<_t.s1+4;Z.setLift(`${Tt.name} → ${ut(_t)} · ${re?"moor up (F)":`${(Math.abs(Et)/1e3).toFixed(1)} km ${Math.sign(Et)===(pt?1:-1)?"ahead":"behind"}`}`)}else Z.setLift(null);let Qe=null;for(const _t of W){if(_t.update(F,H)){const re=y.obstacles.indexOf(_t.obstacle);re>=0&&y.obstacles.splice(re,1),at.cleared++,Nt.setHazards(W.filter(De=>De.active).map(De=>o.point(De.s,0))),Z.toast(`${_t.description.cleared} Cast off (F) when you're ready.`,"info",7e3)}if(!_t.active)continue;const Et=Math.abs(_t.s-y.s);!_t.spotted&&Et<90&&(_t.spotted=!0,Z.toast(`${_t.description.spotted} Moor up nearby (F) and clear it with the boat hook (G).`,"warn",8e3)),Et<Da&&(!Qe||Et<Math.abs(Qe.s-y.s))&&(Qe=_t)}let Le=R.prompt();const Vn=Qe?void 0:vt.near(y.s);Vn&&(Le=R.moored?{key:"G",text:Vn.verb,ready:!0}:Le??{key:"F",text:`Moor up to load ${vo[Vn.item].name}`,ready:!1}),Qe&&(R.moored?Le=Qe.clearing?{key:"G",text:`Clearing… ${Math.round(Qe.progress*100)}%`,ready:!1}:{key:"G",text:"Clear the blockage with the boat hook",ready:!0}:Le||(Le={key:"F",text:"Moor up alongside the towpath to get at the blockage",ready:!1})),Z.setPrompt(Le);const be=r.gates.reduce((_t,Et)=>_t+(Math.abs(Et.s-y.s)<120?Math.abs(Et.flow):0),0);Rt.update(y.notch,be,Z.isWinding,!T.isNight),e.render(n,s),requestAnimationFrame(gt)};await gi("Casting off…"),Ju.classList.add("done"),requestAnimationFrame(gt),Object.assign(window,{game:{scene:n,boat:y,ww:r,camera:s,route:o,renderer:e,moorings:x,trips:at,traffic:C,decor:O,life:B,blockages:W,volunteers:N,lines:R,minimap:Nt,roof:S,pickups:vt,trains:_,cars:v}})}bM().catch(i=>{console.error(i),Qu.textContent=`Something went wrong: ${i.message}`});
