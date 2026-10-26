var md=Object.defineProperty;var gd=(i,t,e)=>t in i?md(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var U=(i,t,e)=>gd(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fl="170",Hs={ROTATE:0,DOLLY:1,PAN:2},ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_d=0,cc=1,vd=2,mu=1,gu=2,oi=3,Di=0,rn=1,Ae=2,Pi=0,Gs=1,Ga=2,hc=3,uc=4,xd=5,$i=100,Md=101,yd=102,bd=103,wd=104,Sd=200,Ed=201,Td=202,Ad=203,Va=204,Wa=205,Rd=206,Cd=207,Pd=208,Ld=209,Dd=210,Id=211,Ud=212,Nd=213,kd=214,Xa=0,$a=1,qa=2,Xs=3,Ya=4,ja=5,Za=6,Ka=7,_u=0,Od=1,Fd=2,Li=0,zd=1,Bd=2,Hd=3,vu=4,Gd=5,Vd=6,Wd=7,xu=300,$s=301,qs=302,Ja=303,Qa=304,Br=306,Ys=1e3,ai=1001,tl=1002,gn=1003,Xd=1004,Fo=1005,Wn=1006,$r=1007,ji=1008,ui=1009,Mu=1010,yu=1011,Ro=1012,zl=1013,Qi=1014,Xn=1015,No=1016,Bl=1017,Hl=1018,js=1020,bu=35902,wu=1021,Su=1022,In=1023,Eu=1024,Tu=1025,Vs=1026,Zs=1027,Gl=1028,Vl=1029,Au=1030,Wl=1031,Xl=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,el=35840,nl=35841,il=35842,sl=35843,ol=36196,rl=37492,al=37496,ll=37808,cl=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,_l=37817,vl=37818,xl=37819,Ml=37820,yl=37821,Lr=36492,bl=36494,wl=36495,Ru=36283,Sl=36284,El=36285,Tl=36286,$d=3200,qd=3201,Cu=0,Yd=1,Ti="",Pe="srgb",to="srgb-linear",Hr="linear",ye="srgb",hs=7680,dc=519,jd=512,Zd=513,Kd=514,Pu=515,Jd=516,Qd=517,tf=518,ef=519,Al=35044,Ki=35048,fc="300 es",li=2e3,Ur=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pc=1234567;const So=Math.PI/180,Ks=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function $l(i,t){return(i%t+t)%t}function nf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function sf(i,t,e){return i!==t?(e-i)/(t-i):0}function Eo(i,t,e){return(1-e)*i+e*t}function of(i,t,e,n){return Eo(i,t,1-Math.exp(-e*n))}function rf(i,t=1){return t-Math.abs($l(i,t*2)-t)}function af(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function lf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function cf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function hf(i,t){return i+Math.random()*(t-i)}function uf(i){return i*(.5-Math.random())}function df(i){i!==void 0&&(pc=i);let t=pc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ff(i){return i*So}function pf(i){return i*Ks}function mf(i){return(i&i-1)===0&&i!==0}function gf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _f(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vf(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),d=o((t-n)/2),f=r((t-n)/2),u=o((n-t)/2),m=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ji={DEG2RAD:So,RAD2DEG:Ks,generateUUID:Yn,clamp:Be,euclideanModulo:$l,mapLinear:nf,inverseLerp:sf,lerp:Eo,damp:of,pingpong:rf,smoothstep:af,smootherstep:lf,randInt:cf,randFloat:hf,randFloatSpread:uf,seededRandom:df,degToRad:ff,radToDeg:pf,isPowerOfTwo:mf,ceilPowerOfTwo:gf,floorPowerOfTwo:_f,setQuaternionFromProperEuler:vf,normalize:Me,denormalize:Dn};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ae{constructor(t,e,n,s,o,r,a,l,c){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],_=s[0],g=s[3],p=s[6],M=s[1],x=s[4],v=s[7],A=s[2],S=s[5],E=s[8];return o[0]=r*_+a*M+l*A,o[3]=r*g+a*x+l*S,o[6]=r*p+a*v+l*E,o[1]=c*_+h*M+d*A,o[4]=c*g+h*x+d*S,o[7]=c*p+h*v+d*E,o[2]=f*_+u*M+m*A,o[5]=f*g+u*x+m*S,o[8]=f*p+u*v+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*r-a*c,f=a*l-h*o,u=c*o-r*l,m=e*d+n*f+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*o-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(qr.makeScale(t,e)),this}rotate(t){return this.premultiply(qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new ae;function Lu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xf(){const i=Nr("canvas");return i.style.display="block",i}const mc={};function yo(i){i in mc||(mc[i]=!0,console.warn(i))}function Mf(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function yf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const pe={enabled:!0,workingColorSpace:to,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ye&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ye&&(i.r=Ws(i.r),i.g=Ws(i.g),i.b=Ws(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ti?Hr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const gc=[.64,.33,.3,.6,.15,.06],_c=[.2126,.7152,.0722],vc=[.3127,.329],xc=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pe.define({[to]:{primaries:gc,whitePoint:vc,transfer:Hr,toXYZ:xc,fromXYZ:Mc,luminanceCoefficients:_c,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:gc,whitePoint:vc,transfer:ye,toXYZ:xc,fromXYZ:Mc,luminanceCoefficients:_c,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});let us;class wf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{us===void 0&&(us=Nr("canvas")),us.width=t.width,us.height=t.height;const n=us.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Nr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=hi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sf=0;class Du{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Yr(s[r].image)):o.push(Yr(s[r]))}else o=Yr(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Yr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ef=0;class tn extends ns{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,n=ai,s=ai,o=Wn,r=ji,a=In,l=ui,c=tn.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Yn(),this.name="",this.source=new Du(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ys:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ys:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=xu;tn.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,s=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(u+1)/2,A=(p+1)/2,S=(h+f)/4,E=(d+_)/4,b=(m+g)/4;return x>v&&x>A?x<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(x),s=S/n,o=E/n):v>A?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=S/s,o=b/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=E/o,s=b/o),this.set(n,s,o,e),this}let M=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(d-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tf extends ns{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Du(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends Tf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Iu extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Af extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const f=o[r+0],u=o[r+1],m=o[r+2],_=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=u,t[e+2]=m,t[e+3]=_;return}if(d!==_||l!==f||c!==u||h!==m){let g=1-a;const p=l*f+c*u+h*m+d*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),S=Math.atan2(A,p*M);g=Math.sin(g*S)/A,a=Math.sin(a*S)/A}const v=a*M;if(l=l*g+f*v,c=c*g+u*v,h=h*g+m*v,d=d*g+_*v,g===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=o[r],f=o[r+1],u=o[r+2],m=o[r+3];return t[e]=a*m+h*d+l*u-c*f,t[e+1]=l*m+h*f+c*d-a*u,t[e+2]=c*m+h*u+a*f-l*d,t[e+3]=h*m-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(o/2),f=l(n/2),u=l(s/2),m=l(o/2);switch(r){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(o-c)*u,this._z=(r-s)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+r)/u,this._z=(o+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(o-c)/u,this._x=(s+r)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(r-s)/u,this._x=(o+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-e;return this._w=u*r+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=r*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),d=2*(o*n-r*e);return this.x=e+l*c+r*d-a*h,this.y=n+l*h+a*c-o*d,this.z=s+l*d+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jr.copy(this).projectOnVector(t),this.sub(jr)}reflect(t){return this.sub(jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new I,yc=new En;class is{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,An):An.fromBufferAttribute(o,r),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zo.copy(n.boundingBox)),zo.applyMatrix4(t.matrixWorld),this.union(zo)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ro),Bo.subVectors(this.max,ro),ds.subVectors(t.a,ro),fs.subVectors(t.b,ro),ps.subVectors(t.c,ro),mi.subVectors(fs,ds),gi.subVectors(ps,fs),Oi.subVectors(ds,ps);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Oi.z,Oi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Oi.z,0,-Oi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Oi.y,Oi.x,0];return!Zr(e,ds,fs,ps,Bo)||(e=[1,0,0,0,1,0,0,0,1],!Zr(e,ds,fs,ps,Bo))?!1:(Ho.crossVectors(mi,gi),e=[Ho.x,Ho.y,Ho.z],Zr(e,ds,fs,ps,Bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qn=[new I,new I,new I,new I,new I,new I,new I,new I],An=new I,zo=new is,ds=new I,fs=new I,ps=new I,mi=new I,gi=new I,Oi=new I,ro=new I,Bo=new I,Ho=new I,Fi=new I;function Zr(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Fi.fromArray(i,o);const a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=t.dot(Fi),c=e.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Rf=new is,ao=new I,Kr=new I;class eo{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rf.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ao.subVectors(t,this.center);const e=ao.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ao,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ao.copy(t.center).add(Kr)),this.expandByPoint(ao.copy(t.center).sub(Kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new I,Jr=new I,Go=new I,_i=new I,Qr=new I,Vo=new I,ta=new I;class Gr{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jr.copy(t).add(e).multiplyScalar(.5),Go.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(Jr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Go),a=_i.dot(this.direction),l=-_i.dot(Go),c=_i.lengthSq(),h=Math.abs(1-r*r);let d,f,u,m;if(h>0)if(d=r*l-a,f=r*a-l,m=o*h,d>=0)if(f>=-m)if(f<=m){const _=1/h;d*=_,f*=_,u=d*(d+r*f+2*a)+f*(r*d+f+2*l)+c}else f=o,d=Math.max(0,-(r*f+a)),u=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(r*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-r*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-o,-l),o),u=f*(f+2*l)+c):(d=Math.max(0,-(r*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),u=-d*d+f*(f+2*l)+c);else f=r>0?-o:o,d=Math.max(0,-(r*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Jr).addScaledVector(Go,f),u}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const n=ti.dot(this.direction),s=ti.dot(ti)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,o){Qr.subVectors(e,t),Vo.subVectors(n,t),ta.crossVectors(Qr,Vo);let r=this.direction.dot(ta),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;_i.subVectors(this.origin,t);const l=a*this.direction.dot(Vo.crossVectors(_i,Vo));if(l<0)return null;const c=a*this.direction.dot(Qr.cross(_i));if(c<0||l+c>r)return null;const h=-a*_i.dot(ta);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,s,o,r,a,l,c,h,d,f,u,m,_,g){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,d,f,u,m,_,g)}set(t,e,n,s,o,r,a,l,c,h,d,f,u,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ms.setFromMatrixColumn(t,0).length(),o=1/ms.setFromMatrixColumn(t,1).length(),r=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const f=r*h,u=r*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+u*c,e[10]=r*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f+_*a,e[4]=m*a-u,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=u*a-m,e[6]=_+f*a,e[10]=r*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f-_*a,e[4]=-r*d,e[8]=m+u*a,e[1]=u+m*a,e[5]=r*h,e[9]=_-f*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const f=r*h,u=r*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-u,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=u*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,u=r*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=m*d+u,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+m,e[10]=f-_*d}else if(t.order==="XZY"){const f=r*l,u=r*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=r*h,e[9]=u*d-m,e[2]=m*d-u,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cf,t,Pf)}lookAt(t,e,n){const s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),vi.crossVectors(n,fn),vi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),vi.crossVectors(n,fn)),vi.normalize(),Wo.crossVectors(fn,vi),s[0]=vi.x,s[4]=Wo.x,s[8]=fn.x,s[1]=vi.y,s[5]=Wo.y,s[9]=fn.y,s[2]=vi.z,s[6]=Wo.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],_=n[6],g=n[10],p=n[14],M=n[3],x=n[7],v=n[11],A=n[15],S=s[0],E=s[4],b=s[8],w=s[12],y=s[1],C=s[5],k=s[9],F=s[13],O=s[2],B=s[6],V=s[10],N=s[14],W=s[3],ht=s[7],vt=s[11],Mt=s[15];return o[0]=r*S+a*y+l*O+c*W,o[4]=r*E+a*C+l*B+c*ht,o[8]=r*b+a*k+l*V+c*vt,o[12]=r*w+a*F+l*N+c*Mt,o[1]=h*S+d*y+f*O+u*W,o[5]=h*E+d*C+f*B+u*ht,o[9]=h*b+d*k+f*V+u*vt,o[13]=h*w+d*F+f*N+u*Mt,o[2]=m*S+_*y+g*O+p*W,o[6]=m*E+_*C+g*B+p*ht,o[10]=m*b+_*k+g*V+p*vt,o[14]=m*w+_*F+g*N+p*Mt,o[3]=M*S+x*y+v*O+A*W,o[7]=M*E+x*C+v*B+A*ht,o[11]=M*b+x*k+v*V+A*vt,o[15]=M*w+x*F+v*N+A*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+o*l*d-s*c*d-o*a*f+n*c*f+s*a*u-n*l*u)+_*(+e*l*u-e*c*f+o*r*f-s*r*u+s*c*h-o*l*h)+g*(+e*c*d-e*a*u-o*r*d+n*r*u+o*a*h-n*c*h)+p*(-s*a*h-e*l*d+e*a*f+s*r*d-n*r*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],m=t[12],_=t[13],g=t[14],p=t[15],M=d*g*c-_*f*c+_*l*u-a*g*u-d*l*p+a*f*p,x=m*f*c-h*g*c-m*l*u+r*g*u+h*l*p-r*f*p,v=h*_*c-m*d*c+m*a*u-r*_*u-h*a*p+r*d*p,A=m*d*l-h*_*l-m*a*f+r*_*f+h*a*g-r*d*g,S=e*M+n*x+s*v+o*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return t[0]=M*E,t[1]=(_*f*o-d*g*o-_*s*u+n*g*u+d*s*p-n*f*p)*E,t[2]=(a*g*o-_*l*o+_*s*c-n*g*c-a*s*p+n*l*p)*E,t[3]=(d*l*o-a*f*o-d*s*c+n*f*c+a*s*u-n*l*u)*E,t[4]=x*E,t[5]=(h*g*o-m*f*o+m*s*u-e*g*u-h*s*p+e*f*p)*E,t[6]=(m*l*o-r*g*o-m*s*c+e*g*c+r*s*p-e*l*p)*E,t[7]=(r*f*o-h*l*o+h*s*c-e*f*c-r*s*u+e*l*u)*E,t[8]=v*E,t[9]=(m*d*o-h*_*o-m*n*u+e*_*u+h*n*p-e*d*p)*E,t[10]=(r*_*o-m*a*o+m*n*c-e*_*c-r*n*p+e*a*p)*E,t[11]=(h*a*o-r*d*o-h*n*c+e*d*c+r*n*u-e*a*u)*E,t[12]=A*E,t[13]=(h*_*s-m*d*s+m*n*f-e*_*f-h*n*g+e*d*g)*E,t[14]=(m*a*s-r*_*s-m*n*l+e*_*l+r*n*g-e*a*g)*E,t[15]=(r*d*s-h*a*s+h*n*l-e*d*l-r*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,d=a+a,f=o*c,u=o*h,m=o*d,_=r*h,g=r*d,p=a*d,M=l*c,x=l*h,v=l*d,A=n.x,S=n.y,E=n.z;return s[0]=(1-(_+p))*A,s[1]=(u+v)*A,s[2]=(m-x)*A,s[3]=0,s[4]=(u-v)*S,s[5]=(1-(f+p))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(m+x)*E,s[9]=(g-M)*E,s[10]=(1-(f+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=ms.set(s[0],s[1],s[2]).length();const r=ms.set(s[4],s[5],s[6]).length(),a=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Rn.copy(this);const c=1/o,h=1/r,d=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,e.setFromRotationMatrix(Rn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=li){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let u,m;if(a===li)u=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===Ur)u=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=li){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(r-o),f=(e+t)*c,u=(n+s)*h;let m,_;if(a===li)m=(r+o)*d,_=-2*d;else if(a===Ur)m=o*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ms=new I,Rn=new de,Cf=new I(0,0,0),Pf=new I(1,1,1),vi=new I,Wo=new I,fn=new I,bc=new de,wc=new En;class kn{constructor(t=0,e=0,n=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wc.setFromEuler(this),this.setFromQuaternion(wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lf=0;const Sc=new I,gs=new En,ei=new de,Xo=new I,lo=new I,Df=new I,If=new En,Ec=new I(1,0,0),Tc=new I(0,1,0),Ac=new I(0,0,1),Rc={type:"added"},Uf={type:"removed"},_s={type:"childadded",child:null},ea={type:"childremoved",child:null};class Ie extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new I,e=new kn,n=new En,s=new I(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new ae}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Ec,t)}rotateY(t){return this.rotateOnAxis(Tc,t)}rotateZ(t){return this.rotateOnAxis(Ac,t)}translateOnAxis(t,e){return Sc.copy(t).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ec,t)}translateY(t){return this.translateOnAxis(Tc,t)}translateZ(t){return this.translateOnAxis(Ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xo.copy(t):Xo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(lo,Xo,this.up):ei.lookAt(Xo,lo,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(ei),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rc),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uf),ea.child=t,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rc),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,t,Df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,If,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),f=r(t.skeletons),u=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new I(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new I,ni=new I,na=new I,ii=new I,vs=new I,xs=new I,Cc=new I,ia=new I,sa=new I,oa=new I,ra=new Le,aa=new Le,la=new Le;class bn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Cn.subVectors(s,e),ni.subVectors(n,e),na.subVectors(t,e);const r=Cn.dot(Cn),a=Cn.dot(ni),l=Cn.dot(na),c=ni.dot(ni),h=ni.dot(na),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,u=(c*l-a*h)*f,m=(r*h-a*l)*f;return o.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ii.x),l.addScaledVector(r,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return ra.setScalar(0),aa.setScalar(0),la.setScalar(0),ra.fromBufferAttribute(t,e),aa.fromBufferAttribute(t,n),la.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(ra,o.x),r.addScaledVector(aa,o.y),r.addScaledVector(la,o.z),r}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),ni.subVectors(t,e),Cn.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Cn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return bn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;vs.subVectors(s,n),xs.subVectors(o,n),ia.subVectors(t,n);const l=vs.dot(ia),c=xs.dot(ia);if(l<=0&&c<=0)return e.copy(n);sa.subVectors(t,s);const h=vs.dot(sa),d=xs.dot(sa);if(h>=0&&d<=h)return e.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(vs,r);oa.subVectors(t,o);const u=vs.dot(oa),m=xs.dot(oa);if(m>=0&&u<=m)return e.copy(o);const _=u*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(xs,a);const g=h*m-u*d;if(g<=0&&d-h>=0&&u-m>=0)return Cc.subVectors(o,s),a=(d-h)/(d-h+(u-m)),e.copy(s).addScaledVector(Cc,a);const p=1/(g+_+f);return r=_*p,a=f*p,e.copy(n).addScaledVector(vs,r).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},$o={h:0,s:0,l:0};function ca(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=$l(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=ca(r,o,t+1/3),this.g=ca(r,o,t),this.b=ca(r,o,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=Uu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return pe.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Be(Qe.r*255,0,255))*65536+Math.round(Be(Qe.g*255,0,255))*256+Math.round(Be(Qe.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Qe.copy(this),e);const n=Qe.r,s=Qe.g,o=Qe.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case n:l=(s-o)/d+(s<o?6:0);break;case s:l=(o-n)/d+2;break;case o:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Pe){pe.fromWorkingColorSpace(Qe.copy(this),t);const e=Qe.r,n=Qe.g,s=Qe.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL($o);const n=Eo(xi.h,$o.h,e),s=Eo(xi.s,$o.s,e),o=Eo(xi.l,$o.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new Ht;Ht.NAMES=Uu;let Nf=0;class ss extends ns{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Yn(),this.name="",this.blending=Gs,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Wa,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Va&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _n extends ss{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new I,qo=new ot;class ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Al,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qo.fromBufferAttribute(this,e),qo.applyMatrix3(t),this.setXY(e,qo.x,qo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),o=Me(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Al&&(t.usage=this.usage),t}}class Nu extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ku extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let kf=0;const Mn=new de,ha=new Ie,Ms=new I,pn=new is,co=new is,Xe=new I;class me extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lu(t)?ku:Nu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ae().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return ha.lookAt(t),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new qt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];pn.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];co.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(pn.min,co.min),pn.expandByPoint(Xe),Xe.addVectors(pn.max,co.max),pn.expandByPoint(Xe)):(pn.expandByPoint(co.min),pn.expandByPoint(co.max))}pn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Xe.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Xe.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(t,c),Xe.add(Ms)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new I,l[b]=new I;const c=new I,h=new I,d=new I,f=new ot,u=new ot,m=new ot,_=new I,g=new I;function p(b,w,y){c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),f.fromBufferAttribute(o,b),u.fromBufferAttribute(o,w),m.fromBufferAttribute(o,y),h.sub(c),d.sub(c),u.sub(f),m.sub(f);const C=1/(u.x*m.y-m.x*u.y);isFinite(C)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-u.y).multiplyScalar(C),g.copy(d).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(C),a[b].add(_),a[w].add(_),a[y].add(_),l[b].add(g),l[w].add(g),l[y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let b=0,w=M.length;b<w;++b){const y=M[b],C=y.start,k=y.count;for(let F=C,O=C+k;F<O;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new I,v=new I,A=new I,S=new I;function E(b){A.fromBufferAttribute(s,b),S.copy(A);const w=a[b];x.copy(w),x.sub(A.multiplyScalar(A.dot(w))).normalize(),v.crossVectors(S,w);const C=v.dot(l[b])<0?-1:1;r.setXYZW(b,x.x,x.y,x.z,C)}for(let b=0,w=M.length;b<w;++b){const y=M[b],C=y.start,k=y.count;for(let F=C,O=C+k;F<O;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new I,o=new I,r=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let f=0,u=t.count;f<u;f+=3){const m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let u=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let p=0;p<h;p++)f[m++]=c[u++]}return new ke(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],d=o[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pc=new de,zi=new Gr,Yo=new eo,Lc=new I,jo=new I,Zo=new I,Ko=new I,ua=new I,Jo=new I,Dc=new I,Qo=new I;class J extends Ie{constructor(t=new me,e=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Jo.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],d=o[l];h!==0&&(ua.fromBufferAttribute(d,t),r?Jo.addScaledVector(ua,h):Jo.addScaledVector(ua.sub(e),h))}e.add(Jo)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(o),zi.copy(t.ray).recast(t.near),!(Yo.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Yo,Lc)===null||zi.origin.distanceToSquared(Lc)>(t.far-t.near)**2))&&(Pc.copy(o).invert(),zi.copy(t.ray).applyMatrix4(Pc),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,f=o.groups,u=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=r[g.materialIndex],M=Math.max(g.start,u.start),x=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let v=M,A=x;v<A;v+=3){const S=a.getX(v),E=a.getX(v+1),b=a.getX(v+2);s=tr(this,p,t,n,c,h,d,S,E,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let g=m,p=_;g<p;g+=3){const M=a.getX(g),x=a.getX(g+1),v=a.getX(g+2);s=tr(this,r,t,n,c,h,d,M,x,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=r[g.materialIndex],M=Math.max(g.start,u.start),x=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let v=M,A=x;v<A;v+=3){const S=v,E=v+1,b=v+2;s=tr(this,p,t,n,c,h,d,S,E,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let g=m,p=_;g<p;g+=3){const M=g,x=g+1,v=g+2;s=tr(this,r,t,n,c,h,d,M,x,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Of(i,t,e,n,s,o,r,a){let l;if(t.side===rn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===Di,a),l===null)return null;Qo.copy(a),Qo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Qo);return c<e.near||c>e.far?null:{distance:c,point:Qo.clone(),object:i}}function tr(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,jo),i.getVertexPosition(l,Zo),i.getVertexPosition(c,Ko);const h=Of(i,t,e,n,jo,Zo,Ko,Dc);if(h){const d=new I;bn.getBarycoord(Dc,jo,Zo,Ko,d),s&&(h.uv=bn.getInterpolatedAttribute(s,a,l,c,d,new ot)),o&&(h.uv1=bn.getInterpolatedAttribute(o,a,l,c,d,new ot)),r&&(h.normal=bn.getInterpolatedAttribute(r,a,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};bn.getNormal(jo,Zo,Ko,f.normal),h.face=f,h.barycoord=d}return h}class Wt extends me{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],d=[];let f=0,u=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,o,4),m("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(d,2));function m(_,g,p,M,x,v,A,S,E,b,w){const y=v/E,C=A/b,k=v/2,F=A/2,O=S/2,B=E+1,V=b+1;let N=0,W=0;const ht=new I;for(let vt=0;vt<V;vt++){const Mt=vt*C-F;for(let Gt=0;Gt<B;Gt++){const Kt=Gt*y-k;ht[_]=Kt*M,ht[g]=Mt*x,ht[p]=O,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[g]=0,ht[p]=S>0?1:-1,h.push(ht.x,ht.y,ht.z),d.push(Gt/E),d.push(1-vt/b),N+=1}}for(let vt=0;vt<b;vt++)for(let Mt=0;Mt<E;Mt++){const Gt=f+Mt+B*vt,Kt=f+Mt+B*(vt+1),Q=f+(Mt+1)+B*(vt+1),dt=f+(Mt+1)+B*vt;l.push(Gt,Kt,dt),l.push(Kt,Q,dt),W+=6}a.addGroup(u,W,w),u+=W,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Js(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function on(i){const t={};for(let e=0;e<i.length;e++){const n=Js(i[e]);for(const s in n)t[s]=n[s]}return t}function Ff(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ou(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Fu={clone:Js,merge:on};var zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends ss{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zf,this.fragmentShader=Bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Js(t.uniforms),this.uniformsGroups=Ff(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zu extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new I,Ic=new ot,Uc=new ot;class cn extends zu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,Ic,Uc),e.subVectors(Uc,Ic)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(So*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ys=-90,bs=1;class Hf extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(ys,bs,t,e);s.layers=this.layers,this.add(s);const o=new cn(ys,bs,t,e);o.layers=this.layers,this.add(o);const r=new cn(ys,bs,t,e);r.layers=this.layers,this.add(r);const a=new cn(ys,bs,t,e);a.layers=this.layers,this.add(a);const l=new cn(ys,bs,t,e);l.layers=this.layers,this.add(l);const c=new cn(ys,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Bu extends tn{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:$s,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gf extends ts{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Bu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wt(5,5,5),o=new di({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Pi});o.uniforms.tEquirect.value=e;const r=new J(s,o),a=e.minFilter;return e.minFilter===ji&&(e.minFilter=Wn),new Hf(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const da=new I,Vf=new I,Wf=new ae;class Ei{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=da.subVectors(n,e).cross(Vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wf.getNormalMatrix(t),s=this.coplanarPoint(da).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new eo,er=new I;class Yl{constructor(t=new Ei,e=new Ei,n=new Ei,s=new Ei,o=new Ei,r=new Ei){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],u=s[8],m=s[9],_=s[10],g=s[11],p=s[12],M=s[13],x=s[14],v=s[15];if(n[0].setComponents(l-o,f-c,g-u,v-p).normalize(),n[1].setComponents(l+o,f+c,g+u,v+p).normalize(),n[2].setComponents(l+r,f+h,g+m,v+M).normalize(),n[3].setComponents(l-r,f-h,g-m,v-M).normalize(),n[4].setComponents(l-a,f-d,g-_,v-x).normalize(),e===li)n[5].setComponents(l+a,f+d,g+_,v+x).normalize();else if(e===Ur)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(er.x=s.normal.x>0?t.max.x:t.min.x,er.y=s.normal.y>0?t.max.y:t.min.y,er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hu(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Xf(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){const m=d[f],_=d[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){const _=d[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class pi extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,u=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const M=p*f-r;for(let x=0;x<c;x++){const v=x*d-o;m.push(v,-M,0),_.push(0,0,1),g.push(x/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const x=M+c*p,v=M+c*(p+1),A=M+1+c*(p+1),S=M+1+c*p;u.push(x,v,S),u.push(v,A,S)}this.setIndex(u),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.width,t.height,t.widthSegments,t.heightSegments)}}var $f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
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
#endif`,Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jf=`#ifdef USE_AOMAP
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
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tp=`#ifdef USE_BATCHING
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
#endif`,ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,op=`#ifdef USE_IRIDESCENCE
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
#endif`,rp=`#ifdef USE_BUMPMAP
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mp=`#define PI 3.141592653589793
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
} // validated`,gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_p=`vec3 transformedNormal = objectNormal;
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
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ip=`#ifdef USE_GRADIENTMAP
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
}`,Up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Op=`uniform bool receiveShadow;
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
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
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
#endif`,Wp=`struct PhysicalMaterial {
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
}`,Xp=`
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,em=`#if defined( USE_POINTS_UV )
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
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
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
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pm=`#ifdef USE_NORMALMAP
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
#endif`,mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pm=`float getShadowMask() {
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
}`,Lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
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
}`,Jm=`#if DEPTH_PACKING == 3200
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
}`,Qm=`#define DISTANCE
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
}`,t0=`#define DISTANCE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,s0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,r0=`uniform vec3 diffuse;
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
}`,a0=`#define LAMBERT
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define MATCAP
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
}`,h0=`#define MATCAP
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
}`,u0=`#define NORMAL
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
}`,d0=`#define NORMAL
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
}`,f0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,m0=`#define STANDARD
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
}`,g0=`#define STANDARD
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
}`,_0=`#define TOON
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
}`,v0=`#define TOON
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
}`,x0=`uniform float size;
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
}`,M0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,b0=`uniform vec3 color;
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
}`,w0=`uniform float rotation;
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
}`,S0=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:$f,alphahash_pars_fragment:qf,alphamap_fragment:Yf,alphamap_pars_fragment:jf,alphatest_fragment:Zf,alphatest_pars_fragment:Kf,aomap_fragment:Jf,aomap_pars_fragment:Qf,batching_pars_vertex:tp,batching_vertex:ep,begin_vertex:np,beginnormal_vertex:ip,bsdfs:sp,iridescence_fragment:op,bumpmap_pars_fragment:rp,clipping_planes_fragment:ap,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:cp,clipping_planes_vertex:hp,color_fragment:up,color_pars_fragment:dp,color_pars_vertex:fp,color_vertex:pp,common:mp,cube_uv_reflection_fragment:gp,defaultnormal_vertex:_p,displacementmap_pars_vertex:vp,displacementmap_vertex:xp,emissivemap_fragment:Mp,emissivemap_pars_fragment:yp,colorspace_fragment:bp,colorspace_pars_fragment:wp,envmap_fragment:Sp,envmap_common_pars_fragment:Ep,envmap_pars_fragment:Tp,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Fp,envmap_vertex:Rp,fog_vertex:Cp,fog_pars_vertex:Pp,fog_fragment:Lp,fog_pars_fragment:Dp,gradientmap_pars_fragment:Ip,lightmap_pars_fragment:Up,lights_lambert_fragment:Np,lights_lambert_pars_fragment:kp,lights_pars_begin:Op,lights_toon_fragment:zp,lights_toon_pars_fragment:Bp,lights_phong_fragment:Hp,lights_phong_pars_fragment:Gp,lights_physical_fragment:Vp,lights_physical_pars_fragment:Wp,lights_fragment_begin:Xp,lights_fragment_maps:$p,lights_fragment_end:qp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Kp,map_fragment:Jp,map_pars_fragment:Qp,map_particle_fragment:tm,map_particle_pars_fragment:em,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphinstance_vertex:sm,morphcolor_vertex:om,morphnormal_vertex:rm,morphtarget_pars_vertex:am,morphtarget_vertex:lm,normal_fragment_begin:cm,normal_fragment_maps:hm,normal_pars_fragment:um,normal_pars_vertex:dm,normal_vertex:fm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:vm,opaque_fragment:xm,packing:Mm,premultiplied_alpha_fragment:ym,project_vertex:bm,dithering_fragment:wm,dithering_pars_fragment:Sm,roughnessmap_fragment:Em,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Rm,shadowmap_vertex:Cm,shadowmask_pars_fragment:Pm,skinbase_vertex:Lm,skinning_pars_vertex:Dm,skinning_vertex:Im,skinnormal_vertex:Um,specularmap_fragment:Nm,specularmap_pars_fragment:km,tonemapping_fragment:Om,tonemapping_pars_fragment:Fm,transmission_fragment:zm,transmission_pars_fragment:Bm,uv_pars_fragment:Hm,uv_pars_vertex:Gm,uv_vertex:Vm,worldpos_vertex:Wm,background_vert:Xm,background_frag:$m,backgroundCube_vert:qm,backgroundCube_frag:Ym,cube_vert:jm,cube_frag:Zm,depth_vert:Km,depth_frag:Jm,distanceRGBA_vert:Qm,distanceRGBA_frag:t0,equirect_vert:e0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:s0,meshbasic_vert:o0,meshbasic_frag:r0,meshlambert_vert:a0,meshlambert_frag:l0,meshmatcap_vert:c0,meshmatcap_frag:h0,meshnormal_vert:u0,meshnormal_frag:d0,meshphong_vert:f0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:g0,meshtoon_vert:_0,meshtoon_frag:v0,points_vert:x0,points_frag:M0,shadow_vert:y0,shadow_frag:b0,sprite_vert:w0,sprite_frag:S0},Et={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Gn={basic:{uniforms:on([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:on([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:on([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:on([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:on([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:on([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:on([Et.points,Et.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:on([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:on([Et.common,Et.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:on([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:on([Et.sprite,Et.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:on([Et.common,Et.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:on([Et.lights,Et.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Gn.physical={uniforms:on([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const nr={r:0,b:0,g:0},Hi=new kn,E0=new de;function T0(i,t,e,n,s,o,r){const a=new Ht(0);let l=o===!0?0:1,c,h,d=null,f=0,u=null;function m(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const v=m(M);v===null?p(a,l):v&&v.isColor&&(p(v,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,x){const v=m(x);v&&(v.isCubeTexture||v.mapping===Br)?(h===void 0&&(h=new J(new Wt(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Js(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hi.copy(x.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(E0.makeRotationFromEuler(Hi)),h.material.toneMapped=pe.getTransfer(v.colorSpace)!==ye,(d!==v||f!==v.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,u=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new J(new pi(2,2),new di({name:"BackgroundMaterial",uniforms:Js(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=pe.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(nr,Ou(i)),n.buffers.color.setClear(nr.r,nr.g,nr.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:g}}function A0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,r=!1;function a(y,C,k,F,O){let B=!1;const V=d(F,k,C);o!==V&&(o=V,c(o.object)),B=u(y,F,k,O),B&&m(y,F,k,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(B||r)&&(r=!1,v(y,C,k,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,C,k){const F=k.wireframe===!0;let O=n[y.id];O===void 0&&(O={},n[y.id]=O);let B=O[C.id];B===void 0&&(B={},O[C.id]=B);let V=B[F];return V===void 0&&(V=f(l()),B[F]=V),V}function f(y){const C=[],k=[],F=[];for(let O=0;O<e;O++)C[O]=0,k[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:F,object:y,attributes:{},index:null}}function u(y,C,k,F){const O=o.attributes,B=C.attributes;let V=0;const N=k.getAttributes();for(const W in N)if(N[W].location>=0){const vt=O[W];let Mt=B[W];if(Mt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Mt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Mt=y.instanceColor)),vt===void 0||vt.attribute!==Mt||Mt&&vt.data!==Mt.data)return!0;V++}return o.attributesNum!==V||o.index!==F}function m(y,C,k,F){const O={},B=C.attributes;let V=0;const N=k.getAttributes();for(const W in N)if(N[W].location>=0){let vt=B[W];vt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor));const Mt={};Mt.attribute=vt,vt&&vt.data&&(Mt.data=vt.data),O[W]=Mt,V++}o.attributes=O,o.attributesNum=V,o.index=F}function _(){const y=o.newAttributes;for(let C=0,k=y.length;C<k;C++)y[C]=0}function g(y){p(y,0)}function p(y,C){const k=o.newAttributes,F=o.enabledAttributes,O=o.attributeDivisors;k[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),O[y]!==C&&(i.vertexAttribDivisor(y,C),O[y]=C)}function M(){const y=o.newAttributes,C=o.enabledAttributes;for(let k=0,F=C.length;k<F;k++)C[k]!==y[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function x(y,C,k,F,O,B,V){V===!0?i.vertexAttribIPointer(y,C,k,O,B):i.vertexAttribPointer(y,C,k,F,O,B)}function v(y,C,k,F){_();const O=F.attributes,B=k.getAttributes(),V=C.defaultAttributeValues;for(const N in B){const W=B[N];if(W.location>=0){let ht=O[N];if(ht===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){const vt=ht.normalized,Mt=ht.itemSize,Gt=t.get(ht);if(Gt===void 0)continue;const Kt=Gt.buffer,Q=Gt.type,dt=Gt.bytesPerElement,Nt=Q===i.INT||Q===i.UNSIGNED_INT||ht.gpuType===zl;if(ht.isInterleavedBufferAttribute){const nt=ht.data,Dt=nt.stride,Vt=ht.offset;if(nt.isInstancedInterleavedBuffer){for(let wt=0;wt<W.locationSize;wt++)p(W.location+wt,nt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let wt=0;wt<W.locationSize;wt++)g(W.location+wt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let wt=0;wt<W.locationSize;wt++)x(W.location+wt,Mt/W.locationSize,Q,vt,Dt*dt,(Vt+Mt/W.locationSize*wt)*dt,Nt)}else{if(ht.isInstancedBufferAttribute){for(let nt=0;nt<W.locationSize;nt++)p(W.location+nt,ht.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let nt=0;nt<W.locationSize;nt++)g(W.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let nt=0;nt<W.locationSize;nt++)x(W.location+nt,Mt/W.locationSize,Q,vt,Mt*dt,Mt/W.locationSize*nt*dt,Nt)}}else if(V!==void 0){const vt=V[N];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(W.location,vt);break;case 3:i.vertexAttrib3fv(W.location,vt);break;case 4:i.vertexAttrib4fv(W.location,vt);break;default:i.vertexAttrib1fv(W.location,vt)}}}}M()}function A(){b();for(const y in n){const C=n[y];for(const k in C){const F=C[k];for(const O in F)h(F[O].object),delete F[O];delete C[k]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const k in C){const F=C[k];for(const O in F)h(F[O].object),delete F[O];delete C[k]}delete n[y.id]}function E(y){for(const C in n){const k=n[C];if(k[y.id]===void 0)continue;const F=k[y.id];for(const O in F)h(F[O].object),delete F[O];delete k[y.id]}}function b(){w(),r=!0,o!==s&&(o=s,c(o.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function R0(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let u=0;for(let m=0;m<d;m++)u+=h[m];e.update(u,n,1)}function l(c,h,d,f){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<c.length;m++)r(c[m],h[m],f[m]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_]*f[_];e.update(m,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function C0(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(E){return!(E!==In&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const b=E===No&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==ui&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Xn&&!b)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:A,maxSamples:S}}function P0(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Ei,a=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||o&&!g)o?h(null):c();else{const M=o?0:n,x=M*4;let v=p.clippingState||null;l.value=v,v=h(m,f,x,u);for(let A=0;A!==x;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=u+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,v=u;x!==_;++x,v+=4)r.copy(d[x]).applyMatrix4(M,a),r.normal.toArray(g,v),g[v+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function L0(i){let t=new WeakMap;function e(r,a){return a===Ja?r.mapping=$s:a===Qa&&(r.mapping=qs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ja||a===Qa)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Gf(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Gu extends zu{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Os=4,Nc=[.125,.215,.35,.446,.526,.582],qi=20,fa=new Gu,kc=new Ht;let pa=null,ma=0,ga=0,_a=!1;const Wi=(1+Math.sqrt(5))/2,ws=1/Wi,Oc=[new I(-Wi,ws,0),new I(Wi,ws,0),new I(-ws,0,Wi),new I(ws,0,Wi),new I(0,Wi,-ws),new I(0,Wi,ws),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Rl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=_a,t.scissorTest=!1,ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$s||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:No,format:In,colorSpace:to,depthBuffer:!1},s=Fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D0(o)),this._blurMaterial=I0(o,t,e)}return s}_compileMaterial(t){const e=new J(this._lodPlanes[0],t);this._renderer.compile(e,fa)}_sceneToCubeUV(t,e,n,s){const a=new cn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(kc),h.toneMapping=Li,h.autoClear=!1;const u=new _n({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),m=new J(new Wt,u);let _=!1;const g=t.background;g?g.isColor&&(u.color.copy(g),t.background=null,_=!0):(u.color.copy(kc),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;ir(s,M*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===$s||t.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new J(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;ir(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Oc[(s-o-1)%Oc.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new J(this._lodPlanes[s],c),f=c.uniforms,u=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*u):2*Math.PI/(2*qi-1),_=o/m,g=isFinite(o)?1+Math.floor(h*_):qi;g>qi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qi}`);const p=[];let M=0;for(let E=0;E<qi;++E){const b=E/_,w=Math.exp(-b*b/2);p.push(w),E===0?M+=w:E<g&&(M+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;const v=this._sizeLods[s],A=3*v*(s>x-Os?s-x+Os:0),S=4*(this._cubeSize-v);ir(e,A,S,3*v,2*v),l.setRenderTarget(e),l.render(d,fa)}}function D0(i){const t=[],e=[],n=[];let s=i;const o=i-Os+1+Nc.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-Os?l=Nc[r-i+Os-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,m=6,_=3,g=2,p=1,M=new Float32Array(_*m*u),x=new Float32Array(g*m*u),v=new Float32Array(p*m*u);for(let S=0;S<u;S++){const E=S%3*2/3-1,b=S>2?0:-1,w=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];M.set(w,_*m*S),x.set(f,g*m*S);const y=[S,S,S,S,S,S];v.set(y,p*m*S)}const A=new me;A.setAttribute("position",new ke(M,_)),A.setAttribute("uv",new ke(x,g)),A.setAttribute("faceIndex",new ke(v,p)),t.push(A),s>Os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fc(i,t,e){const n=new ts(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function I0(i,t,e){const n=new Float32Array(qi),s=new I(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function zc(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Bc(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function jl(){return`

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
	`}function U0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ja||l===Qa,h=l===$s||l===qs;if(c||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Rl(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new Rl(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function N0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&yo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function k0(i,t,e,n){const s={},o=new WeakMap;function r(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}f.removeEventListener("dispose",r),delete s[f.id];const u=o.get(f);u&&(t.remove(u),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER);const u=d.morphAttributes;for(const m in u){const _=u[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],i.ARRAY_BUFFER)}}function c(d){const f=[],u=d.index,m=d.attributes.position;let _=0;if(u!==null){const M=u.array;_=u.version;for(let x=0,v=M.length;x<v;x+=3){const A=M[x+0],S=M[x+1],E=M[x+2];f.push(A,S,S,E,E,A)}}else if(m!==void 0){const M=m.array;_=m.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const A=x+0,S=x+1,E=x+2;f.push(A,S,S,E,E,A)}}else return;const g=new(Lu(f)?ku:Nu)(f,1);g.version=_;const p=o.get(d);p&&t.remove(p),o.set(d,g)}function h(d){const f=o.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function O0(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function l(f,u){i.drawElements(n,u,o,f*r),e.update(u,n,1)}function c(f,u,m){m!==0&&(i.drawElementsInstanced(n,u,o,f*r,m),e.update(u,n,m))}function h(f,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,o,f,0,m);let g=0;for(let p=0;p<m;p++)g+=u[p];e.update(g,n,1)}function d(f,u,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/r,u[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,u,0,o,f,0,_,0,m);let p=0;for(let M=0;M<m;M++)p+=u[M]*_[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function F0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function z0(i,t,e){const n=new WeakMap,s=new Le;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let y=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var u=y;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let A=a.attributes.position.count*v,S=1;A>t.maxTextureSize&&(S=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const E=new Float32Array(A*S*4*d),b=new Iu(E,A,S,d);b.type=Xn,b.needsUpdate=!0;const w=v*4;for(let C=0;C<d;C++){const k=p[C],F=M[C],O=x[C],B=A*S*4*C;for(let V=0;V<k.count;V++){const N=V*w;m===!0&&(s.fromBufferAttribute(k,V),E[B+N+0]=s.x,E[B+N+1]=s.y,E[B+N+2]=s.z,E[B+N+3]=0),_===!0&&(s.fromBufferAttribute(F,V),E[B+N+4]=s.x,E[B+N+5]=s.y,E[B+N+6]=s.z,E[B+N+7]=0),g===!0&&(s.fromBufferAttribute(O,V),E[B+N+8]=s.x,E[B+N+9]=s.y,E[B+N+10]=s.z,E[B+N+11]=O.itemSize===4?s.w:1)}}f={count:d,texture:b,size:new ot(A,S)},n.set(a,f),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function B0(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class Vu extends tn{constructor(t,e,n,s,o,r,a,l,c,h=Vs){if(h!==Vs&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vs&&(n=Qi),n===void 0&&h===Zs&&(n=js),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Wu=new tn,Hc=new Vu(1,1),Xu=new Iu,$u=new Af,qu=new Bu,Gc=[],Vc=[],Wc=new Float32Array(16),Xc=new Float32Array(9),$c=new Float32Array(4);function no(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Gc[s];if(o===void 0&&(o=new Float32Array(s),Gc[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vr(i,t){let e=Vc[t];e===void 0&&(e=new Int32Array(t),Vc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function H0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function V0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function W0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function X0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;$c.set(n),i.uniformMatrix2fv(this.addr,!1,$c),Ge(e,n)}}function $0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Xc.set(n),i.uniformMatrix3fv(this.addr,!1,Xc),Ge(e,n)}}function q0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Wc.set(n),i.uniformMatrix4fv(this.addr,!1,Wc),Ge(e,n)}}function Y0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function j0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function J0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function ng(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Hc.compareFunction=Pu,o=Hc):o=Wu,e.setTexture2D(t||o,s)}function ig(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$u,s)}function sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qu,s)}function og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xu,s)}function rg(i){switch(i){case 5126:return H0;case 35664:return G0;case 35665:return V0;case 35666:return W0;case 35674:return X0;case 35675:return $0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return j0;case 35668:case 35672:return Z0;case 35669:case 35673:return K0;case 5125:return J0;case 36294:return Q0;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return og}}function ag(i,t){i.uniform1fv(this.addr,t)}function lg(i,t){const e=no(t,this.size,2);i.uniform2fv(this.addr,e)}function cg(i,t){const e=no(t,this.size,3);i.uniform3fv(this.addr,e)}function hg(i,t){const e=no(t,this.size,4);i.uniform4fv(this.addr,e)}function ug(i,t){const e=no(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dg(i,t){const e=no(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fg(i,t){const e=no(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pg(i,t){i.uniform1iv(this.addr,t)}function mg(i,t){i.uniform2iv(this.addr,t)}function gg(i,t){i.uniform3iv(this.addr,t)}function _g(i,t){i.uniform4iv(this.addr,t)}function vg(i,t){i.uniform1uiv(this.addr,t)}function xg(i,t){i.uniform2uiv(this.addr,t)}function Mg(i,t){i.uniform3uiv(this.addr,t)}function yg(i,t){i.uniform4uiv(this.addr,t)}function bg(i,t,e){const n=this.cache,s=t.length,o=Vr(e,s);He(n,o)||(i.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Wu,o[r])}function wg(i,t,e){const n=this.cache,s=t.length,o=Vr(e,s);He(n,o)||(i.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||$u,o[r])}function Sg(i,t,e){const n=this.cache,s=t.length,o=Vr(e,s);He(n,o)||(i.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||qu,o[r])}function Eg(i,t,e){const n=this.cache,s=t.length,o=Vr(e,s);He(n,o)||(i.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Xu,o[r])}function Tg(i){switch(i){case 5126:return ag;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return dg;case 35676:return fg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return _g;case 5125:return vg;case 36294:return xg;case 36295:return Mg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return Eg}}class Ag{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rg(e.type)}}class Rg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tg(e.type)}}class Cg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const va=/(\w+)(\])?(\[|\.)?/g;function qc(i,t){i.seq.push(t),i.map[t.id]=t}function Pg(i,t,e){const n=i.name,s=n.length;for(va.lastIndex=0;;){const o=va.exec(n),r=va.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){qc(e,c===void 0?new Ag(a,i,t):new Rg(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Cg(a),qc(e,d)),e=d}}}class Dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Pg(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Yc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Lg=37297;let Dg=0;function Ig(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const jc=new ae;function Ug(i){pe._getMatrix(jc,pe.workingColorSpace,i);const t=`mat3( ${jc.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case Hr:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Ig(i.getShaderSource(t),r)}else return s}function Ng(i,t){const e=Ug(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function kg(i,t){let e;switch(t){case zd:e="Linear";break;case Bd:e="Reinhard";break;case Hd:e="Cineon";break;case vu:e="ACESFilmic";break;case Vd:e="AgX";break;case Wd:e="Neutral";break;case Gd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const sr=new I;function Og(){pe.getLuminanceCoefficients(sr);const i=sr.x.toFixed(4),t=sr.y.toFixed(4),e=sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function zg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function bo(i){return i!==""}function Kc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(i){return i.replace(Hg,Vg)}const Gg=new Map;function Vg(i,t){let e=ce[t];if(e===void 0){const n=Gg.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cl(e)}const Wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(i){return i.replace(Wg,Xg)}function Xg(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function th(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function $g(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function qg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $s:case qs:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qs:t="ENVMAP_MODE_REFRACTION";break}return t}function jg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _u:t="ENVMAP_BLENDING_MULTIPLY";break;case Od:t="ENVMAP_BLENDING_MIX";break;case Fd:t="ENVMAP_BLENDING_ADD";break}return t}function Zg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Kg(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=$g(e),c=qg(e),h=Yg(e),d=jg(e),f=Zg(e),u=Fg(e),m=zg(o),_=s.createProgram();let g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(bo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(bo).join(`
`),p.length>0&&(p+=`
`)):(g=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),p=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Li?"#define TONE_MAPPING":"",e.toneMapping!==Li?ce.tonemapping_pars_fragment:"",e.toneMapping!==Li?kg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Ng("linearToOutputTexel",e.outputColorSpace),Og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bo).join(`
`)),r=Cl(r),r=Kc(r,e),r=Jc(r,e),a=Cl(a),a=Kc(a,e),a=Jc(a,e),r=Qc(r),a=Qc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+g+r,v=M+p+a,A=Yc(s,s.VERTEX_SHADER,x),S=Yc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,S),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(C){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(A).trim(),O=s.getShaderInfoLog(S).trim();let B=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,S);else{const N=Zc(s,A,"vertex"),W=Zc(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+N+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||O==="")&&(V=!1);V&&(C.diagnostics={runnable:B,programLog:k,vertexShader:{log:F,prefix:g},fragmentShader:{log:O,prefix:p}})}s.deleteShader(A),s.deleteShader(S),b=new Dr(s,_),w=Bg(s,_)}let b;this.getUniforms=function(){return b===void 0&&E(this),b};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Lg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=S,this}let Jg=0;class Qg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new t_(t),e.set(t,n)),n}}class t_{constructor(t){this.id=Jg++,this.code=t,this.usedTimes=0}}function e_(i,t,e,n,s,o,r){const a=new ql,l=new Qg,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let u=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,y,C,k,F){const O=k.fog,B=F.geometry,V=w.isMeshStandardMaterial?k.environment:null,N=(w.isMeshStandardMaterial?e:t).get(w.envMap||V),W=N&&N.mapping===Br?N.image.height:null,ht=m[w.type];w.precision!==null&&(u=s.getMaxPrecision(w.precision),u!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",u,"instead."));const vt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Mt=vt!==void 0?vt.length:0;let Gt=0;B.morphAttributes.position!==void 0&&(Gt=1),B.morphAttributes.normal!==void 0&&(Gt=2),B.morphAttributes.color!==void 0&&(Gt=3);let Kt,Q,dt,Nt;if(ht){const ge=Gn[ht];Kt=ge.vertexShader,Q=ge.fragmentShader}else Kt=w.vertexShader,Q=w.fragmentShader,l.update(w),dt=l.getVertexShaderID(w),Nt=l.getFragmentShaderID(w);const nt=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),Vt=F.isInstancedMesh===!0,wt=F.isBatchedMesh===!0,te=!!w.map,it=!!w.matcap,ft=!!N,D=!!w.aoMap,xt=!!w.lightMap,ct=!!w.bumpMap,Rt=!!w.normalMap,_t=!!w.displacementMap,Yt=!!w.emissiveMap,It=!!w.metalnessMap,P=!!w.roughnessMap,T=w.anisotropy>0,$=w.clearcoat>0,tt=w.dispersion>0,lt=w.iridescence>0,et=w.sheen>0,Ft=w.transmission>0,yt=T&&!!w.anisotropyMap,Ut=$&&!!w.clearcoatMap,he=$&&!!w.clearcoatNormalMap,ut=$&&!!w.clearcoatRoughnessMap,kt=lt&&!!w.iridescenceMap,mt=lt&&!!w.iridescenceThicknessMap,$t=et&&!!w.sheenColorMap,Ct=et&&!!w.sheenRoughnessMap,ne=!!w.specularMap,Qt=!!w.specularColorMap,ie=!!w.specularIntensityMap,z=Ft&&!!w.transmissionMap,q=Ft&&!!w.thicknessMap,Y=!!w.gradientMap,st=!!w.alphaMap,Tt=w.alphaTest>0,St=!!w.alphaHash,Zt=!!w.extensions;let we=Li;w.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(we=i.toneMapping);const Oe={shaderID:ht,shaderType:w.type,shaderName:w.name,vertexShader:Kt,fragmentShader:Q,defines:w.defines,customVertexShaderID:dt,customFragmentShaderID:Nt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:u,batching:wt,batchingColor:wt&&F._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&F.instanceColor!==null,instancingMorph:Vt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:to,alphaToCoverage:!!w.alphaToCoverage,map:te,matcap:it,envMap:ft,envMapMode:ft&&N.mapping,envMapCubeUVHeight:W,aoMap:D,lightMap:xt,bumpMap:ct,normalMap:Rt,displacementMap:f&&_t,emissiveMap:Yt,normalMapObjectSpace:Rt&&w.normalMapType===Yd,normalMapTangentSpace:Rt&&w.normalMapType===Cu,metalnessMap:It,roughnessMap:P,anisotropy:T,anisotropyMap:yt,clearcoat:$,clearcoatMap:Ut,clearcoatNormalMap:he,clearcoatRoughnessMap:ut,dispersion:tt,iridescence:lt,iridescenceMap:kt,iridescenceThicknessMap:mt,sheen:et,sheenColorMap:$t,sheenRoughnessMap:Ct,specularMap:ne,specularColorMap:Qt,specularIntensityMap:ie,transmission:Ft,transmissionMap:z,thicknessMap:q,gradientMap:Y,opaque:w.transparent===!1&&w.blending===Gs&&w.alphaToCoverage===!1,alphaMap:st,alphaTest:Tt,alphaHash:St,combine:w.combine,mapUv:te&&_(w.map.channel),aoMapUv:D&&_(w.aoMap.channel),lightMapUv:xt&&_(w.lightMap.channel),bumpMapUv:ct&&_(w.bumpMap.channel),normalMapUv:Rt&&_(w.normalMap.channel),displacementMapUv:_t&&_(w.displacementMap.channel),emissiveMapUv:Yt&&_(w.emissiveMap.channel),metalnessMapUv:It&&_(w.metalnessMap.channel),roughnessMapUv:P&&_(w.roughnessMap.channel),anisotropyMapUv:yt&&_(w.anisotropyMap.channel),clearcoatMapUv:Ut&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(w.sheenRoughnessMap.channel),specularMapUv:ne&&_(w.specularMap.channel),specularColorMapUv:Qt&&_(w.specularColorMap.channel),specularIntensityMapUv:ie&&_(w.specularIntensityMap.channel),transmissionMapUv:z&&_(w.transmissionMap.channel),thicknessMapUv:q&&_(w.thicknessMap.channel),alphaMapUv:st&&_(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Rt||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(te||st),fog:!!O,useFog:w.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Dt,skinning:F.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Gt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:te&&w.map.isVideoTexture===!0&&pe.getTransfer(w.map.colorSpace)===ye,decodeVideoTextureEmissive:Yt&&w.emissiveMap.isVideoTexture===!0&&pe.getTransfer(w.emissiveMap.colorSpace)===ye,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ae,flipSided:w.side===rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Zt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&w.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)y.push(C),y.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(M(y,w),x(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function M(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function x(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const y=m[w.type];let C;if(y){const k=Gn[y];C=Fu.clone(k.uniforms)}else C=w.uniforms;return C}function A(w,y){let C;for(let k=0,F=h.length;k<F;k++){const O=h[k];if(O.cacheKey===y){C=O,++C.usedTimes;break}}return C===void 0&&(C=new Kg(i,y,w,o),h.push(C)),C}function S(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function E(w){l.remove(w)}function b(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:b}}function n_(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function i_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function eh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(d,f,u,m,_,g){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:m,renderOrder:d.renderOrder,z:_,group:g},i[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=_,p.group=g),t++,p}function a(d,f,u,m,_,g){const p=r(d,f,u,m,_,g);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):e.push(p)}function l(d,f,u,m,_,g){const p=r(d,f,u,m,_,g);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,f){e.length>1&&e.sort(d||i_),n.length>1&&n.sort(f||eh),s.length>1&&s.sort(f||eh)}function h(){for(let d=t,f=i.length;d<f;d++){const u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function s_(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new nh,i.set(n,[r])):s>=o.length?(r=new nh,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function o_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ht};break;case"SpotLight":e={position:new I,direction:new I,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function r_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let a_=0;function l_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function c_(i){const t=new o_,e=r_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,o=new de,r=new de;function a(c){let h=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let u=0,m=0,_=0,g=0,p=0,M=0,x=0,v=0,A=0,S=0,E=0;c.sort(l_);for(let w=0,y=c.length;w<y;w++){const C=c[w],k=C.color,F=C.intensity,O=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=k.r*F,d+=k.g*F,f+=k.b*F;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],F);E++}else if(C.isDirectionalLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const N=C.shadow,W=e.get(C);W.shadowIntensity=N.intensity,W.shadowBias=N.bias,W.shadowNormalBias=N.normalBias,W.shadowRadius=N.radius,W.shadowMapSize=N.mapSize,n.directionalShadow[u]=W,n.directionalShadowMap[u]=B,n.directionalShadowMatrix[u]=C.shadow.matrix,M++}n.directional[u]=V,u++}else if(C.isSpotLight){const V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(k).multiplyScalar(F),V.distance=O,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[_]=V;const N=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,N.updateMatrices(C),C.castShadow&&S++),n.spotLightMatrix[_]=N.matrix,C.castShadow){const W=e.get(C);W.shadowIntensity=N.intensity,W.shadowBias=N.bias,W.shadowNormalBias=N.normalBias,W.shadowRadius=N.radius,W.shadowMapSize=N.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=B,v++}_++}else if(C.isRectAreaLight){const V=t.get(C);V.color.copy(k).multiplyScalar(F),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=V,g++}else if(C.isPointLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const N=C.shadow,W=e.get(C);W.shadowIntensity=N.intensity,W.shadowBias=N.bias,W.shadowNormalBias=N.normalBias,W.shadowRadius=N.radius,W.shadowMapSize=N.mapSize,W.shadowCameraNear=N.camera.near,W.shadowCameraFar=N.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=C.shadow.matrix,x++}n.point[m]=V,m++}else if(C.isHemisphereLight){const V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(F),V.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const b=n.hash;(b.directionalLength!==u||b.pointLength!==m||b.spotLength!==_||b.rectAreaLength!==g||b.hemiLength!==p||b.numDirectionalShadows!==M||b.numPointShadows!==x||b.numSpotShadows!==v||b.numSpotMaps!==A||b.numLightProbes!==E)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+A-S,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,b.directionalLength=u,b.pointLength=m,b.spotLength=_,b.rectAreaLength=g,b.hemiLength=p,b.numDirectionalShadows=M,b.numPointShadows=x,b.numSpotShadows=v,b.numSpotMaps=A,b.numLightProbes=E,n.version=a_++)}function l(c,h){let d=0,f=0,u=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(x.isSpotLight){const v=n.spot[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(x.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),r.identity(),o.copy(x.matrixWorld),o.premultiply(g),r.extractRotation(o),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),m++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function ih(i){const t=new c_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function h_(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new ih(i),t.set(s,[a])):o>=r.length?(a=new ih(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class u_ extends ss{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class d_ extends ss{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
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
}`;function m_(i,t,e){let n=new Yl;const s=new ot,o=new ot,r=new Le,a=new u_({depthPacking:qd}),l=new d_,c={},h=e.maxTextureSize,d={[Di]:rn,[rn]:Di,[Ae]:Ae},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:f_,fragmentShader:p_}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const m=new me;m.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new J(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let p=this.type;this.render=function(S,E,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Pi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=p!==oi&&this.type===oi,O=p===oi&&this.type!==oi;for(let B=0,V=S.length;B<V;B++){const N=S[B],W=N.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ht=W.getFrameExtents();if(s.multiply(ht),o.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/ht.x),s.x=o.x*ht.x,W.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/ht.y),s.y=o.y*ht.y,W.mapSize.y=o.y)),W.map===null||F===!0||O===!0){const Mt=this.type!==oi?{minFilter:gn,magFilter:gn}:{};W.map!==null&&W.map.dispose(),W.map=new ts(s.x,s.y,Mt),W.map.texture.name=N.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const vt=W.getViewportCount();for(let Mt=0;Mt<vt;Mt++){const Gt=W.getViewport(Mt);r.set(o.x*Gt.x,o.y*Gt.y,o.x*Gt.z,o.y*Gt.w),k.viewport(r),W.updateMatrices(N,Mt),n=W.getFrustum(),v(E,b,W.camera,N,this.type)}W.isPointLightShadow!==!0&&this.type===oi&&M(W,b),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,y,C)};function M(S,E){const b=t.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,u.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ts(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,b,f,_,null),u.uniforms.shadow_pass.value=S.mapPass.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,b,u,_,null)}function x(S,E,b,w){let y=null;const C=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)y=C;else if(y=b.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const k=y.uuid,F=E.uuid;let O=c[k];O===void 0&&(O={},c[k]=O);let B=O[F];B===void 0&&(B=y.clone(),O[F]=B,E.addEventListener("dispose",A)),y=B}if(y.visible=E.visible,y.wireframe=E.wireframe,w===oi?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:d[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=i.properties.get(y);k.light=b}return y}function v(S,E,b,w,y){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===oi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const F=t.update(S),O=S.material;if(Array.isArray(O)){const B=F.groups;for(let V=0,N=B.length;V<N;V++){const W=B[V],ht=O[W.materialIndex];if(ht&&ht.visible){const vt=x(S,ht,w,y);S.onBeforeShadow(i,S,E,b,F,vt,W),i.renderBufferDirect(b,null,F,vt,S,W),S.onAfterShadow(i,S,E,b,F,vt,W)}}}else if(O.visible){const B=x(S,O,w,y);S.onBeforeShadow(i,S,E,b,F,B,null),i.renderBufferDirect(b,null,F,B,S,null),S.onAfterShadow(i,S,E,b,F,B,null)}}const k=S.children;for(let F=0,O=k.length;F<O;F++)v(k[F],E,b,w,y)}function A(S){S.target.removeEventListener("dispose",A);for(const b in c){const w=c[b],y=S.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const g_={[Xa]:$a,[qa]:Za,[Ya]:Ka,[Xs]:ja,[$a]:Xa,[Za]:qa,[Ka]:Ya,[ja]:Xs};function __(i,t){function e(){let z=!1;const q=new Le;let Y=null;const st=new Le(0,0,0,0);return{setMask:function(Tt){Y!==Tt&&!z&&(i.colorMask(Tt,Tt,Tt,Tt),Y=Tt)},setLocked:function(Tt){z=Tt},setClear:function(Tt,St,Zt,we,Oe){Oe===!0&&(Tt*=we,St*=we,Zt*=we),q.set(Tt,St,Zt,we),st.equals(q)===!1&&(i.clearColor(Tt,St,Zt,we),st.copy(q))},reset:function(){z=!1,Y=null,st.set(-1,0,0,0)}}}function n(){let z=!1,q=!1,Y=null,st=null,Tt=null;return{setReversed:function(St){if(q!==St){const Zt=t.get("EXT_clip_control");q?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const we=Tt;Tt=null,this.setClear(we)}q=St},getReversed:function(){return q},setTest:function(St){St?nt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(St){Y!==St&&!z&&(i.depthMask(St),Y=St)},setFunc:function(St){if(q&&(St=g_[St]),st!==St){switch(St){case Xa:i.depthFunc(i.NEVER);break;case $a:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=St}},setLocked:function(St){z=St},setClear:function(St){Tt!==St&&(q&&(St=1-St),i.clearDepth(St),Tt=St)},reset:function(){z=!1,Y=null,st=null,Tt=null,q=!1}}}function s(){let z=!1,q=null,Y=null,st=null,Tt=null,St=null,Zt=null,we=null,Oe=null;return{setTest:function(ge){z||(ge?nt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(ge){q!==ge&&!z&&(i.stencilMask(ge),q=ge)},setFunc:function(ge,je,Ve){(Y!==ge||st!==je||Tt!==Ve)&&(i.stencilFunc(ge,je,Ve),Y=ge,st=je,Tt=Ve)},setOp:function(ge,je,Ve){(St!==ge||Zt!==je||we!==Ve)&&(i.stencilOp(ge,je,Ve),St=ge,Zt=je,we=Ve)},setLocked:function(ge){z=ge},setClear:function(ge){Oe!==ge&&(i.clearStencil(ge),Oe=ge)},reset:function(){z=!1,q=null,Y=null,st=null,Tt=null,St=null,Zt=null,we=null,Oe=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,u=[],m=null,_=!1,g=null,p=null,M=null,x=null,v=null,A=null,S=null,E=new Ht(0,0,0),b=0,w=!1,y=null,C=null,k=null,F=null,O=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,N=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=N>=1):W.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=N>=2);let ht=null,vt={};const Mt=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),Kt=new Le().fromArray(Mt),Q=new Le().fromArray(Gt);function dt(z,q,Y,st){const Tt=new Uint8Array(4),St=i.createTexture();i.bindTexture(z,St),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<Y;Zt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(q,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(q+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return St}const Nt={};Nt[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),Nt[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Nt[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),r.setFunc(Xs),ct(!1),Rt(cc),nt(i.CULL_FACE),D(Pi);function nt(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Dt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Vt(z,q){return d[z]!==q?(i.bindFramebuffer(z,q),d[z]=q,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=q),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=q),!0):!1}function wt(z,q){let Y=u,st=!1;if(z){Y=f.get(q),Y===void 0&&(Y=[],f.set(q,Y));const Tt=z.textures;if(Y.length!==Tt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Zt=Tt.length;St<Zt;St++)Y[St]=i.COLOR_ATTACHMENT0+St;Y.length=Tt.length,st=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,st=!0);st&&i.drawBuffers(Y)}function te(z){return m!==z?(i.useProgram(z),m=z,!0):!1}const it={[$i]:i.FUNC_ADD,[Md]:i.FUNC_SUBTRACT,[yd]:i.FUNC_REVERSE_SUBTRACT};it[bd]=i.MIN,it[wd]=i.MAX;const ft={[Sd]:i.ZERO,[Ed]:i.ONE,[Td]:i.SRC_COLOR,[Va]:i.SRC_ALPHA,[Dd]:i.SRC_ALPHA_SATURATE,[Pd]:i.DST_COLOR,[Rd]:i.DST_ALPHA,[Ad]:i.ONE_MINUS_SRC_COLOR,[Wa]:i.ONE_MINUS_SRC_ALPHA,[Ld]:i.ONE_MINUS_DST_COLOR,[Cd]:i.ONE_MINUS_DST_ALPHA,[Id]:i.CONSTANT_COLOR,[Ud]:i.ONE_MINUS_CONSTANT_COLOR,[Nd]:i.CONSTANT_ALPHA,[kd]:i.ONE_MINUS_CONSTANT_ALPHA};function D(z,q,Y,st,Tt,St,Zt,we,Oe,ge){if(z===Pi){_===!0&&(Dt(i.BLEND),_=!1);return}if(_===!1&&(nt(i.BLEND),_=!0),z!==xd){if(z!==g||ge!==w){if((p!==$i||v!==$i)&&(i.blendEquation(i.FUNC_ADD),p=$i,v=$i),ge)switch(z){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ga:i.blendFunc(i.ONE,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ga:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,x=null,A=null,S=null,E.set(0,0,0),b=0,g=z,w=ge}return}Tt=Tt||q,St=St||Y,Zt=Zt||st,(q!==p||Tt!==v)&&(i.blendEquationSeparate(it[q],it[Tt]),p=q,v=Tt),(Y!==M||st!==x||St!==A||Zt!==S)&&(i.blendFuncSeparate(ft[Y],ft[st],ft[St],ft[Zt]),M=Y,x=st,A=St,S=Zt),(we.equals(E)===!1||Oe!==b)&&(i.blendColor(we.r,we.g,we.b,Oe),E.copy(we),b=Oe),g=z,w=!1}function xt(z,q){z.side===Ae?Dt(i.CULL_FACE):nt(i.CULL_FACE);let Y=z.side===rn;q&&(Y=!Y),ct(Y),z.blending===Gs&&z.transparent===!1?D(Pi):D(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),o.setMask(z.colorWrite);const st=z.stencilWrite;a.setTest(st),st&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Yt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(z){y!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),y=z)}function Rt(z){z!==_d?(nt(i.CULL_FACE),z!==C&&(z===cc?i.cullFace(i.BACK):z===vd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),C=z}function _t(z){z!==k&&(V&&i.lineWidth(z),k=z)}function Yt(z,q,Y){z?(nt(i.POLYGON_OFFSET_FILL),(F!==q||O!==Y)&&(i.polygonOffset(q,Y),F=q,O=Y)):Dt(i.POLYGON_OFFSET_FILL)}function It(z){z?nt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function P(z){z===void 0&&(z=i.TEXTURE0+B-1),ht!==z&&(i.activeTexture(z),ht=z)}function T(z,q,Y){Y===void 0&&(ht===null?Y=i.TEXTURE0+B-1:Y=ht);let st=vt[Y];st===void 0&&(st={type:void 0,texture:void 0},vt[Y]=st),(st.type!==z||st.texture!==q)&&(ht!==Y&&(i.activeTexture(Y),ht=Y),i.bindTexture(z,q||Nt[z]),st.type=z,st.texture=q)}function $(){const z=vt[ht];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function kt(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $t(z){Kt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Kt.copy(z))}function Ct(z){Q.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Q.copy(z))}function ne(z,q){let Y=c.get(q);Y===void 0&&(Y=new WeakMap,c.set(q,Y));let st=Y.get(z);st===void 0&&(st=i.getUniformBlockIndex(q,z.name),Y.set(z,st))}function Qt(z,q){const st=c.get(q).get(z);l.get(q)!==st&&(i.uniformBlockBinding(q,st,z.__bindingPointIndex),l.set(q,st))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,vt={},d={},f=new WeakMap,u=[],m=null,_=!1,g=null,p=null,M=null,x=null,v=null,A=null,S=null,E=new Ht(0,0,0),b=0,w=!1,y=null,C=null,k=null,F=null,O=null,Kt.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:nt,disable:Dt,bindFramebuffer:Vt,drawBuffers:wt,useProgram:te,setBlending:D,setMaterial:xt,setFlipSided:ct,setCullFace:Rt,setLineWidth:_t,setPolygonOffset:Yt,setScissorTest:It,activeTexture:P,bindTexture:T,unbindTexture:$,compressedTexImage2D:tt,compressedTexImage3D:lt,texImage2D:kt,texImage3D:mt,updateUBOMapping:ne,uniformBlockBinding:Qt,texStorage2D:he,texStorage3D:ut,texSubImage2D:et,texSubImage3D:Ft,compressedTexSubImage2D:yt,compressedTexSubImage3D:Ut,scissor:$t,viewport:Ct,reset:ie}}function sh(i,t,e,n){const s=v_(n);switch(e){case wu:return i*t;case Eu:return i*t;case Tu:return i*t*2;case Gl:return i*t/s.components*s.byteLength;case Vl:return i*t/s.components*s.byteLength;case Au:return i*t*2/s.components*s.byteLength;case Wl:return i*t*2/s.components*s.byteLength;case Su:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case Xl:return i*t*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:case sl:return Math.max(i,16)*Math.max(t,8)/4;case el:case il:return Math.max(i,8)*Math.max(t,8)/2;case ol:case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case hl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case pl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ml:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case vl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Lr:case bl:case wl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ru:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case El:case Tl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function v_(i){switch(i){case ui:case Mu:return{byteLength:1,components:1};case Ro:case yu:case No:return{byteLength:2,components:1};case Bl:case Hl:return{byteLength:2,components:4};case Qi:case zl:case Xn:return{byteLength:4,components:1};case bu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function x_(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap;let d;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,T){return u?new OffscreenCanvas(P,T):Nr("canvas")}function _(P,T,$){let tt=1;const lt=It(P);if((lt.width>$||lt.height>$)&&(tt=$/Math.max(lt.width,lt.height)),tt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const et=Math.floor(tt*lt.width),Ft=Math.floor(tt*lt.height);d===void 0&&(d=m(et,Ft));const yt=T?m(et,Ft):d;return yt.width=et,yt.height=Ft,yt.getContext("2d").drawImage(P,0,0,et,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+et+"x"+Ft+")."),yt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,T,$,tt,lt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let et=T;if(T===i.RED&&($===i.FLOAT&&(et=i.R32F),$===i.HALF_FLOAT&&(et=i.R16F),$===i.UNSIGNED_BYTE&&(et=i.R8)),T===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(et=i.R8UI),$===i.UNSIGNED_SHORT&&(et=i.R16UI),$===i.UNSIGNED_INT&&(et=i.R32UI),$===i.BYTE&&(et=i.R8I),$===i.SHORT&&(et=i.R16I),$===i.INT&&(et=i.R32I)),T===i.RG&&($===i.FLOAT&&(et=i.RG32F),$===i.HALF_FLOAT&&(et=i.RG16F),$===i.UNSIGNED_BYTE&&(et=i.RG8)),T===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(et=i.RG8UI),$===i.UNSIGNED_SHORT&&(et=i.RG16UI),$===i.UNSIGNED_INT&&(et=i.RG32UI),$===i.BYTE&&(et=i.RG8I),$===i.SHORT&&(et=i.RG16I),$===i.INT&&(et=i.RG32I)),T===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(et=i.RGB8UI),$===i.UNSIGNED_SHORT&&(et=i.RGB16UI),$===i.UNSIGNED_INT&&(et=i.RGB32UI),$===i.BYTE&&(et=i.RGB8I),$===i.SHORT&&(et=i.RGB16I),$===i.INT&&(et=i.RGB32I)),T===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),$===i.UNSIGNED_INT&&(et=i.RGBA32UI),$===i.BYTE&&(et=i.RGBA8I),$===i.SHORT&&(et=i.RGBA16I),$===i.INT&&(et=i.RGBA32I)),T===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),T===i.RGBA){const Ft=lt?Hr:pe.getTransfer(tt);$===i.FLOAT&&(et=i.RGBA32F),$===i.HALF_FLOAT&&(et=i.RGBA16F),$===i.UNSIGNED_BYTE&&(et=Ft===ye?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(P,T){let $;return P?T===null||T===Qi||T===js?$=i.DEPTH24_STENCIL8:T===Xn?$=i.DEPTH32F_STENCIL8:T===Ro&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qi||T===js?$=i.DEPTH_COMPONENT24:T===Xn?$=i.DEPTH_COMPONENT32F:T===Ro&&($=i.DEPTH_COMPONENT16),$}function A(P,T){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==gn&&P.minFilter!==Wn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function S(P){const T=P.target;T.removeEventListener("dispose",S),b(T),T.isVideoTexture&&h.delete(T)}function E(P){const T=P.target;T.removeEventListener("dispose",E),y(T)}function b(P){const T=n.get(P);if(T.__webglInit===void 0)return;const $=P.source,tt=f.get($);if(tt){const lt=tt[T.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&w(P),Object.keys(tt).length===0&&f.delete($)}n.remove(P)}function w(P){const T=n.get(P);i.deleteTexture(T.__webglTexture);const $=P.source,tt=f.get($);delete tt[T.__cacheKey],r.memory.textures--}function y(P){const T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(T.__webglFramebuffer[tt]))for(let lt=0;lt<T.__webglFramebuffer[tt].length;lt++)i.deleteFramebuffer(T.__webglFramebuffer[tt][lt]);else i.deleteFramebuffer(T.__webglFramebuffer[tt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[tt])}else{if(Array.isArray(T.__webglFramebuffer))for(let tt=0;tt<T.__webglFramebuffer.length;tt++)i.deleteFramebuffer(T.__webglFramebuffer[tt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let tt=0;tt<T.__webglColorRenderbuffer.length;tt++)T.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[tt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=P.textures;for(let tt=0,lt=$.length;tt<lt;tt++){const et=n.get($[tt]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),r.memory.textures--),n.remove($[tt])}n.remove(P)}let C=0;function k(){C=0}function F(){const P=C;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function O(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function B(P,T){const $=n.get(P);if(P.isVideoTexture&&_t(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q($,P,T);return}}e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+T)}function V(P,T){const $=n.get(P);if(P.version>0&&$.__version!==P.version){Q($,P,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+T)}function N(P,T){const $=n.get(P);if(P.version>0&&$.__version!==P.version){Q($,P,T);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+T)}function W(P,T){const $=n.get(P);if(P.version>0&&$.__version!==P.version){dt($,P,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+T)}const ht={[Ys]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[tl]:i.MIRRORED_REPEAT},vt={[gn]:i.NEAREST,[Xd]:i.NEAREST_MIPMAP_NEAREST,[Fo]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},Mt={[jd]:i.NEVER,[ef]:i.ALWAYS,[Zd]:i.LESS,[Pu]:i.LEQUAL,[Kd]:i.EQUAL,[tf]:i.GEQUAL,[Jd]:i.GREATER,[Qd]:i.NOTEQUAL};function Gt(P,T){if(T.type===Xn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Wn||T.magFilter===$r||T.magFilter===Fo||T.magFilter===ji||T.minFilter===Wn||T.minFilter===$r||T.minFilter===Fo||T.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ht[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ht[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ht[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,vt[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,vt[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Mt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===gn||T.minFilter!==Fo&&T.minFilter!==ji||T.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Kt(P,T){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",S));const tt=T.source;let lt=f.get(tt);lt===void 0&&(lt={},f.set(tt,lt));const et=O(T);if(et!==P.__cacheKey){lt[et]===void 0&&(lt[et]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,$=!0),lt[et].usedTimes++;const Ft=lt[P.__cacheKey];Ft!==void 0&&(lt[P.__cacheKey].usedTimes--,Ft.usedTimes===0&&w(T)),P.__cacheKey=et,P.__webglTexture=lt[et].texture}return $}function Q(P,T,$){let tt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(tt=i.TEXTURE_3D);const lt=Kt(P,T),et=T.source;e.bindTexture(tt,P.__webglTexture,i.TEXTURE0+$);const Ft=n.get(et);if(et.version!==Ft.__version||lt===!0){e.activeTexture(i.TEXTURE0+$);const yt=pe.getPrimaries(pe.workingColorSpace),Ut=T.colorSpace===Ti?null:pe.getPrimaries(T.colorSpace),he=T.colorSpace===Ti||yt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ut=_(T.image,!1,s.maxTextureSize);ut=Yt(T,ut);const kt=o.convert(T.format,T.colorSpace),mt=o.convert(T.type);let $t=x(T.internalFormat,kt,mt,T.colorSpace,T.isVideoTexture);Gt(tt,T);let Ct;const ne=T.mipmaps,Qt=T.isVideoTexture!==!0,ie=Ft.__version===void 0||lt===!0,z=et.dataReady,q=A(T,ut);if(T.isDepthTexture)$t=v(T.format===Zs,T.type),ie&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,$t,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,$t,ut.width,ut.height,0,kt,mt,null));else if(T.isDataTexture)if(ne.length>0){Qt&&ie&&e.texStorage2D(i.TEXTURE_2D,q,$t,ne[0].width,ne[0].height);for(let Y=0,st=ne.length;Y<st;Y++)Ct=ne[Y],Qt?z&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ct.width,Ct.height,kt,mt,Ct.data):e.texImage2D(i.TEXTURE_2D,Y,$t,Ct.width,Ct.height,0,kt,mt,Ct.data);T.generateMipmaps=!1}else Qt?(ie&&e.texStorage2D(i.TEXTURE_2D,q,$t,ut.width,ut.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,kt,mt,ut.data)):e.texImage2D(i.TEXTURE_2D,0,$t,ut.width,ut.height,0,kt,mt,ut.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Qt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,q,$t,ne[0].width,ne[0].height,ut.depth);for(let Y=0,st=ne.length;Y<st;Y++)if(Ct=ne[Y],T.format!==In)if(kt!==null)if(Qt){if(z)if(T.layerUpdates.size>0){const Tt=sh(Ct.width,Ct.height,T.format,T.type);for(const St of T.layerUpdates){const Zt=Ct.data.subarray(St*Tt/Ct.data.BYTES_PER_ELEMENT,(St+1)*Tt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,St,Ct.width,Ct.height,1,kt,Zt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Ct.width,Ct.height,ut.depth,kt,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,$t,Ct.width,Ct.height,ut.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Ct.width,Ct.height,ut.depth,kt,mt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,$t,Ct.width,Ct.height,ut.depth,0,kt,mt,Ct.data)}else{Qt&&ie&&e.texStorage2D(i.TEXTURE_2D,q,$t,ne[0].width,ne[0].height);for(let Y=0,st=ne.length;Y<st;Y++)Ct=ne[Y],T.format!==In?kt!==null?Qt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Ct.width,Ct.height,kt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,$t,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?z&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ct.width,Ct.height,kt,mt,Ct.data):e.texImage2D(i.TEXTURE_2D,Y,$t,Ct.width,Ct.height,0,kt,mt,Ct.data)}else if(T.isDataArrayTexture)if(Qt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,q,$t,ut.width,ut.height,ut.depth),z)if(T.layerUpdates.size>0){const Y=sh(ut.width,ut.height,T.format,T.type);for(const st of T.layerUpdates){const Tt=ut.data.subarray(st*Y/ut.data.BYTES_PER_ELEMENT,(st+1)*Y/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ut.width,ut.height,1,kt,mt,Tt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,kt,mt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,ut.width,ut.height,ut.depth,0,kt,mt,ut.data);else if(T.isData3DTexture)Qt?(ie&&e.texStorage3D(i.TEXTURE_3D,q,$t,ut.width,ut.height,ut.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,kt,mt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,$t,ut.width,ut.height,ut.depth,0,kt,mt,ut.data);else if(T.isFramebufferTexture){if(ie)if(Qt)e.texStorage2D(i.TEXTURE_2D,q,$t,ut.width,ut.height);else{let Y=ut.width,st=ut.height;for(let Tt=0;Tt<q;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,$t,Y,st,0,kt,mt,null),Y>>=1,st>>=1}}else if(ne.length>0){if(Qt&&ie){const Y=It(ne[0]);e.texStorage2D(i.TEXTURE_2D,q,$t,Y.width,Y.height)}for(let Y=0,st=ne.length;Y<st;Y++)Ct=ne[Y],Qt?z&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,kt,mt,Ct):e.texImage2D(i.TEXTURE_2D,Y,$t,kt,mt,Ct);T.generateMipmaps=!1}else if(Qt){if(ie){const Y=It(ut);e.texStorage2D(i.TEXTURE_2D,q,$t,Y.width,Y.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,mt,ut)}else e.texImage2D(i.TEXTURE_2D,0,$t,kt,mt,ut);g(T)&&p(tt),Ft.__version=et.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function dt(P,T,$){if(T.image.length!==6)return;const tt=Kt(P,T),lt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+$);const et=n.get(lt);if(lt.version!==et.__version||tt===!0){e.activeTexture(i.TEXTURE0+$);const Ft=pe.getPrimaries(pe.workingColorSpace),yt=T.colorSpace===Ti?null:pe.getPrimaries(T.colorSpace),Ut=T.colorSpace===Ti||Ft===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const he=T.isCompressedTexture||T.image[0].isCompressedTexture,ut=T.image[0]&&T.image[0].isDataTexture,kt=[];for(let st=0;st<6;st++)!he&&!ut?kt[st]=_(T.image[st],!0,s.maxCubemapSize):kt[st]=ut?T.image[st].image:T.image[st],kt[st]=Yt(T,kt[st]);const mt=kt[0],$t=o.convert(T.format,T.colorSpace),Ct=o.convert(T.type),ne=x(T.internalFormat,$t,Ct,T.colorSpace),Qt=T.isVideoTexture!==!0,ie=et.__version===void 0||tt===!0,z=lt.dataReady;let q=A(T,mt);Gt(i.TEXTURE_CUBE_MAP,T);let Y;if(he){Qt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,q,ne,mt.width,mt.height);for(let st=0;st<6;st++){Y=kt[st].mipmaps;for(let Tt=0;Tt<Y.length;Tt++){const St=Y[Tt];T.format!==In?$t!==null?Qt?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt,0,0,St.width,St.height,$t,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt,ne,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt,0,0,St.width,St.height,$t,Ct,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt,ne,St.width,St.height,0,$t,Ct,St.data)}}}else{if(Y=T.mipmaps,Qt&&ie){Y.length>0&&q++;const st=It(kt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,q,ne,st.width,st.height)}for(let st=0;st<6;st++)if(ut){Qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,kt[st].width,kt[st].height,$t,Ct,kt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ne,kt[st].width,kt[st].height,0,$t,Ct,kt[st].data);for(let Tt=0;Tt<Y.length;Tt++){const Zt=Y[Tt].image[st].image;Qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt+1,0,0,Zt.width,Zt.height,$t,Ct,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt+1,ne,Zt.width,Zt.height,0,$t,Ct,Zt.data)}}else{Qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,$t,Ct,kt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ne,$t,Ct,kt[st]);for(let Tt=0;Tt<Y.length;Tt++){const St=Y[Tt];Qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt+1,0,0,$t,Ct,St.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt+1,ne,$t,Ct,St.image[st])}}}g(T)&&p(i.TEXTURE_CUBE_MAP),et.__version=lt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Nt(P,T,$,tt,lt,et){const Ft=o.convert($.format,$.colorSpace),yt=o.convert($.type),Ut=x($.internalFormat,Ft,yt,$.colorSpace),he=n.get(T),ut=n.get($);if(ut.__renderTarget=T,!he.__hasExternalTextures){const kt=Math.max(1,T.width>>et),mt=Math.max(1,T.height>>et);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,et,Ut,kt,mt,T.depth,0,Ft,yt,null):e.texImage2D(lt,et,Ut,kt,mt,0,Ft,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Rt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,lt,ut.__webglTexture,0,ct(T)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,lt,ut.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(P,T,$){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){const tt=T.depthTexture,lt=tt&&tt.isDepthTexture?tt.type:null,et=v(T.stencilBuffer,lt),Ft=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=ct(T);Rt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,et,T.width,T.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,et,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,et,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,P)}else{const tt=T.textures;for(let lt=0;lt<tt.length;lt++){const et=tt[lt],Ft=o.convert(et.format,et.colorSpace),yt=o.convert(et.type),Ut=x(et.internalFormat,Ft,yt,et.colorSpace),he=ct(T);$&&Rt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,Ut,T.width,T.height):Rt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,Ut,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(T.depthTexture);tt.__renderTarget=T,(!tt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),B(T.depthTexture,0);const lt=tt.__webglTexture,et=ct(T);if(T.depthTexture.format===Vs)Rt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(T.depthTexture.format===Zs)Rt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function Vt(P){const T=n.get(P),$=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const tt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),tt){const lt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,tt.removeEventListener("dispose",lt)};tt.addEventListener("dispose",lt),T.__depthDisposeCallback=lt}T.__boundDepthTexture=tt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Dt(T.__webglFramebuffer,P)}else if($){T.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[tt]),T.__webglDepthbuffer[tt]===void 0)T.__webglDepthbuffer[tt]=i.createRenderbuffer(),nt(T.__webglDepthbuffer[tt],P,!1);else{const lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=T.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),nt(T.__webglDepthbuffer,P,!1);else{const tt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(P,T,$){const tt=n.get(P);T!==void 0&&Nt(tt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Vt(P)}function te(P){const T=P.texture,$=n.get(P),tt=n.get(T);P.addEventListener("dispose",E);const lt=P.textures,et=P.isWebGLCubeRenderTarget===!0,Ft=lt.length>1;if(Ft||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=T.version,r.memory.textures++),et){$.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[yt]=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)$.__webglFramebuffer[yt][Ut]=i.createFramebuffer()}else $.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let yt=0;yt<T.mipmaps.length;yt++)$.__webglFramebuffer[yt]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let yt=0,Ut=lt.length;yt<Ut;yt++){const he=n.get(lt[yt]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),r.memory.textures++)}if(P.samples>0&&Rt(P)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let yt=0;yt<lt.length;yt++){const Ut=lt[yt];$.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[yt]);const he=o.convert(Ut.format,Ut.colorSpace),ut=o.convert(Ut.type),kt=x(Ut.internalFormat,he,ut,Ut.colorSpace,P.isXRRenderTarget===!0),mt=ct(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,kt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,$.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),nt($.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,T);for(let yt=0;yt<6;yt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ut=0;Ut<T.mipmaps.length;Ut++)Nt($.__webglFramebuffer[yt][Ut],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut);else Nt($.__webglFramebuffer[yt],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);g(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let yt=0,Ut=lt.length;yt<Ut;yt++){const he=lt[yt],ut=n.get(he);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),Gt(i.TEXTURE_2D,he),Nt($.__webglFramebuffer,P,he,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),g(he)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(yt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,tt.__webglTexture),Gt(yt,T),T.mipmaps&&T.mipmaps.length>0)for(let Ut=0;Ut<T.mipmaps.length;Ut++)Nt($.__webglFramebuffer[Ut],P,T,i.COLOR_ATTACHMENT0,yt,Ut);else Nt($.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,yt,0);g(T)&&p(yt),e.unbindTexture()}P.depthBuffer&&Vt(P)}function it(P){const T=P.textures;for(let $=0,tt=T.length;$<tt;$++){const lt=T[$];if(g(lt)){const et=M(P),Ft=n.get(lt).__webglTexture;e.bindTexture(et,Ft),p(et),e.unbindTexture()}}}const ft=[],D=[];function xt(P){if(P.samples>0){if(Rt(P)===!1){const T=P.textures,$=P.width,tt=P.height;let lt=i.COLOR_BUFFER_BIT;const et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(P),yt=T.length>1;if(yt)for(let Ut=0;Ut<T.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Ut=0;Ut<T.length;Ut++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Ut]);const he=n.get(T[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,$,tt,0,0,$,tt,lt,i.NEAREST),l===!0&&(ft.length=0,D.length=0,ft.push(i.COLOR_ATTACHMENT0+Ut),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ft.push(et),D.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Ut=0;Ut<T.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Ut]);const he=n.get(T[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,he,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ct(P){return Math.min(s.maxSamples,P.samples)}function Rt(P){const T=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function _t(P){const T=r.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function Yt(P,T){const $=P.colorSpace,tt=P.format,lt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==to&&$!==Ti&&(pe.getTransfer($)===ye?(tt!==In||lt!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function It(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=N,this.setTextureCube=W,this.rebindTextures=wt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Rt}function M_(i,t){function e(n,s=Ti){let o;const r=pe.getTransfer(s);if(n===ui)return i.UNSIGNED_BYTE;if(n===Bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mu)return i.BYTE;if(n===yu)return i.SHORT;if(n===Ro)return i.UNSIGNED_SHORT;if(n===zl)return i.INT;if(n===Qi)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===No)return i.HALF_FLOAT;if(n===wu)return i.ALPHA;if(n===Su)return i.RGB;if(n===In)return i.RGBA;if(n===Eu)return i.LUMINANCE;if(n===Tu)return i.LUMINANCE_ALPHA;if(n===Vs)return i.DEPTH_COMPONENT;if(n===Zs)return i.DEPTH_STENCIL;if(n===Gl)return i.RED;if(n===Vl)return i.RED_INTEGER;if(n===Au)return i.RG;if(n===Wl)return i.RG_INTEGER;if(n===Xl)return i.RGBA_INTEGER;if(n===Ar||n===Rr||n===Cr||n===Pr)if(r===ye)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ar)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ar)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===nl||n===il||n===sl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===el)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ol||n===rl||n===al)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ol||n===rl)return r===ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===al)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===vl||n===xl||n===Ml||n===yl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ll)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ul)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_l)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ml)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lr||n===bl||n===wl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Lr)return r===ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ru||n===Sl||n===El||n===Tl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Lr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===El)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class y_ extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class At extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b_={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new At;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
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

}`;class E_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new tn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new di({vertexShader:w_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new J(new pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T_ extends ns{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null;const _=new E_,g=e.getContextAttributes();let p=null,M=null;const x=[],v=[],A=new ot;let S=null;const E=new cn;E.viewport=new Le;const b=new cn;b.viewport=new Le;const w=[E,b],y=new y_;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let dt=x[Q];return dt===void 0&&(dt=new xa,x[Q]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Q){let dt=x[Q];return dt===void 0&&(dt=new xa,x[Q]=dt),dt.getGripSpace()},this.getHand=function(Q){let dt=x[Q];return dt===void 0&&(dt=new xa,x[Q]=dt),dt.getHandSpace()};function F(Q){const dt=v.indexOf(Q.inputSource);if(dt===-1)return;const Nt=x[dt];Nt!==void 0&&(Nt.update(Q.inputSource,Q.frame,c||r),Nt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",B);for(let Q=0;Q<x.length;Q++){const dt=v[Q];dt!==null&&(v[Q]=null,x[Q].disconnect(dt))}C=null,k=null,_.reset(),t.setRenderTarget(p),u=null,f=null,d=null,s=null,M=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const dt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};u=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new ts(u.framebufferWidth,u.framebufferHeight,{format:In,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let dt=null,Nt=null,nt=null;g.depth&&(nt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=g.stencil?Zs:Vs,Nt=g.stencil?js:Qi);const Dt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:o};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Dt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new ts(f.textureWidth,f.textureHeight,{format:In,type:ui,depthTexture:new Vu(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(Q){for(let dt=0;dt<Q.removed.length;dt++){const Nt=Q.removed[dt],nt=v.indexOf(Nt);nt>=0&&(v[nt]=null,x[nt].disconnect(Nt))}for(let dt=0;dt<Q.added.length;dt++){const Nt=Q.added[dt];let nt=v.indexOf(Nt);if(nt===-1){for(let Vt=0;Vt<x.length;Vt++)if(Vt>=v.length){v.push(Nt),nt=Vt;break}else if(v[Vt]===null){v[Vt]=Nt,nt=Vt;break}if(nt===-1)break}const Dt=x[nt];Dt&&Dt.connect(Nt)}}const V=new I,N=new I;function W(Q,dt,Nt){V.setFromMatrixPosition(dt.matrixWorld),N.setFromMatrixPosition(Nt.matrixWorld);const nt=V.distanceTo(N),Dt=dt.projectionMatrix.elements,Vt=Nt.projectionMatrix.elements,wt=Dt[14]/(Dt[10]-1),te=Dt[14]/(Dt[10]+1),it=(Dt[9]+1)/Dt[5],ft=(Dt[9]-1)/Dt[5],D=(Dt[8]-1)/Dt[0],xt=(Vt[8]+1)/Vt[0],ct=wt*D,Rt=wt*xt,_t=nt/(-D+xt),Yt=_t*-D;if(dt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Yt),Q.translateZ(_t),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Dt[10]===-1)Q.projectionMatrix.copy(dt.projectionMatrix),Q.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const It=wt+_t,P=te+_t,T=ct-Yt,$=Rt+(nt-Yt),tt=it*te/P*It,lt=ft*te/P*It;Q.projectionMatrix.makePerspective(T,$,tt,lt,It,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ht(Q,dt){dt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(dt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let dt=Q.near,Nt=Q.far;_.texture!==null&&(_.depthNear>0&&(dt=_.depthNear),_.depthFar>0&&(Nt=_.depthFar)),y.near=b.near=E.near=dt,y.far=b.far=E.far=Nt,(C!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,k=y.far),E.layers.mask=Q.layers.mask|2,b.layers.mask=Q.layers.mask|4,y.layers.mask=E.layers.mask|b.layers.mask;const nt=Q.parent,Dt=y.cameras;ht(y,nt);for(let Vt=0;Vt<Dt.length;Vt++)ht(Dt[Vt],nt);Dt.length===2?W(y,E,b):y.projectionMatrix.copy(E.projectionMatrix),vt(Q,y,nt)};function vt(Q,dt,Nt){Nt===null?Q.matrix.copy(dt.matrixWorld):(Q.matrix.copy(Nt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(dt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(dt.projectionMatrix),Q.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ks*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Mt=null;function Gt(Q,dt){if(h=dt.getViewerPose(c||r),m=dt,h!==null){const Nt=h.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let nt=!1;Nt.length!==y.cameras.length&&(y.cameras.length=0,nt=!0);for(let Vt=0;Vt<Nt.length;Vt++){const wt=Nt[Vt];let te=null;if(u!==null)te=u.getViewport(wt);else{const ft=d.getViewSubImage(f,wt);te=ft.viewport,Vt===0&&(t.setRenderTargetTextures(M,ft.colorTexture,f.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(M))}let it=w[Vt];it===void 0&&(it=new cn,it.layers.enable(Vt),it.viewport=new Le,w[Vt]=it),it.matrix.fromArray(wt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(wt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(te.x,te.y,te.width,te.height),Vt===0&&(y.matrix.copy(it.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),nt===!0&&y.cameras.push(it)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Vt=d.getDepthInformation(Nt[0]);Vt&&Vt.isValid&&Vt.texture&&_.init(t,Vt,s.renderState)}}for(let Nt=0;Nt<x.length;Nt++){const nt=v[Nt],Dt=x[Nt];nt!==null&&Dt!==void 0&&Dt.update(nt,dt,c||r)}Mt&&Mt(Q,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),m=null}const Kt=new Hu;Kt.setAnimationLoop(Gt),this.setAnimationLoop=function(Q){Mt=Q},this.dispose=function(){}}}const Gi=new kn,A_=new de;function R_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ou(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),d(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p)):p.isMeshStandardMaterial?(o(g,p),f(g,p),p.isMeshPhysicalMaterial&&u(g,p,v)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),_(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,v=M.envMapRotation;x&&(g.envMap.value=x,Gi.copy(v),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),g.envMapRotation.value.setFromMatrix4(A_.makeRotationFromEuler(Gi)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=x*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function C_(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=s[M.id];v===void 0&&(m(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",g));const A=x.program;n.updateUBOMapping(M,A);const S=t.render.frame;o[M.id]!==S&&(f(M),o[M.id]=S)}function h(M){const x=d();M.__bindingPointIndex=x;const v=i.createBuffer(),A=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function d(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=s[M.id],v=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let S=0,E=v.length;S<E;S++){const b=Array.isArray(v[S])?v[S]:[v[S]];for(let w=0,y=b.length;w<y;w++){const C=b[w];if(u(C,S,w,A)===!0){const k=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let B=0;B<F.length;B++){const V=F[B],N=_(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,k+O,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,O),O+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,x,v,A){const S=M.value,E=x+"_"+v;if(A[E]===void 0)return typeof S=="number"||typeof S=="boolean"?A[E]=S:A[E]=S.clone(),!0;{const b=A[E];if(typeof S=="number"||typeof S=="boolean"){if(b!==S)return A[E]=S,!0}else if(b.equals(S)===!1)return b.copy(S),!0}return!1}function m(M){const x=M.uniforms;let v=0;const A=16;for(let E=0,b=x.length;E<b;E++){const w=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,C=w.length;y<C;y++){const k=w[y],F=Array.isArray(k.value)?k.value:[k.value];for(let O=0,B=F.length;O<B;O++){const V=F[O],N=_(V),W=v%A,ht=W%N.boundary,vt=W+ht;v+=ht,vt!==0&&A-vt<N.storage&&(v+=A-vt),k.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=N.storage}}}const S=v%A;return S>0&&(v+=A-S),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function g(M){const x=M.target;x.removeEventListener("dispose",g);const v=r.indexOf(x.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete o[x.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}class Yu{constructor(t={}){const{canvas:e=xf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=r;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=Li,this.toneMappingExposure=1;const v=this;let A=!1,S=0,E=0,b=null,w=-1,y=null;const C=new Le,k=new Le;let F=null;const O=new Ht(0);let B=0,V=e.width,N=e.height,W=1,ht=null,vt=null;const Mt=new Le(0,0,V,N),Gt=new Le(0,0,V,N);let Kt=!1;const Q=new Yl;let dt=!1,Nt=!1;const nt=new de,Dt=new de,Vt=new I,wt=new Le,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function ft(){return b===null?W:1}let D=n;function xt(R,H){return e.getContext(R,H)}try{const R={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fl}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",St,!1),D===null){const H="webgl2";if(D=xt(H,R),D===null)throw xt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ct,Rt,_t,Yt,It,P,T,$,tt,lt,et,Ft,yt,Ut,he,ut,kt,mt,$t,Ct,ne,Qt,ie,z;function q(){ct=new N0(D),ct.init(),Qt=new M_(D,ct),Rt=new C0(D,ct,t,Qt),_t=new __(D,ct),Rt.reverseDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),Yt=new F0(D),It=new n_,P=new x_(D,ct,_t,It,Rt,Qt,Yt),T=new L0(v),$=new U0(v),tt=new Xf(D),ie=new A0(D,tt),lt=new k0(D,tt,Yt,ie),et=new B0(D,lt,tt,Yt),$t=new z0(D,Rt,P),ut=new P0(It),Ft=new e_(v,T,$,ct,Rt,ie,ut),yt=new R_(v,It),Ut=new s_,he=new h_(ct),mt=new T0(v,T,$,_t,et,u,l),kt=new m_(v,et,Rt),z=new C_(D,Yt,Rt,_t),Ct=new R0(D,ct,Yt),ne=new O0(D,ct,Yt),Yt.programs=Ft.programs,v.capabilities=Rt,v.extensions=ct,v.properties=It,v.renderLists=Ut,v.shadowMap=kt,v.state=_t,v.info=Yt}q();const Y=new T_(v,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(V,N,!1))},this.getSize=function(R){return R.set(V,N)},this.setSize=function(R,H,Z=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,N=H,e.width=Math.floor(R*W),e.height=Math.floor(H*W),Z===!0&&(e.style.width=R+"px",e.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(V*W,N*W).floor()},this.setDrawingBufferSize=function(R,H,Z){V=R,N=H,W=Z,e.width=Math.floor(R*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(Mt)},this.setViewport=function(R,H,Z,K){R.isVector4?Mt.set(R.x,R.y,R.z,R.w):Mt.set(R,H,Z,K),_t.viewport(C.copy(Mt).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(Gt)},this.setScissor=function(R,H,Z,K){R.isVector4?Gt.set(R.x,R.y,R.z,R.w):Gt.set(R,H,Z,K),_t.scissor(k.copy(Gt).multiplyScalar(W).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(R){_t.setScissorTest(Kt=R)},this.setOpaqueSort=function(R){ht=R},this.setTransparentSort=function(R){vt=R},this.getClearColor=function(R){return R.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(R=!0,H=!0,Z=!0){let K=0;if(R){let G=!1;if(b!==null){const pt=b.texture.format;G=pt===Xl||pt===Wl||pt===Vl}if(G){const pt=b.texture.type,Pt=pt===ui||pt===Qi||pt===Ro||pt===js||pt===Bl||pt===Hl,zt=mt.getClearColor(),Bt=mt.getClearAlpha(),Xt=zt.r,se=zt.g,L=zt.b;Pt?(m[0]=Xt,m[1]=se,m[2]=L,m[3]=Bt,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Xt,_[1]=se,_[2]=L,_[3]=Bt,D.clearBufferiv(D.COLOR,0,_))}else K|=D.COLOR_BUFFER_BIT}H&&(K|=D.DEPTH_BUFFER_BIT),Z&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Ut.dispose(),he.dispose(),It.dispose(),T.dispose(),$.dispose(),et.dispose(),ie.dispose(),z.dispose(),Ft.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",en),Y.removeEventListener("sessionend",rs),Fn.stop()};function st(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const R=Yt.autoReset,H=kt.enabled,Z=kt.autoUpdate,K=kt.needsUpdate,G=kt.type;q(),Yt.autoReset=R,kt.enabled=H,kt.autoUpdate=Z,kt.needsUpdate=K,kt.type=G}function St(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Zt(R){const H=R.target;H.removeEventListener("dispose",Zt),we(H)}function we(R){Oe(R),It.remove(R)}function Oe(R){const H=It.get(R).programs;H!==void 0&&(H.forEach(function(Z){Ft.releaseProgram(Z)}),R.isShaderMaterial&&Ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,Z,K,G,pt){H===null&&(H=te);const Pt=G.isMesh&&G.matrixWorld.determinant()<0,zt=Oo(R,H,Z,K,G);_t.setMaterial(K,Pt);let Bt=Z.index,Xt=1;if(K.wireframe===!0){if(Bt=lt.getWireframeAttribute(Z),Bt===void 0)return;Xt=2}const se=Z.drawRange,L=Z.attributes.position;let X=se.start*Xt,j=(se.start+se.count)*Xt;pt!==null&&(X=Math.max(X,pt.start*Xt),j=Math.min(j,(pt.start+pt.count)*Xt)),Bt!==null?(X=Math.max(X,0),j=Math.min(j,Bt.count)):L!=null&&(X=Math.max(X,0),j=Math.min(j,L.count));const rt=j-X;if(rt<0||rt===1/0)return;ie.setup(G,K,zt,Z,Bt);let bt,Lt=Ct;if(Bt!==null&&(bt=tt.get(Bt),Lt=ne,Lt.setIndex(bt)),G.isMesh)K.wireframe===!0?(_t.setLineWidth(K.wireframeLinewidth*ft()),Lt.setMode(D.LINES)):Lt.setMode(D.TRIANGLES);else if(G.isLine){let gt=K.linewidth;gt===void 0&&(gt=1),_t.setLineWidth(gt*ft()),G.isLineSegments?Lt.setMode(D.LINES):G.isLineLoop?Lt.setMode(D.LINE_LOOP):Lt.setMode(D.LINE_STRIP)}else G.isPoints?Lt.setMode(D.POINTS):G.isSprite&&Lt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Lt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))Lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const gt=G._multiDrawStarts,_e=G._multiDrawCounts,re=G._multiDrawCount,Se=Bt?tt.get(Bt).bytesPerElement:1,nn=It.get(K).currentProgram.getUniforms();for(let Ce=0;Ce<re;Ce++)nn.setValue(D,"_gl_DrawID",Ce),Lt.render(gt[Ce]/Se,_e[Ce])}else if(G.isInstancedMesh)Lt.renderInstances(X,rt,G.count);else if(Z.isInstancedBufferGeometry){const gt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,_e=Math.min(Z.instanceCount,gt);Lt.renderInstances(X,rt,_e)}else Lt.render(X,rt)};function ge(R,H,Z){R.transparent===!0&&R.side===Ae&&R.forceSinglePass===!1?(R.side=rn,R.needsUpdate=!0,zn(R,H,Z),R.side=Di,R.needsUpdate=!0,zn(R,H,Z),R.side=Ae):zn(R,H,Z)}this.compile=function(R,H,Z=null){Z===null&&(Z=R),p=he.get(Z),p.init(H),x.push(p),Z.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),R!==Z&&R.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const K=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pt=G.material;if(pt)if(Array.isArray(pt))for(let Pt=0;Pt<pt.length;Pt++){const zt=pt[Pt];ge(zt,Z,G),K.add(zt)}else ge(pt,Z,G),K.add(pt)}),x.pop(),p=null,K},this.compileAsync=function(R,H,Z=null){const K=this.compile(R,H,Z);return new Promise(G=>{function pt(){if(K.forEach(function(Pt){It.get(Pt).currentProgram.isReady()&&K.delete(Pt)}),K.size===0){G(R);return}setTimeout(pt,10)}ct.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let je=null;function Ve(R){je&&je(R)}function en(){Fn.stop()}function rs(){Fn.start()}const Fn=new Hu;Fn.setAnimationLoop(Ve),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(R){je=R,Y.setAnimationLoop(R),R===null?Fn.stop():Fn.start()},Y.addEventListener("sessionstart",en),Y.addEventListener("sessionend",rs),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(H),H=Y.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,H,b),p=he.get(R,x.length),p.init(H),x.push(p),Dt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Q.setFromProjectionMatrix(Dt),Nt=this.localClippingEnabled,dt=ut.init(this.clippingPlanes,Nt),g=Ut.get(R,M.length),g.init(),M.push(g),Y.enabled===!0&&Y.isPresenting===!0){const pt=v.xr.getDepthSensingMesh();pt!==null&&as(pt,H,-1/0,v.sortObjects)}as(R,H,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ht,vt),it=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,it&&mt.addToRenderList(g,R),this.info.render.frame++,dt===!0&&ut.beginShadows();const Z=p.state.shadowsArray;kt.render(Z,R,H),dt===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=g.opaque,G=g.transmissive;if(p.setupLights(),H.isArrayCamera){const pt=H.cameras;if(G.length>0)for(let Pt=0,zt=pt.length;Pt<zt;Pt++){const Bt=pt[Pt];We(K,G,R,Bt)}it&&mt.render(R);for(let Pt=0,zt=pt.length;Pt<zt;Pt++){const Bt=pt[Pt];Tn(g,R,Bt,Bt.viewport)}}else G.length>0&&We(K,G,R,H),it&&mt.render(R),Tn(g,R,H);b!==null&&(P.updateMultisampleRenderTarget(b),P.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(v,R,H),ie.resetDefaultState(),w=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],dt===!0&&ut.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function as(R,H,Z,K){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){K&&wt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Dt);const Pt=et.update(R),zt=R.material;zt.visible&&g.push(R,Pt,zt,Z,wt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Pt=et.update(R),zt=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),wt.copy(R.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),wt.copy(Pt.boundingSphere.center)),wt.applyMatrix4(R.matrixWorld).applyMatrix4(Dt)),Array.isArray(zt)){const Bt=Pt.groups;for(let Xt=0,se=Bt.length;Xt<se;Xt++){const L=Bt[Xt],X=zt[L.materialIndex];X&&X.visible&&g.push(R,Pt,X,Z,wt.z,L)}}else zt.visible&&g.push(R,Pt,zt,Z,wt.z,null)}}const pt=R.children;for(let Pt=0,zt=pt.length;Pt<zt;Pt++)as(pt[Pt],H,Z,K)}function Tn(R,H,Z,K){const G=R.opaque,pt=R.transmissive,Pt=R.transparent;p.setupLightsView(Z),dt===!0&&ut.setGlobalState(v.clippingPlanes,Z),K&&_t.viewport(C.copy(K)),G.length>0&&ee(G,H,Z),pt.length>0&&ee(pt,H,Z),Pt.length>0&&ee(Pt,H,Z),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function We(R,H,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new ts(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?No:ui,minFilter:ji,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const pt=p.state.transmissionRenderTarget[K.id],Pt=K.viewport||C;pt.setSize(Pt.z,Pt.w);const zt=v.getRenderTarget();v.setRenderTarget(pt),v.getClearColor(O),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),it&&mt.render(Z);const Bt=v.toneMapping;v.toneMapping=Li;const Xt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),dt===!0&&ut.setGlobalState(v.clippingPlanes,K),ee(R,Z,K),P.updateMultisampleRenderTarget(pt),P.updateRenderTargetMipmap(pt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let L=0,X=H.length;L<X;L++){const j=H[L],rt=j.object,bt=j.geometry,Lt=j.material,gt=j.group;if(Lt.side===Ae&&rt.layers.test(K.layers)){const _e=Lt.side;Lt.side=rn,Lt.needsUpdate=!0,ls(rt,Z,K,bt,Lt,gt),Lt.side=_e,Lt.needsUpdate=!0,se=!0}}se===!0&&(P.updateMultisampleRenderTarget(pt),P.updateRenderTargetMipmap(pt))}v.setRenderTarget(zt),v.setClearColor(O,B),Xt!==void 0&&(K.viewport=Xt),v.toneMapping=Bt}function ee(R,H,Z){const K=H.isScene===!0?H.overrideMaterial:null;for(let G=0,pt=R.length;G<pt;G++){const Pt=R[G],zt=Pt.object,Bt=Pt.geometry,Xt=K===null?Pt.material:K,se=Pt.group;zt.layers.test(Z.layers)&&ls(zt,H,Z,Bt,Xt,se)}}function ls(R,H,Z,K,G,pt){R.onBeforeRender(v,H,Z,K,G,pt),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(v,H,Z,K,R,pt),G.transparent===!0&&G.side===Ae&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,v.renderBufferDirect(Z,H,K,G,R,pt),G.side=Di,G.needsUpdate=!0,v.renderBufferDirect(Z,H,K,G,R,pt),G.side=Ae):v.renderBufferDirect(Z,H,K,G,R,pt),R.onAfterRender(v,H,Z,K,G,pt)}function zn(R,H,Z){H.isScene!==!0&&(H=te);const K=It.get(R),G=p.state.lights,pt=p.state.shadowsArray,Pt=G.state.version,zt=Ft.getParameters(R,G.state,pt,H,Z),Bt=Ft.getProgramCacheKey(zt);let Xt=K.programs;K.environment=R.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(R.isMeshStandardMaterial?$:T).get(R.envMap||K.environment),K.envMapRotation=K.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",Zt),Xt=new Map,K.programs=Xt);let se=Xt.get(Bt);if(se!==void 0){if(K.currentProgram===se&&K.lightsStateVersion===Pt)return Ni(R,zt),se}else zt.uniforms=Ft.getUniforms(R),R.onBeforeCompile(zt,v),se=Ft.acquireProgram(zt,Bt),Xt.set(Bt,se),K.uniforms=zt.uniforms;const L=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(L.clippingPlanes=ut.uniform),Ni(R,zt),K.needsLights=so(R),K.lightsStateVersion=Pt,K.needsLights&&(L.ambientLightColor.value=G.state.ambient,L.lightProbe.value=G.state.probe,L.directionalLights.value=G.state.directional,L.directionalLightShadows.value=G.state.directionalShadow,L.spotLights.value=G.state.spot,L.spotLightShadows.value=G.state.spotShadow,L.rectAreaLights.value=G.state.rectArea,L.ltc_1.value=G.state.rectAreaLTC1,L.ltc_2.value=G.state.rectAreaLTC2,L.pointLights.value=G.state.point,L.pointLightShadows.value=G.state.pointShadow,L.hemisphereLights.value=G.state.hemi,L.directionalShadowMap.value=G.state.directionalShadowMap,L.directionalShadowMatrix.value=G.state.directionalShadowMatrix,L.spotShadowMap.value=G.state.spotShadowMap,L.spotLightMatrix.value=G.state.spotLightMatrix,L.spotLightMap.value=G.state.spotLightMap,L.pointShadowMap.value=G.state.pointShadowMap,L.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=se,K.uniformsList=null,se}function cs(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=Dr.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Ni(R,H){const Z=It.get(R);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Oo(R,H,Z,K,G){H.isScene!==!0&&(H=te),P.resetTextureUnits();const pt=H.fog,Pt=K.isMeshStandardMaterial?H.environment:null,zt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:to,Bt=(K.isMeshStandardMaterial?$:T).get(K.envMap||Pt),Xt=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,se=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),L=!!Z.morphAttributes.position,X=!!Z.morphAttributes.normal,j=!!Z.morphAttributes.color;let rt=Li;K.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(rt=v.toneMapping);const bt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Lt=bt!==void 0?bt.length:0,gt=It.get(K),_e=p.state.lights;if(dt===!0&&(Nt===!0||R!==y)){const Fe=R===y&&K.id===w;ut.setState(K,R,Fe)}let re=!1;K.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==_e.state.version||gt.outputColorSpace!==zt||G.isBatchedMesh&&gt.batching===!1||!G.isBatchedMesh&&gt.batching===!0||G.isBatchedMesh&&gt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&gt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&gt.instancing===!1||!G.isInstancedMesh&&gt.instancing===!0||G.isSkinnedMesh&&gt.skinning===!1||!G.isSkinnedMesh&&gt.skinning===!0||G.isInstancedMesh&&gt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&gt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&gt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&gt.instancingMorph===!1&&G.morphTexture!==null||gt.envMap!==Bt||K.fog===!0&&gt.fog!==pt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==ut.numPlanes||gt.numIntersection!==ut.numIntersection)||gt.vertexAlphas!==Xt||gt.vertexTangents!==se||gt.morphTargets!==L||gt.morphNormals!==X||gt.morphColors!==j||gt.toneMapping!==rt||gt.morphTargetsCount!==Lt)&&(re=!0):(re=!0,gt.__version=K.version);let Se=gt.currentProgram;re===!0&&(Se=zn(K,H,G));let nn=!1,Ce=!1,De=!1;const ve=Se.getUniforms(),vn=gt.uniforms;if(_t.useProgram(Se.program)&&(nn=!0,Ce=!0,De=!0),K.id!==w&&(w=K.id,Ce=!0),nn||y!==R){_t.buffers.depth.getReversed()?(nt.copy(R.projectionMatrix),yf(nt),bf(nt),ve.setValue(D,"projectionMatrix",nt)):ve.setValue(D,"projectionMatrix",R.projectionMatrix),ve.setValue(D,"viewMatrix",R.matrixWorldInverse);const xn=ve.map.cameraPosition;xn!==void 0&&xn.setValue(D,Vt.setFromMatrixPosition(R.matrixWorld)),Rt.logarithmicDepthBuffer&&ve.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ve.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Ce=!0,De=!0)}if(G.isSkinnedMesh){ve.setOptional(D,G,"bindMatrix"),ve.setOptional(D,G,"bindMatrixInverse");const Fe=G.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),ve.setValue(D,"boneTexture",Fe.boneTexture,P))}G.isBatchedMesh&&(ve.setOptional(D,G,"batchingTexture"),ve.setValue(D,"batchingTexture",G._matricesTexture,P),ve.setOptional(D,G,"batchingIdTexture"),ve.setValue(D,"batchingIdTexture",G._indirectTexture,P),ve.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&ve.setValue(D,"batchingColorTexture",G._colorsTexture,P));const dn=Z.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&$t.update(G,Z,Se),(Ce||gt.receiveShadow!==G.receiveShadow)&&(gt.receiveShadow=G.receiveShadow,ve.setValue(D,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(vn.envMap.value=Bt,vn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(vn.envMapIntensity.value=H.environmentIntensity),Ce&&(ve.setValue(D,"toneMappingExposure",v.toneMappingExposure),gt.needsLights&&io(vn,De),pt&&K.fog===!0&&yt.refreshFogUniforms(vn,pt),yt.refreshMaterialUniforms(vn,K,W,N,p.state.transmissionRenderTarget[R.id]),Dr.upload(D,cs(gt),vn,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Dr.upload(D,cs(gt),vn,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ve.setValue(D,"center",G.center),ve.setValue(D,"modelViewMatrix",G.modelViewMatrix),ve.setValue(D,"normalMatrix",G.normalMatrix),ve.setValue(D,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Fe=K.uniformsGroups;for(let xn=0,Bn=Fe.length;xn<Bn;xn++){const oo=Fe[xn];z.update(oo,Se),z.bind(oo,Se)}}return Se}function io(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function so(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,H,Z){It.get(R.texture).__webglTexture=H,It.get(R.depthTexture).__webglTexture=Z;const K=It.get(R);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,H){const Z=It.get(R);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,Z=0){b=R,S=H,E=Z;let K=!0,G=null,pt=!1,Pt=!1;if(R){const Bt=It.get(R);if(Bt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(D.FRAMEBUFFER,null),K=!1;else if(Bt.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(Bt.__hasExternalTextures)P.rebindTextures(R,It.get(R.texture).__webglTexture,It.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const L=R.depthTexture;if(Bt.__boundDepthTexture!==L){if(L!==null&&It.has(L)&&(R.width!==L.image.width||R.height!==L.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);const se=It.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(se[H])?G=se[H][Z]:G=se[H],pt=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?G=It.get(R).__webglMultisampledFramebuffer:Array.isArray(se)?G=se[Z]:G=se,C.copy(R.viewport),k.copy(R.scissor),F=R.scissorTest}else C.copy(Mt).multiplyScalar(W).floor(),k.copy(Gt).multiplyScalar(W).floor(),F=Kt;if(_t.bindFramebuffer(D.FRAMEBUFFER,G)&&K&&_t.drawBuffers(R,G),_t.viewport(C),_t.scissor(k),_t.setScissorTest(F),pt){const Bt=It.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,Bt.__webglTexture,Z)}else if(Pt){const Bt=It.get(R.texture),Xt=H||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Bt.__webglTexture,Z||0,Xt)}w=-1},this.readRenderTargetPixels=function(R,H,Z,K,G,pt,Pt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(zt=zt[Pt]),zt){_t.bindFramebuffer(D.FRAMEBUFFER,zt);try{const Bt=R.texture,Xt=Bt.format,se=Bt.type;if(!Rt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-K&&Z>=0&&Z<=R.height-G&&D.readPixels(H,Z,K,G,Qt.convert(Xt),Qt.convert(se),pt)}finally{const Bt=b!==null?It.get(b).__webglFramebuffer:null;_t.bindFramebuffer(D.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(R,H,Z,K,G,pt,Pt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(zt=zt[Pt]),zt){const Bt=R.texture,Xt=Bt.format,se=Bt.type;if(!Rt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=R.width-K&&Z>=0&&Z<=R.height-G){_t.bindFramebuffer(D.FRAMEBUFFER,zt);const L=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,L),D.bufferData(D.PIXEL_PACK_BUFFER,pt.byteLength,D.STREAM_READ),D.readPixels(H,Z,K,G,Qt.convert(Xt),Qt.convert(se),0);const X=b!==null?It.get(b).__webglFramebuffer:null;_t.bindFramebuffer(D.FRAMEBUFFER,X);const j=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Mf(D,j,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,L),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pt),D.deleteBuffer(L),D.deleteSync(j),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,H=null,Z=0){R.isTexture!==!0&&(yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,R=arguments[1]);const K=Math.pow(2,-Z),G=Math.floor(R.image.width*K),pt=Math.floor(R.image.height*K),Pt=H!==null?H.x:0,zt=H!==null?H.y:0;P.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,Pt,zt,G,pt),_t.unbindTexture()},this.copyTextureToTexture=function(R,H,Z=null,K=null,G=0){R.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1],H=arguments[2],G=arguments[3]||0,Z=null);let pt,Pt,zt,Bt,Xt,se,L,X,j;const rt=R.isCompressedTexture?R.mipmaps[G]:R.image;Z!==null?(pt=Z.max.x-Z.min.x,Pt=Z.max.y-Z.min.y,zt=Z.isBox3?Z.max.z-Z.min.z:1,Bt=Z.min.x,Xt=Z.min.y,se=Z.isBox3?Z.min.z:0):(pt=rt.width,Pt=rt.height,zt=rt.depth||1,Bt=0,Xt=0,se=0),K!==null?(L=K.x,X=K.y,j=K.z):(L=0,X=0,j=0);const bt=Qt.convert(H.format),Lt=Qt.convert(H.type);let gt;H.isData3DTexture?(P.setTexture3D(H,0),gt=D.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(P.setTexture2DArray(H,0),gt=D.TEXTURE_2D_ARRAY):(P.setTexture2D(H,0),gt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);const _e=D.getParameter(D.UNPACK_ROW_LENGTH),re=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Se=D.getParameter(D.UNPACK_SKIP_PIXELS),nn=D.getParameter(D.UNPACK_SKIP_ROWS),Ce=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,se);const De=R.isDataArrayTexture||R.isData3DTexture,ve=H.isDataArrayTexture||H.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const vn=It.get(R),dn=It.get(H),Fe=It.get(vn.__renderTarget),xn=It.get(dn.__renderTarget);_t.bindFramebuffer(D.READ_FRAMEBUFFER,Fe.__webglFramebuffer),_t.bindFramebuffer(D.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let Bn=0;Bn<zt;Bn++)De&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.get(R).__webglTexture,G,se+Bn),R.isDepthTexture?(ve&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.get(H).__webglTexture,G,j+Bn),D.blitFramebuffer(Bt,Xt,pt,Pt,L,X,pt,Pt,D.DEPTH_BUFFER_BIT,D.NEAREST)):ve?D.copyTexSubImage3D(gt,G,L,X,j+Bn,Bt,Xt,pt,Pt):D.copyTexSubImage2D(gt,G,L,X,j+Bn,Bt,Xt,pt,Pt);_t.bindFramebuffer(D.READ_FRAMEBUFFER,null),_t.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ve?R.isDataTexture||R.isData3DTexture?D.texSubImage3D(gt,G,L,X,j,pt,Pt,zt,bt,Lt,rt.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(gt,G,L,X,j,pt,Pt,zt,bt,rt.data):D.texSubImage3D(gt,G,L,X,j,pt,Pt,zt,bt,Lt,rt):R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,G,L,X,pt,Pt,bt,Lt,rt.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,G,L,X,rt.width,rt.height,bt,rt.data):D.texSubImage2D(D.TEXTURE_2D,G,L,X,pt,Pt,bt,Lt,rt);D.pixelStorei(D.UNPACK_ROW_LENGTH,_e),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,re),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,nn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce),G===0&&H.generateMipmaps&&D.generateMipmap(gt),_t.unbindTexture()},this.copyTextureToTexture3D=function(R,H,Z=null,K=null,G=0){return R.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,K=arguments[1]||null,R=arguments[2],H=arguments[3],G=arguments[4]||0),yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,H,Z,K,G)},this.initRenderTarget=function(R){It.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),_t.unbindTexture()},this.resetState=function(){S=0,E=0,b=null,_t.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}class Zl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new Zl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kl extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class P_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Al,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new I;class kr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),o=Me(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new kr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jl extends ss{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ss;const ho=new I,Es=new I,Ts=new I,As=new ot,uo=new ot,ju=new de,or=new I,fo=new I,rr=new I,oh=new ot,Ma=new ot,rh=new ot;class Zu extends Ie{constructor(t=new Jl){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new P_(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new kr(n,3,0,!1)),Ss.setAttribute("uv",new kr(n,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),ju.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Ts.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;ar(or.set(-.5,-.5,0),Ts,r,Es,s,o),ar(fo.set(.5,-.5,0),Ts,r,Es,s,o),ar(rr.set(.5,.5,0),Ts,r,Es,s,o),oh.set(0,0),Ma.set(1,0),rh.set(1,1);let a=t.ray.intersectTriangle(or,fo,rr,!1,ho);if(a===null&&(ar(fo.set(-.5,.5,0),Ts,r,Es,s,o),Ma.set(0,1),a=t.ray.intersectTriangle(or,rr,fo,!1,ho),a===null))return;const l=t.ray.origin.distanceTo(ho);l<t.near||l>t.far||e.push({distance:l,point:ho.clone(),uv:bn.getInterpolation(ho,or,fo,rr,oh,Ma,rh,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ar(i,t,e,n,s,o){As.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(uo.x=o*As.x-s*As.y,uo.y=s*As.x+o*As.y):uo.copy(As),i.copy(t),i.x+=uo.x,i.y+=uo.y,i.applyMatrix4(ju)}class L_ extends tn{constructor(t=null,e=1,n=1,s,o,r,a,l,c=gn,h=gn,d,f){super(null,r,a,l,c,h,s,o,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ah extends ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Rs=new de,lh=new de,lr=[],ch=new is,D_=new de,po=new J,mo=new eo;class wn extends J{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ah(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,D_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new is),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),ch.copy(t.boundingBox).applyMatrix4(Rs),this.boundingBox.union(ch)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new eo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),mo.copy(t.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(mo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(po.geometry=this.geometry,po.material=this.material,po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(n),t.ray.intersectsSphere(mo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Rs),lh.multiplyMatrices(n,Rs),po.matrixWorld=lh,po.raycast(t,lr);for(let r=0,a=lr.length;r<a;r++){const l=lr[r];l.instanceId=o,l.object=this,e.push(l)}lr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ah(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new L_(new Float32Array(s*this.count),s,this.count,Gl,Xn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ku extends ss{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Or=new I,Fr=new I,hh=new de,go=new Gr,cr=new eo,ya=new I,uh=new I;class I_ extends Ie{constructor(t=new me,e=new Ku){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Or.fromBufferAttribute(e,s-1),Fr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Or.distanceTo(Fr);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),cr.radius+=o,t.ray.intersectsSphere(cr)===!1)return;hh.copy(s).invert(),go.copy(t.ray).applyMatrix4(hh);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let _=u,g=m-1;_<g;_+=c){const p=h.getX(_),M=h.getX(_+1),x=hr(this,t,go,l,p,M);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(u),p=hr(this,t,go,l,_,g);p&&e.push(p)}}else{const u=Math.max(0,r.start),m=Math.min(f.count,r.start+r.count);for(let _=u,g=m-1;_<g;_+=c){const p=hr(this,t,go,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=hr(this,t,go,l,m-1,u);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function hr(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Or.fromBufferAttribute(r,s),Fr.fromBufferAttribute(r,o),e.distanceSqToSegment(Or,Fr,ya,uh)>n)return;ya.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ya);if(!(l<t.near||l>t.far))return{distance:l,point:uh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class On extends tn{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],f=n[s+1]-h,u=(r-h)/f;return(s+u)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new ot:new I);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],o=[],r=[],a=new I,l=new de;for(let u=0;u<=t;u++){const m=u/t;s[u]=this.getTangentAt(m,new I)}o[0]=new I,r[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let u=1;u<=t;u++){if(o[u]=o[u-1].clone(),r[u]=r[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Be(s[u-1].dot(s[u]),-1,1));o[u].applyMatrix4(l.makeRotationAxis(a,m))}r[u].crossVectors(s[u],o[u])}if(e===!0){let u=Math.acos(Be(o[0].dot(o[t]),-1,1));u/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(u=-u);for(let m=1;m<=t;m++)o[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ql extends Jn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ot){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class U_ extends Ql{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function tc(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,d){let f=(r-o)/c-(a-o)/(c+h)+(a-r)/h,u=(a-r)/h-(l-r)/(h+d)+(l-a)/d;f*=h,u*=h,s(r,a,f,u)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const ur=new I,ba=new tc,wa=new tc,Sa=new tc;class N_ extends Jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(ur.subVectors(s[0],s[1]).add(s[0]),c=ur);const d=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(ur.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=ur),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),ba.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,m,_,g),wa.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,m,_,g),Sa.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),wa.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Sa.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(ba.calc(l),wa.calc(l),Sa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function dh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function k_(i,t){const e=1-i;return e*e*t}function O_(i,t){return 2*(1-i)*i*t}function F_(i,t){return i*i*t}function To(i,t,e,n){return k_(i,t)+O_(i,e)+F_(i,n)}function z_(i,t){const e=1-i;return e*e*e*t}function B_(i,t){const e=1-i;return 3*e*e*i*t}function H_(i,t){return 3*(1-i)*i*i*t}function G_(i,t){return i*i*i*t}function Ao(i,t,e,n,s){return z_(i,t)+B_(i,e)+H_(i,n)+G_(i,s)}class Ju extends Jn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ao(t,s.x,o.x,r.x,a.x),Ao(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class V_ extends Jn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ao(t,s.x,o.x,r.x,a.x),Ao(t,s.y,o.y,r.y,a.y),Ao(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qu extends Jn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class W_ extends Jn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class td extends Jn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(To(t,s.x,o.x,r.x),To(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class X_ extends Jn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(To(t,s.x,o.x,r.x),To(t,s.y,o.y,r.y),To(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ed extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return n.set(dh(a,l.x,c.x,h.x,d.x),dh(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var Pl=Object.freeze({__proto__:null,ArcCurve:U_,CatmullRomCurve3:N_,CubicBezierCurve:Ju,CubicBezierCurve3:V_,EllipseCurve:Ql,LineCurve:Qu,LineCurve3:W_,QuadraticBezierCurve:td,QuadraticBezierCurve3:X_,SplineCurve:ed});class $_ extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Pl[s.type]().fromJSON(s))}return this}}class fh extends $_{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Qu(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new td(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Ju(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ed(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Ql(t,e,n,s,o,r,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ec extends me{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Be(s,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,d=new I,f=new ot,u=new I,m=new I,_=new I;let g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,u.x=p*1,u.y=-g,u.z=p*0,_.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,u.x=p*1,u.y=-g,u.z=p*0,m.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),l.push(u.x,u.y,u.z),_.copy(m)}for(let M=0;M<=e;M++){const x=n+M*h*s,v=Math.sin(x),A=Math.cos(x);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*v,d.y=t[S].y,d.z=t[S].x*A,r.push(d.x,d.y,d.z),f.x=M/e,f.y=S/(t.length-1),a.push(f.x,f.y);const E=l[3*S+0]*v,b=l[3*S+1],w=l[3*S+0]*A;c.push(E,b,w)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const v=x+M*t.length,A=v,S=v+t.length,E=v+t.length+1,b=v+1;o.push(A,S,b),o.push(E,b,S)}this.setIndex(o),this.setAttribute("position",new qt(r,3)),this.setAttribute("uv",new qt(a,2)),this.setAttribute("normal",new qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ec(t.points,t.segments,t.phiStart,t.phiLength)}}class nc extends me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new I,h=new ot;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const u=n+d/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class jt extends me{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],d=[],f=[],u=[];let m=0;const _=[],g=n/2;let p=0;M(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(u,2));function M(){const v=new I,A=new I;let S=0;const E=(e-t)/n;for(let b=0;b<=o;b++){const w=[],y=b/o,C=y*(e-t)+t;for(let k=0;k<=s;k++){const F=k/s,O=F*l+a,B=Math.sin(O),V=Math.cos(O);A.x=C*B,A.y=-y*n+g,A.z=C*V,d.push(A.x,A.y,A.z),v.set(B,E,V).normalize(),f.push(v.x,v.y,v.z),u.push(F,1-y),w.push(m++)}_.push(w)}for(let b=0;b<s;b++)for(let w=0;w<o;w++){const y=_[w][b],C=_[w+1][b],k=_[w+1][b+1],F=_[w][b+1];(t>0||w!==0)&&(h.push(y,C,F),S+=3),(e>0||w!==o-1)&&(h.push(C,k,F),S+=3)}c.addGroup(p,S,0),p+=S}function x(v){const A=m,S=new ot,E=new I;let b=0;const w=v===!0?t:e,y=v===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,g*y,0),f.push(0,y,0),u.push(.5,.5),m++;const C=m;for(let k=0;k<=s;k++){const O=k/s*l+a,B=Math.cos(O),V=Math.sin(O);E.x=w*V,E.y=g*y,E.z=w*B,d.push(E.x,E.y,E.z),f.push(0,y,0),S.x=B*.5+.5,S.y=V*.5*y+.5,u.push(S.x,S.y),m++}for(let k=0;k<s;k++){const F=A+k,O=C+k;v===!0?h.push(O,O+1,F):h.push(O+1,O,F),b+=3}c.addGroup(p,b,v===!0?1:2),p+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jn extends jt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new jn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wr extends me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(o.slice(),3)),this.setAttribute("uv",new qt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new I,v=new I,A=new I;for(let S=0;S<e.length;S+=3)u(e[S+0],x),u(e[S+1],v),u(e[S+2],A),l(x,v,A,M)}function l(M,x,v,A){const S=A+1,E=[];for(let b=0;b<=S;b++){E[b]=[];const w=M.clone().lerp(v,b/S),y=x.clone().lerp(v,b/S),C=S-b;for(let k=0;k<=C;k++)k===0&&b===S?E[b][k]=w:E[b][k]=w.clone().lerp(y,k/C)}for(let b=0;b<S;b++)for(let w=0;w<2*(S-b)-1;w++){const y=Math.floor(w/2);w%2===0?(f(E[b][y+1]),f(E[b+1][y]),f(E[b][y])):(f(E[b][y+1]),f(E[b+1][y+1]),f(E[b+1][y]))}}function c(M){const x=new I;for(let v=0;v<o.length;v+=3)x.x=o[v+0],x.y=o[v+1],x.z=o[v+2],x.normalize().multiplyScalar(M),o[v+0]=x.x,o[v+1]=x.y,o[v+2]=x.z}function h(){const M=new I;for(let x=0;x<o.length;x+=3){M.x=o[x+0],M.y=o[x+1],M.z=o[x+2];const v=g(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;r.push(v,1-A)}m(),d()}function d(){for(let M=0;M<r.length;M+=6){const x=r[M+0],v=r[M+2],A=r[M+4],S=Math.max(x,v,A),E=Math.min(x,v,A);S>.9&&E<.1&&(x<.2&&(r[M+0]+=1),v<.2&&(r[M+2]+=1),A<.2&&(r[M+4]+=1))}}function f(M){o.push(M.x,M.y,M.z)}function u(M,x){const v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function m(){const M=new I,x=new I,v=new I,A=new I,S=new ot,E=new ot,b=new ot;for(let w=0,y=0;w<o.length;w+=9,y+=6){M.set(o[w+0],o[w+1],o[w+2]),x.set(o[w+3],o[w+4],o[w+5]),v.set(o[w+6],o[w+7],o[w+8]),S.set(r[y+0],r[y+1]),E.set(r[y+2],r[y+3]),b.set(r[y+4],r[y+5]),A.copy(M).add(x).add(v).divideScalar(3);const C=g(A);_(S,y+0,M,C),_(E,y+2,x,C),_(b,y+4,v,C)}}function _(M,x,v,A){A<0&&M.x===1&&(r[x]=M.x-1),v.x===0&&v.z===0&&(r[x]=A/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.vertices,t.indices,t.radius,t.details)}}class os extends fh{constructor(t){super(t),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new fh().fromJSON(s))}return this}}const q_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=nd(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,d,f,u;if(n&&(o=J_(i,t,o,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)d=i[m],f=i[m+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>h&&(h=f);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return Co(o,r,e,a,l,u,0),r}};function nd(i,t,e,n,s){let o,r;if(s===cv(i,t,e,n)>0)for(o=t;o<e;o+=n)r=ph(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=ph(o,i[o],i[o+1],r);return r&&Xr(r,r.next)&&(Lo(r),r=r.next),r}function es(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Xr(e,e.next)||Re(e.prev,e,e.next)===0)){if(Lo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Co(i,t,e,n,s,o,r){if(!i)return;!r&&o&&iv(i,n,s,o);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,o?j_(i,n,s,o):Y_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Lo(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=Z_(es(i),t,e),Co(i,t,e,n,s,o,2)):r===2&&K_(i,t,e,n,s,o):Co(es(i),t,e,n,s,o,1);break}}}function Y_(i){const t=i.prev,e=i,n=i.next;if(Re(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=s<o?s<r?s:r:o<r?o:r,d=a<l?a<c?a:c:l<c?l:c,f=s>o?s>r?s:r:o>r?o:r,u=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=u&&Fs(s,a,o,l,r,c,m.x,m.y)&&Re(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function j_(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Re(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,d=o.y,f=r.y,u=a<l?a<c?a:c:l<c?l:c,m=h<d?h<f?h:f:d<f?d:f,_=a>l?a>c?a:c:l>c?l:c,g=h>d?h>f?h:f:d>f?d:f,p=Ll(u,m,t,e,n),M=Ll(_,g,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=M;){if(x.x>=u&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==r&&Fs(a,h,l,d,c,f,x.x,x.y)&&Re(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=u&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==r&&Fs(a,h,l,d,c,f,v.x,v.y)&&Re(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=u&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==r&&Fs(a,h,l,d,c,f,x.x,x.y)&&Re(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=u&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==r&&Fs(a,h,l,d,c,f,v.x,v.y)&&Re(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Z_(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Xr(s,o)&&id(s,n,n.next,o)&&Po(s,o)&&Po(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Lo(n),Lo(n.next),n=i=o),n=n.next}while(n!==i);return es(n)}function K_(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&rv(r,a)){let l=sd(r,a);r=es(r,r.next),l=es(l,l.next),Co(r,t,e,n,s,o,0),Co(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function J_(i,t,e,n){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=nd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(ov(c));for(s.sort(Q_),o=0;o<s.length;o++)e=tv(s[o],e);return e}function Q_(i,t){return i.x-t.x}function tv(i,t){const e=ev(i,t);if(!e)return t;const n=sd(e,i);return es(n,n.next),es(e,e.next)}function ev(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,d;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&Fs(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(d=Math.abs(r-e.y)/(o-e.x),Po(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&nv(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function nv(i,t){return Re(i.prev,i,t.prev)<0&&Re(t.next,i,i.next)<0}function iv(i,t,e,n){let s=i;do s.z===0&&(s.z=Ll(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sv(s)}function sv(i){let t,e,n,s,o,r,a,l,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function Ll(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ov(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Fs(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function rv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!av(i,t)&&(Po(i,t)&&Po(t,i)&&lv(i,t)&&(Re(i.prev,i,t.prev)||Re(i,t.prev,t))||Xr(i,t)&&Re(i.prev,i,i.next)>0&&Re(t.prev,t,t.next)>0)}function Re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Xr(i,t){return i.x===t.x&&i.y===t.y}function id(i,t,e,n){const s=fr(Re(i,t,e)),o=fr(Re(i,t,n)),r=fr(Re(e,n,i)),a=fr(Re(e,n,t));return!!(s!==o&&r!==a||s===0&&dr(i,e,t)||o===0&&dr(i,n,t)||r===0&&dr(e,i,n)||a===0&&dr(e,t,n))}function dr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function fr(i){return i>0?1:i<0?-1:0}function av(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&id(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Po(i,t){return Re(i.prev,i,i.next)<0?Re(i,t,i.next)>=0&&Re(i,i.prev,t)>=0:Re(i,t,i.prev)<0||Re(i,i.next,t)<0}function lv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function sd(i,t){const e=new Dl(i.i,i.x,i.y),n=new Dl(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function ph(i,t,e,n){const s=new Dl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cv(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Zn{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Zn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];mh(t),gh(n,t);let r=t.length;e.forEach(mh);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,gh(n,e[l]);const a=q_.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function mh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function gh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Qs extends me{constructor(t=new os([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new qt(s,3)),this.setAttribute("uv",new qt(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:hv;let x,v=!1,A,S,E,b;p&&(x=p.getSpacedPoints(h),v=!0,f=!1,A=p.computeFrenetFrames(h,!1),S=new I,E=new I,b=new I),f||(g=0,u=0,m=0,_=0);const w=a.extractPoints(c);let y=w.shape;const C=w.holes;if(!Zn.isClockWise(y)){y=y.reverse();for(let it=0,ft=C.length;it<ft;it++){const D=C[it];Zn.isClockWise(D)&&(C[it]=D.reverse())}}const F=Zn.triangulateShape(y,C),O=y;for(let it=0,ft=C.length;it<ft;it++){const D=C[it];y=y.concat(D)}function B(it,ft,D){return ft||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ft,D)}const V=y.length,N=F.length;function W(it,ft,D){let xt,ct,Rt;const _t=it.x-ft.x,Yt=it.y-ft.y,It=D.x-it.x,P=D.y-it.y,T=_t*_t+Yt*Yt,$=_t*P-Yt*It;if(Math.abs($)>Number.EPSILON){const tt=Math.sqrt(T),lt=Math.sqrt(It*It+P*P),et=ft.x-Yt/tt,Ft=ft.y+_t/tt,yt=D.x-P/lt,Ut=D.y+It/lt,he=((yt-et)*P-(Ut-Ft)*It)/(_t*P-Yt*It);xt=et+_t*he-it.x,ct=Ft+Yt*he-it.y;const ut=xt*xt+ct*ct;if(ut<=2)return new ot(xt,ct);Rt=Math.sqrt(ut/2)}else{let tt=!1;_t>Number.EPSILON?It>Number.EPSILON&&(tt=!0):_t<-Number.EPSILON?It<-Number.EPSILON&&(tt=!0):Math.sign(Yt)===Math.sign(P)&&(tt=!0),tt?(xt=-Yt,ct=_t,Rt=Math.sqrt(T)):(xt=_t,ct=Yt,Rt=Math.sqrt(T/2))}return new ot(xt/Rt,ct/Rt)}const ht=[];for(let it=0,ft=O.length,D=ft-1,xt=it+1;it<ft;it++,D++,xt++)D===ft&&(D=0),xt===ft&&(xt=0),ht[it]=W(O[it],O[D],O[xt]);const vt=[];let Mt,Gt=ht.concat();for(let it=0,ft=C.length;it<ft;it++){const D=C[it];Mt=[];for(let xt=0,ct=D.length,Rt=ct-1,_t=xt+1;xt<ct;xt++,Rt++,_t++)Rt===ct&&(Rt=0),_t===ct&&(_t=0),Mt[xt]=W(D[xt],D[Rt],D[_t]);vt.push(Mt),Gt=Gt.concat(Mt)}for(let it=0;it<g;it++){const ft=it/g,D=u*Math.cos(ft*Math.PI/2),xt=m*Math.sin(ft*Math.PI/2)+_;for(let ct=0,Rt=O.length;ct<Rt;ct++){const _t=B(O[ct],ht[ct],xt);nt(_t.x,_t.y,-D)}for(let ct=0,Rt=C.length;ct<Rt;ct++){const _t=C[ct];Mt=vt[ct];for(let Yt=0,It=_t.length;Yt<It;Yt++){const P=B(_t[Yt],Mt[Yt],xt);nt(P.x,P.y,-D)}}}const Kt=m+_;for(let it=0;it<V;it++){const ft=f?B(y[it],Gt[it],Kt):y[it];v?(E.copy(A.normals[0]).multiplyScalar(ft.x),S.copy(A.binormals[0]).multiplyScalar(ft.y),b.copy(x[0]).add(E).add(S),nt(b.x,b.y,b.z)):nt(ft.x,ft.y,0)}for(let it=1;it<=h;it++)for(let ft=0;ft<V;ft++){const D=f?B(y[ft],Gt[ft],Kt):y[ft];v?(E.copy(A.normals[it]).multiplyScalar(D.x),S.copy(A.binormals[it]).multiplyScalar(D.y),b.copy(x[it]).add(E).add(S),nt(b.x,b.y,b.z)):nt(D.x,D.y,d/h*it)}for(let it=g-1;it>=0;it--){const ft=it/g,D=u*Math.cos(ft*Math.PI/2),xt=m*Math.sin(ft*Math.PI/2)+_;for(let ct=0,Rt=O.length;ct<Rt;ct++){const _t=B(O[ct],ht[ct],xt);nt(_t.x,_t.y,d+D)}for(let ct=0,Rt=C.length;ct<Rt;ct++){const _t=C[ct];Mt=vt[ct];for(let Yt=0,It=_t.length;Yt<It;Yt++){const P=B(_t[Yt],Mt[Yt],xt);v?nt(P.x,P.y+x[h-1].y,x[h-1].x+D):nt(P.x,P.y,d+D)}}}Q(),dt();function Q(){const it=s.length/3;if(f){let ft=0,D=V*ft;for(let xt=0;xt<N;xt++){const ct=F[xt];Dt(ct[2]+D,ct[1]+D,ct[0]+D)}ft=h+g*2,D=V*ft;for(let xt=0;xt<N;xt++){const ct=F[xt];Dt(ct[0]+D,ct[1]+D,ct[2]+D)}}else{for(let ft=0;ft<N;ft++){const D=F[ft];Dt(D[2],D[1],D[0])}for(let ft=0;ft<N;ft++){const D=F[ft];Dt(D[0]+V*h,D[1]+V*h,D[2]+V*h)}}n.addGroup(it,s.length/3-it,0)}function dt(){const it=s.length/3;let ft=0;Nt(O,ft),ft+=O.length;for(let D=0,xt=C.length;D<xt;D++){const ct=C[D];Nt(ct,ft),ft+=ct.length}n.addGroup(it,s.length/3-it,1)}function Nt(it,ft){let D=it.length;for(;--D>=0;){const xt=D;let ct=D-1;ct<0&&(ct=it.length-1);for(let Rt=0,_t=h+g*2;Rt<_t;Rt++){const Yt=V*Rt,It=V*(Rt+1),P=ft+xt+Yt,T=ft+ct+Yt,$=ft+ct+It,tt=ft+xt+It;Vt(P,T,$,tt)}}}function nt(it,ft,D){l.push(it),l.push(ft),l.push(D)}function Dt(it,ft,D){wt(it),wt(ft),wt(D);const xt=s.length/3,ct=M.generateTopUV(n,s,xt-3,xt-2,xt-1);te(ct[0]),te(ct[1]),te(ct[2])}function Vt(it,ft,D,xt){wt(it),wt(ft),wt(xt),wt(ft),wt(D),wt(xt);const ct=s.length/3,Rt=M.generateSideWallUV(n,s,ct-6,ct-3,ct-2,ct-1);te(Rt[0]),te(Rt[1]),te(Rt[3]),te(Rt[1]),te(Rt[2]),te(Rt[3])}function wt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function te(it){o.push(it.x),o.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return uv(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Pl[s.type]().fromJSON(s)),new Qs(n,t.options)}}const hv={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ot(o,r),new ot(a,l),new ot(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[s*3],u=t[s*3+1],m=t[s*3+2],_=t[o*3],g=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new ot(r,1-l),new ot(c,1-d),new ot(f,1-m),new ot(_,1-p)]:[new ot(a,1-l),new ot(h,1-d),new ot(u,1-m),new ot(g,1-p)]}};function uv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class hn extends Wr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hn(t.radius,t.detail)}}class ic extends Wr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ic(t.radius,t.detail)}}class ko extends me{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const f=(e-t)/s,u=new I,m=new ot;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const p=o+g/n*r;u.x=d*Math.cos(p),u.y=d*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),m.x=(u.x/e+1)/2,m.y=(u.y/e+1)/2,h.push(m.x,m.y)}d+=f}for(let _=0;_<s;_++){const g=_*(n+1);for(let p=0;p<n;p++){const M=p+g,x=M,v=M+n+1,A=M+n+2,S=M+1;a.push(x,v,S),a.push(v,A,S)}}this.setIndex(a),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class sc extends me{constructor(t=new os([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(r,2));function c(h){const d=s.length/3,f=h.extractPoints(e);let u=f.shape;const m=f.holes;Zn.isClockWise(u)===!1&&(u=u.reverse());for(let g=0,p=m.length;g<p;g++){const M=m[g];Zn.isClockWise(M)===!0&&(m[g]=M.reverse())}const _=Zn.triangulateShape(u,m);for(let g=0,p=m.length;g<p;g++){const M=m[g];u=u.concat(M)}for(let g=0,p=u.length;g<p;g++){const M=u[g];s.push(M.x,M.y,0),o.push(0,0,1),r.push(M.x,M.y)}for(let g=0,p=_.length;g<p;g++){const M=_[g],x=M[0]+d,v=M[1]+d,A=M[2]+d;n.push(x,v,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return dv(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new sc(n,t.curveSegments)}}function dv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ye extends me{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],d=new I,f=new I,u=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let v=0;p===0&&r===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const S=A/e;d.x=-t*Math.cos(s+S*o)*Math.sin(r+x*a),d.y=t*Math.cos(r+x*a),d.z=t*Math.sin(s+S*o)*Math.sin(r+x*a),m.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),g.push(S+v,1-x),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const x=h[p][M+1],v=h[p][M],A=h[p+1][M],S=h[p+1][M+1];(p!==0||r>0)&&u.push(x,v,S),(p!==n-1||l<Math.PI)&&u.push(v,A,S)}this.setIndex(u),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class un extends me{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new I,d=new I,f=new I;for(let u=0;u<=n;u++)for(let m=0;m<=s;m++){const _=m/s*o,g=u/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(_),d.y=(t+e*Math.cos(g))*Math.sin(_),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let m=1;m<=s;m++){const _=(s+1)*u+m-1,g=(s+1)*(u-1)+m-1,p=(s+1)*(u-1)+m,M=(s+1)*u+m;r.push(_,g,M),r.push(g,p,M)}this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Jt extends ss{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cu,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class oc extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class od extends oc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ea=new de,_h=new I,vh=new I;class rd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yl,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_h.setFromMatrixPosition(t.matrixWorld),e.position.copy(_h),vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vh),e.updateMatrixWorld(),Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class fv extends rd{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ks*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class pv extends oc{constructor(t,e,n=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new fv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class mv extends rd{constructor(){super(new Gu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ad extends oc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new mv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=xh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function xh(){return performance.now()}const Mh=new de;class ld{constructor(t,e,n=0,s=1/0){this.ray=new Gr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ql,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Mh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mh),this}intersectObject(t,e=!0,n=[]){return Il(t,this,n,e),n.sort(yh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Il(t[s],this,n,e);return n.sort(yh),n}}function yh(i,t){return i.distance-t.distance}function Il(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)Il(o[r],t,e,!0)}}class bh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _v extends ns{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);const wh={type:"change"},rc={type:"start"},cd={type:"end"},pr=new Gr,Sh=new Ei,vv=Math.cos(70*Ji.DEG2RAD),ze=new I,an=2*Math.PI,be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ta=1e-6;class xv extends _v{constructor(t,e=null){super(t,e),this.state=be.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hs.ROTATE,MIDDLE:Hs.DOLLY,RIGHT:Hs.PAN},this.touches={ONE:ks.ROTATE,TWO:ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new En,this._lastTargetPosition=new I,this._quat=new En().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bh,this._sphericalDelta=new bh,this._scale=1,this._panOffset=new I,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new I,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yv.bind(this),this._onPointerDown=Mv.bind(this),this._onPointerUp=bv.bind(this),this._onContextMenu=Cv.bind(this),this._onMouseWheel=Ev.bind(this),this._onKeyDown=Tv.bind(this),this._onTouchStart=Av.bind(this),this._onTouchMove=Rv.bind(this),this._onMouseDown=wv.bind(this),this._onMouseMove=Sv.bind(this),this._interceptControlDown=Pv.bind(this),this._interceptControlUp=Lv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wh),this.update(),this.state=be.NONE}update(t=null){const e=this.object.position;ze.copy(e).sub(this.target),ze.applyQuaternion(this._quat),this._spherical.setFromVector3(ze),this.autoRotate&&this.state===be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(ze.setFromSpherical(this._spherical),ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=ze.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(pr.origin.copy(this.object.position),pr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pr.direction))<vv?this.object.lookAt(this.target):(Sh.setFromNormalAndCoplanarPoint(this.object.up,this.target),pr.intersectPlane(Sh,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ta||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ta||this._lastTargetPosition.distanceToSquared(this.target)>Ta?(this.dispatchEvent(wh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ze.setFromMatrixColumn(e,0),ze.multiplyScalar(-t),this._panOffset.add(ze)}_panUp(t,e){this.screenSpacePanning===!0?ze.setFromMatrixColumn(e,1):(ze.setFromMatrixColumn(e,0),ze.crossVectors(this.object.up,ze)),ze.multiplyScalar(t),this._panOffset.add(ze)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ze.copy(s).sub(this.target);let o=ze.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Mv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function yv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function bv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cd),this.state=be.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function wv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=be.DOLLY;break;case Hs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=be.ROTATE}break;case Hs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=be.PAN}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(rc)}function Sv(i){switch(this.state){case be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ev(i){this.enabled===!1||this.enableZoom===!1||this.state!==be.NONE||(i.preventDefault(),this.dispatchEvent(rc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(cd))}function Tv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Av(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ks.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=be.TOUCH_ROTATE;break;case ks.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=be.TOUCH_PAN;break;default:this.state=be.NONE}break;case 2:switch(this.touches.TWO){case ks.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=be.TOUCH_DOLLY_PAN;break;case ks.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=be.TOUCH_DOLLY_ROTATE;break;default:this.state=be.NONE}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(rc)}function Rv(i){switch(this._trackPointer(i),this.state){case be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=be.NONE}}function Cv(i){this.enabled!==!1&&i.preventDefault()}function Pv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Lv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}async function Dv(i){const t=await fetch(i);if(!t.ok)throw new Error(`Failed to load ${i}: ${t.status}`);return t.json()}class Iv{constructor(t){U(this,"n");U(this,"x");U(this,"z");U(this,"s");U(this,"length");U(this,"vtx");U(this,"vtz");const e=this.n=t.length/2;this.x=new Float64Array(e),this.z=new Float64Array(e),this.s=new Float64Array(e);for(let n=0;n<e;n++)this.x[n]=t[n*2],this.z[n]=t[n*2+1],n>0&&(this.s[n]=this.s[n-1]+Math.hypot(this.x[n]-this.x[n-1],this.z[n]-this.z[n-1]));this.length=this.s[e-1],this.vtx=new Float64Array(e),this.vtz=new Float64Array(e);for(let n=0;n<e;n++){const s=Math.max(0,n-1),o=Math.min(e-1,n+1),r=this.x[o]-this.x[s],a=this.z[o]-this.z[s],l=Math.hypot(r,a)||1;this.vtx[n]=r/l,this.vtz[n]=a/l}}segIndex(t){let e=0,n=this.n-2;for(;e<n;){const s=e+n+1>>1;this.s[s]<=t?e=s:n=s-1}return e}frame(t,e={x:0,z:0,tx:0,tz:1,nx:-1,nz:0}){const n=this.segIndex(t),s=(t-this.s[n])/(this.s[n+1]-this.s[n]||1);e.x=this.x[n]+(this.x[n+1]-this.x[n])*s,e.z=this.z[n]+(this.z[n+1]-this.z[n])*s;let o=this.vtx[n]+(this.vtx[n+1]-this.vtx[n])*s,r=this.vtz[n]+(this.vtz[n+1]-this.vtz[n])*s;const a=Math.hypot(o,r)||1;return o/=a,r/=a,e.tx=o,e.tz=r,e.nx=-r,e.nz=o,e}point(t,e){const n=this.frame(t);return[n.x+n.nx*e,n.z+n.nz*e]}project(t,e,n=-1){let s,o;if(n>=0){const h=this.segIndex(n);s=Math.max(0,h-60),o=Math.min(this.n-2,h+60)}else{let h=1/0,d=0;for(let f=0;f<this.n;f+=8){const u=(t-this.x[f])**2+(e-this.z[f])**2;u<h&&(h=u,d=f)}s=Math.max(0,d-24),o=Math.min(this.n-2,d+24)}let r=1/0,a=0,l=1;for(let h=s;h<=o;h++){const d=this.x[h],f=this.z[h],u=this.x[h+1]-d,m=this.z[h+1]-f,_=u*u+m*m||1e-9;let g=((t-d)*u+(e-f)*m)/_;g=g<0?0:g>1?1:g;const p=d+u*g,M=f+m*g,x=(t-p)**2+(e-M)**2;x<r&&(r=x,a=this.s[h]+Math.sqrt(_)*g,l=(t-d)*-m+(e-f)*u>=0?1:-1)}const c=Math.sqrt(r);return{s:a,d:c*l,dist:c}}}function $n(i,t,e=0){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const Eh=i=>i*i*(3-2*i);function Uv(i,t,e=0){const n=Math.floor(i),s=Math.floor(t),o=Eh(i-n),r=Eh(t-s),a=$n(n,s,e),l=$n(n+1,s,e),c=$n(n,s+1,e),h=$n(n+1,s+1,e);return(a+(l-a)*o+(c-a)*r+(a-l-c+h)*o*r)*2-1}function Ri(i,t,e=4,n=0){let s=0,o=.5,r=1;for(let a=0;a<e;a++)s+=o*Uv(i*r,t*r,n+a*17),o*=.5,r*=2.03;return s}function Ii(i){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Ee=(i,t,e)=>i<t?t:i>e?e:i,Is=(i,t,e)=>i+(t-i)*e,Ne=(i,t,e)=>{const n=Ee((e-i)/(t-i),0,1);return n*n*(3-2*n)},Vn=5.2,Ai=2.2,Ul=3.1,Nv=1.6,kv=15,mr=22*4.4,Ov=.8,Fv=7,zv=3,Bv=.04,Th=.08;class Hv{constructor(t,e,n,s=[],o=0){U(this,"bodies",[]);U(this,"gates",[]);U(this,"groups",[]);U(this,"events",[]);U(this,"hwTable");U(this,"hwStep",.5);U(this,"overflowCooldown",0);this.length=n,this.windingHoles=s;const r=[];for(const f of[...t].sort((u,m)=>u.s0-m.s0)){const u=r.at(-1);u&&Math.abs(u.at(-1).s1-f.s0)<4?u.push(f):r.push([f])}let a=o,l=0,c=0;for(const f of r){const u=f.length>1,m=u?Gv(f):f[0].name;this.bodies.push({kind:"pound",s0:l,s1:f[0].s0,level:a,lo:a,hi:a,label:"the canal"});const _={name:m,staircase:u,gates:[],bodies:[this.bodies.length-1]};this.groups.push(_);for(let g=0;g<f.length;g++){const p=f[g],M=g===0?p.s0:f[g-1].s1,x=a,v=a+p.rise,A=u?g>0:c++%2===1,S=u?`chamber ${g+1}`:"the lock";this.bodies.push({kind:"chamber",s0:M,s1:p.s1,level:A?v:x,lo:x,hi:v,lockName:m,label:S}),_.bodies.push(this.bodies.length-1),a=v}l=f.at(-1).s1;for(let g=0;g<=f.length;g++){const p=this.bodies.length-1-f.length+g,M=g===0?"bottom gates":g===f.length?"top gates":f.length===2?"middle gates":f.length===3?`middle gates (${g===1?"lower":"upper"})`:`middle gates ${g}`,x={s:g===0?f[0].s0:f[g-1].s1,below:p,above:p+1,open:0,wantOpen:!1,paddle:0,wantPaddle:!1,flow:0,lockName:m,label:M,group:_};this.gates.push(x),_.gates.push(x)}_.bodies.push(this.bodies.length)}this.bodies.push({kind:"pound",s0:l,s1:n,level:a,lo:a,hi:a,label:"the canal"});const h=Math.ceil(n/this.hwStep)+1;this.hwTable=new Float32Array(h);const d=e.filter(f=>f.kind==="road"&&f.w<12);for(let f=0;f<h;f++){const u=f*this.hwStep;let m=Vn;for(const _ of this.bodies){if(_.kind!=="chamber")continue;const g=Math.max(_.s0-u,u-_.s1,0);m=Math.min(m,Ai+(Vn-Ai)*Ne(.5,9,g))}for(const _ of d){const g=Math.max(Math.abs(u-_.s)-_.w/2-3.5,0);m=Math.min(m,Ul+(Vn-Ul)*Ne(0,7,g))}for(const _ of s){const g=Math.abs(u-_);g<40&&(m=Math.max(m,Vn+(kv-Vn)*Ne(40,16,g)))}this.hwTable[f]=m}}bodyIndexAt(t){for(let e=0;e<this.bodies.length;e++)if(t<this.bodies[e].s1)return e;return this.bodies.length-1}levelAt(t){return this.bodies[this.bodyIndexAt(t)].level}bedAt(t){return this.bodies[this.bodyIndexAt(t)].lo-Nv}halfWidthAt(t){const e=Ee(t/this.hwStep,0,this.hwTable.length-1),n=Math.floor(e),s=e-n,o=this.hwTable[n],r=this.hwTable[Math.min(n+1,this.hwTable.length-1)];return o+(r-o)*s}levelsMatch(t){return Math.abs(this.bodies[t.below].level-this.bodies[t.above].level)<Bv}openBlocker(t){return this.levelsMatch(t)?null:`The water's ${Math.abs(this.bodies[t.below].level-this.bodies[t.above].level).toFixed(1)} m higher on one side, so the gates won't budge. Raise the paddles first.`}toggleGate(t,e){if(t.wantOpen)return e?"The boat's in the way of the gates.":(t.wantOpen=!1,null);const n=this.openBlocker(t);return n||(t.wantOpen=!0,null)}togglePaddle(t){t.wantPaddle=!t.wantPaddle}gateBlocks(t){return t.open<.97}update(t){this.overflowCooldown-=t;for(const n of this.gates)n.open=Ee(n.open+(n.wantOpen?1:-1)*(t/Fv),0,1),n.paddle=Ee(n.paddle+(n.wantPaddle?1:-1)*(t/zv),0,1);const e=this.bodies.map(n=>n.kind==="chamber"?n.lo:-1/0);for(let n=!0;n;){n=!1;for(const s of this.gates){if(s.open<=.02)continue;const o=Math.max(e[s.below],e[s.above]);(e[s.below]!==o||e[s.above]!==o)&&(e[s.below]=e[s.above]=o,n=!0)}}for(const n of this.gates){const s=Ov*n.paddle+(n.open>.02?40*n.open:0),o=this.bodies[n.below],a=this.bodies[n.above].level-o.level;if(n.flow=0,s<=0||Math.abs(a)<1e-5)continue;const[l,c]=a>0?[n.above,n.below]:[n.below,n.above],h=this.bodies[l],d=this.bodies[c],f=h.kind==="chamber",u=d.kind==="chamber";if(!f&&!u)continue;let m=s*Math.sqrt(2*9.81*Math.abs(a))*t;f&&(m=Math.min(m,Math.max(0,h.level-e[l])*mr)),m=Math.min(m,Math.abs(a)*mr/(f&&u?2:1)),!(m<=0)&&(f&&(h.level-=m/mr),u&&(d.level+=m/mr),n.flow=Math.sign(a)*(m/t))}this.bodies.forEach((n,s)=>{if(n.kind!=="chamber"||n.level<=n.hi+Th||(n.level=n.hi+Th,this.overflowCooldown>0))return;const o=this.gates.find(l=>l.paddle>.05&&(l.below===s&&this.bodies[l.above].level>n.level||l.above===s&&this.bodies[l.below].level>n.level)),r=this.gates.find(l=>l.below===s||l.above===s).group,a=r.staircase?`${n.label} of ${r.name}`:r.name;this.events.push({text:o?`${Ah(a)} is overflowing: the paddles on the ${o.label} are still up.`:`${Ah(a)} is overflowing!`,kind:"warn",group:r}),this.overflowCooldown=12})}}const Ah=i=>i[0].toUpperCase()+i.slice(1);function Gv(i){const t=i[0].name.split(" ")[0];return i.every(e=>e.name.startsWith(t))?`${t} Staircase`:`${i[0].name} flight`}const Vv=2,Aa=1.1,Rh=44,gr=8,Wv=.8,oe=1,ln={bed:new Ht("#2a2f24"),wallStone:new Ht("#77706a"),wallSandstone:new Ht("#9b5644"),coping:new Ht("#bdb3a3"),towpath:new Ht("#b59d78"),grass:new Ht("#6f9a4c"),grassDark:new Ht("#5c8a42"),field:new Ht("#86a85a"),paved:new Ht("#8f8b84"),park:new Ht("#5e9445")};class Xv{constructor(t,e,n){U(this,"bank");U(this,"smoothBank");U(this,"bankStep",2);U(this,"riverLevel");U(this,"riverDist",null);U(this,"riverGrid",{x0:0,z0:0,w:0,h:0,cell:20});U(this,"urbanAt",()=>0);U(this,"parkAt",()=>!1);U(this,"embankments",[]);U(this,"cuttings",[]);this.route=t,this.ww=e,this.bounds=n;const s=Math.ceil(t.length/this.bankStep)+1,o=new Float32Array(s);for(let r=0;r<s;r++){const a=r*this.bankStep;let l=-1/0;for(const c of e.bodies)c.s1>a-4&&c.s0<a+4&&(l=Math.max(l,c.hi));o[r]=l+Wv}this.bank=o,this.smoothBank=Ph(Ph(o,15),15),this.riverLevel=e.bodies[0].lo-6}bankTop(t){return Ch(this.bank,t/this.bankStep)}setRivers(t){const{bounds:e}=this,n=this.riverGrid.cell,s=Math.ceil((e.x1-e.x0)/n)+1,o=Math.ceil((e.z1-e.z0)/n)+1;this.riverGrid={x0:e.x0,z0:e.z0,w:s,h:o,cell:n};const r=new Float32Array(s*o).fill(1e9);for(const a of t)for(let l=0;l+3<a.p.length;l+=2){const c=a.p[l],h=a.p[l+1],d=a.p[l+2],f=a.p[l+3],u=120,m=Math.max(0,Math.floor((Math.min(c,d)-u-e.x0)/n)),_=Math.min(s-1,Math.ceil((Math.max(c,d)+u-e.x0)/n)),g=Math.max(0,Math.floor((Math.min(h,f)-u-e.z0)/n)),p=Math.min(o-1,Math.ceil((Math.max(h,f)+u-e.z0)/n));for(let M=g;M<=p;M++)for(let x=m;x<=_;x++){const v=qv(e.x0+x*n,e.z0+M*n,c,h,d,f)-a.w/2;v<r[M*s+x]&&(r[M*s+x]=v)}}this.riverDist=r}riverDistAt(t,e){if(!this.riverDist)return 1e9;const n=this.riverGrid,s=Ee((t-n.x0)/n.cell,0,n.w-1.001),o=Ee((e-n.z0)/n.cell,0,n.h-1.001),r=Math.floor(s),a=Math.floor(o),l=s-r,c=o-a,h=this.riverDist;return Is(Is(h[a*n.w+r],h[a*n.w+r+1],l),Is(h[(a+1)*n.w+r],h[(a+1)*n.w+r+1],l),c)}cliffSide(t,e){return this.cuttings.some(n=>n.side===e&&t>n.s0-25&&t<n.s1+25)}cuttingAt(t,e){for(const n of this.cuttings){if(t<n.s0-40||t>n.s1+40)continue;const s=Ne(n.s0-30,n.s0+15,t)*(1-Ne(n.s1-15,n.s1+30,t)),o=this.ww.halfWidthAt(t),r=Math.abs(e);if(Math.sign(e)===n.side){const l=Ne(o+3.3,o+6.2,r);return{h:n.cliff*l*s,cliff:s*(r>o+3.2&&r<o+6.5?1:0)}}const a=Ne(o+3.6,o+16,r);return{h:n.far*a*s,cliff:s*(a>.05&&a<.6?.7:0)}}return{h:0,cliff:0}}landHeight(t,e,n,s){const o=this.ww.halfWidthAt(n),r=Math.abs(s);let a=Is(this.bankTop(n),Ch(this.smoothBank,n/this.bankStep),Ne(o+3,o+24,r));const l=Ne(o+6,140,r);a+=Ri(t*.004,e*.004,3,7)*3.5*l+Ri(t*.03,e*.03,2,3)*.35*Ne(o+3,o+12,r);const c=this.riverDistAt(t,e);c<40&&(a=Is(this.riverLevel-1.5,a,Ne(-2,40,c))),a+=this.cuttingAt(n,s).h;for(const h of this.embankments){const d=t-h.x,f=e-h.z;if(Math.abs(d)+Math.abs(f)>h.halfSpan+60)continue;const u=Math.abs(d*h.ux+f*h.uz),m=Math.abs(-d*h.uz+f*h.ux),_=Ne(h.halfWidth+5,h.halfWidth,m);if(_<=0)continue;const g=h.deck-.15-Math.max(0,u-h.halfSpan*.9)/10;g>a&&(a=a+(g-a)*_)}return a}heightAt(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s);return n.dist<s?this.ww.bedAt(n.s):this.landHeight(t,e,n.s,n.d)}buildStrip(){const{route:t,ww:e}=this,n=[];for(let m=0;m<t.length;m+=Vv)n.push(m);n.push(t.length);for(const m of e.gates)n.push(m.s-.05,m.s+.05,m.s+Aa-.05,m.s+Aa+.05);n.sort((m,_)=>m-_);const s=n.length,o=m=>[[0,"bed"],[m-.8,"bed"],[m,"wallBase"],[m,"wallTop"],[m+.5,"coping"],[m+.55,"path"],[m+2.6,"path"],[m+3.4,"land"],[m+6.3,"land"],[m+7,"land"],[Math.max(14,m+9),"land"],[Math.max(22,m+15),"land"],[Math.max(32,m+24),"land"],[Math.max(Rh,m+34),"land"]],r=o(Vn).length,a=r*2-1,l=new Float32Array(s*a*3),c=new Float32Array(s*a*3),h={x:0,z:0,tx:0,tz:0,nx:0,nz:0},d=new Ht;for(let m=0;m<s;m++){const _=n[m];t.frame(_,h);const g=e.halfWidthAt(_),p=this.bankTop(_),M=e.gates.find(E=>_>=E.s&&_<E.s+Aa),x=e.bedAt(M?M.s-.01:_),v=e.bodies[e.bodyIndexAt(_)].kind==="chamber"||g<Vn-.5,A=$v(t,_),S=o(g);for(let E=0;E<a;E++){const b=E<r-1?-1:1,w=b<0?r-1-E:E-(r-1);let[y,C]=S[w];C==="land"&&Math.abs(A)>1e-4&&Math.sign(A)===b&&(y=Math.min(y,Math.max(g+3.6,.8/Math.abs(A))));const k=h.x+h.nx*y*b,F=h.z+h.nz*y*b,O=b===oe||v;let B;switch(C){case"bed":B=x,d.copy(ln.bed);break;case"wallBase":B=x+.2,d.copy(v?ln.wallSandstone:ln.wallStone);break;case"wallTop":B=p,d.copy(v?ln.wallSandstone:ln.wallStone);break;case"coping":B=p+.04,d.copy(ln.coping);break;case"path":B=p,d.copy(O?ln.towpath:ln.grassDark);break;default:B=this.landHeight(k,F,_,y*b),this.groundColour(k,F,_,y*b,d)}C==="path"&&O&&d.offsetHSL(0,0,($n(m,E,5)-.5)*.04);const V=(m*a+E)*3;l[V]=k,l[V+1]=B,l[V+2]=F,c[V]=d.r,c[V+1]=d.g,c[V+2]=d.b}}const f=Lh(l,c,s,a,!0),u=new J(f,Ih());return u.receiveShadow=!0,u.name="strip",u}buildFar(){const{bounds:t,route:e,ww:n}=this,s=Math.ceil((t.x1-t.x0)/gr)+1,o=Math.ceil((t.z1-t.z0)/gr)+1,r=new Float32Array(s*o*3),a=new Float32Array(s*o*3),l=new Ht;let c=-1;for(let f=0;f<o;f++)for(let u=0;u<s;u++){const m=t.x0+u*gr,_=t.z0+f*gr,g=e.project(m,_,c),p=g.dist>150?e.project(m,_):g;c=p.dist<150?p.s:-1;const M=n.halfWidthAt(p.s);let x;p.dist<M+14?x=n.bedAt(p.s)-3:p.dist<Rh?x=this.landHeight(m,_,p.s,p.d)-.15:x=this.landHeight(m,_,p.s,p.d),this.groundColour(m,_,p.s,p.d,l);const v=(f*s+u)*3;r[v]=m,r[v+1]=x,r[v+2]=_,a[v]=l.r,a[v+1]=l.g,a[v+2]=l.b}const h=Lh(r,a,o,s),d=new J(h,Ih());return d.receiveShadow=!0,d.name="far-terrain",d}groundColour(t,e,n,s,o){const r=Math.abs(s),a=Math.floor(t/150+Ri(t*.01,e*.01,2,1)*.6),l=Math.floor(e/130+Ri(t*.01,e*.01,2,2)*.6),c=$n(a,l,11);o.copy(ln.grass).lerp(ln.field,c*.8),o.offsetHSL(0,0,($n(Math.floor(t/4),Math.floor(e/4),3)-.5)*.035),this.parkAt(t,e)&&o.lerp(ln.park,.7);const h=this.urbanAt(t,e)*Ne(8,20,r);o.lerp(ln.paved,h*.85);const d=this.riverDistAt(t,e);d<12&&o.lerp(ln.bed,Ne(12,0,d)*.5);const f=this.cuttingAt(n,s);f.cliff>0&&o.lerp(ln.wallSandstone,f.cliff).offsetHSL(0,0,($n(Math.floor(t/2),Math.floor(e/3),8)-.5)*.06)}}function $v(i,t){const e=i.frame(Math.max(0,t-8)),n=i.frame(Math.min(i.length,t+8)),s=n.tx-e.tx,o=n.tz-e.tz,r=i.frame(t);return(s*r.nx+o*r.nz)/16}function Ch(i,t){t=Ee(t,0,i.length-1);const e=Math.floor(t);return Is(i[e],i[Math.min(e+1,i.length-1)],t-e)}function Ph(i,t){const e=new Float32Array(i.length);for(let n=0;n<i.length;n++){let s=0,o=0;for(let r=-t;r<=t;r++){const a=n+r;a>=0&&a<i.length&&(s+=i[a],o++)}e[n]=s/o}return e}function qv(i,t,e,n,s,o){const r=s-e,a=o-n,l=Ee(((i-e)*r+(t-n)*a)/(r*r+a*a||1),0,1);return Math.hypot(i-e-r*l,t-n-a*l)}function Lh(i,t,e,n,s=!1){const o=new Uint32Array((e-1)*(n-1)*6);let r=0;for(let l=0;l<e-1;l++)for(let c=0;c<n-1;c++){const h=l*n+c,d=h+1,f=h+n,u=f+1;s?(o[r++]=h,o[r++]=d,o[r++]=f,o[r++]=d,o[r++]=u,o[r++]=f):(o[r++]=h,o[r++]=f,o[r++]=d,o[r++]=d,o[r++]=f,o[r++]=u)}const a=new me;return a.setAttribute("position",new ke(i,3)),a.setAttribute("color",new ke(t,3)),a.setIndex(new ke(o,1)),a.computeVertexNormals(),a}let Dh=null;function Ih(){return Dh??(Dh=new Jt({vertexColors:!0,roughness:.95,flatShading:!0})),Dh}function Yv(i=256){const t=new Float32Array(i*i),e=8;for(let r=0;r<i;r++)for(let a=0;a<i;a++){const l=a/i*e,c=r/i*e;t[r*i+a]=Uh(l,c,e)*.6+Uh(l*2,c*2,e*2)*.3}const n=new ImageData(i,i);for(let r=0;r<i;r++)for(let a=0;a<i;a++){const l=t[r*i+(a-1+i)%i],c=t[r*i+(a+1)%i],h=t[(r-1+i)%i*i+a],d=t[(r+1)%i*i+a],f=(l-c)*3,u=(h-d)*3,m=1,_=Math.hypot(f,u,m),g=(r*i+a)*4;n.data[g]=(f/_*.5+.5)*255,n.data[g+1]=(u/_*.5+.5)*255,n.data[g+2]=(m/_*.5+.5)*255,n.data[g+3]=255}const s=document.createElement("canvas");s.width=s.height=i,s.getContext("2d").putImageData(n,0,0);const o=new On(s);return o.wrapS=o.wrapT=Ys,o}function Uh(i,t,e){const n=i/e,s=t/e,o=Ri(i,t,3,2),r=Ri(i-e,t,3,2),a=Ri(i,t-e,3,2),l=Ri(i-e,t-e,3,2);return(o*(1-n)+r*n)*(1-s)+(a*(1-n)+l*n)*s}class jv{constructor(t,e){U(this,"group",new At);U(this,"material");U(this,"normalMap");U(this,"chamberMeshes",[]);this.route=t,this.ww=e,this.normalMap=Yv(),this.material=new Jt({color:"#3d5c47",roughness:.12,metalness:0,normalMap:this.normalMap,normalScale:new ot(.28,.28),transparent:!0,opacity:.93,envMapIntensity:.9}),e.bodies.forEach((n,s)=>{const o=this.ribbon(n.s0-.15,n.s1+.15),r=new J(o,this.material);r.position.y=n.level,r.receiveShadow=!0,this.group.add(r),n.kind==="chamber"&&this.chamberMeshes.push({mesh:r,body:s})})}ribbon(t,e){const{route:n,ww:s}=this;t=Math.max(0,t),e=Math.min(n.length,e);const o=Math.max(2,Math.ceil((e-t)/1.5)+1),r=[],a=[],l=[];for(let h=0;h<o;h++){const d=t+(e-t)*h/(o-1),f=n.frame(d),u=s.halfWidthAt(d)+.12;for(const m of[-1,1]){const _=f.x+f.nx*u*m,g=f.z+f.nz*u*m;r.push(_,0,g),a.push(_/7,g/7)}if(h>0){const m=(h-1)*2;l.push(m,m+1,m+2,m+1,m+3,m+2)}}const c=new me;return c.setAttribute("position",new qt(r,3)),c.setAttribute("uv",new qt(a,2)),c.setIndex(l),c.computeVertexNormals(),c}addRivers(t,e){for(const n of t){const s=[],o=[],r=[],a=n.p.length/2;for(let h=0;h<a;h++){const d=Math.max(0,h-1),f=Math.min(a-1,h+1);let u=n.p[f*2]-n.p[d*2],m=n.p[f*2+1]-n.p[d*2+1];const _=Math.hypot(u,m)||1;u/=_,m/=_;for(const g of[-1,1]){const p=n.p[h*2]-m*(n.w/2)*g,M=n.p[h*2+1]+u*(n.w/2)*g;s.push(p,e,M),o.push(p/7,M/7)}if(h>0){const g=(h-1)*2;r.push(g,g+2,g+1,g+1,g+2,g+3)}}const l=new me;l.setAttribute("position",new qt(s,3)),l.setAttribute("uv",new qt(o,2)),l.setIndex(r),l.computeVertexNormals();const c=this.material.clone();c.side=Ae,c.color.set("#4a6a5c"),this.group.add(new J(l,c))}}addPond(t,e){const n=new os;for(let l=0;l<t.length;l+=2)(l?n.lineTo:n.moveTo).call(n,t[l],-t[l+1]);const s=new sc(n);s.rotateX(-Math.PI/2);const o=s.getAttribute("position"),r=s.getAttribute("uv");for(let l=0;l<o.count;l++)r.setXY(l,o.getX(l)/7,o.getZ(l)/7);const a=new J(s,this.material);a.position.y=e,this.group.add(a)}update(t){this.normalMap.offset.x+=t*.012,this.normalMap.offset.y+=t*.007;for(const e of this.chamberMeshes)e.mesh.position.y=this.ww.bodies[e.body].level}}const Do=["brick","brickDark","render","whiteRender","tudor","sandstone","warehouse","modern","gothic","tower","shed","white"],fe={house:0,shop:1,upper:2,plain:3},Ln=128,Nl=4,_r=3,Zv=3.6,Kv=3.1;function Ra(i,t,e,n,s,o,r,a=.08){i.fillStyle=o,i.fillRect(t,e,n,s);for(let l=0;l*6<s;l++)for(let c=-1;c*14<n;c++){const h=t+c*14+l%2*7,d=e+l*6,f=1+Math.sin(l*12.9+c*78.2)*.5*a*2;i.fillStyle=Io(o,f),i.fillRect(h+1,d+1,12,4)}i.fillStyle=r,i.globalAlpha=.25;for(let l=e;l<e+s;l+=6)i.fillRect(t,l,n,1);i.globalAlpha=1}function Io(i,t){const e=new Ht(i);return e.multiplyScalar(t),`#${e.getHexString()}`}function Ca(i,t,e,n,s,o="#f4f1e8",r="#d9cfbd"){const a=t-n/2;i.fillStyle=r,i.fillRect(a-4,e-7,n+8,6),i.fillRect(a-3,e+s,n+6,4),i.fillStyle=o,i.fillRect(a,e,n,s);const l=i.createLinearGradient(0,e,0,e+s);l.addColorStop(0,"#5d7486"),l.addColorStop(1,"#22303b"),i.fillStyle=l,i.fillRect(a+4,e+4,n-8,s/2-5),i.fillRect(a+4,e+s/2+1,n-8,s/2-5),i.fillStyle=o,i.fillRect(t-1,e+4,2,s-8)}function Jv(i,t,e,n,s,o){i.fillStyle="#e9e2d2",i.fillRect(t-3,e-s-4,n+6,s+4),i.fillStyle=o,i.fillRect(t,e-s,n,s),i.fillStyle="#2a3640",i.beginPath(),i.arc(t+n/2,e-s,n/2,Math.PI,0),i.fill(),i.fillStyle="#c9a24a",i.fillRect(t+n-8,e-s/2,3,3)}function Nh(i,t,e,n,s,o){i.fillStyle=o,i.fillRect(t+2,e+18,n-4,16),i.fillStyle="#f2e6c4",i.globalAlpha=.85,i.fillRect(t+14,e+23,n-28,5),i.globalAlpha=1,i.fillStyle=Io(o,.8),i.fillRect(t+4,e+36,n-8,s-38);const r=i.createLinearGradient(0,e+40,0,e+s);r.addColorStop(0,"#6c8596"),r.addColorStop(1,"#2b3943"),i.fillStyle=r,i.fillRect(t+9,e+40,n-18,s-58),i.fillStyle=Io(o,.8),i.fillRect(t+n/2-2,e+40,4,s-58)}function Pa(i,t,e,n,s,o="#2b3943",r="#d9cfbd"){i.fillStyle=r,i.beginPath(),i.moveTo(t-n/2-3,e+s+3),i.lineTo(t-n/2-3,e+n/2),i.arc(t,e+n/2,n/2+3,Math.PI,0),i.lineTo(t+n/2+3,e+s+3),i.fill(),i.fillStyle=o,i.beginPath(),i.moveTo(t-n/2,e+s),i.lineTo(t-n/2,e+n/2),i.arc(t,e+n/2,n/2,Math.PI,0),i.lineTo(t+n/2,e+s),i.fill()}function Qv(i,t,e,n,s){i.fillStyle="#d6b49a",i.beginPath(),i.moveTo(t-n/2-4,e+s+4),i.lineTo(t-n/2-4,e+n),i.quadraticCurveTo(t-n/2-4,e-6,t,e-10),i.quadraticCurveTo(t+n/2+4,e-6,t+n/2+4,e+n),i.lineTo(t+n/2+4,e+s+4),i.fill(),i.fillStyle="#2a3440",i.beginPath(),i.moveTo(t-n/2,e+s),i.lineTo(t-n/2,e+n),i.quadraticCurveTo(t-n/2,e,t,e-4),i.quadraticCurveTo(t+n/2,e,t+n/2,e+n),i.lineTo(t+n/2,e+s),i.fill(),i.fillStyle="#8a6a55",i.fillRect(t-1,e,2,s)}function tx(i,t,e,n,s){const o=Ln,r=["#1f4d3a","#7a1f2b","#1d3557","#2b2b2b","#5a3d1e"],a=r[Do.indexOf(t)%r.length];switch(t){case"brick":case"brickDark":case"render":case"whiteRender":{const l={brick:"#a2513f",brickDark:"#7d3f31",render:"#e6dcc8",whiteRender:"#f1ede4"}[t];t.startsWith("brick")?Ra(i,n,s,o,o,l,"#d8cdb8"):(i.fillStyle=l,i.fillRect(n,s,o,o)),e===fe.upper?Ca(i,n+o/2,s+30,46,66):e===fe.house?(Jv(i,n+18,s+o-6,34,78,["#1f4d3a","#7a1f2b","#1d3557","#2b2b2b"][n/o%4|0]),Ca(i,n+92,s+38,40,58)):e===fe.shop&&Nh(i,n,s,o,o,a),i.fillStyle=Io(l,.75),i.fillRect(n,s+o-4,o,4);break}case"tudor":{i.fillStyle="#f4f1ea",i.fillRect(n,s,o,o),i.fillStyle="#1e1b19";for(const l of[0,60,120])i.fillRect(n+l,s,8,o);if(i.fillRect(n,s+4,o,7),i.fillRect(n,s+o-10,o,8),e===fe.upper){i.lineWidth=6,i.strokeStyle="#1e1b19",i.beginPath(),i.moveTo(n+8,s+o-10),i.lineTo(n+30,s+70),i.moveTo(n+120,s+o-10),i.lineTo(n+98,s+70),i.stroke(),i.fillStyle="#2a3440",i.fillRect(n+30,s+22,68,42),i.strokeStyle="#8a8d8a",i.lineWidth=1;for(let l=0;l<9;l++)i.beginPath(),i.moveTo(n+30+l*9,s+22),i.lineTo(n+30+l*9-20,s+64),i.stroke()}else e!==fe.plain&&Nh(i,n+8,s+10,o-16,o-18,"#1e1b19");break}case"sandstone":case"gothic":case"tower":{const l=t==="tower"?"#7d3f31":"#b5735a";if(t==="tower")Ra(i,n,s,o,o,l,"#c8b8a0");else{i.fillStyle=l,i.fillRect(n,s,o,o),i.strokeStyle=Io(l,.82),i.lineWidth=1;for(let c=0;c*16<o;c++){i.beginPath(),i.moveTo(n,s+c*16),i.lineTo(n+o,s+c*16),i.stroke();for(let h=0;h*32<o;h++){const d=n+h*32+c%2*16;i.beginPath(),i.moveTo(d,s+c*16),i.lineTo(d,s+c*16+16),i.stroke()}}}if(e===fe.plain)break;t==="gothic"?Qv(i,n+o/2,s+24,40,96):t==="tower"?(i.fillStyle="#1f2730",i.fillRect(n+o/2-5,s+40,10,34)):Ca(i,n+o/2,s+34,40,60,"#e9e2d2","#c49a80");break}case"warehouse":{if(Ra(i,n,s,o,o,"#80402f","#c9b8a0"),e===fe.plain)break;e===fe.upper?(Pa(i,n+36,s+34,30,52),Pa(i,n+92,s+34,30,52)):Pa(i,n+o/2,s+26,62,o-30,"#2e3b2c");break}case"modern":{i.fillStyle="#b9bcbf",i.fillRect(n,s,o,o),i.fillStyle="#a6a9ad";for(let c=0;c<o;c+=32)i.fillRect(n+c,s,2,o);if(e===fe.plain)break;const l=i.createLinearGradient(0,s+26,0,s+100);l.addColorStop(0,"#7f97a8"),l.addColorStop(1,"#30404c"),i.fillStyle=l,i.fillRect(n,s+(e===fe.upper?28:18),o,e===fe.upper?62:104),i.fillStyle="#d6d8da";for(let c=0;c<o;c+=32)i.fillRect(n+c,s+18,3,110);break}case"shed":{i.fillStyle="#7b7f78",i.fillRect(n,s,o,o),i.fillStyle="#6c706a";for(let l=0;l<o;l+=8)i.fillRect(n+l,s,3,o);break}case"white":i.fillStyle="#ffffff",i.fillRect(n,s,o,o);break}}let La=null;function ex(){if(La)return La.material;const i=document.createElement("canvas");i.width=Ln*Nl,i.height=Ln*Do.length;const t=i.getContext("2d");Do.forEach((s,o)=>{for(let r=0;r<Nl;r++)tx(t,s,r,r*Ln,o*Ln)});const e=new On(i);e.colorSpace=Pe,e.anisotropy=4;const n=new Jt({map:e,vertexColors:!0,roughness:.88});return n.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 cell;
varying vec4 vCell;
varying vec2 vRep;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vCell = cell;
vRep = uv;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vCell;
varying vec2 vRep;`).replace("#include <map_fragment>",`// repeat this wall's atlas cell; gradients from the unwrapped coords avoid seams
        vec2 cellUv = vCell.xy + fract(vRep) * vCell.zw;
        vec4 sampledDiffuseColor = textureGrad(map, cellUv, dFdx(vRep) * vCell.zw, dFdy(vRep) * vCell.zw);
        diffuseColor *= sampledDiffuseColor;`)},La={texture:e,material:n},n}function Cs(i,t){const e=Do.indexOf(i),n=Ln*Nl,s=Ln*Do.length,o=(t*Ln+_r)/n,r=(Ln-2*_r)/n,a=1-((e+1)*Ln-_r)/s,l=(Ln-2*_r)/s;return[o,a,r,l]}const Da={slate:["#4d525b","#585d66","#43474f"],tile:["#7d3d30","#8a4a37"],flat:["#6a6a68","#757370"]},Ia=(i,t)=>i[Math.floor(t*i.length)%i.length];class nx{constructor(t){U(this,"cell",3);U(this,"w");U(this,"h");U(this,"data");this.b=t,this.w=Math.ceil((t.x1-t.x0)/this.cell),this.h=Math.ceil((t.z1-t.z0)/this.cell),this.data=new Uint8Array(this.w*this.h)}mark(t,e,n){const s=this.cell;for(let o=Math.floor((e-n-this.b.z0)/s);o<=Math.floor((e+n-this.b.z0)/s);o++)for(let r=Math.floor((t-n-this.b.x0)/s);r<=Math.floor((t+n-this.b.x0)/s);r++)r>=0&&o>=0&&r<this.w&&o<this.h&&(this.data[o*this.w+r]=1)}markPolygon(t){let e=1/0,n=-1/0,s=1/0,o=-1/0;for(let a=0;a<t.length;a+=2)e=Math.min(e,t[a]),n=Math.max(n,t[a]),s=Math.min(s,t[a+1]),o=Math.max(o,t[a+1]);const r=this.cell;for(let a=s-r;a<=o+r;a+=r)for(let l=e-r;l<=n+r;l+=r)ac(l,a,t)&&this.mark(l,a,2)}used(t,e){const n=Math.floor((t-this.b.x0)/this.cell),s=Math.floor((e-this.b.z0)/this.cell);return n<0||s<0||n>=this.w||s>=this.h||this.data[s*this.w+n]===1}}function ac(i,t,e){let n=!1;for(let s=0,o=e.length-2;s<e.length;o=s,s+=2){const r=e[s],a=e[s+1],l=e[o],c=e[o+1];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function ix(i,t){const n=Math.ceil((t.x1-t.x0)/30)+1,s=Math.ceil((t.z1-t.z0)/30)+1,o=new Float32Array(n*s);for(const a of i){let l=0,c=0,h=0;const d=a.p,f=d.length/2;for(let _=0;_<f;_++){const g=(_+1)%f;l+=d[_*2]*d[g*2+1]-d[g*2]*d[_*2+1],c+=d[_*2]/f,h+=d[_*2+1]/f}const u=Math.floor((c-t.x0)/30),m=Math.floor((h-t.z0)/30);u>=0&&m>=0&&u<n&&m<s&&(o[m*n+u]+=Math.abs(l)/2)}const r=new Float32Array(n*s);for(let a=0;a<s;a++)for(let l=0;l<n;l++){let c=0;for(let h=-1;h<=1;h++)for(let d=-1;d<=1;d++){const f=Math.min(n-1,Math.max(0,l+d)),u=Math.min(s-1,Math.max(0,a+h));c+=o[u*n+f]}r[a*n+l]=Math.min(1,c/9/(30*30)*3)}return(a,l)=>{const c=Math.floor((a-t.x0)/30),h=Math.floor((l-t.z0)/30);return c<0||h<0||c>=n||h>=s?0:r[h*n+c]}}class _o{constructor(){U(this,"pos",[]);U(this,"col",[]);U(this,"nrm",[]);U(this,"uv",[]);U(this,"cell",[]);U(this,"curCell",[0,0,0,0]);U(this,"a",new I);U(this,"b",new I);U(this,"n",new I)}tri(t,e,n,s,o,r){if(this.a.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),this.b.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),this.n.crossVectors(this.a,this.b).normalize(),o){const a=(t[0]+e[0]+n[0])/3-o[0],l=(t[1]+e[1]+n[1])/3-o[1],c=(t[2]+e[2]+n[2])/3-o[2];this.n.x*a+this.n.y*l+this.n.z*c<0&&([e,n]=[n,e],r&&(r=[r[0],r[2],r[1]]),this.n.negate())}[t,e,n].forEach((a,l)=>{this.pos.push(a[0],a[1],a[2]),this.col.push(s.r,s.g,s.b),this.nrm.push(this.n.x,this.n.y,this.n.z);const c=(r==null?void 0:r[l])??[.5,.5];this.uv.push(c[0],c[1]),this.cell.push(...this.curCell)})}geometry(){const t=new me;return t.setAttribute("position",new qt(this.pos,3)),t.setAttribute("normal",new qt(this.nrm,3)),t.setAttribute("color",new qt(this.col,3)),t.setAttribute("uv",new qt(this.uv,2)),t.setAttribute("cell",new qt(this.cell,4)),t}}class sx{constructor(t,e,n,s,o){U(this,"group",new At);U(this,"occ");U(this,"roofs");U(this,"carPaths",[]);this.data=t,this.route=e,this.ww=n,this.terrain=s,this.bridges=o,this.occ=new nx(s.bounds),this.roofs=new Float32Array(this.occ.w*this.occ.h).fill(-1/0)}isFree(t,e){return!this.occ.used(t,e)}roofAt(t,e){const{occ:n}=this,s=Math.floor((t-n.b.x0)/n.cell),o=Math.floor((e-n.b.z0)/n.cell);return s<0||o<0||s>=n.w||o>=n.h?-1/0:this.roofs[o*n.w+s]}markRoof(t,e){const{occ:n}=this;let s=1/0,o=-1/0,r=1/0,a=-1/0;for(let l=0;l<t.length;l+=2)s=Math.min(s,t[l]),o=Math.max(o,t[l]),r=Math.min(r,t[l+1]),a=Math.max(a,t[l+1]);for(let l=Math.floor((r-n.b.z0)/n.cell);l<=Math.floor((a-n.b.z0)/n.cell);l++)for(let c=Math.floor((s-n.b.x0)/n.cell);c<=Math.floor((o-n.b.x0)/n.cell);c++)c<0||l<0||c>=n.w||l>=n.h||ac(n.b.x0+(c+.5)*n.cell,n.b.z0+(l+.5)*n.cell,t)&&(this.roofs[l*n.w+c]=Math.max(this.roofs[l*n.w+c],e))}build(t){return(async()=>{await t("Laying out roads…"),this.buildRoads(),await t("Building Chester…"),this.buildBuildings(),await t("Planting trees…"),this.buildTrees()})()}buildBuildings(){const t=new _o,e=new Ht;for(let s=0;s<this.data.buildings.length;s++){const o=this.data.buildings[s];let r=o.p;const a=r.length/2;if(a<3)continue;this.occ.markPolygon(r);let l=0;for(let g=0;g<a;g++){const p=(g+1)%a;l+=r[g*2]*r[p*2+1]-r[p*2]*r[g*2+1]}if(l>0){const g=[];for(let p=a-1;p>=0;p--)g.push(r[p*2],r[p*2+1]);r=g}let c=1/0;for(let g=0;g<a;g++)c=Math.min(c,this.terrain.heightAt(r[g*2],r[g*2+1]));const h=c+o.h;this.markRoof(r,h+1.5);const d=$n(s,7,1),f=$n(s,3,2),u=this.styleFor(o,d,f,r);e.set(u.roof);const m=new Ht(1,1,1).multiplyScalar(.9+f*.1);this.walls(t,r,c,h,u.style,u.ground,m),!u.flat&&a===4&&o.h<=13&&rx(r)&&Math.abs(l)/2<400?this.gableRoof(t,r,h,m,e,u.style):this.flatRoof(t,r,h,e),this.landmarkExtras(t,o,r,h,e)}const n=new J(t.geometry(),ex());n.castShadow=n.receiveShadow=!0,n.name="buildings",this.group.add(n)}walls(t,e,n,s,o,r,a){const l=e.length/2,c=s-n,h=Math.max(1,Math.round(c/Kv)),d=c/h,f=n-1.5;for(let u=0;u<l;u++){const m=(u+1)%l,_=e[u*2],g=e[u*2+1],p=e[m*2],M=e[m*2+1],x=Math.hypot(p-_,M-g),v=x<1.6,A=Math.max(1,Math.round(x/Zv)),S=(E,b,w,y,C)=>{t.curCell=Cs(o,v?fe.plain:C),t.tri([_,E,g],[p,E,M],[p,b,M],a,void 0,[[0,w],[A,w],[A,y]]),t.tri([_,E,g],[p,b,M],[_,b,g],a,void 0,[[0,w],[A,y],[0,y]])};S(f,n+d,-(n-f)/d,1,r),h>1&&S(n+d,s,0,h-1,o==="shed"?fe.plain:fe.upper)}}flatRoof(t,e,n,s){const o=e.length/2;t.curCell=Cs("white",fe.plain);const r=[];for(let a=0;a<o;a++)r.push(new ot(e[a*2],e[a*2+1]));for(const[a,l,c]of Zn.triangulateShape(r,[]))t.tri([e[a*2],n,e[a*2+1]],[e[l*2],n,e[l*2+1]],[e[c*2],n,e[c*2+1]],s,[e[a*2],n-10,e[a*2+1]])}styleFor(t,e,n,s){const o=t.t,r=Ia(Da.slate,n),a=Ia(Da.flat,n);if(o==="wall_tower")return{style:"sandstone",ground:fe.plain,roof:"#c9a58a",flat:!0};if(o==="shot_tower")return{style:"tower",ground:fe.upper,roof:"#4a3a32",flat:!0};if(o==="town_hall"||o.startsWith("cathedral")||o==="church"||o==="chapel"||/cathedral|church|chapel/i.test(t.n??""))return{style:"gothic",ground:fe.upper,roof:"#5a6068",flat:!0};if(["garage","garages","shed","roof","hut","carport"].includes(o)||t.h<4)return{style:"shed",ground:fe.plain,roof:a,flat:!0};if(["industrial","warehouse"].includes(o))return{style:"warehouse",ground:fe.house,roof:r,flat:!1};const[l,c]=[s[0],s[1]],h=this.terrain.urbanAt(l,c);if(t.h<=13&&h>.45&&e<.09)return{style:"tudor",ground:fe.shop,roof:r,flat:!1};if(["commercial","retail","office","supermarket","hotel"].includes(o)||t.h>14)return e<.55?{style:"modern",ground:fe.shop,roof:a,flat:!0}:{style:e<.8?"brick":"warehouse",ground:fe.shop,roof:a,flat:!0};if(o==="apartments")return{style:e<.5?"modern":"brick",ground:fe.house,roof:a,flat:e<.5};const d=h>.5&&n<.3?fe.shop:fe.house;return{style:e<.55?"brick":e<.7?"brickDark":e<.87?"render":e<.96?"whiteRender":"sandstone",ground:d,roof:n<.8?r:Ia(Da.tile,e),flat:!1}}landmarkExtras(t,e,n,s,o){const r=n.length/2;let a=0,l=0;for(let _=0;_<r;_++)a+=n[_*2]/r,l+=n[_*2+1]/r;const c=s-e.h,h=new Ht(1,1,1),d=(_,g)=>{const p=[];for(let M=0;M<4;M++){const x=g+M*Math.PI/2+Math.PI/4;p.push(a+Math.cos(x)*_*Math.SQRT2,l+Math.sin(x)*_*Math.SQRT2)}return p.reverse()};let f=0,u=0;for(let _=0;_<r;_++){const g=(_+1)%r,p=Math.hypot(n[g*2]-n[_*2],n[g*2+1]-n[_*2+1]);p>f&&(f=p,u=Math.atan2(n[g*2+1]-n[_*2+1],n[g*2]-n[_*2]))}const m=(_,g,p)=>{t.curCell=Cs("white",fe.plain);for(let M=0;M<4;M++){const x=(M+1)%4;t.tri([_[M*2],g,_[M*2+1]],[_[x*2],g,_[x*2+1]],[a,g+p,l],o,[a,g,l])}};if(e.t==="shot_tower"){const _=[];for(let g=0;g<r;g++)_.push(a+(n[g*2]-a)*1.12,l+(n[g*2+1]-l)*1.12);this.walls(t,_,s-1.6,s+.4,"tower",fe.plain,h),this.flatRoof(t,_,s+.4,o)}else if(e.t==="town_hall"){const _=d(4.5,u);this.walls(t,_,c,c+40,"gothic",fe.upper,h),m(_,c+40,10)}else if(e.t==="cathedral_main"){const _=d(7,u);this.walls(t,_,c,c+38,"gothic",fe.upper,h),this.flatRoof(t,_,c+38,o);for(let g=0;g<4;g++){const p=_[g*2],M=_[g*2+1],x=[p-.8,M-.8,p-.8,M+.8,p+.8,M+.8,p+.8,M-.8];this.walls(t,x,c+38,c+41,"sandstone",fe.plain,h),t.curCell=Cs("white",fe.plain);for(let v=0;v<4;v++){const A=(v+1)%4;t.tri([x[v*2],c+41,x[v*2+1]],[x[A*2],c+41,x[A*2+1]],[p,c+43.5,M],o,[p,c+41,M])}}}}gableRoof(t,e,n,s,o,r){const a=[0,1,2,3].map(g=>[e[g*2],e[g*2+1]]),l=(g,p)=>Math.hypot(g[0]-p[0],g[1]-p[1]);l(a[0],a[1])<l(a[1],a[2])&&a.push(a.shift());const c=l(a[1],a[2]),h=Math.min(c*.42,4),d=(g,p)=>[(g[0]+p[0])/2,(g[1]+p[1])/2],f=d(a[3],a[0]),u=d(a[1],a[2]),m=(g,p)=>[g[0],p,g[1]],_=[(a[0][0]+a[2][0])/2,n-1,(a[0][1]+a[2][1])/2];t.curCell=Cs("white",fe.plain),t.tri(m(a[0],n),m(a[1],n),m(u,n+h),o,_),t.tri(m(a[0],n),m(u,n+h),m(f,n+h),o,_),t.tri(m(a[2],n),m(a[3],n),m(f,n+h),o,_),t.tri(m(a[2],n),m(f,n+h),m(u,n+h),o,_),t.curCell=Cs(r,fe.plain),t.tri(m(a[1],n),m(a[2],n),m(u,n+h),s,_),t.tri(m(a[3],n),m(a[0],n),m(f,n+h),s,_)}buildRoads(){const t=new _o,e=new _o,n=new _o,s=new _o,o=new Ht(1,1,1),r=new Ht("#6d635a"),a={footway:0,path:0,cycleway:0,steps:0,track:0,service:1,residential:2,living_street:2,unclassified:2,tertiary:3,secondary:4,primary:5,trunk:6,motorway:6,pedestrian:1},l=new Set(["footway","path","cycleway","steps","track","pedestrian"]),c=new Set(["residential","unclassified","tertiary","secondary","primary","trunk","motorway"]),h=new Set([...c,"service","living_street"]),d=new Set(["tertiary","secondary","primary","trunk"]),f=new Map;for(const p of this.data.roads){if(l.has(p.k))continue;const M=new Set;for(let x=0;x<p.p.length;x+=2)M.add(`${p.p[x]},${p.p[x+1]}`);for(const x of M)f.set(x,(f.get(x)??0)+1)}const u=20,m=new Map;for(const[p,M]of f){if(M<2)continue;const[x,v]=p.split(",").map(Number),A=`${Math.floor(x/u)},${Math.floor(v/u)}`;m.has(A)||m.set(A,[]),m.get(A).push([x,v])}const _=(p,M)=>{let x=1/0;const v=Math.floor(p/u),A=Math.floor(M/u);for(let S=-1;S<=1;S++)for(let E=-1;E<=1;E++)for(const[b,w]of m.get(`${v+S},${A+E}`)??[])x=Math.min(x,Math.hypot(p-b,M-w));return x};for(const p of this.data.roads){const M=l.has(p.k)?n:c.has(p.k)&&p.w>=6?t:e,x=M===t?{plain:e,dist:_,clear:p.w/2+6}:void 0,v=this.ribbon(M,p.p,p.w,o,.05+(a[p.k]??1)*.012,!0,l.has(p.k)?2:6,x,l.has(p.k));v&&h.has(p.k)&&(v.crosses||d.has(p.k))&&this.carPaths.push({pts:v.pts,w:p.w,bridge:v.crosses})}for(const p of this.data.rails)p.skip?this.markLine(p.p,3.5):this.ribbon(s,p.p,4.2,r,.1,!0,4);const g=(p,M,x)=>{const v=new J(p.geometry(),new Jt({map:M,vertexColors:!0,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));v.receiveShadow=!0,v.name=x,this.group.add(v)};for(const p of this.data.junctions??[]){const M=this.route.project(p.x,p.z),x=this.ww.halfWidthAt(M.s);if(M.dist<x+2)continue;const v=(M.dist<x+3.5?this.terrain.bankTop(M.s):this.terrain.landHeight(p.x,p.z,M.s,M.d))+.14;e.curCell=[0,0,0,0];const A=16;for(let S=0;S<A;S++){const E=S/A*Math.PI*2,b=(S+1)/A*Math.PI*2,w=[p.x+Math.cos(E)*p.r,v,p.z+Math.sin(E)*p.r],y=[p.x+Math.cos(b)*p.r,v,p.z+Math.sin(b)*p.r];e.tri([p.x,v,p.z],w,y,o,[p.x,v-5,p.z],[[.5,.5],[.5+Math.cos(E)*.4,.5],[.5+Math.cos(b)*.4,.6]])}}g(t,Ir("major"),"roads"),g(e,Ir("lane"),"lanes"),g(n,Ir("foot"),"footways"),g(s,null,"ballast")}markLine(t,e){for(let n=0;n+3<t.length;n+=2){const s=t[n],o=t[n+1],r=t[n+2],a=t[n+3],l=Math.max(1,Math.ceil(Math.hypot(r-s,a-o)/2));for(let c=0;c<=l;c++)this.occ.mark(s+(r-s)*c/l,o+(a-o)*c/l,e)}}ribbon(t,e,n,s,o,r,a,l,c=!1){const h=[];for(let v=0;v+3<e.length;v+=2){const A=e[v],S=e[v+1],E=e[v+2],b=e[v+3],w=Math.max(1,Math.ceil(Math.hypot(E-A,b-S)/4));for(let y=0;y<w;y++)h.push([A+(E-A)*y/w,S+(b-S)*y/w])}if(h.push([e[e.length-2],e[e.length-1]]),h.length<2)return null;const d=h.map(([v,A])=>this.route.project(v,A));if(c&&d.filter(A=>A.dist<this.ww.halfWidthAt(A.s)+7).length/d.length>.4)return null;const f=d,u=f.map(v=>this.bridges.rampAt(v.s,v.d));let m=!1;for(let v=1;v<f.length;v++)Math.sign(f[v].d)!==Math.sign(f[v-1].d)&&Math.min(f[v].dist,f[v-1].dist)<20&&(u[v].onDeck||u[v-1].onDeck)&&(m=!0);const _=h.map(([v,A],S)=>{const E=f[S],b=this.ww.halfWidthAt(E.s),w=E.dist<b+3.5?this.terrain.bankTop(E.s):this.terrain.landHeight(v,A,E.s,E.d);return(m?Math.max(w,u[S].y):w)+o}),g=n/2,p=h.map((v,A)=>{const S=(F,O)=>{const B=h[O][0]-h[F][0],V=h[O][1]-h[F][1],N=Math.hypot(B,V)||1;return[-V/N,B/N]},E=A>0?S(A-1,A):S(A,A+1),b=A<h.length-1?S(A,A+1):E;let w=E[0]+b[0],y=E[1]+b[1];const C=Math.hypot(w,y)||1;w/=C,y/=C;const k=Math.min(2,1/Math.max(.5,w*b[0]+y*b[1]));return[w*k,y*k]});let M=0,x=!1;for(let v=0;v<h.length-1;v++){const A=f[v],S=f[v+1],E=Math.hypot(h[v+1][0]-h[v][0],h[v+1][1]-h[v][1]),b=M/a,w=(M+E)/a;if(M+=E,m&&Math.sign(A.d)!==Math.sign(S.d)&&u[v].onDeck&&(x=!0),(Math.min(A.dist,S.dist)<this.ww.halfWidthAt(A.s)+4||Math.sign(A.d)!==Math.sign(S.d))&&!(u[v].onDeck&&u[v+1].onDeck)||m&&u[v].onDeck&&u[v+1].onDeck)continue;const[C,k]=h[v],[F,O]=h[v+1],[B,V]=p[v],[N,W]=p[v+1],ht=[C-B*g,_[v],k-V*g],vt=[C+B*g,_[v],k+V*g],Mt=[F-N*g,_[v+1],O-W*g],Gt=[F+N*g,_[v+1],O+W*g],Kt=l&&Math.min(l.dist(C,k),l.dist(F,O))<l.clear?l.plain:t;Kt.tri(ht,vt,Gt,s,[C,_[v]-5,k],[[0,b],[1,b],[1,w]]),Kt.tri(ht,Gt,Mt,s,[C,_[v]-5,k],[[0,b],[1,w],[0,w]]),r&&this.occ.mark(C,k,g+1.5)}return{pts:h.map(([v,A],S)=>[v,_[S],A]),crosses:x}}buildTrees(){const t=Ii(1234),e=[],{route:n,ww:s,terrain:o,occ:r}=this,a=(x,v)=>{if(r.used(x,v))return!1;const A=n.project(x,v);return A.dist>s.halfWidthAt(A.s)+4.2};for(let x=0;x<n.length;x+=5)for(const v of[-1,1]){if(t()>.6)continue;const A=s.halfWidthAt(x)+4.5+t()*t()*30,[S,E]=n.point(x,A*v);t()<o.urbanAt(S,E)*.85||a(S,E)&&e.push({x:S,z:E,s:.8+t()*.7,kind:t()<.15?1:0})}const l=o.bounds,c=(l.x1-l.x0)*(l.z1-l.z0);for(let x=0;x<c*9e-4;x++){const v=l.x0+t()*(l.x1-l.x0),A=l.z0+t()*(l.z1-l.z0),E=o.parkAt(v,A)?.7:(1-o.urbanAt(v,A))*.35*Ne(.75,.2,Math.abs(ox(v,A)));t()>E||a(v,A)&&e.push({x:v,z:A,s:.8+t()*.9,kind:t()<.1?1:0})}for(let x=0;x<this.data.trees.length;x+=2)e.push({x:this.data.trees[x],z:this.data.trees[x+1],s:1.1,kind:0});const h=new hn(1,0),d=new jt(.18,.25,1,5);d.translate(0,.5,0);const f=new wn(h,new Jt({roughness:.9,flatShading:!0}),e.length),u=new wn(d,new Jt({color:"#5a4636",roughness:1}),e.length),m=new de,_=new En,g=new I,p=new I,M=["#4f7a3a","#5d8a40","#3f6b35","#6b9446","#557d3c"].map(x=>new Ht(x));e.forEach((x,v)=>{const A=o.heightAt(x.x,x.z),S=(x.kind===1?9:4.5)*x.s;_.setFromAxisAngle(new I(0,1,0),t()*Math.PI*2),p.set(x.x,A-.2,x.z),g.set(x.s,S*.45,x.s),u.setMatrixAt(v,m.compose(p,_,g)),p.set(x.x,A+S*.45+(x.kind===1?S*.35:S*.3),x.z),x.kind===1?g.set(1.3*x.s,S*.5,1.3*x.s):g.set(2.6*x.s,2.3*x.s,2.6*x.s),f.setMatrixAt(v,m.compose(p,_,g)),f.setColorAt(v,M[Math.floor(t()*M.length)].clone().offsetHSL(0,0,(t()-.5)*.06))}),f.castShadow=u.castShadow=!0,f.receiveShadow=!0,f.name="trees",this.group.add(f,u)}}function ox(i,t){return Math.sin(i*.011+Math.sin(t*.007)*2)*Math.cos(t*.013+Math.sin(i*.005)*2)}function rx(i){for(let t=0;t<4;t++){const e=t,n=(t+1)%4,s=(t+2)%4,o=i[n*2]-i[e*2],r=i[n*2+1]-i[e*2+1],a=i[s*2]-i[n*2],l=i[s*2+1]-i[n*2+1],c=(o*a+r*l)/(Math.hypot(o,r)*Math.hypot(a,l)||1);if(Math.abs(c)>.2)return!1}return!0}function Ir(i){const n=document.createElement("canvas");n.width=128,n.height=256;const s=n.getContext("2d"),o=Ii(i.length*7);if(i==="foot"){s.fillStyle="#b3ad9f",s.fillRect(0,0,128,256);for(let a=0;a<256;a+=64)for(let l=0;l<128;l+=64)s.fillStyle=`hsl(40, 8%, ${62+o()*8}%)`,s.fillRect(l+2,a+2,60,60)}else{s.fillStyle="#4f5256",s.fillRect(0,0,128,256);for(let a=0;a<2500;a++)s.fillStyle=o()<.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.08)",s.fillRect(o()*128,o()*256,2,2);i==="major"&&(s.fillStyle="#e9e7df",s.fillRect(6,0,3,256),s.fillRect(119,0,3,256),s.fillRect(128/2-2,0,4,256*.5))}const r=new On(n);return r.colorSpace=Pe,r.wrapS=ai,r.wrapT=Ys,r.anisotropy=4,r}const Ps={brick:new Jt({color:"#8b4a3b",roughness:.9,flatShading:!0}),sandstone:new Jt({color:"#a8654f",roughness:.9,flatShading:!0}),concrete:new Jt({color:"#a39f97",roughness:.85,flatShading:!0}),iron:new Jt({color:"#3d434b",roughness:.6,metalness:.3,flatShading:!0}),coping:new Jt({color:"#c4bba9",roughness:.9,flatShading:!0})},ax=Ul+.55+2.4,kh=Vn+.55+2.6,Oh=Math.tan(55*Math.PI/180);class lx{constructor(t,e,n,s){U(this,"group",new At);U(this,"placed",[]);U(this,"ray",new ld);U(this,"faded",new Map);const o=[];for(const r of n){const a=o.at(-1);if(a&&a.kind==="rail"&&r.kind==="rail"&&r.s-r.w/2<a.s+a.w/2+6){const l=Math.min(a.s-a.w/2,r.s-r.w/2),c=Math.max(a.s+a.w/2,r.s+r.w/2);o[o.length-1]={...a,s:(l+c)/2,w:c-l}}else o.push(r)}for(const r of o){const a=t.frame(r.s),l=e.levelAt(r.s),c=r.kind==="road"&&r.w<12,h=Math.sin(r.dir),d=Math.cos(r.dir),f=h*a.nx+d*a.nz,u=h*a.tx+d*a.tz,m=Ji.clamp(u/(Math.abs(f)<.001?.001:f),-Oh,Oh),_=Vn+8,g=Vn+8,p=Math.max(...[-1,1].map(O=>{const[B,V]=t.point(r.s,g*O);return s.landHeight(B,V,r.s,g*O)})),M=Math.max(l+(c?4.1:4.6),p+.2),x=new At;x.position.set(a.x,0,a.z),x.rotation.y=Math.atan2(-a.nz,a.nx);const v=Math.max(r.w+.8,3.2)*Math.sqrt(1+m*m);let A=a.nx+a.tx*m,S=a.nz+a.tz*m;const E=Math.hypot(A,S);A/=E,S/=E;const b=Math.max(1.2,Math.max(r.w+.8,3.2)/2-.4);this.placed.push({data:r,x:a.x,z:a.z,deck:M,halfSpan:_,arch:c,depth:v,tanSkew:m,ax:A,az:S,roadHalf:b});const w=c?cx(_,ax,l,M):hx(_,kh,l,M),y=new Qs(w,{depth:v,bevelEnabled:!1,curveSegments:10});y.translate(0,0,-v/2);const C=c?r.w<=3.5?Ps.sandstone:Ps.brick:r.kind==="rail"?Ps.iron:Ps.concrete,k=new J(y,C);k.castShadow=k.receiveShadow=!0,x.add(k);for(const O of[-1,1]){const B=new J(new Wt(_*2*.92,1,.35),c?Ps.coping:C);B.position.set(0,M+.5,O*(v/2-.12)),B.castShadow=!0,x.add(B)}if(!c)for(const O of[-1,1]){const B=new J(new Wt(1.2,M-l+1.15,v+.3),Ps.concrete);B.position.set(O*(kh+.6-.08),(M-1.15+l-2.3)/2,0),x.add(B)}if(r.kind==="road"){const O=v/2-.3,B=M+.03,V=new me;V.setAttribute("position",new qt([-_,B,-O,_,B,-O,_,B,O,-_,B,O],3));const N=r.w<=3.5?2:6;V.setAttribute("uv",new qt([0,0,0,2*_/N,1,2*_/N,1,0],2)),V.setIndex([0,2,1,0,3,2]),V.computeVertexNormals();const W=new J(V,new Jt({map:Ir(r.w<=3.5?"foot":"major"),roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,side:Ae}));W.receiveShadow=!0,x.add(W)}const F=new de().makeShear(0,-m,0,0,0,0);for(const O of x.children){const B=O;B.updateMatrix(),B.geometry=B.geometry.applyMatrix4(B.matrix).applyMatrix4(F),B.position.set(0,0,0),B.rotation.set(0,0,0)}x.traverse(O=>{const B=O;B.isMesh&&(B.material=B.material.clone())}),x.name=`bridge:${r.name??r.s}`,this.group.add(x)}}rampAt(t,e){let n=-1/0,s=!1;for(const o of this.placed){if(Math.abs(t-(o.data.s+o.tanSkew*e))>o.depth/2+1)continue;const a=Math.abs(e);a<=o.halfSpan&&(s=!0),!(a>o.halfSpan+30)&&(n=Math.max(n,o.deck-Math.max(0,a-o.halfSpan*.85)/9))}return{y:n,onDeck:s}}updateOcclusion(t,e,n){const s=e.clone().sub(t),o=s.length();this.ray.set(t,s.normalize()),this.ray.far=o;const r=new Set(this.ray.intersectObjects(this.group.children,!0).map(a=>a.object.parent));for(const a of this.group.children){const l=this.faded.get(a)??1,c=r.has(a)?.18:1;if(l===c)continue;const h=l+Math.sign(c-l)*Math.min(Math.abs(c-l),n*4);this.faded.set(a,h),a.traverse(d=>{const f=d.material;f&&(f.transparent=h<1,f.opacity=h,f.depthWrite=h>=1)})}}at(t){return this.placed.find(e=>Math.abs(e.data.s-t)<e.data.w/2+1)}}function cx(i,t,e,n){const s=n-e,o=e-2.2,r=e+Math.max(1.8,s*.4),a=e+Math.max(3.4,s*.8),l=new os;l.moveTo(-i,o),l.lineTo(-t,o),l.lineTo(-t,r);const c=14;for(let h=1;h<c;h++){const d=Math.PI-Math.PI*h/c;l.lineTo(Math.cos(d)*t,r+Math.sin(d)*(a-r))}return l.lineTo(t,r),l.lineTo(t,o),l.lineTo(i,o),l.lineTo(i,n),l.lineTo(-i,n),l.closePath(),l}function hx(i,t,e,n){const s=e-2.2,o=n-1.1,r=new os;return r.moveTo(-i,s),r.lineTo(-t,s),r.lineTo(-t,o),r.lineTo(t,o),r.lineTo(t,s),r.lineTo(i,s),r.lineTo(i,n),r.lineTo(-i,n),r.closePath(),r}const Fh=18*Math.PI/180,ux=Ai+.15,Hn={gate:new Jt({color:"#1d1c1a",roughness:.8,flatShading:!0}),white:new Jt({color:"#f1efe8",roughness:.7}),gear:new Jt({color:"#2b2f33",roughness:.5,metalness:.5}),rack:new Jt({color:"#c9c3b5",roughness:.4,metalness:.6}),foam:new _n({color:"#f4f7f2",transparent:!0,opacity:0,depthWrite:!1}),highlight:new _n({color:"#ffd76a",transparent:!0,opacity:.55,depthWrite:!1})};class dx{constructor(t,e,n){U(this,"group",new At);U(this,"visuals",[]);U(this,"time",0);this.ww=e;for(const o of e.gates){const r=t.frame(o.s),a=new At;a.position.set(r.x,0,r.z),a.rotation.y=Math.atan2(r.tx,r.tz);const l=e.bodies[o.above].hi,c=e.bodies[o.below].lo-1.6,h=n.bankTop(o.s),d=l+.4,f=Ai/Math.cos(Fh)+.15,u=[],m=[];for(const p of[-1,1]){const M=new At;M.position.set(p*ux,0,0);const x=d-c,v=new J(new Wt(f,x,.32),Hn.gate);v.position.set(f/2,c+x/2,0),v.castShadow=!0,M.add(v);const A=Math.max(h,d)+.75,S=new J(new Wt(4.6,.32,.32),Hn.gate);S.position.set(-2.1,A,0),S.castShadow=!0,M.add(S);const E=new J(new Wt(.7,.34,.34),Hn.white);E.position.set(-4.1,A,0),M.add(E);const b=new J(new Wt(.3,A-d+.2,.3),Hn.gate);b.position.set(.1,(A+d)/2,0),M.add(b);const w=new J(new Wt(.3,.45,.3),Hn.gear);w.position.set(f*.55,d+.22,-.2),M.add(w);const y=new J(new Wt(.08,.9,.08),Hn.rack);y.position.set(f*.55,d+.45,-.2),y.userData.y0=y.position.y,M.add(y),m.push(y);const C=new J(new Wt(f,.06,.06),Hn.white);C.position.set(f/2,d+.95,-.35),M.add(C),M.scale.x=p<0?1:-1,a.add(M),u.push({pivot:M,sign:p})}const _=new J(new pi(Ai*2,5),Hn.foam.clone());_.rotation.x=-Math.PI/2,_.position.set(0,0,-2.8),a.add(_);const g=new J(new ko(Ai+.6,Ai+1,32),Hn.highlight);g.rotation.x=-Math.PI/2,g.position.y=h+.08,g.visible=!1,a.add(g),this.group.add(a),this.visuals.push({gate:o,leaves:u,racks:m,foam:_,ring:g,root:a})}const s=new Map;for(const o of e.gates)o.label==="top gates"&&s.set(o.lockName,o);for(const[o,r]of s){const a=t.frame(r.s+3),l=fx(o),c=(Ai+3.2)*oe;l.position.set(a.x+a.nx*c,n.bankTop(r.s+3),a.z+a.nz*c),l.rotation.y=Math.atan2(oe*a.tz,-oe*a.tx),this.group.add(l)}}setSelected(t){for(const e of this.visuals)e.ring.visible=e.gate===t}update(t){this.time+=t;for(const e of this.visuals){const n=e.gate,s=n.open*n.open*(3-2*n.open);for(const{pivot:a,sign:l}of e.leaves){const c=Fh,h=Math.PI/2;a.rotation.y=(c+(h-c)*s)*l}for(const a of e.racks)a.position.y=a.userData.y0+n.paddle*.55;const o=this.ww.bodies[n.below].level,r=Math.min(1,Math.abs(n.flow)/3);e.foam.position.y=o+.03,e.foam.material.opacity=r*(.55+.15*Math.sin(this.time*9)),e.foam.scale.y=.7+r*.5+.08*Math.sin(this.time*5.3),e.ring.visible&&(e.ring.material.opacity=.4+.25*Math.sin(this.time*4))}}}function fx(i){const t=document.createElement("canvas");t.width=512,t.height=128;const e=t.getContext("2d");e.fillStyle="#1e3d2f",e.fillRect(0,0,512,128),e.strokeStyle="#e8d9a8",e.lineWidth=6,e.strokeRect(8,8,496,112),e.fillStyle="#f3ead0",e.font="600 44px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText(i,256,66,470);const n=new On(t);n.colorSpace=Pe;const s=new At,o=new J(new pi(2.4,.6),new Jt({map:n,side:Ae}));o.position.y=1.9,s.add(o);for(const r of[-1,1]){const a=new J(new Wt(.1,2.2,.1),Hn.white);a.position.set(r,1.1,0),s.add(a)}return s}class Uo extends J{constructor(){const t=Uo.SkyShader,e=new di({name:t.name,uniforms:Fu.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:rn,depthWrite:!1});super(new Wt(1,1,1),e),this.isSky=!0}}Uo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},up:{value:new I(0,1,0)}},vertexShader:`
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

		}`};const zh=new URLSearchParams(location.search).get("fog"),px=zh===null?null:Ee(Number(zh)||0,0,1);class mx{constructor(t,e){U(this,"sky",new Uo);U(this,"sun",new ad("#fff4e0",3));U(this,"hemi",new od("#cfe3ff","#5d6b45",.9));U(this,"envScene",new Kl);U(this,"envSky",new Uo);U(this,"pmrem");U(this,"envTarget",null);U(this,"lastEnvHour",-99);U(this,"sunDir",new I);U(this,"hour",10.5);U(this,"fog",0);U(this,"elapsed",0);this.scene=t,this.sky.scale.setScalar(2e4),this.envSky.scale.setScalar(2e4);for(const o of[this.sky,this.envSky]){const r=o.material.uniforms;r.turbidity.value=5,r.rayleigh.value=1.4,r.mieCoefficient.value=.004,r.mieDirectionalG.value=.82}this.envScene.add(this.envSky),t.add(this.sky,this.sun,this.sun.target,this.hemi),this.pmrem=new Rl(e);const n=this.sun.shadow;this.sun.castShadow=!0,n.mapSize.set(2048,2048);const s=n.camera;s.left=s.bottom=-90,s.right=s.top=90,s.near=1,s.far=600,n.bias=-4e-4,n.normalBias=.03,t.fog=new Zl("#c9d6dc",300,2400)}get sunElevation(){const t=(this.hour-7)/11.5;return Math.sin(Ee(t,-.15,1.15)*Math.PI)*32-(t<0||t>1?6:0)}get isNight(){return this.sunElevation<-2}update(t,e){var h;this.hour=(this.hour+t)%24,this.elapsed+=t;const n=Math.max(0,1-Math.abs(this.hour-6.5)/3.5)*.8,s=Math.sin(this.elapsed*.21)*.6+Math.sin(this.elapsed*.53+1.7)*.4;this.fog=px??Ee(Math.max(n,Ne(.55,.95,s)),0,1);const o=this.scene.fog;o.far=2400*Math.pow(70/2400,this.fog),o.near=o.far*Ji.lerp(.125,0,this.fog);const r=Ji.degToRad(this.sunElevation),a=Ji.degToRad(100+(this.hour-6)/13*160);this.sunDir.setFromSphericalCoords(1,Math.PI/2-r,a);for(const d of[this.sky,this.envSky])d.material.uniforms.sunPosition.value.copy(this.sunDir);const l=Ne(-4,8,this.sunElevation),c=1-Ne(4,20,this.sunElevation);this.sun.intensity=3.2*Ne(-2,6,this.sunElevation),this.sun.color.setHSL(.09,.5+c*.4,.92-c*.18),this.hemi.intensity=.2+l*.7,this.scene.fog.color.setHSL(.56,.18,.12+l*.68),this.sun.position.copy(e).addScaledVector(this.sunDir,300),this.sun.target.position.copy(e),Math.abs(this.hour-this.lastEnvHour)>.25&&(this.lastEnvHour=this.hour,(h=this.envTarget)==null||h.dispose(),this.envTarget=this.pmrem.fromScene(this.envScene,0,1,25e3),this.scene.environment=this.envTarget.texture)}}function gx(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new me;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0;const d=[];for(let f=0;f<i.length;++f){const u=i[f].index;for(let m=0;m<u.count;++m)d.push(u.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(const h in o){const d=Bh(o[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in r){const d=r[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let _=0;_<r[h].length;++_)u.push(r[h][_][f]);const m=Bh(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Bh(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new ke(r,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,u=h.count;f<u;f++)for(let m=0;m<e;m++){const _=h.getComponent(f,m);a.setComponent(f+d,m,_)}}else r.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function fi(i,t,e){i.updateMatrixWorld(!0);const n=i.matrixWorld.clone().invert(),s=[],o=new de;return i.traverse(r=>{const a=r;if(!a.isMesh||e&&!e(a))return;const l=Array.isArray(a.material)?a.material:[a.material];if(l.some(m=>m.map)){t==null||t(a);return}const c=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();c.applyMatrix4(o.multiplyMatrices(n,a.matrixWorld));const h=c.getAttribute("position").count,d=new Float32Array(h*3),f=c.groups.length?c.groups:[{start:0,count:h,materialIndex:0}];for(const m of f){const _=(l[m.materialIndex??0]??l[0]).color;for(let g=m.start;g<Math.min(h,m.start+m.count);g++)d.set([_.r,_.g,_.b],g*3)}const u=new me;u.setAttribute("position",c.getAttribute("position")),u.setAttribute("normal",c.getAttribute("normal")),u.setAttribute("color",new ke(d,3)),s.push(u)}),gx(s)}const ci=()=>new Jt({vertexColors:!0,roughness:.75,flatShading:!0}),_x=["#f1c6a5","#e3b08f","#c98d68","#9a6542","#6b4229"],vx=["#2b1d14","#5a3a22","#a0703c","#d9b36c","#8f8f8f","#161616"],xx=["#2d3a55","#1f2328","#6b5a3f","#3d4a3a","#4a4a55"],wo=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400","#34495e","#16a085","#7f8c8d","#e84393","#6d4c41","#1f4d3a"],Mx=["short","short","long","bun","beanie","cap","bald"];function Ui(i,t={}){const e=n=>n[Math.floor(i()*n.length)];return{coat:e(wo),trousers:e(xx),skin:e(_x),hair:e(vx),hairStyle:e(Mx),hat:e(["#b03a2e","#2e4a7a","#3d5a3d","#5a4a3a","#d4a017"]),longCoat:i()<.3,...t}}const si=(i,t=.8)=>new Jt({color:i,roughness:t}),Hh=i=>(i.userData.part="coat",i);function qn(i={}){const t={...Ui(Math.random),...i},e=new At,n=si(t.coat,.7),s=si(t.skin,.6),o=si(t.trousers,.85),r=si(t.hair,.9),a=t.longCoat?.62:.86,l=[[.001,a],[t.longCoat?.2:.155,a],[.16,.98],[.165,1.15],[.2,1.36],[.17,1.45],[.075,1.5],[.001,1.5]].map(([S,E])=>new ot(S,E)),c=Hh(new J(new ec(l,12),n));c.scale.z=.72,e.add(c);const h=new J(new jt(.045,.05,.1,8),s);h.position.y=1.54,e.add(h);const d=new J(new Ye(.1,14,10),s);d.scale.set(.92,1.1,1),d.position.y=1.67,e.add(d);const f=new J(new jn(.018,.045,5),s);f.rotation.x=Math.PI/2,f.position.set(0,1.66,.1),e.add(f);const u=(S,E,b=Math.PI*.55)=>{const w=new J(new Ye(S,14,8,0,Math.PI*2,0,b),E);return w.scale.set(.95,1.12,1.03),w.position.y=1.68,w};if(t.hairStyle!=="bald"&&e.add(u(.106,t.hairStyle==="beanie"?si(t.hat):r,t.hairStyle==="beanie"?Math.PI*.5:Math.PI*.55)),t.hairStyle==="long"){const S=new J(new jt(.1,.11,.26,10,1,!0,Math.PI*.6,Math.PI*.8),r);S.position.y=1.56,S.rotation.y=Math.PI,e.add(S)}else if(t.hairStyle==="bun"){const S=new J(new Ye(.05,8,6),r);S.position.set(0,1.74,-.09),e.add(S)}else if(t.hairStyle==="beanie"){const S=new J(new un(.1,.022,6,14),si(t.hat));S.rotation.x=Math.PI/2,S.position.y=1.7,e.add(S)}else if(t.hairStyle==="cap"){const S=new J(new jt(.115,.118,.05,12),si(t.hat));S.position.set(0,1.77,.01),S.rotation.x=-.12;const E=new J(new Wt(.16,.015,.08),si(t.hat));E.position.set(0,1.76,.12),e.add(S,E)}const m=S=>{const E=new At;E.position.set(S*.085,.92,0);const b=new J(new jt(.075,.062,.44,8),o);b.position.y=-.22;const w=new At;w.position.y=-.44;const y=new J(new jt(.062,.05,.42,8),o);y.position.y=-.21;const C=new J(new Wt(.1,.07,.23),si("#2a2420"));return C.position.set(0,-.44,.04),w.add(y,C),E.add(b,w),e.add(E),{hip:E,knee:w}},{hip:_,knee:g}=m(1),{hip:p,knee:M}=m(-1),x=S=>{const E=new At;E.position.set(S*.215,1.4,0);const b=Hh(new J(new jt(.052,.042,.58,8),n));b.position.y=-.29;const w=new J(new Ye(.042,8,6),s);return w.position.y=-.61,E.add(b,w),E.rotation.z=S*.07,e.add(E),E},v=x(1),A=x(-1);return e.traverse(S=>S.castShadow=!0),{group:e,armL:v,armR:A,legL:_,legR:p,kneeL:g,kneeR:M}}function Ci(i,t,e){t==="wind"?(i.armL.rotation.set(-1.3+Math.sin(e*7)*.45,0,.15),i.armR.rotation.set(-1.3+Math.sin(e*7+Math.PI)*.45,0,-.15)):t==="push"?(i.armL.rotation.set(-1.25,0,.1),i.armR.rotation.set(-1.25,0,-.1)):t==="rest"?(i.armL.rotation.set(0,0,.07),i.armR.rotation.set(0,0,-.07)):t==="wave"?(i.armL.rotation.set(0,0,Math.PI-.4+Math.sin(e*9)*.35),i.armR.rotation.set(0,0,-.07)):(i.armL.rotation.set(0,0,Math.PI-.2+Math.sin(e*14)*.25),i.armR.rotation.set(0,0,-(Math.PI-.2)+Math.sin(e*14+1.5)*.25))}function zr(i,t,e=1){const n=Math.sin(t);i.legL.rotation.x=n*.42*e,i.legR.rotation.x=-n*.42*e,i.kneeL.rotation.x=Math.max(0,-Math.sin(t-.6))*.7*e,i.kneeR.rotation.x=Math.max(0,Math.sin(t-.6))*.7*e,i.armL.rotation.set(-n*.35*e,0,.07),i.armR.rotation.set(n*.35*e,0,-.07)}function hd(i){for(const t of[i.legL,i.legR,i.kneeL,i.kneeR])t.rotation.set(0,0,0)}function kl(i){i.legL.rotation.set(-1.5,0,.06),i.legR.rotation.set(-1.5,0,-.06),i.kneeL.rotation.x=i.kneeR.rotation.x=1.5,i.armL.rotation.set(-.5,0,.1),i.armR.rotation.set(-.5,0,-.1),i.group.position.y-=.47}function yx(i,t){i.legL.rotation.set(-.95+Math.sin(t)*.45,0,.05),i.legR.rotation.set(-.95-Math.sin(t)*.45,0,-.05),i.kneeL.rotation.x=1.2+Math.cos(t)*.45,i.kneeR.rotation.x=1.2-Math.cos(t)*.45,i.armL.rotation.set(-1,0,.08),i.armR.rotation.set(-1,0,-.08)}const Sn=17.4,Nn=2.08,mn=(i,t={})=>new Jt({color:i,roughness:.6,flatShading:!0,...t}),bx={name:"Chester Rose",cabin:"#1f4d3a",roof:"#7c2f23",length:Sn,crew:!0};function lc(i={}){const{name:t,cabin:e,roof:n,length:s,crew:o,crewStyle:r}={...bx,...i},a=new At;a.userData.length=s;const l={hull:mn("#18191b",{roughness:.5}),deck:mn("#3a3d40",{roughness:.9}),cabin:mn(e,{roughness:.45}),roof:mn(n,{roughness:.7}),cream:mn("#efe3c2"),red:mn("#a3291f"),window:mn("#1b2730",{roughness:.1,metalness:.4}),brass:mn("#c9a24a",{roughness:.25,metalness:.9}),rope:mn("#8a6b43",{roughness:1}),black:mn("#111111"),pot:mn("#9b5a3c"),leaf:mn("#4f8a3a"),flower:mn("#e04f6a")},c=Nn/2,h=s/2,d=[[-c,-h+.4],[-c*.85,-h+.05],[0,-h],[c*.85,-h+.05],[c,-h+.4],[c,h-3.4],[c*.82,h-1.6],[c*.45,h-.5],[0,h],[-c*.45,h-.5],[-c*.82,h-1.6],[-c,h-3.4]],f=new os(d.map(([nt,Dt])=>new ot(nt,-Dt))),u=.62,m=.38,_=new Qs(f,{depth:u+m,bevelEnabled:!1});_.rotateX(-Math.PI/2),_.translate(0,-u,0);const g=new J(_,[l.deck,l.hull]);g.castShadow=g.receiveShadow=!0,a.add(g);const p=new Qs(f,{depth:.07,bevelEnabled:!1});p.rotateX(-Math.PI/2),p.scale(1.015,1,1.004),p.translate(0,m-.12,0),a.add(new J(p,[l.red,l.red]));const M=-h+2,x=h-3.6,v=x-M,A=(M+x)/2,S=1.22,E=Nn-.24,b=new J(new Wt(E,S,v),l.cabin);b.position.set(0,m+S/2,A),b.castShadow=b.receiveShadow=!0,a.add(b);const w=new J(new Wt(E+.08,.09,v+.08),l.roof);w.position.set(0,m+S+.04,A),w.castShadow=!0,a.add(w);for(const nt of[-1,1]){const Dt=new J(new Wt(.02,.05,v-.3),l.cream);Dt.position.set(nt*(E/2+.005),m+S-.18,A),a.add(Dt);const Vt=Dt.clone();Vt.position.y=m+.18,a.add(Vt);for(let te=M+1.6;te<x-.6;te+=1.45){if(te>M+2.6&&te<M+4.6)continue;const it=new J(new Wt(.03,.34,.5),l.window);it.position.set(nt*(E/2+.005),m+S*.62,te),a.add(it)}const wt=wx(t);wt.position.set(nt*(E/2+.012),m+S*.55,M+3.6),wt.rotation.y=nt*(Math.PI/2),a.add(wt)}for(const[nt,Dt]of[[M-.005,-1],[x+.005,1]]){const Vt=new J(new Wt(.9,.95,.03),l.red);Vt.position.set(0,m+.5,nt),a.add(Vt);const wt=new J(new Wt(.03,.9,.035),l.cream);wt.position.set(0,m+.5,nt+Dt*.005),a.add(wt)}const y=new J(Sx(),new Jt({map:Ex(),roughness:.6,side:Ae}));y.position.set(0,m,h-1.5),a.add(y);const C=new J(new Wt(.12,.06,2.1),l.cream);C.position.set(0,m+1.12,h-2.55),C.rotation.x=-.36,a.add(C);const k=new J(new jt(.07,.07,.55,8),l.black);k.position.set(.45,m+S+.3,x-1.4),a.add(k);const F=new J(new jt(.075,.075,.06,8),l.brass);F.position.set(.45,m+S+.5,x-1.4),a.add(F);for(const[nt,Dt]of[[M+2.2,-.35],[M+2.8,-.35],[A+1.5,.3]]){const Vt=new J(new jt(.16,.12,.22,7),l.pot);Vt.position.set(Dt,m+S+.19,nt),a.add(Vt);const wt=new J(new hn(.2,0),l.leaf);wt.position.set(Dt,m+S+.4,nt),a.add(wt);const te=new J(new hn(.06,0),l.flower);te.position.set(Dt+.08,m+S+.55,nt),a.add(te)}const O=new J(new jt(.03,.03,4.5,6),l.cream);O.rotation.x=Math.PI/2,O.position.set(-.6,m+S+.12,A-1),a.add(O);const B=new J(new Ye(.22,8,6),l.rope);B.scale.set(1,.9,1.3),B.position.set(0,.05,h-.02),a.add(B);for(const nt of[-1,1]){const Dt=new J(new jt(.11,.11,.45,8),l.rope);Dt.position.set(nt*(c+.08),.05,2),a.add(Dt)}const V=new J(new jt(.1,.12,.18,10),l.brass);V.rotation.x=Math.PI/2,V.position.set(0,m+.25,h-.35),a.add(V);const N=new pv("#ffe7b0",0,60,.5,.6,1.2);N.position.set(0,m+.3,h-.2),N.target.position.set(0,-.5,h+20),a.add(N,N.target);const W=new At;W.position.set(0,0,-h-.05);const ht=new J(new Wt(.05,.75,.9),l.hull);ht.position.set(0,-.3,-.45),W.add(ht);const vt=new J(new jt(.04,.04,1.1,6),l.black);vt.position.set(0,.45,0),W.add(vt);const Mt=new J(new jt(.025,.035,1.3,6),l.brass);Mt.rotation.x=Math.PI/2-.25,Mt.position.set(0,1.08,.62),W.add(Mt);const Gt=new J(new Ye(.05,6,4),l.brass);Gt.position.set(0,1,0),W.add(Gt),a.add(W);const Kt=qn(r??{coat:"#e8b931",trousers:"#2d3a55",skin:"#e3b08f",hair:"#5a3a22",hairStyle:"cap",hat:"#3d4a3a",longCoat:!1}),Q=Kt.group;Q.position.set(0,m-.25,-h+.9),o?a.add(Q):a.remove(N,N.target);const dt=new J(new Wt(2.2,1.6,3),new _n({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}));dt.position.set(0,1,-h+.6),dt.name="tiller-hit";const Nt=new J(new ko(.75,.9,32),new _n({color:"#ffd76a",transparent:!0,opacity:.6,depthWrite:!1,side:Ae}));return Nt.rotation.x=-Math.PI/2,Nt.position.set(0,m+.02,-h+.55),o&&a.add(dt,Nt),{group:a,rudder:W,steerer:Q,steererPerson:Kt,headlight:N,tillerHit:dt,tillerHint:Nt}}function wx(i){const t=document.createElement("canvas");t.width=512,t.height=160;const e=t.getContext("2d");e.fillStyle="#a3291f",e.fillRect(0,0,512,160),e.strokeStyle="#efe3c2",e.lineWidth=8,e.strokeRect(10,10,492,140),e.fillStyle="#f6d36b",e.font="800 64px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#3a120d",e.shadowOffsetX=3,e.shadowOffsetY=3,e.fillText(i,256,84,460);const n=new On(t);return n.colorSpace=Pe,new J(new pi(1.9,.6),new Jt({map:n,roughness:.5}))}function Sx(){const i=new me,t=Nn*.42,e=1.15;return i.setAttribute("position",new qt([-t,0,0,t,0,0,0,e,0],3)),i.setAttribute("uv",new qt([0,0,1,0,.5,1],2)),i.computeVertexNormals(),i}function Ex(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#1f4d3a",t.fillRect(0,0,256,256),t.fillStyle="#a3291f",t.beginPath(),t.moveTo(128,40),t.lineTo(200,170),t.lineTo(128,240),t.lineTo(56,170),t.closePath(),t.fill(),t.strokeStyle="#f6d36b",t.lineWidth=8,t.stroke();for(const[n,s,o]of[[128,150,"#e04f6a"],[108,175,"#f2efe0"],[148,175,"#e8a43c"]])t.fillStyle=o,t.beginPath(),t.arc(n,s,14,0,Math.PI*2),t.fill();const e=new On(i);return e.colorSpace=Pe,e}function Tx(i){const t=new At;i.group.updateMatrixWorld(!0);const e=fi(i.group,s=>{const o=s.clone();o.matrixAutoUpdate=!1,o.matrix.copy(s.matrixWorld),t.add(o)}),n=new J(e,ci());return n.castShadow=n.receiveShadow=!0,t.add(n),t}const Us=16e3,Ua=Us*Sn*Sn/12,Ax=650,Rx=700,Cx=7,vr=.3,Ns=-3,ri=5,Gh=(()=>{const i=Nn/2,t=Sn/2;return[[0,t],[.55,t-.6],[-.55,t-.6],[i,t-3],[-i,t-3],[i,2],[-i,2],[i,-3],[-i,-3],[i*.95,-t+.4],[-i*.95,-t+.4],[0,-t]]})();class Px{constructor(t,e){U(this,"x",0);U(this,"z",0);U(this,"psi",0);U(this,"u",0);U(this,"v",0);U(this,"r",0);U(this,"notch",0);U(this,"thrust",0);U(this,"rudder",0);U(this,"s",0);U(this,"d",0);U(this,"contacts",[]);U(this,"obstacles",[]);U(this,"tethers",[]);U(this,"bowThrust",0);this.route=t,this.ww=e}placeAt(t,e=!0){const n=this.route.frame(t);this.x=n.x,this.z=n.z,this.psi=Math.atan2(n.tx,n.tz)+(e?0:Math.PI),this.s=t,this.u=this.v=this.r=0}get speed(){return Math.hypot(this.u,this.v)}span(){let t=1/0,e=-1/0;for(const[n,s]of Gh){const[o,r]=this.toWorld(n,s),a=this.route.project(o,r,this.s);t=Math.min(t,a.s),e=Math.max(e,a.s)}return[t,e]}step(t,e){const n=Ee(e,-1,1),s=n===0?2.2:1.6;this.rudder+=Ee(n-this.rudder,-s*t,s*t);const o=this.notch>=0?this.notch*Ax:this.notch*Rx;this.thrust+=Ee(o-this.thrust,-2200*t,2200*t);const{u:r,v:a,r:l}=this,c=this.thrust,h=this.rudder*(300*r*Math.abs(r)+.85*Math.max(c,0)),d=c-480*r*Math.abs(r)-250*r,f=-9e3*a*Math.abs(a)-4e3*a+h*.3-this.bowThrust*1700;let u=h*Cx-12e4*l-6e5*l*Math.abs(l);c<0&&(u+=.12*c*1.5);const m=this.bowThrust*1700;u+=m*(Sn/2-1),this.u+=(d/Us-a*l)*t,this.v+=(f/Us+r*l)*t,this.r+=u/Ua*t,this.psi+=this.r*t;const _=Math.sin(this.psi),g=Math.cos(this.psi);this.x+=(this.u*_-this.v*g)*t,this.z+=(this.u*g+this.v*_)*t,this.contacts.length=0;for(let M=0;M<2;M++)this.resolveContacts(),this.resolveExtras();const p=this.route.project(this.x,this.z,this.s);this.s=p.s,this.d=p.d}toWorld(t,e){const n=Math.sin(this.psi),s=Math.cos(this.psi);return[this.x+e*n-t*s,this.z+e*s+t*n]}resolveContacts(){const{route:t,ww:e}=this,n=e.gates.filter(o=>Math.abs(o.s-this.s)<Sn+6&&e.gateBlocks(o)),s=this.obstacles.filter(o=>Math.abs(o.x-this.x)+Math.abs(o.z-this.z)<45);for(const[o,r]of Gh){const[a,l]=this.toWorld(o,r),c=t.project(a,l,this.s),h=t.frame(c.s),d=e.halfWidthAt(c.s)-.05;if(Math.abs(c.d)>d){const f=Math.sign(c.d);this.applyContact(a,l,h.nx*f,h.nz*f,Math.abs(c.d)-d,"bank")}for(const f of n)this.s<f.s&&c.s>f.s-vr?this.applyContact(a,l,h.tx,h.tz,c.s-(f.s-vr),"gate"):this.s>f.s&&c.s<f.s+vr&&this.applyContact(a,l,-h.tx,-h.tz,f.s+vr-c.s,"gate");for(const f of s){const u=a-f.x,m=l-f.z,_=Math.sin(f.psi),g=Math.cos(f.psi),p=u*_+m*g,M=-u*g+m*_,x=f.halfB+.05-Math.abs(M),v=f.halfL+.05-Math.abs(p);if(!(x<=0||v<=0))if(x<v){const A=-Math.sign(M)||1;this.applyContact(a,l,-g*A,_*A,x,"boat",f)}else{const A=-Math.sign(p)||1;this.applyContact(a,l,_*A,g*A,v,"boat",f)}}c.s<2&&this.applyContact(a,l,-h.tx,-h.tz,2-c.s,"bank"),c.s>t.length-2&&this.applyContact(a,l,h.tx,h.tz,c.s-(t.length-2),"bank")}}resolveExtras(){const t=Math.sin(this.psi),e=Math.cos(this.psi),n=Nn/2,s=Sn/2;for(const o of this.obstacles){if(Math.abs(o.x-this.x)+Math.abs(o.z-this.z)>45)continue;const r=Math.sin(o.psi),a=Math.cos(o.psi);for(const[l,c]of[[o.halfB,o.halfL],[-o.halfB,o.halfL],[o.halfB,-o.halfL],[-o.halfB,-o.halfL]]){const h=o.x+c*r-l*a,d=o.z+c*a+l*r,f=h-this.x,u=d-this.z,m=f*t+u*e,_=-f*e+u*t,g=n-Math.abs(_),p=s-.6-Math.abs(m);g<=0||p<=0||(g<p?this.applyContact(h,d,-e*Math.sign(_),t*Math.sign(_),g,"boat",o):this.applyContact(h,d,t*Math.sign(m),e*Math.sign(m),p,"boat",o))}}for(const o of this.tethers){const[r,a]=this.toWorld(o.local[0],o.local[1]),l=r-o.anchor[0],c=a-o.anchor[1],h=Math.hypot(l,c);h>o.length&&this.applyContact(r,a,l/h,c/h,h-o.length,"bank",void 0,!0)}}applyContact(t,e,n,s,o,r,a,l=!1){this.x-=n*o,this.z-=s*o;const c=t-this.x,h=e-this.z,d=Math.sin(this.psi),f=Math.cos(this.psi);let u=this.u*d-this.v*f,m=this.u*f+this.v*d;const _=u+this.r*h,g=m-this.r*c,p=_*n+g*s;if(p<=0)return;const M=h*n-c*s,x=-1.15*p/(1/Us+M*M/Ua);u+=x*n/Us,m+=x*s/Us,this.r+=x*M/Ua,u*=.995,m*=.995,this.u=u*d+m*f,this.v=-u*f+m*d,l||this.contacts.push({impulse:-x,kind:r,obstacle:a})}}const Lx={KeyW:"throttleUp",ArrowUp:"throttleUp",KeyS:"throttleDown",ArrowDown:"throttleDown",Space:"neutral",KeyT:"timeFaster",KeyR:"timeSlower",KeyV:"camera",KeyM:"map",KeyH:"help",KeyN:"mute",KeyL:"headlight",KeyF:"moor",KeyG:"clear",Enter:"nextTrip",Escape:"declineTrip"};class Dx{constructor(){U(this,"held",new Set);U(this,"queue",[]);U(this,"onFirstInput",null);U(this,"touchSteer",0);addEventListener("keydown",t=>{this.onFirstInput&&(this.onFirstInput(),this.onFirstInput=null);const e=Lx[t.code];e&&t.preventDefault(),!t.repeat&&(this.held.add(t.code),e&&this.queue.push(e))}),addEventListener("keyup",t=>this.held.delete(t.code)),addEventListener("blur",()=>this.held.clear())}get steer(){const t=this.held.has("KeyA")||this.held.has("ArrowLeft"),e=this.held.has("KeyD")||this.held.has("ArrowRight");return(t?1:0)-(e?1:0)||this.touchSteer}get bowThrust(){return(this.held.has("KeyZ")?1:0)-(this.held.has("KeyX")?1:0)}push(t){this.queue.push(t)}drain(){return this.queue.splice(0)}}const Un=matchMedia("(pointer: coarse)").matches,Vh=i=>Un?i.replace(/ ?\((?:[A-Z]|Enter|Esc)\)/g,""):i,Ix={F:"moor",G:"clear"};function Wh(i,t){let e=0;i.addEventListener("pointerdown",n=>{const s=performance.now();if(s-e>350)return void(e=s);e=0,n.preventDefault(),n.stopImmediatePropagation(),t()})}class Ux{constructor(t,e,n,s){U(this,"root");U(this,"loc");U(this,"helm");U(this,"lockPanel");U(this,"tip");U(this,"panelGroup",null);U(this,"nopeUntil",0);U(this,"nopeText","");U(this,"nopeGate",-1);U(this,"onGateTap",null);U(this,"toasts");U(this,"help");U(this,"chip");U(this,"trip");U(this,"promptEl");U(this,"summary");U(this,"lastTrip","");U(this,"offer");U(this,"lift");U(this,"tripTapOffers",!1);U(this,"lastPrompt","");U(this,"lastLock","");U(this,"lastHelm","");U(this,"lastLoc","");U(this,"winding",!1);U(this,"onSteer",null);U(this,"onNotch",null);U(this,"paintNotch",()=>{});U(this,"speedEl");U(this,"promptKey","");var o;this.root=t,t.innerHTML=`
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
        <button class="map-btn chip" aria-label="Map"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/></svg></button>
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
      </div>`,this.loc=t.querySelector(".loc"),this.helm=t.querySelector(".helm"),this.lockPanel=t.querySelector(".lock-panel"),this.toasts=t.querySelector(".toasts"),this.help=t.querySelector(".help"),this.chip=t.querySelector(".chip"),(o=t.querySelector(".map-btn"))==null||o.addEventListener("click",()=>e("map")),this.trip=t.querySelector(".trip"),this.promptEl=t.querySelector(".prompt"),this.summary=t.querySelector(".summary"),this.offer=t.querySelector(".offer"),this.lift=t.querySelector(".pill.lift"),this.offer.addEventListener("click",r=>{var l;const a=(l=r.target.closest("button"))==null?void 0:l.dataset.act;a&&e(a)});for(const r of[this.loc,this.trip])r.addEventListener("pointerdown",a=>a.preventDefault()),r.addEventListener("click",()=>{r===this.trip&&this.tripTapOffers?e("tripOffer"):r.classList.toggle("open")});this.summary.addEventListener("click",r=>{r.target.closest("button")&&e("nextTrip")}),this.chip.addEventListener("pointerdown",r=>r.preventDefault()),this.buildHelm(),this.chip.addEventListener("click",r=>{const a=r.target;a.closest(".chip-help")?e("help"):a.closest(".chip-time")&&e("timeCycle")}),Un&&this.buildSteerPad(t),this.promptEl.addEventListener("pointerdown",r=>r.preventDefault()),this.promptEl.addEventListener("click",()=>{const r=Ix[this.promptKey];r&&e(r)}),t.appendChild(n),t.querySelector(".map-wrap").appendChild(s),this.lockPanel.addEventListener("pointerdown",r=>r.preventDefault()),this.lockPanel.addEventListener("click",r=>{var h;const a=r.target.closest("button");if(!a)return;const l=a.dataset.g,c=a.dataset.w;l!==void 0&&c&&this.panelGroup?(h=this.onGateTap)==null||h.call(this,this.panelGroup.gates[Number(l)],c):a.dataset.act&&e(a.dataset.act)}),this.tip=document.createElement("div"),this.tip.className="lock-tip",this.tip.hidden=!0,t.appendChild(this.tip),n.addEventListener("click",()=>e("map")),s.addEventListener("click",()=>e("map"))}toggleHelp(t){this.help.hidden=t===void 0?!this.help.hidden:!t}setMapOpen(t){this.root.querySelector(".map-wrap").classList.toggle("open",t)}toast(t,e="info",n=4200){t=Vh(t);for(const o of this.toasts.children)if(o.textContent===t)return;for(;this.toasts.children.length>=3;)this.toasts.firstElementChild.remove();const s=document.createElement("div");s.className=`toast ${e}`,s.textContent=t,this.toasts.appendChild(s),setTimeout(()=>s.classList.add("out"),n),setTimeout(()=>s.remove(),n+600)}setLocation(t,e,n){const s=t+e+n;s!==this.lastLoc&&(this.lastLoc=s,this.loc.querySelector(".head").innerHTML=`<span class="ico">📍</span>${t.replace(/ Lock\b/g,"")}`,this.loc.querySelector(".more").innerHTML=`<div class="eyebrow">Shropshire Union Canal</div><div>${e}</div><div class="journal">${n}</div>`)}buildSteerPad(t){const e=document.createElement("div");e.className="steer-pad card",e.innerHTML='<span class="arr">‹</span><div class="track"><div class="knob"></div></div><span class="arr">›</span>',t.appendChild(e);const n=e.querySelector(".knob");let s=null;const o=a=>{var l;n.style.transform=`translateX(${-a*40}px)`,(l=this.onSteer)==null||l.call(this,a)};e.addEventListener("pointerdown",a=>{a.preventDefault();const l=e.getBoundingClientRect();s={x:l.left+l.width/2,id:a.pointerId},e.setPointerCapture(a.pointerId),e.classList.add("held"),o(Math.max(-1,Math.min(1,-(a.clientX-s.x)/40)))}),e.addEventListener("pointermove",a=>{s&&a.pointerId===s.id&&o(Math.max(-1,Math.min(1,-(a.clientX-s.x)/40)))});const r=a=>{!s||a.pointerId!==s.id||(s=null,e.classList.remove("held"),o(0))};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r)}buildRail(){const t=[];for(let a=ri;a>=Ns;a--)t.push(`<div class="pip ${a>0?"ahead":a<0?"astern":"n"}" data-n="${a}" style="grid-row: ${ri-a+1}"></div>`);const e=a=>ri-a+1;t.push(`<span style="grid-row: ${e(ri)} / ${e(1)+1}">FWD</span>`,`<span style="grid-row: ${e(0)}">N</span>`,`<span style="grid-row: ${e(-1)} / ${e(Ns)+1}">REV</span>`),this.helm.classList.add("rail-helm"),this.helm.innerHTML=`<div class="spd">0.0</div><div class="unit">mph</div><div class="rail">${t.join("")}</div>`,this.speedEl=this.helm.querySelector(".spd");const n=[...this.helm.querySelectorAll(".pip")];this.paintNotch=a=>n.forEach(l=>l.classList.toggle("on",Number(l.dataset.n)===a));const s=this.helm.querySelector(".rail"),o=a=>{const l=s.getBoundingClientRect(),c=Math.floor((a.clientY-l.top)/l.height*n.length);return ri-Math.max(0,Math.min(n.length-1,c))};let r=!1;Wh(this.helm,()=>{var a;r=!1,(a=this.onNotch)==null||a.call(this,0)}),s.addEventListener("pointerdown",a=>{var l;a.preventDefault(),r=!0,s.setPointerCapture(a.pointerId),(l=this.onNotch)==null||l.call(this,o(a))}),s.addEventListener("pointermove",a=>{var l;return r&&((l=this.onNotch)==null?void 0:l.call(this,o(a)))}),s.addEventListener("pointerup",()=>r=!1),s.addEventListener("pointercancel",()=>r=!1)}buildHelm(){if(Un)return this.buildRail();const t=yi.x,e=yi.y,n=48,s=(u,m)=>{const _=u*Math.PI/180;return[t+Math.sin(_)*m,e-Math.cos(_)*m]},o=(u,m,_)=>{const[g,p]=s(u,_),[M,x]=s(m,_);return`M${g.toFixed(1)},${p.toFixed(1)} A${_},${_} 0 0 1 ${M.toFixed(1)},${x.toFixed(1)}`},r=[];for(let u=Ns;u<=ri;u++){const[m,_]=s(u*Ls,n-4),[g,p]=s(u*Ls,n+(u===0?7:4));r.push(`<line x1="${m}" y1="${_}" x2="${g}" y2="${p}" class="${u===0?"tick n":"tick"}"/>`)}const[a,l]=s(0,n+14);this.helm.innerHTML=`
      <svg class="lever" viewBox="0 0 ${yi.w} ${yi.h}" width="${yi.w}" height="${yi.h}">
        <path d="${o(Ns*Ls,0,n)}" class="band astern"/>
        <path d="${o(0,ri*Ls,n)}" class="band ahead"/>
        ${r.join("")}
        <text x="${a}" y="${l+3}" class="lbl n">N</text>
        <g class="arm"><line x1="${t}" y1="${e-n+15}" x2="${t}" y2="${e-n+4}"/><circle cx="${t}" cy="${e-n}" r="7.5"/></g>
        <text x="${t}" y="${e-6}" class="spd">0.0</text>
        <text x="${t}" y="${e+5}" class="unit">mph</text>
      </svg>`;const c=this.helm.querySelector(".arm");this.paintNotch=u=>{c.style.transform=`rotate(${u*Ls}deg)`,c.classList.toggle("astern",u<0),c.classList.toggle("neutral",u===0)},this.speedEl=this.helm.querySelector(".spd");const h=this.helm.querySelector("svg"),d=u=>{const m=h.getBoundingClientRect(),_=(u.clientX-m.left)/m.width*yi.w-t,g=(u.clientY-m.top)/m.height*yi.h-e,p=Math.atan2(_,-g)*180/Math.PI;return Math.max(Ns,Math.min(ri,Math.round(p/Ls)))};let f=!1;Wh(h,()=>{var u;f=!1,(u=this.onNotch)==null||u.call(this,0)}),h.addEventListener("pointerdown",u=>{var m;u.preventDefault(),f=!0,h.setPointerCapture(u.pointerId),(m=this.onNotch)==null||m.call(this,d(u))}),h.addEventListener("pointermove",u=>{var m;return f&&((m=this.onNotch)==null?void 0:m.call(this,d(u)))}),h.addEventListener("pointerup",()=>f=!1),h.addEventListener("pointercancel",()=>f=!1)}setHelm(t){const e=`${t.notch}|${t.speedMph.toFixed(1)}`;e!==this.lastHelm&&(this.lastHelm=e,this.paintNotch(t.notch),this.speedEl.textContent=t.speedMph.toFixed(1));const n=`<span class="chip-time">${t.timeScale}×</span> <span class="chip-help"><kbd>H</kbd> help</span>`;this.chip.innerHTML!==n&&(this.chip.innerHTML=n)}setTrip(t){const e=JSON.stringify(t);if(e===this.lastTrip)return;this.lastTrip=e,this.tripTapOffers=!1,this.trip.hidden=t.state==="none",t.state==="none"&&this.trip.classList.remove("open");const n=t.state==="active"?`<span class="ico">🎯</span>${t.where}`:t.state==="done"?'<span class="ico">✅</span>Mission complete · <kbd>Enter</kbd>':'<span class="ico">🧭</span>Just cruising · tap for a trip';this.trip.querySelector(".head").innerHTML=n,this.trip.querySelector(".more").innerHTML=t.state==="none"?"":`<div class="eyebrow">Mission · ${t.title}</div><div>${t.brief}</div>`,this.trip.classList.toggle("idle",t.state==="none")}showOffer(t,e,n,s="Accept",o="Not now"){this.offer.innerHTML=`
      <div class="eyebrow">${t}</div>
      <div class="title">${e}</div>
      <p>${n}</p>
      <div class="buttons">
        <button data-act="nextTrip" class="go"><kbd>Enter</kbd> ${s}</button>
        <button data-act="declineTrip"><kbd>Esc</kbd> ${o}</button>
      </div>`,this.offer.hidden=!1}setLift(t){this.lift.hidden=!t,t&&(t=Vh(t)),t&&this.lift.textContent!==t&&(this.lift.innerHTML=`<div class="head"><span class="ico">🧑</span>${t}</div>`)}hideOffer(){this.offer.hidden=!0}get offerOpen(){return!this.offer.hidden}setPrompt(t){this.promptKey=(t==null?void 0:t.key)??"";const e=t?`<kbd>${t.key}</kbd> ${t.text}`:"";e!==this.lastPrompt&&(this.lastPrompt=e,this.promptEl.innerHTML=e,this.promptEl.classList.toggle("waiting",!!t&&!t.ready)),this.promptEl.hidden=!t}showSummary(t,e,n){const s=Math.floor(t.hours),o=Math.round((t.hours-s)*60);this.summary.innerHTML=`
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
      <button><kbd>Enter</kbd> Carry on</button>`,this.summary.hidden=!1}hideSummary(){this.summary.hidden=!0}get isWinding(){return this.winding}nope(t,e){this.panelGroup&&(this.nopeGate=this.panelGroup.gates.indexOf(t),this.nopeText=e,this.nopeUntil=performance.now()+2200,this.lastLock="")}setLockPanel(t,e){const n=e==null?void 0:e.step;if(this.tip.hidden=!0,!e||!n){this.lockPanel.hidden=!0,this.lastLock="",this.winding=!1,this.panelGroup=null;return}const s=n.group;this.panelGroup=s;const o=n.uphill,r=e.volunteers==="active";this.winding=s.gates.some(y=>y.paddle>0&&y.paddle<1);const a=performance.now()<this.nopeUntil,l=s.bodies.map(y=>t.bodies[y]);let c=1/0,h=-1/0;for(const y of l)c=Math.min(c,y.lo-1.6),h=Math.max(h,y.hi+.6);const d=y=>Math.round((y-c)/(h-c)*100);let f=l.map((y,C)=>C);o||f.reverse();const u=7;let m=0,_=0;if(f.length>u){const y=Math.max(0,f.indexOf(n.boatBody)),C=Math.max(0,Math.min(f.length-u,y-3));m=C,_=f.length-(C+u),f=f.slice(C,C+u)}const g=n.boatBody>=0?(l[n.boatBody].s0+l[n.boatBody].s1)/2:NaN,p=[...n.adjacent].sort((y,C)=>o?y.s-C.s:C.s-y.s),M=y=>p.includes(y)?p.length===2?y===p[0]?"behind":"ahead":Number.isNaN(g)?"here":(y.s-g)*(o?1:-1)>0?"ahead":"behind":"",x=[];m&&x.push(`<div class="dg-more">⋯ +${m}</div>`),f.forEach((y,C)=>{const k=l[y],F=k.kind==="pound"?"canal":s.staircase?k.label.replace("chamber ",""):"lock",O=n.boatBody===y?'<i class="dg-boat"></i>':"";if(x.push(`<div class="dg-body ${k.kind}"><div class="dg-floor" style="height:${d(k.lo-1.6)}%"></div><div class="dg-water" style="height:${d(k.level)}%">${O}</div><span>${F}</span></div>`),C<f.length-1){const B=o?y:y-1,V=s.gates[B],N=M(V),W=[V.open>.5?"open":"shut",V.paddle>.5?"pup":"",N?`mine ${N}`:"dim"].join(" ");x.push(`<div class="dg-gate ${W}"><i class="dg-leaf"></i><i class="dg-pflag"></i>`+(V.paddle>.05?'<i class="dg-flow"></i>':"")+(N?`<i class="dg-tag">${N==="behind"?"B":"A"}</i>`:"")+"</div>")}}),_&&x.push(`<div class="dg-more">+${_} ⋯</div>`);const v={paddlesUp:"Raise paddles",paddlesDown:"Drop paddles",open:"Open gates",close:"Close gates"},A=(y,C)=>n.gate===y&&!n.keeper&&n.action in v?n.action:y.wantOpen?y.wantPaddle?"paddlesDown":C==="ahead"||C==="here"?null:"close":y.wantPaddle?e.levelsMatch(y)&&C!=="behind"?"open":"paddlesDown":C==="behind"?null:e.levelsMatch(y)?"open":"paddlesUp",S=p.map(y=>{const C=M(y),k=s.gates.indexOf(y),F=`${y.open>.97?"Open":y.open>.02?y.wantOpen?"Opening…":"Closing…":"Shut"} · paddles ${y.paddle>.97?"up":y.paddle>.02?y.wantPaddle?"going up":"going down":"down"}`,O=r?null:A(y,C),B=O&&n.gate===y&&!n.keeper&&n.action===O,V=r?'<div class="lc-btn none">Volunteers working</div>':O?`<button class="lc-btn ${B?"guide":""}" data-g="${k}" data-w="${O}" tabindex="-1">${v[O]}</button>`:'<div class="lc-btn none">✓ Done</div>',N=C==="behind"?"◀ Behind":C==="ahead"?"Ahead ▶":"Here";return`<div class="lc ${C} ${a&&k===this.nopeGate?"nope":""}"><div class="lc-where">${N} <b>${Nx(y.label)}</b></div><div class="lc-state">${F}</div>${V}</div>`}),E=e.volunteers==="available"?'<button class="lp-volchip" data-act="autopilot" tabindex="-1">Auto</button>':r?'<button class="lp-volchip on" data-act="autopilot" tabindex="-1">Take over</button>':"",b=a?this.nopeText:r?`Volunteers: ${n.text}`:n.text,w=`
      <div class="lp-head"><span class="lp-title">${s.name} ${o?"↑":"↓"}</span>${E}</div>
      <div class="dg">${x.join("")}</div>
      <div class="lc-row">${S.join("")}</div>
      <div class="lp-status ${a?"warn":""}">${b}</div>`;w!==this.lastLock&&(this.lastLock=w,this.lockPanel.innerHTML=w),this.lockPanel.hidden=!1}}const Nx=i=>i[0].toUpperCase()+i.slice(1),Ls=15,yi={x:62,y:68,w:124,h:76},Xh="canal.installDismissed",$h="canal.appInstalled";function kx(i){const t=matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches||navigator.standalone;if(!Un||t)return;try{if(sessionStorage.getItem(Xh)||localStorage.getItem($h))return}catch{}const e=navigator.userAgent,n=/iPhone|iPad|iPod/.test(e)||e.includes("Mac")&&navigator.maxTouchPoints>1,s=/CriOS|EdgiOS/.test(e),o=document.createElement("div");o.className="install card",o.hidden=!0,i.appendChild(o);const r=(c,h=!1,d=!1)=>{o.innerHTML=`
      <div class="eyebrow">Get the app</div>
      <div class="title">Install Canal as an app</div>
      <p>Free, no app store. It runs full screen with no browser bars, works better with touch, and opens from your home screen like any other app.</p>
      ${c}
      <div class="buttons">
        ${h?'<button class="go" data-act="install">Install app</button>':""}
        ${d?'<button data-act="have">I already have it</button>':""}
        <button data-act="later">Not now</button>
      </div>`,o.hidden=!1};let a=null;o.addEventListener("click",async c=>{var d;const h=(d=c.target.closest("button"))==null?void 0:d.dataset.act;if(h==="install"&&a)await a.prompt(),a=null,o.hidden=!0;else if(h==="have"){o.hidden=!0;try{localStorage.setItem($h,"1")}catch{}}else if(h==="later"){o.hidden=!0;try{sessionStorage.setItem(Xh,"1")}catch{}}});const l='<svg class="ios-share" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M6 11H5v10h14V11h-1"/></svg>';if(n){const c=s?"in the address bar at the top":/FxiOS/.test(e)?"in the ☰ menu":"at the bottom of the screen (top right on iPad)";r(`<ol>
      <li>Tap Share ${l} ${c}</li>
      <li>Scroll down and tap <b>Add to Home Screen</b>, then <b>Add</b></li>
      <li>Open Canal from its new icon on your home screen</li>
    </ol>`,!1,!0)}else addEventListener("beforeinstallprompt",c=>{c.preventDefault(),a=c,r("",!0)}),addEventListener("appinstalled",()=>o.hidden=!0)}const $e=.5,qh=650;class Ox{constructor(t,e,n,s){U(this,"el");U(this,"bigEl");U(this,"base");U(this,"locks");U(this,"bigOpen",!1);U(this,"dest",null);U(this,"pan",null);U(this,"wasOpen",!1);U(this,"bigTx",{ox:0,oz:0,sk:1,dpr:1});U(this,"dragAt",null);U(this,"onTeleport",null);U(this,"places",[]);U(this,"hazards",[]);U(this,"missionStarts",[]);U(this,"missionStartsFaded",!1);U(this,"liftDest",null);this.b=s;const o=this.base=document.createElement("canvas");o.width=Math.ceil((s.x1-s.x0)*$e),o.height=Math.ceil((s.z1-s.z0)*$e);const r=o.getContext("2d"),a=d=>(d-s.x0)*$e,l=d=>(d-s.z0)*$e,c=(d,f)=>{r.beginPath();for(let u=0;u<d.length;u+=2)(u?r.lineTo:r.moveTo).call(r,a(d[u]),l(d[u+1]));f&&r.closePath()};r.fillStyle="#e5e9d2",r.fillRect(0,0,o.width,o.height),r.fillStyle="#c9dcaa";for(const d of t.parks)c(d.p,!0),r.fill();r.fillStyle="#9cc3d2";for(const d of t.water)c(d.p,!0),r.fill();r.strokeStyle="#9cc3d2",r.lineCap=r.lineJoin="round";for(const d of t.rivers)r.lineWidth=d.w*$e,c(d.p,!1),r.stroke();r.fillStyle="#d2c3ae";for(const d of t.buildings)c(d.p,!0),r.fill();for(const d of[0,1])for(const f of t.roads)f.w<3||(r.strokeStyle=d?"#ffffff":"#b9b2a4",r.lineWidth=f.w*$e+(d?0:1.5),c(f.p,!1),r.stroke());r.strokeStyle="#5b5550",r.lineWidth=1.5,r.setLineDash([4,3]);for(const d of t.rails)c(d.p,!1),r.stroke();r.setLineDash([]),r.strokeStyle="#2f7aa0",r.lineWidth=4,c(t.centreline,!1),r.stroke();const h=new Map;for(const d of n.gates){const f=e.frame(d.s);let u=h.get(d.lockName);u||h.set(d.lockName,u={name:d.lockName,x:0,z:0,gates:[]}),u.gates.push({x:f.x,z:f.z,nx:f.nx,nz:f.nz})}for(const d of h.values())d.x=d.gates.reduce((f,u)=>f+u.x,0)/d.gates.length,d.z=d.gates.reduce((f,u)=>f+u.z,0)/d.gates.length;this.locks=[...h.values()],this.el=document.createElement("canvas"),this.el.className="minimap",this.el.width=this.el.height=440,this.bigEl=document.createElement("canvas"),this.bigEl.className="bigmap",Un&&this.enablePan()}enablePan(){const t=this.bigEl;let e=null,n=!1;t.addEventListener("pointerdown",o=>{this.dragAt||(e={x:o.clientX,y:o.clientY,id:o.pointerId},n=!1,t.setPointerCapture(o.pointerId))}),t.addEventListener("pointermove",o=>{if(!e||o.pointerId!==e.id||!this.pan)return;const r=o.clientX-e.x,a=o.clientY-e.y;if(!n&&Math.hypot(r,a)<8)return;n=!0;const l=this.bigTx.dpr;this.pan=[this.pan[0]+r*l,this.pan[1]+a*l],e.x=o.clientX,e.y=o.clientY});const s=()=>e=null;t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("click",o=>{n&&(o.stopImmediatePropagation(),n=!1)},{capture:!0})}draw(t,e,n){const s=this.el.getContext("2d"),o=this.el.width,r=qh*$e,a=(t-this.b.x0)*$e-r/2,l=(e-this.b.z0)*$e-r/2;s.fillStyle="#e5e9d2",s.fillRect(0,0,o,o),s.drawImage(this.base,a,l,r,r,0,0,o,o);const c=o/qh,h=(d,f)=>[o/2+(d-t)*c,o/2+(f-e)*c];if(this.drawPlaces(s,h,2,!1),this.drawLocks(s,h,2,9),this.drawDestination(s,h,2,o),this.drawDestination(s,h,2,o,this.liftDest,"#5aa0e0","#1d3557"),this.drawHazards(s,h,2),this.drawMissionStarts(s,h,2),this.boatMarker(s,o/2,o/2,n,1.6),this.bigOpen){const d=this.bigEl,f=Math.min(2,devicePixelRatio);d.width=d.clientWidth*f,d.height=d.clientHeight*f;const u=d.getContext("2d"),_=(Un?Math.max:Math.min)(d.width/this.base.width,d.height/this.base.height);let g=(d.width-this.base.width*_)/2,p=(d.height-this.base.height*_)/2;if(Un){(!this.wasOpen||!this.pan)&&(this.pan=[-((t-this.b.x0)*$e*_+g-d.width/2),-((e-this.b.z0)*$e*_+p-d.height/2)]);const S=Math.max(0,-g),E=Math.max(0,-p);this.pan=[Math.max(-S,Math.min(S,this.pan[0])),Math.max(-E,Math.min(E,this.pan[1]))],g+=this.pan[0],p+=this.pan[1]}u.fillStyle="#e5e9d2",u.fillRect(0,0,d.width,d.height),u.drawImage(this.base,g,p,this.base.width*_,this.base.height*_);const M=$e*_,x=(S,E)=>[g+(S-this.b.x0)*M,p+(E-this.b.z0)*M];this.drawPlaces(u,x,f,!0),this.drawLocks(u,x,f,7),this.drawDestination(u,x,f*1.3,null),this.drawDestination(u,x,f*1.3,null,this.liftDest,"#5aa0e0","#1d3557"),this.drawHazards(u,x,f*1.3),this.drawMissionStarts(u,x,f*1.3),this.bigTx={ox:g,oz:p,sk:M,dpr:f};const[v,A]=this.dragAt??x(t,e);this.boatMarker(u,v,A,n,1.4*f),this.onTeleport&&(u.font=`800 ${12*f}px Nunito, sans-serif`,u.fillStyle="#a3291f",u.fillText("DEV: drag the boat to move it",14*f,d.height-14*f))}this.wasOpen=this.bigOpen}enableDevTeleport(t,e){this.onTeleport=e;const n=this.bigEl,s=r=>{const a=n.getBoundingClientRect();return[(r.clientX-a.left)*this.bigTx.dpr,(r.clientY-a.top)*this.bigTx.dpr]};let o=!1;n.addEventListener("pointerdown",r=>{const{ox:a,oz:l,sk:c,dpr:h}=this.bigTx,[d,f]=t(),[u,m]=s(r);Math.hypot(u-(a+(d-this.b.x0)*c),m-(l+(f-this.b.z0)*c))>30*h||(this.dragAt=[u,m],o=!1,n.setPointerCapture(r.pointerId))}),n.addEventListener("pointermove",r=>{this.dragAt&&(this.dragAt=s(r),o=!0)}),n.addEventListener("pointerup",()=>{if(!this.dragAt)return;const{ox:r,oz:a,sk:l}=this.bigTx,[c,h]=this.dragAt;this.dragAt=null,o&&e(this.b.x0+(c-r)/l,this.b.z0+(h-a)/l)}),n.addEventListener("click",r=>{o&&(r.stopImmediatePropagation(),o=!1)},{capture:!0}),n.style.cursor="default"}addMooredBoats(t){const e=this.base.getContext("2d");e.fillStyle="#5b4a8a";for(const n of t)e.save(),e.translate((n.x-this.b.x0)*$e,(n.z-this.b.z0)*$e),e.rotate(-n.psi),e.fillRect(-Math.max(1.2,n.halfB*$e),-n.halfL*$e,Math.max(2.4,n.halfB*2*$e),n.halfL*2*$e),e.restore()}setPlaces(t){this.places=t}drawPlaces(t,e,n,s){t.save(),t.textAlign="center",t.textBaseline="middle";const o=[];for(const r of this.places){const[a,l]=e(r.x,r.z);if(!(a<-20||l<-20||a>t.canvas.width+20||l>t.canvas.height+20)&&(t.fillStyle="rgba(255, 250, 235, 0.95)",t.strokeStyle=r.icon==="★"?"#1d3557":"#6e1f1a",t.lineWidth=1.5*n,t.beginPath(),t.arc(a,l,9*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#1d3557",t.font=`${r.icon==="★"?800:400} ${11*n}px Nunito, sans-serif`,t.fillText(r.icon,a,l+.5*n),s)){t.font=`700 ${10*n}px Nunito, sans-serif`;const c=t.measureText(r.name).width,h=a-c/2,d=l+11*n,f=l+23*n;if(o.some(([u,m,_,g])=>h<_&&h+c>u&&d<g&&f>m))continue;o.push([h-4*n,d,h+c+4*n,f]),t.lineWidth=3*n,t.strokeStyle="rgba(255,255,255,0.9)",t.strokeText(r.name,a,l+17*n),t.fillStyle="#3a2a1a",t.fillText(r.name,a,l+17*n)}}t.restore()}setMissionStarts(t,e=!1){this.missionStarts=t,this.missionStartsFaded=e}drawMissionStarts(t,e,n){t.save(),t.textAlign="center",t.textBaseline="middle",t.globalAlpha=this.missionStartsFaded?.45:1;for(const[s,o]of this.missionStarts){const[r,a]=e(s,o);t.fillStyle="#5ec27a",t.strokeStyle="#1f4d3a",t.lineWidth=2*n,t.beginPath(),t.arc(r,a-12*n,8*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#10261c",t.font=`900 ${11*n}px Nunito, sans-serif`,t.fillText("!",r,a-11.5*n)}t.restore()}setHazards(t){this.hazards=t}drawHazards(t,e,n){for(const[s,o]of this.hazards)this.drawHazard(t,e(s,o),n)}drawHazard(t,[e,n],s){t.save(),t.fillStyle="#ffcf4a",t.strokeStyle="#7a2f00",t.lineWidth=1.5*s,t.beginPath(),t.moveTo(e,n-10*s),t.lineTo(e+9*s,n+6*s),t.lineTo(e-9*s,n+6*s),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#7a2f00",t.font=`900 ${10*s}px Nunito, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("!",e,n+1*s),t.restore()}clearDestination(){this.dest=null}setDestination(t,e,n){this.dest={x:t,z:e,name:n}}drawDestination(t,e,n,s,o=this.dest,r="#ffcf4a",a="#7a5a10"){if(!o)return;let[l,c]=e(o.x,o.z);if(s!==null){const h=s/2,d=l-h,f=c-h,u=Math.hypot(d,f),m=h-14*n;u>m&&(l=h+d/u*m,c=h+f/u*m)}t.save(),t.fillStyle=r,t.strokeStyle=a,t.lineWidth=1.5*n,t.beginPath(),t.moveTo(l,c),t.lineTo(l,c-18*n),t.stroke(),t.beginPath(),t.moveTo(l,c-18*n),t.lineTo(l+12*n,c-13.5*n),t.lineTo(l,c-9*n),t.closePath(),t.fill(),t.stroke(),t.restore()}drawLocks(t,e,n,s){t.save(),t.lineCap="round";for(const o of this.locks)for(const r of o.gates){const[a,l]=e(r.x,r.z),c=r.nx*s*n,h=r.nz*s*n;for(const[d,f]of[[5,"#ffffff"],[2.5,"#1b1b1b"]])t.strokeStyle=f,t.lineWidth=d*n,t.beginPath(),t.moveTo(a-c,l-h),t.lineTo(a+c,l+h),t.stroke()}t.font=`800 ${12*n}px Nunito, sans-serif`,t.textBaseline="middle";for(const o of this.locks){const[r,a]=e(o.x,o.z),l=o.gates.length>2?`${o.name} · ${o.gates.length-1} locks`:o.name,c=t.measureText(l).width,h=20*n,d=8*n,f=r-c/2-d,u=a-h-12*n;t.fillStyle="rgba(31, 77, 58, 0.94)",t.beginPath(),t.roundRect(f,u,c+d*2,h,h/2),t.fill(),t.beginPath(),t.moveTo(r-5*n,u+h-.5),t.lineTo(r+5*n,u+h-.5),t.lineTo(r,u+h+6*n),t.fill(),t.fillStyle="#f6efdd",t.fillText(l,f+d,u+h/2+n)}t.restore()}boatMarker(t,e,n,s,o){t.save(),t.translate(e,n),t.rotate(-s+Math.PI),t.scale(o,o),t.fillStyle="#a3291f",t.strokeStyle="#fff",t.lineWidth=2,t.beginPath(),t.moveTo(0,-11),t.lineTo(6,8),t.lineTo(0,4),t.lineTo(-6,8),t.closePath(),t.stroke(),t.fill(),t.restore()}}class Fx{constructor(){U(this,"ctx",null);U(this,"master");U(this,"noise");U(this,"waterGain");U(this,"rumbleGain");U(this,"nextThump",0);U(this,"engine",null);U(this,"nextBird",0);U(this,"nextClick",0);U(this,"muted",zx())}start(){if(this.ctx)return;const t=this.ctx=new AudioContext;this.master=t.createGain(),this.master.gain.value=this.muted?0:.7,this.master.connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*2,t.sampleRate);const e=this.noise.getChannelData(0);for(let a=0;a<e.length;a++)e[a]=Math.random()*2-1;const n=t.createBufferSource();n.buffer=this.noise,n.loop=!0;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=900,this.waterGain=t.createGain(),this.waterGain.gain.value=0,n.connect(s).connect(this.waterGain).connect(this.master),n.start();const o=t.createBufferSource();o.buffer=this.noise,o.loop=!0;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=160,this.rumbleGain=t.createGain(),this.rumbleGain.gain.value=0,o.connect(r).connect(this.rumbleGain).connect(this.master),o.start(),this.loadEngine().catch(a=>console.warn("Engine samples unavailable, using synth",a))}async loadEngine(){const t=this.ctx,e=async c=>t.decodeAudioData(await(await fetch(c)).arrayBuffer()),[n,s]=await Promise.all([e("./audio/engine-idle.wav"),e("./audio/engine-run.wav")]),o=(c,h)=>{const d=t.createBufferSource();return d.buffer=c,d.loop=!0,d.connect(h),d.start(),d},r=t.createGain(),a=t.createGain();r.gain.value=a.gain.value=0;const l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=2400,r.connect(l),a.connect(l),l.connect(this.master),this.engine={idle:o(n,r),run:o(s,a),idleGain:r,runGain:a}}toggleMute(){this.muted=!this.muted,this.ctx&&(this.master.gain.value=this.muted?0:.7);try{localStorage.setItem("canal.muted",this.muted?"1":"0")}catch{}}update(t,e,n,s){const o=this.ctx;if(!o)return;const r=o.currentTime,a=Math.abs(t);if(this.engine){const l=this.engine,c=Math.min(1,a*.4);l.idleGain.gain.setTargetAtTime((1-c)*.55,r,.25),l.runGain.gain.setTargetAtTime(c*(.45+a*.05),r,.25),l.idle.playbackRate.setTargetAtTime(1+a*.08,r,.4),l.run.playbackRate.setTargetAtTime(.62+Math.max(0,a-1)*.095,r,.4)}else{const l=7+a*1.9;for(this.nextThump<r&&(this.nextThump=r);this.nextThump<r+.1;)this.thump(this.nextThump,.22+a*.035),this.nextThump+=1/l}this.waterGain.gain.setTargetAtTime(Math.min(.35,e*.06),r,.3),n&&r>this.nextClick&&(this.click(r),this.nextClick=r+.13),s&&r>this.nextBird&&(this.nextBird>0&&this.bird(r),this.nextBird=r+4+Math.random()*9)}rumble(t){this.ctx&&this.rumbleGain.gain.setTargetAtTime(t*t*.9,this.ctx.currentTime,.3)}bump(t){const e=this.ctx;if(!e)return;const n=e.currentTime,s=e.createOscillator();s.frequency.setValueAtTime(70,n),s.frequency.exponentialRampToValueAtTime(35,n+.25);const o=e.createGain();o.gain.setValueAtTime(Math.min(.9,t),n),o.gain.exponentialRampToValueAtTime(.001,n+.35),s.connect(o).connect(this.master),s.start(n),s.stop(n+.4)}quack(){const t=this.ctx;if(!t)return;const e=t.currentTime;for(let n=0;n<2;n++){const s=e+n*.16,o=t.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(520,s),o.frequency.exponentialRampToValueAtTime(330,s+.11);const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=1100,r.Q.value=3;const a=t.createGain();a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.25,s+.015),a.gain.exponentialRampToValueAtTime(1e-4,s+.12),o.connect(r).connect(a).connect(this.master),o.start(s),o.stop(s+.13)}}thump(t,e){const n=this.ctx,s=n.createOscillator();s.type="triangle",s.frequency.setValueAtTime(58,t),s.frequency.exponentialRampToValueAtTime(38,t+.08);const o=n.createGain();o.gain.setValueAtTime(e,t),o.gain.exponentialRampToValueAtTime(.001,t+.11),s.connect(o).connect(this.master),s.start(t),s.stop(t+.12);const r=n.createBufferSource();r.buffer=this.noise;const a=n.createBiquadFilter();a.type="bandpass",a.frequency.value=220;const l=n.createGain();l.gain.setValueAtTime(e*.5,t),l.gain.exponentialRampToValueAtTime(.001,t+.06),r.connect(a).connect(l).connect(this.master),r.start(t,Math.random(),.07)}click(t){const e=this.ctx,n=e.createBufferSource();n.buffer=this.noise;const s=e.createBiquadFilter();s.type="highpass",s.frequency.value=2500;const o=e.createGain();o.gain.setValueAtTime(.35,t),o.gain.exponentialRampToValueAtTime(.001,t+.03),n.connect(s).connect(o).connect(this.master),n.start(t,Math.random(),.04)}bird(t){const e=this.ctx,n=2+Math.floor(Math.random()*4),s=2600+Math.random()*1600;for(let o=0;o<n;o++){const r=t+o*(.09+Math.random()*.05),a=e.createOscillator();a.type="sine",a.frequency.setValueAtTime(s,r),a.frequency.exponentialRampToValueAtTime(s*(.7+Math.random()*.6),r+.07);const l=e.createGain();l.gain.setValueAtTime(1e-4,r),l.gain.exponentialRampToValueAtTime(.05,r+.01),l.gain.exponentialRampToValueAtTime(1e-4,r+.08),a.connect(l).connect(this.master),a.start(r),a.stop(r+.1)}}}function zx(){try{return localStorage.getItem("canal.muted")==="1"}catch{return!1}}const xr=.04,Bx=90;function Yh(i,t,e){const n=Gx(i,t,e);return n!=null&&n.keeper&&(n.text=Hx(n)),n}function Hx(i){const t=i.gate.label;switch(i.action){case"paddlesUp":return`Lock-keeper: ${i.text.charAt(0).toLowerCase()}${i.text.slice(1).replace(/\.$/,"")}…`;case"paddlesDown":return`Lock-keeper: dropping the ${t} paddles…`;case"close":return`Lock-keeper: closing the ${t}…`;case"open":return`Lock-keeper: opening the ${t}…`;case"wait":return`Lock-keeper: ${i.text.charAt(0).toLowerCase()}${i.text.slice(1)}`;default:return i.text}}function Gx(i,t,e){const[n,s]=t,o=(n+s)/2;let r,a=1/0;for(const v of i.groups){const A=v.gates[0].s,S=v.gates.at(-1).s,E=e?A-o:o-S,b=o>A-2&&o<S+2,w=b?0:E;(b||E>0&&E<Bx)&&w<a&&(a=w,r=v)}if(!r){for(const v of i.groups){const A=v.gates[0].s,S=v.gates.at(-1).s,E=e?o-S:A-o;if(E>0&&E<60){const b=v.gates.find(y=>y.wantPaddle)??v.gates.find(y=>y.wantOpen),w=e?v.gates.at(-1):v.gates[0];if(b)return{group:v,uphill:e,gate:b,boatBody:e?v.bodies.length-1:0,adjacent:[w],keeper:b!==w,action:b.wantPaddle?"paddlesDown":"close",text:b.wantPaddle?`Before you go: drop the paddles on the ${b.label} behind you.`:`Before you go: close the ${b.label} behind you.`}}}return null}const l=r.gates.length-1,c=e?r.gates:[...r.gates].reverse(),d=(e?r.bodies:[...r.bodies].reverse()).map(v=>i.bodies[v]),f=v=>e?v:l+1-v;let u=-1;for(let v=0;v<=l+1;v++){const A=d[v];n>=A.s0-.2&&s<=A.s1+.2&&(u=v)}const m=c.find(v=>v.s>n&&v.s<s),_=u<0?m?[m]:[]:u===l+1?[c[l]]:[c[u-1],c[u]].filter(v=>!!v),g=(v,A,S,E=u)=>({group:r,uphill:e,gate:v,action:A,text:S,boatBody:E<0?-1:f(E),adjacent:_,keeper:!!v&&!_.includes(v)&&A!=="drive"});if(u<0)return g(m??null,"drive","Keep going, nice and slow.");if(u===l+1){const v=r.gates.find(A=>A.wantPaddle)??r.gates.find(A=>A.wantOpen);return v?g(v,v.wantPaddle?"paddlesDown":"close",v.wantPaddle?`You're through! Drop the paddles on the ${v.label} behind you.`:`You're through! Close the ${v.label} behind you.`):null}const p=c[u],M=v=>v.label==="the canal"?v===d[0]?"the canal behind you":"the canal ahead":v.label;if(u>0&&c[u-1].wantOpen)return g(c[u-1],"close",`Close the ${c[u-1].label} behind you.`);if(Math.abs(d[u].level-d[u+1].level)<xr){for(const v of r.gates)if(v!==p&&v.wantPaddle)return g(v,"paddlesDown",`Drop the ${v.label} paddles so the water stays put.`)}else{const v=c.find((N,W)=>W!==u&&N.wantOpen);if(v)return g(v,"close",`First close the ${v.label}, or the water will just run away.`);const A=r.gates.filter(N=>N.wantPaddle&&Math.abs(i.bodies[N.below].level-i.bodies[N.above].level)>=xr),S=A.find(N=>N.paddle>.95&&Math.abs(N.flow)<.001);if(S){const N=i.bodies[S.above];return g(S,"paddlesDown",`${Na(M(N))} ran dry before the levels matched. Drop these paddles so it can be topped up.`)}if(A.length>1)return g(A[1],"paddlesDown",`One set of paddles at a time: drop the ${A[1].label} paddles.`);if(A.length===1){const N=A[0],W=i.bodies[N.below],ht=i.bodies[N.above],vt=(ht.level-W.level).toFixed(1),Mt=ht.kind==="pound"?`Filling ${M(W)}`:W.kind==="pound"?`Emptying ${M(ht)}`:`${Na(M(ht))} → ${M(W)}`;return g(N,"wait",`${Mt}… ${vt} m to go`)}const E=N=>d[N].kind==="pound"||d[N].level>d[N].hi-xr,b=N=>d[N].kind==="pound"||d[N].level<d[N].lo+xr,w=(N,W)=>c[Math.min(N,W)],y=N=>e?N+1:N-1,C=N=>e?N-1:N+1,k=N=>{const W=y(N);return E(W)?[w(N,W),`fill ${M(d[N])} from ${M(d[W])}`]:k(W)},F=N=>{const W=C(N);return b(W)?[w(N,W),`empty ${M(d[N])} into ${M(d[W])}`]:F(W)};let O;if(d[u].kind==="pound"||d[u+1].kind==="pound"){const N=d[u].level>d[u+1].level?d[u]:d[u+1],W=N===d[u]?d[u+1]:d[u];O=[p,N.kind==="pound"?`fill ${M(W)} from ${M(N)}`:`empty ${M(N)} into ${M(W)}`]}else(e?!E(u+1):!b(u+1))?(O=e?k(u+1):F(u+1),O[1]=`first, ${O[1]}`):(e?!b(u):!E(u))?(O=e?F(u):k(u),O[1]=`first, ${O[1]}`):O=[p,`let ${M(d[e?u+1:u])} empty into ${M(d[e?u:u+1])}`];const[B,V]=O;for(const N of r.gates)if(N!==B&&N.wantPaddle)return g(N,"paddlesDown",`Drop the ${N.label} paddles so the water stays put.`);return g(B,"paddlesUp",`${Na(V)}.`)}return p.wantOpen?p.open<.97?g(p,"wait",`The ${p.label} are swinging open…`):p.wantPaddle?g(p,"paddlesDown",`Drop the paddles on the ${p.label}.`):g(p,"drive",`Gates open. Drive ${u+1===l+1?"out of the lock":`into ${M(d[u+1])}`}.`):g(p,"open",`Levels match: open the ${p.label}.`)}const Na=i=>i.charAt(0).toUpperCase()+i.slice(1),jh=["Kingfisher","Dunroamin","Willow","Morning Mist","Heron","Bramble","Otter","Lazy Days","Moorhen","Puddle Duck","Wren","Seren","Daisy May","Jubilee","Halcyon","Mallard","Badger","Tilly","Dragonfly","Rosie","Swallow","Nutmeg","Lily Pad","Bluebell","Damselfly","Kestrel","Second Wind","Tortoise","Meander","Sunflower","Jolly Roger","Dormouse","Albatross","Grebe","Primrose","Liberty","Plover","Hedgehog","Elderflower","Coot","Teasel","Old Bill","Marigold","Windrush","Peregrine","Thistle","Snowdrop","Toad Hall","Cobble","Foxglove","Pippin","Salamander","Spindle","Saffron","Sloe"],Zh=["#1f4d3a","#7a1f2b","#1d3557","#2e2a4a","#5a3d1e","#2f5d62","#6b2737","#264d2a","#3b4a6b","#8a5a1e"],Kh=["#7c2f23","#3a3d40","#d9ccaa","#2b2b2b","#8a7650","#4a5a3a"];class Vx{constructor(t,e,n,s,o,r,a){U(this,"group",new At);U(this,"boats",[]);U(this,"zones");U(this,"highlight");U(this,"marker");U(this,"time",0);U(this,"liftMarker",null);U(this,"stopMarkers",new Map);U(this,"starts",new Map);this.route=t,this.ww=e,this.terrain=n,this.zones=[{id:"tower",name:"Tower Wharf",kind:"visitor",s0:o+10,s1:o+55},{id:"city",name:"City moorings, Cow Lane Bridge",kind:"visitor",s0:1150,s1:1215},{id:"hoole",name:"Hoole",kind:"visitor",s0:2050,s1:2110},{id:"christleton",name:"Christleton",kind:"visitor",s0:4345,s1:4400}];const l=(u,m)=>e.gates.every(_=>_.s<u-35||_.s>m+35)&&s.every(_=>_.s<u-_.w/2-12||_.s>m+_.w/2+12)&&e.windingHoles.every(_=>_<u-45||_>m+45)&&this.zones.every(_=>_.s1<u-8||_.s0>m+8)&&e.bodies[e.bodyIndexAt((u+m)/2)].kind==="pound",c=a.filter(u=>u.type==="stop"&&!/drive.?thru/i.test(u.name)).sort((u,m)=>u.rank-m.rank||u.dist-m.dist);for(const u of c){const m=_=>_==="supermarket";if(!(!m(u.kind)&&this.zones.some(_=>{var g;return _.kind==="stop"&&!m((g=_.poi)==null?void 0:g.kind)&&Math.abs((_.s0+_.s1)/2-u.s)<120})))for(const _ of[0,8,-8,16,-16,24,-24,32,-32,45,-45,60,-60]){const g=u.s+_-18,p=u.s+_+18;if(!(g<30||p>t.length-30||!l(g,p))){this.zones.push({id:`stop:${u.name}`,name:u.name,kind:"stop",poi:u,s0:g,s1:p});break}}}for(const u of this.zones)this.buildZone(u);this.highlight=new J(new me,new _n({color:"#ffd76a",transparent:!0,opacity:.5,depthWrite:!1})),this.group.add(this.highlight),this.marker=Ol(),this.group.add(this.marker);const h=Ii(77),d=(u,m)=>u-m<40||u+m>t.length-40||e.gates.some(_=>Math.abs(_.s-u)<m+35)||s.some(_=>Math.abs(_.s-u)<m+_.w/2+14)||this.zones.some(_=>u+m>_.s0-6&&u-m<_.s1+6)||e.windingHoles.some(_=>Math.abs(_-u)<m+45)||Math.abs(u-r)<m+30||e.bodies[e.bodyIndexAt(u)].kind!=="pound";let f=[...jh];for(let u=60;u<t.length-60;){const m=u>o-250&&u<o+220?.85:u>2900&&u<3250?.6:.32,_=15+Math.round(h()*5);if(h()<m&&!d(u+_/2,_/2)){const g=f.splice(Math.floor(h()*f.length),1)[0]??"Narrowboat";f.length||(f=[...jh]),this.addBoat(u+_/2,_,g,h),u+=_+1+h()*3}else u+=6+h()*14}}addBoat(t,e,n,s){const o=this.route.frame(t),a=(this.ww.halfWidthAt(t)-Nn/2-.12)*oe,l=o.x+o.nx*a,c=o.z+o.nz*a,h=Math.atan2(o.tx,o.tz)+(s()<.5?0:Math.PI),d=lc({name:n,length:e,crew:!1,cabin:Zh[Math.floor(s()*Zh.length)],roof:Kh[Math.floor(s()*Kh.length)]}),f=Tx(d),u=this.ww.levelAt(t);f.position.set(l,u,c),f.rotation.order="YXZ",f.rotation.y=h,this.group.add(f),this.boats.push({x:l,z:c,psi:h,halfL:e/2,halfB:Nn/2,name:n,s:t,group:f,baseY:u,rock:0,rockedAt:-99})}buildZone(t){const e=new Jt({color:"#2a2a2a",metalness:.6,roughness:.4});for(let r=t.s0;r<=t.s1;r+=6){const a=this.ww.halfWidthAt(r),[l,c]=this.route.point(r,(a+.35)*oe),h=new J(new un(.14,.035,6,12),e);h.position.set(l,this.terrain.bankTop(r)+.07,c),h.rotation.x=Math.PI/2,this.group.add(h)}const n=this.route.frame(t.s0),s=(this.ww.halfWidthAt(t.s0)+2.9)*oe,o=t.kind==="stop"?Jh([`Moorings for ${qx(t.poi)}`,t.name],"#6e1f1a"):Jh(["Visitor moorings",t.name]);o.position.set(n.x+n.nx*s,this.terrain.bankTop(t.s0),n.z+n.nz*s),o.rotation.y=Math.atan2(oe*n.tz,-oe*n.tx),this.group.add(o)}setActive(t){if(this.highlight.visible=this.marker.visible=!!t,!t)return;const e=[],n=[];let s=0;for(let c=t.s0;c<=t.s1+.01;c+=1.5,s++){const h=this.ww.halfWidthAt(c),d=this.terrain.bankTop(c)+.06;for(const f of[h-.05,h+.75]){const[u,m]=this.route.point(c,f*oe);e.push(u,d,m)}s>0&&n.push((s-1)*2,(s-1)*2+1,s*2,(s-1)*2+1,s*2+1,s*2)}const o=new me;o.setAttribute("position",new qt(e,3)),o.setIndex(n),this.highlight.material.side=Ae,this.highlight.geometry.dispose(),this.highlight.geometry=o;const r=(t.s0+t.s1)/2,[a,l]=this.route.point(r,(this.ww.halfWidthAt(r)+.4)*oe);this.marker.position.set(a,this.terrain.bankTop(r)+4,l),this.marker.userData.y0=this.marker.position.y}rockBoat(t,e){t.rock=Math.min(.09,Math.max(t.rock,e)),t.rockedAt=this.time,this.popOwner(t,"shake")}popOwner(t,e){if(t.owner)this.time>t.owner.until&&(t.owner.from=this.time),t.owner.until=this.time+5,t.owner.mode=e;else{const n=qn(Ui(Math.random));n.group.position.set(0,-.4,-t.halfL+2.45),t.group.add(n.group),t.owner={person:n,from:this.time,until:this.time+5,mode:e}}}get now(){return this.time}update(t){var e;this.time+=t;for(const n of this.boats){const s=n.owner;if(s){const o=Math.min(1,(this.time-s.from)/.5)*Math.min(1,Math.max(0,(s.until-this.time)/.5));s.person.group.position.y=-.4+o*1,s.person.group.visible=o>.01,Ci(s.person,o>.6?s.mode:"rest",this.time)}n.rock<.001||(n.rock*=Math.exp(-t*.2),n.group.rotation.z=Math.sin(this.time*3.1)*n.rock,n.group.position.y=n.baseY+Math.sin(this.time*2.3)*n.rock*.6)}(e=this.liftMarker)!=null&&e.visible&&(this.liftMarker.position.y=this.liftMarker.userData.y0+Math.sin(this.time*1.6+2)*.25,this.liftMarker.rotation.y+=t*.9);for(const n of this.stopMarkers.values())n.visible&&(n.position.y=n.userData.y0+Math.sin(this.time*1.4+n.position.x)*.2,n.rotation.y+=t*.8);for(const n of this.starts.values())n.visible&&(n.position.y=n.userData.y0+Math.sin(this.time*1.6+1)*.25,n.children[0].rotation.y+=t*.9);this.marker.visible&&(this.marker.position.y=this.marker.userData.y0+Math.sin(this.time*1.6)*.25,this.marker.rotation.y+=t*.9,this.highlight.material.opacity=.35+.2*Math.sin(this.time*3))}setLiftDest(t){if(this.liftMarker||(this.liftMarker=Ol("#5aa0e0","#1d3d6b"),this.group.add(this.liftMarker)),this.liftMarker.visible=!!t,!t)return;const e=(t.s0+t.s1)/2,[n,s]=this.route.point(e,(this.ww.halfWidthAt(e)+.4)*oe);this.liftMarker.position.set(n,this.terrain.bankTop(e)+5.5,s),this.liftMarker.userData.y0=this.liftMarker.position.y}addStopMarker(t){var a;const e=Xx(((a=t.poi)==null?void 0:a.kind)??"pub"),n=Wx(t.name);n.position.y=-.9,e.add(n);const s=(t.s0+t.s1)/2,[o,r]=this.route.point(s,(this.ww.halfWidthAt(s)+1.5)*oe);e.position.set(o,this.terrain.bankTop(s)+3.6,r),e.userData.y0=e.position.y,this.group.add(e),this.stopMarkers.set(t.id,e)}hideStopMarker(t){const e=this.stopMarkers.get(t);e&&(e.visible=!1)}addStart(t){const e=this.zones.find(a=>a.id===t);if(!e||this.starts.has(t))return;const n=$x(),s=(e.s0+e.s1)/2,[o,r]=this.route.point(s,(this.ww.halfWidthAt(s)+.4)*oe);n.position.set(o,this.terrain.bankTop(s)+4,r),n.userData.y0=n.position.y,this.group.add(n),this.starts.set(t,n)}showStart(t,e){const n=this.starts.get(t);n&&(n.visible=e)}clearAround(t,e,n){for(const s of[...this.boats]){if(Math.abs(s.s-t)>e+s.halfL)continue;this.group.remove(s.group),this.boats.splice(this.boats.indexOf(s),1);const o=n.indexOf(s);o>=0&&n.splice(o,1)}}zoneAt(t){return this.zones.find(e=>t>=e.s0-4&&t<=e.s1+4)}}function Ol(i="#ffcf4a",t="#a07000"){const e=new At,n=new Jt({color:i,emissive:t,emissiveIntensity:.6,roughness:.4}),s=new J(new ic(.7,0),n);return s.scale.y=1.5,e.add(s),e}function Wx(i){const t=document.createElement("canvas"),e=t.getContext("2d"),n="800 44px Nunito, sans-serif";e.font=n;const s=Math.ceil(e.measureText(i).width)+48;t.width=s,t.height=76,e.font=n,e.fillStyle="rgba(246, 239, 221, 0.95)",e.strokeStyle="#6e1f1a",e.lineWidth=5,e.beginPath(),e.roundRect(3,3,s-6,70,32),e.fill(),e.stroke(),e.fillStyle="#3a1a14",e.textAlign="center",e.textBaseline="middle",e.fillText(i,s/2,40);const o=new On(t);o.colorSpace=Pe;const r=new Zu(new Jl({map:o,depthWrite:!1})),a=.62;return r.scale.set(a*s/76,a,1),r}function Xx(i){const t=new At,e=(s,o={})=>new Jt({color:s,roughness:.4,emissive:s,emissiveIntensity:.25,...o}),n=(s,o,r=0,a=0,l=0,c=0,h=0)=>{const d=new J(s,o);d.position.set(r,a,l),d.rotation.set(c,0,h),t.add(d)};return i==="cafe"||i==="ice_cream"?(n(new jt(.42,.32,.6,16),e("#f4f1ea"),0,.3),n(new jt(.38,.38,.04,16),e("#6b3f1f"),0,.58),n(new un(.17,.05,6,12),e("#f4f1ea"),.45,.32,0,0,0),n(new jt(.7,.6,.06,18),e("#f4f1ea"),0,-.02)):i==="restaurant"||i==="hotel"?(n(new jt(.75,.6,.08,20),e("#f4f1ea"),0,.3,0,Math.PI/2),n(new Wt(.07,1.2,.03),e("#c9c3b5",{metalness:.6}),-1,.3),n(new Wt(.07,1.2,.03),e("#c9c3b5",{metalness:.6}),1,.3)):(n(new jt(.42,.34,1,16),e("#d9921f",{transparent:!0,opacity:.92}),0,.5),n(new jt(.45,.42,.28,16),e("#fbf6e8"),0,1.12),n(new Ye(.3,10,6),e("#fbf6e8"),.1,1.28),n(new un(.26,.07,8,14),e("#e8dcc0",{transparent:!0,opacity:.85}),.5,.55,0,0,0)),t.scale.setScalar(1.3),t}function $x(){const i=Ol("#5ec27a","#1f6b3a"),t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");e.fillStyle="#1f4d3a",e.beginPath(),e.arc(64,64,58,0,Math.PI*2),e.fill(),e.fillStyle="#f6efdd",e.font="900 92px Nunito, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("!",64,70);const n=new On(t);n.colorSpace=Pe;const s=new Zu(new Jl({map:n,depthWrite:!1}));return s.scale.set(.9,.9,1),s.position.y=1.7,i.add(s),i}function qx(i){return i.kind==="pub"||i.kind==="bar"?"patrons":i.kind==="hotel"?"guests":"customers"}function Jh(i,t="#1d3557"){const e=document.createElement("canvas");e.width=512,e.height=192;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,512,192),n.strokeStyle="#f3ead0",n.lineWidth=6,n.strokeRect(8,8,496,176),n.fillStyle="#f3ead0",n.textAlign="center",n.font="700 34px Nunito, sans-serif",n.fillText(i[0].toUpperCase(),256,70,470),n.font="600 40px Fraunces, Georgia, serif",n.fillText(i[1],256,135,470);const s=new On(e);s.colorSpace=Pe;const o=new At,r=new J(new pi(2.2,.82),new Jt({map:s,side:Ae}));r.position.y=1.9,o.add(r);const a=new J(new Wt(.1,2,.1),new Jt({color:"#f1efe8"}));return a.position.y=1,o.add(a),o}const Mr=.9,Qh=2,yr=.45,Yx=.45;class jx{constructor(t,e,n,s){U(this,"group",new At);U(this,"lines",[]);U(this,"ropeMat",new Ku({color:"#d8c49a"}));U(this,"pinMat",new Jt({color:"#3a3a3a",metalness:.5,roughness:.5}));U(this,"time",0);this.route=t,this.ww=e,this.terrain=n,this.boat=s}get count(){return this.lines.length}get moored(){return this.lines.length===2}endPoint(t){const e=this.route.frame(this.boat.s);return[((-Math.cos(this.boat.psi)*e.nx+Math.sin(this.boat.psi)*e.nz)*oe>0?1:-1)*Nn*.5,(t==="bow"?1:-1)*(Sn/2-1.3)]}gap(t){const[e,n]=this.boat.toWorld(...this.endPoint(t)),s=this.route.project(e,n,this.boat.s);return{gap:this.ww.halfWidthAt(s.s)-s.d*oe,s:s.s}}blocker(){return this.ww.gates.some(t=>Math.abs(t.s-this.boat.s)<Sn/2+22)?"No mooring on a lock landing. Move along a bit.":this.boat.d*oe<0?"Moor on the towpath side, the bank with the path.":null}prompt(){if(this.moored)return{key:"F",text:"Cast off",ready:!0};const e=["bow","stern"].filter(r=>!this.lines.some(a=>a.end===r)).map(r=>({e:r,...this.gap(r)})),n=e.reduce((r,a)=>a.gap<r.gap?a:r);if(!this.lines.length&&(n.gap>2.5||this.boat.speed>1)||this.blocker()&&!this.lines.length)return null;const s=this.lines.length?Qh:Mr,o=e.find(r=>r.gap<s);return o&&this.boat.speed<yr?{key:"F",text:o.gap>Mr?`Haul the ${o.e} in and tie it`:`Tie the ${o.e} line`,ready:!0}:this.lines.length===1?{key:"F",text:`Untie the ${this.lines[0].end} line to realign`,ready:!0}:this.boat.speed>=yr?{key:"F",text:"Slow right down to step off",ready:!1}:{key:"F",text:`Bring the ${n.e} in alongside the bank`,ready:!1}}act(){if(this.moored)return this.castOff(),"Lines in, cast off. Off you go!";if(!this.lines.length){const n=this.blocker();if(n)return n}const t=["bow","stern"].filter(n=>!this.lines.some(s=>s.end===n)),e=t.find(n=>this.gap(n).gap<(this.lines.length?Qh:Mr));if(this.lines.length===1&&(!e||this.boat.speed>=yr)){const n=this.lines[0].end;return this.castOff(),`${n==="bow"?"Bow":"Stern"} line untied. Line her up and try again.`}return this.boat.speed>=yr?"Too quick to step off! Slow right down first.":e?(this.tie(e),this.moored?null:e==="bow"?"Bow line tied. Now the stern: a touch ahead with the tiller pushed away from the bank swings it in on the rope.":"Stern line tied. Now the bow: a touch astern with the tiller towards the bank brings it in."):`Bring the ${t[0]} closer in to the bank first (within a metre).`}tie(t){const e=this.endPoint(t),[n,s]=this.boat.toWorld(...e),o=this.route.project(n,s,this.boat.s),r=this.ww.halfWidthAt(o.s),a=this.route.frame(o.s),l=Math.sin(this.boat.psi)*a.tx+Math.cos(this.boat.psi)*a.tz>=0?1:-1,c=(t==="bow"?1:-1)*l*.8,[h,d]=this.route.point(o.s+c,(r+.8)*oe),f=Math.hypot(.8,.8+.25)+.35,u=this.gap(t).gap>Mr?f:Math.hypot(n-h,s-d)+.35,m={local:e,anchor:[h,d],length:u};this.boat.tethers.push(m);const _=new J(new jt(.03,.03,.5,6),this.pinMat);_.position.set(h,this.terrain.bankTop(o.s)+.2,d),_.rotation.z=.2;const g=new I_(new me().setFromPoints(new Array(12).fill(0).map(()=>new I)),this.ropeMat);g.frustumCulled=!1;const p=_.position.y-.2,M=new J(new ko(.45,.62,28),new _n({color:"#e0261b",transparent:!0,opacity:.85,depthWrite:!1,side:Ae}));M.rotation.x=-Math.PI/2,M.position.set(h,p+.04,d);const x=new J(new jt(1.1,1.1,1.6,10),new _n({visible:!1}));x.position.set(h,p+.8,d),x.userData.mooringEnd=t,this.group.add(_,g,M,x),this.lines.push({end:t,tether:m,pin:_,rope:g,halo:M,hit:x})}castOff(){for(const t of[...this.lines])this.removeLine(t)}removeLine(t){this.group.remove(t.pin,t.rope,t.halo,t.hit),t.rope.geometry.dispose();const e=this.boat.tethers.indexOf(t.tether);e>=0&&this.boat.tethers.splice(e,1),this.lines.splice(this.lines.indexOf(t),1)}get tapTargets(){return this.lines.map(t=>t.hit)}untie(t){const e=this.lines.find(n=>n.end===t);return e?(this.removeLine(e),`${t==="bow"?"Bow":"Stern"} line untied.`):""}update(t,e=0){this.time+=e;const n=.5+.5*Math.sin(this.time*3.5);for(const s of this.lines){s.halo.material.opacity=.65+.3*n,s.halo.scale.setScalar(1+.15*n);const[o,r]=this.boat.toWorld(...s.tether.local),a=new I(o,t+Yx,r),l=s.pin.position.clone().setY(s.pin.position.y+.15),h=.08+Math.max(0,s.tether.length-a.distanceTo(l))*.6,d=s.rope.geometry.getAttribute("position");for(let f=0;f<d.count;f++){const u=f/(d.count-1),m=a.clone().lerp(l,u);m.y-=Math.sin(u*Math.PI)*h,d.setXYZ(f,m.x,m.y,m.z)}d.needsUpdate=!0}}}const Zi=[{from:"tower",zone:"city",title:"Under the city walls",brief:"Moor at the city moorings by Cow Lane Bridge, in the cutting below the walls."},{from:"city",zone:"hoole",title:"Through Chester",brief:"Moor up at Hoole, past the city bridges. Thirsty? There are canalside pubs on the way (🍺 on the map)."},{from:"hoole",zone:"christleton",title:"Out to the country",brief:"Moor at Christleton for the night, out in the fields past Greenfield Lock."},{from:"christleton",zone:"tower",title:"Back to Tower Wharf",brief:"Bring her down to Tower Wharf, at the foot of the Northgate Staircase."}];class Zx{constructor(t){U(this,"index",0);U(this,"startHour");U(this,"bumps",0);U(this,"rocked",0);U(this,"cleared",0);U(this,"result",null);U(this,"done",new Set);this.startHour=t}get current(){return Zi[this.index%Zi.length]}complete(t){const e=(t-this.startHour+24)%24,n=this.bumps+this.rocked*2,s=n===0?"Not a ripple out of place. The towpath regulars are impressed.":n<4?"A couple of scrapes, but nothing a cup of tea won’t fix.":"Eventful! The moored boats will be talking about you for a while.";return this.result={trip:this.current,hours:e,bumps:this.bumps,rocked:this.rocked,cleared:this.cleared,verdict:s},this.result}next(t){this.result&&this.done.add(this.index),this.done.size>=Zi.length&&this.done.clear(),this.startHour=t,this.bumps=this.rocked=this.cleared=0,this.result=null}choose(t){this.index=t}}const tu=["Kittiwake","Ruby Tuesday","Water Rat","Bumblebee","Silver Birch","Mistle Thrush","Ploughman","Owl","Clementine","Blackthorn","Sandpiper","Merlin"],eu=["#27445a","#6a1e2e","#2c5a3f","#4b3a6b","#8a4a12","#1f3d4d"],nu=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400"],iu=1.5,Kx=.9;class Jx{constructor(t,e,n,s){U(this,"group",new At);U(this,"boats",[]);U(this,"events",[]);U(this,"time",0);U(this,"nextSpawn",8);U(this,"blockedAt",()=>[]);U(this,"nameIndex",0);this.route=t,this.ww=e,this.moorings=n,this.player=s}update(t,e){this.time+=t;const n=this.player,s=this.ww.bodies[this.ww.bodyIndexAt(n.s)];if(this.time>this.nextSpawn&&this.boats.length<2&&s.kind==="pound"){this.nextSpawn=this.time+45+Math.random()*60;const o=n.s+e*(230+Math.random()*90),r=Math.min(o,n.s),a=Math.max(o,n.s),l=this.boats.every(c=>Math.abs(c.s-o)>80)&&this.moorings.zoneAt(o)===void 0&&!this.blockedAt().some(c=>c>r-20&&c<a+20);o>s.s0+60&&o<s.s1-60&&l&&this.spawn(o,-e)}for(const o of[...this.boats]){const r=(n.s-o.s)*o.dir>380||Math.abs(n.s-o.s)>520,a=this.ww.bodies[this.ww.bodyIndexAt(o.s)],l=o.dir>0?a.s1-o.s<40:o.s-a.s0<40;if(r||l&&Math.abs(n.s-o.s)>150||a.kind!=="pound"){this.remove(o);continue}this.steer(o,t,e)}}spawn(t,e){const n=tu[this.nameIndex++%tu.length],s=lc({name:n,length:17+Math.round(Math.random()*3),crew:!0,cabin:eu[Math.floor(Math.random()*eu.length)],roof:Math.random()<.5?"#3a3d40":"#7c2f23",crewStyle:Ui(Math.random,{coat:nu[Math.floor(Math.random()*nu.length)]})});s.group.rotation.order="YXZ",this.group.add(s.group);const o=s.group.userData.length/2,r={name:n,model:s,s:t,d:0,dir:e,speed:iu,obstacle:{x:0,z:0,psi:0,halfL:o,halfB:Nn/2},pausedUntil:0,waveUntil:0,passed:!1,vd:0,yaw:0};this.boats.push(r),this.player.obstacles.push(r.obstacle),this.place(r,0)}remove(t){this.group.remove(t.model.group),this.boats.splice(this.boats.indexOf(t),1);const e=this.player.obstacles.indexOf(t.obstacle);e>=0&&this.player.obstacles.splice(e,1)}bumped(t){const e=this.boats.find(n=>n.obstacle===t);!e||this.time<e.pausedUntil||(e.pausedUntil=this.time+6,e.speed=0,e.waveUntil=this.time+3,this.events.push({kind:"bumped",boat:e}))}steer(t,e,n){const s=this.player,o=this.ww.halfWidthAt(t.s),r=(s.s-t.s)*t.dir,a=n!==t.dir;let l=iu;const c=this.moorings.boats.some(p=>Math.abs(p.s-t.s)<p.halfL+12);c&&(l=Kx),r>0&&r<45&&(l=Math.min(l,a?.7:.4)),r>0&&r<22&&!a&&(l=0);const h=r>0&&r<34&&Math.abs(s.d-t.d)<Nn+.7;h&&(l=0);for(const p of this.blockedAt()){const M=(p-t.s)*t.dir-t.obstacle.halfL;M>-2&&M<30&&(l=Math.min(l,M<5?0:.4))}this.time<t.pausedUntil&&(l=0),t.speed+=Ee(l-t.speed,-.9*e,.3*e);const d=t.dir;let f=r>-20&&r<110&&a?d*(h?o:1.8):0;const u=c?o-Nn-1.6:o-1.6;f=Ee(f,-(o-1.6),u);const m=.08+t.speed*.25,_=Ee((f-t.d)*.4,-m,m);t.vd+=Ee(_-t.vd,-.15*e,.15*e),t.d+=t.vd*e;const g=-t.dir*Math.atan2(t.vd,Math.max(.4,t.speed));if(t.yaw+=(g-t.yaw)*Math.min(1,e*1.5),t.s+=t.dir*t.speed*e,this.place(t,e),!t.passed&&a&&Math.abs(s.s-t.s)<4){t.passed=!0;const p=(s.d-t.d)*d<0;t.waveUntil=this.time+3.5,this.events.push({kind:p?"greet":"wrongSide",boat:t})}Ci(t.model.steererPerson,this.time<t.waveUntil?"wave":"rest",this.time)}place(t,e){const n=this.route.frame(t.s),s=n.x+n.nx*t.d,o=n.z+n.nz*t.d,r=Math.atan2(n.tx,n.tz)+(t.dir>0?0:Math.PI),a=this.ww.levelAt(t.s);t.model.group.position.set(s,a+Math.sin(this.time*1.2+t.s)*.015,o),t.model.group.rotation.y=r+t.yaw,t.model.group.rotation.z=Math.sin(this.time*.9+e)*.004,Object.assign(t.obstacle,{x:s,z:o,psi:r+t.yaw})}}const br=-oe,Qx=i=>new Jt({color:i});function le(i,t,e,n=0,s=0,o=0,r=0,a=0,l=0){const c=new J(t,Qx(e));return c.position.set(n,s,o),c.rotation.set(r,a,l),i.add(c),c}const qe=(i,t,e)=>new Wt(i,t,e),yn=(i,t,e,n=6)=>new jt(i,t,e,n),tM={bench(){const i=new At;le(i,qe(1.6,.06,.4),"#8a6a45",0,.45,0),le(i,qe(1.6,.36,.05),"#8a6a45",0,.68,-.2,-.15);for(const t of[-.7,.7])le(i,qe(.06,.45,.4),"#2b2b2b",t,.22,0);return i},bin(){const i=new At;return le(i,yn(.22,.2,.8,8),"#1f3d2f",0,.4,0),le(i,yn(.24,.24,.06,8),"#2b2b2b",0,.82,0),i},lamp(){const i=new At;return le(i,yn(.06,.09,3.6),"#1b1b1b",0,1.8,0),le(i,qe(.5,.06,.06),"#1b1b1b",.18,3.55,0),le(i,yn(.12,.16,.32,6),"#2b2b2b",.38,3.4,0),le(i,yn(.1,.1,.14,6),"#f4e3a1",.38,3.22,0),i},lifebuoy(){const i=new At;return le(i,qe(.1,1.5,.1),"#e8e4da",0,.75,0),le(i,new un(.3,.07,6,12),"#e0522f",0,1.15,.08),le(i,qe(.6,.6,.03),"#c0b8a8",0,1.15,0),i},tub(){const i=new At;le(i,yn(.36,.3,.45,8),"#6b4a2e",0,.22,0),le(i,new hn(.34,0),"#4f8a3a",0,.58,0);for(const[t,e,n]of[[.15,.1,"#e04f6a"],[-.12,.12,"#f2c94c"],[.02,-.16,"#d36ad6"],[-.16,-.06,"#f6f0e4"]])le(i,new hn(.08,0),n,t,.82,e);return i},reeds(){const i=new At,t=Ii(5);for(let e=0;e<9;e++){const n=1.1+t()*.9;le(i,yn(.015,.04,n,4),t()<.4?"#8a9a4a":"#6f8a3a",(t()-.5)*.9,n/2-.3,(t()-.5)*.7,(t()-.5)*.2,0,(t()-.5)*.25),t()<.4&&le(i,yn(.04,.04,.2,5),"#5a3d22",(t()-.5)*.9,n-.3,(t()-.5)*.7)}return i},hedge(){const i=new At;return le(i,qe(4.2,1.5,1.1),"#3f6b30",0,.75,0),le(i,new hn(.6,0),"#4b7a36",-1.2,1.4,.1),le(i,new hn(.55,0),"#36602a",1,1.45,-.1),i},fence(){const i=new At;return le(i,qe(2,1.6,.06),"#7a5a3a",0,.8,0),le(i,qe(.1,1.75,.1),"#5e4430",-1,.87,0),i},flowers(){const i=new At,t=Ii(9),e=["#f2c94c","#ffffff","#d36ad6","#e04f6a","#7aa7e0"];for(let n=0;n<7;n++){const s=(t()-.5)*1.6,o=(t()-.5)*1.2;le(i,yn(.01,.01,.35,3),"#4f7a33",s,.17,o),le(i,new hn(.06,0),e[Math.floor(t()*e.length)],s,.36,o)}return i},picnic(){const i=new At;le(i,qe(1.8,.06,.8),"#a07a50",0,.75,0);for(const t of[-.65,.65])le(i,qe(1.8,.05,.28),"#a07a50",0,.45,t);for(const t of[-.7,.7])le(i,qe(.08,.75,1.5),"#8a6a45",t,.37,0,0);return i},parasol(){const i=new At;return le(i,yn(.03,.03,2.4),"#e8e4da",0,1.2,0),le(i,new jn(1.4,.5,8,1,!0),"#a3291f",0,2.3,0),i},cottage(){const i=new At;le(i,qe(6,4.2,5),"#efe8da",0,2.1,0);const t=new jt(.01,3.9,6.6,4,1);t.rotateY(Math.PI/4),t.rotateZ(Math.PI/2),t.scale(1,.55,1),le(i,t,"#4d525b",0,5,0),le(i,qe(.7,1.4,.7),"#8c4234",2,5.6,0),le(i,qe(1,1.9,.08),"#1f4d3a",0,.95,2.52);for(const e of[-1.8,1.8])le(i,qe(.9,.9,.08),"#2a3640",e,2.6,2.52),le(i,qe(.9,.9,.08),"#2a3640",e,1.1,2.52);return i},heron(){const i=new At;le(i,new Ye(.22,6,4),"#9aa3ab",0,.85,0).scale.set(1,.8,1.6),le(i,yn(.04,.05,.55,5),"#c8ced2",0,1.2,.18,-.3),le(i,new Ye(.07,6,4),"#e8eaec",0,1.47,.27),le(i,new jn(.025,.22,4),"#d8b34a",0,1.47,.42,Math.PI/2);for(const t of[-.06,.06])le(i,yn(.012,.012,.7,3),"#c9a24a",t,.35,0);return i}};class eM{constructor(t,e,n,s,o,r){U(this,"group",new At);U(this,"placements",new Map);U(this,"anglerSpots",[]);U(this,"gardens",[]);this.route=t,this.ww=e,this.terrain=n;const a=Ii(4242),l=t.length,c=(p,M=6)=>r.some(x=>Math.abs(x.s-p)<x.w/2+M),h=(p,M)=>e.gates.some(x=>Math.abs(x.s-p)<M),d=p=>e.bodies[e.bodyIndexAt(p)].kind==="chamber",f=p=>e.windingHoles.some(M=>Math.abs(M-p)<42),u=p=>{const[M,x]=t.point(p,30*br),[v,A]=t.point(p,30*oe);return Math.max(n.urbanAt(M,x),n.urbanAt(v,A))};let m=60;for(let p=20;p<l-20;p+=2){if(c(p,8)||h(p,10))continue;const M=u(p);M>.3&&Math.round(p)%32===0&&this.add("lamp",p,e.halfWidthAt(p)+3.25,"towpath",-Math.PI/2),p>m&&!o.zoneAt(p)&&!n.cliffSide(p,oe)&&(m=p+140+a()*160,this.add("bench",p,e.halfWidthAt(p)+3.6,"towpath",0),M>.2&&this.add("bin",p+1.4,e.halfWidthAt(p)+3.7,"towpath",0)),M>.35&&Math.round(p)%380===0&&this.add("lifebuoy",p,e.halfWidthAt(p)+3.3,"towpath",0)}for(const p of e.groups){const M=p.gates[0].s,x=p.gates.at(-1).s;this.add("lifebuoy",M-6,e.halfWidthAt(M-6)+3.3,"towpath",0),this.add("lifebuoy",x+6,e.halfWidthAt(x+6)+3.3,"towpath",0);for(const A of[M+4,x-4,(M+x)/2])this.add("tub",A,e.halfWidthAt(A)+2.2,"towpath",0),this.add("tub",A+1.2,e.halfWidthAt(A)+2.2,"offside",0);const v=(M+x)/2;if(!p.staircase&&u(v)<.45){const A=e.halfWidthAt(v)+10,[S,E]=t.point(v,A*oe);s.isFree(S,E)&&this.add("cottage",v,A,"land",0)}}let _=-1,g="none";for(let p=10;p<l-10;p+=2){if(p>_){_=p+60;const A=u(p);g=A<.3?a()<.85?"hedge":"none":A>.4?a()<.8?"fence":"none":a()<.5?"hedge":"fence"}if(g==="none"||c(p,4)||d(p)||h(p,6)||f(p))continue;const M=e.halfWidthAt(p)+2.4,[x,v]=t.point(p,M*br);s.isFree(x,v)&&(g==="fence"?this.add("fence",p,M,"offside",0):Math.round(p)%4===0&&this.add("hedge",p,M,"offside",0))}for(let p=10;p<l-10;p+=3){if(c(p,6)||d(p)||h(p,15)||f(p))continue;const M=u(p);a()<(M<.3?.45:.12)&&this.add("reeds",p,e.halfWidthAt(p)-.25,"water",a()*6),M<.35&&a()<.3&&!n.cliffSide(p,oe)&&this.add("flowers",p,e.halfWidthAt(p)+4.6+a()*1.5,"towpath",a()*6),M<.2&&a()<.008&&this.add("heron",p,e.halfWidthAt(p)+.9,"offside",Math.PI/2*br+(a()-.5))}for(const p of o.zones){if(p.kind!=="stop"||!/pub|bar/.test(p.poi.kind))continue;const M=(p.s0+p.s1)/2;for(const[x,v,A]of[[-5,6,"picnic"],[0,7.5,"picnic"],[5,6,"picnic"],[-2.5,7,"parasol"],[3,6.5,"parasol"]])if(this.add(A,M+x,e.halfWidthAt(M)+v,"land",0),A==="picnic"){const[S,E]=t.point(M+x,(e.halfWidthAt(M)+v)*oe);this.gardens.push({x:S,z:E,y:n.bankTop(M),ry:Math.atan2(t.frame(M).tx,t.frame(M).tz)})}}for(let p=150;p<l-80;p+=70+a()*90)u(p)>.55||c(p,15)||h(p,45)||o.zoneAt(p)||d(p)||o.boats.some(M=>Math.abs(M.s-p)<M.halfL+8)||this.anglerSpots.push({s:p});this.build()}add(t,e,n,s,o){if(e<1||e>this.route.length-1)return;const r=s==="offside"||s==="water"?br:oe,a=this.route.frame(e),l=a.x+a.nx*n*r,c=a.z+a.nz*n*r;let h;s==="water"?h=this.ww.levelAt(e):s==="land"?h=this.terrain.heightAt(l,c):h=n<this.ww.halfWidthAt(e)+3.4?this.terrain.bankTop(e):this.terrain.landHeight(l,c,e,n*r);const d=Math.atan2(-a.nx*r,-a.nz*r),f=new de().compose(new I(l,h,c),new En().setFromAxisAngle(new I(0,1,0),d+o),new I(1,1,1));this.placements.has(t)||this.placements.set(t,[]),this.placements.get(t).push(f)}build(){for(const[t,e]of this.placements){const n=fi(tM[t]()),s=new wn(n,ci(),e.length);e.forEach((o,r)=>s.setMatrixAt(r,o)),s.castShadow=t!=="flowers"&&t!=="reeds",s.receiveShadow=!0,s.name=`decor:${t}`,this.group.add(s)}}get counts(){return Object.fromEntries([...this.placements].map(([t,e])=>[t,e.length]))}}const vo=6,ka=4,Oa=380,Pn=new de,bi=new En,xo=new I,Mo=new I(1,1,1),wr=new I(0,1,0);function nM(i,t){const e=qn({...i,coat:"#ffffff"});t(e);const n=new At;n.add(e.group);const s=o=>o.userData.part==="coat";return{coat:fi(n,void 0,s),rest:fi(n,void 0,o=>!s(o))}}class Sr{constructor(t,e,n,s,o){U(this,"meshes",[]);for(const r of e){const a=[];for(let l=0;l<n;l++){const c=nM(r,f=>o(f,l)),h=new wn(c.coat,su(),s),d=new wn(c.rest,su(),s);for(const f of[h,d])f.count=0,f.castShadow=!0,f.frustumCulled=!1,f.instanceMatrix.setUsage(Ki),t.add(f);a.push({coat:h,rest:d})}this.meshes.push(a)}}begin(){for(const t of this.meshes)for(const{coat:e,rest:n}of t)e.count=n.count=0}put(t,e,n,s){const{coat:o,rest:r}=this.meshes[t%this.meshes.length][e%this.meshes[0].length],a=o.count++;r.count++,o.setMatrixAt(a,n),r.setMatrixAt(a,n),o.setColorAt(a,s)}end(){for(const t of this.meshes)for(const{coat:e,rest:n}of t)e.instanceMatrix.needsUpdate=n.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}}const su=()=>new Jt({vertexColors:!0,roughness:.75});function iM(){const i=new At,t=a=>new Jt({color:a});for(const a of[-.55,.55]){const l=new J(new un(.33,.03,5,12),t("#1b1b1b"));l.position.set(0,.33,a),l.rotation.y=Math.PI/2,i.add(l)}const e=new J(new Wt(.05,.05,.9),t("#2e86c1"));e.position.set(0,.62,0),e.rotation.x=-.12;const n=new J(new Wt(.04,.32,.04),t("#2e86c1"));n.position.set(0,.68,-.18);const s=new J(new Wt(.12,.05,.22),t("#1b1b1b"));s.position.set(0,.86,-.18);const o=new J(new Wt(.04,.42,.04),t("#2e86c1"));o.position.set(0,.78,.45);const r=new J(new Wt(.5,.035,.035),t("#1b1b1b"));return r.position.set(0,.99,.43),i.add(e,n,s,o,r),fi(i)}function sM(){const i=new At,t=o=>new Jt({color:o}),e=new J(new Wt(.22,.22,.55),t("#8a5a2b"));e.position.y=.35;const n=new J(new Wt(.18,.18,.2),t("#7a4a22"));n.position.set(0,.5,.33),i.add(e,n);for(const[o,r]of[[-.08,-.2],[.08,-.2],[-.08,.2],[.08,.2]]){const a=new J(new Wt(.05,.25,.05),t("#6a3a1a"));a.position.set(o,.12,r),i.add(a)}const s=new J(new Wt(.04,.04,.22),t("#8a5a2b"));return s.position.set(0,.48,-.36),s.rotation.x=.6,i.add(s),fi(i)}function ou(i){const t=new At,e=a=>new Jt({color:a}),n=i?1.9:1,s=new J(new Ye(.16*n,6,4),e(i?"#f4f4f0":"#8a6a4a"));if(s.scale.set(.8,.55,1.3),s.position.y=.05*n,t.add(s),i){const a=new J(new jt(.035,.05,.5,5),e("#f4f4f0"));a.position.set(0,.32,.2),a.rotation.x=.25,t.add(a)}const o=new J(new Ye(.07*(i?1.1:1),6,4),e(i?"#f4f4f0":"#2f6b3a"));o.position.set(0,i?.58:.17,i?.28:.16);const r=new J(new jn(.03,.1,4),e(i?"#e07a2a":"#e2b23a"));return r.position.set(0,o.position.y-.01,o.position.z+.09),r.rotation.x=Math.PI/2,t.add(o,r),fi(t)}class oM{constructor(t,e,n,s,o,r){U(this,"group",new At);U(this,"events",[]);U(this,"movers",[]);U(this,"birds",[]);U(this,"anglers",[]);U(this,"walkers");U(this,"joggers");U(this,"riders");U(this,"bikes");U(this,"dogs");U(this,"ducks");U(this,"swans");U(this,"time",0);U(this,"rand",Ii(31));this.route=t,this.ww=e,this.terrain=n,this.boat=s;const a=this.rand,l=Array.from({length:ka},()=>Ui(a)),c=22;this.walkers=new Sr(this.group,l,vo,c,(f,u)=>zr(f,u/vo*Math.PI*2)),this.joggers=new Sr(this.group,l.slice(0,2),vo,c,(f,u)=>{zr(f,u/vo*Math.PI*2,1.5),f.armL.rotation.x-=.6,f.armR.rotation.x-=.6}),this.riders=new Sr(this.group,l.slice(1,3),4,c,(f,u)=>yx(f,u/4*Math.PI*2)),this.bikes=new wn(iM(),ci(),c),this.dogs=new wn(sM(),ci(),c);for(let f=0;f<c;f++){const u=f<14?"walk":f<18?"jog":"cycle",m={s:s.s+(a()-.5)*Oa*2,d:0,dir:a()<.5?1:-1,kind:u,phase:a()*10,speed:u==="walk"?1.1+a()*.4:u==="jog"?2.6+a()*.6:4+a()*1.5,dog:u==="walk"&&a()<.45,coat:new Ht(wo[Math.floor(a()*wo.length)]),look:Math.floor(a()*ka)};m.d=this.laneFor(m),this.movers.push(m)}for(const f of[this.bikes,this.dogs])f.castShadow=!0,f.instanceMatrix.setUsage(Ki),f.frustumCulled=!1,this.group.add(f);for(const f of o){const u=qn(Ui(a,{hairStyle:a()<.5?"cap":"beanie",coat:a()<.5?"#3d5a3d":"#5a4a3a"})),m=t.frame(f.s),_=(e.halfWidthAt(f.s)+.9)*oe,g=new At;g.add(u.group),kl(u);const p=new J(new Wt(.5,.4,.35),new Jt({color:"#3d5a3d"}));p.position.set(0,.2,-.1),g.add(p);const M=new J(new jt(.01,.02,4.2,4),new Jt({color:"#2b2b2b"}));M.position.set(.25,1.3,1.6),M.rotation.x=1.05,g.add(M),g.position.set(m.x+m.nx*_,n.bankTop(f.s),m.z+m.nz*_),g.rotation.y=Math.atan2(-m.nx*oe,-m.nz*oe),this.group.add(g),this.anglers.push({s:f.s,person:u,angryUntil:0,lastGrumble:-99})}const h=new Sr(this.group,l,1,64,f=>kl(f));h.begin();for(const f of r)for(const u of[-1,1])if(!(a()<.35))for(const m of[-.5,.5]){if(a()<.4)continue;const _=new I(m,0,u*.62).applyAxisAngle(wr,f.ry);bi.setFromAxisAngle(wr,f.ry+(u>0?Math.PI:0)),Pn.compose(xo.set(f.x+_.x,f.y,f.z+_.z),bi,Mo),h.put(Math.floor(a()*ka),0,Pn,new Ht(wo[Math.floor(a()*wo.length)]))}h.end();let d=0;for(let f=120;f<t.length-60;f+=160+a()*260){if(e.bodies[e.bodyIndexAt(f)].kind!=="pound")continue;const u=a()<.22,m=u?2:2+Math.floor(a()*4);d++;for(let _=0;_<m;_++)this.birds.push({s:f+(a()-.5)*8,d:(a()-.5)*5,vs:0,vd:0,swan:u,heading:a()*6,flock:d,lastQuack:-99})}this.ducks=new wn(ou(!1),ci(),Math.max(1,this.birds.filter(f=>!f.swan).length)),this.swans=new wn(ou(!0),ci(),Math.max(1,this.birds.filter(f=>f.swan).length));for(const f of[this.ducks,this.swans])f.instanceMatrix.setUsage(Ki),f.frustumCulled=!1,this.group.add(f)}laneFor(t){return this.ww.halfWidthAt(Ee(t.s,0,this.route.length))+1.6+(t.dir>0?-.35:.35)}update(t){this.time+=t;const e=this.boat,n=this.route.length,s=e.speed*2.237>3;let o=0,r=0;for(const c of[this.walkers,this.joggers,this.riders])c.begin();this.movers.forEach(c=>{c.s+=c.dir*c.speed*t,c.phase+=t*c.speed*4.5,(Math.abs(c.s-e.s)>Oa||c.s<5||c.s>n-5)&&(c.s=Ee(e.s+(this.rand()<.5?-1:1)*(Oa-20-this.rand()*60),5,n-5),c.dir=c.s>e.s?-1:1,this.rand()<.5&&(c.dir*=-1)),c.d+=(this.laneFor(c)-c.d)*Math.min(1,t*2);const h=this.route.frame(c.s),d=h.x+h.nx*c.d*oe,f=h.z+h.nz*c.d*oe,u=c.kind==="cycle"?0:Math.abs(Math.cos(c.phase))*(c.kind==="jog"?.05:.025),m=this.terrain.bankTop(c.s)+(c.kind==="cycle"?-.07:u),_=Math.atan2(h.tx,h.tz)+(c.dir>0?0:Math.PI);bi.setFromAxisAngle(wr,_),Pn.compose(xo.set(d,m,f),bi,Mo);const g=Math.floor(c.phase/(Math.PI*2)%1*vo);if((c.kind==="walk"?this.walkers:c.kind==="jog"?this.joggers:this.riders).put(c.look,c.kind==="cycle"?g%4:g,Pn,c.coat),c.kind==="cycle"&&(Pn.compose(xo.set(d,this.terrain.bankTop(c.s),f),bi,Mo),this.bikes.setMatrixAt(o++,Pn)),c.dog){const M=Math.sin(c.phase*.3)*.6+1.2,x=d-Math.sin(_)*M+h.nx*.5,v=f-Math.cos(_)*M+h.nz*.5;Pn.compose(xo.set(x,this.terrain.bankTop(c.s)+Math.abs(Math.sin(c.phase*1.6))*.04,v),bi,Mo),this.dogs.setMatrixAt(r++,Pn)}}),this.bikes.count=o,this.dogs.count=r;for(const c of[this.walkers,this.joggers,this.riders])c.end();for(const c of[this.bikes,this.dogs])c.instanceMatrix.needsUpdate=!0;for(const c of this.anglers)s&&Math.abs(c.s-e.s)<14&&this.time-c.lastGrumble>20&&(c.lastGrumble=this.time,c.angryUntil=this.time+4,this.events.push({kind:"angler"})),Ci(c.person,this.time<c.angryUntil?"shake":"rest",this.time);let a=0,l=0;for(const c of this.birds){const h=c.s-e.s,d=c.d-e.d,f=Math.hypot(h,d);f<14?(c.vd+=Math.sign(d||1)*.6*t*(14-f),c.vs+=Math.sign(h||1)*.25*t*(14-f),f<5&&this.time-c.lastQuack>6&&!c.swan&&(c.lastQuack=this.time,this.events.push({kind:"quack"}))):(c.vs+=Math.sin(this.time*.3+c.flock*7+c.heading)*.05*t,c.vd+=Math.cos(this.time*.23+c.flock*3)*.04*t);const u=c.swan?.6:.9;c.vs=Ee(c.vs*(1-t*.4),-u,u),c.vd=Ee(c.vd*(1-t*.4),-u,u),c.s=Ee(c.s+c.vs*t,5,n-5);const m=this.ww.halfWidthAt(c.s)-.4;c.d=Ee(c.d+c.vd*t,-m,m),Math.abs(c.d)>=m&&(c.vd*=-.3);const _=this.route.frame(c.s),g=Math.atan2(_.tx*c.vs+_.nx*c.vd,_.tz*c.vs+_.nz*c.vd);Math.hypot(c.vs,c.vd)>.05&&(c.heading+=Math.atan2(Math.sin(g-c.heading),Math.cos(g-c.heading))*Math.min(1,t*3)),bi.setFromAxisAngle(wr,c.heading),Pn.compose(xo.set(_.x+_.nx*c.d,this.ww.levelAt(c.s)+Math.sin(this.time*2+c.s)*.01,_.z+_.nz*c.d),bi,Mo),c.swan?this.swans.setMatrixAt(l++,Pn):this.ducks.setMatrixAt(a++,Pn)}this.ducks.count=a,this.swans.count=l,this.ducks.instanceMatrix.needsUpdate=this.swans.instanceMatrix.needsUpdate=!0}}const rM=5,Kn=(i,t={})=>new Jt({color:i,roughness:.6,...t});function aM(){const i=new At,t=Kn("#b8bcc2",{metalness:.8,roughness:.3}),e=(s,o,r,a,l,c)=>{const h=new J(new Wt(s,o,r),t);h.position.set(a,l,c),i.add(h)};for(const s of[.45,.95])e(.55,.025,.025,0,s,.45),e(.55,.025,.025,0,s,-.45),e(.025,.025,.9,.27,s,0),e(.025,.025,.9,-.27,s,0);for(const s of[-.27,.27])for(const o of[-.45,.45])e(.025,.5,.025,s,.7,o);for(let s=-.35;s<=.36;s+=.14)e(.55,.012,.012,0,.45,s);const n=new J(new Wt(.6,.05,.05),Kn("#c0392b"));n.position.set(0,1.05,-.52),i.add(n);for(const s of[-.25,.25])for(const o of[-.4,.4]){const r=new J(new jt(.06,.06,.04,8),Kn("#2b2b2b"));r.rotation.z=Math.PI/2,r.position.set(s,.1,o),i.add(r)}return i}function lM(){const i=new At;for(const n of[-.5,.5]){const s=new J(new un(.33,.03,5,14),Kn("#1b1b1b"));s.position.set(0,.33,n),s.rotation.y=Math.PI/2,i.add(s)}const t=new J(new Wt(.04,.04,1),Kn("#27ae60"));t.position.y=.55,i.add(t);const e=new J(new Wt(.5,.04,.04),Kn("#1b1b1b"));return e.position.set(0,.85,.45),i.add(e),i}function cM(i){const t=new At,e=new J(new jt(.06,.1,i,5),Kn("#5a4632"));e.rotation.z=Math.PI/2,t.add(e);const n=new J(new jt(.02,.04,i*.4,4),Kn("#6a5440"));n.position.set(i*.15,.05,.12),n.rotation.set(0,.6,Math.PI/2),t.add(n);const s=new J(new hn(.3,0),Kn("#5c7a3a"));return s.position.set(-i*.4,.05,0),s.scale.y=.4,t.add(s),t}const ru=["trolley","bike","branches"];class hM{constructor(t,e,n){U(this,"kind","trolley");U(this,"group",new At);U(this,"s",0);U(this,"active",!1);U(this,"spotted",!1);U(this,"progress",0);U(this,"clearing",!1);U(this,"obstacle",{x:0,z:0,psi:0,halfL:1.2,halfB:0});U(this,"pieces",[]);this.route=t,this.ww=e,this.terrain=n}place(t){this.reset(),this.s=t,this.active=!0,this.spotted=!1;const e=this.route.frame(t),n=this.ww.halfWidthAt(t),s=this.ww.levelAt(t),o=Math.atan2(e.tx,e.tz);Object.assign(this.obstacle,{x:e.x,z:e.z,psi:o,halfB:n});const r=(a,l,c,h,d,f,u,m)=>{u.position.set(e.x+e.nx*a+e.tx*l,s+c,e.z+e.nz*a+e.tz*l),u.rotation.set(d,o+h,f),this.group.add(u);const[_,g]=this.route.point(t+m*.6,(n+1.5+Math.abs(m)*.25)*oe);this.pieces.push({obj:u,from:u.position.clone(),fromRot:u.rotation.clone(),to:new I(_,this.terrain.bankTop(t)+.05,g)})};if(this.kind=ru[Math.floor(Math.random()*ru.length)],this.kind==="trolley")r(0,0,-.55,.4,.5,.3,aM(),0);else if(this.kind==="bike")r(0,.2,-.35,1.2,1.2,.2,lM(),0);else for(let a=0;a<6;a++){const l=-n+.6+a/5*(n*2-1.2);r(l,a%2?.4:-.4,.02,.3+a*.5,0,0,cM(1.6+a%3*.6),a-3)}for(let a=0;a<4;a++){const l=new J(a%2?new hn(.2,0):new jt(.04,.04,.12,8),Kn(["#f2f2f2","#c0392b","#3a3a3a","#2e86c1"][a]));a%2?l.scale.y=.6:l.rotation.z=Math.PI/2,r(-n+1+a*(n*.6),a%2?.7:-.6,.05,a,0,0,l,a-2)}}get description(){return{trolley:{spotted:"Uh-oh: a shopping trolley is jammed in the canal ahead, right in your way.",cleared:"Cleared! One dripping shopping trolley now sits on the towpath. Tesco will be thrilled."},bike:{spotted:"Uh-oh: someone has thrown a bike in the canal ahead, and it's blocking the way.",cleared:"Cleared! A very sorry-looking bike now leans on the towpath fence."},branches:{spotted:"Uh-oh: a raft of fallen branches is jammed across the canal ahead.",cleared:"Cleared! The branches are stacked on the towpath. Someone will be glad of the kindling."}}[this.kind]}reset(){for(const t of this.pieces)this.group.remove(t.obj);this.pieces=[],this.active=!1,this.clearing=!1,this.progress=0}startClearing(){return!this.active||this.clearing?!1:(this.clearing=!0,!0)}update(t,e){return this.active?this.clearing?(this.progress=Math.min(1,this.progress+t/rM),this.pieces.forEach((n,s)=>{const o=s/this.pieces.length*.85,r=Math.min(1,Math.max(0,(this.progress-o)/.15));r<=0||(n.obj.position.lerpVectors(n.from,n.to,r),n.obj.position.y+=Math.sin(r*Math.PI)*1.4,n.obj.rotation.set(n.fromRot.x*(1-r),n.fromRot.y,n.fromRot.z*(1-r)+(r>.99?s%3*.4:0)))}),this.progress>=1?(this.active=!1,this.clearing=!1,!0):!1):(this.pieces.forEach((n,s)=>n.obj.position.y=n.from.y+Math.sin(e*1.3+s)*.03),!1):!1}}const uM=.75,dM=1.6,au=1.4;class fM{constructor(t,e,n,s){U(this,"group",new At);U(this,"staffed",new Set);U(this,"active",null);U(this,"helpers",new Map);U(this,"actKey","");U(this,"actAt",0);U(this,"driveTarget",null);U(this,"time",0);U(this,"busyGate",null);U(this,"night",!1);U(this,"lamps",[]);this.route=t,this.ww=e,this.terrain=n,this.boat=s,this.roster()}roster(){for(const t of this.helpers.values())for(const e of t)this.group.remove(e.person.group);this.helpers.clear(),this.lamps.length=0,this.staffed.clear();for(const t of this.ww.groups){if(!(t.staircase||Math.random()<.4))continue;this.staffed.add(t);const e=[];for(const n of[-3,3]){const s=qn(Ui(Math.random,{coat:"#1d5fa8",trousers:"#2d3a55",longCoat:!1}));this.group.add(s.group),s.group.add(this.headlamp()),e.push({person:s,s:(t.gates[0].s+t.gates.at(-1).s)/2+n,offset:n})}this.helpers.set(t,e)}}isStaffed(t){return!!t&&this.staffed.has(t)}start(t){this.active=t,this.driveTarget=null,this.actKey=""}stop(){this.active=null,this.driveTarget=null,this.busyGate=null}headlamp(){const t=new At,e=new J(new Wt(.06,.04,.03),new _n({color:"#fff6d8"}));e.position.set(0,1.74,.1);const n=new J(new jn(.7,3,16,1,!0),new _n({color:"#fff3c4",transparent:!0,opacity:.12,depthWrite:!1,blending:Ga,side:Ae}));return n.geometry.translate(0,-1.5,0),n.position.copy(e.position),n.rotation.x=-Math.PI/2+.45,t.add(e,n),t.visible=!1,this.lamps.push(t),t}update(t,e,n){this.time+=t;for(const r of this.lamps)r.visible=this.night;if(this.animateHelpers(t),!this.active)return"idle";if(!e||e.group!==this.active)return this.stop(),"done";const s=this.boat,o=n?1:-1;if(e.action==="drive"){if(this.driveTarget===null){const r=this.ww.gates.filter(a=>a.group===this.active&&(a.s-s.s)*o>-.5).sort((a,l)=>(a.s-l.s)*o)[0];if(!r)this.driveTarget=s.s+o*30;else{const a=this.ww.bodies[n?r.above:r.below];this.driveTarget=a.kind==="chamber"?(a.s0+a.s1)/2:r.s+o*(Sn/2+14)}}this.creepTo(this.driveTarget,t)}else if(this.driveTarget=null,this.creepTo(null,t),e.gate&&e.action!=="wait"){this.busyGate=e.gate;const r=`${e.action}:${e.gate.label}`;if(r!==this.actKey)this.actKey=r,this.actAt=this.time+dM+this.walkTime(e.gate);else if(this.time>=this.actAt){const a=e.gate;e.action==="paddlesUp"?a.wantPaddle=!0:e.action==="paddlesDown"?a.wantPaddle=!1:e.action==="close"?a.wantOpen=!1:e.action==="open"&&this.ww.levelsMatch(a)&&(a.wantOpen=!0),this.actKey=""}}else e.gate&&(this.busyGate=e.gate);return"running"}walkTime(t){const e=this.helpers.get(this.active);return e?Math.min(...e.map(n=>Math.abs(n.s-t.s)))/au:0}creepTo(t,e){const n=this.boat,s=this.route.frame(n.s);let o=0;if(t!==null){const l=t-n.s;o=Math.sign(l)*Math.min(uM,Math.abs(l)*.5),Math.abs(l)<.05&&(o=0)}n.s+=o*e,n.d+=(0-n.d)*Math.min(1,e*.8);const r=this.route.frame(n.s);n.x=r.x+r.nx*n.d,n.z=r.z+r.nz*n.d;const a=Math.atan2(s.tx,s.tz)+(Math.cos(n.psi-Math.atan2(s.tx,s.tz))>=0?0:Math.PI);n.psi+=Math.atan2(Math.sin(a-n.psi),Math.cos(a-n.psi))*Math.min(1,e*1.5),n.u=Math.abs(o),n.v=n.r=0,n.notch=0,n.thrust=0}animateHelpers(t){var e;for(const[n,s]of this.helpers){const o=this.active===n&&((e=this.busyGate)==null?void 0:e.group)===n;for(const r of s){const a=(n.gates[0].s+n.gates.at(-1).s)/2+r.offset,l=o?this.busyGate.s+r.offset*.9:a,c=Math.sign(l-r.s)*Math.min(Math.abs(l-r.s),au*t);r.s+=c;const h=this.ww.halfWidthAt(r.s),d=r.offset<0?oe:-oe,[f,u]=this.route.point(r.s,(h+1.1)*d);r.person.group.position.set(f,this.terrain.bankTop(r.s)+(Math.abs(c)>.001?Math.abs(Math.sin(this.time*6))*.03:0),u);const m=this.route.frame(r.s);r.person.group.rotation.y=Math.abs(c)>.001?Math.atan2(m.tx*Math.sign(c),m.tz*Math.sign(c)):Math.atan2(-m.nx*d,-m.nz*d);const _=o&&Math.abs(r.s-l)<.5,g=this.busyGate,p=_&&!!g&&g.paddle>.02&&g.paddle<.98;Math.abs(c)>.001?zr(r.person,this.time*6):(hd(r.person),Ci(r.person,p?"wind":_&&g&&g.open>.02&&g.open<.98?"push":"rest",this.time))}}}}const lu=new Ht("#b0664d"),cu=new Ht("#c9a58a"),Fa=new Ht("#d0b896");class pM{constructor(){U(this,"pos",[]);U(this,"col",[])}tri(t,e,n,s){for(const o of[t,e,n])this.pos.push(o.x,o.y,o.z),this.col.push(s.r,s.g,s.b)}quad(t,e,n,s,o){this.tri(t,e,n,o),this.tri(t,n,s,o)}mesh(){const t=new me;t.setAttribute("position",new qt(this.pos,3)),t.setAttribute("color",new qt(this.col,3)),t.computeVertexNormals();const e=new J(t,new Jt({vertexColors:!0,roughness:.9,flatShading:!0,side:Ae}));return e.castShadow=e.receiveShadow=!0,e}}class mM{constructor(t,e,n,s){U(this,"group",new At);this.route=t,this.ww=e,this.terrain=n;const o=new pM;for(const r of s.walls??[]){const a=[];for(let l=0;l<r.p.length;l+=2)a.push([r.p[l],r.p[l+1]]);r.kind==="gate"?this.gate(o,a):r.closed?this.extrude(o,a,2.4,lu,cu):this.extrude(o,gM(a,1.3),2.4,lu,cu)}this.group.add(o.mesh()),s.bridgeOfSighs&&this.group.add(this.bridgeOfSighs(s.bridgeOfSighs))}ground(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s),o=Math.sign(n.d||1)*Math.max(n.dist,s+7);return this.terrain.landHeight(t,e,n.s,o)}extrude(t,e,n,s,o){const r=e.length;if(r<3)return;const a=e.map(([h,d])=>this.ground(h,d)+n),l=(h,d)=>new I(e[h][0],d,e[h][1]);for(let h=0;h<r;h++){const d=(h+1)%r;t.quad(l(h,a[h]-n-7),l(d,a[d]-n-7),l(d,a[d]),l(h,a[h]),s)}const c=Zn.triangulateShape(e.map(([h,d])=>new ot(h,d)),[]);for(const[h,d,f]of c)t.tri(l(h,a[h]),l(d,a[d]),l(f,a[f]),o);for(let h=0;h<r;h++){const d=(h+1)%r,f=Math.hypot(e[d][0]-e[h][0],e[d][1]-e[h][1]);for(let u=.6;u<f-.3;u+=2.2){const m=u/f,_=e[h][0]+(e[d][0]-e[h][0])*m,g=e[h][1]+(e[d][1]-e[h][1])*m,p=a[h]+(a[d]-a[h])*m;Er(t,_,p+.45,g,.9,.9,.5,Math.atan2(e[d][0]-e[h][0],e[d][1]-e[h][1]),s)}}}gate(t,e){const n=e.reduce((S,E)=>S+E[0],0)/e.length,s=e.reduce((S,E)=>S+E[1],0)/e.length;let o=0,r=0,a=0;for(const[S,E]of e)o+=(S-n)**2,r+=(E-s)**2,a+=(S-n)*(E-s);const l=.5*Math.atan2(2*a,o-r),c=Math.cos(l),h=Math.sin(l);let d=1/0,f=-1/0,u=1/0,m=-1/0;for(const[S,E]of e){const b=(S-n)*c+(E-s)*h,w=-(S-n)*h+(E-s)*c;d=Math.min(d,b),f=Math.max(f,b),u=Math.min(u,w),m=Math.max(m,w)}const _=this.ground(n,s),g=f-d,p=Math.max(4,m-u),M=Math.atan2(c,h),x=S=>[n+c*S,s+h*S],[v,A]=x((d+f)/2);Er(t,v,_+7.4,A,p,3.2,g,M,Fa);for(const S of[d+1.8,f-1.8]){const[E,b]=x(S);Er(t,E,_+2.9,b,p,5.8,3.6,M,Fa,6)}Er(t,v,_+9.4,A,p*.15,.9,g,M,Fa)}bridgeOfSighs(t){const e=this.route,n=this.ww,s=e.frame(t.s),o=n.levelAt(t.s),r=n.halfWidthAt(t.s),a=r+7.5,l=Math.max(...[-1,1].map(p=>{const[M,x]=e.point(t.s,a*p);return this.terrain.landHeight(M,x,t.s,a*p)}))+.1,c=a+1,h=r+3.6,d=l-.75,f=o+1.2,u=new os;u.moveTo(-c,o-2),u.lineTo(-h,o-2),u.lineTo(-h,f);for(let p=1;p<20;p++){const M=Math.PI-Math.PI*p/20;u.lineTo(Math.cos(M)*h,f+Math.sin(M)*(d-f))}u.lineTo(h,f),u.lineTo(h,o-2),u.lineTo(c,o-2),u.lineTo(c,l),u.lineTo(-c,l),u.closePath();const m=2,_=new J(new Qs(u,{depth:m,bevelEnabled:!1,curveSegments:12}).translate(0,0,-m/2),new Jt({color:"#a8654f",roughness:.9,flatShading:!0}));_.castShadow=_.receiveShadow=!0;const g=new At;return g.add(_),g.position.set(s.x,0,s.z),g.rotation.y=Math.atan2(-s.nz,s.nx),g.name="bridge-of-sighs",g}}function gM(i,t){const e=[],n=[];for(let s=0;s<i.length;s++){const o=i[Math.max(0,s-1)],r=i[Math.min(i.length-1,s+1)];let a=r[0]-o[0],l=r[1]-o[1];const c=Math.hypot(a,l)||1;a/=c,l/=c,e.push([i[s][0]-l*t,i[s][1]+a*t]),n.push([i[s][0]+l*t,i[s][1]-a*t])}return[...e,...n.reverse()]}function Er(i,t,e,n,s,o,r,a,l,c=0){const h=Math.sin(a),d=Math.cos(a),f=(x,v,A)=>new I(t+x*d+A*h,e+v,n-x*h+A*d),u=s/2,m=r/2,_=-o/2-c,g=o/2,p=[f(-u,_,-m),f(u,_,-m),f(u,_,m),f(-u,_,m),f(-u,g,-m),f(u,g,-m),f(u,g,m),f(-u,g,m)],M=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7]];for(const[x,v,A,S]of M)i.quad(p[x],p[v],p[A],p[S],l)}const ud=1.69,Te=(i,t={})=>new Jt({color:i,roughness:.6,flatShading:!0,...t}),xe=(i,t,e,n,s,o,r=0,a=0,l=0)=>{const c=new J(t,e);return c.position.set(n,s,o),c.rotation.set(r,a,l),c.castShadow=!0,i.add(c),c},zs={buckby:{name:"a Buckby can",at:[.35,-6],build(){const i=new At;xe(i,new jt(.17,.19,.5,12),Te("#1f4d3a"),0,.25,0),xe(i,new jt(.175,.185,.14,12),Te("#a3291f"),0,.27,0);for(let t=0;t<4;t++)xe(i,new Ye(.035,6,4),Te(t%2?"#f2c94c":"#f4f1e8"),Math.sin(t*1.6)*.18,.27,Math.cos(t*1.6)*.18);return xe(i,new jt(.1,.17,.08,12),Te("#1f4d3a"),0,.54,0),xe(i,new jt(.06,.06,.06,10),Te("#c9a24a",{metalness:.8,roughness:.3}),0,.6,0),xe(i,new un(.11,.015,6,12,Math.PI),Te("#1f4d3a"),0,.56,0),xe(i,new jt(.025,.035,.22,6),Te("#1f4d3a"),.17,.4,0,0,0,-.9),i}},bike:{name:"a bicycle",at:[-.15,2.4],build(){const i=new At,t=Te("#1b1b1b"),e=Te("#c0392b");for(const n of[-.5,.5])xe(i,new un(.3,.025,5,16),t,0,.04,n,Math.PI/2);return xe(i,new Wt(.04,.04,.95),e,0,.06,0),xe(i,new Wt(.04,.04,.5),e,.12,.06,.15,0,.5),xe(i,new Wt(.5,.03,.03),t,0,.07,.45),xe(i,new Wt(.1,.04,.2),t,0,.08,-.25),i}},lifebuoy:{name:"a lifebuoy",at:[-.4,-5.5],build(){const i=new At;for(let t=0;t<4;t++)xe(i,new un(.3,.075,6,6,Math.PI/2),Te(t%2?"#f4f4f0":"#e0522f"),0,.08,0,Math.PI/2,0,t*Math.PI/2);return i}},brasses:{name:"polished chimney brasses",at:[.45,3.7],build(){const i=new At,t=Te("#e2b84a",{metalness:.9,roughness:.2});for(const e of[.1,.32,.5])xe(i,new jt(.08,.08,.04,10),t,0,e,0);for(let e=0;e<5;e++)xe(i,new un(.03,.008,4,8),t,.06+e*.03,.42-e*.07,0,0,0,e%2?0:Math.PI/2);return i}},logs:{name:"a stack of firewood",at:[.3,-2.6],build(){const i=new At,t=Te("#6b4a2e"),e=Te("#c9a27a");let n=0;for(let s=0;s<3;s++)for(let o=0;o<4-s;o++,n++){const r=xe(i,new jt(.07,.07,.7,6),n%3?t:e,-.22+o*.15+s*.075,.07+s*.12,0,Math.PI/2);r.rotation.y=n%2*.05}return i}},coal:{name:"two sacks of coal",at:[.3,-1.3],build(){const i=new At;for(const t of[-.25,.25])xe(i,new hn(.22,1),Te("#3a3a3a",{roughness:.95}),0,.14,t).scale.set(1,.65,1.15);return i}},cat:{name:"a ship’s cat",at:[-.3,4.5],build(){const i=new At,t=Te("#d9822b");xe(i,new Ye(.16,10,8),t,0,.1,0).scale.set(1,.6,1.25),xe(i,new Ye(.09,10,8),t,.08,.13,.15);for(const e of[.03,.13])xe(i,new jn(.03,.06,4),t,e,.22,.15);return xe(i,new un(.13,.025,5,10,Math.PI*1.2),t,0,.04,0,Math.PI/2,0,1),i}},gnome:{name:"a garden gnome",at:[.4,-4.9],build(){const i=new At;return xe(i,new jt(.09,.11,.2,8),Te("#2e86c1"),0,.1,0),xe(i,new Ye(.07,8,6),Te("#f1c6a5"),0,.26,0),xe(i,new jn(.06,.12,6),Te("#f4f4f0"),0,.2,.05,.3),xe(i,new jn(.075,.2,8),Te("#c0392b"),0,.4,0),i}},sunflower:{name:"a sunflower in a pot",at:[.4,1.4],build(){const i=new At;return xe(i,new jt(.15,.11,.22,8),Te("#9b5a3c"),0,.11,0),xe(i,new jt(.015,.02,.7,5),Te("#4f7a33"),0,.55,0),xe(i,new jt(.13,.13,.03,12),Te("#f2c94c"),0,.92,.02,1.2),xe(i,new jt(.06,.06,.04,10),Te("#5a3d22"),0,.92,.04,1.2),i}}},_M=["buckby","bike","lifebuoy","brasses"],vM=["cat","gnome","sunflower"];class xM{constructor(t){U(this,"owned",new Set);U(this,"meshes",new Map);this.boat=t;try{for(const e of JSON.parse(localStorage.getItem("canal.roof")??"[]"))e in zs&&this.show(e)}catch{}}has(t){return this.owned.has(t)}give(t){if(this.owned.has(t))return!1;this.show(t);try{localStorage.setItem("canal.roof",JSON.stringify([...this.owned]))}catch{}return!0}nextFrom(t){return t.find(e=>!this.owned.has(e))??null}show(t){this.owned.add(t);const e=zs[t],n=e.build();n.position.set(e.at[0],ud,e.at[1]),this.boat.add(n),this.meshes.set(t,n)}}const Bs=i=>new Jt({color:i,roughness:.85,flatShading:!0});function dd(i,t){const e=document.createElement("canvas");e.width=256,e.height=128;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,256,128),n.fillStyle="#f6efdd",n.font="800 34px Nunito, sans-serif",n.textAlign="center",n.textBaseline="middle",i.split(`
`).forEach((r,a,l)=>n.fillText(r,128,64+(a-(l.length-1)/2)*40,236));const s=new On(e);s.colorSpace=Pe;const o=new J(new pi(.8,.4),new Jt({map:s,side:Ae}));return o.position.y=1,o}function MM(){const i=new At,t=Bs("#6b4a2e"),e=Bs("#c9a27a");for(let r=0;r<4;r++)for(let a=0;a<6-r;a++){const l=new J(new jt(.08,.08,.6,6),(a+r)%3?t:e);l.rotation.x=Math.PI/2,l.position.set(-.4+a*.17+r*.085,.08+r*.14,0),l.castShadow=!0,i.add(l)}const n=new J(new Wt(.3,.3,.25),Bs("#3d5a3d"));n.position.set(.85,.15,0),i.add(n);const s=dd(`LOGS £5
honesty box`,"#3d5a3d");s.position.set(.85,.95,0);const o=new J(new Wt(.06,.8,.06),Bs("#5a4632"));return o.position.set(.85,.5,-.05),i.add(s,o),i}function yM(){const i=new At;for(let n=0;n<5;n++){const s=new J(new hn(.24,1),Bs("#3a3a3a"));s.scale.set(1,.7,1.2),s.position.set(-.5+n%3*.45,.16+Math.floor(n/3)*.3,0),s.castShadow=!0,i.add(s)}const t=dd(`COAL
& kindling`,"#2b2b2b");t.position.set(.85,.95,0);const e=new J(new Wt(.06,.8,.06),Bs("#5a4632"));return e.position.set(.85,.5,-.05),i.add(t,e),i}class bM{constructor(t,e,n,s,o){U(this,"group",new At);U(this,"list",[]);for(const r of s){const a=r.item==="logs"?MM():yM(),l=t.frame(r.s),c=(e.halfWidthAt(r.s)+2.2)*oe;a.position.set(l.x+l.nx*c,n.bankTop(r.s),l.z+l.nz*c),a.rotation.y=Math.atan2(l.tx,l.tz)+Math.PI/2*oe,a.visible=!o(r.item),this.group.add(a),this.list.push({...r,group:a,verb:r.item==="logs"?"Load the logs (drop a fiver in the honesty box)":"Load a couple of sacks of coal",done:r.item==="logs"?"Logs loaded onto the roof. The stove will be roaring tonight.":"Two sacks of coal on the roof. Toasty."})}}near(t){return this.list.find(e=>e.group.visible&&Math.abs(e.s-t)<22)}}const wM=1.435,hu=650,SM=18,Xi=20,Ds=3;class EM{constructor(t,e,n,s,o){U(this,"group",new At);U(this,"lines",[]);U(this,"cars",[]);U(this,"run",null);U(this,"nextRun",12);U(this,"time",0);U(this,"rumble",0);this.route=t,this.ww=e,this.terrain=n,this.bridges=s;const r=s.placed.find(p=>p.data.kind==="rail");if(!r)return;const a=[r.x,r.z],l=o.map(p=>{const M=[];for(let x=0;x<p.p.length;x+=2)M.push([p.p[x],p.p[x+1]]);return{pts:M,bridge:p.b===1}}),c=p=>Math.min(...p.pts.map(M=>Math.hypot(M[0]-a[0],M[1]-a[1]))),h=p=>`${p[0]},${p[1]}`,d=new Map;l.forEach((p,M)=>{for(const x of[p.pts[0],p.pts.at(-1)])d.set(h(x),[...d.get(h(x))??[],M])});const f=new Set,u=p=>{for(let M=0;M<200;M++){const x=p.at(-1),v=p.at(-2),A=x[0]-v[0],S=x[1]-v[1];let E=-1,b=.7,w=[];for(const y of d.get(h(x))??[]){if(f.has(y))continue;const C=l[y].pts,k=h(C[0])===h(x)?C:[...C].reverse(),F=k[1][0]-k[0][0],O=k[1][1]-k[0][1],B=(A*F+S*O)/(Math.hypot(A,S)*Math.hypot(F,O)||1);B>b&&(b=B,E=y,w=k)}if(E<0)return;f.add(E),p.push(...w.slice(1))}},m=l.map((p,M)=>({w:p,i:M})).filter(({w:p})=>p.bridge&&c(p)<30);for(const{w:p,i:M}of m){if(f.has(M))continue;f.add(M);const x=[...p.pts];u(x);const v=[...p.pts].reverse();u(v);const A=[...v.reverse().slice(0,-p.pts.length),...x];if(A.length<4)continue;const S=[A[0]];for(let b=1;b<A.length;b++){const[w,y]=A[b-1],[C,k]=A[b],F=Math.max(1,Math.ceil(Math.hypot(C-w,k-y)/4));for(let O=1;O<=F;O++)S.push([w+(C-w)*O/F,y+(k-y)*O/F])}const E=[0];for(let b=1;b<S.length;b++)E.push(E[b-1]+Math.hypot(S[b][0]-S[b-1][0],S[b][1]-S[b-1][1]));E.at(-1)<300||this.lines.push({pts:S,ys:this.gradedHeights(S,E,a),cum:E})}const _=new Set(f);this.buildTrack(this.lines.map(p=>({pts:p.pts,ys:p.ys}))),this.buildTrack(l.map((p,M)=>({w:p,i:M})).filter(({w:p,i:M})=>!_.has(M)&&c(p)<hu).map(({w:p})=>({pts:p.pts,ys:null}))),o.forEach((p,M)=>{(_.has(M)||c(l[M])<hu)&&(p.skip=!0)});const g=p=>{const M=fi(TM(p)),x=new J(M,ci());x.castShadow=!0;const v=new At;return v.add(x),v.visible=!1,this.group.add(v),v};for(let p=0;p<Ds;p++)this.cars.push(g(p===0||p===Ds-1));this.cars[Ds-1].children[0].rotation.y=Math.PI}gradedHeights(t,e,n){const s=t.map(([c,h])=>this.trackY(c,h));let o=0;t.forEach((c,h)=>{Math.hypot(c[0]-n[0],c[1]-n[1])<Math.hypot(t[o][0]-n[0],t[o][1]-n[1])&&(o=h)});const r=s[o],a=s.map((c,h)=>{let d=0,f=0;for(let u=h;u>=0&&e[h]-e[u]<40;u--)d+=s[u],f++;for(let u=h+1;u<s.length&&e[u]-e[h]<40;u++)d+=s[u],f++;return d/f}),l=.02;return a.map((c,h)=>{const d=l*Math.abs(e[h]-e[o]);c=Math.min(r+d,Math.max(r-d,c));const f=this.route.project(t[h][0],t[h][1]),u=this.bridges.rampAt(f.s,f.d);return u.onDeck?Math.max(c,u.y+.25):c})}trackY(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s),o=n.dist<s+3.5?this.terrain.bankTop(n.s):this.terrain.landHeight(t,e,n.s,n.d);return Math.max(o,this.bridges.rampAt(n.s,n.d).y)+.25}buildTrack(t){const e=[],n=[],s=[],o=new En,r=new I(0,1,0),a=new I(1,1,1);for(const{pts:u,ys:m}of t)for(let _=0;_+1<u.length;_++){const[g,p]=u[_],[M,x]=u[_+1],v=Math.hypot(M-g,x-p);if(v<.01)continue;const A=(M-g)/v,S=(x-p)/v,E=-S,b=A;o.setFromAxisAngle(r,Math.atan2(A,S));const w=Math.ceil(v/.7);let y=null;for(let C=0;C<=w;C++){const k=g+A*(v*C)/w,F=p+S*(v*C)/w,O=m?m[_]+(m[_+1]-m[_])*C/w:this.trackY(k,F);C<w&&e.push(new de().compose(new I(k,O-.12,F),o,a));const B=[k,O,F];if(y){for(const Mt of[-1,1]){const Gt=wM/2*Mt,Kt=[y[0]+E*Gt,y[1],y[2]+b*Gt],Q=[B[0]+E*Gt,B[1],B[2]+b*Gt];n.push(Kt[0],Kt[1]-.1,Kt[2],Q[0],Q[1]-.1,Q[2],Q[0],Q[1],Q[2]),n.push(Kt[0],Kt[1]-.1,Kt[2],Q[0],Q[1],Q[2],Kt[0],Kt[1],Kt[2])}const V=1.7,N=[y[0]-E*V,y[1]-.2,y[2]-b*V],W=[y[0]+E*V,y[1]-.2,y[2]+b*V],ht=[B[0]-E*V,B[1]-.2,B[2]-b*V],vt=[B[0]+E*V,B[1]-.2,B[2]+b*V];s.push(...N,...ht,...W,...W,...ht,...vt)}y=B}}const l=new Wt(2.5,.12,.24),c=new wn(l,new Jt({color:"#5a4a3c",roughness:1}),e.length);e.forEach((u,m)=>c.setMatrixAt(m,u)),c.receiveShadow=!0,this.group.add(c);const h=new me;h.setAttribute("position",new qt(s,3)),h.computeVertexNormals();const d=new J(h,new Jt({color:"#6d635a",roughness:1,side:Ae}));d.receiveShadow=!0,this.group.add(d);const f=new me;f.setAttribute("position",new qt(n,3)),f.computeVertexNormals(),this.group.add(new J(f,new Jt({color:"#8d9196",metalness:.7,roughness:.35,side:Ae})))}at(t,e){const{pts:n,ys:s,cum:o}=t;e=Math.max(0,Math.min(o.at(-1),e));let r=1;for(;r<o.length-1&&o[r]<e;)r++;const a=(e-o[r-1])/(o[r]-o[r-1]||1);return[n[r-1][0]+(n[r][0]-n[r-1][0])*a,s[r-1]+(s[r]-s[r-1])*a,n[r-1][1]+(n[r][1]-n[r-1][1])*a]}update(t,e){if(this.time+=t,this.rumble=0,!this.lines.length)return;if(!this.run){for(const h of this.cars)h.visible=!1;if(this.time<this.nextRun)return;const l=Math.floor(Math.random()*this.lines.length),c=Math.random()<.5?1:-1;this.run={line:l,dir:c,dist:c>0?-10:this.lines[l].cum.at(-1)+Xi*Ds+10}}const n=this.run,s=this.lines[n.line];n.dist+=n.dir*SM*t;const o=s.cum.at(-1);let r=1/0;this.cars.forEach((l,c)=>{const h=n.dist-n.dir*c*(Xi+1),d=h-n.dir*Xi,f=Math.max(h,d)>0&&Math.min(h,d)<o;if(l.visible=f,!f)return;const u=this.at(s,h),m=this.at(s,d),_=this.at(s,(h+d)/2);l.position.set(_[0],_[1],_[2]),l.rotation.set(0,Math.atan2(u[0]-m[0],u[2]-m[2]),0),l.rotateX(-Math.atan2(u[1]-m[1],Xi)),r=Math.min(r,l.position.distanceTo(e))}),this.rumble=Math.max(0,1-r/350),(n.dir>0?n.dist-Ds*(Xi+1)>o:n.dist+Ds*(Xi+1)<0)&&(this.run=null,this.nextRun=this.time+50+Math.random()*50)}}function TM(i){const t=new At,e=(o,r={})=>new Jt({color:o,...r}),n=(o,r,a,l,c,h,d)=>{const f=new J(new Wt(o,r,a),e(l));return f.position.set(c,h,d),t.add(f),f},s=Xi-.4;n(2.7,2.6,s,"#c8102e",0,2.25,0),n(2.72,.9,s*.98,"#3a3f45",0,2.5,0),n(2.74,.12,s*.98,"#f4f4f0",0,1.65,0),n(2.6,.25,s*.99,"#9aa0a6",0,3.6,0),n(2.5,.6,s*.9,"#2b2b2b",0,.75,0);for(const o of[-s/2+3,s/2-3]){n(2.2,.5,2.4,"#1b1b1b",0,.45,o);for(const r of[-.8,.8])for(const a of[-.75,.75]){const l=new J(new jt(.42,.42,.12,10),e("#3a3a3a"));l.rotation.z=Math.PI/2,l.position.set(a,.42,o+r),t.add(l)}}for(let o=0;o<2;o++)n(.06,2,.9,"#2b2b2b",o?1.36:-1.36,2.1,-s/2+1.6);if(i){const o=new J(new jt(1.35,1.35,2.6,8,1,!1,0,Math.PI),e("#c8102e"));o.rotation.set(Math.PI/2,0,Math.PI/2),o.scale.set(1,1,.5),o.position.set(0,2.25,s/2),t.add(o),n(2.2,1.2,.5,"#f2c200",0,1.4,s/2+.45),n(2,.7,.3,"#22282e",0,2.75,s/2+.45)}return t}const Vi=48,AM=.35,za=14,RM=.8,uu=1.1;class CM{constructor(t,e,n){U(this,"mesh");U(this,"points",[]);U(this,"emitIn",0);U(this,"pos");U(this,"col");U(this,"uv");U(this,"churn");U(this,"washed",new Map);U(this,"time",0);this.route=t,this.ww=e;const s=Vi*4;this.pos=new Float32Array(s*3),this.col=new Float32Array(s*4),this.uv=new Float32Array(s*2);const o=[];for(const a of[0,1]){const l=a*Vi*2;for(let c=0;c<Vi-1;c++){const h=l+c*2,d=h+1,f=h+2,u=h+3;o.push(h,f,d,d,f,u)}}const r=new me;r.setAttribute("position",new ke(this.pos,3).setUsage(Ki)),r.setAttribute("color",new ke(this.col,4).setUsage(Ki)),r.setAttribute("uv",new ke(this.uv,2).setUsage(Ki)),r.setIndex(o),this.mesh=new J(r,new _n({map:PM(),vertexColors:!0,transparent:!0,depthWrite:!1,side:Ae})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.churn=new J(new nc(1,18),new _n({color:"#f4f8f4",transparent:!0,opacity:0,depthWrite:!1})),this.churn.rotation.x=-Math.PI/2,this.churn.position.set(0,.04,-9.6),n.add(this.churn)}update(t,e,n,s,o,r){this.time+=t;for(const h of this.points)h.age+=t;for(;this.points.length&&this.points[0].age>za;)this.points.shift();const a=Ne(2.6,4.6,o);if(this.emitIn-=t,this.emitIn<=0)if(this.emitIn=AM,a>.02){const h=-Math.cos(s),d=Math.sin(s);this.points.push({s:e,x:n[0],z:n[1],nx:h,nz:d,age:0,strength:a,start:1}),this.points.length>Vi&&this.points.shift()}else this.points.length&&this.points.at(-1).strength>0&&(this.points.push({s:e,x:n[0],z:n[1],nx:-Math.cos(s),nz:Math.sin(s),age:0,strength:0,start:1}),this.points.length>Vi&&this.points.shift());this.col.fill(0);const l=[...this.points].reverse();for(const h of[0,1]){const d=h?1:-1,f=h*Vi*2;for(let u=0;u<Vi;u++){const m=l[Math.min(u,l.length-1)],_=(f+u*2)*3,g=(f+u*2)*4;if(!m)continue;const p=this.spread(m),M=this.ww.levelAt(m.s)+.03,x=u<l.length?m.strength*(1-m.age/za)**1.5*.75:0;for(const[v,A]of[[0,p-uu/2],[1,p+uu/2]])this.pos[_+v*3]=m.x+m.nx*A*d,this.pos[_+v*3+1]=M,this.pos[_+v*3+2]=m.z+m.nz*A*d,this.col.set([.95,.97,.95,x],g+v*4),this.uv.set([v,m.s*.12],(f+u*2+v)*2)}}this.mesh.geometry.getAttribute("position").needsUpdate=!0,this.mesh.geometry.getAttribute("color").needsUpdate=!0,this.mesh.geometry.getAttribute("uv").needsUpdate=!0;const c=this.churn.material;c.opacity=Ee(r,0,1)*(.3+.1*Math.sin(this.time*11)),this.churn.scale.setScalar(.7+r*.6+.05*Math.sin(this.time*7))}spread(t){const e=this.ww.halfWidthAt(t.s);return Math.min(t.start+t.age*RM,e+.4)}washes(t){const e=[];for(const n of t){if(this.time-(this.washed.get(n)??-99)<12)continue;const s=this.route.project(n.x,n.z,n.s).d,o=Math.sign(s)||1;for(const r of this.points){if(r.strength<.15||Math.abs(r.s-n.s)>n.halfL)continue;const l=this.route.project(r.x,r.z,r.s).d+o*this.spread(r);if(o*l>=Math.abs(s)-n.halfB-.2){const c=r.strength*(1-r.age/za);if(c<.1)continue;this.washed.set(n,this.time),e.push({boat:n,strength:c});break}}}return e}}function PM(){const e=document.createElement("canvas");e.width=64,e.height=256;const n=e.getContext("2d"),s=n.createImageData(64,256);for(let r=0;r<256;r++)for(let a=0;a<64;a++){const l=a/63,c=Math.sin(l*Math.PI)**1.5,h=Math.random()**2.2,d=.5+.5*Math.sin(r*.35+Math.sin(a*.4)*2),f=c*Math.min(1,h*1.6+d*.25),u=(r*64+a)*4;s.data[u]=s.data[u+1]=s.data[u+2]=255,s.data[u+3]=f*255}n.putImageData(s,0,0);const o=new On(e);return o.wrapS=ai,o.wrapT=Ys,o}const du=new Map;function LM(i,t){const e=JSON.stringify(i),n=du.get(e);if(n)return n;const s=160,o=200,r=new Yu({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});r.setSize(s,o,!1),r.outputColorSpace=Pe;const a=new Kl;a.add(new od("#ffffff","#8a8a7a",1.6));const l=new ad("#fff4e0",2.2);l.position.set(2,3,3),a.add(l);const c=qn(i);t==null||t(c),c.group.rotation.y=.5,a.add(c.group);const h=new cn(30,s/o,.1,20);h.position.set(0,1,4.2),h.lookAt(0,.92,0),r.render(a,h);const d=r.domElement.toDataURL("image/png");return r.dispose(),r.forceContextLoss(),du.set(e,d),d}const fu=["#c0392b","#2e86c1","#f4f4f0","#2b2b2b","#7f8c8d","#27ae60","#d35400","#1d3557","#b8b8b8","#8e44ad"],Yi=4.3;function DM(){const i=new At,t=new At,e=o=>new Jt({color:o}),n=(o,r,a,l,c,h,d=0)=>{const f=new J(new Wt(r,a,l),e(c));f.position.set(0,h,d),o.add(f)};n(i,1.78,.62,Yi,"#ffffff",.6),n(i,1.6,.5,2.3,"#ffffff",1.15,-.25),n(t,1.62,.42,2,"#26313a",1.12,-.2),n(t,1.82,.16,.2,"#1b1b1b",.42,Yi/2),n(t,1.82,.16,.2,"#1b1b1b",.42,-Yi/2),n(t,1.4,.12,.05,"#f6efc8",.72,Yi/2+.01),n(t,1.4,.12,.05,"#b8241b",.72,-Yi/2-.01);for(const o of[-.82,.82])for(const r of[-1.35,1.35]){const a=new J(new jt(.33,.33,.22,10),e("#1b1b1b"));a.rotation.z=Math.PI/2,a.position.set(o,.33,r),t.add(a)}const s=o=>{const r=new At;return r.add(o),fi(r)};return{body:s(i),rest:s(t)}}class IM{constructor(t){U(this,"group",new At);U(this,"paths",[]);U(this,"cars",[]);U(this,"body");U(this,"rest");U(this,"rand",Ii(99));U(this,"respawn");for(const a of t){const l=[0];for(let c=1;c<a.pts.length;c++)l.push(l[c-1]+Math.hypot(a.pts[c][0]-a.pts[c-1][0],a.pts[c][2]-a.pts[c-1][2]));l.at(-1)<40||this.paths.push({pts:a.pts,cum:l,lane:Math.min(2.2,Math.max(1.1,a.w/4)),bridge:a.bridge})}const e=this.paths.map(a=>(a.bridge?12:1)*Math.min(3,a.cum.at(-1)/120)),n=e.reduce((a,l)=>a+l,0),s=this.paths.length?Math.min(60,Math.round(n*1.5)):0,o=DM();this.body=new wn(o.body,ci(),Math.max(1,s)),this.rest=new wn(o.rest,ci(),Math.max(1,s));for(const a of[this.body,this.rest])a.castShadow=!0,a.frustumCulled=!1,a.instanceMatrix.setUsage(Ki),this.group.add(a);const r=()=>{let a=this.rand()*n;for(let l=0;l<e.length;l++)if((a-=e[l])<=0)return l;return e.length-1};for(let a=0;a<s;a++){const l=r(),c={path:l,dist:this.rand()*this.paths[l].cum.at(-1),dir:this.rand()<.5?1:-1,speed:8+this.rand()*5,colour:new Ht(fu[Math.floor(this.rand()*fu.length)])};this.cars.push(c),this.body.setColorAt(a,c.colour)}this.body.count=this.rest.count=s,this.respawn=a=>{a.path=r(),a.dir=this.rand()<.5?1:-1,a.dist=a.dir>0?0:this.paths[a.path].cum.at(-1),a.speed=8+this.rand()*5}}at(t,e){e=Math.max(0,Math.min(t.cum.at(-1),e));let n=1;for(;n<t.cum.length-1&&t.cum[n]<e;)n++;const s=(e-t.cum[n-1])/(t.cum[n]-t.cum[n-1]||1),o=t.pts[n-1],r=t.pts[n];return[o[0]+(r[0]-o[0])*s,o[1]+(r[1]-o[1])*s,o[2]+(r[2]-o[2])*s]}update(t){const e=new de,n=new En,s=new kn(0,0,0,"YXZ"),o=new I,r=new I(1,1,1);this.cars.forEach((a,l)=>{const c=this.paths[a.path];a.dist+=a.dir*a.speed*t,(a.dist<0||a.dist>c.cum.at(-1))&&this.respawn(a);const h=this.paths[a.path],d=this.at(h,a.dist+a.dir*Yi*.45),f=this.at(h,a.dist-a.dir*Yi*.45),u=d[0]-f[0],m=d[2]-f[2],_=Math.hypot(u,m)||1,g=m/_,p=-u/_;o.set((d[0]+f[0])/2+g*h.lane,(d[1]+f[1])/2,(d[2]+f[2])/2+p*h.lane),s.set(-Math.atan2(d[1]-f[1],_),Math.atan2(u,m),0),n.setFromEuler(s),e.compose(o,n,r),this.body.setMatrixAt(l,e),this.rest.setMatrixAt(l,e)}),this.body.instanceMatrix.needsUpdate=this.rest.instanceMatrix.needsUpdate=!0}}const wi=[1,2,5,10,30],UM={coat:"#e8b931",trousers:"#2d3a55",skin:"#e3b08f",hair:"#5a3a22",hairStyle:"cap",hat:"#3d4a3a",longCoat:!1},Ba=80;function Tr(i){const t=Math.abs(i)*3.281;return t<1e3?`${Math.round(t/10)*10} ft`:`${(t/5280).toFixed(1)} mi`}function NM(i,t){return{pub:`You moor up and pop into ${i} for a pint of something local. An hour slips happily by.`,bar:`A drink at ${i}, watching the boats go by. An hour slips happily by.`,cafe:`Tea and a slab of cake at ${i}, eaten on the roof. An hour slips happily by.`,supermarket:`You nip into ${i} for milk, bread and far too many biscuits.`,ice_cream:`An ice cream from ${i}, eaten on the roof. Bliss.`,restaurant:`A proper meal at ${i}. Nobody has to cook in the galley tonight. An hour slips happily by.`,hotel:`You stretch your legs and have a nose round ${i}. An hour slips happily by.`}[t]??`You stop at ${i}. An hour slips happily by.`}function kM(i,t){return{Northgate:"Above you: the Northgate, one of the medieval gateways through Chester’s city walls. The canal runs along the old moat.","Water Tower":"Off to the side: the Water Tower, built in the 1320s to guard the old river port when the Dee still reached the walls.","Lead Shot Tower":"That tall brick tower is the Lead Shot Tower (1799), where molten lead was dropped from the top to make shot.","Bridge of Sighs":"Overhead: the Bridge of Sighs (1793). Condemned prisoners from the Northgate gaol were led across it to the chapel for their last rites.","King Charles Tower":"Up on the walls: King Charles’ Tower. Legend has it Charles I watched his army lose the Battle of Rowton Moor from here in 1645.","Morgan's Mount":"Morgan’s Mount, a little gun platform on the walls from the Civil War siege of Chester.","Pemberton's Parlour":"Pemberton’s Parlour, a tower on the walls named after an 18th-century ropemaker who watched his men at work from it."}[i]??`Look out: ${i}${t==="tower"?", part of the old city walls":""}.`}const pu=['% rocks in your wash. "Tickover past moored boats, please!"',"A mug of tea slides off the roof of %. Slow down past moored boats!","The owner of % gives you a Look. Ease off to tickover when passing."],OM=1/60,Ha=2.23694,fd=document.getElementById("loading"),pd=document.getElementById("loading-text"),FM=fd.querySelector(".bar div");let zM=0;async function Si(i){pd.textContent=i,FM.style.width=`${Math.min(100,++zM*11)}%`,await new Promise(t=>requestAnimationFrame(()=>setTimeout(t,0)))}async function BM(){await Si("Fetching the map…");const i=await Dv("./data/chester.json");await document.fonts.ready;const t=document.getElementById("scene"),e=new Yu({canvas:t,antialias:!0});e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setSize(t.clientWidth,t.clientHeight,!1),e.toneMapping=vu,e.toneMappingExposure=.62,e.shadowMap.enabled=!0,e.shadowMap.type=gu;const n=new Kl,s=new cn(55,t.clientWidth/t.clientHeight,.4,4500);await Si("Surveying the canal…");const o=new Iv(i.centreline),r=new Hv(i.locks,i.bridges,o.length,[4700,i.meta.towerWharfS-60]),a=[],l=[];for(let L=0;L<i.centreline.length;L+=2)a.push(i.centreline[L]),l.push(i.centreline[L+1]);const c=520,h={x0:Math.min(...a)-c,x1:Math.max(...a)+c,z0:Math.min(...l)-c,z1:Math.max(...l)+c},d=new Xv(o,r,h);d.cuttings=i.cuttings??[],d.setRivers(i.rivers),d.urbanAt=ix(i.buildings,h);const f=i.parks.map(L=>{let X=1/0,j=-1/0,rt=1/0,bt=-1/0;for(let Lt=0;Lt<L.p.length;Lt+=2)X=Math.min(X,L.p[Lt]),j=Math.max(j,L.p[Lt]),rt=Math.min(rt,L.p[Lt+1]),bt=Math.max(bt,L.p[Lt+1]);return{ring:L.p,x0:X,x1:j,z0:rt,z1:bt}});d.parkAt=(L,X)=>f.some(j=>L>=j.x0&&L<=j.x1&&X>=j.z0&&X<=j.z1&&ac(L,X,j.ring)),await Si("Digging the cut…");const u=new lx(o,r,i.bridges,d);d.embankments=u.placed.filter(L=>L.data.kind==="road"&&L.data.w>3.5).map(L=>({x:L.x,z:L.z,ux:Math.sin(L.data.dir),uz:Math.cos(L.data.dir),deck:L.deck,halfSpan:L.halfSpan,halfWidth:L.data.w/2+2})),n.add(d.buildStrip()),await Si("Shaping the land…"),n.add(d.buildFar()),await Si("Filling it with water…");const m=new jv(o,r);m.addRivers(i.rivers,d.riverLevel);for(const L of i.water){let X=0,j=0;const rt=L.p.length/2;for(let bt=0;bt<L.p.length;bt+=2)X+=L.p[bt]/rt,j+=L.p[bt+1]/rt;o.project(X,j).dist<40||m.addPond(L.p,d.heightAt(X,j)-.25)}n.add(m.group),n.add(u.group),n.add(new mM(o,r,d,i).group);const _=new EM(o,r,d,u,i.rails);n.add(_.group);const g=new dx(o,r,d);n.add(g.group);const p=i.meta.towerWharfS-70,M=[{name:"Tesco",kind:"supermarket",type:"stop",x:0,z:0,s:1250,dist:30,rank:-1},{name:"Waitrose",kind:"supermarket",type:"stop",x:0,z:0,s:1950,dist:40,rank:-1}],x=new Vx(o,r,d,i.bridges,i.meta.towerWharfS,p,[...M,...i.pois??[]]);n.add(x.group);const v=new sx(i,o,r,d,u);await v.build(Si),n.add(v.group);const A=new IM(v.carPaths);n.add(A.group),await Si("Lighting the stove…");const S=new mx(n,e),E=lc();E.group.rotation.order="YXZ",n.add(E.group);const b=new Px(o,r);b.placeAt(p),b.obstacles=[...x.boats];const w=new jx(o,r,d,b),y=new xM(E.group),C=new CM(o,r,E.group);n.add(C.mesh),n.add(w.group);const k=new Jx(o,r,x,b);k.blockedAt=()=>W.filter(L=>L.active).map(L=>L.s),n.add(k.group);const F=new eM(o,r,d,v,x,i.bridges);n.add(F.group);const O=new oM(o,r,d,b,F.anglerSpots,F.gardens);n.add(O.group);let B=0,V=null;const N=new fM(o,r,d,b);n.add(N.group);const W=[],ht=x.zones.find(L=>/Lock Keeper/.test(L.name)),vt=[ht?ht.s1+30:1390,2185],Mt=L=>{for(let X=0;X<120;X++){const j=L+(X%2?1:-1)*Math.ceil(X/2)*2;if(!(i.bridges.some(rt=>Math.abs(rt.s-j)<rt.w/2+20)||r.gates.some(rt=>Math.abs(rt.s-j)<40))&&!x.zones.some(rt=>j>rt.s0-8&&j<rt.s1+8)&&!x.boats.some(rt=>Math.abs(rt.s-j)<rt.halfL+6)&&r.bodies[r.bodyIndexAt(j)].kind==="pound")return j}return L};for(const L of vt){const X=new hM(o,r,d);X.s=Mt(L),x.clearAround(X.s,Ba-10,b.obstacles),n.add(X.group),W.push(X)}const Gt=new bM(o,r,d,[{item:"logs",s:Mt(3620)},{item:"coal",s:Mt(i.meta.towerWharfS-150)}],L=>y.has(L));for(const L of Gt.list)x.clearAround(L.s,25,b.obstacles);n.add(Gt.group);const Kt=["Sam","Priya","Dave","Margaret","Tom","Aisha","Bill","Fran","Gethin","Rosie"],Q=['"Any chance of a lift to %? My feet are killing me."',`"Going towards %? I'd love a ride, I've never been on a narrowboat."`,`"You couldn't drop me at %, could you? I'll work the locks!"`,`"Room for a little one? I'm meeting friends at %."`],dt={firewood:[`"I've bought a load of firewood for my boat, she's moored at %. Could it ride on your roof?"`,`"Logs for the stove, and my boat's down at %. I'll never carry this lot all that way…"`],shopping:['"Just done the big shop. Any chance of a lift back to my boat at %? These bags weigh a ton."',`"Groceries for the week and my boat's at %. Room for me and a few bags?"`]},Nt=L=>{if(L==="firewood"){const j=zs.logs.build();return j.position.set(-.3,ud,1.6),j}const X=new At;return["#f2f2ee","#3a7d44","#f2f2ee","#e07a1f"].forEach((j,rt)=>{const bt=new J(new Wt(.3,.36,.18),new Jt({color:j,roughness:.9}));bt.position.set(.45+rt%2*.12,.38+.18,17.4/2-2.9+rt*.22),bt.rotation.y=rt*.4,X.add(bt)}),X};let nt="trip";const Dt=()=>{setTimeout(()=>{!w.moored||!S.isNight||q.offerOpen||mt.result||xt||(nt="sleep",q.showOffer("Moored for the night","Turn in till morning?","Bank up the stove, put the kettle on, and sleep until first light.","Sleep till morning","Not yet"))},2500)};let Vt=0,wt=null;const te=()=>{if(!wt)return;const L=wt;wt=null,setTimeout(()=>n.remove(L.person.group),6e3)},it=L=>{const X=qn({coat:"#3d4a3a",trousers:"#2d3a55",hair:"#9a9a9a",hairStyle:"cap",hat:"#4a3f33",longCoat:!0}),j=o.frame(L),rt=(r.halfWidthAt(L)+1.4)*oe;X.group.position.set(j.x+j.nx*rt,d.bankTop(L),j.z+j.nz*rt),X.group.rotation.y=Math.atan2(-j.nx*oe,-j.nz*oe),n.add(X.group),wt={person:X,turning:null},nt="helper",q.showOffer("On the towpath","Need a hand?",`An old boater in a flat cap has been watching for a while. "Having a spot of bother? Here, let me show you how it's done."`,"Yes please","I've got this")},ft=L=>{if(!wt)return;w.castOff();const X=o.frame(L),j=Math.atan2(X.tx,X.tz),rt=Math.cos(b.psi-j)>=0,bt=j+(rt?Math.PI:0);let Lt=Math.atan2(Math.sin(bt-b.psi),Math.cos(bt-b.psi));Math.abs(Lt)<.3&&(Lt=Math.PI),wt.turning={t:0,s:L,psi0:b.psi,psi1:b.psi+Lt,x0:b.x,z0:b.z},q.toast("The old boater hops aboard, takes the tiller and talks you through it…","info",5e3)};let D=null,xt=null;const ct=new Set;for(const L of x.zones)L.kind==="stop"&&x.addStopMarker(L);const Rt=new Map,_t=x.zones.filter(L=>{var X;return L.kind==="stop"&&/pub|bar|supermarket/.test(((X=L.poi)==null?void 0:X.kind)??"")}),Yt=(L=[])=>{const X=_t.filter(_e=>!Rt.has(_e.id)&&!L.includes(_e.id));if(!X.length)return;const j=X[Math.floor(Math.random()*X.length)],rt=qn(Ui(Math.random)),bt=(j.s0+j.s1)/2,Lt=o.frame(bt),gt=(r.halfWidthAt(bt)+1.4)*oe;rt.group.position.set(Lt.x+Lt.nx*gt,d.bankTop(bt),Lt.z+Lt.nz*gt),rt.group.rotation.y=Math.atan2(-Lt.nx*oe,-Lt.nz*oe),n.add(rt.group),Rt.set(j.id,rt)},It=L=>{const X=Rt.get(L);X&&(n.remove(X.group),Rt.delete(L),Yt([L]))};for(let L=0;L<3;L++)Yt();const P=L=>L.name.split(",")[0],T=L=>{nt="trip",mt.choose(L);const X=o.frame(b.s),j=Math.sin(b.psi)*X.tx+Math.cos(b.psi)*X.tz>=0?1:-1,rt=$t(mt.current.zone),bt=(rt.s0+rt.s1)/2,Lt=Math.min(b.s,bt),gt=Math.max(b.s,bt),_e=r.gates.filter(Ce=>Ce.s>Lt&&Ce.s<gt&&Ce.label!=="top gates").length,re=_e?` · ${_e} lock${_e>1?"s":""}`:"",Se=Tr(bt-b.s),nn=(bt-b.s)*j>0?`${Se} ahead${re}`:`${Se} behind you: turn round at a winding hole${re}`;q.showOffer("Mission",mt.current.title,`${mt.current.brief}<br><b>${nn}</b>`)},$=new Set;for(const L of Zi)x.addStart(L.from);const tt=()=>{const L=Ct||!!mt.result;Zi.forEach((X,j)=>x.showStart(X.from,!L&&!mt.done.has(j))),ie.setMissionStarts(Zi.filter((X,j)=>!mt.done.has(j)&&!(Ct&&j===mt.index)).map(X=>{const j=$t(X.from);return o.point((j.s0+j.s1)/2,0)}),L)},lt=L=>{var Ce;if(xt||D||!Rt.has(L.id)||q.offerOpen||mt.result)return;ct.add(L.id);const X=o.frame(b.s),j=Math.sin(b.psi)*X.tx+Math.cos(b.psi)*X.tz>=0?1:-1,rt=De=>(De.s0+De.s1)/2,bt=x.zones.filter(De=>De!==L&&Math.abs(rt(De)-b.s)>250&&Math.abs(rt(De)-b.s)<1800);if(!bt.length)return;const Lt=bt.filter(De=>Math.sign(rt(De)-b.s)===j),gt=Lt.length?Lt:bt,_e=gt.sort((De,ve)=>Math.abs(rt(De)-b.s)-Math.abs(rt(ve)-b.s))[Math.floor(Math.random()*Math.min(2,gt.length))],re=Kt[Math.floor(Math.random()*Kt.length)],Se=Math.random(),nn=((Ce=L.poi)==null?void 0:Ce.kind)==="supermarket"?"shopping":Se<.3?"firewood":void 0;D={name:re,dest:_e,from:L.name,cargo:nn},setTimeout(()=>{if((D==null?void 0:D.name)!==re||!w.moored||q.offerOpen)return void(D=null);nt="lift";const De=nn?dt[nn]:Q;q.showOffer(`At ${L.name}`,`Fancy giving ${re} a lift?`,De[Math.floor(Math.random()*De.length)].replace("%",P(_e)),"Hop aboard","Sorry, not today")},1800)},et=()=>{if(!D)return;const L=x.zoneAt(b.s);L&&It(L.id);const X=qn(Ui(Math.random));X.group.position.set(0,.38,17.4/2-2.6),kl(X);const j=new J(new Wt(.9,.45,.5),new Jt({color:"#7a5a3a"}));j.position.set(0,.92-.225,-.08),X.group.add(j),E.group.add(X.group);const rt=D.cargo,bt=rt&&Nt(rt);bt&&E.group.add(bt),xt={name:D.name,dest:D.dest,person:X,cargo:rt,load:bt},x.setLiftDest(xt.dest);{const[gt,_e]=o.point((xt.dest.s0+xt.dest.s1)/2,0);ie.liftDest={x:gt,z:_e}}const Lt=rt==="firewood"?", heaves the firewood up onto your roof,":rt==="shopping"?", stows the shopping bags in the well deck,":"";q.toast(`${xt.name} hops aboard${Lt} and settles in the bow. Next stop: ${P(xt.dest)}.`,"info",4500),D=null},Ft=()=>{if(!xt)return;E.group.remove(xt.person.group),xt.load&&E.group.remove(xt.load),x.setLiftDest(null),ie.liftDest=null;const L=xt.cargo==="firewood"&&!y.has("logs")?"logs":y.nextFrom(vM);L&&y.give(L),q.toast(L?`${xt.name} hops off with a cheery wave, and leaves you ${zs[L].name} for the roof. 🎁`:`${xt.name} hops off with a cheery wave, and presses a slice of cake into your hand.`,"info",6e3),xt=null},yt=()=>{for(const L of W){const X=b.obstacles.indexOf(L.obstacle);X>=0&&b.obstacles.splice(X,1),L.place(L.s),b.obstacles.push(L.obstacle)}ie.setHazards(W.filter(L=>L.active).map(L=>o.point(L.s,0)))},Ut=x.zones.filter(L=>L.kind==="stop"),he=(i.pois??[]).filter(L=>L.type==="sight"),ut=new Set,kt=new Set,mt=new Zx(S.hour),$t=L=>x.zones.find(X=>X.id===L);let Ct=!1;const ne=new Dx,Qt=new Fx;if(ne.onFirstInput=()=>Qt.start(),t.addEventListener("pointerdown",()=>Qt.start()),Un){let L=0;document.addEventListener("touchend",X=>{const j=performance.now();j-L<350&&!X.target.closest("button")&&X.preventDefault(),L=j},{passive:!1});for(const X of["gesturestart","gesturechange","dblclick"])document.addEventListener(X,j=>j.preventDefault(),{passive:!1})}Un&&addEventListener("pointerdown",()=>{var L,X;return(X=(L=document.documentElement).requestFullscreen)==null?void 0:X.call(L).catch(()=>{})},{once:!0});const ie=new Ox(i,o,r,h);ie.addMooredBoats(x.boats),ie.setPlaces([...x.zones.filter(L=>L.kind==="stop").map(L=>{const[X,j]=o.point((L.s0+L.s1)/2,0),rt={pub:"🍺",bar:"🍸",cafe:"☕",restaurant:"🍽️",hotel:"🛏️",ice_cream:"🍦"}[L.poi.kind]??"⚓";return{x:X,z:j,icon:rt,name:L.name}}),...(i.pois??[]).filter(L=>L.type==="sight").map(L=>({x:L.x,z:L.z,icon:"★",name:L.name}))]);const z=()=>{const L=$t(mt.current.zone),[X,j]=o.point((L.s0+L.s1)/2,0);ie.setDestination(X,j,L.name)};yt();const q=new Ux(document.getElementById("hud"),L=>ne.push(L),ie.el,ie.bigEl);kx(document.getElementById("hud")),["localhost","127.0.0.1"].includes(location.hostname)&&ie.enableDevTeleport(()=>[b.x,b.z],(L,X)=>{w.castOff(),N.stop();const j=o.frame(b.s),rt=Math.sin(b.psi)*j.tx+Math.cos(b.psi)*j.tz>=0,bt=Math.min(o.length-12,Math.max(12,o.project(L,X).s));b.placeAt(bt,rt),b.notch=0,q.toast(`Moved to ${((bt-i.meta.towerWharfS)/1e3).toFixed(2)} km from Tower Wharf`,"info",2e3)}),q.onGateTap=(L,X)=>{if(!N.active){if(!(ee!=null&&ee.adjacent.includes(L)))return q.nope(L,"The lock-keeper looks after that one.");if(We=L,X==="paddlesUp")L.wantPaddle=!0;else if(X==="paddlesDown")L.wantPaddle=!1;else if(X==="open"!==L.wantOpen){const j=r.toggleGate(L,G(L));j&&q.nope(L,/in the way/.test(j)?"The boat's in the way of the gates.":"The levels don't match yet: the gates won't budge.")}}},Un&&(E.tillerHint.visible=!1),q.onSteer=L=>{L&&N.active&&N.stop(),ne.touchSteer=L},q.onNotch=L=>{N.active&&(N.stop(),q.toast("You take the tiller back.","info",2e3)),b.notch=L};const Y=new xv(s,t);Y.enableDamping=!0,Y.minDistance=5,Y.maxDistance=260,Y.maxPolarAngle=1.48,Y.enablePan=!1;let st=-10;const Tt=new ld,St=new ot;let Zt=null,we=!1;const Oe=L=>{const X=t.getBoundingClientRect();return St.set((L.clientX-X.left)/X.width*2-1,-((L.clientY-X.top)/X.height)*2+1),Tt.setFromCamera(St,s),Tt.intersectObject(E.tillerHit,!1).length>0};t.addEventListener("pointerdown",L=>{if(!w.count)return;const X=t.getBoundingClientRect();St.set((L.clientX-X.left)/X.width*2-1,-((L.clientY-X.top)/X.height)*2+1),Tt.setFromCamera(St,s);const j=Tt.intersectObjects(w.tapTargets,!1)[0];j&&(L.stopImmediatePropagation(),q.toast(w.untie(j.object.userData.mooringEnd),"info",2500))},{capture:!0}),t.addEventListener("pointerdown",L=>{Un||(Ve==="steerer"||Oe(L))&&(Zt={x:L.clientX,id:L.pointerId},Y.enabled=!1,t.setPointerCapture(L.pointerId),t.style.cursor="grabbing",N.active&&N.stop(),we||(we=!0,E.tillerHint.visible=!1))},{capture:!0}),t.addEventListener("pointermove",L=>{Zt&&L.pointerId===Zt.id?ne.touchSteer=Ji.clamp(-(L.clientX-Zt.x)/120,-1,1):!Zt&&L.pointerType==="mouse"&&Ve==="follow"&&(t.style.cursor=Oe(L)?"grab":"")});const ge=L=>{!Zt||L.pointerId!==Zt.id||(Zt=null,ne.touchSteer=0,t.style.cursor="",Ve==="follow"&&(Y.enabled=!0))};t.addEventListener("pointerup",ge),t.addEventListener("pointercancel",ge);let je=0;Y.addEventListener("start",()=>st=performance.now()/1e3);let Ve="follow";const en=new I,rs=new I,Fn=new I,as=L=>{const X=r.levelAt(b.s);E.group.position.set(b.x,X+Math.sin(L*1.3)*.015,b.z),E.group.rotation.set(Math.sin(L*.9)*.004,b.psi,Ji.clamp(-b.r*b.u*.5,-.04,.04)),E.rudder.rotation.y=-b.rudder*.6,en.set(b.x,X+1.6,b.z)};as(0),rs.copy(en),Y.target.copy(en),s.position.set(b.x-Math.sin(b.psi)*24,en.y+9,b.z-Math.cos(b.psi)*24),Y.update();let Tn=2,We=null,ee=null;const ls=L=>{var X;return L?`${L.action}:${((X=L.gate)==null?void 0:X.label)??""}:${L.group.name}`:""};let zn=null;const cs=new Set;let Ni=0,Oo,io=0,so=!1,R=0;const H=()=>(ee==null?void 0:ee.adjacent)??[];let Z="",K=0;const G=L=>{const[X,j]=b.span();return X<L.s+.3&&j>L.s-.3},pt=L=>{switch(L){case"throttleUp":N.active&&(N.stop(),q.toast("You take the tiller back.","info",2e3)),b.notch=Math.min(ri,b.notch+1);break;case"throttleDown":b.notch=Math.max(Ns,b.notch-1);break;case"neutral":b.notch=0;break;case"paddles":We&&r.togglePaddle(We);break;case"gates":if(We){const X=r.toggleGate(We,G(We));X&&q.nope(We,/in the way/.test(X)?"The boat's in the way":"Levels don't match yet")}break;case"nextGate":{const X=H();X.length&&(We=X[(X.indexOf(We)+1)%X.length],zn=ls(ee));break}case"timeFaster":Tn=wi[Math.min(wi.length-1,wi.indexOf(Tn)+1)];break;case"timeCycle":Tn=wi[(wi.indexOf(Tn)+1)%wi.length];break;case"timeSlower":Tn=wi[Math.max(0,wi.indexOf(Tn)-1)];break;case"camera":Ve==="follow"?(Fn.copy(s.position).sub(Y.target),Ve="steerer",Y.enabled=!1,E.steerer.visible=!1):(Ve="follow",Y.enabled=!0,s.position.copy(Y.target).add(Fn),E.steerer.visible=!0);break;case"map":ie.bigOpen=!ie.bigOpen,q.setMapOpen(ie.bigOpen);break;case"help":q.toggleHelp();break;case"mute":Qt.toggleMute();break;case"moor":{if(V){q.toast("Hang on: your steerer is still up the towpath with the boat hook.","info",2500);break}const X=w.act();if(X&&q.toast(X,"info",3e3),w.moored){const j=x.zoneAt(b.s),rt=$t(mt.current.zone);if((j==null?void 0:j.kind)==="stop"&&!ut.has(j.id)&&(ut.add(j.id),x.hideStopMarker(j.id),q.toast(NM(j.poi.name,j.poi.kind),"info",7e3),S.hour=(S.hour+1)%24),xt&&j===xt.dest&&Ft(),(j==null?void 0:j.kind)==="stop"&&lt(j),Dt(),Ct&&j===rt&&!mt.result){const bt=y.nextFrom(_M);bt&&y.give(bt),q.showSummary(mt.complete(S.hour),j.name,bt?zs[bt].name:void 0),tt(),x.setActive(null),ie.clearDestination()}else(j==null?void 0:j.kind)!=="stop"&&q.toast(j?`Moored at ${j.name}.`:Ct?`Moored up. Your trip ends at ${rt.name}.`:"Moored up.","info",3500)}break}case"nextTrip":if(mt.result)mt.next(S.hour),q.hideSummary(),Ct=!1,yt(),N.roster(),tt();else if(q.offerOpen&&nt==="helper"){q.hideOffer();const X=r.windingHoles.reduce((j,rt)=>Math.abs(rt-b.s)<Math.abs(j-b.s)?rt:j);ft(X)}else q.offerOpen&&nt==="volunteers"?(q.hideOffer(),ee&&N.isStaffed(ee.group)&&(w.castOff(),N.start(ee.group),q.toast("The volunteers take over. Sit back and enjoy it.","info",3500))):q.offerOpen&&nt==="lift"?(q.hideOffer(),et()):q.offerOpen&&nt==="sleep"?(q.hideOffer(),S.hour=7.25,q.toast("You sleep like a log to the creak of the ropes. Morning! 🌅","info",4500)):q.offerOpen&&(q.hideOffer(),Ct=!0,mt.next(S.hour),tt(),x.setActive($t(mt.current.zone)),z());break;case"declineTrip":if(q.offerOpen&&q.hideOffer(),nt==="trip"&&$.add(mt.index),nt==="helper"&&wt&&(q.toast(`"Right you are! I'll leave you to it." They lean on the fence to watch.`,"info",3500),Vt=0,te()),nt==="lift"&&D){q.toast(`"No worries!" ${D.name} sets off up the towpath on foot.`,"info",3500);const X=x.zoneAt(b.s);X&&It(X.id),D=null}break;case"tripOffer":break;case"clear":{const X=W.find(rt=>rt.active&&Math.abs(rt.s-b.s)<Ba),j=Gt.near(b.s);if(!X&&j){w.moored?(y.give(j.item),j.group.visible=!1,q.toast(j.done,"info",4500)):q.toast("Moor up alongside first (F), then you can load it.","info",3e3);break}if(!X)q.toast("There's nothing here to clear.","info",2e3);else if(!w.moored)q.toast("Moor up first (F), then you can get at it with the boat hook.","info",3500);else if(!V&&!X.clearing){const rt=qn(UM),bt=new J(new jt(.025,.025,2.6,6),new Jt({color:"#8a6a45"}));bt.position.set(0,-.6,.9),bt.rotation.x=1.2,rt.armR.add(bt),n.add(rt.group),E.steerer.visible=!1;const Lt=Math.sign(X.s-b.s)||1;V={b:X,person:rt,phase:"out",s:b.s,target:X.s-Lt*2.5,home:b.s},q.toast("Off you hop with the boat hook…","info",2500)}break}case"autopilot":if(N.active)N.stop(),q.toast("You take the tiller back.","info",2500);else if(ee&&N.isStaffed(ee.group)){nt="volunteers";const X=LM({coat:"#1d5fa8",trousers:"#2d3a55",skin:"#e3b08f",hair:"#5a3a22",hairStyle:"short",longCoat:!1},j=>Ci(j,"wave",.3));q.showOffer("Volunteers on duty",`Help through ${ee.group.name}?`,`<img class="offer-pic" src="${X}" alt="">Canal &amp; River Trust volunteers in blue are working the lock today. Want them to work you through? Sit back and watch while they wind the paddles and swing the gates.`,"Yes please","I'll do it")}else q.toast("No volunteers on duty here, so you'll have to work this one yourself.","info",3e3);break;case"headlight":so=!so,E.headlight.intensity=so?40:0;break}},Pt=()=>{const L=r.bodies[r.bodyIndexAt(b.s)],X=b.s-i.meta.towerWharfS,j=`${Tr(X)} ${X>=0?"above":"below"} Tower Wharf`;if(L.kind==="chamber")return[`In ${L.lockName}`,j];const rt=r.gates.find(_e=>_e.s>b.s),bt=[...r.gates].reverse().find(_e=>_e.s<b.s),Lt=u.at(b.s),gt=Lt!=null&&Lt.data.name?` · under ${Lt.data.name}`:"";return Math.abs(b.s-p)<40?["Taylor's Boatyard",`Historic boatbuilders and dry dock by Tower Wharf${gt}`]:Math.abs(b.s-i.meta.towerWharfS)<70?["Tower Wharf",`Junction with the Dee Branch${gt}`]:rt&&rt.s-b.s<160?[`Approaching ${rt.lockName}`,j+gt]:bt&&b.s-bt.s<120?[`Leaving ${bt.lockName}`,j+gt]:rt&&bt?[`${bt.lockName} → ${rt.lockName}`,j+gt]:[rt?`Towards ${rt.lockName}`:"Towards Christleton & Nantwich",j+gt]},zt=()=>{const L=Y.target,X=s.position,j=L.distanceTo(X);for(let rt=4;rt<j;rt+=1.5){const bt=rt/j,Lt=L.x+(X.x-L.x)*bt,gt=L.y+(X.y-L.y)*bt,_e=L.z+(X.z-L.z)*bt,re=o.project(Lt,_e,b.s),Se=u.rampAt(re.s,re.d);if(gt<v.roofAt(Lt,_e)||gt<d.heightAt(Lt,_e)+.5||Se.onDeck&&gt<Se.y+1.2){s.position.lerpVectors(L,X,Math.max(4,rt-2)/j);return}}};q.toast("Welcome aboard the Chester Rose! W to get going. Cruise past a green ! for a mission. H for help.","info",7e3),tt();const Bt=new gv;let Xt=0;addEventListener("resize",()=>{s.aspect=t.clientWidth/t.clientHeight,s.updateProjectionMatrix(),e.setSize(t.clientWidth,t.clientHeight,!1)});const se=()=>{var oo;const L=Math.min(Bt.getDelta(),.1);Xt+=L;for(const at of ne.drain())pt(at);const X=L*Tn,j=Math.max(1,Math.ceil(X/OM));for(let at=0;at<j;at++){r.update(X/j),b.bowThrust=ne.bowThrust,!N.active&&!(wt!=null&&wt.turning)&&b.step(X/j,ne.steer);for(const Ot of b.contacts)if(Ot.impulse>1500&&io<=0)if(Qt.bump(Math.min(1,Ot.impulse/12e3)),io=.4,W.some(ue=>ue.obstacle===Ot.obstacle))q.toast("It's jammed solid. Moor up nearby (F) and clear it with the boat hook (G).","warn",3500);else if(Ot.kind==="boat"&&!x.boats.includes(Ot.obstacle))k.bumped(Ot.obstacle),Ot.impulse>3e3&&mt.bumps++;else if(Ot.kind==="boat"){const ue=Ot.obstacle;x.rockBoat(ue,Math.min(.08,Ot.impulse/5e4)),Ot.impulse>3e3&&(mt.bumps++,q.toast(`Bump! Sorry, ${ue.name}. A head pops out of the hatch…`,"warn",3e3))}else Ot.impulse>9e3&&(mt.bumps++,q.toast(Ot.kind==="gate"?"Bump! Into the lock gates.":"Clunk. Mind the bank!","info",2200))}io-=L;const rt=o.frame(b.s),bt=Math.sin(b.psi)*rt.tx+Math.cos(b.psi)*rt.tz>=0;ee=Yh(r,b.span(),bt);for(const at of r.events.splice(0))(!at.group||at.group===(ee==null?void 0:ee.group)||at.group.gates.some(ue=>Math.abs(ue.s-b.s)<150))&&q.toast(at.text,at.kind);if(N.active&&ne.steer!==0&&(N.stop(),q.toast("You take the tiller back.","info",2e3)),N.night=S.isNight,N.update(X,ee,bt)==="done"&&(q.toast("Through! The volunteers wave you on your way. Thanks, volunteers!","info",4500),ee=Yh(r,b.span(),bt)),!N.active&&(ee!=null&&ee.keeper)&&ee.gate&&ee.action!=="wait"){const at=ls(ee);if(at!==Z)Z=at,K=Xt+1.5;else if(Xt>=K){const Ot=ee.gate;ee.action==="paddlesUp"?Ot.wantPaddle=!0:ee.action==="paddlesDown"?Ot.wantPaddle=!1:ee.action==="close"?Ot.wantOpen=!1:ee.action==="open"&&r.levelsMatch(Ot)&&(Ot.wantOpen=!0),Z=""}}const Lt=H();zn!==null&&(zn!==ls(ee)||!We||!Lt.includes(We))&&(zn=null),zn===null&&(We=ee!=null&&ee.gate&&!ee.keeper?ee.gate:Lt.includes(We)?We:Lt.at(-1)??null),g.setSelected(We),q.setLockPanel(r,{step:ee,levelsMatch:at=>r.levelsMatch(at),boatSpans:G,volunteers:N.active?"active":N.isStaffed(ee==null?void 0:ee.group)?"available":"none"});for(const at of r.gates)at.paddle<.05?cs.delete(at):Math.abs(at.s-b.s)>110&&!cs.has(at)&&(cs.add(at),q.toast(`You've left the paddles up at ${at.lockName}. The lock-keeper won't be pleased.`,"warn",6e3));Ni=b.speed*Ha>4.3?Ni+X:0,Ni>6&&(q.toast("Steady on! The limit is 4 mph, and your wash is slapping the moored boats.","warn"),Ni=-30),k.update(X,bt?1:-1);for(const at of k.events.splice(0)){const Ot=S.hour<12?"Morning":S.hour<18?"Afternoon":"Evening";at.kind==="greet"?q.toast(`"${Ot}!" The steerer of ${at.boat.name} gives you a wave.`,"info",3500):at.kind==="wrongSide"?q.toast(`Pass oncoming boats on the right (port to port). ${at.boat.name}'s steerer looks puzzled.`,"warn",4500):q.toast(`Bump! Sorry, ${at.boat.name}!`,"warn",3e3)}for(const at of Rt.values())Ci(at,"shake",Xt*.8);{const at=r.windingHoles.find(ue=>Math.abs(ue-b.s)<45);at!==void 0&&!wt&&!q.offerOpen&&!N.active?(Vt+=L,Vt>60&&it(at)):at===void 0&&(Vt=0),wt&&!wt.turning&&Ci(wt.person,q.offerOpen?"wave":"rest",Xt);const Ot=wt==null?void 0:wt.turning;if(Ot){Ot.t+=L/12;const ue=Math.min(1,Ot.t),Ze=ue*ue*(3-2*ue),Ke=o.frame(Ot.s),ki=Math.min(1,ue/.4);b.x=Ot.x0+(Ke.x-Ot.x0)*ki,b.z=Ot.z0+(Ke.z-Ot.z0)*ki,b.psi=Ot.psi0+(Ot.psi1-Ot.psi0)*Ze,b.u=b.v=b.r=0,b.notch=0,b.thrust=0,b.s=o.project(b.x,b.z,b.s).s,ue>=1&&(q.toast('"There you go, facing the right way!" The old boater hops off and tips their cap.',"info",5e3),Vt=0,te())}}O.update(L),B-=L;for(const at of O.events.splice(0))at.kind==="quack"?(Qt.quack(),B<=0&&(q.toast("Quack! A mallard paddles off, deeply unimpressed.","info",2500),B=25)):(mt.rocked++,q.toast("An angler shakes a fist as your wash bobs their float. Ease off past the anglers!","warn",4e3));for(const at of he)!kt.has(at.name)&&Math.abs(at.s-b.s)<45&&(kt.add(at.name),q.toast(kM(at.name,at.kind),"info",7e3));{const at=Math.sin(b.psi),Ot=Math.cos(b.psi),ue=Sn/2+.3,Ze=Math.min(1,Math.abs(b.thrust)/3250);C.update(X,b.s,[b.x-at*ue,b.z-Ot*ue],b.psi,b.speed*Ha,Ze)}R-=L;for(const at of C.washes(x.boats))x.rockBoat(at.boat,.02+at.strength*.07),!(at.strength<.35)&&(mt.rocked++,R<=0&&(q.toast(pu[Math.floor(Math.random()*pu.length)].replace("%",at.boat.name),"warn",3500),R=6));const gt=(oo=u.at(b.s))==null?void 0:oo.data.name;if(gt&&gt!==Oo&&q.toast(`Under ${gt}`,"info",2200),Oo=gt,as(Xt),E.tillerHint.visible){const at=.5+.5*Math.sin(Xt*3);E.tillerHint.material.opacity=.25+.45*at,E.tillerHint.scale.setScalar(1+.12*at)}if(m.update(L),g.update(L),x.update(L),_.update(L,s.position),A.update(L),Qt.rumble(_.rumble),w.update(r.levelAt(b.s),L),S.update(X/3600,en),S.sky.position.copy(s.position),Ve==="follow"){const at=en.clone().sub(rs);if(at.length()>50?(Y.target.copy(en),s.position.set(b.x-Math.sin(b.psi)*24,en.y+9,b.z-Math.cos(b.psi)*24),je=0):(s.position.add(at),Y.target.add(at)),je>0){const Ot=s.position.clone().sub(Y.target);s.position.copy(Y.target).addScaledVector(Ot.normalize(),je)}if(performance.now()/1e3-st>3&&Math.abs(b.u)>.25){const Ot=s.position.clone().sub(Y.target),ue=Math.atan2(Ot.x,Ot.z);let Ke=b.psi+(b.u>0?Math.PI:0)-ue;Ke=Math.atan2(Math.sin(Ke),Math.cos(Ke));const ki=Ke*Math.min(1,L*.5);Ot.applyAxisAngle(new I(0,1,0),ki),s.position.copy(Y.target).add(Ot)}Y.update(),je=s.position.distanceTo(Y.target),zt()}else{const at=Math.sin(b.psi),Ot=Math.cos(b.psi),ue=-Sn/2+.9;s.position.set(b.x+at*ue,en.y+.75,b.z+Ot*ue),s.lookAt(b.x+at*40,en.y-.2,b.z+Ot*40)}rs.copy(en),u.updateOcclusion(s.position,en,L),q.setHelm({notch:b.notch,speedMph:b.speed*Ha,timeScale:Tn});const[_e,re]=Pt();q.setLocation(_e,re,`Journal: ${ut.size}/${Ut.length} canalside stops · ${kt.size}/${he.length} sights`),ie.draw(b.x,b.z,b.psi);const Se=$t(mt.current.zone),nn=(Se.s0+Se.s1)/2-b.s,Ce=b.s>Se.s0-4&&b.s<Se.s1+4,De=Math.sign(nn)===(bt?1:-1)?"ahead":"behind you",ve=Se.name.split(",")[0],vn=Ce?`${ve} · pull in and tie up (F)`:`${ve} · ${Tr(nn)} ${De}`;if(!Ct&&!mt.result&&Zi.forEach((at,Ot)=>{if(mt.done.has(Ot))return;const ue=$t(at.from),Ze=Math.abs((ue.s0+ue.s1)/2-b.s);Ze>90?$.delete(Ot):Ze<45&&!$.has(Ot)&&!q.offerOpen&&T(Ot)}),q.setTrip({state:mt.result?"done":Ct?"active":"none",n:mt.index+1,title:mt.current.title,brief:mt.current.brief,where:vn}),xt){const at=xt.dest,Ot=(at.s0+at.s1)/2-b.s,ue=b.s>at.s0-4&&b.s<at.s1+4;q.setLift(`${xt.name} → ${P(at)} · ${ue?"moor up (F)":`${Tr(Ot)} ${Math.sign(Ot)===(bt?1:-1)?"ahead":"behind"}`}`)}else q.setLift(null);if(V){const at=V,ue=(at.phase==="back"?at.home:at.target)-at.s,Ze=at.phase!=="hook"&&Math.abs(ue)>.1;Ze&&(at.s+=Math.sign(ue)*Math.min(Math.abs(ue),1.6*X));const Ke=o.frame(at.s),ki=(r.halfWidthAt(at.s)+1.3)*oe;at.person.group.position.set(Ke.x+Ke.nx*ki,d.bankTop(at.s),Ke.z+Ke.nz*ki),Ze?(at.person.group.rotation.y=Math.atan2(Ke.tx*Math.sign(ue),Ke.tz*Math.sign(ue)),zr(at.person,Xt*7)):(at.person.group.rotation.y=Math.atan2(-Ke.nx*oe,-Ke.nz*oe),hd(at.person),Ci(at.person,at.phase==="hook"?"push":"rest",Xt),at.person.armR.rotation.x&&(at.person.armR.rotation.x+=Math.sin(Xt*4)*.25)),at.phase==="out"&&!Ze?(at.phase="hook",at.b.startClearing(),q.toast("Heave!","info",1500)):at.phase==="back"&&!Ze&&(n.remove(at.person.group),E.steerer.visible=Ve!=="steerer",V=null)}let dn=null;for(const at of W){if(at.update(X,Xt)){const ue=b.obstacles.indexOf(at.obstacle);ue>=0&&b.obstacles.splice(ue,1),mt.cleared++,ie.setHazards(W.filter(Ze=>Ze.active).map(Ze=>o.point(Ze.s,0))),q.toast(`${at.description.cleared} Cast off (F) once you're back aboard.`,"info",7e3),(V==null?void 0:V.b)===at&&(V.phase="back")}if(!at.active)continue;const Ot=Math.abs(at.s-b.s);!at.spotted&&Ot<90&&(at.spotted=!0,q.toast(`${at.description.spotted} Moor up nearby (F) and clear it with the boat hook (G).`,"warn",8e3)),Ot<Ba&&(!dn||Ot<Math.abs(dn.s-b.s))&&(dn=at)}let Fe=w.prompt();const xn=dn?void 0:Gt.near(b.s);xn&&(Fe=w.moored?{key:"G",text:xn.verb,ready:!0}:Fe??{key:"F",text:`Moor up to load ${zs[xn.item].name}`,ready:!1}),dn&&(w.moored?Fe=dn.clearing?{key:"G",text:`Clearing… ${Math.round(dn.progress*100)}%`,ready:!1}:{key:"G",text:"Clear the blockage with the boat hook",ready:!0}:Fe||(Fe={key:"F",text:"Moor up alongside the towpath to get at the blockage",ready:!1})),q.setPrompt(Fe);const Bn=r.gates.reduce((at,Ot)=>at+(Math.abs(Ot.s-b.s)<120?Math.abs(Ot.flow):0),0);Qt.update(b.notch,Bn,q.isWinding,!S.isNight),e.render(n,s),requestAnimationFrame(se)};await Si("Casting off…"),fd.classList.add("done"),requestAnimationFrame(se),Object.assign(window,{game:{scene:n,boat:b,ww:r,camera:s,route:o,renderer:e,moorings:x,trips:mt,traffic:k,decor:F,life:O,blockages:W,volunteers:N,lines:w,minimap:ie,roof:y,pickups:Gt,trains:_,cars:A}})}BM().catch(i=>{console.error(i),pd.textContent=`Something went wrong: ${i.message}`});
