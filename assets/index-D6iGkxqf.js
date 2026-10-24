var hu=Object.defineProperty;var uu=(i,t,e)=>t in i?hu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var O=(i,t,e)=>uu(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Za="170",us={ROTATE:0,DOLLY:1,PAN:2},as={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},du=0,xc=1,fu=2,gh=1,_h=2,Wn=3,fi=0,je=1,Ie=2,ui=0,ds=1,Mc=2,yc=3,bc=4,pu=5,Ei=100,mu=101,gu=102,_u=103,vu=104,xu=200,Mu=201,yu=202,bu=203,na=204,ia=205,Su=206,wu=207,Eu=208,Tu=209,Au=210,Ru=211,Cu=212,Pu=213,Lu=214,sa=0,oa=1,ra=2,ms=3,aa=4,ca=5,la=6,ha=7,vh=0,Du=1,Iu=2,di=0,Uu=1,Nu=2,Ou=3,xh=4,Fu=5,ku=6,zu=7,Mh=300,gs=301,_s=302,ua=303,da=304,ar=306,nr=1e3,Ai=1001,fa=1002,on=1003,Bu=1004,lo=1005,Rn=1006,mr=1007,Ri=1008,qn=1009,yh=1010,bh=1011,eo=1012,Ka=1013,Pi=1014,Cn=1015,ro=1016,Ja=1017,Qa=1018,vs=1020,Sh=35902,wh=1021,Eh=1022,yn=1023,Th=1024,Ah=1025,fs=1026,xs=1027,tc=1028,ec=1029,Rh=1030,nc=1031,ic=1033,Yo=33776,jo=33777,Zo=33778,Ko=33779,pa=35840,ma=35841,ga=35842,_a=35843,va=36196,xa=37492,Ma=37496,ya=37808,ba=37809,Sa=37810,wa=37811,Ea=37812,Ta=37813,Aa=37814,Ra=37815,Ca=37816,Pa=37817,La=37818,Da=37819,Ia=37820,Ua=37821,Jo=36492,Na=36494,Oa=36495,Ch=36283,Fa=36284,ka=36285,za=36286,Hu=3200,Gu=3201,Ph=0,Vu=1,ci="",ze="srgb",Es="srgb-linear",cr="linear",ve="srgb",Bi=7680,Sc=519,Wu=512,Xu=513,$u=514,Lh=515,qu=516,Yu=517,ju=518,Zu=519,wc=35044,Ba=35048,Ec="300 es",Xn=2e3,ir=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tc=1234567;const Zs=Math.PI/180,Ms=180/Math.PI;function Oi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function De(i,t,e){return Math.max(t,Math.min(e,i))}function sc(i,t){return(i%t+t)%t}function Ku(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ju(i,t,e){return i!==t?(e-i)/(t-i):0}function Ks(i,t,e){return(1-e)*i+e*t}function Qu(i,t,e,n){return Ks(i,t,1-Math.exp(-e*n))}function td(i,t=1){return t-Math.abs(sc(i,t*2)-t)}function ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function id(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sd(i,t){return i+Math.random()*(t-i)}function od(i){return i*(.5-Math.random())}function rd(i){i!==void 0&&(Tc=i);let t=Tc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ad(i){return i*Zs}function cd(i){return i*Ms}function ld(i){return(i&i-1)===0&&i!==0}function hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ud(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dd(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+n)/2),h=r((t+n)/2),f=o((t-n)/2),u=r((t-n)/2),d=o((n-t)/2),m=r((n-t)/2);switch(s){case"XYX":i.set(a*h,c*f,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ss(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ys={DEG2RAD:Zs,RAD2DEG:Ms,generateUUID:Oi,clamp:De,euclideanModulo:sc,mapLinear:Ku,inverseLerp:Ju,lerp:Ks,damp:Qu,pingpong:td,smoothstep:ed,smootherstep:nd,randInt:id,randFloat:sd,randFloatSpread:od,seededRandom:rd,degToRad:ad,radToDeg:cd,isPowerOfTwo:ld,ceilPowerOfTwo:hd,floorPowerOfTwo:ud,setQuaternionFromProperEuler:dd,normalize:qe,denormalize:ss};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ne{constructor(t,e,n,s,o,r,a,c,l){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],_=s[0],g=s[3],p=s[6],x=s[1],M=s[4],v=s[7],A=s[2],y=s[5],E=s[8];return o[0]=r*_+a*x+c*A,o[3]=r*g+a*M+c*y,o[6]=r*p+a*v+c*E,o[1]=l*_+h*x+f*A,o[4]=l*g+h*M+f*y,o[7]=l*p+h*v+f*E,o[2]=u*_+d*x+m*A,o[5]=u*g+d*M+m*y,o[8]=u*p+d*v+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*r-a*l,u=a*c-h*o,d=l*o-r*c,m=e*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=f*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=u*_,t[4]=(h*e-s*c)*_,t[5]=(s*o-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gr.makeScale(t,e)),this}rotate(t){return this.premultiply(gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new ne;function Dh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fd(){const i=sr("canvas");return i.style.display="block",i}const Ac={};function qs(i){i in Ac||(Ac[i]=!0,console.warn(i))}function pd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function md(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ue={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(i.r=ps(i.r),i.g=ps(i.g),i.b=ps(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?cr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Rc=[.64,.33,.3,.6,.15,.06],Cc=[.2126,.7152,.0722],Pc=[.3127,.329],Lc=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dc=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ue.define({[Es]:{primaries:Rc,whitePoint:Pc,transfer:cr,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:Cc,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:Rc,whitePoint:Pc,transfer:ve,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:Cc,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}});let Hi;class _d{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=sr("canvas")),Hi.width=t.width,Hi.height=t.height;const n=Hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=$n(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vd=0;class Ih{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(_r(s[r].image)):o.push(_r(s[r]))}else o=_r(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function _r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_d.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xd=0;class We extends Ni{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=Ai,s=Ai,o=Rn,r=Ri,a=yn,c=qn,l=We.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Oi(),this.name="",this.source=new Ih(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nr:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nr:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Mh;We.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,v=(d+1)/2,A=(p+1)/2,y=(h+u)/4,E=(f+_)/4,R=(m+g)/4;return M>v&&M>A?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=y/n,o=E/n):v>A?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=y/s,o=R/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=E/o,s=R/o),this.set(n,s,o,e),this}let x=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(f-_)/x,this.z=(u-h)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Md extends Ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ih(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Md{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uh extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yd extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3];const u=o[r+0],d=o[r+1],m=o[r+2],_=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(f!==_||c!==u||l!==d||h!==m){let g=1-a;const p=c*u+l*d+h*m+f*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),y=Math.atan2(A,p*x);g=Math.sin(g*y)/A,a=Math.sin(a*y)/A}const v=a*x;if(c=c*g+u*v,l=l*g+d*v,h=h*g+m*v,f=f*g+_*v,g===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=A,l*=A,h*=A,f*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=o[r],u=o[r+1],d=o[r+2],m=o[r+3];return t[e]=a*m+h*f+c*d-l*u,t[e+1]=c*m+h*u+l*f-a*d,t[e+2]=l*m+h*d+a*u-c*f,t[e+3]=h*m-a*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(o/2),u=c(n/2),d=c(s/2),m=c(o/2);switch(r){case"XYZ":this._x=u*h*f+l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f+u*d*m;break;case"YZX":this._x=u*h*f+l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f-u*d*m;break;case"XZY":this._x=u*h*f-l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(o-l)*d,this._z=(r-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(o-l)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(r-s)/d,this._x=(o+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-s*a,this._w=r*h-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=r*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=o*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ic.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),h=2*(a*e-o*s),f=2*(o*n-r*e);return this.x=e+c*l+r*f-a*h,this.y=n+c*h+a*l-o*f,this.z=s+c*f+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vr.copy(this).projectOnVector(t),this.sub(vr)}reflect(t){return this.sub(vr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vr=new D,Ic=new wn;class Fi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,mn):mn.fromBufferAttribute(o,r),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ho.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(t.matrixWorld),this.union(ho)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),uo.subVectors(this.max,Ns),Gi.subVectors(t.a,Ns),Vi.subVectors(t.b,Ns),Wi.subVectors(t.c,Ns),Jn.subVectors(Vi,Gi),Qn.subVectors(Wi,Vi),gi.subVectors(Gi,Wi);let e=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-gi.z,gi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,gi.z,0,-gi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-gi.y,gi.x,0];return!xr(e,Gi,Vi,Wi,uo)||(e=[1,0,0,0,1,0,0,0,1],!xr(e,Gi,Vi,Wi,uo))?!1:(fo.crossVectors(Jn,Qn),e=[fo.x,fo.y,fo.z],xr(e,Gi,Vi,Wi,uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new D,new D,new D,new D,new D,new D,new D,new D],mn=new D,ho=new Fi,Gi=new D,Vi=new D,Wi=new D,Jn=new D,Qn=new D,gi=new D,Ns=new D,uo=new D,fo=new D,_i=new D;function xr(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){_i.fromArray(i,o);const a=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),c=t.dot(_i),l=e.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const bd=new Fi,Os=new D,Mr=new D;class Ts{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):bd.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);const e=Os.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Os,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(Mr)),this.expandByPoint(Os.copy(t.center).sub(Mr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new D,yr=new D,po=new D,ti=new D,br=new D,mo=new D,Sr=new D;class lr{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yr.copy(t).add(e).multiplyScalar(.5),po.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(yr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(po),a=ti.dot(this.direction),c=-ti.dot(po),l=ti.lengthSq(),h=Math.abs(1-r*r);let f,u,d,m;if(h>0)if(f=r*c-a,u=r*a-c,m=o*h,f>=0)if(u>=-m)if(u<=m){const _=1/h;f*=_,u*=_,d=f*(f+r*u+2*a)+u*(r*f+u+2*c)+l}else u=o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*c)+l;else u=-o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-m?(f=Math.max(0,-(-r*o+a)),u=f>0?-o:Math.min(Math.max(-o,-c),o),d=-f*f+u*(u+2*c)+l):u<=m?(f=0,u=Math.min(Math.max(-o,-c),o),d=u*(u+2*c)+l):(f=Math.max(0,-(r*o+a)),u=f>0?o:Math.min(Math.max(-o,-c),o),d=-f*f+u*(u+2*c)+l);else u=r>0?-o:o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(yr).addScaledVector(po,u),d}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,o){br.subVectors(e,t),mo.subVectors(n,t),Sr.crossVectors(br,mo);let r=this.direction.dot(Sr),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ti.subVectors(this.origin,t);const c=a*this.direction.dot(mo.crossVectors(ti,mo));if(c<0)return null;const l=a*this.direction.dot(br.cross(ti));if(l<0||c+l>r)return null;const h=-a*ti.dot(Sr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,o,r,a,c,l,h,f,u,d,m,_,g){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,h,f,u,d,m,_,g)}set(t,e,n,s,o,r,a,c,l,h,f,u,d,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),o=1/Xi.setFromMatrixColumn(t,1).length(),r=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const u=r*h,d=r*f,m=a*h,_=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+m*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=m+d*l,e[10]=r*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,m=l*h,_=l*f;e[0]=u+_*a,e[4]=m*a-d,e[8]=r*l,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=d*a-m,e[6]=_+u*a,e[10]=r*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,m=l*h,_=l*f;e[0]=u-_*a,e[4]=-r*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=r*h,e[9]=_-u*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const u=r*h,d=r*f,m=a*h,_=a*f;e[0]=c*h,e[4]=m*l-d,e[8]=u*l+_,e[1]=c*f,e[5]=_*l+u,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const u=r*c,d=r*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-u*f,e[8]=m*f+d,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+m,e[10]=u-_*f}else if(t.order==="XZY"){const u=r*c,d=r*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+_,e[5]=r*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sd,t,wd)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ei.crossVectors(n,tn),ei.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ei.crossVectors(n,tn)),ei.normalize(),go.crossVectors(tn,ei),s[0]=ei.x,s[4]=go.x,s[8]=tn.x,s[1]=ei.y,s[5]=go.y,s[9]=tn.y,s[2]=ei.z,s[6]=go.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],M=n[7],v=n[11],A=n[15],y=s[0],E=s[4],R=s[8],w=s[12],S=s[1],P=s[5],B=s[9],U=s[13],G=s[2],$=s[6],N=s[10],q=s[14],W=s[3],lt=s[7],mt=s[11],yt=s[15];return o[0]=r*y+a*S+c*G+l*W,o[4]=r*E+a*P+c*$+l*lt,o[8]=r*R+a*B+c*N+l*mt,o[12]=r*w+a*U+c*q+l*yt,o[1]=h*y+f*S+u*G+d*W,o[5]=h*E+f*P+u*$+d*lt,o[9]=h*R+f*B+u*N+d*mt,o[13]=h*w+f*U+u*q+d*yt,o[2]=m*y+_*S+g*G+p*W,o[6]=m*E+_*P+g*$+p*lt,o[10]=m*R+_*B+g*N+p*mt,o[14]=m*w+_*U+g*q+p*yt,o[3]=x*y+M*S+v*G+A*W,o[7]=x*E+M*P+v*$+A*lt,o[11]=x*R+M*B+v*N+A*mt,o[15]=x*w+M*U+v*q+A*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+o*c*f-s*l*f-o*a*u+n*l*u+s*a*d-n*c*d)+_*(+e*c*d-e*l*u+o*r*u-s*r*d+s*l*h-o*c*h)+g*(+e*l*f-e*a*d-o*r*f+n*r*d+o*a*h-n*l*h)+p*(-s*a*h-e*c*f+e*a*u+s*r*f-n*r*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],x=f*g*l-_*u*l+_*c*d-a*g*d-f*c*p+a*u*p,M=m*u*l-h*g*l-m*c*d+r*g*d+h*c*p-r*u*p,v=h*_*l-m*f*l+m*a*d-r*_*d-h*a*p+r*f*p,A=m*f*c-h*_*c-m*a*u+r*_*u+h*a*g-r*f*g,y=e*x+n*M+s*v+o*A;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/y;return t[0]=x*E,t[1]=(_*u*o-f*g*o-_*s*d+n*g*d+f*s*p-n*u*p)*E,t[2]=(a*g*o-_*c*o+_*s*l-n*g*l-a*s*p+n*c*p)*E,t[3]=(f*c*o-a*u*o-f*s*l+n*u*l+a*s*d-n*c*d)*E,t[4]=M*E,t[5]=(h*g*o-m*u*o+m*s*d-e*g*d-h*s*p+e*u*p)*E,t[6]=(m*c*o-r*g*o-m*s*l+e*g*l+r*s*p-e*c*p)*E,t[7]=(r*u*o-h*c*o+h*s*l-e*u*l-r*s*d+e*c*d)*E,t[8]=v*E,t[9]=(m*f*o-h*_*o-m*n*d+e*_*d+h*n*p-e*f*p)*E,t[10]=(r*_*o-m*a*o+m*n*l-e*_*l-r*n*p+e*a*p)*E,t[11]=(h*a*o-r*f*o-h*n*l+e*f*l+r*n*d-e*a*d)*E,t[12]=A*E,t[13]=(h*_*s-m*f*s+m*n*u-e*_*u-h*n*g+e*f*g)*E,t[14]=(m*a*s-r*_*s-m*n*c+e*_*c+r*n*g-e*a*g)*E,t[15]=(r*f*s-h*a*s+h*n*c-e*f*c-r*n*u+e*a*u)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,f=a+a,u=o*l,d=o*h,m=o*f,_=r*h,g=r*f,p=a*f,x=c*l,M=c*h,v=c*f,A=n.x,y=n.y,E=n.z;return s[0]=(1-(_+p))*A,s[1]=(d+v)*A,s[2]=(m-M)*A,s[3]=0,s[4]=(d-v)*y,s[5]=(1-(u+p))*y,s[6]=(g+x)*y,s[7]=0,s[8]=(m+M)*E,s[9]=(g-x)*E,s[10]=(1-(u+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Xi.set(s[0],s[1],s[2]).length();const r=Xi.set(s[4],s[5],s[6]).length(),a=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],gn.copy(this);const l=1/o,h=1/r,f=1/a;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,e.setFromRotationMatrix(gn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Xn){const c=this.elements,l=2*o/(e-t),h=2*o/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let d,m;if(a===Xn)d=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===ir)d=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Xn){const c=this.elements,l=1/(e-t),h=1/(n-s),f=1/(r-o),u=(e+t)*l,d=(n+s)*h;let m,_;if(a===Xn)m=(r+o)*f,_=-2*f;else if(a===ir)m=o*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xi=new D,gn=new he,Sd=new D(0,0,0),wd=new D(1,1,1),ei=new D,go=new D,tn=new D,Uc=new he,Nc=new wn;class In{constructor(t=0,e=0,n=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-De(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-De(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class oc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ed=0;const Oc=new D,$i=new wn,Bn=new he,_o=new D,Fs=new D,Td=new D,Ad=new wn,Fc=new D(1,0,0),kc=new D(0,1,0),zc=new D(0,0,1),Bc={type:"added"},Rd={type:"removed"},qi={type:"childadded",child:null},wr={type:"childremoved",child:null};class Ce extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new D,e=new In,n=new wn,s=new D(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new ne}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Fc,t)}rotateY(t){return this.rotateOnAxis(kc,t)}rotateZ(t){return this.rotateOnAxis(zc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fc,t)}translateY(t){return this.translateOnAxis(kc,t)}translateZ(t){return this.translateOnAxis(zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_o.copy(t):_o.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Fs,_o,this.up):Bn.lookAt(_o,Fs,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Bn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bc),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rd),wr.child=t,this.dispatchEvent(wr),wr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bc),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,Td),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new D(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new D,Hn=new D,Er=new D,Gn=new D,Yi=new D,ji=new D,Hc=new D,Tr=new D,Ar=new D,Rr=new D,Cr=new Ee,Pr=new Ee,Lr=new Ee;class xn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){_n.subVectors(s,e),Hn.subVectors(n,e),Er.subVectors(t,e);const r=_n.dot(_n),a=_n.dot(Hn),c=_n.dot(Er),l=Hn.dot(Hn),h=Hn.dot(Er),f=r*l-a*a;if(f===0)return o.set(0,0,0),null;const u=1/f,d=(l*c-a*h)*u,m=(r*h-a*c)*u;return o.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Gn.x),c.addScaledVector(r,Gn.y),c.addScaledVector(a,Gn.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return Cr.setScalar(0),Pr.setScalar(0),Lr.setScalar(0),Cr.fromBufferAttribute(t,e),Pr.fromBufferAttribute(t,n),Lr.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Cr,o.x),r.addScaledVector(Pr,o.y),r.addScaledVector(Lr,o.z),r}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Hn.subVectors(t,e),_n.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),_n.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Yi.subVectors(s,n),ji.subVectors(o,n),Tr.subVectors(t,n);const c=Yi.dot(Tr),l=ji.dot(Tr);if(c<=0&&l<=0)return e.copy(n);Ar.subVectors(t,s);const h=Yi.dot(Ar),f=ji.dot(Ar);if(h>=0&&f<=h)return e.copy(s);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Yi,r);Rr.subVectors(t,o);const d=Yi.dot(Rr),m=ji.dot(Rr);if(m>=0&&d<=m)return e.copy(o);const _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(ji,a);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Hc.subVectors(o,s),a=(f-h)/(f-h+(d-m)),e.copy(s).addScaledVector(Hc,a);const p=1/(g+_+u);return r=_*p,a=u*p,e.copy(n).addScaledVector(Yi,r).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},vo={h:0,s:0,l:0};function Dr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=sc(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Dr(r,o,t+1/3),this.g=Dr(r,o,t),this.b=Dr(r,o,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=Nh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return ue.fromWorkingColorSpace(He.copy(this),t),Math.round(De(He.r*255,0,255))*65536+Math.round(De(He.g*255,0,255))*256+Math.round(De(He.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(He.copy(this),e);const n=He.r,s=He.g,o=He.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const f=r-a;switch(l=h<=.5?f/(r+a):f/(2-r-a),r){case n:c=(s-o)/f+(s<o?6:0);break;case s:c=(o-n)/f+2;break;case o:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=ze){ue.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(vo);const n=Ks(ni.h,vo.h,e),s=Ks(ni.s,vo.s,e),o=Ks(ni.l,vo.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Ht;Ht.NAMES=Nh;let Cd=0;class As extends Ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Oi(),this.name="",this.blending=ds,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==na&&(n.blendSrc=this.blendSrc),this.blendDst!==ia&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Di extends As{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new D,xo=new nt;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wc,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),o=qe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wc&&(t.usage=this.usage),t}}class Oh extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fh extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pd=0;const cn=new he,Ir=new Ce,Zi=new D,en=new Fi,ks=new Fi,Oe=new D;class _e extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dh(t)?Fh:Oh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ne().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Ir.lookAt(t),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Kt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];en.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(en.min,ks.min),en.expandByPoint(Oe),Oe.addVectors(en.max,ks.max),en.expandByPoint(Oe)):(en.expandByPoint(ks.min),en.expandByPoint(ks.max))}en.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Oe.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Oe.fromBufferAttribute(a,l),c&&(Zi.fromBufferAttribute(t,l),Oe.add(Zi)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new D,c[R]=new D;const l=new D,h=new D,f=new D,u=new nt,d=new nt,m=new nt,_=new D,g=new D;function p(R,w,S){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,S),u.fromBufferAttribute(o,R),d.fromBufferAttribute(o,w),m.fromBufferAttribute(o,S),h.sub(l),f.sub(l),d.sub(u),m.sub(u);const P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(P),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(P),a[R].add(_),a[w].add(_),a[S].add(_),c[R].add(g),c[w].add(g),c[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,w=x.length;R<w;++R){const S=x[R],P=S.start,B=S.count;for(let U=P,G=P+B;U<G;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const M=new D,v=new D,A=new D,y=new D;function E(R){A.fromBufferAttribute(s,R),y.copy(A);const w=a[R];M.copy(w),M.sub(A.multiplyScalar(A.dot(w))).normalize(),v.crossVectors(y,w);const P=v.dot(c[R])<0?-1:1;r.setXYZW(R,M.x,M.y,M.z,P)}for(let R=0,w=x.length;R<w;++R){const S=x[R],P=S.start,B=S.count;for(let U=P,G=P+B;U<G;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new D,o=new D,r=new D,a=new D,c=new D,l=new D,h=new D,f=new D;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let d=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)u[m++]=l[d++]}return new Xe(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],f=o[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gc=new he,vi=new lr,Mo=new Ts,Vc=new D,yo=new D,bo=new D,So=new D,Ur=new D,wo=new D,Wc=new D,Eo=new D;class Z extends Ce{constructor(t=new _e,e=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){wo.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],f=o[c];h!==0&&(Ur.fromBufferAttribute(f,t),r?wo.addScaledVector(Ur,h):wo.addScaledVector(Ur.sub(e),h))}e.add(wo)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(o),vi.copy(t.ray).recast(t.near),!(Mo.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Mo,Vc)===null||vi.origin.distanceToSquared(Vc)>(t.far-t.near)**2))&&(Gc.copy(o).invert(),vi.copy(t.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,u=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=r[g.materialIndex],x=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,A=M;v<A;v+=3){const y=a.getX(v),E=a.getX(v+1),R=a.getX(v+2);s=To(this,p,t,n,l,h,f,y,E,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);s=To(this,r,t,n,l,h,f,x,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=r[g.materialIndex],x=Math.max(g.start,d.start),M=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,A=M;v<A;v+=3){const y=v,E=v+1,R=v+2;s=To(this,p,t,n,l,h,f,y,E,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const x=g,M=g+1,v=g+2;s=To(this,r,t,n,l,h,f,x,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Ld(i,t,e,n,s,o,r,a){let c;if(t.side===je?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===fi,a),c===null)return null;Eo.copy(a),Eo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Eo);return l<e.near||l>e.far?null:{distance:l,point:Eo.clone(),object:i}}function To(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,yo),i.getVertexPosition(c,bo),i.getVertexPosition(l,So);const h=Ld(i,t,e,n,yo,bo,So,Wc);if(h){const f=new D;xn.getBarycoord(Wc,yo,bo,So,f),s&&(h.uv=xn.getInterpolatedAttribute(s,a,c,l,f,new nt)),o&&(h.uv1=xn.getInterpolatedAttribute(o,a,c,l,f,new nt)),r&&(h.normal=xn.getInterpolatedAttribute(r,a,c,l,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new D,materialIndex:0};xn.getNormal(yo,bo,So,u.normal),h.face=u,h.barycoord=f}return h}class Xt extends _e{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,o,4),m("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(f,2));function m(_,g,p,x,M,v,A,y,E,R,w){const S=v/E,P=A/R,B=v/2,U=A/2,G=y/2,$=E+1,N=R+1;let q=0,W=0;const lt=new D;for(let mt=0;mt<N;mt++){const yt=mt*P-U;for(let Ut=0;Ut<$;Ut++){const Bt=Ut*S-B;lt[_]=Bt*x,lt[g]=yt*M,lt[p]=G,l.push(lt.x,lt.y,lt.z),lt[_]=0,lt[g]=0,lt[p]=y>0?1:-1,h.push(lt.x,lt.y,lt.z),f.push(Ut/E),f.push(1-mt/R),q+=1}}for(let mt=0;mt<R;mt++)for(let yt=0;yt<E;yt++){const Ut=u+yt+$*mt,Bt=u+yt+$*(mt+1),j=u+(yt+1)+$*(mt+1),ot=u+(yt+1)+$*mt;c.push(Ut,Bt,ot),c.push(Bt,j,ot),W+=6}a.addGroup(d,W,w),d+=W,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=bs(i[e]);for(const s in n)t[s]=n[s]}return t}function Dd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const zh={clone:bs,merge:Ye};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends As{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=Dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bh extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new D,Xc=new nt,$c=new nt;class sn extends Bh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,Xc,$c),e.subVectors($c,Xc)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ki=-90,Ji=1;class Nd extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(Ki,Ji,t,e);s.layers=this.layers,this.add(s);const o=new sn(Ki,Ji,t,e);o.layers=this.layers,this.add(o);const r=new sn(Ki,Ji,t,e);r.layers=this.layers,this.add(r);const a=new sn(Ki,Ji,t,e);a.layers=this.layers,this.add(a);const c=new sn(Ki,Ji,t,e);c.layers=this.layers,this.add(c);const l=new sn(Ki,Ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Hh extends We{constructor(t,e,n,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,n,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Od extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xt(5,5,5),o=new Yn({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:ui});o.uniforms.tEquirect.value=e;const r=new Z(s,o),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Rn),new Nd(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const Nr=new D,Fd=new D,kd=new ne;class ai{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Nr.subVectors(n,e).cross(Fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Nr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||kd.getNormalMatrix(t),s=this.coplanarPoint(Nr).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Ts,Ao=new D;class rc{constructor(t=new ai,e=new ai,n=new ai,s=new ai,o=new ai,r=new ai){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],u=s[7],d=s[8],m=s[9],_=s[10],g=s[11],p=s[12],x=s[13],M=s[14],v=s[15];if(n[0].setComponents(c-o,u-l,g-d,v-p).normalize(),n[1].setComponents(c+o,u+l,g+d,v+p).normalize(),n[2].setComponents(c+r,u+h,g+m,v+x).normalize(),n[3].setComponents(c-r,u-h,g-m,v-x).normalize(),n[4].setComponents(c-a,u-f,g-_,v-M).normalize(),e===Xn)n[5].setComponents(c+a,u+f,g+_,v+M).normalize();else if(e===ir)n[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ao.x=s.normal.x>0?t.max.x:t.min.x,Ao.y=s.normal.y>0?t.max.y:t.min.y,Ao.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gh(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function zd(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const _=f[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class jn extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=t/a,u=e/c,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const x=p*u-r;for(let M=0;M<l;M++){const v=M*f-o;m.push(v,-x,0),_.push(0,0,1),g.push(M/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const M=x+l*p,v=x+l*(p+1),A=x+1+l*(p+1),y=x+1+l*p;d.push(M,v,y),d.push(v,A,y)}this.setIndex(d),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hd=`#ifdef USE_ALPHAHASH
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
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$d=`#ifdef USE_AOMAP
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
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
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
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qd=`#ifdef USE_IRIDESCENCE
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
#endif`,tf=`#ifdef USE_BUMPMAP
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hf=`#define PI 3.141592653589793
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
} // validated`,uf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,df=`vec3 transformedNormal = objectNormal;
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
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_f="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rf=`#ifdef USE_GRADIENTMAP
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
}`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Df=`uniform bool receiveShadow;
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
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kf=`PhysicalMaterial material;
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
#endif`,zf=`struct PhysicalMaterial {
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
}`,Bf=`
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
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zf=`#if defined( USE_POINTS_UV )
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
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`#ifdef USE_MORPHTARGETS
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
#endif`,ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lp=`#ifdef USE_NORMALMAP
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
#endif`,hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ep=`float getShadowMask() {
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
}`,Tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ip=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#ifdef USE_TRANSMISSION
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hp=`uniform sampler2D t2D;
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`#include <common>
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
}`,qp=`#if DEPTH_PACKING == 3200
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
}`,Yp=`#define DISTANCE
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
}`,jp=`#define DISTANCE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`uniform float scale;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,em=`uniform vec3 diffuse;
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
}`,nm=`#define LAMBERT
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
}`,im=`#define LAMBERT
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
}`,sm=`#define MATCAP
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
}`,om=`#define MATCAP
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
}`,rm=`#define NORMAL
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
}`,am=`#define NORMAL
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
}`,cm=`#define PHONG
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
}`,lm=`#define PHONG
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
}`,hm=`#define STANDARD
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
}`,um=`#define STANDARD
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
}`,dm=`#define TOON
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
}`,fm=`#define TOON
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
}`,pm=`uniform float size;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,_m=`uniform vec3 color;
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
}`,vm=`uniform float rotation;
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
}`,xm=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:Bd,alphahash_pars_fragment:Hd,alphamap_fragment:Gd,alphamap_pars_fragment:Vd,alphatest_fragment:Wd,alphatest_pars_fragment:Xd,aomap_fragment:$d,aomap_pars_fragment:qd,batching_pars_vertex:Yd,batching_vertex:jd,begin_vertex:Zd,beginnormal_vertex:Kd,bsdfs:Jd,iridescence_fragment:Qd,bumpmap_pars_fragment:tf,clipping_planes_fragment:ef,clipping_planes_pars_fragment:nf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:of,color_fragment:rf,color_pars_fragment:af,color_pars_vertex:cf,color_vertex:lf,common:hf,cube_uv_reflection_fragment:uf,defaultnormal_vertex:df,displacementmap_pars_vertex:ff,displacementmap_vertex:pf,emissivemap_fragment:mf,emissivemap_pars_fragment:gf,colorspace_fragment:_f,colorspace_pars_fragment:vf,envmap_fragment:xf,envmap_common_pars_fragment:Mf,envmap_pars_fragment:yf,envmap_pars_vertex:bf,envmap_physical_pars_fragment:If,envmap_vertex:Sf,fog_vertex:wf,fog_pars_vertex:Ef,fog_fragment:Tf,fog_pars_fragment:Af,gradientmap_pars_fragment:Rf,lightmap_pars_fragment:Cf,lights_lambert_fragment:Pf,lights_lambert_pars_fragment:Lf,lights_pars_begin:Df,lights_toon_fragment:Uf,lights_toon_pars_fragment:Nf,lights_phong_fragment:Of,lights_phong_pars_fragment:Ff,lights_physical_fragment:kf,lights_physical_pars_fragment:zf,lights_fragment_begin:Bf,lights_fragment_maps:Hf,lights_fragment_end:Gf,logdepthbuf_fragment:Vf,logdepthbuf_pars_fragment:Wf,logdepthbuf_pars_vertex:Xf,logdepthbuf_vertex:$f,map_fragment:qf,map_pars_fragment:Yf,map_particle_fragment:jf,map_particle_pars_fragment:Zf,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:Jf,morphinstance_vertex:Qf,morphcolor_vertex:tp,morphnormal_vertex:ep,morphtarget_pars_vertex:np,morphtarget_vertex:ip,normal_fragment_begin:sp,normal_fragment_maps:op,normal_pars_fragment:rp,normal_pars_vertex:ap,normal_vertex:cp,normalmap_pars_fragment:lp,clearcoat_normal_fragment_begin:hp,clearcoat_normal_fragment_maps:up,clearcoat_pars_fragment:dp,iridescence_pars_fragment:fp,opaque_fragment:pp,packing:mp,premultiplied_alpha_fragment:gp,project_vertex:_p,dithering_fragment:vp,dithering_pars_fragment:xp,roughnessmap_fragment:Mp,roughnessmap_pars_fragment:yp,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:Sp,shadowmap_vertex:wp,shadowmask_pars_fragment:Ep,skinbase_vertex:Tp,skinning_pars_vertex:Ap,skinning_vertex:Rp,skinnormal_vertex:Cp,specularmap_fragment:Pp,specularmap_pars_fragment:Lp,tonemapping_fragment:Dp,tonemapping_pars_fragment:Ip,transmission_fragment:Up,transmission_pars_fragment:Np,uv_pars_fragment:Op,uv_pars_vertex:Fp,uv_vertex:kp,worldpos_vertex:zp,background_vert:Bp,background_frag:Hp,backgroundCube_vert:Gp,backgroundCube_frag:Vp,cube_vert:Wp,cube_frag:Xp,depth_vert:$p,depth_frag:qp,distanceRGBA_vert:Yp,distanceRGBA_frag:jp,equirect_vert:Zp,equirect_frag:Kp,linedashed_vert:Jp,linedashed_frag:Qp,meshbasic_vert:tm,meshbasic_frag:em,meshlambert_vert:nm,meshlambert_frag:im,meshmatcap_vert:sm,meshmatcap_frag:om,meshnormal_vert:rm,meshnormal_frag:am,meshphong_vert:cm,meshphong_frag:lm,meshphysical_vert:hm,meshphysical_frag:um,meshtoon_vert:dm,meshtoon_frag:fm,points_vert:pm,points_frag:mm,shadow_vert:gm,shadow_frag:_m,sprite_vert:vm,sprite_frag:xm},vt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},An={basic:{uniforms:Ye([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Ye([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Ye([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Ye([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Ye([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Ye([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Ye([vt.points,vt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Ye([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Ye([vt.common,vt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Ye([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Ye([vt.sprite,vt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Ye([vt.common,vt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Ye([vt.lights,vt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};An.physical={uniforms:Ye([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const Ro={r:0,b:0,g:0},Mi=new In,Mm=new he;function ym(i,t,e,n,s,o,r){const a=new Ht(0);let c=o===!0?0:1,l,h,f=null,u=0,d=null;function m(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function _(x){let M=!1;const v=m(x);v===null?p(a,c):v&&v.isColor&&(p(v,1),M=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,M){const v=m(M);v&&(v.isCubeTexture||v.mapping===ar)?(h===void 0&&(h=new Z(new Xt(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:bs(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Mi.copy(M.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(Mi)),h.material.toneMapped=ue.getTransfer(v.colorSpace)!==ve,(f!==v||u!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,u=v.version,d=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Z(new jn(2,2),new Yn({name:"BackgroundMaterial",uniforms:bs(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ue.getTransfer(v.colorSpace)!==ve,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,M){x.getRGB(Ro,kh(i)),n.buffers.color.setClear(Ro.r,Ro.g,Ro.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:_,addToRenderList:g}}function bm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let o=s,r=!1;function a(S,P,B,U,G){let $=!1;const N=f(U,B,P);o!==N&&(o=N,l(o.object)),$=d(S,U,B,G),$&&m(S,U,B,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,v(S,P,B,U),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function f(S,P,B){const U=B.wireframe===!0;let G=n[S.id];G===void 0&&(G={},n[S.id]=G);let $=G[P.id];$===void 0&&($={},G[P.id]=$);let N=$[U];return N===void 0&&(N=u(c()),$[U]=N),N}function u(S){const P=[],B=[],U=[];for(let G=0;G<e;G++)P[G]=0,B[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:U,object:S,attributes:{},index:null}}function d(S,P,B,U){const G=o.attributes,$=P.attributes;let N=0;const q=B.getAttributes();for(const W in q)if(q[W].location>=0){const mt=G[W];let yt=$[W];if(yt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor)),mt===void 0||mt.attribute!==yt||yt&&mt.data!==yt.data)return!0;N++}return o.attributesNum!==N||o.index!==U}function m(S,P,B,U){const G={},$=P.attributes;let N=0;const q=B.getAttributes();for(const W in q)if(q[W].location>=0){let mt=$[W];mt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(mt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(mt=S.instanceColor));const yt={};yt.attribute=mt,mt&&mt.data&&(yt.data=mt.data),G[W]=yt,N++}o.attributes=G,o.attributesNum=N,o.index=U}function _(){const S=o.newAttributes;for(let P=0,B=S.length;P<B;P++)S[P]=0}function g(S){p(S,0)}function p(S,P){const B=o.newAttributes,U=o.enabledAttributes,G=o.attributeDivisors;B[S]=1,U[S]===0&&(i.enableVertexAttribArray(S),U[S]=1),G[S]!==P&&(i.vertexAttribDivisor(S,P),G[S]=P)}function x(){const S=o.newAttributes,P=o.enabledAttributes;for(let B=0,U=P.length;B<U;B++)P[B]!==S[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function M(S,P,B,U,G,$,N){N===!0?i.vertexAttribIPointer(S,P,B,G,$):i.vertexAttribPointer(S,P,B,U,G,$)}function v(S,P,B,U){_();const G=U.attributes,$=B.getAttributes(),N=P.defaultAttributeValues;for(const q in $){const W=$[q];if(W.location>=0){let lt=G[q];if(lt===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),lt!==void 0){const mt=lt.normalized,yt=lt.itemSize,Ut=t.get(lt);if(Ut===void 0)continue;const Bt=Ut.buffer,j=Ut.type,ot=Ut.bytesPerElement,Tt=j===i.INT||j===i.UNSIGNED_INT||lt.gpuType===Ka;if(lt.isInterleavedBufferAttribute){const it=lt.data,At=it.stride,Vt=lt.offset;if(it.isInstancedInterleavedBuffer){for(let Ft=0;Ft<W.locationSize;Ft++)p(W.location+Ft,it.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ft=0;Ft<W.locationSize;Ft++)g(W.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let Ft=0;Ft<W.locationSize;Ft++)M(W.location+Ft,yt/W.locationSize,j,mt,At*ot,(Vt+yt/W.locationSize*Ft)*ot,Tt)}else{if(lt.isInstancedBufferAttribute){for(let it=0;it<W.locationSize;it++)p(W.location+it,lt.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let it=0;it<W.locationSize;it++)g(W.location+it);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let it=0;it<W.locationSize;it++)M(W.location+it,yt/W.locationSize,j,mt,yt*ot,yt/W.locationSize*it*ot,Tt)}}else if(N!==void 0){const mt=N[q];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(W.location,mt);break;case 3:i.vertexAttrib3fv(W.location,mt);break;case 4:i.vertexAttrib4fv(W.location,mt);break;default:i.vertexAttrib1fv(W.location,mt)}}}}x()}function A(){R();for(const S in n){const P=n[S];for(const B in P){const U=P[B];for(const G in U)h(U[G].object),delete U[G];delete P[B]}delete n[S]}}function y(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const B in P){const U=P[B];for(const G in U)h(U[G].object),delete U[G];delete P[B]}delete n[S.id]}function E(S){for(const P in n){const B=n[P];if(B[S.id]===void 0)continue;const U=B[S.id];for(const G in U)h(U[G].object),delete U[G];delete B[S.id]}}function R(){w(),r=!0,o!==s&&(o=s,l(o.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:y,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function Sm(i,t,e){let n;function s(l){n=l}function o(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function a(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];e.update(d,n,1)}function c(l,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)r(l[m],h[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_]*u[_];e.update(m,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wm(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(E){return!(E!==yn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===ro&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==qn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Cn&&!R)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:A,maxSamples:y}}function Em(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new ai,a=new ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||o&&!g)o?h(null):l();else{const x=o?0:n,M=x*4;let v=p.clippingState||null;c.value=v,v=h(m,u,M,d);for(let A=0;A!==M;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=d+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=d;M!==_;++M,v+=4)r.copy(f[M]).applyMatrix4(x,a),r.normal.toArray(g,v),g[v+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Tm(i){let t=new WeakMap;function e(r,a){return a===ua?r.mapping=gs:a===da&&(r.mapping=_s),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ua||a===da)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Od(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Vh extends Bh{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cs=4,qc=[.125,.215,.35,.446,.526,.582],Ti=20,Or=new Vh,Yc=new Ht;let Fr=null,kr=0,zr=0,Br=!1;const Si=(1+Math.sqrt(5))/2,Qi=1/Si,jc=[new D(-Si,Qi,0),new D(Si,Qi,0),new D(-Qi,0,Si),new D(Qi,0,Si),new D(0,Si,-Qi),new D(0,Si,Qi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Ha{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Fr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),Br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fr,kr,zr),this._renderer.xr.enabled=Br,t.scissorTest=!1,Co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),Br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:ro,format:yn,colorSpace:Es,depthBuffer:!1},s=Zc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zc(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Am(o)),this._blurMaterial=Rm(o,t,e)}return s}_compileMaterial(t){const e=new Z(this._lodPlanes[0],t);this._renderer.compile(e,Or)}_sceneToCubeUV(t,e,n,s){const a=new sn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Yc),h.toneMapping=di,h.autoClear=!1;const d=new Di({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),m=new Z(new Xt,d);let _=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(Yc),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;Co(s,x*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===gs||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Z(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Co(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Or)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=jc[(s-o-1)%jc.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Z(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Ti-1),_=o/m,g=isFinite(o)?1+Math.floor(h*_):Ti;g>Ti&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ti}`);const p=[];let x=0;for(let E=0;E<Ti;++E){const R=E/_,w=Math.exp(-R*R/2);p.push(w),E===0?x+=w:E<g&&(x+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=m,u.mipInt.value=M-n;const v=this._sizeLods[s],A=3*v*(s>M-cs?s-M+cs:0),y=4*(this._cubeSize-v);Co(e,A,y,3*v,2*v),c.setRenderTarget(e),c.render(f,Or)}}function Am(i){const t=[],e=[],n=[];let s=i;const o=i-cs+1+qc.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-cs?c=qc[r-i+cs-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*d),M=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let y=0;y<d;y++){const E=y%3*2/3-1,R=y>2?0:-1,w=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];x.set(w,_*m*y),M.set(u,g*m*y);const S=[y,y,y,y,y,y];v.set(S,p*m*y)}const A=new _e;A.setAttribute("position",new Xe(x,_)),A.setAttribute("uv",new Xe(M,g)),A.setAttribute("faceIndex",new Xe(v,p)),t.push(A),s>cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zc(i,t,e){const n=new Li(i,t,e);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Co(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rm(i,t,e){const n=new Float32Array(Ti),s=new D(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ac(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Kc(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Jc(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}function Cm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ua||c===da,h=c===gs||c===_s;if(l||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ha(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Ha(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Pm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&qs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lm(i,t,e,n){const s={},o=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const _=u.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}u.removeEventListener("dispose",r),delete s[u.id];const d=o.get(u);d&&(t.remove(d),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const m in u)t.update(u[m],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const m in d){const _=d[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],i.ARRAY_BUFFER)}}function l(f){const u=[],d=f.index,m=f.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let M=0,v=x.length;M<v;M+=3){const A=x[M+0],y=x[M+1],E=x[M+2];u.push(A,y,y,E,E,A)}}else if(m!==void 0){const x=m.array;_=m.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const A=M+0,y=M+1,E=M+2;u.push(A,y,y,E,E,A)}}else return;const g=new(Dh(u)?Fh:Oh)(u,1);g.version=_;const p=o.get(f);p&&t.remove(p),o.set(f,g)}function h(f){const u=o.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return o.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Dm(i,t,e){let n;function s(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function c(u,d){i.drawElements(n,d,o,u*r),e.update(d,n,1)}function l(u,d,m){m!==0&&(i.drawElementsInstanced(n,d,o,u*r,m),e.update(d,n,m))}function h(u,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,u,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function f(u,d,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)l(u[p]/r,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,o,u,0,_,0,m);let p=0;for(let x=0;x<m;x++)p+=d[x]*_[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Im(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Um(i,t,e){const n=new WeakMap,s=new Ee;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let A=a.attributes.position.count*v,y=1;A>t.maxTextureSize&&(y=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const E=new Float32Array(A*y*4*f),R=new Uh(E,A,y,f);R.type=Cn,R.needsUpdate=!0;const w=v*4;for(let P=0;P<f;P++){const B=p[P],U=x[P],G=M[P],$=A*y*4*P;for(let N=0;N<B.count;N++){const q=N*w;m===!0&&(s.fromBufferAttribute(B,N),E[$+q+0]=s.x,E[$+q+1]=s.y,E[$+q+2]=s.z,E[$+q+3]=0),_===!0&&(s.fromBufferAttribute(U,N),E[$+q+4]=s.x,E[$+q+5]=s.y,E[$+q+6]=s.z,E[$+q+7]=0),g===!0&&(s.fromBufferAttribute(G,N),E[$+q+8]=s.x,E[$+q+9]=s.y,E[$+q+10]=s.z,E[$+q+11]=G.itemSize===4?s.w:1)}}u={count:f,texture:R,size:new nt(A,y)},n.set(a,u),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:o}}function Nm(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Wh extends We{constructor(t,e,n,s,o,r,a,c,l,h=fs){if(h!==fs&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fs&&(n=Pi),n===void 0&&h===xs&&(n=vs),super(null,s,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xh=new We,Qc=new Wh(1,1),$h=new Uh,qh=new yd,Yh=new Hh,tl=[],el=[],nl=new Float32Array(16),il=new Float32Array(9),sl=new Float32Array(4);function Rs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=tl[s];if(o===void 0&&(o=new Float32Array(s),tl[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hr(i,t){let e=el[t];e===void 0&&(e=new Int32Array(t),el[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Om(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function Bm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;sl.set(n),i.uniformMatrix2fv(this.addr,!1,sl),Ne(e,n)}}function Hm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;il.set(n),i.uniformMatrix3fv(this.addr,!1,il),Ne(e,n)}}function Gm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;nl.set(n),i.uniformMatrix4fv(this.addr,!1,nl),Ne(e,n)}}function Vm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function Xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function qm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function Km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Qc.compareFunction=Lh,o=Qc):o=Xh,e.setTexture2D(t||o,s)}function Jm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qh,s)}function Qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yh,s)}function t0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$h,s)}function e0(i){switch(i){case 5126:return Om;case 35664:return Fm;case 35665:return km;case 35666:return zm;case 35674:return Bm;case 35675:return Hm;case 35676:return Gm;case 5124:case 35670:return Vm;case 35667:case 35671:return Wm;case 35668:case 35672:return Xm;case 35669:case 35673:return $m;case 5125:return qm;case 36294:return Ym;case 36295:return jm;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return t0}}function n0(i,t){i.uniform1fv(this.addr,t)}function i0(i,t){const e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function s0(i,t){const e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function o0(i,t){const e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function r0(i,t){const e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function a0(i,t){const e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function c0(i,t){const e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function l0(i,t){i.uniform1iv(this.addr,t)}function h0(i,t){i.uniform2iv(this.addr,t)}function u0(i,t){i.uniform3iv(this.addr,t)}function d0(i,t){i.uniform4iv(this.addr,t)}function f0(i,t){i.uniform1uiv(this.addr,t)}function p0(i,t){i.uniform2uiv(this.addr,t)}function m0(i,t){i.uniform3uiv(this.addr,t)}function g0(i,t){i.uniform4uiv(this.addr,t)}function _0(i,t,e){const n=this.cache,s=t.length,o=hr(e,s);Ue(n,o)||(i.uniform1iv(this.addr,o),Ne(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Xh,o[r])}function v0(i,t,e){const n=this.cache,s=t.length,o=hr(e,s);Ue(n,o)||(i.uniform1iv(this.addr,o),Ne(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||qh,o[r])}function x0(i,t,e){const n=this.cache,s=t.length,o=hr(e,s);Ue(n,o)||(i.uniform1iv(this.addr,o),Ne(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Yh,o[r])}function M0(i,t,e){const n=this.cache,s=t.length,o=hr(e,s);Ue(n,o)||(i.uniform1iv(this.addr,o),Ne(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||$h,o[r])}function y0(i){switch(i){case 5126:return n0;case 35664:return i0;case 35665:return s0;case 35666:return o0;case 35674:return r0;case 35675:return a0;case 35676:return c0;case 5124:case 35670:return l0;case 35667:case 35671:return h0;case 35668:case 35672:return u0;case 35669:case 35673:return d0;case 5125:return f0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return M0}}class b0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=e0(e.type)}}class S0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=y0(e.type)}}class w0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Hr=/(\w+)(\])?(\[|\.)?/g;function ol(i,t){i.seq.push(t),i.map[t.id]=t}function E0(i,t,e){const n=i.name,s=n.length;for(Hr.lastIndex=0;;){const o=Hr.exec(n),r=Hr.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){ol(e,l===void 0?new b0(a,i,t):new S0(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new w0(a),ol(e,f)),e=f}}}class Qo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);E0(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function rl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const T0=37297;let A0=0;function R0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const al=new ne;function C0(i){ue._getMatrix(al,ue.workingColorSpace,i);const t=`mat3( ${al.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case cr:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+R0(i.getShaderSource(t),r)}else return s}function P0(i,t){const e=C0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function L0(i,t){let e;switch(t){case Uu:e="Linear";break;case Nu:e="Reinhard";break;case Ou:e="Cineon";break;case xh:e="ACESFilmic";break;case ku:e="AgX";break;case zu:e="Neutral";break;case Fu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Po=new D;function D0(){ue.getLuminanceCoefficients(Po);const i=Po.x.toFixed(4),t=Po.y.toFixed(4),e=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function U0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function N0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Ys(i){return i!==""}function ll(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(i){return i.replace(O0,k0)}const F0=new Map;function k0(i,t){let e=se[t];if(e===void 0){const n=F0.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ga(e)}const z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(i){return i.replace(z0,B0)}function B0(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function dl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function H0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===_h?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function G0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gs:case _s:t="ENVMAP_TYPE_CUBE";break;case ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function V0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function W0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vh:t="ENVMAP_BLENDING_MULTIPLY";break;case Du:t="ENVMAP_BLENDING_MIX";break;case Iu:t="ENVMAP_BLENDING_ADD";break}return t}function X0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function $0(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=H0(e),l=G0(e),h=V0(e),f=W0(e),u=X0(e),d=I0(e),m=U0(o),_=s.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ys).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ys).join(`
`),p.length>0&&(p+=`
`)):(g=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),p=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?se.tonemapping_pars_fragment:"",e.toneMapping!==di?L0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,P0("linearToOutputTexel",e.outputColorSpace),D0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ys).join(`
`)),r=Ga(r),r=ll(r,e),r=hl(r,e),a=Ga(a),a=ll(a,e),a=hl(a,e),r=ul(r),a=ul(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+g+r,v=x+p+a,A=rl(s,s.VERTEX_SHADER,M),y=rl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,y),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(P){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(A).trim(),G=s.getShaderInfoLog(y).trim();let $=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,y);else{const q=cl(s,A,"vertex"),W=cl(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+q+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(U===""||G==="")&&(N=!1);N&&(P.diagnostics={runnable:$,programLog:B,vertexShader:{log:U,prefix:g},fragmentShader:{log:G,prefix:p}})}s.deleteShader(A),s.deleteShader(y),R=new Qo(s,_),w=N0(s,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,T0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=A0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=y,this}let q0=0;class Y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new j0(t),e.set(t,n)),n}}class j0{constructor(t){this.id=q0++,this.code=t,this.usedTimes=0}}function Z0(i,t,e,n,s,o,r){const a=new oc,c=new Y0,l=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,S,P,B,U){const G=B.fog,$=U.geometry,N=w.isMeshStandardMaterial?B.environment:null,q=(w.isMeshStandardMaterial?e:t).get(w.envMap||N),W=q&&q.mapping===ar?q.image.height:null,lt=m[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,yt=mt!==void 0?mt.length:0;let Ut=0;$.morphAttributes.position!==void 0&&(Ut=1),$.morphAttributes.normal!==void 0&&(Ut=2),$.morphAttributes.color!==void 0&&(Ut=3);let Bt,j,ot,Tt;if(lt){const de=An[lt];Bt=de.vertexShader,j=de.fragmentShader}else Bt=w.vertexShader,j=w.fragmentShader,c.update(w),ot=c.getVertexShaderID(w),Tt=c.getFragmentShaderID(w);const it=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Vt=U.isInstancedMesh===!0,Ft=U.isBatchedMesh===!0,Jt=!!w.map,Q=!!w.matcap,ct=!!q,L=!!w.aoMap,ft=!!w.lightMap,st=!!w.bumpMap,wt=!!w.normalMap,ht=!!w.displacementMap,Gt=!!w.emissiveMap,pt=!!w.metalnessMap,C=!!w.roughnessMap,b=w.anisotropy>0,k=w.clearcoat>0,K=w.dispersion>0,et=w.iridescence>0,J=w.sheen>0,Ct=w.transmission>0,gt=b&&!!w.anisotropyMap,Rt=k&&!!w.clearcoatMap,oe=k&&!!w.clearcoatNormalMap,rt=k&&!!w.clearcoatRoughnessMap,Et=et&&!!w.iridescenceMap,Nt=et&&!!w.iridescenceThicknessMap,qt=J&&!!w.sheenColorMap,Dt=J&&!!w.sheenRoughnessMap,ae=!!w.specularMap,Yt=!!w.specularColorMap,Qt=!!w.specularIntensityMap,I=Ct&&!!w.transmissionMap,_t=Ct&&!!w.thicknessMap,Y=!!w.gradientMap,tt=!!w.alphaMap,xt=w.alphaTest>0,bt=!!w.alphaHash,jt=!!w.extensions;let Me=di;w.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Me=i.toneMapping);const Ae={shaderID:lt,shaderType:w.type,shaderName:w.name,vertexShader:Bt,fragmentShader:j,defines:w.defines,customVertexShaderID:ot,customFragmentShaderID:Tt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Ft,batchingColor:Ft&&U._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&U.instanceColor!==null,instancingMorph:Vt&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Es,alphaToCoverage:!!w.alphaToCoverage,map:Jt,matcap:Q,envMap:ct,envMapMode:ct&&q.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:ft,bumpMap:st,normalMap:wt,displacementMap:u&&ht,emissiveMap:Gt,normalMapObjectSpace:wt&&w.normalMapType===Vu,normalMapTangentSpace:wt&&w.normalMapType===Ph,metalnessMap:pt,roughnessMap:C,anisotropy:b,anisotropyMap:gt,clearcoat:k,clearcoatMap:Rt,clearcoatNormalMap:oe,clearcoatRoughnessMap:rt,dispersion:K,iridescence:et,iridescenceMap:Et,iridescenceThicknessMap:Nt,sheen:J,sheenColorMap:qt,sheenRoughnessMap:Dt,specularMap:ae,specularColorMap:Yt,specularIntensityMap:Qt,transmission:Ct,transmissionMap:I,thicknessMap:_t,gradientMap:Y,opaque:w.transparent===!1&&w.blending===ds&&w.alphaToCoverage===!1,alphaMap:tt,alphaTest:xt,alphaHash:bt,combine:w.combine,mapUv:Jt&&_(w.map.channel),aoMapUv:L&&_(w.aoMap.channel),lightMapUv:ft&&_(w.lightMap.channel),bumpMapUv:st&&_(w.bumpMap.channel),normalMapUv:wt&&_(w.normalMap.channel),displacementMapUv:ht&&_(w.displacementMap.channel),emissiveMapUv:Gt&&_(w.emissiveMap.channel),metalnessMapUv:pt&&_(w.metalnessMap.channel),roughnessMapUv:C&&_(w.roughnessMap.channel),anisotropyMapUv:gt&&_(w.anisotropyMap.channel),clearcoatMapUv:Rt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(w.sheenRoughnessMap.channel),specularMapUv:ae&&_(w.specularMap.channel),specularColorMapUv:Yt&&_(w.specularColorMap.channel),specularIntensityMapUv:Qt&&_(w.specularIntensityMap.channel),transmissionMapUv:I&&_(w.transmissionMap.channel),thicknessMapUv:_t&&_(w.thicknessMap.channel),alphaMapUv:tt&&_(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(wt||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!$.attributes.uv&&(Jt||tt),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:At,skinning:U.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ut,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:Jt&&w.map.isVideoTexture===!0&&ue.getTransfer(w.map.colorSpace)===ve,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&ue.getTransfer(w.emissiveMap.colorSpace)===ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ie,flipSided:w.side===je,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:jt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&w.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)S.push(P),S.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(x(S,w),M(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function x(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function M(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const S=m[w.type];let P;if(S){const B=An[S];P=zh.clone(B.uniforms)}else P=w.uniforms;return P}function A(w,S){let P;for(let B=0,U=h.length;B<U;B++){const G=h[B];if(G.cacheKey===S){P=G,++P.usedTimes;break}}return P===void 0&&(P=new $0(i,S,w,o),h.push(P)),P}function y(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function E(w){c.remove(w)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:y,releaseShaderCache:E,programs:h,dispose:R}}function K0(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function J0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pl(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(f,u,d,m,_,g){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:m,renderOrder:f.renderOrder,z:_,group:g},i[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=_,p.group=g),t++,p}function a(f,u,d,m,_,g){const p=r(f,u,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(f,u,d,m,_,g){const p=r(f,u,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(f,u){e.length>1&&e.sort(f||J0),n.length>1&&n.sort(u||fl),s.length>1&&s.sort(u||fl)}function h(){for(let f=t,u=i.length;f<u;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function Q0(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new pl,i.set(n,[r])):s>=o.length?(r=new pl,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function tg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ht};break;case"SpotLight":e={position:new D,direction:new D,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function eg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ng=0;function ig(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function sg(i){const t=new tg,e=eg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,o=new he,r=new he;function a(l){let h=0,f=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,x=0,M=0,v=0,A=0,y=0,E=0;l.sort(ig);for(let w=0,S=l.length;w<S;w++){const P=l[w],B=P.color,U=P.intensity,G=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=B.r*U,f+=B.g*U,u+=B.b*U;else if(P.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(P.sh.coefficients[N],U);E++}else if(P.isDirectionalLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,W=e.get(P);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=P.shadow.matrix,x++}n.directional[d]=N,d++}else if(P.isSpotLight){const N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(B).multiplyScalar(U),N.distance=G,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,n.spot[_]=N;const q=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,q.updateMatrices(P),P.castShadow&&y++),n.spotLightMatrix[_]=q.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=$,v++}_++}else if(P.isRectAreaLight){const N=t.get(P);N.color.copy(B).multiplyScalar(U),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=N,g++}else if(P.isPointLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const q=P.shadow,W=e.get(P);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=P.shadow.matrix,M++}n.point[m]=N,m++}else if(P.isHemisphereLight){const N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(U),N.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[p]=N,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==d||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==M||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+A-y,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=E,R.directionalLength=d,R.pointLength=m,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=M,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=E,n.version=ng++)}function c(l,h){let f=0,u=0,d=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const M=l[p];if(M.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(M.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(M.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),r.identity(),o.copy(M.matrixWorld),o.premultiply(g),r.extractRotation(o),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),m++}else if(M.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function ml(i){const t=new sg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function og(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new ml(i),t.set(s,[a])):o>=r.length?(a=new ml(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class rg extends As{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ag extends As{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lg=`uniform sampler2D shadow_pass;
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
}`;function hg(i,t,e){let n=new rc;const s=new nt,o=new nt,r=new Ee,a=new rg({depthPacking:Gu}),c=new ag,l={},h=e.maxTextureSize,f={[fi]:je,[je]:fi,[Ie]:Ie},u=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:cg,fragmentShader:lg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new _e;m.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Z(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gh;let p=this.type;this.render=function(y,E,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;const w=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ui),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const U=p!==Wn&&this.type===Wn,G=p===Wn&&this.type!==Wn;for(let $=0,N=y.length;$<N;$++){const q=y[$],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const lt=W.getFrameExtents();if(s.multiply(lt),o.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/lt.x),s.x=o.x*lt.x,W.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/lt.y),s.y=o.y*lt.y,W.mapSize.y=o.y)),W.map===null||U===!0||G===!0){const yt=this.type!==Wn?{minFilter:on,magFilter:on}:{};W.map!==null&&W.map.dispose(),W.map=new Li(s.x,s.y,yt),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const mt=W.getViewportCount();for(let yt=0;yt<mt;yt++){const Ut=W.getViewport(yt);r.set(o.x*Ut.x,o.y*Ut.y,o.x*Ut.z,o.y*Ut.w),B.viewport(r),W.updateMatrices(q,yt),n=W.getFrustum(),v(E,R,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Wn&&x(W,R),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,S,P)};function x(y,E){const R=t.update(_);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Li(s.x,s.y)),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(E,null,R,u,_,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(E,null,R,d,_,null)}function M(y,E,R,w){let S=null;const P=R.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(P!==void 0)S=P;else if(S=R.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const B=S.uuid,U=E.uuid;let G=l[B];G===void 0&&(G={},l[B]=G);let $=G[U];$===void 0&&($=S.clone(),G[U]=$,E.addEventListener("dispose",A)),S=$}if(S.visible=E.visible,S.wireframe=E.wireframe,w===Wn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:f[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=i.properties.get(S);B.light=R}return S}function v(y,E,R,w,S){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===Wn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,y.matrixWorld);const U=t.update(y),G=y.material;if(Array.isArray(G)){const $=U.groups;for(let N=0,q=$.length;N<q;N++){const W=$[N],lt=G[W.materialIndex];if(lt&&lt.visible){const mt=M(y,lt,w,S);y.onBeforeShadow(i,y,E,R,U,mt,W),i.renderBufferDirect(R,null,U,mt,y,W),y.onAfterShadow(i,y,E,R,U,mt,W)}}}else if(G.visible){const $=M(y,G,w,S);y.onBeforeShadow(i,y,E,R,U,$,null),i.renderBufferDirect(R,null,U,$,y,null),y.onAfterShadow(i,y,E,R,U,$,null)}}const B=y.children;for(let U=0,G=B.length;U<G;U++)v(B[U],E,R,w,S)}function A(y){y.target.removeEventListener("dispose",A);for(const R in l){const w=l[R],S=y.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const ug={[sa]:oa,[ra]:la,[aa]:ha,[ms]:ca,[oa]:sa,[la]:ra,[ha]:aa,[ca]:ms};function dg(i,t){function e(){let I=!1;const _t=new Ee;let Y=null;const tt=new Ee(0,0,0,0);return{setMask:function(xt){Y!==xt&&!I&&(i.colorMask(xt,xt,xt,xt),Y=xt)},setLocked:function(xt){I=xt},setClear:function(xt,bt,jt,Me,Ae){Ae===!0&&(xt*=Me,bt*=Me,jt*=Me),_t.set(xt,bt,jt,Me),tt.equals(_t)===!1&&(i.clearColor(xt,bt,jt,Me),tt.copy(_t))},reset:function(){I=!1,Y=null,tt.set(-1,0,0,0)}}}function n(){let I=!1,_t=!1,Y=null,tt=null,xt=null;return{setReversed:function(bt){if(_t!==bt){const jt=t.get("EXT_clip_control");_t?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const Me=xt;xt=null,this.setClear(Me)}_t=bt},getReversed:function(){return _t},setTest:function(bt){bt?it(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(bt){Y!==bt&&!I&&(i.depthMask(bt),Y=bt)},setFunc:function(bt){if(_t&&(bt=ug[bt]),tt!==bt){switch(bt){case sa:i.depthFunc(i.NEVER);break;case oa:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case ms:i.depthFunc(i.LEQUAL);break;case aa:i.depthFunc(i.EQUAL);break;case ca:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=bt}},setLocked:function(bt){I=bt},setClear:function(bt){xt!==bt&&(_t&&(bt=1-bt),i.clearDepth(bt),xt=bt)},reset:function(){I=!1,Y=null,tt=null,xt=null,_t=!1}}}function s(){let I=!1,_t=null,Y=null,tt=null,xt=null,bt=null,jt=null,Me=null,Ae=null;return{setTest:function(de){I||(de?it(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(de){_t!==de&&!I&&(i.stencilMask(de),_t=de)},setFunc:function(de,$e,rn){(Y!==de||tt!==$e||xt!==rn)&&(i.stencilFunc(de,$e,rn),Y=de,tt=$e,xt=rn)},setOp:function(de,$e,rn){(bt!==de||jt!==$e||Me!==rn)&&(i.stencilOp(de,$e,rn),bt=de,jt=$e,Me=rn)},setLocked:function(de){I=de},setClear:function(de){Ae!==de&&(i.clearStencil(de),Ae=de)},reset:function(){I=!1,_t=null,Y=null,tt=null,xt=null,bt=null,jt=null,Me=null,Ae=null}}}const o=new e,r=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},f={},u=new WeakMap,d=[],m=null,_=!1,g=null,p=null,x=null,M=null,v=null,A=null,y=null,E=new Ht(0,0,0),R=0,w=!1,S=null,P=null,B=null,U=null,G=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,q=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),N=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),N=q>=2);let lt=null,mt={};const yt=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),Bt=new Ee().fromArray(yt),j=new Ee().fromArray(Ut);function ot(I,_t,Y,tt){const xt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(I,bt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<Y;jt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(_t+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return bt}const Tt={};Tt[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),it(i.DEPTH_TEST),r.setFunc(ms),st(!1),wt(xc),it(i.CULL_FACE),L(ui);function it(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function At(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Vt(I,_t){return f[I]!==_t?(i.bindFramebuffer(I,_t),f[I]=_t,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=_t),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function Ft(I,_t){let Y=d,tt=!1;if(I){Y=u.get(_t),Y===void 0&&(Y=[],u.set(_t,Y));const xt=I.textures;if(Y.length!==xt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,jt=xt.length;bt<jt;bt++)Y[bt]=i.COLOR_ATTACHMENT0+bt;Y.length=xt.length,tt=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,tt=!0);tt&&i.drawBuffers(Y)}function Jt(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const Q={[Ei]:i.FUNC_ADD,[mu]:i.FUNC_SUBTRACT,[gu]:i.FUNC_REVERSE_SUBTRACT};Q[_u]=i.MIN,Q[vu]=i.MAX;const ct={[xu]:i.ZERO,[Mu]:i.ONE,[yu]:i.SRC_COLOR,[na]:i.SRC_ALPHA,[Au]:i.SRC_ALPHA_SATURATE,[Eu]:i.DST_COLOR,[Su]:i.DST_ALPHA,[bu]:i.ONE_MINUS_SRC_COLOR,[ia]:i.ONE_MINUS_SRC_ALPHA,[Tu]:i.ONE_MINUS_DST_COLOR,[wu]:i.ONE_MINUS_DST_ALPHA,[Ru]:i.CONSTANT_COLOR,[Cu]:i.ONE_MINUS_CONSTANT_COLOR,[Pu]:i.CONSTANT_ALPHA,[Lu]:i.ONE_MINUS_CONSTANT_ALPHA};function L(I,_t,Y,tt,xt,bt,jt,Me,Ae,de){if(I===ui){_===!0&&(At(i.BLEND),_=!1);return}if(_===!1&&(it(i.BLEND),_=!0),I!==pu){if(I!==g||de!==w){if((p!==Ei||v!==Ei)&&(i.blendEquation(i.FUNC_ADD),p=Ei,v=Ei),de)switch(I){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mc:i.blendFunc(i.ONE,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,M=null,A=null,y=null,E.set(0,0,0),R=0,g=I,w=de}return}xt=xt||_t,bt=bt||Y,jt=jt||tt,(_t!==p||xt!==v)&&(i.blendEquationSeparate(Q[_t],Q[xt]),p=_t,v=xt),(Y!==x||tt!==M||bt!==A||jt!==y)&&(i.blendFuncSeparate(ct[Y],ct[tt],ct[bt],ct[jt]),x=Y,M=tt,A=bt,y=jt),(Me.equals(E)===!1||Ae!==R)&&(i.blendColor(Me.r,Me.g,Me.b,Ae),E.copy(Me),R=Ae),g=I,w=!1}function ft(I,_t){I.side===Ie?At(i.CULL_FACE):it(i.CULL_FACE);let Y=I.side===je;_t&&(Y=!Y),st(Y),I.blending===ds&&I.transparent===!1?L(ui):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),o.setMask(I.colorWrite);const tt=I.stencilWrite;a.setTest(tt),tt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Gt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(I){S!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),S=I)}function wt(I){I!==du?(it(i.CULL_FACE),I!==P&&(I===xc?i.cullFace(i.BACK):I===fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),P=I}function ht(I){I!==B&&(N&&i.lineWidth(I),B=I)}function Gt(I,_t,Y){I?(it(i.POLYGON_OFFSET_FILL),(U!==_t||G!==Y)&&(i.polygonOffset(_t,Y),U=_t,G=Y)):At(i.POLYGON_OFFSET_FILL)}function pt(I){I?it(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function C(I){I===void 0&&(I=i.TEXTURE0+$-1),lt!==I&&(i.activeTexture(I),lt=I)}function b(I,_t,Y){Y===void 0&&(lt===null?Y=i.TEXTURE0+$-1:Y=lt);let tt=mt[Y];tt===void 0&&(tt={type:void 0,texture:void 0},mt[Y]=tt),(tt.type!==I||tt.texture!==_t)&&(lt!==Y&&(i.activeTexture(Y),lt=Y),i.bindTexture(I,_t||Tt[I]),tt.type=I,tt.texture=_t)}function k(){const I=mt[lt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qt(I){Bt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Bt.copy(I))}function Dt(I){j.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function ae(I,_t){let Y=l.get(_t);Y===void 0&&(Y=new WeakMap,l.set(_t,Y));let tt=Y.get(I);tt===void 0&&(tt=i.getUniformBlockIndex(_t,I.name),Y.set(I,tt))}function Yt(I,_t){const tt=l.get(_t).get(I);c.get(_t)!==tt&&(i.uniformBlockBinding(_t,tt,I.__bindingPointIndex),c.set(_t,tt))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},lt=null,mt={},f={},u=new WeakMap,d=[],m=null,_=!1,g=null,p=null,x=null,M=null,v=null,A=null,y=null,E=new Ht(0,0,0),R=0,w=!1,S=null,P=null,B=null,U=null,G=null,Bt.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:it,disable:At,bindFramebuffer:Vt,drawBuffers:Ft,useProgram:Jt,setBlending:L,setMaterial:ft,setFlipSided:st,setCullFace:wt,setLineWidth:ht,setPolygonOffset:Gt,setScissorTest:pt,activeTexture:C,bindTexture:b,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:Et,texImage3D:Nt,updateUBOMapping:ae,uniformBlockBinding:Yt,texStorage2D:oe,texStorage3D:rt,texSubImage2D:J,texSubImage3D:Ct,compressedTexSubImage2D:gt,compressedTexSubImage3D:Rt,scissor:qt,viewport:Dt,reset:Qt}}function gl(i,t,e,n){const s=fg(n);switch(e){case wh:return i*t;case Th:return i*t;case Ah:return i*t*2;case tc:return i*t/s.components*s.byteLength;case ec:return i*t/s.components*s.byteLength;case Rh:return i*t*2/s.components*s.byteLength;case nc:return i*t*2/s.components*s.byteLength;case Eh:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case ic:return i*t*4/s.components*s.byteLength;case Yo:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:case _a:return Math.max(i,16)*Math.max(t,8)/4;case pa:case ga:return Math.max(i,8)*Math.max(t,8)/2;case va:case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jo:case Na:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ch:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ka:case za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fg(i){switch(i){case qn:case yh:return{byteLength:1,components:1};case eo:case bh:case ro:return{byteLength:2,components:1};case Ja:case Qa:return{byteLength:2,components:4};case Pi:case Ka:case Cn:return{byteLength:4,components:1};case Sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function pg(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,b){return d?new OffscreenCanvas(C,b):sr("canvas")}function _(C,b,k){let K=1;const et=pt(C);if((et.width>k||et.height>k)&&(K=k/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(K*et.width),Ct=Math.floor(K*et.height);f===void 0&&(f=m(J,Ct));const gt=b?m(J,Ct):f;return gt.width=J,gt.height=Ct,gt.getContext("2d").drawImage(C,0,0,J,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+Ct+")."),gt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,b,k,K,et=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=b;if(b===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8)),b===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),b===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8)),b===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),b===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),b===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),b===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),b===i.RGBA){const Ct=et?cr:ue.getTransfer(K);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=Ct===ve?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(C,b){let k;return C?b===null||b===Pi||b===vs?k=i.DEPTH24_STENCIL8:b===Cn?k=i.DEPTH32F_STENCIL8:b===eo&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Pi||b===vs?k=i.DEPTH_COMPONENT24:b===Cn?k=i.DEPTH_COMPONENT32F:b===eo&&(k=i.DEPTH_COMPONENT16),k}function A(C,b){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==on&&C.minFilter!==Rn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function y(C){const b=C.target;b.removeEventListener("dispose",y),R(b),b.isVideoTexture&&h.delete(b)}function E(C){const b=C.target;b.removeEventListener("dispose",E),S(b)}function R(C){const b=n.get(C);if(b.__webglInit===void 0)return;const k=C.source,K=u.get(k);if(K){const et=K[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&w(C),Object.keys(K).length===0&&u.delete(k)}n.remove(C)}function w(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const k=C.source,K=u.get(k);delete K[b.__cacheKey],r.memory.textures--}function S(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let et=0;et<b.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(b.__webglFramebuffer[K][et]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=C.textures;for(let K=0,et=k.length;K<et;K++){const J=n.get(k[K]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),r.memory.textures--),n.remove(k[K])}n.remove(C)}let P=0;function B(){P=0}function U(){const C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function G(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function $(C,b){const k=n.get(C);if(C.isVideoTexture&&ht(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,C,b);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+b)}function N(C,b){const k=n.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+b)}function q(C,b){const k=n.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,b);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+b)}function W(C,b){const k=n.get(C);if(C.version>0&&k.__version!==C.version){ot(k,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+b)}const lt={[nr]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[fa]:i.MIRRORED_REPEAT},mt={[on]:i.NEAREST,[Bu]:i.NEAREST_MIPMAP_NEAREST,[lo]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[mr]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},yt={[Wu]:i.NEVER,[Zu]:i.ALWAYS,[Xu]:i.LESS,[Lh]:i.LEQUAL,[$u]:i.EQUAL,[ju]:i.GEQUAL,[qu]:i.GREATER,[Yu]:i.NOTEQUAL};function Ut(C,b){if(b.type===Cn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Rn||b.magFilter===mr||b.magFilter===lo||b.magFilter===Ri||b.minFilter===Rn||b.minFilter===mr||b.minFilter===lo||b.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,lt[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,lt[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,lt[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,mt[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,mt[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,yt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===on||b.minFilter!==lo&&b.minFilter!==Ri||b.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Bt(C,b){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",y));const K=b.source;let et=u.get(K);et===void 0&&(et={},u.set(K,et));const J=G(b);if(J!==C.__cacheKey){et[J]===void 0&&(et[J]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,k=!0),et[J].usedTimes++;const Ct=et[C.__cacheKey];Ct!==void 0&&(et[C.__cacheKey].usedTimes--,Ct.usedTimes===0&&w(b)),C.__cacheKey=J,C.__webglTexture=et[J].texture}return k}function j(C,b,k){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const et=Bt(C,b),J=b.source;e.bindTexture(K,C.__webglTexture,i.TEXTURE0+k);const Ct=n.get(J);if(J.version!==Ct.__version||et===!0){e.activeTexture(i.TEXTURE0+k);const gt=ue.getPrimaries(ue.workingColorSpace),Rt=b.colorSpace===ci?null:ue.getPrimaries(b.colorSpace),oe=b.colorSpace===ci||gt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let rt=_(b.image,!1,s.maxTextureSize);rt=Gt(b,rt);const Et=o.convert(b.format,b.colorSpace),Nt=o.convert(b.type);let qt=M(b.internalFormat,Et,Nt,b.colorSpace,b.isVideoTexture);Ut(K,b);let Dt;const ae=b.mipmaps,Yt=b.isVideoTexture!==!0,Qt=Ct.__version===void 0||et===!0,I=J.dataReady,_t=A(b,rt);if(b.isDepthTexture)qt=v(b.format===xs,b.type),Qt&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,qt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,qt,rt.width,rt.height,0,Et,Nt,null));else if(b.isDataTexture)if(ae.length>0){Yt&&Qt&&e.texStorage2D(i.TEXTURE_2D,_t,qt,ae[0].width,ae[0].height);for(let Y=0,tt=ae.length;Y<tt;Y++)Dt=ae[Y],Yt?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Dt.width,Dt.height,Et,Nt,Dt.data):e.texImage2D(i.TEXTURE_2D,Y,qt,Dt.width,Dt.height,0,Et,Nt,Dt.data);b.generateMipmaps=!1}else Yt?(Qt&&e.texStorage2D(i.TEXTURE_2D,_t,qt,rt.width,rt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,Et,Nt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,qt,rt.width,rt.height,0,Et,Nt,rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Yt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,qt,ae[0].width,ae[0].height,rt.depth);for(let Y=0,tt=ae.length;Y<tt;Y++)if(Dt=ae[Y],b.format!==yn)if(Et!==null)if(Yt){if(I)if(b.layerUpdates.size>0){const xt=gl(Dt.width,Dt.height,b.format,b.type);for(const bt of b.layerUpdates){const jt=Dt.data.subarray(bt*xt/Dt.data.BYTES_PER_ELEMENT,(bt+1)*xt/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,bt,Dt.width,Dt.height,1,Et,jt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Dt.width,Dt.height,rt.depth,Et,Dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,qt,Dt.width,Dt.height,rt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Dt.width,Dt.height,rt.depth,Et,Nt,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,qt,Dt.width,Dt.height,rt.depth,0,Et,Nt,Dt.data)}else{Yt&&Qt&&e.texStorage2D(i.TEXTURE_2D,_t,qt,ae[0].width,ae[0].height);for(let Y=0,tt=ae.length;Y<tt;Y++)Dt=ae[Y],b.format!==yn?Et!==null?Yt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Dt.width,Dt.height,Et,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,qt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Dt.width,Dt.height,Et,Nt,Dt.data):e.texImage2D(i.TEXTURE_2D,Y,qt,Dt.width,Dt.height,0,Et,Nt,Dt.data)}else if(b.isDataArrayTexture)if(Yt){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,qt,rt.width,rt.height,rt.depth),I)if(b.layerUpdates.size>0){const Y=gl(rt.width,rt.height,b.format,b.type);for(const tt of b.layerUpdates){const xt=rt.data.subarray(tt*Y/rt.data.BYTES_PER_ELEMENT,(tt+1)*Y/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,rt.width,rt.height,1,Et,Nt,xt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Et,Nt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,rt.width,rt.height,rt.depth,0,Et,Nt,rt.data);else if(b.isData3DTexture)Yt?(Qt&&e.texStorage3D(i.TEXTURE_3D,_t,qt,rt.width,rt.height,rt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Et,Nt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,qt,rt.width,rt.height,rt.depth,0,Et,Nt,rt.data);else if(b.isFramebufferTexture){if(Qt)if(Yt)e.texStorage2D(i.TEXTURE_2D,_t,qt,rt.width,rt.height);else{let Y=rt.width,tt=rt.height;for(let xt=0;xt<_t;xt++)e.texImage2D(i.TEXTURE_2D,xt,qt,Y,tt,0,Et,Nt,null),Y>>=1,tt>>=1}}else if(ae.length>0){if(Yt&&Qt){const Y=pt(ae[0]);e.texStorage2D(i.TEXTURE_2D,_t,qt,Y.width,Y.height)}for(let Y=0,tt=ae.length;Y<tt;Y++)Dt=ae[Y],Yt?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et,Nt,Dt):e.texImage2D(i.TEXTURE_2D,Y,qt,Et,Nt,Dt);b.generateMipmaps=!1}else if(Yt){if(Qt){const Y=pt(rt);e.texStorage2D(i.TEXTURE_2D,_t,qt,Y.width,Y.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Nt,rt)}else e.texImage2D(i.TEXTURE_2D,0,qt,Et,Nt,rt);g(b)&&p(K),Ct.__version=J.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ot(C,b,k){if(b.image.length!==6)return;const K=Bt(C,b),et=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);const J=n.get(et);if(et.version!==J.__version||K===!0){e.activeTexture(i.TEXTURE0+k);const Ct=ue.getPrimaries(ue.workingColorSpace),gt=b.colorSpace===ci?null:ue.getPrimaries(b.colorSpace),Rt=b.colorSpace===ci||Ct===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const oe=b.isCompressedTexture||b.image[0].isCompressedTexture,rt=b.image[0]&&b.image[0].isDataTexture,Et=[];for(let tt=0;tt<6;tt++)!oe&&!rt?Et[tt]=_(b.image[tt],!0,s.maxCubemapSize):Et[tt]=rt?b.image[tt].image:b.image[tt],Et[tt]=Gt(b,Et[tt]);const Nt=Et[0],qt=o.convert(b.format,b.colorSpace),Dt=o.convert(b.type),ae=M(b.internalFormat,qt,Dt,b.colorSpace),Yt=b.isVideoTexture!==!0,Qt=J.__version===void 0||K===!0,I=et.dataReady;let _t=A(b,Nt);Ut(i.TEXTURE_CUBE_MAP,b);let Y;if(oe){Yt&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,ae,Nt.width,Nt.height);for(let tt=0;tt<6;tt++){Y=Et[tt].mipmaps;for(let xt=0;xt<Y.length;xt++){const bt=Y[xt];b.format!==yn?qt!==null?Yt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,0,0,bt.width,bt.height,qt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,ae,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,0,0,bt.width,bt.height,qt,Dt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,ae,bt.width,bt.height,0,qt,Dt,bt.data)}}}else{if(Y=b.mipmaps,Yt&&Qt){Y.length>0&&_t++;const tt=pt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,ae,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){Yt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Et[tt].width,Et[tt].height,qt,Dt,Et[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ae,Et[tt].width,Et[tt].height,0,qt,Dt,Et[tt].data);for(let xt=0;xt<Y.length;xt++){const jt=Y[xt].image[tt].image;Yt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,0,0,jt.width,jt.height,qt,Dt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,ae,jt.width,jt.height,0,qt,Dt,jt.data)}}else{Yt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,qt,Dt,Et[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ae,qt,Dt,Et[tt]);for(let xt=0;xt<Y.length;xt++){const bt=Y[xt];Yt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,0,0,qt,Dt,bt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,ae,qt,Dt,bt.image[tt])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),J.__version=et.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Tt(C,b,k,K,et,J){const Ct=o.convert(k.format,k.colorSpace),gt=o.convert(k.type),Rt=M(k.internalFormat,Ct,gt,k.colorSpace),oe=n.get(b),rt=n.get(k);if(rt.__renderTarget=b,!oe.__hasExternalTextures){const Et=Math.max(1,b.width>>J),Nt=Math.max(1,b.height>>J);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,J,Rt,Et,Nt,b.depth,0,Ct,gt,null):e.texImage2D(et,J,Rt,Et,Nt,0,Ct,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),wt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,rt.__webglTexture,0,st(b)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,rt.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(C,b,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const K=b.depthTexture,et=K&&K.isDepthTexture?K.type:null,J=v(b.stencilBuffer,et),Ct=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=st(b);wt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,J,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,J,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,J,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,C)}else{const K=b.textures;for(let et=0;et<K.length;et++){const J=K[et],Ct=o.convert(J.format,J.colorSpace),gt=o.convert(J.type),Rt=M(J.internalFormat,Ct,gt,J.colorSpace),oe=st(b);k&&wt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Rt,b.width,b.height):wt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Rt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const et=K.__webglTexture,J=st(b);if(b.depthTexture.format===fs)wt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(b.depthTexture.format===xs)wt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Vt(C){const b=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=K}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");At(b.__webglFramebuffer,C)}else if(k){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),it(b.__webglDepthbuffer[K],C,!1);else{const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),it(b.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(C,b,k){const K=n.get(C);b!==void 0&&Tt(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Vt(C)}function Jt(C){const b=C.texture,k=n.get(C),K=n.get(b);C.addEventListener("dispose",E);const et=C.textures,J=C.isWebGLCubeRenderTarget===!0,Ct=et.length>1;if(Ct||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,r.memory.textures++),J){k.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[gt]=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)k.__webglFramebuffer[gt][Rt]=i.createFramebuffer()}else k.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let gt=0;gt<b.mipmaps.length;gt++)k.__webglFramebuffer[gt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let gt=0,Rt=et.length;gt<Rt;gt++){const oe=n.get(et[gt]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),r.memory.textures++)}if(C.samples>0&&wt(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let gt=0;gt<et.length;gt++){const Rt=et[gt];k.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[gt]);const oe=o.convert(Rt.format,Rt.colorSpace),rt=o.convert(Rt.type),Et=M(Rt.internalFormat,oe,rt,Rt.colorSpace,C.isXRRenderTarget===!0),Nt=st(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Et,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,k.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),it(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,b);for(let gt=0;gt<6;gt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Rt=0;Rt<b.mipmaps.length;Rt++)Tt(k.__webglFramebuffer[gt][Rt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt);else Tt(k.__webglFramebuffer[gt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);g(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let gt=0,Rt=et.length;gt<Rt;gt++){const oe=et[gt],rt=n.get(oe);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Ut(i.TEXTURE_2D,oe),Tt(k.__webglFramebuffer,C,oe,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),g(oe)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(gt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,K.__webglTexture),Ut(gt,b),b.mipmaps&&b.mipmaps.length>0)for(let Rt=0;Rt<b.mipmaps.length;Rt++)Tt(k.__webglFramebuffer[Rt],C,b,i.COLOR_ATTACHMENT0,gt,Rt);else Tt(k.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,gt,0);g(b)&&p(gt),e.unbindTexture()}C.depthBuffer&&Vt(C)}function Q(C){const b=C.textures;for(let k=0,K=b.length;k<K;k++){const et=b[k];if(g(et)){const J=x(C),Ct=n.get(et).__webglTexture;e.bindTexture(J,Ct),p(J),e.unbindTexture()}}}const ct=[],L=[];function ft(C){if(C.samples>0){if(wt(C)===!1){const b=C.textures,k=C.width,K=C.height;let et=i.COLOR_BUFFER_BIT;const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(C),gt=b.length>1;if(gt)for(let Rt=0;Rt<b.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Rt=0;Rt<b.length;Rt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Rt]);const oe=n.get(b[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,k,K,0,0,k,K,et,i.NEAREST),c===!0&&(ct.length=0,L.length=0,ct.push(i.COLOR_ATTACHMENT0+Rt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ct.push(J),L.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Rt=0;Rt<b.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Rt]);const oe=n.get(b[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function st(C){return Math.min(s.maxSamples,C.samples)}function wt(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ht(C){const b=r.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Gt(C,b){const k=C.colorSpace,K=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Es&&k!==ci&&(ue.getTransfer(k)===ve?(K!==yn||et!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function pt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=N,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=Ft,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=wt}function mg(i,t){function e(n,s=ci){let o;const r=ue.getTransfer(s);if(n===qn)return i.UNSIGNED_BYTE;if(n===Ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yh)return i.BYTE;if(n===bh)return i.SHORT;if(n===eo)return i.UNSIGNED_SHORT;if(n===Ka)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===ro)return i.HALF_FLOAT;if(n===wh)return i.ALPHA;if(n===Eh)return i.RGB;if(n===yn)return i.RGBA;if(n===Th)return i.LUMINANCE;if(n===Ah)return i.LUMINANCE_ALPHA;if(n===fs)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===tc)return i.RED;if(n===ec)return i.RED_INTEGER;if(n===Rh)return i.RG;if(n===nc)return i.RG_INTEGER;if(n===ic)return i.RGBA_INTEGER;if(n===Yo||n===jo||n===Zo||n===Ko)if(r===ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Yo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Yo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pa||n===ma||n===ga||n===_a)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===pa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ga)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_a)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===xa||n===Ma)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===va||n===xa)return r===ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ma)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===ba||n===Sa||n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ya)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sa)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wa)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ea)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jo||n===Na||n===Oa)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Jo)return r===ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ch||n===Fa||n===ka||n===za)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Jo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ka)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===za)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class gg extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Lt extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _g={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&u>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_g)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
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

}`;class Mg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new We,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Yn({vertexShader:vg,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Z(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yg extends Ni{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,m=null;const _=new Mg,g=e.getContextAttributes();let p=null,x=null;const M=[],v=[],A=new nt;let y=null;const E=new sn;E.viewport=new Ee;const R=new sn;R.viewport=new Ee;const w=[E,R],S=new gg;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ot=M[j];return ot===void 0&&(ot=new Gr,M[j]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(j){let ot=M[j];return ot===void 0&&(ot=new Gr,M[j]=ot),ot.getGripSpace()},this.getHand=function(j){let ot=M[j];return ot===void 0&&(ot=new Gr,M[j]=ot),ot.getHandSpace()};function U(j){const ot=v.indexOf(j.inputSource);if(ot===-1)return;const Tt=M[ot];Tt!==void 0&&(Tt.update(j.inputSource,j.frame,l||r),Tt.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let j=0;j<M.length;j++){const ot=v[j];ot!==null&&(v[j]=null,M[j].disconnect(ot))}P=null,B=null,_.reset(),t.setRenderTarget(p),d=null,u=null,f=null,s=null,x=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const ot={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Li(d.framebufferWidth,d.framebufferHeight,{format:yn,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ot=null,Tt=null,it=null;g.depth&&(it=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=g.stencil?xs:fs,Tt=g.stencil?vs:Pi);const At={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:o};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(At),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Li(u.textureWidth,u.textureHeight,{format:yn,type:qn,depthTexture:new Wh(u.textureWidth,u.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),Bt.setContext(s),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(j){for(let ot=0;ot<j.removed.length;ot++){const Tt=j.removed[ot],it=v.indexOf(Tt);it>=0&&(v[it]=null,M[it].disconnect(Tt))}for(let ot=0;ot<j.added.length;ot++){const Tt=j.added[ot];let it=v.indexOf(Tt);if(it===-1){for(let Vt=0;Vt<M.length;Vt++)if(Vt>=v.length){v.push(Tt),it=Vt;break}else if(v[Vt]===null){v[Vt]=Tt,it=Vt;break}if(it===-1)break}const At=M[it];At&&At.connect(Tt)}}const N=new D,q=new D;function W(j,ot,Tt){N.setFromMatrixPosition(ot.matrixWorld),q.setFromMatrixPosition(Tt.matrixWorld);const it=N.distanceTo(q),At=ot.projectionMatrix.elements,Vt=Tt.projectionMatrix.elements,Ft=At[14]/(At[10]-1),Jt=At[14]/(At[10]+1),Q=(At[9]+1)/At[5],ct=(At[9]-1)/At[5],L=(At[8]-1)/At[0],ft=(Vt[8]+1)/Vt[0],st=Ft*L,wt=Ft*ft,ht=it/(-L+ft),Gt=ht*-L;if(ot.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Gt),j.translateZ(ht),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),At[10]===-1)j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const pt=Ft+ht,C=Jt+ht,b=st-Gt,k=wt+(it-Gt),K=Q*Jt/C*pt,et=ct*Jt/C*pt;j.projectionMatrix.makePerspective(b,k,K,et,pt,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function lt(j,ot){ot===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ot.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ot=j.near,Tt=j.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(Tt=_.depthFar)),S.near=R.near=E.near=ot,S.far=R.far=E.far=Tt,(P!==S.near||B!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,B=S.far),E.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,S.layers.mask=E.layers.mask|R.layers.mask;const it=j.parent,At=S.cameras;lt(S,it);for(let Vt=0;Vt<At.length;Vt++)lt(At[Vt],it);At.length===2?W(S,E,R):S.projectionMatrix.copy(E.projectionMatrix),mt(j,S,it)};function mt(j,ot,Tt){Tt===null?j.matrix.copy(ot.matrixWorld):(j.matrix.copy(Tt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ot.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ms*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let yt=null;function Ut(j,ot){if(h=ot.getViewerPose(l||r),m=ot,h!==null){const Tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let it=!1;Tt.length!==S.cameras.length&&(S.cameras.length=0,it=!0);for(let Vt=0;Vt<Tt.length;Vt++){const Ft=Tt[Vt];let Jt=null;if(d!==null)Jt=d.getViewport(Ft);else{const ct=f.getViewSubImage(u,Ft);Jt=ct.viewport,Vt===0&&(t.setRenderTargetTextures(x,ct.colorTexture,u.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(x))}let Q=w[Vt];Q===void 0&&(Q=new sn,Q.layers.enable(Vt),Q.viewport=new Ee,w[Vt]=Q),Q.matrix.fromArray(Ft.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ft.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Vt===0&&(S.matrix.copy(Q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),it===!0&&S.cameras.push(Q)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const Vt=f.getDepthInformation(Tt[0]);Vt&&Vt.isValid&&Vt.texture&&_.init(t,Vt,s.renderState)}}for(let Tt=0;Tt<M.length;Tt++){const it=v[Tt],At=M[Tt];it!==null&&At!==void 0&&At.update(it,ot,l||r)}yt&&yt(j,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),m=null}const Bt=new Gh;Bt.setAnimationLoop(Ut),this.setAnimationLoop=function(j){yt=j},this.dispose=function(){}}}const yi=new In,bg=new he;function Sg(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,kh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),f(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p)):p.isMeshStandardMaterial?(o(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),_(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,x,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,v=x.envMapRotation;M&&(g.envMap.value=M,yi.copy(v),yi.x*=-1,yi.y*=-1,yi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),g.envMapRotation.value.setFromMatrix4(bg.makeRotationFromEuler(yi)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wg(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function l(x,M){let v=s[x.id];v===void 0&&(m(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",g));const A=M.program;n.updateUBOMapping(x,A);const y=t.render.frame;o[x.id]!==y&&(u(x),o[x.id]=y)}function h(x){const M=f();x.__bindingPointIndex=M;const v=i.createBuffer(),A=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function f(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const M=s[x.id],v=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,E=v.length;y<E;y++){const R=Array.isArray(v[y])?v[y]:[v[y]];for(let w=0,S=R.length;w<S;w++){const P=R[w];if(d(P,y,w,A)===!0){const B=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let $=0;$<U.length;$++){const N=U[$],q=_(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,B+G,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,G),G+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,M,v,A){const y=x.value,E=M+"_"+v;if(A[E]===void 0)return typeof y=="number"||typeof y=="boolean"?A[E]=y:A[E]=y.clone(),!0;{const R=A[E];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[E]=y,!0}else if(R.equals(y)===!1)return R.copy(y),!0}return!1}function m(x){const M=x.uniforms;let v=0;const A=16;for(let E=0,R=M.length;E<R;E++){const w=Array.isArray(M[E])?M[E]:[M[E]];for(let S=0,P=w.length;S<P;S++){const B=w[S],U=Array.isArray(B.value)?B.value:[B.value];for(let G=0,$=U.length;G<$;G++){const N=U[G],q=_(N),W=v%A,lt=W%q.boundary,mt=W+lt;v+=lt,mt!==0&&A-mt<q.storage&&(v+=A-mt),B.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=q.storage}}}const y=v%A;return y>0&&(v+=A-y),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function g(x){const M=x.target;M.removeEventListener("dispose",g);const v=r.indexOf(M.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);r=[],s={},o={}}return{bind:c,update:l,dispose:p}}class Eg{constructor(t={}){const{canvas:e=fd(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=di,this.toneMappingExposure=1;const v=this;let A=!1,y=0,E=0,R=null,w=-1,S=null;const P=new Ee,B=new Ee;let U=null;const G=new Ht(0);let $=0,N=e.width,q=e.height,W=1,lt=null,mt=null;const yt=new Ee(0,0,N,q),Ut=new Ee(0,0,N,q);let Bt=!1;const j=new rc;let ot=!1,Tt=!1;const it=new he,At=new he,Vt=new D,Ft=new Ee,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ct(){return R===null?W:1}let L=n;function ft(T,F){return e.getContext(T,F)}try{const T={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Za}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),L===null){const F="webgl2";if(L=ft(F,T),L===null)throw ft(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let st,wt,ht,Gt,pt,C,b,k,K,et,J,Ct,gt,Rt,oe,rt,Et,Nt,qt,Dt,ae,Yt,Qt,I;function _t(){st=new Pm(L),st.init(),Yt=new mg(L,st),wt=new wm(L,st,t,Yt),ht=new dg(L,st),wt.reverseDepthBuffer&&u&&ht.buffers.depth.setReversed(!0),Gt=new Im(L),pt=new K0,C=new pg(L,st,ht,pt,wt,Yt,Gt),b=new Tm(v),k=new Cm(v),K=new zd(L),Qt=new bm(L,K),et=new Lm(L,K,Gt,Qt),J=new Nm(L,et,K,Gt),qt=new Um(L,wt,C),rt=new Em(pt),Ct=new Z0(v,b,k,st,wt,Qt,rt),gt=new Sg(v,pt),Rt=new Q0,oe=new og(st),Nt=new ym(v,b,k,ht,J,d,c),Et=new hg(v,J,wt),I=new wg(L,Gt,wt,ht),Dt=new Sm(L,st,Gt),ae=new Dm(L,st,Gt),Gt.programs=Ct.programs,v.capabilities=wt,v.extensions=st,v.properties=pt,v.renderLists=Rt,v.shadowMap=Et,v.state=ht,v.info=Gt}_t();const Y=new yg(v,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=st.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=st.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(N,q,!1))},this.getSize=function(T){return T.set(N,q)},this.setSize=function(T,F,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,q=F,e.width=Math.floor(T*W),e.height=Math.floor(F*W),H===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(N*W,q*W).floor()},this.setDrawingBufferSize=function(T,F,H){N=T,q=F,W=H,e.width=Math.floor(T*H),e.height=Math.floor(F*H),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(yt)},this.setViewport=function(T,F,H,X){T.isVector4?yt.set(T.x,T.y,T.z,T.w):yt.set(T,F,H,X),ht.viewport(P.copy(yt).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(Ut)},this.setScissor=function(T,F,H,X){T.isVector4?Ut.set(T.x,T.y,T.z,T.w):Ut.set(T,F,H,X),ht.scissor(B.copy(Ut).multiplyScalar(W).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(T){ht.setScissorTest(Bt=T)},this.setOpaqueSort=function(T){lt=T},this.setTransparentSort=function(T){mt=T},this.getClearColor=function(T){return T.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(T=!0,F=!0,H=!0){let X=0;if(T){let z=!1;if(R!==null){const dt=R.texture.format;z=dt===ic||dt===nc||dt===ec}if(z){const dt=R.texture.type,St=dt===qn||dt===Pi||dt===eo||dt===vs||dt===Ja||dt===Qa,kt=Nt.getClearColor(),It=Nt.getClearAlpha(),$t=kt.r,Zt=kt.g,zt=kt.b;St?(m[0]=$t,m[1]=Zt,m[2]=zt,m[3]=It,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=$t,_[1]=Zt,_[2]=zt,_[3]=It,L.clearBufferiv(L.COLOR,0,_))}else X|=L.COLOR_BUFFER_BIT}F&&(X|=L.DEPTH_BUFFER_BIT),H&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Rt.dispose(),oe.dispose(),pt.dispose(),b.dispose(),k.dispose(),J.dispose(),Qt.dispose(),I.dispose(),Ct.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Ls),Y.removeEventListener("sessionend",ao),On.stop()};function tt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=Gt.autoReset,F=Et.enabled,H=Et.autoUpdate,X=Et.needsUpdate,z=Et.type;_t(),Gt.autoReset=T,Et.enabled=F,Et.autoUpdate=H,Et.needsUpdate=X,Et.type=z}function bt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function jt(T){const F=T.target;F.removeEventListener("dispose",jt),Me(F)}function Me(T){Ae(T),pt.remove(T)}function Ae(T){const F=pt.get(T).programs;F!==void 0&&(F.forEach(function(H){Ct.releaseProgram(H)}),T.isShaderMaterial&&Ct.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,H,X,z,dt){F===null&&(F=Jt);const St=z.isMesh&&z.matrixWorld.determinant()<0,kt=re(T,F,H,X,z);ht.setMaterial(X,St);let It=H.index,$t=1;if(X.wireframe===!0){if(It=et.getWireframeAttribute(H),It===void 0)return;$t=2}const Zt=H.drawRange,zt=H.attributes.position;let ce=Zt.start*$t,at=(Zt.start+Zt.count)*$t;dt!==null&&(ce=Math.max(ce,dt.start*$t),at=Math.min(at,(dt.start+dt.count)*$t)),It!==null?(ce=Math.max(ce,0),at=Math.min(at,It.count)):zt!=null&&(ce=Math.max(ce,0),at=Math.min(at,zt.count));const Pt=at-ce;if(Pt<0||Pt===1/0)return;Qt.setup(z,X,kt,H,It);let pe,le=Dt;if(It!==null&&(pe=K.get(It),le=ae,le.setIndex(pe)),z.isMesh)X.wireframe===!0?(ht.setLineWidth(X.wireframeLinewidth*ct()),le.setMode(L.LINES)):le.setMode(L.TRIANGLES);else if(z.isLine){let Ot=X.linewidth;Ot===void 0&&(Ot=1),ht.setLineWidth(Ot*ct()),z.isLineSegments?le.setMode(L.LINES):z.isLineLoop?le.setMode(L.LINE_LOOP):le.setMode(L.LINE_STRIP)}else z.isPoints?le.setMode(L.POINTS):z.isSprite&&le.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)le.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))le.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ot=z._multiDrawStarts,fn=z._multiDrawCounts,me=z._multiDrawCount,pn=It?K.get(It).bytesPerElement:1,zi=pt.get(X).currentProgram.getUniforms();for(let Qe=0;Qe<me;Qe++)zi.setValue(L,"_gl_DrawID",Qe),le.render(Ot[Qe]/pn,fn[Qe])}else if(z.isInstancedMesh)le.renderInstances(ce,Pt,z.count);else if(H.isInstancedBufferGeometry){const Ot=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,fn=Math.min(H.instanceCount,Ot);le.renderInstances(ce,Pt,fn)}else le.render(ce,Pt)};function de(T,F,H){T.transparent===!0&&T.side===Ie&&T.forceSinglePass===!1?(T.side=je,T.needsUpdate=!0,ut(T,F,H),T.side=fi,T.needsUpdate=!0,ut(T,F,H),T.side=Ie):ut(T,F,H)}this.compile=function(T,F,H=null){H===null&&(H=T),p=oe.get(H),p.init(F),M.push(p),H.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==H&&T.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const X=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const dt=z.material;if(dt)if(Array.isArray(dt))for(let St=0;St<dt.length;St++){const kt=dt[St];de(kt,H,z),X.add(kt)}else de(dt,H,z),X.add(dt)}),M.pop(),p=null,X},this.compileAsync=function(T,F,H=null){const X=this.compile(T,F,H);return new Promise(z=>{function dt(){if(X.forEach(function(St){pt.get(St).currentProgram.isReady()&&X.delete(St)}),X.size===0){z(T);return}setTimeout(dt,10)}st.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let $e=null;function rn(T){$e&&$e(T)}function Ls(){On.stop()}function ao(){On.start()}const On=new Gh;On.setAnimationLoop(rn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(T){$e=T,Y.setAnimationLoop(T),T===null?On.stop():On.start()},Y.addEventListener("sessionstart",Ls),Y.addEventListener("sessionend",ao),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,R),p=oe.get(T,M.length),p.init(F),M.push(p),At.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(At),Tt=this.localClippingEnabled,ot=rt.init(this.clippingPlanes,Tt),g=Rt.get(T,x.length),g.init(),x.push(g),Y.enabled===!0&&Y.isPresenting===!0){const dt=v.xr.getDepthSensingMesh();dt!==null&&Ds(dt,F,-1/0,v.sortObjects)}Ds(T,F,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(lt,mt),Q=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Q&&Nt.addToRenderList(g,T),this.info.render.frame++,ot===!0&&rt.beginShadows();const H=p.state.shadowsArray;Et.render(H,T,F),ot===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,z=g.transmissive;if(p.setupLights(),F.isArrayCamera){const dt=F.cameras;if(z.length>0)for(let St=0,kt=dt.length;St<kt;St++){const It=dt[St];Fn(X,z,T,It)}Q&&Nt.render(T);for(let St=0,kt=dt.length;St<kt;St++){const It=dt[St];co(g,T,It,It.viewport)}}else z.length>0&&Fn(X,z,T,F),Q&&Nt.render(T),co(g,T,F);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(v,T,F),Qt.resetDefaultState(),w=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],ot===!0&&rt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Ds(T,F,H,X){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){X&&Ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(At);const St=J.update(T),kt=T.material;kt.visible&&g.push(T,St,kt,H,Ft.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){const St=J.update(T),kt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ft.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ft.copy(St.boundingSphere.center)),Ft.applyMatrix4(T.matrixWorld).applyMatrix4(At)),Array.isArray(kt)){const It=St.groups;for(let $t=0,Zt=It.length;$t<Zt;$t++){const zt=It[$t],ce=kt[zt.materialIndex];ce&&ce.visible&&g.push(T,St,ce,H,Ft.z,zt)}}else kt.visible&&g.push(T,St,kt,H,Ft.z,null)}}const dt=T.children;for(let St=0,kt=dt.length;St<kt;St++)Ds(dt[St],F,H,X)}function co(T,F,H,X){const z=T.opaque,dt=T.transmissive,St=T.transparent;p.setupLightsView(H),ot===!0&&rt.setGlobalState(v.clippingPlanes,H),X&&ht.viewport(P.copy(X)),z.length>0&&mi(z,F,H),dt.length>0&&mi(dt,F,H),St.length>0&&mi(St,F,H),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Fn(T,F,H,X){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Li(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?ro:qn,minFilter:Ri,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const dt=p.state.transmissionRenderTarget[X.id],St=X.viewport||P;dt.setSize(St.z,St.w);const kt=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(G),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Nt.render(H);const It=v.toneMapping;v.toneMapping=di;const $t=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ot===!0&&rt.setGlobalState(v.clippingPlanes,X),mi(T,H,X),C.updateMultisampleRenderTarget(dt),C.updateRenderTargetMipmap(dt),st.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let zt=0,ce=F.length;zt<ce;zt++){const at=F[zt],Pt=at.object,pe=at.geometry,le=at.material,Ot=at.group;if(le.side===Ie&&Pt.layers.test(X.layers)){const fn=le.side;le.side=je,le.needsUpdate=!0,V(Pt,H,X,pe,le,Ot),le.side=fn,le.needsUpdate=!0,Zt=!0}}Zt===!0&&(C.updateMultisampleRenderTarget(dt),C.updateRenderTargetMipmap(dt))}v.setRenderTarget(kt),v.setClearColor(G,$),$t!==void 0&&(X.viewport=$t),v.toneMapping=It}function mi(T,F,H){const X=F.isScene===!0?F.overrideMaterial:null;for(let z=0,dt=T.length;z<dt;z++){const St=T[z],kt=St.object,It=St.geometry,$t=X===null?St.material:X,Zt=St.group;kt.layers.test(H.layers)&&V(kt,F,H,It,$t,Zt)}}function V(T,F,H,X,z,dt){T.onBeforeRender(v,F,H,X,z,dt),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,F,H,X,T,dt),z.transparent===!0&&z.side===Ie&&z.forceSinglePass===!1?(z.side=je,z.needsUpdate=!0,v.renderBufferDirect(H,F,X,z,T,dt),z.side=fi,z.needsUpdate=!0,v.renderBufferDirect(H,F,X,z,T,dt),z.side=Ie):v.renderBufferDirect(H,F,X,z,T,dt),T.onAfterRender(v,F,H,X,z,dt)}function ut(T,F,H){F.isScene!==!0&&(F=Jt);const X=pt.get(T),z=p.state.lights,dt=p.state.shadowsArray,St=z.state.version,kt=Ct.getParameters(T,z.state,dt,F,H),It=Ct.getProgramCacheKey(kt);let $t=X.programs;X.environment=T.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(T.isMeshStandardMaterial?k:b).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,$t===void 0&&(T.addEventListener("dispose",jt),$t=new Map,X.programs=$t);let Zt=$t.get(It);if(Zt!==void 0){if(X.currentProgram===Zt&&X.lightsStateVersion===St)return Wt(T,kt),Zt}else kt.uniforms=Ct.getUniforms(T),T.onBeforeCompile(kt,v),Zt=Ct.acquireProgram(kt,It),$t.set(It,Zt),X.uniforms=kt.uniforms;const zt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(zt.clippingPlanes=rt.uniform),Wt(T,kt),X.needsLights=Pe(T),X.lightsStateVersion=St,X.needsLights&&(zt.ambientLightColor.value=z.state.ambient,zt.lightProbe.value=z.state.probe,zt.directionalLights.value=z.state.directional,zt.directionalLightShadows.value=z.state.directionalShadow,zt.spotLights.value=z.state.spot,zt.spotLightShadows.value=z.state.spotShadow,zt.rectAreaLights.value=z.state.rectArea,zt.ltc_1.value=z.state.rectAreaLTC1,zt.ltc_2.value=z.state.rectAreaLTC2,zt.pointLights.value=z.state.point,zt.pointLightShadows.value=z.state.pointShadow,zt.hemisphereLights.value=z.state.hemi,zt.directionalShadowMap.value=z.state.directionalShadowMap,zt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,zt.spotShadowMap.value=z.state.spotShadowMap,zt.spotLightMatrix.value=z.state.spotLightMatrix,zt.spotLightMap.value=z.state.spotLightMap,zt.pointShadowMap.value=z.state.pointShadowMap,zt.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Zt,X.uniformsList=null,Zt}function Mt(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Qo.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Wt(T,F){const H=pt.get(T);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function re(T,F,H,X,z){F.isScene!==!0&&(F=Jt),C.resetTextureUnits();const dt=F.fog,St=X.isMeshStandardMaterial?F.environment:null,kt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Es,It=(X.isMeshStandardMaterial?k:b).get(X.envMap||St),$t=X.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Zt=!!H.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),zt=!!H.morphAttributes.position,ce=!!H.morphAttributes.normal,at=!!H.morphAttributes.color;let Pt=di;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Pt=v.toneMapping);const pe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,le=pe!==void 0?pe.length:0,Ot=pt.get(X),fn=p.state.lights;if(ot===!0&&(Tt===!0||T!==S)){const an=T===S&&X.id===w;rt.setState(X,T,an)}let me=!1;X.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==fn.state.version||Ot.outputColorSpace!==kt||z.isBatchedMesh&&Ot.batching===!1||!z.isBatchedMesh&&Ot.batching===!0||z.isBatchedMesh&&Ot.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ot.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ot.instancing===!1||!z.isInstancedMesh&&Ot.instancing===!0||z.isSkinnedMesh&&Ot.skinning===!1||!z.isSkinnedMesh&&Ot.skinning===!0||z.isInstancedMesh&&Ot.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ot.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ot.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ot.instancingMorph===!1&&z.morphTexture!==null||Ot.envMap!==It||X.fog===!0&&Ot.fog!==dt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==rt.numPlanes||Ot.numIntersection!==rt.numIntersection)||Ot.vertexAlphas!==$t||Ot.vertexTangents!==Zt||Ot.morphTargets!==zt||Ot.morphNormals!==ce||Ot.morphColors!==at||Ot.toneMapping!==Pt||Ot.morphTargetsCount!==le)&&(me=!0):(me=!0,Ot.__version=X.version);let pn=Ot.currentProgram;me===!0&&(pn=ut(X,F,z));let zi=!1,Qe=!1,Is=!1;const be=pn.getUniforms(),En=Ot.uniforms;if(ht.useProgram(pn.program)&&(zi=!0,Qe=!0,Is=!0),X.id!==w&&(w=X.id,Qe=!0),zi||S!==T){ht.buffers.depth.getReversed()?(it.copy(T.projectionMatrix),md(it),gd(it),be.setValue(L,"projectionMatrix",it)):be.setValue(L,"projectionMatrix",T.projectionMatrix),be.setValue(L,"viewMatrix",T.matrixWorldInverse);const Zn=be.map.cameraPosition;Zn!==void 0&&Zn.setValue(L,Vt.setFromMatrixPosition(T.matrixWorld)),wt.logarithmicDepthBuffer&&be.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&be.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Qe=!0,Is=!0)}if(z.isSkinnedMesh){be.setOptional(L,z,"bindMatrix"),be.setOptional(L,z,"bindMatrixInverse");const an=z.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),be.setValue(L,"boneTexture",an.boneTexture,C))}z.isBatchedMesh&&(be.setOptional(L,z,"batchingTexture"),be.setValue(L,"batchingTexture",z._matricesTexture,C),be.setOptional(L,z,"batchingIdTexture"),be.setValue(L,"batchingIdTexture",z._indirectTexture,C),be.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&be.setValue(L,"batchingColorTexture",z._colorsTexture,C));const Us=H.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0)&&qt.update(z,H,pn),(Qe||Ot.receiveShadow!==z.receiveShadow)&&(Ot.receiveShadow=z.receiveShadow,be.setValue(L,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(En.envMap.value=It,En.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(En.envMapIntensity.value=F.environmentIntensity),Qe&&(be.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&ye(En,Is),dt&&X.fog===!0&&gt.refreshFogUniforms(En,dt),gt.refreshMaterialUniforms(En,X,W,q,p.state.transmissionRenderTarget[T.id]),Qo.upload(L,Mt(Ot),En,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Qo.upload(L,Mt(Ot),En,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&be.setValue(L,"center",z.center),be.setValue(L,"modelViewMatrix",z.modelViewMatrix),be.setValue(L,"normalMatrix",z.normalMatrix),be.setValue(L,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const an=X.uniformsGroups;for(let Zn=0,Kn=an.length;Zn<Kn;Zn++){const vc=an[Zn];I.update(vc,pn),I.bind(vc,pn)}}return pn}function ye(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Pe(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,F,H){pt.get(T.texture).__webglTexture=F,pt.get(T.depthTexture).__webglTexture=H;const X=pt.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=H===void 0,X.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const H=pt.get(T);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,H=0){R=T,y=F,E=H;let X=!0,z=null,dt=!1,St=!1;if(T){const It=pt.get(T);if(It.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(It.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(It.__hasExternalTextures)C.rebindTextures(T,pt.get(T.texture).__webglTexture,pt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const zt=T.depthTexture;if(It.__boundDepthTexture!==zt){if(zt!==null&&pt.has(zt)&&(T.width!==zt.image.width||T.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const $t=T.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(St=!0);const Zt=pt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Zt[F])?z=Zt[F][H]:z=Zt[F],dt=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?z=pt.get(T).__webglMultisampledFramebuffer:Array.isArray(Zt)?z=Zt[H]:z=Zt,P.copy(T.viewport),B.copy(T.scissor),U=T.scissorTest}else P.copy(yt).multiplyScalar(W).floor(),B.copy(Ut).multiplyScalar(W).floor(),U=Bt;if(ht.bindFramebuffer(L.FRAMEBUFFER,z)&&X&&ht.drawBuffers(T,z),ht.viewport(P),ht.scissor(B),ht.setScissorTest(U),dt){const It=pt.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,It.__webglTexture,H)}else if(St){const It=pt.get(T.texture),$t=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,It.__webglTexture,H||0,$t)}w=-1},this.readRenderTargetPixels=function(T,F,H,X,z,dt,St){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(kt=kt[St]),kt){ht.bindFramebuffer(L.FRAMEBUFFER,kt);try{const It=T.texture,$t=It.format,Zt=It.type;if(!wt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-X&&H>=0&&H<=T.height-z&&L.readPixels(F,H,X,z,Yt.convert($t),Yt.convert(Zt),dt)}finally{const It=R!==null?pt.get(R).__webglFramebuffer:null;ht.bindFramebuffer(L.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(T,F,H,X,z,dt,St){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(kt=kt[St]),kt){const It=T.texture,$t=It.format,Zt=It.type;if(!wt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-X&&H>=0&&H<=T.height-z){ht.bindFramebuffer(L.FRAMEBUFFER,kt);const zt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,zt),L.bufferData(L.PIXEL_PACK_BUFFER,dt.byteLength,L.STREAM_READ),L.readPixels(F,H,X,z,Yt.convert($t),Yt.convert(Zt),0);const ce=R!==null?pt.get(R).__webglFramebuffer:null;ht.bindFramebuffer(L.FRAMEBUFFER,ce);const at=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await pd(L,at,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,zt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,dt),L.deleteBuffer(zt),L.deleteSync(at),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,H=0){T.isTexture!==!0&&(qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-H),z=Math.floor(T.image.width*X),dt=Math.floor(T.image.height*X),St=F!==null?F.x:0,kt=F!==null?F.y:0;C.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,St,kt,z,dt),ht.unbindTexture()},this.copyTextureToTexture=function(T,F,H=null,X=null,z=0){T.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],F=arguments[2],z=arguments[3]||0,H=null);let dt,St,kt,It,$t,Zt,zt,ce,at;const Pt=T.isCompressedTexture?T.mipmaps[z]:T.image;H!==null?(dt=H.max.x-H.min.x,St=H.max.y-H.min.y,kt=H.isBox3?H.max.z-H.min.z:1,It=H.min.x,$t=H.min.y,Zt=H.isBox3?H.min.z:0):(dt=Pt.width,St=Pt.height,kt=Pt.depth||1,It=0,$t=0,Zt=0),X!==null?(zt=X.x,ce=X.y,at=X.z):(zt=0,ce=0,at=0);const pe=Yt.convert(F.format),le=Yt.convert(F.type);let Ot;F.isData3DTexture?(C.setTexture3D(F,0),Ot=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),Ot=L.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),Ot=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const fn=L.getParameter(L.UNPACK_ROW_LENGTH),me=L.getParameter(L.UNPACK_IMAGE_HEIGHT),pn=L.getParameter(L.UNPACK_SKIP_PIXELS),zi=L.getParameter(L.UNPACK_SKIP_ROWS),Qe=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,It),L.pixelStorei(L.UNPACK_SKIP_ROWS,$t),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Zt);const Is=T.isDataArrayTexture||T.isData3DTexture,be=F.isDataArrayTexture||F.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const En=pt.get(T),Us=pt.get(F),an=pt.get(En.__renderTarget),Zn=pt.get(Us.__renderTarget);ht.bindFramebuffer(L.READ_FRAMEBUFFER,an.__webglFramebuffer),ht.bindFramebuffer(L.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Kn=0;Kn<kt;Kn++)Is&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.get(T).__webglTexture,z,Zt+Kn),T.isDepthTexture?(be&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.get(F).__webglTexture,z,at+Kn),L.blitFramebuffer(It,$t,dt,St,zt,ce,dt,St,L.DEPTH_BUFFER_BIT,L.NEAREST)):be?L.copyTexSubImage3D(Ot,z,zt,ce,at+Kn,It,$t,dt,St):L.copyTexSubImage2D(Ot,z,zt,ce,at+Kn,It,$t,dt,St);ht.bindFramebuffer(L.READ_FRAMEBUFFER,null),ht.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else be?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Ot,z,zt,ce,at,dt,St,kt,pe,le,Pt.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Ot,z,zt,ce,at,dt,St,kt,pe,Pt.data):L.texSubImage3D(Ot,z,zt,ce,at,dt,St,kt,pe,le,Pt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,z,zt,ce,dt,St,pe,le,Pt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,z,zt,ce,Pt.width,Pt.height,pe,Pt.data):L.texSubImage2D(L.TEXTURE_2D,z,zt,ce,dt,St,pe,le,Pt);L.pixelStorei(L.UNPACK_ROW_LENGTH,fn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pn),L.pixelStorei(L.UNPACK_SKIP_ROWS,zi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qe),z===0&&F.generateMipmaps&&L.generateMipmap(Ot),ht.unbindTexture()},this.copyTextureToTexture3D=function(T,F,H=null,X=null,z=0){return T.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,X=arguments[1]||null,T=arguments[2],F=arguments[3],z=arguments[4]||0),qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,H,X,z)},this.initRenderTarget=function(T){pt.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),ht.unbindTexture()},this.resetState=function(){y=0,E=0,R=null,ht.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}class cc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new cc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jh extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Tg extends We{constructor(t=null,e=1,n=1,s,o,r,a,c,l=on,h=on,f,u){super(null,r,a,c,l,h,s,o,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _l extends Xe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ts=new he,vl=new he,Lo=[],xl=new Fi,Ag=new he,zs=new Z,Bs=new Ts;class Pn extends Z{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _l(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ag)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),xl.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(xl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ts),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Bs.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),t.ray.intersectsSphere(Bs)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,ts),vl.multiplyMatrices(n,ts),zs.matrixWorld=vl,zs.raycast(t,Lo);for(let r=0,a=Lo.length;r<a;r++){const c=Lo[r];c.instanceId=o,c.object=this,e.push(c)}Lo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tg(new Float32Array(s*this.count),s,this.count,tc,Cn));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Zh extends As{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const or=new D,rr=new D,Ml=new he,Hs=new lr,Do=new Ts,Vr=new D,yl=new D;class Rg extends Ce{constructor(t=new _e,e=new Zh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)or.fromBufferAttribute(e,s-1),rr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=or.distanceTo(rr);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(s),Do.radius+=o,t.ray.intersectsSphere(Do)===!1)return;Ml.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(Ml);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let _=d,g=m-1;_<g;_+=l){const p=h.getX(_),x=h.getX(_+1),M=Io(this,t,Hs,c,p,x);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(d),p=Io(this,t,Hs,c,_,g);p&&e.push(p)}}else{const d=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let _=d,g=m-1;_<g;_+=l){const p=Io(this,t,Hs,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Io(this,t,Hs,c,m-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Io(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(or.fromBufferAttribute(r,s),rr.fromBufferAttribute(r,o),e.distanceSqToSegment(or,rr,Vr,yl)>n)return;Vr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Vr);if(!(c<t.near||c>t.far))return{distance:c,point:yl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Cs extends We{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const h=n[s],u=n[s+1]-h,d=(r-h)/u;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new nt:new D);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],o=[],r=[],a=new D,c=new he;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new D)}o[0]=new D,r[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(De(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(c.makeRotationAxis(a,m))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(De(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let m=1;m<=t;m++)o[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class lc extends Nn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cg extends lc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function hc(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,f){let u=(r-o)/l-(a-o)/(l+h)+(a-r)/h,d=(a-r)/h-(c-r)/(h+f)+(c-a)/f;u*=h,d*=h,s(r,a,u,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Uo=new D,Wr=new hc,Xr=new hc,$r=new hc;class Pg extends Nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(Uo.subVectors(s[0],s[1]).add(s[0]),l=Uo);const f=s[a%o],u=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Uo.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Uo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Wr.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,m,_,g),Xr.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,m,_,g),$r.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Wr.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Xr.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),$r.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(Wr.calc(c),Xr.calc(c),$r.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bl(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function Lg(i,t){const e=1-i;return e*e*t}function Dg(i,t){return 2*(1-i)*i*t}function Ig(i,t){return i*i*t}function Js(i,t,e,n){return Lg(i,t)+Dg(i,e)+Ig(i,n)}function Ug(i,t){const e=1-i;return e*e*e*t}function Ng(i,t){const e=1-i;return 3*e*e*i*t}function Og(i,t){return 3*(1-i)*i*i*t}function Fg(i,t){return i*i*i*t}function Qs(i,t,e,n,s){return Ug(i,t)+Ng(i,e)+Og(i,n)+Fg(i,s)}class Kh extends Nn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Qs(t,s.x,o.x,r.x,a.x),Qs(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kg extends Nn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Qs(t,s.x,o.x,r.x,a.x),Qs(t,s.y,o.y,r.y,a.y),Qs(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jh extends Nn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zg extends Nn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qh extends Nn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Js(t,s.x,o.x,r.x),Js(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bg extends Nn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Js(t,s.x,o.x,r.x),Js(t,s.y,o.y,r.y),Js(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tu extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(bl(a,c.x,l.x,h.x,f.x),bl(a,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var Va=Object.freeze({__proto__:null,ArcCurve:Cg,CatmullRomCurve3:Pg,CubicBezierCurve:Kh,CubicBezierCurve3:kg,EllipseCurve:lc,LineCurve:Jh,LineCurve3:zg,QuadraticBezierCurve:Qh,QuadraticBezierCurve3:Bg,SplineCurve:tu});class Hg extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Va[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Va[s.type]().fromJSON(s))}return this}}class Sl extends Hg{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Jh(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Qh(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Kh(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new tu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new lc(t,e,n,s,o,r,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class uc extends _e{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=De(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],h=1/e,f=new D,u=new nt,d=new D,m=new D,_=new D;let g=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(m)}for(let x=0;x<=e;x++){const M=n+x*h*s,v=Math.sin(M),A=Math.cos(M);for(let y=0;y<=t.length-1;y++){f.x=t[y].x*v,f.y=t[y].y,f.z=t[y].x*A,r.push(f.x,f.y,f.z),u.x=x/e,u.y=y/(t.length-1),a.push(u.x,u.y);const E=c[3*y+0]*v,R=c[3*y+1],w=c[3*y+0]*A;l.push(E,R,w)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){const v=M+x*t.length,A=v,y=v+t.length,E=v+t.length+1,R=v+1;o.push(A,y,R),o.push(E,R,y)}this.setIndex(o),this.setAttribute("position",new Kt(r,3)),this.setAttribute("uv",new Kt(a,2)),this.setAttribute("normal",new Kt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uc(t.points,t.segments,t.phiStart,t.phiLength)}}class ee extends _e{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],f=[],u=[],d=[];let m=0;const _=[],g=n/2;let p=0;x(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Kt(f,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(d,2));function x(){const v=new D,A=new D;let y=0;const E=(e-t)/n;for(let R=0;R<=o;R++){const w=[],S=R/o,P=S*(e-t)+t;for(let B=0;B<=s;B++){const U=B/s,G=U*c+a,$=Math.sin(G),N=Math.cos(G);A.x=P*$,A.y=-S*n+g,A.z=P*N,f.push(A.x,A.y,A.z),v.set($,E,N).normalize(),u.push(v.x,v.y,v.z),d.push(U,1-S),w.push(m++)}_.push(w)}for(let R=0;R<s;R++)for(let w=0;w<o;w++){const S=_[w][R],P=_[w+1][R],B=_[w+1][R+1],U=_[w][R+1];(t>0||w!==0)&&(h.push(S,P,U),y+=3),(e>0||w!==o-1)&&(h.push(P,B,U),y+=3)}l.addGroup(p,y,0),p+=y}function M(v){const A=m,y=new nt,E=new D;let R=0;const w=v===!0?t:e,S=v===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,g*S,0),u.push(0,S,0),d.push(.5,.5),m++;const P=m;for(let B=0;B<=s;B++){const G=B/s*c+a,$=Math.cos(G),N=Math.sin(G);E.x=w*N,E.y=g*S,E.z=w*$,f.push(E.x,E.y,E.z),u.push(0,S,0),y.x=$*.5+.5,y.y=N*.5*S+.5,d.push(y.x,y.y),m++}for(let B=0;B<s;B++){const U=A+B,G=P+B;v===!0?h.push(G,G+1,U):h.push(G+1,G,U),R+=3}l.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ln extends ee{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Ln(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ur extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),h(),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(o.slice(),3)),this.setAttribute("uv",new Kt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new D,v=new D,A=new D;for(let y=0;y<e.length;y+=3)d(e[y+0],M),d(e[y+1],v),d(e[y+2],A),c(M,v,A,x)}function c(x,M,v,A){const y=A+1,E=[];for(let R=0;R<=y;R++){E[R]=[];const w=x.clone().lerp(v,R/y),S=M.clone().lerp(v,R/y),P=y-R;for(let B=0;B<=P;B++)B===0&&R===y?E[R][B]=w:E[R][B]=w.clone().lerp(S,B/P)}for(let R=0;R<y;R++)for(let w=0;w<2*(y-R)-1;w++){const S=Math.floor(w/2);w%2===0?(u(E[R][S+1]),u(E[R+1][S]),u(E[R][S])):(u(E[R][S+1]),u(E[R+1][S+1]),u(E[R+1][S]))}}function l(x){const M=new D;for(let v=0;v<o.length;v+=3)M.x=o[v+0],M.y=o[v+1],M.z=o[v+2],M.normalize().multiplyScalar(x),o[v+0]=M.x,o[v+1]=M.y,o[v+2]=M.z}function h(){const x=new D;for(let M=0;M<o.length;M+=3){x.x=o[M+0],x.y=o[M+1],x.z=o[M+2];const v=g(x)/2/Math.PI+.5,A=p(x)/Math.PI+.5;r.push(v,1-A)}m(),f()}function f(){for(let x=0;x<r.length;x+=6){const M=r[x+0],v=r[x+2],A=r[x+4],y=Math.max(M,v,A),E=Math.min(M,v,A);y>.9&&E<.1&&(M<.2&&(r[x+0]+=1),v<.2&&(r[x+2]+=1),A<.2&&(r[x+4]+=1))}}function u(x){o.push(x.x,x.y,x.z)}function d(x,M){const v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function m(){const x=new D,M=new D,v=new D,A=new D,y=new nt,E=new nt,R=new nt;for(let w=0,S=0;w<o.length;w+=9,S+=6){x.set(o[w+0],o[w+1],o[w+2]),M.set(o[w+3],o[w+4],o[w+5]),v.set(o[w+6],o[w+7],o[w+8]),y.set(r[S+0],r[S+1]),E.set(r[S+2],r[S+3]),R.set(r[S+4],r[S+5]),A.copy(x).add(M).add(v).divideScalar(3);const P=g(A);_(y,S+0,x,P),_(E,S+2,M,P),_(R,S+4,v,P)}}function _(x,M,v,A){A<0&&x.x===1&&(r[M]=x.x-1),v.x===0&&v.z===0&&(r[M]=A/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.vertices,t.indices,t.radius,t.details)}}class ki extends Sl{constructor(t){super(t),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Sl().fromJSON(s))}return this}}const Gg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=eu(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,f,u,d;if(n&&(o=qg(i,t,o,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)f=i[m],u=i[m+1],f<a&&(a=f),u<c&&(c=u),f>l&&(l=f),u>h&&(h=u);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return no(o,r,e,a,c,d,0),r}};function eu(i,t,e,n,s){let o,r;if(s===s_(i,t,e,n)>0)for(o=t;o<e;o+=n)r=wl(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=wl(o,i[o],i[o+1],r);return r&&dr(r,r.next)&&(so(r),r=r.next),r}function Ii(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(dr(e,e.next)||we(e.prev,e,e.next)===0)){if(so(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function no(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Jg(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?Wg(i,n,s,o):Vg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),so(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=Xg(Ii(i),t,e),no(i,t,e,n,s,o,2)):r===2&&$g(i,t,e,n,s,o):no(Ii(i),t,e,n,s,o,1);break}}}function Vg(i){const t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=s<o?s<r?s:r:o<r?o:r,f=a<c?a<l?a:l:c<l?c:l,u=s>o?s>r?s:r:o>r?o:r,d=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&ls(s,a,o,c,r,l,m.x,m.y)&&we(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Wg(i,t,e,n){const s=i.prev,o=i,r=i.next;if(we(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,f=o.y,u=r.y,d=a<c?a<l?a:l:c<l?c:l,m=h<f?h<u?h:u:f<u?f:u,_=a>c?a>l?a:l:c>l?c:l,g=h>f?h>u?h:u:f>u?f:u,p=Wa(d,m,t,e,n),x=Wa(_,g,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=x;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==r&&ls(a,h,c,f,l,u,M.x,M.y)&&we(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==r&&ls(a,h,c,f,l,u,v.x,v.y)&&we(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==r&&ls(a,h,c,f,l,u,M.x,M.y)&&we(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==r&&ls(a,h,c,f,l,u,v.x,v.y)&&we(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Xg(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!dr(s,o)&&nu(s,n,n.next,o)&&io(s,o)&&io(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),so(n),so(n.next),n=i=o),n=n.next}while(n!==i);return Ii(n)}function $g(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&e_(r,a)){let c=iu(r,a);r=Ii(r,r.next),c=Ii(c,c.next),no(r,t,e,n,s,o,0),no(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function qg(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=eu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(t_(l));for(s.sort(Yg),o=0;o<s.length;o++)e=jg(s[o],e);return e}function Yg(i,t){return i.x-t.x}function jg(i,t){const e=Zg(i,t);if(!e)return t;const n=iu(e,i);return Ii(n,n.next),Ii(e,e.next)}function Zg(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=o&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,f;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&ls(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(o-e.x),io(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&Kg(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function Kg(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function Jg(i,t,e,n){let s=i;do s.z===0&&(s.z=Wa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qg(s)}function Qg(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function Wa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function t_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ls(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function e_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!n_(i,t)&&(io(i,t)&&io(t,i)&&i_(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||dr(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function dr(i,t){return i.x===t.x&&i.y===t.y}function nu(i,t,e,n){const s=Oo(we(i,t,e)),o=Oo(we(i,t,n)),r=Oo(we(e,n,i)),a=Oo(we(e,n,t));return!!(s!==o&&r!==a||s===0&&No(i,e,t)||o===0&&No(i,n,t)||r===0&&No(e,i,n)||a===0&&No(e,t,n))}function No(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Oo(i){return i>0?1:i<0?-1:0}function n_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&nu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function io(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function i_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function iu(i,t){const e=new Xa(i.i,i.x,i.y),n=new Xa(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function wl(i,t,e,n){const s=new Xa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function so(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function s_(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Dn{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Dn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];El(t),Tl(n,t);let r=t.length;e.forEach(El);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,Tl(n,e[c]);const a=Gg.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function El(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ss extends _e{constructor(t=new ki([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:o_;let M,v=!1,A,y,E,R;p&&(M=p.getSpacedPoints(h),v=!0,u=!1,A=p.computeFrenetFrames(h,!1),y=new D,E=new D,R=new D),u||(g=0,d=0,m=0,_=0);const w=a.extractPoints(l);let S=w.shape;const P=w.holes;if(!Dn.isClockWise(S)){S=S.reverse();for(let Q=0,ct=P.length;Q<ct;Q++){const L=P[Q];Dn.isClockWise(L)&&(P[Q]=L.reverse())}}const U=Dn.triangulateShape(S,P),G=S;for(let Q=0,ct=P.length;Q<ct;Q++){const L=P[Q];S=S.concat(L)}function $(Q,ct,L){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ct,L)}const N=S.length,q=U.length;function W(Q,ct,L){let ft,st,wt;const ht=Q.x-ct.x,Gt=Q.y-ct.y,pt=L.x-Q.x,C=L.y-Q.y,b=ht*ht+Gt*Gt,k=ht*C-Gt*pt;if(Math.abs(k)>Number.EPSILON){const K=Math.sqrt(b),et=Math.sqrt(pt*pt+C*C),J=ct.x-Gt/K,Ct=ct.y+ht/K,gt=L.x-C/et,Rt=L.y+pt/et,oe=((gt-J)*C-(Rt-Ct)*pt)/(ht*C-Gt*pt);ft=J+ht*oe-Q.x,st=Ct+Gt*oe-Q.y;const rt=ft*ft+st*st;if(rt<=2)return new nt(ft,st);wt=Math.sqrt(rt/2)}else{let K=!1;ht>Number.EPSILON?pt>Number.EPSILON&&(K=!0):ht<-Number.EPSILON?pt<-Number.EPSILON&&(K=!0):Math.sign(Gt)===Math.sign(C)&&(K=!0),K?(ft=-Gt,st=ht,wt=Math.sqrt(b)):(ft=ht,st=Gt,wt=Math.sqrt(b/2))}return new nt(ft/wt,st/wt)}const lt=[];for(let Q=0,ct=G.length,L=ct-1,ft=Q+1;Q<ct;Q++,L++,ft++)L===ct&&(L=0),ft===ct&&(ft=0),lt[Q]=W(G[Q],G[L],G[ft]);const mt=[];let yt,Ut=lt.concat();for(let Q=0,ct=P.length;Q<ct;Q++){const L=P[Q];yt=[];for(let ft=0,st=L.length,wt=st-1,ht=ft+1;ft<st;ft++,wt++,ht++)wt===st&&(wt=0),ht===st&&(ht=0),yt[ft]=W(L[ft],L[wt],L[ht]);mt.push(yt),Ut=Ut.concat(yt)}for(let Q=0;Q<g;Q++){const ct=Q/g,L=d*Math.cos(ct*Math.PI/2),ft=m*Math.sin(ct*Math.PI/2)+_;for(let st=0,wt=G.length;st<wt;st++){const ht=$(G[st],lt[st],ft);it(ht.x,ht.y,-L)}for(let st=0,wt=P.length;st<wt;st++){const ht=P[st];yt=mt[st];for(let Gt=0,pt=ht.length;Gt<pt;Gt++){const C=$(ht[Gt],yt[Gt],ft);it(C.x,C.y,-L)}}}const Bt=m+_;for(let Q=0;Q<N;Q++){const ct=u?$(S[Q],Ut[Q],Bt):S[Q];v?(E.copy(A.normals[0]).multiplyScalar(ct.x),y.copy(A.binormals[0]).multiplyScalar(ct.y),R.copy(M[0]).add(E).add(y),it(R.x,R.y,R.z)):it(ct.x,ct.y,0)}for(let Q=1;Q<=h;Q++)for(let ct=0;ct<N;ct++){const L=u?$(S[ct],Ut[ct],Bt):S[ct];v?(E.copy(A.normals[Q]).multiplyScalar(L.x),y.copy(A.binormals[Q]).multiplyScalar(L.y),R.copy(M[Q]).add(E).add(y),it(R.x,R.y,R.z)):it(L.x,L.y,f/h*Q)}for(let Q=g-1;Q>=0;Q--){const ct=Q/g,L=d*Math.cos(ct*Math.PI/2),ft=m*Math.sin(ct*Math.PI/2)+_;for(let st=0,wt=G.length;st<wt;st++){const ht=$(G[st],lt[st],ft);it(ht.x,ht.y,f+L)}for(let st=0,wt=P.length;st<wt;st++){const ht=P[st];yt=mt[st];for(let Gt=0,pt=ht.length;Gt<pt;Gt++){const C=$(ht[Gt],yt[Gt],ft);v?it(C.x,C.y+M[h-1].y,M[h-1].x+L):it(C.x,C.y,f+L)}}}j(),ot();function j(){const Q=s.length/3;if(u){let ct=0,L=N*ct;for(let ft=0;ft<q;ft++){const st=U[ft];At(st[2]+L,st[1]+L,st[0]+L)}ct=h+g*2,L=N*ct;for(let ft=0;ft<q;ft++){const st=U[ft];At(st[0]+L,st[1]+L,st[2]+L)}}else{for(let ct=0;ct<q;ct++){const L=U[ct];At(L[2],L[1],L[0])}for(let ct=0;ct<q;ct++){const L=U[ct];At(L[0]+N*h,L[1]+N*h,L[2]+N*h)}}n.addGroup(Q,s.length/3-Q,0)}function ot(){const Q=s.length/3;let ct=0;Tt(G,ct),ct+=G.length;for(let L=0,ft=P.length;L<ft;L++){const st=P[L];Tt(st,ct),ct+=st.length}n.addGroup(Q,s.length/3-Q,1)}function Tt(Q,ct){let L=Q.length;for(;--L>=0;){const ft=L;let st=L-1;st<0&&(st=Q.length-1);for(let wt=0,ht=h+g*2;wt<ht;wt++){const Gt=N*wt,pt=N*(wt+1),C=ct+ft+Gt,b=ct+st+Gt,k=ct+st+pt,K=ct+ft+pt;Vt(C,b,k,K)}}}function it(Q,ct,L){c.push(Q),c.push(ct),c.push(L)}function At(Q,ct,L){Ft(Q),Ft(ct),Ft(L);const ft=s.length/3,st=x.generateTopUV(n,s,ft-3,ft-2,ft-1);Jt(st[0]),Jt(st[1]),Jt(st[2])}function Vt(Q,ct,L,ft){Ft(Q),Ft(ct),Ft(ft),Ft(ct),Ft(L),Ft(ft);const st=s.length/3,wt=x.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);Jt(wt[0]),Jt(wt[1]),Jt(wt[3]),Jt(wt[1]),Jt(wt[2]),Jt(wt[3])}function Ft(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function Jt(Q){o.push(Q.x),o.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return r_(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Va[s.type]().fromJSON(s)),new Ss(n,t.options)}}const o_={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new nt(o,r),new nt(a,c),new nt(l,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],m=t[s*3+2],_=t[o*3],g=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new nt(r,1-c),new nt(l,1-f),new nt(u,1-m),new nt(_,1-p)]:[new nt(a,1-c),new nt(h,1-f),new nt(d,1-m),new nt(g,1-p)]}};function r_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Je extends ur{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Je(t.radius,t.detail)}}class dc extends ur{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new dc(t.radius,t.detail)}}class fr extends _e{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let f=t;const u=(e-t)/s,d=new D,m=new nt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const p=o+g/n*r;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}f+=u}for(let _=0;_<s;_++){const g=_*(n+1);for(let p=0;p<n;p++){const x=p+g,M=x,v=x+n+1,A=x+n+2,y=x+1;a.push(M,v,y),a.push(v,A,y)}}this.setIndex(a),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class fc extends _e{constructor(t=new ki([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(o,3)),this.setAttribute("uv",new Kt(r,2));function l(h){const f=s.length/3,u=h.extractPoints(e);let d=u.shape;const m=u.holes;Dn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];Dn.isClockWise(x)===!0&&(m[g]=x.reverse())}const _=Dn.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];d=d.concat(x)}for(let g=0,p=d.length;g<p;g++){const x=d[g];s.push(x.x,x.y,0),o.push(0,0,1),r.push(x.x,x.y)}for(let g=0,p=_.length;g<p;g++){const x=_[g],M=x[0]+f,v=x[1]+f,A=x[2]+f;n.push(M,v,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return a_(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new fc(n,t.curveSegments)}}function a_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ve extends _e{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],f=new D,u=new D,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let v=0;p===0&&r===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const y=A/e;f.x=-t*Math.cos(s+y*o)*Math.sin(r+M*a),f.y=t*Math.cos(r+M*a),f.z=t*Math.sin(s+y*o)*Math.sin(r+M*a),m.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(y+v,1-M),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=h[p][x+1],v=h[p][x],A=h[p+1][x],y=h[p+1][x+1];(p!==0||r>0)&&d.push(M,v,y),(p!==n-1||c<Math.PI)&&d.push(v,A,y)}this.setIndex(d),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class un extends _e{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new D,f=new D,u=new D;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){const _=m/s*o,g=d/n*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(_),f.y=(t+e*Math.cos(g))*Math.sin(_),f.z=e*Math.sin(g),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(m/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){const _=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,x=(s+1)*d+m;r.push(_,g,x),r.push(g,p,x)}this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class te extends As{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pc extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class c_ extends pc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qr=new he,Al=new D,Rl=new D;class su{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rc,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Al.setFromMatrixPosition(t.matrixWorld),e.position.copy(Al),Rl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rl),e.updateMatrixWorld(),qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class l_ extends su{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ms*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class h_ extends pc{constructor(t,e,n=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new l_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class u_ extends su{constructor(){super(new Vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class d_ extends pc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new u_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class f_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Cl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Cl(){return performance.now()}const Pl=new he;class ou{constructor(t,e,n=0,s=1/0){this.ray=new lr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new oc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Pl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pl),this}intersectObject(t,e=!0,n=[]){return $a(t,this,n,e),n.sort(Ll),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)$a(t[s],this,n,e);return n.sort(Ll),n}}function Ll(i,t){return i.distance-t.distance}function $a(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)$a(o[r],t,e,!0)}}class Dl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(De(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class p_ extends Ni{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);const Il={type:"change"},mc={type:"start"},ru={type:"end"},Fo=new lr,Ul=new ai,m_=Math.cos(70*ys.DEG2RAD),Le=new D,Ze=2*Math.PI,xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yr=1e-6;class g_ extends p_{constructor(t,e=null){super(t,e),this.state=xe.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:us.ROTATE,MIDDLE:us.DOLLY,RIGHT:us.PAN},this.touches={ONE:as.ROTATE,TWO:as.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new wn,this._lastTargetPosition=new D,this._quat=new wn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dl,this._sphericalDelta=new Dl,this._scale=1,this._panOffset=new D,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new D,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=v_.bind(this),this._onPointerDown=__.bind(this),this._onPointerUp=x_.bind(this),this._onContextMenu=T_.bind(this),this._onMouseWheel=b_.bind(this),this._onKeyDown=S_.bind(this),this._onTouchStart=w_.bind(this),this._onTouchMove=E_.bind(this),this._onMouseDown=M_.bind(this),this._onMouseMove=y_.bind(this),this._interceptControlDown=A_.bind(this),this._interceptControlUp=R_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Il),this.update(),this.state=xe.NONE}update(t=null){const e=this.object.position;Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ze:n>Math.PI&&(n-=Ze),s<-Math.PI?s+=Ze:s>Math.PI&&(s-=Ze),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Le.length();r=this._clampDistance(a*this._scale);const c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Fo.origin.copy(this.object.position),Fo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fo.direction))<m_?this.object.lookAt(this.target):(Ul.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fo.intersectPlane(Ul,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Yr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yr||this._lastTargetPosition.distanceToSquared(this.target)>Yr?(this.dispatchEvent(Il),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){this.screenSpacePanning===!0?Le.setFromMatrixColumn(e,1):(Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Le.copy(s).sub(this.target);let o=Le.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function __(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function v_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function x_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ru),this.state=xe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function M_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xe.DOLLY;break;case us.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xe.ROTATE}break;case us.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xe.PAN}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(mc)}function y_(i){switch(this.state){case xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function b_(i){this.enabled===!1||this.enableZoom===!1||this.state!==xe.NONE||(i.preventDefault(),this.dispatchEvent(mc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ru))}function S_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function w_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case as.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xe.TOUCH_ROTATE;break;case as.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xe.TOUCH_PAN;break;default:this.state=xe.NONE}break;case 2:switch(this.touches.TWO){case as.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xe.TOUCH_DOLLY_PAN;break;case as.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xe.TOUCH_DOLLY_ROTATE;break;default:this.state=xe.NONE}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(mc)}function E_(i){switch(this._trackPointer(i),this.state){case xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xe.NONE}}function T_(i){this.enabled!==!1&&i.preventDefault()}function A_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function R_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}async function C_(i){const t=await fetch(i);if(!t.ok)throw new Error(`Failed to load ${i}: ${t.status}`);return t.json()}class P_{constructor(t){O(this,"n");O(this,"x");O(this,"z");O(this,"s");O(this,"length");O(this,"vtx");O(this,"vtz");const e=this.n=t.length/2;this.x=new Float64Array(e),this.z=new Float64Array(e),this.s=new Float64Array(e);for(let n=0;n<e;n++)this.x[n]=t[n*2],this.z[n]=t[n*2+1],n>0&&(this.s[n]=this.s[n-1]+Math.hypot(this.x[n]-this.x[n-1],this.z[n]-this.z[n-1]));this.length=this.s[e-1],this.vtx=new Float64Array(e),this.vtz=new Float64Array(e);for(let n=0;n<e;n++){const s=Math.max(0,n-1),o=Math.min(e-1,n+1),r=this.x[o]-this.x[s],a=this.z[o]-this.z[s],c=Math.hypot(r,a)||1;this.vtx[n]=r/c,this.vtz[n]=a/c}}segIndex(t){let e=0,n=this.n-2;for(;e<n;){const s=e+n+1>>1;this.s[s]<=t?e=s:n=s-1}return e}frame(t,e={x:0,z:0,tx:0,tz:1,nx:-1,nz:0}){const n=this.segIndex(t),s=(t-this.s[n])/(this.s[n+1]-this.s[n]||1);e.x=this.x[n]+(this.x[n+1]-this.x[n])*s,e.z=this.z[n]+(this.z[n+1]-this.z[n])*s;let o=this.vtx[n]+(this.vtx[n+1]-this.vtx[n])*s,r=this.vtz[n]+(this.vtz[n+1]-this.vtz[n])*s;const a=Math.hypot(o,r)||1;return o/=a,r/=a,e.tx=o,e.tz=r,e.nx=-r,e.nz=o,e}point(t,e){const n=this.frame(t);return[n.x+n.nx*e,n.z+n.nz*e]}project(t,e,n=-1){let s,o;if(n>=0){const h=this.segIndex(n);s=Math.max(0,h-60),o=Math.min(this.n-2,h+60)}else{let h=1/0,f=0;for(let u=0;u<this.n;u+=8){const d=(t-this.x[u])**2+(e-this.z[u])**2;d<h&&(h=d,f=u)}s=Math.max(0,f-24),o=Math.min(this.n-2,f+24)}let r=1/0,a=0,c=1;for(let h=s;h<=o;h++){const f=this.x[h],u=this.z[h],d=this.x[h+1]-f,m=this.z[h+1]-u,_=d*d+m*m||1e-9;let g=((t-f)*d+(e-u)*m)/_;g=g<0?0:g>1?1:g;const p=f+d*g,x=u+m*g,M=(t-p)**2+(e-x)**2;M<r&&(r=M,a=this.s[h]+Math.sqrt(_)*g,c=(t-f)*-m+(e-u)*d>=0?1:-1)}const l=Math.sqrt(r);return{s:a,d:l*c,dist:l}}}function bn(i,t,e=0){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const Nl=i=>i*i*(3-2*i);function L_(i,t,e=0){const n=Math.floor(i),s=Math.floor(t),o=Nl(i-n),r=Nl(t-s),a=bn(n,s,e),c=bn(n+1,s,e),l=bn(n,s+1,e),h=bn(n+1,s+1,e);return(a+(c-a)*o+(l-a)*r+(a-c-l+h)*o*r)*2-1}function hi(i,t,e=4,n=0){let s=0,o=.5,r=1;for(let a=0;a<e;a++)s+=o*L_(i*r,t*r,n+a*17),o*=.5,r*=2.03;return s}function ws(i){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Te=(i,t,e)=>i<t?t:i>e?e:i,os=(i,t,e)=>i+(t-i)*e,ke=(i,t,e)=>{const n=Te((e-i)/(t-i),0,1);return n*n*(3-2*n)},Mn=5.2,li=2.2,qa=3.1,D_=1.6,I_=10.5,ko=22*4.4,U_=.8,N_=7,O_=3,F_=.04,Ol=.08;class k_{constructor(t,e,n,s=[],o=0){O(this,"bodies",[]);O(this,"gates",[]);O(this,"groups",[]);O(this,"events",[]);O(this,"hwTable");O(this,"hwStep",.5);O(this,"overflowCooldown",0);this.length=n,this.windingHoles=s;const r=[];for(const u of[...t].sort((d,m)=>d.s0-m.s0)){const d=r.at(-1);d&&Math.abs(d.at(-1).s1-u.s0)<4?d.push(u):r.push([u])}let a=o,c=0,l=0;for(const u of r){const d=u.length>1,m=d?z_(u):u[0].name;this.bodies.push({kind:"pound",s0:c,s1:u[0].s0,level:a,lo:a,hi:a,label:"the canal"});const _={name:m,staircase:d,gates:[],bodies:[this.bodies.length-1]};this.groups.push(_);for(let g=0;g<u.length;g++){const p=u[g],x=g===0?p.s0:u[g-1].s1,M=a,v=a+p.rise,A=d?g>0:l++%2===1,y=d?`chamber ${g+1}`:"the lock";this.bodies.push({kind:"chamber",s0:x,s1:p.s1,level:A?v:M,lo:M,hi:v,lockName:m,label:y}),_.bodies.push(this.bodies.length-1),a=v}c=u.at(-1).s1;for(let g=0;g<=u.length;g++){const p=this.bodies.length-1-u.length+g,x=g===0?"bottom gates":g===u.length?"top gates":u.length===2?"middle gates":u.length===3?`middle gates (${g===1?"lower":"upper"})`:`middle gates ${g}`,M={s:g===0?u[0].s0:u[g-1].s1,below:p,above:p+1,open:0,wantOpen:!1,paddle:0,wantPaddle:!1,flow:0,lockName:m,label:x,group:_};this.gates.push(M),_.gates.push(M)}_.bodies.push(this.bodies.length)}this.bodies.push({kind:"pound",s0:c,s1:n,level:a,lo:a,hi:a,label:"the canal"});const h=Math.ceil(n/this.hwStep)+1;this.hwTable=new Float32Array(h);const f=e.filter(u=>u.kind==="road"&&u.w<12);for(let u=0;u<h;u++){const d=u*this.hwStep;let m=Mn;for(const _ of this.bodies){if(_.kind!=="chamber")continue;const g=Math.max(_.s0-d,d-_.s1,0);m=Math.min(m,li+(Mn-li)*ke(.5,9,g))}for(const _ of f){const g=Math.max(Math.abs(d-_.s)-_.w/2-3.5,0);m=Math.min(m,qa+(Mn-qa)*ke(0,7,g))}for(const _ of s){const g=Math.abs(d-_);g<26&&(m=Math.max(m,Mn+(I_-Mn)*ke(26,9,g)))}this.hwTable[u]=m}}bodyIndexAt(t){for(let e=0;e<this.bodies.length;e++)if(t<this.bodies[e].s1)return e;return this.bodies.length-1}levelAt(t){return this.bodies[this.bodyIndexAt(t)].level}bedAt(t){return this.bodies[this.bodyIndexAt(t)].lo-D_}halfWidthAt(t){const e=Te(t/this.hwStep,0,this.hwTable.length-1),n=Math.floor(e),s=e-n,o=this.hwTable[n],r=this.hwTable[Math.min(n+1,this.hwTable.length-1)];return o+(r-o)*s}levelsMatch(t){return Math.abs(this.bodies[t.below].level-this.bodies[t.above].level)<F_}openBlocker(t){return this.levelsMatch(t)?null:`The water's ${Math.abs(this.bodies[t.below].level-this.bodies[t.above].level).toFixed(1)} m higher on one side, so the gates won't budge. Raise the paddles first.`}toggleGate(t,e){if(t.wantOpen)return e?"The boat's in the way of the gates.":(t.wantOpen=!1,null);const n=this.openBlocker(t);return n||(t.wantOpen=!0,null)}togglePaddle(t){t.wantPaddle=!t.wantPaddle}gateBlocks(t){return t.open<.97}update(t){this.overflowCooldown-=t;for(const n of this.gates)n.open=Te(n.open+(n.wantOpen?1:-1)*(t/N_),0,1),n.paddle=Te(n.paddle+(n.wantPaddle?1:-1)*(t/O_),0,1);const e=this.bodies.map(n=>n.kind==="chamber"?n.lo:-1/0);for(let n=!0;n;){n=!1;for(const s of this.gates){if(s.open<=.02)continue;const o=Math.max(e[s.below],e[s.above]);(e[s.below]!==o||e[s.above]!==o)&&(e[s.below]=e[s.above]=o,n=!0)}}for(const n of this.gates){const s=U_*n.paddle+(n.open>.02?40*n.open:0),o=this.bodies[n.below],a=this.bodies[n.above].level-o.level;if(n.flow=0,s<=0||Math.abs(a)<1e-5)continue;const[c,l]=a>0?[n.above,n.below]:[n.below,n.above],h=this.bodies[c],f=this.bodies[l],u=h.kind==="chamber",d=f.kind==="chamber";if(!u&&!d)continue;let m=s*Math.sqrt(2*9.81*Math.abs(a))*t;u&&(m=Math.min(m,Math.max(0,h.level-e[c])*ko)),m=Math.min(m,Math.abs(a)*ko/(u&&d?2:1)),!(m<=0)&&(u&&(h.level-=m/ko),d&&(f.level+=m/ko),n.flow=Math.sign(a)*(m/t))}this.bodies.forEach((n,s)=>{if(n.kind!=="chamber"||n.level<=n.hi+Ol||(n.level=n.hi+Ol,this.overflowCooldown>0))return;const o=this.gates.find(c=>c.paddle>.05&&(c.below===s&&this.bodies[c.above].level>n.level||c.above===s&&this.bodies[c.below].level>n.level)),r=this.gates.find(c=>c.below===s||c.above===s).group,a=r.staircase?`${n.label} of ${r.name}`:r.name;this.events.push({text:o?`${Fl(a)} is overflowing: the paddles on the ${o.label} are still up.`:`${Fl(a)} is overflowing!`,kind:"warn",group:r}),this.overflowCooldown=12})}}const Fl=i=>i[0].toUpperCase()+i.slice(1);function z_(i){const t=i[0].name.split(" ")[0];return i.every(e=>e.name.startsWith(t))?`${t} Staircase`:`${i[0].name} flight`}const B_=2,jr=1.1,kl=44,zo=8,H_=.8,fe=1,Ke={bed:new Ht("#2a2f24"),wallStone:new Ht("#77706a"),wallSandstone:new Ht("#9b5644"),coping:new Ht("#bdb3a3"),towpath:new Ht("#b59d78"),grass:new Ht("#6f9a4c"),grassDark:new Ht("#5c8a42"),field:new Ht("#86a85a"),paved:new Ht("#8f8b84"),park:new Ht("#5e9445")};class G_{constructor(t,e,n){O(this,"bank");O(this,"smoothBank");O(this,"bankStep",2);O(this,"riverLevel");O(this,"riverDist",null);O(this,"riverGrid",{x0:0,z0:0,w:0,h:0,cell:20});O(this,"urbanAt",()=>0);O(this,"parkAt",()=>!1);O(this,"cuttings",[]);this.route=t,this.ww=e,this.bounds=n;const s=Math.ceil(t.length/this.bankStep)+1,o=new Float32Array(s);for(let r=0;r<s;r++){const a=r*this.bankStep;let c=-1/0;for(const l of e.bodies)l.s1>a-4&&l.s0<a+4&&(c=Math.max(c,l.hi));o[r]=c+H_}this.bank=o,this.smoothBank=Bl(Bl(o,15),15),this.riverLevel=e.bodies[0].lo-6}bankTop(t){return zl(this.bank,t/this.bankStep)}setRivers(t){const{bounds:e}=this,n=this.riverGrid.cell,s=Math.ceil((e.x1-e.x0)/n)+1,o=Math.ceil((e.z1-e.z0)/n)+1;this.riverGrid={x0:e.x0,z0:e.z0,w:s,h:o,cell:n};const r=new Float32Array(s*o).fill(1e9);for(const a of t)for(let c=0;c+3<a.p.length;c+=2){const l=a.p[c],h=a.p[c+1],f=a.p[c+2],u=a.p[c+3],d=120,m=Math.max(0,Math.floor((Math.min(l,f)-d-e.x0)/n)),_=Math.min(s-1,Math.ceil((Math.max(l,f)+d-e.x0)/n)),g=Math.max(0,Math.floor((Math.min(h,u)-d-e.z0)/n)),p=Math.min(o-1,Math.ceil((Math.max(h,u)+d-e.z0)/n));for(let x=g;x<=p;x++)for(let M=m;M<=_;M++){const v=W_(e.x0+M*n,e.z0+x*n,l,h,f,u)-a.w/2;v<r[x*s+M]&&(r[x*s+M]=v)}}this.riverDist=r}riverDistAt(t,e){if(!this.riverDist)return 1e9;const n=this.riverGrid,s=Te((t-n.x0)/n.cell,0,n.w-1.001),o=Te((e-n.z0)/n.cell,0,n.h-1.001),r=Math.floor(s),a=Math.floor(o),c=s-r,l=o-a,h=this.riverDist;return os(os(h[a*n.w+r],h[a*n.w+r+1],c),os(h[(a+1)*n.w+r],h[(a+1)*n.w+r+1],c),l)}cliffSide(t,e){return this.cuttings.some(n=>n.side===e&&t>n.s0-25&&t<n.s1+25)}cuttingAt(t,e){for(const n of this.cuttings){if(t<n.s0-40||t>n.s1+40)continue;const s=ke(n.s0-30,n.s0+15,t)*(1-ke(n.s1-15,n.s1+30,t)),o=this.ww.halfWidthAt(t),r=Math.abs(e);if(Math.sign(e)===n.side){const c=ke(o+3.3,o+6.2,r);return{h:n.cliff*c*s,cliff:s*(r>o+3.2&&r<o+6.5?1:0)}}const a=ke(o+3.6,o+16,r);return{h:n.far*a*s,cliff:s*(a>.05&&a<.6?.7:0)}}return{h:0,cliff:0}}landHeight(t,e,n,s){const o=this.ww.halfWidthAt(n),r=Math.abs(s);let a=os(this.bankTop(n),zl(this.smoothBank,n/this.bankStep),ke(o+3,o+24,r));const c=ke(o+6,140,r);a+=hi(t*.004,e*.004,3,7)*3.5*c+hi(t*.03,e*.03,2,3)*.35*ke(o+3,o+12,r);const l=this.riverDistAt(t,e);return l<40&&(a=os(this.riverLevel-1.5,a,ke(-2,40,l))),a+this.cuttingAt(n,s).h}heightAt(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s);return n.dist<s?this.ww.bedAt(n.s):this.landHeight(t,e,n.s,n.d)}buildStrip(){const{route:t,ww:e}=this,n=[];for(let m=0;m<t.length;m+=B_)n.push(m);n.push(t.length);for(const m of e.gates)n.push(m.s-.05,m.s+.05,m.s+jr-.05,m.s+jr+.05);n.sort((m,_)=>m-_);const s=n.length,o=m=>[[0,"bed"],[m-.8,"bed"],[m,"wallBase"],[m,"wallTop"],[m+.5,"coping"],[m+.55,"path"],[m+2.6,"path"],[m+3.4,"land"],[m+6.3,"land"],[m+7,"land"],[Math.max(14,m+9),"land"],[Math.max(22,m+15),"land"],[Math.max(32,m+24),"land"],[Math.max(kl,m+34),"land"]],r=o(Mn).length,a=r*2-1,c=new Float32Array(s*a*3),l=new Float32Array(s*a*3),h={x:0,z:0,tx:0,tz:0,nx:0,nz:0},f=new Ht;for(let m=0;m<s;m++){const _=n[m];t.frame(_,h);const g=e.halfWidthAt(_),p=this.bankTop(_),x=e.gates.find(E=>_>=E.s&&_<E.s+jr),M=e.bedAt(x?x.s-.01:_),v=e.bodies[e.bodyIndexAt(_)].kind==="chamber"||g<Mn-.5,A=V_(t,_),y=o(g);for(let E=0;E<a;E++){const R=E<r-1?-1:1,w=R<0?r-1-E:E-(r-1);let[S,P]=y[w];P==="land"&&Math.abs(A)>1e-4&&Math.sign(A)===R&&(S=Math.min(S,Math.max(g+3.6,.8/Math.abs(A))));const B=h.x+h.nx*S*R,U=h.z+h.nz*S*R,G=R===fe||v;let $;switch(P){case"bed":$=M,f.copy(Ke.bed);break;case"wallBase":$=M+.2,f.copy(v?Ke.wallSandstone:Ke.wallStone);break;case"wallTop":$=p,f.copy(v?Ke.wallSandstone:Ke.wallStone);break;case"coping":$=p+.04,f.copy(Ke.coping);break;case"path":$=p,f.copy(G?Ke.towpath:Ke.grassDark);break;default:$=this.landHeight(B,U,_,S*R),this.groundColour(B,U,_,S*R,f)}P==="path"&&G&&f.offsetHSL(0,0,(bn(m,E,5)-.5)*.04);const N=(m*a+E)*3;c[N]=B,c[N+1]=$,c[N+2]=U,l[N]=f.r,l[N+1]=f.g,l[N+2]=f.b}}const u=Hl(c,l,s,a,!0),d=new Z(u,Vl());return d.receiveShadow=!0,d.name="strip",d}buildFar(){const{bounds:t,route:e,ww:n}=this,s=Math.ceil((t.x1-t.x0)/zo)+1,o=Math.ceil((t.z1-t.z0)/zo)+1,r=new Float32Array(s*o*3),a=new Float32Array(s*o*3),c=new Ht;let l=-1;for(let u=0;u<o;u++)for(let d=0;d<s;d++){const m=t.x0+d*zo,_=t.z0+u*zo,g=e.project(m,_,l),p=g.dist>150?e.project(m,_):g;l=p.dist<150?p.s:-1;const x=n.halfWidthAt(p.s);let M;p.dist<x+14?M=n.bedAt(p.s)-3:p.dist<kl?M=this.landHeight(m,_,p.s,p.d)-.15:M=this.landHeight(m,_,p.s,p.d),this.groundColour(m,_,p.s,p.d,c);const v=(u*s+d)*3;r[v]=m,r[v+1]=M,r[v+2]=_,a[v]=c.r,a[v+1]=c.g,a[v+2]=c.b}const h=Hl(r,a,o,s),f=new Z(h,Vl());return f.receiveShadow=!0,f.name="far-terrain",f}groundColour(t,e,n,s,o){const r=Math.abs(s),a=Math.floor(t/150+hi(t*.01,e*.01,2,1)*.6),c=Math.floor(e/130+hi(t*.01,e*.01,2,2)*.6),l=bn(a,c,11);o.copy(Ke.grass).lerp(Ke.field,l*.8),o.offsetHSL(0,0,(bn(Math.floor(t/4),Math.floor(e/4),3)-.5)*.035),this.parkAt(t,e)&&o.lerp(Ke.park,.7);const h=this.urbanAt(t,e)*ke(8,20,r);o.lerp(Ke.paved,h*.85);const f=this.riverDistAt(t,e);f<12&&o.lerp(Ke.bed,ke(12,0,f)*.5);const u=this.cuttingAt(n,s);u.cliff>0&&o.lerp(Ke.wallSandstone,u.cliff).offsetHSL(0,0,(bn(Math.floor(t/2),Math.floor(e/3),8)-.5)*.06)}}function V_(i,t){const e=i.frame(Math.max(0,t-8)),n=i.frame(Math.min(i.length,t+8)),s=n.tx-e.tx,o=n.tz-e.tz,r=i.frame(t);return(s*r.nx+o*r.nz)/16}function zl(i,t){t=Te(t,0,i.length-1);const e=Math.floor(t);return os(i[e],i[Math.min(e+1,i.length-1)],t-e)}function Bl(i,t){const e=new Float32Array(i.length);for(let n=0;n<i.length;n++){let s=0,o=0;for(let r=-t;r<=t;r++){const a=n+r;a>=0&&a<i.length&&(s+=i[a],o++)}e[n]=s/o}return e}function W_(i,t,e,n,s,o){const r=s-e,a=o-n,c=Te(((i-e)*r+(t-n)*a)/(r*r+a*a||1),0,1);return Math.hypot(i-e-r*c,t-n-a*c)}function Hl(i,t,e,n,s=!1){const o=new Uint32Array((e-1)*(n-1)*6);let r=0;for(let c=0;c<e-1;c++)for(let l=0;l<n-1;l++){const h=c*n+l,f=h+1,u=h+n,d=u+1;s?(o[r++]=h,o[r++]=f,o[r++]=u,o[r++]=f,o[r++]=d,o[r++]=u):(o[r++]=h,o[r++]=u,o[r++]=f,o[r++]=f,o[r++]=u,o[r++]=d)}const a=new _e;return a.setAttribute("position",new Xe(i,3)),a.setAttribute("color",new Xe(t,3)),a.setIndex(new Xe(o,1)),a.computeVertexNormals(),a}let Gl=null;function Vl(){return Gl??(Gl=new te({vertexColors:!0,roughness:.95,flatShading:!0})),Gl}function X_(i=256){const t=new Float32Array(i*i),e=8;for(let r=0;r<i;r++)for(let a=0;a<i;a++){const c=a/i*e,l=r/i*e;t[r*i+a]=Wl(c,l,e)*.6+Wl(c*2,l*2,e*2)*.3}const n=new ImageData(i,i);for(let r=0;r<i;r++)for(let a=0;a<i;a++){const c=t[r*i+(a-1+i)%i],l=t[r*i+(a+1)%i],h=t[(r-1+i)%i*i+a],f=t[(r+1)%i*i+a],u=(c-l)*3,d=(h-f)*3,m=1,_=Math.hypot(u,d,m),g=(r*i+a)*4;n.data[g]=(u/_*.5+.5)*255,n.data[g+1]=(d/_*.5+.5)*255,n.data[g+2]=(m/_*.5+.5)*255,n.data[g+3]=255}const s=document.createElement("canvas");s.width=s.height=i,s.getContext("2d").putImageData(n,0,0);const o=new Cs(s);return o.wrapS=o.wrapT=nr,o}function Wl(i,t,e){const n=i/e,s=t/e,o=hi(i,t,3,2),r=hi(i-e,t,3,2),a=hi(i,t-e,3,2),c=hi(i-e,t-e,3,2);return(o*(1-n)+r*n)*(1-s)+(a*(1-n)+c*n)*s}class $_{constructor(t,e){O(this,"group",new Lt);O(this,"material");O(this,"normalMap");O(this,"chamberMeshes",[]);this.route=t,this.ww=e,this.normalMap=X_(),this.material=new te({color:"#3d5c47",roughness:.12,metalness:0,normalMap:this.normalMap,normalScale:new nt(.28,.28),transparent:!0,opacity:.93,envMapIntensity:.9}),e.bodies.forEach((n,s)=>{const o=this.ribbon(n.s0-.15,n.s1+.15),r=new Z(o,this.material);r.position.y=n.level,r.receiveShadow=!0,this.group.add(r),n.kind==="chamber"&&this.chamberMeshes.push({mesh:r,body:s})})}ribbon(t,e){const{route:n,ww:s}=this;t=Math.max(0,t),e=Math.min(n.length,e);const o=Math.max(2,Math.ceil((e-t)/1.5)+1),r=[],a=[],c=[];for(let h=0;h<o;h++){const f=t+(e-t)*h/(o-1),u=n.frame(f),d=s.halfWidthAt(f)+.12;for(const m of[-1,1]){const _=u.x+u.nx*d*m,g=u.z+u.nz*d*m;r.push(_,0,g),a.push(_/7,g/7)}if(h>0){const m=(h-1)*2;c.push(m,m+1,m+2,m+1,m+3,m+2)}}const l=new _e;return l.setAttribute("position",new Kt(r,3)),l.setAttribute("uv",new Kt(a,2)),l.setIndex(c),l.computeVertexNormals(),l}addRivers(t,e){for(const n of t){const s=[],o=[],r=[],a=n.p.length/2;for(let h=0;h<a;h++){const f=Math.max(0,h-1),u=Math.min(a-1,h+1);let d=n.p[u*2]-n.p[f*2],m=n.p[u*2+1]-n.p[f*2+1];const _=Math.hypot(d,m)||1;d/=_,m/=_;for(const g of[-1,1]){const p=n.p[h*2]-m*(n.w/2)*g,x=n.p[h*2+1]+d*(n.w/2)*g;s.push(p,e,x),o.push(p/7,x/7)}if(h>0){const g=(h-1)*2;r.push(g,g+2,g+1,g+1,g+2,g+3)}}const c=new _e;c.setAttribute("position",new Kt(s,3)),c.setAttribute("uv",new Kt(o,2)),c.setIndex(r),c.computeVertexNormals();const l=this.material.clone();l.side=Ie,l.color.set("#4a6a5c"),this.group.add(new Z(c,l))}}addPond(t,e){const n=new ki;for(let c=0;c<t.length;c+=2)(c?n.lineTo:n.moveTo).call(n,t[c],-t[c+1]);const s=new fc(n);s.rotateX(-Math.PI/2);const o=s.getAttribute("position"),r=s.getAttribute("uv");for(let c=0;c<o.count;c++)r.setXY(c,o.getX(c)/7,o.getZ(c)/7);const a=new Z(s,this.material);a.position.y=e,this.group.add(a)}update(t){this.normalMap.offset.x+=t*.012,this.normalMap.offset.y+=t*.007;for(const e of this.chamberMeshes)e.mesh.position.y=this.ww.bodies[e.body].level}}const es={brick:new te({color:"#8b4a3b",roughness:.9,flatShading:!0}),sandstone:new te({color:"#a8654f",roughness:.9,flatShading:!0}),concrete:new te({color:"#a39f97",roughness:.85,flatShading:!0}),iron:new te({color:"#3d434b",roughness:.6,metalness:.3,flatShading:!0}),coping:new te({color:"#c4bba9",roughness:.9,flatShading:!0})},Xl=Math.tan(40*Math.PI/180);class q_{constructor(t,e,n,s){O(this,"group",new Lt);O(this,"placed",[]);O(this,"ray",new ou);O(this,"faded",new Map);const o=[];for(const r of n){const a=o.at(-1);if(a&&a.kind==="rail"&&r.kind==="rail"&&r.s-r.w/2<a.s+a.w/2+6){const c=Math.min(a.s-a.w/2,r.s-r.w/2),l=Math.max(a.s+a.w/2,r.s+r.w/2);o[o.length-1]={...a,s:(c+l)/2,w:l-c}}else o.push(r)}for(const r of o){const a=t.frame(r.s),c=e.levelAt(r.s),l=r.kind==="road"&&r.w<12,h=Math.sin(r.dir),f=Math.cos(r.dir),u=h*a.nx+f*a.nz,d=h*a.tx+f*a.tz,m=ys.clamp(d/(Math.abs(u)<.001?.001:u),-Xl,Xl),_=Mn+8,g=Mn+8,p=Math.max(...[-1,1].map(S=>{const[P,B]=t.point(r.s,g*S);return s.landHeight(P,B,r.s,g*S)})),x=Math.max(c+(l?3.4:4.6),p+.2),M=new Lt;M.position.set(a.x,0,a.z),M.rotation.y=Math.atan2(-a.nz,a.nx);const v=Math.max(r.w+.8,3.2)*Math.sqrt(1+m*m);this.placed.push({data:r,x:a.x,z:a.z,deck:x,halfSpan:_,arch:l,depth:v,tanSkew:m});const A=l?Y_(_,qa+.05,c,x):j_(_,Mn+1.2,c,x),y=new Ss(A,{depth:v,bevelEnabled:!1,curveSegments:10});y.translate(0,0,-v/2);const E=l?r.w<=3.5?es.sandstone:es.brick:r.kind==="rail"?es.iron:es.concrete,R=new Z(y,E);R.castShadow=R.receiveShadow=!0,M.add(R);for(const S of[-1,1]){const P=new Z(new Xt(_*2*.92,1,.35),l?es.coping:E);P.position.set(0,x+.5,S*(v/2-.12)),P.castShadow=!0,M.add(P)}if(!l)for(const S of[-1,1]){const P=new Z(new Xt(1.2,x-c+1.15,v+.3),es.concrete);P.position.set(S*(Mn+1.2+.6-.08),(x-1.15+c-2.3)/2,0),M.add(P)}const w=new he().makeShear(0,-m,0,0,0,0);for(const S of M.children){const P=S;P.updateMatrix(),P.geometry=P.geometry.applyMatrix4(P.matrix).applyMatrix4(w),P.position.set(0,0,0),P.rotation.set(0,0,0)}M.traverse(S=>{const P=S;P.isMesh&&(P.material=P.material.clone())}),M.name=`bridge:${r.name??r.s}`,this.group.add(M)}}rampAt(t,e){let n=-1/0,s=!1;for(const o of this.placed){if(Math.abs(t-(o.data.s+o.tanSkew*e))>o.depth/2+1)continue;const a=Math.abs(e);a<=o.halfSpan&&(s=!0),!(a>o.halfSpan+30)&&(n=Math.max(n,o.deck-Math.max(0,a-o.halfSpan*.85)/9))}return{y:n,onDeck:s}}updateOcclusion(t,e,n){const s=e.clone().sub(t),o=s.length();this.ray.set(t,s.normalize()),this.ray.far=o;const r=new Set(this.ray.intersectObjects(this.group.children,!0).map(a=>a.object.parent));for(const a of this.group.children){const c=this.faded.get(a)??1,l=r.has(a)?.18:1;if(c===l)continue;const h=c+Math.sign(l-c)*Math.min(Math.abs(l-c),n*4);this.faded.set(a,h),a.traverse(f=>{const u=f.material;u&&(u.transparent=h<1,u.opacity=h,u.depthWrite=h>=1)})}}at(t){return this.placed.find(e=>Math.abs(e.data.s-t)<e.data.w/2+1)}}function Y_(i,t,e,n){const s=n-e,o=e-2.2,r=e+Math.max(.9,s*.3),a=e+Math.max(2.75,s*.72),c=new ki;c.moveTo(-i,o),c.lineTo(-t,o),c.lineTo(-t,r);const l=14;for(let h=1;h<l;h++){const f=Math.PI-Math.PI*h/l;c.lineTo(Math.cos(f)*t,r+Math.sin(f)*(a-r))}return c.lineTo(t,r),c.lineTo(t,o),c.lineTo(i,o),c.lineTo(i,n),c.lineTo(-i,n),c.closePath(),c}function j_(i,t,e,n){const s=e-2.2,o=n-1.1,r=new ki;return r.moveTo(-i,s),r.lineTo(-t,s),r.lineTo(-t,o),r.lineTo(t,o),r.lineTo(t,s),r.lineTo(i,s),r.lineTo(i,n),r.lineTo(-i,n),r.closePath(),r}const bi={brick:["#9a4b3b","#8c4234","#a65a44","#7f3d31","#9e5a48"],render:["#e6dcc8","#efe8da","#d9cdb5","#f1ede4"],stone:["#b37360","#a9654f","#c7a88a"],modern:["#9da3a8","#b9b3a7","#8a8f94","#c8c2b5"],shed:["#6f7368","#7b6d5a","#5d6660"]},Gs={slate:["#4d525b","#585d66","#43474f"],tile:["#7d3d30","#8a4a37"],flat:["#6a6a68","#757370"]},ln=(i,t)=>i[Math.floor(t*i.length)%i.length];class Z_{constructor(t){O(this,"cell",3);O(this,"w");O(this,"h");O(this,"data");this.b=t,this.w=Math.ceil((t.x1-t.x0)/this.cell),this.h=Math.ceil((t.z1-t.z0)/this.cell),this.data=new Uint8Array(this.w*this.h)}mark(t,e,n){const s=this.cell;for(let o=Math.floor((e-n-this.b.z0)/s);o<=Math.floor((e+n-this.b.z0)/s);o++)for(let r=Math.floor((t-n-this.b.x0)/s);r<=Math.floor((t+n-this.b.x0)/s);r++)r>=0&&o>=0&&r<this.w&&o<this.h&&(this.data[o*this.w+r]=1)}markPolygon(t){let e=1/0,n=-1/0,s=1/0,o=-1/0;for(let a=0;a<t.length;a+=2)e=Math.min(e,t[a]),n=Math.max(n,t[a]),s=Math.min(s,t[a+1]),o=Math.max(o,t[a+1]);const r=this.cell;for(let a=s-r;a<=o+r;a+=r)for(let c=e-r;c<=n+r;c+=r)gc(c,a,t)&&this.mark(c,a,2)}used(t,e){const n=Math.floor((t-this.b.x0)/this.cell),s=Math.floor((e-this.b.z0)/this.cell);return n<0||s<0||n>=this.w||s>=this.h||this.data[s*this.w+n]===1}}function gc(i,t,e){let n=!1;for(let s=0,o=e.length-2;s<e.length;o=s,s+=2){const r=e[s],a=e[s+1],c=e[o],l=e[o+1];a>t!=l>t&&i<(c-r)*(t-a)/(l-a)+r&&(n=!n)}return n}function K_(i,t){const n=Math.ceil((t.x1-t.x0)/30)+1,s=Math.ceil((t.z1-t.z0)/30)+1,o=new Float32Array(n*s);for(const a of i){let c=0,l=0,h=0;const f=a.p,u=f.length/2;for(let _=0;_<u;_++){const g=(_+1)%u;c+=f[_*2]*f[g*2+1]-f[g*2]*f[_*2+1],l+=f[_*2]/u,h+=f[_*2+1]/u}const d=Math.floor((l-t.x0)/30),m=Math.floor((h-t.z0)/30);d>=0&&m>=0&&d<n&&m<s&&(o[m*n+d]+=Math.abs(c)/2)}const r=new Float32Array(n*s);for(let a=0;a<s;a++)for(let c=0;c<n;c++){let l=0;for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++){const u=Math.min(n-1,Math.max(0,c+f)),d=Math.min(s-1,Math.max(0,a+h));l+=o[d*n+u]}r[a*n+c]=Math.min(1,l/9/(30*30)*3)}return(a,c)=>{const l=Math.floor((a-t.x0)/30),h=Math.floor((c-t.z0)/30);return l<0||h<0||l>=n||h>=s?0:r[h*n+l]}}class $l{constructor(){O(this,"pos",[]);O(this,"col",[]);O(this,"nrm",[]);O(this,"a",new D);O(this,"b",new D);O(this,"n",new D)}tri(t,e,n,s,o){if(this.a.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),this.b.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),this.n.crossVectors(this.a,this.b).normalize(),o){const r=(t[0]+e[0]+n[0])/3-o[0],a=(t[1]+e[1]+n[1])/3-o[1],c=(t[2]+e[2]+n[2])/3-o[2];this.n.x*r+this.n.y*a+this.n.z*c<0&&([e,n]=[n,e],this.n.negate())}for(const r of[t,e,n])this.pos.push(r[0],r[1],r[2]),this.col.push(s.r,s.g,s.b),this.nrm.push(this.n.x,this.n.y,this.n.z)}geometry(){const t=new _e;return t.setAttribute("position",new Kt(this.pos,3)),t.setAttribute("normal",new Kt(this.nrm,3)),t.setAttribute("color",new Kt(this.col,3)),t}}class J_{constructor(t,e,n,s,o){O(this,"group",new Lt);O(this,"occ");O(this,"roofs");this.data=t,this.route=e,this.ww=n,this.terrain=s,this.bridges=o,this.occ=new Z_(s.bounds),this.roofs=new Float32Array(this.occ.w*this.occ.h).fill(-1/0)}isFree(t,e){return!this.occ.used(t,e)}roofAt(t,e){const{occ:n}=this,s=Math.floor((t-n.b.x0)/n.cell),o=Math.floor((e-n.b.z0)/n.cell);return s<0||o<0||s>=n.w||o>=n.h?-1/0:this.roofs[o*n.w+s]}markRoof(t,e){const{occ:n}=this;let s=1/0,o=-1/0,r=1/0,a=-1/0;for(let c=0;c<t.length;c+=2)s=Math.min(s,t[c]),o=Math.max(o,t[c]),r=Math.min(r,t[c+1]),a=Math.max(a,t[c+1]);for(let c=Math.floor((r-n.b.z0)/n.cell);c<=Math.floor((a-n.b.z0)/n.cell);c++)for(let l=Math.floor((s-n.b.x0)/n.cell);l<=Math.floor((o-n.b.x0)/n.cell);l++)l<0||c<0||l>=n.w||c>=n.h||gc(n.b.x0+(l+.5)*n.cell,n.b.z0+(c+.5)*n.cell,t)&&(this.roofs[c*n.w+l]=Math.max(this.roofs[c*n.w+l],e))}build(t){return(async()=>{await t("Laying out roads…"),this.buildRoads(),await t("Building Chester…"),this.buildBuildings(),await t("Planting trees…"),this.buildTrees()})()}buildBuildings(){const t=new $l,e=new Ht,n=new Ht;for(let o=0;o<this.data.buildings.length;o++){const r=this.data.buildings[o];let a=r.p;const c=a.length/2;if(c<3)continue;this.occ.markPolygon(a);let l=0;for(let g=0;g<c;g++){const p=(g+1)%c;l+=a[g*2]*a[p*2+1]-a[p*2]*a[g*2+1]}if(l>0){const g=[];for(let p=c-1;p>=0;p--)g.push(a[p*2],a[p*2+1]);a=g}let h=1/0;for(let g=0;g<c;g++)h=Math.min(h,this.terrain.heightAt(a[g*2],a[g*2+1]));const f=h-1.5,u=h+r.h;this.markRoof(a,u+1.5);const d=bn(o,7,1),m=bn(o,3,2);this.palette(r,d,m,e,n);for(let g=0;g<c;g++){const p=(g+1)%c,x=a[g*2],M=a[g*2+1],v=a[p*2],A=a[p*2+1],y=e.clone().offsetHSL(0,0,(bn(o,g,4)-.5)*.03);t.tri([x,f,M],[v,f,A],[v,u,A],y),t.tri([x,f,M],[v,u,A],[x,u,M],y)}if(c===4&&r.h<=13&&tv(a)&&Math.abs(l)/2<400)this.gableRoof(t,a,u,e,n);else{const g=[];for(let x=0;x<c;x++)g.push(new nt(a[x*2],a[x*2+1]));const p=Dn.triangulateShape(g,[]);for(const[x,M,v]of p)t.tri([a[x*2],u,a[x*2+1]],[a[M*2],u,a[M*2+1]],[a[v*2],u,a[v*2+1]],n,[a[x*2],u-10,a[x*2+1]])}}const s=new Z(t.geometry(),new te({vertexColors:!0,roughness:.9}));s.castShadow=s.receiveShadow=!0,s.name="buildings",this.group.add(s)}gableRoof(t,e,n,s,o){const r=[0,1,2,3].map(_=>[e[_*2],e[_*2+1]]),a=(_,g)=>Math.hypot(_[0]-g[0],_[1]-g[1]);a(r[0],r[1])<a(r[1],r[2])&&r.push(r.shift());const c=a(r[1],r[2]),l=Math.min(c*.42,4),h=(_,g)=>[(_[0]+g[0])/2,(_[1]+g[1])/2],f=h(r[3],r[0]),u=h(r[1],r[2]),d=(_,g)=>[_[0],g,_[1]],m=[(r[0][0]+r[2][0])/2,n-1,(r[0][1]+r[2][1])/2];t.tri(d(r[0],n),d(r[1],n),d(u,n+l),o,m),t.tri(d(r[0],n),d(u,n+l),d(f,n+l),o,m),t.tri(d(r[2],n),d(r[3],n),d(f,n+l),o,m),t.tri(d(r[2],n),d(f,n+l),d(u,n+l),o,m),t.tri(d(r[1],n),d(r[2],n),d(u,n+l),s,m),t.tri(d(r[3],n),d(r[0],n),d(f,n+l),s,m)}palette(t,e,n,s,o){const r=t.t;if(r==="wall_tower"){s.set(e<.5?"#b0664d":"#a95e46"),o.set("#c9a58a");return}r==="cathedral"||r==="church"||/cathedral|church/i.test(t.n??"")?(s.set(ln(bi.stone,e)),o.set(ln(Gs.slate,n))):["garage","garages","shed","roof","hut"].includes(r)?(s.set(ln(bi.shed,e)),o.set(ln(Gs.flat,n))):["commercial","retail","industrial","warehouse","office","supermarket"].includes(r)||t.h>14?(s.set(e<.4?ln(bi.brick,n):ln(bi.modern,n)),o.set(ln(Gs.flat,n))):(s.set(e<.68?ln(bi.brick,n):e<.9?ln(bi.render,n):ln(bi.stone,n)),o.set(n<.8?ln(Gs.slate,e):ln(Gs.tile,e)))}buildRoads(){const t=new $l,e=new Ht("#5b5e61"),n=new Ht("#a39d90"),s=new Ht("#6d635a"),o={footway:0,path:0,cycleway:0,steps:0,track:0,service:1,residential:2,living_street:2,unclassified:2,tertiary:3,secondary:4,primary:5,trunk:6,motorway:6,pedestrian:1},r=new Set(["footway","path","cycleway","steps","track","pedestrian"]);for(const c of this.data.roads){const l=r.has(c.k)?n:e;this.ribbon(t,c.p,c.w,l,.05+(o[c.k]??1)*.012,!0)}for(const c of this.data.rails)c.skip?this.markLine(c.p,3.5):this.ribbon(t,c.p,4.2,s,.1,!0);const a=new Z(t.geometry(),new te({vertexColors:!0,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));a.receiveShadow=!0,a.name="roads",this.group.add(a)}markLine(t,e){for(let n=0;n+3<t.length;n+=2){const s=t[n],o=t[n+1],r=t[n+2],a=t[n+3],c=Math.max(1,Math.ceil(Math.hypot(r-s,a-o)/2));for(let l=0;l<=c;l++)this.occ.mark(s+(r-s)*l/c,o+(a-o)*l/c,e)}}ribbon(t,e,n,s,o,r){const a=[];for(let u=0;u+3<e.length;u+=2){const d=e[u],m=e[u+1],_=e[u+2],g=e[u+3],p=Math.max(1,Math.ceil(Math.hypot(_-d,g-m)/4));for(let x=0;x<p;x++)a.push([d+(_-d)*x/p,m+(g-m)*x/p])}if(a.push([e[e.length-2],e[e.length-1]]),a.length<2)return;const c=a.map(([u,d])=>this.route.project(u,d)),l=c.map(u=>this.bridges.rampAt(u.s,u.d)),h=a.map(([u,d],m)=>{const _=c[m],g=this.ww.halfWidthAt(_.s),p=_.dist<g+3.5?this.terrain.bankTop(_.s):this.terrain.landHeight(u,d,_.s,_.d);return Math.max(p,l[m].y)+o}),f=n/2;for(let u=0;u<a.length-1;u++){const d=c[u],m=c[u+1];if((Math.min(d.dist,m.dist)<this.ww.halfWidthAt(d.s)+4||Math.sign(d.d)!==Math.sign(m.d))&&!(l[u].onDeck&&l[u+1].onDeck))continue;const[g,p]=a[u],[x,M]=a[u+1];let v=x-g,A=M-p;const y=Math.hypot(v,A)||1;v/=y,A/=y;const E=-A*f,R=v*f,w=[g-E,h[u],p-R],S=[g+E,h[u],p+R],P=[x-E,h[u+1],M-R],B=[x+E,h[u+1],M+R];t.tri(w,S,B,s,[g,h[u]-5,p]),t.tri(w,B,P,s,[g,h[u]-5,p]),r&&this.occ.mark(g,p,f+1.5)}}buildTrees(){const t=ws(1234),e=[],{route:n,ww:s,terrain:o,occ:r}=this,a=(M,v)=>{if(r.used(M,v))return!1;const A=n.project(M,v);return A.dist>s.halfWidthAt(A.s)+4.2};for(let M=0;M<n.length;M+=5)for(const v of[-1,1]){if(t()>.6)continue;const A=s.halfWidthAt(M)+4.5+t()*t()*30,[y,E]=n.point(M,A*v);t()<o.urbanAt(y,E)*.85||a(y,E)&&e.push({x:y,z:E,s:.8+t()*.7,kind:t()<.15?1:0})}const c=o.bounds,l=(c.x1-c.x0)*(c.z1-c.z0);for(let M=0;M<l*9e-4;M++){const v=c.x0+t()*(c.x1-c.x0),A=c.z0+t()*(c.z1-c.z0),E=o.parkAt(v,A)?.7:(1-o.urbanAt(v,A))*.35*ke(.75,.2,Math.abs(Q_(v,A)));t()>E||a(v,A)&&e.push({x:v,z:A,s:.8+t()*.9,kind:t()<.1?1:0})}for(let M=0;M<this.data.trees.length;M+=2)e.push({x:this.data.trees[M],z:this.data.trees[M+1],s:1.1,kind:0});const h=new Je(1,0),f=new ee(.18,.25,1,5);f.translate(0,.5,0);const u=new Pn(h,new te({roughness:.9,flatShading:!0}),e.length),d=new Pn(f,new te({color:"#5a4636",roughness:1}),e.length),m=new he,_=new wn,g=new D,p=new D,x=["#4f7a3a","#5d8a40","#3f6b35","#6b9446","#557d3c"].map(M=>new Ht(M));e.forEach((M,v)=>{const A=o.heightAt(M.x,M.z),y=(M.kind===1?9:4.5)*M.s;_.setFromAxisAngle(new D(0,1,0),t()*Math.PI*2),p.set(M.x,A-.2,M.z),g.set(M.s,y*.45,M.s),d.setMatrixAt(v,m.compose(p,_,g)),p.set(M.x,A+y*.45+(M.kind===1?y*.35:y*.3),M.z),M.kind===1?g.set(1.3*M.s,y*.5,1.3*M.s):g.set(2.6*M.s,2.3*M.s,2.6*M.s),u.setMatrixAt(v,m.compose(p,_,g)),u.setColorAt(v,x[Math.floor(t()*x.length)].clone().offsetHSL(0,0,(t()-.5)*.06))}),u.castShadow=d.castShadow=!0,u.receiveShadow=!0,u.name="trees",this.group.add(u,d)}}function Q_(i,t){return Math.sin(i*.011+Math.sin(t*.007)*2)*Math.cos(t*.013+Math.sin(i*.005)*2)}function tv(i){for(let t=0;t<4;t++){const e=t,n=(t+1)%4,s=(t+2)%4,o=i[n*2]-i[e*2],r=i[n*2+1]-i[e*2+1],a=i[s*2]-i[n*2],c=i[s*2+1]-i[n*2+1],l=(o*a+r*c)/(Math.hypot(o,r)*Math.hypot(a,c)||1);if(Math.abs(l)>.2)return!1}return!0}const ql=18*Math.PI/180,ev=li+.15,Tn={gate:new te({color:"#1d1c1a",roughness:.8,flatShading:!0}),white:new te({color:"#f1efe8",roughness:.7}),gear:new te({color:"#2b2f33",roughness:.5,metalness:.5}),rack:new te({color:"#c9c3b5",roughness:.4,metalness:.6}),foam:new Di({color:"#f4f7f2",transparent:!0,opacity:0,depthWrite:!1}),highlight:new Di({color:"#ffd76a",transparent:!0,opacity:.55,depthWrite:!1})};class nv{constructor(t,e,n){O(this,"group",new Lt);O(this,"visuals",[]);O(this,"time",0);this.ww=e;for(const o of e.gates){const r=t.frame(o.s),a=new Lt;a.position.set(r.x,0,r.z),a.rotation.y=Math.atan2(r.tx,r.tz);const c=e.bodies[o.above].hi,l=e.bodies[o.below].lo-1.6,h=n.bankTop(o.s),f=c+.4,u=li/Math.cos(ql)+.15,d=[],m=[];for(const p of[-1,1]){const x=new Lt;x.position.set(p*ev,0,0);const M=f-l,v=new Z(new Xt(u,M,.32),Tn.gate);v.position.set(u/2,l+M/2,0),v.castShadow=!0,x.add(v);const A=Math.max(h,f)+.75,y=new Z(new Xt(4.6,.32,.32),Tn.gate);y.position.set(-2.1,A,0),y.castShadow=!0,x.add(y);const E=new Z(new Xt(.7,.34,.34),Tn.white);E.position.set(-4.1,A,0),x.add(E);const R=new Z(new Xt(.3,A-f+.2,.3),Tn.gate);R.position.set(.1,(A+f)/2,0),x.add(R);const w=new Z(new Xt(.3,.45,.3),Tn.gear);w.position.set(u*.55,f+.22,-.2),x.add(w);const S=new Z(new Xt(.08,.9,.08),Tn.rack);S.position.set(u*.55,f+.45,-.2),S.userData.y0=S.position.y,x.add(S),m.push(S);const P=new Z(new Xt(u,.06,.06),Tn.white);P.position.set(u/2,f+.95,-.35),x.add(P),x.scale.x=p<0?1:-1,a.add(x),d.push({pivot:x,sign:p})}const _=new Z(new jn(li*2,5),Tn.foam.clone());_.rotation.x=-Math.PI/2,_.position.set(0,0,-2.8),a.add(_);const g=new Z(new fr(li+.6,li+1,32),Tn.highlight);g.rotation.x=-Math.PI/2,g.position.y=h+.08,g.visible=!1,a.add(g),this.group.add(a),this.visuals.push({gate:o,leaves:d,racks:m,foam:_,ring:g,root:a})}const s=new Map;for(const o of e.gates)o.label==="top gates"&&s.set(o.lockName,o);for(const[o,r]of s){const a=t.frame(r.s+3),c=iv(o),l=(li+3.2)*fe;c.position.set(a.x+a.nx*l,n.bankTop(r.s+3),a.z+a.nz*l),c.rotation.y=Math.atan2(fe*a.tz,-fe*a.tx),this.group.add(c)}}setSelected(t){for(const e of this.visuals)e.ring.visible=e.gate===t}update(t){this.time+=t;for(const e of this.visuals){const n=e.gate,s=n.open*n.open*(3-2*n.open);for(const{pivot:a,sign:c}of e.leaves){const l=ql,h=Math.PI/2;a.rotation.y=(l+(h-l)*s)*c}for(const a of e.racks)a.position.y=a.userData.y0+n.paddle*.55;const o=this.ww.bodies[n.below].level,r=Math.min(1,Math.abs(n.flow)/3);e.foam.position.y=o+.03,e.foam.material.opacity=r*(.55+.15*Math.sin(this.time*9)),e.foam.scale.y=.7+r*.5+.08*Math.sin(this.time*5.3),e.ring.visible&&(e.ring.material.opacity=.4+.25*Math.sin(this.time*4))}}}function iv(i){const t=document.createElement("canvas");t.width=512,t.height=128;const e=t.getContext("2d");e.fillStyle="#1e3d2f",e.fillRect(0,0,512,128),e.strokeStyle="#e8d9a8",e.lineWidth=6,e.strokeRect(8,8,496,112),e.fillStyle="#f3ead0",e.font="600 44px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText(i,256,66,470);const n=new Cs(t);n.colorSpace=ze;const s=new Lt,o=new Z(new jn(2.4,.6),new te({map:n,side:Ie}));o.position.y=1.9,s.add(o);for(const r of[-1,1]){const a=new Z(new Xt(.1,2.2,.1),Tn.white);a.position.set(r,1.1,0),s.add(a)}return s}class oo extends Z{constructor(){const t=oo.SkyShader,e=new Yn({name:t.name,uniforms:zh.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:je,depthWrite:!1});super(new Xt(1,1,1),e),this.isSky=!0}}oo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
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

		}`};class sv{constructor(t,e){O(this,"sky",new oo);O(this,"sun",new d_("#fff4e0",3));O(this,"hemi",new c_("#cfe3ff","#5d6b45",.9));O(this,"envScene",new jh);O(this,"envSky",new oo);O(this,"pmrem");O(this,"envTarget",null);O(this,"lastEnvHour",-99);O(this,"sunDir",new D);O(this,"hour",10.5);this.scene=t,this.sky.scale.setScalar(2e4),this.envSky.scale.setScalar(2e4);for(const o of[this.sky,this.envSky]){const r=o.material.uniforms;r.turbidity.value=5,r.rayleigh.value=1.4,r.mieCoefficient.value=.004,r.mieDirectionalG.value=.82}this.envScene.add(this.envSky),t.add(this.sky,this.sun,this.sun.target,this.hemi),this.pmrem=new Ha(e);const n=this.sun.shadow;this.sun.castShadow=!0,n.mapSize.set(2048,2048);const s=n.camera;s.left=s.bottom=-90,s.right=s.top=90,s.near=1,s.far=600,n.bias=-4e-4,n.normalBias=.03,t.fog=new cc("#c9d6dc",300,2400)}get sunElevation(){const t=(this.hour-7)/11.5;return Math.sin(Te(t,-.15,1.15)*Math.PI)*32-(t<0||t>1?6:0)}get isNight(){return this.sunElevation<-2}update(t,e){var a;this.hour=(this.hour+t)%24;const n=ys.degToRad(this.sunElevation),s=ys.degToRad(100+(this.hour-6)/13*160);this.sunDir.setFromSphericalCoords(1,Math.PI/2-n,s);for(const c of[this.sky,this.envSky])c.material.uniforms.sunPosition.value.copy(this.sunDir);const o=ke(-4,8,this.sunElevation),r=1-ke(4,20,this.sunElevation);this.sun.intensity=3.2*ke(-2,6,this.sunElevation),this.sun.color.setHSL(.09,.5+r*.4,.92-r*.18),this.hemi.intensity=.2+o*.7,this.scene.fog.color.setHSL(.56,.18,.12+o*.68),this.sun.position.copy(e).addScaledVector(this.sunDir,300),this.sun.target.position.copy(e),Math.abs(this.hour-this.lastEnvHour)>.25&&(this.lastEnvHour=this.hour,(a=this.envTarget)==null||a.dispose(),this.envTarget=this.pmrem.fromScene(this.envScene,0,1,25e3),this.scene.environment=this.envTarget.texture)}}function ov(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,c=new _e;let l=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const f=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=i[u].attributes.position.count}c.setIndex(f)}for(const h in o){const f=Yl(o[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let _=0;_<r[h].length;++_)d.push(r[h][_][u]);const m=Yl(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Yl(i){let t,e,n,s=-1,o=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Xe(r,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const f=c/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){const _=h.getComponent(u,m);a.setComponent(u+f,m,_)}}else r.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function pi(i,t,e){i.updateMatrixWorld(!0);const n=i.matrixWorld.clone().invert(),s=[],o=new he;return i.traverse(r=>{const a=r;if(!a.isMesh||e&&!e(a))return;const c=Array.isArray(a.material)?a.material:[a.material];if(c.some(m=>m.map)){t==null||t(a);return}const l=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();l.applyMatrix4(o.multiplyMatrices(n,a.matrixWorld));const h=l.getAttribute("position").count,f=new Float32Array(h*3),u=l.groups.length?l.groups:[{start:0,count:h,materialIndex:0}];for(const m of u){const _=(c[m.materialIndex??0]??c[0]).color;for(let g=m.start;g<Math.min(h,m.start+m.count);g++)f.set([_.r,_.g,_.b],g*3)}const d=new _e;d.setAttribute("position",l.getAttribute("position")),d.setAttribute("normal",l.getAttribute("normal")),d.setAttribute("color",new Xe(f,3)),s.push(d)}),ov(s)}const Ci=()=>new te({vertexColors:!0,roughness:.75,flatShading:!0}),rv=["#f1c6a5","#e3b08f","#c98d68","#9a6542","#6b4229"],av=["#2b1d14","#5a3a22","#a0703c","#d9b36c","#8f8f8f","#161616"],cv=["#2d3a55","#1f2328","#6b5a3f","#3d4a3a","#4a4a55"],js=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400","#34495e","#16a085","#7f8c8d","#e84393","#6d4c41","#1f4d3a"],lv=["short","short","long","bun","beanie","cap","bald"];function Ui(i,t={}){const e=n=>n[Math.floor(i()*n.length)];return{coat:e(js),trousers:e(cv),skin:e(rv),hair:e(av),hairStyle:e(lv),hat:e(["#b03a2e","#2e4a7a","#3d5a3d","#5a4a3a","#d4a017"]),longCoat:i()<.3,...t}}const Vn=(i,t=.8)=>new te({color:i,roughness:t}),jl=i=>(i.userData.part="coat",i);function Ps(i={}){const t={...Ui(Math.random),...i},e=new Lt,n=Vn(t.coat,.7),s=Vn(t.skin,.6),o=Vn(t.trousers,.85),r=Vn(t.hair,.9),a=t.longCoat?.62:.86,c=[[.001,a],[t.longCoat?.2:.155,a],[.16,.98],[.165,1.15],[.2,1.36],[.17,1.45],[.075,1.5],[.001,1.5]].map(([y,E])=>new nt(y,E)),l=jl(new Z(new uc(c,12),n));l.scale.z=.72,e.add(l);const h=new Z(new ee(.045,.05,.1,8),s);h.position.y=1.54,e.add(h);const f=new Z(new Ve(.1,14,10),s);f.scale.set(.92,1.1,1),f.position.y=1.67,e.add(f);const u=new Z(new Ln(.018,.045,5),s);u.rotation.x=Math.PI/2,u.position.set(0,1.66,.1),e.add(u);const d=(y,E,R=Math.PI*.55)=>{const w=new Z(new Ve(y,14,8,0,Math.PI*2,0,R),E);return w.scale.set(.95,1.12,1.03),w.position.y=1.68,w};if(t.hairStyle!=="bald"&&e.add(d(.106,t.hairStyle==="beanie"?Vn(t.hat):r,t.hairStyle==="beanie"?Math.PI*.5:Math.PI*.55)),t.hairStyle==="long"){const y=new Z(new ee(.1,.11,.26,10,1,!0,Math.PI*.6,Math.PI*.8),r);y.position.y=1.56,y.rotation.y=Math.PI,e.add(y)}else if(t.hairStyle==="bun"){const y=new Z(new Ve(.05,8,6),r);y.position.set(0,1.74,-.09),e.add(y)}else if(t.hairStyle==="beanie"){const y=new Z(new un(.1,.022,6,14),Vn(t.hat));y.rotation.x=Math.PI/2,y.position.y=1.7,e.add(y)}else if(t.hairStyle==="cap"){const y=new Z(new ee(.115,.118,.05,12),Vn(t.hat));y.position.set(0,1.77,.01),y.rotation.x=-.12;const E=new Z(new Xt(.16,.015,.08),Vn(t.hat));E.position.set(0,1.76,.12),e.add(y,E)}const m=y=>{const E=new Lt;E.position.set(y*.085,.92,0);const R=new Z(new ee(.075,.062,.44,8),o);R.position.y=-.22;const w=new Lt;w.position.y=-.44;const S=new Z(new ee(.062,.05,.42,8),o);S.position.y=-.21;const P=new Z(new Xt(.1,.07,.23),Vn("#2a2420"));return P.position.set(0,-.44,.04),w.add(S,P),E.add(R,w),e.add(E),{hip:E,knee:w}},{hip:_,knee:g}=m(1),{hip:p,knee:x}=m(-1),M=y=>{const E=new Lt;E.position.set(y*.215,1.4,0);const R=jl(new Z(new ee(.052,.042,.58,8),n));R.position.y=-.29;const w=new Z(new Ve(.042,8,6),s);return w.position.y=-.61,E.add(R,w),E.rotation.z=y*.07,e.add(E),E},v=M(1),A=M(-1);return e.traverse(y=>y.castShadow=!0),{group:e,armL:v,armR:A,legL:_,legR:p,kneeL:g,kneeR:x}}function pr(i,t,e){t==="wind"?(i.armL.rotation.set(-1.3+Math.sin(e*7)*.45,0,.15),i.armR.rotation.set(-1.3+Math.sin(e*7+Math.PI)*.45,0,-.15)):t==="push"?(i.armL.rotation.set(-1.25,0,.1),i.armR.rotation.set(-1.25,0,-.1)):t==="rest"?(i.armL.rotation.set(0,0,.07),i.armR.rotation.set(0,0,-.07)):t==="wave"?(i.armL.rotation.set(0,0,Math.PI-.4+Math.sin(e*9)*.35),i.armR.rotation.set(0,0,-.07)):(i.armL.rotation.set(0,0,Math.PI-.2+Math.sin(e*14)*.25),i.armR.rotation.set(0,0,-(Math.PI-.2)+Math.sin(e*14+1.5)*.25))}function Ya(i,t,e=1){const n=Math.sin(t);i.legL.rotation.x=n*.42*e,i.legR.rotation.x=-n*.42*e,i.kneeL.rotation.x=Math.max(0,-Math.sin(t-.6))*.7*e,i.kneeR.rotation.x=Math.max(0,Math.sin(t-.6))*.7*e,i.armL.rotation.set(-n*.35*e,0,.07),i.armR.rotation.set(n*.35*e,0,-.07)}function hv(i){for(const t of[i.legL,i.legR,i.kneeL,i.kneeR])t.rotation.set(0,0,0)}function ja(i){i.legL.rotation.set(-1.5,0,.06),i.legR.rotation.set(-1.5,0,-.06),i.kneeL.rotation.x=i.kneeR.rotation.x=1.5,i.armL.rotation.set(-.5,0,.1),i.armR.rotation.set(-.5,0,-.1),i.group.position.y-=.47}function uv(i,t){i.legL.rotation.set(-.95+Math.sin(t)*.45,0,.05),i.legR.rotation.set(-.95-Math.sin(t)*.45,0,-.05),i.kneeL.rotation.x=1.2+Math.cos(t)*.45,i.kneeR.rotation.x=1.2-Math.cos(t)*.45,i.armL.rotation.set(-1,0,.08),i.armR.rotation.set(-1,0,-.08)}const Un=17.4,Sn=2.08,nn=(i,t={})=>new te({color:i,roughness:.6,flatShading:!0,...t}),dv={name:"Chester Rose",cabin:"#1f4d3a",roof:"#7c2f23",length:Un,crew:!0};function _c(i={}){const{name:t,cabin:e,roof:n,length:s,crew:o,crewStyle:r}={...dv,...i},a=new Lt;a.userData.length=s;const c={hull:nn("#18191b",{roughness:.5}),deck:nn("#3a3d40",{roughness:.9}),cabin:nn(e,{roughness:.45}),roof:nn(n,{roughness:.7}),cream:nn("#efe3c2"),red:nn("#a3291f"),window:nn("#1b2730",{roughness:.1,metalness:.4}),brass:nn("#c9a24a",{roughness:.25,metalness:.9}),rope:nn("#8a6b43",{roughness:1}),black:nn("#111111"),pot:nn("#9b5a3c"),leaf:nn("#4f8a3a"),flower:nn("#e04f6a")},l=Sn/2,h=s/2,f=[[-l,-h+.4],[-l*.85,-h+.05],[0,-h],[l*.85,-h+.05],[l,-h+.4],[l,h-3.4],[l*.82,h-1.6],[l*.45,h-.5],[0,h],[-l*.45,h-.5],[-l*.82,h-1.6],[-l,h-3.4]],u=new ki(f.map(([it,At])=>new nt(it,-At))),d=.62,m=.38,_=new Ss(u,{depth:d+m,bevelEnabled:!1});_.rotateX(-Math.PI/2),_.translate(0,-d,0);const g=new Z(_,[c.deck,c.hull]);g.castShadow=g.receiveShadow=!0,a.add(g);const p=new Ss(u,{depth:.07,bevelEnabled:!1});p.rotateX(-Math.PI/2),p.scale(1.015,1,1.004),p.translate(0,m-.12,0),a.add(new Z(p,[c.red,c.red]));const x=-h+2,M=h-3.6,v=M-x,A=(x+M)/2,y=1.22,E=Sn-.24,R=new Z(new Xt(E,y,v),c.cabin);R.position.set(0,m+y/2,A),R.castShadow=R.receiveShadow=!0,a.add(R);const w=new Z(new Xt(E+.08,.09,v+.08),c.roof);w.position.set(0,m+y+.04,A),w.castShadow=!0,a.add(w);for(const it of[-1,1]){const At=new Z(new Xt(.02,.05,v-.3),c.cream);At.position.set(it*(E/2+.005),m+y-.18,A),a.add(At);const Vt=At.clone();Vt.position.y=m+.18,a.add(Vt);for(let Jt=x+1.6;Jt<M-.6;Jt+=1.45){if(Jt>x+2.6&&Jt<x+4.6)continue;const Q=new Z(new Xt(.03,.34,.5),c.window);Q.position.set(it*(E/2+.005),m+y*.62,Jt),a.add(Q)}const Ft=fv(t);Ft.position.set(it*(E/2+.012),m+y*.55,x+3.6),Ft.rotation.y=it*(Math.PI/2),a.add(Ft)}for(const[it,At]of[[x-.005,-1],[M+.005,1]]){const Vt=new Z(new Xt(.9,.95,.03),c.red);Vt.position.set(0,m+.5,it),a.add(Vt);const Ft=new Z(new Xt(.03,.9,.035),c.cream);Ft.position.set(0,m+.5,it+At*.005),a.add(Ft)}const S=new Z(pv(),new te({map:mv(),roughness:.6,side:Ie}));S.position.set(0,m,h-1.5),a.add(S);const P=new Z(new Xt(.12,.06,2.1),c.cream);P.position.set(0,m+1.12,h-2.55),P.rotation.x=-.36,a.add(P);const B=new Z(new ee(.07,.07,.55,8),c.black);B.position.set(.45,m+y+.3,M-1.4),a.add(B);const U=new Z(new ee(.075,.075,.06,8),c.brass);U.position.set(.45,m+y+.5,M-1.4),a.add(U);for(const[it,At]of[[x+2.2,-.35],[x+2.8,-.35],[A+1.5,.3]]){const Vt=new Z(new ee(.16,.12,.22,7),c.pot);Vt.position.set(At,m+y+.19,it),a.add(Vt);const Ft=new Z(new Je(.2,0),c.leaf);Ft.position.set(At,m+y+.4,it),a.add(Ft);const Jt=new Z(new Je(.06,0),c.flower);Jt.position.set(At+.08,m+y+.55,it),a.add(Jt)}const G=new Z(new ee(.03,.03,4.5,6),c.cream);G.rotation.x=Math.PI/2,G.position.set(-.6,m+y+.12,A-1),a.add(G);const $=new Z(new Ve(.22,8,6),c.rope);$.scale.set(1,.9,1.3),$.position.set(0,.05,h-.02),a.add($);for(const it of[-1,1]){const At=new Z(new ee(.11,.11,.45,8),c.rope);At.position.set(it*(l+.08),.05,2),a.add(At)}const N=new Z(new ee(.1,.12,.18,10),c.brass);N.rotation.x=Math.PI/2,N.position.set(0,m+.25,h-.35),a.add(N);const q=new h_("#ffe7b0",0,60,.5,.6,1.2);q.position.set(0,m+.3,h-.2),q.target.position.set(0,-.5,h+20),a.add(q,q.target);const W=new Lt;W.position.set(0,0,-h-.05);const lt=new Z(new Xt(.05,.75,.9),c.hull);lt.position.set(0,-.3,-.45),W.add(lt);const mt=new Z(new ee(.04,.04,1.1,6),c.black);mt.position.set(0,.45,0),W.add(mt);const yt=new Z(new ee(.025,.035,1.3,6),c.brass);yt.rotation.x=Math.PI/2-.25,yt.position.set(0,1.08,.62),W.add(yt);const Ut=new Z(new Ve(.05,6,4),c.brass);Ut.position.set(0,1,0),W.add(Ut),a.add(W);const Bt=Ps(r??{coat:"#e8b931",trousers:"#2d3a55",skin:"#e3b08f",hair:"#5a3a22",hairStyle:"cap",hat:"#3d4a3a",longCoat:!1}),j=Bt.group;j.position.set(0,m-.25,-h+.9),o?a.add(j):a.remove(q,q.target);const ot=new Z(new Xt(2.2,1.6,3),new Di({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}));ot.position.set(0,1,-h+.6),ot.name="tiller-hit";const Tt=new Z(new fr(.75,.9,32),new Di({color:"#ffd76a",transparent:!0,opacity:.6,depthWrite:!1,side:Ie}));return Tt.rotation.x=-Math.PI/2,Tt.position.set(0,m+.02,-h+.55),o&&a.add(ot,Tt),{group:a,rudder:W,steerer:j,steererPerson:Bt,headlight:q,tillerHit:ot,tillerHint:Tt}}function fv(i){const t=document.createElement("canvas");t.width=512,t.height=160;const e=t.getContext("2d");e.fillStyle="#a3291f",e.fillRect(0,0,512,160),e.strokeStyle="#efe3c2",e.lineWidth=8,e.strokeRect(10,10,492,140),e.fillStyle="#f6d36b",e.font="800 64px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#3a120d",e.shadowOffsetX=3,e.shadowOffsetY=3,e.fillText(i,256,84,460);const n=new Cs(t);return n.colorSpace=ze,new Z(new jn(1.9,.6),new te({map:n,roughness:.5}))}function pv(){const i=new _e,t=Sn*.42,e=1.15;return i.setAttribute("position",new Kt([-t,0,0,t,0,0,0,e,0],3)),i.setAttribute("uv",new Kt([0,0,1,0,.5,1],2)),i.computeVertexNormals(),i}function mv(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#1f4d3a",t.fillRect(0,0,256,256),t.fillStyle="#a3291f",t.beginPath(),t.moveTo(128,40),t.lineTo(200,170),t.lineTo(128,240),t.lineTo(56,170),t.closePath(),t.fill(),t.strokeStyle="#f6d36b",t.lineWidth=8,t.stroke();for(const[n,s,o]of[[128,150,"#e04f6a"],[108,175,"#f2efe0"],[148,175,"#e8a43c"]])t.fillStyle=o,t.beginPath(),t.arc(n,s,14,0,Math.PI*2),t.fill();const e=new Cs(i);return e.colorSpace=ze,e}function gv(i){const t=new Lt;i.group.updateMatrixWorld(!0);const e=pi(i.group,s=>{const o=s.clone();o.matrixAutoUpdate=!1,o.matrix.copy(s.matrixWorld),t.add(o)}),n=new Z(e,Ci());return n.castShadow=n.receiveShadow=!0,t.add(n),t}const rs=16e3,Zr=rs*Un*Un/12,_v=650,vv=700,xv=7,Bo=.3,tr=-3,er=5,Zl=(()=>{const i=Sn/2,t=Un/2;return[[0,t],[.55,t-.6],[-.55,t-.6],[i,t-3],[-i,t-3],[i,2],[-i,2],[i,-3],[-i,-3],[i*.95,-t+.4],[-i*.95,-t+.4],[0,-t]]})();class Mv{constructor(t,e){O(this,"x",0);O(this,"z",0);O(this,"psi",0);O(this,"u",0);O(this,"v",0);O(this,"r",0);O(this,"notch",0);O(this,"thrust",0);O(this,"rudder",0);O(this,"s",0);O(this,"d",0);O(this,"contacts",[]);O(this,"obstacles",[]);O(this,"tethers",[]);this.route=t,this.ww=e}placeAt(t,e=!0){const n=this.route.frame(t);this.x=n.x,this.z=n.z,this.psi=Math.atan2(n.tx,n.tz)+(e?0:Math.PI),this.s=t,this.u=this.v=this.r=0}get speed(){return Math.hypot(this.u,this.v)}span(){let t=1/0,e=-1/0;for(const[n,s]of Zl){const[o,r]=this.toWorld(n,s),a=this.route.project(o,r,this.s);t=Math.min(t,a.s),e=Math.max(e,a.s)}return[t,e]}step(t,e){const n=Te(e,-1,1),s=n===0?2.2:1.6;this.rudder+=Te(n-this.rudder,-s*t,s*t);const o=this.notch>=0?this.notch*_v:this.notch*vv;this.thrust+=Te(o-this.thrust,-2200*t,2200*t);const{u:r,v:a,r:c}=this,l=this.thrust,h=this.rudder*(300*r*Math.abs(r)+.5*Math.max(l,0)),f=l-480*r*Math.abs(r)-250*r,u=-9e3*a*Math.abs(a)-4e3*a+h*.3;let d=h*xv-12e4*c-6e5*c*Math.abs(c);l<0&&(d+=.12*l*1.5),this.u+=(f/rs-a*c)*t,this.v+=(u/rs+r*c)*t,this.r+=d/Zr*t,this.psi+=this.r*t;const m=Math.sin(this.psi),_=Math.cos(this.psi);this.x+=(this.u*m-this.v*_)*t,this.z+=(this.u*_+this.v*m)*t,this.contacts.length=0;for(let p=0;p<2;p++)this.resolveContacts(),this.resolveExtras();const g=this.route.project(this.x,this.z,this.s);this.s=g.s,this.d=g.d}toWorld(t,e){const n=Math.sin(this.psi),s=Math.cos(this.psi);return[this.x+e*n-t*s,this.z+e*s+t*n]}resolveContacts(){const{route:t,ww:e}=this,n=e.gates.filter(o=>Math.abs(o.s-this.s)<Un+6&&e.gateBlocks(o)),s=this.obstacles.filter(o=>Math.abs(o.x-this.x)+Math.abs(o.z-this.z)<45);for(const[o,r]of Zl){const[a,c]=this.toWorld(o,r),l=t.project(a,c,this.s),h=t.frame(l.s),f=e.halfWidthAt(l.s)-.05;if(Math.abs(l.d)>f){const u=Math.sign(l.d);this.applyContact(a,c,h.nx*u,h.nz*u,Math.abs(l.d)-f,"bank")}for(const u of n)this.s<u.s&&l.s>u.s-Bo?this.applyContact(a,c,h.tx,h.tz,l.s-(u.s-Bo),"gate"):this.s>u.s&&l.s<u.s+Bo&&this.applyContact(a,c,-h.tx,-h.tz,u.s+Bo-l.s,"gate");for(const u of s){const d=a-u.x,m=c-u.z,_=Math.sin(u.psi),g=Math.cos(u.psi),p=d*_+m*g,x=-d*g+m*_,M=u.halfB+.05-Math.abs(x),v=u.halfL+.05-Math.abs(p);if(!(M<=0||v<=0))if(M<v){const A=-Math.sign(x)||1;this.applyContact(a,c,-g*A,_*A,M,"boat",u)}else{const A=-Math.sign(p)||1;this.applyContact(a,c,_*A,g*A,v,"boat",u)}}l.s<2&&this.applyContact(a,c,-h.tx,-h.tz,2-l.s,"bank"),l.s>t.length-2&&this.applyContact(a,c,h.tx,h.tz,l.s-(t.length-2),"bank")}}resolveExtras(){const t=Math.sin(this.psi),e=Math.cos(this.psi),n=Sn/2,s=Un/2;for(const o of this.obstacles){if(Math.abs(o.x-this.x)+Math.abs(o.z-this.z)>45)continue;const r=Math.sin(o.psi),a=Math.cos(o.psi);for(const[c,l]of[[o.halfB,o.halfL],[-o.halfB,o.halfL],[o.halfB,-o.halfL],[-o.halfB,-o.halfL]]){const h=o.x+l*r-c*a,f=o.z+l*a+c*r,u=h-this.x,d=f-this.z,m=u*t+d*e,_=-u*e+d*t,g=n-Math.abs(_),p=s-.6-Math.abs(m);g<=0||p<=0||(g<p?this.applyContact(h,f,-e*Math.sign(_),t*Math.sign(_),g,"boat",o):this.applyContact(h,f,t*Math.sign(m),e*Math.sign(m),p,"boat",o))}}for(const o of this.tethers){const[r,a]=this.toWorld(o.local[0],o.local[1]),c=r-o.anchor[0],l=a-o.anchor[1],h=Math.hypot(c,l);h>o.length&&this.applyContact(r,a,c/h,l/h,h-o.length,"bank",void 0,!0)}}applyContact(t,e,n,s,o,r,a,c=!1){this.x-=n*o,this.z-=s*o;const l=t-this.x,h=e-this.z,f=Math.sin(this.psi),u=Math.cos(this.psi);let d=this.u*f-this.v*u,m=this.u*u+this.v*f;const _=d+this.r*h,g=m-this.r*l,p=_*n+g*s;if(p<=0)return;const x=h*n-l*s,M=-1.15*p/(1/rs+x*x/Zr);d+=M*n/rs,m+=M*s/rs,this.r+=M*x/Zr,d*=.995,m*=.995,this.u=d*f+m*u,this.v=-d*u+m*f,c||this.contacts.push({impulse:-M,kind:r,obstacle:a})}}const yv={KeyW:"throttleUp",ArrowUp:"throttleUp",KeyS:"throttleDown",ArrowDown:"throttleDown",Space:"neutral",KeyQ:"paddles",KeyE:"gates",Tab:"nextGate",KeyT:"timeFaster",KeyR:"timeSlower",KeyV:"camera",KeyM:"map",KeyH:"help",KeyN:"mute",KeyL:"headlight",KeyF:"moor",KeyG:"clear",KeyP:"autopilot",Enter:"nextTrip",Escape:"declineTrip"};class bv{constructor(){O(this,"held",new Set);O(this,"queue",[]);O(this,"onFirstInput",null);O(this,"touchSteer",0);addEventListener("keydown",t=>{this.onFirstInput&&(this.onFirstInput(),this.onFirstInput=null);const e=yv[t.code];e&&t.preventDefault(),!t.repeat&&(this.held.add(t.code),e&&this.queue.push(e))}),addEventListener("keyup",t=>this.held.delete(t.code)),addEventListener("blur",()=>this.held.clear())}get steer(){const t=this.held.has("KeyA")||this.held.has("ArrowLeft"),e=this.held.has("KeyD")||this.held.has("ArrowRight");return(t?1:0)-(e?1:0)||this.touchSteer}push(t){this.queue.push(t)}drain(){return this.queue.splice(0)}}class Sv{constructor(t,e,n,s){O(this,"root");O(this,"loc");O(this,"helm");O(this,"lockPanel");O(this,"toasts");O(this,"help");O(this,"chip");O(this,"trip");O(this,"promptEl");O(this,"summary");O(this,"lastTrip","");O(this,"offer");O(this,"lift");O(this,"tripTapOffers",!1);O(this,"lastPrompt","");O(this,"lastLock","");O(this,"lastHelm","");O(this,"lastLoc","");O(this,"winding",!1);O(this,"onNotch",null);O(this,"lever");O(this,"speedEl");this.root=t,t.innerHTML=`
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
        across the canal, moor up nearby and fish it out with the boat hook (<kbd>G</kbd>). <kbd>G</kbd> also loads logs and coal
        from the towpath. Finished trips (and grateful hitchhikers from the pubs) leave things for your roof.</p>
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
      </div>`,this.loc=t.querySelector(".loc"),this.helm=t.querySelector(".helm"),this.lockPanel=t.querySelector(".lock-panel"),this.toasts=t.querySelector(".toasts"),this.help=t.querySelector(".help"),this.chip=t.querySelector(".chip"),this.trip=t.querySelector(".trip"),this.promptEl=t.querySelector(".prompt"),this.summary=t.querySelector(".summary"),this.offer=t.querySelector(".offer"),this.lift=t.querySelector(".pill.lift"),this.offer.addEventListener("click",o=>{var a;const r=(a=o.target.closest("button"))==null?void 0:a.dataset.act;r&&e(r)});for(const o of[this.loc,this.trip])o.addEventListener("pointerdown",r=>r.preventDefault()),o.addEventListener("click",()=>{o===this.trip&&this.tripTapOffers?e("tripOffer"):o.classList.toggle("open")});this.summary.addEventListener("click",o=>{o.target.closest("button")&&e("nextTrip")}),this.chip.addEventListener("pointerdown",o=>o.preventDefault()),this.buildHelm(),this.chip.addEventListener("click",o=>{o.target.closest(".chip-help")&&e("help")}),t.appendChild(n),t.querySelector(".map-wrap").appendChild(s),this.lockPanel.addEventListener("click",o=>{var a;const r=(a=o.target.closest("button"))==null?void 0:a.dataset.act;r&&e(r)}),n.addEventListener("click",()=>e("map")),s.addEventListener("click",()=>e("map"))}toggleHelp(t){this.help.hidden=t===void 0?!this.help.hidden:!t}setMapOpen(t){this.root.querySelector(".map-wrap").classList.toggle("open",t)}toast(t,e="info",n=4200){for(const o of this.toasts.children)if(o.textContent===t)return;for(;this.toasts.children.length>=3;)this.toasts.firstElementChild.remove();const s=document.createElement("div");s.className=`toast ${e}`,s.textContent=t,this.toasts.appendChild(s),setTimeout(()=>s.classList.add("out"),n),setTimeout(()=>s.remove(),n+600)}setLocation(t,e,n){const s=t+e+n;s!==this.lastLoc&&(this.lastLoc=s,this.loc.querySelector(".head").innerHTML=`<span class="ico">📍</span>${t.replace(/ Lock\b/g,"")}`,this.loc.querySelector(".more").innerHTML=`<div class="eyebrow">Shropshire Union Canal</div><div>${e}</div><div class="journal">${n}</div>`)}buildHelm(){const t=si.x,e=si.y,n=48,s=(u,d)=>{const m=u*Math.PI/180;return[t+Math.sin(m)*d,e-Math.cos(m)*d]},o=(u,d,m)=>{const[_,g]=s(u,m),[p,x]=s(d,m);return`M${_.toFixed(1)},${g.toFixed(1)} A${m},${m} 0 0 1 ${p.toFixed(1)},${x.toFixed(1)}`},r=[];for(let u=tr;u<=er;u++){const[d,m]=s(u*ns,n-4),[_,g]=s(u*ns,n+(u===0?7:4));r.push(`<line x1="${d}" y1="${m}" x2="${_}" y2="${g}" class="${u===0?"tick n":"tick"}"/>`)}const[a,c]=s(0,n+14);this.helm.innerHTML=`
      <svg class="lever" viewBox="0 0 ${si.w} ${si.h}" width="${si.w}" height="${si.h}">
        <path d="${o(tr*ns,0,n)}" class="band astern"/>
        <path d="${o(0,er*ns,n)}" class="band ahead"/>
        ${r.join("")}
        <text x="${a}" y="${c+3}" class="lbl n">N</text>
        <g class="arm"><line x1="${t}" y1="${e-n+15}" x2="${t}" y2="${e-n+4}"/><circle cx="${t}" cy="${e-n}" r="7.5"/></g>
        <text x="${t}" y="${e-6}" class="spd">0.0</text>
        <text x="${t}" y="${e+5}" class="unit">mph</text>
      </svg>`,this.lever=this.helm.querySelector(".arm"),this.speedEl=this.helm.querySelector(".spd");const l=this.helm.querySelector("svg"),h=u=>{const d=l.getBoundingClientRect(),m=(u.clientX-d.left)/d.width*si.w-t,_=(u.clientY-d.top)/d.height*si.h-e,g=Math.atan2(m,-_)*180/Math.PI;return Math.max(tr,Math.min(er,Math.round(g/ns)))};let f=!1;l.addEventListener("pointerdown",u=>{var d;u.preventDefault(),f=!0,l.setPointerCapture(u.pointerId),(d=this.onNotch)==null||d.call(this,h(u))}),l.addEventListener("pointermove",u=>{var d;return f&&((d=this.onNotch)==null?void 0:d.call(this,h(u)))}),l.addEventListener("pointerup",()=>f=!1),l.addEventListener("pointercancel",()=>f=!1)}setHelm(t){const e=`${t.notch}|${t.speedMph.toFixed(1)}`;e!==this.lastHelm&&(this.lastHelm=e,this.lever.style.transform=`rotate(${t.notch*ns}deg)`,this.lever.classList.toggle("astern",t.notch<0),this.lever.classList.toggle("neutral",t.notch===0),this.speedEl.textContent=t.speedMph.toFixed(1));const n=`${t.timeScale}× · <span class="chip-help"><kbd>H</kbd> help</span>`;this.chip.innerHTML!==n&&(this.chip.innerHTML=n)}setTrip(t){const e=JSON.stringify(t);if(e===this.lastTrip)return;this.lastTrip=e,this.tripTapOffers=t.state==="none",t.state==="none"&&this.trip.classList.remove("open");const n=t.state==="active"?`<span class="ico">🎯</span>${t.where}`:t.state==="done"?'<span class="ico">✅</span>Trip done · <kbd>Enter</kbd> next':'<span class="ico">🧭</span>Just cruising · tap for a trip';this.trip.querySelector(".head").innerHTML=n,this.trip.querySelector(".more").innerHTML=t.state==="none"?"":`<div class="eyebrow">Trip ${t.n} · ${t.title}</div><div>${t.brief}</div>`,this.trip.classList.toggle("idle",t.state==="none")}showOffer(t,e,n,s="Accept",o="Not now"){this.offer.innerHTML=`
      <div class="eyebrow">${t}</div>
      <div class="title">${e}</div>
      <p>${n}</p>
      <div class="buttons">
        <button data-act="nextTrip" class="go"><kbd>Enter</kbd> ${s}</button>
        <button data-act="declineTrip"><kbd>Esc</kbd> ${o}</button>
      </div>`,this.offer.hidden=!1}setLift(t){this.lift.hidden=!t,t&&this.lift.textContent!==t&&(this.lift.innerHTML=`<div class="head"><span class="ico">🧑</span>${t}</div>`)}hideOffer(){this.offer.hidden=!0}get offerOpen(){return!this.offer.hidden}setPrompt(t){const e=t?`<kbd>${t.key}</kbd> ${t.text}`:"";e!==this.lastPrompt&&(this.lastPrompt=e,this.promptEl.innerHTML=e,this.promptEl.classList.toggle("waiting",!!t&&!t.ready)),this.promptEl.hidden=!t}showSummary(t,e,n){const s=Math.floor(t.hours),o=Math.round((t.hours-s)*60);this.summary.innerHTML=`
      <div class="eyebrow">Trip complete</div>
      <div class="title">Moored at ${e}</div>
      <dl>
        <dt>Time on the water</dt><dd>${s?`${s} h `:""}${o} min</dd>
        <dt>Bumps</dt><dd>${t.bumps}</dd>
        <dt>Boats and anglers upset</dt><dd>${t.rocked}</dd>
        ${t.cleared?`<dt>Blockages cleared</dt><dd>${t.cleared} 🛒</dd>`:""}
      </dl>
      <p>${t.verdict}</p>
      ${n?`<p class="reward">🎁 New for the roof: <b>${n}</b></p>`:""}
      <button><kbd>Enter</kbd> Next trip</button>`,this.summary.hidden=!1}hideSummary(){this.summary.hidden=!0}get isWinding(){return this.winding}setLockPanel(t,e){if(!e||!e.gate&&!e.step){this.lockPanel.hidden=!0,this.lastLock="",this.winding=!1;return}const n=e.gate,s=e.step,o=(s==null?void 0:s.group)??n.group,r=(s==null?void 0:s.uphill)??!0;this.winding=!!n&&n.paddle>0&&n.paddle<1;const a=o.bodies.map(M=>t.bodies[M]);let c=1/0,l=-1/0;for(const M of a)c=Math.min(c,M.lo-1.6),l=Math.max(l,M.hi+.6);const h=M=>Math.round((M-c)/(l-c)*100),f=a.map((M,v)=>v);r||f.reverse();const u=[];f.forEach((M,v)=>{const A=a[M],y=A.kind==="pound"?"canal":o.staircase?A.label.replace("chamber ",""):"lock",E=s&&s.boatBody===M?'<i class="dg-boat"></i>':"";if(u.push(`<div class="dg-body ${A.kind}"><div class="dg-floor" style="height:${h(A.lo-1.6)}%"></div><div class="dg-water" style="height:${h(A.level)}%">${E}</div><span>${y}</span></div>`),v<f.length-1){const R=r?M:M-1,w=o.gates[R],S=[w.open>.5?"open":"closed",w===n?"sel":"",w===(s==null?void 0:s.gate)?"guide":""].join(" ");u.push(`<div class="dg-gate ${S}">${w.paddle>.05?'<i class="dg-paddle"></i>':""}</div>`)}});let d="";if(n){const M=t.levelsMatch(n),v=!n.wantOpen&&!M||n.wantOpen&&e.boatSpans,A=y=>(s==null?void 0:s.gate)===n&&s.action===y?"guide":"";d=`
      <div class="lp-sel"><span>Selected:</span> <b>${wv(n.label)}</b>${e.candidates>1?' <span class="lp-tab"><kbd>Tab</kbd> other gate</span>':""}</div>
      <div class="lp-actions">
        <button data-act="paddles" class="${n.wantPaddle?"active":""} ${A(n.wantPaddle?"paddlesDown":"paddlesUp")}"><kbd>Q</kbd> ${n.wantPaddle?"Drop paddles":"Wind paddles up"}<i class="prog" style="width:${Math.round(n.paddle*100)}%"></i></button>
        <button data-act="gates" class="${A(n.wantOpen?"close":"open")}" ${v?"disabled":""}><kbd>E</kbd> ${n.wantOpen?"Close gates":"Open gates"}<i class="prog" style="width:${Math.round(n.open*100)}%"></i></button>
      </div>`}const m=e.volunteers==="active",_=!m&&(s!=null&&s.gate)&&n&&s.gate!==n?`<div class="lp-note">The guide wants the ${s.gate.label}. Tab back to it.</div>`:"",g=s?m?`Volunteers: ${s.text.replace(/ \((Q|E)\)/g,"").replace(/^Wind up/,"winding up").replace(/^Drop/,"dropping").replace(/^Open/,"opening").replace(/^Close/,"closing")}`:s.text:"",p=e.volunteers==="available"?'<div class="lp-vol"><span>🙋 Volunteer lock-keepers on duty</span><button data-act="autopilot"><kbd>P</kbd> Let them work you through</button></div>':m?'<div class="lp-vol on"><span>🙋 The volunteers are working you through. Steer or use the throttle to take over.</span></div>':"",x=`
      <div class="lp-head">
        <div class="eyebrow">${o.name} · going ${r?"up":"down"}</div>
      </div>
      <div class="dg">${u.join("")}</div>
      ${s?`<div class="lp-step"><b>Next:</b> ${g}</div>`:""}
      ${_}
      ${p}
      ${m?"":d}`;x!==this.lastLock&&(this.lastLock=x,this.lockPanel.innerHTML=x),this.lockPanel.hidden=!1}}const ns=15,si={x:62,y:68,w:124,h:76},wv=i=>i[0].toUpperCase()+i.slice(1),Ge=.5,Kl=650;class Ev{constructor(t,e,n,s){O(this,"el");O(this,"bigEl");O(this,"base");O(this,"locks");O(this,"bigOpen",!1);O(this,"dest",null);O(this,"bigTx",{ox:0,oz:0,sk:1,dpr:1});O(this,"dragAt",null);O(this,"onTeleport",null);O(this,"places",[]);O(this,"hazards",[]);this.b=s;const o=this.base=document.createElement("canvas");o.width=Math.ceil((s.x1-s.x0)*Ge),o.height=Math.ceil((s.z1-s.z0)*Ge);const r=o.getContext("2d"),a=f=>(f-s.x0)*Ge,c=f=>(f-s.z0)*Ge,l=(f,u)=>{r.beginPath();for(let d=0;d<f.length;d+=2)(d?r.lineTo:r.moveTo).call(r,a(f[d]),c(f[d+1]));u&&r.closePath()};r.fillStyle="#e5e9d2",r.fillRect(0,0,o.width,o.height),r.fillStyle="#c9dcaa";for(const f of t.parks)l(f.p,!0),r.fill();r.fillStyle="#9cc3d2";for(const f of t.water)l(f.p,!0),r.fill();r.strokeStyle="#9cc3d2",r.lineCap=r.lineJoin="round";for(const f of t.rivers)r.lineWidth=f.w*Ge,l(f.p,!1),r.stroke();r.fillStyle="#d2c3ae";for(const f of t.buildings)l(f.p,!0),r.fill();for(const f of[0,1])for(const u of t.roads)u.w<3||(r.strokeStyle=f?"#ffffff":"#b9b2a4",r.lineWidth=u.w*Ge+(f?0:1.5),l(u.p,!1),r.stroke());r.strokeStyle="#5b5550",r.lineWidth=1.5,r.setLineDash([4,3]);for(const f of t.rails)l(f.p,!1),r.stroke();r.setLineDash([]),r.strokeStyle="#2f7aa0",r.lineWidth=4,l(t.centreline,!1),r.stroke();const h=new Map;for(const f of n.gates){const u=e.frame(f.s);let d=h.get(f.lockName);d||h.set(f.lockName,d={name:f.lockName,x:0,z:0,gates:[]}),d.gates.push({x:u.x,z:u.z,nx:u.nx,nz:u.nz})}for(const f of h.values())f.x=f.gates.reduce((u,d)=>u+d.x,0)/f.gates.length,f.z=f.gates.reduce((u,d)=>u+d.z,0)/f.gates.length;this.locks=[...h.values()],this.el=document.createElement("canvas"),this.el.className="minimap",this.el.width=this.el.height=440,this.bigEl=document.createElement("canvas"),this.bigEl.className="bigmap"}draw(t,e,n){const s=this.el.getContext("2d"),o=this.el.width,r=Kl*Ge,a=(t-this.b.x0)*Ge-r/2,c=(e-this.b.z0)*Ge-r/2;s.fillStyle="#e5e9d2",s.fillRect(0,0,o,o),s.drawImage(this.base,a,c,r,r,0,0,o,o);const l=o/Kl,h=(f,u)=>[o/2+(f-t)*l,o/2+(u-e)*l];if(this.drawPlaces(s,h,2,!1),this.drawLocks(s,h,2,9),this.drawDestination(s,h,2,o),this.drawHazards(s,h,2),this.boatMarker(s,o/2,o/2,n,1.6),this.bigOpen){const f=this.bigEl,u=Math.min(2,devicePixelRatio);f.width=f.clientWidth*u,f.height=f.clientHeight*u;const d=f.getContext("2d"),m=Math.min(f.width/this.base.width,f.height/this.base.height),_=(f.width-this.base.width*m)/2,g=(f.height-this.base.height*m)/2;d.fillStyle="#e5e9d2",d.fillRect(0,0,f.width,f.height),d.drawImage(this.base,_,g,this.base.width*m,this.base.height*m);const p=Ge*m,x=(A,y)=>[_+(A-this.b.x0)*p,g+(y-this.b.z0)*p];this.drawPlaces(d,x,u,!0),this.drawLocks(d,x,u,7),this.drawDestination(d,x,u*1.3,null),this.drawHazards(d,x,u*1.3),this.bigTx={ox:_,oz:g,sk:p,dpr:u};const[M,v]=this.dragAt??x(t,e);this.boatMarker(d,M,v,n,1.4*u),this.onTeleport&&(d.font=`800 ${12*u}px Nunito, sans-serif`,d.fillStyle="#a3291f",d.fillText("DEV: drag the boat to move it",14*u,f.height-14*u))}}enableDevTeleport(t,e){this.onTeleport=e;const n=this.bigEl,s=r=>{const a=n.getBoundingClientRect();return[(r.clientX-a.left)*this.bigTx.dpr,(r.clientY-a.top)*this.bigTx.dpr]};let o=!1;n.addEventListener("pointerdown",r=>{const{ox:a,oz:c,sk:l,dpr:h}=this.bigTx,[f,u]=t(),[d,m]=s(r);Math.hypot(d-(a+(f-this.b.x0)*l),m-(c+(u-this.b.z0)*l))>30*h||(this.dragAt=[d,m],o=!1,n.setPointerCapture(r.pointerId))}),n.addEventListener("pointermove",r=>{this.dragAt&&(this.dragAt=s(r),o=!0)}),n.addEventListener("pointerup",()=>{if(!this.dragAt)return;const{ox:r,oz:a,sk:c}=this.bigTx,[l,h]=this.dragAt;this.dragAt=null,o&&e(this.b.x0+(l-r)/c,this.b.z0+(h-a)/c)}),n.addEventListener("click",r=>{o&&(r.stopImmediatePropagation(),o=!1)},{capture:!0}),n.style.cursor="default"}addMooredBoats(t){const e=this.base.getContext("2d");e.fillStyle="#5b4a8a";for(const n of t)e.save(),e.translate((n.x-this.b.x0)*Ge,(n.z-this.b.z0)*Ge),e.rotate(-n.psi),e.fillRect(-Math.max(1.2,n.halfB*Ge),-n.halfL*Ge,Math.max(2.4,n.halfB*2*Ge),n.halfL*2*Ge),e.restore()}setPlaces(t){this.places=t}drawPlaces(t,e,n,s){t.save(),t.textAlign="center",t.textBaseline="middle";const o=[];for(const r of this.places){const[a,c]=e(r.x,r.z);if(!(a<-20||c<-20||a>t.canvas.width+20||c>t.canvas.height+20)&&(t.fillStyle="rgba(255, 250, 235, 0.95)",t.strokeStyle=r.icon==="★"?"#1d3557":"#6e1f1a",t.lineWidth=1.5*n,t.beginPath(),t.arc(a,c,9*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#1d3557",t.font=`${r.icon==="★"?800:400} ${11*n}px Nunito, sans-serif`,t.fillText(r.icon,a,c+.5*n),s)){t.font=`700 ${10*n}px Nunito, sans-serif`;const l=t.measureText(r.name).width,h=a-l/2,f=c+11*n,u=c+23*n;if(o.some(([d,m,_,g])=>h<_&&h+l>d&&f<g&&u>m))continue;o.push([h-4*n,f,h+l+4*n,u]),t.lineWidth=3*n,t.strokeStyle="rgba(255,255,255,0.9)",t.strokeText(r.name,a,c+17*n),t.fillStyle="#3a2a1a",t.fillText(r.name,a,c+17*n)}}t.restore()}setHazards(t){this.hazards=t}drawHazards(t,e,n){for(const[s,o]of this.hazards)this.drawHazard(t,e(s,o),n)}drawHazard(t,[e,n],s){t.save(),t.fillStyle="#ffcf4a",t.strokeStyle="#7a2f00",t.lineWidth=1.5*s,t.beginPath(),t.moveTo(e,n-10*s),t.lineTo(e+9*s,n+6*s),t.lineTo(e-9*s,n+6*s),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#7a2f00",t.font=`900 ${10*s}px Nunito, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("!",e,n+1*s),t.restore()}clearDestination(){this.dest=null}setDestination(t,e,n){this.dest={x:t,z:e,name:n}}drawDestination(t,e,n,s){if(!this.dest)return;let[o,r]=e(this.dest.x,this.dest.z);if(s!==null){const a=s/2,c=o-a,l=r-a,h=Math.hypot(c,l),f=a-14*n;h>f&&(o=a+c/h*f,r=a+l/h*f)}t.save(),t.fillStyle="#ffcf4a",t.strokeStyle="#7a5a10",t.lineWidth=1.5*n,t.beginPath(),t.moveTo(o,r),t.lineTo(o,r-18*n),t.stroke(),t.beginPath(),t.moveTo(o,r-18*n),t.lineTo(o+12*n,r-13.5*n),t.lineTo(o,r-9*n),t.closePath(),t.fill(),t.stroke(),t.restore()}drawLocks(t,e,n,s){t.save(),t.lineCap="round";for(const o of this.locks)for(const r of o.gates){const[a,c]=e(r.x,r.z),l=r.nx*s*n,h=r.nz*s*n;for(const[f,u]of[[5,"#ffffff"],[2.5,"#1b1b1b"]])t.strokeStyle=u,t.lineWidth=f*n,t.beginPath(),t.moveTo(a-l,c-h),t.lineTo(a+l,c+h),t.stroke()}t.font=`800 ${12*n}px Nunito, sans-serif`,t.textBaseline="middle";for(const o of this.locks){const[r,a]=e(o.x,o.z),c=o.gates.length>2?`${o.name} · ${o.gates.length-1} locks`:o.name,l=t.measureText(c).width,h=20*n,f=8*n,u=r-l/2-f,d=a-h-12*n;t.fillStyle="rgba(31, 77, 58, 0.94)",t.beginPath(),t.roundRect(u,d,l+f*2,h,h/2),t.fill(),t.beginPath(),t.moveTo(r-5*n,d+h-.5),t.lineTo(r+5*n,d+h-.5),t.lineTo(r,d+h+6*n),t.fill(),t.fillStyle="#f6efdd",t.fillText(c,u+f,d+h/2+n)}t.restore()}boatMarker(t,e,n,s,o){t.save(),t.translate(e,n),t.rotate(-s+Math.PI),t.scale(o,o),t.fillStyle="#a3291f",t.strokeStyle="#fff",t.lineWidth=2,t.beginPath(),t.moveTo(0,-11),t.lineTo(6,8),t.lineTo(0,4),t.lineTo(-6,8),t.closePath(),t.stroke(),t.fill(),t.restore()}}class Tv{constructor(){O(this,"ctx",null);O(this,"master");O(this,"noise");O(this,"waterGain");O(this,"rumbleGain");O(this,"nextThump",0);O(this,"engine",null);O(this,"nextBird",0);O(this,"nextClick",0);O(this,"muted",Av())}start(){if(this.ctx)return;const t=this.ctx=new AudioContext;this.master=t.createGain(),this.master.gain.value=this.muted?0:.7,this.master.connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*2,t.sampleRate);const e=this.noise.getChannelData(0);for(let a=0;a<e.length;a++)e[a]=Math.random()*2-1;const n=t.createBufferSource();n.buffer=this.noise,n.loop=!0;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=900,this.waterGain=t.createGain(),this.waterGain.gain.value=0,n.connect(s).connect(this.waterGain).connect(this.master),n.start();const o=t.createBufferSource();o.buffer=this.noise,o.loop=!0;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=160,this.rumbleGain=t.createGain(),this.rumbleGain.gain.value=0,o.connect(r).connect(this.rumbleGain).connect(this.master),o.start(),this.loadEngine().catch(a=>console.warn("Engine samples unavailable, using synth",a))}async loadEngine(){const t=this.ctx,e=async l=>t.decodeAudioData(await(await fetch(l)).arrayBuffer()),[n,s]=await Promise.all([e("./audio/engine-idle.wav"),e("./audio/engine-run.wav")]),o=(l,h)=>{const f=t.createBufferSource();return f.buffer=l,f.loop=!0,f.connect(h),f.start(),f},r=t.createGain(),a=t.createGain();r.gain.value=a.gain.value=0;const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=2400,r.connect(c),a.connect(c),c.connect(this.master),this.engine={idle:o(n,r),run:o(s,a),idleGain:r,runGain:a}}toggleMute(){this.muted=!this.muted,this.ctx&&(this.master.gain.value=this.muted?0:.7);try{localStorage.setItem("canal.muted",this.muted?"1":"0")}catch{}}update(t,e,n,s){const o=this.ctx;if(!o)return;const r=o.currentTime,a=Math.abs(t);if(this.engine){const c=this.engine,l=Math.min(1,a*.4);c.idleGain.gain.setTargetAtTime((1-l)*.55,r,.25),c.runGain.gain.setTargetAtTime(l*(.45+a*.05),r,.25),c.idle.playbackRate.setTargetAtTime(1+a*.08,r,.4),c.run.playbackRate.setTargetAtTime(.62+Math.max(0,a-1)*.095,r,.4)}else{const c=7+a*1.9;for(this.nextThump<r&&(this.nextThump=r);this.nextThump<r+.1;)this.thump(this.nextThump,.22+a*.035),this.nextThump+=1/c}this.waterGain.gain.setTargetAtTime(Math.min(.35,e*.06),r,.3),n&&r>this.nextClick&&(this.click(r),this.nextClick=r+.13),s&&r>this.nextBird&&(this.nextBird>0&&this.bird(r),this.nextBird=r+4+Math.random()*9)}rumble(t){this.ctx&&this.rumbleGain.gain.setTargetAtTime(t*t*.9,this.ctx.currentTime,.3)}bump(t){const e=this.ctx;if(!e)return;const n=e.currentTime,s=e.createOscillator();s.frequency.setValueAtTime(70,n),s.frequency.exponentialRampToValueAtTime(35,n+.25);const o=e.createGain();o.gain.setValueAtTime(Math.min(.9,t),n),o.gain.exponentialRampToValueAtTime(.001,n+.35),s.connect(o).connect(this.master),s.start(n),s.stop(n+.4)}quack(){const t=this.ctx;if(!t)return;const e=t.currentTime;for(let n=0;n<2;n++){const s=e+n*.16,o=t.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(520,s),o.frequency.exponentialRampToValueAtTime(330,s+.11);const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=1100,r.Q.value=3;const a=t.createGain();a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.25,s+.015),a.gain.exponentialRampToValueAtTime(1e-4,s+.12),o.connect(r).connect(a).connect(this.master),o.start(s),o.stop(s+.13)}}thump(t,e){const n=this.ctx,s=n.createOscillator();s.type="triangle",s.frequency.setValueAtTime(58,t),s.frequency.exponentialRampToValueAtTime(38,t+.08);const o=n.createGain();o.gain.setValueAtTime(e,t),o.gain.exponentialRampToValueAtTime(.001,t+.11),s.connect(o).connect(this.master),s.start(t),s.stop(t+.12);const r=n.createBufferSource();r.buffer=this.noise;const a=n.createBiquadFilter();a.type="bandpass",a.frequency.value=220;const c=n.createGain();c.gain.setValueAtTime(e*.5,t),c.gain.exponentialRampToValueAtTime(.001,t+.06),r.connect(a).connect(c).connect(this.master),r.start(t,Math.random(),.07)}click(t){const e=this.ctx,n=e.createBufferSource();n.buffer=this.noise;const s=e.createBiquadFilter();s.type="highpass",s.frequency.value=2500;const o=e.createGain();o.gain.setValueAtTime(.35,t),o.gain.exponentialRampToValueAtTime(.001,t+.03),n.connect(s).connect(o).connect(this.master),n.start(t,Math.random(),.04)}bird(t){const e=this.ctx,n=2+Math.floor(Math.random()*4),s=2600+Math.random()*1600;for(let o=0;o<n;o++){const r=t+o*(.09+Math.random()*.05),a=e.createOscillator();a.type="sine",a.frequency.setValueAtTime(s,r),a.frequency.exponentialRampToValueAtTime(s*(.7+Math.random()*.6),r+.07);const c=e.createGain();c.gain.setValueAtTime(1e-4,r),c.gain.exponentialRampToValueAtTime(.05,r+.01),c.gain.exponentialRampToValueAtTime(1e-4,r+.08),a.connect(c).connect(this.master),a.start(r),a.stop(r+.1)}}}function Av(){try{return localStorage.getItem("canal.muted")==="1"}catch{return!1}}const Ho=.04,Rv=90;function Jl(i,t,e){const n=Pv(i,t,e);return n!=null&&n.keeper&&(n.text=Cv(n)),n}function Cv(i){var n;const t=i.gate.label,e=(n=i.text.match(/\(Q\) (.*)\.$/))==null?void 0:n[1];switch(i.action){case"paddlesUp":return`The lock-keeper is winding up the paddles on the ${t}${e?` ${e}`:""}. Sit tight.`;case"paddlesDown":return`The lock-keeper is dropping the paddles on the ${t}.`;case"close":return`The lock-keeper is closing the ${t}.`;case"open":return`The lock-keeper is opening the ${t}.`;case"wait":return i.text.replace("Water's running","The lock-keeper is letting water run");default:return i.text}}function Pv(i,t,e){const[n,s]=t,o=(n+s)/2;let r,a=1/0;for(const v of i.groups){const A=v.gates[0].s,y=v.gates.at(-1).s,E=e?A-o:o-y,R=o>A-2&&o<y+2,w=R?0:E;(R||E>0&&E<Rv)&&w<a&&(a=w,r=v)}if(!r){for(const v of i.groups){const A=v.gates[0].s,y=v.gates.at(-1).s,E=e?o-y:A-o;if(E>0&&E<60){const R=v.gates.find(S=>S.wantPaddle)??v.gates.find(S=>S.wantOpen),w=e?v.gates.at(-1):v.gates[0];if(R)return{group:v,uphill:e,gate:R,boatBody:e?v.bodies.length-1:0,adjacent:[w],keeper:R!==w,action:R.wantPaddle?"paddlesDown":"close",text:R.wantPaddle?`Before you go: drop the paddles on the ${R.label} behind you (Q).`:`Before you go: close the ${R.label} behind you (E).`}}}return null}const c=r.gates.length-1,l=e?r.gates:[...r.gates].reverse(),f=(e?r.bodies:[...r.bodies].reverse()).map(v=>i.bodies[v]),u=v=>e?v:c+1-v;let d=-1;for(let v=0;v<=c+1;v++){const A=f[v];n>=A.s0-.2&&s<=A.s1+.2&&(d=v)}const m=l.find(v=>v.s>n&&v.s<s),_=d<0?m?[m]:[]:d===c+1?[l[c]]:[l[d-1],l[d]].filter(v=>!!v),g=(v,A,y,E=d)=>({group:r,uphill:e,gate:v,action:A,text:y,boatBody:E<0?-1:u(E),adjacent:_,keeper:!!v&&!_.includes(v)&&A!=="drive"});if(d<0)return g(m??null,"drive","Keep going, nice and slow.");if(d===c+1){const v=r.gates.find(A=>A.wantPaddle)??r.gates.find(A=>A.wantOpen);return v?g(v,v.wantPaddle?"paddlesDown":"close",v.wantPaddle?`You're through! Drop the paddles on the ${v.label} behind you (Q).`:`You're through! Close the ${v.label} behind you (E).`):null}const p=l[d],x=v=>v.label==="the canal"?v===f[0]?"the canal behind you":"the canal ahead":v.label;if(d>0&&l[d-1].wantOpen)return g(l[d-1],"close",`Close the ${l[d-1].label} behind you (E).`);if(Math.abs(f[d].level-f[d+1].level)<Ho){for(const v of r.gates)if(v!==p&&v.wantPaddle)return g(v,"paddlesDown",`Drop the paddles on the ${v.label} (Q) so the water stays put.`)}else{const v=l.find((N,q)=>q!==d&&N.wantOpen);if(v)return g(v,"close",`First close the ${v.label} (E), or the water will just run away.`);const A=r.gates.filter(N=>N.wantPaddle&&Math.abs(i.bodies[N.below].level-i.bodies[N.above].level)>=Ho);if(A.length>1)return g(A[1],"paddlesDown",`Drop the paddles on the ${A[1].label} (Q). One set at a time, or the water just runs straight through.`);if(A.length===1){const N=A[0],q=i.bodies[N.below],W=i.bodies[N.above],lt=W.level-q.level,mt=N.flow===0&&N.paddle>.9?" Hmm, it isn't moving. Something's open at the other end.":"";return g(N,"wait",`Water's running from ${x(W)} into ${x(q)}… levels ${lt.toFixed(1)} m apart.${mt} (T speeds time up.)`)}const y=N=>f[N].kind==="pound"||f[N].level>f[N].hi-Ho,E=N=>f[N].kind==="pound"||f[N].level<f[N].lo+Ho,R=(N,q)=>l[Math.min(N,q)],w=N=>e?N+1:N-1,S=N=>e?N-1:N+1,P=N=>{const q=w(N);return y(q)?[R(N,q),`to fill ${x(f[N])} from ${x(f[q])}`]:P(q)},B=N=>{const q=S(N);return E(q)?[R(N,q),`to empty ${x(f[N])} into ${x(f[q])}`]:B(q)};let U;if(f[d].kind==="pound"||f[d+1].kind==="pound"){const N=f[d].level>f[d+1].level?f[d]:f[d+1],q=N===f[d]?f[d+1]:f[d];U=[p,N.kind==="pound"?`to fill ${x(q)} from ${x(N)}`:`to empty ${x(N)} into ${x(q)}`]}else(e?!y(d+1):!E(d+1))?(U=e?P(d+1):B(d+1),U[1]+=" first"):(e?!E(d):!y(d))?(U=e?B(d):P(d),U[1]+=" first"):U=[p,`so ${x(f[e?d+1:d])} empties into ${x(f[e?d:d+1])}`];const[G,$]=U;for(const N of r.gates)if(N!==G&&N.wantPaddle)return g(N,"paddlesDown",`Drop the paddles on the ${N.label} (Q) so the water stays put.`);return g(G,"paddlesUp",`Wind up the paddles on the ${G.label} (Q) ${$}.`)}return p.wantOpen?p.open<.97?g(p,"wait",`The ${p.label} are swinging open…`):p.wantPaddle?g(p,"paddlesDown",`Drop the paddles on the ${p.label} (Q).`):g(p,"drive",`Gates open. Drive ${d+1===c+1?"out of the lock":`into ${x(f[d+1])}`}.`):g(p,"open",`Levels match. Open the ${p.label} (E).`)}const Ql=["Kingfisher","Dunroamin","Willow","Morning Mist","Heron","Bramble","Otter","Lazy Days","Moorhen","Puddle Duck","Wren","Seren","Daisy May","Jubilee","Halcyon","Mallard","Badger","Tilly","Dragonfly","Rosie","Swallow","Nutmeg","Lily Pad","Bluebell","Damselfly","Kestrel","Second Wind","Tortoise","Meander","Sunflower","Jolly Roger","Dormouse","Albatross","Grebe","Primrose","Liberty","Plover","Hedgehog","Elderflower","Coot","Teasel","Old Bill","Marigold","Windrush","Peregrine","Thistle","Snowdrop","Toad Hall","Cobble","Foxglove","Pippin","Salamander","Spindle","Saffron","Sloe"],th=["#1f4d3a","#7a1f2b","#1d3557","#2e2a4a","#5a3d1e","#2f5d62","#6b2737","#264d2a","#3b4a6b","#8a5a1e"],eh=["#7c2f23","#3a3d40","#d9ccaa","#2b2b2b","#8a7650","#4a5a3a"];class Lv{constructor(t,e,n,s,o,r,a){O(this,"group",new Lt);O(this,"boats",[]);O(this,"zones");O(this,"highlight");O(this,"marker");O(this,"time",0);this.route=t,this.ww=e,this.terrain=n,this.zones=[{id:"tower",name:"Tower Wharf",kind:"visitor",s0:o+10,s1:o+55},{id:"city",name:"City moorings, Cow Lane Bridge",kind:"visitor",s0:1150,s1:1215},{id:"hoole",name:"Hoole",kind:"visitor",s0:2050,s1:2110},{id:"christleton",name:"Christleton",kind:"visitor",s0:4345,s1:4400}];const c=(d,m)=>e.gates.every(_=>_.s<d-35||_.s>m+35)&&s.every(_=>_.s<d-_.w/2-12||_.s>m+_.w/2+12)&&e.windingHoles.every(_=>_<d-30||_>m+30)&&this.zones.every(_=>_.s1<d-8||_.s0>m+8)&&e.bodies[e.bodyIndexAt((d+m)/2)].kind==="pound",l=a.filter(d=>d.type==="stop"&&!/drive.?thru/i.test(d.name)).sort((d,m)=>d.rank-m.rank||d.dist-m.dist);for(const d of l)if(!this.zones.some(m=>m.kind==="stop"&&Math.abs((m.s0+m.s1)/2-d.s)<120))for(const m of[0,8,-8,16,-16,24,-24,32,-32,45,-45,60,-60]){const _=d.s+m-18,g=d.s+m+18;if(!(_<30||g>t.length-30||!c(_,g))){this.zones.push({id:`stop:${d.name}`,name:d.name,kind:"stop",poi:d,s0:_,s1:g});break}}for(const d of this.zones)this.buildZone(d);this.highlight=new Z(new _e,new Di({color:"#ffd76a",transparent:!0,opacity:.5,depthWrite:!1})),this.group.add(this.highlight),this.marker=Dv(),this.group.add(this.marker);const h=ws(77),f=(d,m)=>d-m<40||d+m>t.length-40||e.gates.some(_=>Math.abs(_.s-d)<m+35)||s.some(_=>Math.abs(_.s-d)<m+_.w/2+14)||this.zones.some(_=>d+m>_.s0-6&&d-m<_.s1+6)||e.windingHoles.some(_=>Math.abs(_-d)<m+30)||Math.abs(d-r)<m+30||e.bodies[e.bodyIndexAt(d)].kind!=="pound";let u=[...Ql];for(let d=60;d<t.length-60;){const m=d>o-250&&d<o+220?.85:d>2900&&d<3250?.6:.32,_=15+Math.round(h()*5);if(h()<m&&!f(d+_/2,_/2)){const g=u.splice(Math.floor(h()*u.length),1)[0]??"Narrowboat";u.length||(u=[...Ql]),this.addBoat(d+_/2,_,g,h),d+=_+1+h()*3}else d+=6+h()*14}}addBoat(t,e,n,s){const o=this.route.frame(t),a=(this.ww.halfWidthAt(t)-Sn/2-.12)*fe,c=o.x+o.nx*a,l=o.z+o.nz*a,h=Math.atan2(o.tx,o.tz)+(s()<.5?0:Math.PI),f=_c({name:n,length:e,crew:!1,cabin:th[Math.floor(s()*th.length)],roof:eh[Math.floor(s()*eh.length)]}),u=gv(f),d=this.ww.levelAt(t);u.position.set(c,d,l),u.rotation.order="YXZ",u.rotation.y=h,this.group.add(u),this.boats.push({x:c,z:l,psi:h,halfL:e/2,halfB:Sn/2,name:n,s:t,group:u,baseY:d,rock:0,rockedAt:-99})}buildZone(t){const e=new te({color:"#2a2a2a",metalness:.6,roughness:.4});for(let r=t.s0;r<=t.s1;r+=6){const a=this.ww.halfWidthAt(r),[c,l]=this.route.point(r,(a+.35)*fe),h=new Z(new un(.14,.035,6,12),e);h.position.set(c,this.terrain.bankTop(r)+.07,l),h.rotation.x=Math.PI/2,this.group.add(h)}const n=this.route.frame(t.s0),s=(this.ww.halfWidthAt(t.s0)+2.9)*fe,o=t.kind==="stop"?nh([`Moorings for ${Iv(t.poi)}`,t.name],"#6e1f1a"):nh(["Visitor moorings",t.name]);o.position.set(n.x+n.nx*s,this.terrain.bankTop(t.s0),n.z+n.nz*s),o.rotation.y=Math.atan2(fe*n.tz,-fe*n.tx),this.group.add(o)}setActive(t){if(this.highlight.visible=this.marker.visible=!!t,!t)return;const e=[],n=[];let s=0;for(let l=t.s0;l<=t.s1+.01;l+=1.5,s++){const h=this.ww.halfWidthAt(l),f=this.terrain.bankTop(l)+.06;for(const u of[h-.05,h+.75]){const[d,m]=this.route.point(l,u*fe);e.push(d,f,m)}s>0&&n.push((s-1)*2,(s-1)*2+1,s*2,(s-1)*2+1,s*2+1,s*2)}const o=new _e;o.setAttribute("position",new Kt(e,3)),o.setIndex(n),this.highlight.material.side=Ie,this.highlight.geometry.dispose(),this.highlight.geometry=o;const r=(t.s0+t.s1)/2,[a,c]=this.route.point(r,(this.ww.halfWidthAt(r)+.4)*fe);this.marker.position.set(a,this.terrain.bankTop(r)+4,c),this.marker.userData.y0=this.marker.position.y}rockBoat(t,e){t.rock=Math.min(.09,Math.max(t.rock,e)),t.rockedAt=this.time,this.popOwner(t,"shake")}popOwner(t,e){if(t.owner)this.time>t.owner.until&&(t.owner.from=this.time),t.owner.until=this.time+5,t.owner.mode=e;else{const n=Ps(Ui(Math.random));n.group.position.set(0,-.4,-t.halfL+2.45),t.group.add(n.group),t.owner={person:n,from:this.time,until:this.time+5,mode:e}}}get now(){return this.time}update(t){this.time+=t;for(const e of this.boats){const n=e.owner;if(n){const s=Math.min(1,(this.time-n.from)/.5)*Math.min(1,Math.max(0,(n.until-this.time)/.5));n.person.group.position.y=-.4+s*1,n.person.group.visible=s>.01,pr(n.person,s>.6?n.mode:"rest",this.time)}e.rock<.001||(e.rock*=Math.exp(-t*.6),e.group.rotation.z=Math.sin(this.time*3.1)*e.rock,e.group.position.y=e.baseY+Math.sin(this.time*2.3)*e.rock*.6)}this.marker.visible&&(this.marker.position.y=this.marker.userData.y0+Math.sin(this.time*1.6)*.25,this.marker.rotation.y+=t*.9,this.highlight.material.opacity=.35+.2*Math.sin(this.time*3))}clearAround(t,e,n){for(const s of[...this.boats]){if(Math.abs(s.s-t)>e+s.halfL)continue;this.group.remove(s.group),this.boats.splice(this.boats.indexOf(s),1);const o=n.indexOf(s);o>=0&&n.splice(o,1)}}zoneAt(t){return this.zones.find(e=>t>=e.s0-4&&t<=e.s1+4)}}function Dv(){const i=new Lt,t=new te({color:"#ffcf4a",emissive:"#a07000",emissiveIntensity:.6,roughness:.4}),e=new Z(new dc(.7,0),t);return e.scale.y=1.5,i.add(e),i}function Iv(i){return i.kind==="pub"||i.kind==="bar"?"patrons":i.kind==="hotel"?"guests":"customers"}function nh(i,t="#1d3557"){const e=document.createElement("canvas");e.width=512,e.height=192;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,512,192),n.strokeStyle="#f3ead0",n.lineWidth=6,n.strokeRect(8,8,496,176),n.fillStyle="#f3ead0",n.textAlign="center",n.font="700 34px Nunito, sans-serif",n.fillText(i[0].toUpperCase(),256,70,470),n.font="600 40px Fraunces, Georgia, serif",n.fillText(i[1],256,135,470);const s=new Cs(e);s.colorSpace=ze;const o=new Lt,r=new Z(new jn(2.2,.82),new te({map:s,side:Ie}));r.position.y=1.9,o.add(r);const a=new Z(new Xt(.1,2,.1),new te({color:"#f1efe8"}));return a.position.y=1,o.add(a),o}const Go=.9,ih=2,Vo=.45,Uv=.45;class Nv{constructor(t,e,n,s){O(this,"group",new Lt);O(this,"lines",[]);O(this,"ropeMat",new Zh({color:"#d8c49a"}));O(this,"pinMat",new te({color:"#3a3a3a",metalness:.5,roughness:.5}));this.route=t,this.ww=e,this.terrain=n,this.boat=s}get count(){return this.lines.length}get moored(){return this.lines.length===2}endPoint(t){const e=this.route.frame(this.boat.s);return[((-Math.cos(this.boat.psi)*e.nx+Math.sin(this.boat.psi)*e.nz)*fe>0?1:-1)*Sn*.5,(t==="bow"?1:-1)*(Un/2-1.3)]}gap(t){const[e,n]=this.boat.toWorld(...this.endPoint(t)),s=this.route.project(e,n,this.boat.s);return{gap:this.ww.halfWidthAt(s.s)-s.d*fe,s:s.s}}blocker(){return this.ww.gates.some(t=>Math.abs(t.s-this.boat.s)<Un/2+22)?"No mooring on a lock landing. Move along a bit.":this.boat.d*fe<0?"Moor on the towpath side, the bank with the path.":null}prompt(){if(this.moored)return{key:"F",text:"Cast off",ready:!0};const e=["bow","stern"].filter(r=>!this.lines.some(a=>a.end===r)).map(r=>({e:r,...this.gap(r)})),n=e.reduce((r,a)=>a.gap<r.gap?a:r);if(!this.lines.length&&(n.gap>2.5||this.boat.speed>1)||this.blocker()&&!this.lines.length)return null;const s=this.lines.length?ih:Go,o=e.find(r=>r.gap<s);return o&&this.boat.speed<Vo?{key:"F",text:o.gap>Go?`Haul the ${o.e} in and tie it`:`Tie the ${o.e} line`,ready:!0}:this.lines.length===1?{key:"F",text:`Untie the ${this.lines[0].end} line to realign`,ready:!0}:this.boat.speed>=Vo?{key:"F",text:"Slow right down to step off",ready:!1}:{key:"F",text:`Bring the ${n.e} in alongside the bank`,ready:!1}}act(){if(this.moored)return this.castOff(),"Lines in, cast off. Off you go!";if(!this.lines.length){const n=this.blocker();if(n)return n}const t=["bow","stern"].filter(n=>!this.lines.some(s=>s.end===n)),e=t.find(n=>this.gap(n).gap<(this.lines.length?ih:Go));if(this.lines.length===1&&(!e||this.boat.speed>=Vo)){const n=this.lines[0].end;return this.castOff(),`${n==="bow"?"Bow":"Stern"} line untied. Line her up and try again.`}return this.boat.speed>=Vo?"Too quick to step off! Slow right down first.":e?(this.tie(e),this.moored?null:e==="bow"?"Bow line tied. Now the stern: a touch ahead with the tiller pushed away from the bank swings it in on the rope.":"Stern line tied. Now the bow: a touch astern with the tiller towards the bank brings it in."):`Bring the ${t[0]} closer in to the bank first (within a metre).`}tie(t){const e=this.endPoint(t),[n,s]=this.boat.toWorld(...e),o=this.route.project(n,s,this.boat.s),r=this.ww.halfWidthAt(o.s),a=this.route.frame(o.s),c=Math.sin(this.boat.psi)*a.tx+Math.cos(this.boat.psi)*a.tz>=0?1:-1,l=(t==="bow"?1:-1)*c*.8,[h,f]=this.route.point(o.s+l,(r+.8)*fe),u=Math.hypot(.8,.8+.25)+.35,d=this.gap(t).gap>Go?u:Math.hypot(n-h,s-f)+.35,m={local:e,anchor:[h,f],length:d};this.boat.tethers.push(m);const _=new Z(new ee(.03,.03,.5,6),this.pinMat);_.position.set(h,this.terrain.bankTop(o.s)+.2,f),_.rotation.z=.2;const g=new Rg(new _e().setFromPoints(new Array(12).fill(0).map(()=>new D)),this.ropeMat);g.frustumCulled=!1,this.group.add(_,g),this.lines.push({end:t,tether:m,pin:_,rope:g})}castOff(){for(const t of this.lines)this.group.remove(t.pin,t.rope),t.rope.geometry.dispose();this.boat.tethers.length=0,this.lines=[]}update(t){for(const e of this.lines){const[n,s]=this.boat.toWorld(...e.tether.local),o=new D(n,t+Uv,s),r=e.pin.position.clone().setY(e.pin.position.y+.15),c=.08+Math.max(0,e.tether.length-o.distanceTo(r))*.6,l=e.rope.geometry.getAttribute("position");for(let h=0;h<l.count;h++){const f=h/(l.count-1),u=o.clone().lerp(r,f);u.y-=Math.sin(f*Math.PI)*c,l.setXYZ(h,u.x,u.y,u.z)}l.needsUpdate=!0}}}const sh=[{zone:"city",title:"Up the staircase",brief:"Work up the Northgate Staircase, then moor at the city moorings by Cow Lane Bridge."},{zone:"hoole",title:"Through Chester",brief:"Carry on east under the city bridges and moor up at Hoole. Thirsty? There are canalside pubs on the way (🍺 on the map)."},{zone:"christleton",title:"Out to the country",brief:"Up through Hoole Lane, Chemistry, Tarvin and Greenfield locks, then moor at Christleton for the night."},{zone:"tower",title:"Back to Tower Wharf",brief:"Turn round in the winding hole past Christleton Bridge, then head all the way back down to Tower Wharf."}];class Ov{constructor(t){O(this,"index",0);O(this,"startHour");O(this,"bumps",0);O(this,"rocked",0);O(this,"cleared",0);O(this,"result",null);this.startHour=t}get current(){return sh[this.index%sh.length]}complete(t){const e=(t-this.startHour+24)%24,n=this.bumps+this.rocked*2,s=n===0?"Not a ripple out of place. The towpath regulars are impressed.":n<4?"A couple of scrapes, but nothing a cup of tea won’t fix.":"Eventful! The moored boats will be talking about you for a while.";return this.result={trip:this.current,hours:e,bumps:this.bumps,rocked:this.rocked,cleared:this.cleared,verdict:s},this.result}next(t){this.index++,this.startHour=t,this.bumps=this.rocked=this.cleared=0,this.result=null}}const oh=["Kittiwake","Ruby Tuesday","Water Rat","Bumblebee","Silver Birch","Mistle Thrush","Ploughman","Owl","Clementine","Blackthorn","Sandpiper","Merlin"],rh=["#27445a","#6a1e2e","#2c5a3f","#4b3a6b","#8a4a12","#1f3d4d"],ah=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400"],ch=1.5,Fv=.9;class kv{constructor(t,e,n,s){O(this,"group",new Lt);O(this,"boats",[]);O(this,"events",[]);O(this,"time",0);O(this,"nextSpawn",8);O(this,"blockedAt",()=>[]);O(this,"nameIndex",0);this.route=t,this.ww=e,this.moorings=n,this.player=s}update(t,e){this.time+=t;const n=this.player,s=this.ww.bodies[this.ww.bodyIndexAt(n.s)];if(this.time>this.nextSpawn&&this.boats.length<2&&s.kind==="pound"){this.nextSpawn=this.time+45+Math.random()*60;const o=n.s+e*(230+Math.random()*90),r=Math.min(o,n.s),a=Math.max(o,n.s),c=this.boats.every(l=>Math.abs(l.s-o)>80)&&this.moorings.zoneAt(o)===void 0&&!this.blockedAt().some(l=>l>r-20&&l<a+20);o>s.s0+60&&o<s.s1-60&&c&&this.spawn(o,-e)}for(const o of[...this.boats]){const r=(n.s-o.s)*o.dir>380||Math.abs(n.s-o.s)>520,a=this.ww.bodies[this.ww.bodyIndexAt(o.s)],c=o.dir>0?a.s1-o.s<40:o.s-a.s0<40;if(r||c&&Math.abs(n.s-o.s)>150||a.kind!=="pound"){this.remove(o);continue}this.steer(o,t,e)}}spawn(t,e){const n=oh[this.nameIndex++%oh.length],s=_c({name:n,length:17+Math.round(Math.random()*3),crew:!0,cabin:rh[Math.floor(Math.random()*rh.length)],roof:Math.random()<.5?"#3a3d40":"#7c2f23",crewStyle:Ui(Math.random,{coat:ah[Math.floor(Math.random()*ah.length)]})});s.group.rotation.order="YXZ",this.group.add(s.group);const o=s.group.userData.length/2,r={name:n,model:s,s:t,d:0,dir:e,speed:ch,obstacle:{x:0,z:0,psi:0,halfL:o,halfB:Sn/2},pausedUntil:0,waveUntil:0,passed:!1};this.boats.push(r),this.player.obstacles.push(r.obstacle),this.place(r,0)}remove(t){this.group.remove(t.model.group),this.boats.splice(this.boats.indexOf(t),1);const e=this.player.obstacles.indexOf(t.obstacle);e>=0&&this.player.obstacles.splice(e,1)}bumped(t){const e=this.boats.find(n=>n.obstacle===t);!e||this.time<e.pausedUntil||(e.pausedUntil=this.time+6,e.speed=0,e.waveUntil=this.time+3,this.events.push({kind:"bumped",boat:e}))}steer(t,e,n){const s=this.player,o=this.ww.halfWidthAt(t.s),r=(s.s-t.s)*t.dir,a=n!==t.dir;let c=ch;const l=this.moorings.boats.some(m=>Math.abs(m.s-t.s)<m.halfL+12);l&&(c=Fv),r>0&&r<45&&(c=Math.min(c,a?.7:.4)),r>0&&r<22&&!a&&(c=0);const h=r>0&&r<34&&Math.abs(s.d-t.d)<Sn+.7;h&&(c=0);for(const m of this.blockedAt()){const _=(m-t.s)*t.dir-t.obstacle.halfL;_>-2&&_<30&&(c=Math.min(c,_<5?0:.4))}this.time<t.pausedUntil&&(c=0),t.speed+=Te(c-t.speed,-.9*e,.3*e);const f=t.dir;let u=r>-20&&r<110&&a?f*(h?o:1.8):0;const d=l?o-Sn-1.6:o-1.6;if(u=Te(u,-(o-1.6),d),t.d+=Te(u-t.d,-.45*e,.45*e),t.s+=t.dir*t.speed*e,this.place(t,e),!t.passed&&a&&Math.abs(s.s-t.s)<4){t.passed=!0;const m=(s.d-t.d)*f<0;t.waveUntil=this.time+3.5,this.events.push({kind:m?"greet":"wrongSide",boat:t})}pr(t.model.steererPerson,this.time<t.waveUntil?"wave":"rest",this.time)}place(t,e){const n=this.route.frame(t.s),s=n.x+n.nx*t.d,o=n.z+n.nz*t.d,r=Math.atan2(n.tx,n.tz)+(t.dir>0?0:Math.PI),a=this.ww.levelAt(t.s);t.model.group.position.set(s,a+Math.sin(this.time*1.2+t.s)*.015,o),t.model.group.rotation.y=r,t.model.group.rotation.z=Math.sin(this.time*.9+e)*.004,Object.assign(t.obstacle,{x:s,z:o,psi:r})}}const Wo=-fe,zv=i=>new te({color:i});function ie(i,t,e,n=0,s=0,o=0,r=0,a=0,c=0){const l=new Z(t,zv(e));return l.position.set(n,s,o),l.rotation.set(r,a,c),i.add(l),l}const Fe=(i,t,e)=>new Xt(i,t,e),hn=(i,t,e,n=6)=>new ee(i,t,e,n),Bv={bench(){const i=new Lt;ie(i,Fe(1.6,.06,.4),"#8a6a45",0,.45,0),ie(i,Fe(1.6,.36,.05),"#8a6a45",0,.68,-.2,-.15);for(const t of[-.7,.7])ie(i,Fe(.06,.45,.4),"#2b2b2b",t,.22,0);return i},bin(){const i=new Lt;return ie(i,hn(.22,.2,.8,8),"#1f3d2f",0,.4,0),ie(i,hn(.24,.24,.06,8),"#2b2b2b",0,.82,0),i},lamp(){const i=new Lt;return ie(i,hn(.06,.09,3.6),"#1b1b1b",0,1.8,0),ie(i,Fe(.5,.06,.06),"#1b1b1b",.18,3.55,0),ie(i,hn(.12,.16,.32,6),"#2b2b2b",.38,3.4,0),ie(i,hn(.1,.1,.14,6),"#f4e3a1",.38,3.22,0),i},lifebuoy(){const i=new Lt;return ie(i,Fe(.1,1.5,.1),"#e8e4da",0,.75,0),ie(i,new un(.3,.07,6,12),"#e0522f",0,1.15,.08),ie(i,Fe(.6,.6,.03),"#c0b8a8",0,1.15,0),i},tub(){const i=new Lt;ie(i,hn(.36,.3,.45,8),"#6b4a2e",0,.22,0),ie(i,new Je(.34,0),"#4f8a3a",0,.58,0);for(const[t,e,n]of[[.15,.1,"#e04f6a"],[-.12,.12,"#f2c94c"],[.02,-.16,"#d36ad6"],[-.16,-.06,"#f6f0e4"]])ie(i,new Je(.08,0),n,t,.82,e);return i},reeds(){const i=new Lt,t=ws(5);for(let e=0;e<9;e++){const n=1.1+t()*.9;ie(i,hn(.015,.04,n,4),t()<.4?"#8a9a4a":"#6f8a3a",(t()-.5)*.9,n/2-.3,(t()-.5)*.7,(t()-.5)*.2,0,(t()-.5)*.25),t()<.4&&ie(i,hn(.04,.04,.2,5),"#5a3d22",(t()-.5)*.9,n-.3,(t()-.5)*.7)}return i},hedge(){const i=new Lt;return ie(i,Fe(4.2,1.5,1.1),"#3f6b30",0,.75,0),ie(i,new Je(.6,0),"#4b7a36",-1.2,1.4,.1),ie(i,new Je(.55,0),"#36602a",1,1.45,-.1),i},fence(){const i=new Lt;return ie(i,Fe(2,1.6,.06),"#7a5a3a",0,.8,0),ie(i,Fe(.1,1.75,.1),"#5e4430",-1,.87,0),i},flowers(){const i=new Lt,t=ws(9),e=["#f2c94c","#ffffff","#d36ad6","#e04f6a","#7aa7e0"];for(let n=0;n<7;n++){const s=(t()-.5)*1.6,o=(t()-.5)*1.2;ie(i,hn(.01,.01,.35,3),"#4f7a33",s,.17,o),ie(i,new Je(.06,0),e[Math.floor(t()*e.length)],s,.36,o)}return i},picnic(){const i=new Lt;ie(i,Fe(1.8,.06,.8),"#a07a50",0,.75,0);for(const t of[-.65,.65])ie(i,Fe(1.8,.05,.28),"#a07a50",0,.45,t);for(const t of[-.7,.7])ie(i,Fe(.08,.75,1.5),"#8a6a45",t,.37,0,0);return i},parasol(){const i=new Lt;return ie(i,hn(.03,.03,2.4),"#e8e4da",0,1.2,0),ie(i,new Ln(1.4,.5,8,1,!0),"#a3291f",0,2.3,0),i},cottage(){const i=new Lt;ie(i,Fe(6,4.2,5),"#efe8da",0,2.1,0);const t=new ee(.01,3.9,6.6,4,1);t.rotateY(Math.PI/4),t.rotateZ(Math.PI/2),t.scale(1,.55,1),ie(i,t,"#4d525b",0,5,0),ie(i,Fe(.7,1.4,.7),"#8c4234",2,5.6,0),ie(i,Fe(1,1.9,.08),"#1f4d3a",0,.95,2.52);for(const e of[-1.8,1.8])ie(i,Fe(.9,.9,.08),"#2a3640",e,2.6,2.52),ie(i,Fe(.9,.9,.08),"#2a3640",e,1.1,2.52);return i},heron(){const i=new Lt;ie(i,new Ve(.22,6,4),"#9aa3ab",0,.85,0).scale.set(1,.8,1.6),ie(i,hn(.04,.05,.55,5),"#c8ced2",0,1.2,.18,-.3),ie(i,new Ve(.07,6,4),"#e8eaec",0,1.47,.27),ie(i,new Ln(.025,.22,4),"#d8b34a",0,1.47,.42,Math.PI/2);for(const t of[-.06,.06])ie(i,hn(.012,.012,.7,3),"#c9a24a",t,.35,0);return i}};class Hv{constructor(t,e,n,s,o,r){O(this,"group",new Lt);O(this,"placements",new Map);O(this,"anglerSpots",[]);O(this,"gardens",[]);this.route=t,this.ww=e,this.terrain=n;const a=ws(4242),c=t.length,l=(p,x=6)=>r.some(M=>Math.abs(M.s-p)<M.w/2+x),h=(p,x)=>e.gates.some(M=>Math.abs(M.s-p)<x),f=p=>e.bodies[e.bodyIndexAt(p)].kind==="chamber",u=p=>e.windingHoles.some(x=>Math.abs(x-p)<28),d=p=>{const[x,M]=t.point(p,30*Wo),[v,A]=t.point(p,30*fe);return Math.max(n.urbanAt(x,M),n.urbanAt(v,A))};let m=60;for(let p=20;p<c-20;p+=2){if(l(p,8)||h(p,10))continue;const x=d(p);x>.3&&Math.round(p)%32===0&&this.add("lamp",p,e.halfWidthAt(p)+3.25,"towpath",-Math.PI/2),p>m&&!o.zoneAt(p)&&!n.cliffSide(p,fe)&&(m=p+140+a()*160,this.add("bench",p,e.halfWidthAt(p)+3.6,"towpath",0),x>.2&&this.add("bin",p+1.4,e.halfWidthAt(p)+3.7,"towpath",0)),x>.35&&Math.round(p)%380===0&&this.add("lifebuoy",p,e.halfWidthAt(p)+3.3,"towpath",0)}for(const p of e.groups){const x=p.gates[0].s,M=p.gates.at(-1).s;this.add("lifebuoy",x-6,e.halfWidthAt(x-6)+3.3,"towpath",0),this.add("lifebuoy",M+6,e.halfWidthAt(M+6)+3.3,"towpath",0);for(const A of[x+4,M-4,(x+M)/2])this.add("tub",A,e.halfWidthAt(A)+2.2,"towpath",0),this.add("tub",A+1.2,e.halfWidthAt(A)+2.2,"offside",0);const v=(x+M)/2;if(!p.staircase&&d(v)<.45){const A=e.halfWidthAt(v)+10,[y,E]=t.point(v,A*fe);s.isFree(y,E)&&this.add("cottage",v,A,"land",0)}}let _=-1,g="none";for(let p=10;p<c-10;p+=2){if(p>_){_=p+60;const A=d(p);g=A<.3?a()<.85?"hedge":"none":A>.4?a()<.8?"fence":"none":a()<.5?"hedge":"fence"}if(g==="none"||l(p,4)||f(p)||h(p,6)||u(p))continue;const x=e.halfWidthAt(p)+2.4,[M,v]=t.point(p,x*Wo);s.isFree(M,v)&&(g==="fence"?this.add("fence",p,x,"offside",0):Math.round(p)%4===0&&this.add("hedge",p,x,"offside",0))}for(let p=10;p<c-10;p+=3){if(l(p,6)||f(p)||h(p,15)||u(p))continue;const x=d(p);a()<(x<.3?.45:.12)&&this.add("reeds",p,e.halfWidthAt(p)-.25,"water",a()*6),x<.35&&a()<.3&&!n.cliffSide(p,fe)&&this.add("flowers",p,e.halfWidthAt(p)+4.6+a()*1.5,"towpath",a()*6),x<.2&&a()<.008&&this.add("heron",p,e.halfWidthAt(p)+.9,"offside",Math.PI/2*Wo+(a()-.5))}for(const p of o.zones){if(p.kind!=="stop"||!/pub|bar/.test(p.poi.kind))continue;const x=(p.s0+p.s1)/2;for(const[M,v,A]of[[-5,6,"picnic"],[0,7.5,"picnic"],[5,6,"picnic"],[-2.5,7,"parasol"],[3,6.5,"parasol"]])if(this.add(A,x+M,e.halfWidthAt(x)+v,"land",0),A==="picnic"){const[y,E]=t.point(x+M,(e.halfWidthAt(x)+v)*fe);this.gardens.push({x:y,z:E,y:n.bankTop(x),ry:Math.atan2(t.frame(x).tx,t.frame(x).tz)})}}for(let p=150;p<c-80;p+=70+a()*90)d(p)>.55||l(p,15)||h(p,45)||o.zoneAt(p)||f(p)||o.boats.some(x=>Math.abs(x.s-p)<x.halfL+8)||this.anglerSpots.push({s:p});this.build()}add(t,e,n,s,o){if(e<1||e>this.route.length-1)return;const r=s==="offside"||s==="water"?Wo:fe,a=this.route.frame(e),c=a.x+a.nx*n*r,l=a.z+a.nz*n*r;let h;s==="water"?h=this.ww.levelAt(e):s==="land"?h=this.terrain.heightAt(c,l):h=n<this.ww.halfWidthAt(e)+3.4?this.terrain.bankTop(e):this.terrain.landHeight(c,l,e,n*r);const f=Math.atan2(-a.nx*r,-a.nz*r),u=new he().compose(new D(c,h,l),new wn().setFromAxisAngle(new D(0,1,0),f+o),new D(1,1,1));this.placements.has(t)||this.placements.set(t,[]),this.placements.get(t).push(u)}build(){for(const[t,e]of this.placements){const n=pi(Bv[t]()),s=new Pn(n,Ci(),e.length);e.forEach((o,r)=>s.setMatrixAt(r,o)),s.castShadow=t!=="flowers"&&t!=="reeds",s.receiveShadow=!0,s.name=`decor:${t}`,this.group.add(s)}}get counts(){return Object.fromEntries([...this.placements].map(([t,e])=>[t,e.length]))}}const Vs=6,Kr=4,Jr=380,vn=new he,oi=new wn,Ws=new D,Xs=new D(1,1,1),Xo=new D(0,1,0);function Gv(i,t){const e=Ps({...i,coat:"#ffffff"});t(e);const n=new Lt;n.add(e.group);const s=o=>o.userData.part==="coat";return{coat:pi(n,void 0,s),rest:pi(n,void 0,o=>!s(o))}}class $o{constructor(t,e,n,s,o){O(this,"meshes",[]);for(const r of e){const a=[];for(let c=0;c<n;c++){const l=Gv(r,u=>o(u,c)),h=new Pn(l.coat,lh(),s),f=new Pn(l.rest,lh(),s);for(const u of[h,f])u.count=0,u.castShadow=!0,u.frustumCulled=!1,u.instanceMatrix.setUsage(Ba),t.add(u);a.push({coat:h,rest:f})}this.meshes.push(a)}}begin(){for(const t of this.meshes)for(const{coat:e,rest:n}of t)e.count=n.count=0}put(t,e,n,s){const{coat:o,rest:r}=this.meshes[t%this.meshes.length][e%this.meshes[0].length],a=o.count++;r.count++,o.setMatrixAt(a,n),r.setMatrixAt(a,n),o.setColorAt(a,s)}end(){for(const t of this.meshes)for(const{coat:e,rest:n}of t)e.instanceMatrix.needsUpdate=n.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}}const lh=()=>new te({vertexColors:!0,roughness:.75});function Vv(){const i=new Lt,t=a=>new te({color:a});for(const a of[-.55,.55]){const c=new Z(new un(.33,.03,5,12),t("#1b1b1b"));c.position.set(0,.33,a),c.rotation.y=Math.PI/2,i.add(c)}const e=new Z(new Xt(.05,.05,.9),t("#2e86c1"));e.position.set(0,.62,0),e.rotation.x=-.12;const n=new Z(new Xt(.04,.32,.04),t("#2e86c1"));n.position.set(0,.68,-.18);const s=new Z(new Xt(.12,.05,.22),t("#1b1b1b"));s.position.set(0,.86,-.18);const o=new Z(new Xt(.04,.42,.04),t("#2e86c1"));o.position.set(0,.78,.45);const r=new Z(new Xt(.5,.035,.035),t("#1b1b1b"));return r.position.set(0,.99,.43),i.add(e,n,s,o,r),pi(i)}function Wv(){const i=new Lt,t=o=>new te({color:o}),e=new Z(new Xt(.22,.22,.55),t("#8a5a2b"));e.position.y=.35;const n=new Z(new Xt(.18,.18,.2),t("#7a4a22"));n.position.set(0,.5,.33),i.add(e,n);for(const[o,r]of[[-.08,-.2],[.08,-.2],[-.08,.2],[.08,.2]]){const a=new Z(new Xt(.05,.25,.05),t("#6a3a1a"));a.position.set(o,.12,r),i.add(a)}const s=new Z(new Xt(.04,.04,.22),t("#8a5a2b"));return s.position.set(0,.48,-.36),s.rotation.x=.6,i.add(s),pi(i)}function hh(i){const t=new Lt,e=a=>new te({color:a}),n=i?1.9:1,s=new Z(new Ve(.16*n,6,4),e(i?"#f4f4f0":"#8a6a4a"));if(s.scale.set(.8,.55,1.3),s.position.y=.05*n,t.add(s),i){const a=new Z(new ee(.035,.05,.5,5),e("#f4f4f0"));a.position.set(0,.32,.2),a.rotation.x=.25,t.add(a)}const o=new Z(new Ve(.07*(i?1.1:1),6,4),e(i?"#f4f4f0":"#2f6b3a"));o.position.set(0,i?.58:.17,i?.28:.16);const r=new Z(new Ln(.03,.1,4),e(i?"#e07a2a":"#e2b23a"));return r.position.set(0,o.position.y-.01,o.position.z+.09),r.rotation.x=Math.PI/2,t.add(o,r),pi(t)}class Xv{constructor(t,e,n,s,o,r){O(this,"group",new Lt);O(this,"events",[]);O(this,"movers",[]);O(this,"birds",[]);O(this,"anglers",[]);O(this,"walkers");O(this,"joggers");O(this,"riders");O(this,"bikes");O(this,"dogs");O(this,"ducks");O(this,"swans");O(this,"time",0);O(this,"rand",ws(31));this.route=t,this.ww=e,this.terrain=n,this.boat=s;const a=this.rand,c=Array.from({length:Kr},()=>Ui(a)),l=22;this.walkers=new $o(this.group,c,Vs,l,(u,d)=>Ya(u,d/Vs*Math.PI*2)),this.joggers=new $o(this.group,c.slice(0,2),Vs,l,(u,d)=>{Ya(u,d/Vs*Math.PI*2,1.5),u.armL.rotation.x-=.6,u.armR.rotation.x-=.6}),this.riders=new $o(this.group,c.slice(1,3),4,l,(u,d)=>uv(u,d/4*Math.PI*2)),this.bikes=new Pn(Vv(),Ci(),l),this.dogs=new Pn(Wv(),Ci(),l);for(let u=0;u<l;u++){const d=u<14?"walk":u<18?"jog":"cycle",m={s:s.s+(a()-.5)*Jr*2,d:0,dir:a()<.5?1:-1,kind:d,phase:a()*10,speed:d==="walk"?1.1+a()*.4:d==="jog"?2.6+a()*.6:4+a()*1.5,dog:d==="walk"&&a()<.45,coat:new Ht(js[Math.floor(a()*js.length)]),look:Math.floor(a()*Kr)};m.d=this.laneFor(m),this.movers.push(m)}for(const u of[this.bikes,this.dogs])u.castShadow=!0,u.instanceMatrix.setUsage(Ba),u.frustumCulled=!1,this.group.add(u);for(const u of o){const d=Ps(Ui(a,{hairStyle:a()<.5?"cap":"beanie",coat:a()<.5?"#3d5a3d":"#5a4a3a"})),m=t.frame(u.s),_=(e.halfWidthAt(u.s)+.9)*fe,g=new Lt;g.add(d.group),ja(d);const p=new Z(new Xt(.5,.4,.35),new te({color:"#3d5a3d"}));p.position.set(0,.2,-.1),g.add(p);const x=new Z(new ee(.01,.02,4.2,4),new te({color:"#2b2b2b"}));x.position.set(.25,1.3,1.6),x.rotation.x=1.05,g.add(x),g.position.set(m.x+m.nx*_,n.bankTop(u.s),m.z+m.nz*_),g.rotation.y=Math.atan2(-m.nx*fe,-m.nz*fe),this.group.add(g),this.anglers.push({s:u.s,person:d,angryUntil:0,lastGrumble:-99})}const h=new $o(this.group,c,1,64,u=>ja(u));h.begin();for(const u of r)for(const d of[-1,1])if(!(a()<.35))for(const m of[-.5,.5]){if(a()<.4)continue;const _=new D(m,0,d*.62).applyAxisAngle(Xo,u.ry);oi.setFromAxisAngle(Xo,u.ry+(d>0?Math.PI:0)),vn.compose(Ws.set(u.x+_.x,u.y,u.z+_.z),oi,Xs),h.put(Math.floor(a()*Kr),0,vn,new Ht(js[Math.floor(a()*js.length)]))}h.end();let f=0;for(let u=120;u<t.length-60;u+=160+a()*260){if(e.bodies[e.bodyIndexAt(u)].kind!=="pound")continue;const d=a()<.22,m=d?2:2+Math.floor(a()*4);f++;for(let _=0;_<m;_++)this.birds.push({s:u+(a()-.5)*8,d:(a()-.5)*5,vs:0,vd:0,swan:d,heading:a()*6,flock:f,lastQuack:-99})}this.ducks=new Pn(hh(!1),Ci(),Math.max(1,this.birds.filter(u=>!u.swan).length)),this.swans=new Pn(hh(!0),Ci(),Math.max(1,this.birds.filter(u=>u.swan).length));for(const u of[this.ducks,this.swans])u.instanceMatrix.setUsage(Ba),u.frustumCulled=!1,this.group.add(u)}laneFor(t){return this.ww.halfWidthAt(Te(t.s,0,this.route.length))+1.6+(t.dir>0?-.35:.35)}update(t){this.time+=t;const e=this.boat,n=this.route.length,s=e.speed*2.237>3;let o=0,r=0;for(const l of[this.walkers,this.joggers,this.riders])l.begin();this.movers.forEach(l=>{l.s+=l.dir*l.speed*t,l.phase+=t*l.speed*4.5,(Math.abs(l.s-e.s)>Jr||l.s<5||l.s>n-5)&&(l.s=Te(e.s+(this.rand()<.5?-1:1)*(Jr-20-this.rand()*60),5,n-5),l.dir=l.s>e.s?-1:1,this.rand()<.5&&(l.dir*=-1)),l.d+=(this.laneFor(l)-l.d)*Math.min(1,t*2);const h=this.route.frame(l.s),f=h.x+h.nx*l.d*fe,u=h.z+h.nz*l.d*fe,d=l.kind==="cycle"?0:Math.abs(Math.cos(l.phase))*(l.kind==="jog"?.05:.025),m=this.terrain.bankTop(l.s)+(l.kind==="cycle"?-.07:d),_=Math.atan2(h.tx,h.tz)+(l.dir>0?0:Math.PI);oi.setFromAxisAngle(Xo,_),vn.compose(Ws.set(f,m,u),oi,Xs);const g=Math.floor(l.phase/(Math.PI*2)%1*Vs);if((l.kind==="walk"?this.walkers:l.kind==="jog"?this.joggers:this.riders).put(l.look,l.kind==="cycle"?g%4:g,vn,l.coat),l.kind==="cycle"&&(vn.compose(Ws.set(f,this.terrain.bankTop(l.s),u),oi,Xs),this.bikes.setMatrixAt(o++,vn)),l.dog){const x=Math.sin(l.phase*.3)*.6+1.2,M=f-Math.sin(_)*x+h.nx*.5,v=u-Math.cos(_)*x+h.nz*.5;vn.compose(Ws.set(M,this.terrain.bankTop(l.s)+Math.abs(Math.sin(l.phase*1.6))*.04,v),oi,Xs),this.dogs.setMatrixAt(r++,vn)}}),this.bikes.count=o,this.dogs.count=r;for(const l of[this.walkers,this.joggers,this.riders])l.end();for(const l of[this.bikes,this.dogs])l.instanceMatrix.needsUpdate=!0;for(const l of this.anglers)s&&Math.abs(l.s-e.s)<14&&this.time-l.lastGrumble>20&&(l.lastGrumble=this.time,l.angryUntil=this.time+4,this.events.push({kind:"angler"})),pr(l.person,this.time<l.angryUntil?"shake":"rest",this.time);let a=0,c=0;for(const l of this.birds){const h=l.s-e.s,f=l.d-e.d,u=Math.hypot(h,f);u<14?(l.vd+=Math.sign(f||1)*.6*t*(14-u),l.vs+=Math.sign(h||1)*.25*t*(14-u),u<5&&this.time-l.lastQuack>6&&!l.swan&&(l.lastQuack=this.time,this.events.push({kind:"quack"}))):(l.vs+=Math.sin(this.time*.3+l.flock*7+l.heading)*.05*t,l.vd+=Math.cos(this.time*.23+l.flock*3)*.04*t);const d=l.swan?.6:.9;l.vs=Te(l.vs*(1-t*.4),-d,d),l.vd=Te(l.vd*(1-t*.4),-d,d),l.s=Te(l.s+l.vs*t,5,n-5);const m=this.ww.halfWidthAt(l.s)-.4;l.d=Te(l.d+l.vd*t,-m,m),Math.abs(l.d)>=m&&(l.vd*=-.3);const _=this.route.frame(l.s),g=Math.atan2(_.tx*l.vs+_.nx*l.vd,_.tz*l.vs+_.nz*l.vd);Math.hypot(l.vs,l.vd)>.05&&(l.heading+=Math.atan2(Math.sin(g-l.heading),Math.cos(g-l.heading))*Math.min(1,t*3)),oi.setFromAxisAngle(Xo,l.heading),vn.compose(Ws.set(_.x+_.nx*l.d,this.ww.levelAt(l.s)+Math.sin(this.time*2+l.s)*.01,_.z+_.nz*l.d),oi,Xs),l.swan?this.swans.setMatrixAt(c++,vn):this.ducks.setMatrixAt(a++,vn)}this.ducks.count=a,this.swans.count=c,this.ducks.instanceMatrix.needsUpdate=this.swans.instanceMatrix.needsUpdate=!0}}const $v=5,dn=(i,t={})=>new te({color:i,roughness:.6,...t});function qv(){const i=new Lt,t=dn("#b8bcc2",{metalness:.8,roughness:.3}),e=(s,o,r,a,c,l)=>{const h=new Z(new Xt(s,o,r),t);h.position.set(a,c,l),i.add(h)};for(const s of[.45,.95])e(.55,.025,.025,0,s,.45),e(.55,.025,.025,0,s,-.45),e(.025,.025,.9,.27,s,0),e(.025,.025,.9,-.27,s,0);for(const s of[-.27,.27])for(const o of[-.45,.45])e(.025,.5,.025,s,.7,o);for(let s=-.35;s<=.36;s+=.14)e(.55,.012,.012,0,.45,s);const n=new Z(new Xt(.6,.05,.05),dn("#c0392b"));n.position.set(0,1.05,-.52),i.add(n);for(const s of[-.25,.25])for(const o of[-.4,.4]){const r=new Z(new ee(.06,.06,.04,8),dn("#2b2b2b"));r.rotation.z=Math.PI/2,r.position.set(s,.1,o),i.add(r)}return i}function Yv(){const i=new Lt;for(const n of[-.5,.5]){const s=new Z(new un(.33,.03,5,14),dn("#1b1b1b"));s.position.set(0,.33,n),s.rotation.y=Math.PI/2,i.add(s)}const t=new Z(new Xt(.04,.04,1),dn("#27ae60"));t.position.y=.55,i.add(t);const e=new Z(new Xt(.5,.04,.04),dn("#1b1b1b"));return e.position.set(0,.85,.45),i.add(e),i}function jv(){const i=new Lt,t=new Z(new Ln(.18,.6,8),dn("#ff6a13"));t.position.y=.3;const e=new Z(new ee(.115,.13,.08,8),dn("#f4f4f4"));return e.position.y=.33,i.add(t,e),i}function Zv(i){const t=new Lt,e=new Z(new ee(.06,.1,i,5),dn("#5a4632"));e.rotation.z=Math.PI/2,t.add(e);const n=new Z(new ee(.02,.04,i*.4,4),dn("#6a5440"));n.position.set(i*.15,.05,.12),n.rotation.set(0,.6,Math.PI/2),t.add(n);const s=new Z(new Je(.3,0),dn("#5c7a3a"));return s.position.set(-i*.4,.05,0),s.scale.y=.4,t.add(s),t}class Kv{constructor(t,e,n){O(this,"group",new Lt);O(this,"s",0);O(this,"active",!1);O(this,"spotted",!1);O(this,"progress",0);O(this,"clearing",!1);O(this,"obstacle",{x:0,z:0,psi:0,halfL:1.2,halfB:0});O(this,"pieces",[]);this.route=t,this.ww=e,this.terrain=n}place(t){this.reset(),this.s=t,this.active=!0,this.spotted=!1;const e=this.route.frame(t),n=this.ww.halfWidthAt(t),s=this.ww.levelAt(t),o=Math.atan2(e.tx,e.tz);Object.assign(this.obstacle,{x:e.x,z:e.z,psi:o,halfB:n});const r=(a,c,l,h,f,u,d,m)=>{d.position.set(e.x+e.nx*a+e.tx*c,s+l,e.z+e.nz*a+e.tz*c),d.rotation.set(f,o+h,u),this.group.add(d);const[_,g]=this.route.point(t+m*.6,(n+1.5+Math.abs(m)*.25)*fe);this.pieces.push({obj:d,from:d.position.clone(),fromRot:d.rotation.clone(),to:new D(_,this.terrain.bankTop(t)+.05,g)})};r(-n*.45,0,-.55,.4,.5,.3,qv(),-2),r(n*.25,.4,-.35,1.2,1.2,.2,Yv(),0),r(n*.65,-.5,-.1,0,.9,0,jv(),2);for(let a=0;a<6;a++){const c=-n+.6+a/5*(n*2-1.2);r(c,a%2?.4:-.4,.02,.3+a*.5,0,0,Zv(1.6+a%3*.6),a-3)}for(let a=0;a<4;a++){const c=new Z(new Je(.2,0),dn(a%2?"#f2f2f2":"#3a3a3a"));c.scale.y=.6,r(-n+1+a*(n*.6),a%2?.7:-.6,.05,a,0,0,c,a-2)}}reset(){for(const t of this.pieces)this.group.remove(t.obj);this.pieces=[],this.active=!1,this.clearing=!1,this.progress=0}startClearing(){return!this.active||this.clearing?!1:(this.clearing=!0,!0)}update(t,e){return this.active?this.clearing?(this.progress=Math.min(1,this.progress+t/$v),this.pieces.forEach((n,s)=>{const o=s/this.pieces.length*.85,r=Math.min(1,Math.max(0,(this.progress-o)/.15));r<=0||(n.obj.position.lerpVectors(n.from,n.to,r),n.obj.position.y+=Math.sin(r*Math.PI)*1.4,n.obj.rotation.set(n.fromRot.x*(1-r),n.fromRot.y,n.fromRot.z*(1-r)+(r>.99?s%3*.4:0)))}),this.progress>=1?(this.active=!1,this.clearing=!1,!0):!1):(this.pieces.forEach((n,s)=>n.obj.position.y=n.from.y+Math.sin(e*1.3+s)*.03),!1):!1}}const Jv=.75,Qv=1.6,uh=1.4;class tx{constructor(t,e,n,s){O(this,"group",new Lt);O(this,"staffed",new Set);O(this,"active",null);O(this,"helpers",new Map);O(this,"actKey","");O(this,"actAt",0);O(this,"driveTarget",null);O(this,"time",0);O(this,"busyGate",null);this.route=t,this.ww=e,this.terrain=n,this.boat=s,this.roster()}roster(){for(const t of this.helpers.values())for(const e of t)this.group.remove(e.person.group);this.helpers.clear(),this.staffed.clear();for(const t of this.ww.groups){if(!(t.staircase||Math.random()<.4))continue;this.staffed.add(t);const e=[];for(const n of[-3,3]){const s=Ps(Ui(Math.random,{coat:"#1d5fa8",longCoat:!1}));this.group.add(s.group),e.push({person:s,s:(t.gates[0].s+t.gates.at(-1).s)/2+n,offset:n})}this.helpers.set(t,e)}}isStaffed(t){return!!t&&this.staffed.has(t)}start(t){this.active=t,this.driveTarget=null,this.actKey=""}stop(){this.active=null,this.driveTarget=null,this.busyGate=null}update(t,e,n){if(this.time+=t,this.animateHelpers(t),!this.active)return"idle";if(!e||e.group!==this.active)return this.stop(),"done";const s=this.boat,o=n?1:-1;if(e.action==="drive"){if(this.driveTarget===null){const r=this.ww.gates.filter(a=>a.group===this.active&&(a.s-s.s)*o>-.5).sort((a,c)=>(a.s-c.s)*o)[0];if(!r)this.driveTarget=s.s+o*30;else{const a=this.ww.bodies[n?r.above:r.below];this.driveTarget=a.kind==="chamber"?(a.s0+a.s1)/2:r.s+o*(Un/2+14)}}this.creepTo(this.driveTarget,t)}else if(this.driveTarget=null,this.creepTo(null,t),e.gate&&e.action!=="wait"){this.busyGate=e.gate;const r=`${e.action}:${e.gate.label}`;if(r!==this.actKey)this.actKey=r,this.actAt=this.time+Qv+this.walkTime(e.gate);else if(this.time>=this.actAt){const a=e.gate;e.action==="paddlesUp"?a.wantPaddle=!0:e.action==="paddlesDown"?a.wantPaddle=!1:e.action==="close"?a.wantOpen=!1:e.action==="open"&&this.ww.levelsMatch(a)&&(a.wantOpen=!0),this.actKey=""}}else e.gate&&(this.busyGate=e.gate);return"running"}walkTime(t){const e=this.helpers.get(this.active);return e?Math.min(...e.map(n=>Math.abs(n.s-t.s)))/uh:0}creepTo(t,e){const n=this.boat,s=this.route.frame(n.s);let o=0;if(t!==null){const c=t-n.s;o=Math.sign(c)*Math.min(Jv,Math.abs(c)*.5),Math.abs(c)<.05&&(o=0)}n.s+=o*e,n.d+=(0-n.d)*Math.min(1,e*.8);const r=this.route.frame(n.s);n.x=r.x+r.nx*n.d,n.z=r.z+r.nz*n.d;const a=Math.atan2(s.tx,s.tz)+(Math.cos(n.psi-Math.atan2(s.tx,s.tz))>=0?0:Math.PI);n.psi+=Math.atan2(Math.sin(a-n.psi),Math.cos(a-n.psi))*Math.min(1,e*1.5),n.u=Math.abs(o),n.v=n.r=0,n.notch=0,n.thrust=0}animateHelpers(t){var e;for(const[n,s]of this.helpers){const o=this.active===n&&((e=this.busyGate)==null?void 0:e.group)===n;for(const r of s){const a=(n.gates[0].s+n.gates.at(-1).s)/2+r.offset,c=o?this.busyGate.s+r.offset*.9:a,l=Math.sign(c-r.s)*Math.min(Math.abs(c-r.s),uh*t);r.s+=l;const h=this.ww.halfWidthAt(r.s),f=r.offset<0?fe:-fe,[u,d]=this.route.point(r.s,(h+1.1)*f);r.person.group.position.set(u,this.terrain.bankTop(r.s)+(Math.abs(l)>.001?Math.abs(Math.sin(this.time*6))*.03:0),d);const m=this.route.frame(r.s);r.person.group.rotation.y=Math.abs(l)>.001?Math.atan2(m.tx*Math.sign(l),m.tz*Math.sign(l)):Math.atan2(-m.nx*f,-m.nz*f);const _=o&&Math.abs(r.s-c)<.5,g=this.busyGate,p=_&&!!g&&g.paddle>.02&&g.paddle<.98;Math.abs(l)>.001?Ya(r.person,this.time*6):(hv(r.person),pr(r.person,p?"wind":_&&g&&g.open>.02&&g.open<.98?"push":"rest",this.time))}}}}const dh=new Ht("#b0664d"),fh=new Ht("#c9a58a"),Qr=new Ht("#d0b896");class ex{constructor(){O(this,"pos",[]);O(this,"col",[])}tri(t,e,n,s){for(const o of[t,e,n])this.pos.push(o.x,o.y,o.z),this.col.push(s.r,s.g,s.b)}quad(t,e,n,s,o){this.tri(t,e,n,o),this.tri(t,n,s,o)}mesh(){const t=new _e;t.setAttribute("position",new Kt(this.pos,3)),t.setAttribute("color",new Kt(this.col,3)),t.computeVertexNormals();const e=new Z(t,new te({vertexColors:!0,roughness:.9,flatShading:!0,side:Ie}));return e.castShadow=e.receiveShadow=!0,e}}class nx{constructor(t,e,n,s){O(this,"group",new Lt);this.route=t,this.ww=e,this.terrain=n;const o=new ex;for(const r of s.walls??[]){const a=[];for(let c=0;c<r.p.length;c+=2)a.push([r.p[c],r.p[c+1]]);r.kind==="gate"?this.gate(o,a):r.closed?this.extrude(o,a,2.4,dh,fh):this.extrude(o,ix(a,1.3),2.4,dh,fh)}this.group.add(o.mesh()),s.bridgeOfSighs&&this.group.add(this.bridgeOfSighs(s.bridgeOfSighs))}ground(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s),o=Math.sign(n.d||1)*Math.max(n.dist,s+7);return this.terrain.landHeight(t,e,n.s,o)}extrude(t,e,n,s,o){const r=e.length;if(r<3)return;const a=e.map(([h,f])=>this.ground(h,f)+n),c=(h,f)=>new D(e[h][0],f,e[h][1]);for(let h=0;h<r;h++){const f=(h+1)%r;t.quad(c(h,a[h]-n-7),c(f,a[f]-n-7),c(f,a[f]),c(h,a[h]),s)}const l=Dn.triangulateShape(e.map(([h,f])=>new nt(h,f)),[]);for(const[h,f,u]of l)t.tri(c(h,a[h]),c(f,a[f]),c(u,a[u]),o);for(let h=0;h<r;h++){const f=(h+1)%r,u=Math.hypot(e[f][0]-e[h][0],e[f][1]-e[h][1]);for(let d=.6;d<u-.3;d+=2.2){const m=d/u,_=e[h][0]+(e[f][0]-e[h][0])*m,g=e[h][1]+(e[f][1]-e[h][1])*m,p=a[h]+(a[f]-a[h])*m;qo(t,_,p+.45,g,.9,.9,.5,Math.atan2(e[f][0]-e[h][0],e[f][1]-e[h][1]),s)}}}gate(t,e){const n=e.reduce((y,E)=>y+E[0],0)/e.length,s=e.reduce((y,E)=>y+E[1],0)/e.length;let o=0,r=0,a=0;for(const[y,E]of e)o+=(y-n)**2,r+=(E-s)**2,a+=(y-n)*(E-s);const c=.5*Math.atan2(2*a,o-r),l=Math.cos(c),h=Math.sin(c);let f=1/0,u=-1/0,d=1/0,m=-1/0;for(const[y,E]of e){const R=(y-n)*l+(E-s)*h,w=-(y-n)*h+(E-s)*l;f=Math.min(f,R),u=Math.max(u,R),d=Math.min(d,w),m=Math.max(m,w)}const _=this.ground(n,s),g=u-f,p=Math.max(4,m-d),x=Math.atan2(l,h),M=y=>[n+l*y,s+h*y],[v,A]=M((f+u)/2);qo(t,v,_+7.4,A,p,3.2,g,x,Qr);for(const y of[f+1.8,u-1.8]){const[E,R]=M(y);qo(t,E,_+2.9,R,p,5.8,3.6,x,Qr,6)}qo(t,v,_+9.4,A,p*.15,.9,g,x,Qr)}bridgeOfSighs(t){const e=this.route,n=this.ww,s=e.frame(t.s),o=n.levelAt(t.s),r=n.halfWidthAt(t.s),a=r+7.5,c=Math.max(...[-1,1].map(p=>{const[x,M]=e.point(t.s,a*p);return this.terrain.landHeight(x,M,t.s,a*p)}))+.1,l=a+1,h=r+3.6,f=c-.75,u=o+1.2,d=new ki;d.moveTo(-l,o-2),d.lineTo(-h,o-2),d.lineTo(-h,u);for(let p=1;p<20;p++){const x=Math.PI-Math.PI*p/20;d.lineTo(Math.cos(x)*h,u+Math.sin(x)*(f-u))}d.lineTo(h,u),d.lineTo(h,o-2),d.lineTo(l,o-2),d.lineTo(l,c),d.lineTo(-l,c),d.closePath();const m=2,_=new Z(new Ss(d,{depth:m,bevelEnabled:!1,curveSegments:12}).translate(0,0,-m/2),new te({color:"#a8654f",roughness:.9,flatShading:!0}));_.castShadow=_.receiveShadow=!0;const g=new Lt;return g.add(_),g.position.set(s.x,0,s.z),g.rotation.y=Math.atan2(-s.nz,s.nx),g.name="bridge-of-sighs",g}}function ix(i,t){const e=[],n=[];for(let s=0;s<i.length;s++){const o=i[Math.max(0,s-1)],r=i[Math.min(i.length-1,s+1)];let a=r[0]-o[0],c=r[1]-o[1];const l=Math.hypot(a,c)||1;a/=l,c/=l,e.push([i[s][0]-c*t,i[s][1]+a*t]),n.push([i[s][0]+c*t,i[s][1]-a*t])}return[...e,...n.reverse()]}function qo(i,t,e,n,s,o,r,a,c,l=0){const h=Math.sin(a),f=Math.cos(a),u=(M,v,A)=>new D(t+M*f+A*h,e+v,n-M*h+A*f),d=s/2,m=r/2,_=-o/2-l,g=o/2,p=[u(-d,_,-m),u(d,_,-m),u(d,_,m),u(-d,_,m),u(-d,g,-m),u(d,g,-m),u(d,g,m),u(-d,g,m)],x=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7]];for(const[M,v,A,y]of x)i.quad(p[M],p[v],p[A],p[y],c)}const sx=1.69,Se=(i,t={})=>new te({color:i,roughness:.6,flatShading:!0,...t}),ge=(i,t,e,n,s,o,r=0,a=0,c=0)=>{const l=new Z(t,e);return l.position.set(n,s,o),l.rotation.set(r,a,c),l.castShadow=!0,i.add(l),l},to={buckby:{name:"a Buckby can",at:[.35,-6],build(){const i=new Lt;ge(i,new ee(.17,.19,.5,12),Se("#1f4d3a"),0,.25,0),ge(i,new ee(.175,.185,.14,12),Se("#a3291f"),0,.27,0);for(let t=0;t<4;t++)ge(i,new Ve(.035,6,4),Se(t%2?"#f2c94c":"#f4f1e8"),Math.sin(t*1.6)*.18,.27,Math.cos(t*1.6)*.18);return ge(i,new ee(.1,.17,.08,12),Se("#1f4d3a"),0,.54,0),ge(i,new ee(.06,.06,.06,10),Se("#c9a24a",{metalness:.8,roughness:.3}),0,.6,0),ge(i,new un(.11,.015,6,12,Math.PI),Se("#1f4d3a"),0,.56,0),ge(i,new ee(.025,.035,.22,6),Se("#1f4d3a"),.17,.4,0,0,0,-.9),i}},bike:{name:"a bicycle",at:[-.15,2.4],build(){const i=new Lt,t=Se("#1b1b1b"),e=Se("#c0392b");for(const n of[-.5,.5])ge(i,new un(.3,.025,5,16),t,0,.04,n,Math.PI/2);return ge(i,new Xt(.04,.04,.95),e,0,.06,0),ge(i,new Xt(.04,.04,.5),e,.12,.06,.15,0,.5),ge(i,new Xt(.5,.03,.03),t,0,.07,.45),ge(i,new Xt(.1,.04,.2),t,0,.08,-.25),i}},lifebuoy:{name:"a lifebuoy",at:[-.4,-5.5],build(){const i=new Lt;for(let t=0;t<4;t++)ge(i,new un(.3,.075,6,6,Math.PI/2),Se(t%2?"#f4f4f0":"#e0522f"),0,.08,0,Math.PI/2,0,t*Math.PI/2);return i}},brasses:{name:"polished chimney brasses",at:[.45,3.7],build(){const i=new Lt,t=Se("#e2b84a",{metalness:.9,roughness:.2});for(const e of[.1,.32,.5])ge(i,new ee(.08,.08,.04,10),t,0,e,0);for(let e=0;e<5;e++)ge(i,new un(.03,.008,4,8),t,.06+e*.03,.42-e*.07,0,0,0,e%2?0:Math.PI/2);return i}},logs:{name:"a stack of firewood",at:[.3,-2.6],build(){const i=new Lt,t=Se("#6b4a2e"),e=Se("#c9a27a");let n=0;for(let s=0;s<3;s++)for(let o=0;o<4-s;o++,n++){const r=ge(i,new ee(.07,.07,.7,6),n%3?t:e,-.22+o*.15+s*.075,.07+s*.12,0,Math.PI/2);r.rotation.y=n%2*.05}return i}},coal:{name:"two sacks of coal",at:[.3,-1.3],build(){const i=new Lt;for(const t of[-.25,.25])ge(i,new Je(.22,1),Se("#3a3a3a",{roughness:.95}),0,.14,t).scale.set(1,.65,1.15);return i}},cat:{name:"a ship’s cat",at:[-.3,4.5],build(){const i=new Lt,t=Se("#d9822b");ge(i,new Ve(.16,10,8),t,0,.1,0).scale.set(1,.6,1.25),ge(i,new Ve(.09,10,8),t,.08,.13,.15);for(const e of[.03,.13])ge(i,new Ln(.03,.06,4),t,e,.22,.15);return ge(i,new un(.13,.025,5,10,Math.PI*1.2),t,0,.04,0,Math.PI/2,0,1),i}},gnome:{name:"a garden gnome",at:[.4,-4.9],build(){const i=new Lt;return ge(i,new ee(.09,.11,.2,8),Se("#2e86c1"),0,.1,0),ge(i,new Ve(.07,8,6),Se("#f1c6a5"),0,.26,0),ge(i,new Ln(.06,.12,6),Se("#f4f4f0"),0,.2,.05,.3),ge(i,new Ln(.075,.2,8),Se("#c0392b"),0,.4,0),i}},sunflower:{name:"a sunflower in a pot",at:[.4,1.4],build(){const i=new Lt;return ge(i,new ee(.15,.11,.22,8),Se("#9b5a3c"),0,.11,0),ge(i,new ee(.015,.02,.7,5),Se("#4f7a33"),0,.55,0),ge(i,new ee(.13,.13,.03,12),Se("#f2c94c"),0,.92,.02,1.2),ge(i,new ee(.06,.06,.04,10),Se("#5a3d22"),0,.92,.04,1.2),i}}},ox=["buckby","bike","lifebuoy","brasses"],rx=["cat","gnome","sunflower"];class ax{constructor(t){O(this,"owned",new Set);O(this,"meshes",new Map);this.boat=t;try{for(const e of JSON.parse(localStorage.getItem("canal.roof")??"[]"))e in to&&this.show(e)}catch{}}has(t){return this.owned.has(t)}give(t){if(this.owned.has(t))return!1;this.show(t);try{localStorage.setItem("canal.roof",JSON.stringify([...this.owned]))}catch{}return!0}nextFrom(t){return t.find(e=>!this.owned.has(e))??null}show(t){this.owned.add(t);const e=to[t],n=e.build();n.position.set(e.at[0],sx,e.at[1]),this.boat.add(n),this.meshes.set(t,n)}}const hs=i=>new te({color:i,roughness:.85,flatShading:!0});function au(i,t){const e=document.createElement("canvas");e.width=256,e.height=128;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,256,128),n.fillStyle="#f6efdd",n.font="800 34px Nunito, sans-serif",n.textAlign="center",n.textBaseline="middle",i.split(`
`).forEach((r,a,c)=>n.fillText(r,128,64+(a-(c.length-1)/2)*40,236));const s=new Cs(e);s.colorSpace=ze;const o=new Z(new jn(.8,.4),new te({map:s,side:Ie}));return o.position.y=1,o}function cx(){const i=new Lt,t=hs("#6b4a2e"),e=hs("#c9a27a");for(let r=0;r<4;r++)for(let a=0;a<6-r;a++){const c=new Z(new ee(.08,.08,.6,6),(a+r)%3?t:e);c.rotation.x=Math.PI/2,c.position.set(-.4+a*.17+r*.085,.08+r*.14,0),c.castShadow=!0,i.add(c)}const n=new Z(new Xt(.3,.3,.25),hs("#3d5a3d"));n.position.set(.85,.15,0),i.add(n);const s=au(`LOGS £5
honesty box`,"#3d5a3d");s.position.set(.85,.95,0);const o=new Z(new Xt(.06,.8,.06),hs("#5a4632"));return o.position.set(.85,.5,-.05),i.add(s,o),i}function lx(){const i=new Lt;for(let n=0;n<5;n++){const s=new Z(new Je(.24,1),hs("#3a3a3a"));s.scale.set(1,.7,1.2),s.position.set(-.5+n%3*.45,.16+Math.floor(n/3)*.3,0),s.castShadow=!0,i.add(s)}const t=au(`COAL
& kindling`,"#2b2b2b");t.position.set(.85,.95,0);const e=new Z(new Xt(.06,.8,.06),hs("#5a4632"));return e.position.set(.85,.5,-.05),i.add(t,e),i}class hx{constructor(t,e,n,s,o){O(this,"group",new Lt);O(this,"list",[]);for(const r of s){const a=r.item==="logs"?cx():lx(),c=t.frame(r.s),l=(e.halfWidthAt(r.s)+2.2)*fe;a.position.set(c.x+c.nx*l,n.bankTop(r.s),c.z+c.nz*l),a.rotation.y=Math.atan2(c.tx,c.tz)+Math.PI/2*fe,a.visible=!o(r.item),this.group.add(a),this.list.push({...r,group:a,verb:r.item==="logs"?"Load the logs (drop a fiver in the honesty box)":"Load a couple of sacks of coal",done:r.item==="logs"?"Logs loaded onto the roof. The stove will be roaring tonight.":"Two sacks of coal on the roof. Toasty."})}}near(t){return this.list.find(e=>e.group.visible&&Math.abs(e.s-t)<22)}}const ux=1.435,ph=650,dx=18,wi=20,is=3;class fx{constructor(t,e,n,s,o){O(this,"group",new Lt);O(this,"lines",[]);O(this,"cars",[]);O(this,"run",null);O(this,"nextRun",12);O(this,"time",0);O(this,"rumble",0);this.route=t,this.ww=e,this.terrain=n,this.bridges=s;const r=s.placed.find(p=>p.data.kind==="rail");if(!r)return;const a=[r.x,r.z],c=o.map(p=>{const x=[];for(let M=0;M<p.p.length;M+=2)x.push([p.p[M],p.p[M+1]]);return{pts:x,bridge:p.b===1}}),l=p=>Math.min(...p.pts.map(x=>Math.hypot(x[0]-a[0],x[1]-a[1]))),h=p=>`${p[0]},${p[1]}`,f=new Map;c.forEach((p,x)=>{for(const M of[p.pts[0],p.pts.at(-1)])f.set(h(M),[...f.get(h(M))??[],x])});const u=new Set,d=p=>{for(let x=0;x<200;x++){const M=p.at(-1),v=p.at(-2),A=M[0]-v[0],y=M[1]-v[1];let E=-1,R=.7,w=[];for(const S of f.get(h(M))??[]){if(u.has(S))continue;const P=c[S].pts,B=h(P[0])===h(M)?P:[...P].reverse(),U=B[1][0]-B[0][0],G=B[1][1]-B[0][1],$=(A*U+y*G)/(Math.hypot(A,y)*Math.hypot(U,G)||1);$>R&&(R=$,E=S,w=B)}if(E<0)return;u.add(E),p.push(...w.slice(1))}},m=c.map((p,x)=>({w:p,i:x})).filter(({w:p})=>p.bridge&&l(p)<30);for(const{w:p,i:x}of m){if(u.has(x))continue;u.add(x);const M=[...p.pts];d(M);const v=[...p.pts].reverse();d(v);const A=[...v.reverse().slice(0,-p.pts.length),...M];if(A.length<4)continue;const y=[A[0]];for(let R=1;R<A.length;R++){const[w,S]=A[R-1],[P,B]=A[R],U=Math.max(1,Math.ceil(Math.hypot(P-w,B-S)/4));for(let G=1;G<=U;G++)y.push([w+(P-w)*G/U,S+(B-S)*G/U])}const E=[0];for(let R=1;R<y.length;R++)E.push(E[R-1]+Math.hypot(y[R][0]-y[R-1][0],y[R][1]-y[R-1][1]));E.at(-1)<300||this.lines.push({pts:y,ys:this.gradedHeights(y,E,a),cum:E})}const _=new Set(u);this.buildTrack(this.lines.map(p=>({pts:p.pts,ys:p.ys}))),this.buildTrack(c.map((p,x)=>({w:p,i:x})).filter(({w:p,i:x})=>!_.has(x)&&l(p)<ph).map(({w:p})=>({pts:p.pts,ys:null}))),o.forEach((p,x)=>{(_.has(x)||l(c[x])<ph)&&(p.skip=!0)});const g=p=>{const x=pi(px(p)),M=new Z(x,Ci());M.castShadow=!0;const v=new Lt;return v.add(M),v.visible=!1,this.group.add(v),v};for(let p=0;p<is;p++)this.cars.push(g(p===0||p===is-1));this.cars[is-1].children[0].rotation.y=Math.PI}gradedHeights(t,e,n){const s=t.map(([l,h])=>this.trackY(l,h));let o=0;t.forEach((l,h)=>{Math.hypot(l[0]-n[0],l[1]-n[1])<Math.hypot(t[o][0]-n[0],t[o][1]-n[1])&&(o=h)});const r=s[o],a=s.map((l,h)=>{let f=0,u=0;for(let d=h;d>=0&&e[h]-e[d]<40;d--)f+=s[d],u++;for(let d=h+1;d<s.length&&e[d]-e[h]<40;d++)f+=s[d],u++;return f/u}),c=.02;return a.map((l,h)=>{const f=c*Math.abs(e[h]-e[o]);l=Math.min(r+f,Math.max(r-f,l));const u=this.route.project(t[h][0],t[h][1]),d=this.bridges.rampAt(u.s,u.d);return d.onDeck?Math.max(l,d.y+.25):l})}trackY(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s),o=n.dist<s+3.5?this.terrain.bankTop(n.s):this.terrain.landHeight(t,e,n.s,n.d);return Math.max(o,this.bridges.rampAt(n.s,n.d).y)+.25}buildTrack(t){const e=[],n=[],s=[],o=new wn,r=new D(0,1,0),a=new D(1,1,1);for(const{pts:d,ys:m}of t)for(let _=0;_+1<d.length;_++){const[g,p]=d[_],[x,M]=d[_+1],v=Math.hypot(x-g,M-p);if(v<.01)continue;const A=(x-g)/v,y=(M-p)/v,E=-y,R=A;o.setFromAxisAngle(r,Math.atan2(A,y));const w=Math.ceil(v/.7);let S=null;for(let P=0;P<=w;P++){const B=g+A*(v*P)/w,U=p+y*(v*P)/w,G=m?m[_]+(m[_+1]-m[_])*P/w:this.trackY(B,U);P<w&&e.push(new he().compose(new D(B,G-.12,U),o,a));const $=[B,G,U];if(S){for(const yt of[-1,1]){const Ut=ux/2*yt,Bt=[S[0]+E*Ut,S[1],S[2]+R*Ut],j=[$[0]+E*Ut,$[1],$[2]+R*Ut];n.push(Bt[0],Bt[1]-.1,Bt[2],j[0],j[1]-.1,j[2],j[0],j[1],j[2]),n.push(Bt[0],Bt[1]-.1,Bt[2],j[0],j[1],j[2],Bt[0],Bt[1],Bt[2])}const N=1.7,q=[S[0]-E*N,S[1]-.2,S[2]-R*N],W=[S[0]+E*N,S[1]-.2,S[2]+R*N],lt=[$[0]-E*N,$[1]-.2,$[2]-R*N],mt=[$[0]+E*N,$[1]-.2,$[2]+R*N];s.push(...q,...lt,...W,...W,...lt,...mt)}S=$}}const c=new Xt(2.5,.12,.24),l=new Pn(c,new te({color:"#5a4a3c",roughness:1}),e.length);e.forEach((d,m)=>l.setMatrixAt(m,d)),l.receiveShadow=!0,this.group.add(l);const h=new _e;h.setAttribute("position",new Kt(s,3)),h.computeVertexNormals();const f=new Z(h,new te({color:"#6d635a",roughness:1,side:Ie}));f.receiveShadow=!0,this.group.add(f);const u=new _e;u.setAttribute("position",new Kt(n,3)),u.computeVertexNormals(),this.group.add(new Z(u,new te({color:"#8d9196",metalness:.7,roughness:.35,side:Ie})))}at(t,e){const{pts:n,ys:s,cum:o}=t;e=Math.max(0,Math.min(o.at(-1),e));let r=1;for(;r<o.length-1&&o[r]<e;)r++;const a=(e-o[r-1])/(o[r]-o[r-1]||1);return[n[r-1][0]+(n[r][0]-n[r-1][0])*a,s[r-1]+(s[r]-s[r-1])*a,n[r-1][1]+(n[r][1]-n[r-1][1])*a]}update(t,e){if(this.time+=t,this.rumble=0,!this.lines.length)return;if(!this.run){for(const h of this.cars)h.visible=!1;if(this.time<this.nextRun)return;const c=Math.floor(Math.random()*this.lines.length),l=Math.random()<.5?1:-1;this.run={line:c,dir:l,dist:l>0?-10:this.lines[c].cum.at(-1)+wi*is+10}}const n=this.run,s=this.lines[n.line];n.dist+=n.dir*dx*t;const o=s.cum.at(-1);let r=1/0;this.cars.forEach((c,l)=>{const h=n.dist-n.dir*l*(wi+1),f=h-n.dir*wi,u=Math.max(h,f)>0&&Math.min(h,f)<o;if(c.visible=u,!u)return;const d=this.at(s,h),m=this.at(s,f),_=this.at(s,(h+f)/2);c.position.set(_[0],_[1],_[2]),c.rotation.set(0,Math.atan2(d[0]-m[0],d[2]-m[2]),0),c.rotateX(-Math.atan2(d[1]-m[1],wi)),r=Math.min(r,c.position.distanceTo(e))}),this.rumble=Math.max(0,1-r/350),(n.dir>0?n.dist-is*(wi+1)>o:n.dist+is*(wi+1)<0)&&(this.run=null,this.nextRun=this.time+50+Math.random()*50)}}function px(i){const t=new Lt,e=(o,r={})=>new te({color:o,...r}),n=(o,r,a,c,l,h,f)=>{const u=new Z(new Xt(o,r,a),e(c));return u.position.set(l,h,f),t.add(u),u},s=wi-.4;n(2.7,2.6,s,"#c8102e",0,2.25,0),n(2.72,.9,s*.98,"#3a3f45",0,2.5,0),n(2.74,.12,s*.98,"#f4f4f0",0,1.65,0),n(2.6,.25,s*.99,"#9aa0a6",0,3.6,0),n(2.5,.6,s*.9,"#2b2b2b",0,.75,0);for(const o of[-s/2+3,s/2-3]){n(2.2,.5,2.4,"#1b1b1b",0,.45,o);for(const r of[-.8,.8])for(const a of[-.75,.75]){const c=new Z(new ee(.42,.42,.12,10),e("#3a3a3a"));c.rotation.z=Math.PI/2,c.position.set(a,.42,o+r),t.add(c)}}for(let o=0;o<2;o++)n(.06,2,.9,"#2b2b2b",o?1.36:-1.36,2.1,-s/2+1.6);if(i){const o=new Z(new ee(1.35,1.35,2.6,8,1,!1,0,Math.PI),e("#c8102e"));o.rotation.set(Math.PI/2,0,Math.PI/2),o.scale.set(1,1,.5),o.position.set(0,2.25,s/2),t.add(o),n(2.2,1.2,.5,"#f2c200",0,1.4,s/2+.45),n(2,.7,.3,"#22282e",0,2.75,s/2+.45)}return t}const $s=[1,2,5,10,30],ta=80;function mx(i,t){return{pub:`You moor up and pop into ${i} for a pint of something local. An hour slips happily by.`,bar:`A drink at ${i}, watching the boats go by. An hour slips happily by.`,cafe:`Tea and a slab of cake at ${i}, eaten on the roof. An hour slips happily by.`,ice_cream:`An ice cream from ${i}, eaten on the roof. Bliss.`,restaurant:`A proper meal at ${i}. Nobody has to cook in the galley tonight. An hour slips happily by.`,hotel:`You stretch your legs and have a nose round ${i}. An hour slips happily by.`}[t]??`You stop at ${i}. An hour slips happily by.`}function gx(i,t){return{Northgate:"Above you: the Northgate, one of the medieval gateways through Chester’s city walls. The canal runs along the old moat.","Water Tower":"Off to the side: the Water Tower, built in the 1320s to guard the old river port when the Dee still reached the walls.","Lead Shot Tower":"That tall brick tower is the Lead Shot Tower (1799), where molten lead was dropped from the top to make shot.","Bridge of Sighs":"Overhead: the Bridge of Sighs (1793). Condemned prisoners from the Northgate gaol were led across it to the chapel for their last rites.","King Charles Tower":"Up on the walls: King Charles’ Tower. Legend has it Charles I watched his army lose the Battle of Rowton Moor from here in 1645.","Morgan's Mount":"Morgan’s Mount, a little gun platform on the walls from the Civil War siege of Chester.","Pemberton's Parlour":"Pemberton’s Parlour, a tower on the walls named after an 18th-century ropemaker who watched his men at work from it."}[i]??`Look out: ${i}${t==="tower"?", part of the old city walls":""}.`}const mh=['% rocks in your wash. "Tickover past moored boats, please!"',"A mug of tea slides off the roof of %. Slow down past moored boats!","The owner of % gives you a Look. Ease off to tickover when passing."],_x=1/60,ea=2.23694,cu=document.getElementById("loading"),lu=document.getElementById("loading-text"),vx=cu.querySelector(".bar div");let xx=0;async function ri(i){lu.textContent=i,vx.style.width=`${Math.min(100,++xx*11)}%`,await new Promise(t=>requestAnimationFrame(()=>setTimeout(t,0)))}async function Mx(){await ri("Fetching the map…");const i=await C_("./data/chester.json");await document.fonts.ready;const t=document.getElementById("scene"),e=new Eg({canvas:t,antialias:!0});e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setSize(innerWidth,innerHeight),e.toneMapping=xh,e.toneMappingExposure=.62,e.shadowMap.enabled=!0,e.shadowMap.type=_h;const n=new jh,s=new sn(55,innerWidth/innerHeight,.4,4500);await ri("Surveying the canal…");const o=new P_(i.centreline),r=new k_(i.locks,i.bridges,o.length,[4700,i.meta.towerWharfS-40]),a=[],c=[];for(let V=0;V<i.centreline.length;V+=2)a.push(i.centreline[V]),c.push(i.centreline[V+1]);const l=520,h={x0:Math.min(...a)-l,x1:Math.max(...a)+l,z0:Math.min(...c)-l,z1:Math.max(...c)+l},f=new G_(o,r,h);f.cuttings=i.cuttings??[],f.setRivers(i.rivers),f.urbanAt=K_(i.buildings,h);const u=i.parks.map(V=>{let ut=1/0,Mt=-1/0,Wt=1/0,re=-1/0;for(let ye=0;ye<V.p.length;ye+=2)ut=Math.min(ut,V.p[ye]),Mt=Math.max(Mt,V.p[ye]),Wt=Math.min(Wt,V.p[ye+1]),re=Math.max(re,V.p[ye+1]);return{ring:V.p,x0:ut,x1:Mt,z0:Wt,z1:re}});f.parkAt=(V,ut)=>u.some(Mt=>V>=Mt.x0&&V<=Mt.x1&&ut>=Mt.z0&&ut<=Mt.z1&&gc(V,ut,Mt.ring)),await ri("Digging the cut…"),n.add(f.buildStrip()),await ri("Shaping the land…"),n.add(f.buildFar()),await ri("Filling it with water…");const d=new $_(o,r);d.addRivers(i.rivers,f.riverLevel);for(const V of i.water){let ut=0,Mt=0;const Wt=V.p.length/2;for(let re=0;re<V.p.length;re+=2)ut+=V.p[re]/Wt,Mt+=V.p[re+1]/Wt;o.project(ut,Mt).dist<40||d.addPond(V.p,f.heightAt(ut,Mt)-.25)}n.add(d.group);const m=new q_(o,r,i.bridges,f);n.add(m.group),n.add(new nx(o,r,f,i).group);const _=new fx(o,r,f,m,i.rails);n.add(_.group);const g=new nv(o,r,f);n.add(g.group);const p=i.meta.towerWharfS+70,x=new Lv(o,r,f,i.bridges,i.meta.towerWharfS,p,i.pois??[]);n.add(x.group);const M=new J_(i,o,r,f,m);await M.build(ri),n.add(M.group),await ri("Lighting the stove…");const v=new sv(n,e),A=_c();A.group.rotation.order="YXZ",n.add(A.group);const y=new Mv(o,r);y.placeAt(p),y.obstacles=[...x.boats];const E=new Nv(o,r,f,y),R=new ax(A.group);n.add(E.group);const w=new kv(o,r,x,y);w.blockedAt=()=>G.filter(V=>V.active).map(V=>V.s),n.add(w.group);const S=new Hv(o,r,f,M,x,i.bridges);n.add(S.group);const P=new Xv(o,r,f,y,S.anglerSpots,S.gardens);n.add(P.group);let B=0;const U=new tx(o,r,f,y);n.add(U.group);const G=[],$=x.zones.find(V=>/Lock Keeper/.test(V.name)),N=[$?$.s1+30:1390,2185],q=V=>{for(let ut=0;ut<120;ut++){const Mt=V+(ut%2?1:-1)*Math.ceil(ut/2)*2;if(!(i.bridges.some(Wt=>Math.abs(Wt.s-Mt)<Wt.w/2+20)||r.gates.some(Wt=>Math.abs(Wt.s-Mt)<40))&&!x.zones.some(Wt=>Mt>Wt.s0-8&&Mt<Wt.s1+8)&&!x.boats.some(Wt=>Math.abs(Wt.s-Mt)<Wt.halfL+6)&&r.bodies[r.bodyIndexAt(Mt)].kind==="pound")return Mt}return V};for(const V of N){const ut=new Kv(o,r,f);ut.s=q(V),x.clearAround(ut.s,ta-10,y.obstacles),n.add(ut.group),G.push(ut)}const W=new hx(o,r,f,[{item:"logs",s:q(3620)},{item:"coal",s:q(i.meta.towerWharfS-150)}],V=>R.has(V));for(const V of W.list)x.clearAround(V.s,25,y.obstacles);n.add(W.group);const lt=["Sam","Priya","Dave","Margaret","Tom","Aisha","Bill","Fran","Gethin","Rosie"],mt=['"Any chance of a lift to %? My feet are killing me."',`"Going towards %? I'd love a ride, I've never been on a narrowboat."`,`"You couldn't drop me at %, could you? I'll work the locks!"`,`"Room for a little one? I'm meeting friends at %."`];let yt="trip",Ut=null,Bt=null;const j=new Set,ot=V=>V.name.split(",")[0],Tt=()=>{yt="trip",b.showOffer(`Trip ${ft.index+1}`,ft.current.title,ft.current.brief)},it=V=>{if(Bt||Ut||j.has(V.id)||b.offerOpen||ft.result||(j.add(V.id),Math.random()>.7))return;const ut=o.frame(y.s),Mt=Math.sin(y.psi)*ut.tx+Math.cos(y.psi)*ut.tz>=0?1:-1,Wt=H=>(H.s0+H.s1)/2,re=x.zones.filter(H=>H!==V&&Math.abs(Wt(H)-y.s)>250&&Math.abs(Wt(H)-y.s)<1800);if(!re.length)return;const ye=re.filter(H=>Math.sign(Wt(H)-y.s)===Mt),Pe=ye.length?ye:re,T=Pe.sort((H,X)=>Math.abs(Wt(H)-y.s)-Math.abs(Wt(X)-y.s))[Math.floor(Math.random()*Math.min(2,Pe.length))],F=lt[Math.floor(Math.random()*lt.length)];Ut={name:F,dest:T,from:V.name},setTimeout(()=>{if((Ut==null?void 0:Ut.name)!==F||!E.moored||b.offerOpen)return void(Ut=null);yt="lift",b.showOffer(`At ${V.name}`,`Fancy giving ${F} a lift?`,mt[Math.floor(Math.random()*mt.length)].replace("%",ot(T)),"Hop aboard","Sorry, not today")},1800)},At=()=>{if(!Ut)return;const V=Ps(Ui(Math.random));V.group.position.set(0,.38+.47,17.4/2-2.3),ja(V),A.group.add(V.group),Bt={name:Ut.name,dest:Ut.dest,person:V},b.toast(`${Bt.name} hops aboard and settles in the bow. Next stop: ${ot(Bt.dest)}.`,"info",4500),Ut=null},Vt=()=>{if(!Bt)return;A.group.remove(Bt.person.group);const V=R.nextFrom(rx);V&&R.give(V),b.toast(V?`${Bt.name} hops off with a cheery wave, and leaves you ${to[V].name} for the roof. 🎁`:`${Bt.name} hops off with a cheery wave, and presses a slice of cake into your hand.`,"info",6e3),Bt=null},Ft=()=>{for(const V of G){const ut=y.obstacles.indexOf(V.obstacle);ut>=0&&y.obstacles.splice(ut,1),V.place(V.s),y.obstacles.push(V.obstacle)}pt.setHazards(G.filter(V=>V.active).map(V=>o.point(V.s,0)))},Jt=x.zones.filter(V=>V.kind==="stop"),Q=(i.pois??[]).filter(V=>V.type==="sight"),ct=new Set,L=new Set,ft=new Ov(v.hour),st=V=>x.zones.find(ut=>ut.id===V);let wt=!1;const ht=new bv,Gt=new Tv;ht.onFirstInput=()=>Gt.start(),t.addEventListener("pointerdown",()=>Gt.start());const pt=new Ev(i,o,r,h);pt.addMooredBoats(x.boats),pt.setPlaces([...x.zones.filter(V=>V.kind==="stop").map(V=>{const[ut,Mt]=o.point((V.s0+V.s1)/2,0),Wt={pub:"🍺",bar:"🍸",cafe:"☕",restaurant:"🍽️",hotel:"🛏️",ice_cream:"🍦"}[V.poi.kind]??"⚓";return{x:ut,z:Mt,icon:Wt,name:V.name}}),...(i.pois??[]).filter(V=>V.type==="sight").map(V=>({x:V.x,z:V.z,icon:"★",name:V.name}))]);const C=()=>{const V=st(ft.current.zone),[ut,Mt]=o.point((V.s0+V.s1)/2,0);pt.setDestination(ut,Mt,V.name)};Ft();const b=new Sv(document.getElementById("hud"),V=>ht.push(V),pt.el,pt.bigEl);["localhost","127.0.0.1"].includes(location.hostname)&&pt.enableDevTeleport(()=>[y.x,y.z],(V,ut)=>{E.castOff(),U.stop();const Mt=o.frame(y.s),Wt=Math.sin(y.psi)*Mt.tx+Math.cos(y.psi)*Mt.tz>=0,re=Math.min(o.length-12,Math.max(12,o.project(V,ut).s));y.placeAt(re,Wt),y.notch=0,b.toast(`Moved to ${((re-i.meta.towerWharfS)/1e3).toFixed(2)} km from Tower Wharf`,"info",2e3)}),b.onNotch=V=>{U.active&&(U.stop(),b.toast("You take the tiller back.","info",2e3)),y.notch=V};const k=new g_(s,t);k.enableDamping=!0,k.minDistance=5,k.maxDistance=260,k.maxPolarAngle=1.48,k.enablePan=!1;let K=-10;const et=new ou,J=new nt;let Ct=null,gt=!1;const Rt=V=>{const ut=t.getBoundingClientRect();return J.set((V.clientX-ut.left)/ut.width*2-1,-((V.clientY-ut.top)/ut.height)*2+1),et.setFromCamera(J,s),et.intersectObject(A.tillerHit,!1).length>0};t.addEventListener("pointerdown",V=>{(Et==="steerer"||Rt(V))&&(Ct={x:V.clientX,id:V.pointerId},k.enabled=!1,t.setPointerCapture(V.pointerId),t.style.cursor="grabbing",U.active&&U.stop(),gt||(gt=!0,A.tillerHint.visible=!1))},{capture:!0}),t.addEventListener("pointermove",V=>{Ct&&V.pointerId===Ct.id?ht.touchSteer=ys.clamp(-(V.clientX-Ct.x)/120,-1,1):!Ct&&V.pointerType==="mouse"&&Et==="follow"&&(t.style.cursor=Rt(V)?"grab":"")});const oe=V=>{!Ct||V.pointerId!==Ct.id||(Ct=null,ht.touchSteer=0,t.style.cursor="",Et==="follow"&&(k.enabled=!0))};t.addEventListener("pointerup",oe),t.addEventListener("pointercancel",oe);let rt=0;k.addEventListener("start",()=>K=performance.now()/1e3);let Et="follow";const Nt=new D,qt=new D,Dt=new D,ae=V=>{const ut=r.levelAt(y.s);A.group.position.set(y.x,ut+Math.sin(V*1.3)*.015,y.z),A.group.rotation.set(Math.sin(V*.9)*.004,y.psi,ys.clamp(-y.r*y.u*.5,-.04,.04)),A.rudder.rotation.y=-y.rudder*.6,Nt.set(y.x,ut+1.6,y.z)};ae(0),qt.copy(Nt),k.target.copy(Nt),s.position.set(y.x-Math.sin(y.psi)*24,Nt.y+9,y.z-Math.cos(y.psi)*24),k.update();let Yt=2,Qt=null,I=null;const _t=V=>{var ut;return V?`${V.action}:${((ut=V.gate)==null?void 0:ut.label)??""}:${V.group.name}`:""};let Y=null;const tt=new Set;let xt=0,bt,jt=0,Me=!1,Ae=0;const de=()=>(I==null?void 0:I.adjacent)??[];let $e="",rn=0;const Ls=V=>{const[ut,Mt]=y.span();return ut<V.s+.3&&Mt>V.s-.3},ao=V=>{switch(V){case"throttleUp":U.active&&(U.stop(),b.toast("You take the tiller back.","info",2e3)),y.notch=Math.min(er,y.notch+1);break;case"throttleDown":y.notch=Math.max(tr,y.notch-1);break;case"neutral":y.notch=0;break;case"paddles":Qt&&r.togglePaddle(Qt);break;case"gates":if(Qt){const ut=r.toggleGate(Qt,Ls(Qt));ut&&b.toast(ut,"warn")}break;case"nextGate":{const ut=de();ut.length&&(Qt=ut[(ut.indexOf(Qt)+1)%ut.length],Y=_t(I));break}case"timeFaster":Yt=$s[Math.min($s.length-1,$s.indexOf(Yt)+1)];break;case"timeSlower":Yt=$s[Math.max(0,$s.indexOf(Yt)-1)];break;case"camera":Et==="follow"?(Dt.copy(s.position).sub(k.target),Et="steerer",k.enabled=!1,A.steerer.visible=!1):(Et="follow",k.enabled=!0,s.position.copy(k.target).add(Dt),A.steerer.visible=!0);break;case"map":pt.bigOpen=!pt.bigOpen,b.setMapOpen(pt.bigOpen);break;case"help":b.toggleHelp();break;case"mute":Gt.toggleMute();break;case"moor":{const ut=E.act();if(ut&&b.toast(ut,"info",3e3),E.moored){const Mt=x.zoneAt(y.s),Wt=st(ft.current.zone);if((Mt==null?void 0:Mt.kind)==="stop"&&!ct.has(Mt.id)&&(ct.add(Mt.id),b.toast(mx(Mt.poi.name,Mt.poi.kind),"info",7e3),v.hour=(v.hour+1)%24),Bt&&Mt===Bt.dest&&Vt(),(Mt==null?void 0:Mt.kind)==="stop"&&it(Mt),wt&&Mt===Wt&&!ft.result){const re=R.nextFrom(ox);re&&R.give(re),b.showSummary(ft.complete(v.hour),Mt.name,re?to[re].name:void 0),x.setActive(null),pt.clearDestination()}else(Mt==null?void 0:Mt.kind)!=="stop"&&b.toast(Mt?`Moored at ${Mt.name}.`:wt?`Moored up. Your trip ends at ${Wt.name}.`:"Moored up.","info",3500)}break}case"nextTrip":ft.result?(ft.next(v.hour),b.hideSummary(),wt=!1,Ft(),U.roster(),Tt()):b.offerOpen&&yt==="lift"?(b.hideOffer(),At()):b.offerOpen&&(b.hideOffer(),wt=!0,ft.startHour=v.hour,x.setActive(st(ft.current.zone)),C());break;case"declineTrip":b.offerOpen&&b.hideOffer(),yt==="lift"&&Ut&&(b.toast(`"No worries!" ${Ut.name} sets off up the towpath on foot.`,"info",3500),Ut=null);break;case"tripOffer":!wt&&!ft.result&&Tt();break;case"clear":{const ut=G.find(Wt=>Wt.active&&Math.abs(Wt.s-y.s)<ta),Mt=W.near(y.s);if(!ut&&Mt){E.moored?(R.give(Mt.item),Mt.group.visible=!1,b.toast(Mt.done,"info",4500)):b.toast("Moor up alongside first (F), then you can load it.","info",3e3);break}ut?E.moored?ut.startClearing()&&b.toast(Math.abs(ut.s-y.s)>25?"You walk up the towpath with the boat hook. Heave!":"Out with the boat hook. Heave!","info",2500):b.toast("Moor up first (F), then you can get at it with the boat hook.","info",3500):b.toast("There's nothing here to clear.","info",2e3);break}case"autopilot":U.active?(U.stop(),b.toast("You take the tiller back.","info",2500)):I&&U.isStaffed(I.group)?E.count?b.toast("Cast off first (F), then the volunteers can bring you through.","info",3500):(U.start(I.group),b.toast("The volunteers take over: sit back and enjoy it. (Throttle or steer to take the tiller back.)","info",5e3)):b.toast("No volunteers on duty here, so you'll have to work this one yourself.","info",3e3);break;case"headlight":Me=!Me,A.headlight.intensity=Me?40:0;break}},On=()=>{const V=r.bodies[r.bodyIndexAt(y.s)],ut=(y.s-i.meta.towerWharfS)/1e3,Mt=`${Math.abs(ut).toFixed(1)} km ${ut>=0?"above":"below"} Tower Wharf`;if(V.kind==="chamber")return[`In ${V.lockName}`,Mt];const Wt=r.gates.find(T=>T.s>y.s),re=[...r.gates].reverse().find(T=>T.s<y.s),ye=m.at(y.s),Pe=ye!=null&&ye.data.name?` · under ${ye.data.name}`:"";return Math.abs(y.s-i.meta.towerWharfS)<70?["Tower Wharf",`Junction with the Dee Branch${Pe}`]:Wt&&Wt.s-y.s<160?[`Approaching ${Wt.lockName}`,Mt+Pe]:re&&y.s-re.s<120?[`Leaving ${re.lockName}`,Mt+Pe]:Wt&&re?[`${re.lockName} → ${Wt.lockName}`,Mt+Pe]:[Wt?`Towards ${Wt.lockName}`:"Towards Christleton & Nantwich",Mt+Pe]},Ds=()=>{const V=k.target,ut=s.position,Mt=V.distanceTo(ut);for(let Wt=4;Wt<Mt;Wt+=1.5){const re=Wt/Mt,ye=V.x+(ut.x-V.x)*re,Pe=V.y+(ut.y-V.y)*re,T=V.z+(ut.z-V.z)*re,F=o.project(ye,T,y.s),H=m.rampAt(F.s,F.d);if(Pe<M.roofAt(ye,T)||Pe<f.heightAt(ye,T)+.5||H.onDeck&&Pe<H.y+1.2){s.position.lerpVectors(V,ut,Math.max(4,Wt-2)/Mt);return}}};b.toast("Welcome aboard the Chester Rose! W to get going, H for help.","info",6e3),Tt();const co=new f_;let Fn=0;addEventListener("resize",()=>{s.aspect=innerWidth/innerHeight,s.updateProjectionMatrix(),e.setSize(innerWidth,innerHeight)});const mi=()=>{var ce;const V=Math.min(co.getDelta(),.1);Fn+=V;for(const at of ht.drain())ao(at);const ut=V*Yt,Mt=Math.max(1,Math.ceil(ut/_x));for(let at=0;at<Mt;at++){r.update(ut/Mt),U.active||y.step(ut/Mt,ht.steer);for(const Pt of y.contacts)if(Pt.impulse>1500&&jt<=0)if(Gt.bump(Math.min(1,Pt.impulse/12e3)),jt=.4,G.some(pe=>pe.obstacle===Pt.obstacle))b.toast("It's jammed solid. Moor up nearby (F) and clear it with the boat hook (G).","warn",3500);else if(Pt.kind==="boat"&&!x.boats.includes(Pt.obstacle))w.bumped(Pt.obstacle),Pt.impulse>3e3&&ft.bumps++;else if(Pt.kind==="boat"){const pe=Pt.obstacle;x.rockBoat(pe,Math.min(.08,Pt.impulse/5e4)),Pt.impulse>3e3&&(ft.bumps++,b.toast(`Bump! Sorry, ${pe.name}. A head pops out of the hatch…`,"warn",3e3))}else Pt.impulse>9e3&&(ft.bumps++,b.toast(Pt.kind==="gate"?"Bump! Into the lock gates.":"Clunk. Mind the bank!","info",2200))}jt-=V;const Wt=o.frame(y.s),re=Math.sin(y.psi)*Wt.tx+Math.cos(y.psi)*Wt.tz>=0;I=Jl(r,y.span(),re);for(const at of r.events.splice(0))(!at.group||at.group===(I==null?void 0:I.group)||at.group.gates.some(pe=>Math.abs(pe.s-y.s)<150))&&b.toast(at.text,at.kind);if(U.active&&ht.steer!==0&&(U.stop(),b.toast("You take the tiller back.","info",2e3)),U.update(ut,I,re)==="done"&&(b.toast("Through! The volunteers wave you on your way. Thanks, volunteers!","info",4500),I=Jl(r,y.span(),re)),!U.active&&(I!=null&&I.keeper)&&I.gate&&I.action!=="wait"){const at=_t(I);if(at!==$e)$e=at,rn=Fn+1.5;else if(Fn>=rn){const Pt=I.gate;I.action==="paddlesUp"?Pt.wantPaddle=!0:I.action==="paddlesDown"?Pt.wantPaddle=!1:I.action==="close"?Pt.wantOpen=!1:I.action==="open"&&r.levelsMatch(Pt)&&(Pt.wantOpen=!0),$e=""}}const ye=de();Y!==null&&(Y!==_t(I)||!Qt||!ye.includes(Qt))&&(Y=null),Y===null&&(Qt=I!=null&&I.gate&&!I.keeper?I.gate:ye.includes(Qt)?Qt:ye.at(-1)??null),g.setSelected(Qt),b.setLockPanel(r,{gate:Qt,step:I,candidates:ye.length,boatSpans:Qt?Ls(Qt):!1,volunteers:U.active?"active":U.isStaffed(I==null?void 0:I.group)?"available":"none"});for(const at of r.gates)at.paddle<.05?tt.delete(at):Math.abs(at.s-y.s)>110&&!tt.has(at)&&(tt.add(at),b.toast(`You've left the paddles up at ${at.lockName}. The lock-keeper won't be pleased.`,"warn",6e3));xt=y.speed*ea>4.3?xt+ut:0,xt>6&&(b.toast("Steady on! The limit is 4 mph, and your wash is slapping the moored boats.","warn"),xt=-30),w.update(ut,re?1:-1);for(const at of w.events.splice(0)){const Pt=v.hour<12?"Morning":v.hour<18?"Afternoon":"Evening";at.kind==="greet"?b.toast(`"${Pt}!" The steerer of ${at.boat.name} gives you a wave.`,"info",3500):at.kind==="wrongSide"?b.toast(`Pass oncoming boats on the right (port to port). ${at.boat.name}'s steerer looks puzzled.`,"warn",4500):b.toast(`Bump! Sorry, ${at.boat.name}!`,"warn",3e3)}P.update(V),B-=V;for(const at of P.events.splice(0))at.kind==="quack"?(Gt.quack(),B<=0&&(b.toast("Quack! A mallard paddles off, deeply unimpressed.","info",2500),B=25)):(ft.rocked++,b.toast("An angler shakes a fist as your wash bobs their float. Ease off past the anglers!","warn",4e3));for(const at of Q)!L.has(at.name)&&Math.abs(at.s-y.s)<45&&(L.add(at.name),b.toast(gx(at.name,at.kind),"info",7e3));if(Ae-=V,y.speed*ea>2.8)for(const at of x.boats)Math.hypot(at.x-y.x,at.z-y.z)>at.halfL+10||x.now-at.rockedAt<10||(x.rockBoat(at,.05),ft.rocked++,Ae<=0&&(b.toast(mh[Math.floor(Math.random()*mh.length)].replace("%",at.name),"warn",3500),Ae=6));const Pe=(ce=m.at(y.s))==null?void 0:ce.data.name;if(Pe&&Pe!==bt&&b.toast(`Under ${Pe}`,"info",2200),bt=Pe,ae(Fn),A.tillerHint.visible){const at=.5+.5*Math.sin(Fn*3);A.tillerHint.material.opacity=.25+.45*at,A.tillerHint.scale.setScalar(1+.12*at)}if(d.update(V),g.update(V),x.update(V),_.update(V,s.position),Gt.rumble(_.rumble),E.update(r.levelAt(y.s)),v.update(ut/3600,Nt),v.sky.position.copy(s.position),Et==="follow"){const at=Nt.clone().sub(qt);if(at.length()>50?(k.target.copy(Nt),s.position.set(y.x-Math.sin(y.psi)*24,Nt.y+9,y.z-Math.cos(y.psi)*24),rt=0):(s.position.add(at),k.target.add(at)),rt>0){const Pt=s.position.clone().sub(k.target);s.position.copy(k.target).addScaledVector(Pt.normalize(),rt)}if(performance.now()/1e3-K>3&&Math.abs(y.u)>.25){const Pt=s.position.clone().sub(k.target),pe=Math.atan2(Pt.x,Pt.z);let Ot=y.psi+(y.u>0?Math.PI:0)-pe;Ot=Math.atan2(Math.sin(Ot),Math.cos(Ot));const fn=Ot*Math.min(1,V*.5);Pt.applyAxisAngle(new D(0,1,0),fn),s.position.copy(k.target).add(Pt)}k.update(),rt=s.position.distanceTo(k.target),Ds()}else{const at=Math.sin(y.psi),Pt=Math.cos(y.psi),pe=-Un/2+.9;s.position.set(y.x+at*pe,Nt.y+.75,y.z+Pt*pe),s.lookAt(y.x+at*40,Nt.y-.2,y.z+Pt*40)}qt.copy(Nt),m.updateOcclusion(s.position,Nt,V),b.setHelm({notch:y.notch,speedMph:y.speed*ea,timeScale:Yt});const[T,F]=On();b.setLocation(T,F,`Journal: ${ct.size}/${Jt.length} canalside stops · ${L.size}/${Q.length} sights`),pt.draw(y.x,y.z,y.psi);const H=st(ft.current.zone),X=(H.s0+H.s1)/2-y.s,z=y.s>H.s0-4&&y.s<H.s1+4,dt=Math.sign(X)===(re?1:-1)?"ahead":"behind you",St=H.name.split(",")[0],kt=z?`${St} · pull in and tie up (F)`:`${St} · ${(Math.abs(X)/1e3).toFixed(1)} km ${dt}`;if(b.setTrip({state:ft.result?"done":wt?"active":"none",n:ft.index+1,title:ft.current.title,brief:ft.current.brief,where:kt}),Bt){const at=Bt.dest,Pt=(at.s0+at.s1)/2-y.s,pe=y.s>at.s0-4&&y.s<at.s1+4;b.setLift(`${Bt.name} → ${ot(at)} · ${pe?"moor up (F)":`${(Math.abs(Pt)/1e3).toFixed(1)} km ${Math.sign(Pt)===(re?1:-1)?"ahead":"behind"}`}`)}else b.setLift(null);let It=null;for(const at of G){if(at.update(ut,Fn)){const pe=y.obstacles.indexOf(at.obstacle);pe>=0&&y.obstacles.splice(pe,1),ft.cleared++,pt.setHazards(G.filter(le=>le.active).map(le=>o.point(le.s,0))),b.toast("Cleared! A trolley, a bike, a traffic cone and an alarming amount of branches now sit in a heap on the towpath. Cast off (F) when you're ready.","info",7e3)}if(!at.active)continue;const Pt=Math.abs(at.s-y.s);!at.spotted&&Pt<90&&(at.spotted=!0,b.toast("Uh-oh: a shopping trolley, a bike and a raft of branches are jammed across the canal ahead. Moor up nearby (F) and clear it with the boat hook (G).","warn",8e3)),Pt<ta&&(!It||Pt<Math.abs(It.s-y.s))&&(It=at)}let $t=E.prompt();const Zt=It?void 0:W.near(y.s);Zt&&($t=E.moored?{key:"G",text:Zt.verb,ready:!0}:$t??{key:"F",text:`Moor up to load ${to[Zt.item].name}`,ready:!1}),It&&(E.moored?$t=It.clearing?{key:"G",text:`Clearing… ${Math.round(It.progress*100)}%`,ready:!1}:{key:"G",text:"Clear the blockage with the boat hook",ready:!0}:$t||($t={key:"F",text:"Moor up alongside the towpath to get at the blockage",ready:!1})),b.setPrompt($t);const zt=r.gates.reduce((at,Pt)=>at+(Math.abs(Pt.s-y.s)<120?Math.abs(Pt.flow):0),0);Gt.update(y.notch,zt,b.isWinding,!v.isNight),e.render(n,s),requestAnimationFrame(mi)};await ri("Casting off…"),cu.classList.add("done"),requestAnimationFrame(mi),Object.assign(window,{game:{scene:n,boat:y,ww:r,camera:s,route:o,renderer:e,moorings:x,trips:ft,traffic:w,decor:S,life:P,blockages:G,volunteers:U,lines:E,minimap:pt,roof:R,pickups:W,trains:_}})}Mx().catch(i=>{console.error(i),lu.textContent=`Something went wrong: ${i.message}`});
