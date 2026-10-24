var Kh=Object.defineProperty;var Jh=(i,t,e)=>t in i?Kh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var F=(i,t,e)=>Jh(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const La="170",Zi={ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qh=0,ic=1,tu=2,th=1,eh=2,Un=3,ni=0,ze=1,ke=2,ti=0,Ki=1,sc=2,oc=3,rc=4,eu=5,di=100,nu=101,iu=102,su=103,ou=104,ru=200,au=201,cu=202,lu=203,kr=204,zr=205,hu=206,uu=207,du=208,fu=209,pu=210,mu=211,gu=212,_u=213,vu=214,Br=0,Hr=1,Gr=2,ts=3,Vr=4,Wr=5,Xr=6,qr=7,nh=0,xu=1,Mu=2,ei=0,yu=1,bu=2,Su=3,ih=4,wu=5,Eu=6,Tu=7,sh=300,es=301,ns=302,Yr=303,$r=304,Vo=306,ko=1e3,pi=1001,jr=1002,Ze=1003,Au=1004,js=1005,vn=1006,Ko=1007,mi=1008,kn=1009,oh=1010,rh=1011,Os=1012,Da=1013,gi=1014,xn=1015,Vs=1016,Ia=1017,Ua=1018,is=1020,ah=35902,ch=1021,lh=1022,fn=1023,hh=1024,uh=1025,Ji=1026,ss=1027,Na=1028,Oa=1029,dh=1030,Fa=1031,ka=1033,Do=33776,Io=33777,Uo=33778,No=33779,Zr=35840,Kr=35841,Jr=35842,Qr=35843,ta=36196,ea=37492,na=37496,ia=37808,sa=37809,oa=37810,ra=37811,aa=37812,ca=37813,la=37814,ha=37815,ua=37816,da=37817,fa=37818,pa=37819,ma=37820,ga=37821,Oo=36492,_a=36494,va=36495,fh=36283,xa=36284,Ma=36285,ya=36286,Ru=3200,Cu=3201,ph=0,Pu=1,Kn="",Ie="srgb",hs="srgb-linear",Wo="linear",le="srgb",Ai=7680,ac=519,Lu=512,Du=513,Iu=514,mh=515,Uu=516,Nu=517,Ou=518,Fu=519,cc=35044,ba=35048,lc="300 es",Nn=2e3,zo=2001;class yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hc=1234567;const Ds=Math.PI/180,os=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function za(i,t){return(i%t+t)%t}function ku(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function zu(i,t,e){return i!==t?(e-i)/(t-i):0}function Is(i,t,e){return(1-e)*i+e*t}function Bu(i,t,e,n){return Is(i,t,1-Math.exp(-e*n))}function Hu(i,t=1){return t-Math.abs(za(i,t*2)-t)}function Gu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Vu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Wu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Xu(i,t){return i+Math.random()*(t-i)}function qu(i){return i*(.5-Math.random())}function Yu(i){i!==void 0&&(hc=i);let t=hc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $u(i){return i*Ds}function ju(i){return i*os}function Zu(i){return(i&i-1)===0&&i!==0}function Ku(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qu(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+n)/2),h=r((t+n)/2),f=o((t-n)/2),u=r((t-n)/2),d=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*h,c*f,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Fs={DEG2RAD:Ds,RAD2DEG:os,generateUUID:bi,clamp:Se,euclideanModulo:za,mapLinear:ku,inverseLerp:zu,lerp:Is,damp:Bu,pingpong:Hu,smoothstep:Gu,smootherstep:Vu,randInt:Wu,randFloat:Xu,randFloatSpread:qu,seededRandom:Yu,degToRad:$u,radToDeg:ju,isPowerOfTwo:Zu,ceilPowerOfTwo:Ku,floorPowerOfTwo:Ju,setQuaternionFromProperEuler:Qu,normalize:Oe,denormalize:Vi};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,s,o,r,a,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],x=s[1],M=s[4],v=s[7],b=s[2],E=s[5],A=s[8];return o[0]=r*_+a*x+c*b,o[3]=r*m+a*M+c*E,o[6]=r*p+a*v+c*A,o[1]=l*_+h*x+f*b,o[4]=l*m+h*M+f*E,o[7]=l*p+h*v+f*A,o[2]=u*_+d*x+g*b,o[5]=u*m+d*M+g*E,o[8]=u*p+d*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*r-a*l,u=a*c-h*o,d=l*o-r*c,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=u*_,t[4]=(h*e-s*c)*_,t[5]=(s*o-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Jo.makeScale(t,e)),this}rotate(t){return this.premultiply(Jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jo=new jt;function gh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function td(){const i=Bo("canvas");return i.style.display="block",i}const uc={};function Cs(i){i in uc||(uc[i]=!0,console.warn(i))}function ed(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function nd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function id(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(i.r=Fn(i.r),i.g=Fn(i.g),i.b=Fn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Kn?Wo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const dc=[.64,.33,.3,.6,.15,.06],fc=[.2126,.7152,.0722],pc=[.3127,.329],mc=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gc=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[hs]:{primaries:dc,whitePoint:pc,transfer:Wo,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:fc,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:dc,whitePoint:pc,transfer:le,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:fc,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});let Ri;class sd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ri===void 0&&(Ri=Bo("canvas")),Ri.width=t.width,Ri.height=t.height;const n=Ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Fn(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let od=0;class _h{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Qo(s[r].image)):o.push(Qo(s[r]))}else o=Qo(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rd=0;class Ue extends yi{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=pi,s=pi,o=vn,r=mi,a=fn,c=kn,l=Ue.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=bi(),this.name="",this.source=new _h(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ko:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case jr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ko:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case jr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=sh;Ue.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,v=(d+1)/2,b=(p+1)/2,E=(h+u)/4,A=(f+_)/4,C=(g+m)/4;return M>v&&M>b?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=E/n,o=A/n):v>b?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=E/s,o=C/s):b<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(b),n=A/o,s=C/o),this.set(n,s,o,e),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(u-h)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ad extends yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _h(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends ad{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vh extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cd extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3];const u=o[r+0],d=o[r+1],g=o[r+2],_=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==u||l!==d||h!==g){let m=1-a;const p=c*u+l*d+h*g+f*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const b=Math.sqrt(M),E=Math.atan2(b,p*x);m=Math.sin(m*E)/b,a=Math.sin(a*E)/b}const v=a*x;if(c=c*m+u*v,l=l*m+d*v,h=h*m+g*v,f=f*m+_*v,m===1-a){const b=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=b,l*=b,h*=b,f*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=o[r],u=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-a*d,t[e+2]=l*g+h*d+a*u-c*f,t[e+3]=h*g-a*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(o/2),u=c(n/2),d=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(o-l)*d,this._z=(r-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(o-l)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(r-s)/d,this._x=(o+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-s*a,this._w=r*h-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=r*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=o*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_c.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),h=2*(a*e-o*s),f=2*(o*n-r*e);return this.x=e+c*l+r*f-a*h,this.y=n+c*h+a*l-o*f,this.z=s+c*f+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tr.copy(this).projectOnVector(t),this.sub(tr)}reflect(t){return this.sub(tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tr=new D,_c=new yn;class Si{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,an):an.fromBufferAttribute(o,r),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(t.matrixWorld),this.union(Zs)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),Ks.subVectors(this.max,_s),Ci.subVectors(t.a,_s),Pi.subVectors(t.b,_s),Li.subVectors(t.c,_s),Gn.subVectors(Pi,Ci),Vn.subVectors(Li,Pi),si.subVectors(Ci,Li);let e=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-si.z,si.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,si.z,0,-si.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-si.y,si.x,0];return!er(e,Ci,Pi,Li,Ks)||(e=[1,0,0,0,1,0,0,0,1],!er(e,Ci,Pi,Li,Ks))?!1:(Js.crossVectors(Gn,Vn),e=[Js.x,Js.y,Js.z],er(e,Ci,Pi,Li,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Rn=[new D,new D,new D,new D,new D,new D,new D,new D],an=new D,Zs=new Si,Ci=new D,Pi=new D,Li=new D,Gn=new D,Vn=new D,si=new D,_s=new D,Ks=new D,Js=new D,oi=new D;function er(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){oi.fromArray(i,o);const a=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),c=t.dot(oi),l=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const ld=new Si,vs=new D,nr=new D;class us{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ld.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(nr)),this.expandByPoint(vs.copy(t.center).sub(nr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new D,ir=new D,Qs=new D,Wn=new D,sr=new D,to=new D,or=new D;class Xo{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ir.copy(t).add(e).multiplyScalar(.5),Qs.copy(e).sub(t).normalize(),Wn.copy(this.origin).sub(ir);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Qs),a=Wn.dot(this.direction),c=-Wn.dot(Qs),l=Wn.lengthSq(),h=Math.abs(1-r*r);let f,u,d,g;if(h>0)if(f=r*c-a,u=r*a-c,g=o*h,f>=0)if(u>=-g)if(u<=g){const _=1/h;f*=_,u*=_,d=f*(f+r*u+2*a)+u*(r*f+u+2*c)+l}else u=o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*c)+l;else u=-o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-r*o+a)),u=f>0?-o:Math.min(Math.max(-o,-c),o),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-o,-c),o),d=u*(u+2*c)+l):(f=Math.max(0,-(r*o+a)),u=f>0?o:Math.min(Math.max(-o,-c),o),d=-f*f+u*(u+2*c)+l);else u=r>0?-o:o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ir).addScaledVector(Qs,u),d}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);const n=Cn.dot(this.direction),s=Cn.dot(Cn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,n,s,o){sr.subVectors(e,t),to.subVectors(n,t),or.crossVectors(sr,to);let r=this.direction.dot(or),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Wn.subVectors(this.origin,t);const c=a*this.direction.dot(to.crossVectors(Wn,to));if(c<0)return null;const l=a*this.direction.dot(sr.cross(Wn));if(l<0||c+l>r)return null;const h=-a*Wn.dot(or);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,s,o,r,a,c,l,h,f,u,d,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,h,f,u,d,g,_,m)}set(t,e,n,s,o,r,a,c,l,h,f,u,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),o=1/Di.setFromMatrixColumn(t,1).length(),r=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const u=r*h,d=r*f,g=a*h,_=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=g+d*l,e[10]=r*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,g=l*h,_=l*f;e[0]=u+_*a,e[4]=g*a-d,e[8]=r*l,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=d*a-g,e[6]=_+u*a,e[10]=r*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,g=l*h,_=l*f;e[0]=u-_*a,e[4]=-r*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*h,e[9]=_-u*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const u=r*h,d=r*f,g=a*h,_=a*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+_,e[1]=c*f,e[5]=_*l+u,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const u=r*c,d=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-u*f,e[8]=g*f+d,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-_*f}else if(t.order==="XZY"){const u=r*c,d=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+_,e[5]=r*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hd,t,ud)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Xn.crossVectors(n,qe),Xn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Xn.crossVectors(n,qe)),Xn.normalize(),eo.crossVectors(qe,Xn),s[0]=Xn.x,s[4]=eo.x,s[8]=qe.x,s[1]=Xn.y,s[5]=eo.y,s[9]=qe.y,s[2]=Xn.z,s[6]=eo.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],M=n[7],v=n[11],b=n[15],E=s[0],A=s[4],C=s[8],S=s[12],y=s[1],P=s[5],k=s[9],B=s[13],q=s[2],j=s[6],U=s[10],Y=s[14],z=s[3],ut=s[7],mt=s[11],Mt=s[15];return o[0]=r*E+a*y+c*q+l*z,o[4]=r*A+a*P+c*j+l*ut,o[8]=r*C+a*k+c*U+l*mt,o[12]=r*S+a*B+c*Y+l*Mt,o[1]=h*E+f*y+u*q+d*z,o[5]=h*A+f*P+u*j+d*ut,o[9]=h*C+f*k+u*U+d*mt,o[13]=h*S+f*B+u*Y+d*Mt,o[2]=g*E+_*y+m*q+p*z,o[6]=g*A+_*P+m*j+p*ut,o[10]=g*C+_*k+m*U+p*mt,o[14]=g*S+_*B+m*Y+p*Mt,o[3]=x*E+M*y+v*q+b*z,o[7]=x*A+M*P+v*j+b*ut,o[11]=x*C+M*k+v*U+b*mt,o[15]=x*S+M*B+v*Y+b*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+o*c*f-s*l*f-o*a*u+n*l*u+s*a*d-n*c*d)+_*(+e*c*d-e*l*u+o*r*u-s*r*d+s*l*h-o*c*h)+m*(+e*l*f-e*a*d-o*r*f+n*r*d+o*a*h-n*l*h)+p*(-s*a*h-e*c*f+e*a*u+s*r*f-n*r*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=f*m*l-_*u*l+_*c*d-a*m*d-f*c*p+a*u*p,M=g*u*l-h*m*l-g*c*d+r*m*d+h*c*p-r*u*p,v=h*_*l-g*f*l+g*a*d-r*_*d-h*a*p+r*f*p,b=g*f*c-h*_*c-g*a*u+r*_*u+h*a*m-r*f*m,E=e*x+n*M+s*v+o*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=x*A,t[1]=(_*u*o-f*m*o-_*s*d+n*m*d+f*s*p-n*u*p)*A,t[2]=(a*m*o-_*c*o+_*s*l-n*m*l-a*s*p+n*c*p)*A,t[3]=(f*c*o-a*u*o-f*s*l+n*u*l+a*s*d-n*c*d)*A,t[4]=M*A,t[5]=(h*m*o-g*u*o+g*s*d-e*m*d-h*s*p+e*u*p)*A,t[6]=(g*c*o-r*m*o-g*s*l+e*m*l+r*s*p-e*c*p)*A,t[7]=(r*u*o-h*c*o+h*s*l-e*u*l-r*s*d+e*c*d)*A,t[8]=v*A,t[9]=(g*f*o-h*_*o-g*n*d+e*_*d+h*n*p-e*f*p)*A,t[10]=(r*_*o-g*a*o+g*n*l-e*_*l-r*n*p+e*a*p)*A,t[11]=(h*a*o-r*f*o-h*n*l+e*f*l+r*n*d-e*a*d)*A,t[12]=b*A,t[13]=(h*_*s-g*f*s+g*n*u-e*_*u-h*n*m+e*f*m)*A,t[14]=(g*a*s-r*_*s-g*n*c+e*_*c+r*n*m-e*a*m)*A,t[15]=(r*f*s-h*a*s+h*n*c-e*f*c-r*n*u+e*a*u)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,f=a+a,u=o*l,d=o*h,g=o*f,_=r*h,m=r*f,p=a*f,x=c*l,M=c*h,v=c*f,b=n.x,E=n.y,A=n.z;return s[0]=(1-(_+p))*b,s[1]=(d+v)*b,s[2]=(g-M)*b,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(u+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+M)*A,s[9]=(m-x)*A,s[10]=(1-(u+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Di.set(s[0],s[1],s[2]).length();const r=Di.set(s[4],s[5],s[6]).length(),a=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);const l=1/o,h=1/r,f=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,e.setFromRotationMatrix(cn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Nn){const c=this.elements,l=2*o/(e-t),h=2*o/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let d,g;if(a===Nn)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===zo)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Nn){const c=this.elements,l=1/(e-t),h=1/(n-s),f=1/(r-o),u=(e+t)*l,d=(n+s)*h;let g,_;if(a===Nn)g=(r+o)*f,_=-2*f;else if(a===zo)g=o*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new D,cn=new ie,hd=new D(0,0,0),ud=new D(1,1,1),Xn=new D,eo=new D,qe=new D,vc=new ie,xc=new yn;class bn{constructor(t=0,e=0,n=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Se(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xc.setFromEuler(this),this.setFromQuaternion(xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Ba{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dd=0;const Mc=new D,Ii=new yn,Pn=new ie,no=new D,xs=new D,fd=new D,pd=new yn,yc=new D(1,0,0),bc=new D(0,1,0),Sc=new D(0,0,1),wc={type:"added"},md={type:"removed"},Ui={type:"childadded",child:null},rr={type:"childremoved",child:null};class ye extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new D,e=new bn,n=new yn,s=new D(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new jt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(yc,t)}rotateY(t){return this.rotateOnAxis(bc,t)}rotateZ(t){return this.rotateOnAxis(Sc,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yc,t)}translateY(t){return this.translateOnAxis(bc,t)}translateZ(t){return this.translateOnAxis(Sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?no.copy(t):no.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(xs,no,this.up):Pn.lookAt(no,xs,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wc),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(md),rr.child=t,this.dispatchEvent(rr),rr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wc),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ye.DEFAULT_UP=new D(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new D,Ln=new D,ar=new D,Dn=new D,Ni=new D,Oi=new D,Ec=new D,cr=new D,lr=new D,hr=new D,ur=new ve,dr=new ve,fr=new ve;class un{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){ln.subVectors(s,e),Ln.subVectors(n,e),ar.subVectors(t,e);const r=ln.dot(ln),a=ln.dot(Ln),c=ln.dot(ar),l=Ln.dot(Ln),h=Ln.dot(ar),f=r*l-a*a;if(f===0)return o.set(0,0,0),null;const u=1/f,d=(l*c-a*h)*u,g=(r*h-a*c)*u;return o.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Dn.x),c.addScaledVector(r,Dn.y),c.addScaledVector(a,Dn.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return ur.setScalar(0),dr.setScalar(0),fr.setScalar(0),ur.fromBufferAttribute(t,e),dr.fromBufferAttribute(t,n),fr.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(ur,o.x),r.addScaledVector(dr,o.y),r.addScaledVector(fr,o.z),r}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),Ln.subVectors(t,e),ln.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),ln.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return un.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Ni.subVectors(s,n),Oi.subVectors(o,n),cr.subVectors(t,n);const c=Ni.dot(cr),l=Oi.dot(cr);if(c<=0&&l<=0)return e.copy(n);lr.subVectors(t,s);const h=Ni.dot(lr),f=Oi.dot(lr);if(h>=0&&f<=h)return e.copy(s);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Ni,r);hr.subVectors(t,o);const d=Ni.dot(hr),g=Oi.dot(hr);if(g>=0&&d<=g)return e.copy(o);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Oi,a);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Ec.subVectors(o,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(Ec,a);const p=1/(m+_+u);return r=_*p,a=u*p,e.copy(n).addScaledVector(Ni,r).addScaledVector(Oi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},io={h:0,s:0,l:0};function pr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=za(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=pr(r,o,t+1/3),this.g=pr(r,o,t),this.b=pr(r,o,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=xh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ne.fromWorkingColorSpace(De.copy(this),t),Math.round(Se(De.r*255,0,255))*65536+Math.round(Se(De.g*255,0,255))*256+Math.round(Se(De.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(De.copy(this),e);const n=De.r,s=De.g,o=De.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const f=r-a;switch(l=h<=.5?f/(r+a):f/(2-r-a),r){case n:c=(s-o)/f+(s<o?6:0);break;case s:c=(o-n)/f+2;break;case o:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Ie){ne.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,s=De.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(io);const n=Is(qn.h,io.h,e),s=Is(qn.s,io.s,e),o=Is(qn.l,io.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Ot;Ot.NAMES=xh;let gd=0;class ds extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=bi(),this.name="",this.blending=Ki,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kr,this.blendDst=zr,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kr&&(n.blendSrc=this.blendSrc),this.blendDst!==zr&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ks extends ds{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new D,so=new st;class Ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cc,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)so.fromBufferAttribute(this,e),so.applyMatrix3(t),this.setXY(e,so.x,so.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),o=Oe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cc&&(t.usage=this.usage),t}}class Mh extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yh extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xt extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _d=0;const Qe=new ie,mr=new ye,Fi=new D,Ye=new Si,Ms=new Si,Ae=new D;class de extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gh(t)?yh:Mh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new jt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return mr.lookAt(t),mr.updateMatrix(),this.applyMatrix4(mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Ye.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Ye.min,Ms.min),Ye.expandByPoint(Ae),Ae.addVectors(Ye.max,Ms.max),Ye.expandByPoint(Ae)):(Ye.expandByPoint(Ms.min),Ye.expandByPoint(Ms.max))}Ye.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Ae.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ae.fromBufferAttribute(a,l),c&&(Fi.fromBufferAttribute(t,l),Ae.add(Fi)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new D,c[C]=new D;const l=new D,h=new D,f=new D,u=new st,d=new st,g=new st,_=new D,m=new D;function p(C,S,y){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,y),u.fromBufferAttribute(o,C),d.fromBufferAttribute(o,S),g.fromBufferAttribute(o,y),h.sub(l),f.sub(l),d.sub(u),g.sub(u);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(_),a[S].add(_),a[y].add(_),c[C].add(m),c[S].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,S=x.length;C<S;++C){const y=x[C],P=y.start,k=y.count;for(let B=P,q=P+k;B<q;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const M=new D,v=new D,b=new D,E=new D;function A(C){b.fromBufferAttribute(s,C),E.copy(b);const S=a[C];M.copy(S),M.sub(b.multiplyScalar(b.dot(S))).normalize(),v.crossVectors(E,S);const P=v.dot(c[C])<0?-1:1;r.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,S=x.length;C<S;++C){const y=x[C],P=y.start,k=y.count;for(let B=P,q=P+k;B<q;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new D,o=new D,r=new D,a=new D,c=new D,l=new D,h=new D,f=new D;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new Ne(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new de,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],f=o[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tc=new ie,ri=new Xo,oo=new us,Ac=new D,ro=new D,ao=new D,co=new D,gr=new D,lo=new D,Rc=new D,ho=new D;class et extends ye{constructor(t=new de,e=new ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){lo.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],f=o[c];h!==0&&(gr.fromBufferAttribute(f,t),r?lo.addScaledVector(gr,h):lo.addScaledVector(gr.sub(e),h))}e.add(lo)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(o),ri.copy(t.ray).recast(t.near),!(oo.containsPoint(ri.origin)===!1&&(ri.intersectSphere(oo,Ac)===null||ri.origin.distanceToSquared(Ac)>(t.far-t.near)**2))&&(Tc.copy(o).invert(),ri.copy(t.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,u=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=r[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,b=M;v<b;v+=3){const E=a.getX(v),A=a.getX(v+1),C=a.getX(v+2);s=uo(this,p,t,n,l,h,f,E,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=uo(this,r,t,n,l,h,f,x,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=r[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,b=M;v<b;v+=3){const E=v,A=v+1,C=v+2;s=uo(this,p,t,n,l,h,f,E,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=m,M=m+1,v=m+2;s=uo(this,r,t,n,l,h,f,x,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function vd(i,t,e,n,s,o,r,a){let c;if(t.side===ze?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===ni,a),c===null)return null;ho.copy(a),ho.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ho);return l<e.near||l>e.far?null:{distance:l,point:ho.clone(),object:i}}function uo(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,ro),i.getVertexPosition(c,ao),i.getVertexPosition(l,co);const h=vd(i,t,e,n,ro,ao,co,Rc);if(h){const f=new D;un.getBarycoord(Rc,ro,ao,co,f),s&&(h.uv=un.getInterpolatedAttribute(s,a,c,l,f,new st)),o&&(h.uv1=un.getInterpolatedAttribute(o,a,c,l,f,new st)),r&&(h.normal=un.getInterpolatedAttribute(r,a,c,l,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new D,materialIndex:0};un.getNormal(ro,ao,co,u.normal),h.face=u,h.barycoord=f}return h}class qt extends de{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(f,2));function g(_,m,p,x,M,v,b,E,A,C,S){const y=v/A,P=b/C,k=v/2,B=b/2,q=E/2,j=A+1,U=C+1;let Y=0,z=0;const ut=new D;for(let mt=0;mt<U;mt++){const Mt=mt*P-B;for(let Nt=0;Nt<j;Nt++){const Qt=Nt*y-k;ut[_]=Qt*x,ut[m]=Mt*M,ut[p]=q,l.push(ut.x,ut.y,ut.z),ut[_]=0,ut[m]=0,ut[p]=E>0?1:-1,h.push(ut.x,ut.y,ut.z),f.push(Nt/A),f.push(1-mt/C),Y+=1}}for(let mt=0;mt<C;mt++)for(let Mt=0;Mt<A;Mt++){const Nt=u+Mt+j*mt,Qt=u+Mt+j*(mt+1),H=u+(Mt+1)+j*(mt+1),Z=u+(Mt+1)+j*mt;c.push(Nt,Qt,Z),c.push(Qt,H,Z),z+=6}a.addGroup(d,z,S),d+=z,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=rs(i[e]);for(const s in n)t[s]=n[s]}return t}function xd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Sh={clone:rs,merge:Fe};var Md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends ds{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Md,this.fragmentShader=yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=xd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wh extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new D,Cc=new st,Pc=new st;class je extends wh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return os*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Pc),e.subVectors(Pc,Cc)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,zi=1;class bd extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new je(ki,zi,t,e);s.layers=this.layers,this.add(s);const o=new je(ki,zi,t,e);o.layers=this.layers,this.add(o);const r=new je(ki,zi,t,e);r.layers=this.layers,this.add(r);const a=new je(ki,zi,t,e);a.layers=this.layers,this.add(a);const c=new je(ki,zi,t,e);c.layers=this.layers,this.add(c);const l=new je(ki,zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eh extends Ue{constructor(t,e,n,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:es,super(t,e,n,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sd extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Eh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qt(5,5,5),o=new zn({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:ti});o.uniforms.tEquirect.value=e;const r=new et(s,o),a=e.minFilter;return e.minFilter===mi&&(e.minFilter=vn),new bd(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const _r=new D,wd=new D,Ed=new jt;class Zn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=_r.subVectors(n,e).cross(wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_r),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ed.getNormalMatrix(t),s=this.coplanarPoint(_r).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new us,fo=new D;class Ha{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,o=new Zn,r=new Zn){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],u=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],M=s[14],v=s[15];if(n[0].setComponents(c-o,u-l,m-d,v-p).normalize(),n[1].setComponents(c+o,u+l,m+d,v+p).normalize(),n[2].setComponents(c+r,u+h,m+g,v+x).normalize(),n[3].setComponents(c-r,u-h,m-g,v-x).normalize(),n[4].setComponents(c-a,u-f,m-_,v-M).normalize(),e===Nn)n[5].setComponents(c+a,u+f,m+_,v+M).normalize();else if(e===zo)n[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(fo.x=s.normal.x>0?t.max.x:t.min.x,fo.y=s.normal.y>0?t.max.y:t.min.y,fo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Th(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Td(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class ii extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=t/a,u=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*u-r;for(let M=0;M<l;M++){const v=M*f-o;g.push(v,-x,0),_.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const M=x+l*p,v=x+l*(p+1),b=x+1+l*(p+1),E=x+1+l*p;d.push(M,v,E),d.push(v,b,E)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rd=`#ifdef USE_ALPHAHASH
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
#endif`,Cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
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
#endif`,Ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nd=`#ifdef USE_BATCHING
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
#endif`,Od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
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
#endif`,Hd=`#ifdef USE_BUMPMAP
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zd=`#define PI 3.141592653589793
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
} // validated`,Kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jd=`vec3 transformedNormal = objectNormal;
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
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rf=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mf=`#ifdef USE_GRADIENTMAP
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
}`,gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xf=`uniform bool receiveShadow;
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
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ef=`PhysicalMaterial material;
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
#endif`,Tf=`struct PhysicalMaterial {
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
}`,Af=`
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
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ff=`#if defined( USE_POINTS_UV )
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
#endif`,kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vf=`#ifdef USE_MORPHTARGETS
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
#endif`,Wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zf=`#ifdef USE_NORMALMAP
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
#endif`,Kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,np=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dp=`float getShadowMask() {
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
}`,fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,_p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yp=`#ifdef USE_TRANSMISSION
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
#endif`,bp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rp=`uniform sampler2D t2D;
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`#include <common>
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
}`,Up=`#if DEPTH_PACKING == 3200
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
}`,Np=`#define DISTANCE
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
}`,Op=`#define DISTANCE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`uniform float scale;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,Hp=`#include <common>
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Vp=`#define LAMBERT
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
}`,Wp=`#define LAMBERT
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
}`,Xp=`#define MATCAP
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
}`,qp=`#define MATCAP
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
}`,Yp=`#define NORMAL
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
}`,$p=`#define NORMAL
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
}`,jp=`#define PHONG
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
}`,Zp=`#define PHONG
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
}`,Kp=`#define STANDARD
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
}`,Jp=`#define STANDARD
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
}`,Qp=`#define TOON
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
}`,tm=`#define TOON
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
}`,em=`uniform float size;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,sm=`uniform vec3 color;
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
}`,om=`uniform float rotation;
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
}`,rm=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Ad,alphahash_pars_fragment:Rd,alphamap_fragment:Cd,alphamap_pars_fragment:Pd,alphatest_fragment:Ld,alphatest_pars_fragment:Dd,aomap_fragment:Id,aomap_pars_fragment:Ud,batching_pars_vertex:Nd,batching_vertex:Od,begin_vertex:Fd,beginnormal_vertex:kd,bsdfs:zd,iridescence_fragment:Bd,bumpmap_pars_fragment:Hd,clipping_planes_fragment:Gd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:Wd,clipping_planes_vertex:Xd,color_fragment:qd,color_pars_fragment:Yd,color_pars_vertex:$d,color_vertex:jd,common:Zd,cube_uv_reflection_fragment:Kd,defaultnormal_vertex:Jd,displacementmap_pars_vertex:Qd,displacementmap_vertex:tf,emissivemap_fragment:ef,emissivemap_pars_fragment:nf,colorspace_fragment:sf,colorspace_pars_fragment:of,envmap_fragment:rf,envmap_common_pars_fragment:af,envmap_pars_fragment:cf,envmap_pars_vertex:lf,envmap_physical_pars_fragment:Mf,envmap_vertex:hf,fog_vertex:uf,fog_pars_vertex:df,fog_fragment:ff,fog_pars_fragment:pf,gradientmap_pars_fragment:mf,lightmap_pars_fragment:gf,lights_lambert_fragment:_f,lights_lambert_pars_fragment:vf,lights_pars_begin:xf,lights_toon_fragment:yf,lights_toon_pars_fragment:bf,lights_phong_fragment:Sf,lights_phong_pars_fragment:wf,lights_physical_fragment:Ef,lights_physical_pars_fragment:Tf,lights_fragment_begin:Af,lights_fragment_maps:Rf,lights_fragment_end:Cf,logdepthbuf_fragment:Pf,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:Df,logdepthbuf_vertex:If,map_fragment:Uf,map_pars_fragment:Nf,map_particle_fragment:Of,map_particle_pars_fragment:Ff,metalnessmap_fragment:kf,metalnessmap_pars_fragment:zf,morphinstance_vertex:Bf,morphcolor_vertex:Hf,morphnormal_vertex:Gf,morphtarget_pars_vertex:Vf,morphtarget_vertex:Wf,normal_fragment_begin:Xf,normal_fragment_maps:qf,normal_pars_fragment:Yf,normal_pars_vertex:$f,normal_vertex:jf,normalmap_pars_fragment:Zf,clearcoat_normal_fragment_begin:Kf,clearcoat_normal_fragment_maps:Jf,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:tp,opaque_fragment:ep,packing:np,premultiplied_alpha_fragment:ip,project_vertex:sp,dithering_fragment:op,dithering_pars_fragment:rp,roughnessmap_fragment:ap,roughnessmap_pars_fragment:cp,shadowmap_pars_fragment:lp,shadowmap_pars_vertex:hp,shadowmap_vertex:up,shadowmask_pars_fragment:dp,skinbase_vertex:fp,skinning_pars_vertex:pp,skinning_vertex:mp,skinnormal_vertex:gp,specularmap_fragment:_p,specularmap_pars_fragment:vp,tonemapping_fragment:xp,tonemapping_pars_fragment:Mp,transmission_fragment:yp,transmission_pars_fragment:bp,uv_pars_fragment:Sp,uv_pars_vertex:wp,uv_vertex:Ep,worldpos_vertex:Tp,background_vert:Ap,background_frag:Rp,backgroundCube_vert:Cp,backgroundCube_frag:Pp,cube_vert:Lp,cube_frag:Dp,depth_vert:Ip,depth_frag:Up,distanceRGBA_vert:Np,distanceRGBA_frag:Op,equirect_vert:Fp,equirect_frag:kp,linedashed_vert:zp,linedashed_frag:Bp,meshbasic_vert:Hp,meshbasic_frag:Gp,meshlambert_vert:Vp,meshlambert_frag:Wp,meshmatcap_vert:Xp,meshmatcap_frag:qp,meshnormal_vert:Yp,meshnormal_frag:$p,meshphong_vert:jp,meshphong_frag:Zp,meshphysical_vert:Kp,meshphysical_frag:Jp,meshtoon_vert:Qp,meshtoon_frag:tm,points_vert:em,points_frag:nm,shadow_vert:im,shadow_frag:sm,sprite_vert:om,sprite_frag:rm},xt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},_n={basic:{uniforms:Fe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Fe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Fe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Fe([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Fe([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Fe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Fe([xt.points,xt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Fe([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Fe([xt.common,xt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Fe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Fe([xt.sprite,xt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Fe([xt.common,xt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Fe([xt.lights,xt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};_n.physical={uniforms:Fe([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const po={r:0,b:0,g:0},ci=new bn,am=new ie;function cm(i,t,e,n,s,o,r){const a=new Ot(0);let c=o===!0?0:1,l,h,f=null,u=0,d=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function _(x){let M=!1;const v=g(x);v===null?p(a,c):v&&v.isColor&&(p(v,1),M=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===Vo)?(h===void 0&&(h=new et(new qt(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:rs(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ci.copy(M.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(am.makeRotationFromEuler(ci)),h.material.toneMapped=ne.getTransfer(v.colorSpace)!==le,(f!==v||u!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,u=v.version,d=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new et(new ii(2,2),new zn({name:"BackgroundMaterial",uniforms:rs(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ne.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,M){x.getRGB(po,bh(i)),n.buffers.color.setClear(po.r,po.g,po.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:_,addToRenderList:m}}function lm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let o=s,r=!1;function a(y,P,k,B,q){let j=!1;const U=f(B,k,P);o!==U&&(o=U,l(o.object)),j=d(y,B,k,q),j&&g(y,B,k,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,v(y,P,k,B),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function f(y,P,k){const B=k.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let j=q[P.id];j===void 0&&(j={},q[P.id]=j);let U=j[B];return U===void 0&&(U=u(c()),j[B]=U),U}function u(y){const P=[],k=[],B=[];for(let q=0;q<e;q++)P[q]=0,k[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:B,object:y,attributes:{},index:null}}function d(y,P,k,B){const q=o.attributes,j=P.attributes;let U=0;const Y=k.getAttributes();for(const z in Y)if(Y[z].location>=0){const mt=q[z];let Mt=j[z];if(Mt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(Mt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(Mt=y.instanceColor)),mt===void 0||mt.attribute!==Mt||Mt&&mt.data!==Mt.data)return!0;U++}return o.attributesNum!==U||o.index!==B}function g(y,P,k,B){const q={},j=P.attributes;let U=0;const Y=k.getAttributes();for(const z in Y)if(Y[z].location>=0){let mt=j[z];mt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor));const Mt={};Mt.attribute=mt,mt&&mt.data&&(Mt.data=mt.data),q[z]=Mt,U++}o.attributes=q,o.attributesNum=U,o.index=B}function _(){const y=o.newAttributes;for(let P=0,k=y.length;P<k;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const k=o.newAttributes,B=o.enabledAttributes,q=o.attributeDivisors;k[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),q[y]!==P&&(i.vertexAttribDivisor(y,P),q[y]=P)}function x(){const y=o.newAttributes,P=o.enabledAttributes;for(let k=0,B=P.length;k<B;k++)P[k]!==y[k]&&(i.disableVertexAttribArray(k),P[k]=0)}function M(y,P,k,B,q,j,U){U===!0?i.vertexAttribIPointer(y,P,k,q,j):i.vertexAttribPointer(y,P,k,B,q,j)}function v(y,P,k,B){_();const q=B.attributes,j=k.getAttributes(),U=P.defaultAttributeValues;for(const Y in j){const z=j[Y];if(z.location>=0){let ut=q[Y];if(ut===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),ut!==void 0){const mt=ut.normalized,Mt=ut.itemSize,Nt=t.get(ut);if(Nt===void 0)continue;const Qt=Nt.buffer,H=Nt.type,Z=Nt.bytesPerElement,_t=H===i.INT||H===i.UNSIGNED_INT||ut.gpuType===Da;if(ut.isInterleavedBufferAttribute){const at=ut.data,Rt=at.stride,Ct=ut.offset;if(at.isInstancedInterleavedBuffer){for(let kt=0;kt<z.locationSize;kt++)p(z.location+kt,at.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let kt=0;kt<z.locationSize;kt++)m(z.location+kt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let kt=0;kt<z.locationSize;kt++)M(z.location+kt,Mt/z.locationSize,H,mt,Rt*Z,(Ct+Mt/z.locationSize*kt)*Z,_t)}else{if(ut.isInstancedBufferAttribute){for(let at=0;at<z.locationSize;at++)p(z.location+at,ut.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let at=0;at<z.locationSize;at++)m(z.location+at);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let at=0;at<z.locationSize;at++)M(z.location+at,Mt/z.locationSize,H,mt,Mt*Z,Mt/z.locationSize*at*Z,_t)}}else if(U!==void 0){const mt=U[Y];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(z.location,mt);break;case 3:i.vertexAttrib3fv(z.location,mt);break;case 4:i.vertexAttrib4fv(z.location,mt);break;default:i.vertexAttrib1fv(z.location,mt)}}}}x()}function b(){C();for(const y in n){const P=n[y];for(const k in P){const B=P[k];for(const q in B)h(B[q].object),delete B[q];delete P[k]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const k in P){const B=P[k];for(const q in B)h(B[q].object),delete B[q];delete P[k]}delete n[y.id]}function A(y){for(const P in n){const k=n[P];if(k[y.id]===void 0)continue;const B=k[y.id];for(const q in B)h(B[q].object),delete B[q];delete k[y.id]}}function C(){S(),r=!0,o!==s&&(o=s,l(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function hm(i,t,e){let n;function s(l){n=l}function o(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function a(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,n,1)}function c(l,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)r(l[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function um(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==fn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Vs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==xn&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:b,maxSamples:E}}function dm(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Zn,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||o&&!m)o?h(null):l();else{const x=o?0:n,M=x*4;let v=p.clippingState||null;c.value=v,v=h(g,u,M,d);for(let b=0;b!==M;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=d;M!==_;++M,v+=4)r.copy(f[M]).applyMatrix4(x,a),r.normal.toArray(m,v),m[v+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function fm(i){let t=new WeakMap;function e(r,a){return a===Yr?r.mapping=es:a===$r&&(r.mapping=ns),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Yr||a===$r)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Sd(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Ah extends wh{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yi=4,Lc=[.125,.215,.35,.446,.526,.582],fi=20,vr=new Ah,Dc=new Ot;let xr=null,Mr=0,yr=0,br=!1;const ui=(1+Math.sqrt(5))/2,Bi=1/ui,Ic=[new D(-ui,Bi,0),new D(ui,Bi,0),new D(-Bi,0,ui),new D(Bi,0,ui),new D(0,ui,-Bi),new D(0,ui,Bi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Sa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){xr=this._renderer.getRenderTarget(),Mr=this._renderer.getActiveCubeFace(),yr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xr,Mr,yr),this._renderer.xr.enabled=br,t.scissorTest=!1,mo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xr=this._renderer.getRenderTarget(),Mr=this._renderer.getActiveCubeFace(),yr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Vs,format:fn,colorSpace:hs,depthBuffer:!1},s=Uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pm(o)),this._blurMaterial=mm(o,t,e)}return s}_compileMaterial(t){const e=new et(this._lodPlanes[0],t);this._renderer.compile(e,vr)}_sceneToCubeUV(t,e,n,s){const a=new je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Dc),h.toneMapping=ei,h.autoClear=!1;const d=new ks({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new et(new qt,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Dc),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;mo(s,x*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===es||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new et(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;mo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,vr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Ic[(s-o-1)%Ic.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new et(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*fi-1),_=o/g,m=isFinite(o)?1+Math.floor(h*_):fi;m>fi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const p=[];let x=0;for(let A=0;A<fi;++A){const C=A/_,S=Math.exp(-C*C/2);p.push(S),A===0?x+=S:A<m&&(x+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const v=this._sizeLods[s],b=3*v*(s>M-Yi?s-M+Yi:0),E=4*(this._cubeSize-v);mo(e,b,E,3*v,2*v),c.setRenderTarget(e),c.render(f,vr)}}function pm(i){const t=[],e=[],n=[];let s=i;const o=i-Yi+1+Lc.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-Yi?c=Lc[r-i+Yi-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*d),M=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,C=E>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];x.set(S,_*g*E),M.set(u,m*g*E);const y=[E,E,E,E,E,E];v.set(y,p*g*E)}const b=new de;b.setAttribute("position",new Ne(x,_)),b.setAttribute("uv",new Ne(M,m)),b.setAttribute("faceIndex",new Ne(v,p)),t.push(b),s>Yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uc(i,t,e){const n=new _i(i,t,e);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function mm(i,t,e){const n=new Float32Array(fi),s=new D(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Nc(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Oc(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ga(){return`

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
	`}function gm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Yr||c===$r,h=c===es||c===ns;if(l||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Sa(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Sa(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function _m(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vm(i,t,e,n){const s={},o=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",r),delete s[u.id];const d=o.get(u);d&&(t.remove(d),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(f){const u=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let M=0,v=x.length;M<v;M+=3){const b=x[M+0],E=x[M+1],A=x[M+2];u.push(b,E,E,A,A,b)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const b=M+0,E=M+1,A=M+2;u.push(b,E,E,A,A,b)}}else return;const m=new(gh(u)?yh:Mh)(u,1);m.version=_;const p=o.get(f);p&&t.remove(p),o.set(f,m)}function h(f){const u=o.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return o.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function xm(i,t,e){let n;function s(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function c(u,d){i.drawElements(n,d,o,u*r),e.update(d,n,1)}function l(u,d,g){g!==0&&(i.drawElementsInstanced(n,d,o,u*r,g),e.update(d,n,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function f(u,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/r,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,o,u,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*_[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Mm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ym(i,t,e){const n=new WeakMap,s=new ve;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let y=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let b=a.attributes.position.count*v,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const A=new Float32Array(b*E*4*f),C=new vh(A,b,E,f);C.type=xn,C.needsUpdate=!0;const S=v*4;for(let P=0;P<f;P++){const k=p[P],B=x[P],q=M[P],j=b*E*4*P;for(let U=0;U<k.count;U++){const Y=U*S;g===!0&&(s.fromBufferAttribute(k,U),A[j+Y+0]=s.x,A[j+Y+1]=s.y,A[j+Y+2]=s.z,A[j+Y+3]=0),_===!0&&(s.fromBufferAttribute(B,U),A[j+Y+4]=s.x,A[j+Y+5]=s.y,A[j+Y+6]=s.z,A[j+Y+7]=0),m===!0&&(s.fromBufferAttribute(q,U),A[j+Y+8]=s.x,A[j+Y+9]=s.y,A[j+Y+10]=s.z,A[j+Y+11]=q.itemSize===4?s.w:1)}}u={count:f,texture:C,size:new st(b,E)},n.set(a,u),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:o}}function bm(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Rh extends Ue{constructor(t,e,n,s,o,r,a,c,l,h=Ji){if(h!==Ji&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ji&&(n=gi),n===void 0&&h===ss&&(n=is),super(null,s,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ze,this.minFilter=c!==void 0?c:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ch=new Ue,Fc=new Rh(1,1),Ph=new vh,Lh=new cd,Dh=new Eh,kc=[],zc=[],Bc=new Float32Array(16),Hc=new Float32Array(9),Gc=new Float32Array(4);function fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=kc[s];if(o===void 0&&(o=new Float32Array(s),kc[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qo(i,t){let e=zc[t];e===void 0&&(e=new Int32Array(t),zc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Sm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function Am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;Gc.set(n),i.uniformMatrix2fv(this.addr,!1,Gc),Ee(e,n)}}function Rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;Hc.set(n),i.uniformMatrix3fv(this.addr,!1,Hc),Ee(e,n)}}function Cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;Bc.set(n),i.uniformMatrix4fv(this.addr,!1,Bc),Ee(e,n)}}function Pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function Um(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Fc.compareFunction=mh,o=Fc):o=Ch,e.setTexture2D(t||o,s)}function zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Lh,s)}function Bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Dh,s)}function Hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ph,s)}function Gm(i){switch(i){case 5126:return Sm;case 35664:return wm;case 35665:return Em;case 35666:return Tm;case 35674:return Am;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Lm;case 35668:case 35672:return Dm;case 35669:case 35673:return Im;case 5125:return Um;case 36294:return Nm;case 36295:return Om;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return Hm}}function Vm(i,t){i.uniform1fv(this.addr,t)}function Wm(i,t){const e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function Xm(i,t){const e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function qm(i,t){const e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function Ym(i,t){const e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $m(i,t){const e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jm(i,t){const e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zm(i,t){i.uniform1iv(this.addr,t)}function Km(i,t){i.uniform2iv(this.addr,t)}function Jm(i,t){i.uniform3iv(this.addr,t)}function Qm(i,t){i.uniform4iv(this.addr,t)}function t0(i,t){i.uniform1uiv(this.addr,t)}function e0(i,t){i.uniform2uiv(this.addr,t)}function n0(i,t){i.uniform3uiv(this.addr,t)}function i0(i,t){i.uniform4uiv(this.addr,t)}function s0(i,t,e){const n=this.cache,s=t.length,o=qo(e,s);we(n,o)||(i.uniform1iv(this.addr,o),Ee(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Ch,o[r])}function o0(i,t,e){const n=this.cache,s=t.length,o=qo(e,s);we(n,o)||(i.uniform1iv(this.addr,o),Ee(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Lh,o[r])}function r0(i,t,e){const n=this.cache,s=t.length,o=qo(e,s);we(n,o)||(i.uniform1iv(this.addr,o),Ee(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Dh,o[r])}function a0(i,t,e){const n=this.cache,s=t.length,o=qo(e,s);we(n,o)||(i.uniform1iv(this.addr,o),Ee(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Ph,o[r])}function c0(i){switch(i){case 5126:return Vm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return $m;case 35676:return jm;case 5124:case 35670:return Zm;case 35667:case 35671:return Km;case 35668:case 35672:return Jm;case 35669:case 35673:return Qm;case 5125:return t0;case 36294:return e0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return a0}}class l0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gm(e.type)}}class h0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=c0(e.type)}}class u0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function Vc(i,t){i.seq.push(t),i.map[t.id]=t}function d0(i,t,e){const n=i.name,s=n.length;for(Sr.lastIndex=0;;){const o=Sr.exec(n),r=Sr.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Vc(e,l===void 0?new l0(a,i,t):new h0(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new u0(a),Vc(e,f)),e=f}}}class Fo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);d0(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Wc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const f0=37297;let p0=0;function m0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Xc=new jt;function g0(i){ne._getMatrix(Xc,ne.workingColorSpace,i);const t=`mat3( ${Xc.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Wo:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+m0(i.getShaderSource(t),r)}else return s}function _0(i,t){const e=g0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function v0(i,t){let e;switch(t){case yu:e="Linear";break;case bu:e="Reinhard";break;case Su:e="Cineon";break;case ih:e="ACESFilmic";break;case Eu:e="AgX";break;case Tu:e="Neutral";break;case wu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const go=new D;function x0(){ne.getLuminanceCoefficients(go);const i=go.x.toFixed(4),t=go.y.toFixed(4),e=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function y0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function b0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Ps(i){return i!==""}function Yc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const S0=/^[ \t]*#include +<([\w\d./]+)>/gm;function wa(i){return i.replace(S0,E0)}const w0=new Map;function E0(i,t){let e=Kt[t];if(e===void 0){const n=w0.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wa(e)}const T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(i){return i.replace(T0,A0)}function A0(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Zc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function R0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===th?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function C0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ns:t="ENVMAP_TYPE_CUBE";break;case Vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function P0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function L0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nh:t="ENVMAP_BLENDING_MULTIPLY";break;case xu:t="ENVMAP_BLENDING_MIX";break;case Mu:t="ENVMAP_BLENDING_ADD";break}return t}function D0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function I0(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=R0(e),l=C0(e),h=P0(e),f=L0(e),u=D0(e),d=M0(e),g=y0(o),_=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ps).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ps).join(`
`),p.length>0&&(p+=`
`)):(m=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),p=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Kt.tonemapping_pars_fragment:"",e.toneMapping!==ei?v0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,_0("linearToOutputTexel",e.outputColorSpace),x0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),r=wa(r),r=Yc(r,e),r=$c(r,e),a=wa(a),a=Yc(a,e),a=$c(a,e),r=jc(r),a=jc(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+r,v=x+p+a,b=Wc(s,s.VERTEX_SHADER,M),E=Wc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,b),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(b).trim(),q=s.getShaderInfoLog(E).trim();let j=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,E);else{const Y=qc(s,b,"vertex"),z=qc(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+Y+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||q==="")&&(U=!1);U&&(P.diagnostics={runnable:j,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(b),s.deleteShader(E),C=new Fo(s,_),S=b0(s,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,f0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=p0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=E,this}let U0=0;class N0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new O0(t),e.set(t,n)),n}}class O0{constructor(t){this.id=U0++,this.code=t,this.usedTimes=0}}function F0(i,t,e,n,s,o,r){const a=new Ba,c=new N0,l=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,k,B){const q=k.fog,j=B.geometry,U=S.isMeshStandardMaterial?k.environment:null,Y=(S.isMeshStandardMaterial?e:t).get(S.envMap||U),z=Y&&Y.mapping===Vo?Y.image.height:null,ut=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const mt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Mt=mt!==void 0?mt.length:0;let Nt=0;j.morphAttributes.position!==void 0&&(Nt=1),j.morphAttributes.normal!==void 0&&(Nt=2),j.morphAttributes.color!==void 0&&(Nt=3);let Qt,H,Z,_t;if(ut){const oe=_n[ut];Qt=oe.vertexShader,H=oe.fragmentShader}else Qt=S.vertexShader,H=S.fragmentShader,c.update(S),Z=c.getVertexShaderID(S),_t=c.getFragmentShaderID(S);const at=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),Ct=B.isInstancedMesh===!0,kt=B.isBatchedMesh===!0,te=!!S.map,nt=!!S.matcap,ct=!!Y,L=!!S.aoMap,lt=!!S.lightMap,ot=!!S.bumpMap,St=!!S.normalMap,pt=!!S.displacementMap,Bt=!!S.emissiveMap,Et=!!S.metalnessMap,R=!!S.roughnessMap,w=S.anisotropy>0,G=S.clearcoat>0,J=S.dispersion>0,it=S.iridescence>0,Q=S.sheen>0,Lt=S.transmission>0,vt=w&&!!S.anisotropyMap,At=G&&!!S.clearcoatMap,Jt=G&&!!S.clearcoatNormalMap,ht=G&&!!S.clearcoatRoughnessMap,Tt=it&&!!S.iridescenceMap,Gt=it&&!!S.iridescenceThicknessMap,$=Q&&!!S.sheenColorMap,K=Q&&!!S.sheenRoughnessMap,dt=!!S.specularMap,bt=!!S.specularColorMap,zt=!!S.specularIntensityMap,I=Lt&&!!S.transmissionMap,rt=Lt&&!!S.thicknessMap,V=!!S.gradientMap,tt=!!S.alphaMap,gt=S.alphaTest>0,yt=!!S.alphaHash,Wt=!!S.extensions;let ge=ei;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ge=i.toneMapping);const Te={shaderID:ut,shaderType:S.type,shaderName:S.name,vertexShader:Qt,fragmentShader:H,defines:S.defines,customVertexShaderID:Z,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:kt,batchingColor:kt&&B._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&B.instanceColor!==null,instancingMorph:Ct&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:hs,alphaToCoverage:!!S.alphaToCoverage,map:te,matcap:nt,envMap:ct,envMapMode:ct&&Y.mapping,envMapCubeUVHeight:z,aoMap:L,lightMap:lt,bumpMap:ot,normalMap:St,displacementMap:u&&pt,emissiveMap:Bt,normalMapObjectSpace:St&&S.normalMapType===Pu,normalMapTangentSpace:St&&S.normalMapType===ph,metalnessMap:Et,roughnessMap:R,anisotropy:w,anisotropyMap:vt,clearcoat:G,clearcoatMap:At,clearcoatNormalMap:Jt,clearcoatRoughnessMap:ht,dispersion:J,iridescence:it,iridescenceMap:Tt,iridescenceThicknessMap:Gt,sheen:Q,sheenColorMap:$,sheenRoughnessMap:K,specularMap:dt,specularColorMap:bt,specularIntensityMap:zt,transmission:Lt,transmissionMap:I,thicknessMap:rt,gradientMap:V,opaque:S.transparent===!1&&S.blending===Ki&&S.alphaToCoverage===!1,alphaMap:tt,alphaTest:gt,alphaHash:yt,combine:S.combine,mapUv:te&&_(S.map.channel),aoMapUv:L&&_(S.aoMap.channel),lightMapUv:lt&&_(S.lightMap.channel),bumpMapUv:ot&&_(S.bumpMap.channel),normalMapUv:St&&_(S.normalMap.channel),displacementMapUv:pt&&_(S.displacementMap.channel),emissiveMapUv:Bt&&_(S.emissiveMap.channel),metalnessMapUv:Et&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:vt&&_(S.anisotropyMap.channel),clearcoatMapUv:At&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:$&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:K&&_(S.sheenRoughnessMap.channel),specularMapUv:dt&&_(S.specularMap.channel),specularColorMapUv:bt&&_(S.specularColorMap.channel),specularIntensityMapUv:zt&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:rt&&_(S.thicknessMap.channel),alphaMapUv:tt&&_(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(St||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(te||tt),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Rt,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Nt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:te&&S.map.isVideoTexture===!0&&ne.getTransfer(S.map.colorSpace)===le,decodeVideoTextureEmissive:Bt&&S.emissiveMap.isVideoTexture===!0&&ne.getTransfer(S.emissiveMap.colorSpace)===le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ke,flipSided:S.side===ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Wt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&S.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(y,S),M(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function x(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const y=g[S.type];let P;if(y){const k=_n[y];P=Sh.clone(k.uniforms)}else P=S.uniforms;return P}function b(S,y){let P;for(let k=0,B=h.length;k<B;k++){const q=h[k];if(q.cacheKey===y){P=q,++P.usedTimes;break}}return P===void 0&&(P=new I0(i,y,S,o),h.push(P)),P}function E(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function A(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:C}}function k0(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function z0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Kc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jc(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(f,u,d,g,_,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,u,d,g,_,m){const p=r(f,u,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(f,u,d,g,_,m){const p=r(f,u,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(f,u){e.length>1&&e.sort(f||z0),n.length>1&&n.sort(u||Kc),s.length>1&&s.sort(u||Kc)}function h(){for(let f=t,u=i.length;f<u;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function B0(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Jc,i.set(n,[r])):s>=o.length?(r=new Jc,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function H0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ot};break;case"SpotLight":e={position:new D,direction:new D,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function G0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let V0=0;function W0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function X0(i){const t=new H0,e=G0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,o=new ie,r=new ie;function a(l){let h=0,f=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,x=0,M=0,v=0,b=0,E=0,A=0;l.sort(W0);for(let S=0,y=l.length;S<y;S++){const P=l[S],k=P.color,B=P.intensity,q=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*B,f+=k.g*B,u+=k.b*B;else if(P.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(P.sh.coefficients[U],B);A++}else if(P.isDirectionalLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,z=e.get(P);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=P.shadow.matrix,x++}n.directional[d]=U,d++}else if(P.isSpotLight){const U=t.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(k).multiplyScalar(B),U.distance=q,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,n.spot[_]=U;const Y=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,Y.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const z=e.get(P);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=j,v++}_++}else if(P.isRectAreaLight){const U=t.get(P);U.color.copy(k).multiplyScalar(B),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=U,m++}else if(P.isPointLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){const Y=P.shadow,z=e.get(P);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=U,g++}else if(P.isHemisphereLight){const U=t.get(P);U.skyColor.copy(P.color).multiplyScalar(B),U.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=U,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==b||C.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=b,C.numLightProbes=A,n.version=V0++)}function c(l,h){let f=0,u=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const M=l[p];if(M.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),r.identity(),o.copy(M.matrixWorld),o.premultiply(m),r.extractRotation(o),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Qc(i){const t=new X0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function q0(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Qc(i),t.set(s,[a])):o>=r.length?(a=new Qc(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Y0 extends ds{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $0 extends ds{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const j0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
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
}`;function K0(i,t,e){let n=new Ha;const s=new st,o=new st,r=new ve,a=new Y0({depthPacking:Cu}),c=new $0,l={},h=e.maxTextureSize,f={[ni]:ze,[ze]:ni,[ke]:ke},u=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:j0,fragmentShader:Z0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new de;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new et(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=th;let p=this.type;this.render=function(E,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ti),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=p!==Un&&this.type===Un,q=p===Un&&this.type!==Un;for(let j=0,U=E.length;j<U;j++){const Y=E[j],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ut=z.getFrameExtents();if(s.multiply(ut),o.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/ut.x),s.x=o.x*ut.x,z.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/ut.y),s.y=o.y*ut.y,z.mapSize.y=o.y)),z.map===null||B===!0||q===!0){const Mt=this.type!==Un?{minFilter:Ze,magFilter:Ze}:{};z.map!==null&&z.map.dispose(),z.map=new _i(s.x,s.y,Mt),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const mt=z.getViewportCount();for(let Mt=0;Mt<mt;Mt++){const Nt=z.getViewport(Mt);r.set(o.x*Nt.x,o.y*Nt.y,o.x*Nt.z,o.y*Nt.w),k.viewport(r),z.updateMatrices(Y,Mt),n=z.getFrustum(),v(A,C,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===Un&&x(z,C),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,P)};function x(E,A){const C=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new _i(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,C,u,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,C,d,_,null)}function M(E,A,C,S){let y=null;const P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=y.uuid,B=A.uuid;let q=l[k];q===void 0&&(q={},l[k]=q);let j=q[B];j===void 0&&(j=y.clone(),q[B]=j,A.addEventListener("dispose",b)),y=j}if(y.visible=A.visible,y.wireframe=A.wireframe,S===Un?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:f[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=i.properties.get(y);k.light=C}return y}function v(E,A,C,S,y){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Un)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const B=t.update(E),q=E.material;if(Array.isArray(q)){const j=B.groups;for(let U=0,Y=j.length;U<Y;U++){const z=j[U],ut=q[z.materialIndex];if(ut&&ut.visible){const mt=M(E,ut,S,y);E.onBeforeShadow(i,E,A,C,B,mt,z),i.renderBufferDirect(C,null,B,mt,E,z),E.onAfterShadow(i,E,A,C,B,mt,z)}}}else if(q.visible){const j=M(E,q,S,y);E.onBeforeShadow(i,E,A,C,B,j,null),i.renderBufferDirect(C,null,B,j,E,null),E.onAfterShadow(i,E,A,C,B,j,null)}}const k=E.children;for(let B=0,q=k.length;B<q;B++)v(k[B],A,C,S,y)}function b(E){E.target.removeEventListener("dispose",b);for(const C in l){const S=l[C],y=E.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const J0={[Br]:Hr,[Gr]:Xr,[Vr]:qr,[ts]:Wr,[Hr]:Br,[Xr]:Gr,[qr]:Vr,[Wr]:ts};function Q0(i,t){function e(){let I=!1;const rt=new ve;let V=null;const tt=new ve(0,0,0,0);return{setMask:function(gt){V!==gt&&!I&&(i.colorMask(gt,gt,gt,gt),V=gt)},setLocked:function(gt){I=gt},setClear:function(gt,yt,Wt,ge,Te){Te===!0&&(gt*=ge,yt*=ge,Wt*=ge),rt.set(gt,yt,Wt,ge),tt.equals(rt)===!1&&(i.clearColor(gt,yt,Wt,ge),tt.copy(rt))},reset:function(){I=!1,V=null,tt.set(-1,0,0,0)}}}function n(){let I=!1,rt=!1,V=null,tt=null,gt=null;return{setReversed:function(yt){if(rt!==yt){const Wt=t.get("EXT_clip_control");rt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const ge=gt;gt=null,this.setClear(ge)}rt=yt},getReversed:function(){return rt},setTest:function(yt){yt?at(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(yt){V!==yt&&!I&&(i.depthMask(yt),V=yt)},setFunc:function(yt){if(rt&&(yt=J0[yt]),tt!==yt){switch(yt){case Br:i.depthFunc(i.NEVER);break;case Hr:i.depthFunc(i.ALWAYS);break;case Gr:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case Vr:i.depthFunc(i.EQUAL);break;case Wr:i.depthFunc(i.GEQUAL);break;case Xr:i.depthFunc(i.GREATER);break;case qr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=yt}},setLocked:function(yt){I=yt},setClear:function(yt){gt!==yt&&(rt&&(yt=1-yt),i.clearDepth(yt),gt=yt)},reset:function(){I=!1,V=null,tt=null,gt=null,rt=!1}}}function s(){let I=!1,rt=null,V=null,tt=null,gt=null,yt=null,Wt=null,ge=null,Te=null;return{setTest:function(oe){I||(oe?at(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(oe){rt!==oe&&!I&&(i.stencilMask(oe),rt=oe)},setFunc:function(oe,Be,He){(V!==oe||tt!==Be||gt!==He)&&(i.stencilFunc(oe,Be,He),V=oe,tt=Be,gt=He)},setOp:function(oe,Be,He){(yt!==oe||Wt!==Be||ge!==He)&&(i.stencilOp(oe,Be,He),yt=oe,Wt=Be,ge=He)},setLocked:function(oe){I=oe},setClear:function(oe){Te!==oe&&(i.clearStencil(oe),Te=oe)},reset:function(){I=!1,rt=null,V=null,tt=null,gt=null,yt=null,Wt=null,ge=null,Te=null}}}const o=new e,r=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},f={},u=new WeakMap,d=[],g=null,_=!1,m=null,p=null,x=null,M=null,v=null,b=null,E=null,A=new Ot(0,0,0),C=0,S=!1,y=null,P=null,k=null,B=null,q=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,Y=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),U=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),U=Y>=2);let ut=null,mt={};const Mt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Qt=new ve().fromArray(Mt),H=new ve().fromArray(Nt);function Z(I,rt,V,tt){const gt=new Uint8Array(4),yt=i.createTexture();i.bindTexture(I,yt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<V;Wt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(rt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return yt}const _t={};_t[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),at(i.DEPTH_TEST),r.setFunc(ts),ot(!1),St(ic),at(i.CULL_FACE),L(ti);function at(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Rt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Ct(I,rt){return f[I]!==rt?(i.bindFramebuffer(I,rt),f[I]=rt,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=rt),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function kt(I,rt){let V=d,tt=!1;if(I){V=u.get(rt),V===void 0&&(V=[],u.set(rt,V));const gt=I.textures;if(V.length!==gt.length||V[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Wt=gt.length;yt<Wt;yt++)V[yt]=i.COLOR_ATTACHMENT0+yt;V.length=gt.length,tt=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,tt=!0);tt&&i.drawBuffers(V)}function te(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const nt={[di]:i.FUNC_ADD,[nu]:i.FUNC_SUBTRACT,[iu]:i.FUNC_REVERSE_SUBTRACT};nt[su]=i.MIN,nt[ou]=i.MAX;const ct={[ru]:i.ZERO,[au]:i.ONE,[cu]:i.SRC_COLOR,[kr]:i.SRC_ALPHA,[pu]:i.SRC_ALPHA_SATURATE,[du]:i.DST_COLOR,[hu]:i.DST_ALPHA,[lu]:i.ONE_MINUS_SRC_COLOR,[zr]:i.ONE_MINUS_SRC_ALPHA,[fu]:i.ONE_MINUS_DST_COLOR,[uu]:i.ONE_MINUS_DST_ALPHA,[mu]:i.CONSTANT_COLOR,[gu]:i.ONE_MINUS_CONSTANT_COLOR,[_u]:i.CONSTANT_ALPHA,[vu]:i.ONE_MINUS_CONSTANT_ALPHA};function L(I,rt,V,tt,gt,yt,Wt,ge,Te,oe){if(I===ti){_===!0&&(Rt(i.BLEND),_=!1);return}if(_===!1&&(at(i.BLEND),_=!0),I!==eu){if(I!==m||oe!==S){if((p!==di||v!==di)&&(i.blendEquation(i.FUNC_ADD),p=di,v=di),oe)switch(I){case Ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sc:i.blendFunc(i.ONE,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,M=null,b=null,E=null,A.set(0,0,0),C=0,m=I,S=oe}return}gt=gt||rt,yt=yt||V,Wt=Wt||tt,(rt!==p||gt!==v)&&(i.blendEquationSeparate(nt[rt],nt[gt]),p=rt,v=gt),(V!==x||tt!==M||yt!==b||Wt!==E)&&(i.blendFuncSeparate(ct[V],ct[tt],ct[yt],ct[Wt]),x=V,M=tt,b=yt,E=Wt),(ge.equals(A)===!1||Te!==C)&&(i.blendColor(ge.r,ge.g,ge.b,Te),A.copy(ge),C=Te),m=I,S=!1}function lt(I,rt){I.side===ke?Rt(i.CULL_FACE):at(i.CULL_FACE);let V=I.side===ze;rt&&(V=!V),ot(V),I.blending===Ki&&I.transparent===!1?L(ti):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),o.setMask(I.colorWrite);const tt=I.stencilWrite;a.setTest(tt),tt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Bt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function St(I){I!==Qh?(at(i.CULL_FACE),I!==P&&(I===ic?i.cullFace(i.BACK):I===tu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),P=I}function pt(I){I!==k&&(U&&i.lineWidth(I),k=I)}function Bt(I,rt,V){I?(at(i.POLYGON_OFFSET_FILL),(B!==rt||q!==V)&&(i.polygonOffset(rt,V),B=rt,q=V)):Rt(i.POLYGON_OFFSET_FILL)}function Et(I){I?at(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function R(I){I===void 0&&(I=i.TEXTURE0+j-1),ut!==I&&(i.activeTexture(I),ut=I)}function w(I,rt,V){V===void 0&&(ut===null?V=i.TEXTURE0+j-1:V=ut);let tt=mt[V];tt===void 0&&(tt={type:void 0,texture:void 0},mt[V]=tt),(tt.type!==I||tt.texture!==rt)&&(ut!==V&&(i.activeTexture(V),ut=V),i.bindTexture(I,rt||_t[I]),tt.type=I,tt.texture=rt)}function G(){const I=mt[ut];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(I){Qt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Qt.copy(I))}function K(I){H.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),H.copy(I))}function dt(I,rt){let V=l.get(rt);V===void 0&&(V=new WeakMap,l.set(rt,V));let tt=V.get(I);tt===void 0&&(tt=i.getUniformBlockIndex(rt,I.name),V.set(I,tt))}function bt(I,rt){const tt=l.get(rt).get(I);c.get(rt)!==tt&&(i.uniformBlockBinding(rt,tt,I.__bindingPointIndex),c.set(rt,tt))}function zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ut=null,mt={},f={},u=new WeakMap,d=[],g=null,_=!1,m=null,p=null,x=null,M=null,v=null,b=null,E=null,A=new Ot(0,0,0),C=0,S=!1,y=null,P=null,k=null,B=null,q=null,Qt.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:at,disable:Rt,bindFramebuffer:Ct,drawBuffers:kt,useProgram:te,setBlending:L,setMaterial:lt,setFlipSided:ot,setCullFace:St,setLineWidth:pt,setPolygonOffset:Bt,setScissorTest:Et,activeTexture:R,bindTexture:w,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:it,texImage2D:Tt,texImage3D:Gt,updateUBOMapping:dt,uniformBlockBinding:bt,texStorage2D:Jt,texStorage3D:ht,texSubImage2D:Q,texSubImage3D:Lt,compressedTexSubImage2D:vt,compressedTexSubImage3D:At,scissor:$,viewport:K,reset:zt}}function tl(i,t,e,n){const s=tg(n);switch(e){case ch:return i*t;case hh:return i*t;case uh:return i*t*2;case Na:return i*t/s.components*s.byteLength;case Oa:return i*t/s.components*s.byteLength;case dh:return i*t*2/s.components*s.byteLength;case Fa:return i*t*2/s.components*s.byteLength;case lh:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case ka:return i*t*4/s.components*s.byteLength;case Do:case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Uo:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kr:case Qr:return Math.max(i,16)*Math.max(t,8)/4;case Zr:case Jr:return Math.max(i,8)*Math.max(t,8)/2;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Oo:case _a:case va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fh:case xa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ma:case ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tg(i){switch(i){case kn:case oh:return{byteLength:1,components:1};case Os:case rh:case Vs:return{byteLength:2,components:1};case Ia:case Ua:return{byteLength:2,components:4};case gi:case Da:case xn:return{byteLength:4,components:1};case ah:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function eg(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new st,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return d?new OffscreenCanvas(R,w):Bo("canvas")}function _(R,w,G){let J=1;const it=Et(R);if((it.width>G||it.height>G)&&(J=G/Math.max(it.width,it.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(J*it.width),Lt=Math.floor(J*it.height);f===void 0&&(f=g(Q,Lt));const vt=w?g(Q,Lt):f;return vt.width=Q,vt.height=Lt,vt.getContext("2d").drawImage(R,0,0,Q,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Q+"x"+Lt+")."),vt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,w,G,J,it=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=w;if(w===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),w===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8)),w===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),w===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),w===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),w===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),w===i.RGBA){const Lt=it?Wo:ne.getTransfer(J);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=Lt===le?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(R,w){let G;return R?w===null||w===gi||w===is?G=i.DEPTH24_STENCIL8:w===xn?G=i.DEPTH32F_STENCIL8:w===Os&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===gi||w===is?G=i.DEPTH_COMPONENT24:w===xn?G=i.DEPTH_COMPONENT32F:w===Os&&(G=i.DEPTH_COMPONENT16),G}function b(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ze&&R.minFilter!==vn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function E(R){const w=R.target;w.removeEventListener("dispose",E),C(w),w.isVideoTexture&&h.delete(w)}function A(R){const w=R.target;w.removeEventListener("dispose",A),y(w)}function C(R){const w=n.get(R);if(w.__webglInit===void 0)return;const G=R.source,J=u.get(G);if(J){const it=J[w.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(R),Object.keys(J).length===0&&u.delete(G)}n.remove(R)}function S(R){const w=n.get(R);i.deleteTexture(w.__webglTexture);const G=R.source,J=u.get(G);delete J[w.__cacheKey],r.memory.textures--}function y(R){const w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let it=0;it<w.__webglFramebuffer[J].length;it++)i.deleteFramebuffer(w.__webglFramebuffer[J][it]);else i.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)i.deleteFramebuffer(w.__webglFramebuffer[J]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=R.textures;for(let J=0,it=G.length;J<it;J++){const Q=n.get(G[J]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),r.memory.textures--),n.remove(G[J])}n.remove(R)}let P=0;function k(){P=0}function B(){const R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function q(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function j(R,w){const G=n.get(R);if(R.isVideoTexture&&pt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(G,R,w);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function U(R,w){const G=n.get(R);if(R.version>0&&G.__version!==R.version){H(G,R,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function Y(R,w){const G=n.get(R);if(R.version>0&&G.__version!==R.version){H(G,R,w);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function z(R,w){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Z(G,R,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}const ut={[ko]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[jr]:i.MIRRORED_REPEAT},mt={[Ze]:i.NEAREST,[Au]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[Ko]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},Mt={[Lu]:i.NEVER,[Fu]:i.ALWAYS,[Du]:i.LESS,[mh]:i.LEQUAL,[Iu]:i.EQUAL,[Ou]:i.GEQUAL,[Uu]:i.GREATER,[Nu]:i.NOTEQUAL};function Nt(R,w){if(w.type===xn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===vn||w.magFilter===Ko||w.magFilter===js||w.magFilter===mi||w.minFilter===vn||w.minFilter===Ko||w.minFilter===js||w.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ut[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ut[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ut[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,mt[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,mt[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Mt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ze||w.minFilter!==js&&w.minFilter!==mi||w.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Qt(R,w){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",E));const J=w.source;let it=u.get(J);it===void 0&&(it={},u.set(J,it));const Q=q(w);if(Q!==R.__cacheKey){it[Q]===void 0&&(it[Q]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,G=!0),it[Q].usedTimes++;const Lt=it[R.__cacheKey];Lt!==void 0&&(it[R.__cacheKey].usedTimes--,Lt.usedTimes===0&&S(w)),R.__cacheKey=Q,R.__webglTexture=it[Q].texture}return G}function H(R,w,G){let J=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=i.TEXTURE_3D);const it=Qt(R,w),Q=w.source;e.bindTexture(J,R.__webglTexture,i.TEXTURE0+G);const Lt=n.get(Q);if(Q.version!==Lt.__version||it===!0){e.activeTexture(i.TEXTURE0+G);const vt=ne.getPrimaries(ne.workingColorSpace),At=w.colorSpace===Kn?null:ne.getPrimaries(w.colorSpace),Jt=w.colorSpace===Kn||vt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let ht=_(w.image,!1,s.maxTextureSize);ht=Bt(w,ht);const Tt=o.convert(w.format,w.colorSpace),Gt=o.convert(w.type);let $=M(w.internalFormat,Tt,Gt,w.colorSpace,w.isVideoTexture);Nt(J,w);let K;const dt=w.mipmaps,bt=w.isVideoTexture!==!0,zt=Lt.__version===void 0||it===!0,I=Q.dataReady,rt=b(w,ht);if(w.isDepthTexture)$=v(w.format===ss,w.type),zt&&(bt?e.texStorage2D(i.TEXTURE_2D,1,$,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,$,ht.width,ht.height,0,Tt,Gt,null));else if(w.isDataTexture)if(dt.length>0){bt&&zt&&e.texStorage2D(i.TEXTURE_2D,rt,$,dt[0].width,dt[0].height);for(let V=0,tt=dt.length;V<tt;V++)K=dt[V],bt?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,K.width,K.height,Tt,Gt,K.data):e.texImage2D(i.TEXTURE_2D,V,$,K.width,K.height,0,Tt,Gt,K.data);w.generateMipmaps=!1}else bt?(zt&&e.texStorage2D(i.TEXTURE_2D,rt,$,ht.width,ht.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,Tt,Gt,ht.data)):e.texImage2D(i.TEXTURE_2D,0,$,ht.width,ht.height,0,Tt,Gt,ht.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){bt&&zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,$,dt[0].width,dt[0].height,ht.depth);for(let V=0,tt=dt.length;V<tt;V++)if(K=dt[V],w.format!==fn)if(Tt!==null)if(bt){if(I)if(w.layerUpdates.size>0){const gt=tl(K.width,K.height,w.format,w.type);for(const yt of w.layerUpdates){const Wt=K.data.subarray(yt*gt/K.data.BYTES_PER_ELEMENT,(yt+1)*gt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,yt,K.width,K.height,1,Tt,Wt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,K.width,K.height,ht.depth,Tt,K.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,$,K.width,K.height,ht.depth,0,K.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else bt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,K.width,K.height,ht.depth,Tt,Gt,K.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,$,K.width,K.height,ht.depth,0,Tt,Gt,K.data)}else{bt&&zt&&e.texStorage2D(i.TEXTURE_2D,rt,$,dt[0].width,dt[0].height);for(let V=0,tt=dt.length;V<tt;V++)K=dt[V],w.format!==fn?Tt!==null?bt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,K.width,K.height,Tt,K.data):e.compressedTexImage2D(i.TEXTURE_2D,V,$,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,K.width,K.height,Tt,Gt,K.data):e.texImage2D(i.TEXTURE_2D,V,$,K.width,K.height,0,Tt,Gt,K.data)}else if(w.isDataArrayTexture)if(bt){if(zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,$,ht.width,ht.height,ht.depth),I)if(w.layerUpdates.size>0){const V=tl(ht.width,ht.height,w.format,w.type);for(const tt of w.layerUpdates){const gt=ht.data.subarray(tt*V/ht.data.BYTES_PER_ELEMENT,(tt+1)*V/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,ht.width,ht.height,1,Tt,Gt,gt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Gt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,ht.width,ht.height,ht.depth,0,Tt,Gt,ht.data);else if(w.isData3DTexture)bt?(zt&&e.texStorage3D(i.TEXTURE_3D,rt,$,ht.width,ht.height,ht.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Gt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,$,ht.width,ht.height,ht.depth,0,Tt,Gt,ht.data);else if(w.isFramebufferTexture){if(zt)if(bt)e.texStorage2D(i.TEXTURE_2D,rt,$,ht.width,ht.height);else{let V=ht.width,tt=ht.height;for(let gt=0;gt<rt;gt++)e.texImage2D(i.TEXTURE_2D,gt,$,V,tt,0,Tt,Gt,null),V>>=1,tt>>=1}}else if(dt.length>0){if(bt&&zt){const V=Et(dt[0]);e.texStorage2D(i.TEXTURE_2D,rt,$,V.width,V.height)}for(let V=0,tt=dt.length;V<tt;V++)K=dt[V],bt?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,Tt,Gt,K):e.texImage2D(i.TEXTURE_2D,V,$,Tt,Gt,K);w.generateMipmaps=!1}else if(bt){if(zt){const V=Et(ht);e.texStorage2D(i.TEXTURE_2D,rt,$,V.width,V.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Gt,ht)}else e.texImage2D(i.TEXTURE_2D,0,$,Tt,Gt,ht);m(w)&&p(J),Lt.__version=Q.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Z(R,w,G){if(w.image.length!==6)return;const J=Qt(R,w),it=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const Q=n.get(it);if(it.version!==Q.__version||J===!0){e.activeTexture(i.TEXTURE0+G);const Lt=ne.getPrimaries(ne.workingColorSpace),vt=w.colorSpace===Kn?null:ne.getPrimaries(w.colorSpace),At=w.colorSpace===Kn||Lt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Jt=w.isCompressedTexture||w.image[0].isCompressedTexture,ht=w.image[0]&&w.image[0].isDataTexture,Tt=[];for(let tt=0;tt<6;tt++)!Jt&&!ht?Tt[tt]=_(w.image[tt],!0,s.maxCubemapSize):Tt[tt]=ht?w.image[tt].image:w.image[tt],Tt[tt]=Bt(w,Tt[tt]);const Gt=Tt[0],$=o.convert(w.format,w.colorSpace),K=o.convert(w.type),dt=M(w.internalFormat,$,K,w.colorSpace),bt=w.isVideoTexture!==!0,zt=Q.__version===void 0||J===!0,I=it.dataReady;let rt=b(w,Gt);Nt(i.TEXTURE_CUBE_MAP,w);let V;if(Jt){bt&&zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,dt,Gt.width,Gt.height);for(let tt=0;tt<6;tt++){V=Tt[tt].mipmaps;for(let gt=0;gt<V.length;gt++){const yt=V[gt];w.format!==fn?$!==null?bt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,yt.width,yt.height,$,yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,dt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,yt.width,yt.height,$,K,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,dt,yt.width,yt.height,0,$,K,yt.data)}}}else{if(V=w.mipmaps,bt&&zt){V.length>0&&rt++;const tt=Et(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,dt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ht){bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Tt[tt].width,Tt[tt].height,$,K,Tt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,dt,Tt[tt].width,Tt[tt].height,0,$,K,Tt[tt].data);for(let gt=0;gt<V.length;gt++){const Wt=V[gt].image[tt].image;bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,Wt.width,Wt.height,$,K,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,dt,Wt.width,Wt.height,0,$,K,Wt.data)}}else{bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,$,K,Tt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,dt,$,K,Tt[tt]);for(let gt=0;gt<V.length;gt++){const yt=V[gt];bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,$,K,yt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,dt,$,K,yt.image[tt])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),Q.__version=it.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function _t(R,w,G,J,it,Q){const Lt=o.convert(G.format,G.colorSpace),vt=o.convert(G.type),At=M(G.internalFormat,Lt,vt,G.colorSpace),Jt=n.get(w),ht=n.get(G);if(ht.__renderTarget=w,!Jt.__hasExternalTextures){const Tt=Math.max(1,w.width>>Q),Gt=Math.max(1,w.height>>Q);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,Q,At,Tt,Gt,w.depth,0,Lt,vt,null):e.texImage2D(it,Q,At,Tt,Gt,0,Lt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),St(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,it,ht.__webglTexture,0,ot(w)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,it,ht.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(R,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){const J=w.depthTexture,it=J&&J.isDepthTexture?J.type:null,Q=v(w.stencilBuffer,it),Lt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=ot(w);St(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,Q,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,Q,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Q,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,R)}else{const J=w.textures;for(let it=0;it<J.length;it++){const Q=J[it],Lt=o.convert(Q.format,Q.colorSpace),vt=o.convert(Q.type),At=M(Q.internalFormat,Lt,vt,Q.colorSpace),Jt=ot(w);G&&St(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,At,w.width,w.height):St(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,At,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,At,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(w.depthTexture);J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const it=J.__webglTexture,Q=ot(w);if(w.depthTexture.format===Ji)St(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(w.depthTexture.format===ss)St(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Ct(R){const w=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const it=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",it)};J.addEventListener("dispose",it),w.__depthDisposeCallback=it}w.__boundDepthTexture=J}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Rt(w.__webglFramebuffer,R)}else if(G){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=i.createRenderbuffer(),at(w.__webglDepthbuffer[J],R,!1);else{const it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),at(w.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(R,w,G){const J=n.get(R);w!==void 0&&_t(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ct(R)}function te(R){const w=R.texture,G=n.get(R),J=n.get(w);R.addEventListener("dispose",A);const it=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Lt=it.length>1;if(Lt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,r.memory.textures++),Q){G.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[vt]=[];for(let At=0;At<w.mipmaps.length;At++)G.__webglFramebuffer[vt][At]=i.createFramebuffer()}else G.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let vt=0;vt<w.mipmaps.length;vt++)G.__webglFramebuffer[vt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let vt=0,At=it.length;vt<At;vt++){const Jt=n.get(it[vt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),r.memory.textures++)}if(R.samples>0&&St(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let vt=0;vt<it.length;vt++){const At=it[vt];G.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[vt]);const Jt=o.convert(At.format,At.colorSpace),ht=o.convert(At.type),Tt=M(At.internalFormat,Jt,ht,At.colorSpace,R.isXRRenderTarget===!0),Gt=ot(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Tt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,G.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),at(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,w);for(let vt=0;vt<6;vt++)if(w.mipmaps&&w.mipmaps.length>0)for(let At=0;At<w.mipmaps.length;At++)_t(G.__webglFramebuffer[vt][At],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At);else _t(G.__webglFramebuffer[vt],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let vt=0,At=it.length;vt<At;vt++){const Jt=it[vt],ht=n.get(Jt);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),Nt(i.TEXTURE_2D,Jt),_t(G.__webglFramebuffer,R,Jt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),m(Jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(vt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,J.__webglTexture),Nt(vt,w),w.mipmaps&&w.mipmaps.length>0)for(let At=0;At<w.mipmaps.length;At++)_t(G.__webglFramebuffer[At],R,w,i.COLOR_ATTACHMENT0,vt,At);else _t(G.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,vt,0);m(w)&&p(vt),e.unbindTexture()}R.depthBuffer&&Ct(R)}function nt(R){const w=R.textures;for(let G=0,J=w.length;G<J;G++){const it=w[G];if(m(it)){const Q=x(R),Lt=n.get(it).__webglTexture;e.bindTexture(Q,Lt),p(Q),e.unbindTexture()}}}const ct=[],L=[];function lt(R){if(R.samples>0){if(St(R)===!1){const w=R.textures,G=R.width,J=R.height;let it=i.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(R),vt=w.length>1;if(vt)for(let At=0;At<w.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let At=0;At<w.length;At++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[At]);const Jt=n.get(w[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,it,i.NEAREST),c===!0&&(ct.length=0,L.length=0,ct.push(i.COLOR_ATTACHMENT0+At),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ct.push(Q),L.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let At=0;At<w.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[At]);const Jt=n.get(w[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ot(R){return Math.min(s.maxSamples,R.samples)}function St(R){const w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function pt(R){const w=r.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function Bt(R,w){const G=R.colorSpace,J=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==hs&&G!==Kn&&(ne.getTransfer(G)===le?(J!==fn||it!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Et(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=U,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=kt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=St}function ng(i,t){function e(n,s=Kn){let o;const r=ne.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===Ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return i.BYTE;if(n===rh)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===Da)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===Vs)return i.HALF_FLOAT;if(n===ch)return i.ALPHA;if(n===lh)return i.RGB;if(n===fn)return i.RGBA;if(n===hh)return i.LUMINANCE;if(n===uh)return i.LUMINANCE_ALPHA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===Na)return i.RED;if(n===Oa)return i.RED_INTEGER;if(n===dh)return i.RG;if(n===Fa)return i.RG_INTEGER;if(n===ka)return i.RGBA_INTEGER;if(n===Do||n===Io||n===Uo||n===No)if(r===le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Do)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Io)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===No)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Do)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Io)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Uo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===No)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zr||n===Kr||n===Jr||n===Qr)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Zr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ta||n===ea||n===na)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ta||n===ea)return r===le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===na)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ia||n===sa||n===oa||n===ra||n===aa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ia)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sa)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ra)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ca)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===la)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ua)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pa)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oo||n===_a||n===va)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Oo)return r===le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_a)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===va)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fh||n===xa||n===Ma||n===ya)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Oo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===xa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ya)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ig extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ht extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sg={type:"move"};class wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rg=`
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

}`;class ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ue,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new zn({vertexShader:og,fragmentShader:rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new et(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cg extends yi{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null;const _=new ag,m=e.getContextAttributes();let p=null,x=null;const M=[],v=[],b=new st;let E=null;const A=new je;A.viewport=new ve;const C=new je;C.viewport=new ve;const S=[A,C],y=new ig;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=M[H];return Z===void 0&&(Z=new wr,M[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=M[H];return Z===void 0&&(Z=new wr,M[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=M[H];return Z===void 0&&(Z=new wr,M[H]=Z),Z.getHandSpace()};function B(H){const Z=v.indexOf(H.inputSource);if(Z===-1)return;const _t=M[Z];_t!==void 0&&(_t.update(H.inputSource,H.frame,l||r),_t.dispatchEvent({type:H.type,data:H.inputSource}))}function q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",j);for(let H=0;H<M.length;H++){const Z=v[H];Z!==null&&(v[H]=null,M[H].disconnect(Z))}P=null,k=null,_.reset(),t.setRenderTarget(p),d=null,u=null,f=null,s=null,x=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",q),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new _i(d.framebufferWidth,d.framebufferHeight,{format:fn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,_t=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?ss:Ji,_t=m.stencil?is:gi);const Rt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:o};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Rt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new _i(u.textureWidth,u.textureHeight,{format:fn,type:kn,depthTexture:new Rh(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(H){for(let Z=0;Z<H.removed.length;Z++){const _t=H.removed[Z],at=v.indexOf(_t);at>=0&&(v[at]=null,M[at].disconnect(_t))}for(let Z=0;Z<H.added.length;Z++){const _t=H.added[Z];let at=v.indexOf(_t);if(at===-1){for(let Ct=0;Ct<M.length;Ct++)if(Ct>=v.length){v.push(_t),at=Ct;break}else if(v[Ct]===null){v[Ct]=_t,at=Ct;break}if(at===-1)break}const Rt=M[at];Rt&&Rt.connect(_t)}}const U=new D,Y=new D;function z(H,Z,_t){U.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(_t.matrixWorld);const at=U.distanceTo(Y),Rt=Z.projectionMatrix.elements,Ct=_t.projectionMatrix.elements,kt=Rt[14]/(Rt[10]-1),te=Rt[14]/(Rt[10]+1),nt=(Rt[9]+1)/Rt[5],ct=(Rt[9]-1)/Rt[5],L=(Rt[8]-1)/Rt[0],lt=(Ct[8]+1)/Ct[0],ot=kt*L,St=kt*lt,pt=at/(-L+lt),Bt=pt*-L;if(Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Bt),H.translateZ(pt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Rt[10]===-1)H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Et=kt+pt,R=te+pt,w=ot-Bt,G=St+(at-Bt),J=nt*te/R*Et,it=ct*te/R*Et;H.projectionMatrix.makePerspective(w,G,J,it,Et,R),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function ut(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let Z=H.near,_t=H.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),y.near=C.near=A.near=Z,y.far=C.far=A.far=_t,(P!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,k=y.far),A.layers.mask=H.layers.mask|2,C.layers.mask=H.layers.mask|4,y.layers.mask=A.layers.mask|C.layers.mask;const at=H.parent,Rt=y.cameras;ut(y,at);for(let Ct=0;Ct<Rt.length;Ct++)ut(Rt[Ct],at);Rt.length===2?z(y,A,C):y.projectionMatrix.copy(A.projectionMatrix),mt(H,y,at)};function mt(H,Z,_t){_t===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(_t.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=os*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(H){c=H,u!==null&&(u.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Mt=null;function Nt(H,Z){if(h=Z.getViewerPose(l||r),g=Z,h!==null){const _t=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let at=!1;_t.length!==y.cameras.length&&(y.cameras.length=0,at=!0);for(let Ct=0;Ct<_t.length;Ct++){const kt=_t[Ct];let te=null;if(d!==null)te=d.getViewport(kt);else{const ct=f.getViewSubImage(u,kt);te=ct.viewport,Ct===0&&(t.setRenderTargetTextures(x,ct.colorTexture,u.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(x))}let nt=S[Ct];nt===void 0&&(nt=new je,nt.layers.enable(Ct),nt.viewport=new ve,S[Ct]=nt),nt.matrix.fromArray(kt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(kt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(te.x,te.y,te.width,te.height),Ct===0&&(y.matrix.copy(nt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),at===!0&&y.cameras.push(nt)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Ct=f.getDepthInformation(_t[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,s.renderState)}}for(let _t=0;_t<M.length;_t++){const at=v[_t],Rt=M[_t];at!==null&&Rt!==void 0&&Rt.update(at,Z,l||r)}Mt&&Mt(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Qt=new Th;Qt.setAnimationLoop(Nt),this.setAnimationLoop=function(H){Mt=H},this.dispose=function(){}}}const li=new bn,lg=new ie;function hg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),f(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),_(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,li.copy(v),li.x*=-1,li.y*=-1,li.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),m.envMapRotation.value.setFromMatrix4(lg.makeRotationFromEuler(li)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ug(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function l(x,M){let v=s[x.id];v===void 0&&(g(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(x,b);const E=t.render.frame;o[x.id]!==E&&(u(x),o[x.id]=E)}function h(x){const M=f();x.__bindingPointIndex=M;const v=i.createBuffer(),b=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function f(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const M=s[x.id],v=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,A=v.length;E<A;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,y=C.length;S<y;S++){const P=C[S];if(d(P,E,S,b)===!0){const k=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let j=0;j<B.length;j++){const U=B[j],Y=_(U);typeof U=="number"||typeof U=="boolean"?(P.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,k+q,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=0,P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=0,P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=0):(U.toArray(P.__data,q),q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,M,v,b){const E=x.value,A=M+"_"+v;if(b[A]===void 0)return typeof E=="number"||typeof E=="boolean"?b[A]=E:b[A]=E.clone(),!0;{const C=b[A];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return b[A]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(x){const M=x.uniforms;let v=0;const b=16;for(let A=0,C=M.length;A<C;A++){const S=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,P=S.length;y<P;y++){const k=S[y],B=Array.isArray(k.value)?k.value:[k.value];for(let q=0,j=B.length;q<j;q++){const U=B[q],Y=_(U),z=v%b,ut=z%Y.boundary,mt=z+ut;v+=ut,mt!==0&&b-mt<Y.storage&&(v+=b-mt),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=Y.storage}}}const E=v%b;return E>0&&(v+=b-E),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=r.indexOf(M.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);r=[],s={},o={}}return{bind:c,update:l,dispose:p}}class dg{constructor(t={}){const{canvas:e=td(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=ei,this.toneMappingExposure=1;const v=this;let b=!1,E=0,A=0,C=null,S=-1,y=null;const P=new ve,k=new ve;let B=null;const q=new Ot(0);let j=0,U=e.width,Y=e.height,z=1,ut=null,mt=null;const Mt=new ve(0,0,U,Y),Nt=new ve(0,0,U,Y);let Qt=!1;const H=new Ha;let Z=!1,_t=!1;const at=new ie,Rt=new ie,Ct=new D,kt=new ve,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function ct(){return C===null?z:1}let L=n;function lt(T,N){return e.getContext(T,N)}try{const T={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${La}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),L===null){const N="webgl2";if(L=lt(N,T),L===null)throw lt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ot,St,pt,Bt,Et,R,w,G,J,it,Q,Lt,vt,At,Jt,ht,Tt,Gt,$,K,dt,bt,zt,I;function rt(){ot=new _m(L),ot.init(),bt=new ng(L,ot),St=new um(L,ot,t,bt),pt=new Q0(L,ot),St.reverseDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),Bt=new Mm(L),Et=new k0,R=new eg(L,ot,pt,Et,St,bt,Bt),w=new fm(v),G=new gm(v),J=new Td(L),zt=new lm(L,J),it=new vm(L,J,Bt,zt),Q=new bm(L,it,J,Bt),$=new ym(L,St,R),ht=new dm(Et),Lt=new F0(v,w,G,ot,St,zt,ht),vt=new hg(v,Et),At=new B0,Jt=new q0(ot),Gt=new cm(v,w,G,pt,Q,d,c),Tt=new K0(v,Q,St),I=new ug(L,Bt,St,pt),K=new hm(L,ot,Bt),dt=new xm(L,ot,Bt),Bt.programs=Lt.programs,v.capabilities=St,v.extensions=ot,v.properties=Et,v.renderLists=At,v.shadowMap=Tt,v.state=pt,v.info=Bt}rt();const V=new cg(v,L);this.xr=V,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(U,Y,!1))},this.getSize=function(T){return T.set(U,Y)},this.setSize=function(T,N,W=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,Y=N,e.width=Math.floor(T*z),e.height=Math.floor(N*z),W===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(U*z,Y*z).floor()},this.setDrawingBufferSize=function(T,N,W){U=T,Y=N,z=W,e.width=Math.floor(T*W),e.height=Math.floor(N*W),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(Mt)},this.setViewport=function(T,N,W,X){T.isVector4?Mt.set(T.x,T.y,T.z,T.w):Mt.set(T,N,W,X),pt.viewport(P.copy(Mt).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(Nt)},this.setScissor=function(T,N,W,X){T.isVector4?Nt.set(T.x,T.y,T.z,T.w):Nt.set(T,N,W,X),pt.scissor(k.copy(Nt).multiplyScalar(z).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(T){pt.setScissorTest(Qt=T)},this.setOpaqueSort=function(T){ut=T},this.setTransparentSort=function(T){mt=T},this.getClearColor=function(T){return T.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(T=!0,N=!0,W=!0){let X=0;if(T){let O=!1;if(C!==null){const ft=C.texture.format;O=ft===ka||ft===Fa||ft===Oa}if(O){const ft=C.texture.type,wt=ft===kn||ft===gi||ft===Os||ft===is||ft===Ia||ft===Ua,Dt=Gt.getClearColor(),It=Gt.getClearAlpha(),Vt=Dt.r,$t=Dt.g,Ut=Dt.b;wt?(g[0]=Vt,g[1]=$t,g[2]=Ut,g[3]=It,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Vt,_[1]=$t,_[2]=Ut,_[3]=It,L.clearBufferiv(L.COLOR,0,_))}else X|=L.COLOR_BUFFER_BIT}N&&(X|=L.DEPTH_BUFFER_BIT),W&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),At.dispose(),Jt.dispose(),Et.dispose(),w.dispose(),G.dispose(),Q.dispose(),zt.dispose(),I.dispose(),Lt.dispose(),V.dispose(),V.removeEventListener("sessionstart",qs),V.removeEventListener("sessionend",ps),Pt.stop()};function tt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=Bt.autoReset,N=Tt.enabled,W=Tt.autoUpdate,X=Tt.needsUpdate,O=Tt.type;rt(),Bt.autoReset=T,Tt.enabled=N,Tt.autoUpdate=W,Tt.needsUpdate=X,Tt.type=O}function yt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Wt(T){const N=T.target;N.removeEventListener("dispose",Wt),ge(N)}function ge(T){Te(T),Et.remove(T)}function Te(T){const N=Et.get(T).programs;N!==void 0&&(N.forEach(function(W){Lt.releaseProgram(W)}),T.isShaderMaterial&&Lt.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,W,X,O,ft){N===null&&(N=te);const wt=O.isMesh&&O.matrixWorld.determinant()<0,Dt=$h(T,N,W,X,O);pt.setMaterial(X,wt);let It=W.index,Vt=1;if(X.wireframe===!0){if(It=it.getWireframeAttribute(W),It===void 0)return;Vt=2}const $t=W.drawRange,Ut=W.attributes.position;let se=$t.start*Vt,fe=($t.start+$t.count)*Vt;ft!==null&&(se=Math.max(se,ft.start*Vt),fe=Math.min(fe,(ft.start+ft.count)*Vt)),It!==null?(se=Math.max(se,0),fe=Math.min(fe,It.count)):Ut!=null&&(se=Math.max(se,0),fe=Math.min(fe,Ut.count));const pe=fe-se;if(pe<0||pe===1/0)return;zt.setup(O,X,Dt,W,It);let Ge,re=K;if(It!==null&&(Ge=J.get(It),re=dt,re.setIndex(Ge)),O.isMesh)X.wireframe===!0?(pt.setLineWidth(X.wireframeLinewidth*ct()),re.setMode(L.LINES)):re.setMode(L.TRIANGLES);else if(O.isLine){let Ft=X.linewidth;Ft===void 0&&(Ft=1),pt.setLineWidth(Ft*ct()),O.isLineSegments?re.setMode(L.LINES):O.isLineLoop?re.setMode(L.LINE_LOOP):re.setMode(L.LINE_STRIP)}else O.isPoints?re.setMode(L.POINTS):O.isSprite&&re.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)re.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))re.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ft=O._multiDrawStarts,An=O._multiDrawCounts,ae=O._multiDrawCount,rn=It?J.get(It).bytesPerElement:1,Ti=Et.get(X).currentProgram.getUniforms();for(let Xe=0;Xe<ae;Xe++)Ti.setValue(L,"_gl_DrawID",Xe),re.render(Ft[Xe]/rn,An[Xe])}else if(O.isInstancedMesh)re.renderInstances(se,pe,O.count);else if(W.isInstancedBufferGeometry){const Ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,An=Math.min(W.instanceCount,Ft);re.renderInstances(se,pe,An)}else re.render(se,pe)};function oe(T,N,W){T.transparent===!0&&T.side===ke&&T.forceSinglePass===!1?(T.side=ze,T.needsUpdate=!0,$s(T,N,W),T.side=ni,T.needsUpdate=!0,$s(T,N,W),T.side=ke):$s(T,N,W)}this.compile=function(T,N,W=null){W===null&&(W=T),p=Jt.get(W),p.init(N),M.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==W&&T.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const X=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ft=O.material;if(ft)if(Array.isArray(ft))for(let wt=0;wt<ft.length;wt++){const Dt=ft[wt];oe(Dt,W,O),X.add(Dt)}else oe(ft,W,O),X.add(ft)}),M.pop(),p=null,X},this.compileAsync=function(T,N,W=null){const X=this.compile(T,N,W);return new Promise(O=>{function ft(){if(X.forEach(function(wt){Et.get(wt).currentProgram.isReady()&&X.delete(wt)}),X.size===0){O(T);return}setTimeout(ft,10)}ot.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Be=null;function He(T){Be&&Be(T)}function qs(){Pt.stop()}function ps(){Pt.start()}const Pt=new Th;Pt.setAnimationLoop(He),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(T){Be=T,V.setAnimationLoop(T),T===null?Pt.stop():Pt.start()},V.addEventListener("sessionstart",qs),V.addEventListener("sessionend",ps),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(N),N=V.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,N,C),p=Jt.get(T,M.length),p.init(N),M.push(p),Rt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H.setFromProjectionMatrix(Rt),_t=this.localClippingEnabled,Z=ht.init(this.clippingPlanes,_t),m=At.get(T,x.length),m.init(),x.push(m),V.enabled===!0&&V.isPresenting===!0){const ft=v.xr.getDepthSensingMesh();ft!==null&&Yt(ft,N,-1/0,v.sortObjects)}Yt(T,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ut,mt),nt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,nt&&Gt.addToRenderList(m,T),this.info.render.frame++,Z===!0&&ht.beginShadows();const W=p.state.shadowsArray;Tt.render(W,T,N),Z===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,O=m.transmissive;if(p.setupLights(),N.isArrayCamera){const ft=N.cameras;if(O.length>0)for(let wt=0,Dt=ft.length;wt<Dt;wt++){const It=ft[wt];Zo(X,O,T,It)}nt&&Gt.render(T);for(let wt=0,Dt=ft.length;wt<Dt;wt++){const It=ft[wt];Ke(m,T,It,It.viewport)}}else O.length>0&&Zo(X,O,T,N),nt&&Gt.render(T),Ke(m,T,N);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,N),zt.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],Z===!0&&ht.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Yt(T,N,W,X){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||H.intersectsSprite(T)){X&&kt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Rt);const wt=Q.update(T),Dt=T.material;Dt.visible&&m.push(T,wt,Dt,W,kt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||H.intersectsObject(T))){const wt=Q.update(T),Dt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),kt.copy(T.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),kt.copy(wt.boundingSphere.center)),kt.applyMatrix4(T.matrixWorld).applyMatrix4(Rt)),Array.isArray(Dt)){const It=wt.groups;for(let Vt=0,$t=It.length;Vt<$t;Vt++){const Ut=It[Vt],se=Dt[Ut.materialIndex];se&&se.visible&&m.push(T,wt,se,W,kt.z,Ut)}}else Dt.visible&&m.push(T,wt,Dt,W,kt.z,null)}}const ft=T.children;for(let wt=0,Dt=ft.length;wt<Dt;wt++)Yt(ft[wt],N,W,X)}function Ke(T,N,W,X){const O=T.opaque,ft=T.transmissive,wt=T.transparent;p.setupLightsView(W),Z===!0&&ht.setGlobalState(v.clippingPlanes,W),X&&pt.viewport(P.copy(X)),O.length>0&&Tn(O,N,W),ft.length>0&&Tn(ft,N,W),wt.length>0&&Tn(wt,N,W),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Zo(T,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new _i(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Vs:kn,minFilter:mi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const ft=p.state.transmissionRenderTarget[X.id],wt=X.viewport||P;ft.setSize(wt.z,wt.w);const Dt=v.getRenderTarget();v.setRenderTarget(ft),v.getClearColor(q),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),nt&&Gt.render(W);const It=v.toneMapping;v.toneMapping=ei;const Vt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Z===!0&&ht.setGlobalState(v.clippingPlanes,X),Tn(T,W,X),R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft),ot.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ut=0,se=N.length;Ut<se;Ut++){const fe=N[Ut],pe=fe.object,Ge=fe.geometry,re=fe.material,Ft=fe.group;if(re.side===ke&&pe.layers.test(X.layers)){const An=re.side;re.side=ze,re.needsUpdate=!0,Ys(pe,W,X,Ge,re,Ft),re.side=An,re.needsUpdate=!0,$t=!0}}$t===!0&&(R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft))}v.setRenderTarget(Dt),v.setClearColor(q,j),Vt!==void 0&&(X.viewport=Vt),v.toneMapping=It}function Tn(T,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ft=T.length;O<ft;O++){const wt=T[O],Dt=wt.object,It=wt.geometry,Vt=X===null?wt.material:X,$t=wt.group;Dt.layers.test(W.layers)&&Ys(Dt,N,W,It,Vt,$t)}}function Ys(T,N,W,X,O,ft){T.onBeforeRender(v,N,W,X,O,ft),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(v,N,W,X,T,ft),O.transparent===!0&&O.side===ke&&O.forceSinglePass===!1?(O.side=ze,O.needsUpdate=!0,v.renderBufferDirect(W,N,X,O,T,ft),O.side=ni,O.needsUpdate=!0,v.renderBufferDirect(W,N,X,O,T,ft),O.side=ke):v.renderBufferDirect(W,N,X,O,T,ft),T.onAfterRender(v,N,W,X,O,ft)}function $s(T,N,W){N.isScene!==!0&&(N=te);const X=Et.get(T),O=p.state.lights,ft=p.state.shadowsArray,wt=O.state.version,Dt=Lt.getParameters(T,O.state,ft,N,W),It=Lt.getProgramCacheKey(Dt);let Vt=X.programs;X.environment=T.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(T.isMeshStandardMaterial?G:w).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Vt===void 0&&(T.addEventListener("dispose",Wt),Vt=new Map,X.programs=Vt);let $t=Vt.get(It);if($t!==void 0){if(X.currentProgram===$t&&X.lightsStateVersion===wt)return ec(T,Dt),$t}else Dt.uniforms=Lt.getUniforms(T),T.onBeforeCompile(Dt,v),$t=Lt.acquireProgram(Dt,It),Vt.set(It,$t),X.uniforms=Dt.uniforms;const Ut=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ut.clippingPlanes=ht.uniform),ec(T,Dt),X.needsLights=Zh(T),X.lightsStateVersion=wt,X.needsLights&&(Ut.ambientLightColor.value=O.state.ambient,Ut.lightProbe.value=O.state.probe,Ut.directionalLights.value=O.state.directional,Ut.directionalLightShadows.value=O.state.directionalShadow,Ut.spotLights.value=O.state.spot,Ut.spotLightShadows.value=O.state.spotShadow,Ut.rectAreaLights.value=O.state.rectArea,Ut.ltc_1.value=O.state.rectAreaLTC1,Ut.ltc_2.value=O.state.rectAreaLTC2,Ut.pointLights.value=O.state.point,Ut.pointLightShadows.value=O.state.pointShadow,Ut.hemisphereLights.value=O.state.hemi,Ut.directionalShadowMap.value=O.state.directionalShadowMap,Ut.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ut.spotShadowMap.value=O.state.spotShadowMap,Ut.spotLightMatrix.value=O.state.spotLightMatrix,Ut.spotLightMap.value=O.state.spotLightMap,Ut.pointShadowMap.value=O.state.pointShadowMap,Ut.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=$t,X.uniformsList=null,$t}function tc(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Fo.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function ec(T,N){const W=Et.get(T);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function $h(T,N,W,X,O){N.isScene!==!0&&(N=te),R.resetTextureUnits();const ft=N.fog,wt=X.isMeshStandardMaterial?N.environment:null,Dt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:hs,It=(X.isMeshStandardMaterial?G:w).get(X.envMap||wt),Vt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,$t=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ut=!!W.morphAttributes.position,se=!!W.morphAttributes.normal,fe=!!W.morphAttributes.color;let pe=ei;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pe=v.toneMapping);const Ge=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=Ge!==void 0?Ge.length:0,Ft=Et.get(X),An=p.state.lights;if(Z===!0&&(_t===!0||T!==y)){const Je=T===y&&X.id===S;ht.setState(X,T,Je)}let ae=!1;X.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==An.state.version||Ft.outputColorSpace!==Dt||O.isBatchedMesh&&Ft.batching===!1||!O.isBatchedMesh&&Ft.batching===!0||O.isBatchedMesh&&Ft.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ft.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ft.instancing===!1||!O.isInstancedMesh&&Ft.instancing===!0||O.isSkinnedMesh&&Ft.skinning===!1||!O.isSkinnedMesh&&Ft.skinning===!0||O.isInstancedMesh&&Ft.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ft.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ft.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ft.instancingMorph===!1&&O.morphTexture!==null||Ft.envMap!==It||X.fog===!0&&Ft.fog!==ft||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ht.numPlanes||Ft.numIntersection!==ht.numIntersection)||Ft.vertexAlphas!==Vt||Ft.vertexTangents!==$t||Ft.morphTargets!==Ut||Ft.morphNormals!==se||Ft.morphColors!==fe||Ft.toneMapping!==pe||Ft.morphTargetsCount!==re)&&(ae=!0):(ae=!0,Ft.__version=X.version);let rn=Ft.currentProgram;ae===!0&&(rn=$s(X,N,O));let Ti=!1,Xe=!1,ms=!1;const me=rn.getUniforms(),mn=Ft.uniforms;if(pt.useProgram(rn.program)&&(Ti=!0,Xe=!0,ms=!0),X.id!==S&&(S=X.id,Xe=!0),Ti||y!==T){pt.buffers.depth.getReversed()?(at.copy(T.projectionMatrix),nd(at),id(at),me.setValue(L,"projectionMatrix",at)):me.setValue(L,"projectionMatrix",T.projectionMatrix),me.setValue(L,"viewMatrix",T.matrixWorldInverse);const Bn=me.map.cameraPosition;Bn!==void 0&&Bn.setValue(L,Ct.setFromMatrixPosition(T.matrixWorld)),St.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&me.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Xe=!0,ms=!0)}if(O.isSkinnedMesh){me.setOptional(L,O,"bindMatrix"),me.setOptional(L,O,"bindMatrixInverse");const Je=O.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),me.setValue(L,"boneTexture",Je.boneTexture,R))}O.isBatchedMesh&&(me.setOptional(L,O,"batchingTexture"),me.setValue(L,"batchingTexture",O._matricesTexture,R),me.setOptional(L,O,"batchingIdTexture"),me.setValue(L,"batchingIdTexture",O._indirectTexture,R),me.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&me.setValue(L,"batchingColorTexture",O._colorsTexture,R));const gs=W.morphAttributes;if((gs.position!==void 0||gs.normal!==void 0||gs.color!==void 0)&&$.update(O,W,rn),(Xe||Ft.receiveShadow!==O.receiveShadow)&&(Ft.receiveShadow=O.receiveShadow,me.setValue(L,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(mn.envMap.value=It,mn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(mn.envMapIntensity.value=N.environmentIntensity),Xe&&(me.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&jh(mn,ms),ft&&X.fog===!0&&vt.refreshFogUniforms(mn,ft),vt.refreshMaterialUniforms(mn,X,z,Y,p.state.transmissionRenderTarget[T.id]),Fo.upload(L,tc(Ft),mn,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Fo.upload(L,tc(Ft),mn,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&me.setValue(L,"center",O.center),me.setValue(L,"modelViewMatrix",O.modelViewMatrix),me.setValue(L,"normalMatrix",O.normalMatrix),me.setValue(L,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Je=X.uniformsGroups;for(let Bn=0,Hn=Je.length;Bn<Hn;Bn++){const nc=Je[Bn];I.update(nc,rn),I.bind(nc,rn)}}return rn}function jh(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Zh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,N,W){Et.get(T.texture).__webglTexture=N,Et.get(T.depthTexture).__webglTexture=W;const X=Et.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const W=Et.get(T);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,W=0){C=T,E=N,A=W;let X=!0,O=null,ft=!1,wt=!1;if(T){const It=Et.get(T);if(It.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(It.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(It.__hasExternalTextures)R.rebindTextures(T,Et.get(T.texture).__webglTexture,Et.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ut=T.depthTexture;if(It.__boundDepthTexture!==Ut){if(Ut!==null&&Et.has(Ut)&&(T.width!==Ut.image.width||T.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Vt=T.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(wt=!0);const $t=Et.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($t[N])?O=$t[N][W]:O=$t[N],ft=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?O=Et.get(T).__webglMultisampledFramebuffer:Array.isArray($t)?O=$t[W]:O=$t,P.copy(T.viewport),k.copy(T.scissor),B=T.scissorTest}else P.copy(Mt).multiplyScalar(z).floor(),k.copy(Nt).multiplyScalar(z).floor(),B=Qt;if(pt.bindFramebuffer(L.FRAMEBUFFER,O)&&X&&pt.drawBuffers(T,O),pt.viewport(P),pt.scissor(k),pt.setScissorTest(B),ft){const It=Et.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,It.__webglTexture,W)}else if(wt){const It=Et.get(T.texture),Vt=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,It.__webglTexture,W||0,Vt)}S=-1},this.readRenderTargetPixels=function(T,N,W,X,O,ft,wt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){pt.bindFramebuffer(L.FRAMEBUFFER,Dt);try{const It=T.texture,Vt=It.format,$t=It.type;if(!St.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-X&&W>=0&&W<=T.height-O&&L.readPixels(N,W,X,O,bt.convert(Vt),bt.convert($t),ft)}finally{const It=C!==null?Et.get(C).__webglFramebuffer:null;pt.bindFramebuffer(L.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(T,N,W,X,O,ft,wt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){const It=T.texture,Vt=It.format,$t=It.type;if(!St.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-X&&W>=0&&W<=T.height-O){pt.bindFramebuffer(L.FRAMEBUFFER,Dt);const Ut=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ut),L.bufferData(L.PIXEL_PACK_BUFFER,ft.byteLength,L.STREAM_READ),L.readPixels(N,W,X,O,bt.convert(Vt),bt.convert($t),0);const se=C!==null?Et.get(C).__webglFramebuffer:null;pt.bindFramebuffer(L.FRAMEBUFFER,se);const fe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ed(L,fe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ut),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ft),L.deleteBuffer(Ut),L.deleteSync(fe),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,W=0){T.isTexture!==!0&&(Cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-W),O=Math.floor(T.image.width*X),ft=Math.floor(T.image.height*X),wt=N!==null?N.x:0,Dt=N!==null?N.y:0;R.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,wt,Dt,O,ft),pt.unbindTexture()},this.copyTextureToTexture=function(T,N,W=null,X=null,O=0){T.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],N=arguments[2],O=arguments[3]||0,W=null);let ft,wt,Dt,It,Vt,$t,Ut,se,fe;const pe=T.isCompressedTexture?T.mipmaps[O]:T.image;W!==null?(ft=W.max.x-W.min.x,wt=W.max.y-W.min.y,Dt=W.isBox3?W.max.z-W.min.z:1,It=W.min.x,Vt=W.min.y,$t=W.isBox3?W.min.z:0):(ft=pe.width,wt=pe.height,Dt=pe.depth||1,It=0,Vt=0,$t=0),X!==null?(Ut=X.x,se=X.y,fe=X.z):(Ut=0,se=0,fe=0);const Ge=bt.convert(N.format),re=bt.convert(N.type);let Ft;N.isData3DTexture?(R.setTexture3D(N,0),Ft=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),Ft=L.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),Ft=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const An=L.getParameter(L.UNPACK_ROW_LENGTH),ae=L.getParameter(L.UNPACK_IMAGE_HEIGHT),rn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ti=L.getParameter(L.UNPACK_SKIP_ROWS),Xe=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,pe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,It),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,$t);const ms=T.isDataArrayTexture||T.isData3DTexture,me=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const mn=Et.get(T),gs=Et.get(N),Je=Et.get(mn.__renderTarget),Bn=Et.get(gs.__renderTarget);pt.bindFramebuffer(L.READ_FRAMEBUFFER,Je.__webglFramebuffer),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let Hn=0;Hn<Dt;Hn++)ms&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.get(T).__webglTexture,O,$t+Hn),T.isDepthTexture?(me&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.get(N).__webglTexture,O,fe+Hn),L.blitFramebuffer(It,Vt,ft,wt,Ut,se,ft,wt,L.DEPTH_BUFFER_BIT,L.NEAREST)):me?L.copyTexSubImage3D(Ft,O,Ut,se,fe+Hn,It,Vt,ft,wt):L.copyTexSubImage2D(Ft,O,Ut,se,fe+Hn,It,Vt,ft,wt);pt.bindFramebuffer(L.READ_FRAMEBUFFER,null),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else me?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Ft,O,Ut,se,fe,ft,wt,Dt,Ge,re,pe.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Ft,O,Ut,se,fe,ft,wt,Dt,Ge,pe.data):L.texSubImage3D(Ft,O,Ut,se,fe,ft,wt,Dt,Ge,re,pe):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Ut,se,ft,wt,Ge,re,pe.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Ut,se,pe.width,pe.height,Ge,pe.data):L.texSubImage2D(L.TEXTURE_2D,O,Ut,se,ft,wt,Ge,re,pe);L.pixelStorei(L.UNPACK_ROW_LENGTH,An),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ae),L.pixelStorei(L.UNPACK_SKIP_PIXELS,rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ti),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xe),O===0&&N.generateMipmaps&&L.generateMipmap(Ft),pt.unbindTexture()},this.copyTextureToTexture3D=function(T,N,W=null,X=null,O=0){return T.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,T=arguments[2],N=arguments[3],O=arguments[4]||0),Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,W,X,O)},this.initRenderTarget=function(T){Et.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),pt.unbindTexture()},this.resetState=function(){E=0,A=0,C=null,pt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class Va{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new Va(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ih extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fg extends Ue{constructor(t=null,e=1,n=1,s,o,r,a,c,l=Ze,h=Ze,f,u){super(null,r,a,c,l,h,s,o,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Hi=new ie,nl=new ie,_o=[],il=new Si,pg=new ie,ys=new et,bs=new us;class On extends et{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new el(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,pg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hi),il.copy(t.boundingBox).applyMatrix4(Hi),this.boundingBox.union(il)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hi),bs.copy(t.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),t.ray.intersectsSphere(bs)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Hi),nl.multiplyMatrices(n,Hi),ys.matrixWorld=nl,ys.raycast(t,_o);for(let r=0,a=_o.length;r<a;r++){const c=_o[r];c.instanceId=o,c.object=this,e.push(c)}_o.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new el(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fg(new Float32Array(s*this.count),s,this.count,Na,xn));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Uh extends ds{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ho=new D,Go=new D,sl=new ie,Ss=new Xo,vo=new us,Er=new D,ol=new D;class mg extends ye{constructor(t=new de,e=new Uh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Ho.fromBufferAttribute(e,s-1),Go.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ho.distanceTo(Go);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),vo.radius+=o,t.ray.intersectsSphere(vo)===!1)return;sl.copy(s).invert(),Ss.copy(t.ray).applyMatrix4(sl);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=d,m=g-1;_<m;_+=l){const p=h.getX(_),x=h.getX(_+1),M=xo(this,t,Ss,c,p,x);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=xo(this,t,Ss,c,_,m);p&&e.push(p)}}else{const d=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=d,m=g-1;_<m;_+=l){const p=xo(this,t,Ss,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=xo(this,t,Ss,c,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function xo(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Ho.fromBufferAttribute(r,s),Go.fromBufferAttribute(r,o),e.distanceSqToSegment(Ho,Go,Er,ol)>n)return;Er.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Er);if(!(c<t.near||c>t.far))return{distance:c,point:ol.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Ws extends Ue{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const h=n[s],u=n[s+1]-h,d=(r-h)/u;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new st:new D);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],o=[],r=[],a=new D,c=new ie;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new D)}o[0]=new D,r[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Se(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(c.makeRotationAxis(a,g))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(Se(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wa extends En{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new st){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class gg extends Wa{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Xa(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,f){let u=(r-o)/l-(a-o)/(l+h)+(a-r)/h,d=(a-r)/h-(c-r)/(h+f)+(c-a)/f;u*=h,d*=h,s(r,a,u,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Mo=new D,Tr=new Xa,Ar=new Xa,Rr=new Xa;class _g extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(Mo.subVectors(s[0],s[1]).add(s[0]),l=Mo);const f=s[a%o],u=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Mo.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Mo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Tr.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,_,m),Ar.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,_,m),Rr.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Tr.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Ar.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Rr.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(Tr.calc(c),Ar.calc(c),Rr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rl(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function vg(i,t){const e=1-i;return e*e*t}function xg(i,t){return 2*(1-i)*i*t}function Mg(i,t){return i*i*t}function Us(i,t,e,n){return vg(i,t)+xg(i,e)+Mg(i,n)}function yg(i,t){const e=1-i;return e*e*e*t}function bg(i,t){const e=1-i;return 3*e*e*i*t}function Sg(i,t){return 3*(1-i)*i*i*t}function wg(i,t){return i*i*i*t}function Ns(i,t,e,n,s){return yg(i,t)+bg(i,e)+Sg(i,n)+wg(i,s)}class Nh extends En{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ns(t,s.x,o.x,r.x,a.x),Ns(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Eg extends En{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ns(t,s.x,o.x,r.x,a.x),Ns(t,s.y,o.y,r.y,a.y),Ns(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Oh extends En{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tg extends En{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fh extends En{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Us(t,s.x,o.x,r.x),Us(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ag extends En{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Us(t,s.x,o.x,r.x),Us(t,s.y,o.y,r.y),Us(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kh extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(rl(a,c.x,l.x,h.x,f.x),rl(a,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var Ea=Object.freeze({__proto__:null,ArcCurve:gg,CatmullRomCurve3:_g,CubicBezierCurve:Nh,CubicBezierCurve3:Eg,EllipseCurve:Wa,LineCurve:Oh,LineCurve3:Tg,QuadraticBezierCurve:Fh,QuadraticBezierCurve3:Ag,SplineCurve:kh});class Rg extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ea[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ea[s.type]().fromJSON(s))}return this}}class al extends Rg{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Oh(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Fh(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Nh(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new kh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new Wa(t,e,n,s,o,r,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class qa extends de{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Se(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],h=1/e,f=new D,u=new st,d=new D,g=new D,_=new D;let m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let x=0;x<=e;x++){const M=n+x*h*s,v=Math.sin(M),b=Math.cos(M);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*v,f.y=t[E].y,f.z=t[E].x*b,r.push(f.x,f.y,f.z),u.x=x/e,u.y=E/(t.length-1),a.push(u.x,u.y);const A=c[3*E+0]*v,C=c[3*E+1],S=c[3*E+0]*b;l.push(A,C,S)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){const v=M+x*t.length,b=v,E=v+t.length,A=v+t.length+1,C=v+1;o.push(b,E,C),o.push(A,C,E)}this.setIndex(o),this.setAttribute("position",new Xt(r,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.points,t.segments,t.phiStart,t.phiLength)}}class ue extends de{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],f=[],u=[],d=[];let g=0;const _=[],m=n/2;let p=0;x(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(d,2));function x(){const v=new D,b=new D;let E=0;const A=(e-t)/n;for(let C=0;C<=o;C++){const S=[],y=C/o,P=y*(e-t)+t;for(let k=0;k<=s;k++){const B=k/s,q=B*c+a,j=Math.sin(q),U=Math.cos(q);b.x=P*j,b.y=-y*n+m,b.z=P*U,f.push(b.x,b.y,b.z),v.set(j,A,U).normalize(),u.push(v.x,v.y,v.z),d.push(B,1-y),S.push(g++)}_.push(S)}for(let C=0;C<s;C++)for(let S=0;S<o;S++){const y=_[S][C],P=_[S+1][C],k=_[S+1][C+1],B=_[S][C+1];(t>0||S!==0)&&(h.push(y,P,B),E+=3),(e>0||S!==o-1)&&(h.push(P,k,B),E+=3)}l.addGroup(p,E,0),p+=E}function M(v){const b=g,E=new st,A=new D;let C=0;const S=v===!0?t:e,y=v===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,m*y,0),u.push(0,y,0),d.push(.5,.5),g++;const P=g;for(let k=0;k<=s;k++){const q=k/s*c+a,j=Math.cos(q),U=Math.sin(q);A.x=S*U,A.y=m*y,A.z=S*j,f.push(A.x,A.y,A.z),u.push(0,y,0),E.x=j*.5+.5,E.y=U*.5*y+.5,d.push(E.x,E.y),g++}for(let k=0;k<s;k++){const B=b+k,q=P+k;v===!0?h.push(q,q+1,B):h.push(q+1,q,B),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vi extends ue{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new vi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yo extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),h(),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(o.slice(),3)),this.setAttribute("uv",new Xt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new D,v=new D,b=new D;for(let E=0;E<e.length;E+=3)d(e[E+0],M),d(e[E+1],v),d(e[E+2],b),c(M,v,b,x)}function c(x,M,v,b){const E=b+1,A=[];for(let C=0;C<=E;C++){A[C]=[];const S=x.clone().lerp(v,C/E),y=M.clone().lerp(v,C/E),P=E-C;for(let k=0;k<=P;k++)k===0&&C===E?A[C][k]=S:A[C][k]=S.clone().lerp(y,k/P)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){const y=Math.floor(S/2);S%2===0?(u(A[C][y+1]),u(A[C+1][y]),u(A[C][y])):(u(A[C][y+1]),u(A[C+1][y+1]),u(A[C+1][y]))}}function l(x){const M=new D;for(let v=0;v<o.length;v+=3)M.x=o[v+0],M.y=o[v+1],M.z=o[v+2],M.normalize().multiplyScalar(x),o[v+0]=M.x,o[v+1]=M.y,o[v+2]=M.z}function h(){const x=new D;for(let M=0;M<o.length;M+=3){x.x=o[M+0],x.y=o[M+1],x.z=o[M+2];const v=m(x)/2/Math.PI+.5,b=p(x)/Math.PI+.5;r.push(v,1-b)}g(),f()}function f(){for(let x=0;x<r.length;x+=6){const M=r[x+0],v=r[x+2],b=r[x+4],E=Math.max(M,v,b),A=Math.min(M,v,b);E>.9&&A<.1&&(M<.2&&(r[x+0]+=1),v<.2&&(r[x+2]+=1),b<.2&&(r[x+4]+=1))}}function u(x){o.push(x.x,x.y,x.z)}function d(x,M){const v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const x=new D,M=new D,v=new D,b=new D,E=new st,A=new st,C=new st;for(let S=0,y=0;S<o.length;S+=9,y+=6){x.set(o[S+0],o[S+1],o[S+2]),M.set(o[S+3],o[S+4],o[S+5]),v.set(o[S+6],o[S+7],o[S+8]),E.set(r[y+0],r[y+1]),A.set(r[y+2],r[y+3]),C.set(r[y+4],r[y+5]),b.copy(x).add(M).add(v).divideScalar(3);const P=m(b);_(E,y+0,x,P),_(A,y+2,M,P),_(C,y+4,v,P)}}function _(x,M,v,b){b<0&&x.x===1&&(r[M]=x.x-1),v.x===0&&v.z===0&&(r[M]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.vertices,t.indices,t.radius,t.details)}}class wi extends al{constructor(t){super(t),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new al().fromJSON(s))}return this}}const Cg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=zh(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,f,u,d;if(n&&(o=Ug(i,t,o,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)f=i[g],u=i[g+1],f<a&&(a=f),u<c&&(c=u),f>l&&(l=f),u>h&&(h=u);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return zs(o,r,e,a,c,d,0),r}};function zh(i,t,e,n,s){let o,r;if(s===Xg(i,t,e,n)>0)for(o=t;o<e;o+=n)r=cl(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=cl(o,i[o],i[o+1],r);return r&&$o(r,r.next)&&(Hs(r),r=r.next),r}function xi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($o(e,e.next)||_e(e.prev,e,e.next)===0)){if(Hs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zs(i,t,e,n,s,o,r){if(!i)return;!r&&o&&zg(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?Lg(i,n,s,o):Pg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Hs(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=Dg(xi(i),t,e),zs(i,t,e,n,s,o,2)):r===2&&Ig(i,t,e,n,s,o):zs(xi(i),t,e,n,s,o,1);break}}}function Pg(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=s<o?s<r?s:r:o<r?o:r,f=a<c?a<l?a:l:c<l?c:l,u=s>o?s>r?s:r:o>r?o:r,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&$i(s,a,o,c,r,l,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lg(i,t,e,n){const s=i.prev,o=i,r=i.next;if(_e(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,f=o.y,u=r.y,d=a<c?a<l?a:l:c<l?c:l,g=h<f?h<u?h:u:f<u?f:u,_=a>c?a>l?a:l:c>l?c:l,m=h>f?h>u?h:u:f>u?f:u,p=Ta(d,g,t,e,n),x=Ta(_,m,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=x;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==r&&$i(a,h,c,f,l,u,M.x,M.y)&&_e(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&$i(a,h,c,f,l,u,v.x,v.y)&&_e(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==r&&$i(a,h,c,f,l,u,M.x,M.y)&&_e(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&$i(a,h,c,f,l,u,v.x,v.y)&&_e(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Dg(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!$o(s,o)&&Bh(s,n,n.next,o)&&Bs(s,o)&&Bs(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Hs(n),Hs(n.next),n=i=o),n=n.next}while(n!==i);return xi(n)}function Ig(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Gg(r,a)){let c=Hh(r,a);r=xi(r,r.next),c=xi(c,c.next),zs(r,t,e,n,s,o,0),zs(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Ug(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=zh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Hg(l));for(s.sort(Ng),o=0;o<s.length;o++)e=Og(s[o],e);return e}function Ng(i,t){return i.x-t.x}function Og(i,t){const e=Fg(i,t);if(!e)return t;const n=Hh(e,i);return xi(n,n.next),xi(e,e.next)}function Fg(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=o&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,f;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&$i(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(o-e.x),Bs(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&kg(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function kg(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function zg(i,t,e,n){let s=i;do s.z===0&&(s.z=Ta(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Bg(s)}function Bg(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function Ta(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Hg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $i(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Gg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Vg(i,t)&&(Bs(i,t)&&Bs(t,i)&&Wg(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||$o(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $o(i,t){return i.x===t.x&&i.y===t.y}function Bh(i,t,e,n){const s=bo(_e(i,t,e)),o=bo(_e(i,t,n)),r=bo(_e(e,n,i)),a=bo(_e(e,n,t));return!!(s!==o&&r!==a||s===0&&yo(i,e,t)||o===0&&yo(i,n,t)||r===0&&yo(e,i,n)||a===0&&yo(e,t,n))}function yo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function bo(i){return i>0?1:i<0?-1:0}function Vg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Bh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Bs(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function Wg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hh(i,t){const e=new Aa(i.i,i.x,i.y),n=new Aa(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function cl(i,t,e,n){const s=new Aa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Aa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xg(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Mn{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Mn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];ll(t),hl(n,t);let r=t.length;e.forEach(ll);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,hl(n,e[c]);const a=Cg.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function ll(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function hl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class as extends de{constructor(t=new wi([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new Xt(s,3)),this.setAttribute("uv",new Xt(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:qg;let M,v=!1,b,E,A,C;p&&(M=p.getSpacedPoints(h),v=!0,u=!1,b=p.computeFrenetFrames(h,!1),E=new D,A=new D,C=new D),u||(m=0,d=0,g=0,_=0);const S=a.extractPoints(l);let y=S.shape;const P=S.holes;if(!Mn.isClockWise(y)){y=y.reverse();for(let nt=0,ct=P.length;nt<ct;nt++){const L=P[nt];Mn.isClockWise(L)&&(P[nt]=L.reverse())}}const B=Mn.triangulateShape(y,P),q=y;for(let nt=0,ct=P.length;nt<ct;nt++){const L=P[nt];y=y.concat(L)}function j(nt,ct,L){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ct,L)}const U=y.length,Y=B.length;function z(nt,ct,L){let lt,ot,St;const pt=nt.x-ct.x,Bt=nt.y-ct.y,Et=L.x-nt.x,R=L.y-nt.y,w=pt*pt+Bt*Bt,G=pt*R-Bt*Et;if(Math.abs(G)>Number.EPSILON){const J=Math.sqrt(w),it=Math.sqrt(Et*Et+R*R),Q=ct.x-Bt/J,Lt=ct.y+pt/J,vt=L.x-R/it,At=L.y+Et/it,Jt=((vt-Q)*R-(At-Lt)*Et)/(pt*R-Bt*Et);lt=Q+pt*Jt-nt.x,ot=Lt+Bt*Jt-nt.y;const ht=lt*lt+ot*ot;if(ht<=2)return new st(lt,ot);St=Math.sqrt(ht/2)}else{let J=!1;pt>Number.EPSILON?Et>Number.EPSILON&&(J=!0):pt<-Number.EPSILON?Et<-Number.EPSILON&&(J=!0):Math.sign(Bt)===Math.sign(R)&&(J=!0),J?(lt=-Bt,ot=pt,St=Math.sqrt(w)):(lt=pt,ot=Bt,St=Math.sqrt(w/2))}return new st(lt/St,ot/St)}const ut=[];for(let nt=0,ct=q.length,L=ct-1,lt=nt+1;nt<ct;nt++,L++,lt++)L===ct&&(L=0),lt===ct&&(lt=0),ut[nt]=z(q[nt],q[L],q[lt]);const mt=[];let Mt,Nt=ut.concat();for(let nt=0,ct=P.length;nt<ct;nt++){const L=P[nt];Mt=[];for(let lt=0,ot=L.length,St=ot-1,pt=lt+1;lt<ot;lt++,St++,pt++)St===ot&&(St=0),pt===ot&&(pt=0),Mt[lt]=z(L[lt],L[St],L[pt]);mt.push(Mt),Nt=Nt.concat(Mt)}for(let nt=0;nt<m;nt++){const ct=nt/m,L=d*Math.cos(ct*Math.PI/2),lt=g*Math.sin(ct*Math.PI/2)+_;for(let ot=0,St=q.length;ot<St;ot++){const pt=j(q[ot],ut[ot],lt);at(pt.x,pt.y,-L)}for(let ot=0,St=P.length;ot<St;ot++){const pt=P[ot];Mt=mt[ot];for(let Bt=0,Et=pt.length;Bt<Et;Bt++){const R=j(pt[Bt],Mt[Bt],lt);at(R.x,R.y,-L)}}}const Qt=g+_;for(let nt=0;nt<U;nt++){const ct=u?j(y[nt],Nt[nt],Qt):y[nt];v?(A.copy(b.normals[0]).multiplyScalar(ct.x),E.copy(b.binormals[0]).multiplyScalar(ct.y),C.copy(M[0]).add(A).add(E),at(C.x,C.y,C.z)):at(ct.x,ct.y,0)}for(let nt=1;nt<=h;nt++)for(let ct=0;ct<U;ct++){const L=u?j(y[ct],Nt[ct],Qt):y[ct];v?(A.copy(b.normals[nt]).multiplyScalar(L.x),E.copy(b.binormals[nt]).multiplyScalar(L.y),C.copy(M[nt]).add(A).add(E),at(C.x,C.y,C.z)):at(L.x,L.y,f/h*nt)}for(let nt=m-1;nt>=0;nt--){const ct=nt/m,L=d*Math.cos(ct*Math.PI/2),lt=g*Math.sin(ct*Math.PI/2)+_;for(let ot=0,St=q.length;ot<St;ot++){const pt=j(q[ot],ut[ot],lt);at(pt.x,pt.y,f+L)}for(let ot=0,St=P.length;ot<St;ot++){const pt=P[ot];Mt=mt[ot];for(let Bt=0,Et=pt.length;Bt<Et;Bt++){const R=j(pt[Bt],Mt[Bt],lt);v?at(R.x,R.y+M[h-1].y,M[h-1].x+L):at(R.x,R.y,f+L)}}}H(),Z();function H(){const nt=s.length/3;if(u){let ct=0,L=U*ct;for(let lt=0;lt<Y;lt++){const ot=B[lt];Rt(ot[2]+L,ot[1]+L,ot[0]+L)}ct=h+m*2,L=U*ct;for(let lt=0;lt<Y;lt++){const ot=B[lt];Rt(ot[0]+L,ot[1]+L,ot[2]+L)}}else{for(let ct=0;ct<Y;ct++){const L=B[ct];Rt(L[2],L[1],L[0])}for(let ct=0;ct<Y;ct++){const L=B[ct];Rt(L[0]+U*h,L[1]+U*h,L[2]+U*h)}}n.addGroup(nt,s.length/3-nt,0)}function Z(){const nt=s.length/3;let ct=0;_t(q,ct),ct+=q.length;for(let L=0,lt=P.length;L<lt;L++){const ot=P[L];_t(ot,ct),ct+=ot.length}n.addGroup(nt,s.length/3-nt,1)}function _t(nt,ct){let L=nt.length;for(;--L>=0;){const lt=L;let ot=L-1;ot<0&&(ot=nt.length-1);for(let St=0,pt=h+m*2;St<pt;St++){const Bt=U*St,Et=U*(St+1),R=ct+lt+Bt,w=ct+ot+Bt,G=ct+ot+Et,J=ct+lt+Et;Ct(R,w,G,J)}}}function at(nt,ct,L){c.push(nt),c.push(ct),c.push(L)}function Rt(nt,ct,L){kt(nt),kt(ct),kt(L);const lt=s.length/3,ot=x.generateTopUV(n,s,lt-3,lt-2,lt-1);te(ot[0]),te(ot[1]),te(ot[2])}function Ct(nt,ct,L,lt){kt(nt),kt(ct),kt(lt),kt(ct),kt(L),kt(lt);const ot=s.length/3,St=x.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);te(St[0]),te(St[1]),te(St[3]),te(St[1]),te(St[2]),te(St[3])}function kt(nt){s.push(c[nt*3+0]),s.push(c[nt*3+1]),s.push(c[nt*3+2])}function te(nt){o.push(nt.x),o.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Yg(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ea[s.type]().fromJSON(s)),new as(n,t.options)}}const qg={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new st(o,r),new st(a,c),new st(l,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new st(r,1-c),new st(l,1-f),new st(u,1-g),new st(_,1-p)]:[new st(a,1-c),new st(h,1-f),new st(d,1-g),new st(m,1-p)]}};function Yg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class nn extends Yo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nn(t.radius,t.detail)}}class Ya extends Yo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ya(t.radius,t.detail)}}class $a extends de{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let f=t;const u=(e-t)/s,d=new D,g=new st;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=o+m/n*r;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,M=x,v=x+n+1,b=x+n+2,E=x+1;a.push(M,v,E),a.push(v,b,E)}}this.setIndex(a),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $a(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ja extends de{constructor(t=new wi([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Xt(s,3)),this.setAttribute("normal",new Xt(o,3)),this.setAttribute("uv",new Xt(r,2));function l(h){const f=s.length/3,u=h.extractPoints(e);let d=u.shape;const g=u.holes;Mn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const x=g[m];Mn.isClockWise(x)===!0&&(g[m]=x.reverse())}const _=Mn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const x=g[m];d=d.concat(x)}for(let m=0,p=d.length;m<p;m++){const x=d[m];s.push(x.x,x.y,0),o.push(0,0,1),r.push(x.x,x.y)}for(let m=0,p=_.length;m<p;m++){const x=_[m],M=x[0]+f,v=x[1]+f,b=x[2]+f;n.push(M,v,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return $g(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new ja(n,t.curveSegments)}}function $g(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class sn extends de{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],f=new D,u=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let v=0;p===0&&r===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const E=b/e;f.x=-t*Math.cos(s+E*o)*Math.sin(r+M*a),f.y=t*Math.cos(r+M*a),f.z=t*Math.sin(s+E*o)*Math.sin(r+M*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),m.push(E+v,1-M),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=h[p][x+1],v=h[p][x],b=h[p+1][x],E=h[p+1][x+1];(p!==0||r>0)&&d.push(M,v,E),(p!==n-1||c<Math.PI)&&d.push(v,b,E)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ei extends de{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new D,f=new D,u=new D;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*o,m=d/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,x=(s+1)*d+g;r.push(_,m,x),r.push(m,p,x)}this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ee extends ds{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ph,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Za extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class jg extends Za{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Cr=new ie,ul=new D,dl=new D;class Gh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ha,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ul.setFromMatrixPosition(t.matrixWorld),e.position.copy(ul),dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dl),e.updateMatrixWorld(),Cr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Zg extends Gh{constructor(){super(new je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=os*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Kg extends Za{constructor(t,e,n=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new Zg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jg extends Gh{constructor(){super(new Ah(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qg extends Za{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Jg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class t_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=fl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function fl(){return performance.now()}const pl=new ie;class e_{constructor(t,e,n=0,s=1/0){this.ray=new Xo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pl),this}intersectObject(t,e=!0,n=[]){return Ra(t,this,n,e),n.sort(ml),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Ra(t[s],this,n,e);return n.sort(ml),n}}function ml(i,t){return i.distance-t.distance}function Ra(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)Ra(o[r],t,e,!0)}}class gl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class n_ extends yi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);const _l={type:"change"},Ka={type:"start"},Vh={type:"end"},So=new Xo,vl=new Zn,i_=Math.cos(70*Fs.DEG2RAD),be=new D,Ve=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pr=1e-6;class s_ extends n_{constructor(t,e=null){super(t,e),this.state=he.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new yn,this._lastTargetPosition=new D,this._quat=new yn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gl,this._sphericalDelta=new gl,this._scale=1,this._panOffset=new D,this._rotateStart=new st,this._rotateEnd=new st,this._rotateDelta=new st,this._panStart=new st,this._panEnd=new st,this._panDelta=new st,this._dollyStart=new st,this._dollyEnd=new st,this._dollyDelta=new st,this._dollyDirection=new D,this._mouse=new st,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=r_.bind(this),this._onPointerDown=o_.bind(this),this._onPointerUp=a_.bind(this),this._onContextMenu=p_.bind(this),this._onMouseWheel=h_.bind(this),this._onKeyDown=u_.bind(this),this._onTouchStart=d_.bind(this),this._onTouchMove=f_.bind(this),this._onMouseDown=c_.bind(this),this._onMouseMove=l_.bind(this),this._interceptControlDown=m_.bind(this),this._interceptControlUp=g_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_l),this.update(),this.state=he.NONE}update(t=null){const e=this.object.position;be.copy(e).sub(this.target),be.applyQuaternion(this._quat),this._spherical.setFromVector3(be),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ve:n>Math.PI&&(n-=Ve),s<-Math.PI?s+=Ve:s>Math.PI&&(s-=Ve),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(be.setFromSpherical(this._spherical),be.applyQuaternion(this._quatInverse),e.copy(this.target).add(be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=be.length();r=this._clampDistance(a*this._scale);const c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(So.origin.copy(this.object.position),So.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(So.direction))<i_?this.object.lookAt(this.target):(vl.setFromNormalAndCoplanarPoint(this.object.up,this.target),So.intersectPlane(vl,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Pr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pr||this._lastTargetPosition.distanceToSquared(this.target)>Pr?(this.dispatchEvent(_l),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ve/60*this.autoRotateSpeed*t:Ve/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){be.setFromMatrixColumn(e,0),be.multiplyScalar(-t),this._panOffset.add(be)}_panUp(t,e){this.screenSpacePanning===!0?be.setFromMatrixColumn(e,1):(be.setFromMatrixColumn(e,0),be.crossVectors(this.object.up,be)),be.multiplyScalar(t),this._panOffset.add(be)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;be.copy(s).sub(this.target);let o=be.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new st,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function o_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function r_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function a_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vh),this.state=he.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function c_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=he.DOLLY;break;case Zi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=he.ROTATE}break;case Zi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(Ka)}function l_(i){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function h_(i){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(i.preventDefault(),this.dispatchEvent(Ka),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Vh))}function u_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function d_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=he.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=he.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(Ka)}function f_(i){switch(this._trackPointer(i),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=he.NONE}}function p_(i){this.enabled!==!1&&i.preventDefault()}function m_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function g_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}async function __(i){const t=await fetch(i);if(!t.ok)throw new Error(`Failed to load ${i}: ${t.status}`);return t.json()}class v_{constructor(t){F(this,"n");F(this,"x");F(this,"z");F(this,"s");F(this,"length");F(this,"vtx");F(this,"vtz");const e=this.n=t.length/2;this.x=new Float64Array(e),this.z=new Float64Array(e),this.s=new Float64Array(e);for(let n=0;n<e;n++)this.x[n]=t[n*2],this.z[n]=t[n*2+1],n>0&&(this.s[n]=this.s[n-1]+Math.hypot(this.x[n]-this.x[n-1],this.z[n]-this.z[n-1]));this.length=this.s[e-1],this.vtx=new Float64Array(e),this.vtz=new Float64Array(e);for(let n=0;n<e;n++){const s=Math.max(0,n-1),o=Math.min(e-1,n+1),r=this.x[o]-this.x[s],a=this.z[o]-this.z[s],c=Math.hypot(r,a)||1;this.vtx[n]=r/c,this.vtz[n]=a/c}}segIndex(t){let e=0,n=this.n-2;for(;e<n;){const s=e+n+1>>1;this.s[s]<=t?e=s:n=s-1}return e}frame(t,e={x:0,z:0,tx:0,tz:1,nx:-1,nz:0}){const n=this.segIndex(t),s=(t-this.s[n])/(this.s[n+1]-this.s[n]||1);e.x=this.x[n]+(this.x[n+1]-this.x[n])*s,e.z=this.z[n]+(this.z[n+1]-this.z[n])*s;let o=this.vtx[n]+(this.vtx[n+1]-this.vtx[n])*s,r=this.vtz[n]+(this.vtz[n+1]-this.vtz[n])*s;const a=Math.hypot(o,r)||1;return o/=a,r/=a,e.tx=o,e.tz=r,e.nx=-r,e.nz=o,e}point(t,e){const n=this.frame(t);return[n.x+n.nx*e,n.z+n.nz*e]}project(t,e,n=-1){let s,o;if(n>=0){const h=this.segIndex(n);s=Math.max(0,h-60),o=Math.min(this.n-2,h+60)}else{let h=1/0,f=0;for(let u=0;u<this.n;u+=8){const d=(t-this.x[u])**2+(e-this.z[u])**2;d<h&&(h=d,f=u)}s=Math.max(0,f-24),o=Math.min(this.n-2,f+24)}let r=1/0,a=0,c=1;for(let h=s;h<=o;h++){const f=this.x[h],u=this.z[h],d=this.x[h+1]-f,g=this.z[h+1]-u,_=d*d+g*g||1e-9;let m=((t-f)*d+(e-u)*g)/_;m=m<0?0:m>1?1:m;const p=f+d*m,x=u+g*m,M=(t-p)**2+(e-x)**2;M<r&&(r=M,a=this.s[h]+Math.sqrt(_)*m,c=(t-f)*-g+(e-u)*d>=0?1:-1)}const l=Math.sqrt(r);return{s:a,d:l*c,dist:l}}}function pn(i,t,e=0){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const xl=i=>i*i*(3-2*i);function x_(i,t,e=0){const n=Math.floor(i),s=Math.floor(t),o=xl(i-n),r=xl(t-s),a=pn(n,s,e),c=pn(n+1,s,e),l=pn(n,s+1,e),h=pn(n+1,s+1,e);return(a+(c-a)*o+(l-a)*r+(a-c-l+h)*o*r)*2-1}function Qn(i,t,e=4,n=0){let s=0,o=.5,r=1;for(let a=0;a<e;a++)s+=o*x_(i*r,t*r,n+a*17),o*=.5,r*=2.03;return s}function cs(i){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const xe=(i,t,e)=>i<t?t:i>e?e:i,Wi=(i,t,e)=>i+(t-i)*e,Pe=(i,t,e)=>{const n=xe((e-i)/(t-i),0,1);return n*n*(3-2*n)},dn=5.2,Jn=2.2,Ca=3.1,M_=1.6,y_=10.5,wo=22*4.4,b_=.8,S_=7,w_=3,E_=.04,Ml=.08;class T_{constructor(t,e,n,s=[],o=0){F(this,"bodies",[]);F(this,"gates",[]);F(this,"groups",[]);F(this,"events",[]);F(this,"hwTable");F(this,"hwStep",.5);F(this,"overflowCooldown",0);this.length=n,this.windingHoles=s;const r=[];for(const u of[...t].sort((d,g)=>d.s0-g.s0)){const d=r.at(-1);d&&Math.abs(d.at(-1).s1-u.s0)<4?d.push(u):r.push([u])}let a=o,c=0,l=0;for(const u of r){const d=u.length>1,g=d?A_(u):u[0].name;this.bodies.push({kind:"pound",s0:c,s1:u[0].s0,level:a,lo:a,hi:a,label:"the canal"});const _={name:g,staircase:d,gates:[],bodies:[this.bodies.length-1]};this.groups.push(_);for(let m=0;m<u.length;m++){const p=u[m],x=m===0?p.s0:u[m-1].s1,M=a,v=a+p.rise,b=d?m>0:l++%2===1,E=d?`chamber ${m+1}`:"the lock";this.bodies.push({kind:"chamber",s0:x,s1:p.s1,level:b?v:M,lo:M,hi:v,lockName:g,label:E}),_.bodies.push(this.bodies.length-1),a=v}c=u.at(-1).s1;for(let m=0;m<=u.length;m++){const p=this.bodies.length-1-u.length+m,x=m===0?"bottom gates":m===u.length?"top gates":u.length===2?"middle gates":u.length===3?`middle gates (${m===1?"lower":"upper"})`:`middle gates ${m}`,M={s:m===0?u[0].s0:u[m-1].s1,below:p,above:p+1,open:0,wantOpen:!1,paddle:0,wantPaddle:!1,flow:0,lockName:g,label:x,group:_};this.gates.push(M),_.gates.push(M)}_.bodies.push(this.bodies.length)}this.bodies.push({kind:"pound",s0:c,s1:n,level:a,lo:a,hi:a,label:"the canal"});const h=Math.ceil(n/this.hwStep)+1;this.hwTable=new Float32Array(h);const f=e.filter(u=>u.kind==="road"&&u.w<12);for(let u=0;u<h;u++){const d=u*this.hwStep;let g=dn;for(const _ of this.bodies){if(_.kind!=="chamber")continue;const m=Math.max(_.s0-d,d-_.s1,0);g=Math.min(g,Jn+(dn-Jn)*Pe(.5,9,m))}for(const _ of f){const m=Math.max(Math.abs(d-_.s)-_.w/2-3.5,0);g=Math.min(g,Ca+(dn-Ca)*Pe(0,7,m))}for(const _ of s){const m=Math.abs(d-_);m<26&&(g=Math.max(g,dn+(y_-dn)*Pe(26,9,m)))}this.hwTable[u]=g}}bodyIndexAt(t){for(let e=0;e<this.bodies.length;e++)if(t<this.bodies[e].s1)return e;return this.bodies.length-1}levelAt(t){return this.bodies[this.bodyIndexAt(t)].level}bedAt(t){return this.bodies[this.bodyIndexAt(t)].lo-M_}halfWidthAt(t){const e=xe(t/this.hwStep,0,this.hwTable.length-1),n=Math.floor(e),s=e-n,o=this.hwTable[n],r=this.hwTable[Math.min(n+1,this.hwTable.length-1)];return o+(r-o)*s}levelsMatch(t){return Math.abs(this.bodies[t.below].level-this.bodies[t.above].level)<E_}openBlocker(t){return this.levelsMatch(t)?null:`The water's ${Math.abs(this.bodies[t.below].level-this.bodies[t.above].level).toFixed(1)} m higher on one side, so the gates won't budge. Raise the paddles first.`}toggleGate(t,e){if(t.wantOpen)return e?"The boat's in the way of the gates.":(t.wantOpen=!1,null);const n=this.openBlocker(t);return n||(t.wantOpen=!0,null)}togglePaddle(t){t.wantPaddle=!t.wantPaddle}gateBlocks(t){return t.open<.97}update(t){this.overflowCooldown-=t;for(const n of this.gates)n.open=xe(n.open+(n.wantOpen?1:-1)*(t/S_),0,1),n.paddle=xe(n.paddle+(n.wantPaddle?1:-1)*(t/w_),0,1);const e=this.bodies.map(n=>n.kind==="chamber"?n.lo:-1/0);for(let n=!0;n;){n=!1;for(const s of this.gates){if(s.open<=.02)continue;const o=Math.max(e[s.below],e[s.above]);(e[s.below]!==o||e[s.above]!==o)&&(e[s.below]=e[s.above]=o,n=!0)}}for(const n of this.gates){const s=b_*n.paddle+(n.open>.02?40*n.open:0),o=this.bodies[n.below],a=this.bodies[n.above].level-o.level;if(n.flow=0,s<=0||Math.abs(a)<1e-5)continue;const[c,l]=a>0?[n.above,n.below]:[n.below,n.above],h=this.bodies[c],f=this.bodies[l],u=h.kind==="chamber",d=f.kind==="chamber";if(!u&&!d)continue;let g=s*Math.sqrt(2*9.81*Math.abs(a))*t;u&&(g=Math.min(g,Math.max(0,h.level-e[c])*wo)),g=Math.min(g,Math.abs(a)*wo/(u&&d?2:1)),!(g<=0)&&(u&&(h.level-=g/wo),d&&(f.level+=g/wo),n.flow=Math.sign(a)*(g/t))}this.bodies.forEach((n,s)=>{if(n.kind!=="chamber"||n.level<=n.hi+Ml||(n.level=n.hi+Ml,this.overflowCooldown>0))return;const o=this.gates.find(c=>c.paddle>.05&&(c.below===s&&this.bodies[c.above].level>n.level||c.above===s&&this.bodies[c.below].level>n.level)),r=this.gates.find(c=>c.below===s||c.above===s).group,a=r.staircase?`${n.label} of ${r.name}`:r.name;this.events.push({text:o?`${yl(a)} is overflowing: the paddles on the ${o.label} are still up.`:`${yl(a)} is overflowing!`,kind:"warn",group:r}),this.overflowCooldown=12})}}const yl=i=>i[0].toUpperCase()+i.slice(1);function A_(i){const t=i[0].name.split(" ")[0];return i.every(e=>e.name.startsWith(t))?`${t} Staircase`:`${i[0].name} flight`}const R_=2,Lr=1.1,bl=44,Eo=8,C_=.8,ce=1,We={bed:new Ot("#2a2f24"),wallStone:new Ot("#77706a"),wallSandstone:new Ot("#9b5644"),coping:new Ot("#bdb3a3"),towpath:new Ot("#b59d78"),grass:new Ot("#6f9a4c"),grassDark:new Ot("#5c8a42"),field:new Ot("#86a85a"),paved:new Ot("#8f8b84"),park:new Ot("#5e9445")};class P_{constructor(t,e,n){F(this,"bank");F(this,"smoothBank");F(this,"bankStep",2);F(this,"riverLevel");F(this,"riverDist",null);F(this,"riverGrid",{x0:0,z0:0,w:0,h:0,cell:20});F(this,"urbanAt",()=>0);F(this,"parkAt",()=>!1);F(this,"cuttings",[]);this.route=t,this.ww=e,this.bounds=n;const s=Math.ceil(t.length/this.bankStep)+1,o=new Float32Array(s);for(let r=0;r<s;r++){const a=r*this.bankStep;let c=-1/0;for(const l of e.bodies)l.s1>a-4&&l.s0<a+4&&(c=Math.max(c,l.hi));o[r]=c+C_}this.bank=o,this.smoothBank=wl(wl(o,15),15),this.riverLevel=e.bodies[0].lo-6}bankTop(t){return Sl(this.bank,t/this.bankStep)}setRivers(t){const{bounds:e}=this,n=this.riverGrid.cell,s=Math.ceil((e.x1-e.x0)/n)+1,o=Math.ceil((e.z1-e.z0)/n)+1;this.riverGrid={x0:e.x0,z0:e.z0,w:s,h:o,cell:n};const r=new Float32Array(s*o).fill(1e9);for(const a of t)for(let c=0;c+3<a.p.length;c+=2){const l=a.p[c],h=a.p[c+1],f=a.p[c+2],u=a.p[c+3],d=120,g=Math.max(0,Math.floor((Math.min(l,f)-d-e.x0)/n)),_=Math.min(s-1,Math.ceil((Math.max(l,f)+d-e.x0)/n)),m=Math.max(0,Math.floor((Math.min(h,u)-d-e.z0)/n)),p=Math.min(o-1,Math.ceil((Math.max(h,u)+d-e.z0)/n));for(let x=m;x<=p;x++)for(let M=g;M<=_;M++){const v=D_(e.x0+M*n,e.z0+x*n,l,h,f,u)-a.w/2;v<r[x*s+M]&&(r[x*s+M]=v)}}this.riverDist=r}riverDistAt(t,e){if(!this.riverDist)return 1e9;const n=this.riverGrid,s=xe((t-n.x0)/n.cell,0,n.w-1.001),o=xe((e-n.z0)/n.cell,0,n.h-1.001),r=Math.floor(s),a=Math.floor(o),c=s-r,l=o-a,h=this.riverDist;return Wi(Wi(h[a*n.w+r],h[a*n.w+r+1],c),Wi(h[(a+1)*n.w+r],h[(a+1)*n.w+r+1],c),l)}cliffSide(t,e){return this.cuttings.some(n=>n.side===e&&t>n.s0-25&&t<n.s1+25)}cuttingAt(t,e){for(const n of this.cuttings){if(t<n.s0-40||t>n.s1+40)continue;const s=Pe(n.s0-30,n.s0+15,t)*(1-Pe(n.s1-15,n.s1+30,t)),o=this.ww.halfWidthAt(t),r=Math.abs(e);if(Math.sign(e)===n.side){const c=Pe(o+3.3,o+6.2,r);return{h:n.cliff*c*s,cliff:s*(r>o+3.2&&r<o+6.5?1:0)}}const a=Pe(o+3.6,o+16,r);return{h:n.far*a*s,cliff:s*(a>.05&&a<.6?.7:0)}}return{h:0,cliff:0}}landHeight(t,e,n,s){const o=this.ww.halfWidthAt(n),r=Math.abs(s);let a=Wi(this.bankTop(n),Sl(this.smoothBank,n/this.bankStep),Pe(o+3,o+24,r));const c=Pe(o+6,140,r);a+=Qn(t*.004,e*.004,3,7)*3.5*c+Qn(t*.03,e*.03,2,3)*.35*Pe(o+3,o+12,r);const l=this.riverDistAt(t,e);return l<40&&(a=Wi(this.riverLevel-1.5,a,Pe(-2,40,l))),a+this.cuttingAt(n,s).h}heightAt(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s);return n.dist<s?this.ww.bedAt(n.s):this.landHeight(t,e,n.s,n.d)}buildStrip(){const{route:t,ww:e}=this,n=[];for(let g=0;g<t.length;g+=R_)n.push(g);n.push(t.length);for(const g of e.gates)n.push(g.s-.05,g.s+.05,g.s+Lr-.05,g.s+Lr+.05);n.sort((g,_)=>g-_);const s=n.length,o=g=>[[0,"bed"],[g-.8,"bed"],[g,"wallBase"],[g,"wallTop"],[g+.5,"coping"],[g+.55,"path"],[g+2.6,"path"],[g+3.4,"land"],[g+6.3,"land"],[g+7,"land"],[Math.max(14,g+9),"land"],[Math.max(22,g+15),"land"],[Math.max(32,g+24),"land"],[Math.max(bl,g+34),"land"]],r=o(dn).length,a=r*2-1,c=new Float32Array(s*a*3),l=new Float32Array(s*a*3),h={x:0,z:0,tx:0,tz:0,nx:0,nz:0},f=new Ot;for(let g=0;g<s;g++){const _=n[g];t.frame(_,h);const m=e.halfWidthAt(_),p=this.bankTop(_),x=e.gates.find(A=>_>=A.s&&_<A.s+Lr),M=e.bedAt(x?x.s-.01:_),v=e.bodies[e.bodyIndexAt(_)].kind==="chamber"||m<dn-.5,b=L_(t,_),E=o(m);for(let A=0;A<a;A++){const C=A<r-1?-1:1,S=C<0?r-1-A:A-(r-1);let[y,P]=E[S];P==="land"&&Math.abs(b)>1e-4&&Math.sign(b)===C&&(y=Math.min(y,Math.max(m+3.6,.8/Math.abs(b))));const k=h.x+h.nx*y*C,B=h.z+h.nz*y*C,q=C===ce||v;let j;switch(P){case"bed":j=M,f.copy(We.bed);break;case"wallBase":j=M+.2,f.copy(v?We.wallSandstone:We.wallStone);break;case"wallTop":j=p,f.copy(v?We.wallSandstone:We.wallStone);break;case"coping":j=p+.04,f.copy(We.coping);break;case"path":j=p,f.copy(q?We.towpath:We.grassDark);break;default:j=this.landHeight(k,B,_,y*C),this.groundColour(k,B,_,y*C,f)}P==="path"&&q&&f.offsetHSL(0,0,(pn(g,A,5)-.5)*.04);const U=(g*a+A)*3;c[U]=k,c[U+1]=j,c[U+2]=B,l[U]=f.r,l[U+1]=f.g,l[U+2]=f.b}}const u=El(c,l,s,a,!0),d=new et(u,Al());return d.receiveShadow=!0,d.name="strip",d}buildFar(){const{bounds:t,route:e,ww:n}=this,s=Math.ceil((t.x1-t.x0)/Eo)+1,o=Math.ceil((t.z1-t.z0)/Eo)+1,r=new Float32Array(s*o*3),a=new Float32Array(s*o*3),c=new Ot;let l=-1;for(let u=0;u<o;u++)for(let d=0;d<s;d++){const g=t.x0+d*Eo,_=t.z0+u*Eo,m=e.project(g,_,l),p=m.dist>150?e.project(g,_):m;l=p.dist<150?p.s:-1;const x=n.halfWidthAt(p.s);let M;p.dist<x+14?M=n.bedAt(p.s)-3:p.dist<bl?M=this.landHeight(g,_,p.s,p.d)-.15:M=this.landHeight(g,_,p.s,p.d),this.groundColour(g,_,p.s,p.d,c);const v=(u*s+d)*3;r[v]=g,r[v+1]=M,r[v+2]=_,a[v]=c.r,a[v+1]=c.g,a[v+2]=c.b}const h=El(r,a,o,s),f=new et(h,Al());return f.receiveShadow=!0,f.name="far-terrain",f}groundColour(t,e,n,s,o){const r=Math.abs(s),a=Math.floor(t/150+Qn(t*.01,e*.01,2,1)*.6),c=Math.floor(e/130+Qn(t*.01,e*.01,2,2)*.6),l=pn(a,c,11);o.copy(We.grass).lerp(We.field,l*.8),o.offsetHSL(0,0,(pn(Math.floor(t/4),Math.floor(e/4),3)-.5)*.035),this.parkAt(t,e)&&o.lerp(We.park,.7);const h=this.urbanAt(t,e)*Pe(8,20,r);o.lerp(We.paved,h*.85);const f=this.riverDistAt(t,e);f<12&&o.lerp(We.bed,Pe(12,0,f)*.5);const u=this.cuttingAt(n,s);u.cliff>0&&o.lerp(We.wallSandstone,u.cliff).offsetHSL(0,0,(pn(Math.floor(t/2),Math.floor(e/3),8)-.5)*.06)}}function L_(i,t){const e=i.frame(Math.max(0,t-8)),n=i.frame(Math.min(i.length,t+8)),s=n.tx-e.tx,o=n.tz-e.tz,r=i.frame(t);return(s*r.nx+o*r.nz)/16}function Sl(i,t){t=xe(t,0,i.length-1);const e=Math.floor(t);return Wi(i[e],i[Math.min(e+1,i.length-1)],t-e)}function wl(i,t){const e=new Float32Array(i.length);for(let n=0;n<i.length;n++){let s=0,o=0;for(let r=-t;r<=t;r++){const a=n+r;a>=0&&a<i.length&&(s+=i[a],o++)}e[n]=s/o}return e}function D_(i,t,e,n,s,o){const r=s-e,a=o-n,c=xe(((i-e)*r+(t-n)*a)/(r*r+a*a||1),0,1);return Math.hypot(i-e-r*c,t-n-a*c)}function El(i,t,e,n,s=!1){const o=new Uint32Array((e-1)*(n-1)*6);let r=0;for(let c=0;c<e-1;c++)for(let l=0;l<n-1;l++){const h=c*n+l,f=h+1,u=h+n,d=u+1;s?(o[r++]=h,o[r++]=f,o[r++]=u,o[r++]=f,o[r++]=d,o[r++]=u):(o[r++]=h,o[r++]=u,o[r++]=f,o[r++]=f,o[r++]=u,o[r++]=d)}const a=new de;return a.setAttribute("position",new Ne(i,3)),a.setAttribute("color",new Ne(t,3)),a.setIndex(new Ne(o,1)),a.computeVertexNormals(),a}let Tl=null;function Al(){return Tl??(Tl=new ee({vertexColors:!0,roughness:.95,flatShading:!0})),Tl}function I_(i=256){const t=new Float32Array(i*i),e=8;for(let r=0;r<i;r++)for(let a=0;a<i;a++){const c=a/i*e,l=r/i*e;t[r*i+a]=Rl(c,l,e)*.6+Rl(c*2,l*2,e*2)*.3}const n=new ImageData(i,i);for(let r=0;r<i;r++)for(let a=0;a<i;a++){const c=t[r*i+(a-1+i)%i],l=t[r*i+(a+1)%i],h=t[(r-1+i)%i*i+a],f=t[(r+1)%i*i+a],u=(c-l)*3,d=(h-f)*3,g=1,_=Math.hypot(u,d,g),m=(r*i+a)*4;n.data[m]=(u/_*.5+.5)*255,n.data[m+1]=(d/_*.5+.5)*255,n.data[m+2]=(g/_*.5+.5)*255,n.data[m+3]=255}const s=document.createElement("canvas");s.width=s.height=i,s.getContext("2d").putImageData(n,0,0);const o=new Ws(s);return o.wrapS=o.wrapT=ko,o}function Rl(i,t,e){const n=i/e,s=t/e,o=Qn(i,t,3,2),r=Qn(i-e,t,3,2),a=Qn(i,t-e,3,2),c=Qn(i-e,t-e,3,2);return(o*(1-n)+r*n)*(1-s)+(a*(1-n)+c*n)*s}class U_{constructor(t,e){F(this,"group",new Ht);F(this,"material");F(this,"normalMap");F(this,"chamberMeshes",[]);this.route=t,this.ww=e,this.normalMap=I_(),this.material=new ee({color:"#3d5c47",roughness:.12,metalness:0,normalMap:this.normalMap,normalScale:new st(.28,.28),transparent:!0,opacity:.93,envMapIntensity:.9}),e.bodies.forEach((n,s)=>{const o=this.ribbon(n.s0-.15,n.s1+.15),r=new et(o,this.material);r.position.y=n.level,r.receiveShadow=!0,this.group.add(r),n.kind==="chamber"&&this.chamberMeshes.push({mesh:r,body:s})})}ribbon(t,e){const{route:n,ww:s}=this;t=Math.max(0,t),e=Math.min(n.length,e);const o=Math.max(2,Math.ceil((e-t)/1.5)+1),r=[],a=[],c=[];for(let h=0;h<o;h++){const f=t+(e-t)*h/(o-1),u=n.frame(f),d=s.halfWidthAt(f)+.12;for(const g of[-1,1]){const _=u.x+u.nx*d*g,m=u.z+u.nz*d*g;r.push(_,0,m),a.push(_/7,m/7)}if(h>0){const g=(h-1)*2;c.push(g,g+1,g+2,g+1,g+3,g+2)}}const l=new de;return l.setAttribute("position",new Xt(r,3)),l.setAttribute("uv",new Xt(a,2)),l.setIndex(c),l.computeVertexNormals(),l}addRivers(t,e){for(const n of t){const s=[],o=[],r=[],a=n.p.length/2;for(let h=0;h<a;h++){const f=Math.max(0,h-1),u=Math.min(a-1,h+1);let d=n.p[u*2]-n.p[f*2],g=n.p[u*2+1]-n.p[f*2+1];const _=Math.hypot(d,g)||1;d/=_,g/=_;for(const m of[-1,1]){const p=n.p[h*2]-g*(n.w/2)*m,x=n.p[h*2+1]+d*(n.w/2)*m;s.push(p,e,x),o.push(p/7,x/7)}if(h>0){const m=(h-1)*2;r.push(m,m+2,m+1,m+1,m+2,m+3)}}const c=new de;c.setAttribute("position",new Xt(s,3)),c.setAttribute("uv",new Xt(o,2)),c.setIndex(r),c.computeVertexNormals();const l=this.material.clone();l.side=ke,l.color.set("#4a6a5c"),this.group.add(new et(c,l))}}addPond(t,e){const n=new wi;for(let c=0;c<t.length;c+=2)(c?n.lineTo:n.moveTo).call(n,t[c],-t[c+1]);const s=new ja(n);s.rotateX(-Math.PI/2);const o=s.getAttribute("position"),r=s.getAttribute("uv");for(let c=0;c<o.count;c++)r.setXY(c,o.getX(c)/7,o.getZ(c)/7);const a=new et(s,this.material);a.position.y=e,this.group.add(a)}update(t){this.normalMap.offset.x+=t*.012,this.normalMap.offset.y+=t*.007;for(const e of this.chamberMeshes)e.mesh.position.y=this.ww.bodies[e.body].level}}const Gi={brick:new ee({color:"#8b4a3b",roughness:.9,flatShading:!0}),sandstone:new ee({color:"#a8654f",roughness:.9,flatShading:!0}),concrete:new ee({color:"#a39f97",roughness:.85,flatShading:!0}),iron:new ee({color:"#3d434b",roughness:.6,metalness:.3,flatShading:!0}),coping:new ee({color:"#c4bba9",roughness:.9,flatShading:!0})},Cl=Math.tan(40*Math.PI/180);class N_{constructor(t,e,n,s){F(this,"group",new Ht);F(this,"placed",[]);F(this,"ray",new e_);F(this,"faded",new Map);for(const o of n){const r=t.frame(o.s),a=e.levelAt(o.s),c=o.kind==="road"&&o.w<12,l=Math.sin(o.dir),h=Math.cos(o.dir),f=l*r.nx+h*r.nz,u=l*r.tx+h*r.tz,d=Fs.clamp(u/(Math.abs(f)<.001?.001:f),-Cl,Cl),g=dn+8,_=dn+8,m=Math.max(...[-1,1].map(S=>{const[y,P]=t.point(o.s,_*S);return s.landHeight(y,P,o.s,_*S)})),p=Math.max(a+(c?3.4:4.6),m+.2),x=new Ht;x.position.set(r.x,0,r.z),x.rotation.y=Math.atan2(-r.nz,r.nx);const M=Math.max(o.w+.8,3.2)*Math.sqrt(1+d*d);this.placed.push({data:o,x:r.x,z:r.z,deck:p,halfSpan:g,arch:c,depth:M,tanSkew:d});const v=c?O_(g,Ca+.05,a,p):F_(g,dn+1.2,a,p),b=new as(v,{depth:M,bevelEnabled:!1,curveSegments:10});b.translate(0,0,-M/2);const E=c?o.w<=3.5?Gi.sandstone:Gi.brick:o.kind==="rail"?Gi.iron:Gi.concrete,A=new et(b,E);A.castShadow=A.receiveShadow=!0,x.add(A);for(const S of[-1,1]){const y=new et(new qt(g*2*.92,1,.35),c?Gi.coping:E);y.position.set(0,p+.5,S*(M/2-.12)),y.castShadow=!0,x.add(y)}if(!c)for(const S of[-1,1]){const y=new et(new qt(1.2,p-a+1.15,M+.3),Gi.concrete);y.position.set(S*(dn+1.2+.6-.08),(p-1.15+a-2.3)/2,0),x.add(y)}const C=new ie().makeShear(0,-d,0,0,0,0);for(const S of x.children){const y=S;y.updateMatrix(),y.geometry=y.geometry.applyMatrix4(y.matrix).applyMatrix4(C),y.position.set(0,0,0),y.rotation.set(0,0,0)}x.traverse(S=>{const y=S;y.isMesh&&(y.material=y.material.clone())}),x.name=`bridge:${o.name??o.s}`,this.group.add(x)}}rampAt(t,e){let n=-1/0,s=!1;for(const o of this.placed){if(Math.abs(t-(o.data.s+o.tanSkew*e))>o.depth/2+1)continue;const a=Math.abs(e);a<=o.halfSpan&&(s=!0),!(a>o.halfSpan+30)&&(n=Math.max(n,o.deck-Math.max(0,a-o.halfSpan*.85)/9))}return{y:n,onDeck:s}}updateOcclusion(t,e,n){const s=e.clone().sub(t),o=s.length();this.ray.set(t,s.normalize()),this.ray.far=o;const r=new Set(this.ray.intersectObjects(this.group.children,!0).map(a=>a.object.parent));for(const a of this.group.children){const c=this.faded.get(a)??1,l=r.has(a)?.18:1;if(c===l)continue;const h=c+Math.sign(l-c)*Math.min(Math.abs(l-c),n*4);this.faded.set(a,h),a.traverse(f=>{const u=f.material;u&&(u.transparent=h<1,u.opacity=h,u.depthWrite=h>=1)})}}at(t){return this.placed.find(e=>Math.abs(e.data.s-t)<e.data.w/2+1)}}function O_(i,t,e,n){const s=n-e,o=e-2.2,r=e+Math.max(.9,s*.3),a=e+Math.max(2.75,s*.72),c=new wi;c.moveTo(-i,o),c.lineTo(-t,o),c.lineTo(-t,r);const l=14;for(let h=1;h<l;h++){const f=Math.PI-Math.PI*h/l;c.lineTo(Math.cos(f)*t,r+Math.sin(f)*(a-r))}return c.lineTo(t,r),c.lineTo(t,o),c.lineTo(i,o),c.lineTo(i,n),c.lineTo(-i,n),c.closePath(),c}function F_(i,t,e,n){const s=e-2.2,o=n-1.1,r=new wi;return r.moveTo(-i,s),r.lineTo(-t,s),r.lineTo(-t,o),r.lineTo(t,o),r.lineTo(t,s),r.lineTo(i,s),r.lineTo(i,n),r.lineTo(-i,n),r.closePath(),r}const hi={brick:["#9a4b3b","#8c4234","#a65a44","#7f3d31","#9e5a48"],render:["#e6dcc8","#efe8da","#d9cdb5","#f1ede4"],stone:["#b37360","#a9654f","#c7a88a"],modern:["#9da3a8","#b9b3a7","#8a8f94","#c8c2b5"],shed:["#6f7368","#7b6d5a","#5d6660"]},ws={slate:["#4d525b","#585d66","#43474f"],tile:["#7d3d30","#8a4a37"],flat:["#6a6a68","#757370"]},tn=(i,t)=>i[Math.floor(t*i.length)%i.length];class k_{constructor(t){F(this,"cell",3);F(this,"w");F(this,"h");F(this,"data");this.b=t,this.w=Math.ceil((t.x1-t.x0)/this.cell),this.h=Math.ceil((t.z1-t.z0)/this.cell),this.data=new Uint8Array(this.w*this.h)}mark(t,e,n){const s=this.cell;for(let o=Math.floor((e-n-this.b.z0)/s);o<=Math.floor((e+n-this.b.z0)/s);o++)for(let r=Math.floor((t-n-this.b.x0)/s);r<=Math.floor((t+n-this.b.x0)/s);r++)r>=0&&o>=0&&r<this.w&&o<this.h&&(this.data[o*this.w+r]=1)}markPolygon(t){let e=1/0,n=-1/0,s=1/0,o=-1/0;for(let a=0;a<t.length;a+=2)e=Math.min(e,t[a]),n=Math.max(n,t[a]),s=Math.min(s,t[a+1]),o=Math.max(o,t[a+1]);const r=this.cell;for(let a=s-r;a<=o+r;a+=r)for(let c=e-r;c<=n+r;c+=r)Ja(c,a,t)&&this.mark(c,a,2)}used(t,e){const n=Math.floor((t-this.b.x0)/this.cell),s=Math.floor((e-this.b.z0)/this.cell);return n<0||s<0||n>=this.w||s>=this.h||this.data[s*this.w+n]===1}}function Ja(i,t,e){let n=!1;for(let s=0,o=e.length-2;s<e.length;o=s,s+=2){const r=e[s],a=e[s+1],c=e[o],l=e[o+1];a>t!=l>t&&i<(c-r)*(t-a)/(l-a)+r&&(n=!n)}return n}function z_(i,t){const n=Math.ceil((t.x1-t.x0)/30)+1,s=Math.ceil((t.z1-t.z0)/30)+1,o=new Float32Array(n*s);for(const a of i){let c=0,l=0,h=0;const f=a.p,u=f.length/2;for(let _=0;_<u;_++){const m=(_+1)%u;c+=f[_*2]*f[m*2+1]-f[m*2]*f[_*2+1],l+=f[_*2]/u,h+=f[_*2+1]/u}const d=Math.floor((l-t.x0)/30),g=Math.floor((h-t.z0)/30);d>=0&&g>=0&&d<n&&g<s&&(o[g*n+d]+=Math.abs(c)/2)}const r=new Float32Array(n*s);for(let a=0;a<s;a++)for(let c=0;c<n;c++){let l=0;for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++){const u=Math.min(n-1,Math.max(0,c+f)),d=Math.min(s-1,Math.max(0,a+h));l+=o[d*n+u]}r[a*n+c]=Math.min(1,l/9/(30*30)*3)}return(a,c)=>{const l=Math.floor((a-t.x0)/30),h=Math.floor((c-t.z0)/30);return l<0||h<0||l>=n||h>=s?0:r[h*n+l]}}class Pl{constructor(){F(this,"pos",[]);F(this,"col",[]);F(this,"nrm",[]);F(this,"a",new D);F(this,"b",new D);F(this,"n",new D)}tri(t,e,n,s,o){if(this.a.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),this.b.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),this.n.crossVectors(this.a,this.b).normalize(),o){const r=(t[0]+e[0]+n[0])/3-o[0],a=(t[1]+e[1]+n[1])/3-o[1],c=(t[2]+e[2]+n[2])/3-o[2];this.n.x*r+this.n.y*a+this.n.z*c<0&&([e,n]=[n,e],this.n.negate())}for(const r of[t,e,n])this.pos.push(r[0],r[1],r[2]),this.col.push(s.r,s.g,s.b),this.nrm.push(this.n.x,this.n.y,this.n.z)}geometry(){const t=new de;return t.setAttribute("position",new Xt(this.pos,3)),t.setAttribute("normal",new Xt(this.nrm,3)),t.setAttribute("color",new Xt(this.col,3)),t}}class B_{constructor(t,e,n,s,o){F(this,"group",new Ht);F(this,"occ");F(this,"roofs");this.data=t,this.route=e,this.ww=n,this.terrain=s,this.bridges=o,this.occ=new k_(s.bounds),this.roofs=new Float32Array(this.occ.w*this.occ.h).fill(-1/0)}isFree(t,e){return!this.occ.used(t,e)}roofAt(t,e){const{occ:n}=this,s=Math.floor((t-n.b.x0)/n.cell),o=Math.floor((e-n.b.z0)/n.cell);return s<0||o<0||s>=n.w||o>=n.h?-1/0:this.roofs[o*n.w+s]}markRoof(t,e){const{occ:n}=this;let s=1/0,o=-1/0,r=1/0,a=-1/0;for(let c=0;c<t.length;c+=2)s=Math.min(s,t[c]),o=Math.max(o,t[c]),r=Math.min(r,t[c+1]),a=Math.max(a,t[c+1]);for(let c=Math.floor((r-n.b.z0)/n.cell);c<=Math.floor((a-n.b.z0)/n.cell);c++)for(let l=Math.floor((s-n.b.x0)/n.cell);l<=Math.floor((o-n.b.x0)/n.cell);l++)l<0||c<0||l>=n.w||c>=n.h||Ja(n.b.x0+(l+.5)*n.cell,n.b.z0+(c+.5)*n.cell,t)&&(this.roofs[c*n.w+l]=Math.max(this.roofs[c*n.w+l],e))}build(t){return(async()=>{await t("Laying out roads…"),this.buildRoads(),await t("Building Chester…"),this.buildBuildings(),await t("Planting trees…"),this.buildTrees()})()}buildBuildings(){const t=new Pl,e=new Ot,n=new Ot;for(let o=0;o<this.data.buildings.length;o++){const r=this.data.buildings[o];let a=r.p;const c=a.length/2;if(c<3)continue;this.occ.markPolygon(a);let l=0;for(let m=0;m<c;m++){const p=(m+1)%c;l+=a[m*2]*a[p*2+1]-a[p*2]*a[m*2+1]}if(l>0){const m=[];for(let p=c-1;p>=0;p--)m.push(a[p*2],a[p*2+1]);a=m}let h=1/0;for(let m=0;m<c;m++)h=Math.min(h,this.terrain.heightAt(a[m*2],a[m*2+1]));const f=h-1.5,u=h+r.h;this.markRoof(a,u+1.5);const d=pn(o,7,1),g=pn(o,3,2);this.palette(r,d,g,e,n);for(let m=0;m<c;m++){const p=(m+1)%c,x=a[m*2],M=a[m*2+1],v=a[p*2],b=a[p*2+1],E=e.clone().offsetHSL(0,0,(pn(o,m,4)-.5)*.03);t.tri([x,f,M],[v,f,b],[v,u,b],E),t.tri([x,f,M],[v,u,b],[x,u,M],E)}if(c===4&&r.h<=13&&G_(a)&&Math.abs(l)/2<400)this.gableRoof(t,a,u,e,n);else{const m=[];for(let x=0;x<c;x++)m.push(new st(a[x*2],a[x*2+1]));const p=Mn.triangulateShape(m,[]);for(const[x,M,v]of p)t.tri([a[x*2],u,a[x*2+1]],[a[M*2],u,a[M*2+1]],[a[v*2],u,a[v*2+1]],n,[a[x*2],u-10,a[x*2+1]])}}const s=new et(t.geometry(),new ee({vertexColors:!0,roughness:.9}));s.castShadow=s.receiveShadow=!0,s.name="buildings",this.group.add(s)}gableRoof(t,e,n,s,o){const r=[0,1,2,3].map(_=>[e[_*2],e[_*2+1]]),a=(_,m)=>Math.hypot(_[0]-m[0],_[1]-m[1]);a(r[0],r[1])<a(r[1],r[2])&&r.push(r.shift());const c=a(r[1],r[2]),l=Math.min(c*.42,4),h=(_,m)=>[(_[0]+m[0])/2,(_[1]+m[1])/2],f=h(r[3],r[0]),u=h(r[1],r[2]),d=(_,m)=>[_[0],m,_[1]],g=[(r[0][0]+r[2][0])/2,n-1,(r[0][1]+r[2][1])/2];t.tri(d(r[0],n),d(r[1],n),d(u,n+l),o,g),t.tri(d(r[0],n),d(u,n+l),d(f,n+l),o,g),t.tri(d(r[2],n),d(r[3],n),d(f,n+l),o,g),t.tri(d(r[2],n),d(f,n+l),d(u,n+l),o,g),t.tri(d(r[1],n),d(r[2],n),d(u,n+l),s,g),t.tri(d(r[3],n),d(r[0],n),d(f,n+l),s,g)}palette(t,e,n,s,o){const r=t.t;if(r==="wall_tower"){s.set(e<.5?"#b0664d":"#a95e46"),o.set("#c9a58a");return}r==="cathedral"||r==="church"||/cathedral|church/i.test(t.n??"")?(s.set(tn(hi.stone,e)),o.set(tn(ws.slate,n))):["garage","garages","shed","roof","hut"].includes(r)?(s.set(tn(hi.shed,e)),o.set(tn(ws.flat,n))):["commercial","retail","industrial","warehouse","office","supermarket"].includes(r)||t.h>14?(s.set(e<.4?tn(hi.brick,n):tn(hi.modern,n)),o.set(tn(ws.flat,n))):(s.set(e<.68?tn(hi.brick,n):e<.9?tn(hi.render,n):tn(hi.stone,n)),o.set(n<.8?tn(ws.slate,e):tn(ws.tile,e)))}buildRoads(){const t=new Pl,e=new Ot("#5b5e61"),n=new Ot("#a39d90"),s=new Ot("#6d635a"),o={footway:0,path:0,cycleway:0,steps:0,track:0,service:1,residential:2,living_street:2,unclassified:2,tertiary:3,secondary:4,primary:5,trunk:6,motorway:6,pedestrian:1},r=new Set(["footway","path","cycleway","steps","track","pedestrian"]);for(const c of this.data.roads){const l=r.has(c.k)?n:e;this.ribbon(t,c.p,c.w,l,.05+(o[c.k]??1)*.012,!0)}for(const c of this.data.rails)this.ribbon(t,c.p,4.2,s,.1,!0);const a=new et(t.geometry(),new ee({vertexColors:!0,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));a.receiveShadow=!0,a.name="roads",this.group.add(a)}ribbon(t,e,n,s,o,r){const a=[];for(let u=0;u+3<e.length;u+=2){const d=e[u],g=e[u+1],_=e[u+2],m=e[u+3],p=Math.max(1,Math.ceil(Math.hypot(_-d,m-g)/4));for(let x=0;x<p;x++)a.push([d+(_-d)*x/p,g+(m-g)*x/p])}if(a.push([e[e.length-2],e[e.length-1]]),a.length<2)return;const c=a.map(([u,d])=>this.route.project(u,d)),l=c.map(u=>this.bridges.rampAt(u.s,u.d)),h=a.map(([u,d],g)=>{const _=c[g],m=this.ww.halfWidthAt(_.s),p=_.dist<m+3.5?this.terrain.bankTop(_.s):this.terrain.landHeight(u,d,_.s,_.d);return Math.max(p,l[g].y)+o}),f=n/2;for(let u=0;u<a.length-1;u++){const d=c[u],g=c[u+1];if((Math.min(d.dist,g.dist)<this.ww.halfWidthAt(d.s)+4||Math.sign(d.d)!==Math.sign(g.d))&&!(l[u].onDeck&&l[u+1].onDeck))continue;const[m,p]=a[u],[x,M]=a[u+1];let v=x-m,b=M-p;const E=Math.hypot(v,b)||1;v/=E,b/=E;const A=-b*f,C=v*f,S=[m-A,h[u],p-C],y=[m+A,h[u],p+C],P=[x-A,h[u+1],M-C],k=[x+A,h[u+1],M+C];t.tri(S,y,k,s,[m,h[u]-5,p]),t.tri(S,k,P,s,[m,h[u]-5,p]),r&&this.occ.mark(m,p,f+1.5)}}buildTrees(){const t=cs(1234),e=[],{route:n,ww:s,terrain:o,occ:r}=this,a=(M,v)=>{if(r.used(M,v))return!1;const b=n.project(M,v);return b.dist>s.halfWidthAt(b.s)+4.2};for(let M=0;M<n.length;M+=5)for(const v of[-1,1]){if(t()>.6)continue;const b=s.halfWidthAt(M)+4.5+t()*t()*30,[E,A]=n.point(M,b*v);t()<o.urbanAt(E,A)*.85||a(E,A)&&e.push({x:E,z:A,s:.8+t()*.7,kind:t()<.15?1:0})}const c=o.bounds,l=(c.x1-c.x0)*(c.z1-c.z0);for(let M=0;M<l*9e-4;M++){const v=c.x0+t()*(c.x1-c.x0),b=c.z0+t()*(c.z1-c.z0),A=o.parkAt(v,b)?.7:(1-o.urbanAt(v,b))*.35*Pe(.75,.2,Math.abs(H_(v,b)));t()>A||a(v,b)&&e.push({x:v,z:b,s:.8+t()*.9,kind:t()<.1?1:0})}for(let M=0;M<this.data.trees.length;M+=2)e.push({x:this.data.trees[M],z:this.data.trees[M+1],s:1.1,kind:0});const h=new nn(1,0),f=new ue(.18,.25,1,5);f.translate(0,.5,0);const u=new On(h,new ee({roughness:.9,flatShading:!0}),e.length),d=new On(f,new ee({color:"#5a4636",roughness:1}),e.length),g=new ie,_=new yn,m=new D,p=new D,x=["#4f7a3a","#5d8a40","#3f6b35","#6b9446","#557d3c"].map(M=>new Ot(M));e.forEach((M,v)=>{const b=o.heightAt(M.x,M.z),E=(M.kind===1?9:4.5)*M.s;_.setFromAxisAngle(new D(0,1,0),t()*Math.PI*2),p.set(M.x,b-.2,M.z),m.set(M.s,E*.45,M.s),d.setMatrixAt(v,g.compose(p,_,m)),p.set(M.x,b+E*.45+(M.kind===1?E*.35:E*.3),M.z),M.kind===1?m.set(1.3*M.s,E*.5,1.3*M.s):m.set(2.6*M.s,2.3*M.s,2.6*M.s),u.setMatrixAt(v,g.compose(p,_,m)),u.setColorAt(v,x[Math.floor(t()*x.length)].clone().offsetHSL(0,0,(t()-.5)*.06))}),u.castShadow=d.castShadow=!0,u.receiveShadow=!0,u.name="trees",this.group.add(u,d)}}function H_(i,t){return Math.sin(i*.011+Math.sin(t*.007)*2)*Math.cos(t*.013+Math.sin(i*.005)*2)}function G_(i){for(let t=0;t<4;t++){const e=t,n=(t+1)%4,s=(t+2)%4,o=i[n*2]-i[e*2],r=i[n*2+1]-i[e*2+1],a=i[s*2]-i[n*2],c=i[s*2+1]-i[n*2+1],l=(o*a+r*c)/(Math.hypot(o,r)*Math.hypot(a,c)||1);if(Math.abs(l)>.2)return!1}return!0}const Ll=18*Math.PI/180,V_=Jn+.15,gn={gate:new ee({color:"#1d1c1a",roughness:.8,flatShading:!0}),white:new ee({color:"#f1efe8",roughness:.7}),gear:new ee({color:"#2b2f33",roughness:.5,metalness:.5}),rack:new ee({color:"#c9c3b5",roughness:.4,metalness:.6}),foam:new ks({color:"#f4f7f2",transparent:!0,opacity:0,depthWrite:!1}),highlight:new ks({color:"#ffd76a",transparent:!0,opacity:.55,depthWrite:!1})};class W_{constructor(t,e,n){F(this,"group",new Ht);F(this,"visuals",[]);F(this,"time",0);this.ww=e;for(const o of e.gates){const r=t.frame(o.s),a=new Ht;a.position.set(r.x,0,r.z),a.rotation.y=Math.atan2(r.tx,r.tz);const c=e.bodies[o.above].hi,l=e.bodies[o.below].lo-1.6,h=n.bankTop(o.s),f=c+.4,u=Jn/Math.cos(Ll)+.15,d=[],g=[];for(const p of[-1,1]){const x=new Ht;x.position.set(p*V_,0,0);const M=f-l,v=new et(new qt(u,M,.32),gn.gate);v.position.set(u/2,l+M/2,0),v.castShadow=!0,x.add(v);const b=Math.max(h,f)+.75,E=new et(new qt(4.6,.32,.32),gn.gate);E.position.set(-2.1,b,0),E.castShadow=!0,x.add(E);const A=new et(new qt(.7,.34,.34),gn.white);A.position.set(-4.1,b,0),x.add(A);const C=new et(new qt(.3,b-f+.2,.3),gn.gate);C.position.set(.1,(b+f)/2,0),x.add(C);const S=new et(new qt(.3,.45,.3),gn.gear);S.position.set(u*.55,f+.22,-.2),x.add(S);const y=new et(new qt(.08,.9,.08),gn.rack);y.position.set(u*.55,f+.45,-.2),y.userData.y0=y.position.y,x.add(y),g.push(y);const P=new et(new qt(u,.06,.06),gn.white);P.position.set(u/2,f+.95,-.35),x.add(P),x.scale.x=p<0?1:-1,a.add(x),d.push({pivot:x,sign:p})}const _=new et(new ii(Jn*2,5),gn.foam.clone());_.rotation.x=-Math.PI/2,_.position.set(0,0,-2.8),a.add(_);const m=new et(new $a(Jn+.6,Jn+1,32),gn.highlight);m.rotation.x=-Math.PI/2,m.position.y=h+.08,m.visible=!1,a.add(m),this.group.add(a),this.visuals.push({gate:o,leaves:d,racks:g,foam:_,ring:m,root:a})}const s=new Map;for(const o of e.gates)o.label==="top gates"&&s.set(o.lockName,o);for(const[o,r]of s){const a=t.frame(r.s+3),c=X_(o),l=(Jn+3.2)*ce;c.position.set(a.x+a.nx*l,n.bankTop(r.s+3),a.z+a.nz*l),c.rotation.y=Math.atan2(ce*a.tz,-ce*a.tx),this.group.add(c)}}setSelected(t){for(const e of this.visuals)e.ring.visible=e.gate===t}update(t){this.time+=t;for(const e of this.visuals){const n=e.gate,s=n.open*n.open*(3-2*n.open);for(const{pivot:a,sign:c}of e.leaves){const l=Ll,h=Math.PI/2;a.rotation.y=(l+(h-l)*s)*c}for(const a of e.racks)a.position.y=a.userData.y0+n.paddle*.55;const o=this.ww.bodies[n.below].level,r=Math.min(1,Math.abs(n.flow)/3);e.foam.position.y=o+.03,e.foam.material.opacity=r*(.55+.15*Math.sin(this.time*9)),e.foam.scale.y=.7+r*.5+.08*Math.sin(this.time*5.3),e.ring.visible&&(e.ring.material.opacity=.4+.25*Math.sin(this.time*4))}}}function X_(i){const t=document.createElement("canvas");t.width=512,t.height=128;const e=t.getContext("2d");e.fillStyle="#1e3d2f",e.fillRect(0,0,512,128),e.strokeStyle="#e8d9a8",e.lineWidth=6,e.strokeRect(8,8,496,112),e.fillStyle="#f3ead0",e.font="600 44px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText(i,256,66,470);const n=new Ws(t);n.colorSpace=Ie;const s=new Ht,o=new et(new ii(2.4,.6),new ee({map:n,side:ke}));o.position.y=1.9,s.add(o);for(const r of[-1,1]){const a=new et(new qt(.1,2.2,.1),gn.white);a.position.set(r,1.1,0),s.add(a)}return s}class Gs extends et{constructor(){const t=Gs.SkyShader,e=new zn({name:t.name,uniforms:Sh.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:ze,depthWrite:!1});super(new qt(1,1,1),e),this.isSky=!0}}Gs.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
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

		}`};class q_{constructor(t,e){F(this,"sky",new Gs);F(this,"sun",new Qg("#fff4e0",3));F(this,"hemi",new jg("#cfe3ff","#5d6b45",.9));F(this,"envScene",new Ih);F(this,"envSky",new Gs);F(this,"pmrem");F(this,"envTarget",null);F(this,"lastEnvHour",-99);F(this,"sunDir",new D);F(this,"hour",10.5);this.scene=t,this.sky.scale.setScalar(2e4),this.envSky.scale.setScalar(2e4);for(const o of[this.sky,this.envSky]){const r=o.material.uniforms;r.turbidity.value=5,r.rayleigh.value=1.4,r.mieCoefficient.value=.004,r.mieDirectionalG.value=.82}this.envScene.add(this.envSky),t.add(this.sky,this.sun,this.sun.target,this.hemi),this.pmrem=new Sa(e);const n=this.sun.shadow;this.sun.castShadow=!0,n.mapSize.set(2048,2048);const s=n.camera;s.left=s.bottom=-90,s.right=s.top=90,s.near=1,s.far=600,n.bias=-4e-4,n.normalBias=.03,t.fog=new Va("#c9d6dc",300,2400)}get sunElevation(){const t=(this.hour-7)/11.5;return Math.sin(xe(t,-.15,1.15)*Math.PI)*32-(t<0||t>1?6:0)}get isNight(){return this.sunElevation<-2}update(t,e){var a;this.hour=(this.hour+t)%24;const n=Fs.degToRad(this.sunElevation),s=Fs.degToRad(100+(this.hour-6)/13*160);this.sunDir.setFromSphericalCoords(1,Math.PI/2-n,s);for(const c of[this.sky,this.envSky])c.material.uniforms.sunPosition.value.copy(this.sunDir);const o=Pe(-4,8,this.sunElevation),r=1-Pe(4,20,this.sunElevation);this.sun.intensity=3.2*Pe(-2,6,this.sunElevation),this.sun.color.setHSL(.09,.5+r*.4,.92-r*.18),this.hemi.intensity=.2+o*.7,this.scene.fog.color.setHSL(.56,.18,.12+o*.68),this.sun.position.copy(e).addScaledVector(this.sunDir,300),this.sun.target.position.copy(e),Math.abs(this.hour-this.lastEnvHour)>.25&&(this.lastEnvHour=this.hour,(a=this.envTarget)==null||a.dispose(),this.envTarget=this.pmrem.fromScene(this.envScene,0,1,25e3),this.scene.environment=this.envTarget.texture)}}function Y_(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,c=new de;let l=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const f=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=i[u].attributes.position.count}c.setIndex(f)}for(const h in o){const f=Dl(o[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let _=0;_<r[h].length;++_)d.push(r[h][_][u]);const g=Dl(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Dl(i){let t,e,n,s=-1,o=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Ne(r,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const f=c/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){const _=h.getComponent(u,g);a.setComponent(u+f,g,_)}}else r.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Mi(i,t,e){i.updateMatrixWorld(!0);const n=i.matrixWorld.clone().invert(),s=[],o=new ie;return i.traverse(r=>{const a=r;if(!a.isMesh||e&&!e(a))return;const c=Array.isArray(a.material)?a.material:[a.material];if(c.some(g=>g.map)){t==null||t(a);return}const l=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();l.applyMatrix4(o.multiplyMatrices(n,a.matrixWorld));const h=l.getAttribute("position").count,f=new Float32Array(h*3),u=l.groups.length?l.groups:[{start:0,count:h,materialIndex:0}];for(const g of u){const _=(c[g.materialIndex??0]??c[0]).color;for(let m=g.start;m<Math.min(h,g.start+g.count);m++)f.set([_.r,_.g,_.b],m*3)}const d=new de;d.setAttribute("position",l.getAttribute("position")),d.setAttribute("normal",l.getAttribute("normal")),d.setAttribute("color",new Ne(f,3)),s.push(d)}),Y_(s)}const ji=()=>new ee({vertexColors:!0,roughness:.75,flatShading:!0}),$_=["#f1c6a5","#e3b08f","#c98d68","#9a6542","#6b4229"],j_=["#2b1d14","#5a3a22","#a0703c","#d9b36c","#8f8f8f","#161616"],Z_=["#2d3a55","#1f2328","#6b5a3f","#3d4a3a","#4a4a55"],Ls=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400","#34495e","#16a085","#7f8c8d","#e84393","#6d4c41","#1f4d3a"],K_=["short","short","long","bun","beanie","cap","bald"];function ls(i,t={}){const e=n=>n[Math.floor(i()*n.length)];return{coat:e(Ls),trousers:e(Z_),skin:e($_),hair:e(j_),hairStyle:e(K_),hat:e(["#b03a2e","#2e4a7a","#3d5a3d","#5a4a3a","#d4a017"]),longCoat:i()<.3,...t}}const In=(i,t=.8)=>new ee({color:i,roughness:t}),Il=i=>(i.userData.part="coat",i);function Xs(i={}){const t={...ls(Math.random),...i},e=new Ht,n=In(t.coat,.7),s=In(t.skin,.6),o=In(t.trousers,.85),r=In(t.hair,.9),a=t.longCoat?.62:.86,c=[[.001,a],[t.longCoat?.2:.155,a],[.16,.98],[.165,1.15],[.2,1.36],[.17,1.45],[.075,1.5],[.001,1.5]].map(([E,A])=>new st(E,A)),l=Il(new et(new qa(c,12),n));l.scale.z=.72,e.add(l);const h=new et(new ue(.045,.05,.1,8),s);h.position.y=1.54,e.add(h);const f=new et(new sn(.1,14,10),s);f.scale.set(.92,1.1,1),f.position.y=1.67,e.add(f);const u=new et(new vi(.018,.045,5),s);u.rotation.x=Math.PI/2,u.position.set(0,1.66,.1),e.add(u);const d=(E,A,C=Math.PI*.55)=>{const S=new et(new sn(E,14,8,0,Math.PI*2,0,C),A);return S.scale.set(.95,1.12,1.03),S.position.y=1.68,S};if(t.hairStyle!=="bald"&&e.add(d(.106,t.hairStyle==="beanie"?In(t.hat):r,t.hairStyle==="beanie"?Math.PI*.5:Math.PI*.55)),t.hairStyle==="long"){const E=new et(new ue(.1,.11,.26,10,1,!0,Math.PI*.6,Math.PI*.8),r);E.position.y=1.56,E.rotation.y=Math.PI,e.add(E)}else if(t.hairStyle==="bun"){const E=new et(new sn(.05,8,6),r);E.position.set(0,1.74,-.09),e.add(E)}else if(t.hairStyle==="beanie"){const E=new et(new Ei(.1,.022,6,14),In(t.hat));E.rotation.x=Math.PI/2,E.position.y=1.7,e.add(E)}else if(t.hairStyle==="cap"){const E=new et(new ue(.115,.118,.05,12),In(t.hat));E.position.set(0,1.77,.01),E.rotation.x=-.12;const A=new et(new qt(.16,.015,.08),In(t.hat));A.position.set(0,1.76,.12),e.add(E,A)}const g=E=>{const A=new Ht;A.position.set(E*.085,.92,0);const C=new et(new ue(.075,.062,.44,8),o);C.position.y=-.22;const S=new Ht;S.position.y=-.44;const y=new et(new ue(.062,.05,.42,8),o);y.position.y=-.21;const P=new et(new qt(.1,.07,.23),In("#2a2420"));return P.position.set(0,-.44,.04),S.add(y,P),A.add(C,S),e.add(A),{hip:A,knee:S}},{hip:_,knee:m}=g(1),{hip:p,knee:x}=g(-1),M=E=>{const A=new Ht;A.position.set(E*.215,1.4,0);const C=Il(new et(new ue(.052,.042,.58,8),n));C.position.y=-.29;const S=new et(new sn(.042,8,6),s);return S.position.y=-.61,A.add(C,S),A.rotation.z=E*.07,e.add(A),A},v=M(1),b=M(-1);return e.traverse(E=>E.castShadow=!0),{group:e,armL:v,armR:b,legL:_,legR:p,kneeL:m,kneeR:x}}function jo(i,t,e){t==="wind"?(i.armL.rotation.set(-1.3+Math.sin(e*7)*.45,0,.15),i.armR.rotation.set(-1.3+Math.sin(e*7+Math.PI)*.45,0,-.15)):t==="push"?(i.armL.rotation.set(-1.25,0,.1),i.armR.rotation.set(-1.25,0,-.1)):t==="rest"?(i.armL.rotation.set(0,0,.07),i.armR.rotation.set(0,0,-.07)):t==="wave"?(i.armL.rotation.set(0,0,Math.PI-.4+Math.sin(e*9)*.35),i.armR.rotation.set(0,0,-.07)):(i.armL.rotation.set(0,0,Math.PI-.2+Math.sin(e*14)*.25),i.armR.rotation.set(0,0,-(Math.PI-.2)+Math.sin(e*14+1.5)*.25))}function Pa(i,t,e=1){const n=Math.sin(t);i.legL.rotation.x=n*.42*e,i.legR.rotation.x=-n*.42*e,i.kneeL.rotation.x=Math.max(0,-Math.sin(t-.6))*.7*e,i.kneeR.rotation.x=Math.max(0,Math.sin(t-.6))*.7*e,i.armL.rotation.set(-n*.35*e,0,.07),i.armR.rotation.set(n*.35*e,0,-.07)}function J_(i){for(const t of[i.legL,i.legR,i.kneeL,i.kneeR])t.rotation.set(0,0,0)}function Ul(i){i.legL.rotation.set(-1.5,0,.06),i.legR.rotation.set(-1.5,0,-.06),i.kneeL.rotation.x=i.kneeR.rotation.x=1.5,i.armL.rotation.set(-.5,0,.1),i.armR.rotation.set(-.5,0,-.1),i.group.position.y-=.47}function Q_(i,t){i.legL.rotation.set(-.95+Math.sin(t)*.45,0,.05),i.legR.rotation.set(-.95-Math.sin(t)*.45,0,-.05),i.kneeL.rotation.x=1.2+Math.cos(t)*.45,i.kneeR.rotation.x=1.2-Math.cos(t)*.45,i.armL.rotation.set(-1,0,.08),i.armR.rotation.set(-1,0,-.08)}const Sn=17.4,wn=2.08,$e=(i,t={})=>new ee({color:i,roughness:.6,flatShading:!0,...t}),tv={name:"Chester Rose",cabin:"#1f4d3a",roof:"#7c2f23",length:Sn,crew:!0};function Qa(i={}){const{name:t,cabin:e,roof:n,length:s,crew:o,crewStyle:r}={...tv,...i},a=new Ht;a.userData.length=s;const c={hull:$e("#18191b",{roughness:.5}),deck:$e("#3a3d40",{roughness:.9}),cabin:$e(e,{roughness:.45}),roof:$e(n,{roughness:.7}),cream:$e("#efe3c2"),red:$e("#a3291f"),window:$e("#1b2730",{roughness:.1,metalness:.4}),brass:$e("#c9a24a",{roughness:.25,metalness:.9}),rope:$e("#8a6b43",{roughness:1}),black:$e("#111111"),pot:$e("#9b5a3c"),leaf:$e("#4f8a3a"),flower:$e("#e04f6a")},l=wn/2,h=s/2,f=[[-l,-h+.4],[-l*.85,-h+.05],[0,-h],[l*.85,-h+.05],[l,-h+.4],[l,h-3.4],[l*.82,h-1.6],[l*.45,h-.5],[0,h],[-l*.45,h-.5],[-l*.82,h-1.6],[-l,h-3.4]],u=new wi(f.map(([Z,_t])=>new st(Z,-_t))),d=.62,g=.38,_=new as(u,{depth:d+g,bevelEnabled:!1});_.rotateX(-Math.PI/2),_.translate(0,-d,0);const m=new et(_,[c.deck,c.hull]);m.castShadow=m.receiveShadow=!0,a.add(m);const p=new as(u,{depth:.07,bevelEnabled:!1});p.rotateX(-Math.PI/2),p.scale(1.015,1,1.004),p.translate(0,g-.12,0),a.add(new et(p,[c.red,c.red]));const x=-h+2,M=h-3.6,v=M-x,b=(x+M)/2,E=1.22,A=wn-.24,C=new et(new qt(A,E,v),c.cabin);C.position.set(0,g+E/2,b),C.castShadow=C.receiveShadow=!0,a.add(C);const S=new et(new qt(A+.08,.09,v+.08),c.roof);S.position.set(0,g+E+.04,b),S.castShadow=!0,a.add(S);for(const Z of[-1,1]){const _t=new et(new qt(.02,.05,v-.3),c.cream);_t.position.set(Z*(A/2+.005),g+E-.18,b),a.add(_t);const at=_t.clone();at.position.y=g+.18,a.add(at);for(let Ct=x+1.6;Ct<M-.6;Ct+=1.45){if(Ct>x+2.6&&Ct<x+4.6)continue;const kt=new et(new qt(.03,.34,.5),c.window);kt.position.set(Z*(A/2+.005),g+E*.62,Ct),a.add(kt)}const Rt=ev(t);Rt.position.set(Z*(A/2+.012),g+E*.55,x+3.6),Rt.rotation.y=Z*(Math.PI/2),a.add(Rt)}for(const[Z,_t]of[[x-.005,-1],[M+.005,1]]){const at=new et(new qt(.9,.95,.03),c.red);at.position.set(0,g+.5,Z),a.add(at);const Rt=new et(new qt(.03,.9,.035),c.cream);Rt.position.set(0,g+.5,Z+_t*.005),a.add(Rt)}const y=new et(nv(),new ee({map:iv(),roughness:.6,side:ke}));y.position.set(0,g,h-1.5),a.add(y);const P=new et(new qt(.12,.06,2.1),c.cream);P.position.set(0,g+1.12,h-2.55),P.rotation.x=-.36,a.add(P);const k=new et(new ue(.07,.07,.55,8),c.black);k.position.set(.45,g+E+.3,M-1.4),a.add(k);const B=new et(new ue(.075,.075,.06,8),c.brass);B.position.set(.45,g+E+.5,M-1.4),a.add(B);for(const[Z,_t]of[[x+2.2,-.35],[x+2.8,-.35],[b+1.5,.3]]){const at=new et(new ue(.16,.12,.22,7),c.pot);at.position.set(_t,g+E+.19,Z),a.add(at);const Rt=new et(new nn(.2,0),c.leaf);Rt.position.set(_t,g+E+.4,Z),a.add(Rt);const Ct=new et(new nn(.06,0),c.flower);Ct.position.set(_t+.08,g+E+.55,Z),a.add(Ct)}const q=new et(new ue(.03,.03,4.5,6),c.cream);q.rotation.x=Math.PI/2,q.position.set(-.6,g+E+.12,b-1),a.add(q);const j=new et(new sn(.22,8,6),c.rope);j.scale.set(1,.9,1.3),j.position.set(0,.05,h-.02),a.add(j);for(const Z of[-1,1]){const _t=new et(new ue(.11,.11,.45,8),c.rope);_t.position.set(Z*(l+.08),.05,2),a.add(_t)}const U=new et(new ue(.1,.12,.18,10),c.brass);U.rotation.x=Math.PI/2,U.position.set(0,g+.25,h-.35),a.add(U);const Y=new Kg("#ffe7b0",0,60,.5,.6,1.2);Y.position.set(0,g+.3,h-.2),Y.target.position.set(0,-.5,h+20),a.add(Y,Y.target);const z=new Ht;z.position.set(0,0,-h-.05);const ut=new et(new qt(.05,.75,.9),c.hull);ut.position.set(0,-.3,-.45),z.add(ut);const mt=new et(new ue(.04,.04,1.1,6),c.black);mt.position.set(0,.45,0),z.add(mt);const Mt=new et(new ue(.025,.035,1.3,6),c.brass);Mt.rotation.x=Math.PI/2-.25,Mt.position.set(0,1.08,.62),z.add(Mt);const Nt=new et(new sn(.05,6,4),c.brass);Nt.position.set(0,1,0),z.add(Nt),a.add(z);const Qt=Xs(r??{coat:"#e8b931",trousers:"#2d3a55",skin:"#e3b08f",hair:"#5a3a22",hairStyle:"cap",hat:"#3d4a3a",longCoat:!1}),H=Qt.group;return H.position.set(0,g-.25,-h+.9),o?a.add(H):a.remove(Y,Y.target),{group:a,rudder:z,steerer:H,steererPerson:Qt,headlight:Y}}function ev(i){const t=document.createElement("canvas");t.width=512,t.height=160;const e=t.getContext("2d");e.fillStyle="#a3291f",e.fillRect(0,0,512,160),e.strokeStyle="#efe3c2",e.lineWidth=8,e.strokeRect(10,10,492,140),e.fillStyle="#f6d36b",e.font="800 64px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#3a120d",e.shadowOffsetX=3,e.shadowOffsetY=3,e.fillText(i,256,84,460);const n=new Ws(t);return n.colorSpace=Ie,new et(new ii(1.9,.6),new ee({map:n,roughness:.5}))}function nv(){const i=new de,t=wn*.42,e=1.15;return i.setAttribute("position",new Xt([-t,0,0,t,0,0,0,e,0],3)),i.setAttribute("uv",new Xt([0,0,1,0,.5,1],2)),i.computeVertexNormals(),i}function iv(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#1f4d3a",t.fillRect(0,0,256,256),t.fillStyle="#a3291f",t.beginPath(),t.moveTo(128,40),t.lineTo(200,170),t.lineTo(128,240),t.lineTo(56,170),t.closePath(),t.fill(),t.strokeStyle="#f6d36b",t.lineWidth=8,t.stroke();for(const[n,s,o]of[[128,150,"#e04f6a"],[108,175,"#f2efe0"],[148,175,"#e8a43c"]])t.fillStyle=o,t.beginPath(),t.arc(n,s,14,0,Math.PI*2),t.fill();const e=new Ws(i);return e.colorSpace=Ie,e}function sv(i){const t=new Ht;i.group.updateMatrixWorld(!0);const e=Mi(i.group,s=>{const o=s.clone();o.matrixAutoUpdate=!1,o.matrix.copy(s.matrixWorld),t.add(o)}),n=new et(e,ji());return n.castShadow=n.receiveShadow=!0,t.add(n),t}const Xi=16e3,Dr=Xi*Sn*Sn/12,ov=650,rv=700,av=7,To=.3,Wh=-3,Xh=5,Nl=(()=>{const i=wn/2,t=Sn/2;return[[0,t],[.55,t-.6],[-.55,t-.6],[i,t-3],[-i,t-3],[i,2],[-i,2],[i,-3],[-i,-3],[i*.95,-t+.4],[-i*.95,-t+.4],[0,-t]]})();class cv{constructor(t,e){F(this,"x",0);F(this,"z",0);F(this,"psi",0);F(this,"u",0);F(this,"v",0);F(this,"r",0);F(this,"notch",0);F(this,"thrust",0);F(this,"rudder",0);F(this,"s",0);F(this,"d",0);F(this,"contacts",[]);F(this,"obstacles",[]);F(this,"tethers",[]);this.route=t,this.ww=e}placeAt(t,e=!0){const n=this.route.frame(t);this.x=n.x,this.z=n.z,this.psi=Math.atan2(n.tx,n.tz)+(e?0:Math.PI),this.s=t,this.u=this.v=this.r=0}get speed(){return Math.hypot(this.u,this.v)}span(){let t=1/0,e=-1/0;for(const[n,s]of Nl){const[o,r]=this.toWorld(n,s),a=this.route.project(o,r,this.s);t=Math.min(t,a.s),e=Math.max(e,a.s)}return[t,e]}step(t,e){const n=xe(e,-1,1),s=n===0?2.2:1.6;this.rudder+=xe(n-this.rudder,-s*t,s*t);const o=this.notch>=0?this.notch*ov:this.notch*rv;this.thrust+=xe(o-this.thrust,-2200*t,2200*t);const{u:r,v:a,r:c}=this,l=this.thrust,h=this.rudder*(300*r*Math.abs(r)+.5*Math.max(l,0)),f=l-480*r*Math.abs(r)-250*r,u=-9e3*a*Math.abs(a)-4e3*a+h*.3;let d=h*av-12e4*c-6e5*c*Math.abs(c);l<0&&(d+=.12*l*1.5),this.u+=(f/Xi-a*c)*t,this.v+=(u/Xi+r*c)*t,this.r+=d/Dr*t,this.psi+=this.r*t;const g=Math.sin(this.psi),_=Math.cos(this.psi);this.x+=(this.u*g-this.v*_)*t,this.z+=(this.u*_+this.v*g)*t,this.contacts.length=0;for(let p=0;p<2;p++)this.resolveContacts(),this.resolveExtras();const m=this.route.project(this.x,this.z,this.s);this.s=m.s,this.d=m.d}toWorld(t,e){const n=Math.sin(this.psi),s=Math.cos(this.psi);return[this.x+e*n-t*s,this.z+e*s+t*n]}resolveContacts(){const{route:t,ww:e}=this,n=e.gates.filter(o=>Math.abs(o.s-this.s)<Sn+6&&e.gateBlocks(o)),s=this.obstacles.filter(o=>Math.abs(o.x-this.x)+Math.abs(o.z-this.z)<45);for(const[o,r]of Nl){const[a,c]=this.toWorld(o,r),l=t.project(a,c,this.s),h=t.frame(l.s),f=e.halfWidthAt(l.s)-.05;if(Math.abs(l.d)>f){const u=Math.sign(l.d);this.applyContact(a,c,h.nx*u,h.nz*u,Math.abs(l.d)-f,"bank")}for(const u of n)this.s<u.s&&l.s>u.s-To?this.applyContact(a,c,h.tx,h.tz,l.s-(u.s-To),"gate"):this.s>u.s&&l.s<u.s+To&&this.applyContact(a,c,-h.tx,-h.tz,u.s+To-l.s,"gate");for(const u of s){const d=a-u.x,g=c-u.z,_=Math.sin(u.psi),m=Math.cos(u.psi),p=d*_+g*m,x=-d*m+g*_,M=u.halfB+.05-Math.abs(x),v=u.halfL+.05-Math.abs(p);if(!(M<=0||v<=0))if(M<v){const b=-Math.sign(x)||1;this.applyContact(a,c,-m*b,_*b,M,"boat",u)}else{const b=-Math.sign(p)||1;this.applyContact(a,c,_*b,m*b,v,"boat",u)}}l.s<2&&this.applyContact(a,c,-h.tx,-h.tz,2-l.s,"bank"),l.s>t.length-2&&this.applyContact(a,c,h.tx,h.tz,l.s-(t.length-2),"bank")}}resolveExtras(){const t=Math.sin(this.psi),e=Math.cos(this.psi),n=wn/2,s=Sn/2;for(const o of this.obstacles){if(Math.abs(o.x-this.x)+Math.abs(o.z-this.z)>45)continue;const r=Math.sin(o.psi),a=Math.cos(o.psi);for(const[c,l]of[[o.halfB,o.halfL],[-o.halfB,o.halfL],[o.halfB,-o.halfL],[-o.halfB,-o.halfL]]){const h=o.x+l*r-c*a,f=o.z+l*a+c*r,u=h-this.x,d=f-this.z,g=u*t+d*e,_=-u*e+d*t,m=n-Math.abs(_),p=s-.6-Math.abs(g);m<=0||p<=0||(m<p?this.applyContact(h,f,-e*Math.sign(_),t*Math.sign(_),m,"boat",o):this.applyContact(h,f,t*Math.sign(g),e*Math.sign(g),p,"boat",o))}}for(const o of this.tethers){const[r,a]=this.toWorld(o.local[0],o.local[1]),c=r-o.anchor[0],l=a-o.anchor[1],h=Math.hypot(c,l);h>o.length&&this.applyContact(r,a,c/h,l/h,h-o.length,"bank",void 0,!0)}}applyContact(t,e,n,s,o,r,a,c=!1){this.x-=n*o,this.z-=s*o;const l=t-this.x,h=e-this.z,f=Math.sin(this.psi),u=Math.cos(this.psi);let d=this.u*f-this.v*u,g=this.u*u+this.v*f;const _=d+this.r*h,m=g-this.r*l,p=_*n+m*s;if(p<=0)return;const x=h*n-l*s,M=-1.15*p/(1/Xi+x*x/Dr);d+=M*n/Xi,g+=M*s/Xi,this.r+=M*x/Dr,d*=.995,g*=.995,this.u=d*f+g*u,this.v=-d*u+g*f,c||this.contacts.push({impulse:-M,kind:r,obstacle:a})}}const lv={KeyW:"throttleUp",ArrowUp:"throttleUp",KeyS:"throttleDown",ArrowDown:"throttleDown",Space:"neutral",KeyQ:"paddles",KeyE:"gates",Tab:"nextGate",KeyT:"timeFaster",KeyR:"timeSlower",KeyV:"camera",KeyM:"map",KeyH:"help",KeyN:"mute",KeyL:"headlight",KeyF:"moor",KeyG:"clear",KeyP:"autopilot",Enter:"nextTrip"};class hv{constructor(){F(this,"held",new Set);F(this,"queue",[]);F(this,"onFirstInput",null);addEventListener("keydown",t=>{this.onFirstInput&&(this.onFirstInput(),this.onFirstInput=null);const e=lv[t.code];e&&t.preventDefault(),!t.repeat&&(this.held.add(t.code),e&&this.queue.push(e))}),addEventListener("keyup",t=>this.held.delete(t.code)),addEventListener("blur",()=>this.held.clear())}get steer(){const t=this.held.has("KeyA")||this.held.has("ArrowLeft"),e=this.held.has("KeyD")||this.held.has("ArrowRight");return(t?1:0)-(e?1:0)}push(t){this.queue.push(t)}drain(){return this.queue.splice(0)}}class uv{constructor(t,e,n,s){F(this,"root");F(this,"loc");F(this,"helm");F(this,"lockPanel");F(this,"toasts");F(this,"help");F(this,"chip");F(this,"soundBtn");F(this,"trip");F(this,"promptEl");F(this,"summary");F(this,"lastTrip","");F(this,"lastPrompt","");F(this,"lastMuted",null);F(this,"lastLock","");F(this,"lastHelm","");F(this,"lastLoc","");F(this,"winding",!1);this.root=t,t.innerHTML=`
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
      </div>`,this.loc=t.querySelector(".loc"),this.helm=t.querySelector(".helm"),this.lockPanel=t.querySelector(".lock-panel"),this.toasts=t.querySelector(".toasts"),this.help=t.querySelector(".help"),this.chip=t.querySelector(".chip"),this.soundBtn=t.querySelector(".sound-btn"),this.trip=t.querySelector(".trip"),this.promptEl=t.querySelector(".prompt"),this.summary=t.querySelector(".summary"),this.summary.addEventListener("click",o=>{o.target.closest("button")&&e("nextTrip")}),this.soundBtn.addEventListener("click",()=>{e("mute"),this.soundBtn.blur()}),t.appendChild(n),t.querySelector(".map-wrap").appendChild(s),this.lockPanel.addEventListener("click",o=>{var a;const r=(a=o.target.closest("button"))==null?void 0:a.dataset.act;r&&e(r)}),n.addEventListener("click",()=>e("map")),s.addEventListener("click",()=>e("map"))}toggleHelp(t){this.help.hidden=t===void 0?!this.help.hidden:!t}setMapOpen(t){this.root.querySelector(".map-wrap").classList.toggle("open",t)}toast(t,e="info",n=4200){for(const o of this.toasts.children)if(o.textContent===t)return;const s=document.createElement("div");s.className=`toast ${e}`,s.textContent=t,this.toasts.appendChild(s),setTimeout(()=>s.classList.add("out"),n),setTimeout(()=>s.remove(),n+600)}setLocation(t,e){const n=t+e;n!==this.lastLoc&&(this.lastLoc=n,this.loc.innerHTML=`<div class="eyebrow">Shropshire Union Canal</div><div class="title">${t}</div><div class="sub">${e}</div>`)}setHelm(t){const e=[];for(let c=Xh;c>=Wh;c--){const l=c===t.notch?"on":"",h=c===0?"N":(c>0,"");e.push(`<i class="${l} ${c===0?"zero":c<0?"astern":""}">${h}</i>`)}const n=Math.round(-t.rudder*40),s=Math.floor(t.hour),o=Math.floor((t.hour-s)*60),r=`
      <div class="throttle">${e.join("")}</div>
      <div class="gauges">
        <div class="speed"><b>${t.speedMph.toFixed(1)}</b><span>mph</span></div>
        <div class="dir">${t.notch>0?"Ahead":t.notch<0?"Astern":"Neutral"} ${t.notch!==0?Math.abs(t.notch):""}</div>
        <div class="tiller"><div style="transform: translateX(${n}px)"></div></div>
      </div>`;r!==this.lastHelm&&(this.lastHelm=r,this.helm.innerHTML=r);const a=`${String(s).padStart(2,"0")}:${String(o).padStart(2,"0")} · ${t.timeScale}× time · <kbd>H</kbd> help`;this.chip.innerHTML!==a&&(this.chip.innerHTML=a),t.muted!==this.lastMuted&&(this.lastMuted=t.muted,this.soundBtn.classList.toggle("off",t.muted),this.soundBtn.setAttribute("aria-label",t.muted?"Unmute sound":"Mute sound"),this.soundBtn.innerHTML=dv(t.muted))}setTrip(t,e,n,s,o,r){const a=`<div class="eyebrow">Trip ${t} · ${e}${o?" · done!":""}</div><div class="brief">${n}</div><div class="where">${s}</div><div class="journal">${r}</div>`;a!==this.lastTrip&&(this.lastTrip=a,this.trip.innerHTML=a)}setPrompt(t){const e=t?`<kbd>${t.key}</kbd> ${t.text}`:"";e!==this.lastPrompt&&(this.lastPrompt=e,this.promptEl.innerHTML=e,this.promptEl.classList.toggle("waiting",!!t&&!t.ready)),this.promptEl.hidden=!t}showSummary(t,e){const n=Math.floor(t.hours),s=Math.round((t.hours-n)*60);this.summary.innerHTML=`
      <div class="eyebrow">Trip complete</div>
      <div class="title">Moored at ${e}</div>
      <dl>
        <dt>Time on the water</dt><dd>${n?`${n} h `:""}${s} min</dd>
        <dt>Bumps</dt><dd>${t.bumps}</dd>
        <dt>Boats and anglers upset</dt><dd>${t.rocked}</dd>
        ${t.cleared?`<dt>Blockages cleared</dt><dd>${t.cleared} 🛒</dd>`:""}
      </dl>
      <p>${t.verdict}</p>
      <button><kbd>Enter</kbd> Next trip</button>`,this.summary.hidden=!1}hideSummary(){this.summary.hidden=!0}get isWinding(){return this.winding}setLockPanel(t,e){if(!e||!e.gate&&!e.step){this.lockPanel.hidden=!0,this.lastLock="",this.winding=!1;return}const n=e.gate,s=e.step,o=(s==null?void 0:s.group)??n.group,r=(s==null?void 0:s.uphill)??!0;this.winding=!!n&&n.paddle>0&&n.paddle<1;const a=o.bodies.map(M=>t.bodies[M]);let c=1/0,l=-1/0;for(const M of a)c=Math.min(c,M.lo-1.6),l=Math.max(l,M.hi+.6);const h=M=>Math.round((M-c)/(l-c)*100),f=a.map((M,v)=>v);r||f.reverse();const u=[];f.forEach((M,v)=>{const b=a[M],E=b.kind==="pound"?"canal":o.staircase?b.label.replace("chamber ",""):"lock",A=s&&s.boatBody===M?'<i class="dg-boat"></i>':"";if(u.push(`<div class="dg-body ${b.kind}"><div class="dg-floor" style="height:${h(b.lo-1.6)}%"></div><div class="dg-water" style="height:${h(b.level)}%">${A}</div><span>${E}</span></div>`),v<f.length-1){const C=r?M:M-1,S=o.gates[C],y=[S.open>.5?"open":"closed",S===n?"sel":"",S===(s==null?void 0:s.gate)?"guide":""].join(" ");u.push(`<div class="dg-gate ${y}">${S.paddle>.05?'<i class="dg-paddle"></i>':""}</div>`)}});let d="";if(n){const M=t.levelsMatch(n),v=!n.wantOpen&&!M||n.wantOpen&&e.boatSpans,b=E=>(s==null?void 0:s.gate)===n&&s.action===E?"guide":"";d=`
      <div class="lp-sel"><span>Selected:</span> <b>${fv(n.label)}</b>${e.candidates>1?' <span class="lp-tab"><kbd>Tab</kbd> other gate</span>':""}</div>
      <div class="lp-actions">
        <button data-act="paddles" class="${n.wantPaddle?"active":""} ${b(n.wantPaddle?"paddlesDown":"paddlesUp")}"><kbd>Q</kbd> ${n.wantPaddle?"Drop paddles":"Wind paddles up"}<i class="prog" style="width:${Math.round(n.paddle*100)}%"></i></button>
        <button data-act="gates" class="${b(n.wantOpen?"close":"open")}" ${v?"disabled":""}><kbd>E</kbd> ${n.wantOpen?"Close gates":"Open gates"}<i class="prog" style="width:${Math.round(n.open*100)}%"></i></button>
      </div>`}const g=e.volunteers==="active",_=!g&&(s!=null&&s.gate)&&n&&s.gate!==n?`<div class="lp-note">The guide wants the ${s.gate.label}. Tab back to it.</div>`:"",m=s?g?`Volunteers: ${s.text.replace(/ \((Q|E)\)/g,"").replace(/^Wind up/,"winding up").replace(/^Drop/,"dropping").replace(/^Open/,"opening").replace(/^Close/,"closing")}`:s.text:"",p=e.volunteers==="available"?'<div class="lp-vol"><span>🙋 Volunteer lock-keepers on duty</span><button data-act="autopilot"><kbd>P</kbd> Let them work you through</button></div>':g?'<div class="lp-vol on"><span>🙋 The volunteers are working you through. Steer or use the throttle to take over.</span></div>':"",x=`
      <div class="lp-head">
        <div class="eyebrow">${o.name} · going ${r?"up":"down"}</div>
      </div>
      <div class="dg">${u.join("")}</div>
      ${s?`<div class="lp-step"><b>Next:</b> ${m}</div>`:""}
      ${_}
      ${p}
      ${g?"":d}`;x!==this.lastLock&&(this.lastLock=x,this.lockPanel.innerHTML=x),this.lockPanel.hidden=!1}}function dv(i){return`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" />${i?'<path d="M16 9l5 6M21 9l-5 6" />':'<path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M18.5 5.5a9 9 0 0 1 0 13" />'}</svg>`}const fv=i=>i[0].toUpperCase()+i.slice(1),Re=.5,Ol=650;class pv{constructor(t,e,n,s){F(this,"el");F(this,"bigEl");F(this,"base");F(this,"locks");F(this,"bigOpen",!1);F(this,"dest",null);F(this,"places",[]);F(this,"hazard",null);this.b=s;const o=this.base=document.createElement("canvas");o.width=Math.ceil((s.x1-s.x0)*Re),o.height=Math.ceil((s.z1-s.z0)*Re);const r=o.getContext("2d"),a=f=>(f-s.x0)*Re,c=f=>(f-s.z0)*Re,l=(f,u)=>{r.beginPath();for(let d=0;d<f.length;d+=2)(d?r.lineTo:r.moveTo).call(r,a(f[d]),c(f[d+1]));u&&r.closePath()};r.fillStyle="#e5e9d2",r.fillRect(0,0,o.width,o.height),r.fillStyle="#c9dcaa";for(const f of t.parks)l(f.p,!0),r.fill();r.fillStyle="#9cc3d2";for(const f of t.water)l(f.p,!0),r.fill();r.strokeStyle="#9cc3d2",r.lineCap=r.lineJoin="round";for(const f of t.rivers)r.lineWidth=f.w*Re,l(f.p,!1),r.stroke();r.fillStyle="#d2c3ae";for(const f of t.buildings)l(f.p,!0),r.fill();for(const f of[0,1])for(const u of t.roads)u.w<3||(r.strokeStyle=f?"#ffffff":"#b9b2a4",r.lineWidth=u.w*Re+(f?0:1.5),l(u.p,!1),r.stroke());r.strokeStyle="#5b5550",r.lineWidth=1.5,r.setLineDash([4,3]);for(const f of t.rails)l(f.p,!1),r.stroke();r.setLineDash([]),r.strokeStyle="#2f7aa0",r.lineWidth=4,l(t.centreline,!1),r.stroke();const h=new Map;for(const f of n.gates){const u=e.frame(f.s);let d=h.get(f.lockName);d||h.set(f.lockName,d={name:f.lockName,x:0,z:0,gates:[]}),d.gates.push({x:u.x,z:u.z,nx:u.nx,nz:u.nz})}for(const f of h.values())f.x=f.gates.reduce((u,d)=>u+d.x,0)/f.gates.length,f.z=f.gates.reduce((u,d)=>u+d.z,0)/f.gates.length;this.locks=[...h.values()],this.el=document.createElement("canvas"),this.el.className="minimap",this.el.width=this.el.height=440,this.bigEl=document.createElement("canvas"),this.bigEl.className="bigmap"}draw(t,e,n){const s=this.el.getContext("2d"),o=this.el.width,r=Ol*Re,a=(t-this.b.x0)*Re-r/2,c=(e-this.b.z0)*Re-r/2;s.fillStyle="#e5e9d2",s.fillRect(0,0,o,o),s.drawImage(this.base,a,c,r,r,0,0,o,o);const l=o/Ol,h=(f,u)=>[o/2+(f-t)*l,o/2+(u-e)*l];if(this.drawPlaces(s,h,2,!1),this.drawLocks(s,h,2,9),this.drawDestination(s,h,2,o),this.drawHazard(s,h,2),this.boatMarker(s,o/2,o/2,n,1.6),this.bigOpen){const f=this.bigEl,u=Math.min(2,devicePixelRatio);f.width=f.clientWidth*u,f.height=f.clientHeight*u;const d=f.getContext("2d"),g=Math.min(f.width/this.base.width,f.height/this.base.height),_=(f.width-this.base.width*g)/2,m=(f.height-this.base.height*g)/2;d.fillStyle="#e5e9d2",d.fillRect(0,0,f.width,f.height),d.drawImage(this.base,_,m,this.base.width*g,this.base.height*g);const p=Re*g,x=(M,v)=>[_+(M-this.b.x0)*p,m+(v-this.b.z0)*p];this.drawPlaces(d,x,u,!0),this.drawLocks(d,x,u,7),this.drawDestination(d,x,u*1.3,null),this.drawHazard(d,x,u*1.3),this.boatMarker(d,_+(t-this.b.x0)*Re*g,m+(e-this.b.z0)*Re*g,n,1.4*u)}}addMooredBoats(t){const e=this.base.getContext("2d");e.fillStyle="#5b4a8a";for(const n of t)e.save(),e.translate((n.x-this.b.x0)*Re,(n.z-this.b.z0)*Re),e.rotate(-n.psi),e.fillRect(-Math.max(1.2,n.halfB*Re),-n.halfL*Re,Math.max(2.4,n.halfB*2*Re),n.halfL*2*Re),e.restore()}setPlaces(t){this.places=t}drawPlaces(t,e,n,s){t.save(),t.textAlign="center",t.textBaseline="middle";const o=[];for(const r of this.places){const[a,c]=e(r.x,r.z);if(!(a<-20||c<-20||a>t.canvas.width+20||c>t.canvas.height+20)&&(t.fillStyle="rgba(255, 250, 235, 0.95)",t.strokeStyle=r.icon==="★"?"#1d3557":"#6e1f1a",t.lineWidth=1.5*n,t.beginPath(),t.arc(a,c,9*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#1d3557",t.font=`${r.icon==="★"?800:400} ${11*n}px Nunito, sans-serif`,t.fillText(r.icon,a,c+.5*n),s)){t.font=`700 ${10*n}px Nunito, sans-serif`;const l=t.measureText(r.name).width,h=a-l/2,f=c+11*n,u=c+23*n;if(o.some(([d,g,_,m])=>h<_&&h+l>d&&f<m&&u>g))continue;o.push([h-4*n,f,h+l+4*n,u]),t.lineWidth=3*n,t.strokeStyle="rgba(255,255,255,0.9)",t.strokeText(r.name,a,c+17*n),t.fillStyle="#3a2a1a",t.fillText(r.name,a,c+17*n)}}t.restore()}setHazard(t,e=0){this.hazard=t===null?null:{x:t,z:e}}drawHazard(t,e,n){if(!this.hazard)return;const[s,o]=e(this.hazard.x,this.hazard.z);t.save(),t.fillStyle="#ffcf4a",t.strokeStyle="#7a2f00",t.lineWidth=1.5*n,t.beginPath(),t.moveTo(s,o-10*n),t.lineTo(s+9*n,o+6*n),t.lineTo(s-9*n,o+6*n),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#7a2f00",t.font=`900 ${10*n}px Nunito, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("!",s,o+1*n),t.restore()}setDestination(t,e,n){this.dest={x:t,z:e,name:n}}drawDestination(t,e,n,s){if(!this.dest)return;let[o,r]=e(this.dest.x,this.dest.z);if(s!==null){const a=s/2,c=o-a,l=r-a,h=Math.hypot(c,l),f=a-14*n;h>f&&(o=a+c/h*f,r=a+l/h*f)}t.save(),t.fillStyle="#ffcf4a",t.strokeStyle="#7a5a10",t.lineWidth=1.5*n,t.beginPath(),t.moveTo(o,r),t.lineTo(o,r-18*n),t.stroke(),t.beginPath(),t.moveTo(o,r-18*n),t.lineTo(o+12*n,r-13.5*n),t.lineTo(o,r-9*n),t.closePath(),t.fill(),t.stroke(),t.restore()}drawLocks(t,e,n,s){t.save(),t.lineCap="round";for(const o of this.locks)for(const r of o.gates){const[a,c]=e(r.x,r.z),l=r.nx*s*n,h=r.nz*s*n;for(const[f,u]of[[5,"#ffffff"],[2.5,"#1b1b1b"]])t.strokeStyle=u,t.lineWidth=f*n,t.beginPath(),t.moveTo(a-l,c-h),t.lineTo(a+l,c+h),t.stroke()}t.font=`800 ${12*n}px Nunito, sans-serif`,t.textBaseline="middle";for(const o of this.locks){const[r,a]=e(o.x,o.z),c=o.gates.length>2?`${o.name} · ${o.gates.length-1} locks`:o.name,l=t.measureText(c).width,h=20*n,f=8*n,u=r-l/2-f,d=a-h-12*n;t.fillStyle="rgba(31, 77, 58, 0.94)",t.beginPath(),t.roundRect(u,d,l+f*2,h,h/2),t.fill(),t.beginPath(),t.moveTo(r-5*n,d+h-.5),t.lineTo(r+5*n,d+h-.5),t.lineTo(r,d+h+6*n),t.fill(),t.fillStyle="#f6efdd",t.fillText(c,u+f,d+h/2+n)}t.restore()}boatMarker(t,e,n,s,o){t.save(),t.translate(e,n),t.rotate(-s+Math.PI),t.scale(o,o),t.fillStyle="#a3291f",t.strokeStyle="#fff",t.lineWidth=2,t.beginPath(),t.moveTo(0,-11),t.lineTo(6,8),t.lineTo(0,4),t.lineTo(-6,8),t.closePath(),t.stroke(),t.fill(),t.restore()}}class mv{constructor(){F(this,"ctx",null);F(this,"master");F(this,"noise");F(this,"waterGain");F(this,"nextThump",0);F(this,"engine",null);F(this,"nextBird",0);F(this,"nextClick",0);F(this,"muted",gv())}start(){if(this.ctx)return;const t=this.ctx=new AudioContext;this.master=t.createGain(),this.master.gain.value=this.muted?0:.7,this.master.connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*2,t.sampleRate);const e=this.noise.getChannelData(0);for(let o=0;o<e.length;o++)e[o]=Math.random()*2-1;const n=t.createBufferSource();n.buffer=this.noise,n.loop=!0;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=900,this.waterGain=t.createGain(),this.waterGain.gain.value=0,n.connect(s).connect(this.waterGain).connect(this.master),n.start(),this.loadEngine().catch(o=>console.warn("Engine samples unavailable, using synth",o))}async loadEngine(){const t=this.ctx,e=async l=>t.decodeAudioData(await(await fetch(l)).arrayBuffer()),[n,s]=await Promise.all([e("./audio/engine-idle.wav"),e("./audio/engine-run.wav")]),o=(l,h)=>{const f=t.createBufferSource();return f.buffer=l,f.loop=!0,f.connect(h),f.start(),f},r=t.createGain(),a=t.createGain();r.gain.value=a.gain.value=0;const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=2400,r.connect(c),a.connect(c),c.connect(this.master),this.engine={idle:o(n,r),run:o(s,a),idleGain:r,runGain:a}}toggleMute(){this.muted=!this.muted,this.ctx&&(this.master.gain.value=this.muted?0:.7);try{localStorage.setItem("canal.muted",this.muted?"1":"0")}catch{}}update(t,e,n,s){const o=this.ctx;if(!o)return;const r=o.currentTime,a=Math.abs(t);if(this.engine){const c=this.engine,l=Math.min(1,a*.4);c.idleGain.gain.setTargetAtTime((1-l)*.55,r,.25),c.runGain.gain.setTargetAtTime(l*(.45+a*.05),r,.25),c.idle.playbackRate.setTargetAtTime(1+a*.08,r,.4),c.run.playbackRate.setTargetAtTime(.62+Math.max(0,a-1)*.095,r,.4)}else{const c=7+a*1.9;for(this.nextThump<r&&(this.nextThump=r);this.nextThump<r+.1;)this.thump(this.nextThump,.22+a*.035),this.nextThump+=1/c}this.waterGain.gain.setTargetAtTime(Math.min(.35,e*.06),r,.3),n&&r>this.nextClick&&(this.click(r),this.nextClick=r+.13),s&&r>this.nextBird&&(this.nextBird>0&&this.bird(r),this.nextBird=r+4+Math.random()*9)}bump(t){const e=this.ctx;if(!e)return;const n=e.currentTime,s=e.createOscillator();s.frequency.setValueAtTime(70,n),s.frequency.exponentialRampToValueAtTime(35,n+.25);const o=e.createGain();o.gain.setValueAtTime(Math.min(.9,t),n),o.gain.exponentialRampToValueAtTime(.001,n+.35),s.connect(o).connect(this.master),s.start(n),s.stop(n+.4)}quack(){const t=this.ctx;if(!t)return;const e=t.currentTime;for(let n=0;n<2;n++){const s=e+n*.16,o=t.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(520,s),o.frequency.exponentialRampToValueAtTime(330,s+.11);const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=1100,r.Q.value=3;const a=t.createGain();a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.25,s+.015),a.gain.exponentialRampToValueAtTime(1e-4,s+.12),o.connect(r).connect(a).connect(this.master),o.start(s),o.stop(s+.13)}}thump(t,e){const n=this.ctx,s=n.createOscillator();s.type="triangle",s.frequency.setValueAtTime(58,t),s.frequency.exponentialRampToValueAtTime(38,t+.08);const o=n.createGain();o.gain.setValueAtTime(e,t),o.gain.exponentialRampToValueAtTime(.001,t+.11),s.connect(o).connect(this.master),s.start(t),s.stop(t+.12);const r=n.createBufferSource();r.buffer=this.noise;const a=n.createBiquadFilter();a.type="bandpass",a.frequency.value=220;const c=n.createGain();c.gain.setValueAtTime(e*.5,t),c.gain.exponentialRampToValueAtTime(.001,t+.06),r.connect(a).connect(c).connect(this.master),r.start(t,Math.random(),.07)}click(t){const e=this.ctx,n=e.createBufferSource();n.buffer=this.noise;const s=e.createBiquadFilter();s.type="highpass",s.frequency.value=2500;const o=e.createGain();o.gain.setValueAtTime(.35,t),o.gain.exponentialRampToValueAtTime(.001,t+.03),n.connect(s).connect(o).connect(this.master),n.start(t,Math.random(),.04)}bird(t){const e=this.ctx,n=2+Math.floor(Math.random()*4),s=2600+Math.random()*1600;for(let o=0;o<n;o++){const r=t+o*(.09+Math.random()*.05),a=e.createOscillator();a.type="sine",a.frequency.setValueAtTime(s,r),a.frequency.exponentialRampToValueAtTime(s*(.7+Math.random()*.6),r+.07);const c=e.createGain();c.gain.setValueAtTime(1e-4,r),c.gain.exponentialRampToValueAtTime(.05,r+.01),c.gain.exponentialRampToValueAtTime(1e-4,r+.08),a.connect(c).connect(this.master),a.start(r),a.stop(r+.1)}}}function gv(){try{return localStorage.getItem("canal.muted")==="1"}catch{return!1}}const Ao=.04,_v=90;function Fl(i,t,e){const n=xv(i,t,e);return n!=null&&n.keeper&&(n.text=vv(n)),n}function vv(i){var n;const t=i.gate.label,e=(n=i.text.match(/\(Q\) (.*)\.$/))==null?void 0:n[1];switch(i.action){case"paddlesUp":return`The lock-keeper is winding up the paddles on the ${t}${e?` ${e}`:""}. Sit tight.`;case"paddlesDown":return`The lock-keeper is dropping the paddles on the ${t}.`;case"close":return`The lock-keeper is closing the ${t}.`;case"open":return`The lock-keeper is opening the ${t}.`;case"wait":return i.text.replace("Water's running","The lock-keeper is letting water run");default:return i.text}}function xv(i,t,e){const[n,s]=t,o=(n+s)/2;let r,a=1/0;for(const v of i.groups){const b=v.gates[0].s,E=v.gates.at(-1).s,A=e?b-o:o-E,C=o>b-2&&o<E+2,S=C?0:A;(C||A>0&&A<_v)&&S<a&&(a=S,r=v)}if(!r){for(const v of i.groups){const b=v.gates[0].s,E=v.gates.at(-1).s,A=e?o-E:b-o;if(A>0&&A<60){const C=v.gates.find(y=>y.wantPaddle)??v.gates.find(y=>y.wantOpen),S=e?v.gates.at(-1):v.gates[0];if(C)return{group:v,uphill:e,gate:C,boatBody:e?v.bodies.length-1:0,adjacent:[S],keeper:C!==S,action:C.wantPaddle?"paddlesDown":"close",text:C.wantPaddle?`Before you go: drop the paddles on the ${C.label} behind you (Q).`:`Before you go: close the ${C.label} behind you (E).`}}}return null}const c=r.gates.length-1,l=e?r.gates:[...r.gates].reverse(),f=(e?r.bodies:[...r.bodies].reverse()).map(v=>i.bodies[v]),u=v=>e?v:c+1-v;let d=-1;for(let v=0;v<=c+1;v++){const b=f[v];n>=b.s0-.2&&s<=b.s1+.2&&(d=v)}const g=l.find(v=>v.s>n&&v.s<s),_=d<0?g?[g]:[]:d===c+1?[l[c]]:[l[d-1],l[d]].filter(v=>!!v),m=(v,b,E,A=d)=>({group:r,uphill:e,gate:v,action:b,text:E,boatBody:A<0?-1:u(A),adjacent:_,keeper:!!v&&!_.includes(v)&&b!=="drive"});if(d<0)return m(g??null,"drive","Keep going, nice and slow.");if(d===c+1){const v=r.gates.find(b=>b.wantPaddle)??r.gates.find(b=>b.wantOpen);return v?m(v,v.wantPaddle?"paddlesDown":"close",v.wantPaddle?`You're through! Drop the paddles on the ${v.label} behind you (Q).`:`You're through! Close the ${v.label} behind you (E).`):null}const p=l[d],x=v=>v.label==="the canal"?v===f[0]?"the canal behind you":"the canal ahead":v.label;if(d>0&&l[d-1].wantOpen)return m(l[d-1],"close",`Close the ${l[d-1].label} behind you (E).`);if(Math.abs(f[d].level-f[d+1].level)<Ao){for(const v of r.gates)if(v!==p&&v.wantPaddle)return m(v,"paddlesDown",`Drop the paddles on the ${v.label} (Q) so the water stays put.`)}else{const v=l.find((U,Y)=>Y!==d&&U.wantOpen);if(v)return m(v,"close",`First close the ${v.label} (E), or the water will just run away.`);const b=r.gates.filter(U=>U.wantPaddle&&Math.abs(i.bodies[U.below].level-i.bodies[U.above].level)>=Ao);if(b.length>1)return m(b[1],"paddlesDown",`Drop the paddles on the ${b[1].label} (Q). One set at a time, or the water just runs straight through.`);if(b.length===1){const U=b[0],Y=i.bodies[U.below],z=i.bodies[U.above],ut=z.level-Y.level,mt=U.flow===0&&U.paddle>.9?" Hmm, it isn't moving. Something's open at the other end.":"";return m(U,"wait",`Water's running from ${x(z)} into ${x(Y)}… levels ${ut.toFixed(1)} m apart.${mt} (T speeds time up.)`)}const E=U=>f[U].kind==="pound"||f[U].level>f[U].hi-Ao,A=U=>f[U].kind==="pound"||f[U].level<f[U].lo+Ao,C=(U,Y)=>l[Math.min(U,Y)],S=U=>e?U+1:U-1,y=U=>e?U-1:U+1,P=U=>{const Y=S(U);return E(Y)?[C(U,Y),`to fill ${x(f[U])} from ${x(f[Y])}`]:P(Y)},k=U=>{const Y=y(U);return A(Y)?[C(U,Y),`to empty ${x(f[U])} into ${x(f[Y])}`]:k(Y)};let B;if(f[d].kind==="pound"||f[d+1].kind==="pound"){const U=f[d].level>f[d+1].level?f[d]:f[d+1],Y=U===f[d]?f[d+1]:f[d];B=[p,U.kind==="pound"?`to fill ${x(Y)} from ${x(U)}`:`to empty ${x(U)} into ${x(Y)}`]}else(e?!E(d+1):!A(d+1))?(B=e?P(d+1):k(d+1),B[1]+=" first"):(e?!A(d):!E(d))?(B=e?k(d):P(d),B[1]+=" first"):B=[p,`so ${x(f[e?d+1:d])} empties into ${x(f[e?d:d+1])}`];const[q,j]=B;for(const U of r.gates)if(U!==q&&U.wantPaddle)return m(U,"paddlesDown",`Drop the paddles on the ${U.label} (Q) so the water stays put.`);return m(q,"paddlesUp",`Wind up the paddles on the ${q.label} (Q) ${j}.`)}return p.wantOpen?p.open<.97?m(p,"wait",`The ${p.label} are swinging open…`):p.wantPaddle?m(p,"paddlesDown",`Drop the paddles on the ${p.label} (Q).`):m(p,"drive",`Gates open. Drive ${d+1===c+1?"out of the lock":`into ${x(f[d+1])}`}.`):m(p,"open",`Levels match. Open the ${p.label} (E).`)}const kl=["Kingfisher","Dunroamin","Willow","Morning Mist","Heron","Bramble","Otter","Lazy Days","Moorhen","Puddle Duck","Wren","Seren","Daisy May","Jubilee","Halcyon","Mallard","Badger","Tilly","Dragonfly","Rosie","Swallow","Nutmeg","Lily Pad","Bluebell","Damselfly","Kestrel","Second Wind","Tortoise","Meander","Sunflower","Jolly Roger","Dormouse","Albatross","Grebe","Primrose","Liberty","Plover","Hedgehog","Elderflower","Coot","Teasel","Old Bill","Marigold","Windrush","Peregrine","Thistle","Snowdrop","Toad Hall","Cobble","Foxglove","Pippin","Salamander","Spindle","Saffron","Sloe"],zl=["#1f4d3a","#7a1f2b","#1d3557","#2e2a4a","#5a3d1e","#2f5d62","#6b2737","#264d2a","#3b4a6b","#8a5a1e"],Bl=["#7c2f23","#3a3d40","#d9ccaa","#2b2b2b","#8a7650","#4a5a3a"];class Mv{constructor(t,e,n,s,o,r,a){F(this,"group",new Ht);F(this,"boats",[]);F(this,"zones");F(this,"highlight");F(this,"marker");F(this,"time",0);this.route=t,this.ww=e,this.terrain=n,this.zones=[{id:"tower",name:"Tower Wharf",kind:"visitor",s0:o+10,s1:o+55},{id:"city",name:"City moorings, Cow Lane Bridge",kind:"visitor",s0:1150,s1:1215},{id:"hoole",name:"Hoole",kind:"visitor",s0:2050,s1:2110},{id:"christleton",name:"Christleton",kind:"visitor",s0:4345,s1:4400}];const c=(d,g)=>e.gates.every(_=>_.s<d-35||_.s>g+35)&&s.every(_=>_.s<d-_.w/2-12||_.s>g+_.w/2+12)&&e.windingHoles.every(_=>_<d-30||_>g+30)&&this.zones.every(_=>_.s1<d-8||_.s0>g+8)&&e.bodies[e.bodyIndexAt((d+g)/2)].kind==="pound",l=a.filter(d=>d.type==="stop"&&!/drive.?thru/i.test(d.name)).sort((d,g)=>d.rank-g.rank||d.dist-g.dist);for(const d of l)if(!this.zones.some(g=>g.kind==="stop"&&Math.abs((g.s0+g.s1)/2-d.s)<120))for(const g of[0,8,-8,16,-16,24,-24,32,-32,45,-45,60,-60]){const _=d.s+g-18,m=d.s+g+18;if(!(_<30||m>t.length-30||!c(_,m))){this.zones.push({id:`stop:${d.name}`,name:d.name,kind:"stop",poi:d,s0:_,s1:m});break}}for(const d of this.zones)this.buildZone(d);this.highlight=new et(new de,new ks({color:"#ffd76a",transparent:!0,opacity:.5,depthWrite:!1})),this.group.add(this.highlight),this.marker=yv(),this.group.add(this.marker);const h=cs(77),f=(d,g)=>d-g<40||d+g>t.length-40||e.gates.some(_=>Math.abs(_.s-d)<g+35)||s.some(_=>Math.abs(_.s-d)<g+_.w/2+14)||this.zones.some(_=>d+g>_.s0-6&&d-g<_.s1+6)||e.windingHoles.some(_=>Math.abs(_-d)<g+30)||Math.abs(d-r)<g+30||e.bodies[e.bodyIndexAt(d)].kind!=="pound";let u=[...kl];for(let d=60;d<t.length-60;){const g=d>o-250&&d<o+220?.85:d>2900&&d<3250?.6:.32,_=15+Math.round(h()*5);if(h()<g&&!f(d+_/2,_/2)){const m=u.splice(Math.floor(h()*u.length),1)[0]??"Narrowboat";u.length||(u=[...kl]),this.addBoat(d+_/2,_,m,h),d+=_+1+h()*3}else d+=6+h()*14}}addBoat(t,e,n,s){const o=this.route.frame(t),a=(this.ww.halfWidthAt(t)-wn/2-.12)*ce,c=o.x+o.nx*a,l=o.z+o.nz*a,h=Math.atan2(o.tx,o.tz)+(s()<.5?0:Math.PI),f=Qa({name:n,length:e,crew:!1,cabin:zl[Math.floor(s()*zl.length)],roof:Bl[Math.floor(s()*Bl.length)]}),u=sv(f),d=this.ww.levelAt(t);u.position.set(c,d,l),u.rotation.order="YXZ",u.rotation.y=h,this.group.add(u),this.boats.push({x:c,z:l,psi:h,halfL:e/2,halfB:wn/2,name:n,s:t,group:u,baseY:d,rock:0,rockedAt:-99})}buildZone(t){const e=new ee({color:"#2a2a2a",metalness:.6,roughness:.4});for(let r=t.s0;r<=t.s1;r+=6){const a=this.ww.halfWidthAt(r),[c,l]=this.route.point(r,(a+.35)*ce),h=new et(new Ei(.14,.035,6,12),e);h.position.set(c,this.terrain.bankTop(r)+.07,l),h.rotation.x=Math.PI/2,this.group.add(h)}const n=this.route.frame(t.s0),s=(this.ww.halfWidthAt(t.s0)+2.9)*ce,o=t.kind==="stop"?Hl([`Moorings for ${bv(t.poi)}`,t.name],"#6e1f1a"):Hl(["Visitor moorings",t.name]);o.position.set(n.x+n.nx*s,this.terrain.bankTop(t.s0),n.z+n.nz*s),o.rotation.y=Math.atan2(ce*n.tz,-ce*n.tx),this.group.add(o)}setActive(t){if(this.highlight.visible=this.marker.visible=!!t,!t)return;const e=[],n=[];let s=0;for(let l=t.s0;l<=t.s1+.01;l+=1.5,s++){const h=this.ww.halfWidthAt(l),f=this.terrain.bankTop(l)+.06;for(const u of[h-.05,h+.75]){const[d,g]=this.route.point(l,u*ce);e.push(d,f,g)}s>0&&n.push((s-1)*2,(s-1)*2+1,s*2,(s-1)*2+1,s*2+1,s*2)}const o=new de;o.setAttribute("position",new Xt(e,3)),o.setIndex(n),this.highlight.material.side=ke,this.highlight.geometry.dispose(),this.highlight.geometry=o;const r=(t.s0+t.s1)/2,[a,c]=this.route.point(r,(this.ww.halfWidthAt(r)+.4)*ce);this.marker.position.set(a,this.terrain.bankTop(r)+4,c),this.marker.userData.y0=this.marker.position.y}rockBoat(t,e){t.rock=Math.min(.09,Math.max(t.rock,e)),t.rockedAt=this.time,this.popOwner(t,"shake")}popOwner(t,e){if(t.owner)this.time>t.owner.until&&(t.owner.from=this.time),t.owner.until=this.time+5,t.owner.mode=e;else{const n=Xs(ls(Math.random));n.group.position.set(0,-.4,-t.halfL+2.45),t.group.add(n.group),t.owner={person:n,from:this.time,until:this.time+5,mode:e}}}get now(){return this.time}update(t){this.time+=t;for(const e of this.boats){const n=e.owner;if(n){const s=Math.min(1,(this.time-n.from)/.5)*Math.min(1,Math.max(0,(n.until-this.time)/.5));n.person.group.position.y=-.4+s*1,n.person.group.visible=s>.01,jo(n.person,s>.6?n.mode:"rest",this.time)}e.rock<.001||(e.rock*=Math.exp(-t*.6),e.group.rotation.z=Math.sin(this.time*3.1)*e.rock,e.group.position.y=e.baseY+Math.sin(this.time*2.3)*e.rock*.6)}this.marker.visible&&(this.marker.position.y=this.marker.userData.y0+Math.sin(this.time*1.6)*.25,this.marker.rotation.y+=t*.9,this.highlight.material.opacity=.35+.2*Math.sin(this.time*3))}zoneAt(t){return this.zones.find(e=>t>=e.s0-4&&t<=e.s1+4)}}function yv(){const i=new Ht,t=new ee({color:"#ffcf4a",emissive:"#a07000",emissiveIntensity:.6,roughness:.4}),e=new et(new Ya(.7,0),t);return e.scale.y=1.5,i.add(e),i}function bv(i){return i.kind==="pub"||i.kind==="bar"?"patrons":i.kind==="hotel"?"guests":"customers"}function Hl(i,t="#1d3557"){const e=document.createElement("canvas");e.width=512,e.height=192;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,512,192),n.strokeStyle="#f3ead0",n.lineWidth=6,n.strokeRect(8,8,496,176),n.fillStyle="#f3ead0",n.textAlign="center",n.font="700 34px Nunito, sans-serif",n.fillText(i[0].toUpperCase(),256,70,470),n.font="600 40px Fraunces, Georgia, serif",n.fillText(i[1],256,135,470);const s=new Ws(e);s.colorSpace=Ie;const o=new Ht,r=new et(new ii(2.2,.82),new ee({map:s,side:ke}));r.position.y=1.9,o.add(r);const a=new et(new qt(.1,2,.1),new ee({color:"#f1efe8"}));return a.position.y=1,o.add(a),o}const Gl=.9,Ir=.45,Sv=.45;class wv{constructor(t,e,n,s){F(this,"group",new Ht);F(this,"lines",[]);F(this,"ropeMat",new Uh({color:"#d8c49a"}));F(this,"pinMat",new ee({color:"#3a3a3a",metalness:.5,roughness:.5}));this.route=t,this.ww=e,this.terrain=n,this.boat=s}get count(){return this.lines.length}get moored(){return this.lines.length===2}endPoint(t){const e=this.route.frame(this.boat.s);return[((-Math.cos(this.boat.psi)*e.nx+Math.sin(this.boat.psi)*e.nz)*ce>0?1:-1)*wn*.5,(t==="bow"?1:-1)*(Sn/2-1.3)]}gap(t){const[e,n]=this.boat.toWorld(...this.endPoint(t)),s=this.route.project(e,n,this.boat.s);return{gap:this.ww.halfWidthAt(s.s)-s.d*ce,s:s.s}}blocker(){return this.ww.gates.some(t=>Math.abs(t.s-this.boat.s)<Sn/2+22)?"No mooring on a lock landing. Move along a bit.":this.boat.d*ce<0?"Moor on the towpath side, the bank with the path.":null}prompt(){if(this.moored)return{key:"F",text:"Cast off",ready:!0};const e=["bow","stern"].filter(o=>!this.lines.some(r=>r.end===o)).map(o=>({e:o,...this.gap(o)})),n=e.reduce((o,r)=>r.gap<o.gap?r:o);if(!this.lines.length&&(n.gap>2.5||this.boat.speed>1)||this.blocker()&&!this.lines.length)return null;const s=e.find(o=>o.gap<Gl);return s&&this.boat.speed<Ir?{key:"F",text:`Tie the ${s.e} line`,ready:!0}:this.boat.speed>=Ir?{key:"F",text:"Slow right down to step off",ready:!1}:{key:"F",text:`Bring the ${n.e} in alongside the bank`,ready:!1}}act(){if(this.moored)return this.castOff(),"Lines in, cast off. Off you go!";if(!this.lines.length){const n=this.blocker();if(n)return n}if(this.boat.speed>=Ir)return"Too quick to step off! Slow right down first.";const t=["bow","stern"].filter(n=>!this.lines.some(s=>s.end===n)),e=t.find(n=>this.gap(n).gap<Gl);return e?(this.tie(e),this.moored?null:`${e==="bow"?"Bow":"Stern"} line tied. Now the ${e==="bow"?"stern":"bow"}.`):`Bring the ${t[0]} closer in to the bank first (within a metre).`}tie(t){const e=this.endPoint(t),[n,s]=this.boat.toWorld(...e),o=this.route.project(n,s,this.boat.s),r=this.ww.halfWidthAt(o.s),a=this.route.frame(o.s),c=Math.sin(this.boat.psi)*a.tx+Math.cos(this.boat.psi)*a.tz>=0?1:-1,l=(t==="bow"?1:-1)*c*.8,[h,f]=this.route.point(o.s+l,(r+.8)*ce),u=Math.hypot(n-h,s-f)+.35,d={local:e,anchor:[h,f],length:u};this.boat.tethers.push(d);const g=new et(new ue(.03,.03,.5,6),this.pinMat);g.position.set(h,this.terrain.bankTop(o.s)+.2,f),g.rotation.z=.2;const _=new mg(new de().setFromPoints(new Array(12).fill(0).map(()=>new D)),this.ropeMat);_.frustumCulled=!1,this.group.add(g,_),this.lines.push({end:t,tether:d,pin:g,rope:_})}castOff(){for(const t of this.lines)this.group.remove(t.pin,t.rope),t.rope.geometry.dispose();this.boat.tethers.length=0,this.lines=[]}update(t){for(const e of this.lines){const[n,s]=this.boat.toWorld(...e.tether.local),o=new D(n,t+Sv,s),r=e.pin.position.clone().setY(e.pin.position.y+.15),c=.08+Math.max(0,e.tether.length-o.distanceTo(r))*.6,l=e.rope.geometry.getAttribute("position");for(let h=0;h<l.count;h++){const f=h/(l.count-1),u=o.clone().lerp(r,f);u.y-=Math.sin(f*Math.PI)*c,l.setXYZ(h,u.x,u.y,u.z)}l.needsUpdate=!0}}}const Vl=[{zone:"city",title:"Up the staircase",brief:"Work up the Northgate Staircase, then moor at the city moorings by Cow Lane Bridge."},{zone:"hoole",title:"Through Chester",brief:"Carry on east under the city bridges and moor up at Hoole. Thirsty? There are canalside pubs on the way (🍺 on the map)."},{zone:"christleton",title:"Out to the country",brief:"Up through Hoole Lane, Chemistry, Tarvin and Greenfield locks, then moor at Christleton for the night."},{zone:"tower",title:"Back to Tower Wharf",brief:"Turn round in the winding hole past Christleton Bridge, then head all the way back down to Tower Wharf."}];class Ev{constructor(t){F(this,"index",0);F(this,"startHour");F(this,"bumps",0);F(this,"rocked",0);F(this,"cleared",0);F(this,"result",null);this.startHour=t}get current(){return Vl[this.index%Vl.length]}complete(t){const e=(t-this.startHour+24)%24,n=this.bumps+this.rocked*2,s=n===0?"Not a ripple out of place. The towpath regulars are impressed.":n<4?"A couple of scrapes, but nothing a cup of tea won’t fix.":"Eventful! The moored boats will be talking about you for a while.";return this.result={trip:this.current,hours:e,bumps:this.bumps,rocked:this.rocked,cleared:this.cleared,verdict:s},this.result}next(t){this.index++,this.startHour=t,this.bumps=this.rocked=this.cleared=0,this.result=null}}const Wl=["Kittiwake","Ruby Tuesday","Water Rat","Bumblebee","Silver Birch","Mistle Thrush","Ploughman","Owl","Clementine","Blackthorn","Sandpiper","Merlin"],Xl=["#27445a","#6a1e2e","#2c5a3f","#4b3a6b","#8a4a12","#1f3d4d"],ql=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400"],Yl=1.5,Tv=.9;class Av{constructor(t,e,n,s){F(this,"group",new Ht);F(this,"boats",[]);F(this,"events",[]);F(this,"time",0);F(this,"nextSpawn",8);F(this,"nameIndex",0);this.route=t,this.ww=e,this.moorings=n,this.player=s}update(t,e){this.time+=t;const n=this.player,s=this.ww.bodies[this.ww.bodyIndexAt(n.s)];if(this.time>this.nextSpawn&&this.boats.length<2&&s.kind==="pound"){this.nextSpawn=this.time+45+Math.random()*60;const o=n.s+e*(230+Math.random()*90),r=this.boats.every(a=>Math.abs(a.s-o)>80)&&this.moorings.zoneAt(o)===void 0;o>s.s0+60&&o<s.s1-60&&r&&this.spawn(o,-e)}for(const o of[...this.boats]){const r=(n.s-o.s)*o.dir>380||Math.abs(n.s-o.s)>520,a=this.ww.bodies[this.ww.bodyIndexAt(o.s)],c=o.dir>0?a.s1-o.s<40:o.s-a.s0<40;if(r||c&&Math.abs(n.s-o.s)>150||a.kind!=="pound"){this.remove(o);continue}this.steer(o,t,e)}}spawn(t,e){const n=Wl[this.nameIndex++%Wl.length],s=Qa({name:n,length:17+Math.round(Math.random()*3),crew:!0,cabin:Xl[Math.floor(Math.random()*Xl.length)],roof:Math.random()<.5?"#3a3d40":"#7c2f23",crewStyle:ls(Math.random,{coat:ql[Math.floor(Math.random()*ql.length)]})});s.group.rotation.order="YXZ",this.group.add(s.group);const o=s.group.userData.length/2,r={name:n,model:s,s:t,d:0,dir:e,speed:Yl,obstacle:{x:0,z:0,psi:0,halfL:o,halfB:wn/2},pausedUntil:0,waveUntil:0,passed:!1};this.boats.push(r),this.player.obstacles.push(r.obstacle),this.place(r,0)}remove(t){this.group.remove(t.model.group),this.boats.splice(this.boats.indexOf(t),1);const e=this.player.obstacles.indexOf(t.obstacle);e>=0&&this.player.obstacles.splice(e,1)}bumped(t){const e=this.boats.find(n=>n.obstacle===t);!e||this.time<e.pausedUntil||(e.pausedUntil=this.time+3,e.speed=0,e.waveUntil=this.time+3,this.events.push({kind:"bumped",boat:e}))}steer(t,e,n){const s=this.player,o=this.ww.halfWidthAt(t.s),r=(s.s-t.s)*t.dir,a=n!==t.dir;let c=Yl;const l=this.moorings.boats.some(d=>Math.abs(d.s-t.s)<d.halfL+12);l&&(c=Tv),r>0&&r<45&&(c=Math.min(c,a?.7:.4)),r>0&&r<22&&!a&&(c=0),this.time<t.pausedUntil&&(c=0),t.speed+=xe(c-t.speed,-.6*e,.3*e);const h=t.dir;let f=r>-20&&r<110&&a?h*1.8:0;const u=l?o-wn-1.6:o-1.6;if(f=xe(f,-(o-1.6),u),t.d+=xe(f-t.d,-.45*e,.45*e),t.s+=t.dir*t.speed*e,this.place(t,e),!t.passed&&a&&Math.abs(s.s-t.s)<4){t.passed=!0;const d=(s.d-t.d)*h<0;t.waveUntil=this.time+3.5,this.events.push({kind:d?"greet":"wrongSide",boat:t})}jo(t.model.steererPerson,this.time<t.waveUntil?"wave":"rest",this.time)}place(t,e){const n=this.route.frame(t.s),s=n.x+n.nx*t.d,o=n.z+n.nz*t.d,r=Math.atan2(n.tx,n.tz)+(t.dir>0?0:Math.PI),a=this.ww.levelAt(t.s);t.model.group.position.set(s,a+Math.sin(this.time*1.2+t.s)*.015,o),t.model.group.rotation.y=r,t.model.group.rotation.z=Math.sin(this.time*.9+e)*.004,Object.assign(t.obstacle,{x:s,z:o,psi:r})}}const Ro=-ce,Rv=i=>new ee({color:i});function Zt(i,t,e,n=0,s=0,o=0,r=0,a=0,c=0){const l=new et(t,Rv(e));return l.position.set(n,s,o),l.rotation.set(r,a,c),i.add(l),l}const Ce=(i,t,e)=>new qt(i,t,e),en=(i,t,e,n=6)=>new ue(i,t,e,n),Cv={bench(){const i=new Ht;Zt(i,Ce(1.6,.06,.4),"#8a6a45",0,.45,0),Zt(i,Ce(1.6,.36,.05),"#8a6a45",0,.68,-.2,-.15);for(const t of[-.7,.7])Zt(i,Ce(.06,.45,.4),"#2b2b2b",t,.22,0);return i},bin(){const i=new Ht;return Zt(i,en(.22,.2,.8,8),"#1f3d2f",0,.4,0),Zt(i,en(.24,.24,.06,8),"#2b2b2b",0,.82,0),i},lamp(){const i=new Ht;return Zt(i,en(.06,.09,3.6),"#1b1b1b",0,1.8,0),Zt(i,Ce(.5,.06,.06),"#1b1b1b",.18,3.55,0),Zt(i,en(.12,.16,.32,6),"#2b2b2b",.38,3.4,0),Zt(i,en(.1,.1,.14,6),"#f4e3a1",.38,3.22,0),i},lifebuoy(){const i=new Ht;return Zt(i,Ce(.1,1.5,.1),"#e8e4da",0,.75,0),Zt(i,new Ei(.3,.07,6,12),"#e0522f",0,1.15,.08),Zt(i,Ce(.6,.6,.03),"#c0b8a8",0,1.15,0),i},tub(){const i=new Ht;Zt(i,en(.36,.3,.45,8),"#6b4a2e",0,.22,0),Zt(i,new nn(.34,0),"#4f8a3a",0,.58,0);for(const[t,e,n]of[[.15,.1,"#e04f6a"],[-.12,.12,"#f2c94c"],[.02,-.16,"#d36ad6"],[-.16,-.06,"#f6f0e4"]])Zt(i,new nn(.08,0),n,t,.82,e);return i},reeds(){const i=new Ht,t=cs(5);for(let e=0;e<9;e++){const n=1.1+t()*.9;Zt(i,en(.015,.04,n,4),t()<.4?"#8a9a4a":"#6f8a3a",(t()-.5)*.9,n/2-.3,(t()-.5)*.7,(t()-.5)*.2,0,(t()-.5)*.25),t()<.4&&Zt(i,en(.04,.04,.2,5),"#5a3d22",(t()-.5)*.9,n-.3,(t()-.5)*.7)}return i},hedge(){const i=new Ht;return Zt(i,Ce(4.2,1.5,1.1),"#3f6b30",0,.75,0),Zt(i,new nn(.6,0),"#4b7a36",-1.2,1.4,.1),Zt(i,new nn(.55,0),"#36602a",1,1.45,-.1),i},fence(){const i=new Ht;return Zt(i,Ce(2,1.6,.06),"#7a5a3a",0,.8,0),Zt(i,Ce(.1,1.75,.1),"#5e4430",-1,.87,0),i},flowers(){const i=new Ht,t=cs(9),e=["#f2c94c","#ffffff","#d36ad6","#e04f6a","#7aa7e0"];for(let n=0;n<7;n++){const s=(t()-.5)*1.6,o=(t()-.5)*1.2;Zt(i,en(.01,.01,.35,3),"#4f7a33",s,.17,o),Zt(i,new nn(.06,0),e[Math.floor(t()*e.length)],s,.36,o)}return i},picnic(){const i=new Ht;Zt(i,Ce(1.8,.06,.8),"#a07a50",0,.75,0);for(const t of[-.65,.65])Zt(i,Ce(1.8,.05,.28),"#a07a50",0,.45,t);for(const t of[-.7,.7])Zt(i,Ce(.08,.75,1.5),"#8a6a45",t,.37,0,0);return i},parasol(){const i=new Ht;return Zt(i,en(.03,.03,2.4),"#e8e4da",0,1.2,0),Zt(i,new vi(1.4,.5,8,1,!0),"#a3291f",0,2.3,0),i},cottage(){const i=new Ht;Zt(i,Ce(6,4.2,5),"#efe8da",0,2.1,0);const t=new ue(.01,3.9,6.6,4,1);t.rotateY(Math.PI/4),t.rotateZ(Math.PI/2),t.scale(1,.55,1),Zt(i,t,"#4d525b",0,5,0),Zt(i,Ce(.7,1.4,.7),"#8c4234",2,5.6,0),Zt(i,Ce(1,1.9,.08),"#1f4d3a",0,.95,2.52);for(const e of[-1.8,1.8])Zt(i,Ce(.9,.9,.08),"#2a3640",e,2.6,2.52),Zt(i,Ce(.9,.9,.08),"#2a3640",e,1.1,2.52);return i},heron(){const i=new Ht;Zt(i,new sn(.22,6,4),"#9aa3ab",0,.85,0).scale.set(1,.8,1.6),Zt(i,en(.04,.05,.55,5),"#c8ced2",0,1.2,.18,-.3),Zt(i,new sn(.07,6,4),"#e8eaec",0,1.47,.27),Zt(i,new vi(.025,.22,4),"#d8b34a",0,1.47,.42,Math.PI/2);for(const t of[-.06,.06])Zt(i,en(.012,.012,.7,3),"#c9a24a",t,.35,0);return i}};class Pv{constructor(t,e,n,s,o,r){F(this,"group",new Ht);F(this,"placements",new Map);F(this,"anglerSpots",[]);F(this,"gardens",[]);this.route=t,this.ww=e,this.terrain=n;const a=cs(4242),c=t.length,l=(p,x=6)=>r.some(M=>Math.abs(M.s-p)<M.w/2+x),h=(p,x)=>e.gates.some(M=>Math.abs(M.s-p)<x),f=p=>e.bodies[e.bodyIndexAt(p)].kind==="chamber",u=p=>e.windingHoles.some(x=>Math.abs(x-p)<28),d=p=>{const[x,M]=t.point(p,30*Ro),[v,b]=t.point(p,30*ce);return Math.max(n.urbanAt(x,M),n.urbanAt(v,b))};let g=60;for(let p=20;p<c-20;p+=2){if(l(p,8)||h(p,10))continue;const x=d(p);x>.3&&Math.round(p)%32===0&&this.add("lamp",p,e.halfWidthAt(p)+3.25,"towpath",-Math.PI/2),p>g&&!o.zoneAt(p)&&!n.cliffSide(p,ce)&&(g=p+140+a()*160,this.add("bench",p,e.halfWidthAt(p)+3.6,"towpath",0),x>.2&&this.add("bin",p+1.4,e.halfWidthAt(p)+3.7,"towpath",0)),x>.35&&Math.round(p)%380===0&&this.add("lifebuoy",p,e.halfWidthAt(p)+3.3,"towpath",0)}for(const p of e.groups){const x=p.gates[0].s,M=p.gates.at(-1).s;this.add("lifebuoy",x-6,e.halfWidthAt(x-6)+3.3,"towpath",0),this.add("lifebuoy",M+6,e.halfWidthAt(M+6)+3.3,"towpath",0);for(const b of[x+4,M-4,(x+M)/2])this.add("tub",b,e.halfWidthAt(b)+2.2,"towpath",0),this.add("tub",b+1.2,e.halfWidthAt(b)+2.2,"offside",0);const v=(x+M)/2;if(!p.staircase&&d(v)<.45){const b=e.halfWidthAt(v)+10,[E,A]=t.point(v,b*ce);s.isFree(E,A)&&this.add("cottage",v,b,"land",0)}}let _=-1,m="none";for(let p=10;p<c-10;p+=2){if(p>_){_=p+60;const b=d(p);m=b<.3?a()<.85?"hedge":"none":b>.4?a()<.8?"fence":"none":a()<.5?"hedge":"fence"}if(m==="none"||l(p,4)||f(p)||h(p,6)||u(p))continue;const x=e.halfWidthAt(p)+2.4,[M,v]=t.point(p,x*Ro);s.isFree(M,v)&&(m==="fence"?this.add("fence",p,x,"offside",0):Math.round(p)%4===0&&this.add("hedge",p,x,"offside",0))}for(let p=10;p<c-10;p+=3){if(l(p,6)||f(p)||h(p,15)||u(p))continue;const x=d(p);a()<(x<.3?.45:.12)&&this.add("reeds",p,e.halfWidthAt(p)-.25,"water",a()*6),x<.35&&a()<.3&&!n.cliffSide(p,ce)&&this.add("flowers",p,e.halfWidthAt(p)+4.6+a()*1.5,"towpath",a()*6),x<.2&&a()<.008&&this.add("heron",p,e.halfWidthAt(p)+.9,"offside",Math.PI/2*Ro+(a()-.5))}for(const p of o.zones){if(p.kind!=="stop"||!/pub|bar/.test(p.poi.kind))continue;const x=(p.s0+p.s1)/2;for(const[M,v,b]of[[-5,6,"picnic"],[0,7.5,"picnic"],[5,6,"picnic"],[-2.5,7,"parasol"],[3,6.5,"parasol"]])if(this.add(b,x+M,e.halfWidthAt(x)+v,"land",0),b==="picnic"){const[E,A]=t.point(x+M,(e.halfWidthAt(x)+v)*ce);this.gardens.push({x:E,z:A,y:n.bankTop(x),ry:Math.atan2(t.frame(x).tx,t.frame(x).tz)})}}for(let p=150;p<c-80;p+=70+a()*90)d(p)>.55||l(p,15)||h(p,45)||o.zoneAt(p)||f(p)||o.boats.some(x=>Math.abs(x.s-p)<x.halfL+8)||this.anglerSpots.push({s:p});this.build()}add(t,e,n,s,o){if(e<1||e>this.route.length-1)return;const r=s==="offside"||s==="water"?Ro:ce,a=this.route.frame(e),c=a.x+a.nx*n*r,l=a.z+a.nz*n*r;let h;s==="water"?h=this.ww.levelAt(e):s==="land"?h=this.terrain.heightAt(c,l):h=n<this.ww.halfWidthAt(e)+3.4?this.terrain.bankTop(e):this.terrain.landHeight(c,l,e,n*r);const f=Math.atan2(-a.nx*r,-a.nz*r),u=new ie().compose(new D(c,h,l),new yn().setFromAxisAngle(new D(0,1,0),f+o),new D(1,1,1));this.placements.has(t)||this.placements.set(t,[]),this.placements.get(t).push(u)}build(){for(const[t,e]of this.placements){const n=Mi(Cv[t]()),s=new On(n,ji(),e.length);e.forEach((o,r)=>s.setMatrixAt(r,o)),s.castShadow=t!=="flowers"&&t!=="reeds",s.receiveShadow=!0,s.name=`decor:${t}`,this.group.add(s)}}get counts(){return Object.fromEntries([...this.placements].map(([t,e])=>[t,e.length]))}}const Es=6,Ur=4,Nr=380,hn=new ie,$n=new yn,Ts=new D,As=new D(1,1,1),Co=new D(0,1,0);function Lv(i,t){const e=Xs({...i,coat:"#ffffff"});t(e);const n=new Ht;n.add(e.group);const s=o=>o.userData.part==="coat";return{coat:Mi(n,void 0,s),rest:Mi(n,void 0,o=>!s(o))}}class Po{constructor(t,e,n,s,o){F(this,"meshes",[]);for(const r of e){const a=[];for(let c=0;c<n;c++){const l=Lv(r,u=>o(u,c)),h=new On(l.coat,$l(),s),f=new On(l.rest,$l(),s);for(const u of[h,f])u.count=0,u.castShadow=!0,u.frustumCulled=!1,u.instanceMatrix.setUsage(ba),t.add(u);a.push({coat:h,rest:f})}this.meshes.push(a)}}begin(){for(const t of this.meshes)for(const{coat:e,rest:n}of t)e.count=n.count=0}put(t,e,n,s){const{coat:o,rest:r}=this.meshes[t%this.meshes.length][e%this.meshes[0].length],a=o.count++;r.count++,o.setMatrixAt(a,n),r.setMatrixAt(a,n),o.setColorAt(a,s)}end(){for(const t of this.meshes)for(const{coat:e,rest:n}of t)e.instanceMatrix.needsUpdate=n.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}}const $l=()=>new ee({vertexColors:!0,roughness:.75});function Dv(){const i=new Ht,t=a=>new ee({color:a});for(const a of[-.55,.55]){const c=new et(new Ei(.33,.03,5,12),t("#1b1b1b"));c.position.set(0,.33,a),c.rotation.y=Math.PI/2,i.add(c)}const e=new et(new qt(.05,.05,.9),t("#2e86c1"));e.position.set(0,.62,0),e.rotation.x=-.12;const n=new et(new qt(.04,.32,.04),t("#2e86c1"));n.position.set(0,.68,-.18);const s=new et(new qt(.12,.05,.22),t("#1b1b1b"));s.position.set(0,.86,-.18);const o=new et(new qt(.04,.42,.04),t("#2e86c1"));o.position.set(0,.78,.45);const r=new et(new qt(.5,.035,.035),t("#1b1b1b"));return r.position.set(0,.99,.43),i.add(e,n,s,o,r),Mi(i)}function Iv(){const i=new Ht,t=o=>new ee({color:o}),e=new et(new qt(.22,.22,.55),t("#8a5a2b"));e.position.y=.35;const n=new et(new qt(.18,.18,.2),t("#7a4a22"));n.position.set(0,.5,.33),i.add(e,n);for(const[o,r]of[[-.08,-.2],[.08,-.2],[-.08,.2],[.08,.2]]){const a=new et(new qt(.05,.25,.05),t("#6a3a1a"));a.position.set(o,.12,r),i.add(a)}const s=new et(new qt(.04,.04,.22),t("#8a5a2b"));return s.position.set(0,.48,-.36),s.rotation.x=.6,i.add(s),Mi(i)}function jl(i){const t=new Ht,e=a=>new ee({color:a}),n=i?1.9:1,s=new et(new sn(.16*n,6,4),e(i?"#f4f4f0":"#8a6a4a"));if(s.scale.set(.8,.55,1.3),s.position.y=.05*n,t.add(s),i){const a=new et(new ue(.035,.05,.5,5),e("#f4f4f0"));a.position.set(0,.32,.2),a.rotation.x=.25,t.add(a)}const o=new et(new sn(.07*(i?1.1:1),6,4),e(i?"#f4f4f0":"#2f6b3a"));o.position.set(0,i?.58:.17,i?.28:.16);const r=new et(new vi(.03,.1,4),e(i?"#e07a2a":"#e2b23a"));return r.position.set(0,o.position.y-.01,o.position.z+.09),r.rotation.x=Math.PI/2,t.add(o,r),Mi(t)}class Uv{constructor(t,e,n,s,o,r){F(this,"group",new Ht);F(this,"events",[]);F(this,"movers",[]);F(this,"birds",[]);F(this,"anglers",[]);F(this,"walkers");F(this,"joggers");F(this,"riders");F(this,"bikes");F(this,"dogs");F(this,"ducks");F(this,"swans");F(this,"time",0);F(this,"rand",cs(31));this.route=t,this.ww=e,this.terrain=n,this.boat=s;const a=this.rand,c=Array.from({length:Ur},()=>ls(a)),l=22;this.walkers=new Po(this.group,c,Es,l,(u,d)=>Pa(u,d/Es*Math.PI*2)),this.joggers=new Po(this.group,c.slice(0,2),Es,l,(u,d)=>{Pa(u,d/Es*Math.PI*2,1.5),u.armL.rotation.x-=.6,u.armR.rotation.x-=.6}),this.riders=new Po(this.group,c.slice(1,3),4,l,(u,d)=>Q_(u,d/4*Math.PI*2)),this.bikes=new On(Dv(),ji(),l),this.dogs=new On(Iv(),ji(),l);for(let u=0;u<l;u++){const d=u<14?"walk":u<18?"jog":"cycle",g={s:s.s+(a()-.5)*Nr*2,d:0,dir:a()<.5?1:-1,kind:d,phase:a()*10,speed:d==="walk"?1.1+a()*.4:d==="jog"?2.6+a()*.6:4+a()*1.5,dog:d==="walk"&&a()<.45,coat:new Ot(Ls[Math.floor(a()*Ls.length)]),look:Math.floor(a()*Ur)};g.d=this.laneFor(g),this.movers.push(g)}for(const u of[this.bikes,this.dogs])u.castShadow=!0,u.instanceMatrix.setUsage(ba),u.frustumCulled=!1,this.group.add(u);for(const u of o){const d=Xs(ls(a,{hairStyle:a()<.5?"cap":"beanie",coat:a()<.5?"#3d5a3d":"#5a4a3a"})),g=t.frame(u.s),_=(e.halfWidthAt(u.s)+.9)*ce,m=new Ht;m.add(d.group),Ul(d);const p=new et(new qt(.5,.4,.35),new ee({color:"#3d5a3d"}));p.position.set(0,.2,-.1),m.add(p);const x=new et(new ue(.01,.02,4.2,4),new ee({color:"#2b2b2b"}));x.position.set(.25,1.3,1.6),x.rotation.x=1.05,m.add(x),m.position.set(g.x+g.nx*_,n.bankTop(u.s),g.z+g.nz*_),m.rotation.y=Math.atan2(-g.nx*ce,-g.nz*ce),this.group.add(m),this.anglers.push({s:u.s,person:d,angryUntil:0,lastGrumble:-99})}const h=new Po(this.group,c,1,64,u=>Ul(u));h.begin();for(const u of r)for(const d of[-1,1])if(!(a()<.35))for(const g of[-.5,.5]){if(a()<.4)continue;const _=new D(g,0,d*.62).applyAxisAngle(Co,u.ry);$n.setFromAxisAngle(Co,u.ry+(d>0?Math.PI:0)),hn.compose(Ts.set(u.x+_.x,u.y,u.z+_.z),$n,As),h.put(Math.floor(a()*Ur),0,hn,new Ot(Ls[Math.floor(a()*Ls.length)]))}h.end();let f=0;for(let u=120;u<t.length-60;u+=160+a()*260){if(e.bodies[e.bodyIndexAt(u)].kind!=="pound")continue;const d=a()<.22,g=d?2:2+Math.floor(a()*4);f++;for(let _=0;_<g;_++)this.birds.push({s:u+(a()-.5)*8,d:(a()-.5)*5,vs:0,vd:0,swan:d,heading:a()*6,flock:f,lastQuack:-99})}this.ducks=new On(jl(!1),ji(),Math.max(1,this.birds.filter(u=>!u.swan).length)),this.swans=new On(jl(!0),ji(),Math.max(1,this.birds.filter(u=>u.swan).length));for(const u of[this.ducks,this.swans])u.instanceMatrix.setUsage(ba),u.frustumCulled=!1,this.group.add(u)}laneFor(t){return this.ww.halfWidthAt(xe(t.s,0,this.route.length))+1.6+(t.dir>0?-.35:.35)}update(t){this.time+=t;const e=this.boat,n=this.route.length,s=e.speed*2.237>3;let o=0,r=0;for(const l of[this.walkers,this.joggers,this.riders])l.begin();this.movers.forEach(l=>{l.s+=l.dir*l.speed*t,l.phase+=t*l.speed*4.5,(Math.abs(l.s-e.s)>Nr||l.s<5||l.s>n-5)&&(l.s=xe(e.s+(this.rand()<.5?-1:1)*(Nr-20-this.rand()*60),5,n-5),l.dir=l.s>e.s?-1:1,this.rand()<.5&&(l.dir*=-1)),l.d+=(this.laneFor(l)-l.d)*Math.min(1,t*2);const h=this.route.frame(l.s),f=h.x+h.nx*l.d*ce,u=h.z+h.nz*l.d*ce,d=l.kind==="cycle"?0:Math.abs(Math.cos(l.phase))*(l.kind==="jog"?.05:.025),g=this.terrain.bankTop(l.s)+(l.kind==="cycle"?-.07:d),_=Math.atan2(h.tx,h.tz)+(l.dir>0?0:Math.PI);$n.setFromAxisAngle(Co,_),hn.compose(Ts.set(f,g,u),$n,As);const m=Math.floor(l.phase/(Math.PI*2)%1*Es);if((l.kind==="walk"?this.walkers:l.kind==="jog"?this.joggers:this.riders).put(l.look,l.kind==="cycle"?m%4:m,hn,l.coat),l.kind==="cycle"&&(hn.compose(Ts.set(f,this.terrain.bankTop(l.s),u),$n,As),this.bikes.setMatrixAt(o++,hn)),l.dog){const x=Math.sin(l.phase*.3)*.6+1.2,M=f-Math.sin(_)*x+h.nx*.5,v=u-Math.cos(_)*x+h.nz*.5;hn.compose(Ts.set(M,this.terrain.bankTop(l.s)+Math.abs(Math.sin(l.phase*1.6))*.04,v),$n,As),this.dogs.setMatrixAt(r++,hn)}}),this.bikes.count=o,this.dogs.count=r;for(const l of[this.walkers,this.joggers,this.riders])l.end();for(const l of[this.bikes,this.dogs])l.instanceMatrix.needsUpdate=!0;for(const l of this.anglers)s&&Math.abs(l.s-e.s)<14&&this.time-l.lastGrumble>20&&(l.lastGrumble=this.time,l.angryUntil=this.time+4,this.events.push({kind:"angler"})),jo(l.person,this.time<l.angryUntil?"shake":"rest",this.time);let a=0,c=0;for(const l of this.birds){const h=l.s-e.s,f=l.d-e.d,u=Math.hypot(h,f);u<14?(l.vd+=Math.sign(f||1)*.6*t*(14-u),l.vs+=Math.sign(h||1)*.25*t*(14-u),u<5&&this.time-l.lastQuack>6&&!l.swan&&(l.lastQuack=this.time,this.events.push({kind:"quack"}))):(l.vs+=Math.sin(this.time*.3+l.flock*7+l.heading)*.05*t,l.vd+=Math.cos(this.time*.23+l.flock*3)*.04*t);const d=l.swan?.6:.9;l.vs=xe(l.vs*(1-t*.4),-d,d),l.vd=xe(l.vd*(1-t*.4),-d,d),l.s=xe(l.s+l.vs*t,5,n-5);const g=this.ww.halfWidthAt(l.s)-.4;l.d=xe(l.d+l.vd*t,-g,g),Math.abs(l.d)>=g&&(l.vd*=-.3);const _=this.route.frame(l.s),m=Math.atan2(_.tx*l.vs+_.nx*l.vd,_.tz*l.vs+_.nz*l.vd);Math.hypot(l.vs,l.vd)>.05&&(l.heading+=Math.atan2(Math.sin(m-l.heading),Math.cos(m-l.heading))*Math.min(1,t*3)),$n.setFromAxisAngle(Co,l.heading),hn.compose(Ts.set(_.x+_.nx*l.d,this.ww.levelAt(l.s)+Math.sin(this.time*2+l.s)*.01,_.z+_.nz*l.d),$n,As),l.swan?this.swans.setMatrixAt(c++,hn):this.ducks.setMatrixAt(a++,hn)}this.ducks.count=a,this.swans.count=c,this.ducks.instanceMatrix.needsUpdate=this.swans.instanceMatrix.needsUpdate=!0}}const Nv=5,on=(i,t={})=>new ee({color:i,roughness:.6,...t});function Ov(){const i=new Ht,t=on("#b8bcc2",{metalness:.8,roughness:.3}),e=(s,o,r,a,c,l)=>{const h=new et(new qt(s,o,r),t);h.position.set(a,c,l),i.add(h)};for(const s of[.45,.95])e(.55,.025,.025,0,s,.45),e(.55,.025,.025,0,s,-.45),e(.025,.025,.9,.27,s,0),e(.025,.025,.9,-.27,s,0);for(const s of[-.27,.27])for(const o of[-.45,.45])e(.025,.5,.025,s,.7,o);for(let s=-.35;s<=.36;s+=.14)e(.55,.012,.012,0,.45,s);const n=new et(new qt(.6,.05,.05),on("#c0392b"));n.position.set(0,1.05,-.52),i.add(n);for(const s of[-.25,.25])for(const o of[-.4,.4]){const r=new et(new ue(.06,.06,.04,8),on("#2b2b2b"));r.rotation.z=Math.PI/2,r.position.set(s,.1,o),i.add(r)}return i}function Fv(){const i=new Ht;for(const n of[-.5,.5]){const s=new et(new Ei(.33,.03,5,14),on("#1b1b1b"));s.position.set(0,.33,n),s.rotation.y=Math.PI/2,i.add(s)}const t=new et(new qt(.04,.04,1),on("#27ae60"));t.position.y=.55,i.add(t);const e=new et(new qt(.5,.04,.04),on("#1b1b1b"));return e.position.set(0,.85,.45),i.add(e),i}function kv(){const i=new Ht,t=new et(new vi(.18,.6,8),on("#ff6a13"));t.position.y=.3;const e=new et(new ue(.115,.13,.08,8),on("#f4f4f4"));return e.position.y=.33,i.add(t,e),i}function zv(i){const t=new Ht,e=new et(new ue(.06,.1,i,5),on("#5a4632"));e.rotation.z=Math.PI/2,t.add(e);const n=new et(new ue(.02,.04,i*.4,4),on("#6a5440"));n.position.set(i*.15,.05,.12),n.rotation.set(0,.6,Math.PI/2),t.add(n);const s=new et(new nn(.3,0),on("#5c7a3a"));return s.position.set(-i*.4,.05,0),s.scale.y=.4,t.add(s),t}class Bv{constructor(t,e,n){F(this,"group",new Ht);F(this,"s",0);F(this,"active",!1);F(this,"spotted",!1);F(this,"progress",0);F(this,"clearing",!1);F(this,"obstacle",{x:0,z:0,psi:0,halfL:1.2,halfB:0});F(this,"pieces",[]);this.route=t,this.ww=e,this.terrain=n}place(t){this.reset(),this.s=t,this.active=!0,this.spotted=!1;const e=this.route.frame(t),n=this.ww.halfWidthAt(t),s=this.ww.levelAt(t),o=Math.atan2(e.tx,e.tz);Object.assign(this.obstacle,{x:e.x,z:e.z,psi:o,halfB:n});const r=(a,c,l,h,f,u,d,g)=>{d.position.set(e.x+e.nx*a+e.tx*c,s+l,e.z+e.nz*a+e.tz*c),d.rotation.set(f,o+h,u),this.group.add(d);const[_,m]=this.route.point(t+g*.6,(n+1.5+Math.abs(g)*.25)*ce);this.pieces.push({obj:d,from:d.position.clone(),fromRot:d.rotation.clone(),to:new D(_,this.terrain.bankTop(t)+.05,m)})};r(-n*.45,0,-.55,.4,.5,.3,Ov(),-2),r(n*.25,.4,-.35,1.2,1.2,.2,Fv(),0),r(n*.65,-.5,-.1,0,.9,0,kv(),2);for(let a=0;a<6;a++){const c=-n+.6+a/5*(n*2-1.2);r(c,a%2?.4:-.4,.02,.3+a*.5,0,0,zv(1.6+a%3*.6),a-3)}for(let a=0;a<4;a++){const c=new et(new nn(.2,0),on(a%2?"#f2f2f2":"#3a3a3a"));c.scale.y=.6,r(-n+1+a*(n*.6),a%2?.7:-.6,.05,a,0,0,c,a-2)}}reset(){for(const t of this.pieces)this.group.remove(t.obj);this.pieces=[],this.active=!1,this.clearing=!1,this.progress=0}startClearing(){return!this.active||this.clearing?!1:(this.clearing=!0,!0)}update(t,e){return this.active?this.clearing?(this.progress=Math.min(1,this.progress+t/Nv),this.pieces.forEach((n,s)=>{const o=s/this.pieces.length*.85,r=Math.min(1,Math.max(0,(this.progress-o)/.15));r<=0||(n.obj.position.lerpVectors(n.from,n.to,r),n.obj.position.y+=Math.sin(r*Math.PI)*1.4,n.obj.rotation.set(n.fromRot.x*(1-r),n.fromRot.y,n.fromRot.z*(1-r)+(r>.99?s%3*.4:0)))}),this.progress>=1?(this.active=!1,this.clearing=!1,!0):!1):(this.pieces.forEach((n,s)=>n.obj.position.y=n.from.y+Math.sin(e*1.3+s)*.03),!1):!1}}const Hv=.75,Gv=1.6,Zl=1.4;class Vv{constructor(t,e,n,s){F(this,"group",new Ht);F(this,"staffed",new Set);F(this,"active",null);F(this,"helpers",new Map);F(this,"actKey","");F(this,"actAt",0);F(this,"driveTarget",null);F(this,"time",0);F(this,"busyGate",null);this.route=t,this.ww=e,this.terrain=n,this.boat=s,this.roster()}roster(){for(const t of this.helpers.values())for(const e of t)this.group.remove(e.person.group);this.helpers.clear(),this.staffed.clear();for(const t of this.ww.groups){if(!(t.staircase||Math.random()<.4))continue;this.staffed.add(t);const e=[];for(const n of[-3,3]){const s=Xs(ls(Math.random,{coat:"#1d5fa8",longCoat:!1}));this.group.add(s.group),e.push({person:s,s:(t.gates[0].s+t.gates.at(-1).s)/2+n,offset:n})}this.helpers.set(t,e)}}isStaffed(t){return!!t&&this.staffed.has(t)}start(t){this.active=t,this.driveTarget=null,this.actKey=""}stop(){this.active=null,this.driveTarget=null,this.busyGate=null}update(t,e,n){if(this.time+=t,this.animateHelpers(t),!this.active)return"idle";if(!e||e.group!==this.active)return this.stop(),"done";const s=this.boat,o=n?1:-1;if(e.action==="drive"){if(this.driveTarget===null){const r=this.ww.gates.filter(a=>a.group===this.active&&(a.s-s.s)*o>-.5).sort((a,c)=>(a.s-c.s)*o)[0];if(!r)this.driveTarget=s.s+o*30;else{const a=this.ww.bodies[n?r.above:r.below];this.driveTarget=a.kind==="chamber"?(a.s0+a.s1)/2:r.s+o*(Sn/2+14)}}this.creepTo(this.driveTarget,t)}else if(this.driveTarget=null,this.creepTo(null,t),e.gate&&e.action!=="wait"){this.busyGate=e.gate;const r=`${e.action}:${e.gate.label}`;if(r!==this.actKey)this.actKey=r,this.actAt=this.time+Gv+this.walkTime(e.gate);else if(this.time>=this.actAt){const a=e.gate;e.action==="paddlesUp"?a.wantPaddle=!0:e.action==="paddlesDown"?a.wantPaddle=!1:e.action==="close"?a.wantOpen=!1:e.action==="open"&&this.ww.levelsMatch(a)&&(a.wantOpen=!0),this.actKey=""}}else e.gate&&(this.busyGate=e.gate);return"running"}walkTime(t){const e=this.helpers.get(this.active);return e?Math.min(...e.map(n=>Math.abs(n.s-t.s)))/Zl:0}creepTo(t,e){const n=this.boat,s=this.route.frame(n.s);let o=0;if(t!==null){const c=t-n.s;o=Math.sign(c)*Math.min(Hv,Math.abs(c)*.5),Math.abs(c)<.05&&(o=0)}n.s+=o*e,n.d+=(0-n.d)*Math.min(1,e*.8);const r=this.route.frame(n.s);n.x=r.x+r.nx*n.d,n.z=r.z+r.nz*n.d;const a=Math.atan2(s.tx,s.tz)+(Math.cos(n.psi-Math.atan2(s.tx,s.tz))>=0?0:Math.PI);n.psi+=Math.atan2(Math.sin(a-n.psi),Math.cos(a-n.psi))*Math.min(1,e*1.5),n.u=Math.abs(o),n.v=n.r=0,n.notch=0,n.thrust=0}animateHelpers(t){var e;for(const[n,s]of this.helpers){const o=this.active===n&&((e=this.busyGate)==null?void 0:e.group)===n;for(const r of s){const a=(n.gates[0].s+n.gates.at(-1).s)/2+r.offset,c=o?this.busyGate.s+r.offset*.9:a,l=Math.sign(c-r.s)*Math.min(Math.abs(c-r.s),Zl*t);r.s+=l;const h=this.ww.halfWidthAt(r.s),f=r.offset<0?ce:-ce,[u,d]=this.route.point(r.s,(h+1.1)*f);r.person.group.position.set(u,this.terrain.bankTop(r.s)+(Math.abs(l)>.001?Math.abs(Math.sin(this.time*6))*.03:0),d);const g=this.route.frame(r.s);r.person.group.rotation.y=Math.abs(l)>.001?Math.atan2(g.tx*Math.sign(l),g.tz*Math.sign(l)):Math.atan2(-g.nx*f,-g.nz*f);const _=o&&Math.abs(r.s-c)<.5,m=this.busyGate,p=_&&!!m&&m.paddle>.02&&m.paddle<.98;Math.abs(l)>.001?Pa(r.person,this.time*6):(J_(r.person),jo(r.person,p?"wind":_&&m&&m.open>.02&&m.open<.98?"push":"rest",this.time))}}}}const Kl=new Ot("#b0664d"),Jl=new Ot("#c9a58a"),Or=new Ot("#d0b896");class Wv{constructor(){F(this,"pos",[]);F(this,"col",[])}tri(t,e,n,s){for(const o of[t,e,n])this.pos.push(o.x,o.y,o.z),this.col.push(s.r,s.g,s.b)}quad(t,e,n,s,o){this.tri(t,e,n,o),this.tri(t,n,s,o)}mesh(){const t=new de;t.setAttribute("position",new Xt(this.pos,3)),t.setAttribute("color",new Xt(this.col,3)),t.computeVertexNormals();const e=new et(t,new ee({vertexColors:!0,roughness:.9,flatShading:!0,side:ke}));return e.castShadow=e.receiveShadow=!0,e}}class Xv{constructor(t,e,n,s){F(this,"group",new Ht);this.route=t,this.ww=e,this.terrain=n;const o=new Wv;for(const r of s.walls??[]){const a=[];for(let c=0;c<r.p.length;c+=2)a.push([r.p[c],r.p[c+1]]);r.kind==="gate"?this.gate(o,a):r.closed?this.extrude(o,a,2.4,Kl,Jl):this.extrude(o,qv(a,1.3),2.4,Kl,Jl)}this.group.add(o.mesh()),s.bridgeOfSighs&&this.group.add(this.bridgeOfSighs(s.bridgeOfSighs))}ground(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s),o=Math.sign(n.d||1)*Math.max(n.dist,s+7);return this.terrain.landHeight(t,e,n.s,o)}extrude(t,e,n,s,o){const r=e.length;if(r<3)return;const a=e.map(([h,f])=>this.ground(h,f)+n),c=(h,f)=>new D(e[h][0],f,e[h][1]);for(let h=0;h<r;h++){const f=(h+1)%r;t.quad(c(h,a[h]-n-7),c(f,a[f]-n-7),c(f,a[f]),c(h,a[h]),s)}const l=Mn.triangulateShape(e.map(([h,f])=>new st(h,f)),[]);for(const[h,f,u]of l)t.tri(c(h,a[h]),c(f,a[f]),c(u,a[u]),o);for(let h=0;h<r;h++){const f=(h+1)%r,u=Math.hypot(e[f][0]-e[h][0],e[f][1]-e[h][1]);for(let d=.6;d<u-.3;d+=2.2){const g=d/u,_=e[h][0]+(e[f][0]-e[h][0])*g,m=e[h][1]+(e[f][1]-e[h][1])*g,p=a[h]+(a[f]-a[h])*g;Lo(t,_,p+.45,m,.9,.9,.5,Math.atan2(e[f][0]-e[h][0],e[f][1]-e[h][1]),s)}}}gate(t,e){const n=e.reduce((E,A)=>E+A[0],0)/e.length,s=e.reduce((E,A)=>E+A[1],0)/e.length;let o=0,r=0,a=0;for(const[E,A]of e)o+=(E-n)**2,r+=(A-s)**2,a+=(E-n)*(A-s);const c=.5*Math.atan2(2*a,o-r),l=Math.cos(c),h=Math.sin(c);let f=1/0,u=-1/0,d=1/0,g=-1/0;for(const[E,A]of e){const C=(E-n)*l+(A-s)*h,S=-(E-n)*h+(A-s)*l;f=Math.min(f,C),u=Math.max(u,C),d=Math.min(d,S),g=Math.max(g,S)}const _=this.ground(n,s),m=u-f,p=Math.max(4,g-d),x=Math.atan2(l,h),M=E=>[n+l*E,s+h*E],[v,b]=M((f+u)/2);Lo(t,v,_+7.4,b,p,3.2,m,x,Or);for(const E of[f+1.8,u-1.8]){const[A,C]=M(E);Lo(t,A,_+2.9,C,p,5.8,3.6,x,Or,6)}Lo(t,v,_+9.4,b,p*.15,.9,m,x,Or)}bridgeOfSighs(t){const e=this.route,n=this.ww,s=e.frame(t.s),o=n.levelAt(t.s),r=n.halfWidthAt(t.s),a=r+7.5,c=Math.max(...[-1,1].map(p=>{const[x,M]=e.point(t.s,a*p);return this.terrain.landHeight(x,M,t.s,a*p)}))+.1,l=a+1,h=r+3.6,f=c-.75,u=o+1.2,d=new wi;d.moveTo(-l,o-2),d.lineTo(-h,o-2),d.lineTo(-h,u);for(let p=1;p<20;p++){const x=Math.PI-Math.PI*p/20;d.lineTo(Math.cos(x)*h,u+Math.sin(x)*(f-u))}d.lineTo(h,u),d.lineTo(h,o-2),d.lineTo(l,o-2),d.lineTo(l,c),d.lineTo(-l,c),d.closePath();const g=2,_=new et(new as(d,{depth:g,bevelEnabled:!1,curveSegments:12}).translate(0,0,-g/2),new ee({color:"#a8654f",roughness:.9,flatShading:!0}));_.castShadow=_.receiveShadow=!0;const m=new Ht;return m.add(_),m.position.set(s.x,0,s.z),m.rotation.y=Math.atan2(-s.nz,s.nx),m.name="bridge-of-sighs",m}}function qv(i,t){const e=[],n=[];for(let s=0;s<i.length;s++){const o=i[Math.max(0,s-1)],r=i[Math.min(i.length-1,s+1)];let a=r[0]-o[0],c=r[1]-o[1];const l=Math.hypot(a,c)||1;a/=l,c/=l,e.push([i[s][0]-c*t,i[s][1]+a*t]),n.push([i[s][0]+c*t,i[s][1]-a*t])}return[...e,...n.reverse()]}function Lo(i,t,e,n,s,o,r,a,c,l=0){const h=Math.sin(a),f=Math.cos(a),u=(M,v,b)=>new D(t+M*f+b*h,e+v,n-M*h+b*f),d=s/2,g=r/2,_=-o/2-l,m=o/2,p=[u(-d,_,-g),u(d,_,-g),u(d,_,g),u(-d,_,g),u(-d,m,-g),u(d,m,-g),u(d,m,g),u(-d,m,g)],x=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7]];for(const[M,v,b,E]of x)i.quad(p[M],p[v],p[b],p[E],c)}const Rs=[1,2,5,10,30];function Yv(i,t){return{pub:`You moor up and pop into ${i} for a pint of something local. An hour slips happily by.`,bar:`A drink at ${i}, watching the boats go by. An hour slips happily by.`,cafe:`Tea and a slab of cake at ${i}, eaten on the roof. An hour slips happily by.`,ice_cream:`An ice cream from ${i}, eaten on the roof. Bliss.`,restaurant:`A proper meal at ${i}. Nobody has to cook in the galley tonight. An hour slips happily by.`,hotel:`You stretch your legs and have a nose round ${i}. An hour slips happily by.`}[t]??`You stop at ${i}. An hour slips happily by.`}function $v(i,t){return{Northgate:"Above you: the Northgate, one of the medieval gateways through Chester’s city walls. The canal runs along the old moat.","Water Tower":"Off to the side: the Water Tower, built in the 1320s to guard the old river port when the Dee still reached the walls.","Lead Shot Tower":"That tall brick tower is the Lead Shot Tower (1799), where molten lead was dropped from the top to make shot.","Bridge of Sighs":"Overhead: the Bridge of Sighs (1793). Condemned prisoners from the Northgate gaol were led across it to the chapel for their last rites.","King Charles Tower":"Up on the walls: King Charles’ Tower. Legend has it Charles I watched his army lose the Battle of Rowton Moor from here in 1645.","Morgan's Mount":"Morgan’s Mount, a little gun platform on the walls from the Civil War siege of Chester.","Pemberton's Parlour":"Pemberton’s Parlour, a tower on the walls named after an 18th-century ropemaker who watched his men at work from it."}[i]??`Look out: ${i}${t==="tower"?", part of the old city walls":""}.`}const Ql=['% rocks in your wash. "Tickover past moored boats, please!"',"A mug of tea slides off the roof of %. Slow down past moored boats!","The owner of % gives you a Look. Ease off to tickover when passing."],jv=1/60,Fr=2.23694,qh=document.getElementById("loading"),Yh=document.getElementById("loading-text"),Zv=qh.querySelector(".bar div");let Kv=0;async function jn(i){Yh.textContent=i,Zv.style.width=`${Math.min(100,++Kv*11)}%`,await new Promise(t=>requestAnimationFrame(()=>setTimeout(t,0)))}async function Jv(){await jn("Fetching the map…");const i=await __("./data/chester.json");await document.fonts.ready;const t=document.getElementById("scene"),e=new dg({canvas:t,antialias:!0});e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setSize(innerWidth,innerHeight),e.toneMapping=ih,e.toneMappingExposure=.62,e.shadowMap.enabled=!0,e.shadowMap.type=eh;const n=new Ih,s=new je(55,innerWidth/innerHeight,.4,4500);await jn("Surveying the canal…");const o=new v_(i.centreline),r=new T_(i.locks,i.bridges,o.length,[4700,i.meta.towerWharfS-40]),a=[],c=[];for(let $=0;$<i.centreline.length;$+=2)a.push(i.centreline[$]),c.push(i.centreline[$+1]);const l=520,h={x0:Math.min(...a)-l,x1:Math.max(...a)+l,z0:Math.min(...c)-l,z1:Math.max(...c)+l},f=new P_(o,r,h);f.cuttings=i.cuttings??[],f.setRivers(i.rivers),f.urbanAt=z_(i.buildings,h);const u=i.parks.map($=>{let K=1/0,dt=-1/0,bt=1/0,zt=-1/0;for(let I=0;I<$.p.length;I+=2)K=Math.min(K,$.p[I]),dt=Math.max(dt,$.p[I]),bt=Math.min(bt,$.p[I+1]),zt=Math.max(zt,$.p[I+1]);return{ring:$.p,x0:K,x1:dt,z0:bt,z1:zt}});f.parkAt=($,K)=>u.some(dt=>$>=dt.x0&&$<=dt.x1&&K>=dt.z0&&K<=dt.z1&&Ja($,K,dt.ring)),await jn("Digging the cut…"),n.add(f.buildStrip()),await jn("Shaping the land…"),n.add(f.buildFar()),await jn("Filling it with water…");const d=new U_(o,r);d.addRivers(i.rivers,f.riverLevel);for(const $ of i.water){let K=0,dt=0;const bt=$.p.length/2;for(let zt=0;zt<$.p.length;zt+=2)K+=$.p[zt]/bt,dt+=$.p[zt+1]/bt;o.project(K,dt).dist<40||d.addPond($.p,f.heightAt(K,dt)-.25)}n.add(d.group);const g=new N_(o,r,i.bridges,f);n.add(g.group),n.add(new Xv(o,r,f,i).group);const _=new W_(o,r,f);n.add(_.group);const m=i.meta.towerWharfS+70,p=new Mv(o,r,f,i.bridges,i.meta.towerWharfS,m,i.pois??[]);n.add(p.group);const x=new B_(i,o,r,f,g);await x.build(jn),n.add(x.group),await jn("Lighting the stove…");const M=new q_(n,e),v=Qa();v.group.rotation.order="YXZ",n.add(v.group);const b=new cv(o,r);b.placeAt(m),b.obstacles=[...p.boats];const E=new wv(o,r,f,b);n.add(E.group);const A=new Av(o,r,p,b);n.add(A.group);const C=new Pv(o,r,f,x,p,i.bridges);n.add(C.group);const S=new Uv(o,r,f,b,C.anglerSpots,C.gardens);n.add(S.group);let y=0;const P=new Bv(o,r,f);n.add(P.group);const k=new Vv(o,r,f,b);n.add(k.group);const B=$=>{P.reset();const K=b.obstacles.indexOf(P.obstacle);if(K>=0&&b.obstacles.splice(K,1),!$&&Math.random()<.5)return;const dt=ut(z.current.zone),bt=Math.max(Math.min(b.s,dt.s0)+120,760),zt=Math.min(Math.max(b.s,dt.s1)-60,2200);for(let I=0;I<40&&zt>bt;I++){const rt=bt+Math.random()*(zt-bt);if(!(Math.abs(rt-b.s)<120)&&!(i.bridges.some(V=>Math.abs(V.s-rt)<V.w/2+35)||r.gates.some(V=>Math.abs(V.s-rt)<50))&&!p.zones.some(V=>rt>V.s0-12&&rt<V.s1+12)&&!p.boats.some(V=>Math.abs(V.s-rt)<V.halfL+12)&&r.bodies[r.bodyIndexAt(rt)].kind==="pound"){P.place(rt),b.obstacles.push(P.obstacle);return}}},q=p.zones.filter($=>$.kind==="stop"),j=(i.pois??[]).filter($=>$.type==="sight"),U=new Set,Y=new Set,z=new Ev(M.hour),ut=$=>p.zones.find(K=>K.id===$);p.setActive(ut(z.current.zone));const mt=new hv,Mt=new mv;mt.onFirstInput=()=>Mt.start(),t.addEventListener("pointerdown",()=>Mt.start());const Nt=new pv(i,o,r,h);Nt.addMooredBoats(p.boats),Nt.setPlaces([...p.zones.filter($=>$.kind==="stop").map($=>{const[K,dt]=o.point(($.s0+$.s1)/2,0),bt={pub:"🍺",bar:"🍸",cafe:"☕",restaurant:"🍽️",hotel:"🛏️",ice_cream:"🍦"}[$.poi.kind]??"⚓";return{x:K,z:dt,icon:bt,name:$.name}}),...(i.pois??[]).filter($=>$.type==="sight").map($=>({x:$.x,z:$.z,icon:"★",name:$.name}))]);const Qt=()=>{const $=ut(z.current.zone),[K,dt]=o.point(($.s0+$.s1)/2,0);Nt.setDestination(K,dt,$.name)};Qt();const H=new uv(document.getElementById("hud"),$=>mt.push($),Nt.el,Nt.bigEl),Z=new s_(s,t);Z.enableDamping=!0,Z.minDistance=5,Z.maxDistance=260,Z.maxPolarAngle=1.48,Z.enablePan=!1;let _t=-10,at=0;Z.addEventListener("start",()=>_t=performance.now()/1e3);let Rt="follow";const Ct=new D,kt=new D,te=new D,nt=$=>{const K=r.levelAt(b.s);v.group.position.set(b.x,K+Math.sin($*1.3)*.015,b.z),v.group.rotation.set(Math.sin($*.9)*.004,b.psi,Fs.clamp(-b.r*b.u*.5,-.04,.04)),v.rudder.rotation.y=-b.rudder*.6,Ct.set(b.x,K+1.6,b.z)};nt(0),kt.copy(Ct),Z.target.copy(Ct),s.position.set(b.x-Math.sin(b.psi)*24,Ct.y+9,b.z-Math.cos(b.psi)*24),Z.update();let ct=2,L=null,lt=null;const ot=$=>{var K;return $?`${$.action}:${((K=$.gate)==null?void 0:K.label)??""}:${$.group.name}`:""};let St=null;const pt=new Set;let Bt=0,Et,R=0,w=!1,G=0;const J=()=>(lt==null?void 0:lt.adjacent)??[];let it="",Q=0;const Lt=$=>{const[K,dt]=b.span();return K<$.s+.3&&dt>$.s-.3},vt=$=>{switch($){case"throttleUp":k.active&&(k.stop(),H.toast("You take the tiller back.","info",2e3)),b.notch=Math.min(Xh,b.notch+1);break;case"throttleDown":b.notch=Math.max(Wh,b.notch-1);break;case"neutral":b.notch=0;break;case"paddles":L&&r.togglePaddle(L);break;case"gates":if(L){const K=r.toggleGate(L,Lt(L));K&&H.toast(K,"warn")}break;case"nextGate":{const K=J();K.length&&(L=K[(K.indexOf(L)+1)%K.length],St=ot(lt));break}case"timeFaster":ct=Rs[Math.min(Rs.length-1,Rs.indexOf(ct)+1)];break;case"timeSlower":ct=Rs[Math.max(0,Rs.indexOf(ct)-1)];break;case"camera":Rt==="follow"?(te.copy(s.position).sub(Z.target),Rt="steerer",Z.enabled=!1,v.steerer.visible=!1):(Rt="follow",Z.enabled=!0,s.position.copy(Z.target).add(te),v.steerer.visible=!0);break;case"map":Nt.bigOpen=!Nt.bigOpen,H.setMapOpen(Nt.bigOpen);break;case"help":H.toggleHelp();break;case"mute":Mt.toggleMute();break;case"moor":{const K=E.act();if(K&&H.toast(K,"info",3e3),E.moored){const dt=p.zoneAt(b.s),bt=ut(z.current.zone);(dt==null?void 0:dt.kind)==="stop"&&!U.has(dt.id)&&(U.add(dt.id),H.toast(Yv(dt.poi.name,dt.poi.kind),"info",7e3),M.hour=(M.hour+1)%24),dt===bt&&!z.result?(H.showSummary(z.complete(M.hour),dt.name),p.setActive(null)):(dt==null?void 0:dt.kind)!=="stop"&&H.toast(dt?`Moored at ${dt.name}.`:`Moored up. Your trip ends at ${bt.name}.`,"info",3500)}break}case"nextTrip":z.result&&(z.next(M.hour),H.hideSummary(),p.setActive(ut(z.current.zone)),Qt(),B(z.current.zone==="hoole"),k.roster(),H.toast(`${z.current.title}: ${z.current.brief}`,"info",7e3));break;case"clear":{P.active&&Math.abs(P.s-b.s)<45?E.moored?P.startClearing()&&H.toast("Out with the boat hook. Heave!","info",2500):H.toast("Moor up first (F), then you can get at it with the boat hook.","info",3500):H.toast("There's nothing here to clear.","info",2e3);break}case"autopilot":k.active?(k.stop(),H.toast("You take the tiller back.","info",2500)):lt&&k.isStaffed(lt.group)?E.count?H.toast("Cast off first (F), then the volunteers can bring you through.","info",3500):(k.start(lt.group),H.toast("The volunteers take over: sit back and enjoy it. (Throttle or steer to take the tiller back.)","info",5e3)):H.toast("No volunteers on duty here, so you'll have to work this one yourself.","info",3e3);break;case"headlight":w=!w,v.headlight.intensity=w?40:0;break}},At=()=>{const $=r.bodies[r.bodyIndexAt(b.s)],K=(b.s-i.meta.towerWharfS)/1e3,dt=`${Math.abs(K).toFixed(1)} km ${K>=0?"above":"below"} Tower Wharf`;if($.kind==="chamber")return[`In ${$.lockName}`,dt];const bt=r.gates.find(V=>V.s>b.s),zt=[...r.gates].reverse().find(V=>V.s<b.s),I=g.at(b.s),rt=I!=null&&I.data.name?` · under ${I.data.name}`:"";return Math.abs(b.s-i.meta.towerWharfS)<70?["Tower Wharf",`Junction with the Dee Branch${rt}`]:bt&&bt.s-b.s<160?[`Approaching ${bt.lockName}`,dt+rt]:zt&&b.s-zt.s<120?[`Leaving ${zt.lockName}`,dt+rt]:bt&&zt?[`${zt.lockName} → ${bt.lockName}`,dt+rt]:[bt?`Towards ${bt.lockName}`:"Towards Christleton & Nantwich",dt+rt]},Jt=()=>{const $=Z.target,K=s.position,dt=$.distanceTo(K);for(let bt=4;bt<dt;bt+=1.5){const zt=bt/dt,I=$.x+(K.x-$.x)*zt,rt=$.y+(K.y-$.y)*zt,V=$.z+(K.z-$.z)*zt,tt=o.project(I,V,b.s),gt=g.rampAt(tt.s,tt.d);if(rt<x.roofAt(I,V)||rt<f.heightAt(I,V)+.5||gt.onDeck&&rt<gt.y+1.2){s.position.lerpVectors($,K,Math.max(4,bt-2)/dt);return}}};H.toast(`Welcome aboard the Chester Rose! First trip: ${z.current.brief} W to get going, H for help.`,"info",9e3);const ht=new t_;let Tt=0;addEventListener("resize",()=>{s.aspect=innerWidth/innerHeight,s.updateProjectionMatrix(),e.setSize(innerWidth,innerHeight)});const Gt=()=>{var ps;const $=Math.min(ht.getDelta(),.1);Tt+=$;for(const Pt of mt.drain())vt(Pt);const K=$*ct,dt=Math.max(1,Math.ceil(K/jv));for(let Pt=0;Pt<dt;Pt++){r.update(K/dt),k.active||b.step(K/dt,mt.steer);for(const Yt of b.contacts)if(Yt.impulse>1500&&R<=0)if(Mt.bump(Math.min(1,Yt.impulse/12e3)),R=.4,Yt.obstacle===P.obstacle)H.toast("It's jammed solid. Moor up nearby (F) and clear it with the boat hook (G).","warn",3500);else if(Yt.kind==="boat"&&!p.boats.includes(Yt.obstacle))A.bumped(Yt.obstacle),Yt.impulse>3e3&&z.bumps++;else if(Yt.kind==="boat"){const Ke=Yt.obstacle;p.rockBoat(Ke,Math.min(.08,Yt.impulse/5e4)),Yt.impulse>3e3&&(z.bumps++,H.toast(`Bump! Sorry, ${Ke.name}. A head pops out of the hatch…`,"warn",3e3))}else Yt.impulse>9e3&&(z.bumps++,H.toast(Yt.kind==="gate"?"Bump! Into the lock gates.":"Clunk. Mind the bank!","info",2200))}R-=$;const bt=o.frame(b.s),zt=Math.sin(b.psi)*bt.tx+Math.cos(b.psi)*bt.tz>=0;lt=Fl(r,b.span(),zt);for(const Pt of r.events.splice(0))(!Pt.group||Pt.group===(lt==null?void 0:lt.group)||Pt.group.gates.some(Ke=>Math.abs(Ke.s-b.s)<150))&&H.toast(Pt.text,Pt.kind);if(k.active&&mt.steer!==0&&(k.stop(),H.toast("You take the tiller back.","info",2e3)),k.update(K,lt,zt)==="done"&&(H.toast("Through! The volunteers wave you on your way. Thanks, volunteers!","info",4500),lt=Fl(r,b.span(),zt)),!k.active&&(lt!=null&&lt.keeper)&&lt.gate&&lt.action!=="wait"){const Pt=ot(lt);if(Pt!==it)it=Pt,Q=Tt+1.5;else if(Tt>=Q){const Yt=lt.gate;lt.action==="paddlesUp"?Yt.wantPaddle=!0:lt.action==="paddlesDown"?Yt.wantPaddle=!1:lt.action==="close"?Yt.wantOpen=!1:lt.action==="open"&&r.levelsMatch(Yt)&&(Yt.wantOpen=!0),it=""}}const I=J();St!==null&&(St!==ot(lt)||!L||!I.includes(L))&&(St=null),St===null&&(L=lt!=null&&lt.gate&&!lt.keeper?lt.gate:I.includes(L)?L:I.at(-1)??null),_.setSelected(L),H.setLockPanel(r,{gate:L,step:lt,candidates:I.length,boatSpans:L?Lt(L):!1,volunteers:k.active?"active":k.isStaffed(lt==null?void 0:lt.group)?"available":"none"});for(const Pt of r.gates)Pt.paddle<.05?pt.delete(Pt):Math.abs(Pt.s-b.s)>110&&!pt.has(Pt)&&(pt.add(Pt),H.toast(`You've left the paddles up at ${Pt.lockName}. The lock-keeper won't be pleased.`,"warn",6e3));Bt=b.speed*Fr>4.3?Bt+K:0,Bt>6&&(H.toast("Steady on! The limit is 4 mph, and your wash is slapping the moored boats.","warn"),Bt=-30),A.update(K,zt?1:-1);for(const Pt of A.events.splice(0)){const Yt=M.hour<12?"Morning":M.hour<18?"Afternoon":"Evening";Pt.kind==="greet"?H.toast(`"${Yt}!" The steerer of ${Pt.boat.name} gives you a wave.`,"info",3500):Pt.kind==="wrongSide"?H.toast(`Pass oncoming boats on the right (port to port). ${Pt.boat.name}'s steerer looks puzzled.`,"warn",4500):H.toast(`Bump! Sorry, ${Pt.boat.name}!`,"warn",3e3)}S.update($),y-=$;for(const Pt of S.events.splice(0))Pt.kind==="quack"?(Mt.quack(),y<=0&&(H.toast("Quack! A mallard paddles off, deeply unimpressed.","info",2500),y=25)):(z.rocked++,H.toast("An angler shakes a fist as your wash bobs their float. Ease off past the anglers!","warn",4e3));for(const Pt of j)!Y.has(Pt.name)&&Math.abs(Pt.s-b.s)<45&&(Y.add(Pt.name),H.toast($v(Pt.name,Pt.kind),"info",7e3));if(G-=$,b.speed*Fr>2.8)for(const Pt of p.boats)Math.hypot(Pt.x-b.x,Pt.z-b.z)>Pt.halfL+10||p.now-Pt.rockedAt<10||(p.rockBoat(Pt,.05),z.rocked++,G<=0&&(H.toast(Ql[Math.floor(Math.random()*Ql.length)].replace("%",Pt.name),"warn",3500),G=6));const rt=(ps=g.at(b.s))==null?void 0:ps.data.name;if(rt&&rt!==Et&&H.toast(`Under ${rt}`,"info",2200),Et=rt,nt(Tt),d.update($),_.update($),p.update($),E.update(r.levelAt(b.s)),M.update(K/3600,Ct),M.sky.position.copy(s.position),Rt==="follow"){const Pt=Ct.clone().sub(kt);if(Pt.length()>50?(Z.target.copy(Ct),s.position.set(b.x-Math.sin(b.psi)*24,Ct.y+9,b.z-Math.cos(b.psi)*24),at=0):(s.position.add(Pt),Z.target.add(Pt)),at>0){const Yt=s.position.clone().sub(Z.target);s.position.copy(Z.target).addScaledVector(Yt.normalize(),at)}if(performance.now()/1e3-_t>3&&Math.abs(b.u)>.25){const Yt=s.position.clone().sub(Z.target),Ke=Math.atan2(Yt.x,Yt.z);let Tn=b.psi+(b.u>0?Math.PI:0)-Ke;Tn=Math.atan2(Math.sin(Tn),Math.cos(Tn));const Ys=Tn*Math.min(1,$*.5);Yt.applyAxisAngle(new D(0,1,0),Ys),s.position.copy(Z.target).add(Yt)}Z.update(),at=s.position.distanceTo(Z.target),Jt()}else{const Pt=Math.sin(b.psi),Yt=Math.cos(b.psi),Ke=-Sn/2+.9;s.position.set(b.x+Pt*Ke,Ct.y+.75,b.z+Yt*Ke),s.lookAt(b.x+Pt*40,Ct.y-.2,b.z+Yt*40)}kt.copy(Ct),g.updateOcclusion(s.position,Ct,$),H.setHelm({notch:b.notch,speedMph:b.speed*Fr,rudder:b.rudder,timeScale:ct,hour:M.hour,muted:Mt.muted});const[V,tt]=At();H.setLocation(V,tt),Nt.draw(b.x,b.z,b.psi);const gt=ut(z.current.zone),yt=(gt.s0+gt.s1)/2-b.s,Wt=b.s>gt.s0-4&&b.s<gt.s1+4,ge=Math.sign(yt)===(zt?1:-1)?"ahead":"behind you",Te=z.result?"Moored up. Press Enter for the next trip":Wt?`${gt.name}: you're here. Pull in and tie up (F)`:`${gt.name} · ${(Math.abs(yt)/1e3).toFixed(1)} km ${ge}`,oe=`Journal: ${U.size}/${q.length} canalside stops · ${Y.size}/${j.length} sights`;if(H.setTrip(z.index+1,z.current.title,z.current.brief,Te,!!z.result,oe),P.update(K,Tt)){const Pt=b.obstacles.indexOf(P.obstacle);Pt>=0&&b.obstacles.splice(Pt,1),z.cleared++,Nt.setHazard(null),H.toast("Cleared! A trolley, a bike, a traffic cone and an alarming amount of branches now sit in a heap on the towpath. Cast off (F) when you're ready.","info",7e3)}const Be=P.active?Math.abs(P.s-b.s):1/0;if(P.active&&!P.spotted&&Be<90){P.spotted=!0;const[Pt,Yt]=o.point(P.s,0);Nt.setHazard(Pt,Yt),H.toast("Uh-oh: a shopping trolley, a bike and a raft of branches are jammed across the canal ahead. Moor up nearby (F) and clear it with the boat hook (G).","warn",8e3)}let He=E.prompt();Be<45&&(E.moored?He=P.clearing?{key:"G",text:`Clearing… ${Math.round(P.progress*100)}%`,ready:!1}:{key:"G",text:"Clear the blockage with the boat hook",ready:!0}:He||(He={key:"F",text:"Moor up alongside the towpath to get at the blockage",ready:!1})),H.setPrompt(He);const qs=r.gates.reduce((Pt,Yt)=>Pt+(Math.abs(Yt.s-b.s)<120?Math.abs(Yt.flow):0),0);Mt.update(b.notch,qs,H.isWinding,!M.isNight),e.render(n,s),requestAnimationFrame(Gt)};await jn("Casting off…"),qh.classList.add("done"),requestAnimationFrame(Gt),Object.assign(window,{game:{scene:n,boat:b,ww:r,camera:s,route:o,renderer:e,moorings:p,trips:z,traffic:A,decor:C,life:S,blockage:P,volunteers:k,lines:E}})}Jv().catch(i=>{console.error(i),Yh.textContent=`Something went wrong: ${i.message}`});
