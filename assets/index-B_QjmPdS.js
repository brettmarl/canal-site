var cf=Object.defineProperty;var hf=(i,t,e)=>t in i?cf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var D=(i,t,e)=>hf(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fc="170",ro={ROTATE:0,DOLLY:1,PAN:2},eo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uf=0,Vc=1,df=2,td=1,ed=2,bi=3,Ji=0,un=1,Ie=2,Ki=0,ao=1,gl=2,Wc=3,Xc=4,ff=5,fs=100,pf=101,mf=102,gf=103,vf=104,_f=200,xf=201,Mf=202,yf=203,vl=204,_l=205,bf=206,wf=207,Sf=208,Ef=209,Tf=210,Af=211,Cf=212,Rf=213,Pf=214,xl=0,Ml=1,yl=2,ho=3,bl=4,wl=5,Sl=6,El=7,nd=0,Lf=1,Df=2,Zi=0,If=1,Uf=2,Nf=3,id=4,kf=5,Of=6,Ff=7,sd=300,uo=301,fo=302,Tl=303,Al=304,la=306,po=1e3,Ti=1001,Cl=1002,Sn=1003,zf=1004,sr=1005,ii=1006,xa=1007,gs=1008,Pi=1009,od=1010,rd=1011,jo=1012,pc=1013,xs=1014,si=1015,nr=1016,mc=1017,gc=1018,mo=1020,ad=35902,ld=1021,cd=1022,jn=1023,hd=1024,ud=1025,lo=1026,go=1027,vc=1028,_c=1029,dd=1030,xc=1031,Mc=1033,Yr=33776,jr=33777,Kr=33778,Zr=33779,Rl=35840,Pl=35841,Ll=35842,Dl=35843,Il=36196,Ul=37492,Nl=37496,kl=37808,Ol=37809,Fl=37810,zl=37811,Bl=37812,Hl=37813,Gl=37814,Vl=37815,Wl=37816,Xl=37817,$l=37818,ql=37819,Yl=37820,jl=37821,Jr=36492,Kl=36494,Zl=36495,fd=36283,Jl=36284,Ql=36285,tc=36286,Bf=3200,Hf=3201,pd=0,Gf=1,Xi="",Oe="srgb",Mo="srgb-linear",ca="linear",Ce="srgb",Ps=7680,$c=519,Vf=512,Wf=513,Xf=514,md=515,$f=516,qf=517,Yf=518,jf=519,ec=35044,vs=35048,qc="300 es",Ai=2e3,na=2001;class bs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yc=1234567;const Xo=Math.PI/180,vo=180/Math.PI;function ai(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Ye(i,t,e){return Math.max(t,Math.min(e,i))}function yc(i,t){return(i%t+t)%t}function Kf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Zf(i,t,e){return i!==t?(e-i)/(t-i):0}function $o(i,t,e){return(1-e)*i+e*t}function Jf(i,t,e,n){return $o(i,t,1-Math.exp(-e*n))}function Qf(i,t=1){return t-Math.abs(yc(i,t*2)-t)}function tp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ep(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function np(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ip(i,t){return i+Math.random()*(t-i)}function sp(i){return i*(.5-Math.random())}function op(i){i!==void 0&&(Yc=i);let t=Yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rp(i){return i*Xo}function ap(i){return i*vo}function lp(i){return(i&i-1)===0&&i!==0}function cp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function up(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),d=o((t-n)/2),p=r((t-n)/2),f=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*p,a*c);break;case"YZY":i.set(l*p,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*p,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _s={DEG2RAD:Xo,RAD2DEG:vo,generateUUID:ai,clamp:Ye,euclideanModulo:yc,mapLinear:Kf,inverseLerp:Zf,lerp:$o,damp:Jf,pingpong:Qf,smoothstep:tp,smootherstep:ep,randInt:np,randFloat:ip,randFloatSpread:sp,seededRandom:op,degToRad:rp,radToDeg:ap,isPowerOfTwo:lp,ceilPowerOfTwo:cp,floorPowerOfTwo:hp,setQuaternionFromProperEuler:up,normalize:Te,denormalize:Yn};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,n,s,o,r,a,l,c){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],p=n[2],f=n[5],g=n[8],v=s[0],m=s[3],u=s[6],x=s[1],M=s[4],_=s[7],T=s[2],E=s[5],S=s[8];return o[0]=r*v+a*x+l*T,o[3]=r*m+a*M+l*E,o[6]=r*u+a*_+l*S,o[1]=c*v+h*x+d*T,o[4]=c*m+h*M+d*E,o[7]=c*u+h*_+d*S,o[2]=p*v+f*x+g*T,o[5]=p*m+f*M+g*E,o[8]=p*u+f*_+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*r-a*c,p=a*l-h*o,f=c*o-r*l,g=e*d+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*r)*v,t[3]=p*v,t[4]=(h*e-s*l)*v,t[5]=(s*o-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(r*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ma.makeScale(t,e)),this}rotate(t){return this.premultiply(Ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new le;function gd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dp(){const i=ia("canvas");return i.style.display="block",i}const jc={};function Go(i){i in jc||(jc[i]=!0,console.warn(i))}function fp(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function pp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const _e={enabled:!0,workingColorSpace:Mo,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ce&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ce&&(i.r=co(i.r),i.g=co(i.g),i.b=co(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xi?ca:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function co(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Kc=[.64,.33,.3,.6,.15,.06],Zc=[.2126,.7152,.0722],Jc=[.3127,.329],Qc=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_e.define({[Mo]:{primaries:Kc,whitePoint:Jc,transfer:ca,toXYZ:Qc,fromXYZ:th,luminanceCoefficients:Zc,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:Kc,whitePoint:Jc,transfer:Ce,toXYZ:Qc,fromXYZ:th,luminanceCoefficients:Zc,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});let Ls;class gp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ls===void 0&&(Ls=ia("canvas")),Ls.width=t.width,Ls.height=t.height;const n=Ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ia("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Ri(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ri(e[n]/255)*255):e[n]=Ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vp=0;class vd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(ya(s[r].image)):o.push(ya(s[r]))}else o=ya(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _p=0;class an extends bs{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=Ti,s=Ti,o=ii,r=gs,a=jn,l=Pi,c=an.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=ai(),this.name="",this.source=new vd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case po:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case Cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case po:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case Cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=sd;an.DEFAULT_ANISOTROPY=1;class ze{constructor(t=0,e=0,n=0,s=1){ze.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],f=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,_=(f+1)/2,T=(u+1)/2,E=(h+p)/4,S=(d+v)/4,R=(g+m)/4;return M>_&&M>T?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=E/n,o=S/n):_>T?_<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(_),n=E/s,o=R/s):T<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(T),n=S/o,s=R/o),this.set(n,s,o,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(p-h)*(p-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-v)/x,this.z=(p-h)/x,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xp extends bs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new vd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends xp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _d extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mp extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const p=o[r+0],f=o[r+1],g=o[r+2],v=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==p||c!==f||h!==g){let m=1-a;const u=l*p+c*f+h*g+d*v,x=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const T=Math.sqrt(M),E=Math.atan2(T,u*x);m=Math.sin(m*E)/T,a=Math.sin(a*E)/T}const _=a*x;if(l=l*m+p*_,c=c*m+f*_,h=h*m+g*_,d=d*m+v*_,m===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=o[r],p=o[r+1],f=o[r+2],g=o[r+3];return t[e]=a*g+h*d+l*f-c*p,t[e+1]=l*g+h*p+c*d-a*f,t[e+2]=c*g+h*f+a*p-l*d,t[e+3]=h*g-a*d-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(o/2),p=l(n/2),f=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=p*h*d+c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d-p*f*g;break;case"YXZ":this._x=p*h*d+c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d+p*f*g;break;case"ZXY":this._x=p*h*d-c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d-p*f*g;break;case"ZYX":this._x=p*h*d-c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d+p*f*g;break;case"YZX":this._x=p*h*d+c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d-p*f*g;break;case"XZY":this._x=p*h*d-c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],p=n+a+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=r*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=o*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),d=2*(o*n-r*e);return this.x=e+l*c+r*d-a*h,this.y=n+l*h+a*c-o*d,this.z=s+l*d+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ba.copy(this).projectOnVector(t),this.sub(ba)}reflect(t){return this.sub(ba.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new N,eh=new kn;class ws{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Gn):Gn.fromBufferAttribute(o,r),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(t.matrixWorld),this.union(or)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),rr.subVectors(this.max,Ao),Ds.subVectors(t.a,Ao),Is.subVectors(t.b,Ao),Us.subVectors(t.c,Ao),Ui.subVectors(Is,Ds),Ni.subVectors(Us,Is),is.subVectors(Ds,Us);let e=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-is.z,is.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,is.z,0,-is.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-is.y,is.x,0];return!wa(e,Ds,Is,Us,rr)||(e=[1,0,0,0,1,0,0,0,1],!wa(e,Ds,Is,Us,rr))?!1:(ar.crossVectors(Ui,Ni),e=[ar.x,ar.y,ar.z],wa(e,Ds,Is,Us,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gi=[new N,new N,new N,new N,new N,new N,new N,new N],Gn=new N,or=new ws,Ds=new N,Is=new N,Us=new N,Ui=new N,Ni=new N,is=new N,Ao=new N,rr=new N,ar=new N,ss=new N;function wa(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){ss.fromArray(i,o);const a=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=t.dot(ss),c=e.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const yp=new ws,Co=new N,Sa=new N;class yo{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yp.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Co.subVectors(t,this.center);const e=Co.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Co,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Co.copy(t.center).add(Sa)),this.expandByPoint(Co.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new N,Ea=new N,lr=new N,ki=new N,Ta=new N,cr=new N,Aa=new N;class ha{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ea.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),ki.copy(this.origin).sub(Ea);const o=t.distanceTo(e)*.5,r=-this.direction.dot(lr),a=ki.dot(this.direction),l=-ki.dot(lr),c=ki.lengthSq(),h=Math.abs(1-r*r);let d,p,f,g;if(h>0)if(d=r*l-a,p=r*a-l,g=o*h,d>=0)if(p>=-g)if(p<=g){const v=1/h;d*=v,p*=v,f=d*(d+r*p+2*a)+p*(r*d+p+2*l)+c}else p=o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*l)+c;else p=-o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-r*o+a)),p=d>0?-o:Math.min(Math.max(-o,-l),o),f=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-o,-l),o),f=p*(p+2*l)+c):(d=Math.max(0,-(r*o+a)),p=d>0?o:Math.min(Math.max(-o,-l),o),f=-d*d+p*(p+2*l)+c);else p=r>0?-o:o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ea).addScaledVector(lr,p),f}intersectSphere(t,e){vi.subVectors(t.center,this.origin);const n=vi.dot(this.direction),s=vi.dot(vi)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(o=(t.min.y-p.y)*h,r=(t.max.y-p.y)*h):(o=(t.max.y-p.y)*h,r=(t.min.y-p.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,s,o){Ta.subVectors(e,t),cr.subVectors(n,t),Aa.crossVectors(Ta,cr);let r=this.direction.dot(Aa),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ki.subVectors(this.origin,t);const l=a*this.direction.dot(cr.crossVectors(ki,cr));if(l<0)return null;const c=a*this.direction.dot(Ta.cross(ki));if(c<0||l+c>r)return null;const h=-a*ki.dot(Aa);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,s,o,r,a,l,c,h,d,p,f,g,v,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,d,p,f,g,v,m)}set(t,e,n,s,o,r,a,l,c,h,d,p,f,g,v,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=o,u[5]=r,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ns.setFromMatrixColumn(t,0).length(),o=1/Ns.setFromMatrixColumn(t,1).length(),r=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const p=r*h,f=r*d,g=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=p-v*c,e[9]=-a*l,e[2]=v-p*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const p=l*h,f=l*d,g=c*h,v=c*d;e[0]=p+v*a,e[4]=g*a-f,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=f*a-g,e[6]=v+p*a,e[10]=r*l}else if(t.order==="ZXY"){const p=l*h,f=l*d,g=c*h,v=c*d;e[0]=p-v*a,e[4]=-r*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*h,e[9]=v-p*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const p=r*h,f=r*d,g=a*h,v=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=p*c+v,e[1]=l*d,e[5]=v*c+p,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const p=r*l,f=r*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-p*d,e[8]=g*d+f,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=p-v*d}else if(t.order==="XZY"){const p=r*l,f=r*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=p*d+v,e[5]=r*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bp,t,wp)}lookAt(t,e,n){const s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Oi.crossVectors(n,Mn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Oi.crossVectors(n,Mn)),Oi.normalize(),hr.crossVectors(Mn,Oi),s[0]=Oi.x,s[4]=hr.x,s[8]=Mn.x,s[1]=Oi.y,s[5]=hr.y,s[9]=Mn.y,s[2]=Oi.z,s[6]=hr.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],p=n[9],f=n[13],g=n[2],v=n[6],m=n[10],u=n[14],x=n[3],M=n[7],_=n[11],T=n[15],E=s[0],S=s[4],R=s[8],w=s[12],y=s[1],P=s[5],A=s[9],k=s[13],F=s[2],W=s[6],H=s[10],B=s[14],G=s[3],ut=s[7],_t=s[11],rt=s[15];return o[0]=r*E+a*y+l*F+c*G,o[4]=r*S+a*P+l*W+c*ut,o[8]=r*R+a*A+l*H+c*_t,o[12]=r*w+a*k+l*B+c*rt,o[1]=h*E+d*y+p*F+f*G,o[5]=h*S+d*P+p*W+f*ut,o[9]=h*R+d*A+p*H+f*_t,o[13]=h*w+d*k+p*B+f*rt,o[2]=g*E+v*y+m*F+u*G,o[6]=g*S+v*P+m*W+u*ut,o[10]=g*R+v*A+m*H+u*_t,o[14]=g*w+v*k+m*B+u*rt,o[3]=x*E+M*y+_*F+T*G,o[7]=x*S+M*P+_*W+T*ut,o[11]=x*R+M*A+_*H+T*_t,o[15]=x*w+M*k+_*B+T*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],p=t[10],f=t[14],g=t[3],v=t[7],m=t[11],u=t[15];return g*(+o*l*d-s*c*d-o*a*p+n*c*p+s*a*f-n*l*f)+v*(+e*l*f-e*c*p+o*r*p-s*r*f+s*c*h-o*l*h)+m*(+e*c*d-e*a*f-o*r*d+n*r*f+o*a*h-n*c*h)+u*(-s*a*h-e*l*d+e*a*p+s*r*d-n*r*p+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],p=t[10],f=t[11],g=t[12],v=t[13],m=t[14],u=t[15],x=d*m*c-v*p*c+v*l*f-a*m*f-d*l*u+a*p*u,M=g*p*c-h*m*c-g*l*f+r*m*f+h*l*u-r*p*u,_=h*v*c-g*d*c+g*a*f-r*v*f-h*a*u+r*d*u,T=g*d*l-h*v*l-g*a*p+r*v*p+h*a*m-r*d*m,E=e*x+n*M+s*_+o*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/E;return t[0]=x*S,t[1]=(v*p*o-d*m*o-v*s*f+n*m*f+d*s*u-n*p*u)*S,t[2]=(a*m*o-v*l*o+v*s*c-n*m*c-a*s*u+n*l*u)*S,t[3]=(d*l*o-a*p*o-d*s*c+n*p*c+a*s*f-n*l*f)*S,t[4]=M*S,t[5]=(h*m*o-g*p*o+g*s*f-e*m*f-h*s*u+e*p*u)*S,t[6]=(g*l*o-r*m*o-g*s*c+e*m*c+r*s*u-e*l*u)*S,t[7]=(r*p*o-h*l*o+h*s*c-e*p*c-r*s*f+e*l*f)*S,t[8]=_*S,t[9]=(g*d*o-h*v*o-g*n*f+e*v*f+h*n*u-e*d*u)*S,t[10]=(r*v*o-g*a*o+g*n*c-e*v*c-r*n*u+e*a*u)*S,t[11]=(h*a*o-r*d*o-h*n*c+e*d*c+r*n*f-e*a*f)*S,t[12]=T*S,t[13]=(h*v*s-g*d*s+g*n*p-e*v*p-h*n*m+e*d*m)*S,t[14]=(g*a*s-r*v*s-g*n*l+e*v*l+r*n*m-e*a*m)*S,t[15]=(r*d*s-h*a*s+h*n*l-e*d*l-r*n*p+e*a*p)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,d=a+a,p=o*c,f=o*h,g=o*d,v=r*h,m=r*d,u=a*d,x=l*c,M=l*h,_=l*d,T=n.x,E=n.y,S=n.z;return s[0]=(1-(v+u))*T,s[1]=(f+_)*T,s[2]=(g-M)*T,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(p+u))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+M)*S,s[9]=(m-x)*S,s[10]=(1-(p+v))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Ns.set(s[0],s[1],s[2]).length();const r=Ns.set(s[4],s[5],s[6]).length(),a=Ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Vn.copy(this);const c=1/o,h=1/r,d=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,e.setFromRotationMatrix(Vn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Ai){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let f,g;if(a===Ai)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===na)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Ai){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(r-o),p=(e+t)*c,f=(n+s)*h;let g,v;if(a===Ai)g=(r+o)*d,v=-2*d;else if(a===na)g=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ns=new N,Vn=new pe,bp=new N(0,0,0),wp=new N(1,1,1),Oi=new N,hr=new N,Mn=new N,nh=new pe,ih=new kn;class Zn{constructor(t=0,e=0,n=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ye(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ih.setFromEuler(this),this.setFromQuaternion(ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sp=0;const sh=new N,ks=new kn,_i=new pe,ur=new N,Ro=new N,Ep=new N,Tp=new kn,oh=new N(1,0,0),rh=new N(0,1,0),ah=new N(0,0,1),lh={type:"added"},Ap={type:"removed"},Os={type:"childadded",child:null},Ca={type:"childremoved",child:null};class He extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new N,e=new Zn,n=new kn,s=new N(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new le}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(oh,t)}rotateY(t){return this.rotateOnAxis(rh,t)}rotateZ(t){return this.rotateOnAxis(ah,t)}translateOnAxis(t,e){return sh.copy(t).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oh,t)}translateY(t){return this.translateOnAxis(rh,t)}translateZ(t){return this.translateOnAxis(ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Ro,ur,this.up):_i.lookAt(ur,Ro,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(_i),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lh),Os.child=t,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ap),Ca.child=t,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lh),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,t,Ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,Tp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),p=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}He.DEFAULT_UP=new N(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new N,xi=new N,Ra=new N,Mi=new N,Fs=new N,zs=new N,ch=new N,Pa=new N,La=new N,Da=new N,Ia=new ze,Ua=new ze,Na=new ze;class In{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Wn.subVectors(t,e),s.cross(Wn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Wn.subVectors(s,e),xi.subVectors(n,e),Ra.subVectors(t,e);const r=Wn.dot(Wn),a=Wn.dot(xi),l=Wn.dot(Ra),c=xi.dot(xi),h=xi.dot(Ra),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;const p=1/d,f=(c*l-a*h)*p,g=(r*h-a*l)*p;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Mi.x),l.addScaledVector(r,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return Ia.setScalar(0),Ua.setScalar(0),Na.setScalar(0),Ia.fromBufferAttribute(t,e),Ua.fromBufferAttribute(t,n),Na.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Ia,o.x),r.addScaledVector(Ua,o.y),r.addScaledVector(Na,o.z),r}static isFrontFacing(t,e,n,s){return Wn.subVectors(n,e),xi.subVectors(t,e),Wn.cross(xi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Wn.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return In.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return In.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return In.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return In.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return In.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Fs.subVectors(s,n),zs.subVectors(o,n),Pa.subVectors(t,n);const l=Fs.dot(Pa),c=zs.dot(Pa);if(l<=0&&c<=0)return e.copy(n);La.subVectors(t,s);const h=Fs.dot(La),d=zs.dot(La);if(h>=0&&d<=h)return e.copy(s);const p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Fs,r);Da.subVectors(t,o);const f=Fs.dot(Da),g=zs.dot(Da);if(g>=0&&f<=g)return e.copy(o);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(zs,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return ch.subVectors(o,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(ch,a);const u=1/(m+v+p);return r=v*u,a=p*u,e.copy(n).addScaledVector(Fs,r).addScaledVector(zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},dr={h:0,s:0,l:0};function ka(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=_e.workingColorSpace){if(t=yc(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=ka(r,o,t+1/3),this.g=ka(r,o,t),this.b=ka(r,o,t-1/3)}return _e.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=xd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=co(t.r),this.g=co(t.g),this.b=co(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return _e.fromWorkingColorSpace(on.copy(this),t),Math.round(Ye(on.r*255,0,255))*65536+Math.round(Ye(on.g*255,0,255))*256+Math.round(Ye(on.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(on.copy(this),e);const n=on.r,s=on.g,o=on.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case n:l=(s-o)/d+(s<o?6:0);break;case s:l=(o-n)/d+2;break;case o:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Oe){_e.fromWorkingColorSpace(on.copy(this),t);const e=on.r,n=on.g,s=on.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(dr);const n=$o(Fi.h,dr.h,e),s=$o(Fi.s,dr.s,e),o=$o(Fi.l,dr.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Vt;Vt.NAMES=xd;let Cp=0;class Ss extends bs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=ai(),this.name="",this.blending=ao,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=_l,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vl&&(n.blendSrc=this.blendSrc),this.blendDst!==_l&&(n.blendDst=this.blendDst),this.blendEquation!==fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class En extends Ss{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new N,fr=new it;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ec,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),o=Te(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ec&&(t.usage=this.usage),t}}class Md extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yd extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rp=0;const Ln=new pe,Oa=new He,Bs=new N,yn=new ws,Po=new ws,Ze=new N;class xe extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gd(t)?yd:Md)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new le().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return Oa.lookAt(t),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];yn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(yn.min,Po.min),yn.expandByPoint(Ze),Ze.addVectors(yn.max,Po.max),yn.expandByPoint(Ze)):(yn.expandByPoint(Po.min),yn.expandByPoint(Po.max))}yn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Ze.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(t,c),Ze.add(Bs)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new N,l[R]=new N;const c=new N,h=new N,d=new N,p=new it,f=new it,g=new it,v=new N,m=new N;function u(R,w,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),p.fromBufferAttribute(o,R),f.fromBufferAttribute(o,w),g.fromBufferAttribute(o,y),h.sub(c),d.sub(c),f.sub(p),g.sub(p);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[R].add(v),a[w].add(v),a[y].add(v),l[R].add(m),l[w].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,w=x.length;R<w;++R){const y=x[R],P=y.start,A=y.count;for(let k=P,F=P+A;k<F;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new N,_=new N,T=new N,E=new N;function S(R){T.fromBufferAttribute(s,R),E.copy(T);const w=a[R];M.copy(w),M.sub(T.multiplyScalar(T.dot(w))).normalize(),_.crossVectors(E,w);const P=_.dot(l[R])<0?-1:1;r.setXYZW(R,M.x,M.y,M.z,P)}for(let R=0,w=x.length;R<w;++R){const y=x[R],P=y.start,A=y.count;for(let k=P,F=P+A;k<F;k+=3)S(t.getX(k+0)),S(t.getX(k+1)),S(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const s=new N,o=new N,r=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(t)for(let p=0,f=t.count;p<f;p+=3){const g=t.getX(p+0),v=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),o.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,p=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let u=0;u<h;u++)p[g++]=c[f++]}return new We(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){const p=c[h],f=t(p,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],d=o[c];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hh=new pe,os=new ha,pr=new yo,uh=new N,mr=new N,gr=new N,vr=new N,Fa=new N,_r=new N,dh=new N,xr=new N;class $ extends He{constructor(t=new xe,e=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){_r.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],d=o[l];h!==0&&(Fa.fromBufferAttribute(d,t),r?_r.addScaledVector(Fa,h):_r.addScaledVector(Fa.sub(e),h))}e.add(_r)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(o),os.copy(t.ray).recast(t.near),!(pr.containsPoint(os.origin)===!1&&(os.intersectSphere(pr,uh)===null||os.origin.distanceToSquared(uh)>(t.far-t.near)**2))&&(hh.copy(o).invert(),os.copy(t.ray).applyMatrix4(hh),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,p=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,v=p.length;g<v;g++){const m=p[g],u=r[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,T=M;_<T;_+=3){const E=a.getX(_),S=a.getX(_+1),R=a.getX(_+2);s=Mr(this,u,t,n,c,h,d,E,S,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,u=v;m<u;m+=3){const x=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=Mr(this,r,t,n,c,h,d,x,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=p.length;g<v;g++){const m=p[g],u=r[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,T=M;_<T;_+=3){const E=_,S=_+1,R=_+2;s=Mr(this,u,t,n,c,h,d,E,S,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,u=v;m<u;m+=3){const x=m,M=m+1,_=m+2;s=Mr(this,r,t,n,c,h,d,x,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Pp(i,t,e,n,s,o,r,a){let l;if(t.side===un?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===Ji,a),l===null)return null;xr.copy(a),xr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(xr);return c<e.near||c>e.far?null:{distance:c,point:xr.clone(),object:i}}function Mr(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,mr),i.getVertexPosition(l,gr),i.getVertexPosition(c,vr);const h=Pp(i,t,e,n,mr,gr,vr,dh);if(h){const d=new N;In.getBarycoord(dh,mr,gr,vr,d),s&&(h.uv=In.getInterpolatedAttribute(s,a,l,c,d,new it)),o&&(h.uv1=In.getInterpolatedAttribute(o,a,l,c,d,new it)),r&&(h.normal=In.getInterpolatedAttribute(r,a,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new N,materialIndex:0};In.getNormal(mr,gr,vr,p.normal),h.face=p,h.barycoord=d}return h}class Rt extends xe{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function g(v,m,u,x,M,_,T,E,S,R,w){const y=_/S,P=T/R,A=_/2,k=T/2,F=E/2,W=S+1,H=R+1;let B=0,G=0;const ut=new N;for(let _t=0;_t<H;_t++){const rt=_t*P-k;for(let Ot=0;Ot<W;Ot++){const ee=Ot*y-A;ut[v]=ee*x,ut[m]=rt*M,ut[u]=F,c.push(ut.x,ut.y,ut.z),ut[v]=0,ut[m]=0,ut[u]=E>0?1:-1,h.push(ut.x,ut.y,ut.z),d.push(Ot/S),d.push(1-_t/R),B+=1}}for(let _t=0;_t<R;_t++)for(let rt=0;rt<S;rt++){const Ot=p+rt+W*_t,ee=p+rt+W*(_t+1),J=p+(rt+1)+W*(_t+1),dt=p+(rt+1)+W*_t;l.push(Ot,ee,dt),l.push(ee,J,dt),G+=6}a.addGroup(f,G,w),f+=G,p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _o(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function hn(i){const t={};for(let e=0;e<i.length;e++){const n=_o(i[e]);for(const s in n)t[s]=n[s]}return t}function Lp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const wd={clone:_o,merge:hn};var Dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Ss{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_o(t.uniforms),this.uniformsGroups=Lp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Sd extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new N,fh=new it,ph=new it;class mn extends Sd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,fh,ph),e.subVectors(ph,fh)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hs=-90,Gs=1;class Up extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(Hs,Gs,t,e);s.layers=this.layers,this.add(s);const o=new mn(Hs,Gs,t,e);o.layers=this.layers,this.add(o);const r=new mn(Hs,Gs,t,e);r.layers=this.layers,this.add(r);const a=new mn(Hs,Gs,t,e);a.layers=this.layers,this.add(a);const l=new mn(Hs,Gs,t,e);l.layers=this.layers,this.add(l);const c=new mn(Hs,Gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ed extends an{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:uo,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Np extends Ms{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ed(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ii}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rt(5,5,5),o=new Li({name:"CubemapFromEquirect",uniforms:_o(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Ki});o.uniforms.tEquirect.value=e;const r=new $(s,o),a=e.minFilter;return e.minFilter===gs&&(e.minFilter=ii),new Up(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const za=new N,kp=new N,Op=new le;class Wi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=za.subVectors(n,e).cross(kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(za),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Op.getNormalMatrix(t),s=this.coplanarPoint(za).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new yo,yr=new N;class wc{constructor(t=new Wi,e=new Wi,n=new Wi,s=new Wi,o=new Wi,r=new Wi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ai){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],p=s[7],f=s[8],g=s[9],v=s[10],m=s[11],u=s[12],x=s[13],M=s[14],_=s[15];if(n[0].setComponents(l-o,p-c,m-f,_-u).normalize(),n[1].setComponents(l+o,p+c,m+f,_+u).normalize(),n[2].setComponents(l+r,p+h,m+g,_+x).normalize(),n[3].setComponents(l-r,p-h,m-g,_-x).normalize(),n[4].setComponents(l-a,p-d,m-v,_-M).normalize(),e===Ai)n[5].setComponents(l+a,p+d,m+v,_+M).normalize();else if(e===na)n[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(yr.x=s.normal.x>0?t.max.x:t.min.x,yr.y=s.normal.y>0?t.max.y:t.min.y,yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Td(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Fp(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,d[p]=v)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class ui extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,p=e/l,f=[],g=[],v=[],m=[];for(let u=0;u<h;u++){const x=u*p-r;for(let M=0;M<c;M++){const _=M*d-o;g.push(_,-x,0),v.push(0,0,1),m.push(M/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<a;x++){const M=x+c*u,_=x+c*(u+1),T=x+1+c*(u+1),E=x+1+c*u;f.push(M,_,E),f.push(_,T,E)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ui(t.width,t.height,t.widthSegments,t.heightSegments)}}var zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bp=`#ifdef USE_ALPHAHASH
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
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xp=`#ifdef USE_AOMAP
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
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qp=`#ifdef USE_BATCHING
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
#endif`,Yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
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
#endif`,Qp=`#ifdef USE_BUMPMAP
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lm=`#define PI 3.141592653589793
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
} // validated`,cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hm=`vec3 transformedNormal = objectNormal;
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
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tm=`#ifdef USE_GRADIENTMAP
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
}`,Am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pm=`uniform bool receiveShadow;
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
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
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
#endif`,Om=`struct PhysicalMaterial {
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
}`,Fm=`
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
#endif`,zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ym=`#if defined( USE_POINTS_UV )
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
#endif`,jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
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
#endif`,e0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
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
#endif`,l0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w0=`float getShadowMask() {
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
}`,S0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,C0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z0=`uniform sampler2D t2D;
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
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`#include <common>
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
}`,X0=`#if DEPTH_PACKING == 3200
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
}`,$0=`#define DISTANCE
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
}`,q0=`#define DISTANCE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,J0=`#include <common>
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
}`,Q0=`uniform vec3 diffuse;
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
}`,tg=`#define LAMBERT
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
}`,eg=`#define LAMBERT
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
}`,ng=`#define MATCAP
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
}`,ig=`#define MATCAP
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
}`,sg=`#define NORMAL
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
}`,og=`#define NORMAL
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
}`,rg=`#define PHONG
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
}`,ag=`#define PHONG
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
}`,lg=`#define STANDARD
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
}`,cg=`#define STANDARD
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
}`,hg=`#define TOON
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
}`,ug=`#define TOON
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
}`,dg=`uniform float size;
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 color;
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
}`,gg=`uniform float rotation;
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
}`,vg=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:zp,alphahash_pars_fragment:Bp,alphamap_fragment:Hp,alphamap_pars_fragment:Gp,alphatest_fragment:Vp,alphatest_pars_fragment:Wp,aomap_fragment:Xp,aomap_pars_fragment:$p,batching_pars_vertex:qp,batching_vertex:Yp,begin_vertex:jp,beginnormal_vertex:Kp,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:tm,clipping_planes_pars_fragment:em,clipping_planes_pars_vertex:nm,clipping_planes_vertex:im,color_fragment:sm,color_pars_fragment:om,color_pars_vertex:rm,color_vertex:am,common:lm,cube_uv_reflection_fragment:cm,defaultnormal_vertex:hm,displacementmap_pars_vertex:um,displacementmap_vertex:dm,emissivemap_fragment:fm,emissivemap_pars_fragment:pm,colorspace_fragment:mm,colorspace_pars_fragment:gm,envmap_fragment:vm,envmap_common_pars_fragment:_m,envmap_pars_fragment:xm,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Lm,envmap_vertex:ym,fog_vertex:bm,fog_pars_vertex:wm,fog_fragment:Sm,fog_pars_fragment:Em,gradientmap_pars_fragment:Tm,lightmap_pars_fragment:Am,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Rm,lights_pars_begin:Pm,lights_toon_fragment:Dm,lights_toon_pars_fragment:Im,lights_phong_fragment:Um,lights_phong_pars_fragment:Nm,lights_physical_fragment:km,lights_physical_pars_fragment:Om,lights_fragment_begin:Fm,lights_fragment_maps:zm,lights_fragment_end:Bm,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:$m,map_particle_fragment:qm,map_particle_pars_fragment:Ym,metalnessmap_fragment:jm,metalnessmap_pars_fragment:Km,morphinstance_vertex:Zm,morphcolor_vertex:Jm,morphnormal_vertex:Qm,morphtarget_pars_vertex:t0,morphtarget_vertex:e0,normal_fragment_begin:n0,normal_fragment_maps:i0,normal_pars_fragment:s0,normal_pars_vertex:o0,normal_vertex:r0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:l0,clearcoat_normal_fragment_maps:c0,clearcoat_pars_fragment:h0,iridescence_pars_fragment:u0,opaque_fragment:d0,packing:f0,premultiplied_alpha_fragment:p0,project_vertex:m0,dithering_fragment:g0,dithering_pars_fragment:v0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:x0,shadowmap_pars_fragment:M0,shadowmap_pars_vertex:y0,shadowmap_vertex:b0,shadowmask_pars_fragment:w0,skinbase_vertex:S0,skinning_pars_vertex:E0,skinning_vertex:T0,skinnormal_vertex:A0,specularmap_fragment:C0,specularmap_pars_fragment:R0,tonemapping_fragment:P0,tonemapping_pars_fragment:L0,transmission_fragment:D0,transmission_pars_fragment:I0,uv_pars_fragment:U0,uv_pars_vertex:N0,uv_vertex:k0,worldpos_vertex:O0,background_vert:F0,background_frag:z0,backgroundCube_vert:B0,backgroundCube_frag:H0,cube_vert:G0,cube_frag:V0,depth_vert:W0,depth_frag:X0,distanceRGBA_vert:$0,distanceRGBA_frag:q0,equirect_vert:Y0,equirect_frag:j0,linedashed_vert:K0,linedashed_frag:Z0,meshbasic_vert:J0,meshbasic_frag:Q0,meshlambert_vert:tg,meshlambert_frag:eg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:sg,meshnormal_frag:og,meshphong_vert:rg,meshphong_frag:ag,meshphysical_vert:lg,meshphysical_frag:cg,meshtoon_vert:hg,meshtoon_frag:ug,points_vert:dg,points_frag:fg,shadow_vert:pg,shadow_frag:mg,sprite_vert:gg,sprite_frag:vg},wt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},ni={basic:{uniforms:hn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:hn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:hn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:hn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:hn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:hn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:hn([wt.points,wt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:hn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:hn([wt.common,wt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:hn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:hn([wt.sprite,wt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:hn([wt.common,wt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:hn([wt.lights,wt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};ni.physical={uniforms:hn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const br={r:0,b:0,g:0},as=new Zn,_g=new pe;function xg(i,t,e,n,s,o,r){const a=new Vt(0);let l=o===!0?0:1,c,h,d=null,p=0,f=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function v(x){let M=!1;const _=g(x);_===null?u(a,l):_&&_.isColor&&(u(_,1),M=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,M){const _=g(M);_&&(_.isCubeTexture||_.mapping===la)?(h===void 0&&(h=new $(new Rt(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:_o(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),as.copy(M.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_g.makeRotationFromEuler(as)),h.material.toneMapped=_e.getTransfer(_.colorSpace)!==Ce,(d!==_||p!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,p=_.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new $(new ui(2,2),new Li({name:"BackgroundMaterial",uniforms:_o(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=_e.getTransfer(_.colorSpace)!==Ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||p!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,p=_.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,M){x.getRGB(br,bd(i)),n.buffers.color.setClear(br.r,br.g,br.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:v,addToRenderList:m}}function Mg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let o=s,r=!1;function a(y,P,A,k,F){let W=!1;const H=d(k,A,P);o!==H&&(o=H,c(o.object)),W=f(y,k,A,F),W&&g(y,k,A,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,_(y,P,A,k),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,P,A){const k=A.wireframe===!0;let F=n[y.id];F===void 0&&(F={},n[y.id]=F);let W=F[P.id];W===void 0&&(W={},F[P.id]=W);let H=W[k];return H===void 0&&(H=p(l()),W[k]=H),H}function p(y){const P=[],A=[],k=[];for(let F=0;F<e;F++)P[F]=0,A[F]=0,k[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:A,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,P,A,k){const F=o.attributes,W=P.attributes;let H=0;const B=A.getAttributes();for(const G in B)if(B[G].location>=0){const _t=F[G];let rt=W[G];if(rt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),_t===void 0||_t.attribute!==rt||rt&&_t.data!==rt.data)return!0;H++}return o.attributesNum!==H||o.index!==k}function g(y,P,A,k){const F={},W=P.attributes;let H=0;const B=A.getAttributes();for(const G in B)if(B[G].location>=0){let _t=W[G];_t===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor));const rt={};rt.attribute=_t,_t&&_t.data&&(rt.data=_t.data),F[G]=rt,H++}o.attributes=F,o.attributesNum=H,o.index=k}function v(){const y=o.newAttributes;for(let P=0,A=y.length;P<A;P++)y[P]=0}function m(y){u(y,0)}function u(y,P){const A=o.newAttributes,k=o.enabledAttributes,F=o.attributeDivisors;A[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),F[y]!==P&&(i.vertexAttribDivisor(y,P),F[y]=P)}function x(){const y=o.newAttributes,P=o.enabledAttributes;for(let A=0,k=P.length;A<k;A++)P[A]!==y[A]&&(i.disableVertexAttribArray(A),P[A]=0)}function M(y,P,A,k,F,W,H){H===!0?i.vertexAttribIPointer(y,P,A,F,W):i.vertexAttribPointer(y,P,A,k,F,W)}function _(y,P,A,k){v();const F=k.attributes,W=A.getAttributes(),H=P.defaultAttributeValues;for(const B in W){const G=W[B];if(G.location>=0){let ut=F[B];if(ut===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),ut!==void 0){const _t=ut.normalized,rt=ut.itemSize,Ot=t.get(ut);if(Ot===void 0)continue;const ee=Ot.buffer,J=Ot.type,dt=Ot.bytesPerElement,Pt=J===i.INT||J===i.UNSIGNED_INT||ut.gpuType===pc;if(ut.isInterleavedBufferAttribute){const ct=ut.data,Dt=ct.stride,qt=ut.offset;if(ct.isInstancedInterleavedBuffer){for(let Wt=0;Wt<G.locationSize;Wt++)u(G.location+Wt,ct.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Wt=0;Wt<G.locationSize;Wt++)m(G.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Wt=0;Wt<G.locationSize;Wt++)M(G.location+Wt,rt/G.locationSize,J,_t,Dt*dt,(qt+rt/G.locationSize*Wt)*dt,Pt)}else{if(ut.isInstancedBufferAttribute){for(let ct=0;ct<G.locationSize;ct++)u(G.location+ct,ut.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ct=0;ct<G.locationSize;ct++)m(G.location+ct);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let ct=0;ct<G.locationSize;ct++)M(G.location+ct,rt/G.locationSize,J,_t,rt*dt,rt/G.locationSize*ct*dt,Pt)}}else if(H!==void 0){const _t=H[B];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(G.location,_t);break;case 3:i.vertexAttrib3fv(G.location,_t);break;case 4:i.vertexAttrib4fv(G.location,_t);break;default:i.vertexAttrib1fv(G.location,_t)}}}}x()}function T(){R();for(const y in n){const P=n[y];for(const A in P){const k=P[A];for(const F in k)h(k[F].object),delete k[F];delete P[A]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const A in P){const k=P[A];for(const F in k)h(k[F].object),delete k[F];delete P[A]}delete n[y.id]}function S(y){for(const P in n){const A=n[P];if(A[y.id]===void 0)continue;const k=A[y.id];for(const F in k)h(k[F].object),delete k[F];delete A[y.id]}}function R(){w(),r=!0,o!==s&&(o=s,c(o.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function yg(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,p){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*p[v];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bg(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(S){return!(S!==jn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const R=S===nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Pi&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==si&&!R)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:T,maxSamples:E}}function wg(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Wi,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||n!==0||s;return s=p,n=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||o&&!m)o?h(null):c();else{const x=o?0:n,M=x*4;let _=u.clippingState||null;l.value=_,_=h(g,p,M,f);for(let T=0;T!==M;++T)_[T]=e[T];u.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const u=f+v*4,x=p.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<u)&&(m=new Float32Array(u));for(let M=0,_=f;M!==v;++M,_+=4)r.copy(d[M]).applyMatrix4(x,a),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Sg(i){let t=new WeakMap;function e(r,a){return a===Tl?r.mapping=uo:a===Al&&(r.mapping=fo),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Tl||a===Al)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Np(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Ad extends Sd{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const no=4,mh=[.125,.215,.35,.446,.526,.582],ps=20,Ba=new Ad,gh=new Vt;let Ha=null,Ga=0,Va=0,Wa=!1;const us=(1+Math.sqrt(5))/2,Vs=1/us,vh=[new N(-us,Vs,0),new N(us,Vs,0),new N(-Vs,0,us),new N(Vs,0,us),new N(0,us,-Vs),new N(0,us,Vs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class nc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ha,Ga,Va),this._renderer.xr.enabled=Wa,t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===uo||t.mapping===fo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:nr,format:jn,colorSpace:Mo,depthBuffer:!1},s=_h(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eg(o)),this._blurMaterial=Tg(o,t,e)}return s}_compileMaterial(t){const e=new $(this._lodPlanes[0],t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,s){const a=new mn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(gh),h.toneMapping=Zi,h.autoClear=!1;const f=new En({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new $(new Rt,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(gh),v=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):x===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const M=this._cubeSize;wr(s,x*M,u>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===uo||t.mapping===fo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new $(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Ba)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=vh[(s-o-1)%vh.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new $(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*ps-1),v=o/g,m=isFinite(o)?1+Math.floor(h*v):ps;m>ps&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ps}`);const u=[];let x=0;for(let S=0;S<ps;++S){const R=S/v,w=Math.exp(-R*R/2);u.push(w),S===0?x+=w:S<m&&(x+=2*w)}for(let S=0;S<u.length;S++)u[S]=u[S]/x;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=r==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:M}=this;p.dTheta.value=g,p.mipInt.value=M-n;const _=this._sizeLods[s],T=3*_*(s>M-no?s-M+no:0),E=4*(this._cubeSize-_);wr(e,T,E,3*_,2*_),l.setRenderTarget(e),l.render(d,Ba)}}function Eg(i){const t=[],e=[],n=[];let s=i;const o=i-no+1+mh.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-no?l=mh[r-i+no-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,u=1,x=new Float32Array(v*g*f),M=new Float32Array(m*g*f),_=new Float32Array(u*g*f);for(let E=0;E<f;E++){const S=E%3*2/3-1,R=E>2?0:-1,w=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];x.set(w,v*g*E),M.set(p,m*g*E);const y=[E,E,E,E,E,E];_.set(y,u*g*E)}const T=new xe;T.setAttribute("position",new We(x,v)),T.setAttribute("uv",new We(M,m)),T.setAttribute("faceIndex",new We(_,u)),t.push(T),s>no&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _h(i,t,e){const n=new Ms(i,t,e);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Tg(i,t,e){const n=new Float32Array(ps),s=new N(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function xh(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Mh(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Sc(){return`

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
	`}function Ag(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Tl||l===Al,h=l===uo||l===fo;if(c||h){let d=t.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new nc(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new nc(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Cg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Go("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rg(i,t,e,n){const s={},o=new WeakMap;function r(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const v=p.morphAttributes[g];for(let m=0,u=v.length;m<u;m++)t.remove(v[m])}p.removeEventListener("dispose",r),delete s[p.id];const f=o.get(p);f&&(t.remove(f),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",r),s[p.id]=!0,e.memory.geometries++),p}function l(d){const p=d.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let m=0,u=v.length;m<u;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(d){const p=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let M=0,_=x.length;M<_;M+=3){const T=x[M+0],E=x[M+1],S=x[M+2];p.push(T,E,E,S,S,T)}}else if(g!==void 0){const x=g.array;v=g.version;for(let M=0,_=x.length/3-1;M<_;M+=3){const T=M+0,E=M+1,S=M+2;p.push(T,E,E,S,S,T)}}else return;const m=new(gd(p)?yd:Md)(p,1);m.version=v;const u=o.get(d);u&&t.remove(u),o.set(d,m)}function h(d){const p=o.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Pg(i,t,e){let n;function s(p){n=p}let o,r;function a(p){o=p.type,r=p.bytesPerElement}function l(p,f){i.drawElements(n,f,o,p*r),e.update(f,n,1)}function c(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,o,p*r,g),e.update(f,n,g))}function h(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,p,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];e.update(m,n,1)}function d(p,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/r,f[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,p,0,v,0,g);let u=0;for(let x=0;x<g;x++)u+=f[x]*v[x];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Lg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Dg(i,t,e){const n=new WeakMap,s=new ze;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==d){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let T=a.attributes.position.count*_,E=1;T>t.maxTextureSize&&(E=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const S=new Float32Array(T*E*4*d),R=new _d(S,T,E,d);R.type=si,R.needsUpdate=!0;const w=_*4;for(let P=0;P<d;P++){const A=u[P],k=x[P],F=M[P],W=T*E*4*P;for(let H=0;H<A.count;H++){const B=H*w;g===!0&&(s.fromBufferAttribute(A,H),S[W+B+0]=s.x,S[W+B+1]=s.y,S[W+B+2]=s.z,S[W+B+3]=0),v===!0&&(s.fromBufferAttribute(k,H),S[W+B+4]=s.x,S[W+B+5]=s.y,S[W+B+6]=s.z,S[W+B+7]=0),m===!0&&(s.fromBufferAttribute(F,H),S[W+B+8]=s.x,S[W+B+9]=s.y,S[W+B+10]=s.z,S[W+B+11]=F.itemSize===4?s.w:1)}}p={count:d,texture:R,size:new it(T,E)},n.set(a,p),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:o}}function Ig(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class Cd extends an{constructor(t,e,n,s,o,r,a,l,c,h=lo){if(h!==lo&&h!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===lo&&(n=xs),n===void 0&&h===go&&(n=mo),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Rd=new an,yh=new Cd(1,1),Pd=new _d,Ld=new Mp,Dd=new Ed,bh=[],wh=[],Sh=new Float32Array(16),Eh=new Float32Array(9),Th=new Float32Array(4);function bo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=bh[s];if(o===void 0&&(o=new Float32Array(s),bh[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ua(i,t){let e=wh[t];e===void 0&&(e=new Int32Array(t),wh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ug(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function Og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function Fg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(je(e,n))return;Th.set(n),i.uniformMatrix2fv(this.addr,!1,Th),Ke(e,n)}}function zg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(je(e,n))return;Eh.set(n),i.uniformMatrix3fv(this.addr,!1,Eh),Ke(e,n)}}function Bg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(je(e,n))return;Sh.set(n),i.uniformMatrix4fv(this.addr,!1,Sh),Ke(e,n)}}function Hg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function Vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function Wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function Xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function jg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(yh.compareFunction=md,o=yh):o=Rd,e.setTexture2D(t||o,s)}function Kg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ld,s)}function Zg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Dd,s)}function Jg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Pd,s)}function Qg(i){switch(i){case 5126:return Ug;case 35664:return Ng;case 35665:return kg;case 35666:return Og;case 35674:return Fg;case 35675:return zg;case 35676:return Bg;case 5124:case 35670:return Hg;case 35667:case 35671:return Gg;case 35668:case 35672:return Vg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return $g;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}function tv(i,t){i.uniform1fv(this.addr,t)}function ev(i,t){const e=bo(t,this.size,2);i.uniform2fv(this.addr,e)}function nv(i,t){const e=bo(t,this.size,3);i.uniform3fv(this.addr,e)}function iv(i,t){const e=bo(t,this.size,4);i.uniform4fv(this.addr,e)}function sv(i,t){const e=bo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ov(i,t){const e=bo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function rv(i,t){const e=bo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function av(i,t){i.uniform1iv(this.addr,t)}function lv(i,t){i.uniform2iv(this.addr,t)}function cv(i,t){i.uniform3iv(this.addr,t)}function hv(i,t){i.uniform4iv(this.addr,t)}function uv(i,t){i.uniform1uiv(this.addr,t)}function dv(i,t){i.uniform2uiv(this.addr,t)}function fv(i,t){i.uniform3uiv(this.addr,t)}function pv(i,t){i.uniform4uiv(this.addr,t)}function mv(i,t,e){const n=this.cache,s=t.length,o=ua(e,s);je(n,o)||(i.uniform1iv(this.addr,o),Ke(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Rd,o[r])}function gv(i,t,e){const n=this.cache,s=t.length,o=ua(e,s);je(n,o)||(i.uniform1iv(this.addr,o),Ke(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Ld,o[r])}function vv(i,t,e){const n=this.cache,s=t.length,o=ua(e,s);je(n,o)||(i.uniform1iv(this.addr,o),Ke(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Dd,o[r])}function _v(i,t,e){const n=this.cache,s=t.length,o=ua(e,s);je(n,o)||(i.uniform1iv(this.addr,o),Ke(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Pd,o[r])}function xv(i){switch(i){case 5126:return tv;case 35664:return ev;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return ov;case 35676:return rv;case 5124:case 35670:return av;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return hv;case 5125:return uv;case 36294:return dv;case 36295:return fv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return _v}}class Mv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qg(e.type)}}class yv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xv(e.type)}}class bv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function Ah(i,t){i.seq.push(t),i.map[t.id]=t}function wv(i,t,e){const n=i.name,s=n.length;for(Xa.lastIndex=0;;){const o=Xa.exec(n),r=Xa.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Ah(e,c===void 0?new Mv(a,i,t):new yv(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new bv(a),Ah(e,d)),e=d}}}class Qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);wv(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Ch(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Sv=37297;let Ev=0;function Tv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Rh=new le;function Av(i){_e._getMatrix(Rh,_e.workingColorSpace,i);const t=`mat3( ${Rh.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(i)){case ca:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ph(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Tv(i.getShaderSource(t),r)}else return s}function Cv(i,t){const e=Av(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rv(i,t){let e;switch(t){case If:e="Linear";break;case Uf:e="Reinhard";break;case Nf:e="Cineon";break;case id:e="ACESFilmic";break;case Of:e="AgX";break;case Ff:e="Neutral";break;case kf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sr=new N;function Pv(){_e.getLuminanceCoefficients(Sr);const i=Sr.x.toFixed(4),t=Sr.y.toFixed(4),e=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function Dv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Iv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Vo(i){return i!==""}function Lh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(i){return i.replace(Uv,kv)}const Nv=new Map;function kv(i,t){let e=he[t];if(e===void 0){const n=Nv.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ic(e)}const Ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(i){return i.replace(Ov,Fv)}function Fv(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Uh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function zv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===td?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ed?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bi&&(t="SHADOWMAP_TYPE_VSM"),t}function Bv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case uo:case fo:t="ENVMAP_TYPE_CUBE";break;case la:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fo:t="ENVMAP_MODE_REFRACTION";break}return t}function Gv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nd:t="ENVMAP_BLENDING_MULTIPLY";break;case Lf:t="ENVMAP_BLENDING_MIX";break;case Df:t="ENVMAP_BLENDING_ADD";break}return t}function Vv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Wv(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=zv(e),c=Bv(e),h=Hv(e),d=Gv(e),p=Vv(e),f=Lv(e),g=Dv(o),v=s.createProgram();let m,u,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vo).join(`
`),u.length>0&&(u+=`
`)):(m=[Uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),u=[Uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?he.tonemapping_pars_fragment:"",e.toneMapping!==Zi?Rv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Cv("linearToOutputTexel",e.outputColorSpace),Pv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vo).join(`
`)),r=ic(r),r=Lh(r,e),r=Dh(r,e),a=ic(a),a=Lh(a,e),a=Dh(a,e),r=Ih(r),a=Ih(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=x+m+r,_=x+u+a,T=Ch(s,s.VERTEX_SHADER,M),E=Ch(s,s.FRAGMENT_SHADER,_);s.attachShader(v,T),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function S(P){if(i.debug.checkShaderErrors){const A=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(E).trim();let W=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,E);else{const B=Ph(s,T,"vertex"),G=Ph(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+A+`
`+B+`
`+G)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(k===""||F==="")&&(H=!1);H&&(P.diagnostics={runnable:W,programLog:A,vertexShader:{log:k,prefix:m},fragmentShader:{log:F,prefix:u}})}s.deleteShader(T),s.deleteShader(E),R=new Qr(s,v),w=Iv(s,v)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Sv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ev++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}let Xv=0;class $v{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qv(t),e.set(t,n)),n}}class qv{constructor(t){this.id=Xv++,this.code=t,this.usedTimes=0}}function Yv(i,t,e,n,s,o,r){const a=new bc,l=new $v,c=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,y,P,A,k){const F=A.fog,W=k.geometry,H=w.isMeshStandardMaterial?A.environment:null,B=(w.isMeshStandardMaterial?e:t).get(w.envMap||H),G=B&&B.mapping===la?B.image.height:null,ut=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const _t=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rt=_t!==void 0?_t.length:0;let Ot=0;W.morphAttributes.position!==void 0&&(Ot=1),W.morphAttributes.normal!==void 0&&(Ot=2),W.morphAttributes.color!==void 0&&(Ot=3);let ee,J,dt,Pt;if(ut){const Me=ni[ut];ee=Me.vertexShader,J=Me.fragmentShader}else ee=w.vertexShader,J=w.fragmentShader,l.update(w),dt=l.getVertexShaderID(w),Pt=l.getFragmentShaderID(w);const ct=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),qt=k.isInstancedMesh===!0,Wt=k.isBatchedMesh===!0,Yt=!!w.map,nt=!!w.matcap,gt=!!B,I=!!w.aoMap,Gt=!!w.lightMap,ft=!!w.bumpMap,Ut=!!w.normalMap,ht=!!w.displacementMap,Lt=!!w.emissiveMap,It=!!w.metalnessMap,L=!!w.roughnessMap,C=w.anisotropy>0,q=w.clearcoat>0,tt=w.dispersion>0,ot=w.iridescence>0,et=w.sheen>0,Ft=w.transmission>0,yt=C&&!!w.anisotropyMap,At=q&&!!w.clearcoatMap,ue=q&&!!w.clearcoatNormalMap,vt=q&&!!w.clearcoatRoughnessMap,kt=ot&&!!w.iridescenceMap,Jt=ot&&!!w.iridescenceThicknessMap,ne=et&&!!w.sheenColorMap,Nt=et&&!!w.sheenRoughnessMap,de=!!w.specularMap,se=!!w.specularColorMap,zt=!!w.specularIntensityMap,z=Ft&&!!w.transmissionMap,lt=Ft&&!!w.thicknessMap,Y=!!w.gradientMap,st=!!w.alphaMap,St=w.alphaTest>0,Ct=!!w.alphaHash,oe=!!w.extensions;let De=Zi;w.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(De=i.toneMapping);const Xe={shaderID:ut,shaderType:w.type,shaderName:w.name,vertexShader:ee,fragmentShader:J,defines:w.defines,customVertexShaderID:dt,customFragmentShaderID:Pt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Wt,batchingColor:Wt&&k._colorsTexture!==null,instancing:qt,instancingColor:qt&&k.instanceColor!==null,instancingMorph:qt&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Mo,alphaToCoverage:!!w.alphaToCoverage,map:Yt,matcap:nt,envMap:gt,envMapMode:gt&&B.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:Gt,bumpMap:ft,normalMap:Ut,displacementMap:p&&ht,emissiveMap:Lt,normalMapObjectSpace:Ut&&w.normalMapType===Gf,normalMapTangentSpace:Ut&&w.normalMapType===pd,metalnessMap:It,roughnessMap:L,anisotropy:C,anisotropyMap:yt,clearcoat:q,clearcoatMap:At,clearcoatNormalMap:ue,clearcoatRoughnessMap:vt,dispersion:tt,iridescence:ot,iridescenceMap:kt,iridescenceThicknessMap:Jt,sheen:et,sheenColorMap:ne,sheenRoughnessMap:Nt,specularMap:de,specularColorMap:se,specularIntensityMap:zt,transmission:Ft,transmissionMap:z,thicknessMap:lt,gradientMap:Y,opaque:w.transparent===!1&&w.blending===ao&&w.alphaToCoverage===!1,alphaMap:st,alphaTest:St,alphaHash:Ct,combine:w.combine,mapUv:Yt&&v(w.map.channel),aoMapUv:I&&v(w.aoMap.channel),lightMapUv:Gt&&v(w.lightMap.channel),bumpMapUv:ft&&v(w.bumpMap.channel),normalMapUv:Ut&&v(w.normalMap.channel),displacementMapUv:ht&&v(w.displacementMap.channel),emissiveMapUv:Lt&&v(w.emissiveMap.channel),metalnessMapUv:It&&v(w.metalnessMap.channel),roughnessMapUv:L&&v(w.roughnessMap.channel),anisotropyMapUv:yt&&v(w.anisotropyMap.channel),clearcoatMapUv:At&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&v(w.sheenRoughnessMap.channel),specularMapUv:de&&v(w.specularMap.channel),specularColorMapUv:se&&v(w.specularColorMap.channel),specularIntensityMapUv:zt&&v(w.specularIntensityMap.channel),transmissionMapUv:z&&v(w.transmissionMap.channel),thicknessMapUv:lt&&v(w.thicknessMap.channel),alphaMapUv:st&&v(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ut||C),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Yt||st),fog:!!F,useFog:w.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Dt,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Ot,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:Yt&&w.map.isVideoTexture===!0&&_e.getTransfer(w.map.colorSpace)===Ce,decodeVideoTextureEmissive:Lt&&w.emissiveMap.isVideoTexture===!0&&_e.getTransfer(w.emissiveMap.colorSpace)===Ce,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ie,flipSided:w.side===un,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:oe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&w.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function u(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)y.push(P),y.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(x(y,w),M(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function x(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function M(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){const y=g[w.type];let P;if(y){const A=ni[y];P=wd.clone(A.uniforms)}else P=w.uniforms;return P}function T(w,y){let P;for(let A=0,k=h.length;A<k;A++){const F=h[A];if(F.cacheKey===y){P=F,++P.usedTimes;break}}return P===void 0&&(P=new Wv(i,y,w,o),h.push(P)),P}function E(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function S(w){l.remove(w)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:T,releaseProgram:E,releaseShaderCache:S,programs:h,dispose:R}}function jv(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Kv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Nh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(d,p,f,g,v,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=m),t++,u}function a(d,p,f,g,v,m){const u=r(d,p,f,g,v,m);f.transmission>0?n.push(u):f.transparent===!0?s.push(u):e.push(u)}function l(d,p,f,g,v,m){const u=r(d,p,f,g,v,m);f.transmission>0?n.unshift(u):f.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,p){e.length>1&&e.sort(d||Kv),n.length>1&&n.sort(p||Nh),s.length>1&&s.sort(p||Nh)}function h(){for(let d=t,p=i.length;d<p;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function Zv(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new kh,i.set(n,[r])):s>=o.length?(r=new kh,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Jv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Vt};break;case"SpotLight":e={position:new N,direction:new N,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Qv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let t_=0;function e_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function n_(i){const t=new Jv,e=Qv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,o=new pe,r=new pe;function a(c){let h=0,d=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,u=0,x=0,M=0,_=0,T=0,E=0,S=0;c.sort(e_);for(let w=0,y=c.length;w<y;w++){const P=c[w],A=P.color,k=P.intensity,F=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=A.r*k,d+=A.g*k,p+=A.b*k;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],k);S++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,G=e.get(P);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=H,f++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(A).multiplyScalar(k),H.distance=F,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[v]=H;const B=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,B.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[v]=B.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=W,_++}v++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(A).multiplyScalar(k),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const B=P.shadow,G=e.get(P);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,G.shadowCameraNear=B.camera.near,G.shadowCameraFar=B.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(k),H.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[u]=H,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==x||R.numPointShadows!==M||R.numSpotShadows!==_||R.numSpotMaps!==T||R.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,R.directionalLength=f,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=x,R.numPointShadows=M,R.numSpotShadows=_,R.numSpotMaps=T,R.numLightProbes=S,n.version=t_++)}function l(c,h){let d=0,p=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){const M=c[u];if(M.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(M.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),r.identity(),o.copy(M.matrixWorld),o.premultiply(m),r.extractRotation(o),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){const _=n.point[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Oh(i){const t=new n_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function i_(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Oh(i),t.set(s,[a])):o>=r.length?(a=new Oh(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class s_ extends Ss{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class o_ extends Ss{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a_=`uniform sampler2D shadow_pass;
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
}`;function l_(i,t,e){let n=new wc;const s=new it,o=new it,r=new ze,a=new s_({depthPacking:Hf}),l=new o_,c={},h=e.maxTextureSize,d={[Ji]:un,[un]:Ji,[Ie]:Ie},p=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:r_,fragmentShader:a_}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=td;let u=this.type;this.render=function(E,S,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),A=i.state;A.setBlending(Ki),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const k=u!==bi&&this.type===bi,F=u===bi&&this.type!==bi;for(let W=0,H=E.length;W<H;W++){const B=E[W],G=B.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ut=G.getFrameExtents();if(s.multiply(ut),o.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/ut.x),s.x=o.x*ut.x,G.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/ut.y),s.y=o.y*ut.y,G.mapSize.y=o.y)),G.map===null||k===!0||F===!0){const rt=this.type!==bi?{minFilter:Sn,magFilter:Sn}:{};G.map!==null&&G.map.dispose(),G.map=new Ms(s.x,s.y,rt),G.map.texture.name=B.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const _t=G.getViewportCount();for(let rt=0;rt<_t;rt++){const Ot=G.getViewport(rt);r.set(o.x*Ot.x,o.y*Ot.y,o.x*Ot.z,o.y*Ot.w),A.viewport(r),G.updateMatrices(B,rt),n=G.getFrustum(),_(S,R,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===bi&&x(G,R),G.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(w,y,P)};function x(E,S){const R=t.update(v);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ms(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(S,null,R,p,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(S,null,R,f,v,null)}function M(E,S,R,w){let y=null;const P=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const A=y.uuid,k=S.uuid;let F=c[A];F===void 0&&(F={},c[A]=F);let W=F[k];W===void 0&&(W=y.clone(),F[k]=W,S.addEventListener("dispose",T)),y=W}if(y.visible=S.visible,y.wireframe=S.wireframe,w===bi?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:d[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const A=i.properties.get(y);A.light=R}return y}function _(E,S,R,w,y){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===bi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const k=t.update(E),F=E.material;if(Array.isArray(F)){const W=k.groups;for(let H=0,B=W.length;H<B;H++){const G=W[H],ut=F[G.materialIndex];if(ut&&ut.visible){const _t=M(E,ut,w,y);E.onBeforeShadow(i,E,S,R,k,_t,G),i.renderBufferDirect(R,null,k,_t,E,G),E.onAfterShadow(i,E,S,R,k,_t,G)}}}else if(F.visible){const W=M(E,F,w,y);E.onBeforeShadow(i,E,S,R,k,W,null),i.renderBufferDirect(R,null,k,W,E,null),E.onAfterShadow(i,E,S,R,k,W,null)}}const A=E.children;for(let k=0,F=A.length;k<F;k++)_(A[k],S,R,w,y)}function T(E){E.target.removeEventListener("dispose",T);for(const R in c){const w=c[R],y=E.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const c_={[xl]:Ml,[yl]:Sl,[bl]:El,[ho]:wl,[Ml]:xl,[Sl]:yl,[El]:bl,[wl]:ho};function h_(i,t){function e(){let z=!1;const lt=new ze;let Y=null;const st=new ze(0,0,0,0);return{setMask:function(St){Y!==St&&!z&&(i.colorMask(St,St,St,St),Y=St)},setLocked:function(St){z=St},setClear:function(St,Ct,oe,De,Xe){Xe===!0&&(St*=De,Ct*=De,oe*=De),lt.set(St,Ct,oe,De),st.equals(lt)===!1&&(i.clearColor(St,Ct,oe,De),st.copy(lt))},reset:function(){z=!1,Y=null,st.set(-1,0,0,0)}}}function n(){let z=!1,lt=!1,Y=null,st=null,St=null;return{setReversed:function(Ct){if(lt!==Ct){const oe=t.get("EXT_clip_control");lt?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT);const De=St;St=null,this.setClear(De)}lt=Ct},getReversed:function(){return lt},setTest:function(Ct){Ct?ct(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(Ct){Y!==Ct&&!z&&(i.depthMask(Ct),Y=Ct)},setFunc:function(Ct){if(lt&&(Ct=c_[Ct]),st!==Ct){switch(Ct){case xl:i.depthFunc(i.NEVER);break;case Ml:i.depthFunc(i.ALWAYS);break;case yl:i.depthFunc(i.LESS);break;case ho:i.depthFunc(i.LEQUAL);break;case bl:i.depthFunc(i.EQUAL);break;case wl:i.depthFunc(i.GEQUAL);break;case Sl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=Ct}},setLocked:function(Ct){z=Ct},setClear:function(Ct){St!==Ct&&(lt&&(Ct=1-Ct),i.clearDepth(Ct),St=Ct)},reset:function(){z=!1,Y=null,st=null,St=null,lt=!1}}}function s(){let z=!1,lt=null,Y=null,st=null,St=null,Ct=null,oe=null,De=null,Xe=null;return{setTest:function(Me){z||(Me?ct(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(Me){lt!==Me&&!z&&(i.stencilMask(Me),lt=Me)},setFunc:function(Me,vn,_n){(Y!==Me||st!==vn||St!==_n)&&(i.stencilFunc(Me,vn,_n),Y=Me,st=vn,St=_n)},setOp:function(Me,vn,_n){(Ct!==Me||oe!==vn||De!==_n)&&(i.stencilOp(Me,vn,_n),Ct=Me,oe=vn,De=_n)},setLocked:function(Me){z=Me},setClear:function(Me){Xe!==Me&&(i.clearStencil(Me),Xe=Me)},reset:function(){z=!1,lt=null,Y=null,st=null,St=null,Ct=null,oe=null,De=null,Xe=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},p=new WeakMap,f=[],g=null,v=!1,m=null,u=null,x=null,M=null,_=null,T=null,E=null,S=new Vt(0,0,0),R=0,w=!1,y=null,P=null,A=null,k=null,F=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,B=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=B>=1):G.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=B>=2);let ut=null,_t={};const rt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),ee=new ze().fromArray(rt),J=new ze().fromArray(Ot);function dt(z,lt,Y,st){const St=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(z,Ct),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<Y;oe++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(lt+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return Ct}const Pt={};Pt[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),Pt[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pt[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),r.setFunc(ho),ft(!1),Ut(Vc),ct(i.CULL_FACE),I(Ki);function ct(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Dt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function qt(z,lt){return d[z]!==lt?(i.bindFramebuffer(z,lt),d[z]=lt,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=lt),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Wt(z,lt){let Y=f,st=!1;if(z){Y=p.get(lt),Y===void 0&&(Y=[],p.set(lt,Y));const St=z.textures;if(Y.length!==St.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,oe=St.length;Ct<oe;Ct++)Y[Ct]=i.COLOR_ATTACHMENT0+Ct;Y.length=St.length,st=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,st=!0);st&&i.drawBuffers(Y)}function Yt(z){return g!==z?(i.useProgram(z),g=z,!0):!1}const nt={[fs]:i.FUNC_ADD,[pf]:i.FUNC_SUBTRACT,[mf]:i.FUNC_REVERSE_SUBTRACT};nt[gf]=i.MIN,nt[vf]=i.MAX;const gt={[_f]:i.ZERO,[xf]:i.ONE,[Mf]:i.SRC_COLOR,[vl]:i.SRC_ALPHA,[Tf]:i.SRC_ALPHA_SATURATE,[Sf]:i.DST_COLOR,[bf]:i.DST_ALPHA,[yf]:i.ONE_MINUS_SRC_COLOR,[_l]:i.ONE_MINUS_SRC_ALPHA,[Ef]:i.ONE_MINUS_DST_COLOR,[wf]:i.ONE_MINUS_DST_ALPHA,[Af]:i.CONSTANT_COLOR,[Cf]:i.ONE_MINUS_CONSTANT_COLOR,[Rf]:i.CONSTANT_ALPHA,[Pf]:i.ONE_MINUS_CONSTANT_ALPHA};function I(z,lt,Y,st,St,Ct,oe,De,Xe,Me){if(z===Ki){v===!0&&(Dt(i.BLEND),v=!1);return}if(v===!1&&(ct(i.BLEND),v=!0),z!==ff){if(z!==m||Me!==w){if((u!==fs||_!==fs)&&(i.blendEquation(i.FUNC_ADD),u=fs,_=fs),Me)switch(z){case ao:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.ONE,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ao:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,M=null,T=null,E=null,S.set(0,0,0),R=0,m=z,w=Me}return}St=St||lt,Ct=Ct||Y,oe=oe||st,(lt!==u||St!==_)&&(i.blendEquationSeparate(nt[lt],nt[St]),u=lt,_=St),(Y!==x||st!==M||Ct!==T||oe!==E)&&(i.blendFuncSeparate(gt[Y],gt[st],gt[Ct],gt[oe]),x=Y,M=st,T=Ct,E=oe),(De.equals(S)===!1||Xe!==R)&&(i.blendColor(De.r,De.g,De.b,Xe),S.copy(De),R=Xe),m=z,w=!1}function Gt(z,lt){z.side===Ie?Dt(i.CULL_FACE):ct(i.CULL_FACE);let Y=z.side===un;lt&&(Y=!Y),ft(Y),z.blending===ao&&z.transparent===!1?I(Ki):I(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),o.setMask(z.colorWrite);const st=z.stencilWrite;a.setTest(st),st&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Lt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(z){y!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),y=z)}function Ut(z){z!==uf?(ct(i.CULL_FACE),z!==P&&(z===Vc?i.cullFace(i.BACK):z===df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),P=z}function ht(z){z!==A&&(H&&i.lineWidth(z),A=z)}function Lt(z,lt,Y){z?(ct(i.POLYGON_OFFSET_FILL),(k!==lt||F!==Y)&&(i.polygonOffset(lt,Y),k=lt,F=Y)):Dt(i.POLYGON_OFFSET_FILL)}function It(z){z?ct(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function L(z){z===void 0&&(z=i.TEXTURE0+W-1),ut!==z&&(i.activeTexture(z),ut=z)}function C(z,lt,Y){Y===void 0&&(ut===null?Y=i.TEXTURE0+W-1:Y=ut);let st=_t[Y];st===void 0&&(st={type:void 0,texture:void 0},_t[Y]=st),(st.type!==z||st.texture!==lt)&&(ut!==Y&&(i.activeTexture(Y),ut=Y),i.bindTexture(z,lt||Pt[z]),st.type=z,st.texture=lt)}function q(){const z=_t[ut];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function kt(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Jt(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(z){ee.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ee.copy(z))}function Nt(z){J.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),J.copy(z))}function de(z,lt){let Y=c.get(lt);Y===void 0&&(Y=new WeakMap,c.set(lt,Y));let st=Y.get(z);st===void 0&&(st=i.getUniformBlockIndex(lt,z.name),Y.set(z,st))}function se(z,lt){const st=c.get(lt).get(z);l.get(lt)!==st&&(i.uniformBlockBinding(lt,st,z.__bindingPointIndex),l.set(lt,st))}function zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ut=null,_t={},d={},p=new WeakMap,f=[],g=null,v=!1,m=null,u=null,x=null,M=null,_=null,T=null,E=null,S=new Vt(0,0,0),R=0,w=!1,y=null,P=null,A=null,k=null,F=null,ee.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ct,disable:Dt,bindFramebuffer:qt,drawBuffers:Wt,useProgram:Yt,setBlending:I,setMaterial:Gt,setFlipSided:ft,setCullFace:Ut,setLineWidth:ht,setPolygonOffset:Lt,setScissorTest:It,activeTexture:L,bindTexture:C,unbindTexture:q,compressedTexImage2D:tt,compressedTexImage3D:ot,texImage2D:kt,texImage3D:Jt,updateUBOMapping:de,uniformBlockBinding:se,texStorage2D:ue,texStorage3D:vt,texSubImage2D:et,texSubImage3D:Ft,compressedTexSubImage2D:yt,compressedTexSubImage3D:At,scissor:ne,viewport:Nt,reset:zt}}function Fh(i,t,e,n){const s=u_(n);switch(e){case ld:return i*t;case hd:return i*t;case ud:return i*t*2;case vc:return i*t/s.components*s.byteLength;case _c:return i*t/s.components*s.byteLength;case dd:return i*t*2/s.components*s.byteLength;case xc:return i*t*2/s.components*s.byteLength;case cd:return i*t*3/s.components*s.byteLength;case jn:return i*t*4/s.components*s.byteLength;case Mc:return i*t*4/s.components*s.byteLength;case Yr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kr:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pl:case Dl:return Math.max(i,16)*Math.max(t,8)/4;case Rl:case Ll:return Math.max(i,8)*Math.max(t,8)/2;case Il:case Ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case jl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jr:case Kl:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fd:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ql:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function u_(i){switch(i){case Pi:case od:return{byteLength:1,components:1};case jo:case rd:case nr:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case xs:case pc:case si:return{byteLength:4,components:1};case ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function d_(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,C){return f?new OffscreenCanvas(L,C):ia("canvas")}function v(L,C,q){let tt=1;const ot=It(L);if((ot.width>q||ot.height>q)&&(tt=q/Math.max(ot.width,ot.height)),tt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const et=Math.floor(tt*ot.width),Ft=Math.floor(tt*ot.height);d===void 0&&(d=g(et,Ft));const yt=C?g(et,Ft):d;return yt.width=et,yt.height=Ft,yt.getContext("2d").drawImage(L,0,0,et,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+et+"x"+Ft+")."),yt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),L;return L}function m(L){return L.generateMipmaps}function u(L){i.generateMipmap(L)}function x(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(L,C,q,tt,ot=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let et=C;if(C===i.RED&&(q===i.FLOAT&&(et=i.R32F),q===i.HALF_FLOAT&&(et=i.R16F),q===i.UNSIGNED_BYTE&&(et=i.R8)),C===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.R8UI),q===i.UNSIGNED_SHORT&&(et=i.R16UI),q===i.UNSIGNED_INT&&(et=i.R32UI),q===i.BYTE&&(et=i.R8I),q===i.SHORT&&(et=i.R16I),q===i.INT&&(et=i.R32I)),C===i.RG&&(q===i.FLOAT&&(et=i.RG32F),q===i.HALF_FLOAT&&(et=i.RG16F),q===i.UNSIGNED_BYTE&&(et=i.RG8)),C===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RG8UI),q===i.UNSIGNED_SHORT&&(et=i.RG16UI),q===i.UNSIGNED_INT&&(et=i.RG32UI),q===i.BYTE&&(et=i.RG8I),q===i.SHORT&&(et=i.RG16I),q===i.INT&&(et=i.RG32I)),C===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RGB8UI),q===i.UNSIGNED_SHORT&&(et=i.RGB16UI),q===i.UNSIGNED_INT&&(et=i.RGB32UI),q===i.BYTE&&(et=i.RGB8I),q===i.SHORT&&(et=i.RGB16I),q===i.INT&&(et=i.RGB32I)),C===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),q===i.UNSIGNED_INT&&(et=i.RGBA32UI),q===i.BYTE&&(et=i.RGBA8I),q===i.SHORT&&(et=i.RGBA16I),q===i.INT&&(et=i.RGBA32I)),C===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),C===i.RGBA){const Ft=ot?ca:_e.getTransfer(tt);q===i.FLOAT&&(et=i.RGBA32F),q===i.HALF_FLOAT&&(et=i.RGBA16F),q===i.UNSIGNED_BYTE&&(et=Ft===Ce?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(L,C){let q;return L?C===null||C===xs||C===mo?q=i.DEPTH24_STENCIL8:C===si?q=i.DEPTH32F_STENCIL8:C===jo&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===xs||C===mo?q=i.DEPTH_COMPONENT24:C===si?q=i.DEPTH_COMPONENT32F:C===jo&&(q=i.DEPTH_COMPONENT16),q}function T(L,C){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Sn&&L.minFilter!==ii?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function E(L){const C=L.target;C.removeEventListener("dispose",E),R(C),C.isVideoTexture&&h.delete(C)}function S(L){const C=L.target;C.removeEventListener("dispose",S),y(C)}function R(L){const C=n.get(L);if(C.__webglInit===void 0)return;const q=L.source,tt=p.get(q);if(tt){const ot=tt[C.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&w(L),Object.keys(tt).length===0&&p.delete(q)}n.remove(L)}function w(L){const C=n.get(L);i.deleteTexture(C.__webglTexture);const q=L.source,tt=p.get(q);delete tt[C.__cacheKey],r.memory.textures--}function y(L){const C=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(C.__webglFramebuffer[tt]))for(let ot=0;ot<C.__webglFramebuffer[tt].length;ot++)i.deleteFramebuffer(C.__webglFramebuffer[tt][ot]);else i.deleteFramebuffer(C.__webglFramebuffer[tt]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[tt])}else{if(Array.isArray(C.__webglFramebuffer))for(let tt=0;tt<C.__webglFramebuffer.length;tt++)i.deleteFramebuffer(C.__webglFramebuffer[tt]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let tt=0;tt<C.__webglColorRenderbuffer.length;tt++)C.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[tt]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const q=L.textures;for(let tt=0,ot=q.length;tt<ot;tt++){const et=n.get(q[tt]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),r.memory.textures--),n.remove(q[tt])}n.remove(L)}let P=0;function A(){P=0}function k(){const L=P;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),P+=1,L}function F(L){const C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function W(L,C){const q=n.get(L);if(L.isVideoTexture&&ht(L),L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){const tt=L.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(q,L,C);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+C)}function H(L,C){const q=n.get(L);if(L.version>0&&q.__version!==L.version){J(q,L,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+C)}function B(L,C){const q=n.get(L);if(L.version>0&&q.__version!==L.version){J(q,L,C);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+C)}function G(L,C){const q=n.get(L);if(L.version>0&&q.__version!==L.version){dt(q,L,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+C)}const ut={[po]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Cl]:i.MIRRORED_REPEAT},_t={[Sn]:i.NEAREST,[zf]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[ii]:i.LINEAR,[xa]:i.LINEAR_MIPMAP_NEAREST,[gs]:i.LINEAR_MIPMAP_LINEAR},rt={[Vf]:i.NEVER,[jf]:i.ALWAYS,[Wf]:i.LESS,[md]:i.LEQUAL,[Xf]:i.EQUAL,[Yf]:i.GEQUAL,[$f]:i.GREATER,[qf]:i.NOTEQUAL};function Ot(L,C){if(C.type===si&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===ii||C.magFilter===xa||C.magFilter===sr||C.magFilter===gs||C.minFilter===ii||C.minFilter===xa||C.minFilter===sr||C.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ut[C.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ut[C.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ut[C.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,_t[C.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,_t[C.minFilter]),C.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,rt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Sn||C.minFilter!==sr&&C.minFilter!==gs||C.type===si&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function ee(L,C){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",E));const tt=C.source;let ot=p.get(tt);ot===void 0&&(ot={},p.set(tt,ot));const et=F(C);if(et!==L.__cacheKey){ot[et]===void 0&&(ot[et]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,q=!0),ot[et].usedTimes++;const Ft=ot[L.__cacheKey];Ft!==void 0&&(ot[L.__cacheKey].usedTimes--,Ft.usedTimes===0&&w(C)),L.__cacheKey=et,L.__webglTexture=ot[et].texture}return q}function J(L,C,q){let tt=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(tt=i.TEXTURE_3D);const ot=ee(L,C),et=C.source;e.bindTexture(tt,L.__webglTexture,i.TEXTURE0+q);const Ft=n.get(et);if(et.version!==Ft.__version||ot===!0){e.activeTexture(i.TEXTURE0+q);const yt=_e.getPrimaries(_e.workingColorSpace),At=C.colorSpace===Xi?null:_e.getPrimaries(C.colorSpace),ue=C.colorSpace===Xi||yt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let vt=v(C.image,!1,s.maxTextureSize);vt=Lt(C,vt);const kt=o.convert(C.format,C.colorSpace),Jt=o.convert(C.type);let ne=M(C.internalFormat,kt,Jt,C.colorSpace,C.isVideoTexture);Ot(tt,C);let Nt;const de=C.mipmaps,se=C.isVideoTexture!==!0,zt=Ft.__version===void 0||ot===!0,z=et.dataReady,lt=T(C,vt);if(C.isDepthTexture)ne=_(C.format===go,C.type),zt&&(se?e.texStorage2D(i.TEXTURE_2D,1,ne,vt.width,vt.height):e.texImage2D(i.TEXTURE_2D,0,ne,vt.width,vt.height,0,kt,Jt,null));else if(C.isDataTexture)if(de.length>0){se&&zt&&e.texStorage2D(i.TEXTURE_2D,lt,ne,de[0].width,de[0].height);for(let Y=0,st=de.length;Y<st;Y++)Nt=de[Y],se?z&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Nt.width,Nt.height,kt,Jt,Nt.data):e.texImage2D(i.TEXTURE_2D,Y,ne,Nt.width,Nt.height,0,kt,Jt,Nt.data);C.generateMipmaps=!1}else se?(zt&&e.texStorage2D(i.TEXTURE_2D,lt,ne,vt.width,vt.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt.width,vt.height,kt,Jt,vt.data)):e.texImage2D(i.TEXTURE_2D,0,ne,vt.width,vt.height,0,kt,Jt,vt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){se&&zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,ne,de[0].width,de[0].height,vt.depth);for(let Y=0,st=de.length;Y<st;Y++)if(Nt=de[Y],C.format!==jn)if(kt!==null)if(se){if(z)if(C.layerUpdates.size>0){const St=Fh(Nt.width,Nt.height,C.format,C.type);for(const Ct of C.layerUpdates){const oe=Nt.data.subarray(Ct*St/Nt.data.BYTES_PER_ELEMENT,(Ct+1)*St/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,Ct,Nt.width,Nt.height,1,kt,oe)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Nt.width,Nt.height,vt.depth,kt,Nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ne,Nt.width,Nt.height,vt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Nt.width,Nt.height,vt.depth,kt,Jt,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,ne,Nt.width,Nt.height,vt.depth,0,kt,Jt,Nt.data)}else{se&&zt&&e.texStorage2D(i.TEXTURE_2D,lt,ne,de[0].width,de[0].height);for(let Y=0,st=de.length;Y<st;Y++)Nt=de[Y],C.format!==jn?kt!==null?se?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Nt.width,Nt.height,kt,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,ne,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?z&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Nt.width,Nt.height,kt,Jt,Nt.data):e.texImage2D(i.TEXTURE_2D,Y,ne,Nt.width,Nt.height,0,kt,Jt,Nt.data)}else if(C.isDataArrayTexture)if(se){if(zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,ne,vt.width,vt.height,vt.depth),z)if(C.layerUpdates.size>0){const Y=Fh(vt.width,vt.height,C.format,C.type);for(const st of C.layerUpdates){const St=vt.data.subarray(st*Y/vt.data.BYTES_PER_ELEMENT,(st+1)*Y/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,vt.width,vt.height,1,kt,Jt,St)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,kt,Jt,vt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,vt.width,vt.height,vt.depth,0,kt,Jt,vt.data);else if(C.isData3DTexture)se?(zt&&e.texStorage3D(i.TEXTURE_3D,lt,ne,vt.width,vt.height,vt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,kt,Jt,vt.data)):e.texImage3D(i.TEXTURE_3D,0,ne,vt.width,vt.height,vt.depth,0,kt,Jt,vt.data);else if(C.isFramebufferTexture){if(zt)if(se)e.texStorage2D(i.TEXTURE_2D,lt,ne,vt.width,vt.height);else{let Y=vt.width,st=vt.height;for(let St=0;St<lt;St++)e.texImage2D(i.TEXTURE_2D,St,ne,Y,st,0,kt,Jt,null),Y>>=1,st>>=1}}else if(de.length>0){if(se&&zt){const Y=It(de[0]);e.texStorage2D(i.TEXTURE_2D,lt,ne,Y.width,Y.height)}for(let Y=0,st=de.length;Y<st;Y++)Nt=de[Y],se?z&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,kt,Jt,Nt):e.texImage2D(i.TEXTURE_2D,Y,ne,kt,Jt,Nt);C.generateMipmaps=!1}else if(se){if(zt){const Y=It(vt);e.texStorage2D(i.TEXTURE_2D,lt,ne,Y.width,Y.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,Jt,vt)}else e.texImage2D(i.TEXTURE_2D,0,ne,kt,Jt,vt);m(C)&&u(tt),Ft.__version=et.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function dt(L,C,q){if(C.image.length!==6)return;const tt=ee(L,C),ot=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+q);const et=n.get(ot);if(ot.version!==et.__version||tt===!0){e.activeTexture(i.TEXTURE0+q);const Ft=_e.getPrimaries(_e.workingColorSpace),yt=C.colorSpace===Xi?null:_e.getPrimaries(C.colorSpace),At=C.colorSpace===Xi||Ft===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const ue=C.isCompressedTexture||C.image[0].isCompressedTexture,vt=C.image[0]&&C.image[0].isDataTexture,kt=[];for(let st=0;st<6;st++)!ue&&!vt?kt[st]=v(C.image[st],!0,s.maxCubemapSize):kt[st]=vt?C.image[st].image:C.image[st],kt[st]=Lt(C,kt[st]);const Jt=kt[0],ne=o.convert(C.format,C.colorSpace),Nt=o.convert(C.type),de=M(C.internalFormat,ne,Nt,C.colorSpace),se=C.isVideoTexture!==!0,zt=et.__version===void 0||tt===!0,z=ot.dataReady;let lt=T(C,Jt);Ot(i.TEXTURE_CUBE_MAP,C);let Y;if(ue){se&&zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,de,Jt.width,Jt.height);for(let st=0;st<6;st++){Y=kt[st].mipmaps;for(let St=0;St<Y.length;St++){const Ct=Y[St];C.format!==jn?ne!==null?se?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,0,0,Ct.width,Ct.height,ne,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,de,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,0,0,Ct.width,Ct.height,ne,Nt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,de,Ct.width,Ct.height,0,ne,Nt,Ct.data)}}}else{if(Y=C.mipmaps,se&&zt){Y.length>0&&lt++;const st=It(kt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,de,st.width,st.height)}for(let st=0;st<6;st++)if(vt){se?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,kt[st].width,kt[st].height,ne,Nt,kt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,de,kt[st].width,kt[st].height,0,ne,Nt,kt[st].data);for(let St=0;St<Y.length;St++){const oe=Y[St].image[st].image;se?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,0,0,oe.width,oe.height,ne,Nt,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,de,oe.width,oe.height,0,ne,Nt,oe.data)}}else{se?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ne,Nt,kt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,de,ne,Nt,kt[st]);for(let St=0;St<Y.length;St++){const Ct=Y[St];se?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,0,0,ne,Nt,Ct.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,de,ne,Nt,Ct.image[st])}}}m(C)&&u(i.TEXTURE_CUBE_MAP),et.__version=ot.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function Pt(L,C,q,tt,ot,et){const Ft=o.convert(q.format,q.colorSpace),yt=o.convert(q.type),At=M(q.internalFormat,Ft,yt,q.colorSpace),ue=n.get(C),vt=n.get(q);if(vt.__renderTarget=C,!ue.__hasExternalTextures){const kt=Math.max(1,C.width>>et),Jt=Math.max(1,C.height>>et);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,et,At,kt,Jt,C.depth,0,Ft,yt,null):e.texImage2D(ot,et,At,kt,Jt,0,Ft,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Ut(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,ot,vt.__webglTexture,0,ft(C)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,ot,vt.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(L,C,q){if(i.bindRenderbuffer(i.RENDERBUFFER,L),C.depthBuffer){const tt=C.depthTexture,ot=tt&&tt.isDepthTexture?tt.type:null,et=_(C.stencilBuffer,ot),Ft=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=ft(C);Ut(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,et,C.width,C.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,et,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,et,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,L)}else{const tt=C.textures;for(let ot=0;ot<tt.length;ot++){const et=tt[ot],Ft=o.convert(et.format,et.colorSpace),yt=o.convert(et.type),At=M(et.internalFormat,Ft,yt,et.colorSpace),ue=ft(C);q&&Ut(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,At,C.width,C.height):Ut(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,At,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,At,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(C.depthTexture);tt.__renderTarget=C,(!tt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),W(C.depthTexture,0);const ot=tt.__webglTexture,et=ft(C);if(C.depthTexture.format===lo)Ut(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(C.depthTexture.format===go)Ut(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function qt(L){const C=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==L.depthTexture){const tt=L.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),tt){const ot=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,tt.removeEventListener("dispose",ot)};tt.addEventListener("dispose",ot),C.__depthDisposeCallback=ot}C.__boundDepthTexture=tt}if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Dt(C.__webglFramebuffer,L)}else if(q){C.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[tt]),C.__webglDepthbuffer[tt]===void 0)C.__webglDepthbuffer[tt]=i.createRenderbuffer(),ct(C.__webglDepthbuffer[tt],L,!1);else{const ot=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=C.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),ct(C.__webglDepthbuffer,L,!1);else{const tt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(L,C,q){const tt=n.get(L);C!==void 0&&Pt(tt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&qt(L)}function Yt(L){const C=L.texture,q=n.get(L),tt=n.get(C);L.addEventListener("dispose",S);const ot=L.textures,et=L.isWebGLCubeRenderTarget===!0,Ft=ot.length>1;if(Ft||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=C.version,r.memory.textures++),et){q.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer[yt]=[];for(let At=0;At<C.mipmaps.length;At++)q.__webglFramebuffer[yt][At]=i.createFramebuffer()}else q.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer=[];for(let yt=0;yt<C.mipmaps.length;yt++)q.__webglFramebuffer[yt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let yt=0,At=ot.length;yt<At;yt++){const ue=n.get(ot[yt]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),r.memory.textures++)}if(L.samples>0&&Ut(L)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let yt=0;yt<ot.length;yt++){const At=ot[yt];q.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[yt]);const ue=o.convert(At.format,At.colorSpace),vt=o.convert(At.type),kt=M(At.internalFormat,ue,vt,At.colorSpace,L.isXRRenderTarget===!0),Jt=ft(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,kt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,q.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(q.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,C);for(let yt=0;yt<6;yt++)if(C.mipmaps&&C.mipmaps.length>0)for(let At=0;At<C.mipmaps.length;At++)Pt(q.__webglFramebuffer[yt][At],L,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,At);else Pt(q.__webglFramebuffer[yt],L,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(C)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let yt=0,At=ot.length;yt<At;yt++){const ue=ot[yt],vt=n.get(ue);e.bindTexture(i.TEXTURE_2D,vt.__webglTexture),Ot(i.TEXTURE_2D,ue),Pt(q.__webglFramebuffer,L,ue,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),m(ue)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(yt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,tt.__webglTexture),Ot(yt,C),C.mipmaps&&C.mipmaps.length>0)for(let At=0;At<C.mipmaps.length;At++)Pt(q.__webglFramebuffer[At],L,C,i.COLOR_ATTACHMENT0,yt,At);else Pt(q.__webglFramebuffer,L,C,i.COLOR_ATTACHMENT0,yt,0);m(C)&&u(yt),e.unbindTexture()}L.depthBuffer&&qt(L)}function nt(L){const C=L.textures;for(let q=0,tt=C.length;q<tt;q++){const ot=C[q];if(m(ot)){const et=x(L),Ft=n.get(ot).__webglTexture;e.bindTexture(et,Ft),u(et),e.unbindTexture()}}}const gt=[],I=[];function Gt(L){if(L.samples>0){if(Ut(L)===!1){const C=L.textures,q=L.width,tt=L.height;let ot=i.COLOR_BUFFER_BIT;const et=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(L),yt=C.length>1;if(yt)for(let At=0;At<C.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let At=0;At<C.length;At++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[At]);const ue=n.get(C[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,q,tt,0,0,q,tt,ot,i.NEAREST),l===!0&&(gt.length=0,I.length=0,gt.push(i.COLOR_ATTACHMENT0+At),L.depthBuffer&&L.resolveDepthBuffer===!1&&(gt.push(et),I.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let At=0;At<C.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[At]);const ue=n.get(C[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,ue,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const C=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function ft(L){return Math.min(s.maxSamples,L.samples)}function Ut(L){const C=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ht(L){const C=r.render.frame;h.get(L)!==C&&(h.set(L,C),L.update())}function Lt(L,C){const q=L.colorSpace,tt=L.format,ot=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Mo&&q!==Xi&&(_e.getTransfer(q)===Ce?(tt!==jn||ot!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),C}function It(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=A,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=B,this.setTextureCube=G,this.rebindTextures=Wt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Ut}function f_(i,t){function e(n,s=Xi){let o;const r=_e.getTransfer(s);if(n===Pi)return i.UNSIGNED_BYTE;if(n===mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ad)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===od)return i.BYTE;if(n===rd)return i.SHORT;if(n===jo)return i.UNSIGNED_SHORT;if(n===pc)return i.INT;if(n===xs)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===nr)return i.HALF_FLOAT;if(n===ld)return i.ALPHA;if(n===cd)return i.RGB;if(n===jn)return i.RGBA;if(n===hd)return i.LUMINANCE;if(n===ud)return i.LUMINANCE_ALPHA;if(n===lo)return i.DEPTH_COMPONENT;if(n===go)return i.DEPTH_STENCIL;if(n===vc)return i.RED;if(n===_c)return i.RED_INTEGER;if(n===dd)return i.RG;if(n===xc)return i.RG_INTEGER;if(n===Mc)return i.RGBA_INTEGER;if(n===Yr||n===jr||n===Kr||n===Zr)if(r===Ce)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Yr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Yr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rl||n===Pl||n===Ll||n===Dl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Rl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ll)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il||n===Ul||n===Nl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Il||n===Ul)return r===Ce?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Nl)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kl||n===Ol||n===Fl||n===zl||n===Bl||n===Hl||n===Gl||n===Vl||n===Wl||n===Xl||n===$l||n===ql||n===Yl||n===jl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===kl)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ol)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zl)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hl)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gl)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wl)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xl)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$l)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ql)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yl)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jl)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jr||n===Kl||n===Zl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Jr)return r===Ce?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fd||n===Jl||n===Ql||n===tc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Jr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Jl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ql)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class p_ extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class bt extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m_={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(m_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const g_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v_=`
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

}`;class __{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new an,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Li({vertexShader:g_,fragmentShader:v_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x_ extends bs{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,p=null,f=null,g=null;const v=new __,m=e.getContextAttributes();let u=null,x=null;const M=[],_=[],T=new it;let E=null;const S=new mn;S.viewport=new ze;const R=new mn;R.viewport=new ze;const w=[S,R],y=new p_;let P=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let dt=M[J];return dt===void 0&&(dt=new $a,M[J]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(J){let dt=M[J];return dt===void 0&&(dt=new $a,M[J]=dt),dt.getGripSpace()},this.getHand=function(J){let dt=M[J];return dt===void 0&&(dt=new $a,M[J]=dt),dt.getHandSpace()};function k(J){const dt=_.indexOf(J.inputSource);if(dt===-1)return;const Pt=M[dt];Pt!==void 0&&(Pt.update(J.inputSource,J.frame,c||r),Pt.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",W);for(let J=0;J<M.length;J++){const dt=_[J];dt!==null&&(_[J]=null,M[J].disconnect(dt))}P=null,A=null,v.reset(),t.setRenderTarget(u),f=null,p=null,d=null,s=null,x=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",F),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const dt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ms(f.framebufferWidth,f.framebufferHeight,{format:jn,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let dt=null,Pt=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=m.stencil?go:lo,Pt=m.stencil?mo:xs);const Dt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:o};d=new XRWebGLBinding(s,e),p=d.createProjectionLayer(Dt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),x=new Ms(p.textureWidth,p.textureHeight,{format:jn,type:Pi,depthTexture:new Cd(p.textureWidth,p.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(J){for(let dt=0;dt<J.removed.length;dt++){const Pt=J.removed[dt],ct=_.indexOf(Pt);ct>=0&&(_[ct]=null,M[ct].disconnect(Pt))}for(let dt=0;dt<J.added.length;dt++){const Pt=J.added[dt];let ct=_.indexOf(Pt);if(ct===-1){for(let qt=0;qt<M.length;qt++)if(qt>=_.length){_.push(Pt),ct=qt;break}else if(_[qt]===null){_[qt]=Pt,ct=qt;break}if(ct===-1)break}const Dt=M[ct];Dt&&Dt.connect(Pt)}}const H=new N,B=new N;function G(J,dt,Pt){H.setFromMatrixPosition(dt.matrixWorld),B.setFromMatrixPosition(Pt.matrixWorld);const ct=H.distanceTo(B),Dt=dt.projectionMatrix.elements,qt=Pt.projectionMatrix.elements,Wt=Dt[14]/(Dt[10]-1),Yt=Dt[14]/(Dt[10]+1),nt=(Dt[9]+1)/Dt[5],gt=(Dt[9]-1)/Dt[5],I=(Dt[8]-1)/Dt[0],Gt=(qt[8]+1)/qt[0],ft=Wt*I,Ut=Wt*Gt,ht=ct/(-I+Gt),Lt=ht*-I;if(dt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Lt),J.translateZ(ht),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Dt[10]===-1)J.projectionMatrix.copy(dt.projectionMatrix),J.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const It=Wt+ht,L=Yt+ht,C=ft-Lt,q=Ut+(ct-Lt),tt=nt*Yt/L*It,ot=gt*Yt/L*It;J.projectionMatrix.makePerspective(C,q,tt,ot,It,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ut(J,dt){dt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(dt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let dt=J.near,Pt=J.far;v.texture!==null&&(v.depthNear>0&&(dt=v.depthNear),v.depthFar>0&&(Pt=v.depthFar)),y.near=R.near=S.near=dt,y.far=R.far=S.far=Pt,(P!==y.near||A!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,A=y.far),S.layers.mask=J.layers.mask|2,R.layers.mask=J.layers.mask|4,y.layers.mask=S.layers.mask|R.layers.mask;const ct=J.parent,Dt=y.cameras;ut(y,ct);for(let qt=0;qt<Dt.length;qt++)ut(Dt[qt],ct);Dt.length===2?G(y,S,R):y.projectionMatrix.copy(S.projectionMatrix),_t(J,y,ct)};function _t(J,dt,Pt){Pt===null?J.matrix.copy(dt.matrixWorld):(J.matrix.copy(Pt.matrixWorld),J.matrix.invert(),J.matrix.multiply(dt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(dt.projectionMatrix),J.projectionMatrixInverse.copy(dt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=vo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(J){l=J,p!==null&&(p.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let rt=null;function Ot(J,dt){if(h=dt.getViewerPose(c||r),g=dt,h!==null){const Pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ct=!1;Pt.length!==y.cameras.length&&(y.cameras.length=0,ct=!0);for(let qt=0;qt<Pt.length;qt++){const Wt=Pt[qt];let Yt=null;if(f!==null)Yt=f.getViewport(Wt);else{const gt=d.getViewSubImage(p,Wt);Yt=gt.viewport,qt===0&&(t.setRenderTargetTextures(x,gt.colorTexture,p.ignoreDepthValues?void 0:gt.depthStencilTexture),t.setRenderTarget(x))}let nt=w[qt];nt===void 0&&(nt=new mn,nt.layers.enable(qt),nt.viewport=new ze,w[qt]=nt),nt.matrix.fromArray(Wt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Wt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),qt===0&&(y.matrix.copy(nt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ct===!0&&y.cameras.push(nt)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const qt=d.getDepthInformation(Pt[0]);qt&&qt.isValid&&qt.texture&&v.init(t,qt,s.renderState)}}for(let Pt=0;Pt<M.length;Pt++){const ct=_[Pt],Dt=M[Pt];ct!==null&&Dt!==void 0&&Dt.update(ct,dt,c||r)}rt&&rt(J,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),g=null}const ee=new Td;ee.setAnimationLoop(Ot),this.setAnimationLoop=function(J){rt=J},this.dispose=function(){}}}const ls=new Zn,M_=new pe;function y_(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,bd(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,x,M,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(m,u):u.isMeshToonMaterial?(o(m,u),d(m,u)):u.isMeshPhongMaterial?(o(m,u),h(m,u)):u.isMeshStandardMaterial?(o(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,_)):u.isMeshMatcapMaterial?(o(m,u),g(m,u)):u.isMeshDepthMaterial?o(m,u):u.isMeshDistanceMaterial?(o(m,u),v(m,u)):u.isMeshNormalMaterial?o(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,x,M):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===un&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===un&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const x=t.get(u),M=x.envMap,_=x.envMapRotation;M&&(m.envMap.value=M,ls.copy(_),ls.x*=-1,ls.y*=-1,ls.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.envMapRotation.value.setFromMatrix4(M_.makeRotationFromEuler(ls)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,x,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*x,m.scale.value=M*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,x){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===un&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const x=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function b_(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const _=M.program;n.uniformBlockBinding(x,_)}function c(x,M){let _=s[x.id];_===void 0&&(g(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(x,T);const E=t.render.frame;o[x.id]!==E&&(p(x),o[x.id]=E)}function h(x){const M=d();x.__bindingPointIndex=M;const _=i.createBuffer(),T=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function d(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const M=s[x.id],_=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,S=_.length;E<S;E++){const R=Array.isArray(_[E])?_[E]:[_[E]];for(let w=0,y=R.length;w<y;w++){const P=R[w];if(f(P,E,w,T)===!0){const A=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let W=0;W<k.length;W++){const H=k[W],B=v(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,A+F,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,F),F+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,A,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,_,T){const E=x.value,S=M+"_"+_;if(T[S]===void 0)return typeof E=="number"||typeof E=="boolean"?T[S]=E:T[S]=E.clone(),!0;{const R=T[S];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return T[S]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(x){const M=x.uniforms;let _=0;const T=16;for(let S=0,R=M.length;S<R;S++){const w=Array.isArray(M[S])?M[S]:[M[S]];for(let y=0,P=w.length;y<P;y++){const A=w[y],k=Array.isArray(A.value)?A.value:[A.value];for(let F=0,W=k.length;F<W;F++){const H=k[F],B=v(H),G=_%T,ut=G%B.boundary,_t=G+ut;_+=ut,_t!==0&&T-_t<B.storage&&(_+=T-_t),A.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=_,_+=B.storage}}}const E=_%T;return E>0&&(_+=T-E),x.__size=_,x.__cache={},this}function v(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const _=r.indexOf(M.__bindingPointIndex);r.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function u(){for(const x in s)i.deleteBuffer(s[x]);r=[],s={},o={}}return{bind:l,update:c,dispose:u}}class Id{constructor(t={}){const{canvas:e=dp(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Zi,this.toneMappingExposure=1;const _=this;let T=!1,E=0,S=0,R=null,w=-1,y=null;const P=new ze,A=new ze;let k=null;const F=new Vt(0);let W=0,H=e.width,B=e.height,G=1,ut=null,_t=null;const rt=new ze(0,0,H,B),Ot=new ze(0,0,H,B);let ee=!1;const J=new wc;let dt=!1,Pt=!1;const ct=new pe,Dt=new pe,qt=new N,Wt=new ze,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function gt(){return R===null?G:1}let I=n;function Gt(b,O){return e.getContext(b,O)}try{const b={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fc}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),I===null){const O="webgl2";if(I=Gt(O,b),I===null)throw Gt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ft,Ut,ht,Lt,It,L,C,q,tt,ot,et,Ft,yt,At,ue,vt,kt,Jt,ne,Nt,de,se,zt,z;function lt(){ft=new Cg(I),ft.init(),se=new f_(I,ft),Ut=new bg(I,ft,t,se),ht=new h_(I,ft),Ut.reverseDepthBuffer&&p&&ht.buffers.depth.setReversed(!0),Lt=new Lg(I),It=new jv,L=new d_(I,ft,ht,It,Ut,se,Lt),C=new Sg(_),q=new Ag(_),tt=new Fp(I),zt=new Mg(I,tt),ot=new Rg(I,tt,Lt,zt),et=new Ig(I,ot,tt,Lt),ne=new Dg(I,Ut,L),vt=new wg(It),Ft=new Yv(_,C,q,ft,Ut,zt,vt),yt=new y_(_,It),At=new Zv,ue=new i_(ft),Jt=new xg(_,C,q,ht,et,f,l),kt=new l_(_,et,Ut),z=new b_(I,Lt,Ut,ht),Nt=new yg(I,ft,Lt),de=new Pg(I,ft,Lt),Lt.programs=Ft.programs,_.capabilities=Ut,_.extensions=ft,_.properties=It,_.renderLists=At,_.shadowMap=kt,_.state=ht,_.info=Lt}lt();const Y=new x_(_,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(H,B,!1))},this.getSize=function(b){return b.set(H,B)},this.setSize=function(b,O,K=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,B=O,e.width=Math.floor(b*G),e.height=Math.floor(O*G),K===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(H*G,B*G).floor()},this.setDrawingBufferSize=function(b,O,K){H=b,B=O,G=K,e.width=Math.floor(b*K),e.height=Math.floor(O*K),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(rt)},this.setViewport=function(b,O,K,j){b.isVector4?rt.set(b.x,b.y,b.z,b.w):rt.set(b,O,K,j),ht.viewport(P.copy(rt).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Ot)},this.setScissor=function(b,O,K,j){b.isVector4?Ot.set(b.x,b.y,b.z,b.w):Ot.set(b,O,K,j),ht.scissor(A.copy(Ot).multiplyScalar(G).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(b){ht.setScissorTest(ee=b)},this.setOpaqueSort=function(b){ut=b},this.setTransparentSort=function(b){_t=b},this.getClearColor=function(b){return b.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(b=!0,O=!0,K=!0){let j=0;if(b){let V=!1;if(R!==null){const pt=R.texture.format;V=pt===Mc||pt===xc||pt===_c}if(V){const pt=R.texture.type,Et=pt===Pi||pt===xs||pt===jo||pt===mo||pt===mc||pt===gc,Bt=Jt.getClearColor(),Ht=Jt.getClearAlpha(),te=Bt.r,Qt=Bt.g,Tt=Bt.b;Et?(g[0]=te,g[1]=Qt,g[2]=Tt,g[3]=Ht,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=te,v[1]=Qt,v[2]=Tt,v[3]=Ht,I.clearBufferiv(I.COLOR,0,v))}else j|=I.COLOR_BUFFER_BIT}O&&(j|=I.DEPTH_BUFFER_BIT),K&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),At.dispose(),ue.dispose(),It.dispose(),C.dispose(),q.dispose(),et.dispose(),zt.dispose(),z.dispose(),Ft.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Ts),Y.removeEventListener("sessionend",wo),Jn.stop()};function st(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=Lt.autoReset,O=kt.enabled,K=kt.autoUpdate,j=kt.needsUpdate,V=kt.type;lt(),Lt.autoReset=b,kt.enabled=O,kt.autoUpdate=K,kt.needsUpdate=j,kt.type=V}function Ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oe(b){const O=b.target;O.removeEventListener("dispose",oe),De(O)}function De(b){Xe(b),It.remove(b)}function Xe(b){const O=It.get(b).programs;O!==void 0&&(O.forEach(function(K){Ft.releaseProgram(K)}),b.isShaderMaterial&&Ft.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,K,j,V,pt){O===null&&(O=Yt);const Et=V.isMesh&&V.matrixWorld.determinant()<0,Bt=An(b,O,K,j,V);ht.setMaterial(j,Et);let Ht=K.index,te=1;if(j.wireframe===!0){if(Ht=ot.getWireframeAttribute(K),Ht===void 0)return;te=2}const Qt=K.drawRange,Tt=K.attributes.position;let fe=Qt.start*te,we=(Qt.start+Qt.count)*te;pt!==null&&(fe=Math.max(fe,pt.start*te),we=Math.min(we,(pt.start+pt.count)*te)),Ht!==null?(fe=Math.max(fe,0),we=Math.min(we,Ht.count)):Tt!=null&&(fe=Math.max(fe,0),we=Math.min(we,Tt.count));const Ae=we-fe;if(Ae<0||Ae===1/0)return;zt.setup(V,j,Bt,K,Ht);let Ue,Kt=Nt;if(Ht!==null&&(Ue=tt.get(Ht),Kt=de,Kt.setIndex(Ue)),V.isMesh)j.wireframe===!0?(ht.setLineWidth(j.wireframeLinewidth*gt()),Kt.setMode(I.LINES)):Kt.setMode(I.TRIANGLES);else if(V.isLine){let at=j.linewidth;at===void 0&&(at=1),ht.setLineWidth(at*gt()),V.isLineSegments?Kt.setMode(I.LINES):V.isLineLoop?Kt.setMode(I.LINE_LOOP):Kt.setMode(I.LINE_STRIP)}else V.isPoints?Kt.setMode(I.POINTS):V.isSprite&&Kt.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Kt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))Kt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const at=V._multiDrawStarts,Cn=V._multiDrawCounts,ve=V._multiDrawCount,ln=Ht?tt.get(Ht).bytesPerElement:1,Qn=It.get(j).currentProgram.getUniforms();for(let $e=0;$e<ve;$e++)Qn.setValue(I,"_gl_DrawID",$e),Kt.render(at[$e]/ln,Cn[$e])}else if(V.isInstancedMesh)Kt.renderInstances(fe,Ae,V.count);else if(K.isInstancedBufferGeometry){const at=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Cn=Math.min(K.instanceCount,at);Kt.renderInstances(fe,Ae,Cn)}else Kt.render(fe,Ae)};function Me(b,O,K){b.transparent===!0&&b.side===Ie&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,fi(b,O,K),b.side=Ji,b.needsUpdate=!0,fi(b,O,K),b.side=Ie):fi(b,O,K)}this.compile=function(b,O,K=null){K===null&&(K=b),u=ue.get(K),u.init(O),M.push(u),K.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(u.pushLight(V),V.castShadow&&u.pushShadow(V))}),b!==K&&b.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(u.pushLight(V),V.castShadow&&u.pushShadow(V))}),u.setupLights();const j=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pt=V.material;if(pt)if(Array.isArray(pt))for(let Et=0;Et<pt.length;Et++){const Bt=pt[Et];Me(Bt,K,V),j.add(Bt)}else Me(pt,K,V),j.add(pt)}),M.pop(),u=null,j},this.compileAsync=function(b,O,K=null){const j=this.compile(b,O,K);return new Promise(V=>{function pt(){if(j.forEach(function(Et){It.get(Et).currentProgram.isReady()&&j.delete(Et)}),j.size===0){V(b);return}setTimeout(pt,10)}ft.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let vn=null;function _n(b){vn&&vn(b)}function Ts(){Jn.stop()}function wo(){Jn.start()}const Jn=new Td;Jn.setAnimationLoop(_n),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(b){vn=b,Y.setAnimationLoop(b),b===null?Jn.stop():Jn.start()},Y.addEventListener("sessionstart",Ts),Y.addEventListener("sessionend",wo),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,O,R),u=ue.get(b,M.length),u.init(O),M.push(u),Dt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),J.setFromProjectionMatrix(Dt),Pt=this.localClippingEnabled,dt=vt.init(this.clippingPlanes,Pt),m=At.get(b,x.length),m.init(),x.push(m),Y.enabled===!0&&Y.isPresenting===!0){const pt=_.xr.getDepthSensingMesh();pt!==null&&As(pt,O,-1/0,_.sortObjects)}As(b,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ut,_t),nt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,nt&&Jt.addToRenderList(m,b),this.info.render.frame++,dt===!0&&vt.beginShadows();const K=u.state.shadowsArray;kt.render(K,b,O),dt===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,V=m.transmissive;if(u.setupLights(),O.isArrayCamera){const pt=O.cameras;if(V.length>0)for(let Et=0,Bt=pt.length;Et<Bt;Et++){const Ht=pt[Et];Eo(j,V,b,Ht)}nt&&Jt.render(b);for(let Et=0,Bt=pt.length;Et<Bt;Et++){const Ht=pt[Et];So(m,b,Ht,Ht.viewport)}}else V.length>0&&Eo(j,V,b,O),nt&&Jt.render(b),So(m,b,O);R!==null&&(L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(_,b,O),zt.resetDefaultState(),w=-1,y=null,M.pop(),M.length>0?(u=M[M.length-1],dt===!0&&vt.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function As(b,O,K,j){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){j&&Wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Dt);const Et=et.update(b),Bt=b.material;Bt.visible&&m.push(b,Et,Bt,K,Wt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const Et=et.update(b),Bt=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Wt.copy(b.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Wt.copy(Et.boundingSphere.center)),Wt.applyMatrix4(b.matrixWorld).applyMatrix4(Dt)),Array.isArray(Bt)){const Ht=Et.groups;for(let te=0,Qt=Ht.length;te<Qt;te++){const Tt=Ht[te],fe=Bt[Tt.materialIndex];fe&&fe.visible&&m.push(b,Et,fe,K,Wt.z,Tt)}}else Bt.visible&&m.push(b,Et,Bt,K,Wt.z,null)}}const pt=b.children;for(let Et=0,Bt=pt.length;Et<Bt;Et++)As(pt[Et],O,K,j)}function So(b,O,K,j){const V=b.opaque,pt=b.transmissive,Et=b.transparent;u.setupLightsView(K),dt===!0&&vt.setGlobalState(_.clippingPlanes,K),j&&ht.viewport(P.copy(j)),V.length>0&&ts(V,O,K),pt.length>0&&ts(pt,O,K),Et.length>0&&ts(Et,O,K),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Eo(b,O,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[j.id]===void 0&&(u.state.transmissionRenderTarget[j.id]=new Ms(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?nr:Pi,minFilter:gs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));const pt=u.state.transmissionRenderTarget[j.id],Et=j.viewport||P;pt.setSize(Et.z,Et.w);const Bt=_.getRenderTarget();_.setRenderTarget(pt),_.getClearColor(F),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),nt&&Jt.render(K);const Ht=_.toneMapping;_.toneMapping=Zi;const te=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),u.setupLightsView(j),dt===!0&&vt.setGlobalState(_.clippingPlanes,j),ts(b,K,j),L.updateMultisampleRenderTarget(pt),L.updateRenderTargetMipmap(pt),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Tt=0,fe=O.length;Tt<fe;Tt++){const we=O[Tt],Ae=we.object,Ue=we.geometry,Kt=we.material,at=we.group;if(Kt.side===Ie&&Ae.layers.test(j.layers)){const Cn=Kt.side;Kt.side=un,Kt.needsUpdate=!0,To(Ae,K,j,Ue,Kt,at),Kt.side=Cn,Kt.needsUpdate=!0,Qt=!0}}Qt===!0&&(L.updateMultisampleRenderTarget(pt),L.updateRenderTargetMipmap(pt))}_.setRenderTarget(Bt),_.setClearColor(F,W),te!==void 0&&(j.viewport=te),_.toneMapping=Ht}function ts(b,O,K){const j=O.isScene===!0?O.overrideMaterial:null;for(let V=0,pt=b.length;V<pt;V++){const Et=b[V],Bt=Et.object,Ht=Et.geometry,te=j===null?Et.material:j,Qt=Et.group;Bt.layers.test(K.layers)&&To(Bt,O,K,Ht,te,Qt)}}function To(b,O,K,j,V,pt){b.onBeforeRender(_,O,K,j,V,pt),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(_,O,K,j,b,pt),V.transparent===!0&&V.side===Ie&&V.forceSinglePass===!1?(V.side=un,V.needsUpdate=!0,_.renderBufferDirect(K,O,j,V,b,pt),V.side=Ji,V.needsUpdate=!0,_.renderBufferDirect(K,O,j,V,b,pt),V.side=Ie):_.renderBufferDirect(K,O,j,V,b,pt),b.onAfterRender(_,O,K,j,V,pt)}function fi(b,O,K){O.isScene!==!0&&(O=Yt);const j=It.get(b),V=u.state.lights,pt=u.state.shadowsArray,Et=V.state.version,Bt=Ft.getParameters(b,V.state,pt,O,K),Ht=Ft.getProgramCacheKey(Bt);let te=j.programs;j.environment=b.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(b.isMeshStandardMaterial?q:C).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,te===void 0&&(b.addEventListener("dispose",oe),te=new Map,j.programs=te);let Qt=te.get(Ht);if(Qt!==void 0){if(j.currentProgram===Qt&&j.lightsStateVersion===Et)return Tn(b,Bt),Qt}else Bt.uniforms=Ft.getUniforms(b),b.onBeforeCompile(Bt,_),Qt=Ft.acquireProgram(Bt,Ht),te.set(Ht,Qt),j.uniforms=Bt.uniforms;const Tt=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=vt.uniform),Tn(b,Bt),j.needsLights=ma(b),j.lightsStateVersion=Et,j.needsLights&&(Tt.ambientLightColor.value=V.state.ambient,Tt.lightProbe.value=V.state.probe,Tt.directionalLights.value=V.state.directional,Tt.directionalLightShadows.value=V.state.directionalShadow,Tt.spotLights.value=V.state.spot,Tt.spotLightShadows.value=V.state.spotShadow,Tt.rectAreaLights.value=V.state.rectArea,Tt.ltc_1.value=V.state.rectAreaLTC1,Tt.ltc_2.value=V.state.rectAreaLTC2,Tt.pointLights.value=V.state.point,Tt.pointLightShadows.value=V.state.pointShadow,Tt.hemisphereLights.value=V.state.hemi,Tt.directionalShadowMap.value=V.state.directionalShadowMap,Tt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Tt.spotShadowMap.value=V.state.spotShadowMap,Tt.spotLightMatrix.value=V.state.spotLightMatrix,Tt.spotLightMap.value=V.state.spotLightMap,Tt.pointShadowMap.value=V.state.pointShadowMap,Tt.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=Qt,j.uniformsList=null,Qt}function Fn(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Qr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Tn(b,O){const K=It.get(b);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function An(b,O,K,j,V){O.isScene!==!0&&(O=Yt),L.resetTextureUnits();const pt=O.fog,Et=j.isMeshStandardMaterial?O.environment:null,Bt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Mo,Ht=(j.isMeshStandardMaterial?q:C).get(j.envMap||Et),te=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Qt=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Tt=!!K.morphAttributes.position,fe=!!K.morphAttributes.normal,we=!!K.morphAttributes.color;let Ae=Zi;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ae=_.toneMapping);const Ue=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Kt=Ue!==void 0?Ue.length:0,at=It.get(j),Cn=u.state.lights;if(dt===!0&&(Pt===!0||b!==y)){const en=b===y&&j.id===w;vt.setState(j,b,en)}let ve=!1;j.version===at.__version?(at.needsLights&&at.lightsStateVersion!==Cn.state.version||at.outputColorSpace!==Bt||V.isBatchedMesh&&at.batching===!1||!V.isBatchedMesh&&at.batching===!0||V.isBatchedMesh&&at.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&at.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&at.instancing===!1||!V.isInstancedMesh&&at.instancing===!0||V.isSkinnedMesh&&at.skinning===!1||!V.isSkinnedMesh&&at.skinning===!0||V.isInstancedMesh&&at.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&at.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&at.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&at.instancingMorph===!1&&V.morphTexture!==null||at.envMap!==Ht||j.fog===!0&&at.fog!==pt||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==vt.numPlanes||at.numIntersection!==vt.numIntersection)||at.vertexAlphas!==te||at.vertexTangents!==Qt||at.morphTargets!==Tt||at.morphNormals!==fe||at.morphColors!==we||at.toneMapping!==Ae||at.morphTargetsCount!==Kt)&&(ve=!0):(ve=!0,at.__version=j.version);let ln=at.currentProgram;ve===!0&&(ln=fi(j,O,V));let Qn=!1,$e=!1,pi=!1;const be=ln.getUniforms(),xn=at.uniforms;if(ht.useProgram(ln.program)&&(Qn=!0,$e=!0,pi=!0),j.id!==w&&(w=j.id,$e=!0),Qn||y!==b){ht.buffers.depth.getReversed()?(ct.copy(b.projectionMatrix),pp(ct),mp(ct),be.setValue(I,"projectionMatrix",ct)):be.setValue(I,"projectionMatrix",b.projectionMatrix),be.setValue(I,"viewMatrix",b.matrixWorldInverse);const Rn=be.map.cameraPosition;Rn!==void 0&&Rn.setValue(I,qt.setFromMatrixPosition(b.matrixWorld)),Ut.logarithmicDepthBuffer&&be.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&be.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,$e=!0,pi=!0)}if(V.isSkinnedMesh){be.setOptional(I,V,"bindMatrix"),be.setOptional(I,V,"bindMatrixInverse");const en=V.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),be.setValue(I,"boneTexture",en.boneTexture,L))}V.isBatchedMesh&&(be.setOptional(I,V,"batchingTexture"),be.setValue(I,"batchingTexture",V._matricesTexture,L),be.setOptional(I,V,"batchingIdTexture"),be.setValue(I,"batchingIdTexture",V._indirectTexture,L),be.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&be.setValue(I,"batchingColorTexture",V._colorsTexture,L));const mi=K.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&ne.update(V,K,ln),($e||at.receiveShadow!==V.receiveShadow)&&(at.receiveShadow=V.receiveShadow,be.setValue(I,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(xn.envMap.value=Ht,xn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(xn.envMapIntensity.value=O.environmentIntensity),$e&&(be.setValue(I,"toneMappingExposure",_.toneMappingExposure),at.needsLights&&Ge(xn,pi),pt&&j.fog===!0&&yt.refreshFogUniforms(xn,pt),yt.refreshMaterialUniforms(xn,j,G,B,u.state.transmissionRenderTarget[b.id]),Qr.upload(I,Fn(at),xn,L)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Qr.upload(I,Fn(at),xn,L),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&be.setValue(I,"center",V.center),be.setValue(I,"modelViewMatrix",V.modelViewMatrix),be.setValue(I,"normalMatrix",V.normalMatrix),be.setValue(I,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const en=j.uniformsGroups;for(let Rn=0,zn=en.length;Rn<zn;Rn++){const Cs=en[Rn];z.update(Cs,ln),z.bind(Cs,ln)}}return ln}function Ge(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function ma(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,O,K){It.get(b.texture).__webglTexture=O,It.get(b.depthTexture).__webglTexture=K;const j=It.get(b);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const K=It.get(b);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,K=0){R=b,E=O,S=K;let j=!0,V=null,pt=!1,Et=!1;if(b){const Ht=It.get(b);if(Ht.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(I.FRAMEBUFFER,null),j=!1;else if(Ht.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(Ht.__hasExternalTextures)L.rebindTextures(b,It.get(b.texture).__webglTexture,It.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Tt=b.depthTexture;if(Ht.__boundDepthTexture!==Tt){if(Tt!==null&&It.has(Tt)&&(b.width!==Tt.image.width||b.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const te=b.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Et=!0);const Qt=It.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qt[O])?V=Qt[O][K]:V=Qt[O],pt=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?V=It.get(b).__webglMultisampledFramebuffer:Array.isArray(Qt)?V=Qt[K]:V=Qt,P.copy(b.viewport),A.copy(b.scissor),k=b.scissorTest}else P.copy(rt).multiplyScalar(G).floor(),A.copy(Ot).multiplyScalar(G).floor(),k=ee;if(ht.bindFramebuffer(I.FRAMEBUFFER,V)&&j&&ht.drawBuffers(b,V),ht.viewport(P),ht.scissor(A),ht.setScissorTest(k),pt){const Ht=It.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ht.__webglTexture,K)}else if(Et){const Ht=It.get(b.texture),te=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.__webglTexture,K||0,te)}w=-1},this.readRenderTargetPixels=function(b,O,K,j,V,pt,Et){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(Bt=Bt[Et]),Bt){ht.bindFramebuffer(I.FRAMEBUFFER,Bt);try{const Ht=b.texture,te=Ht.format,Qt=Ht.type;if(!Ut.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-j&&K>=0&&K<=b.height-V&&I.readPixels(O,K,j,V,se.convert(te),se.convert(Qt),pt)}finally{const Ht=R!==null?It.get(R).__webglFramebuffer:null;ht.bindFramebuffer(I.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(b,O,K,j,V,pt,Et){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(Bt=Bt[Et]),Bt){const Ht=b.texture,te=Ht.format,Qt=Ht.type;if(!Ut.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-j&&K>=0&&K<=b.height-V){ht.bindFramebuffer(I.FRAMEBUFFER,Bt);const Tt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Tt),I.bufferData(I.PIXEL_PACK_BUFFER,pt.byteLength,I.STREAM_READ),I.readPixels(O,K,j,V,se.convert(te),se.convert(Qt),0);const fe=R!==null?It.get(R).__webglFramebuffer:null;ht.bindFramebuffer(I.FRAMEBUFFER,fe);const we=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await fp(I,we,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Tt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pt),I.deleteBuffer(Tt),I.deleteSync(we),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,K=0){b.isTexture!==!0&&(Go("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const j=Math.pow(2,-K),V=Math.floor(b.image.width*j),pt=Math.floor(b.image.height*j),Et=O!==null?O.x:0,Bt=O!==null?O.y:0;L.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,Et,Bt,V,pt),ht.unbindTexture()},this.copyTextureToTexture=function(b,O,K=null,j=null,V=0){b.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,b=arguments[1],O=arguments[2],V=arguments[3]||0,K=null);let pt,Et,Bt,Ht,te,Qt,Tt,fe,we;const Ae=b.isCompressedTexture?b.mipmaps[V]:b.image;K!==null?(pt=K.max.x-K.min.x,Et=K.max.y-K.min.y,Bt=K.isBox3?K.max.z-K.min.z:1,Ht=K.min.x,te=K.min.y,Qt=K.isBox3?K.min.z:0):(pt=Ae.width,Et=Ae.height,Bt=Ae.depth||1,Ht=0,te=0,Qt=0),j!==null?(Tt=j.x,fe=j.y,we=j.z):(Tt=0,fe=0,we=0);const Ue=se.convert(O.format),Kt=se.convert(O.type);let at;O.isData3DTexture?(L.setTexture3D(O,0),at=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(L.setTexture2DArray(O,0),at=I.TEXTURE_2D_ARRAY):(L.setTexture2D(O,0),at=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Cn=I.getParameter(I.UNPACK_ROW_LENGTH),ve=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ln=I.getParameter(I.UNPACK_SKIP_PIXELS),Qn=I.getParameter(I.UNPACK_SKIP_ROWS),$e=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ae.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ae.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ht),I.pixelStorei(I.UNPACK_SKIP_ROWS,te),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qt);const pi=b.isDataArrayTexture||b.isData3DTexture,be=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const xn=It.get(b),mi=It.get(O),en=It.get(xn.__renderTarget),Rn=It.get(mi.__renderTarget);ht.bindFramebuffer(I.READ_FRAMEBUFFER,en.__webglFramebuffer),ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let zn=0;zn<Bt;zn++)pi&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,It.get(b).__webglTexture,V,Qt+zn),b.isDepthTexture?(be&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,It.get(O).__webglTexture,V,we+zn),I.blitFramebuffer(Ht,te,pt,Et,Tt,fe,pt,Et,I.DEPTH_BUFFER_BIT,I.NEAREST)):be?I.copyTexSubImage3D(at,V,Tt,fe,we+zn,Ht,te,pt,Et):I.copyTexSubImage2D(at,V,Tt,fe,we+zn,Ht,te,pt,Et);ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else be?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(at,V,Tt,fe,we,pt,Et,Bt,Ue,Kt,Ae.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(at,V,Tt,fe,we,pt,Et,Bt,Ue,Ae.data):I.texSubImage3D(at,V,Tt,fe,we,pt,Et,Bt,Ue,Kt,Ae):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,V,Tt,fe,pt,Et,Ue,Kt,Ae.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,V,Tt,fe,Ae.width,Ae.height,Ue,Ae.data):I.texSubImage2D(I.TEXTURE_2D,V,Tt,fe,pt,Et,Ue,Kt,Ae);I.pixelStorei(I.UNPACK_ROW_LENGTH,Cn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ln),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$e),V===0&&O.generateMipmaps&&I.generateMipmap(at),ht.unbindTexture()},this.copyTextureToTexture3D=function(b,O,K=null,j=null,V=0){return b.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,j=arguments[1]||null,b=arguments[2],O=arguments[3],V=arguments[4]||0),Go('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,K,j,V)},this.initRenderTarget=function(b){It.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),ht.unbindTexture()},this.resetState=function(){E=0,S=0,R=null,ht.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}}class Ec{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new Ec(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Tc extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class w_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ec,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new N;class sa{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),o=Te(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new sa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ac extends Ss{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ws;const Lo=new N,Xs=new N,$s=new N,qs=new it,Do=new it,Ud=new pe,Er=new N,Io=new N,Tr=new N,zh=new it,qa=new it,Bh=new it;class Nd extends He{constructor(t=new Ac){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new w_(e,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new sa(n,3,0,!1)),Ws.setAttribute("uv",new sa(n,2,3,!1))}this.geometry=Ws,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),Ud.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-$s.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;Ar(Er.set(-.5,-.5,0),$s,r,Xs,s,o),Ar(Io.set(.5,-.5,0),$s,r,Xs,s,o),Ar(Tr.set(.5,.5,0),$s,r,Xs,s,o),zh.set(0,0),qa.set(1,0),Bh.set(1,1);let a=t.ray.intersectTriangle(Er,Io,Tr,!1,Lo);if(a===null&&(Ar(Io.set(-.5,.5,0),$s,r,Xs,s,o),qa.set(0,1),a=t.ray.intersectTriangle(Er,Tr,Io,!1,Lo),a===null))return;const l=t.ray.origin.distanceTo(Lo);l<t.near||l>t.far||e.push({distance:l,point:Lo.clone(),uv:In.getInterpolation(Lo,Er,Io,Tr,zh,qa,Bh,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ar(i,t,e,n,s,o){qs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Do.x=o*qs.x-s*qs.y,Do.y=s*qs.x+o*qs.y):Do.copy(qs),i.copy(t),i.x+=Do.x,i.y+=Do.y,i.applyMatrix4(Ud)}class S_ extends an{constructor(t=null,e=1,n=1,s,o,r,a,l,c=Sn,h=Sn,d,p){super(null,r,a,l,c,h,s,o,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hh extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ys=new pe,Gh=new pe,Cr=[],Vh=new ws,E_=new pe,Uo=new $,No=new yo;class Un extends ${constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,E_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ws),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),Vh.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(Vh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),No.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(No)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Uo.geometry=this.geometry,Uo.material=this.material,Uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(n),t.ray.intersectsSphere(No)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ys),Gh.multiplyMatrices(n,Ys),Uo.matrixWorld=Gh,Uo.raycast(t,Cr);for(let r=0,a=Cr.length;r<a;r++){const l=Cr[r];l.instanceId=o,l.object=this,e.push(l)}Cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Hh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new S_(new Float32Array(s*this.count),s,this.count,vc,si));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class kd extends Ss{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const oa=new N,ra=new N,Wh=new pe,ko=new ha,Rr=new yo,Ya=new N,Xh=new N;class T_ extends He{constructor(t=new xe,e=new kd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)oa.fromBufferAttribute(e,s-1),ra.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=oa.distanceTo(ra);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(s),Rr.radius+=o,t.ray.intersectsSphere(Rr)===!1)return;Wh.copy(s).invert(),ko.copy(t.ray).applyMatrix4(Wh);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=f,m=g-1;v<m;v+=c){const u=h.getX(v),x=h.getX(v+1),M=Pr(this,t,ko,l,u,x);M&&e.push(M)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),u=Pr(this,t,ko,l,v,m);u&&e.push(u)}}else{const f=Math.max(0,r.start),g=Math.min(p.count,r.start+r.count);for(let v=f,m=g-1;v<m;v+=c){const u=Pr(this,t,ko,l,v,v+1);u&&e.push(u)}if(this.isLineLoop){const v=Pr(this,t,ko,l,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Pr(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(oa.fromBufferAttribute(r,s),ra.fromBufferAttribute(r,o),e.distanceSqToSegment(oa,ra,Ya,Xh)>n)return;Ya.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ya);if(!(l<t.near||l>t.far))return{distance:l,point:Xh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class On extends an{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],p=n[s+1]-h,f=(r-h)/p;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new it:new N);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,s=[],o=[],r=[],a=new N,l=new pe;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new N)}o[0]=new N,r[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ye(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,g))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Ye(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Cc extends di{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new it){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*h-f*d+this.aX,c=p*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class A_ extends Cc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Rc(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,d){let p=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+d)+(l-a)/d;p*=h,f*=h,s(r,a,p,f)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Lr=new N,ja=new Rc,Ka=new Rc,Za=new Rc;class C_ extends di{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(Lr.subVectors(s[0],s[1]).add(s[0]),c=Lr);const d=s[a%o],p=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Lr.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Lr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ja.initNonuniformCatmullRom(c.x,d.x,p.x,h.x,g,v,m),Ka.initNonuniformCatmullRom(c.y,d.y,p.y,h.y,g,v,m),Za.initNonuniformCatmullRom(c.z,d.z,p.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ja.initCatmullRom(c.x,d.x,p.x,h.x,this.tension),Ka.initCatmullRom(c.y,d.y,p.y,h.y,this.tension),Za.initCatmullRom(c.z,d.z,p.z,h.z,this.tension));return n.set(ja.calc(l),Ka.calc(l),Za.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function $h(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function R_(i,t){const e=1-i;return e*e*t}function P_(i,t){return 2*(1-i)*i*t}function L_(i,t){return i*i*t}function qo(i,t,e,n){return R_(i,t)+P_(i,e)+L_(i,n)}function D_(i,t){const e=1-i;return e*e*e*t}function I_(i,t){const e=1-i;return 3*e*e*i*t}function U_(i,t){return 3*(1-i)*i*i*t}function N_(i,t){return i*i*i*t}function Yo(i,t,e,n,s){return D_(i,t)+I_(i,e)+U_(i,n)+N_(i,s)}class Od extends di{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Yo(t,s.x,o.x,r.x,a.x),Yo(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class k_ extends di{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Yo(t,s.x,o.x,r.x,a.x),Yo(t,s.y,o.y,r.y,a.y),Yo(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fd extends di{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class O_ extends di{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zd extends di{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(qo(t,s.x,o.x,r.x),qo(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class F_ extends di{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(qo(t,s.x,o.x,r.x),qo(t,s.y,o.y,r.y),qo(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bd extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return n.set($h(a,l.x,c.x,h.x,d.x),$h(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var sc=Object.freeze({__proto__:null,ArcCurve:A_,CatmullRomCurve3:C_,CubicBezierCurve:Od,CubicBezierCurve3:k_,EllipseCurve:Cc,LineCurve:Fd,LineCurve3:O_,QuadraticBezierCurve:zd,QuadraticBezierCurve3:F_,SplineCurve:Bd});class z_ extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new sc[s.type]().fromJSON(s))}return this}}class oc extends z_{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Fd(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new zd(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Od(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Bd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Cc(t,e,n,s,o,r,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class da extends xe{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ye(s,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,d=new N,p=new it,f=new N,g=new N,v=new N;let m=0,u=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,u=t[x+1].y-t[x].y,f.x=u*1,f.y=-m,f.z=u*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,u=t[x+1].y-t[x].y,f.x=u*1,f.y=-m,f.z=u*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let x=0;x<=e;x++){const M=n+x*h*s,_=Math.sin(M),T=Math.cos(M);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*_,d.y=t[E].y,d.z=t[E].x*T,r.push(d.x,d.y,d.z),p.x=x/e,p.y=E/(t.length-1),a.push(p.x,p.y);const S=l[3*E+0]*_,R=l[3*E+1],w=l[3*E+0]*T;c.push(S,R,w)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){const _=M+x*t.length,T=_,E=_+t.length,S=_+t.length+1,R=_+1;o.push(T,E,R),o.push(S,R,E)}this.setIndex(o),this.setAttribute("position",new Zt(r,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new da(t.points,t.segments,t.phiStart,t.phiLength)}}class Pc extends da{constructor(t=1,e=1,n=4,s=8){const o=new oc;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Pc(t.radius,t.length,t.capSegments,t.radialSegments)}}class Lc extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new N,h=new it;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[p]/t+1)/2,h.y=(r[p+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class jt extends xe{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],d=[],p=[],f=[];let g=0;const v=[],m=n/2;let u=0;x(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(p,3)),this.setAttribute("uv",new Zt(f,2));function x(){const _=new N,T=new N;let E=0;const S=(e-t)/n;for(let R=0;R<=o;R++){const w=[],y=R/o,P=y*(e-t)+t;for(let A=0;A<=s;A++){const k=A/s,F=k*l+a,W=Math.sin(F),H=Math.cos(F);T.x=P*W,T.y=-y*n+m,T.z=P*H,d.push(T.x,T.y,T.z),_.set(W,S,H).normalize(),p.push(_.x,_.y,_.z),f.push(k,1-y),w.push(g++)}v.push(w)}for(let R=0;R<s;R++)for(let w=0;w<o;w++){const y=v[w][R],P=v[w+1][R],A=v[w+1][R+1],k=v[w][R+1];(t>0||w!==0)&&(h.push(y,P,k),E+=3),(e>0||w!==o-1)&&(h.push(P,A,k),E+=3)}c.addGroup(u,E,0),u+=E}function M(_){const T=g,E=new it,S=new N;let R=0;const w=_===!0?t:e,y=_===!0?1:-1;for(let A=1;A<=s;A++)d.push(0,m*y,0),p.push(0,y,0),f.push(.5,.5),g++;const P=g;for(let A=0;A<=s;A++){const F=A/s*l+a,W=Math.cos(F),H=Math.sin(F);S.x=w*H,S.y=m*y,S.z=w*W,d.push(S.x,S.y,S.z),p.push(0,y,0),E.x=W*.5+.5,E.y=H*.5*y+.5,f.push(E.x,E.y),g++}for(let A=0;A<s;A++){const k=T+A,F=P+A;_===!0?h.push(F,F+1,k):h.push(F+1,F,k),R+=3}c.addGroup(u,R,_===!0?1:2),u+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class li extends jt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new li(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fa extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(o.slice(),3)),this.setAttribute("uv",new Zt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new N,_=new N,T=new N;for(let E=0;E<e.length;E+=3)f(e[E+0],M),f(e[E+1],_),f(e[E+2],T),l(M,_,T,x)}function l(x,M,_,T){const E=T+1,S=[];for(let R=0;R<=E;R++){S[R]=[];const w=x.clone().lerp(_,R/E),y=M.clone().lerp(_,R/E),P=E-R;for(let A=0;A<=P;A++)A===0&&R===E?S[R][A]=w:S[R][A]=w.clone().lerp(y,A/P)}for(let R=0;R<E;R++)for(let w=0;w<2*(E-R)-1;w++){const y=Math.floor(w/2);w%2===0?(p(S[R][y+1]),p(S[R+1][y]),p(S[R][y])):(p(S[R][y+1]),p(S[R+1][y+1]),p(S[R+1][y]))}}function c(x){const M=new N;for(let _=0;_<o.length;_+=3)M.x=o[_+0],M.y=o[_+1],M.z=o[_+2],M.normalize().multiplyScalar(x),o[_+0]=M.x,o[_+1]=M.y,o[_+2]=M.z}function h(){const x=new N;for(let M=0;M<o.length;M+=3){x.x=o[M+0],x.y=o[M+1],x.z=o[M+2];const _=m(x)/2/Math.PI+.5,T=u(x)/Math.PI+.5;r.push(_,1-T)}g(),d()}function d(){for(let x=0;x<r.length;x+=6){const M=r[x+0],_=r[x+2],T=r[x+4],E=Math.max(M,_,T),S=Math.min(M,_,T);E>.9&&S<.1&&(M<.2&&(r[x+0]+=1),_<.2&&(r[x+2]+=1),T<.2&&(r[x+4]+=1))}}function p(x){o.push(x.x,x.y,x.z)}function f(x,M){const _=x*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){const x=new N,M=new N,_=new N,T=new N,E=new it,S=new it,R=new it;for(let w=0,y=0;w<o.length;w+=9,y+=6){x.set(o[w+0],o[w+1],o[w+2]),M.set(o[w+3],o[w+4],o[w+5]),_.set(o[w+6],o[w+7],o[w+8]),E.set(r[y+0],r[y+1]),S.set(r[y+2],r[y+3]),R.set(r[y+4],r[y+5]),T.copy(x).add(M).add(_).divideScalar(3);const P=m(T);v(E,y+0,x,P),v(S,y+2,M,P),v(R,y+4,_,P)}}function v(x,M,_,T){T<0&&x.x===1&&(r[M]=x.x-1),_.x===0&&_.z===0&&(r[M]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function u(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.vertices,t.indices,t.radius,t.details)}}class Es extends oc{constructor(t){super(t),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new oc().fromJSON(s))}return this}}const B_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Hd(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,d,p,f;if(n&&(o=X_(i,t,o,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)d=i[g],p=i[g+1],d<a&&(a=d),p<l&&(l=p),d>c&&(c=d),p>h&&(h=p);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Ko(o,r,e,a,l,f,0),r}};function Hd(i,t,e,n,s){let o,r;if(s===nx(i,t,e,n)>0)for(o=t;o<e;o+=n)r=qh(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=qh(o,i[o],i[o+1],r);return r&&pa(r,r.next)&&(Jo(r),r=r.next),r}function ys(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(pa(e,e.next)||Fe(e.prev,e,e.next)===0)){if(Jo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ko(i,t,e,n,s,o,r){if(!i)return;!r&&o&&K_(i,n,s,o);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,o?G_(i,n,s,o):H_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Jo(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=V_(ys(i),t,e),Ko(i,t,e,n,s,o,2)):r===2&&W_(i,t,e,n,s,o):Ko(ys(i),t,e,n,s,o,1);break}}}function H_(i){const t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=s<o?s<r?s:r:o<r?o:r,d=a<l?a<c?a:c:l<c?l:c,p=s>o?s>r?s:r:o>r?o:r,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=d&&g.y<=f&&io(s,a,o,l,r,c,g.x,g.y)&&Fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function G_(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Fe(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,d=o.y,p=r.y,f=a<l?a<c?a:c:l<c?l:c,g=h<d?h<p?h:p:d<p?d:p,v=a>l?a>c?a:c:l>c?l:c,m=h>d?h>p?h:p:d>p?d:p,u=rc(f,g,t,e,n),x=rc(v,m,t,e,n);let M=i.prevZ,_=i.nextZ;for(;M&&M.z>=u&&_&&_.z<=x;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==r&&io(a,h,l,d,c,p,M.x,M.y)&&Fe(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==r&&io(a,h,l,d,c,p,_.x,_.y)&&Fe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=u;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==r&&io(a,h,l,d,c,p,M.x,M.y)&&Fe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==r&&io(a,h,l,d,c,p,_.x,_.y)&&Fe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function V_(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!pa(s,o)&&Gd(s,n,n.next,o)&&Zo(s,o)&&Zo(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Jo(n),Jo(n.next),n=i=o),n=n.next}while(n!==i);return ys(n)}function W_(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Q_(r,a)){let l=Vd(r,a);r=ys(r,r.next),l=ys(l,l.next),Ko(r,t,e,n,s,o,0),Ko(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function X_(i,t,e,n){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=Hd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(J_(c));for(s.sort($_),o=0;o<s.length;o++)e=q_(s[o],e);return e}function $_(i,t){return i.x-t.x}function q_(i,t){const e=Y_(i,t);if(!e)return t;const n=Vd(e,i);return ys(n,n.next),ys(e,e.next)}function Y_(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const p=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=o&&p>n&&(n=p,s=e.x<e.next.x?e:e.next,p===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,d;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&io(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(d=Math.abs(r-e.y)/(o-e.x),Zo(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&j_(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function j_(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function K_(i,t,e,n){let s=i;do s.z===0&&(s.z=rc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Z_(s)}function Z_(i){let t,e,n,s,o,r,a,l,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function rc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function J_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function io(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Q_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!tx(i,t)&&(Zo(i,t)&&Zo(t,i)&&ex(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||pa(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function pa(i,t){return i.x===t.x&&i.y===t.y}function Gd(i,t,e,n){const s=Ir(Fe(i,t,e)),o=Ir(Fe(i,t,n)),r=Ir(Fe(e,n,i)),a=Ir(Fe(e,n,t));return!!(s!==o&&r!==a||s===0&&Dr(i,e,t)||o===0&&Dr(i,n,t)||r===0&&Dr(e,i,n)||a===0&&Dr(e,t,n))}function Dr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ir(i){return i>0?1:i<0?-1:0}function tx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Zo(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function ex(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Vd(i,t){const e=new ac(i.i,i.x,i.y),n=new ac(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function qh(i,t,e,n){const s=new ac(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Jo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ac(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nx(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class ci{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return ci.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Yh(t),jh(n,t);let r=t.length;e.forEach(Yh);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,jh(n,e[l]);const a=B_.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Yh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function jh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class xo extends xe{constructor(t=new Es([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const u=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:ix;let M,_=!1,T,E,S,R;u&&(M=u.getSpacedPoints(h),_=!0,p=!1,T=u.computeFrenetFrames(h,!1),E=new N,S=new N,R=new N),p||(m=0,f=0,g=0,v=0);const w=a.extractPoints(c);let y=w.shape;const P=w.holes;if(!ci.isClockWise(y)){y=y.reverse();for(let nt=0,gt=P.length;nt<gt;nt++){const I=P[nt];ci.isClockWise(I)&&(P[nt]=I.reverse())}}const k=ci.triangulateShape(y,P),F=y;for(let nt=0,gt=P.length;nt<gt;nt++){const I=P[nt];y=y.concat(I)}function W(nt,gt,I){return gt||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(gt,I)}const H=y.length,B=k.length;function G(nt,gt,I){let Gt,ft,Ut;const ht=nt.x-gt.x,Lt=nt.y-gt.y,It=I.x-nt.x,L=I.y-nt.y,C=ht*ht+Lt*Lt,q=ht*L-Lt*It;if(Math.abs(q)>Number.EPSILON){const tt=Math.sqrt(C),ot=Math.sqrt(It*It+L*L),et=gt.x-Lt/tt,Ft=gt.y+ht/tt,yt=I.x-L/ot,At=I.y+It/ot,ue=((yt-et)*L-(At-Ft)*It)/(ht*L-Lt*It);Gt=et+ht*ue-nt.x,ft=Ft+Lt*ue-nt.y;const vt=Gt*Gt+ft*ft;if(vt<=2)return new it(Gt,ft);Ut=Math.sqrt(vt/2)}else{let tt=!1;ht>Number.EPSILON?It>Number.EPSILON&&(tt=!0):ht<-Number.EPSILON?It<-Number.EPSILON&&(tt=!0):Math.sign(Lt)===Math.sign(L)&&(tt=!0),tt?(Gt=-Lt,ft=ht,Ut=Math.sqrt(C)):(Gt=ht,ft=Lt,Ut=Math.sqrt(C/2))}return new it(Gt/Ut,ft/Ut)}const ut=[];for(let nt=0,gt=F.length,I=gt-1,Gt=nt+1;nt<gt;nt++,I++,Gt++)I===gt&&(I=0),Gt===gt&&(Gt=0),ut[nt]=G(F[nt],F[I],F[Gt]);const _t=[];let rt,Ot=ut.concat();for(let nt=0,gt=P.length;nt<gt;nt++){const I=P[nt];rt=[];for(let Gt=0,ft=I.length,Ut=ft-1,ht=Gt+1;Gt<ft;Gt++,Ut++,ht++)Ut===ft&&(Ut=0),ht===ft&&(ht=0),rt[Gt]=G(I[Gt],I[Ut],I[ht]);_t.push(rt),Ot=Ot.concat(rt)}for(let nt=0;nt<m;nt++){const gt=nt/m,I=f*Math.cos(gt*Math.PI/2),Gt=g*Math.sin(gt*Math.PI/2)+v;for(let ft=0,Ut=F.length;ft<Ut;ft++){const ht=W(F[ft],ut[ft],Gt);ct(ht.x,ht.y,-I)}for(let ft=0,Ut=P.length;ft<Ut;ft++){const ht=P[ft];rt=_t[ft];for(let Lt=0,It=ht.length;Lt<It;Lt++){const L=W(ht[Lt],rt[Lt],Gt);ct(L.x,L.y,-I)}}}const ee=g+v;for(let nt=0;nt<H;nt++){const gt=p?W(y[nt],Ot[nt],ee):y[nt];_?(S.copy(T.normals[0]).multiplyScalar(gt.x),E.copy(T.binormals[0]).multiplyScalar(gt.y),R.copy(M[0]).add(S).add(E),ct(R.x,R.y,R.z)):ct(gt.x,gt.y,0)}for(let nt=1;nt<=h;nt++)for(let gt=0;gt<H;gt++){const I=p?W(y[gt],Ot[gt],ee):y[gt];_?(S.copy(T.normals[nt]).multiplyScalar(I.x),E.copy(T.binormals[nt]).multiplyScalar(I.y),R.copy(M[nt]).add(S).add(E),ct(R.x,R.y,R.z)):ct(I.x,I.y,d/h*nt)}for(let nt=m-1;nt>=0;nt--){const gt=nt/m,I=f*Math.cos(gt*Math.PI/2),Gt=g*Math.sin(gt*Math.PI/2)+v;for(let ft=0,Ut=F.length;ft<Ut;ft++){const ht=W(F[ft],ut[ft],Gt);ct(ht.x,ht.y,d+I)}for(let ft=0,Ut=P.length;ft<Ut;ft++){const ht=P[ft];rt=_t[ft];for(let Lt=0,It=ht.length;Lt<It;Lt++){const L=W(ht[Lt],rt[Lt],Gt);_?ct(L.x,L.y+M[h-1].y,M[h-1].x+I):ct(L.x,L.y,d+I)}}}J(),dt();function J(){const nt=s.length/3;if(p){let gt=0,I=H*gt;for(let Gt=0;Gt<B;Gt++){const ft=k[Gt];Dt(ft[2]+I,ft[1]+I,ft[0]+I)}gt=h+m*2,I=H*gt;for(let Gt=0;Gt<B;Gt++){const ft=k[Gt];Dt(ft[0]+I,ft[1]+I,ft[2]+I)}}else{for(let gt=0;gt<B;gt++){const I=k[gt];Dt(I[2],I[1],I[0])}for(let gt=0;gt<B;gt++){const I=k[gt];Dt(I[0]+H*h,I[1]+H*h,I[2]+H*h)}}n.addGroup(nt,s.length/3-nt,0)}function dt(){const nt=s.length/3;let gt=0;Pt(F,gt),gt+=F.length;for(let I=0,Gt=P.length;I<Gt;I++){const ft=P[I];Pt(ft,gt),gt+=ft.length}n.addGroup(nt,s.length/3-nt,1)}function Pt(nt,gt){let I=nt.length;for(;--I>=0;){const Gt=I;let ft=I-1;ft<0&&(ft=nt.length-1);for(let Ut=0,ht=h+m*2;Ut<ht;Ut++){const Lt=H*Ut,It=H*(Ut+1),L=gt+Gt+Lt,C=gt+ft+Lt,q=gt+ft+It,tt=gt+Gt+It;qt(L,C,q,tt)}}}function ct(nt,gt,I){l.push(nt),l.push(gt),l.push(I)}function Dt(nt,gt,I){Wt(nt),Wt(gt),Wt(I);const Gt=s.length/3,ft=x.generateTopUV(n,s,Gt-3,Gt-2,Gt-1);Yt(ft[0]),Yt(ft[1]),Yt(ft[2])}function qt(nt,gt,I,Gt){Wt(nt),Wt(gt),Wt(Gt),Wt(gt),Wt(I),Wt(Gt);const ft=s.length/3,Ut=x.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);Yt(Ut[0]),Yt(Ut[1]),Yt(Ut[3]),Yt(Ut[1]),Yt(Ut[2]),Yt(Ut[3])}function Wt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function Yt(nt){o.push(nt.x),o.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return sx(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new sc[s.type]().fromJSON(s)),new xo(n,t.options)}}const ix={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new it(o,r),new it(a,l),new it(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],p=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[o*3],m=t[o*3+1],u=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new it(r,1-l),new it(c,1-d),new it(p,1-g),new it(v,1-u)]:[new it(a,1-l),new it(h,1-d),new it(f,1-g),new it(m,1-u)]}};function sx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class gn extends fa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gn(t.radius,t.detail)}}class Dc extends fa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Dc(t.radius,t.detail)}}class ir extends xe{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const p=(e-t)/s,f=new N,g=new it;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const u=o+m/n*r;f.x=d*Math.cos(u),f.y=d*Math.sin(u),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=p}for(let v=0;v<s;v++){const m=v*(n+1);for(let u=0;u<n;u++){const x=u+m,M=x,_=x+n+1,T=x+n+2,E=x+1;a.push(M,_,E),a.push(_,T,E)}}this.setIndex(a),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ic extends xe{constructor(t=new Es([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(r,2));function c(h){const d=s.length/3,p=h.extractPoints(e);let f=p.shape;const g=p.holes;ci.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,u=g.length;m<u;m++){const x=g[m];ci.isClockWise(x)===!0&&(g[m]=x.reverse())}const v=ci.triangulateShape(f,g);for(let m=0,u=g.length;m<u;m++){const x=g[m];f=f.concat(x)}for(let m=0,u=f.length;m<u;m++){const x=f[m];s.push(x.x,x.y,0),o.push(0,0,1),r.push(x.x,x.y)}for(let m=0,u=v.length;m<u;m++){const x=v[m],M=x[0]+d,_=x[1]+d,T=x[2]+d;n.push(M,_,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return ox(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new Ic(n,t.curveSegments)}}function ox(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Be extends xe{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],d=new N,p=new N,f=[],g=[],v=[],m=[];for(let u=0;u<=n;u++){const x=[],M=u/n;let _=0;u===0&&r===0?_=.5/e:u===n&&l===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){const E=T/e;d.x=-t*Math.cos(s+E*o)*Math.sin(r+M*a),d.y=t*Math.cos(r+M*a),d.z=t*Math.sin(s+E*o)*Math.sin(r+M*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),m.push(E+_,1-M),x.push(c++)}h.push(x)}for(let u=0;u<n;u++)for(let x=0;x<e;x++){const M=h[u][x+1],_=h[u][x],T=h[u+1][x],E=h[u+1][x+1];(u!==0||r>0)&&f.push(M,_,E),(u!==n-1||l<Math.PI)&&f.push(_,T,E)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rn extends xe{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new N,d=new N,p=new N;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*o,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,u=(s+1)*(f-1)+g,x=(s+1)*f+g;r.push(v,m,x),r.push(m,u,x)}this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $t extends Ss{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pd,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Uc extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Wd extends Uc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ja=new pe,Kh=new N,Zh=new N;class Xd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wc,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Kh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kh),Zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zh),e.updateMatrixWorld(),Ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rx extends Xd{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=vo*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ax extends Uc{constructor(t,e,n=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new rx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lx extends Xd{constructor(){super(new Ad(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $d extends Uc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new lx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Jh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Jh(){return performance.now()}const Qh=new pe;class qd{constructor(t,e,n=0,s=1/0){this.ray=new ha(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Qh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qh),this}intersectObject(t,e=!0,n=[]){return lc(t,this,n,e),n.sort(tu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)lc(t[s],this,n,e);return n.sort(tu),n}}function tu(i,t){return i.distance-t.distance}function lc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)lc(o[r],t,e,!0)}}class eu{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hx extends bs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);const nu={type:"change"},Nc={type:"start"},Yd={type:"end"},Ur=new ha,iu=new Wi,ux=Math.cos(70*_s.DEG2RAD),qe=new N,fn=2*Math.PI,Re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qa=1e-6;class dx extends hx{constructor(t,e=null){super(t,e),this.state=Re.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ro.ROTATE,MIDDLE:ro.DOLLY,RIGHT:ro.PAN},this.touches={ONE:eo.ROTATE,TWO:eo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new kn,this._lastTargetPosition=new N,this._quat=new kn().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new eu,this._sphericalDelta=new eu,this._scale=1,this._panOffset=new N,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new N,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=px.bind(this),this._onPointerDown=fx.bind(this),this._onPointerUp=mx.bind(this),this._onContextMenu=bx.bind(this),this._onMouseWheel=_x.bind(this),this._onKeyDown=xx.bind(this),this._onTouchStart=Mx.bind(this),this._onTouchMove=yx.bind(this),this._onMouseDown=gx.bind(this),this._onMouseMove=vx.bind(this),this._interceptControlDown=wx.bind(this),this._interceptControlUp=Sx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nu),this.update(),this.state=Re.NONE}update(t=null){const e=this.object.position;qe.copy(e).sub(this.target),qe.applyQuaternion(this._quat),this._spherical.setFromVector3(qe),this.autoRotate&&this.state===Re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=fn:n>Math.PI&&(n-=fn),s<-Math.PI?s+=fn:s>Math.PI&&(s-=fn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(qe.setFromSpherical(this._spherical),qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=qe.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Ur.origin.copy(this.object.position),Ur.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ur.direction))<ux?this.object.lookAt(this.target):(iu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ur.intersectPlane(iu,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Qa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qa||this._lastTargetPosition.distanceToSquared(this.target)>Qa?(this.dispatchEvent(nu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?fn/60*this.autoRotateSpeed*t:fn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){qe.setFromMatrixColumn(e,0),qe.multiplyScalar(-t),this._panOffset.add(qe)}_panUp(t,e){this.screenSpacePanning===!0?qe.setFromMatrixColumn(e,1):(qe.setFromMatrixColumn(e,0),qe.crossVectors(this.object.up,qe)),qe.multiplyScalar(t),this._panOffset.add(qe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;qe.copy(s).sub(this.target);let o=qe.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new it,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function fx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function px(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function mx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yd),this.state=Re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function gx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ro.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Re.DOLLY;break;case ro.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Re.ROTATE}break;case ro.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Re.PAN}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(Nc)}function vx(i){switch(this.state){case Re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function _x(i){this.enabled===!1||this.enableZoom===!1||this.state!==Re.NONE||(i.preventDefault(),this.dispatchEvent(Nc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Yd))}function xx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Mx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case eo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Re.TOUCH_ROTATE;break;case eo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Re.TOUCH_PAN;break;default:this.state=Re.NONE}break;case 2:switch(this.touches.TWO){case eo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Re.TOUCH_DOLLY_PAN;break;case eo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Re.TOUCH_DOLLY_ROTATE;break;default:this.state=Re.NONE}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(Nc)}function yx(i){switch(this._trackPointer(i),this.state){case Re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Re.NONE}}function bx(i){this.enabled!==!1&&i.preventDefault()}function wx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}async function Ex(i){const t=await fetch(i);if(!t.ok)throw new Error(`Failed to load ${i}: ${t.status}`);return t.json()}class Tx{constructor(t){D(this,"n");D(this,"x");D(this,"z");D(this,"s");D(this,"length");D(this,"vtx");D(this,"vtz");const e=this.n=t.length/2;this.x=new Float64Array(e),this.z=new Float64Array(e),this.s=new Float64Array(e);for(let n=0;n<e;n++)this.x[n]=t[n*2],this.z[n]=t[n*2+1],n>0&&(this.s[n]=this.s[n-1]+Math.hypot(this.x[n]-this.x[n-1],this.z[n]-this.z[n-1]));this.length=this.s[e-1],this.vtx=new Float64Array(e),this.vtz=new Float64Array(e);for(let n=0;n<e;n++){const s=Math.max(0,n-1),o=Math.min(e-1,n+1),r=this.x[o]-this.x[s],a=this.z[o]-this.z[s],l=Math.hypot(r,a)||1;this.vtx[n]=r/l,this.vtz[n]=a/l}}segIndex(t){let e=0,n=this.n-2;for(;e<n;){const s=e+n+1>>1;this.s[s]<=t?e=s:n=s-1}return e}frame(t,e={x:0,z:0,tx:0,tz:1,nx:-1,nz:0}){const n=this.segIndex(t),s=(t-this.s[n])/(this.s[n+1]-this.s[n]||1);e.x=this.x[n]+(this.x[n+1]-this.x[n])*s,e.z=this.z[n]+(this.z[n+1]-this.z[n])*s;let o=this.vtx[n]+(this.vtx[n+1]-this.vtx[n])*s,r=this.vtz[n]+(this.vtz[n+1]-this.vtz[n])*s;const a=Math.hypot(o,r)||1;return o/=a,r/=a,e.tx=o,e.tz=r,e.nx=-r,e.nz=o,e}point(t,e){const n=this.frame(t);return[n.x+n.nx*e,n.z+n.nz*e]}project(t,e,n=-1){let s,o;if(n>=0){const h=this.segIndex(n);s=Math.max(0,h-60),o=Math.min(this.n-2,h+60)}else{let h=1/0,d=0;for(let p=0;p<this.n;p+=8){const f=(t-this.x[p])**2+(e-this.z[p])**2;f<h&&(h=f,d=p)}s=Math.max(0,d-24),o=Math.min(this.n-2,d+24)}let r=1/0,a=0,l=1;for(let h=s;h<=o;h++){const d=this.x[h],p=this.z[h],f=this.x[h+1]-d,g=this.z[h+1]-p,v=f*f+g*g||1e-9;let m=((t-d)*f+(e-p)*g)/v;m=m<0?0:m>1?1:m;const u=d+f*m,x=p+g*m,M=(t-u)**2+(e-x)**2;M<r&&(r=M,a=this.s[h]+Math.sqrt(v)*m,l=(t-d)*-g+(e-p)*f>=0?1:-1)}const c=Math.sqrt(r);return{s:a,d:c*l,dist:c}}}function oi(i,t,e=0){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const su=i=>i*i*(3-2*i);function Ax(i,t,e=0){const n=Math.floor(i),s=Math.floor(t),o=su(i-n),r=su(t-s),a=oi(n,s,e),l=oi(n+1,s,e),c=oi(n,s+1,e),h=oi(n+1,s+1,e);return(a+(l-a)*o+(c-a)*r+(a-l-c+h)*o*r)*2-1}function qi(i,t,e=4,n=0){let s=0,o=.5,r=1;for(let a=0;a<e;a++)s+=o*Ax(i*r,t*r,n+a*17),o*=.5,r*=2.03;return s}function Di(i){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const ye=(i,t,e)=>i<t?t:i>e?e:i,wi=(i,t,e)=>i+(t-i)*e,Ee=(i,t,e)=>{const n=ye((e-i)/(t-i),0,1);return n*n*(3-2*n)},jd=i=>`${(Math.abs(i)*3.281).toFixed(1)} ft`,$n=5.2,$i=2.2,ou=1.75,cc=3.1,Cx=1.6,Rx=15,Nr=22*4.4,Px=.8,Lx=7,Dx=3,Ix=.04,ru=.08;class Ux{constructor(t,e,n,s=[],o=0,r=[]){D(this,"bodies",[]);D(this,"gates",[]);D(this,"groups",[]);D(this,"events",[]);D(this,"hwTable");D(this,"hwStep",.5);D(this,"overflowCooldown",0);this.length=n,this.windingHoles=s;const a=[];for(const f of[...t].sort((g,v)=>g.s0-v.s0)){const g=a.at(-1);g&&Math.abs(g.at(-1).s1-f.s0)<4?g.push(f):a.push([f])}let l=o,c=0,h=0;for(const f of a){const g=f.length>1,v=g?Nx(f):f[0].name;this.bodies.push({kind:"pound",s0:c,s1:f[0].s0,level:l,lo:l,hi:l,label:"the canal"});const m={name:v,staircase:g,gates:[],bodies:[this.bodies.length-1]};this.groups.push(m);for(let u=0;u<f.length;u++){const x=f[u],M=u===0?x.s0:f[u-1].s1,_=l,T=l+x.rise,E=g?u>0:h++%2===1,S=g?`chamber ${u+1}`:"the lock";this.bodies.push({kind:"chamber",s0:M,s1:x.s1,level:E?T:_,lo:_,hi:T,lockName:v,label:S}),m.bodies.push(this.bodies.length-1),l=T}c=f.at(-1).s1;for(let u=0;u<=f.length;u++){const x=this.bodies.length-1-f.length+u,M=u===0?"bottom gates":u===f.length?"top gates":f.length===2?"middle gates":f.length===3?`middle gates (${u===1?"lower":"upper"})`:`middle gates ${u}`,_={s:u===0?f[0].s0:f[u-1].s1,below:x,above:x+1,open:0,wantOpen:!1,paddle:0,wantPaddle:!1,flow:0,lockName:v,label:M,group:m};this.gates.push(_),m.gates.push(_)}m.bodies.push(this.bodies.length)}this.bodies.push({kind:"pound",s0:c,s1:n,level:l,lo:l,hi:l,label:"the canal"});const d=Math.ceil(n/this.hwStep)+1;this.hwTable=new Float32Array(d);const p=e.filter(f=>f.kind==="road"&&f.w<12);for(let f=0;f<d;f++){const g=f*this.hwStep;let v=$n;for(const m of this.bodies){if(m.kind!=="chamber")continue;const u=Math.max(m.s0-g,g-m.s1,0);v=Math.min(v,$i+($n-$i)*Ee(.5,9,u))}for(const m of p){const u=Math.max(Math.abs(g-m.s)-m.w/2-3.5,0);v=Math.min(v,cc+($n-cc)*Ee(0,7,u))}for(const m of s){const u=Math.abs(g-m);u<40&&(v=Math.max(v,$n+(Rx-$n)*Ee(40,16,u)))}for(const[m,u]of r){const x=Math.max(m-g,g-u,0);v=Math.min(v,ou+($n-ou)*Ee(0,14,x))}this.hwTable[f]=v}}bodyIndexAt(t){for(let e=0;e<this.bodies.length;e++)if(t<this.bodies[e].s1)return e;return this.bodies.length-1}levelAt(t){return this.bodies[this.bodyIndexAt(t)].level}bedAt(t){return this.bodies[this.bodyIndexAt(t)].lo-Cx}halfWidthAt(t){const e=ye(t/this.hwStep,0,this.hwTable.length-1),n=Math.floor(e),s=e-n,o=this.hwTable[n],r=this.hwTable[Math.min(n+1,this.hwTable.length-1)];return o+(r-o)*s}levelsMatch(t){return Math.abs(this.bodies[t.below].level-this.bodies[t.above].level)<Ix}openBlocker(t){if(this.levelsMatch(t))return null;const e=Math.abs(this.bodies[t.below].level-this.bodies[t.above].level);return`The water's ${jd(e)} higher on one side, so the gates won't budge. Raise the paddles first.`}toggleGate(t,e){if(t.wantOpen)return e?"The boat's in the way of the gates.":(t.wantOpen=!1,null);const n=this.openBlocker(t);return n||(t.wantOpen=!0,null)}togglePaddle(t){t.wantPaddle=!t.wantPaddle}gateBlocks(t){return t.open<.97}update(t){this.overflowCooldown-=t;for(const n of this.gates)n.open=ye(n.open+(n.wantOpen?1:-1)*(t/Lx),0,1),n.paddle=ye(n.paddle+(n.wantPaddle?1:-1)*(t/Dx),0,1);const e=this.bodies.map(n=>n.kind==="chamber"?n.lo:-1/0);for(let n=!0;n;){n=!1;for(const s of this.gates){if(s.open<=.02)continue;const o=Math.max(e[s.below],e[s.above]);(e[s.below]!==o||e[s.above]!==o)&&(e[s.below]=e[s.above]=o,n=!0)}}for(const n of this.gates){const s=Px*n.paddle+(n.open>.02?40*n.open:0),o=this.bodies[n.below],a=this.bodies[n.above].level-o.level;if(n.flow=0,s<=0||Math.abs(a)<1e-5)continue;const[l,c]=a>0?[n.above,n.below]:[n.below,n.above],h=this.bodies[l],d=this.bodies[c],p=h.kind==="chamber",f=d.kind==="chamber";if(!p&&!f)continue;let g=s*Math.sqrt(2*9.81*Math.abs(a))*t;p&&(g=Math.min(g,Math.max(0,h.level-e[l])*Nr)),g=Math.min(g,Math.abs(a)*Nr/(p&&f?2:1)),!(g<=0)&&(p&&(h.level-=g/Nr),f&&(d.level+=g/Nr),n.flow=Math.sign(a)*(g/t))}this.bodies.forEach((n,s)=>{if(n.kind!=="chamber"||n.level<=n.hi+ru||(n.level=n.hi+ru,this.overflowCooldown>0))return;const o=this.gates.find(l=>l.paddle>.05&&(l.below===s&&this.bodies[l.above].level>n.level||l.above===s&&this.bodies[l.below].level>n.level)),r=this.gates.find(l=>l.below===s||l.above===s).group,a=r.staircase?`${n.label} of ${r.name}`:r.name;this.events.push({text:o?`${au(a)} is overflowing: the paddles on the ${o.label} are still up.`:`${au(a)} is overflowing!`,kind:"warn",group:r}),this.overflowCooldown=12})}}const au=i=>i[0].toUpperCase()+i.slice(1);function Nx(i){const t=i[0].name.split(" ")[0];return i.every(e=>e.name.startsWith(t))?`${t} Staircase`:`${i[0].name} flight`}const kx=2,tl=1.1,el=44,kr=8,Ox=.8,Yi=16,Xt=1,pn={bed:new Vt("#2a2f24"),wallStone:new Vt("#77706a"),wallSandstone:new Vt("#9b5644"),coping:new Vt("#bdb3a3"),towpath:new Vt("#b59d78"),grass:new Vt("#6f9a4c"),grassDark:new Vt("#5c8a42"),field:new Vt("#86a85a"),paved:new Vt("#8f8b84"),park:new Vt("#5e9445")};class Fx{constructor(t,e,n,s){D(this,"bank");D(this,"smoothBank");D(this,"bankStep",2);D(this,"riverLevel");D(this,"riverDist",null);D(this,"riverGrid",{x0:0,z0:0,w:0,h:0,cell:20});D(this,"urbanAt",()=>0);D(this,"parkAt",()=>!1);D(this,"embankments",[]);D(this,"cuttings",[]);this.route=t,this.ww=e,this.bounds=n,this.valley=s;const o=Math.ceil(t.length/this.bankStep)+1,r=new Float32Array(o);for(let a=0;a<o;a++){const l=a*this.bankStep;let c=-1/0;for(const h of e.bodies)h.s1>l-4&&h.s0<l+4&&(c=Math.max(c,h.hi));r[a]=c+Ox}this.bank=r,this.smoothBank=cu(cu(r,15),15),this.riverLevel=e.bodies[0].lo-(s?s.depth-1:6)}bankTop(t){return lu(this.bank,t/this.bankStep)}setRivers(t){const{bounds:e}=this,n=this.riverGrid.cell,s=Math.ceil((e.x1-e.x0)/n)+1,o=Math.ceil((e.z1-e.z0)/n)+1;this.riverGrid={x0:e.x0,z0:e.z0,w:s,h:o,cell:n};const r=new Float32Array(s*o).fill(1e9);for(const a of t)for(let l=0;l+3<a.p.length;l+=2){const c=a.p[l],h=a.p[l+1],d=a.p[l+2],p=a.p[l+3],f=120,g=Math.max(0,Math.floor((Math.min(c,d)-f-e.x0)/n)),v=Math.min(s-1,Math.ceil((Math.max(c,d)+f-e.x0)/n)),m=Math.max(0,Math.floor((Math.min(h,p)-f-e.z0)/n)),u=Math.min(o-1,Math.ceil((Math.max(h,p)+f-e.z0)/n));for(let x=m;x<=u;x++)for(let M=g;M<=v;M++){const _=Bx(e.x0+M*n,e.z0+x*n,c,h,d,p)-a.w/2;_<r[x*s+M]&&(r[x*s+M]=_)}}this.riverDist=r}riverDistAt(t,e){if(!this.riverDist)return 1e9;const n=this.riverGrid,s=ye((t-n.x0)/n.cell,0,n.w-1.001),o=ye((e-n.z0)/n.cell,0,n.h-1.001),r=Math.floor(s),a=Math.floor(o),l=s-r,c=o-a,h=this.riverDist;return wi(wi(h[a*n.w+r],h[a*n.w+r+1],l),wi(h[(a+1)*n.w+r],h[(a+1)*n.w+r+1],l),c)}cliffSide(t,e){return this.cuttings.some(n=>n.side===e&&t>n.s0-25&&t<n.s1+25)}cuttingAt(t,e){for(const n of this.cuttings){if(t<n.s0-40||t>n.s1+40)continue;const s=Ee(n.s0-30,n.s0+15,t)*(1-Ee(n.s1-15,n.s1+30,t)),o=this.ww.halfWidthAt(t),r=Math.abs(e);if(Math.sign(e)===n.side){const l=Ee(o+3.3,o+6.2,r);return{h:n.cliff*l*s,cliff:s*(r>o+3.2&&r<o+6.5?1:0)}}const a=Ee(o+3.6,o+16,r);return{h:n.far*a*s,cliff:s*(a>.05&&a<.6?.7:0)}}return{h:0,cliff:0}}landHeight(t,e,n,s){const o=this.ww.halfWidthAt(n),r=Math.abs(s);let a=wi(this.bankTop(n),lu(this.smoothBank,n/this.bankStep),Ee(o+3,o+24,r));const l=Ee(o+6,140,r);if(a+=qi(t*.004,e*.004,3,7)*3.5*l+qi(t*.03,e*.03,2,3)*.35*Ee(o+3,o+12,r),this.valley){const h=this.valley,d=Ee(h.s0-10,h.s0+100,n)*(1-Ee(h.s1-100,h.s1+10,n)),p=Ee(h.s0-400,h.s0,n)*(1-Ee(h.s1,h.s1+400,n))*Ee(60,220,r);a-=h.depth*Math.max(d*Ee(o+2.7,o+9,r),p)}const c=this.riverDistAt(t,e);c<40&&(a=wi(this.riverLevel-1.5,a,Ee(-2,40,c))),a+=this.cuttingAt(n,s).h;for(const h of this.embankments){const d=t-h.x,p=e-h.z;if(Math.abs(d)+Math.abs(p)>h.halfSpan+60)continue;const f=Math.abs(d*h.ux+p*h.uz),g=Math.abs(-d*h.uz+p*h.ux),v=Ee(h.halfWidth+5,h.halfWidth,g);if(v<=0)continue;const m=h.deck-.15-Math.max(0,f-h.halfSpan*.9)/10;m>a&&(a=a+(m-a)*v)}return a}get hasAqueduct(){return!!this.valley}nearAqueduct(t,e=15){return!!this.valley&&t>this.valley.s0-e&&t<this.valley.s1+e}aqueductCore(t){const e=this.valley;return e?Ee(e.s0+Yi-6,e.s0+Yi,t)*(1-Ee(e.s1-Yi,e.s1-Yi+6,t)):0}floorUnder(t,e,n,s){const o=this.ww.halfWidthAt(n)+9;return this.landHeight(t,e,n,(Math.sign(s)||1)*Math.max(Math.abs(s),o))}heightAt(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s),o=this.aqueductCore(n.s);return o>0&&n.dist<s+9?wi(n.dist<s?this.ww.bedAt(n.s):this.landHeight(t,e,n.s,n.d),this.floorUnder(t,e,n.s,n.d),o):n.dist<s?this.ww.bedAt(n.s):this.landHeight(t,e,n.s,n.d)}buildStrip(){const{route:t,ww:e}=this,n=[];for(let g=0;g<t.length;g+=kx)n.push(g);n.push(t.length);for(const g of e.gates)n.push(g.s-.05,g.s+.05,g.s+tl-.05,g.s+tl+.05);n.sort((g,v)=>g-v);const s=n.length,o=g=>[[0,"bed"],[g-.8,"bed"],[g,"wallBase"],[g,"wallTop"],[g+.5,"coping"],[g+.55,"path"],[g+2.6,"path"],[g+3.4,"land"],[g+6.3,"land"],[g+7,"land"],[Math.max(14,g+9),"land"],[Math.max(22,g+15),"land"],[Math.max(32,g+24),"land"],[Math.max(el,g+34),"land"]],r=o($n).length,a=r*2-1,l=new Float32Array(s*a*3),c=new Float32Array(s*a*3),h={x:0,z:0,tx:0,tz:0,nx:0,nz:0},d=new Vt;for(let g=0;g<s;g++){const v=n[g];t.frame(v,h);const m=e.halfWidthAt(v),u=this.bankTop(v),x=e.gates.find(R=>v>=R.s&&v<R.s+tl),M=e.bedAt(x?x.s-.01:v),_=this.nearAqueduct(v,30),T=e.bodies[e.bodyIndexAt(v)].kind==="chamber"||m<$n-.5&&!_,E=zx(t,v),S=o(m);for(let R=0;R<a;R++){const w=R<r-1?-1:1,y=w<0?r-1-R:R-(r-1);let[P,A]=S[y];A==="land"&&Math.abs(E)>1e-4&&Math.sign(E)===w&&(P=Math.min(P,Math.max(m+3.6,.8/Math.abs(E))));const k=h.x+h.nx*P*w,F=h.z+h.nz*P*w,W=w===Xt||T;let H;switch(A){case"bed":H=M,d.copy(pn.bed);break;case"wallBase":H=M+.2,d.copy(T?pn.wallSandstone:pn.wallStone);break;case"wallTop":H=u,d.copy(T?pn.wallSandstone:pn.wallStone);break;case"coping":H=u+.04,d.copy(pn.coping);break;case"path":H=u,d.copy(W?pn.towpath:pn.grassDark);break;default:H=this.landHeight(k,F,v,P*w),this.groundColour(k,F,v,P*w,d)}A==="path"&&W&&d.offsetHSL(0,0,(oi(g,R,5)-.5)*.04);const B=this.aqueductCore(v);B>0&&(H=wi(H,this.floorUnder(k,F,v,P*w),B),B>.5&&this.groundColour(k,F,v,(Math.sign(P*w)||1)*Math.max(P,m+9),d));const G=(g*a+R)*3;l[G]=k,l[G+1]=H,l[G+2]=F,c[G]=d.r,c[G+1]=d.g,c[G+2]=d.b}}const p=hu(l,c,s,a,!0),f=new $(p,du());return f.receiveShadow=!0,f.name="strip",f}buildFar(){const{bounds:t,route:e,ww:n}=this,s=Math.ceil((t.x1-t.x0)/kr)+1,o=Math.ceil((t.z1-t.z0)/kr)+1,r=new Float32Array(s*o*3),a=new Float32Array(s*o*3),l=new Vt;let c=-1;for(let p=0;p<o;p++)for(let f=0;f<s;f++){const g=t.x0+f*kr,v=t.z0+p*kr,m=e.project(g,v,c),u=m.dist>150?e.project(g,v):m;c=u.dist<150?u.s:-1;const x=n.halfWidthAt(u.s);let M;u.dist<x+14?M=n.bedAt(u.s)-3:u.dist<el?M=this.landHeight(g,v,u.s,u.d)-.15:M=this.landHeight(g,v,u.s,u.d);const _=this.aqueductCore(u.s);_>0&&u.dist<el&&(M=wi(M,this.floorUnder(g,v,u.s,u.d)-.15,_)),this.groundColour(g,v,u.s,u.d,l);const T=(p*s+f)*3;r[T]=g,r[T+1]=M,r[T+2]=v,a[T]=l.r,a[T+1]=l.g,a[T+2]=l.b}const h=hu(r,a,o,s),d=new $(h,du());return d.receiveShadow=!0,d.name="far-terrain",d}groundColour(t,e,n,s,o){const r=Math.abs(s),a=Math.floor(t/150+qi(t*.01,e*.01,2,1)*.6),l=Math.floor(e/130+qi(t*.01,e*.01,2,2)*.6),c=oi(a,l,11);o.copy(pn.grass).lerp(pn.field,c*.8),o.offsetHSL(0,0,(oi(Math.floor(t/4),Math.floor(e/4),3)-.5)*.035),this.parkAt(t,e)&&o.lerp(pn.park,.7);const h=this.urbanAt(t,e)*Ee(8,20,r);o.lerp(pn.paved,h*.85);const d=this.riverDistAt(t,e);d<12&&o.lerp(pn.bed,Ee(12,0,d)*.5);const p=this.cuttingAt(n,s);p.cliff>0&&o.lerp(pn.wallSandstone,p.cliff).offsetHSL(0,0,(oi(Math.floor(t/2),Math.floor(e/3),8)-.5)*.06)}}function zx(i,t){const e=i.frame(Math.max(0,t-8)),n=i.frame(Math.min(i.length,t+8)),s=n.tx-e.tx,o=n.tz-e.tz,r=i.frame(t);return(s*r.nx+o*r.nz)/16}function lu(i,t){t=ye(t,0,i.length-1);const e=Math.floor(t);return wi(i[e],i[Math.min(e+1,i.length-1)],t-e)}function cu(i,t){const e=new Float32Array(i.length);for(let n=0;n<i.length;n++){let s=0,o=0;for(let r=-t;r<=t;r++){const a=n+r;a>=0&&a<i.length&&(s+=i[a],o++)}e[n]=s/o}return e}function Bx(i,t,e,n,s,o){const r=s-e,a=o-n,l=ye(((i-e)*r+(t-n)*a)/(r*r+a*a||1),0,1);return Math.hypot(i-e-r*l,t-n-a*l)}function hu(i,t,e,n,s=!1){const o=new Uint32Array((e-1)*(n-1)*6);let r=0;for(let l=0;l<e-1;l++)for(let c=0;c<n-1;c++){const h=l*n+c,d=h+1,p=h+n,f=p+1;s?(o[r++]=h,o[r++]=d,o[r++]=p,o[r++]=d,o[r++]=f,o[r++]=p):(o[r++]=h,o[r++]=p,o[r++]=d,o[r++]=d,o[r++]=p,o[r++]=f)}const a=new xe;return a.setAttribute("position",new We(i,3)),a.setAttribute("color",new We(t,3)),a.setIndex(new We(o,1)),a.computeVertexNormals(),a}let uu=null;function du(){return uu??(uu=new $t({vertexColors:!0,roughness:.95,flatShading:!0})),uu}function Hx(i=256){const t=new Float32Array(i*i),e=8;for(let r=0;r<i;r++)for(let a=0;a<i;a++){const l=a/i*e,c=r/i*e;t[r*i+a]=fu(l,c,e)*.6+fu(l*2,c*2,e*2)*.3}const n=new ImageData(i,i);for(let r=0;r<i;r++)for(let a=0;a<i;a++){const l=t[r*i+(a-1+i)%i],c=t[r*i+(a+1)%i],h=t[(r-1+i)%i*i+a],d=t[(r+1)%i*i+a],p=(l-c)*3,f=(h-d)*3,g=1,v=Math.hypot(p,f,g),m=(r*i+a)*4;n.data[m]=(p/v*.5+.5)*255,n.data[m+1]=(f/v*.5+.5)*255,n.data[m+2]=(g/v*.5+.5)*255,n.data[m+3]=255}const s=document.createElement("canvas");s.width=s.height=i,s.getContext("2d").putImageData(n,0,0);const o=new On(s);return o.wrapS=o.wrapT=po,o}function fu(i,t,e){const n=i/e,s=t/e,o=qi(i,t,3,2),r=qi(i-e,t,3,2),a=qi(i,t-e,3,2),l=qi(i-e,t-e,3,2);return(o*(1-n)+r*n)*(1-s)+(a*(1-n)+l*n)*s}class Gx{constructor(t,e){D(this,"group",new bt);D(this,"material");D(this,"normalMap");D(this,"chamberMeshes",[]);this.route=t,this.ww=e,this.normalMap=Hx(),this.material=new $t({color:"#3d5c47",roughness:.12,metalness:0,normalMap:this.normalMap,normalScale:new it(.28,.28),transparent:!0,opacity:.93,envMapIntensity:.9}),e.bodies.forEach((n,s)=>{const o=this.ribbon(n.s0-.15,n.s1+.15),r=new $(o,this.material);r.position.y=n.level,r.receiveShadow=!0,this.group.add(r),n.kind==="chamber"&&this.chamberMeshes.push({mesh:r,body:s})})}ribbon(t,e){const{route:n,ww:s}=this;t=Math.max(0,t),e=Math.min(n.length,e);const o=Math.max(2,Math.ceil((e-t)/1.5)+1),r=[],a=[],l=[];for(let h=0;h<o;h++){const d=t+(e-t)*h/(o-1),p=n.frame(d),f=s.halfWidthAt(d)+.12;for(const g of[-1,1]){const v=p.x+p.nx*f*g,m=p.z+p.nz*f*g;r.push(v,0,m),a.push(v/7,m/7)}if(h>0){const g=(h-1)*2;l.push(g,g+1,g+2,g+1,g+3,g+2)}}const c=new xe;return c.setAttribute("position",new Zt(r,3)),c.setAttribute("uv",new Zt(a,2)),c.setIndex(l),c.computeVertexNormals(),c}addRivers(t,e){for(const n of t){const s=[],o=[],r=[],a=n.p.length/2;for(let h=0;h<a;h++){const d=Math.max(0,h-1),p=Math.min(a-1,h+1);let f=n.p[p*2]-n.p[d*2],g=n.p[p*2+1]-n.p[d*2+1];const v=Math.hypot(f,g)||1;f/=v,g/=v;for(const m of[-1,1]){const u=n.p[h*2]-g*(n.w/2)*m,x=n.p[h*2+1]+f*(n.w/2)*m;s.push(u,e,x),o.push(u/7,x/7)}if(h>0){const m=(h-1)*2;r.push(m,m+2,m+1,m+1,m+2,m+3)}}const l=new xe;l.setAttribute("position",new Zt(s,3)),l.setAttribute("uv",new Zt(o,2)),l.setIndex(r),l.computeVertexNormals();const c=this.material.clone();c.side=Ie,c.color.set("#4a6a5c"),this.group.add(new $(l,c))}}addPond(t,e){const n=new Es;for(let l=0;l<t.length;l+=2)(l?n.lineTo:n.moveTo).call(n,t[l],-t[l+1]);const s=new Ic(n);s.rotateX(-Math.PI/2);const o=s.getAttribute("position"),r=s.getAttribute("uv");for(let l=0;l<o.count;l++)r.setXY(l,o.getX(l)/7,o.getZ(l)/7);const a=new $(s,this.material);a.position.y=e,this.group.add(a)}update(t){this.normalMap.offset.x+=t*.012,this.normalMap.offset.y+=t*.007;for(const e of this.chamberMeshes)e.mesh.position.y=this.ww.bodies[e.body].level}}const Qo=["brick","brickDark","render","whiteRender","tudor","sandstone","warehouse","modern","gothic","tower","shed","white"],ge={house:0,shop:1,upper:2,plain:3},qn=128,hc=4,Or=3,Vx=3.6,Wx=3.1;function nl(i,t,e,n,s,o,r,a=.08){i.fillStyle=o,i.fillRect(t,e,n,s);for(let l=0;l*6<s;l++)for(let c=-1;c*14<n;c++){const h=t+c*14+l%2*7,d=e+l*6,p=1+Math.sin(l*12.9+c*78.2)*.5*a*2;i.fillStyle=tr(o,p),i.fillRect(h+1,d+1,12,4)}i.fillStyle=r,i.globalAlpha=.25;for(let l=e;l<e+s;l+=6)i.fillRect(t,l,n,1);i.globalAlpha=1}function tr(i,t){const e=new Vt(i);return e.multiplyScalar(t),`#${e.getHexString()}`}function il(i,t,e,n,s,o="#f4f1e8",r="#d9cfbd"){const a=t-n/2;i.fillStyle=r,i.fillRect(a-4,e-7,n+8,6),i.fillRect(a-3,e+s,n+6,4),i.fillStyle=o,i.fillRect(a,e,n,s);const l=i.createLinearGradient(0,e,0,e+s);l.addColorStop(0,"#5d7486"),l.addColorStop(1,"#22303b"),i.fillStyle=l,i.fillRect(a+4,e+4,n-8,s/2-5),i.fillRect(a+4,e+s/2+1,n-8,s/2-5),i.fillStyle=o,i.fillRect(t-1,e+4,2,s-8)}function Xx(i,t,e,n,s,o){i.fillStyle="#e9e2d2",i.fillRect(t-3,e-s-4,n+6,s+4),i.fillStyle=o,i.fillRect(t,e-s,n,s),i.fillStyle="#2a3640",i.beginPath(),i.arc(t+n/2,e-s,n/2,Math.PI,0),i.fill(),i.fillStyle="#c9a24a",i.fillRect(t+n-8,e-s/2,3,3)}function pu(i,t,e,n,s,o){i.fillStyle=o,i.fillRect(t+2,e+18,n-4,16),i.fillStyle="#f2e6c4",i.globalAlpha=.85,i.fillRect(t+14,e+23,n-28,5),i.globalAlpha=1,i.fillStyle=tr(o,.8),i.fillRect(t+4,e+36,n-8,s-38);const r=i.createLinearGradient(0,e+40,0,e+s);r.addColorStop(0,"#6c8596"),r.addColorStop(1,"#2b3943"),i.fillStyle=r,i.fillRect(t+9,e+40,n-18,s-58),i.fillStyle=tr(o,.8),i.fillRect(t+n/2-2,e+40,4,s-58)}function sl(i,t,e,n,s,o="#2b3943",r="#d9cfbd"){i.fillStyle=r,i.beginPath(),i.moveTo(t-n/2-3,e+s+3),i.lineTo(t-n/2-3,e+n/2),i.arc(t,e+n/2,n/2+3,Math.PI,0),i.lineTo(t+n/2+3,e+s+3),i.fill(),i.fillStyle=o,i.beginPath(),i.moveTo(t-n/2,e+s),i.lineTo(t-n/2,e+n/2),i.arc(t,e+n/2,n/2,Math.PI,0),i.lineTo(t+n/2,e+s),i.fill()}function $x(i,t,e,n,s){i.fillStyle="#d6b49a",i.beginPath(),i.moveTo(t-n/2-4,e+s+4),i.lineTo(t-n/2-4,e+n),i.quadraticCurveTo(t-n/2-4,e-6,t,e-10),i.quadraticCurveTo(t+n/2+4,e-6,t+n/2+4,e+n),i.lineTo(t+n/2+4,e+s+4),i.fill(),i.fillStyle="#2a3440",i.beginPath(),i.moveTo(t-n/2,e+s),i.lineTo(t-n/2,e+n),i.quadraticCurveTo(t-n/2,e,t,e-4),i.quadraticCurveTo(t+n/2,e,t+n/2,e+n),i.lineTo(t+n/2,e+s),i.fill(),i.fillStyle="#8a6a55",i.fillRect(t-1,e,2,s)}function qx(i,t,e,n,s){const o=qn,r=["#1f4d3a","#7a1f2b","#1d3557","#2b2b2b","#5a3d1e"],a=r[Qo.indexOf(t)%r.length];switch(t){case"brick":case"brickDark":case"render":case"whiteRender":{const l={brick:"#a2513f",brickDark:"#7d3f31",render:"#e6dcc8",whiteRender:"#f1ede4"}[t];t.startsWith("brick")?nl(i,n,s,o,o,l,"#d8cdb8"):(i.fillStyle=l,i.fillRect(n,s,o,o)),e===ge.upper?il(i,n+o/2,s+30,46,66):e===ge.house?(Xx(i,n+18,s+o-6,34,78,["#1f4d3a","#7a1f2b","#1d3557","#2b2b2b"][n/o%4|0]),il(i,n+92,s+38,40,58)):e===ge.shop&&pu(i,n,s,o,o,a),i.fillStyle=tr(l,.75),i.fillRect(n,s+o-4,o,4);break}case"tudor":{i.fillStyle="#f4f1ea",i.fillRect(n,s,o,o),i.fillStyle="#1e1b19";for(const l of[0,60,120])i.fillRect(n+l,s,8,o);if(i.fillRect(n,s+4,o,7),i.fillRect(n,s+o-10,o,8),e===ge.upper){i.lineWidth=6,i.strokeStyle="#1e1b19",i.beginPath(),i.moveTo(n+8,s+o-10),i.lineTo(n+30,s+70),i.moveTo(n+120,s+o-10),i.lineTo(n+98,s+70),i.stroke(),i.fillStyle="#2a3440",i.fillRect(n+30,s+22,68,42),i.strokeStyle="#8a8d8a",i.lineWidth=1;for(let l=0;l<9;l++)i.beginPath(),i.moveTo(n+30+l*9,s+22),i.lineTo(n+30+l*9-20,s+64),i.stroke()}else e!==ge.plain&&pu(i,n+8,s+10,o-16,o-18,"#1e1b19");break}case"sandstone":case"gothic":case"tower":{const l=t==="tower"?"#7d3f31":"#b5735a";if(t==="tower")nl(i,n,s,o,o,l,"#c8b8a0");else{i.fillStyle=l,i.fillRect(n,s,o,o),i.strokeStyle=tr(l,.82),i.lineWidth=1;for(let c=0;c*16<o;c++){i.beginPath(),i.moveTo(n,s+c*16),i.lineTo(n+o,s+c*16),i.stroke();for(let h=0;h*32<o;h++){const d=n+h*32+c%2*16;i.beginPath(),i.moveTo(d,s+c*16),i.lineTo(d,s+c*16+16),i.stroke()}}}if(e===ge.plain)break;t==="gothic"?$x(i,n+o/2,s+24,40,96):t==="tower"?(i.fillStyle="#1f2730",i.fillRect(n+o/2-5,s+40,10,34)):il(i,n+o/2,s+34,40,60,"#e9e2d2","#c49a80");break}case"warehouse":{if(nl(i,n,s,o,o,"#80402f","#c9b8a0"),e===ge.plain)break;e===ge.upper?(sl(i,n+36,s+34,30,52),sl(i,n+92,s+34,30,52)):sl(i,n+o/2,s+26,62,o-30,"#2e3b2c");break}case"modern":{i.fillStyle="#b9bcbf",i.fillRect(n,s,o,o),i.fillStyle="#a6a9ad";for(let c=0;c<o;c+=32)i.fillRect(n+c,s,2,o);if(e===ge.plain)break;const l=i.createLinearGradient(0,s+26,0,s+100);l.addColorStop(0,"#7f97a8"),l.addColorStop(1,"#30404c"),i.fillStyle=l,i.fillRect(n,s+(e===ge.upper?28:18),o,e===ge.upper?62:104),i.fillStyle="#d6d8da";for(let c=0;c<o;c+=32)i.fillRect(n+c,s+18,3,110);break}case"shed":{i.fillStyle="#7b7f78",i.fillRect(n,s,o,o),i.fillStyle="#6c706a";for(let l=0;l<o;l+=8)i.fillRect(n+l,s,3,o);break}case"white":i.fillStyle="#ffffff",i.fillRect(n,s,o,o);break}}let ol=null;function Yx(){if(ol)return ol.material;const i=document.createElement("canvas");i.width=qn*hc,i.height=qn*Qo.length;const t=i.getContext("2d");Qo.forEach((s,o)=>{for(let r=0;r<hc;r++)qx(t,s,r,r*qn,o*qn)});const e=new On(i);e.colorSpace=Oe,e.anisotropy=4;const n=new $t({map:e,vertexColors:!0,roughness:.88});return n.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 cell;
varying vec4 vCell;
varying vec2 vRep;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vCell = cell;
vRep = uv;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vCell;
varying vec2 vRep;`).replace("#include <map_fragment>",`// repeat this wall's atlas cell; gradients from the unwrapped coords avoid seams
        vec2 cellUv = vCell.xy + fract(vRep) * vCell.zw;
        vec4 sampledDiffuseColor = textureGrad(map, cellUv, dFdx(vRep) * vCell.zw, dFdy(vRep) * vCell.zw);
        diffuseColor *= sampledDiffuseColor;`)},ol={texture:e,material:n},n}function js(i,t){const e=Qo.indexOf(i),n=qn*hc,s=qn*Qo.length,o=(t*qn+Or)/n,r=(qn-2*Or)/n,a=1-((e+1)*qn-Or)/s,l=(qn-2*Or)/s;return[o,a,r,l]}const rl={slate:["#4d525b","#585d66","#43474f"],tile:["#7d3d30","#8a4a37"],flat:["#6a6a68","#757370"]},al=(i,t)=>i[Math.floor(t*i.length)%i.length];class jx{constructor(t){D(this,"cell",3);D(this,"w");D(this,"h");D(this,"data");this.b=t,this.w=Math.ceil((t.x1-t.x0)/this.cell),this.h=Math.ceil((t.z1-t.z0)/this.cell),this.data=new Uint8Array(this.w*this.h)}mark(t,e,n){const s=this.cell;for(let o=Math.floor((e-n-this.b.z0)/s);o<=Math.floor((e+n-this.b.z0)/s);o++)for(let r=Math.floor((t-n-this.b.x0)/s);r<=Math.floor((t+n-this.b.x0)/s);r++)r>=0&&o>=0&&r<this.w&&o<this.h&&(this.data[o*this.w+r]=1)}markPolygon(t){let e=1/0,n=-1/0,s=1/0,o=-1/0;for(let a=0;a<t.length;a+=2)e=Math.min(e,t[a]),n=Math.max(n,t[a]),s=Math.min(s,t[a+1]),o=Math.max(o,t[a+1]);const r=this.cell;for(let a=s-r;a<=o+r;a+=r)for(let l=e-r;l<=n+r;l+=r)kc(l,a,t)&&this.mark(l,a,2)}used(t,e){const n=Math.floor((t-this.b.x0)/this.cell),s=Math.floor((e-this.b.z0)/this.cell);return n<0||s<0||n>=this.w||s>=this.h||this.data[s*this.w+n]===1}}function kc(i,t,e){let n=!1;for(let s=0,o=e.length-2;s<e.length;o=s,s+=2){const r=e[s],a=e[s+1],l=e[o],c=e[o+1];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function Kx(i,t){const n=Math.ceil((t.x1-t.x0)/30)+1,s=Math.ceil((t.z1-t.z0)/30)+1,o=new Float32Array(n*s);for(const a of i){let l=0,c=0,h=0;const d=a.p,p=d.length/2;for(let v=0;v<p;v++){const m=(v+1)%p;l+=d[v*2]*d[m*2+1]-d[m*2]*d[v*2+1],c+=d[v*2]/p,h+=d[v*2+1]/p}const f=Math.floor((c-t.x0)/30),g=Math.floor((h-t.z0)/30);f>=0&&g>=0&&f<n&&g<s&&(o[g*n+f]+=Math.abs(l)/2)}const r=new Float32Array(n*s);for(let a=0;a<s;a++)for(let l=0;l<n;l++){let c=0;for(let h=-1;h<=1;h++)for(let d=-1;d<=1;d++){const p=Math.min(n-1,Math.max(0,l+d)),f=Math.min(s-1,Math.max(0,a+h));c+=o[f*n+p]}r[a*n+l]=Math.min(1,c/9/(30*30)*3)}return(a,l)=>{const c=Math.floor((a-t.x0)/30),h=Math.floor((l-t.z0)/30);return c<0||h<0||c>=n||h>=s?0:r[h*n+c]}}class Oo{constructor(){D(this,"pos",[]);D(this,"col",[]);D(this,"nrm",[]);D(this,"uv",[]);D(this,"cell",[]);D(this,"curCell",[0,0,0,0]);D(this,"a",new N);D(this,"b",new N);D(this,"n",new N)}tri(t,e,n,s,o,r){if(this.a.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),this.b.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),this.n.crossVectors(this.a,this.b).normalize(),o){const a=(t[0]+e[0]+n[0])/3-o[0],l=(t[1]+e[1]+n[1])/3-o[1],c=(t[2]+e[2]+n[2])/3-o[2];this.n.x*a+this.n.y*l+this.n.z*c<0&&([e,n]=[n,e],r&&(r=[r[0],r[2],r[1]]),this.n.negate())}[t,e,n].forEach((a,l)=>{this.pos.push(a[0],a[1],a[2]),this.col.push(s.r,s.g,s.b),this.nrm.push(this.n.x,this.n.y,this.n.z);const c=(r==null?void 0:r[l])??[.5,.5];this.uv.push(c[0],c[1]),this.cell.push(...this.curCell)})}geometry(){const t=new xe;return t.setAttribute("position",new Zt(this.pos,3)),t.setAttribute("normal",new Zt(this.nrm,3)),t.setAttribute("color",new Zt(this.col,3)),t.setAttribute("uv",new Zt(this.uv,2)),t.setAttribute("cell",new Zt(this.cell,4)),t}}class Zx{constructor(t,e,n,s,o){D(this,"group",new bt);D(this,"occ");D(this,"roofs");D(this,"carPaths",[]);this.data=t,this.route=e,this.ww=n,this.terrain=s,this.bridges=o,this.occ=new jx(s.bounds),this.roofs=new Float32Array(this.occ.w*this.occ.h).fill(-1/0)}isFree(t,e){return!this.occ.used(t,e)}roofAt(t,e){const{occ:n}=this,s=Math.floor((t-n.b.x0)/n.cell),o=Math.floor((e-n.b.z0)/n.cell);return s<0||o<0||s>=n.w||o>=n.h?-1/0:this.roofs[o*n.w+s]}markRoof(t,e){const{occ:n}=this;let s=1/0,o=-1/0,r=1/0,a=-1/0;for(let l=0;l<t.length;l+=2)s=Math.min(s,t[l]),o=Math.max(o,t[l]),r=Math.min(r,t[l+1]),a=Math.max(a,t[l+1]);for(let l=Math.floor((r-n.b.z0)/n.cell);l<=Math.floor((a-n.b.z0)/n.cell);l++)for(let c=Math.floor((s-n.b.x0)/n.cell);c<=Math.floor((o-n.b.x0)/n.cell);c++)c<0||l<0||c>=n.w||l>=n.h||kc(n.b.x0+(c+.5)*n.cell,n.b.z0+(l+.5)*n.cell,t)&&(this.roofs[l*n.w+c]=Math.max(this.roofs[l*n.w+c],e))}build(t){return(async()=>{await t("Laying out roads…"),this.buildRoads(),await t("Building Chester…"),this.buildBuildings(),await t("Planting trees…"),this.buildTrees()})()}buildBuildings(){const t=new Oo,e=new Vt;for(let s=0;s<this.data.buildings.length;s++){const o=this.data.buildings[s];let r=o.p;const a=r.length/2;if(a<3)continue;this.occ.markPolygon(r);let l=0;for(let m=0;m<a;m++){const u=(m+1)%a;l+=r[m*2]*r[u*2+1]-r[u*2]*r[m*2+1]}if(l>0){const m=[];for(let u=a-1;u>=0;u--)m.push(r[u*2],r[u*2+1]);r=m}let c=1/0;for(let m=0;m<a;m++)c=Math.min(c,this.terrain.heightAt(r[m*2],r[m*2+1]));const h=c+o.h;this.markRoof(r,h+1.5);const d=oi(s,7,1),p=oi(s,3,2),f=this.styleFor(o,d,p,r);e.set(f.roof);const g=new Vt(1,1,1).multiplyScalar(.9+p*.1);this.walls(t,r,c,h,f.style,f.ground,g),!f.flat&&a===4&&o.h<=13&&Qx(r)&&Math.abs(l)/2<400?this.gableRoof(t,r,h,g,e,f.style):this.flatRoof(t,r,h,e),this.landmarkExtras(t,o,r,h,e)}const n=new $(t.geometry(),Yx());n.castShadow=n.receiveShadow=!0,n.name="buildings",this.group.add(n)}walls(t,e,n,s,o,r,a){const l=e.length/2,c=s-n,h=Math.max(1,Math.round(c/Wx)),d=c/h,p=n-1.5;for(let f=0;f<l;f++){const g=(f+1)%l,v=e[f*2],m=e[f*2+1],u=e[g*2],x=e[g*2+1],M=Math.hypot(u-v,x-m),_=M<1.6,T=Math.max(1,Math.round(M/Vx)),E=(S,R,w,y,P)=>{t.curCell=js(o,_?ge.plain:P),t.tri([v,S,m],[u,S,x],[u,R,x],a,void 0,[[0,w],[T,w],[T,y]]),t.tri([v,S,m],[u,R,x],[v,R,m],a,void 0,[[0,w],[T,y],[0,y]])};E(p,n+d,-(n-p)/d,1,r),h>1&&E(n+d,s,0,h-1,o==="shed"?ge.plain:ge.upper)}}flatRoof(t,e,n,s){const o=e.length/2;t.curCell=js("white",ge.plain);const r=[];for(let a=0;a<o;a++)r.push(new it(e[a*2],e[a*2+1]));for(const[a,l,c]of ci.triangulateShape(r,[]))t.tri([e[a*2],n,e[a*2+1]],[e[l*2],n,e[l*2+1]],[e[c*2],n,e[c*2+1]],s,[e[a*2],n-10,e[a*2+1]])}styleFor(t,e,n,s){const o=t.t,r=al(rl.slate,n),a=al(rl.flat,n);if(o==="wall_tower")return{style:"sandstone",ground:ge.plain,roof:"#c9a58a",flat:!0};if(o==="shot_tower")return{style:"tower",ground:ge.upper,roof:"#4a3a32",flat:!0};if(o==="town_hall"||o.startsWith("cathedral")||o==="church"||o==="chapel"||/cathedral|church|chapel/i.test(t.n??""))return{style:"gothic",ground:ge.upper,roof:"#5a6068",flat:!0};if(["garage","garages","shed","roof","hut","carport"].includes(o)||t.h<4)return{style:"shed",ground:ge.plain,roof:a,flat:!0};if(["industrial","warehouse"].includes(o))return{style:"warehouse",ground:ge.house,roof:r,flat:!1};const[l,c]=[s[0],s[1]],h=this.terrain.urbanAt(l,c);if(t.h<=13&&h>.45&&e<.09)return{style:"tudor",ground:ge.shop,roof:r,flat:!1};if(["commercial","retail","office","supermarket","hotel"].includes(o)||t.h>14)return e<.55?{style:"modern",ground:ge.shop,roof:a,flat:!0}:{style:e<.8?"brick":"warehouse",ground:ge.shop,roof:a,flat:!0};if(o==="apartments")return{style:e<.5?"modern":"brick",ground:ge.house,roof:a,flat:e<.5};const d=h>.5&&n<.3?ge.shop:ge.house;return{style:e<.55?"brick":e<.7?"brickDark":e<.87?"render":e<.96?"whiteRender":"sandstone",ground:d,roof:n<.8?r:al(rl.tile,e),flat:!1}}landmarkExtras(t,e,n,s,o){const r=n.length/2;let a=0,l=0;for(let v=0;v<r;v++)a+=n[v*2]/r,l+=n[v*2+1]/r;const c=s-e.h,h=new Vt(1,1,1),d=(v,m)=>{const u=[];for(let x=0;x<4;x++){const M=m+x*Math.PI/2+Math.PI/4;u.push(a+Math.cos(M)*v*Math.SQRT2,l+Math.sin(M)*v*Math.SQRT2)}return u.reverse()};let p=0,f=0;for(let v=0;v<r;v++){const m=(v+1)%r,u=Math.hypot(n[m*2]-n[v*2],n[m*2+1]-n[v*2+1]);u>p&&(p=u,f=Math.atan2(n[m*2+1]-n[v*2+1],n[m*2]-n[v*2]))}const g=(v,m,u)=>{t.curCell=js("white",ge.plain);for(let x=0;x<4;x++){const M=(x+1)%4;t.tri([v[x*2],m,v[x*2+1]],[v[M*2],m,v[M*2+1]],[a,m+u,l],o,[a,m,l])}};if(e.t==="shot_tower"){const v=[];for(let m=0;m<r;m++)v.push(a+(n[m*2]-a)*1.12,l+(n[m*2+1]-l)*1.12);this.walls(t,v,s-1.6,s+.4,"tower",ge.plain,h),this.flatRoof(t,v,s+.4,o)}else if(e.t==="town_hall"){const v=d(4.5,f);this.walls(t,v,c,c+40,"gothic",ge.upper,h),g(v,c+40,10)}else if(e.t==="cathedral_main"){const v=d(7,f);this.walls(t,v,c,c+38,"gothic",ge.upper,h),this.flatRoof(t,v,c+38,o);for(let m=0;m<4;m++){const u=v[m*2],x=v[m*2+1],M=[u-.8,x-.8,u-.8,x+.8,u+.8,x+.8,u+.8,x-.8];this.walls(t,M,c+38,c+41,"sandstone",ge.plain,h),t.curCell=js("white",ge.plain);for(let _=0;_<4;_++){const T=(_+1)%4;t.tri([M[_*2],c+41,M[_*2+1]],[M[T*2],c+41,M[T*2+1]],[u,c+43.5,x],o,[u,c+41,x])}}}}gableRoof(t,e,n,s,o,r){const a=[0,1,2,3].map(m=>[e[m*2],e[m*2+1]]),l=(m,u)=>Math.hypot(m[0]-u[0],m[1]-u[1]);l(a[0],a[1])<l(a[1],a[2])&&a.push(a.shift());const c=l(a[1],a[2]),h=Math.min(c*.42,4),d=(m,u)=>[(m[0]+u[0])/2,(m[1]+u[1])/2],p=d(a[3],a[0]),f=d(a[1],a[2]),g=(m,u)=>[m[0],u,m[1]],v=[(a[0][0]+a[2][0])/2,n-1,(a[0][1]+a[2][1])/2];t.curCell=js("white",ge.plain),t.tri(g(a[0],n),g(a[1],n),g(f,n+h),o,v),t.tri(g(a[0],n),g(f,n+h),g(p,n+h),o,v),t.tri(g(a[2],n),g(a[3],n),g(p,n+h),o,v),t.tri(g(a[2],n),g(p,n+h),g(f,n+h),o,v),t.curCell=js(r,ge.plain),t.tri(g(a[1],n),g(a[2],n),g(f,n+h),s,v),t.tri(g(a[3],n),g(a[0],n),g(p,n+h),s,v)}buildRoads(){const t=new Oo,e=new Oo,n=new Oo,s=new Oo,o=new Vt(1,1,1),r=new Vt("#6d635a"),a={footway:0,path:0,cycleway:0,steps:0,track:0,service:1,residential:2,living_street:2,unclassified:2,tertiary:3,secondary:4,primary:5,trunk:6,motorway:6,pedestrian:1},l=new Set(["footway","path","cycleway","steps","track","pedestrian"]),c=new Set(["residential","unclassified","tertiary","secondary","primary","trunk","motorway"]),h=new Set([...c,"service","living_street"]),d=new Set(["tertiary","secondary","primary","trunk"]),p=new Map;for(const u of this.data.roads){if(l.has(u.k))continue;const x=new Set;for(let M=0;M<u.p.length;M+=2)x.add(`${u.p[M]},${u.p[M+1]}`);for(const M of x)p.set(M,(p.get(M)??0)+1)}const f=20,g=new Map;for(const[u,x]of p){if(x<2)continue;const[M,_]=u.split(",").map(Number),T=`${Math.floor(M/f)},${Math.floor(_/f)}`;g.has(T)||g.set(T,[]),g.get(T).push([M,_])}const v=(u,x)=>{let M=1/0;const _=Math.floor(u/f),T=Math.floor(x/f);for(let E=-1;E<=1;E++)for(let S=-1;S<=1;S++)for(const[R,w]of g.get(`${_+E},${T+S}`)??[])M=Math.min(M,Math.hypot(u-R,x-w));return M};for(const u of this.data.roads){const x=l.has(u.k)?n:c.has(u.k)&&u.w>=6?t:e,M=x===t?{plain:e,dist:v,clear:u.w/2+6}:void 0,_=this.ribbon(x,u.p,u.w,o,.05+(a[u.k]??1)*.012,!0,l.has(u.k)?2:6,M,l.has(u.k));_&&h.has(u.k)&&(_.crosses||d.has(u.k))&&this.carPaths.push({pts:_.pts,w:u.w,bridge:_.crosses})}for(const u of this.data.rails)u.skip?this.markLine(u.p,3.5):this.ribbon(s,u.p,4.2,r,.1,!0,4);const m=(u,x,M)=>{const _=new $(u.geometry(),new $t({map:x,vertexColors:!0,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));_.receiveShadow=!0,_.name=M,this.group.add(_)};for(const u of this.data.junctions??[]){const x=this.route.project(u.x,u.z),M=this.ww.halfWidthAt(x.s);if(x.dist<M+2)continue;const _=(x.dist<M+3.5?this.terrain.bankTop(x.s):this.terrain.landHeight(u.x,u.z,x.s,x.d))+.14;e.curCell=[0,0,0,0];const T=16;for(let E=0;E<T;E++){const S=E/T*Math.PI*2,R=(E+1)/T*Math.PI*2,w=[u.x+Math.cos(S)*u.r,_,u.z+Math.sin(S)*u.r],y=[u.x+Math.cos(R)*u.r,_,u.z+Math.sin(R)*u.r];e.tri([u.x,_,u.z],w,y,o,[u.x,_-5,u.z],[[.5,.5],[.5+Math.cos(S)*.4,.5],[.5+Math.cos(R)*.4,.6]])}}m(t,ta("major"),"roads"),m(e,ta("lane"),"lanes"),m(n,ta("foot"),"footways"),m(s,null,"ballast")}markLine(t,e){for(let n=0;n+3<t.length;n+=2){const s=t[n],o=t[n+1],r=t[n+2],a=t[n+3],l=Math.max(1,Math.ceil(Math.hypot(r-s,a-o)/2));for(let c=0;c<=l;c++)this.occ.mark(s+(r-s)*c/l,o+(a-o)*c/l,e)}}ribbon(t,e,n,s,o,r,a,l,c=!1){const h=[];for(let _=0;_+3<e.length;_+=2){const T=e[_],E=e[_+1],S=e[_+2],R=e[_+3],w=Math.max(1,Math.ceil(Math.hypot(S-T,R-E)/4));for(let y=0;y<w;y++)h.push([T+(S-T)*y/w,E+(R-E)*y/w])}if(h.push([e[e.length-2],e[e.length-1]]),h.length<2)return null;const d=h.map(([_,T])=>this.route.project(_,T));if(c&&d.filter(T=>T.dist<this.ww.halfWidthAt(T.s)+7).length/d.length>.4)return null;const p=d,f=p.map(_=>this.bridges.rampAt(_.s,_.d));let g=!1;for(let _=1;_<p.length;_++)Math.sign(p[_].d)!==Math.sign(p[_-1].d)&&Math.min(p[_].dist,p[_-1].dist)<20&&(f[_].onDeck||f[_-1].onDeck)&&(g=!0);const v=h.map(([_,T],E)=>{const S=p[E],R=this.ww.halfWidthAt(S.s),w=S.dist<R+3.5?this.terrain.bankTop(S.s):this.terrain.landHeight(_,T,S.s,S.d);return(g?Math.max(w,f[E].y):w)+o}),m=n/2,u=h.map((_,T)=>{const E=(k,F)=>{const W=h[F][0]-h[k][0],H=h[F][1]-h[k][1],B=Math.hypot(W,H)||1;return[-H/B,W/B]},S=T>0?E(T-1,T):E(T,T+1),R=T<h.length-1?E(T,T+1):S;let w=S[0]+R[0],y=S[1]+R[1];const P=Math.hypot(w,y)||1;w/=P,y/=P;const A=Math.min(2,1/Math.max(.5,w*R[0]+y*R[1]));return[w*A,y*A]});let x=0,M=!1;for(let _=0;_<h.length-1;_++){const T=p[_],E=p[_+1],S=Math.hypot(h[_+1][0]-h[_][0],h[_+1][1]-h[_][1]),R=x/a,w=(x+S)/a;if(x+=S,g&&Math.sign(T.d)!==Math.sign(E.d)&&f[_].onDeck&&(M=!0),(Math.min(T.dist,E.dist)<this.ww.halfWidthAt(T.s)+4||Math.sign(T.d)!==Math.sign(E.d))&&!(f[_].onDeck&&f[_+1].onDeck)||g&&f[_].onDeck&&f[_+1].onDeck)continue;const[P,A]=h[_],[k,F]=h[_+1],[W,H]=u[_],[B,G]=u[_+1],ut=[P-W*m,v[_],A-H*m],_t=[P+W*m,v[_],A+H*m],rt=[k-B*m,v[_+1],F-G*m],Ot=[k+B*m,v[_+1],F+G*m],ee=l&&Math.min(l.dist(P,A),l.dist(k,F))<l.clear?l.plain:t;ee.tri(ut,_t,Ot,s,[P,v[_]-5,A],[[0,R],[1,R],[1,w]]),ee.tri(ut,Ot,rt,s,[P,v[_]-5,A],[[0,R],[1,w],[0,w]]),r&&this.occ.mark(P,A,m+1.5)}return{pts:h.map(([_,T],E)=>[_,v[E],T]),crosses:M}}buildTrees(){const t=Di(1234),e=[],{route:n,ww:s,terrain:o,occ:r}=this,a=(M,_)=>{if(r.used(M,_))return!1;const T=n.project(M,_);return o.nearAqueduct(T.s,25)&&T.dist<14?!1:T.dist>s.halfWidthAt(T.s)+4.2};for(let M=0;M<n.length;M+=5)for(const _ of[-1,1]){if(t()>.6)continue;const T=s.halfWidthAt(M)+4.5+t()*t()*30,[E,S]=n.point(M,T*_);t()<o.urbanAt(E,S)*.85||a(E,S)&&e.push({x:E,z:S,s:.8+t()*.7,kind:t()<.15?1:0})}const l=o.bounds,c=(l.x1-l.x0)*(l.z1-l.z0);for(let M=0;M<c*(o.hasAqueduct?.0016:9e-4);M++){const _=l.x0+t()*(l.x1-l.x0),T=l.z0+t()*(l.z1-l.z0),E=o.parkAt(_,T),S=o.nearAqueduct(n.project(_,T).s,250)?.85:0,R=E?.7:Math.max(S,(1-o.urbanAt(_,T))*.35*Ee(.75,.2,Math.abs(Jx(_,T))));t()>R||a(_,T)&&e.push({x:_,z:T,s:.8+t()*.9,kind:t()<.1?1:0})}for(let M=0;M<this.data.trees.length;M+=2)e.push({x:this.data.trees[M],z:this.data.trees[M+1],s:1.1,kind:0});const h=new gn(1,0),d=new jt(.18,.25,1,5);d.translate(0,.5,0);const p=new Un(h,new $t({roughness:.9,flatShading:!0}),e.length),f=new Un(d,new $t({color:"#5a4636",roughness:1}),e.length),g=new pe,v=new kn,m=new N,u=new N,x=["#4f7a3a","#5d8a40","#3f6b35","#6b9446","#557d3c"].map(M=>new Vt(M));e.forEach((M,_)=>{const T=o.heightAt(M.x,M.z),E=(M.kind===1?9:4.5)*M.s;v.setFromAxisAngle(new N(0,1,0),t()*Math.PI*2),u.set(M.x,T-.2,M.z),m.set(M.s,E*.45,M.s),f.setMatrixAt(_,g.compose(u,v,m)),u.set(M.x,T+E*.45+(M.kind===1?E*.35:E*.3),M.z),M.kind===1?m.set(1.3*M.s,E*.5,1.3*M.s):m.set(2.6*M.s,2.3*M.s,2.6*M.s),p.setMatrixAt(_,g.compose(u,v,m)),p.setColorAt(_,x[Math.floor(t()*x.length)].clone().offsetHSL(0,0,(t()-.5)*.06))}),p.castShadow=f.castShadow=!0,p.receiveShadow=!0,p.name="trees",this.group.add(p,f)}}function Jx(i,t){return Math.sin(i*.011+Math.sin(t*.007)*2)*Math.cos(t*.013+Math.sin(i*.005)*2)}function Qx(i){for(let t=0;t<4;t++){const e=t,n=(t+1)%4,s=(t+2)%4,o=i[n*2]-i[e*2],r=i[n*2+1]-i[e*2+1],a=i[s*2]-i[n*2],l=i[s*2+1]-i[n*2+1],c=(o*a+r*l)/(Math.hypot(o,r)*Math.hypot(a,l)||1);if(Math.abs(c)>.2)return!1}return!0}function ta(i){const n=document.createElement("canvas");n.width=128,n.height=256;const s=n.getContext("2d"),o=Di(i.length*7);if(i==="foot"){s.fillStyle="#b3ad9f",s.fillRect(0,0,128,256);for(let a=0;a<256;a+=64)for(let l=0;l<128;l+=64)s.fillStyle=`hsl(40, 8%, ${62+o()*8}%)`,s.fillRect(l+2,a+2,60,60)}else{s.fillStyle="#4f5256",s.fillRect(0,0,128,256);for(let a=0;a<2500;a++)s.fillStyle=o()<.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.08)",s.fillRect(o()*128,o()*256,2,2);i==="major"&&(s.fillStyle="#e9e7df",s.fillRect(6,0,3,256),s.fillRect(119,0,3,256),s.fillRect(128/2-2,0,4,256*.5))}const r=new On(n);return r.colorSpace=Oe,r.wrapS=Ti,r.wrapT=po,r.anisotropy=4,r}const Ks={brick:new $t({color:"#8b4a3b",roughness:.9,flatShading:!0}),sandstone:new $t({color:"#a8654f",roughness:.9,flatShading:!0}),concrete:new $t({color:"#a39f97",roughness:.85,flatShading:!0}),iron:new $t({color:"#3d434b",roughness:.6,metalness:.3,flatShading:!0}),coping:new $t({color:"#c4bba9",roughness:.9,flatShading:!0})},tM=cc+.55+2.4,mu=$n+.55+2.6,gu=Math.tan(55*Math.PI/180);class eM{constructor(t,e,n,s){D(this,"group",new bt);D(this,"placed",[]);D(this,"ray",new qd);D(this,"faded",new Map);const o=[];for(const r of n){const a=o.at(-1);if(a&&a.kind==="rail"&&r.kind==="rail"&&r.s-r.w/2<a.s+a.w/2+6){const l=Math.min(a.s-a.w/2,r.s-r.w/2),c=Math.max(a.s+a.w/2,r.s+r.w/2);o[o.length-1]={...a,s:(l+c)/2,w:c-l}}else o.push(r)}for(const r of o){const a=t.frame(r.s),l=e.levelAt(r.s),c=r.kind==="road"&&r.w<12,h=Math.sin(r.dir),d=Math.cos(r.dir),p=h*a.nx+d*a.nz,f=h*a.tx+d*a.tz,g=_s.clamp(f/(Math.abs(p)<.001?.001:p),-gu,gu),v=$n+8,m=$n+8,u=Math.max(...[-1,1].map(F=>{const[W,H]=t.point(r.s,m*F);return s.landHeight(W,H,r.s,m*F)})),x=Math.max(l+(c?4.1:4.6),u+.2),M=new bt;M.position.set(a.x,0,a.z),M.rotation.y=Math.atan2(-a.nz,a.nx);const _=Math.max(r.w+.8,3.2)*Math.sqrt(1+g*g);let T=a.nx+a.tx*g,E=a.nz+a.tz*g;const S=Math.hypot(T,E);T/=S,E/=S;const R=Math.max(1.2,Math.max(r.w+.8,3.2)/2-.4);this.placed.push({data:r,x:a.x,z:a.z,deck:x,halfSpan:v,arch:c,depth:_,tanSkew:g,ax:T,az:E,roadHalf:R});const w=c?nM(v,tM,l,x):iM(v,mu,l,x),y=new xo(w,{depth:_,bevelEnabled:!1,curveSegments:10});y.translate(0,0,-_/2);const P=c?r.w<=3.5?Ks.sandstone:Ks.brick:r.kind==="rail"?Ks.iron:Ks.concrete,A=new $(y,P);A.castShadow=A.receiveShadow=!0,M.add(A);for(const F of[-1,1]){const W=new $(new Rt(v*2*.92,1,.35),c?Ks.coping:P);W.position.set(0,x+.5,F*(_/2-.12)),W.castShadow=!0,M.add(W)}if(!c)for(const F of[-1,1]){const W=new $(new Rt(1.2,x-l+1.15,_+.3),Ks.concrete);W.position.set(F*(mu+.6-.08),(x-1.15+l-2.3)/2,0),M.add(W)}if(r.kind==="road"){const F=_/2-.3,W=x+.03,H=new xe;H.setAttribute("position",new Zt([-v,W,-F,v,W,-F,v,W,F,-v,W,F],3));const B=r.w<=3.5?2:6;H.setAttribute("uv",new Zt([0,0,0,2*v/B,1,2*v/B,1,0],2)),H.setIndex([0,2,1,0,3,2]),H.computeVertexNormals();const G=new $(H,new $t({map:ta(r.w<=3.5?"foot":"major"),roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,side:Ie}));G.receiveShadow=!0,M.add(G)}const k=new pe().makeShear(0,-g,0,0,0,0);for(const F of M.children){const W=F;W.updateMatrix(),W.geometry=W.geometry.applyMatrix4(W.matrix).applyMatrix4(k),W.position.set(0,0,0),W.rotation.set(0,0,0)}M.traverse(F=>{const W=F;W.isMesh&&(W.material=W.material.clone())}),M.name=`bridge:${r.name??r.s}`,this.group.add(M)}}rampAt(t,e){let n=-1/0,s=!1;for(const o of this.placed){if(Math.abs(t-(o.data.s+o.tanSkew*e))>o.depth/2+1)continue;const a=Math.abs(e);a<=o.halfSpan&&(s=!0),!(a>o.halfSpan+30)&&(n=Math.max(n,o.deck-Math.max(0,a-o.halfSpan*.85)/9))}return{y:n,onDeck:s}}updateOcclusion(t,e,n){const s=e.clone().sub(t),o=s.length();this.ray.set(t,s.normalize()),this.ray.far=o;const r=new Set(this.ray.intersectObjects(this.group.children,!0).map(a=>a.object.parent));for(const a of this.group.children){const l=this.faded.get(a)??1,c=r.has(a)?.18:1;if(l===c)continue;const h=l+Math.sign(c-l)*Math.min(Math.abs(c-l),n*4);this.faded.set(a,h),a.traverse(d=>{const p=d.material;p&&(p.transparent=h<1,p.opacity=h,p.depthWrite=h>=1)})}}at(t){return this.placed.find(e=>Math.abs(e.data.s-t)<e.data.w/2+1)}}function nM(i,t,e,n){const s=n-e,o=e-2.2,r=e+Math.max(1.8,s*.4),a=e+Math.max(3.4,s*.8),l=new Es;l.moveTo(-i,o),l.lineTo(-t,o),l.lineTo(-t,r);const c=14;for(let h=1;h<c;h++){const d=Math.PI-Math.PI*h/c;l.lineTo(Math.cos(d)*t,r+Math.sin(d)*(a-r))}return l.lineTo(t,r),l.lineTo(t,o),l.lineTo(i,o),l.lineTo(i,n),l.lineTo(-i,n),l.closePath(),l}function iM(i,t,e,n){const s=e-2.2,o=n-1.1,r=new Es;return r.moveTo(-i,s),r.lineTo(-t,s),r.lineTo(-t,o),r.lineTo(t,o),r.lineTo(t,s),r.lineTo(i,s),r.lineTo(i,n),r.lineTo(-i,n),r.closePath(),r}const vu=18*Math.PI/180,sM=$i+.15,ei={gate:new $t({color:"#1d1c1a",roughness:.8,flatShading:!0}),white:new $t({color:"#f1efe8",roughness:.7}),gear:new $t({color:"#2b2f33",roughness:.5,metalness:.5}),rack:new $t({color:"#c9c3b5",roughness:.4,metalness:.6}),foam:new En({color:"#f4f7f2",transparent:!0,opacity:0,depthWrite:!1}),highlight:new En({color:"#ffd76a",transparent:!0,opacity:.55,depthWrite:!1})};class oM{constructor(t,e,n){D(this,"group",new bt);D(this,"visuals",[]);D(this,"time",0);this.ww=e;for(const o of e.gates){const r=t.frame(o.s),a=new bt;a.position.set(r.x,0,r.z),a.rotation.y=Math.atan2(r.tx,r.tz);const l=e.bodies[o.above].hi,c=e.bodies[o.below].lo-1.6,h=n.bankTop(o.s),d=l+.4,p=$i/Math.cos(vu)+.15,f=[],g=[];for(const u of[-1,1]){const x=new bt;x.position.set(u*sM,0,0);const M=d-c,_=new $(new Rt(p,M,.32),ei.gate);_.position.set(p/2,c+M/2,0),_.castShadow=!0,x.add(_);const T=Math.max(h,d)+.75,E=new $(new Rt(4.6,.32,.32),ei.gate);E.position.set(-2.1,T,0),E.castShadow=!0,x.add(E);const S=new $(new Rt(.7,.34,.34),ei.white);S.position.set(-4.1,T,0),x.add(S);const R=new $(new Rt(.3,T-d+.2,.3),ei.gate);R.position.set(.1,(T+d)/2,0),x.add(R);const w=new $(new Rt(.3,.45,.3),ei.gear);w.position.set(p*.55,d+.22,-.2),x.add(w);const y=new $(new Rt(.08,.9,.08),ei.rack);y.position.set(p*.55,d+.45,-.2),y.userData.y0=y.position.y,x.add(y),g.push(y);const P=new $(new Rt(p,.06,.06),ei.white);P.position.set(p/2,d+.95,-.35),x.add(P),x.scale.x=u<0?1:-1,a.add(x),f.push({pivot:x,sign:u})}const v=new $(new ui($i*2,5),ei.foam.clone());v.rotation.x=-Math.PI/2,v.position.set(0,0,-2.8),a.add(v);const m=new $(new ir($i+.6,$i+1,32),ei.highlight);m.rotation.x=-Math.PI/2,m.position.y=h+.08,m.visible=!1,a.add(m),this.group.add(a),this.visuals.push({gate:o,leaves:f,racks:g,foam:v,ring:m,root:a})}const s=new Map;for(const o of e.gates)o.label==="top gates"&&s.set(o.lockName,o);for(const[o,r]of s){const a=t.frame(r.s+3),l=rM(o),c=($i+3.2)*Xt;l.position.set(a.x+a.nx*c,n.bankTop(r.s+3),a.z+a.nz*c),l.rotation.y=Math.atan2(Xt*a.tz,-Xt*a.tx),this.group.add(l)}}setSelected(t){for(const e of this.visuals)e.ring.visible=e.gate===t}update(t){this.time+=t;for(const e of this.visuals){const n=e.gate,s=n.open*n.open*(3-2*n.open);for(const{pivot:a,sign:l}of e.leaves){const c=vu,h=Math.PI/2;a.rotation.y=(c+(h-c)*s)*l}for(const a of e.racks)a.position.y=a.userData.y0+n.paddle*.55;const o=this.ww.bodies[n.below].level,r=Math.min(1,Math.abs(n.flow)/3);e.foam.position.y=o+.03,e.foam.material.opacity=r*(.55+.15*Math.sin(this.time*9)),e.foam.scale.y=.7+r*.5+.08*Math.sin(this.time*5.3),e.ring.visible&&(e.ring.material.opacity=.4+.25*Math.sin(this.time*4))}}}function rM(i){const t=document.createElement("canvas");t.width=512,t.height=128;const e=t.getContext("2d");e.fillStyle="#1e3d2f",e.fillRect(0,0,512,128),e.strokeStyle="#e8d9a8",e.lineWidth=6,e.strokeRect(8,8,496,112),e.fillStyle="#f3ead0",e.font="600 44px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText(i,256,66,470);const n=new On(t);n.colorSpace=Oe;const s=new bt,o=new $(new ui(2.4,.6),new $t({map:n,side:Ie}));o.position.y=1.9,s.add(o);for(const r of[-1,1]){const a=new $(new Rt(.1,2.2,.1),ei.white);a.position.set(r,1.1,0),s.add(a)}return s}class er extends ${constructor(){const t=er.SkyShader,e=new Li({name:t.name,uniforms:wd.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:un,depthWrite:!1});super(new Rt(1,1,1),e),this.isSky=!0}}er.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new N},up:{value:new N(0,1,0)}},vertexShader:`
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

		}`};const _u=new URLSearchParams(location.search).get("fog"),aM=_u===null?null:ye(Number(_u)||0,0,1);class lM{constructor(t,e){D(this,"sky",new er);D(this,"sun",new $d("#fff4e0",3));D(this,"hemi",new Wd("#cfe3ff","#5d6b45",.9));D(this,"envScene",new Tc);D(this,"envSky",new er);D(this,"pmrem");D(this,"envTarget",null);D(this,"lastEnvHour",-99);D(this,"sunDir",new N);D(this,"hour",Number(new URLSearchParams(location.search).get("hour"))||10.5);D(this,"day",1);D(this,"fog",0);D(this,"elapsed",0);this.scene=t,this.sky.scale.setScalar(2e4),this.envSky.scale.setScalar(2e4);for(const o of[this.sky,this.envSky]){const r=o.material.uniforms;r.turbidity.value=5,r.rayleigh.value=1.4,r.mieCoefficient.value=.004,r.mieDirectionalG.value=.82}this.envScene.add(this.envSky),t.add(this.sky,this.sun,this.sun.target,this.hemi),this.pmrem=new nc(e);const n=this.sun.shadow;this.sun.castShadow=!0,n.mapSize.set(2048,2048);const s=n.camera;s.left=s.bottom=-90,s.right=s.top=90,s.near=1,s.far=600,n.bias=-4e-4,n.normalBias=.03,t.fog=new Ec("#c9d6dc",300,2400)}get sunElevation(){const t=(this.hour-7)/11.5;return Math.sin(ye(t,-.15,1.15)*Math.PI)*32-(t<0||t>1?6:0)}get clock(){return(this.day-1)*24+this.hour}skipTo(t){t<=this.hour&&this.day++,this.hour=t}get isNight(){return this.sunElevation<-2}update(t,e){var h;this.hour+=t,this.hour>=24&&(this.hour-=24,this.day++),this.elapsed+=t;const n=Math.max(0,1-Math.abs(this.hour-6.5)/3.5)*.8,s=Math.sin(this.elapsed*.21)*.6+Math.sin(this.elapsed*.53+1.7)*.4;this.fog=aM??ye(Math.max(n,Ee(.55,.95,s)),0,1);const o=this.scene.fog;o.far=2400*Math.pow(70/2400,this.fog),o.near=o.far*_s.lerp(.125,0,this.fog);const r=_s.degToRad(this.sunElevation),a=_s.degToRad(100+(this.hour-6)/13*160);this.sunDir.setFromSphericalCoords(1,Math.PI/2-r,a);for(const d of[this.sky,this.envSky])d.material.uniforms.sunPosition.value.copy(this.sunDir);const l=Ee(-4,8,this.sunElevation),c=1-Ee(4,20,this.sunElevation);this.sun.intensity=3.2*Ee(-2,6,this.sunElevation),this.sun.color.setHSL(.09,.5+c*.4,.92-c*.18),this.hemi.intensity=.2+l*.7,this.scene.fog.color.setHSL(.56,.18,.12+l*.68),this.sun.position.copy(e).addScaledVector(this.sunDir,300),this.sun.target.position.copy(e),Math.abs(this.hour-this.lastEnvHour)>.25&&(this.lastEnvHour=this.hour,(h=this.envTarget)==null||h.dispose(),this.envTarget=this.pmrem.fromScene(this.envScene,0,1,25e3),this.scene.environment=this.envTarget.texture)}}function cM(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new xe;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let p=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let p=0;p<i.length;++p){const f=i[p].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[p].attributes.position.count}l.setIndex(d)}for(const h in o){const d=xu(o[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in r){const d=r[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<d;++p){const f=[];for(let v=0;v<r[h].length;++v)f.push(r[h][v][p]);const g=xu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function xu(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new We(r,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let p=0,f=h.count;p<f;p++)for(let g=0;g<e;g++){const v=h.getComponent(p,g);a.setComponent(p+d,g,v)}}else r.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Ii(i,t,e){i.updateMatrixWorld(!0);const n=i.matrixWorld.clone().invert(),s=[],o=new pe;return i.traverse(r=>{const a=r;if(!a.isMesh||e&&!e(a))return;const l=Array.isArray(a.material)?a.material:[a.material];if(l.some(g=>g.map)){t==null||t(a);return}const c=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();c.applyMatrix4(o.multiplyMatrices(n,a.matrixWorld));const h=c.getAttribute("position").count,d=new Float32Array(h*3),p=c.groups.length?c.groups:[{start:0,count:h,materialIndex:0}];for(const g of p){const v=(l[g.materialIndex??0]??l[0]).color;for(let m=g.start;m<Math.min(h,g.start+g.count);m++)d.set([v.r,v.g,v.b],m*3)}const f=new xe;f.setAttribute("position",c.getAttribute("position")),f.setAttribute("normal",c.getAttribute("normal")),f.setAttribute("color",new We(d,3)),s.push(f)}),cM(s)}const Ci=()=>new $t({vertexColors:!0,roughness:.75,flatShading:!0}),hM=["#f1c6a5","#e3b08f","#c98d68","#9a6542","#6b4229"],uM=["#2b1d14","#5a3a22","#a0703c","#d9b36c","#8f8f8f","#161616"],dM=["#2d3a55","#1f2328","#6b5a3f","#3d4a3a","#4a4a55"],Wo=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400","#34495e","#16a085","#7f8c8d","#e84393","#6d4c41","#1f4d3a"],fM=["short","short","long","bun","beanie","cap","bald"];function Qi(i,t={}){const e=n=>n[Math.floor(i()*n.length)];return{coat:e(Wo),trousers:e(dM),skin:e(hM),hair:e(uM),hairStyle:e(fM),hat:e(["#b03a2e","#2e4a7a","#3d5a3d","#5a4a3a","#d4a017"]),longCoat:i()<.3,...t}}const yi=(i,t=.8)=>new $t({color:i,roughness:t}),Mu=i=>(i.userData.part="coat",i);function ri(i={}){const t={...Qi(Math.random),...i},e=new bt,n=yi(t.coat,.7),s=yi(t.skin,.6),o=yi(t.trousers,.85),r=yi(t.hair,.9),a=t.longCoat?.62:.86,l=[[.001,a],[t.longCoat?.2:.155,a],[.16,.98],[.165,1.15],[.2,1.36],[.17,1.45],[.075,1.5],[.001,1.5]].map(([E,S])=>new it(E,S)),c=Mu(new $(new da(l,12),n));c.scale.z=.72,e.add(c);const h=new $(new jt(.045,.05,.1,8),s);h.position.y=1.54,e.add(h);const d=new $(new Be(.1,14,10),s);d.scale.set(.92,1.1,1),d.position.y=1.67,e.add(d);const p=new $(new li(.018,.045,5),s);p.rotation.x=Math.PI/2,p.position.set(0,1.66,.1),e.add(p);const f=(E,S,R=Math.PI*.55)=>{const w=new $(new Be(E,14,8,0,Math.PI*2,0,R),S);return w.scale.set(.95,1.12,1.03),w.position.y=1.68,w};if(t.hairStyle!=="bald"&&e.add(f(.106,t.hairStyle==="beanie"?yi(t.hat):r,t.hairStyle==="beanie"?Math.PI*.5:Math.PI*.55)),t.hairStyle==="long"){const E=new $(new jt(.1,.11,.26,10,1,!0,Math.PI*.6,Math.PI*.8),r);E.position.y=1.56,E.rotation.y=Math.PI,e.add(E)}else if(t.hairStyle==="bun"){const E=new $(new Be(.05,8,6),r);E.position.set(0,1.74,-.09),e.add(E)}else if(t.hairStyle==="beanie"){const E=new $(new rn(.1,.022,6,14),yi(t.hat));E.rotation.x=Math.PI/2,E.position.y=1.7,e.add(E)}else if(t.hairStyle==="cap"){const E=new $(new jt(.115,.118,.05,12),yi(t.hat));E.position.set(0,1.77,.01),E.rotation.x=-.12;const S=new $(new Rt(.16,.015,.08),yi(t.hat));S.position.set(0,1.76,.12),e.add(E,S)}const g=E=>{const S=new bt;S.position.set(E*.085,.92,0);const R=new $(new jt(.075,.062,.44,8),o);R.position.y=-.22;const w=new bt;w.position.y=-.44;const y=new $(new jt(.062,.05,.42,8),o);y.position.y=-.21;const P=new $(new Rt(.1,.07,.23),yi("#2a2420"));return P.position.set(0,-.44,.04),w.add(y,P),S.add(R,w),e.add(S),{hip:S,knee:w}},{hip:v,knee:m}=g(1),{hip:u,knee:x}=g(-1),M=E=>{const S=new bt;S.position.set(E*.215,1.4,0);const R=Mu(new $(new jt(.052,.042,.58,8),n));R.position.y=-.29;const w=new $(new Be(.042,8,6),s);return w.position.y=-.61,S.add(R,w),S.rotation.z=E*.07,e.add(S),S},_=M(1),T=M(-1);return e.traverse(E=>E.castShadow=!0),{group:e,armL:_,armR:T,legL:v,legR:u,kneeL:m,kneeR:x}}function ji(i,t,e){t==="wind"?(i.armL.rotation.set(-1.3+Math.sin(e*7)*.45,0,.15),i.armR.rotation.set(-1.3+Math.sin(e*7+Math.PI)*.45,0,-.15)):t==="push"?(i.armL.rotation.set(-1.25,0,.1),i.armR.rotation.set(-1.25,0,-.1)):t==="rest"?(i.armL.rotation.set(0,0,.07),i.armR.rotation.set(0,0,-.07)):t==="wave"?(i.armL.rotation.set(0,0,Math.PI-.4+Math.sin(e*9)*.35),i.armR.rotation.set(0,0,-.07)):(i.armL.rotation.set(0,0,Math.PI-.2+Math.sin(e*14)*.25),i.armR.rotation.set(0,0,-(Math.PI-.2)+Math.sin(e*14+1.5)*.25))}function aa(i,t,e=1){const n=Math.sin(t);i.legL.rotation.x=n*.42*e,i.legR.rotation.x=-n*.42*e,i.kneeL.rotation.x=Math.max(0,-Math.sin(t-.6))*.7*e,i.kneeR.rotation.x=Math.max(0,Math.sin(t-.6))*.7*e,i.armL.rotation.set(-n*.35*e,0,.07),i.armR.rotation.set(n*.35*e,0,-.07)}function Kd(i){for(const t of[i.legL,i.legR,i.kneeL,i.kneeR])t.rotation.set(0,0,0)}function uc(i){i.legL.rotation.set(-1.5,0,.06),i.legR.rotation.set(-1.5,0,-.06),i.kneeL.rotation.x=i.kneeR.rotation.x=1.5,i.armL.rotation.set(-.5,0,.1),i.armR.rotation.set(-.5,0,-.1),i.group.position.y-=.47}function pM(i,t){i.legL.rotation.set(-.95+Math.sin(t)*.45,0,.05),i.legR.rotation.set(-.95-Math.sin(t)*.45,0,-.05),i.kneeL.rotation.x=1.2+Math.cos(t)*.45,i.kneeR.rotation.x=1.2-Math.cos(t)*.45,i.armL.rotation.set(-1,0,.08),i.armR.rotation.set(-1,0,-.08)}const Nn=17.4,Kn=2.08,bn=(i,t={})=>new $t({color:i,roughness:.6,flatShading:!0,...t}),mM={name:"Chester Rose",cabin:"#1f4d3a",roof:"#7c2f23",length:Nn,crew:!0};function Oc(i={}){const{name:t,cabin:e,roof:n,length:s,crew:o,crewStyle:r}={...mM,...i},a=new bt;a.userData.length=s;const l={hull:bn("#18191b",{roughness:.5}),deck:bn("#3a3d40",{roughness:.9}),cabin:bn(e,{roughness:.45}),roof:bn(n,{roughness:.7}),cream:bn("#efe3c2"),red:bn("#a3291f"),window:bn("#1b2730",{roughness:.1,metalness:.4}),brass:bn("#c9a24a",{roughness:.25,metalness:.9}),rope:bn("#8a6b43",{roughness:1}),black:bn("#111111"),pot:bn("#9b5a3c"),leaf:bn("#4f8a3a"),flower:bn("#e04f6a")},c=Kn/2,h=s/2,d=[[-c,-h+.4],[-c*.85,-h+.05],[0,-h],[c*.85,-h+.05],[c,-h+.4],[c,h-3.4],[c*.82,h-1.6],[c*.45,h-.5],[0,h],[-c*.45,h-.5],[-c*.82,h-1.6],[-c,h-3.4]],p=new Es(d.map(([ct,Dt])=>new it(ct,-Dt))),f=.62,g=.38,v=new xo(p,{depth:f+g,bevelEnabled:!1});v.rotateX(-Math.PI/2),v.translate(0,-f,0);const m=new $(v,[l.deck,l.hull]);m.castShadow=m.receiveShadow=!0,a.add(m);const u=new xo(p,{depth:.07,bevelEnabled:!1});u.rotateX(-Math.PI/2),u.scale(1.015,1,1.004),u.translate(0,g-.12,0),a.add(new $(u,[l.red,l.red]));const x=-h+2,M=h-3.6,_=M-x,T=(x+M)/2,E=1.22,S=Kn-.24,R=new $(new Rt(S,E,_),l.cabin);R.position.set(0,g+E/2,T),R.castShadow=R.receiveShadow=!0,a.add(R);const w=new $(new Rt(S+.08,.09,_+.08),l.roof);w.position.set(0,g+E+.04,T),w.castShadow=!0,a.add(w);for(const ct of[-1,1]){const Dt=new $(new Rt(.02,.05,_-.3),l.cream);Dt.position.set(ct*(S/2+.005),g+E-.18,T),a.add(Dt);const qt=Dt.clone();qt.position.y=g+.18,a.add(qt);for(let Yt=x+1.6;Yt<M-.6;Yt+=1.45){if(Yt>x+2.6&&Yt<x+4.6)continue;const nt=new $(new Rt(.03,.34,.5),l.window);nt.position.set(ct*(S/2+.005),g+E*.62,Yt),a.add(nt)}const Wt=gM(t);Wt.position.set(ct*(S/2+.012),g+E*.55,x+3.6),Wt.rotation.y=ct*(Math.PI/2),a.add(Wt)}for(const[ct,Dt]of[[x-.005,-1],[M+.005,1]]){const qt=new $(new Rt(.9,.95,.03),l.red);qt.position.set(0,g+.5,ct),a.add(qt);const Wt=new $(new Rt(.03,.9,.035),l.cream);Wt.position.set(0,g+.5,ct+Dt*.005),a.add(Wt)}const y=new $(vM(),new $t({map:_M(),roughness:.6,side:Ie}));y.position.set(0,g,h-1.5),a.add(y);const P=new $(new Rt(.12,.06,2.1),l.cream);P.position.set(0,g+1.12,h-2.55),P.rotation.x=-.36,a.add(P);const A=new $(new jt(.07,.07,.55,8),l.black);A.position.set(.45,g+E+.3,M-1.4),a.add(A);const k=new $(new jt(.075,.075,.06,8),l.brass);k.position.set(.45,g+E+.5,M-1.4),a.add(k);for(const[ct,Dt]of[[x+2.2,-.35],[x+2.8,-.35],[T+1.5,.3]]){const qt=new $(new jt(.16,.12,.22,7),l.pot);qt.position.set(Dt,g+E+.19,ct),a.add(qt);const Wt=new $(new gn(.2,0),l.leaf);Wt.position.set(Dt,g+E+.4,ct),a.add(Wt);const Yt=new $(new gn(.06,0),l.flower);Yt.position.set(Dt+.08,g+E+.55,ct),a.add(Yt)}const F=new $(new jt(.03,.03,4.5,6),l.cream);F.rotation.x=Math.PI/2,F.position.set(-.6,g+E+.12,T-1),a.add(F);const W=new $(new Be(.22,8,6),l.rope);W.scale.set(1,.9,1.3),W.position.set(0,.05,h-.02),a.add(W);for(const ct of[-1,1]){const Dt=new $(new jt(.11,.11,.45,8),l.rope);Dt.position.set(ct*(c+.08),.05,2),a.add(Dt)}const H=new $(new jt(.1,.12,.18,10),l.brass);H.rotation.x=Math.PI/2,H.position.set(0,g+.25,h-.35),a.add(H);const B=new ax("#ffe7b0",0,60,.5,.6,1.2);B.position.set(0,g+.3,h-.2),B.target.position.set(0,-.5,h+20),a.add(B,B.target);const G=new bt;G.position.set(0,0,-h-.05);const ut=new $(new Rt(.05,.75,.9),l.hull);ut.position.set(0,-.3,-.45),G.add(ut);const _t=new $(new jt(.04,.04,1.1,6),l.black);_t.position.set(0,.45,0),G.add(_t);const rt=new $(new jt(.025,.035,1.3,6),l.brass);rt.rotation.x=Math.PI/2-.25,rt.position.set(0,1.08,.62),G.add(rt);const Ot=new $(new Be(.05,6,4),l.brass);Ot.position.set(0,1,0),G.add(Ot),a.add(G);const ee=ri(r??{coat:"#e8b931",trousers:"#2d3a55",skin:"#e3b08f",hair:"#5a3a22",hairStyle:"cap",hat:"#3d4a3a",longCoat:!1}),J=ee.group;J.position.set(0,g-.25,-h+.9),o?a.add(J):a.remove(B,B.target);const dt=new $(new Rt(2.2,1.6,3),new En({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}));dt.position.set(0,1,-h+.6),dt.name="tiller-hit";const Pt=new $(new ir(.75,.9,32),new En({color:"#ffd76a",transparent:!0,opacity:.6,depthWrite:!1,side:Ie}));return Pt.rotation.x=-Math.PI/2,Pt.position.set(0,g+.02,-h+.55),o&&a.add(dt,Pt),{group:a,rudder:G,steerer:J,steererPerson:ee,headlight:B,tillerHit:dt,tillerHint:Pt}}function gM(i){const t=document.createElement("canvas");t.width=512,t.height=160;const e=t.getContext("2d");e.fillStyle="#a3291f",e.fillRect(0,0,512,160),e.strokeStyle="#efe3c2",e.lineWidth=8,e.strokeRect(10,10,492,140),e.fillStyle="#f6d36b",e.font="800 64px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#3a120d",e.shadowOffsetX=3,e.shadowOffsetY=3,e.fillText(i,256,84,460);const n=new On(t);return n.colorSpace=Oe,new $(new ui(1.9,.6),new $t({map:n,roughness:.5}))}function vM(){const i=new xe,t=Kn*.42,e=1.15;return i.setAttribute("position",new Zt([-t,0,0,t,0,0,0,e,0],3)),i.setAttribute("uv",new Zt([0,0,1,0,.5,1],2)),i.computeVertexNormals(),i}function _M(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#1f4d3a",t.fillRect(0,0,256,256),t.fillStyle="#a3291f",t.beginPath(),t.moveTo(128,40),t.lineTo(200,170),t.lineTo(128,240),t.lineTo(56,170),t.closePath(),t.fill(),t.strokeStyle="#f6d36b",t.lineWidth=8,t.stroke();for(const[n,s,o]of[[128,150,"#e04f6a"],[108,175,"#f2efe0"],[148,175,"#e8a43c"]])t.fillStyle=o,t.beginPath(),t.arc(n,s,14,0,Math.PI*2),t.fill();const e=new On(i);return e.colorSpace=Oe,e}function xM(i){const t=new bt;i.group.updateMatrixWorld(!0);const e=Ii(i.group,s=>{const o=s.clone();o.matrixAutoUpdate=!1,o.matrix.copy(s.matrixWorld),t.add(o)}),n=new $(e,Ci());return n.castShadow=n.receiveShadow=!0,t.add(n),t}const Qs=16e3,ll=Qs*Nn*Nn/12,MM=650,yM=700,bM=7,Fr=.3,to=-3,Si=5,yu=(()=>{const i=Kn/2,t=Nn/2;return[[0,t],[.55,t-.6],[-.55,t-.6],[i,t-3],[-i,t-3],[i,2],[-i,2],[i,-3],[-i,-3],[i*.95,-t+.4],[-i*.95,-t+.4],[0,-t]]})();class wM{constructor(t,e){D(this,"x",0);D(this,"z",0);D(this,"psi",0);D(this,"u",0);D(this,"v",0);D(this,"r",0);D(this,"notch",0);D(this,"thrust",0);D(this,"rudder",0);D(this,"s",0);D(this,"d",0);D(this,"contacts",[]);D(this,"obstacles",[]);D(this,"tethers",[]);D(this,"bowThrust",0);this.route=t,this.ww=e}placeAt(t,e=!0){const n=this.route.frame(t);this.x=n.x,this.z=n.z,this.psi=Math.atan2(n.tx,n.tz)+(e?0:Math.PI),this.s=t,this.u=this.v=this.r=0}get speed(){return Math.hypot(this.u,this.v)}span(){let t=1/0,e=-1/0;for(const[n,s]of yu){const[o,r]=this.toWorld(n,s),a=this.route.project(o,r,this.s);t=Math.min(t,a.s),e=Math.max(e,a.s)}return[t,e]}step(t,e){const n=ye(e,-1,1),s=n===0?2.2:1.6;this.rudder+=ye(n-this.rudder,-s*t,s*t);const o=this.notch>=0?this.notch*MM:this.notch*yM;this.thrust+=ye(o-this.thrust,-2200*t,2200*t);const{u:r,v:a,r:l}=this,c=this.thrust,h=this.rudder*(300*r*Math.abs(r)+.85*Math.max(c,0)),d=c-480*r*Math.abs(r)-250*r,p=-9e3*a*Math.abs(a)-4e3*a+h*.3-this.bowThrust*1700;let f=h*bM-12e4*l-6e5*l*Math.abs(l);c<0&&(f+=.12*c*1.5);const g=this.bowThrust*1700;f+=g*(Nn/2-1),this.u+=(d/Qs-a*l)*t,this.v+=(p/Qs+r*l)*t,this.r+=f/ll*t,this.psi+=this.r*t;const v=Math.sin(this.psi),m=Math.cos(this.psi);this.x+=(this.u*v-this.v*m)*t,this.z+=(this.u*m+this.v*v)*t,this.contacts.length=0;for(let x=0;x<2;x++)this.resolveContacts(),this.resolveExtras();const u=this.route.project(this.x,this.z,this.s);this.s=u.s,this.d=u.d}toWorld(t,e){const n=Math.sin(this.psi),s=Math.cos(this.psi);return[this.x+e*n-t*s,this.z+e*s+t*n]}resolveContacts(){const{route:t,ww:e}=this,n=e.gates.filter(o=>Math.abs(o.s-this.s)<Nn+6&&e.gateBlocks(o)),s=this.obstacles.filter(o=>Math.abs(o.x-this.x)+Math.abs(o.z-this.z)<45);for(const[o,r]of yu){const[a,l]=this.toWorld(o,r),c=t.project(a,l,this.s),h=t.frame(c.s),d=e.halfWidthAt(c.s)-.05;if(Math.abs(c.d)>d){const p=Math.sign(c.d);this.applyContact(a,l,h.nx*p,h.nz*p,Math.abs(c.d)-d,"bank")}for(const p of n)this.s<p.s&&c.s>p.s-Fr?this.applyContact(a,l,h.tx,h.tz,c.s-(p.s-Fr),"gate"):this.s>p.s&&c.s<p.s+Fr&&this.applyContact(a,l,-h.tx,-h.tz,p.s+Fr-c.s,"gate");for(const p of s){const f=a-p.x,g=l-p.z,v=Math.sin(p.psi),m=Math.cos(p.psi),u=f*v+g*m,x=-f*m+g*v,M=p.halfB+.05-Math.abs(x),_=p.halfL+.05-Math.abs(u);if(!(M<=0||_<=0))if(M<_){const T=-Math.sign(x)||1;this.applyContact(a,l,-m*T,v*T,M,"boat",p)}else{const T=-Math.sign(u)||1;this.applyContact(a,l,v*T,m*T,_,"boat",p)}}c.s<2&&this.applyContact(a,l,-h.tx,-h.tz,2-c.s,"bank"),c.s>t.length-2&&this.applyContact(a,l,h.tx,h.tz,c.s-(t.length-2),"bank")}}resolveExtras(){const t=Math.sin(this.psi),e=Math.cos(this.psi),n=Kn/2,s=Nn/2;for(const o of this.obstacles){if(Math.abs(o.x-this.x)+Math.abs(o.z-this.z)>45)continue;const r=Math.sin(o.psi),a=Math.cos(o.psi);for(const[l,c]of[[o.halfB,o.halfL],[-o.halfB,o.halfL],[o.halfB,-o.halfL],[-o.halfB,-o.halfL]]){const h=o.x+c*r-l*a,d=o.z+c*a+l*r,p=h-this.x,f=d-this.z,g=p*t+f*e,v=-p*e+f*t,m=n-Math.abs(v),u=s-.6-Math.abs(g);m<=0||u<=0||(m<u?this.applyContact(h,d,-e*Math.sign(v),t*Math.sign(v),m,"boat",o):this.applyContact(h,d,t*Math.sign(g),e*Math.sign(g),u,"boat",o))}}for(const o of this.tethers){const[r,a]=this.toWorld(o.local[0],o.local[1]),l=r-o.anchor[0],c=a-o.anchor[1],h=Math.hypot(l,c);h>o.length&&this.applyContact(r,a,l/h,c/h,h-o.length,"bank",void 0,!0)}}applyContact(t,e,n,s,o,r,a,l=!1){this.x-=n*o,this.z-=s*o;const c=t-this.x,h=e-this.z,d=Math.sin(this.psi),p=Math.cos(this.psi);let f=this.u*d-this.v*p,g=this.u*p+this.v*d;const v=f+this.r*h,m=g-this.r*c,u=v*n+m*s;if(u<=0)return;const x=h*n-c*s,M=-1.15*u/(1/Qs+x*x/ll);f+=M*n/Qs,g+=M*s/Qs,this.r+=M*x/ll,f*=.995,g*=.995,this.u=f*d+g*p,this.v=-f*p+g*d,l||this.contacts.push({impulse:-M,kind:r,obstacle:a})}}const SM={KeyW:"throttleUp",ArrowUp:"throttleUp",KeyS:"throttleDown",ArrowDown:"throttleDown",Space:"neutral",KeyT:"timeFaster",KeyR:"timeSlower",KeyV:"camera",KeyM:"map",KeyH:"help",KeyN:"mute",KeyL:"headlight",KeyF:"moor",KeyG:"clear",KeyB:"horn",KeyC:"cook",KeyQ:"recenter",Enter:"nextTrip",Escape:"declineTrip"};class EM{constructor(){D(this,"held",new Set);D(this,"queue",[]);D(this,"onFirstInput",null);D(this,"touchSteer",0);addEventListener("keydown",t=>{this.onFirstInput&&(this.onFirstInput(),this.onFirstInput=null);const e=SM[t.code];e&&t.preventDefault(),!t.repeat&&(this.held.add(t.code),e&&this.queue.push(e))}),addEventListener("keyup",t=>this.held.delete(t.code)),addEventListener("blur",()=>this.held.clear())}get steer(){const t=this.held.has("KeyA")||this.held.has("ArrowLeft"),e=this.held.has("KeyD")||this.held.has("ArrowRight");return(t?1:0)-(e?1:0)||this.touchSteer}get bowThrust(){return(this.held.has("KeyZ")?1:0)-(this.held.has("KeyX")?1:0)}push(t){this.queue.push(t)}drain(){return this.queue.splice(0)}}const Fc=new URLSearchParams(location.search).get("area")==="pontcysyllte"?"pontcysyllte":"chester",TM=[["chester","Chester"],["pontcysyllte","Pontcysyllte Aqueduct"]],wn=matchMedia("(pointer: coarse)").matches,bu=i=>wn?i.replace(/ ?\((?:[A-Z]|Enter|Esc)\)/g,""):i,AM={F:"moor",G:"clear"};function wu(i,t){let e=0;i.addEventListener("pointerdown",n=>{const s=performance.now();if(s-e>350)return void(e=s);e=0,n.preventDefault(),n.stopImmediatePropagation(),t()})}class CM{constructor(t,e,n,s){D(this,"root");D(this,"loc");D(this,"helm");D(this,"lockPanel");D(this,"tip");D(this,"panelGroup",null);D(this,"nopeUntil",0);D(this,"nopeText","");D(this,"nopeGate",-1);D(this,"onGateTap",null);D(this,"toasts");D(this,"help");D(this,"chip");D(this,"trip");D(this,"promptEl");D(this,"summary");D(this,"lastTrip","");D(this,"offer");D(this,"lift");D(this,"tripTapOffers",!1);D(this,"lastPrompt","");D(this,"lastLock","");D(this,"lastHelm","");D(this,"lastLoc","");D(this,"winding",!1);D(this,"act");D(this,"galleyChip");D(this,"galleyCard");D(this,"lastGalley","");D(this,"repChip");D(this,"repHelp");D(this,"lastRep","");D(this,"onSteer",null);D(this,"onNotch",null);D(this,"paintNotch",()=>{});D(this,"speedEl");D(this,"promptKey","");D(this,"lockCollapsed",!1);var r;this.act=e,this.root=t,t.innerHTML=`
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
      <div class="map-wrap"><div class="area-pick"><span>Go to</span>${TM.map(([a,l])=>`<a href="?area=${a}" class="${a===Fc?"on":""}">${l}</a>`).join("")}</div></div>
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
      </div>`,this.loc=t.querySelector(".loc"),this.helm=t.querySelector(".helm"),this.lockPanel=t.querySelector(".lock-panel"),this.toasts=t.querySelector(".toasts"),this.help=t.querySelector(".help"),this.chip=t.querySelector(".chip"),(r=t.querySelector(".map-btn"))==null||r.addEventListener("click",()=>e("map"));const o=t.querySelector(".recenter-btn");o.addEventListener("pointerdown",a=>a.preventDefault()),o.addEventListener("click",()=>e("recenter")),this.galleyChip=t.querySelector(".galley-chip"),this.galleyChip.addEventListener("pointerdown",a=>a.preventDefault()),this.galleyCard=document.createElement("div"),this.galleyCard.className="galley-card card",this.galleyCard.hidden=!0,t.appendChild(this.galleyCard),this.galleyChip.addEventListener("click",()=>{this.galleyCard.hidden=!this.galleyCard.hidden,this.galleyCard.hidden||this.closeOthers("galley")}),this.galleyCard.addEventListener("pointerdown",a=>a.preventDefault()),this.galleyCard.addEventListener("click",a=>{var c;((c=a.target.closest("button"))==null?void 0:c.dataset.act)==="cook"?e("cook"):this.galleyCard.hidden=!0}),this.repChip=t.querySelector(".rep-chip"),this.repChip.addEventListener("pointerdown",a=>a.preventDefault()),this.repHelp=document.createElement("div"),this.repHelp.className="rep-help card",this.repHelp.hidden=!0,this.repHelp.innerHTML=`
      <div class="eyebrow">Your reputation on the cut</div>
      <div class="rep-now"></div>
      <p>Boaters, keepers and hitchhikers notice how you handle the boat. Be well thought of and they're kinder to you.</p>
      <div class="rep-cols">
        <div><b class="up">Earns it</b><ul><li>Slowing right down past moored boats</li><li>Giving lifts</li><li>Clearing blockages</li><li>A mission with no bumps or wash</li><li>Passing boats on the right, with a wave</li></ul></div>
        <div><b class="down">Costs it</b><ul><li>Wash rocking moored boats</li><li>Bumping boats, kayaks, gates, the bank</li><li>Speeding (over 4 mph)</li><li>Paddles left up</li><li>Splashing anglers</li><li>Running over ducks and swans (sound the horn!)</li><li>Passing on the wrong side</li><li>Cruising after dark</li></ul></div>
      </div>
      <p class="muted">Tap to close</p>`,t.appendChild(this.repHelp),this.repChip.addEventListener("click",()=>{this.repHelp.hidden=!this.repHelp.hidden,this.repHelp.hidden||this.closeOthers("rep")}),this.repHelp.addEventListener("click",()=>this.repHelp.hidden=!0),this.trip=t.querySelector(".trip"),this.promptEl=t.querySelector(".prompt"),this.summary=t.querySelector(".summary"),this.offer=t.querySelector(".offer"),this.lift=t.querySelector(".pill.lift"),this.offer.addEventListener("click",a=>{var c;const l=(c=a.target.closest("button"))==null?void 0:c.dataset.act;l&&e(l)});for(const a of[this.loc,this.trip])a.addEventListener("pointerdown",l=>l.preventDefault()),a.addEventListener("click",()=>{a===this.trip&&this.tripTapOffers?e("tripOffer"):a.classList.toggle("open")});if(this.summary.addEventListener("click",a=>{a.target.closest("button")&&e("nextTrip")}),this.chip.addEventListener("pointerdown",a=>a.preventDefault()),this.buildHelm(),this.chip.addEventListener("click",a=>{const l=a.target;l.closest(".chip-help")?e("help"):l.closest(".chip-time")&&e("timeCycle")}),wn){this.buildSteerPad(t);const a=document.createElement("button");a.className="horn-btn chip",a.setAttribute("aria-label","Horn"),a.innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M3 10v4h3l6 4V6L6 10z"/><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/></svg>',a.addEventListener("pointerdown",l=>{l.preventDefault(),e("horn")}),t.appendChild(a),t.appendChild(this.chip),this.chip.classList.add("chip-dock")}this.promptEl.addEventListener("pointerdown",a=>a.preventDefault()),this.promptEl.addEventListener("click",()=>{const a=AM[this.promptKey];a&&e(a)}),t.appendChild(n),t.querySelector(".map-wrap").appendChild(s),this.lockPanel.addEventListener("pointerdown",a=>a.preventDefault()),this.lockPanel.addEventListener("click",a=>{var d;const l=a.target.closest("button");if(!l)return;if(l.dataset.ui==="collapse"){this.lockCollapsed=!this.lockCollapsed,this.lastLock="";return}const c=l.dataset.g,h=l.dataset.w;c!==void 0&&h&&this.panelGroup?(d=this.onGateTap)==null||d.call(this,this.panelGroup.gates[Number(c)],h):l.dataset.act&&e(l.dataset.act)}),this.tip=document.createElement("div"),this.tip.className="lock-tip",this.tip.hidden=!0,t.appendChild(this.tip),n.addEventListener("click",()=>e("map")),s.addEventListener("click",()=>e("map"))}closeOthers(t){t!=="galley"&&(this.galleyCard.hidden=!0),t!=="rep"&&(this.repHelp.hidden=!0),t!=="help"&&(this.help.hidden=!0),t!=="map"&&this.root.querySelector(".map-wrap.open")&&this.act("map")}toggleHelp(t){this.help.hidden=t===void 0?!this.help.hidden:!t,this.help.hidden||this.closeOthers("help")}setMapOpen(t){t&&this.closeOthers("map"),this.root.querySelector(".map-wrap").classList.toggle("open",t)}toast(t,e="info",n=4200){t=bu(t);for(const o of this.toasts.children)if(o.textContent===t)return;for(;this.toasts.children.length>=3;)this.toasts.firstElementChild.remove();const s=document.createElement("div");s.className=`toast ${e}`,s.textContent=t,this.toasts.appendChild(s),setTimeout(()=>s.classList.add("out"),n),setTimeout(()=>s.remove(),n+600)}setLocation(t,e,n){const s=t+e+n;s!==this.lastLoc&&(this.lastLoc=s,this.loc.querySelector(".head").innerHTML=`<span class="ico">📍</span>${t.replace(/ Lock\b/g,"")}`,this.loc.querySelector(".more").innerHTML=`<div class="eyebrow">Shropshire Union Canal</div><div>${e}</div><div class="journal">${n}</div>`)}setGalley(t){const e=`${Math.round(t.hunger*20)}|${t.food}|${Math.round(t.water*20)}|${t.canCook}`;if(e===this.lastGalley)return;this.lastGalley=e;const n=[t.hunger>.85?"Starving!":t.hunger>.6?"Hungry":"",t.food<=1?"🥫":"",t.water<.25?"💧":""].filter(Boolean).join(" ");this.galleyChip.innerHTML=`🍽️${n?`<span class="galley-low">${n}</span>`:""}`,this.galleyChip.classList.toggle("warn",!!n);const s=(r,a,l,c)=>`<div class="gb"><span>${r}</span><i><b class="${l?"bad":""}" style="width:${Math.round(a*100)}%"></b></i><em>${c}</em></div>`,o=1-t.hunger;this.galleyCard.innerHTML=`
      <div class="eyebrow">The galley</div>
      ${s("Fed",o,t.hunger>.6,t.hunger>.85?"starving!":t.hunger>.6?"hungry":t.hunger>.3?"peckish":"full")}
      ${s("Larder",t.food/t.foodMax,t.food<=1,`${t.food} meal${t.food===1?"":"s"}`)}
      ${s("Water",t.water,t.water<.25,`${Math.round(t.water*100)}%`)}
      <button class="go" data-act="cook" ${t.canCook?"disabled":""}>🍳 Cook a meal</button>
      <p class="muted">${t.canCook??"Uses a meal from the larder and some water. Takes half an hour."}</p>
      <p class="muted">Eat out at canalside pubs and cafés · restock at Tesco and Waitrose · fill the tank at the 💧 water points (blue on the map, a WATER sign on the towpath).</p>`}setRep(t,e,n,s){const o=`${Math.round(t)}|${e}`;o!==this.lastRep&&(this.lastRep=o,this.repChip.querySelector(".rep-face").textContent=n,this.repChip.querySelector(".rep-num").textContent=String(Math.round(t)),this.repChip.classList.toggle("bad",t<0),this.repHelp.querySelector(".rep-now").innerHTML=`<span class="big">${n} ${Math.round(t)}</span> Known as <b>${e}</b>`+(s?`<div class="muted">${s.need} more to be ${s.face} <b>${s.text}</b></div>`:'<div class="muted">As good as it gets!</div>'))}repPulse(t,e){const n=document.createElement("div");n.className=`rep-pop ${t>0?"up":"down"}`,n.textContent=`${t>0?"+":"−"}${Math.abs(t)} ${e}`;const s=this.repChip.getBoundingClientRect(),o=this.repChip.closest("#hud").getBoundingClientRect();n.style.left=`${s.left-o.left+s.width/2}px`,n.style.top=`${s.bottom-o.top+4}px`,this.repChip.closest("#hud").appendChild(n),this.repChip.classList.remove("flash-up","flash-down"),this.repChip.offsetWidth,this.repChip.classList.add(t>0?"flash-up":"flash-down"),setTimeout(()=>n.remove(),2600)}buildSteerPad(t){const e=document.createElement("div");e.className="steer-pad card",e.innerHTML='<span class="arr">‹</span><div class="track"><div class="knob"></div></div><span class="arr">›</span>',t.appendChild(e);const n=e.querySelector(".knob");let s=null;const o=a=>{var l;n.style.transform=`translateX(${-a*40}px)`,(l=this.onSteer)==null||l.call(this,a)};e.addEventListener("pointerdown",a=>{a.preventDefault();const l=e.getBoundingClientRect();s={x:l.left+l.width/2,id:a.pointerId},e.setPointerCapture(a.pointerId),e.classList.add("held"),o(Math.max(-1,Math.min(1,-(a.clientX-s.x)/40)))}),e.addEventListener("pointermove",a=>{s&&a.pointerId===s.id&&o(Math.max(-1,Math.min(1,-(a.clientX-s.x)/40)))});const r=a=>{!s||a.pointerId!==s.id||(s=null,e.classList.remove("held"),o(0))};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r)}buildRail(){const t=[];for(let a=Si;a>=to;a--)t.push(`<div class="pip ${a>0?"ahead":a<0?"astern":"n"}" data-n="${a}" style="grid-row: ${Si-a+1}"></div>`);const e=a=>Si-a+1;t.push(`<span style="grid-row: ${e(Si)} / ${e(1)+1}">FWD</span>`,`<span style="grid-row: ${e(0)}">N</span>`,`<span style="grid-row: ${e(-1)} / ${e(to)+1}">REV</span>`),this.helm.classList.add("rail-helm"),this.helm.innerHTML=`<div class="spd">0.0</div><div class="unit">mph</div><div class="rail">${t.join("")}</div>`,this.speedEl=this.helm.querySelector(".spd");const n=[...this.helm.querySelectorAll(".pip")];this.paintNotch=a=>n.forEach(l=>l.classList.toggle("on",Number(l.dataset.n)===a));const s=this.helm.querySelector(".rail"),o=a=>{const l=s.getBoundingClientRect(),c=Math.floor((a.clientY-l.top)/l.height*n.length);return Si-Math.max(0,Math.min(n.length-1,c))};let r=!1;wu(this.helm,()=>{var a;r=!1,(a=this.onNotch)==null||a.call(this,0)}),s.addEventListener("pointerdown",a=>{var l;a.preventDefault(),r=!0,s.setPointerCapture(a.pointerId),(l=this.onNotch)==null||l.call(this,o(a))}),s.addEventListener("pointermove",a=>{var l;return r&&((l=this.onNotch)==null?void 0:l.call(this,o(a)))}),s.addEventListener("pointerup",()=>r=!1),s.addEventListener("pointercancel",()=>r=!1)}buildHelm(){if(wn)return this.buildRail();const t=Bi.x,e=Bi.y,n=48,s=(f,g)=>{const v=f*Math.PI/180;return[t+Math.sin(v)*g,e-Math.cos(v)*g]},o=(f,g,v)=>{const[m,u]=s(f,v),[x,M]=s(g,v);return`M${m.toFixed(1)},${u.toFixed(1)} A${v},${v} 0 0 1 ${x.toFixed(1)},${M.toFixed(1)}`},r=[];for(let f=to;f<=Si;f++){const[g,v]=s(f*Zs,n-4),[m,u]=s(f*Zs,n+(f===0?7:4));r.push(`<line x1="${g}" y1="${v}" x2="${m}" y2="${u}" class="${f===0?"tick n":"tick"}"/>`)}const[a,l]=s(0,n+14);this.helm.innerHTML=`
      <svg class="lever" viewBox="0 0 ${Bi.w} ${Bi.h}" width="${Bi.w}" height="${Bi.h}">
        <path d="${o(to*Zs,0,n)}" class="band astern"/>
        <path d="${o(0,Si*Zs,n)}" class="band ahead"/>
        ${r.join("")}
        <text x="${a}" y="${l+3}" class="lbl n">N</text>
        <g class="arm"><line x1="${t}" y1="${e-n+15}" x2="${t}" y2="${e-n+4}"/><circle cx="${t}" cy="${e-n}" r="7.5"/></g>
        <text x="${t}" y="${e-6}" class="spd">0.0</text>
        <text x="${t}" y="${e+5}" class="unit">mph</text>
      </svg>`;const c=this.helm.querySelector(".arm");this.paintNotch=f=>{c.style.transform=`rotate(${f*Zs}deg)`,c.classList.toggle("astern",f<0),c.classList.toggle("neutral",f===0)},this.speedEl=this.helm.querySelector(".spd");const h=this.helm.querySelector("svg"),d=f=>{const g=h.getBoundingClientRect(),v=(f.clientX-g.left)/g.width*Bi.w-t,m=(f.clientY-g.top)/g.height*Bi.h-e,u=Math.atan2(v,-m)*180/Math.PI;return Math.max(to,Math.min(Si,Math.round(u/Zs)))};let p=!1;wu(h,()=>{var f;p=!1,(f=this.onNotch)==null||f.call(this,0)}),h.addEventListener("pointerdown",f=>{var g;f.preventDefault(),p=!0,h.setPointerCapture(f.pointerId),(g=this.onNotch)==null||g.call(this,d(f))}),h.addEventListener("pointermove",f=>{var g;return p&&((g=this.onNotch)==null?void 0:g.call(this,d(f)))}),h.addEventListener("pointerup",()=>p=!1),h.addEventListener("pointercancel",()=>p=!1)}setHelm(t){const e=`${t.notch}|${t.speedMph.toFixed(1)}`;e!==this.lastHelm&&(this.lastHelm=e,this.paintNotch(t.notch),this.speedEl.textContent=t.speedMph.toFixed(1));const n=`<span class="chip-time">${t.clock} · ${t.timeScale}×</span> <span class="chip-help"><kbd>H</kbd> help</span>`;this.chip.innerHTML!==n&&(this.chip.innerHTML=n)}setTrip(t){const e=JSON.stringify(t);if(e===this.lastTrip)return;this.lastTrip=e,this.tripTapOffers=!1,this.trip.hidden=t.state==="none",t.state==="none"&&this.trip.classList.remove("open");const n=t.state==="active"?`<span class="ico">🎯</span>${t.where}`:t.state==="done"?'<span class="ico">✅</span>Mission complete · <kbd>Enter</kbd>':'<span class="ico">🧭</span>Just cruising · tap for a trip';this.trip.querySelector(".head").innerHTML=n,this.trip.querySelector(".more").innerHTML=t.state==="none"?"":`<div class="eyebrow">Mission · ${t.title}</div><div>${t.brief}</div>`,this.trip.classList.toggle("idle",t.state==="none")}showOffer(t,e,n,s="Accept",o="Not now"){this.offer.innerHTML=`
      <div class="eyebrow">${t}</div>
      <div class="title">${e}</div>
      <p>${n}</p>
      <div class="buttons">
        <button data-act="nextTrip" class="go"><kbd>Enter</kbd> ${s}</button>
        <button data-act="declineTrip"><kbd>Esc</kbd> ${o}</button>
      </div>`,this.offer.hidden=!1}setLift(t){this.lift.hidden=!t,t&&(t=bu(t)),t&&this.lift.textContent!==t&&(this.lift.innerHTML=`<div class="head"><span class="ico">🧑</span>${t}</div>`)}hideOffer(){this.offer.hidden=!0}get offerOpen(){return!this.offer.hidden}setPrompt(t){this.promptKey=(t==null?void 0:t.key)??"";const e=t?`<kbd>${t.key}</kbd> ${t.text}`:"";e!==this.lastPrompt&&(this.lastPrompt=e,this.promptEl.innerHTML=e,this.promptEl.classList.toggle("waiting",!!t&&!t.ready)),this.promptEl.hidden=!t}showSummary(t,e,n){const s=Math.floor(t.hours),o=Math.round((t.hours-s)*60);this.summary.innerHTML=`
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
      <button><kbd>Enter</kbd> Carry on</button>`,this.summary.hidden=!1}hideSummary(){this.summary.hidden=!0}get isWinding(){return this.winding}nope(t,e){this.panelGroup&&(this.nopeGate=this.panelGroup.gates.indexOf(t),this.nopeText=e,this.nopeUntil=performance.now()+2200,this.lastLock="")}showWorldTip(t,e,n){const s=this.lockPanel.parentElement.getBoundingClientRect();this.tip.textContent!==t&&(this.tip.textContent=t),this.tip.className="lock-tip",this.tip.style.left=`${e-s.left}px`,this.tip.style.top=`${n-s.top}px`,this.tip.hidden=!1}setLockPanel(t,e){const n=e==null?void 0:e.step;if(this.tip.hidden=!0,!e||!n){this.lockPanel.hidden=!0,this.lockPanel.parentElement.classList.remove("in-lock"),this.lastLock="",this.winding=!1,this.panelGroup=null;return}const s=n.group;this.panelGroup=s;const o=n.uphill,r=e.volunteers==="active";this.winding=s.gates.some(y=>y.paddle>0&&y.paddle<1);const a=performance.now()<this.nopeUntil,l=s.bodies.map(y=>t.bodies[y]);let c=1/0,h=-1/0;for(const y of l)c=Math.min(c,y.lo-1.6),h=Math.max(h,y.hi+.6);const d=y=>Math.round((y-c)/(h-c)*100);let p=l.map((y,P)=>P);o||p.reverse();const f=7;let g=0,v=0;if(p.length>f){const y=Math.max(0,p.indexOf(n.boatBody)),P=Math.max(0,Math.min(p.length-f,y-3));g=P,v=p.length-(P+f),p=p.slice(P,P+f)}const m=n.boatBody>=0?(l[n.boatBody].s0+l[n.boatBody].s1)/2:NaN,u=[...n.adjacent].sort((y,P)=>o?y.s-P.s:P.s-y.s),x=y=>u.includes(y)?u.length===2?y===u[0]?"behind":"ahead":Number.isNaN(m)?"here":(y.s-m)*(o?1:-1)>0?"ahead":"behind":"",M=[];g&&M.push(`<div class="dg-more">⋯ +${g}</div>`),p.forEach((y,P)=>{const A=l[y],k=A.kind==="pound"?"canal":s.staircase?A.label.replace("chamber ",""):"lock",F=n.boatBody===y?'<i class="dg-boat"></i>':"";if(M.push(`<div class="dg-body ${A.kind}"><div class="dg-floor" style="height:${d(A.lo-1.6)}%"></div><div class="dg-water" style="height:${d(A.level)}%">${F}</div><span>${k}</span></div>`),P<p.length-1){const W=o?y:y-1,H=s.gates[W],B=x(H),G=[H.open>.5?"open":"shut",H.paddle>.5?"pup":"",B?`mine ${B}`:"dim"].join(" ");M.push(`<div class="dg-gate ${G}"><i class="dg-leaf"></i><i class="dg-pflag"></i>`+(H.paddle>.05?'<i class="dg-flow"></i>':"")+(B?`<i class="dg-tag">${B==="behind"?"B":"A"}</i>`:"")+"</div>")}}),v&&M.push(`<div class="dg-more">+${v} ⋯</div>`);const _={paddlesUp:"Raise paddles",paddlesDown:"Drop paddles",open:"Open gates",close:"Close gates"},T=(y,P)=>n.gate===y&&!n.keeper&&n.action in _?n.action:y.wantOpen?y.wantPaddle?"paddlesDown":P==="ahead"||P==="here"?null:"close":y.wantPaddle?e.levelsMatch(y)&&P!=="behind"?"open":"paddlesDown":P==="behind"?null:e.levelsMatch(y)?"open":"paddlesUp",E=u.map(y=>{const P=x(y),A=s.gates.indexOf(y),k=`${y.open>.97?"Open":y.open>.02?y.wantOpen?"Opening…":"Closing…":"Shut"} · paddles ${y.paddle>.97?"up":y.paddle>.02?y.wantPaddle?"going up":"going down":"down"}`,F=r?null:T(y,P),W=F&&n.gate===y&&!n.keeper&&n.action===F,H=r?'<div class="lc-btn none">Volunteers working</div>':F?`<button class="lc-btn ${W?"guide":""}" data-g="${A}" data-w="${F}" tabindex="-1">${_[F]}</button>`:'<div class="lc-btn none">✓ Done</div>',B=P==="behind"?"◀ Behind":P==="ahead"?"Ahead ▶":"Here";return`<div class="lc ${P} ${a&&A===this.nopeGate?"nope":""}"><div class="lc-where">${B} <b>${RM(y.label)}</b></div><div class="lc-state">${k}</div>${H}</div>`}),S=e.volunteers==="available"?'<button class="lp-volchip" data-act="autopilot" tabindex="-1">Auto</button>':r?'<button class="lp-volchip on" data-act="autopilot" tabindex="-1">Take over</button>':"",R=a?this.nopeText:r?`Volunteers: ${n.text}`:n.text,w=`
      <div class="lp-head"><span class="lp-title">${s.name} ${o?"↑":"↓"}</span>${S}<button class="lp-fold" data-ui="collapse" tabindex="-1" aria-label="${this.lockCollapsed?"Expand":"Collapse"}">${this.lockCollapsed?"▾":"▴"}</button></div>
      ${this.lockCollapsed||r&&wn?"":`<div class="dg">${M.join("")}</div>`}
      ${r||this.lockCollapsed?"":`<div class="lc-row">${E.join("")}</div>`}
      ${r&&wn?"":`<div class="lp-status ${a?"warn":""}">${R}</div>`}`;w!==this.lastLock&&(this.lastLock=w,this.lockPanel.innerHTML=w),this.lockPanel.hidden=!1,this.lockPanel.parentElement.classList.add("in-lock")}}const RM=i=>i[0].toUpperCase()+i.slice(1),Zs=15,Bi={x:62,y:68,w:124,h:76},Su="canal.installDismissed",Eu="canal.appInstalled";function PM(i){const t=matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches||navigator.standalone;if(!wn||t)return;try{if(sessionStorage.getItem(Su)||localStorage.getItem(Eu))return}catch{}const e=navigator.userAgent,n=/iPhone|iPad|iPod/.test(e)||e.includes("Mac")&&navigator.maxTouchPoints>1,s=/CriOS|EdgiOS/.test(e),o=document.createElement("div");o.className="install card",o.hidden=!0,i.appendChild(o);const r=(c,h=!1,d=!1)=>{o.innerHTML=`
      <div class="eyebrow">Get the app</div>
      <div class="title">Install Canal as an app</div>
      <p>Free, no app store. It runs full screen with no browser bars, works better with touch, and opens from your home screen like any other app.</p>
      ${c}
      <div class="buttons">
        ${h?'<button class="go" data-act="install">Install app</button>':""}
        ${d?'<button data-act="have">I already have it</button>':""}
        <button data-act="later">Not now</button>
      </div>`,o.hidden=!1};let a=null;o.addEventListener("click",async c=>{var d;const h=(d=c.target.closest("button"))==null?void 0:d.dataset.act;if(h==="install"&&a)await a.prompt(),a=null,o.hidden=!0;else if(h==="have"){o.hidden=!0;try{localStorage.setItem(Eu,"1")}catch{}}else if(h==="later"){o.hidden=!0;try{sessionStorage.setItem(Su,"1")}catch{}}});const l='<svg class="ios-share" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M6 11H5v10h14V11h-1"/></svg>';if(n){const c=s?`Tap Share ${l} in the address bar at the top`:/FxiOS/.test(e)?`Tap the ☰ menu, then Share ${l}`:`Tap <b>•••</b> next to the address bar, then Share ${l} (if you see ${l} already, just tap that)`;r(`<ol>
      <li>${c}</li>
      <li>Scroll down and tap <b>Add to Home Screen</b>, then <b>Add</b></li>
      <li>Open Canal from its new icon on your home screen</li>
    </ol>`,!1,!0)}else addEventListener("beforeinstallprompt",c=>{c.preventDefault(),a=c,r("",!0)}),addEventListener("appinstalled",()=>o.hidden=!0)}const cl="canal.rep",zr=[[-1/0,"a menace on the cut","😠"],[-40,"a bit of a liability","😟"],[-15,"new on the cut","😐"],[15,"a friendly boat","🙂"],[40,"a courteous boat","😊"],[70,"a canal favourite","🤩"]];class LM{constructor(){D(this,"score",0);D(this,"lastAt",new Map);D(this,"onStanding",null);D(this,"onChange",null);try{this.score=Number(localStorage.getItem(cl))||0}catch{}const t=new URLSearchParams(location.search).get("rep");if(t!==null){this.score=Math.max(-100,Math.min(100,Number(t)||0));try{localStorage.setItem(cl,String(this.score))}catch{}}}get standing(){return zr.filter(([t])=>this.score>=t).at(-1)[1]}get face(){return zr.filter(([t])=>this.score>=t).at(-1)[2]}get next(){const t=zr.find(([e])=>e>this.score);return t?{text:t[1],face:t[2],need:Math.ceil(t[0]-this.score)}:null}atLeast(t){var n;const e=((n=zr.find(([,s])=>s===t))==null?void 0:n[0])??0;return this.score>=e}change(t,e,n=8){var a,l;const s=performance.now()/1e3;if(s-(this.lastAt.get(e)??-1/0)<n)return;this.lastAt.set(e,s),t>0&&this.score<0&&(t=Math.round(t*(1-this.score/50)));const o=this.standing;this.score=Math.max(-100,Math.min(100,this.score+t));try{localStorage.setItem(cl,String(Math.round(this.score)))}catch{}(a=this.onChange)==null||a.call(this,t,e);const r=this.standing;r!==o&&((l=this.onStanding)==null||l.call(this,r,t>0))}}const Tu="canal.galley",DM=6,ea=6,Au=.15;class IM{constructor(){D(this,"hunger",.2);D(this,"food",4);D(this,"water",.8);D(this,"lastMeal",-99);D(this,"saveAt",0);try{const e=JSON.parse(localStorage.getItem(Tu)??"null");e&&Object.assign(this,{hunger:e.hunger,food:e.food,water:e.water})}catch{}const t=Number(new URLSearchParams(location.search).get("hunger"));t&&(this.hunger=Math.min(1,t))}tick(t,e){this.hunger=Math.min(1,this.hunger+t/DM*(e?1.5:1)),this.water=Math.max(0,this.water-t*.02),performance.now()>this.saveAt&&(this.saveAt=performance.now()+5e3,this.save())}get hungry(){return this.hunger>.6}get starving(){return this.hunger>.85}get larderLow(){return this.food<=1}get waterLow(){return this.water<.25}cannotCook(t){return t?this.food<1?"The larder is bare. Stock up at Tesco or Waitrose, or eat out.":this.water<Au?"Not enough water in the tank to cook. Fill up at a water point.":null:"Moor up first: nobody cooks on the move."}eat(t){this.hunger=0,this.lastMeal=t,this.save()}cook(t){this.food-=1,this.water=Math.max(0,this.water-Au),this.eat(t)}restock(){this.food=ea,this.save()}fillWater(){this.water=1,this.save()}wake(t){const e=t-this.lastMeal<14;return this.hunger=e?.3:.75,this.save(),e}save(){try{localStorage.setItem(Tu,JSON.stringify({hunger:this.hunger,food:this.food,water:this.water}))}catch{}}}const UM=17,Cu=4.2;function NM(i,t,e,n,s){const o=new bt,r=new $t({color:"#8a6450",roughness:.95,flatShading:!0}),a=new $t({color:"#2b2f33",roughness:.6,metalness:.4}),l=new $t({color:"#6e675c",roughness:.9}),c=(u,x=!0)=>(u.castShadow=x,u.receiveShadow=!0,o.add(u),u),h=u=>{const x=i.frame(u);return Math.atan2(x.tx,x.tz)},d=u=>t.bedAt(u)-.15,p=4;for(let u=n;u<s;u+=p){const x=Math.min(p,s-u),M=u+x/2,_=i.frame(M),T=t.halfWidthAt(M),E=t.levelAt(M),S=d(M),R=h(M),w=(F,W,H)=>(H.position.set(_.x+_.nx*F,W,_.z+_.nz*F),H.rotation.y=R,c(H));w(0,S-.15,new $(new Rt(T*2+.5,.3,x+.05),a));const y=E+.25-(S-.3);w(-Xt*(T+.12),S-.3+y/2,new $(new Rt(.25,y,x+.05),a));const P=T-.4,A=T+2.1,k=e.bankTop(M);w(Xt*(P+A)/2,k-.1,new $(new Rt(A-P,.2,x+.05),l)),w(Xt*(T+.12),(S-.3+k)/2,new $(new Rt(.25,k-S+.3,x+.05),a)),w(Xt*(A-.05),k+1.05,new $(new Rt(.06,.06,x+.05),a)),w(Xt*(A-.05),k+.55,new $(new Rt(.05,.05,x+.05),a)),w(Xt*(A-.05),k+.5,new $(new Rt(.06,1,.06),a))}for(const[u,x]of[[n,n+Yi],[s-Yi,s]])for(let _=u;_<x;_+=4){const T=_+2,E=i.frame(T),S=t.halfWidthAt(T),R=d(T)-.3,w=Xt*.9,y=Math.min(...[-1,0,1].map(k=>e.heightAt(E.x+E.nx*k*6,E.z+E.nz*k*6))),P=Math.max(1,R-y+1.5),A=c(new $(new Rt(S*2+3,P,4+.05),r));A.position.set(E.x+E.nx*w,R-P/2,E.z+E.nz*w),A.rotation.y=h(T)}const f=n+Yi,g=s-Yi,v=Math.max(1,Math.round((g-f)/UM)),m=[];for(let u=0;u<=v;u++)m.push(f+(g-f)*u/v);for(const u of m){const x=i.frame(u),M=d(u)-.3,_=e.heightAt(x.x,x.z),T=Math.max(1,M-_+1.5),E=new jt(Math.SQRT1_2,Math.SQRT1_2*(1+T/45),T,4,1).rotateY(Math.PI/4),S=c(new $(E,r)),R=t.halfWidthAt(u)*2+2.4;S.scale.set(R,1,2.2),S.position.set(x.x+x.nx*Xt*.9,M-T/2,x.z+x.nz*Xt*.9),S.rotation.y=h(u);const w=c(new $(new Rt(R+.6,.5,2.6),r));w.position.set(S.position.x,M-.25,S.position.z),w.rotation.y=h(u)}for(let u=0;u<v;u++){const x=m[u],M=m[u+1],_=(x+M)/2,T=i.frame(_),E=(M-x)/2,S=t.halfWidthAt(_),R=d(_)-.3;for(const w of[-(S-.2),-(S-.2)/3,(S-.2)/3,S-.2]){const y=c(new $(new rn(E,.22,6,24,Math.PI),a));y.scale.set(1,Cu/E,1.6),y.rotation.y=h(_)-Math.PI/2,y.position.set(T.x+T.nx*w,R-Cu,T.z+T.nz*w)}}return o}const Je=.5,Ru=650;class kM{constructor(t,e,n,s){D(this,"el");D(this,"bigEl");D(this,"base");D(this,"locks");D(this,"bigOpen",!1);D(this,"dest",null);D(this,"pan",null);D(this,"wasOpen",!1);D(this,"bigTx",{ox:0,oz:0,sk:1,dpr:1});D(this,"dragAt",null);D(this,"onTeleport",null);D(this,"places",[]);D(this,"hazards",[]);D(this,"missionStarts",[]);D(this,"missionStartsFaded",!1);D(this,"water",[]);D(this,"liftDest",null);this.b=s;const o=this.base=document.createElement("canvas");o.width=Math.ceil((s.x1-s.x0)*Je),o.height=Math.ceil((s.z1-s.z0)*Je);const r=o.getContext("2d"),a=d=>(d-s.x0)*Je,l=d=>(d-s.z0)*Je,c=(d,p)=>{r.beginPath();for(let f=0;f<d.length;f+=2)(f?r.lineTo:r.moveTo).call(r,a(d[f]),l(d[f+1]));p&&r.closePath()};r.fillStyle="#e5e9d2",r.fillRect(0,0,o.width,o.height),r.fillStyle="#c9dcaa";for(const d of t.parks)c(d.p,!0),r.fill();r.fillStyle="#9cc3d2";for(const d of t.water)c(d.p,!0),r.fill();r.strokeStyle="#9cc3d2",r.lineCap=r.lineJoin="round";for(const d of t.rivers)r.lineWidth=d.w*Je,c(d.p,!1),r.stroke();r.fillStyle="#d2c3ae";for(const d of t.buildings)c(d.p,!0),r.fill();for(const d of[0,1])for(const p of t.roads)p.w<3||(r.strokeStyle=d?"#ffffff":"#b9b2a4",r.lineWidth=p.w*Je+(d?0:1.5),c(p.p,!1),r.stroke());r.strokeStyle="#5b5550",r.lineWidth=1.5,r.setLineDash([4,3]);for(const d of t.rails)c(d.p,!1),r.stroke();r.setLineDash([]),r.strokeStyle="#2f7aa0",r.lineWidth=4,c(t.centreline,!1),r.stroke();const h=new Map;for(const d of n.gates){const p=e.frame(d.s);let f=h.get(d.lockName);f||h.set(d.lockName,f={name:d.lockName,x:0,z:0,gates:[]}),f.gates.push({x:p.x,z:p.z,nx:p.nx,nz:p.nz})}for(const d of h.values())d.x=d.gates.reduce((p,f)=>p+f.x,0)/d.gates.length,d.z=d.gates.reduce((p,f)=>p+f.z,0)/d.gates.length;this.locks=[...h.values()],this.el=document.createElement("canvas"),this.el.className="minimap",this.el.width=this.el.height=440,this.bigEl=document.createElement("canvas"),this.bigEl.className="bigmap",wn&&this.enablePan()}enablePan(){const t=this.bigEl;let e=null,n=!1;t.addEventListener("pointerdown",o=>{this.dragAt||(e={x:o.clientX,y:o.clientY,id:o.pointerId},n=!1,t.setPointerCapture(o.pointerId))}),t.addEventListener("pointermove",o=>{if(!e||o.pointerId!==e.id||!this.pan)return;const r=o.clientX-e.x,a=o.clientY-e.y;if(!n&&Math.hypot(r,a)<8)return;n=!0;const l=this.bigTx.dpr;this.pan=[this.pan[0]+r*l,this.pan[1]+a*l],e.x=o.clientX,e.y=o.clientY});const s=()=>e=null;t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("click",o=>{n&&(o.stopImmediatePropagation(),n=!1)},{capture:!0})}draw(t,e,n){const s=this.el.getContext("2d"),o=this.el.width,r=Ru*Je,a=(t-this.b.x0)*Je-r/2,l=(e-this.b.z0)*Je-r/2;s.fillStyle="#e5e9d2",s.fillRect(0,0,o,o),s.drawImage(this.base,a,l,r,r,0,0,o,o);const c=o/Ru,h=(d,p)=>[o/2+(d-t)*c,o/2+(p-e)*c];if(this.drawPlaces(s,h,2,!1),this.drawLocks(s,h,2,9),this.drawDestination(s,h,2,o),this.drawDestination(s,h,2,o,this.liftDest,"#5aa0e0","#1d3557"),this.drawWater(s,h,2),this.drawHazards(s,h,2),this.drawMissionStarts(s,h,2),this.boatMarker(s,o/2,o/2,n,1.6),this.bigOpen){const d=this.bigEl,p=Math.min(2,devicePixelRatio);d.width=d.clientWidth*p,d.height=d.clientHeight*p;const f=d.getContext("2d"),v=(wn?Math.max:Math.min)(d.width/this.base.width,d.height/this.base.height);let m=(d.width-this.base.width*v)/2,u=(d.height-this.base.height*v)/2;if(wn){(!this.wasOpen||!this.pan)&&(this.pan=[-((t-this.b.x0)*Je*v+m-d.width/2),-((e-this.b.z0)*Je*v+u-d.height/2)]);const E=Math.max(0,-m),S=Math.max(0,-u);this.pan=[Math.max(-E,Math.min(E,this.pan[0])),Math.max(-S,Math.min(S,this.pan[1]))],m+=this.pan[0],u+=this.pan[1]}f.fillStyle="#e5e9d2",f.fillRect(0,0,d.width,d.height),f.drawImage(this.base,m,u,this.base.width*v,this.base.height*v);const x=Je*v,M=(E,S)=>[m+(E-this.b.x0)*x,u+(S-this.b.z0)*x];this.drawPlaces(f,M,p,!0),this.drawLocks(f,M,p,7),this.drawDestination(f,M,p*1.3,null),this.drawDestination(f,M,p*1.3,null,this.liftDest,"#5aa0e0","#1d3557"),this.drawWater(f,M,p*1.3),this.drawHazards(f,M,p*1.3),this.drawMissionStarts(f,M,p*1.3),this.bigTx={ox:m,oz:u,sk:x,dpr:p};const[_,T]=this.dragAt??M(t,e);this.boatMarker(f,_,T,n,1.4*p),this.onTeleport&&(f.font=`800 ${12*p}px Nunito, sans-serif`,f.fillStyle="#a3291f",f.fillText("DEV: drag the boat to move it",14*p,d.height-14*p))}this.wasOpen=this.bigOpen}enableDevTeleport(t,e){this.onTeleport=e;const n=this.bigEl,s=r=>{const a=n.getBoundingClientRect();return[(r.clientX-a.left)*this.bigTx.dpr,(r.clientY-a.top)*this.bigTx.dpr]};let o=!1;n.addEventListener("pointerdown",r=>{const{ox:a,oz:l,sk:c,dpr:h}=this.bigTx,[d,p]=t(),[f,g]=s(r);Math.hypot(f-(a+(d-this.b.x0)*c),g-(l+(p-this.b.z0)*c))>30*h||(this.dragAt=[f,g],o=!1,n.setPointerCapture(r.pointerId))}),n.addEventListener("pointermove",r=>{this.dragAt&&(this.dragAt=s(r),o=!0)}),n.addEventListener("pointerup",()=>{if(!this.dragAt)return;const{ox:r,oz:a,sk:l}=this.bigTx,[c,h]=this.dragAt;this.dragAt=null,o&&e(this.b.x0+(c-r)/l,this.b.z0+(h-a)/l)}),n.addEventListener("click",r=>{o&&(r.stopImmediatePropagation(),o=!1)},{capture:!0}),n.style.cursor="default"}addMooredBoats(t){const e=this.base.getContext("2d");e.fillStyle="#5b4a8a";for(const n of t)e.save(),e.translate((n.x-this.b.x0)*Je,(n.z-this.b.z0)*Je),e.rotate(-n.psi),e.fillRect(-Math.max(1.2,n.halfB*Je),-n.halfL*Je,Math.max(2.4,n.halfB*2*Je),n.halfL*2*Je),e.restore()}setPlaces(t){this.places=t}drawPlaces(t,e,n,s){t.save(),t.textAlign="center",t.textBaseline="middle";const o=[];for(const r of this.places){const[a,l]=e(r.x,r.z);if(!(a<-20||l<-20||a>t.canvas.width+20||l>t.canvas.height+20)&&(t.fillStyle="rgba(255, 250, 235, 0.95)",t.strokeStyle=r.icon==="★"?"#1d3557":"#6e1f1a",t.lineWidth=1.5*n,t.beginPath(),t.arc(a,l,9*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#1d3557",t.font=`${r.icon==="★"?800:400} ${11*n}px Nunito, sans-serif`,t.fillText(r.icon,a,l+.5*n),s)){t.font=`700 ${10*n}px Nunito, sans-serif`;const c=t.measureText(r.name).width,h=a-c/2,d=l+11*n,p=l+23*n;if(o.some(([f,g,v,m])=>h<v&&h+c>f&&d<m&&p>g))continue;o.push([h-4*n,d,h+c+4*n,p]),t.lineWidth=3*n,t.strokeStyle="rgba(255,255,255,0.9)",t.strokeText(r.name,a,l+17*n),t.fillStyle="#3a2a1a",t.fillText(r.name,a,l+17*n)}}t.restore()}setMissionStarts(t,e=!1){this.missionStarts=t,this.missionStartsFaded=e}drawMissionStarts(t,e,n){t.save(),t.textAlign="center",t.textBaseline="middle",t.globalAlpha=this.missionStartsFaded?.45:1;for(const[s,o]of this.missionStarts){const[r,a]=e(s,o);t.fillStyle="#5ec27a",t.strokeStyle="#1f4d3a",t.lineWidth=2*n,t.beginPath(),t.arc(r,a-12*n,8*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#10261c",t.font=`900 ${11*n}px Nunito, sans-serif`,t.fillText("!",r,a-11.5*n)}t.restore()}setWaterPoints(t){this.water=t}drawWater(t,e,n){t.save(),t.fillStyle="#2f8fd8",t.strokeStyle="#ffffff",t.lineWidth=1.5*n;for(const[s,o]of this.water){const[r,a]=e(s,o);t.beginPath(),t.moveTo(r,a-7*n),t.bezierCurveTo(r+5*n,a-1*n,r+4.5*n,a+5*n,r,a+5*n),t.bezierCurveTo(r-4.5*n,a+5*n,r-5*n,a-1*n,r,a-7*n),t.fill(),t.stroke()}t.restore()}setHazards(t){this.hazards=t}drawHazards(t,e,n){for(const[s,o]of this.hazards)this.drawHazard(t,e(s,o),n)}drawHazard(t,[e,n],s){t.save(),t.fillStyle="#ffcf4a",t.strokeStyle="#7a2f00",t.lineWidth=1.5*s,t.beginPath(),t.moveTo(e,n-10*s),t.lineTo(e+9*s,n+6*s),t.lineTo(e-9*s,n+6*s),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#7a2f00",t.font=`900 ${10*s}px Nunito, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("!",e,n+1*s),t.restore()}clearDestination(){this.dest=null}setDestination(t,e,n){this.dest={x:t,z:e,name:n}}drawDestination(t,e,n,s,o=this.dest,r="#ffcf4a",a="#7a5a10"){if(!o)return;let[l,c]=e(o.x,o.z);if(s!==null){const h=s/2,d=l-h,p=c-h,f=Math.hypot(d,p),g=h-14*n;f>g&&(l=h+d/f*g,c=h+p/f*g)}t.save(),t.fillStyle=r,t.strokeStyle=a,t.lineWidth=1.5*n,t.beginPath(),t.moveTo(l,c),t.lineTo(l,c-18*n),t.stroke(),t.beginPath(),t.moveTo(l,c-18*n),t.lineTo(l+12*n,c-13.5*n),t.lineTo(l,c-9*n),t.closePath(),t.fill(),t.stroke(),t.restore()}drawLocks(t,e,n,s){t.save(),t.lineCap="round";for(const o of this.locks)for(const r of o.gates){const[a,l]=e(r.x,r.z),c=r.nx*s*n,h=r.nz*s*n;for(const[d,p]of[[5,"#ffffff"],[2.5,"#1b1b1b"]])t.strokeStyle=p,t.lineWidth=d*n,t.beginPath(),t.moveTo(a-c,l-h),t.lineTo(a+c,l+h),t.stroke()}t.font=`800 ${12*n}px Nunito, sans-serif`,t.textBaseline="middle";for(const o of this.locks){const[r,a]=e(o.x,o.z),l=o.gates.length>2?`${o.name} · ${o.gates.length-1} locks`:o.name,c=t.measureText(l).width,h=20*n,d=8*n,p=r-c/2-d,f=a-h-12*n;t.fillStyle="rgba(31, 77, 58, 0.94)",t.beginPath(),t.roundRect(p,f,c+d*2,h,h/2),t.fill(),t.beginPath(),t.moveTo(r-5*n,f+h-.5),t.lineTo(r+5*n,f+h-.5),t.lineTo(r,f+h+6*n),t.fill(),t.fillStyle="#f6efdd",t.fillText(l,p+d,f+h/2+n)}t.restore()}boatMarker(t,e,n,s,o){t.save(),t.translate(e,n),t.rotate(-s+Math.PI),t.scale(o,o),t.fillStyle="#a3291f",t.strokeStyle="#fff",t.lineWidth=2,t.beginPath(),t.moveTo(0,-11),t.lineTo(6,8),t.lineTo(0,4),t.lineTo(-6,8),t.closePath(),t.stroke(),t.fill(),t.restore()}}class OM{constructor(){D(this,"ctx",null);D(this,"master");D(this,"noise");D(this,"waterGain");D(this,"rumbleGain");D(this,"nextThump",0);D(this,"engine",null);D(this,"nextBird",0);D(this,"nextClick",0);D(this,"muted",FM())}start(){if(this.ctx)return;const t=this.ctx=new AudioContext;this.master=t.createGain(),this.master.gain.value=this.muted?0:.7,this.master.connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*2,t.sampleRate);const e=this.noise.getChannelData(0);for(let a=0;a<e.length;a++)e[a]=Math.random()*2-1;const n=t.createBufferSource();n.buffer=this.noise,n.loop=!0;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=900,this.waterGain=t.createGain(),this.waterGain.gain.value=0,n.connect(s).connect(this.waterGain).connect(this.master),n.start();const o=t.createBufferSource();o.buffer=this.noise,o.loop=!0;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=160,this.rumbleGain=t.createGain(),this.rumbleGain.gain.value=0,o.connect(r).connect(this.rumbleGain).connect(this.master),o.start(),this.loadEngine().catch(a=>console.warn("Engine samples unavailable, using synth",a))}async loadEngine(){const t=this.ctx,e=async c=>t.decodeAudioData(await(await fetch(c)).arrayBuffer()),[n,s]=await Promise.all([e("./audio/engine-idle.wav"),e("./audio/engine-run.wav")]),o=(c,h)=>{const d=t.createBufferSource();return d.buffer=c,d.loop=!0,d.connect(h),d.start(),d},r=t.createGain(),a=t.createGain();r.gain.value=a.gain.value=0;const l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=2400,r.connect(l),a.connect(l),l.connect(this.master),this.engine={idle:o(n,r),run:o(s,a),idleGain:r,runGain:a}}toggleMute(){this.muted=!this.muted,this.ctx&&(this.master.gain.value=this.muted?0:.7);try{localStorage.setItem("canal.muted",this.muted?"1":"0")}catch{}}update(t,e,n,s){const o=this.ctx;if(!o)return;const r=o.currentTime,a=Math.abs(t);if(this.engine){const l=this.engine,c=Math.min(1,a*.4);l.idleGain.gain.setTargetAtTime((1-c)*.55,r,.25),l.runGain.gain.setTargetAtTime(c*(.45+a*.05),r,.25),l.idle.playbackRate.setTargetAtTime(1+a*.08,r,.4),l.run.playbackRate.setTargetAtTime(.62+Math.max(0,a-1)*.095,r,.4)}else{const l=7+a*1.9;for(this.nextThump<r&&(this.nextThump=r);this.nextThump<r+.1;)this.thump(this.nextThump,.22+a*.035),this.nextThump+=1/l}this.waterGain.gain.setTargetAtTime(Math.min(.35,e*.06),r,.3),n&&r>this.nextClick&&(this.click(r),this.nextClick=r+.13),s&&r>this.nextBird&&(this.nextBird>0&&this.bird(r),this.nextBird=r+4+Math.random()*9)}rumble(t){this.ctx&&this.rumbleGain.gain.setTargetAtTime(t*t*.9,this.ctx.currentTime,.3)}bump(t){const e=this.ctx;if(!e)return;const n=e.currentTime,s=e.createOscillator();s.frequency.setValueAtTime(70,n),s.frequency.exponentialRampToValueAtTime(35,n+.25);const o=e.createGain();o.gain.setValueAtTime(Math.min(.9,t),n),o.gain.exponentialRampToValueAtTime(.001,n+.35),s.connect(o).connect(this.master),s.start(n),s.stop(n+.4)}horn(){const t=this.ctx;if(!t)return;const e=t.currentTime,n=t.createGain();n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.22,e+.04),n.gain.setValueAtTime(.22,e+.7),n.gain.exponentialRampToValueAtTime(1e-4,e+.85);const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=1800,s.connect(n).connect(this.master);for(const o of[311,392]){const r=t.createOscillator();r.type="square",r.frequency.value=o,r.connect(s),r.start(e),r.stop(e+.9)}}quack(){const t=this.ctx;if(!t)return;const e=t.currentTime;for(let n=0;n<2;n++){const s=e+n*.16,o=t.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(520,s),o.frequency.exponentialRampToValueAtTime(330,s+.11);const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=1100,r.Q.value=3;const a=t.createGain();a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.25,s+.015),a.gain.exponentialRampToValueAtTime(1e-4,s+.12),o.connect(r).connect(a).connect(this.master),o.start(s),o.stop(s+.13)}}thump(t,e){const n=this.ctx,s=n.createOscillator();s.type="triangle",s.frequency.setValueAtTime(58,t),s.frequency.exponentialRampToValueAtTime(38,t+.08);const o=n.createGain();o.gain.setValueAtTime(e,t),o.gain.exponentialRampToValueAtTime(.001,t+.11),s.connect(o).connect(this.master),s.start(t),s.stop(t+.12);const r=n.createBufferSource();r.buffer=this.noise;const a=n.createBiquadFilter();a.type="bandpass",a.frequency.value=220;const l=n.createGain();l.gain.setValueAtTime(e*.5,t),l.gain.exponentialRampToValueAtTime(.001,t+.06),r.connect(a).connect(l).connect(this.master),r.start(t,Math.random(),.07)}click(t){const e=this.ctx,n=e.createBufferSource();n.buffer=this.noise;const s=e.createBiquadFilter();s.type="highpass",s.frequency.value=2500;const o=e.createGain();o.gain.setValueAtTime(.35,t),o.gain.exponentialRampToValueAtTime(.001,t+.03),n.connect(s).connect(o).connect(this.master),n.start(t,Math.random(),.04)}bird(t){const e=this.ctx,n=2+Math.floor(Math.random()*4),s=2600+Math.random()*1600;for(let o=0;o<n;o++){const r=t+o*(.09+Math.random()*.05),a=e.createOscillator();a.type="sine",a.frequency.setValueAtTime(s,r),a.frequency.exponentialRampToValueAtTime(s*(.7+Math.random()*.6),r+.07);const l=e.createGain();l.gain.setValueAtTime(1e-4,r),l.gain.exponentialRampToValueAtTime(.05,r+.01),l.gain.exponentialRampToValueAtTime(1e-4,r+.08),a.connect(l).connect(this.master),a.start(r),a.stop(r+.1)}}}function FM(){try{return localStorage.getItem("canal.muted")==="1"}catch{return!1}}const Br=.04,zM=90;function Pu(i,t,e){const n=HM(i,t,e);return n!=null&&n.keeper&&(n.text=BM(n)),n}function BM(i){const t=i.gate.label;switch(i.action){case"paddlesUp":return`Lock-keeper: ${i.text.charAt(0).toLowerCase()}${i.text.slice(1).replace(/\.$/,"")}…`;case"paddlesDown":return`Lock-keeper: dropping the ${t} paddles…`;case"close":return`Lock-keeper: closing the ${t}…`;case"open":return`Lock-keeper: opening the ${t}…`;case"wait":return`Lock-keeper: ${i.text.charAt(0).toLowerCase()}${i.text.slice(1)}`;default:return i.text}}function HM(i,t,e){const[n,s]=t,o=(n+s)/2;let r,a=1/0;for(const _ of i.groups){const T=_.gates[0].s,E=_.gates.at(-1).s,S=e?T-o:o-E,R=o>T-2&&o<E+2,w=R?0:S;(R||S>0&&S<zM)&&w<a&&(a=w,r=_)}if(!r){for(const _ of i.groups){const T=_.gates[0].s,E=_.gates.at(-1).s,S=e?o-E:T-o;if(S>0&&S<60){const R=_.gates.find(y=>y.wantPaddle)??_.gates.find(y=>y.wantOpen),w=e?_.gates.at(-1):_.gates[0];if(R)return{group:_,uphill:e,gate:R,boatBody:e?_.bodies.length-1:0,adjacent:[w],keeper:R!==w,action:R.wantPaddle?"paddlesDown":"close",text:R.wantPaddle?`Before you go: drop the paddles on the ${R.label} behind you.`:`Before you go: close the ${R.label} behind you.`}}}return null}const l=r.gates.length-1,c=e?r.gates:[...r.gates].reverse(),d=(e?r.bodies:[...r.bodies].reverse()).map(_=>i.bodies[_]),p=_=>e?_:l+1-_;let f=-1;for(let _=0;_<=l+1;_++){const T=d[_];n>=T.s0-.2&&s<=T.s1+.2&&(f=_)}const g=c.find(_=>_.s>n&&_.s<s),v=f<0?g?[g]:[]:f===l+1?[c[l]]:[c[f-1],c[f]].filter(_=>!!_),m=(_,T,E,S=f)=>({group:r,uphill:e,gate:_,action:T,text:E,boatBody:S<0?-1:p(S),adjacent:v,keeper:!!_&&!v.includes(_)&&T!=="drive"});if(f<0)return m(g??null,"drive","Keep going, nice and slow.");if(f===l+1){const _=r.gates.find(T=>T.wantPaddle)??r.gates.find(T=>T.wantOpen);return _?m(_,_.wantPaddle?"paddlesDown":"close",_.wantPaddle?`You're through! Drop the paddles on the ${_.label} behind you.`:`You're through! Close the ${_.label} behind you.`):null}const u=c[f],x=_=>_.label==="the canal"?_===d[0]?"the canal behind you":"the canal ahead":_.label;if(f>0&&c[f-1].wantOpen)return m(c[f-1],"close",`Close the ${c[f-1].label} behind you.`);if(Math.abs(d[f].level-d[f+1].level)<Br){for(const _ of r.gates)if(_!==u&&_.wantPaddle)return m(_,"paddlesDown",`Drop the ${_.label} paddles so the water stays put.`)}else{const _=c.find((B,G)=>G!==f&&B.wantOpen);if(_)return m(_,"close",`First close the ${_.label}, or the water will just run away.`);const T=r.gates.filter(B=>B.wantPaddle&&Math.abs(i.bodies[B.below].level-i.bodies[B.above].level)>=Br),E=T.find(B=>B.paddle>.95&&Math.abs(B.flow)<.001);if(E){const B=i.bodies[E.above];return m(E,"paddlesDown",`${hl(x(B))} ran dry before the levels matched. Drop these paddles so it can be topped up.`)}if(T.length>1)return m(T[1],"paddlesDown",`One set of paddles at a time: drop the ${T[1].label} paddles.`);if(T.length===1){const B=T[0],G=i.bodies[B.below],ut=i.bodies[B.above],_t=jd(ut.level-G.level),rt=ut.kind==="pound"?`Filling ${x(G)}`:G.kind==="pound"?`Emptying ${x(ut)}`:`${hl(x(ut))} → ${x(G)}`;return m(B,"wait",`${rt}… ${_t} to go`)}const S=B=>d[B].kind==="pound"||d[B].level>d[B].hi-Br,R=B=>d[B].kind==="pound"||d[B].level<d[B].lo+Br,w=(B,G)=>c[Math.min(B,G)],y=B=>e?B+1:B-1,P=B=>e?B-1:B+1,A=B=>{const G=y(B);return S(G)?[w(B,G),`fill ${x(d[B])} from ${x(d[G])}`]:A(G)},k=B=>{const G=P(B);return R(G)?[w(B,G),`empty ${x(d[B])} into ${x(d[G])}`]:k(G)};let F;if(d[f].kind==="pound"||d[f+1].kind==="pound"){const B=d[f].level>d[f+1].level?d[f]:d[f+1],G=B===d[f]?d[f+1]:d[f];F=[u,B.kind==="pound"?`fill ${x(G)} from ${x(B)}`:`empty ${x(B)} into ${x(G)}`]}else(e?!S(f+1):!R(f+1))?(F=e?A(f+1):k(f+1),F[1]=`first, ${F[1]}`):(e?!R(f):!S(f))?(F=e?k(f):A(f),F[1]=`first, ${F[1]}`):F=[u,`let ${x(d[e?f+1:f])} empty into ${x(d[e?f:f+1])}`];const[W,H]=F;for(const B of r.gates)if(B!==W&&B.wantPaddle)return m(B,"paddlesDown",`Drop the ${B.label} paddles so the water stays put.`);return m(W,"paddlesUp",`${hl(H)}.`)}return u.wantOpen?u.open<.97?m(u,"wait",`The ${u.label} are swinging open…`):u.wantPaddle?m(u,"paddlesDown",`Drop the paddles on the ${u.label}.`):m(u,"drive",`Gates open. Drive ${f+1===l+1?"out of the lock":`into ${x(d[f+1])}`}.`):m(u,"open",`Levels match: open the ${u.label}.`)}const hl=i=>i.charAt(0).toUpperCase()+i.slice(1),Lu=["Kingfisher","Dunroamin","Willow","Morning Mist","Heron","Bramble","Otter","Lazy Days","Moorhen","Puddle Duck","Wren","Seren","Daisy May","Jubilee","Halcyon","Mallard","Badger","Tilly","Dragonfly","Rosie","Swallow","Nutmeg","Lily Pad","Bluebell","Damselfly","Kestrel","Second Wind","Tortoise","Meander","Sunflower","Jolly Roger","Dormouse","Albatross","Grebe","Primrose","Liberty","Plover","Hedgehog","Elderflower","Coot","Teasel","Old Bill","Marigold","Windrush","Peregrine","Thistle","Snowdrop","Toad Hall","Cobble","Foxglove","Pippin","Salamander","Spindle","Saffron","Sloe"],Du=["#1f4d3a","#7a1f2b","#1d3557","#2e2a4a","#5a3d1e","#2f5d62","#6b2737","#264d2a","#3b4a6b","#8a5a1e"],Iu=["#7c2f23","#3a3d40","#d9ccaa","#2b2b2b","#8a7650","#4a5a3a"];class GM{constructor(t,e,n,s,o,r,a,l){D(this,"group",new bt);D(this,"boats",[]);D(this,"zones");D(this,"highlight");D(this,"marker");D(this,"time",0);D(this,"liftMarker",null);D(this,"stopMarkers",new Map);D(this,"starts",new Map);this.route=t,this.ww=e,this.terrain=n,this.zones=l?l.map(v=>({...v,kind:"visitor"})):[{id:"tower",name:"Tower Wharf",kind:"visitor",s0:o+10,s1:o+55},{id:"city",name:"City moorings, Cow Lane Bridge",kind:"visitor",s0:1150,s1:1215},{id:"hoole",name:"Hoole",kind:"visitor",s0:2050,s1:2110},{id:"christleton",name:"Christleton",kind:"visitor",s0:4345,s1:4400}];const c=(v,m)=>e.gates.every(u=>u.s<v-35||u.s>m+35)&&s.every(u=>u.s<v-u.w/2-12||u.s>m+u.w/2+12)&&e.windingHoles.every(u=>u<v-45||u>m+45)&&this.zones.every(u=>u.s1<v-8||u.s0>m+8)&&e.bodies[e.bodyIndexAt((v+m)/2)].kind==="pound",h=v=>!/drive.?thru/i.test(v.name)||/^Costa/.test(v.name),d=a.filter(v=>v.type==="stop"&&h(v)).map(v=>({...v,name:v.name.replace(/\s*drive.?thru\s*/i,"")})).sort((v,m)=>v.rank-m.rank||v.dist-m.dist);for(const v of d){const m=u=>u==="supermarket";if(!(!m(v.kind)&&this.zones.some(u=>{var x;return u.kind==="stop"&&!m((x=u.poi)==null?void 0:x.kind)&&Math.abs((u.s0+u.s1)/2-v.s)<120})))for(const u of[0,8,-8,16,-16,24,-24,32,-32,45,-45,60,-60]){const x=v.s+u-18,M=v.s+u+18;if(!(x<30||M>t.length-30||!c(x,M))){this.zones.push({id:`stop:${v.name}`,name:v.name,kind:"stop",poi:v,s0:x,s1:M});break}}}for(const v of this.zones)this.buildZone(v);this.highlight=new $(new xe,new En({color:"#ffd76a",transparent:!0,opacity:.5,depthWrite:!1})),this.group.add(this.highlight),this.marker=dc(),this.group.add(this.marker);const p=Di(77),f=(v,m)=>v-m<40||v+m>t.length-40||e.gates.some(u=>Math.abs(u.s-v)<m+35)||s.some(u=>Math.abs(u.s-v)<m+u.w/2+14)||this.zones.some(u=>v+m>u.s0-6&&v-m<u.s1+6)||e.windingHoles.some(u=>Math.abs(u-v)<m+45)||Math.abs(v-r)<m+30||[v-m-15,v,v+m+15].some(u=>n.aqueductCore(u)>0)||e.bodies[e.bodyIndexAt(v)].kind!=="pound";let g=[...Lu];for(let v=60;v<t.length-60;){const m=v>o-250&&v<o+220?.85:v>2900&&v<3250?.6:.32,u=15+Math.round(p()*5);if(p()<m&&!f(v+u/2,u/2)){const x=g.splice(Math.floor(p()*g.length),1)[0]??"Narrowboat";g.length||(g=[...Lu]),this.addBoat(v+u/2,u,x,p),v+=u+1+p()*3}else v+=6+p()*14}}addBoat(t,e,n,s){const o=this.route.frame(t),a=(this.ww.halfWidthAt(t)-Kn/2-.12)*Xt,l=o.x+o.nx*a,c=o.z+o.nz*a,h=Math.atan2(o.tx,o.tz)+(s()<.5?0:Math.PI),d=Oc({name:n,length:e,crew:!1,cabin:Du[Math.floor(s()*Du.length)],roof:Iu[Math.floor(s()*Iu.length)]}),p=xM(d),f=this.ww.levelAt(t);p.position.set(l,f,c),p.rotation.order="YXZ",p.rotation.y=h,this.group.add(p),this.boats.push({x:l,z:c,psi:h,halfL:e/2,halfB:Kn/2,name:n,s:t,group:p,baseY:f,rock:0,rockedAt:-99})}buildZone(t){const e=new $t({color:"#2a2a2a",metalness:.6,roughness:.4});for(let r=t.s0;r<=t.s1;r+=6){const a=this.ww.halfWidthAt(r),[l,c]=this.route.point(r,(a+.35)*Xt),h=new $(new rn(.14,.035,6,12),e);h.position.set(l,this.terrain.bankTop(r)+.07,c),h.rotation.x=Math.PI/2,this.group.add(h)}const n=this.route.frame(t.s0),s=(this.ww.halfWidthAt(t.s0)+2.9)*Xt,o=t.kind==="stop"?Uu([`Moorings for ${$M(t.poi)}`,t.name],"#6e1f1a"):Uu(["Visitor moorings",t.name]);o.position.set(n.x+n.nx*s,this.terrain.bankTop(t.s0),n.z+n.nz*s),o.rotation.y=Math.atan2(Xt*n.tz,-Xt*n.tx),this.group.add(o)}setActive(t){if(this.highlight.visible=this.marker.visible=!!t,!t)return;const e=[],n=[];let s=0;for(let c=t.s0;c<=t.s1+.01;c+=1.5,s++){const h=this.ww.halfWidthAt(c),d=this.terrain.bankTop(c)+.06;for(const p of[h-.05,h+.75]){const[f,g]=this.route.point(c,p*Xt);e.push(f,d,g)}s>0&&n.push((s-1)*2,(s-1)*2+1,s*2,(s-1)*2+1,s*2+1,s*2)}const o=new xe;o.setAttribute("position",new Zt(e,3)),o.setIndex(n),this.highlight.material.side=Ie,this.highlight.geometry.dispose(),this.highlight.geometry=o;const r=(t.s0+t.s1)/2,[a,l]=this.route.point(r,(this.ww.halfWidthAt(r)+.4)*Xt);this.marker.position.set(a,this.terrain.bankTop(r)+4,l),this.marker.userData.y0=this.marker.position.y}rockBoat(t,e){t.rock=Math.min(.09,Math.max(t.rock,e)),t.rockedAt=this.time,this.popOwner(t,"shake")}popOwner(t,e){if(t.owner)this.time>t.owner.until&&(t.owner.from=this.time),t.owner.until=this.time+5,t.owner.mode=e;else{const n=ri(Qi(Math.random));n.group.position.set(0,-.4,-t.halfL+2.45),t.group.add(n.group),t.owner={person:n,from:this.time,until:this.time+5,mode:e}}}get now(){return this.time}update(t){var e;this.time+=t;for(const n of this.boats){const s=n.owner;if(s){const o=Math.min(1,(this.time-s.from)/.5)*Math.min(1,Math.max(0,(s.until-this.time)/.5));s.person.group.position.y=-.4+o*1,s.person.group.visible=o>.01,ji(s.person,o>.6?s.mode:"rest",this.time)}n.rock<.001||(n.rock*=Math.exp(-t*.2),n.group.rotation.z=Math.sin(this.time*3.1)*n.rock,n.group.position.y=n.baseY+Math.sin(this.time*2.3)*n.rock*.6)}(e=this.liftMarker)!=null&&e.visible&&(this.liftMarker.position.y=this.liftMarker.userData.y0+Math.sin(this.time*1.6+2)*.25,this.liftMarker.rotation.y+=t*.9);for(const n of this.stopMarkers.values())n.visible&&(n.position.y=n.userData.y0+Math.sin(this.time*1.4+n.position.x)*.2,n.rotation.y+=t*.8);for(const n of this.starts.values())n.visible&&(n.position.y=n.userData.y0+Math.sin(this.time*1.6+1)*.25,n.children[0].rotation.y+=t*.9);this.marker.visible&&(this.marker.position.y=this.marker.userData.y0+Math.sin(this.time*1.6)*.25,this.marker.rotation.y+=t*.9,this.highlight.material.opacity=.35+.2*Math.sin(this.time*3))}setLiftDest(t){if(this.liftMarker||(this.liftMarker=dc("#5aa0e0","#1d3d6b"),this.group.add(this.liftMarker)),this.liftMarker.visible=!!t,!t)return;const e=(t.s0+t.s1)/2,[n,s]=this.route.point(e,(this.ww.halfWidthAt(e)+.4)*Xt);this.liftMarker.position.set(n,this.terrain.bankTop(e)+5.5,s),this.liftMarker.userData.y0=this.liftMarker.position.y}addStopMarker(t){var a;const e=WM(((a=t.poi)==null?void 0:a.kind)??"pub"),n=VM(t.name);n.position.y=-.9,e.add(n);const s=(t.s0+t.s1)/2,[o,r]=this.route.point(s,(this.ww.halfWidthAt(s)+1.5)*Xt);e.position.set(o,this.terrain.bankTop(s)+3.6,r),e.userData.y0=e.position.y,this.group.add(e),this.stopMarkers.set(t.id,e)}hideStopMarker(t){const e=this.stopMarkers.get(t);e&&(e.visible=!1)}addStart(t){const e=this.zones.find(a=>a.id===t);if(!e||this.starts.has(t))return;const n=XM(),s=(e.s0+e.s1)/2,[o,r]=this.route.point(s,(this.ww.halfWidthAt(s)+.4)*Xt);n.position.set(o,this.terrain.bankTop(s)+4,r),n.userData.y0=n.position.y,this.group.add(n),this.starts.set(t,n)}showStart(t,e){const n=this.starts.get(t);n&&(n.visible=e)}clearAround(t,e,n){for(const s of[...this.boats]){if(Math.abs(s.s-t)>e+s.halfL)continue;this.group.remove(s.group),this.boats.splice(this.boats.indexOf(s),1);const o=n.indexOf(s);o>=0&&n.splice(o,1)}}zoneAt(t){return this.zones.find(e=>t>=e.s0-4&&t<=e.s1+4)}}function dc(i="#ffcf4a",t="#a07000"){const e=new bt,n=new $t({color:i,emissive:t,emissiveIntensity:.6,roughness:.4}),s=new $(new Dc(.7,0),n);return s.scale.y=1.5,e.add(s),e}function VM(i){const t=document.createElement("canvas"),e=t.getContext("2d"),n="800 44px Nunito, sans-serif";e.font=n;const s=Math.ceil(e.measureText(i).width)+48;t.width=s,t.height=76,e.font=n,e.fillStyle="rgba(246, 239, 221, 0.95)",e.strokeStyle="#6e1f1a",e.lineWidth=5,e.beginPath(),e.roundRect(3,3,s-6,70,32),e.fill(),e.stroke(),e.fillStyle="#3a1a14",e.textAlign="center",e.textBaseline="middle",e.fillText(i,s/2,40);const o=new On(t);o.colorSpace=Oe;const r=new Nd(new Ac({map:o,depthWrite:!1})),a=.62;return r.scale.set(a*s/76,a,1),r}function WM(i){const t=new bt,e=(s,o={})=>new $t({color:s,roughness:.4,emissive:s,emissiveIntensity:.25,...o}),n=(s,o,r=0,a=0,l=0,c=0,h=0)=>{const d=new $(s,o);d.position.set(r,a,l),d.rotation.set(c,0,h),t.add(d)};return i==="cafe"||i==="ice_cream"?(n(new jt(.42,.32,.6,16),e("#f4f1ea"),0,.3),n(new jt(.38,.38,.04,16),e("#6b3f1f"),0,.58),n(new rn(.17,.05,6,12),e("#f4f1ea"),.45,.32,0,0,0),n(new jt(.7,.6,.06,18),e("#f4f1ea"),0,-.02)):i==="supermarket"?(n(new Rt(1.1,.6,.7),e("#2f6fb8"),0,.3),n(new Rt(1,.06,.6),e("#24589a"),0,.58),n(new Pc(.16,.5,4,8),e("#d9a35a"),-.15,.72,0,0,Math.PI/2-.4),n(new Be(.17,10,8),e("#5fae3a"),.3,.7,.05),n(new rn(.45,.04,6,16,Math.PI),e("#24589a"),0,.6)):i==="restaurant"||i==="hotel"?(n(new jt(.75,.6,.08,20),e("#f4f1ea"),0,.3,0,Math.PI/2),n(new Rt(.07,1.2,.03),e("#c9c3b5",{metalness:.6}),-1,.3),n(new Rt(.07,1.2,.03),e("#c9c3b5",{metalness:.6}),1,.3)):(n(new jt(.42,.34,1,16),e("#d9921f",{transparent:!0,opacity:.92}),0,.5),n(new jt(.45,.42,.28,16),e("#fbf6e8"),0,1.12),n(new Be(.3,10,6),e("#fbf6e8"),.1,1.28),n(new rn(.26,.07,8,14),e("#e8dcc0",{transparent:!0,opacity:.85}),.5,.55,0,0,0)),t.scale.setScalar(1.3),t}function XM(){const i=dc("#5ec27a","#1f6b3a"),t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");e.fillStyle="#1f4d3a",e.beginPath(),e.arc(64,64,58,0,Math.PI*2),e.fill(),e.fillStyle="#f6efdd",e.font="900 92px Nunito, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("!",64,70);const n=new On(t);n.colorSpace=Oe;const s=new Nd(new Ac({map:n,depthWrite:!1}));return s.scale.set(.9,.9,1),s.position.y=1.7,i.add(s),i}function $M(i){return i.kind==="pub"||i.kind==="bar"?"patrons":i.kind==="hotel"?"guests":"customers"}function Uu(i,t="#1d3557"){const e=document.createElement("canvas");e.width=512,e.height=192;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,512,192),n.strokeStyle="#f3ead0",n.lineWidth=6,n.strokeRect(8,8,496,176),n.fillStyle="#f3ead0",n.textAlign="center",n.font="700 34px Nunito, sans-serif",n.fillText(i[0].toUpperCase(),256,70,470),n.font="600 40px Fraunces, Georgia, serif",n.fillText(i[1],256,135,470);const s=new On(e);s.colorSpace=Oe;const o=new bt,r=new $(new ui(2.2,.82),new $t({map:s,side:Ie}));r.position.y=1.9,o.add(r);const a=new $(new Rt(.1,2,.1),new $t({color:"#f1efe8"}));return a.position.y=1,o.add(a),o}const Hr=.9,Nu=2,Gr=.45,qM=.45;class YM{constructor(t,e,n,s){D(this,"group",new bt);D(this,"lines",[]);D(this,"ropeMat",new kd({color:"#d8c49a"}));D(this,"pinMat",new $t({color:"#3a3a3a",metalness:.5,roughness:.5}));D(this,"time",0);this.route=t,this.ww=e,this.terrain=n,this.boat=s}get count(){return this.lines.length}get moored(){return this.lines.length===2}endPoint(t){const e=this.route.frame(this.boat.s);return[((-Math.cos(this.boat.psi)*e.nx+Math.sin(this.boat.psi)*e.nz)*Xt>0?1:-1)*Kn*.5,(t==="bow"?1:-1)*(Nn/2-1.3)]}gap(t){const[e,n]=this.boat.toWorld(...this.endPoint(t)),s=this.route.project(e,n,this.boat.s);return{gap:this.ww.halfWidthAt(s.s)-s.d*Xt,s:s.s}}blocker(){return this.ww.gates.some(t=>Math.abs(t.s-this.boat.s)<Nn/2+22)?"No mooring on a lock landing. Move along a bit.":this.boat.d*Xt<0?"Moor on the towpath side, the bank with the path.":null}prompt(){if(this.moored)return{key:"F",text:"Cast off",ready:!0};const e=["bow","stern"].filter(r=>!this.lines.some(a=>a.end===r)).map(r=>({e:r,...this.gap(r)})),n=e.reduce((r,a)=>a.gap<r.gap?a:r);if(!this.lines.length&&(n.gap>2.5||this.boat.speed>1)||this.blocker()&&!this.lines.length)return null;const s=this.lines.length?Nu:Hr,o=e.find(r=>r.gap<s);return o&&this.boat.speed<Gr?{key:"F",text:o.gap>Hr?`Haul the ${o.e} in and tie it`:`Tie the ${o.e} line`,ready:!0}:this.lines.length===1?{key:"F",text:`Untie the ${this.lines[0].end} line to realign`,ready:!0}:this.boat.speed>=Gr?{key:"F",text:"Slow right down to step off",ready:!1}:{key:"F",text:`Bring the ${n.e} in alongside the bank`,ready:!1}}act(){if(this.moored)return this.castOff(),"Lines in, cast off. Off you go!";if(!this.lines.length){const n=this.blocker();if(n)return n}const t=["bow","stern"].filter(n=>!this.lines.some(s=>s.end===n)),e=t.find(n=>this.gap(n).gap<(this.lines.length?Nu:Hr));if(this.lines.length===1&&(!e||this.boat.speed>=Gr)){const n=this.lines[0].end;return this.castOff(),`${n==="bow"?"Bow":"Stern"} line untied. Line her up and try again.`}return this.boat.speed>=Gr?"Too quick to step off! Slow right down first.":e?(this.tie(e),this.moored?null:e==="bow"?"Bow line tied. Now the stern: a touch ahead with the tiller pushed away from the bank swings it in on the rope.":"Stern line tied. Now the bow: a touch astern with the tiller towards the bank brings it in."):`Bring the ${t[0]} closer in to the bank first (within a metre).`}tie(t){const e=this.endPoint(t),[n,s]=this.boat.toWorld(...e),o=this.route.project(n,s,this.boat.s),r=this.ww.halfWidthAt(o.s),a=this.route.frame(o.s),l=Math.sin(this.boat.psi)*a.tx+Math.cos(this.boat.psi)*a.tz>=0?1:-1,c=(t==="bow"?1:-1)*l*.8,[h,d]=this.route.point(o.s+c,(r+.8)*Xt),p=Math.hypot(.8,.8+.25)+.35,f=this.gap(t).gap>Hr?p:Math.hypot(n-h,s-d)+.35,g={local:e,anchor:[h,d],length:f};this.boat.tethers.push(g);const v=new $(new jt(.03,.03,.5,6),this.pinMat);v.position.set(h,this.terrain.bankTop(o.s)+.2,d),v.rotation.z=.2;const m=new T_(new xe().setFromPoints(new Array(12).fill(0).map(()=>new N)),this.ropeMat);m.frustumCulled=!1;const u=v.position.y-.2,x=new $(new ir(.45,.62,28),new En({color:"#e0261b",transparent:!0,opacity:.85,depthWrite:!1,side:Ie}));x.rotation.x=-Math.PI/2,x.position.set(h,u+.04,d);const M=new $(new jt(1.1,1.1,1.6,10),new En({visible:!1}));M.position.set(h,u+.8,d),M.userData.mooringEnd=t,this.group.add(v,m,x,M),this.lines.push({end:t,tether:g,pin:v,rope:m,halo:x,hit:M})}castOff(){for(const t of[...this.lines])this.removeLine(t)}removeLine(t){this.group.remove(t.pin,t.rope,t.halo,t.hit),t.rope.geometry.dispose();const e=this.boat.tethers.indexOf(t.tether);e>=0&&this.boat.tethers.splice(e,1),this.lines.splice(this.lines.indexOf(t),1)}get tapTargets(){return this.lines.map(t=>t.hit)}untie(t){const e=this.lines.find(n=>n.end===t);return e?(this.removeLine(e),`${t==="bow"?"Bow":"Stern"} line untied.`):""}update(t,e=0){this.time+=e;const n=.5+.5*Math.sin(this.time*3.5);for(const s of this.lines){s.halo.material.opacity=.65+.3*n,s.halo.scale.setScalar(1+.15*n);const[o,r]=this.boat.toWorld(...s.tether.local),a=new N(o,t+qM,r),l=s.pin.position.clone().setY(s.pin.position.y+.15),h=.08+Math.max(0,s.tether.length-a.distanceTo(l))*.6,d=s.rope.geometry.getAttribute("position");for(let p=0;p<d.count;p++){const f=p/(d.count-1),g=a.clone().lerp(l,f);g.y-=Math.sin(f*Math.PI)*h,d.setXYZ(p,g.x,g.y,g.z)}d.needsUpdate=!0}}}const Ei=[{from:"tower",zone:"city",title:"Under the city walls",brief:"Moor at the city moorings by Cow Lane Bridge, in the cutting below the walls."},{from:"city",zone:"hoole",title:"Through Chester",brief:"Moor up at Hoole, past the city bridges. Thirsty? There are canalside pubs on the way (🍺 on the map)."},{from:"hoole",zone:"christleton",title:"Out to the country",brief:"Moor at Christleton for the night, out in the fields past Greenfield Lock."},{from:"christleton",zone:"stop:The Cheshire Cat",title:"Supper at the Cheshire Cat",brief:"Carry on past Christleton Bridge to the Cheshire Cat. Moor up outside for a pub supper, and stay the night if you like."},{from:"stop:The Cheshire Cat",zone:"tower",title:"Back to Tower Wharf",brief:"Bring her down to Tower Wharf, at the foot of the Northgate Staircase."}];class jM{constructor(t){D(this,"index",0);D(this,"startHour");D(this,"bumps",0);D(this,"rocked",0);D(this,"cleared",0);D(this,"result",null);D(this,"done",new Set);this.startHour=t}get current(){return Ei[this.index%Ei.length]}complete(t){const e=t-this.startHour,n=this.bumps+this.rocked*2,s=n===0?"Not a ripple out of place. The towpath regulars are impressed.":n<4?"A couple of scrapes, but nothing a cup of tea won’t fix.":"Eventful! The moored boats will be talking about you for a while.";return this.result={trip:this.current,hours:e,bumps:this.bumps,rocked:this.rocked,cleared:this.cleared,verdict:s},this.result}next(t){this.result&&this.done.add(this.index),this.done.size>=Ei.length&&this.done.clear(),this.startHour=t,this.bumps=this.rocked=this.cleared=0,this.result=null}choose(t){this.index=t}}const ku=["Kittiwake","Ruby Tuesday","Water Rat","Bumblebee","Silver Birch","Mistle Thrush","Ploughman","Owl","Clementine","Blackthorn","Sandpiper","Merlin"],Ou=["#27445a","#6a1e2e","#2c5a3f","#4b3a6b","#8a4a12","#1f3d4d"],Fu=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400"],zu=1.5,Bu=.9;class KM{constructor(t,e,n,s){D(this,"group",new bt);D(this,"boats",[]);D(this,"events",[]);D(this,"time",0);D(this,"nextSpawn",8);D(this,"blockedAt",()=>[]);D(this,"narrows",[]);D(this,"nameIndex",0);this.route=t,this.ww=e,this.moorings=n,this.player=s}update(t,e){this.time+=t;const n=this.player,s=this.ww.bodies[this.ww.bodyIndexAt(n.s)];if(this.time>this.nextSpawn&&this.boats.length<2&&s.kind==="pound"){this.nextSpawn=this.time+45+Math.random()*60;const o=n.s+e*(230+Math.random()*90),r=Math.min(o,n.s),a=Math.max(o,n.s),l=this.boats.every(c=>Math.abs(c.s-o)>80)&&this.moorings.zoneAt(o)===void 0&&!this.blockedAt().some(c=>c>r-20&&c<a+20);o>s.s0+60&&o<s.s1-60&&l&&this.spawn(o,-e)}for(const o of[...this.boats]){const r=(n.s-o.s)*o.dir>380||Math.abs(n.s-o.s)>520,a=this.ww.bodies[this.ww.bodyIndexAt(o.s)],l=o.dir>0?a.s1-o.s<40:o.s-a.s0<40;if(r||l&&Math.abs(n.s-o.s)>150||a.kind!=="pound"){this.remove(o);continue}this.steer(o,t,e)}}spawn(t,e){const n=ku[this.nameIndex++%ku.length],s=Oc({name:n,length:17+Math.round(Math.random()*3),crew:!0,cabin:Ou[Math.floor(Math.random()*Ou.length)],roof:Math.random()<.5?"#3a3d40":"#7c2f23",crewStyle:Qi(Math.random,{coat:Fu[Math.floor(Math.random()*Fu.length)]})});s.group.rotation.order="YXZ",this.group.add(s.group);const o=s.group.userData.length/2,r={name:n,model:s,s:t,d:0,dir:e,speed:zu,obstacle:{x:0,z:0,psi:0,halfL:o,halfB:Kn/2},pausedUntil:0,waveUntil:0,passed:!1,vd:0,yaw:0};this.boats.push(r),this.player.obstacles.push(r.obstacle),this.place(r,0)}remove(t){this.group.remove(t.model.group),this.boats.splice(this.boats.indexOf(t),1);const e=this.player.obstacles.indexOf(t.obstacle);e>=0&&this.player.obstacles.splice(e,1)}bumped(t){const e=this.boats.find(n=>n.obstacle===t);!e||this.time<e.pausedUntil||(e.pausedUntil=this.time+1.5,e.slowUntil=this.time+8,e.speed*=.4,e.waveUntil=this.time+3,this.events.push({kind:"bumped",boat:e}))}narrowsBusy(t,e,n,s){const[o,r]=t,a=l=>l>o-4&&l<r+4;return a(this.player.s)&&n!==e?!0:this.boats.some(l=>l!==s&&l.dir!==e&&a(l.s))}steer(t,e,n){const s=this.player,o=this.ww.halfWidthAt(t.s),r=(s.s-t.s)*t.dir,a=n!==t.dir;let l=zu;const c=this.moorings.boats.some(u=>Math.abs(u.s-t.s)<u.halfL+12);c&&(l=Bu),r>0&&r<45&&(l=Math.min(l,a?.7:.4)),r>0&&r<22&&!a&&(l=0),r>0&&r<34&&Math.abs(s.d-t.d)<Kn+.7&&(t.clashUntil=this.time+4);const h=this.time<(t.clashUntil??0);h&&(l=0);for(const u of this.blockedAt()){const x=(u-t.s)*t.dir-t.obstacle.halfL;x>-2&&x<30&&(l=Math.min(l,x<5?0:.4))}for(const u of this.narrows){const M=((t.dir>0?u[0]:u[1])-t.s)*t.dir-t.obstacle.halfL,_=t.s>u[0]&&t.s<u[1];!_&&M>-1&&M<45&&this.narrowsBusy(u,t.dir,n,t)&&(l=Math.min(l,M<10?0:.4),!t.waitedNarrows&&t.speed<.3&&(t.waitedNarrows=!0,this.events.push({kind:"waitingAqueduct",boat:t}))),t.wasInNarrows&&!_&&this.events.push({kind:"offAqueduct",boat:t}),t.wasInNarrows=_}this.time<(t.slowUntil??0)&&(l=Math.min(l,Bu)),this.time<t.pausedUntil&&(l=0),t.speed+=ye(l-t.speed,-.9*e,.3*e);const d=t.dir;let p=r>-20&&r<110&&a?d*(h?o:1.8):0;const f=c?o-Kn-1.6:o-1.6;p=ye(p,-(o-1.6),f),this.time<t.pausedUntil&&(p=t.targetD??t.d),t.targetD??(t.targetD=t.d),t.targetD+=ye(p-t.targetD,-.35*e,.35*e),p=t.targetD;const g=.08+t.speed*.25,v=ye((p-t.d)*.4,-g,g);t.vd+=ye(v-t.vd,-.15*e,.15*e),t.d+=t.vd*e;const m=-t.dir*Math.atan2(t.vd,Math.max(.4,t.speed));if(t.yaw+=(m-t.yaw)*Math.min(1,e*1.5),t.s+=t.dir*t.speed*e,this.place(t,e),!t.passed&&a&&Math.abs(s.s-t.s)<4){t.passed=!0;const u=(s.d-t.d)*d<0;t.waveUntil=this.time+3.5,this.events.push({kind:u?"greet":"wrongSide",boat:t})}ji(t.model.steererPerson,this.time<t.waveUntil?"wave":"rest",this.time)}place(t,e){const n=this.route.frame(t.s),s=n.x+n.nx*t.d,o=n.z+n.nz*t.d,r=Math.atan2(n.tx,n.tz)+(t.dir>0?0:Math.PI),a=this.ww.levelAt(t.s);t.model.group.position.set(s,a+Math.sin(this.time*1.2+t.s)*.015,o),t.model.group.rotation.y=r+t.yaw,t.model.group.rotation.z=Math.sin(this.time*.9+e)*.004,Object.assign(t.obstacle,{x:s,z:o,psi:r+t.yaw})}}const Vr=-Xt,ZM=i=>new $t({color:i});function ce(i,t,e,n=0,s=0,o=0,r=0,a=0,l=0){const c=new $(t,ZM(e));return c.position.set(n,s,o),c.rotation.set(r,a,l),i.add(c),c}const tn=(i,t,e)=>new Rt(i,t,e),Dn=(i,t,e,n=6)=>new jt(i,t,e,n),JM={bench(){const i=new bt;ce(i,tn(1.6,.06,.4),"#8a6a45",0,.45,0),ce(i,tn(1.6,.36,.05),"#8a6a45",0,.68,-.2,-.15);for(const t of[-.7,.7])ce(i,tn(.06,.45,.4),"#2b2b2b",t,.22,0);return i},bin(){const i=new bt;return ce(i,Dn(.22,.2,.8,8),"#1f3d2f",0,.4,0),ce(i,Dn(.24,.24,.06,8),"#2b2b2b",0,.82,0),i},lamp(){const i=new bt;return ce(i,Dn(.06,.09,3.6),"#1b1b1b",0,1.8,0),ce(i,tn(.5,.06,.06),"#1b1b1b",.18,3.55,0),ce(i,Dn(.12,.16,.32,6),"#2b2b2b",.38,3.4,0),ce(i,Dn(.1,.1,.14,6),"#f4e3a1",.38,3.22,0),i},lifebuoy(){const i=new bt;return ce(i,tn(.1,1.5,.1),"#e8e4da",0,.75,0),ce(i,new rn(.3,.07,6,12),"#e0522f",0,1.15,.08),ce(i,tn(.6,.6,.03),"#c0b8a8",0,1.15,0),i},tub(){const i=new bt;ce(i,Dn(.36,.3,.45,8),"#6b4a2e",0,.22,0),ce(i,new gn(.34,0),"#4f8a3a",0,.58,0);for(const[t,e,n]of[[.15,.1,"#e04f6a"],[-.12,.12,"#f2c94c"],[.02,-.16,"#d36ad6"],[-.16,-.06,"#f6f0e4"]])ce(i,new gn(.08,0),n,t,.82,e);return i},reeds(){const i=new bt,t=Di(5);for(let e=0;e<9;e++){const n=1.1+t()*.9;ce(i,Dn(.015,.04,n,4),t()<.4?"#8a9a4a":"#6f8a3a",(t()-.5)*.9,n/2-.3,(t()-.5)*.7,(t()-.5)*.2,0,(t()-.5)*.25),t()<.4&&ce(i,Dn(.04,.04,.2,5),"#5a3d22",(t()-.5)*.9,n-.3,(t()-.5)*.7)}return i},hedge(){const i=new bt;return ce(i,tn(4.2,1.5,1.1),"#3f6b30",0,.75,0),ce(i,new gn(.6,0),"#4b7a36",-1.2,1.4,.1),ce(i,new gn(.55,0),"#36602a",1,1.45,-.1),i},fence(){const i=new bt;return ce(i,tn(2,1.6,.06),"#7a5a3a",0,.8,0),ce(i,tn(.1,1.75,.1),"#5e4430",-1,.87,0),i},flowers(){const i=new bt,t=Di(9),e=["#f2c94c","#ffffff","#d36ad6","#e04f6a","#7aa7e0"];for(let n=0;n<7;n++){const s=(t()-.5)*1.6,o=(t()-.5)*1.2;ce(i,Dn(.01,.01,.35,3),"#4f7a33",s,.17,o),ce(i,new gn(.06,0),e[Math.floor(t()*e.length)],s,.36,o)}return i},picnic(){const i=new bt;ce(i,tn(1.8,.06,.8),"#a07a50",0,.75,0);for(const t of[-.65,.65])ce(i,tn(1.8,.05,.28),"#a07a50",0,.45,t);for(const t of[-.7,.7])ce(i,tn(.08,.75,1.5),"#8a6a45",t,.37,0,0);return i},parasol(){const i=new bt;return ce(i,Dn(.03,.03,2.4),"#e8e4da",0,1.2,0),ce(i,new li(1.4,.5,8,1,!0),"#a3291f",0,2.3,0),i},cottage(){const i=new bt;ce(i,tn(6,4.2,5),"#efe8da",0,2.1,0);const t=new jt(.01,3.9,6.6,4,1);t.rotateY(Math.PI/4),t.rotateZ(Math.PI/2),t.scale(1,.55,1),ce(i,t,"#4d525b",0,5,0),ce(i,tn(.7,1.4,.7),"#8c4234",2,5.6,0),ce(i,tn(1,1.9,.08),"#1f4d3a",0,.95,2.52);for(const e of[-1.8,1.8])ce(i,tn(.9,.9,.08),"#2a3640",e,2.6,2.52),ce(i,tn(.9,.9,.08),"#2a3640",e,1.1,2.52);return i},heron(){const i=new bt;ce(i,new Be(.22,6,4),"#9aa3ab",0,.85,0).scale.set(1,.8,1.6),ce(i,Dn(.04,.05,.55,5),"#c8ced2",0,1.2,.18,-.3),ce(i,new Be(.07,6,4),"#e8eaec",0,1.47,.27),ce(i,new li(.025,.22,4),"#d8b34a",0,1.47,.42,Math.PI/2);for(const t of[-.06,.06])ce(i,Dn(.012,.012,.7,3),"#c9a24a",t,.35,0);return i}};class QM{constructor(t,e,n,s,o,r){D(this,"group",new bt);D(this,"placements",new Map);D(this,"anglerSpots",[]);D(this,"gardens",[]);this.route=t,this.ww=e,this.terrain=n;const a=Di(4242),l=t.length,c=(u,x=6)=>r.some(M=>Math.abs(M.s-u)<M.w/2+x),h=(u,x)=>e.gates.some(M=>Math.abs(M.s-u)<x),d=u=>e.bodies[e.bodyIndexAt(u)].kind==="chamber",p=u=>e.windingHoles.some(x=>Math.abs(x-u)<42),f=u=>{const[x,M]=t.point(u,30*Vr),[_,T]=t.point(u,30*Xt);return Math.max(n.urbanAt(x,M),n.urbanAt(_,T))};let g=60;for(let u=20;u<l-20;u+=2){if(c(u,8)||h(u,10))continue;const x=f(u);x>.3&&Math.round(u)%32===0&&this.add("lamp",u,e.halfWidthAt(u)+3.25,"towpath",-Math.PI/2),u>g&&!o.zoneAt(u)&&!n.cliffSide(u,Xt)&&(g=u+140+a()*160,this.add("bench",u,e.halfWidthAt(u)+3.6,"towpath",0),x>.2&&this.add("bin",u+1.4,e.halfWidthAt(u)+3.7,"towpath",0)),x>.35&&Math.round(u)%380===0&&this.add("lifebuoy",u,e.halfWidthAt(u)+3.3,"towpath",0)}for(const u of e.groups){const x=u.gates[0].s,M=u.gates.at(-1).s;this.add("lifebuoy",x-6,e.halfWidthAt(x-6)+3.3,"towpath",0),this.add("lifebuoy",M+6,e.halfWidthAt(M+6)+3.3,"towpath",0);for(const T of[x+4,M-4,(x+M)/2])this.add("tub",T,e.halfWidthAt(T)+2.2,"towpath",0),this.add("tub",T+1.2,e.halfWidthAt(T)+2.2,"offside",0);const _=(x+M)/2;if(!u.staircase&&f(_)<.45){const T=e.halfWidthAt(_)+10,[E,S]=t.point(_,T*Xt);s.isFree(E,S)&&this.add("cottage",_,T,"land",0)}}let v=-1,m="none";for(let u=10;u<l-10;u+=2){if(u>v){v=u+60;const T=f(u);m=T<.3?a()<.85?"hedge":"none":T>.4?a()<.8?"fence":"none":a()<.5?"hedge":"fence"}if(m==="none"||c(u,4)||d(u)||h(u,6)||p(u))continue;const x=e.halfWidthAt(u)+2.4,[M,_]=t.point(u,x*Vr);s.isFree(M,_)&&(m==="fence"?this.add("fence",u,x,"offside",0):Math.round(u)%4===0&&this.add("hedge",u,x,"offside",0))}for(let u=10;u<l-10;u+=3){if(c(u,6)||d(u)||h(u,15)||p(u))continue;const x=f(u);a()<(x<.3?.45:.12)&&this.add("reeds",u,e.halfWidthAt(u)-.25,"water",a()*6),x<.35&&a()<.3&&!n.cliffSide(u,Xt)&&this.add("flowers",u,e.halfWidthAt(u)+4.6+a()*1.5,"towpath",a()*6),x<.2&&a()<.008&&this.add("heron",u,e.halfWidthAt(u)+.9,"offside",Math.PI/2*Vr+(a()-.5))}for(const u of o.zones){if(u.kind!=="stop"||!/pub|bar/.test(u.poi.kind))continue;const x=(u.s0+u.s1)/2;for(const[M,_,T]of[[-5,6,"picnic"],[0,7.5,"picnic"],[5,6,"picnic"],[-2.5,7,"parasol"],[3,6.5,"parasol"]])if(this.add(T,x+M,e.halfWidthAt(x)+_,"land",0),T==="picnic"){const[E,S]=t.point(x+M,(e.halfWidthAt(x)+_)*Xt);this.gardens.push({x:E,z:S,y:n.bankTop(x),ry:Math.atan2(t.frame(x).tx,t.frame(x).tz)})}}for(let u=150;u<l-80;u+=70+a()*90)f(u)>.55||c(u,15)||h(u,45)||o.zoneAt(u)||d(u)||o.boats.some(x=>Math.abs(x.s-u)<x.halfL+8)||this.anglerSpots.push({s:u});this.build()}add(t,e,n,s,o){if(e<1||e>this.route.length-1||this.terrain.nearAqueduct(e))return;const r=s==="offside"||s==="water"?Vr:Xt,a=this.route.frame(e),l=a.x+a.nx*n*r,c=a.z+a.nz*n*r;let h;s==="water"?h=this.ww.levelAt(e):s==="land"?h=this.terrain.heightAt(l,c):h=n<this.ww.halfWidthAt(e)+3.4?this.terrain.bankTop(e):this.terrain.landHeight(l,c,e,n*r);const d=Math.atan2(-a.nx*r,-a.nz*r),p=new pe().compose(new N(l,h,c),new kn().setFromAxisAngle(new N(0,1,0),d+o),new N(1,1,1));this.placements.has(t)||this.placements.set(t,[]),this.placements.get(t).push(p)}build(){for(const[t,e]of this.placements){const n=Ii(JM[t]()),s=new Un(n,Ci(),e.length);e.forEach((o,r)=>s.setMatrixAt(r,o)),s.castShadow=t!=="flowers"&&t!=="reeds",s.receiveShadow=!0,s.name=`decor:${t}`,this.group.add(s)}}get counts(){return Object.fromEntries([...this.placements].map(([t,e])=>[t,e.length]))}}const Fo=6,ul=4,zo=380,Xn=new pe,Hi=new kn,Bo=new N,Ho=new N(1,1,1),Wr=new N(0,1,0);function ty(i,t){const e=ri({...i,coat:"#ffffff"});t(e);const n=new bt;n.add(e.group);const s=o=>o.userData.part==="coat";return{coat:Ii(n,void 0,s),rest:Ii(n,void 0,o=>!s(o))}}class Xr{constructor(t,e,n,s,o){D(this,"meshes",[]);for(const r of e){const a=[];for(let l=0;l<n;l++){const c=ty(r,p=>o(p,l)),h=new Un(c.coat,Hu(),s),d=new Un(c.rest,Hu(),s);for(const p of[h,d])p.count=0,p.castShadow=!0,p.frustumCulled=!1,p.instanceMatrix.setUsage(vs),t.add(p);a.push({coat:h,rest:d})}this.meshes.push(a)}}begin(){for(const t of this.meshes)for(const{coat:e,rest:n}of t)e.count=n.count=0}put(t,e,n,s){const{coat:o,rest:r}=this.meshes[t%this.meshes.length][e%this.meshes[0].length],a=o.count++;r.count++,o.setMatrixAt(a,n),r.setMatrixAt(a,n),o.setColorAt(a,s)}end(){for(const t of this.meshes)for(const{coat:e,rest:n}of t)e.instanceMatrix.needsUpdate=n.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}}const Hu=()=>new $t({vertexColors:!0,roughness:.75});function ey(){const i=new bt,t=a=>new $t({color:a});for(const a of[-.55,.55]){const l=new $(new rn(.33,.03,5,12),t("#1b1b1b"));l.position.set(0,.33,a),l.rotation.y=Math.PI/2,i.add(l)}const e=new $(new Rt(.05,.05,.9),t("#2e86c1"));e.position.set(0,.62,0),e.rotation.x=-.12;const n=new $(new Rt(.04,.32,.04),t("#2e86c1"));n.position.set(0,.68,-.18);const s=new $(new Rt(.12,.05,.22),t("#1b1b1b"));s.position.set(0,.86,-.18);const o=new $(new Rt(.04,.42,.04),t("#2e86c1"));o.position.set(0,.78,.45);const r=new $(new Rt(.5,.035,.035),t("#1b1b1b"));return r.position.set(0,.99,.43),i.add(e,n,s,o,r),Ii(i)}function ny(){const i=new bt,t=o=>new $t({color:o}),e=new $(new Rt(.22,.22,.55),t("#8a5a2b"));e.position.y=.35;const n=new $(new Rt(.18,.18,.2),t("#7a4a22"));n.position.set(0,.5,.33),i.add(e,n);for(const[o,r]of[[-.08,-.2],[.08,-.2],[-.08,.2],[.08,.2]]){const a=new $(new Rt(.05,.25,.05),t("#6a3a1a"));a.position.set(o,.12,r),i.add(a)}const s=new $(new Rt(.04,.04,.22),t("#8a5a2b"));return s.position.set(0,.48,-.36),s.rotation.x=.6,i.add(s),Ii(i)}function Gu(i){const t=new bt,e=a=>new $t({color:a}),n=i?1.9:1,s=new $(new Be(.16*n,6,4),e(i?"#f4f4f0":"#8a6a4a"));if(s.scale.set(.8,.55,1.3),s.position.y=.05*n,t.add(s),i){const a=new $(new jt(.035,.05,.5,5),e("#f4f4f0"));a.position.set(0,.32,.2),a.rotation.x=.25,t.add(a)}const o=new $(new Be(.07*(i?1.1:1),6,4),e(i?"#f4f4f0":"#2f6b3a"));o.position.set(0,i?.58:.17,i?.28:.16);const r=new $(new li(.03,.1,4),e(i?"#e07a2a":"#e2b23a"));return r.position.set(0,o.position.y-.01,o.position.z+.09),r.rotation.x=Math.PI/2,t.add(o,r),Ii(t)}class iy{constructor(t,e,n,s,o,r){D(this,"group",new bt);D(this,"events",[]);D(this,"movers",[]);D(this,"birds",[]);D(this,"anglers",[]);D(this,"walkers");D(this,"joggers");D(this,"riders");D(this,"bikes");D(this,"dogs");D(this,"ducks");D(this,"swans");D(this,"time",0);D(this,"scaredUntil",-1);D(this,"rand",Di(31));D(this,"kayaks",[]);this.route=t,this.ww=e,this.terrain=n,this.boat=s;const a=this.rand,l=Array.from({length:ul},()=>Qi(a)),c=22;this.walkers=new Xr(this.group,l,Fo,c,(p,f)=>aa(p,f/Fo*Math.PI*2)),this.joggers=new Xr(this.group,l.slice(0,2),Fo,c,(p,f)=>{aa(p,f/Fo*Math.PI*2,1.5),p.armL.rotation.x-=.6,p.armR.rotation.x-=.6}),this.riders=new Xr(this.group,l.slice(1,3),4,c,(p,f)=>pM(p,f/4*Math.PI*2)),this.bikes=new Un(ey(),Ci(),c),this.dogs=new Un(ny(),Ci(),c);for(let p=0;p<c;p++){const f=p<14?"walk":p<18?"jog":"cycle",g={s:s.s+(a()-.5)*zo*2,d:0,dir:a()<.5?1:-1,kind:f,phase:a()*10,speed:f==="walk"?1.1+a()*.4:f==="jog"?2.6+a()*.6:4+a()*1.5,dog:f==="walk"&&a()<.45,coat:new Vt(Wo[Math.floor(a()*Wo.length)]),look:Math.floor(a()*ul)};g.d=this.laneFor(g),this.movers.push(g)}for(const p of[this.bikes,this.dogs])p.castShadow=!0,p.instanceMatrix.setUsage(vs),p.frustumCulled=!1,this.group.add(p);for(const p of o){const f=ri(Qi(a,{hairStyle:a()<.5?"cap":"beanie",coat:a()<.5?"#3d5a3d":"#5a4a3a"})),g=t.frame(p.s),v=(e.halfWidthAt(p.s)+.9)*Xt,m=new bt;m.add(f.group),uc(f);const u=new $(new Rt(.5,.4,.35),new $t({color:"#3d5a3d"}));u.position.set(0,.2,-.1),m.add(u);const x=new $(new jt(.01,.02,4.2,4),new $t({color:"#2b2b2b"}));x.position.set(.25,1.3,1.6),x.rotation.x=1.05,m.add(x),m.position.set(g.x+g.nx*v,n.bankTop(p.s),g.z+g.nz*v),m.rotation.y=Math.atan2(-g.nx*Xt,-g.nz*Xt),this.group.add(m),this.anglers.push({s:p.s,person:f,angryUntil:0,lastGrumble:-99})}const h=new Xr(this.group,l,1,64,p=>uc(p));h.begin();for(const p of r)for(const f of[-1,1])if(!(a()<.35))for(const g of[-.5,.5]){if(a()<.4)continue;const v=new N(g,0,f*.62).applyAxisAngle(Wr,p.ry);Hi.setFromAxisAngle(Wr,p.ry+(f>0?Math.PI:0)),Xn.compose(Bo.set(p.x+v.x,p.y,p.z+v.z),Hi,Ho),h.put(Math.floor(a()*ul),0,Xn,new Vt(Wo[Math.floor(a()*Wo.length)]))}h.end();let d=0;for(let p=120;p<t.length-60;p+=160+a()*260){if(e.bodies[e.bodyIndexAt(p)].kind!=="pound")continue;const f=a()<.22,g=f?2:2+Math.floor(a()*4);d++;for(let v=0;v<g;v++)this.birds.push({s:p+(a()-.5)*8,d:(a()-.5)*5,vs:0,vd:0,swan:f,heading:a()*6,flock:d,lastQuack:-99})}this.ducks=new Un(Gu(!1),Ci(),Math.max(1,this.birds.filter(p=>!p.swan).length)),this.swans=new Un(Gu(!0),Ci(),Math.max(1,this.birds.filter(p=>p.swan).length));for(const p of[this.ducks,this.swans])p.instanceMatrix.setUsage(vs),p.frustumCulled=!1,this.group.add(p)}horn(){this.scaredUntil=this.time+6}laneFor(t){return this.ww.halfWidthAt(ye(t.s,0,this.route.length))+1.6+(t.dir>0?-.35:.35)}isKayak(t){return this.kayaks.some(e=>e.obstacle===t)}buildKayak(t,e){const n=new bt,s=d=>new $t({color:d,roughness:.5,flatShading:!0}),o=new $(new Be(.5,10,6),s(t));o.scale.set(.62,.32,4.2),o.position.y=.05;const r=new $(new jt(.16,.2,.55,8),s(e()<.5?"#e0b23a":"#c6392b"));r.position.y=.42;const a=new $(new Be(.12,10,8),s("#e9b48f"));a.position.y=.8;const l=new $(new Be(.135,10,6,0,Math.PI*2,0,Math.PI/2),s("#f2f2ee"));l.position.y=.82;const c=new bt,h=new $(new jt(.02,.02,2.1,6),s("#2b2b2b"));h.rotation.z=Math.PI/2,c.add(h);for(const d of[-1.05,1.05]){const p=new $(new Rt(.04,.4,.16),s("#1d5fa8"));p.position.x=d,c.add(p)}c.position.set(0,.55,.25);for(const d of[o,r,a,l])d.castShadow=!0;return n.add(o,r,a,l,c),this.group.add(n),{g:n,paddle:c}}updateKayaks(t){const e=this.boat,n=this.route.length;if(!this.kayaks.length){const s=Di(77);for(const o of["#e8622c","#f2c94c","#3a9a5b"]){const r=this.buildKayak(o,s),a={x:0,z:0,psi:0,halfL:2.1,halfB:.35};this.boat.obstacles.push(a),this.kayaks.push({...r,s:-1e9,d:0,dir:1,speed:1.1+s()*.5,vd:0,yaw:0,obstacle:a})}}this.kayaks.forEach((s,o)=>{Math.abs(s.s-e.s)>zo&&(s.s=ye(e.s+(this.rand()<.5?-1:1)*(zo-40-o*70-this.rand()*60),10,n-10),s.dir=s.s>e.s?-1:1);const r=ye(s.s+s.dir*15,0,n);(this.ww.bodies[this.ww.bodyIndexAt(r)].kind==="chamber"||r<=1||r>=n-1)&&(s.dir=-s.dir),s.s=ye(s.s+s.dir*s.speed*t,1,n-1);const a=this.ww.halfWidthAt(s.s),l=Math.abs(s.s-e.s)<25,c=s.dir*(l?a-.7:a*.45),h=s.speed*.4,d=ye((c-s.d)*.5,-h,h);s.vd+=ye(d-s.vd,-.5*t,.5*t),s.d=ye(s.d+s.vd*t,-(a-.5),a-.5);const p=-s.dir*Math.atan2(s.vd,s.speed);s.yaw+=(p-s.yaw)*Math.min(1,t*3);const f=this.route.frame(s.s);s.g.position.set(f.x+f.nx*s.d,this.ww.levelAt(s.s),f.z+f.nz*s.d),s.g.rotation.y=Math.atan2(f.tx*s.dir,f.tz*s.dir)+s.yaw,Object.assign(s.obstacle,{x:s.g.position.x,z:s.g.position.z,psi:s.g.rotation.y});const g=this.time*2.6+o;s.paddle.rotation.z=Math.sin(g)*.45,s.paddle.rotation.y=Math.cos(g)*.35})}update(t){this.time+=t,this.updateKayaks(t);const e=this.boat,n=this.route.length,s=e.speed*2.237>3;let o=0,r=0;for(const c of[this.walkers,this.joggers,this.riders])c.begin();this.movers.forEach(c=>{c.s+=c.dir*c.speed*t,c.phase+=t*c.speed*4.5,(Math.abs(c.s-e.s)>zo||c.s<5||c.s>n-5)&&(c.s=ye(e.s+(this.rand()<.5?-1:1)*(zo-20-this.rand()*60),5,n-5),c.dir=c.s>e.s?-1:1,this.rand()<.5&&(c.dir*=-1)),c.d+=(this.laneFor(c)-c.d)*Math.min(1,t*2);const h=this.route.frame(c.s),d=h.x+h.nx*c.d*Xt,p=h.z+h.nz*c.d*Xt,f=c.kind==="cycle"?0:Math.abs(Math.cos(c.phase))*(c.kind==="jog"?.05:.025),g=this.terrain.bankTop(c.s)+(c.kind==="cycle"?-.07:f),v=Math.atan2(h.tx,h.tz)+(c.dir>0?0:Math.PI);Hi.setFromAxisAngle(Wr,v),Xn.compose(Bo.set(d,g,p),Hi,Ho);const m=Math.floor(c.phase/(Math.PI*2)%1*Fo);if((c.kind==="walk"?this.walkers:c.kind==="jog"?this.joggers:this.riders).put(c.look,c.kind==="cycle"?m%4:m,Xn,c.coat),c.kind==="cycle"&&(Xn.compose(Bo.set(d,this.terrain.bankTop(c.s),p),Hi,Ho),this.bikes.setMatrixAt(o++,Xn)),c.dog){const x=Math.sin(c.phase*.3)*.6+1.2,M=d-Math.sin(v)*x+h.nx*.5,_=p-Math.cos(v)*x+h.nz*.5;Xn.compose(Bo.set(M,this.terrain.bankTop(c.s)+Math.abs(Math.sin(c.phase*1.6))*.04,_),Hi,Ho),this.dogs.setMatrixAt(r++,Xn)}}),this.bikes.count=o,this.dogs.count=r;for(const c of[this.walkers,this.joggers,this.riders])c.end();for(const c of[this.bikes,this.dogs])c.instanceMatrix.needsUpdate=!0;for(const c of this.anglers)s&&Math.abs(c.s-e.s)<14&&this.time-c.lastGrumble>20&&(c.lastGrumble=this.time,c.angryUntil=this.time+4,this.events.push({kind:"angler"})),ji(c.person,this.time<c.angryUntil?"shake":"rest",this.time);let a=0,l=0;for(const c of this.birds){const h=c.s-e.s,d=c.d-e.d,p=Math.hypot(h,d),f=this.time<this.scaredUntil,g=f?35:14;p<g?(c.vd+=Math.sign(d||1)*(f?1.4:.6)*t*(g-p)*(f?.4:1),c.vs+=Math.sign(h||1)*.25*t*(g-p)*(f?.4:1),Math.abs(h)<8.5&&Math.abs(d)<1.3&&this.time-(c.lastHit??-99)>10&&(c.lastHit=this.time,c.d=e.d+Math.sign(d||1)*1.8,c.vd=Math.sign(d||1)*1.2,this.events.push({kind:"hitBird",swan:c.swan})),p<5&&this.time-c.lastQuack>6&&!c.swan&&(c.lastQuack=this.time,this.events.push({kind:"quack"}))):(c.vs+=Math.sin(this.time*.3+c.flock*7+c.heading)*.05*t,c.vd+=Math.cos(this.time*.23+c.flock*3)*.04*t);const v=(c.swan?.6:.9)*(f?1.8:1);c.vs=ye(c.vs*(1-t*.4),-v,v),c.vd=ye(c.vd*(1-t*.4),-v,v),c.s=ye(c.s+c.vs*t,5,n-5);const m=this.ww.halfWidthAt(c.s)-.4;c.d=ye(c.d+c.vd*t,-m,m),Math.abs(c.d)>=m&&(c.vd*=-.3);const u=this.route.frame(c.s),x=Math.atan2(u.tx*c.vs+u.nx*c.vd,u.tz*c.vs+u.nz*c.vd);Math.hypot(c.vs,c.vd)>.05&&(c.heading+=Math.atan2(Math.sin(x-c.heading),Math.cos(x-c.heading))*Math.min(1,t*3)),Hi.setFromAxisAngle(Wr,c.heading),Xn.compose(Bo.set(u.x+u.nx*c.d,this.ww.levelAt(c.s)+Math.sin(this.time*2+c.s)*.01,u.z+u.nz*c.d),Hi,Ho),c.swan?this.swans.setMatrixAt(l++,Xn):this.ducks.setMatrixAt(a++,Xn)}this.ducks.count=a,this.swans.count=l,this.ducks.instanceMatrix.needsUpdate=this.swans.instanceMatrix.needsUpdate=!0}}const sy=5,hi=(i,t={})=>new $t({color:i,roughness:.6,...t});function oy(){const i=new bt,t=hi("#b8bcc2",{metalness:.8,roughness:.3}),e=(s,o,r,a,l,c)=>{const h=new $(new Rt(s,o,r),t);h.position.set(a,l,c),i.add(h)};for(const s of[.45,.95])e(.55,.025,.025,0,s,.45),e(.55,.025,.025,0,s,-.45),e(.025,.025,.9,.27,s,0),e(.025,.025,.9,-.27,s,0);for(const s of[-.27,.27])for(const o of[-.45,.45])e(.025,.5,.025,s,.7,o);for(let s=-.35;s<=.36;s+=.14)e(.55,.012,.012,0,.45,s);const n=new $(new Rt(.6,.05,.05),hi("#c0392b"));n.position.set(0,1.05,-.52),i.add(n);for(const s of[-.25,.25])for(const o of[-.4,.4]){const r=new $(new jt(.06,.06,.04,8),hi("#2b2b2b"));r.rotation.z=Math.PI/2,r.position.set(s,.1,o),i.add(r)}return i}function ry(){const i=new bt;for(const n of[-.5,.5]){const s=new $(new rn(.33,.03,5,14),hi("#1b1b1b"));s.position.set(0,.33,n),s.rotation.y=Math.PI/2,i.add(s)}const t=new $(new Rt(.04,.04,1),hi("#27ae60"));t.position.y=.55,i.add(t);const e=new $(new Rt(.5,.04,.04),hi("#1b1b1b"));return e.position.set(0,.85,.45),i.add(e),i}function ay(i){const t=new bt,e=new $(new jt(.06,.1,i,5),hi("#5a4632"));e.rotation.z=Math.PI/2,t.add(e);const n=new $(new jt(.02,.04,i*.4,4),hi("#6a5440"));n.position.set(i*.15,.05,.12),n.rotation.set(0,.6,Math.PI/2),t.add(n);const s=new $(new gn(.3,0),hi("#5c7a3a"));return s.position.set(-i*.4,.05,0),s.scale.y=.4,t.add(s),t}const Vu=["trolley","bike","branches"];class ly{constructor(t,e,n){D(this,"kind","trolley");D(this,"group",new bt);D(this,"s",0);D(this,"active",!1);D(this,"spotted",!1);D(this,"progress",0);D(this,"clearing",!1);D(this,"obstacle",{x:0,z:0,psi:0,halfL:1.2,halfB:0});D(this,"pieces",[]);this.route=t,this.ww=e,this.terrain=n}place(t){this.reset(),this.s=t,this.active=!0,this.spotted=!1;const e=this.route.frame(t),n=this.ww.halfWidthAt(t),s=this.ww.levelAt(t),o=Math.atan2(e.tx,e.tz);Object.assign(this.obstacle,{x:e.x,z:e.z,psi:o,halfB:n});const r=(a,l,c,h,d,p,f,g)=>{f.position.set(e.x+e.nx*a+e.tx*l,s+c,e.z+e.nz*a+e.tz*l),f.rotation.set(d,o+h,p),this.group.add(f);const[v,m]=this.route.point(t+g*.6,(n+1.5+Math.abs(g)*.25)*Xt);this.pieces.push({obj:f,from:f.position.clone(),fromRot:f.rotation.clone(),to:new N(v,this.terrain.bankTop(t)+.05,m)})};if(this.kind=Vu[Math.floor(Math.random()*Vu.length)],this.kind==="trolley")r(0,0,-.55,.4,.5,.3,oy(),0);else if(this.kind==="bike")r(0,.2,-.35,1.2,1.2,.2,ry(),0);else for(let a=0;a<6;a++){const l=-n+.6+a/5*(n*2-1.2);r(l,a%2?.4:-.4,.02,.3+a*.5,0,0,ay(1.6+a%3*.6),a-3)}for(let a=0;a<4;a++){const l=new $(a%2?new gn(.2,0):new jt(.04,.04,.12,8),hi(["#f2f2f2","#c0392b","#3a3a3a","#2e86c1"][a]));a%2?l.scale.y=.6:l.rotation.z=Math.PI/2,r(-n+1+a*(n*.6),a%2?.7:-.6,.05,a,0,0,l,a-2)}}get description(){return{trolley:{spotted:"Uh-oh: a shopping trolley is jammed in the canal ahead, right in your way.",cleared:"Cleared! One dripping shopping trolley now sits on the towpath. Tesco will be thrilled."},bike:{spotted:"Uh-oh: someone has thrown a bike in the canal ahead, and it's blocking the way.",cleared:"Cleared! A very sorry-looking bike now leans on the towpath fence."},branches:{spotted:"Uh-oh: a raft of fallen branches is jammed across the canal ahead.",cleared:"Cleared! The branches are stacked on the towpath. Someone will be glad of the kindling."}}[this.kind]}reset(){for(const t of this.pieces)this.group.remove(t.obj);this.pieces=[],this.active=!1,this.clearing=!1,this.progress=0}startClearing(){return!this.active||this.clearing?!1:(this.clearing=!0,!0)}update(t,e){return this.active?this.clearing?(this.progress=Math.min(1,this.progress+t/sy),this.pieces.forEach((n,s)=>{const o=s/this.pieces.length*.85,r=Math.min(1,Math.max(0,(this.progress-o)/.15));r<=0||(n.obj.position.lerpVectors(n.from,n.to,r),n.obj.position.y+=Math.sin(r*Math.PI)*1.4,n.obj.rotation.set(n.fromRot.x*(1-r),n.fromRot.y,n.fromRot.z*(1-r)+(r>.99?s%3*.4:0)))}),this.progress>=1?(this.active=!1,this.clearing=!1,!0):!1):(this.pieces.forEach((n,s)=>n.obj.position.y=n.from.y+Math.sin(e*1.3+s)*.03),!1):!1}}const cy=.75,hy=1.6,Wu=1.4;class uy{constructor(t,e,n,s){D(this,"group",new bt);D(this,"staffed",new Set);D(this,"active",null);D(this,"helpers",new Map);D(this,"actKey","");D(this,"actAt",0);D(this,"driveTarget",null);D(this,"time",0);D(this,"busyGate",null);D(this,"onDuty",!0);D(this,"night",!1);D(this,"lamps",[]);this.route=t,this.ww=e,this.terrain=n,this.boat=s,this.roster()}roster(){for(const t of this.helpers.values())for(const e of t)this.group.remove(e.person.group);this.helpers.clear(),this.lamps.length=0,this.staffed.clear();for(const t of this.ww.groups){if(!(t.staircase||Math.random()<.4))continue;this.staffed.add(t);const e=[];for(const n of[-3,3]){const s=ri(Qi(Math.random,{coat:"#1d5fa8",trousers:"#2d3a55",longCoat:!1}));this.group.add(s.group),s.group.add(this.headlamp()),e.push({person:s,s:(t.gates[0].s+t.gates.at(-1).s)/2+n,offset:n})}this.helpers.set(t,e)}}isStaffed(t){return!!t&&this.onDuty&&this.staffed.has(t)}start(t){this.active=t,this.driveTarget=null,this.actKey=""}stop(){this.active=null,this.driveTarget=null,this.busyGate=null}headlamp(){const t=new bt,e=new $(new Rt(.06,.04,.03),new En({color:"#fff6d8"}));e.position.set(0,1.74,.1);const n=new $(new li(.7,3,16,1,!0),new En({color:"#fff3c4",transparent:!0,opacity:.12,depthWrite:!1,blending:gl,side:Ie}));return n.geometry.translate(0,-1.5,0),n.position.copy(e.position),n.rotation.x=-Math.PI/2+.45,t.add(e,n),t.visible=!1,this.lamps.push(t),t}update(t,e,n){this.time+=t;for(const r of this.lamps)r.visible=this.night;if(this.group.visible=this.onDuty||!!this.active,this.animateHelpers(t),!this.active)return"idle";if(!e||e.group!==this.active)return this.stop(),"done";const s=this.boat,o=n?1:-1;if(e.action==="drive"){if(this.driveTarget===null){const r=this.ww.gates.filter(a=>a.group===this.active&&(a.s-s.s)*o>-.5).sort((a,l)=>(a.s-l.s)*o)[0];if(!r)this.driveTarget=s.s+o*30;else{const a=this.ww.bodies[n?r.above:r.below];this.driveTarget=a.kind==="chamber"?(a.s0+a.s1)/2:r.s+o*(Nn/2+14)}}this.creepTo(this.driveTarget,t)}else if(this.driveTarget=null,this.creepTo(null,t),e.gate&&e.action!=="wait"){this.busyGate=e.gate;const r=`${e.action}:${e.gate.label}`;if(r!==this.actKey)this.actKey=r,this.actAt=this.time+hy+this.walkTime(e.gate);else if(this.time>=this.actAt){const a=e.gate;e.action==="paddlesUp"?a.wantPaddle=!0:e.action==="paddlesDown"?a.wantPaddle=!1:e.action==="close"?a.wantOpen=!1:e.action==="open"&&this.ww.levelsMatch(a)&&(a.wantOpen=!0),this.actKey=""}}else e.gate&&(this.busyGate=e.gate);return"running"}walkTime(t){const e=this.helpers.get(this.active);return e?Math.min(...e.map(n=>Math.abs(n.s-t.s)))/Wu:0}creepTo(t,e){const n=this.boat,s=this.route.frame(n.s);let o=0;if(t!==null){const l=t-n.s;o=Math.sign(l)*Math.min(cy,Math.abs(l)*.5),Math.abs(l)<.05&&(o=0)}n.s+=o*e,n.d+=(0-n.d)*Math.min(1,e*.8);const r=this.route.frame(n.s);n.x=r.x+r.nx*n.d,n.z=r.z+r.nz*n.d;const a=Math.atan2(s.tx,s.tz)+(Math.cos(n.psi-Math.atan2(s.tx,s.tz))>=0?0:Math.PI);n.psi+=Math.atan2(Math.sin(a-n.psi),Math.cos(a-n.psi))*Math.min(1,e*1.5),n.u=Math.abs(o),n.v=n.r=0,n.notch=0,n.thrust=0}animateHelpers(t){var e;for(const[n,s]of this.helpers){const o=this.active===n&&((e=this.busyGate)==null?void 0:e.group)===n;for(const r of s){const a=(n.gates[0].s+n.gates.at(-1).s)/2+r.offset,l=o?this.busyGate.s+r.offset*.9:a,c=Math.sign(l-r.s)*Math.min(Math.abs(l-r.s),Wu*t);r.s+=c;const h=this.ww.halfWidthAt(r.s),d=r.offset<0?Xt:-Xt,[p,f]=this.route.point(r.s,(h+1.1)*d);r.person.group.position.set(p,this.terrain.bankTop(r.s)+(Math.abs(c)>.001?Math.abs(Math.sin(this.time*6))*.03:0),f);const g=this.route.frame(r.s);r.person.group.rotation.y=Math.abs(c)>.001?Math.atan2(g.tx*Math.sign(c),g.tz*Math.sign(c)):Math.atan2(-g.nx*d,-g.nz*d);const v=o&&Math.abs(r.s-l)<.5,m=this.busyGate,u=v&&!!m&&m.paddle>.02&&m.paddle<.98;Math.abs(c)>.001?aa(r.person,this.time*6):(Kd(r.person),ji(r.person,u?"wind":v&&m&&m.open>.02&&m.open<.98?"push":"rest",this.time))}}}}const Xu=new Vt("#b0664d"),$u=new Vt("#c9a58a"),dl=new Vt("#d0b896");class dy{constructor(){D(this,"pos",[]);D(this,"col",[])}tri(t,e,n,s){for(const o of[t,e,n])this.pos.push(o.x,o.y,o.z),this.col.push(s.r,s.g,s.b)}quad(t,e,n,s,o){this.tri(t,e,n,o),this.tri(t,n,s,o)}mesh(){const t=new xe;t.setAttribute("position",new Zt(this.pos,3)),t.setAttribute("color",new Zt(this.col,3)),t.computeVertexNormals();const e=new $(t,new $t({vertexColors:!0,roughness:.9,flatShading:!0,side:Ie}));return e.castShadow=e.receiveShadow=!0,e}}class fy{constructor(t,e,n,s){D(this,"group",new bt);this.route=t,this.ww=e,this.terrain=n;const o=new dy;for(const r of s.walls??[]){const a=[];for(let l=0;l<r.p.length;l+=2)a.push([r.p[l],r.p[l+1]]);r.kind==="gate"?this.gate(o,a):r.closed?this.extrude(o,a,2.4,Xu,$u):this.extrude(o,py(a,1.3),2.4,Xu,$u)}this.group.add(o.mesh()),s.bridgeOfSighs&&this.group.add(this.bridgeOfSighs(s.bridgeOfSighs))}ground(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s),o=Math.sign(n.d||1)*Math.max(n.dist,s+7);return this.terrain.landHeight(t,e,n.s,o)}extrude(t,e,n,s,o){const r=e.length;if(r<3)return;const a=e.map(([h,d])=>this.ground(h,d)+n),l=(h,d)=>new N(e[h][0],d,e[h][1]);for(let h=0;h<r;h++){const d=(h+1)%r;t.quad(l(h,a[h]-n-7),l(d,a[d]-n-7),l(d,a[d]),l(h,a[h]),s)}const c=ci.triangulateShape(e.map(([h,d])=>new it(h,d)),[]);for(const[h,d,p]of c)t.tri(l(h,a[h]),l(d,a[d]),l(p,a[p]),o);for(let h=0;h<r;h++){const d=(h+1)%r,p=Math.hypot(e[d][0]-e[h][0],e[d][1]-e[h][1]);for(let f=.6;f<p-.3;f+=2.2){const g=f/p,v=e[h][0]+(e[d][0]-e[h][0])*g,m=e[h][1]+(e[d][1]-e[h][1])*g,u=a[h]+(a[d]-a[h])*g;$r(t,v,u+.45,m,.9,.9,.5,Math.atan2(e[d][0]-e[h][0],e[d][1]-e[h][1]),s)}}}gate(t,e){const n=e.reduce((E,S)=>E+S[0],0)/e.length,s=e.reduce((E,S)=>E+S[1],0)/e.length;let o=0,r=0,a=0;for(const[E,S]of e)o+=(E-n)**2,r+=(S-s)**2,a+=(E-n)*(S-s);const l=.5*Math.atan2(2*a,o-r),c=Math.cos(l),h=Math.sin(l);let d=1/0,p=-1/0,f=1/0,g=-1/0;for(const[E,S]of e){const R=(E-n)*c+(S-s)*h,w=-(E-n)*h+(S-s)*c;d=Math.min(d,R),p=Math.max(p,R),f=Math.min(f,w),g=Math.max(g,w)}const v=this.ground(n,s),m=p-d,u=Math.max(4,g-f),x=Math.atan2(c,h),M=E=>[n+c*E,s+h*E],[_,T]=M((d+p)/2);$r(t,_,v+7.4,T,u,3.2,m,x,dl);for(const E of[d+1.8,p-1.8]){const[S,R]=M(E);$r(t,S,v+2.9,R,u,5.8,3.6,x,dl,6)}$r(t,_,v+9.4,T,u*.15,.9,m,x,dl)}bridgeOfSighs(t){const e=this.route,n=this.ww,s=e.frame(t.s),o=n.levelAt(t.s),r=n.halfWidthAt(t.s),a=r+7.5,l=Math.max(...[-1,1].map(u=>{const[x,M]=e.point(t.s,a*u);return this.terrain.landHeight(x,M,t.s,a*u)}))+.1,c=a+1,h=r+3.6,d=l-.75,p=o+1.2,f=new Es;f.moveTo(-c,o-2),f.lineTo(-h,o-2),f.lineTo(-h,p);for(let u=1;u<20;u++){const x=Math.PI-Math.PI*u/20;f.lineTo(Math.cos(x)*h,p+Math.sin(x)*(d-p))}f.lineTo(h,p),f.lineTo(h,o-2),f.lineTo(c,o-2),f.lineTo(c,l),f.lineTo(-c,l),f.closePath();const g=2,v=new $(new xo(f,{depth:g,bevelEnabled:!1,curveSegments:12}).translate(0,0,-g/2),new $t({color:"#a8654f",roughness:.9,flatShading:!0}));v.castShadow=v.receiveShadow=!0;const m=new bt;return m.add(v),m.position.set(s.x,0,s.z),m.rotation.y=Math.atan2(-s.nz,s.nx),m.name="bridge-of-sighs",m}}function py(i,t){const e=[],n=[];for(let s=0;s<i.length;s++){const o=i[Math.max(0,s-1)],r=i[Math.min(i.length-1,s+1)];let a=r[0]-o[0],l=r[1]-o[1];const c=Math.hypot(a,l)||1;a/=c,l/=c,e.push([i[s][0]-l*t,i[s][1]+a*t]),n.push([i[s][0]+l*t,i[s][1]-a*t])}return[...e,...n.reverse()]}function $r(i,t,e,n,s,o,r,a,l,c=0){const h=Math.sin(a),d=Math.cos(a),p=(M,_,T)=>new N(t+M*d+T*h,e+_,n-M*h+T*d),f=s/2,g=r/2,v=-o/2-c,m=o/2,u=[p(-f,v,-g),p(f,v,-g),p(f,v,g),p(-f,v,g),p(-f,m,-g),p(f,m,-g),p(f,m,g),p(-f,m,g)],x=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7]];for(const[M,_,T,E]of x)i.quad(u[M],u[_],u[T],u[E],l)}const Zd=1.69,ke=(i,t={})=>new $t({color:i,roughness:.6,flatShading:!0,...t}),Se=(i,t,e,n,s,o,r=0,a=0,l=0)=>{const c=new $(t,e);return c.position.set(n,s,o),c.rotation.set(r,a,l),c.castShadow=!0,i.add(c),c},so={buckby:{name:"a Buckby can",at:[.35,-6],build(){const i=new bt;Se(i,new jt(.17,.19,.5,12),ke("#1f4d3a"),0,.25,0),Se(i,new jt(.175,.185,.14,12),ke("#a3291f"),0,.27,0);for(let t=0;t<4;t++)Se(i,new Be(.035,6,4),ke(t%2?"#f2c94c":"#f4f1e8"),Math.sin(t*1.6)*.18,.27,Math.cos(t*1.6)*.18);return Se(i,new jt(.1,.17,.08,12),ke("#1f4d3a"),0,.54,0),Se(i,new jt(.06,.06,.06,10),ke("#c9a24a",{metalness:.8,roughness:.3}),0,.6,0),Se(i,new rn(.11,.015,6,12,Math.PI),ke("#1f4d3a"),0,.56,0),Se(i,new jt(.025,.035,.22,6),ke("#1f4d3a"),.17,.4,0,0,0,-.9),i}},bike:{name:"a bicycle",at:[-.15,2.4],build(){const i=new bt,t=ke("#1b1b1b"),e=ke("#c0392b");for(const n of[-.5,.5])Se(i,new rn(.3,.025,5,16),t,0,.04,n,Math.PI/2);return Se(i,new Rt(.04,.04,.95),e,0,.06,0),Se(i,new Rt(.04,.04,.5),e,.12,.06,.15,0,.5),Se(i,new Rt(.5,.03,.03),t,0,.07,.45),Se(i,new Rt(.1,.04,.2),t,0,.08,-.25),i}},lifebuoy:{name:"a lifebuoy",at:[-.4,-5.5],build(){const i=new bt;for(let t=0;t<4;t++)Se(i,new rn(.3,.075,6,6,Math.PI/2),ke(t%2?"#f4f4f0":"#e0522f"),0,.08,0,Math.PI/2,0,t*Math.PI/2);return i}},brasses:{name:"polished chimney brasses",at:[.45,3.7],build(){const i=new bt,t=ke("#e2b84a",{metalness:.9,roughness:.2});for(const e of[.1,.32,.5])Se(i,new jt(.08,.08,.04,10),t,0,e,0);for(let e=0;e<5;e++)Se(i,new rn(.03,.008,4,8),t,.06+e*.03,.42-e*.07,0,0,0,e%2?0:Math.PI/2);return i}},logs:{name:"a stack of firewood",at:[.3,-2.6],build(){const i=new bt,t=ke("#6b4a2e"),e=ke("#c9a27a");let n=0;for(let s=0;s<3;s++)for(let o=0;o<4-s;o++,n++){const r=Se(i,new jt(.07,.07,.7,6),n%3?t:e,-.22+o*.15+s*.075,.07+s*.12,0,Math.PI/2);r.rotation.y=n%2*.05}return i}},coal:{name:"two sacks of coal",at:[.3,-1.3],build(){const i=new bt;for(const t of[-.25,.25])Se(i,new gn(.22,1),ke("#3a3a3a",{roughness:.95}),0,.14,t).scale.set(1,.65,1.15);return i}},cat:{name:"a ship’s cat",at:[-.3,4.5],build(){const i=new bt,t=ke("#d9822b");Se(i,new Be(.16,10,8),t,0,.1,0).scale.set(1,.6,1.25),Se(i,new Be(.09,10,8),t,.08,.13,.15);for(const e of[.03,.13])Se(i,new li(.03,.06,4),t,e,.22,.15);return Se(i,new rn(.13,.025,5,10,Math.PI*1.2),t,0,.04,0,Math.PI/2,0,1),i}},gnome:{name:"a garden gnome",at:[.4,-4.9],build(){const i=new bt;return Se(i,new jt(.09,.11,.2,8),ke("#2e86c1"),0,.1,0),Se(i,new Be(.07,8,6),ke("#f1c6a5"),0,.26,0),Se(i,new li(.06,.12,6),ke("#f4f4f0"),0,.2,.05,.3),Se(i,new li(.075,.2,8),ke("#c0392b"),0,.4,0),i}},sunflower:{name:"a sunflower in a pot",at:[.4,1.4],build(){const i=new bt;return Se(i,new jt(.15,.11,.22,8),ke("#9b5a3c"),0,.11,0),Se(i,new jt(.015,.02,.7,5),ke("#4f7a33"),0,.55,0),Se(i,new jt(.13,.13,.03,12),ke("#f2c94c"),0,.92,.02,1.2),Se(i,new jt(.06,.06,.04,10),ke("#5a3d22"),0,.92,.04,1.2),i}}},my=["buckby","bike","lifebuoy","brasses"],gy=["cat","gnome","sunflower"];class vy{constructor(t){D(this,"owned",new Set);D(this,"meshes",new Map);this.boat=t;try{for(const e of JSON.parse(localStorage.getItem("canal.roof")??"[]"))e in so&&this.show(e)}catch{}}has(t){return this.owned.has(t)}give(t){if(this.owned.has(t))return!1;this.show(t);try{localStorage.setItem("canal.roof",JSON.stringify([...this.owned]))}catch{}return!0}nextFrom(t){return t.find(e=>!this.owned.has(e))??null}show(t){this.owned.add(t);const e=so[t],n=e.build();n.position.set(e.at[0],Zd,e.at[1]),this.boat.add(n),this.meshes.set(t,n)}}const oo=i=>new $t({color:i,roughness:.85,flatShading:!0});function Jd(i,t){const e=document.createElement("canvas");e.width=256,e.height=128;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,256,128),n.fillStyle="#f6efdd",n.font="800 34px Nunito, sans-serif",n.textAlign="center",n.textBaseline="middle",i.split(`
`).forEach((r,a,l)=>n.fillText(r,128,64+(a-(l.length-1)/2)*40,236));const s=new On(e);s.colorSpace=Oe;const o=new $(new ui(.8,.4),new $t({map:s,side:Ie}));return o.position.y=1,o}function _y(){const i=new bt,t=oo("#6b4a2e"),e=oo("#c9a27a");for(let r=0;r<4;r++)for(let a=0;a<6-r;a++){const l=new $(new jt(.08,.08,.6,6),(a+r)%3?t:e);l.rotation.x=Math.PI/2,l.position.set(-.4+a*.17+r*.085,.08+r*.14,0),l.castShadow=!0,i.add(l)}const n=new $(new Rt(.3,.3,.25),oo("#3d5a3d"));n.position.set(.85,.15,0),i.add(n);const s=Jd(`LOGS £5
honesty box`,"#3d5a3d");s.position.set(.85,.95,0);const o=new $(new Rt(.06,.8,.06),oo("#5a4632"));return o.position.set(.85,.5,-.05),i.add(s,o),i}function xy(){const i=new bt;for(let n=0;n<5;n++){const s=new $(new gn(.24,1),oo("#3a3a3a"));s.scale.set(1,.7,1.2),s.position.set(-.5+n%3*.45,.16+Math.floor(n/3)*.3,0),s.castShadow=!0,i.add(s)}const t=Jd(`COAL
& kindling`,"#2b2b2b");t.position.set(.85,.95,0);const e=new $(new Rt(.06,.8,.06),oo("#5a4632"));return e.position.set(.85,.5,-.05),i.add(t,e),i}class My{constructor(t,e,n,s,o){D(this,"group",new bt);D(this,"list",[]);for(const r of s){const a=r.item==="logs"?_y():xy(),l=t.frame(r.s),c=(e.halfWidthAt(r.s)+2.2)*Xt;a.position.set(l.x+l.nx*c,n.bankTop(r.s),l.z+l.nz*c),a.rotation.y=Math.atan2(l.tx,l.tz)+Math.PI/2*Xt,a.visible=!o(r.item),this.group.add(a),this.list.push({...r,group:a,verb:r.item==="logs"?"Load the logs (drop a fiver in the honesty box)":"Load a couple of sacks of coal",done:r.item==="logs"?"Logs loaded onto the roof. The stove will be roaring tonight.":"Two sacks of coal on the roof. Toasty."})}}near(t){return this.list.find(e=>e.group.visible&&Math.abs(e.s-t)<22)}}const yy=1.435,qu=650,by=18,ds=20,Js=3;class wy{constructor(t,e,n,s,o){D(this,"group",new bt);D(this,"lines",[]);D(this,"cars",[]);D(this,"run",null);D(this,"nextRun",12);D(this,"time",0);D(this,"rumble",0);this.route=t,this.ww=e,this.terrain=n,this.bridges=s;const r=s.placed.find(u=>u.data.kind==="rail");if(!r)return;const a=[r.x,r.z],l=o.map(u=>{const x=[];for(let M=0;M<u.p.length;M+=2)x.push([u.p[M],u.p[M+1]]);return{pts:x,bridge:u.b===1}}),c=u=>Math.min(...u.pts.map(x=>Math.hypot(x[0]-a[0],x[1]-a[1]))),h=u=>`${u[0]},${u[1]}`,d=new Map;l.forEach((u,x)=>{for(const M of[u.pts[0],u.pts.at(-1)])d.set(h(M),[...d.get(h(M))??[],x])});const p=new Set,f=u=>{for(let x=0;x<200;x++){const M=u.at(-1),_=u.at(-2),T=M[0]-_[0],E=M[1]-_[1];let S=-1,R=.7,w=[];for(const y of d.get(h(M))??[]){if(p.has(y))continue;const P=l[y].pts,A=h(P[0])===h(M)?P:[...P].reverse(),k=A[1][0]-A[0][0],F=A[1][1]-A[0][1],W=(T*k+E*F)/(Math.hypot(T,E)*Math.hypot(k,F)||1);W>R&&(R=W,S=y,w=A)}if(S<0)return;p.add(S),u.push(...w.slice(1))}},g=l.map((u,x)=>({w:u,i:x})).filter(({w:u})=>u.bridge&&c(u)<30);for(const{w:u,i:x}of g){if(p.has(x))continue;p.add(x);const M=[...u.pts];f(M);const _=[...u.pts].reverse();f(_);const T=[..._.reverse().slice(0,-u.pts.length),...M];if(T.length<4)continue;const E=[T[0]];for(let R=1;R<T.length;R++){const[w,y]=T[R-1],[P,A]=T[R],k=Math.max(1,Math.ceil(Math.hypot(P-w,A-y)/4));for(let F=1;F<=k;F++)E.push([w+(P-w)*F/k,y+(A-y)*F/k])}const S=[0];for(let R=1;R<E.length;R++)S.push(S[R-1]+Math.hypot(E[R][0]-E[R-1][0],E[R][1]-E[R-1][1]));S.at(-1)<300||this.lines.push({pts:E,ys:this.gradedHeights(E,S,a),cum:S})}const v=new Set(p);this.buildTrack(this.lines.map(u=>({pts:u.pts,ys:u.ys}))),this.buildTrack(l.map((u,x)=>({w:u,i:x})).filter(({w:u,i:x})=>!v.has(x)&&c(u)<qu).map(({w:u})=>({pts:u.pts,ys:null}))),o.forEach((u,x)=>{(v.has(x)||c(l[x])<qu)&&(u.skip=!0)});const m=u=>{const x=Ii(Sy(u)),M=new $(x,Ci());M.castShadow=!0;const _=new bt;return _.add(M),_.visible=!1,this.group.add(_),_};for(let u=0;u<Js;u++)this.cars.push(m(u===0||u===Js-1));this.cars[Js-1].children[0].rotation.y=Math.PI}gradedHeights(t,e,n){const s=t.map(([c,h])=>this.trackY(c,h));let o=0;t.forEach((c,h)=>{Math.hypot(c[0]-n[0],c[1]-n[1])<Math.hypot(t[o][0]-n[0],t[o][1]-n[1])&&(o=h)});const r=s[o],a=s.map((c,h)=>{let d=0,p=0;for(let f=h;f>=0&&e[h]-e[f]<40;f--)d+=s[f],p++;for(let f=h+1;f<s.length&&e[f]-e[h]<40;f++)d+=s[f],p++;return d/p}),l=.02;return a.map((c,h)=>{const d=l*Math.abs(e[h]-e[o]);c=Math.min(r+d,Math.max(r-d,c));const p=this.route.project(t[h][0],t[h][1]),f=this.bridges.rampAt(p.s,p.d);return f.onDeck?Math.max(c,f.y+.25):c})}trackY(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s),o=n.dist<s+3.5?this.terrain.bankTop(n.s):this.terrain.landHeight(t,e,n.s,n.d);return Math.max(o,this.bridges.rampAt(n.s,n.d).y)+.25}buildTrack(t){const e=[],n=[],s=[],o=new kn,r=new N(0,1,0),a=new N(1,1,1);for(const{pts:f,ys:g}of t)for(let v=0;v+1<f.length;v++){const[m,u]=f[v],[x,M]=f[v+1],_=Math.hypot(x-m,M-u);if(_<.01)continue;const T=(x-m)/_,E=(M-u)/_,S=-E,R=T;o.setFromAxisAngle(r,Math.atan2(T,E));const w=Math.ceil(_/.7);let y=null;for(let P=0;P<=w;P++){const A=m+T*(_*P)/w,k=u+E*(_*P)/w,F=g?g[v]+(g[v+1]-g[v])*P/w:this.trackY(A,k);P<w&&e.push(new pe().compose(new N(A,F-.12,k),o,a));const W=[A,F,k];if(y){for(const rt of[-1,1]){const Ot=yy/2*rt,ee=[y[0]+S*Ot,y[1],y[2]+R*Ot],J=[W[0]+S*Ot,W[1],W[2]+R*Ot];n.push(ee[0],ee[1]-.1,ee[2],J[0],J[1]-.1,J[2],J[0],J[1],J[2]),n.push(ee[0],ee[1]-.1,ee[2],J[0],J[1],J[2],ee[0],ee[1],ee[2])}const H=1.7,B=[y[0]-S*H,y[1]-.2,y[2]-R*H],G=[y[0]+S*H,y[1]-.2,y[2]+R*H],ut=[W[0]-S*H,W[1]-.2,W[2]-R*H],_t=[W[0]+S*H,W[1]-.2,W[2]+R*H];s.push(...B,...ut,...G,...G,...ut,..._t)}y=W}}const l=new Rt(2.5,.12,.24),c=new Un(l,new $t({color:"#5a4a3c",roughness:1}),e.length);e.forEach((f,g)=>c.setMatrixAt(g,f)),c.receiveShadow=!0,this.group.add(c);const h=new xe;h.setAttribute("position",new Zt(s,3)),h.computeVertexNormals();const d=new $(h,new $t({color:"#6d635a",roughness:1,side:Ie}));d.receiveShadow=!0,this.group.add(d);const p=new xe;p.setAttribute("position",new Zt(n,3)),p.computeVertexNormals(),this.group.add(new $(p,new $t({color:"#8d9196",metalness:.7,roughness:.35,side:Ie})))}at(t,e){const{pts:n,ys:s,cum:o}=t;e=Math.max(0,Math.min(o.at(-1),e));let r=1;for(;r<o.length-1&&o[r]<e;)r++;const a=(e-o[r-1])/(o[r]-o[r-1]||1);return[n[r-1][0]+(n[r][0]-n[r-1][0])*a,s[r-1]+(s[r]-s[r-1])*a,n[r-1][1]+(n[r][1]-n[r-1][1])*a]}update(t,e){if(this.time+=t,this.rumble=0,!this.lines.length)return;if(!this.run){for(const h of this.cars)h.visible=!1;if(this.time<this.nextRun)return;const l=Math.floor(Math.random()*this.lines.length),c=Math.random()<.5?1:-1;this.run={line:l,dir:c,dist:c>0?-10:this.lines[l].cum.at(-1)+ds*Js+10}}const n=this.run,s=this.lines[n.line];n.dist+=n.dir*by*t;const o=s.cum.at(-1);let r=1/0;this.cars.forEach((l,c)=>{const h=n.dist-n.dir*c*(ds+1),d=h-n.dir*ds,p=Math.max(h,d)>0&&Math.min(h,d)<o;if(l.visible=p,!p)return;const f=this.at(s,h),g=this.at(s,d),v=this.at(s,(h+d)/2);l.position.set(v[0],v[1],v[2]),l.rotation.set(0,Math.atan2(f[0]-g[0],f[2]-g[2]),0),l.rotateX(-Math.atan2(f[1]-g[1],ds)),r=Math.min(r,l.position.distanceTo(e))}),this.rumble=Math.max(0,1-r/350),(n.dir>0?n.dist-Js*(ds+1)>o:n.dist+Js*(ds+1)<0)&&(this.run=null,this.nextRun=this.time+50+Math.random()*50)}}function Sy(i){const t=new bt,e=(o,r={})=>new $t({color:o,...r}),n=(o,r,a,l,c,h,d)=>{const p=new $(new Rt(o,r,a),e(l));return p.position.set(c,h,d),t.add(p),p},s=ds-.4;n(2.7,2.6,s,"#c8102e",0,2.25,0),n(2.72,.9,s*.98,"#3a3f45",0,2.5,0),n(2.74,.12,s*.98,"#f4f4f0",0,1.65,0),n(2.6,.25,s*.99,"#9aa0a6",0,3.6,0),n(2.5,.6,s*.9,"#2b2b2b",0,.75,0);for(const o of[-s/2+3,s/2-3]){n(2.2,.5,2.4,"#1b1b1b",0,.45,o);for(const r of[-.8,.8])for(const a of[-.75,.75]){const l=new $(new jt(.42,.42,.12,10),e("#3a3a3a"));l.rotation.z=Math.PI/2,l.position.set(a,.42,o+r),t.add(l)}}for(let o=0;o<2;o++)n(.06,2,.9,"#2b2b2b",o?1.36:-1.36,2.1,-s/2+1.6);if(i){const o=new $(new jt(1.35,1.35,2.6,8,1,!1,0,Math.PI),e("#c8102e"));o.rotation.set(Math.PI/2,0,Math.PI/2),o.scale.set(1,1,.5),o.position.set(0,2.25,s/2),t.add(o),n(2.2,1.2,.5,"#f2c200",0,1.4,s/2+.45),n(2,.7,.3,"#22282e",0,2.75,s/2+.45)}return t}const cs=48,Ey=.35,fl=14,Ty=.8,Yu=1.1;class Ay{constructor(t,e,n){D(this,"mesh");D(this,"points",[]);D(this,"emitIn",0);D(this,"pos");D(this,"col");D(this,"uv");D(this,"churn");D(this,"washed",new Map);D(this,"time",0);this.route=t,this.ww=e;const s=cs*4;this.pos=new Float32Array(s*3),this.col=new Float32Array(s*4),this.uv=new Float32Array(s*2);const o=[];for(const a of[0,1]){const l=a*cs*2;for(let c=0;c<cs-1;c++){const h=l+c*2,d=h+1,p=h+2,f=h+3;o.push(h,p,d,d,p,f)}}const r=new xe;r.setAttribute("position",new We(this.pos,3).setUsage(vs)),r.setAttribute("color",new We(this.col,4).setUsage(vs)),r.setAttribute("uv",new We(this.uv,2).setUsage(vs)),r.setIndex(o),this.mesh=new $(r,new En({map:Cy(),vertexColors:!0,transparent:!0,depthWrite:!1,side:Ie})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.churn=new $(new Lc(1,18),new En({color:"#f4f8f4",transparent:!0,opacity:0,depthWrite:!1})),this.churn.rotation.x=-Math.PI/2,this.churn.position.set(0,.04,-9.6),n.add(this.churn)}update(t,e,n,s,o,r){this.time+=t;for(const h of this.points)h.age+=t;for(;this.points.length&&this.points[0].age>fl;)this.points.shift();const a=Ee(2.6,4.6,o);if(this.emitIn-=t,this.emitIn<=0)if(this.emitIn=Ey,a>.02){const h=-Math.cos(s),d=Math.sin(s);this.points.push({s:e,x:n[0],z:n[1],nx:h,nz:d,age:0,strength:a,start:1}),this.points.length>cs&&this.points.shift()}else this.points.length&&this.points.at(-1).strength>0&&(this.points.push({s:e,x:n[0],z:n[1],nx:-Math.cos(s),nz:Math.sin(s),age:0,strength:0,start:1}),this.points.length>cs&&this.points.shift());this.col.fill(0);const l=[...this.points].reverse();for(const h of[0,1]){const d=h?1:-1,p=h*cs*2;for(let f=0;f<cs;f++){const g=l[Math.min(f,l.length-1)],v=(p+f*2)*3,m=(p+f*2)*4;if(!g)continue;const u=this.spread(g),x=this.ww.levelAt(g.s)+.03,M=f<l.length?g.strength*(1-g.age/fl)**1.5*.75:0;for(const[_,T]of[[0,u-Yu/2],[1,u+Yu/2]])this.pos[v+_*3]=g.x+g.nx*T*d,this.pos[v+_*3+1]=x,this.pos[v+_*3+2]=g.z+g.nz*T*d,this.col.set([.95,.97,.95,M],m+_*4),this.uv.set([_,g.s*.12],(p+f*2+_)*2)}}this.mesh.geometry.getAttribute("position").needsUpdate=!0,this.mesh.geometry.getAttribute("color").needsUpdate=!0,this.mesh.geometry.getAttribute("uv").needsUpdate=!0;const c=this.churn.material;c.opacity=ye(r,0,1)*(.3+.1*Math.sin(this.time*11)),this.churn.scale.setScalar(.7+r*.6+.05*Math.sin(this.time*7))}spread(t){const e=this.ww.halfWidthAt(t.s);return Math.min(t.start+t.age*Ty,e+.4)}washes(t){const e=[];for(const n of t){if(this.time-(this.washed.get(n)??-99)<12)continue;const s=this.route.project(n.x,n.z,n.s).d,o=Math.sign(s)||1;for(const r of this.points){if(r.strength<.15||Math.abs(r.s-n.s)>n.halfL)continue;const l=this.route.project(r.x,r.z,r.s).d+o*this.spread(r);if(o*l>=Math.abs(s)-n.halfB-.2){const c=r.strength*(1-r.age/fl);if(c<.1)continue;this.washed.set(n,this.time),e.push({boat:n,strength:c});break}}}return e}}function Cy(){const e=document.createElement("canvas");e.width=64,e.height=256;const n=e.getContext("2d"),s=n.createImageData(64,256);for(let r=0;r<256;r++)for(let a=0;a<64;a++){const l=a/63,c=Math.sin(l*Math.PI)**1.5,h=Math.random()**2.2,d=.5+.5*Math.sin(r*.35+Math.sin(a*.4)*2),p=c*Math.min(1,h*1.6+d*.25),f=(r*64+a)*4;s.data[f]=s.data[f+1]=s.data[f+2]=255,s.data[f+3]=p*255}n.putImageData(s,0,0);const o=new On(e);return o.wrapS=Ti,o.wrapT=po,o}const ju=new Map;function Ry(i,t){const e=JSON.stringify(i),n=ju.get(e);if(n)return n;const s=160,o=200,r=new Id({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});r.setSize(s,o,!1),r.outputColorSpace=Oe;const a=new Tc;a.add(new Wd("#ffffff","#8a8a7a",1.6));const l=new $d("#fff4e0",2.2);l.position.set(2,3,3),a.add(l);const c=ri(i);t==null||t(c),c.group.rotation.y=.5,a.add(c.group);const h=new mn(30,s/o,.1,20);h.position.set(0,1,4.2),h.lookAt(0,.92,0),r.render(a,h);const d=r.domElement.toDataURL("image/png");return r.dispose(),r.forceContextLoss(),ju.set(e,d),d}const Ku=["#c0392b","#2e86c1","#f4f4f0","#2b2b2b","#7f8c8d","#27ae60","#d35400","#1d3557","#b8b8b8","#8e44ad"],ms=4.3;function Py(){const i=new bt,t=new bt,e=o=>new $t({color:o}),n=(o,r,a,l,c,h,d=0)=>{const p=new $(new Rt(r,a,l),e(c));p.position.set(0,h,d),o.add(p)};n(i,1.78,.62,ms,"#ffffff",.6),n(i,1.6,.5,2.3,"#ffffff",1.15,-.25),n(t,1.62,.42,2,"#26313a",1.12,-.2),n(t,1.82,.16,.2,"#1b1b1b",.42,ms/2),n(t,1.82,.16,.2,"#1b1b1b",.42,-ms/2),n(t,1.4,.12,.05,"#f6efc8",.72,ms/2+.01),n(t,1.4,.12,.05,"#b8241b",.72,-ms/2-.01);for(const o of[-.82,.82])for(const r of[-1.35,1.35]){const a=new $(new jt(.33,.33,.22,10),e("#1b1b1b"));a.rotation.z=Math.PI/2,a.position.set(o,.33,r),t.add(a)}const s=o=>{const r=new bt;return r.add(o),Ii(r)};return{body:s(i),rest:s(t)}}class Ly{constructor(t){D(this,"group",new bt);D(this,"paths",[]);D(this,"cars",[]);D(this,"body");D(this,"rest");D(this,"rand",Di(99));D(this,"respawn");for(const a of t){const l=[0];for(let c=1;c<a.pts.length;c++)l.push(l[c-1]+Math.hypot(a.pts[c][0]-a.pts[c-1][0],a.pts[c][2]-a.pts[c-1][2]));l.at(-1)<40||this.paths.push({pts:a.pts,cum:l,lane:Math.min(2.2,Math.max(1.1,a.w/4)),bridge:a.bridge})}const e=this.paths.map(a=>(a.bridge?12:1)*Math.min(3,a.cum.at(-1)/120)),n=e.reduce((a,l)=>a+l,0),s=this.paths.length?Math.min(60,Math.round(n*1.5)):0,o=Py();this.body=new Un(o.body,Ci(),Math.max(1,s)),this.rest=new Un(o.rest,Ci(),Math.max(1,s));for(const a of[this.body,this.rest])a.castShadow=!0,a.frustumCulled=!1,a.instanceMatrix.setUsage(vs),this.group.add(a);const r=()=>{let a=this.rand()*n;for(let l=0;l<e.length;l++)if((a-=e[l])<=0)return l;return e.length-1};for(let a=0;a<s;a++){const l=r(),c={path:l,dist:this.rand()*this.paths[l].cum.at(-1),dir:this.rand()<.5?1:-1,speed:8+this.rand()*5,colour:new Vt(Ku[Math.floor(this.rand()*Ku.length)])};this.cars.push(c),this.body.setColorAt(a,c.colour)}this.body.count=this.rest.count=s,this.respawn=a=>{a.path=r(),a.dir=this.rand()<.5?1:-1,a.dist=a.dir>0?0:this.paths[a.path].cum.at(-1),a.speed=8+this.rand()*5}}at(t,e){e=Math.max(0,Math.min(t.cum.at(-1),e));let n=1;for(;n<t.cum.length-1&&t.cum[n]<e;)n++;const s=(e-t.cum[n-1])/(t.cum[n]-t.cum[n-1]||1),o=t.pts[n-1],r=t.pts[n];return[o[0]+(r[0]-o[0])*s,o[1]+(r[1]-o[1])*s,o[2]+(r[2]-o[2])*s]}update(t){const e=new pe,n=new kn,s=new Zn(0,0,0,"YXZ"),o=new N,r=new N(1,1,1);this.cars.forEach((a,l)=>{const c=this.paths[a.path];a.dist+=a.dir*a.speed*t,(a.dist<0||a.dist>c.cum.at(-1))&&this.respawn(a);const h=this.paths[a.path],d=this.at(h,a.dist+a.dir*ms*.45),p=this.at(h,a.dist-a.dir*ms*.45),f=d[0]-p[0],g=d[2]-p[2],v=Math.hypot(f,g)||1,m=g/v,u=-f/v;o.set((d[0]+p[0])/2+m*h.lane,(d[1]+p[1])/2,(d[2]+p[2])/2+u*h.lane),s.set(-Math.atan2(d[1]-p[1],v),Math.atan2(f,g),0),n.setFromEuler(s),e.compose(o,n,r),this.body.setMatrixAt(l,e),this.rest.setMatrixAt(l,e)}),this.body.instanceMatrix.needsUpdate=this.rest.instanceMatrix.needsUpdate=!0}}const Gi=[1,2,5,10,30],Zu=10,pl=8,Ju=20,Qe=Fc==="pontcysyllte",Dy={coat:"#e8b931",trousers:"#2d3a55",skin:"#e3b08f",hair:"#5a3a22",hairStyle:"cap",hat:"#3d4a3a",longCoat:!1},ml=80;function qr(i){const t=Math.abs(i)*3.281;return t<1e3?`${Math.round(t/10)*10} ft`:`${(t/5280).toFixed(1)} mi`}function Iy(i,t,e=!1,n=13){if(e&&(t==="pub"||t==="bar"||t==="hotel")&&i!=="The Cheshire Cat")return`You moor up and tuck into ${n<11?"a full breakfast":n<16?"a pub lunch":"a hearty supper"} at ${i}, with a pint of something local. An hour slips happily by. 🍽️`;const s={pub:`You moor up and pop into ${i} for a pint of something local. An hour slips happily by.`,bar:`A drink at ${i}, watching the boats go by. An hour slips happily by.`,cafe:`Tea and a slab of cake at ${i}, eaten on the roof. An hour slips happily by.`,supermarket:`You nip into ${i} for milk, bread and far too many biscuits.`,ice_cream:`An ice cream from ${i}, eaten on the roof. Bliss.`,restaurant:`A proper meal at ${i}. Nobody has to cook in the galley tonight. An hour slips happily by.`,hotel:`You stretch your legs and have a nose round ${i}. An hour slips happily by.`};return i==="The Cheshire Cat"?"Supper at the Cheshire Cat: a table by the window, watching the boats tie up for the night. An hour slips happily by.":s[t]??`You stop at ${i}. An hour slips happily by.`}function Uy(i,t){return{Northgate:"Above you: the Northgate, one of the medieval gateways through Chester’s city walls. The canal runs along the old moat.","Water Tower":"Off to the side: the Water Tower, built in the 1320s to guard the old river port when the Dee still reached the walls.","Lead Shot Tower":"That tall brick tower is the Lead Shot Tower (1799), where molten lead was dropped from the top to make shot.","Bridge of Sighs":"Overhead: the Bridge of Sighs (1793). Condemned prisoners from the Northgate gaol were led across it to the chapel for their last rites.","King Charles Tower":"Up on the walls: King Charles’ Tower. Legend has it Charles I watched his army lose the Battle of Rowton Moor from here in 1645.","Morgan's Mount":"Morgan’s Mount, a little gun platform on the walls from the Civil War siege of Chester.","Pemberton's Parlour":"Pemberton’s Parlour, a tower on the walls named after an 18th-century ropemaker who watched his men at work from it."}[i]??`Look out: ${i}${t==="tower"?", part of the old city walls":""}.`}const Qu=['% rocks in your wash. "Tickover past moored boats, please!"',"A mug of tea slides off the roof of %. Slow down past moored boats!","The owner of % gives you a Look. Ease off to tickover when passing."],Ny=1/60,hs=2.23694,Qd=document.getElementById("loading"),tf=document.getElementById("loading-text"),ky=Qd.querySelector(".bar div");let Oy=0;async function Vi(i){tf.textContent=i,ky.style.width=`${Math.min(100,++Oy*11)}%`,await new Promise(t=>requestAnimationFrame(()=>setTimeout(t,0)))}async function Fy(){await Vi("Fetching the map…");const i=await Ex(`./data/${Fc}.json`);await document.fonts.ready;const t=document.getElementById("scene"),e=new Id({canvas:t,antialias:!0});e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setSize(t.clientWidth,t.clientHeight,!1),e.toneMapping=id,e.toneMappingExposure=.62,e.shadowMap.enabled=!0,e.shadowMap.type=ed;const n=new Tc,s=new mn(55,t.clientWidth/t.clientHeight,.4,4500);await Vi("Surveying the canal…");const o=new Tx(i.centreline),r=i.meta.aqueduct??[i.meta.towerWharfS-400,i.meta.towerWharfS-100],a=Math.sign(i.meta.towerWharfS-(r[0]+r[1])/2)||1,l=a>0?r[0]:r[1],c=new Ux(i.locks,i.bridges,o.length,Qe?[60,o.length-60]:[4700,o.length-130,i.meta.towerWharfS-60],0,Qe&&i.meta.aqueduct?[r]:[]),h=[],d=[];for(let U=0;U<i.centreline.length;U+=2)h.push(i.centreline[U]),d.push(i.centreline[U+1]);const p=520,f={x0:Math.min(...h)-p,x1:Math.max(...h)+p,z0:Math.min(...d)-p,z1:Math.max(...d)+p},g=new Fx(o,c,f,Qe&&i.meta.aqueduct?{s0:r[0],s1:r[1],depth:38}:void 0);g.cuttings=i.cuttings??[],g.setRivers(i.rivers),g.urbanAt=Kx(i.buildings,f);const v=i.parks.map(U=>{let X=1/0,Z=-1/0,mt=1/0,xt=-1/0;for(let ie=0;ie<U.p.length;ie+=2)X=Math.min(X,U.p[ie]),Z=Math.max(Z,U.p[ie]),mt=Math.min(mt,U.p[ie+1]),xt=Math.max(xt,U.p[ie+1]);return{ring:U.p,x0:X,x1:Z,z0:mt,z1:xt}});g.parkAt=(U,X)=>v.some(Z=>U>=Z.x0&&U<=Z.x1&&X>=Z.z0&&X<=Z.z1&&kc(U,X,Z.ring)),await Vi("Digging the cut…");const m=new eM(o,c,i.bridges,g);g.embankments=m.placed.filter(U=>U.data.kind==="road"&&U.data.w>3.5).map(U=>({x:U.x,z:U.z,ux:Math.sin(U.data.dir),uz:Math.cos(U.data.dir),deck:U.deck,halfSpan:U.halfSpan,halfWidth:U.data.w/2+2})),n.add(g.buildStrip()),await Vi("Shaping the land…"),n.add(g.buildFar()),await Vi("Filling it with water…");const u=new Gx(o,c);u.addRivers(i.rivers,g.riverLevel);for(const U of i.water){let X=0,Z=0;const mt=U.p.length/2;for(let xt=0;xt<U.p.length;xt+=2)X+=U.p[xt]/mt,Z+=U.p[xt+1]/mt;o.project(X,Z).dist<40||u.addPond(U.p,g.heightAt(X,Z)-.25)}n.add(u.group),n.add(m.group),n.add(new fy(o,c,g,i).group);const x=new wy(o,c,g,m,i.rails);n.add(x.group);const M=new oM(o,c,g);n.add(M.group);const _=Qe?i.meta.towerWharfS+a*120:i.meta.towerWharfS-70,T=[{name:"Tesco",kind:"supermarket",type:"stop",x:0,z:0,s:1250,dist:30,rank:-1},{name:"Waitrose",kind:"supermarket",type:"stop",x:0,z:0,s:1950,dist:40,rank:-1}],E=Qe?[{id:"trevor",name:"Trevor Basin",s0:Math.min(i.meta.towerWharfS+a*30,i.meta.towerWharfS+a*75),s1:Math.max(i.meta.towerWharfS+a*30,i.meta.towerWharfS+a*75)},{id:"fron",name:"Froncysyllte",s0:Math.min(l-a*150,l-a*200),s1:Math.max(l-a*150,l-a*200)}]:void 0;Qe&&Ei.splice(0,Ei.length,{from:"trevor",zone:"fron",title:"Across the sky",brief:"Take her over Pontcysyllte Aqueduct, 126 ft above the River Dee, and moor at Froncysyllte. Dead slow, and don't look down."},{from:"fron",zone:"trevor",title:"Back to Trevor Basin",brief:"Back across the aqueduct to Trevor Basin, where the boats tie up under the trees."});const S=new GM(o,c,g,i.bridges,i.meta.towerWharfS,_,[...Qe?[]:T,...i.pois??[]],E);n.add(S.group);const R=new Zx(i,o,c,g,m);await R.build(Vi),n.add(R.group);const w=new Ly(R.carPaths);n.add(w.group),await Vi("Lighting the stove…");const y=new lM(n,e),P=Oc();P.group.rotation.order="YXZ",n.add(P.group);const A=new wM(o,c);A.placeAt(_,Qe?a<0:!0),A.obstacles=[...S.boats];const k=new YM(o,c,g,A),F=new vy(P.group),W=new Ay(o,c,P.group);n.add(W.mesh),n.add(k.group);const H=new KM(o,c,S,A);H.blockedAt=()=>Ot.filter(U=>U.active).map(U=>U.s),Qe&&i.meta.aqueduct&&(H.narrows=[r]),n.add(H.group);const B=new QM(o,c,g,R,S,i.bridges);n.add(B.group);const G=new iy(o,c,g,A,B.anglerSpots.filter(U=>g.aqueductCore(U.s)===0),B.gardens);n.add(G.group),Qe&&i.meta.aqueduct&&n.add(NM(o,c,g,r[0],r[1]));let ut=0,_t=null;const rt=new uy(o,c,g,A);n.add(rt.group);const Ot=[],ee=S.zones.find(U=>/Lock Keeper/.test(U.name)),J=[ee?ee.s1+30:1390,2185],dt=U=>{for(let X=0;X<120;X++){const Z=U+(X%2?1:-1)*Math.ceil(X/2)*2;if(!(i.bridges.some(mt=>Math.abs(mt.s-Z)<mt.w/2+20)||c.gates.some(mt=>Math.abs(mt.s-Z)<40))&&!S.zones.some(mt=>Z>mt.s0-8&&Z<mt.s1+8)&&!S.boats.some(mt=>Math.abs(mt.s-Z)<mt.halfL+6)&&c.bodies[c.bodyIndexAt(Z)].kind==="pound"&&!(Qe&&Z>r[0]-60&&Z<r[1]+60))return Z}return U};for(const U of J){const X=new ly(o,c,g);X.s=dt(U),S.clearAround(X.s,ml-10,A.obstacles),n.add(X.group),Ot.push(X)}const Pt=new My(o,c,g,[{item:"logs",s:dt(Qe?Math.min(o.length-80,i.meta.towerWharfS+a*400):3620)},{item:"coal",s:dt(i.meta.towerWharfS-150)}],U=>F.has(U));for(const U of Pt.list)S.clearAround(U.s,25,A.obstacles);n.add(Pt.group);const ct=["Sam","Priya","Dave","Margaret","Tom","Aisha","Bill","Fran","Gethin","Rosie"],Dt=['"Any chance of a lift to %? My feet are killing me."',`"Going towards %? I'd love a ride, I've never been on a narrowboat."`,`"You couldn't drop me at %, could you? I'll work the locks!"`,`"Room for a little one? I'm meeting friends at %."`],qt={firewood:[`"I've bought a load of firewood for my boat, she's moored at %. Could it ride on your roof?"`,`"Logs for the stove, and my boat's down at %. I'll never carry this lot all that way…"`],shopping:['"Just done the big shop. Any chance of a lift back to my boat at %? These bags weigh a ton."',`"Groceries for the week and my boat's at %. Room for me and a few bags?"`]},Wt=U=>{if(U==="firewood"){const Z=so.logs.build();return Z.position.set(-.3,Zd,1.6),Z}const X=new bt;return["#f2f2ee","#3a7d44","#f2f2ee","#e07a1f"].forEach((Z,mt)=>{const xt=new $(new Rt(.3,.36,.18),new $t({color:Z,roughness:.9}));xt.position.set(.45+mt%2*.12,.38+.18,17.4/2-2.9+mt*.22),xt.rotation.y=mt*.4,X.add(xt)}),X};let Yt="trip";const nt=()=>{setTimeout(()=>{!k.moored||!y.isNight||b.offerOpen||zt.result||Lt||(Yt="sleep",b.showOffer("Moored for the night","Turn in till morning?",Y.hungry?"Bank up the stove and sleep till first light… though you'll sleep badly on an empty stomach. Cook something first?":"Bank up the stove, put the kettle on, and sleep until first light.","Sleep till morning","Not yet"))},2500)};let gt=0,I=null;const Gt=()=>{if(!I)return;const U=I;I=null,setTimeout(()=>n.remove(U.person.group),6e3)},ft=U=>{const X=ri({coat:"#3d4a3a",trousers:"#2d3a55",hair:"#9a9a9a",hairStyle:"cap",hat:"#4a3f33",longCoat:!0}),Z=o.frame(U),mt=(c.halfWidthAt(U)+1.4)*Xt;X.group.position.set(Z.x+Z.nx*mt,g.bankTop(U),Z.z+Z.nz*mt),X.group.rotation.y=Math.atan2(-Z.nx*Xt,-Z.nz*Xt),n.add(X.group),I={person:X,turning:null},Yt="helper",b.showOffer("On the towpath","Need a hand?",`An old boater in a flat cap has been watching for a while. "Having a spot of bother? Here, let me show you how it's done."`,"Yes please","I've got this")},Ut=U=>{if(!I)return;k.castOff();const X=o.frame(U),Z=Math.atan2(X.tx,X.tz),mt=Math.cos(A.psi-Z)>=0,xt=Z+(mt?Math.PI:0);let ie=Math.atan2(Math.sin(xt-A.psi),Math.cos(xt-A.psi));Math.abs(ie)<.3&&(ie=Math.PI),I.turning={t:0,s:U,psi0:A.psi,psi1:A.psi+ie,x0:A.x,z0:A.z},b.toast("The old boater hops aboard, takes the tiller and talks you through it…","info",5e3)};let ht=null,Lt=null;const It=new Set;for(const U of S.zones)U.kind==="stop"&&S.addStopMarker(U);const L=new Map,C=S.zones.filter(U=>{var X;return U.kind==="stop"&&/pub|bar|supermarket/.test(((X=U.poi)==null?void 0:X.kind)??"")}),q=(U=[])=>{const X=C.filter(me=>!L.has(me.id)&&!U.includes(me.id));if(!X.length)return;const Z=X[Math.floor(Math.random()*X.length)],mt=ri(Qi(Math.random)),xt=(Z.s0+Z.s1)/2,ie=o.frame(xt),ae=(c.halfWidthAt(xt)+1.4)*Xt;mt.group.position.set(ie.x+ie.nx*ae,g.bankTop(xt),ie.z+ie.nz*ae),mt.group.rotation.y=Math.atan2(-ie.nx*Xt,-ie.nz*Xt),n.add(mt.group),L.set(Z.id,mt)},tt=U=>{const X=L.get(U);X&&(n.remove(X.group),L.delete(U),q([U]))};for(let U=0;U<3;U++)q();const ot=U=>U.name.split(",")[0],et=U=>{Yt="trip",zt.choose(U);const X=o.frame(A.s),Z=Math.sin(A.psi)*X.tx+Math.cos(A.psi)*X.tz>=0?1:-1,mt=z(zt.current.zone),xt=(mt.s0+mt.s1)/2,ie=Math.min(A.s,xt),ae=Math.max(A.s,xt),me=c.gates.filter(Pn=>Pn.s>ie&&Pn.s<ae&&Pn.label!=="top gates").length,nn=me?` · ${me} lock${me>1?"s":""}`:"",dn=qr(xt-A.s),ti=(xt-A.s)*Z>0?`${dn} ahead${nn}`:`${dn} behind you: turn round at a winding hole${nn}`;b.showOffer("Mission",zt.current.title,`${zt.current.brief}<br><b>${ti}</b>`)},Ft=new Set;for(const U of Ei)S.addStart(U.from);const yt=()=>{const U=Fn||!!zt.result;Ei.forEach((X,Z)=>S.showStart(X.from,!U&&!zt.done.has(Z))),Ge.setMissionStarts(Ei.filter((X,Z)=>!zt.done.has(Z)&&!(Fn&&Z===zt.index)).map(X=>{const Z=z(X.from);return o.point((Z.s0+Z.s1)/2,0)}),U)},At=new Set,ue=U=>{var Pn;if(ht||!L.has(U.id)||b.offerOpen||zt.result||At.has(U.id))return;if(At.add(U.id),Lt)return void b.toast(`Someone at ${U.name} waves hopefully, but you've already got a passenger aboard.`,"info",4e3);if(!lt.atLeast("a bit of a liability")||!lt.atLeast("new on the cut")&&Math.random()<.5){b.toast(`"The Chester Rose? I've heard bad things about the Chester Rose. Not getting on there, thanks." They set off up the towpath on foot.`,"warn",5500),tt(U.id);return}It.add(U.id);const X=o.frame(A.s),Z=Math.sin(A.psi)*X.tx+Math.cos(A.psi)*X.tz>=0?1:-1,mt=Pe=>(Pe.s0+Pe.s1)/2,xt=S.zones.filter(Pe=>Pe!==U&&Math.abs(mt(Pe)-A.s)>250&&Math.abs(mt(Pe)-A.s)<1800);if(!xt.length)return void b.toast(`The person at ${U.name} is waiting for a boat going further than this.`,"info",4e3);const ie=xt.filter(Pe=>Math.sign(mt(Pe)-A.s)===Z),ae=ie.length?ie:xt,me=ae.sort((Pe,es)=>Math.abs(mt(Pe)-A.s)-Math.abs(mt(es)-A.s))[Math.floor(Math.random()*Math.min(2,ae.length))],nn=ct[Math.floor(Math.random()*ct.length)],dn=Math.random(),ti=((Pn=U.poi)==null?void 0:Pn.kind)==="supermarket"?"shopping":dn<.3?"firewood":void 0;ht={name:nn,dest:me,from:U.name,cargo:ti},setTimeout(()=>{if((ht==null?void 0:ht.name)!==nn||!k.moored||b.offerOpen){ht=null,At.delete(U.id);return}Yt="lift";const Pe=ti?qt[ti]:Dt;b.showOffer(`At ${U.name}`,`Fancy giving ${nn} a lift?`,Pe[Math.floor(Math.random()*Pe.length)].replace("%",ot(me)),"Hop aboard","Sorry, not today")},1800)},vt=()=>{if(!ht)return;const U=S.zoneAt(A.s);U&&tt(U.id);const X=ri(Qi(Math.random));X.group.position.set(0,.38,17.4/2-2.6),uc(X);const Z=new $(new Rt(.9,.45,.5),new $t({color:"#7a5a3a"}));Z.position.set(0,.92-.225,-.08),X.group.add(Z),P.group.add(X.group);const mt=ht.cargo,xt=mt&&Wt(mt);xt&&P.group.add(xt),Lt={name:ht.name,dest:ht.dest,person:X,cargo:mt,load:xt},S.setLiftDest(Lt.dest);{const[ae,me]=o.point((Lt.dest.s0+Lt.dest.s1)/2,0);Ge.liftDest={x:ae,z:me}}const ie=mt==="firewood"?", heaves the firewood up onto your roof,":mt==="shopping"?", stows the shopping bags in the well deck,":"";lt.change(2,"pickup",0),b.toast(`${Lt.name} hops aboard${ie} and settles in the bow. Next stop: ${ot(Lt.dest)}.`,"info",4500),ht=null},kt=()=>{if(!Lt)return;lt.change(6,"lift",0),P.group.remove(Lt.person.group),Lt.load&&P.group.remove(Lt.load),S.setLiftDest(null),Ge.liftDest=null;const U=Lt.cargo==="firewood"&&!F.has("logs")?"logs":F.nextFrom(gy);U&&F.give(U),b.toast(U?`${Lt.name} hops off with a cheery wave, and leaves you ${so[U].name} for the roof. 🎁`:`${Lt.name} hops off with a cheery wave, and presses a slice of cake into your hand.`,"info",6e3),Lt=null},Jt=()=>{for(const U of Ot){const X=A.obstacles.indexOf(U.obstacle);X>=0&&A.obstacles.splice(X,1),U.place(U.s),A.obstacles.push(U.obstacle)}Ge.setHazards(Ot.filter(U=>U.active).map(U=>o.point(U.s,0)))},ne=S.zones.filter(U=>U.kind==="stop"),Nt=(i.pois??[]).filter(U=>U.type==="sight"),de=new Set,se=new Set,zt=new jM(y.clock),z=U=>S.zones.find(X=>X.id===U),lt=new LM,Y=new IM,St=(Qe?["trevor","fron"]:["tower","stop:Telford's Warehouse","city","hoole","christleton","stop:The Cheshire Cat"]).map(U=>S.zones.find(X=>X.id===U)).filter(U=>!!U).map(U=>(U.s0+U.s1)/2),Ct=30;{const U=new $t({color:"#2f5d3a",roughness:.7}),X=new $t({color:"#c9a24a",metalness:.7,roughness:.35}),Z=document.createElement("canvas");Z.width=128,Z.height=64;const mt=Z.getContext("2d");mt.fillStyle="#1f6fb8",mt.fillRect(0,0,128,64),mt.fillStyle="#fff",mt.font="800 30px Nunito, sans-serif",mt.textAlign="center",mt.textBaseline="middle",mt.fillText("WATER",64,34);const xt=new On(Z);xt.colorSpace=Oe;const ie=new $t({map:xt,side:Ie});for(const ae of St){const me=new bt,nn=new $(new Rt(.22,1,.22),U);nn.position.y=.5;const dn=new $(new jt(.04,.04,.22,8),X);dn.rotation.x=Math.PI/2,dn.position.set(0,.8,.16);const ti=new $(new ui(.6,.3),ie);ti.position.set(0,1.3,0);const Pn=new $(new Rt(.05,.4,.05),U);Pn.position.y=1.05;for(const va of[nn,dn,Pn])va.castShadow=!0;me.add(nn,dn,ti,Pn);const Pe=o.frame(ae),es=(c.halfWidthAt(ae)+2.4)*Xt;me.position.set(Pe.x+Pe.nx*es,g.bankTop(ae),Pe.z+Pe.nz*es),me.rotation.y=Math.atan2(-Pe.nx*Xt,-Pe.nz*Xt),n.add(me)}}const oe=new Set(["pub","bar","cafe","restaurant","hotel"]);let De=0;const Xe=U=>{if(U==="cafe")return{hours:1,note:"An hour slips happily by."};const X=y.hour>=12&&y.hour<14||y.hour>=18&&y.hour<20.5,Z=Math.min(1,(X?.6:.1)+Math.random()*.4),mt=2+Z,xt=Math.floor(mt),ie=Math.round((mt-xt)*60),ae=`${xt} hours${ie>=10?` ${ie} minutes`:""}`,me=Z>.7?`It's heaving, and the food takes an age: ${ae} before you're back aboard.`:Z>.35?`Busy but cheerful: ${ae} before you're back aboard.`:`Nice and quiet, but you linger anyway: ${ae} slip by.`;return{hours:mt,note:me}},Me=(U,X)=>{var mt;const Z=((mt=U.poi)==null?void 0:mt.kind)??"";if(oe.has(Z)){if(X)Y.eat(y.clock);else if(Y.hunger>.35){const xt=Xe(Z);Y.eat(y.clock),y.skipTo((y.hour+xt.hours)%24),b.toast(`You pop into ${U.name} for a bite to eat. ${xt.note} 🍽️`,"info",6e3)}}Z==="supermarket"&&Y.food<ea&&(Y.restock(),b.toast(`Larder stocked at ${U.name}: ${ea} meals' worth. 🥫`,"info",4500))},vn={bump:"bump",bank:"scraped the bank",paddles:"paddles left up",speeding:"speeding",wrongSide:"wrong side",aqueductClash:"met a boat on the aqueduct",kayak:"bumped a kayak",waitedTurn:"waited your turn",angler:"angler splashed",duck:"ran over a duck",swan:"ran over a swan",wash:"wash",night:"cruising after dark",greet:"friendly wave",slowPast:"slow past moored boats",cleared:"blockage cleared",lift:"lift given",pickup:"picked up a passenger",cleanTrip:"smooth trip"};lt.onChange=(U,X)=>b.repPulse(U,vn[X]??X),lt.onStanding=(U,X)=>b.toast(X?`Word's getting round the towpath: yours is ${U}. 😊`:`Mutterings on the towpath: yours is ${U} now.`,X?"info":"warn",5e3);const _n=U=>U.group.staircase&&(y.hour>=Ju||y.hour<pl),Ts=`Padlocked for the night. The staircase opens at ${pl}am.`;let wo=0,Jn=0,As=0,So=!1,Eo=!1;const ts=new Map;let To=null,fi=null,Fn=!1;const Tn=new EM,An=new OM;if(Tn.onFirstInput=()=>An.start(),t.addEventListener("pointerdown",()=>An.start()),wn){let U=0;document.addEventListener("touchend",X=>{const Z=performance.now();Z-U<350&&!X.target.closest("button")&&X.preventDefault(),U=Z},{passive:!1});for(const X of["gesturestart","gesturechange","dblclick"])document.addEventListener(X,Z=>Z.preventDefault(),{passive:!1})}wn&&addEventListener("pointerdown",()=>{var U,X;return(X=(U=document.documentElement).requestFullscreen)==null?void 0:X.call(U).catch(()=>{})},{once:!0});const Ge=new kM(i,o,c,f);Ge.setWaterPoints(St.map(U=>o.point(U,0))),Ge.addMooredBoats(S.boats),Ge.setPlaces([...S.zones.filter(U=>U.kind==="stop").map(U=>{const[X,Z]=o.point((U.s0+U.s1)/2,0),mt={pub:"🍺",bar:"🍸",cafe:"☕",restaurant:"🍽️",hotel:"🛏️",ice_cream:"🍦"}[U.poi.kind]??"⚓";return{x:X,z:Z,icon:mt,name:U.name}}),...(i.pois??[]).filter(U=>U.type==="sight").map(U=>({x:U.x,z:U.z,icon:"★",name:U.name}))]);const ma=()=>{const U=z(zt.current.zone),[X,Z]=o.point((U.s0+U.s1)/2,0);Ge.setDestination(X,Z,U.name)};Jt();const b=new CM(document.getElementById("hud"),U=>Tn.push(U),Ge.el,Ge.bigEl);PM(document.getElementById("hud")),["localhost","127.0.0.1"].includes(location.hostname)&&Ge.enableDevTeleport(()=>[A.x,A.z],(U,X)=>{k.castOff(),rt.stop();const Z=o.frame(A.s),mt=Math.sin(A.psi)*Z.tx+Math.cos(A.psi)*Z.tz>=0,xt=Math.min(o.length-12,Math.max(12,o.project(U,X).s));A.placeAt(xt,mt),A.notch=0,b.toast(`Moved to ${((xt-i.meta.towerWharfS)/1e3).toFixed(2)} km from Tower Wharf`,"info",2e3)}),b.onGateTap=(U,X)=>{if(!rt.active){if(!(at!=null&&at.adjacent.includes(U)))return b.nope(U,"The lock-keeper looks after that one.");if(_n(U))return b.nope(U,Ts);if(Kt=U,X==="paddlesUp")U.wantPaddle=!0;else if(X==="paddlesDown")U.wantPaddle=!1;else if(X==="open"!==U.wantOpen){const Z=c.toggleGate(U,ga(U));Z&&b.nope(U,/in the way/.test(Z)?"The boat's in the way of the gates.":"The levels don't match yet: the gates won't budge.")}}},wn&&(P.tillerHint.visible=!1),b.onSteer=U=>{U&&rt.active&&rt.stop(),Tn.touchSteer=U},b.onNotch=U=>{rt.active&&(rt.stop(),b.toast("You take the tiller back.","info",2e3)),A.notch=U};const O=new dx(s,t);O.enableDamping=!0,O.minDistance=5,O.maxDistance=260,O.maxPolarAngle=1.48,O.enablePan=!1;let K=-10;const j=new qd,V=new it;let pt=null,Et=!1;const Bt=U=>{const X=t.getBoundingClientRect();return V.set((U.clientX-X.left)/X.width*2-1,-((U.clientY-X.top)/X.height)*2+1),j.setFromCamera(V,s),j.intersectObject(P.tillerHit,!1).length>0};t.addEventListener("pointerdown",U=>{if(!k.count)return;const X=t.getBoundingClientRect();V.set((U.clientX-X.left)/X.width*2-1,-((U.clientY-X.top)/X.height)*2+1),j.setFromCamera(V,s);const Z=j.intersectObjects(k.tapTargets,!1)[0];Z&&(U.stopImmediatePropagation(),b.toast(k.untie(Z.object.userData.mooringEnd),"info",2500))},{capture:!0}),t.addEventListener("pointerdown",U=>{wn||(Qt==="steerer"||Bt(U))&&(pt={x:U.clientX,id:U.pointerId},O.enabled=!1,t.setPointerCapture(U.pointerId),t.style.cursor="grabbing",rt.active&&rt.stop(),Et||(Et=!0,P.tillerHint.visible=!1))},{capture:!0}),t.addEventListener("pointermove",U=>{pt&&U.pointerId===pt.id?Tn.touchSteer=_s.clamp(-(U.clientX-pt.x)/120,-1,1):!pt&&U.pointerType==="mouse"&&Qt==="follow"&&(t.style.cursor=Bt(U)?"grab":"")});const Ht=U=>{!pt||U.pointerId!==pt.id||(pt=null,Tn.touchSteer=0,t.style.cursor="",Qt==="follow"&&(O.enabled=!0))};t.addEventListener("pointerup",Ht),t.addEventListener("pointercancel",Ht);let te=0;O.addEventListener("start",()=>K=performance.now()/1e3);let Qt="follow";const Tt=new N,fe=new N,we=new N,Ae=U=>{const X=c.levelAt(A.s);P.group.position.set(A.x,X+Math.sin(U*1.3)*.015,A.z),P.group.rotation.set(Math.sin(U*.9)*.004,A.psi,_s.clamp(-A.r*A.u*.5,-.04,.04)),P.rudder.rotation.y=-A.rudder*.6,Tt.set(A.x,X+1.6,A.z)};Ae(0),fe.copy(Tt),O.target.copy(Tt),s.position.set(A.x-Math.sin(A.psi)*24,Tt.y+9,A.z-Math.cos(A.psi)*24),O.update();let Ue=2,Kt=null,at=null;const Cn={paddlesUp:"Raising paddles",paddlesDown:"Dropping paddles",open:"Opening gates",close:"Closing gates"},ve=new N;let ln=0;const Qn=U=>{var X;return U?`${U.action}:${((X=U.gate)==null?void 0:X.label)??""}:${U.group.name}`:""};let $e=null;const pi=new Set;let be=0,xn,mi=0,en=!1,Rn=0;const zn=()=>(at==null?void 0:at.adjacent)??[];let Cs="",zc=0;const ga=U=>{const[X,Z]=A.span();return X<U.s+.3&&Z>U.s-.3},ef=U=>{switch(U){case"throttleUp":rt.active&&(rt.stop(),b.toast("You take the tiller back.","info",2e3)),A.notch=Math.min(Si,A.notch+1);break;case"throttleDown":A.notch=Math.max(to,A.notch-1);break;case"neutral":A.notch=0;break;case"paddles":Kt&&_n(Kt)?b.nope(Kt,Ts):Kt&&c.togglePaddle(Kt);break;case"gates":if(Kt&&_n(Kt))b.nope(Kt,Ts);else if(Kt){const X=c.toggleGate(Kt,ga(Kt));X&&b.nope(Kt,/in the way/.test(X)?"The boat's in the way":"Levels don't match yet")}break;case"nextGate":{const X=zn();X.length&&(Kt=X[(X.indexOf(Kt)+1)%X.length],$e=Qn(at));break}case"timeFaster":Ue=Gi[Math.min(Gi.length-1,Gi.indexOf(Ue)+1)];break;case"timeCycle":Ue=Gi[(Gi.indexOf(Ue)+1)%Gi.length];break;case"timeSlower":Ue=Gi[Math.max(0,Gi.indexOf(Ue)-1)];break;case"camera":Qt==="follow"?(we.copy(s.position).sub(O.target),Qt="steerer",O.enabled=!1,P.steerer.visible=!1):(Qt="follow",O.enabled=!0,s.position.copy(O.target).add(we),P.steerer.visible=!0);break;case"recenter":Qt="follow",O.enabled=!0,P.steerer.visible=!0,O.target.copy(Tt),s.position.set(A.x-Math.sin(A.psi)*24,Tt.y+9,A.z-Math.cos(A.psi)*24),te=0,O.update();break;case"map":Ge.bigOpen=!Ge.bigOpen,b.setMapOpen(Ge.bigOpen);break;case"help":b.toggleHelp();break;case"mute":An.toggleMute();break;case"moor":{if(_t){b.toast("Hang on: your steerer is still up the towpath with the boat hook.","info",2500);break}const X=k.act();if(X&&b.toast(X,"info",3e3),k.moored){const Z=S.zoneAt(A.s),mt=z(zt.current.zone);if((Z==null?void 0:Z.kind)==="stop"&&!de.has(Z.id)){de.add(Z.id),S.hideStopMarker(Z.id);const xt=Z.poi.kind,ie=Y.hunger>.35,ae=ie&&oe.has(xt)?Xe(xt):null;let me=Iy(Z.poi.name,xt,ie,y.hour);ae&&(me=me.replace("An hour slips happily by.",ae.note)),b.toast(me,"info",7500),y.skipTo((y.hour+((ae==null?void 0:ae.hours)??1))%24),Me(Z,!0)}else Z&&Me(Z,!1);if(St.some(xt=>Math.abs(xt-A.s)<Ct)&&Y.water<.95){const xt=Math.max(5,Math.round((1-Y.water)*60/5)*5);Y.fillWater(),y.skipTo((y.hour+xt/60)%24),b.toast(`You run the hose from the water point. The tap's slow: ${xt>=60?"a whole hour":`${xt} minutes`} later the tank's full to the brim. 💧`,"info",5e3)}if(Lt&&Z===Lt.dest&&kt(),(Z==null?void 0:Z.kind)==="stop"&&ue(Z),nt(),Fn&&Z===mt&&!zt.result){const xt=F.nextFrom(my);xt&&F.give(xt),zt.bumps+zt.rocked===0&&lt.change(4,"cleanTrip",0),b.showSummary(zt.complete(y.clock),Z.name,xt?so[xt].name:void 0),yt(),S.setActive(null),Ge.clearDestination()}else(Z==null?void 0:Z.kind)!=="stop"&&b.toast(Z?`Moored at ${Z.name}.`:Fn?`Moored up. Your trip ends at ${mt.name}.`:"Moored up.","info",3500)}break}case"nextTrip":if(zt.result)zt.next(y.clock),b.hideSummary(),Fn=!1,Jt(),rt.roster(),yt();else if(b.offerOpen&&Yt==="helper"){b.hideOffer();const X=c.windingHoles.reduce((Z,mt)=>Math.abs(mt-A.s)<Math.abs(Z-A.s)?mt:Z);Ut(X)}else if(b.offerOpen&&Yt==="volunteers")b.hideOffer(),at&&rt.isStaffed(at.group)&&(k.castOff(),rt.start(at.group),b.toast(lt.atLeast("a courteous boat")?`"Ah, it's you again! Go on, sit back, we'll see you through."`:"The volunteers take over. Sit back and enjoy it.","info",3500));else if(b.offerOpen&&Yt==="lift")b.hideOffer(),vt();else if(b.offerOpen&&Yt==="sleep"){b.hideOffer(),y.skipTo(7.25);const X=Y.wake(y.clock);b.toast(`${X?"You sleep like a log to the creak of the ropes.":"A restless night, stomach growling. You wake up starving."} 🌅 Day ${y.day}: ${y.fog>.3?"mist on the water":"a clear morning"}.`,"info",5500)}else b.offerOpen&&(b.hideOffer(),Fn=!0,zt.next(y.clock),yt(),S.setActive(z(zt.current.zone)),ma());break;case"declineTrip":if(b.offerOpen&&b.hideOffer(),Yt==="trip"&&Ft.add(zt.index),Yt==="helper"&&I&&(b.toast(`"Right you are! I'll leave you to it." They lean on the fence to watch.`,"info",3500),gt=0,Gt()),Yt==="lift"&&ht){b.toast(`"No worries!" ${ht.name} sets off up the towpath on foot.`,"info",3500);const X=S.zoneAt(A.s);X&&tt(X.id),ht=null}break;case"tripOffer":break;case"cook":{const X=Y.cannotCook(k.moored);if(X){b.toast(X,"info",3500);break}Y.cook(y.clock),y.skipTo((y.hour+.5)%24);const Z=y.hour<10.5?"a fry-up":y.hour<15?"a sandwich and a mug of soup":"a proper supper";b.toast(`Half an hour in the galley, and ${Z} eaten on the back deck. 🍳`,"info",4500);break}case"horn":An.start(),An.horn(),G.horn();break;case"clear":{const X=Ot.find(mt=>mt.active&&Math.abs(mt.s-A.s)<ml),Z=Pt.near(A.s);if(!X&&Z){k.moored?(F.give(Z.item),Z.group.visible=!1,b.toast(Z.done,"info",4500)):b.toast("Moor up alongside first (F), then you can load it.","info",3e3);break}if(!X)b.toast("There's nothing here to clear.","info",2e3);else if(!k.moored)b.toast("Moor up first (F), then you can get at it with the boat hook.","info",3500);else if(!_t&&!X.clearing){const mt=ri(Dy),xt=new $(new jt(.025,.025,2.6,6),new $t({color:"#8a6a45"}));xt.position.set(0,-.6,.9),xt.rotation.x=1.2,mt.armR.add(xt),n.add(mt.group),P.steerer.visible=!1;const ie=Math.sign(X.s-A.s)||1;_t={b:X,person:mt,phase:"out",s:A.s,target:X.s-ie*2.5,home:A.s},b.toast("Off you hop with the boat hook…","info",2500)}break}case"autopilot":if(rt.active)rt.stop(),b.toast("You take the tiller back.","info",2500);else if(at&&rt.isStaffed(at.group)){Yt="volunteers";const X=Ry({coat:"#1d5fa8",trousers:"#2d3a55",skin:"#e3b08f",hair:"#5a3a22",hairStyle:"short",longCoat:!1},Z=>ji(Z,"wave",.3));b.showOffer("Volunteers on duty",`Help through ${at.group.name}?`,`<img class="offer-pic" src="${X}" alt="">Canal &amp; River Trust volunteers in blue are working the lock today. Want them to work you through? Sit back and watch while they wind the paddles and swing the gates.`,"Yes please","I'll do it")}else b.toast("No volunteers on duty here, so you'll have to work this one yourself.","info",3e3);break;case"headlight":en=!en,P.headlight.intensity=en?40:0;break}},nf=()=>{const U=c.bodies[c.bodyIndexAt(A.s)],X=A.s-i.meta.towerWharfS,Z=`${qr(X)} ${Qe?Math.sign(X)===a?"past":"from":X>=0?"above":"below"} ${Qe?"Trevor":"Tower Wharf"}`;if(U.kind==="chamber")return[`In ${U.lockName}`,Z];const mt=c.gates.find(me=>me.s>A.s),xt=[...c.gates].reverse().find(me=>me.s<A.s),ie=m.at(A.s),ae=ie!=null&&ie.data.name?` · under ${ie.data.name}`:"";if(Qe){if(A.s>r[0]&&A.s<r[1])return["Pontcysyllte Aqueduct",`126 ft above the River Dee · Telford, 1805${ae}`];if(Math.abs(A.s-i.meta.towerWharfS)<80)return["Trevor Basin",`Llangollen Canal${ae}`]}else if(Math.abs(A.s-_)<40)return["Taylor's Boatyard",`Historic boatbuilders and dry dock by Tower Wharf${ae}`];return!Qe&&Math.abs(A.s-i.meta.towerWharfS)<70?["Tower Wharf",`Junction with the Dee Branch${ae}`]:mt&&mt.s-A.s<160?[`Approaching ${mt.lockName}`,Z+ae]:xt&&A.s-xt.s<120?[`Leaving ${xt.lockName}`,Z+ae]:mt&&xt?[`${xt.lockName} → ${mt.lockName}`,Z+ae]:[mt?`Towards ${mt.lockName}`:"Towards Christleton & Nantwich",Z+ae]},sf=()=>{const U=O.target,X=s.position,Z=U.distanceTo(X);for(let mt=4;mt<Z;mt+=1.5){const xt=mt/Z,ie=U.x+(X.x-U.x)*xt,ae=U.y+(X.y-U.y)*xt,me=U.z+(X.z-U.z)*xt,nn=o.project(ie,me,A.s),dn=m.rampAt(nn.s,nn.d);if(ae<R.roofAt(ie,me)||ae<g.heightAt(ie,me)+.5||dn.onDeck&&ae<dn.y+1.2){s.position.lerpVectors(U,X,Math.max(4,mt-2)/Z);return}}};b.toast("Welcome aboard the Chester Rose! W to get going. Cruise past a green ! for a mission. H for help.","info",7e3),yt();const of=new cx;let Bn=0;addEventListener("resize",()=>{s.aspect=t.clientWidth/t.clientHeight,s.updateProjectionMatrix(),e.setSize(t.clientWidth,t.clientHeight,!1)});const Bc=()=>{var Gc;const U=Math.min(of.getDelta(),.1);Bn+=U;for(const Q of Tn.drain())ef(Q);const X=U*Ue,Z=Math.max(1,Math.ceil(X/Ny));for(let Q=0;Q<Z;Q++){c.update(X/Z),A.bowThrust=Tn.bowThrust,!rt.active&&!(I!=null&&I.turning)&&A.step(X/Z,Tn.steer);for(const Mt of A.contacts)if(Mt.impulse>1500&&mi<=0)if(An.bump(Math.min(1,Mt.impulse/12e3)),mi=.4,G.isKayak(Mt.obstacle))lt.change(-4,"kayak",6),b.toast(`A kayaker yelps and back-paddles furiously. "Watch where you're going!"`,"warn",3500);else if(Ot.some(re=>re.obstacle===Mt.obstacle))b.toast("It's jammed solid. Moor up nearby (F) and clear it with the boat hook (G).","warn",3500);else if(Mt.kind==="boat"&&!S.boats.includes(Mt.obstacle))H.bumped(Mt.obstacle),Mt.impulse>3e3&&(zt.bumps++,lt.change(-2,"bump"));else if(Mt.kind==="boat"){const re=Mt.obstacle;S.rockBoat(re,Math.min(.08,Mt.impulse/5e4)),Mt.impulse>3e3&&(zt.bumps++,lt.change(-3,"bump"),b.toast(`Bump! Sorry, ${re.name}. A head pops out of the hatch…`,"warn",3e3))}else Mt.impulse>9e3&&(zt.bumps++,lt.change(-1,"bank"),b.toast(Mt.kind==="gate"?"Bump! Into the lock gates.":"Clunk. Mind the bank!","info",2200))}mi-=U;const mt=o.frame(A.s),xt=Math.sin(A.psi)*mt.tx+Math.cos(A.psi)*mt.tz>=0;at=Pu(c,A.span(),xt);for(const Q of c.events.splice(0))(!Q.group||Q.group===(at==null?void 0:at.group)||Q.group.gates.some(re=>Math.abs(re.s-A.s)<150))&&b.toast(Q.text,Q.kind);if(rt.active&&Tn.steer!==0&&(rt.stop(),b.toast("You take the tiller back.","info",2e3)),rt.night=y.isNight,rt.update(X,at,xt)==="done"&&(b.toast("Through! The volunteers wave you on your way. Thanks, volunteers!","info",4500),at=Pu(c,A.span(),xt)),!rt.active&&(at!=null&&at.keeper)&&at.gate&&at.action!=="wait"){const Q=Qn(at);if(Q!==Cs)Cs=Q,zc=Bn+1.5;else if(Bn>=zc){const Mt=at.gate;at.action==="paddlesUp"?Mt.wantPaddle=!0:at.action==="paddlesDown"?Mt.wantPaddle=!1:at.action==="close"?Mt.wantOpen=!1:at.action==="open"&&c.levelsMatch(Mt)&&(Mt.wantOpen=!0),Cs=""}}const ie=zn();if($e!==null&&($e!==Qn(at)||!Kt||!ie.includes(Kt))&&($e=null),$e===null&&(Kt=at!=null&&at.gate&&!at.keeper?at.gate:ie.includes(Kt)?Kt:ie.at(-1)??null),M.setSelected(Kt),b.setLockPanel(c,{step:at,levelsMatch:Q=>c.levelsMatch(Q),boatSpans:ga,volunteers:rt.active?"active":rt.isStaffed(at==null?void 0:at.group)?"available":"none"}),rt.active&&at){const Q=P.group.position.y,Mt=at.gate;let re,Le;if(Mt&&at.action in Cn){re=Cn[at.action];const Ne=o.frame(Mt.s);Le=ve.set(Ne.x,g.bankTop(Mt.s)+2.2,Ne.z)}else re=Math.abs(Q-ln)>1e-5?`${Q>ln?"▲":"▼"} ${at.text}`:at.text,Le=ve.set(A.x,Q+3.2,A.z);Le.project(s),Le.z<1&&b.showWorldTip(re,(Le.x+1)/2*t.clientWidth,(1-Le.y)/2*t.clientHeight),ln=Q}if(rt.onDuty=y.hour>=pl&&y.hour<Ju,y.hour>=17&&y.hour<18&&wo!==y.day&&!k.moored&&(wo=y.day,b.toast("Light's going in an hour or so. Time to think about where to moor for the night.","info",6e3)),y.isNight&&!k.moored&&!rt.active&&A.speed*hs>.8&&(Jn!==y.day&&(Jn=y.day,b.toast("It's dark, and most boaters are moored up by now. Find a spot and tie up for the night.","warn",6e3)),lt.change(-2,"night",120)),Qe){const Q=xt?1:-1,Mt=H.boats.find(Hn=>Hn.dir!==Q&&Hn.s>r[0]-4&&Hn.s<r[1]+4),re=Q>0?r[0]-A.s:A.s-r[1];Mt&&re>0&&re<90&&(To!==Mt&&(To=Mt,b.toast(`${Mt.name} is crossing the aqueduct towards you. Wait at this end until they're off: there's only room for one.`,"warn",5500)),A.speed*hs<.6&&(fi=Mt));const Le=A.s>r[0]&&A.s<r[1];Mt&&Le&&!Eo&&(lt.change(-6,"aqueductClash",0),fi=null,b.toast(`Oh dear. You've gone onto the aqueduct with ${Mt.name} coming the other way. Someone's going to have to reverse…`,"warn",6e3)),Eo=Le;const Ne=A.s>r[0]+5&&A.s<r[1]-5;Ne&&!So&&b.toast("Onto Pontcysyllte Aqueduct. 126 ft down to the Dee, with nothing but the trough edge on the far side. Don't look down!","info",6e3),So=Ne}if(!k.moored)At.clear();else if(!b.offerOpen&&!ht&&!zt.result){const Q=S.zones.find(Mt=>L.has(Mt.id)&&!At.has(Mt.id)&&Math.abs((Mt.s0+Mt.s1)/2-A.s)<45);Q&&ue(Q)}const ae=A.speed*hs>.4&&A.speed*hs<2.8?S.boats.find(Q=>Math.abs(Q.s-A.s)<3):void 0;ae&&performance.now()-(ts.get(ae)??-1e9)>18e4&&(ts.set(ae,performance.now()),lt.change(1,"slowPast",0),performance.now()-As>(lt.score<-15?4e4:24e4)&&(As=performance.now(),b.toast(`"Thanks for slowing!" calls someone aboard ${ae.name}.`,"info",3e3)));for(const Q of c.gates)Q.paddle<.05?pi.delete(Q):Math.abs(Q.s-A.s)>110&&!pi.has(Q)&&(pi.add(Q),lt.change(-5,"paddles",0),b.toast(`You've left the paddles up at ${Q.lockName}. The lock-keeper won't be pleased.`,"warn",6e3));be=A.speed*hs>4.3?be+X:0,be>6&&(b.toast("Steady on! The limit is 4 mph, and your wash is slapping the moored boats.","warn"),lt.change(-3,"speeding"),be=-30),H.update(X,xt?1:-1);for(const Q of H.events.splice(0)){const Mt=y.hour<12?"Morning":y.hour<18?"Afternoon":"Evening";if(Q.kind==="waitingAqueduct"){b.toast(`${Q.boat.name} waits at the end of the aqueduct while you cross. Only room for one at a time.`,"info",4500);continue}if(Q.kind==="offAqueduct"){fi===Q.boat&&(lt.change(3,"waitedTurn",0),b.toast(`"Cheers for waiting!" calls the steerer of ${Q.boat.name} as they come off the aqueduct.`,"info",4e3),fi=null);continue}Q.kind==="greet"&&lt.change(1,"greet",60),Q.kind==="wrongSide"&&lt.change(-2,"wrongSide"),Q.kind==="greet"?b.toast(`"${Mt}!" The steerer of ${Q.boat.name} gives you a wave.`,"info",3500):Q.kind==="wrongSide"?b.toast(`Pass oncoming boats on the right (port to port). ${Q.boat.name}'s steerer looks puzzled.`,"warn",4500):b.toast(`Bump! Sorry, ${Q.boat.name}!`,"warn",3e3)}for(const Q of L.values())ji(Q,"shake",Bn*.8);{const Q=c.windingHoles.find(re=>Math.abs(re-A.s)<45);Q!==void 0&&!I&&!b.offerOpen&&!rt.active?(gt+=U,gt>60&&ft(Q)):Q===void 0&&(gt=0),I&&!I.turning&&ji(I.person,b.offerOpen?"wave":"rest",Bn);const Mt=I==null?void 0:I.turning;if(Mt){Mt.t+=U/12;const re=Math.min(1,Mt.t),Le=re*re*(3-2*re),Ne=o.frame(Mt.s),Hn=Math.min(1,re/.4);A.x=Mt.x0+(Ne.x-Mt.x0)*Hn,A.z=Mt.z0+(Ne.z-Mt.z0)*Hn,A.psi=Mt.psi0+(Mt.psi1-Mt.psi0)*Le,A.u=A.v=A.r=0,A.notch=0,A.thrust=0,A.s=o.project(A.x,A.z,A.s).s,re>=1&&(b.toast('"There you go, facing the right way!" The old boater hops off and tips their cap.',"info",5e3),gt=0,Gt())}}G.update(U),ut-=U;for(const Q of G.events.splice(0))Q.kind==="hitBird"?(An.quack(),lt.change(Q.swan?-5:-3,Q.swan?"swan":"duck",4),b.toast(Q.swan?"A furious hiss! You ran right over a swan. Sound the horn (B) to clear the way.":"Squawk! A duck bobs out from under your bow in a flurry of feathers. Toot the horn (B) next time.","warn",4e3)):Q.kind==="quack"?(An.quack(),ut<=0&&(b.toast("Quack! A mallard paddles off, deeply unimpressed.","info",2500),ut=25)):(zt.rocked++,lt.change(-3,"angler"),b.toast("An angler shakes a fist as your wash bobs their float. Ease off past the anglers!","warn",4e3));for(const Q of Nt)!se.has(Q.name)&&Math.abs(Q.s-A.s)<45&&(se.add(Q.name),b.toast(Uy(Q.name,Q.kind),"info",7e3));{const Q=Math.sin(A.psi),Mt=Math.cos(A.psi),re=Nn/2+.3,Le=Math.min(1,Math.abs(A.thrust)/3250);W.update(X,A.s,[A.x-Q*re,A.z-Mt*re],A.psi,A.speed*hs,Le)}Rn-=U;for(const Q of W.washes(S.boats))S.rockBoat(Q.boat,.02+Q.strength*.07),!(Q.strength<.35)&&(zt.rocked++,lt.change(-2,"wash"),Rn<=0&&(b.toast(Qu[Math.floor(Math.random()*Qu.length)].replace("%",Q.boat.name),"warn",3500),Rn=6));const me=(Gc=m.at(A.s))==null?void 0:Gc.data.name;if(me&&me!==xn&&b.toast(`Under ${me}`,"info",2200),xn=me,Ae(Bn),P.tillerHint.visible){const Q=.5+.5*Math.sin(Bn*3);P.tillerHint.material.opacity=.25+.45*Q,P.tillerHint.scale.setScalar(1+.12*Q)}if(u.update(U),M.update(U),S.update(U),x.update(U,s.position),w.update(U),An.rumble(x.rumble),k.update(c.levelAt(A.s),U),y.update(X/3600*Zu,Tt),Y.tick(X/3600*Zu,!!at&&!rt.active&&!k.moored),y.sky.position.copy(s.position),Qt==="follow"){const Q=Tt.clone().sub(fe);if(Q.length()>50?(O.target.copy(Tt),s.position.set(A.x-Math.sin(A.psi)*24,Tt.y+9,A.z-Math.cos(A.psi)*24),te=0):(s.position.add(Q),O.target.add(Q)),te>0){const Mt=s.position.clone().sub(O.target);s.position.copy(O.target).addScaledVector(Mt.normalize(),te)}if(performance.now()/1e3-K>3&&Math.abs(A.u)>.25){const Mt=s.position.clone().sub(O.target),re=Math.atan2(Mt.x,Mt.z);let Ne=A.psi+(A.u>0?Math.PI:0)-re;Ne=Math.atan2(Math.sin(Ne),Math.cos(Ne));const Hn=Ne*Math.min(1,U*.5);Mt.applyAxisAngle(new N(0,1,0),Hn),s.position.copy(O.target).add(Mt)}O.update(),te=s.position.distanceTo(O.target),sf()}else{const Q=Math.sin(A.psi),Mt=Math.cos(A.psi),re=-Nn/2+.9;s.position.set(A.x+Q*re,Tt.y+.75,A.z+Mt*re),s.lookAt(A.x+Q*40,Tt.y-.2,A.z+Mt*40)}fe.copy(Tt),m.updateOcclusion(s.position,Tt,U);const nn=Math.floor(y.hour),dn=Math.floor((y.hour-nn)*12)*5;b.setHelm({notch:A.notch,speedMph:A.speed*hs,timeScale:Ue,clock:`${y.isNight?"🌙":"☀"} ${nn}:${String(dn).padStart(2,"0")}`});const[ti,Pn]=nf();b.setRep(lt.score,lt.standing,lt.face,lt.next),b.setGalley({hunger:Y.hunger,food:Y.food,foodMax:ea,water:Y.water,canCook:Y.cannotCook(k.moored)}),Y.starving&&performance.now()>De&&(De=performance.now()+12e4,b.toast(Y.food>0?"Your stomach rumbles. Moor up and cook something, or find a pub.":"Your stomach rumbles, and the larder is bare. Time for a pub, or a trip to the shops.","warn",5e3)),b.setLocation(ti,Pn,`Journal: ${de.size}/${ne.length} canalside stops · ${se.size}/${Nt.length} sights · known as ${lt.standing}`),Ge.draw(A.x,A.z,A.psi);const Pe=z(zt.current.zone),es=(Pe.s0+Pe.s1)/2-A.s,va=A.s>Pe.s0-4&&A.s<Pe.s1+4,rf=Math.sign(es)===(xt?1:-1)?"ahead":"behind you",Hc=Pe.name.split(",")[0],af=va?`${Hc} · pull in and tie up (F)`:`${Hc} · ${qr(es)} ${rf}`;if(!Fn&&!zt.result&&Ei.forEach((Q,Mt)=>{if(zt.done.has(Mt))return;const re=z(Q.from),Le=Math.abs((re.s0+re.s1)/2-A.s);Le>90?Ft.delete(Mt):Le<45&&!Ft.has(Mt)&&!b.offerOpen&&et(Mt)}),b.setTrip({state:zt.result?"done":Fn?"active":"none",n:zt.index+1,title:zt.current.title,brief:zt.current.brief,where:af}),Lt){const Q=Lt.dest,Mt=(Q.s0+Q.s1)/2-A.s,re=A.s>Q.s0-4&&A.s<Q.s1+4;b.setLift(`${Lt.name} → ${ot(Q)} · ${re?"moor up (F)":`${qr(Mt)} ${Math.sign(Mt)===(xt?1:-1)?"ahead":"behind"}`}`)}else b.setLift(null);if(_t){const Q=_t,re=(Q.phase==="back"?Q.home:Q.target)-Q.s,Le=Q.phase!=="hook"&&Math.abs(re)>.1;Le&&(Q.s+=Math.sign(re)*Math.min(Math.abs(re),1.6*X));const Ne=o.frame(Q.s),Hn=(c.halfWidthAt(Q.s)+1.3)*Xt;Q.person.group.position.set(Ne.x+Ne.nx*Hn,g.bankTop(Q.s),Ne.z+Ne.nz*Hn),Le?(Q.person.group.rotation.y=Math.atan2(Ne.tx*Math.sign(re),Ne.tz*Math.sign(re)),aa(Q.person,Bn*7)):(Q.person.group.rotation.y=Math.atan2(-Ne.nx*Xt,-Ne.nz*Xt),Kd(Q.person),ji(Q.person,Q.phase==="hook"?"push":"rest",Bn),Q.person.armR.rotation.x&&(Q.person.armR.rotation.x+=Math.sin(Bn*4)*.25)),Q.phase==="out"&&!Le?(Q.phase="hook",Q.b.startClearing(),b.toast("Heave!","info",1500)):Q.phase==="back"&&!Le&&(n.remove(Q.person.group),P.steerer.visible=Qt!=="steerer",_t=null)}let ns=null;for(const Q of Ot){if(Q.update(X,Bn)){const re=A.obstacles.indexOf(Q.obstacle);re>=0&&A.obstacles.splice(re,1),zt.cleared++,lt.change(5,"cleared",0),Ge.setHazards(Ot.filter(Le=>Le.active).map(Le=>o.point(Le.s,0))),b.toast(`${Q.description.cleared} Cast off (F) once you're back aboard.`,"info",7e3),(_t==null?void 0:_t.b)===Q&&(_t.phase="back")}if(!Q.active)continue;const Mt=Math.abs(Q.s-A.s);!Q.spotted&&Mt<90&&(Q.spotted=!0,b.toast(`${Q.description.spotted} Moor up nearby (F) and clear it with the boat hook (G).`,"warn",8e3)),Mt<ml&&(!ns||Mt<Math.abs(ns.s-A.s))&&(ns=Q)}let Rs=k.prompt();const _a=ns?void 0:Pt.near(A.s);_a&&(Rs=k.moored?{key:"G",text:_a.verb,ready:!0}:Rs??{key:"F",text:`Moor up to load ${so[_a.item].name}`,ready:!1}),ns&&(k.moored?Rs=ns.clearing?{key:"G",text:`Clearing… ${Math.round(ns.progress*100)}%`,ready:!1}:{key:"G",text:"Clear the blockage with the boat hook",ready:!0}:Rs||(Rs={key:"F",text:"Moor up alongside the towpath to get at the blockage",ready:!1})),b.setPrompt(Rs);const lf=c.gates.reduce((Q,Mt)=>Q+(Math.abs(Mt.s-A.s)<120?Math.abs(Mt.flow):0),0);An.update(A.notch,lf,b.isWinding,!y.isNight),e.render(n,s),requestAnimationFrame(Bc)};await Vi("Casting off…"),Qd.classList.add("done"),requestAnimationFrame(Bc),Object.assign(window,{game:{scene:n,boat:A,ww:c,camera:s,route:o,renderer:e,moorings:S,trips:zt,traffic:H,decor:B,life:G,blockages:Ot,volunteers:rt,lines:k,minimap:Ge,roof:F,pickups:Pt,trains:x,cars:w}})}Fy().catch(i=>{console.error(i),tf.textContent=`Something went wrong: ${i.message}`});
