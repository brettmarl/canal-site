var Gh=Object.defineProperty;var Vh=(i,t,e)=>t in i?Gh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var k=(i,t,e)=>Vh(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wa="170",Yi={ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wh=0,ja=1,Xh=2,Xc=1,qc=2,Nn=3,ni=0,Be=1,ze=2,ti=0,$i=1,Za=2,Ka=3,Ja=4,qh=5,di=100,Yh=101,$h=102,jh=103,Zh=104,Kh=200,Jh=201,Qh=202,tu=203,Io=204,Uo=205,eu=206,nu=207,iu=208,su=209,ru=210,ou=211,au=212,lu=213,cu=214,No=0,Oo=1,Fo=2,Ki=3,ko=4,zo=5,Bo=6,Ho=7,Yc=0,hu=1,uu=2,ei=0,du=1,fu=2,pu=3,$c=4,mu=5,gu=6,_u=7,jc=300,Ji=301,Qi=302,Go=303,Vo=304,kr=306,Ir=1e3,pi=1001,Wo=1002,Ze=1003,vu=1004,qs=1005,xn=1006,qr=1007,mi=1008,kn=1009,Zc=1010,Kc=1011,Is=1012,Ea=1013,gi=1014,Mn=1015,Bs=1016,Ta=1017,Aa=1018,ts=1020,Jc=35902,Qc=1021,th=1022,dn=1023,eh=1024,nh=1025,ji=1026,es=1027,Ra=1028,Ca=1029,ih=1030,Pa=1031,La=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,Xo=35840,qo=35841,Yo=35842,$o=35843,jo=36196,Zo=37492,Ko=37496,Jo=37808,Qo=37809,ta=37810,ea=37811,na=37812,ia=37813,sa=37814,ra=37815,oa=37816,aa=37817,la=37818,ca=37819,ha=37820,ua=37821,Lr=36492,da=36494,fa=36495,sh=36283,pa=36284,ma=36285,ga=36286,xu=3200,Mu=3201,rh=0,yu=1,Kn="",Ue="srgb",as="srgb-linear",zr="linear",ce="srgb",wi=7680,Qa=519,bu=512,Su=513,wu=514,oh=515,Eu=516,Tu=517,Au=518,Ru=519,tl=35044,el=35048,nl="300 es",On=2e3,Ur=2001;class xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let il=1234567;const Cs=Math.PI/180,ns=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function Da(i,t){return(i%t+t)%t}function Cu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Pu(i,t,e){return i!==t?(e-i)/(t-i):0}function Ps(i,t,e){return(1-e)*i+e*t}function Lu(i,t,e,n){return Ps(i,t,1-Math.exp(-e*n))}function Du(i,t=1){return t-Math.abs(Da(i,t*2)-t)}function Iu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Uu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Nu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ou(i,t){return i+Math.random()*(t-i)}function Fu(i){return i*(.5-Math.random())}function ku(i){i!==void 0&&(il=i);let t=il+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zu(i){return i*Cs}function Bu(i){return i*ns}function Hu(i){return(i&i-1)===0&&i!==0}function Gu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Us={DEG2RAD:Cs,RAD2DEG:ns,generateUUID:Mi,clamp:Ce,euclideanModulo:Da,mapLinear:Cu,inverseLerp:Pu,lerp:Ps,damp:Lu,pingpong:Du,smoothstep:Iu,smootherstep:Uu,randInt:Nu,randFloat:Ou,randFloatSpread:Fu,seededRandom:ku,degToRad:zu,radToDeg:Bu,isPowerOfTwo:Hu,ceilPowerOfTwo:Gu,floorPowerOfTwo:Vu,setQuaternionFromProperEuler:Wu,normalize:Fe,denormalize:Hi};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,r,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],x=s[4],v=s[7],b=s[2],T=s[5],A=s[8];return r[0]=o*_+a*M+l*b,r[3]=o*m+a*x+l*T,r[6]=o*p+a*v+l*A,r[1]=c*_+h*M+d*b,r[4]=c*m+h*x+d*T,r[7]=c*p+h*v+d*A,r[2]=f*_+u*M+g*b,r[5]=f*m+u*x+g*T,r[8]=f*p+u*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,g=e*d+n*f+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yr.makeScale(t,e)),this}rotate(t){return this.premultiply(Yr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new Yt;function ah(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xu(){const i=Nr("canvas");return i.style.display="block",i}const sl={};function As(i){i in sl||(sl[i]=!0,console.warn(i))}function qu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Yu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $u(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:as,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(i.r=Fn(i.r),i.g=Fn(i.g),i.b=Fn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(i.r=Zi(i.r),i.g=Zi(i.g),i.b=Zi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Kn?zr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const rl=[.64,.33,.3,.6,.15,.06],ol=[.2126,.7152,.0722],al=[.3127,.329],ll=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cl=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[as]:{primaries:rl,whitePoint:al,transfer:zr,toXYZ:ll,fromXYZ:cl,luminanceCoefficients:ol,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:rl,whitePoint:al,transfer:ce,toXYZ:ll,fromXYZ:cl,luminanceCoefficients:ol,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});let Ei;class ju{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=Nr("canvas")),Ei.width=t.width,Ei.height=t.height;const n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Nr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zu=0;class lh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($r(s[o].image)):r.push($r(s[o]))}else r=$r(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function $r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ju.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ku=0;class Ne extends xi{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=pi,s=pi,r=xn,o=mi,a=dn,l=kn,c=Ne.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Mi(),this.name="",this.source=new lh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ir:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ir:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=jc;Ne.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(u+1)/2,b=(p+1)/2,T=(h+f)/4,A=(d+_)/4,L=(g+m)/4;return x>v&&x>b?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=A/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=L/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=L/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ju extends xi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ne(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new lh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends Ju{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ch extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qu extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const f=r[o+0],u=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==u||h!==g){let m=1-a;const p=l*f+c*u+h*g+d*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),T=Math.atan2(b,p*M);m=Math.sin(m*T)/b,a=Math.sin(a*T)/b}const v=a*M;if(l=l*m+f*v,c=c*m+u*v,h=h*m+g*v,d=d*m+_*v,m===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*u-c*f,t[e+1]=l*g+h*f+c*d-a*u,t[e+2]=c*g+h*u+a*f-l*d,t[e+3]=h*g-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jr.copy(this).projectOnVector(t),this.sub(jr)}reflect(t){return this.sub(jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new D,hl=new bn;class yi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),$s.subVectors(this.max,gs),Ti.subVectors(t.a,gs),Ai.subVectors(t.b,gs),Ri.subVectors(t.c,gs),Gn.subVectors(Ai,Ti),Vn.subVectors(Ri,Ai),si.subVectors(Ti,Ri);let e=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-si.z,si.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,si.z,0,-si.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-si.y,si.x,0];return!Zr(e,Ti,Ai,Ri,$s)||(e=[1,0,0,0,1,0,0,0,1],!Zr(e,Ti,Ai,Ri,$s))?!1:(js.crossVectors(Gn,Vn),e=[js.x,js.y,js.z],Zr(e,Ti,Ai,Ri,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new D,new D,new D,new D,new D,new D,new D,new D],an=new D,Ys=new yi,Ti=new D,Ai=new D,Ri=new D,Gn=new D,Vn=new D,si=new D,gs=new D,$s=new D,js=new D,ri=new D;function Zr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ri.fromArray(i,r);const a=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const td=new yi,_s=new D,Kr=new D;class ls{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):td.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(Kr)),this.expandByPoint(_s.copy(t.center).sub(Kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new D,Jr=new D,Zs=new D,Wn=new D,Qr=new D,Ks=new D,to=new D;class Br{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jr.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),Wn.copy(this.origin).sub(Jr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Zs),a=Wn.dot(this.direction),l=-Wn.dot(Zs),c=Wn.lengthSq(),h=Math.abs(1-o*o);let d,f,u,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Jr).addScaledVector(Zs,f),u}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){Qr.subVectors(e,t),Ks.subVectors(n,t),to.crossVectors(Qr,Ks);let o=this.direction.dot(to),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,t);const l=a*this.direction.dot(Ks.crossVectors(Wn,Ks));if(l<0)return null;const c=a*this.direction.dot(Qr.cross(Wn));if(c<0||l+c>o)return null;const h=-a*Wn.dot(to);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,r,o,a,l,c,h,d,f,u,g,_,m){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,u,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,d,f,u,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),o=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,u=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,g=c*h,_=c*d;e[0]=f+_*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,g=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,u=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-u,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=g*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ed,t,nd)}lookAt(t,e,n){const s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Xn.crossVectors(n,Ye),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Xn.crossVectors(n,Ye)),Xn.normalize(),Js.crossVectors(Ye,Xn),s[0]=Xn.x,s[4]=Js.x,s[8]=Ye.x,s[1]=Xn.y,s[5]=Js.y,s[9]=Ye.y,s[2]=Xn.z,s[6]=Js.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],v=n[11],b=n[15],T=s[0],A=s[4],L=s[8],w=s[12],y=s[1],C=s[5],z=s[9],B=s[13],q=s[2],j=s[6],U=s[10],Y=s[14],H=s[3],ut=s[7],mt=s[11],xt=s[15];return r[0]=o*T+a*y+l*q+c*H,r[4]=o*A+a*C+l*j+c*ut,r[8]=o*L+a*z+l*U+c*mt,r[12]=o*w+a*B+l*Y+c*xt,r[1]=h*T+d*y+f*q+u*H,r[5]=h*A+d*C+f*j+u*ut,r[9]=h*L+d*z+f*U+u*mt,r[13]=h*w+d*B+f*Y+u*xt,r[2]=g*T+_*y+m*q+p*H,r[6]=g*A+_*C+m*j+p*ut,r[10]=g*L+_*z+m*U+p*mt,r[14]=g*w+_*B+m*Y+p*xt,r[3]=M*T+x*y+v*q+b*H,r[7]=M*A+x*C+v*j+b*ut,r[11]=M*L+x*z+v*U+b*mt,r[15]=M*w+x*B+v*Y+b*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*u-n*l*u)+_*(+e*l*u-e*c*f+r*o*f-s*o*u+s*c*h-r*l*h)+m*(+e*c*d-e*a*u-r*o*d+n*o*u+r*a*h-n*c*h)+p*(-s*a*h-e*l*d+e*a*f+s*o*d-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=d*m*c-_*f*c+_*l*u-a*m*u-d*l*p+a*f*p,x=g*f*c-h*m*c-g*l*u+o*m*u+h*l*p-o*f*p,v=h*_*c-g*d*c+g*a*u-o*_*u-h*a*p+o*d*p,b=g*d*l-h*_*l-g*a*f+o*_*f+h*a*m-o*d*m,T=e*M+n*x+s*v+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=M*A,t[1]=(_*f*r-d*m*r-_*s*u+n*m*u+d*s*p-n*f*p)*A,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*A,t[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*u-n*l*u)*A,t[4]=x*A,t[5]=(h*m*r-g*f*r+g*s*u-e*m*u-h*s*p+e*f*p)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*u+e*l*u)*A,t[8]=v*A,t[9]=(g*d*r-h*_*r-g*n*u+e*_*u+h*n*p-e*d*p)*A,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*u-e*a*u)*A,t[12]=b*A,t[13]=(h*_*s-g*d*s+g*n*f-e*_*f-h*n*m+e*d*m)*A,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*A,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,g=r*d,_=o*h,m=o*d,p=a*d,M=l*c,x=l*h,v=l*d,b=n.x,T=n.y,A=n.z;return s[0]=(1-(_+p))*b,s[1]=(u+v)*b,s[2]=(g-x)*b,s[3]=0,s[4]=(u-v)*T,s[5]=(1-(f+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+x)*A,s[9]=(m-M)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ci.set(s[0],s[1],s[2]).length();const o=Ci.set(s[4],s[5],s[6]).length(),a=Ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);const c=1/r,h=1/o,d=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=On){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let u,g;if(a===On)u=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ur)u=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=On){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*c,u=(n+s)*h;let g,_;if(a===On)g=(o+r)*d,_=-2*d;else if(a===Ur)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ci=new D,ln=new ne,ed=new D(0,0,0),nd=new D(1,1,1),Xn=new D,Js=new D,Ye=new D,ul=new ne,dl=new bn;class Sn{constructor(t=0,e=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ul,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dl.setFromEuler(this),this.setFromQuaternion(dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Ia{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let id=0;const fl=new D,Pi=new bn,Dn=new ne,Qs=new D,vs=new D,sd=new D,rd=new bn,pl=new D(1,0,0),ml=new D(0,1,0),gl=new D(0,0,1),_l={type:"added"},od={type:"removed"},Li={type:"childadded",child:null},eo={type:"childremoved",child:null};class ye extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new D,e=new Sn,n=new bn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Yt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(pl,t)}rotateY(t){return this.rotateOnAxis(ml,t)}rotateZ(t){return this.rotateOnAxis(gl,t)}translateOnAxis(t,e){return fl.copy(t).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pl,t)}translateY(t){return this.translateOnAxis(ml,t)}translateZ(t){return this.translateOnAxis(gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qs.copy(t):Qs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(vs,Qs,this.up):Dn.lookAt(Qs,vs,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_l),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(od),eo.child=t,this.dispatchEvent(eo),eo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_l),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,sd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,rd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ye.DEFAULT_UP=new D(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new D,In=new D,no=new D,Un=new D,Di=new D,Ii=new D,vl=new D,io=new D,so=new D,ro=new D,oo=new ve,ao=new ve,lo=new ve;class hn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),In.subVectors(n,e),no.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(In),l=cn.dot(no),c=In.dot(In),h=In.dot(no),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return oo.setScalar(0),ao.setScalar(0),lo.setScalar(0),oo.fromBufferAttribute(t,e),ao.fromBufferAttribute(t,n),lo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oo,r.x),o.addScaledVector(ao,r.y),o.addScaledVector(lo,r.z),o}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),In.subVectors(t,e),cn.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),cn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Di.subVectors(s,n),Ii.subVectors(r,n),io.subVectors(t,n);const l=Di.dot(io),c=Ii.dot(io);if(l<=0&&c<=0)return e.copy(n);so.subVectors(t,s);const h=Di.dot(so),d=Ii.dot(so);if(h>=0&&d<=h)return e.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Di,o);ro.subVectors(t,r);const u=Di.dot(ro),g=Ii.dot(ro);if(g>=0&&u<=g)return e.copy(r);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ii,a);const m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return vl.subVectors(r,s),a=(d-h)/(d-h+(u-g)),e.copy(s).addScaledVector(vl,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Di,o).addScaledVector(Ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function co(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Da(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=co(o,r,t+1/3),this.g=co(o,r,t),this.b=co(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=hh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return ie.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Ce(Ie.r*255,0,255))*65536+Math.round(Ce(Ie.g*255,0,255))*256+Math.round(Ce(Ie.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Ue){ie.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,s=Ie.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(tr);const n=Ps(qn.h,tr.h,e),s=Ps(qn.s,tr.s,e),r=Ps(qn.l,tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Ot;Ot.NAMES=hh;let ad=0;class cs extends xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Mi(),this.name="",this.blending=$i,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Io,this.blendDst=Uo,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Io&&(n.blendSrc=this.blendSrc),this.blendDst!==Uo&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ns extends cs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new D,er=new at;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tl,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tl&&(t.usage=this.usage),t}}class uh extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class dh extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ld=0;const Qe=new ne,ho=new ye,Ui=new D,$e=new yi,xs=new yi,Te=new D;class de extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ah(t)?dh:uh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return ho.lookAt(t),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors($e.min,xs.min),$e.expandByPoint(Te),Te.addVectors($e.max,xs.max),$e.expandByPoint(Te)):($e.expandByPoint(xs.min),$e.expandByPoint(xs.max))}$e.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Te.fromBufferAttribute(a,c),l&&(Ui.fromBufferAttribute(t,c),Te.add(Ui)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new D,l[L]=new D;const c=new D,h=new D,d=new D,f=new at,u=new at,g=new at,_=new D,m=new D;function p(L,w,y){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,L),u.fromBufferAttribute(r,w),g.fromBufferAttribute(r,y),h.sub(c),d.sub(c),u.sub(f),g.sub(f);const C=1/(u.x*g.y-g.x*u.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(C),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(C),a[L].add(_),a[w].add(_),a[y].add(_),l[L].add(m),l[w].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,w=M.length;L<w;++L){const y=M[L],C=y.start,z=y.count;for(let B=C,q=C+z;B<q;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const x=new D,v=new D,b=new D,T=new D;function A(L){b.fromBufferAttribute(s,L),T.copy(b);const w=a[L];x.copy(w),x.sub(b.multiplyScalar(b.dot(w))).normalize(),v.crossVectors(T,w);const C=v.dot(l[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,C)}for(let L=0,w=M.length;L<w;++L){const y=M[L],C=y.start,z=y.count;for(let B=C,q=C+z;B<q;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let f=0,u=t.count;f<u;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let u=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[u++]}return new Oe(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new de,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xl=new ne,oi=new Br,nr=new ls,Ml=new D,ir=new D,sr=new D,rr=new D,uo=new D,or=new D,yl=new D,ar=new D;class it extends ye{constructor(t=new de,e=new Ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(uo.fromBufferAttribute(d,t),o?or.addScaledVector(uo,h):or.addScaledVector(uo.sub(e),h))}e.add(or)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(nr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(nr,Ml)===null||oi.origin.distanceToSquared(Ml)>(t.far-t.near)**2))&&(xl.copy(r).invert(),oi.copy(t.ray).applyMatrix4(xl),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,u.start),x=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let v=M,b=x;v<b;v+=3){const T=a.getX(v),A=a.getX(v+1),L=a.getX(v+2);s=lr(this,p,t,n,c,h,d,T,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=lr(this,o,t,n,c,h,d,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,u.start),x=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let v=M,b=x;v<b;v+=3){const T=v,A=v+1,L=v+2;s=lr(this,p,t,n,c,h,d,T,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,v=m+2;s=lr(this,o,t,n,c,h,d,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function cd(i,t,e,n,s,r,o,a){let l;if(t.side===Be?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ni,a),l===null)return null;ar.copy(a),ar.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ar);return c<e.near||c>e.far?null:{distance:c,point:ar.clone(),object:i}}function lr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ir),i.getVertexPosition(l,sr),i.getVertexPosition(c,rr);const h=cd(i,t,e,n,ir,sr,rr,yl);if(h){const d=new D;hn.getBarycoord(yl,ir,sr,rr,d),s&&(h.uv=hn.getInterpolatedAttribute(s,a,l,c,d,new at)),r&&(h.uv1=hn.getInterpolatedAttribute(r,a,l,c,d,new at)),o&&(h.normal=hn.getInterpolatedAttribute(o,a,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};hn.getNormal(ir,sr,rr,f.normal),h.face=f,h.barycoord=d}return h}class Jt extends de{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function g(_,m,p,M,x,v,b,T,A,L,w){const y=v/A,C=b/L,z=v/2,B=b/2,q=T/2,j=A+1,U=L+1;let Y=0,H=0;const ut=new D;for(let mt=0;mt<U;mt++){const xt=mt*C-B;for(let Nt=0;Nt<j;Nt++){const Qt=Nt*y-z;ut[_]=Qt*M,ut[m]=xt*x,ut[p]=q,c.push(ut.x,ut.y,ut.z),ut[_]=0,ut[m]=0,ut[p]=T>0?1:-1,h.push(ut.x,ut.y,ut.z),d.push(Nt/A),d.push(1-mt/L),Y+=1}}for(let mt=0;mt<L;mt++)for(let xt=0;xt<A;xt++){const Nt=f+xt+j*mt,Qt=f+xt+j*(mt+1),F=f+(xt+1)+j*(mt+1),K=f+(xt+1)+j*mt;l.push(Nt,Qt,K),l.push(Qt,F,K),H+=6}a.addGroup(u,H,w),u+=H,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function is(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=is(i[e]);for(const s in n)t[s]=n[s]}return t}function hd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const ph={clone:is,merge:ke};var ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends cs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class mh extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new D,bl=new at,Sl=new at;class je extends mh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,bl,Sl),e.subVectors(Sl,bl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ni=-90,Oi=1;class fd extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new je(Ni,Oi,t,e);s.layers=this.layers,this.add(s);const r=new je(Ni,Oi,t,e);r.layers=this.layers,this.add(r);const o=new je(Ni,Oi,t,e);o.layers=this.layers,this.add(o);const a=new je(Ni,Oi,t,e);a.layers=this.layers,this.add(a);const l=new je(Ni,Oi,t,e);l.layers=this.layers,this.add(l);const c=new je(Ni,Oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gh extends Ne{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ji,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pd extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jt(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:ti});r.uniforms.tEquirect.value=e;const o=new it(s,r),a=e.minFilter;return e.minFilter===mi&&(e.minFilter=xn),new fd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const fo=new D,md=new D,gd=new Yt;class Zn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=fo.subVectors(n,e).cross(md.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gd.getNormalMatrix(t),s=this.coplanarPoint(fo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new ls,cr=new D;class Ua{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],u=s[8],g=s[9],_=s[10],m=s[11],p=s[12],M=s[13],x=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,m-u,v-p).normalize(),n[1].setComponents(l+r,f+c,m+u,v+p).normalize(),n[2].setComponents(l+o,f+h,m+g,v+M).normalize(),n[3].setComponents(l-o,f-h,m-g,v-M).normalize(),n[4].setComponents(l-a,f-d,m-_,v-x).normalize(),e===On)n[5].setComponents(l+a,f+d,m+_,v+x).normalize();else if(e===Ur)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(cr.x=s.normal.x>0?t.max.x:t.min.x,cr.y=s.normal.y>0?t.max.y:t.min.y,cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _h(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _d(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){const g=d[f],_=d[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){const _=d[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ii extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,u=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*f-o;for(let x=0;x<c;x++){const v=x*d-r;g.push(v,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const x=M+c*p,v=M+c*(p+1),b=M+1+c*(p+1),T=M+1+c*p;u.push(x,v,T),u.push(v,b,T)}this.setIndex(u),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.widthSegments,t.heightSegments)}}var vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xd=`#ifdef USE_ALPHAHASH
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
#endif`,Md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wd=`#ifdef USE_AOMAP
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
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td=`#ifdef USE_BATCHING
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
#endif`,Ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ld=`#ifdef USE_IRIDESCENCE
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
#endif`,Dd=`#ifdef USE_BUMPMAP
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hd=`#define PI 3.141592653589793
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
} // validated`,Gd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vd=`vec3 transformedNormal = objectNormal;
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
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$d="gl_FragColor = linearToOutputTexel( gl_FragColor );",jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
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
#endif`,ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,of=`#ifdef USE_GRADIENTMAP
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
}`,af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hf=`uniform bool receiveShadow;
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
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gf=`PhysicalMaterial material;
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
#endif`,_f=`struct PhysicalMaterial {
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
}`,vf=`
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
#endif`,xf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rf=`#if defined( USE_POINTS_UV )
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
#endif`,Cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,If=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`#ifdef USE_MORPHTARGETS
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
#endif`,Nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Of=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hf=`#ifdef USE_NORMALMAP
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
#endif`,Gf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ip=`float getShadowMask() {
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
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#ifdef USE_TRANSMISSION
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xp=`uniform sampler2D t2D;
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`#include <common>
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
}`,Ep=`#if DEPTH_PACKING == 3200
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
}`,Tp=`#define DISTANCE
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
}`,Ap=`#define DISTANCE
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`uniform float scale;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Dp=`#include <common>
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Up=`#define LAMBERT
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
}`,Np=`#define LAMBERT
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
}`,Op=`#define MATCAP
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
}`,Fp=`#define MATCAP
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
}`,kp=`#define NORMAL
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
}`,zp=`#define NORMAL
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
}`,Bp=`#define PHONG
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
}`,Hp=`#define PHONG
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
}`,Gp=`#define STANDARD
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
}`,Vp=`#define STANDARD
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
}`,Wp=`#define TOON
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
}`,Xp=`#define TOON
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
}`,qp=`uniform float size;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,$p=`#include <common>
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
}`,jp=`uniform vec3 color;
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
}`,Zp=`uniform float rotation;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:vd,alphahash_pars_fragment:xd,alphamap_fragment:Md,alphamap_pars_fragment:yd,alphatest_fragment:bd,alphatest_pars_fragment:Sd,aomap_fragment:wd,aomap_pars_fragment:Ed,batching_pars_vertex:Td,batching_vertex:Ad,begin_vertex:Rd,beginnormal_vertex:Cd,bsdfs:Pd,iridescence_fragment:Ld,bumpmap_pars_fragment:Dd,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Nd,clipping_planes_vertex:Od,color_fragment:Fd,color_pars_fragment:kd,color_pars_vertex:zd,color_vertex:Bd,common:Hd,cube_uv_reflection_fragment:Gd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:Wd,displacementmap_vertex:Xd,emissivemap_fragment:qd,emissivemap_pars_fragment:Yd,colorspace_fragment:$d,colorspace_pars_fragment:jd,envmap_fragment:Zd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:Jd,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:uf,envmap_vertex:tf,fog_vertex:ef,fog_pars_vertex:nf,fog_fragment:sf,fog_pars_fragment:rf,gradientmap_pars_fragment:of,lightmap_pars_fragment:af,lights_lambert_fragment:lf,lights_lambert_pars_fragment:cf,lights_pars_begin:hf,lights_toon_fragment:df,lights_toon_pars_fragment:ff,lights_phong_fragment:pf,lights_phong_pars_fragment:mf,lights_physical_fragment:gf,lights_physical_pars_fragment:_f,lights_fragment_begin:vf,lights_fragment_maps:xf,lights_fragment_end:Mf,logdepthbuf_fragment:yf,logdepthbuf_pars_fragment:bf,logdepthbuf_pars_vertex:Sf,logdepthbuf_vertex:wf,map_fragment:Ef,map_pars_fragment:Tf,map_particle_fragment:Af,map_particle_pars_fragment:Rf,metalnessmap_fragment:Cf,metalnessmap_pars_fragment:Pf,morphinstance_vertex:Lf,morphcolor_vertex:Df,morphnormal_vertex:If,morphtarget_pars_vertex:Uf,morphtarget_vertex:Nf,normal_fragment_begin:Of,normal_fragment_maps:Ff,normal_pars_fragment:kf,normal_pars_vertex:zf,normal_vertex:Bf,normalmap_pars_fragment:Hf,clearcoat_normal_fragment_begin:Gf,clearcoat_normal_fragment_maps:Vf,clearcoat_pars_fragment:Wf,iridescence_pars_fragment:Xf,opaque_fragment:qf,packing:Yf,premultiplied_alpha_fragment:$f,project_vertex:jf,dithering_fragment:Zf,dithering_pars_fragment:Kf,roughnessmap_fragment:Jf,roughnessmap_pars_fragment:Qf,shadowmap_pars_fragment:tp,shadowmap_pars_vertex:ep,shadowmap_vertex:np,shadowmask_pars_fragment:ip,skinbase_vertex:sp,skinning_pars_vertex:rp,skinning_vertex:op,skinnormal_vertex:ap,specularmap_fragment:lp,specularmap_pars_fragment:cp,tonemapping_fragment:hp,tonemapping_pars_fragment:up,transmission_fragment:dp,transmission_pars_fragment:fp,uv_pars_fragment:pp,uv_pars_vertex:mp,uv_vertex:gp,worldpos_vertex:_p,background_vert:vp,background_frag:xp,backgroundCube_vert:Mp,backgroundCube_frag:yp,cube_vert:bp,cube_frag:Sp,depth_vert:wp,depth_frag:Ep,distanceRGBA_vert:Tp,distanceRGBA_frag:Ap,equirect_vert:Rp,equirect_frag:Cp,linedashed_vert:Pp,linedashed_frag:Lp,meshbasic_vert:Dp,meshbasic_frag:Ip,meshlambert_vert:Up,meshlambert_frag:Np,meshmatcap_vert:Op,meshmatcap_frag:Fp,meshnormal_vert:kp,meshnormal_frag:zp,meshphong_vert:Bp,meshphong_frag:Hp,meshphysical_vert:Gp,meshphysical_frag:Vp,meshtoon_vert:Wp,meshtoon_frag:Xp,points_vert:qp,points_frag:Yp,shadow_vert:$p,shadow_frag:jp,sprite_vert:Zp,sprite_frag:Kp},vt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},vn={basic:{uniforms:ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:ke([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:ke([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:ke([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:ke([vt.points,vt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:ke([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:ke([vt.common,vt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:ke([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:ke([vt.sprite,vt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:ke([vt.common,vt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:ke([vt.lights,vt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};vn.physical={uniforms:ke([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const hr={r:0,b:0,g:0},li=new Sn,Jp=new ne;function Qp(i,t,e,n,s,r,o){const a=new Ot(0);let l=r===!0?0:1,c,h,d=null,f=0,u=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const v=g(M);v===null?p(a,l):v&&v.isColor&&(p(v,1),x=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===kr)?(h===void 0&&(h=new it(new Jt(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:is(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),li.copy(x.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jp.makeRotationFromEuler(li)),h.material.toneMapped=ie.getTransfer(v.colorSpace)!==ce,(d!==v||f!==v.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,u=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new it(new ii(2,2),new zn({name:"BackgroundMaterial",uniforms:is(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ie.getTransfer(v.colorSpace)!==ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(hr,fh(i)),n.buffers.color.setClear(hr.r,hr.g,hr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m}}function tm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,C,z,B,q){let j=!1;const U=d(B,z,C);r!==U&&(r=U,c(r.object)),j=u(y,B,z,q),j&&g(y,B,z,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,v(y,C,z,B),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,C,z){const B=z.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let j=q[C.id];j===void 0&&(j={},q[C.id]=j);let U=j[B];return U===void 0&&(U=f(l()),j[B]=U),U}function f(y){const C=[],z=[],B=[];for(let q=0;q<e;q++)C[q]=0,z[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:B,object:y,attributes:{},index:null}}function u(y,C,z,B){const q=r.attributes,j=C.attributes;let U=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){const mt=q[H];let xt=j[H];if(xt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor)),mt===void 0||mt.attribute!==xt||xt&&mt.data!==xt.data)return!0;U++}return r.attributesNum!==U||r.index!==B}function g(y,C,z,B){const q={},j=C.attributes;let U=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){let mt=j[H];mt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor));const xt={};xt.attribute=mt,mt&&mt.data&&(xt.data=mt.data),q[H]=xt,U++}r.attributes=q,r.attributesNum=U,r.index=B}function _(){const y=r.newAttributes;for(let C=0,z=y.length;C<z;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const z=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;z[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),q[y]!==C&&(i.vertexAttribDivisor(y,C),q[y]=C)}function M(){const y=r.newAttributes,C=r.enabledAttributes;for(let z=0,B=C.length;z<B;z++)C[z]!==y[z]&&(i.disableVertexAttribArray(z),C[z]=0)}function x(y,C,z,B,q,j,U){U===!0?i.vertexAttribIPointer(y,C,z,q,j):i.vertexAttribPointer(y,C,z,B,q,j)}function v(y,C,z,B){_();const q=B.attributes,j=z.getAttributes(),U=C.defaultAttributeValues;for(const Y in j){const H=j[Y];if(H.location>=0){let ut=q[Y];if(ut===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),ut!==void 0){const mt=ut.normalized,xt=ut.itemSize,Nt=t.get(ut);if(Nt===void 0)continue;const Qt=Nt.buffer,F=Nt.type,K=Nt.bytesPerElement,yt=F===i.INT||F===i.UNSIGNED_INT||ut.gpuType===Ea;if(ut.isInterleavedBufferAttribute){const st=ut.data,Rt=st.stride,Lt=ut.offset;if(st.isInstancedInterleavedBuffer){for(let Ht=0;Ht<H.locationSize;Ht++)p(H.location+Ht,st.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ht=0;Ht<H.locationSize;Ht++)m(H.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Ht=0;Ht<H.locationSize;Ht++)x(H.location+Ht,xt/H.locationSize,F,mt,Rt*K,(Lt+xt/H.locationSize*Ht)*K,yt)}else{if(ut.isInstancedBufferAttribute){for(let st=0;st<H.locationSize;st++)p(H.location+st,ut.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let st=0;st<H.locationSize;st++)m(H.location+st);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let st=0;st<H.locationSize;st++)x(H.location+st,xt/H.locationSize,F,mt,xt*K,xt/H.locationSize*st*K,yt)}}else if(U!==void 0){const mt=U[Y];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(H.location,mt);break;case 3:i.vertexAttrib3fv(H.location,mt);break;case 4:i.vertexAttrib4fv(H.location,mt);break;default:i.vertexAttrib1fv(H.location,mt)}}}}M()}function b(){L();for(const y in n){const C=n[y];for(const z in C){const B=C[z];for(const q in B)h(B[q].object),delete B[q];delete C[z]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const z in C){const B=C[z];for(const q in B)h(B[q].object),delete B[q];delete C[z]}delete n[y.id]}function A(y){for(const C in n){const z=n[C];if(z[y.id]===void 0)continue;const B=z[y.id];for(const q in B)h(B[q].object),delete B[q];delete z[y.id]}}function L(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function em(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];e.update(u,n,1)}function l(c,h,d,f){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==dn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===Bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mn&&!L)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:b,maxSamples:T}}function im(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Zn,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,x=M*4;let v=p.clippingState||null;l.value=v,v=h(g,f,x,u);for(let b=0;b!==x;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=u+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=u;x!==_;++x,v+=4)o.copy(d[x]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function sm(i){let t=new WeakMap;function e(o,a){return a===Go?o.mapping=Ji:a===Vo&&(o.mapping=Qi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Go||a===Vo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class vh extends mh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xi=4,wl=[.125,.215,.35,.446,.526,.582],fi=20,po=new vh,El=new Ot;let mo=null,go=0,_o=0,vo=!1;const ui=(1+Math.sqrt(5))/2,Fi=1/ui,Tl=[new D(-ui,Fi,0),new D(ui,Fi,0),new D(-Fi,0,ui),new D(Fi,0,ui),new D(0,ui,-Fi),new D(0,ui,Fi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class _a{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mo,go,_o),this._renderer.xr.enabled=vo,t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Bs,format:dn,colorSpace:as,depthBuffer:!1},s=Al(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rm(r)),this._blurMaterial=om(r,t,e)}return s}_compileMaterial(t){const e=new it(this._lodPlanes[0],t);this._renderer.compile(e,po)}_sceneToCubeUV(t,e,n,s){const a=new je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(El),h.toneMapping=ei,h.autoClear=!1;const u=new Ns({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new it(new Jt,u);let _=!1;const m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,_=!0):(u.color.copy(El),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;ur(s,M*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ji||t.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,po)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tl[(s-r-1)%Tl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new it(this._lodPlanes[s],c),f=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*fi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):fi;m>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const p=[];let M=0;for(let A=0;A<fi;++A){const L=A/_,w=Math.exp(-L*L/2);p.push(w),A===0?M+=w:A<m&&(M+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[s],b=3*v*(s>x-Xi?s-x+Xi:0),T=4*(this._cubeSize-v);ur(e,b,T,3*v,2*v),l.setRenderTarget(e),l.render(d,po)}}function rm(i){const t=[],e=[],n=[];let s=i;const r=i-Xi+1+wl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Xi?l=wl[o-i+Xi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*u),x=new Float32Array(m*g*u),v=new Float32Array(p*g*u);for(let T=0;T<u;T++){const A=T%3*2/3-1,L=T>2?0:-1,w=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];M.set(w,_*g*T),x.set(f,m*g*T);const y=[T,T,T,T,T,T];v.set(y,p*g*T)}const b=new de;b.setAttribute("position",new Oe(M,_)),b.setAttribute("uv",new Oe(x,m)),b.setAttribute("faceIndex",new Oe(v,p)),t.push(b),s>Xi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Al(i,t,e){const n=new _i(i,t,e);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function om(i,t,e){const n=new Float32Array(fi),s=new D(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Na(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Rl(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Cl(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Na(){return`

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
	`}function am(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Go||l===Vo,h=l===Ji||l===Qi;if(c||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new _a(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new _a(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function lm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cm(i,t,e,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const u=d.morphAttributes;for(const g in u){const _=u[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(d){const f=[],u=d.index,g=d.attributes.position;let _=0;if(u!==null){const M=u.array;_=u.version;for(let x=0,v=M.length;x<v;x+=3){const b=M[x+0],T=M[x+1],A=M[x+2];f.push(b,T,T,A,A,b)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const b=x+0,T=x+1,A=x+2;f.push(b,T,T,A,A,b)}}else return;const m=new(ah(f)?dh:uh)(f,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const f=r.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function hm(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,f*o,g),e.update(u,n,g))}function h(f,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,n,1)}function d(f,u,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,u[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=u[M]*_[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function um(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dm(i,t,e){const n=new WeakMap,s=new ve;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let y=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var u=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let b=a.attributes.position.count*v,T=1;b>t.maxTextureSize&&(T=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const A=new Float32Array(b*T*4*d),L=new ch(A,b,T,d);L.type=Mn,L.needsUpdate=!0;const w=v*4;for(let C=0;C<d;C++){const z=p[C],B=M[C],q=x[C],j=b*T*4*C;for(let U=0;U<z.count;U++){const Y=U*w;g===!0&&(s.fromBufferAttribute(z,U),A[j+Y+0]=s.x,A[j+Y+1]=s.y,A[j+Y+2]=s.z,A[j+Y+3]=0),_===!0&&(s.fromBufferAttribute(B,U),A[j+Y+4]=s.x,A[j+Y+5]=s.y,A[j+Y+6]=s.z,A[j+Y+7]=0),m===!0&&(s.fromBufferAttribute(q,U),A[j+Y+8]=s.x,A[j+Y+9]=s.y,A[j+Y+10]=s.z,A[j+Y+11]=q.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new at(b,T)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function fm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class xh extends Ne{constructor(t,e,n,s,r,o,a,l,c,h=ji){if(h!==ji&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=gi),n===void 0&&h===es&&(n=ts),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Mh=new Ne,Pl=new xh(1,1),yh=new ch,bh=new Qu,Sh=new gh,Ll=[],Dl=[],Il=new Float32Array(16),Ul=new Float32Array(9),Nl=new Float32Array(4);function hs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ll[s];if(r===void 0&&(r=new Float32Array(s),Ll[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hr(i,t){let e=Dl[t];e===void 0&&(e=new Int32Array(t),Dl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function vm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;Nl.set(n),i.uniformMatrix2fv(this.addr,!1,Nl),we(e,n)}}function xm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;Ul.set(n),i.uniformMatrix3fv(this.addr,!1,Ul),we(e,n)}}function Mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;Il.set(n),i.uniformMatrix4fv(this.addr,!1,Il),we(e,n)}}function ym(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function Em(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function Cm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pl.compareFunction=oh,r=Pl):r=Mh,e.setTexture2D(t||r,s)}function Pm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bh,s)}function Lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sh,s)}function Dm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yh,s)}function Im(i){switch(i){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return _m;case 35674:return vm;case 35675:return xm;case 35676:return Mm;case 5124:case 35670:return ym;case 35667:case 35671:return bm;case 35668:case 35672:return Sm;case 35669:case 35673:return wm;case 5125:return Em;case 36294:return Tm;case 36295:return Am;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Dm}}function Um(i,t){i.uniform1fv(this.addr,t)}function Nm(i,t){const e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function Om(i,t){const e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function Fm(i,t){const e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function km(i,t){const e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function zm(i,t){const e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bm(i,t){const e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Hm(i,t){i.uniform1iv(this.addr,t)}function Gm(i,t){i.uniform2iv(this.addr,t)}function Vm(i,t){i.uniform3iv(this.addr,t)}function Wm(i,t){i.uniform4iv(this.addr,t)}function Xm(i,t){i.uniform1uiv(this.addr,t)}function qm(i,t){i.uniform2uiv(this.addr,t)}function Ym(i,t){i.uniform3uiv(this.addr,t)}function $m(i,t){i.uniform4uiv(this.addr,t)}function jm(i,t,e){const n=this.cache,s=t.length,r=Hr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Mh,r[o])}function Zm(i,t,e){const n=this.cache,s=t.length,r=Hr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||bh,r[o])}function Km(i,t,e){const n=this.cache,s=t.length,r=Hr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Sh,r[o])}function Jm(i,t,e){const n=this.cache,s=t.length,r=Hr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yh,r[o])}function Qm(i){switch(i){case 5126:return Um;case 35664:return Nm;case 35665:return Om;case 35666:return Fm;case 35674:return km;case 35675:return zm;case 35676:return Bm;case 5124:case 35670:return Hm;case 35667:case 35671:return Gm;case 35668:case 35672:return Vm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return $m;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Jm}}class t0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Im(e.type)}}class e0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qm(e.type)}}class n0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function Ol(i,t){i.seq.push(t),i.map[t.id]=t}function i0(i,t,e){const n=i.name,s=n.length;for(xo.lastIndex=0;;){const r=xo.exec(n),o=xo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ol(e,c===void 0?new t0(a,i,t):new e0(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new n0(a),Ol(e,d)),e=d}}}class Dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);i0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Fl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const s0=37297;let r0=0;function o0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const kl=new Yt;function a0(i){ie._getMatrix(kl,ie.workingColorSpace,i);const t=`mat3( ${kl.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case zr:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+o0(i.getShaderSource(t),o)}else return s}function l0(i,t){const e=a0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function c0(i,t){let e;switch(t){case du:e="Linear";break;case fu:e="Reinhard";break;case pu:e="Cineon";break;case $c:e="ACESFilmic";break;case gu:e="AgX";break;case _u:e="Neutral";break;case mu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const dr=new D;function h0(){ie.getLuminanceCoefficients(dr);const i=dr.x.toFixed(4),t=dr.y.toFixed(4),e=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function d0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function f0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Rs(i){return i!==""}function Bl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const p0=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(i){return i.replace(p0,g0)}const m0=new Map;function g0(i,t){let e=jt[t];if(e===void 0){const n=m0.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return va(e)}const _0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(i){return i.replace(_0,v0)}function v0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function x0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function M0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case Qi:t="ENVMAP_TYPE_CUBE";break;case kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function y0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qi:t="ENVMAP_MODE_REFRACTION";break}return t}function b0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yc:t="ENVMAP_BLENDING_MULTIPLY";break;case hu:t="ENVMAP_BLENDING_MIX";break;case uu:t="ENVMAP_BLENDING_ADD";break}return t}function S0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function w0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=x0(e),c=M0(e),h=y0(e),d=b0(e),f=S0(e),u=u0(e),g=d0(r),_=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(m=[Vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[Vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?jt.tonemapping_pars_fragment:"",e.toneMapping!==ei?c0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,l0("linearToOutputTexel",e.outputColorSpace),h0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),o=va(o),o=Bl(o,e),o=Hl(o,e),a=va(a),a=Bl(a,e),a=Hl(a,e),o=Gl(o),a=Gl(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+o,v=M+p+a,b=Fl(s,s.VERTEX_SHADER,x),T=Fl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,b),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(b).trim(),q=s.getShaderInfoLog(T).trim();let j=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,T);else{const Y=zl(s,b,"vertex"),H=zl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+Y+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||q==="")&&(U=!1);U&&(C.diagnostics={runnable:j,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(b),s.deleteShader(T),L=new Dr(s,_),w=f0(s,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,s0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=r0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let E0=0;class T0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new A0(t),e.set(t,n)),n}}class A0{constructor(t){this.id=E0++,this.code=t,this.usedTimes=0}}function R0(i,t,e,n,s,r,o){const a=new Ia,l=new T0,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let u=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,y,C,z,B){const q=z.fog,j=B.geometry,U=w.isMeshStandardMaterial?z.environment:null,Y=(w.isMeshStandardMaterial?e:t).get(w.envMap||U),H=Y&&Y.mapping===kr?Y.image.height:null,ut=g[w.type];w.precision!==null&&(u=s.getMaxPrecision(w.precision),u!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",u,"instead."));const mt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xt=mt!==void 0?mt.length:0;let Nt=0;j.morphAttributes.position!==void 0&&(Nt=1),j.morphAttributes.normal!==void 0&&(Nt=2),j.morphAttributes.color!==void 0&&(Nt=3);let Qt,F,K,yt;if(ut){const re=vn[ut];Qt=re.vertexShader,F=re.fragmentShader}else Qt=w.vertexShader,F=w.fragmentShader,l.update(w),K=l.getVertexShaderID(w),yt=l.getFragmentShaderID(w);const st=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),Lt=B.isInstancedMesh===!0,Ht=B.isBatchedMesh===!0,te=!!w.map,et=!!w.matcap,lt=!!Y,P=!!w.aoMap,ct=!!w.lightMap,rt=!!w.bumpMap,St=!!w.normalMap,pt=!!w.displacementMap,zt=!!w.emissiveMap,Et=!!w.metalnessMap,R=!!w.roughnessMap,S=w.anisotropy>0,G=w.clearcoat>0,J=w.dispersion>0,nt=w.iridescence>0,Q=w.sheen>0,Pt=w.transmission>0,_t=S&&!!w.anisotropyMap,At=G&&!!w.clearcoatMap,Kt=G&&!!w.clearcoatNormalMap,ht=G&&!!w.clearcoatRoughnessMap,Tt=nt&&!!w.iridescenceMap,Gt=nt&&!!w.iridescenceThicknessMap,$=Q&&!!w.sheenColorMap,Z=Q&&!!w.sheenRoughnessMap,dt=!!w.specularMap,bt=!!w.specularColorMap,kt=!!w.specularIntensityMap,I=Pt&&!!w.transmissionMap,ot=Pt&&!!w.thicknessMap,V=!!w.gradientMap,tt=!!w.alphaMap,gt=w.alphaTest>0,Mt=!!w.alphaHash,Wt=!!w.extensions;let ge=ei;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ge=i.toneMapping);const Ee={shaderID:ut,shaderType:w.type,shaderName:w.name,vertexShader:Qt,fragmentShader:F,defines:w.defines,customVertexShaderID:K,customFragmentShaderID:yt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:u,batching:Ht,batchingColor:Ht&&B._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&B.instanceColor!==null,instancingMorph:Lt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:as,alphaToCoverage:!!w.alphaToCoverage,map:te,matcap:et,envMap:lt,envMapMode:lt&&Y.mapping,envMapCubeUVHeight:H,aoMap:P,lightMap:ct,bumpMap:rt,normalMap:St,displacementMap:f&&pt,emissiveMap:zt,normalMapObjectSpace:St&&w.normalMapType===yu,normalMapTangentSpace:St&&w.normalMapType===rh,metalnessMap:Et,roughnessMap:R,anisotropy:S,anisotropyMap:_t,clearcoat:G,clearcoatMap:At,clearcoatNormalMap:Kt,clearcoatRoughnessMap:ht,dispersion:J,iridescence:nt,iridescenceMap:Tt,iridescenceThicknessMap:Gt,sheen:Q,sheenColorMap:$,sheenRoughnessMap:Z,specularMap:dt,specularColorMap:bt,specularIntensityMap:kt,transmission:Pt,transmissionMap:I,thicknessMap:ot,gradientMap:V,opaque:w.transparent===!1&&w.blending===$i&&w.alphaToCoverage===!1,alphaMap:tt,alphaTest:gt,alphaHash:Mt,combine:w.combine,mapUv:te&&_(w.map.channel),aoMapUv:P&&_(w.aoMap.channel),lightMapUv:ct&&_(w.lightMap.channel),bumpMapUv:rt&&_(w.bumpMap.channel),normalMapUv:St&&_(w.normalMap.channel),displacementMapUv:pt&&_(w.displacementMap.channel),emissiveMapUv:zt&&_(w.emissiveMap.channel),metalnessMapUv:Et&&_(w.metalnessMap.channel),roughnessMapUv:R&&_(w.roughnessMap.channel),anisotropyMapUv:_t&&_(w.anisotropyMap.channel),clearcoatMapUv:At&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:$&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Z&&_(w.sheenRoughnessMap.channel),specularMapUv:dt&&_(w.specularMap.channel),specularColorMapUv:bt&&_(w.specularColorMap.channel),specularIntensityMapUv:kt&&_(w.specularIntensityMap.channel),transmissionMapUv:I&&_(w.transmissionMap.channel),thicknessMapUv:ot&&_(w.thicknessMap.channel),alphaMapUv:tt&&_(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(St||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(te||tt),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Rt,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Nt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:te&&w.map.isVideoTexture===!0&&ie.getTransfer(w.map.colorSpace)===ce,decodeVideoTextureEmissive:zt&&w.emissiveMap.isVideoTexture===!0&&ie.getTransfer(w.emissiveMap.colorSpace)===ce,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ze,flipSided:w.side===Be,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Wt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&w.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)y.push(C),y.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(M(y,w),x(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function M(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function x(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const y=g[w.type];let C;if(y){const z=vn[y];C=ph.clone(z.uniforms)}else C=w.uniforms;return C}function b(w,y){let C;for(let z=0,B=h.length;z<B;z++){const q=h[z];if(q.cacheKey===y){C=q,++C.usedTimes;break}}return C===void 0&&(C=new w0(i,y,w,r),h.push(C)),C}function T(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function A(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:L}}function C0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function P0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,u,g,_,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function a(d,f,u,g,_,m){const p=o(d,f,u,g,_,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):e.push(p)}function l(d,f,u,g,_,m){const p=o(d,f,u,g,_,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,f){e.length>1&&e.sort(d||P0),n.length>1&&n.sort(f||Wl),s.length>1&&s.sort(f||Wl)}function h(){for(let d=t,f=i.length;d<f;d++){const u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function L0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Xl,i.set(n,[o])):s>=r.length?(o=new Xl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function D0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ot};break;case"SpotLight":e={position:new D,direction:new D,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function I0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let U0=0;function N0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function O0(i){const t=new D0,e=I0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new ne,o=new ne;function a(c){let h=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let u=0,g=0,_=0,m=0,p=0,M=0,x=0,v=0,b=0,T=0,A=0;c.sort(N0);for(let w=0,y=c.length;w<y;w++){const C=c[w],z=C.color,B=C.intensity,q=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*B,d+=z.g*B,f+=z.b*B;else if(C.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(C.sh.coefficients[U],B);A++}else if(C.isDirectionalLight){const U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,H=e.get(C);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[u]=H,n.directionalShadowMap[u]=j,n.directionalShadowMatrix[u]=C.shadow.matrix,M++}n.directional[u]=U,u++}else if(C.isSpotLight){const U=t.get(C);U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(z).multiplyScalar(B),U.distance=q,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,n.spot[_]=U;const Y=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,Y.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=Y.matrix,C.castShadow){const H=e.get(C);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=j,v++}_++}else if(C.isRectAreaLight){const U=t.get(C);U.color.copy(z).multiplyScalar(B),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=U,m++}else if(C.isPointLight){const U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow){const Y=C.shadow,H=e.get(C);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=C.shadow.matrix,x++}n.point[g]=U,g++}else if(C.isHemisphereLight){const U=t.get(C);U.skyColor.copy(C.color).multiplyScalar(B),U.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[p]=U,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==u||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==M||L.numPointShadows!==x||L.numSpotShadows!==v||L.numSpotMaps!==b||L.numLightProbes!==A)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,L.directionalLength=u,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=M,L.numPointShadows=x,L.numSpotShadows=v,L.numSpotMaps=b,L.numLightProbes=A,n.version=U0++)}function l(c,h){let d=0,f=0,u=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isSpotLight){const v=n.spot[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function ql(i){const t=new O0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function F0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ql(i),t.set(s,[a])):r>=o.length?(a=new ql(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class k0 extends cs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class z0 extends cs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H0=`uniform sampler2D shadow_pass;
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
}`;function G0(i,t,e){let n=new Ua;const s=new at,r=new at,o=new ve,a=new k0({depthPacking:Mu}),l=new z0,c={},h=e.maxTextureSize,d={[ni]:Be,[Be]:ni,[ze]:ze},f=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:B0,fragmentShader:H0}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const g=new de;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new it(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let p=this.type;this.render=function(T,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ti),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=p!==Nn&&this.type===Nn,q=p===Nn&&this.type!==Nn;for(let j=0,U=T.length;j<U;j++){const Y=T[j],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ut=H.getFrameExtents();if(s.multiply(ut),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,H.mapSize.y=r.y)),H.map===null||B===!0||q===!0){const xt=this.type!==Nn?{minFilter:Ze,magFilter:Ze}:{};H.map!==null&&H.map.dispose(),H.map=new _i(s.x,s.y,xt),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const mt=H.getViewportCount();for(let xt=0;xt<mt;xt++){const Nt=H.getViewport(xt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),z.viewport(o),H.updateMatrices(Y,xt),n=H.getFrustum(),v(A,L,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Nn&&M(H,L),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,y,C)};function M(T,A){const L=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new _i(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,L,f,_,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,L,u,_,null)}function x(T,A,L,w){let y=null;const C=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)y=C;else if(y=L.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=y.uuid,B=A.uuid;let q=c[z];q===void 0&&(q={},c[z]=q);let j=q[B];j===void 0&&(j=y.clone(),q[B]=j,A.addEventListener("dispose",b)),y=j}if(y.visible=A.visible,y.wireframe=A.wireframe,w===Nn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=i.properties.get(y);z.light=L}return y}function v(T,A,L,w,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Nn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const B=t.update(T),q=T.material;if(Array.isArray(q)){const j=B.groups;for(let U=0,Y=j.length;U<Y;U++){const H=j[U],ut=q[H.materialIndex];if(ut&&ut.visible){const mt=x(T,ut,w,y);T.onBeforeShadow(i,T,A,L,B,mt,H),i.renderBufferDirect(L,null,B,mt,T,H),T.onAfterShadow(i,T,A,L,B,mt,H)}}}else if(q.visible){const j=x(T,q,w,y);T.onBeforeShadow(i,T,A,L,B,j,null),i.renderBufferDirect(L,null,B,j,T,null),T.onAfterShadow(i,T,A,L,B,j,null)}}const z=T.children;for(let B=0,q=z.length;B<q;B++)v(z[B],A,L,w,y)}function b(T){T.target.removeEventListener("dispose",b);for(const L in c){const w=c[L],y=T.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const V0={[No]:Oo,[Fo]:Bo,[ko]:Ho,[Ki]:zo,[Oo]:No,[Bo]:Fo,[Ho]:ko,[zo]:Ki};function W0(i,t){function e(){let I=!1;const ot=new ve;let V=null;const tt=new ve(0,0,0,0);return{setMask:function(gt){V!==gt&&!I&&(i.colorMask(gt,gt,gt,gt),V=gt)},setLocked:function(gt){I=gt},setClear:function(gt,Mt,Wt,ge,Ee){Ee===!0&&(gt*=ge,Mt*=ge,Wt*=ge),ot.set(gt,Mt,Wt,ge),tt.equals(ot)===!1&&(i.clearColor(gt,Mt,Wt,ge),tt.copy(ot))},reset:function(){I=!1,V=null,tt.set(-1,0,0,0)}}}function n(){let I=!1,ot=!1,V=null,tt=null,gt=null;return{setReversed:function(Mt){if(ot!==Mt){const Wt=t.get("EXT_clip_control");ot?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const ge=gt;gt=null,this.setClear(ge)}ot=Mt},getReversed:function(){return ot},setTest:function(Mt){Mt?st(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(Mt){V!==Mt&&!I&&(i.depthMask(Mt),V=Mt)},setFunc:function(Mt){if(ot&&(Mt=V0[Mt]),tt!==Mt){switch(Mt){case No:i.depthFunc(i.NEVER);break;case Oo:i.depthFunc(i.ALWAYS);break;case Fo:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case zo:i.depthFunc(i.GEQUAL);break;case Bo:i.depthFunc(i.GREATER);break;case Ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=Mt}},setLocked:function(Mt){I=Mt},setClear:function(Mt){gt!==Mt&&(ot&&(Mt=1-Mt),i.clearDepth(Mt),gt=Mt)},reset:function(){I=!1,V=null,tt=null,gt=null,ot=!1}}}function s(){let I=!1,ot=null,V=null,tt=null,gt=null,Mt=null,Wt=null,ge=null,Ee=null;return{setTest:function(re){I||(re?st(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(re){ot!==re&&!I&&(i.stencilMask(re),ot=re)},setFunc:function(re,He,Ge){(V!==re||tt!==He||gt!==Ge)&&(i.stencilFunc(re,He,Ge),V=re,tt=He,gt=Ge)},setOp:function(re,He,Ge){(Mt!==re||Wt!==He||ge!==Ge)&&(i.stencilOp(re,He,Ge),Mt=re,Wt=He,ge=Ge)},setLocked:function(re){I=re},setClear:function(re){Ee!==re&&(i.clearStencil(re),Ee=re)},reset:function(){I=!1,ot=null,V=null,tt=null,gt=null,Mt=null,Wt=null,ge=null,Ee=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,u=[],g=null,_=!1,m=null,p=null,M=null,x=null,v=null,b=null,T=null,A=new Ot(0,0,0),L=0,w=!1,y=null,C=null,z=null,B=null,q=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,Y=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),U=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),U=Y>=2);let ut=null,mt={};const xt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Qt=new ve().fromArray(xt),F=new ve().fromArray(Nt);function K(I,ot,V,tt){const gt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(I,Mt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<V;Wt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(ot+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return Mt}const yt={};yt[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(Ki),rt(!1),St(ja),st(i.CULL_FACE),P(ti);function st(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Rt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Lt(I,ot){return d[I]!==ot?(i.bindFramebuffer(I,ot),d[I]=ot,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ot),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Ht(I,ot){let V=u,tt=!1;if(I){V=f.get(ot),V===void 0&&(V=[],f.set(ot,V));const gt=I.textures;if(V.length!==gt.length||V[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Wt=gt.length;Mt<Wt;Mt++)V[Mt]=i.COLOR_ATTACHMENT0+Mt;V.length=gt.length,tt=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,tt=!0);tt&&i.drawBuffers(V)}function te(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const et={[di]:i.FUNC_ADD,[Yh]:i.FUNC_SUBTRACT,[$h]:i.FUNC_REVERSE_SUBTRACT};et[jh]=i.MIN,et[Zh]=i.MAX;const lt={[Kh]:i.ZERO,[Jh]:i.ONE,[Qh]:i.SRC_COLOR,[Io]:i.SRC_ALPHA,[ru]:i.SRC_ALPHA_SATURATE,[iu]:i.DST_COLOR,[eu]:i.DST_ALPHA,[tu]:i.ONE_MINUS_SRC_COLOR,[Uo]:i.ONE_MINUS_SRC_ALPHA,[su]:i.ONE_MINUS_DST_COLOR,[nu]:i.ONE_MINUS_DST_ALPHA,[ou]:i.CONSTANT_COLOR,[au]:i.ONE_MINUS_CONSTANT_COLOR,[lu]:i.CONSTANT_ALPHA,[cu]:i.ONE_MINUS_CONSTANT_ALPHA};function P(I,ot,V,tt,gt,Mt,Wt,ge,Ee,re){if(I===ti){_===!0&&(Rt(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),I!==qh){if(I!==m||re!==w){if((p!==di||v!==di)&&(i.blendEquation(i.FUNC_ADD),p=di,v=di),re)switch(I){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Za:i.blendFunc(i.ONE,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ja:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Za:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ja:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,x=null,b=null,T=null,A.set(0,0,0),L=0,m=I,w=re}return}gt=gt||ot,Mt=Mt||V,Wt=Wt||tt,(ot!==p||gt!==v)&&(i.blendEquationSeparate(et[ot],et[gt]),p=ot,v=gt),(V!==M||tt!==x||Mt!==b||Wt!==T)&&(i.blendFuncSeparate(lt[V],lt[tt],lt[Mt],lt[Wt]),M=V,x=tt,b=Mt,T=Wt),(ge.equals(A)===!1||Ee!==L)&&(i.blendColor(ge.r,ge.g,ge.b,Ee),A.copy(ge),L=Ee),m=I,w=!1}function ct(I,ot){I.side===ze?Rt(i.CULL_FACE):st(i.CULL_FACE);let V=I.side===Be;ot&&(V=!V),rt(V),I.blending===$i&&I.transparent===!1?P(ti):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const tt=I.stencilWrite;a.setTest(tt),tt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),zt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function St(I){I!==Wh?(st(i.CULL_FACE),I!==C&&(I===ja?i.cullFace(i.BACK):I===Xh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),C=I}function pt(I){I!==z&&(U&&i.lineWidth(I),z=I)}function zt(I,ot,V){I?(st(i.POLYGON_OFFSET_FILL),(B!==ot||q!==V)&&(i.polygonOffset(ot,V),B=ot,q=V)):Rt(i.POLYGON_OFFSET_FILL)}function Et(I){I?st(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function R(I){I===void 0&&(I=i.TEXTURE0+j-1),ut!==I&&(i.activeTexture(I),ut=I)}function S(I,ot,V){V===void 0&&(ut===null?V=i.TEXTURE0+j-1:V=ut);let tt=mt[V];tt===void 0&&(tt={type:void 0,texture:void 0},mt[V]=tt),(tt.type!==I||tt.texture!==ot)&&(ut!==V&&(i.activeTexture(V),ut=V),i.bindTexture(I,ot||yt[I]),tt.type=I,tt.texture=ot)}function G(){const I=mt[ut];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(I){Qt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Qt.copy(I))}function Z(I){F.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),F.copy(I))}function dt(I,ot){let V=c.get(ot);V===void 0&&(V=new WeakMap,c.set(ot,V));let tt=V.get(I);tt===void 0&&(tt=i.getUniformBlockIndex(ot,I.name),V.set(I,tt))}function bt(I,ot){const tt=c.get(ot).get(I);l.get(ot)!==tt&&(i.uniformBlockBinding(ot,tt,I.__bindingPointIndex),l.set(ot,tt))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ut=null,mt={},d={},f=new WeakMap,u=[],g=null,_=!1,m=null,p=null,M=null,x=null,v=null,b=null,T=null,A=new Ot(0,0,0),L=0,w=!1,y=null,C=null,z=null,B=null,q=null,Qt.set(0,0,i.canvas.width,i.canvas.height),F.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:Rt,bindFramebuffer:Lt,drawBuffers:Ht,useProgram:te,setBlending:P,setMaterial:ct,setFlipSided:rt,setCullFace:St,setLineWidth:pt,setPolygonOffset:zt,setScissorTest:Et,activeTexture:R,bindTexture:S,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:nt,texImage2D:Tt,texImage3D:Gt,updateUBOMapping:dt,uniformBlockBinding:bt,texStorage2D:Kt,texStorage3D:ht,texSubImage2D:Q,texSubImage3D:Pt,compressedTexSubImage2D:_t,compressedTexSubImage3D:At,scissor:$,viewport:Z,reset:kt}}function Yl(i,t,e,n){const s=X0(n);switch(e){case Qc:return i*t;case eh:return i*t;case nh:return i*t*2;case Ra:return i*t/s.components*s.byteLength;case Ca:return i*t/s.components*s.byteLength;case ih:return i*t*2/s.components*s.byteLength;case Pa:return i*t*2/s.components*s.byteLength;case th:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case La:return i*t*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qo:case $o:return Math.max(i,16)*Math.max(t,8)/4;case Xo:case Yo:return Math.max(i,8)*Math.max(t,8)/2;case jo:case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ta:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case na:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ia:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case oa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ha:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ua:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Lr:case da:case fa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sh:case pa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ma:case ga:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function X0(i){switch(i){case kn:case Zc:return{byteLength:1,components:1};case Is:case Kc:case Bs:return{byteLength:2,components:1};case Ta:case Aa:return{byteLength:2,components:4};case gi:case Ea:case Mn:return{byteLength:4,components:1};case Jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function q0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap;let d;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return u?new OffscreenCanvas(R,S):Nr("canvas")}function _(R,S,G){let J=1;const nt=Et(R);if((nt.width>G||nt.height>G)&&(J=G/Math.max(nt.width,nt.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(J*nt.width),Pt=Math.floor(J*nt.height);d===void 0&&(d=g(Q,Pt));const _t=S?g(Q,Pt):d;return _t.width=Q,_t.height=Pt,_t.getContext("2d").drawImage(R,0,0,Q,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Q+"x"+Pt+")."),_t}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,S,G,J,nt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=S;if(S===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),S===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),S===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),S===i.RGBA){const Pt=nt?zr:ie.getTransfer(J);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=Pt===ce?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(R,S){let G;return R?S===null||S===gi||S===ts?G=i.DEPTH24_STENCIL8:S===Mn?G=i.DEPTH32F_STENCIL8:S===Is&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===gi||S===ts?G=i.DEPTH_COMPONENT24:S===Mn?G=i.DEPTH_COMPONENT32F:S===Is&&(G=i.DEPTH_COMPONENT16),G}function b(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ze&&R.minFilter!==xn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){const S=R.target;S.removeEventListener("dispose",T),L(S),S.isVideoTexture&&h.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),y(S)}function L(R){const S=n.get(R);if(S.__webglInit===void 0)return;const G=R.source,J=f.get(G);if(J){const nt=J[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&w(R),Object.keys(J).length===0&&f.delete(G)}n.remove(R)}function w(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const G=R.source,J=f.get(G);delete J[S.__cacheKey],o.memory.textures--}function y(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let nt=0;nt<S.__webglFramebuffer[J].length;nt++)i.deleteFramebuffer(S.__webglFramebuffer[J][nt]);else i.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=R.textures;for(let J=0,nt=G.length;J<nt;J++){const Q=n.get(G[J]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(R)}let C=0;function z(){C=0}function B(){const R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function q(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function j(R,S){const G=n.get(R);if(R.isVideoTexture&&pt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(G,R,S);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function U(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){F(G,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function Y(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){F(G,R,S);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function H(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){K(G,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}const ut={[Ir]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[Wo]:i.MIRRORED_REPEAT},mt={[Ze]:i.NEAREST,[vu]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},xt={[bu]:i.NEVER,[Ru]:i.ALWAYS,[Su]:i.LESS,[oh]:i.LEQUAL,[wu]:i.EQUAL,[Au]:i.GEQUAL,[Eu]:i.GREATER,[Tu]:i.NOTEQUAL};function Nt(R,S){if(S.type===Mn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===xn||S.magFilter===qr||S.magFilter===qs||S.magFilter===mi||S.minFilter===xn||S.minFilter===qr||S.minFilter===qs||S.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ut[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ut[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ut[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,mt[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,mt[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,xt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ze||S.minFilter!==qs&&S.minFilter!==mi||S.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Qt(R,S){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));const J=S.source;let nt=f.get(J);nt===void 0&&(nt={},f.set(J,nt));const Q=q(S);if(Q!==R.__cacheKey){nt[Q]===void 0&&(nt[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),nt[Q].usedTimes++;const Pt=nt[R.__cacheKey];Pt!==void 0&&(nt[R.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(S)),R.__cacheKey=Q,R.__webglTexture=nt[Q].texture}return G}function F(R,S,G){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);const nt=Qt(R,S),Q=S.source;e.bindTexture(J,R.__webglTexture,i.TEXTURE0+G);const Pt=n.get(Q);if(Q.version!==Pt.__version||nt===!0){e.activeTexture(i.TEXTURE0+G);const _t=ie.getPrimaries(ie.workingColorSpace),At=S.colorSpace===Kn?null:ie.getPrimaries(S.colorSpace),Kt=S.colorSpace===Kn||_t===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let ht=_(S.image,!1,s.maxTextureSize);ht=zt(S,ht);const Tt=r.convert(S.format,S.colorSpace),Gt=r.convert(S.type);let $=x(S.internalFormat,Tt,Gt,S.colorSpace,S.isVideoTexture);Nt(J,S);let Z;const dt=S.mipmaps,bt=S.isVideoTexture!==!0,kt=Pt.__version===void 0||nt===!0,I=Q.dataReady,ot=b(S,ht);if(S.isDepthTexture)$=v(S.format===es,S.type),kt&&(bt?e.texStorage2D(i.TEXTURE_2D,1,$,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,$,ht.width,ht.height,0,Tt,Gt,null));else if(S.isDataTexture)if(dt.length>0){bt&&kt&&e.texStorage2D(i.TEXTURE_2D,ot,$,dt[0].width,dt[0].height);for(let V=0,tt=dt.length;V<tt;V++)Z=dt[V],bt?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,Z.width,Z.height,Tt,Gt,Z.data):e.texImage2D(i.TEXTURE_2D,V,$,Z.width,Z.height,0,Tt,Gt,Z.data);S.generateMipmaps=!1}else bt?(kt&&e.texStorage2D(i.TEXTURE_2D,ot,$,ht.width,ht.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,Tt,Gt,ht.data)):e.texImage2D(i.TEXTURE_2D,0,$,ht.width,ht.height,0,Tt,Gt,ht.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){bt&&kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,$,dt[0].width,dt[0].height,ht.depth);for(let V=0,tt=dt.length;V<tt;V++)if(Z=dt[V],S.format!==dn)if(Tt!==null)if(bt){if(I)if(S.layerUpdates.size>0){const gt=Yl(Z.width,Z.height,S.format,S.type);for(const Mt of S.layerUpdates){const Wt=Z.data.subarray(Mt*gt/Z.data.BYTES_PER_ELEMENT,(Mt+1)*gt/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,Mt,Z.width,Z.height,1,Tt,Wt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Z.width,Z.height,ht.depth,Tt,Z.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,$,Z.width,Z.height,ht.depth,0,Z.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else bt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Z.width,Z.height,ht.depth,Tt,Gt,Z.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,$,Z.width,Z.height,ht.depth,0,Tt,Gt,Z.data)}else{bt&&kt&&e.texStorage2D(i.TEXTURE_2D,ot,$,dt[0].width,dt[0].height);for(let V=0,tt=dt.length;V<tt;V++)Z=dt[V],S.format!==dn?Tt!==null?bt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,Z.width,Z.height,Tt,Z.data):e.compressedTexImage2D(i.TEXTURE_2D,V,$,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,Z.width,Z.height,Tt,Gt,Z.data):e.texImage2D(i.TEXTURE_2D,V,$,Z.width,Z.height,0,Tt,Gt,Z.data)}else if(S.isDataArrayTexture)if(bt){if(kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,$,ht.width,ht.height,ht.depth),I)if(S.layerUpdates.size>0){const V=Yl(ht.width,ht.height,S.format,S.type);for(const tt of S.layerUpdates){const gt=ht.data.subarray(tt*V/ht.data.BYTES_PER_ELEMENT,(tt+1)*V/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,ht.width,ht.height,1,Tt,Gt,gt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Gt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,ht.width,ht.height,ht.depth,0,Tt,Gt,ht.data);else if(S.isData3DTexture)bt?(kt&&e.texStorage3D(i.TEXTURE_3D,ot,$,ht.width,ht.height,ht.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Gt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,$,ht.width,ht.height,ht.depth,0,Tt,Gt,ht.data);else if(S.isFramebufferTexture){if(kt)if(bt)e.texStorage2D(i.TEXTURE_2D,ot,$,ht.width,ht.height);else{let V=ht.width,tt=ht.height;for(let gt=0;gt<ot;gt++)e.texImage2D(i.TEXTURE_2D,gt,$,V,tt,0,Tt,Gt,null),V>>=1,tt>>=1}}else if(dt.length>0){if(bt&&kt){const V=Et(dt[0]);e.texStorage2D(i.TEXTURE_2D,ot,$,V.width,V.height)}for(let V=0,tt=dt.length;V<tt;V++)Z=dt[V],bt?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,Tt,Gt,Z):e.texImage2D(i.TEXTURE_2D,V,$,Tt,Gt,Z);S.generateMipmaps=!1}else if(bt){if(kt){const V=Et(ht);e.texStorage2D(i.TEXTURE_2D,ot,$,V.width,V.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Gt,ht)}else e.texImage2D(i.TEXTURE_2D,0,$,Tt,Gt,ht);m(S)&&p(J),Pt.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function K(R,S,G){if(S.image.length!==6)return;const J=Qt(R,S),nt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const Q=n.get(nt);if(nt.version!==Q.__version||J===!0){e.activeTexture(i.TEXTURE0+G);const Pt=ie.getPrimaries(ie.workingColorSpace),_t=S.colorSpace===Kn?null:ie.getPrimaries(S.colorSpace),At=S.colorSpace===Kn||Pt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Kt=S.isCompressedTexture||S.image[0].isCompressedTexture,ht=S.image[0]&&S.image[0].isDataTexture,Tt=[];for(let tt=0;tt<6;tt++)!Kt&&!ht?Tt[tt]=_(S.image[tt],!0,s.maxCubemapSize):Tt[tt]=ht?S.image[tt].image:S.image[tt],Tt[tt]=zt(S,Tt[tt]);const Gt=Tt[0],$=r.convert(S.format,S.colorSpace),Z=r.convert(S.type),dt=x(S.internalFormat,$,Z,S.colorSpace),bt=S.isVideoTexture!==!0,kt=Q.__version===void 0||J===!0,I=nt.dataReady;let ot=b(S,Gt);Nt(i.TEXTURE_CUBE_MAP,S);let V;if(Kt){bt&&kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,dt,Gt.width,Gt.height);for(let tt=0;tt<6;tt++){V=Tt[tt].mipmaps;for(let gt=0;gt<V.length;gt++){const Mt=V[gt];S.format!==dn?$!==null?bt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,Mt.width,Mt.height,$,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,dt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,Mt.width,Mt.height,$,Z,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,dt,Mt.width,Mt.height,0,$,Z,Mt.data)}}}else{if(V=S.mipmaps,bt&&kt){V.length>0&&ot++;const tt=Et(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,dt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ht){bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Tt[tt].width,Tt[tt].height,$,Z,Tt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,dt,Tt[tt].width,Tt[tt].height,0,$,Z,Tt[tt].data);for(let gt=0;gt<V.length;gt++){const Wt=V[gt].image[tt].image;bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,Wt.width,Wt.height,$,Z,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,dt,Wt.width,Wt.height,0,$,Z,Wt.data)}}else{bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,$,Z,Tt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,dt,$,Z,Tt[tt]);for(let gt=0;gt<V.length;gt++){const Mt=V[gt];bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,$,Z,Mt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,dt,$,Z,Mt.image[tt])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),Q.__version=nt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function yt(R,S,G,J,nt,Q){const Pt=r.convert(G.format,G.colorSpace),_t=r.convert(G.type),At=x(G.internalFormat,Pt,_t,G.colorSpace),Kt=n.get(S),ht=n.get(G);if(ht.__renderTarget=S,!Kt.__hasExternalTextures){const Tt=Math.max(1,S.width>>Q),Gt=Math.max(1,S.height>>Q);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Q,At,Tt,Gt,S.depth,0,Pt,_t,null):e.texImage2D(nt,Q,At,Tt,Gt,0,Pt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),St(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,nt,ht.__webglTexture,0,rt(S)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,nt,ht.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(R,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const J=S.depthTexture,nt=J&&J.isDepthTexture?J.type:null,Q=v(S.stencilBuffer,nt),Pt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=rt(S);St(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,Q,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Q,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,R)}else{const J=S.textures;for(let nt=0;nt<J.length;nt++){const Q=J[nt],Pt=r.convert(Q.format,Q.colorSpace),_t=r.convert(Q.type),At=x(Q.internalFormat,Pt,_t,Q.colorSpace),Kt=rt(S);G&&St(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,At,S.width,S.height):St(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,At,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,At,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const nt=J.__webglTexture,Q=rt(S);if(S.depthTexture.format===ji)St(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(S.depthTexture.format===es)St(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Lt(R){const S=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",nt)};J.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=J}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Rt(S.__webglFramebuffer,R)}else if(G){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=i.createRenderbuffer(),st(S.__webglDepthbuffer[J],R,!1);else{const nt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),st(S.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(R,S,G){const J=n.get(R);S!==void 0&&yt(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Lt(R)}function te(R){const S=R.texture,G=n.get(R),J=n.get(S);R.addEventListener("dispose",A);const nt=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Pt=nt.length>1;if(Pt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[_t]=[];for(let At=0;At<S.mipmaps.length;At++)G.__webglFramebuffer[_t][At]=i.createFramebuffer()}else G.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let _t=0;_t<S.mipmaps.length;_t++)G.__webglFramebuffer[_t]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let _t=0,At=nt.length;_t<At;_t++){const Kt=n.get(nt[_t]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&St(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let _t=0;_t<nt.length;_t++){const At=nt[_t];G.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[_t]);const Kt=r.convert(At.format,At.colorSpace),ht=r.convert(At.type),Tt=x(At.internalFormat,Kt,ht,At.colorSpace,R.isXRRenderTarget===!0),Gt=rt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Tt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,G.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),st(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,S);for(let _t=0;_t<6;_t++)if(S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)yt(G.__webglFramebuffer[_t][At],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At);else yt(G.__webglFramebuffer[_t],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let _t=0,At=nt.length;_t<At;_t++){const Kt=nt[_t],ht=n.get(Kt);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),Nt(i.TEXTURE_2D,Kt),yt(G.__webglFramebuffer,R,Kt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),m(Kt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,J.__webglTexture),Nt(_t,S),S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)yt(G.__webglFramebuffer[At],R,S,i.COLOR_ATTACHMENT0,_t,At);else yt(G.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,_t,0);m(S)&&p(_t),e.unbindTexture()}R.depthBuffer&&Lt(R)}function et(R){const S=R.textures;for(let G=0,J=S.length;G<J;G++){const nt=S[G];if(m(nt)){const Q=M(R),Pt=n.get(nt).__webglTexture;e.bindTexture(Q,Pt),p(Q),e.unbindTexture()}}}const lt=[],P=[];function ct(R){if(R.samples>0){if(St(R)===!1){const S=R.textures,G=R.width,J=R.height;let nt=i.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(R),_t=S.length>1;if(_t)for(let At=0;At<S.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let At=0;At<S.length;At++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[At]);const Kt=n.get(S[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,nt,i.NEAREST),l===!0&&(lt.length=0,P.length=0,lt.push(i.COLOR_ATTACHMENT0+At),R.depthBuffer&&R.resolveDepthBuffer===!1&&(lt.push(Q),P.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let At=0;At<S.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[At]);const Kt=n.get(S[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function rt(R){return Math.min(s.maxSamples,R.samples)}function St(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pt(R){const S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function zt(R,S){const G=R.colorSpace,J=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==as&&G!==Kn&&(ie.getTransfer(G)===ce?(J!==dn||nt!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Et(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=U,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=Ht,this.setupRenderTarget=te,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=St}function Y0(i,t){function e(n,s=Kn){let r;const o=ie.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===Ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zc)return i.BYTE;if(n===Kc)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===Ea)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Bs)return i.HALF_FLOAT;if(n===Qc)return i.ALPHA;if(n===th)return i.RGB;if(n===dn)return i.RGBA;if(n===eh)return i.LUMINANCE;if(n===nh)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===Ra)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===ih)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===Ar||n===Rr||n===Cr||n===Pr)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xo||n===qo||n===Yo||n===$o)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===Zo||n===Ko)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jo||n===Zo)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ko)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ta)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ea)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===na)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ia)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ra)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===aa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===la)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ca)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ha)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ua)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lr||n===da||n===fa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Lr)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sh||n===pa||n===ma||n===ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class $0 extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Bt extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j0={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K0=`
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

}`;class J0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ne,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new zn({vertexShader:Z0,fragmentShader:K0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q0 extends xi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null;const _=new J0,m=e.getContextAttributes();let p=null,M=null;const x=[],v=[],b=new at;let T=null;const A=new je;A.viewport=new ve;const L=new je;L.viewport=new ve;const w=[A,L],y=new $0;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=x[F];return K===void 0&&(K=new Mo,x[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=x[F];return K===void 0&&(K=new Mo,x[F]=K),K.getGripSpace()},this.getHand=function(F){let K=x[F];return K===void 0&&(K=new Mo,x[F]=K),K.getHandSpace()};function B(F){const K=v.indexOf(F.inputSource);if(K===-1)return;const yt=x[K];yt!==void 0&&(yt.update(F.inputSource,F.frame,c||o),yt.dispatchEvent({type:F.type,data:F.inputSource}))}function q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",j);for(let F=0;F<x.length;F++){const K=v[F];K!==null&&(v[F]=null,x[F].disconnect(K))}C=null,z=null,_.reset(),t.setRenderTarget(p),u=null,f=null,d=null,s=null,M=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",q),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new _i(u.framebufferWidth,u.framebufferHeight,{format:dn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,yt=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?es:ji,yt=m.stencil?ts:gi);const Rt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Rt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new _i(f.textureWidth,f.textureHeight,{format:dn,type:kn,depthTexture:new xh(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(F){for(let K=0;K<F.removed.length;K++){const yt=F.removed[K],st=v.indexOf(yt);st>=0&&(v[st]=null,x[st].disconnect(yt))}for(let K=0;K<F.added.length;K++){const yt=F.added[K];let st=v.indexOf(yt);if(st===-1){for(let Lt=0;Lt<x.length;Lt++)if(Lt>=v.length){v.push(yt),st=Lt;break}else if(v[Lt]===null){v[Lt]=yt,st=Lt;break}if(st===-1)break}const Rt=x[st];Rt&&Rt.connect(yt)}}const U=new D,Y=new D;function H(F,K,yt){U.setFromMatrixPosition(K.matrixWorld),Y.setFromMatrixPosition(yt.matrixWorld);const st=U.distanceTo(Y),Rt=K.projectionMatrix.elements,Lt=yt.projectionMatrix.elements,Ht=Rt[14]/(Rt[10]-1),te=Rt[14]/(Rt[10]+1),et=(Rt[9]+1)/Rt[5],lt=(Rt[9]-1)/Rt[5],P=(Rt[8]-1)/Rt[0],ct=(Lt[8]+1)/Lt[0],rt=Ht*P,St=Ht*ct,pt=st/(-P+ct),zt=pt*-P;if(K.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(zt),F.translateZ(pt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),Rt[10]===-1)F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Et=Ht+pt,R=te+pt,S=rt-zt,G=St+(st-zt),J=et*te/R*Et,nt=lt*te/R*Et;F.projectionMatrix.makePerspective(S,G,J,nt,Et,R),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function ut(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let K=F.near,yt=F.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),y.near=L.near=A.near=K,y.far=L.far=A.far=yt,(C!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,z=y.far),A.layers.mask=F.layers.mask|2,L.layers.mask=F.layers.mask|4,y.layers.mask=A.layers.mask|L.layers.mask;const st=F.parent,Rt=y.cameras;ut(y,st);for(let Lt=0;Lt<Rt.length;Lt++)ut(Rt[Lt],st);Rt.length===2?H(y,A,L):y.projectionMatrix.copy(A.projectionMatrix),mt(F,y,st)};function mt(F,K,yt){yt===null?F.matrix.copy(K.matrixWorld):(F.matrix.copy(yt.matrixWorld),F.matrix.invert(),F.matrix.multiply(K.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=ns*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let xt=null;function Nt(F,K){if(h=K.getViewerPose(c||o),g=K,h!==null){const yt=h.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let st=!1;yt.length!==y.cameras.length&&(y.cameras.length=0,st=!0);for(let Lt=0;Lt<yt.length;Lt++){const Ht=yt[Lt];let te=null;if(u!==null)te=u.getViewport(Ht);else{const lt=d.getViewSubImage(f,Ht);te=lt.viewport,Lt===0&&(t.setRenderTargetTextures(M,lt.colorTexture,f.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(M))}let et=w[Lt];et===void 0&&(et=new je,et.layers.enable(Lt),et.viewport=new ve,w[Lt]=et),et.matrix.fromArray(Ht.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Ht.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(te.x,te.y,te.width,te.height),Lt===0&&(y.matrix.copy(et.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),st===!0&&y.cameras.push(et)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Lt=d.getDepthInformation(yt[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,s.renderState)}}for(let yt=0;yt<x.length;yt++){const st=v[yt],Rt=x[yt];st!==null&&Rt!==void 0&&Rt.update(st,K,c||o)}xt&&xt(F,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Qt=new _h;Qt.setAnimationLoop(Nt),this.setAnimationLoop=function(F){xt=F},this.dispose=function(){}}}const ci=new Sn,tg=new ne;function eg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Be&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Be&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,ci.copy(v),ci.x*=-1,ci.y*=-1,ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(tg.makeRotationFromEuler(ci)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ng(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(M,b);const T=t.render.frame;r[M.id]!==T&&(f(M),r[M.id]=T)}function h(M){const x=d();M.__bindingPointIndex=x;const v=i.createBuffer(),b=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=s[M.id],v=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,A=v.length;T<A;T++){const L=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,y=L.length;w<y;w++){const C=L[w];if(u(C,T,w,b)===!0){const z=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let q=0;for(let j=0;j<B.length;j++){const U=B[j],Y=_(U);typeof U=="number"||typeof U=="boolean"?(C.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,z+q,C.__data)):U.isMatrix3?(C.__data[0]=U.elements[0],C.__data[1]=U.elements[1],C.__data[2]=U.elements[2],C.__data[3]=0,C.__data[4]=U.elements[3],C.__data[5]=U.elements[4],C.__data[6]=U.elements[5],C.__data[7]=0,C.__data[8]=U.elements[6],C.__data[9]=U.elements[7],C.__data[10]=U.elements[8],C.__data[11]=0):(U.toArray(C.__data,q),q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,x,v,b){const T=M.value,A=x+"_"+v;if(b[A]===void 0)return typeof T=="number"||typeof T=="boolean"?b[A]=T:b[A]=T.clone(),!0;{const L=b[A];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return b[A]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(M){const x=M.uniforms;let v=0;const b=16;for(let A=0,L=x.length;A<L;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,C=w.length;y<C;y++){const z=w[y],B=Array.isArray(z.value)?z.value:[z.value];for(let q=0,j=B.length;q<j;q++){const U=B[q],Y=_(U),H=v%b,ut=H%Y.boundary,mt=H+ut;v+=ut,mt!==0&&b-mt<Y.storage&&(v+=b-mt),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=Y.storage}}}const T=v%b;return T>0&&(v+=b-T),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class ig{constructor(t={}){const{canvas:e=Xu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=ei,this.toneMappingExposure=1;const v=this;let b=!1,T=0,A=0,L=null,w=-1,y=null;const C=new ve,z=new ve;let B=null;const q=new Ot(0);let j=0,U=e.width,Y=e.height,H=1,ut=null,mt=null;const xt=new ve(0,0,U,Y),Nt=new ve(0,0,U,Y);let Qt=!1;const F=new Ua;let K=!1,yt=!1;const st=new ne,Rt=new ne,Lt=new D,Ht=new ve,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function lt(){return L===null?H:1}let P=n;function ct(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wa}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),P===null){const N="webgl2";if(P=ct(N,E),P===null)throw ct(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let rt,St,pt,zt,Et,R,S,G,J,nt,Q,Pt,_t,At,Kt,ht,Tt,Gt,$,Z,dt,bt,kt,I;function ot(){rt=new lm(P),rt.init(),bt=new Y0(P,rt),St=new nm(P,rt,t,bt),pt=new W0(P,rt),St.reverseDepthBuffer&&f&&pt.buffers.depth.setReversed(!0),zt=new um(P),Et=new C0,R=new q0(P,rt,pt,Et,St,bt,zt),S=new sm(v),G=new am(v),J=new _d(P),kt=new tm(P,J),nt=new cm(P,J,zt,kt),Q=new fm(P,nt,J,zt),$=new dm(P,St,R),ht=new im(Et),Pt=new R0(v,S,G,rt,St,kt,ht),_t=new eg(v,Et),At=new L0,Kt=new F0(rt),Gt=new Qp(v,S,G,pt,Q,u,l),Tt=new G0(v,Q,St),I=new ng(P,zt,St,pt),Z=new em(P,rt,zt),dt=new hm(P,rt,zt),zt.programs=Pt.programs,v.capabilities=St,v.extensions=rt,v.properties=Et,v.renderLists=At,v.shadowMap=Tt,v.state=pt,v.info=zt}ot();const V=new Q0(v,P);this.xr=V,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(U,Y,!1))},this.getSize=function(E){return E.set(U,Y)},this.setSize=function(E,N,W=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,Y=N,e.width=Math.floor(E*H),e.height=Math.floor(N*H),W===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(U*H,Y*H).floor()},this.setDrawingBufferSize=function(E,N,W){U=E,Y=N,H=W,e.width=Math.floor(E*W),e.height=Math.floor(N*W),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(xt)},this.setViewport=function(E,N,W,X){E.isVector4?xt.set(E.x,E.y,E.z,E.w):xt.set(E,N,W,X),pt.viewport(C.copy(xt).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Nt)},this.setScissor=function(E,N,W,X){E.isVector4?Nt.set(E.x,E.y,E.z,E.w):Nt.set(E,N,W,X),pt.scissor(z.copy(Nt).multiplyScalar(H).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(E){pt.setScissorTest(Qt=E)},this.setOpaqueSort=function(E){ut=E},this.setTransparentSort=function(E){mt=E},this.getClearColor=function(E){return E.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(E=!0,N=!0,W=!0){let X=0;if(E){let O=!1;if(L!==null){const ft=L.texture.format;O=ft===La||ft===Pa||ft===Ca}if(O){const ft=L.texture.type,wt=ft===kn||ft===gi||ft===Is||ft===ts||ft===Ta||ft===Aa,Dt=Gt.getClearColor(),It=Gt.getClearAlpha(),Vt=Dt.r,qt=Dt.g,Ut=Dt.b;wt?(g[0]=Vt,g[1]=qt,g[2]=Ut,g[3]=It,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Vt,_[1]=qt,_[2]=Ut,_[3]=It,P.clearBufferiv(P.COLOR,0,_))}else X|=P.COLOR_BUFFER_BIT}N&&(X|=P.DEPTH_BUFFER_BIT),W&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),At.dispose(),Kt.dispose(),Et.dispose(),S.dispose(),G.dispose(),Q.dispose(),kt.dispose(),I.dispose(),Pt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Vs),V.removeEventListener("sessionend",fs),Ct.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=zt.autoReset,N=Tt.enabled,W=Tt.autoUpdate,X=Tt.needsUpdate,O=Tt.type;ot(),zt.autoReset=E,Tt.enabled=N,Tt.autoUpdate=W,Tt.needsUpdate=X,Tt.type=O}function Mt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Wt(E){const N=E.target;N.removeEventListener("dispose",Wt),ge(N)}function ge(E){Ee(E),Et.remove(E)}function Ee(E){const N=Et.get(E).programs;N!==void 0&&(N.forEach(function(W){Pt.releaseProgram(W)}),E.isShaderMaterial&&Pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,W,X,O,ft){N===null&&(N=te);const wt=O.isMesh&&O.matrixWorld.determinant()<0,Dt=zh(E,N,W,X,O);pt.setMaterial(X,wt);let It=W.index,Vt=1;if(X.wireframe===!0){if(It=nt.getWireframeAttribute(W),It===void 0)return;Vt=2}const qt=W.drawRange,Ut=W.attributes.position;let se=qt.start*Vt,ue=(qt.start+qt.count)*Vt;ft!==null&&(se=Math.max(se,ft.start*Vt),ue=Math.min(ue,(ft.start+ft.count)*Vt)),It!==null?(se=Math.max(se,0),ue=Math.min(ue,It.count)):Ut!=null&&(se=Math.max(se,0),ue=Math.min(ue,Ut.count));const fe=ue-se;if(fe<0||fe===1/0)return;kt.setup(O,X,Dt,W,It);let Ve,oe=Z;if(It!==null&&(Ve=J.get(It),oe=dt,oe.setIndex(Ve)),O.isMesh)X.wireframe===!0?(pt.setLineWidth(X.wireframeLinewidth*lt()),oe.setMode(P.LINES)):oe.setMode(P.TRIANGLES);else if(O.isLine){let Ft=X.linewidth;Ft===void 0&&(Ft=1),pt.setLineWidth(Ft*lt()),O.isLineSegments?oe.setMode(P.LINES):O.isLineLoop?oe.setMode(P.LINE_LOOP):oe.setMode(P.LINE_STRIP)}else O.isPoints?oe.setMode(P.POINTS):O.isSprite&&oe.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)oe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))oe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ft=O._multiDrawStarts,Cn=O._multiDrawCounts,ae=O._multiDrawCount,on=It?J.get(It).bytesPerElement:1,Si=Et.get(X).currentProgram.getUniforms();for(let qe=0;qe<ae;qe++)Si.setValue(P,"_gl_DrawID",qe),oe.render(Ft[qe]/on,Cn[qe])}else if(O.isInstancedMesh)oe.renderInstances(se,fe,O.count);else if(W.isInstancedBufferGeometry){const Ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Cn=Math.min(W.instanceCount,Ft);oe.renderInstances(se,fe,Cn)}else oe.render(se,fe)};function re(E,N,W){E.transparent===!0&&E.side===ze&&E.forceSinglePass===!1?(E.side=Be,E.needsUpdate=!0,Xs(E,N,W),E.side=ni,E.needsUpdate=!0,Xs(E,N,W),E.side=ze):Xs(E,N,W)}this.compile=function(E,N,W=null){W===null&&(W=E),p=Kt.get(W),p.init(N),x.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==W&&E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const X=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ft=O.material;if(ft)if(Array.isArray(ft))for(let wt=0;wt<ft.length;wt++){const Dt=ft[wt];re(Dt,W,O),X.add(Dt)}else re(ft,W,O),X.add(ft)}),x.pop(),p=null,X},this.compileAsync=function(E,N,W=null){const X=this.compile(E,N,W);return new Promise(O=>{function ft(){if(X.forEach(function(wt){Et.get(wt).currentProgram.isReady()&&X.delete(wt)}),X.size===0){O(E);return}setTimeout(ft,10)}rt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let He=null;function Ge(E){He&&He(E)}function Vs(){Ct.stop()}function fs(){Ct.start()}const Ct=new _h;Ct.setAnimationLoop(Ge),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(E){He=E,V.setAnimationLoop(E),E===null?Ct.stop():Ct.start()},V.addEventListener("sessionstart",Vs),V.addEventListener("sessionend",fs),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(N),N=V.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,L),p=Kt.get(E,x.length),p.init(N),x.push(p),Rt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),F.setFromProjectionMatrix(Rt),yt=this.localClippingEnabled,K=ht.init(this.clippingPlanes,yt),m=At.get(E,M.length),m.init(),M.push(m),V.enabled===!0&&V.isPresenting===!0){const ft=v.xr.getDepthSensingMesh();ft!==null&&Xt(ft,N,-1/0,v.sortObjects)}Xt(E,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ut,mt),et=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,et&&Gt.addToRenderList(m,E),this.info.render.frame++,K===!0&&ht.beginShadows();const W=p.state.shadowsArray;Tt.render(W,E,N),K===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,O=m.transmissive;if(p.setupLights(),N.isArrayCamera){const ft=N.cameras;if(O.length>0)for(let wt=0,Dt=ft.length;wt<Dt;wt++){const It=ft[wt];Xr(X,O,E,It)}et&&Gt.render(E);for(let wt=0,Dt=ft.length;wt<Dt;wt++){const It=ft[wt];Ke(m,E,It,It.viewport)}}else O.length>0&&Xr(X,O,E,N),et&&Gt.render(E),Ke(m,E,N);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(v,E,N),kt.resetDefaultState(),w=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],K===!0&&ht.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Xt(E,N,W,X){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||F.intersectsSprite(E)){X&&Ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Rt);const wt=Q.update(E),Dt=E.material;Dt.visible&&m.push(E,wt,Dt,W,Ht.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||F.intersectsObject(E))){const wt=Q.update(E),Dt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ht.copy(E.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ht.copy(wt.boundingSphere.center)),Ht.applyMatrix4(E.matrixWorld).applyMatrix4(Rt)),Array.isArray(Dt)){const It=wt.groups;for(let Vt=0,qt=It.length;Vt<qt;Vt++){const Ut=It[Vt],se=Dt[Ut.materialIndex];se&&se.visible&&m.push(E,wt,se,W,Ht.z,Ut)}}else Dt.visible&&m.push(E,wt,Dt,W,Ht.z,null)}}const ft=E.children;for(let wt=0,Dt=ft.length;wt<Dt;wt++)Xt(ft[wt],N,W,X)}function Ke(E,N,W,X){const O=E.opaque,ft=E.transmissive,wt=E.transparent;p.setupLightsView(W),K===!0&&ht.setGlobalState(v.clippingPlanes,W),X&&pt.viewport(C.copy(X)),O.length>0&&Rn(O,N,W),ft.length>0&&Rn(ft,N,W),wt.length>0&&Rn(wt,N,W),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Xr(E,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new _i(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Bs:kn,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const ft=p.state.transmissionRenderTarget[X.id],wt=X.viewport||C;ft.setSize(wt.z,wt.w);const Dt=v.getRenderTarget();v.setRenderTarget(ft),v.getClearColor(q),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),et&&Gt.render(W);const It=v.toneMapping;v.toneMapping=ei;const Vt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),K===!0&&ht.setGlobalState(v.clippingPlanes,X),Rn(E,W,X),R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft),rt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Ut=0,se=N.length;Ut<se;Ut++){const ue=N[Ut],fe=ue.object,Ve=ue.geometry,oe=ue.material,Ft=ue.group;if(oe.side===ze&&fe.layers.test(X.layers)){const Cn=oe.side;oe.side=Be,oe.needsUpdate=!0,Ws(fe,W,X,Ve,oe,Ft),oe.side=Cn,oe.needsUpdate=!0,qt=!0}}qt===!0&&(R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft))}v.setRenderTarget(Dt),v.setClearColor(q,j),Vt!==void 0&&(X.viewport=Vt),v.toneMapping=It}function Rn(E,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ft=E.length;O<ft;O++){const wt=E[O],Dt=wt.object,It=wt.geometry,Vt=X===null?wt.material:X,qt=wt.group;Dt.layers.test(W.layers)&&Ws(Dt,N,W,It,Vt,qt)}}function Ws(E,N,W,X,O,ft){E.onBeforeRender(v,N,W,X,O,ft),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(v,N,W,X,E,ft),O.transparent===!0&&O.side===ze&&O.forceSinglePass===!1?(O.side=Be,O.needsUpdate=!0,v.renderBufferDirect(W,N,X,O,E,ft),O.side=ni,O.needsUpdate=!0,v.renderBufferDirect(W,N,X,O,E,ft),O.side=ze):v.renderBufferDirect(W,N,X,O,E,ft),E.onAfterRender(v,N,W,X,O,ft)}function Xs(E,N,W){N.isScene!==!0&&(N=te);const X=Et.get(E),O=p.state.lights,ft=p.state.shadowsArray,wt=O.state.version,Dt=Pt.getParameters(E,O.state,ft,N,W),It=Pt.getProgramCacheKey(Dt);let Vt=X.programs;X.environment=E.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(E.isMeshStandardMaterial?G:S).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Vt===void 0&&(E.addEventListener("dispose",Wt),Vt=new Map,X.programs=Vt);let qt=Vt.get(It);if(qt!==void 0){if(X.currentProgram===qt&&X.lightsStateVersion===wt)return Ya(E,Dt),qt}else Dt.uniforms=Pt.getUniforms(E),E.onBeforeCompile(Dt,v),qt=Pt.acquireProgram(Dt,It),Vt.set(It,qt),X.uniforms=Dt.uniforms;const Ut=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=ht.uniform),Ya(E,Dt),X.needsLights=Hh(E),X.lightsStateVersion=wt,X.needsLights&&(Ut.ambientLightColor.value=O.state.ambient,Ut.lightProbe.value=O.state.probe,Ut.directionalLights.value=O.state.directional,Ut.directionalLightShadows.value=O.state.directionalShadow,Ut.spotLights.value=O.state.spot,Ut.spotLightShadows.value=O.state.spotShadow,Ut.rectAreaLights.value=O.state.rectArea,Ut.ltc_1.value=O.state.rectAreaLTC1,Ut.ltc_2.value=O.state.rectAreaLTC2,Ut.pointLights.value=O.state.point,Ut.pointLightShadows.value=O.state.pointShadow,Ut.hemisphereLights.value=O.state.hemi,Ut.directionalShadowMap.value=O.state.directionalShadowMap,Ut.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ut.spotShadowMap.value=O.state.spotShadowMap,Ut.spotLightMatrix.value=O.state.spotLightMatrix,Ut.spotLightMap.value=O.state.spotLightMap,Ut.pointShadowMap.value=O.state.pointShadowMap,Ut.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=qt,X.uniformsList=null,qt}function qa(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Dr.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Ya(E,N){const W=Et.get(E);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function zh(E,N,W,X,O){N.isScene!==!0&&(N=te),R.resetTextureUnits();const ft=N.fog,wt=X.isMeshStandardMaterial?N.environment:null,Dt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:as,It=(X.isMeshStandardMaterial?G:S).get(X.envMap||wt),Vt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ut=!!W.morphAttributes.position,se=!!W.morphAttributes.normal,ue=!!W.morphAttributes.color;let fe=ei;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(fe=v.toneMapping);const Ve=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,oe=Ve!==void 0?Ve.length:0,Ft=Et.get(X),Cn=p.state.lights;if(K===!0&&(yt===!0||E!==y)){const Je=E===y&&X.id===w;ht.setState(X,E,Je)}let ae=!1;X.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Cn.state.version||Ft.outputColorSpace!==Dt||O.isBatchedMesh&&Ft.batching===!1||!O.isBatchedMesh&&Ft.batching===!0||O.isBatchedMesh&&Ft.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ft.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ft.instancing===!1||!O.isInstancedMesh&&Ft.instancing===!0||O.isSkinnedMesh&&Ft.skinning===!1||!O.isSkinnedMesh&&Ft.skinning===!0||O.isInstancedMesh&&Ft.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ft.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ft.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ft.instancingMorph===!1&&O.morphTexture!==null||Ft.envMap!==It||X.fog===!0&&Ft.fog!==ft||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ht.numPlanes||Ft.numIntersection!==ht.numIntersection)||Ft.vertexAlphas!==Vt||Ft.vertexTangents!==qt||Ft.morphTargets!==Ut||Ft.morphNormals!==se||Ft.morphColors!==ue||Ft.toneMapping!==fe||Ft.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Ft.__version=X.version);let on=Ft.currentProgram;ae===!0&&(on=Xs(X,N,O));let Si=!1,qe=!1,ps=!1;const pe=on.getUniforms(),pn=Ft.uniforms;if(pt.useProgram(on.program)&&(Si=!0,qe=!0,ps=!0),X.id!==w&&(w=X.id,qe=!0),Si||y!==E){pt.buffers.depth.getReversed()?(st.copy(E.projectionMatrix),Yu(st),$u(st),pe.setValue(P,"projectionMatrix",st)):pe.setValue(P,"projectionMatrix",E.projectionMatrix),pe.setValue(P,"viewMatrix",E.matrixWorldInverse);const Bn=pe.map.cameraPosition;Bn!==void 0&&Bn.setValue(P,Lt.setFromMatrixPosition(E.matrixWorld)),St.logarithmicDepthBuffer&&pe.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pe.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,qe=!0,ps=!0)}if(O.isSkinnedMesh){pe.setOptional(P,O,"bindMatrix"),pe.setOptional(P,O,"bindMatrixInverse");const Je=O.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),pe.setValue(P,"boneTexture",Je.boneTexture,R))}O.isBatchedMesh&&(pe.setOptional(P,O,"batchingTexture"),pe.setValue(P,"batchingTexture",O._matricesTexture,R),pe.setOptional(P,O,"batchingIdTexture"),pe.setValue(P,"batchingIdTexture",O._indirectTexture,R),pe.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&pe.setValue(P,"batchingColorTexture",O._colorsTexture,R));const ms=W.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0)&&$.update(O,W,on),(qe||Ft.receiveShadow!==O.receiveShadow)&&(Ft.receiveShadow=O.receiveShadow,pe.setValue(P,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(pn.envMap.value=It,pn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(pn.envMapIntensity.value=N.environmentIntensity),qe&&(pe.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&Bh(pn,ps),ft&&X.fog===!0&&_t.refreshFogUniforms(pn,ft),_t.refreshMaterialUniforms(pn,X,H,Y,p.state.transmissionRenderTarget[E.id]),Dr.upload(P,qa(Ft),pn,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Dr.upload(P,qa(Ft),pn,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pe.setValue(P,"center",O.center),pe.setValue(P,"modelViewMatrix",O.modelViewMatrix),pe.setValue(P,"normalMatrix",O.normalMatrix),pe.setValue(P,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Je=X.uniformsGroups;for(let Bn=0,Hn=Je.length;Bn<Hn;Bn++){const $a=Je[Bn];I.update($a,on),I.bind($a,on)}}return on}function Bh(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Hh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,N,W){Et.get(E.texture).__webglTexture=N,Et.get(E.depthTexture).__webglTexture=W;const X=Et.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const W=Et.get(E);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,W=0){L=E,T=N,A=W;let X=!0,O=null,ft=!1,wt=!1;if(E){const It=Et.get(E);if(It.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(It.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(It.__hasExternalTextures)R.rebindTextures(E,Et.get(E.texture).__webglTexture,Et.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ut=E.depthTexture;if(It.__boundDepthTexture!==Ut){if(Ut!==null&&Et.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Vt=E.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(wt=!0);const qt=Et.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qt[N])?O=qt[N][W]:O=qt[N],ft=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?O=Et.get(E).__webglMultisampledFramebuffer:Array.isArray(qt)?O=qt[W]:O=qt,C.copy(E.viewport),z.copy(E.scissor),B=E.scissorTest}else C.copy(xt).multiplyScalar(H).floor(),z.copy(Nt).multiplyScalar(H).floor(),B=Qt;if(pt.bindFramebuffer(P.FRAMEBUFFER,O)&&X&&pt.drawBuffers(E,O),pt.viewport(C),pt.scissor(z),pt.setScissorTest(B),ft){const It=Et.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,It.__webglTexture,W)}else if(wt){const It=Et.get(E.texture),Vt=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,It.__webglTexture,W||0,Vt)}w=-1},this.readRenderTargetPixels=function(E,N,W,X,O,ft,wt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){pt.bindFramebuffer(P.FRAMEBUFFER,Dt);try{const It=E.texture,Vt=It.format,qt=It.type;if(!St.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-X&&W>=0&&W<=E.height-O&&P.readPixels(N,W,X,O,bt.convert(Vt),bt.convert(qt),ft)}finally{const It=L!==null?Et.get(L).__webglFramebuffer:null;pt.bindFramebuffer(P.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(E,N,W,X,O,ft,wt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){const It=E.texture,Vt=It.format,qt=It.type;if(!St.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-X&&W>=0&&W<=E.height-O){pt.bindFramebuffer(P.FRAMEBUFFER,Dt);const Ut=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ut),P.bufferData(P.PIXEL_PACK_BUFFER,ft.byteLength,P.STREAM_READ),P.readPixels(N,W,X,O,bt.convert(Vt),bt.convert(qt),0);const se=L!==null?Et.get(L).__webglFramebuffer:null;pt.bindFramebuffer(P.FRAMEBUFFER,se);const ue=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await qu(P,ue,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ut),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ft),P.deleteBuffer(Ut),P.deleteSync(ue),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,W=0){E.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-W),O=Math.floor(E.image.width*X),ft=Math.floor(E.image.height*X),wt=N!==null?N.x:0,Dt=N!==null?N.y:0;R.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,wt,Dt,O,ft),pt.unbindTexture()},this.copyTextureToTexture=function(E,N,W=null,X=null,O=0){E.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],N=arguments[2],O=arguments[3]||0,W=null);let ft,wt,Dt,It,Vt,qt,Ut,se,ue;const fe=E.isCompressedTexture?E.mipmaps[O]:E.image;W!==null?(ft=W.max.x-W.min.x,wt=W.max.y-W.min.y,Dt=W.isBox3?W.max.z-W.min.z:1,It=W.min.x,Vt=W.min.y,qt=W.isBox3?W.min.z:0):(ft=fe.width,wt=fe.height,Dt=fe.depth||1,It=0,Vt=0,qt=0),X!==null?(Ut=X.x,se=X.y,ue=X.z):(Ut=0,se=0,ue=0);const Ve=bt.convert(N.format),oe=bt.convert(N.type);let Ft;N.isData3DTexture?(R.setTexture3D(N,0),Ft=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),Ft=P.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),Ft=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Cn=P.getParameter(P.UNPACK_ROW_LENGTH),ae=P.getParameter(P.UNPACK_IMAGE_HEIGHT),on=P.getParameter(P.UNPACK_SKIP_PIXELS),Si=P.getParameter(P.UNPACK_SKIP_ROWS),qe=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,fe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,It),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,qt);const ps=E.isDataArrayTexture||E.isData3DTexture,pe=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const pn=Et.get(E),ms=Et.get(N),Je=Et.get(pn.__renderTarget),Bn=Et.get(ms.__renderTarget);pt.bindFramebuffer(P.READ_FRAMEBUFFER,Je.__webglFramebuffer),pt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let Hn=0;Hn<Dt;Hn++)ps&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Et.get(E).__webglTexture,O,qt+Hn),E.isDepthTexture?(pe&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Et.get(N).__webglTexture,O,ue+Hn),P.blitFramebuffer(It,Vt,ft,wt,Ut,se,ft,wt,P.DEPTH_BUFFER_BIT,P.NEAREST)):pe?P.copyTexSubImage3D(Ft,O,Ut,se,ue+Hn,It,Vt,ft,wt):P.copyTexSubImage2D(Ft,O,Ut,se,ue+Hn,It,Vt,ft,wt);pt.bindFramebuffer(P.READ_FRAMEBUFFER,null),pt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else pe?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Ft,O,Ut,se,ue,ft,wt,Dt,Ve,oe,fe.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Ft,O,Ut,se,ue,ft,wt,Dt,Ve,fe.data):P.texSubImage3D(Ft,O,Ut,se,ue,ft,wt,Dt,Ve,oe,fe):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,Ut,se,ft,wt,Ve,oe,fe.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,Ut,se,fe.width,fe.height,Ve,fe.data):P.texSubImage2D(P.TEXTURE_2D,O,Ut,se,ft,wt,Ve,oe,fe);P.pixelStorei(P.UNPACK_ROW_LENGTH,Cn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ae),P.pixelStorei(P.UNPACK_SKIP_PIXELS,on),P.pixelStorei(P.UNPACK_SKIP_ROWS,Si),P.pixelStorei(P.UNPACK_SKIP_IMAGES,qe),O===0&&N.generateMipmaps&&P.generateMipmap(Ft),pt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,W=null,X=null,O=0){return E.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,E=arguments[2],N=arguments[3],O=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,W,X,O)},this.initRenderTarget=function(E){Et.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),pt.unbindTexture()},this.resetState=function(){T=0,A=0,L=null,pt.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class Oa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new Oa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wh extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sg extends Ne{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ze,h=Ze,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $l extends Oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ki=new ne,jl=new ne,fr=[],Zl=new yi,rg=new ne,Ms=new it,ys=new ls;class nn extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $l(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ki),Zl.copy(t.boundingBox).applyMatrix4(ki),this.boundingBox.union(Zl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ls),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ki),ys.copy(t.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),t.ray.intersectsSphere(ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ki),jl.multiplyMatrices(n,ki),Ms.matrixWorld=jl,Ms.raycast(t,fr);for(let o=0,a=fr.length;o<a;o++){const l=fr[o];l.instanceId=r,l.object=this,e.push(l)}fr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new sg(new Float32Array(s*this.count),s,this.count,Ra,Mn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Eh extends cs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Or=new D,Fr=new D,Kl=new ne,bs=new Br,pr=new ls,yo=new D,Jl=new D;class og extends ye{constructor(t=new de,e=new Eh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Or.fromBufferAttribute(e,s-1),Fr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Or.distanceTo(Fr);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(s),pr.radius+=r,t.ray.intersectsSphere(pr)===!1)return;Kl.copy(s).invert(),bs.copy(t.ray).applyMatrix4(Kl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=u,m=g-1;_<m;_+=c){const p=h.getX(_),M=h.getX(_+1),x=mr(this,t,bs,l,p,M);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(u),p=mr(this,t,bs,l,_,m);p&&e.push(p)}}else{const u=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=u,m=g-1;_<m;_+=c){const p=mr(this,t,bs,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=mr(this,t,bs,l,g-1,u);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Or.fromBufferAttribute(o,s),Fr.fromBufferAttribute(o,r),e.distanceSqToSegment(Or,Fr,yo,Jl)>n)return;yo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(yo);if(!(l<t.near||l>t.far))return{distance:l,point:Jl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Hs extends Ne{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new at:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],r=[],o=[],a=new D,l=new ne;for(let u=0;u<=t;u++){const g=u/t;s[u]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ce(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Ce(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fa extends An{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ag extends Fa{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ka(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,s(o,a,f,u)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const gr=new D,bo=new ka,So=new ka,wo=new ka;class lg extends An{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(gr.subVectors(s[0],s[1]).add(s[0]),c=gr);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(gr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=gr),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),bo.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,_,m),So.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,_,m),wo.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(bo.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),So.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),wo.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(bo.calc(l),So.calc(l),wo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ql(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function cg(i,t){const e=1-i;return e*e*t}function hg(i,t){return 2*(1-i)*i*t}function ug(i,t){return i*i*t}function Ls(i,t,e,n){return cg(i,t)+hg(i,e)+ug(i,n)}function dg(i,t){const e=1-i;return e*e*e*t}function fg(i,t){const e=1-i;return 3*e*e*i*t}function pg(i,t){return 3*(1-i)*i*i*t}function mg(i,t){return i*i*i*t}function Ds(i,t,e,n,s){return dg(i,t)+fg(i,e)+pg(i,n)+mg(i,s)}class Th extends An{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ds(t,s.x,r.x,o.x,a.x),Ds(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gg extends An{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ds(t,s.x,r.x,o.x,a.x),Ds(t,s.y,r.y,o.y,a.y),Ds(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ah extends An{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _g extends An{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rh extends An{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ls(t,s.x,r.x,o.x),Ls(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vg extends An{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ls(t,s.x,r.x,o.x),Ls(t,s.y,r.y,o.y),Ls(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ch extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Ql(a,l.x,c.x,h.x,d.x),Ql(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var xa=Object.freeze({__proto__:null,ArcCurve:ag,CatmullRomCurve3:lg,CubicBezierCurve:Th,CubicBezierCurve3:gg,EllipseCurve:Fa,LineCurve:Ah,LineCurve3:_g,QuadraticBezierCurve:Rh,QuadraticBezierCurve3:vg,SplineCurve:Ch});class xg extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new xa[s.type]().fromJSON(s))}return this}}class tc extends xg{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ah(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Rh(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Th(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ch(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Fa(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class me extends de{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],u=[];let g=0;const _=[],m=n/2;let p=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(u,2));function M(){const v=new D,b=new D;let T=0;const A=(e-t)/n;for(let L=0;L<=r;L++){const w=[],y=L/r,C=y*(e-t)+t;for(let z=0;z<=s;z++){const B=z/s,q=B*l+a,j=Math.sin(q),U=Math.cos(q);b.x=C*j,b.y=-y*n+m,b.z=C*U,d.push(b.x,b.y,b.z),v.set(j,A,U).normalize(),f.push(v.x,v.y,v.z),u.push(B,1-y),w.push(g++)}_.push(w)}for(let L=0;L<s;L++)for(let w=0;w<r;w++){const y=_[w][L],C=_[w+1][L],z=_[w+1][L+1],B=_[w][L+1];(t>0||w!==0)&&(h.push(y,C,B),T+=3),(e>0||w!==r-1)&&(h.push(C,z,B),T+=3)}c.addGroup(p,T,0),p+=T}function x(v){const b=g,T=new at,A=new D;let L=0;const w=v===!0?t:e,y=v===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*y,0),f.push(0,y,0),u.push(.5,.5),g++;const C=g;for(let z=0;z<=s;z++){const q=z/s*l+a,j=Math.cos(q),U=Math.sin(q);A.x=w*U,A.y=m*y,A.z=w*j,d.push(A.x,A.y,A.z),f.push(0,y,0),T.x=j*.5+.5,T.y=U*.5*y+.5,u.push(T.x,T.y),g++}for(let z=0;z<s;z++){const B=b+z,q=C+z;v===!0?h.push(q,q+1,B):h.push(q+1,q,B),L+=3}c.addGroup(p,L,v===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ss extends me{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ss(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gr extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new D,v=new D,b=new D;for(let T=0;T<e.length;T+=3)u(e[T+0],x),u(e[T+1],v),u(e[T+2],b),l(x,v,b,M)}function l(M,x,v,b){const T=b+1,A=[];for(let L=0;L<=T;L++){A[L]=[];const w=M.clone().lerp(v,L/T),y=x.clone().lerp(v,L/T),C=T-L;for(let z=0;z<=C;z++)z===0&&L===T?A[L][z]=w:A[L][z]=w.clone().lerp(y,z/C)}for(let L=0;L<T;L++)for(let w=0;w<2*(T-L)-1;w++){const y=Math.floor(w/2);w%2===0?(f(A[L][y+1]),f(A[L+1][y]),f(A[L][y])):(f(A[L][y+1]),f(A[L+1][y+1]),f(A[L+1][y]))}}function c(M){const x=new D;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(M),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const M=new D;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const v=m(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;o.push(v,1-b)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){const x=o[M+0],v=o[M+2],b=o[M+4],T=Math.max(x,v,b),A=Math.min(x,v,b);T>.9&&A<.1&&(x<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function u(M,x){const v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const M=new D,x=new D,v=new D,b=new D,T=new at,A=new at,L=new at;for(let w=0,y=0;w<r.length;w+=9,y+=6){M.set(r[w+0],r[w+1],r[w+2]),x.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),T.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),L.set(o[y+4],o[y+5]),b.copy(M).add(x).add(v).divideScalar(3);const C=m(b);_(T,y+0,M,C),_(A,y+2,x,C),_(L,y+4,v,C)}}function _(M,x,v,b){b<0&&M.x===1&&(o[x]=M.x-1),v.x===0&&v.z===0&&(o[x]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.vertices,t.indices,t.radius,t.details)}}class bi extends tc{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new tc().fromJSON(s))}return this}}const Mg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ph(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,f,u;if(n&&(r=Eg(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)d=i[g],f=i[g+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>h&&(h=f);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return Os(r,o,e,a,l,u,0),o}};function Ph(i,t,e,n,s){let r,o;if(s===Og(i,t,e,n)>0)for(r=t;r<e;r+=n)o=ec(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=ec(r,i[r],i[r+1],o);return o&&Vr(o,o.next)&&(ks(o),o=o.next),o}function vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vr(e,e.next)||_e(e.prev,e,e.next)===0)){if(ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Os(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Pg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?bg(i,n,s,r):yg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),ks(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Sg(vi(i),t,e),Os(i,t,e,n,s,r,2)):o===2&&wg(i,t,e,n,s,r):Os(vi(i),t,e,n,s,r,1);break}}}function yg(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,u=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=u&&qi(s,a,r,l,o,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bg(i,t,e,n){const s=i.prev,r=i,o=i.next;if(_e(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,u=a<l?a<c?a:c:l<c?l:c,g=h<d?h<f?h:f:d<f?d:f,_=a>l?a>c?a:c:l>c?l:c,m=h>d?h>f?h:f:d>f?d:f,p=Ma(u,g,t,e,n),M=Ma(_,m,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=M;){if(x.x>=u&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&qi(a,h,l,d,c,f,x.x,x.y)&&_e(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=u&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&qi(a,h,l,d,c,f,v.x,v.y)&&_e(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=u&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&qi(a,h,l,d,c,f,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&qi(a,h,l,d,c,f,v.x,v.y)&&_e(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Sg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Vr(s,r)&&Lh(s,n,n.next,r)&&Fs(s,r)&&Fs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ks(n),ks(n.next),n=i=r),n=n.next}while(n!==i);return vi(n)}function wg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ig(o,a)){let l=Dh(o,a);o=vi(o,o.next),l=vi(l,l.next),Os(o,t,e,n,s,r,0),Os(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Eg(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Ph(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Dg(c));for(s.sort(Tg),r=0;r<s.length;r++)e=Ag(s[r],e);return e}function Tg(i,t){return i.x-t.x}function Ag(i,t){const e=Rg(i,t);if(!e)return t;const n=Dh(e,i);return vi(n,n.next),vi(e,e.next)}function Rg(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&qi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Fs(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Cg(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Cg(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function Pg(i,t,e,n){let s=i;do s.z===0&&(s.z=Ma(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lg(s)}function Lg(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Ma(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Dg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function qi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ig(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ug(i,t)&&(Fs(i,t)&&Fs(t,i)&&Ng(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||Vr(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vr(i,t){return i.x===t.x&&i.y===t.y}function Lh(i,t,e,n){const s=vr(_e(i,t,e)),r=vr(_e(i,t,n)),o=vr(_e(e,n,i)),a=vr(_e(e,n,t));return!!(s!==r&&o!==a||s===0&&_r(i,e,t)||r===0&&_r(i,n,t)||o===0&&_r(e,i,n)||a===0&&_r(e,t,n))}function _r(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function vr(i){return i>0?1:i<0?-1:0}function Ug(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Lh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fs(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function Ng(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Dh(i,t){const e=new ya(i.i,i.x,i.y),n=new ya(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ec(i,t,e,n){const s=new ya(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ya(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Og(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class yn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return yn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];nc(t),ic(n,t);let o=t.length;e.forEach(nc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ic(n,e[l]);const a=Mg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function nc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ic(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class rs extends de{constructor(t=new bi([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Fg;let x,v=!1,b,T,A,L;p&&(x=p.getSpacedPoints(h),v=!0,f=!1,b=p.computeFrenetFrames(h,!1),T=new D,A=new D,L=new D),f||(m=0,u=0,g=0,_=0);const w=a.extractPoints(c);let y=w.shape;const C=w.holes;if(!yn.isClockWise(y)){y=y.reverse();for(let et=0,lt=C.length;et<lt;et++){const P=C[et];yn.isClockWise(P)&&(C[et]=P.reverse())}}const B=yn.triangulateShape(y,C),q=y;for(let et=0,lt=C.length;et<lt;et++){const P=C[et];y=y.concat(P)}function j(et,lt,P){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(lt,P)}const U=y.length,Y=B.length;function H(et,lt,P){let ct,rt,St;const pt=et.x-lt.x,zt=et.y-lt.y,Et=P.x-et.x,R=P.y-et.y,S=pt*pt+zt*zt,G=pt*R-zt*Et;if(Math.abs(G)>Number.EPSILON){const J=Math.sqrt(S),nt=Math.sqrt(Et*Et+R*R),Q=lt.x-zt/J,Pt=lt.y+pt/J,_t=P.x-R/nt,At=P.y+Et/nt,Kt=((_t-Q)*R-(At-Pt)*Et)/(pt*R-zt*Et);ct=Q+pt*Kt-et.x,rt=Pt+zt*Kt-et.y;const ht=ct*ct+rt*rt;if(ht<=2)return new at(ct,rt);St=Math.sqrt(ht/2)}else{let J=!1;pt>Number.EPSILON?Et>Number.EPSILON&&(J=!0):pt<-Number.EPSILON?Et<-Number.EPSILON&&(J=!0):Math.sign(zt)===Math.sign(R)&&(J=!0),J?(ct=-zt,rt=pt,St=Math.sqrt(S)):(ct=pt,rt=zt,St=Math.sqrt(S/2))}return new at(ct/St,rt/St)}const ut=[];for(let et=0,lt=q.length,P=lt-1,ct=et+1;et<lt;et++,P++,ct++)P===lt&&(P=0),ct===lt&&(ct=0),ut[et]=H(q[et],q[P],q[ct]);const mt=[];let xt,Nt=ut.concat();for(let et=0,lt=C.length;et<lt;et++){const P=C[et];xt=[];for(let ct=0,rt=P.length,St=rt-1,pt=ct+1;ct<rt;ct++,St++,pt++)St===rt&&(St=0),pt===rt&&(pt=0),xt[ct]=H(P[ct],P[St],P[pt]);mt.push(xt),Nt=Nt.concat(xt)}for(let et=0;et<m;et++){const lt=et/m,P=u*Math.cos(lt*Math.PI/2),ct=g*Math.sin(lt*Math.PI/2)+_;for(let rt=0,St=q.length;rt<St;rt++){const pt=j(q[rt],ut[rt],ct);st(pt.x,pt.y,-P)}for(let rt=0,St=C.length;rt<St;rt++){const pt=C[rt];xt=mt[rt];for(let zt=0,Et=pt.length;zt<Et;zt++){const R=j(pt[zt],xt[zt],ct);st(R.x,R.y,-P)}}}const Qt=g+_;for(let et=0;et<U;et++){const lt=f?j(y[et],Nt[et],Qt):y[et];v?(A.copy(b.normals[0]).multiplyScalar(lt.x),T.copy(b.binormals[0]).multiplyScalar(lt.y),L.copy(x[0]).add(A).add(T),st(L.x,L.y,L.z)):st(lt.x,lt.y,0)}for(let et=1;et<=h;et++)for(let lt=0;lt<U;lt++){const P=f?j(y[lt],Nt[lt],Qt):y[lt];v?(A.copy(b.normals[et]).multiplyScalar(P.x),T.copy(b.binormals[et]).multiplyScalar(P.y),L.copy(x[et]).add(A).add(T),st(L.x,L.y,L.z)):st(P.x,P.y,d/h*et)}for(let et=m-1;et>=0;et--){const lt=et/m,P=u*Math.cos(lt*Math.PI/2),ct=g*Math.sin(lt*Math.PI/2)+_;for(let rt=0,St=q.length;rt<St;rt++){const pt=j(q[rt],ut[rt],ct);st(pt.x,pt.y,d+P)}for(let rt=0,St=C.length;rt<St;rt++){const pt=C[rt];xt=mt[rt];for(let zt=0,Et=pt.length;zt<Et;zt++){const R=j(pt[zt],xt[zt],ct);v?st(R.x,R.y+x[h-1].y,x[h-1].x+P):st(R.x,R.y,d+P)}}}F(),K();function F(){const et=s.length/3;if(f){let lt=0,P=U*lt;for(let ct=0;ct<Y;ct++){const rt=B[ct];Rt(rt[2]+P,rt[1]+P,rt[0]+P)}lt=h+m*2,P=U*lt;for(let ct=0;ct<Y;ct++){const rt=B[ct];Rt(rt[0]+P,rt[1]+P,rt[2]+P)}}else{for(let lt=0;lt<Y;lt++){const P=B[lt];Rt(P[2],P[1],P[0])}for(let lt=0;lt<Y;lt++){const P=B[lt];Rt(P[0]+U*h,P[1]+U*h,P[2]+U*h)}}n.addGroup(et,s.length/3-et,0)}function K(){const et=s.length/3;let lt=0;yt(q,lt),lt+=q.length;for(let P=0,ct=C.length;P<ct;P++){const rt=C[P];yt(rt,lt),lt+=rt.length}n.addGroup(et,s.length/3-et,1)}function yt(et,lt){let P=et.length;for(;--P>=0;){const ct=P;let rt=P-1;rt<0&&(rt=et.length-1);for(let St=0,pt=h+m*2;St<pt;St++){const zt=U*St,Et=U*(St+1),R=lt+ct+zt,S=lt+rt+zt,G=lt+rt+Et,J=lt+ct+Et;Lt(R,S,G,J)}}}function st(et,lt,P){l.push(et),l.push(lt),l.push(P)}function Rt(et,lt,P){Ht(et),Ht(lt),Ht(P);const ct=s.length/3,rt=M.generateTopUV(n,s,ct-3,ct-2,ct-1);te(rt[0]),te(rt[1]),te(rt[2])}function Lt(et,lt,P,ct){Ht(et),Ht(lt),Ht(ct),Ht(lt),Ht(P),Ht(ct);const rt=s.length/3,St=M.generateSideWallUV(n,s,rt-6,rt-3,rt-2,rt-1);te(St[0]),te(St[1]),te(St[3]),te(St[1]),te(St[2]),te(St[3])}function Ht(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function te(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return kg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new xa[s.type]().fromJSON(s)),new rs(n,t.options)}}const Fg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new at(r,o),new at(a,l),new at(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[s*3],u=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new at(o,1-l),new at(c,1-d),new at(f,1-g),new at(_,1-p)]:[new at(a,1-l),new at(h,1-d),new at(u,1-g),new at(m,1-p)]}};function kg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class sn extends Gr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sn(t.radius,t.detail)}}class za extends Gr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new za(t.radius,t.detail)}}class Ba extends de{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const f=(e-t)/s,u=new D,g=new at;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;u.x=d*Math.cos(p),u.y=d*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,x=M,v=M+n+1,b=M+n+2,T=M+1;a.push(x,v,T),a.push(v,b,T)}}this.setIndex(a),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ba(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ha extends de{constructor(t=new bi([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function c(h){const d=s.length/3,f=h.extractPoints(e);let u=f.shape;const g=f.holes;yn.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,p=g.length;m<p;m++){const M=g[m];yn.isClockWise(M)===!0&&(g[m]=M.reverse())}const _=yn.triangulateShape(u,g);for(let m=0,p=g.length;m<p;m++){const M=g[m];u=u.concat(M)}for(let m=0,p=u.length;m<p;m++){const M=u[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=_.length;m<p;m++){const M=_[m],x=M[0]+d,v=M[1]+d,b=M[2]+d;n.push(x,v,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return zg(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Ha(n,t.curveSegments)}}function zg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class wn extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new D,f=new D,u=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const T=b/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(T+v,1-x),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const x=h[p][M+1],v=h[p][M],b=h[p+1][M],T=h[p+1][M+1];(p!==0||o>0)&&u.push(x,v,T),(p!==n-1||l<Math.PI)&&u.push(v,b,T)}this.setIndex(u),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class us extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new D,d=new D,f=new D;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){const _=g/s*r,m=u/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){const _=(s+1)*u+g-1,m=(s+1)*(u-1)+g-1,p=(s+1)*(u-1)+g,M=(s+1)*u+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ee extends cs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ga extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Bg extends Ga{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Eo=new ne,sc=new D,rc=new D;class Ih{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ua,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(sc),rc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rc),e.updateMatrixWorld(),Eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hg extends Ih{constructor(){super(new je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ns*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Gg extends Ga{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Hg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vg extends Ih{constructor(){super(new vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wg extends Ga{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Vg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=oc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=oc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function oc(){return performance.now()}const ac=new ne;class qg{constructor(t,e,n=0,s=1/0){this.ray=new Br(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ia,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ac.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ac),this}intersectObject(t,e=!0,n=[]){return ba(t,this,n,e),n.sort(lc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ba(t[s],this,n,e);return n.sort(lc),n}}function lc(i,t){return i.distance-t.distance}function ba(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ba(r[o],t,e,!0)}}class cc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Yg extends xi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wa);const hc={type:"change"},Va={type:"start"},Uh={type:"end"},xr=new Br,uc=new Zn,$g=Math.cos(70*Us.DEG2RAD),be=new D,We=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},To=1e-6;class jg extends Yg{constructor(t,e=null){super(t,e),this.state=he.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new bn,this._lastTargetPosition=new D,this._quat=new bn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cc,this._sphericalDelta=new cc,this._scale=1,this._panOffset=new D,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new D,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Kg.bind(this),this._onPointerDown=Zg.bind(this),this._onPointerUp=Jg.bind(this),this._onContextMenu=r_.bind(this),this._onMouseWheel=e_.bind(this),this._onKeyDown=n_.bind(this),this._onTouchStart=i_.bind(this),this._onTouchMove=s_.bind(this),this._onMouseDown=Qg.bind(this),this._onMouseMove=t_.bind(this),this._interceptControlDown=o_.bind(this),this._interceptControlUp=a_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hc),this.update(),this.state=he.NONE}update(t=null){const e=this.object.position;be.copy(e).sub(this.target),be.applyQuaternion(this._quat),this._spherical.setFromVector3(be),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=We:n>Math.PI&&(n-=We),s<-Math.PI?s+=We:s>Math.PI&&(s-=We),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(be.setFromSpherical(this._spherical),be.applyQuaternion(this._quatInverse),e.copy(this.target).add(be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=be.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(xr.origin.copy(this.object.position),xr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xr.direction))<$g?this.object.lookAt(this.target):(uc.setFromNormalAndCoplanarPoint(this.object.up,this.target),xr.intersectPlane(uc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>To||8*(1-this._lastQuaternion.dot(this.object.quaternion))>To||this._lastTargetPosition.distanceToSquared(this.target)>To?(this.dispatchEvent(hc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?We/60*this.autoRotateSpeed*t:We/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){be.setFromMatrixColumn(e,0),be.multiplyScalar(-t),this._panOffset.add(be)}_panUp(t,e){this.screenSpacePanning===!0?be.setFromMatrixColumn(e,1):(be.setFromMatrixColumn(e,0),be.crossVectors(this.object.up,be)),be.multiplyScalar(t),this._panOffset.add(be)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;be.copy(s).sub(this.target);let r=be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Zg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Kg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Jg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Uh),this.state=he.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Qg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=he.DOLLY;break;case Yi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=he.ROTATE}break;case Yi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(Va)}function t_(i){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function e_(i){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(i.preventDefault(),this.dispatchEvent(Va),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Uh))}function n_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function i_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=he.TOUCH_ROTATE;break;case Wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case Wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=he.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(Va)}function s_(i){switch(this._trackPointer(i),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=he.NONE}}function r_(i){this.enabled!==!1&&i.preventDefault()}function o_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function a_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}async function l_(i){const t=await fetch(i);if(!t.ok)throw new Error(`Failed to load ${i}: ${t.status}`);return t.json()}class c_{constructor(t){k(this,"n");k(this,"x");k(this,"z");k(this,"s");k(this,"length");k(this,"vtx");k(this,"vtz");const e=this.n=t.length/2;this.x=new Float64Array(e),this.z=new Float64Array(e),this.s=new Float64Array(e);for(let n=0;n<e;n++)this.x[n]=t[n*2],this.z[n]=t[n*2+1],n>0&&(this.s[n]=this.s[n-1]+Math.hypot(this.x[n]-this.x[n-1],this.z[n]-this.z[n-1]));this.length=this.s[e-1],this.vtx=new Float64Array(e),this.vtz=new Float64Array(e);for(let n=0;n<e;n++){const s=Math.max(0,n-1),r=Math.min(e-1,n+1),o=this.x[r]-this.x[s],a=this.z[r]-this.z[s],l=Math.hypot(o,a)||1;this.vtx[n]=o/l,this.vtz[n]=a/l}}segIndex(t){let e=0,n=this.n-2;for(;e<n;){const s=e+n+1>>1;this.s[s]<=t?e=s:n=s-1}return e}frame(t,e={x:0,z:0,tx:0,tz:1,nx:-1,nz:0}){const n=this.segIndex(t),s=(t-this.s[n])/(this.s[n+1]-this.s[n]||1);e.x=this.x[n]+(this.x[n+1]-this.x[n])*s,e.z=this.z[n]+(this.z[n+1]-this.z[n])*s;let r=this.vtx[n]+(this.vtx[n+1]-this.vtx[n])*s,o=this.vtz[n]+(this.vtz[n+1]-this.vtz[n])*s;const a=Math.hypot(r,o)||1;return r/=a,o/=a,e.tx=r,e.tz=o,e.nx=-o,e.nz=r,e}point(t,e){const n=this.frame(t);return[n.x+n.nx*e,n.z+n.nz*e]}project(t,e,n=-1){let s,r;if(n>=0){const h=this.segIndex(n);s=Math.max(0,h-60),r=Math.min(this.n-2,h+60)}else{let h=1/0,d=0;for(let f=0;f<this.n;f+=8){const u=(t-this.x[f])**2+(e-this.z[f])**2;u<h&&(h=u,d=f)}s=Math.max(0,d-24),r=Math.min(this.n-2,d+24)}let o=1/0,a=0,l=1;for(let h=s;h<=r;h++){const d=this.x[h],f=this.z[h],u=this.x[h+1]-d,g=this.z[h+1]-f,_=u*u+g*g||1e-9;let m=((t-d)*u+(e-f)*g)/_;m=m<0?0:m>1?1:m;const p=d+u*m,M=f+g*m,x=(t-p)**2+(e-M)**2;x<o&&(o=x,a=this.s[h]+Math.sqrt(_)*m,l=(t-d)*-g+(e-f)*u>=0?1:-1)}const c=Math.sqrt(o);return{s:a,d:c*l,dist:c}}}function fn(i,t,e=0){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const dc=i=>i*i*(3-2*i);function h_(i,t,e=0){const n=Math.floor(i),s=Math.floor(t),r=dc(i-n),o=dc(t-s),a=fn(n,s,e),l=fn(n+1,s,e),c=fn(n,s+1,e),h=fn(n+1,s+1,e);return(a+(l-a)*r+(c-a)*o+(a-l-c+h)*r*o)*2-1}function Qn(i,t,e=4,n=0){let s=0,r=.5,o=1;for(let a=0;a<e;a++)s+=r*h_(i*o,t*o,n+a*17),r*=.5,o*=2.03;return s}function os(i){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const xe=(i,t,e)=>i<t?t:i>e?e:i,Gi=(i,t,e)=>i+(t-i)*e,Le=(i,t,e)=>{const n=xe((e-i)/(t-i),0,1);return n*n*(3-2*n)},un=5.2,Jn=2.2,Sa=3.1,u_=1.6,d_=10.5,Mr=22*4.4,f_=.8,p_=7,m_=3,g_=.04,fc=.08;class __{constructor(t,e,n,s=[],r=0){k(this,"bodies",[]);k(this,"gates",[]);k(this,"groups",[]);k(this,"events",[]);k(this,"hwTable");k(this,"hwStep",.5);k(this,"overflowCooldown",0);this.length=n,this.windingHoles=s;const o=[];for(const f of[...t].sort((u,g)=>u.s0-g.s0)){const u=o.at(-1);u&&Math.abs(u.at(-1).s1-f.s0)<4?u.push(f):o.push([f])}let a=r,l=0,c=0;for(const f of o){const u=f.length>1,g=u?v_(f):f[0].name;this.bodies.push({kind:"pound",s0:l,s1:f[0].s0,level:a,lo:a,hi:a,label:"the canal"});const _={name:g,staircase:u,gates:[],bodies:[this.bodies.length-1]};this.groups.push(_);for(let m=0;m<f.length;m++){const p=f[m],M=m===0?p.s0:f[m-1].s1,x=a,v=a+p.rise,b=u?m>0:c++%2===1,T=u?`chamber ${m+1}`:"the lock";this.bodies.push({kind:"chamber",s0:M,s1:p.s1,level:b?v:x,lo:x,hi:v,lockName:g,label:T}),_.bodies.push(this.bodies.length-1),a=v}l=f.at(-1).s1;for(let m=0;m<=f.length;m++){const p=this.bodies.length-1-f.length+m,M=m===0?"bottom gates":m===f.length?"top gates":f.length===2?"middle gates":f.length===3?`middle gates (${m===1?"lower":"upper"})`:`middle gates ${m}`,x={s:m===0?f[0].s0:f[m-1].s1,below:p,above:p+1,open:0,wantOpen:!1,paddle:0,wantPaddle:!1,flow:0,lockName:g,label:M,group:_};this.gates.push(x),_.gates.push(x)}_.bodies.push(this.bodies.length)}this.bodies.push({kind:"pound",s0:l,s1:n,level:a,lo:a,hi:a,label:"the canal"});const h=Math.ceil(n/this.hwStep)+1;this.hwTable=new Float32Array(h);const d=e.filter(f=>f.kind==="road"&&f.w<12);for(let f=0;f<h;f++){const u=f*this.hwStep;let g=un;for(const _ of this.bodies){if(_.kind!=="chamber")continue;const m=Math.max(_.s0-u,u-_.s1,0);g=Math.min(g,Jn+(un-Jn)*Le(.5,9,m))}for(const _ of d){const m=Math.max(Math.abs(u-_.s)-_.w/2-3.5,0);g=Math.min(g,Sa+(un-Sa)*Le(0,7,m))}for(const _ of s){const m=Math.abs(u-_);m<26&&(g=Math.max(g,un+(d_-un)*Le(26,9,m)))}this.hwTable[f]=g}}bodyIndexAt(t){for(let e=0;e<this.bodies.length;e++)if(t<this.bodies[e].s1)return e;return this.bodies.length-1}levelAt(t){return this.bodies[this.bodyIndexAt(t)].level}bedAt(t){return this.bodies[this.bodyIndexAt(t)].lo-u_}halfWidthAt(t){const e=xe(t/this.hwStep,0,this.hwTable.length-1),n=Math.floor(e),s=e-n,r=this.hwTable[n],o=this.hwTable[Math.min(n+1,this.hwTable.length-1)];return r+(o-r)*s}levelsMatch(t){return Math.abs(this.bodies[t.below].level-this.bodies[t.above].level)<g_}openBlocker(t){return this.levelsMatch(t)?null:`The water's ${Math.abs(this.bodies[t.below].level-this.bodies[t.above].level).toFixed(1)} m higher on one side, so the gates won't budge. Raise the paddles first.`}toggleGate(t,e){if(t.wantOpen)return e?"The boat's in the way of the gates.":(t.wantOpen=!1,null);const n=this.openBlocker(t);return n||(t.wantOpen=!0,null)}togglePaddle(t){t.wantPaddle=!t.wantPaddle}gateBlocks(t){return t.open<.97}update(t){this.overflowCooldown-=t;for(const n of this.gates)n.open=xe(n.open+(n.wantOpen?1:-1)*(t/p_),0,1),n.paddle=xe(n.paddle+(n.wantPaddle?1:-1)*(t/m_),0,1);const e=this.bodies.map(n=>n.kind==="chamber"?n.lo:-1/0);for(let n=!0;n;){n=!1;for(const s of this.gates){if(s.open<=.02)continue;const r=Math.max(e[s.below],e[s.above]);(e[s.below]!==r||e[s.above]!==r)&&(e[s.below]=e[s.above]=r,n=!0)}}for(const n of this.gates){const s=f_*n.paddle+(n.open>.02?40*n.open:0),r=this.bodies[n.below],a=this.bodies[n.above].level-r.level;if(n.flow=0,s<=0||Math.abs(a)<1e-5)continue;const[l,c]=a>0?[n.above,n.below]:[n.below,n.above],h=this.bodies[l],d=this.bodies[c],f=h.kind==="chamber",u=d.kind==="chamber";if(!f&&!u)continue;let g=s*Math.sqrt(2*9.81*Math.abs(a))*t;f&&(g=Math.min(g,Math.max(0,h.level-e[l])*Mr)),g=Math.min(g,Math.abs(a)*Mr/(f&&u?2:1)),!(g<=0)&&(f&&(h.level-=g/Mr),u&&(d.level+=g/Mr),n.flow=Math.sign(a)*(g/t))}this.bodies.forEach((n,s)=>{if(n.kind!=="chamber"||n.level<=n.hi+fc||(n.level=n.hi+fc,this.overflowCooldown>0))return;const r=this.gates.find(l=>l.paddle>.05&&(l.below===s&&this.bodies[l.above].level>n.level||l.above===s&&this.bodies[l.below].level>n.level)),o=this.gates.find(l=>l.below===s||l.above===s).group,a=o.staircase?`${n.label} of ${o.name}`:o.name;this.events.push({text:r?`${pc(a)} is overflowing: the paddles on the ${r.label} are still up.`:`${pc(a)} is overflowing!`,kind:"warn",group:o}),this.overflowCooldown=12})}}const pc=i=>i[0].toUpperCase()+i.slice(1);function v_(i){const t=i[0].name.split(" ")[0];return i.every(e=>e.name.startsWith(t))?`${t} Staircase`:`${i[0].name} flight`}const x_=2,Ao=1.1,mc=44,yr=8,M_=.8,le=1,Xe={bed:new Ot("#2a2f24"),wallStone:new Ot("#77706a"),wallSandstone:new Ot("#9b5644"),coping:new Ot("#bdb3a3"),towpath:new Ot("#b59d78"),grass:new Ot("#6f9a4c"),grassDark:new Ot("#5c8a42"),field:new Ot("#86a85a"),paved:new Ot("#8f8b84"),park:new Ot("#5e9445")};class y_{constructor(t,e,n){k(this,"bank");k(this,"smoothBank");k(this,"bankStep",2);k(this,"riverLevel");k(this,"riverDist",null);k(this,"riverGrid",{x0:0,z0:0,w:0,h:0,cell:20});k(this,"urbanAt",()=>0);k(this,"parkAt",()=>!1);k(this,"cuttings",[]);this.route=t,this.ww=e,this.bounds=n;const s=Math.ceil(t.length/this.bankStep)+1,r=new Float32Array(s);for(let o=0;o<s;o++){const a=o*this.bankStep;let l=-1/0;for(const c of e.bodies)c.s1>a-4&&c.s0<a+4&&(l=Math.max(l,c.hi));r[o]=l+M_}this.bank=r,this.smoothBank=_c(_c(r,15),15),this.riverLevel=e.bodies[0].lo-6}bankTop(t){return gc(this.bank,t/this.bankStep)}setRivers(t){const{bounds:e}=this,n=this.riverGrid.cell,s=Math.ceil((e.x1-e.x0)/n)+1,r=Math.ceil((e.z1-e.z0)/n)+1;this.riverGrid={x0:e.x0,z0:e.z0,w:s,h:r,cell:n};const o=new Float32Array(s*r).fill(1e9);for(const a of t)for(let l=0;l+3<a.p.length;l+=2){const c=a.p[l],h=a.p[l+1],d=a.p[l+2],f=a.p[l+3],u=120,g=Math.max(0,Math.floor((Math.min(c,d)-u-e.x0)/n)),_=Math.min(s-1,Math.ceil((Math.max(c,d)+u-e.x0)/n)),m=Math.max(0,Math.floor((Math.min(h,f)-u-e.z0)/n)),p=Math.min(r-1,Math.ceil((Math.max(h,f)+u-e.z0)/n));for(let M=m;M<=p;M++)for(let x=g;x<=_;x++){const v=S_(e.x0+x*n,e.z0+M*n,c,h,d,f)-a.w/2;v<o[M*s+x]&&(o[M*s+x]=v)}}this.riverDist=o}riverDistAt(t,e){if(!this.riverDist)return 1e9;const n=this.riverGrid,s=xe((t-n.x0)/n.cell,0,n.w-1.001),r=xe((e-n.z0)/n.cell,0,n.h-1.001),o=Math.floor(s),a=Math.floor(r),l=s-o,c=r-a,h=this.riverDist;return Gi(Gi(h[a*n.w+o],h[a*n.w+o+1],l),Gi(h[(a+1)*n.w+o],h[(a+1)*n.w+o+1],l),c)}cliffSide(t,e){return this.cuttings.some(n=>n.side===e&&t>n.s0-25&&t<n.s1+25)}cuttingAt(t,e){for(const n of this.cuttings){if(t<n.s0-40||t>n.s1+40)continue;const s=Le(n.s0-30,n.s0+15,t)*(1-Le(n.s1-15,n.s1+30,t)),r=this.ww.halfWidthAt(t),o=Math.abs(e);if(Math.sign(e)===n.side){const l=Le(r+3.3,r+6.2,o);return{h:n.cliff*l*s,cliff:s*(o>r+3.2&&o<r+6.5?1:0)}}const a=Le(r+3.6,r+16,o);return{h:n.far*a*s,cliff:s*(a>.05&&a<.6?.7:0)}}return{h:0,cliff:0}}landHeight(t,e,n,s){const r=this.ww.halfWidthAt(n),o=Math.abs(s);let a=Gi(this.bankTop(n),gc(this.smoothBank,n/this.bankStep),Le(r+3,r+24,o));const l=Le(r+6,140,o);a+=Qn(t*.004,e*.004,3,7)*3.5*l+Qn(t*.03,e*.03,2,3)*.35*Le(r+3,r+12,o);const c=this.riverDistAt(t,e);return c<40&&(a=Gi(this.riverLevel-1.5,a,Le(-2,40,c))),a+this.cuttingAt(n,s).h}heightAt(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s);return n.dist<s?this.ww.bedAt(n.s):this.landHeight(t,e,n.s,n.d)}buildStrip(){const{route:t,ww:e}=this,n=[];for(let g=0;g<t.length;g+=x_)n.push(g);n.push(t.length);for(const g of e.gates)n.push(g.s-.05,g.s+.05,g.s+Ao-.05,g.s+Ao+.05);n.sort((g,_)=>g-_);const s=n.length,r=g=>[[0,"bed"],[g-.8,"bed"],[g,"wallBase"],[g,"wallTop"],[g+.5,"coping"],[g+.55,"path"],[g+2.6,"path"],[g+3.4,"land"],[g+6.3,"land"],[g+7,"land"],[Math.max(14,g+9),"land"],[Math.max(22,g+15),"land"],[Math.max(32,g+24),"land"],[Math.max(mc,g+34),"land"]],o=r(un).length,a=o*2-1,l=new Float32Array(s*a*3),c=new Float32Array(s*a*3),h={x:0,z:0,tx:0,tz:0,nx:0,nz:0},d=new Ot;for(let g=0;g<s;g++){const _=n[g];t.frame(_,h);const m=e.halfWidthAt(_),p=this.bankTop(_),M=e.gates.find(A=>_>=A.s&&_<A.s+Ao),x=e.bedAt(M?M.s-.01:_),v=e.bodies[e.bodyIndexAt(_)].kind==="chamber"||m<un-.5,b=b_(t,_),T=r(m);for(let A=0;A<a;A++){const L=A<o-1?-1:1,w=L<0?o-1-A:A-(o-1);let[y,C]=T[w];C==="land"&&Math.abs(b)>1e-4&&Math.sign(b)===L&&(y=Math.min(y,Math.max(m+3.6,.8/Math.abs(b))));const z=h.x+h.nx*y*L,B=h.z+h.nz*y*L,q=L===le||v;let j;switch(C){case"bed":j=x,d.copy(Xe.bed);break;case"wallBase":j=x+.2,d.copy(v?Xe.wallSandstone:Xe.wallStone);break;case"wallTop":j=p,d.copy(v?Xe.wallSandstone:Xe.wallStone);break;case"coping":j=p+.04,d.copy(Xe.coping);break;case"path":j=p,d.copy(q?Xe.towpath:Xe.grassDark);break;default:j=this.landHeight(z,B,_,y*L),this.groundColour(z,B,_,y*L,d)}C==="path"&&q&&d.offsetHSL(0,0,(fn(g,A,5)-.5)*.04);const U=(g*a+A)*3;l[U]=z,l[U+1]=j,l[U+2]=B,c[U]=d.r,c[U+1]=d.g,c[U+2]=d.b}}const f=vc(l,c,s,a,!0),u=new it(f,Mc());return u.receiveShadow=!0,u.name="strip",u}buildFar(){const{bounds:t,route:e,ww:n}=this,s=Math.ceil((t.x1-t.x0)/yr)+1,r=Math.ceil((t.z1-t.z0)/yr)+1,o=new Float32Array(s*r*3),a=new Float32Array(s*r*3),l=new Ot;let c=-1;for(let f=0;f<r;f++)for(let u=0;u<s;u++){const g=t.x0+u*yr,_=t.z0+f*yr,m=e.project(g,_,c),p=m.dist>150?e.project(g,_):m;c=p.dist<150?p.s:-1;const M=n.halfWidthAt(p.s);let x;p.dist<M+14?x=n.bedAt(p.s)-3:p.dist<mc?x=this.landHeight(g,_,p.s,p.d)-.15:x=this.landHeight(g,_,p.s,p.d),this.groundColour(g,_,p.s,p.d,l);const v=(f*s+u)*3;o[v]=g,o[v+1]=x,o[v+2]=_,a[v]=l.r,a[v+1]=l.g,a[v+2]=l.b}const h=vc(o,a,r,s),d=new it(h,Mc());return d.receiveShadow=!0,d.name="far-terrain",d}groundColour(t,e,n,s,r){const o=Math.abs(s),a=Math.floor(t/150+Qn(t*.01,e*.01,2,1)*.6),l=Math.floor(e/130+Qn(t*.01,e*.01,2,2)*.6),c=fn(a,l,11);r.copy(Xe.grass).lerp(Xe.field,c*.8),r.offsetHSL(0,0,(fn(Math.floor(t/4),Math.floor(e/4),3)-.5)*.035),this.parkAt(t,e)&&r.lerp(Xe.park,.7);const h=this.urbanAt(t,e)*Le(8,20,o);r.lerp(Xe.paved,h*.85);const d=this.riverDistAt(t,e);d<12&&r.lerp(Xe.bed,Le(12,0,d)*.5);const f=this.cuttingAt(n,s);f.cliff>0&&r.lerp(Xe.wallSandstone,f.cliff).offsetHSL(0,0,(fn(Math.floor(t/2),Math.floor(e/3),8)-.5)*.06)}}function b_(i,t){const e=i.frame(Math.max(0,t-8)),n=i.frame(Math.min(i.length,t+8)),s=n.tx-e.tx,r=n.tz-e.tz,o=i.frame(t);return(s*o.nx+r*o.nz)/16}function gc(i,t){t=xe(t,0,i.length-1);const e=Math.floor(t);return Gi(i[e],i[Math.min(e+1,i.length-1)],t-e)}function _c(i,t){const e=new Float32Array(i.length);for(let n=0;n<i.length;n++){let s=0,r=0;for(let o=-t;o<=t;o++){const a=n+o;a>=0&&a<i.length&&(s+=i[a],r++)}e[n]=s/r}return e}function S_(i,t,e,n,s,r){const o=s-e,a=r-n,l=xe(((i-e)*o+(t-n)*a)/(o*o+a*a||1),0,1);return Math.hypot(i-e-o*l,t-n-a*l)}function vc(i,t,e,n,s=!1){const r=new Uint32Array((e-1)*(n-1)*6);let o=0;for(let l=0;l<e-1;l++)for(let c=0;c<n-1;c++){const h=l*n+c,d=h+1,f=h+n,u=f+1;s?(r[o++]=h,r[o++]=d,r[o++]=f,r[o++]=d,r[o++]=u,r[o++]=f):(r[o++]=h,r[o++]=f,r[o++]=d,r[o++]=d,r[o++]=f,r[o++]=u)}const a=new de;return a.setAttribute("position",new Oe(i,3)),a.setAttribute("color",new Oe(t,3)),a.setIndex(new Oe(r,1)),a.computeVertexNormals(),a}let xc=null;function Mc(){return xc??(xc=new ee({vertexColors:!0,roughness:.95,flatShading:!0})),xc}function w_(i=256){const t=new Float32Array(i*i),e=8;for(let o=0;o<i;o++)for(let a=0;a<i;a++){const l=a/i*e,c=o/i*e;t[o*i+a]=yc(l,c,e)*.6+yc(l*2,c*2,e*2)*.3}const n=new ImageData(i,i);for(let o=0;o<i;o++)for(let a=0;a<i;a++){const l=t[o*i+(a-1+i)%i],c=t[o*i+(a+1)%i],h=t[(o-1+i)%i*i+a],d=t[(o+1)%i*i+a],f=(l-c)*3,u=(h-d)*3,g=1,_=Math.hypot(f,u,g),m=(o*i+a)*4;n.data[m]=(f/_*.5+.5)*255,n.data[m+1]=(u/_*.5+.5)*255,n.data[m+2]=(g/_*.5+.5)*255,n.data[m+3]=255}const s=document.createElement("canvas");s.width=s.height=i,s.getContext("2d").putImageData(n,0,0);const r=new Hs(s);return r.wrapS=r.wrapT=Ir,r}function yc(i,t,e){const n=i/e,s=t/e,r=Qn(i,t,3,2),o=Qn(i-e,t,3,2),a=Qn(i,t-e,3,2),l=Qn(i-e,t-e,3,2);return(r*(1-n)+o*n)*(1-s)+(a*(1-n)+l*n)*s}class E_{constructor(t,e){k(this,"group",new Bt);k(this,"material");k(this,"normalMap");k(this,"chamberMeshes",[]);this.route=t,this.ww=e,this.normalMap=w_(),this.material=new ee({color:"#3d5c47",roughness:.12,metalness:0,normalMap:this.normalMap,normalScale:new at(.28,.28),transparent:!0,opacity:.93,envMapIntensity:.9}),e.bodies.forEach((n,s)=>{const r=this.ribbon(n.s0-.15,n.s1+.15),o=new it(r,this.material);o.position.y=n.level,o.receiveShadow=!0,this.group.add(o),n.kind==="chamber"&&this.chamberMeshes.push({mesh:o,body:s})})}ribbon(t,e){const{route:n,ww:s}=this;t=Math.max(0,t),e=Math.min(n.length,e);const r=Math.max(2,Math.ceil((e-t)/1.5)+1),o=[],a=[],l=[];for(let h=0;h<r;h++){const d=t+(e-t)*h/(r-1),f=n.frame(d),u=s.halfWidthAt(d)+.12;for(const g of[-1,1]){const _=f.x+f.nx*u*g,m=f.z+f.nz*u*g;o.push(_,0,m),a.push(_/7,m/7)}if(h>0){const g=(h-1)*2;l.push(g,g+1,g+2,g+1,g+3,g+2)}}const c=new de;return c.setAttribute("position",new Zt(o,3)),c.setAttribute("uv",new Zt(a,2)),c.setIndex(l),c.computeVertexNormals(),c}addRivers(t,e){for(const n of t){const s=[],r=[],o=[],a=n.p.length/2;for(let h=0;h<a;h++){const d=Math.max(0,h-1),f=Math.min(a-1,h+1);let u=n.p[f*2]-n.p[d*2],g=n.p[f*2+1]-n.p[d*2+1];const _=Math.hypot(u,g)||1;u/=_,g/=_;for(const m of[-1,1]){const p=n.p[h*2]-g*(n.w/2)*m,M=n.p[h*2+1]+u*(n.w/2)*m;s.push(p,e,M),r.push(p/7,M/7)}if(h>0){const m=(h-1)*2;o.push(m,m+2,m+1,m+1,m+2,m+3)}}const l=new de;l.setAttribute("position",new Zt(s,3)),l.setAttribute("uv",new Zt(r,2)),l.setIndex(o),l.computeVertexNormals();const c=this.material.clone();c.side=ze,c.color.set("#4a6a5c"),this.group.add(new it(l,c))}}addPond(t,e){const n=new bi;for(let l=0;l<t.length;l+=2)(l?n.lineTo:n.moveTo).call(n,t[l],-t[l+1]);const s=new Ha(n);s.rotateX(-Math.PI/2);const r=s.getAttribute("position"),o=s.getAttribute("uv");for(let l=0;l<r.count;l++)o.setXY(l,r.getX(l)/7,r.getZ(l)/7);const a=new it(s,this.material);a.position.y=e,this.group.add(a)}update(t){this.normalMap.offset.x+=t*.012,this.normalMap.offset.y+=t*.007;for(const e of this.chamberMeshes)e.mesh.position.y=this.ww.bodies[e.body].level}}const zi={brick:new ee({color:"#8b4a3b",roughness:.9,flatShading:!0}),sandstone:new ee({color:"#a8654f",roughness:.9,flatShading:!0}),concrete:new ee({color:"#a39f97",roughness:.85,flatShading:!0}),iron:new ee({color:"#3d434b",roughness:.6,metalness:.3,flatShading:!0}),coping:new ee({color:"#c4bba9",roughness:.9,flatShading:!0})},bc=Math.tan(40*Math.PI/180);class T_{constructor(t,e,n,s){k(this,"group",new Bt);k(this,"placed",[]);k(this,"ray",new qg);k(this,"faded",new Map);for(const r of n){const o=t.frame(r.s),a=e.levelAt(r.s),l=r.kind==="road"&&r.w<12,c=Math.sin(r.dir),h=Math.cos(r.dir),d=c*o.nx+h*o.nz,f=c*o.tx+h*o.tz,u=Us.clamp(f/(Math.abs(d)<.001?.001:d),-bc,bc),g=un+8,_=un+8,m=Math.max(...[-1,1].map(w=>{const[y,C]=t.point(r.s,_*w);return s.landHeight(y,C,r.s,_*w)})),p=Math.max(a+(l?3.4:4.6),m+.2),M=new Bt;M.position.set(o.x,0,o.z),M.rotation.y=Math.atan2(-o.nz,o.nx);const x=Math.max(r.w+.8,3.2)*Math.sqrt(1+u*u);this.placed.push({data:r,x:o.x,z:o.z,deck:p,halfSpan:g,arch:l,depth:x,tanSkew:u});const v=l?A_(g,Sa+.05,a,p):R_(g,un+1.2,a,p),b=new rs(v,{depth:x,bevelEnabled:!1,curveSegments:10});b.translate(0,0,-x/2);const T=l?r.w<=3.5?zi.sandstone:zi.brick:r.kind==="rail"?zi.iron:zi.concrete,A=new it(b,T);A.castShadow=A.receiveShadow=!0,M.add(A);for(const w of[-1,1]){const y=new it(new Jt(g*2*.92,1,.35),l?zi.coping:T);y.position.set(0,p+.5,w*(x/2-.12)),y.castShadow=!0,M.add(y)}if(!l)for(const w of[-1,1]){const y=new it(new Jt(1.2,p-a+1.15,x+.3),zi.concrete);y.position.set(w*(un+1.2+.6-.08),(p-1.15+a-2.3)/2,0),M.add(y)}const L=new ne().makeShear(0,-u,0,0,0,0);for(const w of M.children){const y=w;y.updateMatrix(),y.geometry=y.geometry.applyMatrix4(y.matrix).applyMatrix4(L),y.position.set(0,0,0),y.rotation.set(0,0,0)}M.traverse(w=>{const y=w;y.isMesh&&(y.material=y.material.clone())}),M.name=`bridge:${r.name??r.s}`,this.group.add(M)}}rampAt(t,e){let n=-1/0,s=!1;for(const r of this.placed){if(Math.abs(t-(r.data.s+r.tanSkew*e))>r.depth/2+1)continue;const a=Math.abs(e);a<=r.halfSpan&&(s=!0),!(a>r.halfSpan+30)&&(n=Math.max(n,r.deck-Math.max(0,a-r.halfSpan*.85)/9))}return{y:n,onDeck:s}}updateOcclusion(t,e,n){const s=e.clone().sub(t),r=s.length();this.ray.set(t,s.normalize()),this.ray.far=r;const o=new Set(this.ray.intersectObjects(this.group.children,!0).map(a=>a.object.parent));for(const a of this.group.children){const l=this.faded.get(a)??1,c=o.has(a)?.18:1;if(l===c)continue;const h=l+Math.sign(c-l)*Math.min(Math.abs(c-l),n*4);this.faded.set(a,h),a.traverse(d=>{const f=d.material;f&&(f.transparent=h<1,f.opacity=h,f.depthWrite=h>=1)})}}at(t){return this.placed.find(e=>Math.abs(e.data.s-t)<e.data.w/2+1)}}function A_(i,t,e,n){const s=n-e,r=e-2.2,o=e+Math.max(.9,s*.3),a=e+Math.max(2.75,s*.72),l=new bi;l.moveTo(-i,r),l.lineTo(-t,r),l.lineTo(-t,o);const c=14;for(let h=1;h<c;h++){const d=Math.PI-Math.PI*h/c;l.lineTo(Math.cos(d)*t,o+Math.sin(d)*(a-o))}return l.lineTo(t,o),l.lineTo(t,r),l.lineTo(i,r),l.lineTo(i,n),l.lineTo(-i,n),l.closePath(),l}function R_(i,t,e,n){const s=e-2.2,r=n-1.1,o=new bi;return o.moveTo(-i,s),o.lineTo(-t,s),o.lineTo(-t,r),o.lineTo(t,r),o.lineTo(t,s),o.lineTo(i,s),o.lineTo(i,n),o.lineTo(-i,n),o.closePath(),o}const hi={brick:["#9a4b3b","#8c4234","#a65a44","#7f3d31","#9e5a48"],render:["#e6dcc8","#efe8da","#d9cdb5","#f1ede4"],stone:["#b37360","#a9654f","#c7a88a"],modern:["#9da3a8","#b9b3a7","#8a8f94","#c8c2b5"],shed:["#6f7368","#7b6d5a","#5d6660"]},Ss={slate:["#4d525b","#585d66","#43474f"],tile:["#7d3d30","#8a4a37"],flat:["#6a6a68","#757370"]},tn=(i,t)=>i[Math.floor(t*i.length)%i.length];class C_{constructor(t){k(this,"cell",3);k(this,"w");k(this,"h");k(this,"data");this.b=t,this.w=Math.ceil((t.x1-t.x0)/this.cell),this.h=Math.ceil((t.z1-t.z0)/this.cell),this.data=new Uint8Array(this.w*this.h)}mark(t,e,n){const s=this.cell;for(let r=Math.floor((e-n-this.b.z0)/s);r<=Math.floor((e+n-this.b.z0)/s);r++)for(let o=Math.floor((t-n-this.b.x0)/s);o<=Math.floor((t+n-this.b.x0)/s);o++)o>=0&&r>=0&&o<this.w&&r<this.h&&(this.data[r*this.w+o]=1)}markPolygon(t){let e=1/0,n=-1/0,s=1/0,r=-1/0;for(let a=0;a<t.length;a+=2)e=Math.min(e,t[a]),n=Math.max(n,t[a]),s=Math.min(s,t[a+1]),r=Math.max(r,t[a+1]);const o=this.cell;for(let a=s-o;a<=r+o;a+=o)for(let l=e-o;l<=n+o;l+=o)Wa(l,a,t)&&this.mark(l,a,2)}used(t,e){const n=Math.floor((t-this.b.x0)/this.cell),s=Math.floor((e-this.b.z0)/this.cell);return n<0||s<0||n>=this.w||s>=this.h||this.data[s*this.w+n]===1}}function Wa(i,t,e){let n=!1;for(let s=0,r=e.length-2;s<e.length;r=s,s+=2){const o=e[s],a=e[s+1],l=e[r],c=e[r+1];a>t!=c>t&&i<(l-o)*(t-a)/(c-a)+o&&(n=!n)}return n}function P_(i,t){const n=Math.ceil((t.x1-t.x0)/30)+1,s=Math.ceil((t.z1-t.z0)/30)+1,r=new Float32Array(n*s);for(const a of i){let l=0,c=0,h=0;const d=a.p,f=d.length/2;for(let _=0;_<f;_++){const m=(_+1)%f;l+=d[_*2]*d[m*2+1]-d[m*2]*d[_*2+1],c+=d[_*2]/f,h+=d[_*2+1]/f}const u=Math.floor((c-t.x0)/30),g=Math.floor((h-t.z0)/30);u>=0&&g>=0&&u<n&&g<s&&(r[g*n+u]+=Math.abs(l)/2)}const o=new Float32Array(n*s);for(let a=0;a<s;a++)for(let l=0;l<n;l++){let c=0;for(let h=-1;h<=1;h++)for(let d=-1;d<=1;d++){const f=Math.min(n-1,Math.max(0,l+d)),u=Math.min(s-1,Math.max(0,a+h));c+=r[u*n+f]}o[a*n+l]=Math.min(1,c/9/(30*30)*3)}return(a,l)=>{const c=Math.floor((a-t.x0)/30),h=Math.floor((l-t.z0)/30);return c<0||h<0||c>=n||h>=s?0:o[h*n+c]}}class Sc{constructor(){k(this,"pos",[]);k(this,"col",[]);k(this,"nrm",[]);k(this,"a",new D);k(this,"b",new D);k(this,"n",new D)}tri(t,e,n,s,r){if(this.a.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),this.b.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),this.n.crossVectors(this.a,this.b).normalize(),r){const o=(t[0]+e[0]+n[0])/3-r[0],a=(t[1]+e[1]+n[1])/3-r[1],l=(t[2]+e[2]+n[2])/3-r[2];this.n.x*o+this.n.y*a+this.n.z*l<0&&([e,n]=[n,e],this.n.negate())}for(const o of[t,e,n])this.pos.push(o[0],o[1],o[2]),this.col.push(s.r,s.g,s.b),this.nrm.push(this.n.x,this.n.y,this.n.z)}geometry(){const t=new de;return t.setAttribute("position",new Zt(this.pos,3)),t.setAttribute("normal",new Zt(this.nrm,3)),t.setAttribute("color",new Zt(this.col,3)),t}}class L_{constructor(t,e,n,s,r){k(this,"group",new Bt);k(this,"occ");k(this,"roofs");this.data=t,this.route=e,this.ww=n,this.terrain=s,this.bridges=r,this.occ=new C_(s.bounds),this.roofs=new Float32Array(this.occ.w*this.occ.h).fill(-1/0)}isFree(t,e){return!this.occ.used(t,e)}roofAt(t,e){const{occ:n}=this,s=Math.floor((t-n.b.x0)/n.cell),r=Math.floor((e-n.b.z0)/n.cell);return s<0||r<0||s>=n.w||r>=n.h?-1/0:this.roofs[r*n.w+s]}markRoof(t,e){const{occ:n}=this;let s=1/0,r=-1/0,o=1/0,a=-1/0;for(let l=0;l<t.length;l+=2)s=Math.min(s,t[l]),r=Math.max(r,t[l]),o=Math.min(o,t[l+1]),a=Math.max(a,t[l+1]);for(let l=Math.floor((o-n.b.z0)/n.cell);l<=Math.floor((a-n.b.z0)/n.cell);l++)for(let c=Math.floor((s-n.b.x0)/n.cell);c<=Math.floor((r-n.b.x0)/n.cell);c++)c<0||l<0||c>=n.w||l>=n.h||Wa(n.b.x0+(c+.5)*n.cell,n.b.z0+(l+.5)*n.cell,t)&&(this.roofs[l*n.w+c]=Math.max(this.roofs[l*n.w+c],e))}build(t){return(async()=>{await t("Laying out roads…"),this.buildRoads(),await t("Building Chester…"),this.buildBuildings(),await t("Planting trees…"),this.buildTrees()})()}buildBuildings(){const t=new Sc,e=new Ot,n=new Ot;for(let r=0;r<this.data.buildings.length;r++){const o=this.data.buildings[r];let a=o.p;const l=a.length/2;if(l<3)continue;this.occ.markPolygon(a);let c=0;for(let m=0;m<l;m++){const p=(m+1)%l;c+=a[m*2]*a[p*2+1]-a[p*2]*a[m*2+1]}if(c>0){const m=[];for(let p=l-1;p>=0;p--)m.push(a[p*2],a[p*2+1]);a=m}let h=1/0;for(let m=0;m<l;m++)h=Math.min(h,this.terrain.heightAt(a[m*2],a[m*2+1]));const d=h-1.5,f=h+o.h;this.markRoof(a,f+1.5);const u=fn(r,7,1),g=fn(r,3,2);this.palette(o,u,g,e,n);for(let m=0;m<l;m++){const p=(m+1)%l,M=a[m*2],x=a[m*2+1],v=a[p*2],b=a[p*2+1],T=e.clone().offsetHSL(0,0,(fn(r,m,4)-.5)*.03);t.tri([M,d,x],[v,d,b],[v,f,b],T),t.tri([M,d,x],[v,f,b],[M,f,x],T)}if(l===4&&o.h<=13&&I_(a)&&Math.abs(c)/2<400)this.gableRoof(t,a,f,e,n);else{const m=[];for(let M=0;M<l;M++)m.push(new at(a[M*2],a[M*2+1]));const p=yn.triangulateShape(m,[]);for(const[M,x,v]of p)t.tri([a[M*2],f,a[M*2+1]],[a[x*2],f,a[x*2+1]],[a[v*2],f,a[v*2+1]],n,[a[M*2],f-10,a[M*2+1]])}}const s=new it(t.geometry(),new ee({vertexColors:!0,roughness:.9}));s.castShadow=s.receiveShadow=!0,s.name="buildings",this.group.add(s)}gableRoof(t,e,n,s,r){const o=[0,1,2,3].map(_=>[e[_*2],e[_*2+1]]),a=(_,m)=>Math.hypot(_[0]-m[0],_[1]-m[1]);a(o[0],o[1])<a(o[1],o[2])&&o.push(o.shift());const l=a(o[1],o[2]),c=Math.min(l*.42,4),h=(_,m)=>[(_[0]+m[0])/2,(_[1]+m[1])/2],d=h(o[3],o[0]),f=h(o[1],o[2]),u=(_,m)=>[_[0],m,_[1]],g=[(o[0][0]+o[2][0])/2,n-1,(o[0][1]+o[2][1])/2];t.tri(u(o[0],n),u(o[1],n),u(f,n+c),r,g),t.tri(u(o[0],n),u(f,n+c),u(d,n+c),r,g),t.tri(u(o[2],n),u(o[3],n),u(d,n+c),r,g),t.tri(u(o[2],n),u(d,n+c),u(f,n+c),r,g),t.tri(u(o[1],n),u(o[2],n),u(f,n+c),s,g),t.tri(u(o[3],n),u(o[0],n),u(d,n+c),s,g)}palette(t,e,n,s,r){const o=t.t;if(o==="wall_tower"){s.set(e<.5?"#b0664d":"#a95e46"),r.set("#c9a58a");return}o==="cathedral"||o==="church"||/cathedral|church/i.test(t.n??"")?(s.set(tn(hi.stone,e)),r.set(tn(Ss.slate,n))):["garage","garages","shed","roof","hut"].includes(o)?(s.set(tn(hi.shed,e)),r.set(tn(Ss.flat,n))):["commercial","retail","industrial","warehouse","office","supermarket"].includes(o)||t.h>14?(s.set(e<.4?tn(hi.brick,n):tn(hi.modern,n)),r.set(tn(Ss.flat,n))):(s.set(e<.68?tn(hi.brick,n):e<.9?tn(hi.render,n):tn(hi.stone,n)),r.set(n<.8?tn(Ss.slate,e):tn(Ss.tile,e)))}buildRoads(){const t=new Sc,e=new Ot("#5b5e61"),n=new Ot("#a39d90"),s=new Ot("#6d635a"),r={footway:0,path:0,cycleway:0,steps:0,track:0,service:1,residential:2,living_street:2,unclassified:2,tertiary:3,secondary:4,primary:5,trunk:6,motorway:6,pedestrian:1},o=new Set(["footway","path","cycleway","steps","track","pedestrian"]);for(const l of this.data.roads){const c=o.has(l.k)?n:e;this.ribbon(t,l.p,l.w,c,.05+(r[l.k]??1)*.012,!0)}for(const l of this.data.rails)this.ribbon(t,l.p,4.2,s,.1,!0);const a=new it(t.geometry(),new ee({vertexColors:!0,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));a.receiveShadow=!0,a.name="roads",this.group.add(a)}ribbon(t,e,n,s,r,o){const a=[];for(let f=0;f+3<e.length;f+=2){const u=e[f],g=e[f+1],_=e[f+2],m=e[f+3],p=Math.max(1,Math.ceil(Math.hypot(_-u,m-g)/4));for(let M=0;M<p;M++)a.push([u+(_-u)*M/p,g+(m-g)*M/p])}if(a.push([e[e.length-2],e[e.length-1]]),a.length<2)return;const l=a.map(([f,u])=>this.route.project(f,u)),c=l.map(f=>this.bridges.rampAt(f.s,f.d)),h=a.map(([f,u],g)=>{const _=l[g],m=this.ww.halfWidthAt(_.s),p=_.dist<m+3.5?this.terrain.bankTop(_.s):this.terrain.landHeight(f,u,_.s,_.d);return Math.max(p,c[g].y)+r}),d=n/2;for(let f=0;f<a.length-1;f++){const u=l[f],g=l[f+1];if((Math.min(u.dist,g.dist)<this.ww.halfWidthAt(u.s)+4||Math.sign(u.d)!==Math.sign(g.d))&&!(c[f].onDeck&&c[f+1].onDeck))continue;const[m,p]=a[f],[M,x]=a[f+1];let v=M-m,b=x-p;const T=Math.hypot(v,b)||1;v/=T,b/=T;const A=-b*d,L=v*d,w=[m-A,h[f],p-L],y=[m+A,h[f],p+L],C=[M-A,h[f+1],x-L],z=[M+A,h[f+1],x+L];t.tri(w,y,z,s,[m,h[f]-5,p]),t.tri(w,z,C,s,[m,h[f]-5,p]),o&&this.occ.mark(m,p,d+1.5)}}buildTrees(){const t=os(1234),e=[],{route:n,ww:s,terrain:r,occ:o}=this,a=(x,v)=>{if(o.used(x,v))return!1;const b=n.project(x,v);return b.dist>s.halfWidthAt(b.s)+4.2};for(let x=0;x<n.length;x+=5)for(const v of[-1,1]){if(t()>.6)continue;const b=s.halfWidthAt(x)+4.5+t()*t()*30,[T,A]=n.point(x,b*v);t()<r.urbanAt(T,A)*.85||a(T,A)&&e.push({x:T,z:A,s:.8+t()*.7,kind:t()<.15?1:0})}const l=r.bounds,c=(l.x1-l.x0)*(l.z1-l.z0);for(let x=0;x<c*9e-4;x++){const v=l.x0+t()*(l.x1-l.x0),b=l.z0+t()*(l.z1-l.z0),A=r.parkAt(v,b)?.7:(1-r.urbanAt(v,b))*.35*Le(.75,.2,Math.abs(D_(v,b)));t()>A||a(v,b)&&e.push({x:v,z:b,s:.8+t()*.9,kind:t()<.1?1:0})}for(let x=0;x<this.data.trees.length;x+=2)e.push({x:this.data.trees[x],z:this.data.trees[x+1],s:1.1,kind:0});const h=new sn(1,0),d=new me(.18,.25,1,5);d.translate(0,.5,0);const f=new nn(h,new ee({roughness:.9,flatShading:!0}),e.length),u=new nn(d,new ee({color:"#5a4636",roughness:1}),e.length),g=new ne,_=new bn,m=new D,p=new D,M=["#4f7a3a","#5d8a40","#3f6b35","#6b9446","#557d3c"].map(x=>new Ot(x));e.forEach((x,v)=>{const b=r.heightAt(x.x,x.z),T=(x.kind===1?9:4.5)*x.s;_.setFromAxisAngle(new D(0,1,0),t()*Math.PI*2),p.set(x.x,b-.2,x.z),m.set(x.s,T*.45,x.s),u.setMatrixAt(v,g.compose(p,_,m)),p.set(x.x,b+T*.45+(x.kind===1?T*.35:T*.3),x.z),x.kind===1?m.set(1.3*x.s,T*.5,1.3*x.s):m.set(2.6*x.s,2.3*x.s,2.6*x.s),f.setMatrixAt(v,g.compose(p,_,m)),f.setColorAt(v,M[Math.floor(t()*M.length)].clone().offsetHSL(0,0,(t()-.5)*.06))}),f.castShadow=u.castShadow=!0,f.receiveShadow=!0,f.name="trees",this.group.add(f,u)}}function D_(i,t){return Math.sin(i*.011+Math.sin(t*.007)*2)*Math.cos(t*.013+Math.sin(i*.005)*2)}function I_(i){for(let t=0;t<4;t++){const e=t,n=(t+1)%4,s=(t+2)%4,r=i[n*2]-i[e*2],o=i[n*2+1]-i[e*2+1],a=i[s*2]-i[n*2],l=i[s*2+1]-i[n*2+1],c=(r*a+o*l)/(Math.hypot(r,o)*Math.hypot(a,l)||1);if(Math.abs(c)>.2)return!1}return!0}const wc=18*Math.PI/180,U_=Jn+.15,gn={gate:new ee({color:"#1d1c1a",roughness:.8,flatShading:!0}),white:new ee({color:"#f1efe8",roughness:.7}),gear:new ee({color:"#2b2f33",roughness:.5,metalness:.5}),rack:new ee({color:"#c9c3b5",roughness:.4,metalness:.6}),foam:new Ns({color:"#f4f7f2",transparent:!0,opacity:0,depthWrite:!1}),highlight:new Ns({color:"#ffd76a",transparent:!0,opacity:.55,depthWrite:!1})};class N_{constructor(t,e,n){k(this,"group",new Bt);k(this,"visuals",[]);k(this,"time",0);this.ww=e;for(const r of e.gates){const o=t.frame(r.s),a=new Bt;a.position.set(o.x,0,o.z),a.rotation.y=Math.atan2(o.tx,o.tz);const l=e.bodies[r.above].hi,c=e.bodies[r.below].lo-1.6,h=n.bankTop(r.s),d=l+.4,f=Jn/Math.cos(wc)+.15,u=[],g=[];for(const p of[-1,1]){const M=new Bt;M.position.set(p*U_,0,0);const x=d-c,v=new it(new Jt(f,x,.32),gn.gate);v.position.set(f/2,c+x/2,0),v.castShadow=!0,M.add(v);const b=Math.max(h,d)+.75,T=new it(new Jt(4.6,.32,.32),gn.gate);T.position.set(-2.1,b,0),T.castShadow=!0,M.add(T);const A=new it(new Jt(.7,.34,.34),gn.white);A.position.set(-4.1,b,0),M.add(A);const L=new it(new Jt(.3,b-d+.2,.3),gn.gate);L.position.set(.1,(b+d)/2,0),M.add(L);const w=new it(new Jt(.3,.45,.3),gn.gear);w.position.set(f*.55,d+.22,-.2),M.add(w);const y=new it(new Jt(.08,.9,.08),gn.rack);y.position.set(f*.55,d+.45,-.2),y.userData.y0=y.position.y,M.add(y),g.push(y);const C=new it(new Jt(f,.06,.06),gn.white);C.position.set(f/2,d+.95,-.35),M.add(C),M.scale.x=p<0?1:-1,a.add(M),u.push({pivot:M,sign:p})}const _=new it(new ii(Jn*2,5),gn.foam.clone());_.rotation.x=-Math.PI/2,_.position.set(0,0,-2.8),a.add(_);const m=new it(new Ba(Jn+.6,Jn+1,32),gn.highlight);m.rotation.x=-Math.PI/2,m.position.y=h+.08,m.visible=!1,a.add(m),this.group.add(a),this.visuals.push({gate:r,leaves:u,racks:g,foam:_,ring:m,root:a})}const s=new Map;for(const r of e.gates)r.label==="top gates"&&s.set(r.lockName,r);for(const[r,o]of s){const a=t.frame(o.s+3),l=O_(r),c=(Jn+3.2)*le;l.position.set(a.x+a.nx*c,n.bankTop(o.s+3),a.z+a.nz*c),l.rotation.y=Math.atan2(le*a.tz,-le*a.tx),this.group.add(l)}}setSelected(t){for(const e of this.visuals)e.ring.visible=e.gate===t}update(t){this.time+=t;for(const e of this.visuals){const n=e.gate,s=n.open*n.open*(3-2*n.open);for(const{pivot:a,sign:l}of e.leaves){const c=wc,h=Math.PI/2;a.rotation.y=(c+(h-c)*s)*l}for(const a of e.racks)a.position.y=a.userData.y0+n.paddle*.55;const r=this.ww.bodies[n.below].level,o=Math.min(1,Math.abs(n.flow)/3);e.foam.position.y=r+.03,e.foam.material.opacity=o*(.55+.15*Math.sin(this.time*9)),e.foam.scale.y=.7+o*.5+.08*Math.sin(this.time*5.3),e.ring.visible&&(e.ring.material.opacity=.4+.25*Math.sin(this.time*4))}}}function O_(i){const t=document.createElement("canvas");t.width=512,t.height=128;const e=t.getContext("2d");e.fillStyle="#1e3d2f",e.fillRect(0,0,512,128),e.strokeStyle="#e8d9a8",e.lineWidth=6,e.strokeRect(8,8,496,112),e.fillStyle="#f3ead0",e.font="600 44px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText(i,256,66,470);const n=new Hs(t);n.colorSpace=Ue;const s=new Bt,r=new it(new ii(2.4,.6),new ee({map:n,side:ze}));r.position.y=1.9,s.add(r);for(const o of[-1,1]){const a=new it(new Jt(.1,2.2,.1),gn.white);a.position.set(o,1.1,0),s.add(a)}return s}class zs extends it{constructor(){const t=zs.SkyShader,e=new zn({name:t.name,uniforms:ph.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Be,depthWrite:!1});super(new Jt(1,1,1),e),this.isSky=!0}}zs.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
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

		}`};class F_{constructor(t,e){k(this,"sky",new zs);k(this,"sun",new Wg("#fff4e0",3));k(this,"hemi",new Bg("#cfe3ff","#5d6b45",.9));k(this,"envScene",new wh);k(this,"envSky",new zs);k(this,"pmrem");k(this,"envTarget",null);k(this,"lastEnvHour",-99);k(this,"sunDir",new D);k(this,"hour",10.5);this.scene=t,this.sky.scale.setScalar(2e4),this.envSky.scale.setScalar(2e4);for(const r of[this.sky,this.envSky]){const o=r.material.uniforms;o.turbidity.value=5,o.rayleigh.value=1.4,o.mieCoefficient.value=.004,o.mieDirectionalG.value=.82}this.envScene.add(this.envSky),t.add(this.sky,this.sun,this.sun.target,this.hemi),this.pmrem=new _a(e);const n=this.sun.shadow;this.sun.castShadow=!0,n.mapSize.set(2048,2048);const s=n.camera;s.left=s.bottom=-90,s.right=s.top=90,s.near=1,s.far=600,n.bias=-4e-4,n.normalBias=.03,t.fog=new Oa("#c9d6dc",300,2400)}get sunElevation(){const t=(this.hour-7)/11.5;return Math.sin(xe(t,-.15,1.15)*Math.PI)*32-(t<0||t>1?6:0)}get isNight(){return this.sunElevation<-2}update(t,e){var a;this.hour=(this.hour+t)%24;const n=Us.degToRad(this.sunElevation),s=Us.degToRad(100+(this.hour-6)/13*160);this.sunDir.setFromSphericalCoords(1,Math.PI/2-n,s);for(const l of[this.sky,this.envSky])l.material.uniforms.sunPosition.value.copy(this.sunDir);const r=Le(-4,8,this.sunElevation),o=1-Le(4,20,this.sunElevation);this.sun.intensity=3.2*Le(-2,6,this.sunElevation),this.sun.color.setHSL(.09,.5+o*.4,.92-o*.18),this.hemi.intensity=.2+r*.7,this.scene.fog.color.setHSL(.56,.18,.12+r*.68),this.sun.position.copy(e).addScaledVector(this.sunDir,300),this.sun.target.position.copy(e),Math.abs(this.hour-this.lastEnvHour)>.25&&(this.lastEnvHour=this.hour,(a=this.envTarget)==null||a.dispose(),this.envTarget=this.pmrem.fromScene(this.envScene,0,1,25e3),this.scene.environment=this.envTarget.texture)}}function k_(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new de;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0;const d=[];for(let f=0;f<i.length;++f){const u=i[f].index;for(let g=0;g<u.count;++g)d.push(u.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Ec(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let _=0;_<o[h].length;++_)u.push(o[h][_][f]);const g=Ec(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ec(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Oe(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,u=h.count;f<u;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);a.setComponent(f+d,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function ds(i,t){i.updateMatrixWorld(!0);const e=i.matrixWorld.clone().invert(),n=[],s=new ne;return i.traverse(r=>{const o=r;if(!o.isMesh)return;const a=Array.isArray(o.material)?o.material:[o.material];if(a.some(u=>u.map)){t==null||t(o);return}const l=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();l.applyMatrix4(s.multiplyMatrices(e,o.matrixWorld));const c=l.getAttribute("position").count,h=new Float32Array(c*3),d=l.groups.length?l.groups:[{start:0,count:c,materialIndex:0}];for(const u of d){const g=(a[u.materialIndex??0]??a[0]).color;for(let _=u.start;_<Math.min(c,u.start+u.count);_++)h.set([g.r,g.g,g.b],_*3)}const f=new de;f.setAttribute("position",l.getAttribute("position")),f.setAttribute("normal",l.getAttribute("normal")),f.setAttribute("color",new Oe(h,3)),n.push(f)}),k_(n)}const _n=()=>new ee({vertexColors:!0,roughness:.75,flatShading:!0}),En=17.4,Tn=2.08,Re=(i,t={})=>new ee({color:i,roughness:.6,flatShading:!0,...t}),z_={name:"Chester Rose",cabin:"#1f4d3a",roof:"#7c2f23",length:En,crew:!0};function Xa(i={}){const{name:t,cabin:e,roof:n,length:s,crew:r}={...z_,...i},o=new Bt;o.userData.length=s;const a={hull:Re("#18191b",{roughness:.5}),deck:Re("#3a3d40",{roughness:.9}),cabin:Re(e,{roughness:.45}),roof:Re(n,{roughness:.7}),cream:Re("#efe3c2"),red:Re("#a3291f"),window:Re("#1b2730",{roughness:.1,metalness:.4}),brass:Re("#c9a24a",{roughness:.25,metalness:.9}),rope:Re("#8a6b43",{roughness:1}),black:Re("#111111"),pot:Re("#9b5a3c"),leaf:Re("#4f8a3a"),flower:Re("#e04f6a")},l=Tn/2,c=s/2,h=[[-l,-c+.4],[-l*.85,-c+.05],[0,-c],[l*.85,-c+.05],[l,-c+.4],[l,c-3.4],[l*.82,c-1.6],[l*.45,c-.5],[0,c],[-l*.45,c-.5],[-l*.82,c-1.6],[-l,c-3.4]],d=new bi(h.map(([F,K])=>new at(F,-K))),f=.62,u=.38,g=new rs(d,{depth:f+u,bevelEnabled:!1});g.rotateX(-Math.PI/2),g.translate(0,-f,0);const _=new it(g,[a.deck,a.hull]);_.castShadow=_.receiveShadow=!0,o.add(_);const m=new rs(d,{depth:.07,bevelEnabled:!1});m.rotateX(-Math.PI/2),m.scale(1.015,1,1.004),m.translate(0,u-.12,0),o.add(new it(m,[a.red,a.red]));const p=-c+2,M=c-3.6,x=M-p,v=(p+M)/2,b=1.22,T=Tn-.24,A=new it(new Jt(T,b,x),a.cabin);A.position.set(0,u+b/2,v),A.castShadow=A.receiveShadow=!0,o.add(A);const L=new it(new Jt(T+.08,.09,x+.08),a.roof);L.position.set(0,u+b+.04,v),L.castShadow=!0,o.add(L);for(const F of[-1,1]){const K=new it(new Jt(.02,.05,x-.3),a.cream);K.position.set(F*(T/2+.005),u+b-.18,v),o.add(K);const yt=K.clone();yt.position.y=u+.18,o.add(yt);for(let Rt=p+1.6;Rt<M-.6;Rt+=1.45){if(Rt>p+2.6&&Rt<p+4.6)continue;const Lt=new it(new Jt(.03,.34,.5),a.window);Lt.position.set(F*(T/2+.005),u+b*.62,Rt),o.add(Lt)}const st=B_(t);st.position.set(F*(T/2+.012),u+b*.55,p+3.6),st.rotation.y=F*(Math.PI/2),o.add(st)}for(const[F,K]of[[p-.005,-1],[M+.005,1]]){const yt=new it(new Jt(.9,.95,.03),a.red);yt.position.set(0,u+.5,F),o.add(yt);const st=new it(new Jt(.03,.9,.035),a.cream);st.position.set(0,u+.5,F+K*.005),o.add(st)}const w=new it(H_(),new ee({map:G_(),roughness:.6,side:ze}));w.position.set(0,u,c-1.5),o.add(w);const y=new it(new Jt(.12,.06,2.1),a.cream);y.position.set(0,u+1.12,c-2.55),y.rotation.x=-.36,o.add(y);const C=new it(new me(.07,.07,.55,8),a.black);C.position.set(.45,u+b+.3,M-1.4),o.add(C);const z=new it(new me(.075,.075,.06,8),a.brass);z.position.set(.45,u+b+.5,M-1.4),o.add(z);for(const[F,K]of[[p+2.2,-.35],[p+2.8,-.35],[v+1.5,.3]]){const yt=new it(new me(.16,.12,.22,7),a.pot);yt.position.set(K,u+b+.19,F),o.add(yt);const st=new it(new sn(.2,0),a.leaf);st.position.set(K,u+b+.4,F),o.add(st);const Rt=new it(new sn(.06,0),a.flower);Rt.position.set(K+.08,u+b+.55,F),o.add(Rt)}const B=new it(new me(.03,.03,4.5,6),a.cream);B.rotation.x=Math.PI/2,B.position.set(-.6,u+b+.12,v-1),o.add(B);const q=new it(new wn(.22,8,6),a.rope);q.scale.set(1,.9,1.3),q.position.set(0,.05,c-.02),o.add(q);for(const F of[-1,1]){const K=new it(new me(.11,.11,.45,8),a.rope);K.position.set(F*(l+.08),.05,2),o.add(K)}const j=new it(new me(.1,.12,.18,10),a.brass);j.rotation.x=Math.PI/2,j.position.set(0,u+.25,c-.35),o.add(j);const U=new Gg("#ffe7b0",0,60,.5,.6,1.2);U.position.set(0,u+.3,c-.2),U.target.position.set(0,-.5,c+20),o.add(U,U.target);const Y=new Bt;Y.position.set(0,0,-c-.05);const H=new it(new Jt(.05,.75,.9),a.hull);H.position.set(0,-.3,-.45),Y.add(H);const ut=new it(new me(.04,.04,1.1,6),a.black);ut.position.set(0,.45,0),Y.add(ut);const mt=new it(new me(.025,.035,1.3,6),a.brass);mt.rotation.x=Math.PI/2-.25,mt.position.set(0,1.08,.62),Y.add(mt);const xt=new it(new wn(.05,6,4),a.brass);xt.position.set(0,1,0),Y.add(xt),o.add(Y);const Nt=Gs("#e8b931","#2f3a33"),Qt=Nt.group;return Qt.position.set(0,u-.25,-c+.9),r?o.add(Qt):o.remove(U,U.target),{group:o,rudder:Y,steerer:Qt,steererPerson:Nt,headlight:U}}function Gs(i,t=null){const e=new Bt,n=Re(i),s=new it(new me(.18,.24,.95,7),n);s.position.y=.98;const r=new it(new me(.15,.15,.5,6),Re("#2d3a4f"));r.position.y=.27;const o=new it(new wn(.13,8,6),Re("#e2b596"));if(o.position.y=1.62,e.add(s,r,o),t){const h=new it(new me(.15,.15,.08,8),Re(t));h.position.y=1.74,e.add(h)}const a=h=>{const d=new Bt;d.position.set(h*.22,1.36,0);const f=new it(new me(.05,.05,.62,5),n);f.position.y=-.3,d.add(f);const u=new it(new wn(.055,6,4),Re("#e2b596"));return u.position.y=-.63,d.add(u),e.add(d),d},l=a(1),c=a(-1);return e.traverse(h=>h.castShadow=!0),{group:e,armL:l,armR:c}}function Wr(i,t,e){t==="wind"?(i.armL.rotation.set(-1.3+Math.sin(e*7)*.45,0,.15),i.armR.rotation.set(-1.3+Math.sin(e*7+Math.PI)*.45,0,-.15)):t==="push"?(i.armL.rotation.set(-1.25,0,.1),i.armR.rotation.set(-1.25,0,-.1)):t==="rest"?(i.armL.rotation.set(0,0,0),i.armR.rotation.set(0,0,0)):t==="wave"?(i.armL.rotation.set(0,0,Math.PI-.4+Math.sin(e*9)*.35),i.armR.rotation.set(0,0,0)):(i.armL.rotation.set(0,0,Math.PI-.2+Math.sin(e*14)*.25),i.armR.rotation.set(0,0,-(Math.PI-.2)+Math.sin(e*14+1.5)*.25))}function B_(i){const t=document.createElement("canvas");t.width=512,t.height=160;const e=t.getContext("2d");e.fillStyle="#a3291f",e.fillRect(0,0,512,160),e.strokeStyle="#efe3c2",e.lineWidth=8,e.strokeRect(10,10,492,140),e.fillStyle="#f6d36b",e.font="800 64px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#3a120d",e.shadowOffsetX=3,e.shadowOffsetY=3,e.fillText(i,256,84,460);const n=new Hs(t);return n.colorSpace=Ue,new it(new ii(1.9,.6),new ee({map:n,roughness:.5}))}function H_(){const i=new de,t=Tn*.42,e=1.15;return i.setAttribute("position",new Zt([-t,0,0,t,0,0,0,e,0],3)),i.setAttribute("uv",new Zt([0,0,1,0,.5,1],2)),i.computeVertexNormals(),i}function G_(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#1f4d3a",t.fillRect(0,0,256,256),t.fillStyle="#a3291f",t.beginPath(),t.moveTo(128,40),t.lineTo(200,170),t.lineTo(128,240),t.lineTo(56,170),t.closePath(),t.fill(),t.strokeStyle="#f6d36b",t.lineWidth=8,t.stroke();for(const[n,s,r]of[[128,150,"#e04f6a"],[108,175,"#f2efe0"],[148,175,"#e8a43c"]])t.fillStyle=r,t.beginPath(),t.arc(n,s,14,0,Math.PI*2),t.fill();const e=new Hs(i);return e.colorSpace=Ue,e}function V_(i){const t=new Bt;i.group.updateMatrixWorld(!0);const e=ds(i.group,s=>{const r=s.clone();r.matrixAutoUpdate=!1,r.matrix.copy(s.matrixWorld),t.add(r)}),n=new it(e,_n());return n.castShadow=n.receiveShadow=!0,t.add(n),t}const Vi=16e3,Ro=Vi*En*En/12,W_=650,X_=700,q_=7,br=.3,Nh=-3,Oh=5,Tc=(()=>{const i=Tn/2,t=En/2;return[[0,t],[.55,t-.6],[-.55,t-.6],[i,t-3],[-i,t-3],[i,2],[-i,2],[i,-3],[-i,-3],[i*.95,-t+.4],[-i*.95,-t+.4],[0,-t]]})();class Y_{constructor(t,e){k(this,"x",0);k(this,"z",0);k(this,"psi",0);k(this,"u",0);k(this,"v",0);k(this,"r",0);k(this,"notch",0);k(this,"thrust",0);k(this,"rudder",0);k(this,"s",0);k(this,"d",0);k(this,"contacts",[]);k(this,"obstacles",[]);k(this,"tethers",[]);this.route=t,this.ww=e}placeAt(t,e=!0){const n=this.route.frame(t);this.x=n.x,this.z=n.z,this.psi=Math.atan2(n.tx,n.tz)+(e?0:Math.PI),this.s=t,this.u=this.v=this.r=0}get speed(){return Math.hypot(this.u,this.v)}span(){let t=1/0,e=-1/0;for(const[n,s]of Tc){const[r,o]=this.toWorld(n,s),a=this.route.project(r,o,this.s);t=Math.min(t,a.s),e=Math.max(e,a.s)}return[t,e]}step(t,e){const n=xe(e,-1,1),s=n===0?2.2:1.6;this.rudder+=xe(n-this.rudder,-s*t,s*t);const r=this.notch>=0?this.notch*W_:this.notch*X_;this.thrust+=xe(r-this.thrust,-2200*t,2200*t);const{u:o,v:a,r:l}=this,c=this.thrust,h=this.rudder*(300*o*Math.abs(o)+.5*Math.max(c,0)),d=c-480*o*Math.abs(o)-250*o,f=-9e3*a*Math.abs(a)-4e3*a+h*.3;let u=h*q_-12e4*l-6e5*l*Math.abs(l);c<0&&(u+=.12*c*1.5),this.u+=(d/Vi-a*l)*t,this.v+=(f/Vi+o*l)*t,this.r+=u/Ro*t,this.psi+=this.r*t;const g=Math.sin(this.psi),_=Math.cos(this.psi);this.x+=(this.u*g-this.v*_)*t,this.z+=(this.u*_+this.v*g)*t,this.contacts.length=0;for(let p=0;p<2;p++)this.resolveContacts(),this.resolveExtras();const m=this.route.project(this.x,this.z,this.s);this.s=m.s,this.d=m.d}toWorld(t,e){const n=Math.sin(this.psi),s=Math.cos(this.psi);return[this.x+e*n-t*s,this.z+e*s+t*n]}resolveContacts(){const{route:t,ww:e}=this,n=e.gates.filter(r=>Math.abs(r.s-this.s)<En+6&&e.gateBlocks(r)),s=this.obstacles.filter(r=>Math.abs(r.x-this.x)+Math.abs(r.z-this.z)<45);for(const[r,o]of Tc){const[a,l]=this.toWorld(r,o),c=t.project(a,l,this.s),h=t.frame(c.s),d=e.halfWidthAt(c.s)-.05;if(Math.abs(c.d)>d){const f=Math.sign(c.d);this.applyContact(a,l,h.nx*f,h.nz*f,Math.abs(c.d)-d,"bank")}for(const f of n)this.s<f.s&&c.s>f.s-br?this.applyContact(a,l,h.tx,h.tz,c.s-(f.s-br),"gate"):this.s>f.s&&c.s<f.s+br&&this.applyContact(a,l,-h.tx,-h.tz,f.s+br-c.s,"gate");for(const f of s){const u=a-f.x,g=l-f.z,_=Math.sin(f.psi),m=Math.cos(f.psi),p=u*_+g*m,M=-u*m+g*_,x=f.halfB+.05-Math.abs(M),v=f.halfL+.05-Math.abs(p);if(!(x<=0||v<=0))if(x<v){const b=-Math.sign(M)||1;this.applyContact(a,l,-m*b,_*b,x,"boat",f)}else{const b=-Math.sign(p)||1;this.applyContact(a,l,_*b,m*b,v,"boat",f)}}c.s<2&&this.applyContact(a,l,-h.tx,-h.tz,2-c.s,"bank"),c.s>t.length-2&&this.applyContact(a,l,h.tx,h.tz,c.s-(t.length-2),"bank")}}resolveExtras(){const t=Math.sin(this.psi),e=Math.cos(this.psi),n=Tn/2,s=En/2;for(const r of this.obstacles){if(Math.abs(r.x-this.x)+Math.abs(r.z-this.z)>45)continue;const o=Math.sin(r.psi),a=Math.cos(r.psi);for(const[l,c]of[[r.halfB,r.halfL],[-r.halfB,r.halfL],[r.halfB,-r.halfL],[-r.halfB,-r.halfL]]){const h=r.x+c*o-l*a,d=r.z+c*a+l*o,f=h-this.x,u=d-this.z,g=f*t+u*e,_=-f*e+u*t,m=n-Math.abs(_),p=s-.6-Math.abs(g);m<=0||p<=0||(m<p?this.applyContact(h,d,-e*Math.sign(_),t*Math.sign(_),m,"boat",r):this.applyContact(h,d,t*Math.sign(g),e*Math.sign(g),p,"boat",r))}}for(const r of this.tethers){const[o,a]=this.toWorld(r.local[0],r.local[1]),l=o-r.anchor[0],c=a-r.anchor[1],h=Math.hypot(l,c);h>r.length&&this.applyContact(o,a,l/h,c/h,h-r.length,"bank",void 0,!0)}}applyContact(t,e,n,s,r,o,a,l=!1){this.x-=n*r,this.z-=s*r;const c=t-this.x,h=e-this.z,d=Math.sin(this.psi),f=Math.cos(this.psi);let u=this.u*d-this.v*f,g=this.u*f+this.v*d;const _=u+this.r*h,m=g-this.r*c,p=_*n+m*s;if(p<=0)return;const M=h*n-c*s,x=-1.15*p/(1/Vi+M*M/Ro);u+=x*n/Vi,g+=x*s/Vi,this.r+=x*M/Ro,u*=.995,g*=.995,this.u=u*d+g*f,this.v=-u*f+g*d,l||this.contacts.push({impulse:-x,kind:o,obstacle:a})}}const $_={KeyW:"throttleUp",ArrowUp:"throttleUp",KeyS:"throttleDown",ArrowDown:"throttleDown",Space:"neutral",KeyQ:"paddles",KeyE:"gates",Tab:"nextGate",KeyT:"timeFaster",KeyR:"timeSlower",KeyV:"camera",KeyM:"map",KeyH:"help",KeyN:"mute",KeyL:"headlight",KeyF:"moor",KeyG:"clear",KeyP:"autopilot",Enter:"nextTrip"};class j_{constructor(){k(this,"held",new Set);k(this,"queue",[]);k(this,"onFirstInput",null);addEventListener("keydown",t=>{this.onFirstInput&&(this.onFirstInput(),this.onFirstInput=null);const e=$_[t.code];e&&t.preventDefault(),!t.repeat&&(this.held.add(t.code),e&&this.queue.push(e))}),addEventListener("keyup",t=>this.held.delete(t.code)),addEventListener("blur",()=>this.held.clear())}get steer(){const t=this.held.has("KeyA")||this.held.has("ArrowLeft"),e=this.held.has("KeyD")||this.held.has("ArrowRight");return(t?1:0)-(e?1:0)}push(t){this.queue.push(t)}drain(){return this.queue.splice(0)}}class Z_{constructor(t,e,n,s){k(this,"root");k(this,"loc");k(this,"helm");k(this,"lockPanel");k(this,"toasts");k(this,"help");k(this,"chip");k(this,"soundBtn");k(this,"trip");k(this,"promptEl");k(this,"summary");k(this,"lastTrip","");k(this,"lastPrompt","");k(this,"lastMuted",null);k(this,"lastLock","");k(this,"lastHelm","");k(this,"lastLoc","");k(this,"winding",!1);this.root=t,t.innerHTML=`
      <div class="topleft">
        <div class="card loc"></div>
        <div class="card trip"></div>
      </div>
      <div class="prompt" hidden></div>
      <div class="summary card" hidden></div>
      <div class="topright">
        <div class="chip"></div>
        <button class="sound-btn" data-act="mute" title="Sound on/off (N)" aria-label="Mute sound"></button>
      </div>
      <div class="card helm"></div>
      <div class="lock-panel card" hidden></div>
      <div class="toasts"></div>
      <div class="map-wrap"></div>
      <div class="help card" hidden>
        <h2>At the tiller</h2>
        <dl>
          <dt><kbd>W</kbd><kbd>S</kbd></dt><dd>Throttle up / down a notch (it stays where you leave it)</dd>
          <dt><kbd>A</kbd><kbd>D</kbd></dt><dd>Steer: bow left / right. The rudder only bites with the engine pushing water past it</dd>
          <dt><kbd>Space</kbd></dt><dd>Neutral</dd>
          <dt><kbd>Q</kbd></dt><dd>Wind the selected gate's paddles up or down</dd>
          <dt><kbd>E</kbd></dt><dd>Open or close the selected gates</dd>
          <dt><kbd>Tab</kbd></dt><dd>Select the next nearby gate</dd>
          <dt><kbd>T</kbd><kbd>R</kbd></dt><dd>Speed time up / slow it down</dd>
          <dt><kbd>V</kbd></dt><dd>Steerer's view / follow camera (drag to orbit, scroll to zoom)</dd>
          <dt><kbd>F</kbd></dt><dd>Moor up: come alongside the towpath at a crawl, tie the bow line, then the stern. <kbd>F</kbd> again to cast off</dd>
          <dt><kbd>M</kbd> <kbd>L</kbd> <kbd>N</kbd></dt><dd>Map · headlight · mute</dd>
        </dl>
        <h2>Out and about</h2>
        <p>Some locks have <b>volunteer lock-keepers</b>; press <kbd>P</kbd> to let them work you through. If rubbish is jammed
        across the canal, moor up nearby and fish it out with the boat hook (<kbd>G</kbd>).</p>
        <h2>Working a lock</h2>
        <p>Gates only open when the water's level on both sides; paddles let water through to level it up. The lock panel shows
        the whole lock and always tells you the <b>next step</b>, with the right gate already selected, so you can just follow it with
        <kbd>Q</kbd> and <kbd>E</kbd>.</p>
        <p>Going <b>up</b> a single lock: open the bottom gates, drive in, close them, wind up the top paddles to fill, open the top
        gates, drop the paddles, drive out, close the gates behind you.</p>
        <p>You only ever work the two gates either side of your boat; <kbd>Tab</kbd> swaps between them. At <b>Northgate
        Staircase</b> the three chambers share gates, so each one fills by emptying the chamber above into it. The lock-keeper
        sets the rest of the flight for you and the panel tells you what they're up to.</p>
        <p class="muted">Press <kbd>H</kbd> to close</p>
        <p class="credits">Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap contributors</a> (ODbL).
        Engine sound from <a href="https://commons.wikimedia.org/wiki/File:WWS_Rustondieselengine.ogg" target="_blank" rel="noopener">WWS Rustondieselengine.ogg</a>,
        Wikimedia Commons, CC BY 4.0.</p>
      </div>`,this.loc=t.querySelector(".loc"),this.helm=t.querySelector(".helm"),this.lockPanel=t.querySelector(".lock-panel"),this.toasts=t.querySelector(".toasts"),this.help=t.querySelector(".help"),this.chip=t.querySelector(".chip"),this.soundBtn=t.querySelector(".sound-btn"),this.trip=t.querySelector(".trip"),this.promptEl=t.querySelector(".prompt"),this.summary=t.querySelector(".summary"),this.summary.addEventListener("click",r=>{r.target.closest("button")&&e("nextTrip")}),this.soundBtn.addEventListener("click",()=>{e("mute"),this.soundBtn.blur()}),t.appendChild(n),t.querySelector(".map-wrap").appendChild(s),this.lockPanel.addEventListener("click",r=>{var a;const o=(a=r.target.closest("button"))==null?void 0:a.dataset.act;o&&e(o)}),n.addEventListener("click",()=>e("map")),s.addEventListener("click",()=>e("map"))}toggleHelp(t){this.help.hidden=t===void 0?!this.help.hidden:!t}setMapOpen(t){this.root.querySelector(".map-wrap").classList.toggle("open",t)}toast(t,e="info",n=4200){for(const r of this.toasts.children)if(r.textContent===t)return;const s=document.createElement("div");s.className=`toast ${e}`,s.textContent=t,this.toasts.appendChild(s),setTimeout(()=>s.classList.add("out"),n),setTimeout(()=>s.remove(),n+600)}setLocation(t,e){const n=t+e;n!==this.lastLoc&&(this.lastLoc=n,this.loc.innerHTML=`<div class="eyebrow">Shropshire Union Canal</div><div class="title">${t}</div><div class="sub">${e}</div>`)}setHelm(t){const e=[];for(let l=Oh;l>=Nh;l--){const c=l===t.notch?"on":"",h=l===0?"N":(l>0,"");e.push(`<i class="${c} ${l===0?"zero":l<0?"astern":""}">${h}</i>`)}const n=Math.round(-t.rudder*40),s=Math.floor(t.hour),r=Math.floor((t.hour-s)*60),o=`
      <div class="throttle">${e.join("")}</div>
      <div class="gauges">
        <div class="speed"><b>${t.speedMph.toFixed(1)}</b><span>mph</span></div>
        <div class="dir">${t.notch>0?"Ahead":t.notch<0?"Astern":"Neutral"} ${t.notch!==0?Math.abs(t.notch):""}</div>
        <div class="tiller"><div style="transform: translateX(${n}px)"></div></div>
      </div>`;o!==this.lastHelm&&(this.lastHelm=o,this.helm.innerHTML=o);const a=`${String(s).padStart(2,"0")}:${String(r).padStart(2,"0")} · ${t.timeScale}× time · <kbd>H</kbd> help`;this.chip.innerHTML!==a&&(this.chip.innerHTML=a),t.muted!==this.lastMuted&&(this.lastMuted=t.muted,this.soundBtn.classList.toggle("off",t.muted),this.soundBtn.setAttribute("aria-label",t.muted?"Unmute sound":"Mute sound"),this.soundBtn.innerHTML=K_(t.muted))}setTrip(t,e,n,s,r,o){const a=`<div class="eyebrow">Trip ${t} · ${e}${r?" · done!":""}</div><div class="brief">${n}</div><div class="where">${s}</div><div class="journal">${o}</div>`;a!==this.lastTrip&&(this.lastTrip=a,this.trip.innerHTML=a)}setPrompt(t){const e=t?`<kbd>${t.key}</kbd> ${t.text}`:"";e!==this.lastPrompt&&(this.lastPrompt=e,this.promptEl.innerHTML=e,this.promptEl.classList.toggle("waiting",!!t&&!t.ready)),this.promptEl.hidden=!t}showSummary(t,e){const n=Math.floor(t.hours),s=Math.round((t.hours-n)*60);this.summary.innerHTML=`
      <div class="eyebrow">Trip complete</div>
      <div class="title">Moored at ${e}</div>
      <dl>
        <dt>Time on the water</dt><dd>${n?`${n} h `:""}${s} min</dd>
        <dt>Bumps</dt><dd>${t.bumps}</dd>
        <dt>Boats and anglers upset</dt><dd>${t.rocked}</dd>
        ${t.cleared?`<dt>Blockages cleared</dt><dd>${t.cleared} 🛒</dd>`:""}
      </dl>
      <p>${t.verdict}</p>
      <button><kbd>Enter</kbd> Next trip</button>`,this.summary.hidden=!1}hideSummary(){this.summary.hidden=!0}get isWinding(){return this.winding}setLockPanel(t,e){if(!e||!e.gate&&!e.step){this.lockPanel.hidden=!0,this.lastLock="",this.winding=!1;return}const n=e.gate,s=e.step,r=(s==null?void 0:s.group)??n.group,o=(s==null?void 0:s.uphill)??!0;this.winding=!!n&&n.paddle>0&&n.paddle<1;const a=r.bodies.map(x=>t.bodies[x]);let l=1/0,c=-1/0;for(const x of a)l=Math.min(l,x.lo-1.6),c=Math.max(c,x.hi+.6);const h=x=>Math.round((x-l)/(c-l)*100),d=a.map((x,v)=>v);o||d.reverse();const f=[];d.forEach((x,v)=>{const b=a[x],T=b.kind==="pound"?"canal":r.staircase?b.label.replace("chamber ",""):"lock",A=s&&s.boatBody===x?'<i class="dg-boat"></i>':"";if(f.push(`<div class="dg-body ${b.kind}"><div class="dg-floor" style="height:${h(b.lo-1.6)}%"></div><div class="dg-water" style="height:${h(b.level)}%">${A}</div><span>${T}</span></div>`),v<d.length-1){const L=o?x:x-1,w=r.gates[L],y=[w.open>.5?"open":"closed",w===n?"sel":"",w===(s==null?void 0:s.gate)?"guide":""].join(" ");f.push(`<div class="dg-gate ${y}">${w.paddle>.05?'<i class="dg-paddle"></i>':""}</div>`)}});let u="";if(n){const x=t.levelsMatch(n),v=!n.wantOpen&&!x||n.wantOpen&&e.boatSpans,b=T=>(s==null?void 0:s.gate)===n&&s.action===T?"guide":"";u=`
      <div class="lp-sel"><span>Selected:</span> <b>${J_(n.label)}</b>${e.candidates>1?' <span class="lp-tab"><kbd>Tab</kbd> other gate</span>':""}</div>
      <div class="lp-actions">
        <button data-act="paddles" class="${n.wantPaddle?"active":""} ${b(n.wantPaddle?"paddlesDown":"paddlesUp")}"><kbd>Q</kbd> ${n.wantPaddle?"Drop paddles":"Wind paddles up"}<i class="prog" style="width:${Math.round(n.paddle*100)}%"></i></button>
        <button data-act="gates" class="${b(n.wantOpen?"close":"open")}" ${v?"disabled":""}><kbd>E</kbd> ${n.wantOpen?"Close gates":"Open gates"}<i class="prog" style="width:${Math.round(n.open*100)}%"></i></button>
      </div>`}const g=e.volunteers==="active",_=!g&&(s!=null&&s.gate)&&n&&s.gate!==n?`<div class="lp-note">The guide wants the ${s.gate.label}. Tab back to it.</div>`:"",m=s?g?`Volunteers: ${s.text.replace(/ \((Q|E)\)/g,"").replace(/^Wind up/,"winding up").replace(/^Drop/,"dropping").replace(/^Open/,"opening").replace(/^Close/,"closing")}`:s.text:"",p=e.volunteers==="available"?'<div class="lp-vol"><span>🙋 Volunteer lock-keepers on duty</span><button data-act="autopilot"><kbd>P</kbd> Let them work you through</button></div>':g?'<div class="lp-vol on"><span>🙋 The volunteers are working you through. Steer or use the throttle to take over.</span></div>':"",M=`
      <div class="lp-head">
        <div class="eyebrow">${r.name} · going ${o?"up":"down"}</div>
      </div>
      <div class="dg">${f.join("")}</div>
      ${s?`<div class="lp-step"><b>Next:</b> ${m}</div>`:""}
      ${_}
      ${p}
      ${g?"":u}`;M!==this.lastLock&&(this.lastLock=M,this.lockPanel.innerHTML=M),this.lockPanel.hidden=!1}}function K_(i){return`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" />${i?'<path d="M16 9l5 6M21 9l-5 6" />':'<path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M18.5 5.5a9 9 0 0 1 0 13" />'}</svg>`}const J_=i=>i[0].toUpperCase()+i.slice(1),Ae=.5,Ac=650;class Q_{constructor(t,e,n,s){k(this,"el");k(this,"bigEl");k(this,"base");k(this,"locks");k(this,"bigOpen",!1);k(this,"dest",null);k(this,"places",[]);k(this,"hazard",null);this.b=s;const r=this.base=document.createElement("canvas");r.width=Math.ceil((s.x1-s.x0)*Ae),r.height=Math.ceil((s.z1-s.z0)*Ae);const o=r.getContext("2d"),a=d=>(d-s.x0)*Ae,l=d=>(d-s.z0)*Ae,c=(d,f)=>{o.beginPath();for(let u=0;u<d.length;u+=2)(u?o.lineTo:o.moveTo).call(o,a(d[u]),l(d[u+1]));f&&o.closePath()};o.fillStyle="#e5e9d2",o.fillRect(0,0,r.width,r.height),o.fillStyle="#c9dcaa";for(const d of t.parks)c(d.p,!0),o.fill();o.fillStyle="#9cc3d2";for(const d of t.water)c(d.p,!0),o.fill();o.strokeStyle="#9cc3d2",o.lineCap=o.lineJoin="round";for(const d of t.rivers)o.lineWidth=d.w*Ae,c(d.p,!1),o.stroke();o.fillStyle="#d2c3ae";for(const d of t.buildings)c(d.p,!0),o.fill();for(const d of[0,1])for(const f of t.roads)f.w<3||(o.strokeStyle=d?"#ffffff":"#b9b2a4",o.lineWidth=f.w*Ae+(d?0:1.5),c(f.p,!1),o.stroke());o.strokeStyle="#5b5550",o.lineWidth=1.5,o.setLineDash([4,3]);for(const d of t.rails)c(d.p,!1),o.stroke();o.setLineDash([]),o.strokeStyle="#2f7aa0",o.lineWidth=4,c(t.centreline,!1),o.stroke();const h=new Map;for(const d of n.gates){const f=e.frame(d.s);let u=h.get(d.lockName);u||h.set(d.lockName,u={name:d.lockName,x:0,z:0,gates:[]}),u.gates.push({x:f.x,z:f.z,nx:f.nx,nz:f.nz})}for(const d of h.values())d.x=d.gates.reduce((f,u)=>f+u.x,0)/d.gates.length,d.z=d.gates.reduce((f,u)=>f+u.z,0)/d.gates.length;this.locks=[...h.values()],this.el=document.createElement("canvas"),this.el.className="minimap",this.el.width=this.el.height=440,this.bigEl=document.createElement("canvas"),this.bigEl.className="bigmap"}draw(t,e,n){const s=this.el.getContext("2d"),r=this.el.width,o=Ac*Ae,a=(t-this.b.x0)*Ae-o/2,l=(e-this.b.z0)*Ae-o/2;s.fillStyle="#e5e9d2",s.fillRect(0,0,r,r),s.drawImage(this.base,a,l,o,o,0,0,r,r);const c=r/Ac,h=(d,f)=>[r/2+(d-t)*c,r/2+(f-e)*c];if(this.drawPlaces(s,h,2,!1),this.drawLocks(s,h,2,9),this.drawDestination(s,h,2,r),this.drawHazard(s,h,2),this.boatMarker(s,r/2,r/2,n,1.6),this.bigOpen){const d=this.bigEl,f=Math.min(2,devicePixelRatio);d.width=d.clientWidth*f,d.height=d.clientHeight*f;const u=d.getContext("2d"),g=Math.min(d.width/this.base.width,d.height/this.base.height),_=(d.width-this.base.width*g)/2,m=(d.height-this.base.height*g)/2;u.fillStyle="#e5e9d2",u.fillRect(0,0,d.width,d.height),u.drawImage(this.base,_,m,this.base.width*g,this.base.height*g);const p=Ae*g,M=(x,v)=>[_+(x-this.b.x0)*p,m+(v-this.b.z0)*p];this.drawPlaces(u,M,f,!0),this.drawLocks(u,M,f,7),this.drawDestination(u,M,f*1.3,null),this.drawHazard(u,M,f*1.3),this.boatMarker(u,_+(t-this.b.x0)*Ae*g,m+(e-this.b.z0)*Ae*g,n,1.4*f)}}addMooredBoats(t){const e=this.base.getContext("2d");e.fillStyle="#5b4a8a";for(const n of t)e.save(),e.translate((n.x-this.b.x0)*Ae,(n.z-this.b.z0)*Ae),e.rotate(-n.psi),e.fillRect(-Math.max(1.2,n.halfB*Ae),-n.halfL*Ae,Math.max(2.4,n.halfB*2*Ae),n.halfL*2*Ae),e.restore()}setPlaces(t){this.places=t}drawPlaces(t,e,n,s){t.save(),t.textAlign="center",t.textBaseline="middle";const r=[];for(const o of this.places){const[a,l]=e(o.x,o.z);if(!(a<-20||l<-20||a>t.canvas.width+20||l>t.canvas.height+20)&&(t.fillStyle="rgba(255, 250, 235, 0.95)",t.strokeStyle=o.icon==="★"?"#1d3557":"#6e1f1a",t.lineWidth=1.5*n,t.beginPath(),t.arc(a,l,9*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#1d3557",t.font=`${o.icon==="★"?800:400} ${11*n}px Nunito, sans-serif`,t.fillText(o.icon,a,l+.5*n),s)){t.font=`700 ${10*n}px Nunito, sans-serif`;const c=t.measureText(o.name).width,h=a-c/2,d=l+11*n,f=l+23*n;if(r.some(([u,g,_,m])=>h<_&&h+c>u&&d<m&&f>g))continue;r.push([h-4*n,d,h+c+4*n,f]),t.lineWidth=3*n,t.strokeStyle="rgba(255,255,255,0.9)",t.strokeText(o.name,a,l+17*n),t.fillStyle="#3a2a1a",t.fillText(o.name,a,l+17*n)}}t.restore()}setHazard(t,e=0){this.hazard=t===null?null:{x:t,z:e}}drawHazard(t,e,n){if(!this.hazard)return;const[s,r]=e(this.hazard.x,this.hazard.z);t.save(),t.fillStyle="#ffcf4a",t.strokeStyle="#7a2f00",t.lineWidth=1.5*n,t.beginPath(),t.moveTo(s,r-10*n),t.lineTo(s+9*n,r+6*n),t.lineTo(s-9*n,r+6*n),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#7a2f00",t.font=`900 ${10*n}px Nunito, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("!",s,r+1*n),t.restore()}setDestination(t,e,n){this.dest={x:t,z:e,name:n}}drawDestination(t,e,n,s){if(!this.dest)return;let[r,o]=e(this.dest.x,this.dest.z);if(s!==null){const a=s/2,l=r-a,c=o-a,h=Math.hypot(l,c),d=a-14*n;h>d&&(r=a+l/h*d,o=a+c/h*d)}t.save(),t.fillStyle="#ffcf4a",t.strokeStyle="#7a5a10",t.lineWidth=1.5*n,t.beginPath(),t.moveTo(r,o),t.lineTo(r,o-18*n),t.stroke(),t.beginPath(),t.moveTo(r,o-18*n),t.lineTo(r+12*n,o-13.5*n),t.lineTo(r,o-9*n),t.closePath(),t.fill(),t.stroke(),t.restore()}drawLocks(t,e,n,s){t.save(),t.lineCap="round";for(const r of this.locks)for(const o of r.gates){const[a,l]=e(o.x,o.z),c=o.nx*s*n,h=o.nz*s*n;for(const[d,f]of[[5,"#ffffff"],[2.5,"#1b1b1b"]])t.strokeStyle=f,t.lineWidth=d*n,t.beginPath(),t.moveTo(a-c,l-h),t.lineTo(a+c,l+h),t.stroke()}t.font=`800 ${12*n}px Nunito, sans-serif`,t.textBaseline="middle";for(const r of this.locks){const[o,a]=e(r.x,r.z),l=r.gates.length>2?`${r.name} · ${r.gates.length-1} locks`:r.name,c=t.measureText(l).width,h=20*n,d=8*n,f=o-c/2-d,u=a-h-12*n;t.fillStyle="rgba(31, 77, 58, 0.94)",t.beginPath(),t.roundRect(f,u,c+d*2,h,h/2),t.fill(),t.beginPath(),t.moveTo(o-5*n,u+h-.5),t.lineTo(o+5*n,u+h-.5),t.lineTo(o,u+h+6*n),t.fill(),t.fillStyle="#f6efdd",t.fillText(l,f+d,u+h/2+n)}t.restore()}boatMarker(t,e,n,s,r){t.save(),t.translate(e,n),t.rotate(-s+Math.PI),t.scale(r,r),t.fillStyle="#a3291f",t.strokeStyle="#fff",t.lineWidth=2,t.beginPath(),t.moveTo(0,-11),t.lineTo(6,8),t.lineTo(0,4),t.lineTo(-6,8),t.closePath(),t.stroke(),t.fill(),t.restore()}}class tv{constructor(){k(this,"ctx",null);k(this,"master");k(this,"noise");k(this,"waterGain");k(this,"nextThump",0);k(this,"engine",null);k(this,"nextBird",0);k(this,"nextClick",0);k(this,"muted",ev())}start(){if(this.ctx)return;const t=this.ctx=new AudioContext;this.master=t.createGain(),this.master.gain.value=this.muted?0:.7,this.master.connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*2,t.sampleRate);const e=this.noise.getChannelData(0);for(let r=0;r<e.length;r++)e[r]=Math.random()*2-1;const n=t.createBufferSource();n.buffer=this.noise,n.loop=!0;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=900,this.waterGain=t.createGain(),this.waterGain.gain.value=0,n.connect(s).connect(this.waterGain).connect(this.master),n.start(),this.loadEngine().catch(r=>console.warn("Engine samples unavailable, using synth",r))}async loadEngine(){const t=this.ctx,e=async c=>t.decodeAudioData(await(await fetch(c)).arrayBuffer()),[n,s]=await Promise.all([e("./audio/engine-idle.wav"),e("./audio/engine-run.wav")]),r=(c,h)=>{const d=t.createBufferSource();return d.buffer=c,d.loop=!0,d.connect(h),d.start(),d},o=t.createGain(),a=t.createGain();o.gain.value=a.gain.value=0;const l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=2400,o.connect(l),a.connect(l),l.connect(this.master),this.engine={idle:r(n,o),run:r(s,a),idleGain:o,runGain:a}}toggleMute(){this.muted=!this.muted,this.ctx&&(this.master.gain.value=this.muted?0:.7);try{localStorage.setItem("canal.muted",this.muted?"1":"0")}catch{}}update(t,e,n,s){const r=this.ctx;if(!r)return;const o=r.currentTime,a=Math.abs(t);if(this.engine){const l=this.engine,c=Math.min(1,a*.4);l.idleGain.gain.setTargetAtTime((1-c)*.55,o,.25),l.runGain.gain.setTargetAtTime(c*(.45+a*.05),o,.25),l.idle.playbackRate.setTargetAtTime(1+a*.08,o,.4),l.run.playbackRate.setTargetAtTime(.62+Math.max(0,a-1)*.095,o,.4)}else{const l=7+a*1.9;for(this.nextThump<o&&(this.nextThump=o);this.nextThump<o+.1;)this.thump(this.nextThump,.22+a*.035),this.nextThump+=1/l}this.waterGain.gain.setTargetAtTime(Math.min(.35,e*.06),o,.3),n&&o>this.nextClick&&(this.click(o),this.nextClick=o+.13),s&&o>this.nextBird&&(this.nextBird>0&&this.bird(o),this.nextBird=o+4+Math.random()*9)}bump(t){const e=this.ctx;if(!e)return;const n=e.currentTime,s=e.createOscillator();s.frequency.setValueAtTime(70,n),s.frequency.exponentialRampToValueAtTime(35,n+.25);const r=e.createGain();r.gain.setValueAtTime(Math.min(.9,t),n),r.gain.exponentialRampToValueAtTime(.001,n+.35),s.connect(r).connect(this.master),s.start(n),s.stop(n+.4)}quack(){const t=this.ctx;if(!t)return;const e=t.currentTime;for(let n=0;n<2;n++){const s=e+n*.16,r=t.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(520,s),r.frequency.exponentialRampToValueAtTime(330,s+.11);const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=1100,o.Q.value=3;const a=t.createGain();a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.25,s+.015),a.gain.exponentialRampToValueAtTime(1e-4,s+.12),r.connect(o).connect(a).connect(this.master),r.start(s),r.stop(s+.13)}}thump(t,e){const n=this.ctx,s=n.createOscillator();s.type="triangle",s.frequency.setValueAtTime(58,t),s.frequency.exponentialRampToValueAtTime(38,t+.08);const r=n.createGain();r.gain.setValueAtTime(e,t),r.gain.exponentialRampToValueAtTime(.001,t+.11),s.connect(r).connect(this.master),s.start(t),s.stop(t+.12);const o=n.createBufferSource();o.buffer=this.noise;const a=n.createBiquadFilter();a.type="bandpass",a.frequency.value=220;const l=n.createGain();l.gain.setValueAtTime(e*.5,t),l.gain.exponentialRampToValueAtTime(.001,t+.06),o.connect(a).connect(l).connect(this.master),o.start(t,Math.random(),.07)}click(t){const e=this.ctx,n=e.createBufferSource();n.buffer=this.noise;const s=e.createBiquadFilter();s.type="highpass",s.frequency.value=2500;const r=e.createGain();r.gain.setValueAtTime(.35,t),r.gain.exponentialRampToValueAtTime(.001,t+.03),n.connect(s).connect(r).connect(this.master),n.start(t,Math.random(),.04)}bird(t){const e=this.ctx,n=2+Math.floor(Math.random()*4),s=2600+Math.random()*1600;for(let r=0;r<n;r++){const o=t+r*(.09+Math.random()*.05),a=e.createOscillator();a.type="sine",a.frequency.setValueAtTime(s,o),a.frequency.exponentialRampToValueAtTime(s*(.7+Math.random()*.6),o+.07);const l=e.createGain();l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(.05,o+.01),l.gain.exponentialRampToValueAtTime(1e-4,o+.08),a.connect(l).connect(this.master),a.start(o),a.stop(o+.1)}}}function ev(){try{return localStorage.getItem("canal.muted")==="1"}catch{return!1}}const Sr=.04,nv=90;function Rc(i,t,e){const n=sv(i,t,e);return n!=null&&n.keeper&&(n.text=iv(n)),n}function iv(i){var n;const t=i.gate.label,e=(n=i.text.match(/\(Q\) (.*)\.$/))==null?void 0:n[1];switch(i.action){case"paddlesUp":return`The lock-keeper is winding up the paddles on the ${t}${e?` ${e}`:""}. Sit tight.`;case"paddlesDown":return`The lock-keeper is dropping the paddles on the ${t}.`;case"close":return`The lock-keeper is closing the ${t}.`;case"open":return`The lock-keeper is opening the ${t}.`;case"wait":return i.text.replace("Water's running","The lock-keeper is letting water run");default:return i.text}}function sv(i,t,e){const[n,s]=t,r=(n+s)/2;let o,a=1/0;for(const v of i.groups){const b=v.gates[0].s,T=v.gates.at(-1).s,A=e?b-r:r-T,L=r>b-2&&r<T+2,w=L?0:A;(L||A>0&&A<nv)&&w<a&&(a=w,o=v)}if(!o){for(const v of i.groups){const b=v.gates[0].s,T=v.gates.at(-1).s,A=e?r-T:b-r;if(A>0&&A<60){const L=v.gates.find(y=>y.wantPaddle)??v.gates.find(y=>y.wantOpen),w=e?v.gates.at(-1):v.gates[0];if(L)return{group:v,uphill:e,gate:L,boatBody:e?v.bodies.length-1:0,adjacent:[w],keeper:L!==w,action:L.wantPaddle?"paddlesDown":"close",text:L.wantPaddle?`Before you go: drop the paddles on the ${L.label} behind you (Q).`:`Before you go: close the ${L.label} behind you (E).`}}}return null}const l=o.gates.length-1,c=e?o.gates:[...o.gates].reverse(),d=(e?o.bodies:[...o.bodies].reverse()).map(v=>i.bodies[v]),f=v=>e?v:l+1-v;let u=-1;for(let v=0;v<=l+1;v++){const b=d[v];n>=b.s0-.2&&s<=b.s1+.2&&(u=v)}const g=c.find(v=>v.s>n&&v.s<s),_=u<0?g?[g]:[]:u===l+1?[c[l]]:[c[u-1],c[u]].filter(v=>!!v),m=(v,b,T,A=u)=>({group:o,uphill:e,gate:v,action:b,text:T,boatBody:A<0?-1:f(A),adjacent:_,keeper:!!v&&!_.includes(v)&&b!=="drive"});if(u<0)return m(g??null,"drive","Keep going, nice and slow.");if(u===l+1){const v=o.gates.find(b=>b.wantPaddle)??o.gates.find(b=>b.wantOpen);return v?m(v,v.wantPaddle?"paddlesDown":"close",v.wantPaddle?`You're through! Drop the paddles on the ${v.label} behind you (Q).`:`You're through! Close the ${v.label} behind you (E).`):null}const p=c[u],M=v=>v.label==="the canal"?v===d[0]?"the canal behind you":"the canal ahead":v.label;if(u>0&&c[u-1].wantOpen)return m(c[u-1],"close",`Close the ${c[u-1].label} behind you (E).`);if(Math.abs(d[u].level-d[u+1].level)<Sr){for(const v of o.gates)if(v!==p&&v.wantPaddle)return m(v,"paddlesDown",`Drop the paddles on the ${v.label} (Q) so the water stays put.`)}else{const v=c.find((U,Y)=>Y!==u&&U.wantOpen);if(v)return m(v,"close",`First close the ${v.label} (E), or the water will just run away.`);const b=o.gates.filter(U=>U.wantPaddle&&Math.abs(i.bodies[U.below].level-i.bodies[U.above].level)>=Sr);if(b.length>1)return m(b[1],"paddlesDown",`Drop the paddles on the ${b[1].label} (Q). One set at a time, or the water just runs straight through.`);if(b.length===1){const U=b[0],Y=i.bodies[U.below],H=i.bodies[U.above],ut=H.level-Y.level,mt=U.flow===0&&U.paddle>.9?" Hmm, it isn't moving. Something's open at the other end.":"";return m(U,"wait",`Water's running from ${M(H)} into ${M(Y)}… levels ${ut.toFixed(1)} m apart.${mt} (T speeds time up.)`)}const T=U=>d[U].kind==="pound"||d[U].level>d[U].hi-Sr,A=U=>d[U].kind==="pound"||d[U].level<d[U].lo+Sr,L=(U,Y)=>c[Math.min(U,Y)],w=U=>e?U+1:U-1,y=U=>e?U-1:U+1,C=U=>{const Y=w(U);return T(Y)?[L(U,Y),`to fill ${M(d[U])} from ${M(d[Y])}`]:C(Y)},z=U=>{const Y=y(U);return A(Y)?[L(U,Y),`to empty ${M(d[U])} into ${M(d[Y])}`]:z(Y)};let B;if(d[u].kind==="pound"||d[u+1].kind==="pound"){const U=d[u].level>d[u+1].level?d[u]:d[u+1],Y=U===d[u]?d[u+1]:d[u];B=[p,U.kind==="pound"?`to fill ${M(Y)} from ${M(U)}`:`to empty ${M(U)} into ${M(Y)}`]}else(e?!T(u+1):!A(u+1))?(B=e?C(u+1):z(u+1),B[1]+=" first"):(e?!A(u):!T(u))?(B=e?z(u):C(u),B[1]+=" first"):B=[p,`so ${M(d[e?u+1:u])} empties into ${M(d[e?u:u+1])}`];const[q,j]=B;for(const U of o.gates)if(U!==q&&U.wantPaddle)return m(U,"paddlesDown",`Drop the paddles on the ${U.label} (Q) so the water stays put.`);return m(q,"paddlesUp",`Wind up the paddles on the ${q.label} (Q) ${j}.`)}return p.wantOpen?p.open<.97?m(p,"wait",`The ${p.label} are swinging open…`):p.wantPaddle?m(p,"paddlesDown",`Drop the paddles on the ${p.label} (Q).`):m(p,"drive",`Gates open. Drive ${u+1===l+1?"out of the lock":`into ${M(d[u+1])}`}.`):m(p,"open",`Levels match. Open the ${p.label} (E).`)}const Cc=["Kingfisher","Dunroamin","Willow","Morning Mist","Heron","Bramble","Otter","Lazy Days","Moorhen","Puddle Duck","Wren","Seren","Daisy May","Jubilee","Halcyon","Mallard","Badger","Tilly","Dragonfly","Rosie","Swallow","Nutmeg","Lily Pad","Bluebell","Damselfly","Kestrel","Second Wind","Tortoise","Meander","Sunflower","Jolly Roger","Dormouse","Albatross","Grebe","Primrose","Liberty","Plover","Hedgehog","Elderflower","Coot","Teasel","Old Bill","Marigold","Windrush","Peregrine","Thistle","Snowdrop","Toad Hall","Cobble","Foxglove","Pippin","Salamander","Spindle","Saffron","Sloe"],Pc=["#1f4d3a","#7a1f2b","#1d3557","#2e2a4a","#5a3d1e","#2f5d62","#6b2737","#264d2a","#3b4a6b","#8a5a1e"],Lc=["#7c2f23","#3a3d40","#d9ccaa","#2b2b2b","#8a7650","#4a5a3a"];class rv{constructor(t,e,n,s,r,o,a){k(this,"group",new Bt);k(this,"boats",[]);k(this,"zones");k(this,"highlight");k(this,"marker");k(this,"time",0);this.route=t,this.ww=e,this.terrain=n,this.zones=[{id:"tower",name:"Tower Wharf",kind:"visitor",s0:r+10,s1:r+55},{id:"city",name:"City moorings, Cow Lane Bridge",kind:"visitor",s0:1150,s1:1215},{id:"hoole",name:"Hoole",kind:"visitor",s0:2050,s1:2110},{id:"christleton",name:"Christleton",kind:"visitor",s0:4345,s1:4400}];const l=(u,g)=>e.gates.every(_=>_.s<u-35||_.s>g+35)&&s.every(_=>_.s<u-_.w/2-12||_.s>g+_.w/2+12)&&e.windingHoles.every(_=>_<u-30||_>g+30)&&this.zones.every(_=>_.s1<u-8||_.s0>g+8)&&e.bodies[e.bodyIndexAt((u+g)/2)].kind==="pound",c=a.filter(u=>u.type==="stop"&&!/drive.?thru/i.test(u.name)).sort((u,g)=>u.rank-g.rank||u.dist-g.dist);for(const u of c)if(!this.zones.some(g=>g.kind==="stop"&&Math.abs((g.s0+g.s1)/2-u.s)<120))for(const g of[0,8,-8,16,-16,24,-24,32,-32,45,-45,60,-60]){const _=u.s+g-18,m=u.s+g+18;if(!(_<30||m>t.length-30||!l(_,m))){this.zones.push({id:`stop:${u.name}`,name:u.name,kind:"stop",poi:u,s0:_,s1:m});break}}for(const u of this.zones)this.buildZone(u);this.highlight=new it(new de,new Ns({color:"#ffd76a",transparent:!0,opacity:.5,depthWrite:!1})),this.group.add(this.highlight),this.marker=ov(),this.group.add(this.marker);const h=os(77),d=(u,g)=>u-g<40||u+g>t.length-40||e.gates.some(_=>Math.abs(_.s-u)<g+35)||s.some(_=>Math.abs(_.s-u)<g+_.w/2+14)||this.zones.some(_=>u+g>_.s0-6&&u-g<_.s1+6)||e.windingHoles.some(_=>Math.abs(_-u)<g+30)||Math.abs(u-o)<g+30||e.bodies[e.bodyIndexAt(u)].kind!=="pound";let f=[...Cc];for(let u=60;u<t.length-60;){const g=u>r-250&&u<r+220?.85:u>2900&&u<3250?.6:.32,_=15+Math.round(h()*5);if(h()<g&&!d(u+_/2,_/2)){const m=f.splice(Math.floor(h()*f.length),1)[0]??"Narrowboat";f.length||(f=[...Cc]),this.addBoat(u+_/2,_,m,h),u+=_+1+h()*3}else u+=6+h()*14}}addBoat(t,e,n,s){const r=this.route.frame(t),a=(this.ww.halfWidthAt(t)-Tn/2-.12)*le,l=r.x+r.nx*a,c=r.z+r.nz*a,h=Math.atan2(r.tx,r.tz)+(s()<.5?0:Math.PI),d=Xa({name:n,length:e,crew:!1,cabin:Pc[Math.floor(s()*Pc.length)],roof:Lc[Math.floor(s()*Lc.length)]}),f=V_(d),u=this.ww.levelAt(t);f.position.set(l,u,c),f.rotation.order="YXZ",f.rotation.y=h,this.group.add(f),this.boats.push({x:l,z:c,psi:h,halfL:e/2,halfB:Tn/2,name:n,s:t,group:f,baseY:u,rock:0,rockedAt:-99})}buildZone(t){const e=new ee({color:"#2a2a2a",metalness:.6,roughness:.4});for(let o=t.s0;o<=t.s1;o+=6){const a=this.ww.halfWidthAt(o),[l,c]=this.route.point(o,(a+.35)*le),h=new it(new us(.14,.035,6,12),e);h.position.set(l,this.terrain.bankTop(o)+.07,c),h.rotation.x=Math.PI/2,this.group.add(h)}const n=this.route.frame(t.s0),s=(this.ww.halfWidthAt(t.s0)+2.9)*le,r=t.kind==="stop"?Dc([`Moorings for ${av(t.poi)}`,t.name],"#6e1f1a"):Dc(["Visitor moorings",t.name]);r.position.set(n.x+n.nx*s,this.terrain.bankTop(t.s0),n.z+n.nz*s),r.rotation.y=Math.atan2(le*n.tz,-le*n.tx),this.group.add(r)}setActive(t){if(this.highlight.visible=this.marker.visible=!!t,!t)return;const e=[],n=[];let s=0;for(let c=t.s0;c<=t.s1+.01;c+=1.5,s++){const h=this.ww.halfWidthAt(c),d=this.terrain.bankTop(c)+.06;for(const f of[h-.05,h+.75]){const[u,g]=this.route.point(c,f*le);e.push(u,d,g)}s>0&&n.push((s-1)*2,(s-1)*2+1,s*2,(s-1)*2+1,s*2+1,s*2)}const r=new de;r.setAttribute("position",new Zt(e,3)),r.setIndex(n),this.highlight.material.side=ze,this.highlight.geometry.dispose(),this.highlight.geometry=r;const o=(t.s0+t.s1)/2,[a,l]=this.route.point(o,(this.ww.halfWidthAt(o)+.4)*le);this.marker.position.set(a,this.terrain.bankTop(o)+4,l),this.marker.userData.y0=this.marker.position.y}rockBoat(t,e){t.rock=Math.min(.09,Math.max(t.rock,e)),t.rockedAt=this.time,this.popOwner(t,"shake")}popOwner(t,e){if(t.owner)this.time>t.owner.until&&(t.owner.from=this.time),t.owner.until=this.time+5,t.owner.mode=e;else{const n=["#8a3b6e","#3a6e8a","#6e8a3a","#b5651d","#4a4a7a","#7a2f2f"],s=Gs(n[Math.floor(Math.random()*n.length)],Math.random()<.5?"#3a3a3a":null);s.group.position.set(0,-.4,-t.halfL+2.45),t.group.add(s.group),t.owner={person:s,from:this.time,until:this.time+5,mode:e}}}get now(){return this.time}update(t){this.time+=t;for(const e of this.boats){const n=e.owner;if(n){const s=Math.min(1,(this.time-n.from)/.5)*Math.min(1,Math.max(0,(n.until-this.time)/.5));n.person.group.position.y=-.4+s*1,n.person.group.visible=s>.01,Wr(n.person,s>.6?n.mode:"rest",this.time)}e.rock<.001||(e.rock*=Math.exp(-t*.6),e.group.rotation.z=Math.sin(this.time*3.1)*e.rock,e.group.position.y=e.baseY+Math.sin(this.time*2.3)*e.rock*.6)}this.marker.visible&&(this.marker.position.y=this.marker.userData.y0+Math.sin(this.time*1.6)*.25,this.marker.rotation.y+=t*.9,this.highlight.material.opacity=.35+.2*Math.sin(this.time*3))}zoneAt(t){return this.zones.find(e=>t>=e.s0-4&&t<=e.s1+4)}}function ov(){const i=new Bt,t=new ee({color:"#ffcf4a",emissive:"#a07000",emissiveIntensity:.6,roughness:.4}),e=new it(new za(.7,0),t);return e.scale.y=1.5,i.add(e),i}function av(i){return i.kind==="pub"||i.kind==="bar"?"patrons":i.kind==="hotel"?"guests":"customers"}function Dc(i,t="#1d3557"){const e=document.createElement("canvas");e.width=512,e.height=192;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,512,192),n.strokeStyle="#f3ead0",n.lineWidth=6,n.strokeRect(8,8,496,176),n.fillStyle="#f3ead0",n.textAlign="center",n.font="700 34px Nunito, sans-serif",n.fillText(i[0].toUpperCase(),256,70,470),n.font="600 40px Fraunces, Georgia, serif",n.fillText(i[1],256,135,470);const s=new Hs(e);s.colorSpace=Ue;const r=new Bt,o=new it(new ii(2.2,.82),new ee({map:s,side:ze}));o.position.y=1.9,r.add(o);const a=new it(new Jt(.1,2,.1),new ee({color:"#f1efe8"}));return a.position.y=1,r.add(a),r}const Ic=.9,Co=.45,lv=.45;class cv{constructor(t,e,n,s){k(this,"group",new Bt);k(this,"lines",[]);k(this,"ropeMat",new Eh({color:"#d8c49a"}));k(this,"pinMat",new ee({color:"#3a3a3a",metalness:.5,roughness:.5}));this.route=t,this.ww=e,this.terrain=n,this.boat=s}get count(){return this.lines.length}get moored(){return this.lines.length===2}endPoint(t){const e=this.route.frame(this.boat.s);return[((-Math.cos(this.boat.psi)*e.nx+Math.sin(this.boat.psi)*e.nz)*le>0?1:-1)*Tn*.5,(t==="bow"?1:-1)*(En/2-1.3)]}gap(t){const[e,n]=this.boat.toWorld(...this.endPoint(t)),s=this.route.project(e,n,this.boat.s);return{gap:this.ww.halfWidthAt(s.s)-s.d*le,s:s.s}}blocker(){return this.ww.gates.some(t=>Math.abs(t.s-this.boat.s)<En/2+22)?"No mooring on a lock landing. Move along a bit.":this.boat.d*le<0?"Moor on the towpath side, the bank with the path.":null}prompt(){if(this.moored)return{key:"F",text:"Cast off",ready:!0};const e=["bow","stern"].filter(r=>!this.lines.some(o=>o.end===r)).map(r=>({e:r,...this.gap(r)})),n=e.reduce((r,o)=>o.gap<r.gap?o:r);if(!this.lines.length&&(n.gap>2.5||this.boat.speed>1)||this.blocker()&&!this.lines.length)return null;const s=e.find(r=>r.gap<Ic);return s&&this.boat.speed<Co?{key:"F",text:`Tie the ${s.e} line`,ready:!0}:this.boat.speed>=Co?{key:"F",text:"Slow right down to step off",ready:!1}:{key:"F",text:`Bring the ${n.e} in alongside the bank`,ready:!1}}act(){if(this.moored)return this.castOff(),"Lines in, cast off. Off you go!";if(!this.lines.length){const n=this.blocker();if(n)return n}if(this.boat.speed>=Co)return"Too quick to step off! Slow right down first.";const t=["bow","stern"].filter(n=>!this.lines.some(s=>s.end===n)),e=t.find(n=>this.gap(n).gap<Ic);return e?(this.tie(e),this.moored?null:`${e==="bow"?"Bow":"Stern"} line tied. Now the ${e==="bow"?"stern":"bow"}.`):`Bring the ${t[0]} closer in to the bank first (within a metre).`}tie(t){const e=this.endPoint(t),[n,s]=this.boat.toWorld(...e),r=this.route.project(n,s,this.boat.s),o=this.ww.halfWidthAt(r.s),a=this.route.frame(r.s),l=Math.sin(this.boat.psi)*a.tx+Math.cos(this.boat.psi)*a.tz>=0?1:-1,c=(t==="bow"?1:-1)*l*.8,[h,d]=this.route.point(r.s+c,(o+.8)*le),f=Math.hypot(n-h,s-d)+.35,u={local:e,anchor:[h,d],length:f};this.boat.tethers.push(u);const g=new it(new me(.03,.03,.5,6),this.pinMat);g.position.set(h,this.terrain.bankTop(r.s)+.2,d),g.rotation.z=.2;const _=new og(new de().setFromPoints(new Array(12).fill(0).map(()=>new D)),this.ropeMat);_.frustumCulled=!1,this.group.add(g,_),this.lines.push({end:t,tether:u,pin:g,rope:_})}castOff(){for(const t of this.lines)this.group.remove(t.pin,t.rope),t.rope.geometry.dispose();this.boat.tethers.length=0,this.lines=[]}update(t){for(const e of this.lines){const[n,s]=this.boat.toWorld(...e.tether.local),r=new D(n,t+lv,s),o=e.pin.position.clone().setY(e.pin.position.y+.15),l=.08+Math.max(0,e.tether.length-r.distanceTo(o))*.6,c=e.rope.geometry.getAttribute("position");for(let h=0;h<c.count;h++){const d=h/(c.count-1),f=r.clone().lerp(o,d);f.y-=Math.sin(d*Math.PI)*l,c.setXYZ(h,f.x,f.y,f.z)}c.needsUpdate=!0}}}const Uc=[{zone:"city",title:"Up the staircase",brief:"Work up the Northgate Staircase, then moor at the city moorings by Cow Lane Bridge."},{zone:"hoole",title:"Through Chester",brief:"Carry on east under the city bridges and moor up at Hoole. Thirsty? There are canalside pubs on the way (🍺 on the map)."},{zone:"christleton",title:"Out to the country",brief:"Up through Hoole Lane, Chemistry, Tarvin and Greenfield locks, then moor at Christleton for the night."},{zone:"tower",title:"Back to Tower Wharf",brief:"Turn round in the winding hole past Christleton Bridge, then head all the way back down to Tower Wharf."}];class hv{constructor(t){k(this,"index",0);k(this,"startHour");k(this,"bumps",0);k(this,"rocked",0);k(this,"cleared",0);k(this,"result",null);this.startHour=t}get current(){return Uc[this.index%Uc.length]}complete(t){const e=(t-this.startHour+24)%24,n=this.bumps+this.rocked*2,s=n===0?"Not a ripple out of place. The towpath regulars are impressed.":n<4?"A couple of scrapes, but nothing a cup of tea won’t fix.":"Eventful! The moored boats will be talking about you for a while.";return this.result={trip:this.current,hours:e,bumps:this.bumps,rocked:this.rocked,cleared:this.cleared,verdict:s},this.result}next(t){this.index++,this.startHour=t,this.bumps=this.rocked=this.cleared=0,this.result=null}}const Nc=["Kittiwake","Ruby Tuesday","Water Rat","Bumblebee","Silver Birch","Mistle Thrush","Ploughman","Owl","Clementine","Blackthorn","Sandpiper","Merlin"],Oc=["#27445a","#6a1e2e","#2c5a3f","#4b3a6b","#8a4a12","#1f3d4d"],Fc=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400"],kc=1.5,uv=.9;class dv{constructor(t,e,n,s){k(this,"group",new Bt);k(this,"boats",[]);k(this,"events",[]);k(this,"time",0);k(this,"nextSpawn",8);k(this,"nameIndex",0);this.route=t,this.ww=e,this.moorings=n,this.player=s}update(t,e){this.time+=t;const n=this.player,s=this.ww.bodies[this.ww.bodyIndexAt(n.s)];if(this.time>this.nextSpawn&&this.boats.length<2&&s.kind==="pound"){this.nextSpawn=this.time+45+Math.random()*60;const r=n.s+e*(230+Math.random()*90),o=this.boats.every(a=>Math.abs(a.s-r)>80)&&this.moorings.zoneAt(r)===void 0;r>s.s0+60&&r<s.s1-60&&o&&this.spawn(r,-e)}for(const r of[...this.boats]){const o=(n.s-r.s)*r.dir>380||Math.abs(n.s-r.s)>520,a=this.ww.bodies[this.ww.bodyIndexAt(r.s)],l=r.dir>0?a.s1-r.s<40:r.s-a.s0<40;if(o||l&&Math.abs(n.s-r.s)>150||a.kind!=="pound"){this.remove(r);continue}this.steer(r,t,e)}}spawn(t,e){const n=Nc[this.nameIndex++%Nc.length],s=Xa({name:n,length:17+Math.round(Math.random()*3),crew:!0,cabin:Oc[Math.floor(Math.random()*Oc.length)],roof:Math.random()<.5?"#3a3d40":"#7c2f23"});s.steererPerson.group.children[0].material.color.set(Fc[Math.floor(Math.random()*Fc.length)]),s.group.rotation.order="YXZ",this.group.add(s.group);const o=s.group.userData.length/2,a={name:n,model:s,s:t,d:0,dir:e,speed:kc,obstacle:{x:0,z:0,psi:0,halfL:o,halfB:Tn/2},pausedUntil:0,waveUntil:0,passed:!1};this.boats.push(a),this.player.obstacles.push(a.obstacle),this.place(a,0)}remove(t){this.group.remove(t.model.group),this.boats.splice(this.boats.indexOf(t),1);const e=this.player.obstacles.indexOf(t.obstacle);e>=0&&this.player.obstacles.splice(e,1)}bumped(t){const e=this.boats.find(n=>n.obstacle===t);!e||this.time<e.pausedUntil||(e.pausedUntil=this.time+3,e.speed=0,e.waveUntil=this.time+3,this.events.push({kind:"bumped",boat:e}))}steer(t,e,n){const s=this.player,r=this.ww.halfWidthAt(t.s),o=(s.s-t.s)*t.dir,a=n!==t.dir;let l=kc;const c=this.moorings.boats.some(u=>Math.abs(u.s-t.s)<u.halfL+12);c&&(l=uv),o>0&&o<45&&(l=Math.min(l,a?.7:.4)),o>0&&o<22&&!a&&(l=0),this.time<t.pausedUntil&&(l=0),t.speed+=xe(l-t.speed,-.6*e,.3*e);const h=t.dir;let d=o>-20&&o<110&&a?h*1.8:0;const f=c?r-Tn-1.6:r-1.6;if(d=xe(d,-(r-1.6),f),t.d+=xe(d-t.d,-.45*e,.45*e),t.s+=t.dir*t.speed*e,this.place(t,e),!t.passed&&a&&Math.abs(s.s-t.s)<4){t.passed=!0;const u=(s.d-t.d)*h<0;t.waveUntil=this.time+3.5,this.events.push({kind:u?"greet":"wrongSide",boat:t})}Wr(t.model.steererPerson,this.time<t.waveUntil?"wave":"rest",this.time)}place(t,e){const n=this.route.frame(t.s),s=n.x+n.nx*t.d,r=n.z+n.nz*t.d,o=Math.atan2(n.tx,n.tz)+(t.dir>0?0:Math.PI),a=this.ww.levelAt(t.s);t.model.group.position.set(s,a+Math.sin(this.time*1.2+t.s)*.015,r),t.model.group.rotation.y=o,t.model.group.rotation.z=Math.sin(this.time*.9+e)*.004,Object.assign(t.obstacle,{x:s,z:r,psi:o})}}const wr=-le,fv=i=>new ee({color:i});function $t(i,t,e,n=0,s=0,r=0,o=0,a=0,l=0){const c=new it(t,fv(e));return c.position.set(n,s,r),c.rotation.set(o,a,l),i.add(c),c}const Pe=(i,t,e)=>new Jt(i,t,e),en=(i,t,e,n=6)=>new me(i,t,e,n),pv={bench(){const i=new Bt;$t(i,Pe(1.6,.06,.4),"#8a6a45",0,.45,0),$t(i,Pe(1.6,.36,.05),"#8a6a45",0,.68,-.2,-.15);for(const t of[-.7,.7])$t(i,Pe(.06,.45,.4),"#2b2b2b",t,.22,0);return i},bin(){const i=new Bt;return $t(i,en(.22,.2,.8,8),"#1f3d2f",0,.4,0),$t(i,en(.24,.24,.06,8),"#2b2b2b",0,.82,0),i},lamp(){const i=new Bt;return $t(i,en(.06,.09,3.6),"#1b1b1b",0,1.8,0),$t(i,Pe(.5,.06,.06),"#1b1b1b",.18,3.55,0),$t(i,en(.12,.16,.32,6),"#2b2b2b",.38,3.4,0),$t(i,en(.1,.1,.14,6),"#f4e3a1",.38,3.22,0),i},lifebuoy(){const i=new Bt;return $t(i,Pe(.1,1.5,.1),"#e8e4da",0,.75,0),$t(i,new us(.3,.07,6,12),"#e0522f",0,1.15,.08),$t(i,Pe(.6,.6,.03),"#c0b8a8",0,1.15,0),i},tub(){const i=new Bt;$t(i,en(.36,.3,.45,8),"#6b4a2e",0,.22,0),$t(i,new sn(.34,0),"#4f8a3a",0,.58,0);for(const[t,e,n]of[[.15,.1,"#e04f6a"],[-.12,.12,"#f2c94c"],[.02,-.16,"#d36ad6"],[-.16,-.06,"#f6f0e4"]])$t(i,new sn(.08,0),n,t,.82,e);return i},reeds(){const i=new Bt,t=os(5);for(let e=0;e<9;e++){const n=1.1+t()*.9;$t(i,en(.015,.04,n,4),t()<.4?"#8a9a4a":"#6f8a3a",(t()-.5)*.9,n/2-.3,(t()-.5)*.7,(t()-.5)*.2,0,(t()-.5)*.25),t()<.4&&$t(i,en(.04,.04,.2,5),"#5a3d22",(t()-.5)*.9,n-.3,(t()-.5)*.7)}return i},hedge(){const i=new Bt;return $t(i,Pe(4.2,1.5,1.1),"#3f6b30",0,.75,0),$t(i,new sn(.6,0),"#4b7a36",-1.2,1.4,.1),$t(i,new sn(.55,0),"#36602a",1,1.45,-.1),i},fence(){const i=new Bt;return $t(i,Pe(2,1.6,.06),"#7a5a3a",0,.8,0),$t(i,Pe(.1,1.75,.1),"#5e4430",-1,.87,0),i},flowers(){const i=new Bt,t=os(9),e=["#f2c94c","#ffffff","#d36ad6","#e04f6a","#7aa7e0"];for(let n=0;n<7;n++){const s=(t()-.5)*1.6,r=(t()-.5)*1.2;$t(i,en(.01,.01,.35,3),"#4f7a33",s,.17,r),$t(i,new sn(.06,0),e[Math.floor(t()*e.length)],s,.36,r)}return i},picnic(){const i=new Bt;$t(i,Pe(1.8,.06,.8),"#a07a50",0,.75,0);for(const t of[-.65,.65])$t(i,Pe(1.8,.05,.28),"#a07a50",0,.45,t);for(const t of[-.7,.7])$t(i,Pe(.08,.75,1.5),"#8a6a45",t,.37,0,0);return i},parasol(){const i=new Bt;return $t(i,en(.03,.03,2.4),"#e8e4da",0,1.2,0),$t(i,new ss(1.4,.5,8,1,!0),"#a3291f",0,2.3,0),i},cottage(){const i=new Bt;$t(i,Pe(6,4.2,5),"#efe8da",0,2.1,0);const t=new me(.01,3.9,6.6,4,1);t.rotateY(Math.PI/4),t.rotateZ(Math.PI/2),t.scale(1,.55,1),$t(i,t,"#4d525b",0,5,0),$t(i,Pe(.7,1.4,.7),"#8c4234",2,5.6,0),$t(i,Pe(1,1.9,.08),"#1f4d3a",0,.95,2.52);for(const e of[-1.8,1.8])$t(i,Pe(.9,.9,.08),"#2a3640",e,2.6,2.52),$t(i,Pe(.9,.9,.08),"#2a3640",e,1.1,2.52);return i},heron(){const i=new Bt;$t(i,new wn(.22,6,4),"#9aa3ab",0,.85,0).scale.set(1,.8,1.6),$t(i,en(.04,.05,.55,5),"#c8ced2",0,1.2,.18,-.3),$t(i,new wn(.07,6,4),"#e8eaec",0,1.47,.27),$t(i,new ss(.025,.22,4),"#d8b34a",0,1.47,.42,Math.PI/2);for(const t of[-.06,.06])$t(i,en(.012,.012,.7,3),"#c9a24a",t,.35,0);return i}};class mv{constructor(t,e,n,s,r,o){k(this,"group",new Bt);k(this,"placements",new Map);k(this,"anglerSpots",[]);k(this,"gardens",[]);this.route=t,this.ww=e,this.terrain=n;const a=os(4242),l=t.length,c=(p,M=6)=>o.some(x=>Math.abs(x.s-p)<x.w/2+M),h=(p,M)=>e.gates.some(x=>Math.abs(x.s-p)<M),d=p=>e.bodies[e.bodyIndexAt(p)].kind==="chamber",f=p=>e.windingHoles.some(M=>Math.abs(M-p)<28),u=p=>{const[M,x]=t.point(p,30*wr),[v,b]=t.point(p,30*le);return Math.max(n.urbanAt(M,x),n.urbanAt(v,b))};let g=60;for(let p=20;p<l-20;p+=2){if(c(p,8)||h(p,10))continue;const M=u(p);M>.3&&Math.round(p)%32===0&&this.add("lamp",p,e.halfWidthAt(p)+3.25,"towpath",-Math.PI/2),p>g&&!r.zoneAt(p)&&!n.cliffSide(p,le)&&(g=p+140+a()*160,this.add("bench",p,e.halfWidthAt(p)+3.6,"towpath",0),M>.2&&this.add("bin",p+1.4,e.halfWidthAt(p)+3.7,"towpath",0)),M>.35&&Math.round(p)%380===0&&this.add("lifebuoy",p,e.halfWidthAt(p)+3.3,"towpath",0)}for(const p of e.groups){const M=p.gates[0].s,x=p.gates.at(-1).s;this.add("lifebuoy",M-6,e.halfWidthAt(M-6)+3.3,"towpath",0),this.add("lifebuoy",x+6,e.halfWidthAt(x+6)+3.3,"towpath",0);for(const b of[M+4,x-4,(M+x)/2])this.add("tub",b,e.halfWidthAt(b)+2.2,"towpath",0),this.add("tub",b+1.2,e.halfWidthAt(b)+2.2,"offside",0);const v=(M+x)/2;if(!p.staircase&&u(v)<.45){const b=e.halfWidthAt(v)+10,[T,A]=t.point(v,b*le);s.isFree(T,A)&&this.add("cottage",v,b,"land",0)}}let _=-1,m="none";for(let p=10;p<l-10;p+=2){if(p>_){_=p+60;const b=u(p);m=b<.3?a()<.85?"hedge":"none":b>.4?a()<.8?"fence":"none":a()<.5?"hedge":"fence"}if(m==="none"||c(p,4)||d(p)||h(p,6)||f(p))continue;const M=e.halfWidthAt(p)+2.4,[x,v]=t.point(p,M*wr);s.isFree(x,v)&&(m==="fence"?this.add("fence",p,M,"offside",0):Math.round(p)%4===0&&this.add("hedge",p,M,"offside",0))}for(let p=10;p<l-10;p+=3){if(c(p,6)||d(p)||h(p,15)||f(p))continue;const M=u(p);a()<(M<.3?.45:.12)&&this.add("reeds",p,e.halfWidthAt(p)-.25,"water",a()*6),M<.35&&a()<.3&&!n.cliffSide(p,le)&&this.add("flowers",p,e.halfWidthAt(p)+4.6+a()*1.5,"towpath",a()*6),M<.2&&a()<.008&&this.add("heron",p,e.halfWidthAt(p)+.9,"offside",Math.PI/2*wr+(a()-.5))}for(const p of r.zones){if(p.kind!=="stop"||!/pub|bar/.test(p.poi.kind))continue;const M=(p.s0+p.s1)/2;for(const[x,v,b]of[[-5,6,"picnic"],[0,7.5,"picnic"],[5,6,"picnic"],[-2.5,7,"parasol"],[3,6.5,"parasol"]])if(this.add(b,M+x,e.halfWidthAt(M)+v,"land",0),b==="picnic"){const[T,A]=t.point(M+x,(e.halfWidthAt(M)+v)*le);this.gardens.push({x:T,z:A,y:n.bankTop(M),ry:Math.atan2(t.frame(M).tx,t.frame(M).tz)})}}for(let p=150;p<l-80;p+=70+a()*90)u(p)>.55||c(p,15)||h(p,45)||r.zoneAt(p)||d(p)||r.boats.some(M=>Math.abs(M.s-p)<M.halfL+8)||this.anglerSpots.push({s:p});this.build()}add(t,e,n,s,r){if(e<1||e>this.route.length-1)return;const o=s==="offside"||s==="water"?wr:le,a=this.route.frame(e),l=a.x+a.nx*n*o,c=a.z+a.nz*n*o;let h;s==="water"?h=this.ww.levelAt(e):s==="land"?h=this.terrain.heightAt(l,c):h=n<this.ww.halfWidthAt(e)+3.4?this.terrain.bankTop(e):this.terrain.landHeight(l,c,e,n*o);const d=Math.atan2(-a.nx*o,-a.nz*o),f=new ne().compose(new D(l,h,c),new bn().setFromAxisAngle(new D(0,1,0),d+r),new D(1,1,1));this.placements.has(t)||this.placements.set(t,[]),this.placements.get(t).push(f)}build(){for(const[t,e]of this.placements){const n=ds(pv[t]()),s=new nn(n,_n(),e.length);e.forEach((r,o)=>s.setMatrixAt(o,r)),s.castShadow=t!=="flowers"&&t!=="reeds",s.receiveShadow=!0,s.name=`decor:${t}`,this.group.add(s)}}get counts(){return Object.fromEntries([...this.placements].map(([t,e])=>[t,e.length]))}}const Bi=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400","#34495e","#16a085","#7f8c8d","#e84393"],Po=380,mn=new ne,$n=new bn,ws=new D,Es=new D(1,1,1),Er=new D(0,1,0);function zc(i){const t=Gs("#ffffff"),e=new Bt,n=new Bt;for(const r of[...t.group.children]){const o=r;(o.isMesh&&o.material.color.getHex()===16777215||r===t.armL||r===t.armR?e:n).add(r.clone())}if(i)for(const r of[e,n])r.position.y=-.42,r.children.forEach(o=>o.position.y>.5||o.scale.set(1,.5,1));const s=r=>{const o=new Bt;return o.add(r),ds(o)};return{coat:s(e),rest:s(n)}}function gv(){const i=new Bt,t=n=>new ee({color:n});for(const n of[-.55,.55]){const s=new it(new us(.33,.03,5,12),t("#1b1b1b"));s.position.set(0,.33,n),s.rotation.y=Math.PI/2,i.add(s)}const e=new it(new Jt(.05,.05,1.1),t("#2e86c1"));return e.position.set(0,.6,0),i.add(e),ds(i)}function _v(){const i=new Bt,t=r=>new ee({color:r}),e=new it(new Jt(.22,.22,.55),t("#8a5a2b"));e.position.y=.35;const n=new it(new Jt(.18,.18,.2),t("#7a4a22"));n.position.set(0,.5,.33),i.add(e,n);for(const[r,o]of[[-.08,-.2],[.08,-.2],[-.08,.2],[.08,.2]]){const a=new it(new Jt(.05,.25,.05),t("#6a3a1a"));a.position.set(r,.12,o),i.add(a)}const s=new it(new Jt(.04,.04,.22),t("#8a5a2b"));return s.position.set(0,.48,-.36),s.rotation.x=.6,i.add(s),ds(i)}function Bc(i){const t=new Bt,e=a=>new ee({color:a}),n=i?1.9:1,s=new it(new wn(.16*n,6,4),e(i?"#f4f4f0":"#8a6a4a"));if(s.scale.set(.8,.55,1.3),s.position.y=.05*n,t.add(s),i){const a=new it(new me(.035,.05,.5,5),e("#f4f4f0"));a.position.set(0,.32,.2),a.rotation.x=.25,t.add(a)}const r=new it(new wn(.07*(i?1.1:1),6,4),e(i?"#f4f4f0":"#2f6b3a"));r.position.set(0,i?.58:.17,i?.28:.16);const o=new it(new ss(.03,.1,4),e(i?"#e07a2a":"#e2b23a"));return o.position.set(0,r.position.y-.01,r.position.z+.09),o.rotation.x=Math.PI/2,t.add(r,o),ds(t)}class vv{constructor(t,e,n,s,r,o){k(this,"group",new Bt);k(this,"events",[]);k(this,"movers",[]);k(this,"birds",[]);k(this,"anglers",[]);k(this,"walkCoat");k(this,"walkRest");k(this,"bikes");k(this,"dogs");k(this,"ducks");k(this,"swans");k(this,"time",0);k(this,"rand",os(31));this.route=t,this.ww=e,this.terrain=n,this.boat=s;const a=this.rand,l=zc(!1),c=22;this.walkCoat=new nn(l.coat,_n(),c),this.walkRest=new nn(l.rest,_n(),c),this.bikes=new nn(gv(),_n(),c),this.dogs=new nn(_v(),_n(),c);for(let u=0;u<c;u++){const g=u<14?"walk":u<18?"jog":"cycle",_={s:s.s+(a()-.5)*Po*2,d:0,dir:a()<.5?1:-1,kind:g,phase:a()*10,speed:g==="walk"?1.1+a()*.4:g==="jog"?2.6+a()*.6:4+a()*1.5,dog:g==="walk"&&a()<.45};_.d=this.laneFor(_),this.movers.push(_),this.walkCoat.setColorAt(u,new Ot(Bi[Math.floor(a()*Bi.length)]))}for(const u of[this.walkCoat,this.walkRest,this.bikes,this.dogs])u.castShadow=!0,u.instanceMatrix.setUsage(el),u.frustumCulled=!1,this.group.add(u);for(const u of r){const g=Gs(Bi[Math.floor(a()*Bi.length)],"#3a4a2a"),_=t.frame(u.s),m=(e.halfWidthAt(u.s)+.9)*le,p=new Bt;p.add(g.group),g.group.position.y=-.38,g.group.scale.set(1,.85,1);const M=new it(new Jt(.5,.4,.35),new ee({color:"#3d5a3d"}));M.position.set(0,.2,-.1),p.add(M);const x=new it(new me(.01,.02,4.2,4),new ee({color:"#2b2b2b"}));x.position.set(.25,1.3,1.6),x.rotation.x=1.05,p.add(x),p.position.set(_.x+_.nx*m,n.bankTop(u.s),_.z+_.nz*m),p.rotation.y=Math.atan2(-_.nx*le,-_.nz*le),this.group.add(p),this.anglers.push({s:u.s,person:g,angryUntil:0,lastGrumble:-99})}const h=zc(!0),d=[];for(const u of o)for(const g of[-1,1])if(!(a()<.35))for(const _ of[-.5,.5]){if(a()<.4)continue;const m=new D(_,0,g*.65).applyAxisAngle(Er,u.ry);$n.setFromAxisAngle(Er,u.ry+(g>0?Math.PI:0)),d.push(new ne().compose(ws.set(u.x+m.x,u.y+.02,u.z+m.z).clone(),$n.clone(),Es))}if(d.length){const u=new nn(h.coat,_n(),d.length),g=new nn(h.rest,_n(),d.length);d.forEach((_,m)=>{u.setMatrixAt(m,_),g.setMatrixAt(m,_),u.setColorAt(m,new Ot(Bi[Math.floor(a()*Bi.length)]))}),this.group.add(u,g)}let f=0;for(let u=120;u<t.length-60;u+=160+a()*260){if(e.bodies[e.bodyIndexAt(u)].kind!=="pound")continue;const g=a()<.22,_=g?2:2+Math.floor(a()*4);f++;for(let m=0;m<_;m++)this.birds.push({s:u+(a()-.5)*8,d:(a()-.5)*5,vs:0,vd:0,swan:g,heading:a()*6,flock:f,lastQuack:-99})}this.ducks=new nn(Bc(!1),_n(),Math.max(1,this.birds.filter(u=>!u.swan).length)),this.swans=new nn(Bc(!0),_n(),Math.max(1,this.birds.filter(u=>u.swan).length));for(const u of[this.ducks,this.swans])u.instanceMatrix.setUsage(el),u.frustumCulled=!1,this.group.add(u)}laneFor(t){return this.ww.halfWidthAt(xe(t.s,0,this.route.length))+1.6+(t.dir>0?-.35:.35)}update(t){this.time+=t;const e=this.boat,n=this.route.length,s=e.speed*2.237>3;let r=0,o=0;this.movers.forEach((c,h)=>{c.s+=c.dir*c.speed*t,c.phase+=t*c.speed*3.2,(Math.abs(c.s-e.s)>Po||c.s<5||c.s>n-5)&&(c.s=xe(e.s+(this.rand()<.5?-1:1)*(Po-20-this.rand()*60),5,n-5),c.dir=c.s>e.s?-1:1,this.rand()<.5&&(c.dir*=-1)),c.d+=(this.laneFor(c)-c.d)*Math.min(1,t*2);const d=this.route.frame(c.s),f=d.x+d.nx*c.d*le,u=d.z+d.nz*c.d*le,g=this.terrain.bankTop(c.s)+(c.kind==="cycle"?.35:Math.abs(Math.sin(c.phase))*.05),_=Math.atan2(d.tx,d.tz)+(c.dir>0?0:Math.PI);if($n.setFromAxisAngle(Er,_),mn.compose(ws.set(f,g,u),$n,Es),this.walkCoat.setMatrixAt(h,mn),this.walkRest.setMatrixAt(h,mn),c.kind==="cycle"&&(mn.compose(ws.set(f,g-.35,u),$n,Es),this.bikes.setMatrixAt(r++,mn)),c.dog){const m=Math.sin(c.phase*.3)*.6+1.2,p=f-Math.sin(_)*m+d.nx*.5,M=u-Math.cos(_)*m+d.nz*.5;mn.compose(ws.set(p,this.terrain.bankTop(c.s)+Math.abs(Math.sin(c.phase*1.6))*.04,M),$n,Es),this.dogs.setMatrixAt(o++,mn)}}),this.bikes.count=r,this.dogs.count=o;for(const c of[this.walkCoat,this.walkRest,this.bikes,this.dogs])c.instanceMatrix.needsUpdate=!0;for(const c of this.anglers)s&&Math.abs(c.s-e.s)<14&&this.time-c.lastGrumble>20&&(c.lastGrumble=this.time,c.angryUntil=this.time+4,this.events.push({kind:"angler"})),Wr(c.person,this.time<c.angryUntil?"shake":"rest",this.time);let a=0,l=0;for(const c of this.birds){const h=c.s-e.s,d=c.d-e.d,f=Math.hypot(h,d);f<14?(c.vd+=Math.sign(d||1)*.6*t*(14-f),c.vs+=Math.sign(h||1)*.25*t*(14-f),f<5&&this.time-c.lastQuack>6&&!c.swan&&(c.lastQuack=this.time,this.events.push({kind:"quack"}))):(c.vs+=Math.sin(this.time*.3+c.flock*7+c.heading)*.05*t,c.vd+=Math.cos(this.time*.23+c.flock*3)*.04*t);const u=c.swan?.6:.9;c.vs=xe(c.vs*(1-t*.4),-u,u),c.vd=xe(c.vd*(1-t*.4),-u,u),c.s=xe(c.s+c.vs*t,5,n-5);const g=this.ww.halfWidthAt(c.s)-.4;c.d=xe(c.d+c.vd*t,-g,g),Math.abs(c.d)>=g&&(c.vd*=-.3);const _=this.route.frame(c.s),m=Math.atan2(_.tx*c.vs+_.nx*c.vd,_.tz*c.vs+_.nz*c.vd);Math.hypot(c.vs,c.vd)>.05&&(c.heading+=Math.atan2(Math.sin(m-c.heading),Math.cos(m-c.heading))*Math.min(1,t*3)),$n.setFromAxisAngle(Er,c.heading),mn.compose(ws.set(_.x+_.nx*c.d,this.ww.levelAt(c.s)+Math.sin(this.time*2+c.s)*.01,_.z+_.nz*c.d),$n,Es),c.swan?this.swans.setMatrixAt(l++,mn):this.ducks.setMatrixAt(a++,mn)}this.ducks.count=a,this.swans.count=l,this.ducks.instanceMatrix.needsUpdate=this.swans.instanceMatrix.needsUpdate=!0}}const xv=5,rn=(i,t={})=>new ee({color:i,roughness:.6,...t});function Mv(){const i=new Bt,t=rn("#b8bcc2",{metalness:.8,roughness:.3}),e=(s,r,o,a,l,c)=>{const h=new it(new Jt(s,r,o),t);h.position.set(a,l,c),i.add(h)};for(const s of[.45,.95])e(.55,.025,.025,0,s,.45),e(.55,.025,.025,0,s,-.45),e(.025,.025,.9,.27,s,0),e(.025,.025,.9,-.27,s,0);for(const s of[-.27,.27])for(const r of[-.45,.45])e(.025,.5,.025,s,.7,r);for(let s=-.35;s<=.36;s+=.14)e(.55,.012,.012,0,.45,s);const n=new it(new Jt(.6,.05,.05),rn("#c0392b"));n.position.set(0,1.05,-.52),i.add(n);for(const s of[-.25,.25])for(const r of[-.4,.4]){const o=new it(new me(.06,.06,.04,8),rn("#2b2b2b"));o.rotation.z=Math.PI/2,o.position.set(s,.1,r),i.add(o)}return i}function yv(){const i=new Bt;for(const n of[-.5,.5]){const s=new it(new us(.33,.03,5,14),rn("#1b1b1b"));s.position.set(0,.33,n),s.rotation.y=Math.PI/2,i.add(s)}const t=new it(new Jt(.04,.04,1),rn("#27ae60"));t.position.y=.55,i.add(t);const e=new it(new Jt(.5,.04,.04),rn("#1b1b1b"));return e.position.set(0,.85,.45),i.add(e),i}function bv(){const i=new Bt,t=new it(new ss(.18,.6,8),rn("#ff6a13"));t.position.y=.3;const e=new it(new me(.115,.13,.08,8),rn("#f4f4f4"));return e.position.y=.33,i.add(t,e),i}function Sv(i){const t=new Bt,e=new it(new me(.06,.1,i,5),rn("#5a4632"));e.rotation.z=Math.PI/2,t.add(e);const n=new it(new me(.02,.04,i*.4,4),rn("#6a5440"));n.position.set(i*.15,.05,.12),n.rotation.set(0,.6,Math.PI/2),t.add(n);const s=new it(new sn(.3,0),rn("#5c7a3a"));return s.position.set(-i*.4,.05,0),s.scale.y=.4,t.add(s),t}class wv{constructor(t,e,n){k(this,"group",new Bt);k(this,"s",0);k(this,"active",!1);k(this,"spotted",!1);k(this,"progress",0);k(this,"clearing",!1);k(this,"obstacle",{x:0,z:0,psi:0,halfL:1.2,halfB:0});k(this,"pieces",[]);this.route=t,this.ww=e,this.terrain=n}place(t){this.reset(),this.s=t,this.active=!0,this.spotted=!1;const e=this.route.frame(t),n=this.ww.halfWidthAt(t),s=this.ww.levelAt(t),r=Math.atan2(e.tx,e.tz);Object.assign(this.obstacle,{x:e.x,z:e.z,psi:r,halfB:n});const o=(a,l,c,h,d,f,u,g)=>{u.position.set(e.x+e.nx*a+e.tx*l,s+c,e.z+e.nz*a+e.tz*l),u.rotation.set(d,r+h,f),this.group.add(u);const[_,m]=this.route.point(t+g*.6,(n+1.5+Math.abs(g)*.25)*le);this.pieces.push({obj:u,from:u.position.clone(),fromRot:u.rotation.clone(),to:new D(_,this.terrain.bankTop(t)+.05,m)})};o(-n*.45,0,-.55,.4,.5,.3,Mv(),-2),o(n*.25,.4,-.35,1.2,1.2,.2,yv(),0),o(n*.65,-.5,-.1,0,.9,0,bv(),2);for(let a=0;a<6;a++){const l=-n+.6+a/5*(n*2-1.2);o(l,a%2?.4:-.4,.02,.3+a*.5,0,0,Sv(1.6+a%3*.6),a-3)}for(let a=0;a<4;a++){const l=new it(new sn(.2,0),rn(a%2?"#f2f2f2":"#3a3a3a"));l.scale.y=.6,o(-n+1+a*(n*.6),a%2?.7:-.6,.05,a,0,0,l,a-2)}}reset(){for(const t of this.pieces)this.group.remove(t.obj);this.pieces=[],this.active=!1,this.clearing=!1,this.progress=0}startClearing(){return!this.active||this.clearing?!1:(this.clearing=!0,!0)}update(t,e){return this.active?this.clearing?(this.progress=Math.min(1,this.progress+t/xv),this.pieces.forEach((n,s)=>{const r=s/this.pieces.length*.85,o=Math.min(1,Math.max(0,(this.progress-r)/.15));o<=0||(n.obj.position.lerpVectors(n.from,n.to,o),n.obj.position.y+=Math.sin(o*Math.PI)*1.4,n.obj.rotation.set(n.fromRot.x*(1-o),n.fromRot.y,n.fromRot.z*(1-o)+(o>.99?s%3*.4:0)))}),this.progress>=1?(this.active=!1,this.clearing=!1,!0):!1):(this.pieces.forEach((n,s)=>n.obj.position.y=n.from.y+Math.sin(e*1.3+s)*.03),!1):!1}}const Ev=.75,Tv=1.6,Hc=1.4;class Av{constructor(t,e,n,s){k(this,"group",new Bt);k(this,"staffed",new Set);k(this,"active",null);k(this,"helpers",new Map);k(this,"actKey","");k(this,"actAt",0);k(this,"driveTarget",null);k(this,"time",0);k(this,"busyGate",null);this.route=t,this.ww=e,this.terrain=n,this.boat=s,this.roster()}roster(){for(const t of this.helpers.values())for(const e of t)this.group.remove(e.person.group);this.helpers.clear(),this.staffed.clear();for(const t of this.ww.groups){if(!(t.staircase||Math.random()<.4))continue;this.staffed.add(t);const e=[];for(const n of[-3,3]){const s=Gs("#1d5fa8","#1d3557");this.group.add(s.group),e.push({person:s,s:(t.gates[0].s+t.gates.at(-1).s)/2+n,offset:n})}this.helpers.set(t,e)}}isStaffed(t){return!!t&&this.staffed.has(t)}start(t){this.active=t,this.driveTarget=null,this.actKey=""}stop(){this.active=null,this.driveTarget=null,this.busyGate=null}update(t,e,n){if(this.time+=t,this.animateHelpers(t),!this.active)return"idle";if(!e||e.group!==this.active)return this.stop(),"done";const s=this.boat,r=n?1:-1;if(e.action==="drive"){if(this.driveTarget===null){const o=this.ww.gates.filter(a=>a.group===this.active&&(a.s-s.s)*r>-.5).sort((a,l)=>(a.s-l.s)*r)[0];if(!o)this.driveTarget=s.s+r*30;else{const a=this.ww.bodies[n?o.above:o.below];this.driveTarget=a.kind==="chamber"?(a.s0+a.s1)/2:o.s+r*(En/2+14)}}this.creepTo(this.driveTarget,t)}else if(this.driveTarget=null,this.creepTo(null,t),e.gate&&e.action!=="wait"){this.busyGate=e.gate;const o=`${e.action}:${e.gate.label}`;if(o!==this.actKey)this.actKey=o,this.actAt=this.time+Tv+this.walkTime(e.gate);else if(this.time>=this.actAt){const a=e.gate;e.action==="paddlesUp"?a.wantPaddle=!0:e.action==="paddlesDown"?a.wantPaddle=!1:e.action==="close"?a.wantOpen=!1:e.action==="open"&&this.ww.levelsMatch(a)&&(a.wantOpen=!0),this.actKey=""}}else e.gate&&(this.busyGate=e.gate);return"running"}walkTime(t){const e=this.helpers.get(this.active);return e?Math.min(...e.map(n=>Math.abs(n.s-t.s)))/Hc:0}creepTo(t,e){const n=this.boat,s=this.route.frame(n.s);let r=0;if(t!==null){const l=t-n.s;r=Math.sign(l)*Math.min(Ev,Math.abs(l)*.5),Math.abs(l)<.05&&(r=0)}n.s+=r*e,n.d+=(0-n.d)*Math.min(1,e*.8);const o=this.route.frame(n.s);n.x=o.x+o.nx*n.d,n.z=o.z+o.nz*n.d;const a=Math.atan2(s.tx,s.tz)+(Math.cos(n.psi-Math.atan2(s.tx,s.tz))>=0?0:Math.PI);n.psi+=Math.atan2(Math.sin(a-n.psi),Math.cos(a-n.psi))*Math.min(1,e*1.5),n.u=Math.abs(r),n.v=n.r=0,n.notch=0,n.thrust=0}animateHelpers(t){var e;for(const[n,s]of this.helpers){const r=this.active===n&&((e=this.busyGate)==null?void 0:e.group)===n;for(const o of s){const a=(n.gates[0].s+n.gates.at(-1).s)/2+o.offset,l=r?this.busyGate.s+o.offset*.9:a,c=Math.sign(l-o.s)*Math.min(Math.abs(l-o.s),Hc*t);o.s+=c;const h=this.ww.halfWidthAt(o.s),d=o.offset<0?le:-le,[f,u]=this.route.point(o.s,(h+1.1)*d);o.person.group.position.set(f,this.terrain.bankTop(o.s)+(Math.abs(c)>.001?Math.abs(Math.sin(this.time*6))*.05:0),u);const g=this.route.frame(o.s);o.person.group.rotation.y=Math.abs(c)>.001?Math.atan2(g.tx*Math.sign(c),g.tz*Math.sign(c)):Math.atan2(-g.nx*d,-g.nz*d);const _=r&&Math.abs(o.s-l)<.5,m=this.busyGate,p=_&&!!m&&m.paddle>.02&&m.paddle<.98;Wr(o.person,p?"wind":_&&m&&m.open>.02&&m.open<.98?"push":"rest",this.time)}}}}const Gc=new Ot("#b0664d"),Vc=new Ot("#c9a58a"),Lo=new Ot("#d0b896");class Rv{constructor(){k(this,"pos",[]);k(this,"col",[])}tri(t,e,n,s){for(const r of[t,e,n])this.pos.push(r.x,r.y,r.z),this.col.push(s.r,s.g,s.b)}quad(t,e,n,s,r){this.tri(t,e,n,r),this.tri(t,n,s,r)}mesh(){const t=new de;t.setAttribute("position",new Zt(this.pos,3)),t.setAttribute("color",new Zt(this.col,3)),t.computeVertexNormals();const e=new it(t,new ee({vertexColors:!0,roughness:.9,flatShading:!0,side:ze}));return e.castShadow=e.receiveShadow=!0,e}}class Cv{constructor(t,e,n,s){k(this,"group",new Bt);this.route=t,this.ww=e,this.terrain=n;const r=new Rv;for(const o of s.walls??[]){const a=[];for(let l=0;l<o.p.length;l+=2)a.push([o.p[l],o.p[l+1]]);o.kind==="gate"?this.gate(r,a):o.closed?this.extrude(r,a,2.4,Gc,Vc):this.extrude(r,Pv(a,1.3),2.4,Gc,Vc)}this.group.add(r.mesh()),s.bridgeOfSighs&&this.group.add(this.bridgeOfSighs(s.bridgeOfSighs))}ground(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s),r=Math.sign(n.d||1)*Math.max(n.dist,s+7);return this.terrain.landHeight(t,e,n.s,r)}extrude(t,e,n,s,r){const o=e.length;if(o<3)return;const a=e.map(([h,d])=>this.ground(h,d)+n),l=(h,d)=>new D(e[h][0],d,e[h][1]);for(let h=0;h<o;h++){const d=(h+1)%o;t.quad(l(h,a[h]-n-7),l(d,a[d]-n-7),l(d,a[d]),l(h,a[h]),s)}const c=yn.triangulateShape(e.map(([h,d])=>new at(h,d)),[]);for(const[h,d,f]of c)t.tri(l(h,a[h]),l(d,a[d]),l(f,a[f]),r);for(let h=0;h<o;h++){const d=(h+1)%o,f=Math.hypot(e[d][0]-e[h][0],e[d][1]-e[h][1]);for(let u=.6;u<f-.3;u+=2.2){const g=u/f,_=e[h][0]+(e[d][0]-e[h][0])*g,m=e[h][1]+(e[d][1]-e[h][1])*g,p=a[h]+(a[d]-a[h])*g;Tr(t,_,p+.45,m,.9,.9,.5,Math.atan2(e[d][0]-e[h][0],e[d][1]-e[h][1]),s)}}}gate(t,e){const n=e.reduce((T,A)=>T+A[0],0)/e.length,s=e.reduce((T,A)=>T+A[1],0)/e.length;let r=0,o=0,a=0;for(const[T,A]of e)r+=(T-n)**2,o+=(A-s)**2,a+=(T-n)*(A-s);const l=.5*Math.atan2(2*a,r-o),c=Math.cos(l),h=Math.sin(l);let d=1/0,f=-1/0,u=1/0,g=-1/0;for(const[T,A]of e){const L=(T-n)*c+(A-s)*h,w=-(T-n)*h+(A-s)*c;d=Math.min(d,L),f=Math.max(f,L),u=Math.min(u,w),g=Math.max(g,w)}const _=this.ground(n,s),m=f-d,p=Math.max(4,g-u),M=Math.atan2(c,h),x=T=>[n+c*T,s+h*T],[v,b]=x((d+f)/2);Tr(t,v,_+7.4,b,p,3.2,m,M,Lo);for(const T of[d+1.8,f-1.8]){const[A,L]=x(T);Tr(t,A,_+2.9,L,p,5.8,3.6,M,Lo,6)}Tr(t,v,_+9.4,b,p*.15,.9,m,M,Lo)}bridgeOfSighs(t){const e=this.route,n=this.ww,s=e.frame(t.s),r=n.levelAt(t.s),o=n.halfWidthAt(t.s),a=o+7.5,l=Math.max(...[-1,1].map(M=>{const[x,v]=e.point(t.s,a*M);return this.terrain.landHeight(x,v,t.s,a*M)}))+.1,c=a+1,h=o+3.6,d=l-.75,f=r+1.2,u=new bi;u.moveTo(-c,r-2),u.lineTo(-h,r-2),u.lineTo(-h,f);for(let M=1;M<20;M++){const x=Math.PI-Math.PI*M/20;u.lineTo(Math.cos(x)*h,f+Math.sin(x)*(d-f))}u.lineTo(h,f),u.lineTo(h,r-2),u.lineTo(c,r-2),u.lineTo(c,l),u.lineTo(-c,l),u.closePath();const g=2,_=new it(new rs(u,{depth:g,bevelEnabled:!1,curveSegments:12}).translate(0,0,-g/2),new ee({color:"#a8654f",roughness:.9,flatShading:!0}));_.castShadow=_.receiveShadow=!0;const m=new Bt;m.add(_);const p=new ee({color:"#1f2326",metalness:.5,roughness:.5});for(const M of[-1,1]){const x=new it(new Jt(c*2,.06,.06),p);x.position.set(0,l+1.7,M*(g/2-.08)),m.add(x);const v=new nn(new Jt(.035,1.7,.035),p,Math.floor(c*2/.22));for(let b=0;b<v.count;b++)v.setMatrixAt(b,new ne().makeTranslation(-c+.11+b*.22,l+.85,M*(g/2-.08)));m.add(v)}return m.position.set(s.x,0,s.z),m.rotation.y=Math.atan2(-s.nz,s.nx),m.name="bridge-of-sighs",m}}function Pv(i,t){const e=[],n=[];for(let s=0;s<i.length;s++){const r=i[Math.max(0,s-1)],o=i[Math.min(i.length-1,s+1)];let a=o[0]-r[0],l=o[1]-r[1];const c=Math.hypot(a,l)||1;a/=c,l/=c,e.push([i[s][0]-l*t,i[s][1]+a*t]),n.push([i[s][0]+l*t,i[s][1]-a*t])}return[...e,...n.reverse()]}function Tr(i,t,e,n,s,r,o,a,l,c=0){const h=Math.sin(a),d=Math.cos(a),f=(x,v,b)=>new D(t+x*d+b*h,e+v,n-x*h+b*d),u=s/2,g=o/2,_=-r/2-c,m=r/2,p=[f(-u,_,-g),f(u,_,-g),f(u,_,g),f(-u,_,g),f(-u,m,-g),f(u,m,-g),f(u,m,g),f(-u,m,g)],M=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7]];for(const[x,v,b,T]of M)i.quad(p[x],p[v],p[b],p[T],l)}const Ts=[1,2,5,10,30];function Lv(i,t){return{pub:`You moor up and pop into ${i} for a pint of something local. An hour slips happily by.`,bar:`A drink at ${i}, watching the boats go by. An hour slips happily by.`,cafe:`Tea and a slab of cake at ${i}, eaten on the roof. An hour slips happily by.`,ice_cream:`An ice cream from ${i}, eaten on the roof. Bliss.`,restaurant:`A proper meal at ${i}. Nobody has to cook in the galley tonight. An hour slips happily by.`,hotel:`You stretch your legs and have a nose round ${i}. An hour slips happily by.`}[t]??`You stop at ${i}. An hour slips happily by.`}function Dv(i,t){return{Northgate:"Above you: the Northgate, one of the medieval gateways through Chester’s city walls. The canal runs along the old moat.","Water Tower":"Off to the side: the Water Tower, built in the 1320s to guard the old river port when the Dee still reached the walls.","Lead Shot Tower":"That tall brick tower is the Lead Shot Tower (1799), where molten lead was dropped from the top to make shot.","Bridge of Sighs":"Overhead: the Bridge of Sighs (1793). Condemned prisoners from the Northgate gaol were led across it to the chapel for their last rites.","King Charles Tower":"Up on the walls: King Charles’ Tower. Legend has it Charles I watched his army lose the Battle of Rowton Moor from here in 1645.","Morgan's Mount":"Morgan’s Mount, a little gun platform on the walls from the Civil War siege of Chester.","Pemberton's Parlour":"Pemberton’s Parlour, a tower on the walls named after an 18th-century ropemaker who watched his men at work from it."}[i]??`Look out: ${i}${t==="tower"?", part of the old city walls":""}.`}const Wc=['% rocks in your wash. "Tickover past moored boats, please!"',"A mug of tea slides off the roof of %. Slow down past moored boats!","The owner of % gives you a Look. Ease off to tickover when passing."],Iv=1/60,Do=2.23694,Fh=document.getElementById("loading"),kh=document.getElementById("loading-text"),Uv=Fh.querySelector(".bar div");let Nv=0;async function jn(i){kh.textContent=i,Uv.style.width=`${Math.min(100,++Nv*11)}%`,await new Promise(t=>requestAnimationFrame(()=>setTimeout(t,0)))}async function Ov(){await jn("Fetching the map…");const i=await l_("./data/chester.json");await document.fonts.ready;const t=document.getElementById("scene"),e=new ig({canvas:t,antialias:!0});e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setSize(innerWidth,innerHeight),e.toneMapping=$c,e.toneMappingExposure=.62,e.shadowMap.enabled=!0,e.shadowMap.type=qc;const n=new wh,s=new je(55,innerWidth/innerHeight,.4,4500);await jn("Surveying the canal…");const r=new c_(i.centreline),o=new __(i.locks,i.bridges,r.length,[4700,i.meta.towerWharfS-40]),a=[],l=[];for(let $=0;$<i.centreline.length;$+=2)a.push(i.centreline[$]),l.push(i.centreline[$+1]);const c=520,h={x0:Math.min(...a)-c,x1:Math.max(...a)+c,z0:Math.min(...l)-c,z1:Math.max(...l)+c},d=new y_(r,o,h);d.cuttings=i.cuttings??[],d.setRivers(i.rivers),d.urbanAt=P_(i.buildings,h);const f=i.parks.map($=>{let Z=1/0,dt=-1/0,bt=1/0,kt=-1/0;for(let I=0;I<$.p.length;I+=2)Z=Math.min(Z,$.p[I]),dt=Math.max(dt,$.p[I]),bt=Math.min(bt,$.p[I+1]),kt=Math.max(kt,$.p[I+1]);return{ring:$.p,x0:Z,x1:dt,z0:bt,z1:kt}});d.parkAt=($,Z)=>f.some(dt=>$>=dt.x0&&$<=dt.x1&&Z>=dt.z0&&Z<=dt.z1&&Wa($,Z,dt.ring)),await jn("Digging the cut…"),n.add(d.buildStrip()),await jn("Shaping the land…"),n.add(d.buildFar()),await jn("Filling it with water…");const u=new E_(r,o);u.addRivers(i.rivers,d.riverLevel);for(const $ of i.water){let Z=0,dt=0;const bt=$.p.length/2;for(let kt=0;kt<$.p.length;kt+=2)Z+=$.p[kt]/bt,dt+=$.p[kt+1]/bt;r.project(Z,dt).dist<40||u.addPond($.p,d.heightAt(Z,dt)-.25)}n.add(u.group);const g=new T_(r,o,i.bridges,d);n.add(g.group),n.add(new Cv(r,o,d,i).group);const _=new N_(r,o,d);n.add(_.group);const m=i.meta.towerWharfS+70,p=new rv(r,o,d,i.bridges,i.meta.towerWharfS,m,i.pois??[]);n.add(p.group);const M=new L_(i,r,o,d,g);await M.build(jn),n.add(M.group),await jn("Lighting the stove…");const x=new F_(n,e),v=Xa();v.group.rotation.order="YXZ",n.add(v.group);const b=new Y_(r,o);b.placeAt(m),b.obstacles=[...p.boats];const T=new cv(r,o,d,b);n.add(T.group);const A=new dv(r,o,p,b);n.add(A.group);const L=new mv(r,o,d,M,p,i.bridges);n.add(L.group);const w=new vv(r,o,d,b,L.anglerSpots,L.gardens);n.add(w.group);let y=0;const C=new wv(r,o,d);n.add(C.group);const z=new Av(r,o,d,b);n.add(z.group);const B=$=>{C.reset();const Z=b.obstacles.indexOf(C.obstacle);if(Z>=0&&b.obstacles.splice(Z,1),!$&&Math.random()<.5)return;const dt=ut(H.current.zone),bt=Math.max(Math.min(b.s,dt.s0)+120,760),kt=Math.min(Math.max(b.s,dt.s1)-60,2200);for(let I=0;I<40&&kt>bt;I++){const ot=bt+Math.random()*(kt-bt);if(!(Math.abs(ot-b.s)<120)&&!(i.bridges.some(V=>Math.abs(V.s-ot)<V.w/2+35)||o.gates.some(V=>Math.abs(V.s-ot)<50))&&!p.zones.some(V=>ot>V.s0-12&&ot<V.s1+12)&&!p.boats.some(V=>Math.abs(V.s-ot)<V.halfL+12)&&o.bodies[o.bodyIndexAt(ot)].kind==="pound"){C.place(ot),b.obstacles.push(C.obstacle);return}}},q=p.zones.filter($=>$.kind==="stop"),j=(i.pois??[]).filter($=>$.type==="sight"),U=new Set,Y=new Set,H=new hv(x.hour),ut=$=>p.zones.find(Z=>Z.id===$);p.setActive(ut(H.current.zone));const mt=new j_,xt=new tv;mt.onFirstInput=()=>xt.start(),t.addEventListener("pointerdown",()=>xt.start());const Nt=new Q_(i,r,o,h);Nt.addMooredBoats(p.boats),Nt.setPlaces([...p.zones.filter($=>$.kind==="stop").map($=>{const[Z,dt]=r.point(($.s0+$.s1)/2,0),bt={pub:"🍺",bar:"🍸",cafe:"☕",restaurant:"🍽️",hotel:"🛏️",ice_cream:"🍦"}[$.poi.kind]??"⚓";return{x:Z,z:dt,icon:bt,name:$.name}}),...(i.pois??[]).filter($=>$.type==="sight").map($=>({x:$.x,z:$.z,icon:"★",name:$.name}))]);const Qt=()=>{const $=ut(H.current.zone),[Z,dt]=r.point(($.s0+$.s1)/2,0);Nt.setDestination(Z,dt,$.name)};Qt();const F=new Z_(document.getElementById("hud"),$=>mt.push($),Nt.el,Nt.bigEl),K=new jg(s,t);K.enableDamping=!0,K.minDistance=5,K.maxDistance=260,K.maxPolarAngle=1.48,K.enablePan=!1;let yt=-10,st=0;K.addEventListener("start",()=>yt=performance.now()/1e3);let Rt="follow";const Lt=new D,Ht=new D,te=new D,et=$=>{const Z=o.levelAt(b.s);v.group.position.set(b.x,Z+Math.sin($*1.3)*.015,b.z),v.group.rotation.set(Math.sin($*.9)*.004,b.psi,Us.clamp(-b.r*b.u*.5,-.04,.04)),v.rudder.rotation.y=-b.rudder*.6,Lt.set(b.x,Z+1.6,b.z)};et(0),Ht.copy(Lt),K.target.copy(Lt),s.position.set(b.x-Math.sin(b.psi)*24,Lt.y+9,b.z-Math.cos(b.psi)*24),K.update();let lt=1,P=null,ct=null;const rt=$=>{var Z;return $?`${$.action}:${((Z=$.gate)==null?void 0:Z.label)??""}:${$.group.name}`:""};let St=null;const pt=new Set;let zt=0,Et,R=0,S=!1,G=0;const J=()=>(ct==null?void 0:ct.adjacent)??[];let nt="",Q=0;const Pt=$=>{const[Z,dt]=b.span();return Z<$.s+.3&&dt>$.s-.3},_t=$=>{switch($){case"throttleUp":z.active&&(z.stop(),F.toast("You take the tiller back.","info",2e3)),b.notch=Math.min(Oh,b.notch+1);break;case"throttleDown":b.notch=Math.max(Nh,b.notch-1);break;case"neutral":b.notch=0;break;case"paddles":P&&o.togglePaddle(P);break;case"gates":if(P){const Z=o.toggleGate(P,Pt(P));Z&&F.toast(Z,"warn")}break;case"nextGate":{const Z=J();Z.length&&(P=Z[(Z.indexOf(P)+1)%Z.length],St=rt(ct));break}case"timeFaster":lt=Ts[Math.min(Ts.length-1,Ts.indexOf(lt)+1)];break;case"timeSlower":lt=Ts[Math.max(0,Ts.indexOf(lt)-1)];break;case"camera":Rt==="follow"?(te.copy(s.position).sub(K.target),Rt="steerer",K.enabled=!1,v.steerer.visible=!1):(Rt="follow",K.enabled=!0,s.position.copy(K.target).add(te),v.steerer.visible=!0);break;case"map":Nt.bigOpen=!Nt.bigOpen,F.setMapOpen(Nt.bigOpen);break;case"help":F.toggleHelp();break;case"mute":xt.toggleMute();break;case"moor":{const Z=T.act();if(Z&&F.toast(Z,"info",3e3),T.moored){const dt=p.zoneAt(b.s),bt=ut(H.current.zone);(dt==null?void 0:dt.kind)==="stop"&&!U.has(dt.id)&&(U.add(dt.id),F.toast(Lv(dt.poi.name,dt.poi.kind),"info",7e3),x.hour=(x.hour+1)%24),dt===bt&&!H.result?(F.showSummary(H.complete(x.hour),dt.name),p.setActive(null)):(dt==null?void 0:dt.kind)!=="stop"&&F.toast(dt?`Moored at ${dt.name}.`:`Moored up. Your trip ends at ${bt.name}.`,"info",3500)}break}case"nextTrip":H.result&&(H.next(x.hour),F.hideSummary(),p.setActive(ut(H.current.zone)),Qt(),B(H.current.zone==="hoole"),z.roster(),F.toast(`${H.current.title}: ${H.current.brief}`,"info",7e3));break;case"clear":{C.active&&Math.abs(C.s-b.s)<45?T.moored?C.startClearing()&&F.toast("Out with the boat hook. Heave!","info",2500):F.toast("Moor up first (F), then you can get at it with the boat hook.","info",3500):F.toast("There's nothing here to clear.","info",2e3);break}case"autopilot":z.active?(z.stop(),F.toast("You take the tiller back.","info",2500)):ct&&z.isStaffed(ct.group)?T.count?F.toast("Cast off first (F), then the volunteers can bring you through.","info",3500):(z.start(ct.group),F.toast("The volunteers take over: sit back and enjoy it. (Throttle or steer to take the tiller back.)","info",5e3)):F.toast("No volunteers on duty here, so you'll have to work this one yourself.","info",3e3);break;case"headlight":S=!S,v.headlight.intensity=S?40:0;break}},At=()=>{const $=o.bodies[o.bodyIndexAt(b.s)],Z=(b.s-i.meta.towerWharfS)/1e3,dt=`${Math.abs(Z).toFixed(1)} km ${Z>=0?"above":"below"} Tower Wharf`;if($.kind==="chamber")return[`In ${$.lockName}`,dt];const bt=o.gates.find(V=>V.s>b.s),kt=[...o.gates].reverse().find(V=>V.s<b.s),I=g.at(b.s),ot=I!=null&&I.data.name?` · under ${I.data.name}`:"";return Math.abs(b.s-i.meta.towerWharfS)<70?["Tower Wharf",`Junction with the Dee Branch${ot}`]:bt&&bt.s-b.s<160?[`Approaching ${bt.lockName}`,dt+ot]:kt&&b.s-kt.s<120?[`Leaving ${kt.lockName}`,dt+ot]:bt&&kt?[`${kt.lockName} → ${bt.lockName}`,dt+ot]:[bt?`Towards ${bt.lockName}`:"Towards Christleton & Nantwich",dt+ot]},Kt=()=>{const $=K.target,Z=s.position,dt=$.distanceTo(Z);for(let bt=4;bt<dt;bt+=1.5){const kt=bt/dt,I=$.x+(Z.x-$.x)*kt,ot=$.y+(Z.y-$.y)*kt,V=$.z+(Z.z-$.z)*kt,tt=r.project(I,V,b.s),gt=g.rampAt(tt.s,tt.d);if(ot<M.roofAt(I,V)||ot<d.heightAt(I,V)+.5||gt.onDeck&&ot<gt.y+1.2){s.position.lerpVectors($,Z,Math.max(4,bt-2)/dt);return}}};F.toast(`Welcome aboard the Chester Rose! First trip: ${H.current.brief} W to get going, H for help.`,"info",9e3);const ht=new Xg;let Tt=0;addEventListener("resize",()=>{s.aspect=innerWidth/innerHeight,s.updateProjectionMatrix(),e.setSize(innerWidth,innerHeight)});const Gt=()=>{var fs;const $=Math.min(ht.getDelta(),.1);Tt+=$;for(const Ct of mt.drain())_t(Ct);const Z=$*lt,dt=Math.max(1,Math.ceil(Z/Iv));for(let Ct=0;Ct<dt;Ct++){o.update(Z/dt),z.active||b.step(Z/dt,mt.steer);for(const Xt of b.contacts)if(Xt.impulse>1500&&R<=0)if(xt.bump(Math.min(1,Xt.impulse/12e3)),R=.4,Xt.obstacle===C.obstacle)F.toast("It's jammed solid. Moor up nearby (F) and clear it with the boat hook (G).","warn",3500);else if(Xt.kind==="boat"&&!p.boats.includes(Xt.obstacle))A.bumped(Xt.obstacle),Xt.impulse>3e3&&H.bumps++;else if(Xt.kind==="boat"){const Ke=Xt.obstacle;p.rockBoat(Ke,Math.min(.08,Xt.impulse/5e4)),Xt.impulse>3e3&&(H.bumps++,F.toast(`Bump! Sorry, ${Ke.name}. A head pops out of the hatch…`,"warn",3e3))}else Xt.impulse>9e3&&(H.bumps++,F.toast(Xt.kind==="gate"?"Bump! Into the lock gates.":"Clunk. Mind the bank!","info",2200))}R-=$;const bt=r.frame(b.s),kt=Math.sin(b.psi)*bt.tx+Math.cos(b.psi)*bt.tz>=0;ct=Rc(o,b.span(),kt);for(const Ct of o.events.splice(0))(!Ct.group||Ct.group===(ct==null?void 0:ct.group)||Ct.group.gates.some(Ke=>Math.abs(Ke.s-b.s)<150))&&F.toast(Ct.text,Ct.kind);if(z.active&&mt.steer!==0&&(z.stop(),F.toast("You take the tiller back.","info",2e3)),z.update(Z,ct,kt)==="done"&&(F.toast("Through! The volunteers wave you on your way. Thanks, volunteers!","info",4500),ct=Rc(o,b.span(),kt)),!z.active&&(ct!=null&&ct.keeper)&&ct.gate&&ct.action!=="wait"){const Ct=rt(ct);if(Ct!==nt)nt=Ct,Q=Tt+1.5;else if(Tt>=Q){const Xt=ct.gate;ct.action==="paddlesUp"?Xt.wantPaddle=!0:ct.action==="paddlesDown"?Xt.wantPaddle=!1:ct.action==="close"?Xt.wantOpen=!1:ct.action==="open"&&o.levelsMatch(Xt)&&(Xt.wantOpen=!0),nt=""}}const I=J();St!==null&&(St!==rt(ct)||!P||!I.includes(P))&&(St=null),St===null&&(P=ct!=null&&ct.gate&&!ct.keeper?ct.gate:I.includes(P)?P:I.at(-1)??null),_.setSelected(P),F.setLockPanel(o,{gate:P,step:ct,candidates:I.length,boatSpans:P?Pt(P):!1,volunteers:z.active?"active":z.isStaffed(ct==null?void 0:ct.group)?"available":"none"});for(const Ct of o.gates)Ct.paddle<.05?pt.delete(Ct):Math.abs(Ct.s-b.s)>110&&!pt.has(Ct)&&(pt.add(Ct),F.toast(`You've left the paddles up at ${Ct.lockName}. The lock-keeper won't be pleased.`,"warn",6e3));zt=b.speed*Do>4.3?zt+Z:0,zt>6&&(F.toast("Steady on! The limit is 4 mph, and your wash is slapping the moored boats.","warn"),zt=-30),A.update(Z,kt?1:-1);for(const Ct of A.events.splice(0)){const Xt=x.hour<12?"Morning":x.hour<18?"Afternoon":"Evening";Ct.kind==="greet"?F.toast(`"${Xt}!" The steerer of ${Ct.boat.name} gives you a wave.`,"info",3500):Ct.kind==="wrongSide"?F.toast(`Pass oncoming boats on the right (port to port). ${Ct.boat.name}'s steerer looks puzzled.`,"warn",4500):F.toast(`Bump! Sorry, ${Ct.boat.name}!`,"warn",3e3)}w.update(Z),y-=$;for(const Ct of w.events.splice(0))Ct.kind==="quack"?(xt.quack(),y<=0&&(F.toast("Quack! A mallard paddles off, deeply unimpressed.","info",2500),y=25)):(H.rocked++,F.toast("An angler shakes a fist as your wash bobs their float. Ease off past the anglers!","warn",4e3));for(const Ct of j)!Y.has(Ct.name)&&Math.abs(Ct.s-b.s)<45&&(Y.add(Ct.name),F.toast(Dv(Ct.name,Ct.kind),"info",7e3));if(G-=$,b.speed*Do>2.8)for(const Ct of p.boats)Math.hypot(Ct.x-b.x,Ct.z-b.z)>Ct.halfL+10||p.now-Ct.rockedAt<10||(p.rockBoat(Ct,.05),H.rocked++,G<=0&&(F.toast(Wc[Math.floor(Math.random()*Wc.length)].replace("%",Ct.name),"warn",3500),G=6));const ot=(fs=g.at(b.s))==null?void 0:fs.data.name;if(ot&&ot!==Et&&F.toast(`Under ${ot}`,"info",2200),Et=ot,et(Tt),u.update($),_.update($),p.update($),T.update(o.levelAt(b.s)),x.update(Z/3600,Lt),x.sky.position.copy(s.position),Rt==="follow"){const Ct=Lt.clone().sub(Ht);if(Ct.length()>50?(K.target.copy(Lt),s.position.set(b.x-Math.sin(b.psi)*24,Lt.y+9,b.z-Math.cos(b.psi)*24),st=0):(s.position.add(Ct),K.target.add(Ct)),st>0){const Xt=s.position.clone().sub(K.target);s.position.copy(K.target).addScaledVector(Xt.normalize(),st)}if(performance.now()/1e3-yt>3&&Math.abs(b.u)>.25){const Xt=s.position.clone().sub(K.target),Ke=Math.atan2(Xt.x,Xt.z);let Rn=b.psi+(b.u>0?Math.PI:0)-Ke;Rn=Math.atan2(Math.sin(Rn),Math.cos(Rn));const Ws=Rn*Math.min(1,$*.5);Xt.applyAxisAngle(new D(0,1,0),Ws),s.position.copy(K.target).add(Xt)}K.update(),st=s.position.distanceTo(K.target),Kt()}else{const Ct=Math.sin(b.psi),Xt=Math.cos(b.psi),Ke=-En/2+.9;s.position.set(b.x+Ct*Ke,Lt.y+.75,b.z+Xt*Ke),s.lookAt(b.x+Ct*40,Lt.y-.2,b.z+Xt*40)}Ht.copy(Lt),g.updateOcclusion(s.position,Lt,$),F.setHelm({notch:b.notch,speedMph:b.speed*Do,rudder:b.rudder,timeScale:lt,hour:x.hour,muted:xt.muted});const[V,tt]=At();F.setLocation(V,tt),Nt.draw(b.x,b.z,b.psi);const gt=ut(H.current.zone),Mt=(gt.s0+gt.s1)/2-b.s,Wt=b.s>gt.s0-4&&b.s<gt.s1+4,ge=Math.sign(Mt)===(kt?1:-1)?"ahead":"behind you",Ee=H.result?"Moored up. Press Enter for the next trip":Wt?`${gt.name}: you're here. Pull in and tie up (F)`:`${gt.name} · ${(Math.abs(Mt)/1e3).toFixed(1)} km ${ge}`,re=`Journal: ${U.size}/${q.length} canalside stops · ${Y.size}/${j.length} sights`;if(F.setTrip(H.index+1,H.current.title,H.current.brief,Ee,!!H.result,re),C.update(Z,Tt)){const Ct=b.obstacles.indexOf(C.obstacle);Ct>=0&&b.obstacles.splice(Ct,1),H.cleared++,Nt.setHazard(null),F.toast("Cleared! A trolley, a bike, a traffic cone and an alarming amount of branches now sit in a heap on the towpath. Cast off (F) when you're ready.","info",7e3)}const He=C.active?Math.abs(C.s-b.s):1/0;if(C.active&&!C.spotted&&He<90){C.spotted=!0;const[Ct,Xt]=r.point(C.s,0);Nt.setHazard(Ct,Xt),F.toast("Uh-oh: a shopping trolley, a bike and a raft of branches are jammed across the canal ahead. Moor up nearby (F) and clear it with the boat hook (G).","warn",8e3)}let Ge=T.prompt();He<45&&(T.moored?Ge=C.clearing?{key:"G",text:`Clearing… ${Math.round(C.progress*100)}%`,ready:!1}:{key:"G",text:"Clear the blockage with the boat hook",ready:!0}:Ge||(Ge={key:"F",text:"Moor up alongside the towpath to get at the blockage",ready:!1})),F.setPrompt(Ge);const Vs=o.gates.reduce((Ct,Xt)=>Ct+(Math.abs(Xt.s-b.s)<120?Math.abs(Xt.flow):0),0);xt.update(b.notch,Vs,F.isWinding,!x.isNight),e.render(n,s),requestAnimationFrame(Gt)};await jn("Casting off…"),Fh.classList.add("done"),requestAnimationFrame(Gt),Object.assign(window,{game:{scene:n,boat:b,ww:o,camera:s,route:r,renderer:e,moorings:p,trips:H,traffic:A,decor:L,life:w,blockage:C,volunteers:z,lines:T}})}Ov().catch(i=>{console.error(i),kh.textContent=`Something went wrong: ${i.message}`});
