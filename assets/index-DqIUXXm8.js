var _p=Object.defineProperty;var Mp=(s,t,e)=>t in s?_p(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var I=(s,t,e)=>Mp(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const th="170",_o={ROTATE:0,DOLLY:1,PAN:2},po={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xp=0,Bh=1,yp=2,nf=1,sf=2,Di=3,us=0,Tn=1,He=2,cs=0,Mo=1,ic=2,Hh=3,Gh=4,bp=5,ws=100,wp=101,Sp=102,Ep=103,Tp=104,Ap=200,Rp=201,Cp=202,Pp=203,sc=204,oc=205,Lp=206,Dp=207,Ip=208,kp=209,Up=210,Np=211,Op=212,Fp=213,zp=214,rc=0,ac=1,lc=2,bo=3,cc=4,hc=5,uc=6,dc=7,of=0,Bp=1,Hp=2,hs=0,Gp=1,Vp=2,Wp=3,rf=4,Xp=5,$p=6,qp=7,af=300,wo=301,So=302,fc=303,pc=304,Oa=306,Eo=1e3,Ui=1001,mc=1002,zn=1003,Yp=1004,Lr=1005,gi=1006,il=1007,Ts=1008,Bi=1009,lf=1010,cf=1011,hr=1012,eh=1013,Cs=1014,vi=1015,xr=1016,nh=1017,ih=1018,To=1020,hf=35902,uf=1021,df=1022,li=1023,ff=1024,pf=1025,xo=1026,Ao=1027,sh=1028,oh=1029,mf=1030,rh=1031,ah=1033,Sa=33776,Ea=33777,Ta=33778,Aa=33779,gc=35840,vc=35841,_c=35842,Mc=35843,xc=36196,yc=37492,bc=37496,wc=37808,Sc=37809,Ec=37810,Tc=37811,Ac=37812,Rc=37813,Cc=37814,Pc=37815,Lc=37816,Dc=37817,Ic=37818,kc=37819,Uc=37820,Nc=37821,Ra=36492,Oc=36494,Fc=36495,gf=36283,zc=36284,Bc=36285,Hc=36286,jp=3200,Kp=3201,vf=0,Zp=1,rs="",Ve="srgb",Po="srgb-linear",Fa="linear",Fe="srgb",Hs=7680,Vh=519,Jp=512,Qp=513,t0=514,_f=515,e0=516,n0=517,i0=518,s0=519,Gc=35044,As=35048,Wh="300 es",Ni=2e3,Da=2001;class Is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xh=1234567;const sr=Math.PI/180,Ro=180/Math.PI;function Mi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function rn(s,t,e){return Math.max(t,Math.min(e,s))}function lh(s,t){return(s%t+t)%t}function o0(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function r0(s,t,e){return s!==t?(e-s)/(t-s):0}function or(s,t,e){return(1-e)*s+e*t}function a0(s,t,e,n){return or(s,t,1-Math.exp(-e*n))}function l0(s,t=1){return t-Math.abs(lh(s,t*2)-t)}function c0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function h0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function u0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function d0(s,t){return s+Math.random()*(t-s)}function f0(s){return s*(.5-Math.random())}function p0(s){s!==void 0&&(Xh=s);let t=Xh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function m0(s){return s*sr}function g0(s){return s*Ro}function v0(s){return(s&s-1)===0&&s!==0}function _0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function M0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function x0(s,t,e,n,i){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),f=o((t-n)/2),p=r((t-n)/2),d=o((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":s.set(a*h,l*f,l*p,a*c);break;case"YZY":s.set(l*p,a*h,l*f,a*c);break;case"ZXZ":s.set(l*f,l*p,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ai(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Rs={DEG2RAD:sr,RAD2DEG:Ro,generateUUID:Mi,clamp:rn,euclideanModulo:lh,mapLinear:o0,inverseLerp:r0,lerp:or,damp:a0,pingpong:l0,smoothstep:c0,smootherstep:h0,randInt:u0,randFloat:d0,randFloatSpread:f0,seededRandom:p0,degToRad:m0,radToDeg:g0,isPowerOfTwo:v0,ceilPowerOfTwo:_0,floorPowerOfTwo:M0,setQuaternionFromProperEuler:x0,normalize:Ue,denormalize:ai};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,e,n,i,o,r,a,l,c){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c)}set(t,e,n,i,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],p=n[2],d=n[5],g=n[8],_=i[0],m=i[3],u=i[6],M=i[1],x=i[4],v=i[7],T=i[2],E=i[5],b=i[8];return o[0]=r*_+a*M+l*T,o[3]=r*m+a*x+l*E,o[6]=r*u+a*v+l*b,o[1]=c*_+h*M+f*T,o[4]=c*m+h*x+f*E,o[7]=c*u+h*v+f*b,o[2]=p*_+d*M+g*T,o[5]=p*m+d*x+g*E,o[8]=p*u+d*v+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+i*o*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*r-a*c,p=a*l-h*o,d=c*o-r*l,g=e*f+n*p+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*r)*_,t[3]=p*_,t[4]=(h*e-i*l)*_,t[5]=(i*o-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sl.makeScale(t,e)),this}rotate(t){return this.premultiply(sl.makeRotation(-t)),this}translate(t,e){return this.premultiply(sl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sl=new fe;function Mf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ia(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function y0(){const s=Ia("canvas");return s.style.display="block",s}const $h={};function er(s){s in $h||($h[s]=!0,console.warn(s))}function b0(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function w0(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function S0(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ae={enabled:!0,workingColorSpace:Po,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Fe&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Fe&&(s.r=yo(s.r),s.g=yo(s.g),s.b=yo(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===rs?Fa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const qh=[.64,.33,.3,.6,.15,.06],Yh=[.2126,.7152,.0722],jh=[.3127,.329],Kh=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ae.define({[Po]:{primaries:qh,whitePoint:jh,transfer:Fa,toXYZ:Kh,fromXYZ:Zh,luminanceCoefficients:Yh,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:qh,whitePoint:jh,transfer:Fe,toXYZ:Kh,fromXYZ:Zh,luminanceCoefficients:Yh,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});let Gs;class E0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gs===void 0&&(Gs=Ia("canvas")),Gs.width=t.width,Gs.height=t.height;const n=Gs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ia("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=zi(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zi(e[n]/255)*255):e[n]=zi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let T0=0;class xf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(ol(i[r].image)):o.push(ol(i[r]))}else o=ol(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function ol(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?E0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let A0=0;class _n extends Is{constructor(t=_n.DEFAULT_IMAGE,e=_n.DEFAULT_MAPPING,n=Ui,i=Ui,o=gi,r=Ts,a=li,l=Bi,c=_n.DEFAULT_ANISOTROPY,h=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Mi(),this.name="",this.source=new xf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==af)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Eo:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Eo:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=af;_n.DEFAULT_ANISOTROPY=1;class qe{constructor(t=0,e=0,n=0,i=1){qe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const l=t.elements,c=l[0],h=l[4],f=l[8],p=l[1],d=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(d+1)/2,T=(u+1)/2,E=(h+p)/4,b=(f+_)/4,R=(g+m)/4;return x>v&&x>T?x<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(x),i=E/n,o=b/n):v>T?v<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(v),n=E/i,o=R/i):T<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(T),n=b/o,i=R/o),this.set(n,i,o,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(p-h)/M,this.w=Math.acos((c+d+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R0 extends Is{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new _n(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ps extends R0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yf extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class C0 extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const p=o[r+0],d=o[r+1],g=o[r+2],_=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==p||c!==d||h!==g){let m=1-a;const u=l*p+c*d+h*g+f*_,M=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const T=Math.sqrt(x),E=Math.atan2(T,u*M);m=Math.sin(m*E)/T,a=Math.sin(a*E)/T}const v=a*M;if(l=l*m+p*v,c=c*m+d*v,h=h*m+g*v,f=f*m+_*v,m===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=o[r],p=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+h*f+l*d-c*p,t[e+1]=l*g+h*p+c*f-a*d,t[e+2]=c*g+h*d+a*p-l*f,t[e+3]=h*g-a*f-l*p-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(o/2),p=l(n/2),d=l(i/2),g=l(o/2);switch(r){case"XYZ":this._x=p*h*f+c*d*g,this._y=c*d*f-p*h*g,this._z=c*h*g+p*d*f,this._w=c*h*f-p*d*g;break;case"YXZ":this._x=p*h*f+c*d*g,this._y=c*d*f-p*h*g,this._z=c*h*g-p*d*f,this._w=c*h*f+p*d*g;break;case"ZXY":this._x=p*h*f-c*d*g,this._y=c*d*f+p*h*g,this._z=c*h*g+p*d*f,this._w=c*h*f-p*d*g;break;case"ZYX":this._x=p*h*f-c*d*g,this._y=c*d*f+p*h*g,this._z=c*h*g-p*d*f,this._w=c*h*f+p*d*g;break;case"YZX":this._x=p*h*f+c*d*g,this._y=c*d*f+p*h*g,this._z=c*h*g-p*d*f,this._w=c*h*f-p*d*g;break;case"XZY":this._x=p*h*f-c*d*g,this._y=c*d*f-p*h*g,this._z=c*h*g+p*d*f,this._w=c*h*f+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],p=n+a+f;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(r-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(o+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(o-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(r-i)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+i*c-o*l,this._y=i*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=r*f+this._w*p,this._x=n*f+this._x*p,this._y=i*f+this._y*p,this._z=o*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),h=2*(a*e-o*i),f=2*(o*n-r*e);return this.x=e+l*c+r*f-a*h,this.y=n+l*h+a*c-o*f,this.z=i+l*f+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-o*a,this.y=o*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rl.copy(this).projectOnVector(t),this.sub(rl)}reflect(t){return this.sub(rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rl=new U,Jh=new Kn;class ks{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,ti):ti.fromBufferAttribute(o,r),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(t.matrixWorld),this.union(Dr)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),Ir.subVectors(this.max,zo),Vs.subVectors(t.a,zo),Ws.subVectors(t.b,zo),Xs.subVectors(t.c,zo),ji.subVectors(Ws,Vs),Ki.subVectors(Xs,Ws),ps.subVectors(Vs,Xs);let e=[0,-ji.z,ji.y,0,-Ki.z,Ki.y,0,-ps.z,ps.y,ji.z,0,-ji.x,Ki.z,0,-Ki.x,ps.z,0,-ps.x,-ji.y,ji.x,0,-Ki.y,Ki.x,0,-ps.y,ps.x,0];return!al(e,Vs,Ws,Xs,Ir)||(e=[1,0,0,0,1,0,0,0,1],!al(e,Vs,Ws,Xs,Ir))?!1:(kr.crossVectors(ji,Ki),e=[kr.x,kr.y,kr.z],al(e,Vs,Ws,Xs,Ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ti=[new U,new U,new U,new U,new U,new U,new U,new U],ti=new U,Dr=new ks,Vs=new U,Ws=new U,Xs=new U,ji=new U,Ki=new U,ps=new U,zo=new U,Ir=new U,kr=new U,ms=new U;function al(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){ms.fromArray(s,o);const a=i.x*Math.abs(ms.x)+i.y*Math.abs(ms.y)+i.z*Math.abs(ms.z),l=t.dot(ms),c=e.dot(ms),h=n.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const P0=new ks,Bo=new U,ll=new U;class Us{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):P0.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const e=Bo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Bo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(ll)),this.expandByPoint(Bo.copy(t.center).sub(ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new U,cl=new U,Ur=new U,Zi=new U,hl=new U,Nr=new U,ul=new U;class yr{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){cl.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(cl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ur),a=Zi.dot(this.direction),l=-Zi.dot(Ur),c=Zi.lengthSq(),h=Math.abs(1-r*r);let f,p,d,g;if(h>0)if(f=r*l-a,p=r*a-l,g=o*h,f>=0)if(p>=-g)if(p<=g){const _=1/h;f*=_,p*=_,d=f*(f+r*p+2*a)+p*(r*f+p+2*l)+c}else p=o,f=Math.max(0,-(r*p+a)),d=-f*f+p*(p+2*l)+c;else p=-o,f=Math.max(0,-(r*p+a)),d=-f*f+p*(p+2*l)+c;else p<=-g?(f=Math.max(0,-(-r*o+a)),p=f>0?-o:Math.min(Math.max(-o,-l),o),d=-f*f+p*(p+2*l)+c):p<=g?(f=0,p=Math.min(Math.max(-o,-l),o),d=p*(p+2*l)+c):(f=Math.max(0,-(r*o+a)),p=f>0?o:Math.min(Math.max(-o,-l),o),d=-f*f+p*(p+2*l)+c);else p=r>0?-o:o,f=Math.max(0,-(r*p+a)),d=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(cl).addScaledVector(Ur,p),d}intersectSphere(t,e){Ai.subVectors(t.center,this.origin);const n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,i=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,i=(t.min.x-p.x)*c),h>=0?(o=(t.min.y-p.y)*h,r=(t.max.y-p.y)*h):(o=(t.max.y-p.y)*h,r=(t.min.y-p.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),f>=0?(a=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,i,o){hl.subVectors(e,t),Nr.subVectors(n,t),ul.crossVectors(hl,Nr);let r=this.direction.dot(ul),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Zi.subVectors(this.origin,t);const l=a*this.direction.dot(Nr.crossVectors(Zi,Nr));if(l<0)return null;const c=a*this.direction.dot(hl.cross(Zi));if(c<0||l+c>r)return null;const h=-a*Zi.dot(ul);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,n,i,o,r,a,l,c,h,f,p,d,g,_,m){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c,h,f,p,d,g,_,m)}set(t,e,n,i,o,r,a,l,c,h,f,p,d,g,_,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=o,u[5]=r,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=p,u[3]=d,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/$s.setFromMatrixColumn(t,0).length(),o=1/$s.setFromMatrixColumn(t,1).length(),r=1/$s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const p=r*h,d=r*f,g=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=p-_*c,e[9]=-a*l,e[2]=_-p*c,e[6]=g+d*c,e[10]=r*l}else if(t.order==="YXZ"){const p=l*h,d=l*f,g=c*h,_=c*f;e[0]=p+_*a,e[4]=g*a-d,e[8]=r*c,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=d*a-g,e[6]=_+p*a,e[10]=r*l}else if(t.order==="ZXY"){const p=l*h,d=l*f,g=c*h,_=c*f;e[0]=p-_*a,e[4]=-r*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*h,e[9]=_-p*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const p=r*h,d=r*f,g=a*h,_=a*f;e[0]=l*h,e[4]=g*c-d,e[8]=p*c+_,e[1]=l*f,e[5]=_*c+p,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const p=r*l,d=r*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-p*f,e[8]=g*f+d,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+g,e[10]=p-_*f}else if(t.order==="XZY"){const p=r*l,d=r*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=p*f+_,e[5]=r*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=_*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(L0,t,D0)}lookAt(t,e,n){const i=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Ji.crossVectors(n,kn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Ji.crossVectors(n,kn)),Ji.normalize(),Or.crossVectors(kn,Ji),i[0]=Ji.x,i[4]=Or.x,i[8]=kn.x,i[1]=Ji.y,i[5]=Or.y,i[9]=kn.y,i[2]=Ji.z,i[6]=Or.z,i[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],p=n[9],d=n[13],g=n[2],_=n[6],m=n[10],u=n[14],M=n[3],x=n[7],v=n[11],T=n[15],E=i[0],b=i[4],R=i[8],S=i[12],y=i[1],P=i[5],w=i[9],N=i[13],z=i[2],q=i[6],V=i[10],$=i[14],G=i[3],dt=i[7],pt=i[11],ot=i[15];return o[0]=r*E+a*y+l*z+c*G,o[4]=r*b+a*P+l*q+c*dt,o[8]=r*R+a*w+l*V+c*pt,o[12]=r*S+a*N+l*$+c*ot,o[1]=h*E+f*y+p*z+d*G,o[5]=h*b+f*P+p*q+d*dt,o[9]=h*R+f*w+p*V+d*pt,o[13]=h*S+f*N+p*$+d*ot,o[2]=g*E+_*y+m*z+u*G,o[6]=g*b+_*P+m*q+u*dt,o[10]=g*R+_*w+m*V+u*pt,o[14]=g*S+_*N+m*$+u*ot,o[3]=M*E+x*y+v*z+T*G,o[7]=M*b+x*P+v*q+T*dt,o[11]=M*R+x*w+v*V+T*pt,o[15]=M*S+x*N+v*$+T*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],p=t[10],d=t[14],g=t[3],_=t[7],m=t[11],u=t[15];return g*(+o*l*f-i*c*f-o*a*p+n*c*p+i*a*d-n*l*d)+_*(+e*l*d-e*c*p+o*r*p-i*r*d+i*c*h-o*l*h)+m*(+e*c*f-e*a*d-o*r*f+n*r*d+o*a*h-n*c*h)+u*(-i*a*h-e*l*f+e*a*p+i*r*f-n*r*p+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],p=t[10],d=t[11],g=t[12],_=t[13],m=t[14],u=t[15],M=f*m*c-_*p*c+_*l*d-a*m*d-f*l*u+a*p*u,x=g*p*c-h*m*c-g*l*d+r*m*d+h*l*u-r*p*u,v=h*_*c-g*f*c+g*a*d-r*_*d-h*a*u+r*f*u,T=g*f*l-h*_*l-g*a*p+r*_*p+h*a*m-r*f*m,E=e*M+n*x+i*v+o*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=M*b,t[1]=(_*p*o-f*m*o-_*i*d+n*m*d+f*i*u-n*p*u)*b,t[2]=(a*m*o-_*l*o+_*i*c-n*m*c-a*i*u+n*l*u)*b,t[3]=(f*l*o-a*p*o-f*i*c+n*p*c+a*i*d-n*l*d)*b,t[4]=x*b,t[5]=(h*m*o-g*p*o+g*i*d-e*m*d-h*i*u+e*p*u)*b,t[6]=(g*l*o-r*m*o-g*i*c+e*m*c+r*i*u-e*l*u)*b,t[7]=(r*p*o-h*l*o+h*i*c-e*p*c-r*i*d+e*l*d)*b,t[8]=v*b,t[9]=(g*f*o-h*_*o-g*n*d+e*_*d+h*n*u-e*f*u)*b,t[10]=(r*_*o-g*a*o+g*n*c-e*_*c-r*n*u+e*a*u)*b,t[11]=(h*a*o-r*f*o-h*n*c+e*f*c+r*n*d-e*a*d)*b,t[12]=T*b,t[13]=(h*_*i-g*f*i+g*n*p-e*_*p-h*n*m+e*f*m)*b,t[14]=(g*a*i-r*_*i-g*n*l+e*_*l+r*n*m-e*a*m)*b,t[15]=(r*f*i-h*a*i+h*n*l-e*f*l-r*n*p+e*a*p)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,f=a+a,p=o*c,d=o*h,g=o*f,_=r*h,m=r*f,u=a*f,M=l*c,x=l*h,v=l*f,T=n.x,E=n.y,b=n.z;return i[0]=(1-(_+u))*T,i[1]=(d+v)*T,i[2]=(g-x)*T,i[3]=0,i[4]=(d-v)*E,i[5]=(1-(p+u))*E,i[6]=(m+M)*E,i[7]=0,i[8]=(g+x)*b,i[9]=(m-M)*b,i[10]=(1-(p+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=$s.set(i[0],i[1],i[2]).length();const r=$s.set(i[4],i[5],i[6]).length(),a=$s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],ei.copy(this);const c=1/o,h=1/r,f=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=f,ei.elements[9]*=f,ei.elements[10]*=f,e.setFromRotationMatrix(ei),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=Ni){const l=this.elements,c=2*o/(e-t),h=2*o/(n-i),f=(e+t)/(e-t),p=(n+i)/(n-i);let d,g;if(a===Ni)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Da)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=Ni){const l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(r-o),p=(e+t)*c,d=(n+i)*h;let g,_;if(a===Ni)g=(r+o)*f,_=-2*f;else if(a===Da)g=o*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $s=new U,ei=new Me,L0=new U(0,0,0),D0=new U(1,1,1),Ji=new U,Or=new U,kn=new U,Qh=new Me,tu=new Kn;class ci{constructor(t=0,e=0,n=0,i=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],p=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(rn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tu.setFromEuler(this),this.setFromQuaternion(tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class ch{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let I0=0;const eu=new U,qs=new Kn,Ri=new Me,Fr=new U,Ho=new U,k0=new U,U0=new Kn,nu=new U(1,0,0),iu=new U(0,1,0),su=new U(0,0,1),ou={type:"added"},N0={type:"removed"},Ys={type:"childadded",child:null},dl={type:"childremoved",child:null};class Ye extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new U,e=new ci,n=new Kn,i=new U(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Me},normalMatrix:{value:new fe}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.multiply(qs),this}rotateOnWorldAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.premultiply(qs),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(iu,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return eu.copy(t).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(iu,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fr.copy(t):Fr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Ho,Fr,this.up):Ri.lookAt(Fr,Ho,this.up),this.quaternion.setFromRotationMatrix(Ri),i&&(Ri.extractRotation(i.matrixWorld),qs.setFromRotationMatrix(Ri),this.quaternion.premultiply(qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ou),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(N0),dl.child=t,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ou),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,t,k0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,U0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),f=r(t.shapes),p=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ye.DEFAULT_UP=new U(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new U,Ci=new U,fl=new U,Pi=new U,js=new U,Ks=new U,ru=new U,pl=new U,ml=new U,gl=new U,vl=new qe,_l=new qe,Ml=new qe;class $n{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ni.subVectors(t,e),i.cross(ni);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){ni.subVectors(i,e),Ci.subVectors(n,e),fl.subVectors(t,e);const r=ni.dot(ni),a=ni.dot(Ci),l=ni.dot(fl),c=Ci.dot(Ci),h=Ci.dot(fl),f=r*c-a*a;if(f===0)return o.set(0,0,0),null;const p=1/f,d=(c*l-a*h)*p,g=(r*h-a*l)*p;return o.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,i,o,r,a,l){return this.getBarycoord(t,e,n,i,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Pi.x),l.addScaledVector(r,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(t,e,n,i,o,r){return vl.setScalar(0),_l.setScalar(0),Ml.setScalar(0),vl.fromBufferAttribute(t,e),_l.fromBufferAttribute(t,n),Ml.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(vl,o.x),r.addScaledVector(_l,o.y),r.addScaledVector(Ml,o.z),r}static isFrontFacing(t,e,n,i){return ni.subVectors(n,e),Ci.subVectors(t,e),ni.cross(Ci).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ni.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return $n.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return $n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;js.subVectors(i,n),Ks.subVectors(o,n),pl.subVectors(t,n);const l=js.dot(pl),c=Ks.dot(pl);if(l<=0&&c<=0)return e.copy(n);ml.subVectors(t,i);const h=js.dot(ml),f=Ks.dot(ml);if(h>=0&&f<=h)return e.copy(i);const p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(js,r);gl.subVectors(t,o);const d=js.dot(gl),g=Ks.dot(gl);if(g>=0&&d<=g)return e.copy(o);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ks,a);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return ru.subVectors(o,i),a=(f-h)/(f-h+(d-g)),e.copy(i).addScaledVector(ru,a);const u=1/(m+_+p);return r=_*u,a=p*u,e.copy(n).addScaledVector(js,r).addScaledVector(Ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},zr={h:0,s:0,l:0};function xl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ae.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ae.workingColorSpace){if(t=lh(t,1),e=rn(e,0,1),n=rn(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=xl(r,o,t+1/3),this.g=xl(r,o,t),this.b=xl(r,o,t-1/3)}return Ae.toWorkingColorSpace(this,i),this}setStyle(t,e=Ve){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=bf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=yo(t.r),this.g=yo(t.g),this.b=yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return Ae.fromWorkingColorSpace(vn.copy(this),t),Math.round(rn(vn.r*255,0,255))*65536+Math.round(rn(vn.g*255,0,255))*256+Math.round(rn(vn.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.fromWorkingColorSpace(vn.copy(this),e);const n=vn.r,i=vn.g,o=vn.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=h<=.5?f/(r+a):f/(2-r-a),r){case n:l=(i-o)/f+(i<o?6:0);break;case i:l=(o-n)/f+2;break;case o:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=Ve){Ae.fromWorkingColorSpace(vn.copy(this),t);const e=vn.r,n=vn.g,i=vn.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Qi),this.setHSL(Qi.h+t,Qi.s+e,Qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qi),t.getHSL(zr);const n=or(Qi.h,zr.h,e),i=or(Qi.s,zr.s,e),o=or(Qi.l,zr.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Qt;Qt.NAMES=bf;let O0=0;class ds extends Is{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Mi(),this.name="",this.blending=Mo,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=oc,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(n.blending=this.blending),this.side!==us&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sc&&(n.blendSrc=this.blendSrc),this.blendDst!==oc&&(n.blendDst=this.blendDst),this.blendEquation!==ws&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Dn extends ds{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new U,Br=new ct;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gc,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Br.fromBufferAttribute(this,e),Br.applyMatrix3(t),this.setXY(e,Br.x,Br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array),o=Ue(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gc&&(t.usage=this.usage),t}}class wf extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sf extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let F0=0;const Vn=new Me,yl=new Ye,Zs=new U,Un=new ks,Go=new ks,hn=new U;class xe extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mf(t)?Sf:wf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new fe().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,n){return Vn.makeTranslation(t,e,n),this.applyMatrix4(Vn),this}scale(t,e,n){return Vn.makeScale(t,e,n),this.applyMatrix4(Vn),this}lookAt(t){return yl.lookAt(t),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,i=e.count;n<i;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Un.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Go.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Un.min,Go.min),Un.expandByPoint(hn),hn.addVectors(Un.max,Go.max),Un.expandByPoint(hn)):(Un.expandByPoint(Go.min),Un.expandByPoint(Go.max))}Un.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)hn.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(hn));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(t,c),hn.add(Zs)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new U,l[R]=new U;const c=new U,h=new U,f=new U,p=new ct,d=new ct,g=new ct,_=new U,m=new U;function u(R,S,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,y),p.fromBufferAttribute(o,R),d.fromBufferAttribute(o,S),g.fromBufferAttribute(o,y),h.sub(c),f.sub(c),d.sub(p),g.sub(p);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[R].add(_),a[S].add(_),a[y].add(_),l[R].add(m),l[S].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,S=M.length;R<S;++R){const y=M[R],P=y.start,w=y.count;for(let N=P,z=P+w;N<z;N+=3)u(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const x=new U,v=new U,T=new U,E=new U;function b(R){T.fromBufferAttribute(i,R),E.copy(T);const S=a[R];x.copy(S),x.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(E,S);const P=v.dot(l[R])<0?-1:1;r.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,S=M.length;R<S;++R){const y=M[R],P=y.start,w=y.count;for(let N=P,z=P+w;N<z;N+=3)b(t.getX(N+0)),b(t.getX(N+1)),b(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const i=new U,o=new U,r=new U,a=new U,l=new U,c=new U,h=new U,f=new U;if(t)for(let p=0,d=t.count;p<d;p+=3){const g=t.getX(p+0),_=t.getX(p+1),m=t.getX(p+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),h.subVectors(r,o),f.subVectors(i,o),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=e.count;p<d;p+=3)i.fromBufferAttribute(e,p+0),o.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),h.subVectors(r,o),f.subVectors(i,o),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,p=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let u=0;u<h;u++)p[g++]=c[d++]}return new tn(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,f=c.length;h<f;h++){const p=c[h],d=t(p,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],f=o[c];for(let p=0,d=f.length;p<d;p++)h.push(f[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const au=new Me,gs=new yr,Hr=new Us,lu=new U,Gr=new U,Vr=new U,Wr=new U,bl=new U,Xr=new U,cu=new U,$r=new U;class Y extends Ye{constructor(t=new xe,e=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){Xr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],f=o[l];h!==0&&(bl.fromBufferAttribute(f,t),r?Xr.addScaledVector(bl,h):Xr.addScaledVector(bl.sub(e),h))}e.add(Xr)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(o),gs.copy(t.ray).recast(t.near),!(Hr.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Hr,lu)===null||gs.origin.distanceToSquared(lu)>(t.far-t.near)**2))&&(au.copy(o).invert(),gs.copy(t.ray).applyMatrix4(au),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,p=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=p.length;g<_;g++){const m=p[g],u=r[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,T=x;v<T;v+=3){const E=a.getX(v),b=a.getX(v+1),R=a.getX(v+2);i=qr(this,u,t,n,c,h,f,E,b,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,u=_;m<u;m+=3){const M=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=qr(this,r,t,n,c,h,f,M,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=p.length;g<_;g++){const m=p[g],u=r[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,T=x;v<T;v+=3){const E=v,b=v+1,R=v+2;i=qr(this,u,t,n,c,h,f,E,b,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,u=_;m<u;m+=3){const M=m,x=m+1,v=m+2;i=qr(this,r,t,n,c,h,f,M,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function z0(s,t,e,n,i,o,r,a){let l;if(t.side===Tn?l=n.intersectTriangle(r,o,i,!0,a):l=n.intersectTriangle(i,o,r,t.side===us,a),l===null)return null;$r.copy(a),$r.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo($r);return c<e.near||c>e.far?null:{distance:c,point:$r.clone(),object:s}}function qr(s,t,e,n,i,o,r,a,l,c){s.getVertexPosition(a,Gr),s.getVertexPosition(l,Vr),s.getVertexPosition(c,Wr);const h=z0(s,t,e,n,Gr,Vr,Wr,cu);if(h){const f=new U;$n.getBarycoord(cu,Gr,Vr,Wr,f),i&&(h.uv=$n.getInterpolatedAttribute(i,a,l,c,f,new ct)),o&&(h.uv1=$n.getInterpolatedAttribute(o,a,l,c,f,new ct)),r&&(h.normal=$n.getInterpolatedAttribute(r,a,l,c,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new U,materialIndex:0};$n.getNormal(Gr,Vr,Wr,p.normal),h.face=p,h.barycoord=f}return h}class gt extends xe{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],f=[];let p=0,d=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(f,2));function g(_,m,u,M,x,v,T,E,b,R,S){const y=v/b,P=T/R,w=v/2,N=T/2,z=E/2,q=b+1,V=R+1;let $=0,G=0;const dt=new U;for(let pt=0;pt<V;pt++){const ot=pt*P-N;for(let Nt=0;Nt<q;Nt++){const ie=Nt*y-w;dt[_]=ie*M,dt[m]=ot*x,dt[u]=z,c.push(dt.x,dt.y,dt.z),dt[_]=0,dt[m]=0,dt[u]=E>0?1:-1,h.push(dt.x,dt.y,dt.z),f.push(Nt/b),f.push(1-pt/R),$+=1}}for(let pt=0;pt<R;pt++)for(let ot=0;ot<b;ot++){const Nt=p+ot+q*pt,ie=p+ot+q*(pt+1),tt=p+(ot+1)+q*(pt+1),_t=p+(ot+1)+q*pt;l.push(Nt,ie,_t),l.push(ie,tt,_t),G+=6}a.addGroup(d,G,S),d+=G,p+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Co(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Sn(s){const t={};for(let e=0;e<s.length;e++){const n=Co(s[e]);for(const i in n)t[i]=n[i]}return t}function B0(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ef(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const Tf={clone:Co,merge:Sn};var H0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends ds{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Co(t.uniforms),this.uniformsGroups=B0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Af extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new U,hu=new ct,uu=new ct;class On extends Af{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,e){return this.getViewBounds(t,hu,uu),e.subVectors(uu,hu)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(sr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Js=-90,Qs=1;class V0 extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new On(Js,Qs,t,e);i.layers=this.layers,this.add(i);const o=new On(Js,Qs,t,e);o.layers=this.layers,this.add(o);const r=new On(Js,Qs,t,e);r.layers=this.layers,this.add(r);const a=new On(Js,Qs,t,e);a.layers=this.layers,this.add(a);const l=new On(Js,Qs,t,e);l.layers=this.layers,this.add(l);const c=new On(Js,Qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Da)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,p,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rf extends _n{constructor(t,e,n,i,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:wo,super(t,e,n,i,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class W0 extends Ps{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Rf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new gt(5,5,5),o=new Hi({name:"CubemapFromEquirect",uniforms:Co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:cs});o.uniforms.tEquirect.value=e;const r=new Y(i,o),a=e.minFilter;return e.minFilter===Ts&&(e.minFilter=gi),new V0(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}const wl=new U,X0=new U,$0=new fe;class os{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=wl.subVectors(n,e).cross(X0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(wl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$0.getNormalMatrix(t),i=this.coplanarPoint(wl).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Us,Yr=new U;class hh{constructor(t=new os,e=new os,n=new os,i=new os,o=new os,r=new os){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ni){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],p=i[7],d=i[8],g=i[9],_=i[10],m=i[11],u=i[12],M=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-o,p-c,m-d,v-u).normalize(),n[1].setComponents(l+o,p+c,m+d,v+u).normalize(),n[2].setComponents(l+r,p+h,m+g,v+M).normalize(),n[3].setComponents(l-r,p-h,m-g,v-M).normalize(),n[4].setComponents(l-a,p-f,m-_,v-x).normalize(),e===Ni)n[5].setComponents(l+a,p+f,m+_,v+x).normalize();else if(e===Da)n[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Yr.x=i.normal.x>0?t.max.x:t.min.x,Yr.y=i.normal.y>0?t.max.y:t.min.y,Yr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cf(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function q0(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,p=s.createBuffer();s.bindBuffer(l,p),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<f.length;d++){const g=f[p],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,f[p]=_)}f.length=p+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:r}}class wi extends xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,p=e/l,d=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const M=u*p-r;for(let x=0;x<c;x++){const v=x*f-o;g.push(v,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let M=0;M<a;M++){const x=M+c*u,v=M+c*(u+1),T=M+1+c*(u+1),E=M+1+c*u;d.push(x,v,E),d.push(v,T,E)}this.setIndex(d),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j0=`#ifdef USE_ALPHAHASH
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
#endif`,K0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
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
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
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
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,am=`#ifdef USE_IRIDESCENCE
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
#endif`,lm=`#ifdef USE_BUMPMAP
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vm=`#define PI 3.141592653589793
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
} // validated`,_m=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mm=`vec3 transformedNormal = objectNormal;
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
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
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
}`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
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
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
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
#endif`,$m=`struct PhysicalMaterial {
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
}`,qm=`
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ig=`#if defined( USE_POINTS_UV )
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
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
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
#endif`,vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dg=`float getShadowMask() {
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
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yg=`uniform sampler2D t2D;
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
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
}`,tv=`#if DEPTH_PACKING == 3200
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
}`,ev=`#define DISTANCE
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
}`,nv=`#define DISTANCE
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
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`uniform float scale;
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
}`,rv=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,lv=`uniform vec3 diffuse;
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
}`,cv=`#define LAMBERT
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
}`,hv=`#define LAMBERT
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
}`,uv=`#define MATCAP
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
}`,dv=`#define MATCAP
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
}`,fv=`#define NORMAL
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
}`,pv=`#define NORMAL
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
}`,mv=`#define PHONG
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
}`,gv=`#define PHONG
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
}`,vv=`#define STANDARD
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
}`,_v=`#define STANDARD
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
}`,Mv=`#define TOON
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
}`,xv=`#define TOON
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
}`,yv=`uniform float size;
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
}`,bv=`uniform vec3 diffuse;
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
}`,wv=`#include <common>
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
}`,Sv=`uniform vec3 color;
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
}`,Ev=`uniform float rotation;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:Y0,alphahash_pars_fragment:j0,alphamap_fragment:K0,alphamap_pars_fragment:Z0,alphatest_fragment:J0,alphatest_pars_fragment:Q0,aomap_fragment:tm,aomap_pars_fragment:em,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:sm,beginnormal_vertex:om,bsdfs:rm,iridescence_fragment:am,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:um,clipping_planes_vertex:dm,color_fragment:fm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:vm,cube_uv_reflection_fragment:_m,defaultnormal_vertex:Mm,displacementmap_pars_vertex:xm,displacementmap_vertex:ym,emissivemap_fragment:bm,emissivemap_pars_fragment:wm,colorspace_fragment:Sm,colorspace_pars_fragment:Em,envmap_fragment:Tm,envmap_common_pars_fragment:Am,envmap_pars_fragment:Rm,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:Bm,envmap_vertex:Pm,fog_vertex:Lm,fog_pars_vertex:Dm,fog_fragment:Im,fog_pars_fragment:km,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Nm,lights_lambert_fragment:Om,lights_lambert_pars_fragment:Fm,lights_pars_begin:zm,lights_toon_fragment:Hm,lights_toon_pars_fragment:Gm,lights_phong_fragment:Vm,lights_phong_pars_fragment:Wm,lights_physical_fragment:Xm,lights_physical_pars_fragment:$m,lights_fragment_begin:qm,lights_fragment_maps:Ym,lights_fragment_end:jm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:Zm,logdepthbuf_pars_vertex:Jm,logdepthbuf_vertex:Qm,map_fragment:tg,map_pars_fragment:eg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:sg,metalnessmap_pars_fragment:og,morphinstance_vertex:rg,morphcolor_vertex:ag,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:hg,normal_fragment_begin:ug,normal_fragment_maps:dg,normal_pars_fragment:fg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:vg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:Mg,iridescence_pars_fragment:xg,opaque_fragment:yg,packing:bg,premultiplied_alpha_fragment:wg,project_vertex:Sg,dithering_fragment:Eg,dithering_pars_fragment:Tg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Lg,shadowmask_pars_fragment:Dg,skinbase_vertex:Ig,skinning_pars_vertex:kg,skinning_vertex:Ug,skinnormal_vertex:Ng,specularmap_fragment:Og,specularmap_pars_fragment:Fg,tonemapping_fragment:zg,tonemapping_pars_fragment:Bg,transmission_fragment:Hg,transmission_pars_fragment:Gg,uv_pars_fragment:Vg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:$g,background_vert:qg,background_frag:Yg,backgroundCube_vert:jg,backgroundCube_frag:Kg,cube_vert:Zg,cube_frag:Jg,depth_vert:Qg,depth_frag:tv,distanceRGBA_vert:ev,distanceRGBA_frag:nv,equirect_vert:iv,equirect_frag:sv,linedashed_vert:ov,linedashed_frag:rv,meshbasic_vert:av,meshbasic_frag:lv,meshlambert_vert:cv,meshlambert_frag:hv,meshmatcap_vert:uv,meshmatcap_frag:dv,meshnormal_vert:fv,meshnormal_frag:pv,meshphong_vert:mv,meshphong_frag:gv,meshphysical_vert:vv,meshphysical_frag:_v,meshtoon_vert:Mv,meshtoon_frag:xv,points_vert:yv,points_frag:bv,shadow_vert:wv,shadow_frag:Sv,sprite_vert:Ev,sprite_frag:Tv},Tt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},mi={basic:{uniforms:Sn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Sn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Sn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Sn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Sn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Sn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Sn([Tt.points,Tt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Sn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Sn([Tt.common,Tt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Sn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Sn([Tt.sprite,Tt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Sn([Tt.common,Tt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Sn([Tt.lights,Tt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};mi.physical={uniforms:Sn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const jr={r:0,b:0,g:0},_s=new ci,Av=new Me;function Rv(s,t,e,n,i,o,r){const a=new Qt(0);let l=o===!0?0:1,c,h,f=null,p=0,d=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const v=g(M);v===null?u(a,l):v&&v.isColor&&(u(v,1),x=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Oa)?(h===void 0&&(h=new Y(new gt(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:Co(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),_s.copy(x.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Av.makeRotationFromEuler(_s)),h.material.toneMapped=Ae.getTransfer(v.colorSpace)!==Fe,(f!==v||p!==v.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,f=v,p=v.version,d=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Y(new wi(2,2),new Hi({name:"BackgroundMaterial",uniforms:Co(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ae.getTransfer(v.colorSpace)!==Fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,f=v,p=v.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function u(M,x){M.getRGB(jr,Ef(s)),n.buffers.color.setClear(jr.r,jr.g,jr.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,u(a,l)},render:_,addToRenderList:m}}function Cv(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null);let o=i,r=!1;function a(y,P,w,N,z){let q=!1;const V=f(N,w,P);o!==V&&(o=V,c(o.object)),q=d(y,N,w,z),q&&g(y,N,w,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,v(y,P,w,N),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function f(y,P,w){const N=w.wireframe===!0;let z=n[y.id];z===void 0&&(z={},n[y.id]=z);let q=z[P.id];q===void 0&&(q={},z[P.id]=q);let V=q[N];return V===void 0&&(V=p(l()),q[N]=V),V}function p(y){const P=[],w=[],N=[];for(let z=0;z<e;z++)P[z]=0,w[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:w,attributeDivisors:N,object:y,attributes:{},index:null}}function d(y,P,w,N){const z=o.attributes,q=P.attributes;let V=0;const $=w.getAttributes();for(const G in $)if($[G].location>=0){const pt=z[G];let ot=q[G];if(ot===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor)),pt===void 0||pt.attribute!==ot||ot&&pt.data!==ot.data)return!0;V++}return o.attributesNum!==V||o.index!==N}function g(y,P,w,N){const z={},q=P.attributes;let V=0;const $=w.getAttributes();for(const G in $)if($[G].location>=0){let pt=q[G];pt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor));const ot={};ot.attribute=pt,pt&&pt.data&&(ot.data=pt.data),z[G]=ot,V++}o.attributes=z,o.attributesNum=V,o.index=N}function _(){const y=o.newAttributes;for(let P=0,w=y.length;P<w;P++)y[P]=0}function m(y){u(y,0)}function u(y,P){const w=o.newAttributes,N=o.enabledAttributes,z=o.attributeDivisors;w[y]=1,N[y]===0&&(s.enableVertexAttribArray(y),N[y]=1),z[y]!==P&&(s.vertexAttribDivisor(y,P),z[y]=P)}function M(){const y=o.newAttributes,P=o.enabledAttributes;for(let w=0,N=P.length;w<N;w++)P[w]!==y[w]&&(s.disableVertexAttribArray(w),P[w]=0)}function x(y,P,w,N,z,q,V){V===!0?s.vertexAttribIPointer(y,P,w,z,q):s.vertexAttribPointer(y,P,w,N,z,q)}function v(y,P,w,N){_();const z=N.attributes,q=w.getAttributes(),V=P.defaultAttributeValues;for(const $ in q){const G=q[$];if(G.location>=0){let dt=z[$];if(dt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor)),dt!==void 0){const pt=dt.normalized,ot=dt.itemSize,Nt=t.get(dt);if(Nt===void 0)continue;const ie=Nt.buffer,tt=Nt.type,_t=Nt.bytesPerElement,At=tt===s.INT||tt===s.UNSIGNED_INT||dt.gpuType===eh;if(dt.isInterleavedBufferAttribute){const xt=dt.data,jt=xt.stride,ht=dt.offset;if(xt.isInstancedInterleavedBuffer){for(let wt=0;wt<G.locationSize;wt++)u(G.location+wt,xt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let wt=0;wt<G.locationSize;wt++)m(G.location+wt);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let wt=0;wt<G.locationSize;wt++)x(G.location+wt,ot/G.locationSize,tt,pt,jt*_t,(ht+ot/G.locationSize*wt)*_t,At)}else{if(dt.isInstancedBufferAttribute){for(let xt=0;xt<G.locationSize;xt++)u(G.location+xt,dt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let xt=0;xt<G.locationSize;xt++)m(G.location+xt);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let xt=0;xt<G.locationSize;xt++)x(G.location+xt,ot/G.locationSize,tt,pt,ot*_t,ot/G.locationSize*xt*_t,At)}}else if(V!==void 0){const pt=V[$];if(pt!==void 0)switch(pt.length){case 2:s.vertexAttrib2fv(G.location,pt);break;case 3:s.vertexAttrib3fv(G.location,pt);break;case 4:s.vertexAttrib4fv(G.location,pt);break;default:s.vertexAttrib1fv(G.location,pt)}}}}M()}function T(){R();for(const y in n){const P=n[y];for(const w in P){const N=P[w];for(const z in N)h(N[z].object),delete N[z];delete P[w]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const w in P){const N=P[w];for(const z in N)h(N[z].object),delete N[z];delete P[w]}delete n[y.id]}function b(y){for(const P in n){const w=n[P];if(w[y.id]===void 0)continue;const N=w[y.id];for(const z in N)h(N[z].object),delete N[z];delete w[y.id]}}function R(){S(),r=!0,o!==i&&(o=i,c(o.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Pv(s,t,e){let n;function i(c){n=c}function o(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,f){f!==0&&(s.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,n,1)}function l(c,h,f,p){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)r(c[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*p[_];e.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Lv(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(b){return!(b!==li&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===xr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Bi&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==vi&&!R)}function l(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:T,maxSamples:E}}function Dv(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new os,a=new fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const d=f.length!==0||p||n!==0||i;return i=p,n=f.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,p){e=h(f,p,0)},this.setState=function(f,p,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,u=s.get(f);if(!i||g===null||g.length===0||o&&!m)o?h(null):c();else{const M=o?0:n,x=M*4;let v=u.clippingState||null;l.value=v,v=h(g,p,x,d);for(let T=0;T!==x;++T)v[T]=e[T];u.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,p,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const u=d+_*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,v=d;x!==_;++x,v+=4)r.copy(f[x]).applyMatrix4(M,a),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Iv(s){let t=new WeakMap;function e(r,a){return a===fc?r.mapping=wo:a===pc&&(r.mapping=So),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===fc||a===pc)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new W0(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Pf extends Af{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const mo=4,du=[.125,.215,.35,.446,.526,.582],Ss=20,Sl=new Pf,fu=new Qt;let El=null,Tl=0,Al=0,Rl=!1;const ys=(1+Math.sqrt(5))/2,to=1/ys,pu=[new U(-ys,to,0),new U(ys,to,0),new U(-to,0,ys),new U(to,0,ys),new U(0,ys,-to),new U(0,ys,to),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Vc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(El,Tl,Al),this._renderer.xr.enabled=Rl,t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wo||t.mapping===So?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:xr,format:li,colorSpace:Po,depthBuffer:!1},i=mu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kv(o)),this._blurMaterial=Uv(o,t,e)}return i}_compileMaterial(t){const e=new Y(this._lodPlanes[0],t);this._renderer.compile(e,Sl)}_sceneToCubeUV(t,e,n,i){const a=new On(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(fu),h.toneMapping=hs,h.autoClear=!1;const d=new Dn({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new Y(new gt,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(fu),_=!0);for(let u=0;u<6;u++){const M=u%3;M===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):M===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;Kr(i,M*x,u>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===wo||t.mapping===So;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gu());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new Y(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Kr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Sl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=pu[(i-o-1)%pu.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Y(this._lodPlanes[i],c),p=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Ss-1),_=o/g,m=isFinite(o)?1+Math.floor(h*_):Ss;m>Ss&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ss}`);const u=[];let M=0;for(let b=0;b<Ss;++b){const R=b/_,S=Math.exp(-R*R/2);u.push(S),b===0?M+=S:b<m&&(M+=2*S)}for(let b=0;b<u.length;b++)u[b]=u[b]/M;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=r==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-n;const v=this._sizeLods[i],T=3*v*(i>x-mo?i-x+mo:0),E=4*(this._cubeSize-v);Kr(e,T,E,3*v,2*v),l.setRenderTarget(e),l.render(f,Sl)}}function kv(s){const t=[],e=[],n=[];let i=s;const o=s-mo+1+du.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>s-mo?l=du[r-s+mo-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,m=2,u=1,M=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(u*g*d);for(let E=0;E<d;E++){const b=E%3*2/3-1,R=E>2?0:-1,S=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];M.set(S,_*g*E),x.set(p,m*g*E);const y=[E,E,E,E,E,E];v.set(y,u*g*E)}const T=new xe;T.setAttribute("position",new tn(M,_)),T.setAttribute("uv",new tn(x,m)),T.setAttribute("faceIndex",new tn(v,u)),t.push(T),i>mo&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function mu(s,t,e){const n=new Ps(s,t,e);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Uv(s,t,e){const n=new Float32Array(Ss),i=new U(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uh(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function gu(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function vu(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function uh(){return`

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
	`}function Nv(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===fc||l===pc,h=l===wo||l===So;if(c||h){let f=t.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Vc(s)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Vc(s)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Ov(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Fv(s,t,e,n){const i={},o=new WeakMap;function r(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let m=0,u=_.length;m<u;m++)t.remove(_[m])}p.removeEventListener("dispose",r),delete i[p.id];const d=o.get(p);d&&(t.remove(d),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return i[p.id]===!0||(p.addEventListener("dispose",r),i[p.id]=!0,e.memory.geometries++),p}function l(f){const p=f.attributes;for(const g in p)t.update(p[g],s.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,u=_.length;m<u;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(f){const p=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let x=0,v=M.length;x<v;x+=3){const T=M[x+0],E=M[x+1],b=M[x+2];p.push(T,E,E,b,b,T)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const T=x+0,E=x+1,b=x+2;p.push(T,E,E,b,b,T)}}else return;const m=new(Mf(p)?Sf:wf)(p,1);m.version=_;const u=o.get(f);u&&t.remove(u),o.set(f,m)}function h(f){const p=o.get(f);if(p){const d=f.index;d!==null&&p.version<d.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function zv(s,t,e){let n;function i(p){n=p}let o,r;function a(p){o=p.type,r=p.bytesPerElement}function l(p,d){s.drawElements(n,d,o,p*r),e.update(d,n,1)}function c(p,d,g){g!==0&&(s.drawElementsInstanced(n,d,o,p*r,g),e.update(d,n,g))}function h(p,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,p,0,g);let m=0;for(let u=0;u<g;u++)m+=d[u];e.update(m,n,1)}function f(p,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/r,d[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,o,p,0,_,0,g);let u=0;for(let M=0;M<g;M++)u+=d[M]*_[M];e.update(u,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Bv(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Hv(s,t,e){const n=new WeakMap,i=new qe;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==f){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let T=a.attributes.position.count*v,E=1;T>t.maxTextureSize&&(E=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const b=new Float32Array(T*E*4*f),R=new yf(b,T,E,f);R.type=vi,R.needsUpdate=!0;const S=v*4;for(let P=0;P<f;P++){const w=u[P],N=M[P],z=x[P],q=T*E*4*P;for(let V=0;V<w.count;V++){const $=V*S;g===!0&&(i.fromBufferAttribute(w,V),b[q+$+0]=i.x,b[q+$+1]=i.y,b[q+$+2]=i.z,b[q+$+3]=0),_===!0&&(i.fromBufferAttribute(N,V),b[q+$+4]=i.x,b[q+$+5]=i.y,b[q+$+6]=i.z,b[q+$+7]=0),m===!0&&(i.fromBufferAttribute(z,V),b[q+$+8]=i.x,b[q+$+9]=i.y,b[q+$+10]=i.z,b[q+$+11]=z.itemSize===4?i.w:1)}}p={count:f,texture:R,size:new ct(T,E)},n.set(a,p),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:o}}function Gv(s,t,e,n){let i=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;i.get(p)!==c&&(p.update(),i.set(p,c))}return f}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class Lf extends _n{constructor(t,e,n,i,o,r,a,l,c,h=xo){if(h!==xo&&h!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xo&&(n=Cs),n===void 0&&h===Ao&&(n=To),super(null,i,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Df=new _n,_u=new Lf(1,1),If=new yf,kf=new C0,Uf=new Rf,Mu=[],xu=[],yu=new Float32Array(16),bu=new Float32Array(9),wu=new Float32Array(4);function Lo(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=Mu[i];if(o===void 0&&(o=new Float32Array(i),Mu[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function an(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ln(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function za(s,t){let e=xu[t];e===void 0&&(e=new Int32Array(t),xu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Vv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Wv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;s.uniform2fv(this.addr,t),ln(e,t)}}function Xv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;s.uniform3fv(this.addr,t),ln(e,t)}}function $v(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;s.uniform4fv(this.addr,t),ln(e,t)}}function qv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;wu.set(n),s.uniformMatrix2fv(this.addr,!1,wu),ln(e,n)}}function Yv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;bu.set(n),s.uniformMatrix3fv(this.addr,!1,bu),ln(e,n)}}function jv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;yu.set(n),s.uniformMatrix4fv(this.addr,!1,yu),ln(e,n)}}function Kv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Zv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;s.uniform2iv(this.addr,t),ln(e,t)}}function Jv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;s.uniform3iv(this.addr,t),ln(e,t)}}function Qv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;s.uniform4iv(this.addr,t),ln(e,t)}}function t_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function e_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;s.uniform2uiv(this.addr,t),ln(e,t)}}function n_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;s.uniform3uiv(this.addr,t),ln(e,t)}}function i_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;s.uniform4uiv(this.addr,t),ln(e,t)}}function s_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(_u.compareFunction=_f,o=_u):o=Df,e.setTexture2D(t||o,i)}function o_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||kf,i)}function r_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Uf,i)}function a_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||If,i)}function l_(s){switch(s){case 5126:return Vv;case 35664:return Wv;case 35665:return Xv;case 35666:return $v;case 35674:return qv;case 35675:return Yv;case 35676:return jv;case 5124:case 35670:return Kv;case 35667:case 35671:return Zv;case 35668:case 35672:return Jv;case 35669:case 35673:return Qv;case 5125:return t_;case 36294:return e_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return a_}}function c_(s,t){s.uniform1fv(this.addr,t)}function h_(s,t){const e=Lo(t,this.size,2);s.uniform2fv(this.addr,e)}function u_(s,t){const e=Lo(t,this.size,3);s.uniform3fv(this.addr,e)}function d_(s,t){const e=Lo(t,this.size,4);s.uniform4fv(this.addr,e)}function f_(s,t){const e=Lo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function p_(s,t){const e=Lo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function m_(s,t){const e=Lo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function g_(s,t){s.uniform1iv(this.addr,t)}function v_(s,t){s.uniform2iv(this.addr,t)}function __(s,t){s.uniform3iv(this.addr,t)}function M_(s,t){s.uniform4iv(this.addr,t)}function x_(s,t){s.uniform1uiv(this.addr,t)}function y_(s,t){s.uniform2uiv(this.addr,t)}function b_(s,t){s.uniform3uiv(this.addr,t)}function w_(s,t){s.uniform4uiv(this.addr,t)}function S_(s,t,e){const n=this.cache,i=t.length,o=za(e,i);an(n,o)||(s.uniform1iv(this.addr,o),ln(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Df,o[r])}function E_(s,t,e){const n=this.cache,i=t.length,o=za(e,i);an(n,o)||(s.uniform1iv(this.addr,o),ln(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||kf,o[r])}function T_(s,t,e){const n=this.cache,i=t.length,o=za(e,i);an(n,o)||(s.uniform1iv(this.addr,o),ln(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Uf,o[r])}function A_(s,t,e){const n=this.cache,i=t.length,o=za(e,i);an(n,o)||(s.uniform1iv(this.addr,o),ln(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||If,o[r])}function R_(s){switch(s){case 5126:return c_;case 35664:return h_;case 35665:return u_;case 35666:return d_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return v_;case 35668:case 35672:return __;case 35669:case 35673:return M_;case 5125:return x_;case 36294:return y_;case 36295:return b_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return A_}}class C_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=l_(e.type)}}class P_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R_(e.type)}}class L_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const Cl=/(\w+)(\])?(\[|\.)?/g;function Su(s,t){s.seq.push(t),s.map[t.id]=t}function D_(s,t,e){const n=s.name,i=n.length;for(Cl.lastIndex=0;;){const o=Cl.exec(n),r=Cl.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Su(e,c===void 0?new C_(a,s,t):new P_(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new L_(a),Su(e,f)),e=f}}}class Ca{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);D_(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Eu(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const I_=37297;let k_=0;function U_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Tu=new fe;function N_(s){Ae._getMatrix(Tu,Ae.workingColorSpace,s);const t=`mat3( ${Tu.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(s)){case Fa:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Au(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+U_(s.getShaderSource(t),r)}else return i}function O_(s,t){const e=N_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function F_(s,t){let e;switch(t){case Gp:e="Linear";break;case Vp:e="Reinhard";break;case Wp:e="Cineon";break;case rf:e="ACESFilmic";break;case $p:e="AgX";break;case qp:e="Neutral";break;case Xp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zr=new U;function z_(){Ae.getLuminanceCoefficients(Zr);const s=Zr.x.toFixed(4),t=Zr.y.toFixed(4),e=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function H_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function G_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function nr(s){return s!==""}function Ru(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const V_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(s){return s.replace(V_,X_)}const W_=new Map;function X_(s,t){let e=ge[t];if(e===void 0){const n=W_.get(t);if(n!==void 0)e=ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wc(e)}const $_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(s){return s.replace($_,q_)}function q_(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Lu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Y_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===nf?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===sf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function j_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case wo:case So:t="ENVMAP_TYPE_CUBE";break;case Oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function K_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case So:t="ENVMAP_MODE_REFRACTION";break}return t}function Z_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case of:t="ENVMAP_BLENDING_MULTIPLY";break;case Bp:t="ENVMAP_BLENDING_MIX";break;case Hp:t="ENVMAP_BLENDING_ADD";break}return t}function J_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Q_(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Y_(e),c=j_(e),h=K_(e),f=Z_(e),p=J_(e),d=B_(e),g=H_(o),_=i.createProgram();let m,u,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(nr).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(nr).join(`
`),u.length>0&&(u+=`
`)):(m=[Lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),u=[Lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hs?"#define TONE_MAPPING":"",e.toneMapping!==hs?ge.tonemapping_pars_fragment:"",e.toneMapping!==hs?F_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,O_("linearToOutputTexel",e.outputColorSpace),z_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(nr).join(`
`)),r=Wc(r),r=Ru(r,e),r=Cu(r,e),a=Wc(a),a=Ru(a,e),a=Cu(a,e),r=Pu(r),a=Pu(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=M+m+r,v=M+u+a,T=Eu(i,i.VERTEX_SHADER,x),E=Eu(i,i.FRAGMENT_SHADER,v);i.attachShader(_,T),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(s.debug.checkShaderErrors){const w=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(T).trim(),z=i.getShaderInfoLog(E).trim();let q=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,E);else{const $=Au(i,T,"vertex"),G=Au(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+w+`
`+$+`
`+G)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(N===""||z==="")&&(V=!1);V&&(P.diagnostics={runnable:q,programLog:w,vertexShader:{log:N,prefix:m},fragmentShader:{log:z,prefix:u}})}i.deleteShader(T),i.deleteShader(E),R=new Ca(i,_),S=G_(i,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,I_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}let tM=0;class eM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new nM(t),e.set(t,n)),n}}class nM{constructor(t){this.id=tM++,this.code=t,this.usedTimes=0}}function iM(s,t,e,n,i,o,r){const a=new ch,l=new eM,c=new Set,h=[],f=i.logarithmicDepthBuffer,p=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,w,N){const z=w.fog,q=N.geometry,V=S.isMeshStandardMaterial?w.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),G=$&&$.mapping===Oa?$.image.height:null,dt=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ot=pt!==void 0?pt.length:0;let Nt=0;q.morphAttributes.position!==void 0&&(Nt=1),q.morphAttributes.normal!==void 0&&(Nt=2),q.morphAttributes.color!==void 0&&(Nt=3);let ie,tt,_t,At;if(dt){const we=mi[dt];ie=we.vertexShader,tt=we.fragmentShader}else ie=S.vertexShader,tt=S.fragmentShader,l.update(S),_t=l.getVertexShaderID(S),At=l.getFragmentShaderID(S);const xt=s.getRenderTarget(),jt=s.state.buffers.depth.getReversed(),ht=N.isInstancedMesh===!0,wt=N.isBatchedMesh===!0,Ht=!!S.map,nt=!!S.matcap,mt=!!$,k=!!S.aoMap,zt=!!S.lightMap,vt=!!S.bumpMap,Pt=!!S.normalMap,Mt=!!S.displacementMap,kt=!!S.emissiveMap,Ot=!!S.metalnessMap,L=!!S.roughnessMap,A=S.anisotropy>0,Z=S.clearcoat>0,st=S.dispersion>0,ut=S.iridescence>0,rt=S.sheen>0,$t=S.transmission>0,Et=A&&!!S.anisotropyMap,It=Z&&!!S.clearcoatMap,ve=Z&&!!S.clearcoatNormalMap,yt=Z&&!!S.clearcoatRoughnessMap,Gt=ut&&!!S.iridescenceMap,se=ut&&!!S.iridescenceThicknessMap,oe=rt&&!!S.sheenColorMap,Bt=rt&&!!S.sheenRoughnessMap,_e=!!S.specularMap,he=!!S.specularColorMap,Wt=!!S.specularIntensityMap,B=$t&&!!S.transmissionMap,at=$t&&!!S.thicknessMap,K=!!S.gradientMap,it=!!S.alphaMap,Rt=S.alphaTest>0,Lt=!!S.alphaHash,re=!!S.extensions;let Be=hs;S.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Be=s.toneMapping);const sn={shaderID:dt,shaderType:S.type,shaderName:S.name,vertexShader:ie,fragmentShader:tt,defines:S.defines,customVertexShaderID:_t,customFragmentShaderID:At,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:wt,batchingColor:wt&&N._colorsTexture!==null,instancing:ht,instancingColor:ht&&N.instanceColor!==null,instancingMorph:ht&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:xt===null?s.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Po,alphaToCoverage:!!S.alphaToCoverage,map:Ht,matcap:nt,envMap:mt,envMapMode:mt&&$.mapping,envMapCubeUVHeight:G,aoMap:k,lightMap:zt,bumpMap:vt,normalMap:Pt,displacementMap:p&&Mt,emissiveMap:kt,normalMapObjectSpace:Pt&&S.normalMapType===Zp,normalMapTangentSpace:Pt&&S.normalMapType===vf,metalnessMap:Ot,roughnessMap:L,anisotropy:A,anisotropyMap:Et,clearcoat:Z,clearcoatMap:It,clearcoatNormalMap:ve,clearcoatRoughnessMap:yt,dispersion:st,iridescence:ut,iridescenceMap:Gt,iridescenceThicknessMap:se,sheen:rt,sheenColorMap:oe,sheenRoughnessMap:Bt,specularMap:_e,specularColorMap:he,specularIntensityMap:Wt,transmission:$t,transmissionMap:B,thicknessMap:at,gradientMap:K,opaque:S.transparent===!1&&S.blending===Mo&&S.alphaToCoverage===!1,alphaMap:it,alphaTest:Rt,alphaHash:Lt,combine:S.combine,mapUv:Ht&&_(S.map.channel),aoMapUv:k&&_(S.aoMap.channel),lightMapUv:zt&&_(S.lightMap.channel),bumpMapUv:vt&&_(S.bumpMap.channel),normalMapUv:Pt&&_(S.normalMap.channel),displacementMapUv:Mt&&_(S.displacementMap.channel),emissiveMapUv:kt&&_(S.emissiveMap.channel),metalnessMapUv:Ot&&_(S.metalnessMap.channel),roughnessMapUv:L&&_(S.roughnessMap.channel),anisotropyMapUv:Et&&_(S.anisotropyMap.channel),clearcoatMapUv:It&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ve&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&_(S.sheenRoughnessMap.channel),specularMapUv:_e&&_(S.specularMap.channel),specularColorMapUv:he&&_(S.specularColorMap.channel),specularIntensityMapUv:Wt&&_(S.specularIntensityMap.channel),transmissionMapUv:B&&_(S.transmissionMap.channel),thicknessMapUv:at&&_(S.thicknessMap.channel),alphaMapUv:it&&_(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Pt||A),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(Ht||it),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:jt,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Nt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Be,decodeVideoTexture:Ht&&S.map.isVideoTexture===!0&&Ae.getTransfer(S.map.colorSpace)===Fe,decodeVideoTextureEmissive:kt&&S.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(S.emissiveMap.colorSpace)===Fe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===He,flipSided:S.side===Tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:re&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&S.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return sn.vertexUv1s=c.has(1),sn.vertexUv2s=c.has(2),sn.vertexUv3s=c.has(3),c.clear(),sn}function u(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(M(y,S),x(y,S),y.push(s.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const y=g[S.type];let P;if(y){const w=mi[y];P=Tf.clone(w.uniforms)}else P=S.uniforms;return P}function T(S,y){let P;for(let w=0,N=h.length;w<N;w++){const z=h[w];if(z.cacheKey===y){P=z,++P.usedTimes;break}}return P===void 0&&(P=new Q_(s,y,S,o),h.push(P)),P}function E(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:T,releaseProgram:E,releaseShaderCache:b,programs:h,dispose:R}}function sM(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,l){s.get(r)[a]=l}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function oM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Du(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Iu(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(f,p,d,g,_,m){let u=s[t];return u===void 0?(u={id:f.id,object:f,geometry:p,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},s[t]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=d,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=_,u.group=m),t++,u}function a(f,p,d,g,_,m){const u=r(f,p,d,g,_,m);d.transmission>0?n.push(u):d.transparent===!0?i.push(u):e.push(u)}function l(f,p,d,g,_,m){const u=r(f,p,d,g,_,m);d.transmission>0?n.unshift(u):d.transparent===!0?i.unshift(u):e.unshift(u)}function c(f,p){e.length>1&&e.sort(f||oM),n.length>1&&n.sort(p||Du),i.length>1&&i.sort(p||Du)}function h(){for(let f=t,p=s.length;f<p;f++){const d=s[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:l,finish:h,sort:c}}function rM(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Iu,s.set(n,[r])):i>=o.length?(r=new Iu,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function aM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Qt};break;case"SpotLight":e={position:new U,direction:new U,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function lM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let cM=0;function hM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function uM(s){const t=new aM,e=lM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,o=new Me,r=new Me;function a(c){let h=0,f=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,u=0,M=0,x=0,v=0,T=0,E=0,b=0;c.sort(hM);for(let S=0,y=c.length;S<y;S++){const P=c[S],w=P.color,N=P.intensity,z=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=w.r*N,f+=w.g*N,p+=w.b*N;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],N);b++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,G=e.get(P);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=P.shadow.matrix,M++}n.directional[d]=V,d++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(w).multiplyScalar(N),V.distance=z,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const $=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,$.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=$.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=q,v++}_++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(w).multiplyScalar(N),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const $=P.shadow,G=e.get(P);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(N),V.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[u]=V,u++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==T||R.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=T,R.numLightProbes=b,n.version=cM++)}function l(c,h){let f=0,p=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let u=0,M=c.length;u<M;u++){const x=c[u];if(x.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),r.identity(),o.copy(x.matrixWorld),o.premultiply(m),r.extractRotation(o),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(x.isPointLight){const v=n.point[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),p++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function ku(s){const t=new uM(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function dM(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new ku(s),t.set(i,[a])):o>=r.length?(a=new ku(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class fM extends ds{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=jp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pM extends ds{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const mM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gM=`uniform sampler2D shadow_pass;
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
}`;function vM(s,t,e){let n=new hh;const i=new ct,o=new ct,r=new qe,a=new fM({depthPacking:Kp}),l=new pM,c={},h=e.maxTextureSize,f={[us]:Tn,[Tn]:us,[He]:He},p=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:mM,fragmentShader:gM}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Y(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nf;let u=this.type;this.render=function(E,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),w=s.state;w.setBlending(cs),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const N=u!==Di&&this.type===Di,z=u===Di&&this.type!==Di;for(let q=0,V=E.length;q<V;q++){const $=E[q],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const dt=G.getFrameExtents();if(i.multiply(dt),o.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/dt.x),i.x=o.x*dt.x,G.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/dt.y),i.y=o.y*dt.y,G.mapSize.y=o.y)),G.map===null||N===!0||z===!0){const ot=this.type!==Di?{minFilter:zn,magFilter:zn}:{};G.map!==null&&G.map.dispose(),G.map=new Ps(i.x,i.y,ot),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const pt=G.getViewportCount();for(let ot=0;ot<pt;ot++){const Nt=G.getViewport(ot);r.set(o.x*Nt.x,o.y*Nt.y,o.x*Nt.z,o.y*Nt.w),w.viewport(r),G.updateMatrices($,ot),n=G.getFrustum(),v(b,R,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===Di&&M(G,R),G.needsUpdate=!1}u=this.type,m.needsUpdate=!1,s.setRenderTarget(S,y,P)};function M(E,b){const R=t.update(_);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ps(i.x,i.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(b,null,R,p,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(b,null,R,d,_,null)}function x(E,b,R,S){let y=null;const P=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const w=y.uuid,N=b.uuid;let z=c[w];z===void 0&&(z={},c[w]=z);let q=z[N];q===void 0&&(q=y.clone(),z[N]=q,b.addEventListener("dispose",T)),y=q}if(y.visible=b.visible,y.wireframe=b.wireframe,S===Di?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:f[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const w=s.properties.get(y);w.light=R}return y}function v(E,b,R,S,y){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Di)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const N=t.update(E),z=E.material;if(Array.isArray(z)){const q=N.groups;for(let V=0,$=q.length;V<$;V++){const G=q[V],dt=z[G.materialIndex];if(dt&&dt.visible){const pt=x(E,dt,S,y);E.onBeforeShadow(s,E,b,R,N,pt,G),s.renderBufferDirect(R,null,N,pt,E,G),E.onAfterShadow(s,E,b,R,N,pt,G)}}}else if(z.visible){const q=x(E,z,S,y);E.onBeforeShadow(s,E,b,R,N,q,null),s.renderBufferDirect(R,null,N,q,E,null),E.onAfterShadow(s,E,b,R,N,q,null)}}const w=E.children;for(let N=0,z=w.length;N<z;N++)v(w[N],b,R,S,y)}function T(E){E.target.removeEventListener("dispose",T);for(const R in c){const S=c[R],y=E.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const _M={[rc]:ac,[lc]:uc,[cc]:dc,[bo]:hc,[ac]:rc,[uc]:lc,[dc]:cc,[hc]:bo};function MM(s,t){function e(){let B=!1;const at=new qe;let K=null;const it=new qe(0,0,0,0);return{setMask:function(Rt){K!==Rt&&!B&&(s.colorMask(Rt,Rt,Rt,Rt),K=Rt)},setLocked:function(Rt){B=Rt},setClear:function(Rt,Lt,re,Be,sn){sn===!0&&(Rt*=Be,Lt*=Be,re*=Be),at.set(Rt,Lt,re,Be),it.equals(at)===!1&&(s.clearColor(Rt,Lt,re,Be),it.copy(at))},reset:function(){B=!1,K=null,it.set(-1,0,0,0)}}}function n(){let B=!1,at=!1,K=null,it=null,Rt=null;return{setReversed:function(Lt){if(at!==Lt){const re=t.get("EXT_clip_control");at?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);const Be=Rt;Rt=null,this.setClear(Be)}at=Lt},getReversed:function(){return at},setTest:function(Lt){Lt?xt(s.DEPTH_TEST):jt(s.DEPTH_TEST)},setMask:function(Lt){K!==Lt&&!B&&(s.depthMask(Lt),K=Lt)},setFunc:function(Lt){if(at&&(Lt=_M[Lt]),it!==Lt){switch(Lt){case rc:s.depthFunc(s.NEVER);break;case ac:s.depthFunc(s.ALWAYS);break;case lc:s.depthFunc(s.LESS);break;case bo:s.depthFunc(s.LEQUAL);break;case cc:s.depthFunc(s.EQUAL);break;case hc:s.depthFunc(s.GEQUAL);break;case uc:s.depthFunc(s.GREATER);break;case dc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}it=Lt}},setLocked:function(Lt){B=Lt},setClear:function(Lt){Rt!==Lt&&(at&&(Lt=1-Lt),s.clearDepth(Lt),Rt=Lt)},reset:function(){B=!1,K=null,it=null,Rt=null,at=!1}}}function i(){let B=!1,at=null,K=null,it=null,Rt=null,Lt=null,re=null,Be=null,sn=null;return{setTest:function(we){B||(we?xt(s.STENCIL_TEST):jt(s.STENCIL_TEST))},setMask:function(we){at!==we&&!B&&(s.stencilMask(we),at=we)},setFunc:function(we,xn,Bn){(K!==we||it!==xn||Rt!==Bn)&&(s.stencilFunc(we,xn,Bn),K=we,it=xn,Rt=Bn)},setOp:function(we,xn,Bn){(Lt!==we||re!==xn||Be!==Bn)&&(s.stencilOp(we,xn,Bn),Lt=we,re=xn,Be=Bn)},setLocked:function(we){B=we},setClear:function(we){sn!==we&&(s.clearStencil(we),sn=we)},reset:function(){B=!1,at=null,K=null,it=null,Rt=null,Lt=null,re=null,Be=null,sn=null}}}const o=new e,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},f={},p=new WeakMap,d=[],g=null,_=!1,m=null,u=null,M=null,x=null,v=null,T=null,E=null,b=new Qt(0,0,0),R=0,S=!1,y=null,P=null,w=null,N=null,z=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,$=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=$>=2);let dt=null,pt={};const ot=s.getParameter(s.SCISSOR_BOX),Nt=s.getParameter(s.VIEWPORT),ie=new qe().fromArray(ot),tt=new qe().fromArray(Nt);function _t(B,at,K,it){const Rt=new Uint8Array(4),Lt=s.createTexture();s.bindTexture(B,Lt),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let re=0;re<K;re++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,it,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(at+re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return Lt}const At={};At[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),At[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),At[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),xt(s.DEPTH_TEST),r.setFunc(bo),vt(!1),Pt(Bh),xt(s.CULL_FACE),k(cs);function xt(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function jt(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function ht(B,at){return f[B]!==at?(s.bindFramebuffer(B,at),f[B]=at,B===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=at),B===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=at),!0):!1}function wt(B,at){let K=d,it=!1;if(B){K=p.get(at),K===void 0&&(K=[],p.set(at,K));const Rt=B.textures;if(K.length!==Rt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let Lt=0,re=Rt.length;Lt<re;Lt++)K[Lt]=s.COLOR_ATTACHMENT0+Lt;K.length=Rt.length,it=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,it=!0);it&&s.drawBuffers(K)}function Ht(B){return g!==B?(s.useProgram(B),g=B,!0):!1}const nt={[ws]:s.FUNC_ADD,[wp]:s.FUNC_SUBTRACT,[Sp]:s.FUNC_REVERSE_SUBTRACT};nt[Ep]=s.MIN,nt[Tp]=s.MAX;const mt={[Ap]:s.ZERO,[Rp]:s.ONE,[Cp]:s.SRC_COLOR,[sc]:s.SRC_ALPHA,[Up]:s.SRC_ALPHA_SATURATE,[Ip]:s.DST_COLOR,[Lp]:s.DST_ALPHA,[Pp]:s.ONE_MINUS_SRC_COLOR,[oc]:s.ONE_MINUS_SRC_ALPHA,[kp]:s.ONE_MINUS_DST_COLOR,[Dp]:s.ONE_MINUS_DST_ALPHA,[Np]:s.CONSTANT_COLOR,[Op]:s.ONE_MINUS_CONSTANT_COLOR,[Fp]:s.CONSTANT_ALPHA,[zp]:s.ONE_MINUS_CONSTANT_ALPHA};function k(B,at,K,it,Rt,Lt,re,Be,sn,we){if(B===cs){_===!0&&(jt(s.BLEND),_=!1);return}if(_===!1&&(xt(s.BLEND),_=!0),B!==bp){if(B!==m||we!==S){if((u!==ws||v!==ws)&&(s.blendEquation(s.FUNC_ADD),u=ws,v=ws),we)switch(B){case Mo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ic:s.blendFunc(s.ONE,s.ONE);break;case Hh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Mo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ic:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Hh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,x=null,T=null,E=null,b.set(0,0,0),R=0,m=B,S=we}return}Rt=Rt||at,Lt=Lt||K,re=re||it,(at!==u||Rt!==v)&&(s.blendEquationSeparate(nt[at],nt[Rt]),u=at,v=Rt),(K!==M||it!==x||Lt!==T||re!==E)&&(s.blendFuncSeparate(mt[K],mt[it],mt[Lt],mt[re]),M=K,x=it,T=Lt,E=re),(Be.equals(b)===!1||sn!==R)&&(s.blendColor(Be.r,Be.g,Be.b,sn),b.copy(Be),R=sn),m=B,S=!1}function zt(B,at){B.side===He?jt(s.CULL_FACE):xt(s.CULL_FACE);let K=B.side===Tn;at&&(K=!K),vt(K),B.blending===Mo&&B.transparent===!1?k(cs):k(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),o.setMask(B.colorWrite);const it=B.stencilWrite;a.setTest(it),it&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),kt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?xt(s.SAMPLE_ALPHA_TO_COVERAGE):jt(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(B){y!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),y=B)}function Pt(B){B!==xp?(xt(s.CULL_FACE),B!==P&&(B===Bh?s.cullFace(s.BACK):B===yp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):jt(s.CULL_FACE),P=B}function Mt(B){B!==w&&(V&&s.lineWidth(B),w=B)}function kt(B,at,K){B?(xt(s.POLYGON_OFFSET_FILL),(N!==at||z!==K)&&(s.polygonOffset(at,K),N=at,z=K)):jt(s.POLYGON_OFFSET_FILL)}function Ot(B){B?xt(s.SCISSOR_TEST):jt(s.SCISSOR_TEST)}function L(B){B===void 0&&(B=s.TEXTURE0+q-1),dt!==B&&(s.activeTexture(B),dt=B)}function A(B,at,K){K===void 0&&(dt===null?K=s.TEXTURE0+q-1:K=dt);let it=pt[K];it===void 0&&(it={type:void 0,texture:void 0},pt[K]=it),(it.type!==B||it.texture!==at)&&(dt!==K&&(s.activeTexture(K),dt=K),s.bindTexture(B,at||At[B]),it.type=B,it.texture=at)}function Z(){const B=pt[dt];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function st(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $t(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function It(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function yt(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Gt(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(B){ie.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),ie.copy(B))}function Bt(B){tt.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),tt.copy(B))}function _e(B,at){let K=c.get(at);K===void 0&&(K=new WeakMap,c.set(at,K));let it=K.get(B);it===void 0&&(it=s.getUniformBlockIndex(at,B.name),K.set(B,it))}function he(B,at){const it=c.get(at).get(B);l.get(at)!==it&&(s.uniformBlockBinding(at,it,B.__bindingPointIndex),l.set(at,it))}function Wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},dt=null,pt={},f={},p=new WeakMap,d=[],g=null,_=!1,m=null,u=null,M=null,x=null,v=null,T=null,E=null,b=new Qt(0,0,0),R=0,S=!1,y=null,P=null,w=null,N=null,z=null,ie.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:xt,disable:jt,bindFramebuffer:ht,drawBuffers:wt,useProgram:Ht,setBlending:k,setMaterial:zt,setFlipSided:vt,setCullFace:Pt,setLineWidth:Mt,setPolygonOffset:kt,setScissorTest:Ot,activeTexture:L,bindTexture:A,unbindTexture:Z,compressedTexImage2D:st,compressedTexImage3D:ut,texImage2D:Gt,texImage3D:se,updateUBOMapping:_e,uniformBlockBinding:he,texStorage2D:ve,texStorage3D:yt,texSubImage2D:rt,texSubImage3D:$t,compressedTexSubImage2D:Et,compressedTexSubImage3D:It,scissor:oe,viewport:Bt,reset:Wt}}function Uu(s,t,e,n){const i=xM(n);switch(e){case uf:return s*t;case ff:return s*t;case pf:return s*t*2;case sh:return s*t/i.components*i.byteLength;case oh:return s*t/i.components*i.byteLength;case mf:return s*t*2/i.components*i.byteLength;case rh:return s*t*2/i.components*i.byteLength;case df:return s*t*3/i.components*i.byteLength;case li:return s*t*4/i.components*i.byteLength;case ah:return s*t*4/i.components*i.byteLength;case Sa:case Ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ta:case Aa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vc:case Mc:return Math.max(s,16)*Math.max(t,8)/4;case gc:case _c:return Math.max(s,8)*Math.max(t,8)/2;case xc:case yc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case bc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Lc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case kc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Uc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ra:case Oc:case Fc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case gf:case zc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Bc:case Hc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xM(s){switch(s){case Bi:case lf:return{byteLength:1,components:1};case hr:case cf:case xr:return{byteLength:2,components:1};case nh:case ih:return{byteLength:2,components:4};case Cs:case eh:case vi:return{byteLength:4,components:1};case hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function yM(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let f;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,A){return d?new OffscreenCanvas(L,A):Ia("canvas")}function _(L,A,Z){let st=1;const ut=Ot(L);if((ut.width>Z||ut.height>Z)&&(st=Z/Math.max(ut.width,ut.height)),st<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const rt=Math.floor(st*ut.width),$t=Math.floor(st*ut.height);f===void 0&&(f=g(rt,$t));const Et=A?g(rt,$t):f;return Et.width=rt,Et.height=$t,Et.getContext("2d").drawImage(L,0,0,rt,$t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+rt+"x"+$t+")."),Et}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),L;return L}function m(L){return L.generateMipmaps}function u(L){s.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(L,A,Z,st,ut=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let rt=A;if(A===s.RED&&(Z===s.FLOAT&&(rt=s.R32F),Z===s.HALF_FLOAT&&(rt=s.R16F),Z===s.UNSIGNED_BYTE&&(rt=s.R8)),A===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(rt=s.R8UI),Z===s.UNSIGNED_SHORT&&(rt=s.R16UI),Z===s.UNSIGNED_INT&&(rt=s.R32UI),Z===s.BYTE&&(rt=s.R8I),Z===s.SHORT&&(rt=s.R16I),Z===s.INT&&(rt=s.R32I)),A===s.RG&&(Z===s.FLOAT&&(rt=s.RG32F),Z===s.HALF_FLOAT&&(rt=s.RG16F),Z===s.UNSIGNED_BYTE&&(rt=s.RG8)),A===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(rt=s.RG8UI),Z===s.UNSIGNED_SHORT&&(rt=s.RG16UI),Z===s.UNSIGNED_INT&&(rt=s.RG32UI),Z===s.BYTE&&(rt=s.RG8I),Z===s.SHORT&&(rt=s.RG16I),Z===s.INT&&(rt=s.RG32I)),A===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(rt=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(rt=s.RGB16UI),Z===s.UNSIGNED_INT&&(rt=s.RGB32UI),Z===s.BYTE&&(rt=s.RGB8I),Z===s.SHORT&&(rt=s.RGB16I),Z===s.INT&&(rt=s.RGB32I)),A===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(rt=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(rt=s.RGBA16UI),Z===s.UNSIGNED_INT&&(rt=s.RGBA32UI),Z===s.BYTE&&(rt=s.RGBA8I),Z===s.SHORT&&(rt=s.RGBA16I),Z===s.INT&&(rt=s.RGBA32I)),A===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(rt=s.RGB9_E5),A===s.RGBA){const $t=ut?Fa:Ae.getTransfer(st);Z===s.FLOAT&&(rt=s.RGBA32F),Z===s.HALF_FLOAT&&(rt=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(rt=$t===Fe?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(rt=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(rt=s.RGB5_A1)}return(rt===s.R16F||rt===s.R32F||rt===s.RG16F||rt===s.RG32F||rt===s.RGBA16F||rt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function v(L,A){let Z;return L?A===null||A===Cs||A===To?Z=s.DEPTH24_STENCIL8:A===vi?Z=s.DEPTH32F_STENCIL8:A===hr&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Cs||A===To?Z=s.DEPTH_COMPONENT24:A===vi?Z=s.DEPTH_COMPONENT32F:A===hr&&(Z=s.DEPTH_COMPONENT16),Z}function T(L,A){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==zn&&L.minFilter!==gi?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function E(L){const A=L.target;A.removeEventListener("dispose",E),R(A),A.isVideoTexture&&h.delete(A)}function b(L){const A=L.target;A.removeEventListener("dispose",b),y(A)}function R(L){const A=n.get(L);if(A.__webglInit===void 0)return;const Z=L.source,st=p.get(Z);if(st){const ut=st[A.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&S(L),Object.keys(st).length===0&&p.delete(Z)}n.remove(L)}function S(L){const A=n.get(L);s.deleteTexture(A.__webglTexture);const Z=L.source,st=p.get(Z);delete st[A.__cacheKey],r.memory.textures--}function y(L){const A=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(A.__webglFramebuffer[st]))for(let ut=0;ut<A.__webglFramebuffer[st].length;ut++)s.deleteFramebuffer(A.__webglFramebuffer[st][ut]);else s.deleteFramebuffer(A.__webglFramebuffer[st]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[st])}else{if(Array.isArray(A.__webglFramebuffer))for(let st=0;st<A.__webglFramebuffer.length;st++)s.deleteFramebuffer(A.__webglFramebuffer[st]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let st=0;st<A.__webglColorRenderbuffer.length;st++)A.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[st]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=L.textures;for(let st=0,ut=Z.length;st<ut;st++){const rt=n.get(Z[st]);rt.__webglTexture&&(s.deleteTexture(rt.__webglTexture),r.memory.textures--),n.remove(Z[st])}n.remove(L)}let P=0;function w(){P=0}function N(){const L=P;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),P+=1,L}function z(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function q(L,A){const Z=n.get(L);if(L.isVideoTexture&&Mt(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const st=L.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(Z,L,A);return}}e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+A)}function V(L,A){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){tt(Z,L,A);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+A)}function $(L,A){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){tt(Z,L,A);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+A)}function G(L,A){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){_t(Z,L,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+A)}const dt={[Eo]:s.REPEAT,[Ui]:s.CLAMP_TO_EDGE,[mc]:s.MIRRORED_REPEAT},pt={[zn]:s.NEAREST,[Yp]:s.NEAREST_MIPMAP_NEAREST,[Lr]:s.NEAREST_MIPMAP_LINEAR,[gi]:s.LINEAR,[il]:s.LINEAR_MIPMAP_NEAREST,[Ts]:s.LINEAR_MIPMAP_LINEAR},ot={[Jp]:s.NEVER,[s0]:s.ALWAYS,[Qp]:s.LESS,[_f]:s.LEQUAL,[t0]:s.EQUAL,[i0]:s.GEQUAL,[e0]:s.GREATER,[n0]:s.NOTEQUAL};function Nt(L,A){if(A.type===vi&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===gi||A.magFilter===il||A.magFilter===Lr||A.magFilter===Ts||A.minFilter===gi||A.minFilter===il||A.minFilter===Lr||A.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,dt[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,dt[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,dt[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,pt[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,pt[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ot[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===zn||A.minFilter!==Lr&&A.minFilter!==Ts||A.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ie(L,A){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",E));const st=A.source;let ut=p.get(st);ut===void 0&&(ut={},p.set(st,ut));const rt=z(A);if(rt!==L.__cacheKey){ut[rt]===void 0&&(ut[rt]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,Z=!0),ut[rt].usedTimes++;const $t=ut[L.__cacheKey];$t!==void 0&&(ut[L.__cacheKey].usedTimes--,$t.usedTimes===0&&S(A)),L.__cacheKey=rt,L.__webglTexture=ut[rt].texture}return Z}function tt(L,A,Z){let st=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(st=s.TEXTURE_3D);const ut=ie(L,A),rt=A.source;e.bindTexture(st,L.__webglTexture,s.TEXTURE0+Z);const $t=n.get(rt);if(rt.version!==$t.__version||ut===!0){e.activeTexture(s.TEXTURE0+Z);const Et=Ae.getPrimaries(Ae.workingColorSpace),It=A.colorSpace===rs?null:Ae.getPrimaries(A.colorSpace),ve=A.colorSpace===rs||Et===It?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let yt=_(A.image,!1,i.maxTextureSize);yt=kt(A,yt);const Gt=o.convert(A.format,A.colorSpace),se=o.convert(A.type);let oe=x(A.internalFormat,Gt,se,A.colorSpace,A.isVideoTexture);Nt(st,A);let Bt;const _e=A.mipmaps,he=A.isVideoTexture!==!0,Wt=$t.__version===void 0||ut===!0,B=rt.dataReady,at=T(A,yt);if(A.isDepthTexture)oe=v(A.format===Ao,A.type),Wt&&(he?e.texStorage2D(s.TEXTURE_2D,1,oe,yt.width,yt.height):e.texImage2D(s.TEXTURE_2D,0,oe,yt.width,yt.height,0,Gt,se,null));else if(A.isDataTexture)if(_e.length>0){he&&Wt&&e.texStorage2D(s.TEXTURE_2D,at,oe,_e[0].width,_e[0].height);for(let K=0,it=_e.length;K<it;K++)Bt=_e[K],he?B&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Bt.width,Bt.height,Gt,se,Bt.data):e.texImage2D(s.TEXTURE_2D,K,oe,Bt.width,Bt.height,0,Gt,se,Bt.data);A.generateMipmaps=!1}else he?(Wt&&e.texStorage2D(s.TEXTURE_2D,at,oe,yt.width,yt.height),B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt.width,yt.height,Gt,se,yt.data)):e.texImage2D(s.TEXTURE_2D,0,oe,yt.width,yt.height,0,Gt,se,yt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){he&&Wt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,oe,_e[0].width,_e[0].height,yt.depth);for(let K=0,it=_e.length;K<it;K++)if(Bt=_e[K],A.format!==li)if(Gt!==null)if(he){if(B)if(A.layerUpdates.size>0){const Rt=Uu(Bt.width,Bt.height,A.format,A.type);for(const Lt of A.layerUpdates){const re=Bt.data.subarray(Lt*Rt/Bt.data.BYTES_PER_ELEMENT,(Lt+1)*Rt/Bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,Lt,Bt.width,Bt.height,1,Gt,re)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Bt.width,Bt.height,yt.depth,Gt,Bt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,oe,Bt.width,Bt.height,yt.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Bt.width,Bt.height,yt.depth,Gt,se,Bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,oe,Bt.width,Bt.height,yt.depth,0,Gt,se,Bt.data)}else{he&&Wt&&e.texStorage2D(s.TEXTURE_2D,at,oe,_e[0].width,_e[0].height);for(let K=0,it=_e.length;K<it;K++)Bt=_e[K],A.format!==li?Gt!==null?he?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,Bt.width,Bt.height,Gt,Bt.data):e.compressedTexImage2D(s.TEXTURE_2D,K,oe,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?B&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Bt.width,Bt.height,Gt,se,Bt.data):e.texImage2D(s.TEXTURE_2D,K,oe,Bt.width,Bt.height,0,Gt,se,Bt.data)}else if(A.isDataArrayTexture)if(he){if(Wt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,oe,yt.width,yt.height,yt.depth),B)if(A.layerUpdates.size>0){const K=Uu(yt.width,yt.height,A.format,A.type);for(const it of A.layerUpdates){const Rt=yt.data.subarray(it*K/yt.data.BYTES_PER_ELEMENT,(it+1)*K/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,yt.width,yt.height,1,Gt,se,Rt)}A.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Gt,se,yt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,oe,yt.width,yt.height,yt.depth,0,Gt,se,yt.data);else if(A.isData3DTexture)he?(Wt&&e.texStorage3D(s.TEXTURE_3D,at,oe,yt.width,yt.height,yt.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Gt,se,yt.data)):e.texImage3D(s.TEXTURE_3D,0,oe,yt.width,yt.height,yt.depth,0,Gt,se,yt.data);else if(A.isFramebufferTexture){if(Wt)if(he)e.texStorage2D(s.TEXTURE_2D,at,oe,yt.width,yt.height);else{let K=yt.width,it=yt.height;for(let Rt=0;Rt<at;Rt++)e.texImage2D(s.TEXTURE_2D,Rt,oe,K,it,0,Gt,se,null),K>>=1,it>>=1}}else if(_e.length>0){if(he&&Wt){const K=Ot(_e[0]);e.texStorage2D(s.TEXTURE_2D,at,oe,K.width,K.height)}for(let K=0,it=_e.length;K<it;K++)Bt=_e[K],he?B&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Gt,se,Bt):e.texImage2D(s.TEXTURE_2D,K,oe,Gt,se,Bt);A.generateMipmaps=!1}else if(he){if(Wt){const K=Ot(yt);e.texStorage2D(s.TEXTURE_2D,at,oe,K.width,K.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Gt,se,yt)}else e.texImage2D(s.TEXTURE_2D,0,oe,Gt,se,yt);m(A)&&u(st),$t.__version=rt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function _t(L,A,Z){if(A.image.length!==6)return;const st=ie(L,A),ut=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Z);const rt=n.get(ut);if(ut.version!==rt.__version||st===!0){e.activeTexture(s.TEXTURE0+Z);const $t=Ae.getPrimaries(Ae.workingColorSpace),Et=A.colorSpace===rs?null:Ae.getPrimaries(A.colorSpace),It=A.colorSpace===rs||$t===Et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const ve=A.isCompressedTexture||A.image[0].isCompressedTexture,yt=A.image[0]&&A.image[0].isDataTexture,Gt=[];for(let it=0;it<6;it++)!ve&&!yt?Gt[it]=_(A.image[it],!0,i.maxCubemapSize):Gt[it]=yt?A.image[it].image:A.image[it],Gt[it]=kt(A,Gt[it]);const se=Gt[0],oe=o.convert(A.format,A.colorSpace),Bt=o.convert(A.type),_e=x(A.internalFormat,oe,Bt,A.colorSpace),he=A.isVideoTexture!==!0,Wt=rt.__version===void 0||st===!0,B=ut.dataReady;let at=T(A,se);Nt(s.TEXTURE_CUBE_MAP,A);let K;if(ve){he&&Wt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,_e,se.width,se.height);for(let it=0;it<6;it++){K=Gt[it].mipmaps;for(let Rt=0;Rt<K.length;Rt++){const Lt=K[Rt];A.format!==li?oe!==null?he?B&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,0,0,Lt.width,Lt.height,oe,Lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,_e,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,0,0,Lt.width,Lt.height,oe,Bt,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,_e,Lt.width,Lt.height,0,oe,Bt,Lt.data)}}}else{if(K=A.mipmaps,he&&Wt){K.length>0&&at++;const it=Ot(Gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,_e,it.width,it.height)}for(let it=0;it<6;it++)if(yt){he?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Gt[it].width,Gt[it].height,oe,Bt,Gt[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,_e,Gt[it].width,Gt[it].height,0,oe,Bt,Gt[it].data);for(let Rt=0;Rt<K.length;Rt++){const re=K[Rt].image[it].image;he?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,0,0,re.width,re.height,oe,Bt,re.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,_e,re.width,re.height,0,oe,Bt,re.data)}}else{he?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,oe,Bt,Gt[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,_e,oe,Bt,Gt[it]);for(let Rt=0;Rt<K.length;Rt++){const Lt=K[Rt];he?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,0,0,oe,Bt,Lt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,_e,oe,Bt,Lt.image[it])}}}m(A)&&u(s.TEXTURE_CUBE_MAP),rt.__version=ut.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function At(L,A,Z,st,ut,rt){const $t=o.convert(Z.format,Z.colorSpace),Et=o.convert(Z.type),It=x(Z.internalFormat,$t,Et,Z.colorSpace),ve=n.get(A),yt=n.get(Z);if(yt.__renderTarget=A,!ve.__hasExternalTextures){const Gt=Math.max(1,A.width>>rt),se=Math.max(1,A.height>>rt);ut===s.TEXTURE_3D||ut===s.TEXTURE_2D_ARRAY?e.texImage3D(ut,rt,It,Gt,se,A.depth,0,$t,Et,null):e.texImage2D(ut,rt,It,Gt,se,0,$t,Et,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),Pt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,ut,yt.__webglTexture,0,vt(A)):(ut===s.TEXTURE_2D||ut>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,ut,yt.__webglTexture,rt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(L,A,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){const st=A.depthTexture,ut=st&&st.isDepthTexture?st.type:null,rt=v(A.stencilBuffer,ut),$t=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=vt(A);Pt(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Et,rt,A.width,A.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,rt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,rt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$t,s.RENDERBUFFER,L)}else{const st=A.textures;for(let ut=0;ut<st.length;ut++){const rt=st[ut],$t=o.convert(rt.format,rt.colorSpace),Et=o.convert(rt.type),It=x(rt.internalFormat,$t,Et,rt.colorSpace),ve=vt(A);Z&&Pt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,It,A.width,A.height):Pt(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,It,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,It,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function jt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(A.depthTexture);st.__renderTarget=A,(!st.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),q(A.depthTexture,0);const ut=st.__webglTexture,rt=vt(A);if(A.depthTexture.format===xo)Pt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ut,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ut,0);else if(A.depthTexture.format===Ao)Pt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ut,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function ht(L){const A=n.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const st=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),st){const ut=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,st.removeEventListener("dispose",ut)};st.addEventListener("dispose",ut),A.__depthDisposeCallback=ut}A.__boundDepthTexture=st}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");jt(A.__webglFramebuffer,L)}else if(Z){A.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[st]),A.__webglDepthbuffer[st]===void 0)A.__webglDepthbuffer[st]=s.createRenderbuffer(),xt(A.__webglDepthbuffer[st],L,!1);else{const ut=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=A.__webglDepthbuffer[st];s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),xt(A.__webglDepthbuffer,L,!1);else{const st=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,ut)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(L,A,Z){const st=n.get(L);A!==void 0&&At(st.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&ht(L)}function Ht(L){const A=L.texture,Z=n.get(L),st=n.get(A);L.addEventListener("dispose",b);const ut=L.textures,rt=L.isWebGLCubeRenderTarget===!0,$t=ut.length>1;if($t||(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=A.version,r.memory.textures++),rt){Z.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[Et]=[];for(let It=0;It<A.mipmaps.length;It++)Z.__webglFramebuffer[Et][It]=s.createFramebuffer()}else Z.__webglFramebuffer[Et]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Et=0;Et<A.mipmaps.length;Et++)Z.__webglFramebuffer[Et]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if($t)for(let Et=0,It=ut.length;Et<It;Et++){const ve=n.get(ut[Et]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),r.memory.textures++)}if(L.samples>0&&Pt(L)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Et=0;Et<ut.length;Et++){const It=ut[Et];Z.__webglColorRenderbuffer[Et]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Et]);const ve=o.convert(It.format,It.colorSpace),yt=o.convert(It.type),Gt=x(It.internalFormat,ve,yt,It.colorSpace,L.isXRRenderTarget===!0),se=vt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,se,Gt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Et])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),xt(Z.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(rt){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),Nt(s.TEXTURE_CUBE_MAP,A);for(let Et=0;Et<6;Et++)if(A.mipmaps&&A.mipmaps.length>0)for(let It=0;It<A.mipmaps.length;It++)At(Z.__webglFramebuffer[Et][It],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,It);else At(Z.__webglFramebuffer[Et],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);m(A)&&u(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if($t){for(let Et=0,It=ut.length;Et<It;Et++){const ve=ut[Et],yt=n.get(ve);e.bindTexture(s.TEXTURE_2D,yt.__webglTexture),Nt(s.TEXTURE_2D,ve),At(Z.__webglFramebuffer,L,ve,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,0),m(ve)&&u(s.TEXTURE_2D)}e.unbindTexture()}else{let Et=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Et=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Et,st.__webglTexture),Nt(Et,A),A.mipmaps&&A.mipmaps.length>0)for(let It=0;It<A.mipmaps.length;It++)At(Z.__webglFramebuffer[It],L,A,s.COLOR_ATTACHMENT0,Et,It);else At(Z.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,Et,0);m(A)&&u(Et),e.unbindTexture()}L.depthBuffer&&ht(L)}function nt(L){const A=L.textures;for(let Z=0,st=A.length;Z<st;Z++){const ut=A[Z];if(m(ut)){const rt=M(L),$t=n.get(ut).__webglTexture;e.bindTexture(rt,$t),u(rt),e.unbindTexture()}}}const mt=[],k=[];function zt(L){if(L.samples>0){if(Pt(L)===!1){const A=L.textures,Z=L.width,st=L.height;let ut=s.COLOR_BUFFER_BIT;const rt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$t=n.get(L),Et=A.length>1;if(Et)for(let It=0;It<A.length;It++)e.bindFramebuffer(s.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,$t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,$t.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let It=0;It<A.length;It++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ut|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ut|=s.STENCIL_BUFFER_BIT)),Et){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$t.__webglColorRenderbuffer[It]);const ve=n.get(A[It]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ve,0)}s.blitFramebuffer(0,0,Z,st,0,0,Z,st,ut,s.NEAREST),l===!0&&(mt.length=0,k.length=0,mt.push(s.COLOR_ATTACHMENT0+It),L.depthBuffer&&L.resolveDepthBuffer===!1&&(mt.push(rt),k.push(rt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Et)for(let It=0;It<A.length;It++){e.bindFramebuffer(s.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,$t.__webglColorRenderbuffer[It]);const ve=n.get(A[It]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,$t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,ve,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,$t.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function vt(L){return Math.min(i.maxSamples,L.samples)}function Pt(L){const A=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Mt(L){const A=r.render.frame;h.get(L)!==A&&(h.set(L,A),L.update())}function kt(L,A){const Z=L.colorSpace,st=L.format,ut=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Po&&Z!==rs&&(Ae.getTransfer(Z)===Fe?(st!==li||ut!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function Ot(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=w,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=wt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Pt}function bM(s,t){function e(n,i=rs){let o;const r=Ae.getTransfer(i);if(n===Bi)return s.UNSIGNED_BYTE;if(n===nh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ih)return s.UNSIGNED_SHORT_5_5_5_1;if(n===hf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===lf)return s.BYTE;if(n===cf)return s.SHORT;if(n===hr)return s.UNSIGNED_SHORT;if(n===eh)return s.INT;if(n===Cs)return s.UNSIGNED_INT;if(n===vi)return s.FLOAT;if(n===xr)return s.HALF_FLOAT;if(n===uf)return s.ALPHA;if(n===df)return s.RGB;if(n===li)return s.RGBA;if(n===ff)return s.LUMINANCE;if(n===pf)return s.LUMINANCE_ALPHA;if(n===xo)return s.DEPTH_COMPONENT;if(n===Ao)return s.DEPTH_STENCIL;if(n===sh)return s.RED;if(n===oh)return s.RED_INTEGER;if(n===mf)return s.RG;if(n===rh)return s.RG_INTEGER;if(n===ah)return s.RGBA_INTEGER;if(n===Sa||n===Ea||n===Ta||n===Aa)if(r===Fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Sa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Sa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Aa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gc||n===vc||n===_c||n===Mc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===gc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_c)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xc||n===yc||n===bc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===xc||n===yc)return r===Fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===bc)return r===Fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wc||n===Sc||n===Ec||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Lc||n===Dc||n===Ic||n===kc||n===Uc||n===Nc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===wc)return r===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return r===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ec)return r===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tc)return r===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ac)return r===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rc)return r===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cc)return r===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pc)return r===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lc)return r===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dc)return r===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ic)return r===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kc)return r===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uc)return r===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nc)return r===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ra||n===Oc||n===Fc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Ra)return r===Fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gf||n===zc||n===Bc||n===Hc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ra)return o.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===To?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class wM extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class St extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SM={type:"move"};class Pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(SM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new St;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const EM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TM=`
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

}`;class AM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new _n,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Hi({vertexShader:EM,fragmentShader:TM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Y(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RM extends Is{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,f=null,p=null,d=null,g=null;const _=new AM,m=e.getContextAttributes();let u=null,M=null;const x=[],v=[],T=new ct;let E=null;const b=new On;b.viewport=new qe;const R=new On;R.viewport=new qe;const S=[b,R],y=new wM;let P=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let _t=x[tt];return _t===void 0&&(_t=new Pl,x[tt]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(tt){let _t=x[tt];return _t===void 0&&(_t=new Pl,x[tt]=_t),_t.getGripSpace()},this.getHand=function(tt){let _t=x[tt];return _t===void 0&&(_t=new Pl,x[tt]=_t),_t.getHandSpace()};function N(tt){const _t=v.indexOf(tt.inputSource);if(_t===-1)return;const At=x[_t];At!==void 0&&(At.update(tt.inputSource,tt.frame,c||r),At.dispatchEvent({type:tt.type,data:tt.inputSource}))}function z(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",q);for(let tt=0;tt<x.length;tt++){const _t=v[tt];_t!==null&&(v[tt]=null,x[tt].disconnect(_t))}P=null,w=null,_.reset(),t.setRenderTarget(u),d=null,p=null,f=null,i=null,M=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(tt){if(i=tt,i!==null){if(u=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",z),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){const _t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ps(d.framebufferWidth,d.framebufferHeight,{format:li,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let _t=null,At=null,xt=null;m.depth&&(xt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=m.stencil?Ao:xo,At=m.stencil?To:Cs);const jt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:o};f=new XRWebGLBinding(i,e),p=f.createProjectionLayer(jt),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),M=new Ps(p.textureWidth,p.textureHeight,{format:li,type:Bi,depthTexture:new Lf(p.textureWidth,p.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(tt){for(let _t=0;_t<tt.removed.length;_t++){const At=tt.removed[_t],xt=v.indexOf(At);xt>=0&&(v[xt]=null,x[xt].disconnect(At))}for(let _t=0;_t<tt.added.length;_t++){const At=tt.added[_t];let xt=v.indexOf(At);if(xt===-1){for(let ht=0;ht<x.length;ht++)if(ht>=v.length){v.push(At),xt=ht;break}else if(v[ht]===null){v[ht]=At,xt=ht;break}if(xt===-1)break}const jt=x[xt];jt&&jt.connect(At)}}const V=new U,$=new U;function G(tt,_t,At){V.setFromMatrixPosition(_t.matrixWorld),$.setFromMatrixPosition(At.matrixWorld);const xt=V.distanceTo($),jt=_t.projectionMatrix.elements,ht=At.projectionMatrix.elements,wt=jt[14]/(jt[10]-1),Ht=jt[14]/(jt[10]+1),nt=(jt[9]+1)/jt[5],mt=(jt[9]-1)/jt[5],k=(jt[8]-1)/jt[0],zt=(ht[8]+1)/ht[0],vt=wt*k,Pt=wt*zt,Mt=xt/(-k+zt),kt=Mt*-k;if(_t.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(kt),tt.translateZ(Mt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),jt[10]===-1)tt.projectionMatrix.copy(_t.projectionMatrix),tt.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const Ot=wt+Mt,L=Ht+Mt,A=vt-kt,Z=Pt+(xt-kt),st=nt*Ht/L*Ot,ut=mt*Ht/L*Ot;tt.projectionMatrix.makePerspective(A,Z,st,ut,Ot,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function dt(tt,_t){_t===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(_t.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(i===null)return;let _t=tt.near,At=tt.far;_.texture!==null&&(_.depthNear>0&&(_t=_.depthNear),_.depthFar>0&&(At=_.depthFar)),y.near=R.near=b.near=_t,y.far=R.far=b.far=At,(P!==y.near||w!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,w=y.far),b.layers.mask=tt.layers.mask|2,R.layers.mask=tt.layers.mask|4,y.layers.mask=b.layers.mask|R.layers.mask;const xt=tt.parent,jt=y.cameras;dt(y,xt);for(let ht=0;ht<jt.length;ht++)dt(jt[ht],xt);jt.length===2?G(y,b,R):y.projectionMatrix.copy(b.projectionMatrix),pt(tt,y,xt)};function pt(tt,_t,At){At===null?tt.matrix.copy(_t.matrixWorld):(tt.matrix.copy(At.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(_t.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(_t.projectionMatrix),tt.projectionMatrixInverse.copy(_t.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ro*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(tt){l=tt,p!==null&&(p.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ot=null;function Nt(tt,_t){if(h=_t.getViewerPose(c||r),g=_t,h!==null){const At=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let xt=!1;At.length!==y.cameras.length&&(y.cameras.length=0,xt=!0);for(let ht=0;ht<At.length;ht++){const wt=At[ht];let Ht=null;if(d!==null)Ht=d.getViewport(wt);else{const mt=f.getViewSubImage(p,wt);Ht=mt.viewport,ht===0&&(t.setRenderTargetTextures(M,mt.colorTexture,p.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(M))}let nt=S[ht];nt===void 0&&(nt=new On,nt.layers.enable(ht),nt.viewport=new qe,S[ht]=nt),nt.matrix.fromArray(wt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(wt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),ht===0&&(y.matrix.copy(nt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),xt===!0&&y.cameras.push(nt)}const jt=i.enabledFeatures;if(jt&&jt.includes("depth-sensing")){const ht=f.getDepthInformation(At[0]);ht&&ht.isValid&&ht.texture&&_.init(t,ht,i.renderState)}}for(let At=0;At<x.length;At++){const xt=v[At],jt=x[At];xt!==null&&jt!==void 0&&jt.update(xt,_t,c||r)}ot&&ot(tt,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),g=null}const ie=new Cf;ie.setAnimationLoop(Nt),this.setAnimationLoop=function(tt){ot=tt},this.dispose=function(){}}}const Ms=new ci,CM=new Me;function PM(s,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Ef(s)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,M,x,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(m,u):u.isMeshToonMaterial?(o(m,u),f(m,u)):u.isMeshPhongMaterial?(o(m,u),h(m,u)):u.isMeshStandardMaterial?(o(m,u),p(m,u),u.isMeshPhysicalMaterial&&d(m,u,v)):u.isMeshMatcapMaterial?(o(m,u),g(m,u)):u.isMeshDepthMaterial?o(m,u):u.isMeshDistanceMaterial?(o(m,u),_(m,u)):u.isMeshNormalMaterial?o(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,M,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Tn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Tn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const M=t.get(u),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,Ms.copy(v),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),m.envMapRotation.value.setFromMatrix4(CM.makeRotationFromEuler(Ms)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,M,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*M,m.scale.value=x*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function d(m,u,M){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Tn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const M=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function LM(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=i[M.id];v===void 0&&(g(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",m));const T=x.program;n.updateUBOMapping(M,T);const E=t.render.frame;o[M.id]!==E&&(p(M),o[M.id]=E)}function h(M){const x=f();M.__bindingPointIndex=x;const v=s.createBuffer(),T=M.__size,E=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,T,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function f(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const x=i[M.id],v=M.uniforms,T=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let E=0,b=v.length;E<b;E++){const R=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,y=R.length;S<y;S++){const P=R[S];if(d(P,E,S,T)===!0){const w=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let q=0;q<N.length;q++){const V=N[q],$=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,w+z,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,w,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,x,v,T){const E=M.value,b=x+"_"+v;if(T[b]===void 0)return typeof E=="number"||typeof E=="boolean"?T[b]=E:T[b]=E.clone(),!0;{const R=T[b];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return T[b]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(M){const x=M.uniforms;let v=0;const T=16;for(let b=0,R=x.length;b<R;b++){const S=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,P=S.length;y<P;y++){const w=S[y],N=Array.isArray(w.value)?w.value:[w.value];for(let z=0,q=N.length;z<q;z++){const V=N[z],$=_(V),G=v%T,dt=G%$.boundary,pt=G+dt;v+=dt,pt!==0&&T-pt<$.storage&&(v+=T-pt),w.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=v,v+=$.storage}}}const E=v%T;return E>0&&(v+=T-E),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=r.indexOf(x.__bindingPointIndex);r.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete o[x.id]}function u(){for(const M in i)s.deleteBuffer(i[M]);r=[],i={},o={}}return{bind:l,update:c,dispose:u}}class DM{constructor(t={}){const{canvas:e=y0(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,u=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=hs,this.toneMappingExposure=1;const v=this;let T=!1,E=0,b=0,R=null,S=-1,y=null;const P=new qe,w=new qe;let N=null;const z=new Qt(0);let q=0,V=e.width,$=e.height,G=1,dt=null,pt=null;const ot=new qe(0,0,V,$),Nt=new qe(0,0,V,$);let ie=!1;const tt=new hh;let _t=!1,At=!1;const xt=new Me,jt=new Me,ht=new U,wt=new qe,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function mt(){return R===null?G:1}let k=n;function zt(C,W){return e.getContext(C,W)}try{const C={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${th}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),k===null){const W="webgl2";if(k=zt(W,C),k===null)throw zt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let vt,Pt,Mt,kt,Ot,L,A,Z,st,ut,rt,$t,Et,It,ve,yt,Gt,se,oe,Bt,_e,he,Wt,B;function at(){vt=new Ov(k),vt.init(),he=new bM(k,vt),Pt=new Lv(k,vt,t,he),Mt=new MM(k,vt),Pt.reverseDepthBuffer&&p&&Mt.buffers.depth.setReversed(!0),kt=new Bv(k),Ot=new sM,L=new yM(k,vt,Mt,Ot,Pt,he,kt),A=new Iv(v),Z=new Nv(v),st=new q0(k),Wt=new Cv(k,st),ut=new Fv(k,st,kt,Wt),rt=new Gv(k,ut,st,kt),oe=new Hv(k,Pt,L),yt=new Dv(Ot),$t=new iM(v,A,Z,vt,Pt,Wt,yt),Et=new PM(v,Ot),It=new rM,ve=new dM(vt),se=new Rv(v,A,Z,Mt,rt,d,l),Gt=new vM(v,rt,Pt),B=new LM(k,kt,Pt,Mt),Bt=new Pv(k,vt,kt),_e=new zv(k,vt,kt),kt.programs=$t.programs,v.capabilities=Pt,v.extensions=vt,v.properties=Ot,v.renderLists=It,v.shadowMap=Gt,v.state=Mt,v.info=kt}at();const K=new RM(v,k);this.xr=K,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=vt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=vt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(V,$,!1))},this.getSize=function(C){return C.set(V,$)},this.setSize=function(C,W,Q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,$=W,e.width=Math.floor(C*G),e.height=Math.floor(W*G),Q===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(V*G,$*G).floor()},this.setDrawingBufferSize=function(C,W,Q){V=C,$=W,G=Q,e.width=Math.floor(C*Q),e.height=Math.floor(W*Q),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(ot)},this.setViewport=function(C,W,Q,J){C.isVector4?ot.set(C.x,C.y,C.z,C.w):ot.set(C,W,Q,J),Mt.viewport(P.copy(ot).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(Nt)},this.setScissor=function(C,W,Q,J){C.isVector4?Nt.set(C.x,C.y,C.z,C.w):Nt.set(C,W,Q,J),Mt.scissor(w.copy(Nt).multiplyScalar(G).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(C){Mt.setScissorTest(ie=C)},this.setOpaqueSort=function(C){dt=C},this.setTransparentSort=function(C){pt=C},this.getClearColor=function(C){return C.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(C=!0,W=!0,Q=!0){let J=0;if(C){let X=!1;if(R!==null){const bt=R.texture.format;X=bt===ah||bt===rh||bt===oh}if(X){const bt=R.texture.type,Dt=bt===Bi||bt===Cs||bt===hr||bt===To||bt===nh||bt===ih,Zt=se.getClearColor(),Jt=se.getClearAlpha(),ae=Zt.r,ue=Zt.g,te=Zt.b;Dt?(g[0]=ae,g[1]=ue,g[2]=te,g[3]=Jt,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=ae,_[1]=ue,_[2]=te,_[3]=Jt,k.clearBufferiv(k.COLOR,0,_))}else J|=k.COLOR_BUFFER_BIT}W&&(J|=k.DEPTH_BUFFER_BIT),Q&&(J|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),It.dispose(),ve.dispose(),Ot.dispose(),A.dispose(),Z.dispose(),rt.dispose(),Wt.dispose(),B.dispose(),$t.dispose(),K.dispose(),K.removeEventListener("sessionstart",Ge),K.removeEventListener("sessionend",Do),Xi.stop()};function it(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const C=kt.autoReset,W=Gt.enabled,Q=Gt.autoUpdate,J=Gt.needsUpdate,X=Gt.type;at(),kt.autoReset=C,Gt.enabled=W,Gt.autoUpdate=Q,Gt.needsUpdate=J,Gt.type=X}function Lt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function re(C){const W=C.target;W.removeEventListener("dispose",re),Be(W)}function Be(C){sn(C),Ot.remove(C)}function sn(C){const W=Ot.get(C).programs;W!==void 0&&(W.forEach(function(Q){$t.releaseProgram(Q)}),C.isShaderMaterial&&$t.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,Q,J,X,bt){W===null&&(W=Ht);const Dt=X.isMesh&&X.matrixWorld.determinant()<0,Zt=Er(C,W,Q,J,X);Mt.setMaterial(J,Dt);let Jt=Q.index,ae=1;if(J.wireframe===!0){if(Jt=ut.getWireframeAttribute(Q),Jt===void 0)return;ae=2}const ue=Q.drawRange,te=Q.attributes.position;let ye=ue.start*ae,De=(ue.start+ue.count)*ae;bt!==null&&(ye=Math.max(ye,bt.start*ae),De=Math.min(De,(bt.start+bt.count)*ae)),Jt!==null?(ye=Math.max(ye,0),De=Math.min(De,Jt.count)):te!=null&&(ye=Math.max(ye,0),De=Math.min(De,te.count));const Ne=De-ye;if(Ne<0||Ne===1/0)return;Wt.setup(X,J,Zt,Q,Jt);let fn,be=Bt;if(Jt!==null&&(fn=st.get(Jt),be=_e,be.setIndex(fn)),X.isMesh)J.wireframe===!0?(Mt.setLineWidth(J.wireframeLinewidth*mt()),be.setMode(k.LINES)):be.setMode(k.TRIANGLES);else if(X.isLine){let Vt=J.linewidth;Vt===void 0&&(Vt=1),Mt.setLineWidth(Vt*mt()),X.isLineSegments?be.setMode(k.LINES):X.isLineLoop?be.setMode(k.LINE_LOOP):be.setMode(k.LINE_STRIP)}else X.isPoints?be.setMode(k.POINTS):X.isSprite&&be.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)be.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))be.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Vt=X._multiDrawStarts,je=X._multiDrawCounts,de=X._multiDrawCount,Ce=Jt?st.get(Jt).bytesPerElement:1,$i=Ot.get(J).currentProgram.getUniforms();for(let j=0;j<de;j++)$i.setValue(k,"_gl_DrawID",j),be.render(Vt[j]/Ce,je[j])}else if(X.isInstancedMesh)be.renderInstances(ye,Ne,X.count);else if(Q.isInstancedBufferGeometry){const Vt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,je=Math.min(Q.instanceCount,Vt);be.renderInstances(ye,Ne,je)}else be.render(ye,Ne)};function we(C,W,Q){C.transparent===!0&&C.side===He&&C.forceSinglePass===!1?(C.side=Tn,C.needsUpdate=!0,Ei(C,W,Q),C.side=us,C.needsUpdate=!0,Ei(C,W,Q),C.side=He):Ei(C,W,Q)}this.compile=function(C,W,Q=null){Q===null&&(Q=C),u=ve.get(Q),u.init(W),x.push(u),Q.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),C!==Q&&C.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),u.setupLights();const J=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const bt=X.material;if(bt)if(Array.isArray(bt))for(let Dt=0;Dt<bt.length;Dt++){const Zt=bt[Dt];we(Zt,Q,X),J.add(Zt)}else we(bt,Q,X),J.add(bt)}),x.pop(),u=null,J},this.compileAsync=function(C,W,Q=null){const J=this.compile(C,W,Q);return new Promise(X=>{function bt(){if(J.forEach(function(Dt){Ot.get(Dt).currentProgram.isReady()&&J.delete(Dt)}),J.size===0){X(C);return}setTimeout(bt,10)}vt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let xn=null;function Bn(C){xn&&xn(C)}function Ge(){Xi.stop()}function Do(){Xi.start()}const Xi=new Cf;Xi.setAnimationLoop(Bn),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(C){xn=C,K.setAnimationLoop(C),C===null?Xi.stop():Xi.start()},K.addEventListener("sessionstart",Ge),K.addEventListener("sessionend",Do),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(W),W=K.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,W,R),u=ve.get(C,x.length),u.init(W),x.push(u),jt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),tt.setFromProjectionMatrix(jt),At=this.localClippingEnabled,_t=yt.init(this.clippingPlanes,At),m=It.get(C,M.length),m.init(),M.push(m),K.enabled===!0&&K.isPresenting===!0){const bt=v.xr.getDepthSensingMesh();bt!==null&&Ns(bt,W,-1/0,v.sortObjects)}Ns(C,W,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(dt,pt),nt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,nt&&se.addToRenderList(m,C),this.info.render.frame++,_t===!0&&yt.beginShadows();const Q=u.state.shadowsArray;Gt.render(Q,C,W),_t===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,X=m.transmissive;if(u.setupLights(),W.isArrayCamera){const bt=W.cameras;if(X.length>0)for(let Dt=0,Zt=bt.length;Dt<Zt;Dt++){const Jt=bt[Dt];Os(J,X,C,Jt)}nt&&se.render(C);for(let Dt=0,Zt=bt.length;Dt<Zt;Dt++){const Jt=bt[Dt];Io(m,C,Jt,Jt.viewport)}}else X.length>0&&Os(J,X,C,W),nt&&se.render(C),Io(m,C,W);R!==null&&(L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(v,C,W),Wt.resetDefaultState(),S=-1,y=null,x.pop(),x.length>0?(u=x[x.length-1],_t===!0&&yt.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ns(C,W,Q,J){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||tt.intersectsSprite(C)){J&&wt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(jt);const Dt=rt.update(C),Zt=C.material;Zt.visible&&m.push(C,Dt,Zt,Q,wt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||tt.intersectsObject(C))){const Dt=rt.update(C),Zt=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),wt.copy(C.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),wt.copy(Dt.boundingSphere.center)),wt.applyMatrix4(C.matrixWorld).applyMatrix4(jt)),Array.isArray(Zt)){const Jt=Dt.groups;for(let ae=0,ue=Jt.length;ae<ue;ae++){const te=Jt[ae],ye=Zt[te.materialIndex];ye&&ye.visible&&m.push(C,Dt,ye,Q,wt.z,te)}}else Zt.visible&&m.push(C,Dt,Zt,Q,wt.z,null)}}const bt=C.children;for(let Dt=0,Zt=bt.length;Dt<Zt;Dt++)Ns(bt[Dt],W,Q,J)}function Io(C,W,Q,J){const X=C.opaque,bt=C.transmissive,Dt=C.transparent;u.setupLightsView(Q),_t===!0&&yt.setGlobalState(v.clippingPlanes,Q),J&&Mt.viewport(P.copy(J)),X.length>0&&Fs(X,W,Q),bt.length>0&&Fs(bt,W,Q),Dt.length>0&&Fs(Dt,W,Q),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Os(C,W,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[J.id]===void 0&&(u.state.transmissionRenderTarget[J.id]=new Ps(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?xr:Bi,minFilter:Ts,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const bt=u.state.transmissionRenderTarget[J.id],Dt=J.viewport||P;bt.setSize(Dt.z,Dt.w);const Zt=v.getRenderTarget();v.setRenderTarget(bt),v.getClearColor(z),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),nt&&se.render(Q);const Jt=v.toneMapping;v.toneMapping=hs;const ae=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),u.setupLightsView(J),_t===!0&&yt.setGlobalState(v.clippingPlanes,J),Fs(C,Q,J),L.updateMultisampleRenderTarget(bt),L.updateRenderTargetMipmap(bt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let te=0,ye=W.length;te<ye;te++){const De=W[te],Ne=De.object,fn=De.geometry,be=De.material,Vt=De.group;if(be.side===He&&Ne.layers.test(J.layers)){const je=be.side;be.side=Tn,be.needsUpdate=!0,ko(Ne,Q,J,fn,be,Vt),be.side=je,be.needsUpdate=!0,ue=!0}}ue===!0&&(L.updateMultisampleRenderTarget(bt),L.updateRenderTargetMipmap(bt))}v.setRenderTarget(Zt),v.setClearColor(z,q),ae!==void 0&&(J.viewport=ae),v.toneMapping=Jt}function Fs(C,W,Q){const J=W.isScene===!0?W.overrideMaterial:null;for(let X=0,bt=C.length;X<bt;X++){const Dt=C[X],Zt=Dt.object,Jt=Dt.geometry,ae=J===null?Dt.material:J,ue=Dt.group;Zt.layers.test(Q.layers)&&ko(Zt,W,Q,Jt,ae,ue)}}function ko(C,W,Q,J,X,bt){C.onBeforeRender(v,W,Q,J,X,bt),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(v,W,Q,J,C,bt),X.transparent===!0&&X.side===He&&X.forceSinglePass===!1?(X.side=Tn,X.needsUpdate=!0,v.renderBufferDirect(Q,W,J,X,C,bt),X.side=us,X.needsUpdate=!0,v.renderBufferDirect(Q,W,J,X,C,bt),X.side=He):v.renderBufferDirect(Q,W,J,X,C,bt),C.onAfterRender(v,W,Q,J,X,bt)}function Ei(C,W,Q){W.isScene!==!0&&(W=Ht);const J=Ot.get(C),X=u.state.lights,bt=u.state.shadowsArray,Dt=X.state.version,Zt=$t.getParameters(C,X.state,bt,W,Q),Jt=$t.getProgramCacheKey(Zt);let ae=J.programs;J.environment=C.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(C.isMeshStandardMaterial?Z:A).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,ae===void 0&&(C.addEventListener("dispose",re),ae=new Map,J.programs=ae);let ue=ae.get(Jt);if(ue!==void 0){if(J.currentProgram===ue&&J.lightsStateVersion===Dt)return Sr(C,Zt),ue}else Zt.uniforms=$t.getUniforms(C),C.onBeforeCompile(Zt,v),ue=$t.acquireProgram(Zt,Jt),ae.set(Jt,ue),J.uniforms=Zt.uniforms;const te=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(te.clippingPlanes=yt.uniform),Sr(C,Zt),J.needsLights=Wa(C),J.lightsStateVersion=Dt,J.needsLights&&(te.ambientLightColor.value=X.state.ambient,te.lightProbe.value=X.state.probe,te.directionalLights.value=X.state.directional,te.directionalLightShadows.value=X.state.directionalShadow,te.spotLights.value=X.state.spot,te.spotLightShadows.value=X.state.spotShadow,te.rectAreaLights.value=X.state.rectArea,te.ltc_1.value=X.state.rectAreaLTC1,te.ltc_2.value=X.state.rectAreaLTC2,te.pointLights.value=X.state.point,te.pointLightShadows.value=X.state.pointShadow,te.hemisphereLights.value=X.state.hemi,te.directionalShadowMap.value=X.state.directionalShadowMap,te.directionalShadowMatrix.value=X.state.directionalShadowMatrix,te.spotShadowMap.value=X.state.spotShadowMap,te.spotLightMatrix.value=X.state.spotLightMatrix,te.spotLightMap.value=X.state.spotLightMap,te.pointShadowMap.value=X.state.pointShadowMap,te.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=ue,J.uniformsList=null,ue}function wr(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Ca.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Sr(C,W){const Q=Ot.get(C);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function Er(C,W,Q,J,X){W.isScene!==!0&&(W=Ht),L.resetTextureUnits();const bt=W.fog,Dt=J.isMeshStandardMaterial?W.environment:null,Zt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Po,Jt=(J.isMeshStandardMaterial?Z:A).get(J.envMap||Dt),ae=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ue=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),te=!!Q.morphAttributes.position,ye=!!Q.morphAttributes.normal,De=!!Q.morphAttributes.color;let Ne=hs;J.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ne=v.toneMapping);const fn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,be=fn!==void 0?fn.length:0,Vt=Ot.get(J),je=u.state.lights;if(_t===!0&&(At===!0||C!==y)){const Ke=C===y&&J.id===S;yt.setState(J,C,Ke)}let de=!1;J.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==je.state.version||Vt.outputColorSpace!==Zt||X.isBatchedMesh&&Vt.batching===!1||!X.isBatchedMesh&&Vt.batching===!0||X.isBatchedMesh&&Vt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Vt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Vt.instancing===!1||!X.isInstancedMesh&&Vt.instancing===!0||X.isSkinnedMesh&&Vt.skinning===!1||!X.isSkinnedMesh&&Vt.skinning===!0||X.isInstancedMesh&&Vt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Vt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Vt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Vt.instancingMorph===!1&&X.morphTexture!==null||Vt.envMap!==Jt||J.fog===!0&&Vt.fog!==bt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==yt.numPlanes||Vt.numIntersection!==yt.numIntersection)||Vt.vertexAlphas!==ae||Vt.vertexTangents!==ue||Vt.morphTargets!==te||Vt.morphNormals!==ye||Vt.morphColors!==De||Vt.toneMapping!==Ne||Vt.morphTargetsCount!==be)&&(de=!0):(de=!0,Vt.__version=J.version);let Ce=Vt.currentProgram;de===!0&&(Ce=Ei(J,W,X));let $i=!1,j=!1,Re=!1;const Oe=Ce.getUniforms(),yn=Vt.uniforms;if(Mt.useProgram(Ce.program)&&($i=!0,j=!0,Re=!0),J.id!==S&&(S=J.id,j=!0),$i||y!==C){Mt.buffers.depth.getReversed()?(xt.copy(C.projectionMatrix),w0(xt),S0(xt),Oe.setValue(k,"projectionMatrix",xt)):Oe.setValue(k,"projectionMatrix",C.projectionMatrix),Oe.setValue(k,"viewMatrix",C.matrixWorldInverse);const Zn=Oe.map.cameraPosition;Zn!==void 0&&Zn.setValue(k,ht.setFromMatrixPosition(C.matrixWorld)),Pt.logarithmicDepthBuffer&&Oe.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Oe.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,j=!0,Re=!0)}if(X.isSkinnedMesh){Oe.setOptional(k,X,"bindMatrix"),Oe.setOptional(k,X,"bindMatrixInverse");const Ke=X.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Oe.setValue(k,"boneTexture",Ke.boneTexture,L))}X.isBatchedMesh&&(Oe.setOptional(k,X,"batchingTexture"),Oe.setValue(k,"batchingTexture",X._matricesTexture,L),Oe.setOptional(k,X,"batchingIdTexture"),Oe.setValue(k,"batchingIdTexture",X._indirectTexture,L),Oe.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&Oe.setValue(k,"batchingColorTexture",X._colorsTexture,L));const hi=Q.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&oe.update(X,Q,Ce),(j||Vt.receiveShadow!==X.receiveShadow)&&(Vt.receiveShadow=X.receiveShadow,Oe.setValue(k,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(yn.envMap.value=Jt,yn.flipEnvMap.value=Jt.isCubeTexture&&Jt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(yn.envMapIntensity.value=W.environmentIntensity),j&&(Oe.setValue(k,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&Hn(yn,Re),bt&&J.fog===!0&&Et.refreshFogUniforms(yn,bt),Et.refreshMaterialUniforms(yn,J,G,$,u.state.transmissionRenderTarget[C.id]),Ca.upload(k,wr(Vt),yn,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ca.upload(k,wr(Vt),yn,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Oe.setValue(k,"center",X.center),Oe.setValue(k,"modelViewMatrix",X.modelViewMatrix),Oe.setValue(k,"normalMatrix",X.normalMatrix),Oe.setValue(k,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ke=J.uniformsGroups;for(let Zn=0,Jn=Ke.length;Zn<Jn;Zn++){const qi=Ke[Zn];B.update(qi,Ce),B.bind(qi,Ce)}}return Ce}function Hn(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Wa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,W,Q){Ot.get(C.texture).__webglTexture=W,Ot.get(C.depthTexture).__webglTexture=Q;const J=Ot.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Q===void 0,J.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const Q=Ot.get(C);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,Q=0){R=C,E=W,b=Q;let J=!0,X=null,bt=!1,Dt=!1;if(C){const Jt=Ot.get(C);if(Jt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(k.FRAMEBUFFER,null),J=!1;else if(Jt.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Jt.__hasExternalTextures)L.rebindTextures(C,Ot.get(C.texture).__webglTexture,Ot.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const te=C.depthTexture;if(Jt.__boundDepthTexture!==te){if(te!==null&&Ot.has(te)&&(C.width!==te.image.width||C.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const ae=C.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Dt=!0);const ue=Ot.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ue[W])?X=ue[W][Q]:X=ue[W],bt=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?X=Ot.get(C).__webglMultisampledFramebuffer:Array.isArray(ue)?X=ue[Q]:X=ue,P.copy(C.viewport),w.copy(C.scissor),N=C.scissorTest}else P.copy(ot).multiplyScalar(G).floor(),w.copy(Nt).multiplyScalar(G).floor(),N=ie;if(Mt.bindFramebuffer(k.FRAMEBUFFER,X)&&J&&Mt.drawBuffers(C,X),Mt.viewport(P),Mt.scissor(w),Mt.setScissorTest(N),bt){const Jt=Ot.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Jt.__webglTexture,Q)}else if(Dt){const Jt=Ot.get(C.texture),ae=W||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Jt.__webglTexture,Q||0,ae)}S=-1},this.readRenderTargetPixels=function(C,W,Q,J,X,bt,Dt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=Ot.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Dt!==void 0&&(Zt=Zt[Dt]),Zt){Mt.bindFramebuffer(k.FRAMEBUFFER,Zt);try{const Jt=C.texture,ae=Jt.format,ue=Jt.type;if(!Pt.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-J&&Q>=0&&Q<=C.height-X&&k.readPixels(W,Q,J,X,he.convert(ae),he.convert(ue),bt)}finally{const Jt=R!==null?Ot.get(R).__webglFramebuffer:null;Mt.bindFramebuffer(k.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(C,W,Q,J,X,bt,Dt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=Ot.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Dt!==void 0&&(Zt=Zt[Dt]),Zt){const Jt=C.texture,ae=Jt.format,ue=Jt.type;if(!Pt.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-J&&Q>=0&&Q<=C.height-X){Mt.bindFramebuffer(k.FRAMEBUFFER,Zt);const te=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,te),k.bufferData(k.PIXEL_PACK_BUFFER,bt.byteLength,k.STREAM_READ),k.readPixels(W,Q,J,X,he.convert(ae),he.convert(ue),0);const ye=R!==null?Ot.get(R).__webglFramebuffer:null;Mt.bindFramebuffer(k.FRAMEBUFFER,ye);const De=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await b0(k,De,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,te),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,bt),k.deleteBuffer(te),k.deleteSync(De),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,Q=0){C.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const J=Math.pow(2,-Q),X=Math.floor(C.image.width*J),bt=Math.floor(C.image.height*J),Dt=W!==null?W.x:0,Zt=W!==null?W.y:0;L.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,Dt,Zt,X,bt),Mt.unbindTexture()},this.copyTextureToTexture=function(C,W,Q=null,J=null,X=0){C.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1],W=arguments[2],X=arguments[3]||0,Q=null);let bt,Dt,Zt,Jt,ae,ue,te,ye,De;const Ne=C.isCompressedTexture?C.mipmaps[X]:C.image;Q!==null?(bt=Q.max.x-Q.min.x,Dt=Q.max.y-Q.min.y,Zt=Q.isBox3?Q.max.z-Q.min.z:1,Jt=Q.min.x,ae=Q.min.y,ue=Q.isBox3?Q.min.z:0):(bt=Ne.width,Dt=Ne.height,Zt=Ne.depth||1,Jt=0,ae=0,ue=0),J!==null?(te=J.x,ye=J.y,De=J.z):(te=0,ye=0,De=0);const fn=he.convert(W.format),be=he.convert(W.type);let Vt;W.isData3DTexture?(L.setTexture3D(W,0),Vt=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),Vt=k.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),Vt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const je=k.getParameter(k.UNPACK_ROW_LENGTH),de=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ce=k.getParameter(k.UNPACK_SKIP_PIXELS),$i=k.getParameter(k.UNPACK_SKIP_ROWS),j=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ne.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ne.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Jt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ae),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ue);const Re=C.isDataArrayTexture||C.isData3DTexture,Oe=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const yn=Ot.get(C),hi=Ot.get(W),Ke=Ot.get(yn.__renderTarget),Zn=Ot.get(hi.__renderTarget);Mt.bindFramebuffer(k.READ_FRAMEBUFFER,Ke.__webglFramebuffer),Mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Jn=0;Jn<Zt;Jn++)Re&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ot.get(C).__webglTexture,X,ue+Jn),C.isDepthTexture?(Oe&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ot.get(W).__webglTexture,X,De+Jn),k.blitFramebuffer(Jt,ae,bt,Dt,te,ye,bt,Dt,k.DEPTH_BUFFER_BIT,k.NEAREST)):Oe?k.copyTexSubImage3D(Vt,X,te,ye,De+Jn,Jt,ae,bt,Dt):k.copyTexSubImage2D(Vt,X,te,ye,De+Jn,Jt,ae,bt,Dt);Mt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Oe?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Vt,X,te,ye,De,bt,Dt,Zt,fn,be,Ne.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Vt,X,te,ye,De,bt,Dt,Zt,fn,Ne.data):k.texSubImage3D(Vt,X,te,ye,De,bt,Dt,Zt,fn,be,Ne):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,te,ye,bt,Dt,fn,be,Ne.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,te,ye,Ne.width,Ne.height,fn,Ne.data):k.texSubImage2D(k.TEXTURE_2D,X,te,ye,bt,Dt,fn,be,Ne);k.pixelStorei(k.UNPACK_ROW_LENGTH,je),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,de),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ce),k.pixelStorei(k.UNPACK_SKIP_ROWS,$i),k.pixelStorei(k.UNPACK_SKIP_IMAGES,j),X===0&&W.generateMipmaps&&k.generateMipmap(Vt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(C,W,Q=null,J=null,X=0){return C.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,J=arguments[1]||null,C=arguments[2],W=arguments[3],X=arguments[4]||0),er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,Q,J,X)},this.initRenderTarget=function(C){Ot.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Mt.unbindTexture()},this.resetState=function(){E=0,b=0,R=null,Mt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}}class dh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new dh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Nf extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class IM{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gc,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,o=this.stride;i<o;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wn=new U;class ka{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array),o=Ue(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ka(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ba extends ds{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let eo;const Vo=new U,no=new U,io=new U,so=new ct,Wo=new ct,Of=new Me,Jr=new U,Xo=new U,Qr=new U,Nu=new ct,Ll=new ct,Ou=new ct;class fh extends Ye{constructor(t=new Ba){if(super(),this.isSprite=!0,this.type="Sprite",eo===void 0){eo=new xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new IM(e,5);eo.setIndex([0,1,2,0,2,3]),eo.setAttribute("position",new ka(n,3,0,!1)),eo.setAttribute("uv",new ka(n,2,3,!1))}this.geometry=eo,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),no.setFromMatrixScale(this.matrixWorld),Of.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),io.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&no.multiplyScalar(-io.z);const n=this.material.rotation;let i,o;n!==0&&(o=Math.cos(n),i=Math.sin(n));const r=this.center;ta(Jr.set(-.5,-.5,0),io,r,no,i,o),ta(Xo.set(.5,-.5,0),io,r,no,i,o),ta(Qr.set(.5,.5,0),io,r,no,i,o),Nu.set(0,0),Ll.set(1,0),Ou.set(1,1);let a=t.ray.intersectTriangle(Jr,Xo,Qr,!1,Vo);if(a===null&&(ta(Xo.set(-.5,.5,0),io,r,no,i,o),Ll.set(0,1),a=t.ray.intersectTriangle(Jr,Qr,Xo,!1,Vo),a===null))return;const l=t.ray.origin.distanceTo(Vo);l<t.near||l>t.far||e.push({distance:l,point:Vo.clone(),uv:$n.getInterpolation(Vo,Jr,Xo,Qr,Nu,Ll,Ou,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ta(s,t,e,n,i,o){so.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Wo.x=o*so.x-i*so.y,Wo.y=i*so.x+o*so.y):Wo.copy(so),s.copy(t),s.x+=Wo.x,s.y+=Wo.y,s.applyMatrix4(Of)}class kM extends _n{constructor(t=null,e=1,n=1,i,o,r,a,l,c=zn,h=zn,f,p){super(null,r,a,l,c,h,i,o,f,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fu extends tn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const oo=new Me,zu=new Me,ea=[],Bu=new ks,UM=new Me,$o=new Y,qo=new Us;class Fn extends Y{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,UM)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ks),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,oo),Bu.copy(t.boundingBox).applyMatrix4(oo),this.boundingBox.union(Bu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,oo),qo.copy(t.boundingSphere).applyMatrix4(oo),this.boundingSphere.union(qo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if($o.geometry=this.geometry,$o.material=this.material,$o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(n),t.ray.intersectsSphere(qo)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,oo),zu.multiplyMatrices(n,oo),$o.matrixWorld=zu,$o.raycast(t,ea);for(let r=0,a=ea.length;r<a;r++){const l=ea[r];l.instanceId=o,l.object=this,e.push(l)}ea.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new kM(new Float32Array(i*this.count),i,this.count,sh,vi));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ff extends ds{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ua=new U,Na=new U,Hu=new Me,Yo=new yr,na=new Us,Dl=new U,Gu=new U;class NM extends Ye{constructor(t=new xe,e=new Ff){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)Ua.fromBufferAttribute(e,i-1),Na.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ua.distanceTo(Na);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(i),na.radius+=o,t.ray.intersectsSphere(na)===!1)return;Hu.copy(i).invert(),Yo.copy(t.ray).applyMatrix4(Hu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=d,m=g-1;_<m;_+=c){const u=h.getX(_),M=h.getX(_+1),x=ia(this,t,Yo,l,u,M);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),u=ia(this,t,Yo,l,_,m);u&&e.push(u)}}else{const d=Math.max(0,r.start),g=Math.min(p.count,r.start+r.count);for(let _=d,m=g-1;_<m;_+=c){const u=ia(this,t,Yo,l,_,_+1);u&&e.push(u)}if(this.isLineLoop){const _=ia(this,t,Yo,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function ia(s,t,e,n,i,o){const r=s.geometry.attributes.position;if(Ua.fromBufferAttribute(r,i),Na.fromBufferAttribute(r,o),e.distanceSqToSegment(Ua,Na,Dl,Gu)>n)return;Dl.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Dl);if(!(l<t.near||l>t.far))return{distance:l,point:Gu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class zf extends ds{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vu=new Me,Xc=new yr,sa=new Us,oa=new U;class OM extends Ye{constructor(t=new xe,e=new zf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(i),sa.radius+=o,t.ray.intersectsSphere(sa)===!1)return;Vu.copy(i).invert(),Xc.copy(t.ray).applyMatrix4(Vu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const p=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let g=p,_=d;g<_;g++){const m=c.getX(g);oa.fromBufferAttribute(f,m),Wu(oa,m,l,i,t,e,this)}}else{const p=Math.max(0,r.start),d=Math.min(f.count,r.start+r.count);for(let g=p,_=d;g<_;g++)oa.fromBufferAttribute(f,g),Wu(oa,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Wu(s,t,e,n,i,o,r){const a=Xc.distanceSqToPoint(s);if(a<e){const l=new U;Xc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Mn extends _n{constructor(t,e,n,i,o,r,a,l,c){super(t,e,n,i,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(o-1);const h=n[i],p=n[i+1]-h,d=(r-h)/p;return(i+d)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),l=e||(r.isVector2?new ct:new U);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,i=[],o=[],r=[],a=new U,l=new Me;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new U)}o[0]=new U,r[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rn(i[d-1].dot(i[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,g))}r[d].crossVectors(i[d],o[d])}if(e===!0){let d=Math.acos(rn(o[0].dot(o[t]),-1,1));d/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),r[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ph extends Si{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*h-d*f+this.aX,c=p*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class FM extends ph{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function mh(){let s=0,t=0,e=0,n=0;function i(o,r,a,l){s=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){i(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,f){let p=(r-o)/c-(a-o)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+f)+(l-a)/f;p*=h,d*=h,i(r,a,p,d)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const ra=new U,Il=new mh,kl=new mh,Ul=new mh;class zM extends Si{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%o]:(ra.subVectors(i[0],i[1]).add(i[0]),c=ra);const f=i[a%o],p=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(ra.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=ra),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Il.initNonuniformCatmullRom(c.x,f.x,p.x,h.x,g,_,m),kl.initNonuniformCatmullRom(c.y,f.y,p.y,h.y,g,_,m),Ul.initNonuniformCatmullRom(c.z,f.z,p.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Il.initCatmullRom(c.x,f.x,p.x,h.x,this.tension),kl.initCatmullRom(c.y,f.y,p.y,h.y,this.tension),Ul.initCatmullRom(c.z,f.z,p.z,h.z,this.tension));return n.set(Il.calc(l),kl.calc(l),Ul.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xu(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*s+e}function BM(s,t){const e=1-s;return e*e*t}function HM(s,t){return 2*(1-s)*s*t}function GM(s,t){return s*s*t}function rr(s,t,e,n){return BM(s,t)+HM(s,e)+GM(s,n)}function VM(s,t){const e=1-s;return e*e*e*t}function WM(s,t){const e=1-s;return 3*e*e*s*t}function XM(s,t){return 3*(1-s)*s*s*t}function $M(s,t){return s*s*s*t}function ar(s,t,e,n,i){return VM(s,t)+WM(s,e)+XM(s,n)+$M(s,i)}class Bf extends Si{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(ar(t,i.x,o.x,r.x,a.x),ar(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qM extends Si{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(ar(t,i.x,o.x,r.x,a.x),ar(t,i.y,o.y,r.y,a.y),ar(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hf extends Si{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class YM extends Si{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gf extends Si{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(rr(t,i.x,o.x,r.x),rr(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jM extends Si{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(rr(t,i.x,o.x,r.x),rr(t,i.y,o.y,r.y),rr(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vf extends Si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],f=i[r>i.length-3?i.length-1:r+2];return n.set(Xu(a,l.x,c.x,h.x,f.x),Xu(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var $c=Object.freeze({__proto__:null,ArcCurve:FM,CatmullRomCurve3:zM,CubicBezierCurve:Bf,CubicBezierCurve3:qM,EllipseCurve:ph,LineCurve:Hf,LineCurve3:YM,QuadraticBezierCurve:Gf,QuadraticBezierCurve3:jM,SplineCurve:Vf});class KM extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $c[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new $c[i.type]().fromJSON(i))}return this}}class qc extends KM{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Hf(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new Gf(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new Bf(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Vf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,o,r,a,l),this}absellipse(t,e,n,i,o,r,a,l){const c=new ph(t,e,n,i,o,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ha extends xe{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=rn(i,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,f=new U,p=new ct,d=new U,g=new U,_=new U;let m=0,u=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,u=t[M+1].y-t[M].y,d.x=u*1,d.y=-m,d.z=u*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,u=t[M+1].y-t[M].y,d.x=u*1,d.y=-m,d.z=u*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let M=0;M<=e;M++){const x=n+M*h*i,v=Math.sin(x),T=Math.cos(x);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*v,f.y=t[E].y,f.z=t[E].x*T,r.push(f.x,f.y,f.z),p.x=M/e,p.y=E/(t.length-1),a.push(p.x,p.y);const b=l[3*E+0]*v,R=l[3*E+1],S=l[3*E+0]*T;c.push(b,R,S)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const v=x+M*t.length,T=v,E=v+t.length,b=v+t.length+1,R=v+1;o.push(T,E,R),o.push(b,R,E)}this.setIndex(o),this.setAttribute("position",new ne(r,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ha(t.points,t.segments,t.phiStart,t.phiLength)}}class gh extends Ha{constructor(t=1,e=1,n=4,i=8){const o=new qc;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new gh(t.radius,t.length,t.capSegments,t.radialSegments)}}class vh extends xe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new U,h=new ct;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=e;f++,p+=3){const d=n+f/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[p]/t+1)/2,h.y=(r[p+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qt extends xe{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const h=[],f=[],p=[],d=[];let g=0;const _=[],m=n/2;let u=0;M(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ne(f,3)),this.setAttribute("normal",new ne(p,3)),this.setAttribute("uv",new ne(d,2));function M(){const v=new U,T=new U;let E=0;const b=(e-t)/n;for(let R=0;R<=o;R++){const S=[],y=R/o,P=y*(e-t)+t;for(let w=0;w<=i;w++){const N=w/i,z=N*l+a,q=Math.sin(z),V=Math.cos(z);T.x=P*q,T.y=-y*n+m,T.z=P*V,f.push(T.x,T.y,T.z),v.set(q,b,V).normalize(),p.push(v.x,v.y,v.z),d.push(N,1-y),S.push(g++)}_.push(S)}for(let R=0;R<i;R++)for(let S=0;S<o;S++){const y=_[S][R],P=_[S+1][R],w=_[S+1][R+1],N=_[S][R+1];(t>0||S!==0)&&(h.push(y,P,N),E+=3),(e>0||S!==o-1)&&(h.push(P,w,N),E+=3)}c.addGroup(u,E,0),u+=E}function x(v){const T=g,E=new ct,b=new U;let R=0;const S=v===!0?t:e,y=v===!0?1:-1;for(let w=1;w<=i;w++)f.push(0,m*y,0),p.push(0,y,0),d.push(.5,.5),g++;const P=g;for(let w=0;w<=i;w++){const z=w/i*l+a,q=Math.cos(z),V=Math.sin(z);b.x=S*V,b.y=m*y,b.z=S*q,f.push(b.x,b.y,b.z),p.push(0,y,0),E.x=q*.5+.5,E.y=V*.5*y+.5,d.push(E.x,E.y),g++}for(let w=0;w<i;w++){const N=T+w,z=P+w;v===!0?h.push(z,z+1,N):h.push(z+1,z,N),R+=3}c.addGroup(u,R,v===!0?1:2),u+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xi extends qt{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new xi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ga extends xe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),c(n),h(),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(o.slice(),3)),this.setAttribute("uv",new ne(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new U,v=new U,T=new U;for(let E=0;E<e.length;E+=3)d(e[E+0],x),d(e[E+1],v),d(e[E+2],T),l(x,v,T,M)}function l(M,x,v,T){const E=T+1,b=[];for(let R=0;R<=E;R++){b[R]=[];const S=M.clone().lerp(v,R/E),y=x.clone().lerp(v,R/E),P=E-R;for(let w=0;w<=P;w++)w===0&&R===E?b[R][w]=S:b[R][w]=S.clone().lerp(y,w/P)}for(let R=0;R<E;R++)for(let S=0;S<2*(E-R)-1;S++){const y=Math.floor(S/2);S%2===0?(p(b[R][y+1]),p(b[R+1][y]),p(b[R][y])):(p(b[R][y+1]),p(b[R+1][y+1]),p(b[R+1][y]))}}function c(M){const x=new U;for(let v=0;v<o.length;v+=3)x.x=o[v+0],x.y=o[v+1],x.z=o[v+2],x.normalize().multiplyScalar(M),o[v+0]=x.x,o[v+1]=x.y,o[v+2]=x.z}function h(){const M=new U;for(let x=0;x<o.length;x+=3){M.x=o[x+0],M.y=o[x+1],M.z=o[x+2];const v=m(M)/2/Math.PI+.5,T=u(M)/Math.PI+.5;r.push(v,1-T)}g(),f()}function f(){for(let M=0;M<r.length;M+=6){const x=r[M+0],v=r[M+2],T=r[M+4],E=Math.max(x,v,T),b=Math.min(x,v,T);E>.9&&b<.1&&(x<.2&&(r[M+0]+=1),v<.2&&(r[M+2]+=1),T<.2&&(r[M+4]+=1))}}function p(M){o.push(M.x,M.y,M.z)}function d(M,x){const v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const M=new U,x=new U,v=new U,T=new U,E=new ct,b=new ct,R=new ct;for(let S=0,y=0;S<o.length;S+=9,y+=6){M.set(o[S+0],o[S+1],o[S+2]),x.set(o[S+3],o[S+4],o[S+5]),v.set(o[S+6],o[S+7],o[S+8]),E.set(r[y+0],r[y+1]),b.set(r[y+2],r[y+3]),R.set(r[y+4],r[y+5]),T.copy(M).add(x).add(v).divideScalar(3);const P=m(T);_(E,y+0,M,P),_(b,y+2,x,P),_(R,y+4,v,P)}}function _(M,x,v,T){T<0&&M.x===1&&(r[x]=M.x-1),v.x===0&&v.z===0&&(r[x]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.vertices,t.indices,t.radius,t.details)}}class fs extends qc{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new qc().fromJSON(i))}return this}}const ZM={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=Wf(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,f,p,d;if(n&&(o=nx(s,t,o,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)f=s[g],p=s[g+1],f<a&&(a=f),p<l&&(l=p),f>c&&(c=f),p>h&&(h=p);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return ur(o,r,e,a,l,d,0),r}};function Wf(s,t,e,n,i){let o,r;if(i===fx(s,t,e,n)>0)for(o=t;o<e;o+=n)r=$u(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=$u(o,s[o],s[o+1],r);return r&&Va(r,r.next)&&(fr(r),r=r.next),r}function Ls(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Va(e,e.next)||Xe(e.prev,e,e.next)===0)){if(fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ur(s,t,e,n,i,o,r){if(!s)return;!r&&o&&ax(s,n,i,o);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,o?QM(s,n,i,o):JM(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),fr(s),s=c.next,a=c.next;continue}if(s=c,s===a){r?r===1?(s=tx(Ls(s),t,e),ur(s,t,e,n,i,o,2)):r===2&&ex(s,t,e,n,i,o):ur(Ls(s),t,e,n,i,o,1);break}}}function JM(s){const t=s.prev,e=s,n=s.next;if(Xe(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=i<o?i<r?i:r:o<r?o:r,f=a<l?a<c?a:c:l<c?l:c,p=i>o?i>r?i:r:o>r?o:r,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=f&&g.y<=d&&go(i,a,o,l,r,c,g.x,g.y)&&Xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function QM(s,t,e,n){const i=s.prev,o=s,r=s.next;if(Xe(i,o,r)>=0)return!1;const a=i.x,l=o.x,c=r.x,h=i.y,f=o.y,p=r.y,d=a<l?a<c?a:c:l<c?l:c,g=h<f?h<p?h:p:f<p?f:p,_=a>l?a>c?a:c:l>c?l:c,m=h>f?h>p?h:p:f>p?f:p,u=Yc(d,g,t,e,n),M=Yc(_,m,t,e,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=u&&v&&v.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&go(a,h,l,f,c,p,x.x,x.y)&&Xe(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==r&&go(a,h,l,f,c,p,v.x,v.y)&&Xe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=u;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&go(a,h,l,f,c,p,x.x,x.y)&&Xe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==r&&go(a,h,l,f,c,p,v.x,v.y)&&Xe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function tx(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!Va(i,o)&&Xf(i,n,n.next,o)&&dr(i,o)&&dr(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),fr(n),fr(n.next),n=s=o),n=n.next}while(n!==s);return Ls(n)}function ex(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&hx(r,a)){let l=$f(r,a);r=Ls(r,r.next),l=Ls(l,l.next),ur(r,t,e,n,i,o,0),ur(l,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function nx(s,t,e,n){const i=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:s.length,c=Wf(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(cx(c));for(i.sort(ix),o=0;o<i.length;o++)e=sx(i[o],e);return e}function ix(s,t){return s.x-t.x}function sx(s,t){const e=ox(s,t);if(!e)return t;const n=$f(e,s);return Ls(n,n.next),Ls(e,e.next)}function ox(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const p=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=o&&p>n&&(n=p,i=e.x<e.next.x?e:e.next,p===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,f;e=i;do o>=e.x&&e.x>=l&&o!==e.x&&go(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(o-e.x),dr(e,s)&&(f<h||f===h&&(e.x>i.x||e.x===i.x&&rx(i,e)))&&(i=e,h=f)),e=e.next;while(e!==a);return i}function rx(s,t){return Xe(s.prev,s,t.prev)<0&&Xe(t.next,s,s.next)<0}function ax(s,t,e,n){let i=s;do i.z===0&&(i.z=Yc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,lx(i)}function lx(s){let t,e,n,i,o,r,a,l,c=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,c*=2}while(r>1);return s}function Yc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function cx(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function go(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function hx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!ux(s,t)&&(dr(s,t)&&dr(t,s)&&dx(s,t)&&(Xe(s.prev,s,t.prev)||Xe(s,t.prev,t))||Va(s,t)&&Xe(s.prev,s,s.next)>0&&Xe(t.prev,t,t.next)>0)}function Xe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Va(s,t){return s.x===t.x&&s.y===t.y}function Xf(s,t,e,n){const i=la(Xe(s,t,e)),o=la(Xe(s,t,n)),r=la(Xe(e,n,s)),a=la(Xe(e,n,t));return!!(i!==o&&r!==a||i===0&&aa(s,e,t)||o===0&&aa(s,n,t)||r===0&&aa(e,s,n)||a===0&&aa(e,t,n))}function aa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function la(s){return s>0?1:s<0?-1:0}function ux(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Xf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function dr(s,t){return Xe(s.prev,s,s.next)<0?Xe(s,t,s.next)>=0&&Xe(s,s.prev,t)>=0:Xe(s,t,s.prev)<0||Xe(s,s.next,t)<0}function dx(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function $f(s,t){const e=new jc(s.i,s.x,s.y),n=new jc(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function $u(s,t,e,n){const i=new jc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function jc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fx(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class yi{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return yi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];qu(t),Yu(n,t);let r=t.length;e.forEach(qu);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,Yu(n,e[l]);const a=ZM.triangulate(n,i);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function qu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Yu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ds extends xe{constructor(t=new fs([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new ne(i,3)),this.setAttribute("uv",new ne(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const u=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:px;let x,v=!1,T,E,b,R;u&&(x=u.getSpacedPoints(h),v=!0,p=!1,T=u.computeFrenetFrames(h,!1),E=new U,b=new U,R=new U),p||(m=0,d=0,g=0,_=0);const S=a.extractPoints(c);let y=S.shape;const P=S.holes;if(!yi.isClockWise(y)){y=y.reverse();for(let nt=0,mt=P.length;nt<mt;nt++){const k=P[nt];yi.isClockWise(k)&&(P[nt]=k.reverse())}}const N=yi.triangulateShape(y,P),z=y;for(let nt=0,mt=P.length;nt<mt;nt++){const k=P[nt];y=y.concat(k)}function q(nt,mt,k){return mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(mt,k)}const V=y.length,$=N.length;function G(nt,mt,k){let zt,vt,Pt;const Mt=nt.x-mt.x,kt=nt.y-mt.y,Ot=k.x-nt.x,L=k.y-nt.y,A=Mt*Mt+kt*kt,Z=Mt*L-kt*Ot;if(Math.abs(Z)>Number.EPSILON){const st=Math.sqrt(A),ut=Math.sqrt(Ot*Ot+L*L),rt=mt.x-kt/st,$t=mt.y+Mt/st,Et=k.x-L/ut,It=k.y+Ot/ut,ve=((Et-rt)*L-(It-$t)*Ot)/(Mt*L-kt*Ot);zt=rt+Mt*ve-nt.x,vt=$t+kt*ve-nt.y;const yt=zt*zt+vt*vt;if(yt<=2)return new ct(zt,vt);Pt=Math.sqrt(yt/2)}else{let st=!1;Mt>Number.EPSILON?Ot>Number.EPSILON&&(st=!0):Mt<-Number.EPSILON?Ot<-Number.EPSILON&&(st=!0):Math.sign(kt)===Math.sign(L)&&(st=!0),st?(zt=-kt,vt=Mt,Pt=Math.sqrt(A)):(zt=Mt,vt=kt,Pt=Math.sqrt(A/2))}return new ct(zt/Pt,vt/Pt)}const dt=[];for(let nt=0,mt=z.length,k=mt-1,zt=nt+1;nt<mt;nt++,k++,zt++)k===mt&&(k=0),zt===mt&&(zt=0),dt[nt]=G(z[nt],z[k],z[zt]);const pt=[];let ot,Nt=dt.concat();for(let nt=0,mt=P.length;nt<mt;nt++){const k=P[nt];ot=[];for(let zt=0,vt=k.length,Pt=vt-1,Mt=zt+1;zt<vt;zt++,Pt++,Mt++)Pt===vt&&(Pt=0),Mt===vt&&(Mt=0),ot[zt]=G(k[zt],k[Pt],k[Mt]);pt.push(ot),Nt=Nt.concat(ot)}for(let nt=0;nt<m;nt++){const mt=nt/m,k=d*Math.cos(mt*Math.PI/2),zt=g*Math.sin(mt*Math.PI/2)+_;for(let vt=0,Pt=z.length;vt<Pt;vt++){const Mt=q(z[vt],dt[vt],zt);xt(Mt.x,Mt.y,-k)}for(let vt=0,Pt=P.length;vt<Pt;vt++){const Mt=P[vt];ot=pt[vt];for(let kt=0,Ot=Mt.length;kt<Ot;kt++){const L=q(Mt[kt],ot[kt],zt);xt(L.x,L.y,-k)}}}const ie=g+_;for(let nt=0;nt<V;nt++){const mt=p?q(y[nt],Nt[nt],ie):y[nt];v?(b.copy(T.normals[0]).multiplyScalar(mt.x),E.copy(T.binormals[0]).multiplyScalar(mt.y),R.copy(x[0]).add(b).add(E),xt(R.x,R.y,R.z)):xt(mt.x,mt.y,0)}for(let nt=1;nt<=h;nt++)for(let mt=0;mt<V;mt++){const k=p?q(y[mt],Nt[mt],ie):y[mt];v?(b.copy(T.normals[nt]).multiplyScalar(k.x),E.copy(T.binormals[nt]).multiplyScalar(k.y),R.copy(x[nt]).add(b).add(E),xt(R.x,R.y,R.z)):xt(k.x,k.y,f/h*nt)}for(let nt=m-1;nt>=0;nt--){const mt=nt/m,k=d*Math.cos(mt*Math.PI/2),zt=g*Math.sin(mt*Math.PI/2)+_;for(let vt=0,Pt=z.length;vt<Pt;vt++){const Mt=q(z[vt],dt[vt],zt);xt(Mt.x,Mt.y,f+k)}for(let vt=0,Pt=P.length;vt<Pt;vt++){const Mt=P[vt];ot=pt[vt];for(let kt=0,Ot=Mt.length;kt<Ot;kt++){const L=q(Mt[kt],ot[kt],zt);v?xt(L.x,L.y+x[h-1].y,x[h-1].x+k):xt(L.x,L.y,f+k)}}}tt(),_t();function tt(){const nt=i.length/3;if(p){let mt=0,k=V*mt;for(let zt=0;zt<$;zt++){const vt=N[zt];jt(vt[2]+k,vt[1]+k,vt[0]+k)}mt=h+m*2,k=V*mt;for(let zt=0;zt<$;zt++){const vt=N[zt];jt(vt[0]+k,vt[1]+k,vt[2]+k)}}else{for(let mt=0;mt<$;mt++){const k=N[mt];jt(k[2],k[1],k[0])}for(let mt=0;mt<$;mt++){const k=N[mt];jt(k[0]+V*h,k[1]+V*h,k[2]+V*h)}}n.addGroup(nt,i.length/3-nt,0)}function _t(){const nt=i.length/3;let mt=0;At(z,mt),mt+=z.length;for(let k=0,zt=P.length;k<zt;k++){const vt=P[k];At(vt,mt),mt+=vt.length}n.addGroup(nt,i.length/3-nt,1)}function At(nt,mt){let k=nt.length;for(;--k>=0;){const zt=k;let vt=k-1;vt<0&&(vt=nt.length-1);for(let Pt=0,Mt=h+m*2;Pt<Mt;Pt++){const kt=V*Pt,Ot=V*(Pt+1),L=mt+zt+kt,A=mt+vt+kt,Z=mt+vt+Ot,st=mt+zt+Ot;ht(L,A,Z,st)}}}function xt(nt,mt,k){l.push(nt),l.push(mt),l.push(k)}function jt(nt,mt,k){wt(nt),wt(mt),wt(k);const zt=i.length/3,vt=M.generateTopUV(n,i,zt-3,zt-2,zt-1);Ht(vt[0]),Ht(vt[1]),Ht(vt[2])}function ht(nt,mt,k,zt){wt(nt),wt(mt),wt(zt),wt(mt),wt(k),wt(zt);const vt=i.length/3,Pt=M.generateSideWallUV(n,i,vt-6,vt-3,vt-2,vt-1);Ht(Pt[0]),Ht(Pt[1]),Ht(Pt[3]),Ht(Pt[1]),Ht(Pt[2]),Ht(Pt[3])}function wt(nt){i.push(l[nt*3+0]),i.push(l[nt*3+1]),i.push(l[nt*3+2])}function Ht(nt){o.push(nt.x),o.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mx(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new $c[i.type]().fromJSON(i)),new Ds(n,t.options)}}const px={generateTopUV:function(s,t,e,n,i){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new ct(o,r),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(s,t,e,n,i,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],p=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[o*3],m=t[o*3+1],u=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new ct(r,1-l),new ct(c,1-f),new ct(p,1-g),new ct(_,1-u)]:[new ct(a,1-l),new ct(h,1-f),new ct(d,1-g),new ct(m,1-u)]}};function mx(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const o=s[n];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class En extends Ga{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new En(t.radius,t.detail)}}class _h extends Ga{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _h(t.radius,t.detail)}}class br extends xe{constructor(t=.5,e=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let f=t;const p=(e-t)/i,d=new U,g=new ct;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const u=o+m/n*r;d.x=f*Math.cos(u),d.y=f*Math.sin(u),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=p}for(let _=0;_<i;_++){const m=_*(n+1);for(let u=0;u<n;u++){const M=u+m,x=M,v=M+n+1,T=M+n+2,E=M+1;a.push(x,v,E),a.push(v,T,E)}}this.setIndex(a),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Mh extends xe{constructor(t=new fs([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ne(i,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(r,2));function c(h){const f=i.length/3,p=h.extractPoints(e);let d=p.shape;const g=p.holes;yi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,u=g.length;m<u;m++){const M=g[m];yi.isClockWise(M)===!0&&(g[m]=M.reverse())}const _=yi.triangulateShape(d,g);for(let m=0,u=g.length;m<u;m++){const M=g[m];d=d.concat(M)}for(let m=0,u=d.length;m<u;m++){const M=d[m];i.push(M.x,M.y,0),o.push(0,0,1),r.push(M.x,M.y)}for(let m=0,u=_.length;m<u;m++){const M=_[m],x=M[0]+f,v=M[1]+f,T=M[2]+f;n.push(x,v,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return gx(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const r=e[t.shapes[i]];n.push(r)}return new Mh(n,t.curveSegments)}}function gx(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Qe extends xe{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],f=new U,p=new U,d=[],g=[],_=[],m=[];for(let u=0;u<=n;u++){const M=[],x=u/n;let v=0;u===0&&r===0?v=.5/e:u===n&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){const E=T/e;f.x=-t*Math.cos(i+E*o)*Math.sin(r+x*a),f.y=t*Math.cos(r+x*a),f.z=t*Math.sin(i+E*o)*Math.sin(r+x*a),g.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),m.push(E+v,1-x),M.push(c++)}h.push(M)}for(let u=0;u<n;u++)for(let M=0;M<e;M++){const x=h[u][M+1],v=h[u][M],T=h[u+1][M],E=h[u+1][M+1];(u!==0||r>0)&&d.push(x,v,E),(u!==n-1||l<Math.PI)&&d.push(v,T,E)}this.setIndex(d),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dn extends xe{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],h=new U,f=new U,p=new U;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*o,m=d/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(f,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,u=(i+1)*(d-1)+g,M=(i+1)*d+g;r.push(_,m,M),r.push(m,u,M)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Yt extends ds{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xh extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vx extends xh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Nl=new Me,ju=new U,Ku=new U;class qf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hh,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ju.setFromMatrixPosition(t.matrixWorld),e.position.copy(ju),Ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ku),e.updateMatrixWorld(),Nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _x extends qf{constructor(){super(new On(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ro*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||i!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=i,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Yf extends xh{constructor(t,e,n=0,i=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.distance=n,this.angle=i,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new _x}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Mx extends qf{constructor(){super(new Pf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xx extends xh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Mx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Zu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Zu(){return performance.now()}const Ju=new Me;class jf{constructor(t,e,n=0,i=1/0){this.ray=new yr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ch,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ju.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ju),this}intersectObject(t,e=!0,n=[]){return Kc(t,this,n,e),n.sort(Qu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,o=t.length;i<o;i++)Kc(t[i],this,n,e);return n.sort(Qu),n}}function Qu(s,t){return s.distance-t.distance}function Kc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const o=s.children;for(let r=0,a=o.length;r<a;r++)Kc(o[r],t,e,!0)}}class td{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(rn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bx extends Is{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);const ed={type:"change"},yh={type:"start"},Kf={type:"end"},ca=new yr,nd=new os,wx=Math.cos(70*Rs.DEG2RAD),on=new U,Pn=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ol=1e-6;class Sx extends bx{constructor(t,e=null){super(t,e),this.state=ze.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_o.ROTATE,MIDDLE:_o.DOLLY,RIGHT:_o.PAN},this.touches={ONE:po.ROTATE,TWO:po.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Kn,this._lastTargetPosition=new U,this._quat=new Kn().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new td,this._sphericalDelta=new td,this._scale=1,this._panOffset=new U,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new U,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Tx.bind(this),this._onPointerDown=Ex.bind(this),this._onPointerUp=Ax.bind(this),this._onContextMenu=kx.bind(this),this._onMouseWheel=Px.bind(this),this._onKeyDown=Lx.bind(this),this._onTouchStart=Dx.bind(this),this._onTouchMove=Ix.bind(this),this._onMouseDown=Rx.bind(this),this._onMouseMove=Cx.bind(this),this._interceptControlDown=Ux.bind(this),this._interceptControlUp=Nx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ed),this.update(),this.state=ze.NONE}update(t=null){const e=this.object.position;on.copy(e).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Pn:n>Math.PI&&(n-=Pn),i<-Math.PI?i+=Pn:i>Math.PI&&(i-=Pn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),e.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=on.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(ca.origin.copy(this.object.position),ca.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ca.direction))<wx?this.object.lookAt(this.target):(nd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ca.intersectPlane(nd,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ol||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ol||this._lastTargetPosition.distanceToSquared(this.target)>Ol?(this.dispatchEvent(ed),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pn/60*this.autoRotateSpeed*t:Pn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){on.setFromMatrixColumn(e,0),on.multiplyScalar(-t),this._panOffset.add(on)}_panUp(t,e){this.screenSpacePanning===!0?on.setFromMatrixColumn(e,1):(on.setFromMatrixColumn(e,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(t),this._panOffset.add(on)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;on.copy(i).sub(this.target);let o=on.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(n*n+i*i);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(i,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ex(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Tx(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Ax(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kf),this.state=ze.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Rx(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case _o.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ze.DOLLY;break;case _o.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ze.ROTATE}break;case _o.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(yh)}function Cx(s){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Px(s){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(s.preventDefault(),this.dispatchEvent(yh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Kf))}function Lx(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Dx(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case po.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ze.TOUCH_ROTATE;break;case po.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case po.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ze.TOUCH_DOLLY_PAN;break;case po.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(yh)}function Ix(s){switch(this._trackPointer(s),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ze.NONE}}function kx(s){this.enabled!==!1&&s.preventDefault()}function Ux(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Nx(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}async function Ox(s){const t=await fetch(s);if(!t.ok)throw new Error(`Failed to load ${s}: ${t.status}`);return t.json()}class Fx{constructor(t){I(this,"n");I(this,"x");I(this,"z");I(this,"s");I(this,"length");I(this,"vtx");I(this,"vtz");const e=this.n=t.length/2;this.x=new Float64Array(e),this.z=new Float64Array(e),this.s=new Float64Array(e);for(let n=0;n<e;n++)this.x[n]=t[n*2],this.z[n]=t[n*2+1],n>0&&(this.s[n]=this.s[n-1]+Math.hypot(this.x[n]-this.x[n-1],this.z[n]-this.z[n-1]));this.length=this.s[e-1],this.vtx=new Float64Array(e),this.vtz=new Float64Array(e);for(let n=0;n<e;n++){const i=Math.max(0,n-1),o=Math.min(e-1,n+1),r=this.x[o]-this.x[i],a=this.z[o]-this.z[i],l=Math.hypot(r,a)||1;this.vtx[n]=r/l,this.vtz[n]=a/l}}segIndex(t){let e=0,n=this.n-2;for(;e<n;){const i=e+n+1>>1;this.s[i]<=t?e=i:n=i-1}return e}frame(t,e={x:0,z:0,tx:0,tz:1,nx:-1,nz:0}){const n=this.segIndex(t),i=(t-this.s[n])/(this.s[n+1]-this.s[n]||1);e.x=this.x[n]+(this.x[n+1]-this.x[n])*i,e.z=this.z[n]+(this.z[n+1]-this.z[n])*i;let o=this.vtx[n]+(this.vtx[n+1]-this.vtx[n])*i,r=this.vtz[n]+(this.vtz[n+1]-this.vtz[n])*i;const a=Math.hypot(o,r)||1;return o/=a,r/=a,e.tx=o,e.tz=r,e.nx=-r,e.nz=o,e}point(t,e){const n=this.frame(t);return[n.x+n.nx*e,n.z+n.nz*e]}project(t,e,n=-1){let i,o;if(n>=0){const h=this.segIndex(n);i=Math.max(0,h-60),o=Math.min(this.n-2,h+60)}else{let h=1/0,f=0;for(let p=0;p<this.n;p+=8){const d=(t-this.x[p])**2+(e-this.z[p])**2;d<h&&(h=d,f=p)}i=Math.max(0,f-24),o=Math.min(this.n-2,f+24)}let r=1/0,a=0,l=1;for(let h=i;h<=o;h++){const f=this.x[h],p=this.z[h],d=this.x[h+1]-f,g=this.z[h+1]-p,_=d*d+g*g||1e-9;let m=((t-f)*d+(e-p)*g)/_;m=m<0?0:m>1?1:m;const u=f+d*m,M=p+g*m,x=(t-u)**2+(e-M)**2;x<r&&(r=x,a=this.s[h]+Math.sqrt(_)*m,l=(t-f)*-g+(e-p)*d>=0?1:-1)}const c=Math.sqrt(r);return{s:a,d:c*l,dist:c}}}function _i(s,t,e=0){let n=s*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const id=s=>s*s*(3-2*s);function zx(s,t,e=0){const n=Math.floor(s),i=Math.floor(t),o=id(s-n),r=id(t-i),a=_i(n,i,e),l=_i(n+1,i,e),c=_i(n,i+1,e),h=_i(n+1,i+1,e);return(a+(l-a)*o+(c-a)*r+(a-l-c+h)*o*r)*2-1}function as(s,t,e=4,n=0){let i=0,o=.5,r=1;for(let a=0;a<e;a++)i+=o*zx(s*r,t*r,n+a*17),o*=.5,r*=2.03;return i}function Gi(s){let t=s>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Te=(s,t,e)=>s<t?t:s>e?e:s,Ii=(s,t,e)=>s+(t-s)*e,ke=(s,t,e)=>{const n=Te((e-s)/(t-s),0,1);return n*n*(3-2*n)},bh=s=>`${(Math.abs(s)*3.281).toFixed(1)} ft`,oi=5.2,pi=2.2,sd=1.75,Zc=3.1,Bx=1.6,Hx=15,ha=22*4.4,Gx=.8,Vx=7,Wx=3,Xx=.04,od=.08;class $x{constructor(t,e,n,i=[],o=0,r=[]){I(this,"bodies",[]);I(this,"gates",[]);I(this,"groups",[]);I(this,"events",[]);I(this,"hwTable");I(this,"hwStep",.5);I(this,"overflowCooldown",0);this.length=n,this.windingHoles=i;const a=[];for(const d of[...t].sort((g,_)=>g.s0-_.s0)){const g=a.at(-1);g&&Math.abs(g.at(-1).s1-d.s0)<4?g.push(d):a.push([d])}let l=o,c=0,h=0;for(const d of a){const g=d.length>1,_=g?qx(d):d[0].name;this.bodies.push({kind:"pound",s0:c,s1:d[0].s0,level:l,lo:l,hi:l,label:"the canal"});const m={name:_,staircase:g,gates:[],bodies:[this.bodies.length-1]};this.groups.push(m);for(let u=0;u<d.length;u++){const M=d[u],x=u===0?M.s0:d[u-1].s1,v=l,T=l+M.rise,E=g?u>0:h++%2===1,b=g?`chamber ${u+1}`:"the lock";this.bodies.push({kind:"chamber",s0:x,s1:M.s1,level:E?T:v,lo:v,hi:T,lockName:_,label:b}),m.bodies.push(this.bodies.length-1),l=T}c=d.at(-1).s1;for(let u=0;u<=d.length;u++){const M=this.bodies.length-1-d.length+u,x=u===0?"bottom gates":u===d.length?"top gates":d.length===2?"middle gates":d.length===3?`middle gates (${u===1?"lower":"upper"})`:`middle gates ${u}`,v={s:u===0?d[0].s0:d[u-1].s1,below:M,above:M+1,open:0,wantOpen:!1,paddle:0,wantPaddle:!1,flow:0,lockName:_,label:x,group:m};this.gates.push(v),m.gates.push(v)}m.bodies.push(this.bodies.length)}this.bodies.push({kind:"pound",s0:c,s1:n,level:l,lo:l,hi:l,label:"the canal"});const f=Math.ceil(n/this.hwStep)+1;this.hwTable=new Float32Array(f);const p=e.filter(d=>d.kind==="road"&&d.w<12);for(let d=0;d<f;d++){const g=d*this.hwStep;let _=oi;for(const m of this.bodies){if(m.kind!=="chamber")continue;const u=Math.max(m.s0-g,g-m.s1,0);_=Math.min(_,pi+(oi-pi)*ke(.5,9,u))}for(const m of p){const u=Math.max(Math.abs(g-m.s)-m.w/2-3.5,0);_=Math.min(_,Zc+(oi-Zc)*ke(0,7,u))}for(const m of i){const u=Math.abs(g-m);u<40&&(_=Math.max(_,oi+(Hx-oi)*ke(40,16,u)))}for(const[m,u]of r){const M=Math.max(m-g,g-u,0);_=Math.min(_,sd+(oi-sd)*ke(0,14,M))}this.hwTable[d]=_}}bodyIndexAt(t){for(let e=0;e<this.bodies.length;e++)if(t<this.bodies[e].s1)return e;return this.bodies.length-1}levelAt(t){return this.bodies[this.bodyIndexAt(t)].level}bedAt(t){return this.bodies[this.bodyIndexAt(t)].lo-Bx}halfWidthAt(t){const e=Te(t/this.hwStep,0,this.hwTable.length-1),n=Math.floor(e),i=e-n,o=this.hwTable[n],r=this.hwTable[Math.min(n+1,this.hwTable.length-1)];return o+(r-o)*i}levelsMatch(t){return Math.abs(this.bodies[t.below].level-this.bodies[t.above].level)<Xx}openBlocker(t){if(this.levelsMatch(t))return null;const e=Math.abs(this.bodies[t.below].level-this.bodies[t.above].level);return`The water's ${bh(e)} higher on one side, so the gates won't budge. Raise the paddles first.`}toggleGate(t,e){if(t.wantOpen)return e?"The boat's in the way of the gates.":(t.wantOpen=!1,null);const n=this.openBlocker(t);return n||(t.wantOpen=!0,null)}togglePaddle(t){t.wantPaddle=!t.wantPaddle}gateBlocks(t){return t.open<.97}update(t){this.overflowCooldown-=t;for(const n of this.gates)n.open=Te(n.open+(n.wantOpen?1:-1)*(t/Vx),0,1),n.paddle=Te(n.paddle+(n.wantPaddle?1:-1)*(t/Wx),0,1);const e=this.bodies.map(n=>n.kind==="chamber"?n.lo:-1/0);for(let n=!0;n;){n=!1;for(const i of this.gates){if(i.open<=.02)continue;const o=Math.max(e[i.below],e[i.above]);(e[i.below]!==o||e[i.above]!==o)&&(e[i.below]=e[i.above]=o,n=!0)}}for(const n of this.gates){const i=Gx*n.paddle+(n.open>.02?40*n.open:0),o=this.bodies[n.below],a=this.bodies[n.above].level-o.level;if(n.flow=0,i<=0||Math.abs(a)<1e-5)continue;const[l,c]=a>0?[n.above,n.below]:[n.below,n.above],h=this.bodies[l],f=this.bodies[c],p=h.kind==="chamber",d=f.kind==="chamber";if(!p&&!d)continue;let g=i*Math.sqrt(2*9.81*Math.abs(a))*t;p&&(g=Math.min(g,Math.max(0,h.level-e[l])*ha)),g=Math.min(g,Math.abs(a)*ha/(p&&d?2:1)),!(g<=0)&&(p&&(h.level-=g/ha),d&&(f.level+=g/ha),n.flow=Math.sign(a)*(g/t))}this.bodies.forEach((n,i)=>{if(n.kind!=="chamber"||n.level<=n.hi+od||(n.level=n.hi+od,this.overflowCooldown>0))return;const o=this.gates.find(l=>l.paddle>.05&&(l.below===i&&this.bodies[l.above].level>n.level||l.above===i&&this.bodies[l.below].level>n.level)),r=this.gates.find(l=>l.below===i||l.above===i).group,a=r.staircase?`${n.label} of ${r.name}`:r.name;this.events.push({text:o?`${rd(a)} is overflowing: the paddles on the ${o.label} are still up.`:`${rd(a)} is overflowing!`,kind:"warn",group:r}),this.overflowCooldown=12})}}const rd=s=>s[0].toUpperCase()+s.slice(1);function qx(s){const t=s[0].name.split(" ")[0];return s.every(e=>e.name.startsWith(t))?`${t} Staircase`:`${s[0].name} flight`}const Yx=2,Fl=1.1,zl=44,ua=8,jx=.8,ls=16,Xt=1,Ln={bed:new Qt("#2a2f24"),wallStone:new Qt("#77706a"),wallSandstone:new Qt("#9b5644"),coping:new Qt("#bdb3a3"),towpath:new Qt("#b59d78"),grass:new Qt("#6f9a4c"),grassDark:new Qt("#5c8a42"),field:new Qt("#86a85a"),paved:new Qt("#8f8b84"),park:new Qt("#5e9445")};class Kx{constructor(t,e,n,i){I(this,"bank");I(this,"smoothBank");I(this,"bankStep",2);I(this,"riverLevel");I(this,"riverDist",null);I(this,"riverGrid",{x0:0,z0:0,w:0,h:0,cell:20});I(this,"urbanAt",()=>0);I(this,"parkAt",()=>!1);I(this,"embankments",[]);I(this,"cuttings",[]);this.route=t,this.ww=e,this.bounds=n,this.valley=i;const o=Math.ceil(t.length/this.bankStep)+1,r=new Float32Array(o);for(let a=0;a<o;a++){const l=a*this.bankStep;let c=-1/0;for(const h of e.bodies)h.s1>l-4&&h.s0<l+4&&(c=Math.max(c,h.hi));r[a]=c+jx}this.bank=r,this.smoothBank=ld(ld(r,15),15),this.riverLevel=e.bodies[0].lo-(i?i.depth-1:6)}bankTop(t){return ad(this.bank,t/this.bankStep)}setRivers(t){const{bounds:e}=this,n=this.riverGrid.cell,i=Math.ceil((e.x1-e.x0)/n)+1,o=Math.ceil((e.z1-e.z0)/n)+1;this.riverGrid={x0:e.x0,z0:e.z0,w:i,h:o,cell:n};const r=new Float32Array(i*o).fill(1e9);for(const a of t)for(let l=0;l+3<a.p.length;l+=2){const c=a.p[l],h=a.p[l+1],f=a.p[l+2],p=a.p[l+3],d=120,g=Math.max(0,Math.floor((Math.min(c,f)-d-e.x0)/n)),_=Math.min(i-1,Math.ceil((Math.max(c,f)+d-e.x0)/n)),m=Math.max(0,Math.floor((Math.min(h,p)-d-e.z0)/n)),u=Math.min(o-1,Math.ceil((Math.max(h,p)+d-e.z0)/n));for(let M=m;M<=u;M++)for(let x=g;x<=_;x++){const v=Jx(e.x0+x*n,e.z0+M*n,c,h,f,p)-a.w/2;v<r[M*i+x]&&(r[M*i+x]=v)}}this.riverDist=r}riverDistAt(t,e){if(!this.riverDist)return 1e9;const n=this.riverGrid,i=Te((t-n.x0)/n.cell,0,n.w-1.001),o=Te((e-n.z0)/n.cell,0,n.h-1.001),r=Math.floor(i),a=Math.floor(o),l=i-r,c=o-a,h=this.riverDist;return Ii(Ii(h[a*n.w+r],h[a*n.w+r+1],l),Ii(h[(a+1)*n.w+r],h[(a+1)*n.w+r+1],l),c)}cliffSide(t,e){return this.cuttings.some(n=>n.side===e&&t>n.s0-25&&t<n.s1+25)}cuttingAt(t,e){for(const n of this.cuttings){if(t<n.s0-40||t>n.s1+40)continue;const i=ke(n.s0-30,n.s0+15,t)*(1-ke(n.s1-15,n.s1+30,t)),o=this.ww.halfWidthAt(t),r=Math.abs(e);if(Math.sign(e)===n.side){const l=ke(o+3.3,o+6.2,r);return{h:n.cliff*l*i,cliff:i*(r>o+3.2&&r<o+6.5?1:0)}}const a=ke(o+3.6,o+16,r);return{h:n.far*a*i,cliff:i*(a>.05&&a<.6?.7:0)}}return{h:0,cliff:0}}landHeight(t,e,n,i){const o=this.ww.halfWidthAt(n),r=Math.abs(i);let a=Ii(this.bankTop(n),ad(this.smoothBank,n/this.bankStep),ke(o+3,o+24,r));const l=ke(o+6,140,r);if(a+=as(t*.004,e*.004,3,7)*3.5*l+as(t*.03,e*.03,2,3)*.35*ke(o+3,o+12,r),this.valley){const h=this.valley,f=ke(h.s0-10,h.s0+100,n)*(1-ke(h.s1-100,h.s1+10,n)),p=ke(h.s0-400,h.s0,n)*(1-ke(h.s1,h.s1+400,n))*ke(60,220,r);a-=h.depth*Math.max(f*ke(o+2.7,o+9,r),p)}const c=this.riverDistAt(t,e);c<40&&(a=Ii(this.riverLevel-1.5,a,ke(-2,40,c))),a+=this.cuttingAt(n,i).h;for(const h of this.embankments){const f=t-h.x,p=e-h.z;if(Math.abs(f)+Math.abs(p)>h.halfSpan+60)continue;const d=Math.abs(f*h.ux+p*h.uz),g=Math.abs(-f*h.uz+p*h.ux),_=ke(h.halfWidth+5,h.halfWidth,g);if(_<=0)continue;const m=h.deck-.15-Math.max(0,d-h.halfSpan*.9)/10;m>a&&(a=a+(m-a)*_)}return a}get hasAqueduct(){return!!this.valley}nearAqueduct(t,e=15){return!!this.valley&&t>this.valley.s0-e&&t<this.valley.s1+e}aqueductCore(t){const e=this.valley;return e?ke(e.s0+ls-6,e.s0+ls,t)*(1-ke(e.s1-ls,e.s1-ls+6,t)):0}floorUnder(t,e,n,i){const o=this.ww.halfWidthAt(n)+9;return this.landHeight(t,e,n,(Math.sign(i)||1)*Math.max(Math.abs(i),o))}heightAt(t,e){const n=this.route.project(t,e),i=this.ww.halfWidthAt(n.s),o=this.aqueductCore(n.s);return o>0&&n.dist<i+9?Ii(n.dist<i?this.ww.bedAt(n.s):this.landHeight(t,e,n.s,n.d),this.floorUnder(t,e,n.s,n.d),o):n.dist<i?this.ww.bedAt(n.s):this.landHeight(t,e,n.s,n.d)}buildStrip(){const{route:t,ww:e}=this,n=[];for(let g=0;g<t.length;g+=Yx)n.push(g);n.push(t.length);for(const g of e.gates)n.push(g.s-.05,g.s+.05,g.s+Fl-.05,g.s+Fl+.05);n.sort((g,_)=>g-_);const i=n.length,o=g=>[[0,"bed"],[g-.8,"bed"],[g,"wallBase"],[g,"wallTop"],[g+.5,"coping"],[g+.55,"path"],[g+2.6,"path"],[g+3.4,"land"],[g+6.3,"land"],[g+7,"land"],[Math.max(14,g+9),"land"],[Math.max(22,g+15),"land"],[Math.max(32,g+24),"land"],[Math.max(zl,g+34),"land"]],r=o(oi).length,a=r*2-1,l=new Float32Array(i*a*3),c=new Float32Array(i*a*3),h={x:0,z:0,tx:0,tz:0,nx:0,nz:0},f=new Qt;for(let g=0;g<i;g++){const _=n[g];t.frame(_,h);const m=e.halfWidthAt(_),u=this.bankTop(_),M=e.gates.find(R=>_>=R.s&&_<R.s+Fl),x=e.bedAt(M?M.s-.01:_),v=this.nearAqueduct(_,30),T=e.bodies[e.bodyIndexAt(_)].kind==="chamber"||m<oi-.5&&!v,E=Zx(t,_),b=o(m);for(let R=0;R<a;R++){const S=R<r-1?-1:1,y=S<0?r-1-R:R-(r-1);let[P,w]=b[y];w==="land"&&Math.abs(E)>1e-4&&Math.sign(E)===S&&(P=Math.min(P,Math.max(m+3.6,.8/Math.abs(E))));const N=h.x+h.nx*P*S,z=h.z+h.nz*P*S,q=S===Xt||T;let V;switch(w){case"bed":V=x,f.copy(Ln.bed);break;case"wallBase":V=x+.2,f.copy(T?Ln.wallSandstone:Ln.wallStone);break;case"wallTop":V=u,f.copy(T?Ln.wallSandstone:Ln.wallStone);break;case"coping":V=u+.04,f.copy(Ln.coping);break;case"path":V=u,f.copy(q?Ln.towpath:Ln.grassDark);break;default:V=this.landHeight(N,z,_,P*S),this.groundColour(N,z,_,P*S,f)}w==="path"&&q&&f.offsetHSL(0,0,(_i(g,R,5)-.5)*.04);const $=this.aqueductCore(_);$>0&&(V=Ii(V,this.floorUnder(N,z,_,P*S),$),$>.5&&this.groundColour(N,z,_,(Math.sign(P*S)||1)*Math.max(P,m+9),f));const G=(g*a+R)*3;l[G]=N,l[G+1]=V,l[G+2]=z,c[G]=f.r,c[G+1]=f.g,c[G+2]=f.b}}const p=cd(l,c,i,a,!0),d=new Y(p,ud());return d.receiveShadow=!0,d.name="strip",d}buildFar(){const{bounds:t,route:e,ww:n}=this,i=Math.ceil((t.x1-t.x0)/ua)+1,o=Math.ceil((t.z1-t.z0)/ua)+1,r=new Float32Array(i*o*3),a=new Float32Array(i*o*3),l=new Qt;let c=-1;for(let p=0;p<o;p++)for(let d=0;d<i;d++){const g=t.x0+d*ua,_=t.z0+p*ua,m=e.project(g,_,c),u=m.dist>150?e.project(g,_):m;c=u.dist<150?u.s:-1;const M=n.halfWidthAt(u.s);let x;u.dist<M+14?x=n.bedAt(u.s)-3:u.dist<zl?x=this.landHeight(g,_,u.s,u.d)-.15:x=this.landHeight(g,_,u.s,u.d);const v=this.aqueductCore(u.s);v>0&&u.dist<zl&&(x=Ii(x,this.floorUnder(g,_,u.s,u.d)-.15,v)),this.groundColour(g,_,u.s,u.d,l);const T=(p*i+d)*3;r[T]=g,r[T+1]=x,r[T+2]=_,a[T]=l.r,a[T+1]=l.g,a[T+2]=l.b}const h=cd(r,a,o,i),f=new Y(h,ud());return f.receiveShadow=!0,f.name="far-terrain",f}groundColour(t,e,n,i,o){const r=Math.abs(i),a=Math.floor(t/150+as(t*.01,e*.01,2,1)*.6),l=Math.floor(e/130+as(t*.01,e*.01,2,2)*.6),c=_i(a,l,11);o.copy(Ln.grass).lerp(Ln.field,c*.8),o.offsetHSL(0,0,(_i(Math.floor(t/4),Math.floor(e/4),3)-.5)*.035),this.parkAt(t,e)&&o.lerp(Ln.park,.7);const h=this.urbanAt(t,e)*ke(8,20,r);o.lerp(Ln.paved,h*.85);const f=this.riverDistAt(t,e);f<12&&o.lerp(Ln.bed,ke(12,0,f)*.5);const p=this.cuttingAt(n,i);p.cliff>0&&o.lerp(Ln.wallSandstone,p.cliff).offsetHSL(0,0,(_i(Math.floor(t/2),Math.floor(e/3),8)-.5)*.06)}}function Zx(s,t){const e=s.frame(Math.max(0,t-8)),n=s.frame(Math.min(s.length,t+8)),i=n.tx-e.tx,o=n.tz-e.tz,r=s.frame(t);return(i*r.nx+o*r.nz)/16}function ad(s,t){t=Te(t,0,s.length-1);const e=Math.floor(t);return Ii(s[e],s[Math.min(e+1,s.length-1)],t-e)}function ld(s,t){const e=new Float32Array(s.length);for(let n=0;n<s.length;n++){let i=0,o=0;for(let r=-t;r<=t;r++){const a=n+r;a>=0&&a<s.length&&(i+=s[a],o++)}e[n]=i/o}return e}function Jx(s,t,e,n,i,o){const r=i-e,a=o-n,l=Te(((s-e)*r+(t-n)*a)/(r*r+a*a||1),0,1);return Math.hypot(s-e-r*l,t-n-a*l)}function cd(s,t,e,n,i=!1){const o=new Uint32Array((e-1)*(n-1)*6);let r=0;for(let l=0;l<e-1;l++)for(let c=0;c<n-1;c++){const h=l*n+c,f=h+1,p=h+n,d=p+1;i?(o[r++]=h,o[r++]=f,o[r++]=p,o[r++]=f,o[r++]=d,o[r++]=p):(o[r++]=h,o[r++]=p,o[r++]=f,o[r++]=f,o[r++]=p,o[r++]=d)}const a=new xe;return a.setAttribute("position",new tn(s,3)),a.setAttribute("color",new tn(t,3)),a.setIndex(new tn(o,1)),a.computeVertexNormals(),a}let hd=null;function ud(){return hd??(hd=new Yt({vertexColors:!0,roughness:.95,flatShading:!0})),hd}function Qx(s=256){const t=new Float32Array(s*s),e=8;for(let r=0;r<s;r++)for(let a=0;a<s;a++){const l=a/s*e,c=r/s*e;t[r*s+a]=dd(l,c,e)*.6+dd(l*2,c*2,e*2)*.3}const n=new ImageData(s,s);for(let r=0;r<s;r++)for(let a=0;a<s;a++){const l=t[r*s+(a-1+s)%s],c=t[r*s+(a+1)%s],h=t[(r-1+s)%s*s+a],f=t[(r+1)%s*s+a],p=(l-c)*3,d=(h-f)*3,g=1,_=Math.hypot(p,d,g),m=(r*s+a)*4;n.data[m]=(p/_*.5+.5)*255,n.data[m+1]=(d/_*.5+.5)*255,n.data[m+2]=(g/_*.5+.5)*255,n.data[m+3]=255}const i=document.createElement("canvas");i.width=i.height=s,i.getContext("2d").putImageData(n,0,0);const o=new Mn(i);return o.wrapS=o.wrapT=Eo,o}function dd(s,t,e){const n=s/e,i=t/e,o=as(s,t,3,2),r=as(s-e,t,3,2),a=as(s,t-e,3,2),l=as(s-e,t-e,3,2);return(o*(1-n)+r*n)*(1-i)+(a*(1-n)+l*n)*i}class ty{constructor(t,e){I(this,"group",new St);I(this,"material");I(this,"normalMap");I(this,"chamberMeshes",[]);this.route=t,this.ww=e,this.normalMap=Qx(),this.material=new Yt({color:"#3d5c47",roughness:.12,metalness:0,normalMap:this.normalMap,normalScale:new ct(.28,.28),transparent:!0,opacity:.93,envMapIntensity:.9}),e.bodies.forEach((n,i)=>{const o=this.ribbon(n.s0-.15,n.s1+.15),r=new Y(o,this.material);r.position.y=n.level,r.receiveShadow=!0,this.group.add(r),n.kind==="chamber"&&this.chamberMeshes.push({mesh:r,body:i})})}ribbon(t,e){const{route:n,ww:i}=this;t=Math.max(0,t),e=Math.min(n.length,e);const o=Math.max(2,Math.ceil((e-t)/1.5)+1),r=[],a=[],l=[];for(let h=0;h<o;h++){const f=t+(e-t)*h/(o-1),p=n.frame(f),d=i.halfWidthAt(f)+.12;for(const g of[-1,1]){const _=p.x+p.nx*d*g,m=p.z+p.nz*d*g;r.push(_,0,m),a.push(_/7,m/7)}if(h>0){const g=(h-1)*2;l.push(g,g+1,g+2,g+1,g+3,g+2)}}const c=new xe;return c.setAttribute("position",new ne(r,3)),c.setAttribute("uv",new ne(a,2)),c.setIndex(l),c.computeVertexNormals(),c}addRivers(t,e){for(const n of t){const i=[],o=[],r=[],a=n.p.length/2;for(let h=0;h<a;h++){const f=Math.max(0,h-1),p=Math.min(a-1,h+1);let d=n.p[p*2]-n.p[f*2],g=n.p[p*2+1]-n.p[f*2+1];const _=Math.hypot(d,g)||1;d/=_,g/=_;for(const m of[-1,1]){const u=n.p[h*2]-g*(n.w/2)*m,M=n.p[h*2+1]+d*(n.w/2)*m;i.push(u,e,M),o.push(u/7,M/7)}if(h>0){const m=(h-1)*2;r.push(m,m+2,m+1,m+1,m+2,m+3)}}const l=new xe;l.setAttribute("position",new ne(i,3)),l.setAttribute("uv",new ne(o,2)),l.setIndex(r),l.computeVertexNormals();const c=this.material.clone();c.side=He,c.color.set("#4a6a5c"),this.group.add(new Y(l,c))}}addPond(t,e){const n=new fs;for(let l=0;l<t.length;l+=2)(l?n.lineTo:n.moveTo).call(n,t[l],-t[l+1]);const i=new Mh(n);i.rotateX(-Math.PI/2);const o=i.getAttribute("position"),r=i.getAttribute("uv");for(let l=0;l<o.count;l++)r.setXY(l,o.getX(l)/7,o.getZ(l)/7);const a=new Y(i,this.material);a.position.y=e,this.group.add(a)}update(t){this.normalMap.offset.x+=t*.012,this.normalMap.offset.y+=t*.007;for(const e of this.chamberMeshes)e.mesh.position.y=this.ww.bodies[e.body].level}}const pr=["brick","brickDark","render","whiteRender","tudor","sandstone","warehouse","modern","gothic","tower","shed","white"],Ee={house:0,shop:1,upper:2,plain:3},ri=128,Jc=4,da=3,ey=3.6,ny=3.1;function Bl(s,t,e,n,i,o,r,a=.08){s.fillStyle=o,s.fillRect(t,e,n,i);for(let l=0;l*6<i;l++)for(let c=-1;c*14<n;c++){const h=t+c*14+l%2*7,f=e+l*6,p=1+Math.sin(l*12.9+c*78.2)*.5*a*2;s.fillStyle=mr(o,p),s.fillRect(h+1,f+1,12,4)}s.fillStyle=r,s.globalAlpha=.25;for(let l=e;l<e+i;l+=6)s.fillRect(t,l,n,1);s.globalAlpha=1}function mr(s,t){const e=new Qt(s);return e.multiplyScalar(t),`#${e.getHexString()}`}function Hl(s,t,e,n,i,o="#f4f1e8",r="#d9cfbd"){const a=t-n/2;s.fillStyle=r,s.fillRect(a-4,e-7,n+8,6),s.fillRect(a-3,e+i,n+6,4),s.fillStyle=o,s.fillRect(a,e,n,i);const l=s.createLinearGradient(0,e,0,e+i);l.addColorStop(0,"#5d7486"),l.addColorStop(1,"#22303b"),s.fillStyle=l,s.fillRect(a+4,e+4,n-8,i/2-5),s.fillRect(a+4,e+i/2+1,n-8,i/2-5),s.fillStyle=o,s.fillRect(t-1,e+4,2,i-8)}function iy(s,t,e,n,i,o){s.fillStyle="#e9e2d2",s.fillRect(t-3,e-i-4,n+6,i+4),s.fillStyle=o,s.fillRect(t,e-i,n,i),s.fillStyle="#2a3640",s.beginPath(),s.arc(t+n/2,e-i,n/2,Math.PI,0),s.fill(),s.fillStyle="#c9a24a",s.fillRect(t+n-8,e-i/2,3,3)}function fd(s,t,e,n,i,o){s.fillStyle=o,s.fillRect(t+2,e+18,n-4,16),s.fillStyle="#f2e6c4",s.globalAlpha=.85,s.fillRect(t+14,e+23,n-28,5),s.globalAlpha=1,s.fillStyle=mr(o,.8),s.fillRect(t+4,e+36,n-8,i-38);const r=s.createLinearGradient(0,e+40,0,e+i);r.addColorStop(0,"#6c8596"),r.addColorStop(1,"#2b3943"),s.fillStyle=r,s.fillRect(t+9,e+40,n-18,i-58),s.fillStyle=mr(o,.8),s.fillRect(t+n/2-2,e+40,4,i-58)}function Gl(s,t,e,n,i,o="#2b3943",r="#d9cfbd"){s.fillStyle=r,s.beginPath(),s.moveTo(t-n/2-3,e+i+3),s.lineTo(t-n/2-3,e+n/2),s.arc(t,e+n/2,n/2+3,Math.PI,0),s.lineTo(t+n/2+3,e+i+3),s.fill(),s.fillStyle=o,s.beginPath(),s.moveTo(t-n/2,e+i),s.lineTo(t-n/2,e+n/2),s.arc(t,e+n/2,n/2,Math.PI,0),s.lineTo(t+n/2,e+i),s.fill()}function sy(s,t,e,n,i){s.fillStyle="#d6b49a",s.beginPath(),s.moveTo(t-n/2-4,e+i+4),s.lineTo(t-n/2-4,e+n),s.quadraticCurveTo(t-n/2-4,e-6,t,e-10),s.quadraticCurveTo(t+n/2+4,e-6,t+n/2+4,e+n),s.lineTo(t+n/2+4,e+i+4),s.fill(),s.fillStyle="#2a3440",s.beginPath(),s.moveTo(t-n/2,e+i),s.lineTo(t-n/2,e+n),s.quadraticCurveTo(t-n/2,e,t,e-4),s.quadraticCurveTo(t+n/2,e,t+n/2,e+n),s.lineTo(t+n/2,e+i),s.fill(),s.fillStyle="#8a6a55",s.fillRect(t-1,e,2,i)}function oy(s,t,e,n,i){const o=ri,r=["#1f4d3a","#7a1f2b","#1d3557","#2b2b2b","#5a3d1e"],a=r[pr.indexOf(t)%r.length];switch(t){case"brick":case"brickDark":case"render":case"whiteRender":{const l={brick:"#a2513f",brickDark:"#7d3f31",render:"#e6dcc8",whiteRender:"#f1ede4"}[t];t.startsWith("brick")?Bl(s,n,i,o,o,l,"#d8cdb8"):(s.fillStyle=l,s.fillRect(n,i,o,o)),e===Ee.upper?Hl(s,n+o/2,i+30,46,66):e===Ee.house?(iy(s,n+18,i+o-6,34,78,["#1f4d3a","#7a1f2b","#1d3557","#2b2b2b"][n/o%4|0]),Hl(s,n+92,i+38,40,58)):e===Ee.shop&&fd(s,n,i,o,o,a),s.fillStyle=mr(l,.75),s.fillRect(n,i+o-4,o,4);break}case"tudor":{s.fillStyle="#f4f1ea",s.fillRect(n,i,o,o),s.fillStyle="#1e1b19";for(const l of[0,60,120])s.fillRect(n+l,i,8,o);if(s.fillRect(n,i+4,o,7),s.fillRect(n,i+o-10,o,8),e===Ee.upper){s.lineWidth=6,s.strokeStyle="#1e1b19",s.beginPath(),s.moveTo(n+8,i+o-10),s.lineTo(n+30,i+70),s.moveTo(n+120,i+o-10),s.lineTo(n+98,i+70),s.stroke(),s.fillStyle="#2a3440",s.fillRect(n+30,i+22,68,42),s.strokeStyle="#8a8d8a",s.lineWidth=1;for(let l=0;l<9;l++)s.beginPath(),s.moveTo(n+30+l*9,i+22),s.lineTo(n+30+l*9-20,i+64),s.stroke()}else e!==Ee.plain&&fd(s,n+8,i+10,o-16,o-18,"#1e1b19");break}case"sandstone":case"gothic":case"tower":{const l=t==="tower"?"#7d3f31":"#b5735a";if(t==="tower")Bl(s,n,i,o,o,l,"#c8b8a0");else{s.fillStyle=l,s.fillRect(n,i,o,o),s.strokeStyle=mr(l,.82),s.lineWidth=1;for(let c=0;c*16<o;c++){s.beginPath(),s.moveTo(n,i+c*16),s.lineTo(n+o,i+c*16),s.stroke();for(let h=0;h*32<o;h++){const f=n+h*32+c%2*16;s.beginPath(),s.moveTo(f,i+c*16),s.lineTo(f,i+c*16+16),s.stroke()}}}if(e===Ee.plain)break;t==="gothic"?sy(s,n+o/2,i+24,40,96):t==="tower"?(s.fillStyle="#1f2730",s.fillRect(n+o/2-5,i+40,10,34)):Hl(s,n+o/2,i+34,40,60,"#e9e2d2","#c49a80");break}case"warehouse":{if(Bl(s,n,i,o,o,"#80402f","#c9b8a0"),e===Ee.plain)break;e===Ee.upper?(Gl(s,n+36,i+34,30,52),Gl(s,n+92,i+34,30,52)):Gl(s,n+o/2,i+26,62,o-30,"#2e3b2c");break}case"modern":{s.fillStyle="#b9bcbf",s.fillRect(n,i,o,o),s.fillStyle="#a6a9ad";for(let c=0;c<o;c+=32)s.fillRect(n+c,i,2,o);if(e===Ee.plain)break;const l=s.createLinearGradient(0,i+26,0,i+100);l.addColorStop(0,"#7f97a8"),l.addColorStop(1,"#30404c"),s.fillStyle=l,s.fillRect(n,i+(e===Ee.upper?28:18),o,e===Ee.upper?62:104),s.fillStyle="#d6d8da";for(let c=0;c<o;c+=32)s.fillRect(n+c,i+18,3,110);break}case"shed":{s.fillStyle="#7b7f78",s.fillRect(n,i,o,o),s.fillStyle="#6c706a";for(let l=0;l<o;l+=8)s.fillRect(n+l,i,3,o);break}case"white":s.fillStyle="#ffffff",s.fillRect(n,i,o,o);break}}let Vl=null;function ry(){if(Vl)return Vl.material;const s=document.createElement("canvas");s.width=ri*Jc,s.height=ri*pr.length;const t=s.getContext("2d");pr.forEach((i,o)=>{for(let r=0;r<Jc;r++)oy(t,i,r,r*ri,o*ri)});const e=new Mn(s);e.colorSpace=Ve,e.anisotropy=4;const n=new Yt({map:e,vertexColors:!0,roughness:.88});return n.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 cell;
varying vec4 vCell;
varying vec2 vRep;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vCell = cell;
vRep = uv;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vCell;
varying vec2 vRep;`).replace("#include <map_fragment>",`// repeat this wall's atlas cell; gradients from the unwrapped coords avoid seams
        vec2 cellUv = vCell.xy + fract(vRep) * vCell.zw;
        vec4 sampledDiffuseColor = textureGrad(map, cellUv, dFdx(vRep) * vCell.zw, dFdy(vRep) * vCell.zw);
        diffuseColor *= sampledDiffuseColor;`)},Vl={texture:e,material:n},n}function ro(s,t){const e=pr.indexOf(s),n=ri*Jc,i=ri*pr.length,o=(t*ri+da)/n,r=(ri-2*da)/n,a=1-((e+1)*ri-da)/i,l=(ri-2*da)/i;return[o,a,r,l]}const Wl={slate:["#4d525b","#585d66","#43474f"],tile:["#7d3d30","#8a4a37"],flat:["#6a6a68","#757370"]},Xl=(s,t)=>s[Math.floor(t*s.length)%s.length];class ay{constructor(t){I(this,"cell",3);I(this,"w");I(this,"h");I(this,"data");this.b=t,this.w=Math.ceil((t.x1-t.x0)/this.cell),this.h=Math.ceil((t.z1-t.z0)/this.cell),this.data=new Uint8Array(this.w*this.h)}mark(t,e,n){const i=this.cell;for(let o=Math.floor((e-n-this.b.z0)/i);o<=Math.floor((e+n-this.b.z0)/i);o++)for(let r=Math.floor((t-n-this.b.x0)/i);r<=Math.floor((t+n-this.b.x0)/i);r++)r>=0&&o>=0&&r<this.w&&o<this.h&&(this.data[o*this.w+r]=1)}markPolygon(t){let e=1/0,n=-1/0,i=1/0,o=-1/0;for(let a=0;a<t.length;a+=2)e=Math.min(e,t[a]),n=Math.max(n,t[a]),i=Math.min(i,t[a+1]),o=Math.max(o,t[a+1]);const r=this.cell;for(let a=i-r;a<=o+r;a+=r)for(let l=e-r;l<=n+r;l+=r)wh(l,a,t)&&this.mark(l,a,2)}used(t,e){const n=Math.floor((t-this.b.x0)/this.cell),i=Math.floor((e-this.b.z0)/this.cell);return n<0||i<0||n>=this.w||i>=this.h||this.data[i*this.w+n]===1}}function wh(s,t,e){let n=!1;for(let i=0,o=e.length-2;i<e.length;o=i,i+=2){const r=e[i],a=e[i+1],l=e[o],c=e[o+1];a>t!=c>t&&s<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function ly(s,t){const n=Math.ceil((t.x1-t.x0)/30)+1,i=Math.ceil((t.z1-t.z0)/30)+1,o=new Float32Array(n*i);for(const a of s){let l=0,c=0,h=0;const f=a.p,p=f.length/2;for(let _=0;_<p;_++){const m=(_+1)%p;l+=f[_*2]*f[m*2+1]-f[m*2]*f[_*2+1],c+=f[_*2]/p,h+=f[_*2+1]/p}const d=Math.floor((c-t.x0)/30),g=Math.floor((h-t.z0)/30);d>=0&&g>=0&&d<n&&g<i&&(o[g*n+d]+=Math.abs(l)/2)}const r=new Float32Array(n*i);for(let a=0;a<i;a++)for(let l=0;l<n;l++){let c=0;for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++){const p=Math.min(n-1,Math.max(0,l+f)),d=Math.min(i-1,Math.max(0,a+h));c+=o[d*n+p]}r[a*n+l]=Math.min(1,c/9/(30*30)*3)}return(a,l)=>{const c=Math.floor((a-t.x0)/30),h=Math.floor((l-t.z0)/30);return c<0||h<0||c>=n||h>=i?0:r[h*n+c]}}class jo{constructor(){I(this,"pos",[]);I(this,"col",[]);I(this,"nrm",[]);I(this,"uv",[]);I(this,"cell",[]);I(this,"curCell",[0,0,0,0]);I(this,"a",new U);I(this,"b",new U);I(this,"n",new U)}tri(t,e,n,i,o,r){if(this.a.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),this.b.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),this.n.crossVectors(this.a,this.b).normalize(),o){const a=(t[0]+e[0]+n[0])/3-o[0],l=(t[1]+e[1]+n[1])/3-o[1],c=(t[2]+e[2]+n[2])/3-o[2];this.n.x*a+this.n.y*l+this.n.z*c<0&&([e,n]=[n,e],r&&(r=[r[0],r[2],r[1]]),this.n.negate())}[t,e,n].forEach((a,l)=>{this.pos.push(a[0],a[1],a[2]),this.col.push(i.r,i.g,i.b),this.nrm.push(this.n.x,this.n.y,this.n.z);const c=(r==null?void 0:r[l])??[.5,.5];this.uv.push(c[0],c[1]),this.cell.push(...this.curCell)})}geometry(){const t=new xe;return t.setAttribute("position",new ne(this.pos,3)),t.setAttribute("normal",new ne(this.nrm,3)),t.setAttribute("color",new ne(this.col,3)),t.setAttribute("uv",new ne(this.uv,2)),t.setAttribute("cell",new ne(this.cell,4)),t}}class cy{constructor(t,e,n,i,o){I(this,"group",new St);I(this,"occ");I(this,"roofs");I(this,"carPaths",[]);this.data=t,this.route=e,this.ww=n,this.terrain=i,this.bridges=o,this.occ=new ay(i.bounds),this.roofs=new Float32Array(this.occ.w*this.occ.h).fill(-1/0)}isFree(t,e){return!this.occ.used(t,e)}roofAt(t,e){const{occ:n}=this,i=Math.floor((t-n.b.x0)/n.cell),o=Math.floor((e-n.b.z0)/n.cell);return i<0||o<0||i>=n.w||o>=n.h?-1/0:this.roofs[o*n.w+i]}markRoof(t,e){const{occ:n}=this;let i=1/0,o=-1/0,r=1/0,a=-1/0;for(let l=0;l<t.length;l+=2)i=Math.min(i,t[l]),o=Math.max(o,t[l]),r=Math.min(r,t[l+1]),a=Math.max(a,t[l+1]);for(let l=Math.floor((r-n.b.z0)/n.cell);l<=Math.floor((a-n.b.z0)/n.cell);l++)for(let c=Math.floor((i-n.b.x0)/n.cell);c<=Math.floor((o-n.b.x0)/n.cell);c++)c<0||l<0||c>=n.w||l>=n.h||wh(n.b.x0+(c+.5)*n.cell,n.b.z0+(l+.5)*n.cell,t)&&(this.roofs[l*n.w+c]=Math.max(this.roofs[l*n.w+c],e))}build(t){return(async()=>{await t("Laying out roads…"),this.buildRoads(),await t("Building Chester…"),this.buildBuildings(),await t("Planting trees…"),this.buildTrees()})()}buildBuildings(){const t=new jo,e=new Qt;for(let i=0;i<this.data.buildings.length;i++){const o=this.data.buildings[i];let r=o.p;const a=r.length/2;if(a<3)continue;this.occ.markPolygon(r);let l=0;for(let m=0;m<a;m++){const u=(m+1)%a;l+=r[m*2]*r[u*2+1]-r[u*2]*r[m*2+1]}if(l>0){const m=[];for(let u=a-1;u>=0;u--)m.push(r[u*2],r[u*2+1]);r=m}let c=1/0;for(let m=0;m<a;m++)c=Math.min(c,this.terrain.heightAt(r[m*2],r[m*2+1]));const h=c+o.h;this.markRoof(r,h+1.5);const f=_i(i,7,1),p=_i(i,3,2),d=this.styleFor(o,f,p,r);e.set(d.roof);const g=new Qt(1,1,1).multiplyScalar(.9+p*.1);this.walls(t,r,c,h,d.style,d.ground,g),!d.flat&&a===4&&o.h<=13&&uy(r)&&Math.abs(l)/2<400?this.gableRoof(t,r,h,g,e,d.style):this.flatRoof(t,r,h,e),this.landmarkExtras(t,o,r,h,e)}const n=new Y(t.geometry(),ry());n.castShadow=n.receiveShadow=!0,n.name="buildings",this.group.add(n)}walls(t,e,n,i,o,r,a){const l=e.length/2,c=i-n,h=Math.max(1,Math.round(c/ny)),f=c/h,p=n-1.5;for(let d=0;d<l;d++){const g=(d+1)%l,_=e[d*2],m=e[d*2+1],u=e[g*2],M=e[g*2+1],x=Math.hypot(u-_,M-m),v=x<1.6,T=Math.max(1,Math.round(x/ey)),E=(b,R,S,y,P)=>{t.curCell=ro(o,v?Ee.plain:P),t.tri([_,b,m],[u,b,M],[u,R,M],a,void 0,[[0,S],[T,S],[T,y]]),t.tri([_,b,m],[u,R,M],[_,R,m],a,void 0,[[0,S],[T,y],[0,y]])};E(p,n+f,-(n-p)/f,1,r),h>1&&E(n+f,i,0,h-1,o==="shed"?Ee.plain:Ee.upper)}}flatRoof(t,e,n,i){const o=e.length/2;t.curCell=ro("white",Ee.plain);const r=[];for(let a=0;a<o;a++)r.push(new ct(e[a*2],e[a*2+1]));for(const[a,l,c]of yi.triangulateShape(r,[]))t.tri([e[a*2],n,e[a*2+1]],[e[l*2],n,e[l*2+1]],[e[c*2],n,e[c*2+1]],i,[e[a*2],n-10,e[a*2+1]])}styleFor(t,e,n,i){const o=t.t,r=Xl(Wl.slate,n),a=Xl(Wl.flat,n);if(o==="wall_tower")return{style:"sandstone",ground:Ee.plain,roof:"#c9a58a",flat:!0};if(o==="shot_tower")return{style:"tower",ground:Ee.upper,roof:"#4a3a32",flat:!0};if(o==="town_hall"||o.startsWith("cathedral")||o==="church"||o==="chapel"||/cathedral|church|chapel/i.test(t.n??""))return{style:"gothic",ground:Ee.upper,roof:"#5a6068",flat:!0};if(["garage","garages","shed","roof","hut","carport"].includes(o)||t.h<4)return{style:"shed",ground:Ee.plain,roof:a,flat:!0};if(["industrial","warehouse"].includes(o))return{style:"warehouse",ground:Ee.house,roof:r,flat:!1};const[l,c]=[i[0],i[1]],h=this.terrain.urbanAt(l,c);if(t.h<=13&&h>.45&&e<.09)return{style:"tudor",ground:Ee.shop,roof:r,flat:!1};if(["commercial","retail","office","supermarket","hotel"].includes(o)||t.h>14)return e<.55?{style:"modern",ground:Ee.shop,roof:a,flat:!0}:{style:e<.8?"brick":"warehouse",ground:Ee.shop,roof:a,flat:!0};if(o==="apartments")return{style:e<.5?"modern":"brick",ground:Ee.house,roof:a,flat:e<.5};const f=h>.5&&n<.3?Ee.shop:Ee.house;return{style:e<.55?"brick":e<.7?"brickDark":e<.87?"render":e<.96?"whiteRender":"sandstone",ground:f,roof:n<.8?r:Xl(Wl.tile,e),flat:!1}}landmarkExtras(t,e,n,i,o){const r=n.length/2;let a=0,l=0;for(let _=0;_<r;_++)a+=n[_*2]/r,l+=n[_*2+1]/r;const c=i-e.h,h=new Qt(1,1,1),f=(_,m)=>{const u=[];for(let M=0;M<4;M++){const x=m+M*Math.PI/2+Math.PI/4;u.push(a+Math.cos(x)*_*Math.SQRT2,l+Math.sin(x)*_*Math.SQRT2)}return u.reverse()};let p=0,d=0;for(let _=0;_<r;_++){const m=(_+1)%r,u=Math.hypot(n[m*2]-n[_*2],n[m*2+1]-n[_*2+1]);u>p&&(p=u,d=Math.atan2(n[m*2+1]-n[_*2+1],n[m*2]-n[_*2]))}const g=(_,m,u)=>{t.curCell=ro("white",Ee.plain);for(let M=0;M<4;M++){const x=(M+1)%4;t.tri([_[M*2],m,_[M*2+1]],[_[x*2],m,_[x*2+1]],[a,m+u,l],o,[a,m,l])}};if(e.t==="shot_tower"){const _=[];for(let m=0;m<r;m++)_.push(a+(n[m*2]-a)*1.12,l+(n[m*2+1]-l)*1.12);this.walls(t,_,i-1.6,i+.4,"tower",Ee.plain,h),this.flatRoof(t,_,i+.4,o)}else if(e.t==="town_hall"){const _=f(4.5,d);this.walls(t,_,c,c+40,"gothic",Ee.upper,h),g(_,c+40,10)}else if(e.t==="cathedral_main"){const _=f(7,d);this.walls(t,_,c,c+38,"gothic",Ee.upper,h),this.flatRoof(t,_,c+38,o);for(let m=0;m<4;m++){const u=_[m*2],M=_[m*2+1],x=[u-.8,M-.8,u-.8,M+.8,u+.8,M+.8,u+.8,M-.8];this.walls(t,x,c+38,c+41,"sandstone",Ee.plain,h),t.curCell=ro("white",Ee.plain);for(let v=0;v<4;v++){const T=(v+1)%4;t.tri([x[v*2],c+41,x[v*2+1]],[x[T*2],c+41,x[T*2+1]],[u,c+43.5,M],o,[u,c+41,M])}}}}gableRoof(t,e,n,i,o,r){const a=[0,1,2,3].map(m=>[e[m*2],e[m*2+1]]),l=(m,u)=>Math.hypot(m[0]-u[0],m[1]-u[1]);l(a[0],a[1])<l(a[1],a[2])&&a.push(a.shift());const c=l(a[1],a[2]),h=Math.min(c*.42,4),f=(m,u)=>[(m[0]+u[0])/2,(m[1]+u[1])/2],p=f(a[3],a[0]),d=f(a[1],a[2]),g=(m,u)=>[m[0],u,m[1]],_=[(a[0][0]+a[2][0])/2,n-1,(a[0][1]+a[2][1])/2];t.curCell=ro("white",Ee.plain),t.tri(g(a[0],n),g(a[1],n),g(d,n+h),o,_),t.tri(g(a[0],n),g(d,n+h),g(p,n+h),o,_),t.tri(g(a[2],n),g(a[3],n),g(p,n+h),o,_),t.tri(g(a[2],n),g(p,n+h),g(d,n+h),o,_),t.curCell=ro(r,Ee.plain),t.tri(g(a[1],n),g(a[2],n),g(d,n+h),i,_),t.tri(g(a[3],n),g(a[0],n),g(p,n+h),i,_)}buildRoads(){const t=new jo,e=new jo,n=new jo,i=new jo,o=new Qt(1,1,1),r=new Qt("#6d635a"),a={footway:0,path:0,cycleway:0,steps:0,track:0,service:1,residential:2,living_street:2,unclassified:2,tertiary:3,secondary:4,primary:5,trunk:6,motorway:6,pedestrian:1},l=new Set(["footway","path","cycleway","steps","track","pedestrian"]),c=new Set(["residential","unclassified","tertiary","secondary","primary","trunk","motorway"]),h=new Set([...c,"service","living_street"]),f=new Set(["tertiary","secondary","primary","trunk"]),p=new Map;for(const u of this.data.roads){if(l.has(u.k))continue;const M=new Set;for(let x=0;x<u.p.length;x+=2)M.add(`${u.p[x]},${u.p[x+1]}`);for(const x of M)p.set(x,(p.get(x)??0)+1)}const d=20,g=new Map;for(const[u,M]of p){if(M<2)continue;const[x,v]=u.split(",").map(Number),T=`${Math.floor(x/d)},${Math.floor(v/d)}`;g.has(T)||g.set(T,[]),g.get(T).push([x,v])}const _=(u,M)=>{let x=1/0;const v=Math.floor(u/d),T=Math.floor(M/d);for(let E=-1;E<=1;E++)for(let b=-1;b<=1;b++)for(const[R,S]of g.get(`${v+E},${T+b}`)??[])x=Math.min(x,Math.hypot(u-R,M-S));return x};for(const u of this.data.roads){const M=l.has(u.k)?n:c.has(u.k)&&u.w>=6?t:e,x=M===t?{plain:e,dist:_,clear:u.w/2+6}:void 0,v=this.ribbon(M,u.p,u.w,o,.05+(a[u.k]??1)*.012,!0,l.has(u.k)?2:6,x,l.has(u.k));v&&h.has(u.k)&&(v.crosses||f.has(u.k))&&this.carPaths.push({pts:v.pts,w:u.w,bridge:v.crosses})}for(const u of this.data.rails)u.skip?this.markLine(u.p,3.5):this.ribbon(i,u.p,4.2,r,.1,!0,4);const m=(u,M,x)=>{const v=new Y(u.geometry(),new Yt({map:M,vertexColors:!0,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));v.receiveShadow=!0,v.name=x,this.group.add(v)};for(const u of this.data.junctions??[]){const M=this.route.project(u.x,u.z),x=this.ww.halfWidthAt(M.s);if(M.dist<x+2)continue;const v=(M.dist<x+3.5?this.terrain.bankTop(M.s):this.terrain.landHeight(u.x,u.z,M.s,M.d))+.14;e.curCell=[0,0,0,0];const T=16;for(let E=0;E<T;E++){const b=E/T*Math.PI*2,R=(E+1)/T*Math.PI*2,S=[u.x+Math.cos(b)*u.r,v,u.z+Math.sin(b)*u.r],y=[u.x+Math.cos(R)*u.r,v,u.z+Math.sin(R)*u.r];e.tri([u.x,v,u.z],S,y,o,[u.x,v-5,u.z],[[.5,.5],[.5+Math.cos(b)*.4,.5],[.5+Math.cos(R)*.4,.6]])}}m(t,Pa("major"),"roads"),m(e,Pa("lane"),"lanes"),m(n,Pa("foot"),"footways"),m(i,null,"ballast")}markLine(t,e){for(let n=0;n+3<t.length;n+=2){const i=t[n],o=t[n+1],r=t[n+2],a=t[n+3],l=Math.max(1,Math.ceil(Math.hypot(r-i,a-o)/2));for(let c=0;c<=l;c++)this.occ.mark(i+(r-i)*c/l,o+(a-o)*c/l,e)}}ribbon(t,e,n,i,o,r,a,l,c=!1){const h=[];for(let v=0;v+3<e.length;v+=2){const T=e[v],E=e[v+1],b=e[v+2],R=e[v+3],S=Math.max(1,Math.ceil(Math.hypot(b-T,R-E)/4));for(let y=0;y<S;y++)h.push([T+(b-T)*y/S,E+(R-E)*y/S])}if(h.push([e[e.length-2],e[e.length-1]]),h.length<2)return null;const f=h.map(([v,T])=>this.route.project(v,T));if(c&&f.filter(T=>T.dist<this.ww.halfWidthAt(T.s)+7).length/f.length>.4)return null;const p=f,d=p.map(v=>this.bridges.rampAt(v.s,v.d));let g=!1;for(let v=1;v<p.length;v++)Math.sign(p[v].d)!==Math.sign(p[v-1].d)&&Math.min(p[v].dist,p[v-1].dist)<20&&(d[v].onDeck||d[v-1].onDeck)&&(g=!0);const _=h.map(([v,T],E)=>{const b=p[E],R=this.ww.halfWidthAt(b.s),S=b.dist<R+3.5?this.terrain.bankTop(b.s):this.terrain.landHeight(v,T,b.s,b.d);return(g?Math.max(S,d[E].y):S)+o}),m=n/2,u=h.map((v,T)=>{const E=(N,z)=>{const q=h[z][0]-h[N][0],V=h[z][1]-h[N][1],$=Math.hypot(q,V)||1;return[-V/$,q/$]},b=T>0?E(T-1,T):E(T,T+1),R=T<h.length-1?E(T,T+1):b;let S=b[0]+R[0],y=b[1]+R[1];const P=Math.hypot(S,y)||1;S/=P,y/=P;const w=Math.min(2,1/Math.max(.5,S*R[0]+y*R[1]));return[S*w,y*w]});let M=0,x=!1;for(let v=0;v<h.length-1;v++){const T=p[v],E=p[v+1],b=Math.hypot(h[v+1][0]-h[v][0],h[v+1][1]-h[v][1]),R=M/a,S=(M+b)/a;if(M+=b,g&&Math.sign(T.d)!==Math.sign(E.d)&&d[v].onDeck&&(x=!0),(Math.min(T.dist,E.dist)<this.ww.halfWidthAt(T.s)+4||Math.sign(T.d)!==Math.sign(E.d))&&!(d[v].onDeck&&d[v+1].onDeck)||g&&d[v].onDeck&&d[v+1].onDeck)continue;const[P,w]=h[v],[N,z]=h[v+1],[q,V]=u[v],[$,G]=u[v+1],dt=[P-q*m,_[v],w-V*m],pt=[P+q*m,_[v],w+V*m],ot=[N-$*m,_[v+1],z-G*m],Nt=[N+$*m,_[v+1],z+G*m],ie=l&&Math.min(l.dist(P,w),l.dist(N,z))<l.clear?l.plain:t;ie.tri(dt,pt,Nt,i,[P,_[v]-5,w],[[0,R],[1,R],[1,S]]),ie.tri(dt,Nt,ot,i,[P,_[v]-5,w],[[0,R],[1,S],[0,S]]),r&&this.occ.mark(P,w,m+1.5)}return{pts:h.map(([v,T],E)=>[v,_[E],T]),crosses:x}}buildTrees(){const t=Gi(1234),e=[],{route:n,ww:i,terrain:o,occ:r}=this,a=(x,v)=>{if(r.used(x,v))return!1;const T=n.project(x,v);return o.nearAqueduct(T.s,25)&&T.dist<14?!1:T.dist>i.halfWidthAt(T.s)+4.2};for(let x=0;x<n.length;x+=5)for(const v of[-1,1]){if(t()>.6)continue;const T=i.halfWidthAt(x)+4.5+t()*t()*30,[E,b]=n.point(x,T*v);t()<o.urbanAt(E,b)*.85||a(E,b)&&e.push({x:E,z:b,s:.8+t()*.7,kind:t()<.15?1:0})}const l=o.bounds,c=(l.x1-l.x0)*(l.z1-l.z0);for(let x=0;x<c*(o.hasAqueduct?.0016:9e-4);x++){const v=l.x0+t()*(l.x1-l.x0),T=l.z0+t()*(l.z1-l.z0),E=o.parkAt(v,T),b=o.nearAqueduct(n.project(v,T).s,250)?.85:0,R=E?.7:Math.max(b,(1-o.urbanAt(v,T))*.35*ke(.75,.2,Math.abs(hy(v,T))));t()>R||a(v,T)&&e.push({x:v,z:T,s:.8+t()*.9,kind:t()<.1?1:0})}for(let x=0;x<this.data.trees.length;x+=2)e.push({x:this.data.trees[x],z:this.data.trees[x+1],s:1.1,kind:0});const h=new En(1,0),f=new qt(.18,.25,1,5);f.translate(0,.5,0);const p=new Fn(h,new Yt({roughness:.9,flatShading:!0}),e.length),d=new Fn(f,new Yt({color:"#5a4636",roughness:1}),e.length),g=new Me,_=new Kn,m=new U,u=new U,M=["#4f7a3a","#5d8a40","#3f6b35","#6b9446","#557d3c"].map(x=>new Qt(x));e.forEach((x,v)=>{const T=o.heightAt(x.x,x.z),E=(x.kind===1?9:4.5)*x.s;_.setFromAxisAngle(new U(0,1,0),t()*Math.PI*2),u.set(x.x,T-.2,x.z),m.set(x.s,E*.45,x.s),d.setMatrixAt(v,g.compose(u,_,m)),u.set(x.x,T+E*.45+(x.kind===1?E*.35:E*.3),x.z),x.kind===1?m.set(1.3*x.s,E*.5,1.3*x.s):m.set(2.6*x.s,2.3*x.s,2.6*x.s),p.setMatrixAt(v,g.compose(u,_,m)),p.setColorAt(v,M[Math.floor(t()*M.length)].clone().offsetHSL(0,0,(t()-.5)*.06))}),p.castShadow=d.castShadow=!0,p.receiveShadow=!0,p.name="trees",this.group.add(p,d)}}function hy(s,t){return Math.sin(s*.011+Math.sin(t*.007)*2)*Math.cos(t*.013+Math.sin(s*.005)*2)}function uy(s){for(let t=0;t<4;t++){const e=t,n=(t+1)%4,i=(t+2)%4,o=s[n*2]-s[e*2],r=s[n*2+1]-s[e*2+1],a=s[i*2]-s[n*2],l=s[i*2+1]-s[n*2+1],c=(o*a+r*l)/(Math.hypot(o,r)*Math.hypot(a,l)||1);if(Math.abs(c)>.2)return!1}return!0}function Pa(s){const n=document.createElement("canvas");n.width=128,n.height=256;const i=n.getContext("2d"),o=Gi(s.length*7);if(s==="foot"){i.fillStyle="#b3ad9f",i.fillRect(0,0,128,256);for(let a=0;a<256;a+=64)for(let l=0;l<128;l+=64)i.fillStyle=`hsl(40, 8%, ${62+o()*8}%)`,i.fillRect(l+2,a+2,60,60)}else{i.fillStyle="#4f5256",i.fillRect(0,0,128,256);for(let a=0;a<2500;a++)i.fillStyle=o()<.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.08)",i.fillRect(o()*128,o()*256,2,2);s==="major"&&(i.fillStyle="#e9e7df",i.fillRect(6,0,3,256),i.fillRect(119,0,3,256),i.fillRect(128/2-2,0,4,256*.5))}const r=new Mn(n);return r.colorSpace=Ve,r.wrapS=Ui,r.wrapT=Eo,r.anisotropy=4,r}const ao={brick:new Yt({color:"#8b4a3b",roughness:.9,flatShading:!0}),sandstone:new Yt({color:"#a8654f",roughness:.9,flatShading:!0}),concrete:new Yt({color:"#a39f97",roughness:.85,flatShading:!0}),iron:new Yt({color:"#3d434b",roughness:.6,metalness:.3,flatShading:!0}),coping:new Yt({color:"#c4bba9",roughness:.9,flatShading:!0})},dy=Zc+.55+2.4,pd=oi+.55+2.6,md=Math.tan(55*Math.PI/180);class fy{constructor(t,e,n,i){I(this,"group",new St);I(this,"placed",[]);I(this,"ray",new jf);I(this,"faded",new Map);const o=[];for(const r of n){const a=o.at(-1);if(a&&a.kind==="rail"&&r.kind==="rail"&&r.s-r.w/2<a.s+a.w/2+6){const l=Math.min(a.s-a.w/2,r.s-r.w/2),c=Math.max(a.s+a.w/2,r.s+r.w/2);o[o.length-1]={...a,s:(l+c)/2,w:c-l}}else o.push(r)}for(const r of o){const a=t.frame(r.s),l=e.levelAt(r.s),c=r.kind==="road"&&r.w<12,h=Math.sin(r.dir),f=Math.cos(r.dir),p=h*a.nx+f*a.nz,d=h*a.tx+f*a.tz,g=Rs.clamp(d/(Math.abs(p)<.001?.001:p),-md,md),_=oi+8,m=oi+8,u=Math.max(...[-1,1].map(z=>{const[q,V]=t.point(r.s,m*z);return i.landHeight(q,V,r.s,m*z)})),M=Math.max(l+(c?4.1:4.6),u+.2),x=new St;x.position.set(a.x,0,a.z),x.rotation.y=Math.atan2(-a.nz,a.nx);const v=Math.max(r.w+.8,3.2)*Math.sqrt(1+g*g);let T=a.nx+a.tx*g,E=a.nz+a.tz*g;const b=Math.hypot(T,E);T/=b,E/=b;const R=Math.max(1.2,Math.max(r.w+.8,3.2)/2-.4);this.placed.push({data:r,x:a.x,z:a.z,deck:M,halfSpan:_,arch:c,depth:v,tanSkew:g,ax:T,az:E,roadHalf:R});const S=c?py(_,dy,l,M):my(_,pd,l,M),y=new Ds(S,{depth:v,bevelEnabled:!1,curveSegments:10});y.translate(0,0,-v/2);const P=c?r.w<=3.5?ao.sandstone:ao.brick:r.kind==="rail"?ao.iron:ao.concrete,w=new Y(y,P);w.castShadow=w.receiveShadow=!0,x.add(w);for(const z of[-1,1]){const q=new Y(new gt(_*2*.92,1,.35),c?ao.coping:P);q.position.set(0,M+.5,z*(v/2-.12)),q.castShadow=!0,x.add(q)}if(!c)for(const z of[-1,1]){const q=new Y(new gt(1.2,M-l+1.15,v+.3),ao.concrete);q.position.set(z*(pd+.6-.08),(M-1.15+l-2.3)/2,0),x.add(q)}if(r.kind==="road"){const z=v/2-.3,q=M+.03,V=new xe;V.setAttribute("position",new ne([-_,q,-z,_,q,-z,_,q,z,-_,q,z],3));const $=r.w<=3.5?2:6;V.setAttribute("uv",new ne([0,0,0,2*_/$,1,2*_/$,1,0],2)),V.setIndex([0,2,1,0,3,2]),V.computeVertexNormals();const G=new Y(V,new Yt({map:Pa(r.w<=3.5?"foot":"major"),roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,side:He}));G.receiveShadow=!0,x.add(G)}const N=new Me().makeShear(0,-g,0,0,0,0);for(const z of x.children){const q=z;q.updateMatrix(),q.geometry=q.geometry.applyMatrix4(q.matrix).applyMatrix4(N),q.position.set(0,0,0),q.rotation.set(0,0,0)}x.traverse(z=>{const q=z;q.isMesh&&(q.material=q.material.clone())}),x.name=`bridge:${r.name??r.s}`,this.group.add(x)}}rampAt(t,e){let n=-1/0,i=!1;for(const o of this.placed){if(Math.abs(t-(o.data.s+o.tanSkew*e))>o.depth/2+1)continue;const a=Math.abs(e);a<=o.halfSpan&&(i=!0),!(a>o.halfSpan+30)&&(n=Math.max(n,o.deck-Math.max(0,a-o.halfSpan*.85)/9))}return{y:n,onDeck:i}}updateOcclusion(t,e,n){const i=e.clone().sub(t),o=i.length();this.ray.set(t,i.normalize()),this.ray.far=o;const r=new Set(this.ray.intersectObjects(this.group.children,!0).map(a=>a.object.parent));for(const a of this.group.children){const l=this.faded.get(a)??1,c=r.has(a)?.18:1;if(l===c)continue;const h=l+Math.sign(c-l)*Math.min(Math.abs(c-l),n*4);this.faded.set(a,h),a.traverse(f=>{const p=f.material;p&&(p.transparent=h<1,p.opacity=h,p.depthWrite=h>=1)})}}at(t){return this.placed.find(e=>Math.abs(e.data.s-t)<e.data.w/2+1)}}function py(s,t,e,n){const i=n-e,o=e-2.2,r=e+Math.max(1.8,i*.4),a=e+Math.max(3.4,i*.8),l=new fs;l.moveTo(-s,o),l.lineTo(-t,o),l.lineTo(-t,r);const c=14;for(let h=1;h<c;h++){const f=Math.PI-Math.PI*h/c;l.lineTo(Math.cos(f)*t,r+Math.sin(f)*(a-r))}return l.lineTo(t,r),l.lineTo(t,o),l.lineTo(s,o),l.lineTo(s,n),l.lineTo(-s,n),l.closePath(),l}function my(s,t,e,n){const i=e-2.2,o=n-1.1,r=new fs;return r.moveTo(-s,i),r.lineTo(-t,i),r.lineTo(-t,o),r.lineTo(t,o),r.lineTo(t,i),r.lineTo(s,i),r.lineTo(s,n),r.lineTo(-s,n),r.closePath(),r}const gd=18*Math.PI/180,gy=pi+.15,si={gate:new Yt({color:"#1d1c1a",roughness:.8,flatShading:!0}),white:new Yt({color:"#f1efe8",roughness:.7}),gear:new Yt({color:"#2b2f33",roughness:.5,metalness:.5}),rack:new Yt({color:"#c9c3b5",roughness:.4,metalness:.6}),foam:new Dn({color:"#f4f7f2",transparent:!0,opacity:0,depthWrite:!1}),highlight:new Dn({color:"#ffd76a",transparent:!0,opacity:.55,depthWrite:!1})},lr=220,vd=9.81;let $l=null;function vy(){if($l)return $l;const s=document.createElement("canvas");s.width=s.height=32;const t=s.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(235,245,250,0.6)"),e.addColorStop(1,"rgba(235,245,250,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),$l=new Mn(s)}function _y(){const s=new Float32Array(lr*3).fill(-1e4),t=new xe;t.setAttribute("position",new tn(s,3));const e=new OM(t,new zf({map:vy(),size:.35,transparent:!0,opacity:.85,depthWrite:!1,color:"#eef6f8"}));return e.frustumCulled=!1,{points:e,pos:s,vel:new Float32Array(lr*3),life:new Float32Array(lr),carry:0}}class My{constructor(t,e,n){I(this,"group",new St);I(this,"visuals",[]);I(this,"time",0);this.ww=e;for(const o of e.gates){const r=t.frame(o.s),a=new St;a.position.set(r.x,0,r.z),a.rotation.y=Math.atan2(r.tx,r.tz);const l=e.bodies[o.above].hi,c=e.bodies[o.below].lo-1.6,h=n.bankTop(o.s),f=l+.4,p=pi/Math.cos(gd)+.15,d=[],g=[];for(const x of[-1,1]){const v=new St;v.position.set(x*gy,0,0);const T=f-c,E=new Y(new gt(p,T,.32),si.gate);E.position.set(p/2,c+T/2,0),E.castShadow=!0,v.add(E);const b=Math.max(h,f)+.75,R=new Y(new gt(4.6,.32,.32),si.gate);R.position.set(-2.1,b,0),R.castShadow=!0,v.add(R);const S=new Y(new gt(.7,.34,.34),si.white);S.position.set(-4.1,b,0),v.add(S);const y=new Y(new gt(.3,b-f+.2,.3),si.gate);y.position.set(.1,(b+f)/2,0),v.add(y);const P=new Y(new gt(.3,.45,.3),si.gear);P.position.set(p*.55,f+.22,-.2),v.add(P);const w=new Y(new gt(.08,.9,.08),si.rack);w.position.set(p*.55,f+.45,-.2),w.userData.y0=w.position.y,v.add(w),g.push(w);const N=new Y(new gt(p,.06,.06),si.white);N.position.set(p/2,f+.95,-.35),v.add(N),v.scale.x=x<0?1:-1,a.add(v),d.push({pivot:v,sign:x})}const _=new Y(new wi(pi*2,5),si.foam.clone());_.rotation.x=-Math.PI/2,_.position.set(0,0,-2.8),a.add(_);const m=e.bodies[o.below];if(m.kind==="chamber"){const x=Math.sign((m.s0+m.s1)/2-o.s)||-1;for(const v of[-1,1]){const T=new Y(new gt(.7,.03,.14),si.white);T.position.set(v*(pi+.3),h+.02,x*1.6),a.add(T)}}const u=new Y(new br(pi+.6,pi+1,32),si.highlight);u.rotation.x=-Math.PI/2,u.position.y=h+.08,u.visible=!1,a.add(u);const M=_y();a.add(M.points),this.group.add(a),this.visuals.push({gate:o,leaves:d,racks:g,foam:_,ring:u,root:a,jet:M})}const i=new Map;for(const o of e.gates)o.label==="top gates"&&i.set(o.lockName,o);for(const[o,r]of i){const a=t.frame(r.s+3),l=xy(o),c=(pi+3.2)*Xt;l.position.set(a.x+a.nx*c,n.bankTop(r.s+3),a.z+a.nz*c),l.rotation.y=Math.atan2(Xt*a.tz,-Xt*a.tx),this.group.add(l)}}setSelected(t){for(const e of this.visuals)e.ring.visible=e.gate===t}update(t){this.time+=t;for(const e of this.visuals){const n=e.gate,i=n.open*n.open*(3-2*n.open);for(const{pivot:a,sign:l}of e.leaves){const c=gd,h=Math.PI/2;a.rotation.y=(c+(h-c)*i)*l}for(const a of e.racks)a.position.y=a.userData.y0+n.paddle*.55;const o=this.ww.bodies[n.below].level,r=Math.min(1,Math.abs(n.flow)/3);e.foam.position.y=o+.03,e.foam.material.opacity=r*(.55+.15*Math.sin(this.time*9)),e.foam.scale.y=.7+r*.5+.08*Math.sin(this.time*5.3),e.ring.visible&&(e.ring.material.opacity=.4+.25*Math.sin(this.time*4)),this.updateJet(e,r,t)}}updateJet(t,e,n){const i=t.jet,o=t.gate,r=this.ww.bodies[o.above].level,a=this.ww.bodies[o.below].level,l=Math.max(0,r-a),c=e>.02&&l>.05&&o.open<.05;if(!(!c&&i.carry===0&&!i.life.some(h=>h>0))){if(c){const h=Math.min(6,Math.sqrt(2*vd*l))*(.5+.5*Math.min(1,e)),f=Math.min(r-.35,a+.25+l*.35);i.carry+=n*260*Math.min(1,e+.2);for(let p=0;p<lr&&i.carry>=1;p++){if(i.life[p]>0)continue;i.carry-=1;const d=Math.random()<.5?-1:1;i.pos[p*3]=d*pi*.42+(Math.random()-.5)*.25,i.pos[p*3+1]=f+(Math.random()-.5)*.15,i.pos[p*3+2]=-.25,i.vel[p*3]=(Math.random()-.5)*.6,i.vel[p*3+1]=.3+Math.random()*.5,i.vel[p*3+2]=-h*(.85+Math.random()*.3),i.life[p]=3}i.carry=Math.min(i.carry,4)}else i.carry=0;for(let h=0;h<lr;h++)i.life[h]<=0||(i.life[h]-=n,i.vel[h*3+1]-=vd*n,i.pos[h*3]+=i.vel[h*3]*n,i.pos[h*3+1]+=i.vel[h*3+1]*n,i.pos[h*3+2]+=i.vel[h*3+2]*n,(i.pos[h*3+1]<a||i.life[h]<=0)&&(i.life[h]=0,i.pos[h*3+1]=-1e4));i.points.geometry.getAttribute("position").needsUpdate=!0}}}function xy(s){const t=document.createElement("canvas");t.width=512,t.height=128;const e=t.getContext("2d");e.fillStyle="#1e3d2f",e.fillRect(0,0,512,128),e.strokeStyle="#e8d9a8",e.lineWidth=6,e.strokeRect(8,8,496,112),e.fillStyle="#f3ead0",e.font="600 44px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText(s,256,66,470);const n=new Mn(t);n.colorSpace=Ve;const i=new St,o=new Y(new wi(2.4,.6),new Yt({map:n,side:He}));o.position.y=1.9,i.add(o);for(const r of[-1,1]){const a=new Y(new gt(.1,2.2,.1),si.white);a.position.set(r,1.1,0),i.add(a)}return i}class gr extends Y{constructor(){const t=gr.SkyShader,e=new Hi({name:t.name,uniforms:Tf.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Tn,depthWrite:!1});super(new gt(1,1,1),e),this.isSky=!0}}gr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},up:{value:new U(0,1,0)}},vertexShader:`
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

		}`};const _d=new URLSearchParams(location.search).get("fog"),yy=_d===null?null:Te(Number(_d)||0,0,1);class by{constructor(t,e){I(this,"sky",new gr);I(this,"sun",new xx("#fff4e0",3));I(this,"hemi",new vx("#cfe3ff","#5d6b45",.9));I(this,"envScene",new Nf);I(this,"envSky",new gr);I(this,"pmrem");I(this,"envTarget",null);I(this,"lastEnvHour",-99);I(this,"sunDir",new U);I(this,"hour",Number(new URLSearchParams(location.search).get("hour"))||10.5);I(this,"day",1);I(this,"fog",0);I(this,"elapsed",0);this.scene=t,this.sky.scale.setScalar(2e4),this.envSky.scale.setScalar(2e4);for(const o of[this.sky,this.envSky]){const r=o.material.uniforms;r.turbidity.value=5,r.rayleigh.value=1.4,r.mieCoefficient.value=.004,r.mieDirectionalG.value=.82}this.envScene.add(this.envSky),t.add(this.sky,this.sun,this.sun.target,this.hemi),this.pmrem=new Vc(e);const n=this.sun.shadow;this.sun.castShadow=!0,n.mapSize.set(2048,2048);const i=n.camera;i.left=i.bottom=-90,i.right=i.top=90,i.near=1,i.far=600,n.bias=-4e-4,n.normalBias=.03,t.fog=new dh("#c9d6dc",300,2400)}get sunElevation(){const t=(this.hour-7)/11.5;return Math.sin(Te(t,-.15,1.15)*Math.PI)*32-(t<0||t>1?6:0)}get clock(){return(this.day-1)*24+this.hour}skipTo(t){t<=this.hour&&this.day++,this.hour=t}get isNight(){return this.sunElevation<-2}update(t,e){var h;this.hour+=t,this.hour>=24&&(this.hour-=24,this.day++),this.elapsed+=t;const n=Math.max(0,1-Math.abs(this.hour-6.5)/3.5)*.8,i=Math.sin(this.elapsed*.21)*.6+Math.sin(this.elapsed*.53+1.7)*.4;this.fog=yy??Te(Math.max(n,ke(.55,.95,i)),0,1);const o=this.scene.fog;o.far=2400*Math.pow(70/2400,this.fog),o.near=o.far*Rs.lerp(.125,0,this.fog);const r=Rs.degToRad(this.sunElevation),a=Rs.degToRad(100+(this.hour-6)/13*160);this.sunDir.setFromSphericalCoords(1,Math.PI/2-r,a);for(const f of[this.sky,this.envSky])f.material.uniforms.sunPosition.value.copy(this.sunDir);const l=ke(-4,8,this.sunElevation),c=1-ke(4,20,this.sunElevation);this.sun.intensity=3.2*ke(-2,6,this.sunElevation),this.sun.color.setHSL(.09,.5+c*.4,.92-c*.18),this.hemi.intensity=.2+l*.7,this.scene.fog.color.setHSL(.56,.18,.12+l*.68),this.sun.position.copy(e).addScaledVector(this.sunDir,300),this.sun.target.position.copy(e),Math.abs(this.hour-this.lastEnvHour)>.25&&(this.lastEnvHour=this.hour,(h=this.envTarget)==null||h.dispose(),this.envTarget=this.pmrem.fromScene(this.envScene,0,1,25e3),this.scene.environment=this.envTarget.texture)}}function wy(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,l=new xe;let c=0;for(let h=0;h<s.length;++h){const f=s[h];let p=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const f=[];for(let p=0;p<s.length;++p){const d=s[p].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=s[p].attributes.position.count}l.setIndex(f)}for(const h in o){const f=Md(o[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<f;++p){const d=[];for(let _=0;_<r[h].length;++_)d.push(r[h][_][p]);const g=Md(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Md(s){let t,e,n,i=-1,o=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new tn(r,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let p=0,d=h.count;p<d;p++)for(let g=0;g<e;g++){const _=h.getComponent(p,g);a.setComponent(p+f,g,_)}}else r.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Vi(s,t,e){s.updateMatrixWorld(!0);const n=s.matrixWorld.clone().invert(),i=[],o=new Me;return s.traverse(r=>{const a=r;if(!a.isMesh||e&&!e(a))return;const l=Array.isArray(a.material)?a.material:[a.material];if(l.some(g=>g.map)){t==null||t(a);return}const c=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();c.applyMatrix4(o.multiplyMatrices(n,a.matrixWorld));const h=c.getAttribute("position").count,f=new Float32Array(h*3),p=c.groups.length?c.groups:[{start:0,count:h,materialIndex:0}];for(const g of p){const _=(l[g.materialIndex??0]??l[0]).color;for(let m=g.start;m<Math.min(h,g.start+g.count);m++)f.set([_.r,_.g,_.b],m*3)}const d=new xe;d.setAttribute("position",c.getAttribute("position")),d.setAttribute("normal",c.getAttribute("normal")),d.setAttribute("color",new tn(f,3)),i.push(d)}),wy(i)}const Oi=()=>new Yt({vertexColors:!0,roughness:.75,flatShading:!0}),Sy=["#f1c6a5","#e3b08f","#c98d68","#9a6542","#6b4229"],Ey=["#2b1d14","#5a3a22","#a0703c","#d9b36c","#8f8f8f","#161616"],Ty=["#2d3a55","#1f2328","#6b5a3f","#3d4a3a","#4a4a55"],ir=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400","#34495e","#16a085","#7f8c8d","#e84393","#6d4c41","#1f4d3a"],Ay=["short","short","long","bun","beanie","cap","bald"];function Wi(s,t={}){const e=n=>n[Math.floor(s()*n.length)];return{coat:e(ir),trousers:e(Ty),skin:e(Sy),hair:e(Ey),hairStyle:e(Ay),hat:e(["#b03a2e","#2e4a7a","#3d5a3d","#5a4a3a","#d4a017"]),longCoat:s()<.3,...t}}const Li=(s,t=.8)=>new Yt({color:s,roughness:t}),xd=s=>(s.userData.part="coat",s);function qn(s={}){const t={...Wi(Math.random),...s},e=new St,n=Li(t.coat,.7),i=Li(t.skin,.6),o=Li(t.trousers,.85),r=Li(t.hair,.9),a=t.longCoat?.62:.86,l=[[.001,a],[t.longCoat?.2:.155,a],[.16,.98],[.165,1.15],[.2,1.36],[.17,1.45],[.075,1.5],[.001,1.5]].map(([E,b])=>new ct(E,b)),c=xd(new Y(new Ha(l,12),n));c.scale.z=.72,e.add(c);const h=new Y(new qt(.045,.05,.1,8),i);h.position.y=1.54,e.add(h);const f=new Y(new Qe(.1,14,10),i);f.scale.set(.92,1.1,1),f.position.y=1.67,e.add(f);const p=new Y(new xi(.018,.045,5),i);p.rotation.x=Math.PI/2,p.position.set(0,1.66,.1),e.add(p);const d=(E,b,R=Math.PI*.55)=>{const S=new Y(new Qe(E,14,8,0,Math.PI*2,0,R),b);return S.scale.set(.95,1.12,1.03),S.position.y=1.68,S};if(t.hairStyle!=="bald"&&e.add(d(.106,t.hairStyle==="beanie"?Li(t.hat):r,t.hairStyle==="beanie"?Math.PI*.5:Math.PI*.55)),t.hairStyle==="long"){const E=new Y(new qt(.1,.11,.26,10,1,!0,Math.PI*.6,Math.PI*.8),r);E.position.y=1.56,E.rotation.y=Math.PI,e.add(E)}else if(t.hairStyle==="bun"){const E=new Y(new Qe(.05,8,6),r);E.position.set(0,1.74,-.09),e.add(E)}else if(t.hairStyle==="beanie"){const E=new Y(new dn(.1,.022,6,14),Li(t.hat));E.rotation.x=Math.PI/2,E.position.y=1.7,e.add(E)}else if(t.hairStyle==="cap"){const E=new Y(new qt(.115,.118,.05,12),Li(t.hat));E.position.set(0,1.77,.01),E.rotation.x=-.12;const b=new Y(new gt(.16,.015,.08),Li(t.hat));b.position.set(0,1.76,.12),e.add(E,b)}const g=E=>{const b=new St;b.position.set(E*.085,.92,0);const R=new Y(new qt(.075,.062,.44,8),o);R.position.y=-.22;const S=new St;S.position.y=-.44;const y=new Y(new qt(.062,.05,.42,8),o);y.position.y=-.21;const P=new Y(new gt(.1,.07,.23),Li("#2a2420"));return P.position.set(0,-.44,.04),S.add(y,P),b.add(R,S),e.add(b),{hip:b,knee:S}},{hip:_,knee:m}=g(1),{hip:u,knee:M}=g(-1),x=E=>{const b=new St;b.position.set(E*.215,1.4,0);const R=xd(new Y(new qt(.052,.042,.58,8),n));R.position.y=-.29;const S=new Y(new Qe(.042,8,6),i);return S.position.y=-.61,b.add(R,S),b.rotation.z=E*.07,e.add(b),b},v=x(1),T=x(-1);return e.traverse(E=>E.castShadow=!0),{group:e,armL:v,armR:T,legL:_,legR:u,kneeL:m,kneeR:M}}function Fi(s,t,e){t==="wind"?(s.armL.rotation.set(-1.3+Math.sin(e*7)*.45,0,.15),s.armR.rotation.set(-1.3+Math.sin(e*7+Math.PI)*.45,0,-.15)):t==="push"?(s.armL.rotation.set(-1.25,0,.1),s.armR.rotation.set(-1.25,0,-.1)):t==="rest"?(s.armL.rotation.set(0,0,.07),s.armR.rotation.set(0,0,-.07)):t==="wave"?(s.armL.rotation.set(0,0,Math.PI-.4+Math.sin(e*9)*.35),s.armR.rotation.set(0,0,-.07)):(s.armL.rotation.set(0,0,Math.PI-.2+Math.sin(e*14)*.25),s.armR.rotation.set(0,0,-(Math.PI-.2)+Math.sin(e*14+1.5)*.25))}function vr(s,t,e=1){const n=Math.sin(t);s.legL.rotation.x=n*.42*e,s.legR.rotation.x=-n*.42*e,s.kneeL.rotation.x=Math.max(0,-Math.sin(t-.6))*.7*e,s.kneeR.rotation.x=Math.max(0,Math.sin(t-.6))*.7*e,s.armL.rotation.set(-n*.35*e,0,.07),s.armR.rotation.set(n*.35*e,0,-.07)}function _r(s){for(const t of[s.legL,s.legR,s.kneeL,s.kneeR])t.rotation.set(0,0,0)}function Mr(s){s.legL.rotation.set(-1.5,0,.06),s.legR.rotation.set(-1.5,0,-.06),s.kneeL.rotation.x=s.kneeR.rotation.x=1.5,s.armL.rotation.set(-.5,0,.1),s.armR.rotation.set(-.5,0,-.1),s.group.position.y-=.47}function Ry(s,t){s.legL.rotation.set(-.95+Math.sin(t)*.45,0,.05),s.legR.rotation.set(-.95-Math.sin(t)*.45,0,-.05),s.kneeL.rotation.x=1.2+Math.cos(t)*.45,s.kneeR.rotation.x=1.2-Math.cos(t)*.45,s.armL.rotation.set(-1,0,.08),s.armR.rotation.set(-1,0,-.08)}const jn=17.4,An=2.08,Le=(s,t={})=>new Yt({color:s,roughness:.6,flatShading:!0,...t}),Cy={name:"Chester Rose",cabin:"#1f4d3a",roof:"#7c2f23",length:jn,crew:!0};function Sh(s={}){const{name:t,cabin:e,roof:n,length:i,crew:o,crewStyle:r,pots:a=!0}={...Cy,...s},l=new St;l.userData.length=i;const c={hull:Le("#18191b",{roughness:.5}),deck:Le("#3a3d40",{roughness:.9}),cabin:Le(e,{roughness:.45}),roof:Le(n,{roughness:.7}),cream:Le("#efe3c2"),red:Le("#a3291f"),window:Le("#1b2730",{roughness:.1,metalness:.4}),brass:Le("#c9a24a",{roughness:.25,metalness:.9}),rope:Le("#8a6b43",{roughness:1}),black:Le("#111111"),pot:Le("#9b5a3c"),leaf:Le("#4f8a3a"),flower:Le("#e04f6a")},h=An/2,f=i/2,p=[[-h,-f+.4],[-h*.85,-f+.05],[0,-f],[h*.85,-f+.05],[h,-f+.4],[h,f-3.4],[h*.82,f-1.6],[h*.45,f-.5],[0,f],[-h*.45,f-.5],[-h*.82,f-1.6],[-h,f-3.4]],d=new fs(p.map(([ht,wt])=>new ct(ht,-wt))),g=.62,_=.38,m=new Ds(d,{depth:g+_,bevelEnabled:!1});m.rotateX(-Math.PI/2),m.translate(0,-g,0);const u=new Y(m,[c.deck,c.hull]);u.castShadow=u.receiveShadow=!0,l.add(u);const M=new Ds(d,{depth:.07,bevelEnabled:!1});M.rotateX(-Math.PI/2),M.scale(1.015,1,1.004),M.translate(0,_-.12,0),l.add(new Y(M,[c.red,c.red]));const x=-f+2,v=f-3.6,T=v-x,E=(x+v)/2,b=1.22,R=An-.24,S=[],y=new Y(new gt(R,b,T),c.cabin);y.position.set(0,_+b/2,E),y.castShadow=y.receiveShadow=!0,l.add(y);const P=new Y(new gt(R+.08,.09,T+.08),c.roof);P.position.set(0,_+b+.04,E),P.castShadow=!0,l.add(P);for(const ht of[-1,1]){const wt=new Y(new gt(.02,.05,T-.3),c.cream);wt.position.set(ht*(R/2+.005),_+b-.18,E),l.add(wt);const Ht=wt.clone();Ht.position.y=_+.18,l.add(Ht);const nt=Math.min(x+3.6,E);for(let k=x+1.6;k<v-.6;k+=1.45){if(Math.abs(k-nt)<1)continue;const zt=new Y(new gt(.03,.34,.5),c.window);zt.position.set(ht*(R/2+.005),_+b*.62,k),l.add(zt),S.push(zt.position.clone())}const mt=Zf(t);mt.position.set(ht*(R/2+.012),_+b*.55,nt),mt.rotation.y=ht*(Math.PI/2),l.add(mt)}for(const[ht,wt]of[[x-.005,-1],[v+.005,1]]){const Ht=new Y(new gt(.9,.95,.03),c.red);Ht.position.set(0,_+.5,ht),l.add(Ht);const nt=new Y(new gt(.03,.9,.035),c.cream);nt.position.set(0,_+.5,ht+wt*.005),l.add(nt)}const w=new Y(Py(),new Yt({map:Ly(),roughness:.6,side:He}));w.position.set(0,_,f-1.5),l.add(w);const N=new Y(new gt(.12,.06,2.1),c.cream);N.position.set(0,_+1.12,f-2.55),N.rotation.x=-.36,l.add(N);const z=new Y(new qt(.07,.07,.55,8),c.black);z.position.set(.45,_+b+.3,v-1.4),l.add(z);const q=new Y(new qt(.075,.075,.06,8),c.brass);q.position.set(.45,_+b+.5,v-1.4),l.add(q);for(const[ht,wt]of a?[[x+2.2,-.35],[x+2.8,-.35],[E+1.5,.3]]:[]){const Ht=new Y(new qt(.16,.12,.22,7),c.pot);Ht.position.set(wt,_+b+.19,ht),l.add(Ht);const nt=new Y(new En(.2,0),c.leaf);nt.position.set(wt,_+b+.4,ht),l.add(nt);const mt=new Y(new En(.06,0),c.flower);mt.position.set(wt+.08,_+b+.55,ht),l.add(mt)}const V=new Y(new qt(.03,.03,Math.min(4.5,T-.8),6),c.cream);V.rotation.x=Math.PI/2,V.position.set(-.6,_+b+.12,E-1),l.add(V);const $=new Y(new Qe(.22,8,6),c.rope);$.scale.set(1,.9,1.3),$.position.set(0,.05,f-.02),l.add($);for(const ht of[-1,1]){const wt=new Y(new qt(.11,.11,.45,8),c.rope);wt.position.set(ht*(h+.08),.05,2),l.add(wt)}const G=new Y(new qt(.1,.12,.18,10),c.brass);G.rotation.x=Math.PI/2,G.position.set(0,_+.25,f-.35),l.add(G);const dt=new Yf("#ffe7b0",0,60,.5,.6,1.2);dt.position.set(0,_+.3,f-.2),dt.target.position.set(0,-.5,f+20),l.add(dt,dt.target);const pt=new St;pt.position.set(0,0,-f-.05);const ot=new Y(new gt(.05,.75,.9),c.hull);ot.position.set(0,-.3,-.45),pt.add(ot);const Nt=new Y(new qt(.04,.04,1.1,6),c.black);Nt.position.set(0,.45,0),pt.add(Nt);const ie=new Y(new qt(.025,.035,1.3,6),c.brass);ie.rotation.x=Math.PI/2-.25,ie.position.set(0,1.08,.62),pt.add(ie);const tt=new Y(new Qe(.05,6,4),c.brass);tt.position.set(0,1,0),pt.add(tt),l.add(pt);const _t=qn(r??{coat:"#e8b931",trousers:"#2d3a55",skin:"#e3b08f",hair:"#5a3a22",hairStyle:"cap",hat:"#3d4a3a",longCoat:!1}),At=_t.group;At.position.set(0,_-.25,-f+.9),o?l.add(At):l.remove(dt,dt.target);const xt=new Y(new gt(2.2,1.6,3),new Dn({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}));xt.position.set(0,1,-f+.6),xt.name="tiller-hit";const jt=new Y(new br(.75,.9,32),new Dn({color:"#ffd76a",transparent:!0,opacity:.6,depthWrite:!1,side:He}));return jt.rotation.x=-Math.PI/2,jt.position.set(0,_+.02,-f+.55),o&&l.add(xt,jt),{group:l,rudder:pt,steerer:At,steererPerson:_t,headlight:dt,tillerHit:xt,tillerHint:jt,windows:S,chimneyTop:new U(.45,_+b+.6,v-1.4),roofSpan:{z0:x,z1:v,y:_+b+.09}}}function Zf(s){const t=document.createElement("canvas");t.width=512,t.height=160;const e=t.getContext("2d");e.fillStyle="#a3291f",e.fillRect(0,0,512,160),e.strokeStyle="#efe3c2",e.lineWidth=8,e.strokeRect(10,10,492,140),e.fillStyle="#f6d36b",e.font="800 64px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#3a120d",e.shadowOffsetX=3,e.shadowOffsetY=3,e.fillText(s,256,84,460);const n=new Mn(t);return n.colorSpace=Ve,new Y(new wi(1.9,.6),new Yt({map:n,roughness:.5}))}function Py(){const s=new xe,t=An*.42,e=1.15;return s.setAttribute("position",new ne([-t,0,0,t,0,0,0,e,0],3)),s.setAttribute("uv",new ne([0,0,1,0,.5,1],2)),s.computeVertexNormals(),s}function Ly(){const s=document.createElement("canvas");s.width=s.height=256;const t=s.getContext("2d");t.fillStyle="#1f4d3a",t.fillRect(0,0,256,256),t.fillStyle="#a3291f",t.beginPath(),t.moveTo(128,40),t.lineTo(200,170),t.lineTo(128,240),t.lineTo(56,170),t.closePath(),t.fill(),t.strokeStyle="#f6d36b",t.lineWidth=8,t.stroke();for(const[n,i,o]of[[128,150,"#e04f6a"],[108,175,"#f2efe0"],[148,175,"#e8a43c"]])t.fillStyle=o,t.beginPath(),t.arc(n,i,14,0,Math.PI*2),t.fill();const e=new Mn(s);return e.colorSpace=Ve,e}function Dy(s){const t=new St;s.group.updateMatrixWorld(!0);const e=Vi(s.group,i=>{const o=i.clone();o.matrixAutoUpdate=!1,o.matrix.copy(i.matrixWorld),t.add(o)}),n=new Y(e,Oi());return n.castShadow=n.receiveShadow=!0,t.add(n),t}function Iy(s,t,e){const n=new St;n.userData.length=t;const i={hull:Le("#141516",{roughness:.55}),deck:Le("#2a2724",{roughness:.95}),red:Le("#b5291f"),cream:Le("#efe3c2"),blue:Le("#1e3f8a"),black:Le("#111111"),brass:Le("#c9a24a",{roughness:.25,metalness:.9}),rope:Le("#8a6b43",{roughness:1})},o=An/2,r=t/2,a=.75,l=.34,c=[[-o,-r+.5],[-o*.85,-r+.08],[0,-r],[o*.85,-r+.08],[o,-r+.5],[o,r-3.8],[o*.86,r-1.9],[o*.5,r-.6],[0,r],[-o*.5,r-.6],[-o*.86,r-1.9],[-o,r-3.8]],h=new fs(c.map(([ht,wt])=>new ct(ht,-wt))),f=new Ds(h,{depth:a+l,bevelEnabled:!1});f.rotateX(-Math.PI/2),f.translate(0,-a,0);const p=new Y(f,[i.deck,i.hull]);p.castShadow=p.receiveShadow=!0,n.add(p);const d=(ht,wt,Ht,nt,mt,k=0,zt=0,vt=0)=>{const Pt=new Y(ht,wt);return Pt.position.set(Ht,nt,mt),Pt.rotation.set(k,zt,vt),Pt.castShadow=!0,n.add(Pt),Pt},g=-r+.9,_=-r+3.6,m=_,u=r-3.2,M=u-m,x=(m+u)/2,v=l;for(const ht of[-1,1])d(new gt(.06,.42,M),i.hull,ht*(o-.03),v+.21,x),d(new gt(.16,.05,M),i.red,ht*(o-.06),v+.44,x),d(new gt(.02,.1,2.2),i.cream,ht*(o+.012),v-.05,r-4.9),d(new gt(.02,.12,2.2),i.red,ht*(o+.012),v-.16,r-4.9),d(new gt(.02,.07,2.2),i.blue,ht*(o+.012),v-.26,r-4.9);d(new gt(An*.8,.06,2.4),i.red,0,v+.03,u+1.1);const T=new Y(ky(),new Yt({map:Uy(s),roughness:.6,side:He}));T.position.set(0,v,u),n.add(T);const E=d(new qt(.12,.12,.1,12),i.brass,0,v+.95,u+.05,Math.PI/2);E.castShadow=!1;const b=Ny(),R=new Yt({map:b,roughness:.6}),S=v+1.3,y=[u-6,m+.4];for(const ht of y)d(new gt(.14,S-v,.14),i.black,0,(S+v)/2,ht),d(new gt(.34,.34,.04),R,0,S-.32,ht+.09);d(new gt(.22,.04,u-y[0]),i.red,0,S+.1,(u+y[0])/2,-.02),d(new gt(.22,.04,y[0]-y[1]),i.red,0,S+.02,(y[0]+y[1])/2);const P=Le("#f1efe8",{roughness:.85}),w=[Le("#7a3c8c"),Le("#e2742b"),Le("#2f6fb3")],N=[Le("#4d5a37",{roughness:1}),Le("#5e5136",{roughness:1})],z=Le("#c8321f",{roughness:.4}),q=Le("#2c5fb8",{roughness:.4});let V=0;for(let ht=u-.6;ht>u-4.6;ht-=.85)for(const wt of[-.45,.45])for(let Ht=0;Ht<(ht>u-2.5?2:1);Ht++,V++){const nt=v+.15+Ht*.27;d(new gt(.78,.26,.5),P,wt,nt,ht,0,V%3*.06-.06,0),d(new gt(.8,.27,.16),w[V%3],wt,nt,ht,0,V%3*.06-.06,0)}for(let ht=0;ht<9;ht++)d(new En(.42,1),N[ht%2],(ht%3-1)*.5,v+.3+ht%2*.18,u-5.4-Math.floor(ht/3)*.75).scale.set(1,.65,1.25);for(let ht=0;ht<10;ht++){const wt=-.6+ht%5*.3,Ht=m+3.6+Math.floor(ht/5)*.4,nt=ht%3===0?.5:.42;d(new qt(.13,.13,nt,10),ht%4===1?q:z,wt,v+nt/2,Ht),d(new qt(.05,.05,.08,6),i.brass,wt,v+nt+.04,Ht)}const $=Le("#2f7a3c");d(new gt(.55,.9,.42),$,-.25,v+.45,m+1.2),d(new gt(.4,.22,.03),i.cream,-.25,v+.68,m+1.42),d(new dn(.2,.035,6,14),i.black,.05,v+.45,m+1.2,0,Math.PI/2),d(new gt(.06,.06,.22),i.black,.08,v+.8,m+1.25);for(const[ht,wt]of[[.5,m+1],[.5,m+1.65]])d(new qt(.26,.26,.8,12),Le("#2e3a4a"),ht,v+.4,wt);const G=1.1,dt=An-.2,pt=_-g,ot=(g+_)/2;d(new gt(dt,G,pt),i.red,0,v+G/2,ot),d(new gt(dt+.08,.08,pt+.08),i.black,0,v+G+.04,ot);for(const ht of[-1,1]){d(new gt(.02,.05,pt-.2),i.cream,ht*(dt/2+.006),v+G-.15,ot);const wt=Zf(s);wt.scale.set(.8,.8,1),wt.position.set(ht*(dt/2+.012),v+G*.5,ot),wt.rotation.y=ht*(Math.PI/2),n.add(wt)}d(new gt(.8,.9,.03),i.cream,0,v+.48,g-.01),d(new qt(.08,.08,.7,8),i.black,.5,v+G+.35,_-.5);for(const ht of[.2,.55])d(new qt(.085,.085,.05,8),i.brass,.5,v+G+ht,_-.5);for(const ht of[-1,1])d(new dn(.22,.08,6,12),i.black,ht*(o+.06),v-.1,g+.6,0,Math.PI/2);const Nt=new St;Nt.position.set(0,0,-r-.05);const ie=new Y(new gt(.05,.85,1),i.hull);ie.position.set(0,-.3,-.5);const tt=new Y(new qt(.025,.035,1.3,6),i.brass);tt.rotation.x=Math.PI/2-.25,tt.position.set(0,1,.62),Nt.add(ie,tt),n.add(Nt);const _t=qn(e??{}),At=_t.group;At.position.set(0,v-.2,-r+.5),n.add(At);const xt=new Yf("#ffe7b0",0),jt=()=>new Y;return{group:n,rudder:Nt,steerer:At,steererPerson:_t,headlight:xt,tillerHit:jt(),tillerHint:jt()}}function ky(){const s=new xe,t=An/2-.02,e=1.45;return s.setAttribute("position",new ne([-t,0,0,t,0,0,0,e,0],3)),s.setAttribute("uv",new ne([0,0,1,0,.5,1],2)),s.computeVertexNormals(),s}function Uy(s){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle="#121212",e.fillRect(0,0,512,512),e.strokeStyle="#efe3c2",e.lineWidth=14;for(const i of[30,60])e.beginPath(),e.moveTo(i,512),e.lineTo(256,i*.9),e.lineTo(512-i,512),e.stroke();e.fillStyle="#efe3c2",e.textAlign="center",e.font="800 40px Fraunces, Georgia, serif",e.fillText(s.toUpperCase(),256,250),e.font="700 30px Georgia, serif",e.fillText("FUELS",256,288),e.font="600 22px Georgia, serif",["COAL · LOGS","GAS BOTTLES","DIESEL"].forEach((i,o)=>e.fillText(i,256,340+o*32));const n=new Mn(t);return n.colorSpace=Ve,n}function Ny(){const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d");t.fillStyle="#efe3c2",t.fillRect(0,0,64,64);const e=(i,o)=>{t.fillStyle=i,t.beginPath(),t.moveTo(o[0],o[1]),t.lineTo(o[2],o[3]),t.lineTo(o[4],o[5]),t.fill()};e("#b5291f",[32,32,0,0,64,0]),e("#e8b931",[32,32,64,0,64,64]),e("#2f7a3c",[32,32,0,64,64,64]),e("#1e3f8a",[32,32,0,0,0,64]);const n=new Mn(s);return n.colorSpace=Ve,n}const uo=16e3,ql=uo*jn*jn/12,Oy=650,Fy=700,zy=7,fa=.3,fo=-3,fi=5,yd=(()=>{const s=An/2,t=jn/2;return[[0,t],[.55,t-.6],[-.55,t-.6],[s,t-3],[-s,t-3],[s,2],[-s,2],[s,-3],[-s,-3],[s*.95,-t+.4],[-s*.95,-t+.4],[0,-t]]})();class By{constructor(t,e){I(this,"x",0);I(this,"z",0);I(this,"psi",0);I(this,"u",0);I(this,"v",0);I(this,"r",0);I(this,"notch",0);I(this,"thrust",0);I(this,"rudder",0);I(this,"s",0);I(this,"d",0);I(this,"contacts",[]);I(this,"obstacles",[]);I(this,"tethers",[]);I(this,"power",1);I(this,"bowThrust",0);this.route=t,this.ww=e}placeAt(t,e=!0){const n=this.route.frame(t);this.x=n.x,this.z=n.z,this.psi=Math.atan2(n.tx,n.tz)+(e?0:Math.PI),this.s=t,this.u=this.v=this.r=0}get speed(){return Math.hypot(this.u,this.v)}span(){let t=1/0,e=-1/0;for(const[n,i]of yd){const[o,r]=this.toWorld(n,i),a=this.route.project(o,r,this.s);t=Math.min(t,a.s),e=Math.max(e,a.s)}return[t,e]}get thrusterBite(){return Te((.67-Math.abs(this.u))/.13,0,1)}step(t,e){const n=Te(e,-1,1),i=n===0?2.2:1.6;this.rudder+=Te(n-this.rudder,-i*t,i*t);const o=(this.notch>=0?this.notch*Oy:this.notch*Fy)*this.power;this.thrust+=Te(o-this.thrust,-2200*t,2200*t);const{u:r,v:a,r:l}=this,c=this.thrust,h=this.rudder*(300*r*Math.abs(r)+.85*Math.max(c,0)),f=c-480*r*Math.abs(r)-250*r,p=-9e3*a*Math.abs(a)-4e3*a+h*.3-this.bowThrust*1700*this.thrusterBite;let d=h*zy-12e4*l-6e5*l*Math.abs(l);c<0&&(d+=.12*c*1.5);const g=this.bowThrust*1700*this.thrusterBite;d+=g*(jn/2-1),this.u+=(f/uo-a*l)*t,this.v+=(p/uo+r*l)*t,this.r+=d/ql*t,this.psi+=this.r*t;const _=Math.sin(this.psi),m=Math.cos(this.psi);this.x+=(this.u*_-this.v*m)*t,this.z+=(this.u*m+this.v*_)*t,this.contacts.length=0;for(let M=0;M<2;M++)this.resolveContacts(),this.resolveExtras();const u=this.route.project(this.x,this.z,this.s);this.s=u.s,this.d=u.d}toWorld(t,e){const n=Math.sin(this.psi),i=Math.cos(this.psi);return[this.x+e*n-t*i,this.z+e*i+t*n]}resolveContacts(){const{route:t,ww:e}=this,n=e.gates.filter(o=>Math.abs(o.s-this.s)<jn+6&&e.gateBlocks(o)),i=this.obstacles.filter(o=>Math.abs(o.x-this.x)+Math.abs(o.z-this.z)<45);for(const[o,r]of yd){const[a,l]=this.toWorld(o,r),c=t.project(a,l,this.s),h=t.frame(c.s),f=e.halfWidthAt(c.s)-.05;if(Math.abs(c.d)>f){const p=Math.sign(c.d);this.applyContact(a,l,h.nx*p,h.nz*p,Math.abs(c.d)-f,"bank")}for(const p of n)this.s<p.s&&c.s>p.s-fa?this.applyContact(a,l,h.tx,h.tz,c.s-(p.s-fa),"gate"):this.s>p.s&&c.s<p.s+fa&&this.applyContact(a,l,-h.tx,-h.tz,p.s+fa-c.s,"gate");for(const p of i){const d=a-p.x,g=l-p.z,_=Math.sin(p.psi),m=Math.cos(p.psi),u=d*_+g*m,M=-d*m+g*_,x=p.halfB+.05-Math.abs(M),v=p.halfL+.05-Math.abs(u);if(!(x<=0||v<=0))if(x<v){const T=-Math.sign(M)||1;this.applyContact(a,l,-m*T,_*T,x,"boat",p)}else{const T=-Math.sign(u)||1;this.applyContact(a,l,_*T,m*T,v,"boat",p)}}c.s<2&&this.applyContact(a,l,-h.tx,-h.tz,2-c.s,"bank"),c.s>t.length-2&&this.applyContact(a,l,h.tx,h.tz,c.s-(t.length-2),"bank")}}resolveExtras(){const t=Math.sin(this.psi),e=Math.cos(this.psi),n=An/2,i=jn/2;for(const o of this.obstacles){if(Math.abs(o.x-this.x)+Math.abs(o.z-this.z)>45)continue;const r=Math.sin(o.psi),a=Math.cos(o.psi);for(const[l,c]of[[o.halfB,o.halfL],[-o.halfB,o.halfL],[o.halfB,-o.halfL],[-o.halfB,-o.halfL]]){const h=o.x+c*r-l*a,f=o.z+c*a+l*r,p=h-this.x,d=f-this.z,g=p*t+d*e,_=-p*e+d*t,m=n-Math.abs(_),u=i-.6-Math.abs(g);m<=0||u<=0||(m<u?this.applyContact(h,f,-e*Math.sign(_),t*Math.sign(_),m,"boat",o):this.applyContact(h,f,t*Math.sign(g),e*Math.sign(g),u,"boat",o))}}for(const o of this.tethers){const[r,a]=this.toWorld(o.local[0],o.local[1]),l=r-o.anchor[0],c=a-o.anchor[1],h=Math.hypot(l,c);h>o.length&&this.applyContact(r,a,l/h,c/h,h-o.length,"bank",void 0,!0)}}applyContact(t,e,n,i,o,r,a,l=!1){this.x-=n*o,this.z-=i*o;const c=t-this.x,h=e-this.z,f=Math.sin(this.psi),p=Math.cos(this.psi);let d=this.u*f-this.v*p,g=this.u*p+this.v*f;const _=d+this.r*h,m=g-this.r*c,u=_*n+m*i;if(u<=0)return;const M=h*n-c*i,x=-1.15*u/(1/uo+M*M/ql);d+=x*n/uo,g+=x*i/uo,this.r+=x*M/ql,d*=.995,g*=.995,this.u=d*f+g*p,this.v=-d*p+g*f,l||this.contacts.push({impulse:-x,kind:r,obstacle:a})}}const Hy={KeyW:"throttleUp",ArrowUp:"throttleUp",KeyS:"throttleDown",ArrowDown:"throttleDown",Space:"neutral",KeyT:"timeFaster",KeyR:"timeSlower",KeyV:"camera",KeyM:"map",KeyH:"help",KeyN:"mute",KeyL:"headlight",KeyF:"moor",KeyG:"clear",KeyB:"horn",KeyC:"cook",KeyQ:"recenter",KeyE:"lockNext",Enter:"nextTrip",Escape:"declineTrip"};class Gy{constructor(){I(this,"held",new Set);I(this,"queue",[]);I(this,"onFirstInput",null);I(this,"touchSteer",0);addEventListener("keydown",t=>{this.onFirstInput&&(this.onFirstInput(),this.onFirstInput=null);const e=Hy[t.code];e&&t.preventDefault(),!t.repeat&&(this.held.add(t.code),e&&this.queue.push(e))}),addEventListener("keyup",t=>this.held.delete(t.code)),addEventListener("blur",()=>this.held.clear())}get steer(){const t=this.held.has("KeyA")||this.held.has("ArrowLeft"),e=this.held.has("KeyD")||this.held.has("ArrowRight");return(t?1:0)-(e?1:0)||this.touchSteer}get bowThrust(){return(this.held.has("KeyZ")?1:0)-(this.held.has("KeyX")?1:0)}push(t){this.queue.push(t)}drain(){return this.queue.splice(0)}}const Eh=new URLSearchParams(location.search).get("area")==="pontcysyllte"?"pontcysyllte":"chester",Vy=[["chester","Chester"],["pontcysyllte","Pontcysyllte Aqueduct"]],Yn=matchMedia("(pointer: coarse)").matches,bd=s=>Yn?s.replace(/ ?\((?:[A-Z]|Enter|Esc)\)/g,""):s,Wy={F:"moor",G:"clear"};function wd(s,t){let e=0;s.addEventListener("pointerdown",n=>{const i=performance.now();if(i-e>350)return void(e=i);e=0,n.preventDefault(),n.stopImmediatePropagation(),t()})}class Xy{constructor(t,e,n,i){I(this,"root");I(this,"loc");I(this,"helm");I(this,"lockPanel");I(this,"tip");I(this,"nopeUntil",0);I(this,"nopeText","");I(this,"nopeWarn",!0);I(this,"toasts");I(this,"help");I(this,"chip");I(this,"trip");I(this,"promptEl");I(this,"summary");I(this,"lastTrip","");I(this,"offer");I(this,"lift");I(this,"tripTapOffers",!1);I(this,"lastPrompt","");I(this,"lastLock","");I(this,"lastHelm","");I(this,"lastLoc","");I(this,"winding",!1);I(this,"act");I(this,"logChip");I(this,"logCard");I(this,"lastGalley","");I(this,"lastRep","");I(this,"bubbleLayer");I(this,"bubbleEls",new Map);I(this,"onBubbleTap",null);I(this,"onSteer",null);I(this,"onNotch",null);I(this,"paintNotch",()=>{});I(this,"speedEl");I(this,"promptKey","");var o;this.act=e,this.root=t,t.innerHTML=`
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
        <button class="chip log-chip" aria-label="Logbook"><span class="rep-face"></span><i class="log-dot" hidden></i></button>
        <button class="map-btn chip" aria-label="Map"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/></svg></button>
      </div>
      <div class="card helm"></div>
      <div class="lock-panel" hidden></div>
      <div class="toasts"></div>
      <div class="map-wrap"><div class="area-pick"><span>Go to</span>${Vy.map(([r,a])=>`<a href="?area=${r}" class="${r===Eh?"on":""}">${a}</a>`).join("")}</div></div>
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
          <dt><kbd>E</kbd></dt><dd>At a lock: do the next step (the glowing button)</dd>
          <dt><kbd>Q</kbd></dt><dd>Recentre the view behind the boat (or double-click the scene)</dd>
          <dt><kbd>C</kbd></dt><dd>Cook a meal (moored, with food in the larder and water in the tank)</dd>
        </dl>
        <p class="muted">Press <kbd>H</kbd> to close</p>
      </div>`,this.loc=t.querySelector(".loc"),this.helm=t.querySelector(".helm"),this.lockPanel=t.querySelector(".lock-panel"),this.toasts=t.querySelector(".toasts"),this.help=t.querySelector(".help"),this.chip=t.querySelector(".chip"),(o=t.querySelector(".map-btn"))==null||o.addEventListener("click",()=>e("map")),this.logChip=t.querySelector(".log-chip"),this.logChip.addEventListener("pointerdown",r=>r.preventDefault()),this.logCard=document.createElement("div"),this.logCard.className="log-card card",this.logCard.hidden=!0,this.logCard.innerHTML=`
      <div class="lb-rep"></div>
      <div class="lb-supplies"></div>
      <div class="lb-journal"></div>
      ${Yn?"":'<p class="credits"><kbd>H</kbd> keys</p>'}`,t.appendChild(this.logCard),this.logChip.addEventListener("click",()=>{this.logCard.hidden=!this.logCard.hidden,this.logCard.hidden||this.closeOthers("log")}),this.logCard.addEventListener("pointerdown",r=>r.preventDefault()),this.logCard.addEventListener("click",()=>this.logCard.hidden=!0),this.bubbleLayer=document.createElement("div"),this.bubbleLayer.className="bubbles",t.appendChild(this.bubbleLayer),this.trip=t.querySelector(".trip"),this.promptEl=t.querySelector(".prompt"),this.summary=t.querySelector(".summary"),this.offer=t.querySelector(".offer"),this.lift=t.querySelector(".pill.lift"),this.offer.addEventListener("click",r=>{var l;const a=(l=r.target.closest("button"))==null?void 0:l.dataset.act;a&&e(a)});for(const r of[this.loc,this.trip])r.addEventListener("pointerdown",a=>a.preventDefault()),r.addEventListener("click",()=>{r===this.trip&&this.tripTapOffers?e("tripOffer"):r.classList.toggle("open")});if(this.summary.addEventListener("click",r=>{r.target.closest("button")&&e("nextTrip")}),this.chip.addEventListener("pointerdown",r=>r.preventDefault()),this.buildHelm(),this.chip.addEventListener("click",()=>e("timeCycle")),Yn){this.buildSteerPad(t);const r=document.createElement("button");r.className="horn-btn chip",r.setAttribute("aria-label","Horn"),r.innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M3 10v4h3l6 4V6L6 10z"/><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/></svg>',r.addEventListener("pointerdown",a=>{a.preventDefault(),e("horn")}),t.appendChild(r),t.appendChild(this.chip),this.chip.classList.add("chip-dock")}this.promptEl.addEventListener("pointerdown",r=>r.preventDefault()),this.promptEl.addEventListener("click",()=>{const r=Wy[this.promptKey];r&&e(r)}),t.appendChild(n),t.querySelector(".map-wrap").appendChild(i),this.lockPanel.addEventListener("pointerdown",r=>r.preventDefault()),this.tip=document.createElement("div"),this.tip.className="lock-tip",this.tip.hidden=!0,t.appendChild(this.tip),n.addEventListener("click",()=>e("map")),i.addEventListener("click",()=>e("map"))}closeOthers(t){t!=="log"&&(this.logCard.hidden=!0),t!=="help"&&(this.help.hidden=!0),t!=="map"&&this.root.querySelector(".map-wrap.open")&&this.act("map")}toggleHelp(t){this.help.hidden=t===void 0?!this.help.hidden:!t,this.help.hidden||this.closeOthers("help")}setMapOpen(t){t&&this.closeOthers("map"),this.root.querySelector(".map-wrap").classList.toggle("open",t)}toast(t,e="info",n=4200){t=bd(t);for(const o of this.toasts.children)if(o.textContent===t)return;for(;this.toasts.children.length>=3;)this.toasts.firstElementChild.remove();const i=document.createElement("div");i.className=`toast ${e}`,i.textContent=t,this.toasts.appendChild(i),setTimeout(()=>i.classList.add("out"),n),setTimeout(()=>i.remove(),n+600)}setLocation(t,e){const n=t+e;n!==this.lastLoc&&(this.lastLoc=n,this.loc.querySelector(".head").innerHTML=`<span class="ico">📍</span>${t.replace(/ Lock\b/g,"")}`,this.loc.querySelector(".more").innerHTML=`<div class="eyebrow">Shropshire Union Canal</div><div>${e}</div>`)}setGalley(t){const e=`${Math.round(t.hunger*20)}|${t.food}|${Math.round(t.water*20)}|${Math.round(t.gas*20)}|${Math.round(t.heat*20)}|${Math.round(t.diesel*20)}|${Math.round(t.damage*50)}|${t.shop}`;if(e===this.lastGalley)return;this.lastGalley=e;const n=[["Fed",1-t.hunger,t.hunger>.6,t.hunger>.85?"starving!":t.hunger>.6?"hungry":t.hunger>.3?"peckish":"full","pub or cook"],["Larder",t.food/t.foodMax,t.food<=1,`${t.food} meal${t.food===1?"":"s"}`,"supermarket"],["Water",t.water,t.water<.25,`${Math.round(t.water*100)}%`,"water point"],["Gas",t.gas,t.gas<.2,`${Math.floor(t.gas*10+1e-6)} meals`,"fuel boat"],["Diesel",t.diesel,t.diesel<.15,`${Math.round(t.diesel*100)}%`,"fuel boat"],["Stove",t.heat,t.heat<.15,`${Math.max(1,Math.round(t.heat*3.5))} night${Math.round(t.heat*3.5)>1?"s":""}`,"logs, coal"],["Boat",1-t.damage,t.damage>.5,t.damage<.02?"shipshape":t.damage>.25?"battered":"scuffed",t.shop??"boatyard"]];t.shop&&(n[6][2]=!0),this.logCard.querySelector(".lb-supplies").innerHTML=n.map(([i,o,r,a,l])=>`<div class="gb"><span>${i}</span><i><b class="${r?"bad":""}" style="width:${Math.round(o*100)}%"></b></i><em class="${r?"bad":""}">${r?l:a}</em></div>`).join(""),this.logChip.querySelector(".log-dot").hidden=!n.some(i=>i[2])}setRep(t,e,n,i){const o=`${Math.round(t)}|${e}`;o!==this.lastRep&&(this.lastRep=o,this.logChip.querySelector(".rep-face").textContent=n,this.logCard.querySelector(".lb-rep").innerHTML=`<span class="big">${n}</span><div><b>${e}</b> <span class="num ${t<0?"bad":""}">${Math.round(t)}</span><div class="muted">${i?`${i.need} more for ${i.face} ${i.text}`:"As good as it gets!"}</div></div>`)}setJournal(t){const e=this.logCard.querySelector(".lb-journal");e.textContent!==t&&(e.textContent=t)}repPulse(t,e,n){const i=document.createElement("div");i.className=`rep-pop ${t>0?"up":"down"}`,i.textContent=`${t>0?"+":"−"}${Math.abs(t)} ${e}`;const o=this.root.getBoundingClientRect();if(n)i.style.left=`${n.x-o.left}px`,i.style.top=`${n.y-o.top}px`;else{const r=this.logChip.getBoundingClientRect();i.style.left=`${r.left-o.left+r.width/2}px`,i.style.top=`${r.bottom-o.top+4}px`}this.root.appendChild(i),this.logChip.classList.remove("flash-up","flash-down"),this.logChip.offsetWidth,this.logChip.classList.add(t>0?"flash-up":"flash-down"),setTimeout(()=>i.remove(),2600)}setBubbles(t){const e=this.root.getBoundingClientRect(),n=new Set;for(const i of t){n.add(i.id);let o=this.bubbleEls.get(i.id);o||(o=document.createElement("button"),o.className="bubble",o.addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation()}),o.addEventListener("click",()=>{var a;(a=this.onBubbleTap)!=null&&a.call(this,o.dataset.id)||this.act(o.dataset.act)}),this.bubbleLayer.appendChild(o),this.bubbleEls.set(i.id,o));const r=`<span class="ic">${i.icon}</span>${i.label?`<span class="lb">${i.label}</span>`:""}${i.key&&!Yn?`<kbd>${i.key}</kbd>`:""}`;o.dataset.html!==r&&(o.dataset.html=r,o.innerHTML=r),o.dataset.act=i.act,o.dataset.id=i.id,o.classList.toggle("dim",!i.ready),o.classList.toggle("spin",!!i.spin),o.classList.toggle("glow",!!i.glow&&i.ready),o.classList.toggle("warn",!!i.warn),o.classList.toggle("edge",!!i.edge),o.classList.toggle("busy",i.progress!==void 0),o.classList.toggle("labelled",!!i.label),i.progress!==void 0&&(o.style.setProperty("--p",`${Math.round(i.progress*360)}deg`),o.style.setProperty("--pc",`${Math.round(i.progress*100)}%`)),o.style.transform=`translate(${(i.x-e.left).toFixed(1)}px, ${(i.y-e.top).toFixed(1)}px) translate(-50%, -100%)`}for(const[i,o]of this.bubbleEls)n.has(i)||(o.remove(),this.bubbleEls.delete(i))}buildSteerPad(t){const e=document.createElement("div");e.className="steer-pad card",e.innerHTML='<span class="arr">‹</span><div class="track"><div class="knob"></div></div><span class="arr">›</span>',t.appendChild(e);const n=e.querySelector(".knob");let i=null;const o=a=>{var l;n.style.transform=`translateX(${-a*40}px)`,(l=this.onSteer)==null||l.call(this,a)};e.addEventListener("pointerdown",a=>{a.preventDefault();const l=e.getBoundingClientRect();i={x:l.left+l.width/2,id:a.pointerId},e.setPointerCapture(a.pointerId),e.classList.add("held"),o(Math.max(-1,Math.min(1,-(a.clientX-i.x)/40)))}),e.addEventListener("pointermove",a=>{i&&a.pointerId===i.id&&o(Math.max(-1,Math.min(1,-(a.clientX-i.x)/40)))});const r=a=>{!i||a.pointerId!==i.id||(i=null,e.classList.remove("held"),o(0))};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r)}buildRail(){const t=[];for(let a=fi;a>=fo;a--)t.push(`<div class="pip ${a>0?"ahead":a<0?"astern":"n"}" data-n="${a}" style="grid-row: ${fi-a+1}"></div>`);const e=a=>fi-a+1;t.push(`<span style="grid-row: ${e(fi)} / ${e(1)+1}">FWD</span>`,`<span style="grid-row: ${e(0)}">N</span>`,`<span style="grid-row: ${e(-1)} / ${e(fo)+1}">REV</span>`),this.helm.classList.add("rail-helm"),this.helm.innerHTML=`<div class="spd">0.0</div><div class="unit">mph</div><div class="rail">${t.join("")}</div>`,this.speedEl=this.helm.querySelector(".spd");const n=[...this.helm.querySelectorAll(".pip")];this.paintNotch=a=>n.forEach(l=>l.classList.toggle("on",Number(l.dataset.n)===a));const i=this.helm.querySelector(".rail"),o=a=>{const l=i.getBoundingClientRect(),c=Math.floor((a.clientY-l.top)/l.height*n.length);return fi-Math.max(0,Math.min(n.length-1,c))};let r=!1;wd(this.helm,()=>{var a;r=!1,(a=this.onNotch)==null||a.call(this,0)}),i.addEventListener("pointerdown",a=>{var l;a.preventDefault(),r=!0,i.setPointerCapture(a.pointerId),(l=this.onNotch)==null||l.call(this,o(a))}),i.addEventListener("pointermove",a=>{var l;return r&&((l=this.onNotch)==null?void 0:l.call(this,o(a)))}),i.addEventListener("pointerup",()=>r=!1),i.addEventListener("pointercancel",()=>r=!1)}buildHelm(){if(Yn)return this.buildRail();const t=es.x,e=es.y,n=48,i=(d,g)=>{const _=d*Math.PI/180;return[t+Math.sin(_)*g,e-Math.cos(_)*g]},o=(d,g,_)=>{const[m,u]=i(d,_),[M,x]=i(g,_);return`M${m.toFixed(1)},${u.toFixed(1)} A${_},${_} 0 0 1 ${M.toFixed(1)},${x.toFixed(1)}`},r=[];for(let d=fo;d<=fi;d++){const[g,_]=i(d*lo,n-4),[m,u]=i(d*lo,n+(d===0?7:4));r.push(`<line x1="${g}" y1="${_}" x2="${m}" y2="${u}" class="${d===0?"tick n":"tick"}"/>`)}const[a,l]=i(0,n+14);this.helm.innerHTML=`
      <svg class="lever" viewBox="0 0 ${es.w} ${es.h}" width="${es.w}" height="${es.h}">
        <path d="${o(fo*lo,0,n)}" class="band astern"/>
        <path d="${o(0,fi*lo,n)}" class="band ahead"/>
        ${r.join("")}
        <text x="${a}" y="${l+3}" class="lbl n">N</text>
        <g class="arm"><line x1="${t}" y1="${e-n+15}" x2="${t}" y2="${e-n+4}"/><circle cx="${t}" cy="${e-n}" r="7.5"/></g>
        <text x="${t}" y="${e-6}" class="spd">0.0</text>
        <text x="${t}" y="${e+5}" class="unit">mph</text>
      </svg>`;const c=this.helm.querySelector(".arm");this.paintNotch=d=>{c.style.transform=`rotate(${d*lo}deg)`,c.classList.toggle("astern",d<0),c.classList.toggle("neutral",d===0)},this.speedEl=this.helm.querySelector(".spd");const h=this.helm.querySelector("svg"),f=d=>{const g=h.getBoundingClientRect(),_=(d.clientX-g.left)/g.width*es.w-t,m=(d.clientY-g.top)/g.height*es.h-e,u=Math.atan2(_,-m)*180/Math.PI;return Math.max(fo,Math.min(fi,Math.round(u/lo)))};let p=!1;wd(h,()=>{var d;p=!1,(d=this.onNotch)==null||d.call(this,0)}),h.addEventListener("pointerdown",d=>{var g;d.preventDefault(),p=!0,h.setPointerCapture(d.pointerId),(g=this.onNotch)==null||g.call(this,f(d))}),h.addEventListener("pointermove",d=>{var g;return p&&((g=this.onNotch)==null?void 0:g.call(this,f(d)))}),h.addEventListener("pointerup",()=>p=!1),h.addEventListener("pointercancel",()=>p=!1)}setHelm(t){const e=`${t.notch}|${t.speedMph.toFixed(1)}`;e!==this.lastHelm&&(this.lastHelm=e,this.paintNotch(t.notch),this.speedEl.textContent=t.speedMph.toFixed(1));const n=`<span class="chip-time">${t.clock} · ${t.timeScale}×</span>`;this.chip.innerHTML!==n&&(this.chip.innerHTML=n)}setTrip(t){const e=JSON.stringify(t);if(e===this.lastTrip)return;this.lastTrip=e,this.tripTapOffers=!1,this.trip.hidden=t.state==="none",t.state==="none"&&this.trip.classList.remove("open");const n=t.state==="active"?`<span class="ico">🎯</span>${t.where}`:t.state==="done"?'<span class="ico">✅</span>Mission complete · <kbd>Enter</kbd>':'<span class="ico">🧭</span>Just cruising · tap for a trip';this.trip.querySelector(".head").innerHTML=n,this.trip.querySelector(".more").innerHTML=t.state==="none"?"":`<div class="eyebrow">Mission · ${t.title}</div><div>${t.brief}</div>`,this.trip.classList.toggle("idle",t.state==="none")}showOffer(t,e,n,i="Accept",o="Not now"){this.offer.innerHTML=`
      <div class="eyebrow">${t}</div>
      <div class="title">${e}</div>
      <p>${n}</p>
      <div class="buttons">
        <button data-act="nextTrip" class="go"><kbd>Enter</kbd> ${i}</button>
        <button data-act="declineTrip"><kbd>Esc</kbd> ${o}</button>
      </div>`,this.offer.hidden=!1}setLift(t){this.lift.hidden=!t,t&&(t=bd(t)),t&&this.lift.textContent!==t&&(this.lift.innerHTML=`<div class="head"><span class="ico">🧑</span>${t}</div>`)}hideOffer(){this.offer.hidden=!0}get offerOpen(){return!this.offer.hidden}setPrompt(t){this.promptKey=(t==null?void 0:t.key)??"";const e=t?`<kbd>${t.key}</kbd> ${t.text}`:"";e!==this.lastPrompt&&(this.lastPrompt=e,this.promptEl.innerHTML=e,this.promptEl.classList.toggle("waiting",!!t&&!t.ready)),this.promptEl.hidden=!t}showSummary(t,e,n){const i=Math.floor(t.hours),o=Math.round((t.hours-i)*60);this.summary.innerHTML=`
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
      <button><kbd>Enter</kbd> Carry on</button>`,this.summary.hidden=!1}hideSummary(){this.summary.hidden=!0}get isWinding(){return this.winding}nope(t,e=!0){this.nopeText=t,this.nopeWarn=e,this.nopeUntil=performance.now()+3e3,this.lastLock=""}showWorldTip(t,e,n,i=""){const o=this.lockPanel.parentElement.getBoundingClientRect();this.tip.textContent!==t&&(this.tip.textContent=t),this.tip.className=`lock-tip ${i}`,this.tip.style.left=`${e-o.left}px`,this.tip.style.top=`${n-o.top}px`,this.tip.hidden=!1}setLockPanel(t){const e=t==null?void 0:t.step;if(this.tip.hidden=!0,!t||!e){this.lockPanel.hidden=!0,this.lockPanel.parentElement.classList.remove("in-lock"),this.lastLock="",this.winding=!1;return}const n=e.group;this.winding=n.gates.some(a=>a.paddle>0&&a.paddle<1);const i=performance.now()<this.nopeUntil,o=i?this.nopeText:t.volunteers==="active"?`Volunteers: ${e.text}`:e.text,r=`<span class="lp-title">${n.name} ${e.uphill?"↑":"↓"}</span><span class="lp-status">${i?`<b>${o}</b>`:o}</span>`;r!==this.lastLock&&(this.lastLock=r,this.lockPanel.innerHTML=r,this.lockPanel.classList.toggle("warn",i&&this.nopeWarn)),this.lockPanel.hidden=!1,this.lockPanel.parentElement.classList.add("in-lock")}}const lo=15,es={x:62,y:68,w:124,h:76},Sd="canal.installDismissed",Ed="canal.appInstalled";function $y(s){const t=matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches||navigator.standalone;if(!Yn||t)return;try{if(sessionStorage.getItem(Sd)||localStorage.getItem(Ed))return}catch{}const e=navigator.userAgent,n=/iPhone|iPad|iPod/.test(e)||e.includes("Mac")&&navigator.maxTouchPoints>1,i=/CriOS|EdgiOS/.test(e),o=document.createElement("div");o.className="install card",o.hidden=!0,s.appendChild(o);const r=(c,h=!1,f=!1)=>{o.innerHTML=`
      <div class="eyebrow">Get the app</div>
      <div class="title">Install Canal as an app</div>
      <p>Free, no app store. It runs full screen with no browser bars, works better with touch, and opens from your home screen like any other app.</p>
      ${c}
      <div class="buttons">
        ${h?'<button class="go" data-act="install">Install app</button>':""}
        ${f?'<button data-act="have">I already have it</button>':""}
        <button data-act="later">Not now</button>
      </div>`,o.hidden=!1};let a=null;o.addEventListener("click",async c=>{var f;const h=(f=c.target.closest("button"))==null?void 0:f.dataset.act;if(h==="install"&&a)await a.prompt(),a=null,o.hidden=!0;else if(h==="have"){o.hidden=!0;try{localStorage.setItem(Ed,"1")}catch{}}else if(h==="later"){o.hidden=!0;try{sessionStorage.setItem(Sd,"1")}catch{}}});const l='<svg class="ios-share" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M6 11H5v10h14V11h-1"/></svg>';if(n){const c=i?`Tap Share ${l} in the address bar at the top`:/FxiOS/.test(e)?`Tap the ☰ menu, then Share ${l}`:`Tap <b>•••</b> next to the address bar, then Share ${l} (if you see ${l} already, just tap that)`;r(`<ol>
      <li>${c}</li>
      <li>Scroll down and tap <b>Add to Home Screen</b>, then <b>Add</b></li>
      <li>Open Canal from its new icon on your home screen</li>
    </ol>`,!1,!0)}else addEventListener("beforeinstallprompt",c=>{c.preventDefault(),a=c,r("",!0)}),addEventListener("appinstalled",()=>o.hidden=!0)}const Yl="canal.rep",pa=[[-1/0,"a menace on the cut","😠"],[-40,"a bit of a liability","😟"],[-15,"new on the cut","😐"],[15,"a friendly boat","🙂"],[30,"a courteous boat","😊"],[50,"a canal vlogger","😄"],[75,"canal famous","🤩"]];class qy{constructor(){I(this,"score",0);I(this,"lastAt",new Map);I(this,"onStanding",null);I(this,"onChange",null);try{this.score=Number(localStorage.getItem(Yl))||0}catch{}const t=new URLSearchParams(location.search).get("rep");if(t!==null){this.score=Math.max(-100,Math.min(100,Number(t)||0));try{localStorage.setItem(Yl,String(this.score))}catch{}}}get standing(){return pa.filter(([t])=>this.score>=t).at(-1)[1]}get face(){return pa.filter(([t])=>this.score>=t).at(-1)[2]}get next(){const t=pa.find(([e])=>e>this.score);return t?{text:t[1],face:t[2],need:Math.ceil(t[0]-this.score)}:null}atLeast(t){var n;const e=((n=pa.find(([,i])=>i===t))==null?void 0:n[0])??0;return this.score>=e}change(t,e,n=8){var a,l;const i=performance.now()/1e3;if(i-(this.lastAt.get(e)??-1/0)<n)return;this.lastAt.set(e,i),t>0&&this.score<0&&(t=Math.round(t*(1-this.score/50)));const o=this.standing;this.score=Math.max(-100,Math.min(100,this.score+t));try{localStorage.setItem(Yl,String(Math.round(this.score)))}catch{}(a=this.onChange)==null||a.call(this,t,e);const r=this.standing;r!==o&&((l=this.onStanding)==null||l.call(this,r,t>0))}}const Th=[{boat:"Silver Fox",crew:["Colin","Shaun"]},{boat:"Silver Fox II",crew:["Colin","Shaun"]},{boat:"Alice Grace",crew:["Vanessa"]},{boat:"The Rum Wench",crew:["Heidi"]},{boat:"The Raman Rose",crew:["Adam","Lauren"]},{boat:"Aslan",crew:[]},{boat:"Phyllis May",crew:["Ben","Emily"]},{boat:"Dexter's Star",crew:["Paul","Anthony"]},{boat:"Laura Maisie",crew:["Fran","Rich"]},{boat:"Alice",crew:["Jono"]},{boat:"Naughty Lass",crew:["Robbie"]},{boat:"May Moon",crew:["Laura"]},{boat:"Alba",crew:[]},{boat:"Lazy Daze",crew:["Alan"]},{boat:"Thistle & Rose",crew:["Rozzie","Rob"]},{boat:"Grey Wagtail",crew:["Nick"]},{boat:"Liberty",crew:[]},{boat:"Mary L",crew:["Tim","Sam"]},{boat:"Ganymede",crew:["Jemma"]},{boat:"Lydia",crew:[]},{boat:"Petra",crew:["Dan"]},{boat:"Maggie May",crew:[]},{boat:"Moonshine",crew:[]}],Yy=["David","Colin","Shaun","Vanessa","Heidi","Adam","Lauren","Joanna","Victor","Ben","Emily","Josh","Diane","Andy","Paul","Anthony","Fran","Rich","Kris","Andrew","Jono","Annamarie","Kath","Robbie","Laura","Jo","Michael","Gary","Alan","Lorna","Maggie","Ryan","Rozzie","Rob","Nick","Amy","Wes","Matt","Ali","Tim","Sam","James","Jemma","Will","Betty","Joe","Chris","Dan"],Td="canal.galley",jy=6,La=6,Ad=.15,jl=.1,ma=2;class Ky{constructor(){I(this,"hunger",.2);I(this,"food",4);I(this,"water",.8);I(this,"gas",.7);I(this,"heat",.6);I(this,"diesel",.7);I(this,"lastMeal",-99);I(this,"saveAt",0);try{const e=JSON.parse(localStorage.getItem(Td)??"null");if(e)for(const n of["hunger","food","water","gas","heat","diesel"])typeof e[n]=="number"&&(this[n]=e[n])}catch{}const t=Number(new URLSearchParams(location.search).get("hunger"));t&&(this.hunger=Math.min(1,t))}tick(t,e,n,i){this.hunger=Math.min(1,this.hunger+t/jy*(e?1.5:1)),this.water=Math.max(0,this.water-t*.02),n>0&&(this.diesel=Math.max(0,this.diesel-t*(.012+.04*n))),i&&(this.heat=Math.max(0,this.heat-t*.028)),performance.now()>this.saveAt&&(this.saveAt=performance.now()+5e3,this.save())}get hungry(){return this.hunger>.6}get starving(){return this.hunger>.85}get larderLow(){return this.food<=1}get waterLow(){return this.water<.25}get gasLow(){return this.gas<jl*2}get heatLow(){return this.heat<.15}get dieselLow(){return this.diesel<.15}cannotCook(t){return t?this.food<1?"The larder is bare. Stock up at Tesco or Waitrose, or eat out.":this.water<Ad?"Not enough water in the tank to cook. Fill up at a water point.":this.gas<jl?"The gas bottle is empty. Get a new one off the fuel boat, or eat out.":null:"Moor up first: nobody cooks on the move."}eat(t){this.hunger=0,this.lastMeal=t,this.save()}cook(t){this.food-=1,this.water=Math.max(0,this.water-Ad),this.gas=Math.max(0,this.gas-jl),this.eat(t)}restock(){this.food=La,this.save()}fillWater(){this.water=1,this.save()}wake(t){const e=t-this.lastMeal<14,n=this.heat>.02;return this.hunger=Math.min(1,(e?.3:.75)+(n?0:.15)),this.save(),{fed:e,warm:n}}refuel(){this.diesel=this.gas=this.heat=1,this.save()}payMeals(t){return this.food<t?!1:(this.food-=t,this.save(),!0)}addHeat(t){this.heat=Math.min(1,this.heat+t),this.save()}save(){try{const{hunger:t,food:e,water:n,gas:i,heat:o,diesel:r}=this;localStorage.setItem(Td,JSON.stringify({hunger:t,food:e,water:n,gas:i,heat:o,diesel:r}))}catch{}}}const Rd="canal.boat",cr=6e3,Cd=[{part:"a 13mm socket",shop:"Halfords"},{part:"a replacement fan belt",shop:"Halfords"},{part:"two metres of hose and some jubilee clips",shop:"B&Q"},{part:"a pot of gasket sealant",shop:"Screwfix"},{part:"a tube of silicone and a bag of cable ties",shop:"Toolstation"},{part:"a tin of paint in exactly the right shade of green",shop:"Wickes"},{part:"a pipe fitting nobody's heard of",shop:"the plumbers’ merchant"},{part:"a very specific washer",shop:"Screwfix"}];class Zy{constructor(){I(this,"damage",0);I(this,"partsFetched",0);I(this,"needPart",null);try{const e=JSON.parse(localStorage.getItem(Rd)??"null");e&&Object.assign(this,e)}catch{}const t=Number(new URLSearchParams(location.search).get("damage"));t&&(this.damage=Math.min(1,t))}get limping(){return this.damage>.5}knock(t){if(t<cr)return 0;const e=Math.min(.15,.03+(t-cr)/6e4);return this.damage=Math.min(1,this.damage+e),this.save(),e}attempt(){const t=Math.min(.95,.3+this.partsFetched*.22);return Math.random()<t?(this.damage=Math.max(0,this.damage-.3),this.partsFetched=0,this.needPart=null,this.save(),!0):(this.needPart=Cd[Math.floor(Math.random()*Cd.length)],this.save(),!1)}fetched(){this.partsFetched++,this.needPart=null,this.save()}fullRepair(){this.damage=0,this.partsFetched=0,this.needPart=null,this.save()}save(){try{localStorage.setItem(Rd,JSON.stringify({damage:this.damage,partsFetched:this.partsFetched,needPart:this.needPart}))}catch{}}}const Jy=17,Pd=4.2;function Qy(s,t,e,n,i){const o=new St,r=new Yt({color:"#8a6450",roughness:.95,flatShading:!0}),a=new Yt({color:"#2b2f33",roughness:.6,metalness:.4}),l=new Yt({color:"#6e675c",roughness:.9}),c=(u,M=!0)=>(u.castShadow=M,u.receiveShadow=!0,o.add(u),u),h=u=>{const M=s.frame(u);return Math.atan2(M.tx,M.tz)},f=u=>t.bedAt(u)-.15,p=4;for(let u=n;u<i;u+=p){const M=Math.min(p,i-u),x=u+M/2,v=s.frame(x),T=t.halfWidthAt(x),E=t.levelAt(x),b=f(x),R=h(x),S=(z,q,V)=>(V.position.set(v.x+v.nx*z,q,v.z+v.nz*z),V.rotation.y=R,c(V));S(0,b-.15,new Y(new gt(T*2+.5,.3,M+.05),a));const y=E+.25-(b-.3);S(-Xt*(T+.12),b-.3+y/2,new Y(new gt(.25,y,M+.05),a));const P=T-.4,w=T+2.1,N=e.bankTop(x);S(Xt*(P+w)/2,N-.1,new Y(new gt(w-P,.2,M+.05),l)),S(Xt*(T+.12),(b-.3+N)/2,new Y(new gt(.25,N-b+.3,M+.05),a)),S(Xt*(w-.05),N+1.05,new Y(new gt(.06,.06,M+.05),a)),S(Xt*(w-.05),N+.55,new Y(new gt(.05,.05,M+.05),a)),S(Xt*(w-.05),N+.5,new Y(new gt(.06,1,.06),a))}for(const[u,M]of[[n,n+ls],[i-ls,i]])for(let v=u;v<M;v+=4){const T=v+2,E=s.frame(T),b=t.halfWidthAt(T),R=f(T)-.3,S=Xt*.9,y=Math.min(...[-1,0,1].map(N=>e.heightAt(E.x+E.nx*N*6,E.z+E.nz*N*6))),P=Math.max(1,R-y+1.5),w=c(new Y(new gt(b*2+3,P,4+.05),r));w.position.set(E.x+E.nx*S,R-P/2,E.z+E.nz*S),w.rotation.y=h(T)}const d=n+ls,g=i-ls,_=Math.max(1,Math.round((g-d)/Jy)),m=[];for(let u=0;u<=_;u++)m.push(d+(g-d)*u/_);for(const u of m){const M=s.frame(u),x=f(u)-.3,v=e.heightAt(M.x,M.z),T=Math.max(1,x-v+1.5),E=new qt(Math.SQRT1_2,Math.SQRT1_2*(1+T/45),T,4,1).rotateY(Math.PI/4),b=c(new Y(E,r)),R=t.halfWidthAt(u)*2+2.4;b.scale.set(R,1,2.2),b.position.set(M.x+M.nx*Xt*.9,x-T/2,M.z+M.nz*Xt*.9),b.rotation.y=h(u);const S=c(new Y(new gt(R+.6,.5,2.6),r));S.position.set(b.position.x,x-.25,b.position.z),S.rotation.y=h(u)}for(let u=0;u<_;u++){const M=m[u],x=m[u+1],v=(M+x)/2,T=s.frame(v),E=(x-M)/2,b=t.halfWidthAt(v),R=f(v)-.3;for(const S of[-(b-.2),-(b-.2)/3,(b-.2)/3,b-.2]){const y=c(new Y(new dn(E,.22,6,24,Math.PI),a));y.scale.set(1,Pd/E,1.6),y.rotation.y=h(v)-Math.PI/2,y.position.set(T.x+T.nx*S,R-Pd,T.z+T.nz*S)}}return o}const un=.5,Ld=650;class tb{constructor(t,e,n,i){I(this,"el");I(this,"bigEl");I(this,"base");I(this,"locks");I(this,"bigOpen",!1);I(this,"dest",null);I(this,"pan",null);I(this,"wasOpen",!1);I(this,"bigTx",{ox:0,oz:0,sk:1,dpr:1});I(this,"dragAt",null);I(this,"onTeleport",null);I(this,"places",[]);I(this,"hazards",[]);I(this,"missionStarts",[]);I(this,"missionStartsFaded",!1);I(this,"water",[]);I(this,"fuelBoat",null);I(this,"liftDest",null);this.b=i;const o=this.base=document.createElement("canvas");o.width=Math.ceil((i.x1-i.x0)*un),o.height=Math.ceil((i.z1-i.z0)*un);const r=o.getContext("2d"),a=f=>(f-i.x0)*un,l=f=>(f-i.z0)*un,c=(f,p)=>{r.beginPath();for(let d=0;d<f.length;d+=2)(d?r.lineTo:r.moveTo).call(r,a(f[d]),l(f[d+1]));p&&r.closePath()};r.fillStyle="#e5e9d2",r.fillRect(0,0,o.width,o.height),r.fillStyle="#c9dcaa";for(const f of t.parks)c(f.p,!0),r.fill();r.fillStyle="#9cc3d2";for(const f of t.water)c(f.p,!0),r.fill();r.strokeStyle="#9cc3d2",r.lineCap=r.lineJoin="round";for(const f of t.rivers)r.lineWidth=f.w*un,c(f.p,!1),r.stroke();r.fillStyle="#d2c3ae";for(const f of t.buildings)c(f.p,!0),r.fill();for(const f of[0,1])for(const p of t.roads)p.w<3||(r.strokeStyle=f?"#ffffff":"#b9b2a4",r.lineWidth=p.w*un+(f?0:1.5),c(p.p,!1),r.stroke());r.strokeStyle="#5b5550",r.lineWidth=1.5,r.setLineDash([4,3]);for(const f of t.rails)c(f.p,!1),r.stroke();r.setLineDash([]),r.strokeStyle="#2f7aa0",r.lineWidth=4,c(t.centreline,!1),r.stroke();const h=new Map;for(const f of n.gates){const p=e.frame(f.s);let d=h.get(f.lockName);d||h.set(f.lockName,d={name:f.lockName,x:0,z:0,gates:[]}),d.gates.push({x:p.x,z:p.z,nx:p.nx,nz:p.nz})}for(const f of h.values())f.x=f.gates.reduce((p,d)=>p+d.x,0)/f.gates.length,f.z=f.gates.reduce((p,d)=>p+d.z,0)/f.gates.length;this.locks=[...h.values()],this.el=document.createElement("canvas"),this.el.className="minimap",this.el.width=this.el.height=440,this.bigEl=document.createElement("canvas"),this.bigEl.className="bigmap",Yn&&this.enablePan()}enablePan(){const t=this.bigEl;let e=null,n=!1;t.addEventListener("pointerdown",o=>{this.dragAt||(e={x:o.clientX,y:o.clientY,id:o.pointerId},n=!1,t.setPointerCapture(o.pointerId))}),t.addEventListener("pointermove",o=>{if(!e||o.pointerId!==e.id||!this.pan)return;const r=o.clientX-e.x,a=o.clientY-e.y;if(!n&&Math.hypot(r,a)<8)return;n=!0;const l=this.bigTx.dpr;this.pan=[this.pan[0]+r*l,this.pan[1]+a*l],e.x=o.clientX,e.y=o.clientY});const i=()=>e=null;t.addEventListener("pointerup",i),t.addEventListener("pointercancel",i),t.addEventListener("click",o=>{n&&(o.stopImmediatePropagation(),n=!1)},{capture:!0})}draw(t,e,n){const i=this.el.getContext("2d"),o=this.el.width,r=Ld*un,a=(t-this.b.x0)*un-r/2,l=(e-this.b.z0)*un-r/2;i.fillStyle="#e5e9d2",i.fillRect(0,0,o,o),i.drawImage(this.base,a,l,r,r,0,0,o,o);const c=o/Ld,h=(f,p)=>[o/2+(f-t)*c,o/2+(p-e)*c];if(this.drawPlaces(i,h,2,!1),this.drawLocks(i,h,2,9),this.drawDestination(i,h,2,o),this.drawDestination(i,h,2,o,this.liftDest,"#5aa0e0","#1d3557"),this.drawWater(i,h,2),this.drawFuelBoat(i,h,2),this.drawHazards(i,h,2),this.drawMissionStarts(i,h,2),this.boatMarker(i,o/2,o/2,n,1.6),this.bigOpen){const f=this.bigEl,p=Math.min(2,devicePixelRatio);f.width=f.clientWidth*p,f.height=f.clientHeight*p;const d=f.getContext("2d"),_=(Yn?Math.max:Math.min)(f.width/this.base.width,f.height/this.base.height);let m=(f.width-this.base.width*_)/2,u=(f.height-this.base.height*_)/2;if(Yn){(!this.wasOpen||!this.pan)&&(this.pan=[-((t-this.b.x0)*un*_+m-f.width/2),-((e-this.b.z0)*un*_+u-f.height/2)]);const E=Math.max(0,-m),b=Math.max(0,-u);this.pan=[Math.max(-E,Math.min(E,this.pan[0])),Math.max(-b,Math.min(b,this.pan[1]))],m+=this.pan[0],u+=this.pan[1]}d.fillStyle="#e5e9d2",d.fillRect(0,0,f.width,f.height),d.drawImage(this.base,m,u,this.base.width*_,this.base.height*_);const M=un*_,x=(E,b)=>[m+(E-this.b.x0)*M,u+(b-this.b.z0)*M];this.drawPlaces(d,x,p,!0),this.drawLocks(d,x,p,7),this.drawDestination(d,x,p*1.3,null),this.drawDestination(d,x,p*1.3,null,this.liftDest,"#5aa0e0","#1d3557"),this.drawWater(d,x,p*1.3),this.drawFuelBoat(d,x,p*1.3),this.drawHazards(d,x,p*1.3),this.drawMissionStarts(d,x,p*1.3),this.bigTx={ox:m,oz:u,sk:M,dpr:p};const[v,T]=this.dragAt??x(t,e);this.boatMarker(d,v,T,n,1.4*p),this.onTeleport&&(d.font=`800 ${12*p}px Nunito, sans-serif`,d.fillStyle="#a3291f",d.fillText("DEV: drag the boat to move it",14*p,f.height-14*p))}this.wasOpen=this.bigOpen}enableDevTeleport(t,e){this.onTeleport=e;const n=this.bigEl,i=r=>{const a=n.getBoundingClientRect();return[(r.clientX-a.left)*this.bigTx.dpr,(r.clientY-a.top)*this.bigTx.dpr]};let o=!1;n.addEventListener("pointerdown",r=>{const{ox:a,oz:l,sk:c,dpr:h}=this.bigTx,[f,p]=t(),[d,g]=i(r);Math.hypot(d-(a+(f-this.b.x0)*c),g-(l+(p-this.b.z0)*c))>30*h||(this.dragAt=[d,g],o=!1,n.setPointerCapture(r.pointerId))}),n.addEventListener("pointermove",r=>{this.dragAt&&(this.dragAt=i(r),o=!0)}),n.addEventListener("pointerup",()=>{if(!this.dragAt)return;const{ox:r,oz:a,sk:l}=this.bigTx,[c,h]=this.dragAt;this.dragAt=null,o&&e(this.b.x0+(c-r)/l,this.b.z0+(h-a)/l)}),n.addEventListener("click",r=>{o&&(r.stopImmediatePropagation(),o=!1)},{capture:!0}),n.style.cursor="default"}addMooredBoats(t){const e=this.base.getContext("2d");e.fillStyle="#5b4a8a";for(const n of t)e.save(),e.translate((n.x-this.b.x0)*un,(n.z-this.b.z0)*un),e.rotate(-n.psi),e.fillRect(-Math.max(1.2,n.halfB*un),-n.halfL*un,Math.max(2.4,n.halfB*2*un),n.halfL*2*un),e.restore()}setPlaces(t){this.places=t}drawPlaces(t,e,n,i){t.save(),t.textAlign="center",t.textBaseline="middle";const o=[];for(const r of this.places){const[a,l]=e(r.x,r.z);if(!(a<-20||l<-20||a>t.canvas.width+20||l>t.canvas.height+20)&&(t.fillStyle="rgba(255, 250, 235, 0.95)",t.strokeStyle=r.icon==="★"?"#1d3557":"#6e1f1a",t.lineWidth=1.5*n,t.beginPath(),t.arc(a,l,9*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#1d3557",t.font=`${r.icon==="★"?800:400} ${11*n}px Nunito, sans-serif`,t.fillText(r.icon,a,l+.5*n),i)){t.font=`700 ${10*n}px Nunito, sans-serif`;const c=t.measureText(r.name).width,h=a-c/2,f=l+11*n,p=l+23*n;if(o.some(([d,g,_,m])=>h<_&&h+c>d&&f<m&&p>g))continue;o.push([h-4*n,f,h+c+4*n,p]),t.lineWidth=3*n,t.strokeStyle="rgba(255,255,255,0.9)",t.strokeText(r.name,a,l+17*n),t.fillStyle="#3a2a1a",t.fillText(r.name,a,l+17*n)}}t.restore()}setMissionStarts(t,e=!1){this.missionStarts=t,this.missionStartsFaded=e}drawMissionStarts(t,e,n){t.save(),t.textAlign="center",t.textBaseline="middle",t.globalAlpha=this.missionStartsFaded?.45:1;for(const[i,o]of this.missionStarts){const[r,a]=e(i,o);t.fillStyle="#5ec27a",t.strokeStyle="#1f4d3a",t.lineWidth=2*n,t.beginPath(),t.arc(r,a-12*n,8*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#10261c",t.font=`900 ${11*n}px Nunito, sans-serif`,t.fillText("!",r,a-11.5*n)}t.restore()}drawFuelBoat(t,e,n){if(!this.fuelBoat)return;const[i,o]=e(this.fuelBoat[0],this.fuelBoat[1]);t.save(),t.fillStyle="#e8822c",t.strokeStyle="#ffffff",t.lineWidth=2*n,t.beginPath(),t.arc(i,o,6*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#ffffff",t.font=`800 ${8*n}px Nunito, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("F",i,o+.5*n),t.restore()}setWaterPoints(t){this.water=t}drawWater(t,e,n){t.save(),t.fillStyle="#2f8fd8",t.strokeStyle="#ffffff",t.lineWidth=1.5*n;for(const[i,o]of this.water){const[r,a]=e(i,o);t.beginPath(),t.moveTo(r,a-7*n),t.bezierCurveTo(r+5*n,a-1*n,r+4.5*n,a+5*n,r,a+5*n),t.bezierCurveTo(r-4.5*n,a+5*n,r-5*n,a-1*n,r,a-7*n),t.fill(),t.stroke()}t.restore()}setHazards(t){this.hazards=t}drawHazards(t,e,n){for(const[i,o]of this.hazards)this.drawHazard(t,e(i,o),n)}drawHazard(t,[e,n],i){t.save(),t.fillStyle="#ffcf4a",t.strokeStyle="#7a2f00",t.lineWidth=1.5*i,t.beginPath(),t.moveTo(e,n-10*i),t.lineTo(e+9*i,n+6*i),t.lineTo(e-9*i,n+6*i),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#7a2f00",t.font=`900 ${10*i}px Nunito, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("!",e,n+1*i),t.restore()}clearDestination(){this.dest=null}setDestination(t,e,n){this.dest={x:t,z:e,name:n}}drawDestination(t,e,n,i,o=this.dest,r="#ffcf4a",a="#7a5a10"){if(!o)return;let[l,c]=e(o.x,o.z);if(i!==null){const h=i/2,f=l-h,p=c-h,d=Math.hypot(f,p),g=h-14*n;d>g&&(l=h+f/d*g,c=h+p/d*g)}t.save(),t.fillStyle=r,t.strokeStyle=a,t.lineWidth=1.5*n,t.beginPath(),t.moveTo(l,c),t.lineTo(l,c-18*n),t.stroke(),t.beginPath(),t.moveTo(l,c-18*n),t.lineTo(l+12*n,c-13.5*n),t.lineTo(l,c-9*n),t.closePath(),t.fill(),t.stroke(),t.restore()}drawLocks(t,e,n,i){t.save(),t.lineCap="round";for(const o of this.locks)for(const r of o.gates){const[a,l]=e(r.x,r.z),c=r.nx*i*n,h=r.nz*i*n;for(const[f,p]of[[5,"#ffffff"],[2.5,"#1b1b1b"]])t.strokeStyle=p,t.lineWidth=f*n,t.beginPath(),t.moveTo(a-c,l-h),t.lineTo(a+c,l+h),t.stroke()}t.font=`800 ${12*n}px Nunito, sans-serif`,t.textBaseline="middle";for(const o of this.locks){const[r,a]=e(o.x,o.z),l=o.gates.length>2?`${o.name} · ${o.gates.length-1} locks`:o.name,c=t.measureText(l).width,h=20*n,f=8*n,p=r-c/2-f,d=a-h-12*n;t.fillStyle="rgba(31, 77, 58, 0.94)",t.beginPath(),t.roundRect(p,d,c+f*2,h,h/2),t.fill(),t.beginPath(),t.moveTo(r-5*n,d+h-.5),t.lineTo(r+5*n,d+h-.5),t.lineTo(r,d+h+6*n),t.fill(),t.fillStyle="#f6efdd",t.fillText(l,p+f,d+h/2+n)}t.restore()}boatMarker(t,e,n,i,o){t.save(),t.translate(e,n),t.rotate(-i+Math.PI),t.scale(o,o),t.fillStyle="#a3291f",t.strokeStyle="#fff",t.lineWidth=2,t.beginPath(),t.moveTo(0,-11),t.lineTo(6,8),t.lineTo(0,4),t.lineTo(-6,8),t.closePath(),t.stroke(),t.fill(),t.restore()}}class eb{constructor(){I(this,"ctx",null);I(this,"master");I(this,"noise");I(this,"waterGain");I(this,"rumbleGain");I(this,"nextThump",0);I(this,"engine",null);I(this,"nextBird",0);I(this,"nextClick",0);I(this,"muted",nb())}start(){if(this.ctx)return;const t=this.ctx=new AudioContext;this.master=t.createGain(),this.master.gain.value=this.muted?0:.7,this.master.connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*2,t.sampleRate);const e=this.noise.getChannelData(0);for(let a=0;a<e.length;a++)e[a]=Math.random()*2-1;const n=t.createBufferSource();n.buffer=this.noise,n.loop=!0;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=900,this.waterGain=t.createGain(),this.waterGain.gain.value=0,n.connect(i).connect(this.waterGain).connect(this.master),n.start();const o=t.createBufferSource();o.buffer=this.noise,o.loop=!0;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=160,this.rumbleGain=t.createGain(),this.rumbleGain.gain.value=0,o.connect(r).connect(this.rumbleGain).connect(this.master),o.start(),this.loadEngine().catch(a=>console.warn("Engine samples unavailable, using synth",a))}async loadEngine(){const t=this.ctx,e=async c=>t.decodeAudioData(await(await fetch(c)).arrayBuffer()),[n,i]=await Promise.all([e("./audio/engine-idle.wav"),e("./audio/engine-run.wav")]),o=(c,h)=>{const f=t.createBufferSource();return f.buffer=c,f.loop=!0,f.connect(h),f.start(),f},r=t.createGain(),a=t.createGain();r.gain.value=a.gain.value=0;const l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=2400,r.connect(l),a.connect(l),l.connect(this.master),this.engine={idle:o(n,r),run:o(i,a),idleGain:r,runGain:a}}toggleMute(){this.muted=!this.muted,this.ctx&&(this.master.gain.value=this.muted?0:.7);try{localStorage.setItem("canal.muted",this.muted?"1":"0")}catch{}}update(t,e,n,i){const o=this.ctx;if(!o)return;const r=o.currentTime,a=Math.abs(t);if(this.engine){const l=this.engine,c=Math.min(1,a*.4);l.idleGain.gain.setTargetAtTime((1-c)*.55,r,.25),l.runGain.gain.setTargetAtTime(c*(.45+a*.05),r,.25),l.idle.playbackRate.setTargetAtTime(1+a*.08,r,.4),l.run.playbackRate.setTargetAtTime(.62+Math.max(0,a-1)*.095,r,.4)}else{const l=7+a*1.9;for(this.nextThump<r&&(this.nextThump=r);this.nextThump<r+.1;)this.thump(this.nextThump,.22+a*.035),this.nextThump+=1/l}this.waterGain.gain.setTargetAtTime(Math.min(.35,e*.06),r,.3),n&&r>this.nextClick&&(this.click(r),this.nextClick=r+.13),i&&r>this.nextBird&&(this.nextBird>0&&this.bird(r),this.nextBird=r+4+Math.random()*9)}rumble(t){this.ctx&&this.rumbleGain.gain.setTargetAtTime(t*t*.9,this.ctx.currentTime,.3)}bump(t){const e=this.ctx;if(!e)return;const n=e.currentTime,i=e.createOscillator();i.frequency.setValueAtTime(70,n),i.frequency.exponentialRampToValueAtTime(35,n+.25);const o=e.createGain();o.gain.setValueAtTime(Math.min(.9,t),n),o.gain.exponentialRampToValueAtTime(.001,n+.35),i.connect(o).connect(this.master),i.start(n),i.stop(n+.4)}horn(){const t=this.ctx;if(!t)return;const e=t.currentTime,n=t.createGain();n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.22,e+.04),n.gain.setValueAtTime(.22,e+.7),n.gain.exponentialRampToValueAtTime(1e-4,e+.85);const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=1800,i.connect(n).connect(this.master);for(const o of[311,392]){const r=t.createOscillator();r.type="square",r.frequency.value=o,r.connect(i),r.start(e),r.stop(e+.9)}}quack(){const t=this.ctx;if(!t)return;const e=t.currentTime;for(let n=0;n<2;n++){const i=e+n*.16,o=t.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(520,i),o.frequency.exponentialRampToValueAtTime(330,i+.11);const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=1100,r.Q.value=3;const a=t.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(.25,i+.015),a.gain.exponentialRampToValueAtTime(1e-4,i+.12),o.connect(r).connect(a).connect(this.master),o.start(i),o.stop(i+.13)}}thump(t,e){const n=this.ctx,i=n.createOscillator();i.type="triangle",i.frequency.setValueAtTime(58,t),i.frequency.exponentialRampToValueAtTime(38,t+.08);const o=n.createGain();o.gain.setValueAtTime(e,t),o.gain.exponentialRampToValueAtTime(.001,t+.11),i.connect(o).connect(this.master),i.start(t),i.stop(t+.12);const r=n.createBufferSource();r.buffer=this.noise;const a=n.createBiquadFilter();a.type="bandpass",a.frequency.value=220;const l=n.createGain();l.gain.setValueAtTime(e*.5,t),l.gain.exponentialRampToValueAtTime(.001,t+.06),r.connect(a).connect(l).connect(this.master),r.start(t,Math.random(),.07)}click(t){const e=this.ctx,n=e.createBufferSource();n.buffer=this.noise;const i=e.createBiquadFilter();i.type="highpass",i.frequency.value=2500;const o=e.createGain();o.gain.setValueAtTime(.35,t),o.gain.exponentialRampToValueAtTime(.001,t+.03),n.connect(i).connect(o).connect(this.master),n.start(t,Math.random(),.04)}bird(t){const e=this.ctx,n=2+Math.floor(Math.random()*4),i=2600+Math.random()*1600;for(let o=0;o<n;o++){const r=t+o*(.09+Math.random()*.05),a=e.createOscillator();a.type="sine",a.frequency.setValueAtTime(i,r),a.frequency.exponentialRampToValueAtTime(i*(.7+Math.random()*.6),r+.07);const l=e.createGain();l.gain.setValueAtTime(1e-4,r),l.gain.exponentialRampToValueAtTime(.05,r+.01),l.gain.exponentialRampToValueAtTime(1e-4,r+.08),a.connect(l).connect(this.master),a.start(r),a.stop(r+.1)}}}function nb(){try{return localStorage.getItem("canal.muted")==="1"}catch{return!1}}const ga=.04,ib=90;function Dd(s,t,e){const n=ob(s,t,e);return n!=null&&n.keeper&&(n.text=sb(n)),n}function sb(s){const t=s.gate.label;switch(s.action){case"paddlesUp":return`Lock-keeper: ${s.text.charAt(0).toLowerCase()}${s.text.slice(1).replace(/\.$/,"")}…`;case"paddlesDown":return`Lock-keeper: dropping the ${t} paddles…`;case"close":return`Lock-keeper: closing the ${t}…`;case"open":return`Lock-keeper: opening the ${t}…`;case"wait":return`Lock-keeper: ${s.text.charAt(0).toLowerCase()}${s.text.slice(1)}`;default:return s.text}}function ob(s,t,e){const[n,i]=t,o=(n+i)/2;let r,a=1/0;for(const v of s.groups){const T=v.gates[0].s,E=v.gates.at(-1).s,b=e?T-o:o-E,R=o>T-2&&o<E+2,S=R?0:b;(R||b>0&&b<ib)&&S<a&&(a=S,r=v)}if(!r){for(const v of s.groups){const T=v.gates[0].s,E=v.gates.at(-1).s,b=e?o-E:T-o;if(b>0&&b<60){const R=v.gates.find(y=>y.wantPaddle)??v.gates.find(y=>y.wantOpen),S=e?v.gates.at(-1):v.gates[0];if(R)return{group:v,uphill:e,gate:R,boatBody:e?v.bodies.length-1:0,adjacent:[S],keeper:R!==S,action:R.wantPaddle?"paddlesDown":"close",text:R.wantPaddle?`Before you go: drop the paddles on the ${R.label} behind you.`:`Before you go: close the ${R.label} behind you.`}}}return null}const l=r.gates.length-1,c=e?r.gates:[...r.gates].reverse(),f=(e?r.bodies:[...r.bodies].reverse()).map(v=>s.bodies[v]),p=v=>e?v:l+1-v;let d=-1;for(let v=0;v<=l+1;v++){const T=f[v];n>=T.s0-.2&&i<=T.s1+.2&&(d=v)}const g=c.find(v=>v.s>n&&v.s<i),_=d<0?g?[g]:[]:d===l+1?[c[l]]:[c[d-1],c[d]].filter(v=>!!v),m=(v,T,E,b=d)=>({group:r,uphill:e,gate:v,action:T,text:E,boatBody:b<0?-1:p(b),adjacent:_,keeper:!!v&&!_.includes(v)&&T!=="drive"});if(d<0)return m(g??null,"drive","Keep going, nice and slow.");if(d===l+1){const v=r.gates.find(T=>T.wantPaddle)??r.gates.find(T=>T.wantOpen);return v?m(v,v.wantPaddle?"paddlesDown":"close",v.wantPaddle?`You're through! Drop the paddles on the ${v.label} behind you.`:`You're through! Close the ${v.label} behind you.`):null}const u=c[d],M=v=>v.label==="the canal"?v===f[0]?"the canal behind you":"the canal ahead":v.label;if(d>0&&c[d-1].wantOpen)return m(c[d-1],"close",`Close the ${c[d-1].label} behind you.`);if(Math.abs(f[d].level-f[d+1].level)<ga){for(const v of r.gates)if(v!==u&&v.wantPaddle)return m(v,"paddlesDown",`Drop the ${v.label} paddles so the water stays put.`)}else{const v=c.find(($,G)=>G!==d&&$.wantOpen);if(v)return m(v,"close",`First close the ${v.label}, or the water will just run away.`);const T=r.gates.filter($=>$.wantPaddle&&Math.abs(s.bodies[$.below].level-s.bodies[$.above].level)>=ga),E=T.find($=>$.paddle>.95&&Math.abs($.flow)<.001);if(E){const $=s.bodies[E.above];return m(E,"paddlesDown",`${Kl(M($))} ran dry before the levels matched. Drop these paddles so it can be topped up.`)}if(T.length>1)return m(T[1],"paddlesDown",`One set of paddles at a time: drop the ${T[1].label} paddles.`);if(T.length===1){const $=T[0],G=s.bodies[$.below],dt=s.bodies[$.above],pt=bh(dt.level-G.level),ot=dt.kind==="pound"?`Filling ${M(G)}`:G.kind==="pound"?`Emptying ${M(dt)}`:`${Kl(M(dt))} → ${M(G)}`;return m($,"wait",`${ot}… ${pt} to go`)}const b=$=>f[$].kind==="pound"||f[$].level>f[$].hi-ga,R=$=>f[$].kind==="pound"||f[$].level<f[$].lo+ga,S=($,G)=>c[Math.min($,G)],y=$=>e?$+1:$-1,P=$=>e?$-1:$+1,w=$=>{const G=y($);return b(G)?[S($,G),`fill ${M(f[$])} from ${M(f[G])}`]:w(G)},N=$=>{const G=P($);return R(G)?[S($,G),`empty ${M(f[$])} into ${M(f[G])}`]:N(G)};let z;if(f[d].kind==="pound"||f[d+1].kind==="pound"){const $=f[d].level>f[d+1].level?f[d]:f[d+1],G=$===f[d]?f[d+1]:f[d];z=[u,$.kind==="pound"?`fill ${M(G)} from ${M($)}`:`empty ${M($)} into ${M(G)}`]}else(e?!b(d+1):!R(d+1))?(z=e?w(d+1):N(d+1),z[1]=`first, ${z[1]}`):(e?!R(d):!b(d))?(z=e?N(d):w(d),z[1]=`first, ${z[1]}`):z=[u,`let ${M(f[e?d+1:d])} empty into ${M(f[e?d:d+1])}`];const[q,V]=z;for(const $ of r.gates)if($!==q&&$.wantPaddle)return m($,"paddlesDown",`Drop the ${$.label} paddles so the water stays put.`);return m(q,"paddlesUp",`${Kl(V)}.`)}return u.wantOpen?u.open<.97?m(u,"wait",`The ${u.label} are swinging open…`):u.wantPaddle?m(u,"paddlesDown",`Drop the paddles on the ${u.label}.`):m(u,"drive",`Gates open. Drive ${d+1===l+1?"out of the lock":`into ${M(f[d+1])}`}.`):m(u,"open",`Levels match: open the ${u.label}.`)}const Kl=s=>s.charAt(0).toUpperCase()+s.slice(1),Jf=1.69,We=(s,t={})=>new Yt({color:s,roughness:.6,flatShading:!0,...t}),Ie=(s,t,e,n,i,o,r=0,a=0,l=0)=>{const c=new Y(t,e);return c.position.set(n,i,o),c.rotation.set(r,a,l),c.castShadow=!0,s.add(c),c},Nn={buckby:{name:"a Buckby can",at:[.35,-6],build(){const s=new St;Ie(s,new qt(.17,.19,.5,12),We("#1f4d3a"),0,.25,0),Ie(s,new qt(.175,.185,.14,12),We("#a3291f"),0,.27,0);for(let t=0;t<4;t++)Ie(s,new Qe(.035,6,4),We(t%2?"#f2c94c":"#f4f1e8"),Math.sin(t*1.6)*.18,.27,Math.cos(t*1.6)*.18);return Ie(s,new qt(.1,.17,.08,12),We("#1f4d3a"),0,.54,0),Ie(s,new qt(.06,.06,.06,10),We("#c9a24a",{metalness:.8,roughness:.3}),0,.6,0),Ie(s,new dn(.11,.015,6,12,Math.PI),We("#1f4d3a"),0,.56,0),Ie(s,new qt(.025,.035,.22,6),We("#1f4d3a"),.17,.4,0,0,0,-.9),s}},bike:{name:"a bicycle",at:[-.15,2.4],build(){const s=new St,t=We("#1b1b1b"),e=We("#c0392b");for(const n of[-.5,.5])Ie(s,new dn(.3,.025,5,16),t,0,.04,n,Math.PI/2);return Ie(s,new gt(.04,.04,.95),e,0,.06,0),Ie(s,new gt(.04,.04,.5),e,.12,.06,.15,0,.5),Ie(s,new gt(.5,.03,.03),t,0,.07,.45),Ie(s,new gt(.1,.04,.2),t,0,.08,-.25),s}},lifebuoy:{name:"a lifebuoy",at:[-.4,-5.5],build(){const s=new St;for(let t=0;t<4;t++)Ie(s,new dn(.3,.075,6,6,Math.PI/2),We(t%2?"#f4f4f0":"#e0522f"),0,.08,0,Math.PI/2,0,t*Math.PI/2);return s}},brasses:{name:"polished chimney brasses",at:[.45,3.7],build(){const s=new St,t=We("#e2b84a",{metalness:.9,roughness:.2});for(const e of[.1,.32,.5])Ie(s,new qt(.08,.08,.04,10),t,0,e,0);for(let e=0;e<5;e++)Ie(s,new dn(.03,.008,4,8),t,.06+e*.03,.42-e*.07,0,0,0,e%2?0:Math.PI/2);return s}},logs:{name:"a stack of firewood",at:[.3,-2.6],build(){const s=new St,t=We("#6b4a2e"),e=We("#c9a27a");let n=0;for(let i=0;i<3;i++)for(let o=0;o<4-i;o++,n++){const r=Ie(s,new qt(.07,.07,.7,6),n%3?t:e,-.22+o*.15+i*.075,.07+i*.12,0,Math.PI/2);r.rotation.y=n%2*.05}return s}},coal:{name:"two sacks of coal",at:[.3,-1.3],build(){const s=new St;for(const t of[-.25,.25])Ie(s,new En(.22,1),We("#3a3a3a",{roughness:.95}),0,.14,t).scale.set(1,.65,1.15);return s}},cat:{name:"a ship’s cat",at:[-.3,4.5],build(){const s=new St,t=We("#d9822b");Ie(s,new Qe(.16,10,8),t,0,.1,0).scale.set(1,.6,1.25),Ie(s,new Qe(.09,10,8),t,.08,.13,.15);for(const e of[.03,.13])Ie(s,new xi(.03,.06,4),t,e,.22,.15);return Ie(s,new dn(.13,.025,5,10,Math.PI*1.2),t,0,.04,0,Math.PI/2,0,1),s}},gnome:{name:"a garden gnome",at:[.4,-4.9],build(){const s=new St;return Ie(s,new qt(.09,.11,.2,8),We("#2e86c1"),0,.1,0),Ie(s,new Qe(.07,8,6),We("#f1c6a5"),0,.26,0),Ie(s,new xi(.06,.12,6),We("#f4f4f0"),0,.2,.05,.3),Ie(s,new xi(.075,.2,8),We("#c0392b"),0,.4,0),s}},sunflower:{name:"a sunflower in a pot",at:[.4,1.4],build(){const s=new St;return Ie(s,new qt(.15,.11,.22,8),We("#9b5a3c"),0,.11,0),Ie(s,new qt(.015,.02,.7,5),We("#4f7a33"),0,.55,0),Ie(s,new qt(.13,.13,.03,12),We("#f2c94c"),0,.92,.02,1.2),Ie(s,new qt(.06,.06,.04,10),We("#5a3d22"),0,.92,.04,1.2),s}}},rb=["buckby","bike","lifebuoy","brasses"],ab=["cat","gnome","sunflower"];class lb{constructor(t){I(this,"owned",new Set);I(this,"meshes",new Map);this.boat=t;try{for(const e of JSON.parse(localStorage.getItem("canal.roof")??"[]"))e in Nn&&this.show(e)}catch{}}has(t){return this.owned.has(t)}give(t){if(this.owned.has(t))return!1;this.show(t);try{localStorage.setItem("canal.roof",JSON.stringify([...this.owned]))}catch{}return!0}take(t){const e=this.meshes.get(t);if(!e)return!1;this.boat.remove(e),this.meshes.delete(t),this.owned.delete(t);try{localStorage.setItem("canal.roof",JSON.stringify([...this.owned]))}catch{}return!0}nextFrom(t){return t.find(e=>!this.owned.has(e))??null}show(t){this.owned.add(t);const e=Nn[t],n=e.build();n.position.set(e.at[0],Jf,e.at[1]),this.boat.add(n),this.meshes.set(t,n)}}const cb=["buckby","bike","lifebuoy","logs","coal","gnome","sunflower","cat"],Id=[...Th.filter((s,t)=>t%2===1).map(s=>s.boat),"Kingfisher","Dunroamin","Willow","Morning Mist","Heron","Bramble","Otter","Lazy Days","Moorhen","Puddle Duck","Wren","Seren","Daisy May","Jubilee","Halcyon","Mallard","Badger","Tilly","Dragonfly","Rosie","Swallow","Nutmeg","Lily Pad","Bluebell","Damselfly","Kestrel","Second Wind","Tortoise","Meander","Sunflower","Jolly Roger","Dormouse","Albatross","Grebe","Primrose","Liberty","Plover","Hedgehog","Elderflower","Coot","Teasel","Old Bill","Marigold","Windrush","Peregrine","Thistle","Snowdrop","Toad Hall","Cobble","Foxglove","Pippin","Salamander","Spindle","Saffron","Sloe"],kd=["#1f4d3a","#7a1f2b","#1d3557","#2e2a4a","#5a3d1e","#2f5d62","#6b2737","#264d2a","#3b4a6b","#8a5a1e"],Ud=["#7c2f23","#3a3d40","#d9ccaa","#2b2b2b","#8a7650","#4a5a3a"];class hb{constructor(t,e,n,i,o,r,a,l){I(this,"group",new St);I(this,"boats",[]);I(this,"zones");I(this,"highlight");I(this,"marker");I(this,"time",0);I(this,"night",!1);I(this,"hour",12);I(this,"viewer",{x:0,z:0});I(this,"litWindows");I(this,"litMats",[]);I(this,"puffs",[]);I(this,"liftMarker",null);I(this,"stopMarkers",new Map);I(this,"starts",new Map);this.route=t,this.ww=e,this.terrain=n,this.zones=l?l.map(m=>({...m,kind:"visitor"})):[{id:"tower",name:"Tower Wharf",kind:"visitor",s0:o+10,s1:o+55},{id:"city",name:"City moorings, Cow Lane Bridge",kind:"visitor",s0:1150,s1:1215},{id:"hoole",name:"Hoole",kind:"visitor",s0:2050,s1:2110},{id:"christleton",name:"Christleton",kind:"visitor",s0:4345,s1:4400}];const c=(m,u)=>e.gates.every(M=>M.s<m-35||M.s>u+35)&&i.every(M=>M.s<m-M.w/2-12||M.s>u+M.w/2+12)&&e.windingHoles.every(M=>M<m-45||M>u+45)&&this.zones.every(M=>M.s1<m-8||M.s0>u+8)&&e.bodies[e.bodyIndexAt((m+u)/2)].kind==="pound",h=m=>!/drive.?thru/i.test(m.name)||/^Costa/.test(m.name),f=a.filter(m=>m.type==="stop"&&h(m)).map(m=>({...m,name:m.name.replace(/\s*drive.?thru\s*/i,"")})).sort((m,u)=>m.rank-u.rank||m.dist-u.dist);for(const m of f){const u=M=>M==="supermarket";if(!(!u(m.kind)&&this.zones.some(M=>{var x;return M.kind==="stop"&&!u((x=M.poi)==null?void 0:x.kind)&&Math.abs((M.s0+M.s1)/2-m.s)<120})))for(const M of[0,8,-8,16,-16,24,-24,32,-32,45,-45,60,-60]){const x=m.s+M-18,v=m.s+M+18;if(!(x<30||v>t.length-30||!c(x,v))){this.zones.push({id:`stop:${m.name}`,name:m.name,kind:"stop",poi:m,s0:x,s1:v});break}}}for(const m of this.zones)this.buildZone(m);this.highlight=new Y(new xe,new Dn({color:"#ffd76a",transparent:!0,opacity:.5,depthWrite:!1})),this.group.add(this.highlight),this.marker=Qc(),this.group.add(this.marker);const p=Gi(77),d=(m,u)=>m-u<40||m+u>t.length-40||e.gates.some(M=>Math.abs(M.s-m)<u+35)||i.some(M=>Math.abs(M.s-m)<u+M.w/2+14)||this.zones.some(M=>m+u>M.s0-6&&m-u<M.s1+6)||e.windingHoles.some(M=>Math.abs(M-m)<u+45)||Math.abs(m-r)<u+30||[m-u-15,m,m+u+15].some(M=>n.aqueductCore(M)>0)||e.bodies[e.bodyIndexAt(m)].kind!=="pound";let g=[...Id];for(let m=60;m<t.length-60;){const u=m>o-250&&m<o+220?.85:m>2900&&m<3250?.6:.32,M=p(),x=M<.12?9+p()*2.5:M<.35?12+p()*2.5:M<.8?15+p()*3:19+p()*2.4;if(p()<u&&!d(m+x/2,x/2)){const v=g.splice(Math.floor(p()*g.length),1)[0]??"Narrowboat";g.length||(g=[...Id]),this.addBoat(m+x/2,x,v,p),m+=x+1+p()*3}else m+=6+p()*14}this.litWindows=new Fn(new gt(.035,.32,.48),new Dn({color:"#ffc46b"}),Math.max(1,this.litMats.length)),this.litMats.forEach((m,u)=>this.litWindows.setMatrixAt(u,m)),this.litWindows.count=this.litMats.length,this.litWindows.visible=!1,this.group.add(this.litWindows);const _=mb();for(let m=0;m<70;m++){const u=new fh(new Ba({map:_,transparent:!0,depthWrite:!1,opacity:0}));u.visible=!1,this.group.add(u),this.puffs.push({sp:u,age:99,vx:0,vz:0})}}addBoat(t,e,n,i){const o=this.route.frame(t),a=(this.ww.halfWidthAt(t)-An/2-.12)*Xt,l=o.x+o.nx*a,c=o.z+o.nz*a,h=Math.atan2(o.tx,o.tz)+(i()<.5?0:Math.PI),f=Sh({name:n,length:e,crew:!1,pots:i()<.45,cabin:kd[Math.floor(i()*kd.length)],roof:Ud[Math.floor(i()*Ud.length)]}),p=f.roofSpan,d=f.chimneyTop.z,g=[];for(let x=p.z0+.7;x<p.z1-.4;x+=1.3)Math.abs(x-d)>.6&&g.push(x);for(let x=g.length-1;x>0;x--){const v=Math.floor(i()*(x+1));[g[x],g[v]]=[g[v],g[x]]}const _=[...cb].sort(()=>i()-.5).slice(0,Math.floor(i()*Math.min(4,g.length*.6+1)));i()<.5&&g.length&&_.unshift("solar"),_.slice(0,g.length).forEach((x,v)=>{const T=x==="solar"?gb(1+Math.floor(i()*Math.min(3,e/6))):Nn[x].build(),E=x==="solar"||x==="bike";T.position.set(E?0:i()<.5?-.3:.3,p.y,g[v]),T.rotation.y=x==="solar"?0:(i()-.5)*.6,f.group.add(T)});const m=Dy(f),u=this.ww.levelAt(t);m.position.set(l,u,c),m.rotation.order="YXZ",m.rotation.y=h,this.group.add(m),m.updateMatrixWorld(!0);const M={x:l,z:c,psi:h,halfL:e/2,halfB:An/2,name:n,s:t,group:m,baseY:u,rock:0,rockedAt:-99};if(i()<.55)for(const x of f.windows??[]){const v=new Me().makeTranslation(x.x+Math.sign(x.x)*.01,x.y,x.z);this.litMats.push(v.premultiply(m.matrixWorld))}if(i()<.35){const x=f.chimneyTop.clone().applyMatrix4(m.matrixWorld);M.smoke={x:x.x,y:x.y,z:x.z,seed:i()*100,next:0}}if(i()<.3){const x=["tea","polish","deck"][Math.floor(i()*3)],v=qn(Wi(i)),T=new St;T.add(v.group);const E=Math.cos(h-Math.atan2(o.tx,o.tz))>0?-1:1;if(x==="deck")v.group.position.set(0,.48,0),Mr(v),T.position.set(0,0,-e/2+.7),T.rotation.y=Math.PI,m.add(T);else{const b=x==="tea"?t+E*(e/2-1.5):t+(i()-.5)*e*.4,R=this.route.frame(b),S=(this.ww.halfWidthAt(b)+(x==="tea"?1.3:.55))*Xt;if(T.position.set(R.x+R.nx*S,this.terrain.bankTop(b),R.z+R.nz*S),T.rotation.y=Math.atan2(-R.nx*Xt,-R.nz*Xt),x==="tea"){T.add(vb()),Mr(v);const y=new Y(new qt(.045,.04,.1,8),new Yt({color:"#f4f1e8"}));y.position.set(0,-.58,.06),v.armR.add(y)}else _r(v);this.group.add(T)}M.out={person:v,group:T,what:x}}this.boats.push(M)}buildZone(t){const e=new Yt({color:"#2a2a2a",metalness:.6,roughness:.4});for(let r=t.s0;r<=t.s1;r+=6){const a=this.ww.halfWidthAt(r),[l,c]=this.route.point(r,(a+.35)*Xt),h=new Y(new dn(.14,.035,6,12),e);h.position.set(l,this.terrain.bankTop(r)+.07,c),h.rotation.x=Math.PI/2,this.group.add(h)}const n=this.route.frame(t.s0),i=(this.ww.halfWidthAt(t.s0)+2.9)*Xt,o=t.kind==="stop"?Nd([`Moorings for ${pb(t.poi)}`,t.name],"#6e1f1a"):Nd(["Visitor moorings",t.name]);o.position.set(n.x+n.nx*i,this.terrain.bankTop(t.s0),n.z+n.nz*i),o.rotation.y=Math.atan2(Xt*n.tz,-Xt*n.tx),this.group.add(o)}setActive(t){if(this.highlight.visible=this.marker.visible=!!t,!t)return;const e=[],n=[];let i=0;for(let c=t.s0;c<=t.s1+.01;c+=1.5,i++){const h=this.ww.halfWidthAt(c),f=this.terrain.bankTop(c)+.06;for(const p of[h-.05,h+.75]){const[d,g]=this.route.point(c,p*Xt);e.push(d,f,g)}i>0&&n.push((i-1)*2,(i-1)*2+1,i*2,(i-1)*2+1,i*2+1,i*2)}const o=new xe;o.setAttribute("position",new ne(e,3)),o.setIndex(n),this.highlight.material.side=He,this.highlight.geometry.dispose(),this.highlight.geometry=o;const r=(t.s0+t.s1)/2,[a,l]=this.route.point(r,(this.ww.halfWidthAt(r)+.4)*Xt);this.marker.position.set(a,this.terrain.bankTop(r)+4,l),this.marker.userData.y0=this.marker.position.y}rockBoat(t,e,n){t.rock=Math.min(.09,Math.max(t.rock,e)),t.rockedAt=this.time,n&&this.popOwner(t,"shake")}popOwner(t,e){if(t.owner)this.time>t.owner.until&&(t.owner.from=this.time),t.owner.until=this.time+5,t.owner.mode=e;else{const n=qn(Wi(Math.random));n.group.position.set(0,-.4,-t.halfL+2.45),t.group.add(n.group),t.owner={person:n,from:this.time,until:this.time+5,mode:e}}}chimney(t){const e=t.smoke;if(this.time<e.next||Math.abs(e.x-this.viewer.x)+Math.abs(e.z-this.viewer.z)>220)return;const n=this.night||Math.sin(this.time*.03+e.seed)>.1;if(e.next=this.time+(n?.7+Math.random()*.5:4),!n)return;const i=this.puffs.find(o=>o.age>6);i&&(i.age=0,i.sp.position.set(e.x,e.y,e.z),i.vx=.15+Math.random()*.1,i.vz=.05)}get now(){return this.time}update(t){var e;this.time+=t,this.litWindows.visible=this.night;for(const n of this.puffs){if(n.age>6)continue;n.age+=t;const i=n.age/6;n.sp.visible=i<1,n.sp.position.x+=n.vx*t,n.sp.position.z+=n.vz*t,n.sp.position.y+=t*.45,n.sp.scale.setScalar(.35+i*1.6),n.sp.material.opacity=.45*(1-i)*Math.min(1,n.age*3)}for(const n of this.boats){const i=n.owner;if(i){const o=Math.min(1,(this.time-i.from)/.5)*Math.min(1,Math.max(0,(i.until-this.time)/.5));i.person.group.position.y=-.4+o*1,i.person.group.visible=o>.01,Fi(i.person,o>.6?i.mode:"rest",this.time)}if(n.out){const o=!this.night&&this.hour>8.5&&this.hour<19.5;if(n.out.group.visible=o,o&&Math.abs(n.x-this.viewer.x)+Math.abs(n.z-this.viewer.z)<150){const r=n.out.person,a=this.time+n.s;if(n.out.what==="tea"){const l=Math.max(0,Math.sin(a*.5))**8;r.armR.rotation.set(-.5-l*1.6,0,-.1)}else n.out.what==="polish"&&(r.armR.rotation.set(-1.25+Math.sin(a*5)*.18,0,-.2+Math.cos(a*5)*.18),r.armL.rotation.set(0,0,.07))}}n.smoke&&this.chimney(n),!(n.rock<.001)&&(n.rock*=Math.exp(-t*.2),n.group.rotation.z=Math.sin(this.time*3.1)*n.rock,n.group.position.y=n.baseY+Math.sin(this.time*2.3)*n.rock*.6)}(e=this.liftMarker)!=null&&e.visible&&(this.liftMarker.position.y=this.liftMarker.userData.y0+Math.sin(this.time*1.6+2)*.25,this.liftMarker.rotation.y+=t*.9);for(const n of this.stopMarkers.values())n.visible&&(n.position.y=n.userData.y0+Math.sin(this.time*1.4+n.position.x)*.2,n.rotation.y+=t*.8);for(const n of this.starts.values())n.visible&&(n.position.y=n.userData.y0+Math.sin(this.time*1.6+1)*.25,n.children[0].rotation.y+=t*.9);this.marker.visible&&(this.marker.position.y=this.marker.userData.y0+Math.sin(this.time*1.6)*.25,this.marker.rotation.y+=t*.9,this.highlight.material.opacity=.35+.2*Math.sin(this.time*3))}setLiftDest(t){if(this.liftMarker||(this.liftMarker=Qc("#5aa0e0","#1d3d6b"),this.group.add(this.liftMarker)),this.liftMarker.visible=!!t,!t)return;const e=(t.s0+t.s1)/2,[n,i]=this.route.point(e,(this.ww.halfWidthAt(e)+.4)*Xt);this.liftMarker.position.set(n,this.terrain.bankTop(e)+5.5,i),this.liftMarker.userData.y0=this.liftMarker.position.y}addStopMarker(t){var a;const e=db(((a=t.poi)==null?void 0:a.kind)??"pub"),n=ub(t.name);n.position.y=-.9,e.add(n);const i=(t.s0+t.s1)/2,[o,r]=this.route.point(i,(this.ww.halfWidthAt(i)+1.5)*Xt);e.position.set(o,this.terrain.bankTop(i)+3.6,r),e.userData.y0=e.position.y,this.group.add(e),this.stopMarkers.set(t.id,e)}hideStopMarker(t){const e=this.stopMarkers.get(t);e&&(e.visible=!1)}addStart(t){const e=this.zones.find(a=>a.id===t);if(!e||this.starts.has(t))return;const n=fb(),i=(e.s0+e.s1)/2,[o,r]=this.route.point(i,(this.ww.halfWidthAt(i)+.4)*Xt);n.position.set(o,this.terrain.bankTop(i)+4,r),n.userData.y0=n.position.y,this.group.add(n),this.starts.set(t,n)}showStart(t,e){const n=this.starts.get(t);n&&(n.visible=e)}clearAround(t,e,n){for(const i of[...this.boats]){if(Math.abs(i.s-t)>e+i.halfL)continue;this.group.remove(i.group),this.boats.splice(this.boats.indexOf(i),1);const o=n.indexOf(i);o>=0&&n.splice(o,1)}}zoneAt(t){return this.zones.find(e=>t>=e.s0-4&&t<=e.s1+4)}}function Qc(s="#ffcf4a",t="#a07000"){const e=new St,n=new Yt({color:s,emissive:t,emissiveIntensity:.6,roughness:.4}),i=new Y(new _h(.7,0),n);return i.scale.y=1.5,e.add(i),e}function ub(s){const t=document.createElement("canvas"),e=t.getContext("2d"),n="800 44px Nunito, sans-serif";e.font=n;const i=Math.ceil(e.measureText(s).width)+48;t.width=i,t.height=76,e.font=n,e.fillStyle="rgba(246, 239, 221, 0.95)",e.strokeStyle="#6e1f1a",e.lineWidth=5,e.beginPath(),e.roundRect(3,3,i-6,70,32),e.fill(),e.stroke(),e.fillStyle="#3a1a14",e.textAlign="center",e.textBaseline="middle",e.fillText(s,i/2,40);const o=new Mn(t);o.colorSpace=Ve;const r=new fh(new Ba({map:o,depthWrite:!1})),a=.62;return r.scale.set(a*i/76,a,1),r}function db(s){const t=new St,e=(i,o={})=>new Yt({color:i,roughness:.4,emissive:i,emissiveIntensity:.25,...o}),n=(i,o,r=0,a=0,l=0,c=0,h=0)=>{const f=new Y(i,o);f.position.set(r,a,l),f.rotation.set(c,0,h),t.add(f)};return s==="cafe"||s==="ice_cream"?(n(new qt(.42,.32,.6,16),e("#f4f1ea"),0,.3),n(new qt(.38,.38,.04,16),e("#6b3f1f"),0,.58),n(new dn(.17,.05,6,12),e("#f4f1ea"),.45,.32,0,0,0),n(new qt(.7,.6,.06,18),e("#f4f1ea"),0,-.02)):s==="supermarket"?(n(new gt(1.1,.6,.7),e("#2f6fb8"),0,.3),n(new gt(1,.06,.6),e("#24589a"),0,.58),n(new gh(.16,.5,4,8),e("#d9a35a"),-.15,.72,0,0,Math.PI/2-.4),n(new Qe(.17,10,8),e("#5fae3a"),.3,.7,.05),n(new dn(.45,.04,6,16,Math.PI),e("#24589a"),0,.6)):s==="restaurant"||s==="hotel"?(n(new qt(.75,.6,.08,20),e("#f4f1ea"),0,.3,0,Math.PI/2),n(new gt(.07,1.2,.03),e("#c9c3b5",{metalness:.6}),-1,.3),n(new gt(.07,1.2,.03),e("#c9c3b5",{metalness:.6}),1,.3)):(n(new qt(.42,.34,1,16),e("#d9921f",{transparent:!0,opacity:.92}),0,.5),n(new qt(.45,.42,.28,16),e("#fbf6e8"),0,1.12),n(new Qe(.3,10,6),e("#fbf6e8"),.1,1.28),n(new dn(.26,.07,8,14),e("#e8dcc0",{transparent:!0,opacity:.85}),.5,.55,0,0,0)),t.scale.setScalar(1.3),t}function fb(){const s=Qc("#5ec27a","#1f6b3a"),t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");e.fillStyle="#1f4d3a",e.beginPath(),e.arc(64,64,58,0,Math.PI*2),e.fill(),e.fillStyle="#f6efdd",e.font="900 92px Nunito, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("!",64,70);const n=new Mn(t);n.colorSpace=Ve;const i=new fh(new Ba({map:n,depthWrite:!1}));return i.scale.set(.9,.9,1),i.position.y=1.7,s.add(i),s}function pb(s){return s.kind==="pub"||s.kind==="bar"?"patrons":s.kind==="hotel"?"guests":"customers"}function Nd(s,t="#1d3557"){const e=document.createElement("canvas");e.width=512,e.height=192;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,512,192),n.strokeStyle="#f3ead0",n.lineWidth=6,n.strokeRect(8,8,496,176),n.fillStyle="#f3ead0",n.textAlign="center",n.font="700 34px Nunito, sans-serif",n.fillText(s[0].toUpperCase(),256,70,470),n.font="600 40px Fraunces, Georgia, serif",n.fillText(s[1],256,135,470);const i=new Mn(e);i.colorSpace=Ve;const o=new St,r=new Y(new wi(2.2,.82),new Yt({map:i,side:He}));r.position.y=1.9,o.add(r);const a=new Y(new gt(.1,2,.1),new Yt({color:"#f1efe8"}));return a.position.y=1,o.add(a),o}function mb(){const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);return e.addColorStop(0,"rgba(225,225,225,1)"),e.addColorStop(1,"rgba(225,225,225,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Mn(s)}function gb(s){const t=new St,e=new Yt({color:"#1c2a44",roughness:.25,metalness:.4}),n=new Yt({color:"#b8bcc0",metalness:.6,roughness:.4});for(let i=0;i<s;i++){const o=(i-(s-1)/2)*.72,r=new Y(new gt(1.02,.03,.68),n);r.position.set(0,.05,o);const a=new Y(new gt(.96,.035,.62),e);a.position.set(0,.055,o),t.add(r,a)}return t}function vb(){const s=new St,t=new Yt({color:"#2e5d8a",roughness:.9}),e=new Yt({color:"#333333"}),n=new Y(new gt(.5,.04,.45),t);n.position.set(0,.44,-.05);const i=new Y(new gt(.5,.5,.04),t);i.position.set(0,.7,-.28),i.rotation.x=-.15,s.add(n,i);for(const o of[-.22,.22])for(const r of[-.25,.15]){const a=new Y(new gt(.03,.44,.03),e);a.position.set(o,.22,r),s.add(a)}return s}const va=.9,Od=2,_a=.45,_b=.45;class Mb{constructor(t,e,n,i){I(this,"group",new St);I(this,"lines",[]);I(this,"ropeMat",new Ff({color:"#d8c49a"}));I(this,"pinMat",new Yt({color:"#3a3a3a",metalness:.5,roughness:.5}));I(this,"time",0);this.route=t,this.ww=e,this.terrain=n,this.boat=i}get count(){return this.lines.length}get moored(){return this.lines.length===2}endPoint(t){const e=this.route.frame(this.boat.s);return[((-Math.cos(this.boat.psi)*e.nx+Math.sin(this.boat.psi)*e.nz)*Xt>0?1:-1)*An*.5,(t==="bow"?1:-1)*(jn/2-1.3)]}gap(t){const[e,n]=this.boat.toWorld(...this.endPoint(t)),i=this.route.project(e,n,this.boat.s);return{gap:this.ww.halfWidthAt(i.s)-i.d*Xt,s:i.s}}blocker(){return this.ww.gates.some(t=>Math.abs(t.s-this.boat.s)<jn/2+22)?"No mooring on a lock landing. Move along a bit.":this.boat.d*Xt<0?"Moor on the towpath side, the bank with the path.":null}prompt(){if(this.moored)return{key:"F",text:"Cast off",ready:!0};const e=["bow","stern"].filter(r=>!this.lines.some(a=>a.end===r)).map(r=>({e:r,...this.gap(r)})),n=e.reduce((r,a)=>a.gap<r.gap?a:r);if(!this.lines.length&&(n.gap>2.5||this.boat.speed>1)||this.blocker()&&!this.lines.length)return null;const i=this.lines.length?Od:va,o=e.find(r=>r.gap<i);return o&&this.boat.speed<_a?{key:"F",text:o.gap>va?`Haul the ${o.e} in and tie it`:`Tie the ${o.e} line`,ready:!0}:this.lines.length===1?{key:"F",text:`Untie the ${this.lines[0].end} line to realign`,ready:!0}:this.boat.speed>=_a?{key:"F",text:"Slow right down to step off",ready:!1}:{key:"F",text:`Bring the ${n.e} in alongside the bank`,ready:!1}}act(){if(this.moored)return this.castOff(),"Lines in, cast off. Off you go!";if(!this.lines.length){const n=this.blocker();if(n)return n}const t=["bow","stern"].filter(n=>!this.lines.some(i=>i.end===n)),e=t.find(n=>this.gap(n).gap<(this.lines.length?Od:va));if(this.lines.length===1&&(!e||this.boat.speed>=_a)){const n=this.lines[0].end;return this.castOff(),`${n==="bow"?"Bow":"Stern"} line untied. Line her up and try again.`}return this.boat.speed>=_a?"Too quick to step off! Slow right down first.":e?(this.tie(e),this.moored?null:e==="bow"?"Bow line tied. Now the stern: a touch ahead with the tiller pushed away from the bank swings it in on the rope.":"Stern line tied. Now the bow: a touch astern with the tiller towards the bank brings it in."):`Bring the ${t[0]} closer in to the bank first (within a metre).`}tie(t){const e=this.endPoint(t),[n,i]=this.boat.toWorld(...e),o=this.route.project(n,i,this.boat.s),r=this.ww.halfWidthAt(o.s),a=this.route.frame(o.s),l=Math.sin(this.boat.psi)*a.tx+Math.cos(this.boat.psi)*a.tz>=0?1:-1,c=(t==="bow"?1:-1)*l*.8,[h,f]=this.route.point(o.s+c,(r+.8)*Xt),p=Math.hypot(.8,.8+.25)+.35,d=this.gap(t).gap>va?p:Math.hypot(n-h,i-f)+.35,g={local:e,anchor:[h,f],length:d};this.boat.tethers.push(g);const _=new Y(new qt(.03,.03,.5,6),this.pinMat);_.position.set(h,this.terrain.bankTop(o.s)+.2,f),_.rotation.z=.2;const m=new NM(new xe().setFromPoints(new Array(12).fill(0).map(()=>new U)),this.ropeMat);m.frustumCulled=!1;const u=_.position.y-.2,M=new Y(new br(.45,.62,28),new Dn({color:"#e0261b",transparent:!0,opacity:.85,depthWrite:!1,side:He}));M.rotation.x=-Math.PI/2,M.position.set(h,u+.04,f);const x=new Y(new qt(1.1,1.1,1.6,10),new Dn({visible:!1}));x.position.set(h,u+.8,f),x.userData.mooringEnd=t,this.group.add(_,m,M,x),this.lines.push({end:t,tether:g,pin:_,rope:m,halo:M,hit:x})}castOff(){for(const t of[...this.lines])this.removeLine(t)}removeLine(t){this.group.remove(t.pin,t.rope,t.halo,t.hit),t.rope.geometry.dispose();const e=this.boat.tethers.indexOf(t.tether);e>=0&&this.boat.tethers.splice(e,1),this.lines.splice(this.lines.indexOf(t),1)}get tapTargets(){return this.lines.map(t=>t.hit)}untie(t){const e=this.lines.find(n=>n.end===t);return e?(this.removeLine(e),`${t==="bow"?"Bow":"Stern"} line untied.`):""}update(t,e=0){this.time+=e;const n=.5+.5*Math.sin(this.time*3.5);for(const i of this.lines){i.halo.material.opacity=.65+.3*n,i.halo.scale.setScalar(1+.15*n);const[o,r]=this.boat.toWorld(...i.tether.local),a=new U(o,t+_b,r),l=i.pin.position.clone().setY(i.pin.position.y+.15),h=.08+Math.max(0,i.tether.length-a.distanceTo(l))*.6,f=i.rope.geometry.getAttribute("position");for(let p=0;p<f.count;p++){const d=p/(f.count-1),g=a.clone().lerp(l,d);g.y-=Math.sin(d*Math.PI)*h,f.setXYZ(p,g.x,g.y,g.z)}f.needsUpdate=!0}}}const ki=[{from:"tower",zone:"city",title:"Under the city walls",brief:"Moor at the city moorings by Cow Lane Bridge, in the cutting below the walls."},{from:"city",zone:"hoole",title:"Through Chester",brief:"Moor up at Hoole, past the city bridges. Thirsty? There are canalside pubs on the way (🍺 on the map)."},{from:"hoole",zone:"christleton",title:"Out to the country",brief:"Moor at Christleton for the night, out in the fields past Greenfield Lock."},{from:"christleton",zone:"stop:The Cheshire Cat",title:"Supper at the Cheshire Cat",brief:"Carry on past Christleton Bridge to the Cheshire Cat. Moor up outside for a pub supper, and stay the night if you like."},{from:"stop:The Cheshire Cat",zone:"tower",title:"Back to Tower Wharf",brief:"Bring her down to Tower Wharf, at the foot of the Northgate Staircase."}];class xb{constructor(t){I(this,"index",0);I(this,"startHour");I(this,"bumps",0);I(this,"rocked",0);I(this,"cleared",0);I(this,"result",null);I(this,"done",new Set);this.startHour=t}get current(){return ki[this.index%ki.length]}complete(t){const e=t-this.startHour,n=this.bumps+this.rocked*2,i=n===0?"Not a ripple out of place. The towpath regulars are impressed.":n<4?"A couple of scrapes, but nothing a cup of tea won’t fix.":"Eventful! The moored boats will be talking about you for a while.";return this.result={trip:this.current,hours:e,bumps:this.bumps,rocked:this.rocked,cleared:this.cleared,verdict:i},this.result}next(t){this.result&&this.done.add(this.index),this.done.size>=ki.length&&this.done.clear(),this.startHour=t,this.bumps=this.rocked=this.cleared=0,this.result=null}choose(t){this.index=t}}const Fd=[...Th.filter((s,t)=>t%2===0),...["Kittiwake","Water Rat","Bumblebee","Mistle Thrush"].map(s=>({boat:s,crew:[]}))],zd=["#27445a","#6a1e2e","#2c5a3f","#4b3a6b","#8a4a12","#1f3d4d"],Bd=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400"],Ma=1.5,Hd=.9;class yb{constructor(t,e,n,i){I(this,"group",new St);I(this,"boats",[]);I(this,"events",[]);I(this,"time",0);I(this,"nextSpawn",8);I(this,"blockedAt",()=>[]);I(this,"narrows",[]);I(this,"night",!1);I(this,"fuelDue",!1);I(this,"nameIndex",0);this.route=t,this.ww=e,this.moorings=n,this.player=i}update(t,e){this.time+=t;const n=this.player,i=this.ww.bodies[this.ww.bodyIndexAt(n.s)];if(this.time>this.nextSpawn&&this.boats.length<2&&i.kind==="pound"&&!this.night){this.nextSpawn=this.time+45+Math.random()*60;const o=n.s+e*(230+Math.random()*90),r=Math.min(o,n.s),a=Math.max(o,n.s),l=this.boats.every(c=>Math.abs(c.s-o)>80)&&this.moorings.zoneAt(o)===void 0&&!this.blockedAt().some(c=>c>r-20&&c<a+20);o>i.s0+60&&o<i.s1-60&&l&&this.spawn(o,-e)}for(const o of[...this.boats]){const r=(n.s-o.s)*o.dir>380||Math.abs(n.s-o.s)>520,a=this.ww.bodies[this.ww.bodyIndexAt(o.s)],l=o.dir>0?a.s1-o.s<40:o.s-a.s0<40;if(r||l&&Math.abs(n.s-o.s)>150||a.kind!=="pound"){this.remove(o);continue}this.steer(o,t,e)}}spawn(t,e){const n=this.fuelDue;this.fuelDue=!1;const i=n?{boat:"Ember",crew:[]}:Fd[this.nameIndex++%Fd.length],o=i.boat,r=Wi(Math.random,{coat:Bd[Math.floor(Math.random()*Bd.length)]}),a=n?Iy(o,21,r):Sh({name:o,length:17+Math.round(Math.random()*3),crew:!0,cabin:zd[Math.floor(Math.random()*zd.length)],roof:Math.random()<.5?"#3a3d40":"#7c2f23",crewStyle:r});a.group.rotation.order="YXZ",this.group.add(a.group);const l=a.group.userData.length/2,c={name:o,model:a,s:t,d:0,dir:e,speed:Ma,steerer:i.crew[Math.floor(Math.random()*i.crew.length)],obstacle:{x:0,z:0,psi:0,halfL:l,halfB:An/2},pausedUntil:0,waveUntil:0,passed:!1,vd:0,yaw:0,fuel:n};n&&(c.speed=Ma*.7),this.boats.push(c),this.player.obstacles.push(c.obstacle),this.place(c,0)}remove(t){this.group.remove(t.model.group),this.boats.splice(this.boats.indexOf(t),1);const e=this.player.obstacles.indexOf(t.obstacle);e>=0&&this.player.obstacles.splice(e,1)}bumped(t){const e=this.boats.find(n=>n.obstacle===t);!e||this.time<e.pausedUntil||(e.pausedUntil=this.time+1.5,e.slowUntil=this.time+8,e.speed*=.4,e.waveUntil=this.time+3,this.events.push({kind:"bumped",boat:e}))}hold(t,e){t.pausedUntil=this.time+e,t.speed=Math.min(t.speed,.3)}narrowsBusy(t,e,n,i){const[o,r]=t,a=l=>l>o-4&&l<r+4;return a(this.player.s)&&n!==e?!0:this.boats.some(l=>l!==i&&l.dir!==e&&a(l.s))}steer(t,e,n){const i=this.player,o=this.ww.halfWidthAt(t.s),r=(i.s-t.s)*t.dir,a=n!==t.dir;let l=t.fuel?Ma*.7:Ma;const c=this.moorings.boats.some(u=>Math.abs(u.s-t.s)<u.halfL+12);c&&(l=Hd),r>0&&r<45&&(l=Math.min(l,a?.7:.4)),r>0&&r<22&&!a&&(l=0),r>0&&r<34&&Math.abs(i.d-t.d)<An+.7&&(t.clashUntil=this.time+4);const h=this.time<(t.clashUntil??0);h&&(l=0);for(const u of this.blockedAt()){const M=(u-t.s)*t.dir-t.obstacle.halfL;M>-2&&M<30&&(l=Math.min(l,M<5?0:.4))}for(const u of this.narrows){const x=((t.dir>0?u[0]:u[1])-t.s)*t.dir-t.obstacle.halfL,v=t.s>u[0]&&t.s<u[1];!v&&x>-1&&x<45&&this.narrowsBusy(u,t.dir,n,t)&&(l=Math.min(l,x<10?0:.4),!t.waitedNarrows&&t.speed<.3&&(t.waitedNarrows=!0,this.events.push({kind:"waitingAqueduct",boat:t}))),t.wasInNarrows&&!v&&this.events.push({kind:"offAqueduct",boat:t}),t.wasInNarrows=v}this.time<(t.slowUntil??0)&&(l=Math.min(l,Hd)),this.time<t.pausedUntil&&(l=0),t.speed+=Te(l-t.speed,-.9*e,.3*e);const f=t.dir;let p=r>-20&&r<110&&a?f*(h?o:1.8):0;const d=c?o-An-1.6:o-1.6;p=Te(p,-(o-1.6),d),this.time<t.pausedUntil&&(p=t.targetD??t.d),t.targetD??(t.targetD=t.d),t.targetD+=Te(p-t.targetD,-.35*e,.35*e),p=t.targetD;const g=.08+t.speed*.25,_=Te((p-t.d)*.4,-g,g);t.vd+=Te(_-t.vd,-.15*e,.15*e),t.d+=t.vd*e;const m=-t.dir*Math.atan2(t.vd,Math.max(.4,t.speed));if(t.yaw+=(m-t.yaw)*Math.min(1,e*1.5),t.s+=t.dir*t.speed*e,this.place(t,e),!t.passed&&a&&Math.abs(i.s-t.s)<4){t.passed=!0;const u=(i.d-t.d)*f<0;t.waveUntil=this.time+3.5,this.events.push({kind:u?"greet":"wrongSide",boat:t})}Fi(t.model.steererPerson,this.time<t.waveUntil?"wave":"rest",this.time)}place(t,e){const n=this.route.frame(t.s),i=n.x+n.nx*t.d,o=n.z+n.nz*t.d,r=Math.atan2(n.tx,n.tz)+(t.dir>0?0:Math.PI),a=this.ww.levelAt(t.s);t.model.group.position.set(i,a+Math.sin(this.time*1.2+t.s)*.015,o),t.model.group.rotation.y=r+t.yaw,t.model.group.rotation.z=Math.sin(this.time*.9+e)*.004,Object.assign(t.obstacle,{x:i,z:o,psi:r+t.yaw})}}const xa=-Xt,bb=s=>new Yt({color:s});function me(s,t,e,n=0,i=0,o=0,r=0,a=0,l=0){const c=new Y(t,bb(e));return c.position.set(n,i,o),c.rotation.set(r,a,l),s.add(c),c}const mn=(s,t,e)=>new gt(s,t,e),Wn=(s,t,e,n=6)=>new qt(s,t,e,n),wb={bench(){const s=new St;me(s,mn(1.6,.06,.4),"#8a6a45",0,.45,0),me(s,mn(1.6,.36,.05),"#8a6a45",0,.68,-.2,-.15);for(const t of[-.7,.7])me(s,mn(.06,.45,.4),"#2b2b2b",t,.22,0);return s},bin(){const s=new St;return me(s,Wn(.22,.2,.8,8),"#1f3d2f",0,.4,0),me(s,Wn(.24,.24,.06,8),"#2b2b2b",0,.82,0),s},lamp(){const s=new St;return me(s,Wn(.06,.09,3.6),"#1b1b1b",0,1.8,0),me(s,mn(.5,.06,.06),"#1b1b1b",.18,3.55,0),me(s,Wn(.12,.16,.32,6),"#2b2b2b",.38,3.4,0),me(s,Wn(.1,.1,.14,6),"#f4e3a1",.38,3.22,0),s},lifebuoy(){const s=new St;return me(s,mn(.1,1.5,.1),"#e8e4da",0,.75,0),me(s,new dn(.3,.07,6,12),"#e0522f",0,1.15,.08),me(s,mn(.6,.6,.03),"#c0b8a8",0,1.15,0),s},tub(){const s=new St;me(s,Wn(.36,.3,.45,8),"#6b4a2e",0,.22,0),me(s,new En(.34,0),"#4f8a3a",0,.58,0);for(const[t,e,n]of[[.15,.1,"#e04f6a"],[-.12,.12,"#f2c94c"],[.02,-.16,"#d36ad6"],[-.16,-.06,"#f6f0e4"]])me(s,new En(.08,0),n,t,.82,e);return s},reeds(){const s=new St,t=Gi(5);for(let e=0;e<9;e++){const n=1.1+t()*.9;me(s,Wn(.015,.04,n,4),t()<.4?"#8a9a4a":"#6f8a3a",(t()-.5)*.9,n/2-.3,(t()-.5)*.7,(t()-.5)*.2,0,(t()-.5)*.25),t()<.4&&me(s,Wn(.04,.04,.2,5),"#5a3d22",(t()-.5)*.9,n-.3,(t()-.5)*.7)}return s},hedge(){const s=new St;return me(s,mn(4.2,1.5,1.1),"#3f6b30",0,.75,0),me(s,new En(.6,0),"#4b7a36",-1.2,1.4,.1),me(s,new En(.55,0),"#36602a",1,1.45,-.1),s},fence(){const s=new St;return me(s,mn(2,1.6,.06),"#7a5a3a",0,.8,0),me(s,mn(.1,1.75,.1),"#5e4430",-1,.87,0),s},flowers(){const s=new St,t=Gi(9),e=["#f2c94c","#ffffff","#d36ad6","#e04f6a","#7aa7e0"];for(let n=0;n<7;n++){const i=(t()-.5)*1.6,o=(t()-.5)*1.2;me(s,Wn(.01,.01,.35,3),"#4f7a33",i,.17,o),me(s,new En(.06,0),e[Math.floor(t()*e.length)],i,.36,o)}return s},picnic(){const s=new St;me(s,mn(1.8,.06,.8),"#a07a50",0,.75,0);for(const t of[-.65,.65])me(s,mn(1.8,.05,.28),"#a07a50",0,.45,t);for(const t of[-.7,.7])me(s,mn(.08,.75,1.5),"#8a6a45",t,.37,0,0);return s},parasol(){const s=new St;return me(s,Wn(.03,.03,2.4),"#e8e4da",0,1.2,0),me(s,new xi(1.4,.5,8,1,!0),"#a3291f",0,2.3,0),s},cottage(){const s=new St;me(s,mn(6,4.2,5),"#efe8da",0,2.1,0);const t=new qt(.01,3.9,6.6,4,1);t.rotateY(Math.PI/4),t.rotateZ(Math.PI/2),t.scale(1,.55,1),me(s,t,"#4d525b",0,5,0),me(s,mn(.7,1.4,.7),"#8c4234",2,5.6,0),me(s,mn(1,1.9,.08),"#1f4d3a",0,.95,2.52);for(const e of[-1.8,1.8])me(s,mn(.9,.9,.08),"#2a3640",e,2.6,2.52),me(s,mn(.9,.9,.08),"#2a3640",e,1.1,2.52);return s},heron(){const s=new St;me(s,new Qe(.22,6,4),"#9aa3ab",0,.85,0).scale.set(1,.8,1.6),me(s,Wn(.04,.05,.55,5),"#c8ced2",0,1.2,.18,-.3),me(s,new Qe(.07,6,4),"#e8eaec",0,1.47,.27),me(s,new xi(.025,.22,4),"#d8b34a",0,1.47,.42,Math.PI/2);for(const t of[-.06,.06])me(s,Wn(.012,.012,.7,3),"#c9a24a",t,.35,0);return s}};class Sb{constructor(t,e,n,i,o,r){I(this,"group",new St);I(this,"placements",new Map);I(this,"anglerSpots",[]);I(this,"gardens",[]);this.route=t,this.ww=e,this.terrain=n;const a=Gi(4242),l=t.length,c=(u,M=6)=>r.some(x=>Math.abs(x.s-u)<x.w/2+M),h=(u,M)=>e.gates.some(x=>Math.abs(x.s-u)<M),f=u=>e.bodies[e.bodyIndexAt(u)].kind==="chamber",p=u=>e.windingHoles.some(M=>Math.abs(M-u)<42),d=u=>{const[M,x]=t.point(u,30*xa),[v,T]=t.point(u,30*Xt);return Math.max(n.urbanAt(M,x),n.urbanAt(v,T))};let g=60;for(let u=20;u<l-20;u+=2){if(c(u,8)||h(u,10))continue;const M=d(u);M>.3&&Math.round(u)%32===0&&this.add("lamp",u,e.halfWidthAt(u)+3.25,"towpath",-Math.PI/2),u>g&&!o.zoneAt(u)&&!n.cliffSide(u,Xt)&&(g=u+140+a()*160,this.add("bench",u,e.halfWidthAt(u)+3.6,"towpath",0),M>.2&&this.add("bin",u+1.4,e.halfWidthAt(u)+3.7,"towpath",0)),M>.35&&Math.round(u)%380===0&&this.add("lifebuoy",u,e.halfWidthAt(u)+3.3,"towpath",0)}for(const u of e.groups){const M=u.gates[0].s,x=u.gates.at(-1).s;this.add("lifebuoy",M-6,e.halfWidthAt(M-6)+3.3,"towpath",0),this.add("lifebuoy",x+6,e.halfWidthAt(x+6)+3.3,"towpath",0);for(const T of[M+4,x-4,(M+x)/2])this.add("tub",T,e.halfWidthAt(T)+2.2,"towpath",0),this.add("tub",T+1.2,e.halfWidthAt(T)+2.2,"offside",0);const v=(M+x)/2;if(!u.staircase&&d(v)<.45){const T=e.halfWidthAt(v)+10,[E,b]=t.point(v,T*Xt);i.isFree(E,b)&&this.add("cottage",v,T,"land",0)}}let _=-1,m="none";for(let u=10;u<l-10;u+=2){if(u>_){_=u+60;const T=d(u);m=T<.3?a()<.85?"hedge":"none":T>.4?a()<.8?"fence":"none":a()<.5?"hedge":"fence"}if(m==="none"||c(u,4)||f(u)||h(u,6)||p(u))continue;const M=e.halfWidthAt(u)+2.4,[x,v]=t.point(u,M*xa);i.isFree(x,v)&&(m==="fence"?this.add("fence",u,M,"offside",0):Math.round(u)%4===0&&this.add("hedge",u,M,"offside",0))}for(let u=10;u<l-10;u+=3){if(c(u,6)||f(u)||h(u,15)||p(u))continue;const M=d(u);a()<(M<.3?.45:.12)&&this.add("reeds",u,e.halfWidthAt(u)-.25,"water",a()*6),M<.35&&a()<.3&&!n.cliffSide(u,Xt)&&this.add("flowers",u,e.halfWidthAt(u)+4.6+a()*1.5,"towpath",a()*6),M<.2&&a()<.008&&this.add("heron",u,e.halfWidthAt(u)+.9,"offside",Math.PI/2*xa+(a()-.5))}for(const u of o.zones){if(u.kind!=="stop"||!/pub|bar/.test(u.poi.kind))continue;const M=(u.s0+u.s1)/2;for(const[x,v,T]of[[-5,6,"picnic"],[0,7.5,"picnic"],[5,6,"picnic"],[-2.5,7,"parasol"],[3,6.5,"parasol"]])if(this.add(T,M+x,e.halfWidthAt(M)+v,"land",0),T==="picnic"){const[E,b]=t.point(M+x,(e.halfWidthAt(M)+v)*Xt);this.gardens.push({x:E,z:b,y:n.bankTop(M),ry:Math.atan2(t.frame(M).tx,t.frame(M).tz)})}}for(let u=150;u<l-80;u+=70+a()*90)d(u)>.55||c(u,15)||h(u,45)||o.zoneAt(u)||f(u)||o.boats.some(M=>Math.abs(M.s-u)<M.halfL+8)||this.anglerSpots.push({s:u});this.build()}add(t,e,n,i,o){if(e<1||e>this.route.length-1||this.terrain.nearAqueduct(e))return;const r=i==="offside"||i==="water"?xa:Xt,a=this.route.frame(e),l=a.x+a.nx*n*r,c=a.z+a.nz*n*r;let h;i==="water"?h=this.ww.levelAt(e):i==="land"?h=this.terrain.heightAt(l,c):h=n<this.ww.halfWidthAt(e)+3.4?this.terrain.bankTop(e):this.terrain.landHeight(l,c,e,n*r);const f=Math.atan2(-a.nx*r,-a.nz*r),p=new Me().compose(new U(l,h,c),new Kn().setFromAxisAngle(new U(0,1,0),f+o),new U(1,1,1));this.placements.has(t)||this.placements.set(t,[]),this.placements.get(t).push(p)}build(){for(const[t,e]of this.placements){const n=Vi(wb[t]()),i=new Fn(n,Oi(),e.length);e.forEach((o,r)=>i.setMatrixAt(r,o)),i.castShadow=t!=="flowers"&&t!=="reeds",i.receiveShadow=!0,i.name=`decor:${t}`,this.group.add(i)}}get counts(){return Object.fromEntries([...this.placements].map(([t,e])=>[t,e.length]))}}const Ko=6,Zl=4,Jl=4,Zo=380,Xn=new Me,ns=new Kn,Jo=new U,Qo=new U(1,1,1),ya=new U(0,1,0);function Eb(s,t){const e=qn({...s,coat:"#ffffff"});t(e);const n=new St;n.add(e.group);const i=o=>o.userData.part==="coat";return{coat:Vi(n,void 0,i),rest:Vi(n,void 0,o=>!i(o))}}class tr{constructor(t,e,n,i,o){I(this,"meshes",[]);for(const r of e){const a=[];for(let l=0;l<n;l++){const c=Eb(r,p=>o(p,l)),h=new Fn(c.coat,Gd(),i),f=new Fn(c.rest,Gd(),i);for(const p of[h,f])p.count=0,p.castShadow=!0,p.frustumCulled=!1,p.instanceMatrix.setUsage(As),t.add(p);a.push({coat:h,rest:f})}this.meshes.push(a)}}begin(){for(const t of this.meshes)for(const{coat:e,rest:n}of t)e.count=n.count=0}put(t,e,n,i){const{coat:o,rest:r}=this.meshes[t%this.meshes.length][e%this.meshes[0].length],a=o.count++;r.count++,o.setMatrixAt(a,n),r.setMatrixAt(a,n),o.setColorAt(a,i)}end(){for(const t of this.meshes)for(const{coat:e,rest:n}of t)e.instanceMatrix.needsUpdate=n.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}}const Gd=()=>new Yt({vertexColors:!0,roughness:.75});function Tb(){const s=new St,t=a=>new Yt({color:a});for(const a of[-.55,.55]){const l=new Y(new dn(.33,.03,5,12),t("#1b1b1b"));l.position.set(0,.33,a),l.rotation.y=Math.PI/2,s.add(l)}const e=new Y(new gt(.05,.05,.9),t("#2e86c1"));e.position.set(0,.62,0),e.rotation.x=-.12;const n=new Y(new gt(.04,.32,.04),t("#2e86c1"));n.position.set(0,.68,-.18);const i=new Y(new gt(.12,.05,.22),t("#1b1b1b"));i.position.set(0,.86,-.18);const o=new Y(new gt(.04,.42,.04),t("#2e86c1"));o.position.set(0,.78,.45);const r=new Y(new gt(.5,.035,.035),t("#1b1b1b"));return r.position.set(0,.99,.43),s.add(e,n,i,o,r),Vi(s)}function Ab(){const s=new St,t=o=>new Yt({color:o}),e=new Y(new gt(.22,.22,.55),t("#8a5a2b"));e.position.y=.35;const n=new Y(new gt(.18,.18,.2),t("#7a4a22"));n.position.set(0,.5,.33),s.add(e,n);for(const[o,r]of[[-.08,-.2],[.08,-.2],[-.08,.2],[.08,.2]]){const a=new Y(new gt(.05,.25,.05),t("#6a3a1a"));a.position.set(o,.12,r),s.add(a)}const i=new Y(new gt(.04,.04,.22),t("#8a5a2b"));return i.position.set(0,.48,-.36),i.rotation.x=.6,s.add(i),Vi(s)}function Vd(s){const t=new St,e=a=>new Yt({color:a}),n=s?1.9:1,i=new Y(new Qe(.16*n,6,4),e(s?"#f4f4f0":"#8a6a4a"));if(i.scale.set(.8,.55,1.3),i.position.y=.05*n,t.add(i),s){const a=new Y(new qt(.035,.05,.5,5),e("#f4f4f0"));a.position.set(0,.32,.2),a.rotation.x=.25,t.add(a)}const o=new Y(new Qe(.07*(s?1.1:1),6,4),e(s?"#f4f4f0":"#2f6b3a"));o.position.set(0,s?.58:.17,s?.28:.16);const r=new Y(new xi(.03,.1,4),e(s?"#e07a2a":"#e2b23a"));return r.position.set(0,o.position.y-.01,o.position.z+.09),r.rotation.x=Math.PI/2,t.add(o,r),Vi(t)}class Rb{constructor(t,e,n,i,o,r){I(this,"group",new St);I(this,"events",[]);I(this,"movers",[]);I(this,"birds",[]);I(this,"anglers",[]);I(this,"walkers");I(this,"wavers");I(this,"joggers");I(this,"riders");I(this,"bikes");I(this,"dogs");I(this,"ducks");I(this,"swans");I(this,"time",0);I(this,"scaredUntil",-1);I(this,"rand",Gi(31));I(this,"kayaks",[]);I(this,"crowd",1);I(this,"waveChance",0);I(this,"night",!1);I(this,"kayakCount",1);this.route=t,this.ww=e,this.terrain=n,this.boat=i;const a=this.rand,l=Array.from({length:Jl},()=>Wi(a)),c=22;this.walkers=new tr(this.group,l,Ko,c,(p,d)=>vr(p,d/Ko*Math.PI*2)),this.wavers=new tr(this.group,l,Zl,c,(p,d)=>{_r(p),Fi(p,"wave",d/Zl*Math.PI*2/9)}),this.joggers=new tr(this.group,l.slice(0,2),Ko,c,(p,d)=>{vr(p,d/Ko*Math.PI*2,1.5),p.armL.rotation.x-=.6,p.armR.rotation.x-=.6}),this.riders=new tr(this.group,l.slice(1,3),4,c,(p,d)=>Ry(p,d/4*Math.PI*2)),this.bikes=new Fn(Tb(),Oi(),c),this.dogs=new Fn(Ab(),Oi(),c);for(let p=0;p<c;p++){const d=p<14?"walk":p<18?"jog":"cycle",g={s:i.s+(a()-.5)*Zo*2,d:0,dir:a()<.5?1:-1,kind:d,phase:a()*10,speed:d==="walk"?1.1+a()*.4:d==="jog"?2.6+a()*.6:4+a()*1.5,dog:d==="walk"&&a()<.45,coat:new Qt(ir[Math.floor(a()*ir.length)]),look:Math.floor(a()*Jl)};g.d=this.laneFor(g),this.movers.push(g)}for(const p of[this.bikes,this.dogs])p.castShadow=!0,p.instanceMatrix.setUsage(As),p.frustumCulled=!1,this.group.add(p);for(const p of o){const d=qn(Wi(a,{hairStyle:a()<.5?"cap":"beanie",coat:a()<.5?"#3d5a3d":"#5a4a3a"})),g=t.frame(p.s),_=(e.halfWidthAt(p.s)+.9)*Xt,m=new St;m.add(d.group),Mr(d);const u=new Y(new gt(.5,.4,.35),new Yt({color:"#3d5a3d"}));u.position.set(0,.2,-.1),m.add(u);const M=new Y(new qt(.01,.02,4.2,4),new Yt({color:"#2b2b2b"}));M.position.set(.25,1.3,1.6),M.rotation.x=1.05,m.add(M),m.position.set(g.x+g.nx*_,n.bankTop(p.s),g.z+g.nz*_),m.rotation.y=Math.atan2(-g.nx*Xt,-g.nz*Xt),this.group.add(m),this.anglers.push({s:p.s,person:d,angryUntil:0,lastGrumble:-99})}const h=new tr(this.group,l,1,64,p=>Mr(p));h.begin();for(const p of r)for(const d of[-1,1])if(!(a()<.35))for(const g of[-.5,.5]){if(a()<.4)continue;const _=new U(g,0,d*.62).applyAxisAngle(ya,p.ry);ns.setFromAxisAngle(ya,p.ry+(d>0?Math.PI:0)),Xn.compose(Jo.set(p.x+_.x,p.y,p.z+_.z),ns,Qo),h.put(Math.floor(a()*Jl),0,Xn,new Qt(ir[Math.floor(a()*ir.length)]))}h.end();let f=0;for(let p=120;p<t.length-60;p+=160+a()*260){if(e.bodies[e.bodyIndexAt(p)].kind!=="pound")continue;const d=a()<.22,g=d?2:2+Math.floor(a()*4);f++;for(let _=0;_<g;_++)this.birds.push({s:p+(a()-.5)*8,d:(a()-.5)*5,vs:0,vd:0,swan:d,heading:a()*6,flock:f,lastQuack:-99})}this.ducks=new Fn(Vd(!1),Oi(),Math.max(1,this.birds.filter(p=>!p.swan).length)),this.swans=new Fn(Vd(!0),Oi(),Math.max(1,this.birds.filter(p=>p.swan).length));for(const p of[this.ducks,this.swans])p.instanceMatrix.setUsage(As),p.frustumCulled=!1,this.group.add(p)}horn(){this.scaredUntil=this.time+6}laneFor(t){return this.ww.halfWidthAt(Te(t.s,0,this.route.length))+1.6+(t.dir>0?-.35:.35)}isKayak(t){return this.kayaks.some(e=>e.obstacle===t)}buildKayak(t,e){const n=new St,i=f=>new Yt({color:f,roughness:.5,flatShading:!0}),o=new Y(new Qe(.5,10,6),i(t));o.scale.set(.62,.32,4.2),o.position.y=.05;const r=new Y(new qt(.16,.2,.55,8),i(e()<.5?"#e0b23a":"#c6392b"));r.position.y=.42;const a=new Y(new Qe(.12,10,8),i("#e9b48f"));a.position.y=.8;const l=new Y(new Qe(.135,10,6,0,Math.PI*2,0,Math.PI/2),i("#f2f2ee"));l.position.y=.82;const c=new St,h=new Y(new qt(.02,.02,2.1,6),i("#2b2b2b"));h.rotation.z=Math.PI/2,c.add(h);for(const f of[-1.05,1.05]){const p=new Y(new gt(.04,.4,.16),i("#1d5fa8"));p.position.x=f,c.add(p)}c.position.set(0,.55,.25);for(const f of[o,r,a,l])f.castShadow=!0;return n.add(o,r,a,l,c),this.group.add(n),{g:n,paddle:c}}updateKayaks(t){const e=this.boat,n=this.route.length;if(!this.kayaks.length){const i=Gi(77);for(const o of["#e8622c","#f2c94c","#3a9a5b"].slice(0,this.kayakCount)){const r=this.buildKayak(o,i),a={x:0,z:0,psi:0,halfL:2.1,halfB:.35};this.boat.obstacles.push(a),this.kayaks.push({...r,s:-1e9,d:0,dir:1,speed:1.1+i()*.5,vd:0,yaw:0,obstacle:a})}}this.kayaks.forEach((i,o)=>{if(i.g.visible=!this.night,this.night){i.s=-1e9,Object.assign(i.obstacle,{x:1e9,z:1e9});return}Math.abs(i.s-e.s)>Zo&&(i.s=Te(e.s+(this.rand()<.5?-1:1)*(Zo-40-o*70-this.rand()*60),10,n-10),i.dir=i.s>e.s?-1:1);const r=Te(i.s+i.dir*15,0,n);(this.ww.bodies[this.ww.bodyIndexAt(r)].kind==="chamber"||r<=1||r>=n-1)&&(i.dir=-i.dir),i.s=Te(i.s+i.dir*i.speed*t,1,n-1);const a=this.ww.halfWidthAt(i.s),l=Math.abs(i.s-e.s)<25,c=i.dir*(l?a-.7:a*.45),h=i.speed*.4,f=Te((c-i.d)*.5,-h,h);i.vd+=Te(f-i.vd,-.5*t,.5*t),i.d=Te(i.d+i.vd*t,-(a-.5),a-.5);const p=-i.dir*Math.atan2(i.vd,i.speed);i.yaw+=(p-i.yaw)*Math.min(1,t*3);const d=this.route.frame(i.s);i.g.position.set(d.x+d.nx*i.d,this.ww.levelAt(i.s),d.z+d.nz*i.d),i.g.rotation.y=Math.atan2(d.tx*i.dir,d.tz*i.dir)+i.yaw,Object.assign(i.obstacle,{x:i.g.position.x,z:i.g.position.z,psi:i.g.rotation.y});const g=this.time*2.6+o;i.paddle.rotation.z=Math.sin(g)*.45,i.paddle.rotation.y=Math.cos(g)*.35})}update(t){this.time+=t,this.updateKayaks(t);const e=this.boat,n=this.route.length,i=e.speed*2.237>3;let o=0,r=0;for(const c of[this.walkers,this.wavers,this.joggers,this.riders])c.begin();this.movers.forEach((c,h)=>{if(h>=Math.round(this.movers.length*this.crowd))return;const f=Math.abs(c.s-e.s);c.kind==="walk"&&!c.waved&&f<22&&this.waveChance>0?(c.waved=!0,this.rand()<this.waveChance&&(c.waveUntil=this.time+3+this.rand()*2)):f>60&&(c.waved=!1);const p=(c.waveUntil??0)>this.time;p||(c.s+=c.dir*c.speed*t,c.phase+=t*c.speed*4.5),(Math.abs(c.s-e.s)>Zo||c.s<5||c.s>n-5)&&(c.s=Te(e.s+(this.rand()<.5?-1:1)*(Zo-20-this.rand()*60),5,n-5),c.dir=c.s>e.s?-1:1,this.rand()<.5&&(c.dir*=-1)),c.d+=(this.laneFor(c)-c.d)*Math.min(1,t*2);const d=this.route.frame(c.s),g=d.x+d.nx*c.d*Xt,_=d.z+d.nz*c.d*Xt,m=c.kind==="cycle"?0:Math.abs(Math.cos(c.phase))*(c.kind==="jog"?.05:.025),u=this.terrain.bankTop(c.s)+(c.kind==="cycle"?-.07:m),M=p?Math.atan2(e.x-g,e.z-_):Math.atan2(d.tx,d.tz)+(c.dir>0?0:Math.PI);ns.setFromAxisAngle(ya,M),Xn.compose(Jo.set(g,u,_),ns,Qo);const x=Math.floor(c.phase/(Math.PI*2)%1*Ko);if(p?this.wavers.put(c.look,Math.floor(this.time*9/(Math.PI*2)*Zl+c.phase),Xn,c.coat):(c.kind==="walk"?this.walkers:c.kind==="jog"?this.joggers:this.riders).put(c.look,c.kind==="cycle"?x%4:x,Xn,c.coat),c.kind==="cycle"&&(Xn.compose(Jo.set(g,this.terrain.bankTop(c.s),_),ns,Qo),this.bikes.setMatrixAt(o++,Xn)),c.dog){const v=Math.sin(c.phase*.3)*.6+1.2,T=g-Math.sin(M)*v+d.nx*.5,E=_-Math.cos(M)*v+d.nz*.5;Xn.compose(Jo.set(T,this.terrain.bankTop(c.s)+Math.abs(Math.sin(c.phase*1.6))*.04,E),ns,Qo),this.dogs.setMatrixAt(r++,Xn)}}),this.bikes.count=o,this.dogs.count=r;for(const c of[this.walkers,this.wavers,this.joggers,this.riders])c.end();for(const c of[this.bikes,this.dogs])c.instanceMatrix.needsUpdate=!0;for(const c of this.anglers)i&&Math.abs(c.s-e.s)<14&&this.time-c.lastGrumble>20&&(c.lastGrumble=this.time,c.angryUntil=this.time+4,this.events.push({kind:"angler"})),Fi(c.person,this.time<c.angryUntil?"shake":"rest",this.time);let a=0,l=0;for(const c of this.birds){const h=c.s-e.s,f=c.d-e.d,p=Math.hypot(h,f),d=this.time<this.scaredUntil,g=d?35:14;p<g?(c.vd+=Math.sign(f||1)*(d?1.4:.6)*t*(g-p)*(d?.4:1),c.vs+=Math.sign(h||1)*.25*t*(g-p)*(d?.4:1),Math.abs(h)<8.5&&Math.abs(f)<1.3&&this.time-(c.lastHit??-99)>10&&(c.lastHit=this.time,c.d=e.d+Math.sign(f||1)*1.8,c.vd=Math.sign(f||1)*1.2,this.events.push({kind:"hitBird",swan:c.swan})),p<5&&this.time-c.lastQuack>6&&!c.swan&&(c.lastQuack=this.time,this.events.push({kind:"quack"}))):(c.vs+=Math.sin(this.time*.3+c.flock*7+c.heading)*.05*t,c.vd+=Math.cos(this.time*.23+c.flock*3)*.04*t);const _=(c.swan?.6:.9)*(d?1.8:1);c.vs=Te(c.vs*(1-t*.4),-_,_),c.vd=Te(c.vd*(1-t*.4),-_,_),c.s=Te(c.s+c.vs*t,5,n-5);const m=this.ww.halfWidthAt(c.s)-.4;c.d=Te(c.d+c.vd*t,-m,m),Math.abs(c.d)>=m&&(c.vd*=-.3);const u=this.route.frame(c.s),M=Math.atan2(u.tx*c.vs+u.nx*c.vd,u.tz*c.vs+u.nz*c.vd);Math.hypot(c.vs,c.vd)>.05&&(c.heading+=Math.atan2(Math.sin(M-c.heading),Math.cos(M-c.heading))*Math.min(1,t*3)),ns.setFromAxisAngle(ya,c.heading),Xn.compose(Jo.set(u.x+u.nx*c.d,this.ww.levelAt(c.s)+Math.sin(this.time*2+c.s)*.01,u.z+u.nz*c.d),ns,Qo),c.swan?this.swans.setMatrixAt(l++,Xn):this.ducks.setMatrixAt(a++,Xn)}this.ducks.count=a,this.swans.count=l,this.ducks.instanceMatrix.needsUpdate=this.swans.instanceMatrix.needsUpdate=!0}}const Cb=5,bi=(s,t={})=>new Yt({color:s,roughness:.6,...t});function Pb(){const s=new St,t=bi("#b8bcc2",{metalness:.8,roughness:.3}),e=(i,o,r,a,l,c)=>{const h=new Y(new gt(i,o,r),t);h.position.set(a,l,c),s.add(h)};for(const i of[.45,.95])e(.55,.025,.025,0,i,.45),e(.55,.025,.025,0,i,-.45),e(.025,.025,.9,.27,i,0),e(.025,.025,.9,-.27,i,0);for(const i of[-.27,.27])for(const o of[-.45,.45])e(.025,.5,.025,i,.7,o);for(let i=-.35;i<=.36;i+=.14)e(.55,.012,.012,0,.45,i);const n=new Y(new gt(.6,.05,.05),bi("#c0392b"));n.position.set(0,1.05,-.52),s.add(n);for(const i of[-.25,.25])for(const o of[-.4,.4]){const r=new Y(new qt(.06,.06,.04,8),bi("#2b2b2b"));r.rotation.z=Math.PI/2,r.position.set(i,.1,o),s.add(r)}return s}function Lb(){const s=new St;for(const n of[-.5,.5]){const i=new Y(new dn(.33,.03,5,14),bi("#1b1b1b"));i.position.set(0,.33,n),i.rotation.y=Math.PI/2,s.add(i)}const t=new Y(new gt(.04,.04,1),bi("#27ae60"));t.position.y=.55,s.add(t);const e=new Y(new gt(.5,.04,.04),bi("#1b1b1b"));return e.position.set(0,.85,.45),s.add(e),s}function Db(s){const t=new St,e=new Y(new qt(.06,.1,s,5),bi("#5a4632"));e.rotation.z=Math.PI/2,t.add(e);const n=new Y(new qt(.02,.04,s*.4,4),bi("#6a5440"));n.position.set(s*.15,.05,.12),n.rotation.set(0,.6,Math.PI/2),t.add(n);const i=new Y(new En(.3,0),bi("#5c7a3a"));return i.position.set(-s*.4,.05,0),i.scale.y=.4,t.add(i),t}const Wd=["trolley","bike","branches"];class Ib{constructor(t,e,n){I(this,"kind","trolley");I(this,"group",new St);I(this,"s",0);I(this,"active",!1);I(this,"spotted",!1);I(this,"progress",0);I(this,"clearing",!1);I(this,"obstacle",{x:0,z:0,psi:0,halfL:1.2,halfB:0});I(this,"pieces",[]);this.route=t,this.ww=e,this.terrain=n}place(t){this.reset(),this.s=t,this.active=!0,this.spotted=!1;const e=this.route.frame(t),n=this.ww.halfWidthAt(t),i=this.ww.levelAt(t),o=Math.atan2(e.tx,e.tz);Object.assign(this.obstacle,{x:e.x,z:e.z,psi:o,halfB:n});const r=(a,l,c,h,f,p,d,g)=>{d.position.set(e.x+e.nx*a+e.tx*l,i+c,e.z+e.nz*a+e.tz*l),d.rotation.set(f,o+h,p),this.group.add(d);const[_,m]=this.route.point(t+g*.6,(n+1.5+Math.abs(g)*.25)*Xt);this.pieces.push({obj:d,from:d.position.clone(),fromRot:d.rotation.clone(),to:new U(_,this.terrain.bankTop(t)+.05,m)})};if(this.kind=Wd[Math.floor(Math.random()*Wd.length)],this.kind==="trolley")r(0,0,-.55,.4,.5,.3,Pb(),0);else if(this.kind==="bike")r(0,.2,-.35,1.2,1.2,.2,Lb(),0);else for(let a=0;a<6;a++){const l=-n+.6+a/5*(n*2-1.2);r(l,a%2?.4:-.4,.02,.3+a*.5,0,0,Db(1.6+a%3*.6),a-3)}for(let a=0;a<4;a++){const l=new Y(a%2?new En(.2,0):new qt(.04,.04,.12,8),bi(["#f2f2f2","#c0392b","#3a3a3a","#2e86c1"][a]));a%2?l.scale.y=.6:l.rotation.z=Math.PI/2,r(-n+1+a*(n*.6),a%2?.7:-.6,.05,a,0,0,l,a-2)}}get description(){return{trolley:{spotted:"Uh-oh: a shopping trolley is jammed in the canal ahead, right in your way.",cleared:"Cleared! One dripping shopping trolley now sits on the towpath. Tesco will be thrilled."},bike:{spotted:"Uh-oh: someone has thrown a bike in the canal ahead, and it's blocking the way.",cleared:"Cleared! A very sorry-looking bike now leans on the towpath fence."},branches:{spotted:"Uh-oh: a raft of fallen branches is jammed across the canal ahead.",cleared:"Cleared! The branches are stacked on the towpath. Someone will be glad of the kindling."}}[this.kind]}reset(){for(const t of this.pieces)this.group.remove(t.obj);this.pieces=[],this.active=!1,this.clearing=!1,this.progress=0}startClearing(){return!this.active||this.clearing?!1:(this.clearing=!0,!0)}update(t,e){return this.active?this.clearing?(this.progress=Math.min(1,this.progress+t/Cb),this.pieces.forEach((n,i)=>{const o=i/this.pieces.length*.85,r=Math.min(1,Math.max(0,(this.progress-o)/.15));r<=0||(n.obj.position.lerpVectors(n.from,n.to,r),n.obj.position.y+=Math.sin(r*Math.PI)*1.4,n.obj.rotation.set(n.fromRot.x*(1-r),n.fromRot.y,n.fromRot.z*(1-r)+(r>.99?i%3*.4:0)))}),this.progress>=1?(this.active=!1,this.clearing=!1,!0):!1):(this.pieces.forEach((n,i)=>n.obj.position.y=n.from.y+Math.sin(e*1.3+i)*.03),!1):!1}}const kb=.75,Ub=1.6,Xd=1.4;class Nb{constructor(t,e,n,i){I(this,"group",new St);I(this,"staffed",new Set);I(this,"active",null);I(this,"helpers",new Map);I(this,"actKey","");I(this,"actAt",0);I(this,"driveTarget",null);I(this,"time",0);I(this,"busyGate",null);I(this,"onDuty",!0);I(this,"night",!1);I(this,"lamps",[]);this.route=t,this.ww=e,this.terrain=n,this.boat=i,this.roster()}roster(){for(const t of this.helpers.values())for(const e of t)this.group.remove(e.person.group);this.helpers.clear(),this.lamps.length=0,this.staffed.clear();for(const t of this.ww.groups){if(!(t.staircase||Math.random()<.4))continue;this.staffed.add(t);const e=[];for(const n of[-3,3]){const i=qn(Wi(Math.random,{coat:"#1d5fa8",trousers:"#2d3a55",longCoat:!1}));this.group.add(i.group),i.group.add(this.headlamp()),e.push({person:i,s:(t.gates[0].s+t.gates.at(-1).s)/2+n,offset:n})}this.helpers.set(t,e)}}helperAt(t,e){const n=this.helpers.get(t);return n!=null&&n.length?n.reduce((i,o)=>Math.abs(o.s-e)<Math.abs(i.s-e)?o:i).person.group.position:null}isStaffed(t){return!!t&&this.onDuty&&this.staffed.has(t)}start(t){this.active=t,this.driveTarget=null,this.actKey=""}stop(){this.active=null,this.driveTarget=null,this.busyGate=null}headlamp(){const t=new St,e=new Y(new gt(.06,.04,.03),new Dn({color:"#fff6d8"}));e.position.set(0,1.74,.1);const n=new Y(new xi(.7,3,16,1,!0),new Dn({color:"#fff3c4",transparent:!0,opacity:.12,depthWrite:!1,blending:ic,side:He}));return n.geometry.translate(0,-1.5,0),n.position.copy(e.position),n.rotation.x=-Math.PI/2+.45,t.add(e,n),t.visible=!1,this.lamps.push(t),t}update(t,e,n){this.time+=t;for(const r of this.lamps)r.visible=this.night;if(this.group.visible=this.onDuty||!!this.active,this.animateHelpers(t),!this.active)return"idle";if(!e||e.group!==this.active)return this.stop(),"done";const i=this.boat,o=n?1:-1;if(e.action==="drive"){if(this.driveTarget===null){const r=this.ww.gates.filter(a=>a.group===this.active&&(a.s-i.s)*o>-.5).sort((a,l)=>(a.s-l.s)*o)[0];if(!r)this.driveTarget=i.s+o*30;else{const a=this.ww.bodies[n?r.above:r.below];this.driveTarget=a.kind==="chamber"?(a.s0+a.s1)/2:r.s+o*(jn/2+14)}}this.creepTo(this.driveTarget,t)}else if(this.driveTarget=null,this.creepTo(null,t),e.gate&&e.action!=="wait"){this.busyGate=e.gate;const r=`${e.action}:${e.gate.label}`;if(r!==this.actKey)this.actKey=r,this.actAt=this.time+Ub+this.walkTime(e.gate);else if(this.time>=this.actAt){const a=e.gate;e.action==="paddlesUp"?a.wantPaddle=!0:e.action==="paddlesDown"?a.wantPaddle=!1:e.action==="close"?a.wantOpen=!1:e.action==="open"&&this.ww.levelsMatch(a)&&(a.wantOpen=!0),this.actKey=""}}else e.gate&&(this.busyGate=e.gate);return"running"}walkTime(t){const e=this.helpers.get(this.active);return e?Math.min(...e.map(n=>Math.abs(n.s-t.s)))/Xd:0}creepTo(t,e){const n=this.boat,i=this.route.frame(n.s);let o=0;if(t!==null){const l=t-n.s;o=Math.sign(l)*Math.min(kb,Math.abs(l)*.5),Math.abs(l)<.05&&(o=0)}n.s+=o*e,n.d+=(0-n.d)*Math.min(1,e*.8);const r=this.route.frame(n.s);n.x=r.x+r.nx*n.d,n.z=r.z+r.nz*n.d;const a=Math.atan2(i.tx,i.tz)+(Math.cos(n.psi-Math.atan2(i.tx,i.tz))>=0?0:Math.PI);n.psi+=Math.atan2(Math.sin(a-n.psi),Math.cos(a-n.psi))*Math.min(1,e*1.5),n.u=Math.abs(o),n.v=n.r=0,n.notch=0,n.thrust=0}animateHelpers(t){var e;for(const[n,i]of this.helpers){const o=this.active===n&&((e=this.busyGate)==null?void 0:e.group)===n;for(const r of i){const a=(n.gates[0].s+n.gates.at(-1).s)/2+r.offset,l=o?this.busyGate.s+r.offset*.9:a,c=Math.sign(l-r.s)*Math.min(Math.abs(l-r.s),Xd*t);r.s+=c;const h=this.ww.halfWidthAt(r.s),f=r.offset<0?Xt:-Xt,[p,d]=this.route.point(r.s,(h+1.1)*f);r.person.group.position.set(p,this.terrain.bankTop(r.s)+(Math.abs(c)>.001?Math.abs(Math.sin(this.time*6))*.03:0),d);const g=this.route.frame(r.s);r.person.group.rotation.y=Math.abs(c)>.001?Math.atan2(g.tx*Math.sign(c),g.tz*Math.sign(c)):Math.atan2(-g.nx*f,-g.nz*f);const _=o&&Math.abs(r.s-l)<.5,m=this.busyGate,u=_&&!!m&&m.paddle>.02&&m.paddle<.98;Math.abs(c)>.001?vr(r.person,this.time*6):(_r(r.person),Fi(r.person,u?"wind":_&&m&&m.open>.02&&m.open<.98?"push":"rest",this.time))}}}}const $d=new Qt("#b0664d"),qd=new Qt("#c9a58a"),Ql=new Qt("#d0b896");class Ob{constructor(){I(this,"pos",[]);I(this,"col",[])}tri(t,e,n,i){for(const o of[t,e,n])this.pos.push(o.x,o.y,o.z),this.col.push(i.r,i.g,i.b)}quad(t,e,n,i,o){this.tri(t,e,n,o),this.tri(t,n,i,o)}mesh(){const t=new xe;t.setAttribute("position",new ne(this.pos,3)),t.setAttribute("color",new ne(this.col,3)),t.computeVertexNormals();const e=new Y(t,new Yt({vertexColors:!0,roughness:.9,flatShading:!0,side:He}));return e.castShadow=e.receiveShadow=!0,e}}class Fb{constructor(t,e,n,i){I(this,"group",new St);this.route=t,this.ww=e,this.terrain=n;const o=new Ob;for(const r of i.walls??[]){const a=[];for(let l=0;l<r.p.length;l+=2)a.push([r.p[l],r.p[l+1]]);r.kind==="gate"?this.gate(o,a):r.closed?this.extrude(o,a,2.4,$d,qd):this.extrude(o,zb(a,1.3),2.4,$d,qd)}this.group.add(o.mesh()),i.bridgeOfSighs&&this.group.add(this.bridgeOfSighs(i.bridgeOfSighs))}ground(t,e){const n=this.route.project(t,e),i=this.ww.halfWidthAt(n.s),o=Math.sign(n.d||1)*Math.max(n.dist,i+7);return this.terrain.landHeight(t,e,n.s,o)}extrude(t,e,n,i,o){const r=e.length;if(r<3)return;const a=e.map(([h,f])=>this.ground(h,f)+n),l=(h,f)=>new U(e[h][0],f,e[h][1]);for(let h=0;h<r;h++){const f=(h+1)%r;t.quad(l(h,a[h]-n-7),l(f,a[f]-n-7),l(f,a[f]),l(h,a[h]),i)}const c=yi.triangulateShape(e.map(([h,f])=>new ct(h,f)),[]);for(const[h,f,p]of c)t.tri(l(h,a[h]),l(f,a[f]),l(p,a[p]),o);for(let h=0;h<r;h++){const f=(h+1)%r,p=Math.hypot(e[f][0]-e[h][0],e[f][1]-e[h][1]);for(let d=.6;d<p-.3;d+=2.2){const g=d/p,_=e[h][0]+(e[f][0]-e[h][0])*g,m=e[h][1]+(e[f][1]-e[h][1])*g,u=a[h]+(a[f]-a[h])*g;ba(t,_,u+.45,m,.9,.9,.5,Math.atan2(e[f][0]-e[h][0],e[f][1]-e[h][1]),i)}}}gate(t,e){const n=e.reduce((E,b)=>E+b[0],0)/e.length,i=e.reduce((E,b)=>E+b[1],0)/e.length;let o=0,r=0,a=0;for(const[E,b]of e)o+=(E-n)**2,r+=(b-i)**2,a+=(E-n)*(b-i);const l=.5*Math.atan2(2*a,o-r),c=Math.cos(l),h=Math.sin(l);let f=1/0,p=-1/0,d=1/0,g=-1/0;for(const[E,b]of e){const R=(E-n)*c+(b-i)*h,S=-(E-n)*h+(b-i)*c;f=Math.min(f,R),p=Math.max(p,R),d=Math.min(d,S),g=Math.max(g,S)}const _=this.ground(n,i),m=p-f,u=Math.max(4,g-d),M=Math.atan2(c,h),x=E=>[n+c*E,i+h*E],[v,T]=x((f+p)/2);ba(t,v,_+7.4,T,u,3.2,m,M,Ql);for(const E of[f+1.8,p-1.8]){const[b,R]=x(E);ba(t,b,_+2.9,R,u,5.8,3.6,M,Ql,6)}ba(t,v,_+9.4,T,u*.15,.9,m,M,Ql)}bridgeOfSighs(t){const e=this.route,n=this.ww,i=e.frame(t.s),o=n.levelAt(t.s),r=n.halfWidthAt(t.s),a=r+7.5,l=Math.max(...[-1,1].map(u=>{const[M,x]=e.point(t.s,a*u);return this.terrain.landHeight(M,x,t.s,a*u)}))+.1,c=a+1,h=r+3.6,f=l-.75,p=o+1.2,d=new fs;d.moveTo(-c,o-2),d.lineTo(-h,o-2),d.lineTo(-h,p);for(let u=1;u<20;u++){const M=Math.PI-Math.PI*u/20;d.lineTo(Math.cos(M)*h,p+Math.sin(M)*(f-p))}d.lineTo(h,p),d.lineTo(h,o-2),d.lineTo(c,o-2),d.lineTo(c,l),d.lineTo(-c,l),d.closePath();const g=2,_=new Y(new Ds(d,{depth:g,bevelEnabled:!1,curveSegments:12}).translate(0,0,-g/2),new Yt({color:"#a8654f",roughness:.9,flatShading:!0}));_.castShadow=_.receiveShadow=!0;const m=new St;return m.add(_),m.position.set(i.x,0,i.z),m.rotation.y=Math.atan2(-i.nz,i.nx),m.name="bridge-of-sighs",m}}function zb(s,t){const e=[],n=[];for(let i=0;i<s.length;i++){const o=s[Math.max(0,i-1)],r=s[Math.min(s.length-1,i+1)];let a=r[0]-o[0],l=r[1]-o[1];const c=Math.hypot(a,l)||1;a/=c,l/=c,e.push([s[i][0]-l*t,s[i][1]+a*t]),n.push([s[i][0]+l*t,s[i][1]-a*t])}return[...e,...n.reverse()]}function ba(s,t,e,n,i,o,r,a,l,c=0){const h=Math.sin(a),f=Math.cos(a),p=(x,v,T)=>new U(t+x*f+T*h,e+v,n-x*h+T*f),d=i/2,g=r/2,_=-o/2-c,m=o/2,u=[p(-d,_,-g),p(d,_,-g),p(d,_,g),p(-d,_,g),p(-d,m,-g),p(d,m,-g),p(d,m,g),p(-d,m,g)],M=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7]];for(const[x,v,T,E]of M)s.quad(u[x],u[v],u[T],u[E],l)}const vo=s=>new Yt({color:s,roughness:.85,flatShading:!0});function Qf(s,t){const e=document.createElement("canvas");e.width=256,e.height=128;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,256,128),n.fillStyle="#f6efdd",n.font="800 34px Nunito, sans-serif",n.textAlign="center",n.textBaseline="middle",s.split(`
`).forEach((r,a,l)=>n.fillText(r,128,64+(a-(l.length-1)/2)*40,236));const i=new Mn(e);i.colorSpace=Ve;const o=new Y(new wi(.8,.4),new Yt({map:i,side:He}));return o.position.y=1,o}function Bb(){const s=new St,t=vo("#6b4a2e"),e=vo("#c9a27a");for(let r=0;r<4;r++)for(let a=0;a<6-r;a++){const l=new Y(new qt(.08,.08,.6,6),(a+r)%3?t:e);l.rotation.x=Math.PI/2,l.position.set(-.4+a*.17+r*.085,.08+r*.14,0),l.castShadow=!0,s.add(l)}const n=new Y(new gt(.3,.3,.25),vo("#3d5a3d"));n.position.set(.85,.15,0),s.add(n);const i=Qf(`LOGS £5
honesty box`,"#3d5a3d");i.position.set(.85,.95,0);const o=new Y(new gt(.06,.8,.06),vo("#5a4632"));return o.position.set(.85,.5,-.05),s.add(i,o),s}function Hb(){const s=new St;for(let n=0;n<5;n++){const i=new Y(new En(.24,1),vo("#3a3a3a"));i.scale.set(1,.7,1.2),i.position.set(-.5+n%3*.45,.16+Math.floor(n/3)*.3,0),i.castShadow=!0,s.add(i)}const t=Qf(`COAL
& kindling`,"#2b2b2b");t.position.set(.85,.95,0);const e=new Y(new gt(.06,.8,.06),vo("#5a4632"));return e.position.set(.85,.5,-.05),s.add(t,e),s}class Gb{constructor(t,e,n,i,o){I(this,"group",new St);I(this,"list",[]);for(const r of i){const a=r.item==="logs"?Bb():Hb(),l=t.frame(r.s),c=(e.halfWidthAt(r.s)+2.2)*Xt;a.position.set(l.x+l.nx*c,n.bankTop(r.s),l.z+l.nz*c),a.rotation.y=Math.atan2(l.tx,l.tz)+Math.PI/2*Xt,a.visible=!o(r.item),this.group.add(a),this.list.push({...r,group:a,verb:r.item==="logs"?"Load the logs (drop a fiver in the honesty box)":"Load a couple of sacks of coal",done:r.item==="logs"?"Logs loaded onto the roof. The stove will be roaring tonight.":"Two sacks of coal on the roof. Toasty."})}}near(t){return this.list.find(e=>e.group.visible&&Math.abs(e.s-t)<22)}}const Vb=1.435,Yd=650,Wb=18,bs=20,co=3;class Xb{constructor(t,e,n,i,o){I(this,"group",new St);I(this,"lines",[]);I(this,"cars",[]);I(this,"run",null);I(this,"nextRun",12);I(this,"time",0);I(this,"rumble",0);this.route=t,this.ww=e,this.terrain=n,this.bridges=i;const r=i.placed.find(u=>u.data.kind==="rail");if(!r)return;const a=[r.x,r.z],l=o.map(u=>{const M=[];for(let x=0;x<u.p.length;x+=2)M.push([u.p[x],u.p[x+1]]);return{pts:M,bridge:u.b===1}}),c=u=>Math.min(...u.pts.map(M=>Math.hypot(M[0]-a[0],M[1]-a[1]))),h=u=>`${u[0]},${u[1]}`,f=new Map;l.forEach((u,M)=>{for(const x of[u.pts[0],u.pts.at(-1)])f.set(h(x),[...f.get(h(x))??[],M])});const p=new Set,d=u=>{for(let M=0;M<200;M++){const x=u.at(-1),v=u.at(-2),T=x[0]-v[0],E=x[1]-v[1];let b=-1,R=.7,S=[];for(const y of f.get(h(x))??[]){if(p.has(y))continue;const P=l[y].pts,w=h(P[0])===h(x)?P:[...P].reverse(),N=w[1][0]-w[0][0],z=w[1][1]-w[0][1],q=(T*N+E*z)/(Math.hypot(T,E)*Math.hypot(N,z)||1);q>R&&(R=q,b=y,S=w)}if(b<0)return;p.add(b),u.push(...S.slice(1))}},g=l.map((u,M)=>({w:u,i:M})).filter(({w:u})=>u.bridge&&c(u)<30);for(const{w:u,i:M}of g){if(p.has(M))continue;p.add(M);const x=[...u.pts];d(x);const v=[...u.pts].reverse();d(v);const T=[...v.reverse().slice(0,-u.pts.length),...x];if(T.length<4)continue;const E=[T[0]];for(let R=1;R<T.length;R++){const[S,y]=T[R-1],[P,w]=T[R],N=Math.max(1,Math.ceil(Math.hypot(P-S,w-y)/4));for(let z=1;z<=N;z++)E.push([S+(P-S)*z/N,y+(w-y)*z/N])}const b=[0];for(let R=1;R<E.length;R++)b.push(b[R-1]+Math.hypot(E[R][0]-E[R-1][0],E[R][1]-E[R-1][1]));b.at(-1)<300||this.lines.push({pts:E,ys:this.gradedHeights(E,b,a),cum:b})}const _=new Set(p);this.buildTrack(this.lines.map(u=>({pts:u.pts,ys:u.ys}))),this.buildTrack(l.map((u,M)=>({w:u,i:M})).filter(({w:u,i:M})=>!_.has(M)&&c(u)<Yd).map(({w:u})=>({pts:u.pts,ys:null}))),o.forEach((u,M)=>{(_.has(M)||c(l[M])<Yd)&&(u.skip=!0)});const m=u=>{const M=Vi($b(u)),x=new Y(M,Oi());x.castShadow=!0;const v=new St;return v.add(x),v.visible=!1,this.group.add(v),v};for(let u=0;u<co;u++)this.cars.push(m(u===0||u===co-1));this.cars[co-1].children[0].rotation.y=Math.PI}gradedHeights(t,e,n){const i=t.map(([c,h])=>this.trackY(c,h));let o=0;t.forEach((c,h)=>{Math.hypot(c[0]-n[0],c[1]-n[1])<Math.hypot(t[o][0]-n[0],t[o][1]-n[1])&&(o=h)});const r=i[o],a=i.map((c,h)=>{let f=0,p=0;for(let d=h;d>=0&&e[h]-e[d]<40;d--)f+=i[d],p++;for(let d=h+1;d<i.length&&e[d]-e[h]<40;d++)f+=i[d],p++;return f/p}),l=.02;return a.map((c,h)=>{const f=l*Math.abs(e[h]-e[o]);c=Math.min(r+f,Math.max(r-f,c));const p=this.route.project(t[h][0],t[h][1]),d=this.bridges.rampAt(p.s,p.d);return d.onDeck?Math.max(c,d.y+.25):c})}trackY(t,e){const n=this.route.project(t,e),i=this.ww.halfWidthAt(n.s),o=n.dist<i+3.5?this.terrain.bankTop(n.s):this.terrain.landHeight(t,e,n.s,n.d);return Math.max(o,this.bridges.rampAt(n.s,n.d).y)+.25}buildTrack(t){const e=[],n=[],i=[],o=new Kn,r=new U(0,1,0),a=new U(1,1,1);for(const{pts:d,ys:g}of t)for(let _=0;_+1<d.length;_++){const[m,u]=d[_],[M,x]=d[_+1],v=Math.hypot(M-m,x-u);if(v<.01)continue;const T=(M-m)/v,E=(x-u)/v,b=-E,R=T;o.setFromAxisAngle(r,Math.atan2(T,E));const S=Math.ceil(v/.7);let y=null;for(let P=0;P<=S;P++){const w=m+T*(v*P)/S,N=u+E*(v*P)/S,z=g?g[_]+(g[_+1]-g[_])*P/S:this.trackY(w,N);P<S&&e.push(new Me().compose(new U(w,z-.12,N),o,a));const q=[w,z,N];if(y){for(const ot of[-1,1]){const Nt=Vb/2*ot,ie=[y[0]+b*Nt,y[1],y[2]+R*Nt],tt=[q[0]+b*Nt,q[1],q[2]+R*Nt];n.push(ie[0],ie[1]-.1,ie[2],tt[0],tt[1]-.1,tt[2],tt[0],tt[1],tt[2]),n.push(ie[0],ie[1]-.1,ie[2],tt[0],tt[1],tt[2],ie[0],ie[1],ie[2])}const V=1.7,$=[y[0]-b*V,y[1]-.2,y[2]-R*V],G=[y[0]+b*V,y[1]-.2,y[2]+R*V],dt=[q[0]-b*V,q[1]-.2,q[2]-R*V],pt=[q[0]+b*V,q[1]-.2,q[2]+R*V];i.push(...$,...dt,...G,...G,...dt,...pt)}y=q}}const l=new gt(2.5,.12,.24),c=new Fn(l,new Yt({color:"#5a4a3c",roughness:1}),e.length);e.forEach((d,g)=>c.setMatrixAt(g,d)),c.receiveShadow=!0,this.group.add(c);const h=new xe;h.setAttribute("position",new ne(i,3)),h.computeVertexNormals();const f=new Y(h,new Yt({color:"#6d635a",roughness:1,side:He}));f.receiveShadow=!0,this.group.add(f);const p=new xe;p.setAttribute("position",new ne(n,3)),p.computeVertexNormals(),this.group.add(new Y(p,new Yt({color:"#8d9196",metalness:.7,roughness:.35,side:He})))}at(t,e){const{pts:n,ys:i,cum:o}=t;e=Math.max(0,Math.min(o.at(-1),e));let r=1;for(;r<o.length-1&&o[r]<e;)r++;const a=(e-o[r-1])/(o[r]-o[r-1]||1);return[n[r-1][0]+(n[r][0]-n[r-1][0])*a,i[r-1]+(i[r]-i[r-1])*a,n[r-1][1]+(n[r][1]-n[r-1][1])*a]}update(t,e){if(this.time+=t,this.rumble=0,!this.lines.length)return;if(!this.run){for(const h of this.cars)h.visible=!1;if(this.time<this.nextRun)return;const l=Math.floor(Math.random()*this.lines.length),c=Math.random()<.5?1:-1;this.run={line:l,dir:c,dist:c>0?-10:this.lines[l].cum.at(-1)+bs*co+10}}const n=this.run,i=this.lines[n.line];n.dist+=n.dir*Wb*t;const o=i.cum.at(-1);let r=1/0;this.cars.forEach((l,c)=>{const h=n.dist-n.dir*c*(bs+1),f=h-n.dir*bs,p=Math.max(h,f)>0&&Math.min(h,f)<o;if(l.visible=p,!p)return;const d=this.at(i,h),g=this.at(i,f),_=this.at(i,(h+f)/2);l.position.set(_[0],_[1],_[2]),l.rotation.set(0,Math.atan2(d[0]-g[0],d[2]-g[2]),0),l.rotateX(-Math.atan2(d[1]-g[1],bs)),r=Math.min(r,l.position.distanceTo(e))}),this.rumble=Math.max(0,1-r/350),(n.dir>0?n.dist-co*(bs+1)>o:n.dist+co*(bs+1)<0)&&(this.run=null,this.nextRun=this.time+50+Math.random()*50)}}function $b(s){const t=new St,e=(o,r={})=>new Yt({color:o,...r}),n=(o,r,a,l,c,h,f)=>{const p=new Y(new gt(o,r,a),e(l));return p.position.set(c,h,f),t.add(p),p},i=bs-.4;n(2.7,2.6,i,"#c8102e",0,2.25,0),n(2.72,.9,i*.98,"#3a3f45",0,2.5,0),n(2.74,.12,i*.98,"#f4f4f0",0,1.65,0),n(2.6,.25,i*.99,"#9aa0a6",0,3.6,0),n(2.5,.6,i*.9,"#2b2b2b",0,.75,0);for(const o of[-i/2+3,i/2-3]){n(2.2,.5,2.4,"#1b1b1b",0,.45,o);for(const r of[-.8,.8])for(const a of[-.75,.75]){const l=new Y(new qt(.42,.42,.12,10),e("#3a3a3a"));l.rotation.z=Math.PI/2,l.position.set(a,.42,o+r),t.add(l)}}for(let o=0;o<2;o++)n(.06,2,.9,"#2b2b2b",o?1.36:-1.36,2.1,-i/2+1.6);if(s){const o=new Y(new qt(1.35,1.35,2.6,8,1,!1,0,Math.PI),e("#c8102e"));o.rotation.set(Math.PI/2,0,Math.PI/2),o.scale.set(1,1,.5),o.position.set(0,2.25,i/2),t.add(o),n(2.2,1.2,.5,"#f2c200",0,1.4,i/2+.45),n(2,.7,.3,"#22282e",0,2.75,i/2+.45)}return t}const xs=48,qb=.35,tc=14,Yb=.8,jd=1.1;class jb{constructor(t,e,n){I(this,"mesh");I(this,"points",[]);I(this,"emitIn",0);I(this,"pos");I(this,"col");I(this,"uv");I(this,"churn");I(this,"washed",new Map);I(this,"time",0);this.route=t,this.ww=e;const i=xs*4;this.pos=new Float32Array(i*3),this.col=new Float32Array(i*4),this.uv=new Float32Array(i*2);const o=[];for(const a of[0,1]){const l=a*xs*2;for(let c=0;c<xs-1;c++){const h=l+c*2,f=h+1,p=h+2,d=h+3;o.push(h,p,f,f,p,d)}}const r=new xe;r.setAttribute("position",new tn(this.pos,3).setUsage(As)),r.setAttribute("color",new tn(this.col,4).setUsage(As)),r.setAttribute("uv",new tn(this.uv,2).setUsage(As)),r.setIndex(o),this.mesh=new Y(r,new Dn({map:Kb(),vertexColors:!0,transparent:!0,depthWrite:!1,side:He})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.churn=new Y(new vh(1,18),new Dn({color:"#f4f8f4",transparent:!0,opacity:0,depthWrite:!1})),this.churn.rotation.x=-Math.PI/2,this.churn.position.set(0,.04,-9.6),n.add(this.churn)}update(t,e,n,i,o,r){this.time+=t;for(const h of this.points)h.age+=t;for(;this.points.length&&this.points[0].age>tc;)this.points.shift();const a=ke(2.6,4.6,o);if(this.emitIn-=t,this.emitIn<=0)if(this.emitIn=qb,a>.02){const h=-Math.cos(i),f=Math.sin(i);this.points.push({s:e,x:n[0],z:n[1],nx:h,nz:f,age:0,strength:a,start:1}),this.points.length>xs&&this.points.shift()}else this.points.length&&this.points.at(-1).strength>0&&(this.points.push({s:e,x:n[0],z:n[1],nx:-Math.cos(i),nz:Math.sin(i),age:0,strength:0,start:1}),this.points.length>xs&&this.points.shift());this.col.fill(0);const l=[...this.points].reverse();for(const h of[0,1]){const f=h?1:-1,p=h*xs*2;for(let d=0;d<xs;d++){const g=l[Math.min(d,l.length-1)],_=(p+d*2)*3,m=(p+d*2)*4;if(!g)continue;const u=this.spread(g),M=this.ww.levelAt(g.s)+.03,x=d<l.length?g.strength*(1-g.age/tc)**1.5*.75:0;for(const[v,T]of[[0,u-jd/2],[1,u+jd/2]])this.pos[_+v*3]=g.x+g.nx*T*f,this.pos[_+v*3+1]=M,this.pos[_+v*3+2]=g.z+g.nz*T*f,this.col.set([.95,.97,.95,x],m+v*4),this.uv.set([v,g.s*.12],(p+d*2+v)*2)}}this.mesh.geometry.getAttribute("position").needsUpdate=!0,this.mesh.geometry.getAttribute("color").needsUpdate=!0,this.mesh.geometry.getAttribute("uv").needsUpdate=!0;const c=this.churn.material;c.opacity=Te(r,0,1)*(.3+.1*Math.sin(this.time*11)),this.churn.scale.setScalar(.7+r*.6+.05*Math.sin(this.time*7))}spread(t){const e=this.ww.halfWidthAt(t.s);return Math.min(t.start+t.age*Yb,e+.4)}washes(t){const e=[];for(const n of t){if(this.time-(this.washed.get(n)??-99)<12)continue;const i=this.route.project(n.x,n.z,n.s).d,o=Math.sign(i)||1;for(const r of this.points){if(r.strength<.15||Math.abs(r.s-n.s)>n.halfL)continue;const l=this.route.project(r.x,r.z,r.s).d+o*this.spread(r);if(o*l>=Math.abs(i)-n.halfB-.2){const c=r.strength*(1-r.age/tc);if(c<.1)continue;this.washed.set(n,this.time),e.push({boat:n,strength:c});break}}}return e}}function Kb(){const e=document.createElement("canvas");e.width=64,e.height=256;const n=e.getContext("2d"),i=n.createImageData(64,256);for(let r=0;r<256;r++)for(let a=0;a<64;a++){const l=a/63,c=Math.sin(l*Math.PI)**1.5,h=Math.random()**2.2,f=.5+.5*Math.sin(r*.35+Math.sin(a*.4)*2),p=c*Math.min(1,h*1.6+f*.25),d=(r*64+a)*4;i.data[d]=i.data[d+1]=i.data[d+2]=255,i.data[d+3]=p*255}n.putImageData(i,0,0);const o=new Mn(e);return o.wrapS=Ui,o.wrapT=Eo,o}const Kd=["#c0392b","#2e86c1","#f4f4f0","#2b2b2b","#7f8c8d","#27ae60","#d35400","#1d3557","#b8b8b8","#8e44ad"],Es=4.3;function Zb(){const s=new St,t=new St,e=o=>new Yt({color:o}),n=(o,r,a,l,c,h,f=0)=>{const p=new Y(new gt(r,a,l),e(c));p.position.set(0,h,f),o.add(p)};n(s,1.78,.62,Es,"#ffffff",.6),n(s,1.6,.5,2.3,"#ffffff",1.15,-.25),n(t,1.62,.42,2,"#26313a",1.12,-.2),n(t,1.82,.16,.2,"#1b1b1b",.42,Es/2),n(t,1.82,.16,.2,"#1b1b1b",.42,-Es/2),n(t,1.4,.12,.05,"#f6efc8",.72,Es/2+.01),n(t,1.4,.12,.05,"#b8241b",.72,-Es/2-.01);for(const o of[-.82,.82])for(const r of[-1.35,1.35]){const a=new Y(new qt(.33,.33,.22,10),e("#1b1b1b"));a.rotation.z=Math.PI/2,a.position.set(o,.33,r),t.add(a)}const i=o=>{const r=new St;return r.add(o),Vi(r)};return{body:i(s),rest:i(t)}}class Jb{constructor(t){I(this,"group",new St);I(this,"paths",[]);I(this,"cars",[]);I(this,"body");I(this,"rest");I(this,"rand",Gi(99));I(this,"respawn");for(const a of t){const l=[0];for(let c=1;c<a.pts.length;c++)l.push(l[c-1]+Math.hypot(a.pts[c][0]-a.pts[c-1][0],a.pts[c][2]-a.pts[c-1][2]));l.at(-1)<40||this.paths.push({pts:a.pts,cum:l,lane:Math.min(2.2,Math.max(1.1,a.w/4)),bridge:a.bridge})}const e=this.paths.map(a=>(a.bridge?12:1)*Math.min(3,a.cum.at(-1)/120)),n=e.reduce((a,l)=>a+l,0),i=this.paths.length?Math.min(60,Math.round(n*1.5)):0,o=Zb();this.body=new Fn(o.body,Oi(),Math.max(1,i)),this.rest=new Fn(o.rest,Oi(),Math.max(1,i));for(const a of[this.body,this.rest])a.castShadow=!0,a.frustumCulled=!1,a.instanceMatrix.setUsage(As),this.group.add(a);const r=()=>{let a=this.rand()*n;for(let l=0;l<e.length;l++)if((a-=e[l])<=0)return l;return e.length-1};for(let a=0;a<i;a++){const l=r(),c={path:l,dist:this.rand()*this.paths[l].cum.at(-1),dir:this.rand()<.5?1:-1,speed:8+this.rand()*5,colour:new Qt(Kd[Math.floor(this.rand()*Kd.length)])};this.cars.push(c),this.body.setColorAt(a,c.colour)}this.body.count=this.rest.count=i,this.respawn=a=>{a.path=r(),a.dir=this.rand()<.5?1:-1,a.dist=a.dir>0?0:this.paths[a.path].cum.at(-1),a.speed=8+this.rand()*5}}at(t,e){e=Math.max(0,Math.min(t.cum.at(-1),e));let n=1;for(;n<t.cum.length-1&&t.cum[n]<e;)n++;const i=(e-t.cum[n-1])/(t.cum[n]-t.cum[n-1]||1),o=t.pts[n-1],r=t.pts[n];return[o[0]+(r[0]-o[0])*i,o[1]+(r[1]-o[1])*i,o[2]+(r[2]-o[2])*i]}update(t){const e=new Me,n=new Kn,i=new ci(0,0,0,"YXZ"),o=new U,r=new U(1,1,1);this.cars.forEach((a,l)=>{const c=this.paths[a.path];a.dist+=a.dir*a.speed*t,(a.dist<0||a.dist>c.cum.at(-1))&&this.respawn(a);const h=this.paths[a.path],f=this.at(h,a.dist+a.dir*Es*.45),p=this.at(h,a.dist-a.dir*Es*.45),d=f[0]-p[0],g=f[2]-p[2],_=Math.hypot(d,g)||1,m=g/_,u=-d/_;o.set((f[0]+p[0])/2+m*h.lane,(f[1]+p[1])/2,(f[2]+p[2])/2+u*h.lane),i.set(-Math.atan2(f[1]-p[1],_),Math.atan2(d,g),0),n.setFromEuler(i),e.compose(o,n,r),this.body.setMatrixAt(l,e),this.rest.setMatrixAt(l,e)}),this.body.instanceMatrix.needsUpdate=this.rest.instanceMatrix.needsUpdate=!0}}const is=[2,5,10,30],Zd=10,ec=8,Jd=20,Je=Eh==="pontcysyllte",Qd={coat:"#e8b931",trousers:"#2d3a55",skin:"#e3b08f",hair:"#5a3a22",hairStyle:"cap",hat:"#3d4a3a",longCoat:!1},nc=80;function wa(s){const t=Math.abs(s)*3.281;return t<1e3?`${Math.round(t/10)*10} ft`:`${(t/5280).toFixed(1)} mi`}function tf(s,t,e=!1,n=13){if(e&&(t==="pub"||t==="bar"||t==="hotel")&&s!=="The Cheshire Cat")return`You moor up and tuck into ${n<11?"a full breakfast":n<16?"a pub lunch":"a hearty supper"} at ${s}, with a pint of something local. An hour slips happily by. 🍽️`;const i={pub:`You moor up and pop into ${s} for a pint of something local. An hour slips happily by.`,bar:`A drink at ${s}, watching the boats go by. An hour slips happily by.`,cafe:`Tea and a slab of cake at ${s}, eaten on the roof. An hour slips happily by.`,supermarket:`You nip into ${s} for milk, bread and far too many biscuits.`,ice_cream:`An ice cream from ${s}, eaten on the roof. Bliss.`,restaurant:`A proper meal at ${s}. Nobody has to cook in the galley tonight. An hour slips happily by.`,hotel:`You stretch your legs and have a nose round ${s}. An hour slips happily by.`};return s==="The Cheshire Cat"?"Supper at the Cheshire Cat: a table by the window, watching the boats tie up for the night. An hour slips happily by.":i[t]??`You stop at ${s}. An hour slips happily by.`}function Qb(s,t){return{Northgate:"Above you: the Northgate, one of the medieval gateways through Chester’s city walls. The canal runs along the old moat.","Water Tower":"Off to the side: the Water Tower, built in the 1320s to guard the old river port when the Dee still reached the walls.","Lead Shot Tower":"That tall brick tower is the Lead Shot Tower (1799), where molten lead was dropped from the top to make shot.","Bridge of Sighs":"Overhead: the Bridge of Sighs (1793). Condemned prisoners from the Northgate gaol were led across it to the chapel for their last rites.","King Charles Tower":"Up on the walls: King Charles’ Tower. Legend has it Charles I watched his army lose the Battle of Rowton Moor from here in 1645.","Morgan's Mount":"Morgan’s Mount, a little gun platform on the walls from the Civil War siege of Chester.","Pemberton's Parlour":"Pemberton’s Parlour, a tower on the walls named after an 18th-century ropemaker who watched his men at work from it."}[s]??`Look out: ${s}${t==="tower"?", part of the old city walls":""}.`}const ef=['% rocks in your wash. "Tickover past moored boats, please!"',"A mug of tea slides off the roof of %. Slow down past moored boats!","The owner of % gives you a Look. Ease off to tickover when passing."],t1=1/60,ho=s=>s[0].toUpperCase()+s.slice(1),ii=2.23694,tp=document.getElementById("loading"),ep=document.getElementById("loading-text"),e1=tp.querySelector(".bar div");let n1=0;async function ss(s){ep.textContent=s,e1.style.width=`${Math.min(100,++n1*11)}%`,await new Promise(t=>requestAnimationFrame(()=>setTimeout(t,0)))}async function i1(){await ss("Fetching the map…");const s=await Ox(`./data/${Eh}.json`);await document.fonts.ready;const t=document.getElementById("scene"),e=new DM({canvas:t,antialias:!0});e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setSize(t.clientWidth,t.clientHeight,!1),e.toneMapping=rf,e.toneMappingExposure=.62,e.shadowMap.enabled=!0,e.shadowMap.type=sf;const n=new Nf,i=new On(55,t.clientWidth/t.clientHeight,.4,4500);await ss("Surveying the canal…");const o=new Fx(s.centreline),r=s.meta.aqueduct??[s.meta.towerWharfS-400,s.meta.towerWharfS-100],a=Math.sign(s.meta.towerWharfS-(r[0]+r[1])/2)||1,l=a>0?r[0]:r[1],c=new $x(s.locks,s.bridges,o.length,Je?[60,o.length-60]:[4700,o.length-130,s.meta.towerWharfS-60],0,Je&&s.meta.aqueduct?[r]:[]),h=[],f=[];for(let D=0;D<s.centreline.length;D+=2)h.push(s.centreline[D]),f.push(s.centreline[D+1]);const p=520,d={x0:Math.min(...h)-p,x1:Math.max(...h)+p,z0:Math.min(...f)-p,z1:Math.max(...f)+p},g=new Kx(o,c,d,Je&&s.meta.aqueduct?{s0:r[0],s1:r[1],depth:38}:void 0);g.cuttings=s.cuttings??[],g.setRivers(s.rivers),g.urbanAt=ly(s.buildings,d);const _=s.parks.map(D=>{let O=1/0,F=-1/0,et=1/0,ft=-1/0;for(let Ft=0;Ft<D.p.length;Ft+=2)O=Math.min(O,D.p[Ft]),F=Math.max(F,D.p[Ft]),et=Math.min(et,D.p[Ft+1]),ft=Math.max(ft,D.p[Ft+1]);return{ring:D.p,x0:O,x1:F,z0:et,z1:ft}});g.parkAt=(D,O)=>_.some(F=>D>=F.x0&&D<=F.x1&&O>=F.z0&&O<=F.z1&&wh(D,O,F.ring)),await ss("Digging the cut…");const m=new fy(o,c,s.bridges,g);g.embankments=m.placed.filter(D=>D.data.kind==="road"&&D.data.w>3.5).map(D=>({x:D.x,z:D.z,ux:Math.sin(D.data.dir),uz:Math.cos(D.data.dir),deck:D.deck,halfSpan:D.halfSpan,halfWidth:D.data.w/2+2})),n.add(g.buildStrip()),await ss("Shaping the land…"),n.add(g.buildFar()),await ss("Filling it with water…");const u=new ty(o,c);u.addRivers(s.rivers,g.riverLevel);for(const D of s.water){let O=0,F=0;const et=D.p.length/2;for(let ft=0;ft<D.p.length;ft+=2)O+=D.p[ft]/et,F+=D.p[ft+1]/et;o.project(O,F).dist<40||u.addPond(D.p,g.heightAt(O,F)-.25)}n.add(u.group),n.add(m.group),n.add(new Fb(o,c,g,s).group);const M=new Xb(o,c,g,m,s.rails);n.add(M.group);const x=new My(o,c,g);n.add(x.group);const v=Je?s.meta.towerWharfS+a*120:s.meta.towerWharfS-70,T=[{name:"Tesco",kind:"supermarket",type:"stop",x:0,z:0,s:1250,dist:30,rank:-1},{name:"Waitrose",kind:"supermarket",type:"stop",x:0,z:0,s:1950,dist:40,rank:-1}],E=Je?[{id:"trevor",name:"Trevor Basin",s0:Math.min(s.meta.towerWharfS+a*30,s.meta.towerWharfS+a*75),s1:Math.max(s.meta.towerWharfS+a*30,s.meta.towerWharfS+a*75)},{id:"fron",name:"Froncysyllte",s0:Math.min(l-a*150,l-a*200),s1:Math.max(l-a*150,l-a*200)}]:void 0;Je&&ki.splice(0,ki.length,{from:"trevor",zone:"fron",title:"Across the sky",brief:"Take her over Pontcysyllte Aqueduct, 126 ft above the River Dee, and moor at Froncysyllte. Dead slow, and don't look down."},{from:"fron",zone:"trevor",title:"Back to Trevor Basin",brief:"Back across the aqueduct to Trevor Basin, where the boats tie up under the trees."});const b=new hb(o,c,g,s.bridges,s.meta.towerWharfS,v,[...Je?[]:T,...s.pois??[]],E);n.add(b.group);const R=new cy(s,o,c,g,m);await R.build(ss),n.add(R.group);const S=new Jb(R.carPaths);n.add(S.group),await ss("Lighting the stove…");const y=new by(n,e),P=Sh();P.group.rotation.order="YXZ",n.add(P.group);const w=new By(o,c);w.placeAt(v,Je?a<0:!0),w.obstacles=[...b.boats];const N=new Mb(o,c,g,w),z=new lb(P.group),q=new jb(o,c,P.group);n.add(q.mesh),n.add(N.group);const V=new yb(o,c,b,w);V.blockedAt=()=>Nt.filter(D=>D.active).map(D=>D.s),Je&&s.meta.aqueduct&&(V.narrows=[r]),n.add(V.group);const $=new Sb(o,c,g,R,b,s.bridges);n.add($.group);const G=new Rb(o,c,g,w,$.anglerSpots.filter(D=>g.aqueductCore(D.s)===0),$.gardens);G.kayakCount=Je?3:1,n.add(G.group),Je&&s.meta.aqueduct&&n.add(Qy(o,c,g,r[0],r[1]));let dt=0,pt=null;const ot=new Nb(o,c,g,w);n.add(ot.group);const Nt=[],ie=b.zones.find(D=>/Lock Keeper/.test(D.name)),tt=[ie?ie.s1+30:1390,2185],_t=D=>{for(let O=0;O<120;O++){const F=D+(O%2?1:-1)*Math.ceil(O/2)*2;if(!(s.bridges.some(et=>Math.abs(et.s-F)<et.w/2+20)||c.gates.some(et=>Math.abs(et.s-F)<40))&&!b.zones.some(et=>F>et.s0-8&&F<et.s1+8)&&!b.boats.some(et=>Math.abs(et.s-F)<et.halfL+6)&&c.bodies[c.bodyIndexAt(F)].kind==="pound"&&!(Je&&F>r[0]-60&&F<r[1]+60))return F}return D};for(const D of tt){const O=new Ib(o,c,g);O.s=_t(D),b.clearAround(O.s,nc-10,w.obstacles),n.add(O.group),Nt.push(O)}const At=new Gb(o,c,g,[{item:"logs",s:_t(Je?Math.min(o.length-80,s.meta.towerWharfS+a*400):3620)},{item:"coal",s:_t(s.meta.towerWharfS-150)}],D=>z.has(D));for(const D of At.list)b.clearAround(D.s,25,w.obstacles);n.add(At.group);const xt=Yy,jt=['"Any chance of a lift to %? My feet are killing me."',`"Going towards %? I'd love a ride, I've never been on a narrowboat."`,`"You couldn't drop me at %, could you? I'll work the locks!"`,`"Room for a little one? I'm meeting friends at %."`],ht={firewood:[`"I've bought a load of firewood for my boat, she's moored at %. Could it ride on your roof?"`,`"Logs for the stove, and my boat's down at %. I'll never carry this lot all that way…"`],shopping:['"Just done the big shop. Any chance of a lift back to my boat at %? These bags weigh a ton."',`"Groceries for the week and my boat's at %. Room for me and a few bags?"`]},wt=D=>{if(D==="firewood"){const F=Nn.logs.build();return F.position.set(-.3,Jf,1.6),F}const O=new St;return["#f2f2ee","#3a7d44","#f2f2ee","#e07a1f"].forEach((F,et)=>{const ft=new Y(new gt(.3,.36,.18),new Yt({color:F,roughness:.9}));ft.position.set(.45+et%2*.12,.38+.18,17.4/2-2.9+et*.22),ft.rotation.y=et*.4,O.add(ft)}),O};let Ht="trip";const nt=()=>{setTimeout(()=>{!N.moored||!y.isNight||j.offerOpen||Wt.result||(Ht="sleep",j.showOffer("Moored for the night","Turn in till morning?",K.hungry?"Bank up the stove and sleep till first light… though you'll sleep badly on an empty stomach. Cook something first?":"Bank up the stove, put the kettle on, and sleep until first light.","Sleep till morning","Not yet"))},2500)};let mt=0,k=null;const zt=()=>{if(!k)return;const D=k;k=null,setTimeout(()=>n.remove(D.person.group),6e3)},vt=D=>{const O=qn({coat:"#3d4a3a",trousers:"#2d3a55",hair:"#9a9a9a",hairStyle:"cap",hat:"#4a3f33",longCoat:!0}),F=o.frame(D),et=(c.halfWidthAt(D)+1.4)*Xt;O.group.position.set(F.x+F.nx*et,g.bankTop(D),F.z+F.nz*et),O.group.rotation.y=Math.atan2(-F.nx*Xt,-F.nz*Xt),n.add(O.group),k={person:O,turning:null},Ht="helper",j.showOffer("On the towpath","Need a hand?",`An old boater in a flat cap has been watching for a while. "Having a spot of bother? Here, let me show you how it's done."`,"Yes please","I've got this")},Pt=D=>{if(!k)return;N.castOff();const O=o.frame(D),F=Math.atan2(O.tx,O.tz),et=Math.cos(w.psi-F)>=0,ft=F+(et?Math.PI:0);let Ft=Math.atan2(Math.sin(ft-w.psi),Math.cos(ft-w.psi));Math.abs(Ft)<.3&&(Ft=Math.PI),k.turning={t:0,s:D,psi0:w.psi,psi1:w.psi+Ft,x0:w.x,z0:w.z},j.toast("The old boater hops aboard, takes the tiller and talks you through it…","info",5e3)};let Mt=null,kt=null;const Ot=new Set;for(const D of b.zones)D.kind==="stop"&&b.addStopMarker(D);const L=new Map,A=b.zones.filter(D=>{var O;return D.kind==="stop"&&/pub|bar|supermarket/.test(((O=D.poi)==null?void 0:O.kind)??"")}),Z=(D=[])=>{const O=A.filter(le=>!L.has(le.id)&&!D.includes(le.id));if(!O.length)return;const F=O[Math.floor(Math.random()*O.length)],et=qn(Wi(Math.random)),ft=(F.s0+F.s1)/2,Ft=o.frame(ft),ee=(c.halfWidthAt(ft)+1.4)*Xt;et.group.position.set(Ft.x+Ft.nx*ee,g.bankTop(ft),Ft.z+Ft.nz*ee),et.group.rotation.y=Math.atan2(-Ft.nx*Xt,-Ft.nz*Xt),n.add(et.group),L.set(F.id,et)},st=D=>{const O=L.get(D);O&&(n.remove(O.group),L.delete(D),Z([D]))};for(let D=0;D<3;D++)Z();const ut=D=>D.name.split(",")[0],rt=D=>{Ht="trip",Wt.choose(D);const O=o.frame(w.s),F=Math.sin(w.psi)*O.tx+Math.cos(w.psi)*O.tz>=0?1:-1,et=B(Wt.current.zone),ft=(et.s0+et.s1)/2,Ft=Math.min(w.s,ft),ee=Math.max(w.s,ft),le=c.gates.filter(pn=>pn.s>Ft&&pn.s<ee&&pn.label!=="top gates").length,pe=le?` · ${le} lock${le>1?"s":""}`:"",Se=wa(ft-w.s),Ze=(ft-w.s)*F>0?`${Se} ahead${pe}`:`${Se} behind you: turn round at a winding hole${pe}`;j.showOffer("Mission",Wt.current.title,`${Wt.current.brief}<br><b>${Ze}</b>`)},$t=new Set;for(const D of ki)b.addStart(D.from);const Et=()=>{const D=Vt||!!Wt.result;ki.forEach((O,F)=>b.showStart(O.from,!D&&!Wt.done.has(F))),Ce.setMissionStarts(ki.filter((O,F)=>!Wt.done.has(F)&&!(Vt&&F===Wt.index)).map(O=>{const F=B(O.from);return o.point((F.s0+F.s1)/2,0)}),D)},It=new Set,ve=D=>{var pn;if(Mt||!L.has(D.id)||j.offerOpen||Wt.result||It.has(D.id))return;if(It.add(D.id),kt)return void j.toast(`Someone at ${D.name} waves hopefully, but you've already got a passenger aboard.`,"info",4e3);if(!at.atLeast("a bit of a liability")||!at.atLeast("new on the cut")&&Math.random()<.5){j.toast(`"The Chester Rose? I've heard bad things about the Chester Rose. Not getting on there, thanks." They set off up the towpath on foot.`,"warn",5500),st(D.id);return}Ot.add(D.id);const O=o.frame(w.s),F=Math.sin(w.psi)*O.tx+Math.cos(w.psi)*O.tz>=0?1:-1,et=$e=>($e.s0+$e.s1)/2,ft=b.zones.filter($e=>$e!==D&&Math.abs(et($e)-w.s)>250&&Math.abs(et($e)-w.s)<1800);if(!ft.length)return void j.toast(`The person at ${D.name} is waiting for a boat going further than this.`,"info",4e3);const Ft=ft.filter($e=>Math.sign(et($e)-w.s)===F),ee=Ft.length?Ft:ft,le=ee.sort(($e,di)=>Math.abs(et($e)-w.s)-Math.abs(et(di)-w.s))[Math.floor(Math.random()*Math.min(2,ee.length))],pe=xt[Math.floor(Math.random()*xt.length)],Se=Math.random(),Ze=((pn=D.poi)==null?void 0:pn.kind)==="supermarket"?"shopping":Se<.3?"firewood":void 0;Mt={name:pe,dest:le,from:D.name,cargo:Ze},setTimeout(()=>{if((Mt==null?void 0:Mt.name)!==pe||!N.moored||j.offerOpen){Mt=null,It.delete(D.id);return}Ht="lift";const $e=Ze?ht[Ze]:jt;j.showOffer(`At ${D.name}`,`Fancy giving ${pe} a lift?`,$e[Math.floor(Math.random()*$e.length)].replace("%",ut(le)),"Hop aboard","Sorry, not today")},1800)},yt=()=>{if(!Mt)return;const D=b.zoneAt(w.s);D&&st(D.id);const O=qn(Wi(Math.random));O.group.position.set(0,.38,17.4/2-2.6),Mr(O);const F=new Y(new gt(.9,.45,.5),new Yt({color:"#7a5a3a"}));F.position.set(0,.92-.225,-.08),O.group.add(F),P.group.add(O.group);const et=Mt.cargo,ft=et&&wt(et);ft&&P.group.add(ft),kt={name:Mt.name,dest:Mt.dest,person:O,cargo:et,load:ft},b.setLiftDest(kt.dest);{const[ee,le]=o.point((kt.dest.s0+kt.dest.s1)/2,0);Ce.liftDest={x:ee,z:le}}const Ft=et==="firewood"?", heaves the firewood up onto your roof,":et==="shopping"?", stows the shopping bags in the well deck,":"";at.change(2,"pickup",0),j.toast(`${kt.name} hops aboard${Ft} and settles in the bow. Next stop: ${ut(kt.dest)}.`,"info",4500),Mt=null},Gt=()=>{if(!kt)return;at.change(6,"lift",0),P.group.remove(kt.person.group),kt.load&&P.group.remove(kt.load),b.setLiftDest(null),Ce.liftDest=null;const D=kt.cargo==="firewood"&&!z.has("logs")?"logs":z.nextFrom(ab);D&&z.give(D),j.toast(D?`${kt.name} hops off with a cheery wave, and leaves you ${Nn[D].name} for the roof. 🎁`:`${kt.name} hops off with a cheery wave, and presses a slice of cake into your hand.`,"info",6e3),kt=null},se=()=>{for(const D of Nt){const O=w.obstacles.indexOf(D.obstacle);O>=0&&w.obstacles.splice(O,1),D.place(D.s),w.obstacles.push(D.obstacle)}Ce.setHazards(Nt.filter(D=>D.active).map(D=>o.point(D.s,0)))},oe=b.zones.filter(D=>D.kind==="stop"),Bt=(s.pois??[]).filter(D=>D.type==="sight"),_e=new Set,he=new Set,Wt=new xb(y.clock),B=D=>b.zones.find(O=>O.id===D),at=new qy,K=new Ky,it=new Zy,Rt=()=>Je?(B("trevor").s0+B("trevor").s1)/2:v,Lt=30,re=Je?"the boatyard at Trevor Basin":"Taylor's Boatyard";let Be=!1,sn=-99,we=null,xn=!1,Bn=0,Ge=null;const Do=D=>{if(Ge||!z.owned.size||Math.random()>Math.min(.6,.15+(D-cr)/2e4))return;const O=[...z.owned],F=O[Math.floor(Math.random()*O.length)];if(!z.take(F))return;const et=Math.random()<.5?-1:1,ft=Math.sin(w.psi),Ft=Math.cos(w.psi),ee=w.x-ft*6+Ft*et*2.2,le=w.z-Ft*6-ft*et*2.2,pe=Nn[F].build();pe.position.set(ee,c.levelAt(w.s)-.1,le),n.add(pe),Ge={id:F,mesh:pe,x:ee,z:le,until:performance.now()+9e4,sinking:0},j.toast(`Splash! ${ho(Nn[F].name)} slides off the roof and into the cut. Moor up quick and fish it out with the boat hook (G)!`,"warn",6e3)},Ns=(Je?["trevor","fron"]:["tower","stop:Telford's Warehouse","city","hoole","christleton","stop:The Cheshire Cat"]).map(D=>b.zones.find(O=>O.id===D)).filter(D=>!!D).map(D=>(D.s0+D.s1)/2),Io=30,Os=[];{const D=new Yt({color:"#2f5d3a",roughness:.7}),O=new Yt({color:"#c9a24a",metalness:.7,roughness:.35}),F=document.createElement("canvas");F.width=128,F.height=64;const et=F.getContext("2d");et.fillStyle="#1f6fb8",et.fillRect(0,0,128,64),et.fillStyle="#fff",et.font="800 30px Nunito, sans-serif",et.textAlign="center",et.textBaseline="middle",et.fillText("WATER",64,34);const ft=new Mn(F);ft.colorSpace=Ve;const Ft=new Yt({map:ft,side:He});for(const ee of Ns){const le=new St,pe=new Y(new gt(.22,1,.22),D);pe.position.y=.5;const Se=new Y(new qt(.04,.04,.22,8),O);Se.rotation.x=Math.PI/2,Se.position.set(0,.8,.16);const Ze=new Y(new wi(.6,.3),Ft);Ze.position.set(0,1.3,0);const pn=new Y(new gt(.05,.4,.05),D);pn.position.y=1.05;for(const Rr of[pe,Se,pn])Rr.castShadow=!0;le.add(pe,Se,Ze,pn);const $e=o.frame(ee),di=(c.halfWidthAt(ee)+2.4)*Xt;le.position.set($e.x+$e.nx*di,g.bankTop(ee),$e.z+$e.nz*di),le.rotation.y=Math.atan2(-$e.nx*Xt,-$e.nz*Xt),Os.push({s:ee,x:le.position.x,y:le.position.y,z:le.position.z}),n.add(le)}}const Fs=new Set(["pub","bar","cafe","restaurant","hotel"]);let ko=0;const Ei=(D,O=y.hour)=>D==="cafe"||D==="ice_cream"?O>=8&&O<17:D==="restaurant"?O>=12&&O<22:D==="supermarket"?O>=7&&O<22:O>=11&&O<23,wr=D=>{if(D==="cafe")return{hours:1,note:"An hour slips happily by."};const O=y.hour>=12&&y.hour<14||y.hour>=18&&y.hour<20.5,F=Math.min(1,(O?.6:.1)+Math.random()*.4),et=2+F,ft=Math.floor(et),Ft=Math.round((et-ft)*60),ee=`${ft} hours${Ft>=10?` ${Ft} minutes`:""}`,le=F>.7?`It's heaving, and the food takes an age: ${ee} before you're back aboard.`:F>.35?`Busy but cheerful: ${ee} before you're back aboard.`:`Nice and quiet, but you linger anyway: ${ee} slip by.`;return{hours:et,note:le}},Sr={bump:"bump",bank:"scraped the bank",paddles:"paddles left up",speeding:"speeding",wrongSide:"wrong side",aqueductClash:"met a boat on the aqueduct",kayak:"bumped a kayak",waitedTurn:"waited your turn",unpaidFuel:"couldn't pay the fuel boat",tidy:"left the lock tidy",gateOpen:"gates left open",wastedWater:"wasted water",cill:"caught on the cill",angler:"angler splashed",duck:"ran over a duck",swan:"ran over a swan",wash:"wash",night:"cruising after dark",greet:"friendly wave",slowPast:"slow past moored boats",cleared:"blockage cleared",lift:"lift given",mission:"mission complete",pickup:"picked up a passenger",cleanTrip:"mission complete, not a ripple"},Er=new U,Hn=(D,O,F)=>{const et=Er.set(D,O,F).project(i);return et.z<1&&Math.abs(et.x)<1.1&&Math.abs(et.y)<1.1?{x:(et.x+1)/2*t.clientWidth,y:(1-et.y)/2*t.clientHeight}:null},Wa=(D,O,F)=>{const et=Er.set(D,O,F).project(i);let ft=et.x,Ft=et.y;et.z>1&&(ft=-ft,Ft=-Ft);const ee=Math.max(Math.abs(ft)/.86,Math.abs(Ft)/.8),le=et.z>1||ee>1;return le&&(ft/=ee,Ft/=ee),{x:(ft+1)/2*t.clientWidth,y:(1-Ft)/2*t.clientHeight,edge:le}};at.onChange=(D,O)=>j.repPulse(D,Sr[O]??O,Hn(w.x,P.group.position.y+4.2,w.z));const C={"a courteous boat":"Word's getting round: yours is a courteous boat. Someone reckons you should start a YouTube channel… 😊","a canal vlogger":"Go on then: the boat has a YouTube channel now. 📹 A few hundred subscribers already, and the towpath's noticing.","canal famous":"You're canal famous! 🤩 People on the towpath know the boat now, and they'll want a wave."};at.onStanding=(D,O)=>j.toast(O?C[D]??`Word's getting round the towpath: yours is ${D}. 😊`:`Mutterings on the towpath: yours is ${D} now.`,O?"info":"warn",6e3);const W=D=>D.group.staircase&&(y.hour>=Jd||y.hour<ec),Q=`Padlocked for the night. The staircase opens at ${ec}am.`;let J=!1,X=0,bt=0,Dt=0,Zt=performance.now()+6e4;const Jt=["A dog walker on the towpath gives you a cheery wave.","A couple on a bench raise their coffees as you pass.",'A cyclist rings their bell and waves. "Lovely boat!"',"A child on the towpath waves madly. You wave back.","A jogger nods and waves as they go by."],ae=[`"Have you thought about a YouTube channel? You'd be brilliant!" calls a dog walker.`,'"You should be filming this!" says a man on a bench.','A cyclist slows to watch. "Smooth! Are you on YouTube? You should be."'],ue=['"Are you the boat off YouTube?" asks a cyclist. You admit you might be.','"Saw your lock video. Very calm!" calls a dog walker.',"Someone on the towpath films you going past. Free content!",'A jogger shouts "Subscribed!" as they go by.'],te=[`"It's them! Off YouTube!" A whole family on the towpath wave like mad.`,"A walker asks for a selfie with the boat. You oblige from the back deck.",'"Love the channel!" shout a group on the towpath, phones out.',"A little girl on the towpath holds up a drawing of your boat."];let ye=!1,De=!1;const Ne=new Map;let fn=null,be=null,Vt=!1;const je=new Gy,de=new eb;if(je.onFirstInput=()=>de.start(),t.addEventListener("pointerdown",()=>de.start()),Yn){let D=0;document.addEventListener("touchend",O=>{const F=performance.now();F-D<350&&!O.target.closest("button")&&O.preventDefault(),D=F},{passive:!1});for(const O of["gesturestart","gesturechange","dblclick"])document.addEventListener(O,F=>F.preventDefault(),{passive:!1})}Yn&&addEventListener("pointerdown",()=>{var D,O;return(O=(D=document.documentElement).requestFullscreen)==null?void 0:O.call(D).catch(()=>{})},{once:!0});const Ce=new tb(s,o,c,d);Ce.setWaterPoints(Ns.map(D=>o.point(D,0))),Ce.addMooredBoats(b.boats),Ce.setPlaces([...b.zones.filter(D=>D.kind==="stop").map(D=>{const[O,F]=o.point((D.s0+D.s1)/2,0),et={pub:"🍺",bar:"🍸",cafe:"☕",restaurant:"🍽️",hotel:"🛏️",ice_cream:"🍦"}[D.poi.kind]??"⚓";return{x:O,z:F,icon:et,name:D.name}}),...(s.pois??[]).filter(D=>D.type==="sight").map(D=>({x:D.x,z:D.z,icon:"★",name:D.name}))]);const $i=()=>{const D=B(Wt.current.zone),[O,F]=o.point((D.s0+D.s1)/2,0);Ce.setDestination(O,F,D.name)};se();const j=new Xy(document.getElementById("hud"),D=>je.push(D),Ce.el,Ce.bigEl);$y(document.getElementById("hud")),["localhost","127.0.0.1"].includes(location.hostname)&&Ce.enableDevTeleport(()=>[w.x,w.z],(D,O)=>{N.castOff(),ot.stop();const F=o.frame(w.s),et=Math.sin(w.psi)*F.tx+Math.cos(w.psi)*F.tz>=0,ft=Math.min(o.length-12,Math.max(12,o.project(D,O).s));w.placeAt(ft,et),w.notch=0,j.toast(`Moved to ${((ft-s.meta.towerWharfS)/1e3).toFixed(2)} km from Tower Wharf`,"info",2e3)}),P.tillerHint.visible=!1,j.onBubbleTap=D=>{var ft;const O=/^l([pg]):(\d+)$/.exec(D);if(!O)return!1;const F=c.gates[Number(O[2])];return((ft=cn==null?void 0:cn.job)==null?void 0:ft.g)===F||(O[1]==="p"?F.wantPaddle?F.paddle<1:F.paddle>0:F.wantOpen?F.open<1:F.open>0)||(O[1]==="p"?tl(F,F.wantPaddle?"paddlesDown":"paddlesUp"):tl(F,F.wantOpen?"close":"open")),!0},j.onSteer=D=>{D&&ot.active&&ot.stop(),je.touchSteer=D},j.onNotch=D=>{ot.active&&(ot.stop(),j.toast("You take the tiller back.","info",2e3)),w.notch=D};const Re=new Sx(i,t);Re.enableDamping=!0,Re.minDistance=5,Re.maxDistance=260,Re.maxPolarAngle=1.48,Re.enablePan=!1;let Oe=-10;const yn=new jf,hi=new ct;let Ke=null,Zn=!1;const Jn=D=>{const O=t.getBoundingClientRect();return hi.set((D.clientX-O.left)/O.width*2-1,-((D.clientY-O.top)/O.height)*2+1),yn.setFromCamera(hi,i),yn.intersectObject(P.tillerHit,!1).length>0};let qi={t:0,x:0,y:0};t.addEventListener("pointerdown",D=>{if(!D.isPrimary)return;const O=performance.now();O-qi.t<320&&Math.hypot(D.clientX-qi.x,D.clientY-qi.y)<40?(qi.t=0,je.push("recenter")):qi={t:O,x:D.clientX,y:D.clientY}}),t.addEventListener("pointerdown",D=>{if(!N.count)return;const O=t.getBoundingClientRect();hi.set((D.clientX-O.left)/O.width*2-1,-((D.clientY-O.top)/O.height)*2+1),yn.setFromCamera(hi,i);const F=yn.intersectObjects(N.tapTargets,!1)[0];F&&(D.stopImmediatePropagation(),j.toast(N.untie(F.object.userData.mooringEnd),"info",2500))},{capture:!0}),t.addEventListener("pointerdown",D=>{Yn||(ui==="steerer"||Jn(D))&&(Ke={x:D.clientX,id:D.pointerId},Re.enabled=!1,t.setPointerCapture(D.pointerId),t.style.cursor="grabbing",ot.active&&ot.stop(),Zn||(Zn=!0,P.tillerHint.visible=!1))},{capture:!0}),t.addEventListener("pointermove",D=>{Ke&&D.pointerId===Ke.id?je.touchSteer=Rs.clamp(-(D.clientX-Ke.x)/120,-1,1):!Ke&&D.pointerType==="mouse"&&ui==="follow"&&(t.style.cursor=Jn(D)?"grab":"")});const Ah=D=>{!Ke||D.pointerId!==Ke.id||(Ke=null,je.touchSteer=0,t.style.cursor="",ui==="follow"&&(Re.enabled=!0))};t.addEventListener("pointerup",Ah),t.addEventListener("pointercancel",Ah);let Uo=0;Re.addEventListener("start",()=>Oe=performance.now()/1e3);let ui="follow";const Rn=new U,Xa=new U,Rh=new U,Ch=D=>{const O=c.levelAt(w.s);P.group.position.set(w.x,O+Math.sin(D*1.3)*.015,w.z),P.group.rotation.set(Math.sin(D*.9)*.004,w.psi,Rs.clamp(-w.r*w.u*.5,-.04,.04)),P.rudder.rotation.y=-w.rudder*.6,Rn.set(w.x,O+1.6,w.z)};Ch(0),Xa.copy(Rn),Re.target.copy(Rn),i.position.set(w.x-Math.sin(w.psi)*24,Rn.y+9,w.z-Math.cos(w.psi)*24),Re.update();let Yi=2,Ph=0,Ct=null;const $a={paddlesUp:"Raising paddles",paddlesDown:"Dropping paddles",open:"Opening gates",close:"Closing gates"},Lh=new U,np=D=>`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18h7V9"/><circle cx="11" cy="7" r="2"/><path d="${D?"M18 19V6m-3.5 3.5L18 6l3.5 3.5":"M18 6v13m-3.5-3.5L18 19l3.5-3.5"}"/></svg>`,ip=D=>`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5v15M21 5v15"/>${D?'<path d="M3 8l5 4v6M21 8l-5 4v6"/>':'<path d="M3 8l9 4 9-4M12 12v8"/>'}</svg>`;let qa=0;const sp=D=>{var O;return D?`${D.action}:${((O=D.gate)==null?void 0:O.label)??""}:${D.group.name}`:""},Ya=new Set;let Tr=0,Dh,ja=0,Ka=!1,Za=0,Ja="",Ih=0;const op=D=>{const[O,F]=w.span();return O<D.s+.3&&F>D.s-.3};let cn=null,Cn=null;const Ar=(D,O)=>W(D)?Q:O==="open"&&!c.levelsMatch(D)?c.openBlocker(D):O==="close"&&op(D)?"The boat's in the way of the gates.":null,Qa=D=>{if(!Ct)return!1;const O=Ct.group.gates,[F,et]=w.span();return D?F>O.at(-1).s+.5:et<O[0].s-.5},kh=()=>{if(!Ct)return-1;if(Ct.boatBody>=0){const O=Ct.group.bodies[Ct.boatBody];if(c.bodies[O].kind==="chamber")return O}const D=Ct.gate??Ct.adjacent[0];return D?c.bodies[D.above].kind==="chamber"?D.above:c.bodies[D.below].kind==="chamber"?D.below:-1:-1},Uh=1,tl=(D,O)=>{if(pt)return j.toast("Hang on: your steerer's up the towpath with the boat hook.","info",2500);if(w.speed*ii>Uh&&!cn)return j.toast("Stop the boat first: your steerer hops off at a crawl.","info",2500);const F=Ar(D,O);if(F){j.nope(F),O==="open"&&el("levels","Lock gates hold back tons of water: they only open once it's level on both sides. The paddles let it through.");return}if(ot.active&&(ot.stop(),j.toast("You take over from the volunteers.","info",2500)),!cn){const ft=qn(Qd);n.add(ft.group),P.steerer.visible=!1,cn={person:ft,s:w.s,job:null,working:null,back:!1}}const et=Math.abs(cn.s-D.s)<3;cn.job={g:D,what:O},cn.back=!1,Cn&&(Cn.self=!0),et||j.nope(`Your steerer hops off and heads for the ${D.label}…`,!1)},rp=(D,O)=>{const F=cn;if(!F)return;(!Ct||ot.active)&&!F.job&&(F.back=!0);const ft=(F.back?w.s:F.job?F.job.g.s+(Math.sign(w.s-F.job.g.s)||1)*1.6:F.s)-F.s,Ft=Math.abs(ft)>.15;Ft&&(F.s+=Math.sign(ft)*Math.min(Math.abs(ft),(F.back?3:2.6)*D));const ee=o.frame(F.s),le=(c.halfWidthAt(F.s)+1.3)*Xt;if(F.person.group.position.set(ee.x+ee.nx*le,g.bankTop(F.s),ee.z+ee.nz*le),Ft)F.person.group.rotation.y=Math.atan2(ee.tx*Math.sign(ft),ee.tz*Math.sign(ft)),vr(F.person,O*7);else{F.person.group.rotation.y=Math.atan2(-ee.nx*Xt,-ee.nz*Xt),_r(F.person);const pe=F.working,Se=pe&&(pe.wantPaddle?pe.paddle<1:pe.paddle>0),Ze=pe&&(pe.wantOpen?pe.open<1:pe.open>0);Fi(F.person,Se?"wind":Ze?"push":"rest",O)}if(!Ft&&F.job){const{g:pe,what:Se}=F.job;F.job=null;const Ze=Ar(pe,Se);Ze?j.nope(Ze):Se==="paddlesUp"?pe.wantPaddle=!0:Se==="paddlesDown"?pe.wantPaddle=!1:pe.wantOpen=Se==="open",F.working=pe}(F.back&&Math.abs(w.s-F.s)<1.5||Math.abs(w.s-F.s)>150)&&(n.remove(F.person.group),P.steerer.visible=ui!=="steerer",cn=null)},el=(D,O)=>{let F=[];try{F=JSON.parse(localStorage.getItem("canal.tips")??"[]")}catch{}if(!F.includes(D)){F.push(D);try{localStorage.setItem("canal.tips",JSON.stringify(F))}catch{}j.toast(O,"info",7e3)}},ap=D=>{if(Cn&&(Ct==null?void 0:Ct.group)!==Cn.group){const Se=Cn.group;Cn.self&&(Se.gates.every(Ze=>!Ze.wantPaddle&&!Ze.wantOpen)?(at.change(1,"tidy",0),el("tidy","Leave a lock as you'd want to find it: paddles down, gates shut. The next boat will thank you.")):Se.gates.some(Ze=>Ze.wantPaddle)||(at.change(-2,"gateOpen",0),j.toast(`You've left the gates open at ${Se.name}. Someone will have to walk back and shut them.`,"warn",5e3))),Cn=null}if(!Ct)return;!Cn&&!Qa(D)&&!ot.active&&(Cn={group:Ct.group,self:!1,wasted:!1,cillWarned:!1,cillHit:!1},Ct.keeper||el("lock","A lock! Stop by it, then tap the glowing buttons on the gates: your steerer hops off to work them. (E does the next one.)"));const O=Cn;if(!O||!O.self)return;for(const Se of Ct.group.bodies){if(c.bodies[Se].kind!=="chamber"||O.wasted)continue;c.gates.filter(pn=>(pn.above===Se||pn.below===Se)&&pn.wantPaddle&&pn.paddle>.3).length>=2&&(O.wasted=!0,at.change(-2,"wastedWater",0),j.toast("Paddles up at both ends! That's water pouring straight through and draining the pound above. Drop one set.","warn",6e3))}const F=kh();if(F<0||Ct.boatBody<0||Ct.group.bodies[Ct.boatBody]!==F)return;const et=c.gates.find(Se=>Se.below===F),ft=c.gates.find(Se=>Se.above===F);if(!et||!ft||!ft.wantPaddle)return;const[Ft,ee]=w.span(),le=Math.min(Math.abs(et.s-Ft),Math.abs(et.s-ee))<1.6,pe=c.bodies[et.above].level-c.bodies[F].level;le&&(!O.cillWarned&&pe>.1&&(O.cillWarned=!0,j.toast("Mind the cill! Your stern's over the ledge under the top gates. Drop the paddles and move her forward of the white line.","warn",6500)),!O.cillHit&&pe>.6&&(O.cillHit=!0,ft.wantPaddle=!1,it.knock(16e3),Do(16e3),at.change(-3,"cill",0),j.toast("CRUNCH! The stern caught on the cill as the water dropped, and she lurched. Paddles down, quick! That's damage done.","warn",7e3)))},lp=D=>{switch(D){case"throttleUp":ot.active&&(ot.stop(),j.toast("You take the tiller back.","info",2e3)),w.notch=Math.min(fi,w.notch+1);break;case"throttleDown":w.notch=Math.max(fo,w.notch-1);break;case"neutral":w.notch=0;break;case"lockNext":Ct&&Ct.gate&&!Ct.keeper&&Ct.action in $a?tl(Ct.gate,Ct.action):Ct&&j.toast(Ct.text,"info",2500);break;case"timeFaster":Yi=is[Math.min(is.length-1,is.indexOf(Yi)+1)];break;case"timeCycle":Yi=is[(is.indexOf(Yi)+1)%is.length];break;case"timeSlower":Yi=is[Math.max(0,is.indexOf(Yi)-1)];break;case"camera":ui==="follow"?(Rh.copy(i.position).sub(Re.target),ui="steerer",Re.enabled=!1,P.steerer.visible=!1):(ui="follow",Re.enabled=!0,i.position.copy(Re.target).add(Rh),P.steerer.visible=!0);break;case"repair":{if(!N.moored){j.toast("Moor up first: nobody goes in the engine bay on the move.","info",3e3);break}if(Math.abs(w.s-Rt())<50){it.fullRepair(),y.skipTo((y.hour+2)%24),j.toast(`${ho(re)} give her a proper going-over: two hours later she's as good as new. 🔧`,"info",5500);break}if(it.needPart){const{part:O,shop:F}=it.needPart;if(y.hour<8||y.hour>=20){j.toast(`${ho(F)} is shut till 8 in the morning. The part will have to wait.`,"info",4e3);break}const et=1+Math.round(Math.random()*2)/2;it.fetched(),y.skipTo((y.hour+et)%24),j.toast(`${et===1?"An hour":`${et} hours`} and a bus ride later, you're back from ${F} with ${O}. Time for another go…`,"info",5500);break}if(y.skipTo((y.hour+1)%24),it.attempt())j.toast("An hour of muttering in the engine bay, and… she runs sweet as a nut. Fixed! 🔧","info",5e3);else{const{part:O,shop:F}=it.needPart;j.toast(`An hour of swearing in the engine bay, and you're missing ${O}. Nearest place: ${F}.`,"warn",6e3)}break}case"recenter":ui="follow",Re.enabled=!0,P.steerer.visible=!0,Re.target.copy(Rn),i.position.set(w.x-Math.sin(w.psi)*24,Rn.y+9,w.z-Math.cos(w.psi)*24),Uo=0,Re.update();break;case"map":Ce.bigOpen=!Ce.bigOpen,j.setMapOpen(Ce.bigOpen);break;case"help":j.toggleHelp();break;case"mute":de.toggleMute();break;case"moor":{if(pt){j.toast("Hang on: your steerer is still up the towpath with the boat hook.","info",2500);break}const O=N.act();if(O&&j.toast(O,"info",3e3),N.moored){const F=b.zoneAt(w.s),et=B(Wt.current.zone);if((F==null?void 0:F.kind)==="stop"&&!Ei(F.poi.kind)&&j.toast(`${F.name} is shut ${y.hour>=12?"for the night":"just now"}. Still, it's a fine spot to tie up.`,"info",4500),kt&&F===kt.dest&&Gt(),(F==null?void 0:F.kind)==="stop"&&ve(F),nt(),Vt&&F===et&&!Wt.result){const ft=z.nextFrom(rb);ft&&z.give(ft);const Ft=Wt.bumps+Wt.rocked===0;at.change(Ft?5:3,Ft?"cleanTrip":"mission",0),j.showSummary(Wt.complete(y.clock),F.name,ft?Nn[ft].name:void 0),Et(),b.setActive(null),Ce.clearDestination()}else((F==null?void 0:F.kind)!=="stop"||Ei(F.poi.kind))&&j.toast(F?`Moored at ${F.name}.`:Vt?`Moored up. Your trip ends at ${et.name}.`:"Moored up.","info",3500)}break}case"nextTrip":if(Wt.result)Wt.next(y.clock),j.hideSummary(),Vt=!1,se(),ot.roster(),Et();else if(j.offerOpen&&Ht==="helper"){j.hideOffer();const O=c.windingHoles.reduce((F,et)=>Math.abs(et-w.s)<Math.abs(F-w.s)?et:F);Pt(O)}else if(j.offerOpen&&Ht==="lift")j.hideOffer(),yt();else if(j.offerOpen&&Ht==="fuel")j.hideOffer(),K.refuel(),K.payMeals(ma)?j.toast(`Diesel in the tank, a new gas bottle and a pile of logs and coal on the roof. Two meals' worth of grub changes hands: "Lovely, ta!" ⛽`,"info",5500):(at.change(-6,"unpaidFuel",0),j.toast(`They fill you up, then you find the larder's bare: nothing to pay with. "Fine. We'll remember that." Word gets round the cut…`,"warn",6500));else if(j.offerOpen&&Ht==="sleep"){j.hideOffer(),y.skipTo(7.25),kt&&j.toast(`${kt.name} sleeps in the spare berth, and is up first with the kettle on.`,"info",4e3);const{fed:O,warm:F}=K.wake(y.clock),et=F?O?"You sleep like a log to the creak of the ropes, the stove ticking away.":"A restless night, stomach growling. You wake up starving.":"A freezing night: the stove went out and you wake stiff, cold and starving.";j.toast(`${et} 🌅 Day ${y.day}: ${y.fog>.3?"mist on the water":"a clear morning"}.`,"info",5500)}else j.offerOpen&&(j.hideOffer(),Vt=!0,Wt.next(y.clock),Et(),b.setActive(B(Wt.current.zone)),$i());break;case"declineTrip":if(j.offerOpen&&j.hideOffer(),Ht==="trip"&&$t.add(Wt.index),Ht==="fuel"&&j.toast('"Right you are, see you next time round!" The fuel boat chugs on.',"info",3500),Ht==="helper"&&k&&(j.toast(`"Right you are! I'll leave you to it." They lean on the fence to watch.`,"info",3500),mt=0,zt()),Ht==="lift"&&Mt){j.toast(`"No worries!" ${Mt.name} sets off up the towpath on foot.`,"info",3500);const O=b.zoneAt(w.s);O&&st(O.id),Mt=null}break;case"tripOffer":break;case"water":{if(!Os.find(et=>Math.abs(et.s-w.s)<Io)||!N.moored)break;if(K.water>=.95){j.toast("The tank is already full.","info",2e3);break}const F=Math.max(5,Math.round((1-K.water)*60/5)*5);K.fillWater(),y.skipTo((y.hour+F/60)%24),j.toast(`You run the hose from the water point. The tap's slow: ${F>=60?"a whole hour":`${F} minutes`} later the tank's full to the brim. 💧`,"info",5e3);break}case"visit":{const O=b.zoneAt(w.s);if(!N.moored||(O==null?void 0:O.kind)!=="stop")break;const F=O.poi.kind;if(!Ei(F)){j.toast(`${O.name} is shut. ${F==="supermarket"?"Open 7am till 10pm.":F==="cafe"?"Open 8 till 5.":"Opens at 11."}`,"info",3e3);break}if(F==="supermarket"){if(K.food>=La){j.toast("The larder's already full.","info",2e3);break}K.restock(),y.skipTo((y.hour+.75)%24),j.toast(`${tf(O.poi.name,F)} Larder stocked: ${La} meals' worth. 🥫`,"info",5500)}else{const et=K.hunger>.35,ft=et&&Fs.has(F)?wr(F):null;let Ft=tf(O.poi.name,F,et,y.hour);ft&&(Ft=Ft.replace("An hour slips happily by.",ft.note),K.eat(y.clock)),j.toast(Ft,"info",7e3),y.skipTo((y.hour+((ft==null?void 0:ft.hours)??1))%24)}_e.has(O.id)||(_e.add(O.id),b.hideStopMarker(O.id));break}case"yardFuel":{if(!N.moored||Math.abs(w.s-Rt())>50)break;K.refuel(),K.payMeals(ma)?j.toast(`${ho(re)} fill your tank, swap the gas bottle and load some logs, for ${ma} meals' worth of grub. ⛽`,"info",5e3):(at.change(-6,"unpaidFuel",0),j.toast(`${ho(re)} fill you up, but there's nothing in the larder to pay with. Not a good look.`,"warn",5500));break}case"fuel":{const O=we;if(!O||j.offerOpen)break;if(Math.hypot(O.obstacle.x-w.x,O.obstacle.z-w.z)>Lt||w.speed*ii>1.3){j.toast("Slow right down and come alongside the fuel boat.","info",2500);break}V.hold(O,25),Ht="fuel",j.showOffer("The fuel boat",`${O.name} holds alongside`,`Diesel, gas bottles, logs and coal. "${ma} meals' worth of grub and we'll fill you right up. Hungry work, shifting all them log piles and canisters!"`,"Fill her up","Not today");break}case"cook":{const O=K.cannotCook(N.moored);if(O){j.toast(O,"info",3500);break}K.cook(y.clock),y.skipTo((y.hour+.5)%24);const F=y.hour<10.5?"a fry-up":y.hour<15?"a sandwich and a mug of soup":"a proper supper";j.toast(`Half an hour in the galley, and ${F} eaten on the back deck. 🍳`,"info",4500);break}case"horn":de.start(),de.horn(),G.horn();break;case"clear":{if(Ge&&!Ge.sinking&&Math.hypot(Ge.x-w.x,Ge.z-w.z)<25){if(!N.moored){j.toast(`Moor up alongside to reach the ${Nn[Ge.id].name.replace(/^an? /,"")} with the boat hook.`,"info",3e3);break}const et=Nn[Ge.id].name;z.give(Ge.id),n.remove(Ge.mesh),Ge=null,j.toast(`A bit of a stretch with the boat hook, and you've got ${et} back. Dripping, but back on the roof. 🎣`,"info",4500);break}const O=Nt.find(et=>et.active&&Math.abs(et.s-w.s)<nc),F=At.near(w.s);if(!O&&F){N.moored?(z.give(F.item),F.group.visible=!1,K.addHeat(.5),j.toast(F.done,"info",4500)):j.toast("Moor up alongside first (F), then you can load it.","info",3e3);break}if(!O)j.toast("There's nothing here to clear.","info",2e3);else if(!N.moored)j.toast("Moor up first (F), then you can get at it with the boat hook.","info",3500);else if(!pt&&!O.clearing){const et=qn(Qd),ft=new Y(new qt(.025,.025,2.6,6),new Yt({color:"#8a6a45"}));ft.position.set(0,-.6,.9),ft.rotation.x=1.2,et.armR.add(ft),n.add(et.group),P.steerer.visible=!1;const Ft=Math.sign(O.s-w.s)||1;pt={b:O,person:et,phase:"out",s:w.s,target:O.s-Ft*2.5,home:w.s},j.toast("Off you hop with the boat hook…","info",2500)}break}case"autopilot":ot.active?(ot.stop(),j.toast('You take over. "Right you are, give us a shout if you need us!"',"info",3e3)):Ct&&ot.isStaffed(Ct.group)&&(N.castOff(),ot.start(Ct.group),cn&&(cn.back=!0),Cn=null,j.toast(at.atLeast("a courteous boat")?`"Ah, it's you again! Go on, sit back, we'll see you through."`:'"Morning! Leave it to us: just sit back and enjoy it."',"info",3500));break;case"headlight":Ka=!Ka,P.headlight.intensity=Ka?40:0;break}},cp=()=>{const D=c.bodies[c.bodyIndexAt(w.s)],O=w.s-s.meta.towerWharfS,F=`${wa(O)} ${Je?Math.sign(O)===a?"past":"from":O>=0?"above":"below"} ${Je?"Trevor":"Tower Wharf"}`;if(D.kind==="chamber")return[`In ${D.lockName}`,F];const et=c.gates.find(le=>le.s>w.s),ft=[...c.gates].reverse().find(le=>le.s<w.s),Ft=m.at(w.s),ee=Ft!=null&&Ft.data.name?` · under ${Ft.data.name}`:"";if(Je){if(w.s>r[0]&&w.s<r[1])return["Pontcysyllte Aqueduct",`126 ft above the River Dee · Telford, 1805${ee}`];if(Math.abs(w.s-s.meta.towerWharfS)<80)return["Trevor Basin",`Llangollen Canal${ee}`]}else if(Math.abs(w.s-v)<40)return["Taylor's Boatyard",`Historic boatbuilders and dry dock by Tower Wharf${ee}`];return!Je&&Math.abs(w.s-s.meta.towerWharfS)<70?["Tower Wharf",`Junction with the Dee Branch${ee}`]:et&&et.s-w.s<160?[`Approaching ${et.lockName}`,F+ee]:ft&&w.s-ft.s<120?[`Leaving ${ft.lockName}`,F+ee]:et&&ft?[`${ft.lockName} → ${et.lockName}`,F+ee]:[et?`Towards ${et.lockName}`:"Towards Christleton & Nantwich",F+ee]},hp=()=>{const D=Re.target,O=i.position,F=D.distanceTo(O);for(let et=4;et<F;et+=1.5){const ft=et/F,Ft=D.x+(O.x-D.x)*ft,ee=D.y+(O.y-D.y)*ft,le=D.z+(O.z-D.z)*ft,pe=o.project(Ft,le,w.s),Se=m.rampAt(pe.s,pe.d);if(ee<R.roofAt(Ft,le)||ee<g.heightAt(Ft,le)+.5||Se.onDeck&&ee<Se.y+1.2){i.position.lerpVectors(D,O,Math.max(4,et-2)/F);return}}};j.toast("Welcome aboard the Chester Rose! W to get going. Cruise past a green ! for a mission. H for help.","info",7e3),Et();const up=new yx;let Gn=0;addEventListener("resize",()=>{i.aspect=t.clientWidth/t.clientHeight,i.updateProjectionMatrix(),e.setSize(t.clientWidth,t.clientHeight,!1)});const Nh=()=>{var Fh,zh;const D=Math.min(up.getDelta(),.1);Gn+=D;for(const H of je.drain())lp(H);const O=D*Yi,F=Math.max(1,Math.ceil(O/t1));for(let H=0;H<F;H++){c.update(O/F),w.bowThrust=je.bowThrust,je.bowThrust&&w.thrusterBite===0&&performance.now()>Ph&&(Ph=performance.now()+2e4,j.toast("The bow thruster only works at a crawl (under 1.5 mph). Slow down, or steer with the tiller.","info",3500)),!ot.active&&!(k!=null&&k.turning)&&w.step(O/F,je.steer);for(const lt of w.contacts)if(lt.impulse>1500&&ja<=0){de.bump(Math.min(1,lt.impulse/12e3)),ja=.4;const Kt=!!Ct&&Ct.boatBody>=0&&(lt.kind==="gate"||lt.kind==="bank"),Ut=Kt?cr*3:cr;if(!G.isKayak(lt.obstacle)&&lt.impulse>=Ut&&(it.knock(lt.impulse),Do(lt.impulse)),G.isKayak(lt.obstacle))at.change(-4,"kayak",6),j.toast(`A kayaker yelps and back-paddles furiously. "Watch where you're going!"`,"warn",3500);else if(Nt.some(ce=>ce.obstacle===lt.obstacle))j.toast("It's jammed solid. Moor up nearby (F) and clear it with the boat hook (G).","warn",3500);else if(lt.kind==="boat"&&!b.boats.includes(lt.obstacle)){const ce=V.boats.find(en=>en.obstacle===lt.obstacle),Pe=!!ce&&ce.speed>Math.abs(w.u)+.15;V.bumped(lt.obstacle),lt.impulse>3e3&&!Pe?(Wt.bumps++,at.change(-2,"bump")):Pe&&ce&&j.toast(`${ce.name} bumps into you. "Oops! Sorry about that!"`,"info",3e3)}else if(lt.kind==="boat"){const ce=lt.obstacle;b.rockBoat(ce,Math.min(.08,lt.impulse/5e4),lt.impulse>3e3),lt.impulse>3e3&&(Wt.bumps++,at.change(-3,"bump"),j.toast(`Bump! Sorry, ${ce.name}. A head pops out of the hatch…`,"warn",3e3))}else lt.impulse>(Kt?Ut:9e3)&&(Wt.bumps++,j.toast(lt.kind==="gate"?"Bump! Into the lock gates.":"Clunk. Mind the bank!","info",2200))}}ja-=D;const et=o.frame(w.s),ft=Math.sin(w.psi)*et.tx+Math.cos(w.psi)*et.tz>=0;Ct=Dd(c,w.span(),ft);for(const H of c.events.splice(0))(!H.group||H.group===(Ct==null?void 0:Ct.group)||H.group.gates.some(Kt=>Math.abs(Kt.s-w.s)<150))&&j.toast(H.text,H.kind);if(ot.active&&je.steer!==0&&(ot.stop(),j.toast("You take the tiller back.","info",2e3)),ot.night=y.isNight,ot.update(O,Ct,ft)==="done"&&(j.toast("Through! The volunteers wave you on your way. Thanks, volunteers!","info",4500),Ct=Dd(c,w.span(),ft)),!ot.active&&(Ct!=null&&Ct.keeper)&&Ct.gate&&Ct.action!=="wait"){const H=sp(Ct);if(H!==Ja)Ja=H,Ih=Gn+1.5;else if(Gn>=Ih){const lt=Ct.gate;Ct.action==="paddlesUp"?lt.wantPaddle=!0:Ct.action==="paddlesDown"?lt.wantPaddle=!1:Ct.action==="close"?lt.wantOpen=!1:Ct.action==="open"&&c.levelsMatch(lt)&&(lt.wantOpen=!0),Ja=""}}if(j.setLockPanel({step:Ct,volunteers:ot.active?"active":ot.isStaffed(Ct==null?void 0:Ct.group)?"available":"none"}),rp(O,Gn),ap(ft),!ot.active&&Ct&&!Qa(ft)){const H=kh();if(H>=0){const lt=c.bodies[H],Kt=c.gates.find(en=>(en.above===H||en.below===H)&&en.paddle>.02&&en.wantPaddle);let Ut="";if(Kt){const en=c.bodies[Kt.above===H?Kt.below:Kt.above].level-lt.level;Ut=Math.abs(en)>.04?`${en>0?"▲":"▼"} ${bh(Math.abs(en))} to go`:"✓ Level"}else Ct.gate&&Ct.action==="open"&&c.levelsMatch(Ct.gate)&&(Ut="✓ Level");const ce=o.frame((lt.s0+lt.s1)/2),Pe=Ut?Hn(ce.x,lt.level+2.6,ce.z):null;Pe&&j.showWorldTip(Ut,Pe.x,Pe.y,"level")}}if(ot.active&&Ct){const H=P.group.position.y,lt=Ct.gate;let Kt,Ut;if(lt&&Ct.action in $a){Kt=$a[Ct.action];const ce=o.frame(lt.s);Ut=Lh.set(ce.x,g.bankTop(lt.s)+2.2,ce.z)}else Kt=Math.abs(H-qa)>1e-5?`${H>qa?"▲":"▼"} ${Ct.text}`:Ct.text,Ut=Lh.set(w.x,H+3.2,w.z);Ut.project(i),Ut.z<1&&j.showWorldTip(Kt,(Ut.x+1)/2*t.clientWidth,(1-Ut.y)/2*t.clientHeight),qa=H}N.moored?y.isNight&&!J&&!j.offerOpen&&!Wt.result&&(J=!0,nt()):J=!1;const Ft=V.boats.find(H=>H.fuel);if(Ft?sn=y.clock:V.fuelDue=y.clock-sn>18,Ce.fuelBoat=Ft?[Ft.obstacle.x,Ft.obstacle.z]:null,we=Ft??null,K.diesel<=0?(w.notch=0,xn||(xn=!0,j.toast("The engine coughs, splutters and dies. You've run out of diesel! Drift to the bank and wait for the fuel boat (orange on the map).","warn",8e3))):(xn=!1,K.dieselLow&&w.notch>1&&performance.now()>Bn&&(Bn=performance.now()+4e4,w.notch=1,j.toast("The engine coughs and splutters: the diesel is getting low. Look out for the fuel boat.","warn",4500))),w.power=it.limping?.8-(it.damage-.5)*.5:1,it.limping?(w.notch=Math.min(w.notch,2),Be||(Be=!0,j.toast(`There's a nasty vibration from the stern now, and she'll barely make 2½ mph. Moor up and tap 🔧 to have a go, or head for ${re}.`,"warn",7e3))):Be=!1,Ge){const H=Ge;!H.sinking&&performance.now()>H.until&&(H.sinking=performance.now(),j.toast(`Glug. ${ho(Nn[H.id].name)} sinks out of sight. You'll have to earn another.`,"info",4500));const lt=c.levelAt(o.project(H.x,H.z,w.s).s);H.mesh.position.y=lt-.1+Math.sin(performance.now()/600)*.05-(H.sinking?(performance.now()-H.sinking)/2e3:0),H.mesh.rotation.z=Math.sin(performance.now()/900)*.15,H.sinking&&performance.now()-H.sinking>3e3&&(n.remove(H.mesh),Ge=null)}const ee=y.hour;if(G.crowd=ee<6||ee>=22?.08:ee<8?.35:ee<10?.7:ee<18?1:ee<20?.6:.25,G.night=V.night=y.isNight,G.waveChance=at.score>=75?1:at.score>=50?.3:at.score>=30?.08:0,at.score>15&&G.crowd>.3&&!N.moored&&performance.now()>Zt){Zt=performance.now()+Math.max(35e3,2e5-at.score*2e3)*(.7+Math.random()*.6);const H=at.score,lt=H>=75?[...te,...Th.slice(0,6).map(Kt=>`A boater shouts "Love the channel!" — the crew of ${Kt.boat}, no less.`)]:H>=50?ue:H>=30?[...Jt,...ae]:Jt;j.toast(lt[Math.floor(Math.random()*lt.length)],"info",3500)}if(ot.onDuty=y.hour>=ec&&y.hour<Jd,y.hour>=17&&y.hour<18&&X!==y.day&&!N.moored&&(X=y.day,j.toast("Light's going in an hour or so. Time to think about where to moor for the night.","info",6e3)),y.isNight&&!N.moored&&!ot.active&&w.speed*ii>.8&&(bt!==y.day&&(bt=y.day,j.toast("It's dark, and most boaters are moored up by now. Find a spot and tie up for the night.","warn",6e3)),at.change(-2,"night",120)),Je){const H=ft?1:-1,lt=V.boats.find(Pe=>Pe.dir!==H&&Pe.s>r[0]-4&&Pe.s<r[1]+4),Kt=H>0?r[0]-w.s:w.s-r[1];lt&&Kt>0&&Kt<90&&(fn!==lt&&(fn=lt,j.toast(`${lt.name} is crossing the aqueduct towards you. Wait at this end until they're off: there's only room for one.`,"warn",5500)),w.speed*ii<.6&&(be=lt));const Ut=w.s>r[0]&&w.s<r[1];lt&&Ut&&!De&&(at.change(-6,"aqueductClash",0),be=null,j.toast(`Oh dear. You've gone onto the aqueduct with ${lt.name} coming the other way. Someone's going to have to reverse…`,"warn",6e3)),De=Ut;const ce=w.s>r[0]+5&&w.s<r[1]-5;ce&&!ye&&j.toast("Onto Pontcysyllte Aqueduct. 126 ft down to the Dee, with nothing but the trough edge on the far side. Don't look down!","info",6e3),ye=ce}if(!N.moored)It.clear();else if(!j.offerOpen&&!Mt&&!Wt.result){const H=b.zones.find(lt=>L.has(lt.id)&&!It.has(lt.id)&&Math.abs((lt.s0+lt.s1)/2-w.s)<45);H&&ve(H)}const le=w.speed*ii>.4&&w.speed*ii<2.8?b.boats.find(H=>Math.abs(H.s-w.s)<3):void 0;le&&performance.now()-(Ne.get(le)??-1e9)>18e4&&(Ne.set(le,performance.now()),at.change(1,"slowPast",0),b.popOwner(le,"wave"),performance.now()-Dt>(at.score<-15?4e4:24e4)&&(Dt=performance.now(),j.toast(`"Thanks for slowing!" calls someone aboard ${le.name}.`,"info",3e3)));for(const H of c.gates)H.paddle<.05?Ya.delete(H):Math.abs(H.s-w.s)>110&&!Ya.has(H)&&(Ya.add(H),at.change(-5,"paddles",0),j.toast(`You've left the paddles up at ${H.lockName}. The lock-keeper won't be pleased.`,"warn",6e3));Tr=w.speed*ii>4.3?Tr+O:0,Tr>6&&(j.toast("Steady on! The limit is 4 mph, and your wash is slapping the moored boats.","warn"),at.change(-3,"speeding"),Tr=-30),V.update(O,ft?1:-1);for(const H of V.events.splice(0)){const lt=y.hour<12?"Morning":y.hour<18?"Afternoon":"Evening";if(H.kind==="waitingAqueduct"){j.toast(`${H.boat.name} waits at the end of the aqueduct while you cross. Only room for one at a time.`,"info",4500);continue}if(H.kind==="offAqueduct"){be===H.boat&&(at.change(3,"waitedTurn",0),j.toast(`"Cheers for waiting!" calls the steerer of ${H.boat.name} as they come off the aqueduct.`,"info",4e3),be=null);continue}if(H.kind==="greet"&&Math.random()>.5+at.score/200){j.toast("The passing boat chugs by without so much as a wave.","info",2500);continue}H.kind==="greet"&&at.change(1,"greet",60),H.kind==="wrongSide"&&at.change(-2,"wrongSide"),H.kind==="greet"?j.toast(`"${lt}!" ${H.boat.steerer?`${H.boat.steerer} on ${H.boat.name}`:`The steerer of ${H.boat.name}`} gives you a wave.`,"info",3500):H.kind==="wrongSide"?j.toast(`Pass oncoming boats on the right (port to port). ${H.boat.name}'s steerer looks puzzled.`,"warn",4500):j.toast(`Bump! Sorry, ${H.boat.name}!`,"warn",3e3)}for(const H of L.values())Fi(H,"shake",Gn*.8);{const H=c.windingHoles.find(Kt=>Math.abs(Kt-w.s)<45);H!==void 0&&!k&&!j.offerOpen&&!ot.active?(mt+=D,mt>60&&vt(H)):H===void 0&&(mt=0),k&&!k.turning&&Fi(k.person,j.offerOpen?"wave":"rest",Gn);const lt=k==null?void 0:k.turning;if(lt){lt.t+=D/12;const Kt=Math.min(1,lt.t),Ut=Kt*Kt*(3-2*Kt),ce=o.frame(lt.s),Pe=Math.min(1,Kt/.4);w.x=lt.x0+(ce.x-lt.x0)*Pe,w.z=lt.z0+(ce.z-lt.z0)*Pe,w.psi=lt.psi0+(lt.psi1-lt.psi0)*Ut,w.u=w.v=w.r=0,w.notch=0,w.thrust=0,w.s=o.project(w.x,w.z,w.s).s,Kt>=1&&(j.toast('"There you go, facing the right way!" The old boater hops off and tips their cap.',"info",5e3),mt=0,zt())}}G.update(D),dt-=D;for(const H of G.events.splice(0))H.kind==="hitBird"?(de.quack(),at.change(H.swan?-2:-1,H.swan?"swan":"duck",4),j.toast(H.swan?"A furious hiss! You ran right over a swan. Sound the horn (B) to clear the way.":"Squawk! A duck bobs out from under your bow in a flurry of feathers. Toot the horn (B) next time.","warn",4e3)):H.kind==="quack"?(de.quack(),dt<=0&&(j.toast("Quack! A mallard paddles off, deeply unimpressed.","info",2500),dt=25)):(Wt.rocked++,at.change(-3,"angler"),j.toast("An angler shakes a fist as your wash bobs their float. Ease off past the anglers!","warn",4e3));for(const H of Bt)!he.has(H.name)&&Math.abs(H.s-w.s)<45&&(he.add(H.name),j.toast(Qb(H.name,H.kind),"info",7e3));{const H=Math.sin(w.psi),lt=Math.cos(w.psi),Kt=jn/2+.3,Ut=Math.min(1,Math.abs(w.thrust)/3250);q.update(O,w.s,[w.x-H*Kt,w.z-lt*Kt],w.psi,w.speed*ii,Ut)}Za-=D;for(const H of q.washes(b.boats))b.rockBoat(H.boat,.02+H.strength*.07,H.strength>=.35),!(H.strength<.35)&&(Wt.rocked++,at.change(-2,"wash"),Za<=0&&(j.toast(ef[Math.floor(Math.random()*ef.length)].replace("%",H.boat.name),"warn",3500),Za=6));const pe=(Fh=m.at(w.s))==null?void 0:Fh.data.name;if(pe&&pe!==Dh&&j.toast(`Under ${pe}`,"info",2200),Dh=pe,Ch(Gn),P.tillerHint.visible){const H=.5+.5*Math.sin(Gn*3);P.tillerHint.material.opacity=.25+.45*H,P.tillerHint.scale.setScalar(1+.12*H)}if(u.update(D),x.update(D),b.night=y.isNight,b.hour=y.hour,b.viewer.x=w.x,b.viewer.z=w.z,b.update(D),M.update(D,i.position),S.update(D),de.rumble(M.rumble),N.update(c.levelAt(w.s),D),y.update(O/3600*Zd,Rn),K.tick(O/3600*Zd,!!Ct&&!ot.active&&!N.moored,N.moored?0:Math.max(.15,Math.abs(w.notch)/fi),y.isNight||y.fog>.4),y.sky.position.copy(i.position),ui==="follow"){const H=Rn.clone().sub(Xa);if(H.length()>50?(Re.target.copy(Rn),i.position.set(w.x-Math.sin(w.psi)*24,Rn.y+9,w.z-Math.cos(w.psi)*24),Uo=0):(i.position.add(H),Re.target.add(H)),Uo>0){const lt=i.position.clone().sub(Re.target);i.position.copy(Re.target).addScaledVector(lt.normalize(),Uo)}if(performance.now()/1e3-Oe>3&&Math.abs(w.u)>.25){const lt=i.position.clone().sub(Re.target),Kt=Math.atan2(lt.x,lt.z);let ce=w.psi+(w.u>0?Math.PI:0)-Kt;ce=Math.atan2(Math.sin(ce),Math.cos(ce));const Pe=ce*Math.min(1,D*.5);lt.applyAxisAngle(new U(0,1,0),Pe),i.position.copy(Re.target).add(lt)}Re.update(),Uo=i.position.distanceTo(Re.target),hp()}else{const H=Math.sin(w.psi),lt=Math.cos(w.psi),Kt=-jn/2+.9;i.position.set(w.x+H*Kt,Rn.y+.75,w.z+lt*Kt),i.lookAt(w.x+H*40,Rn.y-.2,w.z+lt*40)}Xa.copy(Rn),m.updateOcclusion(i.position,Rn,D);const Se=Math.floor(y.hour),Ze=Math.floor((y.hour-Se)*12)*5;j.setHelm({notch:w.notch,speedMph:w.speed*ii,timeScale:Yi,clock:`${y.isNight?"🌙":"☀"} ${Se}:${String(Ze).padStart(2,"0")}`});const[pn,$e]=cp();j.setRep(at.score,at.standing,at.face,at.next),j.setGalley({hunger:K.hunger,food:K.food,foodMax:La,water:K.water,gas:K.gas,heat:K.heat,diesel:K.diesel,damage:it.damage,shop:it.needPart?it.needPart.shop.replace(/^the /,""):null}),K.starving&&performance.now()>ko&&(ko=performance.now()+12e4,j.toast(K.food>0?"Your stomach rumbles. Moor up and cook something, or find a pub.":"Your stomach rumbles, and the larder is bare. Time for a pub, or a trip to the shops.","warn",5e3)),j.setLocation(pn,$e),j.setJournal(`📍 ${_e.size}/${oe.length} stops · 👀 ${he.size}/${Bt.length} sights · 🎁 ${z.owned.size}/${Object.keys(Nn).length} on the roof`),Ce.draw(w.x,w.z,w.psi);const di=B(Wt.current.zone),Rr=(di.s0+di.s1)/2-w.s,dp=w.s>di.s0-4&&w.s<di.s1+4,fp=Math.sign(Rr)===(ft?1:-1)?"ahead":"behind you",Oh=di.name.split(",")[0],pp=dp?`${Oh} · pull in and tie up (F)`:`${Oh} · ${wa(Rr)} ${fp}`;if(!Vt&&!Wt.result&&ki.forEach((H,lt)=>{if(Wt.done.has(lt))return;const Kt=B(H.from),Ut=Math.abs((Kt.s0+Kt.s1)/2-w.s);Ut>90?$t.delete(lt):Ut<45&&!$t.has(lt)&&!j.offerOpen&&rt(lt)}),j.setTrip({state:Wt.result?"done":Vt?"active":"none",n:Wt.index+1,title:Wt.current.title,brief:Wt.current.brief,where:pp}),kt){const H=kt.dest,lt=(H.s0+H.s1)/2-w.s,Kt=w.s>H.s0-4&&w.s<H.s1+4;j.setLift(`${kt.name} → ${ut(H)} · ${Kt?"moor up (F)":`${wa(lt)} ${Math.sign(lt)===(ft?1:-1)?"ahead":"behind"}`}`)}else j.setLift(null);if(pt){const H=pt,Kt=(H.phase==="back"?H.home:H.target)-H.s,Ut=H.phase!=="hook"&&Math.abs(Kt)>.1;Ut&&(H.s+=Math.sign(Kt)*Math.min(Math.abs(Kt),1.6*O));const ce=o.frame(H.s),Pe=(c.halfWidthAt(H.s)+1.3)*Xt;H.person.group.position.set(ce.x+ce.nx*Pe,g.bankTop(H.s),ce.z+ce.nz*Pe),Ut?(H.person.group.rotation.y=Math.atan2(ce.tx*Math.sign(Kt),ce.tz*Math.sign(Kt)),vr(H.person,Gn*7)):(H.person.group.rotation.y=Math.atan2(-ce.nx*Xt,-ce.nz*Xt),_r(H.person),Fi(H.person,H.phase==="hook"?"push":"rest",Gn),H.person.armR.rotation.x&&(H.person.armR.rotation.x+=Math.sin(Gn*4)*.25)),H.phase==="out"&&!Ut?(H.phase="hook",H.b.startClearing(),j.toast("Heave!","info",1500)):H.phase==="back"&&!Ut&&(n.remove(H.person.group),P.steerer.visible=ui!=="steerer",pt=null)}let bn=null;for(const H of Nt){if(H.update(O,Gn)){const Kt=w.obstacles.indexOf(H.obstacle);Kt>=0&&w.obstacles.splice(Kt,1),Wt.cleared++,at.change(5,"cleared",0),Ce.setHazards(Nt.filter(Ut=>Ut.active).map(Ut=>o.point(Ut.s,0))),j.toast(`${H.description.cleared} Cast off (F) once you're back aboard.`,"info",7e3),(pt==null?void 0:pt.b)===H&&(pt.phase="back")}if(!H.active)continue;const lt=Math.abs(H.s-w.s);!H.spotted&&lt<90&&(H.spotted=!0,j.toast(`${H.description.spotted} Moor up nearby (F) and clear it with the boat hook (G).`,"warn",8e3)),lt<nc&&(!bn||lt<Math.abs(bn.s-w.s))&&(bn=H)}let Cr=N.prompt();const No=bn?void 0:At.near(w.s);!N.moored&&!Cr&&(No||bn)&&(Cr={key:"F",text:bn?"Moor up alongside the towpath to get at the blockage":`Moor up to load ${Nn[No.item].name}`,ready:!1}),bn!=null&&bn.clearing&&(Cr={key:"G",text:`Clearing… ${Math.round(bn.progress*100)}%`,ready:!1}),j.setPrompt(Cr);const Qn=[];if(N.moored&&!pt&&!j.offerOpen&&!Ct){const H=[];K.hunger>.3&&!K.cannotCook(!0)&&H.push({id:"cook",icon:"🍳",act:"cook",key:"C"}),it.needPart&&Math.abs(w.s-Rt())>=50?H.push({id:"repair",icon:"🛒",act:"repair"}):it.damage>.02&&H.push({id:"repair",icon:"🔧",act:"repair"}),Math.abs(w.s-Rt())<50&&(K.diesel<.9||K.gas<.9||K.heat<.9)&&H.push({id:"yardFuel",icon:"⛽",act:"yardFuel"});const Kt=Hn(w.x,P.group.position.y+3,w.z);Kt&&H.forEach((en,In)=>Qn.push({...en,x:Kt.x+(In-(H.length-1)/2)*52,y:Kt.y,ready:!0}));const Ut=Os.find(en=>Math.abs(en.s-w.s)<Io),ce=Ut&&K.water<.95?Hn(Ut.x,Ut.y+2.2,Ut.z):null;ce&&Qn.push({id:"water",icon:"💧",act:"water",...ce,ready:!0});const Pe=b.zoneAt(w.s);if((Pe==null?void 0:Pe.kind)==="stop"){const en=Pe.poi.kind,In=(Pe.s0+Pe.s1)/2,[zs,Bs]=o.point(In,(c.halfWidthAt(In)+1.5)*Xt),Oo=Hn(zs,g.bankTop(In)+(_e.has(Pe.id)?2.6:5.4),Bs),Fo={pub:"🍺",bar:"🍸",cafe:"☕",restaurant:"🍽️",hotel:"🍺",ice_cream:"🍦",supermarket:"🛒"}[en]??"🍺";Oo&&Qn.push({id:"visit",icon:Fo,act:"visit",...Oo,ready:Ei(en)})}}if(bn&&!bn.clearing&&!pt){const H=Hn(bn.obstacle.x,c.levelAt(bn.s)+1.8,bn.obstacle.z);H&&Qn.push({id:"clear",icon:"🪝",act:"clear",key:"G",...H,ready:N.moored})}else if(No){const H=No.group.position,lt=Hn(H.x,H.y+1.8,H.z);lt&&Qn.push({id:"pickup",icon:No.item==="logs"?"🪵":"🪨",act:"clear",key:"G",...lt,ready:N.moored})}if(Ge&&!Ge.sinking&&Math.hypot(Ge.x-w.x,Ge.z-w.z)<25){const H=Hn(Ge.x,Ge.mesh.position.y+1.4,Ge.z);H&&Qn.push({id:"fish",icon:"🪝",act:"clear",key:"G",...H,ready:N.moored})}if(Ct&&!pt){const H=Qa(ft),lt=w.speed*ii<Uh||N.moored||!!cn;if(!ot.active&&(lt||H)){const Kt=H?Ct.gate?[Ct.gate]:[]:Ct.adjacent;for(const Ut of Kt){const ce=c.gates.indexOf(Ut),Pe=o.frame(Ut.s),en=(c.halfWidthAt(Ut.s)+1.8)*Xt,In=Wa(Pe.x+Pe.nx*en,g.bankTop(Ut.s)+2.2,Pe.z+Pe.nz*en);if(!In)continue;const zs=Ut.wantPaddle?"paddlesDown":"paddlesUp",Bs=Ut.wantOpen?"close":"open",Oo=vp=>Ct.gate===Ut&&!Ct.keeper&&Ct.action===vp,Fo=Ut.wantPaddle?Ut.paddle<1:Ut.paddle>0,nl=Ut.wantOpen?Ut.open<1:Ut.open>0,gp=!H||Ut.wantPaddle&&Ut.wantOpen,Pr=((zh=cn==null?void 0:cn.job)==null?void 0:zh.g)===Ut?cn.job.what:null;(!H||Ut.wantPaddle)&&Qn.push({id:`lp:${ce}`,icon:np(zs==="paddlesUp"),act:"lockNext",x:In.x,y:In.y-(gp?48:0),edge:In.edge,label:Pr==="paddlesUp"||Pr==="paddlesDown"?"On my way…":Fo?Ut.wantPaddle?"Winding up…":"Winding down…":zs==="paddlesUp"?"Raise paddles":"Drop paddles",ready:lt&&!Ar(Ut,zs)||H,glow:Oo(zs)&&!Fo,warn:H,progress:Fo?Ut.wantPaddle?Ut.paddle:1-Ut.paddle:void 0}),(!H||Ut.wantOpen)&&Qn.push({id:`lg:${ce}`,icon:ip(Bs==="open"),act:"lockNext",x:In.x,y:In.y,edge:In.edge,label:Pr==="open"||Pr==="close"?"On my way…":nl?Ut.wantOpen?"Opening…":"Closing…":Bs==="open"?"Open gates":"Close gates",ready:lt&&!Ar(Ut,Bs)||H,glow:Oo(Bs)&&!nl,warn:H,progress:nl?Ut.wantOpen?Ut.open:1-Ut.open:void 0})}}if(!H&&ot.isStaffed(Ct.group)){const Kt=ot.helperAt(Ct.group,w.s),Ut=!ot.active&&!!(Cn!=null&&Cn.self),ce=Kt?Hn(Kt.x,Kt.y+(Ut?4.2:2.4),Kt.z):null;ce&&Qn.push({id:"volunteer",icon:ot.active?"✋":"🙋",act:"autopilot",...ce,ready:!0,label:ot.active?"Take over":Ut?void 0:"Volunteer: need a hand?"})}}if(we&&!j.offerOpen){const H=we,lt=Math.hypot(H.obstacle.x-w.x,H.obstacle.z-w.z),Kt=lt<200?Hn(H.obstacle.x,H.model.group.position.y+3.4,H.obstacle.z):null;Kt&&Qn.push({id:"fuel",icon:"⛽",act:"fuel",...Kt,ready:lt<Lt&&w.speed*ii<1.3,spin:!0})}j.setBubbles(Qn);const mp=c.gates.reduce((H,lt)=>H+(Math.abs(lt.s-w.s)<120?Math.abs(lt.flow):0),0);de.update(w.notch,mp,j.isWinding,!y.isNight),e.render(n,i),requestAnimationFrame(Nh)};await ss("Casting off…"),tp.classList.add("done"),requestAnimationFrame(Nh),Object.assign(window,{game:{scene:n,boat:w,ww:c,camera:i,route:o,renderer:e,moorings:b,trips:Wt,traffic:V,decor:$,life:G,blockages:Nt,volunteers:ot,lines:N,minimap:Ce,roof:z,pickups:At,trains:M,cars:S}})}i1().catch(s=>{console.error(s),ep.textContent=`Something went wrong: ${s.message}`});
