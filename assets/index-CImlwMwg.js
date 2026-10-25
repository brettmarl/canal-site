var qu=Object.defineProperty;var Yu=(i,t,e)=>t in i?qu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var O=(i,t,e)=>Yu(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tl="170",Ts={ROTATE:0,DOLLY:1,PAN:2},bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ju=0,Zl=1,Zu=2,Zh=1,Kh=2,Vn=3,_i=0,Ze=1,Te=2,mi=0,As=1,Kl=2,Jl=3,Ql=4,Ku=5,Di=100,Ju=101,Qu=102,td=103,ed=104,nd=200,id=201,sd=202,od=203,La=204,Da=205,rd=206,ad=207,ld=208,cd=209,hd=210,ud=211,dd=212,fd=213,pd=214,Ia=0,Ua=1,Na=2,Ps=3,Oa=4,Fa=5,ka=6,za=7,Jh=0,md=1,gd=2,gi=0,_d=1,vd=2,xd=3,Qh=4,Md=5,yd=6,bd=7,tu=300,Ls=301,Ds=302,Ba=303,Ha=304,Tr=306,Is=1e3,Wn=1001,Ga=1002,an=1003,wd=1004,So=1005,Rn=1006,Or=1007,Ni=1008,jn=1009,eu=1010,nu=1011,po=1012,Al=1013,ki=1014,Cn=1015,yo=1016,Rl=1017,Cl=1018,Us=1020,iu=35902,su=1021,ou=1022,bn=1023,ru=1024,au=1025,Rs=1026,Ns=1027,Pl=1028,Ll=1029,lu=1030,Dl=1031,Il=1033,dr=33776,fr=33777,pr=33778,mr=33779,Va=35840,Wa=35841,Xa=35842,$a=35843,qa=36196,Ya=37492,ja=37496,Za=37808,Ka=37809,Ja=37810,Qa=37811,tl=37812,el=37813,nl=37814,il=37815,sl=37816,ol=37817,rl=37818,al=37819,ll=37820,cl=37821,gr=36492,hl=36494,ul=36495,cu=36283,dl=36284,fl=36285,pl=36286,Sd=3200,Ed=3201,hu=0,Td=1,di="",Ce="srgb",Bs="srgb-linear",Ar="linear",ve="srgb",Ki=7680,tc=519,Ad=512,Rd=513,Cd=514,uu=515,Pd=516,Ld=517,Dd=518,Id=519,ml=35044,Fi=35048,ec="300 es",Xn=2e3,yr=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nc=1234567;const lo=Math.PI/180,Os=180/Math.PI;function Ln(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function Ul(i,t){return(i%t+t)%t}function Ud(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Nd(i,t,e){return i!==t?(e-i)/(t-i):0}function co(i,t,e){return(1-e)*i+e*t}function Od(i,t,e,n){return co(i,t,1-Math.exp(-e*n))}function Fd(i,t=1){return t-Math.abs(Ul(i,t*2)-t)}function kd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function zd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Bd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Hd(i,t){return i+Math.random()*(t-i)}function Gd(i){return i*(.5-Math.random())}function Vd(i){i!==void 0&&(nc=i);let t=nc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wd(i){return i*lo}function Xd(i){return i*Os}function $d(i){return(i&i-1)===0&&i!==0}function qd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jd(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),f=o((t-n)/2),d=r((t-n)/2),u=o((n-t)/2),m=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Fs={DEG2RAD:lo,RAD2DEG:Os,generateUUID:Ln,clamp:Ie,euclideanModulo:Ul,mapLinear:Ud,inverseLerp:Nd,lerp:co,damp:Od,pingpong:Fd,smoothstep:kd,smootherstep:zd,randInt:Bd,randFloat:Hd,randFloatSpread:Gd,seededRandom:Vd,degToRad:Wd,radToDeg:Xd,isPowerOfTwo:$d,ceilPowerOfTwo:qd,floorPowerOfTwo:Yd,setQuaternionFromProperEuler:jd,normalize:_e,denormalize:Mn};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,s,o,r,a,l,c){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],m=n[8],_=s[0],g=s[3],p=s[6],x=s[1],M=s[4],v=s[7],T=s[2],w=s[5],y=s[8];return o[0]=r*_+a*x+l*T,o[3]=r*g+a*M+l*w,o[6]=r*p+a*v+l*y,o[1]=c*_+h*x+f*T,o[4]=c*g+h*M+f*w,o[7]=c*p+h*v+f*y,o[2]=d*_+u*x+m*T,o[5]=d*g+u*M+m*w,o[8]=d*p+u*v+m*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*r-a*c,d=a*l-h*o,u=c*o-r*l,m=e*f+n*d+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=f*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*o-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fr.makeScale(t,e)),this}rotate(t){return this.premultiply(Fr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new te;function du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zd(){const i=br("canvas");return i.style.display="block",i}const ic={};function oo(i){i in ic||(ic[i]=!0,console.warn(i))}function Kd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Jd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const he={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(i.r=Cs(i.r),i.g=Cs(i.g),i.b=Cs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?Ar:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const sc=[.64,.33,.3,.6,.15,.06],oc=[.2126,.7152,.0722],rc=[.3127,.329],ac=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lc=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[Bs]:{primaries:sc,whitePoint:rc,transfer:Ar,toXYZ:ac,fromXYZ:lc,luminanceCoefficients:oc,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:sc,whitePoint:rc,transfer:ve,toXYZ:ac,fromXYZ:lc,luminanceCoefficients:oc,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});let Ji;class tf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=br("canvas")),Ji.width=t.width,Ji.height=t.height;const n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=br("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=qn(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ef=0;class fu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Ln(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(kr(s[r].image)):o.push(kr(s[r]))}else o=kr(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nf=0;class Xe extends Vi{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Wn,s=Wn,o=Rn,r=Ni,a=bn,l=jn,c=Xe.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ln(),this.name="",this.source=new fu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Is:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Is:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=tu;Xe.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(u+1)/2,T=(p+1)/2,w=(h+d)/4,y=(f+_)/4,C=(m+g)/4;return M>v&&M>T?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=w/n,o=y/n):v>T?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=w/s,o=C/s):T<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(T),n=y/o,s=C/o),this.set(n,s,o,e),this}let x=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(f-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sf extends Vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Xe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends sf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pu extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class of extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const d=o[r+0],u=o[r+1],m=o[r+2],_=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=m,t[e+3]=_;return}if(f!==_||l!==d||c!==u||h!==m){let g=1-a;const p=l*d+c*u+h*m+f*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),w=Math.atan2(T,p*x);g=Math.sin(g*w)/T,a=Math.sin(a*w)/T}const v=a*x;if(l=l*g+d*v,c=c*g+u*v,h=h*g+m*v,f=f*g+_*v,g===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=o[r],d=o[r+1],u=o[r+2],m=o[r+3];return t[e]=a*m+h*f+l*u-c*d,t[e+1]=l*m+h*d+c*f-a*u,t[e+2]=c*m+h*u+a*d-l*f,t[e+3]=h*m-a*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(o/2),d=l(n/2),u=l(s/2),m=l(o/2);switch(r){case"XYZ":this._x=d*h*f+c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f-d*u*m;break;case"YXZ":this._x=d*h*f+c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f+d*u*m;break;case"ZXY":this._x=d*h*f-c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f-d*u*m;break;case"ZYX":this._x=d*h*f-c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f+d*u*m;break;case"YZX":this._x=d*h*f+c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f-d*u*m;break;case"XZY":this._x=d*h*f-c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f+d*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(o-c)*u,this._z=(r-s)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+r)/u,this._z=(o+c)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(o-c)/u,this._x=(s+r)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(r-s)/u,this._x=(o+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-e;return this._w=u*r+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),f=2*(o*n-r*e);return this.x=e+l*c+r*f-a*h,this.y=n+l*h+a*c-o*f,this.z=s+l*f+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zr.copy(this).projectOnVector(t),this.sub(zr)}reflect(t){return this.sub(zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zr=new N,cc=new pn;class Wi{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,mn):mn.fromBufferAttribute(o,r),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),To.subVectors(this.max,Ws),Qi.subVectors(t.a,Ws),ts.subVectors(t.b,Ws),es.subVectors(t.c,Ws),ni.subVectors(ts,Qi),ii.subVectors(es,ts),wi.subVectors(Qi,es);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-wi.z,wi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,wi.z,0,-wi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-wi.y,wi.x,0];return!Br(e,Qi,ts,es,To)||(e=[1,0,0,0,1,0,0,0,1],!Br(e,Qi,ts,es,To))?!1:(Ao.crossVectors(ni,ii),e=[Ao.x,Ao.y,Ao.z],Br(e,Qi,ts,es,To))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fn=[new N,new N,new N,new N,new N,new N,new N,new N],mn=new N,Eo=new Wi,Qi=new N,ts=new N,es=new N,ni=new N,ii=new N,wi=new N,Ws=new N,To=new N,Ao=new N,Si=new N;function Br(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Si.fromArray(i,o);const a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const rf=new Wi,Xs=new N,Hr=new N;class Hs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rf.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);const e=Xs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(Hr)),this.expandByPoint(Xs.copy(t.center).sub(Hr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new N,Gr=new N,Ro=new N,si=new N,Vr=new N,Co=new N,Wr=new N;class Rr{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Gr.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),si.copy(this.origin).sub(Gr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ro),a=si.dot(this.direction),l=-si.dot(Ro),c=si.lengthSq(),h=Math.abs(1-r*r);let f,d,u,m;if(h>0)if(f=r*l-a,d=r*a-l,m=o*h,f>=0)if(d>=-m)if(d<=m){const _=1/h;f*=_,d*=_,u=f*(f+r*d+2*a)+d*(r*f+d+2*l)+c}else d=o,f=Math.max(0,-(r*d+a)),u=-f*f+d*(d+2*l)+c;else d=-o,f=Math.max(0,-(r*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-r*o+a)),d=f>0?-o:Math.min(Math.max(-o,-l),o),u=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-o,-l),o),u=d*(d+2*l)+c):(f=Math.max(0,-(r*o+a)),d=f>0?o:Math.min(Math.max(-o,-l),o),u=-f*f+d*(d+2*l)+c);else d=r>0?-o:o,f=Math.max(0,-(r*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Gr).addScaledVector(Ro,d),u}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),s=kn.dot(kn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,o){Vr.subVectors(e,t),Co.subVectors(n,t),Wr.crossVectors(Vr,Co);let r=this.direction.dot(Wr),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;si.subVectors(this.origin,t);const l=a*this.direction.dot(Co.crossVectors(si,Co));if(l<0)return null;const c=a*this.direction.dot(Vr.cross(si));if(c<0||l+c>r)return null;const h=-a*si.dot(Wr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,o,r,a,l,c,h,f,d,u,m,_,g){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,f,d,u,m,_,g)}set(t,e,n,s,o,r,a,l,c,h,f,d,u,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),o=1/ns.setFromMatrixColumn(t,1).length(),r=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const d=r*h,u=r*f,m=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+m*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=m+u*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,u=l*f,m=c*h,_=c*f;e[0]=d+_*a,e[4]=m*a-u,e[8]=r*c,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=u*a-m,e[6]=_+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,u=l*f,m=c*h,_=c*f;e[0]=d-_*a,e[4]=-r*f,e[8]=m+u*a,e[1]=u+m*a,e[5]=r*h,e[9]=_-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,u=r*f,m=a*h,_=a*f;e[0]=l*h,e[4]=m*c-u,e[8]=d*c+_,e[1]=l*f,e[5]=_*c+d,e[9]=u*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,u=r*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-d*f,e[8]=m*f+u,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*f+m,e[10]=d-_*f}else if(t.order==="XZY"){const d=r*l,u=r*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+_,e[5]=r*h,e[9]=u*f-m,e[2]=m*f-u,e[6]=a*h,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(af,t,lf)}lookAt(t,e,n){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),oi.crossVectors(n,nn),oi.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),oi.crossVectors(n,nn)),oi.normalize(),Po.crossVectors(nn,oi),s[0]=oi.x,s[4]=Po.x,s[8]=nn.x,s[1]=oi.y,s[5]=Po.y,s[9]=nn.y,s[2]=oi.z,s[6]=Po.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],M=n[7],v=n[11],T=n[15],w=s[0],y=s[4],C=s[8],S=s[12],b=s[1],L=s[5],H=s[9],z=s[13],V=s[2],k=s[6],F=s[10],j=s[14],$=s[3],lt=s[7],ft=s[11],yt=s[15];return o[0]=r*w+a*b+l*V+c*$,o[4]=r*y+a*L+l*k+c*lt,o[8]=r*C+a*H+l*F+c*ft,o[12]=r*S+a*z+l*j+c*yt,o[1]=h*w+f*b+d*V+u*$,o[5]=h*y+f*L+d*k+u*lt,o[9]=h*C+f*H+d*F+u*ft,o[13]=h*S+f*z+d*j+u*yt,o[2]=m*w+_*b+g*V+p*$,o[6]=m*y+_*L+g*k+p*lt,o[10]=m*C+_*H+g*F+p*ft,o[14]=m*S+_*z+g*j+p*yt,o[3]=x*w+M*b+v*V+T*$,o[7]=x*y+M*L+v*k+T*lt,o[11]=x*C+M*H+v*F+T*ft,o[15]=x*S+M*z+v*j+T*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+o*l*f-s*c*f-o*a*d+n*c*d+s*a*u-n*l*u)+_*(+e*l*u-e*c*d+o*r*d-s*r*u+s*c*h-o*l*h)+g*(+e*c*f-e*a*u-o*r*f+n*r*u+o*a*h-n*c*h)+p*(-s*a*h-e*l*f+e*a*d+s*r*f-n*r*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],m=t[12],_=t[13],g=t[14],p=t[15],x=f*g*c-_*d*c+_*l*u-a*g*u-f*l*p+a*d*p,M=m*d*c-h*g*c-m*l*u+r*g*u+h*l*p-r*d*p,v=h*_*c-m*f*c+m*a*u-r*_*u-h*a*p+r*f*p,T=m*f*l-h*_*l-m*a*d+r*_*d+h*a*g-r*f*g,w=e*x+n*M+s*v+o*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/w;return t[0]=x*y,t[1]=(_*d*o-f*g*o-_*s*u+n*g*u+f*s*p-n*d*p)*y,t[2]=(a*g*o-_*l*o+_*s*c-n*g*c-a*s*p+n*l*p)*y,t[3]=(f*l*o-a*d*o-f*s*c+n*d*c+a*s*u-n*l*u)*y,t[4]=M*y,t[5]=(h*g*o-m*d*o+m*s*u-e*g*u-h*s*p+e*d*p)*y,t[6]=(m*l*o-r*g*o-m*s*c+e*g*c+r*s*p-e*l*p)*y,t[7]=(r*d*o-h*l*o+h*s*c-e*d*c-r*s*u+e*l*u)*y,t[8]=v*y,t[9]=(m*f*o-h*_*o-m*n*u+e*_*u+h*n*p-e*f*p)*y,t[10]=(r*_*o-m*a*o+m*n*c-e*_*c-r*n*p+e*a*p)*y,t[11]=(h*a*o-r*f*o-h*n*c+e*f*c+r*n*u-e*a*u)*y,t[12]=T*y,t[13]=(h*_*s-m*f*s+m*n*d-e*_*d-h*n*g+e*f*g)*y,t[14]=(m*a*s-r*_*s-m*n*l+e*_*l+r*n*g-e*a*g)*y,t[15]=(r*f*s-h*a*s+h*n*l-e*f*l-r*n*d+e*a*d)*y,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,f=a+a,d=o*c,u=o*h,m=o*f,_=r*h,g=r*f,p=a*f,x=l*c,M=l*h,v=l*f,T=n.x,w=n.y,y=n.z;return s[0]=(1-(_+p))*T,s[1]=(u+v)*T,s[2]=(m-M)*T,s[3]=0,s[4]=(u-v)*w,s[5]=(1-(d+p))*w,s[6]=(g+x)*w,s[7]=0,s[8]=(m+M)*y,s[9]=(g-x)*y,s[10]=(1-(d+_))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=ns.set(s[0],s[1],s[2]).length();const r=ns.set(s[4],s[5],s[6]).length(),a=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],gn.copy(this);const c=1/o,h=1/r,f=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,e.setFromRotationMatrix(gn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Xn){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let u,m;if(a===Xn)u=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===yr)u=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Xn){const l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(r-o),d=(e+t)*c,u=(n+s)*h;let m,_;if(a===Xn)m=(r+o)*f,_=-2*f;else if(a===yr)m=o*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ns=new N,gn=new re,af=new N(0,0,0),lf=new N(1,1,1),oi=new N,Po=new N,nn=new N,hc=new re,uc=new pn;class Sn{constructor(t=0,e=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ie(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Ie(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uc.setFromEuler(this),this.setFromQuaternion(uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Nl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cf=0;const dc=new N,is=new pn,zn=new re,Lo=new N,$s=new N,hf=new N,uf=new pn,fc=new N(1,0,0),pc=new N(0,1,0),mc=new N(0,0,1),gc={type:"added"},df={type:"removed"},ss={type:"childadded",child:null},Xr={type:"childremoved",child:null};class Ae extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new N,e=new Sn,n=new pn,s=new N(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new te}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(fc,t)}rotateY(t){return this.rotateOnAxis(pc,t)}rotateZ(t){return this.rotateOnAxis(mc,t)}translateOnAxis(t,e){return dc.copy(t).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fc,t)}translateY(t){return this.translateOnAxis(pc,t)}translateZ(t){return this.translateOnAxis(mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lo.copy(t):Lo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt($s,Lo,this.up):zn.lookAt(Lo,$s,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(zn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gc),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(df),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gc),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,hf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,uf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),f=r(t.shapes),d=r(t.skeletons),u=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new N(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new N,Bn=new N,$r=new N,Hn=new N,os=new N,rs=new N,_c=new N,qr=new N,Yr=new N,jr=new N,Zr=new Ee,Kr=new Ee,Jr=new Ee;class hn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){_n.subVectors(s,e),Bn.subVectors(n,e),$r.subVectors(t,e);const r=_n.dot(_n),a=_n.dot(Bn),l=_n.dot($r),c=Bn.dot(Bn),h=Bn.dot($r),f=r*c-a*a;if(f===0)return o.set(0,0,0),null;const d=1/f,u=(c*l-a*h)*d,m=(r*h-a*l)*d;return o.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Hn.x),l.addScaledVector(r,Hn.y),l.addScaledVector(a,Hn.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return Zr.setScalar(0),Kr.setScalar(0),Jr.setScalar(0),Zr.fromBufferAttribute(t,e),Kr.fromBufferAttribute(t,n),Jr.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Zr,o.x),r.addScaledVector(Kr,o.y),r.addScaledVector(Jr,o.z),r}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Bn.subVectors(t,e),_n.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),_n.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;os.subVectors(s,n),rs.subVectors(o,n),qr.subVectors(t,n);const l=os.dot(qr),c=rs.dot(qr);if(l<=0&&c<=0)return e.copy(n);Yr.subVectors(t,s);const h=os.dot(Yr),f=rs.dot(Yr);if(h>=0&&f<=h)return e.copy(s);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(os,r);jr.subVectors(t,o);const u=os.dot(jr),m=rs.dot(jr);if(m>=0&&u<=m)return e.copy(o);const _=u*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(rs,a);const g=h*m-u*f;if(g<=0&&f-h>=0&&u-m>=0)return _c.subVectors(o,s),a=(f-h)/(f-h+(u-m)),e.copy(s).addScaledVector(_c,a);const p=1/(g+_+d);return r=_*p,a=d*p,e.copy(n).addScaledVector(os,r).addScaledVector(rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Do={h:0,s:0,l:0};function Qr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=Ul(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Qr(r,o,t+1/3),this.g=Qr(r,o,t),this.b=Qr(r,o,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=Ce){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return he.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Ie(Ge.r*255,0,255))*65536+Math.round(Ie(Ge.g*255,0,255))*256+Math.round(Ie(Ge.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Ge.copy(this),e);const n=Ge.r,s=Ge.g,o=Ge.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=h<=.5?f/(r+a):f/(2-r-a),r){case n:l=(s-o)/f+(s<o?6:0);break;case s:l=(o-n)/f+2;break;case o:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Ce){he.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,s=Ge.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Do);const n=co(ri.h,Do.h,e),s=co(ri.s,Do.s,e),o=co(ri.l,Do.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new kt;kt.NAMES=mu;let ff=0;class Xi extends Vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Ln(),this.name="",this.blending=As,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Da,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Da&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zn extends Xi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new N,Io=new ot;class Pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ml,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Io.fromBufferAttribute(this,e),Io.applyMatrix3(t),this.setXY(e,Io.x,Io.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),o=_e(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ml&&(t.usage=this.usage),t}}class gu extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _u extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Wt extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pf=0;const ln=new re,ta=new Ae,as=new N,sn=new Wi,qs=new Wi,Oe=new N;class ue extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?_u:gu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new te().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return ta.lookAt(t),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Wt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];sn.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(sn.min,qs.min),sn.expandByPoint(Oe),Oe.addVectors(sn.max,qs.max),sn.expandByPoint(Oe)):(sn.expandByPoint(qs.min),sn.expandByPoint(qs.max))}sn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Oe.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Oe.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(t,c),Oe.add(as)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new N,l[C]=new N;const c=new N,h=new N,f=new N,d=new ot,u=new ot,m=new ot,_=new N,g=new N;function p(C,S,b){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,b),d.fromBufferAttribute(o,C),u.fromBufferAttribute(o,S),m.fromBufferAttribute(o,b),h.sub(c),f.sub(c),u.sub(d),m.sub(d);const L=1/(u.x*m.y-m.x*u.y);isFinite(L)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-u.y).multiplyScalar(L),g.copy(f).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(L),a[C].add(_),a[S].add(_),a[b].add(_),l[C].add(g),l[S].add(g),l[b].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,S=x.length;C<S;++C){const b=x[C],L=b.start,H=b.count;for(let z=L,V=L+H;z<V;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const M=new N,v=new N,T=new N,w=new N;function y(C){T.fromBufferAttribute(s,C),w.copy(T);const S=a[C];M.copy(S),M.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(w,S);const L=v.dot(l[C])<0?-1:1;r.setXYZW(C,M.x,M.y,M.z,L)}for(let C=0,S=x.length;C<S;++C){const b=x[C],L=b.start,H=b.count;for(let z=L,V=L+H;z<V;z+=3)y(t.getX(z+0)),y(t.getX(z+1)),y(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const s=new N,o=new N,r=new N,a=new N,l=new N,c=new N,h=new N,f=new N;if(t)for(let d=0,u=t.count;d<u;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let u=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let p=0;p<h;p++)d[m++]=c[u++]}return new Pe(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ue,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],f=o[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vc=new re,Ei=new Rr,Uo=new Hs,xc=new N,No=new N,Oo=new N,Fo=new N,ea=new N,ko=new N,Mc=new N,zo=new N;class J extends Ae{constructor(t=new ue,e=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){ko.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],f=o[l];h!==0&&(ea.fromBufferAttribute(f,t),r?ko.addScaledVector(ea,h):ko.addScaledVector(ea.sub(e),h))}e.add(ko)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(o),Ei.copy(t.ray).recast(t.near),!(Uo.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Uo,xc)===null||Ei.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(vc.copy(o).invert(),Ei.copy(t.ray).applyMatrix4(vc),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,d=o.groups,u=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=r[g.materialIndex],x=Math.max(g.start,u.start),M=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let v=x,T=M;v<T;v+=3){const w=a.getX(v),y=a.getX(v+1),C=a.getX(v+2);s=Bo(this,p,t,n,c,h,f,w,y,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);s=Bo(this,r,t,n,c,h,f,x,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=r[g.materialIndex],x=Math.max(g.start,u.start),M=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let v=x,T=M;v<T;v+=3){const w=v,y=v+1,C=v+2;s=Bo(this,p,t,n,c,h,f,w,y,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let g=m,p=_;g<p;g+=3){const x=g,M=g+1,v=g+2;s=Bo(this,r,t,n,c,h,f,x,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function mf(i,t,e,n,s,o,r,a){let l;if(t.side===Ze?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===_i,a),l===null)return null;zo.copy(a),zo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(zo);return c<e.near||c>e.far?null:{distance:c,point:zo.clone(),object:i}}function Bo(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,No),i.getVertexPosition(l,Oo),i.getVertexPosition(c,Fo);const h=mf(i,t,e,n,No,Oo,Fo,Mc);if(h){const f=new N;hn.getBarycoord(Mc,No,Oo,Fo,f),s&&(h.uv=hn.getInterpolatedAttribute(s,a,l,c,f,new ot)),o&&(h.uv1=hn.getInterpolatedAttribute(o,a,l,c,f,new ot)),r&&(h.normal=hn.getInterpolatedAttribute(r,a,l,c,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};hn.getNormal(No,Oo,Fo,d.normal),h.face=d,h.barycoord=f}return h}class Vt extends ue{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],f=[];let d=0,u=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,o,4),m("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(f,2));function m(_,g,p,x,M,v,T,w,y,C,S){const b=v/y,L=T/C,H=v/2,z=T/2,V=w/2,k=y+1,F=C+1;let j=0,$=0;const lt=new N;for(let ft=0;ft<F;ft++){const yt=ft*L-z;for(let zt=0;zt<k;zt++){const Ht=zt*b-H;lt[_]=Ht*x,lt[g]=yt*M,lt[p]=V,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[g]=0,lt[p]=w>0?1:-1,h.push(lt.x,lt.y,lt.z),f.push(zt/y),f.push(1-ft/C),j+=1}}for(let ft=0;ft<C;ft++)for(let yt=0;yt<y;yt++){const zt=d+yt+k*ft,Ht=d+yt+k*(ft+1),K=d+(yt+1)+k*(ft+1),st=d+(yt+1)+k*ft;l.push(zt,Ht,st),l.push(Ht,K,st),$+=6}a.addGroup(u,$,S),u+=$,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ks(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){const t={};for(let e=0;e<i.length;e++){const n=ks(i[e]);for(const s in n)t[s]=n[s]}return t}function gf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const xu={clone:ks,merge:je};var _f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Xi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_f,this.fragmentShader=vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mu extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new N,yc=new ot,bc=new ot;class rn extends Mu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,yc,bc),e.subVectors(bc,yc)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ls=-90,cs=1;class xf extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(ls,cs,t,e);s.layers=this.layers,this.add(s);const o=new rn(ls,cs,t,e);o.layers=this.layers,this.add(o);const r=new rn(ls,cs,t,e);r.layers=this.layers,this.add(r);const a=new rn(ls,cs,t,e);a.layers=this.layers,this.add(a);const l=new rn(ls,cs,t,e);l.layers=this.layers,this.add(l);const c=new rn(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class yu extends Xe{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mf extends zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new yu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),o=new Kn({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:mi});o.uniforms.tEquirect.value=e;const r=new J(s,o),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=Rn),new xf(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const na=new N,yf=new N,bf=new te;class ui{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=na.subVectors(n,e).cross(yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bf.getNormalMatrix(t),s=this.coplanarPoint(na).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Hs,Ho=new N;class Ol{constructor(t=new ui,e=new ui,n=new ui,s=new ui,o=new ui,r=new ui){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],u=s[8],m=s[9],_=s[10],g=s[11],p=s[12],x=s[13],M=s[14],v=s[15];if(n[0].setComponents(l-o,d-c,g-u,v-p).normalize(),n[1].setComponents(l+o,d+c,g+u,v+p).normalize(),n[2].setComponents(l+r,d+h,g+m,v+x).normalize(),n[3].setComponents(l-r,d-h,g-m,v-x).normalize(),n[4].setComponents(l-a,d-f,g-_,v-M).normalize(),e===Xn)n[5].setComponents(l+a,d+f,g+_,v+M).normalize();else if(e===yr)n[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ho.x=s.normal.x>0?t.max.x:t.min.x,Ho.y=s.normal.y>0?t.max.y:t.min.y,Ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bu(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function wf(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((u,m)=>u.start-m.start);let d=0;for(let u=1;u<f.length;u++){const m=f[d],_=f[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,f[d]=_)}f.length=d+1;for(let u=0,m=f.length;u<m;u++){const _=f[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class Qn extends ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,d=e/l,u=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const x=p*d-r;for(let M=0;M<c;M++){const v=M*f-o;m.push(v,-x,0),_.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const M=x+c*p,v=x+c*(p+1),T=x+1+c*(p+1),w=x+1+c*p;u.push(M,v,w),u.push(v,T,w)}this.setIndex(u),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ef=`#ifdef USE_ALPHAHASH
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
#endif`,Tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pf=`#ifdef USE_AOMAP
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
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Df=`#ifdef USE_BATCHING
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
#endif`,If=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Of=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ff=`#ifdef USE_IRIDESCENCE
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
#endif`,kf=`#ifdef USE_BUMPMAP
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
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qf=`#define PI 3.141592653589793
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
} // validated`,Yf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ep=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,up=`#ifdef USE_GRADIENTMAP
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
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mp=`uniform bool receiveShadow;
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
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,_p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yp=`PhysicalMaterial material;
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
#endif`,bp=`struct PhysicalMaterial {
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
}`,wp=`
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ip=`#if defined( USE_POINTS_UV )
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
#endif`,Up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`#ifdef USE_MORPHTARGETS
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
#endif`,Bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
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
#endif`,qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lm=`float getShadowMask() {
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
}`,cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_m=`#ifdef USE_TRANSMISSION
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
#endif`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sm=`uniform sampler2D t2D;
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`#include <common>
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
}`,Pm=`#if DEPTH_PACKING == 3200
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
}`,Lm=`#define DISTANCE
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
}`,Dm=`#define DISTANCE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`uniform float scale;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Fm=`#include <common>
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
}`,km=`uniform vec3 diffuse;
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
}`,zm=`#define LAMBERT
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
}`,Bm=`#define LAMBERT
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
}`,Hm=`#define MATCAP
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
}`,Gm=`#define MATCAP
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
}`,Vm=`#define NORMAL
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
}`,Wm=`#define NORMAL
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
}`,Xm=`#define PHONG
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
}`,$m=`#define PHONG
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
}`,qm=`#define STANDARD
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
}`,Ym=`#define STANDARD
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
}`,jm=`#define TOON
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
}`,Zm=`#define TOON
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
}`,Km=`uniform float size;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Qm=`#include <common>
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
}`,t0=`uniform vec3 color;
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
}`,e0=`uniform float rotation;
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
}`,n0=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Sf,alphahash_pars_fragment:Ef,alphamap_fragment:Tf,alphamap_pars_fragment:Af,alphatest_fragment:Rf,alphatest_pars_fragment:Cf,aomap_fragment:Pf,aomap_pars_fragment:Lf,batching_pars_vertex:Df,batching_vertex:If,begin_vertex:Uf,beginnormal_vertex:Nf,bsdfs:Of,iridescence_fragment:Ff,bumpmap_pars_fragment:kf,clipping_planes_fragment:zf,clipping_planes_pars_fragment:Bf,clipping_planes_pars_vertex:Hf,clipping_planes_vertex:Gf,color_fragment:Vf,color_pars_fragment:Wf,color_pars_vertex:Xf,color_vertex:$f,common:qf,cube_uv_reflection_fragment:Yf,defaultnormal_vertex:jf,displacementmap_pars_vertex:Zf,displacementmap_vertex:Kf,emissivemap_fragment:Jf,emissivemap_pars_fragment:Qf,colorspace_fragment:tp,colorspace_pars_fragment:ep,envmap_fragment:np,envmap_common_pars_fragment:ip,envmap_pars_fragment:sp,envmap_pars_vertex:op,envmap_physical_pars_fragment:gp,envmap_vertex:rp,fog_vertex:ap,fog_pars_vertex:lp,fog_fragment:cp,fog_pars_fragment:hp,gradientmap_pars_fragment:up,lightmap_pars_fragment:dp,lights_lambert_fragment:fp,lights_lambert_pars_fragment:pp,lights_pars_begin:mp,lights_toon_fragment:_p,lights_toon_pars_fragment:vp,lights_phong_fragment:xp,lights_phong_pars_fragment:Mp,lights_physical_fragment:yp,lights_physical_pars_fragment:bp,lights_fragment_begin:wp,lights_fragment_maps:Sp,lights_fragment_end:Ep,logdepthbuf_fragment:Tp,logdepthbuf_pars_fragment:Ap,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Cp,map_fragment:Pp,map_pars_fragment:Lp,map_particle_fragment:Dp,map_particle_pars_fragment:Ip,metalnessmap_fragment:Up,metalnessmap_pars_fragment:Np,morphinstance_vertex:Op,morphcolor_vertex:Fp,morphnormal_vertex:kp,morphtarget_pars_vertex:zp,morphtarget_vertex:Bp,normal_fragment_begin:Hp,normal_fragment_maps:Gp,normal_pars_fragment:Vp,normal_pars_vertex:Wp,normal_vertex:Xp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:qp,clearcoat_normal_fragment_maps:Yp,clearcoat_pars_fragment:jp,iridescence_pars_fragment:Zp,opaque_fragment:Kp,packing:Jp,premultiplied_alpha_fragment:Qp,project_vertex:tm,dithering_fragment:em,dithering_pars_fragment:nm,roughnessmap_fragment:im,roughnessmap_pars_fragment:sm,shadowmap_pars_fragment:om,shadowmap_pars_vertex:rm,shadowmap_vertex:am,shadowmask_pars_fragment:lm,skinbase_vertex:cm,skinning_pars_vertex:hm,skinning_vertex:um,skinnormal_vertex:dm,specularmap_fragment:fm,specularmap_pars_fragment:pm,tonemapping_fragment:mm,tonemapping_pars_fragment:gm,transmission_fragment:_m,transmission_pars_fragment:vm,uv_pars_fragment:xm,uv_pars_vertex:Mm,uv_vertex:ym,worldpos_vertex:bm,background_vert:wm,background_frag:Sm,backgroundCube_vert:Em,backgroundCube_frag:Tm,cube_vert:Am,cube_frag:Rm,depth_vert:Cm,depth_frag:Pm,distanceRGBA_vert:Lm,distanceRGBA_frag:Dm,equirect_vert:Im,equirect_frag:Um,linedashed_vert:Nm,linedashed_frag:Om,meshbasic_vert:Fm,meshbasic_frag:km,meshlambert_vert:zm,meshlambert_frag:Bm,meshmatcap_vert:Hm,meshmatcap_frag:Gm,meshnormal_vert:Vm,meshnormal_frag:Wm,meshphong_vert:Xm,meshphong_frag:$m,meshphysical_vert:qm,meshphysical_frag:Ym,meshtoon_vert:jm,meshtoon_frag:Zm,points_vert:Km,points_frag:Jm,shadow_vert:Qm,shadow_frag:t0,sprite_vert:e0,sprite_frag:n0},Mt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},An={basic:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:je([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:je([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:je([Mt.points,Mt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:je([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:je([Mt.common,Mt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:je([Mt.sprite,Mt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:je([Mt.common,Mt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:je([Mt.lights,Mt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};An.physical={uniforms:je([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Go={r:0,b:0,g:0},Ai=new Sn,i0=new re;function s0(i,t,e,n,s,o,r){const a=new kt(0);let l=o===!0?0:1,c,h,f=null,d=0,u=null;function m(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function _(x){let M=!1;const v=m(x);v===null?p(a,l):v&&v.isColor&&(p(v,1),M=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,M){const v=m(M);v&&(v.isCubeTexture||v.mapping===Tr)?(h===void 0&&(h=new J(new Vt(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:ks(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ai.copy(M.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(i0.makeRotationFromEuler(Ai)),h.material.toneMapped=he.getTransfer(v.colorSpace)!==ve,(f!==v||d!==v.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,d=v.version,u=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new J(new Qn(2,2),new Kn({name:"BackgroundMaterial",uniforms:ks(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=he.getTransfer(v.colorSpace)!==ve,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,M){x.getRGB(Go,vu(i)),n.buffers.color.setClear(Go.r,Go.g,Go.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:g}}function o0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(b,L,H,z,V){let k=!1;const F=f(z,H,L);o!==F&&(o=F,c(o.object)),k=u(b,z,H,V),k&&m(b,z,H,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(k||r)&&(r=!1,v(b,L,H,z),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function f(b,L,H){const z=H.wireframe===!0;let V=n[b.id];V===void 0&&(V={},n[b.id]=V);let k=V[L.id];k===void 0&&(k={},V[L.id]=k);let F=k[z];return F===void 0&&(F=d(l()),k[z]=F),F}function d(b){const L=[],H=[],z=[];for(let V=0;V<e;V++)L[V]=0,H[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:z,object:b,attributes:{},index:null}}function u(b,L,H,z){const V=o.attributes,k=L.attributes;let F=0;const j=H.getAttributes();for(const $ in j)if(j[$].location>=0){const ft=V[$];let yt=k[$];if(yt===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(yt=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(yt=b.instanceColor)),ft===void 0||ft.attribute!==yt||yt&&ft.data!==yt.data)return!0;F++}return o.attributesNum!==F||o.index!==z}function m(b,L,H,z){const V={},k=L.attributes;let F=0;const j=H.getAttributes();for(const $ in j)if(j[$].location>=0){let ft=k[$];ft===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(ft=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(ft=b.instanceColor));const yt={};yt.attribute=ft,ft&&ft.data&&(yt.data=ft.data),V[$]=yt,F++}o.attributes=V,o.attributesNum=F,o.index=z}function _(){const b=o.newAttributes;for(let L=0,H=b.length;L<H;L++)b[L]=0}function g(b){p(b,0)}function p(b,L){const H=o.newAttributes,z=o.enabledAttributes,V=o.attributeDivisors;H[b]=1,z[b]===0&&(i.enableVertexAttribArray(b),z[b]=1),V[b]!==L&&(i.vertexAttribDivisor(b,L),V[b]=L)}function x(){const b=o.newAttributes,L=o.enabledAttributes;for(let H=0,z=L.length;H<z;H++)L[H]!==b[H]&&(i.disableVertexAttribArray(H),L[H]=0)}function M(b,L,H,z,V,k,F){F===!0?i.vertexAttribIPointer(b,L,H,V,k):i.vertexAttribPointer(b,L,H,z,V,k)}function v(b,L,H,z){_();const V=z.attributes,k=H.getAttributes(),F=L.defaultAttributeValues;for(const j in k){const $=k[j];if($.location>=0){let lt=V[j];if(lt===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor)),lt!==void 0){const ft=lt.normalized,yt=lt.itemSize,zt=t.get(lt);if(zt===void 0)continue;const Ht=zt.buffer,K=zt.type,st=zt.bytesPerElement,At=K===i.INT||K===i.UNSIGNED_INT||lt.gpuType===Al;if(lt.isInterleavedBufferAttribute){const rt=lt.data,Tt=rt.stride,Pt=lt.offset;if(rt.isInstancedInterleavedBuffer){for(let St=0;St<$.locationSize;St++)p($.location+St,rt.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let St=0;St<$.locationSize;St++)g($.location+St);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let St=0;St<$.locationSize;St++)M($.location+St,yt/$.locationSize,K,ft,Tt*st,(Pt+yt/$.locationSize*St)*st,At)}else{if(lt.isInstancedBufferAttribute){for(let rt=0;rt<$.locationSize;rt++)p($.location+rt,lt.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let rt=0;rt<$.locationSize;rt++)g($.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let rt=0;rt<$.locationSize;rt++)M($.location+rt,yt/$.locationSize,K,ft,yt*st,yt/$.locationSize*rt*st,At)}}else if(F!==void 0){const ft=F[j];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv($.location,ft);break;case 3:i.vertexAttrib3fv($.location,ft);break;case 4:i.vertexAttrib4fv($.location,ft);break;default:i.vertexAttrib1fv($.location,ft)}}}}x()}function T(){C();for(const b in n){const L=n[b];for(const H in L){const z=L[H];for(const V in z)h(z[V].object),delete z[V];delete L[H]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const H in L){const z=L[H];for(const V in z)h(z[V].object),delete z[V];delete L[H]}delete n[b.id]}function y(b){for(const L in n){const H=n[L];if(H[b.id]===void 0)continue;const z=H[b.id];for(const V in z)h(z[V].object),delete z[V];delete H[b.id]}}function C(){S(),r=!0,o!==s&&(o=s,c(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function r0(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let u=0;for(let m=0;m<f;m++)u+=h[m];e.update(u,n,1)}function l(c,h,f,d){if(f===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<c.length;m++)r(c[m],h[m],d[m]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function a0(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(y){return!(y!==bn&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const C=y===yo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==jn&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==Cn&&!C)}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function l0(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new ui,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||o&&!g)o?h(null):c();else{const x=o?0:n,M=x*4;let v=p.clippingState||null;l.value=v,v=h(m,d,M,u);for(let T=0;T!==M;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=u+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=u;M!==_;++M,v+=4)r.copy(f[M]).applyMatrix4(x,a),r.normal.toArray(g,v),g[v+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function c0(i){let t=new WeakMap;function e(r,a){return a===Ba?r.mapping=Ls:a===Ha&&(r.mapping=Ds),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ba||a===Ha)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Mf(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class wu extends Mu{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ws=4,wc=[.125,.215,.35,.446,.526,.582],Ii=20,ia=new wu,Sc=new kt;let sa=null,oa=0,ra=0,aa=!1;const Pi=(1+Math.sqrt(5))/2,hs=1/Pi,Ec=[new N(-Pi,hs,0),new N(Pi,hs,0),new N(-hs,0,Pi),new N(hs,0,Pi),new N(0,Pi,-hs),new N(0,Pi,hs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class gl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){sa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sa,oa,ra),this._renderer.xr.enabled=aa,t.scissorTest=!1,Vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:yo,format:bn,colorSpace:Bs,depthBuffer:!1},s=Tc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tc(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h0(o)),this._blurMaterial=u0(o,t,e)}return s}_compileMaterial(t){const e=new J(this._lodPlanes[0],t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,s){const a=new rn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Sc),h.toneMapping=gi,h.autoClear=!1;const u=new Zn({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),m=new J(new Vt,u);let _=!1;const g=t.background;g?g.isColor&&(u.color.copy(g),t.background=null,_=!0):(u.color.copy(Sc),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;Vo(s,x*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ls||t.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ac());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new J(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Vo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,ia)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Ec[(s-o-1)%Ec.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new J(this._lodPlanes[s],c),d=c.uniforms,u=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*u):2*Math.PI/(2*Ii-1),_=o/m,g=isFinite(o)?1+Math.floor(h*_):Ii;g>Ii&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ii}`);const p=[];let x=0;for(let y=0;y<Ii;++y){const C=y/_,S=Math.exp(-C*C/2);p.push(S),y===0?x+=S:y<g&&(x+=2*S)}for(let y=0;y<p.length;y++)p[y]=p[y]/x;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;const v=this._sizeLods[s],T=3*v*(s>M-ws?s-M+ws:0),w=4*(this._cubeSize-v);Vo(e,T,w,3*v,2*v),l.setRenderTarget(e),l.render(f,ia)}}function h0(i){const t=[],e=[],n=[];let s=i;const o=i-ws+1+wc.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-ws?l=wc[r-i+ws-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*u),M=new Float32Array(g*m*u),v=new Float32Array(p*m*u);for(let w=0;w<u;w++){const y=w%3*2/3-1,C=w>2?0:-1,S=[y,C,0,y+2/3,C,0,y+2/3,C+1,0,y,C,0,y+2/3,C+1,0,y,C+1,0];x.set(S,_*m*w),M.set(d,g*m*w);const b=[w,w,w,w,w,w];v.set(b,p*m*w)}const T=new ue;T.setAttribute("position",new Pe(x,_)),T.setAttribute("uv",new Pe(M,g)),T.setAttribute("faceIndex",new Pe(v,p)),t.push(T),s>ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Tc(i,t,e){const n=new zi(i,t,e);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function u0(i,t,e){const n=new Float32Array(Ii),s=new N(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Ac(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Rc(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Fl(){return`

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
	`}function d0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ba||l===Ha,h=l===Ls||l===Ds;if(c||h){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new gl(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new gl(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function f0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&oo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function p0(i,t,e,n){const s={},o=new WeakMap;function r(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",r),delete s[d.id];const u=o.get(d);u&&(t.remove(u),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const u=f.morphAttributes;for(const m in u){const _=u[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],i.ARRAY_BUFFER)}}function c(f){const d=[],u=f.index,m=f.attributes.position;let _=0;if(u!==null){const x=u.array;_=u.version;for(let M=0,v=x.length;M<v;M+=3){const T=x[M+0],w=x[M+1],y=x[M+2];d.push(T,w,w,y,y,T)}}else if(m!==void 0){const x=m.array;_=m.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const T=M+0,w=M+1,y=M+2;d.push(T,w,w,y,y,T)}}else return;const g=new(du(d)?_u:gu)(d,1);g.version=_;const p=o.get(f);p&&t.remove(p),o.set(f,g)}function h(f){const d=o.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function m0(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,u){i.drawElements(n,u,o,d*r),e.update(u,n,1)}function c(d,u,m){m!==0&&(i.drawElementsInstanced(n,u,o,d*r,m),e.update(u,n,m))}function h(d,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,o,d,0,m);let g=0;for(let p=0;p<m;p++)g+=u[p];e.update(g,n,1)}function f(d,u,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/r,u[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,u,0,o,d,0,_,0,m);let p=0;for(let x=0;x<m;x++)p+=u[x]*_[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function g0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _0(i,t,e){const n=new WeakMap,s=new Ee;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var u=b;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let T=a.attributes.position.count*v,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const y=new Float32Array(T*w*4*f),C=new pu(y,T,w,f);C.type=Cn,C.needsUpdate=!0;const S=v*4;for(let L=0;L<f;L++){const H=p[L],z=x[L],V=M[L],k=T*w*4*L;for(let F=0;F<H.count;F++){const j=F*S;m===!0&&(s.fromBufferAttribute(H,F),y[k+j+0]=s.x,y[k+j+1]=s.y,y[k+j+2]=s.z,y[k+j+3]=0),_===!0&&(s.fromBufferAttribute(z,F),y[k+j+4]=s.x,y[k+j+5]=s.y,y[k+j+6]=s.z,y[k+j+7]=0),g===!0&&(s.fromBufferAttribute(V,F),y[k+j+8]=s.x,y[k+j+9]=s.y,y[k+j+10]=s.z,y[k+j+11]=V.itemSize===4?s.w:1)}}d={count:f,texture:C,size:new ot(T,w)},n.set(a,d),a.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function v0(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class Su extends Xe{constructor(t,e,n,s,o,r,a,l,c,h=Rs){if(h!==Rs&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rs&&(n=ki),n===void 0&&h===Ns&&(n=Us),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Eu=new Xe,Cc=new Su(1,1),Tu=new pu,Au=new of,Ru=new yu,Pc=[],Lc=[],Dc=new Float32Array(16),Ic=new Float32Array(9),Uc=new Float32Array(4);function Gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Pc[s];if(o===void 0&&(o=new Float32Array(s),Pc[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cr(i,t){let e=Lc[t];e===void 0&&(e=new Int32Array(t),Lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function x0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function M0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function w0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Uc.set(n),i.uniformMatrix2fv(this.addr,!1,Uc),Ne(e,n)}}function S0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Ic.set(n),i.uniformMatrix3fv(this.addr,!1,Ic),Ne(e,n)}}function E0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Dc.set(n),i.uniformMatrix4fv(this.addr,!1,Dc),Ne(e,n)}}function T0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function A0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function P0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function U0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Cc.compareFunction=uu,o=Cc):o=Eu,e.setTexture2D(t||o,s)}function N0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Au,s)}function O0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ru,s)}function F0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Tu,s)}function k0(i){switch(i){case 5126:return x0;case 35664:return M0;case 35665:return y0;case 35666:return b0;case 35674:return w0;case 35675:return S0;case 35676:return E0;case 5124:case 35670:return T0;case 35667:case 35671:return A0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return P0;case 36294:return L0;case 36295:return D0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return F0}}function z0(i,t){i.uniform1fv(this.addr,t)}function B0(i,t){const e=Gs(t,this.size,2);i.uniform2fv(this.addr,e)}function H0(i,t){const e=Gs(t,this.size,3);i.uniform3fv(this.addr,e)}function G0(i,t){const e=Gs(t,this.size,4);i.uniform4fv(this.addr,e)}function V0(i,t){const e=Gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function W0(i,t){const e=Gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function X0(i,t){const e=Gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $0(i,t){i.uniform1iv(this.addr,t)}function q0(i,t){i.uniform2iv(this.addr,t)}function Y0(i,t){i.uniform3iv(this.addr,t)}function j0(i,t){i.uniform4iv(this.addr,t)}function Z0(i,t){i.uniform1uiv(this.addr,t)}function K0(i,t){i.uniform2uiv(this.addr,t)}function J0(i,t){i.uniform3uiv(this.addr,t)}function Q0(i,t){i.uniform4uiv(this.addr,t)}function tg(i,t,e){const n=this.cache,s=t.length,o=Cr(e,s);Ue(n,o)||(i.uniform1iv(this.addr,o),Ne(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Eu,o[r])}function eg(i,t,e){const n=this.cache,s=t.length,o=Cr(e,s);Ue(n,o)||(i.uniform1iv(this.addr,o),Ne(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Au,o[r])}function ng(i,t,e){const n=this.cache,s=t.length,o=Cr(e,s);Ue(n,o)||(i.uniform1iv(this.addr,o),Ne(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Ru,o[r])}function ig(i,t,e){const n=this.cache,s=t.length,o=Cr(e,s);Ue(n,o)||(i.uniform1iv(this.addr,o),Ne(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Tu,o[r])}function sg(i){switch(i){case 5126:return z0;case 35664:return B0;case 35665:return H0;case 35666:return G0;case 35674:return V0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return $0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return j0;case 5125:return Z0;case 36294:return K0;case 36295:return J0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}class og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=k0(e.type)}}class rg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sg(e.type)}}class ag{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function Nc(i,t){i.seq.push(t),i.map[t.id]=t}function lg(i,t,e){const n=i.name,s=n.length;for(la.lastIndex=0;;){const o=la.exec(n),r=la.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Nc(e,c===void 0?new og(a,i,t):new rg(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new ag(a),Nc(e,f)),e=f}}}class _r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);lg(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Oc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const cg=37297;let hg=0;function ug(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Fc=new te;function dg(i){he._getMatrix(Fc,he.workingColorSpace,i);const t=`mat3( ${Fc.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Ar:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+ug(i.getShaderSource(t),r)}else return s}function fg(i,t){const e=dg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function pg(i,t){let e;switch(t){case _d:e="Linear";break;case vd:e="Reinhard";break;case xd:e="Cineon";break;case Qh:e="ACESFilmic";break;case yd:e="AgX";break;case bd:e="Neutral";break;case Md:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Wo=new N;function mg(){he.getLuminanceCoefficients(Wo);const i=Wo.x.toFixed(4),t=Wo.y.toFixed(4),e=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function _g(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function ro(i){return i!==""}function zc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(xg,yg)}const Mg=new Map;function yg(i,t){let e=ne[t];if(e===void 0){const n=Mg.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _l(e)}const bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(i){return i.replace(bg,wg)}function wg(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Gc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Sg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Eg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ls:case Ds:t="ENVMAP_TYPE_CUBE";break;case Tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ds:t="ENVMAP_MODE_REFRACTION";break}return t}function Ag(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jh:t="ENVMAP_BLENDING_MULTIPLY";break;case md:t="ENVMAP_BLENDING_MIX";break;case gd:t="ENVMAP_BLENDING_ADD";break}return t}function Rg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Cg(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Sg(e),c=Eg(e),h=Tg(e),f=Ag(e),d=Rg(e),u=gg(e),m=_g(o),_=s.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ro).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ro).join(`
`),p.length>0&&(p+=`
`)):(g=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),p=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?ne.tonemapping_pars_fragment:"",e.toneMapping!==gi?pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,fg("linearToOutputTexel",e.outputColorSpace),mg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),r=_l(r),r=zc(r,e),r=Bc(r,e),a=_l(a),a=zc(a,e),a=Bc(a,e),r=Hc(r),a=Hc(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+g+r,v=x+p+a,T=Oc(s,s.VERTEX_SHADER,M),w=Oc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function y(L){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(T).trim(),V=s.getShaderInfoLog(w).trim();let k=!0,F=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,w);else{const j=kc(s,T,"vertex"),$=kc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+j+`
`+$)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||V==="")&&(F=!1);F&&(L.diagnostics={runnable:k,programLog:H,vertexShader:{log:z,prefix:g},fragmentShader:{log:V,prefix:p}})}s.deleteShader(T),s.deleteShader(w),C=new _r(s,_),S=vg(s,_)}let C;this.getUniforms=function(){return C===void 0&&y(this),C};let S;this.getAttributes=function(){return S===void 0&&y(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,cg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let Pg=0;class Lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dg(t),e.set(t,n)),n}}class Dg{constructor(t){this.id=Pg++,this.code=t,this.usedTimes=0}}function Ig(i,t,e,n,s,o,r){const a=new Nl,l=new Lg,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let u=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,L,H,z){const V=H.fog,k=z.geometry,F=S.isMeshStandardMaterial?H.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||F),$=j&&j.mapping===Tr?j.image.height:null,lt=m[S.type];S.precision!==null&&(u=s.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const ft=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,yt=ft!==void 0?ft.length:0;let zt=0;k.morphAttributes.position!==void 0&&(zt=1),k.morphAttributes.normal!==void 0&&(zt=2),k.morphAttributes.color!==void 0&&(zt=3);let Ht,K,st,At;if(lt){const Ut=An[lt];Ht=Ut.vertexShader,K=Ut.fragmentShader}else Ht=S.vertexShader,K=S.fragmentShader,l.update(S),st=l.getVertexShaderID(S),At=l.getFragmentShaderID(S);const rt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Pt=z.isInstancedMesh===!0,St=z.isBatchedMesh===!0,Yt=!!S.map,nt=!!S.matcap,ht=!!j,U=!!S.aoMap,Ot=!!S.lightMap,at=!!S.bumpMap,Lt=!!S.normalMap,mt=!!S.displacementMap,Xt=!!S.emissiveMap,Rt=!!S.metalnessMap,P=!!S.roughnessMap,E=S.anisotropy>0,X=S.clearcoat>0,q=S.dispersion>0,it=S.iridescence>0,Q=S.sheen>0,Ct=S.transmission>0,gt=E&&!!S.anisotropyMap,pt=X&&!!S.clearcoatMap,se=X&&!!S.clearcoatNormalMap,W=X&&!!S.clearcoatRoughnessMap,dt=it&&!!S.iridescenceMap,$t=it&&!!S.iridescenceThicknessMap,qt=Q&&!!S.sheenColorMap,It=Q&&!!S.sheenRoughnessMap,Kt=!!S.specularMap,Jt=!!S.specularColorMap,pe=!!S.specularIntensityMap,B=Ct&&!!S.transmissionMap,xt=Ct&&!!S.thicknessMap,Z=!!S.gradientMap,tt=!!S.alphaMap,bt=S.alphaTest>0,wt=!!S.alphaHash,Zt=!!S.extensions;let me=gi;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(me=i.toneMapping);const ce={shaderID:lt,shaderType:S.type,shaderName:S.name,vertexShader:Ht,fragmentShader:K,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:At,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:St,batchingColor:St&&z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&z.instanceColor!==null,instancingMorph:Pt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Bs,alphaToCoverage:!!S.alphaToCoverage,map:Yt,matcap:nt,envMap:ht,envMapMode:ht&&j.mapping,envMapCubeUVHeight:$,aoMap:U,lightMap:Ot,bumpMap:at,normalMap:Lt,displacementMap:d&&mt,emissiveMap:Xt,normalMapObjectSpace:Lt&&S.normalMapType===Td,normalMapTangentSpace:Lt&&S.normalMapType===hu,metalnessMap:Rt,roughnessMap:P,anisotropy:E,anisotropyMap:gt,clearcoat:X,clearcoatMap:pt,clearcoatNormalMap:se,clearcoatRoughnessMap:W,dispersion:q,iridescence:it,iridescenceMap:dt,iridescenceThicknessMap:$t,sheen:Q,sheenColorMap:qt,sheenRoughnessMap:It,specularMap:Kt,specularColorMap:Jt,specularIntensityMap:pe,transmission:Ct,transmissionMap:B,thicknessMap:xt,gradientMap:Z,opaque:S.transparent===!1&&S.blending===As&&S.alphaToCoverage===!1,alphaMap:tt,alphaTest:bt,alphaHash:wt,combine:S.combine,mapUv:Yt&&_(S.map.channel),aoMapUv:U&&_(S.aoMap.channel),lightMapUv:Ot&&_(S.lightMap.channel),bumpMapUv:at&&_(S.bumpMap.channel),normalMapUv:Lt&&_(S.normalMap.channel),displacementMapUv:mt&&_(S.displacementMap.channel),emissiveMapUv:Xt&&_(S.emissiveMap.channel),metalnessMapUv:Rt&&_(S.metalnessMap.channel),roughnessMapUv:P&&_(S.roughnessMap.channel),anisotropyMapUv:gt&&_(S.anisotropyMap.channel),clearcoatMapUv:pt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:It&&_(S.sheenRoughnessMap.channel),specularMapUv:Kt&&_(S.specularMap.channel),specularColorMapUv:Jt&&_(S.specularColorMap.channel),specularIntensityMapUv:pe&&_(S.specularIntensityMap.channel),transmissionMapUv:B&&_(S.transmissionMap.channel),thicknessMapUv:xt&&_(S.thicknessMap.channel),alphaMapUv:tt&&_(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Lt||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(Yt||tt),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Tt,skinning:z.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:zt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:Yt&&S.map.isVideoTexture===!0&&he.getTransfer(S.map.colorSpace)===ve,decodeVideoTextureEmissive:Xt&&S.emissiveMap.isVideoTexture===!0&&he.getTransfer(S.emissiveMap.colorSpace)===ve,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Te,flipSided:S.side===Ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Zt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&S.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)b.push(L),b.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(x(b,S),M(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function M(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const b=m[S.type];let L;if(b){const H=An[b];L=xu.clone(H.uniforms)}else L=S.uniforms;return L}function T(S,b){let L;for(let H=0,z=h.length;H<z;H++){const V=h[H];if(V.cacheKey===b){L=V,++L.usedTimes;break}}return L===void 0&&(L=new Cg(i,b,S,o),h.push(L)),L}function w(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function y(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:y,programs:h,dispose:C}}function Ug(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Ng(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wc(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(f,d,u,m,_,g){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:m,renderOrder:f.renderOrder,z:_,group:g},i[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=_,p.group=g),t++,p}function a(f,d,u,m,_,g){const p=r(f,d,u,m,_,g);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):e.push(p)}function l(f,d,u,m,_,g){const p=r(f,d,u,m,_,g);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||Ng),n.length>1&&n.sort(d||Vc),s.length>1&&s.sort(d||Vc)}function h(){for(let f=t,d=i.length;f<d;f++){const u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function Og(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Wc,i.set(n,[r])):s>=o.length?(r=new Wc,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Fg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new kt};break;case"SpotLight":e={position:new N,direction:new N,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function kg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let zg=0;function Bg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Hg(i){const t=new Fg,e=kg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,o=new re,r=new re;function a(c){let h=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let u=0,m=0,_=0,g=0,p=0,x=0,M=0,v=0,T=0,w=0,y=0;c.sort(Bg);for(let S=0,b=c.length;S<b;S++){const L=c[S],H=L.color,z=L.intensity,V=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*z,f+=H.g*z,d+=H.b*z;else if(L.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(L.sh.coefficients[F],z);y++}else if(L.isDirectionalLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,$=e.get(L);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,n.directionalShadow[u]=$,n.directionalShadowMap[u]=k,n.directionalShadowMatrix[u]=L.shadow.matrix,x++}n.directional[u]=F,u++}else if(L.isSpotLight){const F=t.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(H).multiplyScalar(z),F.distance=V,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,n.spot[_]=F;const j=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,j.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=j.matrix,L.castShadow){const $=e.get(L);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=k,v++}_++}else if(L.isRectAreaLight){const F=t.get(L);F.color.copy(H).multiplyScalar(z),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=F,g++}else if(L.isPointLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),F.distance=L.distance,F.decay=L.decay,L.castShadow){const j=L.shadow,$=e.get(L);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,$.shadowCameraNear=j.camera.near,$.shadowCameraFar=j.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=L.shadow.matrix,M++}n.point[m]=F,m++}else if(L.isHemisphereLight){const F=t.get(L);F.skyColor.copy(L.color).multiplyScalar(z),F.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[p]=F,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==u||C.pointLength!==m||C.spotLength!==_||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==T||C.numLightProbes!==y)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=y,C.directionalLength=u,C.pointLength=m,C.spotLength=_,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=T,C.numLightProbes=y,n.version=zg++)}function l(c,h){let f=0,d=0,u=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(M.isSpotLight){const v=n.spot[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(M.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),r.identity(),o.copy(M.matrixWorld),o.premultiply(g),r.extractRotation(o),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),m++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Xc(i){const t=new Hg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function Gg(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Xc(i),t.set(s,[a])):o>=r.length?(a=new Xc(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Vg extends Xi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wg extends Xi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
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
}`;function qg(i,t,e){let n=new Ol;const s=new ot,o=new ot,r=new Ee,a=new Vg({depthPacking:Ed}),l=new Wg,c={},h=e.maxTextureSize,f={[_i]:Ze,[Ze]:_i,[Te]:Te},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Xg,fragmentShader:$g}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const m=new ue;m.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new J(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let p=this.type;this.render=function(w,y,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),H=i.state;H.setBlending(mi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=p!==Vn&&this.type===Vn,V=p===Vn&&this.type!==Vn;for(let k=0,F=w.length;k<F;k++){const j=w[k],$=j.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const lt=$.getFrameExtents();if(s.multiply(lt),o.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/lt.x),s.x=o.x*lt.x,$.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/lt.y),s.y=o.y*lt.y,$.mapSize.y=o.y)),$.map===null||z===!0||V===!0){const yt=this.type!==Vn?{minFilter:an,magFilter:an}:{};$.map!==null&&$.map.dispose(),$.map=new zi(s.x,s.y,yt),$.map.texture.name=j.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const ft=$.getViewportCount();for(let yt=0;yt<ft;yt++){const zt=$.getViewport(yt);r.set(o.x*zt.x,o.y*zt.y,o.x*zt.z,o.y*zt.w),H.viewport(r),$.updateMatrices(j,yt),n=$.getFrustum(),v(y,C,$.camera,j,this.type)}$.isPointLightShadow!==!0&&this.type===Vn&&x($,C),$.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,b,L)};function x(w,y){const C=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(y,null,C,d,_,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(y,null,C,u,_,null)}function M(w,y,C,S){let b=null;const L=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)b=L;else if(b=C.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const H=b.uuid,z=y.uuid;let V=c[H];V===void 0&&(V={},c[H]=V);let k=V[z];k===void 0&&(k=b.clone(),V[z]=k,y.addEventListener("dispose",T)),b=k}if(b.visible=y.visible,b.wireframe=y.wireframe,S===Vn?b.side=y.shadowSide!==null?y.shadowSide:y.side:b.side=y.shadowSide!==null?y.shadowSide:f[y.side],b.alphaMap=y.alphaMap,b.alphaTest=y.alphaTest,b.map=y.map,b.clipShadows=y.clipShadows,b.clippingPlanes=y.clippingPlanes,b.clipIntersection=y.clipIntersection,b.displacementMap=y.displacementMap,b.displacementScale=y.displacementScale,b.displacementBias=y.displacementBias,b.wireframeLinewidth=y.wireframeLinewidth,b.linewidth=y.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const H=i.properties.get(b);H.light=C}return b}function v(w,y,C,S,b){if(w.visible===!1)return;if(w.layers.test(y.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Vn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const z=t.update(w),V=w.material;if(Array.isArray(V)){const k=z.groups;for(let F=0,j=k.length;F<j;F++){const $=k[F],lt=V[$.materialIndex];if(lt&&lt.visible){const ft=M(w,lt,S,b);w.onBeforeShadow(i,w,y,C,z,ft,$),i.renderBufferDirect(C,null,z,ft,w,$),w.onAfterShadow(i,w,y,C,z,ft,$)}}}else if(V.visible){const k=M(w,V,S,b);w.onBeforeShadow(i,w,y,C,z,k,null),i.renderBufferDirect(C,null,z,k,w,null),w.onAfterShadow(i,w,y,C,z,k,null)}}const H=w.children;for(let z=0,V=H.length;z<V;z++)v(H[z],y,C,S,b)}function T(w){w.target.removeEventListener("dispose",T);for(const C in c){const S=c[C],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const Yg={[Ia]:Ua,[Na]:ka,[Oa]:za,[Ps]:Fa,[Ua]:Ia,[ka]:Na,[za]:Oa,[Fa]:Ps};function jg(i,t){function e(){let B=!1;const xt=new Ee;let Z=null;const tt=new Ee(0,0,0,0);return{setMask:function(bt){Z!==bt&&!B&&(i.colorMask(bt,bt,bt,bt),Z=bt)},setLocked:function(bt){B=bt},setClear:function(bt,wt,Zt,me,ce){ce===!0&&(bt*=me,wt*=me,Zt*=me),xt.set(bt,wt,Zt,me),tt.equals(xt)===!1&&(i.clearColor(bt,wt,Zt,me),tt.copy(xt))},reset:function(){B=!1,Z=null,tt.set(-1,0,0,0)}}}function n(){let B=!1,xt=!1,Z=null,tt=null,bt=null;return{setReversed:function(wt){if(xt!==wt){const Zt=t.get("EXT_clip_control");xt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const me=bt;bt=null,this.setClear(me)}xt=wt},getReversed:function(){return xt},setTest:function(wt){wt?rt(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(wt){Z!==wt&&!B&&(i.depthMask(wt),Z=wt)},setFunc:function(wt){if(xt&&(wt=Yg[wt]),tt!==wt){switch(wt){case Ia:i.depthFunc(i.NEVER);break;case Ua:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case Oa:i.depthFunc(i.EQUAL);break;case Fa:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=wt}},setLocked:function(wt){B=wt},setClear:function(wt){bt!==wt&&(xt&&(wt=1-wt),i.clearDepth(wt),bt=wt)},reset:function(){B=!1,Z=null,tt=null,bt=null,xt=!1}}}function s(){let B=!1,xt=null,Z=null,tt=null,bt=null,wt=null,Zt=null,me=null,ce=null;return{setTest:function(Ut){B||(Ut?rt(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(Ut){xt!==Ut&&!B&&(i.stencilMask(Ut),xt=Ut)},setFunc:function(Ut,$e,qe){(Z!==Ut||tt!==$e||bt!==qe)&&(i.stencilFunc(Ut,$e,qe),Z=Ut,tt=$e,bt=qe)},setOp:function(Ut,$e,qe){(wt!==Ut||Zt!==$e||me!==qe)&&(i.stencilOp(Ut,$e,qe),wt=Ut,Zt=$e,me=qe)},setLocked:function(Ut){B=Ut},setClear:function(Ut){ce!==Ut&&(i.clearStencil(Ut),ce=Ut)},reset:function(){B=!1,xt=null,Z=null,tt=null,bt=null,wt=null,Zt=null,me=null,ce=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,u=[],m=null,_=!1,g=null,p=null,x=null,M=null,v=null,T=null,w=null,y=new kt(0,0,0),C=0,S=!1,b=null,L=null,H=null,z=null,V=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,j=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),F=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),F=j>=2);let lt=null,ft={};const yt=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),Ht=new Ee().fromArray(yt),K=new Ee().fromArray(zt);function st(B,xt,Z,tt){const bt=new Uint8Array(4),wt=i.createTexture();i.bindTexture(B,wt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<Z;Zt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(xt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return wt}const At={};At[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),r.setFunc(Ps),at(!1),Lt(Zl),rt(i.CULL_FACE),U(mi);function rt(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Tt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Pt(B,xt){return f[B]!==xt?(i.bindFramebuffer(B,xt),f[B]=xt,B===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=xt),B===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function St(B,xt){let Z=u,tt=!1;if(B){Z=d.get(xt),Z===void 0&&(Z=[],d.set(xt,Z));const bt=B.textures;if(Z.length!==bt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,Zt=bt.length;wt<Zt;wt++)Z[wt]=i.COLOR_ATTACHMENT0+wt;Z.length=bt.length,tt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,tt=!0);tt&&i.drawBuffers(Z)}function Yt(B){return m!==B?(i.useProgram(B),m=B,!0):!1}const nt={[Di]:i.FUNC_ADD,[Ju]:i.FUNC_SUBTRACT,[Qu]:i.FUNC_REVERSE_SUBTRACT};nt[td]=i.MIN,nt[ed]=i.MAX;const ht={[nd]:i.ZERO,[id]:i.ONE,[sd]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[hd]:i.SRC_ALPHA_SATURATE,[ld]:i.DST_COLOR,[rd]:i.DST_ALPHA,[od]:i.ONE_MINUS_SRC_COLOR,[Da]:i.ONE_MINUS_SRC_ALPHA,[cd]:i.ONE_MINUS_DST_COLOR,[ad]:i.ONE_MINUS_DST_ALPHA,[ud]:i.CONSTANT_COLOR,[dd]:i.ONE_MINUS_CONSTANT_COLOR,[fd]:i.CONSTANT_ALPHA,[pd]:i.ONE_MINUS_CONSTANT_ALPHA};function U(B,xt,Z,tt,bt,wt,Zt,me,ce,Ut){if(B===mi){_===!0&&(Tt(i.BLEND),_=!1);return}if(_===!1&&(rt(i.BLEND),_=!0),B!==Ku){if(B!==g||Ut!==S){if((p!==Di||v!==Di)&&(i.blendEquation(i.FUNC_ADD),p=Di,v=Di),Ut)switch(B){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFunc(i.ONE,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ql:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,M=null,T=null,w=null,y.set(0,0,0),C=0,g=B,S=Ut}return}bt=bt||xt,wt=wt||Z,Zt=Zt||tt,(xt!==p||bt!==v)&&(i.blendEquationSeparate(nt[xt],nt[bt]),p=xt,v=bt),(Z!==x||tt!==M||wt!==T||Zt!==w)&&(i.blendFuncSeparate(ht[Z],ht[tt],ht[wt],ht[Zt]),x=Z,M=tt,T=wt,w=Zt),(me.equals(y)===!1||ce!==C)&&(i.blendColor(me.r,me.g,me.b,ce),y.copy(me),C=ce),g=B,S=!1}function Ot(B,xt){B.side===Te?Tt(i.CULL_FACE):rt(i.CULL_FACE);let Z=B.side===Ze;xt&&(Z=!Z),at(Z),B.blending===As&&B.transparent===!1?U(mi):U(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),o.setMask(B.colorWrite);const tt=B.stencilWrite;a.setTest(tt),tt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Xt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(B){b!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),b=B)}function Lt(B){B!==ju?(rt(i.CULL_FACE),B!==L&&(B===Zl?i.cullFace(i.BACK):B===Zu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),L=B}function mt(B){B!==H&&(F&&i.lineWidth(B),H=B)}function Xt(B,xt,Z){B?(rt(i.POLYGON_OFFSET_FILL),(z!==xt||V!==Z)&&(i.polygonOffset(xt,Z),z=xt,V=Z)):Tt(i.POLYGON_OFFSET_FILL)}function Rt(B){B?rt(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function P(B){B===void 0&&(B=i.TEXTURE0+k-1),lt!==B&&(i.activeTexture(B),lt=B)}function E(B,xt,Z){Z===void 0&&(lt===null?Z=i.TEXTURE0+k-1:Z=lt);let tt=ft[Z];tt===void 0&&(tt={type:void 0,texture:void 0},ft[Z]=tt),(tt.type!==B||tt.texture!==xt)&&(lt!==Z&&(i.activeTexture(Z),lt=Z),i.bindTexture(B,xt||At[B]),tt.type=B,tt.texture=xt)}function X(){const B=ft[lt];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $t(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qt(B){Ht.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ht.copy(B))}function It(B){K.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),K.copy(B))}function Kt(B,xt){let Z=c.get(xt);Z===void 0&&(Z=new WeakMap,c.set(xt,Z));let tt=Z.get(B);tt===void 0&&(tt=i.getUniformBlockIndex(xt,B.name),Z.set(B,tt))}function Jt(B,xt){const tt=c.get(xt).get(B);l.get(xt)!==tt&&(i.uniformBlockBinding(xt,tt,B.__bindingPointIndex),l.set(xt,tt))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},lt=null,ft={},f={},d=new WeakMap,u=[],m=null,_=!1,g=null,p=null,x=null,M=null,v=null,T=null,w=null,y=new kt(0,0,0),C=0,S=!1,b=null,L=null,H=null,z=null,V=null,Ht.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:rt,disable:Tt,bindFramebuffer:Pt,drawBuffers:St,useProgram:Yt,setBlending:U,setMaterial:Ot,setFlipSided:at,setCullFace:Lt,setLineWidth:mt,setPolygonOffset:Xt,setScissorTest:Rt,activeTexture:P,bindTexture:E,unbindTexture:X,compressedTexImage2D:q,compressedTexImage3D:it,texImage2D:dt,texImage3D:$t,updateUBOMapping:Kt,uniformBlockBinding:Jt,texStorage2D:se,texStorage3D:W,texSubImage2D:Q,texSubImage3D:Ct,compressedTexSubImage2D:gt,compressedTexSubImage3D:pt,scissor:qt,viewport:It,reset:pe}}function $c(i,t,e,n){const s=Zg(n);switch(e){case su:return i*t;case ru:return i*t;case au:return i*t*2;case Pl:return i*t/s.components*s.byteLength;case Ll:return i*t/s.components*s.byteLength;case lu:return i*t*2/s.components*s.byteLength;case Dl:return i*t*2/s.components*s.byteLength;case ou:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case Il:return i*t*4/s.components*s.byteLength;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:case $a:return Math.max(i,16)*Math.max(t,8)/4;case Va:case Xa:return Math.max(i,8)*Math.max(t,8)/2;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case sl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gr:case hl:case ul:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cu:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fl:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zg(i){switch(i){case jn:case eu:return{byteLength:1,components:1};case po:case nu:case yo:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case ki:case Al:case Cn:return{byteLength:4,components:1};case iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Kg(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap;let f;const d=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,E){return u?new OffscreenCanvas(P,E):br("canvas")}function _(P,E,X){let q=1;const it=Rt(P);if((it.width>X||it.height>X)&&(q=X/Math.max(it.width,it.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(q*it.width),Ct=Math.floor(q*it.height);f===void 0&&(f=m(Q,Ct));const gt=E?m(Q,Ct):f;return gt.width=Q,gt.height=Ct,gt.getContext("2d").drawImage(P,0,0,Q,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Q+"x"+Ct+")."),gt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(P,E,X,q,it=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=E;if(E===i.RED&&(X===i.FLOAT&&(Q=i.R32F),X===i.HALF_FLOAT&&(Q=i.R16F),X===i.UNSIGNED_BYTE&&(Q=i.R8)),E===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.R8UI),X===i.UNSIGNED_SHORT&&(Q=i.R16UI),X===i.UNSIGNED_INT&&(Q=i.R32UI),X===i.BYTE&&(Q=i.R8I),X===i.SHORT&&(Q=i.R16I),X===i.INT&&(Q=i.R32I)),E===i.RG&&(X===i.FLOAT&&(Q=i.RG32F),X===i.HALF_FLOAT&&(Q=i.RG16F),X===i.UNSIGNED_BYTE&&(Q=i.RG8)),E===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RG8UI),X===i.UNSIGNED_SHORT&&(Q=i.RG16UI),X===i.UNSIGNED_INT&&(Q=i.RG32UI),X===i.BYTE&&(Q=i.RG8I),X===i.SHORT&&(Q=i.RG16I),X===i.INT&&(Q=i.RG32I)),E===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),X===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),X===i.UNSIGNED_INT&&(Q=i.RGB32UI),X===i.BYTE&&(Q=i.RGB8I),X===i.SHORT&&(Q=i.RGB16I),X===i.INT&&(Q=i.RGB32I)),E===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),X===i.UNSIGNED_INT&&(Q=i.RGBA32UI),X===i.BYTE&&(Q=i.RGBA8I),X===i.SHORT&&(Q=i.RGBA16I),X===i.INT&&(Q=i.RGBA32I)),E===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),E===i.RGBA){const Ct=it?Ar:he.getTransfer(q);X===i.FLOAT&&(Q=i.RGBA32F),X===i.HALF_FLOAT&&(Q=i.RGBA16F),X===i.UNSIGNED_BYTE&&(Q=Ct===ve?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(P,E){let X;return P?E===null||E===ki||E===Us?X=i.DEPTH24_STENCIL8:E===Cn?X=i.DEPTH32F_STENCIL8:E===po&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ki||E===Us?X=i.DEPTH_COMPONENT24:E===Cn?X=i.DEPTH_COMPONENT32F:E===po&&(X=i.DEPTH_COMPONENT16),X}function T(P,E){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==an&&P.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){const E=P.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&h.delete(E)}function y(P){const E=P.target;E.removeEventListener("dispose",y),b(E)}function C(P){const E=n.get(P);if(E.__webglInit===void 0)return;const X=P.source,q=d.get(X);if(q){const it=q[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(P),Object.keys(q).length===0&&d.delete(X)}n.remove(P)}function S(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const X=P.source,q=d.get(X);delete q[E.__cacheKey],r.memory.textures--}function b(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(E.__webglFramebuffer[q]))for(let it=0;it<E.__webglFramebuffer[q].length;it++)i.deleteFramebuffer(E.__webglFramebuffer[q][it]);else i.deleteFramebuffer(E.__webglFramebuffer[q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[q])}else{if(Array.isArray(E.__webglFramebuffer))for(let q=0;q<E.__webglFramebuffer.length;q++)i.deleteFramebuffer(E.__webglFramebuffer[q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let q=0;q<E.__webglColorRenderbuffer.length;q++)E.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=P.textures;for(let q=0,it=X.length;q<it;q++){const Q=n.get(X[q]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),r.memory.textures--),n.remove(X[q])}n.remove(P)}let L=0;function H(){L=0}function z(){const P=L;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function V(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function k(P,E){const X=n.get(P);if(P.isVideoTexture&&mt(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const q=P.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(X,P,E);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+E)}function F(P,E){const X=n.get(P);if(P.version>0&&X.__version!==P.version){K(X,P,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+E)}function j(P,E){const X=n.get(P);if(P.version>0&&X.__version!==P.version){K(X,P,E);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+E)}function $(P,E){const X=n.get(P);if(P.version>0&&X.__version!==P.version){st(X,P,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+E)}const lt={[Is]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},ft={[an]:i.NEAREST,[wd]:i.NEAREST_MIPMAP_NEAREST,[So]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},yt={[Ad]:i.NEVER,[Id]:i.ALWAYS,[Rd]:i.LESS,[uu]:i.LEQUAL,[Cd]:i.EQUAL,[Dd]:i.GEQUAL,[Pd]:i.GREATER,[Ld]:i.NOTEQUAL};function zt(P,E){if(E.type===Cn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Rn||E.magFilter===Or||E.magFilter===So||E.magFilter===Ni||E.minFilter===Rn||E.minFilter===Or||E.minFilter===So||E.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,lt[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,lt[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,lt[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ft[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ft[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,yt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===an||E.minFilter!==So&&E.minFilter!==Ni||E.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ht(P,E){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));const q=E.source;let it=d.get(q);it===void 0&&(it={},d.set(q,it));const Q=V(E);if(Q!==P.__cacheKey){it[Q]===void 0&&(it[Q]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,X=!0),it[Q].usedTimes++;const Ct=it[P.__cacheKey];Ct!==void 0&&(it[P.__cacheKey].usedTimes--,Ct.usedTimes===0&&S(E)),P.__cacheKey=Q,P.__webglTexture=it[Q].texture}return X}function K(P,E,X){let q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(q=i.TEXTURE_3D);const it=Ht(P,E),Q=E.source;e.bindTexture(q,P.__webglTexture,i.TEXTURE0+X);const Ct=n.get(Q);if(Q.version!==Ct.__version||it===!0){e.activeTexture(i.TEXTURE0+X);const gt=he.getPrimaries(he.workingColorSpace),pt=E.colorSpace===di?null:he.getPrimaries(E.colorSpace),se=E.colorSpace===di||gt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let W=_(E.image,!1,s.maxTextureSize);W=Xt(E,W);const dt=o.convert(E.format,E.colorSpace),$t=o.convert(E.type);let qt=M(E.internalFormat,dt,$t,E.colorSpace,E.isVideoTexture);zt(q,E);let It;const Kt=E.mipmaps,Jt=E.isVideoTexture!==!0,pe=Ct.__version===void 0||it===!0,B=Q.dataReady,xt=T(E,W);if(E.isDepthTexture)qt=v(E.format===Ns,E.type),pe&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,qt,W.width,W.height):e.texImage2D(i.TEXTURE_2D,0,qt,W.width,W.height,0,dt,$t,null));else if(E.isDataTexture)if(Kt.length>0){Jt&&pe&&e.texStorage2D(i.TEXTURE_2D,xt,qt,Kt[0].width,Kt[0].height);for(let Z=0,tt=Kt.length;Z<tt;Z++)It=Kt[Z],Jt?B&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,It.width,It.height,dt,$t,It.data):e.texImage2D(i.TEXTURE_2D,Z,qt,It.width,It.height,0,dt,$t,It.data);E.generateMipmaps=!1}else Jt?(pe&&e.texStorage2D(i.TEXTURE_2D,xt,qt,W.width,W.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,W.width,W.height,dt,$t,W.data)):e.texImage2D(i.TEXTURE_2D,0,qt,W.width,W.height,0,dt,$t,W.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Jt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,qt,Kt[0].width,Kt[0].height,W.depth);for(let Z=0,tt=Kt.length;Z<tt;Z++)if(It=Kt[Z],E.format!==bn)if(dt!==null)if(Jt){if(B)if(E.layerUpdates.size>0){const bt=$c(It.width,It.height,E.format,E.type);for(const wt of E.layerUpdates){const Zt=It.data.subarray(wt*bt/It.data.BYTES_PER_ELEMENT,(wt+1)*bt/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,wt,It.width,It.height,1,dt,Zt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,It.width,It.height,W.depth,dt,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,qt,It.width,It.height,W.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,It.width,It.height,W.depth,dt,$t,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,qt,It.width,It.height,W.depth,0,dt,$t,It.data)}else{Jt&&pe&&e.texStorage2D(i.TEXTURE_2D,xt,qt,Kt[0].width,Kt[0].height);for(let Z=0,tt=Kt.length;Z<tt;Z++)It=Kt[Z],E.format!==bn?dt!==null?Jt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,It.width,It.height,dt,It.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,qt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?B&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,It.width,It.height,dt,$t,It.data):e.texImage2D(i.TEXTURE_2D,Z,qt,It.width,It.height,0,dt,$t,It.data)}else if(E.isDataArrayTexture)if(Jt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,qt,W.width,W.height,W.depth),B)if(E.layerUpdates.size>0){const Z=$c(W.width,W.height,E.format,E.type);for(const tt of E.layerUpdates){const bt=W.data.subarray(tt*Z/W.data.BYTES_PER_ELEMENT,(tt+1)*Z/W.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,W.width,W.height,1,dt,$t,bt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,dt,$t,W.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,W.width,W.height,W.depth,0,dt,$t,W.data);else if(E.isData3DTexture)Jt?(pe&&e.texStorage3D(i.TEXTURE_3D,xt,qt,W.width,W.height,W.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,dt,$t,W.data)):e.texImage3D(i.TEXTURE_3D,0,qt,W.width,W.height,W.depth,0,dt,$t,W.data);else if(E.isFramebufferTexture){if(pe)if(Jt)e.texStorage2D(i.TEXTURE_2D,xt,qt,W.width,W.height);else{let Z=W.width,tt=W.height;for(let bt=0;bt<xt;bt++)e.texImage2D(i.TEXTURE_2D,bt,qt,Z,tt,0,dt,$t,null),Z>>=1,tt>>=1}}else if(Kt.length>0){if(Jt&&pe){const Z=Rt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,xt,qt,Z.width,Z.height)}for(let Z=0,tt=Kt.length;Z<tt;Z++)It=Kt[Z],Jt?B&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,dt,$t,It):e.texImage2D(i.TEXTURE_2D,Z,qt,dt,$t,It);E.generateMipmaps=!1}else if(Jt){if(pe){const Z=Rt(W);e.texStorage2D(i.TEXTURE_2D,xt,qt,Z.width,Z.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,$t,W)}else e.texImage2D(i.TEXTURE_2D,0,qt,dt,$t,W);g(E)&&p(q),Ct.__version=Q.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function st(P,E,X){if(E.image.length!==6)return;const q=Ht(P,E),it=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);const Q=n.get(it);if(it.version!==Q.__version||q===!0){e.activeTexture(i.TEXTURE0+X);const Ct=he.getPrimaries(he.workingColorSpace),gt=E.colorSpace===di?null:he.getPrimaries(E.colorSpace),pt=E.colorSpace===di||Ct===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const se=E.isCompressedTexture||E.image[0].isCompressedTexture,W=E.image[0]&&E.image[0].isDataTexture,dt=[];for(let tt=0;tt<6;tt++)!se&&!W?dt[tt]=_(E.image[tt],!0,s.maxCubemapSize):dt[tt]=W?E.image[tt].image:E.image[tt],dt[tt]=Xt(E,dt[tt]);const $t=dt[0],qt=o.convert(E.format,E.colorSpace),It=o.convert(E.type),Kt=M(E.internalFormat,qt,It,E.colorSpace),Jt=E.isVideoTexture!==!0,pe=Q.__version===void 0||q===!0,B=it.dataReady;let xt=T(E,$t);zt(i.TEXTURE_CUBE_MAP,E);let Z;if(se){Jt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Kt,$t.width,$t.height);for(let tt=0;tt<6;tt++){Z=dt[tt].mipmaps;for(let bt=0;bt<Z.length;bt++){const wt=Z[bt];E.format!==bn?qt!==null?Jt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,0,0,wt.width,wt.height,qt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,Kt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,0,0,wt.width,wt.height,qt,It,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,Kt,wt.width,wt.height,0,qt,It,wt.data)}}}else{if(Z=E.mipmaps,Jt&&pe){Z.length>0&&xt++;const tt=Rt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Kt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(W){Jt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,dt[tt].width,dt[tt].height,qt,It,dt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,dt[tt].width,dt[tt].height,0,qt,It,dt[tt].data);for(let bt=0;bt<Z.length;bt++){const Zt=Z[bt].image[tt].image;Jt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,0,0,Zt.width,Zt.height,qt,It,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,Kt,Zt.width,Zt.height,0,qt,It,Zt.data)}}else{Jt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,qt,It,dt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,qt,It,dt[tt]);for(let bt=0;bt<Z.length;bt++){const wt=Z[bt];Jt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,0,0,qt,It,wt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,Kt,qt,It,wt.image[tt])}}}g(E)&&p(i.TEXTURE_CUBE_MAP),Q.__version=it.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function At(P,E,X,q,it,Q){const Ct=o.convert(X.format,X.colorSpace),gt=o.convert(X.type),pt=M(X.internalFormat,Ct,gt,X.colorSpace),se=n.get(E),W=n.get(X);if(W.__renderTarget=E,!se.__hasExternalTextures){const dt=Math.max(1,E.width>>Q),$t=Math.max(1,E.height>>Q);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,Q,pt,dt,$t,E.depth,0,Ct,gt,null):e.texImage2D(it,Q,pt,dt,$t,0,Ct,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Lt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,it,W.__webglTexture,0,at(E)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,it,W.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(P,E,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const q=E.depthTexture,it=q&&q.isDepthTexture?q.type:null,Q=v(E.stencilBuffer,it),Ct=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=at(E);Lt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,Q,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,Q,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Q,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,P)}else{const q=E.textures;for(let it=0;it<q.length;it++){const Q=q[it],Ct=o.convert(Q.format,Q.colorSpace),gt=o.convert(Q.type),pt=M(Q.internalFormat,Ct,gt,Q.colorSpace),se=at(E);X&&Lt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,pt,E.width,E.height):Lt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,pt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,pt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(E.depthTexture);q.__renderTarget=E,(!q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);const it=q.__webglTexture,Q=at(E);if(E.depthTexture.format===Rs)Lt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(E.depthTexture.format===Ns)Lt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Pt(P){const E=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const q=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),q){const it=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,q.removeEventListener("dispose",it)};q.addEventListener("dispose",it),E.__depthDisposeCallback=it}E.__boundDepthTexture=q}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Tt(E.__webglFramebuffer,P)}else if(X){E.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[q]),E.__webglDepthbuffer[q]===void 0)E.__webglDepthbuffer[q]=i.createRenderbuffer(),rt(E.__webglDepthbuffer[q],P,!1);else{const it=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),rt(E.__webglDepthbuffer,P,!1);else{const q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(P,E,X){const q=n.get(P);E!==void 0&&At(q.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Pt(P)}function Yt(P){const E=P.texture,X=n.get(P),q=n.get(E);P.addEventListener("dispose",y);const it=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Ct=it.length>1;if(Ct||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=E.version,r.memory.textures++),Q){X.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[gt]=[];for(let pt=0;pt<E.mipmaps.length;pt++)X.__webglFramebuffer[gt][pt]=i.createFramebuffer()}else X.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)X.__webglFramebuffer[gt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let gt=0,pt=it.length;gt<pt;gt++){const se=n.get(it[gt]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),r.memory.textures++)}if(P.samples>0&&Lt(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let gt=0;gt<it.length;gt++){const pt=it[gt];X.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[gt]);const se=o.convert(pt.format,pt.colorSpace),W=o.convert(pt.type),dt=M(pt.internalFormat,se,W,pt.colorSpace,P.isXRRenderTarget===!0),$t=at(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,dt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,X.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),zt(i.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)At(X.__webglFramebuffer[gt][pt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pt);else At(X.__webglFramebuffer[gt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);g(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let gt=0,pt=it.length;gt<pt;gt++){const se=it[gt],W=n.get(se);e.bindTexture(i.TEXTURE_2D,W.__webglTexture),zt(i.TEXTURE_2D,se),At(X.__webglFramebuffer,P,se,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),g(se)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(gt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,q.__webglTexture),zt(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)At(X.__webglFramebuffer[pt],P,E,i.COLOR_ATTACHMENT0,gt,pt);else At(X.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,gt,0);g(E)&&p(gt),e.unbindTexture()}P.depthBuffer&&Pt(P)}function nt(P){const E=P.textures;for(let X=0,q=E.length;X<q;X++){const it=E[X];if(g(it)){const Q=x(P),Ct=n.get(it).__webglTexture;e.bindTexture(Q,Ct),p(Q),e.unbindTexture()}}}const ht=[],U=[];function Ot(P){if(P.samples>0){if(Lt(P)===!1){const E=P.textures,X=P.width,q=P.height;let it=i.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(P),gt=E.length>1;if(gt)for(let pt=0;pt<E.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let pt=0;pt<E.length;pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[pt]);const se=n.get(E[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,X,q,0,0,X,q,it,i.NEAREST),l===!0&&(ht.length=0,U.length=0,ht.push(i.COLOR_ATTACHMENT0+pt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ht.push(Q),U.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let pt=0;pt<E.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[pt]);const se=n.get(E[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function at(P){return Math.min(s.maxSamples,P.samples)}function Lt(P){const E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function mt(P){const E=r.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Xt(P,E){const X=P.colorSpace,q=P.format,it=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Bs&&X!==di&&(he.getTransfer(X)===ve?(q!==bn||it!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function Rt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=k,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=$,this.rebindTextures=St,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Lt}function Jg(i,t){function e(n,s=di){let o;const r=he.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===Rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eu)return i.BYTE;if(n===nu)return i.SHORT;if(n===po)return i.UNSIGNED_SHORT;if(n===Al)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===yo)return i.HALF_FLOAT;if(n===su)return i.ALPHA;if(n===ou)return i.RGB;if(n===bn)return i.RGBA;if(n===ru)return i.LUMINANCE;if(n===au)return i.LUMINANCE_ALPHA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===Pl)return i.RED;if(n===Ll)return i.RED_INTEGER;if(n===lu)return i.RG;if(n===Dl)return i.RG_INTEGER;if(n===Il)return i.RGBA_INTEGER;if(n===dr||n===fr||n===pr||n===mr)if(r===ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===dr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===dr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Wa||n===Xa||n===$a)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Va)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===Ya||n===ja)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===qa||n===Ya)return r===ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ja)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Za||n===Ka||n===Ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===ol||n===rl||n===al||n===ll||n===cl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Za)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===el)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nl)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===il)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sl)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rl)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===al)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ll)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cl)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gr||n===hl||n===ul)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===gr)return r===ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ul)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cu||n===dl||n===fl||n===pl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===gr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Qg extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Et extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t_={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,m=.005;c.inputState.pinching&&d>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const e_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n_=`
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

}`;class i_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Xe,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Kn({vertexShader:e_,fragmentShader:n_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new J(new Qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s_ extends Vi{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,m=null;const _=new i_,g=e.getContextAttributes();let p=null,x=null;const M=[],v=[],T=new ot;let w=null;const y=new rn;y.viewport=new Ee;const C=new rn;C.viewport=new Ee;const S=[y,C],b=new Qg;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let st=M[K];return st===void 0&&(st=new ca,M[K]=st),st.getTargetRaySpace()},this.getControllerGrip=function(K){let st=M[K];return st===void 0&&(st=new ca,M[K]=st),st.getGripSpace()},this.getHand=function(K){let st=M[K];return st===void 0&&(st=new ca,M[K]=st),st.getHandSpace()};function z(K){const st=v.indexOf(K.inputSource);if(st===-1)return;const At=M[st];At!==void 0&&(At.update(K.inputSource,K.frame,c||r),At.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",k);for(let K=0;K<M.length;K++){const st=v[K];st!==null&&(v[K]=null,M[K].disconnect(st))}L=null,H=null,_.reset(),t.setRenderTarget(p),u=null,d=null,f=null,s=null,x=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const st={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};u=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new zi(u.framebufferWidth,u.framebufferHeight,{format:bn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let st=null,At=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=g.stencil?Ns:Rs,At=g.stencil?Us:ki);const Tt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:o};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new zi(d.textureWidth,d.textureHeight,{format:bn,type:jn,depthTexture:new Su(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(K){for(let st=0;st<K.removed.length;st++){const At=K.removed[st],rt=v.indexOf(At);rt>=0&&(v[rt]=null,M[rt].disconnect(At))}for(let st=0;st<K.added.length;st++){const At=K.added[st];let rt=v.indexOf(At);if(rt===-1){for(let Pt=0;Pt<M.length;Pt++)if(Pt>=v.length){v.push(At),rt=Pt;break}else if(v[Pt]===null){v[Pt]=At,rt=Pt;break}if(rt===-1)break}const Tt=M[rt];Tt&&Tt.connect(At)}}const F=new N,j=new N;function $(K,st,At){F.setFromMatrixPosition(st.matrixWorld),j.setFromMatrixPosition(At.matrixWorld);const rt=F.distanceTo(j),Tt=st.projectionMatrix.elements,Pt=At.projectionMatrix.elements,St=Tt[14]/(Tt[10]-1),Yt=Tt[14]/(Tt[10]+1),nt=(Tt[9]+1)/Tt[5],ht=(Tt[9]-1)/Tt[5],U=(Tt[8]-1)/Tt[0],Ot=(Pt[8]+1)/Pt[0],at=St*U,Lt=St*Ot,mt=rt/(-U+Ot),Xt=mt*-U;if(st.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Xt),K.translateZ(mt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Tt[10]===-1)K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Rt=St+mt,P=Yt+mt,E=at-Xt,X=Lt+(rt-Xt),q=nt*Yt/P*Rt,it=ht*Yt/P*Rt;K.projectionMatrix.makePerspective(E,X,q,it,Rt,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function lt(K,st){st===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(st.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let st=K.near,At=K.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(At=_.depthFar)),b.near=C.near=y.near=st,b.far=C.far=y.far=At,(L!==b.near||H!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,H=b.far),y.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,b.layers.mask=y.layers.mask|C.layers.mask;const rt=K.parent,Tt=b.cameras;lt(b,rt);for(let Pt=0;Pt<Tt.length;Pt++)lt(Tt[Pt],rt);Tt.length===2?$(b,y,C):b.projectionMatrix.copy(y.projectionMatrix),ft(K,b,rt)};function ft(K,st,At){At===null?K.matrix.copy(st.matrixWorld):(K.matrix.copy(At.matrixWorld),K.matrix.invert(),K.matrix.multiply(st.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Os*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let yt=null;function zt(K,st){if(h=st.getViewerPose(c||r),m=st,h!==null){const At=h.views;u!==null&&(t.setRenderTargetFramebuffer(x,u.framebuffer),t.setRenderTarget(x));let rt=!1;At.length!==b.cameras.length&&(b.cameras.length=0,rt=!0);for(let Pt=0;Pt<At.length;Pt++){const St=At[Pt];let Yt=null;if(u!==null)Yt=u.getViewport(St);else{const ht=f.getViewSubImage(d,St);Yt=ht.viewport,Pt===0&&(t.setRenderTargetTextures(x,ht.colorTexture,d.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(x))}let nt=S[Pt];nt===void 0&&(nt=new rn,nt.layers.enable(Pt),nt.viewport=new Ee,S[Pt]=nt),nt.matrix.fromArray(St.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(St.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Pt===0&&(b.matrix.copy(nt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),rt===!0&&b.cameras.push(nt)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Pt=f.getDepthInformation(At[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let At=0;At<M.length;At++){const rt=v[At],Tt=M[At];rt!==null&&Tt!==void 0&&Tt.update(rt,st,c||r)}yt&&yt(K,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),m=null}const Ht=new bu;Ht.setAnimationLoop(zt),this.setAnimationLoop=function(K){yt=K},this.dispose=function(){}}}const Ri=new Sn,o_=new re;function r_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,vu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),f(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p)):p.isMeshStandardMaterial?(o(g,p),d(g,p),p.isMeshPhysicalMaterial&&u(g,p,v)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),_(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ze&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ze&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,v=x.envMapRotation;M&&(g.envMap.value=M,Ri.copy(v),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler(Ri)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function a_(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function c(x,M){let v=s[x.id];v===void 0&&(m(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",g));const T=M.program;n.updateUBOMapping(x,T);const w=t.render.frame;o[x.id]!==w&&(d(x),o[x.id]=w)}function h(x){const M=f();x.__bindingPointIndex=M;const v=i.createBuffer(),T=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function f(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=s[x.id],v=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,y=v.length;w<y;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,b=C.length;S<b;S++){const L=C[S];if(u(L,w,S,T)===!0){const H=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let k=0;k<z.length;k++){const F=z[k],j=_(F);typeof F=="number"||typeof F=="boolean"?(L.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,H+V,L.__data)):F.isMatrix3?(L.__data[0]=F.elements[0],L.__data[1]=F.elements[1],L.__data[2]=F.elements[2],L.__data[3]=0,L.__data[4]=F.elements[3],L.__data[5]=F.elements[4],L.__data[6]=F.elements[5],L.__data[7]=0,L.__data[8]=F.elements[6],L.__data[9]=F.elements[7],L.__data[10]=F.elements[8],L.__data[11]=0):(F.toArray(L.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,M,v,T){const w=x.value,y=M+"_"+v;if(T[y]===void 0)return typeof w=="number"||typeof w=="boolean"?T[y]=w:T[y]=w.clone(),!0;{const C=T[y];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[y]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function m(x){const M=x.uniforms;let v=0;const T=16;for(let y=0,C=M.length;y<C;y++){const S=Array.isArray(M[y])?M[y]:[M[y]];for(let b=0,L=S.length;b<L;b++){const H=S[b],z=Array.isArray(H.value)?H.value:[H.value];for(let V=0,k=z.length;V<k;V++){const F=z[V],j=_(F),$=v%T,lt=$%j.boundary,ft=$+lt;v+=lt,ft!==0&&T-ft<j.storage&&(v+=T-ft),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=j.storage}}}const w=v%T;return w>0&&(v+=T-w),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function g(x){const M=x.target;M.removeEventListener("dispose",g);const v=r.indexOf(M.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}class l_{constructor(t={}){const{canvas:e=Zd(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=r;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=gi,this.toneMappingExposure=1;const v=this;let T=!1,w=0,y=0,C=null,S=-1,b=null;const L=new Ee,H=new Ee;let z=null;const V=new kt(0);let k=0,F=e.width,j=e.height,$=1,lt=null,ft=null;const yt=new Ee(0,0,F,j),zt=new Ee(0,0,F,j);let Ht=!1;const K=new Ol;let st=!1,At=!1;const rt=new re,Tt=new re,Pt=new N,St=new Ee,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function ht(){return C===null?$:1}let U=n;function Ot(A,G){return e.getContext(A,G)}try{const A={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tl}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),U===null){const G="webgl2";if(U=Ot(G,A),U===null)throw Ot(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let at,Lt,mt,Xt,Rt,P,E,X,q,it,Q,Ct,gt,pt,se,W,dt,$t,qt,It,Kt,Jt,pe,B;function xt(){at=new f0(U),at.init(),Jt=new Jg(U,at),Lt=new a0(U,at,t,Jt),mt=new jg(U,at),Lt.reverseDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),Xt=new g0(U),Rt=new Ug,P=new Kg(U,at,mt,Rt,Lt,Jt,Xt),E=new c0(v),X=new d0(v),q=new wf(U),pe=new o0(U,q),it=new p0(U,q,Xt,pe),Q=new v0(U,it,q,Xt),qt=new _0(U,Lt,P),W=new l0(Rt),Ct=new Ig(v,E,X,at,Lt,pe,W),gt=new r_(v,Rt),pt=new Og,se=new Gg(at),$t=new s0(v,E,X,mt,Q,u,l),dt=new qg(v,Q,Lt),B=new a_(U,Xt,Lt,mt),It=new r0(U,at,Xt),Kt=new m0(U,at,Xt),Xt.programs=Ct.programs,v.capabilities=Lt,v.extensions=at,v.properties=Rt,v.renderLists=pt,v.shadowMap=dt,v.state=mt,v.info=Xt}xt();const Z=new s_(v,U);this.xr=Z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=at.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=at.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(F,j,!1))},this.getSize=function(A){return A.set(F,j)},this.setSize=function(A,G,R=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,j=G,e.width=Math.floor(A*$),e.height=Math.floor(G*$),R===!0&&(e.style.width=A+"px",e.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(F*$,j*$).floor()},this.setDrawingBufferSize=function(A,G,R){F=A,j=G,$=R,e.width=Math.floor(A*R),e.height=Math.floor(G*R),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(yt)},this.setViewport=function(A,G,R,I){A.isVector4?yt.set(A.x,A.y,A.z,A.w):yt.set(A,G,R,I),mt.viewport(L.copy(yt).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(zt)},this.setScissor=function(A,G,R,I){A.isVector4?zt.set(A.x,A.y,A.z,A.w):zt.set(A,G,R,I),mt.scissor(H.copy(zt).multiplyScalar($).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(A){mt.setScissorTest(Ht=A)},this.setOpaqueSort=function(A){lt=A},this.setTransparentSort=function(A){ft=A},this.getClearColor=function(A){return A.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(A=!0,G=!0,R=!0){let I=0;if(A){let D=!1;if(C!==null){const Y=C.texture.format;D=Y===Il||Y===Dl||Y===Ll}if(D){const Y=C.texture.type,et=Y===jn||Y===ki||Y===po||Y===Us||Y===Rl||Y===Cl,ut=$t.getClearColor(),vt=$t.getClearAlpha(),Ft=ut.r,Gt=ut.g,_t=ut.b;et?(m[0]=Ft,m[1]=Gt,m[2]=_t,m[3]=vt,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=Ft,_[1]=Gt,_[2]=_t,_[3]=vt,U.clearBufferiv(U.COLOR,0,_))}else I|=U.COLOR_BUFFER_BIT}G&&(I|=U.DEPTH_BUFFER_BIT),R&&(I|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),pt.dispose(),se.dispose(),Rt.dispose(),E.dispose(),X.dispose(),Q.dispose(),pe.dispose(),B.dispose(),Ct.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",qi),Z.removeEventListener("sessionend",xi),En.stop()};function tt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=Xt.autoReset,G=dt.enabled,R=dt.autoUpdate,I=dt.needsUpdate,D=dt.type;xt(),Xt.autoReset=A,dt.enabled=G,dt.autoUpdate=R,dt.needsUpdate=I,dt.type=D}function wt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Zt(A){const G=A.target;G.removeEventListener("dispose",Zt),me(G)}function me(A){ce(A),Rt.remove(A)}function ce(A){const G=Rt.get(A).programs;G!==void 0&&(G.forEach(function(R){Ct.releaseProgram(R)}),A.isShaderMaterial&&Ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,R,I,D,Y){G===null&&(G=Yt);const et=D.isMesh&&D.matrixWorld.determinant()<0,ut=Ir(A,G,R,I,D);mt.setMaterial(I,et);let vt=R.index,Ft=1;if(I.wireframe===!0){if(vt=it.getWireframeAttribute(R),vt===void 0)return;Ft=2}const Gt=R.drawRange,_t=R.attributes.position;let ie=Gt.start*Ft,de=(Gt.start+Gt.count)*Ft;Y!==null&&(ie=Math.max(ie,Y.start*Ft),de=Math.min(de,(Y.start+Y.count)*Ft)),vt!==null?(ie=Math.max(ie,0),de=Math.min(de,vt.count)):_t!=null&&(ie=Math.max(ie,0),de=Math.min(de,_t.count));const Me=de-ie;if(Me<0||Me===1/0)return;pe.setup(D,I,ut,R,vt);let Fe,fe=It;if(vt!==null&&(Fe=q.get(vt),fe=Kt,fe.setIndex(Fe)),D.isMesh)I.wireframe===!0?(mt.setLineWidth(I.wireframeLinewidth*ht()),fe.setMode(U.LINES)):fe.setMode(U.TRIANGLES);else if(D.isLine){let Nt=I.linewidth;Nt===void 0&&(Nt=1),mt.setLineWidth(Nt*ht()),D.isLineSegments?fe.setMode(U.LINES):D.isLineLoop?fe.setMode(U.LINE_LOOP):fe.setMode(U.LINE_STRIP)}else D.isPoints?fe.setMode(U.POINTS):D.isSprite&&fe.setMode(U.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)fe.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))fe.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Nt=D._multiDrawStarts,Be=D._multiDrawCounts,ae=D._multiDrawCount,tn=vt?q.get(vt).bytesPerElement:1,On=Rt.get(I).currentProgram.getUniforms();for(let ct=0;ct<ae;ct++)On.setValue(U,"_gl_DrawID",ct),fe.render(Nt[ct]/tn,Be[ct])}else if(D.isInstancedMesh)fe.renderInstances(ie,Me,D.count);else if(R.isInstancedBufferGeometry){const Nt=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,Be=Math.min(R.instanceCount,Nt);fe.renderInstances(ie,Me,Be)}else fe.render(ie,Me)};function Ut(A,G,R){A.transparent===!0&&A.side===Te&&A.forceSinglePass===!1?(A.side=Ze,A.needsUpdate=!0,bi(A,G,R),A.side=_i,A.needsUpdate=!0,bi(A,G,R),A.side=Te):bi(A,G,R)}this.compile=function(A,G,R=null){R===null&&(R=A),p=se.get(R),p.init(G),M.push(p),R.traverseVisible(function(D){D.isLight&&D.layers.test(G.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),A!==R&&A.traverseVisible(function(D){D.isLight&&D.layers.test(G.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const I=new Set;return A.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const Y=D.material;if(Y)if(Array.isArray(Y))for(let et=0;et<Y.length;et++){const ut=Y[et];Ut(ut,R,D),I.add(ut)}else Ut(Y,R,D),I.add(Y)}),M.pop(),p=null,I},this.compileAsync=function(A,G,R=null){const I=this.compile(A,G,R);return new Promise(D=>{function Y(){if(I.forEach(function(et){Rt.get(et).currentProgram.isReady()&&I.delete(et)}),I.size===0){D(A);return}setTimeout(Y,10)}at.get("KHR_parallel_shader_compile")!==null?Y():setTimeout(Y,10)})};let $e=null;function qe(A){$e&&$e(A)}function qi(){En.stop()}function xi(){En.start()}const En=new bu;En.setAnimationLoop(qe),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(A){$e=A,Z.setAnimationLoop(A),A===null?En.stop():En.start()},Z.addEventListener("sessionstart",qi),Z.addEventListener("sessionend",xi),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(G),G=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,G,C),p=se.get(A,M.length),p.init(G),M.push(p),Tt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),K.setFromProjectionMatrix(Tt),At=this.localClippingEnabled,st=W.init(this.clippingPlanes,At),g=pt.get(A,x.length),g.init(),x.push(g),Z.enabled===!0&&Z.isPresenting===!0){const Y=v.xr.getDepthSensingMesh();Y!==null&&Mi(Y,G,-1/0,v.sortObjects)}Mi(A,G,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(lt,ft),nt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,nt&&$t.addToRenderList(g,A),this.info.render.frame++,st===!0&&W.beginShadows();const R=p.state.shadowsArray;dt.render(R,A,G),st===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset();const I=g.opaque,D=g.transmissive;if(p.setupLights(),G.isArrayCamera){const Y=G.cameras;if(D.length>0)for(let et=0,ut=Y.length;et<ut;et++){const vt=Y[et];ji(I,D,A,vt)}nt&&$t.render(A);for(let et=0,ut=Y.length;et<ut;et++){const vt=Y[et];Yi(g,A,vt,vt.viewport)}}else D.length>0&&ji(I,D,A,G),nt&&$t.render(A),Yi(g,A,G);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,G),pe.resetDefaultState(),S=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],st===!0&&W.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Mi(A,G,R,I){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)R=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){I&&St.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Tt);const et=Q.update(A),ut=A.material;ut.visible&&g.push(A,et,ut,R,St.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const et=Q.update(A),ut=A.material;if(I&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),St.copy(A.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),St.copy(et.boundingSphere.center)),St.applyMatrix4(A.matrixWorld).applyMatrix4(Tt)),Array.isArray(ut)){const vt=et.groups;for(let Ft=0,Gt=vt.length;Ft<Gt;Ft++){const _t=vt[Ft],ie=ut[_t.materialIndex];ie&&ie.visible&&g.push(A,et,ie,R,St.z,_t)}}else ut.visible&&g.push(A,et,ut,R,St.z,null)}}const Y=A.children;for(let et=0,ut=Y.length;et<ut;et++)Mi(Y[et],G,R,I)}function Yi(A,G,R,I){const D=A.opaque,Y=A.transmissive,et=A.transparent;p.setupLightsView(R),st===!0&&W.setGlobalState(v.clippingPlanes,R),I&&mt.viewport(L.copy(I)),D.length>0&&yi(D,G,R),Y.length>0&&yi(Y,G,R),et.length>0&&yi(et,G,R),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function ji(A,G,R,I){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[I.id]===void 0&&(p.state.transmissionRenderTarget[I.id]=new zi(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?yo:jn,minFilter:Ni,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const Y=p.state.transmissionRenderTarget[I.id],et=I.viewport||L;Y.setSize(et.z,et.w);const ut=v.getRenderTarget();v.setRenderTarget(Y),v.getClearColor(V),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),nt&&$t.render(R);const vt=v.toneMapping;v.toneMapping=gi;const Ft=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),p.setupLightsView(I),st===!0&&W.setGlobalState(v.clippingPlanes,I),yi(A,R,I),P.updateMultisampleRenderTarget(Y),P.updateRenderTargetMipmap(Y),at.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let _t=0,ie=G.length;_t<ie;_t++){const de=G[_t],Me=de.object,Fe=de.geometry,fe=de.material,Nt=de.group;if(fe.side===Te&&Me.layers.test(I.layers)){const Be=fe.side;fe.side=Ze,fe.needsUpdate=!0,Zi(Me,R,I,Fe,fe,Nt),fe.side=Be,fe.needsUpdate=!0,Gt=!0}}Gt===!0&&(P.updateMultisampleRenderTarget(Y),P.updateRenderTargetMipmap(Y))}v.setRenderTarget(ut),v.setClearColor(V,k),Ft!==void 0&&(I.viewport=Ft),v.toneMapping=vt}function yi(A,G,R){const I=G.isScene===!0?G.overrideMaterial:null;for(let D=0,Y=A.length;D<Y;D++){const et=A[D],ut=et.object,vt=et.geometry,Ft=I===null?et.material:I,Gt=et.group;ut.layers.test(R.layers)&&Zi(ut,G,R,vt,Ft,Gt)}}function Zi(A,G,R,I,D,Y){A.onBeforeRender(v,G,R,I,D,Y),A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),D.onBeforeRender(v,G,R,I,A,Y),D.transparent===!0&&D.side===Te&&D.forceSinglePass===!1?(D.side=Ze,D.needsUpdate=!0,v.renderBufferDirect(R,G,I,D,A,Y),D.side=_i,D.needsUpdate=!0,v.renderBufferDirect(R,G,I,D,A,Y),D.side=Te):v.renderBufferDirect(R,G,I,D,A,Y),A.onAfterRender(v,G,R,I,D,Y)}function bi(A,G,R){G.isScene!==!0&&(G=Yt);const I=Rt.get(A),D=p.state.lights,Y=p.state.shadowsArray,et=D.state.version,ut=Ct.getParameters(A,D.state,Y,G,R),vt=Ct.getProgramCacheKey(ut);let Ft=I.programs;I.environment=A.isMeshStandardMaterial?G.environment:null,I.fog=G.fog,I.envMap=(A.isMeshStandardMaterial?X:E).get(A.envMap||I.environment),I.envMapRotation=I.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Ft===void 0&&(A.addEventListener("dispose",Zt),Ft=new Map,I.programs=Ft);let Gt=Ft.get(vt);if(Gt!==void 0){if(I.currentProgram===Gt&&I.lightsStateVersion===et)return wo(A,ut),Gt}else ut.uniforms=Ct.getUniforms(A),A.onBeforeCompile(ut,v),Gt=Ct.acquireProgram(ut,vt),Ft.set(vt,Gt),I.uniforms=ut.uniforms;const _t=I.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(_t.clippingPlanes=W.uniform),wo(A,ut),I.needsLights=Nr(A),I.lightsStateVersion=et,I.needsLights&&(_t.ambientLightColor.value=D.state.ambient,_t.lightProbe.value=D.state.probe,_t.directionalLights.value=D.state.directional,_t.directionalLightShadows.value=D.state.directionalShadow,_t.spotLights.value=D.state.spot,_t.spotLightShadows.value=D.state.spotShadow,_t.rectAreaLights.value=D.state.rectArea,_t.ltc_1.value=D.state.rectAreaLTC1,_t.ltc_2.value=D.state.rectAreaLTC2,_t.pointLights.value=D.state.point,_t.pointLightShadows.value=D.state.pointShadow,_t.hemisphereLights.value=D.state.hemi,_t.directionalShadowMap.value=D.state.directionalShadowMap,_t.directionalShadowMatrix.value=D.state.directionalShadowMatrix,_t.spotShadowMap.value=D.state.spotShadowMap,_t.spotLightMatrix.value=D.state.spotLightMatrix,_t.spotLightMap.value=D.state.spotLightMap,_t.pointShadowMap.value=D.state.pointShadowMap,_t.pointShadowMatrix.value=D.state.pointShadowMatrix),I.currentProgram=Gt,I.uniformsList=null,Gt}function Vs(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=_r.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function wo(A,G){const R=Rt.get(A);R.outputColorSpace=G.outputColorSpace,R.batching=G.batching,R.batchingColor=G.batchingColor,R.instancing=G.instancing,R.instancingColor=G.instancingColor,R.instancingMorph=G.instancingMorph,R.skinning=G.skinning,R.morphTargets=G.morphTargets,R.morphNormals=G.morphNormals,R.morphColors=G.morphColors,R.morphTargetsCount=G.morphTargetsCount,R.numClippingPlanes=G.numClippingPlanes,R.numIntersection=G.numClipIntersection,R.vertexAlphas=G.vertexAlphas,R.vertexTangents=G.vertexTangents,R.toneMapping=G.toneMapping}function Ir(A,G,R,I,D){G.isScene!==!0&&(G=Yt),P.resetTextureUnits();const Y=G.fog,et=I.isMeshStandardMaterial?G.environment:null,ut=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Bs,vt=(I.isMeshStandardMaterial?X:E).get(I.envMap||et),Ft=I.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,Gt=!!R.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),_t=!!R.morphAttributes.position,ie=!!R.morphAttributes.normal,de=!!R.morphAttributes.color;let Me=gi;I.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Me=v.toneMapping);const Fe=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,fe=Fe!==void 0?Fe.length:0,Nt=Rt.get(I),Be=p.state.lights;if(st===!0&&(At===!0||A!==b)){const ke=A===b&&I.id===S;W.setState(I,A,ke)}let ae=!1;I.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Be.state.version||Nt.outputColorSpace!==ut||D.isBatchedMesh&&Nt.batching===!1||!D.isBatchedMesh&&Nt.batching===!0||D.isBatchedMesh&&Nt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Nt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Nt.instancing===!1||!D.isInstancedMesh&&Nt.instancing===!0||D.isSkinnedMesh&&Nt.skinning===!1||!D.isSkinnedMesh&&Nt.skinning===!0||D.isInstancedMesh&&Nt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Nt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Nt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Nt.instancingMorph===!1&&D.morphTexture!==null||Nt.envMap!==vt||I.fog===!0&&Nt.fog!==Y||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==W.numPlanes||Nt.numIntersection!==W.numIntersection)||Nt.vertexAlphas!==Ft||Nt.vertexTangents!==Gt||Nt.morphTargets!==_t||Nt.morphNormals!==ie||Nt.morphColors!==de||Nt.toneMapping!==Me||Nt.morphTargetsCount!==fe)&&(ae=!0):(ae=!0,Nt.__version=I.version);let tn=Nt.currentProgram;ae===!0&&(tn=bi(I,G,D));let On=!1,ct=!1,Dt=!1;const Bt=tn.getUniforms(),we=Nt.uniforms;if(mt.useProgram(tn.program)&&(On=!0,ct=!0,Dt=!0),I.id!==S&&(S=I.id,ct=!0),On||b!==A){mt.buffers.depth.getReversed()?(rt.copy(A.projectionMatrix),Jd(rt),Qd(rt),Bt.setValue(U,"projectionMatrix",rt)):Bt.setValue(U,"projectionMatrix",A.projectionMatrix),Bt.setValue(U,"viewMatrix",A.matrixWorldInverse);const ti=Bt.map.cameraPosition;ti!==void 0&&ti.setValue(U,Pt.setFromMatrixPosition(A.matrixWorld)),Lt.logarithmicDepthBuffer&&Bt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Bt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,ct=!0,Dt=!0)}if(D.isSkinnedMesh){Bt.setOptional(U,D,"bindMatrix"),Bt.setOptional(U,D,"bindMatrixInverse");const ke=D.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),Bt.setValue(U,"boneTexture",ke.boneTexture,P))}D.isBatchedMesh&&(Bt.setOptional(U,D,"batchingTexture"),Bt.setValue(U,"batchingTexture",D._matricesTexture,P),Bt.setOptional(U,D,"batchingIdTexture"),Bt.setValue(U,"batchingIdTexture",D._indirectTexture,P),Bt.setOptional(U,D,"batchingColorTexture"),D._colorsTexture!==null&&Bt.setValue(U,"batchingColorTexture",D._colorsTexture,P));const en=R.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&qt.update(D,R,tn),(ct||Nt.receiveShadow!==D.receiveShadow)&&(Nt.receiveShadow=D.receiveShadow,Bt.setValue(U,"receiveShadow",D.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(we.envMap.value=vt,we.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&G.environment!==null&&(we.envMapIntensity.value=G.environmentIntensity),ct&&(Bt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&Ur(we,Dt),Y&&I.fog===!0&&gt.refreshFogUniforms(we,Y),gt.refreshMaterialUniforms(we,I,$,j,p.state.transmissionRenderTarget[A.id]),_r.upload(U,Vs(Nt),we,P)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(_r.upload(U,Vs(Nt),we,P),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Bt.setValue(U,"center",D.center),Bt.setValue(U,"modelViewMatrix",D.modelViewMatrix),Bt.setValue(U,"normalMatrix",D.normalMatrix),Bt.setValue(U,"modelMatrix",D.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const ke=I.uniformsGroups;for(let ti=0,ei=ke.length;ti<ei;ti++){const jl=ke[ti];B.update(jl,tn),B.bind(jl,tn)}}return tn}function Ur(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Nr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,G,R){Rt.get(A.texture).__webglTexture=G,Rt.get(A.depthTexture).__webglTexture=R;const I=Rt.get(A);I.__hasExternalTextures=!0,I.__autoAllocateDepthBuffer=R===void 0,I.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){const R=Rt.get(A);R.__webglFramebuffer=G,R.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,R=0){C=A,w=G,y=R;let I=!0,D=null,Y=!1,et=!1;if(A){const vt=Rt.get(A);if(vt.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(U.FRAMEBUFFER,null),I=!1;else if(vt.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(vt.__hasExternalTextures)P.rebindTextures(A,Rt.get(A.texture).__webglTexture,Rt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const _t=A.depthTexture;if(vt.__boundDepthTexture!==_t){if(_t!==null&&Rt.has(_t)&&(A.width!==_t.image.width||A.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Ft=A.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(et=!0);const Gt=Rt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Gt[G])?D=Gt[G][R]:D=Gt[G],Y=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?D=Rt.get(A).__webglMultisampledFramebuffer:Array.isArray(Gt)?D=Gt[R]:D=Gt,L.copy(A.viewport),H.copy(A.scissor),z=A.scissorTest}else L.copy(yt).multiplyScalar($).floor(),H.copy(zt).multiplyScalar($).floor(),z=Ht;if(mt.bindFramebuffer(U.FRAMEBUFFER,D)&&I&&mt.drawBuffers(A,D),mt.viewport(L),mt.scissor(H),mt.setScissorTest(z),Y){const vt=Rt.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,vt.__webglTexture,R)}else if(et){const vt=Rt.get(A.texture),Ft=G||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,vt.__webglTexture,R||0,Ft)}S=-1},this.readRenderTargetPixels=function(A,G,R,I,D,Y,et){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&et!==void 0&&(ut=ut[et]),ut){mt.bindFramebuffer(U.FRAMEBUFFER,ut);try{const vt=A.texture,Ft=vt.format,Gt=vt.type;if(!Lt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-I&&R>=0&&R<=A.height-D&&U.readPixels(G,R,I,D,Jt.convert(Ft),Jt.convert(Gt),Y)}finally{const vt=C!==null?Rt.get(C).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(A,G,R,I,D,Y,et){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&et!==void 0&&(ut=ut[et]),ut){const vt=A.texture,Ft=vt.format,Gt=vt.type;if(!Lt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=A.width-I&&R>=0&&R<=A.height-D){mt.bindFramebuffer(U.FRAMEBUFFER,ut);const _t=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.bufferData(U.PIXEL_PACK_BUFFER,Y.byteLength,U.STREAM_READ),U.readPixels(G,R,I,D,Jt.convert(Ft),Jt.convert(Gt),0);const ie=C!==null?Rt.get(C).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,ie);const de=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Kd(U,de,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Y),U.deleteBuffer(_t),U.deleteSync(de),Y}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,G=null,R=0){A.isTexture!==!0&&(oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1]);const I=Math.pow(2,-R),D=Math.floor(A.image.width*I),Y=Math.floor(A.image.height*I),et=G!==null?G.x:0,ut=G!==null?G.y:0;P.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,R,0,0,et,ut,D,Y),mt.unbindTexture()},this.copyTextureToTexture=function(A,G,R=null,I=null,D=0){A.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture function signature has changed."),I=arguments[0]||null,A=arguments[1],G=arguments[2],D=arguments[3]||0,R=null);let Y,et,ut,vt,Ft,Gt,_t,ie,de;const Me=A.isCompressedTexture?A.mipmaps[D]:A.image;R!==null?(Y=R.max.x-R.min.x,et=R.max.y-R.min.y,ut=R.isBox3?R.max.z-R.min.z:1,vt=R.min.x,Ft=R.min.y,Gt=R.isBox3?R.min.z:0):(Y=Me.width,et=Me.height,ut=Me.depth||1,vt=0,Ft=0,Gt=0),I!==null?(_t=I.x,ie=I.y,de=I.z):(_t=0,ie=0,de=0);const Fe=Jt.convert(G.format),fe=Jt.convert(G.type);let Nt;G.isData3DTexture?(P.setTexture3D(G,0),Nt=U.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(P.setTexture2DArray(G,0),Nt=U.TEXTURE_2D_ARRAY):(P.setTexture2D(G,0),Nt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const Be=U.getParameter(U.UNPACK_ROW_LENGTH),ae=U.getParameter(U.UNPACK_IMAGE_HEIGHT),tn=U.getParameter(U.UNPACK_SKIP_PIXELS),On=U.getParameter(U.UNPACK_SKIP_ROWS),ct=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Me.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Me.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,vt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ft),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Gt);const Dt=A.isDataArrayTexture||A.isData3DTexture,Bt=G.isDataArrayTexture||G.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const we=Rt.get(A),en=Rt.get(G),ke=Rt.get(we.__renderTarget),ti=Rt.get(en.__renderTarget);mt.bindFramebuffer(U.READ_FRAMEBUFFER,ke.__webglFramebuffer),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let ei=0;ei<ut;ei++)Dt&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.get(A).__webglTexture,D,Gt+ei),A.isDepthTexture?(Bt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.get(G).__webglTexture,D,de+ei),U.blitFramebuffer(vt,Ft,Y,et,_t,ie,Y,et,U.DEPTH_BUFFER_BIT,U.NEAREST)):Bt?U.copyTexSubImage3D(Nt,D,_t,ie,de+ei,vt,Ft,Y,et):U.copyTexSubImage2D(Nt,D,_t,ie,de+ei,vt,Ft,Y,et);mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Bt?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Nt,D,_t,ie,de,Y,et,ut,Fe,fe,Me.data):G.isCompressedArrayTexture?U.compressedTexSubImage3D(Nt,D,_t,ie,de,Y,et,ut,Fe,Me.data):U.texSubImage3D(Nt,D,_t,ie,de,Y,et,ut,Fe,fe,Me):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,D,_t,ie,Y,et,Fe,fe,Me.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,D,_t,ie,Me.width,Me.height,Fe,Me.data):U.texSubImage2D(U.TEXTURE_2D,D,_t,ie,Y,et,Fe,fe,Me);U.pixelStorei(U.UNPACK_ROW_LENGTH,Be),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae),U.pixelStorei(U.UNPACK_SKIP_PIXELS,tn),U.pixelStorei(U.UNPACK_SKIP_ROWS,On),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ct),D===0&&G.generateMipmaps&&U.generateMipmap(Nt),mt.unbindTexture()},this.copyTextureToTexture3D=function(A,G,R=null,I=null,D=0){return A.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),R=arguments[0]||null,I=arguments[1]||null,A=arguments[2],G=arguments[3],D=arguments[4]||0),oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,R,I,D)},this.initRenderTarget=function(A){Rt.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),mt.unbindTexture()},this.resetState=function(){w=0,y=0,C=null,mt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}class kl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new kl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cu extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class c_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ml,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new N;class wr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),o=_e(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pu extends Xi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let us;const Ys=new N,ds=new N,fs=new N,ps=new ot,js=new ot,Lu=new re,Xo=new N,Zs=new N,$o=new N,qc=new ot,ha=new ot,Yc=new ot;class h_ extends Ae{constructor(t=new Pu){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new ue;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new c_(e,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new wr(n,3,0,!1)),us.setAttribute("uv",new wr(n,2,3,!1))}this.geometry=us,this.material=t,this.center=new ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),Lu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-fs.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;qo(Xo.set(-.5,-.5,0),fs,r,ds,s,o),qo(Zs.set(.5,-.5,0),fs,r,ds,s,o),qo($o.set(.5,.5,0),fs,r,ds,s,o),qc.set(0,0),ha.set(1,0),Yc.set(1,1);let a=t.ray.intersectTriangle(Xo,Zs,$o,!1,Ys);if(a===null&&(qo(Zs.set(-.5,.5,0),fs,r,ds,s,o),ha.set(0,1),a=t.ray.intersectTriangle(Xo,$o,Zs,!1,Ys),a===null))return;const l=t.ray.origin.distanceTo(Ys);l<t.near||l>t.far||e.push({distance:l,point:Ys.clone(),uv:hn.getInterpolation(Ys,Xo,Zs,$o,qc,ha,Yc,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function qo(i,t,e,n,s,o){ps.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(js.x=o*ps.x-s*ps.y,js.y=s*ps.x+o*ps.y):js.copy(ps),i.copy(t),i.x+=js.x,i.y+=js.y,i.applyMatrix4(Lu)}class u_ extends Xe{constructor(t=null,e=1,n=1,s,o,r,a,l,c=an,h=an,f,d){super(null,r,a,l,c,h,s,o,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jc extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ms=new re,Zc=new re,Yo=[],Kc=new Wi,d_=new re,Ks=new J,Js=new Hs;class dn extends J{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new jc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,d_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),Kc.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(Kc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),Js.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(Js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),t.ray.intersectsSphere(Js)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,ms),Zc.multiplyMatrices(n,ms),Ks.matrixWorld=Zc,Ks.raycast(t,Yo);for(let r=0,a=Yo.length;r<a;r++){const l=Yo[r];l.instanceId=o,l.object=this,e.push(l)}Yo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new jc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new u_(new Float32Array(s*this.count),s,this.count,Pl,Cn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Du extends Xi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Sr=new N,Er=new N,Jc=new re,Qs=new Rr,jo=new Hs,ua=new N,Qc=new N;class f_ extends Ae{constructor(t=new ue,e=new Du){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Sr.fromBufferAttribute(e,s-1),Er.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Sr.distanceTo(Er);t.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),jo.radius+=o,t.ray.intersectsSphere(jo)===!1)return;Jc.copy(s).invert(),Qs.copy(t.ray).applyMatrix4(Jc);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let _=u,g=m-1;_<g;_+=c){const p=h.getX(_),x=h.getX(_+1),M=Zo(this,t,Qs,l,p,x);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(u),p=Zo(this,t,Qs,l,_,g);p&&e.push(p)}}else{const u=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let _=u,g=m-1;_<g;_+=c){const p=Zo(this,t,Qs,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Zo(this,t,Qs,l,m-1,u);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Zo(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Sr.fromBufferAttribute(r,s),Er.fromBufferAttribute(r,o),e.distanceSqToSegment(Sr,Er,ua,Qc)>n)return;ua.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ua);if(!(l<t.near||l>t.far))return{distance:l,point:Qc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Un extends Xe{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],d=n[s+1]-h,u=(r-h)/d;return(s+u)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new ot:new N);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,s=[],o=[],r=[],a=new N,l=new re;for(let u=0;u<=t;u++){const m=u/t;s[u]=this.getTangentAt(m,new N)}o[0]=new N,r[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let u=1;u<=t;u++){if(o[u]=o[u-1].clone(),r[u]=r[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ie(s[u-1].dot(s[u]),-1,1));o[u].applyMatrix4(l.makeRotationAxis(a,m))}r[u].crossVectors(s[u],o[u])}if(e===!0){let u=Math.acos(Ie(o[0].dot(o[t]),-1,1));u/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(u=-u);for(let m=1;m<=t;m++)o[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class zl extends Nn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ot){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class p_ extends zl{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Bl(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,f){let d=(r-o)/c-(a-o)/(c+h)+(a-r)/h,u=(a-r)/h-(l-r)/(h+f)+(l-a)/f;d*=h,u*=h,s(r,a,d,u)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Ko=new N,da=new Bl,fa=new Bl,pa=new Bl;class m_ extends Nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(Ko.subVectors(s[0],s[1]).add(s[0]),c=Ko);const f=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Ko.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Ko),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),da.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,m,_,g),fa.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,m,_,g),pa.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(da.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),fa.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),pa.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(da.calc(l),fa.calc(l),pa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function th(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function g_(i,t){const e=1-i;return e*e*t}function __(i,t){return 2*(1-i)*i*t}function v_(i,t){return i*i*t}function ho(i,t,e,n){return g_(i,t)+__(i,e)+v_(i,n)}function x_(i,t){const e=1-i;return e*e*e*t}function M_(i,t){const e=1-i;return 3*e*e*i*t}function y_(i,t){return 3*(1-i)*i*i*t}function b_(i,t){return i*i*i*t}function uo(i,t,e,n,s){return x_(i,t)+M_(i,e)+y_(i,n)+b_(i,s)}class Iu extends Nn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(uo(t,s.x,o.x,r.x,a.x),uo(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class w_ extends Nn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(uo(t,s.x,o.x,r.x,a.x),uo(t,s.y,o.y,r.y,a.y),uo(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uu extends Nn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class S_ extends Nn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nu extends Nn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(ho(t,s.x,o.x,r.x),ho(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class E_ extends Nn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(ho(t,s.x,o.x,r.x),ho(t,s.y,o.y,r.y),ho(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ou extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(th(a,l.x,c.x,h.x,f.x),th(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var vl=Object.freeze({__proto__:null,ArcCurve:p_,CatmullRomCurve3:m_,CubicBezierCurve:Iu,CubicBezierCurve3:w_,EllipseCurve:zl,LineCurve:Uu,LineCurve3:S_,QuadraticBezierCurve:Nu,QuadraticBezierCurve3:E_,SplineCurve:Ou});class T_ extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new vl[s.type]().fromJSON(s))}return this}}class eh extends T_{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Uu(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Nu(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Iu(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ou(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new zl(t,e,n,s,o,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hl extends ue{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ie(s,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,f=new N,d=new ot,u=new N,m=new N,_=new N;let g=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,u.x=p*1,u.y=-g,u.z=p*0,_.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,u.x=p*1,u.y=-g,u.z=p*0,m.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),l.push(u.x,u.y,u.z),_.copy(m)}for(let x=0;x<=e;x++){const M=n+x*h*s,v=Math.sin(M),T=Math.cos(M);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*v,f.y=t[w].y,f.z=t[w].x*T,r.push(f.x,f.y,f.z),d.x=x/e,d.y=w/(t.length-1),a.push(d.x,d.y);const y=l[3*w+0]*v,C=l[3*w+1],S=l[3*w+0]*T;c.push(y,C,S)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){const v=M+x*t.length,T=v,w=v+t.length,y=v+t.length+1,C=v+1;o.push(T,w,C),o.push(y,C,w)}this.setIndex(o),this.setAttribute("position",new Wt(r,3)),this.setAttribute("uv",new Wt(a,2)),this.setAttribute("normal",new Wt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hl(t.points,t.segments,t.phiStart,t.phiLength)}}class Gl extends ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new N,h=new ot;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const u=n+f/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(a,3)),this.setAttribute("uv",new Wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qt extends ue{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],f=[],d=[],u=[];let m=0;const _=[],g=n/2;let p=0;x(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(u,2));function x(){const v=new N,T=new N;let w=0;const y=(e-t)/n;for(let C=0;C<=o;C++){const S=[],b=C/o,L=b*(e-t)+t;for(let H=0;H<=s;H++){const z=H/s,V=z*l+a,k=Math.sin(V),F=Math.cos(V);T.x=L*k,T.y=-b*n+g,T.z=L*F,f.push(T.x,T.y,T.z),v.set(k,y,F).normalize(),d.push(v.x,v.y,v.z),u.push(z,1-b),S.push(m++)}_.push(S)}for(let C=0;C<s;C++)for(let S=0;S<o;S++){const b=_[S][C],L=_[S+1][C],H=_[S+1][C+1],z=_[S][C+1];(t>0||S!==0)&&(h.push(b,L,z),w+=3),(e>0||S!==o-1)&&(h.push(L,H,z),w+=3)}c.addGroup(p,w,0),p+=w}function M(v){const T=m,w=new ot,y=new N;let C=0;const S=v===!0?t:e,b=v===!0?1:-1;for(let H=1;H<=s;H++)f.push(0,g*b,0),d.push(0,b,0),u.push(.5,.5),m++;const L=m;for(let H=0;H<=s;H++){const V=H/s*l+a,k=Math.cos(V),F=Math.sin(V);y.x=S*F,y.y=g*b,y.z=S*k,f.push(y.x,y.y,y.z),d.push(0,b,0),w.x=k*.5+.5,w.y=F*.5*b+.5,u.push(w.x,w.y),m++}for(let H=0;H<s;H++){const z=T+H,V=L+H;v===!0?h.push(V,V+1,z):h.push(V+1,V,z),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yn extends Qt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Yn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pr extends ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(o.slice(),3)),this.setAttribute("uv",new Wt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new N,v=new N,T=new N;for(let w=0;w<e.length;w+=3)u(e[w+0],M),u(e[w+1],v),u(e[w+2],T),l(M,v,T,x)}function l(x,M,v,T){const w=T+1,y=[];for(let C=0;C<=w;C++){y[C]=[];const S=x.clone().lerp(v,C/w),b=M.clone().lerp(v,C/w),L=w-C;for(let H=0;H<=L;H++)H===0&&C===w?y[C][H]=S:y[C][H]=S.clone().lerp(b,H/L)}for(let C=0;C<w;C++)for(let S=0;S<2*(w-C)-1;S++){const b=Math.floor(S/2);S%2===0?(d(y[C][b+1]),d(y[C+1][b]),d(y[C][b])):(d(y[C][b+1]),d(y[C+1][b+1]),d(y[C+1][b]))}}function c(x){const M=new N;for(let v=0;v<o.length;v+=3)M.x=o[v+0],M.y=o[v+1],M.z=o[v+2],M.normalize().multiplyScalar(x),o[v+0]=M.x,o[v+1]=M.y,o[v+2]=M.z}function h(){const x=new N;for(let M=0;M<o.length;M+=3){x.x=o[M+0],x.y=o[M+1],x.z=o[M+2];const v=g(x)/2/Math.PI+.5,T=p(x)/Math.PI+.5;r.push(v,1-T)}m(),f()}function f(){for(let x=0;x<r.length;x+=6){const M=r[x+0],v=r[x+2],T=r[x+4],w=Math.max(M,v,T),y=Math.min(M,v,T);w>.9&&y<.1&&(M<.2&&(r[x+0]+=1),v<.2&&(r[x+2]+=1),T<.2&&(r[x+4]+=1))}}function d(x){o.push(x.x,x.y,x.z)}function u(x,M){const v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function m(){const x=new N,M=new N,v=new N,T=new N,w=new ot,y=new ot,C=new ot;for(let S=0,b=0;S<o.length;S+=9,b+=6){x.set(o[S+0],o[S+1],o[S+2]),M.set(o[S+3],o[S+4],o[S+5]),v.set(o[S+6],o[S+7],o[S+8]),w.set(r[b+0],r[b+1]),y.set(r[b+2],r[b+3]),C.set(r[b+4],r[b+5]),T.copy(x).add(M).add(v).divideScalar(3);const L=g(T);_(w,b+0,x,L),_(y,b+2,M,L),_(C,b+4,v,L)}}function _(x,M,v,T){T<0&&x.x===1&&(r[M]=x.x-1),v.x===0&&v.z===0&&(r[M]=T/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.vertices,t.indices,t.radius,t.details)}}class $i extends eh{constructor(t){super(t),this.uuid=Ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new eh().fromJSON(s))}return this}}const A_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Fu(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,f,d,u;if(n&&(o=D_(i,t,o,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)f=i[m],d=i[m+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return mo(o,r,e,a,l,u,0),r}};function Fu(i,t,e,n,s){let o,r;if(s===V_(i,t,e,n)>0)for(o=t;o<e;o+=n)r=nh(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=nh(o,i[o],i[o+1],r);return r&&Lr(r,r.next)&&(_o(r),r=r.next),r}function Bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Lr(e,e.next)||be(e.prev,e,e.next)===0)){if(_o(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function mo(i,t,e,n,s,o,r){if(!i)return;!r&&o&&F_(i,n,s,o);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,o?C_(i,n,s,o):R_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),_o(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=P_(Bi(i),t,e),mo(i,t,e,n,s,o,2)):r===2&&L_(i,t,e,n,s,o):mo(Bi(i),t,e,n,s,o,1);break}}}function R_(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=s<o?s<r?s:r:o<r?o:r,f=a<l?a<c?a:c:l<c?l:c,d=s>o?s>r?s:r:o>r?o:r,u=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=f&&m.y<=u&&Ss(s,a,o,l,r,c,m.x,m.y)&&be(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function C_(i,t,e,n){const s=i.prev,o=i,r=i.next;if(be(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,f=o.y,d=r.y,u=a<l?a<c?a:c:l<c?l:c,m=h<f?h<d?h:d:f<d?f:d,_=a>l?a>c?a:c:l>c?l:c,g=h>f?h>d?h:d:f>d?f:d,p=xl(u,m,t,e,n),x=xl(_,g,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=x;){if(M.x>=u&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==r&&Ss(a,h,l,f,c,d,M.x,M.y)&&be(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=u&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==r&&Ss(a,h,l,f,c,d,v.x,v.y)&&be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=u&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==r&&Ss(a,h,l,f,c,d,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=x;){if(v.x>=u&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==r&&Ss(a,h,l,f,c,d,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function P_(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Lr(s,o)&&ku(s,n,n.next,o)&&go(s,o)&&go(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),_o(n),_o(n.next),n=i=o),n=n.next}while(n!==i);return Bi(n)}function L_(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&B_(r,a)){let l=zu(r,a);r=Bi(r,r.next),l=Bi(l,l.next),mo(r,t,e,n,s,o,0),mo(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function D_(i,t,e,n){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=Fu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(z_(c));for(s.sort(I_),o=0;o<s.length;o++)e=U_(s[o],e);return e}function I_(i,t){return i.x-t.x}function U_(i,t){const e=N_(i,t);if(!e)return t;const n=zu(e,i);return Bi(n,n.next),Bi(e,e.next)}function N_(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,f;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&Ss(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(o-e.x),go(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&O_(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function O_(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function F_(i,t,e,n){let s=i;do s.z===0&&(s.z=xl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,k_(s)}function k_(i){let t,e,n,s,o,r,a,l,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function xl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function z_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ss(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function B_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!H_(i,t)&&(go(i,t)&&go(t,i)&&G_(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||Lr(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Lr(i,t){return i.x===t.x&&i.y===t.y}function ku(i,t,e,n){const s=Qo(be(i,t,e)),o=Qo(be(i,t,n)),r=Qo(be(e,n,i)),a=Qo(be(e,n,t));return!!(s!==o&&r!==a||s===0&&Jo(i,e,t)||o===0&&Jo(i,n,t)||r===0&&Jo(e,i,n)||a===0&&Jo(e,t,n))}function Jo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Qo(i){return i>0?1:i<0?-1:0}function H_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ku(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function go(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function G_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zu(i,t){const e=new Ml(i.i,i.x,i.y),n=new Ml(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function nh(i,t,e,n){const s=new Ml(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _o(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ml(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function V_(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Dn{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Dn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];ih(t),sh(n,t);let r=t.length;e.forEach(ih);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,sh(n,e[l]);const a=A_.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function ih(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function sh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class zs extends ue{constructor(t=new $i([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new Wt(s,3)),this.setAttribute("uv",new Wt(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:W_;let M,v=!1,T,w,y,C;p&&(M=p.getSpacedPoints(h),v=!0,d=!1,T=p.computeFrenetFrames(h,!1),w=new N,y=new N,C=new N),d||(g=0,u=0,m=0,_=0);const S=a.extractPoints(c);let b=S.shape;const L=S.holes;if(!Dn.isClockWise(b)){b=b.reverse();for(let nt=0,ht=L.length;nt<ht;nt++){const U=L[nt];Dn.isClockWise(U)&&(L[nt]=U.reverse())}}const z=Dn.triangulateShape(b,L),V=b;for(let nt=0,ht=L.length;nt<ht;nt++){const U=L[nt];b=b.concat(U)}function k(nt,ht,U){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ht,U)}const F=b.length,j=z.length;function $(nt,ht,U){let Ot,at,Lt;const mt=nt.x-ht.x,Xt=nt.y-ht.y,Rt=U.x-nt.x,P=U.y-nt.y,E=mt*mt+Xt*Xt,X=mt*P-Xt*Rt;if(Math.abs(X)>Number.EPSILON){const q=Math.sqrt(E),it=Math.sqrt(Rt*Rt+P*P),Q=ht.x-Xt/q,Ct=ht.y+mt/q,gt=U.x-P/it,pt=U.y+Rt/it,se=((gt-Q)*P-(pt-Ct)*Rt)/(mt*P-Xt*Rt);Ot=Q+mt*se-nt.x,at=Ct+Xt*se-nt.y;const W=Ot*Ot+at*at;if(W<=2)return new ot(Ot,at);Lt=Math.sqrt(W/2)}else{let q=!1;mt>Number.EPSILON?Rt>Number.EPSILON&&(q=!0):mt<-Number.EPSILON?Rt<-Number.EPSILON&&(q=!0):Math.sign(Xt)===Math.sign(P)&&(q=!0),q?(Ot=-Xt,at=mt,Lt=Math.sqrt(E)):(Ot=mt,at=Xt,Lt=Math.sqrt(E/2))}return new ot(Ot/Lt,at/Lt)}const lt=[];for(let nt=0,ht=V.length,U=ht-1,Ot=nt+1;nt<ht;nt++,U++,Ot++)U===ht&&(U=0),Ot===ht&&(Ot=0),lt[nt]=$(V[nt],V[U],V[Ot]);const ft=[];let yt,zt=lt.concat();for(let nt=0,ht=L.length;nt<ht;nt++){const U=L[nt];yt=[];for(let Ot=0,at=U.length,Lt=at-1,mt=Ot+1;Ot<at;Ot++,Lt++,mt++)Lt===at&&(Lt=0),mt===at&&(mt=0),yt[Ot]=$(U[Ot],U[Lt],U[mt]);ft.push(yt),zt=zt.concat(yt)}for(let nt=0;nt<g;nt++){const ht=nt/g,U=u*Math.cos(ht*Math.PI/2),Ot=m*Math.sin(ht*Math.PI/2)+_;for(let at=0,Lt=V.length;at<Lt;at++){const mt=k(V[at],lt[at],Ot);rt(mt.x,mt.y,-U)}for(let at=0,Lt=L.length;at<Lt;at++){const mt=L[at];yt=ft[at];for(let Xt=0,Rt=mt.length;Xt<Rt;Xt++){const P=k(mt[Xt],yt[Xt],Ot);rt(P.x,P.y,-U)}}}const Ht=m+_;for(let nt=0;nt<F;nt++){const ht=d?k(b[nt],zt[nt],Ht):b[nt];v?(y.copy(T.normals[0]).multiplyScalar(ht.x),w.copy(T.binormals[0]).multiplyScalar(ht.y),C.copy(M[0]).add(y).add(w),rt(C.x,C.y,C.z)):rt(ht.x,ht.y,0)}for(let nt=1;nt<=h;nt++)for(let ht=0;ht<F;ht++){const U=d?k(b[ht],zt[ht],Ht):b[ht];v?(y.copy(T.normals[nt]).multiplyScalar(U.x),w.copy(T.binormals[nt]).multiplyScalar(U.y),C.copy(M[nt]).add(y).add(w),rt(C.x,C.y,C.z)):rt(U.x,U.y,f/h*nt)}for(let nt=g-1;nt>=0;nt--){const ht=nt/g,U=u*Math.cos(ht*Math.PI/2),Ot=m*Math.sin(ht*Math.PI/2)+_;for(let at=0,Lt=V.length;at<Lt;at++){const mt=k(V[at],lt[at],Ot);rt(mt.x,mt.y,f+U)}for(let at=0,Lt=L.length;at<Lt;at++){const mt=L[at];yt=ft[at];for(let Xt=0,Rt=mt.length;Xt<Rt;Xt++){const P=k(mt[Xt],yt[Xt],Ot);v?rt(P.x,P.y+M[h-1].y,M[h-1].x+U):rt(P.x,P.y,f+U)}}}K(),st();function K(){const nt=s.length/3;if(d){let ht=0,U=F*ht;for(let Ot=0;Ot<j;Ot++){const at=z[Ot];Tt(at[2]+U,at[1]+U,at[0]+U)}ht=h+g*2,U=F*ht;for(let Ot=0;Ot<j;Ot++){const at=z[Ot];Tt(at[0]+U,at[1]+U,at[2]+U)}}else{for(let ht=0;ht<j;ht++){const U=z[ht];Tt(U[2],U[1],U[0])}for(let ht=0;ht<j;ht++){const U=z[ht];Tt(U[0]+F*h,U[1]+F*h,U[2]+F*h)}}n.addGroup(nt,s.length/3-nt,0)}function st(){const nt=s.length/3;let ht=0;At(V,ht),ht+=V.length;for(let U=0,Ot=L.length;U<Ot;U++){const at=L[U];At(at,ht),ht+=at.length}n.addGroup(nt,s.length/3-nt,1)}function At(nt,ht){let U=nt.length;for(;--U>=0;){const Ot=U;let at=U-1;at<0&&(at=nt.length-1);for(let Lt=0,mt=h+g*2;Lt<mt;Lt++){const Xt=F*Lt,Rt=F*(Lt+1),P=ht+Ot+Xt,E=ht+at+Xt,X=ht+at+Rt,q=ht+Ot+Rt;Pt(P,E,X,q)}}}function rt(nt,ht,U){l.push(nt),l.push(ht),l.push(U)}function Tt(nt,ht,U){St(nt),St(ht),St(U);const Ot=s.length/3,at=x.generateTopUV(n,s,Ot-3,Ot-2,Ot-1);Yt(at[0]),Yt(at[1]),Yt(at[2])}function Pt(nt,ht,U,Ot){St(nt),St(ht),St(Ot),St(ht),St(U),St(Ot);const at=s.length/3,Lt=x.generateSideWallUV(n,s,at-6,at-3,at-2,at-1);Yt(Lt[0]),Yt(Lt[1]),Yt(Lt[3]),Yt(Lt[1]),Yt(Lt[2]),Yt(Lt[3])}function St(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function Yt(nt){o.push(nt.x),o.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return X_(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new vl[s.type]().fromJSON(s)),new zs(n,t.options)}}const W_={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ot(o,r),new ot(a,l),new ot(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[s*3],u=t[s*3+1],m=t[s*3+2],_=t[o*3],g=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new ot(r,1-l),new ot(c,1-f),new ot(d,1-m),new ot(_,1-p)]:[new ot(a,1-l),new ot(h,1-f),new ot(u,1-m),new ot(g,1-p)]}};function X_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Qe extends Pr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qe(t.radius,t.detail)}}class Vl extends Pr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Vl(t.radius,t.detail)}}class Dr extends ue{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let f=t;const d=(e-t)/s,u=new N,m=new ot;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const p=o+g/n*r;u.x=f*Math.cos(p),u.y=f*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),m.x=(u.x/e+1)/2,m.y=(u.y/e+1)/2,h.push(m.x,m.y)}f+=d}for(let _=0;_<s;_++){const g=_*(n+1);for(let p=0;p<n;p++){const x=p+g,M=x,v=x+n+1,T=x+n+2,w=x+1;a.push(M,v,w),a.push(v,T,w)}}this.setIndex(a),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Wl extends ue{constructor(t=new $i([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Wt(s,3)),this.setAttribute("normal",new Wt(o,3)),this.setAttribute("uv",new Wt(r,2));function c(h){const f=s.length/3,d=h.extractPoints(e);let u=d.shape;const m=d.holes;Dn.isClockWise(u)===!1&&(u=u.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];Dn.isClockWise(x)===!0&&(m[g]=x.reverse())}const _=Dn.triangulateShape(u,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];u=u.concat(x)}for(let g=0,p=u.length;g<p;g++){const x=u[g];s.push(x.x,x.y,0),o.push(0,0,1),r.push(x.x,x.y)}for(let g=0,p=_.length;g<p;g++){const x=_[g],M=x[0]+f,v=x[1]+f,T=x[2]+f;n.push(M,v,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return $_(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new Wl(n,t.curveSegments)}}function $_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class We extends ue{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],f=new N,d=new N,u=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let v=0;p===0&&r===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){const w=T/e;f.x=-t*Math.cos(s+w*o)*Math.sin(r+M*a),f.y=t*Math.cos(r+M*a),f.z=t*Math.sin(s+w*o)*Math.sin(r+M*a),m.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),g.push(w+v,1-M),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=h[p][x+1],v=h[p][x],T=h[p+1][x],w=h[p+1][x+1];(p!==0||r>0)&&u.push(M,v,w),(p!==n-1||l<Math.PI)&&u.push(v,T,w)}this.setIndex(u),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class un extends ue{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new N,f=new N,d=new N;for(let u=0;u<=n;u++)for(let m=0;m<=s;m++){const _=m/s*o,g=u/n*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(_),f.y=(t+e*Math.cos(g))*Math.sin(_),f.z=e*Math.sin(g),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let m=1;m<=s;m++){const _=(s+1)*u+m-1,g=(s+1)*(u-1)+m-1,p=(s+1)*(u-1)+m,x=(s+1)*u+m;r.push(_,g,x),r.push(g,p,x)}this.setIndex(r),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class jt extends Xi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xl extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class q_ extends Xl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ma=new re,oh=new N,rh=new N;class Bu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ol,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(oh),rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rh),e.updateMatrixWorld(),ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Y_ extends Bu{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Os*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class j_ extends Xl{constructor(t,e,n=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new Y_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Z_ extends Bu{constructor(){super(new wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class K_ extends Xl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Z_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class J_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ah(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ah();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ah(){return performance.now()}const lh=new re;class Hu{constructor(t,e,n=0,s=1/0){this.ray=new Rr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Nl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return lh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lh),this}intersectObject(t,e=!0,n=[]){return yl(t,this,n,e),n.sort(ch),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)yl(t[s],this,n,e);return n.sort(ch),n}}function ch(i,t){return i.distance-t.distance}function yl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)yl(o[r],t,e,!0)}}class hh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Q_ extends Vi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);const uh={type:"change"},$l={type:"start"},Gu={type:"end"},tr=new Rr,dh=new ui,tv=Math.cos(70*Fs.DEG2RAD),Le=new N,Ke=2*Math.PI,xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ga=1e-6;class ev extends Q_{constructor(t,e=null){super(t,e),this.state=xe.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:bs.ROTATE,TWO:bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new pn,this._lastTargetPosition=new N,this._quat=new pn().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hh,this._sphericalDelta=new hh,this._scale=1,this._panOffset=new N,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new N,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iv.bind(this),this._onPointerDown=nv.bind(this),this._onPointerUp=sv.bind(this),this._onContextMenu=uv.bind(this),this._onMouseWheel=av.bind(this),this._onKeyDown=lv.bind(this),this._onTouchStart=cv.bind(this),this._onTouchMove=hv.bind(this),this._onMouseDown=ov.bind(this),this._onMouseMove=rv.bind(this),this._interceptControlDown=dv.bind(this),this._interceptControlUp=fv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uh),this.update(),this.state=xe.NONE}update(t=null){const e=this.object.position;Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ke:n>Math.PI&&(n-=Ke),s<-Math.PI?s+=Ke:s>Math.PI&&(s-=Ke),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Le.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(tr.origin.copy(this.object.position),tr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tr.direction))<tv?this.object.lookAt(this.target):(dh.setFromNormalAndCoplanarPoint(this.object.up,this.target),tr.intersectPlane(dh,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>ga||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ga||this._lastTargetPosition.distanceToSquared(this.target)>ga?(this.dispatchEvent(uh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){this.screenSpacePanning===!0?Le.setFromMatrixColumn(e,1):(Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Le.copy(s).sub(this.target);let o=Le.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function nv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function iv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gu),this.state=xe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ov(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xe.DOLLY;break;case Ts.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xe.ROTATE}break;case Ts.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xe.PAN}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent($l)}function rv(i){switch(this.state){case xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function av(i){this.enabled===!1||this.enableZoom===!1||this.state!==xe.NONE||(i.preventDefault(),this.dispatchEvent($l),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Gu))}function lv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function cv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xe.TOUCH_ROTATE;break;case bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xe.TOUCH_PAN;break;default:this.state=xe.NONE}break;case 2:switch(this.touches.TWO){case bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xe.TOUCH_DOLLY_PAN;break;case bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xe.TOUCH_DOLLY_ROTATE;break;default:this.state=xe.NONE}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent($l)}function hv(i){switch(this._trackPointer(i),this.state){case xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xe.NONE}}function uv(i){this.enabled!==!1&&i.preventDefault()}function dv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}async function pv(i){const t=await fetch(i);if(!t.ok)throw new Error(`Failed to load ${i}: ${t.status}`);return t.json()}class mv{constructor(t){O(this,"n");O(this,"x");O(this,"z");O(this,"s");O(this,"length");O(this,"vtx");O(this,"vtz");const e=this.n=t.length/2;this.x=new Float64Array(e),this.z=new Float64Array(e),this.s=new Float64Array(e);for(let n=0;n<e;n++)this.x[n]=t[n*2],this.z[n]=t[n*2+1],n>0&&(this.s[n]=this.s[n-1]+Math.hypot(this.x[n]-this.x[n-1],this.z[n]-this.z[n-1]));this.length=this.s[e-1],this.vtx=new Float64Array(e),this.vtz=new Float64Array(e);for(let n=0;n<e;n++){const s=Math.max(0,n-1),o=Math.min(e-1,n+1),r=this.x[o]-this.x[s],a=this.z[o]-this.z[s],l=Math.hypot(r,a)||1;this.vtx[n]=r/l,this.vtz[n]=a/l}}segIndex(t){let e=0,n=this.n-2;for(;e<n;){const s=e+n+1>>1;this.s[s]<=t?e=s:n=s-1}return e}frame(t,e={x:0,z:0,tx:0,tz:1,nx:-1,nz:0}){const n=this.segIndex(t),s=(t-this.s[n])/(this.s[n+1]-this.s[n]||1);e.x=this.x[n]+(this.x[n+1]-this.x[n])*s,e.z=this.z[n]+(this.z[n+1]-this.z[n])*s;let o=this.vtx[n]+(this.vtx[n+1]-this.vtx[n])*s,r=this.vtz[n]+(this.vtz[n+1]-this.vtz[n])*s;const a=Math.hypot(o,r)||1;return o/=a,r/=a,e.tx=o,e.tz=r,e.nx=-r,e.nz=o,e}point(t,e){const n=this.frame(t);return[n.x+n.nx*e,n.z+n.nz*e]}project(t,e,n=-1){let s,o;if(n>=0){const h=this.segIndex(n);s=Math.max(0,h-60),o=Math.min(this.n-2,h+60)}else{let h=1/0,f=0;for(let d=0;d<this.n;d+=8){const u=(t-this.x[d])**2+(e-this.z[d])**2;u<h&&(h=u,f=d)}s=Math.max(0,f-24),o=Math.min(this.n-2,f+24)}let r=1/0,a=0,l=1;for(let h=s;h<=o;h++){const f=this.x[h],d=this.z[h],u=this.x[h+1]-f,m=this.z[h+1]-d,_=u*u+m*m||1e-9;let g=((t-f)*u+(e-d)*m)/_;g=g<0?0:g>1?1:g;const p=f+u*g,x=d+m*g,M=(t-p)**2+(e-x)**2;M<r&&(r=M,a=this.s[h]+Math.sqrt(_)*g,l=(t-f)*-m+(e-d)*u>=0?1:-1)}const c=Math.sqrt(r);return{s:a,d:c*l,dist:c}}}function Pn(i,t,e=0){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const fh=i=>i*i*(3-2*i);function gv(i,t,e=0){const n=Math.floor(i),s=Math.floor(t),o=fh(i-n),r=fh(t-s),a=Pn(n,s,e),l=Pn(n+1,s,e),c=Pn(n,s+1,e),h=Pn(n+1,s+1,e);return(a+(l-a)*o+(c-a)*r+(a-l-c+h)*o*r)*2-1}function pi(i,t,e=4,n=0){let s=0,o=.5,r=1;for(let a=0;a<e;a++)s+=o*gv(i*r,t*r,n+a*17),o*=.5,r*=2.03;return s}function vi(i){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Se=(i,t,e)=>i<t?t:i>e?e:i,Ms=(i,t,e)=>i+(t-i)*e,De=(i,t,e)=>{const n=Se((e-i)/(t-i),0,1);return n*n*(3-2*n)},yn=5.2,fi=2.2,bl=3.1,_v=1.6,vv=15,er=22*4.4,xv=.8,Mv=7,yv=3,bv=.04,ph=.08;class wv{constructor(t,e,n,s=[],o=0){O(this,"bodies",[]);O(this,"gates",[]);O(this,"groups",[]);O(this,"events",[]);O(this,"hwTable");O(this,"hwStep",.5);O(this,"overflowCooldown",0);this.length=n,this.windingHoles=s;const r=[];for(const d of[...t].sort((u,m)=>u.s0-m.s0)){const u=r.at(-1);u&&Math.abs(u.at(-1).s1-d.s0)<4?u.push(d):r.push([d])}let a=o,l=0,c=0;for(const d of r){const u=d.length>1,m=u?Sv(d):d[0].name;this.bodies.push({kind:"pound",s0:l,s1:d[0].s0,level:a,lo:a,hi:a,label:"the canal"});const _={name:m,staircase:u,gates:[],bodies:[this.bodies.length-1]};this.groups.push(_);for(let g=0;g<d.length;g++){const p=d[g],x=g===0?p.s0:d[g-1].s1,M=a,v=a+p.rise,T=u?g>0:c++%2===1,w=u?`chamber ${g+1}`:"the lock";this.bodies.push({kind:"chamber",s0:x,s1:p.s1,level:T?v:M,lo:M,hi:v,lockName:m,label:w}),_.bodies.push(this.bodies.length-1),a=v}l=d.at(-1).s1;for(let g=0;g<=d.length;g++){const p=this.bodies.length-1-d.length+g,x=g===0?"bottom gates":g===d.length?"top gates":d.length===2?"middle gates":d.length===3?`middle gates (${g===1?"lower":"upper"})`:`middle gates ${g}`,M={s:g===0?d[0].s0:d[g-1].s1,below:p,above:p+1,open:0,wantOpen:!1,paddle:0,wantPaddle:!1,flow:0,lockName:m,label:x,group:_};this.gates.push(M),_.gates.push(M)}_.bodies.push(this.bodies.length)}this.bodies.push({kind:"pound",s0:l,s1:n,level:a,lo:a,hi:a,label:"the canal"});const h=Math.ceil(n/this.hwStep)+1;this.hwTable=new Float32Array(h);const f=e.filter(d=>d.kind==="road"&&d.w<12);for(let d=0;d<h;d++){const u=d*this.hwStep;let m=yn;for(const _ of this.bodies){if(_.kind!=="chamber")continue;const g=Math.max(_.s0-u,u-_.s1,0);m=Math.min(m,fi+(yn-fi)*De(.5,9,g))}for(const _ of f){const g=Math.max(Math.abs(u-_.s)-_.w/2-3.5,0);m=Math.min(m,bl+(yn-bl)*De(0,7,g))}for(const _ of s){const g=Math.abs(u-_);g<40&&(m=Math.max(m,yn+(vv-yn)*De(40,16,g)))}this.hwTable[d]=m}}bodyIndexAt(t){for(let e=0;e<this.bodies.length;e++)if(t<this.bodies[e].s1)return e;return this.bodies.length-1}levelAt(t){return this.bodies[this.bodyIndexAt(t)].level}bedAt(t){return this.bodies[this.bodyIndexAt(t)].lo-_v}halfWidthAt(t){const e=Se(t/this.hwStep,0,this.hwTable.length-1),n=Math.floor(e),s=e-n,o=this.hwTable[n],r=this.hwTable[Math.min(n+1,this.hwTable.length-1)];return o+(r-o)*s}levelsMatch(t){return Math.abs(this.bodies[t.below].level-this.bodies[t.above].level)<bv}openBlocker(t){return this.levelsMatch(t)?null:`The water's ${Math.abs(this.bodies[t.below].level-this.bodies[t.above].level).toFixed(1)} m higher on one side, so the gates won't budge. Raise the paddles first.`}toggleGate(t,e){if(t.wantOpen)return e?"The boat's in the way of the gates.":(t.wantOpen=!1,null);const n=this.openBlocker(t);return n||(t.wantOpen=!0,null)}togglePaddle(t){t.wantPaddle=!t.wantPaddle}gateBlocks(t){return t.open<.97}update(t){this.overflowCooldown-=t;for(const n of this.gates)n.open=Se(n.open+(n.wantOpen?1:-1)*(t/Mv),0,1),n.paddle=Se(n.paddle+(n.wantPaddle?1:-1)*(t/yv),0,1);const e=this.bodies.map(n=>n.kind==="chamber"?n.lo:-1/0);for(let n=!0;n;){n=!1;for(const s of this.gates){if(s.open<=.02)continue;const o=Math.max(e[s.below],e[s.above]);(e[s.below]!==o||e[s.above]!==o)&&(e[s.below]=e[s.above]=o,n=!0)}}for(const n of this.gates){const s=xv*n.paddle+(n.open>.02?40*n.open:0),o=this.bodies[n.below],a=this.bodies[n.above].level-o.level;if(n.flow=0,s<=0||Math.abs(a)<1e-5)continue;const[l,c]=a>0?[n.above,n.below]:[n.below,n.above],h=this.bodies[l],f=this.bodies[c],d=h.kind==="chamber",u=f.kind==="chamber";if(!d&&!u)continue;let m=s*Math.sqrt(2*9.81*Math.abs(a))*t;d&&(m=Math.min(m,Math.max(0,h.level-e[l])*er)),m=Math.min(m,Math.abs(a)*er/(d&&u?2:1)),!(m<=0)&&(d&&(h.level-=m/er),u&&(f.level+=m/er),n.flow=Math.sign(a)*(m/t))}this.bodies.forEach((n,s)=>{if(n.kind!=="chamber"||n.level<=n.hi+ph||(n.level=n.hi+ph,this.overflowCooldown>0))return;const o=this.gates.find(l=>l.paddle>.05&&(l.below===s&&this.bodies[l.above].level>n.level||l.above===s&&this.bodies[l.below].level>n.level)),r=this.gates.find(l=>l.below===s||l.above===s).group,a=r.staircase?`${n.label} of ${r.name}`:r.name;this.events.push({text:o?`${mh(a)} is overflowing: the paddles on the ${o.label} are still up.`:`${mh(a)} is overflowing!`,kind:"warn",group:r}),this.overflowCooldown=12})}}const mh=i=>i[0].toUpperCase()+i.slice(1);function Sv(i){const t=i[0].name.split(" ")[0];return i.every(e=>e.name.startsWith(t))?`${t} Staircase`:`${i[0].name} flight`}const Ev=2,_a=1.1,gh=44,nr=8,Tv=.8,oe=1,Je={bed:new kt("#2a2f24"),wallStone:new kt("#77706a"),wallSandstone:new kt("#9b5644"),coping:new kt("#bdb3a3"),towpath:new kt("#b59d78"),grass:new kt("#6f9a4c"),grassDark:new kt("#5c8a42"),field:new kt("#86a85a"),paved:new kt("#8f8b84"),park:new kt("#5e9445")};class Av{constructor(t,e,n){O(this,"bank");O(this,"smoothBank");O(this,"bankStep",2);O(this,"riverLevel");O(this,"riverDist",null);O(this,"riverGrid",{x0:0,z0:0,w:0,h:0,cell:20});O(this,"urbanAt",()=>0);O(this,"parkAt",()=>!1);O(this,"embankments",[]);O(this,"cuttings",[]);this.route=t,this.ww=e,this.bounds=n;const s=Math.ceil(t.length/this.bankStep)+1,o=new Float32Array(s);for(let r=0;r<s;r++){const a=r*this.bankStep;let l=-1/0;for(const c of e.bodies)c.s1>a-4&&c.s0<a+4&&(l=Math.max(l,c.hi));o[r]=l+Tv}this.bank=o,this.smoothBank=vh(vh(o,15),15),this.riverLevel=e.bodies[0].lo-6}bankTop(t){return _h(this.bank,t/this.bankStep)}setRivers(t){const{bounds:e}=this,n=this.riverGrid.cell,s=Math.ceil((e.x1-e.x0)/n)+1,o=Math.ceil((e.z1-e.z0)/n)+1;this.riverGrid={x0:e.x0,z0:e.z0,w:s,h:o,cell:n};const r=new Float32Array(s*o).fill(1e9);for(const a of t)for(let l=0;l+3<a.p.length;l+=2){const c=a.p[l],h=a.p[l+1],f=a.p[l+2],d=a.p[l+3],u=120,m=Math.max(0,Math.floor((Math.min(c,f)-u-e.x0)/n)),_=Math.min(s-1,Math.ceil((Math.max(c,f)+u-e.x0)/n)),g=Math.max(0,Math.floor((Math.min(h,d)-u-e.z0)/n)),p=Math.min(o-1,Math.ceil((Math.max(h,d)+u-e.z0)/n));for(let x=g;x<=p;x++)for(let M=m;M<=_;M++){const v=Cv(e.x0+M*n,e.z0+x*n,c,h,f,d)-a.w/2;v<r[x*s+M]&&(r[x*s+M]=v)}}this.riverDist=r}riverDistAt(t,e){if(!this.riverDist)return 1e9;const n=this.riverGrid,s=Se((t-n.x0)/n.cell,0,n.w-1.001),o=Se((e-n.z0)/n.cell,0,n.h-1.001),r=Math.floor(s),a=Math.floor(o),l=s-r,c=o-a,h=this.riverDist;return Ms(Ms(h[a*n.w+r],h[a*n.w+r+1],l),Ms(h[(a+1)*n.w+r],h[(a+1)*n.w+r+1],l),c)}cliffSide(t,e){return this.cuttings.some(n=>n.side===e&&t>n.s0-25&&t<n.s1+25)}cuttingAt(t,e){for(const n of this.cuttings){if(t<n.s0-40||t>n.s1+40)continue;const s=De(n.s0-30,n.s0+15,t)*(1-De(n.s1-15,n.s1+30,t)),o=this.ww.halfWidthAt(t),r=Math.abs(e);if(Math.sign(e)===n.side){const l=De(o+3.3,o+6.2,r);return{h:n.cliff*l*s,cliff:s*(r>o+3.2&&r<o+6.5?1:0)}}const a=De(o+3.6,o+16,r);return{h:n.far*a*s,cliff:s*(a>.05&&a<.6?.7:0)}}return{h:0,cliff:0}}landHeight(t,e,n,s){const o=this.ww.halfWidthAt(n),r=Math.abs(s);let a=Ms(this.bankTop(n),_h(this.smoothBank,n/this.bankStep),De(o+3,o+24,r));const l=De(o+6,140,r);a+=pi(t*.004,e*.004,3,7)*3.5*l+pi(t*.03,e*.03,2,3)*.35*De(o+3,o+12,r);const c=this.riverDistAt(t,e);c<40&&(a=Ms(this.riverLevel-1.5,a,De(-2,40,c))),a+=this.cuttingAt(n,s).h;for(const h of this.embankments){const f=t-h.x,d=e-h.z;if(Math.abs(f)+Math.abs(d)>h.halfSpan+60)continue;const u=Math.abs(f*h.ux+d*h.uz),m=Math.abs(-f*h.uz+d*h.ux),_=De(h.halfWidth+5,h.halfWidth,m);if(_<=0)continue;const g=h.deck-.15-Math.max(0,u-h.halfSpan*.9)/10;g>a&&(a=a+(g-a)*_)}return a}heightAt(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s);return n.dist<s?this.ww.bedAt(n.s):this.landHeight(t,e,n.s,n.d)}buildStrip(){const{route:t,ww:e}=this,n=[];for(let m=0;m<t.length;m+=Ev)n.push(m);n.push(t.length);for(const m of e.gates)n.push(m.s-.05,m.s+.05,m.s+_a-.05,m.s+_a+.05);n.sort((m,_)=>m-_);const s=n.length,o=m=>[[0,"bed"],[m-.8,"bed"],[m,"wallBase"],[m,"wallTop"],[m+.5,"coping"],[m+.55,"path"],[m+2.6,"path"],[m+3.4,"land"],[m+6.3,"land"],[m+7,"land"],[Math.max(14,m+9),"land"],[Math.max(22,m+15),"land"],[Math.max(32,m+24),"land"],[Math.max(gh,m+34),"land"]],r=o(yn).length,a=r*2-1,l=new Float32Array(s*a*3),c=new Float32Array(s*a*3),h={x:0,z:0,tx:0,tz:0,nx:0,nz:0},f=new kt;for(let m=0;m<s;m++){const _=n[m];t.frame(_,h);const g=e.halfWidthAt(_),p=this.bankTop(_),x=e.gates.find(y=>_>=y.s&&_<y.s+_a),M=e.bedAt(x?x.s-.01:_),v=e.bodies[e.bodyIndexAt(_)].kind==="chamber"||g<yn-.5,T=Rv(t,_),w=o(g);for(let y=0;y<a;y++){const C=y<r-1?-1:1,S=C<0?r-1-y:y-(r-1);let[b,L]=w[S];L==="land"&&Math.abs(T)>1e-4&&Math.sign(T)===C&&(b=Math.min(b,Math.max(g+3.6,.8/Math.abs(T))));const H=h.x+h.nx*b*C,z=h.z+h.nz*b*C,V=C===oe||v;let k;switch(L){case"bed":k=M,f.copy(Je.bed);break;case"wallBase":k=M+.2,f.copy(v?Je.wallSandstone:Je.wallStone);break;case"wallTop":k=p,f.copy(v?Je.wallSandstone:Je.wallStone);break;case"coping":k=p+.04,f.copy(Je.coping);break;case"path":k=p,f.copy(V?Je.towpath:Je.grassDark);break;default:k=this.landHeight(H,z,_,b*C),this.groundColour(H,z,_,b*C,f)}L==="path"&&V&&f.offsetHSL(0,0,(Pn(m,y,5)-.5)*.04);const F=(m*a+y)*3;l[F]=H,l[F+1]=k,l[F+2]=z,c[F]=f.r,c[F+1]=f.g,c[F+2]=f.b}}const d=xh(l,c,s,a,!0),u=new J(d,yh());return u.receiveShadow=!0,u.name="strip",u}buildFar(){const{bounds:t,route:e,ww:n}=this,s=Math.ceil((t.x1-t.x0)/nr)+1,o=Math.ceil((t.z1-t.z0)/nr)+1,r=new Float32Array(s*o*3),a=new Float32Array(s*o*3),l=new kt;let c=-1;for(let d=0;d<o;d++)for(let u=0;u<s;u++){const m=t.x0+u*nr,_=t.z0+d*nr,g=e.project(m,_,c),p=g.dist>150?e.project(m,_):g;c=p.dist<150?p.s:-1;const x=n.halfWidthAt(p.s);let M;p.dist<x+14?M=n.bedAt(p.s)-3:p.dist<gh?M=this.landHeight(m,_,p.s,p.d)-.15:M=this.landHeight(m,_,p.s,p.d),this.groundColour(m,_,p.s,p.d,l);const v=(d*s+u)*3;r[v]=m,r[v+1]=M,r[v+2]=_,a[v]=l.r,a[v+1]=l.g,a[v+2]=l.b}const h=xh(r,a,o,s),f=new J(h,yh());return f.receiveShadow=!0,f.name="far-terrain",f}groundColour(t,e,n,s,o){const r=Math.abs(s),a=Math.floor(t/150+pi(t*.01,e*.01,2,1)*.6),l=Math.floor(e/130+pi(t*.01,e*.01,2,2)*.6),c=Pn(a,l,11);o.copy(Je.grass).lerp(Je.field,c*.8),o.offsetHSL(0,0,(Pn(Math.floor(t/4),Math.floor(e/4),3)-.5)*.035),this.parkAt(t,e)&&o.lerp(Je.park,.7);const h=this.urbanAt(t,e)*De(8,20,r);o.lerp(Je.paved,h*.85);const f=this.riverDistAt(t,e);f<12&&o.lerp(Je.bed,De(12,0,f)*.5);const d=this.cuttingAt(n,s);d.cliff>0&&o.lerp(Je.wallSandstone,d.cliff).offsetHSL(0,0,(Pn(Math.floor(t/2),Math.floor(e/3),8)-.5)*.06)}}function Rv(i,t){const e=i.frame(Math.max(0,t-8)),n=i.frame(Math.min(i.length,t+8)),s=n.tx-e.tx,o=n.tz-e.tz,r=i.frame(t);return(s*r.nx+o*r.nz)/16}function _h(i,t){t=Se(t,0,i.length-1);const e=Math.floor(t);return Ms(i[e],i[Math.min(e+1,i.length-1)],t-e)}function vh(i,t){const e=new Float32Array(i.length);for(let n=0;n<i.length;n++){let s=0,o=0;for(let r=-t;r<=t;r++){const a=n+r;a>=0&&a<i.length&&(s+=i[a],o++)}e[n]=s/o}return e}function Cv(i,t,e,n,s,o){const r=s-e,a=o-n,l=Se(((i-e)*r+(t-n)*a)/(r*r+a*a||1),0,1);return Math.hypot(i-e-r*l,t-n-a*l)}function xh(i,t,e,n,s=!1){const o=new Uint32Array((e-1)*(n-1)*6);let r=0;for(let l=0;l<e-1;l++)for(let c=0;c<n-1;c++){const h=l*n+c,f=h+1,d=h+n,u=d+1;s?(o[r++]=h,o[r++]=f,o[r++]=d,o[r++]=f,o[r++]=u,o[r++]=d):(o[r++]=h,o[r++]=d,o[r++]=f,o[r++]=f,o[r++]=d,o[r++]=u)}const a=new ue;return a.setAttribute("position",new Pe(i,3)),a.setAttribute("color",new Pe(t,3)),a.setIndex(new Pe(o,1)),a.computeVertexNormals(),a}let Mh=null;function yh(){return Mh??(Mh=new jt({vertexColors:!0,roughness:.95,flatShading:!0})),Mh}function Pv(i=256){const t=new Float32Array(i*i),e=8;for(let r=0;r<i;r++)for(let a=0;a<i;a++){const l=a/i*e,c=r/i*e;t[r*i+a]=bh(l,c,e)*.6+bh(l*2,c*2,e*2)*.3}const n=new ImageData(i,i);for(let r=0;r<i;r++)for(let a=0;a<i;a++){const l=t[r*i+(a-1+i)%i],c=t[r*i+(a+1)%i],h=t[(r-1+i)%i*i+a],f=t[(r+1)%i*i+a],d=(l-c)*3,u=(h-f)*3,m=1,_=Math.hypot(d,u,m),g=(r*i+a)*4;n.data[g]=(d/_*.5+.5)*255,n.data[g+1]=(u/_*.5+.5)*255,n.data[g+2]=(m/_*.5+.5)*255,n.data[g+3]=255}const s=document.createElement("canvas");s.width=s.height=i,s.getContext("2d").putImageData(n,0,0);const o=new Un(s);return o.wrapS=o.wrapT=Is,o}function bh(i,t,e){const n=i/e,s=t/e,o=pi(i,t,3,2),r=pi(i-e,t,3,2),a=pi(i,t-e,3,2),l=pi(i-e,t-e,3,2);return(o*(1-n)+r*n)*(1-s)+(a*(1-n)+l*n)*s}class Lv{constructor(t,e){O(this,"group",new Et);O(this,"material");O(this,"normalMap");O(this,"chamberMeshes",[]);this.route=t,this.ww=e,this.normalMap=Pv(),this.material=new jt({color:"#3d5c47",roughness:.12,metalness:0,normalMap:this.normalMap,normalScale:new ot(.28,.28),transparent:!0,opacity:.93,envMapIntensity:.9}),e.bodies.forEach((n,s)=>{const o=this.ribbon(n.s0-.15,n.s1+.15),r=new J(o,this.material);r.position.y=n.level,r.receiveShadow=!0,this.group.add(r),n.kind==="chamber"&&this.chamberMeshes.push({mesh:r,body:s})})}ribbon(t,e){const{route:n,ww:s}=this;t=Math.max(0,t),e=Math.min(n.length,e);const o=Math.max(2,Math.ceil((e-t)/1.5)+1),r=[],a=[],l=[];for(let h=0;h<o;h++){const f=t+(e-t)*h/(o-1),d=n.frame(f),u=s.halfWidthAt(f)+.12;for(const m of[-1,1]){const _=d.x+d.nx*u*m,g=d.z+d.nz*u*m;r.push(_,0,g),a.push(_/7,g/7)}if(h>0){const m=(h-1)*2;l.push(m,m+1,m+2,m+1,m+3,m+2)}}const c=new ue;return c.setAttribute("position",new Wt(r,3)),c.setAttribute("uv",new Wt(a,2)),c.setIndex(l),c.computeVertexNormals(),c}addRivers(t,e){for(const n of t){const s=[],o=[],r=[],a=n.p.length/2;for(let h=0;h<a;h++){const f=Math.max(0,h-1),d=Math.min(a-1,h+1);let u=n.p[d*2]-n.p[f*2],m=n.p[d*2+1]-n.p[f*2+1];const _=Math.hypot(u,m)||1;u/=_,m/=_;for(const g of[-1,1]){const p=n.p[h*2]-m*(n.w/2)*g,x=n.p[h*2+1]+u*(n.w/2)*g;s.push(p,e,x),o.push(p/7,x/7)}if(h>0){const g=(h-1)*2;r.push(g,g+2,g+1,g+1,g+2,g+3)}}const l=new ue;l.setAttribute("position",new Wt(s,3)),l.setAttribute("uv",new Wt(o,2)),l.setIndex(r),l.computeVertexNormals();const c=this.material.clone();c.side=Te,c.color.set("#4a6a5c"),this.group.add(new J(l,c))}}addPond(t,e){const n=new $i;for(let l=0;l<t.length;l+=2)(l?n.lineTo:n.moveTo).call(n,t[l],-t[l+1]);const s=new Wl(n);s.rotateX(-Math.PI/2);const o=s.getAttribute("position"),r=s.getAttribute("uv");for(let l=0;l<o.count;l++)r.setXY(l,o.getX(l)/7,o.getZ(l)/7);const a=new J(s,this.material);a.position.y=e,this.group.add(a)}update(t){this.normalMap.offset.x+=t*.012,this.normalMap.offset.y+=t*.007;for(const e of this.chamberMeshes)e.mesh.position.y=this.ww.bodies[e.body].level}}const vo=["brick","brickDark","render","whiteRender","tudor","sandstone","warehouse","modern","gothic","tower","shed","white"],le={house:0,shop:1,upper:2,plain:3},xn=128,wl=4,ir=3,Dv=3.6,Iv=3.1;function va(i,t,e,n,s,o,r,a=.08){i.fillStyle=o,i.fillRect(t,e,n,s);for(let l=0;l*6<s;l++)for(let c=-1;c*14<n;c++){const h=t+c*14+l%2*7,f=e+l*6,d=1+Math.sin(l*12.9+c*78.2)*.5*a*2;i.fillStyle=xo(o,d),i.fillRect(h+1,f+1,12,4)}i.fillStyle=r,i.globalAlpha=.25;for(let l=e;l<e+s;l+=6)i.fillRect(t,l,n,1);i.globalAlpha=1}function xo(i,t){const e=new kt(i);return e.multiplyScalar(t),`#${e.getHexString()}`}function xa(i,t,e,n,s,o="#f4f1e8",r="#d9cfbd"){const a=t-n/2;i.fillStyle=r,i.fillRect(a-4,e-7,n+8,6),i.fillRect(a-3,e+s,n+6,4),i.fillStyle=o,i.fillRect(a,e,n,s);const l=i.createLinearGradient(0,e,0,e+s);l.addColorStop(0,"#5d7486"),l.addColorStop(1,"#22303b"),i.fillStyle=l,i.fillRect(a+4,e+4,n-8,s/2-5),i.fillRect(a+4,e+s/2+1,n-8,s/2-5),i.fillStyle=o,i.fillRect(t-1,e+4,2,s-8)}function Uv(i,t,e,n,s,o){i.fillStyle="#e9e2d2",i.fillRect(t-3,e-s-4,n+6,s+4),i.fillStyle=o,i.fillRect(t,e-s,n,s),i.fillStyle="#2a3640",i.beginPath(),i.arc(t+n/2,e-s,n/2,Math.PI,0),i.fill(),i.fillStyle="#c9a24a",i.fillRect(t+n-8,e-s/2,3,3)}function wh(i,t,e,n,s,o){i.fillStyle=o,i.fillRect(t+2,e+18,n-4,16),i.fillStyle="#f2e6c4",i.globalAlpha=.85,i.fillRect(t+14,e+23,n-28,5),i.globalAlpha=1,i.fillStyle=xo(o,.8),i.fillRect(t+4,e+36,n-8,s-38);const r=i.createLinearGradient(0,e+40,0,e+s);r.addColorStop(0,"#6c8596"),r.addColorStop(1,"#2b3943"),i.fillStyle=r,i.fillRect(t+9,e+40,n-18,s-58),i.fillStyle=xo(o,.8),i.fillRect(t+n/2-2,e+40,4,s-58)}function Ma(i,t,e,n,s,o="#2b3943",r="#d9cfbd"){i.fillStyle=r,i.beginPath(),i.moveTo(t-n/2-3,e+s+3),i.lineTo(t-n/2-3,e+n/2),i.arc(t,e+n/2,n/2+3,Math.PI,0),i.lineTo(t+n/2+3,e+s+3),i.fill(),i.fillStyle=o,i.beginPath(),i.moveTo(t-n/2,e+s),i.lineTo(t-n/2,e+n/2),i.arc(t,e+n/2,n/2,Math.PI,0),i.lineTo(t+n/2,e+s),i.fill()}function Nv(i,t,e,n,s){i.fillStyle="#d6b49a",i.beginPath(),i.moveTo(t-n/2-4,e+s+4),i.lineTo(t-n/2-4,e+n),i.quadraticCurveTo(t-n/2-4,e-6,t,e-10),i.quadraticCurveTo(t+n/2+4,e-6,t+n/2+4,e+n),i.lineTo(t+n/2+4,e+s+4),i.fill(),i.fillStyle="#2a3440",i.beginPath(),i.moveTo(t-n/2,e+s),i.lineTo(t-n/2,e+n),i.quadraticCurveTo(t-n/2,e,t,e-4),i.quadraticCurveTo(t+n/2,e,t+n/2,e+n),i.lineTo(t+n/2,e+s),i.fill(),i.fillStyle="#8a6a55",i.fillRect(t-1,e,2,s)}function Ov(i,t,e,n,s){const o=xn,r=["#1f4d3a","#7a1f2b","#1d3557","#2b2b2b","#5a3d1e"],a=r[vo.indexOf(t)%r.length];switch(t){case"brick":case"brickDark":case"render":case"whiteRender":{const l={brick:"#a2513f",brickDark:"#7d3f31",render:"#e6dcc8",whiteRender:"#f1ede4"}[t];t.startsWith("brick")?va(i,n,s,o,o,l,"#d8cdb8"):(i.fillStyle=l,i.fillRect(n,s,o,o)),e===le.upper?xa(i,n+o/2,s+30,46,66):e===le.house?(Uv(i,n+18,s+o-6,34,78,["#1f4d3a","#7a1f2b","#1d3557","#2b2b2b"][n/o%4|0]),xa(i,n+92,s+38,40,58)):e===le.shop&&wh(i,n,s,o,o,a),i.fillStyle=xo(l,.75),i.fillRect(n,s+o-4,o,4);break}case"tudor":{i.fillStyle="#f4f1ea",i.fillRect(n,s,o,o),i.fillStyle="#1e1b19";for(const l of[0,60,120])i.fillRect(n+l,s,8,o);if(i.fillRect(n,s+4,o,7),i.fillRect(n,s+o-10,o,8),e===le.upper){i.lineWidth=6,i.strokeStyle="#1e1b19",i.beginPath(),i.moveTo(n+8,s+o-10),i.lineTo(n+30,s+70),i.moveTo(n+120,s+o-10),i.lineTo(n+98,s+70),i.stroke(),i.fillStyle="#2a3440",i.fillRect(n+30,s+22,68,42),i.strokeStyle="#8a8d8a",i.lineWidth=1;for(let l=0;l<9;l++)i.beginPath(),i.moveTo(n+30+l*9,s+22),i.lineTo(n+30+l*9-20,s+64),i.stroke()}else e!==le.plain&&wh(i,n+8,s+10,o-16,o-18,"#1e1b19");break}case"sandstone":case"gothic":case"tower":{const l=t==="tower"?"#7d3f31":"#b5735a";if(t==="tower")va(i,n,s,o,o,l,"#c8b8a0");else{i.fillStyle=l,i.fillRect(n,s,o,o),i.strokeStyle=xo(l,.82),i.lineWidth=1;for(let c=0;c*16<o;c++){i.beginPath(),i.moveTo(n,s+c*16),i.lineTo(n+o,s+c*16),i.stroke();for(let h=0;h*32<o;h++){const f=n+h*32+c%2*16;i.beginPath(),i.moveTo(f,s+c*16),i.lineTo(f,s+c*16+16),i.stroke()}}}if(e===le.plain)break;t==="gothic"?Nv(i,n+o/2,s+24,40,96):t==="tower"?(i.fillStyle="#1f2730",i.fillRect(n+o/2-5,s+40,10,34)):xa(i,n+o/2,s+34,40,60,"#e9e2d2","#c49a80");break}case"warehouse":{if(va(i,n,s,o,o,"#80402f","#c9b8a0"),e===le.plain)break;e===le.upper?(Ma(i,n+36,s+34,30,52),Ma(i,n+92,s+34,30,52)):Ma(i,n+o/2,s+26,62,o-30,"#2e3b2c");break}case"modern":{i.fillStyle="#b9bcbf",i.fillRect(n,s,o,o),i.fillStyle="#a6a9ad";for(let c=0;c<o;c+=32)i.fillRect(n+c,s,2,o);if(e===le.plain)break;const l=i.createLinearGradient(0,s+26,0,s+100);l.addColorStop(0,"#7f97a8"),l.addColorStop(1,"#30404c"),i.fillStyle=l,i.fillRect(n,s+(e===le.upper?28:18),o,e===le.upper?62:104),i.fillStyle="#d6d8da";for(let c=0;c<o;c+=32)i.fillRect(n+c,s+18,3,110);break}case"shed":{i.fillStyle="#7b7f78",i.fillRect(n,s,o,o),i.fillStyle="#6c706a";for(let l=0;l<o;l+=8)i.fillRect(n+l,s,3,o);break}case"white":i.fillStyle="#ffffff",i.fillRect(n,s,o,o);break}}let ya=null;function Fv(){if(ya)return ya.material;const i=document.createElement("canvas");i.width=xn*wl,i.height=xn*vo.length;const t=i.getContext("2d");vo.forEach((s,o)=>{for(let r=0;r<wl;r++)Ov(t,s,r,r*xn,o*xn)});const e=new Un(i);e.colorSpace=Ce,e.anisotropy=4;const n=new jt({map:e,vertexColors:!0,roughness:.88});return n.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 cell;
varying vec4 vCell;
varying vec2 vRep;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vCell = cell;
vRep = uv;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vCell;
varying vec2 vRep;`).replace("#include <map_fragment>",`// repeat this wall's atlas cell; gradients from the unwrapped coords avoid seams
        vec2 cellUv = vCell.xy + fract(vRep) * vCell.zw;
        vec4 sampledDiffuseColor = textureGrad(map, cellUv, dFdx(vRep) * vCell.zw, dFdy(vRep) * vCell.zw);
        diffuseColor *= sampledDiffuseColor;`)},ya={texture:e,material:n},n}function gs(i,t){const e=vo.indexOf(i),n=xn*wl,s=xn*vo.length,o=(t*xn+ir)/n,r=(xn-2*ir)/n,a=1-((e+1)*xn-ir)/s,l=(xn-2*ir)/s;return[o,a,r,l]}const ba={slate:["#4d525b","#585d66","#43474f"],tile:["#7d3d30","#8a4a37"],flat:["#6a6a68","#757370"]},wa=(i,t)=>i[Math.floor(t*i.length)%i.length];class kv{constructor(t){O(this,"cell",3);O(this,"w");O(this,"h");O(this,"data");this.b=t,this.w=Math.ceil((t.x1-t.x0)/this.cell),this.h=Math.ceil((t.z1-t.z0)/this.cell),this.data=new Uint8Array(this.w*this.h)}mark(t,e,n){const s=this.cell;for(let o=Math.floor((e-n-this.b.z0)/s);o<=Math.floor((e+n-this.b.z0)/s);o++)for(let r=Math.floor((t-n-this.b.x0)/s);r<=Math.floor((t+n-this.b.x0)/s);r++)r>=0&&o>=0&&r<this.w&&o<this.h&&(this.data[o*this.w+r]=1)}markPolygon(t){let e=1/0,n=-1/0,s=1/0,o=-1/0;for(let a=0;a<t.length;a+=2)e=Math.min(e,t[a]),n=Math.max(n,t[a]),s=Math.min(s,t[a+1]),o=Math.max(o,t[a+1]);const r=this.cell;for(let a=s-r;a<=o+r;a+=r)for(let l=e-r;l<=n+r;l+=r)ql(l,a,t)&&this.mark(l,a,2)}used(t,e){const n=Math.floor((t-this.b.x0)/this.cell),s=Math.floor((e-this.b.z0)/this.cell);return n<0||s<0||n>=this.w||s>=this.h||this.data[s*this.w+n]===1}}function ql(i,t,e){let n=!1;for(let s=0,o=e.length-2;s<e.length;o=s,s+=2){const r=e[s],a=e[s+1],l=e[o],c=e[o+1];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function zv(i,t){const n=Math.ceil((t.x1-t.x0)/30)+1,s=Math.ceil((t.z1-t.z0)/30)+1,o=new Float32Array(n*s);for(const a of i){let l=0,c=0,h=0;const f=a.p,d=f.length/2;for(let _=0;_<d;_++){const g=(_+1)%d;l+=f[_*2]*f[g*2+1]-f[g*2]*f[_*2+1],c+=f[_*2]/d,h+=f[_*2+1]/d}const u=Math.floor((c-t.x0)/30),m=Math.floor((h-t.z0)/30);u>=0&&m>=0&&u<n&&m<s&&(o[m*n+u]+=Math.abs(l)/2)}const r=new Float32Array(n*s);for(let a=0;a<s;a++)for(let l=0;l<n;l++){let c=0;for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++){const d=Math.min(n-1,Math.max(0,l+f)),u=Math.min(s-1,Math.max(0,a+h));c+=o[u*n+d]}r[a*n+l]=Math.min(1,c/9/(30*30)*3)}return(a,l)=>{const c=Math.floor((a-t.x0)/30),h=Math.floor((l-t.z0)/30);return c<0||h<0||c>=n||h>=s?0:r[h*n+c]}}class to{constructor(){O(this,"pos",[]);O(this,"col",[]);O(this,"nrm",[]);O(this,"uv",[]);O(this,"cell",[]);O(this,"curCell",[0,0,0,0]);O(this,"a",new N);O(this,"b",new N);O(this,"n",new N)}tri(t,e,n,s,o,r){if(this.a.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),this.b.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),this.n.crossVectors(this.a,this.b).normalize(),o){const a=(t[0]+e[0]+n[0])/3-o[0],l=(t[1]+e[1]+n[1])/3-o[1],c=(t[2]+e[2]+n[2])/3-o[2];this.n.x*a+this.n.y*l+this.n.z*c<0&&([e,n]=[n,e],r&&(r=[r[0],r[2],r[1]]),this.n.negate())}[t,e,n].forEach((a,l)=>{this.pos.push(a[0],a[1],a[2]),this.col.push(s.r,s.g,s.b),this.nrm.push(this.n.x,this.n.y,this.n.z);const c=(r==null?void 0:r[l])??[.5,.5];this.uv.push(c[0],c[1]),this.cell.push(...this.curCell)})}geometry(){const t=new ue;return t.setAttribute("position",new Wt(this.pos,3)),t.setAttribute("normal",new Wt(this.nrm,3)),t.setAttribute("color",new Wt(this.col,3)),t.setAttribute("uv",new Wt(this.uv,2)),t.setAttribute("cell",new Wt(this.cell,4)),t}}class Bv{constructor(t,e,n,s,o){O(this,"group",new Et);O(this,"occ");O(this,"roofs");O(this,"carPaths",[]);this.data=t,this.route=e,this.ww=n,this.terrain=s,this.bridges=o,this.occ=new kv(s.bounds),this.roofs=new Float32Array(this.occ.w*this.occ.h).fill(-1/0)}isFree(t,e){return!this.occ.used(t,e)}roofAt(t,e){const{occ:n}=this,s=Math.floor((t-n.b.x0)/n.cell),o=Math.floor((e-n.b.z0)/n.cell);return s<0||o<0||s>=n.w||o>=n.h?-1/0:this.roofs[o*n.w+s]}markRoof(t,e){const{occ:n}=this;let s=1/0,o=-1/0,r=1/0,a=-1/0;for(let l=0;l<t.length;l+=2)s=Math.min(s,t[l]),o=Math.max(o,t[l]),r=Math.min(r,t[l+1]),a=Math.max(a,t[l+1]);for(let l=Math.floor((r-n.b.z0)/n.cell);l<=Math.floor((a-n.b.z0)/n.cell);l++)for(let c=Math.floor((s-n.b.x0)/n.cell);c<=Math.floor((o-n.b.x0)/n.cell);c++)c<0||l<0||c>=n.w||l>=n.h||ql(n.b.x0+(c+.5)*n.cell,n.b.z0+(l+.5)*n.cell,t)&&(this.roofs[l*n.w+c]=Math.max(this.roofs[l*n.w+c],e))}build(t){return(async()=>{await t("Laying out roads…"),this.buildRoads(),await t("Building Chester…"),this.buildBuildings(),await t("Planting trees…"),this.buildTrees()})()}buildBuildings(){const t=new to,e=new kt;for(let s=0;s<this.data.buildings.length;s++){const o=this.data.buildings[s];let r=o.p;const a=r.length/2;if(a<3)continue;this.occ.markPolygon(r);let l=0;for(let g=0;g<a;g++){const p=(g+1)%a;l+=r[g*2]*r[p*2+1]-r[p*2]*r[g*2+1]}if(l>0){const g=[];for(let p=a-1;p>=0;p--)g.push(r[p*2],r[p*2+1]);r=g}let c=1/0;for(let g=0;g<a;g++)c=Math.min(c,this.terrain.heightAt(r[g*2],r[g*2+1]));const h=c+o.h;this.markRoof(r,h+1.5);const f=Pn(s,7,1),d=Pn(s,3,2),u=this.styleFor(o,f,d,r);e.set(u.roof);const m=new kt(1,1,1).multiplyScalar(.9+d*.1);this.walls(t,r,c,h,u.style,u.ground,m),!u.flat&&a===4&&o.h<=13&&Gv(r)&&Math.abs(l)/2<400?this.gableRoof(t,r,h,m,e,u.style):this.flatRoof(t,r,h,e),this.landmarkExtras(t,o,r,h,e)}const n=new J(t.geometry(),Fv());n.castShadow=n.receiveShadow=!0,n.name="buildings",this.group.add(n)}walls(t,e,n,s,o,r,a){const l=e.length/2,c=s-n,h=Math.max(1,Math.round(c/Iv)),f=c/h,d=n-1.5;for(let u=0;u<l;u++){const m=(u+1)%l,_=e[u*2],g=e[u*2+1],p=e[m*2],x=e[m*2+1],M=Math.hypot(p-_,x-g),v=M<1.6,T=Math.max(1,Math.round(M/Dv)),w=(y,C,S,b,L)=>{t.curCell=gs(o,v?le.plain:L),t.tri([_,y,g],[p,y,x],[p,C,x],a,void 0,[[0,S],[T,S],[T,b]]),t.tri([_,y,g],[p,C,x],[_,C,g],a,void 0,[[0,S],[T,b],[0,b]])};w(d,n+f,-(n-d)/f,1,r),h>1&&w(n+f,s,0,h-1,o==="shed"?le.plain:le.upper)}}flatRoof(t,e,n,s){const o=e.length/2;t.curCell=gs("white",le.plain);const r=[];for(let a=0;a<o;a++)r.push(new ot(e[a*2],e[a*2+1]));for(const[a,l,c]of Dn.triangulateShape(r,[]))t.tri([e[a*2],n,e[a*2+1]],[e[l*2],n,e[l*2+1]],[e[c*2],n,e[c*2+1]],s,[e[a*2],n-10,e[a*2+1]])}styleFor(t,e,n,s){const o=t.t,r=wa(ba.slate,n),a=wa(ba.flat,n);if(o==="wall_tower")return{style:"sandstone",ground:le.plain,roof:"#c9a58a",flat:!0};if(o==="shot_tower")return{style:"tower",ground:le.upper,roof:"#4a3a32",flat:!0};if(o==="town_hall"||o.startsWith("cathedral")||o==="church"||o==="chapel"||/cathedral|church|chapel/i.test(t.n??""))return{style:"gothic",ground:le.upper,roof:"#5a6068",flat:!0};if(["garage","garages","shed","roof","hut","carport"].includes(o)||t.h<4)return{style:"shed",ground:le.plain,roof:a,flat:!0};if(["industrial","warehouse"].includes(o))return{style:"warehouse",ground:le.house,roof:r,flat:!1};const[l,c]=[s[0],s[1]],h=this.terrain.urbanAt(l,c);if(t.h<=13&&h>.45&&e<.09)return{style:"tudor",ground:le.shop,roof:r,flat:!1};if(["commercial","retail","office","supermarket","hotel"].includes(o)||t.h>14)return e<.55?{style:"modern",ground:le.shop,roof:a,flat:!0}:{style:e<.8?"brick":"warehouse",ground:le.shop,roof:a,flat:!0};if(o==="apartments")return{style:e<.5?"modern":"brick",ground:le.house,roof:a,flat:e<.5};const f=h>.5&&n<.3?le.shop:le.house;return{style:e<.55?"brick":e<.7?"brickDark":e<.87?"render":e<.96?"whiteRender":"sandstone",ground:f,roof:n<.8?r:wa(ba.tile,e),flat:!1}}landmarkExtras(t,e,n,s,o){const r=n.length/2;let a=0,l=0;for(let _=0;_<r;_++)a+=n[_*2]/r,l+=n[_*2+1]/r;const c=s-e.h,h=new kt(1,1,1),f=(_,g)=>{const p=[];for(let x=0;x<4;x++){const M=g+x*Math.PI/2+Math.PI/4;p.push(a+Math.cos(M)*_*Math.SQRT2,l+Math.sin(M)*_*Math.SQRT2)}return p.reverse()};let d=0,u=0;for(let _=0;_<r;_++){const g=(_+1)%r,p=Math.hypot(n[g*2]-n[_*2],n[g*2+1]-n[_*2+1]);p>d&&(d=p,u=Math.atan2(n[g*2+1]-n[_*2+1],n[g*2]-n[_*2]))}const m=(_,g,p)=>{t.curCell=gs("white",le.plain);for(let x=0;x<4;x++){const M=(x+1)%4;t.tri([_[x*2],g,_[x*2+1]],[_[M*2],g,_[M*2+1]],[a,g+p,l],o,[a,g,l])}};if(e.t==="shot_tower"){const _=[];for(let g=0;g<r;g++)_.push(a+(n[g*2]-a)*1.12,l+(n[g*2+1]-l)*1.12);this.walls(t,_,s-1.6,s+.4,"tower",le.plain,h),this.flatRoof(t,_,s+.4,o)}else if(e.t==="town_hall"){const _=f(4.5,u);this.walls(t,_,c,c+40,"gothic",le.upper,h),m(_,c+40,10)}else if(e.t==="cathedral_main"){const _=f(7,u);this.walls(t,_,c,c+38,"gothic",le.upper,h),this.flatRoof(t,_,c+38,o);for(let g=0;g<4;g++){const p=_[g*2],x=_[g*2+1],M=[p-.8,x-.8,p-.8,x+.8,p+.8,x+.8,p+.8,x-.8];this.walls(t,M,c+38,c+41,"sandstone",le.plain,h),t.curCell=gs("white",le.plain);for(let v=0;v<4;v++){const T=(v+1)%4;t.tri([M[v*2],c+41,M[v*2+1]],[M[T*2],c+41,M[T*2+1]],[p,c+43.5,x],o,[p,c+41,x])}}}}gableRoof(t,e,n,s,o,r){const a=[0,1,2,3].map(g=>[e[g*2],e[g*2+1]]),l=(g,p)=>Math.hypot(g[0]-p[0],g[1]-p[1]);l(a[0],a[1])<l(a[1],a[2])&&a.push(a.shift());const c=l(a[1],a[2]),h=Math.min(c*.42,4),f=(g,p)=>[(g[0]+p[0])/2,(g[1]+p[1])/2],d=f(a[3],a[0]),u=f(a[1],a[2]),m=(g,p)=>[g[0],p,g[1]],_=[(a[0][0]+a[2][0])/2,n-1,(a[0][1]+a[2][1])/2];t.curCell=gs("white",le.plain),t.tri(m(a[0],n),m(a[1],n),m(u,n+h),o,_),t.tri(m(a[0],n),m(u,n+h),m(d,n+h),o,_),t.tri(m(a[2],n),m(a[3],n),m(d,n+h),o,_),t.tri(m(a[2],n),m(d,n+h),m(u,n+h),o,_),t.curCell=gs(r,le.plain),t.tri(m(a[1],n),m(a[2],n),m(u,n+h),s,_),t.tri(m(a[3],n),m(a[0],n),m(d,n+h),s,_)}buildRoads(){const t=new to,e=new to,n=new to,s=new to,o=new kt(1,1,1),r=new kt("#6d635a"),a={footway:0,path:0,cycleway:0,steps:0,track:0,service:1,residential:2,living_street:2,unclassified:2,tertiary:3,secondary:4,primary:5,trunk:6,motorway:6,pedestrian:1},l=new Set(["footway","path","cycleway","steps","track","pedestrian"]),c=new Set(["residential","unclassified","tertiary","secondary","primary","trunk","motorway"]),h=new Set([...c,"service","living_street"]),f=new Set(["tertiary","secondary","primary","trunk"]),d=new Map;for(const p of this.data.roads){if(l.has(p.k))continue;const x=new Set;for(let M=0;M<p.p.length;M+=2)x.add(`${p.p[M]},${p.p[M+1]}`);for(const M of x)d.set(M,(d.get(M)??0)+1)}const u=20,m=new Map;for(const[p,x]of d){if(x<2)continue;const[M,v]=p.split(",").map(Number),T=`${Math.floor(M/u)},${Math.floor(v/u)}`;m.has(T)||m.set(T,[]),m.get(T).push([M,v])}const _=(p,x)=>{let M=1/0;const v=Math.floor(p/u),T=Math.floor(x/u);for(let w=-1;w<=1;w++)for(let y=-1;y<=1;y++)for(const[C,S]of m.get(`${v+w},${T+y}`)??[])M=Math.min(M,Math.hypot(p-C,x-S));return M};for(const p of this.data.roads){const x=l.has(p.k)?n:c.has(p.k)&&p.w>=6?t:e,M=x===t?{plain:e,dist:_,clear:p.w/2+6}:void 0,v=this.ribbon(x,p.p,p.w,o,.05+(a[p.k]??1)*.012,!0,l.has(p.k)?2:6,M,l.has(p.k));v&&h.has(p.k)&&(v.crosses||f.has(p.k))&&this.carPaths.push({pts:v.pts,w:p.w,bridge:v.crosses})}for(const p of this.data.rails)p.skip?this.markLine(p.p,3.5):this.ribbon(s,p.p,4.2,r,.1,!0,4);const g=(p,x,M)=>{const v=new J(p.geometry(),new jt({map:x,vertexColors:!0,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));v.receiveShadow=!0,v.name=M,this.group.add(v)};for(const p of this.data.junctions??[]){const x=this.route.project(p.x,p.z),M=this.ww.halfWidthAt(x.s);if(x.dist<M+2)continue;const v=(x.dist<M+3.5?this.terrain.bankTop(x.s):this.terrain.landHeight(p.x,p.z,x.s,x.d))+.14;e.curCell=[0,0,0,0];const T=16;for(let w=0;w<T;w++){const y=w/T*Math.PI*2,C=(w+1)/T*Math.PI*2,S=[p.x+Math.cos(y)*p.r,v,p.z+Math.sin(y)*p.r],b=[p.x+Math.cos(C)*p.r,v,p.z+Math.sin(C)*p.r];e.tri([p.x,v,p.z],S,b,o,[p.x,v-5,p.z],[[.5,.5],[.5+Math.cos(y)*.4,.5],[.5+Math.cos(C)*.4,.6]])}}g(t,vr("major"),"roads"),g(e,vr("lane"),"lanes"),g(n,vr("foot"),"footways"),g(s,null,"ballast")}markLine(t,e){for(let n=0;n+3<t.length;n+=2){const s=t[n],o=t[n+1],r=t[n+2],a=t[n+3],l=Math.max(1,Math.ceil(Math.hypot(r-s,a-o)/2));for(let c=0;c<=l;c++)this.occ.mark(s+(r-s)*c/l,o+(a-o)*c/l,e)}}ribbon(t,e,n,s,o,r,a,l,c=!1){const h=[];for(let v=0;v+3<e.length;v+=2){const T=e[v],w=e[v+1],y=e[v+2],C=e[v+3],S=Math.max(1,Math.ceil(Math.hypot(y-T,C-w)/4));for(let b=0;b<S;b++)h.push([T+(y-T)*b/S,w+(C-w)*b/S])}if(h.push([e[e.length-2],e[e.length-1]]),h.length<2)return null;const f=h.map(([v,T])=>this.route.project(v,T));if(c&&f.filter(T=>T.dist<this.ww.halfWidthAt(T.s)+7).length/f.length>.4)return null;const d=f,u=d.map(v=>this.bridges.rampAt(v.s,v.d));let m=!1;for(let v=1;v<d.length;v++)Math.sign(d[v].d)!==Math.sign(d[v-1].d)&&Math.min(d[v].dist,d[v-1].dist)<20&&(u[v].onDeck||u[v-1].onDeck)&&(m=!0);const _=h.map(([v,T],w)=>{const y=d[w],C=this.ww.halfWidthAt(y.s),S=y.dist<C+3.5?this.terrain.bankTop(y.s):this.terrain.landHeight(v,T,y.s,y.d);return(m?Math.max(S,u[w].y):S)+o}),g=n/2,p=h.map((v,T)=>{const w=(z,V)=>{const k=h[V][0]-h[z][0],F=h[V][1]-h[z][1],j=Math.hypot(k,F)||1;return[-F/j,k/j]},y=T>0?w(T-1,T):w(T,T+1),C=T<h.length-1?w(T,T+1):y;let S=y[0]+C[0],b=y[1]+C[1];const L=Math.hypot(S,b)||1;S/=L,b/=L;const H=Math.min(2,1/Math.max(.5,S*C[0]+b*C[1]));return[S*H,b*H]});let x=0,M=!1;for(let v=0;v<h.length-1;v++){const T=d[v],w=d[v+1],y=Math.hypot(h[v+1][0]-h[v][0],h[v+1][1]-h[v][1]),C=x/a,S=(x+y)/a;if(x+=y,m&&Math.sign(T.d)!==Math.sign(w.d)&&u[v].onDeck&&(M=!0),(Math.min(T.dist,w.dist)<this.ww.halfWidthAt(T.s)+4||Math.sign(T.d)!==Math.sign(w.d))&&!(u[v].onDeck&&u[v+1].onDeck)||m&&u[v].onDeck&&u[v+1].onDeck)continue;const[L,H]=h[v],[z,V]=h[v+1],[k,F]=p[v],[j,$]=p[v+1],lt=[L-k*g,_[v],H-F*g],ft=[L+k*g,_[v],H+F*g],yt=[z-j*g,_[v+1],V-$*g],zt=[z+j*g,_[v+1],V+$*g],Ht=l&&Math.min(l.dist(L,H),l.dist(z,V))<l.clear?l.plain:t;Ht.tri(lt,ft,zt,s,[L,_[v]-5,H],[[0,C],[1,C],[1,S]]),Ht.tri(lt,zt,yt,s,[L,_[v]-5,H],[[0,C],[1,S],[0,S]]),r&&this.occ.mark(L,H,g+1.5)}return{pts:h.map(([v,T],w)=>[v,_[w],T]),crosses:M}}buildTrees(){const t=vi(1234),e=[],{route:n,ww:s,terrain:o,occ:r}=this,a=(M,v)=>{if(r.used(M,v))return!1;const T=n.project(M,v);return T.dist>s.halfWidthAt(T.s)+4.2};for(let M=0;M<n.length;M+=5)for(const v of[-1,1]){if(t()>.6)continue;const T=s.halfWidthAt(M)+4.5+t()*t()*30,[w,y]=n.point(M,T*v);t()<o.urbanAt(w,y)*.85||a(w,y)&&e.push({x:w,z:y,s:.8+t()*.7,kind:t()<.15?1:0})}const l=o.bounds,c=(l.x1-l.x0)*(l.z1-l.z0);for(let M=0;M<c*9e-4;M++){const v=l.x0+t()*(l.x1-l.x0),T=l.z0+t()*(l.z1-l.z0),y=o.parkAt(v,T)?.7:(1-o.urbanAt(v,T))*.35*De(.75,.2,Math.abs(Hv(v,T)));t()>y||a(v,T)&&e.push({x:v,z:T,s:.8+t()*.9,kind:t()<.1?1:0})}for(let M=0;M<this.data.trees.length;M+=2)e.push({x:this.data.trees[M],z:this.data.trees[M+1],s:1.1,kind:0});const h=new Qe(1,0),f=new Qt(.18,.25,1,5);f.translate(0,.5,0);const d=new dn(h,new jt({roughness:.9,flatShading:!0}),e.length),u=new dn(f,new jt({color:"#5a4636",roughness:1}),e.length),m=new re,_=new pn,g=new N,p=new N,x=["#4f7a3a","#5d8a40","#3f6b35","#6b9446","#557d3c"].map(M=>new kt(M));e.forEach((M,v)=>{const T=o.heightAt(M.x,M.z),w=(M.kind===1?9:4.5)*M.s;_.setFromAxisAngle(new N(0,1,0),t()*Math.PI*2),p.set(M.x,T-.2,M.z),g.set(M.s,w*.45,M.s),u.setMatrixAt(v,m.compose(p,_,g)),p.set(M.x,T+w*.45+(M.kind===1?w*.35:w*.3),M.z),M.kind===1?g.set(1.3*M.s,w*.5,1.3*M.s):g.set(2.6*M.s,2.3*M.s,2.6*M.s),d.setMatrixAt(v,m.compose(p,_,g)),d.setColorAt(v,x[Math.floor(t()*x.length)].clone().offsetHSL(0,0,(t()-.5)*.06))}),d.castShadow=u.castShadow=!0,d.receiveShadow=!0,d.name="trees",this.group.add(d,u)}}function Hv(i,t){return Math.sin(i*.011+Math.sin(t*.007)*2)*Math.cos(t*.013+Math.sin(i*.005)*2)}function Gv(i){for(let t=0;t<4;t++){const e=t,n=(t+1)%4,s=(t+2)%4,o=i[n*2]-i[e*2],r=i[n*2+1]-i[e*2+1],a=i[s*2]-i[n*2],l=i[s*2+1]-i[n*2+1],c=(o*a+r*l)/(Math.hypot(o,r)*Math.hypot(a,l)||1);if(Math.abs(c)>.2)return!1}return!0}function vr(i){const n=document.createElement("canvas");n.width=128,n.height=256;const s=n.getContext("2d"),o=vi(i.length*7);if(i==="foot"){s.fillStyle="#b3ad9f",s.fillRect(0,0,128,256);for(let a=0;a<256;a+=64)for(let l=0;l<128;l+=64)s.fillStyle=`hsl(40, 8%, ${62+o()*8}%)`,s.fillRect(l+2,a+2,60,60)}else{s.fillStyle="#4f5256",s.fillRect(0,0,128,256);for(let a=0;a<2500;a++)s.fillStyle=o()<.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.08)",s.fillRect(o()*128,o()*256,2,2);i==="major"&&(s.fillStyle="#e9e7df",s.fillRect(6,0,3,256),s.fillRect(119,0,3,256),s.fillRect(128/2-2,0,4,256*.5))}const r=new Un(n);return r.colorSpace=Ce,r.wrapS=Wn,r.wrapT=Is,r.anisotropy=4,r}const _s={brick:new jt({color:"#8b4a3b",roughness:.9,flatShading:!0}),sandstone:new jt({color:"#a8654f",roughness:.9,flatShading:!0}),concrete:new jt({color:"#a39f97",roughness:.85,flatShading:!0}),iron:new jt({color:"#3d434b",roughness:.6,metalness:.3,flatShading:!0}),coping:new jt({color:"#c4bba9",roughness:.9,flatShading:!0})},Sh=Math.tan(55*Math.PI/180);class Vv{constructor(t,e,n,s){O(this,"group",new Et);O(this,"placed",[]);O(this,"ray",new Hu);O(this,"faded",new Map);const o=[];for(const r of n){const a=o.at(-1);if(a&&a.kind==="rail"&&r.kind==="rail"&&r.s-r.w/2<a.s+a.w/2+6){const l=Math.min(a.s-a.w/2,r.s-r.w/2),c=Math.max(a.s+a.w/2,r.s+r.w/2);o[o.length-1]={...a,s:(l+c)/2,w:c-l}}else o.push(r)}for(const r of o){const a=t.frame(r.s),l=e.levelAt(r.s),c=r.kind==="road"&&r.w<12,h=Math.sin(r.dir),f=Math.cos(r.dir),d=h*a.nx+f*a.nz,u=h*a.tx+f*a.tz,m=Fs.clamp(u/(Math.abs(d)<.001?.001:d),-Sh,Sh),_=yn+8,g=yn+8,p=Math.max(...[-1,1].map(V=>{const[k,F]=t.point(r.s,g*V);return s.landHeight(k,F,r.s,g*V)})),x=Math.max(l+(c?3.4:4.6),p+.2),M=new Et;M.position.set(a.x,0,a.z),M.rotation.y=Math.atan2(-a.nz,a.nx);const v=Math.max(r.w+.8,3.2)*Math.sqrt(1+m*m);let T=a.nx+a.tx*m,w=a.nz+a.tz*m;const y=Math.hypot(T,w);T/=y,w/=y;const C=Math.max(1.2,Math.max(r.w+.8,3.2)/2-.4);this.placed.push({data:r,x:a.x,z:a.z,deck:x,halfSpan:_,arch:c,depth:v,tanSkew:m,ax:T,az:w,roadHalf:C});const S=c?Wv(_,bl+.05,l,x):Xv(_,yn+1.2,l,x),b=new zs(S,{depth:v,bevelEnabled:!1,curveSegments:10});b.translate(0,0,-v/2);const L=c?r.w<=3.5?_s.sandstone:_s.brick:r.kind==="rail"?_s.iron:_s.concrete,H=new J(b,L);H.castShadow=H.receiveShadow=!0,M.add(H);for(const V of[-1,1]){const k=new J(new Vt(_*2*.92,1,.35),c?_s.coping:L);k.position.set(0,x+.5,V*(v/2-.12)),k.castShadow=!0,M.add(k)}if(!c)for(const V of[-1,1]){const k=new J(new Vt(1.2,x-l+1.15,v+.3),_s.concrete);k.position.set(V*(yn+1.2+.6-.08),(x-1.15+l-2.3)/2,0),M.add(k)}if(r.kind==="road"){const V=v/2-.3,k=x+.03,F=new ue;F.setAttribute("position",new Wt([-_,k,-V,_,k,-V,_,k,V,-_,k,V],3));const j=r.w<=3.5?2:6;F.setAttribute("uv",new Wt([0,0,0,2*_/j,1,2*_/j,1,0],2)),F.setIndex([0,2,1,0,3,2]),F.computeVertexNormals();const $=new J(F,new jt({map:vr(r.w<=3.5?"foot":"major"),roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,side:Te}));$.receiveShadow=!0,M.add($)}const z=new re().makeShear(0,-m,0,0,0,0);for(const V of M.children){const k=V;k.updateMatrix(),k.geometry=k.geometry.applyMatrix4(k.matrix).applyMatrix4(z),k.position.set(0,0,0),k.rotation.set(0,0,0)}M.traverse(V=>{const k=V;k.isMesh&&(k.material=k.material.clone())}),M.name=`bridge:${r.name??r.s}`,this.group.add(M)}}rampAt(t,e){let n=-1/0,s=!1;for(const o of this.placed){if(Math.abs(t-(o.data.s+o.tanSkew*e))>o.depth/2+1)continue;const a=Math.abs(e);a<=o.halfSpan&&(s=!0),!(a>o.halfSpan+30)&&(n=Math.max(n,o.deck-Math.max(0,a-o.halfSpan*.85)/9))}return{y:n,onDeck:s}}updateOcclusion(t,e,n){const s=e.clone().sub(t),o=s.length();this.ray.set(t,s.normalize()),this.ray.far=o;const r=new Set(this.ray.intersectObjects(this.group.children,!0).map(a=>a.object.parent));for(const a of this.group.children){const l=this.faded.get(a)??1,c=r.has(a)?.18:1;if(l===c)continue;const h=l+Math.sign(c-l)*Math.min(Math.abs(c-l),n*4);this.faded.set(a,h),a.traverse(f=>{const d=f.material;d&&(d.transparent=h<1,d.opacity=h,d.depthWrite=h>=1)})}}at(t){return this.placed.find(e=>Math.abs(e.data.s-t)<e.data.w/2+1)}}function Wv(i,t,e,n){const s=n-e,o=e-2.2,r=e+Math.max(.9,s*.3),a=e+Math.max(2.75,s*.72),l=new $i;l.moveTo(-i,o),l.lineTo(-t,o),l.lineTo(-t,r);const c=14;for(let h=1;h<c;h++){const f=Math.PI-Math.PI*h/c;l.lineTo(Math.cos(f)*t,r+Math.sin(f)*(a-r))}return l.lineTo(t,r),l.lineTo(t,o),l.lineTo(i,o),l.lineTo(i,n),l.lineTo(-i,n),l.closePath(),l}function Xv(i,t,e,n){const s=e-2.2,o=n-1.1,r=new $i;return r.moveTo(-i,s),r.lineTo(-t,s),r.lineTo(-t,o),r.lineTo(t,o),r.lineTo(t,s),r.lineTo(i,s),r.lineTo(i,n),r.lineTo(-i,n),r.closePath(),r}const Eh=18*Math.PI/180,$v=fi+.15,Tn={gate:new jt({color:"#1d1c1a",roughness:.8,flatShading:!0}),white:new jt({color:"#f1efe8",roughness:.7}),gear:new jt({color:"#2b2f33",roughness:.5,metalness:.5}),rack:new jt({color:"#c9c3b5",roughness:.4,metalness:.6}),foam:new Zn({color:"#f4f7f2",transparent:!0,opacity:0,depthWrite:!1}),highlight:new Zn({color:"#ffd76a",transparent:!0,opacity:.55,depthWrite:!1})};class qv{constructor(t,e,n){O(this,"group",new Et);O(this,"visuals",[]);O(this,"time",0);this.ww=e;for(const o of e.gates){const r=t.frame(o.s),a=new Et;a.position.set(r.x,0,r.z),a.rotation.y=Math.atan2(r.tx,r.tz);const l=e.bodies[o.above].hi,c=e.bodies[o.below].lo-1.6,h=n.bankTop(o.s),f=l+.4,d=fi/Math.cos(Eh)+.15,u=[],m=[];for(const p of[-1,1]){const x=new Et;x.position.set(p*$v,0,0);const M=f-c,v=new J(new Vt(d,M,.32),Tn.gate);v.position.set(d/2,c+M/2,0),v.castShadow=!0,x.add(v);const T=Math.max(h,f)+.75,w=new J(new Vt(4.6,.32,.32),Tn.gate);w.position.set(-2.1,T,0),w.castShadow=!0,x.add(w);const y=new J(new Vt(.7,.34,.34),Tn.white);y.position.set(-4.1,T,0),x.add(y);const C=new J(new Vt(.3,T-f+.2,.3),Tn.gate);C.position.set(.1,(T+f)/2,0),x.add(C);const S=new J(new Vt(.3,.45,.3),Tn.gear);S.position.set(d*.55,f+.22,-.2),x.add(S);const b=new J(new Vt(.08,.9,.08),Tn.rack);b.position.set(d*.55,f+.45,-.2),b.userData.y0=b.position.y,x.add(b),m.push(b);const L=new J(new Vt(d,.06,.06),Tn.white);L.position.set(d/2,f+.95,-.35),x.add(L),x.scale.x=p<0?1:-1,a.add(x),u.push({pivot:x,sign:p})}const _=new J(new Qn(fi*2,5),Tn.foam.clone());_.rotation.x=-Math.PI/2,_.position.set(0,0,-2.8),a.add(_);const g=new J(new Dr(fi+.6,fi+1,32),Tn.highlight);g.rotation.x=-Math.PI/2,g.position.y=h+.08,g.visible=!1,a.add(g),this.group.add(a),this.visuals.push({gate:o,leaves:u,racks:m,foam:_,ring:g,root:a})}const s=new Map;for(const o of e.gates)o.label==="top gates"&&s.set(o.lockName,o);for(const[o,r]of s){const a=t.frame(r.s+3),l=Yv(o),c=(fi+3.2)*oe;l.position.set(a.x+a.nx*c,n.bankTop(r.s+3),a.z+a.nz*c),l.rotation.y=Math.atan2(oe*a.tz,-oe*a.tx),this.group.add(l)}}setSelected(t){for(const e of this.visuals)e.ring.visible=e.gate===t}update(t){this.time+=t;for(const e of this.visuals){const n=e.gate,s=n.open*n.open*(3-2*n.open);for(const{pivot:a,sign:l}of e.leaves){const c=Eh,h=Math.PI/2;a.rotation.y=(c+(h-c)*s)*l}for(const a of e.racks)a.position.y=a.userData.y0+n.paddle*.55;const o=this.ww.bodies[n.below].level,r=Math.min(1,Math.abs(n.flow)/3);e.foam.position.y=o+.03,e.foam.material.opacity=r*(.55+.15*Math.sin(this.time*9)),e.foam.scale.y=.7+r*.5+.08*Math.sin(this.time*5.3),e.ring.visible&&(e.ring.material.opacity=.4+.25*Math.sin(this.time*4))}}}function Yv(i){const t=document.createElement("canvas");t.width=512,t.height=128;const e=t.getContext("2d");e.fillStyle="#1e3d2f",e.fillRect(0,0,512,128),e.strokeStyle="#e8d9a8",e.lineWidth=6,e.strokeRect(8,8,496,112),e.fillStyle="#f3ead0",e.font="600 44px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText(i,256,66,470);const n=new Un(t);n.colorSpace=Ce;const s=new Et,o=new J(new Qn(2.4,.6),new jt({map:n,side:Te}));o.position.y=1.9,s.add(o);for(const r of[-1,1]){const a=new J(new Vt(.1,2.2,.1),Tn.white);a.position.set(r,1.1,0),s.add(a)}return s}class Mo extends J{constructor(){const t=Mo.SkyShader,e=new Kn({name:t.name,uniforms:xu.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Ze,depthWrite:!1});super(new Vt(1,1,1),e),this.isSky=!0}}Mo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new N},up:{value:new N(0,1,0)}},vertexShader:`
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

		}`};class jv{constructor(t,e){O(this,"sky",new Mo);O(this,"sun",new K_("#fff4e0",3));O(this,"hemi",new q_("#cfe3ff","#5d6b45",.9));O(this,"envScene",new Cu);O(this,"envSky",new Mo);O(this,"pmrem");O(this,"envTarget",null);O(this,"lastEnvHour",-99);O(this,"sunDir",new N);O(this,"hour",10.5);this.scene=t,this.sky.scale.setScalar(2e4),this.envSky.scale.setScalar(2e4);for(const o of[this.sky,this.envSky]){const r=o.material.uniforms;r.turbidity.value=5,r.rayleigh.value=1.4,r.mieCoefficient.value=.004,r.mieDirectionalG.value=.82}this.envScene.add(this.envSky),t.add(this.sky,this.sun,this.sun.target,this.hemi),this.pmrem=new gl(e);const n=this.sun.shadow;this.sun.castShadow=!0,n.mapSize.set(2048,2048);const s=n.camera;s.left=s.bottom=-90,s.right=s.top=90,s.near=1,s.far=600,n.bias=-4e-4,n.normalBias=.03,t.fog=new kl("#c9d6dc",300,2400)}get sunElevation(){const t=(this.hour-7)/11.5;return Math.sin(Se(t,-.15,1.15)*Math.PI)*32-(t<0||t>1?6:0)}get isNight(){return this.sunElevation<-2}update(t,e){var a;this.hour=(this.hour+t)%24;const n=Fs.degToRad(this.sunElevation),s=Fs.degToRad(100+(this.hour-6)/13*160);this.sunDir.setFromSphericalCoords(1,Math.PI/2-n,s);for(const l of[this.sky,this.envSky])l.material.uniforms.sunPosition.value.copy(this.sunDir);const o=De(-4,8,this.sunElevation),r=1-De(4,20,this.sunElevation);this.sun.intensity=3.2*De(-2,6,this.sunElevation),this.sun.color.setHSL(.09,.5+r*.4,.92-r*.18),this.hemi.intensity=.2+o*.7,this.scene.fog.color.setHSL(.56,.18,.12+o*.68),this.sun.position.copy(e).addScaledVector(this.sunDir,300),this.sun.target.position.copy(e),Math.abs(this.hour-this.lastEnvHour)>.25&&(this.lastEnvHour=this.hour,(a=this.envTarget)==null||a.dispose(),this.envTarget=this.pmrem.fromScene(this.envScene,0,1,25e3),this.scene.environment=this.envTarget.texture)}}function Zv(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new ue;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;o[u]===void 0&&(o[u]=[]),o[u].push(f.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in f.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0;const f=[];for(let d=0;d<i.length;++d){const u=i[d].index;for(let m=0;m<u.count;++m)f.push(u.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(f)}for(const h in o){const f=Th(o[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){const u=[];for(let _=0;_<r[h].length;++_)u.push(r[h][_][d]);const m=Th(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Th(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Pe(r,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let d=0,u=h.count;d<u;d++)for(let m=0;m<e;m++){const _=h.getComponent(d,m);a.setComponent(d+f,m,_)}}else r.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Jn(i,t,e){i.updateMatrixWorld(!0);const n=i.matrixWorld.clone().invert(),s=[],o=new re;return i.traverse(r=>{const a=r;if(!a.isMesh||e&&!e(a))return;const l=Array.isArray(a.material)?a.material:[a.material];if(l.some(m=>m.map)){t==null||t(a);return}const c=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();c.applyMatrix4(o.multiplyMatrices(n,a.matrixWorld));const h=c.getAttribute("position").count,f=new Float32Array(h*3),d=c.groups.length?c.groups:[{start:0,count:h,materialIndex:0}];for(const m of d){const _=(l[m.materialIndex??0]??l[0]).color;for(let g=m.start;g<Math.min(h,m.start+m.count);g++)f.set([_.r,_.g,_.b],g*3)}const u=new ue;u.setAttribute("position",c.getAttribute("position")),u.setAttribute("normal",c.getAttribute("normal")),u.setAttribute("color",new Pe(f,3)),s.push(u)}),Zv(s)}const $n=()=>new jt({vertexColors:!0,roughness:.75,flatShading:!0}),Kv=["#f1c6a5","#e3b08f","#c98d68","#9a6542","#6b4229"],Jv=["#2b1d14","#5a3a22","#a0703c","#d9b36c","#8f8f8f","#161616"],Qv=["#2d3a55","#1f2328","#6b5a3f","#3d4a3a","#4a4a55"],ao=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400","#34495e","#16a085","#7f8c8d","#e84393","#6d4c41","#1f4d3a"],tx=["short","short","long","bun","beanie","cap","bald"];function Hi(i,t={}){const e=n=>n[Math.floor(i()*n.length)];return{coat:e(ao),trousers:e(Qv),skin:e(Kv),hair:e(Jv),hairStyle:e(tx),hat:e(["#b03a2e","#2e4a7a","#3d5a3d","#5a4a3a","#d4a017"]),longCoat:i()<.3,...t}}const Gn=(i,t=.8)=>new jt({color:i,roughness:t}),Ah=i=>(i.userData.part="coat",i);function Gi(i={}){const t={...Hi(Math.random),...i},e=new Et,n=Gn(t.coat,.7),s=Gn(t.skin,.6),o=Gn(t.trousers,.85),r=Gn(t.hair,.9),a=t.longCoat?.62:.86,l=[[.001,a],[t.longCoat?.2:.155,a],[.16,.98],[.165,1.15],[.2,1.36],[.17,1.45],[.075,1.5],[.001,1.5]].map(([w,y])=>new ot(w,y)),c=Ah(new J(new Hl(l,12),n));c.scale.z=.72,e.add(c);const h=new J(new Qt(.045,.05,.1,8),s);h.position.y=1.54,e.add(h);const f=new J(new We(.1,14,10),s);f.scale.set(.92,1.1,1),f.position.y=1.67,e.add(f);const d=new J(new Yn(.018,.045,5),s);d.rotation.x=Math.PI/2,d.position.set(0,1.66,.1),e.add(d);const u=(w,y,C=Math.PI*.55)=>{const S=new J(new We(w,14,8,0,Math.PI*2,0,C),y);return S.scale.set(.95,1.12,1.03),S.position.y=1.68,S};if(t.hairStyle!=="bald"&&e.add(u(.106,t.hairStyle==="beanie"?Gn(t.hat):r,t.hairStyle==="beanie"?Math.PI*.5:Math.PI*.55)),t.hairStyle==="long"){const w=new J(new Qt(.1,.11,.26,10,1,!0,Math.PI*.6,Math.PI*.8),r);w.position.y=1.56,w.rotation.y=Math.PI,e.add(w)}else if(t.hairStyle==="bun"){const w=new J(new We(.05,8,6),r);w.position.set(0,1.74,-.09),e.add(w)}else if(t.hairStyle==="beanie"){const w=new J(new un(.1,.022,6,14),Gn(t.hat));w.rotation.x=Math.PI/2,w.position.y=1.7,e.add(w)}else if(t.hairStyle==="cap"){const w=new J(new Qt(.115,.118,.05,12),Gn(t.hat));w.position.set(0,1.77,.01),w.rotation.x=-.12;const y=new J(new Vt(.16,.015,.08),Gn(t.hat));y.position.set(0,1.76,.12),e.add(w,y)}const m=w=>{const y=new Et;y.position.set(w*.085,.92,0);const C=new J(new Qt(.075,.062,.44,8),o);C.position.y=-.22;const S=new Et;S.position.y=-.44;const b=new J(new Qt(.062,.05,.42,8),o);b.position.y=-.21;const L=new J(new Vt(.1,.07,.23),Gn("#2a2420"));return L.position.set(0,-.44,.04),S.add(b,L),y.add(C,S),e.add(y),{hip:y,knee:S}},{hip:_,knee:g}=m(1),{hip:p,knee:x}=m(-1),M=w=>{const y=new Et;y.position.set(w*.215,1.4,0);const C=Ah(new J(new Qt(.052,.042,.58,8),n));C.position.y=-.29;const S=new J(new We(.042,8,6),s);return S.position.y=-.61,y.add(C,S),y.rotation.z=w*.07,e.add(y),y},v=M(1),T=M(-1);return e.traverse(w=>w.castShadow=!0),{group:e,armL:v,armR:T,legL:_,legR:p,kneeL:g,kneeR:x}}function bo(i,t,e){t==="wind"?(i.armL.rotation.set(-1.3+Math.sin(e*7)*.45,0,.15),i.armR.rotation.set(-1.3+Math.sin(e*7+Math.PI)*.45,0,-.15)):t==="push"?(i.armL.rotation.set(-1.25,0,.1),i.armR.rotation.set(-1.25,0,-.1)):t==="rest"?(i.armL.rotation.set(0,0,.07),i.armR.rotation.set(0,0,-.07)):t==="wave"?(i.armL.rotation.set(0,0,Math.PI-.4+Math.sin(e*9)*.35),i.armR.rotation.set(0,0,-.07)):(i.armL.rotation.set(0,0,Math.PI-.2+Math.sin(e*14)*.25),i.armR.rotation.set(0,0,-(Math.PI-.2)+Math.sin(e*14+1.5)*.25))}function Sl(i,t,e=1){const n=Math.sin(t);i.legL.rotation.x=n*.42*e,i.legR.rotation.x=-n*.42*e,i.kneeL.rotation.x=Math.max(0,-Math.sin(t-.6))*.7*e,i.kneeR.rotation.x=Math.max(0,Math.sin(t-.6))*.7*e,i.armL.rotation.set(-n*.35*e,0,.07),i.armR.rotation.set(n*.35*e,0,-.07)}function ex(i){for(const t of[i.legL,i.legR,i.kneeL,i.kneeR])t.rotation.set(0,0,0)}function El(i){i.legL.rotation.set(-1.5,0,.06),i.legR.rotation.set(-1.5,0,-.06),i.kneeL.rotation.x=i.kneeR.rotation.x=1.5,i.armL.rotation.set(-.5,0,.1),i.armR.rotation.set(-.5,0,-.1),i.group.position.y-=.47}function nx(i,t){i.legL.rotation.set(-.95+Math.sin(t)*.45,0,.05),i.legR.rotation.set(-.95-Math.sin(t)*.45,0,-.05),i.kneeL.rotation.x=1.2+Math.cos(t)*.45,i.kneeR.rotation.x=1.2-Math.cos(t)*.45,i.armL.rotation.set(-1,0,.08),i.armR.rotation.set(-1,0,-.08)}const fn=17.4,wn=2.08,on=(i,t={})=>new jt({color:i,roughness:.6,flatShading:!0,...t}),ix={name:"Chester Rose",cabin:"#1f4d3a",roof:"#7c2f23",length:fn,crew:!0};function Yl(i={}){const{name:t,cabin:e,roof:n,length:s,crew:o,crewStyle:r}={...ix,...i},a=new Et;a.userData.length=s;const l={hull:on("#18191b",{roughness:.5}),deck:on("#3a3d40",{roughness:.9}),cabin:on(e,{roughness:.45}),roof:on(n,{roughness:.7}),cream:on("#efe3c2"),red:on("#a3291f"),window:on("#1b2730",{roughness:.1,metalness:.4}),brass:on("#c9a24a",{roughness:.25,metalness:.9}),rope:on("#8a6b43",{roughness:1}),black:on("#111111"),pot:on("#9b5a3c"),leaf:on("#4f8a3a"),flower:on("#e04f6a")},c=wn/2,h=s/2,f=[[-c,-h+.4],[-c*.85,-h+.05],[0,-h],[c*.85,-h+.05],[c,-h+.4],[c,h-3.4],[c*.82,h-1.6],[c*.45,h-.5],[0,h],[-c*.45,h-.5],[-c*.82,h-1.6],[-c,h-3.4]],d=new $i(f.map(([rt,Tt])=>new ot(rt,-Tt))),u=.62,m=.38,_=new zs(d,{depth:u+m,bevelEnabled:!1});_.rotateX(-Math.PI/2),_.translate(0,-u,0);const g=new J(_,[l.deck,l.hull]);g.castShadow=g.receiveShadow=!0,a.add(g);const p=new zs(d,{depth:.07,bevelEnabled:!1});p.rotateX(-Math.PI/2),p.scale(1.015,1,1.004),p.translate(0,m-.12,0),a.add(new J(p,[l.red,l.red]));const x=-h+2,M=h-3.6,v=M-x,T=(x+M)/2,w=1.22,y=wn-.24,C=new J(new Vt(y,w,v),l.cabin);C.position.set(0,m+w/2,T),C.castShadow=C.receiveShadow=!0,a.add(C);const S=new J(new Vt(y+.08,.09,v+.08),l.roof);S.position.set(0,m+w+.04,T),S.castShadow=!0,a.add(S);for(const rt of[-1,1]){const Tt=new J(new Vt(.02,.05,v-.3),l.cream);Tt.position.set(rt*(y/2+.005),m+w-.18,T),a.add(Tt);const Pt=Tt.clone();Pt.position.y=m+.18,a.add(Pt);for(let Yt=x+1.6;Yt<M-.6;Yt+=1.45){if(Yt>x+2.6&&Yt<x+4.6)continue;const nt=new J(new Vt(.03,.34,.5),l.window);nt.position.set(rt*(y/2+.005),m+w*.62,Yt),a.add(nt)}const St=sx(t);St.position.set(rt*(y/2+.012),m+w*.55,x+3.6),St.rotation.y=rt*(Math.PI/2),a.add(St)}for(const[rt,Tt]of[[x-.005,-1],[M+.005,1]]){const Pt=new J(new Vt(.9,.95,.03),l.red);Pt.position.set(0,m+.5,rt),a.add(Pt);const St=new J(new Vt(.03,.9,.035),l.cream);St.position.set(0,m+.5,rt+Tt*.005),a.add(St)}const b=new J(ox(),new jt({map:rx(),roughness:.6,side:Te}));b.position.set(0,m,h-1.5),a.add(b);const L=new J(new Vt(.12,.06,2.1),l.cream);L.position.set(0,m+1.12,h-2.55),L.rotation.x=-.36,a.add(L);const H=new J(new Qt(.07,.07,.55,8),l.black);H.position.set(.45,m+w+.3,M-1.4),a.add(H);const z=new J(new Qt(.075,.075,.06,8),l.brass);z.position.set(.45,m+w+.5,M-1.4),a.add(z);for(const[rt,Tt]of[[x+2.2,-.35],[x+2.8,-.35],[T+1.5,.3]]){const Pt=new J(new Qt(.16,.12,.22,7),l.pot);Pt.position.set(Tt,m+w+.19,rt),a.add(Pt);const St=new J(new Qe(.2,0),l.leaf);St.position.set(Tt,m+w+.4,rt),a.add(St);const Yt=new J(new Qe(.06,0),l.flower);Yt.position.set(Tt+.08,m+w+.55,rt),a.add(Yt)}const V=new J(new Qt(.03,.03,4.5,6),l.cream);V.rotation.x=Math.PI/2,V.position.set(-.6,m+w+.12,T-1),a.add(V);const k=new J(new We(.22,8,6),l.rope);k.scale.set(1,.9,1.3),k.position.set(0,.05,h-.02),a.add(k);for(const rt of[-1,1]){const Tt=new J(new Qt(.11,.11,.45,8),l.rope);Tt.position.set(rt*(c+.08),.05,2),a.add(Tt)}const F=new J(new Qt(.1,.12,.18,10),l.brass);F.rotation.x=Math.PI/2,F.position.set(0,m+.25,h-.35),a.add(F);const j=new j_("#ffe7b0",0,60,.5,.6,1.2);j.position.set(0,m+.3,h-.2),j.target.position.set(0,-.5,h+20),a.add(j,j.target);const $=new Et;$.position.set(0,0,-h-.05);const lt=new J(new Vt(.05,.75,.9),l.hull);lt.position.set(0,-.3,-.45),$.add(lt);const ft=new J(new Qt(.04,.04,1.1,6),l.black);ft.position.set(0,.45,0),$.add(ft);const yt=new J(new Qt(.025,.035,1.3,6),l.brass);yt.rotation.x=Math.PI/2-.25,yt.position.set(0,1.08,.62),$.add(yt);const zt=new J(new We(.05,6,4),l.brass);zt.position.set(0,1,0),$.add(zt),a.add($);const Ht=Gi(r??{coat:"#e8b931",trousers:"#2d3a55",skin:"#e3b08f",hair:"#5a3a22",hairStyle:"cap",hat:"#3d4a3a",longCoat:!1}),K=Ht.group;K.position.set(0,m-.25,-h+.9),o?a.add(K):a.remove(j,j.target);const st=new J(new Vt(2.2,1.6,3),new Zn({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}));st.position.set(0,1,-h+.6),st.name="tiller-hit";const At=new J(new Dr(.75,.9,32),new Zn({color:"#ffd76a",transparent:!0,opacity:.6,depthWrite:!1,side:Te}));return At.rotation.x=-Math.PI/2,At.position.set(0,m+.02,-h+.55),o&&a.add(st,At),{group:a,rudder:$,steerer:K,steererPerson:Ht,headlight:j,tillerHit:st,tillerHint:At}}function sx(i){const t=document.createElement("canvas");t.width=512,t.height=160;const e=t.getContext("2d");e.fillStyle="#a3291f",e.fillRect(0,0,512,160),e.strokeStyle="#efe3c2",e.lineWidth=8,e.strokeRect(10,10,492,140),e.fillStyle="#f6d36b",e.font="800 64px Fraunces, Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#3a120d",e.shadowOffsetX=3,e.shadowOffsetY=3,e.fillText(i,256,84,460);const n=new Un(t);return n.colorSpace=Ce,new J(new Qn(1.9,.6),new jt({map:n,roughness:.5}))}function ox(){const i=new ue,t=wn*.42,e=1.15;return i.setAttribute("position",new Wt([-t,0,0,t,0,0,0,e,0],3)),i.setAttribute("uv",new Wt([0,0,1,0,.5,1],2)),i.computeVertexNormals(),i}function rx(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#1f4d3a",t.fillRect(0,0,256,256),t.fillStyle="#a3291f",t.beginPath(),t.moveTo(128,40),t.lineTo(200,170),t.lineTo(128,240),t.lineTo(56,170),t.closePath(),t.fill(),t.strokeStyle="#f6d36b",t.lineWidth=8,t.stroke();for(const[n,s,o]of[[128,150,"#e04f6a"],[108,175,"#f2efe0"],[148,175,"#e8a43c"]])t.fillStyle=o,t.beginPath(),t.arc(n,s,14,0,Math.PI*2),t.fill();const e=new Un(i);return e.colorSpace=Ce,e}function ax(i){const t=new Et;i.group.updateMatrixWorld(!0);const e=Jn(i.group,s=>{const o=s.clone();o.matrixAutoUpdate=!1,o.matrix.copy(s.matrixWorld),t.add(o)}),n=new J(e,$n());return n.castShadow=n.receiveShadow=!0,t.add(n),t}const ys=16e3,Sa=ys*fn*fn/12,lx=650,cx=700,hx=7,sr=.3,xr=-3,Mr=5,Rh=(()=>{const i=wn/2,t=fn/2;return[[0,t],[.55,t-.6],[-.55,t-.6],[i,t-3],[-i,t-3],[i,2],[-i,2],[i,-3],[-i,-3],[i*.95,-t+.4],[-i*.95,-t+.4],[0,-t]]})();class ux{constructor(t,e){O(this,"x",0);O(this,"z",0);O(this,"psi",0);O(this,"u",0);O(this,"v",0);O(this,"r",0);O(this,"notch",0);O(this,"thrust",0);O(this,"rudder",0);O(this,"s",0);O(this,"d",0);O(this,"contacts",[]);O(this,"obstacles",[]);O(this,"tethers",[]);O(this,"bowThrust",0);this.route=t,this.ww=e}placeAt(t,e=!0){const n=this.route.frame(t);this.x=n.x,this.z=n.z,this.psi=Math.atan2(n.tx,n.tz)+(e?0:Math.PI),this.s=t,this.u=this.v=this.r=0}get speed(){return Math.hypot(this.u,this.v)}span(){let t=1/0,e=-1/0;for(const[n,s]of Rh){const[o,r]=this.toWorld(n,s),a=this.route.project(o,r,this.s);t=Math.min(t,a.s),e=Math.max(e,a.s)}return[t,e]}step(t,e){const n=Se(e,-1,1),s=n===0?2.2:1.6;this.rudder+=Se(n-this.rudder,-s*t,s*t);const o=this.notch>=0?this.notch*lx:this.notch*cx;this.thrust+=Se(o-this.thrust,-2200*t,2200*t);const{u:r,v:a,r:l}=this,c=this.thrust,h=this.rudder*(300*r*Math.abs(r)+.85*Math.max(c,0)),f=c-480*r*Math.abs(r)-250*r,d=-9e3*a*Math.abs(a)-4e3*a+h*.3-this.bowThrust*1700;let u=h*hx-12e4*l-6e5*l*Math.abs(l);c<0&&(u+=.12*c*1.5);const m=this.bowThrust*1700;u+=m*(fn/2-1),this.u+=(f/ys-a*l)*t,this.v+=(d/ys+r*l)*t,this.r+=u/Sa*t,this.psi+=this.r*t;const _=Math.sin(this.psi),g=Math.cos(this.psi);this.x+=(this.u*_-this.v*g)*t,this.z+=(this.u*g+this.v*_)*t,this.contacts.length=0;for(let x=0;x<2;x++)this.resolveContacts(),this.resolveExtras();const p=this.route.project(this.x,this.z,this.s);this.s=p.s,this.d=p.d}toWorld(t,e){const n=Math.sin(this.psi),s=Math.cos(this.psi);return[this.x+e*n-t*s,this.z+e*s+t*n]}resolveContacts(){const{route:t,ww:e}=this,n=e.gates.filter(o=>Math.abs(o.s-this.s)<fn+6&&e.gateBlocks(o)),s=this.obstacles.filter(o=>Math.abs(o.x-this.x)+Math.abs(o.z-this.z)<45);for(const[o,r]of Rh){const[a,l]=this.toWorld(o,r),c=t.project(a,l,this.s),h=t.frame(c.s),f=e.halfWidthAt(c.s)-.05;if(Math.abs(c.d)>f){const d=Math.sign(c.d);this.applyContact(a,l,h.nx*d,h.nz*d,Math.abs(c.d)-f,"bank")}for(const d of n)this.s<d.s&&c.s>d.s-sr?this.applyContact(a,l,h.tx,h.tz,c.s-(d.s-sr),"gate"):this.s>d.s&&c.s<d.s+sr&&this.applyContact(a,l,-h.tx,-h.tz,d.s+sr-c.s,"gate");for(const d of s){const u=a-d.x,m=l-d.z,_=Math.sin(d.psi),g=Math.cos(d.psi),p=u*_+m*g,x=-u*g+m*_,M=d.halfB+.05-Math.abs(x),v=d.halfL+.05-Math.abs(p);if(!(M<=0||v<=0))if(M<v){const T=-Math.sign(x)||1;this.applyContact(a,l,-g*T,_*T,M,"boat",d)}else{const T=-Math.sign(p)||1;this.applyContact(a,l,_*T,g*T,v,"boat",d)}}c.s<2&&this.applyContact(a,l,-h.tx,-h.tz,2-c.s,"bank"),c.s>t.length-2&&this.applyContact(a,l,h.tx,h.tz,c.s-(t.length-2),"bank")}}resolveExtras(){const t=Math.sin(this.psi),e=Math.cos(this.psi),n=wn/2,s=fn/2;for(const o of this.obstacles){if(Math.abs(o.x-this.x)+Math.abs(o.z-this.z)>45)continue;const r=Math.sin(o.psi),a=Math.cos(o.psi);for(const[l,c]of[[o.halfB,o.halfL],[-o.halfB,o.halfL],[o.halfB,-o.halfL],[-o.halfB,-o.halfL]]){const h=o.x+c*r-l*a,f=o.z+c*a+l*r,d=h-this.x,u=f-this.z,m=d*t+u*e,_=-d*e+u*t,g=n-Math.abs(_),p=s-.6-Math.abs(m);g<=0||p<=0||(g<p?this.applyContact(h,f,-e*Math.sign(_),t*Math.sign(_),g,"boat",o):this.applyContact(h,f,t*Math.sign(m),e*Math.sign(m),p,"boat",o))}}for(const o of this.tethers){const[r,a]=this.toWorld(o.local[0],o.local[1]),l=r-o.anchor[0],c=a-o.anchor[1],h=Math.hypot(l,c);h>o.length&&this.applyContact(r,a,l/h,c/h,h-o.length,"bank",void 0,!0)}}applyContact(t,e,n,s,o,r,a,l=!1){this.x-=n*o,this.z-=s*o;const c=t-this.x,h=e-this.z,f=Math.sin(this.psi),d=Math.cos(this.psi);let u=this.u*f-this.v*d,m=this.u*d+this.v*f;const _=u+this.r*h,g=m-this.r*c,p=_*n+g*s;if(p<=0)return;const x=h*n-c*s,M=-1.15*p/(1/ys+x*x/Sa);u+=M*n/ys,m+=M*s/ys,this.r+=M*x/Sa,u*=.995,m*=.995,this.u=u*f+m*d,this.v=-u*d+m*f,l||this.contacts.push({impulse:-M,kind:r,obstacle:a})}}const dx={KeyW:"throttleUp",ArrowUp:"throttleUp",KeyS:"throttleDown",ArrowDown:"throttleDown",Space:"neutral",KeyQ:"paddles",KeyE:"gates",Tab:"nextGate",KeyT:"timeFaster",KeyR:"timeSlower",KeyV:"camera",KeyM:"map",KeyH:"help",KeyN:"mute",KeyL:"headlight",KeyF:"moor",KeyG:"clear",KeyP:"autopilot",Enter:"nextTrip",Escape:"declineTrip"};class fx{constructor(){O(this,"held",new Set);O(this,"queue",[]);O(this,"onFirstInput",null);O(this,"touchSteer",0);addEventListener("keydown",t=>{this.onFirstInput&&(this.onFirstInput(),this.onFirstInput=null);const e=dx[t.code];e&&t.preventDefault(),!t.repeat&&(this.held.add(t.code),e&&this.queue.push(e))}),addEventListener("keyup",t=>this.held.delete(t.code)),addEventListener("blur",()=>this.held.clear())}get steer(){const t=this.held.has("KeyA")||this.held.has("ArrowLeft"),e=this.held.has("KeyD")||this.held.has("ArrowRight");return(t?1:0)-(e?1:0)||this.touchSteer}get bowThrust(){return(this.held.has("KeyZ")?1:0)-(this.held.has("KeyX")?1:0)}push(t){this.queue.push(t)}drain(){return this.queue.splice(0)}}class px{constructor(t,e,n,s){O(this,"root");O(this,"loc");O(this,"helm");O(this,"lockPanel");O(this,"toasts");O(this,"help");O(this,"chip");O(this,"trip");O(this,"promptEl");O(this,"summary");O(this,"lastTrip","");O(this,"offer");O(this,"lift");O(this,"tripTapOffers",!1);O(this,"lastPrompt","");O(this,"lastLock","");O(this,"lastHelm","");O(this,"lastLoc","");O(this,"winding",!1);O(this,"onNotch",null);O(this,"lever");O(this,"speedEl");this.root=t,t.innerHTML=`
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
        from the towpath. Missions start at the green <b>!</b> markers: cruise past one to be offered it. Finished missions
        (and grateful hitchhikers from the pubs) leave things for your roof.</p>
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
      </div>`,this.loc=t.querySelector(".loc"),this.helm=t.querySelector(".helm"),this.lockPanel=t.querySelector(".lock-panel"),this.toasts=t.querySelector(".toasts"),this.help=t.querySelector(".help"),this.chip=t.querySelector(".chip"),this.trip=t.querySelector(".trip"),this.promptEl=t.querySelector(".prompt"),this.summary=t.querySelector(".summary"),this.offer=t.querySelector(".offer"),this.lift=t.querySelector(".pill.lift"),this.offer.addEventListener("click",o=>{var a;const r=(a=o.target.closest("button"))==null?void 0:a.dataset.act;r&&e(r)});for(const o of[this.loc,this.trip])o.addEventListener("pointerdown",r=>r.preventDefault()),o.addEventListener("click",()=>{o===this.trip&&this.tripTapOffers?e("tripOffer"):o.classList.toggle("open")});this.summary.addEventListener("click",o=>{o.target.closest("button")&&e("nextTrip")}),this.chip.addEventListener("pointerdown",o=>o.preventDefault()),this.buildHelm(),this.chip.addEventListener("click",o=>{o.target.closest(".chip-help")&&e("help")}),t.appendChild(n),t.querySelector(".map-wrap").appendChild(s),this.lockPanel.addEventListener("click",o=>{var a;const r=(a=o.target.closest("button"))==null?void 0:a.dataset.act;r&&e(r)}),n.addEventListener("click",()=>e("map")),s.addEventListener("click",()=>e("map"))}toggleHelp(t){this.help.hidden=t===void 0?!this.help.hidden:!t}setMapOpen(t){this.root.querySelector(".map-wrap").classList.toggle("open",t)}toast(t,e="info",n=4200){for(const o of this.toasts.children)if(o.textContent===t)return;for(;this.toasts.children.length>=3;)this.toasts.firstElementChild.remove();const s=document.createElement("div");s.className=`toast ${e}`,s.textContent=t,this.toasts.appendChild(s),setTimeout(()=>s.classList.add("out"),n),setTimeout(()=>s.remove(),n+600)}setLocation(t,e,n){const s=t+e+n;s!==this.lastLoc&&(this.lastLoc=s,this.loc.querySelector(".head").innerHTML=`<span class="ico">📍</span>${t.replace(/ Lock\b/g,"")}`,this.loc.querySelector(".more").innerHTML=`<div class="eyebrow">Shropshire Union Canal</div><div>${e}</div><div class="journal">${n}</div>`)}buildHelm(){const t=li.x,e=li.y,n=48,s=(d,u)=>{const m=d*Math.PI/180;return[t+Math.sin(m)*u,e-Math.cos(m)*u]},o=(d,u,m)=>{const[_,g]=s(d,m),[p,x]=s(u,m);return`M${_.toFixed(1)},${g.toFixed(1)} A${m},${m} 0 0 1 ${p.toFixed(1)},${x.toFixed(1)}`},r=[];for(let d=xr;d<=Mr;d++){const[u,m]=s(d*vs,n-4),[_,g]=s(d*vs,n+(d===0?7:4));r.push(`<line x1="${u}" y1="${m}" x2="${_}" y2="${g}" class="${d===0?"tick n":"tick"}"/>`)}const[a,l]=s(0,n+14);this.helm.innerHTML=`
      <svg class="lever" viewBox="0 0 ${li.w} ${li.h}" width="${li.w}" height="${li.h}">
        <path d="${o(xr*vs,0,n)}" class="band astern"/>
        <path d="${o(0,Mr*vs,n)}" class="band ahead"/>
        ${r.join("")}
        <text x="${a}" y="${l+3}" class="lbl n">N</text>
        <g class="arm"><line x1="${t}" y1="${e-n+15}" x2="${t}" y2="${e-n+4}"/><circle cx="${t}" cy="${e-n}" r="7.5"/></g>
        <text x="${t}" y="${e-6}" class="spd">0.0</text>
        <text x="${t}" y="${e+5}" class="unit">mph</text>
      </svg>`,this.lever=this.helm.querySelector(".arm"),this.speedEl=this.helm.querySelector(".spd");const c=this.helm.querySelector("svg"),h=d=>{const u=c.getBoundingClientRect(),m=(d.clientX-u.left)/u.width*li.w-t,_=(d.clientY-u.top)/u.height*li.h-e,g=Math.atan2(m,-_)*180/Math.PI;return Math.max(xr,Math.min(Mr,Math.round(g/vs)))};let f=!1;c.addEventListener("pointerdown",d=>{var u;d.preventDefault(),f=!0,c.setPointerCapture(d.pointerId),(u=this.onNotch)==null||u.call(this,h(d))}),c.addEventListener("pointermove",d=>{var u;return f&&((u=this.onNotch)==null?void 0:u.call(this,h(d)))}),c.addEventListener("pointerup",()=>f=!1),c.addEventListener("pointercancel",()=>f=!1)}setHelm(t){const e=`${t.notch}|${t.speedMph.toFixed(1)}`;e!==this.lastHelm&&(this.lastHelm=e,this.lever.style.transform=`rotate(${t.notch*vs}deg)`,this.lever.classList.toggle("astern",t.notch<0),this.lever.classList.toggle("neutral",t.notch===0),this.speedEl.textContent=t.speedMph.toFixed(1));const n=`${t.timeScale}× · <span class="chip-help"><kbd>H</kbd> help</span>`;this.chip.innerHTML!==n&&(this.chip.innerHTML=n)}setTrip(t){const e=JSON.stringify(t);if(e===this.lastTrip)return;this.lastTrip=e,this.tripTapOffers=!1,this.trip.hidden=t.state==="none",t.state==="none"&&this.trip.classList.remove("open");const n=t.state==="active"?`<span class="ico">🎯</span>${t.where}`:t.state==="done"?'<span class="ico">✅</span>Mission complete · <kbd>Enter</kbd>':'<span class="ico">🧭</span>Just cruising · tap for a trip';this.trip.querySelector(".head").innerHTML=n,this.trip.querySelector(".more").innerHTML=t.state==="none"?"":`<div class="eyebrow">Mission · ${t.title}</div><div>${t.brief}</div>`,this.trip.classList.toggle("idle",t.state==="none")}showOffer(t,e,n,s="Accept",o="Not now"){this.offer.innerHTML=`
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
      <button><kbd>Enter</kbd> Carry on</button>`,this.summary.hidden=!1}hideSummary(){this.summary.hidden=!0}get isWinding(){return this.winding}setLockPanel(t,e){if(!e||!e.gate&&!e.step){this.lockPanel.hidden=!0,this.lastLock="",this.winding=!1;return}const n=e.gate,s=e.step,o=(s==null?void 0:s.group)??n.group,r=(s==null?void 0:s.uphill)??!0;this.winding=!!n&&n.paddle>0&&n.paddle<1;const a=o.bodies.map(M=>t.bodies[M]);let l=1/0,c=-1/0;for(const M of a)l=Math.min(l,M.lo-1.6),c=Math.max(c,M.hi+.6);const h=M=>Math.round((M-l)/(c-l)*100),f=a.map((M,v)=>v);r||f.reverse();const d=[];f.forEach((M,v)=>{const T=a[M],w=T.kind==="pound"?"canal":o.staircase?T.label.replace("chamber ",""):"lock",y=s&&s.boatBody===M?'<i class="dg-boat"></i>':"";if(d.push(`<div class="dg-body ${T.kind}"><div class="dg-floor" style="height:${h(T.lo-1.6)}%"></div><div class="dg-water" style="height:${h(T.level)}%">${y}</div><span>${w}</span></div>`),v<f.length-1){const C=r?M:M-1,S=o.gates[C],b=[S.open>.5?"open":"closed",S===n?"sel":"",S===(s==null?void 0:s.gate)?"guide":""].join(" ");d.push(`<div class="dg-gate ${b}">${S.paddle>.05?'<i class="dg-paddle"></i>':""}</div>`)}});let u="";if(n){const M=t.levelsMatch(n),v=!n.wantOpen&&!M||n.wantOpen&&e.boatSpans,T=w=>(s==null?void 0:s.gate)===n&&s.action===w?"guide":"";u=`
      <div class="lp-sel"><span>Selected:</span> <b>${mx(n.label)}</b>${e.candidates>1?' <span class="lp-tab"><kbd>Tab</kbd> other gate</span>':""}</div>
      <div class="lp-actions">
        <button data-act="paddles" class="${n.wantPaddle?"active":""} ${T(n.wantPaddle?"paddlesDown":"paddlesUp")}"><kbd>Q</kbd> ${n.wantPaddle?"Drop paddles":"Wind paddles up"}<i class="prog" style="width:${Math.round(n.paddle*100)}%"></i></button>
        <button data-act="gates" class="${T(n.wantOpen?"close":"open")}" ${v?"disabled":""}><kbd>E</kbd> ${n.wantOpen?"Close gates":"Open gates"}<i class="prog" style="width:${Math.round(n.open*100)}%"></i></button>
      </div>`}const m=e.volunteers==="active",_=!m&&(s!=null&&s.gate)&&n&&s.gate!==n?`<div class="lp-note">The guide wants the ${s.gate.label}. Tab back to it.</div>`:"",g=s?m?`Volunteers: ${s.text.replace(/ \((Q|E)\)/g,"").replace(/^Wind up/,"winding up").replace(/^Drop/,"dropping").replace(/^Open/,"opening").replace(/^Close/,"closing")}`:s.text:"",p=e.volunteers==="available"?'<div class="lp-vol"><span>🙋 Volunteer lock-keepers on duty</span><button data-act="autopilot"><kbd>P</kbd> Let them work you through</button></div>':m?'<div class="lp-vol on"><span>🙋 The volunteers are working you through. Steer or use the throttle to take over.</span></div>':"",x=`
      <div class="lp-head">
        <div class="eyebrow">${o.name} · going ${r?"up":"down"}</div>
      </div>
      <div class="dg">${d.join("")}</div>
      ${s?`<div class="lp-step"><b>Next:</b> ${g}</div>`:""}
      ${_}
      ${p}
      ${m?"":u}`;x!==this.lastLock&&(this.lastLock=x,this.lockPanel.innerHTML=x),this.lockPanel.hidden=!1}}const vs=15,li={x:62,y:68,w:124,h:76},mx=i=>i[0].toUpperCase()+i.slice(1),Ve=.5,Ch=650;class gx{constructor(t,e,n,s){O(this,"el");O(this,"bigEl");O(this,"base");O(this,"locks");O(this,"bigOpen",!1);O(this,"dest",null);O(this,"bigTx",{ox:0,oz:0,sk:1,dpr:1});O(this,"dragAt",null);O(this,"onTeleport",null);O(this,"places",[]);O(this,"hazards",[]);O(this,"missionStarts",[]);O(this,"missionStartsFaded",!1);this.b=s;const o=this.base=document.createElement("canvas");o.width=Math.ceil((s.x1-s.x0)*Ve),o.height=Math.ceil((s.z1-s.z0)*Ve);const r=o.getContext("2d"),a=f=>(f-s.x0)*Ve,l=f=>(f-s.z0)*Ve,c=(f,d)=>{r.beginPath();for(let u=0;u<f.length;u+=2)(u?r.lineTo:r.moveTo).call(r,a(f[u]),l(f[u+1]));d&&r.closePath()};r.fillStyle="#e5e9d2",r.fillRect(0,0,o.width,o.height),r.fillStyle="#c9dcaa";for(const f of t.parks)c(f.p,!0),r.fill();r.fillStyle="#9cc3d2";for(const f of t.water)c(f.p,!0),r.fill();r.strokeStyle="#9cc3d2",r.lineCap=r.lineJoin="round";for(const f of t.rivers)r.lineWidth=f.w*Ve,c(f.p,!1),r.stroke();r.fillStyle="#d2c3ae";for(const f of t.buildings)c(f.p,!0),r.fill();for(const f of[0,1])for(const d of t.roads)d.w<3||(r.strokeStyle=f?"#ffffff":"#b9b2a4",r.lineWidth=d.w*Ve+(f?0:1.5),c(d.p,!1),r.stroke());r.strokeStyle="#5b5550",r.lineWidth=1.5,r.setLineDash([4,3]);for(const f of t.rails)c(f.p,!1),r.stroke();r.setLineDash([]),r.strokeStyle="#2f7aa0",r.lineWidth=4,c(t.centreline,!1),r.stroke();const h=new Map;for(const f of n.gates){const d=e.frame(f.s);let u=h.get(f.lockName);u||h.set(f.lockName,u={name:f.lockName,x:0,z:0,gates:[]}),u.gates.push({x:d.x,z:d.z,nx:d.nx,nz:d.nz})}for(const f of h.values())f.x=f.gates.reduce((d,u)=>d+u.x,0)/f.gates.length,f.z=f.gates.reduce((d,u)=>d+u.z,0)/f.gates.length;this.locks=[...h.values()],this.el=document.createElement("canvas"),this.el.className="minimap",this.el.width=this.el.height=440,this.bigEl=document.createElement("canvas"),this.bigEl.className="bigmap"}draw(t,e,n){const s=this.el.getContext("2d"),o=this.el.width,r=Ch*Ve,a=(t-this.b.x0)*Ve-r/2,l=(e-this.b.z0)*Ve-r/2;s.fillStyle="#e5e9d2",s.fillRect(0,0,o,o),s.drawImage(this.base,a,l,r,r,0,0,o,o);const c=o/Ch,h=(f,d)=>[o/2+(f-t)*c,o/2+(d-e)*c];if(this.drawPlaces(s,h,2,!1),this.drawLocks(s,h,2,9),this.drawDestination(s,h,2,o),this.drawHazards(s,h,2),this.drawMissionStarts(s,h,2),this.boatMarker(s,o/2,o/2,n,1.6),this.bigOpen){const f=this.bigEl,d=Math.min(2,devicePixelRatio);f.width=f.clientWidth*d,f.height=f.clientHeight*d;const u=f.getContext("2d"),m=Math.min(f.width/this.base.width,f.height/this.base.height),_=(f.width-this.base.width*m)/2,g=(f.height-this.base.height*m)/2;u.fillStyle="#e5e9d2",u.fillRect(0,0,f.width,f.height),u.drawImage(this.base,_,g,this.base.width*m,this.base.height*m);const p=Ve*m,x=(T,w)=>[_+(T-this.b.x0)*p,g+(w-this.b.z0)*p];this.drawPlaces(u,x,d,!0),this.drawLocks(u,x,d,7),this.drawDestination(u,x,d*1.3,null),this.drawHazards(u,x,d*1.3),this.drawMissionStarts(u,x,d*1.3),this.bigTx={ox:_,oz:g,sk:p,dpr:d};const[M,v]=this.dragAt??x(t,e);this.boatMarker(u,M,v,n,1.4*d),this.onTeleport&&(u.font=`800 ${12*d}px Nunito, sans-serif`,u.fillStyle="#a3291f",u.fillText("DEV: drag the boat to move it",14*d,f.height-14*d))}}enableDevTeleport(t,e){this.onTeleport=e;const n=this.bigEl,s=r=>{const a=n.getBoundingClientRect();return[(r.clientX-a.left)*this.bigTx.dpr,(r.clientY-a.top)*this.bigTx.dpr]};let o=!1;n.addEventListener("pointerdown",r=>{const{ox:a,oz:l,sk:c,dpr:h}=this.bigTx,[f,d]=t(),[u,m]=s(r);Math.hypot(u-(a+(f-this.b.x0)*c),m-(l+(d-this.b.z0)*c))>30*h||(this.dragAt=[u,m],o=!1,n.setPointerCapture(r.pointerId))}),n.addEventListener("pointermove",r=>{this.dragAt&&(this.dragAt=s(r),o=!0)}),n.addEventListener("pointerup",()=>{if(!this.dragAt)return;const{ox:r,oz:a,sk:l}=this.bigTx,[c,h]=this.dragAt;this.dragAt=null,o&&e(this.b.x0+(c-r)/l,this.b.z0+(h-a)/l)}),n.addEventListener("click",r=>{o&&(r.stopImmediatePropagation(),o=!1)},{capture:!0}),n.style.cursor="default"}addMooredBoats(t){const e=this.base.getContext("2d");e.fillStyle="#5b4a8a";for(const n of t)e.save(),e.translate((n.x-this.b.x0)*Ve,(n.z-this.b.z0)*Ve),e.rotate(-n.psi),e.fillRect(-Math.max(1.2,n.halfB*Ve),-n.halfL*Ve,Math.max(2.4,n.halfB*2*Ve),n.halfL*2*Ve),e.restore()}setPlaces(t){this.places=t}drawPlaces(t,e,n,s){t.save(),t.textAlign="center",t.textBaseline="middle";const o=[];for(const r of this.places){const[a,l]=e(r.x,r.z);if(!(a<-20||l<-20||a>t.canvas.width+20||l>t.canvas.height+20)&&(t.fillStyle="rgba(255, 250, 235, 0.95)",t.strokeStyle=r.icon==="★"?"#1d3557":"#6e1f1a",t.lineWidth=1.5*n,t.beginPath(),t.arc(a,l,9*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#1d3557",t.font=`${r.icon==="★"?800:400} ${11*n}px Nunito, sans-serif`,t.fillText(r.icon,a,l+.5*n),s)){t.font=`700 ${10*n}px Nunito, sans-serif`;const c=t.measureText(r.name).width,h=a-c/2,f=l+11*n,d=l+23*n;if(o.some(([u,m,_,g])=>h<_&&h+c>u&&f<g&&d>m))continue;o.push([h-4*n,f,h+c+4*n,d]),t.lineWidth=3*n,t.strokeStyle="rgba(255,255,255,0.9)",t.strokeText(r.name,a,l+17*n),t.fillStyle="#3a2a1a",t.fillText(r.name,a,l+17*n)}}t.restore()}setMissionStarts(t,e=!1){this.missionStarts=t,this.missionStartsFaded=e}drawMissionStarts(t,e,n){t.save(),t.textAlign="center",t.textBaseline="middle",t.globalAlpha=this.missionStartsFaded?.45:1;for(const[s,o]of this.missionStarts){const[r,a]=e(s,o);t.fillStyle="#5ec27a",t.strokeStyle="#1f4d3a",t.lineWidth=2*n,t.beginPath(),t.arc(r,a-12*n,8*n,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#10261c",t.font=`900 ${11*n}px Nunito, sans-serif`,t.fillText("!",r,a-11.5*n)}t.restore()}setHazards(t){this.hazards=t}drawHazards(t,e,n){for(const[s,o]of this.hazards)this.drawHazard(t,e(s,o),n)}drawHazard(t,[e,n],s){t.save(),t.fillStyle="#ffcf4a",t.strokeStyle="#7a2f00",t.lineWidth=1.5*s,t.beginPath(),t.moveTo(e,n-10*s),t.lineTo(e+9*s,n+6*s),t.lineTo(e-9*s,n+6*s),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#7a2f00",t.font=`900 ${10*s}px Nunito, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("!",e,n+1*s),t.restore()}clearDestination(){this.dest=null}setDestination(t,e,n){this.dest={x:t,z:e,name:n}}drawDestination(t,e,n,s){if(!this.dest)return;let[o,r]=e(this.dest.x,this.dest.z);if(s!==null){const a=s/2,l=o-a,c=r-a,h=Math.hypot(l,c),f=a-14*n;h>f&&(o=a+l/h*f,r=a+c/h*f)}t.save(),t.fillStyle="#ffcf4a",t.strokeStyle="#7a5a10",t.lineWidth=1.5*n,t.beginPath(),t.moveTo(o,r),t.lineTo(o,r-18*n),t.stroke(),t.beginPath(),t.moveTo(o,r-18*n),t.lineTo(o+12*n,r-13.5*n),t.lineTo(o,r-9*n),t.closePath(),t.fill(),t.stroke(),t.restore()}drawLocks(t,e,n,s){t.save(),t.lineCap="round";for(const o of this.locks)for(const r of o.gates){const[a,l]=e(r.x,r.z),c=r.nx*s*n,h=r.nz*s*n;for(const[f,d]of[[5,"#ffffff"],[2.5,"#1b1b1b"]])t.strokeStyle=d,t.lineWidth=f*n,t.beginPath(),t.moveTo(a-c,l-h),t.lineTo(a+c,l+h),t.stroke()}t.font=`800 ${12*n}px Nunito, sans-serif`,t.textBaseline="middle";for(const o of this.locks){const[r,a]=e(o.x,o.z),l=o.gates.length>2?`${o.name} · ${o.gates.length-1} locks`:o.name,c=t.measureText(l).width,h=20*n,f=8*n,d=r-c/2-f,u=a-h-12*n;t.fillStyle="rgba(31, 77, 58, 0.94)",t.beginPath(),t.roundRect(d,u,c+f*2,h,h/2),t.fill(),t.beginPath(),t.moveTo(r-5*n,u+h-.5),t.lineTo(r+5*n,u+h-.5),t.lineTo(r,u+h+6*n),t.fill(),t.fillStyle="#f6efdd",t.fillText(l,d+f,u+h/2+n)}t.restore()}boatMarker(t,e,n,s,o){t.save(),t.translate(e,n),t.rotate(-s+Math.PI),t.scale(o,o),t.fillStyle="#a3291f",t.strokeStyle="#fff",t.lineWidth=2,t.beginPath(),t.moveTo(0,-11),t.lineTo(6,8),t.lineTo(0,4),t.lineTo(-6,8),t.closePath(),t.stroke(),t.fill(),t.restore()}}class _x{constructor(){O(this,"ctx",null);O(this,"master");O(this,"noise");O(this,"waterGain");O(this,"rumbleGain");O(this,"nextThump",0);O(this,"engine",null);O(this,"nextBird",0);O(this,"nextClick",0);O(this,"muted",vx())}start(){if(this.ctx)return;const t=this.ctx=new AudioContext;this.master=t.createGain(),this.master.gain.value=this.muted?0:.7,this.master.connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*2,t.sampleRate);const e=this.noise.getChannelData(0);for(let a=0;a<e.length;a++)e[a]=Math.random()*2-1;const n=t.createBufferSource();n.buffer=this.noise,n.loop=!0;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=900,this.waterGain=t.createGain(),this.waterGain.gain.value=0,n.connect(s).connect(this.waterGain).connect(this.master),n.start();const o=t.createBufferSource();o.buffer=this.noise,o.loop=!0;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=160,this.rumbleGain=t.createGain(),this.rumbleGain.gain.value=0,o.connect(r).connect(this.rumbleGain).connect(this.master),o.start(),this.loadEngine().catch(a=>console.warn("Engine samples unavailable, using synth",a))}async loadEngine(){const t=this.ctx,e=async c=>t.decodeAudioData(await(await fetch(c)).arrayBuffer()),[n,s]=await Promise.all([e("./audio/engine-idle.wav"),e("./audio/engine-run.wav")]),o=(c,h)=>{const f=t.createBufferSource();return f.buffer=c,f.loop=!0,f.connect(h),f.start(),f},r=t.createGain(),a=t.createGain();r.gain.value=a.gain.value=0;const l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=2400,r.connect(l),a.connect(l),l.connect(this.master),this.engine={idle:o(n,r),run:o(s,a),idleGain:r,runGain:a}}toggleMute(){this.muted=!this.muted,this.ctx&&(this.master.gain.value=this.muted?0:.7);try{localStorage.setItem("canal.muted",this.muted?"1":"0")}catch{}}update(t,e,n,s){const o=this.ctx;if(!o)return;const r=o.currentTime,a=Math.abs(t);if(this.engine){const l=this.engine,c=Math.min(1,a*.4);l.idleGain.gain.setTargetAtTime((1-c)*.55,r,.25),l.runGain.gain.setTargetAtTime(c*(.45+a*.05),r,.25),l.idle.playbackRate.setTargetAtTime(1+a*.08,r,.4),l.run.playbackRate.setTargetAtTime(.62+Math.max(0,a-1)*.095,r,.4)}else{const l=7+a*1.9;for(this.nextThump<r&&(this.nextThump=r);this.nextThump<r+.1;)this.thump(this.nextThump,.22+a*.035),this.nextThump+=1/l}this.waterGain.gain.setTargetAtTime(Math.min(.35,e*.06),r,.3),n&&r>this.nextClick&&(this.click(r),this.nextClick=r+.13),s&&r>this.nextBird&&(this.nextBird>0&&this.bird(r),this.nextBird=r+4+Math.random()*9)}rumble(t){this.ctx&&this.rumbleGain.gain.setTargetAtTime(t*t*.9,this.ctx.currentTime,.3)}bump(t){const e=this.ctx;if(!e)return;const n=e.currentTime,s=e.createOscillator();s.frequency.setValueAtTime(70,n),s.frequency.exponentialRampToValueAtTime(35,n+.25);const o=e.createGain();o.gain.setValueAtTime(Math.min(.9,t),n),o.gain.exponentialRampToValueAtTime(.001,n+.35),s.connect(o).connect(this.master),s.start(n),s.stop(n+.4)}quack(){const t=this.ctx;if(!t)return;const e=t.currentTime;for(let n=0;n<2;n++){const s=e+n*.16,o=t.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(520,s),o.frequency.exponentialRampToValueAtTime(330,s+.11);const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=1100,r.Q.value=3;const a=t.createGain();a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.25,s+.015),a.gain.exponentialRampToValueAtTime(1e-4,s+.12),o.connect(r).connect(a).connect(this.master),o.start(s),o.stop(s+.13)}}thump(t,e){const n=this.ctx,s=n.createOscillator();s.type="triangle",s.frequency.setValueAtTime(58,t),s.frequency.exponentialRampToValueAtTime(38,t+.08);const o=n.createGain();o.gain.setValueAtTime(e,t),o.gain.exponentialRampToValueAtTime(.001,t+.11),s.connect(o).connect(this.master),s.start(t),s.stop(t+.12);const r=n.createBufferSource();r.buffer=this.noise;const a=n.createBiquadFilter();a.type="bandpass",a.frequency.value=220;const l=n.createGain();l.gain.setValueAtTime(e*.5,t),l.gain.exponentialRampToValueAtTime(.001,t+.06),r.connect(a).connect(l).connect(this.master),r.start(t,Math.random(),.07)}click(t){const e=this.ctx,n=e.createBufferSource();n.buffer=this.noise;const s=e.createBiquadFilter();s.type="highpass",s.frequency.value=2500;const o=e.createGain();o.gain.setValueAtTime(.35,t),o.gain.exponentialRampToValueAtTime(.001,t+.03),n.connect(s).connect(o).connect(this.master),n.start(t,Math.random(),.04)}bird(t){const e=this.ctx,n=2+Math.floor(Math.random()*4),s=2600+Math.random()*1600;for(let o=0;o<n;o++){const r=t+o*(.09+Math.random()*.05),a=e.createOscillator();a.type="sine",a.frequency.setValueAtTime(s,r),a.frequency.exponentialRampToValueAtTime(s*(.7+Math.random()*.6),r+.07);const l=e.createGain();l.gain.setValueAtTime(1e-4,r),l.gain.exponentialRampToValueAtTime(.05,r+.01),l.gain.exponentialRampToValueAtTime(1e-4,r+.08),a.connect(l).connect(this.master),a.start(r),a.stop(r+.1)}}}function vx(){try{return localStorage.getItem("canal.muted")==="1"}catch{return!1}}const or=.04,xx=90;function Ph(i,t,e){const n=yx(i,t,e);return n!=null&&n.keeper&&(n.text=Mx(n)),n}function Mx(i){var n;const t=i.gate.label,e=(n=i.text.match(/\(Q\) (.*)\.$/))==null?void 0:n[1];switch(i.action){case"paddlesUp":return`The lock-keeper is winding up the paddles on the ${t}${e?` ${e}`:""}. Sit tight.`;case"paddlesDown":return`The lock-keeper is dropping the paddles on the ${t}.`;case"close":return`The lock-keeper is closing the ${t}.`;case"open":return`The lock-keeper is opening the ${t}.`;case"wait":return i.text.replace("Water's running","The lock-keeper is letting water run");default:return i.text}}function yx(i,t,e){const[n,s]=t,o=(n+s)/2;let r,a=1/0;for(const v of i.groups){const T=v.gates[0].s,w=v.gates.at(-1).s,y=e?T-o:o-w,C=o>T-2&&o<w+2,S=C?0:y;(C||y>0&&y<xx)&&S<a&&(a=S,r=v)}if(!r){for(const v of i.groups){const T=v.gates[0].s,w=v.gates.at(-1).s,y=e?o-w:T-o;if(y>0&&y<60){const C=v.gates.find(b=>b.wantPaddle)??v.gates.find(b=>b.wantOpen),S=e?v.gates.at(-1):v.gates[0];if(C)return{group:v,uphill:e,gate:C,boatBody:e?v.bodies.length-1:0,adjacent:[S],keeper:C!==S,action:C.wantPaddle?"paddlesDown":"close",text:C.wantPaddle?`Before you go: drop the paddles on the ${C.label} behind you (Q).`:`Before you go: close the ${C.label} behind you (E).`}}}return null}const l=r.gates.length-1,c=e?r.gates:[...r.gates].reverse(),f=(e?r.bodies:[...r.bodies].reverse()).map(v=>i.bodies[v]),d=v=>e?v:l+1-v;let u=-1;for(let v=0;v<=l+1;v++){const T=f[v];n>=T.s0-.2&&s<=T.s1+.2&&(u=v)}const m=c.find(v=>v.s>n&&v.s<s),_=u<0?m?[m]:[]:u===l+1?[c[l]]:[c[u-1],c[u]].filter(v=>!!v),g=(v,T,w,y=u)=>({group:r,uphill:e,gate:v,action:T,text:w,boatBody:y<0?-1:d(y),adjacent:_,keeper:!!v&&!_.includes(v)&&T!=="drive"});if(u<0)return g(m??null,"drive","Keep going, nice and slow.");if(u===l+1){const v=r.gates.find(T=>T.wantPaddle)??r.gates.find(T=>T.wantOpen);return v?g(v,v.wantPaddle?"paddlesDown":"close",v.wantPaddle?`You're through! Drop the paddles on the ${v.label} behind you (Q).`:`You're through! Close the ${v.label} behind you (E).`):null}const p=c[u],x=v=>v.label==="the canal"?v===f[0]?"the canal behind you":"the canal ahead":v.label;if(u>0&&c[u-1].wantOpen)return g(c[u-1],"close",`Close the ${c[u-1].label} behind you (E).`);if(Math.abs(f[u].level-f[u+1].level)<or){for(const v of r.gates)if(v!==p&&v.wantPaddle)return g(v,"paddlesDown",`Drop the paddles on the ${v.label} (Q) so the water stays put.`)}else{const v=c.find((F,j)=>j!==u&&F.wantOpen);if(v)return g(v,"close",`First close the ${v.label} (E), or the water will just run away.`);const T=r.gates.filter(F=>F.wantPaddle&&Math.abs(i.bodies[F.below].level-i.bodies[F.above].level)>=or);if(T.length>1)return g(T[1],"paddlesDown",`Drop the paddles on the ${T[1].label} (Q). One set at a time, or the water just runs straight through.`);if(T.length===1){const F=T[0],j=i.bodies[F.below],$=i.bodies[F.above],lt=$.level-j.level,ft=F.flow===0&&F.paddle>.9?" Hmm, it isn't moving. Something's open at the other end.":"";return g(F,"wait",`Water's running from ${x($)} into ${x(j)}… levels ${lt.toFixed(1)} m apart.${ft} (T speeds time up.)`)}const w=F=>f[F].kind==="pound"||f[F].level>f[F].hi-or,y=F=>f[F].kind==="pound"||f[F].level<f[F].lo+or,C=(F,j)=>c[Math.min(F,j)],S=F=>e?F+1:F-1,b=F=>e?F-1:F+1,L=F=>{const j=S(F);return w(j)?[C(F,j),`to fill ${x(f[F])} from ${x(f[j])}`]:L(j)},H=F=>{const j=b(F);return y(j)?[C(F,j),`to empty ${x(f[F])} into ${x(f[j])}`]:H(j)};let z;if(f[u].kind==="pound"||f[u+1].kind==="pound"){const F=f[u].level>f[u+1].level?f[u]:f[u+1],j=F===f[u]?f[u+1]:f[u];z=[p,F.kind==="pound"?`to fill ${x(j)} from ${x(F)}`:`to empty ${x(F)} into ${x(j)}`]}else(e?!w(u+1):!y(u+1))?(z=e?L(u+1):H(u+1),z[1]+=" first"):(e?!y(u):!w(u))?(z=e?H(u):L(u),z[1]+=" first"):z=[p,`so ${x(f[e?u+1:u])} empties into ${x(f[e?u:u+1])}`];const[V,k]=z;for(const F of r.gates)if(F!==V&&F.wantPaddle)return g(F,"paddlesDown",`Drop the paddles on the ${F.label} (Q) so the water stays put.`);return g(V,"paddlesUp",`Wind up the paddles on the ${V.label} (Q) ${k}.`)}return p.wantOpen?p.open<.97?g(p,"wait",`The ${p.label} are swinging open…`):p.wantPaddle?g(p,"paddlesDown",`Drop the paddles on the ${p.label} (Q).`):g(p,"drive",`Gates open. Drive ${u+1===l+1?"out of the lock":`into ${x(f[u+1])}`}.`):g(p,"open",`Levels match. Open the ${p.label} (E).`)}const Lh=["Kingfisher","Dunroamin","Willow","Morning Mist","Heron","Bramble","Otter","Lazy Days","Moorhen","Puddle Duck","Wren","Seren","Daisy May","Jubilee","Halcyon","Mallard","Badger","Tilly","Dragonfly","Rosie","Swallow","Nutmeg","Lily Pad","Bluebell","Damselfly","Kestrel","Second Wind","Tortoise","Meander","Sunflower","Jolly Roger","Dormouse","Albatross","Grebe","Primrose","Liberty","Plover","Hedgehog","Elderflower","Coot","Teasel","Old Bill","Marigold","Windrush","Peregrine","Thistle","Snowdrop","Toad Hall","Cobble","Foxglove","Pippin","Salamander","Spindle","Saffron","Sloe"],Dh=["#1f4d3a","#7a1f2b","#1d3557","#2e2a4a","#5a3d1e","#2f5d62","#6b2737","#264d2a","#3b4a6b","#8a5a1e"],Ih=["#7c2f23","#3a3d40","#d9ccaa","#2b2b2b","#8a7650","#4a5a3a"];class bx{constructor(t,e,n,s,o,r,a){O(this,"group",new Et);O(this,"boats",[]);O(this,"zones");O(this,"highlight");O(this,"marker");O(this,"time",0);O(this,"starts",new Map);this.route=t,this.ww=e,this.terrain=n,this.zones=[{id:"tower",name:"Tower Wharf",kind:"visitor",s0:o+10,s1:o+55},{id:"city",name:"City moorings, Cow Lane Bridge",kind:"visitor",s0:1150,s1:1215},{id:"hoole",name:"Hoole",kind:"visitor",s0:2050,s1:2110},{id:"christleton",name:"Christleton",kind:"visitor",s0:4345,s1:4400}];const l=(u,m)=>e.gates.every(_=>_.s<u-35||_.s>m+35)&&s.every(_=>_.s<u-_.w/2-12||_.s>m+_.w/2+12)&&e.windingHoles.every(_=>_<u-45||_>m+45)&&this.zones.every(_=>_.s1<u-8||_.s0>m+8)&&e.bodies[e.bodyIndexAt((u+m)/2)].kind==="pound",c=a.filter(u=>u.type==="stop"&&!/drive.?thru/i.test(u.name)).sort((u,m)=>u.rank-m.rank||u.dist-m.dist);for(const u of c)if(!this.zones.some(m=>m.kind==="stop"&&Math.abs((m.s0+m.s1)/2-u.s)<120))for(const m of[0,8,-8,16,-16,24,-24,32,-32,45,-45,60,-60]){const _=u.s+m-18,g=u.s+m+18;if(!(_<30||g>t.length-30||!l(_,g))){this.zones.push({id:`stop:${u.name}`,name:u.name,kind:"stop",poi:u,s0:_,s1:g});break}}for(const u of this.zones)this.buildZone(u);this.highlight=new J(new ue,new Zn({color:"#ffd76a",transparent:!0,opacity:.5,depthWrite:!1})),this.group.add(this.highlight),this.marker=Vu(),this.group.add(this.marker);const h=vi(77),f=(u,m)=>u-m<40||u+m>t.length-40||e.gates.some(_=>Math.abs(_.s-u)<m+35)||s.some(_=>Math.abs(_.s-u)<m+_.w/2+14)||this.zones.some(_=>u+m>_.s0-6&&u-m<_.s1+6)||e.windingHoles.some(_=>Math.abs(_-u)<m+45)||Math.abs(u-r)<m+30||e.bodies[e.bodyIndexAt(u)].kind!=="pound";let d=[...Lh];for(let u=60;u<t.length-60;){const m=u>o-250&&u<o+220?.85:u>2900&&u<3250?.6:.32,_=15+Math.round(h()*5);if(h()<m&&!f(u+_/2,_/2)){const g=d.splice(Math.floor(h()*d.length),1)[0]??"Narrowboat";d.length||(d=[...Lh]),this.addBoat(u+_/2,_,g,h),u+=_+1+h()*3}else u+=6+h()*14}}addBoat(t,e,n,s){const o=this.route.frame(t),a=(this.ww.halfWidthAt(t)-wn/2-.12)*oe,l=o.x+o.nx*a,c=o.z+o.nz*a,h=Math.atan2(o.tx,o.tz)+(s()<.5?0:Math.PI),f=Yl({name:n,length:e,crew:!1,cabin:Dh[Math.floor(s()*Dh.length)],roof:Ih[Math.floor(s()*Ih.length)]}),d=ax(f),u=this.ww.levelAt(t);d.position.set(l,u,c),d.rotation.order="YXZ",d.rotation.y=h,this.group.add(d),this.boats.push({x:l,z:c,psi:h,halfL:e/2,halfB:wn/2,name:n,s:t,group:d,baseY:u,rock:0,rockedAt:-99})}buildZone(t){const e=new jt({color:"#2a2a2a",metalness:.6,roughness:.4});for(let r=t.s0;r<=t.s1;r+=6){const a=this.ww.halfWidthAt(r),[l,c]=this.route.point(r,(a+.35)*oe),h=new J(new un(.14,.035,6,12),e);h.position.set(l,this.terrain.bankTop(r)+.07,c),h.rotation.x=Math.PI/2,this.group.add(h)}const n=this.route.frame(t.s0),s=(this.ww.halfWidthAt(t.s0)+2.9)*oe,o=t.kind==="stop"?Uh([`Moorings for ${Sx(t.poi)}`,t.name],"#6e1f1a"):Uh(["Visitor moorings",t.name]);o.position.set(n.x+n.nx*s,this.terrain.bankTop(t.s0),n.z+n.nz*s),o.rotation.y=Math.atan2(oe*n.tz,-oe*n.tx),this.group.add(o)}setActive(t){if(this.highlight.visible=this.marker.visible=!!t,!t)return;const e=[],n=[];let s=0;for(let c=t.s0;c<=t.s1+.01;c+=1.5,s++){const h=this.ww.halfWidthAt(c),f=this.terrain.bankTop(c)+.06;for(const d of[h-.05,h+.75]){const[u,m]=this.route.point(c,d*oe);e.push(u,f,m)}s>0&&n.push((s-1)*2,(s-1)*2+1,s*2,(s-1)*2+1,s*2+1,s*2)}const o=new ue;o.setAttribute("position",new Wt(e,3)),o.setIndex(n),this.highlight.material.side=Te,this.highlight.geometry.dispose(),this.highlight.geometry=o;const r=(t.s0+t.s1)/2,[a,l]=this.route.point(r,(this.ww.halfWidthAt(r)+.4)*oe);this.marker.position.set(a,this.terrain.bankTop(r)+4,l),this.marker.userData.y0=this.marker.position.y}rockBoat(t,e){t.rock=Math.min(.09,Math.max(t.rock,e)),t.rockedAt=this.time,this.popOwner(t,"shake")}popOwner(t,e){if(t.owner)this.time>t.owner.until&&(t.owner.from=this.time),t.owner.until=this.time+5,t.owner.mode=e;else{const n=Gi(Hi(Math.random));n.group.position.set(0,-.4,-t.halfL+2.45),t.group.add(n.group),t.owner={person:n,from:this.time,until:this.time+5,mode:e}}}get now(){return this.time}update(t){this.time+=t;for(const e of this.boats){const n=e.owner;if(n){const s=Math.min(1,(this.time-n.from)/.5)*Math.min(1,Math.max(0,(n.until-this.time)/.5));n.person.group.position.y=-.4+s*1,n.person.group.visible=s>.01,bo(n.person,s>.6?n.mode:"rest",this.time)}e.rock<.001||(e.rock*=Math.exp(-t*.6),e.group.rotation.z=Math.sin(this.time*3.1)*e.rock,e.group.position.y=e.baseY+Math.sin(this.time*2.3)*e.rock*.6)}for(const e of this.starts.values())e.visible&&(e.position.y=e.userData.y0+Math.sin(this.time*1.6+1)*.25,e.children[0].rotation.y+=t*.9);this.marker.visible&&(this.marker.position.y=this.marker.userData.y0+Math.sin(this.time*1.6)*.25,this.marker.rotation.y+=t*.9,this.highlight.material.opacity=.35+.2*Math.sin(this.time*3))}addStart(t){const e=this.zones.find(a=>a.id===t);if(!e||this.starts.has(t))return;const n=wx(),s=(e.s0+e.s1)/2,[o,r]=this.route.point(s,(this.ww.halfWidthAt(s)+.4)*oe);n.position.set(o,this.terrain.bankTop(s)+4,r),n.userData.y0=n.position.y,this.group.add(n),this.starts.set(t,n)}showStart(t,e){const n=this.starts.get(t);n&&(n.visible=e)}clearAround(t,e,n){for(const s of[...this.boats]){if(Math.abs(s.s-t)>e+s.halfL)continue;this.group.remove(s.group),this.boats.splice(this.boats.indexOf(s),1);const o=n.indexOf(s);o>=0&&n.splice(o,1)}}zoneAt(t){return this.zones.find(e=>t>=e.s0-4&&t<=e.s1+4)}}function Vu(i="#ffcf4a",t="#a07000"){const e=new Et,n=new jt({color:i,emissive:t,emissiveIntensity:.6,roughness:.4}),s=new J(new Vl(.7,0),n);return s.scale.y=1.5,e.add(s),e}function wx(){const i=Vu("#5ec27a","#1f6b3a"),t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");e.fillStyle="#1f4d3a",e.beginPath(),e.arc(64,64,58,0,Math.PI*2),e.fill(),e.fillStyle="#f6efdd",e.font="900 92px Nunito, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("!",64,70);const n=new Un(t);n.colorSpace=Ce;const s=new h_(new Pu({map:n,depthWrite:!1}));return s.scale.set(.9,.9,1),s.position.y=1.7,i.add(s),i}function Sx(i){return i.kind==="pub"||i.kind==="bar"?"patrons":i.kind==="hotel"?"guests":"customers"}function Uh(i,t="#1d3557"){const e=document.createElement("canvas");e.width=512,e.height=192;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,512,192),n.strokeStyle="#f3ead0",n.lineWidth=6,n.strokeRect(8,8,496,176),n.fillStyle="#f3ead0",n.textAlign="center",n.font="700 34px Nunito, sans-serif",n.fillText(i[0].toUpperCase(),256,70,470),n.font="600 40px Fraunces, Georgia, serif",n.fillText(i[1],256,135,470);const s=new Un(e);s.colorSpace=Ce;const o=new Et,r=new J(new Qn(2.2,.82),new jt({map:s,side:Te}));r.position.y=1.9,o.add(r);const a=new J(new Vt(.1,2,.1),new jt({color:"#f1efe8"}));return a.position.y=1,o.add(a),o}const rr=.9,Nh=2,ar=.45,Ex=.45;class Tx{constructor(t,e,n,s){O(this,"group",new Et);O(this,"lines",[]);O(this,"ropeMat",new Du({color:"#d8c49a"}));O(this,"pinMat",new jt({color:"#3a3a3a",metalness:.5,roughness:.5}));this.route=t,this.ww=e,this.terrain=n,this.boat=s}get count(){return this.lines.length}get moored(){return this.lines.length===2}endPoint(t){const e=this.route.frame(this.boat.s);return[((-Math.cos(this.boat.psi)*e.nx+Math.sin(this.boat.psi)*e.nz)*oe>0?1:-1)*wn*.5,(t==="bow"?1:-1)*(fn/2-1.3)]}gap(t){const[e,n]=this.boat.toWorld(...this.endPoint(t)),s=this.route.project(e,n,this.boat.s);return{gap:this.ww.halfWidthAt(s.s)-s.d*oe,s:s.s}}blocker(){return this.ww.gates.some(t=>Math.abs(t.s-this.boat.s)<fn/2+22)?"No mooring on a lock landing. Move along a bit.":this.boat.d*oe<0?"Moor on the towpath side, the bank with the path.":null}prompt(){if(this.moored)return{key:"F",text:"Cast off",ready:!0};const e=["bow","stern"].filter(r=>!this.lines.some(a=>a.end===r)).map(r=>({e:r,...this.gap(r)})),n=e.reduce((r,a)=>a.gap<r.gap?a:r);if(!this.lines.length&&(n.gap>2.5||this.boat.speed>1)||this.blocker()&&!this.lines.length)return null;const s=this.lines.length?Nh:rr,o=e.find(r=>r.gap<s);return o&&this.boat.speed<ar?{key:"F",text:o.gap>rr?`Haul the ${o.e} in and tie it`:`Tie the ${o.e} line`,ready:!0}:this.lines.length===1?{key:"F",text:`Untie the ${this.lines[0].end} line to realign`,ready:!0}:this.boat.speed>=ar?{key:"F",text:"Slow right down to step off",ready:!1}:{key:"F",text:`Bring the ${n.e} in alongside the bank`,ready:!1}}act(){if(this.moored)return this.castOff(),"Lines in, cast off. Off you go!";if(!this.lines.length){const n=this.blocker();if(n)return n}const t=["bow","stern"].filter(n=>!this.lines.some(s=>s.end===n)),e=t.find(n=>this.gap(n).gap<(this.lines.length?Nh:rr));if(this.lines.length===1&&(!e||this.boat.speed>=ar)){const n=this.lines[0].end;return this.castOff(),`${n==="bow"?"Bow":"Stern"} line untied. Line her up and try again.`}return this.boat.speed>=ar?"Too quick to step off! Slow right down first.":e?(this.tie(e),this.moored?null:e==="bow"?"Bow line tied. Now the stern: a touch ahead with the tiller pushed away from the bank swings it in on the rope.":"Stern line tied. Now the bow: a touch astern with the tiller towards the bank brings it in."):`Bring the ${t[0]} closer in to the bank first (within a metre).`}tie(t){const e=this.endPoint(t),[n,s]=this.boat.toWorld(...e),o=this.route.project(n,s,this.boat.s),r=this.ww.halfWidthAt(o.s),a=this.route.frame(o.s),l=Math.sin(this.boat.psi)*a.tx+Math.cos(this.boat.psi)*a.tz>=0?1:-1,c=(t==="bow"?1:-1)*l*.8,[h,f]=this.route.point(o.s+c,(r+.8)*oe),d=Math.hypot(.8,.8+.25)+.35,u=this.gap(t).gap>rr?d:Math.hypot(n-h,s-f)+.35,m={local:e,anchor:[h,f],length:u};this.boat.tethers.push(m);const _=new J(new Qt(.03,.03,.5,6),this.pinMat);_.position.set(h,this.terrain.bankTop(o.s)+.2,f),_.rotation.z=.2;const g=new f_(new ue().setFromPoints(new Array(12).fill(0).map(()=>new N)),this.ropeMat);g.frustumCulled=!1,this.group.add(_,g),this.lines.push({end:t,tether:m,pin:_,rope:g})}castOff(){for(const t of this.lines)this.group.remove(t.pin,t.rope),t.rope.geometry.dispose();this.boat.tethers.length=0,this.lines=[]}update(t){for(const e of this.lines){const[n,s]=this.boat.toWorld(...e.tether.local),o=new N(n,t+Ex,s),r=e.pin.position.clone().setY(e.pin.position.y+.15),l=.08+Math.max(0,e.tether.length-o.distanceTo(r))*.6,c=e.rope.geometry.getAttribute("position");for(let h=0;h<c.count;h++){const f=h/(c.count-1),d=o.clone().lerp(r,f);d.y-=Math.sin(f*Math.PI)*l,c.setXYZ(h,d.x,d.y,d.z)}c.needsUpdate=!0}}}const Oi=[{from:"tower",zone:"city",title:"Under the city walls",brief:"Moor at the city moorings by Cow Lane Bridge, in the cutting below the walls."},{from:"city",zone:"hoole",title:"Through Chester",brief:"Moor up at Hoole, past the city bridges. Thirsty? There are canalside pubs on the way (🍺 on the map)."},{from:"hoole",zone:"christleton",title:"Out to the country",brief:"Moor at Christleton for the night, out in the fields past Greenfield Lock."},{from:"christleton",zone:"tower",title:"Back to Tower Wharf",brief:"Bring her down to Tower Wharf, at the foot of the Northgate Staircase."}];class Ax{constructor(t){O(this,"index",0);O(this,"startHour");O(this,"bumps",0);O(this,"rocked",0);O(this,"cleared",0);O(this,"result",null);O(this,"done",new Set);this.startHour=t}get current(){return Oi[this.index%Oi.length]}complete(t){const e=(t-this.startHour+24)%24,n=this.bumps+this.rocked*2,s=n===0?"Not a ripple out of place. The towpath regulars are impressed.":n<4?"A couple of scrapes, but nothing a cup of tea won’t fix.":"Eventful! The moored boats will be talking about you for a while.";return this.result={trip:this.current,hours:e,bumps:this.bumps,rocked:this.rocked,cleared:this.cleared,verdict:s},this.result}next(t){this.result&&this.done.add(this.index),this.done.size>=Oi.length&&this.done.clear(),this.startHour=t,this.bumps=this.rocked=this.cleared=0,this.result=null}choose(t){this.index=t}}const Oh=["Kittiwake","Ruby Tuesday","Water Rat","Bumblebee","Silver Birch","Mistle Thrush","Ploughman","Owl","Clementine","Blackthorn","Sandpiper","Merlin"],Fh=["#27445a","#6a1e2e","#2c5a3f","#4b3a6b","#8a4a12","#1f3d4d"],kh=["#c0392b","#2e86c1","#e8b931","#27ae60","#8e44ad","#d35400"],zh=1.5,Rx=.9;class Cx{constructor(t,e,n,s){O(this,"group",new Et);O(this,"boats",[]);O(this,"events",[]);O(this,"time",0);O(this,"nextSpawn",8);O(this,"blockedAt",()=>[]);O(this,"nameIndex",0);this.route=t,this.ww=e,this.moorings=n,this.player=s}update(t,e){this.time+=t;const n=this.player,s=this.ww.bodies[this.ww.bodyIndexAt(n.s)];if(this.time>this.nextSpawn&&this.boats.length<2&&s.kind==="pound"){this.nextSpawn=this.time+45+Math.random()*60;const o=n.s+e*(230+Math.random()*90),r=Math.min(o,n.s),a=Math.max(o,n.s),l=this.boats.every(c=>Math.abs(c.s-o)>80)&&this.moorings.zoneAt(o)===void 0&&!this.blockedAt().some(c=>c>r-20&&c<a+20);o>s.s0+60&&o<s.s1-60&&l&&this.spawn(o,-e)}for(const o of[...this.boats]){const r=(n.s-o.s)*o.dir>380||Math.abs(n.s-o.s)>520,a=this.ww.bodies[this.ww.bodyIndexAt(o.s)],l=o.dir>0?a.s1-o.s<40:o.s-a.s0<40;if(r||l&&Math.abs(n.s-o.s)>150||a.kind!=="pound"){this.remove(o);continue}this.steer(o,t,e)}}spawn(t,e){const n=Oh[this.nameIndex++%Oh.length],s=Yl({name:n,length:17+Math.round(Math.random()*3),crew:!0,cabin:Fh[Math.floor(Math.random()*Fh.length)],roof:Math.random()<.5?"#3a3d40":"#7c2f23",crewStyle:Hi(Math.random,{coat:kh[Math.floor(Math.random()*kh.length)]})});s.group.rotation.order="YXZ",this.group.add(s.group);const o=s.group.userData.length/2,r={name:n,model:s,s:t,d:0,dir:e,speed:zh,obstacle:{x:0,z:0,psi:0,halfL:o,halfB:wn/2},pausedUntil:0,waveUntil:0,passed:!1};this.boats.push(r),this.player.obstacles.push(r.obstacle),this.place(r,0)}remove(t){this.group.remove(t.model.group),this.boats.splice(this.boats.indexOf(t),1);const e=this.player.obstacles.indexOf(t.obstacle);e>=0&&this.player.obstacles.splice(e,1)}bumped(t){const e=this.boats.find(n=>n.obstacle===t);!e||this.time<e.pausedUntil||(e.pausedUntil=this.time+6,e.speed=0,e.waveUntil=this.time+3,this.events.push({kind:"bumped",boat:e}))}steer(t,e,n){const s=this.player,o=this.ww.halfWidthAt(t.s),r=(s.s-t.s)*t.dir,a=n!==t.dir;let l=zh;const c=this.moorings.boats.some(m=>Math.abs(m.s-t.s)<m.halfL+12);c&&(l=Rx),r>0&&r<45&&(l=Math.min(l,a?.7:.4)),r>0&&r<22&&!a&&(l=0);const h=r>0&&r<34&&Math.abs(s.d-t.d)<wn+.7;h&&(l=0);for(const m of this.blockedAt()){const _=(m-t.s)*t.dir-t.obstacle.halfL;_>-2&&_<30&&(l=Math.min(l,_<5?0:.4))}this.time<t.pausedUntil&&(l=0),t.speed+=Se(l-t.speed,-.9*e,.3*e);const f=t.dir;let d=r>-20&&r<110&&a?f*(h?o:1.8):0;const u=c?o-wn-1.6:o-1.6;if(d=Se(d,-(o-1.6),u),t.d+=Se(d-t.d,-.45*e,.45*e),t.s+=t.dir*t.speed*e,this.place(t,e),!t.passed&&a&&Math.abs(s.s-t.s)<4){t.passed=!0;const m=(s.d-t.d)*f<0;t.waveUntil=this.time+3.5,this.events.push({kind:m?"greet":"wrongSide",boat:t})}bo(t.model.steererPerson,this.time<t.waveUntil?"wave":"rest",this.time)}place(t,e){const n=this.route.frame(t.s),s=n.x+n.nx*t.d,o=n.z+n.nz*t.d,r=Math.atan2(n.tx,n.tz)+(t.dir>0?0:Math.PI),a=this.ww.levelAt(t.s);t.model.group.position.set(s,a+Math.sin(this.time*1.2+t.s)*.015,o),t.model.group.rotation.y=r,t.model.group.rotation.z=Math.sin(this.time*.9+e)*.004,Object.assign(t.obstacle,{x:s,z:o,psi:r})}}const lr=-oe,Px=i=>new jt({color:i});function ee(i,t,e,n=0,s=0,o=0,r=0,a=0,l=0){const c=new J(t,Px(e));return c.position.set(n,s,o),c.rotation.set(r,a,l),i.add(c),c}const ze=(i,t,e)=>new Vt(i,t,e),cn=(i,t,e,n=6)=>new Qt(i,t,e,n),Lx={bench(){const i=new Et;ee(i,ze(1.6,.06,.4),"#8a6a45",0,.45,0),ee(i,ze(1.6,.36,.05),"#8a6a45",0,.68,-.2,-.15);for(const t of[-.7,.7])ee(i,ze(.06,.45,.4),"#2b2b2b",t,.22,0);return i},bin(){const i=new Et;return ee(i,cn(.22,.2,.8,8),"#1f3d2f",0,.4,0),ee(i,cn(.24,.24,.06,8),"#2b2b2b",0,.82,0),i},lamp(){const i=new Et;return ee(i,cn(.06,.09,3.6),"#1b1b1b",0,1.8,0),ee(i,ze(.5,.06,.06),"#1b1b1b",.18,3.55,0),ee(i,cn(.12,.16,.32,6),"#2b2b2b",.38,3.4,0),ee(i,cn(.1,.1,.14,6),"#f4e3a1",.38,3.22,0),i},lifebuoy(){const i=new Et;return ee(i,ze(.1,1.5,.1),"#e8e4da",0,.75,0),ee(i,new un(.3,.07,6,12),"#e0522f",0,1.15,.08),ee(i,ze(.6,.6,.03),"#c0b8a8",0,1.15,0),i},tub(){const i=new Et;ee(i,cn(.36,.3,.45,8),"#6b4a2e",0,.22,0),ee(i,new Qe(.34,0),"#4f8a3a",0,.58,0);for(const[t,e,n]of[[.15,.1,"#e04f6a"],[-.12,.12,"#f2c94c"],[.02,-.16,"#d36ad6"],[-.16,-.06,"#f6f0e4"]])ee(i,new Qe(.08,0),n,t,.82,e);return i},reeds(){const i=new Et,t=vi(5);for(let e=0;e<9;e++){const n=1.1+t()*.9;ee(i,cn(.015,.04,n,4),t()<.4?"#8a9a4a":"#6f8a3a",(t()-.5)*.9,n/2-.3,(t()-.5)*.7,(t()-.5)*.2,0,(t()-.5)*.25),t()<.4&&ee(i,cn(.04,.04,.2,5),"#5a3d22",(t()-.5)*.9,n-.3,(t()-.5)*.7)}return i},hedge(){const i=new Et;return ee(i,ze(4.2,1.5,1.1),"#3f6b30",0,.75,0),ee(i,new Qe(.6,0),"#4b7a36",-1.2,1.4,.1),ee(i,new Qe(.55,0),"#36602a",1,1.45,-.1),i},fence(){const i=new Et;return ee(i,ze(2,1.6,.06),"#7a5a3a",0,.8,0),ee(i,ze(.1,1.75,.1),"#5e4430",-1,.87,0),i},flowers(){const i=new Et,t=vi(9),e=["#f2c94c","#ffffff","#d36ad6","#e04f6a","#7aa7e0"];for(let n=0;n<7;n++){const s=(t()-.5)*1.6,o=(t()-.5)*1.2;ee(i,cn(.01,.01,.35,3),"#4f7a33",s,.17,o),ee(i,new Qe(.06,0),e[Math.floor(t()*e.length)],s,.36,o)}return i},picnic(){const i=new Et;ee(i,ze(1.8,.06,.8),"#a07a50",0,.75,0);for(const t of[-.65,.65])ee(i,ze(1.8,.05,.28),"#a07a50",0,.45,t);for(const t of[-.7,.7])ee(i,ze(.08,.75,1.5),"#8a6a45",t,.37,0,0);return i},parasol(){const i=new Et;return ee(i,cn(.03,.03,2.4),"#e8e4da",0,1.2,0),ee(i,new Yn(1.4,.5,8,1,!0),"#a3291f",0,2.3,0),i},cottage(){const i=new Et;ee(i,ze(6,4.2,5),"#efe8da",0,2.1,0);const t=new Qt(.01,3.9,6.6,4,1);t.rotateY(Math.PI/4),t.rotateZ(Math.PI/2),t.scale(1,.55,1),ee(i,t,"#4d525b",0,5,0),ee(i,ze(.7,1.4,.7),"#8c4234",2,5.6,0),ee(i,ze(1,1.9,.08),"#1f4d3a",0,.95,2.52);for(const e of[-1.8,1.8])ee(i,ze(.9,.9,.08),"#2a3640",e,2.6,2.52),ee(i,ze(.9,.9,.08),"#2a3640",e,1.1,2.52);return i},heron(){const i=new Et;ee(i,new We(.22,6,4),"#9aa3ab",0,.85,0).scale.set(1,.8,1.6),ee(i,cn(.04,.05,.55,5),"#c8ced2",0,1.2,.18,-.3),ee(i,new We(.07,6,4),"#e8eaec",0,1.47,.27),ee(i,new Yn(.025,.22,4),"#d8b34a",0,1.47,.42,Math.PI/2);for(const t of[-.06,.06])ee(i,cn(.012,.012,.7,3),"#c9a24a",t,.35,0);return i}};class Dx{constructor(t,e,n,s,o,r){O(this,"group",new Et);O(this,"placements",new Map);O(this,"anglerSpots",[]);O(this,"gardens",[]);this.route=t,this.ww=e,this.terrain=n;const a=vi(4242),l=t.length,c=(p,x=6)=>r.some(M=>Math.abs(M.s-p)<M.w/2+x),h=(p,x)=>e.gates.some(M=>Math.abs(M.s-p)<x),f=p=>e.bodies[e.bodyIndexAt(p)].kind==="chamber",d=p=>e.windingHoles.some(x=>Math.abs(x-p)<42),u=p=>{const[x,M]=t.point(p,30*lr),[v,T]=t.point(p,30*oe);return Math.max(n.urbanAt(x,M),n.urbanAt(v,T))};let m=60;for(let p=20;p<l-20;p+=2){if(c(p,8)||h(p,10))continue;const x=u(p);x>.3&&Math.round(p)%32===0&&this.add("lamp",p,e.halfWidthAt(p)+3.25,"towpath",-Math.PI/2),p>m&&!o.zoneAt(p)&&!n.cliffSide(p,oe)&&(m=p+140+a()*160,this.add("bench",p,e.halfWidthAt(p)+3.6,"towpath",0),x>.2&&this.add("bin",p+1.4,e.halfWidthAt(p)+3.7,"towpath",0)),x>.35&&Math.round(p)%380===0&&this.add("lifebuoy",p,e.halfWidthAt(p)+3.3,"towpath",0)}for(const p of e.groups){const x=p.gates[0].s,M=p.gates.at(-1).s;this.add("lifebuoy",x-6,e.halfWidthAt(x-6)+3.3,"towpath",0),this.add("lifebuoy",M+6,e.halfWidthAt(M+6)+3.3,"towpath",0);for(const T of[x+4,M-4,(x+M)/2])this.add("tub",T,e.halfWidthAt(T)+2.2,"towpath",0),this.add("tub",T+1.2,e.halfWidthAt(T)+2.2,"offside",0);const v=(x+M)/2;if(!p.staircase&&u(v)<.45){const T=e.halfWidthAt(v)+10,[w,y]=t.point(v,T*oe);s.isFree(w,y)&&this.add("cottage",v,T,"land",0)}}let _=-1,g="none";for(let p=10;p<l-10;p+=2){if(p>_){_=p+60;const T=u(p);g=T<.3?a()<.85?"hedge":"none":T>.4?a()<.8?"fence":"none":a()<.5?"hedge":"fence"}if(g==="none"||c(p,4)||f(p)||h(p,6)||d(p))continue;const x=e.halfWidthAt(p)+2.4,[M,v]=t.point(p,x*lr);s.isFree(M,v)&&(g==="fence"?this.add("fence",p,x,"offside",0):Math.round(p)%4===0&&this.add("hedge",p,x,"offside",0))}for(let p=10;p<l-10;p+=3){if(c(p,6)||f(p)||h(p,15)||d(p))continue;const x=u(p);a()<(x<.3?.45:.12)&&this.add("reeds",p,e.halfWidthAt(p)-.25,"water",a()*6),x<.35&&a()<.3&&!n.cliffSide(p,oe)&&this.add("flowers",p,e.halfWidthAt(p)+4.6+a()*1.5,"towpath",a()*6),x<.2&&a()<.008&&this.add("heron",p,e.halfWidthAt(p)+.9,"offside",Math.PI/2*lr+(a()-.5))}for(const p of o.zones){if(p.kind!=="stop"||!/pub|bar/.test(p.poi.kind))continue;const x=(p.s0+p.s1)/2;for(const[M,v,T]of[[-5,6,"picnic"],[0,7.5,"picnic"],[5,6,"picnic"],[-2.5,7,"parasol"],[3,6.5,"parasol"]])if(this.add(T,x+M,e.halfWidthAt(x)+v,"land",0),T==="picnic"){const[w,y]=t.point(x+M,(e.halfWidthAt(x)+v)*oe);this.gardens.push({x:w,z:y,y:n.bankTop(x),ry:Math.atan2(t.frame(x).tx,t.frame(x).tz)})}}for(let p=150;p<l-80;p+=70+a()*90)u(p)>.55||c(p,15)||h(p,45)||o.zoneAt(p)||f(p)||o.boats.some(x=>Math.abs(x.s-p)<x.halfL+8)||this.anglerSpots.push({s:p});this.build()}add(t,e,n,s,o){if(e<1||e>this.route.length-1)return;const r=s==="offside"||s==="water"?lr:oe,a=this.route.frame(e),l=a.x+a.nx*n*r,c=a.z+a.nz*n*r;let h;s==="water"?h=this.ww.levelAt(e):s==="land"?h=this.terrain.heightAt(l,c):h=n<this.ww.halfWidthAt(e)+3.4?this.terrain.bankTop(e):this.terrain.landHeight(l,c,e,n*r);const f=Math.atan2(-a.nx*r,-a.nz*r),d=new re().compose(new N(l,h,c),new pn().setFromAxisAngle(new N(0,1,0),f+o),new N(1,1,1));this.placements.has(t)||this.placements.set(t,[]),this.placements.get(t).push(d)}build(){for(const[t,e]of this.placements){const n=Jn(Lx[t]()),s=new dn(n,$n(),e.length);e.forEach((o,r)=>s.setMatrixAt(r,o)),s.castShadow=t!=="flowers"&&t!=="reeds",s.receiveShadow=!0,s.name=`decor:${t}`,this.group.add(s)}}get counts(){return Object.fromEntries([...this.placements].map(([t,e])=>[t,e.length]))}}const eo=6,Ea=4,Ta=380,vn=new re,ci=new pn,no=new N,io=new N(1,1,1),cr=new N(0,1,0);function Ix(i,t){const e=Gi({...i,coat:"#ffffff"});t(e);const n=new Et;n.add(e.group);const s=o=>o.userData.part==="coat";return{coat:Jn(n,void 0,s),rest:Jn(n,void 0,o=>!s(o))}}class hr{constructor(t,e,n,s,o){O(this,"meshes",[]);for(const r of e){const a=[];for(let l=0;l<n;l++){const c=Ix(r,d=>o(d,l)),h=new dn(c.coat,Bh(),s),f=new dn(c.rest,Bh(),s);for(const d of[h,f])d.count=0,d.castShadow=!0,d.frustumCulled=!1,d.instanceMatrix.setUsage(Fi),t.add(d);a.push({coat:h,rest:f})}this.meshes.push(a)}}begin(){for(const t of this.meshes)for(const{coat:e,rest:n}of t)e.count=n.count=0}put(t,e,n,s){const{coat:o,rest:r}=this.meshes[t%this.meshes.length][e%this.meshes[0].length],a=o.count++;r.count++,o.setMatrixAt(a,n),r.setMatrixAt(a,n),o.setColorAt(a,s)}end(){for(const t of this.meshes)for(const{coat:e,rest:n}of t)e.instanceMatrix.needsUpdate=n.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}}const Bh=()=>new jt({vertexColors:!0,roughness:.75});function Ux(){const i=new Et,t=a=>new jt({color:a});for(const a of[-.55,.55]){const l=new J(new un(.33,.03,5,12),t("#1b1b1b"));l.position.set(0,.33,a),l.rotation.y=Math.PI/2,i.add(l)}const e=new J(new Vt(.05,.05,.9),t("#2e86c1"));e.position.set(0,.62,0),e.rotation.x=-.12;const n=new J(new Vt(.04,.32,.04),t("#2e86c1"));n.position.set(0,.68,-.18);const s=new J(new Vt(.12,.05,.22),t("#1b1b1b"));s.position.set(0,.86,-.18);const o=new J(new Vt(.04,.42,.04),t("#2e86c1"));o.position.set(0,.78,.45);const r=new J(new Vt(.5,.035,.035),t("#1b1b1b"));return r.position.set(0,.99,.43),i.add(e,n,s,o,r),Jn(i)}function Nx(){const i=new Et,t=o=>new jt({color:o}),e=new J(new Vt(.22,.22,.55),t("#8a5a2b"));e.position.y=.35;const n=new J(new Vt(.18,.18,.2),t("#7a4a22"));n.position.set(0,.5,.33),i.add(e,n);for(const[o,r]of[[-.08,-.2],[.08,-.2],[-.08,.2],[.08,.2]]){const a=new J(new Vt(.05,.25,.05),t("#6a3a1a"));a.position.set(o,.12,r),i.add(a)}const s=new J(new Vt(.04,.04,.22),t("#8a5a2b"));return s.position.set(0,.48,-.36),s.rotation.x=.6,i.add(s),Jn(i)}function Hh(i){const t=new Et,e=a=>new jt({color:a}),n=i?1.9:1,s=new J(new We(.16*n,6,4),e(i?"#f4f4f0":"#8a6a4a"));if(s.scale.set(.8,.55,1.3),s.position.y=.05*n,t.add(s),i){const a=new J(new Qt(.035,.05,.5,5),e("#f4f4f0"));a.position.set(0,.32,.2),a.rotation.x=.25,t.add(a)}const o=new J(new We(.07*(i?1.1:1),6,4),e(i?"#f4f4f0":"#2f6b3a"));o.position.set(0,i?.58:.17,i?.28:.16);const r=new J(new Yn(.03,.1,4),e(i?"#e07a2a":"#e2b23a"));return r.position.set(0,o.position.y-.01,o.position.z+.09),r.rotation.x=Math.PI/2,t.add(o,r),Jn(t)}class Ox{constructor(t,e,n,s,o,r){O(this,"group",new Et);O(this,"events",[]);O(this,"movers",[]);O(this,"birds",[]);O(this,"anglers",[]);O(this,"walkers");O(this,"joggers");O(this,"riders");O(this,"bikes");O(this,"dogs");O(this,"ducks");O(this,"swans");O(this,"time",0);O(this,"rand",vi(31));this.route=t,this.ww=e,this.terrain=n,this.boat=s;const a=this.rand,l=Array.from({length:Ea},()=>Hi(a)),c=22;this.walkers=new hr(this.group,l,eo,c,(d,u)=>Sl(d,u/eo*Math.PI*2)),this.joggers=new hr(this.group,l.slice(0,2),eo,c,(d,u)=>{Sl(d,u/eo*Math.PI*2,1.5),d.armL.rotation.x-=.6,d.armR.rotation.x-=.6}),this.riders=new hr(this.group,l.slice(1,3),4,c,(d,u)=>nx(d,u/4*Math.PI*2)),this.bikes=new dn(Ux(),$n(),c),this.dogs=new dn(Nx(),$n(),c);for(let d=0;d<c;d++){const u=d<14?"walk":d<18?"jog":"cycle",m={s:s.s+(a()-.5)*Ta*2,d:0,dir:a()<.5?1:-1,kind:u,phase:a()*10,speed:u==="walk"?1.1+a()*.4:u==="jog"?2.6+a()*.6:4+a()*1.5,dog:u==="walk"&&a()<.45,coat:new kt(ao[Math.floor(a()*ao.length)]),look:Math.floor(a()*Ea)};m.d=this.laneFor(m),this.movers.push(m)}for(const d of[this.bikes,this.dogs])d.castShadow=!0,d.instanceMatrix.setUsage(Fi),d.frustumCulled=!1,this.group.add(d);for(const d of o){const u=Gi(Hi(a,{hairStyle:a()<.5?"cap":"beanie",coat:a()<.5?"#3d5a3d":"#5a4a3a"})),m=t.frame(d.s),_=(e.halfWidthAt(d.s)+.9)*oe,g=new Et;g.add(u.group),El(u);const p=new J(new Vt(.5,.4,.35),new jt({color:"#3d5a3d"}));p.position.set(0,.2,-.1),g.add(p);const x=new J(new Qt(.01,.02,4.2,4),new jt({color:"#2b2b2b"}));x.position.set(.25,1.3,1.6),x.rotation.x=1.05,g.add(x),g.position.set(m.x+m.nx*_,n.bankTop(d.s),m.z+m.nz*_),g.rotation.y=Math.atan2(-m.nx*oe,-m.nz*oe),this.group.add(g),this.anglers.push({s:d.s,person:u,angryUntil:0,lastGrumble:-99})}const h=new hr(this.group,l,1,64,d=>El(d));h.begin();for(const d of r)for(const u of[-1,1])if(!(a()<.35))for(const m of[-.5,.5]){if(a()<.4)continue;const _=new N(m,0,u*.62).applyAxisAngle(cr,d.ry);ci.setFromAxisAngle(cr,d.ry+(u>0?Math.PI:0)),vn.compose(no.set(d.x+_.x,d.y,d.z+_.z),ci,io),h.put(Math.floor(a()*Ea),0,vn,new kt(ao[Math.floor(a()*ao.length)]))}h.end();let f=0;for(let d=120;d<t.length-60;d+=160+a()*260){if(e.bodies[e.bodyIndexAt(d)].kind!=="pound")continue;const u=a()<.22,m=u?2:2+Math.floor(a()*4);f++;for(let _=0;_<m;_++)this.birds.push({s:d+(a()-.5)*8,d:(a()-.5)*5,vs:0,vd:0,swan:u,heading:a()*6,flock:f,lastQuack:-99})}this.ducks=new dn(Hh(!1),$n(),Math.max(1,this.birds.filter(d=>!d.swan).length)),this.swans=new dn(Hh(!0),$n(),Math.max(1,this.birds.filter(d=>d.swan).length));for(const d of[this.ducks,this.swans])d.instanceMatrix.setUsage(Fi),d.frustumCulled=!1,this.group.add(d)}laneFor(t){return this.ww.halfWidthAt(Se(t.s,0,this.route.length))+1.6+(t.dir>0?-.35:.35)}update(t){this.time+=t;const e=this.boat,n=this.route.length,s=e.speed*2.237>3;let o=0,r=0;for(const c of[this.walkers,this.joggers,this.riders])c.begin();this.movers.forEach(c=>{c.s+=c.dir*c.speed*t,c.phase+=t*c.speed*4.5,(Math.abs(c.s-e.s)>Ta||c.s<5||c.s>n-5)&&(c.s=Se(e.s+(this.rand()<.5?-1:1)*(Ta-20-this.rand()*60),5,n-5),c.dir=c.s>e.s?-1:1,this.rand()<.5&&(c.dir*=-1)),c.d+=(this.laneFor(c)-c.d)*Math.min(1,t*2);const h=this.route.frame(c.s),f=h.x+h.nx*c.d*oe,d=h.z+h.nz*c.d*oe,u=c.kind==="cycle"?0:Math.abs(Math.cos(c.phase))*(c.kind==="jog"?.05:.025),m=this.terrain.bankTop(c.s)+(c.kind==="cycle"?-.07:u),_=Math.atan2(h.tx,h.tz)+(c.dir>0?0:Math.PI);ci.setFromAxisAngle(cr,_),vn.compose(no.set(f,m,d),ci,io);const g=Math.floor(c.phase/(Math.PI*2)%1*eo);if((c.kind==="walk"?this.walkers:c.kind==="jog"?this.joggers:this.riders).put(c.look,c.kind==="cycle"?g%4:g,vn,c.coat),c.kind==="cycle"&&(vn.compose(no.set(f,this.terrain.bankTop(c.s),d),ci,io),this.bikes.setMatrixAt(o++,vn)),c.dog){const x=Math.sin(c.phase*.3)*.6+1.2,M=f-Math.sin(_)*x+h.nx*.5,v=d-Math.cos(_)*x+h.nz*.5;vn.compose(no.set(M,this.terrain.bankTop(c.s)+Math.abs(Math.sin(c.phase*1.6))*.04,v),ci,io),this.dogs.setMatrixAt(r++,vn)}}),this.bikes.count=o,this.dogs.count=r;for(const c of[this.walkers,this.joggers,this.riders])c.end();for(const c of[this.bikes,this.dogs])c.instanceMatrix.needsUpdate=!0;for(const c of this.anglers)s&&Math.abs(c.s-e.s)<14&&this.time-c.lastGrumble>20&&(c.lastGrumble=this.time,c.angryUntil=this.time+4,this.events.push({kind:"angler"})),bo(c.person,this.time<c.angryUntil?"shake":"rest",this.time);let a=0,l=0;for(const c of this.birds){const h=c.s-e.s,f=c.d-e.d,d=Math.hypot(h,f);d<14?(c.vd+=Math.sign(f||1)*.6*t*(14-d),c.vs+=Math.sign(h||1)*.25*t*(14-d),d<5&&this.time-c.lastQuack>6&&!c.swan&&(c.lastQuack=this.time,this.events.push({kind:"quack"}))):(c.vs+=Math.sin(this.time*.3+c.flock*7+c.heading)*.05*t,c.vd+=Math.cos(this.time*.23+c.flock*3)*.04*t);const u=c.swan?.6:.9;c.vs=Se(c.vs*(1-t*.4),-u,u),c.vd=Se(c.vd*(1-t*.4),-u,u),c.s=Se(c.s+c.vs*t,5,n-5);const m=this.ww.halfWidthAt(c.s)-.4;c.d=Se(c.d+c.vd*t,-m,m),Math.abs(c.d)>=m&&(c.vd*=-.3);const _=this.route.frame(c.s),g=Math.atan2(_.tx*c.vs+_.nx*c.vd,_.tz*c.vs+_.nz*c.vd);Math.hypot(c.vs,c.vd)>.05&&(c.heading+=Math.atan2(Math.sin(g-c.heading),Math.cos(g-c.heading))*Math.min(1,t*3)),ci.setFromAxisAngle(cr,c.heading),vn.compose(no.set(_.x+_.nx*c.d,this.ww.levelAt(c.s)+Math.sin(this.time*2+c.s)*.01,_.z+_.nz*c.d),ci,io),c.swan?this.swans.setMatrixAt(l++,vn):this.ducks.setMatrixAt(a++,vn)}this.ducks.count=a,this.swans.count=l,this.ducks.instanceMatrix.needsUpdate=this.swans.instanceMatrix.needsUpdate=!0}}const Fx=5,In=(i,t={})=>new jt({color:i,roughness:.6,...t});function kx(){const i=new Et,t=In("#b8bcc2",{metalness:.8,roughness:.3}),e=(s,o,r,a,l,c)=>{const h=new J(new Vt(s,o,r),t);h.position.set(a,l,c),i.add(h)};for(const s of[.45,.95])e(.55,.025,.025,0,s,.45),e(.55,.025,.025,0,s,-.45),e(.025,.025,.9,.27,s,0),e(.025,.025,.9,-.27,s,0);for(const s of[-.27,.27])for(const o of[-.45,.45])e(.025,.5,.025,s,.7,o);for(let s=-.35;s<=.36;s+=.14)e(.55,.012,.012,0,.45,s);const n=new J(new Vt(.6,.05,.05),In("#c0392b"));n.position.set(0,1.05,-.52),i.add(n);for(const s of[-.25,.25])for(const o of[-.4,.4]){const r=new J(new Qt(.06,.06,.04,8),In("#2b2b2b"));r.rotation.z=Math.PI/2,r.position.set(s,.1,o),i.add(r)}return i}function zx(){const i=new Et;for(const n of[-.5,.5]){const s=new J(new un(.33,.03,5,14),In("#1b1b1b"));s.position.set(0,.33,n),s.rotation.y=Math.PI/2,i.add(s)}const t=new J(new Vt(.04,.04,1),In("#27ae60"));t.position.y=.55,i.add(t);const e=new J(new Vt(.5,.04,.04),In("#1b1b1b"));return e.position.set(0,.85,.45),i.add(e),i}function Bx(i){const t=new Et,e=new J(new Qt(.06,.1,i,5),In("#5a4632"));e.rotation.z=Math.PI/2,t.add(e);const n=new J(new Qt(.02,.04,i*.4,4),In("#6a5440"));n.position.set(i*.15,.05,.12),n.rotation.set(0,.6,Math.PI/2),t.add(n);const s=new J(new Qe(.3,0),In("#5c7a3a"));return s.position.set(-i*.4,.05,0),s.scale.y=.4,t.add(s),t}const Gh=["trolley","bike","branches"];class Hx{constructor(t,e,n){O(this,"kind","trolley");O(this,"group",new Et);O(this,"s",0);O(this,"active",!1);O(this,"spotted",!1);O(this,"progress",0);O(this,"clearing",!1);O(this,"obstacle",{x:0,z:0,psi:0,halfL:1.2,halfB:0});O(this,"pieces",[]);this.route=t,this.ww=e,this.terrain=n}place(t){this.reset(),this.s=t,this.active=!0,this.spotted=!1;const e=this.route.frame(t),n=this.ww.halfWidthAt(t),s=this.ww.levelAt(t),o=Math.atan2(e.tx,e.tz);Object.assign(this.obstacle,{x:e.x,z:e.z,psi:o,halfB:n});const r=(a,l,c,h,f,d,u,m)=>{u.position.set(e.x+e.nx*a+e.tx*l,s+c,e.z+e.nz*a+e.tz*l),u.rotation.set(f,o+h,d),this.group.add(u);const[_,g]=this.route.point(t+m*.6,(n+1.5+Math.abs(m)*.25)*oe);this.pieces.push({obj:u,from:u.position.clone(),fromRot:u.rotation.clone(),to:new N(_,this.terrain.bankTop(t)+.05,g)})};if(this.kind=Gh[Math.floor(Math.random()*Gh.length)],this.kind==="trolley")r(0,0,-.55,.4,.5,.3,kx(),0);else if(this.kind==="bike")r(0,.2,-.35,1.2,1.2,.2,zx(),0);else for(let a=0;a<6;a++){const l=-n+.6+a/5*(n*2-1.2);r(l,a%2?.4:-.4,.02,.3+a*.5,0,0,Bx(1.6+a%3*.6),a-3)}for(let a=0;a<4;a++){const l=new J(a%2?new Qe(.2,0):new Qt(.04,.04,.12,8),In(["#f2f2f2","#c0392b","#3a3a3a","#2e86c1"][a]));a%2?l.scale.y=.6:l.rotation.z=Math.PI/2,r(-n+1+a*(n*.6),a%2?.7:-.6,.05,a,0,0,l,a-2)}}get description(){return{trolley:{spotted:"Uh-oh: a shopping trolley is jammed in the canal ahead, right in your way.",cleared:"Cleared! One dripping shopping trolley now sits on the towpath. Tesco will be thrilled."},bike:{spotted:"Uh-oh: someone has thrown a bike in the canal ahead, and it's blocking the way.",cleared:"Cleared! A very sorry-looking bike now leans on the towpath fence."},branches:{spotted:"Uh-oh: a raft of fallen branches is jammed across the canal ahead.",cleared:"Cleared! The branches are stacked on the towpath. Someone will be glad of the kindling."}}[this.kind]}reset(){for(const t of this.pieces)this.group.remove(t.obj);this.pieces=[],this.active=!1,this.clearing=!1,this.progress=0}startClearing(){return!this.active||this.clearing?!1:(this.clearing=!0,!0)}update(t,e){return this.active?this.clearing?(this.progress=Math.min(1,this.progress+t/Fx),this.pieces.forEach((n,s)=>{const o=s/this.pieces.length*.85,r=Math.min(1,Math.max(0,(this.progress-o)/.15));r<=0||(n.obj.position.lerpVectors(n.from,n.to,r),n.obj.position.y+=Math.sin(r*Math.PI)*1.4,n.obj.rotation.set(n.fromRot.x*(1-r),n.fromRot.y,n.fromRot.z*(1-r)+(r>.99?s%3*.4:0)))}),this.progress>=1?(this.active=!1,this.clearing=!1,!0):!1):(this.pieces.forEach((n,s)=>n.obj.position.y=n.from.y+Math.sin(e*1.3+s)*.03),!1):!1}}const Gx=.75,Vx=1.6,Vh=1.4;class Wx{constructor(t,e,n,s){O(this,"group",new Et);O(this,"staffed",new Set);O(this,"active",null);O(this,"helpers",new Map);O(this,"actKey","");O(this,"actAt",0);O(this,"driveTarget",null);O(this,"time",0);O(this,"busyGate",null);this.route=t,this.ww=e,this.terrain=n,this.boat=s,this.roster()}roster(){for(const t of this.helpers.values())for(const e of t)this.group.remove(e.person.group);this.helpers.clear(),this.staffed.clear();for(const t of this.ww.groups){if(!(t.staircase||Math.random()<.4))continue;this.staffed.add(t);const e=[];for(const n of[-3,3]){const s=Gi(Hi(Math.random,{coat:"#1d5fa8",longCoat:!1}));this.group.add(s.group),e.push({person:s,s:(t.gates[0].s+t.gates.at(-1).s)/2+n,offset:n})}this.helpers.set(t,e)}}isStaffed(t){return!!t&&this.staffed.has(t)}start(t){this.active=t,this.driveTarget=null,this.actKey=""}stop(){this.active=null,this.driveTarget=null,this.busyGate=null}update(t,e,n){if(this.time+=t,this.animateHelpers(t),!this.active)return"idle";if(!e||e.group!==this.active)return this.stop(),"done";const s=this.boat,o=n?1:-1;if(e.action==="drive"){if(this.driveTarget===null){const r=this.ww.gates.filter(a=>a.group===this.active&&(a.s-s.s)*o>-.5).sort((a,l)=>(a.s-l.s)*o)[0];if(!r)this.driveTarget=s.s+o*30;else{const a=this.ww.bodies[n?r.above:r.below];this.driveTarget=a.kind==="chamber"?(a.s0+a.s1)/2:r.s+o*(fn/2+14)}}this.creepTo(this.driveTarget,t)}else if(this.driveTarget=null,this.creepTo(null,t),e.gate&&e.action!=="wait"){this.busyGate=e.gate;const r=`${e.action}:${e.gate.label}`;if(r!==this.actKey)this.actKey=r,this.actAt=this.time+Vx+this.walkTime(e.gate);else if(this.time>=this.actAt){const a=e.gate;e.action==="paddlesUp"?a.wantPaddle=!0:e.action==="paddlesDown"?a.wantPaddle=!1:e.action==="close"?a.wantOpen=!1:e.action==="open"&&this.ww.levelsMatch(a)&&(a.wantOpen=!0),this.actKey=""}}else e.gate&&(this.busyGate=e.gate);return"running"}walkTime(t){const e=this.helpers.get(this.active);return e?Math.min(...e.map(n=>Math.abs(n.s-t.s)))/Vh:0}creepTo(t,e){const n=this.boat,s=this.route.frame(n.s);let o=0;if(t!==null){const l=t-n.s;o=Math.sign(l)*Math.min(Gx,Math.abs(l)*.5),Math.abs(l)<.05&&(o=0)}n.s+=o*e,n.d+=(0-n.d)*Math.min(1,e*.8);const r=this.route.frame(n.s);n.x=r.x+r.nx*n.d,n.z=r.z+r.nz*n.d;const a=Math.atan2(s.tx,s.tz)+(Math.cos(n.psi-Math.atan2(s.tx,s.tz))>=0?0:Math.PI);n.psi+=Math.atan2(Math.sin(a-n.psi),Math.cos(a-n.psi))*Math.min(1,e*1.5),n.u=Math.abs(o),n.v=n.r=0,n.notch=0,n.thrust=0}animateHelpers(t){var e;for(const[n,s]of this.helpers){const o=this.active===n&&((e=this.busyGate)==null?void 0:e.group)===n;for(const r of s){const a=(n.gates[0].s+n.gates.at(-1).s)/2+r.offset,l=o?this.busyGate.s+r.offset*.9:a,c=Math.sign(l-r.s)*Math.min(Math.abs(l-r.s),Vh*t);r.s+=c;const h=this.ww.halfWidthAt(r.s),f=r.offset<0?oe:-oe,[d,u]=this.route.point(r.s,(h+1.1)*f);r.person.group.position.set(d,this.terrain.bankTop(r.s)+(Math.abs(c)>.001?Math.abs(Math.sin(this.time*6))*.03:0),u);const m=this.route.frame(r.s);r.person.group.rotation.y=Math.abs(c)>.001?Math.atan2(m.tx*Math.sign(c),m.tz*Math.sign(c)):Math.atan2(-m.nx*f,-m.nz*f);const _=o&&Math.abs(r.s-l)<.5,g=this.busyGate,p=_&&!!g&&g.paddle>.02&&g.paddle<.98;Math.abs(c)>.001?Sl(r.person,this.time*6):(ex(r.person),bo(r.person,p?"wind":_&&g&&g.open>.02&&g.open<.98?"push":"rest",this.time))}}}}const Wh=new kt("#b0664d"),Xh=new kt("#c9a58a"),Aa=new kt("#d0b896");class Xx{constructor(){O(this,"pos",[]);O(this,"col",[])}tri(t,e,n,s){for(const o of[t,e,n])this.pos.push(o.x,o.y,o.z),this.col.push(s.r,s.g,s.b)}quad(t,e,n,s,o){this.tri(t,e,n,o),this.tri(t,n,s,o)}mesh(){const t=new ue;t.setAttribute("position",new Wt(this.pos,3)),t.setAttribute("color",new Wt(this.col,3)),t.computeVertexNormals();const e=new J(t,new jt({vertexColors:!0,roughness:.9,flatShading:!0,side:Te}));return e.castShadow=e.receiveShadow=!0,e}}class $x{constructor(t,e,n,s){O(this,"group",new Et);this.route=t,this.ww=e,this.terrain=n;const o=new Xx;for(const r of s.walls??[]){const a=[];for(let l=0;l<r.p.length;l+=2)a.push([r.p[l],r.p[l+1]]);r.kind==="gate"?this.gate(o,a):r.closed?this.extrude(o,a,2.4,Wh,Xh):this.extrude(o,qx(a,1.3),2.4,Wh,Xh)}this.group.add(o.mesh()),s.bridgeOfSighs&&this.group.add(this.bridgeOfSighs(s.bridgeOfSighs))}ground(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s),o=Math.sign(n.d||1)*Math.max(n.dist,s+7);return this.terrain.landHeight(t,e,n.s,o)}extrude(t,e,n,s,o){const r=e.length;if(r<3)return;const a=e.map(([h,f])=>this.ground(h,f)+n),l=(h,f)=>new N(e[h][0],f,e[h][1]);for(let h=0;h<r;h++){const f=(h+1)%r;t.quad(l(h,a[h]-n-7),l(f,a[f]-n-7),l(f,a[f]),l(h,a[h]),s)}const c=Dn.triangulateShape(e.map(([h,f])=>new ot(h,f)),[]);for(const[h,f,d]of c)t.tri(l(h,a[h]),l(f,a[f]),l(d,a[d]),o);for(let h=0;h<r;h++){const f=(h+1)%r,d=Math.hypot(e[f][0]-e[h][0],e[f][1]-e[h][1]);for(let u=.6;u<d-.3;u+=2.2){const m=u/d,_=e[h][0]+(e[f][0]-e[h][0])*m,g=e[h][1]+(e[f][1]-e[h][1])*m,p=a[h]+(a[f]-a[h])*m;ur(t,_,p+.45,g,.9,.9,.5,Math.atan2(e[f][0]-e[h][0],e[f][1]-e[h][1]),s)}}}gate(t,e){const n=e.reduce((w,y)=>w+y[0],0)/e.length,s=e.reduce((w,y)=>w+y[1],0)/e.length;let o=0,r=0,a=0;for(const[w,y]of e)o+=(w-n)**2,r+=(y-s)**2,a+=(w-n)*(y-s);const l=.5*Math.atan2(2*a,o-r),c=Math.cos(l),h=Math.sin(l);let f=1/0,d=-1/0,u=1/0,m=-1/0;for(const[w,y]of e){const C=(w-n)*c+(y-s)*h,S=-(w-n)*h+(y-s)*c;f=Math.min(f,C),d=Math.max(d,C),u=Math.min(u,S),m=Math.max(m,S)}const _=this.ground(n,s),g=d-f,p=Math.max(4,m-u),x=Math.atan2(c,h),M=w=>[n+c*w,s+h*w],[v,T]=M((f+d)/2);ur(t,v,_+7.4,T,p,3.2,g,x,Aa);for(const w of[f+1.8,d-1.8]){const[y,C]=M(w);ur(t,y,_+2.9,C,p,5.8,3.6,x,Aa,6)}ur(t,v,_+9.4,T,p*.15,.9,g,x,Aa)}bridgeOfSighs(t){const e=this.route,n=this.ww,s=e.frame(t.s),o=n.levelAt(t.s),r=n.halfWidthAt(t.s),a=r+7.5,l=Math.max(...[-1,1].map(p=>{const[x,M]=e.point(t.s,a*p);return this.terrain.landHeight(x,M,t.s,a*p)}))+.1,c=a+1,h=r+3.6,f=l-.75,d=o+1.2,u=new $i;u.moveTo(-c,o-2),u.lineTo(-h,o-2),u.lineTo(-h,d);for(let p=1;p<20;p++){const x=Math.PI-Math.PI*p/20;u.lineTo(Math.cos(x)*h,d+Math.sin(x)*(f-d))}u.lineTo(h,d),u.lineTo(h,o-2),u.lineTo(c,o-2),u.lineTo(c,l),u.lineTo(-c,l),u.closePath();const m=2,_=new J(new zs(u,{depth:m,bevelEnabled:!1,curveSegments:12}).translate(0,0,-m/2),new jt({color:"#a8654f",roughness:.9,flatShading:!0}));_.castShadow=_.receiveShadow=!0;const g=new Et;return g.add(_),g.position.set(s.x,0,s.z),g.rotation.y=Math.atan2(-s.nz,s.nx),g.name="bridge-of-sighs",g}}function qx(i,t){const e=[],n=[];for(let s=0;s<i.length;s++){const o=i[Math.max(0,s-1)],r=i[Math.min(i.length-1,s+1)];let a=r[0]-o[0],l=r[1]-o[1];const c=Math.hypot(a,l)||1;a/=c,l/=c,e.push([i[s][0]-l*t,i[s][1]+a*t]),n.push([i[s][0]+l*t,i[s][1]-a*t])}return[...e,...n.reverse()]}function ur(i,t,e,n,s,o,r,a,l,c=0){const h=Math.sin(a),f=Math.cos(a),d=(M,v,T)=>new N(t+M*f+T*h,e+v,n-M*h+T*f),u=s/2,m=r/2,_=-o/2-c,g=o/2,p=[d(-u,_,-m),d(u,_,-m),d(u,_,m),d(-u,_,m),d(-u,g,-m),d(u,g,-m),d(u,g,m),d(-u,g,m)],x=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7]];for(const[M,v,T,w]of x)i.quad(p[M],p[v],p[T],p[w],l)}const Yx=1.69,ye=(i,t={})=>new jt({color:i,roughness:.6,flatShading:!0,...t}),ge=(i,t,e,n,s,o,r=0,a=0,l=0)=>{const c=new J(t,e);return c.position.set(n,s,o),c.rotation.set(r,a,l),c.castShadow=!0,i.add(c),c},fo={buckby:{name:"a Buckby can",at:[.35,-6],build(){const i=new Et;ge(i,new Qt(.17,.19,.5,12),ye("#1f4d3a"),0,.25,0),ge(i,new Qt(.175,.185,.14,12),ye("#a3291f"),0,.27,0);for(let t=0;t<4;t++)ge(i,new We(.035,6,4),ye(t%2?"#f2c94c":"#f4f1e8"),Math.sin(t*1.6)*.18,.27,Math.cos(t*1.6)*.18);return ge(i,new Qt(.1,.17,.08,12),ye("#1f4d3a"),0,.54,0),ge(i,new Qt(.06,.06,.06,10),ye("#c9a24a",{metalness:.8,roughness:.3}),0,.6,0),ge(i,new un(.11,.015,6,12,Math.PI),ye("#1f4d3a"),0,.56,0),ge(i,new Qt(.025,.035,.22,6),ye("#1f4d3a"),.17,.4,0,0,0,-.9),i}},bike:{name:"a bicycle",at:[-.15,2.4],build(){const i=new Et,t=ye("#1b1b1b"),e=ye("#c0392b");for(const n of[-.5,.5])ge(i,new un(.3,.025,5,16),t,0,.04,n,Math.PI/2);return ge(i,new Vt(.04,.04,.95),e,0,.06,0),ge(i,new Vt(.04,.04,.5),e,.12,.06,.15,0,.5),ge(i,new Vt(.5,.03,.03),t,0,.07,.45),ge(i,new Vt(.1,.04,.2),t,0,.08,-.25),i}},lifebuoy:{name:"a lifebuoy",at:[-.4,-5.5],build(){const i=new Et;for(let t=0;t<4;t++)ge(i,new un(.3,.075,6,6,Math.PI/2),ye(t%2?"#f4f4f0":"#e0522f"),0,.08,0,Math.PI/2,0,t*Math.PI/2);return i}},brasses:{name:"polished chimney brasses",at:[.45,3.7],build(){const i=new Et,t=ye("#e2b84a",{metalness:.9,roughness:.2});for(const e of[.1,.32,.5])ge(i,new Qt(.08,.08,.04,10),t,0,e,0);for(let e=0;e<5;e++)ge(i,new un(.03,.008,4,8),t,.06+e*.03,.42-e*.07,0,0,0,e%2?0:Math.PI/2);return i}},logs:{name:"a stack of firewood",at:[.3,-2.6],build(){const i=new Et,t=ye("#6b4a2e"),e=ye("#c9a27a");let n=0;for(let s=0;s<3;s++)for(let o=0;o<4-s;o++,n++){const r=ge(i,new Qt(.07,.07,.7,6),n%3?t:e,-.22+o*.15+s*.075,.07+s*.12,0,Math.PI/2);r.rotation.y=n%2*.05}return i}},coal:{name:"two sacks of coal",at:[.3,-1.3],build(){const i=new Et;for(const t of[-.25,.25])ge(i,new Qe(.22,1),ye("#3a3a3a",{roughness:.95}),0,.14,t).scale.set(1,.65,1.15);return i}},cat:{name:"a ship’s cat",at:[-.3,4.5],build(){const i=new Et,t=ye("#d9822b");ge(i,new We(.16,10,8),t,0,.1,0).scale.set(1,.6,1.25),ge(i,new We(.09,10,8),t,.08,.13,.15);for(const e of[.03,.13])ge(i,new Yn(.03,.06,4),t,e,.22,.15);return ge(i,new un(.13,.025,5,10,Math.PI*1.2),t,0,.04,0,Math.PI/2,0,1),i}},gnome:{name:"a garden gnome",at:[.4,-4.9],build(){const i=new Et;return ge(i,new Qt(.09,.11,.2,8),ye("#2e86c1"),0,.1,0),ge(i,new We(.07,8,6),ye("#f1c6a5"),0,.26,0),ge(i,new Yn(.06,.12,6),ye("#f4f4f0"),0,.2,.05,.3),ge(i,new Yn(.075,.2,8),ye("#c0392b"),0,.4,0),i}},sunflower:{name:"a sunflower in a pot",at:[.4,1.4],build(){const i=new Et;return ge(i,new Qt(.15,.11,.22,8),ye("#9b5a3c"),0,.11,0),ge(i,new Qt(.015,.02,.7,5),ye("#4f7a33"),0,.55,0),ge(i,new Qt(.13,.13,.03,12),ye("#f2c94c"),0,.92,.02,1.2),ge(i,new Qt(.06,.06,.04,10),ye("#5a3d22"),0,.92,.04,1.2),i}}},jx=["buckby","bike","lifebuoy","brasses"],Zx=["cat","gnome","sunflower"];class Kx{constructor(t){O(this,"owned",new Set);O(this,"meshes",new Map);this.boat=t;try{for(const e of JSON.parse(localStorage.getItem("canal.roof")??"[]"))e in fo&&this.show(e)}catch{}}has(t){return this.owned.has(t)}give(t){if(this.owned.has(t))return!1;this.show(t);try{localStorage.setItem("canal.roof",JSON.stringify([...this.owned]))}catch{}return!0}nextFrom(t){return t.find(e=>!this.owned.has(e))??null}show(t){this.owned.add(t);const e=fo[t],n=e.build();n.position.set(e.at[0],Yx,e.at[1]),this.boat.add(n),this.meshes.set(t,n)}}const Es=i=>new jt({color:i,roughness:.85,flatShading:!0});function Wu(i,t){const e=document.createElement("canvas");e.width=256,e.height=128;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,256,128),n.fillStyle="#f6efdd",n.font="800 34px Nunito, sans-serif",n.textAlign="center",n.textBaseline="middle",i.split(`
`).forEach((r,a,l)=>n.fillText(r,128,64+(a-(l.length-1)/2)*40,236));const s=new Un(e);s.colorSpace=Ce;const o=new J(new Qn(.8,.4),new jt({map:s,side:Te}));return o.position.y=1,o}function Jx(){const i=new Et,t=Es("#6b4a2e"),e=Es("#c9a27a");for(let r=0;r<4;r++)for(let a=0;a<6-r;a++){const l=new J(new Qt(.08,.08,.6,6),(a+r)%3?t:e);l.rotation.x=Math.PI/2,l.position.set(-.4+a*.17+r*.085,.08+r*.14,0),l.castShadow=!0,i.add(l)}const n=new J(new Vt(.3,.3,.25),Es("#3d5a3d"));n.position.set(.85,.15,0),i.add(n);const s=Wu(`LOGS £5
honesty box`,"#3d5a3d");s.position.set(.85,.95,0);const o=new J(new Vt(.06,.8,.06),Es("#5a4632"));return o.position.set(.85,.5,-.05),i.add(s,o),i}function Qx(){const i=new Et;for(let n=0;n<5;n++){const s=new J(new Qe(.24,1),Es("#3a3a3a"));s.scale.set(1,.7,1.2),s.position.set(-.5+n%3*.45,.16+Math.floor(n/3)*.3,0),s.castShadow=!0,i.add(s)}const t=Wu(`COAL
& kindling`,"#2b2b2b");t.position.set(.85,.95,0);const e=new J(new Vt(.06,.8,.06),Es("#5a4632"));return e.position.set(.85,.5,-.05),i.add(t,e),i}class tM{constructor(t,e,n,s,o){O(this,"group",new Et);O(this,"list",[]);for(const r of s){const a=r.item==="logs"?Jx():Qx(),l=t.frame(r.s),c=(e.halfWidthAt(r.s)+2.2)*oe;a.position.set(l.x+l.nx*c,n.bankTop(r.s),l.z+l.nz*c),a.rotation.y=Math.atan2(l.tx,l.tz)+Math.PI/2*oe,a.visible=!o(r.item),this.group.add(a),this.list.push({...r,group:a,verb:r.item==="logs"?"Load the logs (drop a fiver in the honesty box)":"Load a couple of sacks of coal",done:r.item==="logs"?"Logs loaded onto the roof. The stove will be roaring tonight.":"Two sacks of coal on the roof. Toasty."})}}near(t){return this.list.find(e=>e.group.visible&&Math.abs(e.s-t)<22)}}const eM=1.435,$h=650,nM=18,Li=20,xs=3;class iM{constructor(t,e,n,s,o){O(this,"group",new Et);O(this,"lines",[]);O(this,"cars",[]);O(this,"run",null);O(this,"nextRun",12);O(this,"time",0);O(this,"rumble",0);this.route=t,this.ww=e,this.terrain=n,this.bridges=s;const r=s.placed.find(p=>p.data.kind==="rail");if(!r)return;const a=[r.x,r.z],l=o.map(p=>{const x=[];for(let M=0;M<p.p.length;M+=2)x.push([p.p[M],p.p[M+1]]);return{pts:x,bridge:p.b===1}}),c=p=>Math.min(...p.pts.map(x=>Math.hypot(x[0]-a[0],x[1]-a[1]))),h=p=>`${p[0]},${p[1]}`,f=new Map;l.forEach((p,x)=>{for(const M of[p.pts[0],p.pts.at(-1)])f.set(h(M),[...f.get(h(M))??[],x])});const d=new Set,u=p=>{for(let x=0;x<200;x++){const M=p.at(-1),v=p.at(-2),T=M[0]-v[0],w=M[1]-v[1];let y=-1,C=.7,S=[];for(const b of f.get(h(M))??[]){if(d.has(b))continue;const L=l[b].pts,H=h(L[0])===h(M)?L:[...L].reverse(),z=H[1][0]-H[0][0],V=H[1][1]-H[0][1],k=(T*z+w*V)/(Math.hypot(T,w)*Math.hypot(z,V)||1);k>C&&(C=k,y=b,S=H)}if(y<0)return;d.add(y),p.push(...S.slice(1))}},m=l.map((p,x)=>({w:p,i:x})).filter(({w:p})=>p.bridge&&c(p)<30);for(const{w:p,i:x}of m){if(d.has(x))continue;d.add(x);const M=[...p.pts];u(M);const v=[...p.pts].reverse();u(v);const T=[...v.reverse().slice(0,-p.pts.length),...M];if(T.length<4)continue;const w=[T[0]];for(let C=1;C<T.length;C++){const[S,b]=T[C-1],[L,H]=T[C],z=Math.max(1,Math.ceil(Math.hypot(L-S,H-b)/4));for(let V=1;V<=z;V++)w.push([S+(L-S)*V/z,b+(H-b)*V/z])}const y=[0];for(let C=1;C<w.length;C++)y.push(y[C-1]+Math.hypot(w[C][0]-w[C-1][0],w[C][1]-w[C-1][1]));y.at(-1)<300||this.lines.push({pts:w,ys:this.gradedHeights(w,y,a),cum:y})}const _=new Set(d);this.buildTrack(this.lines.map(p=>({pts:p.pts,ys:p.ys}))),this.buildTrack(l.map((p,x)=>({w:p,i:x})).filter(({w:p,i:x})=>!_.has(x)&&c(p)<$h).map(({w:p})=>({pts:p.pts,ys:null}))),o.forEach((p,x)=>{(_.has(x)||c(l[x])<$h)&&(p.skip=!0)});const g=p=>{const x=Jn(sM(p)),M=new J(x,$n());M.castShadow=!0;const v=new Et;return v.add(M),v.visible=!1,this.group.add(v),v};for(let p=0;p<xs;p++)this.cars.push(g(p===0||p===xs-1));this.cars[xs-1].children[0].rotation.y=Math.PI}gradedHeights(t,e,n){const s=t.map(([c,h])=>this.trackY(c,h));let o=0;t.forEach((c,h)=>{Math.hypot(c[0]-n[0],c[1]-n[1])<Math.hypot(t[o][0]-n[0],t[o][1]-n[1])&&(o=h)});const r=s[o],a=s.map((c,h)=>{let f=0,d=0;for(let u=h;u>=0&&e[h]-e[u]<40;u--)f+=s[u],d++;for(let u=h+1;u<s.length&&e[u]-e[h]<40;u++)f+=s[u],d++;return f/d}),l=.02;return a.map((c,h)=>{const f=l*Math.abs(e[h]-e[o]);c=Math.min(r+f,Math.max(r-f,c));const d=this.route.project(t[h][0],t[h][1]),u=this.bridges.rampAt(d.s,d.d);return u.onDeck?Math.max(c,u.y+.25):c})}trackY(t,e){const n=this.route.project(t,e),s=this.ww.halfWidthAt(n.s),o=n.dist<s+3.5?this.terrain.bankTop(n.s):this.terrain.landHeight(t,e,n.s,n.d);return Math.max(o,this.bridges.rampAt(n.s,n.d).y)+.25}buildTrack(t){const e=[],n=[],s=[],o=new pn,r=new N(0,1,0),a=new N(1,1,1);for(const{pts:u,ys:m}of t)for(let _=0;_+1<u.length;_++){const[g,p]=u[_],[x,M]=u[_+1],v=Math.hypot(x-g,M-p);if(v<.01)continue;const T=(x-g)/v,w=(M-p)/v,y=-w,C=T;o.setFromAxisAngle(r,Math.atan2(T,w));const S=Math.ceil(v/.7);let b=null;for(let L=0;L<=S;L++){const H=g+T*(v*L)/S,z=p+w*(v*L)/S,V=m?m[_]+(m[_+1]-m[_])*L/S:this.trackY(H,z);L<S&&e.push(new re().compose(new N(H,V-.12,z),o,a));const k=[H,V,z];if(b){for(const yt of[-1,1]){const zt=eM/2*yt,Ht=[b[0]+y*zt,b[1],b[2]+C*zt],K=[k[0]+y*zt,k[1],k[2]+C*zt];n.push(Ht[0],Ht[1]-.1,Ht[2],K[0],K[1]-.1,K[2],K[0],K[1],K[2]),n.push(Ht[0],Ht[1]-.1,Ht[2],K[0],K[1],K[2],Ht[0],Ht[1],Ht[2])}const F=1.7,j=[b[0]-y*F,b[1]-.2,b[2]-C*F],$=[b[0]+y*F,b[1]-.2,b[2]+C*F],lt=[k[0]-y*F,k[1]-.2,k[2]-C*F],ft=[k[0]+y*F,k[1]-.2,k[2]+C*F];s.push(...j,...lt,...$,...$,...lt,...ft)}b=k}}const l=new Vt(2.5,.12,.24),c=new dn(l,new jt({color:"#5a4a3c",roughness:1}),e.length);e.forEach((u,m)=>c.setMatrixAt(m,u)),c.receiveShadow=!0,this.group.add(c);const h=new ue;h.setAttribute("position",new Wt(s,3)),h.computeVertexNormals();const f=new J(h,new jt({color:"#6d635a",roughness:1,side:Te}));f.receiveShadow=!0,this.group.add(f);const d=new ue;d.setAttribute("position",new Wt(n,3)),d.computeVertexNormals(),this.group.add(new J(d,new jt({color:"#8d9196",metalness:.7,roughness:.35,side:Te})))}at(t,e){const{pts:n,ys:s,cum:o}=t;e=Math.max(0,Math.min(o.at(-1),e));let r=1;for(;r<o.length-1&&o[r]<e;)r++;const a=(e-o[r-1])/(o[r]-o[r-1]||1);return[n[r-1][0]+(n[r][0]-n[r-1][0])*a,s[r-1]+(s[r]-s[r-1])*a,n[r-1][1]+(n[r][1]-n[r-1][1])*a]}update(t,e){if(this.time+=t,this.rumble=0,!this.lines.length)return;if(!this.run){for(const h of this.cars)h.visible=!1;if(this.time<this.nextRun)return;const l=Math.floor(Math.random()*this.lines.length),c=Math.random()<.5?1:-1;this.run={line:l,dir:c,dist:c>0?-10:this.lines[l].cum.at(-1)+Li*xs+10}}const n=this.run,s=this.lines[n.line];n.dist+=n.dir*nM*t;const o=s.cum.at(-1);let r=1/0;this.cars.forEach((l,c)=>{const h=n.dist-n.dir*c*(Li+1),f=h-n.dir*Li,d=Math.max(h,f)>0&&Math.min(h,f)<o;if(l.visible=d,!d)return;const u=this.at(s,h),m=this.at(s,f),_=this.at(s,(h+f)/2);l.position.set(_[0],_[1],_[2]),l.rotation.set(0,Math.atan2(u[0]-m[0],u[2]-m[2]),0),l.rotateX(-Math.atan2(u[1]-m[1],Li)),r=Math.min(r,l.position.distanceTo(e))}),this.rumble=Math.max(0,1-r/350),(n.dir>0?n.dist-xs*(Li+1)>o:n.dist+xs*(Li+1)<0)&&(this.run=null,this.nextRun=this.time+50+Math.random()*50)}}function sM(i){const t=new Et,e=(o,r={})=>new jt({color:o,...r}),n=(o,r,a,l,c,h,f)=>{const d=new J(new Vt(o,r,a),e(l));return d.position.set(c,h,f),t.add(d),d},s=Li-.4;n(2.7,2.6,s,"#c8102e",0,2.25,0),n(2.72,.9,s*.98,"#3a3f45",0,2.5,0),n(2.74,.12,s*.98,"#f4f4f0",0,1.65,0),n(2.6,.25,s*.99,"#9aa0a6",0,3.6,0),n(2.5,.6,s*.9,"#2b2b2b",0,.75,0);for(const o of[-s/2+3,s/2-3]){n(2.2,.5,2.4,"#1b1b1b",0,.45,o);for(const r of[-.8,.8])for(const a of[-.75,.75]){const l=new J(new Qt(.42,.42,.12,10),e("#3a3a3a"));l.rotation.z=Math.PI/2,l.position.set(a,.42,o+r),t.add(l)}}for(let o=0;o<2;o++)n(.06,2,.9,"#2b2b2b",o?1.36:-1.36,2.1,-s/2+1.6);if(i){const o=new J(new Qt(1.35,1.35,2.6,8,1,!1,0,Math.PI),e("#c8102e"));o.rotation.set(Math.PI/2,0,Math.PI/2),o.scale.set(1,1,.5),o.position.set(0,2.25,s/2),t.add(o),n(2.2,1.2,.5,"#f2c200",0,1.4,s/2+.45),n(2,.7,.3,"#22282e",0,2.75,s/2+.45)}return t}const Ci=48,oM=.35,Ra=14,rM=.8,qh=1.1;class aM{constructor(t,e,n){O(this,"mesh");O(this,"points",[]);O(this,"emitIn",0);O(this,"pos");O(this,"col");O(this,"uv");O(this,"churn");O(this,"washed",new Map);O(this,"time",0);this.route=t,this.ww=e;const s=Ci*4;this.pos=new Float32Array(s*3),this.col=new Float32Array(s*4),this.uv=new Float32Array(s*2);const o=[];for(const a of[0,1]){const l=a*Ci*2;for(let c=0;c<Ci-1;c++){const h=l+c*2,f=h+1,d=h+2,u=h+3;o.push(h,d,f,f,d,u)}}const r=new ue;r.setAttribute("position",new Pe(this.pos,3).setUsage(Fi)),r.setAttribute("color",new Pe(this.col,4).setUsage(Fi)),r.setAttribute("uv",new Pe(this.uv,2).setUsage(Fi)),r.setIndex(o),this.mesh=new J(r,new Zn({map:lM(),vertexColors:!0,transparent:!0,depthWrite:!1,side:Te})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.churn=new J(new Gl(1,18),new Zn({color:"#f4f8f4",transparent:!0,opacity:0,depthWrite:!1})),this.churn.rotation.x=-Math.PI/2,this.churn.position.set(0,.04,-9.6),n.add(this.churn)}update(t,e,n,s,o,r){this.time+=t;for(const h of this.points)h.age+=t;for(;this.points.length&&this.points[0].age>Ra;)this.points.shift();const a=De(2.6,4.6,o);if(this.emitIn-=t,this.emitIn<=0)if(this.emitIn=oM,a>.02){const h=-Math.cos(s),f=Math.sin(s);this.points.push({s:e,x:n[0],z:n[1],nx:h,nz:f,age:0,strength:a,start:1}),this.points.length>Ci&&this.points.shift()}else this.points.length&&this.points.at(-1).strength>0&&(this.points.push({s:e,x:n[0],z:n[1],nx:-Math.cos(s),nz:Math.sin(s),age:0,strength:0,start:1}),this.points.length>Ci&&this.points.shift());this.col.fill(0);const l=[...this.points].reverse();for(const h of[0,1]){const f=h?1:-1,d=h*Ci*2;for(let u=0;u<Ci;u++){const m=l[Math.min(u,l.length-1)],_=(d+u*2)*3,g=(d+u*2)*4;if(!m)continue;const p=this.spread(m),x=this.ww.levelAt(m.s)+.03,M=u<l.length?m.strength*(1-m.age/Ra)**1.5*.75:0;for(const[v,T]of[[0,p-qh/2],[1,p+qh/2]])this.pos[_+v*3]=m.x+m.nx*T*f,this.pos[_+v*3+1]=x,this.pos[_+v*3+2]=m.z+m.nz*T*f,this.col.set([.95,.97,.95,M],g+v*4),this.uv.set([v,m.s*.12],(d+u*2+v)*2)}}this.mesh.geometry.getAttribute("position").needsUpdate=!0,this.mesh.geometry.getAttribute("color").needsUpdate=!0,this.mesh.geometry.getAttribute("uv").needsUpdate=!0;const c=this.churn.material;c.opacity=Se(r,0,1)*(.3+.1*Math.sin(this.time*11)),this.churn.scale.setScalar(.7+r*.6+.05*Math.sin(this.time*7))}spread(t){const e=this.ww.halfWidthAt(t.s);return Math.min(t.start+t.age*rM,e+.4)}washes(t){const e=[];for(const n of t){if(this.time-(this.washed.get(n)??-99)<12)continue;const s=this.route.project(n.x,n.z,n.s).d,o=Math.sign(s)||1;for(const r of this.points){if(r.strength<.15||Math.abs(r.s-n.s)>n.halfL)continue;const l=this.route.project(r.x,r.z,r.s).d+o*this.spread(r);if(o*l>=Math.abs(s)-n.halfB-.2){const c=r.strength*(1-r.age/Ra);if(c<.1)continue;this.washed.set(n,this.time),e.push({boat:n,strength:c});break}}}return e}}function lM(){const e=document.createElement("canvas");e.width=64,e.height=256;const n=e.getContext("2d"),s=n.createImageData(64,256);for(let r=0;r<256;r++)for(let a=0;a<64;a++){const l=a/63,c=Math.sin(l*Math.PI)**1.5,h=Math.random()**2.2,f=.5+.5*Math.sin(r*.35+Math.sin(a*.4)*2),d=c*Math.min(1,h*1.6+f*.25),u=(r*64+a)*4;s.data[u]=s.data[u+1]=s.data[u+2]=255,s.data[u+3]=d*255}n.putImageData(s,0,0);const o=new Un(e);return o.wrapS=Wn,o.wrapT=Is,o}const Yh=["#c0392b","#2e86c1","#f4f4f0","#2b2b2b","#7f8c8d","#27ae60","#d35400","#1d3557","#b8b8b8","#8e44ad"],Ui=4.3;function cM(){const i=new Et,t=new Et,e=o=>new jt({color:o}),n=(o,r,a,l,c,h,f=0)=>{const d=new J(new Vt(r,a,l),e(c));d.position.set(0,h,f),o.add(d)};n(i,1.78,.62,Ui,"#ffffff",.6),n(i,1.6,.5,2.3,"#ffffff",1.15,-.25),n(t,1.62,.42,2,"#26313a",1.12,-.2),n(t,1.82,.16,.2,"#1b1b1b",.42,Ui/2),n(t,1.82,.16,.2,"#1b1b1b",.42,-Ui/2),n(t,1.4,.12,.05,"#f6efc8",.72,Ui/2+.01),n(t,1.4,.12,.05,"#b8241b",.72,-Ui/2-.01);for(const o of[-.82,.82])for(const r of[-1.35,1.35]){const a=new J(new Qt(.33,.33,.22,10),e("#1b1b1b"));a.rotation.z=Math.PI/2,a.position.set(o,.33,r),t.add(a)}const s=o=>{const r=new Et;return r.add(o),Jn(r)};return{body:s(i),rest:s(t)}}class hM{constructor(t){O(this,"group",new Et);O(this,"paths",[]);O(this,"cars",[]);O(this,"body");O(this,"rest");O(this,"rand",vi(99));O(this,"respawn");for(const a of t){const l=[0];for(let c=1;c<a.pts.length;c++)l.push(l[c-1]+Math.hypot(a.pts[c][0]-a.pts[c-1][0],a.pts[c][2]-a.pts[c-1][2]));l.at(-1)<40||this.paths.push({pts:a.pts,cum:l,lane:Math.min(2.2,Math.max(1.1,a.w/4)),bridge:a.bridge})}const e=this.paths.map(a=>(a.bridge?12:1)*Math.min(3,a.cum.at(-1)/120)),n=e.reduce((a,l)=>a+l,0),s=this.paths.length?Math.min(60,Math.round(n*1.5)):0,o=cM();this.body=new dn(o.body,$n(),Math.max(1,s)),this.rest=new dn(o.rest,$n(),Math.max(1,s));for(const a of[this.body,this.rest])a.castShadow=!0,a.frustumCulled=!1,a.instanceMatrix.setUsage(Fi),this.group.add(a);const r=()=>{let a=this.rand()*n;for(let l=0;l<e.length;l++)if((a-=e[l])<=0)return l;return e.length-1};for(let a=0;a<s;a++){const l=r(),c={path:l,dist:this.rand()*this.paths[l].cum.at(-1),dir:this.rand()<.5?1:-1,speed:8+this.rand()*5,colour:new kt(Yh[Math.floor(this.rand()*Yh.length)])};this.cars.push(c),this.body.setColorAt(a,c.colour)}this.body.count=this.rest.count=s,this.respawn=a=>{a.path=r(),a.dir=this.rand()<.5?1:-1,a.dist=a.dir>0?0:this.paths[a.path].cum.at(-1),a.speed=8+this.rand()*5}}at(t,e){e=Math.max(0,Math.min(t.cum.at(-1),e));let n=1;for(;n<t.cum.length-1&&t.cum[n]<e;)n++;const s=(e-t.cum[n-1])/(t.cum[n]-t.cum[n-1]||1),o=t.pts[n-1],r=t.pts[n];return[o[0]+(r[0]-o[0])*s,o[1]+(r[1]-o[1])*s,o[2]+(r[2]-o[2])*s]}update(t){const e=new re,n=new pn,s=new Sn(0,0,0,"YXZ"),o=new N,r=new N(1,1,1);this.cars.forEach((a,l)=>{const c=this.paths[a.path];a.dist+=a.dir*a.speed*t,(a.dist<0||a.dist>c.cum.at(-1))&&this.respawn(a);const h=this.paths[a.path],f=this.at(h,a.dist+a.dir*Ui*.45),d=this.at(h,a.dist-a.dir*Ui*.45),u=f[0]-d[0],m=f[2]-d[2],_=Math.hypot(u,m)||1,g=m/_,p=-u/_;o.set((f[0]+d[0])/2+g*h.lane,(f[1]+d[1])/2,(f[2]+d[2])/2+p*h.lane),s.set(-Math.atan2(f[1]-d[1],_),Math.atan2(u,m),0),n.setFromEuler(s),e.compose(o,n,r),this.body.setMatrixAt(l,e),this.rest.setMatrixAt(l,e)}),this.body.instanceMatrix.needsUpdate=this.rest.instanceMatrix.needsUpdate=!0}}const so=[1,2,5,10,30],Ca=80;function uM(i,t){return{pub:`You moor up and pop into ${i} for a pint of something local. An hour slips happily by.`,bar:`A drink at ${i}, watching the boats go by. An hour slips happily by.`,cafe:`Tea and a slab of cake at ${i}, eaten on the roof. An hour slips happily by.`,ice_cream:`An ice cream from ${i}, eaten on the roof. Bliss.`,restaurant:`A proper meal at ${i}. Nobody has to cook in the galley tonight. An hour slips happily by.`,hotel:`You stretch your legs and have a nose round ${i}. An hour slips happily by.`}[t]??`You stop at ${i}. An hour slips happily by.`}function dM(i,t){return{Northgate:"Above you: the Northgate, one of the medieval gateways through Chester’s city walls. The canal runs along the old moat.","Water Tower":"Off to the side: the Water Tower, built in the 1320s to guard the old river port when the Dee still reached the walls.","Lead Shot Tower":"That tall brick tower is the Lead Shot Tower (1799), where molten lead was dropped from the top to make shot.","Bridge of Sighs":"Overhead: the Bridge of Sighs (1793). Condemned prisoners from the Northgate gaol were led across it to the chapel for their last rites.","King Charles Tower":"Up on the walls: King Charles’ Tower. Legend has it Charles I watched his army lose the Battle of Rowton Moor from here in 1645.","Morgan's Mount":"Morgan’s Mount, a little gun platform on the walls from the Civil War siege of Chester.","Pemberton's Parlour":"Pemberton’s Parlour, a tower on the walls named after an 18th-century ropemaker who watched his men at work from it."}[i]??`Look out: ${i}${t==="tower"?", part of the old city walls":""}.`}const jh=['% rocks in your wash. "Tickover past moored boats, please!"',"A mug of tea slides off the roof of %. Slow down past moored boats!","The owner of % gives you a Look. Ease off to tickover when passing."],fM=1/60,Pa=2.23694,Xu=document.getElementById("loading"),$u=document.getElementById("loading-text"),pM=Xu.querySelector(".bar div");let mM=0;async function hi(i){$u.textContent=i,pM.style.width=`${Math.min(100,++mM*11)}%`,await new Promise(t=>requestAnimationFrame(()=>setTimeout(t,0)))}async function gM(){await hi("Fetching the map…");const i=await pv("./data/chester.json");await document.fonts.ready;const t=document.getElementById("scene"),e=new l_({canvas:t,antialias:!0});e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setSize(innerWidth,innerHeight),e.toneMapping=Qh,e.toneMappingExposure=.62,e.shadowMap.enabled=!0,e.shadowMap.type=Kh;const n=new Cu,s=new rn(55,innerWidth/innerHeight,.4,4500);await hi("Surveying the canal…");const o=new mv(i.centreline),r=new wv(i.locks,i.bridges,o.length,[4700,i.meta.towerWharfS-60]),a=[],l=[];for(let R=0;R<i.centreline.length;R+=2)a.push(i.centreline[R]),l.push(i.centreline[R+1]);const c=520,h={x0:Math.min(...a)-c,x1:Math.max(...a)+c,z0:Math.min(...l)-c,z1:Math.max(...l)+c},f=new Av(o,r,h);f.cuttings=i.cuttings??[],f.setRivers(i.rivers),f.urbanAt=zv(i.buildings,h);const d=i.parks.map(R=>{let I=1/0,D=-1/0,Y=1/0,et=-1/0;for(let ut=0;ut<R.p.length;ut+=2)I=Math.min(I,R.p[ut]),D=Math.max(D,R.p[ut]),Y=Math.min(Y,R.p[ut+1]),et=Math.max(et,R.p[ut+1]);return{ring:R.p,x0:I,x1:D,z0:Y,z1:et}});f.parkAt=(R,I)=>d.some(D=>R>=D.x0&&R<=D.x1&&I>=D.z0&&I<=D.z1&&ql(R,I,D.ring)),await hi("Digging the cut…");const u=new Vv(o,r,i.bridges,f);f.embankments=u.placed.filter(R=>R.data.kind==="road"&&R.data.w>3.5).map(R=>({x:R.x,z:R.z,ux:Math.sin(R.data.dir),uz:Math.cos(R.data.dir),deck:R.deck,halfSpan:R.halfSpan,halfWidth:R.data.w/2+2})),n.add(f.buildStrip()),await hi("Shaping the land…"),n.add(f.buildFar()),await hi("Filling it with water…");const m=new Lv(o,r);m.addRivers(i.rivers,f.riverLevel);for(const R of i.water){let I=0,D=0;const Y=R.p.length/2;for(let et=0;et<R.p.length;et+=2)I+=R.p[et]/Y,D+=R.p[et+1]/Y;o.project(I,D).dist<40||m.addPond(R.p,f.heightAt(I,D)-.25)}n.add(m.group),n.add(u.group),n.add(new $x(o,r,f,i).group);const _=new iM(o,r,f,u,i.rails);n.add(_.group);const g=new qv(o,r,f);n.add(g.group);const p=i.meta.towerWharfS+70,x=new bx(o,r,f,i.bridges,i.meta.towerWharfS,p,i.pois??[]);n.add(x.group);const M=new Bv(i,o,r,f,u);await M.build(hi),n.add(M.group);const v=new hM(M.carPaths);n.add(v.group),await hi("Lighting the stove…");const T=new jv(n,e),w=Yl();w.group.rotation.order="YXZ",n.add(w.group);const y=new ux(o,r);y.placeAt(p),y.obstacles=[...x.boats];const C=new Tx(o,r,f,y),S=new Kx(w.group),b=new aM(o,r,w.group);n.add(b.mesh),n.add(C.group);const L=new Cx(o,r,x,y);L.blockedAt=()=>F.filter(R=>R.active).map(R=>R.s),n.add(L.group);const H=new Dx(o,r,f,M,x,i.bridges);n.add(H.group);const z=new Ox(o,r,f,y,H.anglerSpots,H.gardens);n.add(z.group);let V=0;const k=new Wx(o,r,f,y);n.add(k.group);const F=[],j=x.zones.find(R=>/Lock Keeper/.test(R.name)),$=[j?j.s1+30:1390,2185],lt=R=>{for(let I=0;I<120;I++){const D=R+(I%2?1:-1)*Math.ceil(I/2)*2;if(!(i.bridges.some(Y=>Math.abs(Y.s-D)<Y.w/2+20)||r.gates.some(Y=>Math.abs(Y.s-D)<40))&&!x.zones.some(Y=>D>Y.s0-8&&D<Y.s1+8)&&!x.boats.some(Y=>Math.abs(Y.s-D)<Y.halfL+6)&&r.bodies[r.bodyIndexAt(D)].kind==="pound")return D}return R};for(const R of $){const I=new Hx(o,r,f);I.s=lt(R),x.clearAround(I.s,Ca-10,y.obstacles),n.add(I.group),F.push(I)}const ft=new tM(o,r,f,[{item:"logs",s:lt(3620)},{item:"coal",s:lt(i.meta.towerWharfS-150)}],R=>S.has(R));for(const R of ft.list)x.clearAround(R.s,25,y.obstacles);n.add(ft.group);const yt=["Sam","Priya","Dave","Margaret","Tom","Aisha","Bill","Fran","Gethin","Rosie"],zt=['"Any chance of a lift to %? My feet are killing me."',`"Going towards %? I'd love a ride, I've never been on a narrowboat."`,`"You couldn't drop me at %, could you? I'll work the locks!"`,`"Room for a little one? I'm meeting friends at %."`];let Ht="trip",K=0,st=null;const At=()=>{if(!st)return;const R=st;st=null,setTimeout(()=>n.remove(R.person.group),6e3)},rt=R=>{const I=Gi({coat:"#3d4a3a",trousers:"#2d3a55",hair:"#9a9a9a",hairStyle:"cap",hat:"#4a3f33",longCoat:!0}),D=o.frame(R),Y=(r.halfWidthAt(R)+1.4)*oe;I.group.position.set(D.x+D.nx*Y,f.bankTop(R),D.z+D.nz*Y),I.group.rotation.y=Math.atan2(-D.nx*oe,-D.nz*oe),n.add(I.group),st={person:I,turning:null},Ht="helper",W.showOffer("On the towpath","Need a hand?",`An old boater in a flat cap has been watching for a while. "Having a spot of bother? Here, let me show you how it's done."`,"Yes please","I've got this")},Tt=R=>{if(!st)return;C.castOff();const I=o.frame(R),D=Math.atan2(I.tx,I.tz),Y=Math.cos(y.psi-D)>=0,et=D+(Y?Math.PI:0);let ut=Math.atan2(Math.sin(et-y.psi),Math.cos(et-y.psi));Math.abs(ut)<.3&&(ut=Math.PI),st.turning={t:0,s:R,psi0:y.psi,psi1:y.psi+ut,x0:y.x,z0:y.z},W.toast("The old boater hops aboard, takes the tiller and talks you through it…","info",5e3)};let Pt=null,St=null;const Yt=new Set,nt=R=>R.name.split(",")[0],ht=R=>{Ht="trip",q.choose(R);const I=o.frame(y.s),D=Math.sin(y.psi)*I.tx+Math.cos(y.psi)*I.tz>=0?1:-1,Y=it(q.current.zone),et=(Y.s0+Y.s1)/2,ut=Math.min(y.s,et),vt=Math.max(y.s,et),Ft=r.gates.filter(de=>de.s>ut&&de.s<vt&&de.label!=="top gates").length,Gt=Ft?` · ${Ft} lock${Ft>1?"s":""}`:"",_t=(Math.abs(et-y.s)/1e3).toFixed(1),ie=(et-y.s)*D>0?`${_t} km ahead${Gt}`:`${_t} km behind you: turn round at a winding hole${Gt}`;W.showOffer("Mission",q.current.title,`${q.current.brief}<br><b>${ie}</b>`)},U=new Set;for(const R of Oi)x.addStart(R.from);const Ot=()=>{const R=Q||!!q.result;Oi.forEach((I,D)=>x.showStart(I.from,!R&&!q.done.has(D))),pt.setMissionStarts(Oi.filter((I,D)=>!q.done.has(D)&&!(Q&&D===q.index)).map(I=>{const D=it(I.from);return o.point((D.s0+D.s1)/2,0)}),R)},at=R=>{if(St||Pt||Yt.has(R.id)||W.offerOpen||q.result||(Yt.add(R.id),Math.random()>.7))return;const I=o.frame(y.s),D=Math.sin(y.psi)*I.tx+Math.cos(y.psi)*I.tz>=0?1:-1,Y=_t=>(_t.s0+_t.s1)/2,et=x.zones.filter(_t=>_t!==R&&Math.abs(Y(_t)-y.s)>250&&Math.abs(Y(_t)-y.s)<1800);if(!et.length)return;const ut=et.filter(_t=>Math.sign(Y(_t)-y.s)===D),vt=ut.length?ut:et,Ft=vt.sort((_t,ie)=>Math.abs(Y(_t)-y.s)-Math.abs(Y(ie)-y.s))[Math.floor(Math.random()*Math.min(2,vt.length))],Gt=yt[Math.floor(Math.random()*yt.length)];Pt={name:Gt,dest:Ft,from:R.name},setTimeout(()=>{if((Pt==null?void 0:Pt.name)!==Gt||!C.moored||W.offerOpen)return void(Pt=null);Ht="lift",W.showOffer(`At ${R.name}`,`Fancy giving ${Gt} a lift?`,zt[Math.floor(Math.random()*zt.length)].replace("%",nt(Ft)),"Hop aboard","Sorry, not today")},1800)},Lt=()=>{if(!Pt)return;const R=Gi(Hi(Math.random));R.group.position.set(0,.38+.47,17.4/2-2.3),El(R),w.group.add(R.group),St={name:Pt.name,dest:Pt.dest,person:R},W.toast(`${St.name} hops aboard and settles in the bow. Next stop: ${nt(St.dest)}.`,"info",4500),Pt=null},mt=()=>{if(!St)return;w.group.remove(St.person.group);const R=S.nextFrom(Zx);R&&S.give(R),W.toast(R?`${St.name} hops off with a cheery wave, and leaves you ${fo[R].name} for the roof. 🎁`:`${St.name} hops off with a cheery wave, and presses a slice of cake into your hand.`,"info",6e3),St=null},Xt=()=>{for(const R of F){const I=y.obstacles.indexOf(R.obstacle);I>=0&&y.obstacles.splice(I,1),R.place(R.s),y.obstacles.push(R.obstacle)}pt.setHazards(F.filter(R=>R.active).map(R=>o.point(R.s,0)))},Rt=x.zones.filter(R=>R.kind==="stop"),P=(i.pois??[]).filter(R=>R.type==="sight"),E=new Set,X=new Set,q=new Ax(T.hour),it=R=>x.zones.find(I=>I.id===R);let Q=!1;const Ct=new fx,gt=new _x;Ct.onFirstInput=()=>gt.start(),t.addEventListener("pointerdown",()=>gt.start());const pt=new gx(i,o,r,h);pt.addMooredBoats(x.boats),pt.setPlaces([...x.zones.filter(R=>R.kind==="stop").map(R=>{const[I,D]=o.point((R.s0+R.s1)/2,0),Y={pub:"🍺",bar:"🍸",cafe:"☕",restaurant:"🍽️",hotel:"🛏️",ice_cream:"🍦"}[R.poi.kind]??"⚓";return{x:I,z:D,icon:Y,name:R.name}}),...(i.pois??[]).filter(R=>R.type==="sight").map(R=>({x:R.x,z:R.z,icon:"★",name:R.name}))]);const se=()=>{const R=it(q.current.zone),[I,D]=o.point((R.s0+R.s1)/2,0);pt.setDestination(I,D,R.name)};Xt();const W=new px(document.getElementById("hud"),R=>Ct.push(R),pt.el,pt.bigEl);["localhost","127.0.0.1"].includes(location.hostname)&&pt.enableDevTeleport(()=>[y.x,y.z],(R,I)=>{C.castOff(),k.stop();const D=o.frame(y.s),Y=Math.sin(y.psi)*D.tx+Math.cos(y.psi)*D.tz>=0,et=Math.min(o.length-12,Math.max(12,o.project(R,I).s));y.placeAt(et,Y),y.notch=0,W.toast(`Moved to ${((et-i.meta.towerWharfS)/1e3).toFixed(2)} km from Tower Wharf`,"info",2e3)}),W.onNotch=R=>{k.active&&(k.stop(),W.toast("You take the tiller back.","info",2e3)),y.notch=R};const dt=new ev(s,t);dt.enableDamping=!0,dt.minDistance=5,dt.maxDistance=260,dt.maxPolarAngle=1.48,dt.enablePan=!1;let $t=-10;const qt=new Hu,It=new ot;let Kt=null,Jt=!1;const pe=R=>{const I=t.getBoundingClientRect();return It.set((R.clientX-I.left)/I.width*2-1,-((R.clientY-I.top)/I.height)*2+1),qt.setFromCamera(It,s),qt.intersectObject(w.tillerHit,!1).length>0};t.addEventListener("pointerdown",R=>{(Z==="steerer"||pe(R))&&(Kt={x:R.clientX,id:R.pointerId},dt.enabled=!1,t.setPointerCapture(R.pointerId),t.style.cursor="grabbing",k.active&&k.stop(),Jt||(Jt=!0,w.tillerHint.visible=!1))},{capture:!0}),t.addEventListener("pointermove",R=>{Kt&&R.pointerId===Kt.id?Ct.touchSteer=Fs.clamp(-(R.clientX-Kt.x)/120,-1,1):!Kt&&R.pointerType==="mouse"&&Z==="follow"&&(t.style.cursor=pe(R)?"grab":"")});const B=R=>{!Kt||R.pointerId!==Kt.id||(Kt=null,Ct.touchSteer=0,t.style.cursor="",Z==="follow"&&(dt.enabled=!0))};t.addEventListener("pointerup",B),t.addEventListener("pointercancel",B);let xt=0;dt.addEventListener("start",()=>$t=performance.now()/1e3);let Z="follow";const tt=new N,bt=new N,wt=new N,Zt=R=>{const I=r.levelAt(y.s);w.group.position.set(y.x,I+Math.sin(R*1.3)*.015,y.z),w.group.rotation.set(Math.sin(R*.9)*.004,y.psi,Fs.clamp(-y.r*y.u*.5,-.04,.04)),w.rudder.rotation.y=-y.rudder*.6,tt.set(y.x,I+1.6,y.z)};Zt(0),bt.copy(tt),dt.target.copy(tt),s.position.set(y.x-Math.sin(y.psi)*24,tt.y+9,y.z-Math.cos(y.psi)*24),dt.update();let me=2,ce=null,Ut=null;const $e=R=>{var I;return R?`${R.action}:${((I=R.gate)==null?void 0:I.label)??""}:${R.group.name}`:""};let qe=null;const qi=new Set;let xi=0,En,Mi=0,Yi=!1,ji=0;const yi=()=>(Ut==null?void 0:Ut.adjacent)??[];let Zi="",bi=0;const Vs=R=>{const[I,D]=y.span();return I<R.s+.3&&D>R.s-.3},wo=R=>{switch(R){case"throttleUp":k.active&&(k.stop(),W.toast("You take the tiller back.","info",2e3)),y.notch=Math.min(Mr,y.notch+1);break;case"throttleDown":y.notch=Math.max(xr,y.notch-1);break;case"neutral":y.notch=0;break;case"paddles":ce&&r.togglePaddle(ce);break;case"gates":if(ce){const I=r.toggleGate(ce,Vs(ce));I&&W.toast(I,"warn")}break;case"nextGate":{const I=yi();I.length&&(ce=I[(I.indexOf(ce)+1)%I.length],qe=$e(Ut));break}case"timeFaster":me=so[Math.min(so.length-1,so.indexOf(me)+1)];break;case"timeSlower":me=so[Math.max(0,so.indexOf(me)-1)];break;case"camera":Z==="follow"?(wt.copy(s.position).sub(dt.target),Z="steerer",dt.enabled=!1,w.steerer.visible=!1):(Z="follow",dt.enabled=!0,s.position.copy(dt.target).add(wt),w.steerer.visible=!0);break;case"map":pt.bigOpen=!pt.bigOpen,W.setMapOpen(pt.bigOpen);break;case"help":W.toggleHelp();break;case"mute":gt.toggleMute();break;case"moor":{const I=C.act();if(I&&W.toast(I,"info",3e3),C.moored){const D=x.zoneAt(y.s),Y=it(q.current.zone);if((D==null?void 0:D.kind)==="stop"&&!E.has(D.id)&&(E.add(D.id),W.toast(uM(D.poi.name,D.poi.kind),"info",7e3),T.hour=(T.hour+1)%24),St&&D===St.dest&&mt(),(D==null?void 0:D.kind)==="stop"&&at(D),Q&&D===Y&&!q.result){const et=S.nextFrom(jx);et&&S.give(et),W.showSummary(q.complete(T.hour),D.name,et?fo[et].name:void 0),Ot(),x.setActive(null),pt.clearDestination()}else(D==null?void 0:D.kind)!=="stop"&&W.toast(D?`Moored at ${D.name}.`:Q?`Moored up. Your trip ends at ${Y.name}.`:"Moored up.","info",3500)}break}case"nextTrip":if(q.result)q.next(T.hour),W.hideSummary(),Q=!1,Xt(),k.roster(),Ot();else if(W.offerOpen&&Ht==="helper"){W.hideOffer();const I=r.windingHoles.reduce((D,Y)=>Math.abs(Y-y.s)<Math.abs(D-y.s)?Y:D);Tt(I)}else W.offerOpen&&Ht==="lift"?(W.hideOffer(),Lt()):W.offerOpen&&(W.hideOffer(),Q=!0,q.next(T.hour),Ot(),x.setActive(it(q.current.zone)),se());break;case"declineTrip":W.offerOpen&&W.hideOffer(),Ht==="trip"&&U.add(q.index),Ht==="helper"&&st&&(W.toast(`"Right you are! I'll leave you to it." They lean on the fence to watch.`,"info",3500),K=0,At()),Ht==="lift"&&Pt&&(W.toast(`"No worries!" ${Pt.name} sets off up the towpath on foot.`,"info",3500),Pt=null);break;case"tripOffer":break;case"clear":{const I=F.find(Y=>Y.active&&Math.abs(Y.s-y.s)<Ca),D=ft.near(y.s);if(!I&&D){C.moored?(S.give(D.item),D.group.visible=!1,W.toast(D.done,"info",4500)):W.toast("Moor up alongside first (F), then you can load it.","info",3e3);break}I?C.moored?I.startClearing()&&W.toast(Math.abs(I.s-y.s)>25?"You walk up the towpath with the boat hook. Heave!":"Out with the boat hook. Heave!","info",2500):W.toast("Moor up first (F), then you can get at it with the boat hook.","info",3500):W.toast("There's nothing here to clear.","info",2e3);break}case"autopilot":k.active?(k.stop(),W.toast("You take the tiller back.","info",2500)):Ut&&k.isStaffed(Ut.group)?C.count?W.toast("Cast off first (F), then the volunteers can bring you through.","info",3500):(k.start(Ut.group),W.toast("The volunteers take over: sit back and enjoy it. (Throttle or steer to take the tiller back.)","info",5e3)):W.toast("No volunteers on duty here, so you'll have to work this one yourself.","info",3e3);break;case"headlight":Yi=!Yi,w.headlight.intensity=Yi?40:0;break}},Ir=()=>{const R=r.bodies[r.bodyIndexAt(y.s)],I=(y.s-i.meta.towerWharfS)/1e3,D=`${Math.abs(I).toFixed(1)} km ${I>=0?"above":"below"} Tower Wharf`;if(R.kind==="chamber")return[`In ${R.lockName}`,D];const Y=r.gates.find(Ft=>Ft.s>y.s),et=[...r.gates].reverse().find(Ft=>Ft.s<y.s),ut=u.at(y.s),vt=ut!=null&&ut.data.name?` · under ${ut.data.name}`:"";return Math.abs(y.s-i.meta.towerWharfS)<70?["Tower Wharf",`Junction with the Dee Branch${vt}`]:Y&&Y.s-y.s<160?[`Approaching ${Y.lockName}`,D+vt]:et&&y.s-et.s<120?[`Leaving ${et.lockName}`,D+vt]:Y&&et?[`${et.lockName} → ${Y.lockName}`,D+vt]:[Y?`Towards ${Y.lockName}`:"Towards Christleton & Nantwich",D+vt]},Ur=()=>{const R=dt.target,I=s.position,D=R.distanceTo(I);for(let Y=4;Y<D;Y+=1.5){const et=Y/D,ut=R.x+(I.x-R.x)*et,vt=R.y+(I.y-R.y)*et,Ft=R.z+(I.z-R.z)*et,Gt=o.project(ut,Ft,y.s),_t=u.rampAt(Gt.s,Gt.d);if(vt<M.roofAt(ut,Ft)||vt<f.heightAt(ut,Ft)+.5||_t.onDeck&&vt<_t.y+1.2){s.position.lerpVectors(R,I,Math.max(4,Y-2)/D);return}}};W.toast("Welcome aboard the Chester Rose! W to get going. Cruise past a green ! for a mission. H for help.","info",7e3),Ot();const Nr=new J_;let A=0;addEventListener("resize",()=>{s.aspect=innerWidth/innerHeight,s.updateProjectionMatrix(),e.setSize(innerWidth,innerHeight)});const G=()=>{var On;const R=Math.min(Nr.getDelta(),.1);A+=R;for(const ct of Ct.drain())wo(ct);const I=R*me,D=Math.max(1,Math.ceil(I/fM));for(let ct=0;ct<D;ct++){r.update(I/D),y.bowThrust=Ct.bowThrust,!k.active&&!(st!=null&&st.turning)&&y.step(I/D,Ct.steer);for(const Dt of y.contacts)if(Dt.impulse>1500&&Mi<=0)if(gt.bump(Math.min(1,Dt.impulse/12e3)),Mi=.4,F.some(Bt=>Bt.obstacle===Dt.obstacle))W.toast("It's jammed solid. Moor up nearby (F) and clear it with the boat hook (G).","warn",3500);else if(Dt.kind==="boat"&&!x.boats.includes(Dt.obstacle))L.bumped(Dt.obstacle),Dt.impulse>3e3&&q.bumps++;else if(Dt.kind==="boat"){const Bt=Dt.obstacle;x.rockBoat(Bt,Math.min(.08,Dt.impulse/5e4)),Dt.impulse>3e3&&(q.bumps++,W.toast(`Bump! Sorry, ${Bt.name}. A head pops out of the hatch…`,"warn",3e3))}else Dt.impulse>9e3&&(q.bumps++,W.toast(Dt.kind==="gate"?"Bump! Into the lock gates.":"Clunk. Mind the bank!","info",2200))}Mi-=R;const Y=o.frame(y.s),et=Math.sin(y.psi)*Y.tx+Math.cos(y.psi)*Y.tz>=0;Ut=Ph(r,y.span(),et);for(const ct of r.events.splice(0))(!ct.group||ct.group===(Ut==null?void 0:Ut.group)||ct.group.gates.some(Bt=>Math.abs(Bt.s-y.s)<150))&&W.toast(ct.text,ct.kind);if(k.active&&Ct.steer!==0&&(k.stop(),W.toast("You take the tiller back.","info",2e3)),k.update(I,Ut,et)==="done"&&(W.toast("Through! The volunteers wave you on your way. Thanks, volunteers!","info",4500),Ut=Ph(r,y.span(),et)),!k.active&&(Ut!=null&&Ut.keeper)&&Ut.gate&&Ut.action!=="wait"){const ct=$e(Ut);if(ct!==Zi)Zi=ct,bi=A+1.5;else if(A>=bi){const Dt=Ut.gate;Ut.action==="paddlesUp"?Dt.wantPaddle=!0:Ut.action==="paddlesDown"?Dt.wantPaddle=!1:Ut.action==="close"?Dt.wantOpen=!1:Ut.action==="open"&&r.levelsMatch(Dt)&&(Dt.wantOpen=!0),Zi=""}}const ut=yi();qe!==null&&(qe!==$e(Ut)||!ce||!ut.includes(ce))&&(qe=null),qe===null&&(ce=Ut!=null&&Ut.gate&&!Ut.keeper?Ut.gate:ut.includes(ce)?ce:ut.at(-1)??null),g.setSelected(ce),W.setLockPanel(r,{gate:ce,step:Ut,candidates:ut.length,boatSpans:ce?Vs(ce):!1,volunteers:k.active?"active":k.isStaffed(Ut==null?void 0:Ut.group)?"available":"none"});for(const ct of r.gates)ct.paddle<.05?qi.delete(ct):Math.abs(ct.s-y.s)>110&&!qi.has(ct)&&(qi.add(ct),W.toast(`You've left the paddles up at ${ct.lockName}. The lock-keeper won't be pleased.`,"warn",6e3));xi=y.speed*Pa>4.3?xi+I:0,xi>6&&(W.toast("Steady on! The limit is 4 mph, and your wash is slapping the moored boats.","warn"),xi=-30),L.update(I,et?1:-1);for(const ct of L.events.splice(0)){const Dt=T.hour<12?"Morning":T.hour<18?"Afternoon":"Evening";ct.kind==="greet"?W.toast(`"${Dt}!" The steerer of ${ct.boat.name} gives you a wave.`,"info",3500):ct.kind==="wrongSide"?W.toast(`Pass oncoming boats on the right (port to port). ${ct.boat.name}'s steerer looks puzzled.`,"warn",4500):W.toast(`Bump! Sorry, ${ct.boat.name}!`,"warn",3e3)}{const ct=r.windingHoles.find(Bt=>Math.abs(Bt-y.s)<45);ct!==void 0&&!st&&!W.offerOpen&&!k.active?(K+=R,K>60&&rt(ct)):ct===void 0&&(K=0),st&&!st.turning&&bo(st.person,W.offerOpen?"wave":"rest",A);const Dt=st==null?void 0:st.turning;if(Dt){Dt.t+=R/12;const Bt=Math.min(1,Dt.t),we=Bt*Bt*(3-2*Bt),en=o.frame(Dt.s),ke=Math.min(1,Bt/.4);y.x=Dt.x0+(en.x-Dt.x0)*ke,y.z=Dt.z0+(en.z-Dt.z0)*ke,y.psi=Dt.psi0+(Dt.psi1-Dt.psi0)*we,y.u=y.v=y.r=0,y.notch=0,y.thrust=0,y.s=o.project(y.x,y.z,y.s).s,Bt>=1&&(W.toast('"There you go, facing the right way!" The old boater hops off and tips their cap.',"info",5e3),K=0,At())}}z.update(R),V-=R;for(const ct of z.events.splice(0))ct.kind==="quack"?(gt.quack(),V<=0&&(W.toast("Quack! A mallard paddles off, deeply unimpressed.","info",2500),V=25)):(q.rocked++,W.toast("An angler shakes a fist as your wash bobs their float. Ease off past the anglers!","warn",4e3));for(const ct of P)!X.has(ct.name)&&Math.abs(ct.s-y.s)<45&&(X.add(ct.name),W.toast(dM(ct.name,ct.kind),"info",7e3));{const ct=Math.sin(y.psi),Dt=Math.cos(y.psi),Bt=fn/2+.3,we=Math.min(1,Math.abs(y.thrust)/3250);b.update(I,y.s,[y.x-ct*Bt,y.z-Dt*Bt],y.psi,y.speed*Pa,we)}ji-=R;for(const ct of b.washes(x.boats))x.rockBoat(ct.boat,.02+ct.strength*.07),!(ct.strength<.35)&&(q.rocked++,ji<=0&&(W.toast(jh[Math.floor(Math.random()*jh.length)].replace("%",ct.boat.name),"warn",3500),ji=6));const vt=(On=u.at(y.s))==null?void 0:On.data.name;if(vt&&vt!==En&&W.toast(`Under ${vt}`,"info",2200),En=vt,Zt(A),w.tillerHint.visible){const ct=.5+.5*Math.sin(A*3);w.tillerHint.material.opacity=.25+.45*ct,w.tillerHint.scale.setScalar(1+.12*ct)}if(m.update(R),g.update(R),x.update(R),_.update(R,s.position),v.update(R),gt.rumble(_.rumble),C.update(r.levelAt(y.s)),T.update(I/3600,tt),T.sky.position.copy(s.position),Z==="follow"){const ct=tt.clone().sub(bt);if(ct.length()>50?(dt.target.copy(tt),s.position.set(y.x-Math.sin(y.psi)*24,tt.y+9,y.z-Math.cos(y.psi)*24),xt=0):(s.position.add(ct),dt.target.add(ct)),xt>0){const Dt=s.position.clone().sub(dt.target);s.position.copy(dt.target).addScaledVector(Dt.normalize(),xt)}if(performance.now()/1e3-$t>3&&Math.abs(y.u)>.25){const Dt=s.position.clone().sub(dt.target),Bt=Math.atan2(Dt.x,Dt.z);let en=y.psi+(y.u>0?Math.PI:0)-Bt;en=Math.atan2(Math.sin(en),Math.cos(en));const ke=en*Math.min(1,R*.5);Dt.applyAxisAngle(new N(0,1,0),ke),s.position.copy(dt.target).add(Dt)}dt.update(),xt=s.position.distanceTo(dt.target),Ur()}else{const ct=Math.sin(y.psi),Dt=Math.cos(y.psi),Bt=-fn/2+.9;s.position.set(y.x+ct*Bt,tt.y+.75,y.z+Dt*Bt),s.lookAt(y.x+ct*40,tt.y-.2,y.z+Dt*40)}bt.copy(tt),u.updateOcclusion(s.position,tt,R),W.setHelm({notch:y.notch,speedMph:y.speed*Pa,timeScale:me});const[Ft,Gt]=Ir();W.setLocation(Ft,Gt,`Journal: ${E.size}/${Rt.length} canalside stops · ${X.size}/${P.length} sights`),pt.draw(y.x,y.z,y.psi);const _t=it(q.current.zone),ie=(_t.s0+_t.s1)/2-y.s,de=y.s>_t.s0-4&&y.s<_t.s1+4,Me=Math.sign(ie)===(et?1:-1)?"ahead":"behind you",Fe=_t.name.split(",")[0],fe=de?`${Fe} · pull in and tie up (F)`:`${Fe} · ${(Math.abs(ie)/1e3).toFixed(1)} km ${Me}`;if(!Q&&!q.result&&Oi.forEach((ct,Dt)=>{if(q.done.has(Dt))return;const Bt=it(ct.from),we=Math.abs((Bt.s0+Bt.s1)/2-y.s);we>90?U.delete(Dt):we<45&&!U.has(Dt)&&!W.offerOpen&&ht(Dt)}),W.setTrip({state:q.result?"done":Q?"active":"none",n:q.index+1,title:q.current.title,brief:q.current.brief,where:fe}),St){const ct=St.dest,Dt=(ct.s0+ct.s1)/2-y.s,Bt=y.s>ct.s0-4&&y.s<ct.s1+4;W.setLift(`${St.name} → ${nt(ct)} · ${Bt?"moor up (F)":`${(Math.abs(Dt)/1e3).toFixed(1)} km ${Math.sign(Dt)===(et?1:-1)?"ahead":"behind"}`}`)}else W.setLift(null);let Nt=null;for(const ct of F){if(ct.update(I,A)){const Bt=y.obstacles.indexOf(ct.obstacle);Bt>=0&&y.obstacles.splice(Bt,1),q.cleared++,pt.setHazards(F.filter(we=>we.active).map(we=>o.point(we.s,0))),W.toast(`${ct.description.cleared} Cast off (F) when you're ready.`,"info",7e3)}if(!ct.active)continue;const Dt=Math.abs(ct.s-y.s);!ct.spotted&&Dt<90&&(ct.spotted=!0,W.toast(`${ct.description.spotted} Moor up nearby (F) and clear it with the boat hook (G).`,"warn",8e3)),Dt<Ca&&(!Nt||Dt<Math.abs(Nt.s-y.s))&&(Nt=ct)}let Be=C.prompt();const ae=Nt?void 0:ft.near(y.s);ae&&(Be=C.moored?{key:"G",text:ae.verb,ready:!0}:Be??{key:"F",text:`Moor up to load ${fo[ae.item].name}`,ready:!1}),Nt&&(C.moored?Be=Nt.clearing?{key:"G",text:`Clearing… ${Math.round(Nt.progress*100)}%`,ready:!1}:{key:"G",text:"Clear the blockage with the boat hook",ready:!0}:Be||(Be={key:"F",text:"Moor up alongside the towpath to get at the blockage",ready:!1})),W.setPrompt(Be);const tn=r.gates.reduce((ct,Dt)=>ct+(Math.abs(Dt.s-y.s)<120?Math.abs(Dt.flow):0),0);gt.update(y.notch,tn,W.isWinding,!T.isNight),e.render(n,s),requestAnimationFrame(G)};await hi("Casting off…"),Xu.classList.add("done"),requestAnimationFrame(G),Object.assign(window,{game:{scene:n,boat:y,ww:r,camera:s,route:o,renderer:e,moorings:x,trips:q,traffic:L,decor:H,life:z,blockages:F,volunteers:k,lines:C,minimap:pt,roof:S,pickups:ft,trains:_,cars:v}})}gM().catch(i=>{console.error(i),$u.textContent=`Something went wrong: ${i.message}`});
